<script>
export default {
  props: ['priceOrRate', 'filterProducts', 'filterRecipes', 'filterOrders'],
  data () {
    return {
      activePage: 1,
      pageProducts: []
    }
  },
  methods: {
    renderPage (pageNumber, products) { // 渲染第幾頁
      // 分頁 都用 slice第1頁  1 ~ 12 (0,12) ;第2頁  13 ~ 24 (12, 24) ; 第3頁 25 ~ 36 (24, 36) 第四頁 37~40 (36, 40)
      let firstIndex = 0
      let lastIndex = 12
      // 訂單頁面 是 8 個一頁
      if (this.$route.fullPath === '/member') {
        lastIndex = 8
      }
      this.activePage = pageNumber
      if (pageNumber !== 1 && pageNumber !== Math.ceil(products.length / 12) && this.$route.fullPath !== '/member') {
        firstIndex = 12 * (pageNumber - 1)
        lastIndex = 12 * pageNumber
      } else if (pageNumber === Math.ceil(products.length / 12) && this.$route.fullPath !== '/member') {
        firstIndex = 12 * (pageNumber - 1)
        lastIndex = products.length
        // 訂單 8 個一頁
      } else if (pageNumber !== 1 && pageNumber !== Math.ceil(products.length / 8) && this.$route.fullPath === '/member') {
        firstIndex = 8 * (pageNumber - 1)
        lastIndex = 8 * pageNumber
      } else if (pageNumber === Math.ceil(products.length / 8) && this.$route.fullPath === '/member') {
        firstIndex = 8 * (pageNumber - 1)
        lastIndex = products.length
      }

      // 產品頁面
      this.pageProducts = products.slice(firstIndex, lastIndex)

      // 換頁不滑到最上
      if (this.$route.fullPath === '/member') {
        return
      }
      // 換頁到最上方
      window.scrollTo(0, 0)
    }
  }
}
</script>
<template>
  <div>
    <div v-if="pageProducts.length && this.$route.fullPath !== '/member'">
      <!-- 材料 -->
      <nav v-if="filterProducts && this.$route.fullPath.includes('/products')">
        <ul class="pagination d-flex justify-content-center align-items-center mt-5">
          <li v-if="activePage !== 1" class="page-item mx-1">
            <a class="page-link fs-12 fs-lg-6 border-0  rounded-circle d-flex py-2 px-12" href="#" aria-label="Previous"  @click.prevent="() => renderPage(activePage - 1, filterProducts)">
              <i class="bi bi-chevron-left mx-auto"></i>
            </a>
          </li>
          <li  class="page-item mx-1" :class="{'active': activePage === number}" v-for="number in Math.ceil(filterProducts.length / 12)" :key="number + 23423" >
            <a v-if="activePage !== number" @click.prevent="() => renderPage(number, filterProducts)" class="page-link  fs-12 fs-lg-6 border-0 rounded-circle px-lg-3 py-lg-2"  href="#">{{number}}</a>
            <span v-else-if="activePage === number" class="page-link fs-12 fs-lg-6 border-0 rounded-circle px-lg-3 py-lg-2 active pointer-events-none">{{ number }}</span>
          </li>
          <li v-if="activePage !== Math.ceil(filterProducts.length / 12)" class="page-item mx-1">
            <a @click.prevent="() => renderPage(activePage + 1, filterProducts)" class="page-link fs-12 fs-lg-6 border-0  rounded-circle d-flex py-2 px-12" href="#" aria-label="Next">
              <i class="bi bi-chevron-right mx-auto"></i>
            </a>
          </li>
        </ul>
      </nav>
      <!-- 食譜 -->
      <nav v-else-if="filterRecipes && this.$route.fullPath.includes('/recipes')">
        <ul class="pagination d-flex justify-content-center align-items-center mt-5">
          <li v-if="activePage !== 1" class="page-item mx-1">
            <a class="page-link fs-12 fs-lg-6 border-0  rounded-circle d-flex py-2 px-12" href="#" aria-label="Previous"  @click.prevent="() => renderPage(activePage - 1, filterRecipes)">
              <i class="bi bi-chevron-left mx-auto"></i>
            </a>
          </li>
          <li class="page-item mx-1" :class="{'active': activePage === number}" v-for="number in Math.ceil(filterRecipes.length / 12)" :key="number + 23423" >
            <a v-if="activePage !== number" @click.prevent="() => renderPage(number, filterRecipes)" class="page-link  fs-12 fs-lg-6 border-0 rounded-circle px-lg-3 py-lg-2"  href="#">{{number}}</a>
            <span v-else-if="activePage === number" class="page-link fs-12 fs-lg-6 border-0 rounded-circle px-lg-3 py-lg-2 active pointer-events-none">{{ number }}</span>
          </li>
          <li v-if="activePage !== Math.ceil(filterRecipes.length / 12)" class="page-item mx-1">
            <a @click.prevent="() => renderPage(activePage + 1, filterRecipes)" class="page-link py-2 px-12 fs-12 fs-lg-6 border-0  rounded-circle d-flex" href="#" aria-label="Next">
              <i class="bi bi-chevron-right mx-auto"></i>
            </a>
          </li>
        </ul>
      </nav>
    </div>
     <!-- 訂單狀況 -->
     <nav v-else-if="this.$route.fullPath === '/member' && filterOrders.length">
        <ul class="pagination d-flex justify-content-center align-items-center mb-0">
          <li v-if="activePage !== 1" class="page-item mx-1">
            <a class="page-link fs-12 fs-lg-6 border-0  rounded-circle d-flex py-2 px-12" href="#" aria-label="Previous"  @click.prevent="() => renderPage(activePage - 1, filterOrders)">
              <i class="bi bi-chevron-left mx-auto"></i>
            </a>
          </li>
          <li class="page-item mx-1" :class="{'active': activePage === number}" v-for="number in Math.ceil(filterOrders.length / 8)" :key="number + 23423" >
            <a v-if="activePage !== number" @click.prevent="() => renderPage(number, filterOrders)" class="page-link  fs-12 fs-lg-6 border-0 rounded-circle px-lg-3 py-lg-2"  href="#">{{number}}</a>
            <span v-else-if="activePage === number" class="page-link fs-12 fs-lg-6 border-0 rounded-circle px-lg-3 py-lg-2 active pointer-events-none">{{ number }}</span>
          </li>
          <li v-if="activePage !== Math.ceil(filterOrders.length / 8)" class="page-item mx-1">
            <a @click.prevent="() => renderPage(activePage + 1, filterOrders)" class="page-link fs-12 fs-lg-6 border-0  rounded-circle d-flex py-2 px-12" href="#" aria-label="Next">
              <i class="bi bi-chevron-right mx-auto"></i>
            </a>
          </li>
        </ul>
      </nav>
  </div>
</template>
