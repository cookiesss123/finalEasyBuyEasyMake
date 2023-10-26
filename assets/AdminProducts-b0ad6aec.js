import{m as w}from"./modalMixin-06b4756c.js";import{u as D,r as h,p as I,s as S,d as _,b as P,c as k,e as T}from"./carts-18eb5781.js";import{f as V}from"./index-9f8e1fb0.js";import{l as p,k as x,v as N}from"./runtime-dom.esm-bundler-eb0e3820.js";import{b6 as y,aj as r,l as d,m as t,k as b,b3 as n,F as f,at as g,aJ as a,s as v,av as M,t as C,a3 as L}from"./_plugin-vue_export-helper-68081c38.js";import"./base-component-9dfae801.js";const j={data(){return{tempProduct:{relevantRecipes:[],imgsUrl:[],isCheaper:!1},status:"edit",productId:""}},mixins:[w],props:["id","openModal","recipes"],methods:{...V(k,["toastMessage"]),updateProduct(){if(!this.tempProduct.category||!this.tempProduct.description||!this.tempProduct.imgUrl||!this.tempProduct.imgsUrl||!this.tempProduct.num||!this.tempProduct.title||!this.tempProduct.originalPrice||!this.tempProduct.price||!this.tempProduct.relevantRecipes||!this.tempProduct.unit){this.toastMessage("資料沒寫完","error");return}if(this.status==="edit"){if(!this.tempProduct.price){this.toastMessage("還沒填寫組合價","error");return}D(h(_),{[`products/${this.productId}/`]:{category:this.tempProduct.category,description:this.tempProduct.description,imgUrl:this.tempProduct.imgUrl,imgsUrl:this.tempProduct.imgsUrl,isCheaper:this.tempProduct.isCheaper,num:this.tempProduct.num,originalPrice:this.tempProduct.originalPrice,price:this.tempProduct.price,relevantRecipes:this.tempProduct.relevantRecipes,title:this.tempProduct.title,unit:this.tempProduct.unit}}),this.toastMessage("更改成功","success")}else if(this.status==="new"){const i=h(_,"products/"),s=I(i);S(s,{category:this.tempProduct.category,description:this.tempProduct.description,imgUrl:this.tempProduct.imgUrl,imgsUrl:this.tempProduct.imgsUrl,isCheaper:this.tempProduct.isCheaper,num:this.tempProduct.num,originalPrice:this.tempProduct.originalPrice,price:this.tempProduct.price,relevantRecipes:this.tempProduct.relevantRecipes,title:this.tempProduct.title,unit:this.tempProduct.unit}),this.toastMessage("新增成功","success")}this.hide()}},watch:{id(){if(this.id!=="new"&&this.id!==""){const i=h(_,`products/${this.id}`);P(i,s=>{this.tempProduct=s.val(),this.id&&(this.tempProduct.id=this.id),this.tempProduct.imgsUrl||(this.tempProduct.imgsUrl=[]),this.tempProduct.isCheaper||(this.tempProduct.isCheaper=!1),this.show(),this.status="edit",this.productId=this.id,this.openModal("")})}else this.id==="new"&&(this.tempProduct={relevantRecipes:[],isCheaper:!1,imgsUrl:[]},this.show(),this.status="new",this.openModal(""))}}},B={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},A={class:"modal-dialog modal-xl"},F={class:"modal-content"},O={class:"modal-header bg-dark"},z={class:"modal-title text-white",id:"exampleModalLabel"},E={key:0},J={key:1},q=t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),G={class:"modal-body"},H={class:"row"},K={class:"col-lg-4"},Q=t("label",{for:"mainPic",class:"form-label"},"主圖網址",-1),W=["src"],X=t("hr",null,null,-1),Y=t("label",{for:"subPic",class:"form-label"},"副圖網址",-1),Z=["onUpdate:modelValue"],$=["src"],tt={class:"d-flex"},et=["onClick"],st={key:0,class:"d-flex mt-4"},ot={class:"col-lg-8"},lt={class:"row gy-3"},it={class:"col-lg-2"},rt=t("label",{for:"serialNumber",class:"form-label"},"編號（id）",-1),dt={class:"col-lg-3"},ct=t("label",{for:"category",class:"form-label"},"產品分類",-1),nt=t("option",{value:"單一產品"},"單一產品",-1),at=t("option",{value:"組合包"},"組合包",-1),ut=[nt,at],pt={class:"col-lg-7"},mt=t("label",{for:"title",class:"form-label"},"產品名稱",-1),ht={class:"col-lg-3"},_t=t("label",{for:"content",class:"form-label"},"數量",-1),bt={class:"col-lg-3"},Pt=t("label",{for:"content",class:"form-label"},"單位",-1),ft={class:"col-lg-3"},gt=t("label",{for:"price",class:"form-label"},"喊得很高的原價",-1),vt={class:"col-lg-3"},yt=t("label",{for:"price",class:"form-label"},"真實價格",-1),Ut={class:"col-12"},xt={class:"form-check"},Mt=t("label",{class:"form-check-label",for:"isCheaper"}," 是否打折 ",-1),Ct={class:"col-12"},wt=t("label",{for:"description",class:"form-label"},"產品描述",-1),kt={class:"col-12"},Vt=t("label",{for:"price",class:"form-label"},"關聯食譜",-1),Rt=["value"],Dt={class:"modal-footer"},It=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),St={key:0},Tt={key:1};function Nt(i,s,u,U,e,c){return r(),d("div",B,[t("div",A,[t("div",F,[t("div",O,[t("h5",z,[e.status==="edit"?(r(),d("span",E,"編輯產品內容")):e.status==="new"?(r(),d("span",J,"新增產品內容")):b("",!0)]),q]),t("div",G,[t("div",H,[t("div",K,[Q,n(t("input",{type:"text",id:"mainPic",class:"form-control mb-3","onUpdate:modelValue":s[0]||(s[0]=o=>e.tempProduct.imgUrl=o)},null,512),[[p,e.tempProduct.imgUrl]]),t("img",{src:e.tempProduct.imgUrl,alt:"",width:"300"},null,8,W),X,(r(!0),d(f,null,g(e.tempProduct.imgsUrl,(o,m)=>(r(),d("div",{key:o+3453},[Y,n(t("input",{type:"text",id:"subPic",class:"form-control mb-3","onUpdate:modelValue":l=>e.tempProduct.imgsUrl[m]=l},null,8,Z),[[p,e.tempProduct.imgsUrl[m]]]),t("img",{src:e.tempProduct.imgsUrl[m],alt:"",width:"300"},null,8,$),t("div",tt,[t("button",{type:"button",class:"ms-auto btn btn-danger",onClick:()=>e.tempProduct.imgsUrl.splice(m,1)},"刪除圖片",8,et)])]))),128)),e.tempProduct.imgsUrl[e.tempProduct.imgsUrl.length-1]!==""?(r(),d("div",st,[t("button",{type:"button",class:"ms-auto btn btn-primary",onClick:s[1]||(s[1]=()=>e.tempProduct.imgsUrl.push(""))},"新增圖片")])):b("",!0)]),t("div",ot,[t("div",lt,[t("div",it,[rt,n(t("input",{type:"text",id:"serialNumber",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=o=>e.tempProduct.id=o),disabled:""},null,512),[[p,e.tempProduct.id]])]),t("div",dt,[ct,n(t("select",{name:"",class:"form-select",id:"category","onUpdate:modelValue":s[3]||(s[3]=o=>e.tempProduct.category=o)},ut,512),[[x,e.tempProduct.category]])]),t("div",pt,[mt,n(t("input",{type:"text",id:"title",class:"form-control","onUpdate:modelValue":s[4]||(s[4]=o=>e.tempProduct.title=o)},null,512),[[p,e.tempProduct.title]])]),t("div",ht,[_t,n(t("input",{type:"text",id:"content",class:"form-control","onUpdate:modelValue":s[5]||(s[5]=o=>e.tempProduct.num=o)},null,512),[[p,e.tempProduct.num,void 0,{number:!0}]])]),t("div",bt,[Pt,n(t("input",{type:"text",id:"content",class:"form-control","onUpdate:modelValue":s[6]||(s[6]=o=>e.tempProduct.unit=o)},null,512),[[p,e.tempProduct.unit]])]),t("div",ft,[gt,n(t("input",{type:"text",id:"price",class:"form-control","onUpdate:modelValue":s[7]||(s[7]=o=>e.tempProduct.originalPrice=o)},null,512),[[p,e.tempProduct.originalPrice,void 0,{number:!0}]])]),t("div",vt,[yt,n(t("input",{type:"text",id:"price",class:"form-control","onUpdate:modelValue":s[8]||(s[8]=o=>e.tempProduct.price=o)},null,512),[[p,e.tempProduct.price,void 0,{number:!0}]])]),t("div",Ut,[t("div",xt,[n(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"isCheaper","onUpdate:modelValue":s[9]||(s[9]=o=>e.tempProduct.isCheaper=o)},null,512),[[N,e.tempProduct.isCheaper]]),Mt])]),t("div",Ct,[wt,n(t("textarea",{name:"",id:"description",cols:"30",rows:"10",class:"form-control","onUpdate:modelValue":s[10]||(s[10]=o=>e.tempProduct.description=o)},null,512),[[p,e.tempProduct.description]])]),t("div",kt,[Vt,n(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":s[11]||(s[11]=o=>e.tempProduct.relevantRecipes=o),multiple:""},[(r(!0),d(f,null,g(u.recipes,o=>(r(),d("option",{key:o+4534534,value:o.title},a(o.title),9,Rt))),128))],512),[[x,e.tempProduct.relevantRecipes]]),v(" "+a(e.tempProduct.relevantRecipes),1)])])])])]),t("div",Dt,[It,t("button",{type:"button",class:"btn btn-primary",onClick:s[12]||(s[12]=(...o)=>c.updateProduct&&c.updateProduct(...o))},[e.status==="edit"?(r(),d("span",St,"確認編輯")):e.status==="new"?(r(),d("span",Tt,"確認新增")):b("",!0)])])])])],512)}const Lt=y(j,[["render",Nt]]),jt={data(){return{deleteId:"",tempProduct:{}}},mixins:[w],props:["id","openDeleteModal","item"],methods:{...V(k,["toastMessage"]),deleteProdcut(){T(h(_,`products/${this.deleteId}/`)),this.toastMessage("刪除食譜"),this.hide()}},watch:{id(){this.id&&(this.show(),this.tempProduct=this.item,this.deleteId=this.id,this.openDeleteModal("",""))}}},Bt={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},At={class:"modal-dialog"},Ft={class:"modal-content"},Ot=t("div",{class:"modal-header bg-dark"},[t("h5",{class:"modal-title text-white",id:"exampleModalLabel"}," 刪除產品 "),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),zt={class:"modal-body"},Et={class:"text-danger fw-bold"},Jt={class:"modal-footer"},qt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function Gt(i,s,u,U,e,c){return r(),d("div",Bt,[t("div",At,[t("div",Ft,[Ot,t("div",zt,[t("p",null,[v("確定要刪除產品 "),t("span",Et," 【"+a(e.tempProduct.title)+"】 ",1),v(" 嗎? ")])]),t("div",Jt,[qt,t("button",{type:"button",class:"btn btn-danger",onClick:s[0]||(s[0]=(...o)=>c.deleteProdcut&&c.deleteProdcut(...o))}," 確認刪除 ")])])])],512)}const Ht=y(jt,[["render",Gt]]),Kt={components:{ProductModal:Lt,DeleteProductModal:Ht},data(){return{products:[],recipes:[],productId:"",productDeleteItem:{},productDeleteId:"",selectCategory:"全部",tempSearchTitle:""}},computed:{search(){return this.products.filter(i=>i.title.match(this.tempSearchTitle))}},methods:{getProducts(){const i=h(_,"products/");P(i,s=>{this.products=s.val(),this.products=Object.entries(this.products).map(u=>(u[1].id=u[0],u[1])),console.log(this.products,"後台產品")})},getRecipes(){const i=h(_,"recipes/");P(i,s=>{this.recipes=s.val(),this.recipes=Object.entries(this.recipes).map(u=>(u[1].id=u[0],u[1])),console.log(this.recipes,"後台食譜")})},openModal(i){this.productId=i},openDeleteModal(i,s){this.productDeleteId=i,this.productDeleteItem=s}},mounted(){this.getProducts(),this.getRecipes()}},Qt={class:"container"},Wt={class:"d-flex my-4"},Xt={class:"row mb-4"},Yt={class:"col-3"},Zt=t("label",{for:"searchProductTitle"},"搜尋產品名稱",-1),$t={class:"table text-center",style:{"vertical-align":"middle"}},te=t("thead",null,[t("tr",null,[t("th",null,"產品編號"),t("th",null,"分類"),t("th",null,"產品名稱"),t("th",null,"相關食譜"),t("th",null,"內容物"),t("th",null,"原價"),t("th",null,"價格"),t("th",null,"是否打折"),t("th",null,"編輯")])],-1),ee={style:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis","max-width":"400px"}},se={class:"text-success"},oe={class:"btn-group"},le=["onClick"],ie=["onClick"];function re(i,s,u,U,e,c){const o=M("ProductModal"),m=M("DeleteProductModal");return r(),d("div",Qt,[t("div",Wt,[t("button",{type:"button",class:"ms-auto btn btn-primary",onClick:s[0]||(s[0]=l=>c.openModal("new"))},"建立新產品")]),t("div",Xt,[t("div",Yt,[Zt,n(t("input",{type:"text",id:"searchProductTitle",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=l=>e.tempSearchTitle=l)},null,512),[[p,e.tempSearchTitle]])])]),t("table",$t,[te,t("tbody",null,[(r(!0),d(f,null,g(c.search,l=>(r(),d("tr",{key:l.id},[t("td",null,a(l.id),1),t("td",null,a(l.category),1),t("td",null,a(l.title),1),t("td",ee,a(l.relevantRecipes.toString()),1),t("td",null,a(l.num)+" "+a(l.unit),1),t("td",null,a(l.originalPrice),1),t("td",se,a(l.price),1),t("td",{class:L({"text-success":l.isCheaper,"fw-bold":l.isCheaper})},a(`${l.isCheaper?"是":"否"}`),3),t("td",null,[t("div",oe,[t("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:R=>c.openModal(l.id)},"編輯",8,le),t("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:R=>c.openDeleteModal(l.id,l)},"刪除",8,ie)])])]))),128))])]),C(o,{ref:"productModal",id:e.productId,recipes:e.recipes,"open-modal":c.openModal,"get-products":c.getProducts},null,8,["id","recipes","open-modal","get-products"]),C(m,{ref:"deleteProductModal",id:e.productDeleteId,item:e.productDeleteItem,"open-delete-modal":c.openDeleteModal},null,8,["id","item","open-delete-modal"])])}const me=y(Kt,[["render",re]]);export{me as default};
