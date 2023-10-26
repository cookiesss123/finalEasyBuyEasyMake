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
      loadingItem: false, // 購物車小loading
      cart: {},
      cartItems: [],
      coupons: [],
      orders: [],
      myOrder: {},
      nickName: '',
      admin: '',
      user: {},
      uid: null,
      visitorId: null
    }
  },
  actions: {
    getCart () {
      const id = this.uid ? this.uid : this.visitorId
      const dataRef = ref(db, `carts/${id}`)
      onValue(dataRef, snapshot => {
        this.cart = snapshot.val()
        if (this.cart) {
          this.cartItems = this.cart.items
        } else if (!this.cart) {
          this.cartItems = []
        }
      })
    },
    // 登入使用者如果要清空是全部刪掉 刪除刪到最後一個也是全部刪掉
    addCart (product, qty = 1) {
      this.loadingItem = true
      // 遊客uid 必須各自隨機給 uid 否則會導致共用的可怕情況
      const id = this.uid ? this.uid : this.visitorId
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
      this.loadingItem = false
    },
    // 購物車 + - 按鈕
    updateCartNum (btnStatus, product, qty) {
      this.loadingItem = true
      const id = this.uid ? this.uid : this.visitorId
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
      this.loadingItem = false
    },
    changeCartNum (product, qty, event) {
      this.loadingItem = true
      const id = this.uid ? this.uid : this.visitorId
      if (Number(event.target.value) === 0) { // 避免只輸入0
        qty = 1
      }
      const cleanedValue = event.target.value.replace(/^0+/, '') // 去除前面輸入不必要的0
      event.target.value = cleanedValue // 更新输入值

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
      this.loadingItem = false
    },
    // 禁止輸入 - 或 e 還有 小數點
    handleKeyDown (event) {
      if (event.key === 'e' || event.key === '-' || event.key === '.') {
        event.preventDefault()
      }
    },
    // 刪除購物車
    deleteCart (product) {
      this.loadingItem = true
      const id = this.uid ? this.uid : this.visitorId

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
      this.loadingItem = false
    },
    // 清空購物車
    deleteAllCarts () {
      this.loadingItem = true
      const id = this.uid ? this.uid : this.visitorId

      remove(ref(db, `carts/${id}`))

      this.cart = {}
      this.cartItems = []
      this.loadingItem = false
    },
    useCoupon (coupon) {
      this.loadingItem = true

      const id = this.uid ? this.uid : this.visitorId

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
      this.loadingItem = false
    },
    // 取消使用優惠券
    reUseCoupon () {
      // 清空欄位
      this.loadingItem = true

      const id = this.uid ? this.uid : this.visitorId

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
      this.loadingItem = false
    },
    getCoupons () {
      return new Promise((resolve, reject) => {
        const dataRef = ref(db, 'coupons/')
        onValue(dataRef, snapshot => {
          const coupons = snapshot.val()
          Object.keys(coupons).forEach((key) => {
            coupons[key].id = key
          })
          resolve(coupons)
        }, {
          onlyOnce: true
        })
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
    // 建立訂單 同時獲取?
    addOrder (email, name, phoneNum, address, message) {
      this.loadingItem = true

      const id = this.uid ? this.uid : this.visitorId

      // 滿千免運
      if (this.cart.total >= 1000) {
        this.cart.finalTotal -= this.cart.deliveryCharge
        this.cart.deliveryCharge = 0
      }
      this.myOrder = {
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
      }

      const reference = ref(db, `orders/${id}`)
      const newUserRef = push(reference)
      set(newUserRef, this.myOrder)

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
        if (ticketQty) {
          this.toastMessage(`恭喜您獲得${ticketQty}張抽獎券！`)
        } else if (!ticketQty) {
          this.toastMessage('恭喜您! 訂單建立完成')
        }
      } else if (!this.uid) {
        this.toastMessage('恭喜您! 訂單建立完成')
      }
      // 清空購物車
      this.deleteAllCarts()
      router.push('/orderSuccess')
    },
    checkLogin () {
      // 建議放在 mounted 因為這會隨時監聽使用者登入 frontlayout一開始會使用
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.visitorId = null
          this.uid = user.uid
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            this.getCart()
          })
        } else {
          // 遊客建立假uid不共用購物車
          this.uid = null
          this.visitorId = new Date().getTime()
          this.user = {}
          this.getCart()
        }
      })
    },
    // frontlayout 會使用
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
  },
  getters: {
    cartNum (state) {
      return state.cartItems.reduce((total, cur) => total + cur.qty, 0)
    }
  }
})
export default cartStore
