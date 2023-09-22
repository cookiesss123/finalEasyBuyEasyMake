import{m as b,e as h}from"./index-a9d6be75.js";import{o as f,c as i,a as g}from"./carts-810a7b65.js";import{n as _}from"./numberCommaMixin-e0aac39c.js";import{_ as y,a7 as r,a8 as t,aa as o,F as c,a9 as u,ad as e,N as v,ae as w,ab as d,ag as x,r as O,o as a,af as m}from"./_plugin-vue_export-helper-d28549df.js";const C={data(){return{uid:""}},mixins:[_],methods:{...b(i,["getOrder","toastMessage","goToTop"]),getMyOrder(){f(g,s=>{s?(this.uid=s.uid,this.getOrder(this.uid)):(this.uid=null,this.getOrder("1"))})}},mounted(){this.goToTop(),this.toastMessage("恭喜您! 訂單建立完成"),this.getMyOrder()},computed:{...h(i,["myOrder"])}},k={class:"no-scroll-x"},N=t("section",{class:"text-center","data-aos":"fade-up"},[t("div",{class:"py-lg-200 py-96 bg-cover-center",style:{"background-image":"url('https://images.unsplash.com/photo-1681923786169-67be8db99af6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}),t("h2",{class:"bg-secondary-light-purple-horizontal text-purple mb-0 fs-lg-1 fs-5 letter-spacing-20 ps-3 fw-bold bg-secondary-light-purple py-2"},"訂單建立完成")],-1),T={class:"container my-5"},$=x('<div class="position-relative w-100 mt-lg-5 my-5"><div class="line-gray border-top position-absolute border-2 z-index-n1 start-50 translate-middle-x" style="top:25%;"></div><div class="line-blue-50 border-top border-primary position-absolute border-2 z-index-n1"></div><div class="line-blue-100 border-top border-primary position-absolute border-2 z-index-n1"></div><ul class="list-unstyled d-flex justify-content-between text-gray"><li class="d-flex flex-column align-items-center"><div class="circle bg-primary d-flex align-items-center justify-content-center mb-2 ms-n2"><i class="bi bi-check-lg fs-lg-4 text-white"></i></div><p class="fs-lg-6 fs-14">確認購物車品項</p></li><li class="d-flex flex-column align-items-center"><div class="circle bg-primary text-white fs-lg-4 d-flex align-items-center justify-content-center mb-2"><i class="check-block bi bi-check-lg fs-lg-4 text-white"></i><span class="number-hide">2</span></div><p class="fs-lg-6 fs-14">填寫訂單資訊</p></li><li class="d-flex flex-column align-items-center"><div class="circle circle-animation fs-lg-4 d-flex align-items-center justify-content-center mb-2"><i class="check-block-3 bi bi-check-lg fs-lg-4"></i><span class="number-hide-3">3</span></div><p class="text-gray-to-primary-3 fs-lg-6 fs-14 fw-bold">成功下訂</p></li></ul></div>',1),M={key:0},S={class:"d-flex align-items-center mb-2"},D={class:"mb-5"},j={class:"row g-5"},q={class:"col-lg-6"},A=t("h4",{class:"text-center fw-bold bg-secondary py-2 mb-4"},"訂購商品資訊",-1),V={class:"list-unstyled"},z={class:"card mb-3"},B={class:"row g-0"},L={class:"col-4"},H=["src","alt"],F={class:"col-8"},G={class:"card-body d-flex flex-column h-100 pb-0"},P={class:"d-flex mb-auto"},R={class:"card-title mb-0 d-flex fs-lg-6 fs-14"},E={class:"ms-auto"},U={class:"card-text text-end"},W={key:0,class:"mb-0 text-danger fw-bold"},Y={key:1,class:"mb-0 text-danger fw-bold"},I=t("hr",null,null,-1),J={class:"table table-borderless"},K=t("th",{class:"fw-normal"},"商品總金額",-1),Q={class:"text-end fw-normal"},X={key:0},Z={class:"text-end"},tt={key:0},st=t("td",null,"優惠券折扣",-1),et={class:"text-end"},lt={class:"border-top bg-secondary"},ot=t("td",{class:"fw-bold text-danger"},"總計金額",-1),rt={class:"text-end fw-bold text-danger"},at={class:"col-lg-6"},dt=t("h4",{class:"text-center fw-bold bg-lightPurple py-2"},"收件人資訊",-1),nt={class:"card-body"},it={class:"table table-borderless table-striped"},ct=t("th",{class:"fw-normal"},[t("i",{class:"bi bi-envelope-fill"}),o(" 信箱")],-1),ut={class:"fw-normal"},mt=t("td",null,[t("i",{class:"bi bi-person-fill"}),o(" 收件人姓名")],-1),pt=t("td",null,[t("i",{class:"bi bi-telephone-fill"}),o(" 收件人電話")],-1),bt=t("td",null,[t("i",{class:"bi bi-house-fill"}),o(" 收件人地址")],-1),ht=t("tr",null,[t("td",null,[t("i",{class:"bi bi-wallet-fill"}),o(" 付款方式")]),t("td",null,"貨到付款")],-1),ft=t("td",null,[t("i",{class:"bi bi-chat-left-text-fill"}),o(" 留言")],-1);function gt(s,_t,yt,vt,wt,xt){const n=O("RouterLink");return a(),r("div",k,[N,t("section",T,[$,s.myOrder.cart?(a(),r("div",M,[t("div",S,[t("span",null,[o("會員可到 "),c(n,{to:"/member",class:"link-primary"},{default:u(()=>[o("會員專區")]),_:1}),o(" 查看訂單運送進度")]),c(n,{to:"/products",class:"btn btn-sm btn-primary rounded-0 hvr-sweep-to-right ms-auto"},{default:u(()=>[o("繼續購物")]),_:1})]),t("p",D,"訂單建立時間："+e(new Date(s.myOrder.creatAt).toLocaleString().split(":")[0])+":"+e(new Date(s.myOrder.creatAt).toLocaleString().split(":")[1]),1),t("div",j,[t("div",q,[A,t("ul",V,[(a(!0),r(v,null,w(s.myOrder.cart.items,(l,p)=>(a(),r("li",{key:p+756345},[t("div",z,[t("div",B,[t("div",L,[t("img",{src:l.product.imgUrl,alt:l.product.title,class:"img-fluid object-fit-cover w-100",style:{height:"130px"}},null,8,H)]),t("div",F,[t("div",G,[t("div",P,[t("h5",R,e(l.product.title),1),t("span",E,"x "+e(s.numberComma(l.qty)),1)]),t("div",U,[t("del",{class:m(["me-2 text-muted fs-14",{"d-none":!l.product.isCheaper}])},"NT$ "+e(s.numberComma(l.product.originalPrice)),3),t("span",{class:m({"text-danger":l.product.isCheaper,"fw-bold":l.product.isCheaper})},"NT$ "+e(s.numberComma(l.product.price)),3),t("span",null," / "+e(l.product.num)+e(l.product.unit),1),l.product.category!=="組合包"?(a(),r("p",W,"小計：NT$ "+e(s.numberComma(l.product.price*l.qty))+" / "+e(s.numberComma(l.product.num*l.qty))+e(l.product.unit),1)):d("",!0),l.product.category==="組合包"?(a(),r("p",Y,"小計：NT$ "+e(s.numberComma(l.product.price*l.qty))+" / "+e(s.numberComma(l.qty))+"組",1)):d("",!0)])])])])]),I]))),128))]),t("table",J,[t("thead",null,[t("tr",null,[K,t("th",Q,"NT$ "+e(s.numberComma(s.myOrder.cart.total)),1)])]),t("tbody",null,[t("tr",null,[t("td",null,[o("運費"),s.myOrder.cart.total>=1e3?(a(),r("span",X,"(滿千元免運)")):d("",!0)]),t("td",Z,"NT$ "+e(s.myOrder.cart.deliveryCharge),1)]),s.myOrder.cart.total+s.myOrder.cart.deliveryCharge!==s.myOrder.cart.finalTotal&&s.myOrder.cart.coupon?(a(),r("tr",tt,[st,t("td",et,"- NT$ "+e(s.numberComma(Math.ceil(s.myOrder.cart.total*(s.myOrder.cart.coupon.discount/100)))),1)])):d("",!0),t("tr",lt,[ot,t("td",rt,"NT$ "+e(s.numberComma(s.myOrder.cart.finalTotal)),1)])])])]),t("div",at,[dt,t("div",nt,[t("table",it,[t("thead",null,[t("tr",null,[ct,t("th",ut,e(s.myOrder.email),1)])]),t("tbody",null,[t("tr",null,[mt,t("td",null,e(s.myOrder.name),1)]),t("tr",null,[pt,t("td",null,e(s.myOrder.phoneNum),1)]),t("tr",null,[bt,t("td",null,e(s.myOrder.address),1)]),ht,t("tr",null,[ft,t("td",null,e(s.myOrder.message===""?"無":s.myOrder.message),1)])])])])])])])):d("",!0)])])}const Tt=y(C,[["render",gt]]);export{Tt as default};
