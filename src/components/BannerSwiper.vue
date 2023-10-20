<template>
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
            <swiper-slide v-for="(item, index) in bannerSwiper" :key="item.mainImg" class="py-5" :class="item.bgColor">
                <div class="container">
                    <div class="row gx-76">
                        <div class="col-6 position-relative">
                            <!-- 圓形 -->
                            <div class="position-absolute white-circle"></div>
                            <div class="position-absolute rounded-circle" :class="item.lineColor"></div>

                            <!-- 長條圓形 -->
                            <div class="banner-bar" :class="item.barColor" style="left: 84%; top: -10%;" ></div>
                            <div class="banner-bar bg-white" style="left: 87%; top: -6%;" ></div>

                            <div class="banner-bar" :class="item.barColor" style=" left: 87%; top: -2%;" ></div>
                            <div class="banner-bar-short" :class="item.barColor" style="left: 112%; top: -2%;" ></div>

                            <div class="banner-bar bg-white" style="left: 87%; top: 2%;"></div>

                            <div class="banner-bar" :class="item.barColor" style="left: 84%; top: 6%;"></div>

                            <div class="banner-bar bg-white" style=" left: 84%; top: 10%;" ></div>
                            <div class="banner-dot bg-white" style="left: 75%; top: 10%;" ></div>

                            <div class="banner-bar" :class="item.barColor" style=" left: 87%; top: 14%;" ></div>
                            <div class="banner-bar bg-white" style=" left: 84%; top: 18%;" ></div>
                            <div class="banner-bar" :class="item.barColor" style=" left: 90%; top: 22%;" ></div>
                            <div class="banner-bar bg-white" style="left: 97%; top: 26%;" ></div>
                            <div class="banner-bar" :class="item.barColor" style=" left: 86%; top: 30%;" ></div>
                            <div class="banner-bar bg-white" style=" left: 86%; top: 34%;" ></div>

                            <div class="banner-bar" :class="item.barColor" style="left: 87%; top: 38%;" ></div>
                            <div class="banner-dot" :class="item.barColor" style="left: 110%; top: 38%;" ></div>

                            <div class="banner-bar bg-white" style=" left: 89%; top: 42%;" ></div>
                            <div class="banner-bar-short bg-white" style="left: 76%; top: 42%;" ></div>

                            <div class="banner-bar" :class="item.barColor" style="left: 90%; top: 46%;" ></div>
                            <div class="banner-bar bg-white" style=" width: 90px; left: 98%; top: 50%;" ></div>
                            <div class="banner-bar" :class="item.barColor" style="left: 86%; top: 54%;" ></div>
                            <div class="banner-bar bg-white" style=" left: 86%; top: 58%;" ></div>
                            <div class="banner-bar" :class="item.barColor" style="left: 85%; top: 62%;" ></div>
                            <div class="banner-bar bg-white" style=" left: 95%; top: 66%;" ></div>
                            <div class="banner-bar" :class="item.barColor" style="left: 87%; top: 70%;" ></div>
                            <div class="banner-bar bg-white" style="left: 87%; top: 74%;" ></div>
                            <div class="banner-bar" :class="item.barColor" style="left: 85%; top: 78%;" ></div>

                            <div class="banner-bar bg-white" style="left: 95%; top: 82%;" ></div>
                            <div class="banner-dot bg-white" style="left: 88%; top: 82%;" ></div>

                            <div class="banner-bar" :class="item.barColor" style="left: 85%; top: 86%;" ></div>

                            <div class="banner-bar bg-white" style="left: 88%; top: 90%;" ></div>
                            <div class="banner-bar" :class="item.barColor" style="left: 95%; top: 94%;" ></div>
                            <div class="banner-bar bg-white" style="left: 98%; top: 98%;" ></div>
                            <div class="banner-bar" :class="item.barColor" style="left: 91%; top: 102%;" ></div>
                            <div class="banner-bar-short" :class="item.barColor" style="left: 113%; top: 102%;" ></div>

                            <div class="banner-bar bg-white" style="left: 89%; top: 106%;" ></div>
                            <div class="banner-bar" :class="item.barColor" style="left: 99%; top: 110%;" ></div>

                            <div class="spin position-absolute">
                            <div class="spin-container">
                                <div class="shape">
                                    <div class="spin-img" :class="{'bg-img-150': index === 0}" :style="{'background-image': `url(${item.mainImg})`}" ></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-6 py-5  position-relative z-index-1">
                            <h2 class="fw-bold lh-base fs-1 letter-spacing-10" :class="{'text-purple ': index === 0, 'text-primary ': index === 1}">
                                <p class="d-flex align-items-center">
                                    <!-- src="../assets/images/makeCupcake.png" -->
                                <img :src="`src/assets/images/${item.img1}`" class="me-3" style="width: 35px;" :alt="item.img1.split('.')[0]">
                                {{ item.title1 }}
                                </p>
                                <p class="d-flex  align-items-center">
                                {{ item.title2 }}
                                <img :src="`src/assets/images/${item.img2}`" class="ms-3" style="width: 35px;" :alt="item.img2.split('.')[0]">
                                </p>
                            </h2>
                            <p class="text-center text-lg-start mb-0">{{ item.subTitle1 }}<br class="d-block d-lg-none"> {{ item.subTitle2 }}</p>
                            <div v-if="index === 0" class="col-10 d-none d-lg-block mt-5">
                                <p class="mb-0">立即搜索新鮮食材！</p>
                                <div class="card border-purple rounded-2">
                                <div class="card-body">
                                    <div class="row">
                                    <div class="col-4 border-end border-purple">
                                        <p class="card-title mb-0 fs-14 text-purple">種類</p>
                                        <select name="種類" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="pageStatus">
                                        <option v-for="item in selections.productCategory" :key="item.icon" :value="item.title">{{ item.title }}</option>
                                        </select>
                                    </div>
                                    <div class="col-4 border-end border-purple">
                                        <p class="card-title mb-0 fs-14 text-purple">價格或評價</p>
                                        <select name="價格或評價" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="productPriceOrRate">
                                        <option v-for="item in selections.rateOrPrice" :key="item" :value="item">{{ item }}</option>
                                        </select>
                                    </div>
                                    <div class="col-4 border-purple">
                                        <p class="card-title mb-0 fs-14 text-purple">高或低</p>
                                        <select name="高或低" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="productHighOrLow">
                                        <option v-for="item in selections.highOrLow" :key="item" :value="item">{{ item }}</option>
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
                            <div v-else-if="index === 1" class="col-10 d-none d-lg-block mt-5">
                                <p class="mb-0">立即搜索心儀食譜！</p>
                                <div class="card border-primary rounded-2">
                                <div class="card-body">
                                    <div class="row">
                                    <div class="col-4 border-end border-primary">
                                        <p class="card-title mb-0 fs-14 text-primary">種類</p>
                                        <select name="種類" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="selectItem">
                                        <option v-for="item in selections.dessertCategory" :key="item.icon" :value="item.title">{{ item.title }}</option>
                                        </select>
                                    </div>
                                    <div class="col-4 border-end border-primary">
                                        <p class="card-title mb-0  fs-14 text-primary">成本或評價</p>
                                        <select name="成本或評價" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="priceOrRate">
                                        <option v-for="item in selections.rateOrCost" :key="item" :value="item">{{ item }}</option>
                                        </select>
                                    </div>
                                    <div class="col-4 border-primary">
                                        <p class="card-title mb-0  fs-14 text-primary">高或低</p>
                                        <select name="高或低" class="form-select border-0 text-darkBrown ps-0 text-center" v-model="highOrLow">
                                        <option v-for="item in selections.highOrLow" :key="item" :value="item">{{ item }}</option>
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
        <swiper-slide v-for="(item, index) in bannerSwiper" :key="item.mainImg" class=" position-relative pb-4" :class="{'bg-secondary-light-purple': index === 0, 'bg-light-purple-secondary': index === 1}">
            <div class="py-4 bg-white "></div>
            <div class="banner-bar rotate-90 bg-white rotate-90" style="left: -45px; top: 9%;" ></div>

            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left:-21px; top: 8%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 3px; top: 6%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 27px; top: 14%;" ></div>

            <div class="banner-bar rotate-90 bg-white" style="left: 51px; top: 13%;" ></div>
            <div class="banner-dot rotate-90 bg-white" style="left: 45px; top: 23%;" ></div>

            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 75px; top: 8%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 99px; top: 5%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 123px; top: 14%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 147px; top: 8%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 171px; top: 11%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 195px; top: -2%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 219px; top: 9%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 243px; top: 5%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 267px; top: 9%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 291px; top: -2%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 315px; top: 13%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 339px; top: 7%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 363px; top: 10%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 387px; top: 4%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 411px; top: 9%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 435px; top: -2%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 459px; top: 12%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 483px; top: 7%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 507px; top: 8%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 531px; top: 13%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 555px; top: 13%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 579px; top: 9%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 603px; top: 9%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 627px; top: 2%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 651px; top: 13%;" ></div>

            <div class="banner-bar rotate-90 bg-white" style="left: 675px; top: 5%;" ></div>
            <div class="banner-dot rotate-90 bg-white" style="left: 669px; top: 18%;" ></div>

            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 699px; top: 14%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 723px; top: 9%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 747px; top: 9%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 771px; top: 2%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 795px; top: 13%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 819px; top: 9%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 843px; top: 9%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 867px; top: 2%;" ></div>
            <div class="banner-bar rotate-90" :class="item.barColorMobile" style="left: 891px; top: 13%;" ></div>
            <div class="banner-bar rotate-90 bg-white" style="left: 915px; top: 2%;" ></div>

            <div class="rounded-circle white-circle translate-middle-x"></div>
            <div class="rounded-circle translate-middle-x" :class="item.lineColor"></div>
            <div class="spin translate-middle-x">
                <div class="spin-container">
                <div class="shape">
                    <div class="spin-img bg-img-150" :style="{'background-image': `url(${item.mainImg})`}"></div>
                </div>
                </div>
            </div>
            <div class="mt-380">
                <h2 class="fw-bold lh-base fs-4 letter-spacing-10" :class="{'text-purple': index === 0, 'text-primary': index === 1}">
                <p class="d-flex align-items-center justify-content-center">
                    <img :src="`src/assets/images/${item.img1}`" class="me-3 img-lg-50-sm-30" :alt="item.img1.split('.')[0]">
                    {{ item.title1 }}
                </p>
                <p class="d-flex  align-items-center justify-content-center">
                    {{ item.title2 }}
                    <img :src="`src/assets/images/${item.img2}`" class="ms-3 img-lg-50-sm-30" :alt="item.img2.split('.')[0]">
                </p>
                </h2>
                <p class="text-center mb-0">{{ item.subTitle1 }}<br> {{ item.subTitle2 }}</p>
            </div>
        </swiper-slide>
        </swiper>
    </div>
    </section>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
import { selections, bannerSwiper } from '../utils/publicData'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
export default {
  components: {
    Swiper,
    SwiperSlide
  },
  data () {
    return {
      bannerSwiper,
      selections,
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
      recipeSearchName: '',
      selectItem: '全部',
      highOrLow: '不拘',
      priceOrRate: '成本',

      productSearchName: '',
      productHighOrLow: '低到高',
      productPriceOrRate: '價格',
      pageStatus: '全部'
    }
  },
  methods: {
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
    }
  }
}
</script>
<style>
/* 頁尾圓點 - 寫在這才有用 */
.swiper-pagination span{
  --swiper-pagination-color: #4572c2;
}
</style>
