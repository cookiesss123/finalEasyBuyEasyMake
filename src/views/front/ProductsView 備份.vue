<script>
import { RouterLink } from 'vue-router'
import { mapActions, mapState } from 'pinia'
import cartStore from '../../stores/carts'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import PaginationComponent from '../../components/PaginationComponent.vue'
import LoadingModal from '../../components/LoadingModal.vue'
import Collapse from 'bootstrap/js/dist/collapse'
import { db, auth } from '../../firebase/db'
import { ref, onValue, set, remove } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
export default {
  components: {
    RouterLink,
    PaginationComponent,
    LoadingModal
  },
  data () {
    return {
      // 控制搜尋收合
      priceOrRateCollapse: {},
      highOrLowCollapse: {},

      products: [],
      priceOrRate: '價格',
      highOrLow: '不拘',
      productSearchName: '',
      filterProducts: [],
      myCollapse: {},
      bookMarks: [],
      recipes: [],
      pageStatus: '全部', // 頁面切到哪頁了?
      selectPage: '全部',
      search: false, // 在搜尋嗎? 用來判斷搜尋無值的狀況
      uid: ''
    }
  },
  mixins: [numberCommaMixin],
  methods: {
    ...mapActions(cartStore, ['addCart', 'toastMessage']),
    getProducts () {
      // 1. const dataRef = ref(db, 'users/') 取得 users 項下所有資料
      // 2. 取得 user s的特定子分支資料
      const dataRef = ref(db, 'products/')
      onValue(dataRef, snapshot => {
        this.products = snapshot.val()
        // 把物件轉成陣列 並填入id
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
          console.log(rates, this.products, '全部產品的評價還未分類產品')
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
          console.log(this.products, '加了評分的產品')
        })

        this.filterProducts = this.products
        if (!this.$route.query.pageStatus && this.$route.fullPath === '/products') { // 未傳值再渲染
          // 從單頁按讚後這裡會出現錯誤警告 因為觸發了最上方的得到讚 this.$route.fullPath === '/recipes' 用這個在食譜單頁就不會觸發了
          this.$refs.pagination.renderPage(1, this.filterProducts)
        } else if (this.$route.query.pageStatus) { // 有外部傳值再搜索
          this.searchProducts()
        }
        // })
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
      console.log(this.filterProducts, '是什麼???')
      // 搜尋了 用來判斷搜尋無值的狀況
      this.search = true
      this.$refs.pagination.renderPage(1, this.filterProducts)
    },
    // 取得個別使用者收藏 - 產品
    getBookmarks () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          console.log(this.uid, '使用者已登入取得 uid')

          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            console.log(this.user, '讀取的資料')
            if (this.user.admin) {
              console.log('管理者登場')
            }
            const dataRef = ref(db, `productBookmarks/${this.uid}`)
            onValue(dataRef, snapshot => {
              this.bookMarks = snapshot.val()
              if (this.bookMarks) {
                this.bookMarks = Object.keys(this.bookMarks)
              }
              console.log(this.bookMarks, '書籤')
            })
          })
        } else {
          // User is signed out
          // ...
          console.log('並未登入')
          this.uid = null
          this.user = {}
        }
      })
    },
    // 增加食譜收藏
    addBookmark (product) {
      if (!this.uid) {
        this.toastMessage('登入才可使用收藏功能', 'error')
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
    // 先關閉
    // this.$refs.loadingModal.show()
    this.getProducts()
    this.getBookmarks()
    this.priceOrRateCollapse = new Collapse(this.$refs.priceOrRateCollapse, {
      toggle: false,
      parent: '#myGroup'
    })

    this.highOrLowCollapse = new Collapse(this.$refs.highOrLowCollapse, {
      toggle: false,
      parent: '#myGroup'
    })

    // 加了這個頁碼會不見 為何??? 因為沒使用變成 undefined 了 避免沒值
    if (this.$route.query.pageStatus || this.$route.query.searchName || this.$route.query.valueHighOrLow || this.$route.query.valuePriceOrRate) {
      this.pageStatus = this.$route.query.pageStatus
      this.priceOrRate = this.$route.query.valuePriceOrRate
      this.highOrLow = this.$route.query.valueHighOrLow
      this.productSearchName = this.$route.query.searchName
      console.log('存入了', this.pageStatus, this.priceOrRate, this.highOrLow, this.productSearchName)
    }
  },
  watch: {
    selectPage () {
      // loading pageStatus 外部傳入  selectPage 點擊
      this.pageStatus = this.selectPage
      // 先不改
      // this.priceOrRate = '價格'
      // this.highOrLow = '不拘'

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
    <div class="my-10">
      <LoadingModal ref="loadingModal" style="z-index: 2001;"></LoadingModal>

      <ul class="nav nav-tabs container d-flex justify-content-center justify-content-lg-start" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link px-1 px-lg-3" :class="{'active': pageStatus === '全部'}"  id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true" @click="()=>selectPage = '全部'">全部</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link px-1 px-lg-3" :class="{'active': pageStatus === '食材組合包'}" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" @click="()=>selectPage = '食材組合包'"><i class="bi bi-bag-check-fill"></i> 食材組合包</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link px-1 px-lg-3" :class="{'active': pageStatus === '熱銷單品'}" id="popularProducts-tab" data-bs-toggle="tab" data-bs-target="#popularProducts" type="button" role="tab" aria-controls="popularProducts" aria-selected="false" @click="()=>selectPage = '熱銷單品'"><i class="bi bi-fire"></i> 熱銷單品</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link px-1 px-lg-3" :class="{'active': pageStatus === '特價商品'}" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false" @click="()=>selectPage = '特價商品'"><i class="bi bi-percent "></i> 特價商品</button>
        </li>
      </ul>
      <!-- 搜尋 -->
      <div class="d-none d-lg-block container selectProduct pt-4">
        <div class="input-group">
          <a class="btn btn-outline-red px-5" @click="()=> this.priceOrRateCollapse.toggle()">篩選對象 <i class="bi bi-caret-down-fill"></i><span class="ms-2 fw-bold">{{priceOrRate}}</span></a>
          <button class="btn btn-outline-red px-5" type="button" @click="()=> this.highOrLowCollapse.toggle()">篩選值 <i class="bi bi-caret-down-fill"></i><span class="ms-2 fw-bold">{{highOrLow}}</span> </button>
          <input type="search" class="form-control border-red border-end-0" placeholder="請輸入食材名稱" aria-label="Example text with two button addons" v-model="productSearchName" @keyup.enter="searchProducts">
          <button type="submit" class="btn border border-red border-start-0 bg-transparent" @click.prevent="searchProducts">
            <img src="../../assets/images/icon-searchMobile.png" style="height: 25px;" alt="">
          </button>
        </div>
        <!-- 參考： https://stackoverflow.com/questions/72345809/only-show-one-collapse-open-vue-3-bootstrap-5 -->
        <!-- 控制折疊開啟一個 另一個就關閉  在最外層加上 id="myGroup" 摺疊分別加上 data-bs-parent="#myGroup" -->
        <div class="row g-0" id="myGroup">
          <div class="col-2">
            <div ref="priceOrRateCollapse" class="collapse">
              <div class="card card-body border-0">
                <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                  <input type="radio" class="btn-check" value="價格" name="priceOrRate" id="selectprice" autocomplete="off"  v-model="priceOrRate">
                  <label class="btn btn-outline-red " for="selectprice">價格</label>
                  <input type="radio" class="btn-check"  value="評價" name="priceOrRate" id="selectRate" autocomplete="off" v-model="priceOrRate">
                  <label class="btn btn-outline-red " for="selectRate">評價</label>
                </div>
              </div>
            </div>
          </div>
          <div class="col-2">
            <div ref="highOrLowCollapse" class="collapse">
              <div class="card card-body border-0">
                <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                  <input type="radio" class="btn-check" value="不拘" name="highOrLow" id="noDifference" autocomplete="off" checked="" v-model="highOrLow">
                  <label class="btn btn-outline-red" for="noDifference">不拘</label>
                  <input type="radio" class="btn-check" value="高到低" name="highOrLow" id="highToLow" autocomplete="off" v-model="highOrLow">
                  <label class="btn btn-outline-red" for="highToLow">高到低</label>
                  <input type="radio" class="btn-check" value="低到高" name="highOrLow" id="lowToHigh" autocomplete="off" v-model="highOrLow">
                  <label class="btn btn-outline-red" for="lowToHigh">低到高</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 產品畫面 -->
      <div class="container mt-4">
        <div v-if="filterProducts.length" class="row row-cols-lg-4 row-cols-1 gy-4">
          <div class="col text-decoration-none" v-for="product in this.$refs.pagination.pageProducts" :key="product.id">
            <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px;">
              <div class=" cardImg" style="border-radius: 20px;">
                <RouterLink :to="`/products/${product.id}`" class="enlargeImg">
                  <img :src="product.imgUrl" class="card-img" height="220" style="border-radius: 20px; object-fit: cover;  max-width: 100%; max-height: 100%;" alt="">
                </RouterLink>
              </div>
              <h5 class="card-text">
                <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent end-0 top-0 m-3" @click="()=>addBookmark(product)">
                  <img src="../../assets/images/image5.png">
                </button>
                <span v-if="product.isCheaper" style="pointer-events: none; font-size: 14px;" class="d-flex flex-column align-items-center text-white p-2 bg-red border me-3 position-absolute top-0 start-0 m-3 rounded">
                  {{ (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))) % 10 === 0 ? (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))).toString().charAt(0) : 100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)) }} 折
                </span>
                <!-- 先轉成 string 再取得字串第一個字元 .charAt(0) -->
                <div v-for="mark in bookMarks" :key="mark">
                  <button v-if="mark === product.id" type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-3"  @click="()=>deleteBookmark(product.id)">
                      <img src="../../assets/images/image4.png">
                  </button>
                </div>
                <button :disabled="loadingItem === 'loading'" @click="()=>addCart(product)" type="button" class="buyBtn border-0 bg-transparent me-2 position-absolute end-0" style="top: 155px;">
                  <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="" class="rounded-circle shadow-sm">
                </button>
              </h5>
              <RouterLink :to="`/products/${product.id}`" class="card-footer bg-transparent border-0 text-decoration-none link-darkBrown">
                <h5 class="h5 fw-bold">{{product.title}}</h5>
                <div class="d-flex align-items-center">
                  <div class="me-auto">
                    <del v-if="product.originalPrice" class="me-2 text-muted mt-1" :class="{'d-none': !product.isCheaper}">NT$ {{ numberComma(product.originalPrice) }}</del>
                    <span class=" mt-1">
                      <span v-if="product.price" :class="{'text-danger':product.isCheaper, 'fw-bold':product.isCheaper}">
                        NT$ {{numberComma(product.price)}}</span> / {{ product.num }}{{ product.unit }}
                    </span>
                  </div>
                  <h5 class="mb-0">
                    <div class="badge border rounded-pill bg-white" :class="{'text-orange': product.averageRate, 'border-orange': product.averageRate, 'text-lightBrownGray': !product.averageRate, 'border-lightBrownGray': !product.averageRate}">
                      <span class="me-1">
                      {{ product.averageRate }}
                      </span>
                      <i class="bi bi-star-fill"></i>
                  </div>
                  </h5>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
          <!-- 查無產品 -->
        <div v-else-if="!filterProducts.length && search" class="py-10">
          <img src="../../assets/images/undraw_Page_not_found_re_e9o6.png" class="mb-3" alt="" style="height: 250px; display: block; margin: auto;">
          <h2 class="text-center">查無商品，請您重新查詢</h2>
        </div>
      </div>

      <!-- 頁尾 -->
      <PaginationComponent ref="pagination" :price-or-rate="priceOrRate" :filter-products="filterProducts"></PaginationComponent>
    </div>
</template>
<style>
  /* .Page ul .active a {
  background-color: red !important;
}
.Page ul li:hover{
  background-color: red !important;
} */
 ::placeholder {
    color: #e89995 !important;
  }

  #myTab .nav-item .active {
    color: #d04740;
  }
  /* 當要選擇特定input種類要加上  [type="radio"] */
  /* + 是只會選擇相鄰的兄弟 不加上 + 就會選擇全部 */
 .collapse .card input:hover + label{
    background: #e9a8a5 !important;
    color: white !important;
  }

</style>
