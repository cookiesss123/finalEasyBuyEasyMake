<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '../../stores/carts'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { auth } from '../../firebase/db'
import { onAuthStateChanged } from 'firebase/auth'

// const { VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      userId: '',
      token: '',
      nickName: '',
      user: {}
    }
  },
  mixins: [numberCommaMixin],
  methods: {
    ...mapActions(cartStore, ['getOrder']),
    getMyOrder () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          this.getOrder(this.uid)
        } else {
          console.log('並未登入')
          this.uid = null
          this.user = {}
          // 遊客
          this.getOrder('1')
        }
      })
    }

  },
  mounted () {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.userId = localStorage.getItem('userId')
    this.userId = Number(this.userId)
    this.nickName = localStorage.getItem('nickName')
    this.getMyOrder()
  },
  computed: {
    ...mapState(cartStore, ['myOrder'])
    // 找到當筆
  }
}
</script>
<template>
    <div class="my-10">
      <div class="container">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item ">
                    購物車
                </li>
                <li class="breadcrumb-item active   " aria-current="page">填寫訂單資訊</li>
                <li class="breadcrumb-item active   " aria-current="page">訂單完成</li>
            </ol>
        </nav>
      </div>
      <section class="container d-flex justify-content-center mt-5">
        <!-- v-if="myOrder.cart -->
        <div class="col-lg-6" v-if="myOrder.cart">
            <!--  border border-red -->
            <div class="row">
            <h1 class="h4 text-center text-white w-100 bg-red py-2">恭喜您! 訂單建立完成</h1>
            <div class="col-12 d-flex align-items-center my-4">
                <span class="">會員可到 <RouterLink to="/member" class="link-orange">會員專區</RouterLink> 查看訂單處理狀況</span>
                <span class="ms-auto"><RouterLink to="/products" class="btn btn-sm btn-red">繼續購物</RouterLink></span>
            </div>
            <p class="mb-2">訂單建立時間：{{ new Date(myOrder.creatAt).toLocaleDateString() }}</p>
            <div class="col-12" v-for="(item, index) in myOrder.cart.items" :key="index + 756345">
                <div class="card mb-3 border-0">
                    <div class="row g-0">
                    <div class="col-4">
                        <img :src="item.product.imgUrl" class="img-fluid rounded-start" style="object-fit: cover;  width: 200px; height: 100px;">
                    </div>
                    <div class="col-8">
                        <div class="card-body">
                        <h5 class="card-title  mb-0 d-flex subTitle">{{ item.product.title }}
                            <span class="ms-auto">x {{ numberComma(item.qty) }}</span>
                        </h5>
                        <div class="card-text d-flex justify-content-end">
                            <del class="me-2 text-muted mt-1" style="font-size: 14px;" :class="{'d-none': !item.product.isCheaper}">NT$ {{ numberComma(item.product.originalPrice) }}</del>
                            <span class=" mt-1"> <span :class="{'text-danger':item.product.isCheaper, 'fw-bold':item.product.isCheaper}">NT$ {{numberComma(item.product.price)}}</span> / {{ item.product.num }}{{ item.product.unit }}</span>
                        </div>

                        <!-- <p class="mb-0 text-danger text-end">小計：NT$ {{ item.product.price * item.qty }} / {{ item.product.num * item.qty }}{{ item.product.unit }}</p> -->

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
            <div class="col-12">
                <div class="card border-0">
                    <div class="card-body">
                        <table class="table table-borderless">
                            <thead>
                            <tr>
                                <th class="fw-normal">商品總金額</th>
                                <th class="text-end fw-normal">NT$ {{ numberComma(myOrder.cart.total) }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>運費<span v-if="myOrder.cart.total >= 1000">(滿千元免運)</span></td>
                                <td class="text-end">NT$ {{ myOrder.cart.deliveryCharge }}</td>
                            </tr>
                            <tr v-if="myOrder.cart.total + myOrder.cart.deliveryCharge !== myOrder.cart.finalTotal && myOrder.cart.coupon">
                                <td>優惠券折扣</td>
                                <td class="text-end">- NT$ {{ numberComma(Math.ceil(myOrder.cart.total * (myOrder.cart.coupon.discount / 100))) }}</td>
                            </tr>
                            <tr class="border-top">
                                <td class="fw-bold text-danger">總計金額</td>
                                <td class="text-end fw-bold text-danger">NT$ {{ numberComma(myOrder.cart.finalTotal) }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="col-12">
                <div class="card border-0">
                    <div class="card-body">
                        <table class="table table-borderless text-red">
                            <thead>
                            <tr>
                                <th class="fw-normal"><i class="bi bi-envelope-fill" ></i> 信箱</th>
                                <th class="fw-normal">{{ myOrder.email }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><i class="bi bi-person-fill"></i> 收件人姓名</td>
                                <td>{{ myOrder.name }}</td>
                            </tr>
                            <tr>
                                <td><i class="bi bi-telephone-fill"></i> 收件人電話</td>
                                <td>{{ myOrder.phoneNum }}</td>
                            </tr>
                            <tr>
                                <td><i class="bi bi-house-fill"></i> 收件人地址</td>
                                <td>{{ myOrder.address }}</td>
                            </tr>
                            <tr>
                                <td><i class="bi bi-wallet-fill"></i> 付款方式</td>
                                <td>貨到付款</td>
                            </tr>
                            <tr>
                                <td><i class="bi bi-chat-left-text-fill"></i> 留言</td>
                                <td>{{ myOrder.message }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </div>
        </div>

      </section>
    </div>
</template>
<style>
</style>
