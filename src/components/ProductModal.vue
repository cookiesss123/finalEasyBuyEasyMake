<template>
    <!-- ref 都要叫modal -->
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                  <span v-if="status === 'edit'">編輯產品內容</span>
                  <span v-else-if="status === 'new'">新增產品內容</span>
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-4">
                        <label for="mainPic" class="form-label">主圖網址</label>
                        <input type="text" id="mainPic" class="form-control mb-3" v-model="tempProduct.imgUrl">
                        <img :src="tempProduct.imgUrl" alt="" width="300">
                        <hr>
                        <div v-for="(img, index) in tempProduct.imgsUrl" :key="img + 3453">
                          <label for="subPic" class="form-label">副圖網址</label>
                          <input type="text" id="subPic" class="form-control mb-3" v-model="tempProduct.imgsUrl[index]">
                          <img :src="tempProduct.imgsUrl[index]" alt="" width="300">
                          <div class="d-flex">
                          <button type="button" class="ms-auto btn btn-danger" @click="() => tempProduct.imgsUrl.splice(index, 1)">刪除圖片</button>
                        </div>
                        </div>
                        <div class="d-flex mt-4" v-if="tempProduct.imgsUrl[tempProduct.imgsUrl.length - 1] !== ''">
                          <button type="button" class="ms-auto btn btn-primary" @click="() => tempProduct.imgsUrl.push('')">新增圖片</button>
                        </div>
                    </div>
                    <div class="col-8">
                      <div class="row gy-3">
                        <div class="col-2">
                          <label for="serialNumber" class="form-label">編號（id）</label>
                          <input type="text" id="serialNumber" class="form-control" v-model="tempProduct.id" disabled>
                        </div>
                        <div class="col-3">
                          <label for="category" class="form-label">產品分類</label>
                          <select name="" class="form-select" id="category" v-model="tempProduct.category">
                            <option value="單一產品">單一產品</option>
                            <option value="組合包">組合包</option>
                          </select>
                        </div>
                        <div class="col-7">
                          <label for="title" class="form-label">產品名稱</label>
                          <input type="text" id="title" class="form-control" v-model="tempProduct.title">
                        </div>
                        <div class="col-3">
                          <label for="content" class="form-label">數量</label>
                          <input type="text" id="content" class="form-control" v-model.number="tempProduct.num">
                        </div>
                        <div class="col-3">
                          <label for="content" class="form-label">單位</label>
                          <input type="text" id="content" class="form-control" v-model="tempProduct.unit">
                        </div>
                        <div class="col-3">
                          <label for="price" class="form-label">喊得很高的原價</label>
                          <input type="text" id="price" class="form-control" v-model.number="tempProduct.originalPrice">
                        </div>
                        <div class="col-3">
                          <label for="price" class="form-label">真實價格</label>
                          <input type="text" id="price" class="form-control" v-model.number="tempProduct.price">
                        </div>
                        <div class="col-12">
                          <div class="form-check">
                          <input class="form-check-input" type="checkbox" value=""  id="isCheaper" v-model="tempProduct.isCheaper">
                          <label class="form-check-label" for="isCheaper">
                            是否打折
                          </label>
                        </div>
                        </div>
                        <div class="col-12">
                          <label for="description" class="form-label">產品描述</label>
                          <textarea name="" id="description" cols="30" rows="10" class="form-control" v-model="tempProduct.description"></textarea>
                        </div>
                        <div class="col-12">
                          <label for="price" class="form-label">關聯食譜</label>
                          <select name="" id="" class="form-select" v-model="tempProduct.relevantRecipes" multiple>
                            <option v-for="recipe in recipes" :key="recipe +4534534" :value="recipe.title">
                            {{ recipe.title }}
                            </option>
                          </select>
                          {{ tempProduct.relevantRecipes }}
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-primary" @click="updateProduct">
                  <span v-if="status === 'edit'">確認編輯</span>
                  <span v-else-if="status === 'new'">確認新增</span>
                </button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import modalMixin from '../mixins/modalMixin'
import { db } from '../firebase/db'
import { ref, update, onValue, set, push } from 'firebase/database'
import { mapActions } from 'pinia'
import cartStore from '../stores/carts'
export default {
  data () {
    return {
      tempProduct: {
        relevantRecipes: [],
        imgsUrl: [],
        isCheaper: false
      },
      status: 'edit',
      productId: ''
    }
  },
  mixins: [modalMixin],
  props: ['id', 'openModal', 'recipes'],
  methods: {
    ...mapActions(cartStore, ['toastMessage']),

    updateProduct () {
      if (!this.tempProduct.category || !this.tempProduct.description || !this.tempProduct.imgUrl || !this.tempProduct.imgsUrl || !this.tempProduct.num || !this.tempProduct.title || !this.tempProduct.originalPrice || !this.tempProduct.price || !this.tempProduct.relevantRecipes || !this.tempProduct.unit) {
        this.toastMessage('資料沒寫完', 'error')
        return
      }
      if (this.status === 'edit') {
        if (!this.tempProduct.price) {
          this.toastMessage('還沒填寫組合價', 'error')
          return
        }
        update(ref(db), {
          [`products/${this.productId}/`]: {
            category: this.tempProduct.category,
            description: this.tempProduct.description,
            imgUrl: this.tempProduct.imgUrl,
            imgsUrl: this.tempProduct.imgsUrl,
            isCheaper: this.tempProduct.isCheaper,
            num: this.tempProduct.num,
            originalPrice: this.tempProduct.originalPrice,
            price: this.tempProduct.price,
            relevantRecipes: this.tempProduct.relevantRecipes,
            title: this.tempProduct.title,
            unit: this.tempProduct.unit
          }
        })
        this.toastMessage('更改成功', 'success')
      } else if (this.status === 'new') {
        const reference = ref(db, 'products/')
        const newUserRef = push(reference)

        set(newUserRef, {
          category: this.tempProduct.category,
          description: this.tempProduct.description,
          imgUrl: this.tempProduct.imgUrl,
          imgsUrl: this.tempProduct.imgsUrl,
          isCheaper: this.tempProduct.isCheaper,
          num: this.tempProduct.num,
          originalPrice: this.tempProduct.originalPrice,
          price: this.tempProduct.price,
          relevantRecipes: this.tempProduct.relevantRecipes,
          title: this.tempProduct.title,
          unit: this.tempProduct.unit
        })
        this.toastMessage('新增成功', 'success')
      }
      this.hide()
    }
  },
  watch: {
    id () {
      if (this.id !== 'new' && this.id !== '') {
        const dataRef = ref(db, `products/${this.id}`)
        onValue(dataRef, snapshot => {
          this.tempProduct = snapshot.val()
          // 防止錯誤
          if (this.id) {
            this.tempProduct.id = this.id
          }
          // 暫時讓副圖存在 ????
          if (!this.tempProduct.imgsUrl) {
            this.tempProduct.imgsUrl = []
          }
          if (!this.tempProduct.isCheaper) {
            this.tempProduct.isCheaper = false
          }
          this.show()
          this.status = 'edit'
          this.productId = this.id
          this.openModal('')
        })
      } else if (this.id === 'new') {
        this.tempProduct = {
          relevantRecipes: [],
          isCheaper: false, // 預設勾選是 false 這樣沒勾的時候才不會是空值
          imgsUrl: []
        }
        this.show()
        this.status = 'new'
        this.openModal('')
      }
    }
  }
}
</script>
