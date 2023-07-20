import{m as U}from"./index-5ef868e0.js";import{c as A}from"./carts-7b25326f.js";import{P as S}from"./PaginationComponent-13de0398.js";import{n as T}from"./numberCommaMixin-e0aac39c.js";import{o as N,u as _,r as h,a as x,f as D,d as p,b as C}from"./db-143b9a4b.js";import{L as V}from"./index-fde5e204.js";import{w as g,v as P}from"./runtime-dom.esm-bundler-e140de91.js";import{_ as j}from"./loadingLogo-ea15f612.js";import{_ as F,a7 as o,F as y,a9 as k,a8 as e,ab as c,ad as a,af as n,ac as E,N as M,ae as B,aa as b,r as v,o as i,c as H}from"./_plugin-vue_export-helper-d28549df.js";import"./vue-router-46224dd8.js";import"./_commonjsHelpers-042e6b4d.js";const R="/finalEasyBuyEasyMake/assets/undraw_No_data_re_kwbl-fe986f09.png";const q={components:{PaginationComponent:S,Loading:V},mixins:[T],data(){return{user:{},uid:"",orders:[],filterOrders:[],selectItem:"全部",orderArrived:[],nickNameEdit:!0,passwordEdit:!0,newNickName:"",newPassword:"",nickName:"",pageOrders:[],isLoading:!1,fullPage:!0}},methods:{...U(A,["toastMessage"]),getUserInformation(){N(x,r=>{if(r){this.uid=r.uid,console.log(this.uid,"使用者已登入取得 uid 有在作用嗎");const s=h(p,"users/"+r.uid);C(s,d=>{this.user=d.val(),console.log(this.user,"讀取的資料"),this.isLoading=!1})}else console.log("並未登入"),this.uid=null,this.user={},this.$swal({icon:"error",title:"請先登入",showConfirmButton:!1,timer:1500}),this.$router.push("/login")})},getOrders(){N(x,r=>{if(r){this.uid=r.uid;const s=h(p,`orders/${this.uid}`);C(s,d=>{const f=d.val();f&&(this.orders=Object.entries(f).map(t=>(t[1].id=t[0],t[1])),this.filterOrders=this.orders,this.orderArrived=this.orders.filter(t=>t.deliveryStatus==="待取貨"),this.filterOrders&&this.$route.fullPath==="/member"&&this.$refs.pagination.renderPage(1,this.filterOrders))})}else console.log("並未登入"),this.uid=null,this.user={},this.uid||(this.toastMessage("請先登入","error"),this.$router.push("/login"))})},changeEmail(){if(this.newNickName.length>10){this.toastMessage("暱稱不得超過10個字元","error");return}else if(this.newNickName===""){this.toastMessage("暱稱不得是空字串","error");return}_(h(p),{[`users/${this.uid}/nickName/`]:this.newNickName}),this.nickNameEdit=!0,this.toastMessage("暱稱修改成功")},changePassword(){if(this.newPassword.length<=5){this.toastMessage("新密碼不能小於6個字元","error");return}const r=x.currentUser;D(r,this.newPassword).then(()=>{this.passwordEdit=!0,this.toastMessage("密碼變更成功")}).catch(()=>{this.toastMessage("長時間未驗證請重新登入以更改密碼","error"),this.$router.push("/login")})},linkToLottery(){this.$router.push({name:"discountsView",query:{tabName:"抽獎回饋"}})},async selectFile(){const{value:r}=await this.$swal({title:"選擇圖片",input:"file",confirmButtonColor:"#4572c2",confirmButtonText:"確定",inputAttributes:{accept:"image/*","aria-label":"Upload your profile picture"}});if(r){const s=new FileReader;s.onload=d=>{this.$swal({title:"圖片上傳成功!",imageUrl:d.target.result,imageAlt:"The uploaded picture",imageHeight:300}),console.log(d.target.result,"印出什麼"),_(h(p),{[`users/${this.uid}/headshotImg/`]:d.target.result})},s.readAsDataURL(r)}else this.toastMessage("沒有檔案","error")},async selectImgUrl(){const{value:r}=await this.$swal({title:"選擇圖片",input:"text",confirmButtonColor:"#4572c2",confirmButtonText:"確定",inputAttributes:{accept:"image/*","aria-label":"Upload your profile picture"}});r?(console.log(r,"檔案"),this.$swal({title:"圖片上傳成功",imageUrl:r,imageHeight:300,imageAlt:"Custom image"}),_(h(p),{[`users/${this.uid}/headshotImg/`]:r})):this.toastMessage("請勿輸入空值","error")}},mounted(){this.isLoading=!0,this.getUserInformation(),this.getOrders()},watch:{selectItem(){this.selectItem==="全部"?this.filterOrders=this.orders:this.selectItem!=="全部"&&(this.filterOrders=this.orders.filter(r=>r.deliveryStatus===this.selectItem)),this.$refs.pagination.renderPage(1,this.filterOrders)},user(){this.newNickName=this.user.nickName}}},z={class:"",style:{"overflow-x":"hidden"}},G=e("div",{class:"d-flex flex-column align-items-center py-10"},[e("img",{src:j,class:"loadingLogo mb-3",style:{width:"150px"},alt:""}),e("h1",{class:"text-center fw-bold text-blue"},[e("span",{class:"me-1 animate-text"},"L"),e("span",{class:"mx-1 animate-text"},"o"),e("span",{class:"mx-1 animate-text"},"a"),e("span",{class:"mx-1 animate-text"},"d"),e("span",{class:"mx-1 animate-text"},"i"),e("span",{class:"mx-1 animate-text"},"n"),e("span",{class:"mx-1 animate-text"},"g"),e("span",{class:"mx-2 animate-text"},"."),e("span",{class:"me-2 animate-text"},"."),e("span",{class:"animate-text"},".")])],-1),Y=e("section",{class:"bannerBg",style:{"background-image":"url('https://images.unsplash.com/photo-1678465952850-0eb0bb982835?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"}},[e("div",{class:"mask"},[e("div",{class:"text",style:{background:"linear-gradient(to bottom, white 50% , #4572c2 50%)","-webkit-background-clip":"text"}}," 會員資料 ")])],-1),W={class:"container"},X={class:"row row-cols-1 row-cols-lg-2 gx-5"},J={class:"col-lg-4 py-5"},K={class:"d-flex flex-column align-items-center position-relative bg-lightBlue pt-5"},Q={key:0,class:"d-flex",style:{height:"300px",width:"300px"}},Z=e("i",{class:"bi bi-person-fill m-auto text-blue",style:{"font-size":"200px"}},null,-1),$=[Z],ee=["src"],te={class:"headshotImgBtn row align-items-center position-absolute w-100",style:{bottom:"0px",background:"rgba(209, 219, 255, 0.9)"}},se=e("a",{href:"#",class:"link-blue fw-bold mx-auto"},"上傳圖片網址",-1),le=[se],ie=e("a",{href:"#",class:"link-blue fw-bold mx-auto"},"上傳本地圖片",-1),oe=[ie],ne={class:"border border-lightBlue"},re={class:"py-3 d-flex align-items-center"},ce=e("label",{for:"nickName",class:"form-label mb-0 fw-bold ms-1 ms-lg-3"},[e("i",{class:"bi bi-person-circle"}),b(" 暱稱")],-1),ae={key:0,class:"ms-4"},de={class:"ms-auto"},me={class:"bg-lightBlue py-3 d-flex align-items-center"},ue=e("label",{for:"email",class:"form-label mb-0 fw-bold ms-1 ms-lg-3"},[e("i",{class:"bi bi-envelope-fill"}),b(" 信箱")],-1),be={class:"ms-4"},he={class:"py-3 d-flex align-items-center"},pe=e("label",{for:"password",class:"form-label mb-0 fw-bold ms-1 ms-lg-3"},[e("i",{class:"bi bi-lock-fill"}),b(" 密碼")],-1),ge={key:0,class:"ms-4"},fe={class:"ms-auto"},we={class:"bg-lightBlue py-3 d-flex align-items-center"},_e=e("label",{for:"ticket",class:"form-label mb-0 fw-bold ms-1 ms-lg-3"},[e("i",{class:"bi bi-ticket-perforated-fill"}),b(" 我的抽獎券")],-1),xe={class:"ms-4"},ye={class:"col-lg-8 py-5"},ke=e("h2",{class:"h3 fw-bold text-center py-3 bg-lightBlue text-blue"},"訂單狀況",-1),ve={class:"selectOrderStatus py-3 d-flex justify-content-between justify-content-lg-start"},Ie={class:"row row-cols-1 py-3"},Ne={class:"mb-3"},Ce={key:0},Pe={class:"orderSelect p-3"},Ee=e("i",{class:"bi bi-clock"},null,-1),Me={class:"row row-cols-lg-4 row-cols-2 align-items-center mt-2"},Be={key:0,class:""},Le=["src"],Oe={class:"mb-0 mt-2 text-center"},Ue={class:"subTitle me-1"},Ae={class:"text-blue fw-bold"},Se={key:1,class:"position-relative",style:{top:"-16px","background-color":"rgba(0, 0, 0, .4)"}},Te=["src"],De={class:"mb-0 text-center position-absolute fs-1 text-white",style:{top:"50%",left:"50%",transform:"translateX(-50%) translateY(-50%)","text-shadow":"2px 2px 2px rgb(71, 71, 71)"}},Ve={class:"d-flex mt-4"},je={class:"ms-auto d-flex align-items-center"},Fe={class:"me-3 fw-bold"},He={key:0,class:"bi bi-box-seam me-1"},Re={key:1,class:"bi bi-truck me-1"},qe={key:2,class:"bi bi-house-check me-1"},ze={key:3,class:"bi bi-clipboard-check me-1"},Ge={class:"text-blue fw-bold"},Ye=e("i",{class:"bi bi-search text-blue"},null,-1),We=e("hr",null,null,-1),Xe={key:1,class:"d-flex flex-column align-items-center justify-content-center"},Je=e("img",{src:R,style:{width:"300px"},alt:""},null,-1),Ke=e("h3",null,"無訂單",-1),Qe=[Je,Ke];function Ze(r,s,d,f,t,m){const L=v("loading"),I=v("RouterLink"),O=v("PaginationComponent");return i(),o("div",z,[y(L,{active:t.isLoading,"onUpdate:active":s[0]||(s[0]=l=>t.isLoading=l),"can-cancel":!1,"is-full-page":t.fullPage,"lock-scroll":!0},{default:k(()=>[G]),_:1},8,["active","is-full-page"]),Y,e("div",W,[e("div",X,[e("section",J,[e("div",K,[t.user.headshotImg?t.user.headshotImg?(i(),o("img",{key:1,src:t.user.headshotImg,style:{"object-fit":"cover",height:"300px",width:"300px"},class:"mb-4",alt:""},null,8,ee)):c("",!0):(i(),o("div",Q,$)),e("div",te,[e("div",{class:"col d-flex py-3 border border-white",onClick:s[1]||(s[1]=g((...l)=>m.selectImgUrl&&m.selectImgUrl(...l),["prevent"]))},le),e("div",{class:"col d-flex py-3 border border-white",onClick:s[2]||(s[2]=g((...l)=>m.selectFile&&m.selectFile(...l),["prevent"]))},oe)])]),e("div",ne,[e("div",re,[ce,t.nickNameEdit?(i(),o("span",ae,a(t.user.nickName),1)):c("",!0),e("div",de,[t.nickNameEdit?(i(),o("a",{key:0,href:"#",class:"link-blue fw-bold me-3",onClick:s[3]||(s[3]=g(()=>t.nickNameEdit=!t.nickNameEdit,["prevent"]))},"修改暱稱")):c("",!0),e("div",{class:n(["input-group",{"d-none":t.nickNameEdit}])},[E(e("input",{type:"text",class:"form-control",placeholder:"請輸入新暱稱",id:"nickName","onUpdate:modelValue":s[4]||(s[4]=l=>t.newNickName=l),style:{width:"180px"}},null,512),[[P,t.newNickName]]),e("button",{onClick:s[5]||(s[5]=()=>t.nickNameEdit=!0),class:"btn btn-outline-secondary btn-sm",type:"button",id:"button-addon2"},"取消"),e("button",{onClick:s[6]||(s[6]=()=>m.changeEmail()),class:"btn btn-sm btn-outline-blue",type:"button",id:"button-addon2"},"確定")],2)])]),e("div",me,[ue,e("span",be,a(t.user.email),1)]),e("div",he,[pe,t.passwordEdit?(i(),o("span",ge,"* * * * * * * *")):c("",!0),e("div",fe,[t.passwordEdit?(i(),o("a",{key:0,href:"#",class:"link-blue fw-bold me-3",onClick:s[7]||(s[7]=g(()=>t.passwordEdit=!t.passwordEdit,["prevent"]))},"變更密碼")):c("",!0),e("div",{class:n(["input-group",{"d-none":t.passwordEdit}])},[E(e("input",{type:"password",class:"form-control",placeholder:"請輸入新密碼",id:"password","onUpdate:modelValue":s[8]||(s[8]=l=>t.newPassword=l),style:{width:"180px"}},null,512),[[P,t.newPassword]]),e("button",{onClick:s[9]||(s[9]=()=>t.passwordEdit=!0),class:"btn btn-sm btn-outline-secondary",type:"button",id:"button-addon2"},"取消"),e("button",{onClick:s[10]||(s[10]=()=>m.changePassword()),class:"btn btn-sm btn-outline-blue",type:"button",id:"button-addon2"},"確定")],2)])]),e("div",we,[_e,e("span",xe,a(t.user.lotteryTicket)+" 張",1),e("button",{type:"button",class:"btn btn-sm btn-outline-blue ms-auto me-2",onClick:s[11]||(s[11]=(...l)=>m.linkToLottery&&m.linkToLottery(...l)),style:{"border-radius":"0px"}},"立即抽獎")])])]),e("section",ye,[ke,e("div",ve,[e("button",{type:"button",class:n(["d-flex btn border-0 me-lg-5 hvr-rectangle-out bg-transparent",{activePage:t.selectItem==="全部"}]),onClick:s[12]||(s[12]=()=>t.selectItem="全部")},[e("i",{class:n(["bi bi-border-all",{"text-white":t.selectItem==="全部","fw-bold":t.selectItem==="全部"}])},null,2),e("span",{class:n(["text-secondary d-none d-lg-block ms-2",{"text-white":t.selectItem==="全部","fw-bold":t.selectItem==="全部"}])}," 全部 ",2),t.selectItem==="全部"?(i(),o("span",{key:0,class:n(["text-secondary d-lg-none ms-2",{"text-white":t.selectItem==="全部","fw-bold":t.selectItem==="全部"}])}," 全部 ",2)):c("",!0)],2),e("button",{type:"button",class:n(["d-flex btn border-0 me-lg-5 hvr-rectangle-out bg-transparent",{activePage:t.selectItem==="待出貨"}]),onClick:s[13]||(s[13]=()=>t.selectItem="待出貨")},[e("i",{class:n(["bi bi-box-seam",{"text-white":t.selectItem==="待出貨","fw-bold":t.selectItem==="待出貨"}])},null,2),e("span",{class:n(["text-secondary d-none d-lg-block ms-2",{"text-white":t.selectItem==="待出貨","fw-bold":t.selectItem==="待出貨"}])}," 待出貨 ",2),t.selectItem==="待出貨"?(i(),o("span",{key:0,class:n(["text-secondary d-lg-none ms-2",{"text-white":t.selectItem==="待出貨","fw-bold":t.selectItem==="待出貨"}])}," 待出貨 ",2)):c("",!0)],2),e("button",{type:"button",class:n(["d-flex btn border-0 me-lg-5 hvr-rectangle-out bg-transparent",{activePage:t.selectItem==="運送中"}]),onClick:s[14]||(s[14]=()=>t.selectItem="運送中")},[e("i",{class:n(["bi bi-truck",{"text-white":t.selectItem==="運送中","fw-bold":t.selectItem==="運送中"}])},null,2),e("span",{class:n(["text-secondary d-none d-lg-block ms-2",{"text-white":t.selectItem==="運送中","fw-bold":t.selectItem==="運送中"}])}," 運送中 ",2),t.selectItem==="運送中"?(i(),o("span",{key:0,class:n(["text-secondary d-lg-none ms-2",{"text-white":t.selectItem==="運送中","fw-bold":t.selectItem==="運送中"}])}," 運送中 ",2)):c("",!0)],2),e("button",{type:"button",class:n(["d-flex btn border-0 me-lg-5 position-relative hvr-rectangle-out bg-transparent",{activePage:t.selectItem==="待取貨"}]),onClick:s[15]||(s[15]=()=>t.selectItem="待取貨")},[e("i",{class:n(["bi bi-house-check",{"text-white":t.selectItem==="待取貨","fw-bold":t.selectItem==="待取貨"}])},null,2),e("span",{class:n(["text-secondary d-none d-lg-block ms-2",{"text-white":t.selectItem==="待取貨","fw-bold":t.selectItem==="待取貨"}])}," 待取貨 ",2),t.selectItem==="待取貨"?(i(),o("span",{key:0,class:n(["text-secondary d-lg-none ms-2",{"text-white":t.selectItem==="待取貨","fw-bold":t.selectItem==="待取貨"}])}," 待取貨 ",2)):c("",!0)],2),e("button",{type:"button",class:n(["d-flex btn border-0 me-lg-5 hvr-rectangle-out bg-transparent",{activePage:t.selectItem==="訂單完成"}]),onClick:s[16]||(s[16]=()=>t.selectItem="訂單完成")},[e("i",{class:n(["bi bi-clipboard-check",{"text-white":t.selectItem==="訂單完成","fw-bold":t.selectItem==="訂單完成"}])},null,2),e("span",{class:n(["text-secondary d-none d-lg-block ms-2",{"text-white":t.selectItem==="訂單完成","fw-bold":t.selectItem==="訂單完成"}])}," 訂單完成 ",2),t.selectItem==="訂單完成"?(i(),o("span",{key:0,class:n(["text-secondary d-lg-none ms-2",{"text-white":t.selectItem==="訂單完成","fw-bold":t.selectItem==="訂單完成"}])}," 訂單完成 ",2)):c("",!0)],2)]),e("div",Ie,[e("h4",Ne," 總共有 "+a(t.filterOrders.length)+" 筆 ",1),t.filterOrders.length?(i(),o("div",Ce,[(i(!0),o(M,null,B(this.$refs.pagination.pageProducts,l=>(i(),H(I,{to:`/orders/${l.id}`,class:"col text-decoration-none link-dark",key:l.creatAt},{default:k(()=>[e("div",Pe,[e("span",null,[Ee,b(" "+a(new Date(l.creatAt).toLocaleDateString())+" "+a(new Date(l.creatAt).getHours())+":"+a(new Date(l.creatAt).getMinutes()),1)]),e("div",Me,[(i(!0),o(M,null,B(l.cart.items,(u,w)=>(i(),o("div",{class:"col",key:u+6603},[w<7||l.cart.items.length===8&&w===7?(i(),o("div",Be,[e("img",{src:u.product.imgUrl,alt:"",height:"100",class:"w-100",style:{"object-fit":"cover"}},null,8,Le),e("p",Oe,[e("span",Ue,a(u.product.title.length>9?u.product.title.slice(0,8)+"...":u.product.title),1),e("span",Ae,"x"+a(r.numberComma(u.qty)),1)])])):c("",!0),w===7&&l.cart.items.length!==8?(i(),o("div",Se,[e("img",{src:u.product.imgUrl,alt:"",height:"100",class:"w-100",style:{"object-fit":"cover",opacity:".4"}},null,8,Te),e("p",De,a(l.cart.items.length-7)+" + ",1)])):c("",!0)]))),128))]),e("div",Ve,[e("div",je,[e("span",Fe,[l.deliveryStatus==="待出貨"?(i(),o("i",He)):c("",!0),l.deliveryStatus==="運送中"?(i(),o("i",Re)):c("",!0),l.deliveryStatus==="待取貨"?(i(),o("i",qe)):c("",!0),l.deliveryStatus==="訂單完成"?(i(),o("i",ze)):c("",!0),b(a(l.deliveryStatus),1)]),e("span",Ge,"NT$ "+a(r.numberComma(l.cart.finalTotal)),1),y(I,{to:`/orders/${l.id}`,class:"ms-3"},{default:k(()=>[Ye]),_:2},1032,["to"])])])]),We]),_:2},1032,["to"]))),128))])):t.filterOrders.length?c("",!0):(i(),o("div",Xe,Qe))]),y(O,{ref:"pagination","filter-orders":t.filterOrders},null,8,["filter-orders"])])])])])}const dt=F(q,[["render",Ze]]);export{dt as default};
