<template>
    <!-- ref 都要叫modal -->
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                  <span v-if="status === 'edit'">編輯抽獎內容</span>
                  <span v-else-if="status === 'new'">新增抽獎內容</span>
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="row gy-3">
                <div class="col-2">
                  <label for="serialNumber" class="form-label">編號（id）</label>
                  <input type="text" id="serialNumber" class="form-control" v-model="tempLottery.id" disabled>
                </div>
                <div class="col-4">
                  <label for="title" class="form-label">優惠券名稱</label>
                  <input type="text" id="title" class="form-control" v-model="tempLottery.name">
                </div>
                <div class="col-3">
                  <label for="date" class="form-label">起始日</label>
                  <input type="date" id="date" class="form-control" v-model="startDate">
                </div>
                <div class="col-3">
                  <label for="date" class="form-label">到期日</label>
                  <input type="date" id="date" class="form-control" v-model="dueDate">
                </div>
                <div class="col-4">
                  <label for="date" class="form-label">選擇抽獎食譜</label>
                  <select name="" id="" class="form-select" v-model="tempLottery.recipes" multiple>
                    <option :value="recipe" v-for="recipe in recipes" :key="recipe.id">
                      {{ recipe.title }}
                    </option>
                  </select>
                  <ol>
                    <li v-for="recipe in tempLottery.recipes" :key="recipe.id">
                      <h3>{{ recipe.title }}</h3>
                      <div v-for="(product, index) in recipe.relativeProducts" :key="product.id">
                        <p v-if="product.category !== '組合包'">
                          {{ index + 1 }}. {{ product.title }}
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>
                <div class="col-8" >
                  <div v-for="(rule, index) in tempLottery.rules" :key="index" class="mb-4">
                    <label for="description" class="form-label">抽獎券規則{{ index + 1 }}</label>
                    <textarea class="form-control" cols="10" rows="3" v-model="tempLottery.rules[index]"></textarea>
                    <button type="button" class="btn btn-danger mt-2" @click="()=>tempLottery.rules.splice(index, 1)">刪除規則</button>
                  </div>
                  <div class="mt-3">
                    <button type="button" class="btn btn-primary" @click="()=>tempLottery.rules.push('')">新增規則</button>
                  </div>
                </div>
                <div class="col-12">
                  <h3>獎品</h3>
                    <div class="row" v-for="(prize, index) in tempLottery.prizes" :key="index + 500">
                     <h5>獎品{{ index + 1 }}</h5>
                     <div class="col-1">
                      <label for="number" class="form-label">序號：</label>
                      <input type="text" id="number" class=" form-control" v-model.number="prize.id">
                     </div>
                     <div class="col-2">
                      <label for="name" class="form-label">名稱：</label>
                      <input type="text" id="name" class=" form-control" v-model="prize.title">
                     </div>
                     <div class="col-2">
                        <label for="price" class="form-label">價格：</label>
                       <input type="text" id="price" class=" form-control" v-model.number="prize.price">
                     </div>
                     <div class="col-7">
                      <label for="img" class="form-label">圖片網址：</label>
                       <input type="text" id="img" class=" form-control" v-model="prize.img">
                     </div>
                      <div class="d-flex mt-2">
                        <button type="button" class="ms-auto btn btn-danger" @click="()=>tempLottery.prizes.splice(index, 1)">刪除獎品</button>
                      </div>
                  </div>
                  <button type="button" class="btn btn-primary" @click="()=>tempLottery.prizes.push({ id: '', title: '', price: '', img: ''})">新增獎品</button>
                </div>
                <div class="col-12">
                  <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" :v-true="1" :v-false="0" id="isEnabled" v-model="tempLottery.isEnabled">
                  <label class="form-check-label" for="isEnabled">
                    是否啟用
                  </label>
                </div>
                </div>

              </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-primary" @click="updateLottery">
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
import cartStore from '../stores/carts'
import { mapActions } from 'pinia'
export default {
  data () {
    return {
      tempLottery: {
        rules: [],
        prizes: [],
        isEnabled: false,
        recipes: []
      },
      lotteryId: '',
      obj: {
        id: '',
        title: '',
        price: '',
        img: ''
      },
      status: 'edit',
      startDate: '',
      dueDate: ''
    }
  },
  mixins: [modalMixin],
  props: ['id', 'openModal', 'recipes'],
  methods: {
    ...mapActions(cartStore, ['toastMessage']),

    updateLottery () {
      this.tempLottery.startDate = new Date(this.startDate).getTime()
      this.tempLottery.dueDate = new Date(this.dueDate).getTime()
      if (!this.tempLottery.prizes || !this.tempLottery.rules || !this.tempLottery.recipes || !this.tempLottery.startDate || !this.tempLottery.dueDate || !this.tempLottery.name) {
        this.toastMessage('資料沒寫完', 'error')
        return
      }
      if (this.tempLottery.recipes.length !== 3) {
        this.toastMessage('食譜必須要選3個', 'error')
        return
      }
      if (this.status === 'edit') {
        update(ref(db), {
          [`lotteries/${this.lotteryId}/`]: {
            startDate: this.tempLottery.startDate,
            dueDate: this.tempLottery.dueDate,
            isEnabled: this.tempLottery.isEnabled,
            prizes: this.tempLottery.prizes,
            rules: this.tempLottery.rules,
            name: this.tempLottery.name,
            recipes: this.tempLottery.recipes
          }
        })
        this.toastMessage('更改成功')
      } else if (this.status === 'new') {
        const reference = ref(db, 'lotteries/')
        const newUserRef = push(reference)
        // 預設 false
        if (!this.tempLottery.isEnabled) {
          this.tempLottery.isEnabled = false
        }
        set(newUserRef, {
          startDate: this.tempLottery.startDate,
          dueDate: this.tempLottery.dueDate,
          isEnabled: this.tempLottery.isEnabled,
          prizes: this.tempLottery.prizes,
          rules: this.tempLottery.rules,
          name: this.tempLottery.name,
          recipes: this.tempLottery.recipes
        })
        this.toastMessage('新增成功')
      }
      this.hide()
    }
  },
  mounted () {
  },
  watch: {
    id () {
      if (this.id !== 'new' && this.id !== '') {
        const dataRef = ref(db, `lotteries/${this.id}`)
        onValue(dataRef, snapshot => {
          this.tempLottery = snapshot.val()
          this.tempLottery.id = this.id
          if (!this.tempLottery) {
            this.hide()
            return
          }
          this.dueDate = new Date(this.tempLottery.dueDate).toISOString().split('T')[0]
          this.startDate = new Date(this.tempLottery.startDate).toISOString().split('T')[0]
          this.show()
          this.status = 'edit'
          this.lotteryId = this.id
          this.openModal('')
        })
      } else if (this.id === 'new') {
        this.tempLottery = {
          rules: [],
          prizes: [],
          isEnabled: false,
          recipes: []
        }
        this.show()
        this.status = 'new'
        this.openModal('')
      }
    }
  }
}
</script>
