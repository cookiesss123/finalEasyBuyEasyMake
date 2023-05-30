<template>
    <!-- ref 都要叫modal -->
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                  <span v-if="status === 'edit'">編輯產品內容</span>
                  <span v-else-if="status === 'new'">新增產品內容</span>
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-4">
                        <label for="title" class="form-label">圖片網址</label>
                        <input type="text" id="title" class="form-control mb-3" v-model="tempArticle.imgUrl">
                        <img :src="tempArticle.imgUrl" alt="" width="300">
                        <label for="date" class="form-label mt-3">文章撰寫日期</label>
                        <input type="date" id="date" class="form-control mb-3" v-model="date">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" value="" id="isPublic" v-true="1" v-false="0" v-model="tempArticle.isPublic">
                          <label class="form-check-label" for="isPublic">
                            是否公開
                          </label>
                        </div>
                    </div>
                    <div class="col-8">
                      <div class="row gy-3">
                        <div class="col-2">
                          <label for="title" class="form-label">編號（id）</label>
                          <input type="text" id="title" class="form-control" v-model="tempArticle.id" disabled>
                        </div>
                        <div class="col-10">
                          <label for="content" class="form-label">標籤</label>
                          <div class="row">
                            <div class="col-3"  v-for="(tag, index) in tempArticle.tags" :key="tag + 23423">
                              <div class="input-group mb-3">
                                <input type="text" class="form-control" v-model="tempArticle.tags[index]">
                                <button class="btn btn-outline-primary" type="button" @click="tempArticle.tags.splice(index ,1)"><i class="bi bi-x-lg"></i></button>
                              </div>
                            </div>
                            <div class="col-3">
                              <button type="button" class="btn btn-outline-primary" @click="tempArticle.tags.push('')">新增標籤</button>
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="title" class="form-label">標題</label>
                          <input type="text" id="title" class="form-control" v-model="tempArticle.title">
                        </div>
                        <div class="col-12">
                          <label for="description" class="form-label">文章內容</label>
                          <textarea name="" id="description" cols="30" rows="10" class="form-control" v-model="tempArticle.description"></textarea>
                        </div>
                        <div class="col-12">
                          <label for="price" class="form-label">{{ comments.length }} 則留言</label>
                          <div v-for="comment in comments" :key="comment.id" style="background-color: antiquewhite;">
                            <h5>{{ comment.user.nickName}}
                              <span style="font-size: 16px;">
                                (使用者id {{ comment.user.id}})
                              </span>：</h5>
                            <p>{{ comment.message}}</p>
                          </div>
                        </div>
                        <div>
                          <button type="button" class="btn btn-outline-primary">新增官方留言</button>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-primary" @click="updateProduct">
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
const { VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      tempArticle: {
        tags: []
      },
      status: 'edit',
      recipes: [],
      date: '',
      comments: []
    }
  },
  mixins: [modalMixin],
  props: ['id', 'openModal', 'getArticles'],
  methods: {
    updateProduct () {
      this.tempArticle.createAt = new Date(this.date).getTime()
      // 編輯
      let url = `${VITE_PATH}/articles/${this.tempArticle.id}`
      let method = 'put'
      if (this.status === 'new') { // 新增
        url = `${VITE_PATH}/articles`
        method = 'post'
      }
      this.$http[method](url, this.tempArticle)
        .then(res => {
          console.log(res.data)
          this.getArticles()
          this.hide()
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    // this.getRecipes()
  },
  watch: {
    id () {
      console.log('id變了')

      if (this.id !== 'new' && this.id !== '') {
        this.$http.get(`${VITE_PATH}/articles/${this.id}`)
          .then(res => {
            this.tempArticle = res.data
            // 注意一定要用 toISOString() !!!!!!!!!!!!!!!!!!  才是 2023-02-24 的格式  用toString不能用 因為是 2023/02/24
            this.date = new Date(this.tempArticle.createAt).toISOString().split('T')[0]
            // 沒userId就找不到這個了
            return this.$http.get(`${VITE_PATH}/articles/${this.id}/comments?_expand=user`)
          }).then(res => {
            console.log(res.data)
            this.comments = res.data
            this.show()
            this.status = 'edit'
            this.openModal('')
          }).catch(err => {
            console.log(err)
          })
      } else if (this.id === 'new') {
        this.tempArticle = {
          tags: []
        }
        this.show()
        this.status = 'new'
        this.openModal('')
      }
    }
  }
}
</script>
