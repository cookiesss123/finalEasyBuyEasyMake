import{b6 as i,l as r,m as t,t as l,b1 as d,aJ as e,s as n,av as u,aj as _}from"./_plugin-vue_export-helper-31c7975b.js";const{VITE_PATH:p}={VITE_PATH:"http://localhost:3000",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},h={data(){return{coupon:{}}},methods:{getCoupon(){const{id:c}=this.$route.params;this.$http.get(`${p}/coupons/${c}`).then(s=>{console.log(s.data),this.coupon=s.data}).catch(s=>{console.log(s)})}},mounted(){this.getCoupon()}},m={class:"container my-10"},f={"aria-label":"breadcrumb"},g={class:"breadcrumb"},b={class:"breadcrumb-item"},v={class:"breadcrumb-item active","aria-current":"page"},D={class:"d-flex justify-content-center"},x={class:"col-8"},y={class:"card"},E=["src"],k={class:"card-body"},V={class:"card-title h2 text-center"},B={class:"card-text text-truncate"};function L(c,s,S,T,o,C){const a=u("RouterLink");return _(),r("div",m,[t("nav",f,[t("ol",g,[t("li",b,[l(a,{to:"/discounts",class:"link-orange"},{default:d(()=>[n("優惠特報")]),_:1})]),t("li",v,e(o.coupon.title),1)])]),t("div",D,[t("div",x,[t("div",y,[t("img",{src:o.coupon.img,class:"card-img-top",alt:"...",height:"300",style:{"object-fit":"cover"}},null,8,E),t("div",k,[t("span",null,"優惠時間："+e(new Date(o.coupon.startDate).toLocaleDateString()),1),n(" ~ "),t("span",null,e(new Date(o.coupon.dueDate).toLocaleDateString()),1),t("h5",V,e(o.coupon.title),1),t("p",B,e(o.coupon.description),1),t("span",null,"活動優惠碼"+e(o.coupon.code),1)])])])])])}const j=i(h,[["render",L]]);export{j as default};
