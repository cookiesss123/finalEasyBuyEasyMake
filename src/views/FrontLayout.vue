<template>
  <div class="d-flex flex-column min-height-100">
    <header class="fixed-top">
      <nav class="navbar navbar-expand-lg navbar-light backdrop-blur-10 bg-transGray-4" :class="{'bg-white': searchToggle}">
        <div class="container">
          <h1 class="mb-0 me-auto">
            <RouterLink to="/home" @click="reload('/home')" class="navbar-brand d-flex align-items-center">
              <img src="../assets/images/loadingLogo.png" class="logo me-1 mt-n1" alt="logo">
              <div>
                <p class="text-darkBrown mb-0 fs-6" >甜點食譜一鍵購</p>
                <p class="fw-light mb-0 font-style-Chathura mt-n2 text-purple fs-5">Easy Buy Easy Make</p>
              </div>
            </RouterLink>
          </h1>

          <button class="btn position-relative border-0 d-lg-none pb-0 me-md-3"  @click="()=>this.$refs.cartModal.show()">
            <span v-if="cartNum !== 0" class="position-absolute top-0 end-0 translate-middle-y rounded-circle border fw-bold border-primary text-primary fs-10 alert-num">
              {{ cartNum }}
            </span>
            <span class="material-icons text-gradient fs-5" >shopping_cart</span>
          </button>

          <RouterLink  @click="reload('/bookmarks')" to="/bookmarks" class="btn position-relative pb-0 border-0 d-lg-none me-md-3">
            <span  class="text-gradient material-icons fs-5">
                {{ this.$route.fullPath === '/bookmarks' ? 'favorite' : 'favorite_border' }}
              </span>
          </RouterLink>

          <button class="navbar-toggler btn border-0 me-md-3" type="button" @click="()=>searchToggle = !searchToggle">
            <span class="material-icons-outlined fs-5 text-gradient" >search</span>
          </button>

          <button class="navbar-toggler btn border-0 me-md-3" type="button" @click="()=>menuToggle = !menuToggle">
            <span class="material-icons-outlined fs-5 text-gradient" >
              menu
            </span>
          </button>
          <div id="navbarNav" class="collapse navbar-collapse " ref="menuCollapse" >
            <ul class="mainMenu navbar-nav mx-auto text-center mb-1 mb-lg-0">
              <li class="nav-item me-lg-3">
                <RouterLink to="/recipes" @click="reload('/recipes')" active-class="active-link" class="nav-link d-inline-block ">甜點食譜</RouterLink>
              </li>
              <li class="nav-item mx-lg-3">
                <RouterLink to="/products" @click="reload('/products')" active-class="active-link"  class="nav-link d-inline-block " >材料購買</RouterLink>
              </li>
              <li class="nav-item mx-lg-3">
                <RouterLink to="/discounts"  @click="reload('/discounts')" active-class="active-link"  class="nav-link d-inline-block " >優惠特報</RouterLink>
              </li>
              <li class="nav-item ms-lg-3">
                <RouterLink to="/member"  @click="reload('/member')" active-class="active-link" class="nav-link d-inline-block" >會員專區</RouterLink>
              </li>
            </ul>
            <ul class="navbar-nav me-lg-4 mt-2 pb-3 mt-lg-0 pb-lg-0" v-if="!uid">
              <li class="nav-item text-center">
                <RouterLink to="/loginSignup" @click="reload('/signup')" class="login-signup btn-outline-gradient px-3 text-decoration-none rounded-pill fs-md-6 fs-14 py-2 fw-bold">登入 / 註冊</RouterLink>
              </li>
            </ul>
            <ul class="navbar-nav d-lg-flex align-items-lg-center me-lg-3 text-center" v-else-if="uid">
              <li class="nav-item me-lg-3" v-if="user.admin">
                <RouterLink to="/admin/products" class="nav-link">進入後台</RouterLink>
              </li>
              <li class=" me-4 d-flex align-items-center justify-content-center">
                <img v-if="user.headshotImg" :src="user.headshotImg" alt="會員大頭貼" height="50" width="50" class="rounded-circle object-fit-cover blur-shadow">
                <i v-else-if="!user.headshotImg" class="bi bi-person-circle fs-1 text-primary"></i>
                <span class="fw-bold fs-6 ms-3">
                  {{ user.nickName }}
                </span>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link " @click.prevent="logout">登出</a>
              </li>
            </ul>
            <RouterLink  @click="reload('/bookmarks')" to="/bookmarks" class="btn position-relative border-0 pb-0 d-none d-lg-block">
              <span  class="text-gradient material-icons fs-4">
                {{ this.$route.fullPath === '/bookmarks' ? 'favorite' : 'favorite_border' }}
              </span>
            </RouterLink>

            <button class="btn position-relative border-0 pb-0 d-none d-lg-block"  @click="()=>this.$refs.cartModal.show()">
              <span v-if="cartNum !== 0" class="position-absolute top-0 end-0 translate-middle-y rounded-circle border fw-bold border-primary text-primary fs-12  alert-num">
                {{ cartNum }}
              </span>
              <span class="material-icons text-gradient fs-4" >shopping_cart</span>
          </button>
          </div>
        </div>
      </nav>
        <div class="bg-white collapse navbar-collapse pb-4" ref="searchCollapse">
          <div class="container">
            <!-- 食譜搜尋 -->
            <select name="" id="" class="form-select d-lg-none text-center mb-4" v-model="searchItem">
              <option value="食譜搜尋">食譜搜尋</option>
              <option value="產品搜尋">產品搜尋</option>
            </select>
            <div v-if="searchItem === '食譜搜尋'" class="d-lg-none">
              <h5 class="text-center fw-bold">食譜搜尋</h5>
              <ul class="list-unstyled">
                <li class=" mb-3 d-flex flex-column border-bottom border-lightBrownGray">
                  <label for="category" class="form-label fs-14">種類</label>
                  <select name="" id="category"  class="form-select border-0" v-model="selectItem">
                    <option value="全部" selected>全部</option>
                    <option value="台式甜點">台式甜點</option>
                    <option value="法式甜點">法式甜點</option>
                    <option value="美式甜點">美式甜點</option>
                    <option value="日式甜點">日式甜點</option>
                    <option value="義式甜點">義式甜點</option>
                  </select>
                </li>
                <li class=" mb-3 d-flex flex-column border-bottom border-lightBrownGray">
                  <label for="category" class="form-label  fs-14" >成本或評價</label>
                  <select name="" id="category"  class="form-select border-0" v-model="priceOrRate">
                    <option value="成本">成本</option>
                    <option value="評價">評價</option>
                  </select>
                </li>
                <li class=" d-flex flex-column border-bottom border-lightBrownGray ">
                  <label for="category" class="form-label fs-14" >由高到低或由低到高</label>
                  <select name="" id="category"  class="form-select border-0" v-model="highOrLow">
                    <option value="不拘">不拘</option>
                    <option value="高到低">高到低</option>
                    <option value="低到高">低到高</option>
                  </select>
                </li>
              </ul>
              <div class="pt-2 border-0 position-relative ">
                <div class="border rounded-pill border-primary">
                  <input type="search" class="form-control border-0 rounded-pill" placeholder="請輸入甜點名稱" v-model="recipeSearchName" @keyup.enter="searchRecipes">
                  <button type="submit" class="border-0 bg-transparent position-absolute end-0 bottom-0" @click="searchRecipes">
                    <span class="material-icons-outlined text-primary" >search</span>
                  </button>
                </div>
              </div>
            </div>
            <!-- 產品搜尋 -->
            <div class="d-lg-none" v-if="searchItem === '產品搜尋'">
              <h5 class="text-center fw-bold">產品搜尋</h5>
              <ul class="list-unstyled">
                <li class=" mb-3 d-flex flex-column border-bottom  border-lightBrownGray">
                  <label for="category" class="form-label  fs-14" >種類</label>
                  <select name="" id="category"  class="form-select border-0" v-model="pageStatus">
                    <option value="全部">全部</option>
                    <option value="食材組合包">食材組合包</option>
                    <option value="熱銷單品">熱銷單品</option>
                    <option value="特價商品">特價商品</option>
                  </select>
                </li>
                <li class=" mb-3 d-flex flex-column border-bottom border-lightBrownGray">
                  <label for="productPriceOrRate" class="form-label fs-14" >價格或評價</label>
                  <select name="" id="productPriceOrRate"  class="form-select border-0" v-model="productPriceOrRate">
                    <option value="價格">價格</option>
                    <option value="評價">評價</option>
                  </select>
                </li>
                <li class="d-flex flex-column border-bottom  border-lightBrownGray">
                  <label for="productHighOrLow" class="form-label fs-14" >由高到低或由低到高</label>
                  <select name="" id="productHighOrLow"  class="form-select border-0" v-model="productHighOrLow">
                    <option value="不拘">不拘</option>
                    <option value="高到低">高到低</option>
                    <option value="低到高">低到高</option>
                  </select>
                </li>
              </ul>
              <div class="pt-2 border-0 position-relative">
                <div class="border rounded-pill border-primary">
                  <input type="search" class="form-control border-0 rounded-pill" placeholder="請輸入產品名稱" v-model="productSearchName" @keyup.enter="searchProducts">
                  <button type="submit" class="border-0 bg-transparent position-absolute end-0 bottom-0" @click="searchProducts">
                  <span class="material-icons-outlined text-primary">search</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
    </header>
    <RouterView :key="$route.fullPath" class="flex-grow-1"></RouterView>
    <CartModal ref="cartModal"></CartModal>
    <ChatModal ref="chatModal"></ChatModal>
    <button type="button" ref="upArrow" class="rounded-circle  py-2 px-13 bg-primary hvr-float position-fixed border-0 bottom-0 end-0 m-3 z-index-1 transition-fade" :class="{'fade': !showScrollArrow, 'show': showScrollArrow}"  @click.prevent="goToTop">
      <i class="bi bi-chevron-up fs-5 text-white"></i>
    </button>

    <button type="button" v-if="uid" class="rounded-circle py-2 px-13 bg-primary hvr-float position-fixed border-0 bottom-0 end-0 mx-88 my-3 z-index-1" @click="()=>this.$refs.chatModal.show()">
      <span v-if="this.$refs.chatModal && this.$refs.chatModal.newChatNum !== 0" class="position-absolute text-primary fw-bold border border-primary alert-num rounded-circle fs-12 top-0 start-100 translate-middle">
        {{ this.$refs.chatModal.newChatNum }}
      </span>
      <i class="bi bi-chat-dots fs-5 text-white"></i>
    </button>

    <footer class="mt-auto position-relative bg-light-purple-secondary py-4">
        <div class="container d-flex flex-lg-row flex-column align-items-center justify-content-between">
          <div class=" d-flex justify-content-center align-items-center mb-2 mb-lg-0">
              <img src="../assets/images/loadingLogo.png" class="logo me-1" alt="logo">
              <div>
                <p class="text-darkBrown mb-0 fs-6">甜點食譜一鍵購</p>
                <p class="fw-light mb-0 font-style-Chathura mt-n2 text-purple fs-5" >Easy Buy Easy Make</p>
              </div>
          </div>

          <div>
            <p class="mb-0 text-center text-lg-start fs-10">本網站僅作為網頁製作練習使用<br class="d-block d-lg-none"><span class="d-none d-lg-inline-block">，</span>圖片、資料源自網路，無任何商業利益行為</p>
            <p class="mb-lg-0 fs-10">Copyright © 2022 甜點食譜一鍵購 All Rights Reserved.</p>
          </div>
          <ul class="text-center mb-0">
            <li class="hvr-bob me-3 ms-n3">
              <a href="https://www.facebook.com/profile.php?id=61551688473004" class="text-decoration-none link-primary">
                <i class="bi bi-facebook fs-lg-35 fs-3"></i>
              </a>
            </li>
            <li class="hvr-bob">
              <a href="mailto:@EasyMakeEasyBuy.gmail.com" class="text-decoration-none link-primary">
                <i class="bi bi-envelope fs-lg-35 fs-3"></i>
              </a>
            </li>
          </ul>

        </div>
    </footer>
  </div>
</template>
<script>
import { mapActions, mapState, mapGetters } from 'pinia'
import cartStore from '../stores/carts'
import { RouterView, RouterLink } from 'vue-router'
import Collapse from 'bootstrap/js/dist/collapse'
import CartModal from '../components/CartModal.vue'
import ChatModal from '../components/ChatModal.vue'

export default {
  data () {
    return {
      menuToggle: false,
      searchToggle: false,
      menuCollapse: {},
      searchCollapse: {},

      recipeSearchName: '',
      selectItem: '全部',
      highOrLow: '不拘',
      priceOrRate: '成本',

      productSearchName: '',
      productHighOrLow: '低到高',
      productPriceOrRate: '價格',
      pageStatus: '全部',

      showScrollArrow: false,
      searchItem: '食譜搜尋'
    }
  },
  components: {
    RouterLink,
    RouterView,
    CartModal,
    ChatModal
  },
  methods: {
    ...mapActions(cartStore, ['checkLogin', 'logout', 'goToTop']),
    reload (path) {
      if (this.$route.fullPath === path) {
        location.reload()
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
      this.searchToggle = false

      this.recipeSearchName = ''
      this.highOrLow = '不拘'
      this.priceOrRate = '成本'
      this.selectItem = '全部'
    },
    // 產品搜尋
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
      this.searchToggle = false

      this.productSearchName = ''
      this.productHighOrLow = '不拘'
      this.productPriceOrRate = '價格'
      this.pageStatus = '全部'
    },
    handleScroll () {
      this.showScrollArrow = window.scrollY > 1000
    }
  },
  mounted () {
    this.checkLogin()
    window.addEventListener('scroll', this.handleScroll)
    this.menuCollapse = new Collapse(this.$refs.menuCollapse, {
      toggle: false
    })

    this.searchCollapse = new Collapse(this.$refs.searchCollapse, {
      toggle: false
    })
  },
  computed: {
    ...mapState(cartStore, ['user', 'uid', 'cartItems']),
    ...mapGetters(cartStore, ['cartNum'])
  },
  watch: {
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
    '$route.fullPath' () {
      this.menuToggle = false
      this.searchToggle = false

      if (this.$route.fullPath.match('products')) {
        this.searchItem = '產品搜尋'
      } else if (this.$route.fullPath.match('recipes')) {
        this.searchItem = '食譜搜尋'
      }
    }
  }
}
</script>
