<template>
    <!-- ref 都要叫modal -->
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div v-if="tempCoupon" class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                  <span v-if="status === 'edit'">編輯優惠券內容</span>
                  <span v-else-if="status === 'new'">新增優惠券內容</span>
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-lg-4">
                        <label for="image" class="form-label">主圖網址</label>
                        <input type="text" id="image" class="form-control mb-3" v-model="tempCoupon.image">
                        <img :src="tempCoupon.image" alt="優惠券照片" width="300">
                    </div>
                    <div class="col-lg-8">
                      <div class="row gy-3">
                        <div class="col-lg-4">
                          <label for="serialNumber" class="form-label">編號（id）</label>
                          <input type="text" id="serialNumber" class="form-control" v-model="tempCoupon.id" disabled>
                        </div>
                        <div class="col-lg-6">
                          <label for="title" class="form-label">優惠券名稱</label>
                          <input type="text" id="title" class="form-control" v-model="tempCoupon.title">
                        </div>
                        <div class="col-lg-2">
                          <label for="price" class="form-label">折扣(%)</label>
                          <input type="text" id="price" class="form-control" v-model.number="tempCoupon.discount">
                        </div>
                        <div class="col-lg-3">
                          <label for="date" class="form-label">起始日</label>
                          <input type="date" id="date" class="form-control" v-model="startDate">
                        </div>
                        <div class="col-lg-3">
                          <label for="date" class="form-label">到期日</label>
                          <input type="date" id="date" class="form-control" v-model="dueDate">
                        </div>
                        <div class="col-lg-3">
                          <label for="code" class="form-label">優惠碼</label>
                          <input type="text" id="code" class="form-control" v-model="tempCoupon.code">
                        </div>
                        <div class="col-lg-3">
                          <label for="condition" class="form-label">條件 >= 金額</label>
                          <input type="text" id="condition" class="form-control" v-model.number="tempCoupon.condition">
                        </div>
                        <div class="col-12">
                          <div class="form-check">
                          <input class="form-check-input" type="checkbox" :v-true="1" :v-false="0" id="isEnabled" v-model="tempCoupon.isEnabled">
                          <label class="form-check-label" for="isEnabled">
                            是否啟用
                          </label>
                        </div>
                        </div>
                        <div class="col-12">
                          <label for="description" class="form-label">優惠券描述</label>
                          <textarea name="" id="description" cols="30" rows="10" class="form-control" v-model="tempCoupon.description"></textarea>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-primary" @click="updateCoupon">
                  <span v-if="status === 'edit'">確認編輯</span>
                  <span v-else-if="status === 'new'">確認新增</span>
                </button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import modalMixin from '../mixins/modalMixin'
import { db } from '../firebase/db'
import { ref, onValue, update, set, push } from 'firebase/database'
import { mapActions } from 'pinia'
import cartStore from '../stores/carts'
export default {
  data () {
    return {
      tempCoupon: {
        isEnabled: false
      },
      status: 'edit',
      startDate: '',
      dueDate: '',
      couponId: ''
    }
  },
  mixins: [modalMixin],
  props: ['id', 'openModal'],
  methods: {
    ...mapActions(cartStore, ['toastMessage']),

    updateCoupon () {
      this.tempCoupon.startDate = new Date(this.startDate).getTime()
      this.tempCoupon.dueDate = new Date(this.dueDate).getTime()
      if (!this.tempCoupon.code || !this.tempCoupon.discount || !this.tempCoupon.condition || !this.tempCoupon.description || !this.tempCoupon.image || !this.tempCoupon.startDate || !this.tempCoupon.dueDate || !this.tempCoupon.title) {
        this.toastMessage('資料沒寫完', 'error')
        return
      }
      if (this.status === 'edit') {
        update(ref(db), {
          [`coupons/${this.couponId}/`]: {
            code: this.tempCoupon.code,
            discount: this.tempCoupon.discount,
            condition: this.tempCoupon.condition,
            startDate: this.tempCoupon.startDate,
            dueDate: this.tempCoupon.dueDate,
            isEnabled: this.tempCoupon.isEnabled,
            description: this.tempCoupon.description,
            image: this.tempCoupon.image,
            title: this.tempCoupon.title
          }
        })
        this.toastMessage('更改成功')
      } else if (this.status === 'new') {
        const reference = ref(db, 'coupons/')
        const newUserRef = push(reference)
        // 預設 false
        if (!this.tempCoupon.isEnabled) {
          this.tempCoupon.isEnabled = false
        }
        set(newUserRef, {
          code: this.tempCoupon.code,
          discount: this.tempCoupon.discount,
          condition: this.tempCoupon.condition,
          startDate: this.tempCoupon.startDate,
          dueDate: this.tempCoupon.dueDate,
          isEnabled: this.tempCoupon.isEnabled,
          description: this.tempCoupon.description,
          image: this.tempCoupon.image,
          title: this.tempCoupon.title
        })
        this.toastMessage('新增成功')
      }
      this.hide()
    }
  },
  mounted () {
  },
  watch: {
    id () {
      if (this.id !== 'new' && this.id !== '') {
        const dataRef = ref(db, `coupons/${this.id}`)
        onValue(dataRef, snapshot => {
          this.tempCoupon = snapshot.val()
          if (!this.tempCoupon) {
            this.hide()
            return
          }
          this.tempCoupon.id = this.id

          this.dueDate = new Date(this.tempCoupon.dueDate).toISOString().split('T')[0]
          this.startDate = new Date(this.tempCoupon.startDate).toISOString().split('T')[0]
          this.show()
          this.status = 'edit'
          this.couponId = this.id
          this.openModal('')
        })
      } else if (this.id === 'new') {
        this.tempCoupon = {}
        this.show()
        this.status = 'new'
        this.openModal('')
      }
    }
  }
}
</script>
