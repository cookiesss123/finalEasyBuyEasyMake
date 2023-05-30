<template>
    <div class="container">
         <div class="d-flex my-4">
             <button type="button" class="ms-auto btn btn-primary" @click="openModal('new')">建立新文章</button>
         </div>
         <table class="table text-center" style="vertical-align: middle;">
             <thead>
                 <tr>
                     <th>文章編號</th>
                     <th>撰寫日期</th>
                     <th>作者</th>
                     <th>標題</th>
                     <th>內容</th>
                     <th>留言數</th>
                     <th>是否公開</th>
                     <th>編輯</th>
                 </tr>
             </thead>
             <tbody>
                 <tr v-for="article in articles" :key="article.id">
                    <td>{{ article.id }}</td>
                    <td>{{`${new Date(article.createAt).toLocaleString().split(' ')[0]}`}}</td>
                    <td>{{ article.user.nickName }}</td>
                    <td>{{ article.title }}</td>
                    <!-- white-space: nowrap; 避免換行 overflow: hidden; 文字溢出隱藏 text-overflow: ellipsis;  省略符號顯示 max-width: 100px; 設定最大寬度，可根據需要調整 -->
                    <td style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100px;">
                        {{ article.description }}
                    </td>
                    <td>{{ article.comments.length }}</td>
                    <td :class="{'text-success':article.isPublic, 'fw-bold': article.isPublic}">{{`${article.isPublic ? '公開' : '不公開'}`}}</td>
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-primary" @click="openModal(article.id)">編輯</button>
                            <button type="button" class="btn btn-sm btn-outline-danger" @click="openDeleteModal(article.id)">刪除</button>
                        </div>
                    </td>
                 </tr>
             </tbody>
         </table>
         <ArticleModal ref="productModal" :id="articleId" :open-modal="openModal" :get-articles="getArticles" :get-comments="getComments"></ArticleModal>
         <DeleteArticleModal ref="deleteProductModal" :id="articleDeleteId" :get-articles="getArticles" :open-delete-modal="openDeleteModal"></DeleteArticleModal>
     </div>
 </template>
<script>
import ArticleModal from '@/components/ArticleModal.vue'
import DeleteArticleModal from '@/components/DeleteArticleModal.vue'
const { VITE_PATH } = import.meta.env
// 官方新增 作者 作者 是否公開
export default {
  components: {
    ArticleModal,
    DeleteArticleModal
  },
  data () {
    return {
      articles: [],
      articleId: '',
      articleDeleteId: ''
    //   selectCategory: '全部',
    //   tempSearchTitle: ''
    }
  },
  methods: {
    getArticles () { // 取得全部
      this.$http.get(`${VITE_PATH}/articles?_embed=comments&_expand=user`)
        .then(res => {
          console.log(res.data)
          this.articles = res.data
        }).catch(err => {
          console.log(err)
        })
    },
    openModal (id) {
      this.articleId = id
    },
    openDeleteModal (id) {
      this.articleDeleteId = id
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>
