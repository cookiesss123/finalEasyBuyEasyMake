<script>
import { RouterLink } from 'vue-router'
import DeleteBookmarksModal from '../../components/DeleteBookmarksModal.vue'
import numberCommaMixin from '../../mixins/numberCommaMixin'
// mapState
import { mapActions, mapGetters } from 'pinia'
import cartStore from '../../stores/carts'
import dataStore from '../../stores/mainData'
// import markStore from '../../stores/bookmark'
import { db, auth } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { selections } from '../../utils/publicData'
import BannerComponent from '../../components/BannerComponent.vue'
export default {
  components: {
    RouterLink,
    Loading,
    DeleteBookmarksModal,
    BannerComponent
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      selections,
      uid: '',
      bookMarks: [],
      pageStatus: 'recipe',
      deleteId: '',
      deleteItem: {},
      averageRate: [],
      rates: {},
      recipeThumbs: [],
      thumbs: {},

      isLoading: false
    }
  },
  methods: {
    ...mapActions(cartStore, ['addCart', 'toastMessage', 'goToTop']),
    // ...mapActions(markStore, ['getBookmarks']),

    getBookmarks (dataName) {
      this.isLoading = true
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid

          const dataRef = ref(db, `${dataName}/${this.uid}`)
          onValue(dataRef, snapshot => {
            this.bookMarks = snapshot.val()
            if (!this.bookMarks) {
              this.isLoading = false
              return
            }
            this.bookMarks = Object.values(this.bookMarks)

            if (this.pageStatus === 'recipe') {
              const dataRef = ref(db, 'recipeThumbs')
              onValue(dataRef, snapshot => {
                const recipeThumbs = snapshot.val()
                Object.keys(recipeThumbs).forEach(item => {
                  this.thumbs[item] = recipeThumbs[item].thumbs
                })

                this.bookMarks.forEach((recipe, index) => {
                  Object.keys(this.thumbs).forEach(thumbId => {
                    if (recipe.id === thumbId) {
                      this.bookMarks[index].thumbs = this.thumbs[thumbId]
                    }
                  })
                })
                this.bookMarks.forEach((recipe, index) => {
                  if (!recipe.thumbs) {
                    this.bookMarks[index].thumbs = 0
                  }
                })
                this.isLoading = false
              })
            } else if (this.pageStatus === 'product') {
              const dataRef = ref(db, 'productRates/')
              onValue(dataRef, snapshot => {
                const allRates = Object.values(snapshot.val())

                this.rates = {}
                allRates.forEach(item => {
                  if (!this.rates[item.productId]) {
                    this.rates[item.productId] = { scores: item.score, ratePeople: 1, averageRate: item.score / 1 }
                  } else if (this.rates[item.productId]) {
                    this.rates[item.productId].scores += item.score
                    this.rates[item.productId].ratePeople += 1
                    this.rates[item.productId].averageRate = Number((this.rates[item.productId].scores / this.rates[item.productId].ratePeople).toFixed(1))
                  }
                })
                this.bookMarks.forEach((item, index) => {
                  if (!this.rates[item.id]) {
                    this.bookMarks[index].scores = 0
                    this.bookMarks[index].ratePeople = 0
                    this.bookMarks[index].averageRate = 0
                    return
                  }
                  this.bookMarks[index].scores = this.rates[item.id].scores
                  this.bookMarks[index].ratePeople = this.rates[item.id].ratePeople
                  this.bookMarks[index].averageRate = this.rates[item.id].averageRate
                })
                this.isLoading = false
              })
            }
          })
        } else {
          this.uid = null
          if (!this.uid) {
            this.isLoading = false
            this.toastMessage('登入才可使用收藏功能', 'error')
            this.$router.push('/loginSignup')
          }
        }
      })
    },
    openDeleteModal (id, item) {
      this.deleteId = id
      this.deleteItem = item
    },
    getAllBookmarks () {
    }
  },
  mounted () {
    this.goToTop()
    this.getBookmarks('recipeBookmarks')
  },
  watch: {
    pageStatus () {
      if (this.pageStatus === 'product') {
        this.getBookmarks('productBookmarks')
      } else if (this.pageStatus === 'recipe') {
        this.getBookmarks('recipeBookmarks')
      }
    }
  },
  computed: {
    ...mapGetters(dataStore, ['discount'])
  }
  // ...mapState(markStore, ['recipeBookMarks', 'productBookmarks'])
}
</script>
<template>
    <div class="no-scroll-x">
        <loading v-if="uid" v-model:active="isLoading"
                 :lock-scroll="true">
                 <div class="d-flex flex-column align-items-center py-96">
      <img src="../../assets/images/loadingLogo.png" class="loading-logo mb-3" alt="logo" >
      <p class="text-center fw-bold text-purple fs-md-2 fs-5">
        <span class="me-1 animate-text">L</span>
        <span class="mx-1 animate-text">o</span>
        <span class="mx-1 animate-text">a</span>
        <span class="mx-1 animate-text">d</span>
        <span class="mx-1 animate-text">i</span>
        <span class="mx-1 animate-text">n</span>
        <span class="mx-1 animate-text">g</span>
        <span class="mx-2 animate-text">.</span>
        <span class="me-2 animate-text">.</span>
        <span class="animate-text">.</span>
      </p>
    </div>
        </loading>
        <BannerComponent></BannerComponent>
        <section class="container py-5">
          <div class="pt-lg-4 pt-3 position-relative">
            <ul class="category-selector row row-cols-2 list-unstyled border-bottom">
              <li v-for="item in selections.bookmarks" :key="item.icon" class="col text-center" :class="{'pointer-events-none': pageStatus === item.value}">
                <a href="#"  @click.prevent="()=>pageStatus = item.value" class="text-decoration-none d-inline-block" :class="{'fw-bold': pageStatus === item.value, 'link-primary': pageStatus === item.value}">
                  <i v-if="pageStatus !== item.value" :class="item.icon" class="text-gray"></i>
                <i v-if="pageStatus === item.value" :class="item.iconSelected" class="text-primary"></i>
                <span  class="fs-12 fs-md-5 d-block pb-2">{{ item.title }}</span>
                </a>
              </li>
            </ul>
            <div class="blue-line bg-primary position-absolute"  :class="{'active-recipes': pageStatus === 'recipe', 'active-products': pageStatus === 'product'}"></div>
          </div>
          <div class="py-4">
            <div v-if="pageStatus === 'recipe' && bookMarks && !isLoading" class="row row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-4">
              <div class="col" v-for="recipe in bookMarks" :key="recipe.id">
                <div class="card position-relative">
                  <RouterLink :to="`/recipes/${recipe.id}`" class="card-img-hover position-relative">
                    <img :src="recipe.image" class="object-fit-cover card-img" :alt="recipe.title">
                    <span class="badge rounded-pill bg-primary position-absolute start-0 bottom-0 m-3">{{ recipe.category }}</span>
                    <p class="detail position-absolute top-50 start-50 translate-middle fw-bold letter-spacing-5 link-darkBrown fs-xl-5 text-center">查看<br class="d-xl-none d-lg-block">詳細食譜</p>
                  </RouterLink>
                  <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-2 m-md-3"  @click="()=>openDeleteModal(recipe.id, recipe)">
                      <img src="../../assets/images/image4.png" alt="收藏按鈕-未收藏">
                  </button>
                  <div v-for="mark in bookMarks" :key="mark + 4567">
                    <button v-if="mark === recipe.id" type="button" class="btn-buy border-0 bg-transparent m-2 m-md-3 p-0 position-absolute end-0 bottom-0"  @click="()=>deleteBookmark(recipe.id)">
                        <img src="../../assets/images/image4.png" alt="收藏按鈕-已收藏">
                    </button>
                  </div>
                  <RouterLink :to="`/recipes/${recipe.id}`" class="card-body px-0 text-decoration-none link-darkBrown">
                    <h3 class="fw-bold fs-md-5 fs-6">{{recipe.title}}</h3>
                    <div class="d-flex align-items-center flex-wrap fs-md-6 fs-12">
                      <del v-if="recipe.total" class="me-2 text-muted" :class="{'d-none': recipe.price === recipe.total}">NT$ {{ numberComma(recipe.total) }}</del>
                      <span class="me-1" :class="{'text-danger':recipe.price !== recipe.total, 'fw-bold':recipe.price !== recipe.total}">NT$ {{ numberComma(recipe.price) }}</span>
                      <span> / {{ recipe.content }}</span>
                      <span class="badge rounded-pill ms-auto border mt-1 mt-md-0" :class="{'border-primary': recipe.thumbs !== 0, 'border-gray':  recipe.thumbs === 0, 'text-primary':recipe.thumbs !== 0,'text-gray': recipe.thumbs === 0, 'bg-secondary':recipe.thumbs !== 0, 'bg-whiteGray':recipe.thumbs === 0}">
                        {{ recipe.thumbs }}
                        <i class="bi bi-hand-thumbs-up-fill" ></i>
                      </span>
                  </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <!-- 產品 -->
            <div v-else-if="pageStatus === 'product' && bookMarks && !isLoading" class="row row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-4">
              <div class="col" v-for="product in bookMarks" :key="product.id">
                <div class="card position-relative">
                  <div class="card-img-hover position-relative">
                    <RouterLink :to="`/products/${product.id}`">
                      <img :src="product.imgUrl" class="object-fit-cover card-img" :alt="product.title">
                      <p class="detail position-absolute top-50 start-50 translate-middle fw-bold letter-spacing-5 link-darkBrown fs-xl-5 text-center">查看<br class="d-xl-none d-lg-block">商品資訊</p>
                      <span v-if="product.isCheaper" class="fs-md-14 fs-12 text-white p-2 bg-primary position-absolute top-0 start-0">
                        {{ discount(product) }} 折
                      </span>
                    </RouterLink>
                    <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-2 m-md-3"  @click="()=>openDeleteModal(product.id, product)">
                      <img src="../../assets/images/image4.png" alt="收藏按鈕-未收藏">
                    </button>
                    <div v-for="mark in bookMarks" :key="mark">
                      <button v-if="mark === product.id" type="button" class="position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-2 m-md-3"  @click="()=>deleteBookmark(product.id)">
                          <img src="../../assets/images/image4.png" alt="收藏按鈕-已收藏">
                      </button>
                    </div>
                    <button :disabled="isLoading === 'loading'" @click="()=>addCart(product)" type="button" class="btn-buy border-0 bg-transparent m-2 m-md-3 p-0 position-absolute end-0 bottom-0" >
                      <img src="../../assets/images/icon-cart.png"  alt="購物車按鈕" class="shadow-sm">
                    </button>
                  </div>
                  <RouterLink :to="`/products/${product.id}`" class="card-body px-0 text-decoration-none link-darkBrown">
                <h3 class="fs-md-5 fs-6 fw-bold">{{product.title}}</h3>
                <div class="d-flex align-items-lg-center fs-md-6 fs-12">
                  <del class="me-2 text-muted" :class="{'d-none': !product.isCheaper}">NT$ {{ numberComma(product.originalPrice) }}</del>
                    <span class="me-1" :class="{'text-danger':product.isCheaper, 'fw-bold':product.isCheaper}">NT$ {{numberComma(product.price)}}</span>
                    <span> / {{ product.num }}{{ product.unit }}</span>

                    <span class="badge rounded-pill ms-auto border d-none d-md-block" :class="{'text-yellow': product.averageRate, 'border-yellow': product.averageRate, 'bg-lightYellow': product.averageRate, 'bg-whiteGray': !product.averageRate, 'text-gray': !product.averageRate, 'border-gray': !product.averageRate}">
                      {{ product.averageRate }}
                      <i class="bi bi-star-fill"></i>
                    </span>
                </div>
                <div class="text-end mt-1 d-md-none fs-12">
                  <span class="badge rounded-pill ms-auto border d-md-none" :class="{'text-yellow': product.averageRate, 'border-yellow': product.averageRate, 'bg-lightYellow': product.averageRate, 'bg-whiteGray': !product.averageRate, 'text-gray': !product.averageRate, 'border-gray': !product.averageRate}">
                    {{ product.averageRate }}
                    <i class="bi bi-star-fill"></i>
                  </span>
                </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <!-- 沒有書籤 -->
            <div v-if="!isLoading && !bookMarks" class="py-lg-4 text-center">
              <img src="../../assets/images/undraw_Appreciation_r2a1.png" class="mb-lg-3 mb-2 img-md-200-sm-150" alt="收藏大圖示" >
              <p class="fs-lg-3 fs-6 mb-lg-3 mb-2">您尚無任何<span v-if="pageStatus === 'recipe'">食譜</span><span v-else-if="pageStatus === 'product'">材料</span>收藏</p>
              <RouterLink to="/recipes" v-if="pageStatus === 'recipe'" class="link-primary fs-lg-5">前往瀏覽食譜</RouterLink>
              <RouterLink to="/products" v-else-if="pageStatus === 'product'" class="link-primary fs-lg-5">前往瀏覽食譜材料</RouterLink>
            </div>
          </div>
        </section>

        <DeleteBookmarksModal :id="deleteId" :item="deleteItem" :page-status="pageStatus" :open-delete-modal="openDeleteModal"></DeleteBookmarksModal>
    </div>
</template>
