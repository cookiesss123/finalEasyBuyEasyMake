import{m as w}from"./modalMixin-c1848f69.js";import{u as D,r as h,p as I,s as S,d as _,b as P,c as T}from"./db-143b9a4b.js";import{m as k}from"./index-966010aa.js";import{c as V}from"./carts-f2393f2b.js";import{v as p,b as x,a as N}from"./runtime-dom.esm-bundler-54ced388.js";import{_ as y,o as r,U as d,V as t,Z as b,$ as n,a1 as f,a2 as g,a0 as a,Y as v,W as M,r as C,a4 as L}from"./_plugin-vue_export-helper-03b40388.js";import"./modal-838a1639.js";import"./_commonjsHelpers-042e6b4d.js";import"./base-component-5a126788.js";import"./vue-router-2c21c692.js";const B={data(){return{tempProduct:{relevantRecipes:[],imgsUrl:[],isCheaper:!1},status:"edit",productId:""}},mixins:[w],props:["id","openModal","recipes"],methods:{...k(V,["toastMessage"]),updateProduct(){if(!this.tempProduct.category||!this.tempProduct.description||!this.tempProduct.imgUrl||!this.tempProduct.imgsUrl||!this.tempProduct.num||!this.tempProduct.title||!this.tempProduct.originalPrice||!this.tempProduct.price||!this.tempProduct.relevantRecipes||!this.tempProduct.unit){this.toastMessage("資料沒寫完","error");return}if(this.status==="edit"){if(!this.tempProduct.price){this.toastMessage("還沒填寫組合價","error");return}D(h(_),{[`products/${this.productId}/`]:{category:this.tempProduct.category,description:this.tempProduct.description,imgUrl:this.tempProduct.imgUrl,imgsUrl:this.tempProduct.imgsUrl,isCheaper:this.tempProduct.isCheaper,num:this.tempProduct.num,originalPrice:this.tempProduct.originalPrice,price:this.tempProduct.price,relevantRecipes:this.tempProduct.relevantRecipes,title:this.tempProduct.title,unit:this.tempProduct.unit}}),this.toastMessage("更改成功","success")}else if(this.status==="new"){const l=h(_,"products/"),s=I(l);S(s,{category:this.tempProduct.category,description:this.tempProduct.description,imgUrl:this.tempProduct.imgUrl,imgsUrl:this.tempProduct.imgsUrl,isCheaper:this.tempProduct.isCheaper,num:this.tempProduct.num,originalPrice:this.tempProduct.originalPrice,price:this.tempProduct.price,relevantRecipes:this.tempProduct.relevantRecipes,title:this.tempProduct.title,unit:this.tempProduct.unit}),this.toastMessage("新增成功","success")}this.hide()}},watch:{id(){if(this.id!=="new"&&this.id!==""){const l=h(_,`products/${this.id}`);P(l,s=>{this.tempProduct=s.val(),this.id&&(this.tempProduct.id=this.id),this.tempProduct.imgsUrl||(this.tempProduct.imgsUrl=[]),this.tempProduct.isCheaper||(this.tempProduct.isCheaper=!1),this.show(),this.status="edit",this.productId=this.id,this.openModal("")})}else this.id==="new"&&(this.tempProduct={relevantRecipes:[],isCheaper:!1,imgsUrl:[]},this.show(),this.status="new",this.openModal(""))}}},j={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},A={class:"modal-dialog modal-xl"},O={class:"modal-content"},z={class:"modal-header bg-dark"},E={class:"modal-title text-white",id:"exampleModalLabel"},F={key:0},W={key:1},Y=t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),Z={class:"modal-body"},q={class:"row"},G={class:"col-4"},H=t("label",{for:"mainPic",class:"form-label"},"主圖網址",-1),J=["src"],K=t("hr",null,null,-1),Q=t("label",{for:"subPic",class:"form-label"},"副圖網址",-1),X=["onUpdate:modelValue"],$=["src"],tt={class:"d-flex"},et=["onClick"],st={key:0,class:"d-flex mt-4"},ot={class:"col-8"},it={class:"row gy-3"},lt={class:"col-2"},rt=t("label",{for:"serialNumber",class:"form-label"},"編號（id）",-1),dt={class:"col-3"},ct=t("label",{for:"category",class:"form-label"},"產品分類",-1),nt=t("option",{value:"單一產品"},"單一產品",-1),at=t("option",{value:"組合包"},"組合包",-1),ut=[nt,at],pt={class:"col-7"},mt=t("label",{for:"title",class:"form-label"},"產品名稱",-1),ht={class:"col-3"},_t=t("label",{for:"content",class:"form-label"},"數量",-1),bt={class:"col-3"},Pt=t("label",{for:"content",class:"form-label"},"單位",-1),ft={class:"col-3"},gt=t("label",{for:"price",class:"form-label"},"喊得很高的原價",-1),vt={class:"col-3"},yt=t("label",{for:"price",class:"form-label"},"真實價格",-1),Ut={class:"col-12"},xt={class:"form-check"},Mt=t("label",{class:"form-check-label",for:"isCheaper"}," 是否打折 ",-1),Ct={class:"col-12"},wt=t("label",{for:"description",class:"form-label"},"產品描述",-1),kt={class:"col-12"},Vt=t("label",{for:"price",class:"form-label"},"關聯食譜",-1),Rt=["value"],Dt={class:"modal-footer"},It=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),St={key:0},Tt={key:1};function Nt(l,s,u,U,e,c){return r(),d("div",j,[t("div",A,[t("div",O,[t("div",z,[t("h5",E,[e.status==="edit"?(r(),d("span",F,"編輯產品內容")):e.status==="new"?(r(),d("span",W,"新增產品內容")):b("",!0)]),Y]),t("div",Z,[t("div",q,[t("div",G,[H,n(t("input",{type:"text",id:"mainPic",class:"form-control mb-3","onUpdate:modelValue":s[0]||(s[0]=o=>e.tempProduct.imgUrl=o)},null,512),[[p,e.tempProduct.imgUrl]]),t("img",{src:e.tempProduct.imgUrl,alt:"",width:"300"},null,8,J),K,(r(!0),d(f,null,g(e.tempProduct.imgsUrl,(o,m)=>(r(),d("div",{key:o+3453},[Q,n(t("input",{type:"text",id:"subPic",class:"form-control mb-3","onUpdate:modelValue":i=>e.tempProduct.imgsUrl[m]=i},null,8,X),[[p,e.tempProduct.imgsUrl[m]]]),t("img",{src:e.tempProduct.imgsUrl[m],alt:"",width:"300"},null,8,$),t("div",tt,[t("button",{type:"button",class:"ms-auto btn btn-danger",onClick:()=>e.tempProduct.imgsUrl.splice(m,1)},"刪除圖片",8,et)])]))),128)),e.tempProduct.imgsUrl[e.tempProduct.imgsUrl.length-1]!==""?(r(),d("div",st,[t("button",{type:"button",class:"ms-auto btn btn-primary",onClick:s[1]||(s[1]=()=>e.tempProduct.imgsUrl.push(""))},"新增圖片")])):b("",!0)]),t("div",ot,[t("div",it,[t("div",lt,[rt,n(t("input",{type:"text",id:"serialNumber",class:"form-control","onUpdate:modelValue":s[2]||(s[2]=o=>e.tempProduct.id=o),disabled:""},null,512),[[p,e.tempProduct.id]])]),t("div",dt,[ct,n(t("select",{name:"",class:"form-select",id:"category","onUpdate:modelValue":s[3]||(s[3]=o=>e.tempProduct.category=o)},ut,512),[[x,e.tempProduct.category]])]),t("div",pt,[mt,n(t("input",{type:"text",id:"title",class:"form-control","onUpdate:modelValue":s[4]||(s[4]=o=>e.tempProduct.title=o)},null,512),[[p,e.tempProduct.title]])]),t("div",ht,[_t,n(t("input",{type:"text",id:"content",class:"form-control","onUpdate:modelValue":s[5]||(s[5]=o=>e.tempProduct.num=o)},null,512),[[p,e.tempProduct.num,void 0,{number:!0}]])]),t("div",bt,[Pt,n(t("input",{type:"text",id:"content",class:"form-control","onUpdate:modelValue":s[6]||(s[6]=o=>e.tempProduct.unit=o)},null,512),[[p,e.tempProduct.unit]])]),t("div",ft,[gt,n(t("input",{type:"text",id:"price",class:"form-control","onUpdate:modelValue":s[7]||(s[7]=o=>e.tempProduct.originalPrice=o)},null,512),[[p,e.tempProduct.originalPrice,void 0,{number:!0}]])]),t("div",vt,[yt,n(t("input",{type:"text",id:"price",class:"form-control","onUpdate:modelValue":s[8]||(s[8]=o=>e.tempProduct.price=o)},null,512),[[p,e.tempProduct.price,void 0,{number:!0}]])]),t("div",Ut,[t("div",xt,[n(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"isCheaper","onUpdate:modelValue":s[9]||(s[9]=o=>e.tempProduct.isCheaper=o)},null,512),[[N,e.tempProduct.isCheaper]]),Mt])]),t("div",Ct,[wt,n(t("textarea",{name:"",id:"description",cols:"30",rows:"10",class:"form-control","onUpdate:modelValue":s[10]||(s[10]=o=>e.tempProduct.description=o)},null,512),[[p,e.tempProduct.description]])]),t("div",kt,[Vt,n(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":s[11]||(s[11]=o=>e.tempProduct.relevantRecipes=o),multiple:""},[(r(!0),d(f,null,g(u.recipes,o=>(r(),d("option",{key:o+4534534,value:o.title},a(o.title),9,Rt))),128))],512),[[x,e.tempProduct.relevantRecipes]]),v(" "+a(e.tempProduct.relevantRecipes),1)])])])])]),t("div",Dt,[It,t("button",{type:"button",class:"btn btn-primary",onClick:s[12]||(s[12]=(...o)=>c.updateProduct&&c.updateProduct(...o))},[e.status==="edit"?(r(),d("span",St,"確認編輯")):e.status==="new"?(r(),d("span",Tt,"確認新增")):b("",!0)])])])])],512)}const Lt=y(B,[["render",Nt]]),Bt={data(){return{deleteId:"",tempProduct:{}}},mixins:[w],props:["id","openDeleteModal","item"],methods:{...k(V,["toastMessage"]),deleteProdcut(){T(h(_,`products/${this.deleteId}/`)),this.toastMessage("刪除食譜"),this.hide()}},watch:{id(){this.id&&(this.show(),this.tempProduct=this.item,console.log(this.tempProduct,"友直嗎"),this.deleteId=this.id,this.openDeleteModal("",""))}}},jt={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},At={class:"modal-dialog"},Ot={class:"modal-content"},zt=t("div",{class:"modal-header bg-dark"},[t("h5",{class:"modal-title text-white",id:"exampleModalLabel"}," 刪除產品 "),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Et={class:"modal-body"},Ft={class:"text-danger fw-bold"},Wt={class:"modal-footer"},Yt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function Zt(l,s,u,U,e,c){return r(),d("div",jt,[t("div",At,[t("div",Ot,[zt,t("div",Et,[t("p",null,[v("確定要刪除產品 "),t("span",Ft," 【"+a(e.tempProduct.title)+"】 ",1),v(" 嗎? ")])]),t("div",Wt,[Yt,t("button",{type:"button",class:"btn btn-danger",onClick:s[0]||(s[0]=(...o)=>c.deleteProdcut&&c.deleteProdcut(...o))}," 確認刪除 ")])])])],512)}const qt=y(Bt,[["render",Zt]]),Gt={components:{ProductModal:Lt,DeleteProductModal:qt},data(){return{products:[],recipes:[],productId:"",productDeleteItem:{},productDeleteId:"",selectCategory:"全部",tempSearchTitle:""}},computed:{search(){return this.products.filter(l=>l.title.match(this.tempSearchTitle))}},methods:{getProducts(){const l=h(_,"products/");P(l,s=>{this.products=s.val(),this.products=Object.entries(this.products).map(u=>(u[1].id=u[0],u[1])),console.log(this.products,"後台產品")})},getRecipes(){const l=h(_,"recipes/");P(l,s=>{this.recipes=s.val(),this.recipes=Object.entries(this.recipes).map(u=>(u[1].id=u[0],u[1])),console.log(this.recipes,"後台食譜")})},openModal(l){this.productId=l},openDeleteModal(l,s){this.productDeleteId=l,this.productDeleteItem=s}},mounted(){this.getProducts(),this.getRecipes()}},Ht={class:"container"},Jt={class:"d-flex my-4"},Kt={class:"row mb-4"},Qt={class:"col-3"},Xt=t("label",{for:"searchProductTitle"},"搜尋產品名稱",-1),$t={class:"table text-center",style:{"vertical-align":"middle"}},te=t("thead",null,[t("tr",null,[t("th",null,"產品編號"),t("th",null,"分類"),t("th",null,"產品名稱"),t("th",null,"相關食譜"),t("th",null,"內容物"),t("th",null,"原價"),t("th",null,"價格"),t("th",null,"是否打折"),t("th",null,"編輯")])],-1),ee={style:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis","max-width":"400px"}},se={class:"text-success"},oe={class:"btn-group"},ie=["onClick"],le=["onClick"];function re(l,s,u,U,e,c){const o=C("ProductModal"),m=C("DeleteProductModal");return r(),d("div",Ht,[t("div",Jt,[t("button",{type:"button",class:"ms-auto btn btn-primary",onClick:s[0]||(s[0]=i=>c.openModal("new"))},"建立新產品")]),t("div",Kt,[t("div",Qt,[Xt,n(t("input",{type:"text",id:"searchProductTitle",class:"form-control","onUpdate:modelValue":s[1]||(s[1]=i=>e.tempSearchTitle=i)},null,512),[[p,e.tempSearchTitle]])])]),t("table",$t,[te,t("tbody",null,[(r(!0),d(f,null,g(c.search,i=>(r(),d("tr",{key:i.id},[t("td",null,a(i.id),1),t("td",null,a(i.category),1),t("td",null,a(i.title),1),t("td",ee,a(i.relevantRecipes.toString()),1),t("td",null,a(i.num)+" "+a(i.unit),1),t("td",null,a(i.originalPrice),1),t("td",se,a(i.price),1),t("td",{class:L({"text-success":i.isCheaper,"fw-bold":i.isCheaper})},a(`${i.isCheaper?"是":"否"}`),3),t("td",null,[t("div",oe,[t("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:R=>c.openModal(i.id)},"編輯",8,ie),t("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:R=>c.openDeleteModal(i.id,i)},"刪除",8,le)])])]))),128))])]),M(o,{ref:"productModal",id:e.productId,recipes:e.recipes,"open-modal":c.openModal,"get-products":c.getProducts},null,8,["id","recipes","open-modal","get-products"]),M(m,{ref:"deleteProductModal",id:e.productDeleteId,item:e.productDeleteItem,"open-delete-modal":c.openDeleteModal},null,8,["id","item","open-delete-modal"])])}const Pe=y(Gt,[["render",re]]);export{Pe as default};
