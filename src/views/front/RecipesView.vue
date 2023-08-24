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
export default {
  components: {
    RouterLink,
    PaginationComponent,
    Loading
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
    <div class=""  style="overflow-x: hidden;" data-aos="fade-up">
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
        <section   class="bannerBg" style="background-image: url('https://images.unsplash.com/photo-1681923665434-b1ae711f3918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');">
          <div class="mask">
            <div class="text" style="background: linear-gradient(to bottom, white 50% , #4572c2 50%); -webkit-background-clip: text;">
              甜點種類
            </div>
          </div>
        </section>
        <section class="container mt-4"  >
          <ul class="position-relative categorySelector row row-cols-6 gy-2 list-unstyled border-bottom">
              <li class="col d-flex  align-items-center justify-content-center " :class="{'liDisabled': selectItem === '全部'}">
                <a href="#"  @click.prevent="()=>selectCategory = '全部'" class="text-decoration-none d-flex flex-column align-items-center link-secondary " :class="{'fw-bold': selectItem === '全部', 'link-primary': selectItem === '全部'}">
                  <img class="categoryImg1" v-if="selectItem !== '全部'" src="../../assets/images/allDessert1.png"  alt="">
                  <img v-else-if="selectItem === '全部'" src="../../assets/images/allDessert3.png"  alt="">
                  <span class="titleSize " >所有<br class="d-lg-none">甜點</span>
                </a>
              </li>
              <li class="col d-flex  align-items-center justify-content-center " :class="{'liDisabled': selectItem === '台式甜點'}">
                <a href="#"  @click.prevent="()=>selectCategory = '台式甜點'" class="text-decoration-none d-flex flex-column align-items-center link-secondary " :class="{'fw-bold': selectItem === '台式甜點', 'link-primary': selectItem === '台式甜點'}">
                  <img class="categoryImg2" v-if="selectItem !== '台式甜點'" src="../../assets/images/mooncake1.png"  alt="">
                  <img v-else-if="selectItem === '台式甜點'" src="../../assets/images/mooncake3.png"  alt="">
                  <span class="titleSize " >台式<br class="d-lg-none">甜點</span>
                </a>
              </li>
              <li class="col d-flex  align-items-center justify-content-center" :class="{'liDisabled': selectItem === '法式甜點'}">
                <a href="#"  @click.prevent="()=>selectCategory = '法式甜點'" class="text-decoration-none d-flex flex-column align-items-center link-secondary" :class="{'fw-bold': selectItem === '法式甜點', 'link-primary': selectItem === '法式甜點'}">
                  <img class="categoryImg3" v-if="selectItem !== '法式甜點'" src="../../assets/images/macaroon1.png"  alt="">
                  <img v-else-if="selectItem === '法式甜點'" src="../../assets/images/macaroon3.png"  alt="">
                  <span  class="titleSize ">法式<br class="d-lg-none">甜點</span>
                </a>
              </li>
              <li class="col d-flex  align-items-center justify-content-center" :class="{'liDisabled': selectItem === '美式甜點'}">
                <a href="#"  @click.prevent="()=>selectCategory = '美式甜點'" class="text-decoration-none d-flex flex-column align-items-center link-secondary" :class="{'fw-bold': selectItem === '美式甜點', 'link-primary': selectItem === '美式甜點'}">
                  <img class="categoryImg4" v-if="selectItem !== '美式甜點'" src="../../assets/images/donut1.png"  alt="">
                  <img v-else-if="selectItem === '美式甜點'" src="../../assets/images/donut4.png"  alt="">
                  <span  class="titleSize ">美式<br class="d-lg-none">甜點</span>
                </a>
              </li>
              <li class="col d-flex  align-items-center justify-content-center" :class="{'liDisabled': selectItem === '日式甜點'}">
                <a href="#"  @click.prevent="()=>selectCategory = '日式甜點'" class="text-decoration-none d-flex flex-column align-items-center link-secondary" :class="{'fw-bold': selectItem === '日式甜點', 'link-primary': selectItem === '日式甜點'}">
                  <img class="categoryImg5" v-if="selectItem !== '日式甜點'" src="../../assets/images/cakeStr1.png"  alt="">
                  <img v-else-if="selectItem === '日式甜點'" src="../../assets/images/cake17.png"  alt="">
                  <span  class="titleSize ">日式<br class="d-lg-none">甜點</span>
                </a>
              </li>
              <li class="col d-flex align-items-center justify-content-center" :class="{'liDisabled': selectItem === '義式甜點'}">
                <a href="#"  @click.prevent="()=>selectCategory = '義式甜點'" class="text-decoration-none d-flex flex-column align-items-center link-secondary" :class="{'fw-bold': selectItem === '義式甜點', 'link-primary': selectItem === '義式甜點'}">
                  <img class="categoryImg6" v-if="selectItem !== '義式甜點'" src="../../assets/images/pie1.png"  alt="">
                  <img v-else-if="selectItem === '義式甜點'" src="../../assets/images/pie3.png"  alt="">
                  <span class="titleSize ">義式<br class="d-lg-none">甜點</span>
                </a>
              </li>
              <li class="blueLine bg-primary position-absolute" style="height: 2px; bottom: 0px; left: 5.5%" :class="{'activeAll': selectItem === '全部', 'activeT': selectItem === '台式甜點', 'activeF': selectItem === '法式甜點', 'activeA': selectItem === '美式甜點', 'activeJ': selectItem === '日式甜點', 'activeI': selectItem === '義式甜點'}"></li>
          </ul>
        </section>

        <section class="d-none d-lg-block container selectProduct my-5"  >
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
        </section>

        <section class="container"  >
          <div v-if="filterRecipes.length" class="row row-cols-lg-4 row-cols-2 gy-4">
            <div class="col text-decoration-none" v-for="recipe in this.$refs.pagination.pageProducts" :key="recipe.id">
              <div class="card position-relative bg-transparent" style="border-radius: 0; border: 1px solid transparent;">
                <div class="cardImg" style="">
                  <RouterLink :to="`/recipes/${recipe.id}`" class="enlargeImg">
                    <img :src="recipe.image" class="card-img" style=" object-fit: cover;  max-width: 100%; max-height: 100%; border-radius: 0;" alt="">
                  </RouterLink>
                </div>
                <h5 class="card-text mb-0">
                  <p class="detail d-none d-lg-block position-absolute fw-bold" style="top: 35%; left: 50%; transform: translateX(-50%); letter-spacing: 5px;">查看詳細食譜</p>

                    <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2" @click="()=>addBookmark(recipe)">
                      <img src="../../assets/images/image5.png">
                    </button>
                    <!-- 已收藏狀態 -->
                    <div v-for="mark in bookMarks" :key="mark + 4567">
                      <button v-if="mark === recipe.id" type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2"  @click="()=>deleteBookmark(recipe.id)">
                          <img src="../../assets/images/image4.png">
                      </button>
                    </div>
                    <span style="pointer-events: none; " class="cardTextCategory badge rounded-pill bg-primary mt-4 border-0 m-3 position-absolute start-0">{{ recipe.category }}</span>
                </h5>
                <RouterLink :to="`/recipes/${recipe.id}`" class="card-footer bg-transparent border-0 pt-lg-3 text-decoration-none link-darkBrown">
                  <h5 class="d-flex justify-content-between align-items-center fw-bold">
                    <span class="cardTextTitle">{{recipe.title}}</span>
                  </h5>
                   <div class="cardTextPrice d-flex align-items-lg-center align-items-end">
                    <div class="">
                      <del v-if="recipe.total" class="me-2 text-muted d-block d-lg-inline-block" :class="{'d-none': recipe.price === recipe.total}">NT$ {{ numberComma(recipe.total) }}</del>
                      <span><span v-if="recipe.price" :class="{'text-danger':recipe.price !== recipe.total, 'fw-bold':recipe.price !== recipe.total}">NT$ {{numberComma(recipe.price)}}</span> / {{ recipe.content }}</span>
                    </div>
                    <h5 class="starRates mb-0 ms-auto">
                      <p class=" mb-0 badge rounded-pill border d-flex align-items-center" :class="{'border-primary': recipe.thumbs !== 0, 'border-lightBrownGray':  recipe.thumbs === 0, 'text-primary':recipe.thumbs !== 0,'text-lightBrownGray': recipe.thumbs === 0}">
                        <span class="me-1">{{ recipe.thumbs }}</span>
                        <i class="bi bi-hand-thumbs-up-fill"></i>
                      </p>
                    </h5>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!-- 查無食譜 -->
          <div v-else-if="!filterRecipes.length && search" class="py-96">
            <img src="../../assets/images/undraw_Page_not_found_re_e9o6.png" class="mb-3" alt="" style="height: 250px; display: block; margin: auto;">
            <h2 class="text-center">查無食譜，請您重新查詢</h2>
          </div>
          <!-- 頁尾 -->
          <PaginationComponent ref="pagination" :price-or-rate="priceOrRate" :filter-recipes="filterRecipes" class="mb-5"></PaginationComponent>
        </section>
    </div>
</template>
<style>
  .categorySelector li a{
    padding-bottom: 10px;
  }

  .categorySelector li a .categoryImg1, .categoryImg2, .categoryImg3, .categoryImg4, .categoryImg5, .categoryImg6{
    opacity: .5;
  }
  .categorySelector li a:hover .categoryImg1 {
    content: url('@/assets/images/allDessert2.png');
  }
  .categorySelector li a:hover .categoryImg2 {
    content: url('@/assets/images/mooncake2.png');
  }
  .categorySelector li a:hover .categoryImg3 {
    content: url('@/assets/images/macaroon2.png');
  }
  .categorySelector li a:hover .categoryImg4 {
    content: url('@/assets/images/donut2.png');
  }
  .categorySelector li a:hover .categoryImg5 {
    content: url('@/assets/images/cakeStr2.png');
  }
  .categorySelector li a:hover .categoryImg6 {
    content: url('@/assets/images/pie2.png');
  }
</style>
