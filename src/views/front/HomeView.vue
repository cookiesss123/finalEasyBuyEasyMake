<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import BannerSwiper from '../../components/BannerSwiper.vue'

import { mapActions, mapState, mapGetters } from 'pinia'
import cartStore from '../../stores/carts'
import markStore from '../../stores/bookmark'
import dataStore from '../../stores/mainData'
import loadingStore from '../../stores/loadingStore'

import numberCommaMixin from '../../mixins/numberCommaMixin'
import { problems, solutions, selections } from '../../utils/publicData'
import img1 from '@/assets/images/feature-image1.png'
import img2 from '@/assets/images/feature-image2.png'
import img3 from '@/assets/images/feature-image3.png'
import img4 from '@/assets/images/feature-image4.png'

export default {
  components: {
    Swiper,
    SwiperSlide,
    BannerSwiper
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      selections,
      problems,
      solutions,
      modules: [Navigation, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      recipes: [],
      products: [],
      img1,
      img2,
      img3,
      img4
    }
  },
  methods: {
    ...mapActions(cartStore, ['addCart', 'goToTop']),
    ...mapActions(markStore, ['addBookmark', 'deleteBookmark', 'getBookmarks']),
    ...mapActions(dataStore, ['getRecipes', 'getProducts', 'getThumbs', 'getRates']),
    ...mapActions(loadingStore, ['startLoading']),
    linkToLottery () {
      this.$router.push({
        name: 'discountsView',
        query: {
          tabName: '抽獎回饋'
        }
      })
    },
    async getData () {
      try {
        this.startLoading()
        const res = await Promise.all([this.getRecipes(), this.getProducts()])
        const [recipes, products] = res
        this.recipes = recipes
        this.products = products

        this.getBookmarks('recipeBookmarks')
        this.getBookmarks('productBookmarks')
      } catch (e) {
        throw new Error(e)
      }
    }
  },
  computed: {
    ...mapState(markStore, ['uid', 'recipeBookmarks', 'productBookmarks']),
    ...mapState(dataStore, ['highThumbs', 'highRates']),
    ...mapGetters(dataStore, ['discount'])
  },
  mounted () {
    this.goToTop()
    this.getThumbs()
    this.getRates()
    this.getData()
  }
}
</script>
<template>
    <div>
      <BannerSwiper></BannerSwiper>
      <!-- 熱門食譜 -->
      <section class="container py-md-96 py-60" data-aos="fade-up">
        <div class="d-lg-flex mb-2">
          <h2 class="d-flex align-items-center justify-content-center justify-content-lg-start fw-bold">
            <img src="../../assets/images/image1.png" class="me-lg-3 me-4 img-lg-64-md-36" alt="熱">
            <span class="fs-lg-1 fs-4 letter-spacing-20">門食譜</span>
          </h2>
          <span class="d-flex align-items-center justify-content-center fs-lg-6 fs-12">
            <img src="../../assets/images/icon-speaker.png" class="me-2" style="width: 30px;" alt="大聲公圖示">
            一鍵購買甜點材料包～
          </span>
        </div>
        <!-- 桌機 -->
        <swiper :slides-per-view="4" :space-between="25"
          :modules="modules"
          navigation
          :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        class="d-none d-lg-block swiper-home"
          >
          <swiper-slide v-for="(item, id) in highThumbs" :key="id">
            <div v-if="recipes[id]" class="card position-relative">
              <RouterLink :to="`/recipes/${id}`" class="card-img-hover position-relative">
                <img :src="recipes[id].image" class="object-fit-cover card-img" :alt="recipes[id].title">
                <span class="badge rounded-pill bg-primary position-absolute start-0 bottom-0 m-3">{{ recipes[id].category }}</span>
                <p class="detail position-absolute top-50 start-50 translate-middle fw-bold letter-spacing-5 link-darkBrown fs-xl-5 text-center">查看<br class="d-xl-none d-lg-block">詳細食譜</p>
              </RouterLink>
              <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-3" @click="()=>addBookmark('recipeBookmarks',recipes[id])">
                <img src="../../assets/images/image5.png" alt="收藏按鈕-未收藏">
              </button>
              <div v-for="(mark, index) in recipeBookmarks" :key="index">
                <button v-if="index === id" type="button" class="position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-3" @click="()=>deleteBookmark('recipeBookmarks', id)">
                    <img src="../../assets/images/image4.png" alt="收藏按鈕-已收藏">
                </button>
              </div>

              <RouterLink :to="`/recipes/${id}`" class="card-body px-0 text-decoration-none link-darkBrown">
                <h3 class="fw-bold fs-5">{{recipes[id].title}}</h3>
                <div class="d-flex align-items-center fs-xl-6 fs-lg-12">
                  <del class="me-2 text-muted" :class="{'d-none': recipes[id].price === recipes[id].total}">NT$ {{ numberComma(recipes[id].total) }}</del>
                  <span class="me-1" :class="{'text-danger':recipes[id].price !== recipes[id].total, 'fw-bold':recipes[id].price !== recipes[id].total}">NT$ {{ numberComma(recipes[id].price) }}</span>
                  <span> / {{ recipes[id].content }}</span>
                  <span class="badge rounded-pill text-primary border border-primary ms-auto bg-secondary">
                    {{ item }}
                    <i class="bi bi-hand-thumbs-up-fill" ></i>
                  </span>
                </div>
              </RouterLink>
            </div>
          </swiper-slide>
        </swiper>
        <!-- 平板、手機 -->
        <swiper :slides-per-view="2" :space-between="25"
        :modules="modules"
        navigation
        :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
        class="d-lg-none d-block swiper-home"
        >
          <swiper-slide v-for="(item, id) in highThumbs" :key="id">
            <div v-if="recipes[id]" class="card position-relative">
              <RouterLink :to="`/recipes/${id}`" class="card-img-hover position-relative">
                <img :src="recipes[id].image" class="object-fit-cover card-img" :alt="recipes[id].title">
                <span class="badge fs-md-6 rounded-pill bg-primary position-absolute start-0 bottom-0 m-2 m-md-3">{{ recipes[id].category }}</span>
              </RouterLink>
              <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-2 m-md-3" @click="()=>addBookmark('recipeBookmarks',recipes[id])">
                <img src="../../assets/images/image5.png" alt="收藏按鈕-未收藏">
              </button>
              <div v-for="(mark, index) in recipeBookmarks" :key="index">
                <button v-if="index === id" type="button" class="position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-2 m-md-3" @click="()=>deleteBookmark('recipeBookmarks', id)">
                    <img src="../../assets/images/image4.png"  alt="收藏按鈕-已收藏">
                </button>
              </div>
              <RouterLink :to="`/recipes/${id}`" class="card-body px-0 py-2 py-md-3 text-decoration-none link-darkBrown">
                <h3 class="fw-bold fs-md-5 fs-6">{{recipes[id].title}}</h3>
                <div class="d-flex align-items-center flex-wrap fs-md-6 fs-12">
                  <del class="me-2 text-muted" :class="{'d-none': recipes[id].price === recipes[id].total}">NT$ {{ numberComma(recipes[id].total) }}</del>
                  <span class="me-1" :class="{'text-danger':recipes[id].price !== recipes[id].total, 'fw-bold':recipes[id].price !== recipes[id].total}">NT$ {{ numberComma(recipes[id].price) }}</span>
                  <span> / {{ recipes[id].content }}</span>
                  <span class="badge rounded-pill text-primary border border-primary ms-auto bg-secondary mt-1 mt-md-0">
                    {{ item }}
                    <i class="bi bi-hand-thumbs-up-fill" ></i>
                  </span>
                </div>
              </RouterLink>
            </div>
          </swiper-slide>
        </swiper>
      </section>

      <section class="bg-img-fixed" style="background-image: url('https://images.unsplash.com/photo-1681923665434-b1ae711f3918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');">
        <div class="py-lg-96 py-5 container">
          <div class="py-lg-5 py-4 border border-white rounded-5 backdrop-blur-5 bg-transGray-2"  data-aos="zoom-in-right">
          <h2 class="fs-lg-1 fs-md-3 fs-5 fw-bold text-center mb-4 text-white text-shadow">總是花錢花時間 尋找甜點材料嗎？</h2>
          <div class="px-5">
            <ul class="row row-cols-1 row-cols-lg-3 gy-4 list-unstyled text-shadow ">
              <li v-for="problem in problems" :key="problem.icon" class="col d-flex flex-column flex-lg-row align-items-center justify-content-center">
                <div class="mb-2 me-lg-3 mb-lg-0">
                  <i :class="problem.icon" class="fs-2 text-white"></i>
                </div>
                <h3 class="fs-lg-5 fs-14 text-white mb-0">
                  {{ problem.title }}
                </h3>
              </li>
            </ul>
          </div>

        </div>
        </div>
      </section>

      <section class="py-lg-96 py-60 container">
          <h2 class="fw-bold fs-md-3 fs-5 text-center mb-md-5 mb-4" data-aos="fade-up">
            <i class="bi bi-chevron-double-down"></i>
            <p class="mt-3">一站解決你的所有問題</p>
          </h2>
          <ul class="list-unstyled row gy-5">
            <li v-for="(solution, index) in solutions" :key="solution.img" class="col-12"  data-aos="fade-up">
              <div class="row">
                <!-- 奇數出現 -->
                <div v-if="(index + 1) % 2" class="col-lg-4 col-md-6 d-none d-lg-block"></div>
                <div class="col-lg-4 col-md-6 mb-3 mb-md-0">
                  <img :src="index === 0 ? img1 : index === 1 ? img2 : index === 2 ? img3 : img4" class="w-100 rounded-5 img-240 object-fit-cover" :alt="solution.title">
                </div>
                <div class="col-lg-4 col-md-6 d-flex flex-column justify-content-center">
                  <h5 class="fw-bold fs-md-4 fs-6 mb-md-3">{{ solution.title }}</h5>
                  <p class="fs-md-6 fs-12 mb-0">{{ solution.content }}</p>
                </div>
                <!-- 偶數出現 -->
                <div v-if="(index + 1) % 2 === 0" class="col-lg-4 col-md-6 d-none d-lg-block"></div>
              </div>
            </li>
          </ul>
      </section>

      <section class="bg-img-fixed" style="background-image: url('https://images.unsplash.com/photo-1678465952975-85cc1a08b2d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80');">
        <div data-aos="zoom-in-right" class="py-96  text-center bg-transGray-2">
          <h2 class="text-white fs-md-3 fs-5 fw-bold mb-4 letter-spacing-10 text-shadow lh-base">每個月都有新好禮<br>超值大獎一次帶回</h2>
          <button type="button" class="hvr-sweep-to-right btn btn-primary fw-bold px-4 shadow-lg" @click="linkToLottery">
          立即抽獎
        </button>
        </div>
      </section>

      <!-- 優選食材 -->
      <section class="container py-md-96 py-60"  data-aos="fade-up">
        <div class="d-lg-flex mb-2">
          <h2 class="d-flex align-items-center justify-content-center justify-content-lg-start fw-bold">
            <img src="../../assets/images/title3.png" class="me-lg-3 me-4 img-lg-64-md-36" alt="優">
            <span class="fs-lg-1 fs-4 letter-spacing-20">選食材</span>
          </h2>
          <span class="d-flex align-items-center justify-content-center fs-lg-6 fs-12">
            <img src="../../assets/images/icon-speaker.png" class="me-2" style="width: 30px;" alt="大聲公圖示">
            總消費額滿500即可獲得1次抽獎機會！
          </span>
        </div>
        <!-- 桌機 -->
        <swiper :slides-per-view="4" :space-between="25"
          :modules="modules"
          navigation
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          class="d-none d-lg-block swiper-home"
        >
          <swiper-slide v-for="(rate, id) in highRates" :key="id">
            <div v-if="products[id]" class="card position-relative">
              <div class="card-img-hover position-relative">
                <RouterLink :to="`/products/${id}`">
                  <img :src="products[id].imgUrl" class="object-fit-cover card-img" :alt="products[id].title">
                  <p class="detail position-absolute top-50 start-50 translate-middle fw-bold letter-spacing-5 link-darkBrown fs-xl-5 text-center">查看<br class="d-xl-none d-lg-block">商品資訊</p>
                  <span v-if="products[id].isCheaper" class="fs-14 text-white p-2 bg-primary position-absolute top-0 start-0">
                    {{ discount(products[id]) }} 折
                  </span>
                </RouterLink>
                <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-3" @click="()=>addBookmark('productBookmarks' ,products[id])">
                  <img src="../../assets/images/image5.png" alt="收藏按鈕-未收藏">
                </button>
                <div v-for="(mark, index) in productBookmarks" :key="index">
                  <button v-if="index === id" type="button" class="position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-3"  @click="()=>deleteBookmark('productBookmarks', index)">
                      <img src="../../assets/images/image4.png" alt="收藏按鈕-已收藏">
                  </button>
                </div>
                <button @click="()=>addCart(products[id])" type="button" class="btn-buy border-0 bg-transparent mx-2 my-3 position-absolute end-0 bottom-0">
                  <img src="../../assets/images/icon-cart.png" alt="購物車按鈕" class="shadow-sm">
                </button>
              </div>
              <RouterLink :to="`/products/${id}`" class="card-body px-0 text-decoration-none link-darkBrown">
                <h3 class=" fs-5 fw-bold">{{products[id].title}}</h3>
                <div class="d-flex align-items-center fs-xl-6 fs-lg-12">
                  <del class="me-2 text-muted" :class="{'d-none': !products[id].isCheaper}">NT$ {{ numberComma(products[id].originalPrice) }}</del>
                  <span class="me-1" :class="{'text-danger':products[id].isCheaper, 'fw-bold':products[id].isCheaper}">NT$ {{ numberComma(products[id].price)}}</span>
                  <span > / {{ products[id].num }}{{ products[id].unit }}</span>
                  <span class="badge rounded-pill text-yellow border border-yellow ms-auto bg-lightYellow">
                    {{ rate.averageRate }}
                    <i class="bi bi-star-fill"></i>
                  </span>
                </div>
              </RouterLink>
            </div>
          </swiper-slide>
        </swiper>
          <!-- 手機 直向 -->
        <swiper :slides-per-view="2" :space-between="25"
          :modules="modules"
              navigation
              :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          class="d-lg-none d-block swiper-home"
        >
          <swiper-slide v-for="(rate, id) in highRates" :key="id">
            <div v-if="products[id]" class="card position-relative">
              <div class="card-img-hover position-relative">
                <RouterLink :to="`/products/${id}`">
                  <img :src="products[id].imgUrl" class="object-fit-cover card-img" :alt="products[id].title">
                  <span v-if="products[id].isCheaper" class="fs-md-14 fs-12 text-white p-2 bg-primary position-absolute top-0 start-0">
                    {{ discount(products[id]) }} 折
                  </span>
                </RouterLink>
                <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-2 m-md-3" @click="()=>addBookmark('productBookmarks' ,products[id])">
                  <img src="../../assets/images/image5.png" alt="收藏按鈕-未收藏">
                </button>
                <div v-for="(mark, index) in productBookmarks" :key="index">
                  <button v-if="index === id" type="button" class="position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-2 m-md-3"  @click="()=>deleteBookmark('productBookmarks', id)">
                      <img src="../../assets/images/image4.png" alt="收藏按鈕-已收藏">
                  </button>
                </div>
                <button @click="()=>addCart(products[id])" type="button" class="btn-buy border-0 bg-transparent position-absolute end-0 bottom-0 m-2 m-md-3 p-0">
                  <img src="../../assets/images/icon-cart.png" alt="購物車按鈕" class="shadow-sm">
                </button>
              </div>
              <RouterLink :to="`/products/${id}`" class="card-body px-0 py-2 py-md-3 text-decoration-none link-darkBrown">
                <h3 class="fw-bold fs-md-5 fs-6">{{products[id].title}}</h3>
                <div class="d-flex align-items-center flex-wrap fs-md-6 fs-12">
                  <del class="me-2 text-muted" :class="{'d-none': !products[id].isCheaper}">NT$ {{ numberComma(products[id].originalPrice) }}</del>
                  <span class="me-1" :class="{'text-danger':products[id].isCheaper, 'fw-bold':products[id].isCheaper}">NT$ {{ numberComma(products[id].price)}}</span>
                  <span > / {{ products[id].num }}{{ products[id].unit }}</span>
                  <span class="badge rounded-pill text-yellow border border-yellow ms-auto bg-lightYellow d-none d-md-block">
                    {{ rate.averageRate }}
                    <i class="bi bi-star-fill"></i>
                  </span>
                </div>
                <div class="text-end mt-1 d-md-none fs-12">
                  <span class="badge rounded-pill text-yellow border border-yellow bg-lightYellow">
                    {{ rate.averageRate }}
                    <i class="bi bi-star-fill"></i>
                  </span>
                </div>

              </RouterLink>
            </div>
          </swiper-slide>
        </swiper>
      </section>
    </div>
</template>
