<script>
import { RouterLink } from 'vue-router'
import DeleteBookmarksModal from '../../components/DeleteBookmarksModal.vue'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import { db, auth } from '../../firebase/db'
import { ref, onValue, set } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
export default {
  components: {
    RouterLink,
    // DeleteTest
    DeleteBookmarksModal
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      bookMarks: [],
      pageStatus: 'recipe',
      deleteId: '',
      deleteItem: {}, // 刪除資料
      AllproductRates: [],
      averageRate: [],
      rates: {},
      recipeThumbs: [],
      thumbs: {},
      loadingItem: true // 載入中
    }
  },
  methods: {
    ...mapActions(cartStore, ['addCart', 'toastMessage']),
    // 取得個別使用者收藏 - 食譜、產品、文章(還沒)
    getBookmarks (dataName) {
      this.loadingItem = true
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          console.log(this.uid, '使用者已登入取得 uid')

          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            const dataRef = ref(db, `${dataName}/${this.uid}`)
            onValue(dataRef, snapshot => {
              this.bookMarks = snapshot.val()
              if (!this.bookMarks) {
                this.loadingItem = false
                return
              }
              this.bookMarks = Object.values(this.bookMarks)
              console.log(this.bookMarks, '書籤')
              // 得到食譜讚數
              if (this.pageStatus === 'recipe') {
                const dataRef = ref(db, 'recipeThumbs')
                onValue(dataRef, snapshot => {
                  const recipeThumbs = snapshot.val()
                  Object.keys(recipeThumbs).forEach(item => {
                    this.thumbs[item] = Object.values(recipeThumbs[item]).length
                  })
                  console.log(this.thumbs, '所有讚')

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
                  console.log(this.bookMarks, '食譜')
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
                  console.log(rates, '全部產品的評價還未分類產品')
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
                  console.log(this.bookMarks, '加了評分的產品')
                })
              }
              this.loadingItem = false
            })
          })
        } else {
          // User is signed out
          // ...
          console.log('並未登入')
          this.uid = null
          this.user = {}
          if (!this.uid) {
            this.toastMessage('登入才可使用收藏功能', 'error')
            this.$router.push('/login')
          }
          console.log('並未登入')
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
          // console.log(item, Object.values(recipeThumbs[item]), '單個')
        })
        console.log(this.thumbs, '所有讚')

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
        console.log(this.recipes, '食譜')
      })
    }
  },
  mounted () {
    this.getBookmarks('recipeBookmarks')
  },
  watch: {
    pageStatus () {
      console.log(this.pageStatus, '有變化')
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
    <div class="my-10">
        <section class="">
            <ul class="nav nav-tabs container">
            <li class="nav-item" @click="() => pageStatus = 'recipe'">
                <button class="nav-link " :class="{'link-red': pageStatus === 'recipe', 'active': pageStatus === 'recipe'}" type="button" :disabled="loadingItem" ><i class="bi bi-book-half"></i> 食譜收藏</button>
            </li>
            <li class="nav-item" @click="() => pageStatus = 'product'">
                <button class="nav-link" :class="{'link-red': pageStatus === 'product', 'active': pageStatus === 'product'}" type="button" :disabled="loadingItem" ><i class="bi bi-bag-check-fill"></i> 材料收藏</button>
            </li>
            </ul>
        </section>
        <div class="container py-4">
          <!-- 食譜 -->
          <div v-if="pageStatus === 'recipe' && bookMarks && !loadingItem" class="row row-cols-lg-4 row-cols-2 gy-4">
            <div class="col text-decoration-none" v-for="recipe in bookMarks" :key="recipe.id">
              <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px;">
                <div class="cardImg" style="border-radius: 20px;">
                  <RouterLink :to="`/recipes/${recipe.id}`" class="enlargeImg">
                    <img :src="recipe.image" class="card-img" style="border-radius: 20px; object-fit: cover;  max-width: 100%; max-height: 100%;" alt="">
                  </RouterLink>
                </div>
                <h5 class="card-text">
                  <div>
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
                    <span style="pointer-events: none; " class="cardTextCategory badge rounded-pill bg-red mt-4 border-0 m-3 position-absolute start-0">{{ recipe.category }}</span>
                </h5>
                <RouterLink :to="`/recipes/${recipe.id}`" class="card-footer bg-transparent border-0 text-decoration-none link-darkBrown">
                  <h5 class="d-flex justify-content-between align-items-center fw-bold cardTextTitle">
                    <span>{{recipe.title}}</span>
                    <p class="mb-0 badge rounded-pill border" :class="{'border-red': recipe.thumbs !== 0, 'border-lightBrownGray':  recipe.thumbs === 0, 'text-red':recipe.thumbs !== 0,'text-lightBrownGray': recipe.thumbs === 0}">
                      <span class="me-1">{{ recipe.thumbs }}</span>
                      <i class="bi bi-hand-thumbs-up-fill"></i>
                    </p>
                  </h5>
                  <div class="cardTextPrice">
                    <del v-if="recipe.total" class="me-2 text-muted d-block d-lg-inline-block" :class="{'d-none': recipe.price === recipe.total}">NT$ {{ numberComma(recipe.total) }}</del>
                    <span><span v-if="recipe.price" :class="{'text-danger':recipe.price !== recipe.total, 'fw-bold':recipe.price !== recipe.total}">NT$ {{numberComma(recipe.price)}}</span> / {{ recipe.content }}</span>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
          <!-- 產品 -->
          <div v-else-if="pageStatus === 'product' && bookMarks && !loadingItem" class="row row-cols-lg-4 row-cols-2 gy-4">
            <div class="col text-decoration-none" v-for="product in bookMarks" :key="product.id">
              <div class="card position-relative border-0 bg-transparent" style="border-radius: 20px;">
                <div class="cardImg" style="border-radius: 20px;">
                  <RouterLink :to="`/products/${product.id}`" class="enlargeImg">
                    <img :src="product.imgUrl" class="card-img" height="220" style="border-radius: 20px; object-fit: cover;  max-width: 100%; max-height: 100%;" alt="">
                  </RouterLink>
                </div>
                <h5 class="card-text">
                  <div>
                    <button type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2"  @click="()=>openDeleteModal(product.id, product)">
                        <img src="../../assets/images/image4.png">
                    </button>
                  </div>
                  <span v-if="product.isCheaper" style="pointer-events: none; " class="d-flex flex-column align-items-center text-white p-2 bg-red border position-absolute top-0 start-0 rounded">
                    {{ (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))) % 10 === 0 ? (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))).toString().charAt(0) : 100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)) }} 折
                  </span>
                  <!-- 先轉成 string 再取得字串第一個字元 .charAt(0) -->
                  <div v-for="mark in bookMarks" :key="mark">
                    <button v-if="mark === product.id" type="button" class="position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2"  @click="()=>deleteBookmark(product.id)">
                        <img src="../../assets/images/image4.png">
                    </button>
                  </div>
                  <!-- top: 155px; -->
                  <button :disabled="loadingItem === 'loading'" @click="()=>addCart(product)" type="button" class="buyBtn border-0 bg-transparent me-lg-2 me-1 position-absolute end-0" >
                    <img src="../../assets/images/icon-cart.png"  alt="" class="rounded-circle shadow-sm">
                  </button>
                </h5>
                <RouterLink :to="`/products/${product.id}`" class="card-footer bg-transparent border-0 text-decoration-none link-darkBrown">
                  <h5 class="fw-bold cardTextTitle">{{product.title}}</h5>
                  <div class="d-flex align-items-center cardTextPrice">
                    <div class="me-auto">
                      <del v-if="product.originalPrice" class="me-2 text-muted mt-1" :class="{'d-none': !product.isCheaper}">NT$ {{ numberComma(product.originalPrice) }}</del>
                      <span class="mt-1 d-block d-lg-inline-block">
                        <!-- 有折價 -->
                        <span v-if="product.price" :class="{'text-danger':product.isCheaper, 'fw-bold':product.isCheaper}">
                          NT$ {{numberComma(product.price)}}</span> / {{ product.num }}{{ product.unit }}
                      </span>
                    </div>
                    <!--  ms-auto -->
                    <h5 class="mb-0 starRates">
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
            <!-- 載入中 -->
            <div v-else-if="loadingItem" class="d-flex flex-column align-items-center py-10">
              <img src="../../assets/images/loadingLogo.png" class="loadingLogo mb-3" style="width: 150px;" alt="" >
              <h1 class="text-center fw-bold text-lightBrown">
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
            <!-- 沒有書籤 -->
            <div v-if="!loadingItem && !bookMarks" class="py-5 d-flex flex-column align-items-center">
              <img src="../../assets/images/undraw_Appreciation_r2a1.png" class="" alt="" style="height: 250px;">
              <h2 >您尚無任何<span v-if="pageStatus === 'recipe'">食譜</span><span v-else-if="pageStatus === 'product'">材料</span>收藏</h2>
              <RouterLink to="/recipes" v-if="pageStatus === 'recipe'" class="link-red h5">前往瀏覽食譜</RouterLink>
              <RouterLink to="/products" v-else-if="pageStatus === 'product'" class="link-red h5">前往瀏覽食譜材料</RouterLink>
            </div>
        </div>
        <DeleteBookmarksModal :id="deleteId" :item="deleteItem" :page-status="pageStatus" :open-delete-modal="openDeleteModal"></DeleteBookmarksModal>
    </div>
</template>
<style>
 /* .collapse .card input:hover + label{
    background: #C0AB8E !important;
    color: white !important;
  } */
</style>
