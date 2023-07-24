<script>
import { mapActions, mapState } from 'pinia'
import cartStore from '../../stores/carts'
import numberCommaMixin from '../../mixins/numberCommaMixin'
export default {
  data () {
    return {
      user: {
        email: '',
        name: '',
        phoneNum: '',
        address: '',
        message: ''
      }
    }
  },
  mixins: [numberCommaMixin],
  methods: {
    ...mapActions(cartStore, ['getCart', 'addOrder']),
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  computed: {
    ...mapState(cartStore, ['cart', 'cartItems'])
  }
}
</script>
<template>
    <div class="" style="overflow-x: hidden;">
        <section class="py-lg-9  d-flex " style="background-image: url('https://images.unsplash.com/photo-1678465952838-c9d7f5daaa65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80'); background-repeat: no-repeat; background-position: center center; background-size: cover; height: 50vh;">
            <div class="checkoutMask mx-auto mt-4">
                <div class="container">
                <ul class="list-unstyled d-lg-flex  fs-5 align-items-center">
                    <li class=" text-center" style="flex: 1;">
                        <i class="bi bi-check-circle-fill text-blue  fs-2"></i>
                        <p>
                            <span class="fw-bold ">確認購物車品項</span>
                        </p>
                    </li>
                    <li class="bg-blue d-none d-lg-block " style="width: 200px; height: 3px; flex: 2;"></li>
                    <li class="bg-blue d-lg-none my-2" style="width: 3px; height: 40px;  margin: 0 auto;"></li>

                    <li class=" text-center position-relative" style="flex: 1;">
                        <i class="bi bi-2-circle-fill text-blue fs-2 rounded-circle" style="padding: 3px 5px; border: 2px dotted #4572c2;"></i>
                        <p class="">
                            <span class="text-blue fw-bold ">填寫訂單資訊</span>
                        </p>
                    </li>
                    <li class="d-none d-lg-block" style="width: 200px; height: 3px; flex: 2; border-top: 3px dashed #6c757d;"></li>
                    <li class="d-lg-none my-4" style="width: 40px; height: 3px; margin: 0 auto; transform: rotate(90deg); border-top: 3px dashed #6c757d;"></li>

                    <li class=" text-center" style="flex: 1;">
                        <i class="bi bi-3-circle fs-2 text-secondary"></i>
                        <p>
                            <span class="text-secondary fw-bold">成功下訂</span>
                        </p>
                    </li>
                </ul>
            </div>
            </div>
        </section>

        <section class="container my-5">
        <div class="row row-cols-1 row-cols-lg-2 g-5">
            <div class="col">
                <h4 class="text-center fw-bold mb-4 bg-lightBlue py-2">商品確認</h4>
                <div class="row">
                    <div class="col-12" v-for="(item, index) in cartItems" :key="index + 756345">
                        <div class="card mb-3" style="border: none !important;">
                            <div class="row g-0">
                            <div class="col-4">
                                <img :src="item.product.imgUrl" class="img-fluid  w-100" style="object-fit: cover; height: 130px;">
                            </div>
                            <div class="col-8">
                                <div class="card-body d-flex flex-column h-100">
                                    <h5 class="card-title d-flex mb-auto subTitle">{{ item.product.title }}
                                        <span class="ms-auto">x {{ numberComma(item.qty) }}</span>
                                    </h5>
                                    <div class="card-text d-flex justify-content-end ">
                                        <del class="me-2 text-muted mt-1" style="font-size: 14px;" :class="{'d-none': !item.product.isCheaper}">NT$ {{ numberComma(item.product.originalPrice) }}</del>
                                        <span class=" mt-1"> <span :class="{'text-danger':item.product.isCheaper, 'fw-bold':item.product.isCheaper}">NT$ {{numberComma(item.product.price)}}</span> / {{ item.product.num }}{{ item.product.unit }}</span>
                                    </div>
                                    <!-- 非組合包 -->
                                    <p class="mb-0 text-danger text-end fw-bold" v-if="item.product.category !== '組合包'">小計：NT$ {{ numberComma(item.product.price * item.qty) }} / {{ numberComma(item.product.num * item.qty) }}{{ item.product.unit }}</p>
                                    <!-- 組合包 -->
                                    <p class="mb-0 text-danger text-end fw-bold" v-if="item.product.category === '組合包'">小計：NT$ {{ numberComma(item.product.price * item.qty) }} / {{ numberComma(item.qty) }}組</p>
                                </div>
                            </div>
                            </div>
                        </div>
                        <hr>
                    </div>
                    <div class="col-12">
                        <div class="card "  style="border: none !important;">
                            <div class="card-body">
                                <table class="table table-borderless">
                                    <thead>
                                    <tr>
                                        <th class="fw-normal">商品總金額</th>
                                        <th class="text-end fw-normal">NT$ {{ numberComma(cart.total) }}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>運費<span v-if="cart.total >= 1000">(滿千元免運)</span></td>
                                        <td class="text-end">
                                            NT$ {{ cart.total >= 1000 ? 0 : cart.deliveryCharge }}
                                        </td>
                                    </tr>
                                    <tr v-if="cart.total + cart.deliveryCharge !== cart.finalTotal && cart.coupon">
                                        <td>優惠券折扣</td>
                                        <td class="text-end">- NT$ {{ numberComma(Math.ceil(cart.total * (cart.coupon.discount / 100))) }}</td>
                                    </tr>
                                    <tr class="border-top bg-lightBlue">
                                        <td class="fw-bold text-danger">總計金額</td>
                                        <td class="text-end fw-bold text-danger">
                                            <span v-if="cart.total < 1000">NT$ {{ numberComma(cart.finalTotal) }}</span>
                                            <span v-else-if="cart.total >= 1000">NT$ {{ numberComma(cart.finalTotal - cart.deliveryCharge) }}</span>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <RouterLink to="/products" class="rounded-0 hvr-sweep-to-left btn mb-4 ms-3 text-blue border-blue"><i class="bi bi-arrow-left"></i> 繼續選購</RouterLink>
                    </div>
                </div>
            </div>
            <div class="col">
                <h4 class="text-center fw-bold mb-4 bg-cyan py-2">填寫收件人資訊</h4>
                <VForm ref="form" class="" v-slot="{ errors }" @submit="()=>addOrder(user.email, user.name, user.phoneNum, user.address, user.message)">
                    <div class="row gy-4 d-flex">
                        <div class="col-12 fs-5">
                            <label for="email" class="form-label text-secondary" :class="{'text-blue':user.email && !errors['信箱']}"><i class="bi bi-envelope-fill" ></i> 信箱<span class="text-danger h4 ms-2">*</span></label>
                            <VField
                                id="email"
                                name="信箱"
                                type="email"
                                class="form-control border-0 border-bottom"
                                :class="{ 'is-invalid': errors['信箱'], 'is-valid':user.email && !errors['信箱']}"
                                placeholder="請輸入您的信箱"
                                rules="email|required"
                                v-model="user.email"
                            ></VField>
                            <ErrorMessage name="信箱" class="invalid-feedback"></ErrorMessage>
                        </div>
                        <div class="col-12 fs-5">
                            <label for="name" class="form-label text-secondary" :class="{'text-blue':user.name && !errors['收件人姓名']}"><i class="bi bi-person-fill"></i> 收件人姓名<span class="text-danger h4 ms-2">*</span></label>
                            <VField
                                id="name"
                                name="收件人姓名"
                                type="name"
                                class="form-control border-0 border-bottom"
                                :class="{ 'is-invalid': errors['收件人姓名'], 'is-valid':!errors['收件人姓名'] && user.name}"
                                placeholder="請輸入您的收件人姓名"
                                rules="required"
                                v-model="user.name"
                            ></VField>
                            <ErrorMessage name="收件人姓名" class="invalid-feedback"></ErrorMessage>
                        </div>
                        <div class="col-12 fs-5">
                            <label for="phoneNum" class="form-label text-secondary" :class="{'text-blue':user.phoneNum && !errors['收件人電話']}"><i class="bi bi-telephone-fill"></i> 收件人電話<span class="text-danger h4 ms-2">*</span></label>
                            <VField
                                id="phoneNum"
                                name="收件人電話"
                                type="phoneNum"
                                class="form-control border-0 border-bottom"
                                :class="{ 'is-invalid': errors['收件人電話'], 'is-valid':!errors['收件人電話'] && user.phoneNum}"
                                placeholder="請輸入您的收件人電話"
                                :rules="isPhone"
                                v-model="user.phoneNum"
                            ></VField>
                            <ErrorMessage name="收件人電話" class="invalid-feedback"></ErrorMessage>
                        </div>
                        <div class="col-12 fs-5">
                            <label for="address" class="form-label text-secondary" :class="{'text-blue':user.address && !errors['收件人地址']}"><i class="bi bi-house-fill"></i> 收件人地址<span class="text-danger h4 ms-2">*</span></label>
                            <VField
                                id="address"
                                name="收件人地址"
                                type="address"
                                class="form-control border-0 border-bottom"
                                :class="{ 'is-invalid': errors['收件人地址'], 'is-valid':!errors['收件人地址'] && user.address}"
                                placeholder="請輸入您的收件人地址"
                                rules="required"
                                v-model="user.address"
                            ></VField>
                            <ErrorMessage name="收件人地址" class="invalid-feedback"></ErrorMessage>
                        </div>
                        <div class="col-12 fs-5 position-relative">
                            <label for="payWay" class="form-label text-blue"><i class="bi bi-wallet-fill"></i> 付款方式<span class="text-danger h4 ms-2">*</span></label>
                            <input type="text" class="form-control" id="payWay" value="貨到付款" disabled>
                            <i class="fs-4 text-success bi bi-check-lg position-absolute" style="top:40px; right: 20px"></i>
                            <p class="text-muted" style="font-size: 14px;">注意：本店一律採貨到付款的方式喔!</p>
                        </div>
                        <div class="col-12 fs-5">
                            <label for="message" class="form-label text-secondary" :class="{'text-blue':user.message}"><i class="bi bi-chat-left-text-fill"></i> 留言</label>
                            <span class="text-muted ms-2" style="font-size: 14px;">(可不填寫)</span>
                            <textarea id="message" class="form-control" cols="30" rows="10" v-model="user.message"></textarea>
                            <p class="text-muted" style="font-size: 14px;">有任何問題或是貨品相關注意事項都歡迎與我們聯繫~</p>
                        </div>
                        <div class="col-12 mt-4" >
                            <button type="submit" class="hvr-sweep-to-right btn btn-blue fw-bold rounded-0 px-4 shadow-lg w-100" >確認建立訂單</button>
                        </div>
                    </div>
                </VForm>
            </div>
        </div>
      </section>
    </div>
</template>
<style>
.hvr-sweep-to-left::before{
  background: #4572c2;
  color: white;
}
.hvr-sweep-to-left:hover{
  color: white !important;
}
</style>
