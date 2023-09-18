<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '../../stores/carts'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { auth } from '../../firebase/db'
import { onAuthStateChanged } from 'firebase/auth'

export default {
  data () {
    return {
      user: {},
      uid: ''
    }
  },
  mixins: [numberCommaMixin],
  methods: {
    ...mapActions(cartStore, ['getOrder', 'toastMessage']),
    getMyOrder () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          this.getOrder(this.uid)
        } else {
          this.uid = null
          this.user = {}
          // 遊客
          this.getOrder('1')
        }
      })
    }

  },
  mounted () {
    window.scrollTo(0, 0)

    this.toastMessage('恭喜您! 訂單建立完成')
    this.getMyOrder()
  },
  computed: {
    ...mapState(cartStore, ['myOrder'])
  }
}
</script>
<template>
    <div class="no-scroll-x">
        <section class="text-center" data-aos="fade-up">
            <div class="py-lg-200 py-96 bg-img-fixed" style="background-image: url('https://images.unsplash.com/photo-1681923786169-67be8db99af6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');"></div>
            <h2 class="text-purple mb-0 fs-lg-1 fs-5 letter-spacing-20 fw-bold bg-secondary-lightPurple py-2">訂單建立完成</h2>
        </section>

      <section class="container my-5">
        <div class="position-relative w-100 mt-lg-5 my-5">
                <div class="line-gray border-top position-absolute border-2 z-index-n1 start-50 translate-middle-x" style="top: 25%"></div>
                <div class="line-blue-50 border-top border-primary position-absolute border-2 z-index-n1"></div>
                <!-- 動畫所以加另一條 -->
                <div class="line-blue-100 border-top border-primary position-absolute border-2 z-index-n1"></div>

                <ul class="list-unstyled d-flex justify-content-between text-gray">
                    <li class="d-flex flex-column align-items-center">
                        <div class="circle bg-primary d-flex align-items-center justify-content-center mb-2 ms-n2">
                            <i class="bi bi-check-lg fs-lg-4 text-white"></i>
                        </div>
                        <p class="fs-lg-6 fs-14">確認購物車品項</p>
                    </li>
                    <li class="d-flex flex-column align-items-center">
                        <div class="circle bg-primary text-white fs-lg-4 d-flex align-items-center justify-content-center mb-2">
                            <i class="check-block bi bi-check-lg fs-lg-4 text-white"></i>
                            <span class="number-hide">2</span>
                        </div>
                        <p class="fs-lg-6 fs-14">填寫訂單資訊</p>
                    </li>
                    <li class="d-flex flex-column align-items-center">
                        <div class="circle circle-animation fs-lg-4 d-flex align-items-center justify-content-center mb-2">
                            <i class="check-block-3 bi bi-check-lg fs-lg-4"></i>
                            <span class="number-hide-3">3</span>
                        </div>
                        <p class="text-gray-to-primary-3 fs-lg-6 fs-14 fw-bold">成功下訂</p>
                    </li>
                </ul>
        </div>

        <div v-if="myOrder.cart">
            <div class="d-flex align-items-center mb-2">
                <span>會員可到 <RouterLink to="/member" class="link-primary">會員專區</RouterLink> 查看訂單運送進度</span>
                <RouterLink to="/products" class="btn btn-sm btn-primary hvr-sweep-to-right ms-auto">繼續購物</RouterLink>
            </div>
            <p class="mb-5">訂單建立時間：{{ new Date(myOrder.creatAt).toLocaleString().split(':')[0] }}:{{ new Date(myOrder.creatAt).toLocaleString().split(':')[1] }}</p>

            <div class="row g-5">
                <div class="col-lg-6">
                    <h4 class="text-center fw-bold bg-secondary py-2 mb-4">訂購商品資訊</h4>
                    <ul class="list-unstyled">
                        <li v-for="(item, index) in myOrder.cart.items" :key="index + 756345">
                    <div class="card mb-3">
                        <div class="row g-0">
                            <div class="col-4">
                                <img :src="item.product.imgUrl" :alt="item.product.title" class="img-fluid object-fit-cover w-100" style="height: 130px;">
                            </div>
                            <div class="col-8">
                                <div class="card-body d-flex flex-column h-100 pb-0">
                                    <div class="d-flex mb-auto">
                                        <h5 class="card-title mb-0 d-flex fs-lg-6 fs-14">{{ item.product.title }}</h5>
                                        <span class="ms-auto">x {{ numberComma(item.qty) }}</span>
                                    </div>
                                    <div class="card-text text-end">
                                        <del class="me-2 text-muted fs-14" :class="{'d-none': !item.product.isCheaper}">NT$ {{ numberComma(item.product.originalPrice) }}</del>
                                        <span :class="{'text-danger':item.product.isCheaper, 'fw-bold':item.product.isCheaper}">NT$ {{numberComma(item.product.price)}}</span>
                                        <span> / {{ item.product.num }}{{ item.product.unit }}</span>
                                        <!-- 非組合包 -->
                                        <p class="mb-0 text-danger fw-bold" v-if="item.product.category !== '組合包'">小計：NT$ {{ numberComma(item.product.price * item.qty) }} / {{ numberComma(item.product.num * item.qty) }}{{ item.product.unit }}</p>
                                        <!-- 組合包 -->
                                        <p class="mb-0 text-danger fw-bold" v-if="item.product.category === '組合包'">小計：NT$ {{ numberComma(item.product.price * item.qty) }} / {{ numberComma(item.qty) }}組</p>
                                    </div>

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
                        <tr class="border-top bg-secondary">
                            <td class="fw-bold text-danger">總計金額</td>
                            <td class="text-end fw-bold text-danger">NT$ {{ numberComma(myOrder.cart.finalTotal) }}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div class="col-lg-6">
                    <h4  class="text-center fw-bold bg-lightPurple py-2">收件人資訊</h4>
                    <div class="card-body">
                        <table class="table table-borderless table-striped">
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
                                <td>{{ myOrder.message === '' ? '無' : myOrder.message }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

      </section>
    </div>
</template>
<style>
</style>
