import{_ as i,U as r,V as t,W as l,X as d,a0 as e,Y as n,r as _,o as u}from"./_plugin-vue_export-helper-cbb9d8af.js";const{VITE_PATH:p}={VITE_PATH:"http://localhost:3000",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},h={data(){return{coupon:{}}},methods:{getCoupon(){const{id:c}=this.$route.params;this.$http.get(`${p}/coupons/${c}`).then(s=>{console.log(s.data),this.coupon=s.data}).catch(s=>{console.log(s)})}},mounted(){this.getCoupon()}},m={class:"container my-10"},f={"aria-label":"breadcrumb"},g={class:"breadcrumb"},b={class:"breadcrumb-item"},D={class:"breadcrumb-item active","aria-current":"page"},v={class:"d-flex justify-content-center"},x={class:"col-8"},y={class:"card"},E=["src"],V={class:"card-body"},k={class:"card-title h2 text-center"},B={class:"card-text text-truncate"};function L(c,s,S,T,o,C){const a=_("RouterLink");return u(),r("div",m,[t("nav",f,[t("ol",g,[t("li",b,[l(a,{to:"/discounts",class:"link-orange"},{default:d(()=>[n("優惠特報")]),_:1})]),t("li",D,e(o.coupon.title),1)])]),t("div",v,[t("div",x,[t("div",y,[t("img",{src:o.coupon.img,class:"card-img-top",alt:"...",height:"300",style:{"object-fit":"cover"}},null,8,E),t("div",V,[t("span",null,"優惠時間："+e(new Date(o.coupon.startDate).toLocaleDateString()),1),n(" ~ "),t("span",null,e(new Date(o.coupon.dueDate).toLocaleDateString()),1),t("h5",k,e(o.coupon.title),1),t("p",B,e(o.coupon.description),1),t("span",null,"活動優惠碼"+e(o.coupon.code),1)])])])])])}const w=i(h,[["render",L]]);export{w as default};
