<template>
      <main class="mt-6 d-flex align-items-center bg-lightYellow">
            <div class="container my-7">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                      <li class="breadcrumb-item fs-5">
                        <RouterLink to="/home" class="link-redBrown  d-none d-lg-block">首頁</RouterLink>
                      </li>
                      <li class="breadcrumb-item active fs-5  d-none d-lg-block" aria-current="page">登入</li>
                    </ol>
                </nav>
                <div class="row mt-3 gx-3 rounded py-3">
                    <div class="col d-none d-lg-block">
                        <div class="card h-100 border-0 bg-lightYellow mt-9" style="border-radius: 30px;">
                            <img src="../../assets/images/hero-mobile.png" class="img-fluid card-img-top " alt="" style="border-radius: 30px;">
                            <div class="card-img-overlay" style="top:450px">
                                <h2 class="text-darkBrown text-center mb-4 h1">
                                    您在找的
                                    <span class="text-brown"> 食譜材料 </span>
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
                        <div class="login-card card h-100 border " style="border-radius: 20px; padding: 0 !important;">
                            <div class="card-body p-0">
                                <div class="card-header bg-white py-0 "  style="border-radius: 20px 20px 0px 0px;">
                                    <div class="row " style="margin: 0 -18px;">
                                        <h2 class="h5 col mb-0 text-center py-3 position-relative bg-brown text-decoration-none fw-bold text-white" style="padding-bottom: 10px; border-radius: 20px 0 0 0;">
                                            登入
                                        </h2>
                                        <h2 class="h5 col mb-0 text-center py-3 position-relative" style="padding-bottom: 10px; border-radius: 0 20px 0 0;">
                                            <RouterLink to="/signup" class="link-dark stretched-link text-decoration-none fw-bold link-brown ">註冊</RouterLink>
                                        </h2>
                                    </div>
                                </div>
                                <!--  d-flex flex-column -->
                                <h1 class="text-brown text-center h3 mt-4">
                                    歡迎來到
                                    <!-- <span class="text-redBrown">甜點食譜一鍵購</span> -->
                                    <div class="d-flex mt-2">
                                        <img src="../../assets/images/logo.png" class="mx-auto" alt="" width="280">
                                    </div>
                                </h1>
                                <VForm ref="form" class="mx-5 card-body" v-slot="{ errors }"  @submit="login">
                                    <div class="row gy-4 d-flex">
                                        <div class="col-12 fs-5">
                                            <label for="email" class="form-label text-secondary" :class="{'text-brown':user.email && !errors['信箱']}"><i class="bi bi-envelope-fill" ></i> 信箱</label>
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
                                            <label for="password" class="form-label text-secondary" :class="{'text-brown':user.password && !errors['密碼']}"><i class="bi bi-lock-fill" ></i> 密碼</label>
                                            <VField
                                                id="password"
                                                name="密碼"
                                                type="password"
                                                class="form-control border-0 border-bottom"
                                                :class="{ 'is-invalid': errors['密碼'], 'is-valid':!errors['密碼'] && user.password}"
                                                placeholder="請輸入您的密碼"
                                                rules="min:6"
                                                v-model="user.password"
                                                autocomplete="current-password"
                                            ></VField>
                                            <ErrorMessage name="密碼" class="invalid-feedback"></ErrorMessage>
                                        </div>
                                        <div class="col-12 mt-9" >
                                            <button type="submit" class="btn btn-brown w-100">登入</button>
                                        </div>
                                    </div>
                                </VForm>

                            </div>
                            <div class="loginSignupImg card-footer d-flex justify-content-center bg-white border-0 py-4" style="border-radius: 30px;">
                                <img src="../../assets/images/1410887.png" alt="" class="me-4 d-none d-lg-block">
                                <img src="../../assets/images/7627774.png" alt="" class="me-4" >
                                <img src="../../assets/images/5887767.png" alt="" class="me-4" >
                                <img src="../../assets/images/8734574.png" alt="" class="me-4" >
                                <img src="../../assets/images/8346809.png" alt="" class="me-4" >
                                <img src="../../assets/images/726917.png" alt="" class="me-4" >
                                <img src="../../assets/images/2747131.png" alt="" class="me-4 d-none d-lg-block" >
                                <img src="../../assets/images/4771632.png" alt="" class="" >
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
// const { VITE_PATH } = import.meta.env
import { ref, onValue } from 'firebase/database'

export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      expired: ''
    }
  },
  components: {
    RouterLink
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
    background-color: #b15c17;
    color: white;
}
.login-card .card-header h2:hover a {
    color: white !important;
}
</style>
