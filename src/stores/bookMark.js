import { defineStore } from 'pinia'
import { db, auth } from '../firebase/db'
import { ref, set, remove, onValue } from 'firebase/database'
import useCartStore from './carts'
import { onAuthStateChanged } from 'firebase/auth'
import useLoadingStore from './loadingStore'
const loadingStore = useLoadingStore()
const cartStore = useCartStore()

const markStore = defineStore('bookmark', {
  state: () => {
    return {
      recipeBookmarks: [],
      productBookmarks: [],
      uid: '',
      user: {},
      // 單個
      recipeBookmark: {},
      productBookmark: {}
    }
  },
  actions: {
    // uid 如果其他地方取得書籤也都ok 就不必再有這個參數了
    addBookmark (bookmark, item) {
      if (!this.uid) {
        cartStore.toastMessage('登入才可使用收藏功能', 'error')
        return
      }
      const reference = ref(db, `${bookmark}/${this.uid}/${item.id}`)
      set(reference, item)
      cartStore.toastMessage('收藏成功')
    },
    deleteBookmark (bookmark, itemId) {
      remove(ref(db, `${bookmark}/${this.uid}/${itemId}`))
      cartStore.toastMessage('已刪除收藏')
    },
    getBookmarks (dataName) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, `${dataName}/${this.uid}`)
          onValue(dataRef, snapshot => {
            if (dataName === 'recipeBookmarks') {
              this.recipeBookmarks = snapshot.val()
            } else if (dataName === 'productBookmarks') {
              this.productBookmarks = snapshot.val()
            }
            loadingStore.endLoading()
          })
        } else {
          this.uid = null
          loadingStore.endLoading()
        }
      })
    },
    // 獲得某個書籤
    getBookmark (bookmark, id) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, 'users/' + user.uid)
          onValue(dataRef, snapshot => {
            this.user = snapshot.val() // 食譜、產品單頁調用大頭貼、暱稱
            const dataRef = ref(db, `${bookmark}/${this.uid}/${id}`)
            onValue(dataRef, snapshot => {
              if (bookmark === 'recipeBookmarks') {
                this.recipeBookmark = snapshot.val()
              } else if (bookmark === 'productBookmarks') {
                this.productBookmark = snapshot.val()
              }
              loadingStore.endLoading()
            })
          })
        } else {
          this.uid = null
          this.user = {}
          if (bookmark === 'recipeBookmarks') {
            this.recipeBookmark = null
          } else if (bookmark === 'productBookmarks') {
            this.productBookmark = null
          }
          loadingStore.endLoading()
        }
      })
    }
  }
})
export default markStore
