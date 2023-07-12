import{S as j,a as S,N as A,P as V}from"./pagination.min-d501988b.js";import{b as D,v as U,w as z}from"./runtime-dom.esm-bundler-05da3382.js";import{m as G}from"./index-f77dcddc.js";import{c as q}from"./carts-d5b2a762.js";import{n as E}from"./numberCommaMixin-e0aac39c.js";import{o as N,r as a,b as f,d as m,s as k,c as I,p as F,a as M}from"./db-143b9a4b.js";import{L as O}from"./index-cef339c7.js";import{_ as X}from"./loadingLogo-ccd03794.js";import{_ as Y,a7 as r,F as w,a9 as b,a8 as e,ad as n,ab as p,ag as y,N as g,ae as _,aa as u,ac as B,c as x,r as T,o}from"./_plugin-vue_export-helper-e5f607bc.js";import"./vue-router-8d0a8096.js";import"./_commonjsHelpers-042e6b4d.js";const H={components:{Swiper:j,SwiperSlide:S,Loading:O},mixins:[E],data(){return{recipe:{},modules:[A,V],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",bulletClass:"my-bullet-class",bulletActiveClass:"my-bullet-active-class"},mainImg:"",bookMark:{},allThumbNum:0,myThumb:{},recipeComments:[],recipeMessage:"",qty:1,groupProduct:{},user:{},uid:"",isLoading:!1,fullPage:!0}},methods:{...G(q,["addCart","toastMessage"]),getMyThumb(){N(M,l=>{if(l){this.uid=l.uid;const{id:i}=this.$route.params,h=a(m,`recipePersonalThumbs/${this.uid}/${i}`);f(h,d=>{this.myThumb=d.val(),console.log(this.myThumb,"個人按讚")})}else console.log("並未登入"),this.uid=null,this.user={},this.myThumb=null})},getAllThumbs(){const{id:l}=this.$route.params,i=a(m,`recipeThumbs/${l}`);f(i,h=>{this.allThumbNum=h.val(),this.allThumbNum?this.allThumbNum=this.allThumbNum.thumbs:this.allThumbNum=0,console.log(this.allThumbNum,!this.allThumbNum,"所有讚")})},addThumb(){if(!this.uid){this.toastMessage("登入才可按讚","error");return}const l=a(m,`recipePersonalThumbs/${this.uid}/${this.recipe.id}`);k(l,this.recipe);const i=a(m,`recipeThumbs/${this.recipe.id}`);k(i,{thumbs:this.allThumbNum+1}),this.toastMessage("按讚成功")},deleteThumb(){I(a(m,`recipePersonalThumbs/${this.uid}/${this.recipe.id}`));const l=a(m,`recipeThumbs/${this.recipe.id}`);k(l,{thumbs:this.allThumbNum-1}),this.toastMessage("取消按讚")},getRecipe(){const{id:l}=this.$route.params,i=a(m,`recipes/${l}`);f(i,h=>{this.recipe=h.val(),this.recipe.id=l,console.log(this.recipe,"讀取的資料"),this.mainImg=this.recipe.image,this.groupProduct=this.recipe.relativeProducts.filter(d=>d.category==="組合包"),this.groupProduct=this.groupProduct[0],this.isLoading=!1})},getAllComments(){const{id:l}=this.$route.params,i=a(m,"recipeComments/");f(i,h=>{let d=h.val();d=Object.values(d).map((s,c)=>(s.id=Object.keys(s)[c],s)),console.log(d,"全部食譜的留言"),this.recipeComments=d.filter(s=>s.recipeId===l),console.log(this.recipeComments,"個別留言")})},addComments(){const l=a(m,"recipeComments"),i=F(l);k(i,{recipeId:this.recipe.id,createAt:new Date().getTime(),message:this.recipeMessage,username:this.user.nickName,userImg:this.user.headshotImg}),this.recipeMessage=""},getBookmark(){N(M,l=>{if(l){this.uid=l.uid,console.log(this.uid,"使用者已登入取得 uid");const i=a(m,"users/"+l.uid);f(i,h=>{this.user=h.val(),console.log(this.user,"讀取的資料");const{id:d}=this.$route.params,s=a(m,`recipeBookmarks/${this.uid}/${d}`);f(s,c=>{this.bookMark=c.val(),console.log(this.bookMark,"書籤")})})}else console.log("並未登入"),this.uid=null,this.user={},this.bookMark=null})},addBookmark(){if(!this.uid){this.toastMessage("登入才可使用收藏功能","error");return}const l=a(m,`recipeBookmarks/${this.uid}/${this.recipe.id}`);k(l,this.recipe),this.toastMessage("收藏成功")},deleteBookmark(){I(a(m,`recipeBookmarks/${this.uid}/${this.recipe.id}`)),this.toastMessage("刪除收藏")}},mounted(){this.isLoading=!0,this.getAllThumbs(),this.getMyThumb(),this.getBookmark(),this.getRecipe(),this.getAllComments()}},J=e("div",{class:"d-flex flex-column align-items-center py-10"},[e("img",{src:X,class:"loadingLogo mb-3",style:{width:"150px"},alt:""}),e("h1",{class:"text-center fw-bold text-red"},[e("span",{class:"me-1 animate-text"},"L"),e("span",{class:"mx-1 animate-text"},"o"),e("span",{class:"mx-1 animate-text"},"a"),e("span",{class:"mx-1 animate-text"},"d"),e("span",{class:"mx-1 animate-text"},"i"),e("span",{class:"mx-1 animate-text"},"n"),e("span",{class:"mx-1 animate-text"},"g"),e("span",{class:"mx-2 animate-text"},"."),e("span",{class:"me-2 animate-text"},"."),e("span",{class:"animate-text"},".")])],-1),K={class:"mt-10",style:{"overflow-x":"hidden"}},Q={class:"container"},W={"aria-label":"breadcrumb"},Z={class:"breadcrumb"},$={class:"breadcrumb-item"},ee={class:"breadcrumb-item active","aria-current":"page"},se={class:"container mt-lg-5"},te={class:"row row-cols-lg-2 row-cols-1 gx-5"},ie={class:"col"},oe={class:"d-flex recipeMainImg mb-4"},le=["src"],re={class:"recipeSwiper position-relative"},ne=["src"],ce=["src"],ae={class:"col d-flex flex-column"},me={class:"d-flex align-items-center mb-3"},de={class:"me-2 mb-0"},ue={class:"badge rounded-pill bg-red"},he={class:"mb-0 mainTitle"},pe={class:"d-flex align-items-center ms-auto"},be=e("i",{class:"bi bi-heart"},null,-1),ge=[be],_e=e("i",{class:"bi bi-heart-fill"},null,-1),fe=[_e],ye=e("i",{class:"bi bi-hand-thumbs-up"},null,-1),ve=[ye],ke=e("i",{class:"bi bi-hand-thumbs-up-fill"},null,-1),xe=[ke],we={class:"mb-3"},Te={class:"mb-3"},Ce={class:"mt-auto"},Ne=e("h5",null,"甜點介紹：",-1),Ie={class:"mb-5"},Me={class:"bg-lightPink my-5",style:{"overflow-x":"hidden"}},Be={class:"container py-5"},Pe={class:"row row-cols-lg-2 row-cols-1 g-5"},Le={class:"col"},Re=e("h3",{class:"mb-3 fw-bold"},[e("span",{class:"material-icons"},"egg"),u(" 準備材料")],-1),je={class:"me-3"},Se={class:"row mb-6"},Ae=e("h3",{class:"mb-3 fw-bold"},[e("span",{class:"material-icons-outlined"},"soup_kitchen"),u(" 製作步驟")],-1),Ve={key:0},De=e("h3",{class:"mt-6 mb-3 fw-bold"},[e("i",{class:"bi bi-youtube"}),u(" 教學影片")],-1),Ue=["src"],ze={class:"col"},Ge=e("h3",{class:"mb-4 fw-bold"},[e("i",{class:"bi bi-bag-check-fill"}),u(" 相關產品")],-1),qe={class:"row"},Ee={class:"col-12 relativeProducts"},Fe={class:"enlargeImg position-relative",style:{width:"50% !important"}},Oe=["src"],Xe=e("p",{class:"subDetail d-none d-lg-block position-absolute fw-bold text-darkBrown",style:{top:"40%",left:"50%",transform:"translateX(-50%)","letter-spacing":"5px"}},"查看商品資訊",-1),Ye={class:"fw-bold mt-2"},He={class:"d-flex justify-content-between align-items-end"},Je={class:"h5 mb-0 d-flex flex-column"},Ke={class:"text-secondary me-3",style:{"font-size":"16px"}},Qe={class:"text-danger fw-bold"},We=e("span",{class:"text-darkBrown"}," / 組",-1),Ze={class:"input-group w-50"},$e=["value"],es={class:"row mt-5 row-cols-lg-3 row-cols-2 relativeProducts"},ss={class:"enlargeImg position-relative"},ts=["src"],is=e("p",{class:"subDetail d-none d-lg-block position-absolute fw-bold text-darkBrown",style:{top:"40%",left:"50%",transform:"translateX(-50%)"}},"查看商品資訊",-1),os={class:"fw-bold mt-2"},ls={class:"container py-5"},rs={class:"d-flex align-items-center"},ns=e("i",{class:"bi bi-stars"},null,-1),cs={class:"d-flex"},as={class:"my-5"},ms={key:0,action:""},ds={class:"mb-3 fw-bold d-flex align-items-center"},us=["src"],hs={key:1,class:"bi bi-person-circle me-3",style:{"font-size":"45px"}},ps={class:"d-flex"},bs={class:"row gy-5"},gs={class:"mb-2 fw-bold d-flex align-items-center"},_s=["src"],fs={key:1,class:"bi bi-person-circle me-3",style:{"font-size":"45px"}},ys={class:"mb-0"};function vs(l,i,h,d,s,c){const P=T("loading"),v=T("RouterLink"),C=T("swiper-slide"),L=T("swiper");return o(),r("div",null,[w(P,{active:s.isLoading,"onUpdate:active":i[0]||(i[0]=t=>s.isLoading=t),"can-cancel":!1,"is-full-page":s.fullPage,"lock-scroll":!0},{default:b(()=>[J]),_:1},8,["active","is-full-page"]),e("div",K,[e("div",Q,[e("nav",W,[e("ol",Z,[e("li",$,[w(v,{to:"/recipes",class:"link-red"},{default:b(()=>[u("甜點食譜")]),_:1})]),e("li",ee,n(s.recipe.title),1)])])]),e("section",se,[e("div",te,[e("div",ie,[e("div",oe,[e("img",{src:s.mainImg,style:{"object-fit":"cover","max-height":"300px"},class:"w-100",alt:""},null,8,le)]),e("div",re,[w(L,{"slides-per-view":3,"space-between":15,modules:s.modules,navigation:"",style:{height:"160px"},class:"w-100"},{default:b(()=>[w(C,{style:{cursor:"pointer"},onClick:i[1]||(i[1]=()=>s.mainImg=s.recipe.image)},{default:b(()=>[e("div",null,[e("img",{src:s.recipe.image,alt:"",style:{"object-fit":"cover",height:"100px !important"},class:y({border:s.mainImg===s.recipe.image,"border-3":s.mainImg===s.recipe.image,"border-red":s.mainImg===s.recipe.image})},null,10,ne)])]),_:1}),(o(!0),r(g,null,_(s.recipe.imgsUrl,t=>(o(),x(C,{key:t+45345,style:{cursor:"pointer"},onClick:()=>s.mainImg=t},{default:b(()=>[e("div",null,[e("img",{src:t,alt:"",style:{"object-fit":"cover",height:"100px !important"},class:y({border:s.mainImg===t,"border-3":s.mainImg===t,"border-red":s.mainImg===t})},null,10,ce)])]),_:2},1032,["onClick"]))),128))]),_:1},8,["modules"])])]),e("div",ae,[e("div",me,[e("h5",de,[e("span",ue,n(s.recipe.category),1)]),e("h1",he,n(s.recipe.title),1),e("div",pe,[s.bookMark?s.bookMark?(o(),r("button",{key:1,type:"button",class:"border-0 bg-transparent fs-4",onClick:i[3]||(i[3]=(...t)=>c.deleteBookmark&&c.deleteBookmark(...t)),style:{color:"#fa6e42"}},fe)):p("",!0):(o(),r("button",{key:0,type:"button",class:"border-0 bg-transparent text-red fs-4",onClick:i[2]||(i[2]=()=>c.addBookmark(s.recipe.id))},ge)),e("span",{class:y(["mb-0 ms-3",{"text-red":s.allThumbNum,"text-lightGray":!s.allThumbNum}])},n(s.allThumbNum),3),s.myThumb?s.myThumb?(o(),r("button",{key:3,type:"button",class:y(["border-0 bg-transparent fs-4",{"text-red":s.allThumbNum,"text-lightGray":!s.allThumbNum}]),onClick:i[5]||(i[5]=(...t)=>c.deleteThumb&&c.deleteThumb(...t))},xe,2)):p("",!0):(o(),r("button",{key:2,type:"button",class:y(["border-0 bg-transparent fs-4",{"text-red":s.allThumbNum,"text-lightGray":!s.allThumbNum}]),onClick:i[4]||(i[4]=(...t)=>c.addThumb&&c.addThumb(...t))},ve,2))])]),e("h5",we,"食譜作者："+n(s.recipe.author),1),e("h5",Te,"份量："+n(s.recipe.content),1),e("div",Ce,[Ne,e("p",Ie,n(s.recipe.description),1)])])])]),e("section",Me,[e("div",Be,[e("div",Pe,[e("div",Le,[Re,e("h5",je,"成本：NT$ "+n(s.recipe.total),1),e("div",Se,[(o(!0),r(g,null,_(s.recipe.ingredients,(t,R)=>(o(),r("div",{class:"col-12",key:t+367657},n(R+1)+". "+n(t.name)+" "+n(t.num)+" "+n(t.unit),1))),128))]),Ae,s.recipe.instructions?(o(),r("div",Ve,[(o(!0),r(g,null,_(s.recipe.instructions.split("/"),t=>(o(),r("p",{class:"me-3",key:t+346346},n(t),1))),128))])):p("",!0),De,e("iframe",{width:"560",height:"315",src:s.recipe.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:""},null,8,Ue)]),e("div",ze,[Ge,e("div",qe,[e("div",Ee,[(o(!0),r(g,null,_(s.recipe.relativeProducts,t=>(o(),r("div",{key:t.id+456496,class:"subImg"},[t.category==="組合包"?(o(),x(v,{key:0,to:`/products/${t.id}`,class:"link-red d-flex flex-column align-items-center cardImg"},{default:b(()=>[e("div",Fe,[e("img",{src:t.imgUrl,alt:"",class:"w-100",height:"150",style:{"object-fit":"cover"}},null,8,Oe),Xe]),e("p",Ye,n(t.title),1)]),_:2},1032,["to"])):p("",!0)]))),128))])]),e("div",He,[e("p",Je,[e("del",Ke,"NT$ "+n(l.numberComma(s.recipe.total)),1),e("span",Qe,[u("NT$ "+n(l.numberComma(s.recipe.price))+" ",1),We])]),e("div",Ze,[B(e("select",{name:"",id:"",class:"form-select text-center","onUpdate:modelValue":i[6]||(i[6]=t=>s.qty=t),style:{width:"70px"}},[(o(),r(g,null,_(30,t=>e("option",{value:t,key:t+4596945},n(t),9,$e)),64))],512),[[D,s.qty]]),e("button",{class:"btn btn-red",type:"button",id:"button-addon2",onClick:i[7]||(i[7]=()=>l.addCart(s.groupProduct,s.qty))},"一鍵買齊")])]),e("div",es,[(o(!0),r(g,null,_(s.recipe.relativeProducts,t=>(o(),r("div",{class:"col subImg",key:t.id+456496},[t.category==="單一產品"?(o(),x(v,{key:0,to:`/products/${t.id}`,class:"link-red d-flex flex-column align-items-center cardImg"},{default:b(()=>[e("div",ss,[e("img",{src:t.imgUrl,alt:"",height:"150",style:{"object-fit":"cover"},class:"w-100"},null,8,ts),is]),e("p",os,n(t.title),1)]),_:2},1032,["to"])):p("",!0)]))),128))])])])])]),e("section",ls,[e("h3",rs,[ns,u(" 顧客評價 "),e("div",{class:y(["ms-2 badge border rounded-pill bg-white",{"text-orange":s.recipeComments.length,"text-lightBrownGray":!s.recipeComments.length,"border-orange":s.recipeComments.length,"border-lightBrownGray":!s.recipeComments.length}]),style:{"font-size":"16px"}},n(s.recipeComments.length)+" 則 ",3),s.uid?p("",!0):(o(),x(v,{key:0,to:"/login",class:"ms-3 btn btn-red d-none d-lg-block"},{default:b(()=>[u("我要登入寫評價")]),_:1}))]),e("div",cs,[s.uid?p("",!0):(o(),x(v,{key:0,to:"/login",class:"btn btn-red d-lg-none ms-auto"},{default:b(()=>[u("我要登入寫評價")]),_:1}))]),e("div",as,[s.uid?(o(),r("form",ms,[e("h5",ds,[s.user.headshotImg?(o(),r("img",{key:0,src:s.user.headshotImg,alt:"",width:"50",height:"50",style:{"object-fit":"cover"},class:"rounded-circle me-3"},null,8,us)):s.user.headshotImg?p("",!0):(o(),r("i",hs)),u(" "+n(s.user.nickName),1)]),B(e("textarea",{class:"form-control",name:"",id:"",cols:"30",rows:"10","onUpdate:modelValue":i[8]||(i[8]=t=>s.recipeMessage=t)},null,512),[[U,s.recipeMessage]]),e("div",ps,[e("button",{type:"submit",class:"ms-auto btn btn-red mt-3",onClick:i[9]||(i[9]=z((...t)=>c.addComments&&c.addComments(...t),["prevent"]))},"送出")])])):p("",!0),e("div",bs,[(o(!0),r(g,null,_(s.recipeComments,t=>(o(),r("div",{class:"col-12 border-bottom",key:t+3657},[e("h5",gs,[t.userImg?(o(),r("img",{key:0,src:t.userImg,alt:"",width:"50",height:"50",style:{"object-fit":"cover"},class:"rounded-circle me-3"},null,8,_s)):t.userImg?p("",!0):(o(),r("i",fs)),u(" "+n(t.username),1)]),e("p",ys,n(`${new Date(t.createAt).toLocaleDateString()}`),1),e("p",null,n(t.message),1)]))),128))])])])])])}const Rs=Y(H,[["render",vs]]);export{Rs as default};
