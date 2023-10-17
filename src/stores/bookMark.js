import { defineStore } from 'pinia'
// auth
import { db, auth } from '../firebase/db'
// onValue
import { ref, set, remove, onValue } from 'firebase/database'
import useCartStore from './carts'
// onAuthStateChanged
import { onAuthStateChanged } from 'firebase/auth'

const cartStore = useCartStore()

const markStore = defineStore('bookmark', {
  state: () => {
    return {
      recipeBookMarks: [],
      productBookmarks: [],
      uid: ''
    }
  },
  actions: {
    // uid 如果其他地方取得書籤也都ok 就不必再有這個參數了
    addBookmark (bookMark, item, uid) {
      if (!uid) {
        cartStore.toastMessage('登入才可使用收藏功能', 'error')
        return
      }
      const reference = ref(db, `${bookMark}/${uid}/${item.id}`)
      set(reference, item)
      cartStore.toastMessage('收藏成功')
    },
    deleteBookmark (bookMark, itemId, uid) {
      remove(ref(db, `${bookMark}/${uid}/${itemId}`))
      cartStore.toastMessage('已刪除收藏')
    },
    // recipeBookmarks productBookmarks
    getBookmarks (dataName) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.uid = user.uid
          const dataRef = ref(db, `${dataName}/${this.uid}`)
          onValue(dataRef, snapshot => {
            if (dataName === 'recipeBookmarks' && snapshot.val()) {
              this.recipeBookMarks = snapshot.val()
              this.recipeBookMarks = Object.keys(this.recipeBookMarks)
            } else if (dataName === 'productBookmarks' && snapshot.val()) {
              this.productBookmarks = snapshot.val()
              this.productBookmarks = Object.keys(this.productBookmarks)
            } else if (dataName === 'recipeBookmarks' && !snapshot.val()) {
              this.recipeBookMarks = snapshot.val()
            } else if (dataName === 'productBookmarks' && !snapshot.val()) {
              this.productBookmarks = snapshot.val()
            }
          })
        } else {
          this.uid = null
        }
      })
    }
    // getBookmarks (dataName) {
    //   return new Promise((resolve, reject) => {
    //     onAuthStateChanged(auth, (user) => {
    //       if (user) {
    //         this.uid = user.uid
    //         const dataRef = ref(db, `${dataName}/${this.uid}`)
    //         onValue(dataRef, snapshot => {
    //           resolve(snapshot.val())
    //         })
    //       } else {
    //         this.uid = null
    //       }
    //     })
    //   })
    // }
  }
})
export default markStore
