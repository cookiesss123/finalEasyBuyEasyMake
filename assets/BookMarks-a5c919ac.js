import{m as R,e as U,R as T}from"./index-a9d6be75.js";import{m as V}from"./modalMixin-600ebd7c.js";import{e as Y,r as v,d as _,c as M,o as K,b as B,a as O}from"./carts-810a7b65.js";import{_ as P,o as a,a7 as i,a8 as t,aa as d,ab as b,ad as r,c as S,a9 as p,af as m,N as f,ae as A,F as k,r as C}from"./_plugin-vue_export-helper-d28549df.js";import{n as N}from"./numberCommaMixin-e0aac39c.js";import{L as E}from"./index-2b32f149.js";import{w as L}from"./runtime-dom.esm-bundler-e140de91.js";import{_ as F}from"./loadingLogo-ea15f612.js";import{_ as I,a as D}from"./fruit3-355a36ca.js";import{_ as y}from"./image4-1806383b.js";import{_ as j}from"./icon-cart-796adfb7.js";import"./base-component-7efcaba4.js";const z={data(){return{bookMark:{},deleteId:""}},mixins:[V],props:["id","item","pageStatus","openDeleteModal"],methods:{...R(M,["toastMessage"]),deleteBookmark(){let l="recipeBookmarks";this.pageStatus==="product"&&(l="productBookmarks"),Y(v(_,`${l}/${this.uid}/${this.deleteId}`)),this.toastMessage("已刪除收藏"),this.hide()}},watch:{id(){this.id&&(this.show(),this.bookMark=this.item,this.deleteId=this.id,this.openDeleteModal("",""))}},computed:{...U(M,["uid"])},mounted(){}},H={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},X={class:"modal-dialog modal-dialog-centered"},q={class:"modal-content"},Q=t("div",{class:"modal-header bg-dark"},[t("h5",{class:"modal-title text-white",id:"exampleModalLabel"}," 刪除收藏 "),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),J={class:"modal-body"},G={key:0},Z={key:1},W={class:"text-danger fw-bold"},$={class:"modal-footer"},ss=t("button",{type:"button",class:"btn btn-gray","data-bs-dismiss":"modal"},"關閉",-1);function ts(l,n,w,x,e,u){return a(),i("div",H,[t("div",X,[t("div",q,[Q,t("div",J,[t("p",null,[d("確定要刪除"),this.pageStatus==="recipe"?(a(),i("span",G,"食譜")):this.pageStatus==="product"?(a(),i("span",Z,"產品")):b("",!0),d("收藏 "),t("span",W," 【"+r(this.bookMark.title)+"】 ",1),d(" 嗎? ")])]),t("div",$,[ss,t("button",{type:"button",class:"btn btn-danger",onClick:n[0]||(n[0]=()=>u.deleteBookmark())},"確認刪除")])])])],512)}const es=P(z,[["render",ts]]),os="data:image/png;base64,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",as="data:image/png;base64,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",is="/finalEasyBuyEasyMake/assets/undraw_Appreciation_r2a1-776b7d68.png",ls={components:{RouterLink:T,Loading:E,DeleteBookmarksModal:es},mixins:[N],data(){return{uid:"",bookMarks:[],pageStatus:"recipe",deleteId:"",deleteItem:{},averageRate:[],rates:{},recipeThumbs:[],thumbs:{},isLoading:!1,fullPage:!0}},methods:{...R(M,["addCart","toastMessage","goToTop"]),getBookmarks(l){this.isLoading=!0,K(O,n=>{if(n){this.uid=n.uid;const w=v(_,`${l}/${this.uid}`);B(w,x=>{if(this.bookMarks=x.val(),!this.bookMarks){this.isLoading=!1;return}if(this.bookMarks=Object.values(this.bookMarks),this.pageStatus==="recipe"){const e=v(_,"recipeThumbs");B(e,u=>{const g=u.val();Object.keys(g).forEach(o=>{this.thumbs[o]=g[o].thumbs}),this.bookMarks.forEach((o,c)=>{Object.keys(this.thumbs).forEach(s=>{o.id===s&&(this.bookMarks[c].thumbs=this.thumbs[s])})}),this.bookMarks.forEach((o,c)=>{o.thumbs||(this.bookMarks[c].thumbs=0)}),this.isLoading=!1})}else if(this.pageStatus==="product"){const e=v(_,"productRates/");B(e,u=>{const g=Object.values(u.val());this.rates={},g.forEach(o=>{this.rates[o.productId]?this.rates[o.productId]&&(this.rates[o.productId].scores+=o.score,this.rates[o.productId].ratePeople+=1,this.rates[o.productId].averageRate=Number((this.rates[o.productId].scores/this.rates[o.productId].ratePeople).toFixed(1))):this.rates[o.productId]={scores:o.score,ratePeople:1,averageRate:o.score/1}}),this.bookMarks.forEach((o,c)=>{if(!this.rates[o.id]){this.bookMarks[c].scores=0,this.bookMarks[c].ratePeople=0,this.bookMarks[c].averageRate=0;return}this.bookMarks[c].scores=this.rates[o.id].scores,this.bookMarks[c].ratePeople=this.rates[o.id].ratePeople,this.bookMarks[c].averageRate=this.rates[o.id].averageRate}),this.isLoading=!1})}})}else this.uid=null,this.uid||(this.isLoading=!1,this.toastMessage("登入才可使用收藏功能","error"),this.$router.push("/loginSignup"))})},openDeleteModal(l,n){this.deleteId=l,this.deleteItem=n}},mounted(){this.goToTop(),this.getBookmarks("recipeBookmarks")},watch:{pageStatus(){this.pageStatus==="product"?this.getBookmarks("productBookmarks"):this.pageStatus==="recipe"&&this.getBookmarks("recipeBookmarks")}}},rs={class:"no-scroll-x"},ns=t("div",{class:"d-flex flex-column align-items-center py-96"},[t("img",{src:F,class:"loading-logo mb-3",alt:"logo"}),t("p",{class:"text-center fw-bold text-purple fs-md-2 fs-5"},[t("span",{class:"me-1 animate-text"},"L"),t("span",{class:"mx-1 animate-text"},"o"),t("span",{class:"mx-1 animate-text"},"a"),t("span",{class:"mx-1 animate-text"},"d"),t("span",{class:"mx-1 animate-text"},"i"),t("span",{class:"mx-1 animate-text"},"n"),t("span",{class:"mx-1 animate-text"},"g"),t("span",{class:"mx-2 animate-text"},"."),t("span",{class:"me-2 animate-text"},"."),t("span",{class:"animate-text"},".")])],-1),ds=t("section",{class:"text-center"},[t("div",{class:"py-lg-200 py-96 bg-cover-center",style:{"background-image":"url('https://images.unsplash.com/photo-1681923615775-d84f619b8e6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"}}),t("h2",{class:"bg-secondary-light-purple-horizontal text-purple mb-0 fs-lg-1 fs-5 letter-spacing-20 fw-bold py-2"},[t("span",{class:"ms-3"},"我的收藏")])],-1),cs={class:"container py-5"},ms={class:"pt-lg-4 pt-3 position-relative"},bs={class:"category-selector row row-cols-2 list-unstyled border-bottom"},us={key:0,class:"bookmark-img1 d-block mx-auto",src:os,alt:"食譜收藏灰色圖示"},ps={key:1,src:as,class:"d-block mx-auto",alt:"食譜收藏藍色圖示"},gs=t("span",{class:"fs-12 fs-md-5 d-block py-2"},"食譜收藏",-1),hs={key:0,class:"bookmark-img2 d-block mx-auto",src:I,alt:"材料收藏灰色圖示"},ks={key:1,src:D,class:"d-block mx-auto",alt:"材料收藏藍色圖示"},fs=t("span",{class:"fs-12 fs-md-5 d-block py-2"},"材料收藏",-1),As={class:"py-4"},vs={key:0,class:"row row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-4"},_s={class:"card position-relative"},ys=["src","alt"],ws={class:"badge rounded-pill bg-primary position-absolute start-0 bottom-0 m-3"},xs=t("p",{class:"detail position-absolute top-50 start-50 translate-middle fw-bold letter-spacing-5 link-darkBrown fs-xl-5 text-center"},[d("查看"),t("br",{class:"d-xl-none d-lg-block"}),d("詳細食譜")],-1),Bs=["onClick"],Ss=t("img",{src:y,alt:"收藏按鈕-未收藏"},null,-1),Cs=[Ss],Ms=["onClick"],Ls=t("img",{src:y,alt:"收藏按鈕-已收藏"},null,-1),Rs=[Ls],Ps={class:"fw-bold fs-md-5 fs-6"},Us={class:"d-flex align-items-center flex-wrap fs-md-6 fs-12"},Ts=t("i",{class:"bi bi-hand-thumbs-up-fill"},null,-1),Vs={key:1,class:"row row-cols-xl-4 row-cols-lg-3 row-cols-2 gy-4"},Ys={class:"card position-relative"},Ks={class:"card-img-hover position-relative"},Os=["src","alt"],Ns=t("p",{class:"detail position-absolute top-50 start-50 translate-middle fw-bold letter-spacing-5 link-darkBrown fs-xl-5 text-center"},[d("查看"),t("br",{class:"d-xl-none d-lg-block"}),d("商品資訊")],-1),Es={key:0,class:"fs-md-14 fs-12 text-white p-2 bg-primary position-absolute top-0 start-0"},Fs=["onClick"],Is=t("img",{src:y,alt:"收藏按鈕-未收藏"},null,-1),Ds=[Is],js=["onClick"],zs=t("img",{src:y,alt:"收藏按鈕-已收藏"},null,-1),Hs=[zs],Xs=["disabled","onClick"],qs=t("img",{src:j,alt:"購物車按鈕",class:"shadow-sm"},null,-1),Qs=[qs],Js={class:"fs-md-5 fs-6 fw-bold"},Gs={class:"d-flex align-items-lg-center fs-md-6 fs-12"},Zs=t("i",{class:"bi bi-star-fill"},null,-1),Ws={class:"text-end mt-1 d-md-none fs-12"},$s=t("i",{class:"bi bi-star-fill"},null,-1),st={key:2,class:"py-lg-4 text-center"},tt=t("img",{src:is,class:"mb-lg-3 mb-2 img-md-200-sm-150",alt:"收藏大圖示"},null,-1),et={class:"fs-lg-3 fs-6 mb-lg-3 mb-2"},ot={key:0},at={key:1};function it(l,n,w,x,e,u){const g=C("loading"),o=C("RouterLink"),c=C("DeleteBookmarksModal");return a(),i("div",rs,[e.uid?(a(),S(g,{key:0,active:e.isLoading,"onUpdate:active":n[0]||(n[0]=s=>e.isLoading=s),"can-cancel":!1,"is-full-page":e.fullPage,"lock-scroll":!0},{default:p(()=>[ns]),_:1},8,["active","is-full-page"])):b("",!0),ds,t("section",cs,[t("div",ms,[t("ul",bs,[t("li",{class:m(["col text-center",{"pointer-events-none":e.pageStatus==="recipe"}])},[t("a",{href:"#",onClick:n[1]||(n[1]=L(()=>e.pageStatus="recipe",["prevent"])),class:m(["text-decoration-none d-inline-block",{"fw-bold":e.pageStatus==="recipe","link-primary":e.pageStatus==="recipe"}])},[e.pageStatus!=="recipe"?(a(),i("img",us)):e.pageStatus==="recipe"?(a(),i("img",ps)):b("",!0),gs],2)],2),t("li",{class:m(["col text-center",{"pointer-events-none":e.pageStatus==="product"}])},[t("a",{href:"#",onClick:n[2]||(n[2]=L(()=>e.pageStatus="product",["prevent"])),class:m(["text-decoration-none d-inline-block",{"fw-bold":e.pageStatus==="product","link-primary":e.pageStatus==="product"}])},[e.pageStatus!=="product"?(a(),i("img",hs)):e.pageStatus==="product"?(a(),i("img",ks)):b("",!0),fs],2)],2)]),t("div",{class:m(["blue-line bg-primary position-absolute",{"active-recipes":e.pageStatus==="recipe","active-products":e.pageStatus==="product"}])},null,2)]),t("div",As,[e.pageStatus==="recipe"&&e.bookMarks&&!e.isLoading?(a(),i("div",vs,[(a(!0),i(f,null,A(e.bookMarks,s=>(a(),i("div",{class:"col",key:s.id},[t("div",_s,[k(o,{to:`/recipes/${s.id}`,class:"card-img-hover position-relative"},{default:p(()=>[t("img",{src:s.image,class:"object-fit-cover card-img",alt:s.title},null,8,ys),t("span",ws,r(s.category),1),xs]),_:2},1032,["to"]),t("button",{type:"button",class:"position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-2 m-md-3",onClick:()=>u.openDeleteModal(s.id,s)},Cs,8,Bs),(a(!0),i(f,null,A(e.bookMarks,h=>(a(),i("div",{key:h+4567},[h===s.id?(a(),i("button",{key:0,type:"button",class:"btn-buy border-0 bg-transparent m-2 m-md-3 p-0 position-absolute end-0 bottom-0",onClick:()=>l.deleteBookmark(s.id)},Rs,8,Ms)):b("",!0)]))),128)),k(o,{to:`/recipes/${s.id}`,class:"card-body px-0 text-decoration-none link-darkBrown"},{default:p(()=>[t("h3",Ps,r(s.title),1),t("div",Us,[s.total?(a(),i("del",{key:0,class:m(["me-2 text-muted",{"d-none":s.price===s.total}])},"NT$ "+r(l.numberComma(s.total)),3)):b("",!0),t("span",{class:m(["me-1",{"text-danger":s.price!==s.total,"fw-bold":s.price!==s.total}])},"NT$ "+r(l.numberComma(s.price)),3),t("span",null," / "+r(s.content),1),t("span",{class:m(["badge rounded-pill ms-auto border mt-1 mt-md-0",{"border-primary":s.thumbs!==0,"border-gray":s.thumbs===0,"text-primary":s.thumbs!==0,"text-gray":s.thumbs===0,"bg-secondary":s.thumbs!==0,"bg-whiteGray":s.thumbs===0}])},[d(r(s.thumbs)+" ",1),Ts],2)])]),_:2},1032,["to"])])]))),128))])):e.pageStatus==="product"&&e.bookMarks&&!e.isLoading?(a(),i("div",Vs,[(a(!0),i(f,null,A(e.bookMarks,s=>(a(),i("div",{class:"col",key:s.id},[t("div",Ys,[t("div",Ks,[k(o,{to:`/products/${s.id}`},{default:p(()=>[t("img",{src:s.imgUrl,class:"object-fit-cover card-img",alt:s.title},null,8,Os),Ns,s.isCheaper?(a(),i("span",Es,r((100-((s.originalPrice-s.price)/s.originalPrice*100).toFixed(0))%10===0?(100-((s.originalPrice-s.price)/s.originalPrice*100).toFixed(0)).toString().charAt(0):100-((s.originalPrice-s.price)/s.originalPrice*100).toFixed(0))+" 折 ",1)):b("",!0)]),_:2},1032,["to"]),t("button",{type:"button",class:"position-absolute btn-bookmark border-0 bg-transparent top-0 end-0 m-2 m-md-3",onClick:()=>u.openDeleteModal(s.id,s)},Ds,8,Fs),(a(!0),i(f,null,A(e.bookMarks,h=>(a(),i("div",{key:h},[h===s.id?(a(),i("button",{key:0,type:"button",class:"position-absolute btn-bookmark-delete border-0 bg-transparent top-0 end-0 m-2 m-md-3",onClick:()=>l.deleteBookmark(s.id)},Hs,8,js)):b("",!0)]))),128)),t("button",{disabled:e.isLoading==="loading",onClick:()=>l.addCart(s),type:"button",class:"btn-buy border-0 bg-transparent m-2 m-md-3 p-0 position-absolute end-0 bottom-0"},Qs,8,Xs)]),k(o,{to:`/products/${s.id}`,class:"card-body px-0 text-decoration-none link-darkBrown"},{default:p(()=>[t("h3",Js,r(s.title),1),t("div",Gs,[t("del",{class:m(["me-2 text-muted",{"d-none":!s.isCheaper}])},"NT$ "+r(l.numberComma(s.originalPrice)),3),t("span",{class:m(["me-1",{"text-danger":s.isCheaper,"fw-bold":s.isCheaper}])},"NT$ "+r(l.numberComma(s.price)),3),t("span",null," / "+r(s.num)+r(s.unit),1),t("span",{class:m(["badge rounded-pill ms-auto border d-none d-md-block",{"text-yellow":s.averageRate,"border-yellow":s.averageRate,"bg-lightYellow":s.averageRate,"bg-whiteGray":!s.averageRate,"text-gray":!s.averageRate,"border-gray":!s.averageRate}])},[d(r(s.averageRate)+" ",1),Zs],2)]),t("div",Ws,[t("span",{class:m(["badge rounded-pill ms-auto border d-md-none",{"text-yellow":s.averageRate,"border-yellow":s.averageRate,"bg-lightYellow":s.averageRate,"bg-whiteGray":!s.averageRate,"text-gray":!s.averageRate,"border-gray":!s.averageRate}])},[d(r(s.averageRate)+" ",1),$s],2)])]),_:2},1032,["to"])])]))),128))])):b("",!0),!e.isLoading&&!e.bookMarks?(a(),i("div",st,[tt,t("p",et,[d("您尚無任何"),e.pageStatus==="recipe"?(a(),i("span",ot,"食譜")):e.pageStatus==="product"?(a(),i("span",at,"材料")):b("",!0),d("收藏")]),e.pageStatus==="recipe"?(a(),S(o,{key:0,to:"/recipes",class:"link-primary fs-lg-5"},{default:p(()=>[d("前往瀏覽食譜")]),_:1})):e.pageStatus==="product"?(a(),S(o,{key:1,to:"/products",class:"link-primary fs-lg-5"},{default:p(()=>[d("前往瀏覽食譜材料")]),_:1})):b("",!0)])):b("",!0)])]),k(c,{id:e.deleteId,item:e.deleteItem,"page-status":e.pageStatus,"open-delete-modal":u.openDeleteModal},null,8,["id","item","page-status","open-delete-modal"])])}const ft=P(ls,[["render",it]]);export{ft as default};
