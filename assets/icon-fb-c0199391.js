import{m as B}from"./modalMixin-84af034f.js";import{m as g,b as Y}from"./axios-19a62447.js";import{c}from"./carts-899b9ccc.js";import{n as C}from"./runtime-dom.esm-bundler-226b1721.js";import{b6 as E,av as p,aj as a,l as i,m as A,s,aJ as b,k as m,t as l,b1 as r,j as k}from"./_plugin-vue_export-helper-31c7975b.js";const O="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGqSURBVHgB7Ze/LwRBFMffm9ljHQm5BKFwBZXCr6gUcr1GIjQKEVFRazSrpdZJaBEJ/4FGK1xEFIiEUIgfCc6d25vnHdGcpx0i71PsZua7s/vdycyb9wAURVEURflDoNS5Mt+bts5uA1E3P4HgFXJs6yguFYemF7NXlaqRhtjYDPPAHv9my2DZU1dg7ZikioYhgGt2WoLfwyHZG0kIpM7axOvO82s4YxAHwKABjyDxQkQ6TFbntkBR/iE/hq0okwma++9TIcZeN90Ht7nHybWLvCTJB8dUZypoDBeI4yHHCK+GOUg4cnhqn3JzE8snd5W6GNZMUzhKgLMfLyDwDJ9WCINUn9znxnKlKs6eQflHfOIIYqlfNFYoPK8nEnV9CKYDDflfEgRZl89vSvqPm241yoTw8tIAnrFUcOd1qfso2o1BUf4h4qaLRjur0h01s46TeE73vFcc/Mm9y7P8WrR5/FapimGtrT05QuCWTDn7915zYDknHk+31zxw41tok0skpBYE9J9DfIFggUyrJImm3krFDb5lPwtCz/DJwdcDwOIOKIqiKIry13kHenR9c3YkU2gAAAAASUVORK5CYII=",U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANNSURBVHgB7ZZBaBNBFIZnJt0km67NbiikCdKIHoTgIbG2EZS2YEU9WLzUQwQLemsPWkHEirLaQ1vQiohF8NCTB5uTqAeRYgotLRW1p4LgoYVChYq2qSUm3c34XpJqD2Z3s+TW/ASS7M6b+ea9t/8OIVVVVdUuk8NsAOeEBn/v9x45+XMrmSSc2JDa3l7TfU6ui57+ljWbgxlOpBI21t9ysYYpE43ppmvjathJytR4316x8ejGEBEd70OZSCdu0Gi8YYa62yNemiNPYYbDlJITWV3wtDU7pt7OpjRiEWbT7X9EKe8hhAYoofVz74IvX0+vZErFGGZoicynKCfPYTId4QGsT3b6743AQsREI0UY+HkJ4hnUScvx3IsV8eOGUZxhhrDe8eZ9n7UaXYREh+GSB3YbdjPJ29ZSOlMIg+CE8l7ICq6hwc4Hat2ZJ73qqmYbCJWYXdbiUCatRvLC3xjsFqBIDKC0aFCZSS6s6jvHP+s/5JeY9xbkvi8PQ8kaz5HBWnd6+Ly6kDVbzxSoAJUqQDEJMxXDOIBqVXyCHu9QZhLJAhT2TA5gOMAU59ahzMNWYSwDbUNFgsqk4nPh4q0YC33RtqULUjSgJDtPuZwO7BlKegrzUh3Ke/3N1wP3745OWnoIygJCYXnizaE56CmNFqHAVVpkn0BFh9QFPXMZQBA03zMehEkk9HLWoMSG0I9+ZcTbsOhNXoDSOeVQRcqwZ+DJfOhxpYeslmmnysrQtrBnLnQo01ndKYGXxwilYAlQIMgMKaOB/ydG7Go9BZvhe3ZeovhhxLucv2dPtgLRZxz/TC/fM5AhfEeheaIliEY+VVGgUqYHIJ/KMc+KABmZnrD5Y9KqeVYEyMz0rJpnRYD+9oyJ6ZmZp5VMmQKpXWFnQ7382KrpGZknQE2bQRkC4QEtVNd4hzN+Zdv0AGY4b3oGr4P8CxnKlNEFBuOPQRyuc1xWhPWocPBDcnExVyrW0IcC6aY9lNIztHie4Tp5YNWBcYzkSg/AARHsAVofoRg5G4qsSUZxhhl6NbWSnZ9o+A6l8hOuD0piZrQcB8ZGjgbkpOxzrAMYYzQ3uFQ7/8Xu2TwvVVXZ2NWIjN/EpjB2/EaT1+w8XVVVVe1K/QFdSYxS1vKIGAAAAABJRU5ErkJggg==";const w={data(){return{}},mixins:[B],methods:{...g(c,["checkLogin","logout"]),closeModal(){this.hide()}},computed:{...Y(c,["nickName","token"])},mounted(){this.checkLogin()}},u={class:"modal fade",ref:"modal",id:"navbarTogglerModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},M={class:"modal-dialog mx-3"},f={class:"modal-content",style:{"border-radius":"20px"}},S=A("div",{class:"modal-header border-0 p-0"},[A("button",{type:"button",class:"ms-auto border-0 bg-transparent p-3","data-bs-dismiss":"modal","aria-label":"Close"},[A("img",{src:U,alt:""})])],-1),h={class:"modal-body p-0 mx-4"},J={key:0,class:"text-center"},x={class:"fw-bold"},D={key:1,class:"text-center"},K={class:"list-unstyled"};function Q(d,e,I,Z,N,t){const n=p("RouterLink");return a(),i("div",u,[A("div",M,[A("div",f,[S,A("div",h,[this.token?(a(),i("p",J,[s("歡迎 "),A("span",x,b(d.nickName),1)])):this.token?m("",!0):(a(),i("p",D,"您尚未登入")),A("ul",K,[A("li",{onClick:e[0]||(e[0]=(...o)=>t.closeModal&&t.closeModal(...o)),class:"text-center border-bottom border-lightBrownGray pb-3"},[l(n,{to:"/recipes",class:"menuLink hvr-underline-from-center"},{default:r(()=>[s("甜點食譜")]),_:1})]),A("li",{onClick:e[1]||(e[1]=(...o)=>t.closeModal&&t.closeModal(...o)),class:"text-center border-bottom border-lightBrownGray p-3"},[l(n,{to:"/products",href:"#",class:"menuLink hvr-underline-from-center"},{default:r(()=>[s("材料購買")]),_:1})]),A("li",{onClick:e[2]||(e[2]=(...o)=>t.closeModal&&t.closeModal(...o)),class:"text-center border-bottom border-lightBrownGray p-3"},[l(n,{to:"/discounts",href:"#",class:"menuLink hvr-underline-from-center"},{default:r(()=>[s("優惠特報")]),_:1})]),A("li",{onClick:e[3]||(e[3]=(...o)=>t.closeModal&&t.closeModal(...o)),class:"text-center pt-3 border-bottom border-lightBrownGray p-3"},[l(n,{to:"/member",class:"menuLink hvr-underline-from-center"},{default:r(()=>[s("會員專區")]),_:1})]),A("li",{onClick:e[5]||(e[5]=(...o)=>t.closeModal&&t.closeModal(...o)),class:"text-center pt-3 p-3"},[this.token?this.token?(a(),i("a",{key:1,href:"#",onClick:e[4]||(e[4]=C((...o)=>d.logout&&d.logout(...o),["prevent"])),class:"text-decoration-none link-brown border-0 me-1 d-lg-none",style:{"font-size":"14px"}}," 登出 / ")):m("",!0):(a(),k(n,{key:0,to:"/loginSignup/login",class:"text-decoration-none link-brown border-0 me-1 d-lg-none",style:{"font-size":"14px"}},{default:r(()=>[s(" 登入 / ")]),_:1})),l(n,{to:"/loginSignup/signup",class:"btn border-0 d-lg-none btn-lightBrown badge rounded-pill",style:{"font-size":"14px"}},{default:r(()=>[s(" 註冊 ")]),_:1})])])])])])],512)}const R=E(w,[["render",Q]]),F="data:image/png;base64,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",y="data:image/png;base64,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";export{R as M,U as _,F as a,y as b,O as t};
