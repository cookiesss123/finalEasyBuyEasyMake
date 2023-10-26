import{f as _,m as f}from"./index-9f8e1fb0.js";import{o as y,c,a as g}from"./carts-18eb5781.js";import{n as v}from"./numberCommaMixin-e0aac39c.js";import{B as w}from"./BannerComponent-882e3d71.js";import{b6 as O,av as m,aj as r,l as n,t as i,m as t,s as l,b1 as u,aJ as e,F as C,at as k,k as a,r as x,a3 as p}from"./_plugin-vue_export-helper-68081c38.js";import"./publicData-f4e8600e.js";const T={components:{BannerComponent:w},mixins:[v],methods:{..._(c,["toastMessage","goToTop","getOrder"]),getMyOrder(){y(g,s=>{s&&this.getOrder(s.uid)})}},mounted(){this.goToTop(),this.getMyOrder()},computed:{...f(c,["myOrder","visitorId"])},watch:{visitorId(){Object.keys(this.myOrder).length||(this.$swal({icon:"warning",title:"出現錯誤！為您返回商品頁面",showConfirmButton:!1,timer:2500}),this.$router.push("/products"))}}},N={class:"no-scroll-x"},$={class:"container my-5"},B=x('<div class="position-relative w-100 mt-lg-5 my-5"><div class="line-gray border-top position-absolute border-2 z-index-n1 start-50 translate-middle-x" style="top:25%;"></div><div class="line-blue-50 border-top border-primary position-absolute border-2 z-index-n1"></div><div class="line-blue-100 border-top border-primary position-absolute border-2 z-index-n1"></div><ul class="list-unstyled d-flex justify-content-between text-gray"><li class="d-flex flex-column align-items-center"><div class="circle bg-primary d-flex align-items-center justify-content-center mb-2 ms-n2"><i class="bi bi-check-lg fs-lg-4 text-white"></i></div><p class="fs-lg-6 fs-14">確認購物車品項</p></li><li class="d-flex flex-column align-items-center"><div class="circle bg-primary text-white fs-lg-4 d-flex align-items-center justify-content-center mb-2"><i class="check-block bi bi-check-lg fs-lg-4 text-white"></i><span class="number-hide">2</span></div><p class="fs-lg-6 fs-14">填寫訂單資訊</p></li><li class="d-flex flex-column align-items-center"><div class="circle circle-animation fs-lg-4 d-flex align-items-center justify-content-center mb-2"><i class="check-block-3 bi bi-check-lg fs-lg-4"></i><span class="number-hide-3">3</span></div><p class="text-gray-to-primary-3 fs-lg-6 fs-14 fw-bold">成功下訂</p></li></ul></div>',1),S={key:0},j={class:"d-flex align-items-center mb-2"},q={class:"mb-5"},L={class:"row g-5"},M={class:"col-lg-6"},V=t("h4",{class:"text-center fw-bold bg-secondary py-2 mb-4"},"訂購商品資訊",-1),z={class:"list-unstyled"},A={class:"card mb-3"},D={class:"row g-0"},F={class:"col-4"},I=["src","alt"],P={class:"col-8"},R={class:"card-body d-flex flex-column h-100 pb-0"},E={class:"d-flex mb-auto"},J={class:"card-title mb-0 d-flex fs-lg-6 fs-14"},U={class:"ms-auto"},G={class:"card-text text-end"},H={key:0,class:"mb-0 text-danger fw-bold"},K={key:1,class:"mb-0 text-danger fw-bold"},Q=t("hr",null,null,-1),W={class:"table table-borderless"},X=t("th",{class:"fw-normal"},"商品總金額",-1),Y={class:"text-end fw-normal"},Z={key:0},tt={class:"text-end"},st={key:0},et=t("td",null,"優惠券折扣",-1),ot={class:"text-end"},lt={class:"border-top bg-secondary"},rt=t("td",{class:"fw-bold text-danger"},"總計金額",-1),nt={class:"text-end fw-bold text-danger"},at={class:"col-lg-6"},it=t("h4",{class:"text-center fw-bold bg-lightPurple py-2"},"收件人資訊",-1),dt={class:"card-body"},ct={class:"table table-borderless table-striped"},mt=t("th",{class:"fw-normal"},[t("i",{class:"bi bi-envelope-fill"}),l(" 信箱")],-1),ut={class:"fw-normal"},pt=t("td",null,[t("i",{class:"bi bi-person-fill"}),l(" 收件人姓名")],-1),ht=t("td",null,[t("i",{class:"bi bi-telephone-fill"}),l(" 收件人電話")],-1),bt=t("td",null,[t("i",{class:"bi bi-house-fill"}),l(" 收件人地址")],-1),_t=t("tr",null,[t("td",null,[t("i",{class:"bi bi-wallet-fill"}),l(" 付款方式")]),t("td",null,"貨到付款")],-1),ft=t("td",null,[t("i",{class:"bi bi-chat-left-text-fill"}),l(" 留言")],-1);function yt(s,gt,vt,wt,Ot,Ct){const h=m("BannerComponent"),d=m("RouterLink");return r(),n("div",N,[i(h),t("section",$,[B,s.myOrder.cart?(r(),n("div",S,[t("div",j,[t("span",null,[l("當商品到達收貨地址會傳送簡訊通知您。會員可到 "),i(d,{to:"/member",class:"link-primary"},{default:u(()=>[l("會員專區")]),_:1}),l(" 查看訂單運送進度。")]),i(d,{to:"/products",class:"btn btn-sm btn-primary rounded-0 hvr-sweep-to-right ms-auto"},{default:u(()=>[l("繼續購物")]),_:1})]),t("p",q,"訂單建立時間："+e(new Date(s.myOrder.creatAt).toLocaleString().split(":")[0])+":"+e(new Date(s.myOrder.creatAt).toLocaleString().split(":")[1]),1),t("div",L,[t("div",M,[V,t("ul",z,[(r(!0),n(C,null,k(s.myOrder.cart.items,(o,b)=>(r(),n("li",{key:b+756345},[t("div",A,[t("div",D,[t("div",F,[t("img",{src:o.product.imgUrl,alt:o.product.title,class:"img-fluid object-fit-cover w-100",style:{height:"130px"}},null,8,I)]),t("div",P,[t("div",R,[t("div",E,[t("h5",J,e(o.product.title),1),t("span",U,"x "+e(s.numberComma(o.qty)),1)]),t("div",G,[t("del",{class:p(["me-2 text-muted fs-14",{"d-none":!o.product.isCheaper}])},"NT$ "+e(s.numberComma(o.product.originalPrice)),3),t("span",{class:p({"text-danger":o.product.isCheaper,"fw-bold":o.product.isCheaper})},"NT$ "+e(s.numberComma(o.product.price)),3),t("span",null," / "+e(o.product.num)+e(o.product.unit),1),o.product.category!=="組合包"?(r(),n("p",H,"小計：NT$ "+e(s.numberComma(o.product.price*o.qty))+" / "+e(s.numberComma(o.product.num*o.qty))+e(o.product.unit),1)):a("",!0),o.product.category==="組合包"?(r(),n("p",K,"小計：NT$ "+e(s.numberComma(o.product.price*o.qty))+" / "+e(s.numberComma(o.qty))+"組",1)):a("",!0)])])])])]),Q]))),128))]),t("table",W,[t("thead",null,[t("tr",null,[X,t("th",Y,"NT$ "+e(s.numberComma(s.myOrder.cart.total)),1)])]),t("tbody",null,[t("tr",null,[t("td",null,[l("運費"),s.myOrder.cart.total>=1e3?(r(),n("span",Z,"(滿千元免運)")):a("",!0)]),t("td",tt,"NT$ "+e(s.myOrder.cart.deliveryCharge),1)]),s.myOrder.cart.total+s.myOrder.cart.deliveryCharge!==s.myOrder.cart.finalTotal&&s.myOrder.cart.coupon?(r(),n("tr",st,[et,t("td",ot,"- NT$ "+e(s.numberComma(Math.ceil(s.myOrder.cart.total*(s.myOrder.cart.coupon.discount/100)))),1)])):a("",!0),t("tr",lt,[rt,t("td",nt,"NT$ "+e(s.numberComma(s.myOrder.cart.finalTotal)),1)])])])]),t("div",at,[it,t("div",dt,[t("table",ct,[t("thead",null,[t("tr",null,[mt,t("th",ut,e(s.myOrder.email),1)])]),t("tbody",null,[t("tr",null,[pt,t("td",null,e(s.myOrder.name),1)]),t("tr",null,[ht,t("td",null,e(s.myOrder.phoneNum),1)]),t("tr",null,[bt,t("td",null,e(s.myOrder.address),1)]),_t,t("tr",null,[ft,t("td",null,e(s.myOrder.message===""?"無":s.myOrder.message),1)])])])])])])])):a("",!0)])])}const St=O(T,[["render",yt]]);export{St as default};
