<script>
import DrawingModal from '@/components/DrawingModal.vue'
import DeleteDrawingModal from '@/components/DeleteDrawingModal.vue'
import { db } from '../../firebase/db'
import { ref, onValue } from 'firebase/database'
export default {
  components: {
    DrawingModal,
    DeleteDrawingModal
  },
  data () {
    return {
      lotteries: [],
      recipes: [],
      lotteryId: '',
      lotteryDeleteId: '',
      lotteryDeleteItem: {}
    }
  },
  methods: {
    getLotteries () {
      const dataRef = ref(db, 'lotteries/')
      onValue(dataRef, snapshot => {
        this.lotteries = snapshot.val()
        // 把物件轉成陣列 並填入id
        this.lotteries = Object.entries(this.lotteries).map(item => {
          item[1].id = item[0]
          return item[1]
        })
        console.log(this.lotteries, '後台抽獎')
      })
    },
    getRecipes () {
      const dataRef = ref(db, 'recipes/')
      onValue(dataRef, snapshot => {
        this.recipes = snapshot.val()
        this.recipes = Object.entries(this.recipes).map(item => {
          item[1].id = item[0]
          return item[1]
        })
        console.log(this.recipes, '後台食譜')
      })
    },
    openModal (id) {
      this.lotteryId = id
    },
    openDeleteModal (id, item) {
      this.lotteryDeleteId = id
      this.lotteryDeleteItem = item
    }
  },
  mounted () {
    this.getLotteries()
    this.getRecipes()
  }
}
</script>

<template>
    <div class="container">
         <div class="d-flex my-4">
             <button type="button" class="ms-auto btn btn-primary" @click="openModal('new')">建立新抽獎券</button>
         </div>
         <table class="table text-center" style="vertical-align: middle;">
             <thead>
                <tr>
                    <th>編號</th>
                    <th>名稱</th>
                    <th>規則</th>
                    <th>獎品</th>
                    <th>抽獎指定食譜</th>
                    <th>起始日</th>
                    <th>到期日</th>
                    <th>是否啟用</th>
                    <th>編輯</th>
                </tr>
             </thead>
             <tbody>
               <tr v-for="lottery in lotteries" :key="lottery.id">
                <td>{{ lottery.id }}</td>
                <td>{{ lottery.name }}</td>
                <td  style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 250px;">{{ (lottery.rules).toString() }}</td>
                <td>
                  <template v-for="prize in lottery.prizes" :key="prize.id + 4569">
                    {{ prize.title }}
                  </template>
                </td>
                <!-- 要改 -->
                <td>
                  <div v-for="recipe in lottery.recipes" :key="recipe.id">
                    {{ recipe.title }}
                  </div>
                </td>
                <td>{{ new Date(lottery.startDate).toLocaleString().split(' ')[0] }}</td>
                <td>{{ new Date(lottery.dueDate).toLocaleString().split(' ')[0] }}</td>
                <td>{{ lottery.isEnabled ? '是' : '否' }}</td>
                <td>
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-primary" @click="openModal(lottery.id)">編輯</button>
                        <button type="button" class="btn btn-sm btn-outline-danger" @click="openDeleteModal(lottery.id,lottery)">刪除</button>
                    </div>
                </td>
               </tr>
             </tbody>
         </table>
         <DrawingModal ref="productModal" :id="lotteryId" :open-modal="openModal" :recipes="recipes"></DrawingModal>
         <DeleteDrawingModal ref="deleteProductModal" :id="lotteryDeleteId" :item="lotteryDeleteItem" :open-delete-modal="openDeleteModal"></DeleteDrawingModal>
     </div>
 </template>
