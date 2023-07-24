<template>
  <!--  background-size: 130%; 手機板 要變成 cover！！ -->
      <main class="py-7 loginBg"  style="background-image: url('https://images.unsplash.com/photo-1681923665434-b1ae711f3918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'); background-position: right; background-repeat: no-repeat; background-attachment: fixed;">
            <div class="container">
              <ul class="list-unstyled d-flex mt-4">
                  <li class="me-2">
                    <RouterLink to="/home" class="link-lightBlue">首頁</RouterLink>
                  </li>
                  <li class="text-white">
                    / <span  class="me-2">登入</span>
                  </li>
                </ul>
                <!-- 登入註冊 切換 用顏色滑過去 也可以只要是同個頁面 但註冊按鈕變化要另想辦法 TT -->
                <div class="row">
                    <div class="col d-none d-lg-block" style="margin: auto">
                      <h2 class="text-white  text-center h1 fw-bold ">
                          您在找的
                          <span class="text-blue"> 食譜材料 </span>
                          都在這裡
                      </h2>
                    </div>
                    <div class="col-lg-6">
                        <div class="login-card card h-100 border border-2 border-white" style="border-radius: 20px; padding: 0 !important; background-color: transparent !important; backdrop-filter: blur(20px); background-color: rgba(255, 255, 255, .5);">
                          <div class="card-body border-0 p-0">
                              <div class="card-header bg-white py-0 border-0"  style="border-radius: 15px 15px 0px 0px;">
                                  <div class="row " style="margin: 0 -18px;">
                                        <h2 class="h5 col mb-0 text-center py-3 bg-blue text-decoration-none fw-bold text-white border-start border-white" style="padding-bottom: 10px; border-radius: 20px 0 0 0;">
                                          登入
                                        </h2>
                                        <h2 class="blueBottomLine h5 col mb-0 text-center py-3 position-relative " style="padding-bottom: 10px; border-radius: 0 20px 0 0;">
                                          <RouterLink to="/signup" class="link-dark stretched-link text-decoration-none fw-bold link-blue ">註冊</RouterLink>
                                        </h2>
                                    </div>
                              </div>
                              <h1 class="text-blue text-center h3 mt-4">
                                  歡迎來到
                                  <div class="d-flex justify-content-center align-items-center mt-2">
                                      <img src="../../assets/images/loadingLogo.png" style="height: 60px;" class="logo me-1" alt="">
                                      <div>
                                        <p class="text-darkBrown mb-0 text-start"  style="font-size: 24px;">甜點食譜一鍵購</p>
                                        <p class="fw-light mb-0 text-start" style="font-family: 'Rajdhani', sans-serif; color: #5a5ad0; font-size: 18px; margin-top: -6px;">Easy Buy Easy Make</p>
                                      </div>
                                  </div>
                              </h1>
                              <VForm ref="form" class="mx-5 card-body mt-3" v-slot="{ errors }"  @submit="login">
                                  <div class="row gy-5 d-flex">
                                      <div class="col-12 fs-5">
                                          <label for="email" class="form-label text-secondary" :class="{'text-blue':user.email && !errors['信箱']}"><i class="bi bi-envelope-fill" ></i> 信箱</label>
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
                                          <label for="password" class="form-label text-secondary" :class="{'text-blue':user.password && !errors['密碼']}"><i class="bi bi-lock-fill" ></i> 密碼</label>
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
                                          <button type="submit" class="btn btn-blue w-100">登入</button>
                                      </div>
                                  </div>
                              </VForm>
                          </div>
                          <!-- 要循環只能 3 個 -->
                          <div class="card-footer border-0 mb-4" style="border-radius: 20px; height: 90px; background-color:transparent;">
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
                                    <img src="../../assets/images/cake17.png" style="width: 50px; height: 50px" class="mx-auto">
                                    <i class="bi bi-dot text-blue fs-1"></i>
                                </swiper-slide>
                                <swiper-slide class="d-flex align-items-center">
                                    <img src="../../assets/images/dessert22.png" style="width: 50px; height: 50px" class="mx-auto">
                                    <i class="bi bi-dot text-blue fs-1"></i>
                                </swiper-slide>
                                <swiper-slide class="d-flex align-items-center">
                                    <img class="mx-auto" src="../../assets/images/cottonCandy16.png" style="width: 50px; height: 50px">
                                    <i class="bi bi-dot text-blue fs-1"></i>
                                </swiper-slide>
                                <swiper-slide class="d-flex align-items-center">
                                    <img class="mx-auto" src="../../assets/images/dessert21.png" style="width: 50px; height: 50px">
                                    <i class="bi bi-dot text-blue fs-1"></i>
                                </swiper-slide>
                                <swiper-slide class="d-flex align-items-center">
                                    <img class="mx-auto" src="../../assets/images/cookie20.png" style="width: 50px; height: 50px">
                                    <i class="bi bi-dot text-blue fs-1"></i>
                                </swiper-slide>
                                <swiper-slide class="d-flex align-items-center">
                                    <img class="mx-auto" src="../../assets/images/dessert22.png" style="width: 50px; height: 50px">
                                    <i class="bi bi-dot text-blue fs-1"></i>
                                </swiper-slide>
                                <swiper-slide class="d-flex align-items-center">
                                    <img class="mx-auto" src="../../assets/images/dessert13.png" style="width: 50px; height: 50px">
                                    <i class="bi bi-dot text-blue fs-1"></i>
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
      },
      activePage: '登入'
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
    window.scrollTo(0, 0)
  }
}
</script>
<style>
.blueBottomLine{
  width: 0px;
  border-bottom: 2px solid transparent;
  transition: all .4s ease-in-out;
}
.blueBottomLine:hover{
  width: 100%;
  border-bottom: 2px solid #4572c2;
}

</style>
