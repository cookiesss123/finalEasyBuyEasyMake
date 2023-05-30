<script>
import OrderModal from '@/components/OrderModal.vue'
import DeleteOrderModal from '@/components/DeleteOrderModal.vue'
import { db } from '../../firebase/db'
import { ref, onValue, update } from 'firebase/database'
export default {
  components: {
    OrderModal,
    DeleteOrderModal
  },
  data () {
    return {
      orders: [],
      orderId: '',
      uid: '',
      orderDeleteId: ''
    }
  },
  methods: {
    getOrders () {
      // 1. const dataRef = ref(db, 'users/') 取得 users 項下所有資料
      // 2. 取得 user s的特定子分支資料

      const dataRef = ref(db, 'orders/')
      onValue(dataRef, snapshot => {
        let orders = snapshot.val()

        // id 陣列
        let idArr = []
        idArr = Object.values(orders).map(order => {
          return Object.keys(order)
        })
        idArr = idArr.flat()
        // 把物件轉成陣列 並填入id
        orders = Object.values(orders).map((order, index) => {
          return Object.values(order).map((item) => {
            item.uid = Object.keys(orders)[index]
            return item
          })
        })
        orders = orders.flat()
        this.orders = orders.map((order, index) => {
          order.id = idArr[index]
          return order
        })
        console.log(orders, '最終訂單')
      })
    },
    openModal (uid, id) {
      this.uid = uid
      this.orderId = id
    },
    openDeleteModal (uid, id) {
      this.uid = uid
      this.orderDeleteId = id
    },
    // 如果切換到取消不能是訂單完成!!!!
    updatePaymentStatus (uid, id, orderStatus) {
      if (orderStatus) {
        update(ref(db), {
          [`orders/${uid}/${id}/paymentStatus/`]: orderStatus,
          [`orders/${uid}/${id}/deliveryStatus/`]: '訂單完成',
          [`orders/${uid}/${id}/payDate/`]: new Date().getTime()
        })
      } else if (!orderStatus) {
        update(ref(db), {
          [`orders/${uid}/${id}/paymentStatus/`]: orderStatus,
          [`orders/${uid}/${id}/deliveryStatus/`]: '待取貨',
          [`orders/${uid}/${id}/payDate/`]: ''
        })
      }
    }
  },
  mounted () {
    this.getOrders()
  }
}
</script>

<template>
    <div class="container">
         <table class="table text-center mt-4" style="vertical-align: middle;">
             <thead>
                <tr>
                    <th>訂單編號</th>
                    <th>購買時間</th>
                    <th>收貨人</th>
                    <th>信箱</th>
                    <th>購買產品</th>
                    <th>應付金額</th>
                    <th>訂單狀態</th>
                    <th>是否付款</th>
                    <th>編輯</th>
                </tr>
             </thead>
             <tbody>
               <tr v-for="order in orders" :key="order.id + 34564">
                <td>{{ order.id }}</td>
                <td>{{ new Date(order.creatAt).toLocaleDateString() }}</td>
                <td>{{ order.name }}</td>
                <td>{{ order.email }}</td>
                <td>
                  <div style="overflow: hidden; text-overflow: ellipsis; max-height: 100px;">
                    <p v-for="item in order.cart.items" :key="item + 366">
                      {{ item.product.title }} x {{ item.qty }}
                    </p>
                  </div>
                </td>
                <td>{{ order.cart.finalTotal }}</td>
                <td>{{ order.deliveryStatus }}</td>
                <td>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="pay" v-model="order.paymentStatus" @change="()=>updatePaymentStatus(order.uid ,order.id, order.paymentStatus)">
                    <label class="form-check-label" for="pay">{{ order.paymentStatus ? '已付款' : '未付款' }}</label>
                  </div>
                </td>
                <td>
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-primary" @click="openModal(order.uid ,order.id)">編輯</button>
                        <button type="button" class="btn btn-sm btn-outline-danger" @click="openDeleteModal(order.uid, order.id)">刪除</button>
                    </div>
                </td>
               </tr>
             </tbody>
         </table>
         <OrderModal ref="orderModal" :id="orderId" :uid="uid" :open-modal="openModal"></OrderModal>
         <DeleteOrderModal ref="deleteOrderModal" :id="orderDeleteId" :uid="uid" :open-delete-modal="openDeleteModal"></DeleteOrderModal>
     </div>
 </template>
