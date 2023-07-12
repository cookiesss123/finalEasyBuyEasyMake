<template>
  <div class="container my-10 ">
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
    <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/discounts" class="link-red">優惠特報</RouterLink></li>
            <li class="breadcrumb-item active" aria-current="page">{{ coupon.title }}</li>
          </ol>
        </nav>
    <div class="d-flex justify-content-center py-5">
        <div class="col-lg-8 col-12">
            <div class="card">
                <img :src="coupon.image" class="card-img-top" alt="..." height="300" style="object-fit: cover;">
                <div class="card-body">
                    <span>優惠時間：{{ new Date(coupon.startDate).toLocaleDateString() }}</span> ~
                    <span>{{new Date(coupon.dueDate).toLocaleDateString()  }}</span>
                    <h5 class="card-title h2 text-center">{{  coupon.title }}</h5>
                    <p class="card-text">{{ coupon.description }}</p>
                    <span>活動優惠碼{{ coupon.code }}</span>
                </div>
            </div>
        </div>
    </div>
  </div>

</template>
<script>
import { db } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
export default {
  data () {
    return {
      coupon: {},
      isLoading: false,
      fullPage: true
    }
  },
  components: {
    Loading
  },
  methods: {
    getCoupon () {
      const { id } = this.$route.params
      const dataRef = ref(db, `coupons/${id}`)
      onValue(dataRef, snapshot => {
        this.coupon = snapshot.val()
        console.log(this.coupon, '折價券')
        this.isLoading = false
      })
    }
  },
  mounted () {
    this.isLoading = true
    this.getCoupon()
  }
}
</script>
