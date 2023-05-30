import { defineStore } from 'pinia'
// 環境不屬於 vue 所以不能用 this 取得 axios
import axios from 'axios'
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
// 在js檔案要引入才能用
// import router from '../router'

const { VITE_PATH } = import.meta.env

const bookMarkStore = defineStore('bookMark', {
  state: () => {
    return {
      bookMarks: []
    }
  },
  actions: {
    // 取得書籤 首頁、甜點食譜、材料頁面、書籤頁 都會有
    getBookmarks (userId, bookMarkType, category) {
      const url = `${VITE_PATH}/600/users/${userId}/${bookMarkType}?_expand=${category}`
      axios.get(url, {
        headers: {
          authorization: `Bearer ${this.token}`
        }
      })
        .then(res => {
          console.log(res.data)
          this.bookMarks = res.data
        }).catch(err => {
          console.log(err)
          console.log('得不到最愛資料')
        })
    },
    deleteBookmark (id) { // 可用600嗎?
      let url = `${VITE_PATH}/600/recipeBookmarks/${id}`
      if (this.pageStatus === 'product') {
        url = `${VITE_PATH}/600/productBookmarks/${id}`
      }
      axios.delete(url,
        {
          headers: {
            authorization: `Bearer ${this.token}`
          }
        })
        .then(res => {
          console.log(res.data)
          this.hide()
          //   重新渲染頁面
          if (this.pageStatus === 'recipe') {
            this.getBookmarks(this.userId, 'recipeBookmarks', this.pageStatus)
          } else if (this.pageStatus === 'product') {
            this.getBookmarks(this.userId, 'productBookmarks', this.pageStatus)
          }
          this.$swal({
            icon: 'success',
            title: '收藏刪除成功',
            showConfirmButton: false,
            timer: 1500
          })
        }).catch(err => {
          console.log(err)
        })
    }
  },
  // getters 概念同「computed」
  getters: {}
})

// 可以是預設匯出 也可以是具名匯出
export default bookMarkStore
