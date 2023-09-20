<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import numberCommaMixin from '../../mixins/numberCommaMixin'
import { db, auth } from '../../firebase/db'
import { ref, onValue, set, remove, push } from 'firebase/database'
import { onAuthStateChanged } from 'firebase/auth'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
export default {
  components: {
    Swiper,
    SwiperSlide,
    Loading
  },
  mixins: [numberCommaMixin],
  data () {
    return {
      recipe: {},
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
      mainImg: '', // 控制圖片顯示
      bookMark: {},
      allThumbNum: 0,
      myThumb: {},
      recipeComments: [],
      recipeMessage: '',
      qty: 1,
      groupProduct: {},
      user: {},
      uid: '',
      isLoading: false,
      fullPage: true
    }
  },
  methods: {
    ...mapActions(cartStore, ['addCart', 'toastMessage']),
    // 取得所有讚數 - 要先得到 uid
    getMyThumb () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const { id } = this.$route.params
          const dataRef = ref(db, `recipePersonalThumbs/${this.uid}/${id}`)
          onValue(dataRef, snapshot => {
            this.myThumb = snapshot.val()
          })
        } else {
          this.uid = null
          this.user = {}
          this.myThumb = null
        }
      })
    },
    getAllThumbs () {
      const { id } = this.$route.params
      // 取得讚
      const dataRef = ref(db, `recipeThumbs/${id}`)
      onValue(dataRef, snapshot => {
        this.allThumbNum = snapshot.val()
        if (this.allThumbNum) {
          this.allThumbNum = this.allThumbNum.thumbs
        } else {
          this.allThumbNum = 0
        }
      })
    },
    // 增加讚 recipeThumbs/食譜id/使用者id 這樣比較方便
    addThumb () {
      if (!this.uid) {
        this.toastMessage('登入才可按讚', 'error')
        return
      }
      const reference = ref(db, `recipePersonalThumbs/${this.uid}/${this.recipe.id}`)
      set(reference, this.recipe)
      // 先取得再增加
      const referenceThumb = ref(db, `recipeThumbs/${this.recipe.id}`)
      set(referenceThumb, {
        thumbs: this.allThumbNum + 1
      })
      this.toastMessage('按讚成功')
    },
    // 刪除讚
    deleteThumb () {
      remove(ref(db, `recipePersonalThumbs/${this.uid}/${this.recipe.id}`))
      const referenceThumb = ref(db, `recipeThumbs/${this.recipe.id}`)
      set(referenceThumb, {
        thumbs: this.allThumbNum - 1
      })
      this.toastMessage('取消按讚')
    },
    // 取得食譜資料
    getRecipe () {
      const { id } = this.$route.params

      const dataRef = ref(db, `recipes/${id}`)
      onValue(dataRef, snapshot => {
        this.recipe = snapshot.val()
        this.recipe.id = id
        this.mainImg = this.recipe.image // 控制圖片一開始是主圖
        // 得到組合產品
        this.groupProduct = this.recipe.relativeProducts.filter(product => {
          return product.category === '組合包'
        })
        console.log(this.groupProduct, '有什麼產品')
        this.groupProduct = this.groupProduct[0]
        this.isLoading = false
      })
    },
    // 取得所有食譜留言
    getAllComments () {
      const { id } = this.$route.params
      const dataRef = ref(db, 'recipeComments/')
      onValue(dataRef, snapshot => {
        // 先取得所有留言
        let comments = snapshot.val()
        comments = Object.values(comments).map((item, index) => {
          item.id = Object.keys(item)[index]
          return item
        })
        // 再篩選個別食譜的留言
        this.recipeComments = comments.filter(comment => {
          return comment.recipeId === id
        })
      })
    },
    addComments () {
      const reference = ref(db, 'recipeComments')
      // 要有亂數否則會重複
      const newUserRef = push(reference)
      set(newUserRef, {
        recipeId: this.recipe.id,
        createAt: new Date().getTime(),
        message: this.recipeMessage,
        username: this.user.nickName,
        userImg: this.user.headshotImg
      })
      this.recipeMessage = ''
    },
    // 食譜收藏 - 要先得到 uid
    getBookmark () {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            const { id } = this.$route.params
            const dataRef = ref(db, `recipeBookmarks/${this.uid}/${id}`)
            onValue(dataRef, snapshot => {
              this.bookMark = snapshot.val()
            })
          })
        } else {
          this.uid = null
          this.user = {}
          this.bookMark = null
        }
      })
    },
    // 增加食譜收藏
    addBookmark () {
      if (!this.uid) {
        this.toastMessage('登入才可使用收藏功能', 'error')
        return
      }
      const reference = ref(db, `recipeBookmarks/${this.uid}/${this.recipe.id}`)
      set(reference, this.recipe)
      this.toastMessage('收藏成功')
    },
    // 刪除食譜收藏
    deleteBookmark () {
      remove(ref(db, `recipeBookmarks/${this.uid}/${this.recipe.id}`))
      this.toastMessage('已刪除收藏')
    }
  },
  mounted () {
    window.scrollTo(0, 0)

    this.isLoading = true
    this.getAllThumbs()
    this.getMyThumb()
    this.getBookmark()
    this.getRecipe()
    this.getAllComments()
  }
}
</script>

<template>
  <div class="no-scroll-x">
      <loading v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"
                 :lock-scroll="true">
                 <div class="d-flex flex-column align-items-center py-96">
      <img src="../../assets/images/loadingLogo.png" class="loadingLogo mb-3" alt="logo" >
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
      <section class="container py-md-96 py-60">
        <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <RouterLink to="/recipes" class="link-primary">甜點食譜</RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ recipe.title }}</li>
            </ol>
        </nav>
        <div class="row row-cols-lg-2 row-cols-1 g-5">
          <div class="col">
            <img :src="mainImg" style="height: 300px;" class="w-100 object-fit-cover mb-4" :alt="recipe.title">
            <div class="sub-picture-swiper position-relative">
              <swiper :slides-per-view="3" :space-between="15"
              :modules="modules"
              navigation
              style="height: 160px;"
              >
                <swiper-slide>
                  <img :src="recipe.image" alt="食譜主圖片" class="cursor-pointer object-fit-cover w-100" style="height: 100px;" :class="{'border': mainImg === recipe.image, 'border-3': mainImg === recipe.image, 'border-primary': mainImg === recipe.image}"  @click="()=>mainImg = recipe.image">
                </swiper-slide>
                <swiper-slide v-for="(pic, index) in recipe.imgsUrl" :key="pic">
                  <img :src="pic" :alt="`食譜副圖片${ index + 1 }`" class="cursor-pointer object-fit-cover w-100" style="height: 100px;" :class="{'border': mainImg === pic, 'border-3': mainImg === pic, 'border-primary': mainImg === pic}"  @click="()=>mainImg = pic">
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="col d-flex flex-column">
            <div class=" d-flex align-items-center mb-3">
              <span class="badge rounded-pill bg-primary fs-6 me-2">{{ recipe.category }}</span>
              <h2 class="mb-0 fs-lg-4 fs-5 fw-bold">{{ recipe.title }}</h2>
              <div class="d-flex align-items-center ms-auto">
                <button v-if="!bookMark" type="button" class="border-0 bg-transparent text-tomato fs-4 p-0 mt-1" @click="()=>addBookmark(recipe.id)">
                  <i class="bi bi-heart"></i>
                </button>
                <button v-else-if="bookMark" type="button" class=" border-0 bg-transparent fs-4 text-tomato p-0 mt-1" @click="deleteBookmark">
                  <i class="bi bi-heart-fill"></i>
                </button>
                <button v-if="!myThumb" type="button" class="badge border border-primary rounded-pill fs-6 ms-4 btn-like" :class="{'text-primary': allThumbNum,'text-gray': !allThumbNum}" @click="addThumb">
                  <span class="mb-0 me-1" :class="{'text-primary': allThumbNum,'text-gray': !allThumbNum}">{{ allThumbNum }}</span>
                  <i class="bi bi-hand-thumbs-up"></i>
                </button>
                <button v-else-if="myThumb" type="button" class="badge border border-primary rounded-pill fs-6 ms-4 btn-like" :class="{'text-primary': allThumbNum,'text-gray': !allThumbNum}" @click="deleteThumb">
                  <span class="mb-0 me-1" :class="{'text-primary': allThumbNum,'text-gray': !allThumbNum}">{{ allThumbNum }}</span>
                  <i class="bi bi-hand-thumbs-up-fill"></i>
                </button>
              </div>
            </div>

            <table class="table fs-md-5 mb-2">
              <thead>
                <tr>
                  <th class="fw-normal text-muted" width="150">食譜作者</th>
                  <th class="fw-normal">{{ recipe.author }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="text-muted">份量</td>
                  <td>{{ recipe.content }}</td>
                </tr>
                <tr>
                  <td class="text-muted">甜點介紹</td>
                  <td class="fs-6 lh-lg">{{ recipe.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section class="bg-lightPurple-secondary">
        <div class="container py-lg-96 py-5">
          <div class="row row-cols-lg-2 row-cols-1 g-80">
            <div class="col">
              <h3 class="d-flex align-items-center mb-4 fw-bold text-purple border-bottom pb-1 border-purple">
                <span class="material-icons me-2">
                  auto_awesome
                </span>
                準備材料
              </h3>
              <table class="table table- table-hover mb-60">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">名稱</th>
                    <th scope="col">單位</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(ingredient, index) in recipe.ingredients" :key="ingredient + 367657" >
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{  ingredient.name }}</td>
                    <td> {{ ingredient.num }} {{ ingredient.unit }}</td>
                  </tr>
                </tbody>
              </table>

              <h3 class="d-flex align-items-center mb-4 fw-bold text-purple border-bottom pb-1 border-purple">
                <span class="material-icons me-2">
                  auto_awesome
                </span>
                相關產品
              </h3>
                <div class="d-flex mb-3">
                  <div class="card bg-transparent w-50 mx-auto">
                    <RouterLink :to="`/products/${groupProduct.id}`" class="card-img-hover position-relative mb-3">
                      <img :src="groupProduct.imgUrl" class="object-fit-cover card-img" :alt="groupProduct.title">
                      <p class="detail position-absolute top-50 start-50 translate-middle fw-bold letter-spacing-5 link-darkBrown fs-xl-5 text-center">查看<br class="d-xl-none d-lg-block">詳細食譜</p>
                    </RouterLink>
                    <RouterLink :to="`/products/${groupProduct.id}`" class="text-center">
                      <h5 class="fs-md-5 fs-6">{{ groupProduct.title }}</h5>
                    </RouterLink>
                  </div>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                  <div class="mb-0 d-flex flex-column">
                    <del class="text-gray fs-6 me-3">NT$ {{numberComma(groupProduct.originalPrice)}}</del>
                    <span class="fs-5 text-danger fw-bold">NT$ {{numberComma(groupProduct.price)}} <span class="text-darkBrown"> / 組</span></span>
                  </div>
                  <div class="input-group w-50">
                    <select name="" id="" class="form-select text-center" v-model="qty" style="width: 70px;">
                      <option :value="number" v-for="number in 30" :key="number + 4596945">{{ number}}</option>
                    </select>
                    <button class="btn btn-primary" type="button" id="button-addon2" @click="()=>addCart(groupProduct, qty)">一鍵買齊</button>
                  </div>
                </div>
              <div class="row mt-5 row-cols-lg-3 row-cols-2 g-3">
                <div class="col" v-for="product in recipe.relativeProducts" :key="product.id + 456496">
                  <div class="card bg-transparent">
                    <RouterLink :to="`/products/${product.id}`"  class="card-img-hover position-relative mb-2" v-if="product.category === '單一產品'">
                    <img :src="product.imgUrl" :alt="product.title" class="object-fit-cover card-img" style="height: 150px !important;">
                    <p class="detail position-absolute top-50 start-50 translate-middle fw-bold link-darkBrown letter-spacing-5 text-center">查看<br>商品資訊</p>
                    </RouterLink>
                    <RouterLink :to="`/products/${product.id}`" v-if="product.category === '單一產品'" class="text-center">
                      <h5 class="fs-6">{{ product.title }}</h5>
                    </RouterLink>
                  </div>

                </div>
              </div>
            </div>
            <div class="col">
              <h3 class="d-flex align-items-center mb-4 fw-bold text-purple border-bottom pb-1 border-purple">
                <span class="material-icons me-2">
                  auto_awesome
                </span>
                製作步驟
              </h3>
              <div v-if="recipe.instructions" class="mb-60">
                <p class="me-3 mb-4" v-for="(instruction) in recipe.instructions.split('/')" :key="instruction + 346346">{{instruction}}</p>
              </div>
              <h3 class="d-flex align-items-center mb-4 fw-bold text-purple border-bottom pb-1 border-purple">
                <span class="material-icons me-2">
                  auto_awesome
                </span>
                教學影片
              </h3>
              <iframe :src="recipe.video" class="w-100" style="height: 350px;" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>
      <section class="container py-lg-96 py-5">
        <h3 class="d-flex align-items-center fw-bold text-purple border-bottom pb-1 border-purple mb-4">
          <span class="material-icons me-2">
            auto_awesome
          </span>
          顧客評價
          <div class="ms-3 badge border rounded-pill fs-6" :class="{'text-primary': recipeComments.length, 'text-gray': !recipeComments.length,'border-primary': recipeComments.length, 'border-gray': !recipeComments.length, 'bg-secondary': recipeComments.length, 'bg-whiteGray': !recipeComments.length}">
            {{ recipeComments.length }} 則
          </div>
          <RouterLink to="/loginSignup" v-if="!uid" class="ms-auto mb-1 btn btn-outline-gradient rounded-pill">我要登入寫評價</RouterLink>
        </h3>

        <form v-if="uid">
          <h5 class="mb-3 fw-bold d-flex align-items-center">
            <img v-if="user.headshotImg" :src="user.headshotImg" alt="大頭貼" width="50" height="50" class="object-fit-cover rounded-circle me-3">
            <i v-else-if="!user.headshotImg" class="bi bi-person-circle me-3 fs-45"></i>
            {{ user.nickName }}
          </h5>
          <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="recipeMessage"></textarea>
          <div class="d-flex">
            <button type="submit" class="ms-auto btn btn-primary mt-3" @click.prevent="addComments">送出</button>
          </div>
        </form>
        <div class="row gy-5 mt-3">
          <div class="col-12 border-bottom d-flex align-items-center mb-2" v-for="comment in recipeComments" :key="comment + 3657">
            <img v-if="comment.userImg" :src="comment.userImg" alt="大頭貼" width="50" height="50" class="rounded-circle me-3 object-fit-cover mb-auto">
            <i v-else-if="!comment.userImg" class="bi bi-person-circle me-3 fs-45 lh-1 mb-auto"></i>
            <div>
              <h5 class="mb-0 fs-6">{{ comment.username }}</h5>
              <p>{{ `${new Date(comment.createAt).toLocaleDateString()}` }}</p>
              <p class="mb-2">{{ comment.message }}</p>
            </div>
          </div>
        </div>
      </section>
  </div>
</template>
