<script>
import { RouterLink } from 'vue-router'
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import PaginationComponent from '../../components/PaginationComponent.vue'
import Collapse from 'bootstrap/js/dist/collapse'
import { db, auth } from '../../firebase/db'
import { ref, set, remove, onValue } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

// 第二種
// import LoadingComponent from '../../components/LoadingComponent.vue'

export default {
  components: {
    RouterLink,
    PaginationComponent,
    Loading
    // 第二種
    // LoadingComponent
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      costOrRateCollapse: {},
      highOrLowCollapse: {},
      recipes: [],
      selectCategory: '全部',
      selectItem: '全部',
      priceOrRate: '成本',
      highOrLow: '不拘',
      recipeSearchName: '',
      filterRecipes: [], // 選擇後改變的值 一定要變這個才可以
      bookMarks: [],
      thumbs: {}, // 所有人按讚分類
      user: {},
      uid: '',
      search: false, // 在搜尋嗎? 用來判斷搜尋無值的狀況
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    ...mapActions(cartStore, ['toastMessage']),
    getRecipes () {
      const dataRef = ref(db, 'recipes/')
      onValue(dataRef, snapshot => {
        this.recipes = snapshot.val()
        // 把物件轉成陣列 並填入id
        this.recipes = Object.entries(this.recipes).map(item => {
          item[1].id = item[0]
          return item[1]
        })
        // 得到讚數
        const dataRef = ref(db, 'recipeThumbs/')
        onValue(dataRef, snapshot => {
          this.thumbs = snapshot.val()
          // 把讚數填入
          this.recipes.forEach((recipe, index) => {
            Object.keys(this.thumbs).forEach(thumbId => {
              if (recipe.id === thumbId) {
                this.recipes[index].thumbs = this.thumbs[recipe.id].thumbs
              }
            })
          })
          this.recipes.forEach((recipe, index) => {
            if (!recipe.thumbs) {
              this.recipes[index].thumbs = 0
            }
          })
          this.filterRecipes = this.recipes
          this.isLoading = false

          if (!this.$route.query.category && this.$route.fullPath === '/recipes') { // 未傳值再渲染
          // 從單頁按讚後這裡會出現錯誤警告 因為觸發了最上方的得到讚 this.$route.fullPath === '/recipes' 用這個在食譜單頁就不會觸發了
            this.$refs.pagination.renderPage(1, this.filterRecipes)
          } else if (this.$route.query.category) { // 有外部傳值再搜索
            this.searchRecipes()
          }
        })
      })
    },
    searchRecipes () {
      // 先排序種類
      if (this.selectItem === '全部') {
        this.filterRecipes = this.recipes
      } else if (this.selectItem !== '全部') {
        this.filterRecipes = this.recipes.filter(item => item.category === this.selectItem)
      }
      // 再排序其他篩選值
      if (this.priceOrRate === '成本' && this.highOrLow !== '不拘') {
        // 判斷頁尾用
        if (this.highOrLow === '低到高') {
          this.filterRecipes = this.filterRecipes.sort((a, b) => {
            return a.price - b.price
          })
        } else if (this.highOrLow === '高到低') {
          this.filterRecipes = this.filterRecipes.sort((a, b) => {
            return b.price - a.price
          })
        }
      } else if (this.priceOrRate === '評價' && this.highOrLow !== '不拘') { // 讚最多的
        if (this.highOrLow === '低到高') {
          this.filterRecipes = this.filterRecipes.sort((a, b) => {
            return a.thumbs - b.thumbs
          })
        } else if (this.highOrLow === '高到低') {
          this.filterRecipes = this.filterRecipes.sort((a, b) => {
            return b.thumbs - a.thumbs
          })
        }
      }
      // 如果不拘直接搜尋
      this.filterRecipes = this.filterRecipes.filter(recipe => {
        return recipe.title.match(this.recipeSearchName)
      })
      this.search = true // 在搜尋嗎? 用來判斷搜尋無值的狀況
      this.$refs.pagination.renderPage(1, this.filterRecipes)
    },
    // 需要驗證
    getBookmarks () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            const dataRef = ref(db, `recipeBookmarks/${this.uid}`)
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
    // 不能加入 讚和評價的資訊 變動的資料會不同步
    addBookmark (recipe) {
      if (!this.uid) {
        this.toastMessage('登入才可使用收藏功能', 'error')
        return
      }
      const reference = ref(db, `recipeBookmarks/${this.uid}/${recipe.id}`)
      set(reference, recipe)
      this.toastMessage('收藏成功')
    },
    // 刪除食譜收藏
    deleteBookmark (id) {
      remove(ref(db, `recipeBookmarks/${this.uid}/${id}`))
      this.toastMessage('刪除收藏')
    }
  },
  mounted () {
    // 暫時關閉
    this.isLoading = true

    this.costOrRateCollapse = new Collapse(this.$refs.costOrRateCollapse, {
      toggle: false,
      parent: '#myGroup'
    })
    this.highOrLowCollapse = new Collapse(this.$refs.highOrLowCollapse, {
      toggle: false,
      parent: '#myGroup'
    })

    // 搜尋框也要傳入

    if (this.$route.query.category) { // 這個值一定有 有了外面的傳值 再傳入所有
      this.selectItem = this.$route.query.category
      this.highOrLow = this.$route.query.valueHighOrLow
      this.priceOrRate = this.$route.query.valuePriceOrRate
      this.recipeSearchName = this.$route.query.searchName
    }
    this.getBookmarks()
    this.getRecipes()
  },
  watch: {
    selectCategory () {
      this.recipeSearchName = ''
      if (this.selectCategory === '全部') {
        this.selectItem = '全部'
        this.filterRecipes = this.recipes
        this.$refs.pagination.renderPage(1, this.filterRecipes)
      } else if (this.selectCategory !== '全部') {
        this.selectItem = this.selectCategory
        this.filterRecipes = this.recipes.filter(recipe => recipe.category === this.selectItem)
      }
      this.$refs.pagination.renderPage(1, this.filterRecipes)
    },
    // 選完收合
    priceOrRate () {
      this.costOrRateCollapse.hide()
    },
    // 選完收合
    highOrLow () {
      this.highOrLowCollapse.hide()
    },
    // 搜完 全部關閉
    filterRecipes () {
      this.costOrRateCollapse.hide()
      this.highOrLowCollapse.hide()
    }
  }
}
</script>
<template>
    <div>
      <loading v-model:active="isLoading"
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
    <!-- 第二種 -->
    <!-- <LoadingComponent :is-loading="isLoading"></LoadingComponent> -->
      <section class="text-center" data-aos="fade-up">
        <div class="py-lg-200 py-96 bg-img-fixed" style="background-image: url('https://images.unsplash.com/photo-1681923665434-b1ae711f3918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');"></div>
        <h2 class="text-purple mb-0 fs-lg-1 fs-5 letter-spacing-20 fw-bold bg-secondary-lightPurple py-2">
          <span class="ms-3">甜點種類</span>
        </h2>
      </section>

      <section class="container">
        <div class="pt-lg-4 pt-3 position-relative" data-aos="fade-up">
          <ul class="category-selector row row-cols-6 list-unstyled border-bottom">
              <li class="col text-center" :class="{'pointer-events-none': selectItem === '全部'}">
                <a href="#"  @click.prevent="()=>selectCategory = '全部'" class="text-decoration-none d-inline-block" :class="{'fw-bold': selectItem === '全部', 'link-primary': selectItem === '全部'}">
                  <img v-if="selectItem !== '全部'" class="category-img1 d-block mx-auto" src="../../assets/images/allDessert1.png"  alt="所有甜點灰色圖示">
                  <img v-else-if="selectItem === '全部'" src="../../assets/images/allDessert3.png" class="d-block mx-auto" alt="所有甜點藍色圖示">
                  <span class="fs-12 fs-md-5 d-block py-2" >所有<br class="d-lg-none">甜點</span>
                </a>
              </li>
              <li class="col text-center" :class="{'pointer-events-none': selectItem === '台式甜點'}">
                <a href="#"  @click.prevent="()=>selectCategory = '台式甜點'" class="text-decoration-none d-inline-block" :class="{'fw-bold': selectItem === '台式甜點', 'link-primary': selectItem === '台式甜點'}">
                  <img class="category-img2 d-block mx-auto" v-if="selectItem !== '台式甜點'" src="../../assets/images/mooncake1.png"  alt="台式甜點灰色圖示">
                  <img v-else-if="selectItem === '台式甜點'" class="d-block mx-auto" src="../../assets/images/mooncake3.png"  alt="台式甜點藍色圖示">
                  <span class="fs-12 fs-md-5 d-block py-2" >台式<br class="d-lg-none">甜點</span>
                </a>
              </li>
              <li class="col text-center" :class="{'pointer-events-none': selectItem === '法式甜點'}">
                <a href="#"  @click.prevent="()=>selectCategory = '法式甜點'" class="text-decoration-none d-inline-block" :class="{'fw-bold': selectItem === '法式甜點', 'link-primary': selectItem === '法式甜點'}">
                  <img class="category-img3 d-block mx-auto" v-if="selectItem !== '法式甜點'" src="../../assets/images/macaroon1.png"  alt="法式甜點灰色圖示">
                  <img v-else-if="selectItem === '法式甜點'" class="d-block mx-auto" src="../../assets/images/macaroon3.png"  alt="法式甜點藍色圖示">
                  <span  class="fs-12 fs-md-5 d-block py-2">法式<br class="d-lg-none">甜點</span>
                </a>
              </li>
              <li class="col text-center" :class="{'pointer-events-none': selectItem === '美式甜點'}">
                <a href="#"  @click.prevent="()=>selectCategory = '美式甜點'" class="text-decoration-none d-inline-block" :class="{'fw-bold': selectItem === '美式甜點', 'link-primary': selectItem === '美式甜點'}">
                  <img class="category-img4 d-block mx-auto" v-if="selectItem !== '美式甜點'" src="../../assets/images/donut1.png"  alt="美式甜點灰色圖示">
                  <img v-else-if="selectItem === '美式甜點'" class="d-block mx-auto" src="../../assets/images/donut4.png"  alt="美式甜點藍色圖示">
                  <span  class="fs-12 fs-md-5 d-block py-2">美式<br class="d-lg-none">甜點</span>
                </a>
              </li>
              <li class="col text-center" :class="{'pointer-events-none': selectItem === '日式甜點'}">
                <a href="#"  @click.prevent="()=>selectCategory = '日式甜點'" class="text-decoration-none d-inline-block" :class="{'fw-bold': selectItem === '日式甜點', 'link-primary': selectItem === '日式甜點'}">
                  <img class="category-img5 d-block mx-auto" v-if="selectItem !== '日式甜點'" src="../../assets/images/cakeStr1.png"  alt="日式甜點灰色圖示">
                  <img v-else-if="selectItem === '日式甜點'" class="d-block mx-auto" src="../../assets/images/cake17.png"  alt="日式甜點藍色圖示">
                  <span  class="fs-12 fs-md-5 d-block py-2">日式<br class="d-lg-none">甜點</span>
                </a>
              </li>
              <li class="col text-center" :class="{'pointer-events-none': selectItem === '義式甜點'}">
                <a href="#"  @click.prevent="()=>selectCategory = '義式甜點'" class="text-decoration-none d-inline-block" :class="{'fw-bold': selectItem === '義式甜點', 'link-primary': selectItem === '義式甜點'}">
                  <img class="category-img6 d-block mx-auto" v-if="selectItem !== '義式甜點'" src="../../assets/images/pie1.png"  alt="義式甜點灰色圖示">
                  <img v-else-if="selectItem === '義式甜點'" class="d-block mx-auto" src="../../assets/images/pie3.png"  alt="義式甜點藍色圖示">
                  <span class="fs-12 fs-md-5 d-block py-2">義式<br class="d-lg-none">甜點</span>
                </a>
              </li>
          </ul>
          <div class="blue-line bg-primary position-absolute" :class="{'active-all-recipe': selectItem === '全部', 'active-taiwan': selectItem === '台式甜點', 'active-france': selectItem === '法式甜點', 'active-usa': selectItem === '美式甜點', 'active-japan': selectItem === '日式甜點', 'active-italy': selectItem === '義式甜點'}"></div>
        </div>

        <div class="d-none d-lg-block my-5" data-aos="fade-up">
        <div class="input-group">
          <a class="btn btn-outline-primary px-5" @click="()=> this.costOrRateCollapse.toggle()">篩選對象 <i class="bi bi-caret-down-fill"></i><span class="ms-2 fw-bold">{{priceOrRate}}</span></a>
          <button class="btn btn-outline-primary px-5" type="button" @click="()=> this.highOrLowCollapse.toggle()">篩選值 <i class="bi bi-caret-down-fill"></i><span class="ms-2 fw-bold">{{highOrLow}}</span> </button>
          <input type="search" class="form-control border-primary border-end-0" placeholder="請輸入食譜名稱" aria-label="Example text with two button addons" v-model="recipeSearchName" @keyup.enter="searchRecipes">
          <button type="submit" class="btn border border-primary border-start-0 bg-transparent d-flex" @click.prevent="searchRecipes">
            <span class="material-icons-outlined text-primary ">search</span>
          </button>
        </div>
        <div class="row g-0" id="myGroup">
          <div class="col-2">
            <div ref="costOrRateCollapse" class="collapse">
              <div class="card card-body border-0" style="border: 0px !important;">
                <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                  <input type="radio" class="btn-check" value="成本" name="priceOrRate" id="selectprice" autocomplete="off"  v-model="priceOrRate">
                  <label class="btn btn-outline-primary " for="selectprice">成本</label>
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

        <div v-if="filterRecipes.length" class="row row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-4" data-aos="fade-up">
          <div class="col" v-for="recipe in this.$refs.pagination.pageProducts" :key="recipe.id">
            <div class="card position-relative">
              <RouterLink :to="`/recipes/${recipe.id}`" class="card-img-hover position-relative">
                <img :src="recipe.image" class="object-fit-cover card-img" :alt="recipe.title">
                <span class="badge rounded-pill bg-primary position-absolute start-0 bottom-0 m-3">{{ recipe.category }}</span>
                <p class="detail position-absolute top-50 start-50 translate-middle fw-bold letter-spacing-5 link-darkBrown fs-xl-5 text-center">查看<br class="d-xl-none d-lg-block">詳細食譜</p>
              </RouterLink>
              <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-2 m-md-3" @click="()=>addBookmark(recipe)">
                <img src="../../assets/images/image5.png" alt="收藏按鈕-未收藏">
              </button>
              <div v-for="mark in bookMarks" :key="mark + 4567">
                <button v-if="mark === recipe.id" type="button" class="position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-2 m-md-3"  @click="()=>deleteBookmark(recipe.id)">
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
        <!-- 查無食譜 -->
        <div v-else-if="!filterRecipes.length && search" class="py-lg-4 text-center">
          <img src="../../assets/images/undraw_Page_not_found_re_e9o6.png" class="mb-lg-3 mb-2 img-md-200-sm-150" alt="查無資訊">
          <h3 class="fs-lg-3 fs-6">查無食譜，請您重新查詢</h3>
        </div>
        <!-- 頁尾 -->
        <PaginationComponent ref="pagination" :price-or-rate="priceOrRate" :filter-recipes="filterRecipes" class="mb-5"></PaginationComponent>
      </section>

    </div>
</template>
