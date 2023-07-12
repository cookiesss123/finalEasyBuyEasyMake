import{R as N}from"./vue-router-8d0a8096.js";import{m as M,a as V}from"./index-f77dcddc.js";import{c as R}from"./carts-d5b2a762.js";import{n as T}from"./numberCommaMixin-e0aac39c.js";import{P as q}from"./PaginationComponent-d6bbab82.js";import{C,_ as j}from"./icon-searchMobile-657ef2e6.js";import{r as p,b as y,o as U,d as g,s as F,c as I,a as E}from"./db-143b9a4b.js";import{L as G}from"./index-cef339c7.js";import{w as f,v as D,d as H,m as b}from"./runtime-dom.esm-bundler-05da3382.js";import{_ as A}from"./loadingLogo-ccd03794.js";import{_ as K}from"./image5-4fc2427e.js";import{_ as z}from"./image4-1806383b.js";import{_ as X}from"./icon-cart-6dfbd1c6.js";import{_ as J}from"./undraw_Page_not_found_re_e9o6-de2ef5f7.js";import{_ as Q,a7 as n,F as v,a9 as P,a8 as e,ag as l,aa as w,ad as d,ac as m,N as L,ae as S,ab as _,r as x,o as c}from"./_plugin-vue_export-helper-e5f607bc.js";import"./_commonjsHelpers-042e6b4d.js";import"./base-component-5a126788.js";const W={components:{RouterLink:N,PaginationComponent:q,Loading:G},data(){return{priceOrRateCollapse:{},highOrLowCollapse:{},products:[],priceOrRate:"價格",highOrLow:"不拘",productSearchName:"",filterProducts:[],myCollapse:{},bookMarks:[],recipes:[],pageStatus:"全部",selectPage:"全部",search:!1,uid:"",isLoading:!1,fullPage:!0}},mixins:[T],methods:{...M(R,["addCart","toastMessage"]),getProducts(){const i=p(g,"products/");y(i,o=>{this.products=o.val(),this.products=Object.entries(this.products).map(h=>(h[1].id=h[0],h[1]));const k=p(g,"productRates/");y(k,h=>{let s=h.val();s=Object.values(s).map((a,r)=>(a.id=Object.keys(s)[r],a)),console.log(s,this.products,"全部產品的評價還未分類產品"),this.products.forEach((a,r)=>{s.forEach(u=>{a.id===u.productId&&!this.products[r].scores?(this.products[r].scores=u.score,this.products[r].ratePeople=1,this.products[r].averageRate=Number((this.products[r].scores/this.products[r].ratePeople).toFixed(1))):a.id===u.productId&&this.products[r].scores&&(this.products[r].scores+=u.score,this.products[r].ratePeople+=1,this.products[r].averageRate=Number((this.products[r].scores/this.products[r].ratePeople).toFixed(1)))})}),this.products.forEach((a,r)=>{a.averageRate||(this.products[r].scores=0,this.products[r].ratePeople=0,this.products[r].averageRate=0)}),console.log(this.products,"加了評分的產品"),this.filterProducts=this.products,this.isLoading=!1,!this.$route.query.pageStatus&&this.$route.fullPath==="/products"?this.$refs.pagination.renderPage(1,this.filterProducts):this.$route.query.pageStatus&&this.searchProducts()})})},searchProducts(){this.pageStatus==="全部"?this.filterProducts=this.products:this.pageStatus==="食材組合包"?this.filterProducts=this.products.filter(i=>i.category==="組合包"):this.pageStatus==="熱銷單品"?this.filterProducts=this.products.filter(i=>i.category==="單一產品"):this.pageStatus==="特價商品"&&(this.filterProducts=this.products.filter(i=>i.isCheaper===!0)),this.priceOrRate==="價格"&&this.highOrLow!=="不拘"?this.highOrLow==="低到高"?this.filterProducts=this.filterProducts.sort((i,o)=>i.price-o.price):this.highOrLow==="高到低"&&(this.filterProducts=this.filterProducts.sort((i,o)=>o.price-i.price)):this.priceOrRate==="評價"&&this.highOrLow!=="不拘"&&(this.highOrLow==="低到高"?this.filterProducts=this.filterProducts.sort((i,o)=>i.averageRate!==o.averageRate?i.averageRate-o.averageRate:i.scores-o.scores):this.highOrLow==="高到低"&&(this.filterProducts=this.filterProducts.sort((i,o)=>i.averageRate!==o.averageRate?o.averageRate-i.averageRate:o.scores-i.scores))),this.filterProducts=this.filterProducts.filter(i=>i.title.match(this.productSearchName)),console.log(this.filterProducts,"是什麼???"),this.search=!0,this.$refs.pagination.renderPage(1,this.filterProducts)},getBookmarks(){U(E,i=>{if(i){this.uid=i.uid,console.log(this.uid,"使用者已登入取得 uid");const o=p(g,"users/"+i.uid);y(o,k=>{this.user=k.val(),console.log(this.user,"讀取的資料"),this.user.admin&&console.log("管理者登場");const h=p(g,`productBookmarks/${this.uid}`);y(h,s=>{this.bookMarks=s.val(),this.bookMarks&&(this.bookMarks=Object.keys(this.bookMarks)),console.log(this.bookMarks,"書籤")})})}else console.log("並未登入"),this.uid=null,this.user={}})},addBookmark(i){if(!this.uid){this.toastMessage("登入才可使用收藏功能","error");return}const o=p(g,`productBookmarks/${this.uid}/${i.id}`);F(o,i),this.toastMessage("收藏成功")},deleteBookmark(i){I(p(g,`productBookmarks/${this.uid}/${i}`)),this.toastMessage("刪除收藏")}},mounted(){this.isLoading=!0,this.priceOrRateCollapse=new C(this.$refs.priceOrRateCollapse,{toggle:!1,parent:"#myGroup"}),this.highOrLowCollapse=new C(this.$refs.highOrLowCollapse,{toggle:!1,parent:"#myGroup"}),(this.$route.query.pageStatus||this.$route.query.searchName||this.$route.query.valueHighOrLow||this.$route.query.valuePriceOrRate)&&(this.pageStatus=this.$route.query.pageStatus,this.priceOrRate=this.$route.query.valuePriceOrRate,this.highOrLow=this.$route.query.valueHighOrLow,this.productSearchName=this.$route.query.searchName,console.log("存入了",this.pageStatus,this.priceOrRate,this.highOrLow,this.productSearchName)),this.getProducts(),this.getBookmarks()},watch:{selectPage(){this.pageStatus=this.selectPage,this.productSearchName="",this.pageStatus==="全部"?this.filterProducts=this.products:this.pageStatus==="食材組合包"?this.filterProducts=this.products.filter(i=>i.category==="組合包"):this.pageStatus==="熱銷單品"?this.filterProducts=this.products.filter(i=>i.category==="單一產品"):this.pageStatus==="特價商品"&&(this.filterProducts=this.products.filter(i=>i.isCheaper===!0)),this.$refs.pagination.renderPage(1,this.filterProducts)},priceOrRate(){this.priceOrRateCollapse.hide()},highOrLow(){this.highOrLowCollapse.hide()},filterProducts(){this.priceOrRateCollapse.hide(),this.highOrLowCollapse.hide()}},computed:{...V(R,["loadingItem"])}},Y={class:"",style:{"overflow-x":"hidden"}},Z=e("div",{class:"d-flex flex-column align-items-center py-10"},[e("img",{src:A,class:"loadingLogo mb-3",style:{width:"150px"},alt:""}),e("h1",{class:"text-center fw-bold text-red"},[e("span",{class:"me-1 animate-text"},"L"),e("span",{class:"mx-1 animate-text"},"o"),e("span",{class:"mx-1 animate-text"},"a"),e("span",{class:"mx-1 animate-text"},"d"),e("span",{class:"mx-1 animate-text"},"i"),e("span",{class:"mx-1 animate-text"},"n"),e("span",{class:"mx-1 animate-text"},"g"),e("span",{class:"mx-2 animate-text"},"."),e("span",{class:"me-2 animate-text"},"."),e("span",{class:"animate-text"},".")])],-1),$=e("section",{class:"bannerBg"},[e("div",{class:"mask"},[e("div",{class:"text",style:{}}," 材料種類 ")])],-1),ee={class:"container mt-4"},te={class:"categorySelector row gy-4 row-cols-lg-4 row-cols-1 list-unstyled"},se={class:"col d-flex border-end align-items-center justify-content-center"},oe=e("span",{class:"material-icons-outlined fs-2",style:{"border-bottom":"2px solid transparent !important"}},"apps",-1),ie={class:"col d-flex border-end align-items-center justify-content-center"},re=e("i",{class:"bi bi-bag-check-fill fs-3"},null,-1),ae={class:"col d-flex border-end align-items-center justify-content-center"},le=e("i",{class:"bi bi-fire fs-3"},null,-1),ne={class:"col d-flex align-items-center justify-content-center"},ce=e("i",{class:"bi bi-percent fs-3"},null,-1),de={class:"d-none d-lg-block container selectProduct pt-4"},he={class:"input-group"},ue=e("i",{class:"bi bi-caret-down-fill"},null,-1),pe={class:"ms-2 fw-bold"},ge=e("i",{class:"bi bi-caret-down-fill"},null,-1),me={class:"ms-2 fw-bold"},fe=e("img",{src:j,style:{height:"25px"},alt:""},null,-1),be=[fe],_e={class:"row g-0",id:"myGroup"},ke={class:"col-2"},ye={ref:"priceOrRateCollapse",class:"collapse"},ve={class:"card card-body border-0",style:{border:"0px !important"}},Pe={class:"btn-group-vertical",role:"group","aria-label":"Vertical radio toggle button group"},we=e("label",{class:"btn btn-outline-red",for:"selectprice"},"價格",-1),xe=e("label",{class:"btn btn-outline-red",for:"selectRate"},"評價",-1),Oe={class:"col-2"},Re={ref:"highOrLowCollapse",class:"collapse"},Ce={class:"card card-body border-0",style:{border:"0px !important"}},Le={class:"btn-group-vertical",role:"group","aria-label":"Vertical radio toggle button group"},Se=e("label",{class:"btn btn-outline-red",for:"noDifference"},"不拘",-1),Be=e("label",{class:"btn btn-outline-red",for:"highToLow"},"高到低",-1),Ne=e("label",{class:"btn btn-outline-red",for:"lowToHigh"},"低到高",-1),Me={class:"container mt-4"},Ve={key:0,class:"row row-cols-lg-4 row-cols-2 gy-4"},Te={class:"card position-relative bg-transparent",style:{border:"1px solid transparent","border-radius":"0"}},qe={class:"cardImg"},je=["src"],Ue={class:"card-text mb-0"},Fe=e("p",{class:"detail d-none d-lg-block position-absolute fw-bold",style:{top:"35%",left:"50%",transform:"translateX(-50%)","letter-spacing":"5px"}},"查看商品資訊",-1),Ie=["onClick"],Ee=e("img",{src:K},null,-1),Ge=[Ee],De={key:0,style:{"pointer-events":"none"},class:"d-flex flex-column align-items-center text-white p-2 bg-red position-absolute top-0 start-0"},He=["onClick"],Ae=e("img",{src:z},null,-1),Ke=[Ae],ze=["disabled","onClick"],Xe=e("img",{src:X,alt:"",class:"rounded-circle shadow-sm"},null,-1),Je=[Xe],Qe={class:"fw-bold cardTextTitle"},We={class:""},Ye={class:"mt-1 d-block d-lg-inline-block"},Ze={class:"mb-0 ms-auto starRates"},$e={class:"me-1"},et=e("i",{class:"bi bi-star-fill"},null,-1),tt={key:1,class:"py-10"},st=e("img",{src:J,class:"mb-3",alt:"",style:{height:"250px",display:"block",margin:"auto"}},null,-1),ot=e("h2",{class:"text-center"},"查無商品，請您重新查詢",-1),it=[st,ot];function rt(i,o,k,h,s,a){const r=x("loading"),u=x("RouterLink"),B=x("PaginationComponent");return c(),n("div",Y,[v(r,{active:s.isLoading,"onUpdate:active":o[0]||(o[0]=t=>s.isLoading=t),"can-cancel":!1,"is-full-page":s.fullPage,"lock-scroll":!0},{default:P(()=>[Z]),_:1},8,["active","is-full-page"]),$,e("section",ee,[e("ul",te,[e("li",se,[e("a",{href:"#",onClick:o[1]||(o[1]=f(()=>s.selectPage="全部",["prevent"])),class:l(["text-decoration-none d-flex align-items-center link-secondary",{"fw-bold":s.pageStatus==="全部","link-red":s.pageStatus==="全部"}])},[oe,e("span",{class:l(["fs-4",{dottedStyle:s.selectPage==="全部"}])},"全部",2)],2)]),e("li",ie,[e("a",{href:"#",onClick:o[2]||(o[2]=f(()=>s.selectPage="食材組合包",["prevent"])),class:l(["text-decoration-none d-flex align-items-center link-secondary",{"fw-bold":s.pageStatus==="食材組合包","link-red":s.pageStatus==="食材組合包"}])},[re,e("span",{class:l(["fs-4 ms-1",{dottedStyle:s.selectPage==="食材組合包"}])},"食材組合包",2)],2)]),e("li",ae,[e("a",{href:"#",onClick:o[3]||(o[3]=f(()=>s.selectPage="熱銷單品",["prevent"])),class:l(["text-decoration-none d-flex align-items-center link-secondary",{"fw-bold":s.pageStatus==="熱銷單品","link-red":s.pageStatus==="熱銷單品"}])},[le,e("span",{class:l(["fs-4 ms-1",{dottedStyle:s.selectPage==="熱銷單品"}])},"熱銷單品",2)],2)]),e("li",ne,[e("a",{href:"#",onClick:o[4]||(o[4]=f(()=>s.selectPage="特價商品",["prevent"])),class:l(["text-decoration-none d-flex align-items-center link-secondary",{"fw-bold":s.pageStatus==="特價商品","link-red":s.pageStatus==="特價商品"}])},[ce,e("span",{class:l(["fs-4 ms-1",{dottedStyle:s.selectPage==="特價商品"}])},"特價商品",2)],2)])])]),e("div",de,[e("div",he,[e("a",{class:"btn btn-outline-red px-5",onClick:o[5]||(o[5]=()=>this.priceOrRateCollapse.toggle())},[w("篩選對象 "),ue,e("span",pe,d(s.priceOrRate),1)]),e("button",{class:"btn btn-outline-red px-5",type:"button",onClick:o[6]||(o[6]=()=>this.highOrLowCollapse.toggle())},[w("篩選值 "),ge,e("span",me,d(s.highOrLow),1)]),m(e("input",{type:"search",class:"form-control border-red border-end-0",placeholder:"請輸入食材名稱","aria-label":"Example text with two button addons","onUpdate:modelValue":o[7]||(o[7]=t=>s.productSearchName=t),onKeyup:o[8]||(o[8]=H((...t)=>a.searchProducts&&a.searchProducts(...t),["enter"]))},null,544),[[D,s.productSearchName]]),e("button",{type:"submit",class:"btn border border-red border-start-0 bg-transparent",onClick:o[9]||(o[9]=f((...t)=>a.searchProducts&&a.searchProducts(...t),["prevent"]))},be)]),e("div",_e,[e("div",ke,[e("div",ye,[e("div",ve,[e("div",Pe,[m(e("input",{type:"radio",class:"btn-check",value:"價格",name:"priceOrRate",id:"selectprice",autocomplete:"off","onUpdate:modelValue":o[10]||(o[10]=t=>s.priceOrRate=t)},null,512),[[b,s.priceOrRate]]),we,m(e("input",{type:"radio",class:"btn-check",value:"評價",name:"priceOrRate",id:"selectRate",autocomplete:"off","onUpdate:modelValue":o[11]||(o[11]=t=>s.priceOrRate=t)},null,512),[[b,s.priceOrRate]]),xe])])],512)]),e("div",Oe,[e("div",Re,[e("div",Ce,[e("div",Le,[m(e("input",{type:"radio",class:"btn-check",value:"不拘",name:"highOrLow",id:"noDifference",autocomplete:"off",checked:"","onUpdate:modelValue":o[12]||(o[12]=t=>s.highOrLow=t)},null,512),[[b,s.highOrLow]]),Se,m(e("input",{type:"radio",class:"btn-check",value:"高到低",name:"highOrLow",id:"highToLow",autocomplete:"off","onUpdate:modelValue":o[13]||(o[13]=t=>s.highOrLow=t)},null,512),[[b,s.highOrLow]]),Be,m(e("input",{type:"radio",class:"btn-check",value:"低到高",name:"highOrLow",id:"lowToHigh",autocomplete:"off","onUpdate:modelValue":o[14]||(o[14]=t=>s.highOrLow=t)},null,512),[[b,s.highOrLow]]),Ne])])],512)])])]),e("div",Me,[s.filterProducts.length&&!s.isLoading?(c(),n("div",Ve,[(c(!0),n(L,null,S(this.$refs.pagination.pageProducts,t=>(c(),n("div",{class:"col text-decoration-none",key:t.id},[e("div",Te,[e("div",qe,[v(u,{to:`/products/${t.id}`,class:"enlargeImg border-0"},{default:P(()=>[e("img",{src:t.imgUrl,class:"card-img",height:"220",style:{"object-fit":"cover","max-width":"100%","max-height":"100%","border-radius":"0"},alt:""},null,8,je)]),_:2},1032,["to"])]),e("h5",Ue,[Fe,e("button",{type:"button",class:"position-absolute bookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2",onClick:()=>a.addBookmark(t)},Ge,8,Ie),t.isCheaper?(c(),n("span",De,d((100-((t.originalPrice-t.price)/t.originalPrice*100).toFixed(0))%10===0?(100-((t.originalPrice-t.price)/t.originalPrice*100).toFixed(0)).toString().charAt(0):100-((t.originalPrice-t.price)/t.originalPrice*100).toFixed(0))+" 折 ",1)):_("",!0),(c(!0),n(L,null,S(s.bookMarks,O=>(c(),n("div",{key:O},[O===t.id?(c(),n("button",{key:0,type:"button",class:"position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2",onClick:()=>a.deleteBookmark(t.id)},Ke,8,He)):_("",!0)]))),128)),e("button",{disabled:i.loadingItem==="loading",onClick:()=>i.addCart(t),type:"button",class:"buyBtn border-0 bg-transparent me-lg-2 me-1 position-absolute end-0"},Je,8,ze)]),v(u,{to:`/products/${t.id}`,class:"card-footer bg-transparent border-0 text-decoration-none link-darkBrown pt-lg-3"},{default:P(()=>[e("h5",Qe,d(t.title),1),e("div",{class:l(["d-flex align-items-lg-center cardTextPrice",{"align-items-end":t.isCheaper,"align-items-center":!t.isCheaper}])},[e("div",We,[t.originalPrice?(c(),n("del",{key:0,class:l(["me-2 text-muted mt-1",{"d-none":!t.isCheaper}])},"NT$ "+d(i.numberComma(t.originalPrice)),3)):_("",!0),e("span",Ye,[t.price?(c(),n("span",{key:0,class:l({"text-danger":t.isCheaper,"fw-bold":t.isCheaper})}," NT$ "+d(i.numberComma(t.price)),3)):_("",!0),w(" / "+d(t.num)+d(t.unit),1)])]),e("h5",Ze,[e("div",{class:l(["badge border rounded-pill bg-white",{"text-orange":t.averageRate,"border-orange":t.averageRate,"text-lightBrownGray":!t.averageRate,"border-lightBrownGray":!t.averageRate}])},[e("span",$e,d(t.averageRate),1),et],2)])],2)]),_:2},1032,["to"])])]))),128))])):!s.filterProducts.length&&s.search&&!s.isLoading?(c(),n("div",tt,it)):_("",!0)]),v(B,{ref:"pagination","price-or-rate":s.priceOrRate,"filter-products":s.filterProducts},null,8,["price-or-rate","filter-products"])])}const wt=Q(W,[["render",rt]]);export{wt as default};
