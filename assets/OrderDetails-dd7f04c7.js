import{n as b}from"./numberCommaMixin-e0aac39c.js";import{o as p,r as x,d as f,b as g,a as y}from"./db-143b9a4b.js";import{_ as v}from"./loadingLogo-3bb466c0.js";import{_ as w,U as r,V as t,W as k,X as C,a0 as e,Z as d,a4 as c,a1 as W,a2 as N,Y as n,r as T,o as l,a5 as S}from"./_plugin-vue_export-helper-03b40388.js";const D={data(){return{user:{},order:{},barWidth:0,loadingItem:!0,uid:""}},mixins:[b],methods:{getOrder(){this.loadingItem=!0;const{id:i}=this.$route.params;p(y,a=>{if(a){this.uid=a.uid;const h=x(f,`orders/${this.uid}/${i}`);g(h,_=>{this.order=_.val(),this.order.id=i,console.log(this.order,"取得我的訂單"),this.order.deliveryStatus==="待出貨"?this.barWidth=0:this.order.deliveryStatus==="運送中"?this.barWidth=33:this.order.deliveryStatus==="待取貨"?this.barWidth=66:this.order.deliveryStatus==="訂單完成"&&(this.barWidth=100),this.loadingItem=!1})}else console.log("並未登入"),this.uid=null,this.user={},this.uid||(this.toastMessage("請先登入","error"),this.$router.push("/login"))})}},mounted(){this.getOrder()}},V={class:"mt-10 container"},L={key:0},q={"aria-label":"breadcrumb"},I={class:"breadcrumb"},A={class:"breadcrumb-item"},B=t("li",{class:"breadcrumb-item"},"訂單狀況",-1),M={class:"breadcrumb-item active","aria-current":"page"},O={class:""},R={class:"d-flex flex-column align-items-center mt-5"},j={class:"col-12 col-lg-10 d-flex",id:"orderProcess",style:{color:"#f6b1ac"}},z=t("div",{class:"d-flex flex-column align-items-center"},[t("i",{class:"fs-1 bi bi-box-seam text-red"}),t("h5",{class:"fw-bold text-red",style:{"white-space":"nowrap"}},"待出貨")],-1),P={key:0,class:"mt-4 mt-lg-5 mx-2",style:{"border-top":"2px dashed #f6b1ac",width:"33%"}},U={key:1,class:"mt-4 mt-lg-5 mx-2",style:{"border-top":"2px solid #d04740",width:"33%"}},E={class:"d-flex flex-column align-items-center"},F={key:2,class:"mt-4 mt-lg-5 mx-2",style:{"border-top":"2px dashed #f6b1ac",width:"33%"}},H={key:3,class:"mt-4 mt-lg-5 mx-2",style:{"border-top":"2px solid #d04740",width:"33%"}},X={class:"d-flex flex-column align-items-center"},Y={key:4,class:"mt-4 mt-lg-5 mx-2",style:{"border-top":"2px dashed #f6b1ac",width:"33%"}},Z={key:5,class:"mt-4 mt-lg-5 mx-2",style:{"border-top":"2px solid #d04740",width:"33%"}},G={class:"d-flex flex-column align-items-center"},J={class:"row gx-5 row-cols-1 row-cols-lg-2 my-5"},K={class:"col"},Q=t("h4",{class:"text-center"},"訂購商品資訊",-1),$={key:0,class:"row py-3"},tt={class:"col-12"},st={class:"row"},et={class:"card mb-3 border-0",style:{border:"0px !important"}},ot={class:"row g-0"},rt={class:"col-4"},lt=["src"],it={class:"col-8"},dt={class:"card-body"},nt={class:"card-title mb-0 d-flex subTitle"},ct={class:"ms-auto"},at={class:"card-text d-flex justify-content-end"},ht={class:"mt-1"},_t=t("br",null,null,-1),ut={key:0,class:"mb-0 text-danger text-end fw-bold"},mt={key:1,class:"mb-0 text-danger text-end fw-bold"},bt=t("hr",null,null,-1),pt={class:"col-12"},xt={class:"table table-borderless"},ft=t("th",{class:"fw-normal"},"商品總金額",-1),gt={key:0,class:"text-end fw-normal"},yt={key:0},vt={key:0,class:"text-end"},wt={key:0},kt=t("td",null,"優惠券折扣",-1),Ct={class:"text-end"},Wt={class:"border-top"},Nt=t("td",{class:"fw-bold text-danger"},"總計金額",-1),Tt={class:"text-end fw-bold text-danger"},St={class:"col"},Dt=t("h4",{class:"text-center"},"收件人資訊",-1),Vt={class:"table table-borderless text-red"},Lt=t("th",{class:"fw-normal"},[t("i",{class:"bi bi-envelope-fill"}),n(" 信箱")],-1),qt={class:"fw-normal"},It=t("td",null,[t("i",{class:"bi bi-person-fill"}),n(" 收件人姓名")],-1),At=t("td",null,[t("i",{class:"bi bi-telephone-fill"}),n(" 收件人電話")],-1),Bt=t("td",null,[t("i",{class:"bi bi-house-fill"}),n(" 收件人地址")],-1),Mt=t("tr",null,[t("td",null,[t("i",{class:"bi bi-wallet-fill"}),n(" 付款方式")]),t("td",null,"貨到付款")],-1),Ot=t("td",null,[t("i",{class:"bi bi-chat-left-text-fill"}),n(" 留言")],-1),Rt={key:1,class:"d-flex flex-column align-items-center py-10"},jt=S('<img src="'+v+'" class="loadingLogo mb-3" style="width:150px;" alt=""><h1 class="text-center fw-bold text-lightBrown"><span class="me-1 animate-text">L</span><span class="mx-1 animate-text">o</span><span class="mx-1 animate-text">a</span><span class="mx-1 animate-text">d</span><span class="mx-1 animate-text">i</span><span class="mx-1 animate-text">n</span><span class="mx-1 animate-text">g</span><span class="mx-2 animate-text">.</span><span class="me-2 animate-text">.</span><span class="animate-text">.</span></h1>',2),zt=[jt];function Pt(i,a,h,_,s,Ut){const u=T("RouterLink");return l(),r("div",V,[s.loadingItem?s.loadingItem?(l(),r("div",Rt,zt)):d("",!0):(l(),r("div",L,[t("nav",q,[t("ol",I,[t("li",A,[k(u,{to:"/member",href:"#",class:"link-red"},{default:C(()=>[n("會員專區")]),_:1})]),B,t("li",M,e(s.order.deliveryStatus),1)])]),t("p",null,"訂單建立時間："+e(new Date(s.order.creatAt).toLocaleDateString())+" "+e(new Date(s.order.creatAt).getHours())+":"+e(new Date(s.order.creatAt).getMinutes()),1),t("p",O,"訂單編號："+e(s.order.id),1),t("div",R,[t("section",j,[z,s.barWidth<33?(l(),r("div",P)):s.barWidth>=33?(l(),r("div",U)):d("",!0),t("div",E,[t("i",{class:c(["bi bi-truck fs-1",{"text-red":s.barWidth>=33}])},null,2),t("h5",{class:c(["fw-bold",{"text-red":s.barWidth>=33}]),style:{"white-space":"nowrap"}},"運送中",2)]),s.barWidth<66?(l(),r("div",F)):s.barWidth>=66?(l(),r("div",H)):d("",!0),t("div",X,[t("i",{class:c(["bi bi-house-check fs-1",{"text-red":s.barWidth>=66}])},null,2),t("h5",{class:c(["fw-bold",{"text-red":s.barWidth>=66}]),style:{"white-space":"nowrap"}},"已抵達",2)]),s.barWidth<100?(l(),r("div",Y)):s.barWidth===100?(l(),r("div",Z)):d("",!0),t("div",G,[t("i",{class:c(["bi bi-clipboard-check fs-1",{"text-red":s.barWidth===100}])},null,2),t("h5",{class:c(["fw-bold",{"text-red":s.barWidth===100}]),style:{"white-space":"nowrap"}},"訂單完成",2)])]),t("div",J,[t("div",K,[Q,s.order.cart?(l(),r("div",$,[t("div",tt,[t("div",st,[(l(!0),r(W,null,N(s.order.cart.items,(o,m)=>(l(),r("div",{class:"col-12",key:m+756345},[t("div",et,[t("div",ot,[t("div",rt,[t("img",{src:o.product.imgUrl,class:"img-fluid rounded-start",style:{"object-fit":"cover",height:"100px",width:"200px"}},null,8,lt)]),t("div",it,[t("div",dt,[t("h5",nt,[n(e(o.product.title)+" ",1),t("span",ct,"x "+e(i.numberComma(o.qty)),1)]),t("div",at,[t("del",{class:c(["me-2 text-muted mt-1",{"d-none":!o.product.isCheaper}]),style:{"font-size":"14px"}},"NT$ "+e(i.numberComma(o.product.originalPrice)),3),t("span",ht,[t("span",{class:c({"text-danger":o.product.isCheaper,"fw-bold":o.product.isCheaper})},"NT$ "+e(i.numberComma(o.product.price)),3),n(" / "+e(o.product.num)+e(o.product.unit),1)]),_t]),o.product.category!=="組合包"?(l(),r("p",ut,"小計：NT$ "+e(i.numberComma(o.product.price*o.qty))+" / "+e(i.numberComma(o.product.num*o.qty))+e(o.product.unit),1)):d("",!0),o.product.category==="組合包"?(l(),r("p",mt,"小計：NT$ "+e(i.numberComma(o.product.price*o.qty))+" / "+e(i.numberComma(o.qty))+"組",1)):d("",!0)])])])]),bt]))),128))])]),t("div",pt,[t("table",xt,[t("thead",null,[t("tr",null,[ft,s.order.cart?(l(),r("th",gt,"NT$ "+e(i.numberComma(s.order.cart.total)),1)):d("",!0)])]),t("tbody",null,[t("tr",null,[t("td",null,[n("運費"),s.order.cart.total>=1e3?(l(),r("span",yt,"(滿千元免運)")):d("",!0)]),s.order.cart?(l(),r("td",vt,"NT$ "+e(s.order.cart.deliveryCharge),1)):d("",!0)]),s.order.cart.total+s.order.cart.deliveryCharge!==s.order.cart.finalTotal&&s.order.cart.coupon?(l(),r("tr",wt,[kt,t("td",Ct,"- NT$ "+e(i.numberComma(Math.ceil(s.order.cart.total*(s.order.cart.coupon.discount/100)))),1)])):d("",!0),t("tr",Wt,[Nt,t("td",Tt,"NT$ "+e(i.numberComma(s.order.cart.finalTotal)),1)])])])])])):d("",!0)]),t("div",St,[Dt,t("table",Vt,[t("thead",null,[t("tr",null,[Lt,t("th",qt,e(s.order.email),1)])]),t("tbody",null,[t("tr",null,[It,t("td",null,e(s.order.name),1)]),t("tr",null,[At,t("td",null,e(s.order.phoneNum),1)]),t("tr",null,[Bt,t("td",null,e(s.order.address),1)]),Mt,t("tr",null,[Ot,t("td",null,e(s.order.message),1)])])])])])])]))])}const Yt=w(D,[["render",Pt]]);export{Yt as default};
