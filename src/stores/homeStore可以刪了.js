import { defineStore } from 'pinia'
import useDataStore from './mainData'
import useLoadingStore from './loadingStore'
import useMarkStore from './bookmark'
const dataStore = useDataStore()
const loadingStore = useLoadingStore()
const markStore = useMarkStore()

export default defineStore('homeStore', {
  state: () => {
    return {
      popularRecipes: [],
      goodProducts: [],
      recipeBookmarks: [],
      productBookmarks: []
    }
  },
  actions: {
    // async getData () {
    //   try {
    //     loadingStore.startLoading()
    //     const res = await Promise.all([dataStore.getRecipes(), dataStore.getProducts()])
    //     const [recipes, products] = res

    //     this.popularRecipes = recipes.sort((a, b) => {
    //       return b.thumbs - a.thumbs
    //     })
    //     this.popularRecipes = this.popularRecipes.slice(0, 10)

    //     this.goodProducts = products.filter(product => product.averageRate >= 4)
    //     this.goodProducts = this.goodProducts.sort((a, b) => b.averageRate - a.averageRate)

    //     // add方法裡面最後再加個get為甚麼不行? => 因為重新傳的時候沒有在裡面
    //     const res2 = await Promise.all([markStore.getBookmarks('recipeBookmarks'), markStore.getBookmarks('productBookmarks')])
    //     const [recipeBookmarks, productBookmarks] = res2
    //     this.recipeBookmarks = Object.keys(recipeBookmarks)
    //     this.productBookmarks = Object.keys(productBookmarks)
    //     loadingStore.endLoading()
    //   } catch (e) {
    //     this.recipeBookmarks = []
    //     this.productBookmarks = []
    //     loadingStore.endLoading()
    //     // throw new Error('尚未登入，無法取得書籤')
    //   }
    // }
    async getData () {
      try {
        this.startLoading()
        const res = await Promise.all([this.getRecipes(), this.getProducts()])
        const [recipes, products] = res

        this.popularRecipes = recipes.sort((a, b) => {
          return b.thumbs - a.thumbs
        })
        this.popularRecipes = this.popularRecipes.slice(0, 10)

        this.goodProducts = products.filter(product => product.averageRate >= 4)
        this.goodProducts = this.goodProducts.sort((a, b) => b.averageRate - a.averageRate)
        this.endLoading = false
      } catch (e) {
        console.log(e)
        // throw new Error(e)
      }
    }
  }

})
