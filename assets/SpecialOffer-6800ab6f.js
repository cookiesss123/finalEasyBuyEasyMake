import{l as i}from"./loadingStore-3928a1a3.js";import{f as a}from"./index-d4f6f3b7.js";import{r as l,b as d,c as p,d as u}from"./carts-c864b624.js";import{b6 as _,av as m,aj as h,l as f,m as t,t as g,b1 as b,aJ as e,s as x}from"./_plugin-vue_export-helper-68081c38.js";const y={data(){return{coupon:{}}},methods:{...a(i,["startLoading","endLoading"]),...a(p,["goToTop"]),getCoupon(){const{id:s}=this.$route.params,c=l(u,`coupons/${s}`);d(c,n=>{this.coupon=n.val(),this.endLoading()})}},mounted(){this.startLoading(),this.goToTop(),this.getCoupon()}},v={class:"container py-md-96 py-60"},w={"aria-label":"breadcrumb"},L={class:"breadcrumb"},D={class:"breadcrumb-item"},S={class:"breadcrumb-item active","aria-current":"page"},k={class:"d-flex justify-content-center py-lg-5"},T={class:"col-lg-8 col-12"},C={class:"fs-lg-2 fs-3 text-center fw-bold letter-spacing-5-sm-0 bg-primary-purple text-white py-2"},V=["src","alt","title"],j={class:"table my-4"},B=t("th",{class:"fw-normal text-muted",width:"150"},"優惠時間",-1),N={class:"fw-normal"},R=t("td",{class:"text-muted"},"活動優惠碼",-1),A={class:"card-text text-indent-2 lh-lg"},E=t("p",{class:"text-muted"}," *此優惠不可與其他優惠同時使用",-1);function J(s,c,n,O,o,P){const r=m("RouterLink");return h(),f("div",v,[t("nav",w,[t("ol",L,[t("li",D,[g(r,{to:"/discounts",class:"link-primary"},{default:b(()=>[x("優惠特報")]),_:1})]),t("li",S,e(o.coupon.title),1)])]),t("div",k,[t("div",T,[t("h2",C,e(o.coupon.title),1),t("img",{src:o.coupon.image,class:"w-100 object-fit-cover border-lightPurple border-5 border",alt:o.coupon.title,height:"300",title:o.coupon.title},null,8,V),t("table",j,[t("thead",null,[t("tr",null,[B,t("th",N,e(new Date(o.coupon.startDate).toLocaleDateString())+" ~ "+e(new Date(o.coupon.dueDate).toLocaleDateString()),1)])]),t("tbody",null,[t("tr",null,[R,t("td",null,e(o.coupon.code),1)])])]),t("p",A,e(o.coupon.description),1),E])])])}const H=_(y,[["render",J]]);export{H as default};