import{R as O}from"./vue-router-495964e8.js";import{m as B,b as R}from"./axios-174aada3.js";import{c as x}from"./carts-f5125435.js";import{l as j,w as E,n as C,j as m}from"./runtime-dom.esm-bundler-226b1721.js";import{_ as L}from"./icon-search-d6364761.js";import{_ as I}from"./image5-4fc2427e.js";import{_ as v}from"./image4-1806383b.js";import{b6 as M,l,m as e,a3 as n,s as g,aJ as h,b3 as u,F as f,at as y,k as p,av as N,aj as c,t as k,b1 as w}from"./_plugin-vue_export-helper-31c7975b.js";import"./_commonjsHelpers-042e6b4d.js";const V="/finalEasyMakeEasyBuy/assets/dessert-main-image-molten-cake-0fbd4f2-f4502124.jpg",S="/finalEasyMakeEasyBuy/assets/13d687f987752ba797cc3684987316e6-f2b80201.jpg",D="/finalEasyMakeEasyBuy/assets/cookies-4053771_960_720222-a7810d77.jpg",A="/finalEasyMakeEasyBuy/assets/baked-mochi-donuts-DSC_3500-1x1-1200-ae576dd9.jpg",U="/finalEasyMakeEasyBuy/assets/IMG_P-0051-1000x600-2dd9dd1d.jpg",P="/finalEasyMakeEasyBuy/assets/瘋提拉米蘇-1-c740fada.jpg";const{VITE_PATH:a}={VITE_PATH:"https://vue-final-dbjson-3nukrua10-cookiesss123.vercel.app",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},z={components:{RouterLink:O},data(){return{recipes:[],selectItem:"全部",priceOrRate:"成本",highOrLow:"不拘",recipeSearchName:"",filterRecipes:[],bookMarks:[],recipeThumbs:[],thumbs:{},myThumbs:[],myThumbObj:{},sortThumbs:[]}},methods:{...B(x,["toastMessage"]),getRecipes(){this.$http.get(`${a}/recipes`).then(r=>{console.log(r.data),this.recipes=r.data,this.filterRecipes=r.data}).catch(r=>{console.log(r)})},searchRecipes(){let r=`${a}/recipes`;if(this.highOrLow==="不拘"&&this.selectItem==="全部"){this.sortThumbs=[],this.filterRecipes=this.recipes.filter(t=>t.title.match(this.recipeSearchName));return}else this.priceOrRate==="成本"?(this.sortThumbs=[],this.selectItem==="全部"?this.highOrLow==="低到高"?r=`${a}/recipes?_sort=total&_order=asc`:this.highOrLow==="高到低"&&(r=`${a}/recipes?_sort=total&_order=desc`):this.selectItem!=="全部"&&(this.highOrLow==="不拘"?r=`${a}/recipes?category=${this.selectItem}`:this.highOrLow==="低到高"?r=`${a}/recipes?category=${this.selectItem}&_sort=total&_order=asc`:this.highOrLow==="高到低"&&(r=`${a}/recipes?category=${this.selectItem}&_sort=total&_order=desc`))):this.priceOrRate==="評價"&&(this.getAllRecipeThumbs(),this.sortThumbs=[],this.filterRecipes.forEach(t=>{Object.entries(this.thumbs).forEach(i=>{i[1].recipe.id===t.id&&this.sortThumbs.push(i)})}),console.log(this.sortThumbs,"食譜排序???"),this.highOrLow==="低到高"?(this.sortThumbs=this.sortThumbs.sort((t,i)=>t[1].people-i[1].people),console.log(this.sortThumbs,"排序好的食譜評價 低到高")):this.highOrLow==="高到低"&&(this.sortThumbs=this.sortThumbs.sort((t,i)=>i[1].people-t[1].people),console.log(this.sortThumbs,this.filterRecipes,"排序好的食譜評價 高到低")),this.recipeSearchName!==""&&(this.sortThumbs=this.sortThumbs.filter(t=>t[1].recipe.title.match(this.recipeSearchName))));this.priceOrRate!=="評價"&&this.$http.get(`${r}`).then(t=>{this.filterRecipes=t.data,this.recipeSearchName!==""&&(this.filterRecipes=this.filterRecipes.filter(i=>i.title.match(this.recipeSearchName)))}).catch(t=>{console.log(t)})},getBookmarks(){if(!this.token)return;const r=`${a}/600/users/${this.userId}/recipeBookmarks?_expand=recipe`;this.$http.get(r,{headers:{authorization:`Bearer ${this.token}`}}).then(t=>{console.log(t.data),this.bookMarks=t.data}).catch(t=>{console.log(t)})},addBookmark(r){if(!this.token){this.toastMessage("登入才可使用收藏功能","error");return}const t={userId:this.userId,recipeId:r};this.$http.post(`${a}/600/users/${this.userId}/recipeBookmarks?_expand=recipe`,t,{headers:{authorization:`Bearer ${this.token}`}}).then(i=>{console.log(i.data),this.getBookmarks(),this.toastMessage("收藏成功")}).catch(i=>{console.log(i)})},deleteBookmark(r){let t="";this.bookMarks.forEach(i=>{i.recipeId.toString()===r.toString()&&(t=i.id)}),this.$http.delete(`${a}/600/recipeBookmarks/${Number(t)}`,{headers:{authorization:`Bearer ${this.token}`}}).then(i=>{console.log(i.data),this.getBookmarks(),this.toastMessage("刪除收藏")}).catch(i=>{console.log(i)})},getAllRecipeThumbs(){const r=`${a}/recipeThumbs?_expand=recipe`;this.$http.get(r).then(t=>{console.log("所有食譜讚",t.data),this.recipeThumbs=t.data,this.thumbs={},this.recipeThumbs.forEach(i=>{this.thumbs[i.recipe.id]===void 0?this.thumbs[i.recipe.id]={people:1,recipe:i.recipe}:this.thumbs[i.recipe.id].people+=1}),this.recipes.forEach(i=>{Object.keys(this.thumbs).forEach(T=>{this.thumbs[i.id]===void 0&&(this.thumbs[i.id]={people:0,recipe:i})})}),console.log("分類好的讚",Object.entries(this.thumbs))}).catch(t=>{console.log(t)})},getMyThumb(){if(!this.token)return;const r=`${a}/600/users/${this.userId}/recipeThumbs`;this.$http.get(r,{headers:{authorization:`Bearer ${this.token}`}}).then(t=>{console.log("我按了哪些食譜讚?",t.data),this.myThumbs=t.data,this.myThumbs.forEach(i=>{this.myThumbObj[i.recipeId]===void 0&&(this.myThumbObj[i.recipeId]={thumb:!0})}),console.log("我讚過的食譜",this.myThumbObj)}).catch(t=>{console.log(t)})}},mounted(){this.getRecipes(),this.getBookmarks(),this.getAllRecipeThumbs(),this.getMyThumb()},watch:{selectItem(){this.sortThumbs=[];let r=`${a}/recipes`;this.selectItem==="全部"?(r=`${a}/recipes`,console.log("全部類別")):this.selectItem!=="全部"&&(r=`${a}/recipes?category=${this.selectItem}`,console.log(this.selectItem)),this.$http.get(`${r}`).then(t=>{console.log(t.data),this.filterRecipes=t.data}).catch(t=>{console.log(t)})}},computed:{...R(x,["token","userId"])}},G={class:"py-100-sm-40"},H={class:"bg-lightYellow py-4 px-lg-5",style:{"overflow-x":"hidden"}},F={class:"container"},K={class:"selectProductCategory row row-cols-lg-6 row-cols-3"},J=e("br",null,null,-1),Y=e("br",null,null,-1),q=e("br",null,null,-1),Q=e("br",null,null,-1),W=e("br",null,null,-1),X=e("br",null,null,-1),Z={class:"d-none d-lg-block container selectProduct my-5"},$={class:"input-group"},ee={class:"btn btn-outline-brown px-5","data-bs-toggle":"collapse",href:"#multiCollapseExample1",role:"button","aria-expanded":"false","aria-controls":"multiCollapseExample1"},te=e("i",{class:"bi bi-caret-down-fill"},null,-1),se={class:"ms-2 fw-bold"},oe={class:"btn btn-outline-brown px-5",type:"button","data-bs-toggle":"collapse","data-bs-target":"#multiCollapseExample2","aria-expanded":"false","aria-controls":"multiCollapseExample2"},ie=e("i",{class:"bi bi-caret-down-fill"},null,-1),re={class:"ms-2 fw-bold"},le=e("img",{src:L,style:{height:"25px"},alt:""},null,-1),ce=[le],ne={class:"row g-0",id:"myGroup"},ae={class:"col-2"},he={ref:"collapse1","data-bs-parent":"#myGroup",class:"collapse multi-collapse",id:"multiCollapseExample1"},de={class:"card card-body border-0"},pe={class:"btn-group-vertical",role:"group","aria-label":"Vertical radio toggle button group"},ue=e("label",{class:"btn btn-outline-brown",for:"selectprice"},"成本",-1),be=e("label",{class:"btn btn-outline-brown",for:"selectRate"},"評價",-1),me={class:"col-2"},_e={ref:"collapse2","data-bs-parent":"#myGroup",class:"collapse multi-collapse",id:"multiCollapseExample2"},ge={class:"card card-body border-0"},fe={class:"btn-group-vertical",role:"group","aria-label":"Vertical radio toggle button group"},ye=e("label",{class:"btn btn-outline-brown",for:"noDifference"},"不拘",-1),ke=e("label",{class:"btn btn-outline-brown",for:"highToLow"},"高到低",-1),we=e("label",{class:"btn btn-outline-brown",for:"lowToHigh"},"低到高",-1),xe={class:"container"},Ie={key:0,class:"row row-cols-lg-4 row-cols-1 gy-4"},ve={class:"card position-relative border-0 bg-transparent",style:{"border-radius":"20px"}},Te=["src"],Oe={class:"card-text"},Be=["onClick"],Re=e("img",{src:I},null,-1),je=[Re],Ee=["onClick"],Ce=e("img",{src:v},null,-1),Le=[Ce],Me={style:{"pointer-events":"none",top:"155px"},class:"badge rounded-pill bg-brown mt-4 border-0 me-3 position-absolute end-0"},Ne={class:"h5 d-flex justify-content-between fw-bold"},Ve={class:"col-12 d-flex justify-content-end"},Se={class:"mt-1"},De={class:"d-flex align-items-center justify-content-end"},Ae={key:0,class:"mb-0 ms-3"},Ue={key:1,type:"button",class:"border-0 bg-transparent text-brown fs-5"},Pe=e("i",{class:"bi bi-hand-thumbs-up-fill"},null,-1),ze=[Pe],Ge={key:2,type:"button",class:"border-0 bg-transparent text-brown fs-5"},He=e("i",{class:"bi bi-hand-thumbs-up"},null,-1),Fe=[He],Ke={key:1,class:"row row-cols-lg-4 row-cols-1 gy-4"},Je={class:"card position-relative border-0 bg-transparent",style:{"border-radius":"20px"}},Ye=["src"],qe={class:"card-text"},Qe=["onClick"],We=e("img",{src:I},null,-1),Xe=[We],Ze=["onClick"],$e=e("img",{src:v},null,-1),et=[$e],tt={style:{"pointer-events":"none",top:"155px"},class:"badge rounded-pill bg-brown mt-4 border-0 me-3 position-absolute end-0"},st={class:"h5 d-flex justify-content-between fw-bold"},ot={class:"col-12 d-flex justify-content-end"},it={class:"mt-1"},rt={class:"d-flex align-items-center justify-content-end"},lt={key:0,class:"mb-0 ms-3"},ct={key:1,type:"button",class:"border-0 bg-transparent text-brown fs-5"},nt=e("i",{class:"bi bi-hand-thumbs-up-fill"},null,-1),at=[nt],ht={key:2,type:"button",class:"border-0 bg-transparent text-brown fs-5"},dt=e("i",{class:"bi bi-hand-thumbs-up"},null,-1),pt=[dt];function ut(r,t,i,T,o,d){const _=N("RouterLink");return c(),l("div",G,[e("section",H,[e("div",F,[e("div",K,[e("button",{type:"button",class:"col btn border-0",onClick:t[0]||(t[0]=()=>o.selectItem="全部")},[e("img",{src:V,alt:"",class:n(["rounded-circle mb-lg-3 mb-1",{selectImgBorder:o.selectItem==="全部"}]),style:{"object-fit":"cover"}},null,2),J,e("span",{class:n(["text-secondary",{"text-orange":o.selectItem==="全部","fw-bold":o.selectItem==="全部"}])},"全部",2)]),e("button",{type:"button",class:"col btn border-0",onClick:t[1]||(t[1]=()=>o.selectItem="台式甜點")},[e("img",{src:S,alt:"",class:n(["rounded-circle mb-lg-3 mb-1",{selectImgBorder:o.selectItem==="台式甜點"}]),style:{"object-fit":"cover"}},null,2),Y,e("span",{class:n(["text-secondary",{"text-orange":o.selectItem==="台式甜點","fw-bold":o.selectItem==="台式甜點"}])},"台式甜點",2)]),e("button",{type:"button",class:"col btn border-0",onClick:t[2]||(t[2]=()=>o.selectItem="法式甜點")},[e("img",{src:D,alt:"",class:n(["rounded-circle mb-lg-3 mb-1",{selectImgBorder:o.selectItem==="法式甜點"}]),style:{"object-fit":"cover"}},null,2),q,e("span",{class:n(["text-secondary",{"text-orange":o.selectItem==="法式甜點","fw-bold":o.selectItem==="法式甜點"}])},"法式甜點",2)]),e("button",{type:"button",class:"col btn border-0",onClick:t[3]||(t[3]=()=>o.selectItem="美式甜點")},[e("img",{src:A,alt:"",class:n(["rounded-circle mb-lg-3 mb-1",{selectImgBorder:o.selectItem==="美式甜點"}]),style:{"object-fit":"cover"}},null,2),Q,e("span",{class:n(["text-secondary",{"text-orange":o.selectItem==="美式甜點","fw-bold":o.selectItem==="美式甜點"}])},"美式甜點",2)]),e("button",{type:"button",class:"col btn border-0",onClick:t[4]||(t[4]=()=>o.selectItem="日式甜點")},[e("img",{src:U,alt:"",class:n(["rounded-circle mb-lg-3 mb-1",{selectImgBorder:o.selectItem==="日式甜點"}]),style:{"object-fit":"cover"}},null,2),W,e("span",{class:n(["text-secondary",{"text-orange":o.selectItem==="日式甜點","fw-bold":o.selectItem==="日式甜點"}])},"日式甜點",2)]),e("button",{type:"button",class:"col btn border-0",onClick:t[5]||(t[5]=()=>o.selectItem="義式甜點")},[e("img",{src:P,alt:"",class:n(["rounded-circle mb-lg-3 mb-1",{selectImgBorder:o.selectItem==="義式甜點"}]),style:{"object-fit":"cover"}},null,2),X,e("span",{class:n(["text-secondary",{"text-orange":o.selectItem==="義式甜點","fw-bold":o.selectItem==="義式甜點"}])},"義式甜點",2)])])])]),e("section",Z,[e("div",$,[e("a",ee,[g("篩選對象 "),te,e("span",se,h(o.priceOrRate),1)]),e("button",oe,[g("篩選值 "),ie,e("span",re,h(o.highOrLow),1)]),u(e("input",{type:"search",class:"form-control border-brown border-end-0",placeholder:"請輸入食譜名稱","aria-label":"Example text with two button addons","onUpdate:modelValue":t[6]||(t[6]=s=>o.recipeSearchName=s),onKeyup:t[7]||(t[7]=E((...s)=>d.searchRecipes&&d.searchRecipes(...s),["enter"]))},null,544),[[j,o.recipeSearchName]]),e("button",{type:"submit",class:"btn border border-brown border-start-0 bg-transparent",onClick:t[8]||(t[8]=C((...s)=>d.searchRecipes&&d.searchRecipes(...s),["prevent"]))},ce)]),e("div",ne,[e("div",ae,[e("div",he,[e("div",de,[e("div",pe,[u(e("input",{type:"radio",class:"btn-check",value:"成本",name:"priceOrRate",id:"selectprice",autocomplete:"off","onUpdate:modelValue":t[9]||(t[9]=s=>o.priceOrRate=s)},null,512),[[m,o.priceOrRate]]),ue,u(e("input",{type:"radio",class:"btn-check",value:"評價",name:"priceOrRate",id:"selectRate",autocomplete:"off","onUpdate:modelValue":t[10]||(t[10]=s=>o.priceOrRate=s)},null,512),[[m,o.priceOrRate]]),be])])],512)]),e("div",me,[e("div",_e,[e("div",ge,[e("div",fe,[u(e("input",{type:"radio",class:"btn-check",value:"不拘",name:"highOrLow",id:"noDifference",autocomplete:"off",checked:"","onUpdate:modelValue":t[11]||(t[11]=s=>o.highOrLow=s)},null,512),[[m,o.highOrLow]]),ye,u(e("input",{type:"radio",class:"btn-check",value:"高到低",name:"highOrLow",id:"highToLow",autocomplete:"off","onUpdate:modelValue":t[12]||(t[12]=s=>o.highOrLow=s)},null,512),[[m,o.highOrLow]]),ke,u(e("input",{type:"radio",class:"btn-check",value:"低到高",name:"highOrLow",id:"lowToHigh",autocomplete:"off","onUpdate:modelValue":t[13]||(t[13]=s=>o.highOrLow=s)},null,512),[[m,o.highOrLow]]),we])])],512)])])]),e("section",xe,[o.sortThumbs.length?o.sortThumbs.length?(c(),l("div",Ke,[(c(!0),l(f,null,y(o.sortThumbs,s=>(c(),l("div",{class:"col text-decoration-none",key:s+346663},[e("div",Je,[k(_,{to:`/recipes/${s[1].recipe.id}`},{default:w(()=>[e("img",{src:s[1].recipe.image,class:"card-img",height:"220",style:{"border-radius":"20px","object-fit":"cover","max-width":"100%","max-height":"100%"},alt:""},null,8,Ye)]),_:2},1032,["to"]),e("h5",qe,[e("button",{type:"button",class:"position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3",onClick:()=>d.addBookmark(s[1].recipe.id)},Xe,8,Qe),(c(!0),l(f,null,y(o.bookMarks,b=>(c(),l("div",{key:b.id+4567},[b.recipeId===s[1].recipe.id?(c(),l("button",{key:0,type:"button",class:"position-absolute deleteBookmarkBtn border-0 bg-transparent me-auto top-0 m-3",onClick:()=>d.deleteBookmark(s[1].recipe.id)},et,8,Ze)):p("",!0)]))),128)),e("span",tt,h(s[1].recipe.category),1)]),k(_,{to:`/recipes/${s[1].recipe.id}`,class:"card-footer bg-transparent border-0 text-decoration-none link-darkBrown"},{default:w(()=>[e("h5",st,h(s[1].recipe.title),1),e("div",ot,[e("del",{class:n(["me-2 text-muted mt-1",{"d-none":s[1].recipe.price===s[1].recipe.total}])},"NT$ "+h(s[1].recipe.total),3),e("span",it,[e("span",{class:n({"text-danger":s[1].recipe.price!==s[1].recipe.total,"fw-bold":s[1].recipe.price!==s[1].recipe.total})},"NT$ "+h(s[1].recipe.price),3),g(" / "+h(s[1].recipe.content),1)])]),e("div",rt,[o.thumbs[s[1].recipe.id]?(c(),l("span",lt,h(o.thumbs[s[1].recipe.id].people),1)):p("",!0),o.myThumbObj[s[1].recipe.id]?(c(),l("button",ct,at)):o.myThumbObj[s[1].recipe.id]?p("",!0):(c(),l("button",ht,pt))])]),_:2},1032,["to"])])]))),128))])):p("",!0):(c(),l("div",Ie,[(c(!0),l(f,null,y(o.filterRecipes,s=>(c(),l("div",{class:"col text-decoration-none",key:s.id},[e("div",ve,[k(_,{to:`/recipes/${s.id}`},{default:w(()=>[e("img",{src:s.image,class:"card-img",height:"220",style:{"border-radius":"20px","object-fit":"cover","max-width":"100%","max-height":"100%"},alt:""},null,8,Te)]),_:2},1032,["to"]),e("h5",Oe,[e("button",{type:"button",class:"position-absolute bookmarkBtn border-0 bg-transparent me-auto top-0 m-3",onClick:()=>d.addBookmark(s.id)},je,8,Be),(c(!0),l(f,null,y(o.bookMarks,b=>(c(),l("div",{key:b.id+4567},[b.recipeId===s.id?(c(),l("button",{key:0,type:"button",class:"position-absolute deleteBookmarkBtn border-0 bg-transparent me-auto top-0 m-3",onClick:()=>d.deleteBookmark(s.id)},Le,8,Ee)):p("",!0)]))),128)),e("span",Me,h(s.category),1)]),k(_,{to:`/recipes/${s.id}`,class:"card-footer bg-transparent border-0 text-decoration-none link-darkBrown"},{default:w(()=>[e("h5",Ne,h(s.title),1),e("div",Ve,[e("del",{class:n(["me-2 text-muted mt-1",{"d-none":s.price===s.total}])},"NT$ "+h(s.total),3),e("span",Se,[e("span",{class:n({"text-danger":s.price!==s.total,"fw-bold":s.price!==s.total})},"NT$ "+h(s.price),3),g(" / "+h(s.content),1)])]),e("div",De,[o.thumbs[s.id]?(c(),l("span",Ae,h(o.thumbs[s.id].people),1)):p("",!0),o.myThumbObj[s.id]?(c(),l("button",Ue,ze)):o.myThumbObj[s.id]?p("",!0):(c(),l("button",Ge,Fe))])]),_:2},1032,["to"])])]))),128))]))])])}const It=M(z,[["render",ut]]);export{It as default};
