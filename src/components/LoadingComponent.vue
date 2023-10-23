<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'
export default {
  data () {
    return {
      isLoading: false
    }
  },
  components: {
    Loading
  }
}
</script>
<template>
    <loading v-model:active="isLoading"
              :lock-scroll="true">
            <div class="d-flex flex-column align-items-center py-96">
            <img src="../../assets/images/loadingLogo.png" class="loading-logo mb-3" alt="logo" >
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
</template>
