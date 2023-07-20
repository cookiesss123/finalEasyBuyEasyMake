<template>
    <!-- fade -->
    <div class="modal right" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style=" overflow-y: hidden;">
        <div class="modal-dialog modal-fullscreen-md-down w-100" style="margin-right: 0; margin-top: 0;">
          <!-- v-if="cart" 避免錯誤 -->
            <div class="modal-content" style="height: 100vh; overflow-y:auto">
              <div class="modal-header bg-blue" style="border-radius: 0;">
                  <h5 class="modal-title text-white" v-if="uid">
                   {{ user.nickName }} 的購物車
                  </h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <!-- 非結帳頁面 -->
                <div v-if="this.$route.fullPath !== '/checkout'">
                  <div v-if="cartItems.length !== 0" class="row gy-3 row-cols-1 px-3">
                  <div class="col-12 d-flex ">
                    <button type="button" class="ms-auto btn btn-outline-danger rounded-0" @click="clearAllCarts" :disabled="loadingItem === 'loading'">
                      <i class="bi bi-cart-x-fill"></i> 清空購物車
                      <font-awesome-icon v-if="loadingItem === 'loading'" icon="fa-solid fa-spinner" spin />
                    </button>
                  </div>
                    <div class="col-12" v-for="(item, index) in cartItems" :key="index + 756345">
                      <div class="card border-0 mb-3" style="max-width: 540px; height: 130px;">
                        <div class="row g-0">
                          <RouterLink :to="`/products/${item.product.id}`" class="col-4">
                            <img :src="item.product.imgUrl" class="img-fluid  h-100 w-100" style="object-fit: cover; max-height: 130px;">
                          </RouterLink>
                          <div class="col-8">
                            <div class="card-body">
                              <h5 class="card-title d-flex" style="font-size: 16px;">
                                <RouterLink :to="`/products/${item.product.id}`" class="link-darkBrown">
                                  {{ item.product.title }}
                                </RouterLink>
                                <button @click="()=>deleteCart(item.product)" type="button" class="p-0 ms-auto btn-close m-0" aria-label="Close" style="width: 15px;"></button>
                              </h5>
                              <div class="card-text d-flex justify-content-end">
                                <del class="me-2 text-muted mt-1" style="font-size: 14px;" :class="{'d-none': !item.product.isCheaper}">NT$ {{ numberComma(item.product.originalPrice) }}</del>
                                <span class=" mt-1"> <span :class="{'text-danger':item.product.isCheaper, 'fw-bold':item.product.isCheaper}">NT$ {{numberComma(item.product.price)}}</span> / {{ item.product.num }}{{ item.product.unit }}</span><br>
                              </div>
                              <!-- 非組合包 -->
                              <p class="mb-0 text-danger text-end fw-bold" v-if="item.product.category !== '組合包'">小計：NT$ {{ numberComma(item.product.price * item.qty) }} / {{ numberComma(item.product.num * item.qty) }}{{ item.product.unit }}</p>
                              <!-- 組合包 -->
                              <p class="mb-0 text-danger text-end fw-bold" v-if="item.product.category === '組合包'">小計：NT$ {{ numberComma(item.product.price * item.qty) }} / {{ numberComma(item.qty) }}組</p>

                              <div class="d-flex justify-content-end align-items-center mt-2">
                                <button :disabled="loadingItem === 'loading'" class="btn btn-sm btn-blue rounded-circle" :class="{'disabled': item.qty === 1}"  style="width: 30px; height: 30px;" type="button" id="button-addon2" @click="()=>updateCartNum('reduce', item.product, item.qty)">
                                  <span v-if="loadingItem !== 'loading'">-</span>
                                  <font-awesome-icon v-else-if="loadingItem === 'loading'" icon="fa-solid fa-spinner" spin />
                                </button>

                                <input type="number" class="form-control border-0 text-center" v-model.number="item.qty" @change="changeCartNum(item.product, item.qty, $event)"  style="width: 70px;" @keydown="handleKeyDown">
                                <button :disabled="loadingItem === 'loading'" class="btn btn-sm btn-blue rounded-circle" style="width: 30px; height: 30px;" type="button" id="button-addon2" @click="()=>updateCartNum('add',item.product, item.qty)">
                                  <span v-if="loadingItem !== 'loading'">+</span>
                                  <!-- <i class="fas fa-spinner fa-pulse" v-if="loadingItem === product.id"></i> -->
                                  <font-awesome-icon v-else-if="loadingItem === 'loading'" icon="fa-solid fa-spinner" spin />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="border"></div>
                    </div>
                  <!-- <hr> -->
                  <div class="col-12">
                    <label for="code" class="col-3 form-label">優惠碼</label>
                    <div class="input-group mb-3" v-if="cart.total + cart.deliveryCharge === cart.finalTotal">
                      <input type="text" class="form-control" v-model="code">
                      <button class="btn btn-outline-blue" type="button" id="button-addon2" @click="()=>checkCoupon(code)">套用優惠碼</button>
                    </div>
                    <div class="input-group mb-3" v-else-if="cart.total + cart.deliveryCharge !== cart.finalTotal">
                      <!-- v-if="cart.coupon" -->
                      <input v-if="cart.coupon" type="text" class="form-control" :value="cart.coupon.code" disabled>
                      <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="cancelCoupon">取消</button>
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
                          <td>運費<span v-if="cart.total >= 1000">(滿千元免運)</span></td>
                          <td class="text-end">
                            NT$ {{ cart.total >= 1000 ? 0 : cart.deliveryCharge }}
                          </td>
                        </tr>
                        <!-- cart.coupon -->
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
                  </div>
                  <RouterLink to="/checkout" type="button" class="hvr-sweep-to-right btn btn-blue rounded-0"><i class="bi bi-cart-check-fill"></i> 前往結帳</RouterLink>
                </div>
                <div v-else-if="cartNum === 0" class="mt-6 d-flex flex-column align-items-center" >
                  <img src="../../src/assets/images/undraw_shopping_app_flsj.png" width="300" class="mb-3 " alt="" >
                  <h5 class="text-center">您的購物車是空的</h5>
                  <RouterLink class="link-blue h5" to="/products" >前往選購商品</RouterLink>
                </div>
                </div>
                <div v-else-if="this.$route.fullPath === '/checkout'" class="h-100 d-flex">
                  <h3 class="m-auto">
                    <img src="../assets/images/loadingLogo.png" class="loadingLogo mb-3" style="width: 100px;" alt="" >
                    <span class="animate-text me-1">結</span>
                    <span class="animate-text me-1">帳</span>
                    <span class="animate-text me-1">中</span>
                    <span class="animate-text me-1">.</span>
                    <span class="animate-text me-1">.</span>
                    <span class="animate-text">.</span>
                  </h3>
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
            console.log(this.user, '使用者資料')
          })
        } else {
          // 需要嗎?
          console.log('並未登入')
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
      console.log(newVal, '路徑')
      if (newVal === '/checkout') {
        this.code = ''
        console.log('清空優惠碼')
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
.hvr-sweep-to-right::before{
  background: #7555ff;
}
.hvr-sweep-to-right:hover {
  color: white !important;
}
.right .modal-dialog{
    transition: transform .3s ease-out;
    position: fixed;
    margin: auto;
    height: 100%;
}
.modal.right .modal-content{
  overflow-y: auto;
  border-radius: 0;
  border: none;
  height: 100%;
}
.right .modal-dialog {
    transform: translateX(250px);
    right: 0;
}
/* .hvr-sweep-to-right:hover{
    color: white !important;
}
  .hvr-sweep-to-right::before {
    background: #d04740;
  } */
</style>
