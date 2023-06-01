<template>
    <div class="container my-10">
      <LoadingModal ref="loadingModal"></LoadingModal>

      <ul class="nav nav-tabs" >
        <li class="nav-item" @click="()=>tabName = '優惠折扣'">
          <button class="nav-link" :class="{'active': tabName === '優惠折扣', 'link-red':tabName === '優惠折扣'}"  type="button" >優惠折扣</button>
        </li>
        <li class="nav-item" @click="()=>tabName = '抽獎回饋'">
          <button class="nav-link" :class="{'active': tabName === '抽獎回饋', 'link-red':tabName === '抽獎回饋'}" type="button">抽獎回饋</button>
        </li>
      </ul>
      <section v-if="tabName === '優惠折扣'" class="text-red">
        <h3 class="text-center py-3 py-lg-5 fw-bold bg-lightYellow mt-3">本月優惠</h3>
        <div class="row row-cols-lg-4 g-4 py-3 text-darkBrown">
          <div class="col" v-for="(coupon, index) in coupons" :key="index">
              <div class="card">
                  <div class="enlargeImg w-100 rounded">
                    <div class="cardImg">
                      <img :src="coupon.image" class="card-img-top" alt="..." height="200" style="object-fit: cover;">
                    </div>
                    <div class="card-body">
                      <h5 class="card-title h3">{{  coupon.title }}</h5>
                      <p class="card-text text-truncate">{{ coupon.description }}</p>
                      <div class="d-flex">
                          <RouterLink :to="`/discounts/${index}`" href="#" class="stretched-link btn btn-red ms-auto">查看完整優惠資訊</RouterLink>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </section>
      <section  v-else-if="tabName === '抽獎回饋'" >
        <div class="py-3 text-darkBrown d-flex flex-column">
          <p class="">活動時間：{{ new Date(lottery.startDate).toLocaleDateString().split(' ')[0] }} ~ {{ new Date(lottery.dueDate).toLocaleString().split(' ')[0] }}</p>

          <p v-if="uid" :class="{'text-danger':user.lotteryTicket === 0}">剩餘抽獎券：{{ user.lotteryTicket }}</p>

          <!-- 食譜尚未完成 -->
          <!-- getPrize.id !== '1' 不能用 因為 id 讀不到 -->
          <!-- v-if="!getPrize" 要改成不是 '1' -->
          <div v-if="!getPrize || (getPrize && getPrize.id !== 1)" class="col-lg-12 align-self-center">
            <p class="mb-0">本月指定抽獎食譜：</p>
            <div class="row row-cols-lg-3 row-cols-1 pt-4">
              <div v-for="(item, index) in drewProducts" :key="item" class="border border-red col">
                <h3 class="text-center fw-bold my-3">{{ item[0] }}</h3>
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
              <button type="button" class="mx-auto mt-3 btn btn-red" @click="addtLotteryResult">立即抽獎</button>
            </div>
            <p class="text-end">抽一次消耗一張抽獎券</p>
          </div>
          <!-- 完成食譜 -->
          <!-- v-else-if="getPrize" -->
          <div v-if="lotteryResult && this.getPrize && this.getPrize.id" class="d-flex flex-column align-items-center">
            <h5 class="h3 text-center text-red fw-bold">恭喜您完成{{ getPrize.id === 1 ? '全部' : getPrize.id === 2 ? '2份' : '1份' }}食譜，獲得：</h5>
            <div class="col-lg-6 col-12">
                <div class="card position-relative border-0" style="border-radius: 20px;">
                  <div class="card-header h4 fw-bold text-center mb-3 bg-white border-0" >
                    {{ getPrize.id === 1 ? '大獎' : getPrize.id === 2 ? '二獎' : '三獎' }}
                  </div>
                  <img :src="getPrize.img" class="card-img border" style="border-radius: 20px; height:300px; object-fit: contain;" alt="">
                  <div class="card-footer bg-transparent border-0">
                    <h5 class="fw-bold">
                      {{ getPrize.title }}
                    </h5>
                    <p class="text-end">價值：NT$ {{ numberComma(getPrize.price) }} </p>
                  </div>
                </div>
                <p>本店會透過信箱與您聯絡獎品寄送時間，請時刻關注信件，並請留下電話、地址到@EasyMakeEasyBuy.gmail.com，感謝您的支持!<br>下期好禮更精彩，千萬別錯過!</p>
            </div>
          </div>
          <section class="py-100-sm-40 ">
    <div class="container">
      <h2 class="display-6 fw-bold d-flex align-items-center mb-4 d-flex flex-lg-row align-items-center mb-4 ">
        <div class="d-flex align-items-center">
          <div class="d-lg-block d-none me-4 rounded-circle text-center pt-2 position-relative" style="background-color: #FAE8D0; width: 64px; height: 64px; vertical-align: middle; font-size: 45px;">
            本
            <div class="position-absolute" style="background-color: #F5AE4C; width: 25px; height: 5px; top: 41px; right: 20px;">
            </div>
          </div>
          <div class="d-lg-none me-2 rounded-circle text-center pt-1 position-relative" style="background-color: #FAE8D0; width: 36px; height: 36px; font-size: 24px;">
            本
            <div class="position-absolute" style="background-color: #F5AE4C; width: 12px; height: 3px; top: 21px; right: 12px;">
            </div>
          </div>
          <span class="recipeTitle">月獎品一覽</span>
        </div>
      </h2>
    </div>
    <!-- 確保有渲染成功 -->
    <div class="container">
      <div class="prizes row row-cols-lg-3 row-cols-1 gy-4 ">
        <div class="col" v-for="prize in lottery.prizes" :key="prize.img">
          <div class="card position-relative border-0" style="border-radius: 20px;">
            <div class="card-header border-0 h4 fw-bold text-center mb-3 bg-white" >
              {{ prize.id === 1 ? '大獎' : prize.id === 2 ? '二獎' : '三獎' }}
            </div>
            <div class="questionMark  position-absolute d-flex bg-lightYellow" style="top: 60px;  width: 100%; height: 220px; border-radius: 20px; background: linear-gradient(45deg, rgb(252, 179, 78) 20%, rgb(253,164,72), rgb(255,113,75) 90% );">
              <i class="bi bi-question-lg mx-auto text-white" style="font-size: 150px;"></i>
            </div>
            <img :src="prize.img" class="card-img border bg-white" style="border-radius: 20px; height:220px; object-fit: contain;" alt="">
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
      </section>
    </div>
</template>
<script>
// mapState
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import LoadingModal from '../../components/LoadingModal.vue'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { db, auth } from '../../firebase/db'
import { ref, onValue, update, set } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
export default {
  components: {
    LoadingModal
  },
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
      articles: []
    }
  },
  methods: {
    ...mapActions(cartStore, ['checkLogin', 'toastMessage']),
    // 取得折價券 優惠折扣
    getCoupons () {
      const dataRef = ref(db, 'coupons/')
      onValue(dataRef, snapshot => {
        this.coupons = snapshot.val()
        console.log(this.coupons, '折價券')
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
        // 暫時這樣
        this.drewProducts = Object.entries(this.drewProducts)
        console.log(this.drewProducts, this.lottery.prizes, '抽獎標的')
      })
    },
    // 個人抽獎結果
    getLotteryResult () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          console.log(this.uid, '使用者已登入取得 uid')

          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            console.log(this.user, '使用者資料')
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
              // console.log(this.lotteryResult, this.getPrize, !this.getPrize.id, '抽獎結果')
            })
          })
        } else {
          console.log('並未登入')
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
            '<a href="/finalEasyMakeEasyBuy/#/products" class="link-red">前往選購商品</a>',
          showConfirmButton: true
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
      console.log(this.drewProducts, firstNum, secondNum, '抽獎資料')

      // 1. 首次抽獎
      if (!this.drewArr.length) {
        // 先定義抽獎結構
        this.drewProducts.forEach((item, index) => {
          // 因為之前 this.products = [] 會複製到 所以不能用
          this.drewArr[index] = [item[0], []]
        })
        this.drewArr[firstNum][1].push(this.drewProducts[firstNum][1][secondNum])
        console.log(this.drewArr, firstNum, this.drewArr[firstNum][0], '放入什麼')
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
        console.log('首次抽獎')
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
              console.log(this.drewProducts[firstNum][0], item.title, '這個重複了')
            }
          })
        }
        console.log(repeatItem, '有重複嗎')
        // //   // 檢查是否重複
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
          // console.log(this.drewArr, this.drewProducts[firstNum][1][secondNum].title, '沒有重複恭喜')

          let index = ''
          // 一獎 全部收集完
          // 先把空的刪除
          if (!this.drewArr[0][1] || !this.drewArr[1][1] || !this.drewArr[2][1]) {
            console.log('不用看了沒中獎')
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
            // 先隱藏 會提示兩次??? 必須設定有變化再更新
          }
          // this.$swal({
          //   title: `恭喜您獲得${this.lottery.prizes[index].title}`,
          //   iconHtml: `<img src="${this.lottery.prizes[index].img}" width="100">`,
          //   customClass: {
          //     icon: 'no-border'
          //   }
          // })
        }
      }
    }
  },
  mounted () {
    // this.$refs.loadingModal.show()
    if (this.$route.query.tabName) {
      this.tabName = this.$route.query.tabName
    }
    // // 優惠折扣
    this.getCoupons()
    this.getLottery()
    this.getLotteryResult()
  },
  computed: {
    // ...mapState(cartStore, ['uid'])
  },
  watch: {

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

</style>
