import{R as g}from"./vue-router-1aba70ec.js";import{_ as h,a as x,b as v,c as y,d as w,e as k,f as V,g as E}from"./2747131-59a542f2.js";import{_ as N}from"./logo-5ad94f32.js";import{_ as P}from"./4771632-6f97335a.js";import{_ as U,U as S,V as s,W as l,X as p,a6 as u,Y as r,r as m,o as B,a4 as a}from"./_plugin-vue_export-helper-cbb9d8af.js";const{VITE_PATH:R}={VITE_PATH:"http://localhost:3000",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},T={data(){return{user:{nickName:"",email:"",password:"",confirmPassword:"",lotteryTicket:1,headshotImg:""}}},components:{RouterLink:g},methods:{signUp(){this.$http.post(`${R}/signup`,this.user).then(n=>{console.log(n.data),this.$swal({icon:"success",title:"註冊成功",showConfirmButton:!1,timer:1500}),this.$router.push("/loginSignup/login")}).catch(n=>{console.log(n),n.response.data==="Email already exists"&&this.$swal({icon:"error",title:"此信箱已被註冊，請更換信箱",showConfirmButton:!1,timer:1500})})}}},C={class:"py-2 d-flex align-items-center bg-lightYellow"},L={class:"container my-7"},F={"aria-label":"breadcrumb"},I={class:"breadcrumb"},M={class:"breadcrumb-item fs-5"},A=s("li",{class:"breadcrumb-item active fs-5 d-none d-lg-block","aria-current":"page"},"註冊",-1),D={class:"row mt-3 gx-3 rounded py-3"},Y=u('<div class="col d-none d-lg-block"><div class="card h-100 border-0 bg-lightYellow mt-9" style="border-radius:30px;"><img src="'+h+'" class="img-fluid card-img-top" alt="" style="border-radius:30px;"><div class="card-img-overlay" style="top:450px;"><h2 class="text-darkBrown text-center mb-4 h1"> 您在找的 <span class="text-orange"> 食譜材料 </span> 都在這裡 </h2></div></div></div>',1),q={class:"col"},H={class:"signup-card card h-100",style:{"border-radius":"20px",padding:"0 !important"}},O={class:"card-body p-0"},j={class:"card-header bg-white py-0",style:{"border-radius":"20px 20px 0px 0px"}},z={class:"row",style:{margin:"0 -18px"}},W={class:"h5 col mb-0 text-center py-3 position-relative",style:{"padding-bottom":"10px","border-radius":"20px 0 0 0"}},X=s("h2",{class:"h5 col mb-0 text-center py-3 position-relative bg-orange text-decoration-none fw-bold text-white",style:{"padding-bottom":"10px","border-radius":"0 20px 0 0"}}," 註冊 ",-1),G=s("h1",{class:"text-brown text-center h3 mt-4"},[r(" 歡迎來到 "),s("div",{class:"d-flex mt-2"},[s("img",{src:N,class:"mx-auto",alt:"",width:"280"})])],-1),J={class:"row gy-4 d-flex"},K={class:"col-12 fs-5"},Q=s("i",{class:"bi bi-person-circle"},null,-1),Z={class:"col-12 fs-5"},$=s("i",{class:"bi bi-envelope-fill"},null,-1),ss={class:"col-12 fs-5"},es=s("i",{class:"bi bi-unlock-fill"},null,-1),os={class:"col-12 fs-5"},ls=s("i",{class:"bi bi-lock-fill"},null,-1),ts=s("div",{class:"col-12"},[s("button",{type:"submit",class:"btn btn-orange w-100"},"註冊")],-1),as=u('<div class="loginSignupImg card-footer d-flex justify-content-center bg-white border-0 py-4" style="border-radius:30px;"><img src="'+x+'" alt="" class="me-4 d-none d-lg-block"><img src="'+v+'" alt="" class="me-4"><img src="'+y+'" alt="" class="me-4"><img src="'+w+'" alt="" class="me-4"><img src="'+k+'" alt="" class="me-4"><img src="'+V+'" alt="" class="me-4"><img src="'+E+'" alt="" class="me-4 d-none d-lg-block"><img src="'+P+'" alt="" class=""></div>',1);function is(n,t,rs,ns,e,b){const _=m("RouterLink"),c=m("VField"),d=m("ErrorMessage"),f=m("VForm");return B(),S("main",C,[s("div",L,[s("nav",F,[s("ol",I,[s("li",M,[l(_,{to:"/home",class:"link-orange d-none d-lg-block"},{default:p(()=>[r("首頁")]),_:1})]),A])]),s("div",D,[Y,s("div",q,[s("div",H,[s("div",O,[s("div",j,[s("div",z,[s("h2",W,[l(_,{to:"/LoginSignup/login",class:"link-dark stretched-link text-decoration-none fw-bold link-orange"},{default:p(()=>[r("登入")]),_:1})]),X])]),G,l(f,{ref:"form",class:"mx-5 card-body",onSubmit:b.signUp},{default:p(({errors:o})=>[s("div",J,[s("div",K,[s("label",{for:"nickName",class:a(["form-label text-secondary",{"text-orange":e.user.nickName&&!o.暱稱}])},[Q,r(" 暱稱")],2),l(c,{id:"nickName",name:"暱稱",type:"text",class:a(["form-control border-0 border-bottom",{"is-invalid":o.暱稱,"is-valid":e.user.nickName&&!o.暱稱}]),placeholder:"請輸入您的暱稱",rules:"required|max:10",modelValue:e.user.nickName,"onUpdate:modelValue":t[0]||(t[0]=i=>e.user.nickName=i)},null,8,["class","modelValue"]),l(d,{name:"暱稱",class:"invalid-feedback"})]),s("div",Z,[s("label",{for:"email",class:a(["form-label text-secondary",{"text-orange":e.user.email&&!o.信箱}])},[$,r(" 信箱")],2),l(c,{id:"email",name:"信箱",type:"email",class:a(["form-control border-0 border-bottom",{"is-invalid":o.信箱,"is-valid":e.user.email&&!o.信箱}]),placeholder:"請輸入您的信箱",rules:"email|required",modelValue:e.user.email,"onUpdate:modelValue":t[1]||(t[1]=i=>e.user.email=i)},null,8,["class","modelValue"]),l(d,{name:"信箱",class:"invalid-feedback"})]),s("div",ss,[s("label",{for:"password",class:a(["form-label text-secondary",{"text-orange":e.user.password&&!o.密碼}])},[es,r(" 密碼")],2),l(c,{id:"password",name:"密碼",type:"password",class:a(["form-control border-0 border-bottom",{"is-invalid":o.密碼,"is-valid":!o.密碼&&e.user.password}]),placeholder:"請輸入密碼",rules:"min:4",modelValue:e.user.password,"onUpdate:modelValue":t[2]||(t[2]=i=>e.user.password=i)},null,8,["class","modelValue"]),l(d,{name:"密碼",class:"invalid-feedback"})]),s("div",os,[s("label",{for:"confirmPassword",class:a(["form-label text-secondary",{"text-orange":e.user.confirmPassword&&!o.確認密碼}])},[ls,r(" 確認密碼")],2),l(c,{id:"confirmPassword",name:"確認密碼",type:"password",class:a(["form-control border-0 border-bottom",{"is-invalid":o.確認密碼,"is-valid":!o.確認密碼&&e.user.confirmPassword}]),placeholder:"請再次輸入密碼",rules:"confirmed:@密碼",modelValue:e.user.confirmPassword,"onUpdate:modelValue":t[3]||(t[3]=i=>e.user.confirmPassword=i)},null,8,["class","modelValue"]),l(d,{name:"確認密碼",class:"invalid-feedback"})]),ts])]),_:1},8,["onSubmit"])]),as])])])])])}const us=U(T,[["render",is]]);export{us as default};
