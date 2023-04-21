import{S as C,a as M,N as B,P as R}from"./pagination.min-0aac4c4c.js";import{b as E,v as P,w as N}from"./runtime-dom.esm-bundler-bb3e8e23.js";import{m as z,b as S}from"./axios-555da50d.js";import{c as v}from"./carts-0238063f.js";import{_ as V,U as l,V as e,W as y,X as p,a0 as n,Z as d,a1 as b,a2 as g,Y as h,a4 as $,$ as x,c as k,r as f,o as c}from"./_plugin-vue_export-helper-cbb9d8af.js";import"./vue-router-1aba70ec.js";import"./_commonjsHelpers-042e6b4d.js";const{VITE_PATH:a}={VITE_PATH:"http://localhost:3000",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},j={components:{Swiper:C,SwiperSlide:M},data(){return{recipe:{},modules:[B,R],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",bulletClass:"my-bullet-class",bulletActiveClass:"my-bullet-active-class"},mainImg:"",bookMark:[],recipeThumbs:[],myThumb:[],recipeComments:[],recipeMessage:"",qty:1,groupProduct:{},user:{}}},methods:{...z(v,["addCart","toastMessage"]),getRecipe(){const{id:r}=this.$route.params;this.$http.get(`${a}/recipes/${r}`).then(t=>{console.log(t.data),this.recipe=t.data,this.mainImg=this.recipe.image,this.groupProduct=this.recipe.relativeProducts.filter(i=>i.category==="組合包"),this.groupProduct=this.groupProduct[0],console.log(this.groupProduct,"組合產品")}).catch(t=>{console.log(t)})},getRecipes(){this.$http.get(`${a}/recipes`).then(r=>{console.log(r.data),this.recipes=r.data,this.recipes.forEach(t=>{this.product.relevantRecipes.forEach(i=>{t.title===i&&this.relevantRecipesInfo.push(t)}),console.log("相關食譜詳細資訊",this.relevantRecipesInfo)})}).catch(r=>{console.log(r)})},getBookmark(){if(!this.token)return;const{id:r}=this.$route.params,t=`${a}/600/users/${this.userId}/recipeBookmarks?recipeId=${r}&_expand=recipe`;this.$http.get(t,{headers:{authorization:`Bearer ${this.token}`}}).then(i=>{console.log(i.data),this.bookMark=i.data}).catch(i=>{console.log(i)})},addBookmark(r){if(!this.token){this.toastMessage("登入才可使用收藏功能","error");return}const t={userId:this.userId,recipeId:r};this.$http.post(`${a}/600/users/${this.userId}/recipeBookmarks?_expand=recipe`,t,{headers:{authorization:`Bearer ${this.token}`}}).then(i=>{console.log(i.data),this.getBookmark(),this.toastMessage("收藏成功!")}).catch(i=>{console.log(i)})},deleteBookmark(){let r="";this.bookMark.forEach(t=>{r=t.id}),this.$http.delete(`${a}/600/recipeBookmarks/${Number(r)}`,{headers:{authorization:`Bearer ${this.token}`}}).then(t=>{console.log(t.data),this.getBookmark(),this.toastMessage("刪除收藏")}).catch(t=>{console.log(t)})},getAllRecipeThumbs(){const{id:r}=this.$route.params,t=`${a}/recipe/${r}/recipeThumbs?_expand=recipe`;this.$http.get(t).then(i=>{console.log(i.data),this.recipeThumbs=i.data,this.recipeThumbs.length||console.log("沒人按讚")}).catch(i=>{console.log(i)})},getMyThumb(){if(!this.token)return;const{id:r}=this.$route.params,t=`${a}/600/users/${this.userId}/recipeThumbs?recipeId=${r}&_expand=recipe`;this.$http.get(t,{headers:{authorization:`Bearer ${this.token}`}}).then(i=>{console.log("我有按讚嗎?",i.data),this.myThumb=i.data}).catch(i=>{console.log(i)})},addRecipeThumb(){if(!this.token){this.toastMessage("需登入才能給予評價","error");return}const{id:r}=this.$route.params,t={recipeId:r,thumb:!0},i=`${a}/600/users/${this.userId}/recipeThumbs`;this.$http.post(i,t,{headers:{authorization:`Bearer ${this.token}`}}).then(m=>{console.log(m.data),this.toastMessage("按讚成功"),this.getAllRecipeThumbs(),this.getMyThumb()}).catch(m=>{console.log(m)})},deleteRecipeThumb(){this.getMyThumb();let r="";this.myThumb.forEach(i=>{r=i.id});const t=`${a}/600/recipeThumbs/${r}`;this.$http.delete(t,{headers:{authorization:`Bearer ${this.token}`}}).then(i=>{console.log(i.data),this.toastMessage("取消按讚"),this.getAllRecipeThumbs(),this.getMyThumb()}).catch(i=>{console.log(i)})},getComments(){const{id:r}=this.$route.params,t=`${a}/recipe/${r}/recipeComments?_expand=user`;this.$http.get(t).then(i=>{console.log(i.data),this.recipeComments=i.data,this.recipeComments.length||console.log("沒人評論")}).catch(i=>{console.log(i)})},addComments(){if(!this.recipeMessage){console.log("您還未寫下任何內容喔!");return}const{id:r}=this.$route.params,t={recipeId:r,message:this.recipeMessage,createAt:new Date().getTime()},i=`${a}/600/users/${this.userId}/recipeComments?_expand=user`;this.$http.post(i,t,{headers:{authorization:`Bearer ${this.token}`}}).then(m=>{this.toastMessage("新增留言成功"),this.getComments(),this.recipeMessage=""}).catch(m=>{console.log(m)})},getUserInfo(){this.$http.get(`${a}/600/users/${this.userId}`,{headers:{authorization:`Bearer ${this.token}`}}).then(r=>{console.log("使用者資料",r.data),this.user=r.data}).catch(r=>{console.log(r)})}},mounted(){this.getUserInfo(),this.getRecipe(),this.getBookmark(),this.getAllRecipeThumbs(),this.getMyThumb(),this.getComments()},computed:{...S(v,["token","userId","nickName"])}},A={class:"mt-10"},U={class:"container"},D={"aria-label":"breadcrumb"},q={class:"breadcrumb"},L={class:"breadcrumb-item fs-5"},Y={class:"breadcrumb-item active fs-5","aria-current":"page"},H={class:"container d-flex justify-content-center mt-lg-5"},O={class:"col-lg-10"},F={class:"row row-cols-lg-2 row-cols-1 gy-4"},W={class:"col"},X={class:"row g-3"},Z={class:"col-12 d-flex recipeMainImg"},G=["src"],J={class:"recipeSwiper col-12 d-none d-lg-block"},K=["src"],Q=["src"],ee={class:"col"},te={class:"d-flex flex-column flex-lg-row align-items-lg-center"},se={class:"me-2"},oe={class:"badge rounded-pill bg-brown"},ie=e("br",{class:"d-lg-none d-block"},null,-1),re={class:"d-flex text-brown"},ce={class:"h3"},le={class:"ms-auto"},ne=e("i",{class:"bi bi-heart"},null,-1),ae=[ne],he=e("i",{class:"bi bi-heart-fill"},null,-1),de=[he],ue={key:2,class:"mb-0 ms-3"},me=e("i",{class:"bi bi-hand-thumbs-up"},null,-1),pe=[me],be=e("i",{class:"bi bi-hand-thumbs-up-fill"},null,-1),ge=[be],_e={class:"col"},ke=e("h5",{class:"text-lightBrown"},"甜點介紹：",-1),ye={class:"mb-5"},fe={class:"bg-lightYellow my-5",style:{"overflow-x":"hidden"}},we={class:"container py-5"},ve={class:"row row-cols-lg-2 row-cols-1 g-5"},xe={class:"col"},Te=e("h3",{class:"mb-3 fw-bold"},[e("span",{class:"material-icons"},"egg"),h(" 準備材料")],-1),Ie={class:"me-3"},Ce={class:"row mb-6"},Me=e("h3",{class:"mb-3 fw-bold"},[e("span",{class:"material-icons-outlined"},"soup_kitchen"),h(" 製作步驟")],-1),Be={key:0},Re=e("h3",{class:"mt-6 mb-3 fw-bold"},[e("i",{class:"bi bi-youtube"}),h(" 教學影片")],-1),Ee=["src"],Pe={class:"col"},Ne=e("h3",{class:"mb-4 fw-bold"},[e("i",{class:"bi bi-bag-check-fill"}),h(" 相關產品")],-1),ze={class:"row"},Se={class:"col-12"},Ve=["src"],$e={class:"fw-bold mt-2"},je={class:"row row-cols-lg-2 row-cols-1 align-items-center"},Ae={class:"col h5 mb-0"},Ue={class:"text-secondary me-3"},De={class:"text-danger"},qe={class:"col d-flex align-items-center"},Le=["value"],Ye={class:"row mt-4 row-cols-lg-3 row-cols-1"},He=["src"],Oe={class:"fw-bold mt-2 text-center"},Fe={class:"container py-5"},We=e("i",{class:"bi bi-stars"},null,-1),Xe=e("br",{class:"d-lg-none"},null,-1),Ze=e("span",{class:"ms-4",style:{"font-size":"16px"}},"您的支持就是我們進步的動力~",-1),Ge={class:"my-5"},Je={key:0,action:""},Ke={class:"mb-3 fw-bold d-flex align-items-center"},Qe=["src"],et={key:1,class:"bi bi-person-circle me-3",style:{"font-size":"45px"}},tt={class:"d-flex"},st={class:"row gy-5"},ot={class:"mb-2 fw-bold d-flex align-items-center"},it=["src"],rt={key:1,class:"bi bi-person-circle me-3",style:{"font-size":"45px"}},ct={class:"mb-0"};function lt(r,t,i,m,o,u){const _=f("RouterLink"),w=f("swiper-slide"),T=f("swiper");return c(),l("div",A,[e("div",U,[e("nav",D,[e("ol",q,[e("li",L,[y(_,{to:"/recipes",class:"link-orange"},{default:p(()=>[h("甜點食譜")]),_:1})]),e("li",Y,n(o.recipe.title),1)])])]),e("section",H,[e("div",O,[e("div",F,[e("div",W,[e("div",X,[e("div",Z,[e("img",{src:o.mainImg,style:{"object-fit":"cover","max-height":"300px"},class:"mx-auto",alt:""},null,8,G)]),e("div",J,[y(T,{"slides-per-view":3,"space-between":10,modules:o.modules,navigation:"",pagination:{clickable:!0}},{default:p(()=>[y(w,{style:{cursor:"pointer"},onClick:t[0]||(t[0]=()=>o.mainImg=o.recipe.image)},{default:p(()=>[e("img",{src:o.recipe.image,alt:"",style:{"object-fit":"cover"}},null,8,K)]),_:1}),(c(!0),l(b,null,g(o.recipe.imgsUrl,s=>(c(),k(w,{key:s+45345,style:{cursor:"pointer"},onClick:()=>o.mainImg=s},{default:p(()=>[e("img",{src:s,alt:"",style:{"object-fit":"cover"}},null,8,Q)]),_:2},1032,["onClick"]))),128))]),_:1},8,["modules"])])])]),e("div",ee,[e("div",te,[e("h5",se,[e("span",oe,n(o.recipe.category),1)]),ie,e("div",re,[e("h1",ce,n(o.recipe.title),1),e("div",le,[o.bookMark.length===0?(c(),l("button",{key:0,type:"button",class:"border-0 bg-transparent text-brown fs-4",onClick:t[1]||(t[1]=()=>u.addBookmark(o.recipe.id))},ae)):o.bookMark.length!==0?(c(),l("button",{key:1,type:"button",class:"border-0 bg-transparent fs-4",onClick:t[2]||(t[2]=(...s)=>u.deleteBookmark&&u.deleteBookmark(...s)),style:{color:"#fa6e42"}},de)):d("",!0),o.recipeThumbs?(c(),l("span",ue,n(o.recipeThumbs.length),1)):d("",!0),o.myThumb.length?o.myThumb.length?(c(),l("button",{key:4,type:"button",class:"border-0 bg-transparent text-brown fs-4",onClick:t[4]||(t[4]=(...s)=>u.deleteRecipeThumb&&u.deleteRecipeThumb(...s))},ge)):d("",!0):(c(),l("button",{key:3,type:"button",class:"border-0 bg-transparent text-brown fs-4",onClick:t[3]||(t[3]=(...s)=>u.addRecipeThumb&&u.addRecipeThumb(...s))},pe))])])]),e("h5",null,"食譜作者："+n(o.recipe.author),1),e("h5",null,"份量："+n(o.recipe.content),1)]),e("div",_e,[ke,e("p",ye,n(o.recipe.description),1)])])])]),e("section",fe,[e("div",we,[e("div",ve,[e("div",xe,[Te,e("h5",Ie,"成本：NT$ "+n(o.recipe.total),1),e("div",Ce,[(c(!0),l(b,null,g(o.recipe.ingredients,(s,I)=>(c(),l("div",{class:"col-12",key:s+367657},n(I+1)+". "+n(s.name)+" "+n(s.num)+" "+n(s.unit),1))),128))]),Me,o.recipe.instructions?(c(),l("div",Be,[(c(!0),l(b,null,g(o.recipe.instructions.split("/"),s=>(c(),l("p",{class:"me-3",key:s+346346},n(s),1))),128))])):d("",!0),Re,e("iframe",{width:"560",height:"315",src:o.recipe.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,Ee)]),e("div",Pe,[Ne,e("div",ze,[e("div",Se,[(c(!0),l(b,null,g(o.recipe.relativeProducts,s=>(c(),l("div",{key:s.id+456496},[s.category==="組合包"?(c(),k(_,{key:0,to:`/products/${s.id}`,class:"link-brown"},{default:p(()=>[e("img",{src:s.imgUrl,alt:"",width:"300",height:"150",style:{"object-fit":"cover"}},null,8,Ve),e("p",$e,n(s.title),1)]),_:2},1032,["to"])):d("",!0)]))),128))])]),e("div",je,[e("p",Ae,[e("del",Ue,"NT$ "+n(o.recipe.total),1),e("span",De,"NT$ "+n(o.recipe.price),1),h(" / 組 ")]),e("div",qe,[e("button",{class:$(["btn btn-sm btn-brown rounded-circle",{disabled:o.qty===1}]),style:{width:"30px",height:"30px"},type:"button",id:"button-addon2",onClick:t[5]||(t[5]=()=>o.qty-=1)},"-",2),x(e("select",{name:"",id:"",class:"form-select border-0 text-center","onUpdate:modelValue":t[6]||(t[6]=s=>o.qty=s),style:{width:"70px"}},[(c(),l(b,null,g(30,s=>e("option",{value:s,key:s+4596945},n(s),9,Le)),64))],512),[[E,o.qty]]),e("button",{class:"btn btn-sm btn-brown rounded-circle",style:{width:"30px",height:"30px"},type:"button",id:"button-addon2",onClick:t[7]||(t[7]=()=>o.qty+=1)},"+"),e("button",{class:"ms-4 btn btn-brown",type:"button",id:"button-addon2",onClick:t[8]||(t[8]=()=>r.addCart(o.groupProduct,o.qty))},"一鍵買齊")])]),e("div",Ye,[(c(!0),l(b,null,g(o.recipe.relativeProducts,s=>(c(),l("div",{class:"col",key:s.id+456496},[s.category==="單一產品"?(c(),k(_,{key:0,to:`/products/${s.id}`,class:"link-brown"},{default:p(()=>[e("img",{src:s.imgUrl,alt:"",width:"200",height:"150",style:{"object-fit":"cover"}},null,8,He),e("p",Oe,n(s.title),1)]),_:2},1032,["to"])):d("",!0)]))),128))])])])])]),e("section",Fe,[e("h3",null,[We,h(" 顧客評價 "),Xe,h(),Ze,this.token?d("",!0):(c(),k(_,{key:0,to:"/loginSignup/login",class:"ms-3 btn btn-brown"},{default:p(()=>[h("我要登入寫評價")]),_:1}))]),e("div",Ge,[this.token?(c(),l("form",Je,[e("h5",Ke,[o.user.headshotImg?(c(),l("img",{key:0,src:o.user.headshotImg,alt:"",width:"50",height:"50",style:{"object-fit":"cover"},class:"rounded-circle me-3"},null,8,Qe)):o.user.headshotImg?d("",!0):(c(),l("i",et)),h(" "+n(r.nickName),1)]),x(e("textarea",{class:"form-control",name:"",id:"",cols:"30",rows:"10","onUpdate:modelValue":t[9]||(t[9]=s=>o.recipeMessage=s)},null,512),[[P,o.recipeMessage]]),e("div",tt,[e("button",{type:"submit",class:"ms-auto btn btn-brown mt-3",onClick:t[10]||(t[10]=N((...s)=>u.addComments&&u.addComments(...s),["prevent"]))},"送出")])])):d("",!0),e("div",st,[(c(!0),l(b,null,g(o.recipeComments,s=>(c(),l("div",{class:"col-12 border-bottom",key:s.id+3657},[e("h5",ot,[s.user.headshotImg?(c(),l("img",{key:0,src:s.user.headshotImg,alt:"",width:"50",height:"50",style:{"object-fit":"cover"},class:"rounded-circle me-3"},null,8,it)):s.user.headshotImg?d("",!0):(c(),l("i",rt)),h(" "+n(s.user.nickName),1)]),e("p",ct,n(`${new Date(s.createAt).toLocaleDateString()}`),1),e("p",null,n(s.message),1)]))),128))])])])])}const bt=V(j,[["render",lt]]);export{bt as default};
