<template>
  <!-- style=" overflow-y: hidden;" -->
    <div class="modal right" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
      <!-- style="margin-right: 0; margin-top: 0;" -->
        <div class="modal-dialog modal-fullscreen-md-down w-100">
          <!-- style="height: 100vh; overflow-y:auto" -->
            <div class="modal-content">
              <div class="modal-header bg-primary-purple rounded-0 d-flex">
                <!--  v-if="uid" {{ user.nickName }}  -->
                  <h5 class="modal-title text-white ms-auto letter-spacing-5">購物車</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <!-- 非結帳頁面 -->
                <div v-if="this.$route.fullPath !== '/checkout'" class="h-100">
                  <div v-if="cartItems.length !== 0" class="d-flex flex-column h-100">
                    <div class="text-end mb-3">
                      <button type="button" class="btn btn-outline-danger" @click="clearAllCarts" :disabled="loadingItem === 'loading'">
                        清空購物車
                        <div v-if="loadingItem === 'loading'" class="spinner-border spinner-border-sm" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </button>
                    </div>
                    <ul class="list-unstyled">
                      <li v-for="(item, index) in cartItems" :key="index + 756345">
                        <div class="card">
                          <div class="row g-0">
                            <RouterLink :to="`/products/${item.product.id}`" class="col-4">
                              <img :src="item.product.imgUrl" class="w-100 object-fit-cover" :alt="item.product.title" style="height: 130px !important;">
                            </RouterLink>
                            <div class="col-8">
                              <div class="card-body py-2">
                                <div class="d-flex">
                                  <h5 class="card-title fs-6">
                                    <RouterLink :to="`/products/${item.product.id}`" class="link-darkBrown">
                                      {{ item.product.title }}
                                    </RouterLink>
                                  </h5>
                                  <button @click="()=>deleteCart(item.product)" type="button" class="p-0 ms-auto btn-close " aria-label="Close"></button>
                                </div>

                                <div class="card-text text-end">
                                  <del class="me-2 text-muted fs-14" :class="{'d-none': !item.product.isCheaper}">NT$ {{ numberComma(item.product.originalPrice) }}</del>
                                  <span :class="{'text-danger':item.product.isCheaper, 'fw-bold':item.product.isCheaper}">NT$ {{numberComma(item.product.price)}}</span>
                                  <span>  / {{ item.product.num }}{{ item.product.unit }}</span><br>

                                  <p class="mb-0 text-danger text-end fw-bold">小計：NT$ {{ numberComma(item.product.price * item.qty) }} / {{  }}{{ item.product.category !== '組合包' ? numberComma(item.product.num * item.qty) + item.product.unit : numberComma(item.qty) + '組' }}</p>
                                </div>

                                <div class="d-flex justify-content-end align-items-center mt-2">
                                  <button :disabled="loadingItem === 'loading'" class="btn btn-sm btn-outline-gradient rounded-circle" :class="{'disabled': item.qty === 1}"  style="width: 30px; height: 30px;" type="button" @click="()=>updateCartNum('reduce', item.product, item.qty)">
                                    <span v-if="loadingItem !== 'loading'">-</span>
                                    <div v-else-if="loadingItem === 'loading'" class="spinner-border spinner-border-sm" role="status">
                                      <span class="visually-hidden">Loading...</span>
                                    </div>
                                  </button>

                                  <input type="number" class="form-control border-0 text-center mx-2" v-model.number="item.qty" @change="changeCartNum(item.product, item.qty, $event)"  style="width: 70px;" @keydown="handleKeyDown">
                                  <button :disabled="loadingItem === 'loading'" class="btn btn-sm btn-outline-gradient rounded-circle" style="width: 30px; height: 30px;" type="button" @click="()=>updateCartNum('add',item.product, item.qty)">
                                    <span v-if="loadingItem !== 'loading'">+</span>
                                    <div v-else-if="loadingItem === 'loading'" class="spinner-border spinner-border-sm" role="status">
                                      <span class="visually-hidden">Loading...</span>
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <hr>
                      </li>
                    </ul>
                    <label for="code" class="col-3 form-label mt-auto">優惠碼</label>
                    <div class="input-group mb-3" v-if="cart.total + cart.deliveryCharge === cart.finalTotal">
                      <input type="text" class="form-control" v-model="code">
                      <button class="btn btn-outline-gradient fw-normal" type="button" @click="()=>checkCoupon(code)">套用優惠碼</button>
                    </div>
                    <div class="input-group mb-3" v-else-if="cart.total + cart.deliveryCharge !== cart.finalTotal">
                      <input v-if="cart.coupon" type="text" class="form-control" :value="cart.coupon.code" disabled>
                      <button class="btn btn-outline-gray" type="button" @click="cancelCoupon">取消</button>
                    </div>
                    <table class="table table-borderless">
                      <thead>
                        <tr>
                          <th class="fw-normal">商品總金額</th>
                          <th class="text-end fw-normal">NT$ {{ numberComma(cart.total) }}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>運費<span v-if="cart.total >= 1000">（滿千元免運）</span></td>
                          <td class="text-end">
                            NT$ {{ cart.total >= 1000 ? 0 : cart.deliveryCharge }}
                          </td>
                        </tr>
                        <tr v-if="cart.total + cart.deliveryCharge !== cart.finalTotal && cart.coupon">
                          <td>優惠券折扣 - {{cart.coupon.title}}</td>
                          <td class="text-end">- NT$ {{ numberComma(Math.ceil(cart.total * (cart.coupon.discount / 100))) }}</td>
                        </tr>
                        <tr class="border-top">
                          <td class="fw-bold text-danger">總計金額</td>
                          <td class="text-end fw-bold text-danger">
                            <span v-if="cart.total < 1000">NT$ {{ numberComma(cart.finalTotal) }}</span>
                            <span v-else-if="cart.total >= 1000">NT$ {{ numberComma(cart.finalTotal - cart.deliveryCharge) }}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <RouterLink to="/checkout" type="button" class="hvr-sweep-to-right btn btn-primary w-100 ">前往結帳</RouterLink>
                  </div>
                  <div v-else-if="cartNum === 0" class="h-100 d-flex">
                    <div class="m-auto text-center">
                      <img src="../../src/assets/images/undraw_shopping_app_flsj.png" class="mb-3 img-md-200-sm-150" alt="空的購物車圖示" >
                      <p class="fs-5">您的購物車是空的</p>
                      <RouterLink class="link-primary h5" to="/products" >前往選購商品</RouterLink>
                    </div>
                  </div>
                </div>
                <div v-else-if="this.$route.fullPath === '/checkout'" class="h-100 d-flex">
                  <p class="m-auto fs-3">
                    <img src="../assets/images/loadingLogo.png" class="loading-logo me-3" style="width: 60px;" alt="logo" >
                    <span class="animate-text me-1">結</span>
                    <span class="animate-text me-1">帳</span>
                    <span class="animate-text me-1">中</span>
                    <span class="animate-text me-1">.</span>
                    <span class="animate-text me-1">.</span>
                    <span class="animate-text">.</span>
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
import modalMixin from '../mixins/modalMixin'
import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/carts'
import numberCommaMixin from '../mixins/numberCommaMixin'
import { db, auth } from '../firebase/db'
import { onAuthStateChanged } from 'firebase/auth'
import { ref, onValue } from 'firebase/database'
export default {
  data () {
    return {
      code: '',
      uid: '',
      user: {}
    }
  },
  mixins: [modalMixin, numberCommaMixin],
  methods: {
    ...mapActions(cartStore, ['updateCartNum', 'changeCartNum', 'handleKeyDown', 'deleteCart', 'deleteAllCarts', 'getCoupons', 'checkCoupon', 'reUseCoupon', 'getCart', 'toastMessage']),
    // 取消優惠碼
    cancelCoupon () {
      this.code = ''
      this.reUseCoupon()
    },
    // 清空購物車也要刪除優惠碼
    clearAllCarts () {
      this.code = ''
      this.deleteAllCarts()
      this.toastMessage('已清空遊客購物車')
    },
    getCartData () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          this.getCart(this.uid)
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
          })
        } else {
          this.uid = null
          this.user = {}
          // 遊客
          this.getCart('1')
        }
      })
    }
  },
  mounted () {
    this.getCoupons()
    this.getCartData()
  },
  watch: {
    // 監聽 route.fullPath 變化
    // 只要換頁就關閉cartModal
    '$route.fullPath' (newVal) { // oldVal
      if (newVal === '/checkout') {
        this.code = ''
        this.hide()
      } else if (newVal.includes('/products')) { // 點到產品頁面也關閉modal
        this.hide()
      }
    }
    // 清空購物車 也要刪除CODE
  },
  computed: {
    ...mapState(cartStore, ['cart', 'cartItems', 'cartNum', 'loadingItem'])
  }
}
</script>
<style>
/* 要寫在這才有用 */
/* 隱藏input輸入框的上下按鈕 Chrome, Safari, Edge, Opera */
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield; /* Firefox */
  appearance: textfield;
}

</style>
