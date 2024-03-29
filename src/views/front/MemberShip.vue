<script>
import loadingStore from '../../stores/loadingStore'
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import PaginationComponent from '../../components/PaginationComponent.vue'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { db, auth } from '../../firebase/db'
import { ref, onValue, update } from 'firebase/database'
import { onAuthStateChanged, updatePassword } from 'firebase/auth'
import { selections } from '../../utils/publicData'
import BannerComponent from '../../components/BannerComponent.vue'
export default {
  components: {
    PaginationComponent,
    BannerComponent
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      selections,
      user: {},
      uid: '',
      orders: [],
      filterOrders: [],
      selectItem: '全部',
      orderArrived: [],
      nickNameEdit: true,
      passwordEdit: true,
      newNickName: '',
      newPassword: ''
    }
  },
  methods: {
    ...mapActions(cartStore, ['toastMessage', 'goToTop']),
    ...mapActions(loadingStore, ['startLoading', 'endLoading']),
    // 要即時更新
    getUserInformation () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'users/' + this.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
          })
        } else {
          this.uid = null
          this.user = {}
          this.toastMessage('請先登入', 'error')
          this.$router.push('/loginSignup')
        }
      })
    },
    getOrders () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const dataRef = ref(db, `orders/${user.uid}`)
          onValue(dataRef, snapshot => {
            this.orders = snapshot.val()
            this.endLoading()
            if (!this.orders) {
              this.orders = []
              return
            }
            this.orders = Object.entries(this.orders).map(item => {
              item[1].id = item[0]
              return item[1]
            })
            this.filterOrders = (this.orders).reverse()
            this.orderArrived = this.orders.filter(order => {
              return order.deliveryStatus === '待取貨'
            })
            // 避免錯誤
            if (this.filterOrders && this.$route.fullPath === '/member') {
              this.$refs.pagination.renderPage(1, this.filterOrders)
            }
          }, {
            onlyOnce: true
          })
        } else {
          this.endLoading()
          this.toastMessage('請先登入', 'error')
          this.$router.push('/loginSignup')
        }
      })
    },
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
        this.passwordEdit = true
        this.toastMessage('密碼變更成功')
      }).catch(() => {
        this.toastMessage('長時間未驗證請重新登入以更改密碼', 'error')
        this.$router.push('/loginSignup')
      })
    },
    linkToLottery () {
      this.$router.push({
        name: 'discountsView',
        query: {
          tabName: '抽獎回饋'
        }
      })
    },
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
        const reader = new FileReader()
        reader.onload = (e) => {
          this.$swal({
            title: '圖片上傳成功!',
            imageUrl: e.target.result,
            imageAlt: 'The uploaded picture',
            imageHeight: 300
          })
          update(ref(db), {
            [`users/${this.uid}/headshotImg/`]: e.target.result
          })
        }
        reader.readAsDataURL(file)
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
    this.startLoading()
    this.goToTop()
    this.getUserInformation()
    this.getOrders()
  },
  watch: {
    selectItem () {
      if (this.selectItem === '全部') {
        this.filterOrders = this.orders
      } else if (this.selectItem !== '全部') {
        this.filterOrders = this.orders.filter(order => {
          return order.deliveryStatus === this.selectItem
        })
      }
      this.$refs.pagination.renderPage(1, this.filterOrders)
    },
    user () {
      this.newNickName = this.user.nickName
    }
  }
}
</script>
<template>
    <div class="no-scroll-x">
      <BannerComponent></BannerComponent>
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
              <li v-for="item in selections.memberShip" :key="item.icon">
                <a href="#" class="hvr-rectangle-out bg-transparent text-decoration-none py-2 px-3 text-gray" :class="{'active-order':selectItem === item.title, 'text-white':selectItem === item.title,'fw-bold':selectItem === item.title, 'position-relative': selectItem === '待取貨'}" @click.prevent="() => selectItem =item.title">
                  <i :class="item.icon"></i>
                  <span class="ms-lg-2 ms-1 d-lg-inline-block" :class="{'d-none': selectItem !== item.title}">
                    {{ item.title }}
                  </span>

                  <span v-show="item.title === '待取貨' && orderArrived.length" class="position-absolute top-0 start-100 translate-middle text-center rounded-circle border fw-bold border-primary text-primary fs-12 alert-num">
                    {{ orderArrived.length }}
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
            <PaginationComponent ref="pagination" :filter-orders="filterOrders" class="mt-auto"></PaginationComponent>
          </div>
        </section>

      </div>
    </div>
</template>
