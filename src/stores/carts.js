import { defineStore } from 'pinia'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import router from '../router'
import { auth, db } from '../firebase/db'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { ref, onValue, set, update, remove, push } from 'firebase/database'

const cartStore = defineStore('cart', {
  state: () => {
    return {
      // 購物車小loading
      loadingItem: '',
      token: '',
      userId: '',
      cart: {}, // 不是只能用陣列是 res.data格式是陣列所以之前沒用[0]才取不到
      cartItems: [], // ok
      coupons: [],
      orders: [],
      myOrder: {},
      cartNum: 0,
      nickName: '',
      admin: '',
      user: {},
      uid: null
    }
  },
  actions: {
    getCart (uid) {
      // 遊客uid 是 1
      const dataRef = ref(db, `carts/${uid}`)
      onValue(dataRef, snapshot => {
        this.cart = snapshot.val()
        if (this.cart) {
          this.cartItems = this.cart.items
          this.cartNum = this.cart.items.length
        } else if (!this.cart) {
          this.cartItems = []
          this.cartNum = 0
        }
      })
    },
    // 登入使用者如果要清空是全部刪掉 刪除刪到最後一個也是全部刪掉
    addCart (product, qty = 1) {
      let id = this.uid
      if (!this.uid) {
        id = '1'
      }

      this.loadingItem = 'loading'
      const obj = {
        items: [],
        coupon: {},
        deliveryCharge: 60,
        total: 0,
        finalTotal: 60
      }

      const item = {
        product,
        qty,
        total: product.price * qty
      }

      // 1. 使用者第一次加商品 找不到購物車
      if (!this.cartItems.length) {
        obj.items.push(item)
        obj.total += item.total
        obj.finalTotal += item.total

        const reference = ref(db, `carts/${id}`)
        set(reference, {
          items: obj.items,
          coupon: obj.coupon,
          deliveryCharge: obj.deliveryCharge,
          total: obj.total,
          finalTotal: obj.finalTotal
        })
      } else if (this.cartItems.length !== 0) { // 2.使用者購物車已有其他商品
        if (JSON.stringify(this.cartItems).indexOf(item.product.id) !== -1) { // (1) 加入相同產品
          this.cartItems.forEach((cartItem, index) => {
            if (cartItem.product.id === product.id) {
              this.cartItems[index].qty += qty
              this.cartItems[index].total = product.price * this.cartItems[index].qty
            }
          })
        } else if (JSON.stringify(this.cartItems).indexOf(item.product.id) === -1) { // (2) 加入不同產品
          this.cartItems.push(item)
        }
        obj.items = this.cartItems

        this.cartItems.forEach((cartItem) => {
          obj.total += cartItem.total
          obj.finalTotal += cartItem.total
        })
        update(ref(db), {
          [`carts/${id}/`]: {
            items: obj.items,
            coupon: obj.coupon,
            deliveryCharge: obj.deliveryCharge,
            total: obj.total,
            finalTotal: obj.finalTotal
          }
        })
      }
      this.toastMessage('加入購物車')
      this.loadingItem = ''
    },
    // 購物車 + - 按鈕
    updateCartNum (btnStatus, product, qty) {
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) {
        id = '1'
      }

      if (btnStatus === 'add') {
        qty += 1
      } else if (btnStatus === 'reduce') {
        qty -= 1
      }

      const obj = {
        items: [],
        coupon: {},
        deliveryCharge: 60,
        total: 0,
        finalTotal: 60
      }

      this.cartItems.forEach((cartItem, index) => {
        // 加的是同種類的商品
        if (cartItem.product.id === product.id) {
          this.cartItems[index].qty = qty
          this.cartItems[index].total = product.price * this.cartItems[index].qty
          obj.items = this.cartItems
        }
      })

      obj.items.forEach(item => {
        obj.total += item.total
        obj.finalTotal += item.total
      })

      update(ref(db), {
        [`carts/${id}/`]: {
          items: obj.items,
          coupon: obj.coupon,
          deliveryCharge: obj.deliveryCharge,
          total: obj.total,
          finalTotal: obj.finalTotal
        }
      })
      this.toastMessage('購物車更新成功')
      this.loadingItem = ''
    },
    changeCartNum (product, qty, event) {
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) {
        id = '1'
      }

      if (Number(event.target.value) === 0) { // 避免輸入0 或是 e
        qty = 1
      }
      const obj = {
        items: [],
        coupon: {},
        deliveryCharge: 60,
        total: 0,
        finalTotal: 60
      }

      this.cartItems.forEach((cartItem, index) => {
        // 加的是同種類的商品
        if (cartItem.product.id === product.id) {
          this.cartItems[index].qty = qty
          this.cartItems[index].total = product.price * this.cartItems[index].qty
          obj.items = this.cartItems
        }
      })
      obj.items.forEach(item => {
        obj.total += item.total
        obj.finalTotal += item.total
      })

      update(ref(db), {
        [`carts/${id}/`]: {
          items: obj.items,
          coupon: obj.coupon,
          deliveryCharge: obj.deliveryCharge,
          total: obj.total,
          finalTotal: obj.finalTotal
        }
      })

      this.toastMessage('購物車更新成功')
      this.loadingItem = ''
    },
    // 禁止輸入 - 或 e
    handleKeyDown (event) {
      if (event.key === 'e' || event.key === '-') {
        event.preventDefault()
      }
    },
    // 刪除購物車
    deleteCart (product) {
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) {
        id = '1'
      }

      // 1. 如果只剩最後一個 就刪除全部
      if (this.cartItems.length === 1) {
        this.deleteAllCarts()
        return
      }
      // 2. 不是只剩最後一個 刪除單一個
      const obj = {
        items: [],
        coupon: {},
        deliveryCharge: 60,
        total: 0,
        finalTotal: 60
      }

      this.cartItems.forEach((cartItem, index) => {
        if (cartItem.product.id === product.id) {
          this.cartItems.splice(index, 1)
          obj.items = this.cartItems
        }
      })

      obj.items.forEach(item => {
        obj.total += item.total
        obj.finalTotal += item.total
      })

      update(ref(db), {
        [`carts/${id}/`]: {
          items: obj.items,
          coupon: obj.coupon,
          deliveryCharge: obj.deliveryCharge,
          total: obj.total,
          finalTotal: obj.finalTotal
        }
      })

      this.toastMessage('購物車刪除成功')
      this.loadingItem = ''
    },
    // 清空購物車
    deleteAllCarts () {
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) {
        id = '1'
      }
      remove(ref(db, `carts/${id}`))

      this.cartNum = 0
      this.cart = {}
      this.cartItems = []
      this.loadingItem = ''
    },
    checkCoupon (couponCode) {
      const usable = this.coupons.filter(coupon => {
        return coupon.code === couponCode
      })
      if (usable.length === 0) {
        this.code = ''
        this.toastMessage('沒有這個優惠券', 'error')
      } else if (usable.length === 1) {
        if (this.cart.total < usable[0].condition) {
          this.code = ''
          this.toastMessage(`您的消費額未滿${usable[0].condition}元`, 'error')
          return
        }
        this.toastMessage('使用成功')
        this.useCoupon(usable[0])
      }
    },
    useCoupon (coupon) {
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) {
        id = '1'
      }

      const obj = {
        items: this.cartItems,
        coupon,
        deliveryCharge: 60,
        total: this.cart.total,
        finalTotal: this.cart.finalTotal - Math.ceil(this.cart.total * (coupon.discount / 100))
      }

      update(ref(db), {
        [`carts/${id}/`]: {
          items: obj.items,
          coupon: obj.coupon,
          deliveryCharge: obj.deliveryCharge,
          total: obj.total,
          finalTotal: obj.finalTotal
        }
      })
      this.loadingItem = ''
    },
    // 取消使用優惠券
    reUseCoupon () {
      // 清空欄位
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) {
        id = '1'
      }

      const obj = {
        items: this.cartItems,
        coupon: {},
        deliveryCharge: 60,
        total: this.cart.total,
        finalTotal: this.cart.total + 60
      }

      update(ref(db), {
        [`carts/${id}/`]: {
          items: obj.items,
          coupon: obj.coupon,
          deliveryCharge: obj.deliveryCharge,
          total: obj.total,
          finalTotal: obj.finalTotal
        }
      })
      this.toastMessage('取消優惠券')
      this.loadingItem = ''
    },
    getCoupons () {
      const dataRef = ref(db, 'coupons/')
      onValue(dataRef, snapshot => {
        this.coupons = snapshot.val()
        this.coupons = Object.values(this.coupons)
        this.coupons = this.coupons.filter(coupon => coupon.isEnabled === true)
      })
    },
    getOrder (uid) {
      const dataRef = ref(db, `orders/${uid}`)
      onValue(dataRef, snapshot => {
        this.orders = snapshot.val()
        if (this.orders) {
          this.orders = Object.entries(this.orders).map(item => {
            item[1].id = item[0]
            return item[1]
          })
          this.myOrder = this.orders[this.orders.length - 1]
        }
      })
    },
    // 建立訂單
    addOrder (email, name, phoneNum, address, message) {
      this.loadingItem = 'loading'

      let id = this.uid
      if (!this.uid) {
        id = '1'
      }
      // 滿千免運
      if (this.cart.total >= 1000) {
        this.cart.finalTotal -= this.cart.deliveryCharge
        this.cart.deliveryCharge = 0
      }

      const reference = ref(db, `orders/${id}`)
      const newUserRef = push(reference)
      set(newUserRef, {
        creatAt: new Date().getTime(),
        cart: this.cart,
        paymentStatus: false,
        payDate: '',
        deliveryStatus: '待出貨',
        email,
        name,
        phoneNum,
        address,
        message
      })

      // 2.讓使用者獲得抽獎券
      if (this.uid) {
        let ticketQty = 0
        // 單筆滿2000 送 1 張; 滿 5000 送 3張; 滿 1萬 送 7張
        if (this.cart.total >= 2000 && this.cart.total < 5000) {
          ticketQty = 1
        } else if (this.cart.total >= 5000 && this.cart.total < 10000) {
          ticketQty = 3
        } else if (this.cart.total >= 10000) {
          ticketQty = 7
        }
        update(ref(db), {
          [`users/${this.uid}/lotteryTicket/`]: this.user.lotteryTicket + ticketQty
        })
        if (ticketQty !== 0) {
          this.toastMessage(`恭喜您獲得${ticketQty}張抽獎券`)
        }
      }
      // 清空購物車
      this.deleteAllCarts()
      router.push('/orderSuccess')
    },
    checkLogin () {
      // 建議放在 mounted 因為這會隨時監聽使用者登入
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
          })
        } else {
          this.uid = null
          this.user = {}
        }
      })
    },
    logout () {
      signOut(auth).then(() => {
        this.uid = ''
        this.user = {}
        Swal.fire({
          icon: 'success',
          title: '已登出',
          showConfirmButton: false,
          timer: 1500
        })
        this.checkLogin()

        if (window.location.href.includes('/home')) {
        // 在首頁一定要重新載入 不然不會更新頁面
          location.reload()
        } else {
          router.push('/home')
        }
      }).catch((error) => {
        console.log(error, '登出錯誤')
      })
    },
    toastMessage (message, icon = 'success') {
      const Toast = Swal.mixin({
        toast: true,
        showConfirmButton: false,
        timer: 1000,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon,
        title: message
      })
    },
    goToTop () {
      window.scrollTo(0, 0)
    }
  }
})
export default cartStore
