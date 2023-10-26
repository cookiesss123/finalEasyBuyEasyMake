<script>
import loadingStore from '../../stores/loadingStore'
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import { db } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'
export default {
  data () {
    return {
      coupon: {}
    }
  },
  methods: {
    ...mapActions(loadingStore, ['startLoading', 'endLoading']),
    ...mapActions(cartStore, ['goToTop']),
    getCoupon () {
      const { id } = this.$route.params
      const dataRef = ref(db, `coupons/${id}`)
      onValue(dataRef, snapshot => {
        this.coupon = snapshot.val()
        this.endLoading()
      })
    }
  },
  mounted () {
    this.startLoading()
    this.goToTop()
    this.getCoupon()
  }
}
</script>

<template>
  <div class="container  py-md-96 py-60 ">
    <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><RouterLink to="/discounts" class="link-primary">優惠特報</RouterLink></li>
            <li class="breadcrumb-item active" aria-current="page">{{ coupon.title }}</li>
          </ol>
        </nav>
        <div class="d-flex justify-content-center py-lg-5">
            <div class="col-lg-8 col-12">
              <h2 class="fs-lg-2 fs-3 text-center fw-bold letter-spacing-5-sm-0 bg-primary-purple text-white py-2">{{  coupon.title }}</h2>
              <img :src="coupon.image" class="w-100 object-fit-cover border-lightPurple border-5 border" :alt="coupon.title" height="300" :title="coupon.title">
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
