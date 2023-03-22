import{m as w}from"./modalMixin-f99c1c1a.js";import{l as m,k as E}from"./runtime-dom.esm-bundler-eb0e3820.js";import{b6 as y,aj as i,l as n,m as e,k as f,b3 as p,F as u,at as h,aJ as r,s as b,av as x,t as U}from"./_plugin-vue_export-helper-68081c38.js";import"./_commonjsHelpers-042e6b4d.js";import"./base-component-5a126788.js";const{VITE_PATH:R}={VITE_PATH:"https://vue-final-dbjson-889xxtffg-cookiesss123.vercel.app",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},P={data(){return{tempRecipe:{imgsUrl:[]},status:"edit",recipeType:["法式甜點","義式甜點","美式甜點","日式甜點","台式甜點"],total:0}},mixins:[w],props:["id","openModal","getRecipes","products","getProducts","recipes"],methods:{updateRecipe(){this.status==="edit"?(this.tempRecipe.total=this.total,this.$http.put(`${R}/recipes/${this.tempRecipe.id}`,this.tempRecipe).then(l=>{console.log(l.data),this.getRecipes(),this.hide()}).catch(l=>{console.log(l)})):this.status==="new"&&this.$http.post(`${R}/recipes`,this.tempRecipe).then(l=>{console.log(l.data),this.getRecipes(),this.hide()}).catch(l=>{console.log(l)})}},mounted(){this.getProducts()},watch:{id(){this.id!=="new"&&this.id!==""?this.$http.get(`${R}/recipes/${this.id}`).then(l=>{this.tempRecipe=l.data,console.log(this.tempRecipe),this.tempRecipe.imgsUrl||(this.tempRecipe.imgsUrl=[]),this.tempRecipe.relativeProducts=[],this.total=0,this.products.forEach(o=>{o.relevantRecipes.forEach(_=>{_===this.tempRecipe.title&&o.category==="單一產品"?(this.tempRecipe.relativeProducts.push(o),this.total+=o.price):_===this.tempRecipe.title&&o.category==="組合包"&&this.tempRecipe.relativeProducts.push(o)})}),this.show(),this.status="edit",this.openModal("")}).catch(l=>{console.log(l)}):this.id==="new"&&(this.tempRecipe={ingredients:[],imgsUrl:[]},this.relativeProducts=[],this.show(),this.status="new",this.openModal(""))}}},D={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},T={class:"modal-dialog modal-xl"},C={class:"modal-content"},I={class:"modal-header bg-dark"},A={class:"modal-title text-white",id:"exampleModalLabel"},B={key:0},H={key:1},L=e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),O={class:"modal-body"},S={class:"row"},j={class:"col-4"},N={class:"row"},F={class:"col-12"},J=e("label",{for:"imgUrl",class:"form-label"},"圖片網址",-1),q=["src"],z=e("hr",null,null,-1),G=e("label",{for:"subPic",class:"form-label"},"副圖網址",-1),K=["onUpdate:modelValue"],Q=["src"],W={class:"d-flex"},X=["onClick"],Y={key:0,class:"d-flex mt-4"},Z={class:"col-12"},$=e("label",{for:"videoUrl",class:"form-label"},"影片網址",-1),ee={class:"col-12"},te=e("label",{for:"ingredients",class:"form-label"},"材料",-1),se={class:"input-group-text"},oe=["onUpdate:modelValue"],le=["onUpdate:modelValue"],ie=["onUpdate:modelValue"],ne=["onClick"],ce={key:0,class:"d-flex"},de={class:"col-8"},pe={class:"row gy-3"},re={class:"col-3"},ae=e("label",{for:"title",class:"form-label"},"食譜編號（id）",-1),me={class:"col-3"},ue=e("label",{for:"category",class:"form-label"},"食譜類別",-1),he=["value"],_e={class:"col-6"},be=e("label",{for:"title",class:"form-label"},"食譜名稱",-1),ge={class:"col-4"},fe=e("label",{for:"content",class:"form-label"},"作者",-1),Re={class:"col-3"},ye=e("label",{for:"content",class:"form-label"},"食譜內容",-1),ve={class:"col-3"},xe=e("label",{for:"costs",class:"form-label"},"成本",-1),Ue={class:"d-flex align-items-center"},ke={class:"col-2"},Ve=e("label",{for:"costs",class:"form-label"},"組合價",-1),we={class:"d-flex align-items-center"},Me={class:"col-12"},Ee=e("label",{for:"description",class:"form-label"},"食譜描述",-1),Pe={class:"col-12"},De=e("label",{for:"instructions",class:"form-label"},"製作步驟",-1),Te={class:"col-12"},Ce=e("label",{for:"product",class:"form-label text-primary"},"所需產品",-1),Ie=["for"],Ae={class:"text-end text-primary"},Be={class:"modal-footer"},He=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),Le={key:0},Oe={key:1};function Se(l,o,_,v,t,a){return i(),n("div",D,[e("div",T,[e("div",C,[e("div",I,[e("h5",A,[t.status==="edit"?(i(),n("span",B,"編輯產品內容")):t.status==="new"?(i(),n("span",H,"新增產品內容")):f("",!0)]),L]),e("div",O,[e("div",S,[e("div",j,[e("div",N,[e("div",F,[J,p(e("input",{type:"text",id:"imgUrl",class:"form-control mb-3","onUpdate:modelValue":o[0]||(o[0]=s=>t.tempRecipe.image=s)},null,512),[[m,t.tempRecipe.image]]),e("img",{src:t.tempRecipe.image,alt:"",width:"300"},null,8,q),z,(i(!0),n(u,null,h(t.tempRecipe.imgsUrl,(s,c)=>(i(),n("div",{key:s+3453},[G,p(e("input",{type:"text",id:"subPic",class:"form-control mb-3","onUpdate:modelValue":d=>t.tempRecipe.imgsUrl[c]=d},null,8,K),[[m,t.tempRecipe.imgsUrl[c]]]),e("img",{src:t.tempRecipe.imgsUrl[c],alt:"",width:"300"},null,8,Q),e("div",W,[e("button",{type:"button",class:"ms-auto btn btn-danger",onClick:()=>t.tempRecipe.imgsUrl.splice(c,1)},"刪除圖片",8,X)])]))),128)),t.tempRecipe.imgsUrl[t.tempRecipe.imgsUrl.length-1]!==""?(i(),n("div",Y,[e("button",{type:"button",class:"ms-auto btn btn-primary",onClick:o[1]||(o[1]=()=>t.tempRecipe.imgsUrl.push(""))},"新增圖片")])):f("",!0)]),e("div",Z,[$,p(e("input",{type:"text",id:"videoUrl",class:"form-control mb-3","onUpdate:modelValue":o[2]||(o[2]=s=>t.tempRecipe.video=s)},null,512),[[m,t.tempRecipe.video]])]),e("div",ee,[te,(i(!0),n(u,null,h(t.tempRecipe.ingredients,(s,c)=>(i(),n("div",{class:"input-group mb-3",key:s+342},[e("div",se,r(c+1),1),p(e("input",{type:"text",id:"ingredients",class:"form-control","onUpdate:modelValue":d=>t.tempRecipe.ingredients[c].name=d,style:{width:"150px"}},null,8,oe),[[m,t.tempRecipe.ingredients[c].name]]),p(e("input",{type:"text",id:"ingredients",class:"form-control","onUpdate:modelValue":d=>t.tempRecipe.ingredients[c].num=d},null,8,le),[[m,t.tempRecipe.ingredients[c].num,void 0,{number:!0}]]),p(e("input",{type:"text",id:"ingredients",class:"form-control","onUpdate:modelValue":d=>t.tempRecipe.ingredients[c].unit=d},null,8,ie),[[m,t.tempRecipe.ingredients[c].unit]]),e("button",{type:"button",class:"btn btn-danger btn-sm",onClick:()=>t.tempRecipe.ingredients.splice(c,1)},"x",8,ne)]))),128))]),t.tempRecipe.ingredients&&t.tempRecipe.ingredients[t.tempRecipe.ingredients.length-1]!==""||!t.tempRecipe.ingredients?(i(),n("div",ce,[e("button",{type:"button",class:"ms-auto btn btn-primary",onClick:o[3]||(o[3]=()=>t.tempRecipe.ingredients.push({name:"",num:"",unit:""}))},"新增材料")])):f("",!0)])]),e("div",de,[e("div",pe,[e("div",re,[ae,p(e("input",{type:"text",id:"title",class:"form-control",disabled:"","onUpdate:modelValue":o[4]||(o[4]=s=>t.tempRecipe.id=s)},null,512),[[m,t.tempRecipe.id]])]),e("div",me,[ue,p(e("select",{name:"",id:"category",class:"form-select","onUpdate:modelValue":o[5]||(o[5]=s=>t.tempRecipe.category=s)},[(i(!0),n(u,null,h(t.recipeType,s=>(i(),n("option",{key:s,value:s},r(s),9,he))),128))],512),[[E,t.tempRecipe.category]])]),e("div",_e,[be,p(e("input",{type:"text",id:"title",class:"form-control","onUpdate:modelValue":o[6]||(o[6]=s=>t.tempRecipe.title=s)},null,512),[[m,t.tempRecipe.title]])]),e("div",ge,[fe,p(e("input",{type:"text",id:"content",class:"form-control","onUpdate:modelValue":o[7]||(o[7]=s=>t.tempRecipe.author=s)},null,512),[[m,t.tempRecipe.author]])]),e("div",Re,[ye,p(e("input",{type:"text",id:"content",class:"form-control","onUpdate:modelValue":o[8]||(o[8]=s=>t.tempRecipe.content=s)},null,512),[[m,t.tempRecipe.content]])]),e("div",ve,[xe,e("div",Ue,[p(e("input",{type:"text",id:"costs",class:"form-control me-2","onUpdate:modelValue":o[9]||(o[9]=s=>t.tempRecipe.total=s)},null,512),[[m,t.tempRecipe.total]]),b("元 ")])]),e("div",ke,[Ve,e("div",we,[p(e("input",{type:"text",id:"costs",class:"form-control me-2","onUpdate:modelValue":o[10]||(o[10]=s=>t.tempRecipe.price=s)},null,512),[[m,t.tempRecipe.price,void 0,{number:!0}]]),b("元 ")])]),e("div",Me,[Ee,p(e("textarea",{name:"",id:"description",cols:"30",rows:"10",class:"form-control","onUpdate:modelValue":o[11]||(o[11]=s=>t.tempRecipe.description=s)},null,512),[[m,t.tempRecipe.description]])]),e("div",Pe,[De,p(e("textarea",{name:"",id:"instructions",cols:"30",rows:"10",class:"form-control","onUpdate:modelValue":o[12]||(o[12]=s=>t.tempRecipe.instructions=s)},null,512),[[m,t.tempRecipe.instructions]])]),e("div",Te,[Ce,e("ol",null,[(i(!0),n(u,null,h(t.tempRecipe.relativeProducts,(s,c)=>(i(),n("li",{key:s.id,class:"row mb-5"},[e("label",{for:s+c,class:"col-8 mb-0"},r(c+1)+". "+r(s.title)+" ： "+r(s.num)+r(s.unit)+" / "+r(s.price)+" 元",9,Ie)]))),128))]),e("h5",Ae," 總計： "+r(t.tempRecipe.total)+" 元 ",1)])])])])]),e("div",Be,[He,e("button",{type:"button",class:"btn btn-primary",onClick:o[13]||(o[13]=(...s)=>a.updateRecipe&&a.updateRecipe(...s))},[t.status==="edit"?(i(),n("span",Le,"確認編輯")):t.status==="new"?(i(),n("span",Oe,"確認新增")):f("",!0)])])])])],512)}const je=y(P,[["render",Se]]),{VITE_PATH:k}={VITE_PATH:"https://vue-final-dbjson-889xxtffg-cookiesss123.vercel.app",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},Ne={data(){return{tempRecipe:{}}},mixins:[w],props:["id","openDeleteModal","getRecipes"],methods:{deleteRecipe(){this.$http.delete(`${k}/recipes/${this.tempRecipe.id}`).then(l=>{console.log(l.data),this.getRecipes(),this.hide()}).catch(l=>{console.log(l)})}},watch:{id(){this.id&&(console.log(this.id,"改變了"),this.$http.get(`${k}/recipes/${this.id}`).then(l=>{this.tempRecipe=l.data,console.log(this.tempRecipe),this.show(),this.openDeleteModal("")}).catch(l=>{console.log(l)}))}}},Fe={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},Je={class:"modal-dialog"},qe={class:"modal-content"},ze=e("div",{class:"modal-header bg-dark"},[e("h5",{class:"modal-title text-white",id:"exampleModalLabel"}," 刪除產品 "),e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Ge={class:"modal-body"},Ke={class:"text-danger fw-bold"},Qe={class:"modal-footer"},We=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function Xe(l,o,_,v,t,a){return i(),n("div",Fe,[e("div",Je,[e("div",qe,[ze,e("div",Ge,[e("p",null,[b("確定要刪除食譜 "),e("span",Ke," 【"+r(t.tempRecipe.title)+"】 ",1),b(" 嗎? ")])]),e("div",Qe,[We,e("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=(...s)=>a.deleteRecipe&&a.deleteRecipe(...s))}," 確認刪除 ")])])])],512)}const Ye=y(Ne,[["render",Xe]]),{VITE_PATH:V}={VITE_PATH:"https://vue-final-dbjson-889xxtffg-cookiesss123.vercel.app",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},Ze={components:{RecipeModal:je,DeleteRecipeModal:Ye},data(){return{recipes:[],products:{},recipeId:"",recipeDeleteId:""}},methods:{getRecipes(){this.$http.get(`${V}/recipes`).then(l=>{console.log(l.data),this.recipes=l.data}).catch(l=>{console.log(l)})},openModal(l){this.recipeId=l},getProducts(){this.$http.get(`${V}/products`).then(l=>{console.log(l.data),this.products=l.data}).catch(l=>{console.log(l)})},openDeleteModal(l){this.recipeDeleteId=l}},mounted(){this.getRecipes(),this.getProducts()}},$e={class:"container"},et={class:"d-flex my-4"},tt={class:"table text-center"},st=e("thead",null,[e("tr",null,[e("th",null,"食譜編號"),e("th",null,"分類"),e("th",null,"食譜名稱"),e("th",null,"產品"),e("th",null,"成本"),e("th",null,"組合價"),e("th",null,"編輯")])],-1),ot={style:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis","max-width":"400px"}},lt={class:"btn-group"},it=["onClick"],nt=["onClick"];function ct(l,o,_,v,t,a){const s=x("RecipeModal"),c=x("DeleteRecipeModal");return i(),n("div",$e,[e("div",et,[e("button",{type:"button",class:"ms-auto btn btn-primary",onClick:o[0]||(o[0]=d=>a.openModal("new"))},"建立新食譜")]),e("table",tt,[st,(i(!0),n(u,null,h(t.recipes,d=>(i(),n("tbody",{key:d.id},[e("tr",null,[e("td",null,r(d.id),1),e("td",null,r(d.category),1),e("td",null,r(d.title),1),e("td",ot,[(i(!0),n(u,null,h(d.relativeProducts,(g,M)=>(i(),n(u,{key:g.id},[b(r(`${M+1}${g.title} `),1)],64))),128))]),e("td",null,r(d.total),1),e("td",null,r(d.price),1),e("td",null,[e("div",lt,[e("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:g=>a.openModal(d.id)},"編輯",8,it),e("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:g=>a.openDeleteModal(d.id)},"刪除",8,nt)])])])]))),128))]),U(s,{id:t.recipeId,"open-modal":a.openModal,"get-recipes":a.getRecipes,products:t.products,"get-products":a.getProducts,recipes:t.recipes},null,8,["id","open-modal","get-recipes","products","get-products","recipes"]),U(c,{ref:"deleteRecipeModal",id:t.recipeDeleteId,"get-recipes":a.getRecipes,"open-delete-modal":a.openDeleteModal},null,8,["id","get-recipes","open-delete-modal"])])}const ut=y(Ze,[["render",ct]]);export{ut as default};
