<script>
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import PaginationComponent from '../../components/PaginationComponent.vue'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { db, auth } from '../../firebase/db'
import { ref, onValue, update } from 'firebase/database'
import { onAuthStateChanged, updatePassword } from 'firebase/auth'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
export default {
  components: {
    PaginationComponent,
    Loading
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      user: {},
      uid: '',
      orders: [],
      filterOrders: [],
      selectItem: '全部',
      orderArrived: [],
      nickNameEdit: true, // 預設關閉
      passwordEdit: true, // 預設關閉
      newNickName: '',
      newPassword: '',
      nickName: '',
      pageOrders: [],
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    ...mapActions(cartStore, ['toastMessage']),
    getUserInformation () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            this.isLoading = false
          })
        } else {
          this.uid = null
          this.user = {}
          this.$swal({
            icon: 'error',
            title: '請先登入',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/loginSignup')
        }
      })
    },
    getOrders () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, `orders/${this.uid}`)
          onValue(dataRef, snapshot => {
            const orders = snapshot.val()
            if (!orders) {
              return
            }
            this.orders = Object.entries(orders).map(item => {
              item[1].id = item[0]
              return item[1]
            })
            // 反轉 最晚的訂單在前面
            this.filterOrders = (this.orders).reverse()
            this.orderArrived = this.orders.filter(order => {
              return order.deliveryStatus === '待取貨'
            })
            // 避免錯誤
            if (this.filterOrders && this.$route.fullPath === '/member') {
              // 頁碼
              this.$refs.pagination.renderPage(1, this.filterOrders)
            }
          })
        } else {
          this.uid = null
          this.user = {}
          if (!this.uid) {
            this.toastMessage('請先登入', 'error')
            this.$router.push('/loginSignup')
          }
        }
      })
    },
    // 要記得也更新留言的資料
    changeEmail () {
      if (this.newNickName.length > 10) {
        this.toastMessage('暱稱不得超過10個字元', 'error')
        return
      } else if (this.newNickName === '') {
        this.toastMessage('暱稱不得是空字串', 'error')
        return
      }
      update(ref(db), {
        [`users/${this.uid}/nickName/`]: this.newNickName
      })
      this.nickNameEdit = true
      this.toastMessage('暱稱修改成功')
    },
    changePassword () {
      if (this.newPassword.length <= 5) {
        this.toastMessage('新密碼不能小於6個字元', 'error')
        return
      }
      const user = auth.currentUser
      updatePassword(user, this.newPassword).then(() => {
        // Update successful.
        this.passwordEdit = true
        this.toastMessage('密碼變更成功')
      }).catch(() => {
        this.toastMessage('長時間未驗證請重新登入以更改密碼', 'error')
        this.$router.push('/loginSignup')
      })
    },
    // 連結到抽獎頁面
    linkToLottery () {
      // 兩個頁面傳遞參數
      this.$router.push({
        name: 'discountsView',
        query: {
          tabName: '抽獎回饋'
        }
      })
    },
    // 要記得也更新留言的資料
    // 上傳本地圖片
    async selectFile () {
      const { value: file } = await this.$swal({
        title: '選擇圖片',
        input: 'file',
        confirmButtonColor: '#4572c2',
        confirmButtonText: '確定',
        inputAttributes: {
          accept: 'image/*',
          'aria-label': 'Upload your profile picture'
        }
      })

      if (file) {
        const reader = new FileReader() // FileReader 接口提供讀取文件的方法和包含讀取结果的事件模型
        reader.onload = (e) => {
          this.$swal({
            title: '圖片上傳成功!',
            imageUrl: e.target.result,
            imageAlt: 'The uploaded picture',
            imageHeight: 300
          })
          // 更改 img
          update(ref(db), {
            [`users/${this.uid}/headshotImg/`]: e.target.result
          })
        }
        reader.readAsDataURL(file) // 轉換為一個以 Base64 編碼的 URL 字符串
      } else {
        this.toastMessage('沒有檔案', 'error')
      }
    },
    // 上傳網址圖片
    async selectImgUrl () {
      const { value: file } = await this.$swal({
        title: '選擇圖片',
        input: 'text',
        confirmButtonColor: '#4572c2',
        confirmButtonText: '確定',
        inputAttributes: {
          accept: 'image/*',
          'aria-label': 'Upload your profile picture'
        }
      })

      if (file) {
        this.$swal({
          title: '圖片上傳成功',
          imageUrl: file,
          imageHeight: 300,
          imageAlt: 'Custom image'
        })
        update(ref(db), {
          [`users/${this.uid}/headshotImg/`]: file
        })
      } else {
        this.toastMessage('請勿輸入空值', 'error')
      }
    }
  },
  mounted () {
    // 每個頁面都要再填入一次token 和 其它相關使用者資料 因為刷新就不見了
    this.isLoading = true
    this.getUserInformation()
    this.getOrders()
  },
  watch: {
    // 選擇訂單狀況的子項目
    selectItem () {
      if (this.selectItem === '全部') {
        this.filterOrders = this.orders
      } else if (this.selectItem !== '全部') {
        this.filterOrders = this.orders.filter(order => {
          return order.deliveryStatus === this.selectItem
        })
      }
      // 頁碼
      this.$refs.pagination.renderPage(1, this.filterOrders)
    },
    user () { // user 資料載入後 把暱稱填入
      this.newNickName = this.user.nickName
    }
  }
}
</script>
<template>
    <div class="no-scroll-x">
      <loading v-if="uid" v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"
                 :lock-scroll="true">
                 <div class="d-flex flex-column align-items-center py-96">
      <img src="../../assets/images/loadingLogo.png" class="loading-logo mb-3" alt="logo" >
      <p class="text-center fw-bold text-purple fs-md-2 fs-md-2 fs-5">
        <span class="me-1 animate-text">L</span>
        <span class="mx-1 animate-text">o</span>
        <span class="mx-1 animate-text">a</span>
        <span class="mx-1 animate-text">d</span>
        <span class="mx-1 animate-text">i</span>
        <span class="mx-1 animate-text">n</span>
        <span class="mx-1 animate-text">g</span>
        <span class="mx-2 animate-text">.</span>
        <span class="me-2 animate-text">.</span>
        <span class="animate-text">.</span>
      </p>
    </div>
      </loading>
      <section class="text-center">
        <div class="py-lg-200 py-96 bg-cover-center" style="background-image: url('https://images.unsplash.com/photo-1678465952850-0eb0bb982835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');"></div>
        <h2 class="bg-secondary-light-purple-horizontal text-purple mb-0  fs-lg-1 fs-5 letter-spacing-20 ps-3 fw-bold py-2">會員資料</h2>
      </section>

      <div class="container">
        <section class="row row-cols-1 row-cols-lg-2 g-5 py-lg-96 py-5">
          <div class="col-lg-4">
            <div class="card">
              <div v-if="!user.headshotImg" class="border border-2 border-primary text-center bg-lightPurple">
                <i  class="bi bi-person-fill m-auto text-primary fs-200"></i>
              </div>
              <img v-else-if="user.headshotImg" :src="user.headshotImg" class="object-fit-cover w-100 border border-2 border-primary" style="height: 300px;" alt="大頭貼">

              <div class="card-body bg-secondary d-flex justify-content-between">
                <a href="#" class="card-link fw-bold" @click.prevent="selectImgUrl">上傳圖片網址</a>
                <a href="#" class="card-link fw-bold"  @click.prevent="selectFile">上傳本地圖片</a>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div class="row">
                    <div class="col-4">
                      <label for="nickName" class="form-label fw-bold "><i class="bi bi-person-fill"></i> 暱稱</label>
                    </div>
                    <div class="col-8">
                      <span>{{ user.nickName }}</span>
                    </div>
                  </div>
                  <div class="text-end">
                    <a href="#" v-if="nickNameEdit" class="link-primary fw-bold" @click.prevent="()=>nickNameEdit = !nickNameEdit">修改暱稱</a>
                    <div class="input-group" :class="{'d-none': nickNameEdit}">
                      <input type="text" class="form-control" placeholder="請輸入新暱稱" id="nickName" v-model="newNickName" style="width: 180px;">
                      <button @click="()=>nickNameEdit = true" class="btn btn-outline-gray btn-sm" type="button" id="button-addon2">取消</button>
                      <button @click="()=>changeEmail()" class="btn btn-sm btn-outline-primary" type="button" id="button-addon2">確定</button>
                    </div>
                  </div>
                </li>
                <li class="list-group-item bg-secondary">
                  <div class="row">
                    <div class="col-4">
                      <label for="email" class="form-label fw-bold mb-0"><i class="bi bi-envelope-fill"></i> 信箱</label>
                    </div>
                    <div class="col-8">
                      <span>{{user.email}}</span>
                    </div>
                  </div>
                </li>
                <li class="list-group-item">
                  <div class="row">
                    <div class="col-4">
                      <label for="password" class="form-label fw-bold"><i class="bi bi-lock-fill"></i> 密碼</label>
                    </div>
                    <div class="col-8">
                      <span>* * * * * * * *</span>
                    </div>
                  </div>
                  <div class="text-end">
                  <a href="#" v-if="passwordEdit" class="link-primary fw-bold" @click.prevent="()=>passwordEdit = !passwordEdit">變更密碼</a>
                  <div class="input-group" :class="{'d-none': passwordEdit}">
                    <input type="password" class="form-control" placeholder="請輸入新密碼" id="password" v-model="newPassword" style="width: 180px;">
                    <button @click="()=>passwordEdit = true" class="btn btn-sm btn-outline-gray" type="button" id="button-addon2">取消</button>
                    <button @click="()=>changePassword()" class="btn btn-sm btn-outline-primary" type="button" id="button-addon2">確定</button>
                  </div>
                  </div>
                </li>
                <li class="list-group-item d-flex justify-content-between bg-secondary">
                    <label for="ticket" class="form-label mb-0 fw-bold"><i class="bi bi-ticket-perforated-fill"></i> 我的抽獎券</label>
                    <span>{{ user.lotteryTicket }} 張</span>
                    <a href="#" class="link-primary fw-bold" @click.prevent="linkToLottery">立即抽獎</a>
                </li>
              </ul>
            </div>

          </div>
          <div class="col-lg-8 d-flex flex-column">
            <h3 class="d-flex align-items-center fw-bold text-purple border-bottom pb-1 border-purple">
              <span class="material-icons me-2"> auto_awesome </span>
              訂單狀況
            </h3>
            <ul class="select-order-status list-unstyled d-flex justify-content-between mb-0 py-2">
              <li>
                <a href="#" class="hvr-rectangle-out bg-transparent text-decoration-none py-2 px-3 text-gray" :class="{'active-order':selectItem === '全部', 'text-white':selectItem === '全部','fw-bold':selectItem === '全部'}" @click.prevent="() => selectItem ='全部'">
                  <i class="bi bi-border-all"></i>
                  <span class="ms-lg-2 ms-1 d-lg-inline-block" :class="{'d-none': selectItem !== '全部'}">
                    全部
                  </span>
                </a>
              </li>
              <li>
                <a href="#" class="hvr-rectangle-out bg-transparent text-decoration-none py-2 px-3 text-gray" :class="{'active-order':selectItem === '待出貨', 'text-white':selectItem === '待出貨','fw-bold':selectItem === '待出貨'}" @click.prevent="() => selectItem ='待出貨'">
                  <i class="bi bi-box-seam"></i>
                  <span class="ms-lg-2 ms-1 d-lg-inline-block" :class="{'d-none': selectItem !== '待出貨'}">
                    待出貨
                  </span>
                </a>
              </li>
              <li>
                <a href="#" class="hvr-rectangle-out bg-transparent text-decoration-none py-2 px-3 text-gray" :class="{'active-order':selectItem === '運送中', 'text-white':selectItem === '運送中','fw-bold':selectItem === '運送中'}" @click.prevent="() => selectItem ='運送中'">
                  <i class="bi bi-truck"></i>
                  <span class="ms-lg-2 ms-1 d-lg-inline-block" :class="{'d-none': selectItem !== '運送中'}">
                    運送中
                  </span>
                </a>
              </li>
              <li>
                <a href="#" class="hvr-rectangle-out bg-transparent text-decoration-none py-2 px-3 text-gray" :class="{'active-order':selectItem === '待取貨', 'text-white':selectItem === '待取貨','fw-bold':selectItem === '待取貨'}" @click.prevent="() => selectItem ='待取貨'">
                  <i class="bi bi-house-check"></i>
                  <span class="ms-lg-2 ms-1 d-lg-inline-block" :class="{'d-none': selectItem !== '待取貨'}">
                    待取貨
                  </span>
                </a>
              </li>
              <li>
                <a href="#" class="hvr-rectangle-out bg-transparent text-decoration-none py-2 px-3 text-gray" :class="{'active-order':selectItem === '訂單完成', 'text-white':selectItem === '訂單完成','fw-bold':selectItem === '訂單完成'}" @click.prevent="() => selectItem ='訂單完成'">
                  <i class="bi bi-clipboard-check"></i>
                  <span class="ms-lg-2 ms-1 d-lg-inline-block" :class="{'d-none': selectItem !== '訂單完成'}">
                    訂單完成
                  </span>
                </a>
              </li>
            </ul>
            <div class="row row-cols-1 py-3">
                <h4 class="mb-3 fs-lg-4 fs-5 fw-bold">總共有 {{ filterOrders.length }} 筆</h4>
                <!-- 確保渲染前資料有填入 -->
                <div v-if="filterOrders.length">
                  <RouterLink :to="`/orders/${order.id}`" class="col text-decoration-none link-dark" v-for="order in this.$refs.pagination.pageProducts" :key="order.creatAt">
                    <div class="order-select p-3 ">
                      <p><i class="bi bi-clock me-2"></i>{{ new Date(order.creatAt).toLocaleString().split(':')[0] }}:{{ new Date(order.creatAt).toLocaleString().split(':')[1] }}</p>

                      <ul class="list-unstyled row row-cols-md-4 row-cols-2 g-3" >
                        <li class="col" v-for="(item, index) in order.cart.items" :key="item + 6603">
                          <!-- 最多顯示 7 個完整的 ... -->
                          <div v-if="index < 8" class="position-relative">
                            <img :src="item.product.imgUrl" :alt="item.product.title" height="100" class="w-100 object-fit-cover">
                            <p v-if="index < 7 || order.cart.items.length === 8" class="mb-0 mt-2 text-center">
                              <span class="fs-14  me-1">{{ item.product.title.length > 8 ? (item.product.title).slice(0, 5) + '...' : item.product.title }}</span>
                              <span class="text-primary fw-bold">x{{ numberComma(item.qty) }}</span>
                            </p>
                            <div v-if="order.cart.items.length > 8 && index === 7" class="position-absolute w-100 h-100 top-0 bg-trans-dark-4">
                            <p class="text-center fs-1 text-white text-shadow lh-lg">{{ order.cart.items.length - 7 }} +
                            </p>
                          </div>
                          </div>
                        </li>
                      </ul>
                      <div class="text-end fw-bold mt-4">
                        <span class="me-3">
                          <i class="bi me-1" :class="{'bi-box-seam': order.deliveryStatus === '待出貨', 'bi-truck': order.deliveryStatus === '運送中', 'bi-house-check': order.deliveryStatus === '待取貨', 'bi-clipboard-check': order.deliveryStatus === '訂單完成'}"></i>
                          {{order.deliveryStatus}}
                        </span>
                        <span class="text-primary">NT$ {{  numberComma(order.cart.finalTotal)  }}</span>
                        <i class="bi bi-search text-primary ms-3"></i>
                      </div>
                    </div>
                    <hr>
                  </RouterLink>
                </div>
                <div v-else-if="!filterOrders.length" class="py-lg-4 text-center" >
                  <img src="../../assets/images/undraw_No_data_re_kwbl.png" style="" class="mb-lg-3 mb-2 img-md-200-sm-150" alt="無訂單圖示">
                  <h3 class="fs-lg-3 fs-6">無訂單</h3>
                </div>
            </div>
            <!-- 頁尾 -->
            <PaginationComponent ref="pagination" :filter-orders="filterOrders" class="mt-auto"></PaginationComponent>
          </div>
        </section>

      </div>

    </div>
</template>
<style>

</style>
