<script>
import loadingStore from '../../stores/loadingStore'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { mapActions, mapState, mapGetters } from 'pinia'
import cartStore from '../../stores/carts'
import markStore from '../../stores/bookmark'
import dataStore from '../../stores/mainData'
import fullStar from '../../assets/images/icon-star-filled.png'
import star from '../../assets/images/icon-star.png'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { db } from '../../firebase/db'
import { ref, onValue, set, push } from 'firebase/database'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      productId: '',
      product: {},
      recipes: [],
      relevantRecipesInfo: [],
      fullStar,
      star,
      score: '',
      productRates: [],
      rateMessage: '',
      averageRate: 0,
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
      mainImg: '',
      qty: 1
    }
  },
  methods: {
    ...mapActions(cartStore, ['addCart', 'toastMessage', 'goToTop']),
    ...mapActions(markStore, ['addBookmark', 'deleteBookmark', 'getBookmark']),
    ...mapActions(loadingStore, ['startLoading']),
    ...mapActions(dataStore, ['getRecipes', 'getRates']),
    getAllRateComment () {
      const dataRef = ref(db, 'productRates/')
      onValue(dataRef, snapshot => {
        const rates = snapshot.val()
        this.productRates = Object.values(rates).filter(rate => {
          return rate.productId === this.productId
        })
        let scores = 0
        this.productRates.forEach(item => {
          scores += item.score
        })
        this.averageRate = Number((scores / this.productRates.length).toFixed(1))
      })
    },
    mouseoverStar (num) {
      if (!this.score) {
        for (let i = 1; i <= num; i++) {
          this.$refs[`rate${i}`].src = this.fullStar
        }
      }
    },
    mouseoutStar (num) {
      if (!this.score) {
        for (let i = 1; i <= num; i++) {
          this.$refs[`rate${i}`].src = this.star
        }
      }
    },
    addProductRate () {
      if (!this.score) {
        this.toastMessage('您尚未給予星級評價', 'error')
        return
      }
      const reference = ref(db, 'productRates/')
      const newUserRef = push(reference)
      set(newUserRef, {
        productId: this.product.id,
        createAt: new Date().getTime(),
        score: Number(this.score),
        message: this.rateMessage,
        username: this.user.nickName,
        userImg: this.user.headshotImg
      })
      this.score = null
      this.rateMessage = ''
      this.$refs.form.reset()
      this.toastMessage('評價成功')
    },
    getProduct () {
      return new Promise((resolve, reject) => {
        const dataRef = ref(db, `products/${this.productId}`)
        onValue(dataRef, snapshot => {
          const product = snapshot.val()
          resolve(product)
        })
      })
    },
    async getData () {
      this.product = await this.getProduct()
      this.product.id = this.productId
      this.mainImg = this.product.imgUrl
      this.recipes = await this.getRecipes()
      this.relevantRecipesInfo = Object.values(this.recipes).filter(recipe => {
        return this.product.relevantRecipes.includes(recipe.title)
      })
      this.getBookmark('productBookmarks', this.productId)
    }
  },
  mounted () {
    this.startLoading()
    const { id } = this.$route.params
    this.productId = id
    this.goToTop()
    this.getAllRateComment()
    this.getData()
  },
  watch: {
    score () {
      for (let i = 1; i <= 5; i++) {
        this.$refs[`rate${i}`].src = this.score >= i ? this.fullStar : this.star
      }
    }
  },
  computed: {
    ...mapState(cartStore, ['loadingItem']),
    ...mapGetters(dataStore, ['discount']),
    ...mapState(markStore, ['productBookmark', 'uid', 'user'])
  }
}
</script>
<template>
  <div class="no-scroll-x">
    <section class="container py-md-96 py-60">
      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
            <RouterLink to="/products" class="link-primary">材料購買</RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
          </ol>
      </nav>
      <div class="row row-cols-lg-2 row-cols-1 g-5">
        <div class="col">
          <img :src="mainImg" style="height: 300px;" class="w-100 object-fit-cover mb-4" :alt="product.title">
          <div class="sub-picture-swiper position-relative">
            <swiper :slides-per-view="3" :space-between="15"
            :modules="modules"
            navigation
            style="height: 160px;"
            >
              <swiper-slide>
                <img :src="product.imgUrl" alt="產品主圖片"  class="cursor-pointer object-fit-cover w-100" style="height: 100px;" :class="{'border': mainImg === product.imgUrl, 'border-3': mainImg === product.imgUrl, 'border-primary': mainImg === product.imgUrl}"  @click="()=>mainImg = product.imgUrl">
              </swiper-slide>
              <swiper-slide v-for="(pic, index) in product.imgsUrl" :key="pic">
                  <img :src="pic" :alt="`產品副圖片${ index + 1 }`" class="cursor-pointer object-fit-cover w-100" style="height: 100px;" :class="{'border': mainImg === pic, 'border-3': mainImg === pic, 'border-primary': mainImg === pic}"  @click="()=>mainImg = pic">
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="col d-flex flex-column">
          <div class="d-flex align-items-center mb-3">
            <span v-if="product.isCheaper" class="badge rounded-pill bg-primary fs-6 me-2">
             {{ discount(product) }} 折
            </span>
            <h2 class="mb-0 fs-lg-4 fs-5 fw-bold">{{ product.title }}</h2>
            <div class="d-flex align-items-center ms-auto ">
              <button v-if="!productBookmark" type="button" class="border-0 bg-transparent text-tomato p-0 mt-1" @click="()=>addBookmark('productBookmarks' ,product)">
                <i class="bi bi-heart fs-4"></i>
              </button>
              <button v-else-if="productBookmark" type="button" class=" border-0 bg-transparent text-tomato p-0 mt-1" @click="deleteBookmark('productBookmarks', product.id)">
                <i class="bi bi-heart-fill fs-4"></i>
              </button>
              <div class="badge border rounded-pill ms-4 fs-6" :class="{'text-yellow': averageRate, 'text-gray': !averageRate,'border-yellow': averageRate, 'border-gray': !averageRate, 'bg-lightYellow': averageRate, 'bg-whiteGray': !averageRate}">
                {{ averageRate ? averageRate : 0}}
                <i class="bi bi-star-fill"></i>
              </div>
            </div>
          </div>

          <p class="mb-5 lh-lg">{{product.description}}</p>
          <div class="d-flex justify-content-between align-items-center mt-auto mb-md-5">
              <p>
                <del v-if="product.isCheaper" class="me-2 text-muted fs-6">NT$ {{ numberComma(product.originalPrice) }}</del><br>
                <span class="fs-5"><span :class="{'text-danger':product.isCheaper, 'fw-bold':product.isCheaper}">NT$ {{numberComma(product.price)}}</span> / {{ product.num }}{{ product.unit }}</span>
              </p>
              <div class="input-group w-50">
                <select name="" id="" class="form-select text-center" v-model="qty">
                  <option :value="number" v-for="number in 30" :key="number + 4596945">{{ number}}</option>
                </select>
                <button :disabled="loadingItem" class="btn btn-primary" type="button" @click="()=>addCart(product, qty)">
                  購買
                </button>
              </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-light-purple-secondary">
      <div class="container py-lg-96 py-5">
        <h3 class="d-flex align-items-center mb-4 fw-bold text-purple border-bottom pb-1 border-purple">
          <span class="material-icons me-2"> auto_awesome </span>
          相關食譜
        </h3>
        <div class="swiper-relative-recipes d-none d-lg-block position-relative">
          <swiper :slides-per-view="5" :space-between="15" style="height: 250px;"
          :modules="modules"
          navigation
          >
            <swiper-slide v-for="recipe in relevantRecipesInfo"  :key="recipe.id">
              <div class="card bg-transparent">
                <RouterLink :to="`/recipes/${recipe.id}`"  class="card-img-hover position-relative mb-2">
                <img :src="recipe.image" :alt="recipe.title" class="object-fit-cover card-img" style="height: 150px !important;">
                <p class="detail position-absolute top-50 start-50 translate-middle fw-bold link-darkBrown letter-spacing-5 text-center">查看<br>詳細食譜</p>
                </RouterLink>
                <RouterLink :to="`/recipes/${recipe.id}`" class="text-center">
                  <h5 class="fs-6">{{ recipe.title }}</h5>
                </RouterLink>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="swiper-relative-recipes d-lg-none position-relative" style="height: 220px">
          <swiper :slides-per-view="2" :space-between="15" class="w-100 h-100"
          :modules="modules"
          navigation
          >
          <swiper-slide v-for="recipe in relevantRecipesInfo" :key="recipe.id">
            <RouterLink :to="`/recipes/${recipe.id}`" class="link-primary">
              <img :src="recipe.image" :alt="recipe.title" class="object-fit-cover w-100" style="height: 130px;">
              <h5 class="fw-bold mt-2 text-center fs-14">{{ recipe.title }}</h5>
            </RouterLink>
          </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <section class="container py-lg-96 py-5">
      <h3 class="d-flex align-items-center fw-bold text-purple border-bottom pb-1 border-purple mb-4">
          <span class="material-icons me-2">
            auto_awesome
          </span>
          顧客評價
          <div class="ms-3 badge border rounded-pill fs-6" :class="{'text-yellow': productRates.length, 'text-gray': !productRates.length,'border-yellow': productRates.length, 'border-gray': !productRates.length, 'bg-lightYellow': productRates.length, 'bg-whiteGray': !productRates.length}">
          {{ productRates.length }} 則
        </div>
          <RouterLink to="/loginSignup" v-if="!uid" class="ms-auto mb-1 btn btn-outline-gradient rounded-pill">我要登入寫評價</RouterLink>
      </h3>

      <h5 class="mb-2 fw-bold d-flex align-items-center">
        <img v-if="user.headshotImg" :src="user.headshotImg" alt="大頭貼" width="50" height="50" class="rounded-circle me-3 object-fit-cover">
        <i v-else-if="!user.headshotImg" class="bi bi-person-circle me-3 fs-45"></i>
        {{ user.nickName }}
      </h5>
      <form ref="form" @submit.prevent="addProductRate" class="mt-2" v-if="uid">
        <div class="d-flex mb-3">
          <div class="form-check px-1">
            <input class="form-check-input d-none"  type="radio" name="rate" id="star1"  value="1" v-model="score">
            <label class="form-check-label cursor-pointer" for="star1" @mouseover="() => mouseoverStar(1)" @mouseout="() => mouseoutStar(1)" >
              <img ref="rate1" :src="star" width="25">
            </label>
          </div>
          <div class="form-check px-1">
            <input class="form-check-input d-none"  type="radio" name="rate" id="star2"  value="2" v-model="score">
            <label class="form-check-label cursor-pointer" for="star2" @mouseover="() => mouseoverStar(2)" @mouseout="() => mouseoutStar(2)" >
              <img ref="rate2" :src="star" width="25">
            </label>
          </div>
          <div class="form-check px-1">
            <input class="form-check-input d-none"  type="radio" name="rate" id="star3" value="3" v-model="score">
            <label class="form-check-label cursor-pointer" for="star3"  @mouseover="() => mouseoverStar(3)" @mouseout="() => mouseoutStar(3)" >
              <img ref="rate3" :src="star" width="25">
            </label>
          </div>
          <div class="form-check px-1">
            <input class="form-check-input d-none"  type="radio" name="rate" id="star4" value="4" v-model="score">
            <label class="form-check-label cursor-pointer" for="star4"  @mouseover="() => mouseoverStar(4)" @mouseout="() => mouseoutStar(4)">
              <img ref="rate4" :src="star" width="25">
            </label>
          </div>
          <div class="form-check px-1">
            <input class="form-check-input d-none"  type="radio" name="rate" id="star5" value="5" v-model="score">
            <label class="form-check-label cursor-pointer" for="star5"  @mouseover="() => mouseoverStar(5)" @mouseout="() => mouseoutStar(5)" >
              <img ref="rate5" :src="star" width="25">
            </label>
          </div>
        </div>
        <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="rateMessage"></textarea>
        <div class="d-flex">
          <button type="submit" class="ms-auto btn btn-primary my-3">送出</button>
        </div>
      </form>

      <div class="row gy-5 ">
        <div class="col-12 border-bottom" v-for="rate in productRates" :key="rate.id">

          <div class="d-flex align-items-center mb-2">
            <img v-if="rate.userImg" :src="rate.userImg" alt="大頭貼" width="50" height="50" class="rounded-circle me-3 object-fit-cover mb-auto">
            <i v-else-if="!rate.userImg" class="bi bi-person-circle me-3 mb-auto fs-45 lh-1"></i>
            <div>
              <h5 class="fs-6 mb-0">{{ rate.username }}</h5>
              <p class="mb-0">
                <i v-for="i in 5" :key="i + 400" class="bi bi-star-fill me-1" :class="{'text-yellow':rate.score >= i, 'text-lightGray':rate.score < i}"></i>
              </p>
              <p>{{ new Date(rate.createAt).toLocaleString().split(':')[0] }}:{{ new Date(rate.createAt).toLocaleString().split(':')[1] }}</p>
              <p class="mb-2">{{ rate.message }}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
