<script>
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { db, auth } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
export default {
  data () {
    return {
      user: {},
      order: {},
      barWidth: 0,
      uid: '',
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    Loading
  },
  mixins: [numberCommaMixin],
  methods: {
    getOrder () { // 訂單完成
      this.isLoading = true
      const { id } = this.$route.params
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid

          const dataRef = ref(db, `orders/${this.uid}/${id}`)
          onValue(dataRef, snapshot => {
            this.order = snapshot.val()
            this.order.id = id
            console.log(this.order, '取得我的訂單')
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
          console.log('並未登入')
          this.uid = null
          this.user = {}
          if (!this.uid) {
            this.toastMessage('請先登入', 'error')
            this.$router.push('/login')
          }
        }
      })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
<template>
    <div class="mt-10 container" style="overflow-x: hidden;">
        <loading v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"
                 :lock-scroll="true">
                 <div class="d-flex flex-column align-items-center py-10">
      <img src="../../assets/images/loadingLogo.png" class="loadingLogo mb-3" style="width: 150px;" alt="" >
      <h1 class="text-center fw-bold text-red">
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
    </loading>
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item "><RouterLink to="/member" href="#" class="link-red">會員專區</RouterLink></li>
                    <li class="breadcrumb-item ">訂單狀況</li>
                    <li class="breadcrumb-item active " aria-current="page">{{ order.deliveryStatus }}</li>
                </ol>
            </nav>
            <p>訂單建立時間：{{ new Date(order.creatAt).toLocaleDateString() }} {{ new Date(order.creatAt).getHours() }}:{{ new Date(order.creatAt).getMinutes() }}</p>
            <p class="">訂單編號：{{ order.id }}</p>
            <div class="d-flex flex-column align-items-center mt-5">
                <!-- justify-content-between  -->
                <section class="col-12 col-lg-10 d-flex " id="orderProcess" style="color: #d3ccc1">
                    <!-- 如果是加圈圈 -->

                    <div class="d-flex flex-column align-items-center" :class="{'orderStatus': barWidth === 0}">
                        <i class=" fs-1 bi bi-box-seam text-red"></i>
                        <h5 class=" fw-bold text-red"  style="white-space: nowrap" >待出貨</h5>
                    </div>
                    <!-- 線條 -->
                    <div v-if="barWidth < 33" class="mt-4 mt-lg-5 mx-2" style="border-top: 2px dashed #d3ccc1; width: 33%;"></div>
                    <div v-else-if="barWidth >= 33" class="mt-4 mt-lg-5 mx-2" style="border-top: 2px solid #d04740; width: 33%;"></div>
                    <div class="d-flex flex-column align-items-center" :class="{'orderStatus': barWidth === 33}">
                        <i class="bi bi-truck  fs-1" :class="{'text-red': barWidth >= 33}"></i>
                        <h5 class=" fw-bold" :class="{'text-red': barWidth >= 33}" style="white-space: nowrap">運送中</h5>
                    </div>
                    <div v-if="barWidth < 66" class="mt-4 mt-lg-5 mx-2" style="border-top: 2px dashed #d3ccc1; width: 33%;"></div>
                    <div v-else-if="barWidth >= 66" class="mt-4 mt-lg-5 mx-2" style="border-top: 2px solid #d04740; width: 33%;"></div>
                    <div class="d-flex flex-column align-items-center" :class="{'orderStatus': barWidth === 66}">
                        <i class="bi bi-house-check  fs-1" :class="{'text-red': barWidth >= 66}" ></i>
                        <h5 class=" fw-bold" :class="{'text-red': barWidth >= 66}" style="white-space: nowrap">已抵達</h5>
                    </div>
                    <div v-if="barWidth < 100" class="mt-4 mt-lg-5 mx-2" style="border-top: 2px dashed #d3ccc1; width: 33%;"></div>
                    <div v-else-if="barWidth === 100" class="mt-4 mt-lg-5 mx-2" style="border-top: 2px solid #d04740; width: 33%;"></div>
                    <div class="d-flex flex-column align-items-center" :class="{'orderStatus-finished': barWidth === 100}">
                        <i class="bi bi-clipboard-check  fs-1" :class="{'text-red': barWidth === 100}" ></i>
                        <h5 class=" fw-bold" :class="{'text-red': barWidth === 100}" style="white-space: nowrap">訂單完成</h5>
                    </div>
                </section>
                <div class="row gx-5 row-cols-1 row-cols-lg-2 my-5">
                    <div class="col ">
                        <h4 class="text-center fw-bold">訂購商品資訊</h4>
                        <div v-if="order.cart" class="row py-3">
                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12" v-for="(item, index) in order.cart.items" :key="index + 756345">
                                <div class="card mb-3 border-0" style="border: 0px !important;">
                                    <div class="row g-0">
                                    <div class="col-4">
                                        <img :src="item.product.imgUrl" class="img-fluid rounded-start" style="object-fit: cover; height: 100px; width: 200px;">
                                    </div>
                                    <div class="col-8">
                                        <div class="card-body">
                                        <h5 class="card-title  mb-0 d-flex subTitle">{{ item.product.title }}
                                            <span class="ms-auto">x {{ numberComma(item.qty) }}</span>
                                        </h5>
                                        <div class="card-text d-flex justify-content-end">
                                            <del class="me-2 text-muted mt-1" style="font-size: 14px;" :class="{'d-none': !item.product.isCheaper}">NT$ {{ numberComma(item.product.originalPrice) }}</del>
                                            <span class=" mt-1"> <span :class="{'text-danger':item.product.isCheaper, 'fw-bold':item.product.isCheaper}">NT$ {{numberComma(item.product.price)}}</span> / {{ item.product.num }}{{ item.product.unit }}</span><br>
                                        </div>

                                        <!-- 非組合包 -->
                                        <p class="mb-0 text-danger text-end fw-bold" v-if="item.product.category !== '組合包'">小計：NT$ {{ numberComma(item.product.price * item.qty) }} / {{ numberComma(item.product.num * item.qty) }}{{ item.product.unit }}</p>
                                        <!-- 組合包 -->
                                        <p class="mb-0 text-danger text-end fw-bold" v-if="item.product.category === '組合包'">小計：NT$ {{ numberComma(item.product.price * item.qty) }} / {{ numberComma(item.qty) }}組</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                <hr>
                            </div>
                                </div>
                            </div>
                            <div class="col-12">
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
                            <tr class="border-top bg-lightPink">
                                <td class="fw-bold text-danger">總計金額</td>
                                <td class="text-end fw-bold text-danger">NT$ {{ numberComma(order.cart.finalTotal) }}</td>
                            </tr>
                            </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col ">
                        <h4  class="text-center fw-bold">收件人資訊</h4>
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
            </div>
        </div>
    </div>
</template>
<style>
 .w-1000{
    width: 1000px;
 }
 .orderStatus{
    border-radius: 50%;
    padding: 0 15px;
    background-color: #fff1f0;
 }
 .orderStatus-finished{
    border-radius: 50%;
    padding: 0 10px;
    background-color: #fff1f0;
 }
</style>
