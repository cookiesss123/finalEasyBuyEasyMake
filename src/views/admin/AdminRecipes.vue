<template>
    <div class="container">
        <div class="d-flex my-4">
            <button type="button" class="ms-auto btn btn-primary" @click="openModal('new')">建立新食譜</button>
        </div>
        <table class="table text-center">
            <thead>
                <tr>
                    <th>食譜編號</th>
                    <th>分類</th>
                    <th>食譜名稱</th>
                    <th>內容</th>
                    <th>成本</th>
                    <th>組合價</th>
                    <th>編輯</th>
                </tr>
            </thead>
            <tbody v-for="recipe in recipes" :key="recipe.id">
                <tr>
                    <td>{{ recipe.id }}</td>
                    <td>{{ recipe.category }}</td>
                    <td>{{ recipe.title }}</td>
                    <td>{{ recipe.content }}</td>
                    <td>{{ recipe.total }}</td>
                    <td>{{ recipe.price }}</td>
                    <td>
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-primary" @click="openModal(recipe.id)">編輯</button>
                            <button type="button" class="btn btn-sm btn-outline-danger" @click="openDeleteModal(recipe.id, recipe)">刪除</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <RecipeModal :id="recipeId" :open-modal="openModal" :products="products"></RecipeModal>
        <DeleteRecipeModal ref="deleteRecipeModal" :id="recipeDeleteId" :item="recipeDeleteItem" :open-delete-modal="openDeleteModal"></DeleteRecipeModal>
    </div>
</template>
<script>
import RecipeModal from '@/components/RecipeModal.vue'
import DeleteRecipeModal from '@/components/DeleteRecipeModal.vue'
import { db } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'
export default {
  components: {
    RecipeModal,
    DeleteRecipeModal
  },
  data () {
    return {
      recipes: [],
      products: [],
      recipeId: '',
      recipeDeleteId: '',
      recipeDeleteItem: {}
    }
  },
  methods: {
    getRecipes () {
      const dataRef = ref(db, 'recipes/')
      onValue(dataRef, snapshot => {
        this.recipes = snapshot.val()
        this.recipes = Object.entries(this.recipes).map(item => {
          item[1].id = item[0]
          return item[1]
        })
        console.log(this.recipes, '後台食譜')
      })
    },
    getProducts () {
      const dataRef = ref(db, 'products/')
      onValue(dataRef, snapshot => {
        this.products = snapshot.val()
        this.products = Object.entries(this.products).map(item => {
          item[1].id = item[0]
          return item[1]
        })
        console.log(this.products, '產品')
      })
    },
    openModal (id) {
      this.recipeId = id
    },
    openDeleteModal (id, item) {
      this.recipeDeleteId = id
      this.recipeDeleteItem = item
    }
  },
  mounted () {
    this.getRecipes()
    this.getProducts()
  }
}
</script>
