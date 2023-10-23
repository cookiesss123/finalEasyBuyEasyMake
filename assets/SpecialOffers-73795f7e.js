import{f as B}from"./index-fc788f37.js";import{r as g,b,o as z,u as y,d as f,s as j,c as E,a as M}from"./carts-e36b449b.js";import{n as T}from"./numberCommaMixin-e0aac39c.js";import{L as D}from"./index-22b4ec11.js";import{s as S}from"./publicData-f5d39529.js";import{B as O}from"./BannerComponent-e49de957.js";import{n as k}from"./runtime-dom.esm-bundler-5f84711a.js";import{_ as H}from"./loadingLogo-ea15f612.js";import{_ as V}from"./icon-speaker-fd89918c.js";import{_ as q,r as v,o as i,c as o,a as x,w as A,b as t,F as _,aY as w,aH as u,ao as p,b7 as n,ak as m,an as U}from"./_plugin-vue_export-helper-f96b5234.js";const F="/finalEasyBuyEasyMake/assets/title4-ab3fed47.png",G={mixins:[T],data(){return{selections:S,coupons:{},lottery:{},lotteryResult:{},drewProducts:[],drewArr:[],user:{},uid:"",getPrize:{},tabName:"優惠折扣",articles:[],isLoading:!1,couponIds:[]}},components:{BannerComponent:O,Loading:D},methods:{...B(E,["checkLogin","toastMessage","goToTop"]),getCoupons(){const l=g(f,"coupons/");b(l,a=>{this.coupons=a.val(),Object.values(this.coupons).forEach((d,r)=>{d.id=Object.keys(this.coupons)[r]}),this.coupons=Object.values(this.coupons).filter(d=>d.isEnabled),this.isLoading=!1})},getLottery(){const l=g(f,"lotteries/");b(l,a=>{let d=a.val();d=Object.entries(d).map(r=>(r[1].id=r[0],r[1])),this.lottery=Object.values(d).filter(r=>r.isEnabled===!0),this.lottery=this.lottery[0],this.lottery.recipes.forEach(r=>{this.drewProducts[r.title]||(this.drewProducts[r.title]=[]),r.relativeProducts.forEach(e=>{e.category!=="組合包"&&(e.recipeName=`抽獎食譜${r.title}`,this.drewProducts[r.title].push(e))})}),this.drewProducts=Object.entries(this.drewProducts)})},getLotteryResult(){z(M,l=>{if(l){this.uid=l.uid;const a=g(f,"users/"+l.uid);b(a,d=>{this.user=d.val();const r=g(f,`lotteryResults/${this.uid}`);b(r,e=>{this.lotteryResult=e.val(),this.lotteryResult?(this.drewArr=this.lotteryResult.drewArr,this.getPrize=this.lotteryResult.getPrize):(this.drewArr=[],this.getPrize={})})})}else this.uid=null,this.user={},this.drewArr=[],this.getPrize={}})},addtLotteryResult(){if(!this.uid){this.toastMessage("登入即可抽獎","error");return}if(this.user.lotteryTicket===0){this.$swal({icon:"error",title:"您沒有抽獎券了",html:'<p>單筆金額滿  <b>NT$2,000</b> 即可獲得一張抽獎券</p><p>單筆金額滿  <b>NT$5,000</b> 即可獲得三張抽獎券</p><p>單筆金額滿  <b>NT$10,000</b> 即可獲得七張抽獎券</p><a href="/finalEasyBuyEasyMake/#/products" class="link-primary">前往選購商品</a>',showConfirmButton:!0,confirmButtonColor:"#4572c2",confirmButtonText:"確定"});return}y(g(f),{[`users/${this.uid}/lotteryTicket/`]:this.user.lotteryTicket-1});const l=Math.floor(Math.random()*this.drewProducts.length),a=Math.floor(Math.random()*this.drewProducts[l][1].length);if(this.drewArr.length){if(this.drewArr.length){this.drewProducts.forEach((r,e)=>{this.drewArr[e][1]||(this.drewArr[e][1]=[])});let d=!1;if(this.drewArr[l][1]&&this.drewArr[l][1].forEach(r=>{r.title===this.drewProducts[l][1][a].title&&(d=!0)}),d)this.$swal({title:"抽到重複的東西囉~ 非常sorry",iconHtml:'<img src="https://images.unsplash.com/photo-1606823616058-541d59dadcb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80" alt="非常sorry">',customClass:{icon:"border-0"},showConfirmButton:!1});else if(!d){this.drewArr[l][1].push(this.drewProducts[l][1][a]),this.$swal({title:`恭喜您抽中 ${this.drewProducts[l][1][a].title}`,iconHtml:`<img src="${this.drewProducts[l][1][a].imgUrl}" width="100">`,customClass:{icon:"border-0"},showConfirmButton:!1}),y(g(f),{[`lotteryResults/${this.uid}/drewArr/`]:this.drewArr});let r="";if(!this.drewArr[0][1]||!this.drewArr[1][1]||!this.drewArr[2][1])return;this.drewArr[0][1].length===this.drewProducts[0][1].length&&this.drewArr[1][1].length===this.drewProducts[1][1].length&&this.drewArr[2][1].length===this.drewProducts[2][1].length?r=0:this.drewArr[0][1].length===this.drewProducts[0][1].length&&this.drewArr[1][1].length===this.drewProducts[1][1].length||this.drewArr[2][1].length===this.drewProducts[2][1].length&&this.drewArr[0][1].length===this.drewProducts[0][1].length||this.drewArr[2][1].length===this.drewProducts[2][1].length&&this.drewArr[1][1].length===this.drewProducts[1][1].length?r=1:(this.drewArr[0][1].length===this.drewProducts[0][1].length||this.drewArr[1][1].length===this.drewProducts[1][1].length||this.drewArr[2][1].length===this.drewProducts[2][1].length)&&(r=2),(r||r===0)&&y(g(f),{[`lotteryResults/${this.uid}/getPrize/`]:this.lottery.prizes[r]})}}}else{this.drewProducts.forEach((r,e)=>{this.drewArr[e]=[r[0],[]]}),this.drewArr[l][1].push(this.drewProducts[l][1][a]),this.$swal({title:`恭喜您抽中 ${this.drewProducts[l][1][a].title}`,iconHtml:`<img src="${this.drewProducts[l][1][a].imgUrl}" width="100">`,customClass:{icon:"border-0"},showConfirmButton:!1});const d=g(f,`lotteryResults/${this.uid}`);j(d,{drewArr:this.drewArr,getPrize:{}})}}},mounted(){this.goToTop(),this.isLoading=!0,this.$route.query.tabName&&(this.tabName=this.$route.query.tabName),this.getCoupons(),this.getLottery(),this.getLotteryResult()}},I=t("div",{class:"d-flex flex-column align-items-center py-96"},[t("img",{src:H,class:"loading-logo mb-3",alt:"logo"}),t("p",{class:"text-center fw-bold text-purple fs-md-2 fs-5"},[t("span",{class:"me-1 animate-text"},"L"),t("span",{class:"mx-1 animate-text"},"o"),t("span",{class:"mx-1 animate-text"},"a"),t("span",{class:"mx-1 animate-text"},"d"),t("span",{class:"mx-1 animate-text"},"i"),t("span",{class:"mx-1 animate-text"},"n"),t("span",{class:"mx-1 animate-text"},"g"),t("span",{class:"mx-2 animate-text"},"."),t("span",{class:"me-2 animate-text"},"."),t("span",{class:"animate-text"},".")])],-1),Y={class:"container","data-aos":"fade-up"},J={class:"pt-lg-4 pt-3 position-relative"},W={class:"category-selector row row-cols-2 list-unstyled border-bottom"},K=["onClick"],Q={class:"fs-12 fs-md-5 d-block pb-2"},X={key:0,class:"list-unstyled row row-cols-lg-2 g-3 py-5 text-darkBrown"},Z={class:"card card-coupon mb-3"},$={class:"row g-0"},tt={class:"col-md-4"},et=["src","alt"],st={class:"col-md-8"},rt={class:"card-body h-100 d-flex flex-column"},it={class:"mb-2"},ot={class:"card-title fw-bold"},lt={class:"card-text text-truncate"},ct={class:"text-end mt-auto"},nt={key:1},at=t("i",{class:"bi bi-clock-fill me-1"},null,-1),dt=t("i",{class:"bi bi-ticket-perforated-fill me-1"},null,-1),ht={key:1},ut=t("h4",{class:"mb-0 text-center fw-bold"},"本月指定抽獎食譜",-1),mt={class:"row row-cols-lg-3 row-cols-1 g-3 mt-lg-4 mt-1"},gt={class:"row g-0"},ft={class:"col-md-5"},_t=["src","alt"],wt={class:"col-md-7"},pt={class:"card-body d-flex flex-column justify-content-center align-items-center h-100"},bt={key:1,class:"mb-0"},yt=["src","alt"],vt={key:0,class:"position-absolute bg-trans-dark-8 d-flex"},xt=t("i",{class:"bi bi-question-lg text-white fs-1 m-auto"},null,-1),Pt=[xt],kt={class:"text-center"},At=t("p",{class:"text-end mt-3"},"抽一次消耗一張抽獎券",-1),Nt={key:2,class:"text-center mt-lg-120 mt-5"},Ct={class:"fs-md-3 fs-5 text-white fw-bold bg-primary-purple py-3 mb-0 d-flex align-items-center justify-content-center letter-spacing-5-sm-0"},Lt=t("span",{class:"material-icons-outlined me-md-3 me-2"}," celebration ",-1),Rt=t("span",{class:"material-icons-outlined fs-2"}," arrow_drop_down ",-1),Bt={class:"bg-secondary-light-purple px-3"},zt={class:"col-lg-4 col-12 mx-auto pt-4"},jt={class:"card bg-transparent"},Et={class:"card-header bg-transparent"},Mt={class:"fs-4 fw-bold text-center"},Tt=["src","alt"],Dt={class:"card-footer bg-transparent"},St={class:"fw-bold"},Ot={class:"text-end"},Ht=t("p",{class:"lh-lg pb-5 text-start text-md-center"},[p("本店會透過信箱與您聯絡獎品寄送時間，請時刻關注信件，並請留下電話、地址到 "),t("a",{href:"mailto:@EasyMakeEasyBuy.gmail.com"},"@EasyMakeEasyBuy.gmail.com"),p("，感謝您的支持!"),t("br"),p("下期好禮更精彩，千萬別錯過!")],-1),Vt={class:"py-96","data-aos":"fade-up"},qt=U('<div class="d-lg-flex mb-2"><h2 class="d-flex align-items-center justify-content-center justify-content-lg-start fw-bold"><img src="'+F+'" class="me-lg-3 me-4 img-lg-64-md-36" alt="熱"><span class="fs-lg-1 fs-4 letter-spacing-20">月獎品</span></h2><span class="d-flex align-items-center justify-content-center fs-lg-6 fs-12"><img src="'+V+'" class="me-2" style="width:30px;" alt="大聲公圖示"> 超值大獎一次帶回! </span></div>',1),Ut={class:"row row-cols-lg-3 row-cols-1 gy-4 mb-4"},Ft={class:"card card-prize"},Gt={class:"card-header bg-white"},It={class:"fs-4 fw-bold text-center"},Yt={class:"card-body p-0 position-relative"},Jt=["src","alt"],Wt=t("div",{class:"question-mark position-absolute w-100 text-center top-0 img-lg-220-md-200 bg-gradient-purple"},[t("i",{class:"bi bi-question-lg mx-auto text-white fs-150"})],-1),Kt={class:"card-footer bg-transparent"},Qt={class:"fw-bold"},Xt={class:"text-end"},Zt=t("h3",{class:"fw-bold"},"規則：",-1);function $t(l,a,d,r,e,P){const N=v("loading"),C=v("BannerComponent"),L=v("RouterLink");return i(),o("div",null,[x(N,{active:e.isLoading,"onUpdate:active":a[0]||(a[0]=s=>e.isLoading=s),"lock-scroll":!0},{default:A(()=>[I]),_:1},8,["active"]),x(C),t("section",Y,[t("div",J,[t("ul",W,[(i(!0),o(_,null,w(e.selections.specialOfferCategory,s=>(i(),o("li",{key:s.icon,class:u(["col text-center",{"pointer-events-none":e.tabName===s.title}])},[t("a",{href:"#",onClick:k(()=>e.tabName=s.title,["prevent"]),class:u(["text-decoration-none d-inline-block",{"fw-bold":e.tabName===s.title,"link-primary":e.tabName===s.title}])},[e.tabName!==s.title?(i(),o("i",{key:0,class:u([s.icon,"text-gray"])},null,2)):m("",!0),e.tabName===s.title?(i(),o("i",{key:1,class:u([s.iconSelected,"text-primary"])},null,2)):m("",!0),t("span",Q,n(s.title),1)],10,K)],2))),128))]),t("div",{class:u(["blue-line bg-primary position-absolute",{"active-discount":e.tabName==="優惠折扣","active-gift":e.tabName==="抽獎回饋"}])},null,2)]),e.tabName==="優惠折扣"?(i(),o("ul",X,[(i(!0),o(_,null,w(e.coupons,s=>(i(),o("li",{class:"col hvr-hang",key:s.id},[t("div",Z,[t("div",$,[t("div",tt,[t("img",{src:s.image,class:"w-100 object-fit-cover rounded-start",style:{height:"200px"},alt:s.title},null,8,et)]),t("div",st,[t("div",rt,[t("p",it,n(new Date(s.startDate).toLocaleDateString())+" - "+n(new Date(s.dueDate).toLocaleDateString()),1),t("h4",ot,n(s.title),1),t("p",lt,n(s.description),1),t("div",ct,[x(L,{to:`/discounts/${s.id}`,href:"#",class:"stretched-link btn btn-outline-primary"},{default:A(()=>[p("查看完整優惠資訊")]),_:2},1032,["to"])])])])])])]))),128))])):e.tabName==="抽獎回饋"?(i(),o("div",nt,[t("p",null,[at,p("活動時間："+n(new Date(e.lottery.startDate).toLocaleDateString())+" ~ "+n(new Date(e.lottery.dueDate).toLocaleDateString()),1)]),e.uid?(i(),o("p",{key:0,class:u({"text-danger":e.user.lotteryTicket===0})},[dt,p("剩餘抽獎券："+n(e.user.lotteryTicket)+" 張",1)],2)):m("",!0),!e.getPrize||e.getPrize&&e.getPrize.id!==1?(i(),o("div",ht,[ut,t("div",mt,[(i(!0),o(_,null,w(e.drewProducts,(s,c)=>(i(),o("div",{key:s,class:"col"},[t("div",{class:u(["card border mb-md-3",{"border-primary":c===0||c===2,"border-purple":c===1}])},[t("div",gt,[t("div",ft,[(i(!0),o(_,null,w(e.lottery.recipes,(h,R)=>(i(),o("div",{key:h.id},[R===c?(i(),o("img",{key:0,src:h.image,alt:h.title,class:"w-100 object-fit-cover",style:{height:"150px"}},null,8,_t)):m("",!0)]))),128))]),t("div",wt,[t("div",pt,[t("h5",{class:u(["card-title fw-bold",{"text-primary":c===0||c===2,"text-purple":c===1}])},n(s[0]),3),e.drewArr[c]&&e.drewArr[c][1]?(i(),o("p",{key:0,class:u(["mb-0",{"text-danger":e.drewArr[c][1].length/s[1].length===1}])},"完成度： "+n(Math.round(e.drewArr[c][1].length/s[1].length*100)===0?"0":Math.round(e.drewArr[c][1].length/s[1].length*100))+" %",3)):!e.drewArr[c]||!e.drewArr[c][1]?(i(),o("p",bt,"完成度：0 %")):m("",!0)])])])],2),t("ul",{class:u(["h-80 row row-cols-xl-3 row-cols-lg-2 row-cols-3 pt-3 g-0 list-unstyled",{"bg-secondary":c===0||c===2,"bg-lightPurple":c===1}])},[(i(!0),o(_,null,w(s[1],h=>(i(),o("li",{class:"d-flex flex-column align-items-center position-relative col",key:h.id},[h.category==="單一產品"?(i(),o(_,{key:0},[t("img",{src:h.imgUrl,alt:h.title,height:"100",width:"100",class:"object-fit-cover mb-1"},null,8,yt),t("p",null,n(h.title),1),!e.drewArr[c]||!e.drewArr[c][1]||e.drewArr[c]&&e.drewArr[c][1]&&!JSON.stringify(this.drewArr[c][1]).includes(h.title)?(i(),o("div",vt,Pt)):m("",!0)],64)):m("",!0)]))),128))],2)]))),128))]),t("div",kt,[t("button",{type:"button",class:"hvr-sweep-to-right mt-xl-5 mt-3 btn btn-primary",onClick:a[1]||(a[1]=k((...s)=>P.addtLotteryResult&&P.addtLotteryResult(...s),["prevent"]))},"立即抽獎")]),At])):m("",!0),e.lotteryResult&&this.getPrize&&this.getPrize.id?(i(),o("div",Nt,[t("h5",Ct,[Lt,p("恭喜您完成 "+n(e.getPrize.id===1?"全部":e.getPrize.id===2?"2份":"1份")+"食譜，獲得 ",1),Rt]),t("div",Bt,[t("div",zt,[t("div",jt,[t("div",Et,[t("h3",Mt,n(e.getPrize.id===1?"大獎":e.getPrize.id===2?"二獎":"三獎"),1)]),t("img",{src:e.getPrize.img,class:"card-img img-lg-220-md-200 object-fit-contain border bg-white",alt:e.getPrize.title},null,8,Tt),t("div",Dt,[t("h5",St,n(e.getPrize.title),1),t("p",Ot,"價值：NT$ "+n(l.numberComma(e.getPrize.price)),1)])])]),Ht])])):m("",!0),t("div",Vt,[qt,t("div",Ut,[(i(!0),o(_,null,w(e.lottery.prizes,s=>(i(),o("div",{class:"col",key:s.id,"data-aos":"flip-right"},[t("div",Ft,[t("div",Gt,[t("h3",It,n(s.id===1?"大獎":s.id===2?"二獎":"三獎"),1)]),t("div",Yt,[t("img",{src:s.img,class:"card-img border bg-white object-fit-contain img-lg-220-md-200",alt:s.title},null,8,Jt),Wt]),t("div",Kt,[t("h5",Qt,n(s.title),1),t("p",Xt,"價值：NT$ "+n(l.numberComma(s.price)),1)])])]))),128))]),Zt,t("ol",null,[(i(!0),o(_,null,w(e.lottery.rules,s=>(i(),o("li",{key:s+20},n(s),1))),128))])])])):m("",!0)])])}const de=q(G,[["render",$t]]);export{de as default};
