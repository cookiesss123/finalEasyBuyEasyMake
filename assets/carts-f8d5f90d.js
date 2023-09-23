import{c as Me,d as Sh,r as So}from"./index-313a8faa.js";var vs={},kh={get exports(){return vs},set exports(n){vs=n}};/*!
* sweetalert2 v11.7.3
* Released under the MIT License.
*/(function(n,e){(function(t,i){n.exports=i()})(Me,function(){var t={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const i="swal2-",s=o=>{const a={};for(const c in o)a[o[c]]=i+o[c];return a},r=s(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),l=s(["success","warning","info","question","error"]),u="SweetAlert2:",d=o=>{const a=[];for(let c=0;c<o.length;c++)a.indexOf(o[c])===-1&&a.push(o[c]);return a},h=o=>o.charAt(0).toUpperCase()+o.slice(1),p=o=>{console.warn(`${u} ${typeof o=="object"?o.join(" "):o}`)},g=o=>{console.error(`${u} ${o}`)},_=[],v=o=>{_.includes(o)||(_.push(o),p(o))},w=(o,a)=>{v(`"${o}" is deprecated and will be removed in the next major release. Please use "${a}" instead.`)},A=o=>typeof o=="function"?o():o,F=o=>o&&typeof o.toPromise=="function",X=o=>F(o)?o.toPromise():Promise.resolve(o),de=o=>o&&Promise.resolve(o)===o,B=()=>document.body.querySelector(`.${r.container}`),ye=o=>{const a=B();return a?a.querySelector(o):null},K=o=>ye(`.${o}`),R=()=>K(r.popup),Oe=()=>K(r.icon),Ui=()=>K(r["icon-content"]),pt=()=>K(r.title),gt=()=>K(r["html-container"]),Hr=()=>K(r.image),Wi=()=>K(r["progress-steps"]),Ln=()=>K(r["validation-message"]),he=()=>ye(`.${r.actions} .${r.confirm}`),Ye=()=>ye(`.${r.actions} .${r.cancel}`),De=()=>ye(`.${r.actions} .${r.deny}`),Hc=()=>K(r["input-label"]),_t=()=>ye(`.${r.loader}`),Xt=()=>K(r.actions),$r=()=>K(r.footer),Fn=()=>K(r["timer-progress-bar"]),Hi=()=>K(r.close),$c=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,$i=()=>{const o=Array.from(R().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((c,f)=>{const m=parseInt(c.getAttribute("tabindex")),E=parseInt(f.getAttribute("tabindex"));return m>E?1:m<E?-1:0}),a=Array.from(R().querySelectorAll($c)).filter(c=>c.getAttribute("tabindex")!=="-1");return d(o.concat(a)).filter(c=>ae(c))},Vi=()=>be(document.body,r.shown)&&!be(document.body,r["toast-shown"])&&!be(document.body,r["no-backdrop"]),Bn=()=>R()&&be(R(),r.toast),Vc=()=>R().hasAttribute("data-loading"),mt={previousBodyPadding:null},oe=(o,a)=>{if(o.textContent="",a){const f=new DOMParser().parseFromString(a,"text/html");Array.from(f.querySelector("head").childNodes).forEach(m=>{o.appendChild(m)}),Array.from(f.querySelector("body").childNodes).forEach(m=>{m instanceof HTMLVideoElement||m instanceof HTMLAudioElement?o.appendChild(m.cloneNode(!0)):o.appendChild(m)})}},be=(o,a)=>{if(!a)return!1;const c=a.split(/\s+/);for(let f=0;f<c.length;f++)if(!o.classList.contains(c[f]))return!1;return!0},jc=(o,a)=>{Array.from(o.classList).forEach(c=>{!Object.values(r).includes(c)&&!Object.values(l).includes(c)&&!Object.values(a.showClass).includes(c)&&o.classList.remove(c)})},ce=(o,a,c)=>{if(jc(o,a),a.customClass&&a.customClass[c]){if(typeof a.customClass[c]!="string"&&!a.customClass[c].forEach){p(`Invalid type of customClass.${c}! Expected string or iterable object, got "${typeof a.customClass[c]}"`);return}P(o,a.customClass[c])}},ji=(o,a)=>{if(!a)return null;switch(a){case"select":case"textarea":case"file":return o.querySelector(`.${r.popup} > .${r[a]}`);case"checkbox":return o.querySelector(`.${r.popup} > .${r.checkbox} input`);case"radio":return o.querySelector(`.${r.popup} > .${r.radio} input:checked`)||o.querySelector(`.${r.popup} > .${r.radio} input:first-child`);case"range":return o.querySelector(`.${r.popup} > .${r.range} input`);default:return o.querySelector(`.${r.popup} > .${r.input}`)}},Vr=o=>{if(o.focus(),o.type!=="file"){const a=o.value;o.value="",o.value=a}},jr=(o,a,c)=>{!o||!a||(typeof a=="string"&&(a=a.split(/\s+/).filter(Boolean)),a.forEach(f=>{Array.isArray(o)?o.forEach(m=>{c?m.classList.add(f):m.classList.remove(f)}):c?o.classList.add(f):o.classList.remove(f)}))},P=(o,a)=>{jr(o,a,!0)},ve=(o,a)=>{jr(o,a,!1)},xe=(o,a)=>{const c=Array.from(o.children);for(let f=0;f<c.length;f++){const m=c[f];if(m instanceof HTMLElement&&be(m,a))return m}},yt=(o,a,c)=>{c===`${parseInt(c)}`&&(c=parseInt(c)),c||parseInt(c)===0?o.style[a]=typeof c=="number"?`${c}px`:c:o.style.removeProperty(a)},q=function(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";o.style.display=a},Y=o=>{o.style.display="none"},qr=(o,a,c,f)=>{const m=o.querySelector(a);m&&(m.style[c]=f)},Un=function(o,a){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";a?q(o,c):Y(o)},ae=o=>!!(o&&(o.offsetWidth||o.offsetHeight||o.getClientRects().length)),qc=()=>!ae(he())&&!ae(De())&&!ae(Ye()),zr=o=>o.scrollHeight>o.clientHeight,Gr=o=>{const a=window.getComputedStyle(o),c=parseFloat(a.getPropertyValue("animation-duration")||"0"),f=parseFloat(a.getPropertyValue("transition-duration")||"0");return c>0||f>0},qi=function(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const c=Fn();ae(c)&&(a&&(c.style.transition="none",c.style.width="100%"),setTimeout(()=>{c.style.transition=`width ${o/1e3}s linear`,c.style.width="0%"},10))},zc=()=>{const o=Fn(),a=parseInt(window.getComputedStyle(o).width);o.style.removeProperty("transition"),o.style.width="100%";const c=parseInt(window.getComputedStyle(o).width),f=a/c*100;o.style.width=`${f}%`},Gc=100,S={},Kc=()=>{S.previousActiveElement instanceof HTMLElement?(S.previousActiveElement.focus(),S.previousActiveElement=null):document.body&&document.body.focus()},Yc=o=>new Promise(a=>{if(!o)return a();const c=window.scrollX,f=window.scrollY;S.restoreFocusTimeout=setTimeout(()=>{Kc(),a()},Gc),window.scrollTo(c,f)}),Kr=()=>typeof window>"u"||typeof document>"u",Qc=`
 <div aria-labelledby="${r.title}" aria-describedby="${r["html-container"]}" class="${r.popup}" tabindex="-1">
   <button type="button" class="${r.close}"></button>
   <ul class="${r["progress-steps"]}"></ul>
   <div class="${r.icon}"></div>
   <img class="${r.image}" />
   <h2 class="${r.title}" id="${r.title}"></h2>
   <div class="${r["html-container"]}" id="${r["html-container"]}"></div>
   <input class="${r.input}" />
   <input type="file" class="${r.file}" />
   <div class="${r.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${r.select}"></select>
   <div class="${r.radio}"></div>
   <label for="${r.checkbox}" class="${r.checkbox}">
     <input type="checkbox" />
     <span class="${r.label}"></span>
   </label>
   <textarea class="${r.textarea}"></textarea>
   <div class="${r["validation-message"]}" id="${r["validation-message"]}"></div>
   <div class="${r.actions}">
     <div class="${r.loader}"></div>
     <button type="button" class="${r.confirm}"></button>
     <button type="button" class="${r.deny}"></button>
     <button type="button" class="${r.cancel}"></button>
   </div>
   <div class="${r.footer}"></div>
   <div class="${r["timer-progress-bar-container"]}">
     <div class="${r["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Jc=()=>{const o=B();return o?(o.remove(),ve([document.documentElement,document.body],[r["no-backdrop"],r["toast-shown"],r["has-column"]]),!0):!1},Qe=()=>{S.currentInstance.resetValidationMessage()},Xc=()=>{const o=R(),a=xe(o,r.input),c=xe(o,r.file),f=o.querySelector(`.${r.range} input`),m=o.querySelector(`.${r.range} output`),E=xe(o,r.select),x=o.querySelector(`.${r.checkbox} input`),le=xe(o,r.textarea);a.oninput=Qe,c.onchange=Qe,E.onchange=Qe,x.onchange=Qe,le.oninput=Qe,f.oninput=()=>{Qe(),m.value=f.value},f.onchange=()=>{Qe(),m.value=f.value}},Zc=o=>typeof o=="string"?document.querySelector(o):o,eu=o=>{const a=R();a.setAttribute("role",o.toast?"alert":"dialog"),a.setAttribute("aria-live",o.toast?"polite":"assertive"),o.toast||a.setAttribute("aria-modal","true")},tu=o=>{window.getComputedStyle(o).direction==="rtl"&&P(B(),r.rtl)},nu=o=>{const a=Jc();if(Kr()){g("SweetAlert2 requires document to initialize");return}const c=document.createElement("div");c.className=r.container,a&&P(c,r["no-transition"]),oe(c,Qc);const f=Zc(o.target);f.appendChild(c),eu(o),tu(f),Xc()},zi=(o,a)=>{o instanceof HTMLElement?a.appendChild(o):typeof o=="object"?iu(o,a):o&&oe(a,o)},iu=(o,a)=>{o.jquery?su(a,o):oe(a,o.toString())},su=(o,a)=>{if(o.textContent="",0 in a)for(let c=0;c in a;c++)o.appendChild(a[c].cloneNode(!0));else o.appendChild(a.cloneNode(!0))},Zt=(()=>{if(Kr())return!1;const o=document.createElement("div"),a={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const c in a)if(Object.prototype.hasOwnProperty.call(a,c)&&typeof o.style[c]<"u")return a[c];return!1})(),ru=()=>{const o=document.createElement("div");o.className=r["scrollbar-measure"],document.body.appendChild(o);const a=o.getBoundingClientRect().width-o.clientWidth;return document.body.removeChild(o),a},ou=(o,a)=>{const c=Xt(),f=_t();!a.showConfirmButton&&!a.showDenyButton&&!a.showCancelButton?Y(c):q(c),ce(c,a,"actions"),au(c,f,a),oe(f,a.loaderHtml),ce(f,a,"loader")};function au(o,a,c){const f=he(),m=De(),E=Ye();Gi(f,"confirm",c),Gi(m,"deny",c),Gi(E,"cancel",c),lu(f,m,E,c),c.reverseButtons&&(c.toast?(o.insertBefore(E,f),o.insertBefore(m,f)):(o.insertBefore(E,a),o.insertBefore(m,a),o.insertBefore(f,a)))}function lu(o,a,c,f){if(!f.buttonsStyling){ve([o,a,c],r.styled);return}P([o,a,c],r.styled),f.confirmButtonColor&&(o.style.backgroundColor=f.confirmButtonColor,P(o,r["default-outline"])),f.denyButtonColor&&(a.style.backgroundColor=f.denyButtonColor,P(a,r["default-outline"])),f.cancelButtonColor&&(c.style.backgroundColor=f.cancelButtonColor,P(c,r["default-outline"]))}function Gi(o,a,c){Un(o,c[`show${h(a)}Button`],"inline-block"),oe(o,c[`${a}ButtonText`]),o.setAttribute("aria-label",c[`${a}ButtonAriaLabel`]),o.className=r[a],ce(o,c,`${a}Button`),P(o,c[`${a}ButtonClass`])}const cu=(o,a)=>{const c=Hi();oe(c,a.closeButtonHtml),ce(c,a,"closeButton"),Un(c,a.showCloseButton),c.setAttribute("aria-label",a.closeButtonAriaLabel)},uu=(o,a)=>{const c=B();c&&(du(c,a.backdrop),hu(c,a.position),fu(c,a.grow),ce(c,a,"container"))};function du(o,a){typeof a=="string"?o.style.background=a:a||P([document.documentElement,document.body],r["no-backdrop"])}function hu(o,a){a in r?P(o,r[a]):(p('The "position" parameter is not valid, defaulting to "center"'),P(o,r.center))}function fu(o,a){if(a&&typeof a=="string"){const c=`grow-${a}`;c in r&&P(o,r[c])}}const pu=["input","file","range","select","radio","checkbox","textarea"],gu=(o,a)=>{const c=R(),f=t.innerParams.get(o),m=!f||a.input!==f.input;pu.forEach(E=>{const x=xe(c,r[E]);yu(E,a.inputAttributes),x.className=r[E],m&&Y(x)}),a.input&&(m&&_u(a),vu(a))},_u=o=>{if(!te[o.input]){g(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${o.input}"`);return}const a=Yr(o.input),c=te[o.input](a,o);q(a),o.inputAutoFocus&&setTimeout(()=>{Vr(c)})},mu=o=>{for(let a=0;a<o.attributes.length;a++){const c=o.attributes[a].name;["type","value","style"].includes(c)||o.removeAttribute(c)}},yu=(o,a)=>{const c=ji(R(),o);if(c){mu(c);for(const f in a)c.setAttribute(f,a[f])}},vu=o=>{const a=Yr(o.input);typeof o.customClass=="object"&&P(a,o.customClass.input)},Ki=(o,a)=>{(!o.placeholder||a.inputPlaceholder)&&(o.placeholder=a.inputPlaceholder)},en=(o,a,c)=>{if(c.inputLabel){o.id=r.input;const f=document.createElement("label"),m=r["input-label"];f.setAttribute("for",o.id),f.className=m,typeof c.customClass=="object"&&P(f,c.customClass.inputLabel),f.innerText=c.inputLabel,a.insertAdjacentElement("beforebegin",f)}},Yr=o=>xe(R(),r[o]||r.input),Wn=(o,a)=>{["string","number"].includes(typeof a)?o.value=`${a}`:de(a)||p(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof a}"`)},te={};te.text=te.email=te.password=te.number=te.tel=te.url=(o,a)=>(Wn(o,a.inputValue),en(o,o,a),Ki(o,a),o.type=a.input,o),te.file=(o,a)=>(en(o,o,a),Ki(o,a),o),te.range=(o,a)=>{const c=o.querySelector("input"),f=o.querySelector("output");return Wn(c,a.inputValue),c.type=a.input,Wn(f,a.inputValue),en(c,o,a),o},te.select=(o,a)=>{if(o.textContent="",a.inputPlaceholder){const c=document.createElement("option");oe(c,a.inputPlaceholder),c.value="",c.disabled=!0,c.selected=!0,o.appendChild(c)}return en(o,o,a),o},te.radio=o=>(o.textContent="",o),te.checkbox=(o,a)=>{const c=ji(R(),"checkbox");c.value="1",c.id=r.checkbox,c.checked=Boolean(a.inputValue);const f=o.querySelector("span");return oe(f,a.inputPlaceholder),c},te.textarea=(o,a)=>{Wn(o,a.inputValue),Ki(o,a),en(o,o,a);const c=f=>parseInt(window.getComputedStyle(f).marginLeft)+parseInt(window.getComputedStyle(f).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const f=parseInt(window.getComputedStyle(R()).width),m=()=>{const E=o.offsetWidth+c(o);E>f?R().style.width=`${E}px`:R().style.width=null};new MutationObserver(m).observe(o,{attributes:!0,attributeFilter:["style"]})}}),o};const wu=(o,a)=>{const c=gt();ce(c,a,"htmlContainer"),a.html?(zi(a.html,c),q(c,"block")):a.text?(c.textContent=a.text,q(c,"block")):Y(c),gu(o,a)},Eu=(o,a)=>{const c=$r();Un(c,a.footer),a.footer&&zi(a.footer,c),ce(c,a,"footer")},Cu=(o,a)=>{const c=t.innerParams.get(o),f=Oe();if(c&&a.icon===c.icon){Jr(f,a),Qr(f,a);return}if(!a.icon&&!a.iconHtml){Y(f);return}if(a.icon&&Object.keys(l).indexOf(a.icon)===-1){g(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${a.icon}"`),Y(f);return}q(f),Jr(f,a),Qr(f,a),P(f,a.showClass.icon)},Qr=(o,a)=>{for(const c in l)a.icon!==c&&ve(o,l[c]);P(o,l[a.icon]),Su(o,a),Iu(),ce(o,a,"icon")},Iu=()=>{const o=R(),a=window.getComputedStyle(o).getPropertyValue("background-color"),c=o.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let f=0;f<c.length;f++)c[f].style.backgroundColor=a},bu=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Tu=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Jr=(o,a)=>{let c=o.innerHTML,f;a.iconHtml?f=Xr(a.iconHtml):a.icon==="success"?(f=bu,c=c.replace(/ style=".*?"/g,"")):a.icon==="error"?f=Tu:f=Xr({question:"?",warning:"!",info:"i"}[a.icon]),c.trim()!==f.trim()&&oe(o,f)},Su=(o,a)=>{if(a.iconColor){o.style.color=a.iconColor,o.style.borderColor=a.iconColor;for(const c of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])qr(o,c,"backgroundColor",a.iconColor);qr(o,".swal2-success-ring","borderColor",a.iconColor)}},Xr=o=>`<div class="${r["icon-content"]}">${o}</div>`,ku=(o,a)=>{const c=Hr();if(!a.imageUrl){Y(c);return}q(c,""),c.setAttribute("src",a.imageUrl),c.setAttribute("alt",a.imageAlt),yt(c,"width",a.imageWidth),yt(c,"height",a.imageHeight),c.className=r.image,ce(c,a,"image")},Au=(o,a)=>{const c=B(),f=R();a.toast?(yt(c,"width",a.width),f.style.width="100%",f.insertBefore(_t(),Oe())):yt(f,"width",a.width),yt(f,"padding",a.padding),a.color&&(f.style.color=a.color),a.background&&(f.style.background=a.background),Y(Ln()),Ru(f,a)},Ru=(o,a)=>{o.className=`${r.popup} ${ae(o)?a.showClass.popup:""}`,a.toast?(P([document.documentElement,document.body],r["toast-shown"]),P(o,r.toast)):P(o,r.modal),ce(o,a,"popup"),typeof a.customClass=="string"&&P(o,a.customClass),a.icon&&P(o,r[`icon-${a.icon}`])},Pu=(o,a)=>{const c=Wi();if(!a.progressSteps||a.progressSteps.length===0){Y(c);return}q(c),c.textContent="",a.currentProgressStep>=a.progressSteps.length&&p("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),a.progressSteps.forEach((f,m)=>{const E=Nu(f);if(c.appendChild(E),m===a.currentProgressStep&&P(E,r["active-progress-step"]),m!==a.progressSteps.length-1){const x=Ou(a);c.appendChild(x)}})},Nu=o=>{const a=document.createElement("li");return P(a,r["progress-step"]),oe(a,o),a},Ou=o=>{const a=document.createElement("li");return P(a,r["progress-step-line"]),o.progressStepsDistance&&yt(a,"width",o.progressStepsDistance),a},Du=(o,a)=>{const c=pt();Un(c,a.title||a.titleText,"block"),a.title&&zi(a.title,c),a.titleText&&(c.innerText=a.titleText),ce(c,a,"title")},Zr=(o,a)=>{Au(o,a),uu(o,a),Pu(o,a),Cu(o,a),ku(o,a),Du(o,a),cu(o,a),wu(o,a),ou(o,a),Eu(o,a),typeof a.didRender=="function"&&a.didRender(R())};function eo(){const o=t.innerParams.get(this);if(!o)return;const a=t.domCache.get(this);Y(a.loader),Bn()?o.icon&&q(Oe()):xu(a),ve([a.popup,a.actions],r.loading),a.popup.removeAttribute("aria-busy"),a.popup.removeAttribute("data-loading"),a.confirmButton.disabled=!1,a.denyButton.disabled=!1,a.cancelButton.disabled=!1}const xu=o=>{const a=o.popup.getElementsByClassName(o.loader.getAttribute("data-button-to-replace"));a.length?q(a[0],"inline-block"):qc()&&Y(o.actions)};function Mu(o){const a=t.innerParams.get(o||this),c=t.domCache.get(o||this);return c?ji(c.popup,a.input):null}const Lu=()=>ae(R()),to=()=>he()&&he().click(),Fu=()=>De()&&De().click(),Bu=()=>Ye()&&Ye().click(),vt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),no=o=>{o.keydownTarget&&o.keydownHandlerAdded&&(o.keydownTarget.removeEventListener("keydown",o.keydownHandler,{capture:o.keydownListenerCapture}),o.keydownHandlerAdded=!1)},Uu=(o,a,c,f)=>{no(a),c.toast||(a.keydownHandler=m=>Hu(o,m,f),a.keydownTarget=c.keydownListenerCapture?window:R(),a.keydownListenerCapture=c.keydownListenerCapture,a.keydownTarget.addEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!0)},Yi=(o,a)=>{const c=$i();if(c.length){o=o+a,o===c.length?o=0:o===-1&&(o=c.length-1),c[o].focus();return}R().focus()},io=["ArrowRight","ArrowDown"],Wu=["ArrowLeft","ArrowUp"],Hu=(o,a,c)=>{const f=t.innerParams.get(o);f&&(a.isComposing||a.keyCode===229||(f.stopKeydownPropagation&&a.stopPropagation(),a.key==="Enter"?$u(o,a,f):a.key==="Tab"?Vu(a):[...io,...Wu].includes(a.key)?ju(a.key):a.key==="Escape"&&qu(a,f,c)))},$u=(o,a,c)=>{if(A(c.allowEnterKey)&&a.target&&o.getInput()&&a.target instanceof HTMLElement&&a.target.outerHTML===o.getInput().outerHTML){if(["textarea","file"].includes(c.input))return;to(),a.preventDefault()}},Vu=o=>{const a=o.target,c=$i();let f=-1;for(let m=0;m<c.length;m++)if(a===c[m]){f=m;break}o.shiftKey?Yi(f,-1):Yi(f,1),o.stopPropagation(),o.preventDefault()},ju=o=>{const a=he(),c=De(),f=Ye(),m=[a,c,f];if(document.activeElement instanceof HTMLElement&&!m.includes(document.activeElement))return;const E=io.includes(o)?"nextElementSibling":"previousElementSibling";let x=document.activeElement;for(let le=0;le<Xt().children.length;le++){if(x=x[E],!x)return;if(x instanceof HTMLButtonElement&&ae(x))break}x instanceof HTMLButtonElement&&x.focus()},qu=(o,a,c)=>{A(a.allowEscapeKey)&&(o.preventDefault(),c(vt.esc))};var tn={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const zu=()=>{Array.from(document.body.children).forEach(a=>{a===B()||a.contains(B())||(a.hasAttribute("aria-hidden")&&a.setAttribute("data-previous-aria-hidden",a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))})},so=()=>{Array.from(document.body.children).forEach(a=>{a.hasAttribute("data-previous-aria-hidden")?(a.setAttribute("aria-hidden",a.getAttribute("data-previous-aria-hidden")),a.removeAttribute("data-previous-aria-hidden")):a.removeAttribute("aria-hidden")})},Gu=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!be(document.body,r.iosfix)){const a=document.body.scrollTop;document.body.style.top=`${a*-1}px`,P(document.body,r.iosfix),Yu(),Ku()}},Ku=()=>{const o=navigator.userAgent,a=!!o.match(/iPad/i)||!!o.match(/iPhone/i),c=!!o.match(/WebKit/i);a&&c&&!o.match(/CriOS/i)&&R().scrollHeight>window.innerHeight-44&&(B().style.paddingBottom=`${44}px`)},Yu=()=>{const o=B();let a;o.ontouchstart=c=>{a=Qu(c)},o.ontouchmove=c=>{a&&(c.preventDefault(),c.stopPropagation())}},Qu=o=>{const a=o.target,c=B();return Ju(o)||Xu(o)?!1:a===c||!zr(c)&&a instanceof HTMLElement&&a.tagName!=="INPUT"&&a.tagName!=="TEXTAREA"&&!(zr(gt())&&gt().contains(a))},Ju=o=>o.touches&&o.touches.length&&o.touches[0].touchType==="stylus",Xu=o=>o.touches&&o.touches.length>1,Zu=()=>{if(be(document.body,r.iosfix)){const o=parseInt(document.body.style.top,10);ve(document.body,r.iosfix),document.body.style.top="",document.body.scrollTop=o*-1}},ed=()=>{mt.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(mt.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${mt.previousBodyPadding+ru()}px`)},td=()=>{mt.previousBodyPadding!==null&&(document.body.style.paddingRight=`${mt.previousBodyPadding}px`,mt.previousBodyPadding=null)};function ro(o,a,c,f){Bn()?oo(o,f):(Yc(c).then(()=>oo(o,f)),no(S)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(a.setAttribute("style","display:none !important"),a.removeAttribute("class"),a.innerHTML=""):a.remove(),Vi()&&(td(),Zu(),so()),nd()}function nd(){ve([document.documentElement,document.body],[r.shown,r["height-auto"],r["no-backdrop"],r["toast-shown"]])}function Hn(o){o=od(o);const a=tn.swalPromiseResolve.get(this),c=sd(this);this.isAwaitingPromise()?o.isDismissed||(nn(this),a(o)):c&&a(o)}function id(){return!!t.awaitingPromise.get(this)}const sd=o=>{const a=R();if(!a)return!1;const c=t.innerParams.get(o);if(!c||be(a,c.hideClass.popup))return!1;ve(a,c.showClass.popup),P(a,c.hideClass.popup);const f=B();return ve(f,c.showClass.backdrop),P(f,c.hideClass.backdrop),ad(o,a,c),!0};function rd(o){const a=tn.swalPromiseReject.get(this);nn(this),a&&a(o)}const nn=o=>{o.isAwaitingPromise()&&(t.awaitingPromise.delete(o),t.innerParams.get(o)||o._destroy())},od=o=>typeof o>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},o),ad=(o,a,c)=>{const f=B(),m=Zt&&Gr(a);typeof c.willClose=="function"&&c.willClose(a),m?ld(o,a,f,c.returnFocus,c.didClose):ro(o,f,c.returnFocus,c.didClose)},ld=(o,a,c,f,m)=>{S.swalCloseEventFinishedCallback=ro.bind(null,o,c,f,m),a.addEventListener(Zt,function(E){E.target===a&&(S.swalCloseEventFinishedCallback(),delete S.swalCloseEventFinishedCallback)})},oo=(o,a)=>{setTimeout(()=>{typeof a=="function"&&a.bind(o.params)(),o._destroy()})};function ao(o,a,c){const f=t.domCache.get(o);a.forEach(m=>{f[m].disabled=c})}function lo(o,a){if(o)if(o.type==="radio"){const f=o.parentNode.parentNode.querySelectorAll("input");for(let m=0;m<f.length;m++)f[m].disabled=a}else o.disabled=a}function cd(){ao(this,["confirmButton","denyButton","cancelButton"],!1)}function ud(){ao(this,["confirmButton","denyButton","cancelButton"],!0)}function dd(){lo(this.getInput(),!1)}function hd(){lo(this.getInput(),!0)}function fd(o){const a=t.domCache.get(this),c=t.innerParams.get(this);oe(a.validationMessage,o),a.validationMessage.className=r["validation-message"],c.customClass&&c.customClass.validationMessage&&P(a.validationMessage,c.customClass.validationMessage),q(a.validationMessage);const f=this.getInput();f&&(f.setAttribute("aria-invalid",!0),f.setAttribute("aria-describedby",r["validation-message"]),Vr(f),P(f,r.inputerror))}function pd(){const o=t.domCache.get(this);o.validationMessage&&Y(o.validationMessage);const a=this.getInput();a&&(a.removeAttribute("aria-invalid"),a.removeAttribute("aria-describedby"),ve(a,r.inputerror))}const wt={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},gd=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],_d={},md=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],co=o=>Object.prototype.hasOwnProperty.call(wt,o),uo=o=>gd.indexOf(o)!==-1,Qi=o=>_d[o],yd=o=>{co(o)||p(`Unknown parameter "${o}"`)},vd=o=>{md.includes(o)&&p(`The parameter "${o}" is incompatible with toasts`)},wd=o=>{Qi(o)&&w(o,Qi(o))},Ed=o=>{o.backdrop===!1&&o.allowOutsideClick&&p('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const a in o)yd(a),o.toast&&vd(a),wd(a)};function Cd(o){const a=R(),c=t.innerParams.get(this);if(!a||be(a,c.hideClass.popup)){p("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const f=Id(o),m=Object.assign({},c,f);Zr(this,m),t.innerParams.set(this,m),Object.defineProperties(this,{params:{value:Object.assign({},this.params,o),writable:!1,enumerable:!0}})}const Id=o=>{const a={};return Object.keys(o).forEach(c=>{uo(c)?a[c]=o[c]:p(`Invalid parameter to update: ${c}`)}),a};function bd(){const o=t.domCache.get(this),a=t.innerParams.get(this);if(!a){ho(this);return}o.popup&&S.swalCloseEventFinishedCallback&&(S.swalCloseEventFinishedCallback(),delete S.swalCloseEventFinishedCallback),typeof a.didDestroy=="function"&&a.didDestroy(),Td(this)}const Td=o=>{ho(o),delete o.params,delete S.keydownHandler,delete S.keydownTarget,delete S.currentInstance},ho=o=>{o.isAwaitingPromise()?(Ji(t,o),t.awaitingPromise.set(o,!0)):(Ji(tn,o),Ji(t,o))},Ji=(o,a)=>{for(const c in o)o[c].delete(a)};var fo=Object.freeze({__proto__:null,_destroy:bd,close:Hn,closeModal:Hn,closePopup:Hn,closeToast:Hn,disableButtons:ud,disableInput:hd,disableLoading:eo,enableButtons:cd,enableInput:dd,getInput:Mu,handleAwaitingPromise:nn,hideLoading:eo,isAwaitingPromise:id,rejectPromise:rd,resetValidationMessage:pd,showValidationMessage:fd,update:Cd});const Et=o=>{let a=R();a||new Vn,a=R();const c=_t();Bn()?Y(Oe()):Sd(a,o),q(c),a.setAttribute("data-loading","true"),a.setAttribute("aria-busy","true"),a.focus()},Sd=(o,a)=>{const c=Xt(),f=_t();!a&&ae(he())&&(a=he()),q(c),a&&(Y(a),f.setAttribute("data-button-to-replace",a.className)),f.parentNode.insertBefore(f,a),P([o,c],r.loading)},kd=(o,a)=>{a.input==="select"||a.input==="radio"?Od(o,a):["text","email","number","tel","textarea"].includes(a.input)&&(F(a.inputValue)||de(a.inputValue))&&(Et(he()),Dd(o,a))},Ad=(o,a)=>{const c=o.getInput();if(!c)return null;switch(a.input){case"checkbox":return Rd(c);case"radio":return Pd(c);case"file":return Nd(c);default:return a.inputAutoTrim?c.value.trim():c.value}},Rd=o=>o.checked?1:0,Pd=o=>o.checked?o.value:null,Nd=o=>o.files.length?o.getAttribute("multiple")!==null?o.files:o.files[0]:null,Od=(o,a)=>{const c=R(),f=m=>{xd[a.input](c,Xi(m),a)};F(a.inputOptions)||de(a.inputOptions)?(Et(he()),X(a.inputOptions).then(m=>{o.hideLoading(),f(m)})):typeof a.inputOptions=="object"?f(a.inputOptions):g(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof a.inputOptions}`)},Dd=(o,a)=>{const c=o.getInput();Y(c),X(a.inputValue).then(f=>{c.value=a.input==="number"?`${parseFloat(f)||0}`:`${f}`,q(c),c.focus(),o.hideLoading()}).catch(f=>{g(`Error in inputValue promise: ${f}`),c.value="",q(c),c.focus(),o.hideLoading()})},xd={select:(o,a,c)=>{const f=xe(o,r.select),m=(E,x,le)=>{const Z=document.createElement("option");Z.value=le,oe(Z,x),Z.selected=po(le,c.inputValue),E.appendChild(Z)};a.forEach(E=>{const x=E[0],le=E[1];if(Array.isArray(le)){const Z=document.createElement("optgroup");Z.label=x,Z.disabled=!1,f.appendChild(Z),le.forEach(It=>m(Z,It[1],It[0]))}else m(f,le,x)}),f.focus()},radio:(o,a,c)=>{const f=xe(o,r.radio);a.forEach(E=>{const x=E[0],le=E[1],Z=document.createElement("input"),It=document.createElement("label");Z.type="radio",Z.name=r.radio,Z.value=x,po(x,c.inputValue)&&(Z.checked=!0);const ns=document.createElement("span");oe(ns,le),ns.className=r.label,It.appendChild(Z),It.appendChild(ns),f.appendChild(It)});const m=f.querySelectorAll("input");m.length&&m[0].focus()}},Xi=o=>{const a=[];return typeof Map<"u"&&o instanceof Map?o.forEach((c,f)=>{let m=c;typeof m=="object"&&(m=Xi(m)),a.push([f,m])}):Object.keys(o).forEach(c=>{let f=o[c];typeof f=="object"&&(f=Xi(f)),a.push([c,f])}),a},po=(o,a)=>a&&a.toString()===o.toString(),Md=o=>{const a=t.innerParams.get(o);o.disableButtons(),a.input?go(o,"confirm"):es(o,!0)},Ld=o=>{const a=t.innerParams.get(o);o.disableButtons(),a.returnInputValueOnDeny?go(o,"deny"):Zi(o,!1)},Fd=(o,a)=>{o.disableButtons(),a(vt.cancel)},go=(o,a)=>{const c=t.innerParams.get(o);if(!c.input){g(`The "input" parameter is needed to be set when using returnInputValueOn${h(a)}`);return}const f=Ad(o,c);c.inputValidator?Bd(o,f,a):o.getInput().checkValidity()?a==="deny"?Zi(o,f):es(o,f):(o.enableButtons(),o.showValidationMessage(c.validationMessage))},Bd=(o,a,c)=>{const f=t.innerParams.get(o);o.disableInput(),Promise.resolve().then(()=>X(f.inputValidator(a,f.validationMessage))).then(E=>{o.enableButtons(),o.enableInput(),E?o.showValidationMessage(E):c==="deny"?Zi(o,a):es(o,a)})},Zi=(o,a)=>{const c=t.innerParams.get(o||void 0);c.showLoaderOnDeny&&Et(De()),c.preDeny?(t.awaitingPromise.set(o||void 0,!0),Promise.resolve().then(()=>X(c.preDeny(a,c.validationMessage))).then(m=>{m===!1?(o.hideLoading(),nn(o)):o.close({isDenied:!0,value:typeof m>"u"?a:m})}).catch(m=>mo(o||void 0,m))):o.close({isDenied:!0,value:a})},_o=(o,a)=>{o.close({isConfirmed:!0,value:a})},mo=(o,a)=>{o.rejectPromise(a)},es=(o,a)=>{const c=t.innerParams.get(o||void 0);c.showLoaderOnConfirm&&Et(),c.preConfirm?(o.resetValidationMessage(),t.awaitingPromise.set(o||void 0,!0),Promise.resolve().then(()=>X(c.preConfirm(a,c.validationMessage))).then(m=>{ae(Ln())||m===!1?(o.hideLoading(),nn(o)):_o(o,typeof m>"u"?a:m)}).catch(m=>mo(o||void 0,m))):_o(o,a)},Ud=(o,a,c)=>{t.innerParams.get(o).toast?Wd(o,a,c):($d(a),Vd(a),jd(o,a,c))},Wd=(o,a,c)=>{a.popup.onclick=()=>{const f=t.innerParams.get(o);f&&(Hd(f)||f.timer||f.input)||c(vt.close)}},Hd=o=>o.showConfirmButton||o.showDenyButton||o.showCancelButton||o.showCloseButton;let $n=!1;const $d=o=>{o.popup.onmousedown=()=>{o.container.onmouseup=function(a){o.container.onmouseup=void 0,a.target===o.container&&($n=!0)}}},Vd=o=>{o.container.onmousedown=()=>{o.popup.onmouseup=function(a){o.popup.onmouseup=void 0,(a.target===o.popup||o.popup.contains(a.target))&&($n=!0)}}},jd=(o,a,c)=>{a.container.onclick=f=>{const m=t.innerParams.get(o);if($n){$n=!1;return}f.target===a.container&&A(m.allowOutsideClick)&&c(vt.backdrop)}},qd=o=>typeof o=="object"&&o.jquery,yo=o=>o instanceof Element||qd(o),zd=o=>{const a={};return typeof o[0]=="object"&&!yo(o[0])?Object.assign(a,o[0]):["title","html","icon"].forEach((c,f)=>{const m=o[f];typeof m=="string"||yo(m)?a[c]=m:m!==void 0&&g(`Unexpected type of ${c}! Expected "string" or "Element", got ${typeof m}`)}),a};function Gd(){const o=this;for(var a=arguments.length,c=new Array(a),f=0;f<a;f++)c[f]=arguments[f];return new o(...c)}function Kd(o){class a extends this{_main(f,m){return super._main(f,Object.assign({},o,m))}}return a}const Yd=()=>S.timeout&&S.timeout.getTimerLeft(),vo=()=>{if(S.timeout)return zc(),S.timeout.stop()},wo=()=>{if(S.timeout){const o=S.timeout.start();return qi(o),o}},Qd=()=>{const o=S.timeout;return o&&(o.running?vo():wo())},Jd=o=>{if(S.timeout){const a=S.timeout.increase(o);return qi(a,!0),a}},Xd=()=>S.timeout&&S.timeout.isRunning();let Eo=!1;const ts={};function Zd(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";ts[o]=this,Eo||(document.body.addEventListener("click",eh),Eo=!0)}const eh=o=>{for(let a=o.target;a&&a!==document;a=a.parentNode)for(const c in ts){const f=a.getAttribute(c);if(f){ts[c].fire({template:f});return}}};var th=Object.freeze({__proto__:null,argsToParams:zd,bindClickHandler:Zd,clickCancel:Bu,clickConfirm:to,clickDeny:Fu,enableLoading:Et,fire:Gd,getActions:Xt,getCancelButton:Ye,getCloseButton:Hi,getConfirmButton:he,getContainer:B,getDenyButton:De,getFocusableElements:$i,getFooter:$r,getHtmlContainer:gt,getIcon:Oe,getIconContent:Ui,getImage:Hr,getInputLabel:Hc,getLoader:_t,getPopup:R,getProgressSteps:Wi,getTimerLeft:Yd,getTimerProgressBar:Fn,getTitle:pt,getValidationMessage:Ln,increaseTimer:Jd,isDeprecatedParameter:Qi,isLoading:Vc,isTimerRunning:Xd,isUpdatableParameter:uo,isValidParameter:co,isVisible:Lu,mixin:Kd,resumeTimer:wo,showLoading:Et,stopTimer:vo,toggleTimer:Qd});class nh{constructor(a,c){this.callback=a,this.remaining=c,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(a){const c=this.running;return c&&this.stop(),this.remaining+=a,c&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Co=["swal-title","swal-html","swal-footer"],ih=o=>{const a=typeof o.template=="string"?document.querySelector(o.template):o.template;if(!a)return{};const c=a.content;return dh(c),Object.assign(sh(c),rh(c),oh(c),ah(c),lh(c),ch(c),uh(c,Co))},sh=o=>{const a={};return Array.from(o.querySelectorAll("swal-param")).forEach(f=>{Je(f,["name","value"]);const m=f.getAttribute("name"),E=f.getAttribute("value");typeof wt[m]=="boolean"?a[m]=E!=="false":typeof wt[m]=="object"?a[m]=JSON.parse(E):a[m]=E}),a},rh=o=>{const a={};return Array.from(o.querySelectorAll("swal-function-param")).forEach(f=>{const m=f.getAttribute("name"),E=f.getAttribute("value");a[m]=new Function(`return ${E}`)()}),a},oh=o=>{const a={};return Array.from(o.querySelectorAll("swal-button")).forEach(f=>{Je(f,["type","color","aria-label"]);const m=f.getAttribute("type");a[`${m}ButtonText`]=f.innerHTML,a[`show${h(m)}Button`]=!0,f.hasAttribute("color")&&(a[`${m}ButtonColor`]=f.getAttribute("color")),f.hasAttribute("aria-label")&&(a[`${m}ButtonAriaLabel`]=f.getAttribute("aria-label"))}),a},ah=o=>{const a={},c=o.querySelector("swal-image");return c&&(Je(c,["src","width","height","alt"]),c.hasAttribute("src")&&(a.imageUrl=c.getAttribute("src")),c.hasAttribute("width")&&(a.imageWidth=c.getAttribute("width")),c.hasAttribute("height")&&(a.imageHeight=c.getAttribute("height")),c.hasAttribute("alt")&&(a.imageAlt=c.getAttribute("alt"))),a},lh=o=>{const a={},c=o.querySelector("swal-icon");return c&&(Je(c,["type","color"]),c.hasAttribute("type")&&(a.icon=c.getAttribute("type")),c.hasAttribute("color")&&(a.iconColor=c.getAttribute("color")),a.iconHtml=c.innerHTML),a},ch=o=>{const a={},c=o.querySelector("swal-input");c&&(Je(c,["type","label","placeholder","value"]),a.input=c.getAttribute("type")||"text",c.hasAttribute("label")&&(a.inputLabel=c.getAttribute("label")),c.hasAttribute("placeholder")&&(a.inputPlaceholder=c.getAttribute("placeholder")),c.hasAttribute("value")&&(a.inputValue=c.getAttribute("value")));const f=Array.from(o.querySelectorAll("swal-input-option"));return f.length&&(a.inputOptions={},f.forEach(m=>{Je(m,["value"]);const E=m.getAttribute("value"),x=m.innerHTML;a.inputOptions[E]=x})),a},uh=(o,a)=>{const c={};for(const f in a){const m=a[f],E=o.querySelector(m);E&&(Je(E,[]),c[m.replace(/^swal-/,"")]=E.innerHTML.trim())}return c},dh=o=>{const a=Co.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(o.children).forEach(c=>{const f=c.tagName.toLowerCase();a.includes(f)||p(`Unrecognized element <${f}>`)})},Je=(o,a)=>{Array.from(o.attributes).forEach(c=>{a.indexOf(c.name)===-1&&p([`Unrecognized attribute "${c.name}" on <${o.tagName.toLowerCase()}>.`,`${a.length?`Allowed attributes are: ${a.join(", ")}`:"To set the value, use HTML within the element."}`])})},Io=10,hh=o=>{const a=B(),c=R();typeof o.willOpen=="function"&&o.willOpen(c);const m=window.getComputedStyle(document.body).overflowY;gh(a,c,o),setTimeout(()=>{fh(a,c)},Io),Vi()&&(ph(a,o.scrollbarPadding,m),zu()),!Bn()&&!S.previousActiveElement&&(S.previousActiveElement=document.activeElement),typeof o.didOpen=="function"&&setTimeout(()=>o.didOpen(c)),ve(a,r["no-transition"])},bo=o=>{const a=R();if(o.target!==a)return;const c=B();a.removeEventListener(Zt,bo),c.style.overflowY="auto"},fh=(o,a)=>{Zt&&Gr(a)?(o.style.overflowY="hidden",a.addEventListener(Zt,bo)):o.style.overflowY="auto"},ph=(o,a,c)=>{Gu(),a&&c!=="hidden"&&ed(),setTimeout(()=>{o.scrollTop=0})},gh=(o,a,c)=>{P(o,c.showClass.backdrop),a.style.setProperty("opacity","0","important"),q(a,"grid"),setTimeout(()=>{P(a,c.showClass.popup),a.style.removeProperty("opacity")},Io),P([document.documentElement,document.body],r.shown),c.heightAuto&&c.backdrop&&!c.toast&&P([document.documentElement,document.body],r["height-auto"])};var To={email:(o,a)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(o)?Promise.resolve():Promise.resolve(a||"Invalid email address"),url:(o,a)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(o)?Promise.resolve():Promise.resolve(a||"Invalid URL")};function _h(o){o.inputValidator||Object.keys(To).forEach(a=>{o.input===a&&(o.inputValidator=To[a])})}function mh(o){(!o.target||typeof o.target=="string"&&!document.querySelector(o.target)||typeof o.target!="string"&&!o.target.appendChild)&&(p('Target parameter is not valid, defaulting to "body"'),o.target="body")}function yh(o){_h(o),o.showLoaderOnConfirm&&!o.preConfirm&&p(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),mh(o),typeof o.title=="string"&&(o.title=o.title.split(`
`).join("<br />")),nu(o)}let we;class Ct{constructor(){if(typeof window>"u")return;we=this;for(var a=arguments.length,c=new Array(a),f=0;f<a;f++)c[f]=arguments[f];const m=Object.freeze(this.constructor.argsToParams(c));Object.defineProperties(this,{params:{value:m,writable:!1,enumerable:!0,configurable:!0}});const E=we._main(we.params);t.promise.set(this,E)}_main(a){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Ed(Object.assign({},c,a)),S.currentInstance&&(S.currentInstance._destroy(),Vi()&&so()),S.currentInstance=we;const f=wh(a,c);yh(f),Object.freeze(f),S.timeout&&(S.timeout.stop(),delete S.timeout),clearTimeout(S.restoreFocusTimeout);const m=Eh(we);return Zr(we,f),t.innerParams.set(we,f),vh(we,m,f)}then(a){return t.promise.get(this).then(a)}finally(a){return t.promise.get(this).finally(a)}}const vh=(o,a,c)=>new Promise((f,m)=>{const E=x=>{o.close({isDismissed:!0,dismiss:x})};tn.swalPromiseResolve.set(o,f),tn.swalPromiseReject.set(o,m),a.confirmButton.onclick=()=>{Md(o)},a.denyButton.onclick=()=>{Ld(o)},a.cancelButton.onclick=()=>{Fd(o,E)},a.closeButton.onclick=()=>{E(vt.close)},Ud(o,a,E),Uu(o,S,c,E),kd(o,c),hh(c),Ch(S,c,E),Ih(a,c),setTimeout(()=>{a.container.scrollTop=0})}),wh=(o,a)=>{const c=ih(o),f=Object.assign({},wt,a,c,o);return f.showClass=Object.assign({},wt.showClass,f.showClass),f.hideClass=Object.assign({},wt.hideClass,f.hideClass),f},Eh=o=>{const a={popup:R(),container:B(),actions:Xt(),confirmButton:he(),denyButton:De(),cancelButton:Ye(),loader:_t(),closeButton:Hi(),validationMessage:Ln(),progressSteps:Wi()};return t.domCache.set(o,a),a},Ch=(o,a,c)=>{const f=Fn();Y(f),a.timer&&(o.timeout=new nh(()=>{c("timer"),delete o.timeout},a.timer),a.timerProgressBar&&(q(f),ce(f,a,"timerProgressBar"),setTimeout(()=>{o.timeout&&o.timeout.running&&qi(a.timer)})))},Ih=(o,a)=>{if(!a.toast){if(!A(a.allowEnterKey)){Th();return}bh(o,a)||Yi(-1,1)}},bh=(o,a)=>a.focusDeny&&ae(o.denyButton)?(o.denyButton.focus(),!0):a.focusCancel&&ae(o.cancelButton)?(o.cancelButton.focus(),!0):a.focusConfirm&&ae(o.confirmButton)?(o.confirmButton.focus(),!0):!1,Th=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const o=new Date,a=localStorage.getItem("swal-initiation");a?(o.getTime()-Date.parse(a))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const c=document.createElement("audio");c.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",c.loop=!0,document.body.appendChild(c),setTimeout(()=>{c.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${o}`)}Object.assign(Ct.prototype,fo),Object.assign(Ct,th),Object.keys(fo).forEach(o=>{Ct[o]=function(){if(we)return we[o](...arguments)}}),Ct.DismissReason=vt,Ct.version="11.7.3";const Vn=Ct;return Vn.default=Vn,Vn}),typeof Me<"u"&&Me.Sweetalert2&&(Me.swal=Me.sweetAlert=Me.Swal=Me.SweetAlert=Me.Sweetalert2)})(kh);const jn=vs;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=function(n,e){if(!n)throw $t(e)},$t=function(n){return new Error("Firebase Database ("+xa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ah=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],l=n[t++],u=n[t++],d=((s&7)<<18|(r&63)<<12|(l&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const r=n[t++],l=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|l&63)}}return e.join("")},Vs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],l=s+1<n.length,u=l?n[s+1]:0,d=s+2<n.length,h=d?n[s+2]:0,p=r>>2,g=(r&3)<<4|u>>4;let _=(u&15)<<2|h>>6,v=h&63;d||(v=64,l||(_=64)),i.push(t[p],t[g],t[_],t[v])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ma(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ah(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||u==null||h==null||g==null)throw new Rh;const _=r<<2|u>>4;if(i.push(_),h!==64){const v=u<<4&240|h>>2;if(i.push(v),g!==64){const w=h<<6&192|g;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const La=function(n){const e=Ma(n);return Vs.encodeByteArray(e,!0)},Zn=function(n){return La(n).replace(/\./g,"")},ei=function(n){try{return Vs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(n){return Fa(void 0,n)}function Fa(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Nh(t)||(n[t]=Fa(n[t],e[t]));return n}function Nh(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=()=>Oh().__FIREBASE_DEFAULTS__,xh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ei(n[1]);return e&&JSON.parse(e)},js=()=>{try{return Dh()||xh()||Mh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ba=n=>{var e,t;return(t=(e=js())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Lh=n=>{const e=Ba(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Fh=()=>{var n;return(n=js())===null||n===void 0?void 0:n.config},Ua=n=>{var e;return(e=js())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),u="";return[Zn(JSON.stringify(t)),Zn(JSON.stringify(l)),u].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Q())}function Uh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Wa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wh(){const n=Q();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ha(){return xa.NODE_ADMIN===!0}function Hh(){try{return typeof indexedDB=="object"}catch{return!1}}function $h(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh="FirebaseError";class Ke extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Vh,Object.setPrototypeOf(this,Ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,kn.prototype.create)}}class kn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],l=r?jh(r,i):"Error",u=`${this.serviceName}: ${l} (${s}).`;return new Ke(s,u,i)}}function jh(n,e){return n.replace(qh,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const qh=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(n){return JSON.parse(n)}function j(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=gn(ei(r[0])||""),t=gn(ei(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},zh=function(n){const e=$a(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Gh=function(n){const e=$a(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Dt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function ws(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function ti(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ni(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],l=e[s];if(ko(r)&&ko(l)){if(!ni(r,l))return!1}else if(r!==l)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function ko(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ln(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function cn(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let g=0;g<16;g++)i[g]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let g=0;g<16;g++)i[g]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let g=16;g<80;g++){const _=i[g-3]^i[g-8]^i[g-14]^i[g-16];i[g]=(_<<1|_>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],l=this.chain_[2],u=this.chain_[3],d=this.chain_[4],h,p;for(let g=0;g<80;g++){g<40?g<20?(h=u^r&(l^u),p=1518500249):(h=r^l^u,p=1859775393):g<60?(h=r&l|u&(r|l),p=2400959708):(h=r^l^u,p=3395469782);const _=(s<<5|s>>>27)+h+d+p+i[g]&4294967295;d=u,u=l,l=(r<<30|r>>>2)&4294967295,r=s,s=_}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let l=this.inbuf_;for(;s<t;){if(l===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[l]=e.charCodeAt(s),++l,++s,l===this.blockSize){this.compress_(r),l=0;break}}else for(;s<t;)if(r[l]=e[s],++l,++s,l===this.blockSize){this.compress_(r),l=0;break}}this.inbuf_=l,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Yh(n,e){const t=new Qh(n,e);return t.subscribe.bind(t)}class Qh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Jh(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=is),s.error===void 0&&(s.error=is),s.complete===void 0&&(s.complete=is);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Jh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function is(){}function Ii(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,y(i<n.length,"Surrogate pair missing trail surrogate.");const l=n.charCodeAt(i)-56320;s=65536+(r<<10)+l}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},bi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(n){return n&&n._delegate?n._delegate:n}class st{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Sn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(tf(e))try{this.getOrInitializeService({instanceIdentifier:Ze})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ze){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ze){return this.instances.has(e)}getOptions(e=Ze){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(r);i===u&&l.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const l=this.instances.get(s);return l&&e(l,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:ef(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ze){return this.component?this.component.multipleInstances?e:Ze:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ef(n){return n===Ze?void 0:n}function tf(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Zh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const sf={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},rf=O.INFO,of={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},af=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=of[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zs{constructor(e){this.name=e,this._logLevel=rf,this._logHandler=af,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const lf=(n,e)=>e.some(t=>n instanceof t);let Ao,Ro;function cf(){return Ao||(Ao=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function uf(){return Ro||(Ro=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Va=new WeakMap,Es=new WeakMap,ja=new WeakMap,ss=new WeakMap,Gs=new WeakMap;function df(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",l)},r=()=>{t($e(n.result)),s()},l=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&Va.set(t,n)}).catch(()=>{}),Gs.set(e,n),e}function hf(n){if(Es.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",l),n.removeEventListener("abort",l)},r=()=>{t(),s()},l=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",l),n.addEventListener("abort",l)});Es.set(n,e)}let Cs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Es.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ja.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $e(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ff(n){Cs=n(Cs)}function pf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(rs(this),e,...t);return ja.set(i,e.sort?e.sort():[e]),$e(i)}:uf().includes(n)?function(...e){return n.apply(rs(this),e),$e(Va.get(this))}:function(...e){return $e(n.apply(rs(this),e))}}function gf(n){return typeof n=="function"?pf(n):(n instanceof IDBTransaction&&hf(n),lf(n,cf())?new Proxy(n,Cs):n)}function $e(n){if(n instanceof IDBRequest)return df(n);if(ss.has(n))return ss.get(n);const e=gf(n);return e!==n&&(ss.set(n,e),Gs.set(e,n)),e}const rs=n=>Gs.get(n);function _f(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const l=indexedDB.open(n,e),u=$e(l);return i&&l.addEventListener("upgradeneeded",d=>{i($e(l.result),d.oldVersion,d.newVersion,$e(l.transaction),d)}),t&&l.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),u.then(d=>{r&&d.addEventListener("close",()=>r()),s&&d.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const mf=["get","getKey","getAll","getAllKeys","count"],yf=["put","add","delete","clear"],os=new Map;function Po(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(os.get(e))return os.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=yf.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||mf.includes(t)))return;const r=async function(l,...u){const d=this.transaction(l,s?"readwrite":"readonly");let h=d.store;return i&&(h=h.index(u.shift())),(await Promise.all([h[t](...u),s&&d.done]))[0]};return os.set(e,r),r}ff(n=>({...n,get:(e,t,i)=>Po(e,t)||n.get(e,t,i),has:(e,t)=>!!Po(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wf(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function wf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Is="@firebase/app",No="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new zs("@firebase/app"),Ef="@firebase/app-compat",Cf="@firebase/analytics-compat",If="@firebase/analytics",bf="@firebase/app-check-compat",Tf="@firebase/app-check",Sf="@firebase/auth",kf="@firebase/auth-compat",Af="@firebase/database",Rf="@firebase/database-compat",Pf="@firebase/functions",Nf="@firebase/functions-compat",Of="@firebase/installations",Df="@firebase/installations-compat",xf="@firebase/messaging",Mf="@firebase/messaging-compat",Lf="@firebase/performance",Ff="@firebase/performance-compat",Bf="@firebase/remote-config",Uf="@firebase/remote-config-compat",Wf="@firebase/storage",Hf="@firebase/storage-compat",$f="@firebase/firestore",Vf="@firebase/firestore-compat",jf="firebase",qf="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs="[DEFAULT]",zf={[Is]:"fire-core",[Ef]:"fire-core-compat",[If]:"fire-analytics",[Cf]:"fire-analytics-compat",[Tf]:"fire-app-check",[bf]:"fire-app-check-compat",[Sf]:"fire-auth",[kf]:"fire-auth-compat",[Af]:"fire-rtdb",[Rf]:"fire-rtdb-compat",[Pf]:"fire-fn",[Nf]:"fire-fn-compat",[Of]:"fire-iid",[Df]:"fire-iid-compat",[xf]:"fire-fcm",[Mf]:"fire-fcm-compat",[Lf]:"fire-perf",[Ff]:"fire-perf-compat",[Bf]:"fire-rc",[Uf]:"fire-rc-compat",[Wf]:"fire-gcs",[Hf]:"fire-gcs-compat",[$f]:"fire-fst",[Vf]:"fire-fst-compat","fire-js":"fire-js",[jf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=new Map,Ts=new Map;function Gf(n,e){try{n.container.addComponent(e)}catch(t){rt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xt(n){const e=n.name;if(Ts.has(e))return rt.debug(`There were multiple attempts to register component ${e}.`),!1;Ts.set(e,n);for(const t of ii.values())Gf(t,n);return!0}function Ks(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ve=new kn("app","Firebase",Kf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=qf;function qa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:bs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ve.create("bad-app-name",{appName:String(s)});if(t||(t=Fh()),!t)throw Ve.create("no-options");const r=ii.get(s);if(r){if(ni(t,r.options)&&ni(i,r.config))return r;throw Ve.create("duplicate-app",{appName:s})}const l=new nf(s);for(const d of Ts.values())l.addComponent(d);const u=new Yf(t,i,l);return ii.set(s,u),u}function za(n=bs){const e=ii.get(n);if(!e&&n===bs)return qa();if(!e)throw Ve.create("no-app",{appName:n});return e}function je(n,e,t){var i;let s=(i=zf[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),l=e.match(/\s|\//);if(r||l){const u=[`Unable to register library "${s}" with version "${e}":`];r&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rt.warn(u.join(" "));return}xt(new st(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="firebase-heartbeat-database",Jf=1,_n="firebase-heartbeat-store";let as=null;function Ga(){return as||(as=_f(Qf,Jf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(_n)}}}).catch(n=>{throw Ve.create("idb-open",{originalErrorMessage:n.message})})),as}async function Xf(n){try{return(await Ga()).transaction(_n).objectStore(_n).get(Ka(n))}catch(e){if(e instanceof Ke)rt.warn(e.message);else{const t=Ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rt.warn(t.message)}}}async function Oo(n,e){try{const i=(await Ga()).transaction(_n,"readwrite");return await i.objectStore(_n).put(e,Ka(n)),i.done}catch(t){if(t instanceof Ke)rt.warn(t.message);else{const i=Ve.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rt.warn(i.message)}}}function Ka(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zf=1024,ep=30*24*60*60*1e3;class tp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ip(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Do();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=ep}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Do(),{heartbeatsToSend:t,unsentEntries:i}=np(this._heartbeatsCache.heartbeats),s=Zn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Do(){return new Date().toISOString().substring(0,10)}function np(n,e=Zf){const t=[];let i=n.slice();for(const s of n){const r=t.find(l=>l.agent===s.agent);if(r){if(r.dates.push(s.date),xo(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),xo(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ip{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hh()?$h().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Xf(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Oo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Oo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function xo(n){return Zn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(n){xt(new st("platform-logger",e=>new vf(e),"PRIVATE")),xt(new st("heartbeat",e=>new tp(e),"PRIVATE")),je(Is,No,n),je(Is,No,"esm2017"),je("fire-js","")}sp("");var rp="firebase",op="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */je(rp,op,"app");const Mo="@firebase/database",Lo="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya="";function ap(n){Ya=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),j(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:gn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ie(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new lp(e)}}catch{}return new cp},tt=Qa("localStorage"),Ss=Qa("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new zs("@firebase/database"),up=function(){let n=1;return function(){return n++}}(),Ja=function(n){const e=Xh(n),t=new Kh;t.update(e);const i=t.digest();return Vs.encodeByteArray(i)},An=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=An.apply(null,i):typeof i=="object"?e+=j(i):e+=i,e+=" "}return e};let nt=null,Fo=!0;const dp=function(n,e){y(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(kt.logLevel=O.VERBOSE,nt=kt.log.bind(kt),e&&Ss.set("logging_enabled",!0)):typeof n=="function"?nt=n:(nt=null,Ss.remove("logging_enabled"))},z=function(...n){if(Fo===!0&&(Fo=!1,nt===null&&Ss.get("logging_enabled")===!0&&dp(!0)),nt){const e=An.apply(null,n);nt(e)}},Rn=function(n){return function(...e){z(n,...e)}},ks=function(...n){const e="FIREBASE INTERNAL ERROR: "+An(...n);kt.error(e)},Re=function(...n){const e=`FIREBASE FATAL ERROR: ${An(...n)}`;throw kt.error(e),new Error(e)},ee=function(...n){const e="FIREBASE WARNING: "+An(...n);kt.warn(e)},hp=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ee("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ys=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},fp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Mt="[MIN_NAME]",ot="[MAX_NAME]",ht=function(n,e){if(n===e)return 0;if(n===Mt||e===ot)return-1;if(e===Mt||n===ot)return 1;{const t=Bo(n),i=Bo(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},pp=function(n,e){return n===e?0:n<e?-1:1},sn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+j(e))},Qs=function(n){if(typeof n!="object"||n===null)return j(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=j(e[i]),t+=":",t+=Qs(n[e[i]]);return t+="}",t},Xa=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function G(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Za=function(n){y(!Ys(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,l,u,d;n===0?(r=0,l=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(u=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=u+i,l=Math.round(n*Math.pow(2,t-u)-Math.pow(2,t))):(r=0,l=Math.round(n/Math.pow(2,1-i-t))));const h=[];for(d=t;d;d-=1)h.push(l%2?1:0),l=Math.floor(l/2);for(d=e;d;d-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const p=h.join("");let g="";for(d=0;d<64;d+=8){let _=parseInt(p.substr(d,8),2).toString(16);_.length===1&&(_="0"+_),g=g+_}return g.toLowerCase()},gp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},_p=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function mp(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const yp=new RegExp("^-?(0*)\\d{1,10}$"),vp=-2147483648,wp=2147483647,Bo=function(n){if(yp.test(n)){const e=Number(n);if(e>=vp&&e<=wp)return e}return null},qt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ee("Exception was thrown by user callback.",t),e},Math.floor(0))}},Ep=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},un=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ee(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ee(e)}}class At{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}At.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="5",el="v",tl="s",nl="r",il="f",sl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rl="ls",ol="p",As="ac",al="websocket",ll="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t,i,s,r=!1,l="",u=!1,d=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=l,this.includeNamespaceInQueryParams=u,this.isUsingEmulator=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=tt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&tt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function bp(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ul(n,e,t){y(typeof e=="string","typeof type must == string"),y(typeof t=="object","typeof params must == object");let i;if(e===al)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ll)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);bp(n)&&(t.ns=n.namespace);const s=[];return G(t,(r,l)=>{s.push(r+"="+l)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.counters_={}}incrementCounter(e,t=1){Ie(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Ph(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls={},cs={};function Xs(n){const e=n.toString();return ls[e]||(ls[e]=new Tp),ls[e]}function Sp(n,e){const t=n.toString();return cs[t]||(cs[t]=e()),cs[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&qt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="start",Ap="close",Rp="pLPCommand",Pp="pRTLPCB",dl="id",hl="pw",fl="ser",Np="cb",Op="seg",Dp="ts",xp="d",Mp="dframe",pl=1870,gl=30,Lp=pl-gl,Fp=25e3,Bp=3e4;class Tt{constructor(e,t,i,s,r,l,u){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=l,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Rn(e),this.stats_=Xs(t),this.urlFn=d=>(this.appCheckToken&&(d[As]=this.appCheckToken),ul(t,ll,d))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new kp(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Bp)),fp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Zs((...r)=>{const[l,u,d,h,p]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,l===Uo)this.id=u,this.password=d;else if(l===Ap)u?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(u,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+l)},(...r)=>{const[l,u]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(l,u)},()=>{this.onClosed_()},this.urlFn);const i={};i[Uo]="t",i[fl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Np]=this.scriptTagHolder.uniqueCallbackIdentifier),i[el]=Js,this.transportSessionId&&(i[tl]=this.transportSessionId),this.lastSessionId&&(i[rl]=this.lastSessionId),this.applicationId&&(i[ol]=this.applicationId),this.appCheckToken&&(i[As]=this.appCheckToken),typeof location<"u"&&location.hostname&&sl.test(location.hostname)&&(i[nl]=il);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Tt.forceAllow_=!0}static forceDisallow(){Tt.forceDisallow_=!0}static isAvailable(){return Tt.forceAllow_?!0:!Tt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gp()&&!_p()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=j(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=La(t),s=Xa(i,Lp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Mp]="t",i[dl]=e,i[hl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=j(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Zs{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=up(),window[Rp+this.uniqueCallbackIdentifier]=e,window[Pp+this.uniqueCallbackIdentifier]=t,this.myIFrame=Zs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const l="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(l),this.myIFrame.doc.close()}catch(u){z("frame writing exception"),u.stack&&z(u.stack),z(u)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||z("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[dl]=this.myID,e[hl]=this.myPW,e[fl]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gl+i.length<=pl;){const l=this.pendingSegs.shift();i=i+"&"+Op+s+"="+l.seg+"&"+Dp+s+"="+l.ts+"&"+xp+s+"="+l.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Fp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=16384,Wp=45e3;let si=null;typeof MozWebSocket<"u"?si=MozWebSocket:typeof WebSocket<"u"&&(si=WebSocket);class fe{constructor(e,t,i,s,r,l,u){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Rn(this.connId),this.stats_=Xs(t),this.connURL=fe.connectionURL_(t,l,u,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const l={};return l[el]=Js,typeof location<"u"&&location.hostname&&sl.test(location.hostname)&&(l[nl]=il),t&&(l[tl]=t),i&&(l[rl]=i),s&&(l[As]=s),r&&(l[ol]=r),ul(e,al,l)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,tt.set("previous_websocket_failure",!0);try{let i;Ha(),this.mySock=new si(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){fe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&si!==null&&!fe.forceDisallow_}static previouslyFailed(){return tt.isInMemoryStorage||tt.get("previous_websocket_failure")===!0}markConnectionHealthy(){tt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=gn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(y(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=j(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Xa(t,Up);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Wp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fe.responsesRequiredToBeHealthy=2;fe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Tt,fe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=fe&&fe.isAvailable();let i=t&&!fe.previouslyFailed();if(e.webSocketOnly&&(t||ee("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[fe];else{const s=this.transports_=[];for(const r of mn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);mn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}mn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hp=6e4,$p=5e3,Vp=10*1024,jp=100*1024,us="t",Wo="d",qp="s",Ho="r",zp="e",$o="o",Vo="a",jo="n",qo="p",Gp="h";class Kp{constructor(e,t,i,s,r,l,u,d,h,p){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=l,this.onReady_=u,this.onDisconnect_=d,this.onKill_=h,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Rn("c:"+this.id+":"),this.transportManager_=new mn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=un(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>jp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Vp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(us in e){const t=e[us];t===Vo?this.upgradeIfSecondaryHealthy_():t===Ho?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===$o&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=sn("t",e),i=sn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:qo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Vo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:jo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=sn("t",e),i=sn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=sn(us,e);if(Wo in e){const i=e[Wo];if(t===Gp){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===jo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===qp?this.onConnectionShutdown_(i):t===Ho?this.onReset_(i):t===zp?ks("Server Error: "+i):t===$o?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ks("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Js!==i&&ee("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),un(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Hp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):un(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor($p))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:qo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(tt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e){this.allowedEvents_=e,this.listeners_={},y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){y(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri extends ml{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!qs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ri}getInitialEvent(e){return y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=32,Go=768;class D{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function N(){return new D("")}function b(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ze(n){return n.pieces_.length-n.pieceNum_}function L(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new D(n.pieces_,e)}function er(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Yp(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function yn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function yl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new D(e,0)}function U(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof D)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new D(t,0)}function k(n){return n.pieceNum_>=n.pieces_.length}function se(n,e){const t=b(n),i=b(e);if(t===null)return e;if(t===i)return se(L(n),L(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Qp(n,e){const t=yn(n,0),i=yn(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=ht(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function tr(n,e){if(ze(n)!==ze(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ue(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(ze(n)>ze(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class Jp{constructor(e,t){this.errorPrefix_=t,this.parts_=yn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=bi(this.parts_[i]);vl(this)}}function Xp(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=bi(e),vl(n)}function Zp(n){const e=n.parts_.pop();n.byteLength_-=bi(e),n.parts_.length>0&&(n.byteLength_-=1)}function vl(n){if(n.byteLength_>Go)throw new Error(n.errorPrefix_+"has a key path longer than "+Go+" bytes ("+n.byteLength_+").");if(n.parts_.length>zo)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zo+") or object contains a cycle "+et(n))}function et(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends ml{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new nr}getInitialEvent(e){return y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=1e3,eg=60*5*1e3,Ko=30*1e3,tg=1.3,ng=3e4,ig="server_kill",Yo=3;class Ae extends _l{constructor(e,t,i,s,r,l,u,d){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=l,this.appCheckTokenProvider_=u,this.authOverride_=d,this.id=Ae.nextPersistentConnectionId_++,this.log_=Rn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=rn,this.maxReconnectDelay_=eg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d&&!Ha())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");nr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ri.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(j(r)),y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new Sn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:l=>{const u=l.d;l.s==="ok"?t.resolve(u):t.reject(u)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,l=e._path.toString();this.log_("Listen called for "+l+" "+r),this.listens.has(l)||this.listens.set(l,new Map),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),y(!this.listens.get(l).has(r),"listen() called twice for same path/queryId.");const u={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(l).set(r,u),this.connected_&&this.sendListen_(u)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},l="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(l,r,u=>{const d=u.d,h=u.s;Ae.warnOnListenWarnings_(d,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",u),h!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(h,d))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ie(e,"w")){const i=Dt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ee(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Gh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ko)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=zh(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,l=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,l))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},l="n";s&&(r.q=i,r.t=s),this.sendRequest(l,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,l=>{s&&setTimeout(()=>{s(l.s,l.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const l={p:t,d:i};r!==void 0&&(l.h=r),this.outstandingPuts_.push({action:e,request:l,onComplete:s}),this.outstandingPutCount_++;const u=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(u):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+j(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ks("Unrecognized action received from server: "+j(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=rn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=rn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>ng&&(this.reconnectDelay_=rn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*tg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Ae.nextConnectionId_++,r=this.lastSessionId;let l=!1,u=null;const d=function(){u?u.close():(l=!0,i())},h=function(g){y(u,"sendRequest call when we're not connected not allowed."),u.sendRequest(g)};this.realtime_={close:d,sendRequest:h};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[g,_]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);l?z("getToken() completed but was canceled"):(z("getToken() completed. Creating connection."),this.authToken_=g&&g.accessToken,this.appCheckToken_=_&&_.token,u=new Kp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,v=>{ee(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(ig)},r))}catch(g){this.log_("Failed to get token: "+g),l||(this.repoInfo_.nodeAdmin&&ee(g),d())}}}interrupt(e){z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ws(this.interruptReasons_)&&(this.reconnectDelay_=rn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Qs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new D(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Yo&&(this.reconnectDelay_=Ko,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Yo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ya.replace(/\./g,"-")]=1,qs()?e["framework.cordova"]=1:Wa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ri.getInstance().currentlyOnline();return ws(this.interruptReasons_)&&e}}Ae.nextPersistentConnectionId_=0;Ae.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new T(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new T(Mt,e),s=new T(Mt,t);return this.compare(i,s)!==0}minPost(){return T.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn;class wl extends Ti{static get __EMPTY_NODE(){return qn}static set __EMPTY_NODE(e){qn=e}compare(e,t){return ht(e.name,t.name)}isDefinedOn(e){throw $t("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return T.MIN}maxPost(){return new T(ot,qn)}makePost(e,t){return y(typeof e=="string","KeyIndex indexValue must always be a string."),new T(e,qn)}toString(){return".key"}}const Rt=new wl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let l=1;for(;!e.isEmpty();)if(e=e,l=t?i(e.key,t):1,s&&(l*=-1),l<0)this.isReverse_?e=e.left:e=e.right;else if(l===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ${constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??$.RED,this.left=s??re.EMPTY_NODE,this.right=r??re.EMPTY_NODE}copy(e,t,i,s,r){return new $(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return re.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$.RED=!0;$.BLACK=!1;class sg{copy(e,t,i,s,r){return this}insert(e,t,i){return new $(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class re{constructor(e,t=re.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new re(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,$.BLACK,null,null))}remove(e){return new re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new zn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new zn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new zn(this.root_,null,this.comparator_,!0,e)}}re.EMPTY_NODE=new sg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(n,e){return ht(n.name,e.name)}function ir(n,e){return ht(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs;function og(n){Rs=n}const El=function(n){return typeof n=="number"?"number:"+Za(n):"string:"+n},Cl=function(n){if(n.isLeafNode()){const e=n.val();y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ie(e,".sv"),"Priority must be a string or number.")}else y(n===Rs||n.isEmpty(),"priority of unexpected type.");y(n===Rs||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo;class H{constructor(e,t=H.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Cl(this.priorityNode_)}static set __childrenNodeConstructor(e){Qo=e}static get __childrenNodeConstructor(){return Qo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new H(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:H.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return k(e)?this:b(e)===".priority"?this.priorityNode_:H.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:H.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=b(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(y(i!==".priority"||ze(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,H.__childrenNodeConstructor.EMPTY_NODE.updateChild(L(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+El(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Za(this.value_):e+=this.value_,this.lazyHash_=Ja(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===H.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof H.__childrenNodeConstructor?-1:(y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=H.VALUE_TYPE_ORDER.indexOf(t),r=H.VALUE_TYPE_ORDER.indexOf(i);return y(s>=0,"Unknown leaf type: "+t),y(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}H.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Il,bl;function ag(n){Il=n}function lg(n){bl=n}class cg extends Ti{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ht(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return T.MIN}maxPost(){return new T(ot,new H("[PRIORITY-POST]",bl))}makePost(e,t){const i=Il(e);return new T(t,new H("[PRIORITY-POST]",i))}toString(){return".priority"}}const W=new cg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=Math.log(2);class dg{constructor(e){const t=r=>parseInt(Math.log(r)/ug,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const oi=function(n,e,t,i){n.sort(e);const s=function(d,h){const p=h-d;let g,_;if(p===0)return null;if(p===1)return g=n[d],_=t?t(g):g,new $(_,g.node,$.BLACK,null,null);{const v=parseInt(p/2,10)+d,w=s(d,v),A=s(v+1,h);return g=n[v],_=t?t(g):g,new $(_,g.node,$.BLACK,w,A)}},r=function(d){let h=null,p=null,g=n.length;const _=function(w,A){const F=g-w,X=g;g-=w;const de=s(F+1,X),B=n[F],ye=t?t(B):B;v(new $(ye,B.node,A,null,de))},v=function(w){h?(h.left=w,h=w):(p=w,h=w)};for(let w=0;w<d.count;++w){const A=d.nextBitIsOne(),F=Math.pow(2,d.count-(w+1));A?_(F,$.BLACK):(_(F,$.BLACK),_(F,$.RED))}return p},l=new dg(n.length),u=r(l);return new re(i||e,u)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds;const bt={};class Te{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return y(bt&&W,"ChildrenNode.ts has not been loaded"),ds=ds||new Te({".priority":bt},{".priority":W}),ds}get(e){const t=Dt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof re?t:null}hasIndex(e){return Ie(this.indexSet_,e.toString())}addIndex(e,t){y(e!==Rt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(T.Wrap);let l=r.getNext();for(;l;)s=s||e.isDefinedOn(l.node),i.push(l),l=r.getNext();let u;s?u=oi(i,e.getCompare()):u=bt;const d=e.toString(),h=Object.assign({},this.indexSet_);h[d]=e;const p=Object.assign({},this.indexes_);return p[d]=u,new Te(p,h)}addToIndexes(e,t){const i=ti(this.indexes_,(s,r)=>{const l=Dt(this.indexSet_,r);if(y(l,"Missing index implementation for "+r),s===bt)if(l.isDefinedOn(e.node)){const u=[],d=t.getIterator(T.Wrap);let h=d.getNext();for(;h;)h.name!==e.name&&u.push(h),h=d.getNext();return u.push(e),oi(u,l.getCompare())}else return bt;else{const u=t.get(e.name);let d=s;return u&&(d=d.remove(new T(e.name,u))),d.insert(e,e.node)}});return new Te(i,this.indexSet_)}removeFromIndexes(e,t){const i=ti(this.indexes_,s=>{if(s===bt)return s;{const r=t.get(e.name);return r?s.remove(new T(e.name,r)):s}});return new Te(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on;class C{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Cl(this.priorityNode_),this.children_.isEmpty()&&y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return on||(on=new C(new re(ir),null,Te.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||on}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?on:t}}getChild(e){const t=b(e);return t===null?this:this.getImmediateChild(t).getChild(L(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(y(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new T(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const l=s.isEmpty()?on:this.priorityNode_;return new C(s,l,r)}}updateChild(e,t){const i=b(e);if(i===null)return t;{y(b(e)!==".priority"||ze(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(L(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(W,(l,u)=>{t[l]=u.val(e),i++,r&&C.INTEGER_REGEXP_.test(l)?s=Math.max(s,Number(l)):r=!1}),!e&&r&&s<2*i){const l=[];for(const u in t)l[u]=t[u];return l}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+El(this.getPriority().val())+":"),this.forEachChild(W,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Ja(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new T(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new T(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new T(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,T.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,T.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Pn?-1:0}withIndex(e){if(e===Rt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Rt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(W),s=t.getIterator(W);let r=i.getNext(),l=s.getNext();for(;r&&l;){if(r.name!==l.name||!r.node.equals(l.node))return!1;r=i.getNext(),l=s.getNext()}return r===null&&l===null}else return!1;else return!1}}resolveIndex_(e){return e===Rt?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class hg extends C{constructor(){super(new re(ir),C.EMPTY_NODE,Te.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const Pn=new hg;Object.defineProperties(T,{MIN:{value:new T(Mt,C.EMPTY_NODE)},MAX:{value:new T(ot,Pn)}});wl.__EMPTY_NODE=C.EMPTY_NODE;H.__childrenNodeConstructor=C;og(Pn);lg(Pn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=!0;function V(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new H(t,V(e))}if(!(n instanceof Array)&&fg){const t=[];let i=!1;if(G(n,(l,u)=>{if(l.substring(0,1)!=="."){const d=V(u);d.isEmpty()||(i=i||!d.getPriority().isEmpty(),t.push(new T(l,d)))}}),t.length===0)return C.EMPTY_NODE;const r=oi(t,rg,l=>l.name,ir);if(i){const l=oi(t,W.getCompare());return new C(r,V(e),new Te({".priority":l},{".priority":W}))}else return new C(r,V(e),Te.Default)}else{let t=C.EMPTY_NODE;return G(n,(i,s)=>{if(Ie(n,i)&&i.substring(0,1)!=="."){const r=V(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(V(e))}}ag(V);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg extends Ti{constructor(e){super(),this.indexPath_=e,y(!k(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ht(e.name,t.name):r}makePost(e,t){const i=V(e),s=C.EMPTY_NODE.updateChild(this.indexPath_,i);return new T(t,s)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,Pn);return new T(ot,e)}toString(){return yn(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg extends Ti{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ht(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return T.MIN}maxPost(){return T.MAX}makePost(e,t){const i=V(e);return new T(t,i)}toString(){return".value"}}const _g=new gg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(n){return{type:"value",snapshotNode:n}}function Lt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function vn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function wn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function mg(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.index_=e}updateChild(e,t,i,s,r,l){y(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const u=e.getImmediateChild(t);return u.getChild(s).equals(i.getChild(s))&&u.isEmpty()===i.isEmpty()||(l!=null&&(i.isEmpty()?e.hasChild(t)?l.trackChildChange(vn(t,u)):y(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):u.isEmpty()?l.trackChildChange(Lt(t,i)):l.trackChildChange(wn(t,i,u))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(W,(s,r)=>{t.hasChild(s)||i.trackChildChange(vn(s,r))}),t.isLeafNode()||t.forEachChild(W,(s,r)=>{if(e.hasChild(s)){const l=e.getImmediateChild(s);l.equals(r)||i.trackChildChange(wn(s,r,l))}else i.trackChildChange(Lt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(e){this.indexedFilter_=new sr(e.getIndex()),this.index_=e.getIndex(),this.startPost_=En.getStartPost_(e),this.endPost_=En.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,l){return this.matches(new T(t,i))||(i=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,l)}updateFullNode(e,t,i){t.isLeafNode()&&(t=C.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(C.EMPTY_NODE);const r=this;return t.forEachChild(W,(l,u)=>{r.matches(new T(l,u))||(s=s.updateImmediateChild(l,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new En(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,l){return this.rangedFilter_.matches(new T(t,i))||(i=C.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,l):this.fullLimitUpdateChild_(e,t,i,r,l)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=C.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let l=0;for(;r.hasNext()&&l<this.limit_;){const u=r.getNext();if(this.withinDirectionalStart(u))if(this.withinDirectionalEnd(u))s=s.updateImmediateChild(u.name,u.node),l++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(C.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let l=0;for(;r.hasNext();){const u=r.getNext();l<this.limit_&&this.withinDirectionalStart(u)&&this.withinDirectionalEnd(u)?l++:s=s.updateImmediateChild(u.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let l;if(this.reverse_){const g=this.index_.getCompare();l=(_,v)=>g(v,_)}else l=this.index_.getCompare();const u=e;y(u.numChildren()===this.limit_,"");const d=new T(t,i),h=this.reverse_?u.getFirstChild(this.index_):u.getLastChild(this.index_),p=this.rangedFilter_.matches(d);if(u.hasChild(t)){const g=u.getImmediateChild(t);let _=s.getChildAfterChild(this.index_,h,this.reverse_);for(;_!=null&&(_.name===t||u.hasChild(_.name));)_=s.getChildAfterChild(this.index_,_,this.reverse_);const v=_==null?1:l(_,d);if(p&&!i.isEmpty()&&v>=0)return r!=null&&r.trackChildChange(wn(t,i,g)),u.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(vn(t,g));const A=u.updateImmediateChild(t,C.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(r!=null&&r.trackChildChange(Lt(_.name,_.node)),A.updateImmediateChild(_.name,_.node)):A}}else return i.isEmpty()?e:p&&l(h,d)>=0?(r!=null&&(r.trackChildChange(vn(h.name,h.node)),r.trackChildChange(Lt(t,i))),u.updateImmediateChild(t,i).updateImmediateChild(h.name,C.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=W}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mt}hasEnd(){return this.endSet_}getIndexEndValue(){return y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ot}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===W}copy(){const e=new rr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function vg(n){return n.loadsAllData()?new sr(n.getIndex()):n.hasLimit()?new yg(n):new En(n)}function Jo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===W?t="$priority":n.index_===_g?t="$value":n.index_===Rt?t="$key":(y(n.index_ instanceof pg,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=j(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=j(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+j(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=j(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+j(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Xo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==W&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai extends _l{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Rn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const l=ai.getListenId_(e,i),u={};this.listens_[l]=u;const d=Jo(e._queryParams);this.restRequest_(r+".json",d,(h,p)=>{let g=p;if(h===404&&(g=null,h=null),h===null&&this.onDataUpdate_(r,g,!1,i),Dt(this.listens_,l)===u){let _;h?h===401?_="permission_denied":_="rest_error:"+h:_="ok",s(_,null)}})}unlisten(e,t){const i=ai.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Jo(e._queryParams),i=e._path.toString(),s=new Sn;return this.restRequest_(i+".json",t,(r,l)=>{let u=l;r===404&&(u=null,r=null),r===null?(this.onDataUpdate_(i,u,!1,null),s.resolve(u)):s.reject(new Error(u))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const l=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vt(t);this.log_("Sending REST request for "+l);const u=new XMLHttpRequest;u.onreadystatechange=()=>{if(i&&u.readyState===4){this.log_("REST Response for "+l+" received. status:",u.status,"response:",u.responseText);let d=null;if(u.status>=200&&u.status<300){try{d=gn(u.responseText)}catch{ee("Failed to parse JSON response for "+l+": "+u.responseText)}i(null,d)}else u.status!==401&&u.status!==404&&ee("Got unsuccessful REST response for "+l+" Status: "+u.status),i(u.status);i=null}},u.open("GET",l,!0),u.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(){return{value:null,children:new Map}}function Sl(n,e,t){if(k(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=b(e);n.children.has(i)||n.children.set(i,li());const s=n.children.get(i);e=L(e),Sl(s,e,t)}}function Ps(n,e,t){n.value!==null?t(e,n.value):Eg(n,(i,s)=>{const r=new D(e.toString()+"/"+i);Ps(s,r,t)})}function Eg(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&G(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=10*1e3,Ig=30*1e3,bg=5*60*1e3;class Tg{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Cg(e);const i=Zo+(Ig-Zo)*Math.random();un(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;G(e,(s,r)=>{r>0&&Ie(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),un(this.reportStats_.bind(this),Math.floor(Math.random()*2*bg))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pe||(pe={}));function or(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ar(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function lr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=pe.ACK_USER_WRITE,this.source=or()}operationForChild(e){if(k(this.path)){if(this.affectedTree.value!=null)return y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new D(e));return new ci(N(),t,this.revert)}}else return y(b(this.path)===e,"operationForChild called for unrelated child."),new ci(L(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e,t){this.source=e,this.path=t,this.type=pe.LISTEN_COMPLETE}operationForChild(e){return k(this.path)?new Cn(this.source,N()):new Cn(this.source,L(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=pe.OVERWRITE}operationForChild(e){return k(this.path)?new at(this.source,N(),this.snap.getImmediateChild(e)):new at(this.source,L(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=pe.MERGE}operationForChild(e){if(k(this.path)){const t=this.children.subtree(new D(e));return t.isEmpty()?null:t.value?new at(this.source,N(),t.value):new Ft(this.source,N(),t)}else return y(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ft(this.source,L(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(k(e))return this.isFullyInitialized()&&!this.filtered_;const t=b(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function kg(n,e,t,i){const s=[],r=[];return e.forEach(l=>{l.type==="child_changed"&&n.index_.indexedValueChanged(l.oldSnap,l.snapshotNode)&&r.push(mg(l.childName,l.snapshotNode))}),an(n,s,"child_removed",e,i,t),an(n,s,"child_added",e,i,t),an(n,s,"child_moved",r,i,t),an(n,s,"child_changed",e,i,t),an(n,s,"value",e,i,t),s}function an(n,e,t,i,s,r){const l=i.filter(u=>u.type===t);l.sort((u,d)=>Rg(n,u,d)),l.forEach(u=>{const d=Ag(n,u,r);s.forEach(h=>{h.respondsTo(u.type)&&e.push(h.createEvent(d,n.query_))})})}function Ag(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Rg(n,e,t){if(e.childName==null||t.childName==null)throw $t("Should only compare child_ events.");const i=new T(e.childName,e.snapshotNode),s=new T(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(n,e){return{eventCache:n,serverCache:e}}function dn(n,e,t,i){return Si(new lt(e,t,i),n.serverCache)}function kl(n,e,t,i){return Si(n.eventCache,new lt(e,t,i))}function Ns(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ct(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hs;const Pg=()=>(hs||(hs=new re(pp)),hs);class M{constructor(e,t=Pg()){this.value=e,this.children=t}static fromObject(e){let t=new M(null);return G(e,(i,s)=>{t=t.set(new D(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:N(),value:this.value};if(k(e))return null;{const i=b(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(L(e),t);return r!=null?{path:U(new D(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(k(e))return this;{const t=b(e),i=this.children.get(t);return i!==null?i.subtree(L(e)):new M(null)}}set(e,t){if(k(e))return new M(t,this.children);{const i=b(e),r=(this.children.get(i)||new M(null)).set(L(e),t),l=this.children.insert(i,r);return new M(this.value,l)}}remove(e){if(k(e))return this.children.isEmpty()?new M(null):new M(null,this.children);{const t=b(e),i=this.children.get(t);if(i){const s=i.remove(L(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new M(null):new M(this.value,r)}else return this}}get(e){if(k(e))return this.value;{const t=b(e),i=this.children.get(t);return i?i.get(L(e)):null}}setTree(e,t){if(k(e))return t;{const i=b(e),r=(this.children.get(i)||new M(null)).setTree(L(e),t);let l;return r.isEmpty()?l=this.children.remove(i):l=this.children.insert(i,r),new M(this.value,l)}}fold(e){return this.fold_(N(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(U(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,N(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(k(e))return null;{const r=b(e),l=this.children.get(r);return l?l.findOnPath_(L(e),U(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,N(),t)}foreachOnPath_(e,t,i){if(k(e))return this;{this.value&&i(t,this.value);const s=b(e),r=this.children.get(s);return r?r.foreachOnPath_(L(e),U(t,s),i):new M(null)}}foreach(e){this.foreach_(N(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(U(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.writeTree_=e}static empty(){return new ge(new M(null))}}function hn(n,e,t){if(k(e))return new ge(new M(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const l=se(s,e);return r=r.updateChild(l,t),new ge(n.writeTree_.set(s,r))}else{const s=new M(t),r=n.writeTree_.setTree(e,s);return new ge(r)}}}function Os(n,e,t){let i=n;return G(t,(s,r)=>{i=hn(i,U(e,s),r)}),i}function ea(n,e){if(k(e))return ge.empty();{const t=n.writeTree_.setTree(e,new M(null));return new ge(t)}}function Ds(n,e){return ft(n,e)!=null}function ft(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(se(t.path,e)):null}function ta(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(W,(i,s)=>{e.push(new T(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new T(i,s.value))}),e}function qe(n,e){if(k(e))return n;{const t=ft(n,e);return t!=null?new ge(new M(t)):new ge(n.writeTree_.subtree(e))}}function xs(n){return n.writeTree_.isEmpty()}function Bt(n,e){return Al(N(),n.writeTree_,e)}function Al(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(y(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Al(U(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(U(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n,e){return Ol(e,n)}function Ng(n,e,t,i,s){y(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=hn(n.visibleWrites,e,t)),n.lastWriteId=i}function Og(n,e,t,i){y(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Os(n.visibleWrites,e,t),n.lastWriteId=i}function Dg(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function xg(n,e){const t=n.allWrites.findIndex(u=>u.writeId===e);y(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,l=n.allWrites.length-1;for(;s&&l>=0;){const u=n.allWrites[l];u.visible&&(l>=t&&Mg(u,i.path)?s=!1:ue(i.path,u.path)&&(r=!0)),l--}if(s){if(r)return Lg(n),!0;if(i.snap)n.visibleWrites=ea(n.visibleWrites,i.path);else{const u=i.children;G(u,d=>{n.visibleWrites=ea(n.visibleWrites,U(i.path,d))})}return!0}else return!1}function Mg(n,e){if(n.snap)return ue(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ue(U(n.path,t),e))return!0;return!1}function Lg(n){n.visibleWrites=Rl(n.allWrites,Fg,N()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Fg(n){return n.visible}function Rl(n,e,t){let i=ge.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const l=r.path;let u;if(r.snap)ue(t,l)?(u=se(t,l),i=hn(i,u,r.snap)):ue(l,t)&&(u=se(l,t),i=hn(i,N(),r.snap.getChild(u)));else if(r.children){if(ue(t,l))u=se(t,l),i=Os(i,u,r.children);else if(ue(l,t))if(u=se(l,t),k(u))i=Os(i,N(),r.children);else{const d=Dt(r.children,b(u));if(d){const h=d.getChild(L(u));i=hn(i,N(),h)}}}else throw $t("WriteRecord should have .snap or .children")}}return i}function Pl(n,e,t,i,s){if(!i&&!s){const r=ft(n.visibleWrites,e);if(r!=null)return r;{const l=qe(n.visibleWrites,e);if(xs(l))return t;if(t==null&&!Ds(l,N()))return null;{const u=t||C.EMPTY_NODE;return Bt(l,u)}}}else{const r=qe(n.visibleWrites,e);if(!s&&xs(r))return t;if(!s&&t==null&&!Ds(r,N()))return null;{const l=function(h){return(h.visible||s)&&(!i||!~i.indexOf(h.writeId))&&(ue(h.path,e)||ue(e,h.path))},u=Rl(n.allWrites,l,e),d=t||C.EMPTY_NODE;return Bt(u,d)}}}function Bg(n,e,t){let i=C.EMPTY_NODE;const s=ft(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(W,(r,l)=>{i=i.updateImmediateChild(r,l)}),i;if(t){const r=qe(n.visibleWrites,e);return t.forEachChild(W,(l,u)=>{const d=Bt(qe(r,new D(l)),u);i=i.updateImmediateChild(l,d)}),ta(r).forEach(l=>{i=i.updateImmediateChild(l.name,l.node)}),i}else{const r=qe(n.visibleWrites,e);return ta(r).forEach(l=>{i=i.updateImmediateChild(l.name,l.node)}),i}}function Ug(n,e,t,i,s){y(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=U(e,t);if(Ds(n.visibleWrites,r))return null;{const l=qe(n.visibleWrites,r);return xs(l)?s.getChild(t):Bt(l,s.getChild(t))}}function Wg(n,e,t,i){const s=U(e,t),r=ft(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const l=qe(n.visibleWrites,s);return Bt(l,i.getNode().getImmediateChild(t))}else return null}function Hg(n,e){return ft(n.visibleWrites,e)}function $g(n,e,t,i,s,r,l){let u;const d=qe(n.visibleWrites,e),h=ft(d,N());if(h!=null)u=h;else if(t!=null)u=Bt(d,t);else return[];if(u=u.withIndex(l),!u.isEmpty()&&!u.isLeafNode()){const p=[],g=l.getCompare(),_=r?u.getReverseIteratorFrom(i,l):u.getIteratorFrom(i,l);let v=_.getNext();for(;v&&p.length<s;)g(v,i)!==0&&p.push(v),v=_.getNext();return p}else return[]}function Vg(){return{visibleWrites:ge.empty(),allWrites:[],lastWriteId:-1}}function ui(n,e,t,i){return Pl(n.writeTree,n.treePath,e,t,i)}function ur(n,e){return Bg(n.writeTree,n.treePath,e)}function na(n,e,t,i){return Ug(n.writeTree,n.treePath,e,t,i)}function di(n,e){return Hg(n.writeTree,U(n.treePath,e))}function jg(n,e,t,i,s,r){return $g(n.writeTree,n.treePath,e,t,i,s,r)}function dr(n,e,t){return Wg(n.writeTree,n.treePath,e,t)}function Nl(n,e){return Ol(U(n.treePath,e),n.writeTree)}function Ol(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;y(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),y(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,wn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,vn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Lt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,wn(i,e.snapshotNode,s.oldSnap));else throw $t("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Dl=new zg;class hr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new lt(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dr(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ct(this.viewCache_),r=jg(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n){return{filter:n}}function Kg(n,e){y(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),y(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Yg(n,e,t,i,s){const r=new qg;let l,u;if(t.type===pe.OVERWRITE){const h=t;h.source.fromUser?l=Ms(n,e,h.path,h.snap,i,s,r):(y(h.source.fromServer,"Unknown source."),u=h.source.tagged||e.serverCache.isFiltered()&&!k(h.path),l=hi(n,e,h.path,h.snap,i,s,u,r))}else if(t.type===pe.MERGE){const h=t;h.source.fromUser?l=Jg(n,e,h.path,h.children,i,s,r):(y(h.source.fromServer,"Unknown source."),u=h.source.tagged||e.serverCache.isFiltered(),l=Ls(n,e,h.path,h.children,i,s,u,r))}else if(t.type===pe.ACK_USER_WRITE){const h=t;h.revert?l=e_(n,e,h.path,i,s,r):l=Xg(n,e,h.path,h.affectedTree,i,s,r)}else if(t.type===pe.LISTEN_COMPLETE)l=Zg(n,e,t.path,i,r);else throw $t("Unknown operation type: "+t.type);const d=r.getChanges();return Qg(e,l,d),{viewCache:l,changes:d}}function Qg(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ns(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Tl(Ns(e)))}}function xl(n,e,t,i,s,r){const l=e.eventCache;if(di(i,t)!=null)return e;{let u,d;if(k(t))if(y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=ct(e),p=h instanceof C?h:C.EMPTY_NODE,g=ur(i,p);u=n.filter.updateFullNode(e.eventCache.getNode(),g,r)}else{const h=ui(i,ct(e));u=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=b(t);if(h===".priority"){y(ze(t)===1,"Can't have a priority with additional path components");const p=l.getNode();d=e.serverCache.getNode();const g=na(i,t,p,d);g!=null?u=n.filter.updatePriority(p,g):u=l.getNode()}else{const p=L(t);let g;if(l.isCompleteForChild(h)){d=e.serverCache.getNode();const _=na(i,t,l.getNode(),d);_!=null?g=l.getNode().getImmediateChild(h).updateChild(p,_):g=l.getNode().getImmediateChild(h)}else g=dr(i,h,e.serverCache);g!=null?u=n.filter.updateChild(l.getNode(),h,g,p,s,r):u=l.getNode()}}return dn(e,u,l.isFullyInitialized()||k(t),n.filter.filtersNodes())}}function hi(n,e,t,i,s,r,l,u){const d=e.serverCache;let h;const p=l?n.filter:n.filter.getIndexedFilter();if(k(t))h=p.updateFullNode(d.getNode(),i,null);else if(p.filtersNodes()&&!d.isFiltered()){const v=d.getNode().updateChild(t,i);h=p.updateFullNode(d.getNode(),v,null)}else{const v=b(t);if(!d.isCompleteForPath(t)&&ze(t)>1)return e;const w=L(t),F=d.getNode().getImmediateChild(v).updateChild(w,i);v===".priority"?h=p.updatePriority(d.getNode(),F):h=p.updateChild(d.getNode(),v,F,w,Dl,null)}const g=kl(e,h,d.isFullyInitialized()||k(t),p.filtersNodes()),_=new hr(s,g,r);return xl(n,g,t,s,_,u)}function Ms(n,e,t,i,s,r,l){const u=e.eventCache;let d,h;const p=new hr(s,e,r);if(k(t))h=n.filter.updateFullNode(e.eventCache.getNode(),i,l),d=dn(e,h,!0,n.filter.filtersNodes());else{const g=b(t);if(g===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),i),d=dn(e,h,u.isFullyInitialized(),u.isFiltered());else{const _=L(t),v=u.getNode().getImmediateChild(g);let w;if(k(_))w=i;else{const A=p.getCompleteChild(g);A!=null?er(_)===".priority"&&A.getChild(yl(_)).isEmpty()?w=A:w=A.updateChild(_,i):w=C.EMPTY_NODE}if(v.equals(w))d=e;else{const A=n.filter.updateChild(u.getNode(),g,w,_,p,l);d=dn(e,A,u.isFullyInitialized(),n.filter.filtersNodes())}}}return d}function ia(n,e){return n.eventCache.isCompleteForChild(e)}function Jg(n,e,t,i,s,r,l){let u=e;return i.foreach((d,h)=>{const p=U(t,d);ia(e,b(p))&&(u=Ms(n,u,p,h,s,r,l))}),i.foreach((d,h)=>{const p=U(t,d);ia(e,b(p))||(u=Ms(n,u,p,h,s,r,l))}),u}function sa(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Ls(n,e,t,i,s,r,l,u){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,h;k(t)?h=i:h=new M(null).setTree(t,i);const p=e.serverCache.getNode();return h.children.inorderTraversal((g,_)=>{if(p.hasChild(g)){const v=e.serverCache.getNode().getImmediateChild(g),w=sa(n,v,_);d=hi(n,d,new D(g),w,s,r,l,u)}}),h.children.inorderTraversal((g,_)=>{const v=!e.serverCache.isCompleteForChild(g)&&_.value===null;if(!p.hasChild(g)&&!v){const w=e.serverCache.getNode().getImmediateChild(g),A=sa(n,w,_);d=hi(n,d,new D(g),A,s,r,l,u)}}),d}function Xg(n,e,t,i,s,r,l){if(di(s,t)!=null)return e;const u=e.serverCache.isFiltered(),d=e.serverCache;if(i.value!=null){if(k(t)&&d.isFullyInitialized()||d.isCompleteForPath(t))return hi(n,e,t,d.getNode().getChild(t),s,r,u,l);if(k(t)){let h=new M(null);return d.getNode().forEachChild(Rt,(p,g)=>{h=h.set(new D(p),g)}),Ls(n,e,t,h,s,r,u,l)}else return e}else{let h=new M(null);return i.foreach((p,g)=>{const _=U(t,p);d.isCompleteForPath(_)&&(h=h.set(p,d.getNode().getChild(_)))}),Ls(n,e,t,h,s,r,u,l)}}function Zg(n,e,t,i,s){const r=e.serverCache,l=kl(e,r.getNode(),r.isFullyInitialized()||k(t),r.isFiltered());return xl(n,l,t,i,Dl,s)}function e_(n,e,t,i,s,r){let l;if(di(i,t)!=null)return e;{const u=new hr(i,e,s),d=e.eventCache.getNode();let h;if(k(t)||b(t)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=ui(i,ct(e));else{const g=e.serverCache.getNode();y(g instanceof C,"serverChildren would be complete if leaf node"),p=ur(i,g)}p=p,h=n.filter.updateFullNode(d,p,r)}else{const p=b(t);let g=dr(i,p,e.serverCache);g==null&&e.serverCache.isCompleteForChild(p)&&(g=d.getImmediateChild(p)),g!=null?h=n.filter.updateChild(d,p,g,L(t),u,r):e.eventCache.getNode().hasChild(p)?h=n.filter.updateChild(d,p,C.EMPTY_NODE,L(t),u,r):h=d,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(l=ui(i,ct(e)),l.isLeafNode()&&(h=n.filter.updateFullNode(h,l,r)))}return l=e.serverCache.isFullyInitialized()||di(i,N())!=null,dn(e,h,l,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new sr(i.getIndex()),r=vg(i);this.processor_=Gg(r);const l=t.serverCache,u=t.eventCache,d=s.updateFullNode(C.EMPTY_NODE,l.getNode(),null),h=r.updateFullNode(C.EMPTY_NODE,u.getNode(),null),p=new lt(d,l.isFullyInitialized(),s.filtersNodes()),g=new lt(h,u.isFullyInitialized(),r.filtersNodes());this.viewCache_=Si(g,p),this.eventGenerator_=new Sg(this.query_)}get query(){return this.query_}}function n_(n){return n.viewCache_.serverCache.getNode()}function i_(n,e){const t=ct(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!k(e)&&!t.getImmediateChild(b(e)).isEmpty())?t.getChild(e):null}function ra(n){return n.eventRegistrations_.length===0}function s_(n,e){n.eventRegistrations_.push(e)}function oa(n,e,t){const i=[];if(t){y(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const l=r.createCancelEvent(t,s);l&&i.push(l)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const l=n.eventRegistrations_[r];if(!l.matches(e))s.push(l);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function aa(n,e,t,i){e.type===pe.MERGE&&e.source.queryId!==null&&(y(ct(n.viewCache_),"We should always have a full cache before handling merges"),y(Ns(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Yg(n.processor_,s,e,t,i);return Kg(n.processor_,r.viewCache),y(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ml(n,r.changes,r.viewCache.eventCache.getNode(),null)}function r_(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(W,(r,l)=>{i.push(Lt(r,l))}),t.isFullyInitialized()&&i.push(Tl(t.getNode())),Ml(n,i,t.getNode(),e)}function Ml(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return kg(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fi;class o_{constructor(){this.views=new Map}}function a_(n){y(!fi,"__referenceConstructor has already been defined"),fi=n}function l_(){return y(fi,"Reference.ts has not been loaded"),fi}function c_(n){return n.views.size===0}function fr(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return y(r!=null,"SyncTree gave us an op for an invalid query."),aa(r,e,t,i)}else{let r=[];for(const l of n.views.values())r=r.concat(aa(l,e,t,i));return r}}function u_(n,e,t,i,s){const r=e._queryIdentifier,l=n.views.get(r);if(!l){let u=ui(t,s?i:null),d=!1;u?d=!0:i instanceof C?(u=ur(t,i),d=!1):(u=C.EMPTY_NODE,d=!1);const h=Si(new lt(u,d,!1),new lt(i,s,!1));return new t_(e,h)}return l}function d_(n,e,t,i,s,r){const l=u_(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,l),s_(l,t),r_(l,t)}function h_(n,e,t,i){const s=e._queryIdentifier,r=[];let l=[];const u=Ge(n);if(s==="default")for(const[d,h]of n.views.entries())l=l.concat(oa(h,t,i)),ra(h)&&(n.views.delete(d),h.query._queryParams.loadsAllData()||r.push(h.query));else{const d=n.views.get(s);d&&(l=l.concat(oa(d,t,i)),ra(d)&&(n.views.delete(s),d.query._queryParams.loadsAllData()||r.push(d.query)))}return u&&!Ge(n)&&r.push(new(l_())(e._repo,e._path)),{removed:r,events:l}}function Ll(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Pt(n,e){let t=null;for(const i of n.views.values())t=t||i_(i,e);return t}function Fl(n,e){if(e._queryParams.loadsAllData())return ki(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Bl(n,e){return Fl(n,e)!=null}function Ge(n){return ki(n)!=null}function ki(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;function f_(n){y(!pi,"__referenceConstructor has already been defined"),pi=n}function p_(){return y(pi,"Reference.ts has not been loaded"),pi}let g_=1;class la{constructor(e){this.listenProvider_=e,this.syncPointTree_=new M(null),this.pendingWriteTree_=Vg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ul(n,e,t,i,s){return Ng(n.pendingWriteTree_,e,t,i,s),s?zt(n,new at(or(),e,t)):[]}function __(n,e,t,i){Og(n.pendingWriteTree_,e,t,i);const s=M.fromObject(t);return zt(n,new Ft(or(),e,s))}function He(n,e,t=!1){const i=Dg(n.pendingWriteTree_,e);if(xg(n.pendingWriteTree_,e)){let r=new M(null);return i.snap!=null?r=r.set(N(),!0):G(i.children,l=>{r=r.set(new D(l),!0)}),zt(n,new ci(i.path,r,t))}else return[]}function Ai(n,e,t){return zt(n,new at(ar(),e,t))}function m_(n,e,t){const i=M.fromObject(t);return zt(n,new Ft(ar(),e,i))}function y_(n,e){return zt(n,new Cn(ar(),e))}function v_(n,e,t){const i=gr(n,t);if(i){const s=_r(i),r=s.path,l=s.queryId,u=se(r,e),d=new Cn(lr(l),u);return mr(n,r,d)}else return[]}function Fs(n,e,t,i,s=!1){const r=e._path,l=n.syncPointTree_.get(r);let u=[];if(l&&(e._queryIdentifier==="default"||Bl(l,e))){const d=h_(l,e,t,i);c_(l)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const h=d.removed;if(u=d.events,!s){const p=h.findIndex(_=>_._queryParams.loadsAllData())!==-1,g=n.syncPointTree_.findOnPath(r,(_,v)=>Ge(v));if(p&&!g){const _=n.syncPointTree_.subtree(r);if(!_.isEmpty()){const v=C_(_);for(let w=0;w<v.length;++w){const A=v[w],F=A.query,X=$l(n,A);n.listenProvider_.startListening(fn(F),gi(n,F),X.hashFn,X.onComplete)}}}!g&&h.length>0&&!i&&(p?n.listenProvider_.stopListening(fn(e),null):h.forEach(_=>{const v=n.queryToTagMap.get(Ri(_));n.listenProvider_.stopListening(fn(_),v)}))}I_(n,h)}return u}function w_(n,e,t,i){const s=gr(n,i);if(s!=null){const r=_r(s),l=r.path,u=r.queryId,d=se(l,e),h=new at(lr(u),d,t);return mr(n,l,h)}else return[]}function E_(n,e,t,i){const s=gr(n,i);if(s){const r=_r(s),l=r.path,u=r.queryId,d=se(l,e),h=M.fromObject(t),p=new Ft(lr(u),d,h);return mr(n,l,p)}else return[]}function ca(n,e,t,i=!1){const s=e._path;let r=null,l=!1;n.syncPointTree_.foreachOnPath(s,(_,v)=>{const w=se(_,s);r=r||Pt(v,w),l=l||Ge(v)});let u=n.syncPointTree_.get(s);u?(l=l||Ge(u),r=r||Pt(u,N())):(u=new o_,n.syncPointTree_=n.syncPointTree_.set(s,u));let d;r!=null?d=!0:(d=!1,r=C.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((v,w)=>{const A=Pt(w,N());A&&(r=r.updateImmediateChild(v,A))}));const h=Bl(u,e);if(!h&&!e._queryParams.loadsAllData()){const _=Ri(e);y(!n.queryToTagMap.has(_),"View does not exist, but we have a tag");const v=b_();n.queryToTagMap.set(_,v),n.tagToQueryMap.set(v,_)}const p=cr(n.pendingWriteTree_,s);let g=d_(u,e,t,p,r,d);if(!h&&!l&&!i){const _=Fl(u,e);g=g.concat(T_(n,e,_))}return g}function pr(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(l,u)=>{const d=se(l,e),h=Pt(u,d);if(h)return h});return Pl(s,e,r,t,!0)}function zt(n,e){return Wl(e,n.syncPointTree_,null,cr(n.pendingWriteTree_,N()))}function Wl(n,e,t,i){if(k(n.path))return Hl(n,e,t,i);{const s=e.get(N());t==null&&s!=null&&(t=Pt(s,N()));let r=[];const l=b(n.path),u=n.operationForChild(l),d=e.children.get(l);if(d&&u){const h=t?t.getImmediateChild(l):null,p=Nl(i,l);r=r.concat(Wl(u,d,h,p))}return s&&(r=r.concat(fr(s,n,i,t))),r}}function Hl(n,e,t,i){const s=e.get(N());t==null&&s!=null&&(t=Pt(s,N()));let r=[];return e.children.inorderTraversal((l,u)=>{const d=t?t.getImmediateChild(l):null,h=Nl(i,l),p=n.operationForChild(l);p&&(r=r.concat(Hl(p,u,d,h)))}),s&&(r=r.concat(fr(s,n,i,t))),r}function $l(n,e){const t=e.query,i=gi(n,t);return{hashFn:()=>(n_(e)||C.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?v_(n,t._path,i):y_(n,t._path);{const r=mp(s,t);return Fs(n,t,null,r)}}}}function gi(n,e){const t=Ri(e);return n.queryToTagMap.get(t)}function Ri(n){return n._path.toString()+"$"+n._queryIdentifier}function gr(n,e){return n.tagToQueryMap.get(e)}function _r(n){const e=n.indexOf("$");return y(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new D(n.substr(0,e))}}function mr(n,e,t){const i=n.syncPointTree_.get(e);y(i,"Missing sync point for query tag that we're tracking");const s=cr(n.pendingWriteTree_,e);return fr(i,t,s,null)}function C_(n){return n.fold((e,t,i)=>{if(t&&Ge(t))return[ki(t)];{let s=[];return t&&(s=Ll(t)),G(i,(r,l)=>{s=s.concat(l)}),s}})}function fn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(p_())(n._repo,n._path):n}function I_(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Ri(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function b_(){return g_++}function T_(n,e,t){const i=e._path,s=gi(n,e),r=$l(n,t),l=n.listenProvider_.startListening(fn(e),s,r.hashFn,r.onComplete),u=n.syncPointTree_.subtree(i);if(s)y(!Ge(u.value),"If we're adding a query, it shouldn't be shadowed");else{const d=u.fold((h,p,g)=>{if(!k(h)&&p&&Ge(p))return[ki(p).query];{let _=[];return p&&(_=_.concat(Ll(p).map(v=>v.query))),G(g,(v,w)=>{_=_.concat(w)}),_}});for(let h=0;h<d.length;++h){const p=d[h];n.listenProvider_.stopListening(fn(p),gi(n,p))}}return l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new yr(t)}node(){return this.node_}}class vr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=U(this.path_,e);return new vr(this.syncTree_,t)}node(){return pr(this.syncTree_,this.path_)}}const S_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ua=function(n,e,t){if(!n||typeof n!="object")return n;if(y(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return k_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return A_(n[".sv"],e);y(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},k_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:y(!1,"Unexpected server value: "+n)}},A_=function(n,e,t){n.hasOwnProperty("increment")||y(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&y(!1,"Unexpected increment value: "+i);const s=e.node();if(y(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const l=s.getValue();return typeof l!="number"?i:l+i},Vl=function(n,e,t,i){return wr(e,new vr(t,n),i)},jl=function(n,e,t){return wr(n,new yr(e),t)};function wr(n,e,t){const i=n.getPriority().val(),s=ua(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const l=n,u=ua(l.getValue(),e,t);return u!==l.getValue()||s!==l.getPriority().val()?new H(u,V(s)):n}else{const l=n;return r=l,s!==l.getPriority().val()&&(r=r.updatePriority(new H(s))),l.forEachChild(W,(u,d)=>{const h=wr(d,e.getImmediateChild(u),t);h!==d&&(r=r.updateImmediateChild(u,h))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function Cr(n,e){let t=e instanceof D?e:new D(e),i=n,s=b(t);for(;s!==null;){const r=Dt(i.node.children,s)||{children:{},childCount:0};i=new Er(s,i,r),t=L(t),s=b(t)}return i}function Gt(n){return n.node.value}function ql(n,e){n.node.value=e,Bs(n)}function zl(n){return n.node.childCount>0}function R_(n){return Gt(n)===void 0&&!zl(n)}function Pi(n,e){G(n.node.children,(t,i)=>{e(new Er(t,n,i))})}function Gl(n,e,t,i){t&&!i&&e(n),Pi(n,s=>{Gl(s,e,!0,i)}),t&&i&&e(n)}function P_(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Nn(n){return new D(n.parent===null?n.name:Nn(n.parent)+"/"+n.name)}function Bs(n){n.parent!==null&&N_(n.parent,n.name,n)}function N_(n,e,t){const i=R_(t),s=Ie(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Bs(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Bs(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=/[\[\].#$\/\u0000-\u001F\u007F]/,D_=/[\[\].#$\u0000-\u001F\u007F]/,fs=10*1024*1024,Ir=function(n){return typeof n=="string"&&n.length!==0&&!O_.test(n)},Kl=function(n){return typeof n=="string"&&n.length!==0&&!D_.test(n)},x_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Kl(n)},M_=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Ys(n)||n&&typeof n=="object"&&Ie(n,".sv")},Yl=function(n,e,t,i){i&&e===void 0||Ni(Ii(n,"value"),e,t)},Ni=function(n,e,t){const i=t instanceof D?new Jp(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+et(i));if(typeof e=="function")throw new Error(n+"contains a function "+et(i)+" with contents = "+e.toString());if(Ys(e))throw new Error(n+"contains "+e.toString()+" "+et(i));if(typeof e=="string"&&e.length>fs/3&&bi(e)>fs)throw new Error(n+"contains a string greater than "+fs+" utf8 bytes "+et(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(G(e,(l,u)=>{if(l===".value")s=!0;else if(l!==".priority"&&l!==".sv"&&(r=!0,!Ir(l)))throw new Error(n+" contains an invalid key ("+l+") "+et(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Xp(i,l),Ni(n,u,i),Zp(i)}),s&&r)throw new Error(n+' contains ".value" child '+et(i)+" in addition to actual children.")}},L_=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=yn(i);for(let l=0;l<r.length;l++)if(!(r[l]===".priority"&&l===r.length-1)){if(!Ir(r[l]))throw new Error(n+"contains an invalid key ("+r[l]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Qp);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&ue(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},F_=function(n,e,t,i){if(i&&e===void 0)return;const s=Ii(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];G(e,(l,u)=>{const d=new D(l);if(Ni(s,u,U(t,d)),er(d)===".priority"&&!M_(u))throw new Error(s+"contains an invalid value for '"+d.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(d)}),L_(s,r)},Ql=function(n,e,t,i){if(!(i&&t===void 0)&&!Kl(t))throw new Error(Ii(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},B_=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ql(n,e,t,i)},br=function(n,e){if(b(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},U_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Ir(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!x_(t))throw new Error(Ii(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Oi(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!tr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function Jl(n,e,t){Oi(n,t),Xl(n,i=>tr(i,e))}function _e(n,e,t){Oi(n,t),Xl(n,i=>ue(i,e)||ue(e,i))}function Xl(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(H_(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function H_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();nt&&z("event: "+t.toString()),qt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $_="repo_interrupt",V_=25;class j_{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new W_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=li(),this.transactionQueueTree_=new Er,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function q_(n,e,t){if(n.stats_=Xs(n.repoInfo_),n.forceRestClient_||Ep())n.server_=new ai(n.repoInfo_,(i,s,r,l)=>{da(n,i,s,r,l)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ha(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{j(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Ae(n.repoInfo_,e,(i,s,r,l)=>{da(n,i,s,r,l)},i=>{ha(n,i)},i=>{z_(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Sp(n.repoInfo_,()=>new Tg(n.stats_,n.server_)),n.infoData_=new wg,n.infoSyncTree_=new la({startListening:(i,s,r,l)=>{let u=[];const d=n.infoData_.getNode(i._path);return d.isEmpty()||(u=Ai(n.infoSyncTree_,i._path,d),setTimeout(()=>{l("ok")},0)),u},stopListening:()=>{}}),Tr(n,"connected",!1),n.serverSyncTree_=new la({startListening:(i,s,r,l)=>(n.server_.listen(i,r,s,(u,d)=>{const h=l(u,d);_e(n.eventQueue_,i._path,h)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function Zl(n){const t=n.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Di(n){return S_({timestamp:Zl(n)})}function da(n,e,t,i,s){n.dataUpdateCount++;const r=new D(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let l=[];if(s)if(i){const d=ti(t,h=>V(h));l=E_(n.serverSyncTree_,r,d,s)}else{const d=V(t);l=w_(n.serverSyncTree_,r,d,s)}else if(i){const d=ti(t,h=>V(h));l=m_(n.serverSyncTree_,r,d)}else{const d=V(t);l=Ai(n.serverSyncTree_,r,d)}let u=r;l.length>0&&(u=Ut(n,r)),_e(n.eventQueue_,u,l)}function ha(n,e){Tr(n,"connected",e),e===!1&&Y_(n)}function z_(n,e){G(e,(t,i)=>{Tr(n,t,i)})}function Tr(n,e,t){const i=new D("/.info/"+e),s=V(t);n.infoData_.updateSnapshot(i,s);const r=Ai(n.infoSyncTree_,i,s);_e(n.eventQueue_,i,r)}function Sr(n){return n.nextWriteId_++}function G_(n,e,t,i,s){xi(n,"set",{path:e.toString(),value:t,priority:i});const r=Di(n),l=V(t,i),u=pr(n.serverSyncTree_,e),d=jl(l,u,r),h=Sr(n),p=Ul(n.serverSyncTree_,e,d,h,!0);Oi(n.eventQueue_,p),n.server_.put(e.toString(),l.val(!0),(_,v)=>{const w=_==="ok";w||ee("set at "+e+" failed: "+_);const A=He(n.serverSyncTree_,h,!w);_e(n.eventQueue_,e,A),Us(n,s,_,v)});const g=Ar(n,e);Ut(n,g),_e(n.eventQueue_,g,[])}function K_(n,e,t,i){xi(n,"update",{path:e.toString(),value:t});let s=!0;const r=Di(n),l={};if(G(t,(u,d)=>{s=!1,l[u]=Vl(U(e,u),V(d),n.serverSyncTree_,r)}),s)z("update() called with empty data.  Don't do anything."),Us(n,i,"ok",void 0);else{const u=Sr(n),d=__(n.serverSyncTree_,e,l,u);Oi(n.eventQueue_,d),n.server_.merge(e.toString(),t,(h,p)=>{const g=h==="ok";g||ee("update at "+e+" failed: "+h);const _=He(n.serverSyncTree_,u,!g),v=_.length>0?Ut(n,e):e;_e(n.eventQueue_,v,_),Us(n,i,h,p)}),G(t,h=>{const p=Ar(n,U(e,h));Ut(n,p)}),_e(n.eventQueue_,e,[])}}function Y_(n){xi(n,"onDisconnectEvents");const e=Di(n),t=li();Ps(n.onDisconnect_,N(),(s,r)=>{const l=Vl(s,r,n.serverSyncTree_,e);Sl(t,s,l)});let i=[];Ps(t,N(),(s,r)=>{i=i.concat(Ai(n.serverSyncTree_,s,r));const l=Ar(n,s);Ut(n,l)}),n.onDisconnect_=li(),_e(n.eventQueue_,N(),i)}function Q_(n,e,t){let i;b(e._path)===".info"?i=ca(n.infoSyncTree_,e,t):i=ca(n.serverSyncTree_,e,t),Jl(n.eventQueue_,e._path,i)}function fa(n,e,t){let i;b(e._path)===".info"?i=Fs(n.infoSyncTree_,e,t):i=Fs(n.serverSyncTree_,e,t),Jl(n.eventQueue_,e._path,i)}function J_(n){n.persistentConnection_&&n.persistentConnection_.interrupt($_)}function xi(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),z(t,...e)}function Us(n,e,t,i){e&&qt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const l=new Error(r);l.code=s,e(l)}})}function ec(n,e,t){return pr(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function kr(n,e=n.transactionQueueTree_){if(e||Mi(n,e),Gt(e)){const t=nc(n,e);y(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&X_(n,Nn(e),t)}else zl(e)&&Pi(e,t=>{kr(n,t)})}function X_(n,e,t){const i=t.map(h=>h.currentWriteId),s=ec(n,e,i);let r=s;const l=s.hash();for(let h=0;h<t.length;h++){const p=t[h];y(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const g=se(e,p.path);r=r.updateChild(g,p.currentOutputSnapshotRaw)}const u=r.val(!0),d=e;n.server_.put(d.toString(),u,h=>{xi(n,"transaction put response",{path:d.toString(),status:h});let p=[];if(h==="ok"){const g=[];for(let _=0;_<t.length;_++)t[_].status=2,p=p.concat(He(n.serverSyncTree_,t[_].currentWriteId)),t[_].onComplete&&g.push(()=>t[_].onComplete(null,!0,t[_].currentOutputSnapshotResolved)),t[_].unwatcher();Mi(n,Cr(n.transactionQueueTree_,e)),kr(n,n.transactionQueueTree_),_e(n.eventQueue_,e,p);for(let _=0;_<g.length;_++)qt(g[_])}else{if(h==="datastale")for(let g=0;g<t.length;g++)t[g].status===3?t[g].status=4:t[g].status=0;else{ee("transaction at "+d.toString()+" failed: "+h);for(let g=0;g<t.length;g++)t[g].status=4,t[g].abortReason=h}Ut(n,e)}},l)}function Ut(n,e){const t=tc(n,e),i=Nn(t),s=nc(n,t);return Z_(n,s,i),i}function Z_(n,e,t){if(e.length===0)return;const i=[];let s=[];const l=e.filter(u=>u.status===0).map(u=>u.currentWriteId);for(let u=0;u<e.length;u++){const d=e[u],h=se(t,d.path);let p=!1,g;if(y(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)p=!0,g=d.abortReason,s=s.concat(He(n.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=V_)p=!0,g="maxretry",s=s.concat(He(n.serverSyncTree_,d.currentWriteId,!0));else{const _=ec(n,d.path,l);d.currentInputSnapshot=_;const v=e[u].update(_.val());if(v!==void 0){Ni("transaction failed: Data returned ",v,d.path);let w=V(v);typeof v=="object"&&v!=null&&Ie(v,".priority")||(w=w.updatePriority(_.getPriority()));const F=d.currentWriteId,X=Di(n),de=jl(w,_,X);d.currentOutputSnapshotRaw=w,d.currentOutputSnapshotResolved=de,d.currentWriteId=Sr(n),l.splice(l.indexOf(F),1),s=s.concat(Ul(n.serverSyncTree_,d.path,de,d.currentWriteId,d.applyLocally)),s=s.concat(He(n.serverSyncTree_,F,!0))}else p=!0,g="nodata",s=s.concat(He(n.serverSyncTree_,d.currentWriteId,!0))}_e(n.eventQueue_,t,s),s=[],p&&(e[u].status=2,function(_){setTimeout(_,Math.floor(0))}(e[u].unwatcher),e[u].onComplete&&(g==="nodata"?i.push(()=>e[u].onComplete(null,!1,e[u].currentInputSnapshot)):i.push(()=>e[u].onComplete(new Error(g),!1,null))))}Mi(n,n.transactionQueueTree_);for(let u=0;u<i.length;u++)qt(i[u]);kr(n,n.transactionQueueTree_)}function tc(n,e){let t,i=n.transactionQueueTree_;for(t=b(e);t!==null&&Gt(i)===void 0;)i=Cr(i,t),e=L(e),t=b(e);return i}function nc(n,e){const t=[];return ic(n,e,t),t.sort((i,s)=>i.order-s.order),t}function ic(n,e,t){const i=Gt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);Pi(e,s=>{ic(n,s,t)})}function Mi(n,e){const t=Gt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,ql(e,t.length>0?t:void 0)}Pi(e,i=>{Mi(n,i)})}function Ar(n,e){const t=Nn(tc(n,e)),i=Cr(n.transactionQueueTree_,e);return P_(i,s=>{ps(n,s)}),ps(n,i),Gl(i,s=>{ps(n,s)}),t}function ps(n,e){const t=Gt(e);if(t){const i=[];let s=[],r=-1;for(let l=0;l<t.length;l++)t[l].status===3||(t[l].status===1?(y(r===l-1,"All SENT items should be at beginning of queue."),r=l,t[l].status=3,t[l].abortReason="set"):(y(t[l].status===0,"Unexpected transaction status in abort"),t[l].unwatcher(),s=s.concat(He(n.serverSyncTree_,t[l].currentWriteId,!0)),t[l].onComplete&&i.push(t[l].onComplete.bind(null,new Error("set"),!1,null))));r===-1?ql(e,void 0):t.length=r+1,_e(n.eventQueue_,Nn(e),s);for(let l=0;l<i.length;l++)qt(i[l])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function tm(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ee(`Invalid query segment '${t}' in query '${n}'`)}return e}const pa=function(n,e){const t=nm(n),i=t.namespace;t.domain==="firebase.com"&&Re(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Re("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||hp();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new cl(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new D(t.pathString)}},nm=function(n){let e="",t="",i="",s="",r="",l=!0,u="https",d=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(u=n.substring(0,h-1),n=n.substring(h+2));let p=n.indexOf("/");p===-1&&(p=n.length);let g=n.indexOf("?");g===-1&&(g=n.length),e=n.substring(0,Math.min(p,g)),p<g&&(s=em(n.substring(p,g)));const _=tm(n.substring(Math.min(n.length,g)));h=e.indexOf(":"),h>=0?(l=u==="https"||u==="wss",d=parseInt(e.substring(h+1),10)):h=e.length;const v=e.slice(0,h);if(v.toLowerCase()==="localhost")t="localhost";else if(v.split(".").length<=2)t=v;else{const w=e.indexOf(".");i=e.substring(0,w).toLowerCase(),t=e.substring(w+1),r=i}"ns"in _&&(r=_.ns)}return{host:e,port:d,domain:t,subdomain:i,secure:l,scheme:u,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",im=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=ga.charAt(t%64),t=Math.floor(t/64);y(t===0,"Cannot push at time == 0");let l=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)l+=ga.charAt(e[s]);return y(l.length===20,"nextPushId: Length should be 20."),l}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+j(this.snapshot.exportVal())}}class rc{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return y(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return k(this._path)?null:er(this._path)}get ref(){return new Ne(this._repo,this._path)}get _queryIdentifier(){const e=Xo(this._queryParams),t=Qs(e);return t==="{}"?"default":t}get _queryObject(){return Xo(this._queryParams)}isEqual(e){if(e=J(e),!(e instanceof Rr))return!1;const t=this._repo===e._repo,i=tr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Yp(this._path)}}class Ne extends Rr{constructor(e,t){super(e,t,new rr,!1)}get parent(){const e=yl(this._path);return e===null?null:new Ne(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class In{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new D(e),i=Wt(this.ref,e);return new In(this._node.getChild(t),i,W)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new In(s,Wt(this.ref,i),W)))}hasChild(e){const t=new D(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ne(n,e){return n=J(n),n._checkNotDeleted("ref"),e!==void 0?Wt(n._root,e):n._root}function Wt(n,e){return n=J(n),b(n._path)===null?B_("child","path",e,!1):Ql("child","path",e,!1),new Ne(n._repo,U(n._path,e))}function rm(n,e){n=J(n),br("push",n._path),Yl("push",e,n._path,!0);const t=Zl(n._repo),i=im(t),s=Wt(n,i),r=Wt(n,i);let l;return e!=null?l=_i(r,e).then(()=>r):l=Promise.resolve(r),s.then=l.then.bind(l),s.catch=l.then.bind(l,void 0),s}function om(n){return br("remove",n._path),_i(n,null)}function _i(n,e){n=J(n),br("set",n._path),Yl("set",e,n._path,!1);const t=new Sn;return G_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Xe(n,e){F_("update",e,n._path,!1);const t=new Sn;return K_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class Pr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new sc("value",this,new In(e.snapshotNode,new Ne(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new rc(this,e,t):null}matches(e){return e instanceof Pr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Nr{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new rc(this,e,t):null}createEvent(e,t){y(e.childName!=null,"Child events should have a childName.");const i=Wt(new Ne(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new sc(e.type,this,new In(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Nr?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function am(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const d=t,h=(p,g)=>{fa(n._repo,n,u),d(p,g)};h.userCallback=t.userCallback,h.context=t.context,t=h}const l=new sm(t,r||void 0),u=e==="value"?new Pr(l):new Nr(e,l);return Q_(n._repo,n,u),()=>fa(n._repo,n,u)}function Gn(n,e,t,i){return am(n,"value",e,t,i)}a_(Ne);f_(Ne);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="FIREBASE_DATABASE_EMULATOR_HOST",Ws={};let cm=!1;function um(n,e,t,i){n.repoInfo_=new cl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function dm(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Re("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),z("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let l=pa(r,s),u=l.repoInfo,d,h;typeof process<"u"&&process.env&&(h=process.env[lm]),h?(d=!0,r=`http://${h}?ns=${u.namespace}`,l=pa(r,s),u=l.repoInfo):d=!l.repoInfo.secure;const p=s&&d?new At(At.OWNER):new Ip(n.name,n.options,e);U_("Invalid Firebase Database URL",l),k(l.path)||Re("Database URL must point to the root of a Firebase Database (not including a child path).");const g=fm(u,n,p,new Cp(n.name,t));return new pm(g,n)}function hm(n,e){const t=Ws[e];(!t||t[n.key]!==n)&&Re(`Database ${e}(${n.repoInfo_}) has already been deleted.`),J_(n),delete t[n.key]}function fm(n,e,t,i){let s=Ws[e.name];s||(s={},Ws[e.name]=s);let r=s[n.toURLString()];return r&&Re("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new j_(n,cm,t,i),s[n.toURLString()]=r,r}class pm{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(q_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ne(this._repo,N())),this._rootInternal}_delete(){return this._rootInternal!==null&&(hm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Re("Cannot call "+e+" on a deleted database.")}}function gm(n=za(),e){const t=Ks(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Lh("database");i&&_m(t,...i)}return t}function _m(n,e,t,i={}){n=J(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Re("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Re('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new At(At.OWNER);else if(i.mockUserToken){const l=typeof i.mockUserToken=="string"?i.mockUserToken:Bh(i.mockUserToken,n.app.options.projectId);r=new At(l)}um(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(n){ap(jt),xt(new st("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return dm(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),je(Mo,Lo,n),je(Mo,Lo,"esm2017")}Ae.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ae.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};mm();function Or(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function oc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ym=oc,ac=new kn("auth","Firebase",oc());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new zs("@firebase/auth");function vm(n,...e){mi.logLevel<=O.WARN&&mi.warn(`Auth (${jt}): ${n}`,...e)}function Yn(n,...e){mi.logLevel<=O.ERROR&&mi.error(`Auth (${jt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(n,...e){throw Dr(n,...e)}function Ee(n,...e){return Dr(n,...e)}function wm(n,e,t){const i=Object.assign(Object.assign({},ym()),{[e]:t});return new kn("auth","Firebase",i).create(e,{appName:n.name})}function Dr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return ac.create(n,...e)}function I(n,e,...t){if(!n)throw Dr(e,...t)}function Se(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Yn(e),new Error(e)}function Pe(n,e){n||Se(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Em(){return _a()==="http:"||_a()==="https:"}function _a(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Em()||Uh()||"connection"in navigator)?navigator.onLine:!0}function Im(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t){this.shortDelay=e,this.longDelay=t,Pe(t>e,"Short delay should be less than long delay!"),this.isMobile=qs()||Wa()}get(){return Cm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n,e){Pe(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Se("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Se("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Se("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm=new On(3e4,6e4);function Kt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Yt(n,e,t,i,s={}){return cc(n,s,async()=>{let r={},l={};i&&(e==="GET"?l=i:r={body:JSON.stringify(i)});const u=Vt(Object.assign({key:n.config.apiKey},l)).slice(1),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode),lc.fetch()(uc(n,n.config.apiHost,t,u),Object.assign({method:e,headers:d,referrerPolicy:"no-referrer"},r))})}async function cc(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},bm),e);try{const s=new Sm(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const l=await r.json();if("needConfirmation"in l)throw Kn(n,"account-exists-with-different-credential",l);if(r.ok&&!("errorMessage"in l))return l;{const u=r.ok?l.errorMessage:l.error.message,[d,h]=u.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Kn(n,"credential-already-in-use",l);if(d==="EMAIL_EXISTS")throw Kn(n,"email-already-in-use",l);if(d==="USER_DISABLED")throw Kn(n,"user-disabled",l);const p=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wm(n,p,h);me(n,p)}}catch(s){if(s instanceof Ke)throw s;me(n,"network-request-failed",{message:String(s)})}}async function Dn(n,e,t,i,s={}){const r=await Yt(n,e,t,i,s);return"mfaPendingCredential"in r&&me(n,"multi-factor-auth-required",{_serverResponse:r}),r}function uc(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?xr(n.config,s):`${n.config.apiScheme}://${s}`}class Sm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ee(this.auth,"network-request-failed")),Tm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Kn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Ee(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km(n,e){return Yt(n,"POST","/v1/accounts:delete",e)}async function Am(n,e){return Yt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Rm(n,e=!1){const t=J(n),i=await t.getIdToken(e),s=Mr(i);I(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,l=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:pn(gs(s.auth_time)),issuedAtTime:pn(gs(s.iat)),expirationTime:pn(gs(s.exp)),signInProvider:l||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function gs(n){return Number(n)*1e3}function Mr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Yn("JWT malformed, contained fewer than 3 sections"),null;try{const s=ei(t);return s?JSON.parse(s):(Yn("Failed to decode base64 JWT payload"),null)}catch(s){return Yn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Pm(n){const e=Mr(n);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ht(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Ke&&Nm(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Nm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=pn(this.lastLoginAt),this.creationTime=pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Ht(n,Am(t,{idToken:i}));I(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const l=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Mm(r.providerUserInfo):[],u=xm(n.providerData,l),d=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!(u!=null&&u.length),p=d?h:!1,g={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:u,metadata:new dc(r.createdAt,r.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function Dm(n){const e=J(n);await yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function xm(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Mm(n){return n.map(e=>{var{providerId:t}=e,i=Or(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lm(n,e){const t=await cc(n,{},async()=>{const i=Vt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,l=uc(n,s,"/v1/token",`key=${r}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",lc.fetch()(l,{method:"POST",headers:u,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Pm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Lm(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,l=new bn;return i&&(I(typeof i=="string","internal-error",{appName:e}),l.refreshToken=i),s&&(I(typeof s=="string","internal-error",{appName:e}),l.accessToken=s),r&&(I(typeof r=="number","internal-error",{appName:e}),l.expirationTime=r),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bn,this.toJSON())}_performRefresh(){return Se("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(n,e){I(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class it{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Or(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Om(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new dc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Ht(this,this.stsTokenManager.getToken(this.auth,e));return I(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Rm(this,e)}reload(){return Dm(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new it(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await yi(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ht(this,km(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,l,u,d,h,p;const g=(i=t.displayName)!==null&&i!==void 0?i:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,v=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,w=(l=t.photoURL)!==null&&l!==void 0?l:void 0,A=(u=t.tenantId)!==null&&u!==void 0?u:void 0,F=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,X=(h=t.createdAt)!==null&&h!==void 0?h:void 0,de=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:B,emailVerified:ye,isAnonymous:K,providerData:R,stsTokenManager:Oe}=t;I(B&&Oe,e,"internal-error");const Ui=bn.fromJSON(this.name,Oe);I(typeof B=="string",e,"internal-error"),Le(g,e.name),Le(_,e.name),I(typeof ye=="boolean",e,"internal-error"),I(typeof K=="boolean",e,"internal-error"),Le(v,e.name),Le(w,e.name),Le(A,e.name),Le(F,e.name),Le(X,e.name),Le(de,e.name);const pt=new it({uid:B,auth:e,email:_,emailVerified:ye,displayName:g,isAnonymous:K,photoURL:w,phoneNumber:v,tenantId:A,stsTokenManager:Ui,createdAt:X,lastLoginAt:de});return R&&Array.isArray(R)&&(pt.providerData=R.map(gt=>Object.assign({},gt))),F&&(pt._redirectEventId=F),pt}static async _fromIdTokenResponse(e,t,i=!1){const s=new bn;s.updateFromServerResponse(t);const r=new it({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await yi(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ma=new Map;function ke(n){Pe(n instanceof Function,"Expected a class definition");let e=ma.get(n);return e?(Pe(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ma.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}hc.type="NONE";const ya=hc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qn(n,e,t){return`firebase:${n}:${e}:${t}`}class Nt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Qn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Qn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?it._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Nt(ke(ya),e,i);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||ke(ya);const l=Qn(i,e.config.apiKey,e.name);let u=null;for(const h of t)try{const p=await h._get(l);if(p){const g=it._fromJSON(e,p);h!==r&&(u=g),r=h;break}}catch{}const d=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!d.length?new Nt(r,e,i):(r=d[0],u&&await r._set(l,u.toJSON()),await Promise.all(t.map(async h=>{if(h!==r)try{await h._remove(l)}catch{}})),new Nt(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mc(e))return"Blackberry";if(yc(e))return"Webos";if(Lr(e))return"Safari";if((e.includes("chrome/")||pc(e))&&!e.includes("edge/"))return"Chrome";if(_c(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function fc(n=Q()){return/firefox\//i.test(n)}function Lr(n=Q()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pc(n=Q()){return/crios\//i.test(n)}function gc(n=Q()){return/iemobile/i.test(n)}function _c(n=Q()){return/android/i.test(n)}function mc(n=Q()){return/blackberry/i.test(n)}function yc(n=Q()){return/webos/i.test(n)}function Li(n=Q()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Fm(n=Q()){var e;return Li(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Bm(){return Wh()&&document.documentMode===10}function vc(n=Q()){return Li(n)||_c(n)||yc(n)||mc(n)||/windows phone/i.test(n)||gc(n)}function Um(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(n,e=[]){let t;switch(n){case"Browser":t=va(Q());break;case"Worker":t=`${va(Q())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${jt}/${i}`}async function Ec(n,e){return Yt(n,"GET","/v2/recaptchaConfig",Kt(n,e))}function wa(n){return n!==void 0&&n.enterprise!==void 0}class Cc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Ic(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Ee("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Wm().appendChild(i)})}function Hm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const $m="https://www.google.com/recaptcha/enterprise.js?render=",Vm="recaptcha-enterprise",jm="NO_RECAPTCHA";class bc{constructor(e){this.type=Vm,this.auth=Qt(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(l,u)=>{Ec(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const h=new Cc(d);return r.tenantId==null?r._agentRecaptchaConfig=h:r._tenantRecaptchaConfigs[r.tenantId]=h,l(h.siteKey)}}).catch(d=>{u(d)})})}function s(r,l,u){const d=window.grecaptcha;wa(d)?d.enterprise.ready(()=>{d.enterprise.execute(r,{action:e}).then(h=>{l(h)}).catch(()=>{l(jm)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,l)=>{i(this.auth).then(u=>{if(!t&&wa(window.grecaptcha))s(u,r,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}Ic($m+u).then(()=>{s(u,r,l)}).catch(d=>{l(d)})}}).catch(u=>{l(u)})})}}async function vi(n,e,t,i=!1){const s=new bc(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const l=Object.assign({},e);return i?Object.assign(l,{captchaResp:r}):Object.assign(l,{captchaResponse:r}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((l,u)=>{try{const d=e(r);l(d)}catch(d){u(d)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ea(this),this.idTokenSubscription=new Ea(this),this.beforeStateQueue=new qm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ac,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ke(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Nt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(e);(!l||l===u)&&(d!=null&&d.user)&&(s=d.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await yi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Im()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?J(e):null;return t&&I(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(ke(e))})}async initializeRecaptchaConfig(){const e=await Ec(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Cc(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new bc(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new kn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ke(e)||this._popupRedirectResolver;I(t,this,"argument-error"),this.redirectPersistenceManager=await Nt.create(this,[ke(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),l=this._isInitialized?Promise.resolve():this._initializationPromise;return I(l,this,"internal-error"),l.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&vm(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Qt(n){return J(n)}class Ea{constructor(e){this.auth=e,this.observer=null,this.addObserver=Yh(t=>this.observer=t)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n,e){const t=Ks(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(ni(r,e??{}))return s;me(s,"already-initialized")}return t.initialize({options:e})}function Km(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ke);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Ym(n,e,t){const i=Qt(n);I(i._canInitEmulator,i,"emulator-config-failed"),I(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Tc(e),{host:l,port:u}=Qm(e),d=u===null?"":`:${u}`;i.config.emulator={url:`${r}//${l}${d}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:l,port:u,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Jm()}function Tc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Qm(n){const e=Tc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Ca(i.substr(r.length+1))}}else{const[r,l]=i.split(":");return{host:r,port:Ca(l)}}}function Ca(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jm(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Se("not implemented")}_getIdTokenResponse(e){return Se("not implemented")}_linkToIdToken(e,t){return Se("not implemented")}_getReauthenticationResolver(e){return Se("not implemented")}}async function Sc(n,e){return Yt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(n,e){return Dn(n,"POST","/v1/accounts:signInWithPassword",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xm(n,e){return Dn(n,"POST","/v1/accounts:signInWithEmailLink",Kt(n,e))}async function Zm(n,e){return Dn(n,"POST","/v1/accounts:signInWithEmailLink",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Fr{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Tn(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Tn(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const s=await vi(e,i,"signInWithPassword");return _s(e,s)}else return _s(e,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await vi(e,i,"signInWithPassword");return _s(e,r)}else return Promise.reject(s)});case"emailLink":return Xm(e,{email:this._email,oobCode:this._password});default:me(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Sc(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Zm(e,{idToken:t,email:this._email,oobCode:this._password});default:me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(n,e){return Dn(n,"POST","/v1/accounts:signInWithIdp",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="http://localhost";class ut extends Fr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ut(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Or(t,["providerId","signInMethod"]);if(!i||!s)return null;const l=new ut(i,s);return l.idToken=r.idToken||void 0,l.accessToken=r.accessToken||void 0,l.secret=r.secret,l.nonce=r.nonce,l.pendingToken=r.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return Ot(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ot(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ot(e,t)}buildRequest(){const e={requestUri:ey,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ny(n){const e=ln(cn(n)).link,t=e?ln(cn(e)).deep_link_id:null,i=ln(cn(n)).deep_link_id;return(i?ln(cn(i)).link:null)||i||t||e||n}class Br{constructor(e){var t,i,s,r,l,u;const d=ln(cn(e)),h=(t=d.apiKey)!==null&&t!==void 0?t:null,p=(i=d.oobCode)!==null&&i!==void 0?i:null,g=ty((s=d.mode)!==null&&s!==void 0?s:null);I(h&&p&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=p,this.continueUrl=(r=d.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(l=d.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(u=d.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=ny(e);try{return new Br(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this.providerId=Jt.PROVIDER_ID}static credential(e,t){return Tn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Br.parseLink(t);return I(i,"argument-error"),Tn._fromEmailAndCode(e,i.code,i.tenantId)}}Jt.PROVIDER_ID="password";Jt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Jt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends kc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends xn{constructor(){super("facebook.com")}static credential(e){return ut._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends xn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ut._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Be.credential(t,i)}catch{return null}}}Be.GOOGLE_SIGN_IN_METHOD="google.com";Be.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends xn{constructor(){super("github.com")}static credential(e){return ut._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.GITHUB_SIGN_IN_METHOD="github.com";Ue.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We extends xn{constructor(){super("twitter.com")}static credential(e,t){return ut._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return We.credential(t,i)}catch{return null}}}We.TWITTER_SIGN_IN_METHOD="twitter.com";We.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(n,e){return Dn(n,"POST","/v1/accounts:signUp",Kt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await it._fromIdTokenResponse(e,i,s),l=Ia(i);return new dt({user:r,providerId:l,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Ia(i);return new dt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Ia(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Ke{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,wi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new wi(e,t,i,s)}}function Ac(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?wi._fromErrorAndOperation(n,r,e,i):r})}async function iy(n,e,t=!1){const i=await Ht(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return dt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sy(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await Ht(n,Ac(i,s,e,n),t);I(r.idToken,i,"internal-error");const l=Mr(r.idToken);I(l,i,"internal-error");const{sub:u}=l;return I(n.uid===u,i,"user-mismatch"),dt._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&me(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rc(n,e,t=!1){const i="signIn",s=await Ac(n,i,e),r=await dt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function ry(n,e){return Rc(Qt(n),e)}async function Nv(n,e,t){var i;const s=Qt(n),r={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let l;if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const h=await vi(s,r,"signUpPassword");l=ms(s,h)}else l=ms(s,r).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const p=await vi(s,r,"signUpPassword");return ms(s,p)}else return Promise.reject(h)});const u=await l.catch(h=>Promise.reject(h)),d=await dt._fromIdTokenResponse(s,"signIn",u);return await s._updateCurrentUser(d.user),d}function Ov(n,e,t){return ry(J(n),Jt.credential(e,t))}function Dv(n,e){return oy(J(n),null,e)}async function oy(n,e,t){const{auth:i}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(r.email=e),t&&(r.password=t);const l=await Ht(n,Sc(i,r));await n._updateTokensIfNecessary(l,!0)}function ay(n,e,t,i){return J(n).onIdTokenChanged(e,t,i)}function ly(n,e,t){return J(n).beforeAuthStateChanged(e,t)}function cy(n,e,t,i){return J(n).onAuthStateChanged(e,t,i)}function uy(n){return J(n).signOut()}const Ei="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ei,"1"),this.storage.removeItem(Ei),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(){const n=Q();return Lr(n)||Li(n)}const hy=1e3,fy=10;class Nc extends Pc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dy()&&Um(),this.fallbackToPolling=vc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,u,d)=>{this.notifyListeners(l,d)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const l=this.storage.getItem(i);if(e.newValue!==l)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const l=this.storage.getItem(i);!t&&this.localCache[i]===l||this.notifyListeners(i,l)},r=this.storage.getItem(i);Bm()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fy):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},hy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nc.type="LOCAL";const py=Nc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc extends Pc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Oc.type="SESSION";const Dc=Oc;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Fi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,l=this.handlersMap[s];if(!(l!=null&&l.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const u=Array.from(l).map(async h=>h(t.origin,r)),d=await gy(u);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,l;return new Promise((u,d)=>{const h=Ur("",20);s.port1.start();const p=setTimeout(()=>{d(new Error("unsupported_event"))},i);l={messageChannel:s,onMessage(g){const _=g;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(p),r=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),u(_.data.response);break;default:clearTimeout(p),clearTimeout(r),d(new Error("invalid_response"));break}}},this.handlers.add(l),s.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function my(n){Ce().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){return typeof Ce().WorkerGlobalScope<"u"&&typeof Ce().importScripts=="function"}async function yy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function vy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function wy(){return xc()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mc="firebaseLocalStorageDb",Ey=1,Ci="firebaseLocalStorage",Lc="fbase_key";class Mn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Bi(n,e){return n.transaction([Ci],e?"readwrite":"readonly").objectStore(Ci)}function Cy(){const n=indexedDB.deleteDatabase(Mc);return new Mn(n).toPromise()}function $s(){const n=indexedDB.open(Mc,Ey);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Ci,{keyPath:Lc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Ci)?e(i):(i.close(),await Cy(),e(await $s()))})})}async function ba(n,e,t){const i=Bi(n,!0).put({[Lc]:e,value:t});return new Mn(i).toPromise()}async function Iy(n,e){const t=Bi(n,!1).get(e),i=await new Mn(t).toPromise();return i===void 0?null:i.value}function Ta(n,e){const t=Bi(n,!0).delete(e);return new Mn(t).toPromise()}const by=800,Ty=3;class Fc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $s(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Ty)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fi._getInstance(wy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await yy(),!this.activeServiceWorker)return;this.sender=new _y(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||vy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $s();return await ba(e,Ei,"1"),await Ta(e,Ei),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ba(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Iy(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ta(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Bi(s,!1).getAll();return new Mn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),by)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Fc.type="LOCAL";const Sy=Fc;new On(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(n,e){return e?ke(e):(I(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr extends Fr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ay(n){return Rc(n.auth,new Wr(n),n.bypassAuthState)}function Ry(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),sy(t,new Wr(n),n.bypassAuthState)}async function Py(n){const{auth:e,user:t}=n;return I(t,e,"internal-error"),iy(t,new Wr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bc{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:l,type:u}=e;if(l){this.reject(l);return}const d={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(d))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ay;case"linkViaPopup":case"linkViaRedirect":return Py;case"reauthViaPopup":case"reauthViaRedirect":return Ry;default:me(this.auth,"internal-error")}}resolve(e){Pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ny=new On(2e3,1e4);class St extends Bc{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,St.currentPopupAction&&St.currentPopupAction.cancel(),St.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Pe(this.filter.length===1,"Popup operations only handle one event");const e=Ur();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,St.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ny.get())};e()}}St.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy="pendingRedirect",Jn=new Map;class Dy extends Bc{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Jn.get(this.auth._key());if(!e){try{const i=await xy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Jn.set(this.auth._key(),e)}return this.bypassAuthState||Jn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xy(n,e){const t=Fy(e),i=Ly(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function My(n,e){Jn.set(n._key(),e)}function Ly(n){return ke(n._redirectPersistence)}function Fy(n){return Qn(Oy,n.config.apiKey,n.name)}async function By(n,e,t=!1){const i=Qt(n),s=ky(i,e),l=await new Dy(i,s,t).execute();return l&&!t&&(delete l.user._redirectEventId,await i._persistUserIfCurrent(l.user),await i._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=10*60*1e3;class Wy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Hy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Uc(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ee(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Uy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sa(e))}saveEventToCache(e){this.cachedEventUids.add(Sa(e)),this.lastProcessedEventTime=Date.now()}}function Sa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Uc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Hy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Uc(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $y(n,e={}){return Yt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jy=/^https?/;async function qy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await $y(n);for(const t of e)try{if(zy(t))return}catch{}me(n,"unauthorized-domain")}function zy(n){const e=Hs(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===i}if(!jy.test(t))return!1;if(Vy.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=new On(3e4,6e4);function ka(){const n=Ce().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Ky(n){return new Promise((e,t)=>{var i,s,r;function l(){ka(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ka(),t(Ee(n,"network-request-failed"))},timeout:Gy.get()})}if(!((s=(i=Ce().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Ce().gapi)===null||r===void 0)&&r.load)l();else{const u=Hm("iframefcb");return Ce()[u]=()=>{gapi.load?l():t(Ee(n,"network-request-failed"))},Ic(`https://apis.google.com/js/api.js?onload=${u}`).catch(d=>t(d))}}).catch(e=>{throw Xn=null,e})}let Xn=null;function Yy(n){return Xn=Xn||Ky(n),Xn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=new On(5e3,15e3),Jy="__/auth/iframe",Xy="emulator/auth/iframe",Zy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ev=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tv(n){const e=n.config;I(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?xr(e,Xy):`https://${n.config.authDomain}/${Jy}`,i={apiKey:e.apiKey,appName:n.name,v:jt},s=ev.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${Vt(i).slice(1)}`}async function nv(n){const e=await Yy(n),t=Ce().gapi;return I(t,n,"internal-error"),e.open({where:document.body,url:tv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Zy,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const l=Ee(n,"network-request-failed"),u=Ce().setTimeout(()=>{r(l)},Qy.get());function d(){Ce().clearTimeout(u),s(i)}i.ping(d).then(d,()=>{r(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},sv=500,rv=600,ov="_blank",av="http://localhost";class Aa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function lv(n,e,t,i=sv,s=rv){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),l=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const d=Object.assign(Object.assign({},iv),{width:i.toString(),height:s.toString(),top:r,left:l}),h=Q().toLowerCase();t&&(u=pc(h)?ov:t),fc(h)&&(e=e||av,d.scrollbars="yes");const p=Object.entries(d).reduce((_,[v,w])=>`${_}${v}=${w},`,"");if(Fm(h)&&u!=="_self")return cv(e||"",u),new Aa(null);const g=window.open(e||"",u,p);I(g,n,"popup-blocked");try{g.focus()}catch{}return new Aa(g)}function cv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uv="__/auth/handler",dv="emulator/auth/handler",hv=encodeURIComponent("fac");async function Ra(n,e,t,i,s,r){I(n.config.authDomain,n,"auth-domain-config-required"),I(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:jt,eventId:s};if(e instanceof kc){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",ws(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries(r||{}))l[p]=g}if(e instanceof xn){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(l.scopes=p.join(","))}n.tenantId&&(l.tid=n.tenantId);const u=l;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const d=await n._getAppCheckToken(),h=d?`#${hv}=${encodeURIComponent(d)}`:"";return`${fv(n)}?${Vt(u).slice(1)}${h}`}function fv({config:n}){return n.emulator?xr(n,dv):`https://${n.authDomain}/${uv}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="webStorageSupport";class pv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dc,this._completeRedirectFn=By,this._overrideRedirectResult=My}async _openPopup(e,t,i,s){var r;Pe((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const l=await Ra(e,t,i,Hs(),s);return lv(e,l,Ur())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Ra(e,t,i,Hs(),s);return my(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Pe(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await nv(e),i=new Wy(e);return t.register("authEvent",s=>(I(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ys,{type:ys},s=>{var r;const l=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[ys];l!==void 0&&t(!!l),me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return vc()||Lr()||Li()}}const gv=pv;var Pa="@firebase/auth",Na="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yv(n){xt(new st("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=i.options;I(l&&!l.includes(":"),"invalid-api-key",{appName:i.name}),I(!(u!=null&&u.includes(":")),"argument-error",{appName:i.name});const d={apiKey:l,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wc(n)},h=new zm(i,s,r,d);return Km(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),xt(new st("auth-internal",e=>{const t=Qt(e.getProvider("auth").getImmediate());return(i=>new _v(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),je(Pa,Na,mv(n)),je(Pa,Na,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=5*60,wv=Ua("authIdTokenMaxAge")||vv;let Oa=null;const Ev=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>wv)return;const s=t==null?void 0:t.token;Oa!==s&&(Oa=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Cv(n=za()){const e=Ks(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Gm(n,{popupRedirectResolver:gv,persistence:[Sy,py,Dc]}),i=Ua("authTokenSyncURL");if(i){const r=Ev(i);ly(t,r,()=>r(t.currentUser)),ay(t,l=>r(l))}const s=Ba("auth");return s&&Ym(t,`http://${s}`),t}yv("Browser");const{VITE_API_KEY:Iv,VITE_AUTH_DOMAIN:bv,VITE_URL:Tv,VITE_SENDERID:Sv,VITE_APPID:kv,VITE_MEASUREMENTID:Av}={VITE_API_KEY:"AIzaSyCFUHSJz2uLKyLoro6hV10QUzYmoo3UMb0",VITE_AUTH_DOMAIN:"easymakeeasyb.firebaseapp.com",VITE_URL:"https://easymakeeasyb-default-rtdb.firebaseio.com",VITE_SENDERID:"271184286286",VITE_APPID:"1:271184286286:web:321404cd2c69663b1f691f",VITE_MEASUREMENTID:"DZPMFGCKZB",VITE_ADMIN_UID:"4mSSnZwpHRTkyS4ixtLDXvtReaA2",BASE_URL:"/finalEasyBuyEasyMake/",MODE:"production",DEV:!1,PROD:!0},Rv={apiKey:Iv,authDomain:bv,databaseURL:Tv,projectId:"easymakeeasyb",storageBucket:"easymakeeasyb.appspot.com",messagingSenderId:Sv,appId:kv,measurementId:Av},Wc=qa(Rv),ie=gm(Wc),Da=Cv(Wc),xv=Sh("cart",{state:()=>({loadingItem:"",token:"",userId:"",cart:{},cartItems:[],coupons:[],orders:[],myOrder:{},cartNum:0,nickName:"",admin:"",user:{},uid:null}),actions:{getCart(n){const e=ne(ie,`carts/${n}`);Gn(e,t=>{this.cart=t.val(),this.cart?(this.cartItems=this.cart.items,this.cartNum=this.cart.items.length):this.cart||(this.cartItems=[],this.cartNum=0)})},addCart(n,e=1){let t=this.uid;this.uid||(t="1"),this.loadingItem="loading";const i={items:[],coupon:{},deliveryCharge:60,total:0,finalTotal:60},s={product:n,qty:e,total:n.price*e};if(this.cartItems.length)this.cartItems.length!==0&&(JSON.stringify(this.cartItems).indexOf(s.product.id)!==-1?this.cartItems.forEach((r,l)=>{r.product.id===n.id&&(this.cartItems[l].qty+=e,this.cartItems[l].total=n.price*this.cartItems[l].qty)}):JSON.stringify(this.cartItems).indexOf(s.product.id)===-1&&this.cartItems.push(s),i.items=this.cartItems,this.cartItems.forEach(r=>{i.total+=r.total,i.finalTotal+=r.total}),Xe(ne(ie),{[`carts/${t}/`]:{items:i.items,coupon:i.coupon,deliveryCharge:i.deliveryCharge,total:i.total,finalTotal:i.finalTotal}}));else{i.items.push(s),i.total+=s.total,i.finalTotal+=s.total;const r=ne(ie,`carts/${t}`);_i(r,{items:i.items,coupon:i.coupon,deliveryCharge:i.deliveryCharge,total:i.total,finalTotal:i.finalTotal})}this.toastMessage("加入購物車"),this.loadingItem=""},updateCartNum(n,e,t){this.loadingItem="loading";let i=this.uid;this.uid||(i="1"),n==="add"?t+=1:n==="reduce"&&(t-=1);const s={items:[],coupon:{},deliveryCharge:60,total:0,finalTotal:60};this.cartItems.forEach((r,l)=>{r.product.id===e.id&&(this.cartItems[l].qty=t,this.cartItems[l].total=e.price*this.cartItems[l].qty,s.items=this.cartItems)}),s.items.forEach(r=>{s.total+=r.total,s.finalTotal+=r.total}),Xe(ne(ie),{[`carts/${i}/`]:{items:s.items,coupon:s.coupon,deliveryCharge:s.deliveryCharge,total:s.total,finalTotal:s.finalTotal}}),this.toastMessage("購物車更新成功"),this.loadingItem=""},changeCartNum(n,e,t){this.loadingItem="loading";let i=this.uid;this.uid||(i="1"),Number(t.target.value)===0&&(e=1);const s={items:[],coupon:{},deliveryCharge:60,total:0,finalTotal:60};this.cartItems.forEach((r,l)=>{r.product.id===n.id&&(this.cartItems[l].qty=e,this.cartItems[l].total=n.price*this.cartItems[l].qty,s.items=this.cartItems)}),s.items.forEach(r=>{s.total+=r.total,s.finalTotal+=r.total}),Xe(ne(ie),{[`carts/${i}/`]:{items:s.items,coupon:s.coupon,deliveryCharge:s.deliveryCharge,total:s.total,finalTotal:s.finalTotal}}),this.toastMessage("購物車更新成功"),this.loadingItem=""},handleKeyDown(n){(n.key==="e"||n.key==="-")&&n.preventDefault()},deleteCart(n){this.loadingItem="loading";let e=this.uid;if(this.uid||(e="1"),this.cartItems.length===1){this.deleteAllCarts();return}const t={items:[],coupon:{},deliveryCharge:60,total:0,finalTotal:60};this.cartItems.forEach((i,s)=>{i.product.id===n.id&&(this.cartItems.splice(s,1),t.items=this.cartItems)}),t.items.forEach(i=>{t.total+=i.total,t.finalTotal+=i.total}),Xe(ne(ie),{[`carts/${e}/`]:{items:t.items,coupon:t.coupon,deliveryCharge:t.deliveryCharge,total:t.total,finalTotal:t.finalTotal}}),this.toastMessage("購物車刪除成功"),this.loadingItem=""},deleteAllCarts(){this.loadingItem="loading";let n=this.uid;this.uid||(n="1"),om(ne(ie,`carts/${n}`)),this.cartNum=0,this.cart={},this.cartItems=[],this.loadingItem=""},checkCoupon(n){const e=this.coupons.filter(t=>t.code===n);if(e.length===0)this.code="",this.toastMessage("沒有這個優惠券","error");else if(e.length===1){if(this.cart.total<e[0].condition){this.code="",this.toastMessage(`您的消費額未滿${e[0].condition}元`,"error");return}this.toastMessage("使用成功"),this.useCoupon(e[0])}},useCoupon(n){this.loadingItem="loading";let e=this.uid;this.uid||(e="1");const t={items:this.cartItems,coupon:n,deliveryCharge:60,total:this.cart.total,finalTotal:this.cart.finalTotal-Math.ceil(this.cart.total*(n.discount/100))};Xe(ne(ie),{[`carts/${e}/`]:{items:t.items,coupon:t.coupon,deliveryCharge:t.deliveryCharge,total:t.total,finalTotal:t.finalTotal}}),this.loadingItem=""},reUseCoupon(){this.loadingItem="loading";let n=this.uid;this.uid||(n="1");const e={items:this.cartItems,coupon:{},deliveryCharge:60,total:this.cart.total,finalTotal:this.cart.total+60};Xe(ne(ie),{[`carts/${n}/`]:{items:e.items,coupon:e.coupon,deliveryCharge:e.deliveryCharge,total:e.total,finalTotal:e.finalTotal}}),this.toastMessage("取消優惠券"),this.loadingItem=""},getCoupons(){const n=ne(ie,"coupons/");Gn(n,e=>{this.coupons=e.val(),this.coupons=Object.values(this.coupons),this.coupons=this.coupons.filter(t=>t.isEnabled===!0)})},getOrder(n){const e=ne(ie,`orders/${n}`);Gn(e,t=>{this.orders=t.val(),this.orders&&(this.orders=Object.entries(this.orders).map(i=>(i[1].id=i[0],i[1])),this.myOrder=this.orders[this.orders.length-1])})},addOrder(n,e,t,i,s){this.loadingItem="loading";let r=this.uid;this.uid||(r="1"),this.cart.total>=1e3&&(this.cart.finalTotal-=this.cart.deliveryCharge,this.cart.deliveryCharge=0);const l=ne(ie,`orders/${r}`),u=rm(l);if(_i(u,{creatAt:new Date().getTime(),cart:this.cart,paymentStatus:!1,payDate:"",deliveryStatus:"待出貨",email:n,name:e,phoneNum:t,address:i,message:s}),this.uid){let d=0;this.cart.total>=2e3&&this.cart.total<5e3?d=1:this.cart.total>=5e3&&this.cart.total<1e4?d=3:this.cart.total>=1e4&&(d=7),Xe(ne(ie),{[`users/${this.uid}/lotteryTicket/`]:this.user.lotteryTicket+d}),d!==0&&this.toastMessage(`恭喜您獲得${d}張抽獎券`)}this.deleteAllCarts(),So.push("/orderSuccess")},checkLogin(){cy(Da,n=>{if(n){this.uid=n.uid;const e=ne(ie,"users/"+n.uid);Gn(e,t=>{this.user=t.val()})}else this.uid=null,this.user={}})},logout(){uy(Da).then(()=>{this.uid="",this.user={},jn.fire({icon:"success",title:"已登出",showConfirmButton:!1,timer:1500}),this.checkLogin(),window.location.href.includes("/home")?location.reload():So.push("/home")}).catch(n=>{console.log(n,"登出錯誤")})},toastMessage(n,e="success"){jn.mixin({toast:!0,showConfirmButton:!1,timer:1e3,didOpen:i=>{i.addEventListener("mouseenter",jn.stopTimer),i.addEventListener("mouseleave",jn.resumeTimer)}}).fire({icon:e,title:n})},goToTop(){window.scrollTo(0,0)}}});export{Da as a,Gn as b,xv as c,ie as d,om as e,Dv as f,Ov as g,Nv as h,cy as o,rm as p,ne as r,_i as s,Xe as u};
