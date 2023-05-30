<template>
  <!-- 在路徑是 checkout 或 orderSuccess的時候關閉 || this.$route.fullPath === '/mobileCart' -->
  <!-- :class="{'sidebar-toggled': closeCart || this.$route.fullPath === '/orderSuccess' || this.$route.fullPath === '/checkout'}" -->
  <!-- style="min-height: 100vh;" 加入此畫面高度最小是視窗高度 -->
     <div class="d-flex flex-column" style="min-height: 100vh;">
      <!-- 標頭 -->
      <header class="fixed-top">
        <div class="bg-white">
          <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container">
              <div class="d-flex align-items-center">
                <!-- cancelBorder -->
              <RouterLink to="/home" class="navbar-brand ">
                <img src="../assets/images/logo.png" style="height: 35px;" class="logo" alt="">
              </RouterLink>
              <!-- 手機 bar -->
              <div class="position-absolute end-0 ">
                <!-- 手機購物車按鈕 -->
                <button class="btn btn-sm position-relative p-0 d-lg-none border-0 me-3"  @click="()=>this.$refs.cartModal.show()">
                  <span v-if="cartNum !== 0"  class="position-absolute top-0 start-100 translate-middle bg-danger border border-light text-white" style="padding: 2px; border-radius: 25px; width: 25px; height: 25px; font-size: 12px;">                    {{ cartNum }}
                </span>
                  <img src="../../src/assets/images/icon-cart-hover.png" alt="" width="35">
                </button>
                <RouterLink to="/bookmarks" class="d-lg-none btn btn-sm position-relative mt-1 border-0 cancelBorder">
                  <i class="bi bi-heart-fill fs-2 link-brown bookmarkBtn"></i>
                </RouterLink>

                  <!-- searchCollapse 搜尋 -->
                  <button v-if="this.$route.fullPath === '/home' || this.$route.fullPath.includes('/recipes') || this.$route.fullPath.includes('/products')" class="navbar-toggler btn border-0" type="button" @click="()=>searchToggle = !searchToggle">
                  <img src="../assets/images/icon-searchMobile.png" style="height: 25px;" alt="">
                </button>

                <!-- 手機菜單按鈕 -->
                <button class="navbar-toggler btn border-0" type="button" @click="()=>menuToggle = !menuToggle">
                  <span class="navbar-toggler-icon" style="width: 24px; height: 24px;" :style="{'background-image':`url(${toggleBtn})`}" ></span>
                </button>

              </div>
              </div>

              <!-- 菜單桌機手機板 -->
              <div id="navbarNav" class="collapse navbar-collapse" ref="menuCollapse" >
                <ul class="mainMenu navbar-nav mx-auto text-center text-lg-start">
                  <li class="nav-item me-lg-3" style="white-space:nowrap">
                    <!-- :class="{'link-orange':this.$route.fullPath === '/recipes'}" -->
                    <!-- d-inline-block 避免手機線條占滿 -->
                    <RouterLink to="/recipes" active-class="active-link" class="nav-link d-inline-block">甜點食譜</RouterLink>
                  </li>
                  <li class="nav-item mx-lg-3" style="white-space:nowrap">
                    <!--   :class="{'link-orange':this.$route.fullPath === '/products', 'navActive': this.$route.fullPath === '/products'}" -->
                    <RouterLink to="/products" active-class="active-link"  class="nav-link d-inline-block">材料購買</RouterLink>
                  </li>
                  <li class="nav-item mx-lg-3" style="white-space:nowrap">
                    <!--  :class="{'link-orange':this.$route.fullPath === '/discounts', 'navActive': this.$route.fullPath === '/discounts'}" -->
                    <RouterLink to="/discounts" active-class="active-link"  class="nav-link d-inline-block">優惠特報</RouterLink>
                  </li>
                  <li class="nav-item ms-lg-3" style="white-space:nowrap">
                    <!-- :class="{'link-orange':this.$route.fullPath === '/member', 'navActive': this.$route.fullPath === '/member'}" -->
                    <RouterLink to="/member" active-class="active-link" class="nav-link d-inline-block" >會員專區</RouterLink>
                  </li>
                </ul>
              <!-- d-lg-flex align-items-lg-center -->
              <!-- ms-auto -->
              <ul class=" navbar-nav d-lg-flex align-items-lg-center my-2 my-lg-0" v-if="!uid">
                <li class="login d-flex align-items-center justify-content-center">
                  <RouterLink to="/login" class="text-decoration-none link-brown border-0 me-1 d-lg-none">
                  登入 /
                </RouterLink>
                <RouterLink to="/signup" class="signup ms-1 btn d-lg-none btn-brown rounded-pill text-white">
                  註冊
                </RouterLink>
                </li>

                <li class="login nav-item me-lg-3 d-none d-lg-block" style="white-space:nowrap">
                  <RouterLink to="/login" active-class="active-link" class="nav-link text-center text-lg-start">登入</RouterLink>
                </li>
                <li class="signup nav-item me-4 d-none d-lg-block" style="white-space:nowrap">
                  <!--  data-bs-toggle="tooltip" data-bs-placement="bottom" title="立即註冊抽獎去！" -->
                  <!-- btn-brown -->
                  <RouterLink to="/signup"  class="btn btn-brown badge rounded-pill fs-6 px-4 py-3 text-white">註冊</RouterLink>
                </li>
              </ul>
              <!-- ms-auto -->
              <ul class="navbar-nav d-lg-flex align-items-lg-center" v-else-if="uid">
                <li class="nav-item me-lg-3" v-if="user.admin" style="white-space:nowrap">
                  <RouterLink to="/admin/products"  class="nav-link text-center text-lg-start">進入後台</RouterLink>
                </li>
                <li class="nav-item ms-3 fs-5 me-5 d-flex align-items-center justify-content-center justify-content-lg-start">
                  <img v-if="user.headshotImg" :src="user.headshotImg" alt="" height="50" width="50" class="me-3 rounded-circle" style="object-fit: cover;">
                  <i v-else-if="!user.headshotImg" class="bi bi-person-circle me-3 fs-1"></i>

                  <span class="fw-bold" style="white-space:nowrap; font-size: 16px;">
                    {{ user.nickName }}
                  </span>
                </li>
                <!-- 桌機 -->
                <li class="nav-item me-lg-3 " style="white-space:nowrap">
                  <a href="#" class="nav-link text-center text-lg-start" @click.prevent="logout">登出</a>
                </li>
              </ul>
              <RouterLink to="/bookmarks" class="btn btn-sm position-relative me-4 mt-1 border-0 hvr-push d-none d-lg-block" style="border: none !important;">
                <i class="bi bi-heart-fill fs-2 link-brown bookmarkBtn"></i>
              </RouterLink>
              <!-- 桌面cart按鈕 -->
              <!-- :class="{'clickBuyBtn': !closeCart}" -->
              <button type="button" class="btn position-relative p-0 border-0 d-none d-lg-block"  @click="()=>this.$refs.cartModal.show()">
                <span v-if="cartNum !== 0" class="position-absolute bg-danger border border-light text-white" style="padding: 2px; border-radius: 25px; width: 25px; height: 25px; font-size: 12px; top: -10px; left: 30px;">
                  {{ cartNum }}
                </span>
                <img src="../../src/assets/images/icon-cart-hover.png" alt="" width="45" class="border border-brown rounded-circle p-0">
              </button>
              </div>
            </div>
          </nav>

          <!-- 搜尋 -->
          <div class="collapse navbar-collapse py-1" ref="searchCollapse">
              <!-- 桌面隱藏 d-lg-none -->
              <!-- 食譜搜尋 -->
              <div v-if="this.$route.fullPath === '/home' || this.$route.fullPath.includes('/recipes')" class="m-4 d-lg-none">
                <h5 class="text-center fw-bold">食譜搜尋</h5>
                <ul class="list-unstyled">
                  <li class="text-center mb-3 d-flex flex-column border-bottom" style="border-color: #D3CCC1 !important;">
                    <label for="category" class="form-label me-auto ms-2 text-brown" style="font-size: 14px;">種類</label>
                    <select name="" id="category"  class="form-select border-0" v-model="selectItem">
                      <option value="全部" selected>全部</option>
                      <option value="台式甜點">台式甜點</option>
                      <option value="法式甜點">法式甜點</option>
                      <option value="美式甜點">美式甜點</option>
                      <option value="日式甜點">日式甜點</option>
                      <option value="義式甜點">義式甜點</option>
                    </select>
                  </li>
                  <li class="text-center mb-3 d-flex flex-column border-bottom" style="border-color: #D3CCC1 !important;">
                    <label for="category" class="form-label me-auto ms-2 mt-2 text-brown" style="font-size: 14px; ">成本或評價</label>
                    <select name="" id="category"  class="form-select border-0" v-model="priceOrRate">
                      <option value="成本">成本</option>
                      <option value="評價">評價</option>
                    </select>
                  </li>
                  <li class="text-center mb-3 d-flex flex-column border-bottom " style="border-color: #D3CCC1 !important;">
                    <label for="category" class="form-label me-auto ms-2 mt-2 text-brown" style="font-size: 14px; ">由高到低或由低到高</label>
                    <select name="" id="category"  class="form-select border-0" v-model="highOrLow">
                      <option value="不拘">不拘</option>
                      <option value="高到低">高到低</option>
                      <option value="低到高">低到高</option>
                    </select>
                  </li>
                </ul>
                <div class="bg-white border-0 position-relative">
                  <div class="border rounded-pill border-lightBrown">
                    <input type="search" class="form-control border-0 rounded-pill" placeholder="請輸入甜點名稱" v-model="recipeSearchName" @keyup.enter="searchRecipes" style="width: 90%;">
                    <button type="submit" class="border-0 bg-transparent position-absolute translate-middle" style="top:23px; right: -15px;" @click="searchRecipes">
                      <span class="material-icons-outlined text-lightBrown" >search</span>
                    </button>
                  </div>
                </div>
              </div>
              <!-- 產品搜尋 -->
              <div class="m-4 d-lg-none" v-else-if="this.$route.fullPath.includes('/products')">
                <h5 class="text-center fw-bold">產品搜尋</h5>
                <ul class="list-unstyled">
                  <li class="text-center mb-3 d-flex flex-column border-bottom " style="border-color: #D3CCC1 !important;">
                    <label for="category" class="form-label me-auto ms-2 mt-2 text-brown" style="font-size: 14px; ">種類</label>
                    <select name="" id="category"  class="form-select border-0" v-model="pageStatus">
                      <option value="全部">全部</option>
                      <option value="食材組合包">食材組合包</option>
                      <option value="熱銷單品">熱銷單品</option>
                      <option value="特價商品">特價商品</option>
                    </select>
                  </li>
                  <li class="text-center mb-3 d-flex flex-column border-bottom" style="border-color: #D3CCC1 !important;">
                    <label for="productPriceOrRate" class="form-label me-auto ms-2 mt-2 text-brown" style="font-size: 14px; ">價格或評價</label>
                    <select name="" id="productPriceOrRate"  class="form-select border-0" v-model="productPriceOrRate">
                      <option value="價格">價格</option>
                      <option value="評價">評價</option>
                    </select>
                  </li>
                  <li class="text-center mb-3 d-flex flex-column border-bottom " style="border-color: #D3CCC1 !important;">
                    <label for="productHighOrLow" class="form-label me-auto ms-2 mt-2 text-brown" style="font-size: 14px; ">由高到低或由低到高</label>
                    <select name="" id="productHighOrLow"  class="form-select border-0" v-model="productHighOrLow">
                      <option value="不拘">不拘</option>
                      <option value="高到低">高到低</option>
                      <option value="低到高">低到高</option>
                    </select>
                  </li>
                </ul>
                <div class=" border-0 position-relative">
                  <div class="border rounded-pill border-lightBrown">
                    <input type="search" class="form-control border-0 rounded-pill" placeholder="請輸入產品名稱" v-model="productSearchName" @keyup.enter="searchProducts" style="width: 90%;">
                    <button type="submit" class="border-0 bg-transparent position-absolute translate-middle" style="right: -15px; top:22px;" @click="searchProducts">
                    <span class="material-icons-outlined text-lightBrown" >search</span>
                    </button>
                  </div>
                </div>

              </div>
          </div>
        </div>
      </header>
      <!-- 強制觸發路由跳轉 這樣即使在同個頁面搜尋 依然可以觸發搜尋 this.$router.push -->
      <!-- style="flex-grow: 1;" 沒有這個也可 -->
      <RouterView :key="$route.fullPath" style="flex-grow: 1;"></RouterView>
      <!-- cart選單 -->
      <CartModal ref="cartModal"></CartModal>

      <!-- 向上箭頭 -->
      <button ref="upArrow" class="link-brown bg-transparent" :class="{'fade': !showScrollArrow, 'show': showScrollArrow}"  @click="goToTop" style="position: fixed; bottom: 20px; right: 20px;  border: 0 !important;">
        <i class="bi bi-arrow-up-circle-fill" style="font-size: 50px;"></i>
      </button>

      <footer class="" style=" margin-top: auto;" :class="{'bg-lightYellow': this.$route.fullPath !== '/login' || this.$route.fullPath !== '/signup', 'bg-white': this.$route.fullPath === '/login' || this.$route.fullPath === '/signup'}" >
          <div class="container d-flex flex-column flex-lg-row align-items-center" style="padding: 40px 0;">
            <img src="../assets/images/logo.png" class="logo mb-4 mb-lg-0 " alt="">
            <div class="ms-lg-auto d-flex flex-column align-items-end">
              <ul id="contactInfo" class="list-unstyled d-flex">
                <li class="me-4">
                  <a href="#" class="text-decoration-none link-darkBrown">
                    <i class="bi bi-instagram me-2" style="font-size: 34px;"></i>
                  </a>
                </li>
                <li class="me-4">
                  <a href="#" class="text-decoration-none link-darkBrown">
                    <i class="bi bi-facebook me-2" style="font-size: 34px;"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-decoration-none link-darkBrown">
                    <i class="bi bi-envelope me-2" style="font-size: 34px;"></i>
                  </a>
                </li>
              </ul>
              <p class="mb-0 text-center text-lg-start" style="font-size: 10px;">本網站僅作為網頁製作練習使用<br class="d-block d-lg-none"><span class="d-none d-lg-inline-block">，</span>圖片、資料源自網路，無任何商業利益行為</p>
              <p class="mb-0 text-lg-end text-center" style="font-size: 10px;">Copyright © 2022 甜點食譜一鍵購 All Rights Reserved.</p>
            </div>
          </div>
      </footer>
    </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/carts'
import { RouterView, RouterLink } from 'vue-router'
import Tooltip from 'bootstrap/js/dist/tooltip'
import toggleBtn from '../assets/images/icon-menuMobile.png'
import Collapse from 'bootstrap/js/dist/collapse'
import CartModal from '../components/CartModal.vue'
export default {
  data () {
    return {
      // user: {},
      // closeCart: true, // 預設關閉

      toggleBtn, // url 的網址都要這樣寫 banner圖片
      // 禁止同時展開 menu 和 搜尋框
      menuToggle: false,
      searchToggle: false,
      menuCollapse: {},
      searchCollapse: {},

      // 食譜搜尋
      recipeSearchName: '',
      selectItem: '全部',
      highOrLow: '不拘',
      priceOrRate: '成本',
      // 產品搜尋
      productSearchName: '',
      productHighOrLow: '低到高',
      productPriceOrRate: '價格',
      pageStatus: '全部',

      showScrollArrow: false
    }
  },
  components: {
    RouterLink,
    RouterView,
    CartModal
  },
  methods: {

    ...mapActions(cartStore, ['checkLogin', 'getUserInfo', 'logout']),
    // 取出token 存到 headers 這裡的nickName必須和其他介面取得的nickName相同狀態 這樣當許可證過期才會不見
    searchRecipes () {
      // 兩個頁面傳遞參數
      this.$router.push({
        name: 'RecipesView',
        query: {
          searchName: this.recipeSearchName,
          category: this.selectItem,
          valueHighOrLow: this.highOrLow,
          valuePriceOrRate: this.priceOrRate
        }
      })
      this.searchToggle = false

      // 傳送之後清空
      this.recipeSearchName = ''
      this.highOrLow = '不拘'
      this.priceOrRate = '成本'
      this.selectItem = '全部'
    },
    // 產品搜尋
    searchProducts () {
      // 兩個頁面傳遞參數
      this.$router.push({
        name: 'products',
        query: {
          searchName: this.productSearchName,
          valueHighOrLow: this.productHighOrLow,
          valuePriceOrRate: this.productPriceOrRate,
          pageStatus: this.pageStatus
        }
      })
      this.searchToggle = false

      // 傳送之後清空
      this.productSearchName = ''
      this.productHighOrLow = '不拘'
      this.productPriceOrRate = '價格'
      this.pageStatus = '全部'
    },
    // 箭頭返回最上方
    goToTop () {
      // 方法一
      // document.documentElement.scrollTop = 0
      // 方法二 這也可以，比較短
      window.scrollTo(0, 0)
    },
    handleScroll () {
      this.showScrollArrow = window.scrollY > 1000
    }
  },
  mounted () {
    // 沒用 因為跑得比其他頁面還慢
    this.checkLogin()
    // 監聽滾動事件
    window.addEventListener('scroll', this.handleScroll)
    // 一開始就把token 存到 headers 其他需要權限的功能就能用 如修改密碼
    // console.log(this.$route.fullPath.includes('/recipes'), '目前頁面')
    // this.menuCollapse = new Collapse(this.$refs.menuCollapse)
    // this.searchCollapse = new Collapse(this.$refs.searchCollapse)
    // this.menuCollapse.hide()
    this.menuCollapse = new Collapse(this.$refs.menuCollapse, {
      toggle: false
    })

    this.searchCollapse = new Collapse(this.$refs.searchCollapse, {
      toggle: false
    })

    // // 選取所有元素包含data-bs-toggle="tooltip"
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new Tooltip(tooltipTriggerEl)
    })
    // this.getCoupons()
  },
  computed: {
    ...mapState(cartStore, ['uid', 'token', 'userId', 'nickName', 'admin', 'cartItems', 'cartNum', 'user'])
    // ...mapState(cartStore, ['token', 'userId', 'nickName', 'admin', 'cart', 'cartItems', 'cartNum', 'loadingItem'])

  },
  watch: {
    // 要可以直接切換 不用再按一次才關閉
    menuToggle () {
      if (this.menuToggle === true) {
        this.menuCollapse.show()
        this.searchCollapse.hide()
        this.searchToggle = false
      } else if (this.menuToggle === false) {
        this.menuCollapse.hide()
      }
    },
    searchToggle () {
      if (this.searchToggle === true) {
        this.searchCollapse.show()
        this.menuCollapse.hide()
        this.menuToggle = false
      } else if (this.searchToggle === false) {
        this.searchCollapse.hide()
      }
    },
    // 換頁關閉 菜單
    '$route.fullPath' () {
      this.menuToggle = false
    }
  }
}
</script>
<style>
  #contactInfo li a span{
    /* font-size: 0; */
    /* transition: font-size .5s */
  }
  #contactInfo li a:hover span{
    font-size: 16px;

  }
  .bookmarkBtn:hover{
    color: #815B15 !important;
  }
  .nav-link{
    /* font-size: 16px; */
    font-weight: bold;
    color: #493A25;
  }

  .tooltip-inner {
    background-color: #F5AE4C;
    margin-top: 10px;
    color: #fff ;
    font-size: 18px;
    padding: 15px;
  }
 /* 工具提示窗向下 */
 .tooltip.bs-tooltip-bottom .tooltip-arrow::before {
          margin: -9px 0px;
          border-bottom-color: #F5AE4C;
        }

  .btn-lightBrown:hover {
    background-color: #493A25;
  }
/* 隱藏input輸入框的上下按鈕 Chrome, Safari, Edge, Opera */
input[type=number]::-webkit-outer-spin-button,
input[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* 改變 hover.css 線條相關設定 */
.hvr-underline-from-center::before {
    background: #F5AE4C;
    height: 2px;
}
/* 移除logo的線條 */
.cancelBorder{
  border:none !important;
}

.linkText{
  /* font-size: 0px; */
}
footer ul li:hover .linkText{
  /* font-size: 14px; */
}
</style>
