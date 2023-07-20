<template>
    <!-- ref 都要叫modal -->
    <div class="modal fade" ref="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
            <div class="modal-header bg-dark">
                <h5 class="modal-title text-white" id="exampleModalLabel">
                  <span>編輯訂單內容</span>
                </h5>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-4">
                      <div class="row gy-3">
                        <div class="col-12">
                          <p class="mb-0">編號（id）：{{ tempOrder.id }}</p>
                        </div>
                        <div class="col-12">
                          <h3>訂購人資訊</h3>
                          <table class="table table-borderless text-blue">
                            <thead>
                            <tr>
                                <th class="fw-normal"><i class="bi bi-envelope-fill" ></i> 信箱</th>
                                <th class="fw-normal">{{ tempOrder.email }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><i class="bi bi-person-fill"></i> 收件人姓名</td>
                                <td>{{ tempOrder.name }}</td>
                            </tr>
                            <tr>
                                <td><i class="bi bi-telephone-fill"></i> 收件人電話</td>
                                <td>{{ tempOrder.phoneNum }}</td>
                            </tr>
                            <tr>
                                <td><i class="bi bi-house-fill"></i> 收件人地址</td>
                                <td>{{ tempOrder.address }}</td>
                            </tr>
                            <tr>
                                <td><i class="bi bi-wallet-fill"></i> 付款方式</td>
                                <td>貨到付款</td>
                            </tr>
                            <tr>
                                <td><i class="bi bi-chat-left-text-fill"></i> 留言</td>
                                <td>{{ tempOrder.message }}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div class="col-8">
                      <div class="row">
                        <div class="col-12">
                          <h3>訂單資訊</h3>
                          <table class="table table-borderless">
                            <thead>
                            <tr>
                                <th class="fw-normal">訂單建立時間 </th>
                                <th class="fw-normal">{{ new Date(tempOrder.creatAt).toLocaleDateString() }}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>運送狀態</td>
                                <td>
                                  <select name="" id="" class="form-select" v-model="tempOrder.deliveryStatus">
                                    <option value="待出貨">待出貨</option>
                                    <option value="運送中">運送中</option>
                                    <option value="待取貨">待取貨</option>
                                    <option value="訂單完成">訂單完成</option>
                                  </select>
                                </td>
                            </tr>
                            <tr>
                                <td>付款金額</td>
                                <td v-if="tempOrder.cart">NT$ {{tempOrder.cart.finalTotal}}</td>
                            </tr>
                            <tr>
                                <td>付款狀態</td>
                                <td>
                                  <div class="form-check">
                                    <input class="form-check-input" type="checkbox" id="paymentStatus" v-model="tempOrder.paymentStatus">
                                    <label class="form-check-label" for="paymentStatus">
                                      是否付款
                                    </label>
                                  </div>
                                </td>
                            </tr>
                            <tr>
                                <td>付款時間</td>
                                <td>{{ tempOrder.payDate ? new Date(tempOrder.payDate).toLocaleDateString() : '無' }}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="col-12">
                          <h3>選購商品</h3>
                          <table class="table table-borderless text-blue">
                            <tbody v-if="tempOrder.cart">
                              <tr v-for="item in tempOrder.cart.items" :key="item + 986">
                                  <td>{{ item.product.title }}</td>
                                  <td>NT$ {{ item.product.price }}</td>
                                  <td>{{ item.qty }} 份</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
                <button type="button" class="btn btn-primary" @click="updateOrder">
                  <span>確認編輯</span>
                </button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import modalMixin from '../mixins/modalMixin'
import { db } from '../firebase/db'
import { ref, onValue, update } from 'firebase/database'
import cartStore from '../stores/carts'
import { mapActions } from 'pinia'

export default {
  data () {
    return {
      tempOrder: {},
      orderId: '',
      customerId: ''
    }
  },
  mixins: [modalMixin],
  props: ['id', 'uid', 'openModal'],
  methods: {
    ...mapActions(cartStore, ['toastMessage']),

    // 必須是 orders - 亂數id - 內容包含使用者 uid 才可以
    updateOrder () {
      update(ref(db), {
        [`orders/${this.customerId}/${this.orderId}/deliveryStatus/`]: this.tempOrder.deliveryStatus,
        [`orders/${this.customerId}/${this.orderId}/paymentStatus/`]: this.tempOrder.paymentStatus,
        [`orders/${this.customerId}/${this.orderId}/payDate/`]: new Date().getTime()
      })
      this.toastMessage('更改成功')
      this.hide()
    }
  },
  mounted () {
  },
  watch: {
    id () {
      if (this.id) {
        const dataRef = ref(db, `orders/${this.uid}/${this.id}`)
        onValue(dataRef, snapshot => {
          this.tempOrder = snapshot.val()
          this.tempOrder.id = this.id
          if (!this.tempOrder) {
            this.hide()
            return
          }
          console.log(this.tempOrder, '訂單')
          this.show()
          this.orderId = this.id
          this.customerId = this.uid
          this.openModal('', '')
        })
      }
    }
  }
}
</script>
