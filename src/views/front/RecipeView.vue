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
            console.log(this.myThumb, '個人按讚')
          })
        } else {
          console.log('並未登入')
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
        console.log(this.allThumbNum, !this.allThumbNum, '所有讚')
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
        console.log(this.recipe, '讀取的資料')
        this.mainImg = this.recipe.image // 控制圖片一開始是主圖
        // 得到組合產品
        this.groupProduct = this.recipe.relativeProducts.filter(product => {
          return product.category === '組合包'
        })
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
        console.log(comments, '全部食譜的留言')
        // 再篩選個別食譜的留言
        this.recipeComments = comments.filter(comment => {
          return comment.recipeId === id
        })
        console.log(this.recipeComments, '個別留言')
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
          console.log(this.uid, '使用者已登入取得 uid')
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val()
            console.log(this.user, '讀取的資料')
            const { id } = this.$route.params
            const dataRef = ref(db, `recipeBookmarks/${this.uid}/${id}`)
            onValue(dataRef, snapshot => {
              this.bookMark = snapshot.val()
              console.log(this.bookMark, '書籤')
            })
          })
        } else {
          console.log('並未登入')
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
      this.toastMessage('刪除收藏')
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
  // computed: {
  //   ...mapState(cartStore, ['uid', 'user'])
  // }
}
</script>
<template>
  <div>
    <loading v-model:active="isLoading"
                 :can-cancel="false"
                 :is-full-page="fullPage"
                 :lock-scroll="true">
                 <div class="d-flex flex-column align-items-center py-10">
      <img src="../../assets/images/loadingLogo.png" class="loadingLogo mb-3" style="width: 150px;" alt="" >
      <h1 class="text-center fw-bold text-blue">
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
      </h1>
    </div>
        </loading>
    <div class="mt-10" style="overflow-x: hidden;">

<div class="container">
  <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item ">
        <RouterLink to="/recipes" class="link-blue">甜點食譜</RouterLink>
        </li>
        <li class="breadcrumb-item active " aria-current="page">{{ recipe.title }}</li>
      </ol>
  </nav>
</div>
<section class="container mt-lg-5">
<div class="row row-cols-lg-2 row-cols-1 gx-5">
  <div class="col">
    <!-- 大圖位置 -->
    <div class="d-flex recipeMainImg mb-4">
      <img :src="mainImg" style="object-fit: cover; max-height: 300px;" class="w-100" alt="">
    </div>
    <div class="recipeSwiper position-relative">
      <swiper :slides-per-view="3" :space-between="15"
      :modules="modules"
      navigation
      style="height: 160px;"
      class="w-100"
      >
        <swiper-slide style="cursor: pointer;" @click="()=>mainImg = recipe.image">
          <div>
            <img :src="recipe.image" alt="" style="object-fit: cover; height: 100px !important;" :class="{'border': mainImg === recipe.image, 'border-3': mainImg === recipe.image, 'border-blue': mainImg === recipe.image}">
          </div>
        </swiper-slide>
        <swiper-slide v-for="pic in recipe.imgsUrl" :key="pic + 45345" style="cursor: pointer;"  @click="()=>mainImg = pic">
          <div>
            <img :src="pic" alt="" style="object-fit: cover; height: 100px !important;" :class="{'border': mainImg === pic, 'border-3': mainImg === pic, 'border-blue': mainImg === pic}">
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
  <div class="col d-flex flex-column">
    <div class=" d-flex align-items-center mb-3">
      <h5 class="me-2 mb-0">
        <span class="badge rounded-pill bg-blue">{{ recipe.category }}</span>
      </h5>
      <h1 class="mb-0 mainTitle">{{ recipe.title }}</h1>
      <div class="d-flex align-items-center ms-auto">
      <button v-if="!bookMark" type="button" class="border-0 bg-transparent text-blue fs-4" @click="()=>addBookmark(recipe.id)">
        <i class="bi bi-heart"></i>
      </button>
      <button v-else-if="bookMark" type="button" class=" border-0 bg-transparent fs-4" @click="deleteBookmark" style="color: #fa6e42">
        <i class="bi bi-heart-fill"></i>
      </button>
        <span class="mb-0 ms-3" :class="{'text-blue': allThumbNum,'text-lightGray': !allThumbNum}">{{ allThumbNum }}</span>
        <button v-if="!myThumb" type="button" class="border-0 bg-transparent fs-4" :class="{'text-blue': allThumbNum,'text-lightGray': !allThumbNum}" @click="addThumb">
          <i class="bi bi-hand-thumbs-up"></i>
        </button>
        <button v-else-if="myThumb" type="button" class="border-0 bg-transparent fs-4" :class="{'text-blue': allThumbNum,'text-lightGray': !allThumbNum}" @click="deleteThumb">
          <i class="bi bi-hand-thumbs-up-fill"></i>
        </button>
      </div>
    </div>
    <h5 class="mb-3">食譜作者：{{ recipe.author }}</h5>
    <h5 class="mb-3">份量：{{ recipe.content }}</h5>
    <div class="mt-auto">
      <h5>甜點介紹：</h5>
      <p class="mb-5">{{recipe.description}}</p>
    </div>
  </div>
</div>
</section>

<section class="bg-lightBlue my-5" style="overflow-x: hidden;">
  <div class="container py-5">
    <div class="row row-cols-lg-2 row-cols-1 g-5">
      <div class="col">
        <h3 class="mb-3 fw-bold"><span class="material-icons">egg</span> 準備材料</h3>
        <h5 class="me-3">成本：NT$ {{recipe.total}}</h5>
        <div class="row mb-6">
          <div class="col-12" v-for="(ingredient, index) in recipe.ingredients" :key="ingredient + 367657">
            {{ index + 1 }}. {{ ingredient.name }} {{ ingredient.num }} {{ ingredient.unit }}
          </div>
        </div>
        <h3 class="mb-3 fw-bold"><span class="material-icons-outlined">soup_kitchen</span> 製作步驟</h3>
        <div v-if="recipe.instructions">
          <p class="me-3" v-for="(instruction) in recipe.instructions.split('/')" :key="instruction + 346346">{{instruction}}</p>
        </div>
        <h3 class="mt-6 mb-3 fw-bold"><i class="bi bi-youtube"></i> 教學影片</h3>
        <iframe width="560" height="315" :src="recipe.video" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div class="col">
        <h3 class="mb-4 fw-bold"><i class="bi bi-bag-check-fill"></i> 相關產品</h3>
        <div class="row">
          <div class="col-12 relativeProducts">
            <div v-for="product in recipe.relativeProducts" :key="product.id + 456496" class="subImg">
              <RouterLink :to="`/products/${product.id}`"  class="link-blue d-flex flex-column align-items-center cardImg" v-if="product.category === '組合包'">
                <!-- position-relative -->
                <div class="enlargeImg position-relative" style="width: 50% !important;">
                  <img :src="product.imgUrl" alt="" class="w-100" height="150" style="object-fit: cover;">
                  <p class="subDetail d-none d-lg-block position-absolute fw-bold text-darkBrown" style="top: 40%; left: 50%; transform: translateX(-50%); letter-spacing: 5px;">查看商品資訊</p>
                </div>
                <p class="fw-bold mt-2">{{ product.title }}</p>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between align-items-end">
          <p class="h5 mb-0 d-flex flex-column">
            <del class="text-secondary me-3" style="font-size: 16px;">NT$ {{numberComma(recipe.total)}}</del>
            <span class="text-danger fw-bold">NT$ {{numberComma(recipe.price)}} <span class="text-darkBrown"> / 組</span></span>
          </p>
          <div class="input-group w-50">
            <select name="" id="" class="form-select text-center" v-model="qty" style="width: 70px;">
              <option :value="number" v-for="number in 30" :key="number + 4596945">{{ number}}</option>
            </select>
            <button class="btn btn-blue" type="button" id="button-addon2" @click="()=>addCart(groupProduct, qty)">一鍵買齊</button>
          </div>
        </div>
        <div class="row mt-5 row-cols-lg-3 row-cols-2 relativeProducts">
          <div class="col subImg" v-for="product in recipe.relativeProducts" :key="product.id + 456496">
            <RouterLink :to="`/products/${product.id}`"  class="link-blue d-flex flex-column align-items-center cardImg" v-if="product.category === '單一產品'">
              <div class="enlargeImg position-relative">
                <img :src="product.imgUrl" alt="" height="150" style="object-fit: cover;" class="w-100">
                <p class="subDetail d-none d-lg-block position-absolute fw-bold text-darkBrown" style="top: 40%; left: 50%; transform: translateX(-50%);">查看商品資訊</p>
              </div>
              <p class="fw-bold mt-2">{{ product.title }}</p>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="container py-5">
  <h3 class="d-flex align-items-center">
    <i class="bi bi-stars"></i>
    顧客評價
    <div class="ms-2 badge border rounded-pill bg-white" :class="{'text-blue': recipeComments.length, 'text-lightBrownGray': !recipeComments.length,'border-blue': recipeComments.length, 'border-lightBrownGray': !recipeComments.length}" style="font-size: 16px;">
      {{ recipeComments.length }} 則
    </div>
    <RouterLink to="/login" class="ms-3 btn btn-blue d-none d-lg-block" v-if="!uid">我要登入寫評價</RouterLink>
  </h3>
  <div class="d-flex">
    <RouterLink to="/login" class="btn btn-blue d-lg-none ms-auto" v-if="!uid">我要登入寫評價</RouterLink>
  </div>
  <div class="my-5">
    <form action="" v-if="uid">
      <h5 class="mb-3 fw-bold d-flex align-items-center">
        <!-- <i class="bi bi-person-circle fs-1 me-3"></i> -->
        <img v-if="user.headshotImg" :src="user.headshotImg" alt="" width="50" height="50" style="object-fit: cover;" class="rounded-circle me-3">
        <i v-else-if="!user.headshotImg" class="bi bi-person-circle me-3" style="font-size: 45px;"></i>
        {{ user.nickName }}
      </h5>
      <textarea class="form-control" name="" id="" cols="30" rows="10" v-model="recipeMessage"></textarea>
      <div class="d-flex">
        <button type="submit" class="ms-auto btn btn-blue mt-3" @click.prevent="addComments">送出</button>
      </div>
    </form>
    <div class="row gy-5">
      <div class="col-12 border-bottom" v-for="comment in recipeComments" :key="comment + 3657">
        <h5 class="mb-2 fw-bold d-flex align-items-center">
          <!-- <i class="bi bi-person-circle fs-1 me-3"></i> -->
          <img v-if="comment.userImg" :src="comment.userImg" alt="" width="50" height="50" style="object-fit: cover;" class="rounded-circle me-3">
          <i  v-else-if="!comment.userImg" class="bi bi-person-circle me-3" style="font-size: 45px;"></i>
          {{ comment.username }}
        </h5>
        <p class="mb-0">{{ `${new Date(comment.createAt).toLocaleDateString()}` }}</p>
        <p>{{ comment.message }}</p>
      </div>
    </div>
  </div>
</section>
    </div>
  </div>
</template>
<style>
  .rates .form-check label{
    cursor: pointer;
  }
  .rates .form-check .labelRate1:hover img{
    content: url('./src/assets/images/icon-star-filled.png');
  }

/* 要特別設定是 recipeSwiper 不然會影響到另外一頁 */
/* .recipeSwiper .swiper-button-prev{
  left: 0%;
}
.recipeSwiper .swiper-button-next{
  right: 0%;
} */

/* 桌面手機 產品小圖 箭頭*/
.recipeSwiper .swiper-button-next{
  top:90%;
  right:0
}
.recipeSwiper .swiper-button-next::after{
  margin-left: 50%;
  transform: translateX(-50%);
}
.recipeSwiper .swiper-button-prev{
  top:90%;
  left: 79%;
}
/* 副圖 hover  border效果 */
.recipeSwiper img{
  border: 3px solid transparent;
}
/* 改成淺紅 */
.recipeSwiper img:hover{
  border: 3px solid #a6bcfe;
}

/* 圖片 hover 效果 */
.relativeProducts .cardImg{
  opacity: 0.9;
  overflow:hidden;
}
.relativeProducts .cardImg:hover{
  opacity: 1;
}
.relativeProducts .enlargeImg{
  width: 100%;
  overflow:hidden;
}
.relativeProducts .cardImg img{
  transform:scale(1,1);
  transition: all .4s ease-out;
}
.relativeProducts .cardImg:hover .enlargeImg img{
  transform:scale(1.2,1.2);
}
</style>
