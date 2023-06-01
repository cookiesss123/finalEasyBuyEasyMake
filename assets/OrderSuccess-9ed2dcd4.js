import{m as _,a as b}from"./index-655038ef.js";import{c}from"./carts-11f88437.js";import{n as p}from"./numberCommaMixin-e0aac39c.js";import{c as y,b as f}from"./db-64e704f5.js";import{_ as g,U as a,V as t,Y as r,W as i,X as u,a0 as e,a1 as v,a2 as O,Z as l,a5 as C,r as k,o as d,a4 as m}from"./_plugin-vue_export-helper-03b40388.js";import"./vue-router-2c21c692.js";import"./_commonjsHelpers-042e6b4d.js";const N={data(){return{userId:"",token:"",nickName:"",user:{}}},mixins:[p],methods:{..._(c,["getOrder"]),getMyOrder(){y(f,s=>{s?(this.uid=s.uid,this.getOrder(this.uid)):(console.log("並未登入"),this.uid=null,this.user={},this.getOrder("1"))})}},mounted(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.userId=localStorage.getItem("userId"),this.userId=Number(this.userId),this.nickName=localStorage.getItem("nickName"),this.getMyOrder()},computed:{...b(c,["myOrder"])}},w={class:"my-10"},$=C('<div class="container"><nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item"> 購物車 </li><li class="breadcrumb-item active" aria-current="page">填寫訂單資訊</li><li class="breadcrumb-item active" aria-current="page">訂單完成</li></ol></nav></div>',1),T={class:"container d-flex justify-content-center mt-5"},S={key:0,class:"col-lg-6"},I={class:"row"},V=t("h1",{class:"h4 text-center text-white w-100 bg-red py-2"},"恭喜您! 訂單建立完成",-1),q={class:"col-12 d-flex align-items-center my-4"},x={class:""},L={class:"ms-auto"},M={class:"mb-2"},j={class:"card mb-3 border-0"},A={class:"row g-0"},B={class:"col-4"},D=["src"],z={class:"col-8"},R={class:"card-body"},U={class:"card-title mb-0 d-flex subTitle"},E={class:"ms-auto"},F={class:"card-text d-flex justify-content-end"},P={class:"mt-1"},W={key:0,class:"mb-0 text-danger text-end fw-bold"},X={key:1,class:"mb-0 text-danger text-end fw-bold"},Y=t("hr",null,null,-1),Z={class:"col-12"},G={class:"card border-0"},H={class:"card-body"},J={class:"table table-borderless"},K=t("th",{class:"fw-normal"},"商品總金額",-1),Q={class:"text-end fw-normal"},tt={key:0},st={class:"text-end"},et={key:0},ot=t("td",null,"優惠券折扣",-1),rt={class:"text-end"},at={class:"border-top"},dt=t("td",{class:"fw-bold text-danger"},"總計金額",-1),lt={class:"text-end fw-bold text-danger"},nt={class:"col-12"},ct={class:"card border-0"},it={class:"card-body"},ut={class:"table table-borderless text-red"},mt=t("th",{class:"fw-normal"},[t("i",{class:"bi bi-envelope-fill"}),r(" 信箱")],-1),ht={class:"fw-normal"},_t=t("td",null,[t("i",{class:"bi bi-person-fill"}),r(" 收件人姓名")],-1),bt=t("td",null,[t("i",{class:"bi bi-telephone-fill"}),r(" 收件人電話")],-1),pt=t("td",null,[t("i",{class:"bi bi-house-fill"}),r(" 收件人地址")],-1),yt=t("tr",null,[t("td",null,[t("i",{class:"bi bi-wallet-fill"}),r(" 付款方式")]),t("td",null,"貨到付款")],-1),ft=t("td",null,[t("i",{class:"bi bi-chat-left-text-fill"}),r(" 留言")],-1);function gt(s,vt,Ot,Ct,kt,Nt){const n=k("RouterLink");return d(),a("div",w,[$,t("section",T,[s.myOrder.cart?(d(),a("div",S,[t("div",I,[V,t("div",q,[t("span",x,[r("會員可到 "),i(n,{to:"/member",class:"link-orange"},{default:u(()=>[r("會員專區")]),_:1}),r(" 查看訂單處理狀況")]),t("span",L,[i(n,{to:"/products",class:"btn btn-sm btn-red"},{default:u(()=>[r("繼續購物")]),_:1})])]),t("p",M,"訂單建立時間："+e(new Date(s.myOrder.creatAt).toLocaleDateString()),1),(d(!0),a(v,null,O(s.myOrder.cart.items,(o,h)=>(d(),a("div",{class:"col-12",key:h+756345},[t("div",j,[t("div",A,[t("div",B,[t("img",{src:o.product.imgUrl,class:"img-fluid rounded-start",style:{"object-fit":"cover",width:"200px",height:"100px"}},null,8,D)]),t("div",z,[t("div",R,[t("h5",U,[r(e(o.product.title)+" ",1),t("span",E,"x "+e(s.numberComma(o.qty)),1)]),t("div",F,[t("del",{class:m(["me-2 text-muted mt-1",{"d-none":!o.product.isCheaper}]),style:{"font-size":"14px"}},"NT$ "+e(s.numberComma(o.product.originalPrice)),3),t("span",P,[t("span",{class:m({"text-danger":o.product.isCheaper,"fw-bold":o.product.isCheaper})},"NT$ "+e(s.numberComma(o.product.price)),3),r(" / "+e(o.product.num)+e(o.product.unit),1)])]),o.product.category!=="組合包"?(d(),a("p",W,"小計：NT$ "+e(s.numberComma(o.product.price*o.qty))+" / "+e(s.numberComma(o.product.num*o.qty))+e(o.product.unit),1)):l("",!0),o.product.category==="組合包"?(d(),a("p",X,"小計：NT$ "+e(s.numberComma(o.product.price*o.qty))+" / "+e(s.numberComma(o.qty))+"組",1)):l("",!0)])])])]),Y]))),128)),t("div",Z,[t("div",G,[t("div",H,[t("table",J,[t("thead",null,[t("tr",null,[K,t("th",Q,"NT$ "+e(s.numberComma(s.myOrder.cart.total)),1)])]),t("tbody",null,[t("tr",null,[t("td",null,[r("運費"),s.myOrder.cart.total>=1e3?(d(),a("span",tt,"(滿千元免運)")):l("",!0)]),t("td",st,"NT$ "+e(s.myOrder.cart.deliveryCharge),1)]),s.myOrder.cart.total+s.myOrder.cart.deliveryCharge!==s.myOrder.cart.finalTotal&&s.myOrder.cart.coupon?(d(),a("tr",et,[ot,t("td",rt,"- NT$ "+e(s.numberComma(Math.ceil(s.myOrder.cart.total*(s.myOrder.cart.coupon.discount/100)))),1)])):l("",!0),t("tr",at,[dt,t("td",lt,"NT$ "+e(s.numberComma(s.myOrder.cart.finalTotal)),1)])])])])])]),t("div",nt,[t("div",ct,[t("div",it,[t("table",ut,[t("thead",null,[t("tr",null,[mt,t("th",ht,e(s.myOrder.email),1)])]),t("tbody",null,[t("tr",null,[_t,t("td",null,e(s.myOrder.name),1)]),t("tr",null,[bt,t("td",null,e(s.myOrder.phoneNum),1)]),t("tr",null,[pt,t("td",null,e(s.myOrder.address),1)]),yt,t("tr",null,[ft,t("td",null,e(s.myOrder.message),1)])])])])])])])])):l("",!0)])])}const xt=g(N,[["render",gt]]);export{xt as default};