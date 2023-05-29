import{m as k}from"./modalMixin-84af034f.js";import{v as m,a as T}from"./runtime-dom.esm-bundler-54ced388.js";import{_ as y,o as n,U as a,V as t,Z as v,$ as c,a1 as f,a2 as A,a0 as d,Y as h,a3 as I,W as M,r as D,a4 as w}from"./_plugin-vue_export-helper-03b40388.js";import"./modal-5929133b.js";import"./_commonjsHelpers-042e6b4d.js";const{VITE_PATH:_}={VITE_API_KEY:"AIzaSyCFUHSJz2uLKyLoro6hV10QUzYmoo3UMb0",VITE_AUTH_DOMAIN:"easymakeeasyb.firebaseapp.com",VITE_URL:"https://easymakeeasyb-default-rtdb.firebaseio.com",VITE_SENDERID:"271184286286",VITE_APPID:"1:271184286286:web:321404cd2c69663b1f691f",VITE_MEASUREMENTID:"DZPMFGCKZB",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},x={data(){return{tempArticle:{tags:[]},status:"edit",recipes:[],date:"",comments:[]}},mixins:[k],props:["id","openModal","getArticles"],methods:{updateProduct(){this.tempArticle.createAt=new Date(this.date).getTime();let s=`${_}/articles/${this.tempArticle.id}`,o="put";this.status==="new"&&(s=`${_}/articles`,o="post"),this.$http[o](s,this.tempArticle).then(r=>{console.log(r.data),this.getArticles(),this.hide()}).catch(r=>{console.log(r)})}},mounted(){},watch:{id(){console.log("id變了"),this.id!=="new"&&this.id!==""?this.$http.get(`${_}/articles/${this.id}`).then(s=>(this.tempArticle=s.data,this.date=new Date(this.tempArticle.createAt).toISOString().split("T")[0],this.$http.get(`${_}/articles/${this.id}/comments?_expand=user`))).then(s=>{console.log(s.data),this.comments=s.data,this.show(),this.status="edit",this.openModal("")}).catch(s=>{console.log(s)}):this.id==="new"&&(this.tempArticle={tags:[]},this.show(),this.status="new",this.openModal(""))}}},U={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},P={class:"modal-dialog modal-xl"},C={class:"modal-content"},$={class:"modal-header bg-dark"},S={class:"modal-title text-white",id:"exampleModalLabel"},L={key:0},N={key:1},R=t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),B={class:"modal-body"},z={class:"row"},H={class:"col-4"},O=t("label",{for:"title",class:"form-label"},"圖片網址",-1),K=["src"],F=t("label",{for:"date",class:"form-label mt-3"},"文章撰寫日期",-1),Y={class:"form-check"},Z=t("label",{class:"form-check-label",for:"isPublic"}," 是否公開 ",-1),G={class:"col-8"},J={class:"row gy-3"},Q={class:"col-2"},q=t("label",{for:"title",class:"form-label"},"編號（id）",-1),W={class:"col-10"},j=t("label",{for:"content",class:"form-label"},"標籤",-1),X={class:"row"},tt={class:"input-group mb-3"},et=["onUpdate:modelValue"],st=["onClick"],lt=t("i",{class:"bi bi-x-lg"},null,-1),ot=[lt],it={class:"col-3"},nt={class:"col-12"},at=t("label",{for:"title",class:"form-label"},"標題",-1),dt={class:"col-12"},ct=t("label",{for:"description",class:"form-label"},"文章內容",-1),rt={class:"col-12"},mt={for:"price",class:"form-label"},ut={style:{"font-size":"16px"}},pt=t("div",null,[t("button",{type:"button",class:"btn btn-outline-primary"},"新增官方留言")],-1),_t={class:"modal-footer"},ht=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),bt={key:0},ft={key:1};function At(s,o,r,g,l,i){const u=I("true"),b=I("false");return n(),a("div",U,[t("div",P,[t("div",C,[t("div",$,[t("h5",S,[l.status==="edit"?(n(),a("span",L,"編輯產品內容")):l.status==="new"?(n(),a("span",N,"新增產品內容")):v("",!0)]),R]),t("div",B,[t("div",z,[t("div",H,[O,c(t("input",{type:"text",id:"title",class:"form-control mb-3","onUpdate:modelValue":o[0]||(o[0]=e=>l.tempArticle.imgUrl=e)},null,512),[[m,l.tempArticle.imgUrl]]),t("img",{src:l.tempArticle.imgUrl,alt:"",width:"300"},null,8,K),F,c(t("input",{type:"date",id:"date",class:"form-control mb-3","onUpdate:modelValue":o[1]||(o[1]=e=>l.date=e)},null,512),[[m,l.date]]),t("div",Y,[c(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"isPublic","onUpdate:modelValue":o[2]||(o[2]=e=>l.tempArticle.isPublic=e)},null,512),[[u,1],[b,0],[T,l.tempArticle.isPublic]]),Z])]),t("div",G,[t("div",J,[t("div",Q,[q,c(t("input",{type:"text",id:"title",class:"form-control","onUpdate:modelValue":o[3]||(o[3]=e=>l.tempArticle.id=e),disabled:""},null,512),[[m,l.tempArticle.id]])]),t("div",W,[j,t("div",X,[(n(!0),a(f,null,A(l.tempArticle.tags,(e,p)=>(n(),a("div",{class:"col-3",key:e+23423},[t("div",tt,[c(t("input",{type:"text",class:"form-control","onUpdate:modelValue":E=>l.tempArticle.tags[p]=E},null,8,et),[[m,l.tempArticle.tags[p]]]),t("button",{class:"btn btn-outline-primary",type:"button",onClick:E=>l.tempArticle.tags.splice(p,1)},ot,8,st)])]))),128)),t("div",it,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:o[4]||(o[4]=e=>l.tempArticle.tags.push(""))},"新增標籤")])])]),t("div",nt,[at,c(t("input",{type:"text",id:"title",class:"form-control","onUpdate:modelValue":o[5]||(o[5]=e=>l.tempArticle.title=e)},null,512),[[m,l.tempArticle.title]])]),t("div",dt,[ct,c(t("textarea",{name:"",id:"description",cols:"30",rows:"10",class:"form-control","onUpdate:modelValue":o[6]||(o[6]=e=>l.tempArticle.description=e)},null,512),[[m,l.tempArticle.description]])]),t("div",rt,[t("label",mt,d(l.comments.length)+" 則留言",1),(n(!0),a(f,null,A(l.comments,e=>(n(),a("div",{key:e.id,style:{"background-color":"antiquewhite"}},[t("h5",null,[h(d(e.user.nickName)+" ",1),t("span",ut," (使用者id "+d(e.user.id)+") ",1),h("：")]),t("p",null,d(e.message),1)]))),128))]),pt])])])]),t("div",_t,[ht,t("button",{type:"button",class:"btn btn-primary",onClick:o[7]||(o[7]=(...e)=>i.updateProduct&&i.updateProduct(...e))},[l.status==="edit"?(n(),a("span",bt,"確認編輯")):l.status==="new"?(n(),a("span",ft,"確認新增")):v("",!0)])])])])],512)}const yt=y(x,[["render",At]]),{VITE_PATH:V}={VITE_API_KEY:"AIzaSyCFUHSJz2uLKyLoro6hV10QUzYmoo3UMb0",VITE_AUTH_DOMAIN:"easymakeeasyb.firebaseapp.com",VITE_URL:"https://easymakeeasyb-default-rtdb.firebaseio.com",VITE_SENDERID:"271184286286",VITE_APPID:"1:271184286286:web:321404cd2c69663b1f691f",VITE_MEASUREMENTID:"DZPMFGCKZB",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},gt={data(){return{tempArticle:{}}},mixins:[k],props:["id","openDeleteModal","getArticles"],methods:{deleteArticle(){this.$http.delete(`${V}/articles/${this.tempArticle.id}`).then(s=>{console.log(s.data),this.getArticles(),this.hide()}).catch(s=>{console.log(s)})}},watch:{id(){this.id&&(console.log(this.id,"改變了"),this.$http.get(`${V}/articles/${this.id}`).then(s=>{this.tempArticle=s.data,console.log(this.tempArticle),this.show(),this.openDeleteModal("")}).catch(s=>{console.log(s)}))}}},Et={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},vt={class:"modal-dialog"},It={class:"modal-content"},Mt=t("div",{class:"modal-header bg-dark"},[t("h5",{class:"modal-title text-white",id:"exampleModalLabel"}," 刪除產品 "),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Dt={class:"modal-body"},Vt={class:"text-danger fw-bold"},kt={class:"modal-footer"},Tt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function wt(s,o,r,g,l,i){return n(),a("div",Et,[t("div",vt,[t("div",It,[Mt,t("div",Dt,[t("p",null,[h("確定要刪除文章 "),t("span",Vt," 【"+d(l.tempArticle.title)+"】 ",1),h(" 嗎? ")])]),t("div",kt,[Tt,t("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=(...u)=>i.deleteArticle&&i.deleteArticle(...u))}," 確認刪除 ")])])])],512)}const xt=y(gt,[["render",wt]]),{VITE_PATH:Ut}={VITE_API_KEY:"AIzaSyCFUHSJz2uLKyLoro6hV10QUzYmoo3UMb0",VITE_AUTH_DOMAIN:"easymakeeasyb.firebaseapp.com",VITE_URL:"https://easymakeeasyb-default-rtdb.firebaseio.com",VITE_SENDERID:"271184286286",VITE_APPID:"1:271184286286:web:321404cd2c69663b1f691f",VITE_MEASUREMENTID:"DZPMFGCKZB",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},Pt={components:{ArticleModal:yt,DeleteArticleModal:xt},data(){return{articles:[],articleId:"",articleDeleteId:""}},methods:{getArticles(){this.$http.get(`${Ut}/articles?_embed=comments&_expand=user`).then(s=>{console.log(s.data),this.articles=s.data}).catch(s=>{console.log(s)})},openModal(s){this.articleId=s},openDeleteModal(s){this.articleDeleteId=s}},mounted(){this.getArticles()}},Ct={class:"container"},$t={class:"d-flex my-4"},St={class:"table text-center",style:{"vertical-align":"middle"}},Lt=t("thead",null,[t("tr",null,[t("th",null,"文章編號"),t("th",null,"撰寫日期"),t("th",null,"作者"),t("th",null,"標題"),t("th",null,"內容"),t("th",null,"留言數"),t("th",null,"是否公開"),t("th",null,"編輯")])],-1),Nt={style:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis","max-width":"100px"}},Rt={class:"btn-group"},Bt=["onClick"],zt=["onClick"];function Ht(s,o,r,g,l,i){const u=D("ArticleModal"),b=D("DeleteArticleModal");return n(),a("div",Ct,[t("div",$t,[t("button",{type:"button",class:"ms-auto btn btn-primary",onClick:o[0]||(o[0]=e=>i.openModal("new"))},"建立新文章")]),t("table",St,[Lt,t("tbody",null,[(n(!0),a(f,null,A(l.articles,e=>(n(),a("tr",{key:e.id},[t("td",null,d(e.id),1),t("td",null,d(`${new Date(e.createAt).toLocaleString().split(" ")[0]}`),1),t("td",null,d(e.user.nickName),1),t("td",null,d(e.title),1),t("td",Nt,d(e.description),1),t("td",null,d(e.comments.length),1),t("td",{class:w({"text-success":e.isPublic,"fw-bold":e.isPublic})},d(`${e.isPublic?"公開":"不公開"}`),3),t("td",null,[t("div",Rt,[t("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:p=>i.openModal(e.id)},"編輯",8,Bt),t("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:p=>i.openDeleteModal(e.id)},"刪除",8,zt)])])]))),128))])]),M(u,{ref:"productModal",id:l.articleId,"open-modal":i.openModal,"get-articles":i.getArticles,"get-comments":s.getComments},null,8,["id","open-modal","get-articles","get-comments"]),M(b,{ref:"deleteProductModal",id:l.articleDeleteId,"get-articles":i.getArticles,"open-delete-modal":i.openDeleteModal},null,8,["id","get-articles","open-delete-modal"])])}const Gt=y(Pt,[["render",Ht]]);export{Gt as default};
