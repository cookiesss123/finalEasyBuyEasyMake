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
    ...mapActions(cartStore, ['getOrder', 'toastMessage']),
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
    window.scrollTo(0, 0)

    this.toastMessage('恭喜您! 訂單建立完成')
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
    <div class="">

        <!-- https://images.unsplash.com/photo-1616968173862-27da15c02bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80 -->
        <!-- https://images.unsplash.com/photo-1616968173983-cc56f09d8279?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80 -->

        <section class="py-9 d-flex" style="background-image:url('https://images.unsplash.com/photo-1678465952838-c9d7f5daaa65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'); background-position: center; background-size: cover; background-repeat: no-repeat;">
            <div class="checkoutMask mx-auto ">
                <div class="container">
                <ul class="list-unstyled d-lg-flex  fs-5 align-items-center">
                    <li class=" text-center" style="flex: 1;">
                        <i class="bi bi-check-circle-fill text-blue  fs-2"></i>
                        <p>
                            <span class="fw-bold">確認購物車品項</span>
                        </p>
                    </li>
                    <li class="bg-blue d-none d-lg-block " style="width: 200px; height: 3px; flex: 2;"></li>
                    <li class="bg-blue d-lg-none my-2" style="width: 3px; height: 40px;  margin: 0 auto;"></li>

                    <li class=" text-center" style="flex: 1;">
                        <i class="bi bi-check-circle-fill text-blue  fs-2"></i>
                        <p class="">
                            <span class="fw-bold">填寫訂單資訊</span>
                        </p>
                    </li>
                    <li class="bg-blue d-none d-lg-block " style="width: 200px; height: 3px; flex: 2;"></li>
                    <li class="bg-blue d-lg-none my-2" style="width: 3px; height: 40px;  margin: 0 auto;"></li>

                    <li class=" text-center" style="flex: 1;">
                        <i class="bi bi-check-circle-fill text-blue fs-2 rounded-circle" style="padding: 3px 5px; border: 2px dotted #4572c2;"></i>
                        <p class="">
                            <span class="text-blue fw-bold">成功下訂</span>
                        </p>
                    </li>
                </ul>
            </div>
            </div>
        </section>

      <section class="container my-5">
        <!-- v-if="myOrder.cart -->
        <!-- col-lg-6 -->
        <div class="" v-if="myOrder.cart">
            <!--  border border-blue -->
            <h1 class="h4 text-center text-white w-100 bg-blue py-2">恭喜您! 訂單建立完成</h1>
            <div class="d-flex align-items-center my-4">
                <span class="">會員可到 <RouterLink to="/member" class="link-blue">會員專區</RouterLink> 查看訂單運送進度</span>
                <span class="ms-auto"><RouterLink to="/products" class="btn btn-sm btn-blue hvr-sweep-to-right" style="border-radius: 0px;">繼續購物</RouterLink></span>
            </div>
            <p class="mb-2">訂單建立時間：{{ new Date(myOrder.creatAt).toLocaleDateString() }} {{ new Date(myOrder.creatAt).getHours() }}:{{ new Date(myOrder.creatAt).getMinutes() }} </p>

            <div class="row">
                <div class="col-lg-6 col-12">
                    <h4 class="text-center fw-bold bg-lightBlue py-2 mb-4">訂購商品資訊</h4>
                    <div class="" v-for="(item, index) in myOrder.cart.items" :key="index + 756345">
                    <div class="card mb-3" style="border: none !important;">
                        <div class="row g-0">
                        <div class="col-4">
                            <img :src="item.product.imgUrl" class="img-fluid " style="object-fit: cover;  width: 200px; height: 100px;">
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
                    <div class="">
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
                            <tr class="border-top bg-lightBlue">
                                <td class="fw-bold text-danger">總計金額</td>
                                <td class="text-end fw-bold text-danger">NT$ {{ numberComma(myOrder.cart.finalTotal) }}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            <div class="col-lg-6 col-12">
                <h4  class="text-center fw-bold bg-lightYellow py-2">收件人資訊</h4>

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
