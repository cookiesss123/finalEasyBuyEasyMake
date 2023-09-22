<template>
    <main class="py-64 bg-img-fixed d-flex" style="background-image: url('https://images.unsplash.com/photo-1681923665434-b1ae711f3918?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80');">
          <div class="container my-auto">
            <span class="rounded-pill bg-transGray-6 backdrop-blur-10 badge fs-6 my-4">
              <RouterLink to="/home" class="">首頁</RouterLink><span class="text-darkBrown"> / {{ activePage }}</span>
            </span>

            <div class="row">
                <div class="col-md-6 d-none d-md-block my-auto">
                  <h2 class="text-white text-shadow text-center fw-bold mb-0">
                      您在找的
                      <span class="text-primary text-shadow-white"> 食譜材料 </span><br class="d-lg-none">
                      都在這裡
                  </h2>
                </div>
                <div class="col-md-6">
                  <div class="card border border-2 border-white bg-transGray-6 rounded-20">
                      <div class="card-header row bg-white rounded-top-15 p-0 m-0 text-center border-0 position-relative">
                          <h3 class="header-active fw-bold py-3 col-6 bg-primary-purple position-absolute fs-4" :class="{'start-0': activePage === '登入', 'rounded-top-left-20':  activePage === '登入', 'start-50': activePage === '註冊','rounded-top-right-20':  activePage === '註冊'}">
                            {{ activePage }}
                          </h3>

                        <div class="col-6 m-0 px-0">
                          <h3 class="mb-0 fs-4">
                            <a href="#" @click.prevent="activePage = '登入'" class="border-bottom-blue py-3 d-inline-block w-100 text-decoration-none" >登入</a>
                          </h3>
                        </div>
                        <div class="col-6  m-0 px-0">
                          <h3 class="mb-0 fs-4">
                            <a href="#" @click.prevent="activePage = '註冊'" class="border-bottom-blue py-3 d-inline-block w-100 text-decoration-none" >註冊</a>
                          </h3>
                        </div>
                      </div>
                      <div class="card-body mt-3">
                        <h4 class="text-primary text-center fs-3">歡迎來到</h4>
                        <div class="d-flex align-items-center justify-content-center">
                          <img src="../../assets/images/loadingLogo.png" class=" me-1 mt-n1 img-lg-50-sm-30"  alt="logo">
                          <div>
                            <p class="text-darkBrown mb-0 fs-5 fs-lg-4">甜點食譜一鍵購</p>
                            <p class="fw-light mb-0 font-style-Chathura mt-n3 text-purple fs-lg-3 fs-4">Easy Buy Easy Make</p>
                          </div>
                        </div>
                          <VForm v-if="activePage === '登入'" ref="form" class="mx-lg-5 text-gray" v-slot="{ errors }"  @submit="login">
                          <div class="row gy-lg-3 gy-2">
                            <div class="col-12 fs-5">
                                <label for="email" class="form-label" :class="{'text-primary':loginUser.email && !errors['信箱']}"><i class="bi bi-envelope-fill" ></i> 信箱</label>
                                <VField
                                    id="email"
                                    name="信箱"
                                    type="email"
                                    class="form-control border-0 border-bottom"
                                    :class="{ 'is-invalid': errors['信箱'], 'is-valid':loginUser.email && !errors['信箱']}"
                                    placeholder="請輸入您的信箱"
                                    rules="email|required"
                                    v-model="loginUser.email"
                                    autocomplete="email"
                                ></VField>
                                <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
                            </div>
                            <div class="col-12 fs-5">
                                <label for="password" class="form-label" :class="{'text-primary':loginUser.password && !errors['密碼']}"><i class="bi bi-lock-fill" ></i> 密碼</label>
                                <VField
                                    id="password"
                                    name="密碼"
                                    type="password"
                                    class="form-control border-0 border-bottom"
                                    :class="{ 'is-invalid': errors['密碼'], 'is-valid':!errors['密碼'] && loginUser.password}"
                                    placeholder="請輸入您的密碼"
                                    rules="required|min:6"
                                    v-model="loginUser.password"
                                    autocomplete="current-password"
                                ></VField>
                                <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
                            </div>
                            <div class="col-12 mt-lg-230 mt-5">
                                <button type="submit" class="btn btn-gradient w-100">登入</button>
                            </div>
                          </div>
                        </VForm>
                        <VForm v-else-if="activePage === '註冊'" ref="form" class="mx-lg-5 text-gray" v-slot="{ errors }" @submit="signUp">
                          <div class="row gy-lg-3 gy-2">
                              <div class="col-12 fs-5">
                                  <label for="nickName" class="form-label" :class="{'text-primary':signupUser.nickName && !errors['暱稱']}"><i class="bi bi-person-circle"></i> 暱稱</label>
                                  <VField
                                      id="nickName"
                                      name="暱稱"
                                      type="text"
                                      class="form-control border-0 border-bottom"
                                      :class="{ 'is-invalid': errors['暱稱'], 'is-valid':signupUser.nickName && !errors['暱稱']}"
                                      placeholder="請輸入您的暱稱"
                                      rules="required|max:10"
                                      v-model="signupUser.nickName"
                                  ></VField>
                                  <ErrorMessage name="暱稱" class="invalid-feedback"></ErrorMessage>
                              </div>
                              <div class="col-12 fs-5">
                                  <label for="email" class="form-label" :class="{'text-primary':signupUser.email && !errors['信箱']}"><i class="bi bi-envelope-fill" ></i> 信箱</label>
                                  <VField
                                      id="email"
                                      name="信箱"
                                      type="email"
                                      class="form-control border-0 border-bottom"
                                      :class="{ 'is-invalid': errors['信箱'], 'is-valid':signupUser.email && !errors['信箱']}"
                                      placeholder="請輸入您的信箱"
                                      rules="email|required"
                                      v-model="signupUser.email"
                                  ></VField>
                                  <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
                              </div>
                              <div class="col-12 fs-5">
                                  <label for="password" class="form-label" :class="{'text-primary':signupUser.password && !errors['密碼']}"><i class="bi bi-unlock-fill"></i> 密碼</label>
                                  <VField
                                      id="password"
                                      name="密碼"
                                      type="password"
                                      class="form-control border-0 border-bottom"
                                      :class="{ 'is-invalid': errors['密碼'], 'is-valid':!errors['密碼'] && signupUser.password}"
                                      placeholder="請輸入密碼"
                                      rules="required|min:6"
                                      v-model="signupUser.password"
                                  ></VField>
                                  <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
                              </div>
                              <div class="col-12 fs-5">
                                  <label for="confirmPassword" class="form-label" :class="{'text-primary':signupUser.confirmPassword && !errors['確認密碼']}"><i class="bi bi-lock-fill" ></i> 確認密碼</label>
                                  <VField
                                      id="confirmPassword"
                                      name="確認密碼"
                                      type="password"
                                      class="form-control border-0 border-bottom"
                                      :class="{ 'is-invalid': errors['確認密碼'], 'is-valid':!errors['確認密碼'] && signupUser.confirmPassword}"
                                      placeholder="請再次輸入密碼"
                                      rules="required|confirmed:@密碼"
                                      v-model="signupUser.confirmPassword"
                                  ></VField>
                                  <ErrorMessage name="確認密碼" class="invalid-feedback"></ErrorMessage>
                              </div>
                              <div class="col-12 mt-5" >
                                  <button type="submit" class="btn btn-gradient w-100">註冊</button>
                              </div>
                          </div>
                        </VForm>
                      </div>
                      <div class="card-footer pt-0 bg-transparent">
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
                            <swiper-slide class="d-flex align-items-center">
                                <img src="../../assets/images/cake17.png" class="mx-auto img-lg-50-sm-30" alt="草莓捲">
                                <i class="bi bi-dot text-primary fs-1"></i>
                            </swiper-slide>
                            <swiper-slide class="d-flex align-items-center">
                                <img src="../../assets/images/dessert22.png" class="mx-auto img-lg-50-sm-30" alt="藍莓蛋糕">
                                <i class="bi bi-dot text-primary fs-1"></i>
                            </swiper-slide>
                            <swiper-slide class="d-flex align-items-center">
                                <img class="mx-auto img-lg-50-sm-30" src="../../assets/images/cottonCandy16.png" alt="棉花糖">
                                <i class="bi bi-dot text-primary fs-1"></i>
                            </swiper-slide>
                            <swiper-slide class="d-flex align-items-center">
                                <img class="mx-auto img-lg-50-sm-30" src="../../assets/images/dessert21.png" alt="奶油布丁">
                                <i class="bi bi-dot text-primary fs-1"></i>
                            </swiper-slide>
                            <swiper-slide class="d-flex align-items-center">
                                <img class="mx-auto img-lg-50-sm-30" src="../../assets/images/cookie20.png" alt="咬過一口的餅乾">
                                <i class="bi bi-dot text-primary fs-1"></i>
                            </swiper-slide>
                            <swiper-slide class="d-flex align-items-center">
                                <img class="mx-auto img-lg-50-sm-30" src="../../assets/images/cake24.png" alt="大蛋糕">
                                <i class="bi bi-dot text-primary fs-1"></i>
                            </swiper-slide>
                            <swiper-slide class="d-flex align-items-center">
                                <img class="mx-auto img-lg-50-sm-30" src="../../assets/images/dessert13.png" alt="餅乾">
                                <i class="bi bi-dot text-primary fs-1"></i>
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
import { mapActions } from 'pinia'
import cartStore from '../../stores/carts'
import { RouterLink } from 'vue-router'
import { auth, db } from '../../firebase/db'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { set, ref, onValue } from 'firebase/database'
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
      loginUser: {
        email: '',
        password: ''
      },
      signupUser: {
        nickName: '',
        email: '',
        password: '',
        confirmPassword: '',
        lotteryTicket: 1,
        headshotImg: ''
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
    ...mapActions(cartStore, ['goToTop']),
    async login () {
      const email = this.loginUser.email
      const password = this.loginUser.password
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const userDetail = userCredential.user
        this.$swal({
          icon: 'success',
          title: '登入成功',
          showConfirmButton: false,
          timer: 1500
        })

        const dataRef = ref(db, 'users/' + userDetail.uid)
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
    },
    // 註冊
    async signUp  () {
      const email = this.signupUser.email
      const password = this.signupUser.password
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const userDetail = userCredential.user
        const reference = ref(db, 'users/' + userDetail.uid)
        set(reference, {
          email,
          nickName: this.signupUser.nickName,
          lotteryTicket: this.signupUser.lotteryTicket,
          headshotImg: this.signupUser.headshotImg
        })

        this.$swal({
          icon: 'success',
          title: '註冊成功',
          showConfirmButton: false,
          timer: 1500
        })
        this.$router.push('/home')
      } catch (e) {
        console.log(e.message, '錯誤')
        this.$swal({
          icon: 'error',
          title: '此信箱已被註冊，請更換信箱',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  },
  mounted () {
    this.goToTop()
  }
}
</script>
