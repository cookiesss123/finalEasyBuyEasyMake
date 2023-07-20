import{r as u,b as _,d as x}from"./db-143b9a4b.js";import{L as g}from"./index-fde5e204.js";import{_ as f}from"./loadingLogo-ea15f612.js";import{_ as h,a7 as b,F as c,a9 as i,a8 as t,ad as e,aa as l,r,o as v}from"./_plugin-vue_export-helper-d28549df.js";import"./_commonjsHelpers-042e6b4d.js";import"./runtime-dom.esm-bundler-e140de91.js";const L={data(){return{coupon:{},isLoading:!1,fullPage:!0}},components:{Loading:g},methods:{getCoupon(){const{id:a}=this.$route.params,o=u(x,`coupons/${a}`);_(o,n=>{this.coupon=n.val(),console.log(this.coupon,"折價券"),this.isLoading=!1})}},mounted(){this.isLoading=!0,this.getCoupon()}},y={class:"container my-10"},D=t("div",{class:"d-flex flex-column align-items-center py-10"},[t("img",{src:f,class:"loadingLogo mb-3",style:{width:"150px"},alt:""}),t("h1",{class:"text-center fw-bold text-blue"},[t("span",{class:"me-1 animate-text"},"L"),t("span",{class:"mx-1 animate-text"},"o"),t("span",{class:"mx-1 animate-text"},"a"),t("span",{class:"mx-1 animate-text"},"d"),t("span",{class:"mx-1 animate-text"},"i"),t("span",{class:"mx-1 animate-text"},"n"),t("span",{class:"mx-1 animate-text"},"g"),t("span",{class:"mx-2 animate-text"},"."),t("span",{class:"me-2 animate-text"},"."),t("span",{class:"animate-text"},".")])],-1),k={"aria-label":"breadcrumb"},w={class:"breadcrumb"},C={class:"breadcrumb-item"},S={class:"breadcrumb-item active","aria-current":"page"},V={class:"d-flex justify-content-center py-5"},B={class:"col-lg-8 col-12"},N={class:"card"},R=["src"],j={class:"card-body"},P={class:"card-title h2 text-center"},E={class:"card-text"};function F(a,o,n,O,s,T){const p=r("loading"),d=r("RouterLink");return v(),b("div",y,[c(p,{active:s.isLoading,"onUpdate:active":o[0]||(o[0]=m=>s.isLoading=m),"can-cancel":!1,"is-full-page":s.fullPage,"lock-scroll":!0},{default:i(()=>[D]),_:1},8,["active","is-full-page"]),t("nav",k,[t("ol",w,[t("li",C,[c(d,{to:"/discounts",class:"link-blue"},{default:i(()=>[l("優惠特報")]),_:1})]),t("li",S,e(s.coupon.title),1)])]),t("div",V,[t("div",B,[t("div",N,[t("img",{src:s.coupon.image,class:"card-img-top",alt:"...",height:"300",style:{"object-fit":"cover"}},null,8,R),t("div",j,[t("span",null,"優惠時間："+e(new Date(s.coupon.startDate).toLocaleDateString()),1),l(" ~ "),t("span",null,e(new Date(s.coupon.dueDate).toLocaleDateString()),1),t("h5",P,e(s.coupon.title),1),t("p",E,e(s.coupon.description),1),t("span",null,"活動優惠碼"+e(s.coupon.code),1)])])])])])}const I=h(L,[["render",F]]);export{I as default};
