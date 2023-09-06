<script>
import { RouterLink } from 'vue-router'
import { mapActions, mapState } from 'pinia'
import cartStore from '../../stores/carts'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import PaginationComponent from '../../components/PaginationComponent.vue'
import Collapse from 'bootstrap/js/dist/collapse'
import { db, auth } from '../../firebase/db'
import { ref, onValue, set, remove } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import LoadingComponent from '../../components/LoadingComponent.vue'

// import Loading from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/css/index.css'
export default {
  components: {
    RouterLink,
    PaginationComponent,
    // Loading
    LoadingComponent
  },
  data () {
    return {
      // 控制搜尋收合
      priceOrRateCollapse: {},
      highOrLowCollapse: {},
      user: {},
      uid: '',
      products: [],
      priceOrRate: '價格',
      highOrLow: '不拘',
      productSearchName: '',
      filterProducts: [],
      bookMarks: [],
      pageStatus: '全部',
      selectPage: '全部',
      search: false,
      isLoading: false
      // fullPage: true
    }
  },
  mixins: [numberCommaMixin],
  methods: {
    ...mapActions(cartStore, ['addCart', 'toastMessage']),
    getProducts () {
      const dataRef = ref(db, 'products/')
      onValue(dataRef, snapshot => {
        this.products = snapshot.val()
        this.products = Object.entries(this.products).map(item => {
          item[1].id = item[0]
          return item[1]
        })

        // 得到星星評價數
        const dataRef = ref(db, 'productRates/')
        onValue(dataRef, snapshot => {
        // 先取得所有留言
          let rates = snapshot.val()
          rates = Object.values(rates).map((rate, index) => {
            rate.id = Object.keys(rates)[index]
            return rate
          })
          this.products.forEach((product, index) => {
            rates.forEach(item => {
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
          this.isLoading = false

          if (!this.$route.query.pageStatus && this.$route.fullPath === '/products') { // 未傳值再渲染
            this.$refs.pagination.renderPage(1, this.filterProducts)
          } else if (this.$route.query.pageStatus) { // 有外部傳值再搜索
            this.searchProducts()
          }
        })
      })
    },
    // 要加入分類頁面的
    searchProducts () {
      // 先排序種類
      if (this.pageStatus === '全部') {
        this.filterProducts = this.products
      } else if (this.pageStatus === '食材組合包') {
        this.filterProducts = this.products.filter(product => product.category === '組合包')
      } else if (this.pageStatus === '熱銷單品') {
        this.filterProducts = this.products.filter(product => product.category === '單一產品')
      } else if (this.pageStatus === '特價商品') {
        this.filterProducts = this.products.filter(product => product.isCheaper === true)
      }

      // 再排序其他篩選值
      if (this.priceOrRate === '價格' && this.highOrLow !== '不拘') {
        // 判斷頁尾用
        if (this.highOrLow === '低到高') {
          this.filterProducts = this.filterProducts.sort((a, b) => {
            return a.price - b.price
          })
        } else if (this.highOrLow === '高到低') {
          this.filterProducts = this.filterProducts.sort((a, b) => {
            return b.price - a.price
          })
        }
      } else if (this.priceOrRate === '評價' && this.highOrLow !== '不拘') { // 讚最多的
        if (this.highOrLow === '低到高') {
          this.filterProducts = this.filterProducts.sort((a, b) => {
            if (a.averageRate !== b.averageRate) { // 如果 averageRate 不相等就用 scores
              return a.averageRate - b.averageRate
            }
            return a.scores - b.scores
          })
        } else if (this.highOrLow === '高到低') {
          this.filterProducts = this.filterProducts.sort((a, b) => {
            if (a.averageRate !== b.averageRate) { // 如果 averageRate 不相等就用 scores
              return b.averageRate - a.averageRate
            }
            return b.scores - a.scores
          })
        }
      }
      // 如果不拘直接搜尋
      this.filterProducts = this.filterProducts.filter(product => {
        return product.title.match(this.productSearchName)
      })
      // 搜尋了 用來判斷搜尋無值的狀況
      this.search = true
      this.$refs.pagination.renderPage(1, this.filterProducts)
    },
    // 取得個別使用者收藏 - 產品
    getBookmarks () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            const dataRef = ref(db, `productBookmarks/${this.uid}`)
            onValue(dataRef, snapshot => {
              this.bookMarks = snapshot.val()
              if (this.bookMarks) {
                this.bookMarks = Object.keys(this.bookMarks)
              }
            })
          })
        } else {
          this.uid = null
          this.user = {}
        }
      })
    },
    // 增加食譜收藏
    addBookmark (product) {
      if (!this.uid) {
        this.toastMessage('登入才可使用收藏功能', 'error')
        return
      }
      const reference = ref(db, `productBookmarks/${this.uid}/${product.id}`)
      set(reference, product)
      this.toastMessage('收藏成功')
    },
    // 刪除食譜收藏
    deleteBookmark (id) {
      remove(ref(db, `productBookmarks/${this.uid}/${id}`))
      this.toastMessage('刪除收藏')
    }
  },
  mounted () {
    this.isLoading = true
    // this.showLoading()
    // 先關閉
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
    this.getProducts()
    this.getBookmarks()
  },
  watch: {
    selectPage () {
      this.pageStatus = this.selectPage
      // 換頁把搜尋欄位清除
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
    // 選完收合
    priceOrRate () {
      this.priceOrRateCollapse.hide()
    },
    // 選完收合
    highOrLow () {
      this.highOrLowCollapse.hide()
    },
    // 搜完 全部關閉
    filterProducts () {
      this.priceOrRateCollapse.hide()
      this.highOrLowCollapse.hide()
    }
  },
  computed: {
    ...mapState(cartStore, ['loadingItem'])
  }
}
</script>
<template>
    <div data-aos="fade-up">
      <LoadingComponent :is-loading="isLoading"></LoadingComponent>
        <!-- <loading v-model:active="isLoading"
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
        </loading> -->

      <section class="text-center">
        <div class="py-lg-200 py-96 bg-img-fixed" style="background-image: url('https://images.unsplash.com/photo-1678465952860-422bf820209b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');"></div>
        <h2 class="text-purple mb-0  fs-lg-1 fs-5 letter-spacing-20 fw-bold bg-secondary-lightPurple py-2">材料種類</h2>
      </section>

      <section class="container">
        <div class="pt-lg-4 pt-3 position-relative">
          <ul class="category-selector row row-cols-4 list-unstyled border-bottom">
            <li class="col text-center" :class="{'pointer-events-none': pageStatus === '全部'}">
              <a href="#"  @click.prevent="()=>selectPage = '全部'" class="text-decoration-none d-inline-block" :class="{'fw-bold': pageStatus === '全部', 'link-primary': pageStatus === '全部'}">
                <img class="product-img1 d-block mx-auto" v-if="pageStatus !== '全部'" src="../../assets/images/fruit1.png" alt="所有材料灰色圖示">
                <img class="d-block mx-auto" v-else-if="pageStatus === '全部'" src="../../assets/images/fruit3.png"  alt="所有材料藍色圖示">
                <span class="fs-12 fs-md-5 d-block py-2 " >所有<br class="d-lg-none">材料</span>
              </a>
            </li>
            <li class="col text-center " :class="{'pointer-events-none': pageStatus === '食材組合包'}">
              <a href="#"  @click.prevent="()=>selectPage = '食材組合包'" class="text-decoration-none d-inline-block" :class="{'fw-bold': pageStatus === '食材組合包', 'link-primary': pageStatus === '食材組合包'}">
                <img class="product-img2 d-block mx-auto" v-if="pageStatus !== '食材組合包'" src="../../assets/images/food1.png"  alt="">
                <img class="d-block mx-auto" v-else-if="pageStatus === '食材組合包'" src="../../assets/images/food3.png"  alt="">
                <span class="fs-12 fs-md-5 d-block py-2 " >食材<br class="d-lg-none">組合包</span>
              </a>
            </li>
            <li class="col text-center" :class="{'pointer-events-none': pageStatus === '熱銷單品'}">
              <a href="#"  @click.prevent="()=>selectPage = '熱銷單品'" class="text-decoration-none d-inline-block" :class="{'fw-bold': pageStatus === '熱銷單品', 'link-primary': pageStatus === '熱銷單品'}">
                <img class="product-img3 d-block mx-auto" v-if="pageStatus !== '熱銷單品'" src="../../assets/images/strawberry1.png"  alt="">
                <img class="d-block mx-auto" v-else-if="pageStatus === '熱銷單品'" src="../../assets/images/strawberry3.png"  alt="">
                <span  class="fs-12 fs-md-5 d-block py-2">熱銷<br class="d-lg-none">單品</span>
              </a>
            </li>
            <li class="col text-center" :class="{'pointer-events-none': pageStatus === '特價商品'}">
              <a href="#"  @click.prevent="()=>selectPage = '特價商品'" class="text-decoration-none d-inline-block" :class="{'fw-bold': pageStatus === '特價商品', 'link-primary': pageStatus === '特價商品'}">
                <img class="product-img4 d-block mx-auto" v-if="pageStatus !== '特價商品'" src="../../assets/images/discount1.png"  alt="">
                <img class="d-block mx-auto" v-else-if="pageStatus === '特價商品'" src="../../assets/images/discount3.png"  alt="">
                <span  class="fs-12 fs-md-5 d-block py-2">特價<br class="d-lg-none">商品</span>
              </a>
            </li>
          </ul>
          <div class="blue-line bg-primary position-absolute" :class="{'active-all-ingredient': pageStatus === '全部', 'active-package': pageStatus === '食材組合包', 'active-hot': pageStatus === '熱銷單品', 'active-sale': pageStatus === '特價商品'}"></div>

        </div>

        <!-- 搜尋 -->
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
                <div class="card card-body border-0" style="border: 0px !important;">
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
                <div class="card card-body border-0" style="border: 0px !important;">
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
                  {{ (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))) % 10 === 0 ? (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))).toString().charAt(0) : 100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)) }} 折
                </span>
                </RouterLink>
                <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-2 m-md-3" @click="()=>addBookmark(product)">
                  <img src="../../assets/images/image5.png" alt="收藏按鈕-未收藏">
                </button>
                <div v-for="mark in bookMarks" :key="mark">
                  <button v-if="mark === product.id" type="button" class="position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-2 m-md-3"  @click="()=>deleteBookmark(product.id)">
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

        <!-- 查無產品 -->
        <div v-else-if="!filterProducts.length && search && !isLoading" class="py-lg-4 text-center">
          <img src="../../assets/images/undraw_Page_not_found_re_e9o6.png" class="mb-lg-3 mb-2 img-md-200-sm-150" alt="查無資訊">
          <p class="fs-lg-3 fs-6">查無商品，請您重新查詢</p>
        </div>

        <!-- 頁尾 -->
        <PaginationComponent ref="pagination" :price-or-rate="priceOrRate" :filter-products="filterProducts"  class="mb-5"></PaginationComponent>
      </section>

    </div>
</template>
