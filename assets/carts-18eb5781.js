import{c as Me,d as Ph,r as ko}from"./index-9f8e1fb0.js";var Cs={},Nh={get exports(){return Cs},set exports(n){Cs=n}};/*!
* sweetalert2 v11.7.3
* Released under the MIT License.
*/(function(n,e){(function(t,i){n.exports=i()})(Me,function(){var t={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const i="swal2-",s=o=>{const l={};for(const c in o)l[o[c]]=i+o[c];return l},r=s(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),a=s(["success","warning","info","question","error"]),u="SweetAlert2:",d=o=>{const l=[];for(let c=0;c<o.length;c++)l.indexOf(o[c])===-1&&l.push(o[c]);return l},h=o=>o.charAt(0).toUpperCase()+o.slice(1),p=o=>{console.warn(`${u} ${typeof o=="object"?o.join(" "):o}`)},g=o=>{console.error(`${u} ${o}`)},_=[],v=o=>{_.includes(o)||(_.push(o),p(o))},w=(o,l)=>{v(`"${o}" is deprecated and will be removed in the next major release. Please use "${l}" instead.`)},A=o=>typeof o=="function"?o():o,F=o=>o&&typeof o.toPromise=="function",X=o=>F(o)?o.toPromise():Promise.resolve(o),he=o=>o&&Promise.resolve(o)===o,B=()=>document.body.querySelector(`.${r.container}`),ye=o=>{const l=B();return l?l.querySelector(o):null},Y=o=>ye(`.${o}`),R=()=>Y(r.popup),Oe=()=>Y(r.icon),Vi=()=>Y(r["icon-content"]),gt=()=>Y(r.title),_t=()=>Y(r["html-container"]),$r=()=>Y(r.image),ji=()=>Y(r["progress-steps"]),Un=()=>Y(r["validation-message"]),fe=()=>ye(`.${r.actions} .${r.confirm}`),Je=()=>ye(`.${r.actions} .${r.cancel}`),De=()=>ye(`.${r.actions} .${r.deny}`),qc=()=>Y(r["input-label"]),mt=()=>ye(`.${r.loader}`),Zt=()=>Y(r.actions),Vr=()=>Y(r.footer),Wn=()=>Y(r["timer-progress-bar"]),qi=()=>Y(r.close),zc=`
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
`,zi=()=>{const o=Array.from(R().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((c,f)=>{const m=parseInt(c.getAttribute("tabindex")),E=parseInt(f.getAttribute("tabindex"));return m>E?1:m<E?-1:0}),l=Array.from(R().querySelectorAll(zc)).filter(c=>c.getAttribute("tabindex")!=="-1");return d(o.concat(l)).filter(c=>ae(c))},Gi=()=>Te(document.body,r.shown)&&!Te(document.body,r["toast-shown"])&&!Te(document.body,r["no-backdrop"]),Hn=()=>R()&&Te(R(),r.toast),Gc=()=>R().hasAttribute("data-loading"),yt={previousBodyPadding:null},oe=(o,l)=>{if(o.textContent="",l){const f=new DOMParser().parseFromString(l,"text/html");Array.from(f.querySelector("head").childNodes).forEach(m=>{o.appendChild(m)}),Array.from(f.querySelector("body").childNodes).forEach(m=>{m instanceof HTMLVideoElement||m instanceof HTMLAudioElement?o.appendChild(m.cloneNode(!0)):o.appendChild(m)})}},Te=(o,l)=>{if(!l)return!1;const c=l.split(/\s+/);for(let f=0;f<c.length;f++)if(!o.classList.contains(c[f]))return!1;return!0},Kc=(o,l)=>{Array.from(o.classList).forEach(c=>{!Object.values(r).includes(c)&&!Object.values(a).includes(c)&&!Object.values(l.showClass).includes(c)&&o.classList.remove(c)})},ce=(o,l,c)=>{if(Kc(o,l),l.customClass&&l.customClass[c]){if(typeof l.customClass[c]!="string"&&!l.customClass[c].forEach){p(`Invalid type of customClass.${c}! Expected string or iterable object, got "${typeof l.customClass[c]}"`);return}P(o,l.customClass[c])}},Ki=(o,l)=>{if(!l)return null;switch(l){case"select":case"textarea":case"file":return o.querySelector(`.${r.popup} > .${r[l]}`);case"checkbox":return o.querySelector(`.${r.popup} > .${r.checkbox} input`);case"radio":return o.querySelector(`.${r.popup} > .${r.radio} input:checked`)||o.querySelector(`.${r.popup} > .${r.radio} input:first-child`);case"range":return o.querySelector(`.${r.popup} > .${r.range} input`);default:return o.querySelector(`.${r.popup} > .${r.input}`)}},jr=o=>{if(o.focus(),o.type!=="file"){const l=o.value;o.value="",o.value=l}},qr=(o,l,c)=>{!o||!l||(typeof l=="string"&&(l=l.split(/\s+/).filter(Boolean)),l.forEach(f=>{Array.isArray(o)?o.forEach(m=>{c?m.classList.add(f):m.classList.remove(f)}):c?o.classList.add(f):o.classList.remove(f)}))},P=(o,l)=>{qr(o,l,!0)},ve=(o,l)=>{qr(o,l,!1)},xe=(o,l)=>{const c=Array.from(o.children);for(let f=0;f<c.length;f++){const m=c[f];if(m instanceof HTMLElement&&Te(m,l))return m}},vt=(o,l,c)=>{c===`${parseInt(c)}`&&(c=parseInt(c)),c||parseInt(c)===0?o.style[l]=typeof c=="number"?`${c}px`:c:o.style.removeProperty(l)},q=function(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";o.style.display=l},Q=o=>{o.style.display="none"},zr=(o,l,c,f)=>{const m=o.querySelector(l);m&&(m.style[c]=f)},$n=function(o,l){let c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";l?q(o,c):Q(o)},ae=o=>!!(o&&(o.offsetWidth||o.offsetHeight||o.getClientRects().length)),Yc=()=>!ae(fe())&&!ae(De())&&!ae(Je()),Gr=o=>o.scrollHeight>o.clientHeight,Kr=o=>{const l=window.getComputedStyle(o),c=parseFloat(l.getPropertyValue("animation-duration")||"0"),f=parseFloat(l.getPropertyValue("transition-duration")||"0");return c>0||f>0},Yi=function(o){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const c=Wn();ae(c)&&(l&&(c.style.transition="none",c.style.width="100%"),setTimeout(()=>{c.style.transition=`width ${o/1e3}s linear`,c.style.width="0%"},10))},Qc=()=>{const o=Wn(),l=parseInt(window.getComputedStyle(o).width);o.style.removeProperty("transition"),o.style.width="100%";const c=parseInt(window.getComputedStyle(o).width),f=l/c*100;o.style.width=`${f}%`},Jc=100,S={},Xc=()=>{S.previousActiveElement instanceof HTMLElement?(S.previousActiveElement.focus(),S.previousActiveElement=null):document.body&&document.body.focus()},Zc=o=>new Promise(l=>{if(!o)return l();const c=window.scrollX,f=window.scrollY;S.restoreFocusTimeout=setTimeout(()=>{Xc(),l()},Jc),window.scrollTo(c,f)}),Yr=()=>typeof window>"u"||typeof document>"u",eu=`
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
`.replace(/(^|\n)\s*/g,""),tu=()=>{const o=B();return o?(o.remove(),ve([document.documentElement,document.body],[r["no-backdrop"],r["toast-shown"],r["has-column"]]),!0):!1},Xe=()=>{S.currentInstance.resetValidationMessage()},nu=()=>{const o=R(),l=xe(o,r.input),c=xe(o,r.file),f=o.querySelector(`.${r.range} input`),m=o.querySelector(`.${r.range} output`),E=xe(o,r.select),x=o.querySelector(`.${r.checkbox} input`),le=xe(o,r.textarea);l.oninput=Xe,c.onchange=Xe,E.onchange=Xe,x.onchange=Xe,le.oninput=Xe,f.oninput=()=>{Xe(),m.value=f.value},f.onchange=()=>{Xe(),m.value=f.value}},iu=o=>typeof o=="string"?document.querySelector(o):o,su=o=>{const l=R();l.setAttribute("role",o.toast?"alert":"dialog"),l.setAttribute("aria-live",o.toast?"polite":"assertive"),o.toast||l.setAttribute("aria-modal","true")},ru=o=>{window.getComputedStyle(o).direction==="rtl"&&P(B(),r.rtl)},ou=o=>{const l=tu();if(Yr()){g("SweetAlert2 requires document to initialize");return}const c=document.createElement("div");c.className=r.container,l&&P(c,r["no-transition"]),oe(c,eu);const f=iu(o.target);f.appendChild(c),su(o),ru(f),nu()},Qi=(o,l)=>{o instanceof HTMLElement?l.appendChild(o):typeof o=="object"?au(o,l):o&&oe(l,o)},au=(o,l)=>{o.jquery?lu(l,o):oe(l,o.toString())},lu=(o,l)=>{if(o.textContent="",0 in l)for(let c=0;c in l;c++)o.appendChild(l[c].cloneNode(!0));else o.appendChild(l.cloneNode(!0))},en=(()=>{if(Yr())return!1;const o=document.createElement("div"),l={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const c in l)if(Object.prototype.hasOwnProperty.call(l,c)&&typeof o.style[c]<"u")return l[c];return!1})(),cu=()=>{const o=document.createElement("div");o.className=r["scrollbar-measure"],document.body.appendChild(o);const l=o.getBoundingClientRect().width-o.clientWidth;return document.body.removeChild(o),l},uu=(o,l)=>{const c=Zt(),f=mt();!l.showConfirmButton&&!l.showDenyButton&&!l.showCancelButton?Q(c):q(c),ce(c,l,"actions"),du(c,f,l),oe(f,l.loaderHtml),ce(f,l,"loader")};function du(o,l,c){const f=fe(),m=De(),E=Je();Ji(f,"confirm",c),Ji(m,"deny",c),Ji(E,"cancel",c),hu(f,m,E,c),c.reverseButtons&&(c.toast?(o.insertBefore(E,f),o.insertBefore(m,f)):(o.insertBefore(E,l),o.insertBefore(m,l),o.insertBefore(f,l)))}function hu(o,l,c,f){if(!f.buttonsStyling){ve([o,l,c],r.styled);return}P([o,l,c],r.styled),f.confirmButtonColor&&(o.style.backgroundColor=f.confirmButtonColor,P(o,r["default-outline"])),f.denyButtonColor&&(l.style.backgroundColor=f.denyButtonColor,P(l,r["default-outline"])),f.cancelButtonColor&&(c.style.backgroundColor=f.cancelButtonColor,P(c,r["default-outline"]))}function Ji(o,l,c){$n(o,c[`show${h(l)}Button`],"inline-block"),oe(o,c[`${l}ButtonText`]),o.setAttribute("aria-label",c[`${l}ButtonAriaLabel`]),o.className=r[l],ce(o,c,`${l}Button`),P(o,c[`${l}ButtonClass`])}const fu=(o,l)=>{const c=qi();oe(c,l.closeButtonHtml),ce(c,l,"closeButton"),$n(c,l.showCloseButton),c.setAttribute("aria-label",l.closeButtonAriaLabel)},pu=(o,l)=>{const c=B();c&&(gu(c,l.backdrop),_u(c,l.position),mu(c,l.grow),ce(c,l,"container"))};function gu(o,l){typeof l=="string"?o.style.background=l:l||P([document.documentElement,document.body],r["no-backdrop"])}function _u(o,l){l in r?P(o,r[l]):(p('The "position" parameter is not valid, defaulting to "center"'),P(o,r.center))}function mu(o,l){if(l&&typeof l=="string"){const c=`grow-${l}`;c in r&&P(o,r[c])}}const yu=["input","file","range","select","radio","checkbox","textarea"],vu=(o,l)=>{const c=R(),f=t.innerParams.get(o),m=!f||l.input!==f.input;yu.forEach(E=>{const x=xe(c,r[E]);Iu(E,l.inputAttributes),x.className=r[E],m&&Q(x)}),l.input&&(m&&wu(l),Cu(l))},wu=o=>{if(!ne[o.input]){g(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${o.input}"`);return}const l=Qr(o.input),c=ne[o.input](l,o);q(l),o.inputAutoFocus&&setTimeout(()=>{jr(c)})},Eu=o=>{for(let l=0;l<o.attributes.length;l++){const c=o.attributes[l].name;["type","value","style"].includes(c)||o.removeAttribute(c)}},Iu=(o,l)=>{const c=Ki(R(),o);if(c){Eu(c);for(const f in l)c.setAttribute(f,l[f])}},Cu=o=>{const l=Qr(o.input);typeof o.customClass=="object"&&P(l,o.customClass.input)},Xi=(o,l)=>{(!o.placeholder||l.inputPlaceholder)&&(o.placeholder=l.inputPlaceholder)},tn=(o,l,c)=>{if(c.inputLabel){o.id=r.input;const f=document.createElement("label"),m=r["input-label"];f.setAttribute("for",o.id),f.className=m,typeof c.customClass=="object"&&P(f,c.customClass.inputLabel),f.innerText=c.inputLabel,l.insertAdjacentElement("beforebegin",f)}},Qr=o=>xe(R(),r[o]||r.input),Vn=(o,l)=>{["string","number"].includes(typeof l)?o.value=`${l}`:he(l)||p(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof l}"`)},ne={};ne.text=ne.email=ne.password=ne.number=ne.tel=ne.url=(o,l)=>(Vn(o,l.inputValue),tn(o,o,l),Xi(o,l),o.type=l.input,o),ne.file=(o,l)=>(tn(o,o,l),Xi(o,l),o),ne.range=(o,l)=>{const c=o.querySelector("input"),f=o.querySelector("output");return Vn(c,l.inputValue),c.type=l.input,Vn(f,l.inputValue),tn(c,o,l),o},ne.select=(o,l)=>{if(o.textContent="",l.inputPlaceholder){const c=document.createElement("option");oe(c,l.inputPlaceholder),c.value="",c.disabled=!0,c.selected=!0,o.appendChild(c)}return tn(o,o,l),o},ne.radio=o=>(o.textContent="",o),ne.checkbox=(o,l)=>{const c=Ki(R(),"checkbox");c.value="1",c.id=r.checkbox,c.checked=Boolean(l.inputValue);const f=o.querySelector("span");return oe(f,l.inputPlaceholder),c},ne.textarea=(o,l)=>{Vn(o,l.inputValue),Xi(o,l),tn(o,o,l);const c=f=>parseInt(window.getComputedStyle(f).marginLeft)+parseInt(window.getComputedStyle(f).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const f=parseInt(window.getComputedStyle(R()).width),m=()=>{const E=o.offsetWidth+c(o);E>f?R().style.width=`${E}px`:R().style.width=null};new MutationObserver(m).observe(o,{attributes:!0,attributeFilter:["style"]})}}),o};const bu=(o,l)=>{const c=_t();ce(c,l,"htmlContainer"),l.html?(Qi(l.html,c),q(c,"block")):l.text?(c.textContent=l.text,q(c,"block")):Q(c),vu(o,l)},Tu=(o,l)=>{const c=Vr();$n(c,l.footer),l.footer&&Qi(l.footer,c),ce(c,l,"footer")},Su=(o,l)=>{const c=t.innerParams.get(o),f=Oe();if(c&&l.icon===c.icon){Xr(f,l),Jr(f,l);return}if(!l.icon&&!l.iconHtml){Q(f);return}if(l.icon&&Object.keys(a).indexOf(l.icon)===-1){g(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${l.icon}"`),Q(f);return}q(f),Xr(f,l),Jr(f,l),P(f,l.showClass.icon)},Jr=(o,l)=>{for(const c in a)l.icon!==c&&ve(o,a[c]);P(o,a[l.icon]),Pu(o,l),ku(),ce(o,l,"icon")},ku=()=>{const o=R(),l=window.getComputedStyle(o).getPropertyValue("background-color"),c=o.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let f=0;f<c.length;f++)c[f].style.backgroundColor=l},Au=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,Ru=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Xr=(o,l)=>{let c=o.innerHTML,f;l.iconHtml?f=Zr(l.iconHtml):l.icon==="success"?(f=Au,c=c.replace(/ style=".*?"/g,"")):l.icon==="error"?f=Ru:f=Zr({question:"?",warning:"!",info:"i"}[l.icon]),c.trim()!==f.trim()&&oe(o,f)},Pu=(o,l)=>{if(l.iconColor){o.style.color=l.iconColor,o.style.borderColor=l.iconColor;for(const c of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])zr(o,c,"backgroundColor",l.iconColor);zr(o,".swal2-success-ring","borderColor",l.iconColor)}},Zr=o=>`<div class="${r["icon-content"]}">${o}</div>`,Nu=(o,l)=>{const c=$r();if(!l.imageUrl){Q(c);return}q(c,""),c.setAttribute("src",l.imageUrl),c.setAttribute("alt",l.imageAlt),vt(c,"width",l.imageWidth),vt(c,"height",l.imageHeight),c.className=r.image,ce(c,l,"image")},Ou=(o,l)=>{const c=B(),f=R();l.toast?(vt(c,"width",l.width),f.style.width="100%",f.insertBefore(mt(),Oe())):vt(f,"width",l.width),vt(f,"padding",l.padding),l.color&&(f.style.color=l.color),l.background&&(f.style.background=l.background),Q(Un()),Du(f,l)},Du=(o,l)=>{o.className=`${r.popup} ${ae(o)?l.showClass.popup:""}`,l.toast?(P([document.documentElement,document.body],r["toast-shown"]),P(o,r.toast)):P(o,r.modal),ce(o,l,"popup"),typeof l.customClass=="string"&&P(o,l.customClass),l.icon&&P(o,r[`icon-${l.icon}`])},xu=(o,l)=>{const c=ji();if(!l.progressSteps||l.progressSteps.length===0){Q(c);return}q(c),c.textContent="",l.currentProgressStep>=l.progressSteps.length&&p("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),l.progressSteps.forEach((f,m)=>{const E=Mu(f);if(c.appendChild(E),m===l.currentProgressStep&&P(E,r["active-progress-step"]),m!==l.progressSteps.length-1){const x=Lu(l);c.appendChild(x)}})},Mu=o=>{const l=document.createElement("li");return P(l,r["progress-step"]),oe(l,o),l},Lu=o=>{const l=document.createElement("li");return P(l,r["progress-step-line"]),o.progressStepsDistance&&vt(l,"width",o.progressStepsDistance),l},Fu=(o,l)=>{const c=gt();$n(c,l.title||l.titleText,"block"),l.title&&Qi(l.title,c),l.titleText&&(c.innerText=l.titleText),ce(c,l,"title")},eo=(o,l)=>{Ou(o,l),pu(o,l),xu(o,l),Su(o,l),Nu(o,l),Fu(o,l),fu(o,l),bu(o,l),uu(o,l),Tu(o,l),typeof l.didRender=="function"&&l.didRender(R())};function to(){const o=t.innerParams.get(this);if(!o)return;const l=t.domCache.get(this);Q(l.loader),Hn()?o.icon&&q(Oe()):Bu(l),ve([l.popup,l.actions],r.loading),l.popup.removeAttribute("aria-busy"),l.popup.removeAttribute("data-loading"),l.confirmButton.disabled=!1,l.denyButton.disabled=!1,l.cancelButton.disabled=!1}const Bu=o=>{const l=o.popup.getElementsByClassName(o.loader.getAttribute("data-button-to-replace"));l.length?q(l[0],"inline-block"):Yc()&&Q(o.actions)};function Uu(o){const l=t.innerParams.get(o||this),c=t.domCache.get(o||this);return c?Ki(c.popup,l.input):null}const Wu=()=>ae(R()),no=()=>fe()&&fe().click(),Hu=()=>De()&&De().click(),$u=()=>Je()&&Je().click(),wt=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),io=o=>{o.keydownTarget&&o.keydownHandlerAdded&&(o.keydownTarget.removeEventListener("keydown",o.keydownHandler,{capture:o.keydownListenerCapture}),o.keydownHandlerAdded=!1)},Vu=(o,l,c,f)=>{io(l),c.toast||(l.keydownHandler=m=>qu(o,m,f),l.keydownTarget=c.keydownListenerCapture?window:R(),l.keydownListenerCapture=c.keydownListenerCapture,l.keydownTarget.addEventListener("keydown",l.keydownHandler,{capture:l.keydownListenerCapture}),l.keydownHandlerAdded=!0)},Zi=(o,l)=>{const c=zi();if(c.length){o=o+l,o===c.length?o=0:o===-1&&(o=c.length-1),c[o].focus();return}R().focus()},so=["ArrowRight","ArrowDown"],ju=["ArrowLeft","ArrowUp"],qu=(o,l,c)=>{const f=t.innerParams.get(o);f&&(l.isComposing||l.keyCode===229||(f.stopKeydownPropagation&&l.stopPropagation(),l.key==="Enter"?zu(o,l,f):l.key==="Tab"?Gu(l):[...so,...ju].includes(l.key)?Ku(l.key):l.key==="Escape"&&Yu(l,f,c)))},zu=(o,l,c)=>{if(A(c.allowEnterKey)&&l.target&&o.getInput()&&l.target instanceof HTMLElement&&l.target.outerHTML===o.getInput().outerHTML){if(["textarea","file"].includes(c.input))return;no(),l.preventDefault()}},Gu=o=>{const l=o.target,c=zi();let f=-1;for(let m=0;m<c.length;m++)if(l===c[m]){f=m;break}o.shiftKey?Zi(f,-1):Zi(f,1),o.stopPropagation(),o.preventDefault()},Ku=o=>{const l=fe(),c=De(),f=Je(),m=[l,c,f];if(document.activeElement instanceof HTMLElement&&!m.includes(document.activeElement))return;const E=so.includes(o)?"nextElementSibling":"previousElementSibling";let x=document.activeElement;for(let le=0;le<Zt().children.length;le++){if(x=x[E],!x)return;if(x instanceof HTMLButtonElement&&ae(x))break}x instanceof HTMLButtonElement&&x.focus()},Yu=(o,l,c)=>{A(l.allowEscapeKey)&&(o.preventDefault(),c(wt.esc))};var nn={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Qu=()=>{Array.from(document.body.children).forEach(l=>{l===B()||l.contains(B())||(l.hasAttribute("aria-hidden")&&l.setAttribute("data-previous-aria-hidden",l.getAttribute("aria-hidden")),l.setAttribute("aria-hidden","true"))})},ro=()=>{Array.from(document.body.children).forEach(l=>{l.hasAttribute("data-previous-aria-hidden")?(l.setAttribute("aria-hidden",l.getAttribute("data-previous-aria-hidden")),l.removeAttribute("data-previous-aria-hidden")):l.removeAttribute("aria-hidden")})},Ju=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!Te(document.body,r.iosfix)){const l=document.body.scrollTop;document.body.style.top=`${l*-1}px`,P(document.body,r.iosfix),Zu(),Xu()}},Xu=()=>{const o=navigator.userAgent,l=!!o.match(/iPad/i)||!!o.match(/iPhone/i),c=!!o.match(/WebKit/i);l&&c&&!o.match(/CriOS/i)&&R().scrollHeight>window.innerHeight-44&&(B().style.paddingBottom=`${44}px`)},Zu=()=>{const o=B();let l;o.ontouchstart=c=>{l=ed(c)},o.ontouchmove=c=>{l&&(c.preventDefault(),c.stopPropagation())}},ed=o=>{const l=o.target,c=B();return td(o)||nd(o)?!1:l===c||!Gr(c)&&l instanceof HTMLElement&&l.tagName!=="INPUT"&&l.tagName!=="TEXTAREA"&&!(Gr(_t())&&_t().contains(l))},td=o=>o.touches&&o.touches.length&&o.touches[0].touchType==="stylus",nd=o=>o.touches&&o.touches.length>1,id=()=>{if(Te(document.body,r.iosfix)){const o=parseInt(document.body.style.top,10);ve(document.body,r.iosfix),document.body.style.top="",document.body.scrollTop=o*-1}},sd=()=>{yt.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(yt.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${yt.previousBodyPadding+cu()}px`)},rd=()=>{yt.previousBodyPadding!==null&&(document.body.style.paddingRight=`${yt.previousBodyPadding}px`,yt.previousBodyPadding=null)};function oo(o,l,c,f){Hn()?ao(o,f):(Zc(c).then(()=>ao(o,f)),io(S)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(l.setAttribute("style","display:none !important"),l.removeAttribute("class"),l.innerHTML=""):l.remove(),Gi()&&(rd(),id(),ro()),od()}function od(){ve([document.documentElement,document.body],[r.shown,r["height-auto"],r["no-backdrop"],r["toast-shown"]])}function jn(o){o=ud(o);const l=nn.swalPromiseResolve.get(this),c=ld(this);this.isAwaitingPromise()?o.isDismissed||(sn(this),l(o)):c&&l(o)}function ad(){return!!t.awaitingPromise.get(this)}const ld=o=>{const l=R();if(!l)return!1;const c=t.innerParams.get(o);if(!c||Te(l,c.hideClass.popup))return!1;ve(l,c.showClass.popup),P(l,c.hideClass.popup);const f=B();return ve(f,c.showClass.backdrop),P(f,c.hideClass.backdrop),dd(o,l,c),!0};function cd(o){const l=nn.swalPromiseReject.get(this);sn(this),l&&l(o)}const sn=o=>{o.isAwaitingPromise()&&(t.awaitingPromise.delete(o),t.innerParams.get(o)||o._destroy())},ud=o=>typeof o>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},o),dd=(o,l,c)=>{const f=B(),m=en&&Kr(l);typeof c.willClose=="function"&&c.willClose(l),m?hd(o,l,f,c.returnFocus,c.didClose):oo(o,f,c.returnFocus,c.didClose)},hd=(o,l,c,f,m)=>{S.swalCloseEventFinishedCallback=oo.bind(null,o,c,f,m),l.addEventListener(en,function(E){E.target===l&&(S.swalCloseEventFinishedCallback(),delete S.swalCloseEventFinishedCallback)})},ao=(o,l)=>{setTimeout(()=>{typeof l=="function"&&l.bind(o.params)(),o._destroy()})};function lo(o,l,c){const f=t.domCache.get(o);l.forEach(m=>{f[m].disabled=c})}function co(o,l){if(o)if(o.type==="radio"){const f=o.parentNode.parentNode.querySelectorAll("input");for(let m=0;m<f.length;m++)f[m].disabled=l}else o.disabled=l}function fd(){lo(this,["confirmButton","denyButton","cancelButton"],!1)}function pd(){lo(this,["confirmButton","denyButton","cancelButton"],!0)}function gd(){co(this.getInput(),!1)}function _d(){co(this.getInput(),!0)}function md(o){const l=t.domCache.get(this),c=t.innerParams.get(this);oe(l.validationMessage,o),l.validationMessage.className=r["validation-message"],c.customClass&&c.customClass.validationMessage&&P(l.validationMessage,c.customClass.validationMessage),q(l.validationMessage);const f=this.getInput();f&&(f.setAttribute("aria-invalid",!0),f.setAttribute("aria-describedby",r["validation-message"]),jr(f),P(f,r.inputerror))}function yd(){const o=t.domCache.get(this);o.validationMessage&&Q(o.validationMessage);const l=this.getInput();l&&(l.removeAttribute("aria-invalid"),l.removeAttribute("aria-describedby"),ve(l,r.inputerror))}const Et={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},vd=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],wd={},Ed=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],uo=o=>Object.prototype.hasOwnProperty.call(Et,o),ho=o=>vd.indexOf(o)!==-1,es=o=>wd[o],Id=o=>{uo(o)||p(`Unknown parameter "${o}"`)},Cd=o=>{Ed.includes(o)&&p(`The parameter "${o}" is incompatible with toasts`)},bd=o=>{es(o)&&w(o,es(o))},Td=o=>{o.backdrop===!1&&o.allowOutsideClick&&p('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const l in o)Id(l),o.toast&&Cd(l),bd(l)};function Sd(o){const l=R(),c=t.innerParams.get(this);if(!l||Te(l,c.hideClass.popup)){p("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const f=kd(o),m=Object.assign({},c,f);eo(this,m),t.innerParams.set(this,m),Object.defineProperties(this,{params:{value:Object.assign({},this.params,o),writable:!1,enumerable:!0}})}const kd=o=>{const l={};return Object.keys(o).forEach(c=>{ho(c)?l[c]=o[c]:p(`Invalid parameter to update: ${c}`)}),l};function Ad(){const o=t.domCache.get(this),l=t.innerParams.get(this);if(!l){fo(this);return}o.popup&&S.swalCloseEventFinishedCallback&&(S.swalCloseEventFinishedCallback(),delete S.swalCloseEventFinishedCallback),typeof l.didDestroy=="function"&&l.didDestroy(),Rd(this)}const Rd=o=>{fo(o),delete o.params,delete S.keydownHandler,delete S.keydownTarget,delete S.currentInstance},fo=o=>{o.isAwaitingPromise()?(ts(t,o),t.awaitingPromise.set(o,!0)):(ts(nn,o),ts(t,o))},ts=(o,l)=>{for(const c in o)o[c].delete(l)};var po=Object.freeze({__proto__:null,_destroy:Ad,close:jn,closeModal:jn,closePopup:jn,closeToast:jn,disableButtons:pd,disableInput:_d,disableLoading:to,enableButtons:fd,enableInput:gd,getInput:Uu,handleAwaitingPromise:sn,hideLoading:to,isAwaitingPromise:ad,rejectPromise:cd,resetValidationMessage:yd,showValidationMessage:md,update:Sd});const It=o=>{let l=R();l||new zn,l=R();const c=mt();Hn()?Q(Oe()):Pd(l,o),q(c),l.setAttribute("data-loading","true"),l.setAttribute("aria-busy","true"),l.focus()},Pd=(o,l)=>{const c=Zt(),f=mt();!l&&ae(fe())&&(l=fe()),q(c),l&&(Q(l),f.setAttribute("data-button-to-replace",l.className)),f.parentNode.insertBefore(f,l),P([o,c],r.loading)},Nd=(o,l)=>{l.input==="select"||l.input==="radio"?Ld(o,l):["text","email","number","tel","textarea"].includes(l.input)&&(F(l.inputValue)||he(l.inputValue))&&(It(fe()),Fd(o,l))},Od=(o,l)=>{const c=o.getInput();if(!c)return null;switch(l.input){case"checkbox":return Dd(c);case"radio":return xd(c);case"file":return Md(c);default:return l.inputAutoTrim?c.value.trim():c.value}},Dd=o=>o.checked?1:0,xd=o=>o.checked?o.value:null,Md=o=>o.files.length?o.getAttribute("multiple")!==null?o.files:o.files[0]:null,Ld=(o,l)=>{const c=R(),f=m=>{Bd[l.input](c,ns(m),l)};F(l.inputOptions)||he(l.inputOptions)?(It(fe()),X(l.inputOptions).then(m=>{o.hideLoading(),f(m)})):typeof l.inputOptions=="object"?f(l.inputOptions):g(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof l.inputOptions}`)},Fd=(o,l)=>{const c=o.getInput();Q(c),X(l.inputValue).then(f=>{c.value=l.input==="number"?`${parseFloat(f)||0}`:`${f}`,q(c),c.focus(),o.hideLoading()}).catch(f=>{g(`Error in inputValue promise: ${f}`),c.value="",q(c),c.focus(),o.hideLoading()})},Bd={select:(o,l,c)=>{const f=xe(o,r.select),m=(E,x,le)=>{const Z=document.createElement("option");Z.value=le,oe(Z,x),Z.selected=go(le,c.inputValue),E.appendChild(Z)};l.forEach(E=>{const x=E[0],le=E[1];if(Array.isArray(le)){const Z=document.createElement("optgroup");Z.label=x,Z.disabled=!1,f.appendChild(Z),le.forEach(bt=>m(Z,bt[1],bt[0]))}else m(f,le,x)}),f.focus()},radio:(o,l,c)=>{const f=xe(o,r.radio);l.forEach(E=>{const x=E[0],le=E[1],Z=document.createElement("input"),bt=document.createElement("label");Z.type="radio",Z.name=r.radio,Z.value=x,go(x,c.inputValue)&&(Z.checked=!0);const os=document.createElement("span");oe(os,le),os.className=r.label,bt.appendChild(Z),bt.appendChild(os),f.appendChild(bt)});const m=f.querySelectorAll("input");m.length&&m[0].focus()}},ns=o=>{const l=[];return typeof Map<"u"&&o instanceof Map?o.forEach((c,f)=>{let m=c;typeof m=="object"&&(m=ns(m)),l.push([f,m])}):Object.keys(o).forEach(c=>{let f=o[c];typeof f=="object"&&(f=ns(f)),l.push([c,f])}),l},go=(o,l)=>l&&l.toString()===o.toString(),Ud=o=>{const l=t.innerParams.get(o);o.disableButtons(),l.input?_o(o,"confirm"):ss(o,!0)},Wd=o=>{const l=t.innerParams.get(o);o.disableButtons(),l.returnInputValueOnDeny?_o(o,"deny"):is(o,!1)},Hd=(o,l)=>{o.disableButtons(),l(wt.cancel)},_o=(o,l)=>{const c=t.innerParams.get(o);if(!c.input){g(`The "input" parameter is needed to be set when using returnInputValueOn${h(l)}`);return}const f=Od(o,c);c.inputValidator?$d(o,f,l):o.getInput().checkValidity()?l==="deny"?is(o,f):ss(o,f):(o.enableButtons(),o.showValidationMessage(c.validationMessage))},$d=(o,l,c)=>{const f=t.innerParams.get(o);o.disableInput(),Promise.resolve().then(()=>X(f.inputValidator(l,f.validationMessage))).then(E=>{o.enableButtons(),o.enableInput(),E?o.showValidationMessage(E):c==="deny"?is(o,l):ss(o,l)})},is=(o,l)=>{const c=t.innerParams.get(o||void 0);c.showLoaderOnDeny&&It(De()),c.preDeny?(t.awaitingPromise.set(o||void 0,!0),Promise.resolve().then(()=>X(c.preDeny(l,c.validationMessage))).then(m=>{m===!1?(o.hideLoading(),sn(o)):o.close({isDenied:!0,value:typeof m>"u"?l:m})}).catch(m=>yo(o||void 0,m))):o.close({isDenied:!0,value:l})},mo=(o,l)=>{o.close({isConfirmed:!0,value:l})},yo=(o,l)=>{o.rejectPromise(l)},ss=(o,l)=>{const c=t.innerParams.get(o||void 0);c.showLoaderOnConfirm&&It(),c.preConfirm?(o.resetValidationMessage(),t.awaitingPromise.set(o||void 0,!0),Promise.resolve().then(()=>X(c.preConfirm(l,c.validationMessage))).then(m=>{ae(Un())||m===!1?(o.hideLoading(),sn(o)):mo(o,typeof m>"u"?l:m)}).catch(m=>yo(o||void 0,m))):mo(o,l)},Vd=(o,l,c)=>{t.innerParams.get(o).toast?jd(o,l,c):(zd(l),Gd(l),Kd(o,l,c))},jd=(o,l,c)=>{l.popup.onclick=()=>{const f=t.innerParams.get(o);f&&(qd(f)||f.timer||f.input)||c(wt.close)}},qd=o=>o.showConfirmButton||o.showDenyButton||o.showCancelButton||o.showCloseButton;let qn=!1;const zd=o=>{o.popup.onmousedown=()=>{o.container.onmouseup=function(l){o.container.onmouseup=void 0,l.target===o.container&&(qn=!0)}}},Gd=o=>{o.container.onmousedown=()=>{o.popup.onmouseup=function(l){o.popup.onmouseup=void 0,(l.target===o.popup||o.popup.contains(l.target))&&(qn=!0)}}},Kd=(o,l,c)=>{l.container.onclick=f=>{const m=t.innerParams.get(o);if(qn){qn=!1;return}f.target===l.container&&A(m.allowOutsideClick)&&c(wt.backdrop)}},Yd=o=>typeof o=="object"&&o.jquery,vo=o=>o instanceof Element||Yd(o),Qd=o=>{const l={};return typeof o[0]=="object"&&!vo(o[0])?Object.assign(l,o[0]):["title","html","icon"].forEach((c,f)=>{const m=o[f];typeof m=="string"||vo(m)?l[c]=m:m!==void 0&&g(`Unexpected type of ${c}! Expected "string" or "Element", got ${typeof m}`)}),l};function Jd(){const o=this;for(var l=arguments.length,c=new Array(l),f=0;f<l;f++)c[f]=arguments[f];return new o(...c)}function Xd(o){class l extends this{_main(f,m){return super._main(f,Object.assign({},o,m))}}return l}const Zd=()=>S.timeout&&S.timeout.getTimerLeft(),wo=()=>{if(S.timeout)return Qc(),S.timeout.stop()},Eo=()=>{if(S.timeout){const o=S.timeout.start();return Yi(o),o}},eh=()=>{const o=S.timeout;return o&&(o.running?wo():Eo())},th=o=>{if(S.timeout){const l=S.timeout.increase(o);return Yi(l,!0),l}},nh=()=>S.timeout&&S.timeout.isRunning();let Io=!1;const rs={};function ih(){let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";rs[o]=this,Io||(document.body.addEventListener("click",sh),Io=!0)}const sh=o=>{for(let l=o.target;l&&l!==document;l=l.parentNode)for(const c in rs){const f=l.getAttribute(c);if(f){rs[c].fire({template:f});return}}};var rh=Object.freeze({__proto__:null,argsToParams:Qd,bindClickHandler:ih,clickCancel:$u,clickConfirm:no,clickDeny:Hu,enableLoading:It,fire:Jd,getActions:Zt,getCancelButton:Je,getCloseButton:qi,getConfirmButton:fe,getContainer:B,getDenyButton:De,getFocusableElements:zi,getFooter:Vr,getHtmlContainer:_t,getIcon:Oe,getIconContent:Vi,getImage:$r,getInputLabel:qc,getLoader:mt,getPopup:R,getProgressSteps:ji,getTimerLeft:Zd,getTimerProgressBar:Wn,getTitle:gt,getValidationMessage:Un,increaseTimer:th,isDeprecatedParameter:es,isLoading:Gc,isTimerRunning:nh,isUpdatableParameter:ho,isValidParameter:uo,isVisible:Wu,mixin:Xd,resumeTimer:Eo,showLoading:It,stopTimer:wo,toggleTimer:eh});class oh{constructor(l,c){this.callback=l,this.remaining=c,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(l){const c=this.running;return c&&this.stop(),this.remaining+=l,c&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Co=["swal-title","swal-html","swal-footer"],ah=o=>{const l=typeof o.template=="string"?document.querySelector(o.template):o.template;if(!l)return{};const c=l.content;return gh(c),Object.assign(lh(c),ch(c),uh(c),dh(c),hh(c),fh(c),ph(c,Co))},lh=o=>{const l={};return Array.from(o.querySelectorAll("swal-param")).forEach(f=>{Ze(f,["name","value"]);const m=f.getAttribute("name"),E=f.getAttribute("value");typeof Et[m]=="boolean"?l[m]=E!=="false":typeof Et[m]=="object"?l[m]=JSON.parse(E):l[m]=E}),l},ch=o=>{const l={};return Array.from(o.querySelectorAll("swal-function-param")).forEach(f=>{const m=f.getAttribute("name"),E=f.getAttribute("value");l[m]=new Function(`return ${E}`)()}),l},uh=o=>{const l={};return Array.from(o.querySelectorAll("swal-button")).forEach(f=>{Ze(f,["type","color","aria-label"]);const m=f.getAttribute("type");l[`${m}ButtonText`]=f.innerHTML,l[`show${h(m)}Button`]=!0,f.hasAttribute("color")&&(l[`${m}ButtonColor`]=f.getAttribute("color")),f.hasAttribute("aria-label")&&(l[`${m}ButtonAriaLabel`]=f.getAttribute("aria-label"))}),l},dh=o=>{const l={},c=o.querySelector("swal-image");return c&&(Ze(c,["src","width","height","alt"]),c.hasAttribute("src")&&(l.imageUrl=c.getAttribute("src")),c.hasAttribute("width")&&(l.imageWidth=c.getAttribute("width")),c.hasAttribute("height")&&(l.imageHeight=c.getAttribute("height")),c.hasAttribute("alt")&&(l.imageAlt=c.getAttribute("alt"))),l},hh=o=>{const l={},c=o.querySelector("swal-icon");return c&&(Ze(c,["type","color"]),c.hasAttribute("type")&&(l.icon=c.getAttribute("type")),c.hasAttribute("color")&&(l.iconColor=c.getAttribute("color")),l.iconHtml=c.innerHTML),l},fh=o=>{const l={},c=o.querySelector("swal-input");c&&(Ze(c,["type","label","placeholder","value"]),l.input=c.getAttribute("type")||"text",c.hasAttribute("label")&&(l.inputLabel=c.getAttribute("label")),c.hasAttribute("placeholder")&&(l.inputPlaceholder=c.getAttribute("placeholder")),c.hasAttribute("value")&&(l.inputValue=c.getAttribute("value")));const f=Array.from(o.querySelectorAll("swal-input-option"));return f.length&&(l.inputOptions={},f.forEach(m=>{Ze(m,["value"]);const E=m.getAttribute("value"),x=m.innerHTML;l.inputOptions[E]=x})),l},ph=(o,l)=>{const c={};for(const f in l){const m=l[f],E=o.querySelector(m);E&&(Ze(E,[]),c[m.replace(/^swal-/,"")]=E.innerHTML.trim())}return c},gh=o=>{const l=Co.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(o.children).forEach(c=>{const f=c.tagName.toLowerCase();l.includes(f)||p(`Unrecognized element <${f}>`)})},Ze=(o,l)=>{Array.from(o.attributes).forEach(c=>{l.indexOf(c.name)===-1&&p([`Unrecognized attribute "${c.name}" on <${o.tagName.toLowerCase()}>.`,`${l.length?`Allowed attributes are: ${l.join(", ")}`:"To set the value, use HTML within the element."}`])})},bo=10,_h=o=>{const l=B(),c=R();typeof o.willOpen=="function"&&o.willOpen(c);const m=window.getComputedStyle(document.body).overflowY;vh(l,c,o),setTimeout(()=>{mh(l,c)},bo),Gi()&&(yh(l,o.scrollbarPadding,m),Qu()),!Hn()&&!S.previousActiveElement&&(S.previousActiveElement=document.activeElement),typeof o.didOpen=="function"&&setTimeout(()=>o.didOpen(c)),ve(l,r["no-transition"])},To=o=>{const l=R();if(o.target!==l)return;const c=B();l.removeEventListener(en,To),c.style.overflowY="auto"},mh=(o,l)=>{en&&Kr(l)?(o.style.overflowY="hidden",l.addEventListener(en,To)):o.style.overflowY="auto"},yh=(o,l,c)=>{Ju(),l&&c!=="hidden"&&sd(),setTimeout(()=>{o.scrollTop=0})},vh=(o,l,c)=>{P(o,c.showClass.backdrop),l.style.setProperty("opacity","0","important"),q(l,"grid"),setTimeout(()=>{P(l,c.showClass.popup),l.style.removeProperty("opacity")},bo),P([document.documentElement,document.body],r.shown),c.heightAuto&&c.backdrop&&!c.toast&&P([document.documentElement,document.body],r["height-auto"])};var So={email:(o,l)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(o)?Promise.resolve():Promise.resolve(l||"Invalid email address"),url:(o,l)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(o)?Promise.resolve():Promise.resolve(l||"Invalid URL")};function wh(o){o.inputValidator||Object.keys(So).forEach(l=>{o.input===l&&(o.inputValidator=So[l])})}function Eh(o){(!o.target||typeof o.target=="string"&&!document.querySelector(o.target)||typeof o.target!="string"&&!o.target.appendChild)&&(p('Target parameter is not valid, defaulting to "body"'),o.target="body")}function Ih(o){wh(o),o.showLoaderOnConfirm&&!o.preConfirm&&p(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Eh(o),typeof o.title=="string"&&(o.title=o.title.split(`
`).join("<br />")),ou(o)}let we;class Ct{constructor(){if(typeof window>"u")return;we=this;for(var l=arguments.length,c=new Array(l),f=0;f<l;f++)c[f]=arguments[f];const m=Object.freeze(this.constructor.argsToParams(c));Object.defineProperties(this,{params:{value:m,writable:!1,enumerable:!0,configurable:!0}});const E=we._main(we.params);t.promise.set(this,E)}_main(l){let c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};Td(Object.assign({},c,l)),S.currentInstance&&(S.currentInstance._destroy(),Gi()&&ro()),S.currentInstance=we;const f=bh(l,c);Ih(f),Object.freeze(f),S.timeout&&(S.timeout.stop(),delete S.timeout),clearTimeout(S.restoreFocusTimeout);const m=Th(we);return eo(we,f),t.innerParams.set(we,f),Ch(we,m,f)}then(l){return t.promise.get(this).then(l)}finally(l){return t.promise.get(this).finally(l)}}const Ch=(o,l,c)=>new Promise((f,m)=>{const E=x=>{o.close({isDismissed:!0,dismiss:x})};nn.swalPromiseResolve.set(o,f),nn.swalPromiseReject.set(o,m),l.confirmButton.onclick=()=>{Ud(o)},l.denyButton.onclick=()=>{Wd(o)},l.cancelButton.onclick=()=>{Hd(o,E)},l.closeButton.onclick=()=>{E(wt.close)},Vd(o,l,E),Vu(o,S,c,E),Nd(o,c),_h(c),Sh(S,c,E),kh(l,c),setTimeout(()=>{l.container.scrollTop=0})}),bh=(o,l)=>{const c=ah(o),f=Object.assign({},Et,l,c,o);return f.showClass=Object.assign({},Et.showClass,f.showClass),f.hideClass=Object.assign({},Et.hideClass,f.hideClass),f},Th=o=>{const l={popup:R(),container:B(),actions:Zt(),confirmButton:fe(),denyButton:De(),cancelButton:Je(),loader:mt(),closeButton:qi(),validationMessage:Un(),progressSteps:ji()};return t.domCache.set(o,l),l},Sh=(o,l,c)=>{const f=Wn();Q(f),l.timer&&(o.timeout=new oh(()=>{c("timer"),delete o.timeout},l.timer),l.timerProgressBar&&(q(f),ce(f,l,"timerProgressBar"),setTimeout(()=>{o.timeout&&o.timeout.running&&Yi(l.timer)})))},kh=(o,l)=>{if(!l.toast){if(!A(l.allowEnterKey)){Rh();return}Ah(o,l)||Zi(-1,1)}},Ah=(o,l)=>l.focusDeny&&ae(o.denyButton)?(o.denyButton.focus(),!0):l.focusCancel&&ae(o.cancelButton)?(o.cancelButton.focus(),!0):l.focusConfirm&&ae(o.confirmButton)?(o.confirmButton.focus(),!0):!1,Rh=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const o=new Date,l=localStorage.getItem("swal-initiation");l?(o.getTime()-Date.parse(l))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const c=document.createElement("audio");c.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",c.loop=!0,document.body.appendChild(c),setTimeout(()=>{c.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${o}`)}Object.assign(Ct.prototype,po),Object.assign(Ct,rh),Object.keys(po).forEach(o=>{Ct[o]=function(){if(we)return we[o](...arguments)}}),Ct.DismissReason=wt,Ct.version="11.7.3";const zn=Ct;return zn.default=zn,zn}),typeof Me<"u"&&Me.Sweetalert2&&(Me.swal=Me.sweetAlert=Me.Swal=Me.SweetAlert=Me.Sweetalert2)})(Nh);const Gn=Cs;/**
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
 */const y=function(n,e){if(!n)throw Vt(e)},Vt=function(n){return new Error("Firebase Database ("+xa.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Ma=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Oh=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],a=n[t++],u=n[t++],d=((s&7)<<18|(r&63)<<12|(a&63)<<6|u&63)-65536;e[i++]=String.fromCharCode(55296+(d>>10)),e[i++]=String.fromCharCode(56320+(d&1023))}else{const r=n[t++],a=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|a&63)}}return e.join("")},zs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],a=s+1<n.length,u=a?n[s+1]:0,d=s+2<n.length,h=d?n[s+2]:0,p=r>>2,g=(r&3)<<4|u>>4;let _=(u&15)<<2|h>>6,v=h&63;d||(v=64,a||(_=64)),i.push(t[p],t[g],t[_],t[v])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ma(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Oh(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],u=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||u==null||h==null||g==null)throw new Dh;const _=r<<2|u>>4;if(i.push(_),h!==64){const v=u<<4&240|h>>2;if(i.push(v),g!==64){const w=h<<6&192|g;i.push(w)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Dh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const La=function(n){const e=Ma(n);return zs.encodeByteArray(e,!0)},ni=function(n){return La(n).replace(/\./g,"")},ii=function(n){try{return zs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xh(n){return Fa(void 0,n)}function Fa(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Mh(t)||(n[t]=Fa(n[t],e[t]));return n}function Mh(n){return n!=="__proto__"}/**
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
 */function Lh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Fh=()=>Lh().__FIREBASE_DEFAULTS__,Bh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Uh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ii(n[1]);return e&&JSON.parse(e)},Gs=()=>{try{return Fh()||Bh()||Uh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ba=n=>{var e,t;return(t=(e=Gs())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Wh=n=>{const e=Ba(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},Hh=()=>{var n;return(n=Gs())===null||n===void 0?void 0:n.config},Ua=n=>{var e;return(e=Gs())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class kn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
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
 */function $h(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),u="";return[ni(JSON.stringify(t)),ni(JSON.stringify(a)),u].join(".")}/**
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
 */function J(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ks(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(J())}function Vh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Wa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jh(){const n=J();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Ha(){return xa.NODE_ADMIN===!0}function qh(){try{return typeof indexedDB=="object"}catch{return!1}}function zh(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Gh="FirebaseError";class Qe extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=Gh,Object.setPrototypeOf(this,Qe.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],a=r?Kh(r,i):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Qe(s,u,i)}}function Kh(n,e){return n.replace(Yh,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Yh=/\{\$([^}]+)}/g;/**
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
 */function _n(n){return JSON.parse(n)}function $(n){return JSON.stringify(n)}/**
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
 */const $a=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=_n(ii(r[0])||""),t=_n(ii(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},Qh=function(n){const e=$a(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Jh=function(n){const e=$a(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ce(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Dt(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function bs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function si(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function ri(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],a=e[s];if(Ao(r)&&Ao(a)){if(!ri(r,a))return!1}else if(r!==a)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Ao(n){return n!==null&&typeof n=="object"}/**
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
 */function jt(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function cn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function un(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class Xh{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let g=0;g<16;g++)i[g]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let g=0;g<16;g++)i[g]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let g=16;g<80;g++){const _=i[g-3]^i[g-8]^i[g-14]^i[g-16];i[g]=(_<<1|_>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],a=this.chain_[2],u=this.chain_[3],d=this.chain_[4],h,p;for(let g=0;g<80;g++){g<40?g<20?(h=u^r&(a^u),p=1518500249):(h=r^a^u,p=1859775393):g<60?(h=r&a|u&(r|a),p=2400959708):(h=r^a^u,p=3395469782);const _=(s<<5|s>>>27)+h+d+p+i[g]&4294967295;d=u,u=a,a=(r<<30|r>>>2)&4294967295,r=s,s=_}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+d&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let a=this.inbuf_;for(;s<t;){if(a===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[a]=e.charCodeAt(s),++a,++s,a===this.blockSize){this.compress_(r),a=0;break}}else for(;s<t;)if(r[a]=e[s],++a,++s,a===this.blockSize){this.compress_(r),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function Zh(n,e){const t=new ef(n,e);return t.subscribe.bind(t)}class ef{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");tf(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=as),s.error===void 0&&(s.error=as),s.complete===void 0&&(s.complete=as);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function as(){}function ki(n,e){return`${n} failed: ${e} argument `}/**
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
 */const nf=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,y(i<n.length,"Surrogate pair missing trail surrogate.");const a=n.charCodeAt(i)-56320;s=65536+(r<<10)+a}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Ai=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function K(n){return n&&n._delegate?n._delegate:n}class ot{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tt="[DEFAULT]";/**
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
 */class sf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new kn;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(of(e))try{this.getOrInitializeService({instanceIdentifier:tt})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=tt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tt){return this.instances.has(e)}getOptions(e=tt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(r);i===u&&a.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const a=this.instances.get(s);return a&&e(a,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:rf(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=tt){return this.component?this.component.multipleInstances?e:tt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rf(n){return n===tt?void 0:n}function of(n){return n.instantiationMode==="EAGER"}/**
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
 */class af{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const lf={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},cf=O.INFO,uf={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},df=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=uf[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ys{constructor(e){this.name=e,this._logLevel=cf,this._logHandler=df,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?lf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const hf=(n,e)=>e.some(t=>n instanceof t);let Ro,Po;function ff(){return Ro||(Ro=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pf(){return Po||(Po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Va=new WeakMap,Ts=new WeakMap,ja=new WeakMap,ls=new WeakMap,Qs=new WeakMap;function gf(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",a)},r=()=>{t($e(n.result)),s()},a=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Va.set(t,n)}).catch(()=>{}),Qs.set(e,n),e}function _f(n){if(Ts.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",a),n.removeEventListener("abort",a)},r=()=>{t(),s()},a=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",a),n.addEventListener("abort",a)});Ts.set(n,e)}let Ss={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ts.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ja.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return $e(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function mf(n){Ss=n(Ss)}function yf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(cs(this),e,...t);return ja.set(i,e.sort?e.sort():[e]),$e(i)}:pf().includes(n)?function(...e){return n.apply(cs(this),e),$e(Va.get(this))}:function(...e){return $e(n.apply(cs(this),e))}}function vf(n){return typeof n=="function"?yf(n):(n instanceof IDBTransaction&&_f(n),hf(n,ff())?new Proxy(n,Ss):n)}function $e(n){if(n instanceof IDBRequest)return gf(n);if(ls.has(n))return ls.get(n);const e=vf(n);return e!==n&&(ls.set(n,e),Qs.set(e,n)),e}const cs=n=>Qs.get(n);function wf(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const a=indexedDB.open(n,e),u=$e(a);return i&&a.addEventListener("upgradeneeded",d=>{i($e(a.result),d.oldVersion,d.newVersion,$e(a.transaction),d)}),t&&a.addEventListener("blocked",d=>t(d.oldVersion,d.newVersion,d)),u.then(d=>{r&&d.addEventListener("close",()=>r()),s&&d.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),u}const Ef=["get","getKey","getAll","getAllKeys","count"],If=["put","add","delete","clear"],us=new Map;function No(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(us.get(e))return us.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=If.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Ef.includes(t)))return;const r=async function(a,...u){const d=this.transaction(a,s?"readwrite":"readonly");let h=d.store;return i&&(h=h.index(u.shift())),(await Promise.all([h[t](...u),s&&d.done]))[0]};return us.set(e,r),r}mf(n=>({...n,get:(e,t,i)=>No(e,t)||n.get(e,t,i),has:(e,t)=>!!No(e,t)||n.has(e,t)}));/**
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
 */class Cf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(bf(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function bf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ks="@firebase/app",Oo="0.9.9";/**
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
 */const at=new Ys("@firebase/app"),Tf="@firebase/app-compat",Sf="@firebase/analytics-compat",kf="@firebase/analytics",Af="@firebase/app-check-compat",Rf="@firebase/app-check",Pf="@firebase/auth",Nf="@firebase/auth-compat",Of="@firebase/database",Df="@firebase/database-compat",xf="@firebase/functions",Mf="@firebase/functions-compat",Lf="@firebase/installations",Ff="@firebase/installations-compat",Bf="@firebase/messaging",Uf="@firebase/messaging-compat",Wf="@firebase/performance",Hf="@firebase/performance-compat",$f="@firebase/remote-config",Vf="@firebase/remote-config-compat",jf="@firebase/storage",qf="@firebase/storage-compat",zf="@firebase/firestore",Gf="@firebase/firestore-compat",Kf="firebase",Yf="9.21.0";/**
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
 */const As="[DEFAULT]",Qf={[ks]:"fire-core",[Tf]:"fire-core-compat",[kf]:"fire-analytics",[Sf]:"fire-analytics-compat",[Rf]:"fire-app-check",[Af]:"fire-app-check-compat",[Pf]:"fire-auth",[Nf]:"fire-auth-compat",[Of]:"fire-rtdb",[Df]:"fire-rtdb-compat",[xf]:"fire-fn",[Mf]:"fire-fn-compat",[Lf]:"fire-iid",[Ff]:"fire-iid-compat",[Bf]:"fire-fcm",[Uf]:"fire-fcm-compat",[Wf]:"fire-perf",[Hf]:"fire-perf-compat",[$f]:"fire-rc",[Vf]:"fire-rc-compat",[jf]:"fire-gcs",[qf]:"fire-gcs-compat",[zf]:"fire-fst",[Gf]:"fire-fst-compat","fire-js":"fire-js",[Kf]:"fire-js-all"};/**
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
 */const oi=new Map,Rs=new Map;function Jf(n,e){try{n.container.addComponent(e)}catch(t){at.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xt(n){const e=n.name;if(Rs.has(e))return at.debug(`There were multiple attempts to register component ${e}.`),!1;Rs.set(e,n);for(const t of oi.values())Jf(t,n);return!0}function Js(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const Xf={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ve=new An("app","Firebase",Xf);/**
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
 */class Zf{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ot("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ve.create("app-deleted",{appName:this._name})}}/**
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
 */const qt=Yf;function qa(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:As,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ve.create("bad-app-name",{appName:String(s)});if(t||(t=Hh()),!t)throw Ve.create("no-options");const r=oi.get(s);if(r){if(ri(t,r.options)&&ri(i,r.config))return r;throw Ve.create("duplicate-app",{appName:s})}const a=new af(s);for(const d of Rs.values())a.addComponent(d);const u=new Zf(t,i,a);return oi.set(s,u),u}function za(n=As){const e=oi.get(n);if(!e&&n===As)return qa();if(!e)throw Ve.create("no-app",{appName:n});return e}function je(n,e,t){var i;let s=(i=Qf[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const u=[`Unable to register library "${s}" with version "${e}":`];r&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&a&&u.push("and"),a&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),at.warn(u.join(" "));return}xt(new ot(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ep="firebase-heartbeat-database",tp=1,mn="firebase-heartbeat-store";let ds=null;function Ga(){return ds||(ds=wf(ep,tp,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(mn)}}}).catch(n=>{throw Ve.create("idb-open",{originalErrorMessage:n.message})})),ds}async function np(n){try{return(await Ga()).transaction(mn).objectStore(mn).get(Ka(n))}catch(e){if(e instanceof Qe)at.warn(e.message);else{const t=Ve.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});at.warn(t.message)}}}async function Do(n,e){try{const i=(await Ga()).transaction(mn,"readwrite");return await i.objectStore(mn).put(e,Ka(n)),i.done}catch(t){if(t instanceof Qe)at.warn(t.message);else{const i=Ve.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});at.warn(i.message)}}}function Ka(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ip=1024,sp=30*24*60*60*1e3;class rp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ap(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=xo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=sp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xo(),{heartbeatsToSend:t,unsentEntries:i}=op(this._heartbeatsCache.heartbeats),s=ni(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function xo(){return new Date().toISOString().substring(0,10)}function op(n,e=ip){const t=[];let i=n.slice();for(const s of n){const r=t.find(a=>a.agent===s.agent);if(r){if(r.dates.push(s.date),Mo(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Mo(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ap{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qh()?zh().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await np(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Do(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Do(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Mo(n){return ni(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function lp(n){xt(new ot("platform-logger",e=>new Cf(e),"PRIVATE")),xt(new ot("heartbeat",e=>new rp(e),"PRIVATE")),je(ks,Oo,n),je(ks,Oo,"esm2017"),je("fire-js","")}lp("");var cp="firebase",up="9.21.0";/**
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
 */je(cp,up,"app");const Lo="@firebase/database",Fo="0.14.4";/**
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
 */let Ya="";function dp(n){Ya=n}/**
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
 */class hp{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:_n(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class fp{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ce(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Qa=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new hp(e)}}catch{}return new fp},it=Qa("localStorage"),Ps=Qa("sessionStorage");/**
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
 */const At=new Ys("@firebase/database"),pp=function(){let n=1;return function(){return n++}}(),Ja=function(n){const e=nf(n),t=new Xh;t.update(e);const i=t.digest();return zs.encodeByteArray(i)},Rn=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=Rn.apply(null,i):typeof i=="object"?e+=$(i):e+=i,e+=" "}return e};let st=null,Bo=!0;const gp=function(n,e){y(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(At.logLevel=O.VERBOSE,st=At.log.bind(At),e&&Ps.set("logging_enabled",!0)):typeof n=="function"?st=n:(st=null,Ps.remove("logging_enabled"))},z=function(...n){if(Bo===!0&&(Bo=!1,st===null&&Ps.get("logging_enabled")===!0&&gp(!0)),st){const e=Rn.apply(null,n);st(e)}},Pn=function(n){return function(...e){z(n,...e)}},Ns=function(...n){const e="FIREBASE INTERNAL ERROR: "+Rn(...n);At.error(e)},Pe=function(...n){const e=`FIREBASE FATAL ERROR: ${Rn(...n)}`;throw At.error(e),new Error(e)},te=function(...n){const e="FIREBASE WARNING: "+Rn(...n);At.warn(e)},_p=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&te("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Xs=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},mp=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Mt="[MIN_NAME]",lt="[MAX_NAME]",ft=function(n,e){if(n===e)return 0;if(n===Mt||e===lt)return-1;if(e===Mt||n===lt)return 1;{const t=Uo(n),i=Uo(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},yp=function(n,e){return n===e?0:n<e?-1:1},rn=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+$(e))},Zs=function(n){if(typeof n!="object"||n===null)return $(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=$(e[i]),t+=":",t+=Zs(n[e[i]]);return t+="}",t},Xa=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function G(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Za=function(n){y(!Xs(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,a,u,d;n===0?(r=0,a=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(u=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=u+i,a=Math.round(n*Math.pow(2,t-u)-Math.pow(2,t))):(r=0,a=Math.round(n/Math.pow(2,1-i-t))));const h=[];for(d=t;d;d-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(d=e;d;d-=1)h.push(r%2?1:0),r=Math.floor(r/2);h.push(s?1:0),h.reverse();const p=h.join("");let g="";for(d=0;d<64;d+=8){let _=parseInt(p.substr(d,8),2).toString(16);_.length===1&&(_="0"+_),g=g+_}return g.toLowerCase()},vp=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},wp=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Ep(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Ip=new RegExp("^-?(0*)\\d{1,10}$"),Cp=-2147483648,bp=2147483647,Uo=function(n){if(Ip.test(n)){const e=Number(n);if(e>=Cp&&e<=bp)return e}return null},zt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw te("Exception was thrown by user callback.",t),e},Math.floor(0))}},Tp=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},dn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Sp{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){te(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class kp{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(z("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',te(e)}}class Rt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Rt.OWNER="owner";/**
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
 */const er="5",el="v",tl="s",nl="r",il="f",sl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,rl="ls",ol="p",Os="ac",al="websocket",ll="long_polling";/**
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
 */class cl{constructor(e,t,i,s,r=!1,a="",u=!1,d=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=a,this.includeNamespaceInQueryParams=u,this.isUsingEmulator=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=it.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&it.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ap(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ul(n,e,t){y(typeof e=="string","typeof type must == string"),y(typeof t=="object","typeof params must == object");let i;if(e===al)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===ll)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ap(n)&&(t.ns=n.namespace);const s=[];return G(t,(r,a)=>{s.push(r+"="+a)}),i+s.join("&")}/**
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
 */class Rp{constructor(){this.counters_={}}incrementCounter(e,t=1){Ce(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return xh(this.counters_)}}/**
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
 */const hs={},fs={};function tr(n){const e=n.toString();return hs[e]||(hs[e]=new Rp),hs[e]}function Pp(n,e){const t=n.toString();return fs[t]||(fs[t]=e()),fs[t]}/**
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
 */class Np{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&zt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Wo="start",Op="close",Dp="pLPCommand",xp="pRTLPCB",dl="id",hl="pw",fl="ser",Mp="cb",Lp="seg",Fp="ts",Bp="d",Up="dframe",pl=1870,gl=30,Wp=pl-gl,Hp=25e3,$p=3e4;class St{constructor(e,t,i,s,r,a,u){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=a,this.lastSessionId=u,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Pn(e),this.stats_=tr(t),this.urlFn=d=>(this.appCheckToken&&(d[Os]=this.appCheckToken),ul(t,ll,d))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Np(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($p)),mp(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nr((...r)=>{const[a,u,d,h,p]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===Wo)this.id=u,this.password=d;else if(a===Op)u?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(u,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...r)=>{const[a,u]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(a,u)},()=>{this.onClosed_()},this.urlFn);const i={};i[Wo]="t",i[fl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[Mp]=this.scriptTagHolder.uniqueCallbackIdentifier),i[el]=er,this.transportSessionId&&(i[tl]=this.transportSessionId),this.lastSessionId&&(i[rl]=this.lastSessionId),this.applicationId&&(i[ol]=this.applicationId),this.appCheckToken&&(i[Os]=this.appCheckToken),typeof location<"u"&&location.hostname&&sl.test(location.hostname)&&(i[nl]=il);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){St.forceAllow_=!0}static forceDisallow(){St.forceDisallow_=!0}static isAvailable(){return St.forceAllow_?!0:!St.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!vp()&&!wp()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=$(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=La(t),s=Xa(i,Wp);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[Up]="t",i[dl]=e,i[hl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=$(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class nr{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=pp(),window[Dp+this.uniqueCallbackIdentifier]=e,window[xp+this.uniqueCallbackIdentifier]=t,this.myIFrame=nr.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(u){z("frame writing exception"),u.stack&&z(u.stack),z(u)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||z("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[dl]=this.myID,e[hl]=this.myPW,e[fl]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+gl+i.length<=pl;){const a=this.pendingSegs.shift();i=i+"&"+Lp+s+"="+a.seg+"&"+Fp+s+"="+a.ts+"&"+Bp+s+"="+a.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(Hp)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{z("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const Vp=16384,jp=45e3;let ai=null;typeof MozWebSocket<"u"?ai=MozWebSocket:typeof WebSocket<"u"&&(ai=WebSocket);class pe{constructor(e,t,i,s,r,a,u){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Pn(this.connId),this.stats_=tr(t),this.connURL=pe.connectionURL_(t,a,u,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const a={};return a[el]=er,typeof location<"u"&&location.hostname&&sl.test(location.hostname)&&(a[nl]=il),t&&(a[tl]=t),i&&(a[rl]=i),s&&(a[Os]=s),r&&(a[ol]=r),ul(e,al,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,it.set("previous_websocket_failure",!0);try{let i;Ha(),this.mySock=new ai(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){pe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ai!==null&&!pe.forceDisallow_}static previouslyFailed(){return it.isInMemoryStorage||it.get("previous_websocket_failure")===!0}markConnectionHealthy(){it.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=_n(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(y(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=$(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=Xa(t,Vp);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(jp))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}pe.responsesRequiredToBeHealthy=2;pe.healthyTimeout=3e4;/**
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
 */class yn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[St,pe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=pe&&pe.isAvailable();let i=t&&!pe.previouslyFailed();if(e.webSocketOnly&&(t||te("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[pe];else{const s=this.transports_=[];for(const r of yn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);yn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}yn.globalTransportInitialized_=!1;/**
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
 */const qp=6e4,zp=5e3,Gp=10*1024,Kp=100*1024,ps="t",Ho="d",Yp="s",$o="r",Qp="e",Vo="o",jo="a",qo="n",zo="p",Jp="h";class Xp{constructor(e,t,i,s,r,a,u,d,h,p){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=a,this.onReady_=u,this.onDisconnect_=d,this.onKill_=h,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Pn("c:"+this.id+":"),this.transportManager_=new yn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=dn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Kp?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Gp?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ps in e){const t=e[ps];t===jo?this.upgradeIfSecondaryHealthy_():t===$o?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Vo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=rn("t",e),i=rn("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:zo,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:jo,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=rn("t",e),i=rn("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=rn(ps,e);if(Ho in e){const i=e[Ho];if(t===Jp){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===qo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Yp?this.onConnectionShutdown_(i):t===$o?this.onReset_(i):t===Qp?Ns("Server Error: "+i):t===Vo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ns("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),er!==i&&te("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),dn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(qp))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):dn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(zp))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:zo,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(it.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class li extends ml{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ks()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new li}getInitialEvent(e){return y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Go=32,Ko=768;class D{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function N(){return new D("")}function b(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ge(n){return n.pieces_.length-n.pieceNum_}function L(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new D(n.pieces_,e)}function ir(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Zp(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function vn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function yl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new D(e,0)}function U(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof D)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new D(t,0)}function k(n){return n.pieceNum_>=n.pieces_.length}function ee(n,e){const t=b(n),i=b(e);if(t===null)return e;if(t===i)return ee(L(n),L(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function eg(n,e){const t=vn(n,0),i=vn(e,0);for(let s=0;s<t.length&&s<i.length;s++){const r=ft(t[s],i[s]);if(r!==0)return r}return t.length===i.length?0:t.length<i.length?-1:1}function sr(n,e){if(Ge(n)!==Ge(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function ue(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Ge(n)>Ge(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class tg{constructor(e,t){this.errorPrefix_=t,this.parts_=vn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ai(this.parts_[i]);vl(this)}}function ng(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ai(e),vl(n)}function ig(n){const e=n.parts_.pop();n.byteLength_-=Ai(e),n.parts_.length>0&&(n.byteLength_-=1)}function vl(n){if(n.byteLength_>Ko)throw new Error(n.errorPrefix_+"has a key path longer than "+Ko+" bytes ("+n.byteLength_+").");if(n.parts_.length>Go)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Go+") or object contains a cycle "+nt(n))}function nt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class rr extends ml{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new rr}getInitialEvent(e){return y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const on=1e3,sg=60*5*1e3,Yo=30*1e3,rg=1.3,og=3e4,ag="server_kill",Qo=3;class Re extends _l{constructor(e,t,i,s,r,a,u,d){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=a,this.appCheckTokenProvider_=u,this.authOverride_=d,this.id=Re.nextPersistentConnectionId_++,this.log_=Pn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=on,this.maxReconnectDelay_=sg,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,d&&!Ha())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rr.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&li.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_($(r)),y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new kn,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const u=a.d;a.s==="ok"?t.resolve(u):t.reject(u)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+r),this.listens.has(a)||this.listens.set(a,new Map),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),y(!this.listens.get(a).has(r),"listen() called twice for same path/queryId.");const u={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(a).set(r,u),this.connected_&&this.sendListen_(u)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},a="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(a,r,u=>{const d=u.d,h=u.s;Re.warnOnListenWarnings_(d,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",u),h!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(h,d))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ce(e,"w")){const i=Dt(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();te(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Jh(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Yo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Qh(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,a=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},a="n";s&&(r.q=i,r.t=s),this.sendRequest(a,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,a=>{s&&setTimeout(()=>{s(a.s,a.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const a={p:t,d:i};r!==void 0&&(a.h=r),this.outstandingPuts_.push({action:e,request:a,onComplete:s}),this.outstandingPutCount_++;const u=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(u):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ns("Unrecognized action received from server: "+$(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=on,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=on,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>og&&(this.reconnectDelay_=on),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*rg)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Re.nextConnectionId_++,r=this.lastSessionId;let a=!1,u=null;const d=function(){u?u.close():(a=!0,i())},h=function(g){y(u,"sendRequest call when we're not connected not allowed."),u.sendRequest(g)};this.realtime_={close:d,sendRequest:h};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[g,_]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);a?z("getToken() completed but was canceled"):(z("getToken() completed. Creating connection."),this.authToken_=g&&g.accessToken,this.appCheckToken_=_&&_.token,u=new Xp(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,v=>{te(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(ag)},r))}catch(g){this.log_("Failed to get token: "+g),a||(this.repoInfo_.nodeAdmin&&te(g),d())}}}interrupt(e){z("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){z("Resuming connection for reason: "+e),delete this.interruptReasons_[e],bs(this.interruptReasons_)&&(this.reconnectDelay_=on,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Zs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new D(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){z("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qo&&(this.reconnectDelay_=Yo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){z("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ya.replace(/\./g,"-")]=1,Ks()?e["framework.cordova"]=1:Wa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=li.getInstance().currentlyOnline();return bs(this.interruptReasons_)&&e}}Re.nextPersistentConnectionId_=0;Re.nextConnectionId_=0;/**
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
 */class Ri{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new T(Mt,e),s=new T(Mt,t);return this.compare(i,s)!==0}minPost(){return T.MIN}}/**
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
 */let Kn;class wl extends Ri{static get __EMPTY_NODE(){return Kn}static set __EMPTY_NODE(e){Kn=e}compare(e,t){return ft(e.name,t.name)}isDefinedOn(e){throw Vt("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return T.MIN}maxPost(){return new T(lt,Kn)}makePost(e,t){return y(typeof e=="string","KeyIndex indexValue must always be a string."),new T(e,Kn)}toString(){return".key"}}const Pt=new wl;/**
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
 */class Yn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?i(e.key,t):1,s&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class j{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??j.RED,this.left=s??re.EMPTY_NODE,this.right=r??re.EMPTY_NODE}copy(e,t,i,s,r){return new j(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return re.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}j.RED=!0;j.BLACK=!1;class lg{copy(e,t,i,s,r){return this}insert(e,t,i){return new j(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class re{constructor(e,t=re.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new re(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,j.BLACK,null,null))}remove(e){return new re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,j.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Yn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Yn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Yn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Yn(this.root_,null,this.comparator_,!0,e)}}re.EMPTY_NODE=new lg;/**
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
 */function cg(n,e){return ft(n.name,e.name)}function or(n,e){return ft(n,e)}/**
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
 */let Ds;function ug(n){Ds=n}const El=function(n){return typeof n=="number"?"number:"+Za(n):"string:"+n},Il=function(n){if(n.isLeafNode()){const e=n.val();y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ce(e,".sv"),"Priority must be a string or number.")}else y(n===Ds||n.isEmpty(),"priority of unexpected type.");y(n===Ds||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Jo;class V{constructor(e,t=V.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Il(this.priorityNode_)}static set __childrenNodeConstructor(e){Jo=e}static get __childrenNodeConstructor(){return Jo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new V(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return k(e)?this:b(e)===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:V.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=b(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(y(i!==".priority"||Ge(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,V.__childrenNodeConstructor.EMPTY_NODE.updateChild(L(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+El(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Za(this.value_):e+=this.value_,this.lazyHash_=Ja(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===V.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof V.__childrenNodeConstructor?-1:(y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=V.VALUE_TYPE_ORDER.indexOf(t),r=V.VALUE_TYPE_ORDER.indexOf(i);return y(s>=0,"Unknown leaf type: "+t),y(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}V.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Cl,bl;function dg(n){Cl=n}function hg(n){bl=n}class fg extends Ri{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?ft(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return T.MIN}maxPost(){return new T(lt,new V("[PRIORITY-POST]",bl))}makePost(e,t){const i=Cl(e);return new T(t,new V("[PRIORITY-POST]",i))}toString(){return".priority"}}const W=new fg;/**
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
 */const pg=Math.log(2);class gg{constructor(e){const t=r=>parseInt(Math.log(r)/pg,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ci=function(n,e,t,i){n.sort(e);const s=function(d,h){const p=h-d;let g,_;if(p===0)return null;if(p===1)return g=n[d],_=t?t(g):g,new j(_,g.node,j.BLACK,null,null);{const v=parseInt(p/2,10)+d,w=s(d,v),A=s(v+1,h);return g=n[v],_=t?t(g):g,new j(_,g.node,j.BLACK,w,A)}},r=function(d){let h=null,p=null,g=n.length;const _=function(w,A){const F=g-w,X=g;g-=w;const he=s(F+1,X),B=n[F],ye=t?t(B):B;v(new j(ye,B.node,A,null,he))},v=function(w){h?(h.left=w,h=w):(p=w,h=w)};for(let w=0;w<d.count;++w){const A=d.nextBitIsOne(),F=Math.pow(2,d.count-(w+1));A?_(F,j.BLACK):(_(F,j.BLACK),_(F,j.RED))}return p},a=new gg(n.length),u=r(a);return new re(i||e,u)};/**
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
 */let gs;const Tt={};class Se{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return y(Tt&&W,"ChildrenNode.ts has not been loaded"),gs=gs||new Se({".priority":Tt},{".priority":W}),gs}get(e){const t=Dt(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof re?t:null}hasIndex(e){return Ce(this.indexSet_,e.toString())}addIndex(e,t){y(e!==Pt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(T.Wrap);let a=r.getNext();for(;a;)s=s||e.isDefinedOn(a.node),i.push(a),a=r.getNext();let u;s?u=ci(i,e.getCompare()):u=Tt;const d=e.toString(),h=Object.assign({},this.indexSet_);h[d]=e;const p=Object.assign({},this.indexes_);return p[d]=u,new Se(p,h)}addToIndexes(e,t){const i=si(this.indexes_,(s,r)=>{const a=Dt(this.indexSet_,r);if(y(a,"Missing index implementation for "+r),s===Tt)if(a.isDefinedOn(e.node)){const u=[],d=t.getIterator(T.Wrap);let h=d.getNext();for(;h;)h.name!==e.name&&u.push(h),h=d.getNext();return u.push(e),ci(u,a.getCompare())}else return Tt;else{const u=t.get(e.name);let d=s;return u&&(d=d.remove(new T(e.name,u))),d.insert(e,e.node)}});return new Se(i,this.indexSet_)}removeFromIndexes(e,t){const i=si(this.indexes_,s=>{if(s===Tt)return s;{const r=t.get(e.name);return r?s.remove(new T(e.name,r)):s}});return new Se(i,this.indexSet_)}}/**
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
 */let an;class I{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Il(this.priorityNode_),this.children_.isEmpty()&&y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return an||(an=new I(new re(or),null,Se.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||an}updatePriority(e){return this.children_.isEmpty()?this:new I(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?an:t}}getChild(e){const t=b(e);return t===null?this:this.getImmediateChild(t).getChild(L(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(y(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new T(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const a=s.isEmpty()?an:this.priorityNode_;return new I(s,a,r)}}updateChild(e,t){const i=b(e);if(i===null)return t;{y(b(e)!==".priority"||Ge(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(L(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(W,(a,u)=>{t[a]=u.val(e),i++,r&&I.INTEGER_REGEXP_.test(a)?s=Math.max(s,Number(a)):r=!1}),!e&&r&&s<2*i){const a=[];for(const u in t)a[u]=t[u];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+El(this.getPriority().val())+":"),this.forEachChild(W,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":Ja(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new T(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new T(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new T(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,T.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,T.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Nn?-1:0}withIndex(e){if(e===Pt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new I(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Pt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(W),s=t.getIterator(W);let r=i.getNext(),a=s.getNext();for(;r&&a;){if(r.name!==a.name||!r.node.equals(a.node))return!1;r=i.getNext(),a=s.getNext()}return r===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===Pt?null:this.indexMap_.get(e.toString())}}I.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class _g extends I{constructor(){super(new re(or),I.EMPTY_NODE,Se.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return I.EMPTY_NODE}isEmpty(){return!1}}const Nn=new _g;Object.defineProperties(T,{MIN:{value:new T(Mt,I.EMPTY_NODE)},MAX:{value:new T(lt,Nn)}});wl.__EMPTY_NODE=I.EMPTY_NODE;V.__childrenNodeConstructor=I;ug(Nn);hg(Nn);/**
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
 */const mg=!0;function H(n,e=null){if(n===null)return I.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new V(t,H(e))}if(!(n instanceof Array)&&mg){const t=[];let i=!1;if(G(n,(a,u)=>{if(a.substring(0,1)!=="."){const d=H(u);d.isEmpty()||(i=i||!d.getPriority().isEmpty(),t.push(new T(a,d)))}}),t.length===0)return I.EMPTY_NODE;const r=ci(t,cg,a=>a.name,or);if(i){const a=ci(t,W.getCompare());return new I(r,H(e),new Se({".priority":a},{".priority":W}))}else return new I(r,H(e),Se.Default)}else{let t=I.EMPTY_NODE;return G(n,(i,s)=>{if(Ce(n,i)&&i.substring(0,1)!=="."){const r=H(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(H(e))}}dg(H);/**
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
 */class yg extends Ri{constructor(e){super(),this.indexPath_=e,y(!k(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?ft(e.name,t.name):r}makePost(e,t){const i=H(e),s=I.EMPTY_NODE.updateChild(this.indexPath_,i);return new T(t,s)}maxPost(){const e=I.EMPTY_NODE.updateChild(this.indexPath_,Nn);return new T(lt,e)}toString(){return vn(this.indexPath_,0).join("/")}}/**
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
 */class vg extends Ri{compare(e,t){const i=e.node.compareTo(t.node);return i===0?ft(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return T.MIN}maxPost(){return T.MAX}makePost(e,t){const i=H(e);return new T(t,i)}toString(){return".value"}}const wg=new vg;/**
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
 */function Tl(n){return{type:"value",snapshotNode:n}}function Lt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function wn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function En(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Eg(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class ar{constructor(e){this.index_=e}updateChild(e,t,i,s,r,a){y(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const u=e.getImmediateChild(t);return u.getChild(s).equals(i.getChild(s))&&u.isEmpty()===i.isEmpty()||(a!=null&&(i.isEmpty()?e.hasChild(t)?a.trackChildChange(wn(t,u)):y(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):u.isEmpty()?a.trackChildChange(Lt(t,i)):a.trackChildChange(En(t,i,u))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(W,(s,r)=>{t.hasChild(s)||i.trackChildChange(wn(s,r))}),t.isLeafNode()||t.forEachChild(W,(s,r)=>{if(e.hasChild(s)){const a=e.getImmediateChild(s);a.equals(r)||i.trackChildChange(En(s,r,a))}else i.trackChildChange(Lt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?I.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class In{constructor(e){this.indexedFilter_=new ar(e.getIndex()),this.index_=e.getIndex(),this.startPost_=In.getStartPost_(e),this.endPost_=In.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,a){return this.matches(new T(t,i))||(i=I.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,a)}updateFullNode(e,t,i){t.isLeafNode()&&(t=I.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(I.EMPTY_NODE);const r=this;return t.forEachChild(W,(a,u)=>{r.matches(new T(a,u))||(s=s.updateImmediateChild(a,I.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Ig{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new In(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,a){return this.rangedFilter_.matches(new T(t,i))||(i=I.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,a):this.fullLimitUpdateChild_(e,t,i,r,a)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=I.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=I.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;r.hasNext()&&a<this.limit_;){const u=r.getNext();if(this.withinDirectionalStart(u))if(this.withinDirectionalEnd(u))s=s.updateImmediateChild(u.name,u.node),a++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(I.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let a=0;for(;r.hasNext();){const u=r.getNext();a<this.limit_&&this.withinDirectionalStart(u)&&this.withinDirectionalEnd(u)?a++:s=s.updateImmediateChild(u.name,I.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let a;if(this.reverse_){const g=this.index_.getCompare();a=(_,v)=>g(v,_)}else a=this.index_.getCompare();const u=e;y(u.numChildren()===this.limit_,"");const d=new T(t,i),h=this.reverse_?u.getFirstChild(this.index_):u.getLastChild(this.index_),p=this.rangedFilter_.matches(d);if(u.hasChild(t)){const g=u.getImmediateChild(t);let _=s.getChildAfterChild(this.index_,h,this.reverse_);for(;_!=null&&(_.name===t||u.hasChild(_.name));)_=s.getChildAfterChild(this.index_,_,this.reverse_);const v=_==null?1:a(_,d);if(p&&!i.isEmpty()&&v>=0)return r!=null&&r.trackChildChange(En(t,i,g)),u.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(wn(t,g));const A=u.updateImmediateChild(t,I.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(r!=null&&r.trackChildChange(Lt(_.name,_.node)),A.updateImmediateChild(_.name,_.node)):A}}else return i.isEmpty()?e:p&&a(h,d)>=0?(r!=null&&(r.trackChildChange(wn(h.name,h.node)),r.trackChildChange(Lt(t,i))),u.updateImmediateChild(t,i).updateImmediateChild(h.name,I.EMPTY_NODE)):e}}/**
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
 */class lr{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=W}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Mt}hasEnd(){return this.endSet_}getIndexEndValue(){return y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:lt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===W}copy(){const e=new lr;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Cg(n){return n.loadsAllData()?new ar(n.getIndex()):n.hasLimit()?new Ig(n):new In(n)}function Xo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===W?t="$priority":n.index_===wg?t="$value":n.index_===Pt?t="$key":(y(n.index_ instanceof yg,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=$(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=$(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+$(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=$(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+$(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Zo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==W&&(e.i=n.index_.toString()),e}/**
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
 */class ui extends _l{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=Pn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const a=ui.getListenId_(e,i),u={};this.listens_[a]=u;const d=Xo(e._queryParams);this.restRequest_(r+".json",d,(h,p)=>{let g=p;if(h===404&&(g=null,h=null),h===null&&this.onDataUpdate_(r,g,!1,i),Dt(this.listens_,a)===u){let _;h?h===401?_="permission_denied":_="rest_error:"+h:_="ok",s(_,null)}})}unlisten(e,t){const i=ui.getListenId_(e,t);delete this.listens_[i]}get(e){const t=Xo(e._queryParams),i=e._path.toString(),s=new kn;return this.restRequest_(i+".json",t,(r,a)=>{let u=a;r===404&&(u=null,r=null),r===null?(this.onDataUpdate_(i,u,!1,null),s.resolve(u)):s.reject(new Error(u))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+jt(t);this.log_("Sending REST request for "+a);const u=new XMLHttpRequest;u.onreadystatechange=()=>{if(i&&u.readyState===4){this.log_("REST Response for "+a+" received. status:",u.status,"response:",u.responseText);let d=null;if(u.status>=200&&u.status<300){try{d=_n(u.responseText)}catch{te("Failed to parse JSON response for "+a+": "+u.responseText)}i(null,d)}else u.status!==401&&u.status!==404&&te("Got unsuccessful REST response for "+a+" Status: "+u.status),i(u.status);i=null}},u.open("GET",a,!0),u.send()})}}/**
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
 */class bg{constructor(){this.rootNode_=I.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function di(){return{value:null,children:new Map}}function Sl(n,e,t){if(k(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=b(e);n.children.has(i)||n.children.set(i,di());const s=n.children.get(i);e=L(e),Sl(s,e,t)}}function xs(n,e,t){n.value!==null?t(e,n.value):Tg(n,(i,s)=>{const r=new D(e.toString()+"/"+i);xs(s,r,t)})}function Tg(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
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
 */class Sg{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&G(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
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
 */const ea=10*1e3,kg=30*1e3,Ag=5*60*1e3;class Rg{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Sg(e);const i=ea+(kg-ea)*Math.random();dn(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;G(e,(s,r)=>{r>0&&Ce(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),dn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ag))}}/**
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
 */var ge;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ge||(ge={}));function cr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ur(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function dr(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class hi{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=ge.ACK_USER_WRITE,this.source=cr()}operationForChild(e){if(k(this.path)){if(this.affectedTree.value!=null)return y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new D(e));return new hi(N(),t,this.revert)}}else return y(b(this.path)===e,"operationForChild called for unrelated child."),new hi(L(this.path),this.affectedTree,this.revert)}}/**
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
 */class Cn{constructor(e,t){this.source=e,this.path=t,this.type=ge.LISTEN_COMPLETE}operationForChild(e){return k(this.path)?new Cn(this.source,N()):new Cn(this.source,L(this.path))}}/**
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
 */class ct{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=ge.OVERWRITE}operationForChild(e){return k(this.path)?new ct(this.source,N(),this.snap.getImmediateChild(e)):new ct(this.source,L(this.path),this.snap)}}/**
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
 */class Ft{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=ge.MERGE}operationForChild(e){if(k(this.path)){const t=this.children.subtree(new D(e));return t.isEmpty()?null:t.value?new ct(this.source,N(),t.value):new Ft(this.source,N(),t)}else return y(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ft(this.source,L(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Ke{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(k(e))return this.isFullyInitialized()&&!this.filtered_;const t=b(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Pg{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ng(n,e,t,i){const s=[],r=[];return e.forEach(a=>{a.type==="child_changed"&&n.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&r.push(Eg(a.childName,a.snapshotNode))}),ln(n,s,"child_removed",e,i,t),ln(n,s,"child_added",e,i,t),ln(n,s,"child_moved",r,i,t),ln(n,s,"child_changed",e,i,t),ln(n,s,"value",e,i,t),s}function ln(n,e,t,i,s,r){const a=i.filter(u=>u.type===t);a.sort((u,d)=>Dg(n,u,d)),a.forEach(u=>{const d=Og(n,u,r);s.forEach(h=>{h.respondsTo(u.type)&&e.push(h.createEvent(d,n.query_))})})}function Og(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Dg(n,e,t){if(e.childName==null||t.childName==null)throw Vt("Should only compare child_ events.");const i=new T(e.childName,e.snapshotNode),s=new T(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
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
 */function Pi(n,e){return{eventCache:n,serverCache:e}}function hn(n,e,t,i){return Pi(new Ke(e,t,i),n.serverCache)}function kl(n,e,t,i){return Pi(n.eventCache,new Ke(e,t,i))}function fi(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function ut(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let _s;const xg=()=>(_s||(_s=new re(yp)),_s);class M{constructor(e,t=xg()){this.value=e,this.children=t}static fromObject(e){let t=new M(null);return G(e,(i,s)=>{t=t.set(new D(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:N(),value:this.value};if(k(e))return null;{const i=b(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(L(e),t);return r!=null?{path:U(new D(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(k(e))return this;{const t=b(e),i=this.children.get(t);return i!==null?i.subtree(L(e)):new M(null)}}set(e,t){if(k(e))return new M(t,this.children);{const i=b(e),r=(this.children.get(i)||new M(null)).set(L(e),t),a=this.children.insert(i,r);return new M(this.value,a)}}remove(e){if(k(e))return this.children.isEmpty()?new M(null):new M(null,this.children);{const t=b(e),i=this.children.get(t);if(i){const s=i.remove(L(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new M(null):new M(this.value,r)}else return this}}get(e){if(k(e))return this.value;{const t=b(e),i=this.children.get(t);return i?i.get(L(e)):null}}setTree(e,t){if(k(e))return t;{const i=b(e),r=(this.children.get(i)||new M(null)).setTree(L(e),t);let a;return r.isEmpty()?a=this.children.remove(i):a=this.children.insert(i,r),new M(this.value,a)}}fold(e){return this.fold_(N(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(U(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,N(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(k(e))return null;{const r=b(e),a=this.children.get(r);return a?a.findOnPath_(L(e),U(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,N(),t)}foreachOnPath_(e,t,i){if(k(e))return this;{this.value&&i(t,this.value);const s=b(e),r=this.children.get(s);return r?r.foreachOnPath_(L(e),U(t,s),i):new M(null)}}foreach(e){this.foreach_(N(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(U(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
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
 */class _e{constructor(e){this.writeTree_=e}static empty(){return new _e(new M(null))}}function fn(n,e,t){if(k(e))return new _e(new M(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const a=ee(s,e);return r=r.updateChild(a,t),new _e(n.writeTree_.set(s,r))}else{const s=new M(t),r=n.writeTree_.setTree(e,s);return new _e(r)}}}function Ms(n,e,t){let i=n;return G(t,(s,r)=>{i=fn(i,U(e,s),r)}),i}function ta(n,e){if(k(e))return _e.empty();{const t=n.writeTree_.setTree(e,new M(null));return new _e(t)}}function Ls(n,e){return pt(n,e)!=null}function pt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(ee(t.path,e)):null}function na(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(W,(i,s)=>{e.push(new T(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new T(i,s.value))}),e}function qe(n,e){if(k(e))return n;{const t=pt(n,e);return t!=null?new _e(new M(t)):new _e(n.writeTree_.subtree(e))}}function Fs(n){return n.writeTree_.isEmpty()}function Bt(n,e){return Al(N(),n.writeTree_,e)}function Al(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(y(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Al(U(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(U(n,".priority"),i)),t}}/**
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
 */function Ni(n,e){return Ol(e,n)}function Mg(n,e,t,i,s){y(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=fn(n.visibleWrites,e,t)),n.lastWriteId=i}function Lg(n,e,t,i){y(i>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:i,visible:!0}),n.visibleWrites=Ms(n.visibleWrites,e,t),n.lastWriteId=i}function Fg(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function Bg(n,e){const t=n.allWrites.findIndex(u=>u.writeId===e);y(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,a=n.allWrites.length-1;for(;s&&a>=0;){const u=n.allWrites[a];u.visible&&(a>=t&&Ug(u,i.path)?s=!1:ue(i.path,u.path)&&(r=!0)),a--}if(s){if(r)return Wg(n),!0;if(i.snap)n.visibleWrites=ta(n.visibleWrites,i.path);else{const u=i.children;G(u,d=>{n.visibleWrites=ta(n.visibleWrites,U(i.path,d))})}return!0}else return!1}function Ug(n,e){if(n.snap)return ue(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&ue(U(n.path,t),e))return!0;return!1}function Wg(n){n.visibleWrites=Rl(n.allWrites,Hg,N()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Hg(n){return n.visible}function Rl(n,e,t){let i=_e.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const a=r.path;let u;if(r.snap)ue(t,a)?(u=ee(t,a),i=fn(i,u,r.snap)):ue(a,t)&&(u=ee(a,t),i=fn(i,N(),r.snap.getChild(u)));else if(r.children){if(ue(t,a))u=ee(t,a),i=Ms(i,u,r.children);else if(ue(a,t))if(u=ee(a,t),k(u))i=Ms(i,N(),r.children);else{const d=Dt(r.children,b(u));if(d){const h=d.getChild(L(u));i=fn(i,N(),h)}}}else throw Vt("WriteRecord should have .snap or .children")}}return i}function Pl(n,e,t,i,s){if(!i&&!s){const r=pt(n.visibleWrites,e);if(r!=null)return r;{const a=qe(n.visibleWrites,e);if(Fs(a))return t;if(t==null&&!Ls(a,N()))return null;{const u=t||I.EMPTY_NODE;return Bt(a,u)}}}else{const r=qe(n.visibleWrites,e);if(!s&&Fs(r))return t;if(!s&&t==null&&!Ls(r,N()))return null;{const a=function(h){return(h.visible||s)&&(!i||!~i.indexOf(h.writeId))&&(ue(h.path,e)||ue(e,h.path))},u=Rl(n.allWrites,a,e),d=t||I.EMPTY_NODE;return Bt(u,d)}}}function $g(n,e,t){let i=I.EMPTY_NODE;const s=pt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(W,(r,a)=>{i=i.updateImmediateChild(r,a)}),i;if(t){const r=qe(n.visibleWrites,e);return t.forEachChild(W,(a,u)=>{const d=Bt(qe(r,new D(a)),u);i=i.updateImmediateChild(a,d)}),na(r).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}else{const r=qe(n.visibleWrites,e);return na(r).forEach(a=>{i=i.updateImmediateChild(a.name,a.node)}),i}}function Vg(n,e,t,i,s){y(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=U(e,t);if(Ls(n.visibleWrites,r))return null;{const a=qe(n.visibleWrites,r);return Fs(a)?s.getChild(t):Bt(a,s.getChild(t))}}function jg(n,e,t,i){const s=U(e,t),r=pt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const a=qe(n.visibleWrites,s);return Bt(a,i.getNode().getImmediateChild(t))}else return null}function qg(n,e){return pt(n.visibleWrites,e)}function zg(n,e,t,i,s,r,a){let u;const d=qe(n.visibleWrites,e),h=pt(d,N());if(h!=null)u=h;else if(t!=null)u=Bt(d,t);else return[];if(u=u.withIndex(a),!u.isEmpty()&&!u.isLeafNode()){const p=[],g=a.getCompare(),_=r?u.getReverseIteratorFrom(i,a):u.getIteratorFrom(i,a);let v=_.getNext();for(;v&&p.length<s;)g(v,i)!==0&&p.push(v),v=_.getNext();return p}else return[]}function Gg(){return{visibleWrites:_e.empty(),allWrites:[],lastWriteId:-1}}function pi(n,e,t,i){return Pl(n.writeTree,n.treePath,e,t,i)}function hr(n,e){return $g(n.writeTree,n.treePath,e)}function ia(n,e,t,i){return Vg(n.writeTree,n.treePath,e,t,i)}function gi(n,e){return qg(n.writeTree,U(n.treePath,e))}function Kg(n,e,t,i,s,r){return zg(n.writeTree,n.treePath,e,t,i,s,r)}function fr(n,e,t){return jg(n.writeTree,n.treePath,e,t)}function Nl(n,e){return Ol(U(n.treePath,e),n.writeTree)}function Ol(n,e){return{treePath:n,writeTree:e}}/**
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
 */class Yg{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;y(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),y(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,En(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,wn(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Lt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,En(i,e.snapshotNode,s.oldSnap));else throw Vt("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Qg{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Dl=new Qg;class pr{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new Ke(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return fr(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ut(this.viewCache_),r=Kg(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
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
 */function Jg(n){return{filter:n}}function Xg(n,e){y(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),y(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Zg(n,e,t,i,s){const r=new Yg;let a,u;if(t.type===ge.OVERWRITE){const h=t;h.source.fromUser?a=Bs(n,e,h.path,h.snap,i,s,r):(y(h.source.fromServer,"Unknown source."),u=h.source.tagged||e.serverCache.isFiltered()&&!k(h.path),a=_i(n,e,h.path,h.snap,i,s,u,r))}else if(t.type===ge.MERGE){const h=t;h.source.fromUser?a=t_(n,e,h.path,h.children,i,s,r):(y(h.source.fromServer,"Unknown source."),u=h.source.tagged||e.serverCache.isFiltered(),a=Us(n,e,h.path,h.children,i,s,u,r))}else if(t.type===ge.ACK_USER_WRITE){const h=t;h.revert?a=s_(n,e,h.path,i,s,r):a=n_(n,e,h.path,h.affectedTree,i,s,r)}else if(t.type===ge.LISTEN_COMPLETE)a=i_(n,e,t.path,i,r);else throw Vt("Unknown operation type: "+t.type);const d=r.getChanges();return e_(e,a,d),{viewCache:a,changes:d}}function e_(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=fi(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Tl(fi(e)))}}function xl(n,e,t,i,s,r){const a=e.eventCache;if(gi(i,t)!=null)return e;{let u,d;if(k(t))if(y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=ut(e),p=h instanceof I?h:I.EMPTY_NODE,g=hr(i,p);u=n.filter.updateFullNode(e.eventCache.getNode(),g,r)}else{const h=pi(i,ut(e));u=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const h=b(t);if(h===".priority"){y(Ge(t)===1,"Can't have a priority with additional path components");const p=a.getNode();d=e.serverCache.getNode();const g=ia(i,t,p,d);g!=null?u=n.filter.updatePriority(p,g):u=a.getNode()}else{const p=L(t);let g;if(a.isCompleteForChild(h)){d=e.serverCache.getNode();const _=ia(i,t,a.getNode(),d);_!=null?g=a.getNode().getImmediateChild(h).updateChild(p,_):g=a.getNode().getImmediateChild(h)}else g=fr(i,h,e.serverCache);g!=null?u=n.filter.updateChild(a.getNode(),h,g,p,s,r):u=a.getNode()}}return hn(e,u,a.isFullyInitialized()||k(t),n.filter.filtersNodes())}}function _i(n,e,t,i,s,r,a,u){const d=e.serverCache;let h;const p=a?n.filter:n.filter.getIndexedFilter();if(k(t))h=p.updateFullNode(d.getNode(),i,null);else if(p.filtersNodes()&&!d.isFiltered()){const v=d.getNode().updateChild(t,i);h=p.updateFullNode(d.getNode(),v,null)}else{const v=b(t);if(!d.isCompleteForPath(t)&&Ge(t)>1)return e;const w=L(t),F=d.getNode().getImmediateChild(v).updateChild(w,i);v===".priority"?h=p.updatePriority(d.getNode(),F):h=p.updateChild(d.getNode(),v,F,w,Dl,null)}const g=kl(e,h,d.isFullyInitialized()||k(t),p.filtersNodes()),_=new pr(s,g,r);return xl(n,g,t,s,_,u)}function Bs(n,e,t,i,s,r,a){const u=e.eventCache;let d,h;const p=new pr(s,e,r);if(k(t))h=n.filter.updateFullNode(e.eventCache.getNode(),i,a),d=hn(e,h,!0,n.filter.filtersNodes());else{const g=b(t);if(g===".priority")h=n.filter.updatePriority(e.eventCache.getNode(),i),d=hn(e,h,u.isFullyInitialized(),u.isFiltered());else{const _=L(t),v=u.getNode().getImmediateChild(g);let w;if(k(_))w=i;else{const A=p.getCompleteChild(g);A!=null?ir(_)===".priority"&&A.getChild(yl(_)).isEmpty()?w=A:w=A.updateChild(_,i):w=I.EMPTY_NODE}if(v.equals(w))d=e;else{const A=n.filter.updateChild(u.getNode(),g,w,_,p,a);d=hn(e,A,u.isFullyInitialized(),n.filter.filtersNodes())}}}return d}function sa(n,e){return n.eventCache.isCompleteForChild(e)}function t_(n,e,t,i,s,r,a){let u=e;return i.foreach((d,h)=>{const p=U(t,d);sa(e,b(p))&&(u=Bs(n,u,p,h,s,r,a))}),i.foreach((d,h)=>{const p=U(t,d);sa(e,b(p))||(u=Bs(n,u,p,h,s,r,a))}),u}function ra(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function Us(n,e,t,i,s,r,a,u){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let d=e,h;k(t)?h=i:h=new M(null).setTree(t,i);const p=e.serverCache.getNode();return h.children.inorderTraversal((g,_)=>{if(p.hasChild(g)){const v=e.serverCache.getNode().getImmediateChild(g),w=ra(n,v,_);d=_i(n,d,new D(g),w,s,r,a,u)}}),h.children.inorderTraversal((g,_)=>{const v=!e.serverCache.isCompleteForChild(g)&&_.value===null;if(!p.hasChild(g)&&!v){const w=e.serverCache.getNode().getImmediateChild(g),A=ra(n,w,_);d=_i(n,d,new D(g),A,s,r,a,u)}}),d}function n_(n,e,t,i,s,r,a){if(gi(s,t)!=null)return e;const u=e.serverCache.isFiltered(),d=e.serverCache;if(i.value!=null){if(k(t)&&d.isFullyInitialized()||d.isCompleteForPath(t))return _i(n,e,t,d.getNode().getChild(t),s,r,u,a);if(k(t)){let h=new M(null);return d.getNode().forEachChild(Pt,(p,g)=>{h=h.set(new D(p),g)}),Us(n,e,t,h,s,r,u,a)}else return e}else{let h=new M(null);return i.foreach((p,g)=>{const _=U(t,p);d.isCompleteForPath(_)&&(h=h.set(p,d.getNode().getChild(_)))}),Us(n,e,t,h,s,r,u,a)}}function i_(n,e,t,i,s){const r=e.serverCache,a=kl(e,r.getNode(),r.isFullyInitialized()||k(t),r.isFiltered());return xl(n,a,t,i,Dl,s)}function s_(n,e,t,i,s,r){let a;if(gi(i,t)!=null)return e;{const u=new pr(i,e,s),d=e.eventCache.getNode();let h;if(k(t)||b(t)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=pi(i,ut(e));else{const g=e.serverCache.getNode();y(g instanceof I,"serverChildren would be complete if leaf node"),p=hr(i,g)}p=p,h=n.filter.updateFullNode(d,p,r)}else{const p=b(t);let g=fr(i,p,e.serverCache);g==null&&e.serverCache.isCompleteForChild(p)&&(g=d.getImmediateChild(p)),g!=null?h=n.filter.updateChild(d,p,g,L(t),u,r):e.eventCache.getNode().hasChild(p)?h=n.filter.updateChild(d,p,I.EMPTY_NODE,L(t),u,r):h=d,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=pi(i,ut(e)),a.isLeafNode()&&(h=n.filter.updateFullNode(h,a,r)))}return a=e.serverCache.isFullyInitialized()||gi(i,N())!=null,hn(e,h,a,n.filter.filtersNodes())}}/**
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
 */class r_{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new ar(i.getIndex()),r=Cg(i);this.processor_=Jg(r);const a=t.serverCache,u=t.eventCache,d=s.updateFullNode(I.EMPTY_NODE,a.getNode(),null),h=r.updateFullNode(I.EMPTY_NODE,u.getNode(),null),p=new Ke(d,a.isFullyInitialized(),s.filtersNodes()),g=new Ke(h,u.isFullyInitialized(),r.filtersNodes());this.viewCache_=Pi(g,p),this.eventGenerator_=new Pg(this.query_)}get query(){return this.query_}}function o_(n){return n.viewCache_.serverCache.getNode()}function a_(n){return fi(n.viewCache_)}function l_(n,e){const t=ut(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!k(e)&&!t.getImmediateChild(b(e)).isEmpty())?t.getChild(e):null}function oa(n){return n.eventRegistrations_.length===0}function c_(n,e){n.eventRegistrations_.push(e)}function aa(n,e,t){const i=[];if(t){y(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const a=r.createCancelEvent(t,s);a&&i.push(a)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const a=n.eventRegistrations_[r];if(!a.matches(e))s.push(a);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function la(n,e,t,i){e.type===ge.MERGE&&e.source.queryId!==null&&(y(ut(n.viewCache_),"We should always have a full cache before handling merges"),y(fi(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=Zg(n.processor_,s,e,t,i);return Xg(n.processor_,r.viewCache),y(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ml(n,r.changes,r.viewCache.eventCache.getNode(),null)}function u_(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(W,(r,a)=>{i.push(Lt(r,a))}),t.isFullyInitialized()&&i.push(Tl(t.getNode())),Ml(n,i,t.getNode(),e)}function Ml(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Ng(n.eventGenerator_,e,t,s)}/**
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
 */let mi;class Ll{constructor(){this.views=new Map}}function d_(n){y(!mi,"__referenceConstructor has already been defined"),mi=n}function h_(){return y(mi,"Reference.ts has not been loaded"),mi}function f_(n){return n.views.size===0}function gr(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return y(r!=null,"SyncTree gave us an op for an invalid query."),la(r,e,t,i)}else{let r=[];for(const a of n.views.values())r=r.concat(la(a,e,t,i));return r}}function Fl(n,e,t,i,s){const r=e._queryIdentifier,a=n.views.get(r);if(!a){let u=pi(t,s?i:null),d=!1;u?d=!0:i instanceof I?(u=hr(t,i),d=!1):(u=I.EMPTY_NODE,d=!1);const h=Pi(new Ke(u,d,!1),new Ke(i,s,!1));return new r_(e,h)}return a}function p_(n,e,t,i,s,r){const a=Fl(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,a),c_(a,t),u_(a,t)}function g_(n,e,t,i){const s=e._queryIdentifier,r=[];let a=[];const u=Ye(n);if(s==="default")for(const[d,h]of n.views.entries())a=a.concat(aa(h,t,i)),oa(h)&&(n.views.delete(d),h.query._queryParams.loadsAllData()||r.push(h.query));else{const d=n.views.get(s);d&&(a=a.concat(aa(d,t,i)),oa(d)&&(n.views.delete(s),d.query._queryParams.loadsAllData()||r.push(d.query)))}return u&&!Ye(n)&&r.push(new(h_())(e._repo,e._path)),{removed:r,events:a}}function Bl(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ze(n,e){let t=null;for(const i of n.views.values())t=t||l_(i,e);return t}function Ul(n,e){if(e._queryParams.loadsAllData())return Oi(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Wl(n,e){return Ul(n,e)!=null}function Ye(n){return Oi(n)!=null}function Oi(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let yi;function __(n){y(!yi,"__referenceConstructor has already been defined"),yi=n}function m_(){return y(yi,"Reference.ts has not been loaded"),yi}let y_=1;class ca{constructor(e){this.listenProvider_=e,this.syncPointTree_=new M(null),this.pendingWriteTree_=Gg(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hl(n,e,t,i,s){return Mg(n.pendingWriteTree_,e,t,i,s),s?Gt(n,new ct(cr(),e,t)):[]}function v_(n,e,t,i){Lg(n.pendingWriteTree_,e,t,i);const s=M.fromObject(t);return Gt(n,new Ft(cr(),e,s))}function He(n,e,t=!1){const i=Fg(n.pendingWriteTree_,e);if(Bg(n.pendingWriteTree_,e)){let r=new M(null);return i.snap!=null?r=r.set(N(),!0):G(i.children,a=>{r=r.set(new D(a),!0)}),Gt(n,new hi(i.path,r,t))}else return[]}function On(n,e,t){return Gt(n,new ct(ur(),e,t))}function w_(n,e,t){const i=M.fromObject(t);return Gt(n,new Ft(ur(),e,i))}function E_(n,e){return Gt(n,new Cn(ur(),e))}function I_(n,e,t){const i=mr(n,t);if(i){const s=yr(i),r=s.path,a=s.queryId,u=ee(r,e),d=new Cn(dr(a),u);return vr(n,r,d)}else return[]}function vi(n,e,t,i,s=!1){const r=e._path,a=n.syncPointTree_.get(r);let u=[];if(a&&(e._queryIdentifier==="default"||Wl(a,e))){const d=g_(a,e,t,i);f_(a)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const h=d.removed;if(u=d.events,!s){const p=h.findIndex(_=>_._queryParams.loadsAllData())!==-1,g=n.syncPointTree_.findOnPath(r,(_,v)=>Ye(v));if(p&&!g){const _=n.syncPointTree_.subtree(r);if(!_.isEmpty()){const v=T_(_);for(let w=0;w<v.length;++w){const A=v[w],F=A.query,X=ql(n,A);n.listenProvider_.startListening(pn(F),bn(n,F),X.hashFn,X.onComplete)}}}!g&&h.length>0&&!i&&(p?n.listenProvider_.stopListening(pn(e),null):h.forEach(_=>{const v=n.queryToTagMap.get(Di(_));n.listenProvider_.stopListening(pn(_),v)}))}S_(n,h)}return u}function $l(n,e,t,i){const s=mr(n,i);if(s!=null){const r=yr(s),a=r.path,u=r.queryId,d=ee(a,e),h=new ct(dr(u),d,t);return vr(n,a,h)}else return[]}function C_(n,e,t,i){const s=mr(n,i);if(s){const r=yr(s),a=r.path,u=r.queryId,d=ee(a,e),h=M.fromObject(t),p=new Ft(dr(u),d,h);return vr(n,a,p)}else return[]}function Ws(n,e,t,i=!1){const s=e._path;let r=null,a=!1;n.syncPointTree_.foreachOnPath(s,(_,v)=>{const w=ee(_,s);r=r||ze(v,w),a=a||Ye(v)});let u=n.syncPointTree_.get(s);u?(a=a||Ye(u),r=r||ze(u,N())):(u=new Ll,n.syncPointTree_=n.syncPointTree_.set(s,u));let d;r!=null?d=!0:(d=!1,r=I.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((v,w)=>{const A=ze(w,N());A&&(r=r.updateImmediateChild(v,A))}));const h=Wl(u,e);if(!h&&!e._queryParams.loadsAllData()){const _=Di(e);y(!n.queryToTagMap.has(_),"View does not exist, but we have a tag");const v=k_();n.queryToTagMap.set(_,v),n.tagToQueryMap.set(v,_)}const p=Ni(n.pendingWriteTree_,s);let g=p_(u,e,t,p,r,d);if(!h&&!a&&!i){const _=Ul(u,e);g=g.concat(A_(n,e,_))}return g}function _r(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(a,u)=>{const d=ee(a,e),h=ze(u,d);if(h)return h});return Pl(s,e,r,t,!0)}function b_(n,e){const t=e._path;let i=null;n.syncPointTree_.foreachOnPath(t,(h,p)=>{const g=ee(h,t);i=i||ze(p,g)});let s=n.syncPointTree_.get(t);s?i=i||ze(s,N()):(s=new Ll,n.syncPointTree_=n.syncPointTree_.set(t,s));const r=i!=null,a=r?new Ke(i,!0,!1):null,u=Ni(n.pendingWriteTree_,e._path),d=Fl(s,e,u,r?a.getNode():I.EMPTY_NODE,r);return a_(d)}function Gt(n,e){return Vl(e,n.syncPointTree_,null,Ni(n.pendingWriteTree_,N()))}function Vl(n,e,t,i){if(k(n.path))return jl(n,e,t,i);{const s=e.get(N());t==null&&s!=null&&(t=ze(s,N()));let r=[];const a=b(n.path),u=n.operationForChild(a),d=e.children.get(a);if(d&&u){const h=t?t.getImmediateChild(a):null,p=Nl(i,a);r=r.concat(Vl(u,d,h,p))}return s&&(r=r.concat(gr(s,n,i,t))),r}}function jl(n,e,t,i){const s=e.get(N());t==null&&s!=null&&(t=ze(s,N()));let r=[];return e.children.inorderTraversal((a,u)=>{const d=t?t.getImmediateChild(a):null,h=Nl(i,a),p=n.operationForChild(a);p&&(r=r.concat(jl(p,u,d,h)))}),s&&(r=r.concat(gr(s,n,i,t))),r}function ql(n,e){const t=e.query,i=bn(n,t);return{hashFn:()=>(o_(e)||I.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?I_(n,t._path,i):E_(n,t._path);{const r=Ep(s,t);return vi(n,t,null,r)}}}}function bn(n,e){const t=Di(e);return n.queryToTagMap.get(t)}function Di(n){return n._path.toString()+"$"+n._queryIdentifier}function mr(n,e){return n.tagToQueryMap.get(e)}function yr(n){const e=n.indexOf("$");return y(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new D(n.substr(0,e))}}function vr(n,e,t){const i=n.syncPointTree_.get(e);y(i,"Missing sync point for query tag that we're tracking");const s=Ni(n.pendingWriteTree_,e);return gr(i,t,s,null)}function T_(n){return n.fold((e,t,i)=>{if(t&&Ye(t))return[Oi(t)];{let s=[];return t&&(s=Bl(t)),G(i,(r,a)=>{s=s.concat(a)}),s}})}function pn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(m_())(n._repo,n._path):n}function S_(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Di(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function k_(){return y_++}function A_(n,e,t){const i=e._path,s=bn(n,e),r=ql(n,t),a=n.listenProvider_.startListening(pn(e),s,r.hashFn,r.onComplete),u=n.syncPointTree_.subtree(i);if(s)y(!Ye(u.value),"If we're adding a query, it shouldn't be shadowed");else{const d=u.fold((h,p,g)=>{if(!k(h)&&p&&Ye(p))return[Oi(p).query];{let _=[];return p&&(_=_.concat(Bl(p).map(v=>v.query))),G(g,(v,w)=>{_=_.concat(w)}),_}});for(let h=0;h<d.length;++h){const p=d[h];n.listenProvider_.stopListening(pn(p),bn(n,p))}}return a}/**
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
 */class wr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new wr(t)}node(){return this.node_}}class Er{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=U(this.path_,e);return new Er(this.syncTree_,t)}node(){return _r(this.syncTree_,this.path_)}}const R_=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},ua=function(n,e,t){if(!n||typeof n!="object")return n;if(y(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return P_(n[".sv"],e,t);if(typeof n[".sv"]=="object")return N_(n[".sv"],e);y(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},P_=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:y(!1,"Unexpected server value: "+n)}},N_=function(n,e,t){n.hasOwnProperty("increment")||y(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&y(!1,"Unexpected increment value: "+i);const s=e.node();if(y(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const a=s.getValue();return typeof a!="number"?i:a+i},zl=function(n,e,t,i){return Ir(e,new Er(t,n),i)},Gl=function(n,e,t){return Ir(n,new wr(e),t)};function Ir(n,e,t){const i=n.getPriority().val(),s=ua(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const a=n,u=ua(a.getValue(),e,t);return u!==a.getValue()||s!==a.getPriority().val()?new V(u,H(s)):n}else{const a=n;return r=a,s!==a.getPriority().val()&&(r=r.updatePriority(new V(s))),a.forEachChild(W,(u,d)=>{const h=Ir(d,e.getImmediateChild(u),t);h!==d&&(r=r.updateImmediateChild(u,h))}),r}}/**
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
 */class Cr{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function br(n,e){let t=e instanceof D?e:new D(e),i=n,s=b(t);for(;s!==null;){const r=Dt(i.node.children,s)||{children:{},childCount:0};i=new Cr(s,i,r),t=L(t),s=b(t)}return i}function Kt(n){return n.node.value}function Kl(n,e){n.node.value=e,Hs(n)}function Yl(n){return n.node.childCount>0}function O_(n){return Kt(n)===void 0&&!Yl(n)}function xi(n,e){G(n.node.children,(t,i)=>{e(new Cr(t,n,i))})}function Ql(n,e,t,i){t&&!i&&e(n),xi(n,s=>{Ql(s,e,!0,i)}),t&&i&&e(n)}function D_(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Dn(n){return new D(n.parent===null?n.name:Dn(n.parent)+"/"+n.name)}function Hs(n){n.parent!==null&&x_(n.parent,n.name,n)}function x_(n,e,t){const i=O_(t),s=Ce(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,Hs(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,Hs(n))}/**
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
 */const M_=/[\[\].#$\/\u0000-\u001F\u007F]/,L_=/[\[\].#$\u0000-\u001F\u007F]/,ms=10*1024*1024,Tr=function(n){return typeof n=="string"&&n.length!==0&&!M_.test(n)},Jl=function(n){return typeof n=="string"&&n.length!==0&&!L_.test(n)},F_=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Jl(n)},B_=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Xs(n)||n&&typeof n=="object"&&Ce(n,".sv")},Xl=function(n,e,t,i){i&&e===void 0||Mi(ki(n,"value"),e,t)},Mi=function(n,e,t){const i=t instanceof D?new tg(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+nt(i));if(typeof e=="function")throw new Error(n+"contains a function "+nt(i)+" with contents = "+e.toString());if(Xs(e))throw new Error(n+"contains "+e.toString()+" "+nt(i));if(typeof e=="string"&&e.length>ms/3&&Ai(e)>ms)throw new Error(n+"contains a string greater than "+ms+" utf8 bytes "+nt(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(G(e,(a,u)=>{if(a===".value")s=!0;else if(a!==".priority"&&a!==".sv"&&(r=!0,!Tr(a)))throw new Error(n+" contains an invalid key ("+a+") "+nt(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ng(i,a),Mi(n,u,i),ig(i)}),s&&r)throw new Error(n+' contains ".value" child '+nt(i)+" in addition to actual children.")}},U_=function(n,e){let t,i;for(t=0;t<e.length;t++){i=e[t];const r=vn(i);for(let a=0;a<r.length;a++)if(!(r[a]===".priority"&&a===r.length-1)){if(!Tr(r[a]))throw new Error(n+"contains an invalid key ("+r[a]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(eg);let s=null;for(t=0;t<e.length;t++){if(i=e[t],s!==null&&ue(s,i))throw new Error(n+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}},W_=function(n,e,t,i){if(i&&e===void 0)return;const s=ki(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const r=[];G(e,(a,u)=>{const d=new D(a);if(Mi(s,u,U(t,d)),ir(d)===".priority"&&!B_(u))throw new Error(s+"contains an invalid value for '"+d.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(d)}),U_(s,r)},Zl=function(n,e,t,i){if(!(i&&t===void 0)&&!Jl(t))throw new Error(ki(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},H_=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Zl(n,e,t,i)},Sr=function(n,e){if(b(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},$_=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!F_(t))throw new Error(ki(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class V_{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Li(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!sr(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function ec(n,e,t){Li(n,t),tc(n,i=>sr(i,e))}function de(n,e,t){Li(n,t),tc(n,i=>ue(i,e)||ue(e,i))}function tc(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(j_(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function j_(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();st&&z("event: "+t.toString()),zt(i)}}}/**
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
 */const q_="repo_interrupt",z_=25;class G_{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new V_,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=di(),this.transactionQueueTree_=new Cr,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function K_(n,e,t){if(n.stats_=tr(n.repoInfo_),n.forceRestClient_||Tp())n.server_=new ui(n.repoInfo_,(i,s,r,a)=>{da(n,i,s,r,a)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ha(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Re(n.repoInfo_,e,(i,s,r,a)=>{da(n,i,s,r,a)},i=>{ha(n,i)},i=>{Y_(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Pp(n.repoInfo_,()=>new Rg(n.stats_,n.server_)),n.infoData_=new bg,n.infoSyncTree_=new ca({startListening:(i,s,r,a)=>{let u=[];const d=n.infoData_.getNode(i._path);return d.isEmpty()||(u=On(n.infoSyncTree_,i._path,d),setTimeout(()=>{a("ok")},0)),u},stopListening:()=>{}}),kr(n,"connected",!1),n.serverSyncTree_=new ca({startListening:(i,s,r,a)=>(n.server_.listen(i,r,s,(u,d)=>{const h=a(u,d);de(n.eventQueue_,i._path,h)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function nc(n){const t=n.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Fi(n){return R_({timestamp:nc(n)})}function da(n,e,t,i,s){n.dataUpdateCount++;const r=new D(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let a=[];if(s)if(i){const d=si(t,h=>H(h));a=C_(n.serverSyncTree_,r,d,s)}else{const d=H(t);a=$l(n.serverSyncTree_,r,d,s)}else if(i){const d=si(t,h=>H(h));a=w_(n.serverSyncTree_,r,d)}else{const d=H(t);a=On(n.serverSyncTree_,r,d)}let u=r;a.length>0&&(u=Ut(n,r)),de(n.eventQueue_,u,a)}function ha(n,e){kr(n,"connected",e),e===!1&&Z_(n)}function Y_(n,e){G(e,(t,i)=>{kr(n,t,i)})}function kr(n,e,t){const i=new D("/.info/"+e),s=H(t);n.infoData_.updateSnapshot(i,s);const r=On(n.infoSyncTree_,i,s);de(n.eventQueue_,i,r)}function Ar(n){return n.nextWriteId_++}function Q_(n,e,t){const i=b_(n.serverSyncTree_,e);return i!=null?Promise.resolve(i):n.server_.get(e).then(s=>{const r=H(s).withIndex(e._queryParams.getIndex());Ws(n.serverSyncTree_,e,t,!0);let a;if(e._queryParams.loadsAllData())a=On(n.serverSyncTree_,e._path,r);else{const u=bn(n.serverSyncTree_,e);a=$l(n.serverSyncTree_,e._path,r,u)}return de(n.eventQueue_,e._path,a),vi(n.serverSyncTree_,e,t,null,!0),r},s=>(xn(n,"get for query "+$(e)+" failed: "+s),Promise.reject(new Error(s))))}function J_(n,e,t,i,s){xn(n,"set",{path:e.toString(),value:t,priority:i});const r=Fi(n),a=H(t,i),u=_r(n.serverSyncTree_,e),d=Gl(a,u,r),h=Ar(n),p=Hl(n.serverSyncTree_,e,d,h,!0);Li(n.eventQueue_,p),n.server_.put(e.toString(),a.val(!0),(_,v)=>{const w=_==="ok";w||te("set at "+e+" failed: "+_);const A=He(n.serverSyncTree_,h,!w);de(n.eventQueue_,e,A),$s(n,s,_,v)});const g=Pr(n,e);Ut(n,g),de(n.eventQueue_,g,[])}function X_(n,e,t,i){xn(n,"update",{path:e.toString(),value:t});let s=!0;const r=Fi(n),a={};if(G(t,(u,d)=>{s=!1,a[u]=zl(U(e,u),H(d),n.serverSyncTree_,r)}),s)z("update() called with empty data.  Don't do anything."),$s(n,i,"ok",void 0);else{const u=Ar(n),d=v_(n.serverSyncTree_,e,a,u);Li(n.eventQueue_,d),n.server_.merge(e.toString(),t,(h,p)=>{const g=h==="ok";g||te("update at "+e+" failed: "+h);const _=He(n.serverSyncTree_,u,!g),v=_.length>0?Ut(n,e):e;de(n.eventQueue_,v,_),$s(n,i,h,p)}),G(t,h=>{const p=Pr(n,U(e,h));Ut(n,p)}),de(n.eventQueue_,e,[])}}function Z_(n){xn(n,"onDisconnectEvents");const e=Fi(n),t=di();xs(n.onDisconnect_,N(),(s,r)=>{const a=zl(s,r,n.serverSyncTree_,e);Sl(t,s,a)});let i=[];xs(t,N(),(s,r)=>{i=i.concat(On(n.serverSyncTree_,s,r));const a=Pr(n,s);Ut(n,a)}),n.onDisconnect_=di(),de(n.eventQueue_,N(),i)}function em(n,e,t){let i;b(e._path)===".info"?i=Ws(n.infoSyncTree_,e,t):i=Ws(n.serverSyncTree_,e,t),ec(n.eventQueue_,e._path,i)}function fa(n,e,t){let i;b(e._path)===".info"?i=vi(n.infoSyncTree_,e,t):i=vi(n.serverSyncTree_,e,t),ec(n.eventQueue_,e._path,i)}function tm(n){n.persistentConnection_&&n.persistentConnection_.interrupt(q_)}function xn(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),z(t,...e)}function $s(n,e,t,i){e&&zt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const a=new Error(r);a.code=s,e(a)}})}function ic(n,e,t){return _r(n.serverSyncTree_,e,t)||I.EMPTY_NODE}function Rr(n,e=n.transactionQueueTree_){if(e||Bi(n,e),Kt(e)){const t=rc(n,e);y(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&nm(n,Dn(e),t)}else Yl(e)&&xi(e,t=>{Rr(n,t)})}function nm(n,e,t){const i=t.map(h=>h.currentWriteId),s=ic(n,e,i);let r=s;const a=s.hash();for(let h=0;h<t.length;h++){const p=t[h];y(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const g=ee(e,p.path);r=r.updateChild(g,p.currentOutputSnapshotRaw)}const u=r.val(!0),d=e;n.server_.put(d.toString(),u,h=>{xn(n,"transaction put response",{path:d.toString(),status:h});let p=[];if(h==="ok"){const g=[];for(let _=0;_<t.length;_++)t[_].status=2,p=p.concat(He(n.serverSyncTree_,t[_].currentWriteId)),t[_].onComplete&&g.push(()=>t[_].onComplete(null,!0,t[_].currentOutputSnapshotResolved)),t[_].unwatcher();Bi(n,br(n.transactionQueueTree_,e)),Rr(n,n.transactionQueueTree_),de(n.eventQueue_,e,p);for(let _=0;_<g.length;_++)zt(g[_])}else{if(h==="datastale")for(let g=0;g<t.length;g++)t[g].status===3?t[g].status=4:t[g].status=0;else{te("transaction at "+d.toString()+" failed: "+h);for(let g=0;g<t.length;g++)t[g].status=4,t[g].abortReason=h}Ut(n,e)}},a)}function Ut(n,e){const t=sc(n,e),i=Dn(t),s=rc(n,t);return im(n,s,i),i}function im(n,e,t){if(e.length===0)return;const i=[];let s=[];const a=e.filter(u=>u.status===0).map(u=>u.currentWriteId);for(let u=0;u<e.length;u++){const d=e[u],h=ee(t,d.path);let p=!1,g;if(y(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),d.status===4)p=!0,g=d.abortReason,s=s.concat(He(n.serverSyncTree_,d.currentWriteId,!0));else if(d.status===0)if(d.retryCount>=z_)p=!0,g="maxretry",s=s.concat(He(n.serverSyncTree_,d.currentWriteId,!0));else{const _=ic(n,d.path,a);d.currentInputSnapshot=_;const v=e[u].update(_.val());if(v!==void 0){Mi("transaction failed: Data returned ",v,d.path);let w=H(v);typeof v=="object"&&v!=null&&Ce(v,".priority")||(w=w.updatePriority(_.getPriority()));const F=d.currentWriteId,X=Fi(n),he=Gl(w,_,X);d.currentOutputSnapshotRaw=w,d.currentOutputSnapshotResolved=he,d.currentWriteId=Ar(n),a.splice(a.indexOf(F),1),s=s.concat(Hl(n.serverSyncTree_,d.path,he,d.currentWriteId,d.applyLocally)),s=s.concat(He(n.serverSyncTree_,F,!0))}else p=!0,g="nodata",s=s.concat(He(n.serverSyncTree_,d.currentWriteId,!0))}de(n.eventQueue_,t,s),s=[],p&&(e[u].status=2,function(_){setTimeout(_,Math.floor(0))}(e[u].unwatcher),e[u].onComplete&&(g==="nodata"?i.push(()=>e[u].onComplete(null,!1,e[u].currentInputSnapshot)):i.push(()=>e[u].onComplete(new Error(g),!1,null))))}Bi(n,n.transactionQueueTree_);for(let u=0;u<i.length;u++)zt(i[u]);Rr(n,n.transactionQueueTree_)}function sc(n,e){let t,i=n.transactionQueueTree_;for(t=b(e);t!==null&&Kt(i)===void 0;)i=br(i,t),e=L(e),t=b(e);return i}function rc(n,e){const t=[];return oc(n,e,t),t.sort((i,s)=>i.order-s.order),t}function oc(n,e,t){const i=Kt(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);xi(e,s=>{oc(n,s,t)})}function Bi(n,e){const t=Kt(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Kl(e,t.length>0?t:void 0)}xi(e,i=>{Bi(n,i)})}function Pr(n,e){const t=Dn(sc(n,e)),i=br(n.transactionQueueTree_,e);return D_(i,s=>{ys(n,s)}),ys(n,i),Ql(i,s=>{ys(n,s)}),t}function ys(n,e){const t=Kt(e);if(t){const i=[];let s=[],r=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(y(r===a-1,"All SENT items should be at beginning of queue."),r=a,t[a].status=3,t[a].abortReason="set"):(y(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),s=s.concat(He(n.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&i.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Kl(e,void 0):t.length=r+1,de(n.eventQueue_,Dn(e),s);for(let a=0;a<i.length;a++)zt(i[a])}}/**
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
 */function sm(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function rm(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):te(`Invalid query segment '${t}' in query '${n}'`)}return e}const pa=function(n,e){const t=om(n),i=t.namespace;t.domain==="firebase.com"&&Pe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&Pe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||_p();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new cl(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new D(t.pathString)}},om=function(n){let e="",t="",i="",s="",r="",a=!0,u="https",d=443;if(typeof n=="string"){let h=n.indexOf("//");h>=0&&(u=n.substring(0,h-1),n=n.substring(h+2));let p=n.indexOf("/");p===-1&&(p=n.length);let g=n.indexOf("?");g===-1&&(g=n.length),e=n.substring(0,Math.min(p,g)),p<g&&(s=sm(n.substring(p,g)));const _=rm(n.substring(Math.min(n.length,g)));h=e.indexOf(":"),h>=0?(a=u==="https"||u==="wss",d=parseInt(e.substring(h+1),10)):h=e.length;const v=e.slice(0,h);if(v.toLowerCase()==="localhost")t="localhost";else if(v.split(".").length<=2)t=v;else{const w=e.indexOf(".");i=e.substring(0,w).toLowerCase(),t=e.substring(w+1),r=i}"ns"in _&&(r=_.ns)}return{host:e,port:d,domain:t,subdomain:i,secure:a,scheme:u,pathString:s,namespace:r}};/**
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
 */const ga="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",am=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=ga.charAt(t%64),t=Math.floor(t/64);y(t===0,"Cannot push at time == 0");let a=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)a+=ga.charAt(e[s]);return y(a.length===20,"nextPushId: Length should be 20."),a}}();/**
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
 */class ac{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$(this.snapshot.exportVal())}}class lc{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class cc{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return y(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Nr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return k(this._path)?null:ir(this._path)}get ref(){return new be(this._repo,this._path)}get _queryIdentifier(){const e=Zo(this._queryParams),t=Zs(e);return t==="{}"?"default":t}get _queryObject(){return Zo(this._queryParams)}isEqual(e){if(e=K(e),!(e instanceof Nr))return!1;const t=this._repo===e._repo,i=sr(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+Zp(this._path)}}class be extends Nr{constructor(e,t){super(e,t,new lr,!1)}get parent(){const e=yl(this._path);return e===null?null:new be(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wt{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new D(e),i=Ht(this.ref,e);return new Wt(this._node.getChild(t),i,W)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new Wt(s,Ht(this.ref,i),W)))}hasChild(e){const t=new D(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ie(n,e){return n=K(n),n._checkNotDeleted("ref"),e!==void 0?Ht(n._root,e):n._root}function Ht(n,e){return n=K(n),b(n._path)===null?H_("child","path",e,!1):Zl("child","path",e,!1),new be(n._repo,U(n._path,e))}function lm(n,e){n=K(n),Sr("push",n._path),Xl("push",e,n._path,!0);const t=nc(n._repo),i=am(t),s=Ht(n,i),r=Ht(n,i);let a;return e!=null?a=wi(r,e).then(()=>r):a=Promise.resolve(r),s.then=a.then.bind(a),s.catch=a.then.bind(a,void 0),s}function cm(n){return Sr("remove",n._path),wi(n,null)}function wi(n,e){n=K(n),Sr("set",n._path),Xl("set",e,n._path,!1);const t=new kn;return J_(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function et(n,e){W_("update",e,n._path,!1);const t=new kn;return X_(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function xv(n){n=K(n);const e=new cc(()=>{}),t=new Ui(e);return Q_(n._repo,n,t).then(i=>new Wt(i,new be(n._repo,n._path),n._queryParams.getIndex()))}class Ui{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new ac("value",this,new Wt(e.snapshotNode,new be(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new lc(this,e,t):null}matches(e){return e instanceof Ui?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Or{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new lc(this,e,t):null}createEvent(e,t){y(e.childName!=null,"Child events should have a childName.");const i=Ht(new be(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new ac(e.type,this,new Wt(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Or?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function um(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const d=t,h=(p,g)=>{fa(n._repo,n,u),d(p,g)};h.userCallback=t.userCallback,h.context=t.context,t=h}const a=new cc(t,r||void 0),u=e==="value"?new Ui(a):new Or(e,a);return em(n._repo,n,u),()=>fa(n._repo,n,u)}function Qn(n,e,t,i){return um(n,"value",e,t,i)}d_(be);__(be);/**
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
 */const dm="FIREBASE_DATABASE_EMULATOR_HOST",Vs={};let hm=!1;function fm(n,e,t,i){n.repoInfo_=new cl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function pm(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||Pe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),z("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let a=pa(r,s),u=a.repoInfo,d,h;typeof process<"u"&&process.env&&(h=process.env[dm]),h?(d=!0,r=`http://${h}?ns=${u.namespace}`,a=pa(r,s),u=a.repoInfo):d=!a.repoInfo.secure;const p=s&&d?new Rt(Rt.OWNER):new kp(n.name,n.options,e);$_("Invalid Firebase Database URL",a),k(a.path)||Pe("Database URL must point to the root of a Firebase Database (not including a child path).");const g=_m(u,n,p,new Sp(n.name,t));return new mm(g,n)}function gm(n,e){const t=Vs[e];(!t||t[n.key]!==n)&&Pe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),tm(n),delete t[n.key]}function _m(n,e,t,i){let s=Vs[e.name];s||(s={},Vs[e.name]=s);let r=s[n.toURLString()];return r&&Pe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new G_(n,hm,t,i),s[n.toURLString()]=r,r}class mm{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(K_(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new be(this._repo,N())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gm(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pe("Cannot call "+e+" on a deleted database.")}}function ym(n=za(),e){const t=Js(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=Wh("database");i&&vm(t,...i)}return t}function vm(n,e,t,i={}){n=K(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&Pe("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&Pe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Rt(Rt.OWNER);else if(i.mockUserToken){const a=typeof i.mockUserToken=="string"?i.mockUserToken:$h(i.mockUserToken,n.app.options.projectId);r=new Rt(a)}fm(s,e,t,r)}/**
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
 */function wm(n){dp(qt),xt(new ot("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return pm(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),je(Lo,Fo,n),je(Lo,Fo,"esm2017")}Re.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Re.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};wm();function Dr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function uc(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Em=uc,dc=new An("auth","Firebase",uc());/**
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
 */const Ei=new Ys("@firebase/auth");function Im(n,...e){Ei.logLevel<=O.WARN&&Ei.warn(`Auth (${qt}): ${n}`,...e)}function Xn(n,...e){Ei.logLevel<=O.ERROR&&Ei.error(`Auth (${qt}): ${n}`,...e)}/**
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
 */function me(n,...e){throw xr(n,...e)}function Ee(n,...e){return xr(n,...e)}function Cm(n,e,t){const i=Object.assign(Object.assign({},Em()),{[e]:t});return new An("auth","Firebase",i).create(e,{appName:n.name})}function xr(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return dc.create(n,...e)}function C(n,e,...t){if(!n)throw xr(e,...t)}function ke(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Xn(e),new Error(e)}function Ne(n,e){n||ke(e)}/**
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
 */function js(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function bm(){return _a()==="http:"||_a()==="https:"}function _a(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Tm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(bm()||Vh()||"connection"in navigator)?navigator.onLine:!0}function Sm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Mn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ne(t>e,"Short delay should be less than long delay!"),this.isMobile=Ks()||Wa()}get(){return Tm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mr(n,e){Ne(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class hc{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const km={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Am=new Mn(3e4,6e4);function Yt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Qt(n,e,t,i,s={}){return fc(n,s,async()=>{let r={},a={};i&&(e==="GET"?a=i:r={body:JSON.stringify(i)});const u=jt(Object.assign({key:n.config.apiKey},a)).slice(1),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/json",n.languageCode&&(d["X-Firebase-Locale"]=n.languageCode),hc.fetch()(pc(n,n.config.apiHost,t,u),Object.assign({method:e,headers:d,referrerPolicy:"no-referrer"},r))})}async function fc(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},km),e);try{const s=new Rm(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Jn(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const u=r.ok?a.errorMessage:a.error.message,[d,h]=u.split(" : ");if(d==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jn(n,"credential-already-in-use",a);if(d==="EMAIL_EXISTS")throw Jn(n,"email-already-in-use",a);if(d==="USER_DISABLED")throw Jn(n,"user-disabled",a);const p=i[d]||d.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Cm(n,p,h);me(n,p)}}catch(s){if(s instanceof Qe)throw s;me(n,"network-request-failed",{message:String(s)})}}async function Ln(n,e,t,i,s={}){const r=await Qt(n,e,t,i,s);return"mfaPendingCredential"in r&&me(n,"multi-factor-auth-required",{_serverResponse:r}),r}function pc(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?Mr(n.config,s):`${n.config.apiScheme}://${s}`}class Rm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Ee(this.auth,"network-request-failed")),Am.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Ee(n,e,i);return s.customData._tokenResponse=t,s}/**
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
 */async function Pm(n,e){return Qt(n,"POST","/v1/accounts:delete",e)}async function Nm(n,e){return Qt(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function gn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Om(n,e=!1){const t=K(n),i=await t.getIdToken(e),s=Lr(i);C(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:gn(vs(s.auth_time)),issuedAtTime:gn(vs(s.iat)),expirationTime:gn(vs(s.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function vs(n){return Number(n)*1e3}function Lr(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Xn("JWT malformed, contained fewer than 3 sections"),null;try{const s=ii(t);return s?JSON.parse(s):(Xn("Failed to decode base64 JWT payload"),null)}catch(s){return Xn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dm(n){const e=Lr(n);return C(e,"internal-error"),C(typeof e.exp<"u","internal-error"),C(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function $t(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Qe&&xm(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function xm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class Mm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=gn(this.lastLoginAt),this.creationTime=gn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ii(n){var e;const t=n.auth,i=await n.getIdToken(),s=await $t(n,Nm(t,{idToken:i}));C(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Bm(r.providerUserInfo):[],u=Fm(n.providerData,a),d=n.isAnonymous,h=!(n.email&&r.passwordHash)&&!(u!=null&&u.length),p=d?h:!1,g={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:u,metadata:new gc(r.createdAt,r.lastLoginAt),isAnonymous:p};Object.assign(n,g)}async function Lm(n){const e=K(n);await Ii(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Fm(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function Bm(n){return n.map(e=>{var{providerId:t}=e,i=Dr(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function Um(n,e){const t=await fc(n,{},async()=>{const i=jt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,a=pc(n,s,"/v1/token",`key=${r}`),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",hc.fetch()(a,{method:"POST",headers:u,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class Tn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){C(e.idToken,"internal-error"),C(typeof e.idToken<"u","internal-error"),C(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return C(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await Um(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,a=new Tn;return i&&(C(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),s&&(C(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),r&&(C(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Tn,this.toJSON())}_performRefresh(){return ke("not implemented")}}/**
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
 */function Le(n,e){C(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class rt{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=Dr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Mm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new gc(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await $t(this,this.stsTokenManager.getToken(this.auth,e));return C(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Om(this,e)}reload(){return Lm(this)}_assign(e){this!==e&&(C(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new rt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){C(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Ii(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $t(this,Pm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,a,u,d,h,p;const g=(i=t.displayName)!==null&&i!==void 0?i:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,v=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,w=(a=t.photoURL)!==null&&a!==void 0?a:void 0,A=(u=t.tenantId)!==null&&u!==void 0?u:void 0,F=(d=t._redirectEventId)!==null&&d!==void 0?d:void 0,X=(h=t.createdAt)!==null&&h!==void 0?h:void 0,he=(p=t.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:B,emailVerified:ye,isAnonymous:Y,providerData:R,stsTokenManager:Oe}=t;C(B&&Oe,e,"internal-error");const Vi=Tn.fromJSON(this.name,Oe);C(typeof B=="string",e,"internal-error"),Le(g,e.name),Le(_,e.name),C(typeof ye=="boolean",e,"internal-error"),C(typeof Y=="boolean",e,"internal-error"),Le(v,e.name),Le(w,e.name),Le(A,e.name),Le(F,e.name),Le(X,e.name),Le(he,e.name);const gt=new rt({uid:B,auth:e,email:_,emailVerified:ye,displayName:g,isAnonymous:Y,photoURL:w,phoneNumber:v,tenantId:A,stsTokenManager:Vi,createdAt:X,lastLoginAt:he});return R&&Array.isArray(R)&&(gt.providerData=R.map(_t=>Object.assign({},_t))),F&&(gt._redirectEventId=F),gt}static async _fromIdTokenResponse(e,t,i=!1){const s=new Tn;s.updateFromServerResponse(t);const r=new rt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Ii(r),r}}/**
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
 */const ma=new Map;function Ae(n){Ne(n instanceof Function,"Expected a class definition");let e=ma.get(n);return e?(Ne(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,ma.set(n,e),e)}/**
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
 */class _c{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_c.type="NONE";const ya=_c;/**
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
 */function Zn(n,e,t){return`firebase:${n}:${e}:${t}`}class Nt{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Zn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Zn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new Nt(Ae(ya),e,i);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=s[0]||Ae(ya);const a=Zn(i,e.config.apiKey,e.name);let u=null;for(const h of t)try{const p=await h._get(a);if(p){const g=rt._fromJSON(e,p);h!==r&&(u=g),r=h;break}}catch{}const d=s.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!d.length?new Nt(r,e,i):(r=d[0],u&&await r._set(a,u.toJSON()),await Promise.all(t.map(async h=>{if(h!==r)try{await h._remove(a)}catch{}})),new Nt(r,e,i))}}/**
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
 */function va(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(mc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ec(e))return"Blackberry";if(Ic(e))return"Webos";if(Fr(e))return"Safari";if((e.includes("chrome/")||yc(e))&&!e.includes("edge/"))return"Chrome";if(wc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function mc(n=J()){return/firefox\//i.test(n)}function Fr(n=J()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yc(n=J()){return/crios\//i.test(n)}function vc(n=J()){return/iemobile/i.test(n)}function wc(n=J()){return/android/i.test(n)}function Ec(n=J()){return/blackberry/i.test(n)}function Ic(n=J()){return/webos/i.test(n)}function Wi(n=J()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wm(n=J()){var e;return Wi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Hm(){return jh()&&document.documentMode===10}function Cc(n=J()){return Wi(n)||wc(n)||Ic(n)||Ec(n)||/windows phone/i.test(n)||vc(n)}function $m(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function bc(n,e=[]){let t;switch(n){case"Browser":t=va(J());break;case"Worker":t=`${va(J())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${qt}/${i}`}async function Tc(n,e){return Qt(n,"GET","/v2/recaptchaConfig",Yt(n,e))}function wa(n){return n!==void 0&&n.enterprise!==void 0}class Sc{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(t=>t.provider==="EMAIL_PASSWORD_PROVIDER"&&t.enforcementState!=="OFF")}}/**
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
 */function Vm(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function kc(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=Ee("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",Vm().appendChild(i)})}function jm(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const qm="https://www.google.com/recaptcha/enterprise.js?render=",zm="recaptcha-enterprise",Gm="NO_RECAPTCHA";class Ac{constructor(e){this.type=zm,this.auth=Jt(e)}async verify(e="verify",t=!1){async function i(r){if(!t){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(a,u)=>{Tc(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(d=>{if(d.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const h=new Sc(d);return r.tenantId==null?r._agentRecaptchaConfig=h:r._tenantRecaptchaConfigs[r.tenantId]=h,a(h.siteKey)}}).catch(d=>{u(d)})})}function s(r,a,u){const d=window.grecaptcha;wa(d)?d.enterprise.ready(()=>{d.enterprise.execute(r,{action:e}).then(h=>{a(h)}).catch(()=>{a(Gm)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,a)=>{i(this.auth).then(u=>{if(!t&&wa(window.grecaptcha))s(u,r,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}kc(qm+u).then(()=>{s(u,r,a)}).catch(d=>{a(d)})}}).catch(u=>{a(u)})})}}async function Ci(n,e,t,i=!1){const s=new Ac(n);let r;try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const a=Object.assign({},e);return i?Object.assign(a,{captchaResp:r}):Object.assign(a,{captchaResponse:r}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}/**
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
 */class Km{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((a,u)=>{try{const d=e(r);a(d)}catch(d){u(d)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */class Ym{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ea(this),this.idTokenSubscription=new Ea(this),this.beforeStateQueue=new Km(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ae(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await Nt.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,u=s==null?void 0:s._redirectEventId,d=await this.tryRedirectSignIn(e);(!a||a===u)&&(d!=null&&d.user)&&(s=d.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return C(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ii(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Sm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?K(e):null;return t&&C(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&C(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(e))})}async initializeRecaptchaConfig(){const e=await Tc(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),t=new Sc(e);this.tenantId==null?this._agentRecaptchaConfig=t:this._tenantRecaptchaConfigs[this.tenantId]=t,t.emailPasswordEnabled&&new Ac(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new An("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ae(e)||this._popupRedirectResolver;C(t,this,"argument-error"),this.redirectPersistenceManager=await Nt.create(this,[Ae(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return C(a,this,"internal-error"),a.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,i,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return C(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bc(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Im(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Jt(n){return K(n)}class Ea{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zh(t=>this.observer=t)}get next(){return C(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function Qm(n,e){const t=Js(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(ri(r,e??{}))return s;me(s,"already-initialized")}return t.initialize({options:e})}function Jm(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ae);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Xm(n,e,t){const i=Jt(n);C(i._canInitEmulator,i,"emulator-config-failed"),C(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Rc(e),{host:a,port:u}=Zm(e),d=u===null?"":`:${u}`;i.config.emulator={url:`${r}//${a}${d}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:u,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ey()}function Rc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zm(n){const e=Rc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:Ia(i.substr(r.length+1))}}else{const[r,a]=i.split(":");return{host:r,port:Ia(a)}}}function Ia(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ey(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Br{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ke("not implemented")}_getIdTokenResponse(e){return ke("not implemented")}_linkToIdToken(e,t){return ke("not implemented")}_getReauthenticationResolver(e){return ke("not implemented")}}async function Pc(n,e){return Qt(n,"POST","/v1/accounts:update",e)}/**
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
 */async function ws(n,e){return Ln(n,"POST","/v1/accounts:signInWithPassword",Yt(n,e))}/**
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
 */async function ty(n,e){return Ln(n,"POST","/v1/accounts:signInWithEmailLink",Yt(n,e))}async function ny(n,e){return Ln(n,"POST","/v1/accounts:signInWithEmailLink",Yt(n,e))}/**
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
 */class Sn extends Br{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Sn(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Sn(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){var t;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((t=e._getRecaptchaConfig())===null||t===void 0)&&t.emailPasswordEnabled){const s=await Ci(e,i,"signInWithPassword");return ws(e,s)}else return ws(e,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await Ci(e,i,"signInWithPassword");return ws(e,r)}else return Promise.reject(s)});case"emailLink":return ty(e,{email:this._email,oobCode:this._password});default:me(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Pc(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ny(e,{idToken:t,email:this._email,oobCode:this._password});default:me(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ot(n,e){return Ln(n,"POST","/v1/accounts:signInWithIdp",Yt(n,e))}/**
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
 */const iy="http://localhost";class dt extends Br{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new dt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):me("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=Dr(t,["providerId","signInMethod"]);if(!i||!s)return null;const a=new dt(i,s);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Ot(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ot(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ot(e,t)}buildRequest(){const e={requestUri:iy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=jt(t)}return e}}/**
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
 */function sy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ry(n){const e=cn(un(n)).link,t=e?cn(un(e)).deep_link_id:null,i=cn(un(n)).deep_link_id;return(i?cn(un(i)).link:null)||i||t||e||n}class Ur{constructor(e){var t,i,s,r,a,u;const d=cn(un(e)),h=(t=d.apiKey)!==null&&t!==void 0?t:null,p=(i=d.oobCode)!==null&&i!==void 0?i:null,g=sy((s=d.mode)!==null&&s!==void 0?s:null);C(h&&p&&g,"argument-error"),this.apiKey=h,this.operation=g,this.code=p,this.continueUrl=(r=d.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(a=d.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(u=d.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const t=ry(e);try{return new Ur(t)}catch{return null}}}/**
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
 */class Xt{constructor(){this.providerId=Xt.PROVIDER_ID}static credential(e,t){return Sn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Ur.parseLink(t);return C(i,"argument-error"),Sn._fromEmailAndCode(e,i.code,i.tenantId)}}Xt.PROVIDER_ID="password";Xt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Nc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fn extends Nc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fe extends Fn{constructor(){super("facebook.com")}static credential(e){return dt._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fe.credential(e.oauthAccessToken)}catch{return null}}}Fe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fe.PROVIDER_ID="facebook.com";/**
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
 */class Be extends Fn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dt._fromParams({providerId:Be.PROVIDER_ID,signInMethod:Be.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Be.credentialFromTaggedObject(e)}static credentialFromError(e){return Be.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Be.credential(t,i)}catch{return null}}}Be.GOOGLE_SIGN_IN_METHOD="google.com";Be.PROVIDER_ID="google.com";/**
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
 */class Ue extends Fn{constructor(){super("github.com")}static credential(e){return dt._fromParams({providerId:Ue.PROVIDER_ID,signInMethod:Ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ue.credentialFromTaggedObject(e)}static credentialFromError(e){return Ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ue.credential(e.oauthAccessToken)}catch{return null}}}Ue.GITHUB_SIGN_IN_METHOD="github.com";Ue.PROVIDER_ID="github.com";/**
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
 */class We extends Fn{constructor(){super("twitter.com")}static credential(e,t){return dt._fromParams({providerId:We.PROVIDER_ID,signInMethod:We.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return We.credentialFromTaggedObject(e)}static credentialFromError(e){return We.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return We.credential(t,i)}catch{return null}}}We.TWITTER_SIGN_IN_METHOD="twitter.com";We.PROVIDER_ID="twitter.com";/**
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
 */async function Es(n,e){return Ln(n,"POST","/v1/accounts:signUp",Yt(n,e))}/**
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
 */class ht{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await rt._fromIdTokenResponse(e,i,s),a=Ca(i);return new ht({user:r,providerId:a,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Ca(i);return new ht({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Ca(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class bi extends Qe{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,bi.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new bi(e,t,i,s)}}function Oc(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?bi._fromErrorAndOperation(n,r,e,i):r})}async function oy(n,e,t=!1){const i=await $t(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ht._forOperation(n,"link",i)}/**
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
 */async function ay(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await $t(n,Oc(i,s,e,n),t);C(r.idToken,i,"internal-error");const a=Lr(r.idToken);C(a,i,"internal-error");const{sub:u}=a;return C(n.uid===u,i,"user-mismatch"),ht._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&me(i,"user-mismatch"),r}}/**
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
 */async function Dc(n,e,t=!1){const i="signIn",s=await Oc(n,i,e),r=await ht._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function ly(n,e){return Dc(Jt(n),e)}async function Mv(n,e,t){var i;const s=Jt(n),r={returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"};let a;if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const h=await Ci(s,r,"signUpPassword");a=Es(s,h)}else a=Es(s,r).catch(async h=>{if(h.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const p=await Ci(s,r,"signUpPassword");return Es(s,p)}else return Promise.reject(h)});const u=await a.catch(h=>Promise.reject(h)),d=await ht._fromIdTokenResponse(s,"signIn",u);return await s._updateCurrentUser(d.user),d}function Lv(n,e,t){return ly(K(n),Xt.credential(e,t))}function Fv(n,e){return cy(K(n),null,e)}async function cy(n,e,t){const{auth:i}=n,r={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(r.email=e),t&&(r.password=t);const a=await $t(n,Pc(i,r));await n._updateTokensIfNecessary(a,!0)}function uy(n,e,t,i){return K(n).onIdTokenChanged(e,t,i)}function dy(n,e,t){return K(n).beforeAuthStateChanged(e,t)}function hy(n,e,t,i){return K(n).onAuthStateChanged(e,t,i)}function fy(n){return K(n).signOut()}const Ti="__sak";/**
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
 */class xc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ti,"1"),this.storage.removeItem(Ti),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function py(){const n=J();return Fr(n)||Wi(n)}const gy=1e3,_y=10;class Mc extends xc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=py()&&$m(),this.fallbackToPolling=Cc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,u,d)=>{this.notifyListeners(a,d)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const a=this.storage.getItem(i);!t&&this.localCache[i]===a||this.notifyListeners(i,a)},r=this.storage.getItem(i);Hm()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,_y):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},gy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Mc.type="LOCAL";const my=Mc;/**
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
 */class Lc extends xc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Lc.type="SESSION";const Fc=Lc;/**
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
 */function yy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Hi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Hi(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const u=Array.from(a).map(async h=>h(t.origin,r)),d=await yy(u);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:d})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hi.receivers=[];/**
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
 */function Wr(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class vy{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,a;return new Promise((u,d)=>{const h=Wr("",20);s.port1.start();const p=setTimeout(()=>{d(new Error("unsupported_event"))},i);a={messageChannel:s,onMessage(g){const _=g;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(p),r=setTimeout(()=>{d(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),u(_.data.response);break;default:clearTimeout(p),clearTimeout(r),d(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Ie(){return window}function wy(n){Ie().location.href=n}/**
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
 */function Bc(){return typeof Ie().WorkerGlobalScope<"u"&&typeof Ie().importScripts=="function"}async function Ey(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Iy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Cy(){return Bc()?self:null}/**
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
 */const Uc="firebaseLocalStorageDb",by=1,Si="firebaseLocalStorage",Wc="fbase_key";class Bn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function $i(n,e){return n.transaction([Si],e?"readwrite":"readonly").objectStore(Si)}function Ty(){const n=indexedDB.deleteDatabase(Uc);return new Bn(n).toPromise()}function qs(){const n=indexedDB.open(Uc,by);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Si,{keyPath:Wc})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Si)?e(i):(i.close(),await Ty(),e(await qs()))})})}async function ba(n,e,t){const i=$i(n,!0).put({[Wc]:e,value:t});return new Bn(i).toPromise()}async function Sy(n,e){const t=$i(n,!1).get(e),i=await new Bn(t).toPromise();return i===void 0?null:i.value}function Ta(n,e){const t=$i(n,!0).delete(e);return new Bn(t).toPromise()}const ky=800,Ay=3;class Hc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await qs(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Ay)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hi._getInstance(Cy()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ey(),!this.activeServiceWorker)return;this.sender=new vy(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Iy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qs();return await ba(e,Ti,"1"),await Ta(e,Ti),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>ba(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Sy(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ta(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=$i(s,!1).getAll();return new Bn(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ky)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Hc.type="LOCAL";const Ry=Hc;new Mn(3e4,6e4);/**
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
 */function Py(n,e){return e?Ae(e):(C(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Hr extends Br{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ot(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ot(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ot(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ny(n){return Dc(n.auth,new Hr(n),n.bypassAuthState)}function Oy(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),ay(t,new Hr(n),n.bypassAuthState)}async function Dy(n){const{auth:e,user:t}=n;return C(t,e,"internal-error"),oy(t,new Hr(n),n.bypassAuthState)}/**
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
 */class $c{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:a,type:u}=e;if(a){this.reject(a);return}const d={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(d))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ny;case"linkViaPopup":case"linkViaRedirect":return Dy;case"reauthViaPopup":case"reauthViaRedirect":return Oy;default:me(this.auth,"internal-error")}}resolve(e){Ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const xy=new Mn(2e3,1e4);class kt extends $c{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,kt.currentPopupAction&&kt.currentPopupAction.cancel(),kt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return C(e,this.auth,"internal-error"),e}async onExecution(){Ne(this.filter.length===1,"Popup operations only handle one event");const e=Wr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ee(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ee(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ee(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xy.get())};e()}}kt.currentPopupAction=null;/**
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
 */const My="pendingRedirect",ei=new Map;class Ly extends $c{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=ei.get(this.auth._key());if(!e){try{const i=await Fy(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}ei.set(this.auth._key(),e)}return this.bypassAuthState||ei.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fy(n,e){const t=Wy(e),i=Uy(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function By(n,e){ei.set(n._key(),e)}function Uy(n){return Ae(n._redirectPersistence)}function Wy(n){return Zn(My,n.config.apiKey,n.name)}async function Hy(n,e,t=!1){const i=Jt(n),s=Py(i,e),a=await new Ly(i,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}/**
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
 */const $y=10*60*1e3;class Vy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Vc(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Ee(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=$y&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sa(e))}saveEventToCache(e){this.cachedEventUids.add(Sa(e)),this.lastProcessedEventTime=Date.now()}}function Sa(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vc({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vc(n);default:return!1}}/**
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
 */async function qy(n,e={}){return Qt(n,"GET","/v1/projects",e)}/**
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
 */const zy=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Gy=/^https?/;async function Ky(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qy(n);for(const t of e)try{if(Yy(t))return}catch{}me(n,"unauthorized-domain")}function Yy(n){const e=js(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===i}if(!Gy.test(t))return!1;if(zy.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
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
 */const Qy=new Mn(3e4,6e4);function ka(){const n=Ie().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jy(n){return new Promise((e,t)=>{var i,s,r;function a(){ka(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ka(),t(Ee(n,"network-request-failed"))},timeout:Qy.get()})}if(!((s=(i=Ie().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Ie().gapi)===null||r===void 0)&&r.load)a();else{const u=jm("iframefcb");return Ie()[u]=()=>{gapi.load?a():t(Ee(n,"network-request-failed"))},kc(`https://apis.google.com/js/api.js?onload=${u}`).catch(d=>t(d))}}).catch(e=>{throw ti=null,e})}let ti=null;function Xy(n){return ti=ti||Jy(n),ti}/**
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
 */const Zy=new Mn(5e3,15e3),ev="__/auth/iframe",tv="emulator/auth/iframe",nv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sv(n){const e=n.config;C(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Mr(e,tv):`https://${n.config.authDomain}/${ev}`,i={apiKey:e.apiKey,appName:n.name,v:qt},s=iv.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${jt(i).slice(1)}`}async function rv(n){const e=await Xy(n),t=Ie().gapi;return C(t,n,"internal-error"),e.open({where:document.body,url:sv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nv,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const a=Ee(n,"network-request-failed"),u=Ie().setTimeout(()=>{r(a)},Zy.get());function d(){Ie().clearTimeout(u),s(i)}i.ping(d).then(d,()=>{r(a)})}))}/**
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
 */const ov={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},av=500,lv=600,cv="_blank",uv="http://localhost";class Aa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dv(n,e,t,i=av,s=lv){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let u="";const d=Object.assign(Object.assign({},ov),{width:i.toString(),height:s.toString(),top:r,left:a}),h=J().toLowerCase();t&&(u=yc(h)?cv:t),mc(h)&&(e=e||uv,d.scrollbars="yes");const p=Object.entries(d).reduce((_,[v,w])=>`${_}${v}=${w},`,"");if(Wm(h)&&u!=="_self")return hv(e||"",u),new Aa(null);const g=window.open(e||"",u,p);C(g,n,"popup-blocked");try{g.focus()}catch{}return new Aa(g)}function hv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
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
 */const fv="__/auth/handler",pv="emulator/auth/handler",gv=encodeURIComponent("fac");async function Ra(n,e,t,i,s,r){C(n.config.authDomain,n,"auth-domain-config-required"),C(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:qt,eventId:s};if(e instanceof Nc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",bs(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries(r||{}))a[p]=g}if(e instanceof Fn){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(a.scopes=p.join(","))}n.tenantId&&(a.tid=n.tenantId);const u=a;for(const p of Object.keys(u))u[p]===void 0&&delete u[p];const d=await n._getAppCheckToken(),h=d?`#${gv}=${encodeURIComponent(d)}`:"";return`${_v(n)}?${jt(u).slice(1)}${h}`}function _v({config:n}){return n.emulator?Mr(n,pv):`https://${n.authDomain}/${fv}`}/**
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
 */const Is="webStorageSupport";class mv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Fc,this._completeRedirectFn=Hy,this._overrideRedirectResult=By}async _openPopup(e,t,i,s){var r;Ne((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=await Ra(e,t,i,js(),s);return dv(e,a,Wr())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Ra(e,t,i,js(),s);return wy(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(Ne(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await rv(e),i=new Vy(e);return t.register("authEvent",s=>(C(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Is,{type:Is},s=>{var r;const a=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Is];a!==void 0&&t(!!a),me(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ky(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cc()||Fr()||Wi()}}const yv=mv;var Pa="@firebase/auth",Na="0.23.1";/**
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
 */class vv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){C(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ev(n){xt(new ot("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:a,authDomain:u}=i.options;C(a&&!a.includes(":"),"invalid-api-key",{appName:i.name}),C(!(u!=null&&u.includes(":")),"argument-error",{appName:i.name});const d={apiKey:a,authDomain:u,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bc(n)},h=new Ym(i,s,r,d);return Jm(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),xt(new ot("auth-internal",e=>{const t=Jt(e.getProvider("auth").getImmediate());return(i=>new vv(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),je(Pa,Na,wv(n)),je(Pa,Na,"esm2017")}/**
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
 */const Iv=5*60,Cv=Ua("authIdTokenMaxAge")||Iv;let Oa=null;const bv=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Cv)return;const s=t==null?void 0:t.token;Oa!==s&&(Oa=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Tv(n=za()){const e=Js(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Qm(n,{popupRedirectResolver:yv,persistence:[Ry,my,Fc]}),i=Ua("authTokenSyncURL");if(i){const r=bv(i);dy(t,r,()=>r(t.currentUser)),uy(t,a=>r(a))}const s=Ba("auth");return s&&Xm(t,`http://${s}`),t}Ev("Browser");const{VITE_API_KEY:Sv,VITE_AUTH_DOMAIN:kv,VITE_URL:Av,VITE_SENDERID:Rv,VITE_APPID:Pv,VITE_MEASUREMENTID:Nv}={VITE_API_KEY:"AIzaSyCFUHSJz2uLKyLoro6hV10QUzYmoo3UMb0",VITE_AUTH_DOMAIN:"easymakeeasyb.firebaseapp.com",VITE_URL:"https://easymakeeasyb-default-rtdb.firebaseio.com",VITE_SENDERID:"271184286286",VITE_APPID:"1:271184286286:web:321404cd2c69663b1f691f",VITE_MEASUREMENTID:"DZPMFGCKZB",VITE_ADMIN_UID:"4mSSnZwpHRTkyS4ixtLDXvtReaA2",BASE_URL:"/finalEasyBuyEasyMake/",MODE:"production",DEV:!1,PROD:!0},Ov={apiKey:Sv,authDomain:kv,databaseURL:Av,projectId:"easymakeeasyb",storageBucket:"easymakeeasyb.appspot.com",messagingSenderId:Rv,appId:Pv,measurementId:Nv},jc=qa(Ov),se=ym(jc),Da=Tv(jc),Bv=Ph("cart",{state:()=>({loadingItem:!1,cart:{},cartItems:[],coupons:[],orders:[],myOrder:{},nickName:"",admin:"",user:{},uid:null,visitorId:null}),actions:{getCart(){const n=this.uid?this.uid:this.visitorId,e=ie(se,`carts/${n}`);Qn(e,t=>{this.cart=t.val(),this.cart?this.cartItems=this.cart.items:this.cart||(this.cartItems=[])})},addCart(n,e=1){this.loadingItem=!0;const t=this.uid?this.uid:this.visitorId,i={items:[],coupon:{},deliveryCharge:60,total:0,finalTotal:60},s={product:n,qty:e,total:n.price*e};if(this.cartItems.length)this.cartItems.length!==0&&(JSON.stringify(this.cartItems).indexOf(s.product.id)!==-1?this.cartItems.forEach((r,a)=>{r.product.id===n.id&&(this.cartItems[a].qty+=e,this.cartItems[a].total=n.price*this.cartItems[a].qty)}):JSON.stringify(this.cartItems).indexOf(s.product.id)===-1&&this.cartItems.push(s),i.items=this.cartItems,this.cartItems.forEach(r=>{i.total+=r.total,i.finalTotal+=r.total}),et(ie(se),{[`carts/${t}/`]:{items:i.items,coupon:i.coupon,deliveryCharge:i.deliveryCharge,total:i.total,finalTotal:i.finalTotal}}));else{i.items.push(s),i.total+=s.total,i.finalTotal+=s.total;const r=ie(se,`carts/${t}`);wi(r,{items:i.items,coupon:i.coupon,deliveryCharge:i.deliveryCharge,total:i.total,finalTotal:i.finalTotal})}this.toastMessage("加入購物車"),this.loadingItem=!1},updateCartNum(n,e,t){this.loadingItem=!0;const i=this.uid?this.uid:this.visitorId;n==="add"?t+=1:n==="reduce"&&(t-=1);const s={items:[],coupon:{},deliveryCharge:60,total:0,finalTotal:60};this.cartItems.forEach((r,a)=>{r.product.id===e.id&&(this.cartItems[a].qty=t,this.cartItems[a].total=e.price*this.cartItems[a].qty,s.items=this.cartItems)}),s.items.forEach(r=>{s.total+=r.total,s.finalTotal+=r.total}),et(ie(se),{[`carts/${i}/`]:{items:s.items,coupon:s.coupon,deliveryCharge:s.deliveryCharge,total:s.total,finalTotal:s.finalTotal}}),this.toastMessage("購物車更新成功"),this.loadingItem=!1},changeCartNum(n,e,t){this.loadingItem=!0;const i=this.uid?this.uid:this.visitorId;Number(t.target.value)===0&&(e=1);const s=t.target.value.replace(/^0+/,"");t.target.value=s;const r={items:[],coupon:{},deliveryCharge:60,total:0,finalTotal:60};this.cartItems.forEach((a,u)=>{a.product.id===n.id&&(this.cartItems[u].qty=e,this.cartItems[u].total=n.price*this.cartItems[u].qty,r.items=this.cartItems)}),r.items.forEach(a=>{r.total+=a.total,r.finalTotal+=a.total}),et(ie(se),{[`carts/${i}/`]:{items:r.items,coupon:r.coupon,deliveryCharge:r.deliveryCharge,total:r.total,finalTotal:r.finalTotal}}),this.toastMessage("購物車更新成功"),this.loadingItem=!1},handleKeyDown(n){(n.key==="e"||n.key==="-"||n.key===".")&&n.preventDefault()},deleteCart(n){this.loadingItem=!0;const e=this.uid?this.uid:this.visitorId;if(this.cartItems.length===1){this.deleteAllCarts();return}const t={items:[],coupon:{},deliveryCharge:60,total:0,finalTotal:60};this.cartItems.forEach((i,s)=>{i.product.id===n.id&&(this.cartItems.splice(s,1),t.items=this.cartItems)}),t.items.forEach(i=>{t.total+=i.total,t.finalTotal+=i.total}),et(ie(se),{[`carts/${e}/`]:{items:t.items,coupon:t.coupon,deliveryCharge:t.deliveryCharge,total:t.total,finalTotal:t.finalTotal}}),this.toastMessage("購物車刪除成功"),this.loadingItem=!1},deleteAllCarts(){this.loadingItem=!0;const n=this.uid?this.uid:this.visitorId;cm(ie(se,`carts/${n}`)),this.cart={},this.cartItems=[],this.loadingItem=!1},useCoupon(n){this.loadingItem=!0;const e=this.uid?this.uid:this.visitorId,t={items:this.cartItems,coupon:n,deliveryCharge:60,total:this.cart.total,finalTotal:this.cart.finalTotal-Math.ceil(this.cart.total*(n.discount/100))};et(ie(se),{[`carts/${e}/`]:{items:t.items,coupon:t.coupon,deliveryCharge:t.deliveryCharge,total:t.total,finalTotal:t.finalTotal}}),this.loadingItem=!1},reUseCoupon(){this.loadingItem=!0;const n=this.uid?this.uid:this.visitorId,e={items:this.cartItems,coupon:{},deliveryCharge:60,total:this.cart.total,finalTotal:this.cart.total+60};et(ie(se),{[`carts/${n}/`]:{items:e.items,coupon:e.coupon,deliveryCharge:e.deliveryCharge,total:e.total,finalTotal:e.finalTotal}}),this.toastMessage("取消優惠券"),this.loadingItem=!1},getCoupons(){return new Promise((n,e)=>{const t=ie(se,"coupons/");Qn(t,i=>{const s=i.val();Object.keys(s).forEach(r=>{s[r].id=r}),n(s)},{onlyOnce:!0})})},getOrder(n){const e=ie(se,`orders/${n}`);Qn(e,t=>{this.orders=t.val(),this.orders&&(this.orders=Object.entries(this.orders).map(i=>(i[1].id=i[0],i[1])),this.myOrder=this.orders[this.orders.length-1])})},addOrder(n,e,t,i,s){this.loadingItem=!0;const r=this.uid?this.uid:this.visitorId;this.cart.total>=1e3&&(this.cart.finalTotal-=this.cart.deliveryCharge,this.cart.deliveryCharge=0),this.myOrder={creatAt:new Date().getTime(),cart:this.cart,paymentStatus:!1,payDate:"",deliveryStatus:"待出貨",email:n,name:e,phoneNum:t,address:i,message:s};const a=ie(se,`orders/${r}`),u=lm(a);if(wi(u,this.myOrder),this.uid){let d=0;this.cart.total>=2e3&&this.cart.total<5e3?d=1:this.cart.total>=5e3&&this.cart.total<1e4?d=3:this.cart.total>=1e4&&(d=7),et(ie(se),{[`users/${this.uid}/lotteryTicket/`]:this.user.lotteryTicket+d}),d?this.toastMessage(`恭喜您獲得${d}張抽獎券！`):d||this.toastMessage("恭喜您! 訂單建立完成")}else this.uid||this.toastMessage("恭喜您! 訂單建立完成");this.deleteAllCarts(),ko.push("/orderSuccess")},checkLogin(){hy(Da,n=>{if(n){this.visitorId=null,this.uid=n.uid;const e=ie(se,"users/"+n.uid);Qn(e,t=>{this.user=t.val(),this.getCart()})}else this.uid=null,this.visitorId=new Date().getTime(),this.user={},this.getCart()})},logout(){fy(Da).then(()=>{this.uid="",this.user={},Gn.fire({icon:"success",title:"已登出",showConfirmButton:!1,timer:1500}),window.location.href.includes("/home")?location.reload():ko.push("/home")}).catch(n=>{console.log(n,"登出錯誤")})},toastMessage(n,e="success"){Gn.mixin({toast:!0,showConfirmButton:!1,timer:1e3,didOpen:i=>{i.addEventListener("mouseenter",Gn.stopTimer),i.addEventListener("mouseleave",Gn.resumeTimer)}}).fire({icon:e,title:n})},goToTop(){window.scrollTo(0,0)}},getters:{cartNum(n){return n.cartItems.reduce((e,t)=>e+t.qty,0)}}});export{Da as a,Qn as b,Bv as c,se as d,cm as e,Fv as f,Lv as g,xv as h,Mv as i,hy as o,lm as p,ie as r,wi as s,et as u};
