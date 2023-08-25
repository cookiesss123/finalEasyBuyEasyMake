<template>
  <div class="d-flex flex-column min-height-100">
    <header class="fixed-top">
      <nav class="navbar navbar-expand-lg navbar-light bg-transGray-4 backdrop-blur-10" :class="{'bg-white': searchToggle}">
        <div class="container">
          <h1 class="mb-0">
            <RouterLink to="/home" @click="reload('/home')" class="navbar-brand d-flex align-items-center me-auto">
              <img src="../assets/images/loadingLogo.png" class="logo me-1 mt-n1" alt="甜點食譜一鍵購logo">
              <div>
                <p class="text-darkBrown mb-0 fs-6" >甜點食譜一鍵購</p>
                <p class="fw-light mb-0 font-style-Chathura mt-n2 text-purple fs-5">Easy Buy Easy Make</p>
              </div>
            </RouterLink>
          </h1>
          <button class="btn position-relative border-0 pb-0 d-lg-none me-1"  @click="()=>this.$refs.cartModal.show()">
            <span v-if="cartNum !== 0" class="position-absolute top-0 end-0 translate-middle-y rounded-circle border fw-bold border-primary text-primary fs-12 alert-num">
              {{ cartNum }}
            </span>
            <span class="material-icons text-primary fs-4" >shopping_cart</span>
          </button>

          <RouterLink  @click="reload('/bookmarks')" to="/bookmarks" class="btn position-relative border-0 pb-0 d-lg-none">
              <span v-if="this.$route.fullPath === '/bookmarks'" class="material-icons link-primary fs-4">
                favorite
              </span>
              <span v-if="this.$route.fullPath !== '/bookmarks'" class="material-icons link-primary fs-4">
                favorite_border
              </span>
          </RouterLink>

          <button class="navbar-toggler btn border-0  link-primary" type="button" @click="()=>searchToggle = !searchToggle">
            <span class="material-icons-outlined fs-4" >search</span>
          </button>

          <button class="navbar-toggler btn border-0 link-primary" type="button" @click="()=>menuToggle = !menuToggle">
            <span class="material-icons-outlined fs-4" >
              menu
            </span>
          </button>

            <!-- 菜單桌機手機板 -->
          <div id="navbarNav" class="collapse navbar-collapse " ref="menuCollapse" >
            <ul class="mainMenu navbar-nav mx-auto text-center">
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
            <ul class="navbar-nav me-lg-4" v-if="!uid">
              <li class="nav-item text-center">
                <RouterLink to="/loginSignup" @click="reload('/signup')" class="loginSignup btn btn-outline-primary  rounded-pill fs-6 py-2 fw-bold">登入 / 註冊</RouterLink>
              </li>
            </ul>
            <ul class="navbar-nav d-lg-flex align-items-lg-center me-lg-3 text-center" v-else-if="uid">
              <li class="nav-item me-lg-3" v-if="user.admin">
                <RouterLink to="/admin/products" class="nav-link">進入後台</RouterLink>
              </li>
              <li class=" me-4 d-flex align-items-center justify-content-center">
                <img v-if="user.headshotImg" :src="user.headshotImg" alt="會員大頭貼" height="50" width="50" class="rounded-circle object-fit-cover img-blur-shadow">
                <i v-else-if="!user.headshotImg" class="bi bi-person-circle fs-1 text-primary"></i>
                <span class="fw-bold fs-6 ms-3">
                  {{ user.nickName }}
                </span>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link " @click.prevent="logout">登出</a>
              </li>
            </ul>
            <RouterLink  @click="reload('/bookmarks')" to="/bookmarks" class="hvr-push btn position-relative border-0 pb-0 d-none d-lg-block">
              <span v-if="this.$route.fullPath === '/bookmarks'" class="material-icons link-primary fs-4">
                favorite
              </span>
              <span v-if="this.$route.fullPath !== '/bookmarks'" class="material-icons link-primary fs-4">
                favorite_border
              </span>
            </RouterLink>
            <button class="hvr-push btn position-relative border-0 pb-0 d-none d-lg-block"  @click="()=>this.$refs.cartModal.show()">
            <span v-if="cartNum !== 0" class="position-absolute top-0 end-0 translate-middle-y rounded-circle border fw-bold border-primary text-primary fs-12  alert-num">
              {{ cartNum }}
            </span>
            <span class="material-icons text-primary fs-4" >shopping_cart</span>
          </button>
          </div>
        </div>
      </nav>
        <!-- 搜尋 -->
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
    <!-- 強制觸發路由跳轉 這樣即使在同個頁面搜尋 依然可以觸發搜尋 this.$router.push -->
    <RouterView :key="$route.fullPath" class="flex-grow-1"></RouterView>
    <!-- cart選單 -->
    <CartModal ref="cartModal"></CartModal>
    <!-- chat 聊天室 -->
    <ChatModal ref="chatModal"></ChatModal>
    <!-- 向上箭頭 -->
    <button type="button" ref="upArrow" class="link-primary hvr-float position-fixed border-0 bottom-0 end-0 m-3 bg-transparent" :class="{'fade': !showScrollArrow, 'show': showScrollArrow}"  @click="goToTop" >
      <i class="bi bi-arrow-up-circle-fill fs-35"></i>
    </button>

    <button type="button" v-if="uid" class="link-primary bg-transparent position-fixed border-0 bottom-0 end-0 mx-88 my-3" @click="()=>this.$refs.chatModal.show()">
      <span v-if="this.$refs.chatModal && this.$refs.chatModal.newChatNum !== 0" class="position-absolute text-primary fw-bold border border-primary alert-num rounded-circle fs-12  top-0 start-100 translate-middle">
        {{ this.$refs.chatModal.newChatNum }}
      </span>
      <i class="bi bi-chat-dots-fill fs-35"></i>
    </button>

    <footer class="mt-auto" :class="{'bg-secondary': this.$route.fullPath !== '/loginSignup', 'bg-white': this.$route.fullPath === '/loginSignup'}" >
        <div class="container d-flex flex-column flex-lg-row align-items-center py-3">
          <div class=" d-flex justify-content-center align-items-center mb-3 mb-lg-0">
              <img src="../assets/images/loadingLogo.png" class="logo me-1" alt="甜點食譜一鍵購網站logo">
              <div>
                <p class="text-darkBrown mb-0 fs-6">甜點食譜一鍵購</p>
                <p class="fw-light mb-0 font-style-Chathura mt-n2 text-purple fs-5" >Easy Buy Easy Make</p>
              </div>
          </div>

          <div class="ms-lg-auto d-flex flex-column align-items-lg-end align-items-center">
            <ul class="list-unstyled d-flex justify-content-between w-50">
              <li class="hvr-bob">
                <a href="#" class="text-decoration-none link-primary">
                  <i class="bi bi-instagram fs-35"></i>
                </a>
              </li>
              <li class="hvr-bob">
                <a href="#" class="text-decoration-none link-primary">
                  <i class="bi bi-facebook fs-35"></i>
                </a>
              </li>
              <li class="hvr-bob">
                <a href="mailto:@EasyMakeEasyBuy.gmail.com" class="text-decoration-none link-primary">
                  <i class="bi bi-envelope fs-35"></i>
                </a>
              </li>
            </ul>
            <p class="mb-0 text-center text-lg-start fs-10">本網站僅作為網頁製作練習使用<br class="d-block d-lg-none"><span class="d-none d-lg-inline-block">，</span>圖片、資料源自網路，無任何商業利益行為</p>
            <p class="mb-0 fs-10">Copyright © 2022 甜點食譜一鍵購 All Rights Reserved.</p>
          </div>
        </div>
    </footer>
  </div>
</template>
<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '../stores/carts'
import { RouterView, RouterLink } from 'vue-router'
import Collapse from 'bootstrap/js/dist/collapse'
import CartModal from '../components/CartModal.vue'
import ChatModal from '../components/ChatModal.vue'
// import { onAuthStateChanged } from 'firebase/auth'
// import { db, auth } from '../firebase/db'
// import { ref, onValue } from 'firebase/database'

export default {
  data () {
    return {
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

      showScrollArrow: false, // 向上箭頭
      searchItem: '食譜搜尋' // 搜尋可以選擇食譜或產品
      // 先前傳入的 參數 對比目前參數 如果相同要 reload
    }
  },
  components: {
    RouterLink,
    RouterView,
    CartModal,
    ChatModal
  },
  methods: {
    ...mapActions(cartStore, ['checkLogin', 'logout']),
    // 取出token 存到 headers 這裡的nickName必須和其他介面取得的nickName相同狀態 這樣當許可證過期才會不見

    // 判斷當前頁面是否重整
    reload (path) {
      if (this.$route.fullPath === path) {
        location.reload()
      }
    },
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
    this.menuCollapse = new Collapse(this.$refs.menuCollapse, {
      toggle: false
    })

    this.searchCollapse = new Collapse(this.$refs.searchCollapse, {
      toggle: false
    })

    console.log(this.$refs.cartModal, '購物車內容')
  },
  computed: {
    ...mapState(cartStore, ['user', 'uid', 'cartItems', 'cartNum'])

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
    // 換頁關閉 菜單 還要關閉搜尋!!!!!
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
