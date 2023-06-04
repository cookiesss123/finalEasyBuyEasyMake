<script>
import { RouterLink } from 'vue-router'
// mapState
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import PaginationComponent from '../../components/PaginationComponent.vue'
import Collapse from 'bootstrap/js/dist/collapse'
// auth
import { db, auth } from '../../firebase/db'
import { ref, set, remove, onValue } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import LoadingComponent from '../../components/LoadingComponent.vue'

export default {
  components: {
    RouterLink,
    PaginationComponent,
    LoadingComponent
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      loading: true,
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
      uid: '',
      search: false // 在搜尋嗎? 用來判斷搜尋無值的狀況
    }
  },
  methods: {
    ...mapActions(cartStore, ['toastMessage']),
    getRecipes () {
      // 1. const dataRef = ref(db, 'users/') 取得 users 項下所有資料
      // 2. 取得 user s的特定子分支資料

      const dataRef = ref(db, 'recipes/')
      onValue(dataRef, snapshot => {
        this.recipes = snapshot.val()
        // 把物件轉成陣列 並填入id
        this.recipes = Object.entries(this.recipes).map(item => {
          item[1].id = item[0]
          return item[1]
        })
        console.log(this.recipes, '食譜資料')
        // 得到讚數
        const dataRef = ref(db, 'recipeThumbs/')
        onValue(dataRef, snapshot => {
          this.thumbs = snapshot.val()
          console.log(this.thumbs, '所有讚')

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
          console.log(this.recipes, '食譜')

          this.filterRecipes = this.recipes
          this.loading = false

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
          console.log(this.uid, '使用者已登入取得 uid')

          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            console.log(this.user, '讀取的資料')
            const dataRef = ref(db, `recipeBookmarks/${this.uid}`)
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
    // this.$refs.loadingModal.show()
    this.loading = true

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
      // this.$route.query.category = undefined // 刷新會不見
    }
    this.getBookmarks()
    this.getRecipes()
  },
  watch: {
    // 為了解決從首頁搜尋連到食譜頁面 會更動到 selectItem 進而觸發重新渲染頁面導致搜尋沒正確顯示的問題 搜尋類別必須不同 不能用 selectItem
    selectCategory () { // selectCategory ： 本頁點選 selectItem ： 他頁搜尋
      // 改變就清空搜尋內容 切換自動到不拘
      this.recipeSearchName = ''
      // 先不改
      // this.priceOrRate = '成本'
      // this.highOrLow = '不拘'
      if (this.selectCategory === '全部') {
        this.selectItem = '全部'
        this.filterRecipes = this.recipes
        // 變成只有成本有
        this.$refs.pagination.renderPage(1, this.filterRecipes)
      } else if (this.selectCategory !== '全部') {
        this.selectItem = this.selectCategory
        this.filterRecipes = this.recipes.filter(recipe => recipe.category === this.selectItem)
        console.log(this.filterRecipes, '篩選結果')
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
    <div class="my-7">
        <!-- Loading -->

        <section class="bg-lightYellow mb-4 py-4 px-lg-5" style="overflow-x: hidden;">
          <div class="container">
            <div class="selectProductCategory row row-cols-lg-6 row-cols-3 ">
            <button type="button" class="col d-flex flex-column align-items-center btn border-0" :class="{'selectedImg': selectCategory ==='全部'}" @click="() => selectCategory ='全部'">
              <div class="cardImg mb-2" :class="{'opacity-100': selectItem === '全部'}">
                <div class="enlargeImg rounded-circle " :class="{'selectImgBorder':selectItem === '全部'}" >
                  <img v-if="selectCategory !=='全部'" src="../../assets/images/gettyimages-1268940871.jpg" alt="" class="rounded-circle"  style="object-fit: cover;" >
                  <img v-else-if="selectCategory ==='全部'" src="../../assets/images/gettyimages-1268940871.jpg" alt="" class="rounded-circle"  style="object-fit: cover; transform:scale(1.2,1.2);" >
                </div>
              </div>
              <span class="text-secondary" :class="{'text-red':selectItem === '全部' , 'fw-bold':selectItem === '全部'}">全部</span>
              <!-- 一開始選擇active不會在 全部 => 不曉得為甚麼不能用 selectItem 初始得不到 必須用  selectCategory 才能得到 -->
              <!-- selectItem 是搜尋會影響 selectCategory是直接按 -->
            </button>
            <button type="button" class="col d-flex flex-column align-items-center btn border-0" :class="{'selectedImg': selectCategory ==='台式甜點'}" @click="() => selectCategory ='台式甜點'">
              <div class="cardImg mb-2" :class="{'opacity-100': selectItem === '台式甜點'}">
                <div class="enlargeImg rounded-circle " :class="{'selectImgBorder':selectItem === '台式甜點'}" >
                  <img v-if="selectCategory !=='台式甜點'" src="../../assets/images/IMGP0051.jpg" alt="" class="rounded-circle"  style="object-fit: cover;" >
                  <img v-else-if="selectCategory ==='台式甜點'" src="../../assets/images/IMGP0051.jpg" alt="" class="rounded-circle"  style="object-fit: cover; transform:scale(1.2,1.2);" >
                </div>
              </div>
              <span class="text-secondary" :class="{'text-red':selectItem === '台式甜點', 'fw-bold':selectItem === '台式甜點'}" >台式甜點</span>
            </button>
            <button type="button" class="col d-flex flex-column align-items-center btn border-0" :class="{'selectedImg': selectCategory ==='法式甜點'}" @click="() => selectCategory ='法式甜點'">
              <div class="cardImg mb-2" :class="{'opacity-100': selectItem === '法式甜點'}">
                <div class="enlargeImg rounded-circle " :class="{'selectImgBorder':selectItem === '法式甜點'}" >
                  <img v-if="selectCategory !=='法式甜點'" src="../../assets/images/popularimage4.png" alt="" class="rounded-circle"  style="object-fit: cover;" >
                  <img v-else-if="selectCategory ==='法式甜點'" src="../../assets/images/popularimage4.png" alt="" class="rounded-circle"  style="object-fit: cover; transform:scale(1.2,1.2);" >
                </div>
              </div>
              <span class="text-secondary" :class="{'text-red':selectItem === '法式甜點', 'fw-bold':selectItem === '法式甜點'}" >法式甜點</span>
            </button>
            <button type="button" class="col d-flex flex-column align-items-center btn border-0" :class="{'selectedImg': selectCategory ==='美式甜點'}" @click="() => selectCategory ='美式甜點'">
              <div class="cardImg mb-2" :class="{'opacity-100': selectItem === '美式甜點'}">
                <div class="enlargeImg rounded-circle " :class="{'selectImgBorder':selectItem === '美式甜點'}" >
                  <img v-if="selectCategory !=='美式甜點'" src="../../assets/images/photo-1533910534207-90f31029a78e.jpg" alt="" class="rounded-circle"  style="object-fit: cover;" >
                  <img v-else-if="selectCategory ==='美式甜點'" src="../../assets/images/photo-1533910534207-90f31029a78e.jpg" alt="" class="rounded-circle"  style="object-fit: cover; transform:scale(1.2,1.2);" >
                </div>
              </div>
              <span class="text-secondary" :class="{'text-red':selectItem === '美式甜點', 'fw-bold':selectItem === '美式甜點'}" >美式甜點</span>
            </button>
            <button type="button" class="col d-flex flex-column align-items-center btn border-0" :class="{'selectedImg': selectCategory ==='日式甜點'}" @click="() => selectCategory ='日式甜點'">
              <div class="cardImg mb-2" :class="{'opacity-100': selectItem === '日式甜點'}">
                <div class="enlargeImg rounded-circle " :class="{'selectImgBorder':selectItem === '日式甜點'}" >
                  <img v-if="selectCategory !=='日式甜點'" src="../../assets/images/421Cv1xH8BYP44T9V8aY241R2UYjhTsiYa7giw6d.jpeg" alt="" class="rounded-circle"  style="object-fit: cover;" >
                  <img v-else-if="selectCategory ==='日式甜點'" src="../../assets/images/421Cv1xH8BYP44T9V8aY241R2UYjhTsiYa7giw6d.jpeg" alt="" class="rounded-circle"  style="object-fit: cover; transform:scale(1.2,1.2);" >
                </div>
              </div>
              <span class="text-secondary" :class="{'text-red':selectItem === '日式甜點', 'fw-bold':selectItem === '日式甜點'}" >日式甜點</span>
            </button>
            <button type="button" class="col d-flex flex-column align-items-center btn border-0" :class="{'selectedImg': selectCategory ==='義式甜點'}" @click="() => selectCategory ='義式甜點'">
              <div class="cardImg mb-2" :class="{'opacity-100': selectItem === '義式甜點'}">
                <div class="enlargeImg rounded-circle " :class="{'selectImgBorder':selectItem === '義式甜點'}" >
                  <img v-if="selectCategory !=='義式甜點'" src="../../assets/images/pastiera2.jpg" alt="" class="rounded-circle"  style="object-fit: cover;" >
                  <img v-else-if="selectCategory ==='義式甜點'" src="../../assets/images/pastiera2.jpg" alt="" class="rounded-circle"  style="object-fit: cover; transform:scale(1.2,1.2);" >
                </div>
              </div>
              <span class="text-secondary" :class="{'text-red':selectItem === '義式甜點', 'fw-bold':selectItem === '義式甜點'}" >義式甜點</span>
            </button>
          </div>
          </div>
        </section>
        <section class="d-none d-lg-block container selectProduct my-5">
          <div class="input-group">
            <a class="btn btn-outline-red px-5" @click="()=> this.costOrRateCollapse.toggle()">篩選對象 <i class="bi bi-caret-down-fill"></i><span class="ms-2 fw-bold">{{priceOrRate}}</span></a>
            <button class="btn btn-outline-red px-5" type="button" @click="()=> this.highOrLowCollapse.toggle()">篩選值 <i class="bi bi-caret-down-fill"></i><span class="ms-2 fw-bold">{{highOrLow}}</span> </button>
            <input type="search" class="form-control border-red border-end-0" placeholder="請輸入食譜名稱" aria-label="Example text with two button addons" v-model="recipeSearchName" @keyup.enter="searchRecipes">
            <button type="submit" class="btn border border-red border-start-0 bg-transparent" @click.prevent="searchRecipes">
              <img src="../../assets/images/icon-searchMobile.png" style="height: 25px;" alt="">
            </button>
          </div>
        <!-- 參考： https://stackoverflow.com/questions/72345809/only-show-one-collapse-open-vue-3-bootstrap-5 -->
        <!-- 控制折疊開啟一個 另一個就關閉  在最外層加上 id="myGroup" 摺疊分別加上 data-bs-parent="#myGroup" -->
          <div class="row g-0" id="myGroup">
            <div class="col-2">
              <div ref="costOrRateCollapse" class="collapse">
                <div class="card card-body border-0">
                  <div class="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                    <input type="radio" class="btn-check" value="成本" name="priceOrRate" id="selectprice" autocomplete="off"  v-model="priceOrRate">
                    <label class="btn btn-outline-red " for="selectprice">成本</label>
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
        </section>

        <section class="container">
          <!-- 多了這個判斷 filterRecipes.length 至少要有一個存在 -->
          <div v-if="filterRecipes.length" class="row row-cols-lg-4 row-cols-2 gy-4">
            <div class="col text-decoration-none" v-for="recipe in this.$refs.pagination.pageProducts" :key="recipe.id">
              <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px;">
                <div class="cardImg" style="border-radius: 20px;">
                  <RouterLink :to="`/recipes/${recipe.id}`" class="enlargeImg">
                    <img :src="recipe.image" class="card-img" style="border-radius: 20px; object-fit: cover;  max-width: 100%; max-height: 100%;" alt="">
                  </RouterLink>
                </div>
                <h5 class="card-text">
                    <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2" @click="()=>addBookmark(recipe)">
                      <img src="../../assets/images/image5.png">
                    </button>
                    <!-- 已收藏狀態 -->
                    <div v-for="mark in bookMarks" :key="mark + 4567">
                      <button v-if="mark === recipe.id" type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2"  @click="()=>deleteBookmark(recipe.id)">
                          <img src="../../assets/images/image4.png">
                      </button>
                    </div>
                    <span style="pointer-events: none; " class="cardTextCategory badge rounded-pill bg-red mt-4 border-0 m-3 position-absolute start-0">{{ recipe.category }}</span>
                </h5>
                <RouterLink :to="`/recipes/${recipe.id}`" class="card-footer bg-transparent border-0 text-decoration-none link-darkBrown">
                  <h5 class="d-flex justify-content-between align-items-center fw-bold">
                    <span class="cardTextTitle">{{recipe.title}}</span>
                  </h5>
                   <div class="cardTextPrice d-flex align-items-lg-center align-items-end">
                    <div class="">
                      <del v-if="recipe.total" class="me-2 text-muted d-block d-lg-inline-block" :class="{'d-none': recipe.price === recipe.total}">NT$ {{ numberComma(recipe.total) }}</del>
                      <span><span v-if="recipe.price" :class="{'text-danger':recipe.price !== recipe.total, 'fw-bold':recipe.price !== recipe.total}">NT$ {{numberComma(recipe.price)}}</span> / {{ recipe.content }}</span>
                    </div>
                    <h5 class="starRates mb-0 ms-auto">
                      <p class=" mb-0 badge rounded-pill border d-flex align-items-center" :class="{'border-red': recipe.thumbs !== 0, 'border-lightBrownGray':  recipe.thumbs === 0, 'text-red':recipe.thumbs !== 0,'text-lightBrownGray': recipe.thumbs === 0}">
                        <span class="me-1">{{ recipe.thumbs }}</span>
                        <i class="bi bi-hand-thumbs-up-fill"></i>
                      </p>
                    </h5>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <LoadingComponent v-if="loading"></LoadingComponent>
          <!-- 查無食譜 -->
          <div v-else-if="!filterRecipes.length && search" class="py-10">
            <img src="../../assets/images/undraw_Page_not_found_re_e9o6.png" class="mb-3" alt="" style="height: 250px; display: block; margin: auto;">
            <h2 class="text-center">查無食譜，請您重新查詢</h2>
          </div>
          <!-- 頁尾 -->
          <PaginationComponent ref="pagination" :price-or-rate="priceOrRate" :filter-recipes="filterRecipes"></PaginationComponent>
        </section>
    </div>
</template>
<style>
 ::placeholder {
    color: #f39691 !important;
  }
  #myTab .nav-item .active {
    color: #d04740;
  }
  /* #be7106 這顏色很好看 */
  .selectProductCategory .btn:hover span{
    color: #d04740 !important;
    font-weight: bold;
  }
  /* 不然會移動 */
  .selectProductCategory .btn:hover .enlargeImg{
    border: 2px solid #d04740;
  }
  .selectImgBorder{
    border: 2px solid #d04740 !important;
  }
  .selectProductCategory button .cardImg{
  opacity: 0.9;
  overflow:hidden;
}
.selectProductCategory button:hover .cardImg{
  opacity: 1;
}
.enlargeImg{
  width: 100%;
  overflow:hidden;
  border: 2px solid transparent;
}
/* 未選定 縮小 到 放大 */
.selectProductCategory button .cardImg img{
  transform:scale(1,1);
  transition: all .3s ease-out;
}
.selectProductCategory button:hover .enlargeImg img{
  transform:scale(1.2,1.2);
}

/* 已選定 不能點擊 */
.selectedImg{
  pointer-events: none !important;
}

</style>
