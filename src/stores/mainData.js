import { defineStore } from 'pinia'
import { db } from '../firebase/db'
import { ref, onValue } from 'firebase/database'
// 食譜、材料
const dataStore = defineStore('mainData', {
  state: () => {
    return {

    }
  },
  actions: {
    // 要包含讚、食譜本人
    getPopularRecipes () {
      this.isLoading = true

      const dataRef = ref(db, 'recipes/')
      onValue(dataRef, snapshot => {
        let recipes = snapshot.val()
        recipes = Object.entries(recipes).map(item => {
          item[1].id = item[0]
          return item[1]
        })
        const dataRef = ref(db, 'recipeThumbs/')
        onValue(dataRef, snapshot => {
          this.thumbs = snapshot.val()
          // 把讚數填入
          recipes.forEach((recipe, index) => {
            Object.keys(this.thumbs).forEach(thumbId => {
              if (recipe.id === thumbId) {
                recipes[index].thumbs = this.thumbs[recipe.id].thumbs
              }
            })
          })
          recipes.forEach((recipe, index) => {
            if (!recipe.thumbs) {
              recipes[index].thumbs = 0
            }
          })
          this.popularRecipes = recipes.sort((a, b) => {
            return b.thumbs - a.thumbs
          })
          this.popularRecipes = this.popularRecipes.slice(0, 10)

          this.isLoading = false
        })
      })
    },
    // 要包含評價、材料本人
    getProducts () {
      const dataRef = ref(db, 'products/')
      onValue(dataRef, snapshot => {
        this.products = snapshot.val()
        this.products = Object.entries(this.products).map(item => {
          item[1].id = item[0]
          return item[1]
        })
        const dataRef = ref(db, 'productRates/')
        onValue(dataRef, snapshot => {
          let rates = snapshot.val()
          rates = Object.values(rates).map((rate, index) => {
            rate.id = Object.keys(rates)[index]
            return rate
          })
          this.products.forEach((product, index) => {
            rates.forEach(item => {
              if (product.id === item.productId && !this.products[index].scores) {
                this.products[index].scores = item.score
                this.products[index].ratePeople = 1
                this.products[index].averageRate = Number((this.products[index].scores / this.products[index].ratePeople).toFixed(1))
              } else if (product.id === item.productId && this.products[index].scores) {
                this.products[index].scores += item.score
                this.products[index].ratePeople += 1
                this.products[index].averageRate = Number((this.products[index].scores / this.products[index].ratePeople).toFixed(1))
              }
            })
          })
          this.products.forEach((product, index) => {
            if (!product.averageRate) {
              this.products[index].scores = 0
              this.products[index].ratePeople = 0
              this.products[index].averageRate = 0
            }
          })
          this.goodProducts = this.products.filter(product => product.averageRate >= 4)
          this.goodProducts = this.goodProducts.sort((a, b) => b.averageRate - a.averageRate)
        })
      })
    }
  }
})
export default dataStore
