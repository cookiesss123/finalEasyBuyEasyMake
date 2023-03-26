import{m as g,b as y}from"./axios-174aada3.js";import{c as f}from"./carts-f5125435.js";import{l as N}from"./runtime-dom.esm-bundler-226b1721.js";import{b6 as w,l as m,m as s,F as V,at as k,aJ as a,k as C,t as n,b1 as _,r as T,av as p,aj as b,s as c,a3 as d,b3 as I}from"./_plugin-vue_export-helper-31c7975b.js";import"./vue-router-495964e8.js";import"./_commonjsHelpers-042e6b4d.js";const S={data(){return{userId:"",token:"",nickName:"",user:{email:"",name:"",phoneNum:"",address:"",message:""}}},methods:{...g(f,["getCart","addOrder"]),isPhone(o){return/^(09)[0-9]{8}$/.test(o)?!0:"需要正確的電話號碼"}},mounted(){this.token=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.userId=localStorage.getItem("userId"),this.userId=Number(this.userId),this.nickName=localStorage.getItem("nickName"),this.getCart()},computed:{...y(f,["cart","cartItems"])}},q={class:"py-100-sm-40"},F=T('<div class="container"><nav aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item fs-5"> 購物車 </li><li class="breadcrumb-item active fs-5 d-none d-lg-block" aria-current="page">填寫訂單資訊</li></ol></nav></div>',1),U={class:"container mt-5"},z={class:"row row-cols-1 row-cols-lg-2 gx-5"},M={class:"col"},j={class:"row"},B={class:"card mb-3 border-0"},E={class:"row g-0"},L=["src"],O={class:"col-md-8"},P={class:"card-body"},D={class:"card-title d-flex"},R={class:"ms-auto"},W={class:"card-text d-flex justify-content-end"},A={class:"mt-1"},J=s("br",null,null,-1),G={class:"mb-0 text-danger text-end"},H=s("hr",null,null,-1),K={class:"col-12"},Q={class:"card border-0"},X={class:"card-body"},Y={class:"table table-borderless"},Z=s("th",{class:"fw-normal"},"商品總金額",-1),$={class:"text-end fw-normal"},ss=s("td",null,"運費",-1),es={class:"text-end"},ts={key:0},os=s("td",null,"優惠券折扣",-1),ls={class:"text-end"},as={class:"border-top"},rs=s("td",{class:"fw-bold text-danger"},"總計金額",-1),ns={class:"text-end fw-bold text-danger"},ds={class:"col-12"},cs=s("i",{class:"bi bi-arrow-left"},null,-1),is={class:"col"},us={class:"row gy-4 d-flex"},ms={class:"col-12 fs-5"},ps=s("i",{class:"bi bi-envelope-fill"},null,-1),bs={class:"col-12 fs-5"},_s=s("i",{class:"bi bi-person-fill"},null,-1),hs={class:"col-12 fs-5"},fs=s("i",{class:"bi bi-telephone-fill"},null,-1),vs={class:"col-12 fs-5"},xs=s("i",{class:"bi bi-house-fill"},null,-1),gs=s("div",{class:"col-12 fs-5 position-relative"},[s("label",{for:"payWay",class:"form-label text-brown"},[s("i",{class:"bi bi-wallet-fill"}),c(" 付款方式")]),s("input",{type:"text",class:"form-control",id:"payWay",value:"貨到付款",disabled:""}),s("i",{class:"fs-4 text-success bi bi-check-lg position-absolute",style:{top:"40px",right:"20px"}}),s("p",{class:"text-muted",style:{"font-size":"14px"}},"注意：本店一律採貨到付款的方式喔!")],-1),ys={class:"col-12 fs-5"},Ns=s("i",{class:"bi bi-chat-left-text-fill"},null,-1),ws=s("span",{class:"text-muted ms-2",style:{"font-size":"14px"}},"(可不填寫)",-1),Vs=s("p",{class:"text-muted",style:{"font-size":"14px"}},"有任何問題或是貨品相關注意事項都歡迎與我們聯繫~",-1),ks=s("div",{class:"col-12 mt-4"},[s("button",{type:"submit",class:"btn btn-brown w-100"},"確認建立訂單")],-1);function Cs(o,l,Ts,Is,t,v){const h=p("RouterLink"),i=p("VField"),u=p("ErrorMessage"),x=p("VForm");return b(),m("div",q,[F,s("section",U,[s("div",z,[s("div",M,[s("div",j,[(b(!0),m(V,null,k(o.cartItems,(e,r)=>(b(),m("div",{class:"col-12",key:r+756345},[s("div",B,[s("div",E,[n(h,{to:`/products/${e.product.id}`,class:"col-md-4"},{default:_(()=>[s("img",{src:e.product.imgUrl,class:"img-fluid rounded-start",style:{"object-fit":"cover",height:"150px",width:"300px"}},null,8,L)]),_:2},1032,["to"]),s("div",O,[s("div",P,[s("h5",D,[c(a(e.product.title)+" ",1),s("span",R,"x "+a(e.qty),1)]),s("div",W,[s("del",{class:d(["me-2 text-muted mt-1",{"d-none":!e.product.isCheaper}]),style:{"font-size":"14px"}},"NT$ "+a(e.product.originalPrice),3),s("span",A,[s("span",{class:d({"text-danger":e.product.isCheaper,"fw-bold":e.product.isCheaper})},"NT$ "+a(e.product.price),3),c(" / "+a(e.product.num)+a(e.product.unit),1)]),J]),s("p",G,"小計：NT$ "+a(e.product.price*e.qty)+" / "+a(e.product.num*e.qty)+a(e.product.unit),1)])])])]),H]))),128)),s("div",K,[s("div",Q,[s("div",X,[s("table",Y,[s("thead",null,[s("tr",null,[Z,s("th",$,"NT$ "+a(o.cart.total),1)])]),s("tbody",null,[s("tr",null,[ss,s("td",es,"NT$ "+a(o.cart.deliveryCharge),1)]),o.cart.total+o.cart.deliveryCharge!==o.cart.finalTotal&&o.cart.coupon?(b(),m("tr",ts,[os,s("td",ls,"- NT$ "+a(Math.ceil(o.cart.total*(o.cart.coupon.discount/100))),1)])):C("",!0),s("tr",as,[rs,s("td",ns,"NT$ "+a(o.cart.finalTotal),1)])])])])])]),s("div",ds,[n(h,{to:"/products",class:"btn btn-outline-brown mb-4 ms-3"},{default:_(()=>[cs,c(" 繼續選購")]),_:1})])])]),s("div",is,[n(x,{ref:"form",class:"",onSubmit:l[5]||(l[5]=()=>o.addOrder(t.user.email,t.user.name,t.user.phoneNum,t.user.address,t.user.message))},{default:_(({errors:e})=>[s("div",us,[s("div",ms,[s("label",{for:"email",class:d(["form-label text-secondary",{"text-brown":t.user.email&&!e.信箱}])},[ps,c(" 信箱")],2),n(i,{id:"email",name:"信箱",type:"email",class:d(["form-control border-0 border-bottom",{"is-invalid":e.信箱,"is-valid":t.user.email&&!e.信箱}]),placeholder:"請輸入您的信箱",rules:"email|required",modelValue:t.user.email,"onUpdate:modelValue":l[0]||(l[0]=r=>t.user.email=r)},null,8,["class","modelValue"]),n(u,{name:"信箱",class:"invalid-feedback"})]),s("div",bs,[s("label",{for:"name",class:d(["form-label text-secondary",{"text-brown":t.user.name&&!e.收件人姓名}])},[_s,c(" 收件人姓名")],2),n(i,{id:"name",name:"收件人姓名",type:"name",class:d(["form-control border-0 border-bottom",{"is-invalid":e.收件人姓名,"is-valid":!e.收件人姓名&&t.user.name}]),placeholder:"請輸入您的收件人姓名",rules:"required",modelValue:t.user.name,"onUpdate:modelValue":l[1]||(l[1]=r=>t.user.name=r)},null,8,["class","modelValue"]),n(u,{name:"收件人姓名",class:"invalid-feedback"})]),s("div",hs,[s("label",{for:"phoneNum",class:d(["form-label text-secondary",{"text-brown":t.user.phoneNum&&!e.收件人電話}])},[fs,c(" 收件人電話")],2),n(i,{id:"phoneNum",name:"收件人電話",type:"phoneNum",class:d(["form-control border-0 border-bottom",{"is-invalid":e.收件人電話,"is-valid":!e.收件人電話&&t.user.phoneNum}]),placeholder:"請輸入您的收件人電話",rules:v.isPhone,modelValue:t.user.phoneNum,"onUpdate:modelValue":l[2]||(l[2]=r=>t.user.phoneNum=r)},null,8,["class","rules","modelValue"]),n(u,{name:"收件人電話",class:"invalid-feedback"})]),s("div",vs,[s("label",{for:"address",class:d(["form-label text-secondary",{"text-brown":t.user.address&&!e.收件人地址}])},[xs,c(" 收件人地址")],2),n(i,{id:"address",name:"收件人地址",type:"address",class:d(["form-control border-0 border-bottom",{"is-invalid":e.收件人地址,"is-valid":!e.收件人地址&&t.user.address}]),placeholder:"請輸入您的收件人地址",rules:"required",modelValue:t.user.address,"onUpdate:modelValue":l[3]||(l[3]=r=>t.user.address=r)},null,8,["class","modelValue"]),n(u,{name:"收件人地址",class:"invalid-feedback"})]),gs,s("div",ys,[s("label",{for:"message",class:d(["form-label text-secondary",{"text-brown":t.user.message}])},[Ns,c(" 留言")],2),ws,I(s("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":l[4]||(l[4]=r=>t.user.message=r)},null,512),[[N,t.user.message]]),Vs]),ks])]),_:1},512)])])])])}const js=w(S,[["render",Cs]]);export{js as default};
