<template>
    <!-- ref 都要叫modal -->
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                    刪除優惠券
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>確定要刪除優惠券
                    <span class="text-danger fw-bold">
                      【{{tempCoupon.title}}】
                    </span>
                    嗎?
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-danger" @click="deleteCoupon">
                確認刪除
                </button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import modalMixin from '../mixins/modalMixin'
import { db } from '../firebase/db'
import { ref, remove } from 'firebase/database'
import { mapActions } from 'pinia'
import cartStore from '../stores/carts'
export default {
  data () {
    return {
      tempCoupon: {},
      deleteId: ''
    }
  },
  mixins: [modalMixin],
  props: ['id', 'openDeleteModal', 'item'],
  methods: {
    ...mapActions(cartStore, ['toastMessage']),
    deleteCoupon () {
      remove(ref(db, `coupons/${this.deleteId}`))
      this.toastMessage('刪除優惠券')
      this.hide()
    }
  },
  watch: {
    id () {
      if (this.id) {
        this.show()
        this.tempCoupon = this.item
        this.deleteId = this.id
        this.openDeleteModal('', '')
      }
    }
  }
}
</script>
