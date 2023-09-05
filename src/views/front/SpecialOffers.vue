<template>
    <div class="" data-aos="fade-up"  style="overflow-x: hidden;">
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
      <section class="bannerBg" style="background-image: url('https://images.unsplash.com/photo-1678465952975-85cc1a08b2d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80');">
          <div class="mask">
            <div class="text" style="background: linear-gradient(to bottom, white 50% , #4572c2 50%); -webkit-background-clip: text;">
              優惠特報
            </div>
          </div>
        </section>
      <section class="container mt-4">
          <ul class="position-relative categorySelector row row-cols-2 gy-2 list-unstyled border-bottom">
              <li class="col d-flex  align-items-center justify-content-center" :class="{'pointer-events-none': tabName === '優惠折扣'}">
                <a href="#"  @click.prevent="()=>tabName = '優惠折扣'" class="text-decoration-none d-flex flex-column align-items-center link-secondary" :class="{'fw-bold': tabName === '優惠折扣', 'link-primary': tabName === '優惠折扣'}">
                  <img class="discountImg1" v-if="tabName !== '優惠折扣'" src="../../assets/images/discount1.png"  alt="">
                  <img v-else-if="tabName === '優惠折扣'" src="../../assets/images/discount3.png"  alt="">
                  <span  class="titleSize ">優惠折扣</span>
                </a>
              </li>
              <li class="col d-flex  align-items-center justify-content-center" :class="{'pointer-events-none': tabName === '抽獎回饋'}">
                <a href="#"  @click.prevent="()=>tabName = '抽獎回饋'" class="text-decoration-none d-flex flex-column align-items-center link-secondary" :class="{'fw-bold': tabName === '抽獎回饋', 'link-primary': tabName === '抽獎回饋'}">
                  <img class="discountImg2" v-if="tabName !== '抽獎回饋'" src="../../assets/images/giftBox1.png"  alt="">
                  <img v-else-if="tabName === '抽獎回饋'" src="../../assets/images/giftBox3.png"  alt="">
                  <span  class="titleSize ">抽獎回饋</span>
                </a>
              </li>
              <li class="blueLine bg-primary position-absolute" style="height: 2px; bottom: 0px; left: 5.5%" :class="{'activeDiscount': tabName === '優惠折扣', 'activeGift': tabName === '抽獎回饋'}"></li>
          </ul>
      </section>
      <section v-if="tabName === '優惠折扣'" class="text-primary ">
        <div class="container">
          <div v-if="!isLoading" class="row row-cols-lg-4 g-4 py-3 text-darkBrown">
          <div class="col hvr-hang" v-for="coupon in coupons" :key="coupon.id">
              <div class="card">
                  <div class="enlargeImg w-100 rounded">
                    <div class="cardImg">
                      <img :src="coupon.image" class="card-img-top" alt="..." height="200" style="object-fit: cover;">
                    </div>
                    <div class="card-body">
                      <p class="">{{ new Date(coupon.startDate).toLocaleDateString() }} - {{ new Date(coupon.dueDate).toLocaleDateString() }}</p>
                      <h5 class="card-title h4 fw-bold">{{  coupon.title }}</h5>
                      <p class="card-text text-truncate">{{ coupon.description }}</p>
                      <p class="detail d-none d-lg-block position-absolute fw-bold" style="top: 30%; left: 50%; transform: translateX(-50%); letter-spacing: 5px;">查看優惠資訊</p>

                      <div class="d-flex">
                          <RouterLink :to="`/discounts/${coupon.id}`" href="#" class="stretched-link btn btn-outline-primary rounded-0 ms-auto">查看完整優惠資訊</RouterLink>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        </div>

      </section>
      <section  v-else-if="tabName === '抽獎回饋'">
        <div class="container">
          <div class="py-3 text-darkBrown d-flex flex-column">
          <p class=""><i class="bi bi-clock-fill me-1"></i>活動時間：{{ new Date(lottery.startDate).toLocaleDateString().split(' ')[0] }} ~ {{ new Date(lottery.dueDate).toLocaleString().split(' ')[0] }}</p>

          <p v-if="uid" :class="{'text-danger':user.lotteryTicket === 0}"><i class="bi bi-ticket-perforated-fill me-1"></i>剩餘抽獎券：{{ user.lotteryTicket }}張</p>

          <div v-if="!getPrize || (getPrize && getPrize.id !== 1)" class="col-lg-12 align-self-center">
            <h4 class="mb-0 text-center fw-bold">本月指定抽獎食譜</h4>
            <div class="row row-cols-lg-3 row-cols-1 mt-4">
              <div v-for="(item, index) in drewProducts" :key="item" class="border border-primary bg-secondary col" >
                <h4 class="text-center fw-bold my-3">{{ item[0] }}</h4>
                <div class="row">
                  <div class="d-flex flex-column align-items-center position-relative col-4"
                  v-for="(product) in item[1]" :key="product.id">
                  <template v-if="product.category === '單一產品'">
                    <img :src="product.imgUrl" alt="" height="100" width="100" style="object-fit: cover;">
                    <p>{{ product.title }}</p>
                    <div v-if="!drewArr[index] || !drewArr[index][1] || (drewArr[index] && drewArr[index][1] && !JSON.stringify(this.drewArr[index][1]).includes(product.title))" class="position-absolute bg-notObtained d-flex">
                      <i class="bi bi-question-lg text-white fs-1 m-auto"></i>
                    </div>
                  </template>
                </div>
                </div>
              </div>
            </div>
            <div class="d-flex">
              <button type="button" class="hvr-sweep-to-right mx-auto mt-3 btn btn-primary" @click="addtLotteryResult" style="border-radius: 0px;">立即抽獎</button>
            </div>
            <p class="text-end">抽一次消耗一張抽獎券</p>
          </div>
          <!-- 完成食譜 -->
          <div v-if="lotteryResult && this.getPrize && this.getPrize.id" class="d-flex flex-column align-items-center">
            <h5 class="h3 text-center text-primary fw-bold">恭喜您完成{{ getPrize.id === 1 ? '全部' : getPrize.id === 2 ? '2份' : '1份' }}食譜，獲得：</h5>
            <div class="col-lg-4 col-12">
                <div class="card position-relative" style="border-radius: 0px; border: none !important;">
                  <div class="card-header h4 fw-bold text-center mb-3 bg-white border-0" >
                    {{ getPrize.id === 1 ? '大獎' : getPrize.id === 2 ? '二獎' : '三獎' }}
                  </div>
                  <img :src="getPrize.img" class="card-img border" style="border-radius: 0px; height:300px; object-fit: contain;" alt="">
                  <div class="card-footer bg-transparent border-0" style="background-color: white !important;">
                    <h5 class="fw-bold">
                      {{ getPrize.title }}
                    </h5>
                    <p class="text-end">價值：NT$ {{ numberComma(getPrize.price) }} </p>
                  </div>
                </div>
                <p>本店會透過信箱與您聯絡獎品寄送時間，請時刻關注信件，並請留下電話、地址到@EasyMakeEasyBuy.gmail.com，感謝您的支持!<br>下期好禮更精彩，千萬別錯過!</p>
            </div>
          </div>
          <section class="py-96 "  data-aos="zoom-in">
          <div class="container">
            <h2 class="display-6 fw-bold d-flex align-items-center mb-4 d-flex flex-column-reverse flex-lg-row align-items-center mb-4 justify-content-center justify-content-lg-start">
              <div class="d-flex align-items-center">
                <img src="../../assets/images/title4.png" class="me-lg-4 me-2 titleImg " alt="">
                <span class="recipeTitle">月獎品</span>
              </div>
              <span class="light-primary mb-lg-0 mb-2 h6 ms-2 speakerText d-flex align-items-center">
                <img src="../../assets/images/icon-speaker.png" class="speaker" alt="">
                超值大獎一次帶回!
              </span>
            </h2>

          </div>
          <!-- 抽獎 -->

            <div class="container">
            <div class="prizes row row-cols-lg-3 row-cols-1 gy-4 ">
              <div class="col" v-for="prize in lottery.prizes" :key="prize.id" data-aos="flip-right">
                <div class="card position-relative" style="border-radius: 0; border: 1px transparent solid;">
                  <div class="card-header border-0 h4 fw-bold text-center mb-3 bg-white" >
                    {{ prize.id === 1 ? '大獎' : prize.id === 2 ? '二獎' : '三獎' }}
                  </div>
                  <div class="questionMark  position-absolute d-flex" style="top: 60px;  width: 100%; height: 220px;  background: linear-gradient(90deg, #6ea3fe ,#cab8ff);">
                    <i class="bi bi-question-lg mx-auto text-white" style="font-size: 150px;"></i>
                  </div>
                  <img :src="prize.img" class="card-img border bg-white" style=" height:220px; object-fit: contain; border-radius: 0;" alt="">
                  <div class="card-footer bg-transparent border-0">
                    <h5 class="fw-bold">
                      {{prize.title}}
                    </h5>
                    <p class="text-end">價值：NT$ {{numberComma(prize.price)}}</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </section>
          <h5>規則：</h5>
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
            icon: 'no-border'
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
            iconHtml: '<img src="https://images.unsplash.com/photo-1606823616058-541d59dadcb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80">',
            customClass: {
              icon: 'no-border'
            },
            showConfirmButton: false
          })
        } else if (!repeatItem) { // 沒有重複再放入
          this.drewArr[firstNum][1].push(this.drewProducts[firstNum][1][secondNum])
          this.$swal({
            title: `恭喜您抽中 ${this.drewProducts[firstNum][1][secondNum].title}`,
            iconHtml: `<img src="${this.drewProducts[firstNum][1][secondNum].imgUrl}" width="100">`,
            customClass: {
              icon: 'no-border'
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
<style>
.no-border {
  border: 0 !important;
}
.bg-notObtained {
  width: 100px;
  height: 100px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.7));
}

.categorySelector li a:hover .discountImg1 {
    content: url('@/assets/images/discount2.png');
  }
  .categorySelector li a:hover .discountImg2 {
    content: url('@/assets/images/giftBox2.png');
  }
</style>
