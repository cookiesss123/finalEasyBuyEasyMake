import{m as N}from"./index-655038ef.js";import{c as z}from"./carts-11f88437.js";import{L as C}from"./LoadingModal-16ab9486.js";import{n as R}from"./numberCommaMixin-e0aac39c.js";import{r as a,o as b,c as L,u as p,d as u,s as M,b as E}from"./db-64e704f5.js";import{_ as B,U as l,W as v,V as t,a4 as f,a1 as g,a2 as _,a0 as c,Z as w,Y as y,a5 as T,o as d,X as D,r as P}from"./_plugin-vue_export-helper-03b40388.js";import"./vue-router-2c21c692.js";import"./_commonjsHelpers-042e6b4d.js";import"./modal-5929133b.js";import"./loadingLogo-3bb466c0.js";const S={components:{LoadingModal:C},mixins:[R],data(){return{coupons:{},lottery:{},lotteryResult:{},drewProducts:[],drewArr:[],user:{},uid:"",getPrize:{},tabName:"優惠折扣",articles:[]}},methods:{...N(z,["checkLogin","toastMessage"]),getCoupons(){const s=a(u,"coupons/");b(s,o=>{this.coupons=o.val(),console.log(this.coupons,"折價券")})},getLottery(){const s=a(u,"lotteries/");b(s,o=>{let n=o.val();n=Object.entries(n).map(r=>(r[1].id=r[0],r[1])),this.lottery=Object.values(n).filter(r=>r.isEnabled===!0),this.lottery=this.lottery[0],this.lottery.recipes.forEach(r=>{this.drewProducts[r.title]||(this.drewProducts[r.title]=[]),r.relativeProducts.forEach(e=>{e.category!=="組合包"&&(e.recipeName=`抽獎食譜${r.title}`,this.drewProducts[r.title].push(e))})}),this.drewProducts=Object.entries(this.drewProducts),console.log(this.drewProducts,this.lottery.prizes,"抽獎標的")})},getLotteryResult(){L(E,s=>{if(s){this.uid=s.uid,console.log(this.uid,"使用者已登入取得 uid");const o=a(u,"users/"+s.uid);b(o,n=>{this.user=n.val(),console.log(this.user,"使用者資料");const r=a(u,`lotteryResults/${this.uid}`);b(r,e=>{this.lotteryResult=e.val(),this.lotteryResult?(this.drewArr=this.lotteryResult.drewArr,this.getPrize=this.lotteryResult.getPrize):(this.drewArr=[],this.getPrize={})})})}else console.log("並未登入"),this.uid=null,this.user={},this.drewArr=[],this.getPrize={}})},addtLotteryResult(){if(!this.uid){this.toastMessage("登入即可抽獎","error");return}if(this.user.lotteryTicket===0){this.$swal({icon:"error",title:"您沒有抽獎券了",html:'<p>單筆金額滿  <b>NT$2,000</b> 即可獲得一張抽獎券</p><p>單筆金額滿  <b>NT$5,000</b> 即可獲得三張抽獎券</p><p>單筆金額滿  <b>NT$10,000</b> 即可獲得七張抽獎券</p><a href="/finalEasyMakeEasyBuy/#/products" class="link-red">前往選購商品</a>',showConfirmButton:!0});return}p(a(u),{[`users/${this.uid}/lotteryTicket/`]:this.user.lotteryTicket-1});const s=Math.floor(Math.random()*this.drewProducts.length),o=Math.floor(Math.random()*this.drewProducts[s][1].length);if(console.log(this.drewProducts,s,o,"抽獎資料"),this.drewArr.length){if(this.drewArr.length){this.drewProducts.forEach((r,e)=>{this.drewArr[e][1]||(this.drewArr[e][1]=[])});let n=!1;if(this.drewArr[s][1]&&this.drewArr[s][1].forEach(r=>{r.title===this.drewProducts[s][1][o].title&&(n=!0,console.log(this.drewProducts[s][0],r.title,"這個重複了"))}),console.log(n,"有重複嗎"),n)this.$swal({title:"抽到重複的東西囉~ 非常sorry",iconHtml:'<img src="https://images.unsplash.com/photo-1606823616058-541d59dadcb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80">',customClass:{icon:"no-border"},showConfirmButton:!1});else if(!n){this.drewArr[s][1].push(this.drewProducts[s][1][o]),this.$swal({title:`恭喜您抽中 ${this.drewProducts[s][1][o].title}`,iconHtml:`<img src="${this.drewProducts[s][1][o].imgUrl}" width="100">`,customClass:{icon:"no-border"},showConfirmButton:!1}),p(a(u),{[`lotteryResults/${this.uid}/drewArr/`]:this.drewArr});let r="";if(!this.drewArr[0][1]||!this.drewArr[1][1]||!this.drewArr[2][1]){console.log("不用看了沒中獎");return}this.drewArr[0][1].length===this.drewProducts[0][1].length&&this.drewArr[1][1].length===this.drewProducts[1][1].length&&this.drewArr[2][1].length===this.drewProducts[2][1].length?r=0:this.drewArr[0][1].length===this.drewProducts[0][1].length&&this.drewArr[1][1].length===this.drewProducts[1][1].length||this.drewArr[2][1].length===this.drewProducts[2][1].length&&this.drewArr[0][1].length===this.drewProducts[0][1].length||this.drewArr[2][1].length===this.drewProducts[2][1].length&&this.drewArr[1][1].length===this.drewProducts[1][1].length?r=1:(this.drewArr[0][1].length===this.drewProducts[0][1].length||this.drewArr[1][1].length===this.drewProducts[1][1].length||this.drewArr[2][1].length===this.drewProducts[2][1].length)&&(r=2),(r||r===0)&&p(a(u),{[`lotteryResults/${this.uid}/getPrize/`]:this.lottery.prizes[r]})}}}else{this.drewProducts.forEach((r,e)=>{this.drewArr[e]=[r[0],[]]}),this.drewArr[s][1].push(this.drewProducts[s][1][o]),console.log(this.drewArr,s,this.drewArr[s][0],"放入什麼"),this.$swal({title:`恭喜您抽中 ${this.drewProducts[s][1][o].title}`,iconHtml:`<img src="${this.drewProducts[s][1][o].imgUrl}" width="100">`,customClass:{icon:"no-border"},showConfirmButton:!1});const n=a(u,`lotteryResults/${this.uid}`);M(n,{drewArr:this.drewArr,getPrize:{}}),console.log("首次抽獎")}}},mounted(){this.$route.query.tabName&&(this.tabName=this.$route.query.tabName),this.getCoupons(),this.getLottery(),this.getLotteryResult()},computed:{},watch:{}},j={class:"container my-10"},V={class:"nav nav-tabs"},O={key:0,class:"text-red"},q=t("h3",{class:"text-center py-3 py-lg-5 fw-bold bg-lightYellow mt-3"},"本月優惠",-1),H={class:"row row-cols-lg-4 g-4 py-3 text-darkBrown"},F={class:"card"},U={class:"enlargeImg w-100 rounded"},Y={class:"cardImg"},I=["src"],G={class:"card-body"},W={class:"card-title h3"},J={class:"card-text text-truncate"},X={class:"d-flex"},Z={key:1},K={class:"py-3 text-darkBrown d-flex flex-column"},Q={class:""},$={key:1,class:"col-lg-12 align-self-center"},tt=t("p",{class:"mb-0"},"本月指定抽獎食譜：",-1),et={class:"row row-cols-lg-3 row-cols-1 pt-4"},st={class:"text-center fw-bold my-3"},rt={class:"row"},ot=["src"],it={key:0,class:"position-absolute bg-notObtained d-flex"},lt=t("i",{class:"bi bi-question-lg text-white fs-1 m-auto"},null,-1),dt=[lt],ct={class:"d-flex"},nt=t("p",{class:"text-end"},"抽一次消耗一張抽獎券",-1),ht={key:2,class:"d-flex flex-column align-items-center"},at={class:"h3 text-center text-red fw-bold"},ut={class:"col-lg-6 col-12"},gt={class:"card position-relative border-0",style:{"border-radius":"20px"}},wt={class:"card-header h4 fw-bold text-center mb-3 bg-white border-0"},mt=["src"],_t={class:"card-footer bg-transparent border-0"},bt={class:"fw-bold"},pt={class:"text-end"},ft=t("p",null,[y("本店會透過信箱與您聯絡獎品寄送時間，請時刻關注信件，並請留下電話、地址到@EasyMakeEasyBuy.gmail.com，感謝您的支持!"),t("br"),y("下期好禮更精彩，千萬別錯過!")],-1),yt={class:"my-10"},xt=T('<div class="container"><h2 class="display-6 fw-bold d-flex align-items-center mb-4 d-flex flex-lg-row align-items-center mb-4"><div class="d-flex align-items-center"><div class="d-lg-block d-none me-4 rounded-circle text-center pt-2 position-relative" style="background-color:#FAE8D0;width:64px;height:64px;vertical-align:middle;font-size:45px;"> 本 <div class="position-absolute" style="background-color:#F5AE4C;width:25px;height:5px;top:41px;right:20px;"></div></div><div class="d-lg-none me-2 rounded-circle text-center pt-1 position-relative" style="background-color:#FAE8D0;width:36px;height:36px;font-size:24px;"> 本 <div class="position-absolute" style="background-color:#F5AE4C;width:12px;height:3px;top:21px;right:12px;"></div></div><span class="recipeTitle">月獎品一覽</span></div></h2></div>',1),vt={class:"container"},Pt={class:"prizes row row-cols-lg-3 row-cols-1 gy-4"},At={class:"card position-relative border-0",style:{"border-radius":"20px"}},kt={class:"card-header border-0 h4 fw-bold text-center mb-3 bg-white"},Nt=t("div",{class:"questionMark position-absolute d-flex bg-lightYellow",style:{top:"60px",width:"100%",height:"220px","border-radius":"20px",background:"linear-gradient(45deg, rgb(252, 179, 78) 20%, rgb(253,164,72), rgb(255,113,75) 90% )"}},[t("i",{class:"bi bi-question-lg mx-auto text-white",style:{"font-size":"150px"}})],-1),zt=["src"],Ct={class:"card-footer bg-transparent border-0"},Rt={class:"fw-bold"},Lt={class:"text-end"},Mt=t("h5",null,"規則：",-1);function Et(s,o,n,r,e,x){const A=P("LoadingModal"),k=P("RouterLink");return d(),l("div",j,[v(A,{ref:"loadingModal"},null,512),t("ul",V,[t("li",{class:"nav-item",onClick:o[0]||(o[0]=()=>e.tabName="優惠折扣")},[t("button",{class:f(["nav-link",{active:e.tabName==="優惠折扣","link-red":e.tabName==="優惠折扣"}]),type:"button"},"優惠折扣",2)]),t("li",{class:"nav-item",onClick:o[1]||(o[1]=()=>e.tabName="抽獎回饋")},[t("button",{class:f(["nav-link",{active:e.tabName==="抽獎回饋","link-red":e.tabName==="抽獎回饋"}]),type:"button"},"抽獎回饋",2)])]),e.tabName==="優惠折扣"?(d(),l("section",O,[q,t("div",H,[(d(!0),l(g,null,_(e.coupons,(i,h)=>(d(),l("div",{class:"col",key:h},[t("div",F,[t("div",U,[t("div",Y,[t("img",{src:i.image,class:"card-img-top",alt:"...",height:"200",style:{"object-fit":"cover"}},null,8,I)]),t("div",G,[t("h5",W,c(i.title),1),t("p",J,c(i.description),1),t("div",X,[v(k,{to:`/discounts/${h}`,href:"#",class:"stretched-link btn btn-red ms-auto"},{default:D(()=>[y("查看完整優惠資訊")]),_:2},1032,["to"])])])])])]))),128))])])):e.tabName==="抽獎回饋"?(d(),l("section",Z,[t("div",K,[t("p",Q,"活動時間："+c(new Date(e.lottery.startDate).toLocaleDateString().split(" ")[0])+" ~ "+c(new Date(e.lottery.dueDate).toLocaleString().split(" ")[0]),1),e.uid?(d(),l("p",{key:0,class:f({"text-danger":e.user.lotteryTicket===0})},"剩餘抽獎券："+c(e.user.lotteryTicket),3)):w("",!0),!e.getPrize||e.getPrize&&e.getPrize.id!==1?(d(),l("div",$,[tt,t("div",et,[(d(!0),l(g,null,_(e.drewProducts,(i,h)=>(d(),l("div",{key:i,class:"border border-red col"},[t("h3",st,c(i[0]),1),t("div",rt,[(d(!0),l(g,null,_(i[1],m=>(d(),l("div",{class:"d-flex flex-column align-items-center position-relative col-4",key:m.id},[m.category==="單一產品"?(d(),l(g,{key:0},[t("img",{src:m.imgUrl,alt:"",height:"100",width:"100",style:{"object-fit":"cover"}},null,8,ot),t("p",null,c(m.title),1),!e.drewArr[h]||!e.drewArr[h][1]||e.drewArr[h]&&e.drewArr[h][1]&&!JSON.stringify(this.drewArr[h][1]).includes(m.title)?(d(),l("div",it,dt)):w("",!0)],64)):w("",!0)]))),128))])]))),128))]),t("div",ct,[t("button",{type:"button",class:"mx-auto mt-3 btn btn-red",onClick:o[2]||(o[2]=(...i)=>x.addtLotteryResult&&x.addtLotteryResult(...i))},"立即抽獎")]),nt])):w("",!0),e.lotteryResult&&this.getPrize&&this.getPrize.id?(d(),l("div",ht,[t("h5",at,"恭喜您完成"+c(e.getPrize.id===1?"全部":e.getPrize.id===2?"2份":"1份")+"食譜，獲得：",1),t("div",ut,[t("div",gt,[t("div",wt,c(e.getPrize.id===1?"大獎":e.getPrize.id===2?"二獎":"三獎"),1),t("img",{src:e.getPrize.img,class:"card-img border",style:{"border-radius":"20px",height:"300px","object-fit":"contain"},alt:""},null,8,mt),t("div",_t,[t("h5",bt,c(e.getPrize.title),1),t("p",pt,"價值：NT$ "+c(s.numberComma(e.getPrize.price)),1)])]),ft])])):w("",!0),t("section",yt,[xt,t("div",vt,[t("div",Pt,[(d(!0),l(g,null,_(e.lottery.prizes,i=>(d(),l("div",{class:"col",key:i.img},[t("div",At,[t("div",kt,c(i.id===1?"大獎":i.id===2?"二獎":"三獎"),1),Nt,t("img",{src:i.img,class:"card-img border bg-white",style:{"border-radius":"20px",height:"220px","object-fit":"contain"},alt:""},null,8,zt),t("div",Ct,[t("h5",Rt,c(i.title),1),t("p",Lt,"價值：NT$ "+c(s.numberComma(i.price)),1)])])]))),128))])])]),Mt,t("ol",null,[(d(!0),l(g,null,_(e.lottery.rules,i=>(d(),l("li",{key:i+20},c(i),1))),128))])])])):w("",!0)])}const Ut=B(S,[["render",Et]]);export{Ut as default};