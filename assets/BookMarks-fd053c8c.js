import{R as I}from"./vue-router-1aba70ec.js";import{m as T}from"./modalMixin-c1848f69.js";import{_ as v,o as i,U as d,V as s,Y as h,Z as a,a0 as l,a1 as y,a2 as R,W as x,r as F,X as k,a4 as u,c as B}from"./_plugin-vue_export-helper-cbb9d8af.js";import{m as S,b as E}from"./axios-555da50d.js";import{c as M}from"./carts-0238063f.js";import{_ as m}from"./image4-1806383b.js";import{_ as C}from"./icon-cart-09916409.js";import{_}from"./icon-star-c15bacb9.js";import"./modal-838a1639.js";import"./_commonjsHelpers-042e6b4d.js";import"./base-component-5a126788.js";const{VITE_PATH:f}={VITE_PATH:"http://localhost:3000",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},P={data(){return{bookMark:{}}},mixins:[T],props:["id","pageStatus","openDeleteModal","getBookmarks"],methods:{deleteBookmark(r){let o=`${f}/600/recipeBookmarks/${r}`;this.pageStatus==="product"&&(o=`${f}/600/productBookmarks/${r}`),this.$http.delete(o,{headers:{authorization:`Bearer ${this.token}`}}).then(c=>{console.log(c.data),this.hide(),this.pageStatus==="recipe"?this.getBookmarks(this.userId,"recipeBookmarks",this.pageStatus):this.pageStatus==="product"&&this.getBookmarks(this.userId,"productBookmarks",this.pageStatus),this.$swal({icon:"success",title:"收藏刪除成功",showConfirmButton:!1,timer:1500})}).catch(c=>{console.log(c)})}},watch:{id(){if(this.id){console.log("id變了");let r=`${f}/600/recipeBookmarks/${this.id}?_expand=recipe`;this.pageStatus==="product"&&(r=`${f}/600/productBookmarks/${this.id}?_expand=product`),this.$http.get(r,{headers:{authorization:`Bearer ${this.token}`}}).then(o=>{console.log(o.data),this.bookMark=o.data,this.show(),this.openDeleteModal("")}).catch(o=>{console.log(o)})}}},mounted(){this.userId=localStorage.getItem("userId"),this.userId=Number(this.userId),console.log(this.userId),this.token=document.cookie.replace(/(?:(?:^|.*;\s*)myToken\s*=\s*([^;]*).*$)|^.*$/,"$1")}},D={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},j={class:"modal-dialog modal-dialog-centered"},A={class:"modal-content"},L=s("div",{class:"modal-header bg-dark"},[s("h5",{class:"modal-title text-white",id:"exampleModalLabel"}," 刪除收藏 "),s("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),O={class:"modal-body"},V={key:0},N={key:1},z={key:2,class:"text-danger fw-bold"},G={key:3,class:"text-danger fw-bold"},H={class:"modal-footer"},U=s("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function W(r,o,c,n,e,b){return i(),d("div",D,[s("div",j,[s("div",A,[L,s("div",O,[s("p",null,[h("確定要刪除"),e.bookMark.recipe?(i(),d("span",V,"食譜")):e.bookMark.product?(i(),d("span",N,"產品")):a("",!0),h("收藏 "),e.bookMark.recipe?(i(),d("span",z," 【"+l(e.bookMark.recipe.title)+"】 ",1)):e.bookMark.product?(i(),d("span",G," 【"+l(e.bookMark.product.title)+"】 ",1)):a("",!0),h(" 嗎? ")])]),s("div",H,[U,s("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=()=>b.deleteBookmark(e.bookMark.id))},"確認刪除")])])])],512)}const X=v(P,[["render",W]]);const{VITE_PATH:p}={VITE_PATH:"http://localhost:3000",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},Y={components:{RouterLink:I,DeleteBookmarksModal:X},data(){return{bookMarks:[],pageStatus:"recipe",deleteId:"",AllproductRates:[],averageRate:[],rates:{},products:[],recipeThumbs:[],thumbs:{},myThumbs:[],myThumbObj:{},recipes:[]}},methods:{...S(M,["checkLogin","pleaseReLogin"]),getBookmarks(r,o,c){const n=`${p}/600/users/${r}/${o}?_expand=${c}`;this.$http.get(n,{headers:{authorization:`Bearer ${this.token}`}}).then(e=>{console.log(e.data),this.bookMarks=e.data}).catch(e=>{console.log(e),this.token&&this.pleaseReLogin()})},addBookmark(r){let o=`${p}/600/users/${this.userId}/recipeBookmarks?_expand=recipe`,c={userId:this.userId,recipeId:r};this.pageStatus==="product"&&(o=`${p}/600/users/${this.userId}/productBookmarks?_expand=product`,c={userId:this.userId,productId:r}),this.$http.post(o,c,{headers:{authorization:`Bearer ${this.token}`}}).then(n=>{console.log(n.data),this.pageStatus==="recipe"?this.getBookmarks(this.userId,"recipeBookmarks",this.pageStatus):this.pageStatus==="product"&&this.getBookmarks(this.userId,"productBookmarks",this.pageStatus)}).catch(n=>{console.log(n)})},openDeleteModal(r){this.deleteId=r},getAllProductRates(){this.$http.get(`${p}/productRates?_expand=product`).then(r=>{console.log("所有產品評價",r.data),this.AllproductRates=r.data,this.AllproductRates.forEach(o=>{this.rates[o.product.id]===void 0?this.rates[o.product.id]={totalRates:o.score,people:1,averageRate:o.score/1,product:o.product}:(this.rates[o.product.id].totalRates+=o.score,this.rates[o.product.id].people+=1,this.rates[o.product.id].averageRate=Number((this.rates[o.product.id].totalRates/this.rates[o.product.id].people).toFixed(1)))}),this.products.forEach(o=>{Object.keys(this.rates).forEach(c=>{this.rates[o.id]===void 0&&(this.rates[o.id]={totalRates:0,people:0,averageRate:0,product:o})})}),console.log("所有評價分類",this.rates)}).catch(r=>{console.log(r),this.token&&this.pleaseReLogin()})},getProducts(){let r=`${p}/products`;this.pageStatus==="食材組合包"?r=`${p}/products?category=組合包`:this.pageStatus==="熱銷單品"?r=`${p}/products?category=單一產品`:this.pageStatus==="特價商品"&&(r=`${p}/products?isCheaper=true`),this.$http.get(`${r}`).then(o=>{console.log("產品",o.data),this.products=o.data}).catch(o=>{console.log(o)})},getAllRecipeThumbs(){const r=`${p}/recipeThumbs?_expand=recipe`;this.$http.get(r).then(o=>{console.log("所有食譜讚",o.data),this.recipeThumbs=o.data,this.recipeThumbs.forEach(c=>{this.thumbs[c.recipe.id]===void 0?this.thumbs[c.recipe.id]={people:1,recipe:c.recipe}:this.thumbs[c.recipe.id].people+=1}),this.getRecipes(),this.recipes.forEach(c=>{Object.keys(this.thumbs).forEach(n=>{this.thumbs[c.id]===void 0&&(this.thumbs[c.id]={people:0,recipe:c})})}),console.log("分類好的讚",this.thumbs)}).catch(o=>{console.log(o),this.token&&this.pleaseReLogin()})},getMyThumb(){const r=`${p}/600/users/${this.userId}/recipeThumbs`;this.$http.get(r,{headers:{authorization:`Bearer ${this.token}`}}).then(o=>{console.log("我按了哪些食譜讚?",o.data),this.myThumbs=o.data,this.myThumbs.forEach(c=>{this.myThumbObj[c.recipeId]===void 0&&(this.myThumbObj[c.recipeId]={thumb:!0})}),console.log("我讚過的食譜",this.myThumbObj)}).catch(o=>{console.log(o),this.token&&this.pleaseReLogin()})},getRecipes(){this.$http.get(`${p}/recipes`).then(r=>{console.log(r.data),this.recipes=r.data}).catch(r=>{console.log(r)})}},mounted(){this.checkLogin(),this.token||(this.$swal({icon:"error",title:"登入才可使用收藏功能",showConfirmButton:!1,timer:1500}),this.$router.push("/loginSignup/login")),this.getBookmarks(this.userId,"recipeBookmarks",this.pageStatus),this.getProducts(),this.getAllProductRates(),this.getAllRecipeThumbs(),this.getMyThumb()},watch:{pageStatus(){console.log(this.pageStatus,"有變化"),this.pageStatus==="product"?this.getBookmarks(this.userId,"productBookmarks",this.pageStatus):this.pageStatus==="recipe"&&this.getBookmarks(this.userId,"recipeBookmarks",this.pageStatus)}},computed:{...E(M,["token","userId"])}},Z={class:"py-100-sm-40"},q={class:""},J={class:"nav nav-tabs container",id:"myTab",role:"tablist"},K=s("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"},[s("i",{class:"bi bi-book-half"}),h(" 食譜收藏")],-1),Q=[K],$=s("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"},[s("i",{class:"bi bi-bag-check-fill"}),h(" 產品收藏")],-1),tt=[$],et={class:"tab-content container",id:"myTabContent"},ot={class:"tab-pane fade show active py-4",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},st={class:"row row-cols-lg-4 row-cols-1 gy-4"},rt=["to"],it={class:"card position-relative border-0 bg-transparent",style:{"border-radius":"20px"}},dt=["src"],ct={class:"card-text"},at=["onClick"],lt=s("img",{src:m},null,-1),pt=[lt],ut={key:0,style:{"pointer-events":"none"},class:"badge rounded-pill bg-brown mt-4 border-0 me-3 position-absolute top-50 end-0"},nt={key:0,class:"h5 d-flex justify-content-between fw-bold"},ht={key:1,class:"col-12 d-flex justify-content-end"},bt={class:"mt-1"},_t={key:2,class:"d-flex align-items-center justify-content-end"},gt={key:0,class:"mb-0 ms-3"},kt={key:1,type:"button",class:"border-0 bg-transparent text-brown fs-5"},ft=s("i",{class:"bi bi-hand-thumbs-up-fill"},null,-1),xt=[ft],yt={key:2,type:"button",class:"border-0 bg-transparent text-brown fs-5"},Rt=s("i",{class:"bi bi-hand-thumbs-up"},null,-1),Ft=[Rt],Bt={class:"tab-pane fade py-4",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"},Mt={class:"row row-cols-lg-4 row-cols-1 gy-4"},vt={class:"card position-relative border-0 bg-transparent",style:{"border-radius":"20px"}},mt=["src"],wt={class:"card-text"},It=["onClick"],Tt=s("img",{src:m},null,-1),St=[Tt],Et={key:0,style:{"pointer-events":"none","font-size":"14px"},class:"d-flex flex-column align-items-center text-orange p-2 bg-brown border-0 me-3 position-absolute top-0 end-0"},Ct={class:"mb-1"},Pt=s("button",{type:"button",class:"buyBtn border-0 bg-transparent me-3 position-absolute top-50 end-0"},[s("img",{src:C,style:{height:"48px"},alt:"",class:"rounded-circle shadow-sm"})],-1),Dt={key:0,class:"h5 d-flex justify-content-between fw-bold"},jt={key:1,class:"col"},At={key:0,class:"me-1"},Lt={key:2,class:"col-12"},Ot=s("span",{class:"me-1 text-muted"},"未有評價",-1),Vt=s("img",{src:_,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),Nt=s("img",{src:_,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),zt=s("img",{src:_,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),Gt=s("img",{src:_,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),Ht=s("img",{src:_,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),Ut=[Ot,Vt,Nt,zt,Gt,Ht],Wt={class:"d-flex justify-content-end"},Xt={key:1,class:"mt-1"};function Yt(r,o,c,n,e,b){const g=F("RouterLink"),w=F("DeleteBookmarksModal");return i(),d("div",Z,[s("section",q,[s("ul",J,[s("li",{class:"nav-item",role:"presentation",onClick:o[0]||(o[0]=()=>e.pageStatus="recipe")},Q),s("li",{class:"nav-item",role:"presentation",onClick:o[1]||(o[1]=()=>e.pageStatus="product")},tt)])]),s("div",et,[s("div",ot,[s("div",st,[(i(!0),d(y,null,R(e.bookMarks,t=>(i(),d("div",{to:`/recipes/${t.recipeId}`,class:"col text-decoration-none",key:t.id},[s("div",it,[x(g,{to:`/recipes/${t.recipeId}`},{default:k(()=>[t.recipe?(i(),d("img",{key:0,src:t.recipe.image,class:"card-img",height:"220",style:{"border-radius":"20px","object-fit":"cover","max-width":"100%","max-height":"100%"},alt:""},null,8,dt)):a("",!0)]),_:2},1032,["to"]),s("h5",ct,[s("button",{type:"button",class:"position-absolute deleteBookmarkBtn border-0 bg-transparent me-auto top-0 m-3",onClick:()=>b.openDeleteModal(t.id)},pt,8,at),t.recipe?(i(),d("span",ut,l(t.recipe.category),1)):a("",!0)]),x(g,{to:`/recipes/${t.recipeId}`,class:"card-footer bg-transparent border-0 text-decoration-none link-darkBrown"},{default:k(()=>[t.recipe?(i(),d("h5",nt,l(t.recipe.title),1)):a("",!0),t.recipe?(i(),d("div",ht,[s("del",{class:u(["me-2 text-muted mt-1",{"d-none":t.recipe.price===t.recipe.total}])},"NT$ "+l(t.recipe.total),3),s("span",bt,[s("span",{class:u({"text-danger":t.recipe.price!==t.recipe.total,"fw-bold":t.recipe.price!==t.recipe.total})},"NT$ "+l(t.recipe.price),3),h(" / "+l(t.recipe.content),1)])])):a("",!0),t.recipe?(i(),d("div",_t,[e.thumbs[t.recipe.id]?(i(),d("span",gt,l(e.thumbs[t.recipe.id].people),1)):a("",!0),e.myThumbObj[t.recipe.id]?(i(),d("button",kt,xt)):e.myThumbObj[t.recipe.id]?a("",!0):(i(),d("button",yt,Ft))])):a("",!0)]),_:2},1032,["to"])])],8,rt))),128))])]),s("div",Bt,[s("div",Mt,[(i(!0),d(y,null,R(e.bookMarks,t=>(i(),d("div",{class:"col text-decoration-none",key:t.id},[s("div",vt,[t.product?(i(),B(g,{key:0,to:`/products/${t.product.id}`},{default:k(()=>[t.product?(i(),d("img",{key:0,src:t.product.imgUrl,class:"card-img",height:"220",style:{"border-radius":"20px","object-fit":"cover","max-width":"100%","max-height":"100%"},alt:""},null,8,mt)):a("",!0)]),_:2},1032,["to"])):a("",!0),s("h5",wt,[s("button",{type:"button",class:"position-absolute deleteBookmarkBtn border-0 bg-transparent me-auto top-0 m-3",onClick:()=>b.openDeleteModal(t.id)},St,8,It),t.product&&t.product.isCheaper?(i(),d("span",Et,[s("p",Ct,l((100-((t.product.originalPrice-t.product.price)/t.product.originalPrice*100).toFixed(0))%10===0?(100-((t.product.originalPrice-t.product.price)/t.product.originalPrice*100).toFixed(0)).toString().charAt(0):100-((t.product.originalPrice-t.product.price)/t.product.originalPrice*100).toFixed(0)),1),h("折")])):a("",!0),Pt]),t.product?(i(),B(g,{key:1,to:`/products/${t.product.id}`,class:"card-footer bg-transparent border-0 text-decoration-none link-darkBrown"},{default:k(()=>[t.product?(i(),d("h5",Dt,l(t.product.title),1)):a("",!0),e.rates[t.product.id]&&e.rates[t.product.id].totalRates!==0?(i(),d("div",jt,[e.rates[t.product.id]?(i(),d("span",At,l((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)%1===0?e.rates[t.product.id].totalRates/e.rates[t.product.id].people:(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)),1)):a("",!0),e.rates[t.product.id]?(i(),d("i",{key:1,class:u(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))===0&&(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)!=0,"text-orange":(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)>1||Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))==0&&(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)!=0||(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)==1,"text-lightGray":(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)<1&&Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))<0||!(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)||(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)==0}])},null,2)):a("",!0),e.rates[t.product.id]?(i(),d("i",{key:2,class:u(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))===1&&(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)!=1,"text-orange":(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)>2||Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))==1&&(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)!=1||(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)==2,"text-lightGray":(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)<2&&Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))<1||!(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)||(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)==1}])},null,2)):a("",!0),e.rates[t.product.id]?(i(),d("i",{key:3,class:u(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))===2&&(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)!=2,"text-orange":(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)>3||Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))==2&&(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)!=2||(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)==3,"text-lightGray":(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)<3&&Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))<2||!(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)||(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)==2}])},null,2)):a("",!0),e.rates[t.product.id]?(i(),d("i",{key:4,class:u(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))===3&&(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)!=3,"text-orange":(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)>4||Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))==3&&(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)!=3||(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)==4,"text-lightGray":(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)<4&&Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))<3||!(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)||(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)==3}])},null,2)):a("",!0),e.rates[t.product.id]?(i(),d("i",{key:5,class:u(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))===4&&(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)!=4,"text-orange":(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)>5||Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))==4&&(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)!=4||(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)==5,"text-lightGray":(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)<5&&Math.floor((e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1))<4||!(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)||(e.rates[t.product.id].totalRates/e.rates[t.product.id].people).toFixed(1)==4}])},null,2)):a("",!0)])):e.rates[t.product.id]&&e.rates[t.product.id].totalRates===0?(i(),d("div",Lt,Ut)):a("",!0),s("div",Wt,[t.product?(i(),d("del",{key:0,class:u(["me-2 text-muted mt-1",{"d-none":!t.product.isCheaper}])},"NT$ "+l(t.product.originalPrice),3)):a("",!0),t.product?(i(),d("span",Xt,[s("span",{class:u({"text-danger":t.product.isCheaper,"fw-bold":t.product.isCheaper})},"NT$ "+l(t.product.price),3),h(" / "+l(t.product.num)+l(t.product.unit),1)])):a("",!0)])]),_:2},1032,["to"])):a("",!0)])]))),128))])])]),x(w,{"get-bookmarks":b.getBookmarks,id:e.deleteId,"page-status":e.pageStatus,"open-delete-modal":b.openDeleteModal},null,8,["get-bookmarks","id","page-status","open-delete-modal"])])}const ie=v(Y,[["render",Yt]]);export{ie as default};
