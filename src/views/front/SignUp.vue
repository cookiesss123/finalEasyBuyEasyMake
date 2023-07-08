<template>
       <main class="mt-5 d-flex align-items-center bg-lightYellow">
            <div class="container my-7">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item fs-5">
                        <RouterLink to="/home" class="link-red  d-none d-lg-block">首頁</RouterLink>
                        </li>
                      <li class="breadcrumb-item active fs-5 d-none d-lg-block" aria-current="page">註冊</li>
                    </ol>
                </nav>
                <div class="row mt-3 gx-3 rounded py-3">
                    <div class="col d-none d-lg-block">
                        <div class="card h-100 border-0 bg-lightYellow mt-9" style="border-radius: 30px; border: 0px !important;">
                            <img src="../../assets/images/hero-mobile.png" class="img-fluid card-img-top " alt="" style="border-radius: 30px;">
                            <div class="card-img-overlay" style="top:450px">
                                <h2 class="text-darkBrown text-center mb-4 h1">
                                    您在找的
                                    <span class="text-orange"> 食譜材料 </span>
                                    都在這裡
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <!-- border- -->
                        <div class="signup-card card h-100 " style="border-radius: 20px; padding: 0 !important; border: 0px !important;">
                            <div class="card-body p-0">
                                <!-- border border-dark -->
                                <div class="card-header bg-white py-0 "  style="border-radius: 20px 20px 0px 0px;">
                                    <div class="row " style="margin: 0 -18px;">
                                        <h2 class="h5 col mb-0 text-center py-3 position-relative" style="padding-bottom: 10px; border-radius: 20px 0 0 0;">
                                            <RouterLink to="/login" class="link-dark stretched-link text-decoration-none fw-bold link-orange ">登入</RouterLink>
                                        </h2>
                                        <h2 class="h5 col mb-0 text-center py-3 position-relative bg-orange text-decoration-none fw-bold text-white" style="padding-bottom: 10px; border-radius: 0 20px 0 0;">
                                            註冊
                                        </h2>
                                    </div>
                                </div>
                                <!--  d-flex flex-column -->
                                <h1 class="text-orange text-center h3 mt-4">
                                    歡迎來到
                                    <!-- <span class="text-orange">甜點食譜一鍵購</span> -->
                                    <div class="d-flex mt-2">
                                        <img src="../../assets/images/logo.png" class="mx-auto" alt="" width="280">
                                    </div>
                                </h1>
                                <VForm ref="form" class="mx-5 card-body" v-slot="{ errors }" @submit="signUp">
                                    <div class="row gy-4 d-flex">
                                        <div class="col-12 fs-5">
                                            <label for="nickName" class="form-label text-secondary" :class="{'text-orange':user.nickName && !errors['暱稱']}"><i class="bi bi-person-circle"></i> 暱稱</label>
                                            <VField
                                                id="nickName"
                                                name="暱稱"
                                                type="text"
                                                class="form-control border-0 border-bottom"
                                                :class="{ 'is-invalid': errors['暱稱'], 'is-valid':user.nickName && !errors['暱稱']}"
                                                placeholder="請輸入您的暱稱"
                                                rules="required|max:10"
                                                v-model="user.nickName"
                                            ></VField>
                                            <ErrorMessage name="暱稱" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="col-12 fs-5">
                                            <label for="email" class="form-label text-secondary" :class="{'text-orange':user.email && !errors['信箱']}"><i class="bi bi-envelope-fill" ></i> 信箱</label>
                                            <VField
                                                id="email"
                                                name="信箱"
                                                type="email"
                                                class="form-control border-0 border-bottom"
                                                :class="{ 'is-invalid': errors['信箱'], 'is-valid':user.email && !errors['信箱']}"
                                                placeholder="請輸入您的信箱"
                                                rules="email|required"
                                                v-model="user.email"
                                            ></VField>
                                            <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="col-12 fs-5">
                                            <label for="password" class="form-label text-secondary" :class="{'text-orange':user.password && !errors['密碼']}"><i class="bi bi-unlock-fill"></i> 密碼</label>
                                            <VField
                                                id="password"
                                                name="密碼"
                                                type="password"
                                                class="form-control border-0 border-bottom"
                                                :class="{ 'is-invalid': errors['密碼'], 'is-valid':!errors['密碼'] && user.password}"
                                                placeholder="請輸入密碼"
                                                rules="required|min:6"
                                                v-model="user.password"
                                            ></VField>
                                            <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="col-12 fs-5">
                                            <label for="confirmPassword" class="form-label text-secondary" :class="{'text-orange':user.confirmPassword && !errors['確認密碼']}"><i class="bi bi-lock-fill" ></i> 確認密碼</label>
                                            <VField
                                                id="confirmPassword"
                                                name="確認密碼"
                                                type="password"
                                                class="form-control border-0 border-bottom"
                                                :class="{ 'is-invalid': errors['確認密碼'], 'is-valid':!errors['確認密碼'] && user.confirmPassword}"
                                                placeholder="請再次輸入密碼"
                                                rules="required|confirmed:@密碼"
                                                v-model="user.confirmPassword"
                                            ></VField>
                                            <ErrorMessage name="確認密碼" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="col-12" >
                                            <!--  @click.prevent="signUp" -->
                                            <button type="submit" class="btn btn-orange w-100 text-white">註冊</button>
                                        </div>
                                    </div>
                                </VForm>
                            </div>
                            <!-- 手機6 電腦 8-->
                              <!-- 要循環只能 3 個 -->
                            <div class="card-footer border-0 mb-4" style="border-radius: 20px; background-color: white !important; height: 90px;">
                                <swiper :slides-per-view="3" :space-between="10"
                                :loop="true"
                                :modules="modules"
                                :allowTouchMove="false"
                                :autoplay="{
                                delay: 500,
                                disableOnInteraction: false,
                            }"
                                class="loginSignupSwiper"
                                >
                                <!-- 桌機 600px 手機 300px  圖 桌機 50 手機 30 -->
                                <swiper-slide class="d-flex align-items-center">
                                    <img src="../../assets/images/1410887.png" style="width: 50px; height: 50px" class="mx-auto">
                                    <i class="bi bi-dot text-orange fs-1"></i>
                                </swiper-slide>
                                <swiper-slide class="d-flex align-items-center">
                                    <img src="../../assets/images/2674777.png" style="width: 50px; height: 50px" class="mx-auto">
                                    <i class="bi bi-dot text-orange fs-1"></i>
                                </swiper-slide>
                                <swiper-slide class="d-flex align-items-center">
                                    <img class="mx-auto" src="../../assets/images/5887767.png" style="width: 50px; height: 50px">
                                    <i class="bi bi-dot text-orange fs-1"></i>
                                </swiper-slide>
                                <swiper-slide class="d-flex align-items-center">
                                    <img class="mx-auto" src="../../assets/images/8734574.png" style="width: 50px; height: 50px">
                                    <i class="bi bi-dot text-orange fs-1"></i>
                                </swiper-slide>
                                <swiper-slide class="d-flex align-items-center">
                                    <img class="mx-auto" src="../../assets/images/726917.png" style="width: 50px; height: 50px">
                                    <i class="bi bi-dot text-orange fs-1"></i>
                                </swiper-slide>
                                <swiper-slide class="d-flex align-items-center">
                                    <img class="mx-auto" src="../../assets/images/4771632.png" style="width: 50px; height: 50px">
                                    <i class="bi bi-dot text-orange fs-1"></i>
                                </swiper-slide>
                                <swiper-slide class="d-flex align-items-center">
                                    <img class="mx-auto" src="../../assets/images/biscuit.png" style="width: 50px; height: 50px">
                                    <i class="bi bi-dot text-orange fs-1"></i>
                                </swiper-slide>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
</template>
<script>
import { RouterLink } from 'vue-router'
import { db, auth } from '../../firebase/db'
import { ref, set } from 'firebase/database'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
export default {
  data () {
    return {
      modules: [Navigation, Pagination, Autoplay],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        bulletClass: 'my-bullet-class',
        bulletActiveClass: 'my-bullet-active-class'
      },
      user: {
        nickName: '',
        email: '',
        password: '',
        confirmPassword: '',
        // 新增抽獎券
        lotteryTicket: 1,
        headshotImg: ''
      }
    }
  },
  components: {
    RouterLink,
    Swiper,
    SwiperSlide
  },
  methods: {
    // 註冊
    async signUp  () {
      const email = this.user.email
      const password = this.user.password
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const loginUser = userCredential.user
        console.log(loginUser, '取得user 資料')

        // 寫入user 資料到資料庫
        const reference = ref(db, 'users/' + loginUser.uid)
        // push 自動生成 亂數 id

        set(reference, {
          email,
          nickName: this.user.nickName,
          lotteryTicket: this.user.lotteryTicket,
          headshotImg: this.user.headshotImg
        })

        this.$swal({
          icon: 'success',
          title: '註冊成功',
          showConfirmButton: false,
          timer: 1500
        })
        // 註冊完直接登入了 所以變成到home
        this.$router.push('/home')
      } catch (e) { // 應該不可能註冊不成功 因為 vee validate會先擋掉 不過還是預防一下
        console.log(e.message, '錯誤')
        this.$swal({
          icon: 'error',
          title: '此信箱已被註冊，請更換信箱',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  }
}
</script>
<style>
.signup-card .card-header h2:hover {
    /* border-bottom: 3px solid #493A25;  */
    background-color: #d04740;
    color: white;
}
.signup-card .card-header h2:hover a {
    color: white !important;
}
</style>
