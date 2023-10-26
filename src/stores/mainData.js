import { defineStore } from 'pinia'
import { db } from '../firebase/db'
import { ref, onValue } from 'firebase/database'
// 食譜、材料
const dataStore = defineStore('mainData', {
  state: () => {
    return {
      thumbs: {},
      highThumbs: {}, // 3個讚以上
      rates: {},
      highRates: {} // 4 星以上
    }
  },
  actions: {
    // 直接在這用 async 做非同步？
    // 要包含讚、食譜本人
    getRecipes () {
      return new Promise((resolve, reject) => {
        const dataRef = ref(db, 'recipes/')
        onValue(dataRef, snapshot => {
          const recipes = snapshot.val()
          for (const id in recipes) {
            recipes[id].id = id
          }
          resolve(recipes)
        })
      })
    },
    // 要包含評價、材料本人
    getProducts () {
      return new Promise((resolve, reject) => {
        const dataRef = ref(db, 'products/')
        onValue(dataRef, snapshot => {
          const products = snapshot.val()
          for (const id in products) {
            products[id].id = id
          }
          resolve(products)
        })
      })
    },
    getThumbs () {
      const dataRef = ref(db, 'recipeThumbs/')
      onValue(dataRef, snapshot => {
        const thumbs = snapshot.val()
        this.thumbs = thumbs
        Object.entries(this.thumbs).forEach(item => {
          if (item[1].thumbs > 2) {
            this.highThumbs[item[0]] = item[1].thumbs
          }
        })
      })
    },
    getRates () {
      const dataRef = ref(db, 'productRates/')
      onValue(dataRef, snapshot => {
        const rates = snapshot.val()
        const obj = {}
        // 整理評價
        Object.values(rates).forEach(item => {
          if (!obj[item.productId]) {
            obj[item.productId] = {
              score: item.score,
              ratePeople: 1,
              averageRate: item.score
            }
          } else if (obj[item.productId]) {
            obj[item.productId].score += item.score
            obj[item.productId].ratePeople += 1
            obj[item.productId].averageRate = Number((obj[item.productId].score / obj[item.productId].ratePeople).toFixed(1))
          }
        })
        this.rates = obj

        // 4星以上
        this.highRates = {}
        Object.keys(this.rates).forEach(key => {
          if (this.rates[key].averageRate >= 4) {
            this.highRates[key] = this.rates[key]
          }
        })

        // products.forEach((product, index) => {
        //   Object.values(rates).forEach(item => {
        //     if (product.id === item.productId && !products[index].scores) {
        //       products[index].scores = item.score
        //       products[index].ratePeople = 1
        //       products[index].averageRate = Number((products[index].scores / products[index].ratePeople).toFixed(1))
        //     } else if (product.id === item.productId && products[index].scores) {
        //       products[index].scores += item.score
        //       products[index].ratePeople += 1
        //       products[index].averageRate = Number((products[index].scores / products[index].ratePeople).toFixed(1))
        //     }
        //   })
        // })
        // products.forEach((product, index) => {
        //   if (!product.averageRate) {
        //     products[index].scores = 0
        //     products[index].ratePeople = 0
        //     products[index].averageRate = 0
        //   }
        // })
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
