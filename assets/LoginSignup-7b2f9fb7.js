import{b as u}from"./vue-router-495964e8.js";import{M as _,t as g,_ as v,a as f,b as x,c as h}from"./icon-fb-203108ee.js";import{_ as c}from"./logo-5ad94f32.js";import{_ as y}from"./icon-search-d6364761.js";import{b6 as M,l as k,m as e,t,b1 as o,a5 as w,r,av as a,aj as B,s as l}from"./_plugin-vue_export-helper-31c7975b.js";import"./modalMixin-04fea284.js";import"./_commonjsHelpers-042e6b4d.js";import"./axios-174aada3.js";import"./carts-f5125435.js";import"./runtime-dom.esm-bundler-226b1721.js";const C={components:{RouterView:u,MobileMenuModal:_},data(){return{toggleBtn:g}},methods:{openMenuModal(){this.$refs.MobileMenuModal.show()}},mounted(){}},z={class:"fixed-top",style:{"z-index":"2000 !important"}},R={class:"bg-white"},V={class:"navbar navbar-expand-lg navbar-light container d-flex flex-column"},A={class:"container-fluid position-relative"},E={class:"d-flex align-items-center"},L=e("img",{src:c,style:{height:"35px"},class:"logo",alt:""},null,-1),N={class:"position-absolute end-0"},S=e("button",{type:"button",class:"btn border-0 d-lg-none p-0 ps-2","data-bs-toggle":"modal","data-bs-target":"#searchModal"},[e("img",{src:v,style:{height:"25px"},alt:""})],-1),$=r('<div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"><div class="modal-dialog mx-3"><div class="modal-content" style="border-radius:20px;"><div class="modal-header border-0 p-0"><button type="button" class="ms-auto border-0 bg-transparent p-3" data-bs-dismiss="modal" aria-label="Close"><img src="'+f+'" alt=""></button></div><div class="modal-body p-0 mx-4"><ul class="list-unstyled"><li class="text-center border-bottom pb-3 d-flex flex-column"><label for="category" class="form-label me-auto ms-2" style="font-size:14px;color:#C0AB8E;">種類</label><select name="" id="category" class="form-select border-0"><option value="全部">全部</option></select></li><li class="text-center border-bottom pb-3 d-flex flex-column"><label for="category" class="form-label me-auto ms-2 mt-2" style="font-size:14px;color:#C0AB8E;">成本</label><select name="" id="category" class="form-select border-0"><option value="全部">全部</option></select></li><li class="text-center border-bottom pb-3 d-flex flex-column"><label for="category" class="form-label me-auto ms-2 mt-2" style="font-size:14px;color:#C0AB8E;">評價</label><select name="" id="category" class="form-select border-0"><option value="全部">全部</option></select></li></ul><div class="bg-white border-0 position-relative"><input type="search" class="form-control rounded-pill my-4 py-2" placeholder="請輸入甜點名稱" style="border-color:#C0AB8E;"><button type="submit" class="border-0 bg-transparent position-absolute top-50 translate-middle start-100 pe-5"><img src="'+y+'" style="height:25px;" alt=""></button></div></div></div></div></div>',1),j={class:"collapse navbar-collapse",id:"navbarNav"},T={class:"navbar-nav ms-auto"},q={class:"nav-item me-3"},D={class:"nav-item mx-3"},F={class:"nav-item mx-3"},G={class:"nav-item ms-3"},H=r('<footer class="bg-white"><div class="container d-flex flex-column flex-lg-row align-items-center" style="padding:40px 0;"><img src="'+c+'" class="logo mb-4 mb-lg-0" alt=""><div class="ms-lg-auto"><ul class="list-unstyled d-flex justify-content-lg-end justify-content-center"><li class="me-4"><a href="#" class="text-decoration-none"><img src="'+x+'" style="height:40px;" alt=""></a></li><li><a href="#" class="text-decoration-none"><img src="'+h+'" style="height:40px;" alt=""></a></li></ul><p class="mb-0 text-center text-lg-start" style="font-size:10px;">本網站僅作為網頁製作練習使用<br class="d-block d-lg-none"><span class="d-none d-lg-inline-block">，</span>圖片、資料源自網路，無任何商業利益行為</p><p class="mb-0 text-lg-end text-center" style="font-size:10px;">Copyright © 2022 甜點食譜一鍵購 All Rights Reserved.</p></div></div></footer>',1);function I(J,i,K,O,d,n){const s=a("RouterLink"),m=a("MobileMenuModal"),p=a("RouterView");return B(),k("div",null,[e("div",z,[e("div",R,[e("nav",V,[e("div",A,[e("div",E,[t(s,{to:"/home",class:"navbar-brand"},{default:o(()=>[L]),_:1}),e("div",N,[S,e("button",{class:"navbar-toggler border-0",type:"button",onClick:i[0]||(i[0]=(...b)=>n.openMenuModal&&n.openMenuModal(...b))},[e("span",{class:"navbar-toggler-icon",style:w([{width:"24px",height:"24px"},{"background-image":`url(${d.toggleBtn})`}])},null,4)])])]),t(m,{ref:"MobileMenuModal"},null,512),$,e("div",j,[e("ul",T,[e("li",q,[t(s,{to:"/recipes","active-class":"active-link",class:"nav-link"},{default:o(()=>[l("甜點食譜")]),_:1})]),e("li",D,[t(s,{to:"/products","active-class":"active-link",class:"nav-link"},{default:o(()=>[l("材料購買")]),_:1})]),e("li",F,[t(s,{to:"/discounts","active-class":"active-link",class:"nav-link"},{default:o(()=>[l("優惠特報")]),_:1})]),e("li",G,[t(s,{to:"/member","active-class":"active-link",class:"nav-link"},{default:o(()=>[l("會員專區")]),_:1})])])])])])])]),t(p),H])}const oe=M(C,[["render",I]]);export{oe as default};