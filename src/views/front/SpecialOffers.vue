<script>
import loadingStore from '../../stores/loadingStore'
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { db, auth } from '../../firebase/db'
import { ref, onValue, update, set } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import { selections } from '../../utils/publicData'
import BannerComponent from '../../components/BannerComponent.vue'
export default {
  mixins: [numberCommaMixin],
  data () {
    return {
      selections,
      coupons: {},
      lottery: {},
      lotteryResult: {},
      drewProducts: {}, // 要集齊的產品
      drewArr: {}, // 抽中的商品
      user: {},
      uid: '',
      getPrize: {},
      tabName: '優惠折扣' // 判斷在哪個頁籤
    }
  },
  components: {
    BannerComponent
  },
  methods: {
    ...mapActions(loadingStore, ['startLoading', 'endLoading']),
    ...mapActions(cartStore, ['toastMessage', 'goToTop', 'getCoupons']),
    getLottery () {
      return new Promise((resolve, reject) => {
        const dataRef = ref(db, 'lotteries/')
        onValue(dataRef, snapshot => {
          resolve(snapshot.val())
        })
      })
    },
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
    addtLotteryResult () {
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
      update(ref(db), {
        [`users/${this.uid}/lotteryTicket/`]: this.user.lotteryTicket - 1
      })
      const firstNum = Math.floor(Math.random() * Object.keys(this.drewProducts).length)
      const recipeName = Object.keys(this.drewProducts)[firstNum]
      const secondNum = Math.floor(Math.random() * this.drewProducts[recipeName].length)
      if (!this.drewArr[recipeName]) { // 代表完全沒重複
        this.drewArr[recipeName] = []
      } else if (this.drewArr[recipeName]) {
        // 檢查是否重複
        const repeatItem = this.drewArr[recipeName].some(product => {
          return product.title === this.drewProducts[recipeName][secondNum].title
        })
        if (repeatItem) {
          this.$swal({
            title: '抽到重複的東西囉~ 非常sorry',
            iconHtml: '<img src="https://images.unsplash.com/photo-1606823616058-541d59dadcb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="非常sorry">',
            customClass: {
              icon: 'border-0'
            },
            showConfirmButton: false
          })
          return
        }
      }
      this.drewArr[recipeName].push(this.drewProducts[recipeName][secondNum])
      this.$swal({
        title: `恭喜您抽中 ${this.drewProducts[recipeName][secondNum].title}`,
        iconHtml: `<img src="${this.drewProducts[recipeName][secondNum].imgUrl}" width="100">`,
        customClass: {
          icon: 'border-0'
        },
        showConfirmButton: false
      })

      const drewNum = Object.values(this.drewArr).reduce((sum, arr) => sum + arr.length, 0)
      if (drewNum === 1) { // 1. 首次抽獎
        const reference = ref(db, `lotteryResults/${this.uid}`)
        set(reference, {
          drewArr: this.drewArr
        })
      } else { // 非首抽
        update(ref(db), {
          [`lotteryResults/${this.uid}/drewArr/`]: this.drewArr
        })

        let whichPrize = 0
        for (const recipeName in this.drewArr) {
          if (this.drewArr[recipeName].length === this.drewProducts[recipeName].length) {
            whichPrize += 1
          }
        }
        if (whichPrize) {
          update(ref(db), {
            [`lotteryResults/${this.uid}/getPrize/`]: this.lottery.prizes[whichPrize === 1 ? 2 : whichPrize === 2 ? 1 : 0]
          })
        }
      }
    },
    async getData () {
      this.coupons = await this.getCoupons()
      const lotteries = await this.getLottery()
      this.coupons = Object.values(this.coupons).filter(coupon => coupon.isEnabled)
      Object.keys(lotteries).forEach((key) => {
        lotteries[key].id = key
      })
      this.lottery = Object.values(lotteries).filter(lottery => lottery.isEnabled)
      this.lottery = this.lottery[0]

      this.lottery.recipes.forEach(recipe => {
        if (!this.drewProducts[recipe.title]) {
          this.drewProducts[recipe.title] = []
        }
        recipe.relativeProducts.forEach(product => {
          if (product.category !== '組合包') {
            this.drewProducts[recipe.title].push(product)
          }
        })
      })
      this.endLoading()
    }
  },
  mounted () {
    this.startLoading()
    this.goToTop()
    if (this.$route.query.tabName) {
      this.tabName = this.$route.query.tabName
    }
    this.getLotteryResult()
    this.getData()
  }
}
</script>
<template>
    <div>
      <BannerComponent></BannerComponent>
      <section class="container" data-aos="fade-up" >
        <div class="pt-lg-4 pt-3 position-relative">
          <ul class="category-selector row row-cols-2 list-unstyled border-bottom">
            <li v-for="item in selections.specialOfferCategory" :key="item.icon" class="col text-center" :class="{'pointer-events-none': tabName === item.title}">
              <a href="#"  @click.prevent="()=>tabName = item.title" class="text-decoration-none d-inline-block" :class="{'fw-bold': tabName === item.title, 'link-primary': tabName === item.title}">
                <i v-if="tabName !== item.title" :class="item.icon" class="text-gray"></i>
                <i v-if="tabName === item.title" :class="item.iconSelected" class="text-primary"></i>
                <span  class="fs-12 fs-md-5 d-block pb-2">{{ item.title }}</span>
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
            <p><i class="bi bi-clock-fill me-1"></i>活動時間：{{ new Date(lottery.startDate).toLocaleDateString() }} ~ {{ new Date(lottery.dueDate).toLocaleDateString() }}</p>

            <p v-if="uid" :class="{'text-danger':user.lotteryTicket === 0}"><i class="bi bi-ticket-perforated-fill me-1"></i>剩餘抽獎券：{{ user.lotteryTicket }} 張</p>

            <div v-if="!getPrize || (getPrize && getPrize.id !== 1)">
              <h4 class="mb-0 text-center fw-bold">本月指定抽獎食譜</h4>

              <div class="row row-cols-lg-3 row-cols-1 g-3 mt-lg-4 mt-1">
                <div v-for="(item, key, index) in drewProducts" :key="item" class="col">
                  <div :class="{'border-primary': index === 0 || index === 2, 'border-purple': index === 1}" class="card border mb-md-3">
                    <div class="row g-0">
                      <div class="col-md-5">
                        <div v-for="(recipe, recipeIndex) in lottery.recipes" :key="recipe.id">
                          <img v-if="recipeIndex === index" :src="recipe.image" :alt="recipe.title" class="w-100 object-fit-cover" style="height: 150px;">
                        </div>
                      </div>
                      <div class="col-md-7">
                        <div class="card-body d-flex flex-column justify-content-center align-items-center h-100">
                          <h5 :class="{'text-primary': index === 0 || index === 2, 'text-purple': index === 1}" class="card-title fw-bold">{{ key }}</h5>
                          <p v-if="drewArr[key] && drewArr[key].length" class="mb-0" :class="{'text-danger': drewArr[key].length / item.length === 1}" >完成度： {{ Math.round(drewArr[key].length / item.length * 100) === 0 ? 0 : Math.round(drewArr[key].length / item.length * 100) }} %</p>
                          <p v-else-if="!drewArr[key]" class="mb-0">完成度：0 %</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <ul class="h-80 row row-cols-xl-3 row-cols-lg-2 row-cols-3 pt-3 g-0 list-unstyled" :class="{'bg-secondary': index === 0 || index === 2, 'bg-lightPurple': index === 1}" >
                    <li class="d-flex flex-column align-items-center position-relative col"
                    v-for="(product) in item" :key="product.id">
                    <template v-if="product.category === '單一產品'">
                      <img :src="product.imgUrl" :alt="product.title" height="100" width="100" class="object-fit-cover mb-1">
                      <p>{{ product.title }}</p>
                      <div v-if="!drewArr[key] || !JSON.stringify(this.drewArr[key]).includes(product.title)" class="position-absolute bg-trans-dark-8  d-flex">
                        <i class="bi bi-question-lg text-white fs-1 m-auto"></i>
                      </div>
                    </template>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="text-center">
                <button type="button" class="hvr-sweep-to-right mt-xl-5 mt-3 btn btn-primary" @click.prevent="() => addtLotteryResult()">立即抽獎</button>
              </div>
              <p class="text-end mt-3">抽一次消耗一張抽獎券</p>
            </div>

            <!-- 完成食譜 -->
            <div v-if="lotteryResult && getPrize && getPrize.id" class="text-center mt-lg-120 mt-5 ">
              <h5 class="fs-md-3 fs-5 text-white fw-bold bg-primary-purple py-3 mb-0 d-flex align-items-center justify-content-center letter-spacing-5-sm-0">
                <span class="material-icons-outlined me-md-3 me-2">
                  celebration
                </span>恭喜您完成
                {{ getPrize.id === 1 ? '全部' : getPrize.id === 2 ? '2份' : '1份' }}食譜，獲得
                <span class="material-icons-outlined fs-2">
                  arrow_drop_down
                </span>
              </h5>
              <div class="bg-secondary-light-purple px-3">
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

            <div class="py-96"  data-aos="fade-up">
              <div class="d-lg-flex mb-2">
                <h2 class="d-flex align-items-center justify-content-center justify-content-lg-start fw-bold">
                  <img src="../../assets/images/title4.png" class="me-lg-3 me-4 img-lg-64-md-36" alt="熱">
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

                      <div class="question-mark position-absolute w-100 text-center top-0 img-lg-220-md-200 bg-gradient-purple">
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
                <li v-for="rule in lottery.rules" :key="rule">{{ rule }}</li>
              </ol>
            </div>

        </div>
      </section>
    </div>
</template>
