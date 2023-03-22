import{aF as tt,aR as Q,i as N,ap as je,w as Be,P as Y,M as qe,al as ie,ar as nt,aY as rt,a2 as st}from"./_plugin-vue_export-helper-68081c38.js";/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const q=typeof window<"u";function ot(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const S=Object.assign;function ae(e,t){const n={};for(const r in t){const s=t[r];n[r]=I(s)?s.map(e):e(s)}return n}const F=()=>{},I=Array.isArray,ct=/\/$/,it=e=>e.replace(ct,"");function le(e,t,n="/"){let r,s={},l="",d="";const g=t.indexOf("#");let i=t.indexOf("?");return g<i&&g>=0&&(i=-1),i>-1&&(r=t.slice(0,i),l=t.slice(i+1,g>-1?g:t.length),s=e(l)),g>-1&&(r=r||t.slice(0,g),d=t.slice(g,t.length)),r=ft(r??t,n),{fullPath:r+(l&&"?")+l+d,path:r,query:s,hash:d}}function at(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function we(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function lt(e,t,n){const r=t.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&z(t.matched[r],n.matched[s])&&ze(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ze(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!ut(e[n],t[n]))return!1;return!0}function ut(e,t){return I(e)?Se(e,t):I(t)?Se(t,e):e===t}function Se(e,t){return I(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ft(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let s=n.length-1,l,d;for(l=0;l<r.length;l++)if(d=r[l],d!==".")if(d==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(l-(l===r.length?1:0)).join("/")}var X;(function(e){e.pop="pop",e.push="push"})(X||(X={}));var W;(function(e){e.back="back",e.forward="forward",e.unknown=""})(W||(W={}));function ht(e){if(!e)if(q){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),it(e)}const dt=/^[^#]+#/;function pt(e,t){return e.replace(dt,"#")+t}function mt(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ee=()=>({left:window.pageXOffset,top:window.pageYOffset});function gt(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;t=mt(s,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function ke(e,t){return(history.state?history.state.position-t:-1)+e}const fe=new Map;function vt(e,t){fe.set(e,t)}function yt(e){const t=fe.get(e);return fe.delete(e),t}let Rt=()=>location.protocol+"//"+location.host;function Ge(e,t){const{pathname:n,search:r,hash:s}=t,l=e.indexOf("#");if(l>-1){let g=s.includes(e.slice(l))?e.slice(l).length:1,i=s.slice(g);return i[0]!=="/"&&(i="/"+i),we(i,"")}return we(n,e)+r+s}function Et(e,t,n,r){let s=[],l=[],d=null;const g=({state:u})=>{const m=Ge(e,location),R=n.value,b=t.value;let C=0;if(u){if(n.value=m,t.value=u,d&&d===R){d=null;return}C=b?u.position-b.position:0}else r(m);s.forEach(E=>{E(n.value,R,{delta:C,type:X.pop,direction:C?C>0?W.forward:W.back:W.unknown})})};function i(){d=n.value}function f(u){s.push(u);const m=()=>{const R=s.indexOf(u);R>-1&&s.splice(R,1)};return l.push(m),m}function o(){const{history:u}=window;u.state&&u.replaceState(S({},u.state,{scroll:ee()}),"")}function a(){for(const u of l)u();l=[],window.removeEventListener("popstate",g),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",g),window.addEventListener("beforeunload",o),{pauseListeners:i,listen:f,destroy:a}}function Ce(e,t,n,r=!1,s=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:s?ee():null}}function Pt(e){const{history:t,location:n}=window,r={value:Ge(e,n)},s={value:t.state};s.value||l(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function l(i,f,o){const a=e.indexOf("#"),u=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:Rt()+e+i;try{t[o?"replaceState":"pushState"](f,"",u),s.value=f}catch(m){console.error(m),n[o?"replace":"assign"](u)}}function d(i,f){const o=S({},t.state,Ce(s.value.back,i,s.value.forward,!0),f,{position:s.value.position});l(i,o,!0),r.value=i}function g(i,f){const o=S({},s.value,t.state,{forward:i,scroll:ee()});l(o.current,o,!0);const a=S({},Ce(r.value,i,null),{position:o.position+1},f);l(i,a,!1),r.value=i}return{location:r,state:s,push:g,replace:d}}function wt(e){e=ht(e);const t=Pt(e),n=Et(e,t.state,t.location,t.replace);function r(l,d=!0){d||n.pauseListeners(),history.go(l)}const s=S({location:"",base:e,go:r,createHref:pt.bind(null,e)},t,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>t.state.value}),s}function ln(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),wt(e)}function St(e){return typeof e=="string"||e&&typeof e=="object"}function Ke(e){return typeof e=="string"||typeof e=="symbol"}const H={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ve=Symbol("");var be;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(be||(be={}));function G(e,t){return S(new Error,{type:e,[Ve]:!0},t)}function $(e,t){return e instanceof Error&&Ve in e&&(t==null||!!(e.type&t))}const Ae="[^/]+?",kt={sensitive:!1,strict:!1,start:!0,end:!0},Ct=/[.+*?^${}()[\]/\\]/g;function bt(e,t){const n=S({},kt,t),r=[];let s=n.start?"^":"";const l=[];for(const f of e){const o=f.length?[]:[90];n.strict&&!f.length&&(s+="/");for(let a=0;a<f.length;a++){const u=f[a];let m=40+(n.sensitive?.25:0);if(u.type===0)a||(s+="/"),s+=u.value.replace(Ct,"\\$&"),m+=40;else if(u.type===1){const{value:R,repeatable:b,optional:C,regexp:E}=u;l.push({name:R,repeatable:b,optional:C});const w=E||Ae;if(w!==Ae){m+=10;try{new RegExp(`(${w})`)}catch(M){throw new Error(`Invalid custom RegExp for param "${R}" (${w}): `+M.message)}}let O=b?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;a||(O=C&&f.length<2?`(?:/${O})`:"/"+O),C&&(O+="?"),s+=O,m+=20,C&&(m+=-8),b&&(m+=-20),w===".*"&&(m+=-50)}o.push(m)}r.push(o)}if(n.strict&&n.end){const f=r.length-1;r[f][r[f].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const d=new RegExp(s,n.sensitive?"":"i");function g(f){const o=f.match(d),a={};if(!o)return null;for(let u=1;u<o.length;u++){const m=o[u]||"",R=l[u-1];a[R.name]=m&&R.repeatable?m.split("/"):m}return a}function i(f){let o="",a=!1;for(const u of e){(!a||!o.endsWith("/"))&&(o+="/"),a=!1;for(const m of u)if(m.type===0)o+=m.value;else if(m.type===1){const{value:R,repeatable:b,optional:C}=m,E=R in f?f[R]:"";if(I(E)&&!b)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const w=I(E)?E.join("/"):E;if(!w)if(C)u.length<2&&(o.endsWith("/")?o=o.slice(0,-1):a=!0);else throw new Error(`Missing required param "${R}"`);o+=w}}return o||"/"}return{re:d,score:r,keys:l,parse:g,stringify:i}}function At(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function _t(e,t){let n=0;const r=e.score,s=t.score;for(;n<r.length&&n<s.length;){const l=At(r[n],s[n]);if(l)return l;n++}if(Math.abs(s.length-r.length)===1){if(_e(r))return 1;if(_e(s))return-1}return s.length-r.length}function _e(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Ot={type:0,value:""},xt=/[a-zA-Z0-9_]/;function Mt(e){if(!e)return[[]];if(e==="/")return[[Ot]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,r=n;const s=[];let l;function d(){l&&s.push(l),l=[]}let g=0,i,f="",o="";function a(){f&&(n===0?l.push({type:0,value:f}):n===1||n===2||n===3?(l.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),l.push({type:1,value:f,regexp:o,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=i}for(;g<e.length;){if(i=e[g++],i==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:i==="/"?(f&&a(),d()):i===":"?(a(),n=1):u();break;case 4:u(),n=r;break;case 1:i==="("?n=2:xt.test(i)?u():(a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--);break;case 2:i===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+i:n=3:o+=i;break;case 3:a(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&g--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),a(),d(),s}function Nt(e,t,n){const r=bt(Mt(e.path),n),s=S(r,{record:e,parent:t,children:[],alias:[]});return t&&!s.record.aliasOf==!t.record.aliasOf&&t.children.push(s),s}function It(e,t){const n=[],r=new Map;t=Me({strict:!1,end:!0,sensitive:!1},t);function s(o){return r.get(o)}function l(o,a,u){const m=!u,R=Lt(o);R.aliasOf=u&&u.record;const b=Me(t,o),C=[R];if("alias"in o){const O=typeof o.alias=="string"?[o.alias]:o.alias;for(const M of O)C.push(S({},R,{components:u?u.record.components:R.components,path:M,aliasOf:u?u.record:R}))}let E,w;for(const O of C){const{path:M}=O;if(a&&M[0]!=="/"){const j=a.record.path,L=j[j.length-1]==="/"?"":"/";O.path=a.record.path+(M&&L+M)}if(E=Nt(O,a,b),u?u.alias.push(E):(w=w||E,w!==E&&w.alias.push(E),m&&o.name&&!xe(E)&&d(o.name)),R.children){const j=R.children;for(let L=0;L<j.length;L++)l(j[L],E,u&&u.children[L])}u=u||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&i(E)}return w?()=>{d(w)}:F}function d(o){if(Ke(o)){const a=r.get(o);a&&(r.delete(o),n.splice(n.indexOf(a),1),a.children.forEach(d),a.alias.forEach(d))}else{const a=n.indexOf(o);a>-1&&(n.splice(a,1),o.record.name&&r.delete(o.record.name),o.children.forEach(d),o.alias.forEach(d))}}function g(){return n}function i(o){let a=0;for(;a<n.length&&_t(o,n[a])>=0&&(o.record.path!==n[a].record.path||!Ue(o,n[a]));)a++;n.splice(a,0,o),o.record.name&&!xe(o)&&r.set(o.record.name,o)}function f(o,a){let u,m={},R,b;if("name"in o&&o.name){if(u=r.get(o.name),!u)throw G(1,{location:o});b=u.record.name,m=S(Oe(a.params,u.keys.filter(w=>!w.optional).map(w=>w.name)),o.params&&Oe(o.params,u.keys.map(w=>w.name))),R=u.stringify(m)}else if("path"in o)R=o.path,u=n.find(w=>w.re.test(R)),u&&(m=u.parse(R),b=u.record.name);else{if(u=a.name?r.get(a.name):n.find(w=>w.re.test(a.path)),!u)throw G(1,{location:o,currentLocation:a});b=u.record.name,m=S({},a.params,o.params),R=u.stringify(m)}const C=[];let E=u;for(;E;)C.unshift(E.record),E=E.parent;return{name:b,path:R,params:m,matched:C,meta:Ht(C)}}return e.forEach(o=>l(o)),{addRoute:l,resolve:f,removeRoute:d,getRoutes:g,getRecordMatcher:s}}function Oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Lt(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:$t(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function $t(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="boolean"?n:n[r];return t}function xe(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ht(e){return e.reduce((t,n)=>S(t,n.meta),{})}function Me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Ue(e,t){return t.children.some(n=>n===e||Ue(e,n))}const De=/#/g,Tt=/&/g,jt=/\//g,Bt=/=/g,qt=/\?/g,Qe=/\+/g,zt=/%5B/g,Gt=/%5D/g,Fe=/%5E/g,Kt=/%60/g,We=/%7B/g,Vt=/%7C/g,Ye=/%7D/g,Ut=/%20/g;function pe(e){return encodeURI(""+e).replace(Vt,"|").replace(zt,"[").replace(Gt,"]")}function Dt(e){return pe(e).replace(We,"{").replace(Ye,"}").replace(Fe,"^")}function he(e){return pe(e).replace(Qe,"%2B").replace(Ut,"+").replace(De,"%23").replace(Tt,"%26").replace(Kt,"`").replace(We,"{").replace(Ye,"}").replace(Fe,"^")}function Qt(e){return he(e).replace(Bt,"%3D")}function Ft(e){return pe(e).replace(De,"%23").replace(qt,"%3F")}function Wt(e){return e==null?"":Ft(e).replace(jt,"%2F")}function J(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function Yt(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const l=r[s].replace(Qe," "),d=l.indexOf("="),g=J(d<0?l:l.slice(0,d)),i=d<0?null:J(l.slice(d+1));if(g in t){let f=t[g];I(f)||(f=t[g]=[f]),f.push(i)}else t[g]=i}return t}function Ne(e){let t="";for(let n in e){const r=e[n];if(n=Qt(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(I(r)?r.map(l=>l&&he(l)):[r&&he(r)]).forEach(l=>{l!==void 0&&(t+=(t.length?"&":"")+n,l!=null&&(t+="="+l))})}return t}function Xt(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=I(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return t}const Zt=Symbol(""),Ie=Symbol(""),me=Symbol(""),Xe=Symbol(""),de=Symbol("");function D(){let e=[];function t(r){return e.push(r),()=>{const s=e.indexOf(r);s>-1&&e.splice(s,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function T(e,t,n,r,s){const l=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((d,g)=>{const i=a=>{a===!1?g(G(4,{from:n,to:t})):a instanceof Error?g(a):St(a)?g(G(2,{from:t,to:a})):(l&&r.enterCallbacks[s]===l&&typeof a=="function"&&l.push(a),d())},f=e.call(r&&r.instances[s],t,n,i);let o=Promise.resolve(f);e.length<3&&(o=o.then(i)),o.catch(a=>g(a))})}function ue(e,t,n,r){const s=[];for(const l of e)for(const d in l.components){let g=l.components[d];if(!(t!=="beforeRouteEnter"&&!l.instances[d]))if(Jt(g)){const f=(g.__vccOpts||g)[t];f&&s.push(T(f,n,r,l,d))}else{let i=g();s.push(()=>i.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${l.path}"`));const o=ot(f)?f.default:f;l.components[d]=o;const u=(o.__vccOpts||o)[t];return u&&T(u,n,r,l,d)()}))}}return s}function Jt(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Le(e){const t=Y(me),n=Y(Xe),r=N(()=>t.resolve(Q(e.to))),s=N(()=>{const{matched:i}=r.value,{length:f}=i,o=i[f-1],a=n.matched;if(!o||!a.length)return-1;const u=a.findIndex(z.bind(null,o));if(u>-1)return u;const m=$e(i[f-2]);return f>1&&$e(o)===m&&a[a.length-1].path!==m?a.findIndex(z.bind(null,i[f-2])):u}),l=N(()=>s.value>-1&&rn(n.params,r.value.params)),d=N(()=>s.value>-1&&s.value===n.matched.length-1&&ze(n.params,r.value.params));function g(i={}){return nn(i)?t[Q(e.replace)?"replace":"push"](Q(e.to)).catch(F):Promise.resolve()}return{route:r,href:N(()=>r.value.href),isActive:l,isExactActive:d,navigate:g}}const en=Be({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Le,setup(e,{slots:t}){const n=je(Le(e)),{options:r}=Y(me),s=N(()=>({[He(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[He(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const l=t.default&&t.default(n);return e.custom?l:qe("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},l)}}}),tn=en;function nn(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function rn(e,t){for(const n in t){const r=t[n],s=e[n];if(typeof r=="string"){if(r!==s)return!1}else if(!I(s)||s.length!==r.length||r.some((l,d)=>l!==s[d]))return!1}return!0}function $e(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const He=(e,t,n)=>e??t??n,sn=Be({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=Y(de),s=N(()=>e.route||r.value),l=Y(Ie,0),d=N(()=>{let f=Q(l);const{matched:o}=s.value;let a;for(;(a=o[f])&&!a.components;)f++;return f}),g=N(()=>s.value.matched[d.value]);ie(Ie,N(()=>d.value+1)),ie(Zt,g),ie(de,s);const i=nt();return rt(()=>[i.value,g.value,e.name],([f,o,a],[u,m,R])=>{o&&(o.instances[a]=f,m&&m!==o&&f&&f===u&&(o.leaveGuards.size||(o.leaveGuards=m.leaveGuards),o.updateGuards.size||(o.updateGuards=m.updateGuards))),f&&o&&(!m||!z(o,m)||!u)&&(o.enterCallbacks[a]||[]).forEach(b=>b(f))},{flush:"post"}),()=>{const f=s.value,o=e.name,a=g.value,u=a&&a.components[o];if(!u)return Te(n.default,{Component:u,route:f});const m=a.props[o],R=m?m===!0?f.params:typeof m=="function"?m(f):m:null,C=qe(u,S({},R,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(a.instances[o]=null)},ref:i}));return Te(n.default,{Component:C,route:f})||C}}});function Te(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const on=sn;function un(e){const t=It(e.routes,e),n=e.parseQuery||Yt,r=e.stringifyQuery||Ne,s=e.history,l=D(),d=D(),g=D(),i=tt(H);let f=H;q&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=ae.bind(null,c=>""+c),a=ae.bind(null,Wt),u=ae.bind(null,J);function m(c,p){let h,v;return Ke(c)?(h=t.getRecordMatcher(c),v=p):v=c,t.addRoute(v,h)}function R(c){const p=t.getRecordMatcher(c);p&&t.removeRoute(p)}function b(){return t.getRoutes().map(c=>c.record)}function C(c){return!!t.getRecordMatcher(c)}function E(c,p){if(p=S({},p||i.value),typeof c=="string"){const y=le(n,c,p.path),_=t.resolve({path:y.path},p),U=s.createHref(y.fullPath);return S(y,_,{params:u(_.params),hash:J(y.hash),redirectedFrom:void 0,href:U})}let h;if("path"in c)h=S({},c,{path:le(n,c.path,p.path).path});else{const y=S({},c.params);for(const _ in y)y[_]==null&&delete y[_];h=S({},c,{params:a(c.params)}),p.params=a(p.params)}const v=t.resolve(h,p),k=c.hash||"";v.params=o(u(v.params));const A=at(r,S({},c,{hash:Dt(k),path:v.path})),P=s.createHref(A);return S({fullPath:A,hash:k,query:r===Ne?Xt(c.query):c.query||{}},v,{redirectedFrom:void 0,href:P})}function w(c){return typeof c=="string"?le(n,c,i.value.path):S({},c)}function O(c,p){if(f!==c)return G(8,{from:p,to:c})}function M(c){return K(c)}function j(c){return M(S(w(c),{replace:!0}))}function L(c){const p=c.matched[c.matched.length-1];if(p&&p.redirect){const{redirect:h}=p;let v=typeof h=="function"?h(c):h;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=w(v):{path:v},v.params={}),S({query:c.query,hash:c.hash,params:"path"in v?{}:c.params},v)}}function K(c,p){const h=f=E(c),v=i.value,k=c.state,A=c.force,P=c.replace===!0,y=L(h);if(y)return K(S(w(y),{state:typeof y=="object"?S({},k,y.state):k,force:A,replace:P}),p||h);const _=h;_.redirectedFrom=p;let U;return!A&&lt(r,v,h)&&(U=G(16,{to:_,from:v}),Ee(v,v,!0,!1)),(U?Promise.resolve(U):ge(_,v)).catch(x=>$(x)?$(x,2)?x:re(x):ne(x,_,v)).then(x=>{if(x){if($(x,2))return K(S({replace:P},w(x.to),{state:typeof x.to=="object"?S({},k,x.to.state):k,force:A}),p||_)}else x=ye(_,v,!0,P,k);return ve(_,v,x),x})}function Ze(c,p){const h=O(c,p);return h?Promise.reject(h):Promise.resolve()}function ge(c,p){let h;const[v,k,A]=cn(c,p);h=ue(v.reverse(),"beforeRouteLeave",c,p);for(const y of v)y.leaveGuards.forEach(_=>{h.push(T(_,c,p))});const P=Ze.bind(null,c,p);return h.push(P),B(h).then(()=>{h=[];for(const y of l.list())h.push(T(y,c,p));return h.push(P),B(h)}).then(()=>{h=ue(k,"beforeRouteUpdate",c,p);for(const y of k)y.updateGuards.forEach(_=>{h.push(T(_,c,p))});return h.push(P),B(h)}).then(()=>{h=[];for(const y of c.matched)if(y.beforeEnter&&!p.matched.includes(y))if(I(y.beforeEnter))for(const _ of y.beforeEnter)h.push(T(_,c,p));else h.push(T(y.beforeEnter,c,p));return h.push(P),B(h)}).then(()=>(c.matched.forEach(y=>y.enterCallbacks={}),h=ue(A,"beforeRouteEnter",c,p),h.push(P),B(h))).then(()=>{h=[];for(const y of d.list())h.push(T(y,c,p));return h.push(P),B(h)}).catch(y=>$(y,8)?y:Promise.reject(y))}function ve(c,p,h){for(const v of g.list())v(c,p,h)}function ye(c,p,h,v,k){const A=O(c,p);if(A)return A;const P=p===H,y=q?history.state:{};h&&(v||P?s.replace(c.fullPath,S({scroll:P&&y&&y.scroll},k)):s.push(c.fullPath,k)),i.value=c,Ee(c,p,h,P),re()}let V;function Je(){V||(V=s.listen((c,p,h)=>{if(!Pe.listening)return;const v=E(c),k=L(v);if(k){K(S(k,{replace:!0}),v).catch(F);return}f=v;const A=i.value;q&&vt(ke(A.fullPath,h.delta),ee()),ge(v,A).catch(P=>$(P,12)?P:$(P,2)?(K(P.to,v).then(y=>{$(y,20)&&!h.delta&&h.type===X.pop&&s.go(-1,!1)}).catch(F),Promise.reject()):(h.delta&&s.go(-h.delta,!1),ne(P,v,A))).then(P=>{P=P||ye(v,A,!1),P&&(h.delta&&!$(P,8)?s.go(-h.delta,!1):h.type===X.pop&&$(P,20)&&s.go(-1,!1)),ve(v,A,P)}).catch(F)}))}let te=D(),Re=D(),Z;function ne(c,p,h){re(c);const v=Re.list();return v.length?v.forEach(k=>k(c,p,h)):console.error(c),Promise.reject(c)}function et(){return Z&&i.value!==H?Promise.resolve():new Promise((c,p)=>{te.add([c,p])})}function re(c){return Z||(Z=!c,Je(),te.list().forEach(([p,h])=>c?h(c):p()),te.reset()),c}function Ee(c,p,h,v){const{scrollBehavior:k}=e;if(!q||!k)return Promise.resolve();const A=!h&&yt(ke(c.fullPath,0))||(v||!h)&&history.state&&history.state.scroll||null;return st().then(()=>k(c,p,A)).then(P=>P&&gt(P)).catch(P=>ne(P,c,p))}const se=c=>s.go(c);let oe;const ce=new Set,Pe={currentRoute:i,listening:!0,addRoute:m,removeRoute:R,hasRoute:C,getRoutes:b,resolve:E,options:e,push:M,replace:j,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:l.add,beforeResolve:d.add,afterEach:g.add,onError:Re.add,isReady:et,install(c){const p=this;c.component("RouterLink",tn),c.component("RouterView",on),c.config.globalProperties.$router=p,Object.defineProperty(c.config.globalProperties,"$route",{enumerable:!0,get:()=>Q(i)}),q&&!oe&&i.value===H&&(oe=!0,M(s.location).catch(k=>{}));const h={};for(const k in H)h[k]=N(()=>i.value[k]);c.provide(me,p),c.provide(Xe,je(h)),c.provide(de,i);const v=c.unmount;ce.add(c),c.unmount=function(){ce.delete(c),ce.size<1&&(f=H,V&&V(),V=null,i.value=H,oe=!1,Z=!1),v()}}};return Pe}function B(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function cn(e,t){const n=[],r=[],s=[],l=Math.max(t.matched.length,e.matched.length);for(let d=0;d<l;d++){const g=t.matched[d];g&&(e.matched.find(f=>z(f,g))?r.push(g):n.push(g));const i=e.matched[d];i&&(t.matched.find(f=>z(f,i))||s.push(i))}return[n,r,s]}export{tn as R,ln as a,on as b,un as c};
