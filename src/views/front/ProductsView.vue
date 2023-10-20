<script>
import { RouterLink } from 'vue-router'
import { mapActions, mapState, mapGetters } from 'pinia'
import cartStore from '../../stores/carts'
import markStore from '../../stores/bookmark'
import dataStore from '../../stores/mainData'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import PaginationComponent from '../../components/PaginationComponent.vue'
import Collapse from 'bootstrap/js/dist/collapse'
import { db } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
import { selections } from '../../utils/publicData'
import BannerComponent from '../../components/BannerComponent.vue'

export default {
  components: {
    RouterLink,
    PaginationComponent,
    Loading,
    BannerComponent
  },
  data () {
    return {
      selections,
      priceOrRateCollapse: {},
      highOrLowCollapse: {},
      products: [],
      priceOrRate: '價格',
      highOrLow: '不拘',
      productSearchName: '',
      filterProducts: [],
      pageStatus: '全部',
      selectPage: '全部',
      search: false,
      isLoading: false
    }
  },
  mixins: [numberCommaMixin],
  methods: {
    ...mapActions(cartStore, ['addCart', 'toastMessage']),
    ...mapActions(markStore, ['addBookmark', 'deleteBookmark', 'getBookmarks']),
    ...mapActions(dataStore, ['getProducts']),
    async getAllProducts () {
      this.products = await this.getProducts()
      const dataRef = ref(db, 'productRates/')
      onValue(dataRef, snapshot => {
        const rates = snapshot.val()

        this.products = this.products.map((item, index) => {
          this.products[index].scores = 0
          this.products[index].ratePeople = 0
          this.products[index].averageRate = 0
          return item
        })

        this.products.forEach((product, index) => {
          Object.values(rates).forEach(item => {
            if (product.id === item.productId && !this.products[index].scores) {
              this.products[index].scores = item.score
              this.products[index].ratePeople = 1
              this.products[index].averageRate = Number((this.products[index].scores / this.products[index].ratePeople).toFixed(1))
            } else if (product.id === item.productId && this.products[index].scores) {
              this.products[index].scores += item.score
              this.products[index].ratePeople += 1
              this.products[index].averageRate = Number((this.products[index].scores / this.products[index].ratePeople).toFixed(1))
            }
          })
        })
        this.products.forEach((product, index) => {
          if (!product.averageRate) {
            this.products[index].scores = 0
            this.products[index].ratePeople = 0
            this.products[index].averageRate = 0
          }
        })

        this.filterProducts = this.products
        if (!this.$route.query.pageStatus && this.$route.fullPath === '/products') {
          this.$refs.pagination.renderPage(1, this.filterProducts)
        } else if (this.$route.query.pageStatus) {
          this.searchProducts()
        }
        this.isLoading = false
      })
    },
    searchProducts () {
      if (this.pageStatus === '全部') {
        this.filterProducts = this.products
      } else if (this.pageStatus === '食材組合包') {
        this.filterProducts = this.products.filter(product => product.category === '組合包')
      } else if (this.pageStatus === '熱銷單品') {
        this.filterProducts = this.products.filter(product => product.category === '單一產品')
      } else if (this.pageStatus === '特價商品') {
        this.filterProducts = this.products.filter(product => product.isCheaper === true)
      }

      if (this.priceOrRate === '價格' && this.highOrLow !== '不拘') {
        if (this.highOrLow === '低到高') {
          this.filterProducts = this.filterProducts.sort((a, b) => {
            return a.price - b.price
          })
        } else if (this.highOrLow === '高到低') {
          this.filterProducts = this.filterProducts.sort((a, b) => {
            return b.price - a.price
          })
        }
      } else if (this.priceOrRate === '評價' && this.highOrLow !== '不拘') {
        if (this.highOrLow === '低到高') {
          this.filterProducts = this.filterProducts.sort((a, b) => {
            if (a.averageRate !== b.averageRate) {
              return a.averageRate - b.averageRate
            }
            return a.scores - b.scores
          })
        } else if (this.highOrLow === '高到低') {
          this.filterProducts = this.filterProducts.sort((a, b) => {
            if (a.averageRate !== b.averageRate) {
              return b.averageRate - a.averageRate
            }
            return b.scores - a.scores
          })
        }
      }
      this.filterProducts = this.filterProducts.filter(product => {
        return product.title.match(this.productSearchName)
      })
      this.search = true
      this.$refs.pagination.renderPage(1, this.filterProducts)
    }
  },
  mounted () {
    this.isLoading = true
    this.priceOrRateCollapse = new Collapse(this.$refs.priceOrRateCollapse, {
      toggle: false,
      parent: '#myGroup'
    })

    this.highOrLowCollapse = new Collapse(this.$refs.highOrLowCollapse, {
      toggle: false,
      parent: '#myGroup'
    })
    if (this.$route.query.pageStatus || this.$route.query.searchName || this.$route.query.valueHighOrLow || this.$route.query.valuePriceOrRate) {
      this.pageStatus = this.$route.query.pageStatus
      this.priceOrRate = this.$route.query.valuePriceOrRate
      this.highOrLow = this.$route.query.valueHighOrLow
      this.productSearchName = this.$route.query.searchName
    }
    this.getAllProducts()
    this.getBookmarks('productBookmarks')
  },
  watch: {
    selectPage () {
      this.pageStatus = this.selectPage
      this.productSearchName = ''

      if (this.pageStatus === '全部') {
        this.filterProducts = this.products
      } else if (this.pageStatus === '食材組合包') {
        this.filterProducts = this.products.filter(product => product.category === '組合包')
      } else if (this.pageStatus === '熱銷單品') {
        this.filterProducts = this.products.filter(product => product.category === '單一產品')
      } else if (this.pageStatus === '特價商品') {
        this.filterProducts = this.products.filter(product => product.isCheaper === true)
      }
      this.$refs.pagination.renderPage(1, this.filterProducts)
    },
    priceOrRate () {
      this.priceOrRateCollapse.hide()
    },
    highOrLow () {
      this.highOrLowCollapse.hide()
    },
    filterProducts () {
      this.priceOrRateCollapse.hide()
      this.highOrLowCollapse.hide()
    }
  },
  computed: {
    ...mapState(cartStore, ['loadingItem']),
    ...mapState(markStore, ['productBookmarks', 'uid']),
    ...mapGetters(dataStore, ['discount'])
  }
}
</script>
<template>
    <div>
        <loading v-model:active="isLoading"
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

      <section class="container" data-aos="fade-up">
        <div class="pt-lg-4 pt-3 position-relative">
          <ul class="category-selector row row-cols-4 list-unstyled border-bottom">
            <li v-for="item in selections.productCategory" :key="item.icon" class="col text-center" :class="{'pointer-events-none': pageStatus === item.title}">
              <a href="#"  @click.prevent="()=>selectPage = item.title" class="text-decoration-none d-inline-block" :class="{'fw-bold': pageStatus === item.title, 'link-primary': pageStatus === item.title}">
                <i v-if="pageStatus !== item.title" :class="item.icon" class="text-gray"></i>
                <i v-if="pageStatus === item.title" :class="item.iconSelected" class="text-primary"></i>
                <span class="fs-12 fs-md-5 d-block pb-2">{{ item.title === '全部' ? '所有' : item.title.slice(0, 2) }}<br class="d-lg-none">{{ item.title === '全部' ? '材料' : item.title.slice(2, 5) }}</span>
              </a>
            </li>
          </ul>
          <div class="blue-line bg-primary position-absolute" :class="{'active-all-ingredient': pageStatus === '全部', 'active-package': pageStatus === '食材組合包', 'active-hot': pageStatus === '熱銷單品', 'active-sale': pageStatus === '特價商品'}"></div>
        </div>

        <div class="d-none d-lg-block my-5">
          <div class="input-group">
            <a class="btn btn-outline-primary px-5" @click="()=> this.priceOrRateCollapse.toggle()">篩選對象 <i class="bi bi-caret-down-fill"></i><span class="ms-2 fw-bold">{{priceOrRate}}</span></a>
            <button class="btn btn-outline-primary px-5" type="button" @click="()=> this.highOrLowCollapse.toggle()">篩選值 <i class="bi bi-caret-down-fill"></i><span class="ms-2 fw-bold">{{highOrLow}}</span> </button>
            <input type="search" class="form-control border-primary border-end-0" placeholder="請輸入食材名稱" aria-label="Example text with two button addons" v-model="productSearchName" @keyup.enter="searchProducts">
            <button type="submit" class="btn border border-primary border-start-0 bg-transparent d-flex" @click.prevent="searchProducts">
              <span class="material-icons-outlined text-primary ">search</span>
            </button>
          </div>
          <div class="row g-0" id="myGroup">
            <div class="col-2">
              <div ref="priceOrRateCollapse" class="collapse">
                <div class="card card-body">
                  <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                    <input type="radio" class="btn-check" value="價格" name="priceOrRate" id="selectprice" autocomplete="off"  v-model="priceOrRate">
                    <label class="btn btn-outline-primary " for="selectprice">價格</label>
                    <input type="radio" class="btn-check"  value="評價" name="priceOrRate" id="selectRate" autocomplete="off" v-model="priceOrRate">
                    <label class="btn btn-outline-primary " for="selectRate">評價</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-2">
              <div ref="highOrLowCollapse" class="collapse">
                <div class="card card-body">
                  <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                    <input type="radio" class="btn-check" value="不拘" name="highOrLow" id="noDifference" autocomplete="off" checked="" v-model="highOrLow">
                    <label class="btn btn-outline-primary" for="noDifference">不拘</label>
                    <input type="radio" class="btn-check" value="高到低" name="highOrLow" id="highToLow" autocomplete="off" v-model="highOrLow">
                    <label class="btn btn-outline-primary" for="highToLow">高到低</label>
                    <input type="radio" class="btn-check" value="低到高" name="highOrLow" id="lowToHigh" autocomplete="off" v-model="highOrLow">
                    <label class="btn btn-outline-primary" for="lowToHigh">低到高</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="filterProducts.length && !isLoading" class="row row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-4">
          <div class="col" v-for="product in this.$refs.pagination.pageProducts" :key="product.id">
            <div class="card position-relative">
              <div class="card-img-hover position-relative">
                <RouterLink :to="`/products/${product.id}`">
                  <img :src="product.imgUrl" class="object-fit-cover card-img" :alt="product.title">
                  <p class="detail position-absolute top-50 start-50 translate-middle fw-bold letter-spacing-5 link-darkBrown fs-xl-5 text-center">查看<br class="d-xl-none d-lg-block">商品資訊</p>
                  <span v-if="product.isCheaper" class="fs-md-14 fs-12 text-white p-2 bg-primary position-absolute top-0 start-0">
                  {{ discount(product) }} 折
                </span>
                </RouterLink>
                <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-2 m-md-3" @click="()=>addBookmark('productBookmarks' ,product, uid)">
                  <img src="../../assets/images/image5.png" alt="收藏按鈕-未收藏">
                </button>
                <div v-for="mark in productBookmarks" :key="mark">
                  <button v-if="mark === product.id" type="button" class="position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-2 m-md-3"  @click="()=>deleteBookmark('productBookmarks', product.id, uid)">
                      <img src="../../assets/images/image4.png" alt="收藏按鈕-已收藏">
                  </button>
                </div>
                <button :disabled="loadingItem === 'loading'" @click="()=>addCart(product)" type="button" class="btn-buy border-0 bg-transparent m-2 m-md-3 p-0 position-absolute end-0 bottom-0">
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

        <div v-else-if="!filterProducts.length && search && !isLoading" class="py-lg-4 text-center">
          <img src="../../assets/images/undraw_Page_not_found_re_e9o6.png" class="mb-lg-3 mb-2 img-md-200-sm-150" alt="查無資訊">
          <p class="fs-lg-3 fs-6">查無商品，請您重新查詢</p>
        </div>

        <PaginationComponent ref="pagination" :price-or-rate="priceOrRate" :filter-products="filterProducts"  class="mb-5"></PaginationComponent>
      </section>

    </div>
</template>
