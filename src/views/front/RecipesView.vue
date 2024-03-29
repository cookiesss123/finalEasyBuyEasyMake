<script>
import loadingStore from '../../stores/loadingStore'
import { RouterLink } from 'vue-router'
import { mapActions, mapState } from 'pinia'
import cartStore from '../../stores/carts'
import markStore from '../../stores/bookmark'
import dataStore from '../../stores/mainData'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import PaginationComponent from '../../components/PaginationComponent.vue'
import Collapse from 'bootstrap/js/dist/collapse'
import { selections } from '../../utils/publicData'
import BannerComponent from '../../components/BannerComponent.vue'

export default {
  components: {
    RouterLink,
    PaginationComponent,
    BannerComponent
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      selections,
      costOrRateCollapse: {},
      highOrLowCollapse: {},
      selectCategory: '全部', // 選單點選
      selectItem: '全部', // 跨頁、手機搜尋
      priceOrRate: '成本',
      highOrLow: '不拘',
      recipeSearchName: '',
      recipes: [],
      filterRecipes: [],
      search: false
    }
  },
  methods: {
    // selectItem 用於跨頁和手機 selectCategory 用於電腦的菜單 可以合一嗎?
    ...mapActions(cartStore, ['toastMessage']),
    ...mapActions(markStore, ['addBookmark', 'deleteBookmark', 'getBookmarks']),
    ...mapActions(dataStore, ['getRecipes', 'getThumbs']),
    ...mapActions(loadingStore, ['startLoading']),
    searchRecipes () {
      this.filterRecipes.forEach((item, index) => {
        if (this.thumbs[item.id]) {
          this.filterRecipes[index].thumbs = this.thumbs[item.id].thumbs
        } else if (!this.thumbs[item.id]) {
          this.filterRecipes[index].thumbs = 0
        }
      })

      if (this.selectItem === '全部') {
        this.filterRecipes = this.recipes
      } else if (this.selectItem !== '全部') {
        this.filterRecipes = this.recipes.filter(item => item.category === this.selectItem)
      }

      if (this.priceOrRate === '成本' && this.highOrLow !== '不拘') {
        if (this.highOrLow === '低到高') {
          this.filterRecipes = this.filterRecipes.sort((a, b) => {
            return a.price - b.price
          })
        } else if (this.highOrLow === '高到低') {
          this.filterRecipes = this.filterRecipes.sort((a, b) => {
            return b.price - a.price
          })
        }
      } else if (this.priceOrRate === '評價' && this.highOrLow !== '不拘') {
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
      this.filterRecipes = this.filterRecipes.filter(recipe => {
        return recipe.title.match(this.recipeSearchName)
      })
      this.search = true
      this.$refs.pagination.renderPage(1, this.filterRecipes)
    },
    async getData () {
      this.recipes = await this.getRecipes()
      this.recipes = Object.values(this.recipes)
      this.filterRecipes = this.recipes

      if (!this.$route.query.category && this.$route.fullPath === '/recipes') {
        this.$refs.pagination.renderPage(1, this.filterRecipes)
      } else if (this.$route.query.category) {
        this.searchRecipes()
      }
      this.getBookmarks('recipeBookmarks')
    },
    // 選擇菜單
    select (name) {
      this.selectCategory = name
      this.recipeSearchName = ''
      this.highOrLow = '不拘'
    }
  },
  mounted () {
    this.startLoading()

    this.costOrRateCollapse = new Collapse(this.$refs.costOrRateCollapse, {
      toggle: false,
      parent: '#myGroup'
    })
    this.highOrLowCollapse = new Collapse(this.$refs.highOrLowCollapse, {
      toggle: false,
      parent: '#myGroup'
    })

    if (this.$route.query.category) {
      this.selectItem = this.$route.query.category
      this.selectCategory = this.selectItem
      this.highOrLow = this.$route.query.valueHighOrLow
      this.priceOrRate = this.$route.query.valuePriceOrRate
      this.recipeSearchName = this.$route.query.searchName
    }
    this.getThumbs()
    this.getData()
  },

  watch: {
    selectCategory () {
      this.selectItem = this.selectCategory
      if (this.selectCategory === '全部') {
        this.filterRecipes = this.recipes
      } else if (this.selectCategory !== '全部') {
        this.filterRecipes = this.recipes.filter(recipe => recipe.category === this.selectCategory)
      }
      this.$refs.pagination.renderPage(1, this.filterRecipes)
    },
    priceOrRate () {
      this.costOrRateCollapse.hide()
    },
    highOrLow () {
      this.highOrLowCollapse.hide()
    },
    filterRecipes () {
      this.costOrRateCollapse.hide()
      this.highOrLowCollapse.hide()
    }
  },
  computed: {
    ...mapState(markStore, ['recipeBookmarks', 'uid']),
    ...mapState(dataStore, ['thumbs'])
  }
}
</script>
<template>
    <div>
      <BannerComponent></BannerComponent>
      <section class="container">
        <div class="pt-lg-4 pt-3 position-relative" data-aos="fade-up">
          <ul class="category-selector row row-cols-6 list-unstyled border-bottom">
              <li v-for="item in selections.dessertCategory" :key="item.icon" class="col text-center" :class="{'pointer-events-none': selectItem === item.title}">
                <a href="#"  @click.prevent="()=>select(item.title)" class="text-decoration-none d-inline-block" :class="{'fw-bold': selectItem === item.title, 'link-primary': selectItem === item.title}">
                  <i v-if="selectItem !== item.title" :class="item.icon" class="text-gray"></i>
                  <i v-if="selectItem === item.title" :class="item.iconSelected" class="text-primary"></i>
                  <span class="fs-12 fs-md-5 d-block pb-2">{{ item.title === '全部' ? '所有' : item.title.slice(0, 2) }}<br class="d-lg-none">{{ item.title === '全部' ? '甜點' : item.title.slice(2, 4) }}</span>
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
              <div class="card card-body" >
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

        <div v-if="filterRecipes.length" class="row row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-4" data-aos="fade-up">
          <div class="col" v-for="recipe in this.$refs.pagination.pageProducts" :key="recipe.id">
            <div class="card position-relative">
              <RouterLink :to="`/recipes/${recipe.id}`" class="card-img-hover position-relative">
                <img :src="recipe.image" class="object-fit-cover card-img" :alt="recipe.title">
                <span class="badge rounded-pill bg-primary position-absolute start-0 bottom-0 m-3">{{ recipe.category }}</span>
                <p class="detail position-absolute top-50 start-50 translate-middle fw-bold letter-spacing-5 link-darkBrown fs-xl-5 text-center">查看<br class="d-xl-none d-lg-block">詳細食譜</p>
              </RouterLink>
              <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-2 m-md-3" @click="()=>addBookmark('recipeBookmarks', recipe)">
                <img src="../../assets/images/image5.png" alt="收藏按鈕-未收藏">
              </button>
              <div v-for="(mark, index) in recipeBookmarks" :key="index">
                <button v-if="index === recipe.id" type="button" class="position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-2 m-md-3"  @click="()=>deleteBookmark('recipeBookmarks', recipe.id)">
                    <img src="../../assets/images/image4.png" alt="收藏按鈕-已收藏">
                </button>
              </div>
              <RouterLink :to="`/recipes/${recipe.id}`" class="card-body px-0 text-decoration-none link-darkBrown">
                <h3 class="fw-bold fs-md-5 fs-6">{{recipe.title}}</h3>
                  <div class="d-flex align-items-center flex-wrap fs-md-6 fs-12">
                    <del v-if="recipe.total" class="me-2 text-muted" :class="{'d-none': recipe.price === recipe.total}">NT$ {{ numberComma(recipe.total) }}</del>
                    <span class="me-1" :class="{'text-danger':recipe.price !== recipe.total, 'fw-bold':recipe.price !== recipe.total}">NT$ {{ numberComma(recipe.price) }}</span>
                    <span> / {{ recipe.content }}</span>

                    <span v-if="thumbs[recipe.id]" class="badge rounded-pill ms-auto border mt-1 mt-md-0" :class="{'border-primary': thumbs[recipe.id].thumbs !== 0, 'border-gray':  thumbs[recipe.id].thumbs === 0, 'text-primary':thumbs[recipe.id].thumbs !== 0,'text-gray': thumbs[recipe.id].thumbs === 0, 'bg-secondary':thumbs[recipe.id].thumbs !== 0, 'bg-whiteGray':thumbs[recipe.id].thumbs === 0}">
                      {{ thumbs[recipe.id].thumbs }}
                      <i class="bi bi-hand-thumbs-up-fill" ></i>
                    </span>
                    <span v-else-if="!thumbs[recipe.id]" class="badge rounded-pill ms-auto border mt-1 mt-md-0 border-gray bg-whiteGray text-gray">
                      0
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
      </section>
      <!-- 頁尾 -->
      <PaginationComponent ref="pagination" :price-or-rate="priceOrRate" :filter-recipes="filterRecipes" class="mb-5"></PaginationComponent>

    </div>
</template>
