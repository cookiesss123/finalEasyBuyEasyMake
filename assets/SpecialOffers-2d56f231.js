import{m as z}from"./index-c9654e74.js";import{c as C}from"./carts-48386189.js";import{n as R}from"./numberCommaMixin-e0aac39c.js";import{r as h,b,o as B,u as y,d as u,s as M,a as T}from"./db-143b9a4b.js";import{L as j}from"./index-cef339c7.js";import{w as v}from"./runtime-dom.esm-bundler-05da3382.js";import{_ as S}from"./loadingLogo-3bb466c0.js";import{_ as E,a as D}from"./title4-5b70ded8.js";import{_ as O,a7 as l,F as P,a9 as k,a8 as t,ag as _,N as m,ae as w,ab as g,aa as p,ad as c,ah as V,r as A,o as n}from"./_plugin-vue_export-helper-e5f607bc.js";import"./vue-router-8d0a8096.js";import"./_commonjsHelpers-042e6b4d.js";const q={mixins:[R],data(){return{coupons:{},lottery:{},lotteryResult:{},drewProducts:[],drewArr:[],user:{},uid:"",getPrize:{},tabName:"優惠折扣",articles:[],isLoading:!1,fullPage:!0}},components:{Loading:j},methods:{...z(C,["checkLogin","toastMessage"]),getCoupons(){const s=h(u,"coupons/");b(s,i=>{this.coupons=i.val(),console.log(this.coupons,"折價券"),this.isLoading=!1})},getLottery(){const s=h(u,"lotteries/");b(s,i=>{let d=i.val();d=Object.entries(d).map(r=>(r[1].id=r[0],r[1])),this.lottery=Object.values(d).filter(r=>r.isEnabled===!0),this.lottery=this.lottery[0],this.lottery.recipes.forEach(r=>{this.drewProducts[r.title]||(this.drewProducts[r.title]=[]),r.relativeProducts.forEach(e=>{e.category!=="組合包"&&(e.recipeName=`抽獎食譜${r.title}`,this.drewProducts[r.title].push(e))})}),this.drewProducts=Object.entries(this.drewProducts),console.log(this.drewProducts,this.lottery.prizes,"抽獎標的")})},getLotteryResult(){B(T,s=>{if(s){this.uid=s.uid,console.log(this.uid,"使用者已登入取得 uid");const i=h(u,"users/"+s.uid);b(i,d=>{this.user=d.val(),console.log(this.user,"使用者資料");const r=h(u,`lotteryResults/${this.uid}`);b(r,e=>{this.lotteryResult=e.val(),this.lotteryResult?(this.drewArr=this.lotteryResult.drewArr,this.getPrize=this.lotteryResult.getPrize):(this.drewArr=[],this.getPrize={})})})}else console.log("並未登入"),this.uid=null,this.user={},this.drewArr=[],this.getPrize={}})},addtLotteryResult(){if(!this.uid){this.toastMessage("登入即可抽獎","error");return}if(this.user.lotteryTicket===0){this.$swal({icon:"error",title:"您沒有抽獎券了",html:'<p>單筆金額滿  <b>NT$2,000</b> 即可獲得一張抽獎券</p><p>單筆金額滿  <b>NT$5,000</b> 即可獲得三張抽獎券</p><p>單筆金額滿  <b>NT$10,000</b> 即可獲得七張抽獎券</p><a href="/finalEasyBuyEasyMake/#/products" class="link-red">前往選購商品</a>',showConfirmButton:!0,confirmButtonColor:"#d04740",confirmButtonText:"確定"});return}y(h(u),{[`users/${this.uid}/lotteryTicket/`]:this.user.lotteryTicket-1});const s=Math.floor(Math.random()*this.drewProducts.length),i=Math.floor(Math.random()*this.drewProducts[s][1].length);if(console.log(this.drewProducts,s,i,"抽獎資料"),this.drewArr.length){if(this.drewArr.length){this.drewProducts.forEach((r,e)=>{this.drewArr[e][1]||(this.drewArr[e][1]=[])});let d=!1;if(this.drewArr[s][1]&&this.drewArr[s][1].forEach(r=>{r.title===this.drewProducts[s][1][i].title&&(d=!0,console.log(this.drewProducts[s][0],r.title,"這個重複了"))}),console.log(d,"有重複嗎"),d)this.$swal({title:"抽到重複的東西囉~ 非常sorry",iconHtml:'<img src="https://images.unsplash.com/photo-1606823616058-541d59dadcb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80">',customClass:{icon:"no-border"},showConfirmButton:!1});else if(!d){this.drewArr[s][1].push(this.drewProducts[s][1][i]),this.$swal({title:`恭喜您抽中 ${this.drewProducts[s][1][i].title}`,iconHtml:`<img src="${this.drewProducts[s][1][i].imgUrl}" width="100">`,customClass:{icon:"no-border"},showConfirmButton:!1}),y(h(u),{[`lotteryResults/${this.uid}/drewArr/`]:this.drewArr});let r="";if(!this.drewArr[0][1]||!this.drewArr[1][1]||!this.drewArr[2][1]){console.log("不用看了沒中獎");return}this.drewArr[0][1].length===this.drewProducts[0][1].length&&this.drewArr[1][1].length===this.drewProducts[1][1].length&&this.drewArr[2][1].length===this.drewProducts[2][1].length?r=0:this.drewArr[0][1].length===this.drewProducts[0][1].length&&this.drewArr[1][1].length===this.drewProducts[1][1].length||this.drewArr[2][1].length===this.drewProducts[2][1].length&&this.drewArr[0][1].length===this.drewProducts[0][1].length||this.drewArr[2][1].length===this.drewProducts[2][1].length&&this.drewArr[1][1].length===this.drewProducts[1][1].length?r=1:(this.drewArr[0][1].length===this.drewProducts[0][1].length||this.drewArr[1][1].length===this.drewProducts[1][1].length||this.drewArr[2][1].length===this.drewProducts[2][1].length)&&(r=2),(r||r===0)&&y(h(u),{[`lotteryResults/${this.uid}/getPrize/`]:this.lottery.prizes[r]})}}}else{this.drewProducts.forEach((r,e)=>{this.drewArr[e]=[r[0],[]]}),this.drewArr[s][1].push(this.drewProducts[s][1][i]),console.log(this.drewArr,s,this.drewArr[s][0],"放入什麼"),this.$swal({title:`恭喜您抽中 ${this.drewProducts[s][1][i].title}`,iconHtml:`<img src="${this.drewProducts[s][1][i].imgUrl}" width="100">`,customClass:{icon:"no-border"},showConfirmButton:!1});const d=h(u,`lotteryResults/${this.uid}`);M(d,{drewArr:this.drewArr,getPrize:{}}),console.log("首次抽獎")}}},mounted(){this.isLoading=!0,this.$route.query.tabName&&(this.tabName=this.$route.query.tabName),this.getCoupons(),this.getLottery(),this.getLotteryResult()},computed:{},watch:{}},H={class:""},I=t("div",{class:"d-flex flex-column align-items-center py-10"},[t("img",{src:S,class:"loadingLogo mb-3",style:{width:"150px"},alt:""}),t("h1",{class:"text-center fw-bold text-lightBrown"},[t("span",{class:"me-1 animate-text"},"L"),t("span",{class:"mx-1 animate-text"},"o"),t("span",{class:"mx-1 animate-text"},"a"),t("span",{class:"mx-1 animate-text"},"d"),t("span",{class:"mx-1 animate-text"},"i"),t("span",{class:"mx-1 animate-text"},"n"),t("span",{class:"mx-1 animate-text"},"g"),t("span",{class:"mx-2 animate-text"},"."),t("span",{class:"me-2 animate-text"},"."),t("span",{class:"animate-text"},".")])],-1),U=t("section",{class:"bannerBg"},[t("div",{class:"mask"},[t("div",{class:"text",style:{}}," 優惠特報 ")])],-1),F={class:"container mt-4"},G={class:"categorySelector row gy-4 row-cols-lg-2 row-cols-1 list-unstyled"},J={class:"col d-flex border-end align-items-center justify-content-center"},W=t("i",{class:"bi bi-percent fs-2"},null,-1),Y={class:"col d-flex align-items-center justify-content-center"},K=t("i",{class:"bi bi-gift fs-3"},null,-1),Q={key:0,class:"text-red"},X={class:"container"},Z={key:0,class:"row row-cols-lg-4 g-4 py-3 text-darkBrown"},$={class:"card"},tt={class:"enlargeImg w-100 rounded"},et={class:"cardImg"},st=["src"],rt={class:"card-body"},it={class:"card-title h4 fw-bold"},ot={class:"card-text text-truncate"},lt={class:"d-flex"},nt={key:1},ct={class:"container"},dt={class:"py-3 text-darkBrown d-flex flex-column"},at={class:""},ht=t("i",{class:"bi bi-clock-fill me-1"},null,-1),ut=t("i",{class:"bi bi-ticket-perforated-fill me-1"},null,-1),gt={key:1,class:"col-lg-12 align-self-center"},mt=t("h4",{class:"mb-0 text-center fw-bold"},"本月指定抽獎食譜",-1),ft={class:"row row-cols-lg-3 row-cols-1 pt-4"},_t={class:"text-center fw-bold my-3"},wt={class:"row"},pt=["src"],bt={key:0,class:"position-absolute bg-notObtained d-flex"},yt=t("i",{class:"bi bi-question-lg text-white fs-1 m-auto"},null,-1),xt=[yt],vt={class:"d-flex"},Pt=t("p",{class:"text-end"},"抽一次消耗一張抽獎券",-1),kt={key:2,class:"d-flex flex-column align-items-center"},At={class:"h3 text-center text-red fw-bold"},Nt={class:"col-lg-4 col-12"},Lt={class:"card position-relative",style:{"border-radius":"0px",border:"none !important"}},zt={class:"card-header h4 fw-bold text-center mb-3 bg-white border-0"},Ct=["src"],Rt={class:"card-footer bg-transparent border-0",style:{"background-color":"white !important"}},Bt={class:"fw-bold"},Mt={class:"text-end"},Tt=t("p",null,[p("本店會透過信箱與您聯絡獎品寄送時間，請時刻關注信件，並請留下電話、地址到@EasyMakeEasyBuy.gmail.com，感謝您的支持!"),t("br"),p("下期好禮更精彩，千萬別錯過!")],-1),jt={class:"py-10","data-aos":"zoom-in"},St=V('<div class="container"><h2 class="display-6 fw-bold d-flex align-items-center mb-4 d-flex flex-column-reverse flex-lg-row align-items-center mb-4 justify-content-center justify-content-lg-start"><div class="d-flex align-items-center"><img src="'+E+'" class="me-lg-4 me-2 titleImg" alt=""><span class="recipeTitle">月獎品</span></div><span class="light-red mb-lg-0 mb-2 h6 ms-2 speakerText d-flex align-items-center"><img src="'+D+'" class="speaker" alt=""> 超值大獎一次帶回! </span></h2></div>',1),Et={class:"container"},Dt={class:"prizes row row-cols-lg-3 row-cols-1 gy-4"},Ot={class:"card position-relative",style:{"border-radius":"0",border:"1px transparent solid"}},Vt={class:"card-header border-0 h4 fw-bold text-center mb-3 bg-white"},qt=t("div",{class:"questionMark position-absolute d-flex",style:{top:"60px",width:"100%",height:"220px",background:"linear-gradient(90deg, #ff9a9e ,#fad0c4)"}},[t("i",{class:"bi bi-question-lg mx-auto text-white",style:{"font-size":"150px"}})],-1),Ht=["src"],It={class:"card-footer bg-transparent border-0"},Ut={class:"fw-bold"},Ft={class:"text-end"},Gt=t("h5",null,"規則：",-1);function Jt(s,i,d,r,e,x){const N=A("loading"),L=A("RouterLink");return n(),l("div",H,[P(N,{active:e.isLoading,"onUpdate:active":i[0]||(i[0]=o=>e.isLoading=o),"can-cancel":!1,"is-full-page":e.fullPage,"lock-scroll":!0},{default:k(()=>[I]),_:1},8,["active","is-full-page"]),U,t("section",F,[t("ul",G,[t("li",J,[t("a",{href:"#",onClick:i[1]||(i[1]=v(()=>e.tabName="優惠折扣",["prevent"])),class:_(["text-decoration-none d-flex align-items-center link-secondary",{"fw-bold":e.tabName==="優惠折扣","link-red":e.tabName==="優惠折扣"}])},[W,t("span",{class:_(["fs-4",{dottedStyle:e.tabName==="優惠折扣"}])},"優惠折扣",2)],2)]),t("li",Y,[t("a",{href:"#",onClick:i[2]||(i[2]=v(()=>e.tabName="抽獎回饋",["prevent"])),class:_(["text-decoration-none d-flex align-items-center link-secondary",{"fw-bold":e.tabName==="抽獎回饋","link-red":e.tabName==="抽獎回饋"}])},[K,t("span",{class:_(["fs-4 ms-1",{dottedStyle:e.tabName==="抽獎回饋"}])},"抽獎回饋",2)],2)])])]),e.tabName==="優惠折扣"?(n(),l("section",Q,[t("div",X,[e.isLoading?g("",!0):(n(),l("div",Z,[(n(!0),l(m,null,w(e.coupons,(o,a)=>(n(),l("div",{class:"col hvr-hang",key:a},[t("div",$,[t("div",tt,[t("div",et,[t("img",{src:o.image,class:"card-img-top",alt:"...",height:"200",style:{"object-fit":"cover"}},null,8,st)]),t("div",rt,[t("h5",it,c(o.title),1),t("p",ot,c(o.description),1),t("div",lt,[P(L,{to:`/discounts/${a}`,href:"#",class:"stretched-link btn btn-red ms-auto"},{default:k(()=>[p("查看完整優惠資訊")]),_:2},1032,["to"])])])])])]))),128))]))])])):e.tabName==="抽獎回饋"?(n(),l("section",nt,[t("div",ct,[t("div",dt,[t("p",at,[ht,p("活動時間："+c(new Date(e.lottery.startDate).toLocaleDateString().split(" ")[0])+" ~ "+c(new Date(e.lottery.dueDate).toLocaleString().split(" ")[0]),1)]),e.uid?(n(),l("p",{key:0,class:_({"text-danger":e.user.lotteryTicket===0})},[ut,p("剩餘抽獎券："+c(e.user.lotteryTicket)+"張",1)],2)):g("",!0),!e.getPrize||e.getPrize&&e.getPrize.id!==1?(n(),l("div",gt,[mt,t("div",ft,[(n(!0),l(m,null,w(e.drewProducts,(o,a)=>(n(),l("div",{key:o,class:"border border-red bg-lightPink col"},[t("h4",_t,c(o[0]),1),t("div",wt,[(n(!0),l(m,null,w(o[1],f=>(n(),l("div",{class:"d-flex flex-column align-items-center position-relative col-4",key:f.id},[f.category==="單一產品"?(n(),l(m,{key:0},[t("img",{src:f.imgUrl,alt:"",height:"100",width:"100",style:{"object-fit":"cover"}},null,8,pt),t("p",null,c(f.title),1),!e.drewArr[a]||!e.drewArr[a][1]||e.drewArr[a]&&e.drewArr[a][1]&&!JSON.stringify(this.drewArr[a][1]).includes(f.title)?(n(),l("div",bt,xt)):g("",!0)],64)):g("",!0)]))),128))])]))),128))]),t("div",vt,[t("button",{type:"button",class:"mx-auto mt-3 btn btn-red",onClick:i[3]||(i[3]=(...o)=>x.addtLotteryResult&&x.addtLotteryResult(...o))},"立即抽獎")]),Pt])):g("",!0),e.lotteryResult&&this.getPrize&&this.getPrize.id?(n(),l("div",kt,[t("h5",At,"恭喜您完成"+c(e.getPrize.id===1?"全部":e.getPrize.id===2?"2份":"1份")+"食譜，獲得：",1),t("div",Nt,[t("div",Lt,[t("div",zt,c(e.getPrize.id===1?"大獎":e.getPrize.id===2?"二獎":"三獎"),1),t("img",{src:e.getPrize.img,class:"card-img border",style:{"border-radius":"0px",height:"300px","object-fit":"contain"},alt:""},null,8,Ct),t("div",Rt,[t("h5",Bt,c(e.getPrize.title),1),t("p",Mt,"價值：NT$ "+c(s.numberComma(e.getPrize.price)),1)])]),Tt])])):g("",!0),t("section",jt,[St,t("div",Et,[t("div",Dt,[(n(!0),l(m,null,w(e.lottery.prizes,o=>(n(),l("div",{class:"col",key:o.id,"data-aos":"flip-right"},[t("div",Ot,[t("div",Vt,c(o.id===1?"大獎":o.id===2?"二獎":"三獎"),1),qt,t("img",{src:o.img,class:"card-img border bg-white",style:{height:"220px","object-fit":"contain","border-radius":"0"},alt:""},null,8,Ht),t("div",It,[t("h5",Ut,c(o.title),1),t("p",Ft,"價值：NT$ "+c(s.numberComma(o.price)),1)])])]))),128))])])]),Gt,t("ol",null,[(n(!0),l(m,null,w(e.lottery.rules,o=>(n(),l("li",{key:o+20},c(o),1))),128))])])])])):g("",!0)])}const ie=O(q,[["render",Jt]]);export{ie as default};
