<template>
   <div class="container">
        <div class="d-flex my-4">
            <button type="button" class="ms-auto btn btn-primary" @click="openModal('new')">建立新產品</button>
        </div>
        <div class="row mb-4">
          <div class="col-3">
            <label for="searchProductTitle">搜尋產品名稱</label>
            <input type="text" id="searchProductTitle" class="form-control" v-model="tempSearchTitle">
          </div>
        </div>
        <table class="table text-center" style="vertical-align: middle;">
            <thead>
                <tr>
                    <th>產品編號</th>
                    <th>分類</th>
                    <th>產品名稱</th>
                    <th>相關食譜</th>
                    <th>內容物</th>
                    <th>原價</th>
                    <th>價格</th>
                    <th>是否打折</th>
                    <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in search" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.category }}</td>
                    <td>{{ product.title }}</td>
                    <!-- 省略文字 -->
                    <td style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 400px;">
                      {{ product.relevantRecipes.toString() }}
                    </td>
                    <td>{{ product.num }} {{ product.unit }}</td>
                    <td>{{product.originalPrice }}</td>
                    <td class="text-success">{{product.price }}</td>
                    <td :class="{'text-success': product.isCheaper, 'fw-bold': product.isCheaper}">{{`${product.isCheaper ? "是" : "否"}`}}</td>
                    <!-- <td>{{`${product.isCheaper}`}}</td> -->
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-primary" @click="openModal(product.id)">編輯</button>
                            <button type="button" class="btn btn-sm btn-outline-danger" @click="openDeleteModal(product.id,product)">刪除</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- 這邊原本寫錯 getProducts 後來改好了 -->
        <ProductModal ref="productModal" :id="productId" :recipes="recipes" :open-modal="openModal" :get-products="getProducts"></ProductModal>
        <DeleteProductModal ref="deleteProductModal" :id="productDeleteId" :item="productDeleteItem" :open-delete-modal="openDeleteModal"></DeleteProductModal>
    </div>
</template>
<script>
import ProductModal from '@/components/ProductModal.vue'
import DeleteProductModal from '@/components/DeleteProductModal.vue'
import { db } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'
export default {
  components: {
    ProductModal,
    DeleteProductModal
  },
  data () {
    return {
      products: [],
      recipes: [],
      productId: '',
      productDeleteItem: {},
      productDeleteId: '',
      selectCategory: '全部',
      tempSearchTitle: ''
    }
  },
  computed: {
    search () {
      return this.products.filter(product => {
        return product.title.match(this.tempSearchTitle)
      })
    }
  },
  methods: {
    // 取得食譜資料
    getProducts () {
      const dataRef = ref(db, 'products/')
      onValue(dataRef, snapshot => {
        this.products = snapshot.val()
        // 把物件轉成陣列 並填入id
        this.products = Object.entries(this.products).map(item => {
          item[1].id = item[0]
          return item[1]
        })
        console.log(this.products, '後台產品')
      })
    },
    // 取得食譜資料
    getRecipes () {
      const dataRef = ref(db, 'recipes/')
      onValue(dataRef, snapshot => {
        this.recipes = snapshot.val()
        // 把物件轉成陣列 並填入id
        this.recipes = Object.entries(this.recipes).map(item => {
          item[1].id = item[0]
          return item[1]
        })
        console.log(this.recipes, '後台食譜')
      })
    },
    openModal (id) {
      this.productId = id
    },
    openDeleteModal (id, item) {
      this.productDeleteId = id
      this.productDeleteItem = item
    }
  },
  mounted () {
    this.getProducts()
    this.getRecipes()
    // console.log(this.$refs.deleteProductModal)
  }
}
</script>
