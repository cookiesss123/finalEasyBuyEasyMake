<template>
    <section class="text-center" data-aos="fade-up">
        <div class="py-lg-200 py-96 bg-cover-center border" :style="{'background-image': `url(${bgImg})`}">
        </div>
        <h2 class="text-purple mb-0 fs-lg-1 fs-5 letter-spacing-20 ps-1 fw-bold bg-secondary-light-purple-horizontal py-2">
            <span class="ms-3">{{ title }}</span>
        </h2>
    </section>
</template>
<script>
import { banners } from '../utils/publicData'
export default {
  data () {
    return {
      banners
    }
  },
  computed: {
    // /recipes?searchName=&category=美式甜點 有時網址不只有/recipes 會傳參
    title () {
      return banners[this.$route.fullPath.split('?')[0]].title
    },
    bgImg () {
      return banners[this.$route.fullPath.split('?')[0]].img
    }
  }
}
</script>
