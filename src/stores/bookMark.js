import { defineStore } from 'pinia'
import { db } from '../firebase/db'
import { ref, set, remove } from 'firebase/database'
import useCartStore from './carts'

const cartStore = useCartStore()

const markStore = defineStore('bookmark', {
  state: () => {
    return {
    }
  },
  actions: {
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
    }
  }
})
export default markStore
