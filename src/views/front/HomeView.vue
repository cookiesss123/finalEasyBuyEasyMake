<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import bannerImg from '../../assets/images/hero.png'
// mapState
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import LoadingModal from '../../components/LoadingModal.vue'
import { db, auth } from '../../firebase/db'
import { ref, onValue, push, set, remove } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'

export default {
  components: {
    Swiper,
    SwiperSlide,
    LoadingModal
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      // swiper
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'my-bullet-class',
        bulletActiveClass: 'my-bullet-active-class'
      },
      thumbs: {}, // 所有人按讚分類
      recipeBookMarks: [],
      productBookmarks: [],
      averageRate: [], // ??????
      rates: {},
      products: [],
      goodProducts: [], // 優選產品
      onSaleProducts: [], // 特價商品
      bannerImg, // url 的網址都要這樣寫 banner圖片
      recipeSearchName: '',
      selectItem: '全部',
      highOrLow: '不拘',
      priceOrRate: '成本',
      lottery: {},
      popularRecipes: [],
      uid: ''
      // marked: false // 控制按下收藏的愛心點擊效果(hover.css)
    }
  },
  methods: {
    // 不用得知使用者是否按食譜讚!!!!!
    ...mapActions(cartStore, ['pleaseReLogin', 'toastMessage', 'addCart']),

    // 改一改放在後台
    addLotteries (dueDate, isEnabled, name, prizes, recipe, rules, startDate) {
      const reference = ref(db, 'lotteries/')
      // push 自動生成 亂數 id
      const newUserRef = push(reference)

      set(newUserRef, {
        dueDate, isEnabled, name, prizes, recipe, rules, startDate
      })
    },
    // 取得食譜 前 10
    getPopularRecipes () {
      const dataRef = ref(db, 'recipes/')
      onValue(dataRef, snapshot => {
        let recipes = snapshot.val()
        // 把物件轉成陣列 並填入id
        recipes = Object.entries(recipes).map(item => {
          item[1].id = item[0]
          return item[1]
        })
        console.log(recipes, '食譜資料')
        // 得到讚數
        const dataRef = ref(db, 'recipeThumbs/')
        onValue(dataRef, snapshot => {
          this.thumbs = snapshot.val()
          console.log(this.thumbs, '所有讚')

          // 把讚數填入
          recipes.forEach((recipe, index) => {
            Object.keys(this.thumbs).forEach(thumbId => {
              if (recipe.id === thumbId) {
                recipes[index].thumbs = this.thumbs[recipe.id].thumbs
              }
            })
          })
          recipes.forEach((recipe, index) => {
            if (!recipe.thumbs) {
              recipes[index].thumbs = 0
            }
          })
          this.popularRecipes = recipes.sort((a, b) => {
            return b.thumbs - a.thumbs
          })
          this.popularRecipes = this.popularRecipes.slice(0, 10)
          console.log(this.popularRecipes, '熱門食譜')
        })
      })
    },
    // 取得產品 前 10 收藏還沒做
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
          // 優選食材
          this.goodProducts = this.products.filter(product => product.averageRate >= 4)
          // 特價商品
          this.onSaleProducts = this.products.filter(product => product.isCheaper === true)
        })
      })
    },
    // 取得抽獎
    getLotteries () {
      const dataRef = ref(db, 'lotteries/')
      onValue(dataRef, snapshot => {
        const lotteries = snapshot.val()
        this.lottery = Object.values(lotteries).filter(lottery => lottery.isEnabled === true)
        this.lottery = this.lottery[0]
        console.log(this.lottery, '抽獎資料')
      })
    },
    // 取得食譜收藏
    // 需要驗證
    getRecipeBookmarks () {
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
            const dataRef = ref(db, `recipeBookmarks/${this.uid}`)
            onValue(dataRef, snapshot => {
              this.recipeBookMarks = snapshot.val()
              if (this.recipeBookMarks) {
                // 只取 id
                this.recipeBookMarks = Object.keys(this.recipeBookMarks)
              }
              console.log(this.recipeBookMarks, '食譜書籤')
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
    getProductBookmarks () {
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
              this.productBookmarks = snapshot.val()
              if (this.productBookmarks) {
                // 只取 id
                this.productBookmarks = Object.keys(this.productBookmarks)
              }
              console.log(this.productBookmarks, '產品書籤')
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
    // 增加所有收藏
    // 食譜 recipeBookmarks
    // 產品 productBookmarks
    addBookmark (bookMark, item) {
      if (!this.uid) {
        this.toastMessage('登入才可使用收藏功能', 'error')
        return
      }
      const reference = ref(db, `${bookMark}/${this.uid}/${item.id}`)
      set(reference, item)
      this.toastMessage('收藏成功')
    },
    // 刪除所有收藏
    deleteBookmark (bookMark, itemId) {
      remove(ref(db, `${bookMark}/${this.uid}/${itemId}`))
      this.toastMessage('刪除收藏')
    },
    // 搜尋食譜
    searchRecipes () {
      // 兩個頁面傳遞參數
      // this.$router.push('/recipes')
      this.$router.push({
        name: 'RecipesView',
        query: {
          searchName: this.recipeSearchName,
          category: this.selectItem,
          valueHighOrLow: this.highOrLow,
          valuePriceOrRate: this.priceOrRate
        }
      })
    },
    linkToLottery () {
      // 兩個頁面傳遞參數
      this.$router.push({
        name: 'discountsView',
        query: {
          tabName: '抽獎回饋'
        }
      })
    }
  },
  mounted () {
    this.getRecipeBookmarks()
    this.getProductBookmarks()
    // this.$refs.loadingModal.show()
    this.getPopularRecipes()
    // getRecipes
    this.getLotteries()
    this.getProducts()
    // this.checkLogin()

    // this.getAllProductRates()
  },
  // computed: {
  //   ...mapState(cartStore, ['token', 'userId', 'uid'])
  // },
  // 透過watch 取得值 就關閉 modal
  watch: {
    goodProducts () {
      if (this.goodProducts) {
        this.$refs.loadingModal.hide()
      }
    }
  }
}
</script>
<template>
  <!-- style="overflow-x: hidden;" -->
  <!-- position-relative -->
    <div class="" style="overflow-x: hidden;">
        <LoadingModal ref="loadingModal" ></LoadingModal>

        <section class="banner">
          <!-- banner裡面的東西 -->
          <div class="container d-flex  flex-column justify-content-lg-center align-items-lg-start align-items-center bannerContent">
            <div class="mt-5 mb-lg-8">
              <h1 class="fw-bold lh-base h1Text" style="letter-spacing:10px;">甜點食譜加材料<br>
                一次購足好簡單
              </h1>
              <p class="text-center text-lg-start mb-0">用最優惠的價格<br class="d-block d-lg-none"> 享受最高品質的食材</p>
            </div>
            <div class="col-5 d-none d-lg-block">
                <!-- 把搜尋的值傳到食譜那裡 怎麼傳 用MIXIN 或是 pinia -->
              <p class="mb-0"><img src="../../assets/images/icon-speaker.png" style="height: 30px;" alt="">免費觀看甜點食譜及教學，立即搜索心儀食譜！</p>
              <div class="card" style="border-color: #C0AB8E;">
                <div class="card-body">
                  <div class="row">
                    <div class="col-4 border-end border-red">
                      <p class="card-title mb-0" style="font-size: 14px;">種類</p>
                      <select name="全部" id="" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="selectItem">
                        <option selected >全部</option>
                        <option value="台式甜點">台式甜點</option>
                        <option value="法式甜點">法式甜點</option>
                        <option value="美式甜點">美式甜點</option>
                        <option value="日式甜點">日式甜點</option>
                        <option value="義式甜點">義式甜點</option>
                      </select>
                    </div>
                    <div class="col-4 border-end border-red">
                      <p class="card-title mb-0" style="font-size: 14px;">成本或評價</p>
                      <select name="全部" id="" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="priceOrRate">
                        <option value="成本">成本</option>
                        <option value="評價">評價</option>
                      </select>
                    </div>
                    <div class="col-4 border-red">
                      <p class="card-title mb-0" style="font-size: 14px;">由高到低或由低到高</p>
                      <select name="全部" id="" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="highOrLow">
                        <option value="不拘" selected>不拘</option>
                        <option value="高到低">高到低</option>
                        <option value="低到高">低到高</option>
                      </select>
                    </div>
                  </div>

                </div>
                <div class="card-footer bg-white border-0 position-relative">
                  <div class="border rounded-pill border-lightBrown">
                    <input type="search" class="form-control border-0 rounded-pill " placeholder="請輸入甜點名稱" v-model="recipeSearchName" @keyup.enter="searchRecipes" style="width: 90%;">
                    <button type="submit" class="border-0 bg-transparent position-absolute translate-middle end-0" style="top:30px" @click="searchRecipes">
                    <span class="material-icons-outlined text-lightBrown">search</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- 熱門食譜 -->
        <section class="py-10" data-aos="fade-right">
          <div class="container">
            <h2 class="display-6 fw-bold d-flex flex-column-reverse flex-lg-row align-items-center mb-4 justify-content-center justify-content-lg-start">
              <div class="d-flex align-items-center">
                <img src="../../assets/images/image1.png" class="me-lg-4 me-2 titleImg" alt="">
                <span class="recipeTitle">門食譜</span>
              </div>
              <span class="mb-2 mb-lg-0 h6 ms-2 speakerText d-flex align-items-center">
                <img src="../../assets/images/icon-speaker.png" class="speaker" alt="">
                一鍵購買甜點材料包～
              </span>

            </h2>
          </div>
          <!-- style="overflow-x: hidden;" -->
          <div class="d-flex flex-column align-items-center" >
            <!-- 內容 為甚麼點進去之後再回到首頁尺寸會縮小???? => 要用 !important固定 -->
            <!-- 桌機 橫向 -->
            <div class="d-none d-md-none d-lg-block container horizontalSwiper">
              <swiper :slides-per-view="4" :space-between="25"
              :modules="modules"
              navigation
              style="height: 380px;"
              >
                <swiper-slide v-for="recipe in popularRecipes" :key="recipe.id" style="cursor: pointer;">
                  <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px; ">
                    <!-- position-absolute 所以card-footer會跑上來  -->
                    <div class="position-absolute cardImg" style="border-radius: 20px; width: 100%; height: 220px;">
                      <RouterLink :to="`/recipes/${recipe.id}`" class="enlargeImg" style="border-radius: 20px;" >
                      <!-- 圖片要加 !important; 不然點了連結回到首頁會變小 -->
                      <!-- 位移的問題加了 position-absolute  top-0 就好了 可是圖片會不見 -->
                      <img :src="recipe.image" class="position-absolute top-0 card-img border-0" style="border-radius: 20px; object-fit: cover; height: 220px !important;" alt="">
                      </RouterLink>
                    </div>
                    <h5 class="card-text">
                        <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent top-0 end-0 m-3" @click="()=>addBookmark('recipeBookmarks',recipe)">
                          <img src="../../assets/images/image5.png" style="width: 36px !important;">
                        </button>
                        <div v-for="mark in recipeBookMarks" :key="mark">
                          <button v-if="mark === recipe.id" type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent top-0 end-0 m-3" @click="()=>deleteBookmark('recipeBookmarks', recipe.id)">
                              <img src="../../assets/images/image4.png" style="width: 36px !important;">
                          </button>
                        </div>
                        <span style="pointer-events: none; top: 155px;" class="badge rounded-pill bg-red mt-4 border-0 ms-3 position-absolute start-0">{{ recipe.category }}</span>
                    </h5>
                    <RouterLink :to="`/recipes/${recipe.id}`" class="card-footer bg-transparent border-0 text-decoration-none link-darkBrown" style="margin-top: 220px;">
                      <div class="d-flex justify-content-between align-items-center">
                        <h5 class="fw-bold mb-0">{{recipe.title}}</h5>
                        <p class="mb-0 h5">
                          <span class="badge rounded-pill text-red border border-red">
                            {{ recipe.thumbs }}
                            <i class="bi bi-hand-thumbs-up-fill" ></i>
                          </span>
                        </p>
                      </div>
                      <div class="col-12 d-flex">
                        <del class="me-2 text-muted mt-1" :class="{'d-none': recipe.price === recipe.total}">NT$ {{ numberComma(recipe.total) }}</del>
                        <span class=" mt-1"> <span :class="{'text-danger':recipe.price !== recipe.total, 'fw-bold':recipe.price !== recipe.total}">NT$ {{ numberComma(recipe.price) }}</span> / {{ recipe.content }}</span>
                      </div>
                    </RouterLink>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <!-- 手機 直向 -->
            <div class="d-lg-none d-md-block container verticalSwiper" >
              <swiper :slides-per-view="4" :space-between="10"
              :modules="modules"
              navigation
              direction="vertical"
              style="height: 1400px;"
              >
                <swiper-slide v-for="recipe in popularRecipes" :key="recipe.id" style="cursor: pointer;">
                  <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px;">
                    <div class="position-absolute cardImg" style="border-radius: 20px; width: 100%; height: 220px;">
                      <RouterLink :to="`/recipes/${recipe.id}`" class="enlargeImg position-absolute top-0" style=" width: 100%; border-radius: 20px;">
                        <!-- 圖片要加 !important; 不然點了連結回到首頁會變小 -->
                        <img :src="recipe.image" class="card-img" style="border-radius: 20px; object-fit: cover; height: 220px !important;" alt="">
                      </RouterLink>
                    </div>
                    <h5 class="card-text">
                        <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent top-0 end-0 m-3" @click="()=>addBookmark('recipeBookmarks', recipe)">
                          <img src="../../assets/images/image5.png" style="width: 36px !important;">
                        </button>
                        <div v-for="mark in recipeBookMarks" :key="mark">
                          <button v-if="mark === recipe.id" type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-3"  @click="()=>deleteBookmark('recipeBookmarks', recipe.id)">
                              <img src="../../assets/images/image4.png" style="width: 36px !important;">
                          </button>
                        </div>
                        <span style="pointer-events: none; top: 155px;" class="badge rounded-pill bg-red mt-4 border-0 ms-3 position-absolute start-0">{{ recipe.category }}</span>
                    </h5>
                    <RouterLink :to="`/recipes/${recipe.id}`" class="card-footer  bg-transparent border-0 text-decoration-none link-darkBrown" style="margin-top: 220px;">
                      <div class="d-flex justify-content-between align-items-center">
                        <h5 class="fw-bold mb-0" style="font-size: 16px;">{{recipe.title}}</h5>
                        <span class="badge rounded-pill text-red border border-red">
                          {{ recipe.thumbs }}
                          <i class="bi bi-hand-thumbs-up-fill" ></i>
                        </span>
                      </div>
                      <div class="col-12 d-flex" style="font-size: 14px;">
                        <del class="me-2 text-muted mt-1" :class="{'d-none': recipe.price === recipe.total}">NT$ {{ numberComma(recipe.total) }}</del>
                        <span class=" mt-1"> <span :class="{'text-danger':recipe.price !== recipe.total, 'fw-bold':recipe.price !== recipe.total}">NT$ {{numberComma(recipe.price)}}</span> / {{ recipe.content }}</span>
                      </div>
                    </RouterLink>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
            <div class="d-flex">
                <RouterLink to="/recipes" type="button" class="d-lg-none btn btn-red rounded-pill px-4 mx-auto mt-3">
                  更多食譜
                </RouterLink>
              </div>
          </div>
        </section>

        <!-- bg-lightYellow -->
        <section class="py-10 px-3 bg-lightYellow " style="background-color: #ffe3d5;">
          <div class="container bg-white py-lg-5 py-4" style="border-radius: 20px;"  data-aos="zoom-in-right">
            <h2 class="h4 fw-bold text-center mb-4 questionTitle">總是花錢花時間 尋找甜點材料嗎？</h2>
            <div class="px-5">
              <div class="row row-cols-1 row-cols-lg-3 gy-4">
                <div class="col ps-lg-5 d-flex flex-column flex-lg-row  align-items-center">
                  <div class="mb-2 me-lg-3">
                    <img src="../../assets/images/icon-money.png" style="height: 48px;" alt="">
                  </div>
                  <span class="h5 questions">
                    花了錢卻買不到好食材...
                  </span>
                </div>
                <div class="col ps-lg-5 d-flex flex-column flex-lg-row  align-items-center">
                  <div class="mb-2 me-lg-3">
                    <img src="../../assets/images/icon-time.png" style="height: 48px;" alt="">
                  </div>
                  <span class="h5 questions">
                    花時間找尋食材卻找不到...
                  </span>
                </div>
                <div class="col  ps-lg-5 d-flex flex-column flex-lg-row  align-items-center">
                  <div class="mb-2 me-lg-3">
                    <img src="../../assets/images/icon-box.png" style="height: 48px;" alt="">
                  </div>
                  <span class="h5 questions">
                    大包裝食材用不完好煩惱...
                  </span>
                </div>
              </div>
            </div>

          </div>
          <div class="container pt-10">
            <h2 data-aos="zoom-in" class="fw-bold fixedTitle mb-4 text-center">
              一站解決你的所有問題
            </h2>
            <div class="fixedQ row g-4 row-cols-lg-2 justify-content-center">
              <div class="col-lg-5" data-aos="zoom-in-right">
                <div class="card border-0 shadow" style="border-radius: 20px;">
                  <img src="../../assets/images/feature-image1.png" style="border-radius: 20px;" class="card-img" alt="...">
                  <div class="card-img-overlay d-flex flex-column justify-content-end" style=" border-radius: 20px;">
                    <h5 class="card-title fw-bold contentTitle">立即取得食譜材料</h5>
                    <p class="card-text">使用首頁上方搜尋欄尋找食譜，所有食譜皆有列出製作材料、工具，點擊購買即可一次買齊。</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5"  data-aos="zoom-in-left">
                <div class="card border-0 shadow" style="border-radius: 20px;">
                  <img src="../../assets/images/feature-image2.png" style="border-radius: 20px;" class="card-img" alt="...">
                  <div class="card-img-overlay d-flex flex-column justify-content-end" style="border-radius: 20px;">
                    <h5 class="card-title  fw-bold contentTitle">便宜且份量適中的食材</h5>
                    <p class="card-text" >提供甜點食譜組合包，讓您輕鬆選購需要的材料數量，不須擔心買到過多的食材也省下很多錢。</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5" data-aos="zoom-in-right">
                <div class="card border-0 shadow" style="border-radius: 20px;">
                  <img src="../../assets/images/feature-image3.png" style="border-radius: 20px;" class="card-img" alt="...">
                  <div class="card-img-overlay d-flex flex-column justify-content-end" style=" border-radius: 20px;">
                    <h5 class="card-title  fw-bold contentTitle">甜點食譜＋影片教學</h5>
                    <p class="card-text" >免費甜點食譜和完整講解的影片教學，一定帶你學到會！不上烘焙課也能有良好的製作體驗。</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-5" data-aos="zoom-in-left">
                <div class="card border-0 shadow" style="border-radius: 20px;">
                  <img src="../../assets/images/feature-image4.png" style="border-radius: 20px;" class="card-img" alt="...">
                  <div class="card-img-overlay d-flex flex-column justify-content-end" style=" border-radius: 20px;">
                    <h5 class="card-title fw-bold contentTitle">優惠不間斷</h5>
                    <p class="card-text" >消費滿千元免運費！
                      每月抽獎活動，享價值千元以上好禮！買越多賺越多！</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
        <!-- 優選食材 -->
        <section class="py-10" data-aos="fade-right">
          <div class="container ">
            <h2 class="display-6 fw-bold d-flex align-items-center mb-4 d-flex flex-column-reverse flex-lg-row align-items-center mb-4 justify-content-center justify-content-lg-start">
              <div class="d-flex align-items-center">
                <div class="d-lg-block d-none me-4 rounded-circle text-center pt-2 position-relative" style="background-color: #FAE8D0; width: 64px; height: 64px; vertical-align: middle; font-size: 45px;">
                  優
                  <div class="position-absolute top-50 start-50" style="background-color: #F5AE4C; width: 4px; height: 9px; transform:rotate(330deg); margin-left: 14px; margin-top: 1px;">
                  </div>
                </div>
                <div class="d-lg-none me-2 rounded-circle text-center pt-1 position-relative" style="background-color: #FAE8D0; width: 36px; height: 36px; font-size: 24px;">
                  優
                  <div class="position-absolute top-50 start-50" style="background-color: #F5AE4C; width: 2.5px; height: 5px; transform:rotate(330deg); margin-left: 7.4px; margin-top: -1px;">
                  </div>
                </div>
                <span class="recipeTitle">選食材</span>
              </div>
              <span class="light-red mb-lg-0 mb-2 h6 ms-2 speakerText d-flex align-items-center">
                <img src="../../assets/images/icon-speaker.png" class="speaker" alt="">
                總消費額滿500即可獲得1次抽獎機會!
              </span>
            </h2>
          </div>
          <div class="d-flex flex-column align-items-center" >
            <!-- 桌面 橫向 -->
            <!-- 收藏讀不到 -->
            <div class="d-none d-md-none d-lg-block container horizontalSwiper">
                <swiper :slides-per-view="4" :space-between="25"
                :modules="modules"
                navigation
                style="height: 380px;"
                >
                  <swiper-slide v-for="product in goodProducts" :key="product.id" style="cursor: pointer;">
                    <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px;">
                      <div class="position-absolute cardImg" style=" width: 100%; border-radius: 20px; height: 220px;">
                        <RouterLink :to="`/products/${product.id}`" class="enlargeImg">
                          <img :src="product.imgUrl" class="position-absolute top-0 card-img" style="border-radius: 20px; object-fit: cover;  max-width: 100%; max-height: 100%; height:220px !important;" alt="">
                        </RouterLink>
                      </div>

                <h5 class="card-text">
                  <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent top-0 end-0 m-3" @click="()=>addBookmark('productBookmarks' ,product)">
                    <img src="../../assets/images/image5.png" style="width: 36px !important;">
                  </button>
                  <span v-if="product.isCheaper" style="pointer-events: none; font-size: 14px;" class="d-flex flex-column align-items-center text-white p-2 bg-red border me-3 position-absolute top-0 start-0 m-3 rounded">
                    {{ (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))) % 10 === 0 ? (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))).toString().charAt(0) : 100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)) }} 折
                  </span>
                  <div v-for="mark in productBookmarks" :key="mark">
                    <button v-if="mark === product.id" type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent top-0 end-0 m-3"  @click="()=>deleteBookmark('productBookmarks', product.id)">
                        <img src="../../assets/images/image4.png" style="width: 36px !important;">
                    </button>
                  </div>
                  <button @click="()=>addCart(product)" type="button" class="buyBtn border-0 bg-transparent me-2 position-absolute end-0" style="top: 155px;">
                    <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="" class="rounded-circle shadow-sm">
                  </button>
                </h5>
                <RouterLink :to="`/products/${product.id}`" class="card-footer bg-transparent border-0 text-decoration-none link-darkBrown" style="margin-top: 220px;">
                  <h5 class="h5 fw-bold">{{product.title}}</h5>
                    <div class="d-flex align-items-center justify-content-between">
                      <div>
                        <del v-if="product.originalPrice" class="me-2 text-muted " :class="{'d-none': !product.isCheaper}">NT$ {{ numberComma(product.originalPrice) }}</del>
                        <span v-if="product.price" class=" "> <span :class="{'text-danger':product.isCheaper, 'fw-bold':product.isCheaper}">NT$ {{ numberComma(product.price)}}</span> / {{ product.num }}{{ product.unit }}</span>
                      </div>
                      <h5 class="mb-0">
                        <div class="badge rounded-pill border border-orange">
                          <span class="me-1 text-orange">
                            {{ product.averageRate }}
                          </span>
                          <i class="bi bi-star-fill text-orange"></i>
                        </div>
                      </h5>
                    </div>
                </RouterLink>
                    </div>
                  </swiper-slide>

                </swiper>
            </div>

            <!-- 手機 直向 -->
            <div class="d-lg-none d-md-block container verticalSwiper">
                <swiper :slides-per-view="4" :space-between="10"
                :modules="modules"
                navigation
                direction="vertical"
                style="height: 1400px;"
                >
                  <swiper-slide v-for="product in goodProducts" :key="product.id" style="cursor: pointer;">
                    <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px;">
                      <div class="position-absolute cardImg" style="border-radius: 20px; width: 100%; height: 220px;">
                        <RouterLink :to="`/products/${product.id}`" class="enlargeImg position-absolute top-0" style="width: 100%;border-radius: 20px;">
                          <img :src="product.imgUrl" class="card-img" style="border-radius: 20px; object-fit: cover; height: 220px !important;" alt="">
                        </RouterLink>
                      </div>
                <h5 class="card-text">
                  <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent end-0 top-0 m-3" @click="()=>addBookmark('productBookmarks' ,product)">
                    <img src="../../assets/images/image5.png" style="width: 36px !important;">
                  </button>
                  <span v-if="product.isCheaper" style="pointer-events: none; font-size: 14px;" class="d-flex flex-column align-items-center text-white p-2 bg-red border me-3 position-absolute top-0 start-0 m-3 rounded">
                    {{ (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))) % 10 === 0 ? (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))).toString().charAt(0) : 100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)) }} 折
                  </span>
                  <div v-for="mark in productBookmarks" :key="mark">
                    <button v-if="mark === product.id" type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-3"  @click="()=>deleteBookmark('productBookmarks', product.id)">
                        <img src="../../assets/images/image4.png" style="width: 36px !important;">
                    </button>
                  </div>
                  <button @click="()=>addCart(product)" type="button" class="buyBtn border-0 bg-transparent me-2 position-absolute end-0" style="top: 155px;">
                    <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="" class="rounded-circle shadow-sm">
                  </button>
                </h5>
                <RouterLink :to="`/products/${product.id}`" class="card-footer bg-transparent border-0 text-decoration-none link-darkBrown" style="margin-top: 220px;">
                  <h5 class="fw-bold" style="font-size: 16px;">{{product.title}}</h5>
                    <div class="d-flex align-items-center justify-content-between">
                      <p class="mb-0" style="font-size: 14px;">
                        <del v-if="product.originalPrice" class="me-2 text-muted " :class="{'d-none': !product.isCheaper}">NT$ {{ numberComma(product.originalPrice) }}</del>
                      <span v-if="product.price" class=" "> <span :class="{'text-danger':product.isCheaper, 'fw-bold':product.isCheaper}">NT$ {{ numberComma(product.price)}}</span> / {{ product.num }}{{ product.unit }}</span>
                      </p>
                        <div class="badge rounded-pill border border-orange">
                          <span class="me-1 text-orange">
                            {{ product.averageRate }}
                          </span>
                          <i class="bi bi-star-fill text-orange"></i>
                        </div>
                    </div>
                </RouterLink>
              </div>
                  </swiper-slide>

                </swiper>
            </div>
            <div class="d-flex">
              <RouterLink to="/products" type="button" class="d-lg-none btn btn-red rounded-pill px-4 mx-auto mt-3">
                更多商品
              </RouterLink>
            </div>
          </div>

        </section>

        <!-- 特價商品 -->
        <section class="py-10" style="background-color: #FBF8F3;" data-aos="fade-right">
          <div class="container">
            <h2 class="display-6 fw-bold d-flex align-items-center mb-4 d-flex flex-column-reverse flex-lg-row align-items-center mb-4 justify-content-center justify-content-lg-start">
              <div class="d-flex align-items-center">
                <img src="../../assets/images/title2.png" class="me-lg-4 me-2 titleImg " alt="">
                <span class="recipeTitle">價商品</span>
              </div>
              <span class="light-red mb-lg-0 mb-2 h6 ms-2 speakerText d-flex align-items-center">
                <img src="../../assets/images/icon-speaker.png" class="speaker" alt="">
                總消費額滿500即可獲得1次抽獎機會!
              </span>
            </h2>
          </div>
          <div class="d-flex flex-column align-items-center" >
            <!-- 桌面橫向 -->
            <div class="d-none d-md-none d-lg-block container horizontalSwiper">
                <swiper :slides-per-view="4" :space-between="25"
                :modules="modules"
                navigation
                style="height: 380px;"
                >
                  <swiper-slide v-for="product in onSaleProducts" :key="product.id" style="cursor: pointer;">
                    <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px;">
                      <div class="position-absolute cardImg" style="width: 100%; border-radius: 20px; height: 220px;">
                        <RouterLink :to="`/products/${product.id}`" class="enlargeImg">
                          <img :src="product.imgUrl" class="position-absolute top-0 card-img" style="border-radius: 20px; object-fit: cover;  max-width: 100%; max-height: 100%; height: 220px !important;;" alt="">
                        </RouterLink>
                      </div>
                      <h5 class="card-text">
                        <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent top-0 end-0 m-3" @click="()=>addBookmark('productBookmarks', product)">
                          <img src="../../assets/images/image5.png" style="width: 36px !important;">
                        </button>
                        <span v-if="product.isCheaper" style="pointer-events: none; font-size: 14px;" class="d-flex flex-column align-items-center text-white p-2 bg-red border me-3 position-absolute top-0 start-0 m-3 rounded">
                          {{ (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))) % 10 === 0 ? (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))).toString().charAt(0) : 100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)) }} 折
                        </span>
                        <div v-for="mark in productBookmarks" :key="mark">
                          <button v-if="mark === product.id" type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-3"  @click="()=>deleteBookmark('productBookmarks', product.id)">
                              <img src="../../assets/images/image4.png" style="width: 36px !important;">
                          </button>
                        </div>
                        <button @click="()=>addCart(product)" type="button" class="buyBtn border-0 bg-transparent me-3 position-absolute end-0" style="top: 155px;">
                          <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="" class="rounded-circle shadow-sm">
                        </button>
                      </h5>
                      <RouterLink :to="`/products/${product.id}`" class="card-footer bg-transparent border-0 text-decoration-none link-darkBrown" style="margin-top: 220px;">
                        <h5 class="fw-bold">
                          {{product.title}}
                        </h5>
                        <div class="d-flex align-items-center">
                          <div>
                            <del v-if="product.originalPrice" class="me-2 text-muted" :class="{'d-none': !product.isCheaper}">NT$ {{ numberComma(product.originalPrice) }}</del>
                            <span v-if="product.price" class=""> <span :class="{'text-danger':product.isCheaper, 'fw-bold':product.isCheaper}">NT$ {{ numberComma(product.price)}}</span> / {{ product.num }}{{ product.unit }}</span>
                          </div>
                          <h5 class="ms-auto mb-0">
                            <div class="badge border rounded-pill bg-white " :class="{'text-orange': product.averageRate, 'border-orange': product.averageRate, 'text-lightBrownGray': !product.averageRate, 'border-lightBrownGray': !product.averageRate}">
                              <span class="me-1">
                              {{ product.averageRate }}
                              </span>
                              <i class="bi bi-star-fill"></i>
                            </div>
                          </h5>
                        </div>
                      </RouterLink>
                    </div>
                  </swiper-slide>
                </swiper>
            </div>
            <!-- 手機直向 -->
            <div class="d-lg-none d-md-block container verticalSwiper">
                <swiper :slides-per-view="4" :space-between="10"
                :modules="modules"
                navigation
                direction="vertical"
                style="height: 1400px;"
                >
                  <swiper-slide v-for="product in onSaleProducts" :key="product.id" style="cursor: pointer;">
                    <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px;">
                      <div class="position-absolute cardImg" style="border-radius: 20px; width: 100%; height: 220px;">
                        <RouterLink :to="`/products/${product.id}`" class="enlargeImg position-absolute top-0" style="width: 100%;border-radius: 20px;">
                          <img :src="product.imgUrl" class="card-img" style="border-radius: 20px; object-fit: cover; height: 220px !important;" alt="">
                        </RouterLink>
                      </div>
                <h5 class="card-text">
                  <button type="button" class="position-absolute bookmarkBtn border-0 bg-transparent top-0 end-0 m-3" @click="()=>addBookmark('productBookmarks', product)">
                    <img src="../../assets/images/image5.png" style="width: 36px !important;">
                  </button>
                  <span v-if="product.isCheaper" style="pointer-events: none; font-size: 14px;" class="d-flex border flex-column align-items-center text-white p-2 bg-red me-3 position-absolute top-0 start-0 m-3 rounded">
                    {{ (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))) % 10 === 0 ? (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))).toString().charAt(0) : 100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)) }} 折
                  </span>
                  <div v-for="mark in productBookmarks" :key="mark">
                    <button v-if="mark === product.id" type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-3"  @click="()=>deleteBookmark('productBookmarks' ,product.id)">
                        <img src="../../assets/images/image4.png" style="width: 36px !important;">
                    </button>
                  </div>
                  <button @click="()=>addCart(product)" type="button" class="buyBtn border-0 bg-transparent me-3 position-absolute end-0" style="top: 155px;">
                    <img src="../../assets/images/icon-cart.png" style="height: 48px;" alt="" class="rounded-circle shadow-sm">
                  </button>
                </h5>
                <RouterLink :to="`/products/${product.id}`" class="card-footer bg-transparent border-0 text-decoration-none link-darkBrown" style="margin-top: 220px;">
                        <h5 class="fw-bold" style="font-size: 16px;">
                          {{product.title}}
                        </h5>
                        <div class="d-flex align-items-center justify-content-between" style="font-size: 14px;">
                          <div>
                            <del v-if="product.originalPrice" class="me-2 text-muted mt-1" :class="{'d-none': !product.isCheaper}">NT$ {{ numberComma(product.originalPrice) }}</del>
                            <span v-if="product.price" class=" mt-1"> <span :class="{'text-danger':product.isCheaper, 'fw-bold':product.isCheaper}">NT$ {{ numberComma(product.price)}}</span> / {{ product.num }}{{ product.unit }}</span>
                          </div>
                          <div class="badge border rounded-pill bg-white" :class="{'text-orange': product.averageRate, 'border-orange': product.averageRate, 'text-lightBrownGray': !product.averageRate, 'border-lightBrownGray': !product.averageRate}">
                            <span class="me-1">
                            {{ product.averageRate }}
                            </span>
                            <i  class="bi bi-star-fill"></i>
                          </div>
                        </div>
                </RouterLink>
              </div>
                  </swiper-slide>

                </swiper>
            </div>
            <div class="d-flex">
              <RouterLink to="/products" type="button" class="d-lg-none btn btn-red rounded-pill px-4 mx-auto mt-3">
                更多商品
              </RouterLink>
            </div>
          </div>
        </section>

        <!-- 本月獎品一覽  -->
        <section class="py-10 "  data-aos="zoom-in">
          <div class="container">
            <h2 class="display-6 fw-bold d-flex align-items-center mb-4 justify-content-center justify-content-lg-start">
              <div class="d-flex align-items-center">
                <div class="d-lg-block d-none me-4 rounded-circle text-center pt-2 position-relative" style="background-color: #FAE8D0; width: 64px; height: 64px; vertical-align: middle; font-size: 45px;">
                  本
                  <div class="position-absolute" style="background-color: #F5AE4C; width: 25px; height: 5px; top: 41px; right: 20px;">
                  </div>
                </div>
                <div class="d-lg-none me-2 rounded-circle text-center pt-1 position-relative" style="background-color: #FAE8D0; width: 36px; height: 36px; font-size: 24px;">
                  本
                  <div class="position-absolute" style="background-color: #F5AE4C; width: 12px; height: 3px; top: 21px; right: 12px;">
                  </div>
                </div>
                <span class="recipeTitle">月獎品</span>
              </div>
              <button class="d-none d-lg-block btn btn-red rounded-pill" @click="linkToLottery">
                立即抽獎
              </button>
            </h2>
          </div>
          <!-- 抽獎 -->
            <div class="container">
            <div class="prizes row row-cols-lg-3 row-cols-1 gy-4 ">
              <div class="col" v-for="prize in lottery.prizes" :key="prize.id" data-aos="flip-right">
                <div class="card position-relative border-0" style="border-radius: 20px;">
                  <div class="card-header border-0 h4 fw-bold text-center mb-3 bg-white" >
                    {{ prize.id === 1 ? '大獎' : prize.id === 2 ? '二獎' : '三獎' }}
                  </div>
                  <!-- background: linear-gradient(45deg, rgb(252, 179, 78) 20%, rgb(253,164,72), rgb(255,113,75) 90% ); -->
                  <div class="questionMark  position-absolute d-flex bg-lightYellow" style="top: 60px;  width: 100%; height: 220px; border-radius: 20px; background: linear-gradient(45deg, rgb(252, 179, 78) 20%, rgb(253,164,72), rgb(255,113,75) 90% );">
                    <i class="bi bi-question-lg mx-auto text-white" style="font-size: 150px;"></i>
                  </div>
                  <img :src="prize.img" class="card-img border bg-white" style="border-radius: 20px; height:220px; object-fit: contain;" alt="">
                  <div class="card-footer bg-transparent border-0">
                    <h5 class="fw-bold">
                      {{prize.title}}
                    </h5>
                    <p class="text-end">價值：NT$ {{numberComma(prize.price)}}</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div class="d-flex">
              <button type="button" class="d-lg-none btn btn-red rounded-pill px-4 mx-auto" @click="linkToLottery">
                立即抽獎
              </button>
            </div>
        </section>

    </div>
</template>
<style>
/* 桌面 橫向 swiper 箭頭*/
.horizontalSwiper .swiper-button-next{
  top:95%;
  right:0
}
.horizontalSwiper .swiper-button-next::after{
  margin-left: 50%;
  transform: translateX(-50%);
}
.horizontalSwiper .swiper-button-prev{
  top:95%;
  left: 92%;
}
/* 手機 直向 swiper 箭頭 */
.verticalSwiper .swiper-button-next{
  top:99%;
  right:0
}
.verticalSwiper .swiper-button-next::after{
  margin-left: 50%;
  transform: translateX(-50%);
}
.verticalSwiper .swiper-button-prev{
  top:99%;
  left: 80%;
}
/* 輸入框提示 */
 ::placeholder {
    color: #D3CCC1 !important;
  }

.fixedQ .card{
  position: relative;
}
.fixedQ .card .card-img-overlay{
  background-image: linear-gradient(180deg , transparent, rgba(0, 0, 0,0.1), rgba(244, 143, 3, 0.5));
}

.fixedQ .card:hover .card-img-overlay{
  background-image: linear-gradient(180deg , transparent, rgba(255, 255, 255,0.2), rgba(255, 255, 255));
}
.fixedQ .card .card-img-overlay h5{
  color: white;
  transition: all ease-in-out 0.4s;
}
.fixedQ .card:hover .card-img-overlay h5{
  color: #493A25 !important;
  transform: translateY(-50px);
  transition: all ease-in-out 0.4s;
}

/* 不能用 display:block 和 none 不然沒有漸變效果 */
.fixedQ .card .card-img-overlay p {
  position: absolute;
  bottom: 0;
  opacity: 0;
  transform: translateY(30px);
}

.fixedQ .card:hover .card-img-overlay p {
  opacity: 1;
  bottom: 20px;
  transform: translateY(0);
  transition: all ease-in-out 0.4s;
}

</style>
