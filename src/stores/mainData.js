import { defineStore } from 'pinia'
import { db } from '../firebase/db'
import { ref, onValue } from 'firebase/database'
// 食譜、材料
const dataStore = defineStore('mainData', {
  state: () => {
    return {
      // thumbs: {}
    }
  },
  actions: {
    // 直接在這用 async 做非同步？
    // 要包含讚、食譜本人
    getRecipes () {
      return new Promise((resolve, reject) => {
        const dataRef = ref(db, 'recipes/')
        onValue(dataRef, snapshot => {
          let recipes = snapshot.val()
          recipes = Object.keys(recipes).map(item => {
            recipes[item].id = item
            return recipes[item]
          })
          const dataRef = ref(db, 'recipeThumbs/')
          onValue(dataRef, snapshot => {
            const thumbs = snapshot.val()
            // 把讚數填入
            recipes.forEach((recipe, index) => {
              Object.keys(thumbs).forEach(thumbId => {
                if (recipe.id === thumbId) {
                  recipes[index].thumbs = thumbs[recipe.id].thumbs
                }
              })
            })
            recipes.forEach((recipe, index) => {
              if (!recipe.thumbs) {
                recipes[index].thumbs = 0
              }
            })
            resolve(recipes)
          })
        })
      })
    },
    // 要包含評價、材料本人
    getProducts () {
      return new Promise((resolve, reject) => {
        const dataRef = ref(db, 'products/')
        onValue(dataRef, snapshot => {
          let products = snapshot.val()
          products = Object.entries(products).map(item => {
            item[1].id = item[0]
            return item[1]
          })
          const dataRef = ref(db, 'productRates/')
          onValue(dataRef, snapshot => {
            const rates = snapshot.val()
            products.forEach((product, index) => {
              Object.values(rates).forEach(item => {
                if (product.id === item.productId && !products[index].scores) {
                  products[index].scores = item.score
                  products[index].ratePeople = 1
                  products[index].averageRate = Number((products[index].scores / products[index].ratePeople).toFixed(1))
                } else if (product.id === item.productId && products[index].scores) {
                  products[index].scores += item.score
                  products[index].ratePeople += 1
                  products[index].averageRate = Number((products[index].scores / products[index].ratePeople).toFixed(1))
                }
              })
            })
            products.forEach((product, index) => {
              if (!product.averageRate) {
                products[index].scores = 0
                products[index].ratePeople = 0
                products[index].averageRate = 0
              }
            })
            resolve(products)
          })
        })
      })
    }
  },
  getters: {
    discount () {
      return product => (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))) % 10 === 0 ? (100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))).toString().charAt(0) : 100 - ((((product.originalPrice - product.price) / product.originalPrice) * 100).toFixed(0))
    }
  }
})
export default dataStore
