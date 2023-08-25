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
              // this.loading = false
              return
            }
            this.orders = Object.entries(orders).map(item => {
              item[1].id = item[0]
              return item[1]
            })
            this.filterOrders = this.orders
            this.orderArrived = this.orders.filter(order => {
              return order.deliveryStatus === '待取貨'
            })
            // 避免錯誤
            if (this.filterOrders && this.$route.fullPath === '/member') {
              // 頁碼
              this.$refs.pagination.renderPage(1, this.filterOrders)
            }
            // this.loading = false
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
    <div class="" style="overflow-x: hidden;" data-aos="fade-up">
      <loading v-if="uid" v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"
                 :lock-scroll="true">
                 <div class="d-flex flex-column align-items-center py-96">
      <img src="../../assets/images/loadingLogo.png" class="loadingLogo mb-3" style="width: 150px;" alt="" >
      <p class="text-center fw-bold text-primary h2">
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
      <section class="bannerBg" style="background-image: url('https://images.unsplash.com/photo-1678465952850-0eb0bb982835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');">
        <div class="mask">
          <div class="text" style="background: linear-gradient(to bottom, white 50% , #4572c2 50%); -webkit-background-clip: text;">
            會員資料
          </div>
        </div>
      </section>

      <div class="container ">
        <div class="row row-cols-1 row-cols-lg-2 gx-5">
        <section class=" col-lg-4 py-5">
          <div class="d-flex flex-column align-items-center position-relative  bg-secondary pt-5">
            <div v-if="!user.headshotImg" class="d-flex" style="height: 300px; width: 300px; ">
              <i class="bi bi-person-fill m-auto text-primary" style="font-size: 200px;"></i>
            </div>
            <img v-else-if="user.headshotImg" :src="user.headshotImg"  style="object-fit: cover;  height: 300px; width: 300px;" class="mb-4 " alt="">
            <div class="headshotImgBtn row align-items-center position-absolute w-100" style="bottom: 0px; background: rgba(209, 219, 255, 0.9);">
              <div class="col d-flex py-3 border border-white"  @click.prevent="selectImgUrl">
                <a href="#" class="link-primary fw-bold mx-auto">上傳圖片網址</a>
              </div>
              <div class="col d-flex  py-3 border border-white" @click.prevent="selectFile">
                <a href="#" class="link-primary fw-bold mx-auto">上傳本地圖片</a>
              </div>
            </div>
          </div>
          <div class="border border-secondary">
            <div class="py-3 d-flex align-items-center">
              <label for="nickName" class="form-label mb-0 fw-bold ms-1 ms-lg-3"><i class="bi bi-person-circle"></i> 暱稱</label>
              <span v-if="nickNameEdit" class="ms-4">{{ user.nickName }}</span>
              <div class="ms-auto">
                <a href="#" v-if="nickNameEdit" class="link-primary fw-bold me-3" @click.prevent="()=>nickNameEdit = !nickNameEdit">修改暱稱</a>
                <div class="input-group" :class="{'d-none': nickNameEdit}">
                  <input type="text" class="form-control" placeholder="請輸入新暱稱" id="nickName" v-model="newNickName" style="width: 180px;">
                  <button @click="()=>nickNameEdit = true" class="btn btn-outline-secondary btn-sm" type="button" id="button-addon2">取消</button>
                  <button @click="()=>changeEmail()" class="btn btn-sm btn-outline-primary" type="button" id="button-addon2">確定</button>
                </div>
              </div>
            </div>
            <!-- 信箱 -->
            <!-- mt-3 mt-lg-5 -->
            <div class="bg-secondary py-3 d-flex align-items-center ">
              <label for="email" class="form-label mb-0 fw-bold ms-1 ms-lg-3"><i class="bi bi-envelope-fill"></i> 信箱</label>
              <span class="ms-4">{{user.email}}</span>
            </div>
            <!-- 密碼 -->
            <div class="py-3 d-flex align-items-center">
              <label for="password" class="form-label mb-0 fw-bold ms-1 ms-lg-3"><i class="bi bi-lock-fill"></i> 密碼</label>
              <span v-if="passwordEdit" class="ms-4">* * * * * * * *</span>
              <div class="ms-auto">
                <a href="#" v-if="passwordEdit" class="link-primary fw-bold me-3" @click.prevent="()=>passwordEdit = !passwordEdit">變更密碼</a>
                <div class="input-group" :class="{'d-none': passwordEdit}">
                  <input type="password" class="form-control" placeholder="請輸入新密碼" id="password" v-model="newPassword" style="width: 180px;">
                  <button @click="()=>passwordEdit = true" class="btn btn-sm btn-outline-secondary" type="button" id="button-addon2">取消</button>
                  <button @click="()=>changePassword()" class="btn btn-sm btn-outline-primary" type="button" id="button-addon2">確定</button>
                </div>
              </div>
            </div>
              <!-- 我的抽獎券 -->
            <div class="bg-secondary py-3 d-flex align-items-center">
              <label for="ticket" class="form-label mb-0 fw-bold ms-1 ms-lg-3"><i class="bi bi-ticket-perforated-fill"></i> 我的抽獎券</label>
              <span class="ms-4">{{ user.lotteryTicket }} 張</span>
              <button type="button" class="btn btn-sm btn-outline-primary ms-auto me-2" @click="linkToLottery" style="border-radius: 0px;">立即抽獎</button>
            </div>
          </div>
        </section>
        <section class=" col-lg-8 py-5 ">
          <h2 class="h3 fw-bold text-center py-3 bg-secondary text-primary">訂單狀況</h2>
          <div class="selectOrderStatus py-3 d-flex justify-content-between justify-content-lg-start">
            <button type="button" class="d-flex btn border-0 me-lg-5 hvr-rectangle-out bg-transparent" :class="{'activePage':selectItem === '全部'}" @click="() => selectItem ='全部'">
              <i class="bi bi-border-all" :class="{'text-white':selectItem === '全部','fw-bold':selectItem === '全部'}"></i>

              <span class="text-secondary d-none d-lg-block ms-2" :class="{'text-white':selectItem === '全部','fw-bold':selectItem === '全部'}">
                全部
              </span>
              <span v-if="selectItem === '全部'" class="text-secondary d-lg-none ms-2" :class="{'text-white':selectItem === '全部','fw-bold':selectItem === '全部'}">
                全部
              </span>
            </button>
            <button type="button" class="d-flex btn border-0 me-lg-5 hvr-rectangle-out bg-transparent"   :class="{'activePage':selectItem === '待出貨'}" @click="() => selectItem ='待出貨'">
                <i class="bi bi-box-seam" :class="{'text-white':selectItem === '待出貨','fw-bold':selectItem === '待出貨'}"></i>
                <span class="text-secondary d-none d-lg-block ms-2" :class="{'text-white':selectItem === '待出貨','fw-bold':selectItem === '待出貨'}">
                待出貨
              </span>
              <span v-if="selectItem === '待出貨'" class="text-secondary d-lg-none ms-2" :class="{'text-white':selectItem === '待出貨','fw-bold':selectItem === '待出貨'}">
                待出貨
              </span>
            </button>
            <button type="button" class="d-flex btn border-0 me-lg-5 hvr-rectangle-out bg-transparent" :class="{'activePage':selectItem === '運送中'}" @click="() => selectItem ='運送中'">
              <i class="bi bi-truck" :class="{'text-white':selectItem === '運送中','fw-bold':selectItem === '運送中'}"></i>
              <span class="text-secondary d-none d-lg-block ms-2" :class="{'text-white':selectItem === '運送中','fw-bold':selectItem === '運送中'}">
                運送中
              </span>
              <span v-if="selectItem === '運送中'" class="text-secondary d-lg-none ms-2" :class="{'text-white':selectItem === '運送中','fw-bold':selectItem === '運送中'}">
                運送中
              </span>
            </button>
            <button type="button" class="d-flex btn border-0 me-lg-5 position-relative hvr-rectangle-out bg-transparent" :class="{'activePage':selectItem === '待取貨'}" @click="() => selectItem ='待取貨'">
                <i class="bi bi-house-check" :class="{'text-white':selectItem === '待取貨','fw-bold':selectItem === '待取貨'}"></i>
                <span class="text-secondary d-none d-lg-block ms-2" :class="{'text-white':selectItem === '待取貨','fw-bold':selectItem === '待取貨'}">
                待取貨
              </span>
              <span v-if="selectItem === '待取貨'" class="text-secondary d-lg-none ms-2" :class="{'text-white':selectItem === '待取貨','fw-bold':selectItem === '待取貨'}">
                待取貨
              </span>
            </button>
            <button type="button" class="d-flex btn border-0 me-lg-5 hvr-rectangle-out bg-transparent" :class="{'activePage':selectItem === '訂單完成'}" @click="() => selectItem ='訂單完成'">
              <i class="bi bi-clipboard-check" :class="{'text-white':selectItem === '訂單完成','fw-bold':selectItem === '訂單完成'}"></i>
              <span class="text-secondary d-none d-lg-block ms-2" :class="{'text-white':selectItem === '訂單完成','fw-bold':selectItem === '訂單完成'}">
                訂單完成
              </span>
              <span v-if="selectItem === '訂單完成'" class="text-secondary d-lg-none ms-2" :class="{'text-white':selectItem === '訂單完成','fw-bold':selectItem === '訂單完成'}">
                訂單完成
              </span>
            </button>
          </div>
          <div class="row row-cols-1 py-3">
              <h4 class="mb-3">
                  總共有 {{ filterOrders.length }} 筆
              </h4>
              <!-- 確保渲染前資料有填入 -->
              <div v-if="filterOrders.length">
                <RouterLink :to="`/orders/${order.id}`" class=" col text-decoration-none link-dark" v-for="order in this.$refs.pagination.pageProducts" :key="order.creatAt">
                  <div class="orderSelect p-3">
                    <span><i class="bi bi-clock"></i> {{ new Date(order.creatAt).toLocaleDateString() }}  {{ new Date(order.creatAt).getHours() }}:{{ new Date(order.creatAt).getMinutes() }} </span>
                  <div class=" row row-cols-lg-4 row-cols-2 align-items-center mt-2" >
                    <div class="col" v-for="(item, index) in order.cart.items" :key="item + 6603">
                      <!-- 只顯示 長度 4 以內 v-if="order.cart.items.length < 4" 前面不行會整個隱藏 => 應該說只顯示 index 到 3 -->
                      <!-- 最多顯示 7 個好了 ... -->
                      <div v-if="index < 7 || (order.cart.items.length === 8 && index === 7)"  class="">
                        <img :src="item.product.imgUrl" alt="" height="100" class="w-100" style="object-fit: cover;">
                        <p class="mb-0 mt-2 text-center">
                          <span class="subTitle me-1">{{ item.product.title.length > 9 ? (item.product.title).slice(0, 8) + '...' : item.product.title }}</span>
                          <span class="text-primary fw-bold">x{{ numberComma(item.qty) }}</span>
                        </p>
                      </div>
                      <!-- 多出來顯示的商品 -->
                      <div v-if="index === 7 && order.cart.items.length !== 8"  class="position-relative" style="top: -16px; background-color: rgba(0, 0, 0, .4)">
                        <img :src="item.product.imgUrl" alt="" height="100" class="w-100" style="object-fit: cover; opacity: .4;">
                        <p class="mb-0 text-center position-absolute fs-1 text-white" style="top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%); text-shadow: 2px 2px 2px rgb(71, 71, 71);">{{ order.cart.items.length - 7 }} +
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="d-flex mt-4">
                      <div class="ms-auto d-flex align-items-center">
                          <span class="me-3 fw-bold"><i v-if="order.deliveryStatus === '待出貨'" class="bi bi-box-seam me-1"></i><i  v-if="order.deliveryStatus === '運送中'" class="bi bi-truck me-1"></i><i v-if="order.deliveryStatus === '待取貨'" class="bi bi-house-check me-1"></i><i v-if="order.deliveryStatus === '訂單完成'" class="bi bi-clipboard-check me-1"></i>{{order.deliveryStatus}}</span>
                          <span class="text-primary fw-bold">NT$ {{  numberComma(order.cart.finalTotal)  }}</span>
                          <RouterLink :to="`/orders/${order.id}`" class="ms-3"><i class="bi bi-search text-primary"></i></RouterLink>
                      </div>
                  </div>
                  </div>
                  <hr>
                </RouterLink>
              </div>
              <div v-else-if="!filterOrders.length" class=" d-flex flex-column align-items-center justify-content-center" >
                <img src="../../assets/images/undraw_No_data_re_kwbl.png" style="width: 300px;" alt="">
                <h3>無訂單</h3>
              </div>
          </div>
          <!-- 頁尾 -->
          <PaginationComponent ref="pagination" :filter-orders="filterOrders"></PaginationComponent>
        </section>
      </div>
      </div>

    </div>
</template>
<style>
.selectOrderStatus .btn{
  border-radius: 0;
  }

  .selectOrderStatus .btn:hover span {
    color: white !important;
    font-weight: bold;
  }
  .hvr-rectangle-out::before {
    background: #4572c2;
  }
  .activePage{
    background: #4572c2 !important;
  }
  .headshotImgBtn .col{
    cursor:pointer;
    transition: all .3s ease-in-out;
  }
  .headshotImgBtn .col:hover{
    background-color: #4572c2;
  }
  .headshotImgBtn .col a{
    transition: all .3s ease-in-out;
  }
  .headshotImgBtn .col:hover a{
    color: white !important;
  }
  .orderSelect{
    transition: all .3s ease-in-out;
  }
  .orderSelect:hover{
    background-color: #e8edfc;
  }
  /* 文字背景顏色測試 */
  /* https://images.unsplash.com/photo-1464219551459-ac14ae01fbe0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80 */

</style>
