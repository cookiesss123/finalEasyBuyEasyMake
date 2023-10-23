import{f as _,m as f}from"./index-fc788f37.js";import{o as y,c,a as g}from"./carts-e36b449b.js";import{n as v}from"./numberCommaMixin-e0aac39c.js";import{B as O}from"./BannerComponent-e49de957.js";import{_ as w,r as m,o as r,c as a,a as d,b as t,ao as l,w as u,b7 as s,F as C,aY as k,ak as n,an as x,aH as p}from"./_plugin-vue_export-helper-f96b5234.js";import"./publicData-f5d39529.js";const T={data(){return{uid:""}},components:{BannerComponent:O},mixins:[v],methods:{..._(c,["getOrder","toastMessage","goToTop"]),getMyOrder(){y(g,e=>{e?(this.uid=e.uid,this.getOrder(this.uid)):(this.uid=null,this.getOrder("1"))})}},mounted(){this.goToTop(),this.toastMessage("恭喜您! 訂單建立完成"),this.getMyOrder()},computed:{...f(c,["myOrder"])}},N={class:"no-scroll-x"},$={class:"container my-5"},S=x('<div class="position-relative w-100 mt-lg-5 my-5"><div class="line-gray border-top position-absolute border-2 z-index-n1 start-50 translate-middle-x" style="top:25%;"></div><div class="line-blue-50 border-top border-primary position-absolute border-2 z-index-n1"></div><div class="line-blue-100 border-top border-primary position-absolute border-2 z-index-n1"></div><ul class="list-unstyled d-flex justify-content-between text-gray"><li class="d-flex flex-column align-items-center"><div class="circle bg-primary d-flex align-items-center justify-content-center mb-2 ms-n2"><i class="bi bi-check-lg fs-lg-4 text-white"></i></div><p class="fs-lg-6 fs-14">確認購物車品項</p></li><li class="d-flex flex-column align-items-center"><div class="circle bg-primary text-white fs-lg-4 d-flex align-items-center justify-content-center mb-2"><i class="check-block bi bi-check-lg fs-lg-4 text-white"></i><span class="number-hide">2</span></div><p class="fs-lg-6 fs-14">填寫訂單資訊</p></li><li class="d-flex flex-column align-items-center"><div class="circle circle-animation fs-lg-4 d-flex align-items-center justify-content-center mb-2"><i class="check-block-3 bi bi-check-lg fs-lg-4"></i><span class="number-hide-3">3</span></div><p class="text-gray-to-primary-3 fs-lg-6 fs-14 fw-bold">成功下訂</p></li></ul></div>',1),B={key:0},M={class:"d-flex align-items-center mb-2"},j={class:"mb-5"},q={class:"row g-5"},L={class:"col-lg-6"},V=t("h4",{class:"text-center fw-bold bg-secondary py-2 mb-4"},"訂購商品資訊",-1),z={class:"list-unstyled"},A={class:"card mb-3"},D={class:"row g-0"},F={class:"col-4"},P=["src","alt"],R={class:"col-8"},E={class:"card-body d-flex flex-column h-100 pb-0"},H={class:"d-flex mb-auto"},U={class:"card-title mb-0 d-flex fs-lg-6 fs-14"},Y={class:"ms-auto"},G={class:"card-text text-end"},I={key:0,class:"mb-0 text-danger fw-bold"},J={key:1,class:"mb-0 text-danger fw-bold"},K=t("hr",null,null,-1),Q={class:"table table-borderless"},W=t("th",{class:"fw-normal"},"商品總金額",-1),X={class:"text-end fw-normal"},Z={key:0},tt={class:"text-end"},et={key:0},st=t("td",null,"優惠券折扣",-1),ot={class:"text-end"},lt={class:"border-top bg-secondary"},rt=t("td",{class:"fw-bold text-danger"},"總計金額",-1),at={class:"text-end fw-bold text-danger"},nt={class:"col-lg-6"},dt=t("h4",{class:"text-center fw-bold bg-lightPurple py-2"},"收件人資訊",-1),it={class:"card-body"},ct={class:"table table-borderless table-striped"},mt=t("th",{class:"fw-normal"},[t("i",{class:"bi bi-envelope-fill"}),l(" 信箱")],-1),ut={class:"fw-normal"},pt=t("td",null,[t("i",{class:"bi bi-person-fill"}),l(" 收件人姓名")],-1),ht=t("td",null,[t("i",{class:"bi bi-telephone-fill"}),l(" 收件人電話")],-1),bt=t("td",null,[t("i",{class:"bi bi-house-fill"}),l(" 收件人地址")],-1),_t=t("tr",null,[t("td",null,[t("i",{class:"bi bi-wallet-fill"}),l(" 付款方式")]),t("td",null,"貨到付款")],-1),ft=t("td",null,[t("i",{class:"bi bi-chat-left-text-fill"}),l(" 留言")],-1);function yt(e,gt,vt,Ot,wt,Ct){const h=m("BannerComponent"),i=m("RouterLink");return r(),a("div",N,[d(h),t("section",$,[S,e.myOrder.cart?(r(),a("div",B,[t("div",M,[t("span",null,[l("會員可到 "),d(i,{to:"/member",class:"link-primary"},{default:u(()=>[l("會員專區")]),_:1}),l(" 查看訂單運送進度")]),d(i,{to:"/products",class:"btn btn-sm btn-primary rounded-0 hvr-sweep-to-right ms-auto"},{default:u(()=>[l("繼續購物")]),_:1})]),t("p",j,"訂單建立時間："+s(new Date(e.myOrder.creatAt).toLocaleString().split(":")[0])+":"+s(new Date(e.myOrder.creatAt).toLocaleString().split(":")[1]),1),t("div",q,[t("div",L,[V,t("ul",z,[(r(!0),a(C,null,k(e.myOrder.cart.items,(o,b)=>(r(),a("li",{key:b+756345},[t("div",A,[t("div",D,[t("div",F,[t("img",{src:o.product.imgUrl,alt:o.product.title,class:"img-fluid object-fit-cover w-100",style:{height:"130px"}},null,8,P)]),t("div",R,[t("div",E,[t("div",H,[t("h5",U,s(o.product.title),1),t("span",Y,"x "+s(e.numberComma(o.qty)),1)]),t("div",G,[t("del",{class:p(["me-2 text-muted fs-14",{"d-none":!o.product.isCheaper}])},"NT$ "+s(e.numberComma(o.product.originalPrice)),3),t("span",{class:p({"text-danger":o.product.isCheaper,"fw-bold":o.product.isCheaper})},"NT$ "+s(e.numberComma(o.product.price)),3),t("span",null," / "+s(o.product.num)+s(o.product.unit),1),o.product.category!=="組合包"?(r(),a("p",I,"小計：NT$ "+s(e.numberComma(o.product.price*o.qty))+" / "+s(e.numberComma(o.product.num*o.qty))+s(o.product.unit),1)):n("",!0),o.product.category==="組合包"?(r(),a("p",J,"小計：NT$ "+s(e.numberComma(o.product.price*o.qty))+" / "+s(e.numberComma(o.qty))+"組",1)):n("",!0)])])])])]),K]))),128))]),t("table",Q,[t("thead",null,[t("tr",null,[W,t("th",X,"NT$ "+s(e.numberComma(e.myOrder.cart.total)),1)])]),t("tbody",null,[t("tr",null,[t("td",null,[l("運費"),e.myOrder.cart.total>=1e3?(r(),a("span",Z,"(滿千元免運)")):n("",!0)]),t("td",tt,"NT$ "+s(e.myOrder.cart.deliveryCharge),1)]),e.myOrder.cart.total+e.myOrder.cart.deliveryCharge!==e.myOrder.cart.finalTotal&&e.myOrder.cart.coupon?(r(),a("tr",et,[st,t("td",ot,"- NT$ "+s(e.numberComma(Math.ceil(e.myOrder.cart.total*(e.myOrder.cart.coupon.discount/100)))),1)])):n("",!0),t("tr",lt,[rt,t("td",at,"NT$ "+s(e.numberComma(e.myOrder.cart.finalTotal)),1)])])])]),t("div",nt,[dt,t("div",it,[t("table",ct,[t("thead",null,[t("tr",null,[mt,t("th",ut,s(e.myOrder.email),1)])]),t("tbody",null,[t("tr",null,[pt,t("td",null,s(e.myOrder.name),1)]),t("tr",null,[ht,t("td",null,s(e.myOrder.phoneNum),1)]),t("tr",null,[bt,t("td",null,s(e.myOrder.address),1)]),_t,t("tr",null,[ft,t("td",null,s(e.myOrder.message===""?"無":e.myOrder.message),1)])])])])])])])):n("",!0)])])}const Bt=w(T,[["render",yt]]);export{Bt as default};
