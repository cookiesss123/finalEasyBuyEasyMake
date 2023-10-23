import{m as M}from"./modalMixin-1ccdf387.js";import{u as b,r as _,d as p,b as $,c as w,e as C}from"./carts-e36b449b.js";import{f as D}from"./index-fc788f37.js";import{k as V,v as S}from"./runtime-dom.esm-bundler-5f84711a.js";import{_ as O,o as r,c,b as t,b7 as l,bk as y,ak as g,F as f,aY as v,ao as u,r as x,a as k}from"./_plugin-vue_export-helper-f96b5234.js";import"./base-component-2499946e.js";const L={data(){return{tempOrder:{},orderId:"",customerId:""}},mixins:[M],props:["id","uid","openModal"],methods:{...D(w,["toastMessage"]),updateOrder(){b(_(p),{[`orders/${this.customerId}/${this.orderId}/deliveryStatus/`]:this.tempOrder.deliveryStatus,[`orders/${this.customerId}/${this.orderId}/paymentStatus/`]:this.tempOrder.paymentStatus,[`orders/${this.customerId}/${this.orderId}/payDate/`]:new Date().getTime()}),this.toastMessage("更改成功"),this.hide()}},mounted(){},watch:{id(){if(this.id){const d=_(p,`orders/${this.uid}/${this.id}`);$(d,s=>{if(this.tempOrder=s.val(),this.tempOrder.id=this.id,!this.tempOrder){this.hide();return}this.show(),this.orderId=this.id,this.customerId=this.uid,this.openModal("","")})}}}},N={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},T={class:"modal-dialog modal-xl"},j={class:"modal-content"},A=t("div",{class:"modal-header bg-dark"},[t("h5",{class:"modal-title text-white",id:"exampleModalLabel"},[t("span",null,"編輯訂單內容")]),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},B={class:"row"},q={class:"col-lg-4"},F={class:"row gy-3"},P={class:"col-12"},R={class:"mb-0"},E={class:"col-12"},Y=t("h3",null,"訂購人資訊",-1),z={class:"table table-borderless text-primary"},G=t("th",{class:"fw-normal"},[t("i",{class:"bi bi-envelope-fill"}),u(" 信箱")],-1),H={class:"fw-normal"},J=t("td",null,[t("i",{class:"bi bi-person-fill"}),u(" 收件人姓名")],-1),K=t("td",null,[t("i",{class:"bi bi-telephone-fill"}),u(" 收件人電話")],-1),Q=t("td",null,[t("i",{class:"bi bi-house-fill"}),u(" 收件人地址")],-1),W=t("tr",null,[t("td",null,[t("i",{class:"bi bi-wallet-fill"}),u(" 付款方式")]),t("td",null,"貨到付款")],-1),X=t("td",null,[t("i",{class:"bi bi-chat-left-text-fill"}),u(" 留言")],-1),Z={class:"col-lg-8"},tt={class:"row"},et={class:"col-12"},st=t("h3",null,"訂單資訊",-1),lt={class:"table table-borderless"},ot=t("th",{class:"fw-normal"},"訂單建立時間 ",-1),dt={class:"fw-normal"},nt=t("td",null,"運送狀態",-1),at=t("option",{value:"待出貨"},"待出貨",-1),it=t("option",{value:"運送中"},"運送中",-1),rt=t("option",{value:"待取貨"},"待取貨",-1),ct=t("option",{value:"訂單完成"},"訂單完成",-1),ut=[at,it,rt,ct],ht=t("td",null,"付款金額",-1),mt={key:0},_t=t("td",null,"付款狀態",-1),pt={class:"form-check"},bt=t("label",{class:"form-check-label",for:"paymentStatus"}," 是否付款 ",-1),yt=t("td",null,"付款時間",-1),ft={class:"col-12"},vt=t("h3",null,"選購商品",-1),Ot={class:"table table-borderless text-primary"},gt={key:0},xt={class:"modal-footer"},kt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),Mt=t("span",null,"確認編輯",-1),$t=[Mt];function wt(d,s,n,h,e,i){return r(),c("div",N,[t("div",T,[t("div",j,[A,t("div",U,[t("div",B,[t("div",q,[t("div",F,[t("div",P,[t("p",R,"編號（id）："+l(e.tempOrder.id),1)]),t("div",E,[Y,t("table",z,[t("thead",null,[t("tr",null,[G,t("th",H,l(e.tempOrder.email),1)])]),t("tbody",null,[t("tr",null,[J,t("td",null,l(e.tempOrder.name),1)]),t("tr",null,[K,t("td",null,l(e.tempOrder.phoneNum),1)]),t("tr",null,[Q,t("td",null,l(e.tempOrder.address),1)]),W,t("tr",null,[X,t("td",null,l(e.tempOrder.message),1)])])])])])]),t("div",Z,[t("div",tt,[t("div",et,[st,t("table",lt,[t("thead",null,[t("tr",null,[ot,t("th",dt,l(new Date(e.tempOrder.creatAt).toLocaleDateString()),1)])]),t("tbody",null,[t("tr",null,[nt,t("td",null,[y(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":s[0]||(s[0]=a=>e.tempOrder.deliveryStatus=a)},ut,512),[[V,e.tempOrder.deliveryStatus]])])]),t("tr",null,[ht,e.tempOrder.cart?(r(),c("td",mt,"NT$ "+l(e.tempOrder.cart.finalTotal),1)):g("",!0)]),t("tr",null,[_t,t("td",null,[t("div",pt,[y(t("input",{class:"form-check-input",type:"checkbox",id:"paymentStatus","onUpdate:modelValue":s[1]||(s[1]=a=>e.tempOrder.paymentStatus=a)},null,512),[[S,e.tempOrder.paymentStatus]]),bt])])]),t("tr",null,[yt,t("td",null,l(e.tempOrder.payDate?new Date(e.tempOrder.payDate).toLocaleDateString():"無"),1)])])])]),t("div",ft,[vt,t("table",Ot,[e.tempOrder.cart?(r(),c("tbody",gt,[(r(!0),c(f,null,v(e.tempOrder.cart.items,a=>(r(),c("tr",{key:a+986},[t("td",null,l(a.product.title),1),t("td",null,"NT$ "+l(a.product.price),1),t("td",null,l(a.qty)+" 份",1)]))),128))])):g("",!0)])])])])])]),t("div",xt,[kt,t("button",{type:"button",class:"btn btn-primary",onClick:s[2]||(s[2]=(...a)=>i.updateOrder&&i.updateOrder(...a))},$t)])])])],512)}const Dt=O(L,[["render",wt]]),St={data(){return{customerId:"",deleteId:""}},mixins:[M],props:["uid","id","openDeleteModal"],methods:{...D(w,["toastMessage"]),deleteOrder(){C(_(p,`orders/${this.customerId}/${this.deleteId}`)),this.toastMessage("刪除訂單"),this.hide()}},watch:{id(){this.id&&(this.show(),this.deleteId=this.id,this.customerId=this.uid,this.openDeleteModal("",""))}}},It={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ct={class:"modal-dialog"},Vt={class:"modal-content"},Lt=t("div",{class:"modal-header bg-dark"},[t("h5",{class:"modal-title text-white",id:"exampleModalLabel"}," 刪除訂單 "),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Nt={class:"modal-body"},Tt={class:"text-danger fw-bold"},jt={class:"modal-footer"},At=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function Ut(d,s,n,h,e,i){return r(),c("div",It,[t("div",Ct,[t("div",Vt,[Lt,t("div",Nt,[t("p",null,[u("確定要刪除此筆訂單 "),t("span",Tt," 【"+l(this.deleteId)+"】 ",1),u(" 嗎? ")])]),t("div",jt,[At,t("button",{type:"button",class:"btn btn-danger",onClick:s[0]||(s[0]=(...a)=>i.deleteOrder&&i.deleteOrder(...a))}," 確認刪除 ")])])])],512)}const Bt=O(St,[["render",Ut]]),qt={components:{OrderModal:Dt,DeleteOrderModal:Bt},data(){return{orders:[],orderId:"",uid:"",orderDeleteId:""}},methods:{getOrders(){const d=_(p,"orders/");$(d,s=>{let n=s.val();if(!n)return;let h=[];h=Object.values(n).map(e=>Object.keys(e)),h=h.flat(),n=Object.values(n).map((e,i)=>Object.values(e).map(a=>(a.uid=Object.keys(n)[i],a))),n=n.flat(),this.orders=n.map((e,i)=>(e.id=h[i],e)),console.log(n,"最終訂單")})},openModal(d,s){this.uid=d,this.orderId=s},openDeleteModal(d,s){this.uid=d,this.orderDeleteId=s},updatePaymentStatus(d,s,n){n?b(_(p),{[`orders/${d}/${s}/paymentStatus/`]:n,[`orders/${d}/${s}/deliveryStatus/`]:"訂單完成",[`orders/${d}/${s}/payDate/`]:new Date().getTime()}):n||b(_(p),{[`orders/${d}/${s}/paymentStatus/`]:n,[`orders/${d}/${s}/deliveryStatus/`]:"待取貨",[`orders/${d}/${s}/payDate/`]:""})}},mounted(){this.getOrders()}},Ft={class:"container"},Pt={class:"table text-center mt-4",style:{"vertical-align":"middle"}},Rt=t("thead",null,[t("tr",null,[t("th",null,"訂單編號"),t("th",null,"購買時間"),t("th",null,"收貨人"),t("th",null,"信箱"),t("th",null,"購買產品"),t("th",null,"應付金額"),t("th",null,"訂單狀態"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),Et={style:{overflow:"hidden","text-overflow":"ellipsis","max-height":"100px"}},Yt={class:"form-check form-switch"},zt=["onUpdate:modelValue","onChange"],Gt={class:"form-check-label",for:"pay"},Ht={class:"btn-group"},Jt=["onClick"],Kt=["onClick"];function Qt(d,s,n,h,e,i){const a=x("OrderModal"),I=x("DeleteOrderModal");return r(),c("div",Ft,[t("table",Pt,[Rt,t("tbody",null,[(r(!0),c(f,null,v(e.orders,o=>(r(),c("tr",{key:o.id+34564},[t("td",null,l(o.id),1),t("td",null,l(new Date(o.creatAt).toLocaleDateString()),1),t("td",null,l(o.name),1),t("td",null,l(o.email),1),t("td",null,[t("div",Et,[(r(!0),c(f,null,v(o.cart.items,m=>(r(),c("p",{key:m+366},l(m.product.title)+" x "+l(m.qty),1))),128))])]),t("td",null,l(o.cart.finalTotal),1),t("td",null,l(o.deliveryStatus),1),t("td",null,[t("div",Yt,[y(t("input",{class:"form-check-input",type:"checkbox",role:"switch",id:"pay","onUpdate:modelValue":m=>o.paymentStatus=m,onChange:()=>i.updatePaymentStatus(o.uid,o.id,o.paymentStatus)},null,40,zt),[[S,o.paymentStatus]]),t("label",Gt,l(o.paymentStatus?"已付款":"未付款"),1)])]),t("td",null,[t("div",Ht,[t("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:m=>i.openModal(o.uid,o.id)},"編輯",8,Jt),t("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:m=>i.openDeleteModal(o.uid,o.id)},"刪除",8,Kt)])])]))),128))])]),k(a,{ref:"orderModal",id:e.orderId,uid:e.uid,"open-modal":i.openModal},null,8,["id","uid","open-modal"]),k(I,{ref:"deleteOrderModal",id:e.orderDeleteId,uid:e.uid,"open-delete-modal":i.openDeleteModal},null,8,["id","uid","open-delete-modal"])])}const le=O(qt,[["render",Qt]]);export{le as default};
