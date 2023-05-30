<template>
   <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <h1 class="text-primary h5">甜點食譜一鍵購(後台)</h1>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <RouterLink to="/admin/recipes" class="nav-link">食譜</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/admin/products" class="nav-link">產品</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/admin/orders" class="nav-link">訂單</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/admin/coupons" class="nav-link">優惠券</RouterLink>
                </li>
                <li class="nav-item">
                  <RouterLink to="/admin/drawing" class="nav-link">抽獎</RouterLink>
                </li>
                <li class="nav-item">
                  <a href="#" class="nav-link" @click.prevent="logout">登出</a>
                </li>
              </ul>
            </div>
            <ul class="navbar-nav">
                <li class="nav-item">
                  <RouterLink to="/home" class="nav-link">回到前台</RouterLink>
                </li>
              </ul>
          </div>
        </nav>
        <RouterView></RouterView>
    </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapActions } from 'pinia'
import cartStore from '../stores/carts'
export default {
  data () {
    return {
    }
  },
  components: {
    RouterLink,
    RouterView
  },
  methods: {
    ...mapActions(cartStore, ['logout']),
    checkLogin () { // 確認登入
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
