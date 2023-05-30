<template>
    <!-- ref 都要叫modal -->
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                    刪除產品
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>確定要刪除產品
                    <span class="text-danger fw-bold">
                      【{{tempProduct.title}}】
                    </span>
                    嗎?
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-danger" @click="deleteProdcut">
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
      deleteId: '',
      tempProduct: {}
    }
  },
  mixins: [modalMixin],
  props: ['id', 'openDeleteModal', 'item'],
  methods: {
    ...mapActions(cartStore, ['toastMessage']),

    deleteProdcut () {
      remove(ref(db, `products/${this.deleteId}/`))
      this.toastMessage('刪除食譜')
      this.hide()
    }
  },
  watch: {
    id () {
      if (this.id) {
        this.show()
        this.tempProduct = this.item
        console.log(this.tempProduct, '友直嗎')
        this.deleteId = this.id
        // 這裡被清空了當然讀不到... 所以要再另外存
        this.openDeleteModal('', '')
      }
    }
  }
}
</script>
