<script>
import { RouterLink } from 'vue-router'
import DeleteBookmarksModal from '../../components/DeleteBookmarksModal.vue'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import { db, auth } from '../../firebase/db'
import { ref, onValue, set } from 'firebase/database'
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
      AllproductRates: [],
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

          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
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
                    this.thumbs[item] = Object.values(recipeThumbs[item]).length
                  })

                  // 把讚數填入
                  this.bookMarks.forEach((recipe, index) => {
                    Object.keys(this.thumbs).forEach(thumbId => {
                      if (recipe.id === thumbId) {
                        this.bookMarks[index].thumbs = this.thumbs[recipe.id]
                      }
                    })
                  })
                  this.bookMarks.forEach((recipe, index) => {
                    if (!recipe.thumbs) {
                      this.bookMarks[index].thumbs = 0
                    }
                  })
                })
              } else if (this.pageStatus === 'product') { // 得到產品評價
                // 得到星星評價數
                const dataRef = ref(db, 'productRates/')
                onValue(dataRef, snapshot => {
                  // 先取得所有留言
                  let rates = snapshot.val()
                  rates = Object.values(rates).map((item) => {
                    return Object.values(item)
                  })
                  rates = rates.flat()
                  this.bookMarks.forEach((product, index) => {
                    rates.forEach(item => {
                      if (product.id === item.productId && !this.bookMarks[index].scores) {
                        this.bookMarks[index].scores = item.score
                        this.bookMarks[index].ratePeople = 1
                        this.bookMarks[index].averageRate = Number((this.bookMarks[index].scores / this.bookMarks[index].ratePeople).toFixed(1))
                      } else if (product.id === item.productId && this.bookMarks[index].scores) {
                        this.bookMarks[index].scores += item.score
                        this.bookMarks[index].ratePeople += 1
                        this.bookMarks[index].averageRate = Number((this.bookMarks[index].scores / this.bookMarks[index].ratePeople).toFixed(1))
                      }
                    })
                  })
                  this.bookMarks.forEach((product, index) => {
                    if (!product.averageRate) {
                      this.bookMarks[index].scores = 0
                      this.bookMarks[index].ratePeople = 0
                      this.bookMarks[index].averageRate = 0
                    }
                  })
                })
              }
              this.isLoading = false
            })
          })
        } else {
          // User is signed out
          // ...
          this.uid = null
          this.user = {}
          if (!this.uid) {
            this.toastMessage('登入才可使用收藏功能', 'error')
            this.$router.push('/login')
          }
        }
      })
    },
    // 增加所有收藏
    // 食譜 recipeBookmarks
    // 產品 productBookmarks
    addBookmark (bookMark, item) {
      if (!this.uid) {
        this.toastMessage('登入才可使用收藏功能', 'error')
      }
      const reference = ref(db, `${bookMark}/${this.uid}/${item.id}`)
      set(reference, item)
      this.toastMessage('收藏成功')
    },
    // 打開刪除收藏確認
    openDeleteModal (id, item) {
      this.deleteId = id
      this.deleteItem = item
    },
    getRecipeThumbs () {
      // 得到讚數
      const dataRef = ref(db, 'recipeThumbs')
      onValue(dataRef, snapshot => {
        const recipeThumbs = snapshot.val()
        Object.keys(recipeThumbs).forEach(item => {
          this.thumbs[item] = Object.values(recipeThumbs[item]).length
        })

        // 把讚數填入
        this.recipes.forEach((recipe, index) => {
          Object.keys(this.thumbs).forEach(thumbId => {
            if (recipe.id === thumbId) {
              this.recipes[index].thumbs = this.thumbs[recipe.id]
            }
          })
        })
        this.recipes.forEach((recipe, index) => {
          if (!recipe.thumbs) {
            this.recipes[index].thumbs = 0
          }
        })
      })
    }
  },
  mounted () {
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
    <div class=""  style="overflow-x: hidden;">
      <loading v-if="uid" v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"
                 :lock-scroll="true">
                 <div class="d-flex flex-column align-items-center py-10">
      <img src="../../assets/images/loadingLogo.png" class="loadingLogo mb-3" style="width: 150px;" alt="" >
      <h1 class="text-center fw-bold text-blue">
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
      </h1>
    </div>
        </loading>
        <section class="bannerBg" style="background-image: url('https://images.unsplash.com/photo-1678465952996-e4b010264a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80')">
          <div class="mask">
            <div class="text" style="background: linear-gradient(to bottom, white 50% , #4572c2 50%); -webkit-background-clip: text;">
              我的收藏
            </div>
          </div>
        </section>
        <section class="container  mt-4">
          <ul class="position-relative categorySelector row row-cols-2 gy-2 list-unstyled border-bottom">
              <li class="col d-flex  align-items-center justify-content-center" :class="{'liDisabled': pageStatus === 'recipe'}">
                <a href="#"  @click.prevent="()=>pageStatus = 'recipe'" class="text-decoration-none d-flex flex-column align-items-center link-secondary" :class="{'fw-bold': pageStatus === 'recipe', 'link-blue': pageStatus === 'recipe'}">
                  <img class="bookmarkImg1" v-if="pageStatus !== 'recipe'" src="../../assets/images/book1.png"  alt="">
                  <img v-else-if="pageStatus === 'recipe'" src="../../assets/images/book3.png"  alt="">
                  <span  class="titleSize ">食譜收藏</span>
                </a>
              </li>
              <!-- src="/finalEasyBuyEasyMake/src/assets/images/vegetables3.png" -->
              <li class="col d-flex  align-items-center justify-content-center" :class="{'liDisabled': pageStatus === 'product'}">
                <a href="#"  @click.prevent="()=>pageStatus = 'product'" class="text-decoration-none d-flex flex-column align-items-center link-secondary" :class="{'fw-bold': pageStatus === 'product', 'link-blue': pageStatus === 'product'}">
                  <img class="bookmarkImg2" v-if="pageStatus !== 'product'" src="../../assets/images/fruit1.png"  alt="">
                  <img v-else-if="pageStatus === 'product'" src="../../assets/images/fruit3.png"  alt="">
                  <span  class="titleSize ">材料收藏</span>
                </a>
              </li>
              <li class="redLine bg-blue position-absolute" style="height: 2px; bottom: 0px; left: 5.5%" :class="{'activeDiscount': pageStatus === 'recipe', 'activeGift': pageStatus === 'product'}"></li>
          </ul>
      </section>

        <div class="container  py-4">
          <!-- 食譜 -->
            <!-- 1. 取消所有 border-radius: 20px; -->
                  <!-- 2. 卡片、圖片 border-radius: 0  -->
                  <!-- 3. 卡片取消  border-0 加入 border: 1px solid transparent; -->
                  <!-- 4. footer改成 padding-top: 230px; 食譜、材料 card-text 加入 mb-0 card-footer pt-lg-3 -->
                  <!-- 折價 取消 border rounded  之後可考慮要不要加 shadow-->
                  <!-- 折價手機 fs 改成 10  font-size: 10px; -->
          <div v-if="pageStatus === 'recipe' && bookMarks && !isLoading" class="row row-cols-lg-4 row-cols-2 gy-4">
            <div class="col text-decoration-none" v-for="recipe in bookMarks" :key="recipe.id">
              <div class="card position-relative bg-transparent" style="border-radius: 0; border: 1px solid transparent;">
                <div class="cardImg" style="">
                  <RouterLink :to="`/recipes/${recipe.id}`" class="enlargeImg">
                    <img :src="recipe.image" class="card-img" style="border-radius: 0; object-fit: cover;  max-width: 100%; max-height: 100%;" alt="">
                  </RouterLink>
                </div>
                <h5 class="card-text mb-0">
                  <div>
                    <p class="detail d-none d-lg-block position-absolute fw-bold" style="top: 35%; left: 50%; transform: translateX(-50%); letter-spacing: 5px;">查看詳細食譜</p>

                    <button type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2"  @click="()=>openDeleteModal(recipe.id, recipe)">
                        <img src="../../assets/images/image4.png">
                    </button>
                  </div>
                    <!-- 已收藏狀態 -->
                    <div v-for="mark in bookMarks" :key="mark + 4567">
                      <button v-if="mark === recipe.id" type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2"  @click="()=>deleteBookmark(recipe.id)">
                          <img src="../../assets/images/image4.png">
                      </button>
                    </div>
                    <span style="pointer-events: none; " class="cardTextCategory badge rounded-pill bg-blue mt-4 border-0 m-3 position-absolute start-0">{{ recipe.category }}</span>
                </h5>
                <RouterLink :to="`/recipes/${recipe.id}`" class="pt-lg-3 card-footer bg-transparent border-0 text-decoration-none link-darkBrown">
                  <h5 class="d-flex justify-content-between align-items-center fw-bold">
                    <span class="cardTextTitle">{{recipe.title}}</span>
                  </h5>
                   <div class="cardTextPrice d-flex align-items-lg-center align-items-end">
                    <div class="">
                      <del v-if="recipe.total" class="me-2 text-muted d-block d-lg-inline-block" :class="{'d-none': recipe.price === recipe.total}">NT$ {{ numberComma(recipe.total) }}</del>
                      <span><span v-if="recipe.price" :class="{'text-danger':recipe.price !== recipe.total, 'fw-bold':recipe.price !== recipe.total}">NT$ {{numberComma(recipe.price)}}</span> / {{ recipe.content }}</span>
                    </div>
                    <h5 class="starRates mb-0 ms-auto">
                      <p class=" mb-0 badge rounded-pill border d-flex align-items-center" :class="{'border-blue': recipe.thumbs !== 0, 'border-lightBrownGray':  recipe.thumbs === 0, 'text-blue':recipe.thumbs !== 0,'text-lightBrownGray': recipe.thumbs === 0}">
                        <span class="me-1">{{ recipe.thumbs }}</span>
                        <i class="bi bi-hand-thumbs-up-fill"></i>
                      </p>
                    </h5>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!-- 產品 -->
             <!-- 1. 取消所有 border-radius: 20px; -->
                  <!-- 2. 卡片、圖片 border-radius: 0  -->
                  <!-- 3. 卡片取消  border-0 加入 border: 1px solid transparent; -->
                  <!-- 4. footer改成 padding-top: 230px; 食譜、材料 card-text 加入 mb-0 card-footer pt-lg-3 -->
                  <!-- 折價 取消 border rounded  之後可考慮要不要加 shadow-->
                  <!-- 折價手機 fs 改成 10  font-size: 10px; -->
          <div v-else-if="pageStatus === 'product' && bookMarks && !isLoading" class="row row-cols-lg-4 row-cols-2 gy-4">
            <div class="col text-decoration-none" v-for="product in bookMarks" :key="product.id">
              <div class="card position-relative bg-transparent" style="border-radius: 0; border: 1px solid transparent;">
                <div class="cardImg" style="">
                  <RouterLink :to="`/products/${product.id}`" class="enlargeImg border-0">
                    <img :src="product.imgUrl" class="card-img" height="220" style="border-radius: 0; object-fit: cover;  max-width: 100%; max-height: 100%;" alt="">
                  </RouterLink>
                </div>
                <h5 class="card-text mb-0">
                  <div>
                    <p class="detail d-none d-lg-block position-absolute fw-bold" style="top: 35%; left: 50%; transform: translateX(-50%); letter-spacing: 5px;">查看商品資訊</p>
                    <button type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2"  @click="()=>openDeleteModal(product.id, product)">
                        <img src="../../assets/images/image4.png">
                    </button>
                  </div>
                  <span v-if="product.isCheaper" style="pointer-events: none;" class="d-flex flex-column align-items-center text-white p-2 bg-blue  position-absolute top-0 start-0 ">
                    {{ (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))) % 10 === 0 ? (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))).toString().charAt(0) : 100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)) }} 折
                  </span>
                  <!-- 先轉成 string 再取得字串第一個字元 .charAt(0) -->
                  <div v-for="mark in bookMarks" :key="mark">
                    <button v-if="mark === product.id" type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2"  @click="()=>deleteBookmark(product.id)">
                        <img src="../../assets/images/image4.png">
                    </button>
                  </div>
                  <!-- top: 155px; -->
                  <button :disabled="isLoading === 'loading'" @click="()=>addCart(product)" type="button" class="buyBtn border-0 bg-transparent me-lg-2 me-1 position-absolute end-0" >
                    <img src="../../assets/images/icon-cart.png"  alt="" class="rounded-circle shadow-sm">
                  </button>
                </h5>
                <RouterLink :to="`/products/${product.id}`" class="pt-lg-3 card-footer bg-transparent border-0 text-decoration-none link-darkBrown">
                <h5 class="fw-bold cardTextTitle">{{product.title}}</h5>
                <div class="d-flex align-items-lg-center cardTextPrice" :class="{'align-items-end': product.isCheaper, 'align-items-center': !product.isCheaper}">
                  <div class="">
                    <del v-if="product.originalPrice" class="me-2 text-muted mt-1" :class="{'d-none': !product.isCheaper}">NT$ {{ numberComma(product.originalPrice) }}</del>
                    <span class="mt-1 d-block d-lg-inline-block">
                      <span v-if="product.price" :class="{'text-danger':product.isCheaper, 'fw-bold':product.isCheaper}">
                        NT$ {{numberComma(product.price)}}</span> / {{ product.num }}{{ product.unit }}
                    </span>
                  </div>
                  <h5 class="mb-0 ms-auto starRates">
                    <div class=" badge border rounded-pill bg-white" :class="{'text-yellow': product.averageRate, 'border-yellow': product.averageRate, 'text-lightBrownGray': !product.averageRate, 'border-lightBrownGray': !product.averageRate}">
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
            <!-- 沒有書籤 -->
            <div v-if="!isLoading && !bookMarks" class="py-5 d-flex flex-column align-items-center">
              <img src="../../assets/images/undraw_Appreciation_r2a1.png" class="" alt="" style="height: 250px;">
              <h2 >您尚無任何<span v-if="pageStatus === 'recipe'">食譜</span><span v-else-if="pageStatus === 'product'">材料</span>收藏</h2>
              <RouterLink to="/recipes" v-if="pageStatus === 'recipe'" class="link-blue h5">前往瀏覽食譜</RouterLink>
              <RouterLink to="/products" v-else-if="pageStatus === 'product'" class="link-blue h5">前往瀏覽食譜材料</RouterLink>
            </div>
        </div>
        <DeleteBookmarksModal :id="deleteId" :item="deleteItem" :page-status="pageStatus" :open-delete-modal="openDeleteModal"></DeleteBookmarksModal>
    </div>
</template>
<style>
.categorySelector li a:hover .bookmarkImg1 {
    content: url('@/assets/images/book2.png');
  }
  .categorySelector li a:hover .bookmarkImg2 {
    content: url('@/assets/images/fruit2.png');
  }
 /* .collapse .card input:hover + label{
    background: #C0AB8E !important;
    color: white !important;
  } */
</style>
