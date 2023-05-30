<template>
    <div class="container my-5">
        <div class="row row-cols-2">
            <div class="col" v-for="article in articles" :key="article.id">
                <div class="card">
                    <img :src="article.imgUrl" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title h2">{{  article.title }}</h5>
                        <p class="card-text text-truncate">{{ article.description }}</p>
                        <div class="d-flex">
                            <a href="#" class="btn btn-primary ms-auto">查看完整文章</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const { VITE_PATH } = import.meta.env
export default {
  data () {
    return {
      articles: []
    }
  },
  methods: {
    getArticles () {
      this.$http.get(`${VITE_PATH}/articles`)
        .then(res => {
          console.log(res.data)
          this.articles = res.data
        }).catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getArticles()
  }
}
</script>
