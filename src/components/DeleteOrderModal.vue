<template>
    <!-- ref 都要叫modal -->
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                    刪除訂單
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>確定要刪除此筆訂單
                    <span class="text-danger fw-bold">
                      【{{this.deleteId}}】
                    </span>
                    嗎?
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-danger" @click="deleteOrder">
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
      customerId: '',
      deleteId: ''
    }
  },
  mixins: [modalMixin],
  props: ['uid', 'id', 'openDeleteModal'],
  methods: {
    ...mapActions(cartStore, ['toastMessage']),
    deleteOrder () {
      remove(ref(db, `orders/${this.customerId}/${this.deleteId}`))
      this.toastMessage('刪除訂單')
      this.hide()
    }
  },
  watch: {
    id () {
      if (this.id) {
        this.show()
        this.deleteId = this.id
        this.customerId = this.uid
        // 這裡被清空了當然讀不到... 所以要再另外存
        this.openDeleteModal('', '')
      }
    }
  }
}
</script>
