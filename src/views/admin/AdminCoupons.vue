<script>
import CouponModal from '@/components/CouponModal.vue'
import DeleteCouponModal from '@/components/DeleteCouponModal.vue'
import { db } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'
export default {
  components: {
    CouponModal,
    DeleteCouponModal
  },
  data () {
    return {
      coupons: {},
      couponId: '',
      couponDeleteId: '',
      couponDeleteItem: {}
    }
  },
  methods: {
    getCoupons () {
      const dataRef = ref(db, 'coupons/')
      onValue(dataRef, snapshot => {
        this.coupons = snapshot.val()
        console.log(this.coupons, '折價券')
      })
    },
    openModal (id) {
      this.couponId = id
    },
    openDeleteModal (id, item) {
      this.couponDeleteId = id
      this.couponDeleteItem = item
    }
  },
  mounted () {
    this.getCoupons()
  }
}
</script>

<template>
    <div class="container">
         <div class="d-flex my-4">
             <button type="button" class="ms-auto btn btn-primary" @click="openModal('new')">建立新優惠券</button>
         </div>
         <table class="table text-center" style="vertical-align: middle;">
             <thead>
                <tr>
                    <th>編號</th>
                    <th>名稱</th>
                    <th>優惠碼</th>
                    <th>折扣百分比</th>
                    <th>詳細內容</th>
                    <th>起始日</th>
                    <th>到期日</th>
                    <th>是否啟用</th>
                    <th>編輯</th>
                </tr>
             </thead>
             <tbody>
               <tr v-for="(coupon, index) in coupons" :key="index">
                <td>{{ index }}</td>
                <td>{{ coupon.title }}</td>
                <td>{{ coupon.code }}</td>
                <td>{{ coupon.discount }} %</td>
                <td>{{ coupon.description }}</td>
                <td>{{ new Date(coupon.startDate).toLocaleString().split(' ')[0] }}</td>
                <td>{{ new Date(coupon.dueDate).toLocaleString().split(' ')[0] }}</td>
                <td>{{ coupon.isEnabled ? '是' : '否' }}</td>
                <td>
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-primary" @click="openModal(index)">編輯</button>
                        <button type="button" class="btn btn-sm btn-outline-danger" @click="openDeleteModal(index, coupon)">刪除</button>
                    </div>
                </td>
               </tr>
             </tbody>
         </table>
         <CouponModal ref="productModal" :id="couponId" :open-modal="openModal"></CouponModal>
         <DeleteCouponModal ref="deleteProductModal" :id="couponDeleteId" :item="couponDeleteItem" :open-delete-modal="openDeleteModal"></DeleteCouponModal>
     </div>
 </template>
