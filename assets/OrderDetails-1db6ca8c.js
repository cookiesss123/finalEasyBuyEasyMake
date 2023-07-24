import{n as g}from"./numberCommaMixin-e0aac39c.js";import{o as y,r as v,d as w,b as k,a as C}from"./db-143b9a4b.js";import{L as W}from"./index-fde5e204.js";import{_ as N}from"./loadingLogo-ea15f612.js";import{_ as L,a7 as l,F as _,a9 as m,a8 as t,ad as s,af as d,ab as c,N as T,ae as S,aa as n,r as b,o as r}from"./_plugin-vue_export-helper-d28549df.js";import"./_commonjsHelpers-042e6b4d.js";import"./runtime-dom.esm-bundler-e140de91.js";const D={data(){return{user:{},uid:"",order:{},barWidth:0,isLoading:!1,fullPage:!0}},components:{Loading:W},mixins:[g],methods:{getOrder(){this.isLoading=!0;const{id:i}=this.$route.params;y(C,a=>{if(a){this.uid=a.uid;const u=v(w,`orders/${this.uid}/${i}`);k(u,h=>{this.order=h.val(),this.order.id=i,this.order.deliveryStatus==="待出貨"?this.barWidth=0:this.order.deliveryStatus==="運送中"?this.barWidth=33:this.order.deliveryStatus==="待取貨"?this.barWidth=66:this.order.deliveryStatus==="訂單完成"&&(this.barWidth=100),this.isLoading=!1})}else this.uid=null,this.user={},this.uid||(this.toastMessage("請先登入","error"),this.$router.push("/login"))})}},mounted(){window.scrollTo(0,0),this.getOrder()}},q={class:"mt-10 container",style:{"overflow-x":"hidden"}},B=t("div",{class:"d-flex flex-column align-items-center py-10"},[t("img",{src:N,class:"loadingLogo mb-3",style:{width:"150px"},alt:""}),t("h1",{class:"text-center fw-bold text-blue"},[t("span",{class:"me-1 animate-text"},"L"),t("span",{class:"mx-1 animate-text"},"o"),t("span",{class:"mx-1 animate-text"},"a"),t("span",{class:"mx-1 animate-text"},"d"),t("span",{class:"mx-1 animate-text"},"i"),t("span",{class:"mx-1 animate-text"},"n"),t("span",{class:"mx-1 animate-text"},"g"),t("span",{class:"mx-2 animate-text"},"."),t("span",{class:"me-2 animate-text"},"."),t("span",{class:"animate-text"},".")])],-1),V={"aria-label":"breadcrumb"},A={class:"breadcrumb"},M={class:"breadcrumb-item"},O=t("li",{class:"breadcrumb-item"},"訂單狀況",-1),P={class:"breadcrumb-item active","aria-current":"page"},R={class:""},j={class:"d-flex flex-column align-items-center mt-5"},z={class:"col-12 col-lg-10 d-flex",id:"orderProcess",style:{color:"#d3ccc1"}},F=t("i",{class:"fs-1 bi bi-box-seam text-blue"},null,-1),U=t("h5",{class:"fw-bold text-blue",style:{"white-space":"nowrap"}},"待出貨",-1),E=[F,U],H={key:0,class:"mt-4 mt-lg-5 mx-2",style:{"border-top":"2px dashed #d3ccc1",width:"33%"}},G={key:1,class:"mt-4 mt-lg-5 mx-2",style:{"border-top":"2px solid #4572c2",width:"33%"}},I={key:2,class:"mt-4 mt-lg-5 mx-2",style:{"border-top":"2px dashed #d3ccc1",width:"33%"}},J={key:3,class:"mt-4 mt-lg-5 mx-2",style:{"border-top":"2px solid #4572c2",width:"33%"}},K={key:4,class:"mt-4 mt-lg-5 mx-2",style:{"border-top":"2px dashed #d3ccc1",width:"33%"}},Q={key:5,class:"mt-4 mt-lg-5 mx-2",style:{"border-top":"2px solid #4572c2",width:"33%"}},X={class:"row gx-5 row-cols-1 row-cols-lg-2 my-5"},Y={class:"col"},Z=t("h4",{class:"text-center fw-bold bg-lightBlue py-2"},"訂購商品資訊",-1),$={key:0,class:"row py-3"},tt={class:"col-12"},et={class:"row"},st={class:"card mb-3 border-0",style:{border:"0px !important"}},ot={class:"row g-0"},lt={class:"col-4"},rt=["src"],it={class:"col-8"},dt={class:"card-body"},ct={class:"card-title mb-0 d-flex subTitle"},nt={class:"ms-auto"},at={class:"card-text d-flex justify-content-end"},ut={class:"mt-1"},ht=t("br",null,null,-1),_t={key:0,class:"mb-0 text-danger text-end fw-bold"},mt={key:1,class:"mb-0 text-danger text-end fw-bold"},bt=t("hr",null,null,-1),pt={class:"col-12"},ft={class:"table table-borderless"},xt=t("th",{class:"fw-normal"},"商品總金額",-1),gt={key:0,class:"text-end fw-normal"},yt={key:0},vt={key:0,class:"text-end"},wt={key:0},kt=t("td",null,"優惠券折扣",-1),Ct={class:"text-end"},Wt={class:"border-top bg-lightBlue"},Nt=t("td",{class:"fw-bold text-danger"},"總計金額",-1),Lt={class:"text-end fw-bold text-danger"},Tt={class:"col"},St=t("h4",{class:"text-center fw-bold bg-cyan py-2"},"收件人資訊",-1),Dt={class:"table table-borderless table-striped"},qt=t("th",{class:"fw-normal"},[t("i",{class:"bi bi-envelope-fill"}),n(" 信箱")],-1),Bt={class:"fw-normal"},Vt=t("td",null,[t("i",{class:"bi bi-person-fill"}),n(" 收件人姓名")],-1),At=t("td",null,[t("i",{class:"bi bi-telephone-fill"}),n(" 收件人電話")],-1),Mt=t("td",null,[t("i",{class:"bi bi-house-fill"}),n(" 收件人地址")],-1),Ot=t("tr",null,[t("td",null,[t("i",{class:"bi bi-wallet-fill"}),n(" 付款方式")]),t("td",null,"貨到付款")],-1),Pt=t("td",null,[t("i",{class:"bi bi-chat-left-text-fill"}),n(" 留言")],-1);function Rt(i,a,u,h,e,jt){const p=b("loading"),f=b("RouterLink");return r(),l("div",q,[_(p,{active:e.isLoading,"onUpdate:active":a[0]||(a[0]=o=>e.isLoading=o),"can-cancel":!1,"is-full-page":e.fullPage,"lock-scroll":!0},{default:m(()=>[B]),_:1},8,["active","is-full-page"]),t("div",null,[t("nav",V,[t("ol",A,[t("li",M,[_(f,{to:"/member",href:"#",class:"link-blue"},{default:m(()=>[n("會員專區")]),_:1})]),O,t("li",P,s(e.order.deliveryStatus),1)])]),t("p",null,"訂單建立時間："+s(new Date(e.order.creatAt).toLocaleDateString())+" "+s(new Date(e.order.creatAt).getHours())+":"+s(new Date(e.order.creatAt).getMinutes()),1),t("p",R,"訂單編號："+s(e.order.id),1),t("div",j,[t("section",z,[t("div",{class:d(["d-flex flex-column align-items-center",{orderStatus:e.barWidth===0}])},E,2),e.barWidth<33?(r(),l("div",H)):e.barWidth>=33?(r(),l("div",G)):c("",!0),t("div",{class:d(["d-flex flex-column align-items-center",{orderStatus:e.barWidth===33}])},[t("i",{class:d(["bi bi-truck fs-1",{"text-blue":e.barWidth>=33}])},null,2),t("h5",{class:d(["fw-bold",{"text-blue":e.barWidth>=33}]),style:{"white-space":"nowrap"}},"運送中",2)],2),e.barWidth<66?(r(),l("div",I)):e.barWidth>=66?(r(),l("div",J)):c("",!0),t("div",{class:d(["d-flex flex-column align-items-center",{orderStatus:e.barWidth===66}])},[t("i",{class:d(["bi bi-house-check fs-1",{"text-blue":e.barWidth>=66}])},null,2),t("h5",{class:d(["fw-bold",{"text-blue":e.barWidth>=66}]),style:{"white-space":"nowrap"}},"已抵達",2)],2),e.barWidth<100?(r(),l("div",K)):e.barWidth===100?(r(),l("div",Q)):c("",!0),t("div",{class:d(["d-flex flex-column align-items-center",{"orderStatus-finished":e.barWidth===100}])},[t("i",{class:d(["bi bi-clipboard-check fs-1",{"text-blue":e.barWidth===100}])},null,2),t("h5",{class:d(["fw-bold",{"text-blue":e.barWidth===100}]),style:{"white-space":"nowrap"}},"訂單完成",2)],2)]),t("div",X,[t("div",Y,[Z,e.order.cart?(r(),l("div",$,[t("div",tt,[t("div",et,[(r(!0),l(T,null,S(e.order.cart.items,(o,x)=>(r(),l("div",{class:"col-12",key:x+756345},[t("div",st,[t("div",ot,[t("div",lt,[t("img",{src:o.product.imgUrl,class:"img-fluid rounded-start",style:{"object-fit":"cover",height:"100px",width:"200px"}},null,8,rt)]),t("div",it,[t("div",dt,[t("h5",ct,[n(s(o.product.title)+" ",1),t("span",nt,"x "+s(i.numberComma(o.qty)),1)]),t("div",at,[t("del",{class:d(["me-2 text-muted mt-1",{"d-none":!o.product.isCheaper}]),style:{"font-size":"14px"}},"NT$ "+s(i.numberComma(o.product.originalPrice)),3),t("span",ut,[t("span",{class:d({"text-danger":o.product.isCheaper,"fw-bold":o.product.isCheaper})},"NT$ "+s(i.numberComma(o.product.price)),3),n(" / "+s(o.product.num)+s(o.product.unit),1)]),ht]),o.product.category!=="組合包"?(r(),l("p",_t,"小計：NT$ "+s(i.numberComma(o.product.price*o.qty))+" / "+s(i.numberComma(o.product.num*o.qty))+s(o.product.unit),1)):c("",!0),o.product.category==="組合包"?(r(),l("p",mt,"小計：NT$ "+s(i.numberComma(o.product.price*o.qty))+" / "+s(i.numberComma(o.qty))+"組",1)):c("",!0)])])])]),bt]))),128))])]),t("div",pt,[t("table",ft,[t("thead",null,[t("tr",null,[xt,e.order.cart?(r(),l("th",gt,"NT$ "+s(i.numberComma(e.order.cart.total)),1)):c("",!0)])]),t("tbody",null,[t("tr",null,[t("td",null,[n("運費"),e.order.cart.total>=1e3?(r(),l("span",yt,"(滿千元免運)")):c("",!0)]),e.order.cart?(r(),l("td",vt,"NT$ "+s(e.order.cart.deliveryCharge),1)):c("",!0)]),e.order.cart.total+e.order.cart.deliveryCharge!==e.order.cart.finalTotal&&e.order.cart.coupon?(r(),l("tr",wt,[kt,t("td",Ct,"- NT$ "+s(i.numberComma(Math.ceil(e.order.cart.total*(e.order.cart.coupon.discount/100)))),1)])):c("",!0),t("tr",Wt,[Nt,t("td",Lt,"NT$ "+s(i.numberComma(e.order.cart.finalTotal)),1)])])])])])):c("",!0)]),t("div",Tt,[St,t("table",Dt,[t("thead",null,[t("tr",null,[qt,t("th",Bt,s(e.order.email),1)])]),t("tbody",null,[t("tr",null,[Vt,t("td",null,s(e.order.name),1)]),t("tr",null,[At,t("td",null,s(e.order.phoneNum),1)]),t("tr",null,[Mt,t("td",null,s(e.order.address),1)]),Ot,t("tr",null,[Pt,t("td",null,s(e.order.message===""?"無":e.order.message),1)])])])])])])])])}const Jt=L(D,[["render",Rt]]);export{Jt as default};
