import{R as y}from"./vue-router-2c21c692.js";import{h as x,b as v,r as w,d as k,s as V}from"./db-64e704f5.js";import{_ as E}from"./hero-mobile-de2e8a61.js";import{_ as N}from"./logo-e34835c8.js";import{_ as B,U,V as s,W as t,X as _,a5 as f,Y as r,r as d,o as M,a4 as i}from"./_plugin-vue_export-helper-03b40388.js";const P="/finalEasyBuyEasyMake/assets/1410887-1e4772a0.png",C="/finalEasyBuyEasyMake/assets/2674777-d219ec79.png",S="/finalEasyBuyEasyMake/assets/5887767-c975385b.png",F="/finalEasyBuyEasyMake/assets/8734574-40da6eee.png",I="/finalEasyBuyEasyMake/assets/726917-224b36db.png",R="/finalEasyBuyEasyMake/assets/4771632-e08a0d14.png";const T={data(){return{user:{nickName:"",email:"",password:"",confirmPassword:"",lotteryTicket:1,headshotImg:""}}},components:{RouterLink:y},methods:{async signUp(){const m=this.user.email,a=this.user.password;try{const p=(await x(v,m,a)).user;console.log(p,"取得user 資料");const e=w(k,"users/"+p.uid);V(e,{email:m,nickName:this.user.nickName,lotteryTicket:this.user.lotteryTicket,headshotImg:this.user.headshotImg}),this.$swal({icon:"success",title:"註冊成功",showConfirmButton:!1,timer:1500}),this.$router.push("/login")}catch(u){console.log(u.message,"錯誤"),this.$swal({icon:"error",title:"此信箱已被註冊，請更換信箱",showConfirmButton:!1,timer:1500})}}}},L={class:"mt-5 d-flex align-items-center bg-lightYellow"},Y={class:"container my-7"},q={"aria-label":"breadcrumb"},W={class:"breadcrumb"},j={class:"breadcrumb-item fs-5"},z=s("li",{class:"breadcrumb-item active fs-5 d-none d-lg-block","aria-current":"page"},"註冊",-1),A={class:"row mt-3 gx-3 rounded py-3"},X=f('<div class="col d-none d-lg-block"><div class="card h-100 border-0 bg-lightYellow mt-9" style="border-radius:30px;"><img src="'+E+'" class="img-fluid card-img-top" alt="" style="border-radius:30px;"><div class="card-img-overlay" style="top:450px;"><h2 class="text-darkBrown text-center mb-4 h1"> 您在找的 <span class="text-orange"> 食譜材料 </span> 都在這裡 </h2></div></div></div>',1),D={class:"col"},G={class:"signup-card card h-100",style:{"border-radius":"20px",padding:"0 !important"}},H={class:"card-body p-0"},J={class:"card-header bg-white py-0",style:{"border-radius":"20px 20px 0px 0px"}},K={class:"row",style:{margin:"0 -18px"}},O={class:"h5 col mb-0 text-center py-3 position-relative",style:{"padding-bottom":"10px","border-radius":"20px 0 0 0"}},Q=s("h2",{class:"h5 col mb-0 text-center py-3 position-relative bg-orange text-decoration-none fw-bold text-white",style:{"padding-bottom":"10px","border-radius":"0 20px 0 0"}}," 註冊 ",-1),Z=s("h1",{class:"text-orange text-center h3 mt-4"},[r(" 歡迎來到 "),s("div",{class:"d-flex mt-2"},[s("img",{src:N,class:"mx-auto",alt:"",width:"280"})])],-1),$={class:"row gy-4 d-flex"},ss={class:"col-12 fs-5"},es=s("i",{class:"bi bi-person-circle"},null,-1),os={class:"col-12 fs-5"},ts=s("i",{class:"bi bi-envelope-fill"},null,-1),as={class:"col-12 fs-5"},is=s("i",{class:"bi bi-unlock-fill"},null,-1),ls={class:"col-12 fs-5"},rs=s("i",{class:"bi bi-lock-fill"},null,-1),ns=s("div",{class:"col-12"},[s("button",{type:"submit",class:"btn btn-orange w-100 text-white"},"註冊")],-1),cs=f('<div class="loginSignupImg card-footer d-flex justify-content-evenly bg-white border-0 py-4" style="border-radius:30px;"><img src="'+P+'"><img src="'+C+'"><img src="'+S+'"><img src="'+F+'"><img src="'+I+'"><img src="'+R+'"></div>',1);function ds(m,a,u,p,e,h){const b=d("RouterLink"),n=d("VField"),c=d("ErrorMessage"),g=d("VForm");return M(),U("main",L,[s("div",Y,[s("nav",q,[s("ol",W,[s("li",j,[t(b,{to:"/home",class:"link-red d-none d-lg-block"},{default:_(()=>[r("首頁")]),_:1})]),z])]),s("div",A,[X,s("div",D,[s("div",G,[s("div",H,[s("div",J,[s("div",K,[s("h2",O,[t(b,{to:"/login",class:"link-dark stretched-link text-decoration-none fw-bold link-orange"},{default:_(()=>[r("登入")]),_:1})]),Q])]),Z,t(g,{ref:"form",class:"mx-5 card-body",onSubmit:h.signUp},{default:_(({errors:o})=>[s("div",$,[s("div",ss,[s("label",{for:"nickName",class:i(["form-label text-secondary",{"text-orange":e.user.nickName&&!o.暱稱}])},[es,r(" 暱稱")],2),t(n,{id:"nickName",name:"暱稱",type:"text",class:i(["form-control border-0 border-bottom",{"is-invalid":o.暱稱,"is-valid":e.user.nickName&&!o.暱稱}]),placeholder:"請輸入您的暱稱",rules:"required|max:10",modelValue:e.user.nickName,"onUpdate:modelValue":a[0]||(a[0]=l=>e.user.nickName=l)},null,8,["class","modelValue"]),t(c,{name:"暱稱",class:"invalid-feedback"})]),s("div",os,[s("label",{for:"email",class:i(["form-label text-secondary",{"text-orange":e.user.email&&!o.信箱}])},[ts,r(" 信箱")],2),t(n,{id:"email",name:"信箱",type:"email",class:i(["form-control border-0 border-bottom",{"is-invalid":o.信箱,"is-valid":e.user.email&&!o.信箱}]),placeholder:"請輸入您的信箱",rules:"email|required",modelValue:e.user.email,"onUpdate:modelValue":a[1]||(a[1]=l=>e.user.email=l)},null,8,["class","modelValue"]),t(c,{name:"信箱",class:"invalid-feedback"})]),s("div",as,[s("label",{for:"password",class:i(["form-label text-secondary",{"text-orange":e.user.password&&!o.密碼}])},[is,r(" 密碼")],2),t(n,{id:"password",name:"密碼",type:"password",class:i(["form-control border-0 border-bottom",{"is-invalid":o.密碼,"is-valid":!o.密碼&&e.user.password}]),placeholder:"請輸入密碼",rules:"min:6",modelValue:e.user.password,"onUpdate:modelValue":a[2]||(a[2]=l=>e.user.password=l)},null,8,["class","modelValue"]),t(c,{name:"密碼",class:"invalid-feedback"})]),s("div",ls,[s("label",{for:"confirmPassword",class:i(["form-label text-secondary",{"text-orange":e.user.confirmPassword&&!o.確認密碼}])},[rs,r(" 確認密碼")],2),t(n,{id:"confirmPassword",name:"確認密碼",type:"password",class:i(["form-control border-0 border-bottom",{"is-invalid":o.確認密碼,"is-valid":!o.確認密碼&&e.user.confirmPassword}]),placeholder:"請再次輸入密碼",rules:"confirmed:@密碼",modelValue:e.user.confirmPassword,"onUpdate:modelValue":a[3]||(a[3]=l=>e.user.confirmPassword=l)},null,8,["class","modelValue"]),t(c,{name:"確認密碼",class:"invalid-feedback"})]),ns])]),_:1},8,["onSubmit"])]),cs])])])])])}const fs=B(T,[["render",ds]]);export{fs as default};