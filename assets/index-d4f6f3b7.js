import{G as Je,ar as ke,$ as ue,H as Rt,P as Z,aY as et,ap as Le,X as le,V as tt,aM as Pt,I as bt,af as St,a2 as nt,aO as wt,i as N,aF as At,aR as re,w as rt,M as ot,al as Ee}from"./_plugin-vue_export-helper-68081c38.js";var Ot=!1;/*!
  * pinia v2.0.33
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */let st;const he=e=>st=e,ct=Symbol();function Se(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var oe;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(oe||(oe={}));function qn(){const e=Je(!0),t=e.run(()=>ke({}));let n=[],r=[];const o=ue({install(c){he(o),o._a=c,c.provide(ct,o),c.config.globalProperties.$pinia=o,r.forEach(h=>n.push(h)),r=[]},use(c){return!this._a&&!Ot?r.push(c):n.push(c),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return o}const it=()=>{};function De(e,t,n,r=it){e.push(t);const o=()=>{const c=e.indexOf(t);c>-1&&(e.splice(c,1),r())};return!n&&bt()&&St(o),o}function W(e,...t){e.slice().forEach(n=>{n(...t)})}function we(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],o=e[n];Se(o)&&Se(r)&&e.hasOwnProperty(n)&&!le(r)&&!tt(r)?e[n]=we(o,r):e[n]=r}return e}const Ct=Symbol();function kt(e){return!Se(e)||!e.hasOwnProperty(Ct)}const{assign:U}=Object;function Lt(e){return!!(le(e)&&e.effect)}function It(e,t,n,r){const{state:o,actions:c,getters:h}=t,p=n.state.value[e];let l;function a(){p||(n.state.value[e]=o?o():{});const s=wt(n.state.value[e]);return U(s,c,Object.keys(h||{}).reduce((u,f)=>(u[f]=ue(N(()=>{he(n);const m=n._s.get(e);return h[f].call(m,m)})),u),{}))}return l=at(e,a,t,n,r,!0),l}function at(e,t,n={},r,o,c){let h;const p=U({actions:{}},n),l={deep:!0};let a,s,u=ue([]),f=ue([]),m;const y=r.state.value[e];!c&&!y&&(r.state.value[e]={}),ke({});let C;function A(S){let w;a=s=!1,typeof S=="function"?(S(r.state.value[e]),w={type:oe.patchFunction,storeId:e,events:m}):(we(r.state.value[e],S),w={type:oe.patchObject,payload:S,storeId:e,events:m});const M=C=Symbol();nt().then(()=>{C===M&&(a=!0)}),s=!0,W(u,w,r.state.value[e])}const E=c?function(){const{state:w}=n,M=w?w():{};this.$patch(H=>{U(H,M)})}:it;function R(){h.stop(),u=[],f=[],r._s.delete(e)}function V(S,w){return function(){he(r);const M=Array.from(arguments),H=[],z=[];function Q(D){H.push(D)}function de(D){z.push(D)}W(f,{args:M,name:S,store:j,after:Q,onError:de});let q;try{q=w.apply(this&&this.$id===e?this:j,M)}catch(D){throw W(z,D),D}return q instanceof Promise?q.then(D=>(W(H,D),D)).catch(D=>(W(z,D),Promise.reject(D))):(W(H,q),q)}}const $={_p:r,$id:e,$onAction:De.bind(null,f),$patch:A,$reset:E,$subscribe(S,w={}){const M=De(u,S,w.detached,()=>H()),H=h.run(()=>et(()=>r.state.value[e],z=>{(w.flush==="sync"?s:a)&&S({storeId:e,type:oe.direct,events:m},z)},U({},l,w)));return M},$dispose:R},j=Le($);r._s.set(e,j);const T=r._e.run(()=>(h=Je(),h.run(()=>t())));for(const S in T){const w=T[S];if(le(w)&&!Lt(w)||tt(w))c||(y&&kt(w)&&(le(w)?w.value=y[S]:we(w,y[S])),r.state.value[e][S]=w);else if(typeof w=="function"){const M=V(S,w);T[S]=M,p.actions[S]=w}}return U(j,T),U(Pt(j),T),Object.defineProperty(j,"$state",{get:()=>r.state.value[e],set:S=>{A(w=>{U(w,S)})}}),r._p.forEach(S=>{U(j,h.run(()=>S({store:j,app:r._a,pinia:r,options:p})))}),y&&c&&n.hydrate&&n.hydrate(j.$state,y),a=!0,s=!0,j}function Gn(e,t,n){let r,o;const c=typeof t=="function";typeof e=="string"?(r=e,o=c?n:t):(o=e,r=e.id);function h(p,l){const a=Rt();return p=p||a&&Z(ct,null),p&&he(p),p=st,p._s.has(r)||(c?at(r,t,o,p):It(r,o,p)),p._s.get(r)}return h.$id=r,h}function jt(e,t){return Array.isArray(t)?t.reduce((n,r)=>(n[r]=function(){return e(this.$pinia)[r]},n),{}):Object.keys(t).reduce((n,r)=>(n[r]=function(){const o=e(this.$pinia),c=t[r];return typeof c=="function"?c.call(this,o):o[c]},n),{})}const zn=jt;function Kn(e,t){return Array.isArray(t)?t.reduce((n,r)=>(n[r]=function(...o){return e(this.$pinia)[r](...o)},n),{}):Object.keys(t).reduce((n,r)=>(n[r]=function(...o){return e(this.$pinia)[t[r]](...o)},n),{})}var Un=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Fn(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Qn(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){if(this instanceof r){var o=[null];o.push.apply(o,arguments);var c=Function.bind.apply(t,o);return new c}return t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var o=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,o.get?o:{enumerable:!0,get:function(){return e[r]}})}),n}const Vt="modulepreload",Tt=function(e){return"/finalEasyBuyEasyMake/"+e},xe={},k=function(t,n,r){if(!n||n.length===0)return t();const o=document.getElementsByTagName("link");return Promise.all(n.map(c=>{if(c=Tt(c),c in xe)return;xe[c]=!0;const h=c.endsWith(".css"),p=h?'[rel="stylesheet"]':"";if(!!r)for(let s=o.length-1;s>=0;s--){const u=o[s];if(u.href===c&&(!h||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${p}`))return;const a=document.createElement("link");if(a.rel=h?"stylesheet":Vt,h||(a.as="script",a.crossOrigin=""),a.href=c,document.head.appendChild(a),h)return new Promise((s,u)=>{a.addEventListener("load",s),a.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>t())};/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const X=typeof window<"u";function Dt(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const b=Object.assign;function Re(e,t){const n={};for(const r in t){const o=t[r];n[r]=B(o)?o.map(e):e(o)}return n}const se=()=>{},B=Array.isArray,xt=/\/$/,$t=e=>e.replace(xt,"");function Pe(e,t,n="/"){let r,o={},c="",h="";const p=t.indexOf("#");let l=t.indexOf("?");return p<l&&p>=0&&(l=-1),l>-1&&(r=t.slice(0,l),c=t.slice(l+1,p>-1?p:t.length),o=e(c)),p>-1&&(r=r||t.slice(0,p),h=t.slice(p,t.length)),r=Ht(r??t,n),{fullPath:r+(c&&"?")+c+h,path:r,query:o,hash:h}}function Mt(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function $e(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Nt(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&J(t.matched[r],n.matched[o])&&ut(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function J(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ut(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Bt(e[n],t[n]))return!1;return!0}function Bt(e,t){return B(e)?Me(e,t):B(t)?Me(t,e):e===t}function Me(e,t){return B(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function Ht(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let o=n.length-1,c,h;for(c=0;c<r.length;c++)if(h=r[c],h!==".")if(h==="..")o>1&&o--;else break;return n.slice(0,o).join("/")+"/"+r.slice(c-(c===r.length?1:0)).join("/")}var ie;(function(e){e.pop="pop",e.push="push"})(ie||(ie={}));var ce;(function(e){e.back="back",e.forward="forward",e.unknown=""})(ce||(ce={}));function qt(e){if(!e)if(X){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),$t(e)}const Gt=/^[^#]+#/;function zt(e,t){return e.replace(Gt,"#")+t}function Kt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const pe=()=>({left:window.pageXOffset,top:window.pageYOffset});function Ut(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=Kt(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ne(e,t){return(history.state?history.state.position-t:-1)+e}const Ae=new Map;function Ft(e,t){Ae.set(e,t)}function Qt(e){const t=Ae.get(e);return Ae.delete(e),t}let Wt=()=>location.protocol+"//"+location.host;function lt(e,t){const{pathname:n,search:r,hash:o}=t,c=e.indexOf("#");if(c>-1){let p=o.includes(e.slice(c))?e.slice(c).length:1,l=o.slice(p);return l[0]!=="/"&&(l="/"+l),$e(l,"")}return $e(n,e)+r+o}function Yt(e,t,n,r){let o=[],c=[],h=null;const p=({state:f})=>{const m=lt(e,location),y=n.value,C=t.value;let A=0;if(f){if(n.value=m,t.value=f,h&&h===y){h=null;return}A=C?f.position-C.position:0}else r(m);o.forEach(E=>{E(n.value,y,{delta:A,type:ie.pop,direction:A?A>0?ce.forward:ce.back:ce.unknown})})};function l(){h=n.value}function a(f){o.push(f);const m=()=>{const y=o.indexOf(f);y>-1&&o.splice(y,1)};return c.push(m),m}function s(){const{history:f}=window;f.state&&f.replaceState(b({},f.state,{scroll:pe()}),"")}function u(){for(const f of c)f();c=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",s)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",s),{pauseListeners:l,listen:a,destroy:u}}function Be(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?pe():null}}function Xt(e){const{history:t,location:n}=window,r={value:lt(e,n)},o={value:t.state};o.value||c(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function c(l,a,s){const u=e.indexOf("#"),f=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+l:Wt()+e+l;try{t[s?"replaceState":"pushState"](a,"",f),o.value=a}catch(m){console.error(m),n[s?"replace":"assign"](f)}}function h(l,a){const s=b({},t.state,Be(o.value.back,l,o.value.forward,!0),a,{position:o.value.position});c(l,s,!0),r.value=l}function p(l,a){const s=b({},o.value,t.state,{forward:l,scroll:pe()});c(s.current,s,!0);const u=b({},Be(r.value,l,null),{position:s.position+1},a);c(l,u,!1),r.value=l}return{location:r,state:o,push:p,replace:h}}function Zt(e){e=qt(e);const t=Xt(e),n=Yt(e,t.state,t.location,t.replace);function r(c,h=!0){h||n.pauseListeners(),history.go(c)}const o=b({location:"",base:e,go:r,createHref:zt.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function Jt(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Zt(e)}function en(e){return typeof e=="string"||e&&typeof e=="object"}function ft(e){return typeof e=="string"||typeof e=="symbol"}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ht=Symbol("");var He;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(He||(He={}));function ee(e,t){return b(new Error,{type:e,[ht]:!0},t)}function G(e,t){return e instanceof Error&&ht in e&&(t==null||!!(e.type&t))}const qe="[^/]+?",tn={sensitive:!1,strict:!1,start:!0,end:!0},nn=/[.+*?^${}()[\]/\\]/g;function rn(e,t){const n=b({},tn,t),r=[];let o=n.start?"^":"";const c=[];for(const a of e){const s=a.length?[]:[90];n.strict&&!a.length&&(o+="/");for(let u=0;u<a.length;u++){const f=a[u];let m=40+(n.sensitive?.25:0);if(f.type===0)u||(o+="/"),o+=f.value.replace(nn,"\\$&"),m+=40;else if(f.type===1){const{value:y,repeatable:C,optional:A,regexp:E}=f;c.push({name:y,repeatable:C,optional:A});const R=E||qe;if(R!==qe){m+=10;try{new RegExp(`(${R})`)}catch($){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+$.message)}}let V=C?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;u||(V=A&&a.length<2?`(?:/${V})`:"/"+V),A&&(V+="?"),o+=V,m+=20,A&&(m+=-8),C&&(m+=-20),R===".*"&&(m+=-50)}s.push(m)}r.push(s)}if(n.strict&&n.end){const a=r.length-1;r[a][r[a].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const h=new RegExp(o,n.sensitive?"":"i");function p(a){const s=a.match(h),u={};if(!s)return null;for(let f=1;f<s.length;f++){const m=s[f]||"",y=c[f-1];u[y.name]=m&&y.repeatable?m.split("/"):m}return u}function l(a){let s="",u=!1;for(const f of e){(!u||!s.endsWith("/"))&&(s+="/"),u=!1;for(const m of f)if(m.type===0)s+=m.value;else if(m.type===1){const{value:y,repeatable:C,optional:A}=m,E=y in a?a[y]:"";if(B(E)&&!C)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=B(E)?E.join("/"):E;if(!R)if(A)f.length<2&&(s.endsWith("/")?s=s.slice(0,-1):u=!0);else throw new Error(`Missing required param "${y}"`);s+=R}}return s||"/"}return{re:h,score:r,keys:c,parse:p,stringify:l}}function on(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function sn(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const c=on(r[n],o[n]);if(c)return c;n++}if(Math.abs(o.length-r.length)===1){if(Ge(r))return 1;if(Ge(o))return-1}return o.length-r.length}function Ge(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const cn={type:0,value:""},an=/[a-zA-Z0-9_]/;function un(e){if(!e)return[[]];if(e==="/")return[[cn]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${a}": ${m}`)}let n=0,r=n;const o=[];let c;function h(){c&&o.push(c),c=[]}let p=0,l,a="",s="";function u(){a&&(n===0?c.push({type:0,value:a}):n===1||n===2||n===3?(c.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${a}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:a,regexp:s,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),a="")}function f(){a+=l}for(;p<e.length;){if(l=e[p++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(a&&u(),h()):l===":"?(u(),n=1):f();break;case 4:f(),n=r;break;case 1:l==="("?n=2:an.test(l)?f():(u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&p--);break;case 2:l===")"?s[s.length-1]=="\\"?s=s.slice(0,-1)+l:n=3:s+=l;break;case 3:u(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&p--,s="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${a}"`),u(),h(),o}function ln(e,t,n){const r=rn(un(e.path),n),o=b(r,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function fn(e,t){const n=[],r=new Map;t=Ue({strict:!1,end:!0,sensitive:!1},t);function o(s){return r.get(s)}function c(s,u,f){const m=!f,y=hn(s);y.aliasOf=f&&f.record;const C=Ue(t,s),A=[y];if("alias"in s){const V=typeof s.alias=="string"?[s.alias]:s.alias;for(const $ of V)A.push(b({},y,{components:f?f.record.components:y.components,path:$,aliasOf:f?f.record:y}))}let E,R;for(const V of A){const{path:$}=V;if(u&&$[0]!=="/"){const j=u.record.path,T=j[j.length-1]==="/"?"":"/";V.path=u.record.path+($&&T+$)}if(E=ln(V,u,C),f?f.alias.push(E):(R=R||E,R!==E&&R.alias.push(E),m&&s.name&&!Ke(E)&&h(s.name)),y.children){const j=y.children;for(let T=0;T<j.length;T++)c(j[T],E,f&&f.children[T])}f=f||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&l(E)}return R?()=>{h(R)}:se}function h(s){if(ft(s)){const u=r.get(s);u&&(r.delete(s),n.splice(n.indexOf(u),1),u.children.forEach(h),u.alias.forEach(h))}else{const u=n.indexOf(s);u>-1&&(n.splice(u,1),s.record.name&&r.delete(s.record.name),s.children.forEach(h),s.alias.forEach(h))}}function p(){return n}function l(s){let u=0;for(;u<n.length&&sn(s,n[u])>=0&&(s.record.path!==n[u].record.path||!pt(s,n[u]));)u++;n.splice(u,0,s),s.record.name&&!Ke(s)&&r.set(s.record.name,s)}function a(s,u){let f,m={},y,C;if("name"in s&&s.name){if(f=r.get(s.name),!f)throw ee(1,{location:s});C=f.record.name,m=b(ze(u.params,f.keys.filter(R=>!R.optional).map(R=>R.name)),s.params&&ze(s.params,f.keys.map(R=>R.name))),y=f.stringify(m)}else if("path"in s)y=s.path,f=n.find(R=>R.re.test(y)),f&&(m=f.parse(y),C=f.record.name);else{if(f=u.name?r.get(u.name):n.find(R=>R.re.test(u.path)),!f)throw ee(1,{location:s,currentLocation:u});C=f.record.name,m=b({},u.params,s.params),y=f.stringify(m)}const A=[];let E=f;for(;E;)A.unshift(E.record),E=E.parent;return{name:C,path:y,params:m,matched:A,meta:dn(A)}}return e.forEach(s=>c(s)),{addRoute:c,resolve:a,removeRoute:h,getRoutes:p,getRecordMatcher:o}}function ze(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function hn(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:pn(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function pn(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function Ke(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function dn(e){return e.reduce((t,n)=>b(t,n.meta),{})}function Ue(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function pt(e,t){return t.children.some(n=>n===e||pt(e,n))}const dt=/#/g,mn=/&/g,gn=/\//g,vn=/=/g,yn=/\?/g,mt=/\+/g,_n=/%5B/g,En=/%5D/g,gt=/%5E/g,Rn=/%60/g,vt=/%7B/g,Pn=/%7C/g,yt=/%7D/g,bn=/%20/g;function Ie(e){return encodeURI(""+e).replace(Pn,"|").replace(_n,"[").replace(En,"]")}function Sn(e){return Ie(e).replace(vt,"{").replace(yt,"}").replace(gt,"^")}function Oe(e){return Ie(e).replace(mt,"%2B").replace(bn,"+").replace(dt,"%23").replace(mn,"%26").replace(Rn,"`").replace(vt,"{").replace(yt,"}").replace(gt,"^")}function wn(e){return Oe(e).replace(vn,"%3D")}function An(e){return Ie(e).replace(dt,"%23").replace(yn,"%3F")}function On(e){return e==null?"":An(e).replace(gn,"%2F")}function fe(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Cn(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<r.length;++o){const c=r[o].replace(mt," "),h=c.indexOf("="),p=fe(h<0?c:c.slice(0,h)),l=h<0?null:fe(c.slice(h+1));if(p in t){let a=t[p];B(a)||(a=t[p]=[a]),a.push(l)}else t[p]=l}return t}function Fe(e){let t="";for(let n in e){const r=e[n];if(n=wn(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(B(r)?r.map(c=>c&&Oe(c)):[r&&Oe(r)]).forEach(c=>{c!==void 0&&(t+=(t.length?"&":"")+n,c!=null&&(t+="="+c))})}return t}function kn(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=B(r)?r.map(o=>o==null?null:""+o):r==null?r:""+r)}return t}const Ln=Symbol(""),Qe=Symbol(""),je=Symbol(""),_t=Symbol(""),Ce=Symbol("");function ne(){let e=[];function t(r){return e.push(r),()=>{const o=e.indexOf(r);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function F(e,t,n,r,o){const c=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise((h,p)=>{const l=u=>{u===!1?p(ee(4,{from:n,to:t})):u instanceof Error?p(u):en(u)?p(ee(2,{from:t,to:u})):(c&&r.enterCallbacks[o]===c&&typeof u=="function"&&c.push(u),h())},a=e.call(r&&r.instances[o],t,n,l);let s=Promise.resolve(a);e.length<3&&(s=s.then(l)),s.catch(u=>p(u))})}function be(e,t,n,r){const o=[];for(const c of e)for(const h in c.components){let p=c.components[h];if(!(t!=="beforeRouteEnter"&&!c.instances[h]))if(In(p)){const a=(p.__vccOpts||p)[t];a&&o.push(F(a,n,r,c,h))}else{let l=p();o.push(()=>l.then(a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${h}" at "${c.path}"`));const s=Dt(a)?a.default:a;c.components[h]=s;const f=(s.__vccOpts||s)[t];return f&&F(f,n,r,c,h)()}))}}return o}function In(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function We(e){const t=Z(je),n=Z(_t),r=N(()=>t.resolve(re(e.to))),o=N(()=>{const{matched:l}=r.value,{length:a}=l,s=l[a-1],u=n.matched;if(!s||!u.length)return-1;const f=u.findIndex(J.bind(null,s));if(f>-1)return f;const m=Ye(l[a-2]);return a>1&&Ye(s)===m&&u[u.length-1].path!==m?u.findIndex(J.bind(null,l[a-2])):f}),c=N(()=>o.value>-1&&Dn(n.params,r.value.params)),h=N(()=>o.value>-1&&o.value===n.matched.length-1&&ut(n.params,r.value.params));function p(l={}){return Tn(l)?t[re(e.replace)?"replace":"push"](re(e.to)).catch(se):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:c,isExactActive:h,navigate:p}}const jn=rt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:We,setup(e,{slots:t}){const n=Le(We(e)),{options:r}=Z(je),o=N(()=>({[Xe(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const c=t.default&&t.default(n);return e.custom?c:ot("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},c)}}}),Vn=jn;function Tn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Dn(e,t){for(const n in t){const r=t[n],o=e[n];if(typeof r=="string"){if(r!==o)return!1}else if(!B(o)||o.length!==r.length||r.some((c,h)=>c!==o[h]))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>e??t??n,xn=rt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Z(Ce),o=N(()=>e.route||r.value),c=Z(Qe,0),h=N(()=>{let a=re(c);const{matched:s}=o.value;let u;for(;(u=s[a])&&!u.components;)a++;return a}),p=N(()=>o.value.matched[h.value]);Ee(Qe,N(()=>h.value+1)),Ee(Ln,p),Ee(Ce,o);const l=ke();return et(()=>[l.value,p.value,e.name],([a,s,u],[f,m,y])=>{s&&(s.instances[u]=a,m&&m!==s&&a&&a===f&&(s.leaveGuards.size||(s.leaveGuards=m.leaveGuards),s.updateGuards.size||(s.updateGuards=m.updateGuards))),a&&s&&(!m||!J(s,m)||!f)&&(s.enterCallbacks[u]||[]).forEach(C=>C(a))},{flush:"post"}),()=>{const a=o.value,s=e.name,u=p.value,f=u&&u.components[s];if(!f)return Ze(n.default,{Component:f,route:a});const m=u.props[s],y=m?m===!0?a.params:typeof m=="function"?m(a):m:null,A=ot(f,b({},y,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(u.instances[s]=null)},ref:l}));return Ze(n.default,{Component:A,route:a})||A}}});function Ze(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const $n=xn;function Mn(e){const t=fn(e.routes,e),n=e.parseQuery||Cn,r=e.stringifyQuery||Fe,o=e.history,c=ne(),h=ne(),p=ne(),l=At(K);let a=K;X&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const s=Re.bind(null,i=>""+i),u=Re.bind(null,On),f=Re.bind(null,fe);function m(i,g){let d,v;return ft(i)?(d=t.getRecordMatcher(i),v=g):v=i,t.addRoute(v,d)}function y(i){const g=t.getRecordMatcher(i);g&&t.removeRoute(g)}function C(){return t.getRoutes().map(i=>i.record)}function A(i){return!!t.getRecordMatcher(i)}function E(i,g){if(g=b({},g||l.value),typeof i=="string"){const _=Pe(n,i,g.path),I=t.resolve({path:_.path},g),te=o.createHref(_.fullPath);return b(_,I,{params:f(I.params),hash:fe(_.hash),redirectedFrom:void 0,href:te})}let d;if("path"in i)d=b({},i,{path:Pe(n,i.path,g.path).path});else{const _=b({},i.params);for(const I in _)_[I]==null&&delete _[I];d=b({},i,{params:u(i.params)}),g.params=u(g.params)}const v=t.resolve(d,g),O=i.hash||"";v.params=s(f(v.params));const L=Mt(r,b({},i,{hash:Sn(O),path:v.path})),P=o.createHref(L);return b({fullPath:L,hash:O,query:r===Fe?kn(i.query):i.query||{}},v,{redirectedFrom:void 0,href:P})}function R(i){return typeof i=="string"?Pe(n,i,l.value.path):b({},i)}function V(i,g){if(a!==i)return ee(8,{from:g,to:i})}function $(i){return S(i)}function j(i){return $(b(R(i),{replace:!0}))}function T(i){const g=i.matched[i.matched.length-1];if(g&&g.redirect){const{redirect:d}=g;let v=typeof d=="function"?d(i):d;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=R(v):{path:v},v.params={}),b({query:i.query,hash:i.hash,params:"path"in v?{}:i.params},v)}}function S(i,g){const d=a=E(i),v=l.value,O=i.state,L=i.force,P=i.replace===!0,_=T(d);if(_)return S(b(R(_),{state:typeof _=="object"?b({},O,_.state):O,force:L,replace:P}),g||d);const I=d;I.redirectedFrom=g;let te;return!L&&Nt(r,v,d)&&(te=ee(16,{to:I,from:v}),Ve(v,v,!0,!1)),(te?Promise.resolve(te):M(I,v)).catch(x=>G(x)?G(x,2)?x:ge(x):me(x,I,v)).then(x=>{if(x){if(G(x,2))return S(b({replace:P},R(x.to),{state:typeof x.to=="object"?b({},O,x.to.state):O,force:L}),g||I)}else x=z(I,v,!0,P,O);return H(I,v,x),x})}function w(i,g){const d=V(i,g);return d?Promise.reject(d):Promise.resolve()}function M(i,g){let d;const[v,O,L]=Nn(i,g);d=be(v.reverse(),"beforeRouteLeave",i,g);for(const _ of v)_.leaveGuards.forEach(I=>{d.push(F(I,i,g))});const P=w.bind(null,i,g);return d.push(P),Y(d).then(()=>{d=[];for(const _ of c.list())d.push(F(_,i,g));return d.push(P),Y(d)}).then(()=>{d=be(O,"beforeRouteUpdate",i,g);for(const _ of O)_.updateGuards.forEach(I=>{d.push(F(I,i,g))});return d.push(P),Y(d)}).then(()=>{d=[];for(const _ of i.matched)if(_.beforeEnter&&!g.matched.includes(_))if(B(_.beforeEnter))for(const I of _.beforeEnter)d.push(F(I,i,g));else d.push(F(_.beforeEnter,i,g));return d.push(P),Y(d)}).then(()=>(i.matched.forEach(_=>_.enterCallbacks={}),d=be(L,"beforeRouteEnter",i,g),d.push(P),Y(d))).then(()=>{d=[];for(const _ of h.list())d.push(F(_,i,g));return d.push(P),Y(d)}).catch(_=>G(_,8)?_:Promise.reject(_))}function H(i,g,d){for(const v of p.list())v(i,g,d)}function z(i,g,d,v,O){const L=V(i,g);if(L)return L;const P=g===K,_=X?history.state:{};d&&(v||P?o.replace(i.fullPath,b({scroll:P&&_&&_.scroll},O)):o.push(i.fullPath,O)),l.value=i,Ve(i,g,d,P),ge()}let Q;function de(){Q||(Q=o.listen((i,g,d)=>{if(!Te.listening)return;const v=E(i),O=T(v);if(O){S(b(O,{replace:!0}),v).catch(se);return}a=v;const L=l.value;X&&Ft(Ne(L.fullPath,d.delta),pe()),M(v,L).catch(P=>G(P,12)?P:G(P,2)?(S(P.to,v).then(_=>{G(_,20)&&!d.delta&&d.type===ie.pop&&o.go(-1,!1)}).catch(se),Promise.reject()):(d.delta&&o.go(-d.delta,!1),me(P,v,L))).then(P=>{P=P||z(v,L,!1),P&&(d.delta&&!G(P,8)?o.go(-d.delta,!1):d.type===ie.pop&&G(P,20)&&o.go(-1,!1)),H(v,L,P)}).catch(se)}))}let q=ne(),D=ne(),ae;function me(i,g,d){ge(i);const v=D.list();return v.length?v.forEach(O=>O(i,g,d)):console.error(i),Promise.reject(i)}function Et(){return ae&&l.value!==K?Promise.resolve():new Promise((i,g)=>{q.add([i,g])})}function ge(i){return ae||(ae=!i,de(),q.list().forEach(([g,d])=>i?d(i):g()),q.reset()),i}function Ve(i,g,d,v){const{scrollBehavior:O}=e;if(!X||!O)return Promise.resolve();const L=!d&&Qt(Ne(i.fullPath,0))||(v||!d)&&history.state&&history.state.scroll||null;return nt().then(()=>O(i,g,L)).then(P=>P&&Ut(P)).catch(P=>me(P,i,g))}const ve=i=>o.go(i);let ye;const _e=new Set,Te={currentRoute:l,listening:!0,addRoute:m,removeRoute:y,hasRoute:A,getRoutes:C,resolve:E,options:e,push:$,replace:j,go:ve,back:()=>ve(-1),forward:()=>ve(1),beforeEach:c.add,beforeResolve:h.add,afterEach:p.add,onError:D.add,isReady:Et,install(i){const g=this;i.component("RouterLink",Vn),i.component("RouterView",$n),i.config.globalProperties.$router=g,Object.defineProperty(i.config.globalProperties,"$route",{enumerable:!0,get:()=>re(l)}),X&&!ye&&l.value===K&&(ye=!0,$(o.location).catch(O=>{}));const d={};for(const O in K)d[O]=N(()=>l.value[O]);i.provide(je,g),i.provide(_t,Le(d)),i.provide(Ce,l);const v=i.unmount;_e.add(i),i.unmount=function(){_e.delete(i),_e.size<1&&(a=K,Q&&Q(),Q=null,l.value=K,ye=!1,ae=!1),v()}}};return Te}function Y(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Nn(e,t){const n=[],r=[],o=[],c=Math.max(t.matched.length,e.matched.length);for(let h=0;h<c;h++){const p=t.matched[h];p&&(e.matched.find(a=>J(a,p))?r.push(p):n.push(p));const l=e.matched[h];l&&(t.matched.find(a=>J(a,l))||o.push(l))}return[n,r,o]}const Bn=[{path:"/admin",component:()=>k(()=>import("./DashboardLayout-d65a4720.js"),["assets/DashboardLayout-d65a4720.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/_plugin-vue_export-helper-68081c38.js","assets/DashboardLayout-533a0361.css"]),children:[{path:"coupons",component:()=>k(()=>import("./AdminCoupons-ca661669.js"),["assets/AdminCoupons-ca661669.js","assets/modalMixin-4c687509.js","assets/base-component-f117329c.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/_plugin-vue_export-helper-68081c38.js"])},{path:"orders",component:()=>k(()=>import("./AdminOrders-8712e8fa.js"),["assets/AdminOrders-8712e8fa.js","assets/modalMixin-4c687509.js","assets/base-component-f117329c.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/_plugin-vue_export-helper-68081c38.js"])},{path:"products",component:()=>k(()=>import("./AdminProducts-bfeba05c.js"),["assets/AdminProducts-bfeba05c.js","assets/modalMixin-4c687509.js","assets/base-component-f117329c.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/_plugin-vue_export-helper-68081c38.js"])},{path:"recipes",component:()=>k(()=>import("./AdminRecipes-9e7a3897.js"),["assets/AdminRecipes-9e7a3897.js","assets/modalMixin-4c687509.js","assets/base-component-f117329c.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/_plugin-vue_export-helper-68081c38.js"])},{path:"drawing",component:()=>k(()=>import("./AdminDrawing-bcc3845a.js"),["assets/AdminDrawing-bcc3845a.js","assets/modalMixin-4c687509.js","assets/base-component-f117329c.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/_plugin-vue_export-helper-68081c38.js"])}]},{path:"",redirect:"home",component:()=>k(()=>import("./FrontLayout-a9b03288.js"),["assets/FrontLayout-a9b03288.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/collapse-76537dfd.js","assets/base-component-f117329c.js","assets/modalMixin-4c687509.js","assets/numberCommaMixin-e0aac39c.js","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/_plugin-vue_export-helper-68081c38.js","assets/loadingLogo-ea15f612.js","assets/publicData-f4e8600e.js","assets/FrontLayout-0d85c829.css"]),children:[{name:"homePage",path:"home",component:()=>k(()=>import("./HomeView-4fff1d50.js"),["assets/HomeView-4fff1d50.js","assets/pagination.min-d05afe88.js","assets/_plugin-vue_export-helper-68081c38.js","assets/pagination-5e8cff96.css","assets/autoplay-67c448a2.js","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/publicData-f4e8600e.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/bookmark-14303522.js","assets/loadingStore-3928a1a3.js","assets/mainData-8598339c.js","assets/numberCommaMixin-e0aac39c.js","assets/icon-speaker-fd89918c.js","assets/image5-4fc2427e.js","assets/image4-1806383b.js","assets/icon-cart-796adfb7.js","assets/HomeView-bea9e782.css"])},{path:"checkout",component:()=>k(()=>import("./CheckOut-cfed5317.js"),["assets/CheckOut-cfed5317.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/numberCommaMixin-e0aac39c.js","assets/BannerComponent-882e3d71.js","assets/publicData-f4e8600e.js","assets/_plugin-vue_export-helper-68081c38.js","assets/runtime-dom.esm-bundler-eb0e3820.js"])},{path:"products",component:()=>k(()=>import("./ProductsView-3cb375b0.js"),["assets/ProductsView-3cb375b0.js","assets/loadingStore-3928a1a3.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/bookmark-14303522.js","assets/mainData-8598339c.js","assets/numberCommaMixin-e0aac39c.js","assets/PaginationComponent-737fcd4b.js","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/_plugin-vue_export-helper-68081c38.js","assets/collapse-76537dfd.js","assets/base-component-f117329c.js","assets/publicData-f4e8600e.js","assets/BannerComponent-882e3d71.js","assets/image5-4fc2427e.js","assets/image4-1806383b.js","assets/icon-cart-796adfb7.js","assets/undraw_Page_not_found_re_e9o6-993b7155.js"]),name:"products",props:!0},{path:"products/:id",component:()=>k(()=>import("./ProductView-b9b55b8a.js"),["assets/ProductView-b9b55b8a.js","assets/loadingStore-3928a1a3.js","assets/pagination.min-d05afe88.js","assets/_plugin-vue_export-helper-68081c38.js","assets/pagination-5e8cff96.css","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/bookmark-14303522.js","assets/mainData-8598339c.js","assets/numberCommaMixin-e0aac39c.js"])},{path:"recipes",component:()=>k(()=>import("./RecipesView-225dbca3.js"),["assets/RecipesView-225dbca3.js","assets/loadingStore-3928a1a3.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/bookmark-14303522.js","assets/mainData-8598339c.js","assets/numberCommaMixin-e0aac39c.js","assets/PaginationComponent-737fcd4b.js","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/_plugin-vue_export-helper-68081c38.js","assets/collapse-76537dfd.js","assets/base-component-f117329c.js","assets/publicData-f4e8600e.js","assets/BannerComponent-882e3d71.js","assets/image5-4fc2427e.js","assets/image4-1806383b.js","assets/undraw_Page_not_found_re_e9o6-993b7155.js"]),name:"RecipesView",props:!0},{path:"recipes/:id",component:()=>k(()=>import("./RecipeView-095abea2.js"),["assets/RecipeView-095abea2.js","assets/loadingStore-3928a1a3.js","assets/pagination.min-d05afe88.js","assets/_plugin-vue_export-helper-68081c38.js","assets/pagination-5e8cff96.css","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/bookmark-14303522.js","assets/numberCommaMixin-e0aac39c.js"])},{path:"bookmarks",component:()=>k(()=>import("./BookMarks-90957c6c.js"),["assets/BookMarks-90957c6c.js","assets/loadingStore-3928a1a3.js","assets/modalMixin-4c687509.js","assets/base-component-f117329c.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/bookmark-14303522.js","assets/_plugin-vue_export-helper-68081c38.js","assets/numberCommaMixin-e0aac39c.js","assets/mainData-8598339c.js","assets/publicData-f4e8600e.js","assets/BannerComponent-882e3d71.js","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/image4-1806383b.js","assets/icon-cart-796adfb7.js"])},{path:"discounts",component:()=>k(()=>import("./SpecialOffers-ac651b51.js"),["assets/SpecialOffers-ac651b51.js","assets/loadingStore-3928a1a3.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/numberCommaMixin-e0aac39c.js","assets/publicData-f4e8600e.js","assets/BannerComponent-882e3d71.js","assets/_plugin-vue_export-helper-68081c38.js","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/icon-speaker-fd89918c.js"]),name:"discountsView",props:!0},{path:"member",component:()=>k(()=>import("./MemberShip-de19e652.js"),["assets/MemberShip-de19e652.js","assets/loadingStore-3928a1a3.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/PaginationComponent-737fcd4b.js","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/_plugin-vue_export-helper-68081c38.js","assets/numberCommaMixin-e0aac39c.js","assets/publicData-f4e8600e.js","assets/BannerComponent-882e3d71.js"])},{path:"orderSuccess",component:()=>k(()=>import("./OrderSuccess-78893ed0.js"),["assets/OrderSuccess-78893ed0.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/numberCommaMixin-e0aac39c.js","assets/BannerComponent-882e3d71.js","assets/publicData-f4e8600e.js","assets/_plugin-vue_export-helper-68081c38.js"])},{path:"orders/:id",component:()=>k(()=>import("./OrderDetails-b2e9d85c.js"),["assets/OrderDetails-b2e9d85c.js","assets/loadingStore-3928a1a3.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/numberCommaMixin-e0aac39c.js","assets/_plugin-vue_export-helper-68081c38.js"])},{path:"discounts/:id",component:()=>k(()=>import("./SpecialOffer-6800ab6f.js"),["assets/SpecialOffer-6800ab6f.js","assets/loadingStore-3928a1a3.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/_plugin-vue_export-helper-68081c38.js"])},{path:"loginSignup",component:()=>k(()=>import("./LoginSignup-b598394c.js"),["assets/LoginSignup-b598394c.js","assets/carts-c864b624.js","assets/carts-50a54fda.css","assets/pagination.min-d05afe88.js","assets/_plugin-vue_export-helper-68081c38.js","assets/pagination-5e8cff96.css","assets/runtime-dom.esm-bundler-eb0e3820.js","assets/autoplay-67c448a2.js","assets/loadingLogo-ea15f612.js"])},{path:"/:pathMatch(.*)*",component:()=>k(()=>import("./NotFound-9f77d213.js"),["assets/NotFound-9f77d213.js","assets/undraw_Page_not_found_re_e9o6-993b7155.js","assets/_plugin-vue_export-helper-68081c38.js"])}]},{path:"/newPage/:pathMatch(.*)*",redirect:{name:"homePage"}}],Wn=Mn({history:Jt(),linkActiveClass:"active-link",routes:Bn});export{Vn as R,Qn as a,qn as b,Un as c,Gn as d,$n as e,Kn as f,Fn as g,zn as h,jt as m,Wn as r};