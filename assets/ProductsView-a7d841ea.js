import{R as L}from"./vue-router-1aba70ec.js";import{m as N,b as E}from"./axios-bfb5b7ba.js";import{c as P}from"./carts-1385fab3.js";import{n as I,_ as C}from"./image5-ecc1f969.js";import{P as V}from"./PaginationComponent-ed452a28.js";import{L as T}from"./LoadingModal-344ca87b.js";import{v as j,d as A,w as G,e as f}from"./runtime-dom.esm-bundler-bb3e8e23.js";import{_ as U}from"./icon-search-d6364761.js";import{_ as M}from"./image4-1806383b.js";import{_ as O}from"./icon-cart-09916409.js";import{_ as u}from"./icon-star-c15bacb9.js";import{_ as q}from"./undraw_Page_not_found_re_e9o6-6d6a6f1b.js";import{_ as z,U as l,W as R,V as s,a4 as p,Y as g,a0 as h,$ as _,a1 as y,a2 as k,Z as d,r as v,o as i,X as F,c as D}from"./_plugin-vue_export-helper-cbb9d8af.js";import"./_commonjsHelpers-042e6b4d.js";import"./modal-838a1639.js";import"./base-component-5a126788.js";const{VITE_PATH:c}={VITE_PATH:"https://vue-final-dbjson-1aoj4rvyf-cookiesss123.vercel.app",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},H={components:{RouterLink:L,PaginationComponent:V,LoadingModal:T},data(){return{products:[],priceOrRate:"價格",highOrLow:"不拘",productSearchName:"",filterProducts:[],myCollapse:{},bookMarks:[],deleteId:"",AllproductRates:[],averageRate:[],rates:{},recipes:[],pageStatus:"全部",selectPage:"全部",sortRates:[]}},mixins:[I],methods:{...N(P,["addCart","toastMessage"]),getProducts(){let a=`${c}/products`;this.pageStatus==="食材組合包"?a=`${c}/products?category=組合包`:this.pageStatus==="熱銷單品"?a=`${c}/products?category=單一產品`:this.pageStatus==="特價商品"&&(a=`${c}/products?isCheaper=true`),this.$http.get(`${a}`).then(o=>{console.log("產品",o.data),this.products=o.data,this.filterProducts=o.data,this.priceOrRate==="評價"?this.$refs.pagination.renderPage(1,this.sortRates):this.priceOrRate==="價格"&&this.$refs.pagination.renderPage(1,this.filterProducts),setTimeout(()=>{this.$refs.loadingModal.hide()},200)}).catch(o=>{console.log(o)})},searchProduct(){let a=`${c}/products`;this.pageStatus==="食材組合包"?a=`${c}/products?category=組合包`:this.pageStatus==="熱銷單品"?a=`${c}/products?category=單一產品`:this.pageStatus==="特價商品"&&(a=`${c}/products?isCheaper=true`),this.$http.get(`${a}`).then(o=>(console.log("產品",o.data),this.products=o.data,this.filterProducts=o.data,this.$refs.pagination.renderPage(1,this.filterProducts),this.$http.get(`${c}/productRates?_expand=product`))).then(o=>{console.log("所有產品評價",o.data),this.AllproductRates=o.data,this.AllproductRates.forEach(r=>{this.rates[r.product.id]===void 0?this.rates[r.product.id]={totalRates:r.score,people:1,averageRate:r.score/1,product:r.product}:(this.rates[r.product.id].totalRates+=r.score,this.rates[r.product.id].people+=1,this.rates[r.product.id].averageRate=Number((this.rates[r.product.id].totalRates/this.rates[r.product.id].people).toFixed(1)))}),this.products.forEach(r=>{Object.keys(this.rates).forEach(t=>{this.rates[r.id]===void 0&&(this.rates[r.id]={totalRates:0,people:0,averageRate:0,product:r})})}),console.log("所有評價分類",this.rates),console.log(this.pageStatus,"搜尋頁面"),this.sortRates=[];let n=`${c}/products`;if(this.highOrLow==="不拘"){this.filterProducts=this.products.filter(r=>r.title.match(this.productSearchName)),this.$refs.pagination.renderPage(1,this.filterProducts);return}else this.priceOrRate==="價格"?(console.log("有價格嗎?????????? 怎麼沒進到這???"),this.highOrLow==="低到高"?(n=`${c}/products?_sort=price&_order=asc`,console.log("全部 - 價格低到高!!!!!!!!!!!!!!!!!!"),this.pageStatus==="食材組合包"?n=`${c}/products?category=組合包&_sort=price&_order=asc`:this.pageStatus==="熱銷單品"?n=`${c}/products?category=單一產品&_sort=price&_order=asc`:this.pageStatus==="特價商品"&&(n=`${c}/products?isCheaper=true&_sort=price&_order=asc`)):this.highOrLow==="高到低"&&(n=`${c}/products?_sort=price&_order=desc`,console.log("全部 - 價格高到低!!!!!!!!!!!!!!!!!!"),this.pageStatus==="食材組合包"?n=`${c}/products?category=組合包&_sort=price&_order=desc`:this.pageStatus==="熱銷單品"?n=`${c}/products?category=單一產品&_sort=price&_order=desc`:this.pageStatus==="特價商品"&&(n=`${c}/products?isCheaper=true&_sort=price&_order=desc`))):this.priceOrRate==="評價"&&(this.highOrLow==="低到高"?(this.sortRates=Object.entries(this.rates).sort((r,t)=>r[1].averageRate!==t[1].averageRate?r[1].averageRate-t[1].averageRate:r[1].totalRates-t[1].totalRates),this.pageStatus==="食材組合包"?(console.log("組合包頁面"),this.sortRates=this.sortRates.filter(r=>r[1].product.category==="組合包")):this.pageStatus==="熱銷單品"?(console.log("熱銷單品頁面"),this.sortRates=this.sortRates.filter(r=>r[1].product.category==="單一產品")):this.pageStatus==="特價商品"&&(console.log("特價商品頁面"),this.sortRates=this.sortRates.filter(r=>r[1].product.isCheaper===!0)),console.log(this.sortRates,"排序好的產品評價 低到高")):this.highOrLow==="高到低"&&(this.sortRates=Object.entries(this.rates).sort((r,t)=>r[1].averageRate!==t[1].averageRate?t[1].averageRate-r[1].averageRate:t[1].totalRates-r[1].totalRates),this.pageStatus==="食材組合包"?(console.log("組合包頁面"),this.sortRates=this.sortRates.filter(r=>r[1].product.category==="組合包")):this.pageStatus==="熱銷單品"?(console.log("熱銷單品頁面"),this.sortRates=this.sortRates.filter(r=>r[1].product.category==="單一產品")):this.pageStatus==="特價商品"&&(console.log("特價商品頁面"),this.sortRates=this.sortRates.filter(r=>r[1].product.isCheaper===!0)),console.log(this.sortRates,"排序好的產品評價 高到低")),this.$refs.pagination.renderPage(1,this.sortRates));this.$http.get(`${n}`).then(r=>{console.log("重新",r.data),this.filterProducts=r.data,this.filterProducts=this.filterProducts.filter(t=>t.title.match(this.productSearchName)),this.sortRates=this.sortRates.filter(t=>t[1].product.title.match(this.productSearchName)),this.priceOrRate==="評價"?this.$refs.pagination.renderPage(1,this.sortRates):this.priceOrRate==="價格"&&this.$refs.pagination.renderPage(1,this.filterProducts)}).catch(r=>{console.log(r)})}).catch(o=>{console.log(o)})},getBookmarks(){if(!this.token)return;const a=`${c}/600/users/${this.userId}/productBookmarks?_expand=product`;this.$http.get(a,{headers:{authorization:`Bearer ${this.token}`}}).then(o=>{console.log(o.data),this.bookMarks=o.data}).catch(o=>{console.log(o)})},addBookmark(a){if(!this.token){this.toastMessage("登入才可使用收藏功能","error");return}const o={userId:this.userId,productId:a};this.$http.post(`${c}/600/users/${this.userId}/productBookmarks?_expand=product`,o,{headers:{authorization:`Bearer ${this.token}`}}).then(n=>{console.log(n.data),this.getBookmarks(),this.toastMessage("收藏成功")}).catch(n=>{console.log(n)})},deleteBookmark(a){let o="";this.bookMarks.forEach(n=>{n.productId.toString()===a.toString()&&(o=n.id)}),this.$http.delete(`${c}/600/productBookmarks/${Number(o)}`,{headers:{authorization:`Bearer ${this.token}`}}).then(n=>{console.log(n.data),this.getBookmarks(),this.toastMessage("刪除收藏")}).catch(n=>{console.log(n)})},getAllProductRates(){this.$http.get(`${c}/productRates?_expand=product`).then(a=>{console.log("所有產品評價",a.data),this.AllproductRates=a.data,this.AllproductRates.forEach(o=>{this.rates[o.product.id]===void 0?this.rates[o.product.id]={totalRates:o.score,people:1,averageRate:o.score/1,product:o.product}:(this.rates[o.product.id].totalRates+=o.score,this.rates[o.product.id].people+=1,this.rates[o.product.id].averageRate=Number((this.rates[o.product.id].totalRates/this.rates[o.product.id].people).toFixed(1)))}),this.products.forEach(o=>{Object.keys(this.rates).forEach(n=>{this.rates[o.id]===void 0&&(this.rates[o.id]={totalRates:0,people:0,averageRate:0,product:o})})}),console.log("所有評價分類",this.rates)}).catch(a=>{console.log(a)})},async executeAsyncFunctions(){try{const o=[this.getBookmarks,this.searchProduct].map(n=>n.call(this));await Promise.all(o),setTimeout(()=>{this.$refs.loadingModal.hide()},500)}catch(a){console.error(a,"什麼錯誤???")}}},mounted(){this.$refs.loadingModal.show(),(this.$route.query.pageStatus||this.$route.query.searchName||this.$route.query.valueHighOrLow||this.$route.query.valuePriceOrRate)&&(this.pageStatus=this.$route.query.pageStatus,this.priceOrRate=this.$route.query.valuePriceOrRate,this.highOrLow=this.$route.query.valueHighOrLow,this.productSearchName=this.$route.query.searchName,console.log("存入了",this.pageStatus,this.priceOrRate,this.highOrLow,this.productSearchName)),this.executeAsyncFunctions()},watch:{selectPage(){this.$refs.loadingModal.show(),this.pageStatus=this.selectPage,this.priceOrRate="價格",this.highOrLow="不拘",this.sortRates=[],this.getProducts(),console.log("換頁囉",this.pageStatus),this.productSearchName=""}},computed:{...E(P,["token","userId","loadingItem"])}},K={class:"my-10"},W={class:"nav nav-tabs container d-flex justify-content-center justify-content-lg-start",id:"myTab",role:"tablist"},X={class:"nav-item me-3 me-lg-0",role:"presentation"},Y={class:"nav-item",role:"presentation"},Z=s("i",{class:"bi bi-bag-check-fill"},null,-1),J={class:"nav-item",role:"presentation"},Q=s("i",{class:"bi bi-fire"},null,-1),$={class:"nav-item",role:"presentation"},ee=s("i",{class:"bi bi-percent"},null,-1),te={class:"d-none d-lg-block container selectProduct pt-4"},se={class:"input-group"},oe={class:"btn btn-outline-brown px-5","data-bs-toggle":"collapse",href:"#multiCollapseExample1",role:"button","aria-expanded":"false","aria-controls":"multiCollapseExample1"},re=s("i",{class:"bi bi-caret-down-fill"},null,-1),ie={class:"ms-2 fw-bold"},le={class:"btn btn-outline-brown px-5",type:"button","data-bs-toggle":"collapse","data-bs-target":"#multiCollapseExample2","aria-expanded":"false","aria-controls":"multiCollapseExample2"},ae=s("i",{class:"bi bi-caret-down-fill"},null,-1),ne={class:"ms-2 fw-bold"},de=s("img",{src:U,style:{height:"25px"},alt:""},null,-1),ce=[de],pe={class:"row g-0",id:"myGroup"},he={class:"col-2"},ue={ref:"collapse1","data-bs-parent":"#myGroup",class:"collapse multi-collapse",id:"multiCollapseExample1"},ge={class:"card card-body border-0"},be={class:"btn-group-vertical",role:"group","aria-label":"Vertical radio toggle button group"},_e=s("label",{class:"btn btn-outline-brown",for:"selectprice"},"價格",-1),fe=s("label",{class:"btn btn-outline-brown",for:"selectRate"},"評價",-1),Re={class:"col-2"},xe={ref:"collapse2","data-bs-parent":"#myGroup",class:"collapse multi-collapse",id:"multiCollapseExample2"},me={class:"card card-body border-0"},ye={class:"btn-group-vertical",role:"group","aria-label":"Vertical radio toggle button group"},ke=s("label",{class:"btn btn-outline-brown",for:"noDifference"},"不拘",-1),Fe=s("label",{class:"btn btn-outline-brown",for:"highToLow"},"高到低",-1),ve=s("label",{class:"btn btn-outline-brown",for:"lowToHigh"},"低到高",-1),we={class:"container mt-4"},Pe={key:0,class:"row row-cols-lg-4 row-cols-1 gy-4"},Ce={class:"card position-relative border-0 bg-transparent",style:{"border-radius":"20px"}},Me={class:"cardImg",style:{"border-radius":"20px"}},Oe=["src"],Se={class:"card-text"},Be=["onClick"],Le=s("img",{src:C},null,-1),Ne=[Le],Ee={key:0,style:{"pointer-events":"none","font-size":"14px"},class:"d-flex flex-column align-items-center text-orange p-2 bg-brown border-0 me-3 position-absolute top-0 end-0"},Ie={class:"mb-1"},Ve=["onClick"],Te=s("img",{src:M},null,-1),je=[Te],Ae=["disabled","onClick"],Ge=s("img",{src:O,style:{height:"48px"},alt:"",class:"rounded-circle shadow-sm"},null,-1),Ue=[Ge],qe={class:"h5 fw-bold"},ze={class:"row"},De={key:0,class:"col"},He={key:0,class:"me-1"},Ke={key:1,class:"col-12"},We=s("span",{class:"me-1 text-muted"},"未有評價",-1),Xe=s("img",{src:u,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),Ye=s("img",{src:u,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),Ze=s("img",{src:u,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),Je=s("img",{src:u,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),Qe=s("img",{src:u,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),$e=[We,Xe,Ye,Ze,Je,Qe],et={class:"col-12 d-flex justify-content-end"},tt={class:"mt-1"},st={key:1,class:"row row-cols-lg-4 row-cols-1 gy-4"},ot={class:"card position-relative border-0 bg-transparent",style:{"border-radius":"20px"}},rt={class:"cardImg",style:{"border-radius":"20px"}},it=["src"],lt={class:"card-text"},at=["onClick"],nt=s("img",{src:C},null,-1),dt=[nt],ct={key:0,style:{"pointer-events":"none","font-size":"14px"},class:"d-flex flex-column align-items-center text-orange p-2 bg-brown border-0 me-3 position-absolute top-0 end-0"},pt={class:"mb-1"},ht=["onClick"],ut=s("img",{src:M},null,-1),gt=[ut],bt=["onClick"],_t=s("img",{src:O,style:{height:"48px"},alt:"",class:"rounded-circle shadow-sm"},null,-1),ft=[_t],Rt={class:"h5 fw-bold"},xt={class:"row"},mt={key:0,class:"col-12"},yt={key:0,class:"me-1"},kt={key:1,class:"col-12"},Ft=s("span",{class:"me-1 text-muted"},"未有評價",-1),vt=s("img",{src:u,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),wt=s("img",{src:u,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),Pt=s("img",{src:u,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),Ct=s("img",{src:u,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),Mt=s("img",{src:u,class:"mb-1 me-1",width:"17",height:"17",alt:""},null,-1),Ot=[Ft,vt,wt,Pt,Ct,Mt],St={class:"col-12 d-flex justify-content-end"},Bt={key:1,class:"mt-1"},Lt={key:2,class:"py-10"},Nt=s("img",{src:q,class:"mb-3",alt:"",style:{height:"250px",display:"block",margin:"auto"}},null,-1),Et=s("h2",{class:"text-center"},"查無商品，請您重新查詢",-1),It=[Nt,Et];function Vt(a,o,n,r,t,b){const S=v("LoadingModal"),x=v("RouterLink"),B=v("PaginationComponent");return i(),l("div",K,[R(S,{ref:"loadingModal",style:{"z-index":"2001"}},null,512),s("ul",W,[s("li",X,[s("button",{class:p(["nav-link px-1 px-3 py-lg-2",{active:t.pageStatus==="全部"}]),id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true",onClick:o[0]||(o[0]=()=>t.selectPage="全部")},"全部",2)]),s("li",Y,[s("button",{class:p(["nav-link px-1 px-3 py-lg-2 me-3 me-lg-0",{active:t.pageStatus==="食材組合包"}]),id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false",onClick:o[1]||(o[1]=()=>t.selectPage="食材組合包")},[Z,g(" 食材組合包")],2)]),s("li",J,[s("button",{class:p(["nav-link px-1 px-3 py-lg-2 me-3 me-lg-0",{active:t.pageStatus==="熱銷單品"}]),id:"popularProducts-tab","data-bs-toggle":"tab","data-bs-target":"#popularProducts",type:"button",role:"tab","aria-controls":"popularProducts","aria-selected":"false",onClick:o[2]||(o[2]=()=>t.selectPage="熱銷單品")},[Q,g(" 熱銷單品")],2)]),s("li",$,[s("button",{class:p(["nav-link px-1 px-3 py-lg-2",{active:t.pageStatus==="特價商品"}]),id:"contact-tab","data-bs-toggle":"tab","data-bs-target":"#contact",type:"button",role:"tab","aria-controls":"contact","aria-selected":"false",onClick:o[3]||(o[3]=()=>t.selectPage="特價商品")},[ee,g(" 特價商品")],2)])]),s("div",te,[s("div",se,[s("a",oe,[g("篩選對象 "),re,s("span",ie,h(t.priceOrRate),1)]),s("button",le,[g("篩選值 "),ae,s("span",ne,h(t.highOrLow),1)]),_(s("input",{type:"search",class:"form-control border-brown border-end-0",placeholder:"請輸入食材名稱","aria-label":"Example text with two button addons","onUpdate:modelValue":o[4]||(o[4]=e=>t.productSearchName=e),onKeyup:o[5]||(o[5]=A((...e)=>b.searchProduct&&b.searchProduct(...e),["enter"]))},null,544),[[j,t.productSearchName]]),s("button",{type:"submit",class:"btn border border-brown border-start-0 bg-transparent",onClick:o[6]||(o[6]=G((...e)=>b.searchProduct&&b.searchProduct(...e),["prevent"]))},ce)]),s("div",pe,[s("div",he,[s("div",ue,[s("div",ge,[s("div",be,[_(s("input",{type:"radio",class:"btn-check",value:"價格",name:"priceOrRate",id:"selectprice",autocomplete:"off","onUpdate:modelValue":o[7]||(o[7]=e=>t.priceOrRate=e)},null,512),[[f,t.priceOrRate]]),_e,_(s("input",{type:"radio",class:"btn-check",value:"評價",name:"priceOrRate",id:"selectRate",autocomplete:"off","onUpdate:modelValue":o[8]||(o[8]=e=>t.priceOrRate=e)},null,512),[[f,t.priceOrRate]]),fe])])],512)]),s("div",Re,[s("div",xe,[s("div",me,[s("div",ye,[_(s("input",{type:"radio",class:"btn-check",value:"不拘",name:"highOrLow",id:"noDifference",autocomplete:"off",checked:"","onUpdate:modelValue":o[9]||(o[9]=e=>t.highOrLow=e)},null,512),[[f,t.highOrLow]]),ke,_(s("input",{type:"radio",class:"btn-check",value:"高到低",name:"highOrLow",id:"highToLow",autocomplete:"off","onUpdate:modelValue":o[10]||(o[10]=e=>t.highOrLow=e)},null,512),[[f,t.highOrLow]]),Fe,_(s("input",{type:"radio",class:"btn-check",value:"低到高",name:"highOrLow",id:"lowToHigh",autocomplete:"off","onUpdate:modelValue":o[11]||(o[11]=e=>t.highOrLow=e)},null,512),[[f,t.highOrLow]]),ve])])],512)])])]),s("div",we,[!t.sortRates.length&&t.filterProducts.length?(i(),l("div",Pe,[(i(!0),l(y,null,k(this.$refs.pagination.pageProducts,e=>(i(),l("div",{class:"col text-decoration-none",key:e.id},[s("div",Ce,[s("div",Me,[R(x,{to:`/products/${e.id}`,class:"enlargeImg"},{default:F(()=>[s("img",{src:e.imgUrl,class:"card-img",height:"220",style:{"border-radius":"20px","object-fit":"cover","max-width":"100%","max-height":"100%"},alt:""},null,8,Oe)]),_:2},1032,["to"])]),s("h5",Se,[s("button",{type:"button",class:"position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3",onClick:()=>b.addBookmark(e.id)},Ne,8,Be),e.isCheaper?(i(),l("span",Ee,[s("p",Ie,h((100-((e.originalPrice-e.price)/e.originalPrice*100).toFixed(0))%10===0?(100-((e.originalPrice-e.price)/e.originalPrice*100).toFixed(0)).toString().charAt(0):100-((e.originalPrice-e.price)/e.originalPrice*100).toFixed(0)),1),g("折")])):d("",!0),(i(!0),l(y,null,k(t.bookMarks,m=>(i(),l("div",{key:m.id+4567},[m.productId===e.id?(i(),l("button",{key:0,type:"button",class:"position-absolute deleteBookmarkBtn border-0 bg-transparent me-auto top-0 m-3",onClick:()=>b.deleteBookmark(e.id)},je,8,Ve)):d("",!0)]))),128)),s("button",{disabled:a.loadingItem==="loading",onClick:()=>a.addCart(e),type:"button",class:"buyBtn border-0 bg-transparent me-3 position-absolute end-0",style:{top:"155px"}},Ue,8,Ae)]),R(x,{to:`/products/${e.id}`,class:"card-footer bg-transparent border-0 text-decoration-none link-darkBrown"},{default:F(()=>[s("h5",qe,h(e.title),1),s("div",ze,[t.rates[e.id]&&t.rates[e.id].totalRates!==0?(i(),l("div",De,[t.rates[e.id]?(i(),l("span",He,h((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)%1===0?t.rates[e.id].totalRates/t.rates[e.id].people:(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)),1)):d("",!0),t.rates[e.id]?(i(),l("i",{key:1,class:p(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))===0&&(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)!=0,"text-orange":(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)>1||Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))==0&&(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)!=0||(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)==1,"text-lightGray":(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)<1&&Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))<0||!(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)||(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)==0}])},null,2)):d("",!0),t.rates[e.id]?(i(),l("i",{key:2,class:p(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))===1&&(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)!=1,"text-orange":(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)>2||Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))==1&&(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)!=1||(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)==2,"text-lightGray":(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)<2&&Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))<1||!(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)||(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)==1}])},null,2)):d("",!0),t.rates[e.id]?(i(),l("i",{key:3,class:p(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))===2&&(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)!=2,"text-orange":(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)>3||Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))==2&&(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)!=2||(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)==3,"text-lightGray":(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)<3&&Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))<2||!(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)||(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)==2}])},null,2)):d("",!0),t.rates[e.id]?(i(),l("i",{key:4,class:p(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))===3&&(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)!=3,"text-orange":(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)>4||Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))==3&&(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)!=3||(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)==4,"text-lightGray":(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)<4&&Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))<3||!(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)||(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)==3}])},null,2)):d("",!0),t.rates[e.id]?(i(),l("i",{key:5,class:p(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))===4&&(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)!=4,"text-orange":(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)>5||Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))==4&&(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)!=4||(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)==5,"text-lightGray":(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)<5&&Math.floor((t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1))<4||!(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)||(t.rates[e.id].totalRates/t.rates[e.id].people).toFixed(1)==4}])},null,2)):d("",!0)])):t.rates[e.id]&&t.rates[e.id].totalRates===0?(i(),l("div",Ke,$e)):d("",!0),s("div",et,[e.originalPrice?(i(),l("del",{key:0,class:p(["me-2 text-muted mt-1",{"d-none":!e.isCheaper}])},"NT$ "+h(a.numberComma(e.originalPrice)),3)):d("",!0),s("span",tt,[e.price?(i(),l("span",{key:0,class:p({"text-danger":e.isCheaper,"fw-bold":e.isCheaper})}," NT$ "+h(a.numberComma(e.price)),3)):d("",!0),g(" / "+h(e.num)+h(e.unit),1)])])])]),_:2},1032,["to"])])]))),128))])):t.sortRates.length&&t.filterProducts.length?(i(),l("div",st,[(i(!0),l(y,null,k(this.$refs.pagination.pageProducts,(e,m)=>(i(),l("div",{class:"col text-decoration-none",key:m+6778},[s("div",ot,[s("div",rt,[e[1].product?(i(),D(x,{key:0,to:`/products/${e[1].product.id}`,class:"enlargeImg"},{default:F(()=>[s("img",{src:e[1].product.imgUrl,class:"card-img",height:"220",style:{"border-radius":"20px","object-fit":"cover","max-width":"100%","max-height":"100%"},alt:""},null,8,it)]),_:2},1032,["to"])):d("",!0)]),s("h5",lt,[s("button",{type:"button",class:"position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3",onClick:()=>b.addBookmark(e[1].product.id)},dt,8,at),e[1].product.isCheaper?(i(),l("span",ct,[s("p",pt,h(((1-e[1].product.price/e[1].product.originalPrice)*10).toFixed(1)),1),g("折")])):d("",!0),(i(!0),l(y,null,k(t.bookMarks,w=>(i(),l("div",{key:w.id+4567},[w.productId===e[1].product.id?(i(),l("button",{key:0,type:"button",class:"position-absolute deleteBookmarkBtn border-0 bg-transparent me-auto top-0 m-3",onClick:()=>b.deleteBookmark(e[1].product.id)},gt,8,ht)):d("",!0)]))),128)),s("button",{onClick:()=>a.addCart(e[1].product),type:"button",class:"buyBtn border-0 bg-transparent me-3 position-absolute top-50 end-0"},ft,8,bt)]),R(x,{to:`/item[1].products/${e[1].product.id}`,class:"card-footer bg-transparent border-0 text-decoration-none link-darkBrown"},{default:F(()=>[s("h5",Rt,h(e[1].product.title),1),s("div",xt,[t.rates[e[1].product.id].totalRates!==0?(i(),l("div",mt,[t.rates[e[1].product.id]?(i(),l("span",yt,h((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)%1===0?t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people:(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)),1)):d("",!0),t.rates[e[1].product.id]?(i(),l("i",{key:1,class:p(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))===0&&(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)!=0,"text-orange":(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)>1||Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))==0&&(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)!=0||(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)==1,"text-lightGray":(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)<1&&Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))<0||!(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)||(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)==0}])},null,2)):d("",!0),t.rates[e[1].product.id]?(i(),l("i",{key:2,class:p(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))===1&&(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)!=1,"text-orange":(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)>2||Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))==1&&(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)!=1||(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)==2,"text-lightGray":(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)<2&&Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))<1||!(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)||(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)==1}])},null,2)):d("",!0),t.rates[e[1].product.id]?(i(),l("i",{key:3,class:p(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))===2&&(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)!=2,"text-orange":(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)>3||Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))==2&&(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)!=2||(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)==3,"text-lightGray":(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)<3&&Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))<2||!(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)||(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)==2}])},null,2)):d("",!0),t.rates[e[1].product.id]?(i(),l("i",{key:4,class:p(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))===3&&(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)!=3,"text-orange":(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)>4||Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))==3&&(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)!=3||(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)==4,"text-lightGray":(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)<4&&Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))<3||!(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)||(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)==3}])},null,2)):d("",!0),t.rates[e[1].product.id]?(i(),l("i",{key:5,class:p(["bi bi-star-fill me-1",{"bi-star-half":Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))===4&&(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)!=4,"text-orange":(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)>5||Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))==4&&(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)!=4||(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)==5,"text-lightGray":(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)<5&&Math.floor((t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1))<4||!(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)||(t.rates[e[1].product.id].totalRates/t.rates[e[1].product.id].people).toFixed(1)==4}])},null,2)):d("",!0)])):(i(),l("div",kt,Ot)),s("div",St,[e[1].product.originalPrice?(i(),l("del",{key:0,class:p(["me-2 text-muted mt-1",{"d-none":!e[1].product.isCheaper}])},"NT$ "+h(a.numberComma(e[1].product.originalPrice)),3)):d("",!0),e[1].product.price?(i(),l("span",Bt,[s("span",{class:p({"text-danger":e[1].product.isCheaper,"fw-bold":e[1].product.isCheaper})},"NT$ "+h(a.numberComma(e[1].product.price)),3),g(" / "+h(e[1].product.num)+h(e[1].product.unit),1)])):d("",!0)])])]),_:2},1032,["to"])])]))),128))])):!t.filterProducts.length&&t.productSearchName?(i(),l("div",Lt,It)):d("",!0)]),R(B,{ref:"pagination","price-or-rate":t.priceOrRate,"filter-products":t.filterProducts,"sort-rates":t.sortRates},null,8,["price-or-rate","filter-products","sort-rates"])])}const $t=z(H,[["render",Vt]]);export{$t as default};
