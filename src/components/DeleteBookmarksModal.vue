<template>
    <!-- ref 都要叫modal -->
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div class="modal-dialog  modal-dialog-centered">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                    刪除收藏
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p>確定要刪除<span v-if="this.pageStatus === 'recipe'">食譜</span><span v-else-if="this.pageStatus === 'product'">產品</span>收藏
                    <span  class="text-danger fw-bold">
                      【{{this.bookMark.title}}】
                    </span>
                    嗎?
                </p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-gray" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-danger" @click="()=>deleteBookmark()">確認刪除</button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import modalMixin from '../mixins/modalMixin'
import { db } from '../firebase/db'
import { ref, remove } from 'firebase/database'
import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/carts'
export default {
  data () {
    return {
      bookMark: {},
      deleteId: ''
    }
  },
  mixins: [modalMixin],
  props: ['id', 'item', 'pageStatus', 'openDeleteModal'],
  methods: {
    ...mapActions(cartStore, ['toastMessage']),
    // 刪除所有收藏
    deleteBookmark () {
      let bookMark = 'recipeBookmarks'
      if (this.pageStatus === 'product') {
        bookMark = 'productBookmarks'
      }
      remove(ref(db, `${bookMark}/${this.uid}/${this.deleteId}`))
      this.toastMessage('已刪除收藏')
      this.hide()
    }
  },
  watch: {
    id () {
      if (this.id) {
        this.show()
        this.bookMark = this.item
        this.deleteId = this.id
        this.openDeleteModal('', '')
      }
    }
  },
  computed: {
    ...mapState(cartStore, ['uid'])
  },
  mounted () {
  }
}
</script>
