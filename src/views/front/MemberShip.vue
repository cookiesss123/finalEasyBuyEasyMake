<script>
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import PaginationComponent from '../../components/PaginationComponent.vue'
import LoadingModal from '../../components/LoadingModal.vue'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { db, auth } from '../../firebase/db'
import { ref, onValue, update } from 'firebase/database'
import { onAuthStateChanged, updatePassword } from 'firebase/auth'
export default {
  components: {
    PaginationComponent,
    LoadingModal
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      user: {},
      uid: '',
      orders: [],
      filterOrders: [],
      selectItem: '全部',
      // selectPage: '會員資料',
      orderArrived: [],
      nickNameEdit: true, // 預設關閉
      passwordEdit: true, // 預設關閉
      newNickName: '',
      newPassword: '',
      nickName: '',
      pageOrders: [],
      loading: true // 訂單部分 loading
    }
  },
  methods: {
    ...mapActions(cartStore, ['toastMessage']),
    getUserInformation () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          console.log(this.uid, '使用者已登入取得 uid 有在作用嗎')
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            console.log(this.user, '讀取的資料')
          })
        } else {
          // User is signed out
          // ...
          console.log('並未登入')
          this.uid = null
          this.user = {}
          this.$swal({
            icon: 'error',
            title: '請先登入',
            showConfirmButton: false,
            timer: 1500
          })
          this.$router.push('/login')
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
              this.loading = false
              return
            }
            this.orders = Object.entries(orders).map(item => {
              item[1].id = item[0]
              return item[1]
            })
            this.filterOrders = this.orders
            console.log(this.filterOrders, '我的訂單')
            this.orderArrived = this.orders.filter(order => {
              return order.deliveryStatus === '待取貨'
            })
            // 避免錯誤
            if (this.filterOrders) {
              // 頁碼
              this.$refs.pagination.renderPage(1, this.filterOrders)
            }
            this.loading = false
          })
        } else {
          console.log('並未登入')
          this.uid = null
          this.user = {}
          if (!this.uid) {
            this.toastMessage('請先登入', 'error')
            this.$router.push('/login')
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
        this.$router.push('/login')
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
          console.log(e.target.result, '印出什麼')
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
        inputAttributes: {
          accept: 'image/*',
          'aria-label': 'Upload your profile picture'
        }
      })

      if (file) {
        console.log(file, '檔案')
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
    <div class="mt-10">
      <LoadingModal ref="loadingModal" ></LoadingModal>
      <section class="bg-lightPink py-5">
        <div class="container">
          <h2 class="h3 fw-bold">會員資料</h2>
        <div class="row gy-5 my-4 row-cols-1 row-cols-lg-2  align-items-center">
          <div class="col d-flex flex-column align-items-center ">
              <!-- 大頭貼 -->
              <div v-if="!user.headshotImg" class="d-flex mb-4" style="width: 300px; height: 300px; border: 5px solid #ef6b5a;">
                <i class="bi bi-person-fill m-auto text-red" style="font-size: 200px;"></i>
              </div>
              <img v-else-if="user.headshotImg" :src="user.headshotImg" width="300" height="300" style="object-fit: cover; border: 5px solid #ef6b5a;" class="mb-4" alt="">
              <div class="">
                <button type="button" class="btn btn-red text-white me-4" @click="selectImgUrl">上傳圖片網址</button>
                <button type="button" class="btn btn-red" @click="selectFile">上傳本地圖片</button>
              </div>
          </div>
          <div class="col-12 col-lg-4">
            <!-- 暱稱 -->
            <div class="border-start border-red d-flex align-items-center">
              <label for="nickName" class="form-label mb-0 fw-bold ms-1 ms-lg-3">暱稱</label>
              <span v-if="nickNameEdit" class="ms-4">{{ user.nickName }}</span>
              <div class="ms-auto">
                <button v-if="nickNameEdit" type="button" class="btn btn-sm btn-red" @click="()=>nickNameEdit = !nickNameEdit">
                    <span>修改暱稱</span>
                </button>
                <div class="input-group" :class="{'d-none': nickNameEdit}">
                  <input type="text" class="form-control" placeholder="請輸入新暱稱" id="nickName" v-model="newNickName">
                  <button @click="()=>nickNameEdit = true" class="btn btn-outline-secondary btn-sm" type="button" id="button-addon2">取消</button>
                  <button @click="()=>changeEmail()" class="btn btn-sm btn-outline-red" type="button" id="button-addon2">確定</button>
                </div>
              </div>
            </div>
            <!-- 信箱 -->
            <div class="border-start border-red d-flex align-items-center mt-3 mt-lg-5">
              <label for="email" class="form-label mb-0 fw-bold ms-1 ms-lg-3">信箱</label>
              <span class="ms-4">{{user.email}}</span>
            </div>
            <!-- 密碼 -->
            <div class="border-start border-red d-flex align-items-center mt-3 mt-lg-5">
              <label for="password" class="form-label mb-0 fw-bold ms-1 ms-lg-3">密碼</label>
              <span v-if="passwordEdit" class="ms-4">* * * * * * * *</span>
              <div class="ms-auto">
                <button v-if="passwordEdit" type="button" class="btn btn-sm btn-red"  @click="()=>passwordEdit = !passwordEdit">
                  <span>變更密碼</span>
                </button>
                <div class="input-group" :class="{'d-none': passwordEdit}">
                  <input type="password" class="form-control" placeholder="請輸入新密碼" id="password" v-model="newPassword">
                  <button @click="()=>passwordEdit = true" class="btn btn-sm btn-outline-secondary" type="button" id="button-addon2">取消</button>
                  <button @click="()=>changePassword()" class="btn btn-sm btn-outline-red" type="button" id="button-addon2">確定</button>
                </div>
              </div>
            </div>
              <!-- 我的抽獎券 -->
            <div class="border-start border-red d-flex align-items-center mt-3 mt-lg-5">
              <label for="ticket" class="form-label mb-0 fw-bold ms-1 ms-lg-3">我的抽獎券</label>
              <span class="ms-4">{{ user.lotteryTicket }} 張</span>
              <button type="button" class="btn btn-sm btn-red ms-auto" @click="linkToLottery">立即抽獎</button>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section class="py-5 container">
        <h2 class="h3 fw-bold">訂單狀況</h2>
        <div class="selectOrderStatus py-3 d-flex justify-content-between justify-content-lg-start">
          <button type="button" class="btn border-0 me-lg-5 hvr-rectangle-out bg-transparent" :class="{'activePage':selectItem === '全部'}" @click="() => selectItem ='全部'">
              <span class="text-secondary d-none d-lg-block" :class="{'text-white':selectItem === '全部','fw-bold':selectItem === '全部'}">
                全部
              </span>
              <!-- 手機版 -->
              <div class=" d-lg-none">
                <i class="bi bi-border-all" :class="{'text-white':selectItem === '全部','fw-bold':selectItem === '全部'}"></i>
                <span class="text-white ms-2" v-if="selectItem === '全部'">全部</span>
              </div>
          </button>
          <button type="button" class=" btn border-0 me-lg-5 hvr-rectangle-out bg-transparent"   :class="{'activePage':selectItem === '待出貨'}" @click="() => selectItem ='待出貨'">
            <!-- 'text-red':selectItem === '待出貨' -->
            <span class="text-secondary d-none d-lg-block" :class="{'text-white':selectItem === '待出貨','fw-bold':selectItem === '待出貨'}">待出貨</span>
              <!-- 手機版 -->
              <div class=" d-lg-none">
                <i class="bi bi-box-seam" :class="{'text-white':selectItem === '待出貨','fw-bold':selectItem === '待出貨'}"></i>
                <span class="text-white ms-2" v-if="selectItem === '待出貨'">待出貨</span>
              </div>
          </button>
          <button type="button" class=" btn border-0 me-lg-5 hvr-rectangle-out bg-transparent" :class="{'activePage':selectItem === '運送中'}" @click="() => selectItem ='運送中'">
            <span class="text-secondary d-none d-lg-block" :class="{'text-white':selectItem === '運送中', 'fw-bold':selectItem === '運送中'}">運送中</span>
              <!-- 手機版 -->
              <div class=" d-lg-none">
                <i class="bi bi-truck" :class="{'text-white':selectItem === '運送中','fw-bold':selectItem === '運送中'}"></i>
                <span class="text-white ms-2" v-if="selectItem === '運送中'">運送中</span>
              </div>
          </button>
          <button type="button" class=" btn border-0 me-lg-5 position-relative hvr-rectangle-out bg-transparent" :class="{'activePage':selectItem === '待取貨'}" @click="() => selectItem ='待取貨'">
              <span class="text-secondary d-none d-lg-block" :class="{'text-white':selectItem === '待取貨', 'fw-bold':selectItem === '待取貨'}">待取貨
                <span v-if="orderArrived.length" class="badge bg-danger" style="font-size: 12px;">
                  {{ orderArrived.length }}
                </span>
              </span>

                <!-- 手機版 -->
                <div class=" d-lg-none">
                <i class="bi bi-house-check" :class="{'text-white':selectItem === '待取貨','fw-bold':selectItem === '待取貨'}"></i>
                <span class="text-white ms-2" v-if="selectItem === '待取貨'">待取貨</span>
                <span v-if="orderArrived.length" class="badge bg-danger ms-2" style="font-size: 12px;">
                  {{ orderArrived.length }}
                </span>
              </div>
          </button>
          <button type="button" class=" btn border-0 me-lg-5 hvr-rectangle-out bg-transparent" :class="{'activePage':selectItem === '訂單完成'}" @click="() => selectItem ='訂單完成'">
            <span class="text-secondary d-none d-lg-block" :class="{'text-white':selectItem === '訂單完成', 'fw-bold':selectItem === '訂單完成'}">訂單完成</span>
              <!-- 手機版 -->
              <div class="d-lg-none">
                <i class="bi bi-clipboard-check" :class="{'text-white':selectItem === '訂單完成','fw-bold':selectItem === '訂單完成'}"></i>
                <span class="text-white ms-2" v-if="selectItem === '訂單完成'">訂單完成</span>
              </div>
          </button>
        </div>
        <div class="row row-cols-1 py-3">
            <h4 class="mb-3">
                總共有 {{ filterOrders.length }} 筆
            </h4>
            <!-- 確保渲染前資料有填入 -->
            <div v-if="filterOrders.length">
              <div class="col" v-for="order in this.$refs.pagination.pageProducts" :key="order.creatAt">
                <span>訂單建立時間：{{ new Date(order.creatAt).toLocaleDateString() }}  {{ new Date(order.creatAt).getHours() }}:{{ new Date(order.creatAt).getMinutes() }} </span><span class="ms-4">訂單編號：{{order.id}}</span>
                <div class="row row-cols-lg-6 row-cols-2 align-items-center mt-2 position-relative">
                  <div class="col" v-for="(item, index) in order.cart.items" :key="item + 6603">
                    <!-- 只顯示 長度 4 以內 v-if="order.cart.items.length < 4" 前面不行會整個隱藏 => 應該說只顯示 index 到 3 -->
                    <div v-if="index < 4">
                      <img :src="item.product.imgUrl" alt="" height="100" width="150" style="object-fit: cover;">
                      <p class="mb-0">
                          {{ item.product.title }}
                      </p>
                      <p class="mb-0">x {{ numberComma(item.qty) }}</p>
                    </div>
                  </div>
                  <div v-if="order.cart.items.length > 4" class="col position-absolute" style="bottom: 20px; right: 200px;">
                    <p class="fw-bold" style="font-size: 100px;">. . .</p>
                  </div>
                </div>
                <div class="d-flex">
                    <div class="ms-auto d-flex align-items-center">
                        <span class="me-3 fw-bold">運送狀態：{{order.deliveryStatus}}</span>
                        <span>總付款金額：NT$ {{  numberComma(order.cart.finalTotal)  }}</span>
                        <RouterLink :to="`/orders/${order.id}`" class="btn btn-red ms-3">查看詳細訂單狀況</RouterLink>
                    </div>
                </div>
                <hr>
            </div>
            </div>
        </div>
        <!-- 頁尾 -->
        <PaginationComponent ref="pagination" :filter-orders="filterOrders"></PaginationComponent>
      </section>
       <!-- 初始載入畫面，不建議應該蓋住全部，才不能點選種類 -->
      <div v-if="loading" class="d-flex flex-column align-items-center">
          <img src="../../assets/images/loadingLogo.png" class="loadingLogo mb-3" style="width: 150px;" alt="" >
          <h1 class="text-center fw-bold text-lightBrown">
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
          </h1>
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
    background: #d04740;
  }
  .activePage{
    background: #d04740 !important;
  }
</style>
