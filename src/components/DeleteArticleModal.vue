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
                <p>確定要刪除文章
                    <span class="text-danger fw-bold">
                      【{{tempArticle.title}}】
                    </span>
                    嗎?
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-danger" @click="deleteArticle">
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
      tempArticle: {}
    }
  },
  mixins: [modalMixin],
  props: ['id', 'openDeleteModal', 'getArticles'],
  methods: {
    deleteArticle () {
      this.$http.delete(`${VITE_PATH}/articles/${this.tempArticle.id}`)
        .then(res => {
          console.log(res.data)
          this.getArticles()
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
        this.$http.get(`${VITE_PATH}/articles/${this.id}`)
          .then(res => {
            this.tempArticle = res.data
            console.log(this.tempArticle)
            this.show()
            this.openDeleteModal('')
          }).catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>
