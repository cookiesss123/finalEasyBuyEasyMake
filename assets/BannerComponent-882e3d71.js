import{c as t}from"./publicData-f4e8600e.js";import{b6 as a,aj as r,l as o,m as e,a5 as l,aJ as n}from"./_plugin-vue_export-helper-68081c38.js";const c={data(){return{banners:t}},computed:{title(){return t[this.$route.fullPath.split("?")[0]].title},bgImg(){return t[this.$route.fullPath.split("?")[0]].img}}},i={class:"text-center","data-aos":"fade-up"},p={class:"text-purple mb-0 fs-lg-1 fs-5 letter-spacing-20 ps-1 fw-bold bg-secondary-light-purple-horizontal py-2"},u={class:"ms-3"};function d(m,g,_,f,h,s){return r(),o("section",i,[e("div",{class:"py-lg-200 py-96 bg-cover-center border",style:l({"background-image":`url(${s.bgImg})`})},null,4),e("h2",p,[e("span",u,n(s.title),1)])])}const x=a(c,[["render",d]]);export{x as B};
