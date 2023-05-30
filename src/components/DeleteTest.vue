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
const { VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      tempProduct: {}
    }
  },
  mixins: [modalMixin],
  props: ['id', 'openDeleteModal', 'getProducts'],
  methods: {
    deleteProdcut () {
      this.$http.delete(`${VITE_PATH}/products/${this.tempProduct.id}`)
        .then(res => {
          console.log(res.data)
          this.getProducts()
          this.hide()
        }).catch(err => {
          console.log(err)
        })
    }
  },
  watch: {
    id () {
      if (this.id) {
        console.log(this.id, '改變了')
        this.$http.get(`${VITE_PATH}/products/${this.id}`)
          .then(res => {
            this.tempProduct = res.data
            console.log(this.tempProduct)
            this.show()
            this.openDeleteModal('')
          }).catch(err => {
            console.log(err)
          })
      }
    }
  },
  mounted () {
    this.show()
  }
}
</script>
<style>
.modal {
  display: flex !important;
  align-items: center;
  justify-content: center;
}

</style>
