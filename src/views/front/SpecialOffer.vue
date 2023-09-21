<template>
  <div class="container  py-md-96 py-60 ">
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
            <li class="breadcrumb-item"><RouterLink to="/discounts" class="link-primary">優惠特報</RouterLink></li>
            <li class="breadcrumb-item active" aria-current="page">{{ coupon.title }}</li>
          </ol>
        </nav>
        <div class="d-flex justify-content-center py-lg-5">
            <div class="col-lg-8 col-12">
              <h2 class="fs-lg-2 fs-3 text-center fw-bold letter-spacing-5-sm-0 border-bottom border-2 border-primary text-primary py-2">{{  coupon.title }}</h2>
              <img :src="coupon.image" class="w-100 object-fit-cover" alt="..." height="300">
              <table class="table my-4">
                <thead>
                  <tr>
                    <th class="fw-normal text-muted" width="150">優惠時間</th>
                    <th class="fw-normal">{{ new Date(coupon.startDate).toLocaleDateString() }} ~
                      {{new Date(coupon.dueDate).toLocaleDateString()  }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-muted">活動優惠碼</td>
                    <td>{{ coupon.code }}</td>
                  </tr>
                </tbody>
              </table>
              <p class="card-text text-indent-2 lh-lg">{{ coupon.description }}</p>
              <p class="text-muted"> *此優惠不可與其他優惠同時使用</p>
            </div>
        </div>
  </div>

</template>
<script>
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
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
    ...mapActions(cartStore, ['goToTop']),
    getCoupon () {
      const { id } = this.$route.params
      const dataRef = ref(db, `coupons/${id}`)
      onValue(dataRef, snapshot => {
        this.coupon = snapshot.val()
        this.isLoading = false
      })
    }
  },
  mounted () {
    this.goToTop()

    this.isLoading = true
    this.getCoupon()
  }
}
</script>
