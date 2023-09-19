<script>
import { RouterLink } from 'vue-router'
import DeleteBookmarksModal from '../../components/DeleteBookmarksModal.vue'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import { db, auth } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
export default {
  components: {
    RouterLink,
    Loading,
    DeleteBookmarksModal
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      uid: '',
      bookMarks: [],
      pageStatus: 'recipe',
      deleteId: '',
      deleteItem: {}, // 刪除資料
      averageRate: [],
      rates: {},
      recipeThumbs: [],
      thumbs: {},

      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    ...mapActions(cartStore, ['addCart', 'toastMessage']),
    // 取得個別使用者收藏 - 食譜、產品、文章(還沒)
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

            // 得到食譜讚數
            if (this.pageStatus === 'recipe') {
              const dataRef = ref(db, 'recipeThumbs')
              onValue(dataRef, snapshot => {
                const recipeThumbs = snapshot.val()
                Object.keys(recipeThumbs).forEach(item => {
                  this.thumbs[item] = recipeThumbs[item].thumbs
                })

                // 把讚數填入
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
            } else if (this.pageStatus === 'product') { // 得到產品評價
              // 得到星星評價數
              const dataRef = ref(db, 'productRates/')
              onValue(dataRef, snapshot => {
                // 先取得所有留言
                const allRates = Object.values(snapshot.val())
                console.log(allRates, '評價')
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
    // 打開刪除收藏確認
    openDeleteModal (id, item) {
      this.deleteId = id
      this.deleteItem = item
    }
  },
  mounted () {
    window.scrollTo(0, 0)

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
  }
}
</script>
<template>
    <div class="no-scroll-x">
        <loading v-if="uid" v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"
                 :lock-scroll="true">
                 <div class="d-flex flex-column align-items-center py-96">
      <img src="../../assets/images/loadingLogo.png" class="loadingLogo mb-3" style="width: 150px;" alt="" >
      <p class="text-center fw-bold text-primary h2">
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
        <section class="text-center">
          <div class="py-lg-200 py-96 bg-img-fixed" style="background-image: url('https://images.unsplash.com/photo-1678465952996-e4b010264a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80');"></div>
          <h2 class="text-purple mb-0  fs-lg-1 fs-5 letter-spacing-20 fw-bold bg-secondary-lightPurple py-2">我的收藏</h2>
        </section>

        <section class="container py-5">
          <div class="pt-lg-4 pt-3 position-relative">
            <ul class="category-selector row row-cols-2 list-unstyled border-bottom">
              <li class="col text-center" :class="{'pointer-events-none': pageStatus === 'recipe'}">
                <a href="#"  @click.prevent="()=>pageStatus = 'recipe'" class="text-decoration-none d-inline-block" :class="{'fw-bold': pageStatus === 'recipe', 'link-primary': pageStatus === 'recipe'}">
                  <img class="bookmark-img1 d-block mx-auto" v-if="pageStatus !== 'recipe'" src="../../assets/images/book1.png"  alt="食譜收藏灰色圖示">
                  <img v-else-if="pageStatus === 'recipe'" src="../../assets/images/book3.png" class="d-block mx-auto" alt="食譜收藏藍色圖示">
                  <span class="fs-12 fs-md-5 d-block py-2">食譜收藏</span>
                </a>
              </li>
              <li class="col text-center" :class="{'pointer-events-none': pageStatus === 'product'}">
                <a href="#"  @click.prevent="()=>pageStatus = 'product'" class="text-decoration-none d-inline-block" :class="{'fw-bold': pageStatus === 'product', 'link-primary': pageStatus === 'product'}">
                  <img class="bookmark-img2 d-block mx-auto" v-if="pageStatus !== 'product'" src="../../assets/images/fruit1.png"  alt="材料收藏灰色圖示">
                  <img v-else-if="pageStatus === 'product'" src="../../assets/images/fruit3.png" class="d-block mx-auto" alt="材料收藏藍色圖示">
                  <span class="fs-12 fs-md-5 d-block py-2">材料收藏</span>
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
                        {{ (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))) % 10 === 0 ? (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))).toString().charAt(0) : 100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)) }} 折
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
