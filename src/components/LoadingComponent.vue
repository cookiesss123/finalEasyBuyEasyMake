<template>
  <!-- d-flex align-items-center -->
    <div v-if="isLoading" class="loadingBackdrop text-center d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-12">
          <img src="../assets/images/loadingLogo.png" class="loadingLogo mb-3" style="width: 150px;" alt="" >
        </div>
        <div class="col-12">
          <p class="text-center fw-bold text-purple h2">
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
      </div>
    </div>
</template>
<script>
export default {
  props: ['isLoading'],
  watch: {
    isLoading () {
      if (this.isLoading) {
        document.body.classList.add('no-scroll')
        // 首頁外的header還是可以點擊 手動改成不能點擊
        document.querySelector('.js-header').classList.add('pointer-events-none')
        document.querySelector('.js-footer').classList.add('footer-backdrop')
      } else if (!this.isLoading) {
        document.body.classList.remove('no-scroll')
        document.querySelector('.js-header').classList.remove('pointer-events-none')
        document.querySelector('.js-footer').classList.remove('footer-backdrop')
      }
    }
  }
}
</script>
<!-- <template>
  <div class="modal " ref="modal" tabindex="-1" data-bs-backdrop="false" data-bs-keyboard="false" >
    <div class="modal-dialog modal-dialog-centered">
      <div class="row text-center w-100">
      <div class="col-12">
        <img src="../assets/images/loadingLogo.png" class="loadingLogo mb-3" style="width: 150px;" alt="" >
      </div>
      <div class="col-12">
        <p class="text-center fw-bold text-secondary h2">
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
    </div>
    </div>
  </div>
</template>
<script>
import modalMixin from '../mixins/modalMixin'
export default {
  mixins: [modalMixin]
}
</script> -->
