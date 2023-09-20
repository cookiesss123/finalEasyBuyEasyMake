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
                      <div class="row">
                        <div class="col-12">
                          <label for="imgUrl" class="form-label">圖片網址</label>
                          <input type="text" id="imgUrl" class="form-control mb-3" v-model="tempRecipe.image">
                          <img :src="tempRecipe.image" alt="" width="300">
                          <hr>
                          <div v-for="(img, index) in tempRecipe.imgsUrl" :key="img + 3453">
                            <label for="subPic" class="form-label">副圖網址</label>
                            <input type="text" id="subPic" class="form-control mb-3" v-model="tempRecipe.imgsUrl[index]">
                            <img :src="tempRecipe.imgsUrl[index]" alt="" width="300">
                            <div class="d-flex">
                            <button type="button" class="ms-auto btn btn-danger" @click="() => tempRecipe.imgsUrl.splice(index, 1)">刪除圖片</button>
                          </div>
                          </div>
                          <div class="d-flex mt-4" v-if="tempRecipe.imgsUrl[tempRecipe.imgsUrl.length - 1] !== ''">
                            <button type="button" class="ms-auto btn btn-primary" @click="() => tempRecipe.imgsUrl.push('')">新增圖片</button>
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="videoUrl" class="form-label">影片網址</label>
                          <input type="text" id="videoUrl" class="form-control mb-3" v-model="tempRecipe.video">
                        </div>
                        <div class="col-12">
                          <label for="ingredients" class="form-label">材料</label>
                          <div class="input-group mb-3 " v-for="(item, index) in tempRecipe.ingredients" :key="item + 342">
                            <div class="input-group-text">{{ index + 1 }}</div>
                            <input type="text" id="ingredients" class="form-control " v-model="tempRecipe.ingredients[index].name" style="width: 150px;">
                            <input type="text" id="ingredients" class="form-control " v-model.number="tempRecipe.ingredients[index].num">
                            <input type="text" id="ingredients" class="form-control " v-model="tempRecipe.ingredients[index].unit">
                            <button type="button" class="btn btn-danger btn-sm" @click="() => tempRecipe.ingredients.splice(index ,1)">x</button>
                          </div>
                        </div>
                        <div class="d-flex" v-if="(tempRecipe.ingredients && tempRecipe.ingredients[tempRecipe.ingredients.length - 1] !== '') || !tempRecipe.ingredients">
                            <button type="button" class="ms-auto btn btn-primary" @click="() => tempRecipe.ingredients.push({name:'', num:'', unit:''})">新增材料</button>
                        </div>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="row gy-3">
                        <div class="col-4">
                          <label for="title" class="form-label">食譜編號（id）</label>
                          <input type="text" id="title" class="form-control" disabled v-model="tempRecipe.id">
                        </div>
                        <div class="col-3">
                          <label for="category" class="form-label">食譜類別</label>
                          <select name="" id="category" class="form-select" v-model="tempRecipe.category">
                            <option v-for="item in recipeType" :key="item" :value="item">
                              {{ item }}
                            </option>
                          </select>
                        </div>
                        <div class="col-5">
                          <label for="title" class="form-label">食譜名稱</label>
                          <input type="text" id="title" class="form-control" v-model="tempRecipe.title">
                        </div>
                        <div class="col-4">
                          <label for="content" class="form-label">作者</label>
                          <input type="text" id="content" class="form-control" v-model="tempRecipe.author">
                        </div>
                        <div class="col-3">
                          <label for="content" class="form-label">食譜內容</label>
                          <input type="text" id="content" class="form-control" v-model="tempRecipe.content">
                        </div>
                        <div class="col-3">
                          <label for="costs" class="form-label">成本</label>
                          <div class="d-flex align-items-center">
                            <input type="text" id="costs" class="form-control me-2" v-model="tempRecipe.total">元
                          </div>
                        </div>
                        <div class="col-2">
                          <label for="costs" class="form-label">組合價</label>
                          <div class="d-flex align-items-center">
                            <input type="text" id="costs" class="form-control me-2" v-model.number="tempRecipe.price">元
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="description" class="form-label">食譜描述</label>
                          <textarea name="" id="description" cols="30" rows="10" class="form-control" v-model="tempRecipe.description"></textarea>
                        </div>
                        <div class="col-12">
                          <label for="instructions" class="form-label">製作步驟</label>
                          <textarea name="" id="instructions" cols="30" rows="10" class="form-control" v-model="tempRecipe.instructions"></textarea>
                        </div>
                        <div class="col-12">
                          <label for="product" class="form-label text-primary">所需產品</label>
                          <ol>
                            <li v-for="(product, index) in tempRecipe.relativeProducts" :key="product.id" class="row mb-5">
                              <label :for="product + index" class="col-8 mb-0">{{ index + 1 }}. {{ product.title }} ： {{ product.num }}{{ product.unit }} / {{ product.price }} 元</label>
                            </li>
                          </ol>
                          <h5 class="text-end text-primary">
                            總計： {{ tempRecipe.total }} 元
                          </h5>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-primary" @click="updateRecipe">
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
import { ref, onValue, update, set, push } from 'firebase/database'
import { mapActions } from 'pinia'
import cartStore from '../stores/carts'

export default {
  data () {
    return {
      tempRecipe: {
        imgsUrl: []
      },
      status: 'edit',
      recipeType: [
        '法式甜點',
        '義式甜點',
        '美式甜點',
        '日式甜點',
        '台式甜點'
      ],
      total: 0,
      recipeId: ''
    }
  },
  mixins: [modalMixin],
  props: ['id', 'openModal', 'products'],
  methods: {
    ...mapActions(cartStore, ['toastMessage']),

    updateRecipe () {
      if (!this.tempRecipe.author || !this.tempRecipe.category || !this.tempRecipe.content || !this.tempRecipe.description || !this.tempRecipe.image || !this.tempRecipe.imgsUrl || !this.tempRecipe.ingredients || !this.tempRecipe.instructions || !this.tempRecipe.title || !this.tempRecipe.video) {
        this.toastMessage('資料沒寫完', 'error')
        return
      }
      if (this.status === 'edit') {
        if (!this.tempRecipe.price) {
          this.toastMessage('還沒填寫組合價', 'error')
          return
        }
        update(ref(db), {
          [`recipes/${this.recipeId}/`]: {
            author: this.tempRecipe.author,
            category: this.tempRecipe.category,
            content: this.tempRecipe.content,
            description: this.tempRecipe.description,
            image: this.tempRecipe.image,
            imgsUrl: this.tempRecipe.imgsUrl,
            ingredients: this.tempRecipe.ingredients,
            instructions: this.tempRecipe.instructions,
            price: this.tempRecipe.price,
            relativeProducts: this.tempRecipe.relativeProducts,
            title: this.tempRecipe.title,
            total: this.total,
            video: this.tempRecipe.video
          }
        })
        this.toastMessage('更改成功', 'success')
      } else if (this.status === 'new') {
        const reference = ref(db, 'recipes/')
        const newUserRef = push(reference)
        this.tempRecipe.price = 0
        this.total = 0
        this.tempRecipe.relativeProducts = []

        set(newUserRef, {
          author: this.tempRecipe.author,
          category: this.tempRecipe.category,
          content: this.tempRecipe.content,
          description: this.tempRecipe.description,
          image: this.tempRecipe.image,
          imgsUrl: this.tempRecipe.imgsUrl,
          ingredients: this.tempRecipe.ingredients,
          instructions: this.tempRecipe.instructions,
          price: this.tempRecipe.price,
          relativeProducts: this.tempRecipe.relativeProducts,
          title: this.tempRecipe.title,
          total: this.total,
          video: this.tempRecipe.video
        })
        this.toastMessage('新增成功', 'success')
      }
      this.hide()
    }
  },
  watch: {
    id () {
      if (this.id !== 'new' && this.id !== '') {
        // 取得食譜資料
        const dataRef = ref(db, `recipes/${this.id}`)
        onValue(dataRef, snapshot => {
          this.tempRecipe = snapshot.val()
          // 防止出錯
          if (this.id) {
            this.tempRecipe.id = this.id
          }

          // 如果沒有imgsUrl 就設定一個空陣列讓副圖存在
          if (!this.tempRecipe.imgsUrl) {
            this.tempRecipe.imgsUrl = []
          }
          // 暫時讓原料存在
          if (!this.tempRecipe.ingredients) {
            this.tempRecipe.ingredients = []
          }
          // 取得相關產品
          this.tempRecipe.relativeProducts = []
          this.total = 0

          // 先有這個
          this.products.forEach((product) => { // 會把所有產品跑一遍
            product.relevantRecipes.forEach(item => {
              if (item === this.tempRecipe.title && product.category === '單一產品') {
                this.tempRecipe.relativeProducts.push(product)
                this.total += product.price
              } else if (item === this.tempRecipe.title && product.category === '組合包') { // 組合包 不算入total
                this.tempRecipe.relativeProducts.push(product)
              }
            })
          })
          this.show()
          this.status = 'edit'
          this.recipeId = this.id
          this.openModal('')
        })
      } else if (this.id === 'new') {
        this.tempRecipe = {
          ingredients: [],
          imgsUrl: []
        }

        this.relativeProducts = []
        this.show()
        this.status = 'new'
        this.openModal('')
      }
    }
  }
}
</script>
