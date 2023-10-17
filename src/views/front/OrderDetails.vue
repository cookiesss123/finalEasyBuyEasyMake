<script>
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { db, auth } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
export default {
  data () {
    return {
      uid: '',
      order: {},
      barWidth: 0,
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    Loading
  },
  mixins: [numberCommaMixin],
  methods: {
    ...mapActions(cartStore, ['goToTop']),
    getOrder () {
      this.isLoading = true
      const { id } = this.$route.params
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, `orders/${this.uid}/${id}`)
          onValue(dataRef, snapshot => {
            this.order = snapshot.val()
            // 非本人驅逐
            if (!this.order) {
              this.$router.push('/loginSignup')
              return
            }
            this.order.id = id
            if (this.order.deliveryStatus === '待出貨') {
              this.barWidth = 0
            } else if (this.order.deliveryStatus === '運送中') {
              this.barWidth = 33
            } else if (this.order.deliveryStatus === '待取貨') {
              this.barWidth = 66
            } else if (this.order.deliveryStatus === '訂單完成') {
              this.barWidth = 100
            }
            this.isLoading = false
          })
        } else {
          this.uid = null
          if (!this.uid) {
            this.$router.push('/loginSignup')
          }
        }
      })
    }
  },
  mounted () {
    this.goToTop()
    this.getOrder()
  }
}
</script>
<template>
    <section v-if="order" class="py-md-96 py-60 container no-scroll-x">
        <loading v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"
                 :lock-scroll="true">
                 <div class="d-flex flex-column align-items-center py-96">
      <img src="../../assets/images/loadingLogo.png" class="loading-logo mb-3" alt="logo" >
      <p class="text-center fw-bold text-purple fs-md-2 fs-5">
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
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item "><RouterLink to="/member" href="#" class="link-primary">會員專區</RouterLink></li>
                <li class="breadcrumb-item ">訂單狀況</li>
                <li class="breadcrumb-item active " aria-current="page">{{ order.deliveryStatus }}</li>
            </ol>
        </nav>

        <div class="col-lg-6" >
            <table class="table">
            <thead>
                <tr>
                    <th class="fw-normal text-muted">訂單建立時間</th>
                    <th class="fw-normal">{{ new Date(order.creatAt).toLocaleString().split(':')[0] }}:{{ new Date(order.creatAt).toLocaleString().split(':')[1] }}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="text-muted">訂單編號</td>
                    <td>{{ order.id }}</td>
                </tr>
            </tbody>
            </table>
        </div>

        <div class="position-relative w-100 mt-lg-5 my-5" >
            <div class="line-gray border-top position-absolute border-2 z-index-n1 top-8"></div>
            <div class="border-top border-primary position-absolute border-2 z-index-n1 top-8" :class="{'w-33': barWidth === 33, 'w-66': barWidth === 66, 'line-gray': barWidth === 100}"></div>

            <ul class="list-unstyled d-flex justify-content-between text-gray">
                <li v-for="item in 4" :key="item + 394" class="d-flex flex-column align-items-center" :class="{'text-primary':(item === 1 && barWidth >= 0) || (item === 2 && barWidth >= 33) || (item === 3 && barWidth >= 66) || (item === 4 && barWidth === 100), 'fw-bold':(item === 1 && order.deliveryStatus === '待出貨') || (item === 2 && order.deliveryStatus === '運送中') || (item === 3 && order.deliveryStatus === '待取貨') || (item === 4 && order.deliveryStatus === '訂單完成')}">
                    <!-- 目前進度 -->
                    <div v-if="(item === 1 && order.deliveryStatus === '待出貨') || (item === 2 && order.deliveryStatus === '運送中') || (item === 3 && order.deliveryStatus === '待取貨') || (item === 4 && order.deliveryStatus === '訂單完成')" class="order-dot-white rounded-circle position-relative bg-white border border-primary d-block mt-lg-n1">
                        <i class="bi bi-circle-fill fs-lg-14 fs-12 position-absolute translate-middle start-50 top-50"></i>
                    </div>
                    <!-- 實心圓 -->
                    <i v-else class="bi bi-circle-fill d-block fs-lg-6 fs-12"></i>

                    <div class="mt-2 text-center rounded-circle w-lg-90-md-70" :class="{'bg-secondary': (item === 1 && order.deliveryStatus === '待出貨') || (item === 2 && order.deliveryStatus === '運送中') || (item === 3 && order.deliveryStatus === '待取貨') || (item === 4 && order.deliveryStatus === '訂單完成')}">
                        <i class="fs-lg-2 fs-4 bi" :class="{'bi-box-seam': item === 1, 'bi-truck': item === 2, 'bi-house-check': item === 3, 'bi-clipboard-check': item === 4}">
                        </i>
                        <p class="fs-lg-6 fs-14">{{ item === 1 ? '待出貨' : item === 2 ? '運送中' : item === 3 ? '已抵達' : '訂單完成' }}</p>
                    </div>
                </li>
            </ul>
        </div>

        <div class="row gx-5 gy-5 row-cols-1 row-cols-lg-2" >
            <div class="col">
                <h4  class="text-center fw-bold bg-secondary py-2">訂購商品資訊</h4>
                <div v-if="order.cart" class="py-3">
                    <ul class="list-unstyled row mb-0">
                        <li class="col-12" v-for="(item, index) in order.cart.items" :key="index + 756345">
                            <div class="card">
                                <div class="row g-0">
                                    <div class="col-4">
                                        <img :src="item.product.imgUrl" class="img-fluid object-fit-cover w-100" style="height: 130px;">
                                    </div>
                                    <div class="col-8">
                                        <div class="card-body d-flex flex-column h-100 pb-0">
                                            <div class="d-flex mb-auto">
                                                <h5 class="card-title mb-0 d-flex fs-lg-6 fs-14">{{ item.product.title }}</h5>
                                                <span class="ms-auto">x {{ numberComma(item.qty) }}</span>
                                            </div>

                                            <div class="card-text text-end">
                                                <del class="me-2 text-muted mt-1 fs-14" :class="{'d-none': !item.product.isCheaper}">NT$ {{ numberComma(item.product.originalPrice) }}</del>
                                                <span class=" mt-1"> <span :class="{'text-danger':item.product.isCheaper, 'fw-bold':item.product.isCheaper}">NT$ {{numberComma(item.product.price)}}</span> / {{ item.product.num }}{{ item.product.unit }}</span><br>
                                            </div>

                                            <p class="mb-0 text-danger text-end fw-bold" v-if="item.product.category !== '組合包'">小計：NT$ {{ numberComma(item.product.price * item.qty) }} / {{ numberComma(item.product.num * item.qty) }}{{ item.product.unit }}</p>
                                            <p class="mb-0 text-danger text-end fw-bold" v-if="item.product.category === '組合包'">小計：NT$ {{ numberComma(item.product.price * item.qty) }} / {{ numberComma(item.qty) }}組</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        </li>
                    </ul>

                    <table class="table table-borderless">
                        <thead>
                        <tr>
                            <th class="fw-normal">商品總金額</th>
                            <th v-if="order.cart" class="text-end fw-normal">NT$ {{ numberComma(order.cart.total) }}</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>運費<span v-if="order.cart.total >= 1000">(滿千元免運)</span></td>
                                <td v-if="order.cart" class="text-end">NT$ {{ order.cart.deliveryCharge }}</td>
                            </tr>
                            <tr v-if="order.cart.total + order.cart.deliveryCharge !== order.cart.finalTotal && order.cart.coupon">
                                <td>優惠券折扣</td>
                                <td class="text-end">- NT$ {{ numberComma(Math.ceil(order.cart.total * (order.cart.coupon.discount / 100))) }}</td>
                            </tr>
                            <tr class="border-top bg-secondary">
                                <td class="fw-bold text-danger">總計金額</td>
                                <td class="text-end fw-bold text-danger">NT$ {{ numberComma(order.cart.finalTotal) }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col">
                <h4  class="text-center fw-bold bg-lightPurple py-2">收件人資訊</h4>
                <table class="table table-borderless table-striped">
                    <thead>
                        <tr>
                            <th class="fw-normal"><i class="bi bi-envelope-fill" ></i> 信箱</th>
                            <th class="fw-normal">{{ order.email }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i class="bi bi-person-fill"></i> 收件人姓名</td>
                            <td>{{ order.name }}</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-telephone-fill"></i> 收件人電話</td>
                            <td>{{ order.phoneNum }}</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-house-fill"></i> 收件人地址</td>
                            <td>{{ order.address }}</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-wallet-fill"></i> 付款方式</td>
                            <td>貨到付款</td>
                        </tr>
                        <tr>
                            <td><i class="bi bi-chat-left-text-fill"></i> 留言</td>
                            <td>{{ order.message === '' ? '無' : order.message }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>
