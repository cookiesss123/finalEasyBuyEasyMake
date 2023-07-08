<template>
      <main class="mt-6 d-flex align-items-center bg-lightPink">
            <div class="container my-7">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item fs-5">
                        <RouterLink to="/home" class="link-red  d-none d-lg-block">首頁</RouterLink>
                      </li>
                      <li class="breadcrumb-item active fs-5  d-none d-lg-block" aria-current="page">登入</li>
                    </ol>
                </nav>
                <div class="row mt-3 gx-3 rounded py-3">
                    <div class="col d-none d-lg-block">
                        <div class="card h-100 border-0 bg-lightPink mt-9" style="border-radius: 30px; border: 0px !important;">
                            <img src="../../assets/images/hero-mobile-pink.png" class="img-fluid card-img-top " alt="" style="border-radius: 30px;">
                            <div class="card-img-overlay" style="top:450px">
                                <h2 class="text-darkBrown text-center mb-4 h1">
                                    您在找的
                                    <span class="text-red"> 食譜材料 </span>
                                    都在這裡
                                </h2>
                                <!-- <div class="d-flex">
                                    <img src="../../assets/images/logo.png" class="mx-auto" alt="" width="310">
                                </div> -->
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <!-- border- -->
                        <div class="login-card card h-100 border" style="border-radius: 20px; padding: 0 !important; border: 0px !important;">
                          <div class="card-body border-0 p-0">
                              <div class="card-header bg-white py-0 "  style="border-radius: 20px 20px 0px 0px;">
                                  <div class="row " style="margin: 0 -18px;">
                                      <h2 class="h5 col mb-0 text-center py-3 position-relative bg-red text-decoration-none fw-bold text-white" style="padding-bottom: 10px; border-radius: 20px 0 0 0;">
                                          登入
                                      </h2>
                                      <h2 class="h5 col mb-0 text-center py-3 position-relative" style="padding-bottom: 10px; border-radius: 0 20px 0 0;">
                                          <RouterLink to="/signup" class="link-dark stretched-link text-decoration-none fw-bold link-red ">註冊</RouterLink>
                                      </h2>
                                  </div>
                              </div>
                              <!--  d-flex flex-column -->
                              <h1 class="text-red text-center h3 mt-4">
                                  歡迎來到
                                  <!-- <span class="text-orange">甜點食譜一鍵購</span> -->
                                  <div class="d-flex mt-2">
                                      <img src="../../assets/images/logo.png" class="mx-auto" alt="" width="280">
                                  </div>
                              </h1>
                              <VForm ref="form" class="mx-5 card-body mt-3" v-slot="{ errors }"  @submit="login">
                                  <div class="row gy-5 d-flex">
                                      <div class="col-12 fs-5">
                                          <label for="email" class="form-label text-secondary" :class="{'text-red':user.email && !errors['信箱']}"><i class="bi bi-envelope-fill" ></i> 信箱</label>
                                          <VField
                                              id="email"
                                              name="信箱"
                                              type="email"
                                              class="form-control border-0 border-bottom"
                                              :class="{ 'is-invalid': errors['信箱'], 'is-valid':user.email && !errors['信箱']}"
                                              placeholder="請輸入您的信箱"
                                              rules="email|required"
                                              v-model="user.email"
                                              autocomplete="email"
                                          ></VField>
                                          <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
                                      </div>
                                      <div class="col-12 fs-5">
                                          <label for="password" class="form-label text-secondary" :class="{'text-red':user.password && !errors['密碼']}"><i class="bi bi-lock-fill" ></i> 密碼</label>
                                          <VField
                                              id="password"
                                              name="密碼"
                                              type="password"
                                              class="form-control border-0 border-bottom"
                                              :class="{ 'is-invalid': errors['密碼'], 'is-valid':!errors['密碼'] && user.password}"
                                              placeholder="請輸入您的密碼"
                                              rules="required|min:6"
                                              v-model="user.password"
                                              autocomplete="current-password"
                                          ></VField>
                                          <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
                                      </div>
                                      <div class="col-12 mt-9" >
                                          <button type="submit" class="btn btn-red w-100">登入</button>
                                      </div>
                                  </div>
                              </VForm>
                          </div>
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
                                <img src="../../assets/images/dessert3.png" style="width: 50px; height: 50px" class="mx-auto">
                                <i class="bi bi-dot text-red fs-1"></i>
                              </swiper-slide>
                              <swiper-slide class="d-flex align-items-center">
                                <img class="mx-auto" src="../../assets/images/donut3.png" style="width: 50px; height: 50px">
                                <i class="bi bi-dot text-red fs-1"></i>
                              </swiper-slide>
                              <swiper-slide class="d-flex align-items-center">
                                <img class="mx-auto" src="../../assets/images/pannacott3.png" style="width: 50px; height: 50px">
                                <i class="bi bi-dot text-red fs-1"></i>
                              </swiper-slide>
                              <swiper-slide class="d-flex align-items-center">
                                <img class="mx-auto" src="../../assets/images/mochi.png" style="width: 50px; height: 50px">
                                <i class="bi bi-dot text-red fs-1"></i>
                              </swiper-slide>
                              <swiper-slide class="d-flex align-items-center">
                                <img class="mx-auto" src="../../assets/images/cakeko.png" style="width: 50px; height: 50px">
                                <i class="bi bi-dot text-red fs-1"></i>
                              </swiper-slide>
                              <swiper-slide class="d-flex align-items-center">
                                <img class="mx-auto" src="../../assets/images/cake23.png" style="width: 50px; height: 50px">
                                <i class="bi bi-dot text-red fs-1"></i>
                              </swiper-slide>
                              <swiper-slide class="d-flex align-items-center">
                                <img class="mx-auto" src="../../assets/images/pieceofcake.png" style="width: 50px; height: 50px">
                                <i class="bi bi-dot text-red fs-1"></i>
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

import { auth, db } from '../../firebase/db'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { ref, onValue } from 'firebase/database'
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
        email: '',
        password: ''
      }
    }
  },
  components: {
    RouterLink,
    Swiper,
    SwiperSlide
  },
  methods: {
    // 登入 筆記寫的
    async login () {
      const email = this.user.email
      const password = this.user.password
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const loginUser = userCredential.user
        console.log(loginUser, '登入結果')
        this.$swal({
          icon: 'success',
          title: '登入成功',
          showConfirmButton: false,
          timer: 1500
        })

        // 讀取使用者資料
        const dataRef = ref(db, 'users/' + loginUser.uid)
        onValue(dataRef, snapshot => {
          const data = snapshot.val()
          if (data.admin) {
            console.log('管理者登場')
            this.$router.push('/admin/recipes')
          } else {
            this.$router.push('/home')
          }
        })
      } catch (e) {
        console.log(e.message)
        let title = '密碼錯誤'
        if (e.message === 'Firebase: Error (auth/user-not-found).') {
          title = '查無此帳號'
        }
        this.$swal({
          icon: 'error',
          title,
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  },
  mounted () {

  }
}
</script>
<style>
.login-card .card-header h2:hover {
    /* border-bottom: 3px solid #493A25;  */
    background-color: #eb8b07;
    color: white;
}
.login-card .card-header h2:hover a {
    color: white !important;
}
</style>
