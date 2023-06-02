<template>
  <div class="container my-10 ">
    <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/discounts" class="link-red">優惠特報</RouterLink></li>
            <li class="breadcrumb-item active" aria-current="page">{{ coupon.title }}</li>
          </ol>
        </nav>
    <div class="d-flex justify-content-center py-5">
        <div class="col-lg-8 col-12">
            <div v-if="!loading" class="card">
                <img :src="coupon.image" class="card-img-top" alt="..." height="300" style="object-fit: cover;">
                <div class="card-body">
                    <span>優惠時間：{{ new Date(coupon.startDate).toLocaleDateString() }}</span> ~
                    <span>{{new Date(coupon.dueDate).toLocaleDateString()  }}</span>
                    <h5 class="card-title h2 text-center">{{  coupon.title }}</h5>
                    <p class="card-text">{{ coupon.description }}</p>
                    <span>活動優惠碼{{ coupon.code }}</span>
                </div>
            </div>
            <!-- 載入中 -->
            <LoadingComponent v-else-if="loading"></LoadingComponent>
        </div>
    </div>
  </div>

</template>
<script>
import { db } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'
import LoadingComponent from '../../components/LoadingComponent.vue'

export default {
  data () {
    return {
      coupon: {},
      loading: true
    }
  },
  components: {
    LoadingComponent
  },
  methods: {
    getCoupon () {
      const { id } = this.$route.params
      const dataRef = ref(db, `coupons/${id}`)
      onValue(dataRef, snapshot => {
        this.coupon = snapshot.val()
        console.log(this.coupon, '折價券')
        this.loading = false
      })
    }
  },
  mounted () {
    this.loading = true
    this.getCoupon()
  }
}
</script>
