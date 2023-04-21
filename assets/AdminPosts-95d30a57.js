import{m as E}from"./modalMixin-c1848f69.js";import{v as m,a as V}from"./runtime-dom.esm-bundler-bb3e8e23.js";import{_ as A,o as n,U as d,V as t,Z as x,$ as a,a1 as f,a2 as g,a0 as c,Y as _,a3 as w,W as M,r as k,a4 as P}from"./_plugin-vue_export-helper-cbb9d8af.js";import"./modal-838a1639.js";import"./_commonjsHelpers-042e6b4d.js";import"./base-component-5a126788.js";const{VITE_PATH:h}={VITE_PATH:"http://localhost:3000",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},$={data(){return{tempArticle:{tags:[]},status:"edit",recipes:[],date:"",comments:[]}},mixins:[E],props:["id","openModal","getArticles"],methods:{updateProduct(){this.tempArticle.createAt=new Date(this.date).getTime();let s=`${h}/articles/${this.tempArticle.id}`,o="put";this.status==="new"&&(s=`${h}/articles`,o="post"),this.$http[o](s,this.tempArticle).then(r=>{console.log(r.data),this.getArticles(),this.hide()}).catch(r=>{console.log(r)})}},mounted(){},watch:{id(){console.log("id變了"),this.id!=="new"&&this.id!==""?this.$http.get(`${h}/articles/${this.id}`).then(s=>(this.tempArticle=s.data,this.date=new Date(this.tempArticle.createAt).toISOString().split("T")[0],this.$http.get(`${h}/articles/${this.id}/comments?_expand=user`))).then(s=>{console.log(s.data),this.comments=s.data,this.show(),this.status="edit",this.openModal("")}).catch(s=>{console.log(s)}):this.id==="new"&&(this.tempArticle={tags:[]},this.show(),this.status="new",this.openModal(""))}}},T={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},C={class:"modal-dialog modal-xl"},I={class:"modal-content"},U={class:"modal-header bg-dark"},B={class:"modal-title text-white",id:"exampleModalLabel"},L={key:0},H={key:1},O=t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),S={class:"modal-body"},N={class:"row"},R={class:"col-4"},z=t("label",{for:"title",class:"form-label"},"圖片網址",-1),q=["src"],F=t("label",{for:"date",class:"form-label mt-3"},"文章撰寫日期",-1),W={class:"form-check"},Y=t("label",{class:"form-check-label",for:"isPublic"}," 是否公開 ",-1),Z={class:"col-8"},j={class:"row gy-3"},G={class:"col-2"},J=t("label",{for:"title",class:"form-label"},"編號（id）",-1),K={class:"col-10"},Q=t("label",{for:"content",class:"form-label"},"標籤",-1),X={class:"row"},tt={class:"input-group mb-3"},et=["onUpdate:modelValue"],st=["onClick"],lt=t("i",{class:"bi bi-x-lg"},null,-1),ot=[lt],it={class:"col-3"},nt={class:"col-12"},dt=t("label",{for:"title",class:"form-label"},"標題",-1),ct={class:"col-12"},at=t("label",{for:"description",class:"form-label"},"文章內容",-1),rt={class:"col-12"},mt={for:"price",class:"form-label"},ut={style:{"font-size":"16px"}},pt=t("div",null,[t("button",{type:"button",class:"btn btn-outline-primary"},"新增官方留言")],-1),ht={class:"modal-footer"},_t=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1),bt={key:0},ft={key:1};function gt(s,o,r,y,l,i){const u=w("true"),b=w("false");return n(),d("div",T,[t("div",C,[t("div",I,[t("div",U,[t("h5",B,[l.status==="edit"?(n(),d("span",L,"編輯產品內容")):l.status==="new"?(n(),d("span",H,"新增產品內容")):x("",!0)]),O]),t("div",S,[t("div",N,[t("div",R,[z,a(t("input",{type:"text",id:"title",class:"form-control mb-3","onUpdate:modelValue":o[0]||(o[0]=e=>l.tempArticle.imgUrl=e)},null,512),[[m,l.tempArticle.imgUrl]]),t("img",{src:l.tempArticle.imgUrl,alt:"",width:"300"},null,8,q),F,a(t("input",{type:"date",id:"date",class:"form-control mb-3","onUpdate:modelValue":o[1]||(o[1]=e=>l.date=e)},null,512),[[m,l.date]]),t("div",W,[a(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"isPublic","onUpdate:modelValue":o[2]||(o[2]=e=>l.tempArticle.isPublic=e)},null,512),[[u,1],[b,0],[V,l.tempArticle.isPublic]]),Y])]),t("div",Z,[t("div",j,[t("div",G,[J,a(t("input",{type:"text",id:"title",class:"form-control","onUpdate:modelValue":o[3]||(o[3]=e=>l.tempArticle.id=e),disabled:""},null,512),[[m,l.tempArticle.id]])]),t("div",K,[Q,t("div",X,[(n(!0),d(f,null,g(l.tempArticle.tags,(e,p)=>(n(),d("div",{class:"col-3",key:e+23423},[t("div",tt,[a(t("input",{type:"text",class:"form-control","onUpdate:modelValue":v=>l.tempArticle.tags[p]=v},null,8,et),[[m,l.tempArticle.tags[p]]]),t("button",{class:"btn btn-outline-primary",type:"button",onClick:v=>l.tempArticle.tags.splice(p,1)},ot,8,st)])]))),128)),t("div",it,[t("button",{type:"button",class:"btn btn-outline-primary",onClick:o[4]||(o[4]=e=>l.tempArticle.tags.push(""))},"新增標籤")])])]),t("div",nt,[dt,a(t("input",{type:"text",id:"title",class:"form-control","onUpdate:modelValue":o[5]||(o[5]=e=>l.tempArticle.title=e)},null,512),[[m,l.tempArticle.title]])]),t("div",ct,[at,a(t("textarea",{name:"",id:"description",cols:"30",rows:"10",class:"form-control","onUpdate:modelValue":o[6]||(o[6]=e=>l.tempArticle.description=e)},null,512),[[m,l.tempArticle.description]])]),t("div",rt,[t("label",mt,c(l.comments.length)+" 則留言",1),(n(!0),d(f,null,g(l.comments,e=>(n(),d("div",{key:e.id,style:{"background-color":"antiquewhite"}},[t("h5",null,[_(c(e.user.nickName)+" ",1),t("span",ut," (使用者id "+c(e.user.id)+") ",1),_("：")]),t("p",null,c(e.message),1)]))),128))]),pt])])])]),t("div",ht,[_t,t("button",{type:"button",class:"btn btn-primary",onClick:o[7]||(o[7]=(...e)=>i.updateProduct&&i.updateProduct(...e))},[l.status==="edit"?(n(),d("span",bt,"確認編輯")):l.status==="new"?(n(),d("span",ft,"確認新增")):x("",!0)])])])])],512)}const At=A($,[["render",gt]]),{VITE_PATH:D}={VITE_PATH:"http://localhost:3000",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},yt={data(){return{tempArticle:{}}},mixins:[E],props:["id","openDeleteModal","getArticles"],methods:{deleteArticle(){this.$http.delete(`${D}/articles/${this.tempArticle.id}`).then(s=>{console.log(s.data),this.getArticles(),this.hide()}).catch(s=>{console.log(s)})}},watch:{id(){this.id&&(console.log(this.id,"改變了"),this.$http.get(`${D}/articles/${this.id}`).then(s=>{this.tempArticle=s.data,console.log(this.tempArticle),this.show(),this.openDeleteModal("")}).catch(s=>{console.log(s)}))}}},vt={class:"modal fade",ref:"modal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},xt={class:"modal-dialog"},wt={class:"modal-content"},Mt=t("div",{class:"modal-header bg-dark"},[t("h5",{class:"modal-title text-white",id:"exampleModalLabel"}," 刪除產品 "),t("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),kt={class:"modal-body"},Dt={class:"text-danger fw-bold"},Et={class:"modal-footer"},Vt=t("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"關閉",-1);function Pt(s,o,r,y,l,i){return n(),d("div",vt,[t("div",xt,[t("div",wt,[Mt,t("div",kt,[t("p",null,[_("確定要刪除文章 "),t("span",Dt," 【"+c(l.tempArticle.title)+"】 ",1),_(" 嗎? ")])]),t("div",Et,[Vt,t("button",{type:"button",class:"btn btn-danger",onClick:o[0]||(o[0]=(...u)=>i.deleteArticle&&i.deleteArticle(...u))}," 確認刪除 ")])])])],512)}const $t=A(yt,[["render",Pt]]),{VITE_PATH:Tt}={VITE_PATH:"http://localhost:3000",BASE_URL:"/finalEasyMakeEasyBuy/",MODE:"production",DEV:!1,PROD:!0},Ct={components:{ArticleModal:At,DeleteArticleModal:$t},data(){return{articles:[],articleId:"",articleDeleteId:""}},methods:{getArticles(){this.$http.get(`${Tt}/articles?_embed=comments&_expand=user`).then(s=>{console.log(s.data),this.articles=s.data}).catch(s=>{console.log(s)})},openModal(s){this.articleId=s},openDeleteModal(s){this.articleDeleteId=s}},mounted(){this.getArticles()}},It={class:"container"},Ut={class:"d-flex my-4"},Bt={class:"table text-center",style:{"vertical-align":"middle"}},Lt=t("thead",null,[t("tr",null,[t("th",null,"文章編號"),t("th",null,"撰寫日期"),t("th",null,"作者"),t("th",null,"標題"),t("th",null,"內容"),t("th",null,"留言數"),t("th",null,"是否公開"),t("th",null,"編輯")])],-1),Ht={style:{"white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis","max-width":"100px"}},Ot={class:"btn-group"},St=["onClick"],Nt=["onClick"];function Rt(s,o,r,y,l,i){const u=k("ArticleModal"),b=k("DeleteArticleModal");return n(),d("div",It,[t("div",Ut,[t("button",{type:"button",class:"ms-auto btn btn-primary",onClick:o[0]||(o[0]=e=>i.openModal("new"))},"建立新文章")]),t("table",Bt,[Lt,t("tbody",null,[(n(!0),d(f,null,g(l.articles,e=>(n(),d("tr",{key:e.id},[t("td",null,c(e.id),1),t("td",null,c(`${new Date(e.createAt).toLocaleString().split(" ")[0]}`),1),t("td",null,c(e.user.nickName),1),t("td",null,c(e.title),1),t("td",Ht,c(e.description),1),t("td",null,c(e.comments.length),1),t("td",{class:P({"text-success":e.isPublic,"fw-bold":e.isPublic})},c(`${e.isPublic?"公開":"不公開"}`),3),t("td",null,[t("div",Ot,[t("button",{type:"button",class:"btn btn-sm btn-outline-primary",onClick:p=>i.openModal(e.id)},"編輯",8,St),t("button",{type:"button",class:"btn btn-sm btn-outline-danger",onClick:p=>i.openDeleteModal(e.id)},"刪除",8,Nt)])])]))),128))])]),M(u,{ref:"productModal",id:l.articleId,"open-modal":i.openModal,"get-articles":i.getArticles,"get-comments":s.getComments},null,8,["id","open-modal","get-articles","get-comments"]),M(b,{ref:"deleteProductModal",id:l.articleDeleteId,"get-articles":i.getArticles,"open-delete-modal":i.openDeleteModal},null,8,["id","get-articles","open-delete-modal"])])}const jt=A(Ct,[["render",Rt]]);export{jt as default};