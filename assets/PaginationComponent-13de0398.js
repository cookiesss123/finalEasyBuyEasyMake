import{w as d}from"./runtime-dom.esm-bundler-e140de91.js";import{_ as v,o as l,a7 as s,a8 as c,ab as a,N as f,ae as P,af as _,ad as h}from"./_plugin-vue_export-helper-d28549df.js";const u={props:["priceOrRate","filterProducts","filterRecipes","filterOrders"],data(){return{activePage:1,pageProducts:[]}},methods:{renderPage(n,t){console.log(t,t.length,"篩選後的產品");let e=0,g=12;this.$route.fullPath==="/member"&&(g=8),this.activePage=n,n!==1&&n!==Math.ceil(t.length/12)&&this.$route.fullPath!=="/member"?(e=12*(n-1),g=12*n):n===Math.ceil(t.length/12)&&this.$route.fullPath!=="/member"?(e=12*(n-1),g=t.length):n!==1&&n!==Math.ceil(t.length/8)&&this.$route.fullPath==="/member"?(e=8*(n-1),g=8*n):n===Math.ceil(t.length/8)&&this.$route.fullPath==="/member"&&(e=8*(n-1),g=t.length),this.pageProducts=t.slice(e,g),console.log(this.pageProducts,e,g,"分頁好的訂單"),this.$route.fullPath!=="/member"&&window.scrollTo(0,0)},changeOrderPage(n,t){this.renderPage(n,t),window.scrollTo(0,700)}}},x={key:0},k={key:0},y={class:"pagination d-flex justify-content-center align-items-center mt-5"},p={key:0,class:"page-item mx-1"},m=c("i",{class:"bi bi-chevron-left mx-auto"},null,-1),C=[m],O=["onClick"],M={key:1,class:"page-link border-0 rounded-circle px-lg-3 py-lg-2 active",style:{"pointer-events":"none"}},b={key:1,class:"page-item mx-1"},R=c("i",{class:"bi bi-chevron-right mx-auto"},null,-1),w=[R],j={key:1},B={class:"pagination d-flex justify-content-center align-items-center mt-5"},I={key:0,class:"page-item mx-1"},T=c("i",{class:"bi bi-chevron-left mx-auto"},null,-1),V=[T],z=["onClick"],D={key:1,class:"page-link border-0 rounded-circle px-lg-3 py-lg-2 active",style:{"pointer-events":"none"}},E={key:1,class:"page-item mx-1"},F=c("i",{class:"bi bi-chevron-right mx-auto"},null,-1),L=[F],S={key:1},q={class:"pagination d-flex justify-content-center align-items-center mt-5"},A={key:0,class:"page-item mx-1"},G=c("i",{class:"bi bi-chevron-left mx-auto"},null,-1),H=[G],J=["onClick"],K={key:1,class:"page-link border-0 rounded-circle px-lg-3 py-lg-2 active",style:{"pointer-events":"none"}},Q={key:1,class:"page-item mx-1"},U=c("i",{class:"bi bi-chevron-right mx-auto"},null,-1),W=[U];function X(n,t,e,g,r,o){return l(),s("div",null,[r.pageProducts.length&&this.$route.fullPath!=="/member"?(l(),s("div",x,[e.filterProducts&&this.$route.fullPath.includes("/products")?(l(),s("nav",k,[c("ul",y,[r.activePage!==1?(l(),s("li",p,[c("a",{class:"page-link border-0 rounded-circle d-flex",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=d(()=>o.renderPage(r.activePage-1,e.filterProducts),["prevent"])),style:{padding:"8px 12px"}},C)])):a("",!0),(l(!0),s(f,null,P(Math.ceil(e.filterProducts.length/12),i=>(l(),s("li",{class:_(["page-item mx-1",{active:r.activePage===i}]),key:i+23423},[r.activePage!==i?(l(),s("a",{key:0,onClick:d(()=>o.renderPage(i,e.filterProducts),["prevent"]),class:"page-link border-0 rounded-circle px-lg-3 py-lg-2",href:"#"},h(i),9,O)):r.activePage===i?(l(),s("span",M,h(i),1)):a("",!0)],2))),128)),r.activePage!==Math.ceil(e.filterProducts.length/12)?(l(),s("li",b,[c("a",{onClick:t[1]||(t[1]=d(()=>o.renderPage(r.activePage+1,e.filterProducts),["prevent"])),class:"page-link border-0 rounded-circle d-flex",href:"#","aria-label":"Next",style:{padding:"8px 12px"}},w)])):a("",!0)])])):e.filterRecipes&&this.$route.fullPath.includes("/recipes")?(l(),s("nav",j,[c("ul",B,[r.activePage!==1?(l(),s("li",I,[c("a",{class:"page-link border-0 rounded-circle d-flex",href:"#","aria-label":"Previous",onClick:t[2]||(t[2]=d(()=>o.renderPage(r.activePage-1,e.filterRecipes),["prevent"])),style:{padding:"8px 12px"}},V)])):a("",!0),(l(!0),s(f,null,P(Math.ceil(e.filterRecipes.length/12),i=>(l(),s("li",{class:_(["page-item mx-1",{active:r.activePage===i}]),key:i+23423},[r.activePage!==i?(l(),s("a",{key:0,onClick:d(()=>o.renderPage(i,e.filterRecipes),["prevent"]),class:"page-link border-0 rounded-circle px-lg-3 py-lg-2",href:"#"},h(i),9,z)):r.activePage===i?(l(),s("span",D,h(i),1)):a("",!0)],2))),128)),r.activePage!==Math.ceil(e.filterRecipes.length/12)?(l(),s("li",E,[c("a",{onClick:t[3]||(t[3]=d(()=>o.renderPage(r.activePage+1,e.filterRecipes),["prevent"])),class:"page-link border-0 rounded-circle d-flex",href:"#","aria-label":"Next",style:{padding:"8px 12px"}},L)])):a("",!0)])])):a("",!0)])):this.$route.fullPath==="/member"&&e.filterOrders.length?(l(),s("nav",S,[c("ul",q,[r.activePage!==1?(l(),s("li",A,[c("a",{class:"page-link border-0 rounded-circle d-flex",href:"#","aria-label":"Previous",onClick:t[4]||(t[4]=d(()=>o.changeOrderPage(r.activePage-1,e.filterOrders),["prevent"])),style:{padding:"8px 12px"}},H)])):a("",!0),(l(!0),s(f,null,P(Math.ceil(e.filterOrders.length/8),i=>(l(),s("li",{class:_(["page-item mx-1",{active:r.activePage===i}]),key:i+23423},[r.activePage!==i?(l(),s("a",{key:0,onClick:d(()=>o.changeOrderPage(i,e.filterOrders),["prevent"]),class:"page-link border-0 rounded-circle px-lg-3 py-lg-2",href:"#"},h(i),9,J)):r.activePage===i?(l(),s("span",K,h(i),1)):a("",!0)],2))),128)),r.activePage!==Math.ceil(e.filterOrders.length/8)?(l(),s("li",Q,[c("a",{onClick:t[5]||(t[5]=d(()=>o.changeOrderPage(r.activePage+1,e.filterOrders),["prevent"])),class:"page-link border-0 rounded-circle d-flex",href:"#","aria-label":"Next",style:{padding:"8px 12px"}},W)])):a("",!0)])])):a("",!0)])}const N=v(u,[["render",X]]);export{N as P};