<template>
    <div data-aos="fade-up" >
      <loading v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"
                 :lock-scroll="true">
                 <div class="d-flex flex-column align-items-center py-96">
      <img src="../../assets/images/loadingLogo.png" class="loadingLogo mb-3" style="width: 150px;" alt="" >
      <p class="text-center fw-bold text-primary h2">
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

      <section class="text-center">
        <div class="py-lg-200 py-96 bg-img-fixed" style="background-image: url('https://images.unsplash.com/photo-1678465952975-85cc1a08b2d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80');"></div>
        <h2 class="text-primary mb-0  fs-lg-1 fs-5 letter-spacing-20 fw-bold bg-secondary-lightPurple py-2">優惠特報</h2>
      </section>

      <section class="container">
        <div class="pt-lg-4 pt-3 position-relative">
          <ul class="category-selector row row-cols-2 list-unstyled border-bottom">
              <li class="col  text-center" :class="{'pointer-events-none': tabName === '優惠折扣'}">
                <a href="#"  @click.prevent="()=>tabName = '優惠折扣'" class="text-decoration-none d-inline-block" :class="{'fw-bold': tabName === '優惠折扣', 'link-primary': tabName === '優惠折扣'}">
                  <img class="discountImg1 d-block mx-auto" v-if="tabName !== '優惠折扣'" src="../../assets/images/discount1.png"  alt="優惠折扣灰色圖示">
                  <img class="d-block mx-auto" v-else-if="tabName === '優惠折扣'" src="../../assets/images/discount3.png"  alt="優惠折扣藍色圖示">
                  <span  class="fs-12 fs-md-5 d-block py-2">優惠折扣</span>
                </a>
              </li>
              <li class="col text-center" :class="{'pointer-events-none': tabName === '抽獎回饋'}">
                <a href="#"  @click.prevent="()=>tabName = '抽獎回饋'" class="text-decoration-none d-inline-block" :class="{'fw-bold': tabName === '抽獎回饋', 'link-primary': tabName === '抽獎回饋'}">
                  <img class="discountImg2 d-block mx-auto" v-if="tabName !== '抽獎回饋'" src="../../assets/images/giftBox1.png"  alt="抽獎回饋灰色圖示">
                  <img class="d-block mx-auto" v-else-if="tabName === '抽獎回饋'" src="../../assets/images/giftBox3.png"  alt="抽獎回饋藍色圖示">
                  <span  class="fs-12 fs-md-5 d-block py-2">抽獎回饋</span>
                </a>
              </li>
          </ul>
          <div class="blue-line bg-primary position-absolute" :class="{'active-discount': tabName === '優惠折扣', 'active-gift': tabName === '抽獎回饋'}"></div>
        </div>

        <ul v-if="tabName === '優惠折扣'" class="list-unstyled row row-cols-lg-2 g-3 py-5 text-darkBrown">
          <li class="col hvr-hang" v-for="coupon in coupons" :key="coupon.id">
            <div class="card card-coupon mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img :src="coupon.image" class="w-100 object-fit-cover rounded-start" style="height: 200px;" :alt="coupon.title">
                </div>
                <div class="col-md-8">
                  <div class="card-body h-100 d-flex flex-column">
                    <p class="mb-2">{{ new Date(coupon.startDate).toLocaleDateString() }} - {{ new Date(coupon.dueDate).toLocaleDateString() }}</p>
                    <h4 class="card-title fw-bold">{{  coupon.title }}</h4>
                    <p class="card-text text-truncate">{{ coupon.description }}</p>

                    <div class="text-end mt-auto">
                      <RouterLink :to="`/discounts/${coupon.id}`" href="#" class="stretched-link btn btn-outline-primary">查看完整優惠資訊</RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>

        <div v-else-if="tabName === '抽獎回饋'">
            <p><i class="bi bi-clock-fill me-1"></i>活動時間：{{ new Date(lottery.startDate).toLocaleDateString().split(' ')[0] }} ~ {{ new Date(lottery.dueDate).toLocaleString().split(' ')[0] }}</p>

            <p v-if="uid" :class="{'text-danger':user.lotteryTicket === 0}"><i class="bi bi-ticket-perforated-fill me-1"></i>剩餘抽獎券：{{ user.lotteryTicket }} 張</p>

            <div v-if="!getPrize || (getPrize && getPrize.id !== 1)">
              <h4 class="mb-0 text-center fw-bold">本月指定抽獎食譜</h4>

              <div class="row row-cols-lg-3 row-cols-1 g-3 mt-lg-4 mt-1">
                <div v-for="(item, index) in drewProducts" :key="item" class="col ">
                  <div class="card border mb-md-3" :class="{'border-primary': index === 0 || index === 2, 'border-purple': index === 1}">
                    <div class="row g-0">
                      <div class="col-md-5">
                        <div v-for="(recipe, recipeIndex) in lottery.recipes" :key="recipe.id">
                          <img v-if="recipeIndex === index" :src="recipe.image" :alt="recipe.title" class="w-100 object-fit-cover" style="height: 150px;">
                        </div>
                      </div>
                      <div class="col-md-7">
                        <div class="card-body d-flex flex-column justify-content-center align-items-center h-100">
                          <h5 class="card-title fw-bold" :class="{'text-primary': index === 0 || index === 2, 'text-purple': index === 1}">{{item[0]}}</h5>
                          <p v-if="drewArr[index] && drewArr[index][1]" class="mb-0" :class="{'text-danger': drewArr[index][1].length / item[1].length === 1}">完成度： {{ Math.round(drewArr[index][1].length / item[1].length * 100) === 0 ? '0' : Math.round(drewArr[index][1].length / item[1].length * 100) }} %</p>
                          <p v-else-if="!drewArr[index] || !drewArr[index][1]" class="mb-0">完成度：0 %</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul class="row row-cols-xl-3 row-cols-lg-2 row-cols-3 pt-3 g-0 list-unstyled" :class="{'bg-secondary': index === 0 || index === 2, 'bg-lightPurple': index === 1}" >
                    <li class="d-flex flex-column align-items-center position-relative col"
                    v-for="(product) in item[1]" :key="product.id">
                    <template v-if="product.category === '單一產品'">
                      <img :src="product.imgUrl" :alt="product.title" height="100" width="100" class="object-fit-cover mb-1">
                      <p>{{ product.title }}</p>
                      <div v-if="!drewArr[index] || !drewArr[index][1] || (drewArr[index] && drewArr[index][1] && !JSON.stringify(this.drewArr[index][1]).includes(product.title))" class="position-absolute bg-not-obtained d-flex">
                        <i class="bi bi-question-lg text-white fs-1 m-auto"></i>
                      </div>
                    </template>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="text-center">
                <button type="button" class="hvr-sweep-to-right mt-3 btn btn-primary" @click.prevent="addtLotteryResult">立即抽獎</button>
              </div>
              <p class="text-end mt-3">抽一次消耗一張抽獎券</p>
            </div>

            <!-- 完成食譜 -->
            <!-- d-flex flex-column align-items-center -->
            <div v-if="lotteryResult && this.getPrize && this.getPrize.id" class="text-center mt-lg-120 mt-5 ">

              <h5 class="fs-md-3 fs-5 text-white fw-bold bg-primary-purple py-3 mb-0 d-flex align-items-center justify-content-center letter-spacing-5-sm-0">
                <span class="material-icons-outlined me-md-3 me-2">
                  celebration
                </span>恭喜您完成
                {{ getPrize.id === 1 ? '全部' : getPrize.id === 2 ? '2份' : '1份' }}食譜，獲得
                <span class="material-icons-outlined fs-2">
                  arrow_drop_down
                </span>
              </h5>
              <div class="bg-secondary-lightPurple px-3">
                <div class="col-lg-4 col-12 mx-auto pt-4">
                <div class="card bg-transparent">
                  <div class="card-header bg-transparent">
                    <h3 class="fs-4 fw-bold text-center">{{ getPrize.id === 1 ? '大獎' : getPrize.id === 2 ? '二獎' : '三獎' }}</h3>
                  </div>
                  <img :src="getPrize.img" class="card-img img-lg-220-md-200 object-fit-contain border bg-white" :alt="getPrize.title">
                  <div class="card-footer bg-transparent">
                    <h5 class="fw-bold">{{ getPrize.title }}</h5>
                    <p class="text-end">價值：NT$ {{ numberComma(getPrize.price) }} </p>
                  </div>
                </div>
              </div>
              <p class="lh-lg pb-5 text-start text-md-center">本店會透過信箱與您聯絡獎品寄送時間，請時刻關注信件，並請留下電話、地址到 <a href="mailto:@EasyMakeEasyBuy.gmail.com">@EasyMakeEasyBuy.gmail.com</a>，感謝您的支持!<br>下期好禮更精彩，千萬別錯過!</p>
              </div>
            </div>

            <div class="py-96" data-aos="zoom-in">
              <div class="d-lg-flex mb-2">
                <h2 class="d-flex align-items-center justify-content-center justify-content-lg-start fw-bold">
                  <img src="../../assets/images/title4.png" class="me-lg-3 me-4 title-img" alt="熱">
                  <span class="fs-lg-1 fs-4 letter-spacing-20">月獎品</span>
                </h2>
                <span class="d-flex align-items-center justify-content-center fs-lg-6 fs-12">
                  <img src="../../assets/images/icon-speaker.png" class="me-2" style="width: 30px;" alt="大聲公圖示">
                  超值大獎一次帶回!
                </span>
              </div>

              <div class="row row-cols-lg-3 row-cols-1 gy-4 mb-4 ">
                <div class="col" v-for="prize in lottery.prizes" :key="prize.id" data-aos="flip-right">
                  <div class="card card-prize">
                    <div class="card-header bg-white" >
                      <h3 class="fs-4 fw-bold text-center">{{ prize.id === 1 ? '大獎' : prize.id === 2 ? '二獎' : '三獎' }}</h3>
                    </div>

                    <div class="card-body p-0 position-relative">
                      <img :src="prize.img" class="card-img border bg-white object-fit-contain img-lg-220-md-200"  :alt="prize.title">

                      <div class="question-mark position-absolute w-100 text-center top-0 img-lg-220-md-200 bg-gradient-card">
                        <i class="bi bi-question-lg mx-auto text-white fs-150"></i>
                      </div>
                    </div>

                    <div class="card-footer bg-transparent">
                      <h5 class="fw-bold">{{ prize.title }}</h5>
                      <p class="text-end">價值：NT$ {{ numberComma(prize.price) }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 class="fw-bold">規則：</h3>
              <ol>
                <li v-for="rule in lottery.rules" :key="rule + 20">{{ rule }}</li>
              </ol>
            </div>

        </div>
      </section>
    </div>
</template>
<script>
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { db, auth } from '../../firebase/db'
import { ref, onValue, update, set } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
export default {
  mixins: [numberCommaMixin],
  data () {
    return {
      coupons: {},
      lottery: {},
      lotteryResult: {},
      drewProducts: [], // 要集齊的產品
      drewArr: [], // 抽中的商品
      user: {},
      uid: '',
      getPrize: {},
      tabName: '優惠折扣', // 判斷在哪個頁籤
      articles: [],
      isLoading: false,
      fullPage: true,
      couponIds: []
    }
  },
  components: {
    Loading
  },
  methods: {
    ...mapActions(cartStore, ['checkLogin', 'toastMessage']),
    // 取得折價券 優惠折扣
    getCoupons () {
      const dataRef = ref(db, 'coupons/')
      onValue(dataRef, snapshot => {
        this.coupons = snapshot.val()
        Object.values(this.coupons).forEach((coupon, index) => {
          coupon.id = Object.keys(this.coupons)[index]
        })
        this.coupons = Object.values(this.coupons).filter(coupon => coupon.isEnabled)
        this.isLoading = false
      })
    },
    // 取得抽獎
    getLottery () {
      const dataRef = ref(db, 'lotteries/')
      onValue(dataRef, snapshot => {
        let lotteries = snapshot.val()
        lotteries = Object.entries(lotteries).map(lottery => {
          lottery[1].id = lottery[0]
          return lottery[1]
        })
        this.lottery = Object.values(lotteries).filter(lottery => lottery.isEnabled === true)
        this.lottery = this.lottery[0]

        this.lottery.recipes.forEach(recipe => {
          // 一定要先定義
          if (!this.drewProducts[recipe.title]) {
            this.drewProducts[recipe.title] = []
          }
          recipe.relativeProducts.forEach(product => {
            if (product.category !== '組合包') {
              product.recipeName = `抽獎食譜${recipe.title}`
              this.drewProducts[recipe.title].push(product)
            }
          })
        })
        this.drewProducts = Object.entries(this.drewProducts)
      })
    },
    // 個人抽獎結果
    getLotteryResult () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            const dataRef = ref(db, `lotteryResults/${this.uid}`)
            onValue(dataRef, snapshot => {
              this.lotteryResult = snapshot.val()
              if (this.lotteryResult) {
                this.drewArr = this.lotteryResult.drewArr
                this.getPrize = this.lotteryResult.getPrize
              } else {
                this.drewArr = []
                this.getPrize = {}
              }
            })
          })
        } else {
          this.uid = null
          this.user = {}
          this.drewArr = []
          this.getPrize = {}
        }
      })
    },
    // 開始抽獎
    addtLotteryResult () {
      // 沒抽獎券先禁止抽獎
      if (!this.uid) {
        this.toastMessage('登入即可抽獎', 'error')
        return
      }
      if (this.user.lotteryTicket === 0) {
        this.$swal({
          icon: 'error',
          title: '您沒有抽獎券了',
          html:
            '<p>單筆金額滿  <b>NT$2,000</b> 即可獲得一張抽獎券</p>' +
            '<p>單筆金額滿  <b>NT$5,000</b> 即可獲得三張抽獎券</p>' +
            '<p>單筆金額滿  <b>NT$10,000</b> 即可獲得七張抽獎券</p>' +
            '<a href="/finalEasyBuyEasyMake/#/products" class="link-primary">前往選購商品</a>',
          showConfirmButton: true,
          confirmButtonColor: '#4572c2',
          confirmButtonText: '確定'
        })
        return
      }
      // 扣除抽獎券
      update(ref(db), {
        [`users/${this.uid}/lotteryTicket/`]: this.user.lotteryTicket - 1
      })
      // 0 ~ 1隨機數 x 產品陣列
      const firstNum = Math.floor(Math.random() * this.drewProducts.length)
      const secondNum = Math.floor(Math.random() * this.drewProducts[firstNum][1].length)

      // 1. 首次抽獎
      if (!this.drewArr.length) {
        // 先定義抽獎結構
        this.drewProducts.forEach((item, index) => {
          // 因為之前 this.products = [] 會複製到 所以不能用
          this.drewArr[index] = [item[0], []]
        })
        this.drewArr[firstNum][1].push(this.drewProducts[firstNum][1][secondNum])
        this.$swal({
          title: `恭喜您抽中 ${this.drewProducts[firstNum][1][secondNum].title}`,
          iconHtml: `<img src="${this.drewProducts[firstNum][1][secondNum].imgUrl}" width="100">`,
          customClass: {
            icon: 'border-0'
          },
          showConfirmButton: false
        })

        const reference = ref(db, `lotteryResults/${this.uid}`)
        set(reference, {
          drewArr: this.drewArr,
          getPrize: {}
        })
      } else if (this.drewArr.length) { // 非首抽
        // 先定義抽獎結構
        this.drewProducts.forEach((item, index) => {
          // 因為之前 this.products = [] 會複製到 所以不能用
          if (!this.drewArr[index][1]) {
            this.drewArr[index][1] = []
          }
        })
        // 如果抽到相同的東西不要放進陣列
        let repeatItem = false
        // firstNum
        if (this.drewArr[firstNum][1]) {
          this.drewArr[firstNum][1].forEach(item => {
            if (item.title === this.drewProducts[firstNum][1][secondNum].title) {
              repeatItem = true
            }
          })
        }
        // 檢查是否重複
        if (repeatItem) {
          this.$swal({
            title: '抽到重複的東西囉~ 非常sorry',
            iconHtml: '<img src="https://images.unsplash.com/photo-1606823616058-541d59dadcb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="非常sorry">',
            customClass: {
              icon: 'border-0'
            },
            showConfirmButton: false
          })
        } else if (!repeatItem) { // 沒有重複再放入
          this.drewArr[firstNum][1].push(this.drewProducts[firstNum][1][secondNum])
          this.$swal({
            title: `恭喜您抽中 ${this.drewProducts[firstNum][1][secondNum].title}`,
            iconHtml: `<img src="${this.drewProducts[firstNum][1][secondNum].imgUrl}" width="100">`,
            customClass: {
              icon: 'border-0'
            },
            showConfirmButton: false
          })
          update(ref(db), {
            [`lotteryResults/${this.uid}/drewArr/`]: this.drewArr
          })

          let index = ''
          // 一獎 全部收集完
          if (!this.drewArr[0][1] || !this.drewArr[1][1] || !this.drewArr[2][1]) {
            return
          }
          if (this.drewArr[0][1].length === this.drewProducts[0][1].length && this.drewArr[1][1].length === this.drewProducts[1][1].length && this.drewArr[2][1].length === this.drewProducts[2][1].length) {
            index = 0
          // 二獎 收集2個
          } else if ((this.drewArr[0][1].length === this.drewProducts[0][1].length && this.drewArr[1][1].length === this.drewProducts[1][1].length) || (this.drewArr[2][1].length === this.drewProducts[2][1].length && this.drewArr[0][1].length === this.drewProducts[0][1].length) || (this.drewArr[2][1].length === this.drewProducts[2][1].length && this.drewArr[1][1].length === this.drewProducts[1][1].length)) {
            index = 1
          // 二獎 收集其中1個
          } else if (this.drewArr[0][1].length === this.drewProducts[0][1].length || this.drewArr[1][1].length === this.drewProducts[1][1].length || this.drewArr[2][1].length === this.drewProducts[2][1].length) {
            index = 2
          }
          // 增加獲獎項目
          if (index || index === 0) {
            update(ref(db), {
              [`lotteryResults/${this.uid}/getPrize/`]: this.lottery.prizes[index]
            })
          }
        }
      }
    }
  },
  mounted () {
    window.scrollTo(0, 0)
    this.isLoading = true
    if (this.$route.query.tabName) {
      this.tabName = this.$route.query.tabName
    }
    this.getCoupons()
    this.getLottery()
    this.getLotteryResult()
  }
}
</script>
