import{m as x}from"./modalMixin-1ccdf387.js";import{u as I,r as y,p as U,s as E,d as f,b as g,c as V,e as S}from"./carts-e36b449b.js";import{f as C}from"./index-fc788f37.js";import{l as u,k as N,v as R}from"./runtime-dom.esm-bundler-5f84711a.js";import{_ as D,o as i,c as n,b as t,ak as L,bk as p,F as h,aY as _,b7 as r,ao as v,r as k,a as M}from"./_plugin-vue_export-helper-f96b5234.js";import"./base-component-2499946e.js";const T={data(){return{tempLottery:{rules:[],prizes:[],isEnabled:!1,recipes:[]},lotteryId:"",obj:{id:"",title:"",price:"",img:""},status:"edit",startDate:"",dueDate:""}},mixins:[x],props:["id","openModal","recipes"],methods:{...C(V,["toastMessage"]),updateLottery(){if(this.tempLottery.startDate=new Date(this.startDate).getTime(),this.tempLottery.dueDate=new Date(this.dueDate).getTime(),!this.tempLottery.prizes||!this.tempLottery.rules||!this.tempLottery.recipes||!this.tempLottery.startDate||!this.tempLottery.dueDate||!this.tempLottery.name){this.toastMessage("資料沒寫完","error");return}if(this.tempLottery.recipes.length!==3){this.toastMessage("食譜必須要選3個","error");return}if(this.status==="edit")I(y(f),{[`lotteries/${this.lotteryId}/`]:{startDate:this.tempLottery.startDate,dueDate:this.tempLottery.dueDate,isEnabled:this.tempLottery.isEnabled,prizes:this.tempLottery.prizes,rules:this.tempLottery.rules,name:this.tempLottery.name,recipes:this.tempLottery.recipes}}),this.toastMessage("更改成功");else if(this.status==="new"){const d=y(f,"lotteries/"),s=U(d);this.tempLottery.isEnabled||(this.tempLottery.isEnabled=!1),E(s,{startDate:this.tempLottery.startDate,dueDate:this.tempLottery.dueDate,isEnabled:this.tempLottery.isEnabled,prizes:this.tempLottery.prizes,rules:this.tempLottery.rules,name:this.tempLottery.name,recipes:this.tempLottery.recipes}),this.toastMessage("新增成功")}this.hide()}},mounted(){},watch:{id(){if(this.id!=="new"&&this.id!==""){const d=y(f,`lotteries/${this.id}`);g(d,s=>{if(this.tempLottery=s.val(),this.tempLottery.id=this.id,!this.tempLottery){this.hide();return}this.dueDate=new Date(this.tempLottery.dueDate).toISOString().split("T")[0],this.startDate=new Date(this.tempLottery.startDate).toISOString().split("T")[0],this.show(),this.status="edit",this.lotteryId=this.id,this.openModal("")})}else this.id==="new"&&(this.tempLottery={rules:[],prizes:[],isEnabled:!1,recipes:[]},this.show(),this.status="new",this.openModal(""))}}},O={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},j={class:"modal-dialog modal-xl"},z={class:"modal-content"},B={class:"modal-header bg-dark"},A={class:"modal-title text-white",id:"exampleModalLabel"},F={key:0},P={key:1},Y=t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),q={class:"modal-body"},G={class:"row gy-3"},H={class:"col-lg-2"},J=t("label",{for:"serialNumber",class:"form-label"},"編號（id）",-1),K={class:"col-lg-4"},Q=t("label",{for:"title",class:"form-label"},"優惠券名稱",-1),W={class:"col-lg-3"},X=t("label",{for:"date",class:"form-label"},"起始日",-1),Z={class:"col-lg-3"},$=t("label",{for:"date",class:"form-label"},"到期日",-1),tt={class:"col-lg-4"},et=t("label",{for:"date",class:"form-label"},"選擇抽獎食譜",-1),st=["value"],ot={key:0},lt={class:"col-lg-8"},it={for:"description",class:"form-label"},nt=["onUpdate:modelValue"],at=["onClick"],rt={class:"mt-3"},dt={class:"col-12"},ct=t("h3",null,"獎品",-1),mt={class:"col-lg-1"},pt=t("label",{for:"number",class:"form-label"},"序號：",-1),ut=["onUpdate:modelValue"],ht={class:"col-lg-2"},_t=t("label",{for:"name",class:"form-label"},"名稱：",-1),bt=["onUpdate:modelValue"],yt={class:"col-lg-2"},ft=t("label",{for:"price",class:"form-label"},"價格：",-1),Lt=["onUpdate:modelValue"],gt={class:"col-lg-7"},vt=t("label",{for:"img",class:"form-label"},"圖片網址：",-1),Dt=["onUpdate:modelValue"],wt={class:"d-flex mt-2"},kt=["onClick"],Mt={class:"col-12"},xt={class:"form-check"},Vt=t("label",{class:"form-check-label",for:"isEnabled"}," 是否啟用 ",-1),Ct={class:"modal-footer"},It=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),Ut={key:0},Et={key:1};function St(d,s,c,w,o,m){return i(),n("div",O,[t("div",j,[t("div",z,[t("div",B,[t("h5",A,[o.status==="edit"?(i(),n("span",F,"編輯抽獎內容")):o.status==="new"?(i(),n("span",P,"新增抽獎內容")):L("",!0)]),Y]),t("div",q,[t("div",G,[t("div",H,[J,p(t("input",{type:"text",id:"serialNumber",class:"form-control","onUpdate:modelValue":s[0]||(s[0]=e=>o.tempLottery.id=e),disabled:""},null,512),[[u,o.tempLottery.id]])]),t("div",K,[Q,p(t("input",{type:"text",id:"title",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=e=>o.tempLottery.name=e)},null,512),[[u,o.tempLottery.name]])]),t("div",W,[X,p(t("input",{type:"date",id:"date",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=e=>o.startDate=e)},null,512),[[u,o.startDate]])]),t("div",Z,[$,p(t("input",{type:"date",id:"date",class:"form-control","onUpdate:modelValue":s[3]||(s[3]=e=>o.dueDate=e)},null,512),[[u,o.dueDate]])]),t("div",tt,[et,p(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":s[4]||(s[4]=e=>o.tempLottery.recipes=e),multiple:""},[(i(!0),n(h,null,_(c.recipes,e=>(i(),n("option",{value:e,key:e.id},r(e.title),9,st))),128))],512),[[N,o.tempLottery.recipes]]),t("ol",null,[(i(!0),n(h,null,_(o.tempLottery.recipes,e=>(i(),n("li",{key:e.id},[t("h3",null,r(e.title),1),(i(!0),n(h,null,_(e.relativeProducts,(a,l)=>(i(),n("div",{key:a.id},[a.category!=="組合包"?(i(),n("p",ot,r(l+1)+". "+r(a.title),1)):L("",!0)]))),128))]))),128))])]),t("div",lt,[(i(!0),n(h,null,_(o.tempLottery.rules,(e,a)=>(i(),n("div",{key:a,class:"mb-4"},[t("label",it,"抽獎券規則"+r(a+1),1),p(t("textarea",{class:"form-control",cols:"10",rows:"3","onUpdate:modelValue":l=>o.tempLottery.rules[a]=l},null,8,nt),[[u,o.tempLottery.rules[a]]]),t("button",{type:"button",class:"btn btn-danger mt-2",onClick:()=>o.tempLottery.rules.splice(a,1)},"刪除規則",8,at)]))),128)),t("div",rt,[t("button",{type:"button",class:"btn btn-primary",onClick:s[5]||(s[5]=()=>o.tempLottery.rules.push(""))},"新增規則")])]),t("div",dt,[ct,(i(!0),n(h,null,_(o.tempLottery.prizes,(e,a)=>(i(),n("div",{class:"row",key:a+500},[t("h5",null,"獎品"+r(a+1),1),t("div",mt,[pt,p(t("input",{type:"text",id:"number",class:"form-control","onUpdate:modelValue":l=>e.id=l},null,8,ut),[[u,e.id,void 0,{number:!0}]])]),t("div",ht,[_t,p(t("input",{type:"text",id:"name",class:"form-control","onUpdate:modelValue":l=>e.title=l},null,8,bt),[[u,e.title]])]),t("div",yt,[ft,p(t("input",{type:"text",id:"price",class:"form-control","onUpdate:modelValue":l=>e.price=l},null,8,Lt),[[u,e.price,void 0,{number:!0}]])]),t("div",gt,[vt,p(t("input",{type:"text",id:"img",class:"form-control","onUpdate:modelValue":l=>e.img=l},null,8,Dt),[[u,e.img]])]),t("div",wt,[t("button",{type:"button",class:"ms-auto btn btn-danger",onClick:()=>o.tempLottery.prizes.splice(a,1)},"刪除獎品",8,kt)])]))),128)),t("button",{type:"button",class:"btn btn-primary",onClick:s[6]||(s[6]=()=>o.tempLottery.prizes.push({id:"",title:"",price:"",img:""}))},"新增獎品")]),t("div",Mt,[t("div",xt,[p(t("input",{class:"form-check-input",type:"checkbox",value:"","v-true":1,"v-false":0,id:"isEnabled","onUpdate:modelValue":s[7]||(s[7]=e=>o.tempLottery.isEnabled=e)},null,512),[[R,o.tempLottery.isEnabled]]),Vt])])])]),t("div",Ct,[It,t("button",{type:"button",class:"btn btn-primary",onClick:s[8]||(s[8]=(...e)=>m.updateLottery&&m.updateLottery(...e))},[o.status==="edit"?(i(),n("span",Ut,"確認編輯")):o.status==="new"?(i(),n("span",Et,"確認新增")):L("",!0)])])])])],512)}const Nt=D(T,[["render",St]]),Rt={data(){return{tempLottery:{},deleteId:""}},mixins:[x],props:["id","openDeleteModal","item"],methods:{...C(V,["toastMessage"]),deleteLottery(){S(y(f,`lotteries/${this.deleteId}`)),this.toastMessage("刪除優惠券"),this.hide()}},watch:{id(){this.id&&(this.show(),this.tempLottery=this.item,this.deleteId=this.id,this.openDeleteModal("",""))}}},Tt={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Ot={class:"modal-dialog"},jt={class:"modal-content"},zt=t("div",{class:"modal-header bg-dark"},[t("h5",{class:"modal-title text-white",id:"exampleModalLabel"}," 刪除優惠券 "),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Bt={class:"modal-body"},At={class:"text-danger fw-bold"},Ft={class:"modal-footer"},Pt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function Yt(d,s,c,w,o,m){return i(),n("div",Tt,[t("div",Ot,[t("div",jt,[zt,t("div",Bt,[t("p",null,[v("確定要刪除優惠券 "),t("span",At," 【"+r(o.tempLottery.name)+"】 ",1),v(" 嗎? ")])]),t("div",Ft,[Pt,t("button",{type:"button",class:"btn btn-danger",onClick:s[0]||(s[0]=(...e)=>m.deleteLottery&&m.deleteLottery(...e))}," 確認刪除 ")])])])],512)}const qt=D(Rt,[["render",Yt]]),Gt={components:{DrawingModal:Nt,DeleteDrawingModal:qt},data(){return{lotteries:[],recipes:[],lotteryId:"",lotteryDeleteId:"",lotteryDeleteItem:{}}},methods:{getLotteries(){const d=y(f,"lotteries/");g(d,s=>{this.lotteries=s.val(),this.lotteries=Object.entries(this.lotteries).map(c=>(c[1].id=c[0],c[1])),console.log(this.lotteries,"後台抽獎")})},getRecipes(){const d=y(f,"recipes/");g(d,s=>{this.recipes=s.val(),this.recipes=Object.entries(this.recipes).map(c=>(c[1].id=c[0],c[1])),console.log(this.recipes,"後台食譜")})},openModal(d){this.lotteryId=d},openDeleteModal(d,s){this.lotteryDeleteId=d,this.lotteryDeleteItem=s}},mounted(){this.getLotteries(),this.getRecipes()}},Ht={class:"container"},Jt={class:"d-flex my-4"},Kt={class:"table text-center",style:{"vertical-align":"middle"}},Qt=t("thead",null,[t("tr",null,[t("th",null,"編號"),t("th",null,"名稱"),t("th",null,"規則"),t("th",null,"獎品"),t("th",null,"抽獎指定食譜"),t("th",null,"起始日"),t("th",null,"到期日"),t("th",null,"是否啟用"),t("th",null,"編輯")])],-1),Wt={style:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis","max-width":"250px"}},Xt={class:"btn-group"},Zt=["onClick"],$t=["onClick"];function te(d,s,c,w,o,m){const e=k("DrawingModal"),a=k("DeleteDrawingModal");return i(),n("div",Ht,[t("div",Jt,[t("button",{type:"button",class:"ms-auto btn btn-primary",onClick:s[0]||(s[0]=l=>m.openModal("new"))},"建立新抽獎券")]),t("table",Kt,[Qt,t("tbody",null,[(i(!0),n(h,null,_(o.lotteries,l=>(i(),n("tr",{key:l.id},[t("td",null,r(l.id),1),t("td",null,r(l.name),1),t("td",Wt,r(l.rules.toString()),1),t("td",null,[(i(!0),n(h,null,_(l.prizes,b=>(i(),n(h,{key:b.id+4569},[v(r(b.title),1)],64))),128))]),t("td",null,[(i(!0),n(h,null,_(l.recipes,b=>(i(),n("div",{key:b.id},r(b.title),1))),128))]),t("td",null,r(new Date(l.startDate).toLocaleString().split(" ")[0]),1),t("td",null,r(new Date(l.dueDate).toLocaleString().split(" ")[0]),1),t("td",null,r(l.isEnabled?"是":"否"),1),t("td",null,[t("div",Xt,[t("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:b=>m.openModal(l.id)},"編輯",8,Zt),t("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:b=>m.openDeleteModal(l.id,l)},"刪除",8,$t)])])]))),128))])]),M(e,{ref:"productModal",id:o.lotteryId,"open-modal":m.openModal,recipes:o.recipes},null,8,["id","open-modal","recipes"]),M(a,{ref:"deleteProductModal",id:o.lotteryDeleteId,item:o.lotteryDeleteItem,"open-delete-modal":m.openDeleteModal},null,8,["id","item","open-delete-modal"])])}const ae=D(Gt,[["render",te]]);export{ae as default};
