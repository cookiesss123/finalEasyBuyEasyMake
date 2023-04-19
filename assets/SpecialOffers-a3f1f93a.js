import{m as k,b as z}from"./axios-77a7bf34.js";import{c as w}from"./carts-7b352231.js";import{L as R}from"./LoadingModal-344ca87b.js";import{_ as N,U as i,W as x,V as t,a1 as g,a2 as _,o as r,a0 as c,X as A,Y as f,a4 as P,Z as b,a6 as $,r as v}from"./_plugin-vue_export-helper-cbb9d8af.js";import"./vue-router-1aba70ec.js";import"./_commonjsHelpers-042e6b4d.js";import"./modal-838a1639.js";import"./base-component-5a126788.js";const{VITE_PATH:d}={VITE_PATH:"https://vue-final-dbjson-1aoj4rvyf-cookiesss123.vercel.app",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},L={components:{LoadingModal:R},data(){return{coupons:[],lotteries:[],lotteryResult:[],drewArr:[],drewProducts:[],user:{},getPrizePersonNum:0,ticketNum:0}},methods:{...k(w,["checkLogin","toastMessage"]),getCoupons(){this.$http.get(`${d}/coupons`).then(e=>{console.log("優惠券資訊",e.data),this.coupons=e.data}).catch(e=>{console.log(e)})},getLotteries(){this.$http.get(`${d}/lotteries?_expand=recipe`).then(e=>{console.log("抽獎資訊",e.data),this.lotteries=e.data,this.drewProducts=this.lotteries[0].recipe.relativeProducts.filter(n=>n.category==="單一產品")}).catch(e=>{console.log(e)})},getLotteryResult(){this.$http.get(`${d}/600/users/${this.userId}/lotteryResults`,{headers:{authorization:`Bearer ${this.token}`}}).then(e=>{console.log("個人抽獎結果",e.data),this.lotteryResult=e.data,this.lotteryResult.length&&(this.drewArr=this.lotteryResult[0].drewArr)}).catch(e=>{console.log(e)})},getUserInfo(){this.$http.get(`${d}/600/users/${this.userId}`,{headers:{authorization:`Bearer ${this.token}`}}).then(e=>{this.user=e.data,console.log("使用者資料，抽獎券",e.data)}).catch(e=>{console.log(e)})},addtLotteryResult(){this.$http.get(`${d}/600/users/${this.userId}`,{headers:{authorization:`Bearer ${this.token}`}}).then(e=>{if(console.log("使用者資料",e.data),this.user=e.data,console.log(this.user.lotteryTicket,"張數"),this.user.lotteryTicket===0){this.$swal({icon:"error",title:"您沒有抽獎券了",html:'<p>單筆金額滿  <b>NT$2000</b> 即可獲得一張抽獎券</p><a href="/finalEasyMakeEasyBuy/#/products" class="link-orange">前往選購商品</a>',showConfirmButton:!0});return}this.ticketNum=this.user.lotteryTicket;const n={lotteryTicket:this.user.lotteryTicket-1};return this.$http.patch(`${d}/600/users/${this.userId}`,n,{headers:{authorization:`Bearer ${this.token}`}})}).then(e=>(console.log(e,"扣掉了抽獎券"),this.getUserInfo(),this.$http.get(`${d}/lotteries?_expand=recipe`))).then(e=>{if(console.log(this.ticketNum,"更新前的張數",this.user.lotteryTicket,"更新後的張數"),this.ticketNum===0)return;this.ticketNum-=1,console.log("抽獎資訊",e.data),this.lotteries=e.data;const n=Math.floor(Math.random()*this.drewProducts.length),m=this.drewArr.filter(h=>h.title===this.drewProducts[n].title);if(m.length){this.$swal({title:"抽到重複的東西囉~ 非常sorry",iconHtml:'<img src="https://images.unsplash.com/photo-1606823616058-541d59dadcb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80">',customClass:{icon:"no-border"},showConfirmButton:!1});return}else m.length||(console.log(this.drewProducts[n].imgUrl,"網址"),this.drewArr.push(this.drewProducts[n]),this.$swal({title:`恭喜您抽中 ${this.drewProducts[n].title}`,iconHtml:`<img src="${this.drewProducts[n].imgUrl}" width="100">`,customClass:{icon:"no-border"},showConfirmButton:!1}));console.log("抽中的數字 1 ~ 7",n,this.drewArr);let p=`${d}/600/lotteryResults`,s="post",a={userId:this.userId,drewArr:this.drewArr};if(this.lotteryResult.length&&this.drewArr.length!==this.drewProducts.length)p=`${d}/600/lotteryResults/${this.lotteryResult[0].id}`,s="patch",a={drewArr:this.drewArr};else if(this.lotteryResult.length&&this.drewArr.length===this.drewProducts.length){this.$http.get(`${d}/lotteryResults`).then(h=>{console.log(h),this.getPrizePersonNum=h.data.filter(u=>u.getPrize===!0),console.log(this.getPrizePersonNum.length,"組合成功食譜人數"),p=`${d}/600/lotteryResults/${this.lotteryResult[0].id}`,s="patch",a={drewArr:this.drewArr,getPrize:!0,prizeNum:this.getPrizePersonNum.length+1},this.$swal({title:`恭喜您完成食譜，獲得${a.prizeNum===1?this.lotteries[0].prizes[0].title:a.prizeNum===2||a.prizeNum===3?this.lotteries[0].prizes[1].title:this.lotteries[0].prizes[2].title}`,iconHtml:`<img src="${a.prizeNum===1?this.lotteries[0].prizes[0].img:a.prizeNum===2||a.prizeNum===3?this.lotteries[0].prizes[1].img:this.lotteries[0].prizes[2].img}" width="100">`,customClass:{icon:"no-border"}}),console.log(p,s,a),this.$http[s](p,a,{headers:{authorization:`Bearer ${this.token}`}}).then(u=>{console.log("開始抽獎",u.data),this.getLotteryResult()}).catch(u=>{console.log(u)})});return}this.$http[s](p,a,{headers:{authorization:`Bearer ${this.token}`}}).then(h=>{console.log("開始抽獎",h.data),this.getLotteryResult(),console.log("有執行")}).catch(h=>{console.log(h)})}).catch(e=>{console.log(e),this.token||this.$swal({icon:"error",title:"登入即可抽獎",showConfirmButton:!1,timer:1500})})},async executeAsyncFunctions(){try{const n=[this.checkLogin,this.getUserInfo,this.getCoupons,this.getLotteries,this.getLotteryResult].map(m=>m.call(this));await Promise.all(n),setTimeout(()=>{this.$refs.loadingModal.hide()},500)}catch(e){console.error(e,"什麼錯誤???")}}},mounted(){this.$refs.loadingModal.show(),this.executeAsyncFunctions()},computed:{...z(w,["token","userId","nickName"])}},B={class:"container my-10"},T=t("ul",{class:"nav nav-tabs",id:"myTab",role:"tablist"},[t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link active",id:"home-tab","data-bs-toggle":"tab","data-bs-target":"#home",type:"button",role:"tab","aria-controls":"home","aria-selected":"true"},"優惠折扣")]),t("li",{class:"nav-item",role:"presentation"},[t("button",{class:"nav-link",id:"profile-tab","data-bs-toggle":"tab","data-bs-target":"#profile",type:"button",role:"tab","aria-controls":"profile","aria-selected":"false"},"抽獎回饋")])],-1),C={class:"tab-content",id:"myTabContent"},M={class:"tab-pane fade show active text-brown",id:"home",role:"tabpanel","aria-labelledby":"home-tab"},E={class:"row row-cols-lg-4 g-4 py-3 text-darkBrown"},D={class:"card"},I=["src"],j={class:"card-body"},S={class:"card-title h3"},V={class:"card-text text-truncate"},H={class:"d-flex"},U={class:"tab-pane fade",id:"profile",role:"tabpanel","aria-labelledby":"profile-tab"},F={class:""},O={key:0,class:"col-lg-6 align-self-center"},q=t("p",{class:"mb-0"},"本月指定抽獎食譜：",-1),Y={class:"text-center mb-4 fw-bold"},G={class:"row pt-4 border"},W=["src"],J={key:0,class:"position-absolute bg-notObtained d-flex"},X=t("i",{class:"bi bi-question-lg text-white fs-1 m-auto"},null,-1),Z=[X],K={class:"d-flex"},Q=t("p",{class:"text-end"},"抽一次消耗一張抽獎券",-1),tt={key:1,class:"d-flex flex-column align-items-center"},et=t("h5",{class:"h3 text-center text-orange"},"恭喜您完成食譜，獲得：",-1),st={class:"col-6"},ot={class:"card position-relative border-0",style:{"border-radius":"20px"}},it={class:"card-header h4 fw-bold text-center mb-3 bg-white border-0"},rt=["src"],lt=["src"],nt=["src"],ct={class:"card-footer bg-transparent border-0"},at={class:"fw-bold"},dt={class:"text-end"},ht=t("p",null,[f("本店會透過信箱與您聯絡獎品寄送時間，請時刻關注信件，並請留下電話、地址到@EasyMakeEasyBuy.gmail.com，感謝您的支持!"),t("br"),f("下期好禮更精彩，千萬別錯過!")],-1),ut={class:"py-100-sm-40","data-aos":"zoom-in"},pt=$('<div class="container"><h2 class="display-6 fw-bold d-flex align-items-center mb-4 d-flex flex-lg-row align-items-center mb-4"><div class="d-flex align-items-center"><div class="d-lg-block d-none me-4 rounded-circle text-center pt-2 position-relative" style="background-color:#FAE8D0;width:64px;height:64px;vertical-align:middle;font-size:45px;"> 本 <div class="position-absolute" style="background-color:#F5AE4C;width:25px;height:5px;top:41px;right:20px;"></div></div><div class="d-lg-none me-2 rounded-circle text-center pt-1 position-relative" style="background-color:#FAE8D0;width:36px;height:36px;font-size:24px;"> 本 <div class="position-absolute" style="background-color:#F5AE4C;width:12px;height:3px;top:21px;right:12px;"></div></div><span class="recipeTitle">月獎品一覽</span></div></h2></div>',1),gt={key:0,class:"container"},mt={class:"prizes row row-cols-lg-3 row-cols-1 gy-4"},_t={class:"card position-relative border-0",style:{"border-radius":"20px"}},bt={class:"card-header border-0 h4 fw-bold text-center mb-3 bg-white"},ft=t("div",{class:"questionMark position-absolute d-flex bg-lightYellow",style:{top:"60px",width:"100%",height:"220px","border-radius":"20px",background:"linear-gradient(45deg, rgb(252, 179, 78) 20%, rgb(253,164,72), rgb(255,113,75) 90% )"}},[t("i",{class:"bi bi-question-lg mx-auto text-white",style:{"font-size":"150px"}})],-1),yt=["src"],wt={class:"card-footer bg-transparent border-0"},xt={class:"fw-bold"},vt={class:"text-end"},kt=t("h5",null,"規則：",-1);function zt(e,n,m,p,s,a){const h=v("LoadingModal"),u=v("RouterLink");return r(),i("div",B,[x(h,{ref:"loadingModal"},null,512),T,t("div",C,[t("div",M,[t("div",E,[(r(!0),i(g,null,_(s.coupons,o=>(r(),i("div",{class:"col",key:o.id+3467},[t("div",D,[t("img",{src:o.img,class:"card-img-top",alt:"...",height:"200",style:{"object-fit":"cover"}},null,8,I),t("div",j,[t("h5",S,c(o.title),1),t("p",V,c(o.description),1),t("div",H,[x(u,{to:`/discounts/${o.id}`,href:"#",class:"stretched-link btn btn-brown ms-auto"},{default:A(()=>[f("查看完整優惠資訊")]),_:2},1032,["to"])])])])]))),128))])]),t("div",U,[(r(!0),i(g,null,_(s.lotteries,o=>{var y;return r(),i("div",{class:"py-3 text-darkBrown d-flex flex-column",key:o.id+9590},[t("p",F,"活動時間："+c(new Date(o.startDate).toLocaleString().split(" ")[0])+" ~ "+c(new Date(o.dueDate).toLocaleString().split(" ")[0]),1),t("p",{class:P({"text-danger":s.user.lotteryTicket===0})},"剩餘抽獎券："+c(s.user.lotteryTicket),3),!s.lotteryResult[0]||s.lotteryResult[0].drewArr.length!==s.drewProducts.length?(r(),i("div",O,[q,t("h5",Y,c(o.recipe.title),1),t("div",G,[(r(!0),i(g,null,_(o.recipe.relativeProducts,l=>(r(),i("div",{class:"col-3 d-flex flex-column align-items-center position-relative",key:l.id+95900},[l.category==="單一產品"?(r(),i(g,{key:0},[t("img",{src:l.imgUrl,alt:"",height:"100",width:"100",style:{"object-fit":"cover"}},null,8,W),t("p",null,c(l.title),1),JSON.stringify(this.drewArr).includes(l.title)?b("",!0):(r(),i("div",J,Z))],64)):b("",!0)]))),128))]),t("div",K,[t("button",{type:"button",class:"mx-auto mt-3 btn btn-brown",onClick:n[0]||(n[0]=(...l)=>a.addtLotteryResult&&a.addtLotteryResult(...l))},"立即抽獎")]),Q])):s.lotteryResult[0]&&s.lotteryResult[0].drewArr.length===s.drewProducts.length?(r(),i("div",tt,[et,t("div",st,[t("div",ot,[t("div",it,c(s.lotteryResult[0].prizeNum===1?"大獎":s.lotteryResult[0].prizeNum===2||s.lotteryResult[0].prizeNum===3?"二獎":"三獎"),1),s.lotteryResult[0].prizeNum===1?(r(),i("img",{key:0,src:o.prizes[0].img,class:"card-img border",style:{"border-radius":"20px",height:"220px","object-fit":"cover"},alt:""},null,8,rt)):s.lotteryResult[0].prizeNum===2||s.lotteryResult[0].prizeNum===3?(r(),i("img",{key:1,src:o.prizes[1].img,class:"card-img border",style:{"border-radius":"20px",height:"220px","object-fit":"cover"},alt:""},null,8,lt)):(r(),i("img",{key:2,src:o.prizes[2].img,class:"card-img border",style:{"border-radius":"20px",height:"220px","object-fit":"cover"},alt:""},null,8,nt)),t("div",ct,[t("h5",at,c(s.lotteryResult[0].prizeNum===1?o.prizes[0].title:s.lotteryResult[0].prizeNum===2||s.lotteryResult[0].prizeNum===3?o.prizes[1].title:o.prizes[2].title),1),t("p",dt,"價值：NT$ "+c(s.lotteryResult[0].prizeNum===1?o.prizes[0].price:s.lotteryResult[0].prizeNum===2||s.lotteryResult[0].prizeNum===3?o.prizes[1].price:o.prizes[2].price),1)])]),ht])])):b("",!0),t("section",ut,[pt,(y=s.lotteries[0])!=null&&y.prizes?(r(),i("div",gt,[t("div",mt,[(r(!0),i(g,null,_(s.lotteries[0].prizes,l=>(r(),i("div",{class:"col",key:l.id+500,"data-aos":"flip-right"},[t("div",_t,[t("div",bt,c(l.id===1?"大獎":l.id===2?"二獎":"三獎")+" / "+c(l.people),1),ft,t("img",{src:l.img,class:"card-img border",style:{"border-radius":"20px",height:"220px","object-fit":"cover"},alt:""},null,8,yt),t("div",wt,[t("h5",xt,c(l.title),1),t("p",vt,"價值：NT$ "+c(l.price),1)])])]))),128))])])):b("",!0)]),kt,t("ol",null,[(r(!0),i(g,null,_(o.rules,l=>(r(),i("li",{key:l+20},c(l),1))),128))])])}),128))])])])}const Ct=N(L,[["render",zt]]);export{Ct as default};
