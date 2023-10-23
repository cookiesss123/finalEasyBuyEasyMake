<script>
import loadingStore from '../../stores/loadingStore'

import { RouterLink } from 'vue-router'
import DeleteBookmarksModal from '../../components/DeleteBookmarksModal.vue'
import numberCommaMixin from '../../mixins/numberCommaMixin'
// mapState
import { mapActions, mapState, mapGetters } from 'pinia'
import cartStore from '../../stores/carts'
import dataStore from '../../stores/mainData'
import markStore from '../../stores/bookmark'
import { selections } from '../../utils/publicData'
import BannerComponent from '../../components/BannerComponent.vue'
export default {
  components: {
    RouterLink,
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
      recipeThumbs: []
    }
  },
  methods: {
    ...mapActions(loadingStore, ['startLoading']),
    ...mapActions(cartStore, ['addCart', 'toastMessage', 'goToTop']),
    ...mapActions(markStore, ['getBookmarks']),
    ...mapActions(dataStore, ['getThumbs', 'getRates']),

    openDeleteModal (id, item) {
      this.deleteId = id
      this.deleteItem = item
    }
  },
  mounted () {
    this.startLoading()
    this.goToTop()
    this.getBookmarks('recipeBookmarks')
    this.getBookmarks('productBookmarks')
    this.getThumbs()
    this.getRates()
  },
  watch: {
    recipeBookmarks () {
      // if (this.recipeBookmarks) {
      // }
    }
  },
  computed: {
    ...mapGetters(dataStore, ['discount']),
    ...mapState(markStore, ['recipeBookmarks', 'productBookmarks']),
    ...mapState(dataStore, ['thumbs', 'rates'])
  }
}
</script>
<template>
    <div class="no-scroll-x">
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
            <div v-if="pageStatus === 'recipe'" class="row row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-4">
              <div class="col" v-for="(recipe, id) in recipeBookmarks" :key="recipe.id">
                <div class="card position-relative">
                  <RouterLink :to="`/recipes/${recipe.id}`" class="card-img-hover position-relative">
                    <img :src="recipe.image" class="object-fit-cover card-img" :alt="recipe.title">
                    <span class="badge rounded-pill bg-primary position-absolute start-0 bottom-0 m-3">{{ recipe.category }}</span>
                    <p class="detail position-absolute top-50 start-50 translate-middle fw-bold letter-spacing-5 link-darkBrown fs-xl-5 text-center">查看<br class="d-xl-none d-lg-block">詳細食譜</p>
                  </RouterLink>
                  <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-2 m-md-3"  @click="()=>openDeleteModal(recipe.id, recipe)">
                      <img src="../../assets/images/image4.png" alt="收藏按鈕-已收藏">
                  </button>
                  <RouterLink :to="`/recipes/${recipe.id}`" class="card-body px-0 text-decoration-none link-darkBrown">
                    <h3 class="fw-bold fs-md-5 fs-6">{{recipe.title}}</h3>
                    <div class="d-flex align-items-center flex-wrap fs-md-6 fs-12">
                      <del v-if="recipe.total" class="me-2 text-muted" :class="{'d-none': recipe.price === recipe.total}">NT$ {{ numberComma(recipe.total) }}</del>
                      <span class="me-1" :class="{'text-danger':recipe.price !== recipe.total, 'fw-bold':recipe.price !== recipe.total}">NT$ {{ numberComma(recipe.price) }}</span>
                      <span> / {{ recipe.content }}</span>
                      <span v-if="thumbs[id]" class="badge rounded-pill ms-auto border mt-1 mt-md-0" :class="{'border-primary': thumbs[id].thumbs !== 0, 'border-gray':  thumbs[id].thumbs === 0, 'text-primary':thumbs[id].thumbs !== 0,'text-gray': thumbs[id].thumbs === 0, 'bg-secondary':thumbs[id].thumbs !== 0, 'bg-whiteGray':thumbs[id].thumbs === 0}">
                        {{ thumbs[id].thumbs }}
                        <i class="bi bi-hand-thumbs-up-fill" ></i>
                      </span>
                       <span v-else-if="!thumbs[id]" class="badge rounded-pill ms-auto border mt-1 mt-md-0 border-gray bg-whiteGray text-gray">
                        0
                        <i class="bi bi-hand-thumbs-up-fill" ></i>
                      </span>
                  </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <!-- 產品 -->
            <div v-else-if="pageStatus === 'product'" class="row row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-4">
              <div class="col" v-for="(product, id) in productBookmarks" :key="product.id">
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
                    <button @click="()=>addCart(product)" type="button" class="btn-buy border-0 bg-transparent m-2 m-md-3 p-0 position-absolute end-0 bottom-0" >
                      <img src="../../assets/images/icon-cart.png"  alt="購物車按鈕" class="shadow-sm">
                    </button>
                  </div>
                  <RouterLink :to="`/products/${product.id}`" class="card-body px-0 text-decoration-none link-darkBrown">
                <h3 class="fs-md-5 fs-6 fw-bold">{{product.title}}</h3>
                <div class="d-flex align-items-lg-center fs-md-6 fs-12">
                  <del class="me-2 text-muted" :class="{'d-none': !product.isCheaper}">NT$ {{ numberComma(product.originalPrice) }}</del>
                    <span class="me-1" :class="{'text-danger':product.isCheaper, 'fw-bold':product.isCheaper}">NT$ {{numberComma(product.price)}}</span>
                    <span> / {{ product.num }}{{ product.unit }}</span>

                    <span v-if="rates[id]" class="badge rounded-pill ms-auto border d-none d-md-block" :class="{'text-yellow': rates[id].averageRate, 'border-yellow': rates[id].averageRate, 'bg-lightYellow': rates[id].averageRate, 'bg-whiteGray': !rates[id].averageRate, 'text-gray': !rates[id].averageRate, 'border-gray': !rates[id].averageRate}">
                      {{ rates[id].averageRate }}
                      <i class="bi bi-star-fill"></i>
                    </span>
                    <span v-else-if="!rates[id]" class="badge rounded-pill ms-auto border d-none d-md-block bg-whiteGray text-gray border-gray">
                      0
                      <i class="bi bi-star-fill"></i>
                    </span>
                </div>
                <div class="text-end mt-1 d-md-none fs-12">
                  <span v-if="rates[id]" class="badge rounded-pill ms-auto border d-md-none" :class="{'text-yellow': rates[id].averageRate, 'border-yellow': rates[id].averageRate, 'bg-lightYellow': rates[id].averageRate, 'bg-whiteGray': !rates[id].averageRate, 'text-gray': !rates[id].averageRate, 'border-gray': !rates[id].averageRate}">
                    {{ rates[id].averageRate }}
                    <i class="bi bi-star-fill"></i>
                  </span>
                  <span v-else-if="!rates[id]" class="badge rounded-pill ms-auto border d-md-none bg-whiteGray text-gray border-gray">
                    0
                    <i class="bi bi-star-fill"></i>
                  </span>
                </div>
                  </RouterLink>
                </div>
              </div>
            </div>
            <!-- 沒有書籤 -->
            <div v-if="!recipeBookmarks && pageStatus === 'recipe'" class="py-lg-4 text-center">
              <img src="../../assets/images/undraw_Appreciation_r2a1.png" class="mb-lg-3 mb-2 img-md-200-sm-150" alt="收藏大圖示" >
              <p class="fs-lg-3 fs-6 mb-lg-3 mb-2">您尚無任何食譜收藏</p>
              <RouterLink to="/recipes" class="link-primary fs-lg-5">前往瀏覽食譜</RouterLink>
            </div>
            <div v-else-if="!productBookmarks && pageStatus === 'product'" class="py-lg-4 text-center">
              <img src="../../assets/images/undraw_Appreciation_r2a1.png" class="mb-lg-3 mb-2 img-md-200-sm-150" alt="收藏大圖示" >
              <p class="fs-lg-3 fs-6 mb-lg-3 mb-2">您尚無任何材料收藏</p>
              <RouterLink to="/products" class="link-primary fs-lg-5">前往瀏覽食譜材料</RouterLink>
            </div>
          </div>
        </section>

        <DeleteBookmarksModal :id="deleteId" :item="deleteItem" :page-status="pageStatus" :open-delete-modal="openDeleteModal"></DeleteBookmarksModal>
    </div>
</template>
