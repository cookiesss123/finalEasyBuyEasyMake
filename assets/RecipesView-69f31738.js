import{R as T}from"./vue-router-2c21c692.js";import{m as N}from"./index-8f8f2e41.js";import{c as S}from"./carts-ab612c1d.js";import{n as U}from"./numberCommaMixin-e0aac39c.js";import{P as q}from"./PaginationComponent-c75be064.js";import{C as R,_ as G}from"./icon-searchMobile-fef2a013.js";import{L as Y}from"./LoadingModal-16ab9486.js";import{r as m,b as f,o as D,d as p,s as H,c as A,a as K}from"./db-143b9a4b.js";import{v as z,d as F,w as W,e as u}from"./runtime-dom.esm-bundler-54ced388.js";import{_ as X}from"./image5-4fc2427e.js";import{_ as Z}from"./image4-1806383b.js";import{_ as J}from"./undraw_Page_not_found_re_e9o6-de2ef5f7.js";import{_ as Q,U as l,W as y,V as e,a4 as r,Z as a,Y as k,a0 as h,$ as g,a1 as x,a2 as I,r as v,o as c,X as O}from"./_plugin-vue_export-helper-03b40388.js";import"./_commonjsHelpers-042e6b4d.js";import"./modal-5929133b.js";import"./loadingLogo-3bb466c0.js";const L="/finalEasyBuyEasyMake/assets/gettyimages-1268940871-a28aa7f6.jpg",B="/finalEasyBuyEasyMake/assets/IMGP0051-8dc73349.jpg",M="/finalEasyBuyEasyMake/assets/popularimage4-5263c958.png",j="/finalEasyBuyEasyMake/assets/photo-1533910534207-90f31029a78e-65885375.jpg",E="/finalEasyBuyEasyMake/assets/421Cv1xH8BYP44T9V8aY241R2UYjhTsiYa7giw6d-bba1ddf7.jpeg",V="/finalEasyBuyEasyMake/assets/pastiera2-415825e7.jpg";const $={components:{RouterLink:T,PaginationComponent:q,LoadingModal:Y},mixins:[U],data(){return{costOrRateCollapse:{},highOrLowCollapse:{},recipes:[],selectCategory:"全部",selectItem:"全部",priceOrRate:"成本",highOrLow:"不拘",recipeSearchName:"",filterRecipes:[],bookMarks:[],thumbs:{},uid:"",search:!1}},methods:{...N(S,["toastMessage"]),getRecipes(){const i=m(p,"recipes/");f(i,s=>{this.recipes=s.val(),this.recipes=Object.entries(this.recipes).map(d=>(d[1].id=d[0],d[1])),console.log(this.recipes,"食譜資料");const b=m(p,"recipeThumbs/");f(b,d=>{this.thumbs=d.val(),console.log(this.thumbs,"所有讚"),this.recipes.forEach((t,n)=>{Object.keys(this.thumbs).forEach(_=>{t.id===_&&(this.recipes[n].thumbs=this.thumbs[t.id].thumbs)})}),this.recipes.forEach((t,n)=>{t.thumbs||(this.recipes[n].thumbs=0)}),console.log(this.recipes,"食譜"),this.filterRecipes=this.recipes,!this.$route.query.category&&this.$route.fullPath==="/recipes"?this.$refs.pagination.renderPage(1,this.filterRecipes):this.$route.query.category&&this.searchRecipes()})})},searchRecipes(){this.selectItem==="全部"?this.filterRecipes=this.recipes:this.selectItem!=="全部"&&(this.filterRecipes=this.recipes.filter(i=>i.category===this.selectItem)),this.priceOrRate==="成本"&&this.highOrLow!=="不拘"?this.highOrLow==="低到高"?this.filterRecipes=this.filterRecipes.sort((i,s)=>i.price-s.price):this.highOrLow==="高到低"&&(this.filterRecipes=this.filterRecipes.sort((i,s)=>s.price-i.price)):this.priceOrRate==="評價"&&this.highOrLow!=="不拘"&&(this.highOrLow==="低到高"?this.filterRecipes=this.filterRecipes.sort((i,s)=>i.thumbs-s.thumbs):this.highOrLow==="高到低"&&(this.filterRecipes=this.filterRecipes.sort((i,s)=>s.thumbs-i.thumbs))),this.filterRecipes=this.filterRecipes.filter(i=>i.title.match(this.recipeSearchName)),this.search=!0,this.$refs.pagination.renderPage(1,this.filterRecipes)},getBookmarks(){D(K,i=>{if(i){this.uid=i.uid,console.log(this.uid,"使用者已登入取得 uid");const s=m(p,"users/"+i.uid);f(s,b=>{this.user=b.val(),console.log(this.user,"讀取的資料");const d=m(p,`recipeBookmarks/${this.uid}`);f(d,t=>{this.bookMarks=t.val(),this.bookMarks&&(this.bookMarks=Object.keys(this.bookMarks)),console.log(this.bookMarks,"書籤")})})}else console.log("並未登入"),this.uid=null,this.user={}})},addBookmark(i){if(!this.uid){this.toastMessage("登入才可使用收藏功能","error");return}const s=m(p,`recipeBookmarks/${this.uid}/${i.id}`);H(s,i),this.toastMessage("收藏成功")},deleteBookmark(i){A(m(p,`recipeBookmarks/${this.uid}/${i}`)),this.toastMessage("刪除收藏")}},mounted(){this.costOrRateCollapse=new R(this.$refs.costOrRateCollapse,{toggle:!1,parent:"#myGroup"}),this.highOrLowCollapse=new R(this.$refs.highOrLowCollapse,{toggle:!1,parent:"#myGroup"}),this.$route.query.category&&(this.selectItem=this.$route.query.category,this.highOrLow=this.$route.query.valueHighOrLow,this.priceOrRate=this.$route.query.valuePriceOrRate,this.recipeSearchName=this.$route.query.searchName),this.getBookmarks(),this.getRecipes()},watch:{selectCategory(){this.recipeSearchName="",this.selectCategory==="全部"?(this.selectItem="全部",this.filterRecipes=this.recipes,this.$refs.pagination.renderPage(1,this.filterRecipes)):this.selectCategory!=="全部"&&(this.selectItem=this.selectCategory,this.filterRecipes=this.recipes.filter(i=>i.category===this.selectItem),console.log(this.filterRecipes,"篩選結果")),this.$refs.pagination.renderPage(1,this.filterRecipes)},priceOrRate(){this.costOrRateCollapse.hide()},highOrLow(){this.highOrLowCollapse.hide()},filterRecipes(){this.costOrRateCollapse.hide(),this.highOrLowCollapse.hide()}}},ee={class:"my-7"},te={class:"bg-lightYellow mb-4 py-4 px-lg-5",style:{"overflow-x":"hidden"}},se={class:"container"},oe={class:"selectProductCategory row row-cols-lg-6 row-cols-3"},ie={key:0,src:L,alt:"",class:"rounded-circle",style:{"object-fit":"cover"}},re={key:1,src:L,alt:"",class:"rounded-circle",style:{"object-fit":"cover",transform:"scale(1.2,1.2)"}},le={key:0,src:B,alt:"",class:"rounded-circle",style:{"object-fit":"cover"}},ce={key:1,src:B,alt:"",class:"rounded-circle",style:{"object-fit":"cover",transform:"scale(1.2,1.2)"}},ne={key:0,src:M,alt:"",class:"rounded-circle",style:{"object-fit":"cover"}},ae={key:1,src:M,alt:"",class:"rounded-circle",style:{"object-fit":"cover",transform:"scale(1.2,1.2)"}},de={key:0,src:j,alt:"",class:"rounded-circle",style:{"object-fit":"cover"}},he={key:1,src:j,alt:"",class:"rounded-circle",style:{"object-fit":"cover",transform:"scale(1.2,1.2)"}},me={key:0,src:E,alt:"",class:"rounded-circle",style:{"object-fit":"cover"}},pe={key:1,src:E,alt:"",class:"rounded-circle",style:{"object-fit":"cover",transform:"scale(1.2,1.2)"}},ge={key:0,src:V,alt:"",class:"rounded-circle",style:{"object-fit":"cover"}},ue={key:1,src:V,alt:"",class:"rounded-circle",style:{"object-fit":"cover",transform:"scale(1.2,1.2)"}},be={class:"d-none d-lg-block container selectProduct my-5"},fe={class:"input-group"},ye=e("i",{class:"bi bi-caret-down-fill"},null,-1),_e={class:"ms-2 fw-bold"},ke=e("i",{class:"bi bi-caret-down-fill"},null,-1),ve={class:"ms-2 fw-bold"},Ce=e("img",{src:G,style:{height:"25px"},alt:""},null,-1),we=[Ce],Re={class:"row g-0",id:"myGroup"},xe={class:"col-2"},Ie={ref:"costOrRateCollapse",class:"collapse"},Oe={class:"card card-body border-0"},Le={class:"btn-group-vertical",role:"group","aria-label":"Vertical radio toggle button group"},Be=e("label",{class:"btn btn-outline-red",for:"selectprice"},"成本",-1),Me=e("label",{class:"btn btn-outline-red",for:"selectRate"},"評價",-1),je={class:"col-2"},Ee={ref:"highOrLowCollapse",class:"collapse"},Ve={class:"card card-body border-0"},Pe={class:"btn-group-vertical",role:"group","aria-label":"Vertical radio toggle button group"},Te=e("label",{class:"btn btn-outline-red",for:"noDifference"},"不拘",-1),Ne=e("label",{class:"btn btn-outline-red",for:"highToLow"},"高到低",-1),Se=e("label",{class:"btn btn-outline-red",for:"lowToHigh"},"低到高",-1),Ue={class:"container"},qe={key:0,class:"row row-cols-lg-4 row-cols-2 gy-4"},Ge={class:"card position-relative border-0 bg-transparent",style:{"border-radius":"20px"}},Ye={class:"cardImg",style:{"border-radius":"20px"}},De=["src"],He={class:"card-text"},Ae=["onClick"],Ke=e("img",{src:X},null,-1),ze=[Ke],Fe=["onClick"],We=e("img",{src:Z},null,-1),Xe=[We],Ze={style:{"pointer-events":"none"},class:"cardTextCategory badge rounded-pill bg-red mt-4 border-0 m-3 position-absolute start-0"},Je={class:"d-flex justify-content-between align-items-center fw-bold"},Qe={class:"cardTextTitle"},$e={class:"cardTextPrice d-flex align-items-lg-center align-items-end"},et={class:""},tt={class:"starRates mb-0 ms-auto"},st={class:"me-1"},ot=e("i",{class:"bi bi-hand-thumbs-up-fill"},null,-1),it={key:1,class:"py-10"},rt=e("img",{src:J,class:"mb-3",alt:"",style:{height:"250px",display:"block",margin:"auto"}},null,-1),lt=e("h2",{class:"text-center"},"查無食譜，請您重新查詢",-1),ct=[rt,lt];function nt(i,s,b,d,t,n){const _=v("LoadingModal"),C=v("RouterLink"),P=v("PaginationComponent");return c(),l("div",ee,[y(_,{ref:"loadingModal"},null,512),e("section",te,[e("div",se,[e("div",oe,[e("button",{type:"button",class:r(["col d-flex flex-column align-items-center btn border-0",{selectedImg:t.selectCategory==="全部"}]),onClick:s[0]||(s[0]=()=>t.selectCategory="全部")},[e("div",{class:r(["cardImg mb-2",{"opacity-100":t.selectItem==="全部"}])},[e("div",{class:r(["enlargeImg rounded-circle",{selectImgBorder:t.selectItem==="全部"}])},[t.selectCategory!=="全部"?(c(),l("img",ie)):t.selectCategory==="全部"?(c(),l("img",re)):a("",!0)],2)],2),e("span",{class:r(["text-secondary",{"text-red":t.selectItem==="全部","fw-bold":t.selectItem==="全部"}])},"全部",2)],2),e("button",{type:"button",class:r(["col d-flex flex-column align-items-center btn border-0",{selectedImg:t.selectCategory==="台式甜點"}]),onClick:s[1]||(s[1]=()=>t.selectCategory="台式甜點")},[e("div",{class:r(["cardImg mb-2",{"opacity-100":t.selectItem==="台式甜點"}])},[e("div",{class:r(["enlargeImg rounded-circle",{selectImgBorder:t.selectItem==="台式甜點"}])},[t.selectCategory!=="台式甜點"?(c(),l("img",le)):t.selectCategory==="台式甜點"?(c(),l("img",ce)):a("",!0)],2)],2),e("span",{class:r(["text-secondary",{"text-red":t.selectItem==="台式甜點","fw-bold":t.selectItem==="台式甜點"}])},"台式甜點",2)],2),e("button",{type:"button",class:r(["col d-flex flex-column align-items-center btn border-0",{selectedImg:t.selectCategory==="法式甜點"}]),onClick:s[2]||(s[2]=()=>t.selectCategory="法式甜點")},[e("div",{class:r(["cardImg mb-2",{"opacity-100":t.selectItem==="法式甜點"}])},[e("div",{class:r(["enlargeImg rounded-circle",{selectImgBorder:t.selectItem==="法式甜點"}])},[t.selectCategory!=="法式甜點"?(c(),l("img",ne)):t.selectCategory==="法式甜點"?(c(),l("img",ae)):a("",!0)],2)],2),e("span",{class:r(["text-secondary",{"text-red":t.selectItem==="法式甜點","fw-bold":t.selectItem==="法式甜點"}])},"法式甜點",2)],2),e("button",{type:"button",class:r(["col d-flex flex-column align-items-center btn border-0",{selectedImg:t.selectCategory==="美式甜點"}]),onClick:s[3]||(s[3]=()=>t.selectCategory="美式甜點")},[e("div",{class:r(["cardImg mb-2",{"opacity-100":t.selectItem==="美式甜點"}])},[e("div",{class:r(["enlargeImg rounded-circle",{selectImgBorder:t.selectItem==="美式甜點"}])},[t.selectCategory!=="美式甜點"?(c(),l("img",de)):t.selectCategory==="美式甜點"?(c(),l("img",he)):a("",!0)],2)],2),e("span",{class:r(["text-secondary",{"text-red":t.selectItem==="美式甜點","fw-bold":t.selectItem==="美式甜點"}])},"美式甜點",2)],2),e("button",{type:"button",class:r(["col d-flex flex-column align-items-center btn border-0",{selectedImg:t.selectCategory==="日式甜點"}]),onClick:s[4]||(s[4]=()=>t.selectCategory="日式甜點")},[e("div",{class:r(["cardImg mb-2",{"opacity-100":t.selectItem==="日式甜點"}])},[e("div",{class:r(["enlargeImg rounded-circle",{selectImgBorder:t.selectItem==="日式甜點"}])},[t.selectCategory!=="日式甜點"?(c(),l("img",me)):t.selectCategory==="日式甜點"?(c(),l("img",pe)):a("",!0)],2)],2),e("span",{class:r(["text-secondary",{"text-red":t.selectItem==="日式甜點","fw-bold":t.selectItem==="日式甜點"}])},"日式甜點",2)],2),e("button",{type:"button",class:r(["col d-flex flex-column align-items-center btn border-0",{selectedImg:t.selectCategory==="義式甜點"}]),onClick:s[5]||(s[5]=()=>t.selectCategory="義式甜點")},[e("div",{class:r(["cardImg mb-2",{"opacity-100":t.selectItem==="義式甜點"}])},[e("div",{class:r(["enlargeImg rounded-circle",{selectImgBorder:t.selectItem==="義式甜點"}])},[t.selectCategory!=="義式甜點"?(c(),l("img",ge)):t.selectCategory==="義式甜點"?(c(),l("img",ue)):a("",!0)],2)],2),e("span",{class:r(["text-secondary",{"text-red":t.selectItem==="義式甜點","fw-bold":t.selectItem==="義式甜點"}])},"義式甜點",2)],2)])])]),e("section",be,[e("div",fe,[e("a",{class:"btn btn-outline-red px-5",onClick:s[6]||(s[6]=()=>this.costOrRateCollapse.toggle())},[k("篩選對象 "),ye,e("span",_e,h(t.priceOrRate),1)]),e("button",{class:"btn btn-outline-red px-5",type:"button",onClick:s[7]||(s[7]=()=>this.highOrLowCollapse.toggle())},[k("篩選值 "),ke,e("span",ve,h(t.highOrLow),1)]),g(e("input",{type:"search",class:"form-control border-red border-end-0",placeholder:"請輸入食譜名稱","aria-label":"Example text with two button addons","onUpdate:modelValue":s[8]||(s[8]=o=>t.recipeSearchName=o),onKeyup:s[9]||(s[9]=F((...o)=>n.searchRecipes&&n.searchRecipes(...o),["enter"]))},null,544),[[z,t.recipeSearchName]]),e("button",{type:"submit",class:"btn border border-red border-start-0 bg-transparent",onClick:s[10]||(s[10]=W((...o)=>n.searchRecipes&&n.searchRecipes(...o),["prevent"]))},we)]),e("div",Re,[e("div",xe,[e("div",Ie,[e("div",Oe,[e("div",Le,[g(e("input",{type:"radio",class:"btn-check",value:"成本",name:"priceOrRate",id:"selectprice",autocomplete:"off","onUpdate:modelValue":s[11]||(s[11]=o=>t.priceOrRate=o)},null,512),[[u,t.priceOrRate]]),Be,g(e("input",{type:"radio",class:"btn-check",value:"評價",name:"priceOrRate",id:"selectRate",autocomplete:"off","onUpdate:modelValue":s[12]||(s[12]=o=>t.priceOrRate=o)},null,512),[[u,t.priceOrRate]]),Me])])],512)]),e("div",je,[e("div",Ee,[e("div",Ve,[e("div",Pe,[g(e("input",{type:"radio",class:"btn-check",value:"不拘",name:"highOrLow",id:"noDifference",autocomplete:"off",checked:"","onUpdate:modelValue":s[13]||(s[13]=o=>t.highOrLow=o)},null,512),[[u,t.highOrLow]]),Te,g(e("input",{type:"radio",class:"btn-check",value:"高到低",name:"highOrLow",id:"highToLow",autocomplete:"off","onUpdate:modelValue":s[14]||(s[14]=o=>t.highOrLow=o)},null,512),[[u,t.highOrLow]]),Ne,g(e("input",{type:"radio",class:"btn-check",value:"低到高",name:"highOrLow",id:"lowToHigh",autocomplete:"off","onUpdate:modelValue":s[15]||(s[15]=o=>t.highOrLow=o)},null,512),[[u,t.highOrLow]]),Se])])],512)])])]),e("section",Ue,[t.filterRecipes.length?(c(),l("div",qe,[(c(!0),l(x,null,I(this.$refs.pagination.pageProducts,o=>(c(),l("div",{class:"col text-decoration-none",key:o.id},[e("div",Ge,[e("div",Ye,[y(C,{to:`/recipes/${o.id}`,class:"enlargeImg"},{default:O(()=>[e("img",{src:o.image,class:"card-img",style:{"border-radius":"20px","object-fit":"cover","max-width":"100%","max-height":"100%"},alt:""},null,8,De)]),_:2},1032,["to"])]),e("h5",He,[e("button",{type:"button",class:"position-absolute bookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2",onClick:()=>n.addBookmark(o)},ze,8,Ae),(c(!0),l(x,null,I(t.bookMarks,w=>(c(),l("div",{key:w+4567},[w===o.id?(c(),l("button",{key:0,type:"button",class:"position-absolute deleteBookmarkBtn border-0 bg-transparent end-0 top-0 m-lg-3 m-2",onClick:()=>n.deleteBookmark(o.id)},Xe,8,Fe)):a("",!0)]))),128)),e("span",Ze,h(o.category),1)]),y(C,{to:`/recipes/${o.id}`,class:"card-footer bg-transparent border-0 text-decoration-none link-darkBrown"},{default:O(()=>[e("h5",Je,[e("span",Qe,h(o.title),1)]),e("div",$e,[e("div",et,[o.total?(c(),l("del",{key:0,class:r(["me-2 text-muted d-block d-lg-inline-block",{"d-none":o.price===o.total}])},"NT$ "+h(i.numberComma(o.total)),3)):a("",!0),e("span",null,[o.price?(c(),l("span",{key:0,class:r({"text-danger":o.price!==o.total,"fw-bold":o.price!==o.total})},"NT$ "+h(i.numberComma(o.price)),3)):a("",!0),k(" / "+h(o.content),1)])]),e("h5",tt,[e("p",{class:r(["mb-0 badge rounded-pill border d-flex align-items-center",{"border-red":o.thumbs!==0,"border-lightBrownGray":o.thumbs===0,"text-red":o.thumbs!==0,"text-lightBrownGray":o.thumbs===0}])},[e("span",st,h(o.thumbs),1),ot],2)])])]),_:2},1032,["to"])])]))),128))])):!t.filterRecipes.length&&t.search?(c(),l("div",it,ct)):a("",!0),y(P,{ref:"pagination","price-or-rate":t.priceOrRate,"filter-recipes":t.filterRecipes},null,8,["price-or-rate","filter-recipes"])])])}const xt=Q($,[["render",nt]]);export{xt as default};