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
    ...mapActions(cartStore, ['addOrder']),
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    }
  },
  mounted () {
    this.goToTop()
  },
  computed: {
    ...mapState(cartStore, ['cart', 'cartItems', 'goToTop'])
  }
}
</script>
<template>
    <div class="no-scroll-x">
        <section class="text-center" data-aos="fade-up">
            <div class="py-lg-200 py-96 bg-cover-center" style="background-image: url('https://images.unsplash.com/photo-1681923786169-67be8db99af6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80');"></div>
            <h2 class="text-purple mb-0 fs-lg-1 fs-5 letter-spacing-20 ps-3 fw-bold bg-secondary-light-purple-horizontal py-2">結帳</h2>
        </section>

        <section class="container my-5">
            <div class="position-relative w-100 mt-lg-5 my-5">
                <div class="line-gray border-top position-absolute border-2 z-index-n1 start-50 translate-middle-x" style="top: 25%"></div>
                <div class="line-blue-50 line-blue-50-animation border-top border-primary position-absolute border-2 z-index-n1"></div>
                <ul class="list-unstyled d-flex justify-content-between text-gray">
                    <li class="d-flex flex-column align-items-center">
                        <div class="circle bg-primary d-flex align-items-center justify-content-center mb-2 ms-n2">
                            <i class="bi bi-check-lg fs-lg-4 text-white"></i>
                        </div>
                        <p class="fs-lg-6 fs-14">確認購物車品項</p>
                    </li>
                    <li class="d-flex flex-column align-items-center">
                        <div class="circle circle-animation fs-lg-4 d-flex align-items-center justify-content-center mb-2">
                            2
                        </div>
                        <p class="text-gray-to-primary-2 fs-lg-6 fs-14">填寫訂單資訊</p>
                    </li>
                    <li class="d-flex flex-column align-items-center">
                        <div class="circle border border-gray bg-white fs-lg-4 d-flex align-items-center justify-content-center mb-2">
                            3
                        </div>
                        <p class="fs-lg-6 fs-14">成功下訂</p>
                    </li>
                </ul>
            </div>

            <div class="row row-cols-1 row-cols-lg-2 g-5">
                <div class="col d-flex flex-column">
                    <h4 class="text-center fw-bold mb-4 bg-secondary py-2">商品確認</h4>
                    <ul class="list-unstyled mb-0">
                        <li v-for="(item, index) in cartItems" :key="index + 756345">
                            <div class="card">
                                <div class="row g-0">
                                    <div class="col-4">
                                        <img :src="item.product.imgUrl" :alt="item.product.title" class="img-fluid w-100 object-fit-cover" style="height: 130px;">
                                    </div>
                                    <div class="col-8">
                                        <div class="card-body d-flex flex-column h-100 pb-0">
                                            <div class="d-flex mb-auto">
                                                <h5 class="card-title fs-lg-6 fs-14 mb-0">{{ item.product.title }}</h5>
                                                <span class="ms-auto">x {{ numberComma(item.qty) }}</span>
                                            </div>
                                            <div class="card-text text-end">
                                                <del class="me-2 text-muted fs-14" :class="{'d-none': !item.product.isCheaper}">NT$ {{ numberComma(item.product.originalPrice) }}</del>
                                                <span :class="{'text-danger':item.product.isCheaper, 'fw-bold':item.product.isCheaper}">NT$ {{numberComma(item.product.price)}}</span>
                                                <span> / {{ item.product.num }}{{ item.product.unit }}</span>
                                                <!-- 非組合包 -->
                                                <p class="mb-0 text-danger fw-bold" v-if="item.product.category !== '組合包'">小計：NT$ {{ numberComma(item.product.price * item.qty) }} / {{ numberComma(item.product.num * item.qty) }}{{ item.product.unit }}</p>
                                                <!-- 組合包 -->
                                                <p class="mb-0 text-danger fw-bold" v-if="item.product.category === '組合包'">小計：NT$ {{ numberComma(item.product.price * item.qty) }} / {{ numberComma(item.qty) }}組</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        </li>
                    </ul>
                    <table class="table table-borderless">
                        <thead>
                            <tr>
                                <th class="fw-normal">商品總金額</th>
                                <th class="text-end fw-normal">NT$ {{ numberComma(cart.total) }}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>運費<span v-if="cart.total >= 1000">（滿千元免運）</span></td>
                                <td class="text-end">
                                    NT$ {{ cart.total >= 1000 ? 0 : cart.deliveryCharge }}
                                </td>
                            </tr>
                            <tr v-if="cart.total + cart.deliveryCharge !== cart.finalTotal && cart.coupon">
                                <td>優惠券折扣</td>
                                <td class="text-end">- NT$ {{ numberComma(Math.ceil(cart.total * (cart.coupon.discount / 100))) }}</td>
                            </tr>
                            <tr class="border-top bg-secondary">
                                <td class="fw-bold text-danger">總計金額</td>
                                <td class="text-end fw-bold text-danger">
                                    <span v-if="cart.total < 1000">NT$ {{ numberComma(cart.finalTotal) }}</span>
                                    <span v-else-if="cart.total >= 1000">NT$ {{ numberComma(cart.finalTotal - cart.deliveryCharge) }}</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="mt-auto">
                        <RouterLink to="/products" class="hvr-sweep-to-left btn text-primary border-primary"><i class="bi bi-arrow-left"></i> 繼續選購</RouterLink>
                    </div>
                </div>
                <div class="col">
                    <h4 class="text-center fw-bold mb-4 bg-lightPurple py-2">填寫收件人資訊</h4>
                    <VForm ref="form" v-slot="{ errors }" @submit="()=>addOrder(user.email, user.name, user.phoneNum, user.address, user.message)">
                        <div class="row gy-4 d-flex text-gray fs-lg-5">
                            <div class="col-12">
                                <label for="email" class="form-label" :class="{'text-primary':user.email && !errors['信箱']}"><i class="bi bi-envelope-fill" ></i> 信箱<span class="text-danger fs-4 ms-2">*</span></label>
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
                            <div class="col-12 ">
                                <label for="name" class="form-label" :class="{'text-primary':user.name && !errors['收件人姓名']}"><i class="bi bi-person-fill"></i> 收件人姓名<span class="text-danger fs-4 ms-2">*</span></label>
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
                            <div class="col-12 ">
                                <label for="phoneNum" class="form-label" :class="{'text-primary':user.phoneNum && !errors['收件人電話']}"><i class="bi bi-telephone-fill"></i> 收件人電話<span class="text-danger fs-4 ms-2">*</span></label>
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
                            <div class="col-12 ">
                                <label for="address" class="form-label" :class="{'text-primary':user.address && !errors['收件人地址']}"><i class="bi bi-house-fill"></i> 收件人地址<span class="text-danger fs-4 ms-2">*</span></label>
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
                            <div class="col-12  position-relative">
                                <label for="payWay" class="form-label text-primary"><i class="bi bi-wallet-fill"></i> 付款方式<span class="text-danger fs-4 ms-2">*</span></label>
                                <input type="text" class="form-control" id="payWay" value="貨到付款" disabled>
                                <i class="fs-4 text-success bi bi-check-lg position-absolute" style="top:40px; right: 20px"></i>
                                <p class="text-muted" style="font-size: 14px;">注意：本店一律採貨到付款的方式喔!</p>
                            </div>
                            <div class="col-12 ">
                                <label for="message" class="form-label" :class="{'text-primary':user.message}"><i class="bi bi-chat-left-text-fill"></i> 留言</label>
                                <span class="text-muted ms-2" style="font-size: 14px;">(可不填寫)</span>
                                <textarea id="message" class="form-control" cols="30" rows="10" v-model="user.message"></textarea>
                                <p class="text-muted" style="font-size: 14px;">有任何問題或是貨品相關注意事項都歡迎與我們聯繫~</p>
                            </div>
                            <div class="col-12 mt-4" >
                                <button type="submit" class="hvr-sweep-to-right btn btn-primary fw-bold rounded-0 px-4 shadow-lg w-100" >確認建立訂單</button>
                            </div>
                        </div>
                    </VForm>
                </div>
            </div>
      </section>
    </div>
</template>
<style>

</style>
