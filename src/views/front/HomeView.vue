<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// mapState
import { mapActions, mapState } from 'pinia'
import cartStore from '../../stores/carts'
import markStore from '../../stores/bookmark'
import dataStore from '../../stores/mainData'
import numberCommaMixin from '../../mixins/numberCommaMixin'
// import { db, auth } from '../../firebase/db'
// import { ref, onValue } from 'firebase/database'
// import { onAuthStateChanged } from 'firebase/auth'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import { problems, solutions } from '../../utils/publicData'
export default {
  components: {
    Swiper,
    SwiperSlide,
    Loading
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      // uid: '',
      problems,
      solutions,
      modules: [Navigation, Pagination, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'my-bullet-class',
        bulletActiveClass: 'my-bullet-active-class'
      },
      // recipeBookMarks: [],
      // productBookmarks: [],
      popularRecipes: [],
      goodProducts: [],
      recipeSearchName: '',
      selectItem: '全部',
      highOrLow: '不拘',
      priceOrRate: '成本',

      productSearchName: '',
      productHighOrLow: '低到高',
      productPriceOrRate: '價格',
      pageStatus: '全部',
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    ...mapActions(cartStore, ['toastMessage', 'addCart', 'goToTop']),
    ...mapActions(markStore, ['addBookmark', 'deleteBookmark', 'getBookmarks']),
    ...mapActions(dataStore, ['getRecipes', 'getProducts']),
    async getData () {
      try {
        const res = await Promise.all([this.getRecipes(), this.getProducts()])
        const [recipes, products] = res

        this.popularRecipes = recipes.sort((a, b) => {
          return b.thumbs - a.thumbs
        })
        this.popularRecipes = this.popularRecipes.slice(0, 10)

        this.goodProducts = products.filter(product => product.averageRate >= 4)
        this.goodProducts = this.goodProducts.sort((a, b) => b.averageRate - a.averageRate)

        this.isLoading = false
      } catch (e) {
        throw new Error(e)
      }
    },
    searchRecipes () {
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
    searchProducts () {
      this.$router.push({
        name: 'products',
        query: {
          searchName: this.productSearchName,
          valueHighOrLow: this.productHighOrLow,
          valuePriceOrRate: this.productPriceOrRate,
          pageStatus: this.pageStatus
        }
      })
    },
    linkToLottery () {
      this.$router.push({
        name: 'discountsView',
        query: {
          tabName: '抽獎回饋'
        }
      })
    }
  },
  computed: {
    ...mapState(markStore, ['uid', 'recipeBookMarks', 'productBookmarks'])
  },
  mounted () {
    this.isLoading = true

    this.goToTop()
    this.getBookmarks('recipeBookmarks')
    this.getBookmarks('productBookmarks')
    this.getData()
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
                <img src="../../assets/images/loadingLogo.png" class="loading-logo mb-3" alt="logo" >
                <p class="text-center fw-bold text-purple fs-md-2 fs-5">
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
      <section data-aos="fade-up" class="mb-5">
        <!-- 桌機 -->
        <div class=" d-none d-lg-block pt-64 banner-swiper">
          <swiper :slides-per-view="1" :space-between="25"
          :modules="modules"
          :pagination="{
            dynamicBullets: true,
          }"
          navigation
          >
            <swiper-slide class="py-5 bg-light-purple-white">
              <div class="container">
                <div class="row gx-76">
                <div class="col-6 position-relative">
                  <!-- 圓形 -->
                  <div class="position-absolute white-circle"></div>
                  <div class="position-absolute rounded-circle border-dashed-purple"></div>

                  <!-- 長條圓形 -->
                  <div class="banner-bar bg-light-purple-secondary" style="left: 84%; top: -10%;" ></div>
                  <div class="banner-bar bg-white" style="left: 87%; top: -6%;" ></div>

                  <div class="banner-bar bg-light-purple-secondary" style=" left: 87%; top: -2%;" ></div>
                  <div class="banner-bar-short bg-light-purple-secondary" style="left: 112%; top: -2%;" ></div>

                  <div class="banner-bar bg-white" style="left: 87%; top: 2%;"></div>

                  <div class="banner-bar bg-light-purple-secondary" style="left: 84%; top: 6%;"></div>

                  <div class="banner-bar bg-white" style=" left: 84%; top: 10%;" ></div>
                  <div class="banner-dot bg-white" style="left: 75%; top: 10%;" ></div>

                  <div class="banner-bar bg-light-purple-secondary" style=" left: 87%; top: 14%;" ></div>
                  <div class="banner-bar bg-white" style=" left: 84%; top: 18%;" ></div>
                  <div class="banner-bar bg-light-purple-secondary" style=" left: 90%; top: 22%;" ></div>
                  <div class="banner-bar bg-white" style="left: 97%; top: 26%;" ></div>
                  <div class="banner-bar bg-light-purple-secondary" style=" left: 86%; top: 30%;" ></div>
                  <div class="banner-bar bg-white" style=" left: 86%; top: 34%;" ></div>

                  <div class="banner-bar bg-light-purple-secondary" style="left: 87%; top: 38%;" ></div>
                  <div class="banner-dot bg-light-purple-secondary" style="left: 110%; top: 38%;" ></div>

                  <div class="banner-bar bg-white" style=" left: 89%; top: 42%;" ></div>
                  <div class="banner-bar-short bg-white" style="left: 76%; top: 42%;" ></div>

                  <div class="banner-bar bg-light-purple-secondary" style="left: 90%; top: 46%;" ></div>
                  <div class="banner-bar bg-white" style=" width: 90px; left: 98%; top: 50%;" ></div>
                  <div class="banner-bar bg-light-purple-secondary" style="left: 86%; top: 54%;" ></div>
                  <div class="banner-bar bg-white" style=" left: 86%; top: 58%;" ></div>
                  <div class="banner-bar bg-light-purple-secondary" style="left: 85%; top: 62%;" ></div>
                  <div class="banner-bar bg-white" style=" left: 95%; top: 66%;" ></div>
                  <div class="banner-bar bg-light-purple-secondary" style="left: 87%; top: 70%;" ></div>
                  <div class="banner-bar bg-white" style="left: 87%; top: 74%;" ></div>
                  <div class="banner-bar bg-light-purple-secondary" style="left: 85%; top: 78%;" ></div>

                  <div class="banner-bar bg-white" style="left: 95%; top: 82%;" ></div>
                  <div class="banner-dot bg-white" style="left: 88%; top: 82%;" ></div>

                  <div class="banner-bar bg-light-purple-secondary" style="left: 85%; top: 86%;" ></div>

                  <div class="banner-bar bg-white" style="left: 88%; top: 90%;" ></div>
                  <div class="banner-bar bg-light-purple-secondary" style="left: 95%; top: 94%;" ></div>
                  <div class="banner-bar bg-white" style="left: 98%; top: 98%;" ></div>
                  <div class="banner-bar bg-light-purple-secondary" style="left: 91%; top: 102%;" ></div>
                  <div class="banner-bar-short bg-light-purple-secondary" style="left: 113%; top: 102%;" ></div>

                  <div class="banner-bar bg-white" style="left: 89%; top: 106%;" ></div>
                  <div class="banner-bar bg-light-purple-secondary" style="left: 99%; top: 110%;" ></div>

                  <div class="spin position-absolute">
                    <div class="spin-container">
                      <div class="shape">
                          <div class="spin-img bg-img-150" style="background-image:url('https://images.unsplash.com/photo-1681923665434-b1ae711f3918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'); "></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-6 py-5  position-relative z-index-1">
                    <h2 class="fw-bold lh-base fs-1 text-purple letter-spacing-10">
                      <p class="d-flex align-items-center">
                        <img src="../../assets/images/makeCupcake.png" class="me-3" style="width: 35px;" alt="製作甜點圖示">
                        甜點食譜加材料
                      </p>
                      <p class="d-flex  align-items-center">
                        一次購足好簡單
                        <img src="../../assets/images/baking.png" class="ms-3" style="width: 35px;" alt="烘焙圖示">
                      </p>
                    </h2>
                    <p class="text-center text-lg-start mb-0">用最優惠的價格<br class="d-block d-lg-none"> 享受最高品質的食材</p>
                    <div class="col-10 d-none d-lg-block mt-5">
                      <p class="mb-0">立即搜索新鮮食材！</p>
                      <div class="card border-purple rounded-2">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-4 border-end border-purple">
                              <p class="card-title mb-0 fs-14 text-purple">種類</p>
                              <select name="全部" id="" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="pageStatus">
                                <option selected >全部</option>
                                <option value="食材組合包">食材組合包</option>
                                <option value="熱銷單品">熱銷單品</option>
                                <option value="特價商品">特價商品</option>
                              </select>
                            </div>
                            <div class="col-4 border-end border-purple">
                              <p class="card-title mb-0 fs-14 text-purple">價格或評價</p>
                              <select name="全部" id="" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="productPriceOrRate">
                                <option value="價格">價格</option>
                                <option value="評價">評價</option>
                              </select>
                            </div>
                            <div class="col-4 border-purple">
                              <p class="card-title mb-0 fs-14 text-purple">高或低</p>
                              <select name="全部" id="" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="productHighOrLow">
                                <option value="不拘" selected>不拘</option>
                                <option value="高到低">高到低</option>
                                <option value="低到高">低到高</option>
                              </select>
                            </div>
                          </div>

                        </div>
                        <div class="card-footer rounded-2 bg-white pb-3 position-relative">
                          <div class="border rounded-pill border-purple">
                            <input type="search" class="form-control border-0 rounded-pill " placeholder="請輸入食材名稱" v-model="productSearchName" @keyup.enter="searchProducts">
                            <button type="submit" class="border-0 bg-transparent position-absolute translate-middle end-0 mt-n3" style="" @click="searchProducts">
                            <span class="material-icons-outlined text-purple">search</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>

              </div>
              </div>

            </swiper-slide>
            <swiper-slide class="py-5 bg-secondary-white">
              <div class="container">
                <div class="row gx-76">
                  <div class="col-6 position-relative">
                  <div class="position-absolute white-circle"></div>
                  <div class="position-absolute rounded-circle border-dashed-purple"></div>

                  <div class="banner-bar bg-secondary-light-purple" style="left: 84%; top: -10%;" ></div>
                  <div class="banner-bar bg-white" style="left: 87%; top: -6%;" ></div>

                  <div class="banner-bar bg-secondary-light-purple" style=" left: 87%; top: -2%;" ></div>
                  <div class="banner-bar-short bg-secondary-light-purple" style="left: 112%; top: -2%;" ></div>

                  <div class="banner-bar bg-white" style="left: 87%; top: 2%;"></div>

                  <div class="banner-bar bg-secondary-light-purple" style="left: 84%; top: 6%;"></div>

                  <div class="banner-bar bg-white" style=" left: 84%; top: 10%;" ></div>
                  <div class="banner-dot bg-white" style="left: 75%; top: 10%;" ></div>

                  <div class="banner-bar bg-secondary-light-purple" style=" left: 87%; top: 14%;" ></div>
                  <div class="banner-bar bg-white" style=" left: 84%; top: 18%;" ></div>
                  <div class="banner-bar bg-secondary-light-purple" style=" left: 90%; top: 22%;" ></div>
                  <div class="banner-bar bg-white" style="left: 97%; top: 26%;" ></div>
                  <div class="banner-bar bg-secondary-light-purple" style=" left: 86%; top: 30%;" ></div>
                  <div class="banner-bar bg-white" style=" left: 86%; top: 34%;" ></div>

                  <div class="banner-bar bg-secondary-light-purple" style="left: 87%; top: 38%;" ></div>
                  <div class="banner-dot bg-secondary-light-purple" style="left: 110%; top: 38%;" ></div>

                  <div class="banner-bar bg-white" style=" left: 89%; top: 42%;" ></div>
                  <div class="banner-bar-short bg-white" style="left: 76%; top: 42%;" ></div>

                  <div class="banner-bar bg-secondary-light-purple" style="left: 90%; top: 46%;" ></div>
                  <div class="banner-bar bg-white" style=" width: 90px; left: 98%; top: 50%;" ></div>
                  <div class="banner-bar bg-secondary-light-purple" style="left: 86%; top: 54%;" ></div>
                  <div class="banner-bar bg-white" style=" left: 86%; top: 58%;" ></div>
                  <div class="banner-bar bg-secondary-light-purple" style="left: 85%; top: 62%;" ></div>
                  <div class="banner-bar bg-white" style=" left: 95%; top: 66%;" ></div>
                  <div class="banner-bar bg-secondary-light-purple" style="left: 87%; top: 70%;" ></div>
                  <div class="banner-bar bg-white" style="left: 87%; top: 74%;" ></div>
                  <div class="banner-bar bg-secondary-light-purple" style="left: 85%; top: 78%;" ></div>

                  <div class="banner-bar bg-white" style="left: 95%; top: 82%;" ></div>
                  <div class="banner-dot bg-white" style="left: 88%; top: 82%;" ></div>

                  <div class="banner-bar bg-secondary-light-purple" style="left: 85%; top: 86%;" ></div>

                  <div class="banner-bar bg-white" style="left: 88%; top: 90%;" ></div>
                  <div class="banner-bar bg-secondary-light-purple" style="left: 95%; top: 94%;" ></div>
                  <div class="banner-bar bg-white" style="left: 98%; top: 98%;" ></div>
                  <div class="banner-bar bg-secondary-light-purple" style="left: 91%; top: 102%;" ></div>
                  <div class="banner-bar-short bg-secondary-light-purple" style="left: 113%; top: 102%;" ></div>

                  <div class="banner-bar bg-white" style="left: 89%; top: 106%;" ></div>
                  <div class="banner-bar bg-secondary-light-purple" style="left: 99%; top: 110%;" ></div>

                  <div class="spin position-absolute">
                    <div class="spin-container">
                      <div class="shape">
                          <div class="spin-img" style="background-image: url('https://images.unsplash.com/photo-1678465952838-c9d7f5daaa65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80&quot'); "></div>
                      </div>
                    </div>
                  </div>
                  </div>

                  <div class="col-6 py-5  position-relative z-index-1">
                    <h2 class="fw-bold lh-base fs-1 text-primary letter-spacing-10">
                      <p class="d-flex align-items-center">
                        <img src="../../assets/images/cake18.png" class="me-3" style="width: 35px;" alt="杯子蛋糕圖示">
                        免費學習
                      </p>
                      <p class="d-flex  align-items-center">
                        各國甜點食譜
                        <img src="../../assets/images/pannaCotta12.png" class="ms-3" style="width: 35px;" alt="布丁圖示">
                      </p>
                    </h2>
                    <p class="text-center text-lg-start mb-0">詳細的甜點教學<br class="d-block d-lg-none"> 保證您學到會</p>
                    <div class="col-10 d-none d-lg-block mt-5">
                      <p class="mb-0">立即搜索心儀食譜！</p>
                      <div class="card border-primary rounded-2">
                        <div class="card-body">
                          <div class="row">
                            <div class="col-4 border-end border-primary">
                              <p class="card-title mb-0 fs-14 text-primary">種類</p>
                              <select name="全部" id="" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="selectItem">
                                <option selected >全部</option>
                                <option value="台式甜點">台式甜點</option>
                                <option value="法式甜點">法式甜點</option>
                                <option value="美式甜點">美式甜點</option>
                                <option value="日式甜點">日式甜點</option>
                                <option value="義式甜點">義式甜點</option>
                              </select>
                            </div>
                            <div class="col-4 border-end border-primary">
                              <p class="card-title mb-0  fs-14 text-primary">成本或評價</p>
                              <select name="全部" id="" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="priceOrRate">
                                <option value="成本">成本</option>
                                <option value="評價">評價</option>
                              </select>
                            </div>
                            <div class="col-4 border-primary">
                              <p class="card-title mb-0  fs-14 text-primary">高或低</p>
                              <select name="全部" id="" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="highOrLow">
                                <option value="不拘" selected>不拘</option>
                                <option value="高到低">高到低</option>
                                <option value="低到高">低到高</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div class="card-footer rounded-2 bg-white pb-3 position-relative">
                          <div class="border rounded-pill border-primary">
                            <input type="search" class="form-control border-0 rounded-pill " placeholder="請輸入甜點名稱" v-model="recipeSearchName" @keyup.enter="searchRecipes">
                            <button type="submit" class="border-0 bg-transparent position-absolute translate-middle end-0 mt-n3"  @click="searchRecipes">
                            <span class="material-icons-outlined text-primary">search</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <!-- 手機 -->
        <div class="d-lg-none py-60 banner-swiper">
          <swiper :slides-per-view="1" :space-between="25"
          :modules="modules"
          :pagination="{
            dynamicBullets: true,
          }"
          navigation
          >
            <swiper-slide class="bg-secondary-light-purple position-relative pb-4">
              <div class="py-4 bg-white "></div>
              <div class="banner-bar rotate-90 bg-white rotate-90" style="left: -45px; top: 9%;" ></div>

              <div class="banner-bar rotate-90 bg-secondary" style="left:-21px; top: 8%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 3px; top: 6%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 27px; top: 14%;" ></div>

              <div class="banner-bar rotate-90 bg-white" style="left: 51px; top: 13%;" ></div>
              <div class="banner-dot rotate-90 bg-white" style="left: 45px; top: 23%;" ></div>

              <div class="banner-bar rotate-90 bg-secondary" style="left: 75px; top: 8%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 99px; top: 5%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 123px; top: 14%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 147px; top: 8%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 171px; top: 11%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 195px; top: -2%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 219px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 243px; top: 5%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 267px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 291px; top: -2%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 315px; top: 13%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 339px; top: 7%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 363px; top: 10%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 387px; top: 4%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 411px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 435px; top: -2%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 459px; top: 12%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 483px; top: 7%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 507px; top: 8%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 531px; top: 13%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 555px; top: 13%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 579px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 603px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 627px; top: 2%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 651px; top: 13%;" ></div>

              <div class="banner-bar rotate-90 bg-white" style="left: 675px; top: 5%;" ></div>
              <div class="banner-dot rotate-90 bg-white" style="left: 669px; top: 18%;" ></div>

              <div class="banner-bar rotate-90 bg-secondary" style="left: 699px; top: 14%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 723px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 747px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 771px; top: 2%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 795px; top: 13%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 819px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 843px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 867px; top: 2%;" ></div>
              <div class="banner-bar rotate-90 bg-secondary" style="left: 891px; top: 13%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 915px; top: 2%;" ></div>

              <div class="rounded-circle white-circle translate-middle-x"></div>
              <div class="rounded-circle border-dashed-purple translate-middle-x" ></div>
              <div class="spin translate-middle-x">
                  <div class="spin-container">
                    <div class="shape">
                        <div class="spin-img bg-img-150" style="background-image:url('https://images.unsplash.com/photo-1681923665434-b1ae711f3918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'); "></div>
                    </div>
                  </div>
              </div>
              <div class="mt-380">
                  <h2 class="fw-bold lh-base fs-4 text-purple letter-spacing-10">
                    <p class="d-flex align-items-center justify-content-center">
                      <img src="../../assets/images/makeCupcake.png" class="me-3 img-lg-50-sm-30" alt="製作甜點圖示">
                      甜點食譜加材料
                    </p>
                    <p class="d-flex  align-items-center justify-content-center">
                      一次購足好簡單
                      <img src="../../assets/images/baking.png" class="ms-3 img-lg-50-sm-30" alt="烘焙圖示">
                    </p>
                  </h2>
                  <p class="text-center mb-0">用最優惠的價格<br> 享受最高品質的食材</p>
              </div>
            </swiper-slide>
            <swiper-slide class="bg-light-purple-secondary position-relative pb-4">
              <div class="py-4 bg-white"></div>
              <div class="banner-bar rotate-90 bg-white rotate-90" style="left: -45px; top: 9%;" ></div>

              <div class="banner-bar rotate-90 bg-lightPurple" style="left:-21px; top: 8%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 3px; top: 6%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 27px; top: 14%;" ></div>

              <div class="banner-bar rotate-90 bg-white" style="left: 51px; top: 13%;" ></div>
              <div class="banner-dot rotate-90 bg-white" style="left: 45px; top: 23%;" ></div>

              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 75px; top: 8%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 99px; top: 5%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 123px; top: 14%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 147px; top: 8%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 171px; top: 11%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 195px; top: -2%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 219px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 243px; top: 5%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 267px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 291px; top: -2%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 315px; top: 13%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 339px; top: 7%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 363px; top: 10%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 387px; top: 4%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 411px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 435px; top: -2%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 459px; top: 12%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 483px; top: 7%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 507px; top: 8%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 531px; top: 13%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 555px; top: 13%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 579px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 603px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 627px; top: 2%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 651px; top: 13%;" ></div>

              <div class="banner-bar rotate-90 bg-white" style="left: 675px; top: 5%;" ></div>
              <div class="banner-dot rotate-90 bg-white" style="left: 669px; top: 18%;" ></div>

              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 699px; top: 14%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 723px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 747px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 771px; top: 2%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 795px; top: 13%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 819px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 843px; top: 9%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 867px; top: 2%;" ></div>
              <div class="banner-bar rotate-90 bg-lightPurple" style="left: 891px; top: 13%;" ></div>
              <div class="banner-bar rotate-90 bg-white" style="left: 915px; top: 2%;" ></div>

              <div class="rounded-circle white-circle translate-middle-x"></div>
              <div class="rounded-circle border-dashed-primary translate-middle-x" ></div>
              <div class="spin translate-middle-x">
                  <div class="spin-container">
                    <div class="shape">
                        <div class="spin-img bg-img-150" style="background-image:url('https://images.unsplash.com/photo-1678465952838-c9d7f5daaa65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'); "></div>
                    </div>
                  </div>
              </div>

              <div class="mt-380">
                  <h2 class="fw-bold lh-base fs-4 text-primary letter-spacing-10">
                    <p class="d-flex align-items-center justify-content-center">
                      <img src="../../assets/images/cake18.png" class="me-3 img-lg-50-sm-30" alt="杯子蛋糕圖示">
                      免費學習
                    </p>
                    <p class="d-flex  align-items-center justify-content-center">
                      各國特色甜點食譜
                      <img src="../../assets/images/pannaCotta12.png" class="ms-3 img-lg-50-sm-30"  alt="布丁圖示">
                    </p>
                  </h2>
                  <p class="text-center mb-0">詳細的甜點教學<br> 保證您學到會</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </section>
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
          <swiper-slide v-for="recipe in popularRecipes" :key="recipe.id">
            <div class="card position-relative">
              <RouterLink :to="`/recipes/${recipe.id}`" class="card-img-hover position-relative">
                <img :src="recipe.image" class="object-fit-cover card-img" :alt="recipe.title">
                <span class="badge rounded-pill bg-primary position-absolute start-0 bottom-0 m-3">{{ recipe.category }}</span>
                <p class="detail position-absolute top-50 start-50 translate-middle fw-bold letter-spacing-5 link-darkBrown fs-xl-5 text-center">查看<br class="d-xl-none d-lg-block">詳細食譜</p>
              </RouterLink>
              <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-3" @click="()=>addBookmark('recipeBookmarks',recipe, uid)">
                <img src="../../assets/images/image5.png" alt="收藏按鈕-未收藏">
              </button>
              <div v-for="mark in recipeBookMarks" :key="mark">
                <button v-if="mark === recipe.id" type="button" class="position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-3" @click="()=>deleteBookmark('recipeBookmarks', recipe.id, uid)">
                    <img src="../../assets/images/image4.png" alt="收藏按鈕-已收藏">
                </button>
              </div>

              <RouterLink :to="`/recipes/${recipe.id}`" class="card-body px-0 text-decoration-none link-darkBrown">
                <h3 class="fw-bold fs-5">{{recipe.title}}</h3>
                <div class="d-flex align-items-center fs-xl-6 fs-lg-12">
                  <del class="me-2 text-muted" :class="{'d-none': recipe.price === recipe.total}">NT$ {{ numberComma(recipe.total) }}</del>
                  <span class="me-1" :class="{'text-danger':recipe.price !== recipe.total, 'fw-bold':recipe.price !== recipe.total}">NT$ {{ numberComma(recipe.price) }}</span>
                  <span> / {{ recipe.content }}</span>
                  <span class="badge rounded-pill text-primary border border-primary ms-auto bg-secondary">
                    {{ recipe.thumbs }}
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
          <swiper-slide v-for="recipe in popularRecipes" :key="recipe.id">
            <div class="card position-relative">
              <RouterLink :to="`/recipes/${recipe.id}`" class="card-img-hover position-relative">
                <img :src="recipe.image" class="object-fit-cover card-img" :alt="recipe.title">
                <span class="badge fs-md-6 rounded-pill bg-primary position-absolute start-0 bottom-0 m-2 m-md-3">{{ recipe.category }}</span>
              </RouterLink>
              <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-2 m-md-3" @click="()=>addBookmark('recipeBookmarks',recipe, uid)">
                <img src="../../assets/images/image5.png" alt="收藏按鈕-未收藏">
              </button>
              <div v-for="mark in recipeBookMarks" :key="mark">
                <button v-if="mark === recipe.id" type="button" class="position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-2 m-md-3" @click="()=>deleteBookmark('recipeBookmarks', recipe.id, uid)">
                    <img src="../../assets/images/image4.png"  alt="收藏按鈕-已收藏">
                </button>
              </div>
              <RouterLink :to="`/recipes/${recipe.id}`" class="card-body px-0 py-2 py-md-3 text-decoration-none link-darkBrown">
                <h3 class="fw-bold fs-md-5 fs-6">{{recipe.title}}</h3>
                <div class="d-flex align-items-center flex-wrap fs-md-6 fs-12">
                  <del class="me-2 text-muted" :class="{'d-none': recipe.price === recipe.total}">NT$ {{ numberComma(recipe.total) }}</del>
                  <span class="me-1" :class="{'text-danger':recipe.price !== recipe.total, 'fw-bold':recipe.price !== recipe.total}">NT$ {{ numberComma(recipe.price) }}</span>
                  <span> / {{ recipe.content }}</span>
                  <span class="badge rounded-pill text-primary border border-primary ms-auto bg-secondary mt-1 mt-md-0">
                    {{ recipe.thumbs }}
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
                  <img :src="`/src/assets/images/${solution.img}`" class="w-100 rounded-5 img-240 object-fit-cover" :alt="solution.title">
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
          <swiper-slide v-for="product in goodProducts" :key="product.id">
            <div class="card position-relative">
              <div class="card-img-hover position-relative">
                <RouterLink :to="`/products/${product.id}`">
                  <img :src="product.imgUrl" class="object-fit-cover card-img" :alt="product.title">
                  <p class="detail position-absolute top-50 start-50 translate-middle fw-bold letter-spacing-5 link-darkBrown fs-xl-5 text-center">查看<br class="d-xl-none d-lg-block">商品資訊</p>
                  <span v-if="product.isCheaper" class="fs-14 text-white p-2 bg-primary position-absolute top-0 start-0">
                    {{ (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))) % 10 === 0 ? (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))).toString().charAt(0) : 100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)) }} 折
                  </span>
                </RouterLink>
                <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-3" @click="()=>addBookmark('productBookmarks' ,product, uid)">
                  <img src="../../assets/images/image5.png" alt="收藏按鈕-未收藏">
                </button>
                <div v-for="mark in productBookmarks" :key="mark">
                  <button v-if="mark === product.id" type="button" class="position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-3"  @click="()=>deleteBookmark('productBookmarks', product.id, uid)">
                      <img src="../../assets/images/image4.png" alt="收藏按鈕-已收藏">
                  </button>
                </div>
                <button @click="()=>addCart(product)" type="button" class="btn-buy border-0 bg-transparent mx-2 my-3 position-absolute end-0 bottom-0">
                  <img src="../../assets/images/icon-cart.png" alt="購物車按鈕" class="shadow-sm">
                </button>
              </div>
              <RouterLink :to="`/products/${product.id}`" class="card-body px-0 text-decoration-none link-darkBrown">
                <h3 class=" fs-5 fw-bold">{{product.title}}</h3>
                <div class="d-flex align-items-center fs-xl-6 fs-lg-12">
                  <del class="me-2 text-muted" :class="{'d-none': !product.isCheaper}">NT$ {{ numberComma(product.originalPrice) }}</del>
                  <span class="me-1" :class="{'text-danger':product.isCheaper, 'fw-bold':product.isCheaper}">NT$ {{ numberComma(product.price)}}</span>
                  <span > / {{ product.num }}{{ product.unit }}</span>
                  <span class="badge rounded-pill text-yellow border border-yellow ms-auto bg-lightYellow">
                    {{ product.averageRate }}
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
          <swiper-slide v-for="product in goodProducts" :key="product.id">
            <div class="card position-relative">
              <div class="card-img-hover position-relative">
                <RouterLink :to="`/products/${product.id}`">
                  <img :src="product.imgUrl" class="object-fit-cover card-img" :alt="product.title">
                  <span v-if="product.isCheaper" class="fs-md-14 fs-12 text-white p-2 bg-primary position-absolute top-0 start-0">
                    {{ (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))) % 10 === 0 ? (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))).toString().charAt(0) : 100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0)) }} 折
                  </span>
                </RouterLink>
                <button type="button" class="position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-2 m-md-3" @click="()=>addBookmark('productBookmarks' ,product, uid)">
                  <img src="../../assets/images/image5.png" alt="收藏按鈕-未收藏">
                </button>
                <div v-for="mark in productBookmarks" :key="mark">
                  <button v-if="mark === product.id" type="button" class="position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-2 m-md-3"  @click="()=>deleteBookmark('productBookmarks', product.id, uid)">
                      <img src="../../assets/images/image4.png" alt="收藏按鈕-已收藏">
                  </button>
                </div>
                <button @click="()=>addCart(product)" type="button" class="btn-buy border-0 bg-transparent position-absolute end-0 bottom-0 m-2 m-md-3 p-0">
                  <img src="../../assets/images/icon-cart.png" alt="購物車按鈕" class="shadow-sm">
                </button>
              </div>
              <RouterLink :to="`/products/${product.id}`" class="card-body px-0 py-2 py-md-3 text-decoration-none link-darkBrown">
                <h3 class="fw-bold fs-md-5 fs-6">{{product.title}}</h3>
                <div class="d-flex align-items-center flex-wrap fs-md-6 fs-12">
                  <del class="me-2 text-muted" :class="{'d-none': !product.isCheaper}">NT$ {{ numberComma(product.originalPrice) }}</del>
                  <span class="me-1" :class="{'text-danger':product.isCheaper, 'fw-bold':product.isCheaper}">NT$ {{ numberComma(product.price)}}</span>
                  <span > / {{ product.num }}{{ product.unit }}</span>
                  <span class="badge rounded-pill text-yellow border border-yellow ms-auto bg-lightYellow d-none d-md-block">
                    {{ product.averageRate }}
                    <i class="bi bi-star-fill"></i>
                  </span>
                </div>
                <div class="text-end mt-1 d-md-none fs-12">
                  <span class="badge rounded-pill text-yellow border border-yellow bg-lightYellow">
                    {{ product.averageRate }}
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
<style>
/* 頁尾圓點 - 寫在這才有用 */
.swiper-pagination span{
  --swiper-pagination-color: #4572c2;
}
</style>
