typeof globalThis>"u"&&(window.globalThis=window);var C=typeof window>"u"?{}:window;var yr=Symbol("stackTrace"),xt=Object.freeze({}),wr=Object.freeze([]),_n=Promise.resolve(),I={}.hasOwnProperty,Re=new WeakSet;function xr(e){return typeof e=="function"?e():e}function Yt(e){return e&&String(e).replace(/\/+/g,"/").replace(/(.)\/\*?$/,"$1")}function kt(e){return e&&Yt(e).replace("/?","?")}function _t(e){return e.replace(/(\B[A-Z])/g,"-$1").toLowerCase()}function de(e){return e&&O(e.observe)}function O(e){return typeof e=="function"}function kr(e){return e&&O(e.then)}function Jn(e){return e.charCodeAt(0)===111&&e.charCodeAt(1)===110}function Jt(e){return typeof e=="boolean"||e==null}function Xn(e){return e&&Array.isArray(e.raw)}function Zn(e){return e.charCodeAt(0)===36?"--"+e.slice(1):e.charCodeAt(0)===45&&e.charCodeAt(1)===45?e:null}function Qn(e){return e==="dom"||e==="type"||e==="value"||e==="key"||e==="src"||e==="srcset"||e==="href"||e==="class"||e==="className"||e==="data"||e==="style"||e==="deferrable"||e==="is"||e==="handleEvent"}function eo(e){for(;e.parent&&!e.name;)e=e.parent;return e.name}function Sr(e){for(;e.parent&&!e.id;)e=e.parent;return e.id}function Ud(e){let t=e.classes||"";for(;e.parent;)e=e.parent,t+=" "+e.classes||"";return t}function Cr(e){return(Yn(e.attrs.class)+Yn(e.attrs.className)+Ud(e.tag)).trim()}function Xt(e){return Array.isArray(e)?e:[e]}function Le(){}function Zt(e){return Zn(e)||(e==="cssFloat"?"float":_t(e))}function Yn(e){return de(e)||O(e)?Yn(e()):e?typeof e=="object"?Kd(e):e+" ":""}function Kd(e){let t;for(let n in e)e[n]&&(t=t==null?n:[t,n].join(" "));return t||""}function Qt(e,t,n){t?e.style.setProperty("min-width",t+"px"):e.style.removeProperty("min-width"),n?e.style.setProperty("min-height",n+"px"):e.style.removeProperty("min-height")}function Qe(e,[t,n,o,r]=[],{callbacks:a,depth:d}={}){if(e===document.documentElement)Qt(e,o,r),window.scrollTo(t||0,n||0);else{if(d){let c=document.createElement("div");c.style="position:absolute;width:1px;height:1px;top:"+(r-1)+"px;left:"+(o-1)+"px",e.appendChild(c),Re.add(c),a.push(()=>(Re.delete(c),c.remove()))}e.scrollLeft=t,e.scrollTop=n}}function Tr(e,t){return!t||!t.tag?e:!e||!e.tag?(e.tag=t.tag,e):(e.tag={id:t.tag.id||e.tag.id,name:t.tag.name||e.tag.name,classes:(e.tag.classes?e.tag.classes+" ":"")+t.tag.classes,args:t.tag.args,vars:t.tag.vars,parent:e.tag},e)}var re=class{constructor(t,n,o=null,r=0,a=xt,d=wr){this.nesting=r,this.component=n,this.inline=t,this.tag=o,this.attrs=a,this.key=a?a.key:void 0,this.dom=null,this.children=d}};["head","get","put","post","delete","patch"].forEach(e=>et[e]=function(t,n={}){return n.method=e,et(t,n)});et.redraw=()=>{};var Wd=typeof Uint8Array>"u"?[]:[Object.getPrototypeOf(Uint8Array)],Yd="Blob ArrayBuffer DataView FormData URLSearchParams File".split(" ").map(e=>globalThis[e]).filter(e=>e).concat(Wd);function et(e,{url:t=new URL(e,C.location.origin),method:n="GET",responseType:o,json:r="application/json",query:a,body:d,user:c=t.username,pass:s=t.password,headers:l={},config:u,timeout:h=0,signal:p,...f}={}){let m=new C.XMLHttpRequest(f);p?.addEventListener("abort",()=>m.abort());let v=!1,y=new Promise((x,w)=>{let k,b;n=n.toUpperCase(),m.addEventListener("readystatechange",function(){if(m.readyState===m.DONE)try{m.headers=m.headers||Jd(m.getAllResponseHeaders()),m.status&&Object.defineProperty(m,"body",{enumerable:!0,value:k===r?m.response===void 0||m.response===""?void 0:JSON.parse(m.response):m.response}),m.status===304||m.status>=200&&m.status<300?x(v?m:m.body):w(_d(m))}catch(S){w(S)}}),m.addEventListener("error",w),m.addEventListener("abort",()=>w(new Error("ABORTED"))),m.addEventListener("timeout",()=>w(new Error("TIMEOUT"))),a&&(a=new URLSearchParams(a))&&a.size&&a.forEach((S,P)=>t.searchParams.append(P,S)),m.open(n,""+t,!0,c,s),m.timeout=h,o&&(m.responseType=o),Object.entries(l).forEach(([S,P])=>{P&&m.setRequestHeader(S,P),S.toLowerCase()==="accept"&&(k=P),S.toLowerCase()==="content-type"&&(b=P)}),!k&&!o&&r&&m.setRequestHeader("Accept",k=r),!b&&d!==void 0&&!Yd.some(S=>d instanceof S)&&r&&m.setRequestHeader("Content-Type",b=r),u&&u(m),m.send(b===r?JSON.stringify(d):d)}).catch(x=>{let w=Object.assign(new Error(x.message),{...x,url:t,status:m.status,headers:m.headers,body:m.body||m.response});throw Object.defineProperty(w,"xhr",{value:m}),w});return Object.defineProperties(y,{abort:{value:()=>m.abort(),enumerable:!0},xhr:{get:()=>(v=!0,y)}})}function _d(e){return new Error(e.status?e.status+(e.statusText?" "+e.statusText:""):"Unknown")}function Jd(e){let t={};return e.split(`
`).forEach(n=>{let o=n.indexOf(":"),r=n.substring(0,o).trim().toLowerCase(),a=n.substring(o+1).trim();r==="set-cookie"?t[r]?t[r].push(a):t[r]=[a]:t[r]=a}),t}function tt(e,...t){let n=new Set;return t.forEach(s=>O(s)&&n.add(s)),d.value=e,d.observe=o,d.valueOf=d.toString=d.toJSON=()=>e,d.detach=Le,d.reduce=c,d.set=s=>(...l)=>(d(O(s)?s(...l):s),d),d.get=s=>Object.assign(r.bind(null,s),{observe:l=>d.observe(()=>l(r(s)))}),d.if=(...s)=>Object.assign(a.bind(null,...s),{observe:l=>d.observe(()=>l(a(...s)))}),d;function o(s,l){let u=l?(...h)=>(n.delete(u),s(...h)):s;return n.add(u),()=>n.delete(u)}function r(s){return O(s)?s(d.value):d.value[s]}function a(s,l=!0,u=!1){return d.value===s?l:u}function d(s){if(!arguments.length)return d.value;let l=e;return d.value=e=s,n.forEach(u=>d.value!==l&&u(d.value,l,()=>n.delete(u))),d.value}function c(s,l){let u=1,h=tt(arguments.length>1?s(l,d.value,u++):d.value);return d.observe(p=>h(s(h.value,p,u++))),h}}tt.from=function(...e){let t=e.pop(),n=tt(t(...e.map(to))),o=e.map(r=>r.observe(()=>n(t(...e.map(to)))));return n.detach=()=>o.forEach(to),n};function to(e){return e()}var Ar=!1,Dr={};function Ir(e){return e.split(/(?=\/)/)}function Xd(e,t){return e.reduce((n,o,r)=>(o[1]===":"&&(n[o.slice(2)]=decodeURIComponent(t[r].slice(1))),n),{})}function St(e,t,n,o){let r=h.location=n.location,a=e(({key:p,route:f,...g},[m],v)=>(v.route=St(e,p.replace(/[/*?]$/,""),n,f),f.key=p,()=>c(m,g,v)));return h.root=o?o.root:h,h.parent=o||h,h.query=n.query,h.toString=h,h.state=d,h.has=p=>{let f=s(r);if((p=p.replace(t,""))==="/")return f===t||f==="/"&&t==="";let g=kt(t+"/"+p);return f.indexOf(g)===0&&(f[g.length]===void 0||f[g.length]==="/")},Object.defineProperty(h,"path",{get(){let p=s(r),f=p.indexOf("/",t.length+1);return f===-1?p:p.slice(0,f)}}),h;function d(p){return p&&C.history.replaceState({...history.state,...p},"",r.pathname+r.search+r.hash),C.history?.state}function c(p,f,g){let m=O(p)?p(f,[],g):p;return kr(m)?e(()=>m)(f):m}function s(p,f=0){return decodeURIComponent(Yt(e.route.prefix[0]==="#"?p.hash.slice(e.route.prefix.length+f):e.route.prefix[0]==="?"?p.search.slice(e.route.prefix.length+f):p.pathname.slice(e.route.prefix.length+f)))}async function l(p,{state:f,replace:g=!1,redraw:m=!0,scroll:v=!0}={}){if(p!==s(r)+r.search){if(e.is.server)return n.doc.status(302),n.doc.headers({Location:e.route.prefix+p});e.route.prefix[0]==="#"?C.location.hash=e.route.prefix+p:e.route.prefix[0]==="?"?C.location.search=e.route.prefix+p:C.history[g?"replaceState":"pushState"](f,null,e.route.prefix+p),Dr[p]=f,p.indexOf(r.search)>-1&&n.query(r.search),m&&await e.redraw(),v===!1||e.route.scroll===!1?e.route.scroll=void 0:Qe(document.documentElement)}}function u({state:p={}}={}){e.redraw().then(()=>Qe(document.documentElement,p?.sinscroll?.[""]))}function h(p,f={}){if(typeof p>"u")return t+"/";if(typeof p=="string")return l(kt(p[0]==="/"?p:"/"+p),f);Ar||(Ar=!0,e.route.prefix[0]==="#"?C.addEventListener("hashchange",u,{passive:!0}):O(C.history.pushState)&&C.addEventListener("popstate",u,{passive:!0}));let g=s(r,t.length),m=Ir(g),{match:v,view:y}=Zd(p,m),x=t+(v?v.map((w,k)=>w==="/*"?"*":w==="/?"?"?":m[k]).join(""):"?");return(y===void 0||v[0]==="/?")&&n.doc.status(404),h.params={...h.parent.params,...Xd(v||[],m)},a({key:x,route:h,...h.params,...t+g===x&&Dr[t+g]||C.history.state||{},...f},y)}}function Zd(e,t){let n=0,o,r;function a(d,c){if(d.charCodeAt(0)!==47&&(d="/"+d),d=Ir(Yt(d)),typeof c=="object"&&c!=null){for(let l in c)a(d+l,c[l]);return}let s=Qd(d,t);s>n&&(n=s,o=d,r=c)}for(let d in e)a(d,e[d]);return{match:o,view:r}}function Qd(e,t){return e.reduce((n,o,r)=>n+(o==="/?"?1:o===t[r]?7:o&&t[r]&&o.toLowerCase()===t[r].toLowerCase()?6:o[1]===":"&&t[r]&&t[r].length>1?5:o==="/"&&!t[r]?4:o.indexOf("/...")===0?3:o==="/*"?2:-1/0),0)}function no(e,t){let n=URLSearchParams,o=["append","delete","set","sort"],r=t.search,a=new n(r),d,c=e.live();c.replace=u=>(a=new n(u),l()),c.clear=()=>c.replace("");for(let u in n.prototype)c[u]=(...h)=>(d=s()[u](...h),o.includes(u)&&l(),d);return c;function s(){return r===t.search?a:(r=t.search,a=new n(r))}function l(){let u=t.pathname+(a+""?"?"+(a+"").replace(/=$/g,""):"")+t.hash;location.href.endsWith(u)||(C.history.replaceState(C.history.state,null,u),c(t.search),e.redraw())}}var Pr={ai:"align-items",as:"align-self",ac:"align-content",ar:"aspect-ratio",b:"bottom",bg:"background",bf:"backdrop-filter",bc:"background-color",br:"border-radius",bs:"box-shadow",bi:"background-image",c:"color",d:"display",fg:"flex-grow",fb:"flex-basis",f:"float",fd:"flex-direction",ff:"font-family",fs:"font-size",fw:"font-weight",g:"gap",ga:"grid-area",gg:"grid-gap",gta:"grid-template-areas",gtc:"grid-template-columns",gtr:"grid-template-rows",h:"height",jc:"justify-content",js:"justify-self",l:"left",lh:"line-height",ls:"letter-spacing",m:"margin",mb:"margin-bottom",ml:"margin-left",mr:"margin-right",mt:"margin-top",o:"opacity",p:"padding",pb:"padding-bottom",pl:"padding-left",pr:"padding-right",pt:"padding-top",pi:"place-items",pe:"pointer-events",r:"right",t:"top",ta:"text-align",td:"text-decoration",tt:"text-transform",ts:"text-shadow",us:"user-select",va:"vertical-align",ws:"white-space",w:"width",zi:"z-index",z:"zoom"};var Se,nn="s",Dt=C.document,ea=/^(ms|moz|webkit)[-A-Z]/i,rt=Dt.createElement("div"),rn=new Map,zr={},oo={},ro=new Map,ge={$:"calc"},go=e=>Se||(Se=e||Dt.querySelector("style.sin")||Dt.createElement("style"));function Mr(e){if(ro.has(e))return ro.get(e);let t=Object.assign(document.createElement("link"),{rel:"stylesheet",href:e});document.head.appendChild(t);let n=new Promise((o,r)=>{t.onload=()=>o(t),t.onerror=r});return ro.set(e,n),n}var Br=(e,t)=>typeof t=="function"?rn.set(e.charCodeAt(0),t):Object.entries(e).forEach(([n,o])=>rn.set(n.charCodeAt(0),o)),en={flex:"",border:"px","line-height":"","box-shadow":"px","border-top":"px","border-left":"px","border-right":"px","border-bottom":"px","text-shadow":"px","@media":"px","@container":"px"},co=Array.from(Object.keys(I.call(rt.style,"width")?rt.style:Object.getPrototypeOf(rt.style)).reduce((e,t)=>(e.add(t.match(ea)?"-"+_t(t):_t(t)),e),new Set(["float"]))),Er=co.reduce((e,t)=>{let n=t.match(/-(ms|o|webkit|moz)-/g);if(n){let o=t.replace(/-(ms|o|webkit|moz)-/,"");co.indexOf(o)===-1&&(o==="flexDirection"&&(e.flex="-"+n[1].toLowerCase()+"-flex"),e[o]=t)}return e},{}),io=new Map,$r=new Set,Or=C.CSS&&C.CSS.supports("color","var(--support-test)"),ta=["perspective","blur","drop-shadow","inset","polygon","minmax"],na=["@media","@container","@supports","@document","@layer","@starting-style"],jr=e=>na.some(t=>e.indexOf(t)===0),oa=(e,t)=>e==="translate"||t.indexOf("translate")===0||ta.indexOf(t)>-1,ra=(e,t)=>e==="rotate"||t.indexOf("rotate")===0||t.indexOf("skew")===0,so=e=>e!==32&&e!==9&&e!==10&&e!==13&&e!==59,Nr=e=>e>=48&&e<=57||e===46,ia=e=>e>=65&&e<=90||e>=97&&e<=122||e===45||e===95,da=e=>e===37||e>=65&&e<=90||e>=97&&e<=122,aa=e=>e===34||e===39,qr=e=>e===32||e===58||e===9,ca=e=>e===59||e===10||e===125,Fr=e=>e===38||e===58||e===64||e===91,sa=e=>e===59||e===125,dn=e=>e[e.length-1],ue=[],Ce=-1,z=-1,ke=-1,Ct=-1,an=-1,nt=-1,T=-1,Vr=-1,Be=-1,Ae=-1,lo=-1,fe=-1,ce=-1,ae="",K="",Te="&&",He="",Tt="",Rr="",on="",G="",po="",uo="",At="",ot="",A="",H="",tn="",Q=null,Lr=!0,dt=!1,ho=!1,ao=!0,fo=!1,he=0,it=!1,Me=[];function bo(e){return e.charCodeAt(0)===36?"--"+e.slice(1):Pr[e]||e}function Gr(e,t,n){return(e?";":"")+(dt?t:la(t))+":"+n+(Vr===33?"important":"")}function la(e){return zr[e]||(zr[e]=Sa(bo(e)))}function pa(e){return it?e:e.replace(/,\s*[:[&]?/g,t=>Fr(t.charCodeAt(t.length-1))?",&"+dn(t):",& ")}function cn(e,t){if(Lr&&(Se&&Dt.head&&Dt.head.appendChild(Se),Lr=!1),Se&&Se.sheet)try{Se.sheet.insertRule(e,t??Se.sheet.cssRules.length)}catch(n){console.error("Insert rule error:",n,e)}}function vo([e,...t],n,o=0,r=!1){if(Se||go(),io.has(e))return{...io.get(e),parent:n,args:t};it=r;let a={};Me=[],Te="&&",uo=At=ot=G=H=K="",ue.length=he=0,Be=z=lo=an=ce=fe=-1,Q=it?{}:null,fo=!1,ho=!1,ao=!0,A=e[0];for(let c=0;c<e.length;c++)if(Q?Hr(0,c===e.length-1):ua(e,c),A=e[c+1],c<t.length){let s=e[c].slice(z);if(!r&&Or&&z>=0)ae=nn+Math.abs(he).toString(31),a[tn="--"+ae+c]={property:K,fns:Me.slice(-1),unit:mo(K,dn(Me)),index:c,transform:fe!==-1&&wa},H+=s+"var("+tn+")"+(fe===-1?"":(fe=-1,")")),z=0;else if(e[c+1].trim().charCodeAt(0)===123)ae=nn+Math.abs(he).toString(31),a[tn=ae+c]={index:c},ue.push("["+tn+"]");else{let l=s+xr(t[c])+mo(K,dn(Me));H+=l;for(let u=0;u<l.length;u++)he=Math.imul(31,he)+l.charCodeAt(u)|0;ao=!1,z=z>=0?0:Or?-1:0}}fo&&(it?Object.entries(Q).forEach(([c,s])=>{cn(c.replace(/&\s+/g,"").replace(/{&$/,"")+"{"+s+"}")}):(ae=nn+Math.abs(he).toString(31),ot+=(ot?" ":"")+ae,Rr=o&&"&".repeat(o+1),$r.has(ae)||Object.entries(Q).forEach(([c,s])=>{Rr&&(c=c.replace("&","&".repeat(o+1))),cn(c.replace(/&/g,"."+ae)+"{"+s+"}")})));let d={name:uo,classes:ot,id:At,args:t,vars:a,parent:n};return ao?io.set(e,d):$r.add(ae),d}function ua(e,t){for(let n=0;n<=A.length;n++)if(T=A.charCodeAt(n),n<A.length&&(he=Math.imul(31,he)+T|0),ho){if(so(T)){Q={},Hr(n++,t===e.length-1);break}}else!so(T)||n===A.length?(ot=(ke!==-1?A.slice(ke+1,n).replace(/\./g," "):"")+ot,At===""&&(At=Ct!==-1?A.slice(Ct,ke===-1?n:ke):""),uo=A.slice(0,At?Ct-1:ke!==-1?ke:n),Ct=ke=-1,ho=!0):T===35?Ct=n+1:ke===-1&&T===46&&(ke=n)}function ha(e){return ge[e]||e}function Hr(e,t){for(let n=e;n<=A.length;n++)Vr=T,T=A.charCodeAt(n),n<A.length&&(he=Math.imul(31,he)+T|0),nt===-1&&z!==-1&&(dt?sa(T):ca(T)||t&&n===A.length)&&fa(n),nt!==-1?nt===T&&A.charCodeAt(n-1)!==92&&(nt=-1):nt===-1&&aa(T)?(nt=T,z===-1&&(z=n)):T===123?ma(n):T===125||t&&n===A.length?ga():n!==A.length&&Ce===-1&&so(T)?(Ce=n,an=T):!K&&Ce>=0&&qr(T)?(K=A.slice(Ce,n),dt=T===58):z===-1&&K&&!qr(T)?(z=Be=n,Nr(T)?Ae=n:T===36&&(ce=n)):z!==-1?Kr(n):(T===9||T===32)&&(Be=n+1)}function fa(e){Ur(e),K==="@import"?cn(K+" "+A.slice(z,e)+";",0):G+=Gr(G,K,H+A.slice(z,e)),fo=!0,Ce=z=-1,dt=!1,K=H=""}function Ur(e){fe!==-1?va(e):ce!==-1?ba(e):Ae!==-1&&xa(e)}function ma(e){K==="animation"?(G&&(Q[Te]=G),Tt=H+A.slice(z,e).trim(),po=H="",G=""):Tt?(on=A.slice(Ce,e).trim(),G=""):(G&&(Q[Te]=G),He=(an===64?ha(K)+(dt?":":" ")+H+(z===-1?"":A.slice(z,e)):A.slice(Ce,e)).trim(),He.indexOf(",")!==-1&&(He=pa(He)),H=K="",ue.push((Fr(an)?"":" ")+He+(He==="@font-face"&&++lo?"/*"+Array(lo).join(" ")+"*/":"")),Te=Yr(ue),G=Q[Te]||""),Ce=z=-1,dt=!1,K=""}function ga(){if(on)po+=on+"{"+G+"}",on=G="";else if(Tt)G=Q[Te]||"",ae=nn+Math.abs(he).toString(31),cn("@keyframes "+ae+"{"+po+"}"),G+=Gr(G,"animation",Tt+" "+ae),Tt="";else{let e=ue.map(n=>n.charCodeAt(0)===64&&jr(n)?"}":"").join(""),t=ue.pop();ue.length&&ue[0].indexOf("@keyframes")===0?Q[ue[0]]=(Q[ue[0]]||"")+He+"{"+G+"}":G&&(Q[Te]=G.trim()+e),t in ge&&(Q[ge[t]+" &&"]=G.trim()),Te=Yr(ue),G=Q[Te]||""}Ce=z=-1,K=""}function Kr(e){if(Nr(T)?Ae===-1&&(Ae=e):T===40?ce=-1:Ur(e),T===40){let t=A.slice(Math.max(Be,z),e);t in ge&&(t=ge[t]),H+=A.slice(z,e-t.length)+t+"(",Me.push(t),z=Be=e+1}else T===41?Me.pop():T===9||T===32?Be=e+1:T===36?ce=e:ce!==-1&&T===47&&(fe=e)}function ba(e){A.charCodeAt(e)===47?fe=e:ia(T)||(H=H+A.slice(z,ce)+"var(--"+A.slice(ce+1,e)+")",z=e,ce=-1)}function va(e){H=H+A.slice(z,ce)+"color-mix(in oklab, var(--"+A.slice(ce+1,fe)+"), transparent "+(A.length===fe+1?"":ya(A.slice(fe+1,e),A.charCodeAt(e))+")"),z=e+1,ce=Ae=-1}function ya(e,t){return fe=-1,100-(e*(t===37?1:100)).toFixed(0)+"%"}function wa(e){return(100-(typeof e=="string"&&e.charCodeAt(e.length-1)===37?e.slice(0,-1):e*100)).toFixed(0)+"%"}function xa(e){da(T)?rn.has(T)&&(H=H+A.slice(z,Ae)+rn.get(T)(A.slice(Ae,e)),z=e+1):A.charCodeAt(Be)!==35&&(H=H+A.slice(z,e)+mo(K,dn(Me)),z=e),Ae=-1}function mo(e,t=""){if(e=bo(e),e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return"";let n=e+","+t;return I.call(oo,n)?oo[n]:oo[n]=t&&oa(e,t)?"px":ra(e,t)?"deg":t?"":ka(e)}function Wr(e,{property:t,fns:n,unit:o,transform:r}){if(O(e)&&(e=C.isServerSin&&!de(e)?"6iacvt":e()),r&&(e=r(e)),!e&&e!==0)return"";if(typeof e=="number")return e+o;if(typeof e!="string"&&(e=""+e),e.charCodeAt(0)===36)return"var(--"+e.slice(1)+")";A=e,H="",z=0,Ae=Be=-1,K=t,Me=n;for(let a=0;a<=e.length;a++)T=e.charCodeAt(a),Kr(a);return H+e.slice(z)}function Yr(e){if(e.length===0)return"&&";let t=0;return e.reduce((n,o,r,a)=>{let d=o.charCodeAt(0);return d===64&&(o.indexOf("@font-face")===0&&r++,jr(o))?(t++,o+"{"+(r===a.length-1?"&&":"")+n):d===58&&o.startsWith(":root")?o+" "+n+(it||r-t?"":d===32?"&":"&&"):n+(it||r-t?"":d===32?"&":"&&")+o},"")}function ka(e){if(e=bo(e),Zn(e)||I.call(en,e))return en[e];try{return rt.style[e]="1px",rt.style.setProperty(e,"1px"),en[e]=rt.style[e].slice(-3)==="1px"?"px":""}catch{return en[e]=""}}function Sa(e){if(co.indexOf(e)===-1){if(Er[e])return Er[e];e.indexOf("--")!==0&&C.sindevhmr&&C.console.error(e,"css property not found")}return e}var q=C.document,_r={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Co=new Map,To=Symbol("deferrable"),Pt=Symbol("observable"),be=Symbol("component"),un=Symbol("cycle"),Ao=Symbol("event"),Do=Symbol("$arrayEnd"),Io=Symbol("$arrayStart"),yo=Symbol("class"),wo=Symbol("live"),Jr=Symbol("size"),zt=Symbol("life"),Et=Symbol("attr"),Xr=Symbol("attrs"),Ke=Symbol("source"),Zr=Symbol("children"),at=Symbol("keyIndex"),ve=Symbol("keys"),ti=Symbol("key"),Ye=Symbol("s"),je=[],pn,hn,ni;function i(...e){let t=typeof e[0];return t==="string"?Po(Object.assign([e[0]],{raw:[]}))(...e.slice(1)):I.call(e[0],Ye)?e[0](...e.slice(1)):ri(Po,Xn(e[0])?oi(e):t==="function"?new re(i.redrawing,e):new re(i.redrawing,[e[1],e[0]]))}function Po(...e){return Xn(e[0])?ri(Po,oi(e,this)):$a(e,this)}function oi(e,t){let n=t?t.nesting+1:0;return new re(t&&t.inline,t&&t.component,vo(e,t&&t.tag,n),n)}function ri(e,t){let n=e.bind(t);return n[Ye]=!0,n}i.redrawing=!1;i.sleep=(e,...t)=>new Promise(n=>setTimeout(n,e,...t));i.with=(e,t)=>e===void 0?e:t(e);i.isAttrs=di;i.is={server:i.isServer=C.isServerSin||!1};i.containers=[];i.redraw=fn;i.redraw.force=Ma;i.mount=Oa;i.css=(...e)=>vo(e,null,0,!0);i.css.alias=ii;i.css.reset=oc;i.css.unit=Br;i.css.load=Mr;i.style=go;i.animate=Pa;i.animate.transform=Ia;i.http=et;i.live=tt;i.event=Ta;i.on=Da;i.trust=Aa;i.route=St(i,"",{location:C.location,query:no(i,C.location)});i.route.prefix="";i.window=C;i.scroll=!0;i.View=re;i.error=i(e=>(console.error(e),()=>i`pre;all initial;d block;c white;bc #ff0033;p 8 12;br 6;overflow auto;fs 12`(i`code`("Unexpected Error: "+(e.message||e)))));i.jsx=i((e,t)=>t.slice(1));i.container=i((e,t,n)=>{return n.container={},()=>i``({...e,dom:[o].concat(e.dom)},i` display contents`(t));function o(r){r.style.containerType="inline-size";let a=r.firstElementChild;return a.setAttribute("data-sin-container",""),requestAnimationFrame(()=>{a.style.setProperty("transition-behavior","allow-discrete"),a.style.setProperty("transition",i.containers.map(c=>"--sin-container-"+c+" 0.001ms step-start").join(", ")),a.addEventListener("transitionrun",d)}),d(),()=>a.removeEventListener("transitionrun",d);function d(c){let s=getComputedStyle(a);for(let l of i.containers)n.container[l]=s.getPropertyValue("--sin-container-"+l)==="1";n.redraw()}}});var Ca=i(({strings:e,values:t=[]})=>{let n=q.createElement("div"),o=Array.isArray(e.raw)?[...e.raw]:Array.isArray(e)?[...e]:[e.trim()];o[0]=o[0].trimStart(),o[o.length-1]=o[o.length-1].trimEnd(),n.innerHTML=String.raw({raw:o},...t);let r=[...n.childNodes,q.createComment("trust")];return()=>r});function ii(e,t){if(typeof e=="object")return Object.entries(e).forEach(([o,r])=>ii(o,r));if(Array.isArray(t)?(ge["@"+e]=t[0],ge[t[0]]=t[1]):(ge["@"+e]=t,ge[e]=t),i.is.server)return;let n=(Array.isArray(t)?t[0]:t).split(" ")[0];if(n==="@media"){let o=null;Object.defineProperty(i.is,e,{get(){if(o!==null)return o;let r=C.matchMedia(t.slice(t.indexOf("(")));return r.addEventListener("change",a=>(o=a.matches,i.redraw())),o=r.matches}})}else n==="@container"&&(i.css([`@property --sin-container-${e}{syntax:'<number>';inherits:false;initial-value:0;}`]),i.css([`${t}{[data-sin-container]{--sin-container-${e}:1}}`]),i.containers.push(e))}function Ta(e){let t=new Set(e?[e]:[]);return n.observe=r,Object.defineProperty(n,"signal",{get:o}),n;function n(...a){return[...t].map(d=>d(...a))}function o(){let a=new AbortController;return r(()=>a.abort(),!0),a.signal}function r(a,d){let c=d?(...s)=>(t.delete(c),a(...s)):a;return t.add(c),()=>t.delete(c)}}function Aa(e,...t){return e&&e.raw||(e=Array.isArray(e)?e.map(n=>Jt(n)?"":n).join(""):Jt(e)?"":""+e),Ca({key:""+e,strings:e,values:t})}function Da(e,t,n,o){return typeof o=="function"&&([n,o]=[o,n]),(...r)=>{let a=d=>Ro(n,d,...r);return e.addEventListener(t,a,o),()=>e.removeEventListener(t,a,o)}}function Ia(e){return function(...t){let[n]=t;O(e)&&(e=e(...t));let o=e.getBoundingClientRect(),r=n.getBoundingClientRect();return n.style.setProperty("transition","none"),n.style.setProperty("--transform",`translate(${o.left-r.left}px, ${o.top-r.top}px) scale(${o.width/r.width}, ${o.height/r.height})`),requestAnimationFrame(()=>n.style.removeProperty("transition")),i.animate(n)}}function Pa(e){return e.setAttribute("animate","entry"),requestAnimationFrame(()=>(e.offsetWidth,e.removeAttribute("animate"))),t=>t&&(e.setAttribute("animate","exit"),Promise.allSettled(e.getAnimations().map(n=>n instanceof C.CSSTransition&&n.finished)))}function za(e,t,n){e.addEventListener("click",o=>{if(!o.defaultPrevented&&(o.button===0||o.which===0||o.which===1)&&(!o.currentTarget.target||o.currentTarget.target==="_self")&&!Ea(o.currentTarget)&&!o.ctrlKey&&!o.metaKey&&!o.shiftKey&&!o.altKey){o.preventDefault();let r=e[Et].state;n(e.getAttribute("href"),e[Et])}})}function Ea(e){return i.route.prefix[0]!=="#"&&e.getAttribute("href")?.includes("#")&&e.origin===C.location.origin&&e.pathname===C.location.pathname&&e.search===C.location.search}function $a(e,t){let n=di(e[0]);return new re(t.inline,t.component,t.tag,t?t.nesting+1:0,n?e.shift():void 0,e.length===1&&Array.isArray(e[0])?e[0]:e)}function di(e){return e!==null&&typeof e=="object"&&!(e instanceof re)&&!Array.isArray(e)&&!(e instanceof Date)&&!(e instanceof C.Node)&&!O(e.then)&&!(e instanceof String)&&!(e instanceof Number)}function Oa(e,t,n={},o={}){if(O(t)){if(!e)throw new Error("The dom element you tried to mount to does not exist.")}else if(o=n||{},n=t||{},t=e,e=q.body,!e)throw new Error("document.body does not exist.");if(!(t instanceof re)&&!I.call(t,Ye)&&(t=i(t)),I.call(o,"location")||(o.location=C.location),I.call(o,"error")||(o.error=i.error),i.is.server)return{view:t,attrs:n,context:o,unmount:Le};e[yr]=new Error().stack,i.scroll&&qa(o),La(e.firstChild,o,n);let r={head:o.hydrating?Le:ai,lang:i.live(q.documentElement.lang,d=>q.documentElement.lang=d),title:i.live(q.title,d=>q.title=d),status:Le,doctype:Le,headers:Le};o.doc=r,o.route=St(i,"",{doc:o.doc,location:o.location,query:i.route.query});let a={view:t,attrs:n,context:o};return Co.set(e,a),si(a,e),{view:t,attrs:n,context:o,unmount:()=>Co.delete(e)}}function qa(e){C.history.scrollRestoration="manual";let t=""in(history.state?.sinscroll||xt);t&&Qe(q.documentElement,history.state.sinscroll[""]);let n=e[un]={depth:0,callbacks:[],done:d=>n.depth!==-1&&(n.depth+=d)||(n.depth=0,a())},o;setTimeout(()=>{q.addEventListener("scroll",r,{passive:!0,capture:!0}),q.addEventListener("resize",r,{passive:!0,capture:!0}),t&&n.depth===0&&(n.depth=-1,Qt(q.documentElement,0,0))},200);function r(d){clearTimeout(o),o=setTimeout(Ra,100,d)}function a(){n.callbacks.forEach(d=>d()),Qt(q.documentElement,0,0)}}function Ra(e){let t=history.state?.sinscroll||{};e.type==="scroll"?Object.keys(t).forEach(o=>n(o?q.getElementById(o):q)):e.target===q?n(q):e.target.id&&n(e.target);function n(o){o&&(t[o===q?"":o.id]=[o.scrollLeft,o.scrollTop,o.scrollWidth,o.scrollHeight],i.route.state({sinscroll:t}))}}function ai(e){if(Array.isArray(e))return e.forEach(ai);let t=q.createElement(eo(e.tag));for(let n in e.attrs)t.setAttribute(n,e.attrs[n]);e.children.length&&(t.innerHTML=e.children[0]),q.head.appendChild(t)}function La(e,t,n){if(e){if(e.nodeType===8&&e.data==="h")e.remove(),t.hydrating=!0;else if(e.nodeType===1&&e.tagName==="SCRIPT"&&e.hasAttribute("h")){t.hydrating=!0;let d=JSON.parse(e.textContent);Object.assign(t,d.context),Object.assign(n,d.attrs)}}if(!t.hydrating)return;let o,r=[],a=q.createTreeWalker(q.body,NodeFilter.SHOW_COMMENT);for(;o=a.nextNode();)o.data===","&&r.push(o);r.forEach(d=>d.remove())}function fn(){return pn||(ni=C.requestAnimationFrame(ci),pn=i.is.server?_n:new Promise(e=>hn=e)),pn}function Ma(){return new Promise(e=>{let t=hn;hn=t?()=>(e(),t()):e,C.cancelAnimationFrame(ni),ci()})}function ci(){pn=null,Co.forEach(si),hn()}function si(e,t){Oo();try{e.doms=$t(t,Xt(e.view(e.attrs)),e.context,e.doms&&ct(e.doms.dom),e.doms&&e.doms.last)}catch(n){e.attrs.error=n,e.doms=$t(t,Xt(e.context.error(n,e.attrs,[],e.context)),e.context,e.doms&&ct(e.doms.dom),e.doms&&e.doms.last)}finally{qo()}}function Oo(){i.redrawing=!0}function qo(){je.forEach(e=>e()),je=[],i.redrawing=!1}function $t(e,t,n,o,r=e.lastChild){let a=t[0]&&t[0].key!==void 0&&new Array(t.length),d=U(o,e.firstChild),c=d&&I.call(d,ve),s=U(r,null);a&&(a.rev=new Map)&&c?Ba(e,n,d[ve],t,a,s,d):li(e,n,t,a,d,s);let l=U(o,e.firstChild);return a&&(l[ve]=a),Ie(l,s&&ct(s)||e.lastChild)}function U(e,t){let n=e?e.nextSibling:t;for(;Re.has(n);)n=n.nextSibling;return n}function ct(e,t){let n=e?e.previousSibling:t;for(;Re.has(n);)n=n.previousSibling;return n}function It(e,t,n,o){e[o]={dom:t,key:n},t[ve]=e,t[at]=o,e.rev.set(n,o)}function li(e,t,n,o,r,a=null){let d=0,c,s;for(;d<n.length;)(r===null||!Re.has(r))&&(s=n[d],c=r!==a?De(r,s,t,e):De(null,s,t),r===a&&e.insertBefore(c.dom,a),o&&It(o,c.first,s.key,d),r=c.last,d++),r!==null&&(r=U(r));for(;r&&r!==a;)r=We(r,e)}function Ba(e,t,n,o,r,a,d){let c=n.rev,s=new Set;for(let g of o){if(g&&g.key===void 0)return li(e,t,o,r,d,a);g&&s.add(g.key)}let l=n.length-1,u=o.length-1,h=n[l],p=o[u],f=-1;e:for(;;){if(p==null){p=o[--u];continue}for(;h&&!s.has(h.key);)We(h.dom,e),c.delete(h.key),h=n[--l];for(;h&&h.key===p.key;){if(a=De(h.dom,p,t,e).first,It(r,a,p.key,u),c.delete(p.key),u===0)break e;if(l===0){p=o[--u];break}h=n[--l],p=o[--u]}if(c.has(p.key)){if(f=c.get(p.key),f>u)f=De(n[f].dom,p,t,e),xo(e,f,a),a=f.first,It(r,a,p.key,u);else if(f!==u)f=De(n[f].dom,p,t,e),xo(e,f,a),a=f.first,It(r,a,p.key,u);else{h=n[--l];continue}if(c.delete(p.key),u===0)break;p=o[--u]}else{if(f=De(null,p,t),xo(e,f,a),a=f.first,It(r,a,p.key,u),u===0)break;p=o[--u]}}c.forEach(g=>We(n[g].dom,e))}function xo(e,{first:t,last:n},o){let r=t,a;do a=r,r=U(a);while(e.insertBefore(a,o)!==n)}function De(e,t,n,o,r,a,d){return de(t)?Na(e,t,n,o,r,a):O(t)?De(e,t(),n,o,r,a,d):t instanceof re?Qr(e,t,n,o,r,a):t instanceof Promise?Qr(e,i(()=>t)(),n,o,r,a):Array.isArray(t)?ui(e,t,n,o,a,d):t instanceof Node?ja(e,t,n):hi(e,t,o,a,void 0,d)}function ja(e,t,n){return e&&n.hydrating?Ie(e):Ie(t)}function Qr(e,t,n,o,r,a){return t.component?fi(e,t,n,o,r,a):Va(e,t,n,o,a)}function Na(e,t,n,o){if(e&&I.call(e,wo)&&e[wo].view===t)return a(t());let r=a(t());return Ot(e,t,a),r;function a(d){let c=i.redrawing,s=je;je=[],Oo();let l=De(e,d,n,o||e&&e.parentNode);return qo(),i.redrawing=c,je=s,e!==l.first&&Ot(l.first,t,a),e=l.first,l.first[wo]={view:t,doms:l},l}}function Ie(e,t=e,n=t){return{dom:e,first:t,last:n}}function Fa(e){if(!e||e.nodeType!==8||e.data.charCodeAt(0)!==91)return;let t=parseInt(e.data.slice(1)),n=e,o;for(;t&&(n=U(n));)n.nodeType===8?(o=n.data.charCodeAt(0),t+=o===91?parseInt(n.data.slice(1))-1:o===97?1:-1):t--;return mn(e,n),n}function mn(e,t){(t||e)[Io]=e,e[Do]=t}function pi(e){return e&&I.call(e,Do)?e[Do]:Fa(e)}function ui(e,t,n,o,r,a){r&&e&&o&&(e=ui(e,[],n,o).first);let d=pi(e)||e,c=hi(e,"["+t.length,o,!1,8,a);if(e!==c.dom&&(d=c.last),o){let s=U(d,null);$t(o,t,n,c.first,d);let l=ct(s,o.lastChild);return d!==l&&mn(c.first,l),Ie(c.dom,c.first,l)}return o=new DocumentFragment,o.appendChild(c.dom),$t(o,t,n,c.first,d),mn(c.first,o.lastChild),Ie(o,c.first,o.lastChild)}function hi(e,t,n,o,r=Jt(t)?8:3,a=!1){let d=o||!e||e.nodeType!==r;return e&&I.call(e,be)&&e[be]!==a&&bn(e),d&&vi(e,e=r===8?q.createComment(t):q.createTextNode(t),n),!d&&e.data!==""+t&&(e.data=t),Ie(e)}function Va(e,t,n,o,r){let a=n.NS,d=eo(t.tag),c=r===!0||e===null||Ha(e,t,n,d);(t.attrs.xmlns||_r[d])&&(n.NS=t.attrs.xmlns||_r[d]),c&&vi(e,e=Ua(t,n,d),o),d==="foreignObject"&&(n.NS="http://www.w3.org/1999/xhtml");let s=t.children&&t.children.length;return Ya(e,t,n,d),s?$t(e,t.children,n):e[Jr]&&Ga(e.firstChild,e),e[Jr]=s,n.NS=a,I.call(t,"key")&&(e[ti]=t.key),Ie(e)}function Ga(e,t){for(;e;)e=We(e,t)}function Ha(e,t,n,o){return e[ti]!==t.key&&!n.hydrating||(n.NS?e.nodeName!==o:e.nodeName.toLowerCase()!==(o.toLowerCase()||"div"))}function Ua(e,t,n){let o=e.attrs.is;return t.NS&&t.NS!=="http://www.w3.org/1999/xhtml"?o?q.createElementNS(t.NS,n,{is:o}):q.createElementNS(t.NS,n):o?q.createElement(n||"div",{is:o}):q.createElement(n||"div")}var zo=class{constructor(t,n,o,r,a,d,c,s){this.init=t,this.key=void 0,this.view=n,this.error=o,this.caught=void 0,this.loading=r,this.context=a,this.hydrating=d,this.onremoves=void 0,this.promise=void 0,this.stateful=void 0,this.next=void 0,this.ignore=!1,this.recreate=!1,this.attrs=vn(c),this.children=vn(s)}},Eo=class{constructor(){this.xs=[],this.i=0,this.top=0,this.bottom=0,this.dom=null}changed(t,n){if(this.i>=this.xs.length)return!0;let o=this.xs[this.i],r=o.key!==t.key&&!n.hydrating||o.init&&o.init!==t.component[0];return r&&o.onremoves&&o.onremoves.forEach(a=>a()),r}add(t,n,o){let r=this.i,[a,d]=t.component;o&&this.xs[this.i]&&(t.attrs=this.xs[this.i].attrs,t.children=this.xs[this.i].children);let c=new zo(t.inline?!1:a,a,d&&d.error||n.error,d&&d.loading||n.loading,d&&d.context||n.context,n.hydrating,t.attrs,t.children),s=(f,g,m)=>{if(this.xs.indexOf(c)===-1)return;Oo(),f instanceof Event&&(f.redraw=!1);let v=this.dom.first[ve],y=this.dom.first[at];this.i=this.bottom=r,fi(this.dom.first,t,n,this.dom.first.parentNode,this,g,m,!0),I.call(this.dom.first,ve)||(this.dom.first[ve]=v,this.dom.first[at]=y),v&&(v[y].dom=this.dom.first),this.i=this.bottom=0,qo()},l=i.event(f=>i.redrawing?requestAnimationFrame(l):s(f,!1,!1)),u=i.event(f=>{c.onremoves&&(c.onremoves.forEach(g=>g()),c.onremoves=void 0),s(f,!0)}),h=i.event(f=>{c.onremoves&&(c.onremoves.forEach(g=>g()),c.onremoves=void 0),s(f,!0,!0),c=this.xs[r]});c.context=Object.create(c.context||n,{hydrating:{value:n.hydrating,writable:!0},onremove:{value:f=>{sn(c,f)}},ignore:{value:f=>{c.ignore=f}},refresh:{value:h},redraw:{value:l},reload:{value:u}}),c.attrs[Ke]=t.attrs,c.children[Ke]=t.children;let p=mi(!0,c,t,c.attrs,c.children);return de(t.attrs.reload)&&sn(c,t.attrs.reload.observe(u)),de(t.attrs.redraw)&&sn(c,t.attrs.redraw.observe(l)),de(t.attrs.refresh)&&sn(c,t.attrs.refresh.observe(h)),c.promise=p&&O(p.then)&&p,c.stateful=c.promise||O(p)&&!p[Ye],c.view=c.promise?o?this.xs[this.i].view:c.loading:p,o||this.cut(),this.top=this.i,this.xs[this.i++]=c}next(t){let n=this.i<this.xs.length&&this.xs[this.top=this.i++];return n.attrs[Ke]=t.attrs,n.children[Ke]=t.children,n}pop(){return--this.i!==this.bottom?!1:(this.cut(this.top+1),!0)}cut(t=this.i){for(let n=t;n<this.xs.length;n++)this.xs[n].onremoves&&this.xs[n].onremoves.forEach(o=>o());this.xs.length=t}};function sn(e,t){e.onremoves?e.onremoves.add(t):e.onremoves=new Set([t])}function Ka(e){let t="/"+e.data,n=U(e);for(;n&&(n.nodeType!==8||n.data!==t);)n=U(n);let o=Ie(U(e),U(e),ct(n));if(I.call(n,Io)&&mn(n[Io],ct(n)),I.call(e,be)&&(o.first[be]=e[be]),I.call(e,ve)){let r=e[ve],a=e[at];o.first[ve]=r,o.first[at]=a,r[e[at]].dom=o.first}return e.remove(),n.remove(),o}function Wa(e){let t="/"+e.data,n=U(e);for(;n&&(n.nodeType!==8||n.data!==t);)n=U(n);return Ie(e,e,n)}function fi(e,t,n,o,r=e&&e[be]||new Eo,a=r.changed(t,n),d=!1,c=!1){let s=a?r.add(t,n,d):r.next(t);if(!a&&s.ignore&&!c)return r.pop(),r.dom;t.key!==void 0&&(a||n.hydrating)&&(s.key=t.key);let l=s.promise&&e&&e.nodeType===8&&e.data.charCodeAt(0)===97;if(l)s.next=Wa(e);else{let h=mi(a,s,d?s.view:t,s.attrs,s.children);h&&I.call(h,Ye)&&(h=h(t.attrs,t.children,s.context)),s.next=De(e,!s.caught&&!s.promise&&h instanceof re||d?Tr(h,t):h,s.context,o,r,(a||s.recreate)&&!s.hydrating&&!d?!0:void 0,r),s.hydrating&&(s.hydrating=s.context.hydrating=!1),s.recreate&&(s.recreate=!1)}if(a&&s.promise){let h=r.i-1;n[un].done(1),s.promise.then(p=>s.view=p&&I.call(p,"default")?p.default:p).catch(p=>{s.caught=p,s.view=gi(s,t,p)}).then(()=>I.call(s.next.first,be)&&r.xs[h]===s&&(l&&(r.dom=Ka(e)),n.hydrating=!1,s.recreate=!d,s.promise=!1,s.context.redraw(),n[un].done(-1)))}let u=e!==s.next.first;return r.pop()&&(u||a)&&(r.dom=s.next,s.next.first[be]=r),s.next}function mi(e,t,n,o,r){try{return t.stateful||e?O(t.view)&&!t.view[Ye]?t.view(o,r,t.context):t.view:n.component[0](o,r,t.context)}catch(a){return gi(t,n,a)}}function gi(e,t,n){return I.call(e.error,Ye)?e.error().component[0](n,t.attrs,t.children,e.context):e.error(n,t.attrs,t.children,e.context)}function Ya(e,t,n,o){let r=t.tag,a,d=e[Et]||n.hydrating&&_a(e)||void 0,c=!d;if(c&&I.call(t.attrs,"id")===!1){let l=Sr(t.tag);l&&(e.id=l)}ko(e,t),c&&Ot(e,t.attrs.class,()=>ko(e,t)),c&&Ot(e,t.attrs.className,()=>ko(e,t)),t.attrs.type!=null&&gn(e,"type",t.attrs.type);for(let l in t.attrs)Qn(l)?l==="deferrable"&&(e[To]=t.attrs[l]):(!d||d[l]!==t.attrs[l])&&Ue(e,t.attrs,l,d&&d[l],t.attrs[l],c,n);if(I.call(t.attrs,"value"))if(!d&&o==="input"&&e.value!==""+t.attrs.value){let l,u;e===q.activeElement&&(l=e.selectionStart,u=e.selectionEnd),Ue(e,t.attrs,"value",e.value,t.attrs.value,c,n),e===q.activeElement&&(e.selectionStart!==l||e.selectionEnd!==u)&&e.setSelectionRange(l,u)}else(!d||d.value!==t.attrs.value)&&Ue(e,t.attrs,"value",d&&d.value,t.attrs.value,c,n);if(o==="option"&&!c&&I.call(t.attrs,"selected")&&e.selected!==t.attrs.selected&&Ue(e,t.attrs,"selected",e.selected,t.attrs.selected,c,n),I.call(t.attrs,"srcset")&&d?.srcset!==t.attrs.srcset&&Ue(e,t.attrs,"srcset",d?.srcset,t.attrs.srcset,c,n),I.call(t.attrs,"src")&&d?.src!==t.attrs.src&&Ue(e,t.attrs,"src",d?.src,t.attrs.src,c,n),I.call(t.attrs,"href")&&(n.hydrating||!d||d.href!==t.attrs.href)){a=t.attrs.href;let l=!String(a).match(/^([a-z]+:|\/\/)/)&&!t.attrs.target&&!t.attrs.download;l&&(a=kt(t.attrs.href)),Ue(e,t.attrs,"href",d&&d.href,a,c,n),a&&l&&(t.attrs.href=i.route.prefix+a,za(e,t.attrs,n.route))}if(d)for(let l in d)I.call(t.attrs,l)===!1&&(Jn(l)?bi(e,l):Qn(l)?l==="deferrable"&&(e[To]=!1):e.removeAttribute(l));Xa(e,t.attrs.data,d&&d.data);let s=Ja(e,t.attrs.style,d&&d.style);if(r)for(ei(e,r.vars,r.args,c||n.hydrating,s);r=r.parent;)ei(e,r.vars,r.args,c||n.hydrating,s);t.attrs.dom&&(c||n.hydrating?Za(e,e[Xr]=vn(t.attrs),e[Zr]=vn(t.children),n,t.attrs.dom):(e[Xr][Ke]=t.attrs,e[Zr][Ke]=t.children)),e[Et]=t.attrs,c&&e.id&&e.id in(history.state?.sinscroll||xt)&&je.push(()=>Qe(e,history.state?.sinscroll?.[e.id],n[un]))}function _a(e){if(!e||!e.hasAttributes())return;let t={};for(let n of e.attributes)t[n.name]=n.value||!0;return t}function Ja(e,t,n){if(t==null)return t!==n&&(e.style.cssText="",!0);if(typeof t!="object")return t!==n&&(e.style.cssText=t,!0);if(n==null||typeof n!="object"){e.style.cssText="";for(let o in t){let r=t[o];r!=null&&e.style.setProperty(Zt(o),r+"")}return!0}for(let o in t){let r=t[o];r!=null&&(!n||(r=r+"")!=n[o]+"")&&e.style.setProperty(Zt(o),r)}for(let o in n)n[o]!=null&&t[o]==null&&e.style.removeProperty(Zt(o));return!0}function Xa(e,t,n){for(let o in t){let r=t[o];r!=null&&(!n||(r=r+"")!=n[o]+"")&&(e.dataset[o]=r)}for(let o in n)n[o]!=null&&t[o]==null&&delete e.dataset[o]}function Ot(e,t,n){if(!de(t))return;let o=I.call(e,Pt),r=o?e[Pt]:new Set;o||(e[Pt]=r),r.add(t.observe(n))}function ko(e,t){let n=Cr(t),o=I.call(e,yo)&&e[yo]||"";if(n!==o){e[yo]=n;for(let r of o&&o.split(" "))r&&e.classList.remove(r);for(let r of n&&n.split(" "))r&&e.classList.add(r)}}function ei(e,t,n,o,r){for(let a in t){let d=t[a],c=n[d.index];$o(e,a,c,d,o,r)}}function $o(e,t,n,o,r,a,d){if(de(n)){r&&n.observe(c=>So(e,t,c,o)),(r||a)&&$o(e,t,n(),o,r,r);return}if(O(n))return _n.then(()=>$o(e,t,n(e),o,r,a,d));So(e,t,n,o),d&&je.push(()=>So(e,t,n,o))}function So(e,t,n,o){I.call(o,"property")?e.style.setProperty(t,Wr(n,o)):n?e.setAttribute(t,""):e.removeAttribute(t)}function Za(e,t,n,o,r){je.push(()=>{Xt(r).forEach(async a=>{let d=O(a)&&a(e,t,n,o);d&&O(d.then)&&(d=await d,fn()),O(d)&&(I.call(e,zt)?e[zt].push(d):e[zt]=[d])},[])})}function Ue(e,t,n,o,r,a,d){if(o===r)return;let c=Jn(n);c&&typeof o==typeof r||(c?r?ec(e,t,n,d):bi(e,n):(gn(e,n,r),a&&Ot(e,r,s=>gn(e,n,s))))}function gn(e,t,n){if(n==null&&(n=""),O(n))return gn(e,t,n());Qa(e,t)?e[t]=n:!n&&n!==0?e.removeAttribute(t):e.setAttribute(t,n===!0?"":n)}function Qa(e,t){return!(e instanceof SVGElement)&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="width"&&t!=="height"&&t in e}function bi(e,t){e.removeEventListener(t.slice(2),e[Ao])}function ec(e,t,n,o){e.addEventListener(n.slice(2),e[Ao]||(e[Ao]=tc(e,t,o)))}function tc(e,...t){return{handleEvent:n=>Ro(e[Et]["on"+n.type],n,e,...t)}}function Ro(e,t,...n){if(Array.isArray(e))return e.forEach(r=>Ro(r,t,...n));let o=O(e)?e.call(t.currentTarget,t,...n):O(e.handleEvent)&&e.handleEvent(t,...n);if(t.redraw===!1){delete t.redraw;return}!de(o)&&!de(e)&&fn(),o&&O(o.then)&&o.then(fn)}function vi(e,t,n){if(n)return e&&(n.insertBefore(t,e),We(e,n)),t}function nc(e,t,n,o,r){let a=pi(e);if(!a||e===a)return U(e);let d=U(a);if(e=U(e),!e)return d;do e=We(e,t,n,o,r);while(e&&e!==d);return d}function ln(e,t){bn(t),e.removeChild(t)}function bn(e){I.call(e,be)&&e[be].cut(),I.call(e,Pt)&&e[Pt].forEach(t=>t())}function We(e,t,n=!0,o=[],r=!1){let a=e.nextSibling;if(Re.has(e))return a;if(e.nodeType===8)if(e.data.charCodeAt(0)===97){if(a=U(e),ln(t,e),!a)return a;e=a,a=U(e)}else e.data.charCodeAt(0)===91&&(a=nc(e,t,n,o,r));if(e.nodeType!==1)return n?ln(t,e):bn(e),a;if(I.call(e,zt))for(let c of e[zt])try{let s=c(r||n);(r||n)&&s&&O(s.then)&&o.push(s)}catch(s){console.error(s)}!r&&(r=e[To]||!1);let d=e.firstChild;for(;d;)We(d,e,!1,o,r),d=U(d);return n?o.length===0?ln(t,e):(Re.add(e),Promise.all(o.map(c=>c.catch(console.error))).then(()=>ln(t,e))):bn(e),a}function oc(e=[],...t){return i.css`
    *,*::before,*::after{box-sizing border-box}
    input,button,textarea,select{font inherit;tt none}
    *{m 0;p 0;overflow-wrap break-word;hyphens auto}
    html{ff system-ui, sans-serif}
    p{lh 1.5}
    img,svg,video,canvas,audio,iframe,embed,object{d block;va middle}
    img,video{max-width 100%;h auto}
    ol,ul,li{list-style none}
    body{min-height 100svh}
    body{-webkit-font-smoothing:antialiased;text-rendering: optimizeLegibility;}
  `,i.css`
    img,video{background-repeat no-repeat;background-size cover;object-fit cover;shape-margin 0.75rem}
    button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance button;bc transparent;bi none}
    button,input,optgroup,select,textarea{c inherit}
    :target{scroll-margin-block 5ex}
  `,i.css(e,...t)}function vn(e){return new Proxy(e,{get:(t,n)=>e[n],set:(t,n,o)=>n===Ke&&e!==o?e=o:!0})}function W(e,t){let n={value:e,binding:void 0,unobserve:void 0};return t.onremove(()=>n.unobserve&&n.unobserve()),n}function Y(e,t,n){e.binding!==t&&(e.unobserve&&e.unobserve(),e.binding=t,e.unobserve=Lo(t)?t.observe(n.redraw):void 0)}function M(e,t,n){return Lo(t)?t():n===void 0?e.value:n}function F(e,t,n,o,r){Lo(t)?t(o):n===void 0&&(e.value=o,r.redraw())}function D(e,t,...n){rc(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function rc(e){return e==null?[]:Array.isArray(e)?e:[e]}function Lo(e){return typeof e=="function"&&typeof e.observe=="function"}var Bo=Symbol("sinewy-split-panel"),yi=Symbol("sinewy-split-panel-ids"),ic=i`div
  position relative
  display grid
  min-width 0
  min-height 0
  grid-template-columns minmax(0, var(--split-start, 1fr)) var(--divider-width, 4px) minmax(0, var(--split-end, 1fr))
  grid-template-rows minmax(0, 1fr)
  &[data-orientation='vertical'] {
    grid-template-columns minmax(0, 1fr)
    grid-template-rows minmax(0, var(--split-start, 1fr)) var(--divider-width, 4px) minmax(0, var(--split-end, 1fr))
  }
`,dc=i`div
  min-width 0
  min-height 0
  overflow hidden
`,ac=i`div
  position relative
  display flex
  align-items center
  justify-content center
  min-width 0
  min-height 0
  touch-action none
  user-select none
  cursor col-resize
  z-index 1
  outline-offset 2px
  &[data-split-divider][data-pointer-focus]:focus-visible { outline none }
  &[aria-orientation='horizontal'] { cursor row-resize }
  &[aria-disabled='true'] { cursor default }
  &::before {
    content ''
    position absolute
    top 0
    bottom 0
    left 50%
    width max(100%, var(--divider-hit-area, 12px))
    transform translateX(-50%)
  }
  &[aria-orientation='horizontal']::before {
    left 0
    right 0
    top 50%
    bottom auto
    width auto
    height max(100%, var(--divider-hit-area, 12px))
    transform translateY(-50%)
  }
`,cc=i`div
  position absolute
  pointer-events none
  visibility hidden
  overflow hidden
  contain strict
  top 0
  left 0
  height 0
  > div { position absolute; top 0; left 0; height 0 }
`,sc=i`div
  width clamp(0px, var(--min, 0px), 100%)
`,lc=i`div
  width clamp(0px, var(--max, 100%), 100%)
`,wn=i((e,[],t)=>{let n=e.id||fc(t),o={attrs:e,root:null,divider:null,limits:null,panes:{},ids:{start:n+"-start",end:n+"-end"},percent:qt(e.defaultPosition,50),pixels:e.defaultPositionInPixels,size:0,low:0,high:0,frame:0,pending:null,pointer:null,restore:null,input:void 0,binding:void 0,unobserve:void 0,disposed:!1},r=Object.create(t);return r[Bo]=o,o.schedule=()=>{!o.root||o.frame||o.disposed||(o.frame=o.root.ownerDocument.defaultView.requestAnimationFrame(()=>{o.frame=0,yn(o);let a=o.pending;o.pending=null,a&&Si(o,a)}))},o.cancel=a=>{a&&o.pointer!==a.pointerId||(o.pending=null,o.pointer!==null&&o.divider?.hasPointerCapture(o.pointer)&&o.divider.releasePointerCapture(o.pointer),o.pointer=null,o.root?.removeAttribute("data-dragging"))},t.onremove(()=>{o.disposed=!0,o.cancel(),o.unobserve?.(),o.frame&&o.root?.ownerDocument.defaultView.cancelAnimationFrame(o.frame)}),({position:a,positionInPixels:d,defaultPosition:c,defaultPositionInPixels:s,bind:l,orientation:u="horizontal",primary:h,disabled:p=!1,snap:f,snapThreshold:g=12,onreposition:m,dom:v,data:y,style:x,...w},k)=>{if(u!=="horizontal"&&u!=="vertical")throw new TypeError("Invalid SplitPanel orientation");if(h!=null&&h!=="start"&&h!=="end")throw new TypeError("Invalid SplitPanel primary");o.attrs={position:a,positionInPixels:d,bind:l,orientation:u,primary:h,disabled:p,snap:f,snapThreshold:g,onreposition:m},p&&o.cancel(),l!==o.binding&&(o.unobserve?.(),o.binding=l,o.unobserve=l?.observe(o.schedule));let b=jo(o);b&&(b.key!==o.input?.key||b.value!==o.input?.value)&&(o.input=b,b.key==="px"?o.pixels=b.value:(o.percent=b.value,o.pixels=void 0)),o.schedule();let S=o.pixels!=null?o.pixels+"px":`calc((100% - var(--divider-width, 4px)) * ${Rt(o.percent,0,100)} / 100)`;return ic`
      --split-start ${h==="end"?"1fr":S}
      --split-end ${h==="end"?S:"1fr"}
    `({...w,style:x,data:{...y,splitPanel:"",orientation:u},dom:[j=>{o.root=j;let N=new ResizeObserver(o.schedule);return N.observe(j),o.divider&&N.observe(o.divider),o.schedule(),()=>N.disconnect()},...No(v)]},i({context:r},()=>k),cc({"aria-hidden":"true",dom:j=>{o.limits=j}},sc(),lc()))}});function wi(e){return i(({dom:t,data:n,id:o,...r},a,d)=>{let c=Ci(d);return o&&(c.ids[e]=o),dc({...r,id:c.ids[e],data:{...n,["split"+(e==="start"?"Start":"End")]:""},dom:[s=>{c.panes[e]=s,c.schedule()},...No(t)]},a)})}wn.Start=wi("start");wn.End=wi("end");wn.Divider=i(({dom:e,data:t,onkeydown:n,onblur:o,onpointerdown:r,onpointermove:a,onpointerup:d,onpointercancel:c,onlostpointercapture:s,...l},u,h)=>{let p=Ci(h),f=p.attrs,g=(m,v)=>(y,...x)=>{D(m,y,...x),y.defaultPrevented||v(y),!m&&!p.attrs.onreposition&&(y.redraw=!1)};return ac({...l,role:"separator",tabindex:f.disabled?-1:0,"aria-label":l["aria-label"]||(l["aria-labelledby"]?void 0:"Resize panels"),"aria-orientation":f.orientation==="vertical"?"horizontal":"vertical","aria-controls":p.ids[f.primary||"start"],"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":p.percent,"aria-disabled":String(f.disabled),data:{...t,splitDivider:""},dom:[m=>{p.divider=m,p.schedule()},...No(e)],onkeydown:g(n,m=>{hc(p,m)&&p.divider.removeAttribute("data-pointer-focus")}),onblur:g(o,()=>p.divider.removeAttribute("data-pointer-focus")),onpointerdown:g(r,m=>{if(!(p.attrs.disabled||m.button!==0||!m.isPrimary)){m.preventDefault(),m.stopPropagation(),p.divider.setAttribute("data-pointer-focus",""),p.divider.focus({preventScroll:!0}),yn(p),p.pointer=m.pointerId;try{p.divider.setPointerCapture(m.pointerId)}catch(v){if(v.name!=="NotFoundError")throw v}p.root.setAttribute("data-dragging","")}}),onpointermove:g(a,m=>{p.pointer===m.pointerId&&(p.pending=m,p.schedule())}),onpointerup:g(d,m=>{p.pointer===m.pointerId&&(yn(p),Si(p,m),p.cancel())}),onpointercancel:g(c,p.cancel),onlostpointercapture:g(s,p.cancel)},u)});function yn(e){if(!e.root||!e.divider||!e.limits)return;let t=e.attrs.orientation==="vertical",n=getComputedStyle(e.root),o=t?e.root.clientHeight:e.root.clientWidth,r=t?parseFloat(n.paddingTop)+parseFloat(n.paddingBottom):parseFloat(n.paddingLeft)+parseFloat(n.paddingRight),a=t?e.divider.offsetHeight:e.divider.offsetWidth,d=Math.max(0,o-r-a);if(!d)return;e.limits.style.width=d+"px";let[c,s]=e.limits.children;e.high=Rt(s.getBoundingClientRect().width,0,d),e.low=Rt(c.getBoundingClientRect().width,0,e.high);let l=jo(e),u;l?.key==="px"?u=l.value:l&&(!e.attrs.primary||l.value!==e.percent)?u=d*l.value/100:e.pixels!=null&&(!e.size||e.attrs.primary)?u=e.pixels:u=d*e.percent/100;let h=e.pixels,p=e.size;e.size=d,xi(e,Rt(u,e.low,e.high)),p&&(p!==d||h!==e.pixels)&&(e.attrs.bind&&e.attrs.bind()!==e.percent&&e.attrs.bind(e.percent),pc(e,void 0,"resize"))}function xi(e,t){e.pixels=t,e.percent=t/e.size*100;let n=e.attrs.primary==="end";e.root.style.setProperty("--split-start",n?"1fr":t+"px"),e.root.style.setProperty("--split-end",n?t+"px":"1fr"),e.divider.setAttribute("aria-valuenow",String(Mo(e.percent))),e.divider.setAttribute("aria-valuemin",String(Mo(e.low/e.size*100))),e.divider.setAttribute("aria-valuemax",String(Mo(e.high/e.size*100))),e.divider.setAttribute("aria-controls",e.ids[n?"end":"start"]),e.panes.start&&(e.panes.start.inert=(n?e.size-t:t)<.5),e.panes.end&&(e.panes.end.inert=(n?t:e.size-t)<.5)}function ki(e,t,n){if(!e.size||e.attrs.disabled)return;let o=Rt(t,e.low,e.high),r=o/e.size*100;Math.abs(o-e.pixels)<.001||(e.attrs.bind&&e.attrs.bind(r),(e.attrs.bind||!jo(e))&&xi(e,o),e.attrs.onreposition?.({position:r,positionInPixels:o,source:n.type.startsWith("pointer")?"pointer":"keyboard"},n))}function pc(e,t,n){e.attrs.onreposition?.({position:e.percent,positionInPixels:e.pixels,source:n},t)}function Si(e,t){if(!e.size)return;let n=e.root.getBoundingClientRect(),o=e.attrs.orientation==="vertical",r=!o&&getComputedStyle(e.root).direction==="rtl",a=o?e.divider.offsetHeight:e.divider.offsetWidth,d=getComputedStyle(e.root),c=(o?t.clientY-n.top-e.root.clientTop-parseFloat(d.paddingTop):t.clientX-n.left-e.root.clientLeft-parseFloat(d.paddingLeft))-a/2;r&&(c=e.size-c),e.attrs.primary==="end"&&(c=e.size-c),e.restore=null,ki(e,uc(e,c),t)}function uc(e,t){let{snap:n,snapThreshold:o=12}=e.attrs;if(typeof n=="function"){let d=n({positionInPixels:t,size:e.size,snapThreshold:o});return Number.isFinite(d)?d:t}let r=t,a=1/0;for(let d of String(n||"").trim().split(/\s+/)){let c=/^(repeat\()?([\d.]+)(px|%)(\))?$/.exec(d);if(!c||!!c[1]!=!!c[4])continue;let s=Number(c[2])*(c[3]==="%"?e.size/100:1);if(!Number.isFinite(s)||s<=0&&c[1])continue;c[1]&&(s*=Math.round(t/s));let l=Math.abs(s-t);l<=o&&l<a&&(r=s,a=l)}return r}function hc(e,t){if(e.attrs.disabled||t.altKey||t.ctrlKey||t.metaKey)return;let n=e.attrs.orientation==="vertical",o=n?"ArrowUp":"ArrowLeft";if(![o,n?"ArrowDown":"ArrowRight","Home","End","Enter"].includes(t.key))return;t.preventDefault(),t.stopPropagation(),yn(e);let a=e.pixels;if(t.key==="Home")a=e.low;else if(t.key==="End")a=e.high;else if(t.key==="Enter")e.restore!=null?(a=e.restore,e.restore=null):(e.restore=a,a=e.low);else{e.restore=null;let d=t.key===o?-1:1;!n&&getComputedStyle(e.root).direction==="rtl"&&(d*=-1),e.attrs.primary==="end"&&(d*=-1),a+=d*e.size*(t.shiftKey?.1:.01)}return ki(e,a,t),!0}function jo(e){let{bind:t,positionInPixels:n,position:o}=e.attrs;return t?{key:"%",value:qt(t(),50)}:n!==void 0?{key:"px",value:qt(n,0)}:o!==void 0?{key:"%",value:qt(o,50)}:null}function Ci(e){if(!e[Bo])throw new Error("SplitPanel parts must be inside SplitPanel");return e[Bo]}function fc(e){let t=e,n;for(;(n=Object.getPrototypeOf(t))&&n!==Object.prototype;)t=n;let o=t[yi]||(t[yi]={value:0});return"sinewy-split-panel-"+ ++o.value}function qt(e,t){return Number.isFinite(e)?e:t}function Rt(e,t,n){return Math.max(t,Math.min(n,qt(e,t)))}function Mo(e){return Math.round(e*1e3)/1e3}function No(e){return e==null?[]:Array.isArray(e)?e:[e]}var Lt=wn;var Ti={gray:["#fcfcfc #111111","#f9f9f9 #191919","#f0f0f0 #222222","#e8e8e8 #2a2a2a","#e0e0e0 #313131","#d9d9d9 #3a3a3a","#cecece #484848","#bbbbbb #606060","#8d8d8d #6e6e6e","#838383 #7b7b7b","#646464 #b4b4b4","#202020 #eeeeee"],indigo:["#fdfdfe #11131f","#f7f9ff #141726","#edf2fe #182449","#e1e9ff #1d2e62","#d2deff #253974","#c1d0ff #304384","#abbdf9 #3a4f97","#8da4ef #435db1","#3e63dd #3e63dd","#3358d4 #5472e4","#3a5bc7 #9eb1ff","#1f2d5c #d6e1ff"],blue:["#fbfdff #0d1520","#f4faff #111927","#e6f4fe #0d2847","#d5efff #003362","#c2e5ff #004074","#acd8fc #104d87","#8ec8f6 #205d9e","#5eb1ef #2870bd","#0090ff #0090ff","#0588f0 #3b9eff","#0d74ce #70b8ff","#113264 #c2e6ff"],cyan:["#fafdfe #0b161a","#f2fafb #101b20","#def7f9 #082c36","#caf1f6 #003848","#b5e9f0 #004558","#9ddde7 #045468","#7dcedc #12677e","#3db9cf #11809c","#00a2c7 #00a2c7","#0797b9 #23afd0","#107d98 #4ccce6","#0d3c48 #b6ecf7"],teal:["#fafefd #0d1514","#f3fbf9 #111c1b","#e0f8f3 #0d2d2a","#ccf3ea #023b37","#b8eae0 #084843","#a1ded2 #145750","#83cdc1 #1c6961","#53b9ab #207e73","#12a594 #12a594","#0d9b8a #0eb39e","#008573 #0bd8b6","#0d3d38 #adf0dd"],green:["#fbfefc #0e1512","#f4fbf6 #121b17","#e6f6eb #132d21","#d6f1df #113b29","#c4e8d1 #174933","#adddc0 #20573e","#8eceaa #28684a","#5bb98b #2f7c57","#30a46c #30a46c","#2b9a66 #33b074","#218358 #3dd68c","#193b2d #b1f1cb"],amber:["#fefdfb #16120c","#fefbe9 #1d180f","#fff7c2 #302008","#ffee9c #3f2700","#fbe577 #4d3000","#f3d673 #5c3d05","#e9c162 #714f19","#e2a336 #8f6424","#ffc53d #ffc53d","#ffba18 #ffd60a","#ab6400 #ffca16","#4f3422 #ffe7b3"],orange:["#fefcfb #17120e","#fff7ed #1e160f","#ffefd6 #331e0b","#ffdfb5 #462100","#ffd19a #562800","#ffc182 #66350c","#f5ae73 #7e451d","#ec9455 #a35829","#f76b15 #f76b15","#ef5f00 #ff801f","#cc4e00 #ffa057","#582d1d #ffe0c2"],red:["#fffcfc #191111","#fff7f7 #201314","#feebec #3b1219","#ffdbdc #500f1c","#ffcdce #611623","#fdbdbe #72232d","#f4a9aa #8c333a","#eb8e90 #b54548","#e5484d #e5484d","#dc3e42 #ec5d5e","#ce2c31 #ff9592","#641723 #ffd1d9"],crimson:["#fffcfd #191114","#fef7f9 #201318","#ffe9f0 #381525","#fedce7 #4d122f","#facedd #5c1839","#f3bed1 #6d2545","#eaacc3 #873356","#e093b2 #b0436e","#e93d82 #e93d82","#df3478 #ee518a","#cb1d63 #ff92ad","#621639 #fdd3e8"],pink:["#fffcfe #191117","#fef7fb #21121d","#fee9f5 #37172f","#fbdcef #4b143d","#f6cee7 #591c47","#efbfdd #692955","#e7acd0 #833869","#dd93c2 #a84885","#d6409f #d6409f","#cf3897 #de51a8","#c2298a #ff8dcc","#651249 #fdd1ea"],purple:["#fefcfe #18111b","#fbf7fe #1e1523","#f7edfe #301c3b","#f2e2fc #3d224e","#ead5f9 #48295c","#e0c4f4 #54346b","#d1afec #664282","#be93e4 #8457aa","#8e4ec6 #8e4ec6","#8347b9 #9a5cd0","#8145b5 #d19dff","#402060 #ecd9fa"]},mc={accent:"indigo"},gc={amber:"#21201c"},bc=[1,2,3,4,7,8,9,10,11,12],Lp=Object.freeze(["gray","accent","red","orange","amber","green","teal","cyan","blue","indigo","purple","pink","crimson"]);function $(e,t){let n=mc[e]||e,o=Ti[n];if(!o)return t;let r=Object.fromEntries(bc.map(a=>[`--sinewy-accent-${a}`,Ai(o[a-1])]));return r["--sinewy-accent-contrast"]=gc[n]||"white",r["--sinewy-panel"]="light-dark(#fff, #191919)",[1,2,3,4,6,7,8,9,11,12].forEach(a=>{r[`--sinewy-neutral-${a}`]=Ai(Ti.gray[a-1])}),r["--sinewy-extreme"]="light-dark(#000, #fff)",{...r,...t}}function Ai(e){let[t,n]=e.split(" ");return`light-dark(${t}, ${n})`}var vc=Lt.Divider`
  background $sinewy-neutral-6
  color $sinewy-neutral-10
  &:hover:not([aria-disabled='true']) { background $sinewy-accent-7 }
  &:focus-visible { outline 2px solid $sinewy-accent-9; outline-offset 1px; z-index 2 }
  &:active:not([aria-disabled='true']) { background $sinewy-accent-9 }
  @media (forced-colors: active) { background CanvasText; color CanvasText }
`,xn=i(({color:e="accent",style:t,...n},o)=>Lt({...n,style:$(e,t)},o));xn.Start=Lt.Start;xn.End=Lt.End;xn.Divider=i((e,t)=>vc(e,t));var ye=xn;var Di=Symbol("sinewy-toast"),yc=i`div
  pointer-events auto
  min-width 0
`,wc=i`div
  position fixed
  inset-inline-end 16px
  bottom max(16px, env(safe-area-inset-bottom))
  width min(360px, calc(100vw - 32px))
  display flex
  flex-direction column
  gap 8
  z-index 1000
  pointer-events none
  &[data-position='bottom-start'] { inset-inline-start 16px; inset-inline-end auto }
  &[data-position='top-end'] { top max(16px, env(safe-area-inset-top)); bottom auto }
  &[data-position='top-start'] {
    top max(16px, env(safe-area-inset-top))
    bottom auto
    inset-inline-start 16px
    inset-inline-end auto
  }
`,Fo=i(({defaultOpen:e=!0},[],t)=>{let n=W(!!e,t),o=Object.create(t),r={},a,d,c=0,s=5e3,l=5e3,u=!1,h=!1,p=!1,f,g=new Set;function m(){d!==void 0&&(clearTimeout(d),d=void 0,s=Math.max(0,s-(performance.now()-c)))}function v(){!a||!u||!l||h||g.size||d!==void 0||p||(c=performance.now(),d=setTimeout(()=>{d=void 0,s=0,h=!0,x()},s))}function y(w,k){m(),k?g.add(w):g.delete(w),v()}function x(w){u&&(F(n,r.bind,r.open,!1,t),r.onopenchange?.(!1,w),r.onopenchange&&i.redraw())}return o[Di]={dismiss:x},t.onremove(()=>{p=!0,m()}),({open:w,defaultOpen:k,bind:b,duration:S=5e3,onopenchange:P,dom:j,data:N,onpointerenter:xe,onpointerleave:Z,onfocusin:X,onfocusout:Ve,onkeydown:vt,...Ge},Ze)=>{r={open:w,bind:b,onopenchange:P},Y(n,b,t);let yt=!!M(n,b,w),Kt=Number.isFinite(S)&&S>=0?S:5e3;if((yt!==u||Kt!==l)&&(m(),s=l=Kt,h=!1,u=yt),!u)return null;v();let wt=(_,ie)=>(me,...Wt)=>{D(_,me,...Wt),me.defaultPrevented||ie(me),!_&&me.redraw===void 0&&(me.redraw=!1)};return yc({...Ge,"aria-atomic":"true",data:{...N,toast:"",state:"open"},dom:[_=>{a=_;let ie=_.ownerDocument,me=ie.defaultView;f=ie.activeElement,g.clear(),ie.hasFocus()||g.add("window"),ie.hidden&&g.add("hidden");let Wt=()=>y("window",!0),gr=()=>y("window",!1),br=()=>y("hidden",ie.hidden);return me.addEventListener("blur",Wt),me.addEventListener("focus",gr),ie.addEventListener("visibilitychange",br),v(),()=>{let Hd=_.contains(ie.activeElement),vr=f;m(),a=void 0,me.removeEventListener("blur",Wt),me.removeEventListener("focus",gr),ie.removeEventListener("visibilitychange",br),g.clear(),Hd&&queueMicrotask(()=>{vr?.isConnected&&ie.activeElement===ie.body&&vr.focus({preventScroll:!0})})}},...xc(j)],onpointerenter:wt(xe,_=>_.pointerType!=="touch"&&y("hover",!0)),onpointerleave:wt(Z,()=>y("hover",!1)),onfocusin:wt(X,()=>y("focus",!0)),onfocusout:wt(Ve,_=>!a?.contains(_.relatedTarget)&&y("focus",!1)),onkeydown:wt(vt,_=>{_.key==="Escape"&&(_.preventDefault(),_.stopPropagation(),x(_),_.redraw=!0)})},i({context:o},()=>Ze))}});Fo.Viewport=i(({position:e="bottom-end",data:t,...n},o)=>{if(!["bottom-end","bottom-start","top-end","top-start"].includes(e))throw new TypeError("Invalid Toast.Viewport position");return wc({...n,role:"status","aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":n["aria-label"]||"Notifications",data:{...t,toastViewport:"",position:e}},o)});Fo.Close=i(({onclick:e,type:t="button",...n},o,r)=>{let a=r[Di];if(!a)throw new Error("Toast.Close must be inside Toast");return i`button`({...n,type:t,"aria-label":n["aria-label"]||"Dismiss notification",onclick:(d,...c)=>{D(e,d,...c),!d.defaultPrevented&&!n.disabled&&a.dismiss(d)}},o.length?o:"\xD7")});function xc(e){return e==null?[]:Array.isArray(e)?e:[e]}var kn=Fo;var kc=kn`
  display flex
  align-items center
  gap 12
  padding 12 14
  border 1px solid $sinewy-neutral-6
  border-radius 9
  background $sinewy-panel
  color $sinewy-neutral-12
  box-shadow 0 4px 20px rgb(0 0 0 / .09)
  font-family inherit
  font-size 13
  line-height 1.5
  overflow-wrap anywhere
  @media (forced-colors: active) { border-color CanvasText; background Canvas; color CanvasText }
`,Sc=kn.Close`
  display inline-flex
  align-items center
  justify-content center
  flex-shrink 0
  width 26
  height 26
  margin-inline-start auto
  padding 0
  border 0
  border-radius 5
  background transparent
  color $sinewy-neutral-11
  font inherit
  font-size 20
  cursor pointer
  &:hover { background $sinewy-neutral-3 }
  &:focus-visible { outline 2px solid $sinewy-accent-9; outline-offset 2px }
  &:disabled { opacity .5; cursor default }
  @media (forced-colors: active) { color ButtonText }
`,Vo=i(({color:e="gray",style:t,...n},o)=>kc({...n,style:$(e,t)},o));Vo.Viewport=kn.Viewport;Vo.Close=i((e,t)=>Sc(e,t));var Mt=Vo;var Ne=Symbol("sinewy-menu");var Oi=Symbol("dropdown-indicator"),qi=Symbol("dropdown-radio-group"),Ii=Symbol("sinewy-ids"),Ri="--sinewy-dropdown-fit-block",Li="--sinewy-dropdown-fit-inline",Cc=['[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]'].join(",");i.css([`
  @position-try ${Ri} {
    align-self: stretch;
    height: stretch;
  }

  @position-try ${Li} {
    justify-self: stretch;
    width: stretch;
  }
`]);var te=i(({id:e,defaultOpen:t=!1},[],n)=>{let o=e||Gi(n),r=Dn(t,n),a={name:"Dropdown",prefix:"dropdown",id:o,triggerId:o+"-trigger",contentId:o+"-content",anchorName:Hi(o),trigger:void 0,content:void 0,open:!1,renderOpen:t,openState:r,openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!0,dir:"ltr",openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,pointerGrace:void 0,onbeforeopenchange:void 0,onopenchange:void 0},d=Object.create(n);return d[Ne]=a,a.root=a,n.onremove(()=>{clearTimeout(a.searchTimer),cancelAnimationFrame(a.reconcileFrame)}),({loop:c=!0,dir:s="ltr",open:l,bind:u,onbeforeopenchange:h,onopenchange:p},f,g)=>(a.loop=c,a.dir=s,a.controlledOpen=l,a.openBind=u,a.onbeforeopenchange=h,a.onopenchange=p,In(r,u,g),a.renderOpen=st(a),Tn(a),i({context:d},()=>f))});te.Trigger=i(({as:e,disabled:t=!1,dom:n,onclick:o,onkeydown:r,...a},d,c)=>{let s=Pe(c,"trigger");return Ui(e,"button",{...a,id:s.triggerId,type:e?a.type:a.type||"button",disabled:t,popovertarget:s.contentId,popovertargetaction:"toggle","aria-haspopup":"menu","aria-controls":s.contentId,"aria-expanded":String(s.renderOpen),"aria-disabled":String(t),style:{"anchor-name":s.anchorName,...a.style},data:{...a.data,disabled:t?"":null,state:s.renderOpen?"open":"closed"},dom:_o([l=>Ho(s,"trigger",l),...En(n)]),onclick:(l,u,h,p)=>{if(t){l.preventDefault();return}let f="popoverTargetElement"in u;if(ee(o,l,u,h,p),l.defaultPrevented||f){f&&!o&&(l.redraw=!1);return}l.preventDefault(),s.content.matches(":popover-open")?Fe(s):s.content.showPopover({source:u})},onkeydown:(l,u,h,p)=>{if(t){l.preventDefault();return}ee(r,l,u,h,p),!(l.defaultPrevented||!["Enter"," ","ArrowDown","ArrowUp"].includes(l.key))&&(l.preventDefault(),s.openFocus=l.key==="ArrowUp"?"last":"first",s.content.matches(":popover-open")?An(s,s.openFocus):s.content.showPopover())}},d)});te.Content=i(({},[],e)=>{let t=Pe(e,"content");return(n,o,r)=>Mi(t,n,o,r)});te.Item=i(({},[],e)=>{let t=Pe(e,"item");return(n,o,r)=>Cn(t,n,o,r)});te.Checkbox=i(({defaultChecked:e=!1},[],t)=>{let n=Pe(t,"checkbox"),o=Dn(e,t),r=i.live(zi(e));return({checked:a,defaultChecked:d,bind:c,oncheckedchange:s,...l},u,h)=>{In(o,c,h);let p=zi(Wo(o,c,a));r(p);let f=Fi(h,r);return Cn(n,{...l,role:"menuitemcheckbox","aria-checked":p==="indeterminate"?"mixed":String(p),data:{...l.data,state:Yo(p)},onactivate:g=>{let m=p==="indeterminate"||!p;Ni(o,c,a,m,h),s&&s(m,g)}},i({context:f},()=>u),h)}});te.RadioGroup=i(({defaultValue:e},[],t)=>{Pe(t,"radioGroup");let n=Dn(e,t),o={},r=Object.create(t);return r[qi]=o,({value:a,defaultValue:d,bind:c,onvaluechange:s,ariaLabel:l,...u},h,p)=>(In(n,c,p),Object.assign(o,{local:n,bind:c,controlled:a,onvaluechange:s,context:p}),i`div`({...u,role:"group","aria-label":u["aria-label"]||l},i({context:r},()=>h)))});te.Radio=i(({},[],e)=>{let t=Pe(e,"radio"),n=e[qi],o=i.live(!1);if(!n)throw new Error(t.name+".Radio must be used inside "+t.name+".RadioGroup");return({value:r,...a},d,c)=>{let l=Wo(n.local,n.bind,n.controlled)===r;o(l);let u=Fi(c,o);return Cn(t,{...a,role:"menuitemradio","aria-checked":String(l),data:{...a.data,state:Yo(l)},onactivate:h=>{l||(Ni(n.local,n.bind,n.controlled,r,n.context),n.onvaluechange&&n.onvaluechange(r,h))}},i({context:u},()=>d),c)}});te.Sub=i(({id:e,defaultOpen:t=!1},[],n)=>{let o=Pe(n,"sub"),r=e||Gi(n,o.prefix),a=Dn(t,n),d={name:o.name,prefix:o.prefix,id:r,triggerId:r+"-trigger",contentId:r+"-content",anchorName:Hi(r),trigger:void 0,content:void 0,open:!1,renderOpen:t,openState:a,openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!0,dir:o.dir,openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,openTimer:void 0,closeTimer:void 0,pointerGrace:void 0,openDelay:100,closeDelay:300,onbeforeopenchange:void 0,onopenchange:void 0,parent:o,root:o.root},c=Object.create(n);return c[Ne]=d,n.onremove(()=>{clearTimeout(d.searchTimer),clearTimeout(d.openTimer),clearTimeout(d.closeTimer),cancelAnimationFrame(d.reconcileFrame)}),({loop:s=!0,dir:l=o.dir,open:u,bind:h,onbeforeopenchange:p,onopenchange:f,openDelay:g=100,closeDelay:m=300},v,y)=>(d.loop=s,d.dir=l,d.openDelay=g,d.closeDelay=m,d.controlledOpen=u,d.openBind=h,d.onbeforeopenchange=p,d.onopenchange=f,In(a,h,y),d.renderOpen=st(d),Tn(d),i({context:c},()=>v))});te.SubTrigger=i(({as:e,disabled:t=!1,dom:n,onclick:o,onkeydown:r,onpointermove:a,onpointerleave:d,...c},s,l)=>{let u=Pe(l,"subtrigger");return Cn(u.parent,{...c,as:e,disabled:t,id:u.triggerId,style:{"anchor-name":u.anchorName,...c.style},dom:_o([h=>Ho(u,"trigger",h),...En(n)]),popovertarget:u.contentId,popovertargetaction:"toggle","aria-haspopup":"menu","aria-controls":u.contentId,"aria-expanded":String(u.renderOpen),data:{...c.data,state:u.renderOpen?"open":"closed"},onclick:(h,p,f,g)=>{Ei(u);let m="popoverTargetElement"in p;if(ee(o,h,p,f,g),h.defaultPrevented||t||m){m&&!o&&(h.redraw=!1);return}h.preventDefault(),u.content.matches(":popover-open")?Fe(u):u.content.showPopover({source:p})},onkeydown:(h,p,f,g)=>{Ei(u),ee(r,h,p,f,g),!(h.defaultPrevented||t||h.key!==qc(u))&&(h.preventDefault(),u.openFocus="first",u.content.matches(":popover-open")?An(u,"first"):u.content.showPopover())},onpointermove:(h,p,f,g)=>{ee(a,h,p,f,g),!(h.defaultPrevented||t||u.open||u.openTimer)&&(clearTimeout(u.closeTimer),u.openTimer=setTimeout(()=>{u.openTimer=void 0,u.content.matches(":popover-open")||(u.openFocus="none",u.content.showPopover({source:p}))},u.openDelay))},onpointerleave:(h,p,f,g)=>{ee(d,h,p,f,g),h.defaultPrevented||(Pc(u,h),Vi(u))},closeOnSelect:!1,invokeSelect:!1},s,l)});te.SubContent=i(({},[],e)=>{let t=Pe(e,"subcontent");if(!t.parent)throw new Error(t.name+".SubContent must be used inside "+t.name+".Sub");return({onpointerenter:n,onpointerleave:o,...r},a,d)=>Mi(t,{...r,onpointerenter:(c,s,l,u)=>{clearTimeout(t.closeTimer),t.closeTimer=void 0,zn(t.parent,t),ee(n,c,s,l,u)},onpointerleave:(c,s,l,u)=>{ee(o,c,s,l,u),c.defaultPrevented||Vi(t)}},a,d)});te.Indicator=i(({},[],e)=>{let t=e[Ne],n=e[Oi];if(!n)throw new Error((t?t.name:"Dropdown")+".Indicator must be used inside a Checkbox or Radio");let o=n.selection.observe(e.redraw);return e.onremove(o),({forceMount:r=!1,...a},d)=>{let c=n.selection();return r||c!==!1?i`span`({...a,"aria-hidden":a["aria-hidden"]==null?"true":a["aria-hidden"],data:{...a.data,state:Yo(c)}},d):null}});function Cn(e,{as:t,disabled:n=!1,dom:o,onclick:r,onfocus:a,onpointermove:d,onselect:c,onactivate:s,closeOnSelect:l=!0,invokeSelect:u=!0,role:h="menuitem",textValue:p,...f},g,m){return Ui(t,"button",{...f,type:t?f.type:f.type||"button",role:h,tabIndex:-1,"aria-disabled":String(n),data:{...f.data,disabled:n?"":null,textValue:p||null},dom:o,onclick:(v,y,x,w)=>{if(n){v.preventDefault();return}ee(r,v,y,x,w),!v.defaultPrevented&&(u&&c&&c(v,y),s&&s(v,y),l&&!v.defaultPrevented&&Fe(e.root))},onfocus:(v,y,x,w)=>{ee(a,v,y,x,w),v.defaultPrevented||Bi(e,y)},onpointermove:(v,y,x,w)=>{ee(d,v,y,x,w),n||v.defaultPrevented||zc(e,v)||Sn(e,y)}},g)}te.Group=i(({ariaLabel:e,...t},n)=>i`div`({...t,role:"group","aria-label":t["aria-label"]||e},n));te.Label=i((e,t)=>i`div`(e,t));te.Separator=i((e,t)=>i`div`({...e,role:"separator"},t));var R=te;function Tc(e,t){Ho(e,"content",t),Tn(e)}function Ho(e,t,n){import.meta.dev&&e[t]&&e[t]!==n&&e[t].isConnected&&console.warn(e.name+"."+ji(t)+" should only be rendered once per "+e.name+" state scope"),e[t]=n}function Mi(e,{dom:t,onbeforetoggle:n,ontoggle:o,onkeydown:r,side:a=e.parent?"right":"bottom",align:d="start",offset:c=0,alignOffset:s=0,avoidCollisions:l=!0,collisionStrategy:u="preferred",loop:h=e.loop,...p},f,g){return i`div
    position fixed
    inset auto
    margin 0
  `({...p,id:e.contentId,popover:"auto",role:"menu",dir:p.dir||e.dir,style:{"position-anchor":e.anchorName,...$c(a,d,c,s,l,u,e.dir),...p.style},"aria-labelledby":p["aria-labelledby"]||e.triggerId,data:{...p.data,state:e.renderOpen?"open":"closed",side:a,align:d},dom:_o([m=>Tc(e,m),...En(t)]),onbeforetoggle:e.onbeforeopenchange||n?(m,v,y,x)=>{let w=m.newState==="open";e.onbeforeopenchange&&e.onbeforeopenchange(w,m),ee(n,m,v,y,x)}:void 0,ontoggle:(m,v,y,x)=>{let w=m.newState==="open",k=e.reconcileTo===w;if(k&&(e.reconcileTo=void 0),e.open=w,e.renderOpen=st(e),e.trigger&&(e.trigger.ariaExpanded=String(w)),e.trigger&&(e.trigger.dataset.state=w?"open":"closed"),v.dataset.state=w?"open":"closed",ee(o,m,v,y,x),k||(Pn(e.openBind)?e.openBind(w):e.controlledOpen===void 0&&(e.openState.value=w),e.onopenchange&&e.onopenchange(w,m),e.renderOpen=st(e),Tn(e)),w)Pi(e),e.openFocus!=="none"&&An(e,e.openFocus),e.openFocus="first";else{e.parent&&zn(e.parent,e),Pi(e),Dc(e);let b=e.restoreFocus;e.restoreFocus=!0,requestAnimationFrame(()=>{b&&!e.open&&(v.contains(document.activeElement)||document.activeElement===document.body)&&e.trigger&&e.trigger.focus()})}},onkeydown:(m,v,y,x)=>{if(ee(r,m,v,y,x),!m.defaultPrevented){if(e.parent&&m.key===Rc(e)){m.preventDefault(),m.stopPropagation(),Fe(e);return}if(e.parent&&m.key==="Escape"){m.preventDefault(),m.stopPropagation(),Fe(e);return}Ac(e,m,h)}}},f)}function st(e){return!!Wo(e.openState,e.openBind,e.controlledOpen)}function Tn(e){if(!e.content)return;let t=st(e),n=e.content.matches(":popover-open");t!==n&&(cancelAnimationFrame(e.reconcileFrame),e.reconcileFrame=requestAnimationFrame(()=>{if(!e.content||!e.content.isConnected)return;let o=st(e),r=e.content.matches(":popover-open");o!==r&&(e.reconcileTo=o,o?e.content.showPopover():e.content.hidePopover())}))}function Ac(e,t,n){let o=Uo(e),r=o.indexOf(document.activeElement);if(t.key==="Tab"){e.root.restoreFocus=!1,Fe(e.root,!1);return}if(t.key==="Escape"){t.preventDefault(),Fe(e);return}if(t.key==="Enter"||t.key===" "){if(r===-1)return;t.preventDefault(),o[r].click();return}if(t.key==="ArrowDown"||t.key==="ArrowUp"){if(t.preventDefault(),!o.length)return;let l=t.key==="ArrowDown"?1:-1,u=r===-1?l===1?0:o.length-1:r+l;n?u=(u+o.length)%o.length:u=Math.max(0,Math.min(o.length-1,u)),Sn(e,o[u]);return}if(t.key==="Home"||t.key==="End"){t.preventDefault(),An(e,t.key==="Home"?"first":"last");return}if(t.key.length!==1||t.key===" "||t.metaKey||t.ctrlKey||t.altKey)return;t.preventDefault(),clearTimeout(e.searchTimer),e.search+=t.key.toLocaleLowerCase(),e.searchTimer=setTimeout(()=>e.search="",500);let d=Array.from(e.search).every(l=>l===e.search[0])?e.search[0]:e.search,s=o.slice(r+1).concat(o.slice(0,r+1)).find(l=>Ic(l).startsWith(d));s&&Sn(e,s)}function Fe(e,t=!0){e.restoreFocus=t,e.parent&&zn(e.parent,e),e.content.matches(":popover-open")&&e.content.hidePopover()}function Uo(e){return Ko(e).filter(t=>t.getAttribute("aria-disabled")!=="true")}function Ko(e){return e.content?Array.from(e.content.querySelectorAll(Cc)).filter(t=>t.closest('[role="menu"]')===e.content):[]}function An(e,t){let n=Uo(e);Sn(e,t==="last"?n.at(-1):n[0])}function Sn(e,t){t&&(Uo(e).forEach(n=>n.tabIndex=n===t?0:-1),Bi(e,t),t.focus({preventScroll:!0}))}function Bi(e,t){Ko(e).forEach(n=>{n.toggleAttribute("data-highlighted",n===t)}),e.activeItem=t}function Dc(e){Ko(e).forEach(t=>t.removeAttribute("data-highlighted")),e.activeItem=void 0}function Pi(e){clearTimeout(e.searchTimer),e.search=""}function Ic(e){return(e.dataset.textValue||e.textContent).trim().toLocaleLowerCase()}function ji(e){return{trigger:"Trigger",content:"Content",item:"Item",checkbox:"Checkbox",radioGroup:"RadioGroup",radio:"Radio",indicator:"Indicator",group:"Group",label:"Label",separator:"Separator",sub:"Sub",subtrigger:"SubTrigger",subcontent:"SubContent"}[e]||e}function Pe(e,t){let n=e[Ne];if(!n)throw new Error(ji(t)+" must be used inside a menu root");return n}function Dn(e,t){let n={value:e,binding:void 0,unobserve:void 0};return t.onremove(()=>n.unobserve&&n.unobserve()),n}function In(e,t,n){e.binding!==t&&(e.unobserve&&e.unobserve(),e.binding=t,e.unobserve=Pn(t)?t.observe(n.redraw):void 0)}function Wo(e,t,n){return Pn(t)?t():n===void 0?e.value:n}function Ni(e,t,n,o,r){Pn(t)?t(o):n===void 0&&(e.value=o,r.redraw())}function Fi(e,t){let n=Object.create(e);return n[Oi]={selection:t},n}function zi(e){return e==="indeterminate"?e:!!e}function Yo(e){return e==="indeterminate"?e:e?"checked":"unchecked"}function Pn(e){return typeof e=="function"&&typeof e.observe=="function"}function Vi(e){clearTimeout(e.openTimer),clearTimeout(e.closeTimer),e.openTimer=void 0,e.closeTimer=setTimeout(()=>{e.closeTimer=void 0,e.content.matches(":popover-open")&&Fe(e)},e.closeDelay)}function Ei(e){clearTimeout(e.openTimer),clearTimeout(e.closeTimer),e.openTimer=e.closeTimer=void 0,zn(e.parent,e)}function Pc(e,t){if(!e.parent||!e.content||!e.content.matches(":popover-open"))return;let n=e.content.getBoundingClientRect(),o={x:t.clientX,y:t.clientY},r=5,d=[{distance:Math.abs(o.x-n.left),points:[{x:n.left,y:n.top-r},{x:n.left,y:n.bottom+r}]},{distance:Math.abs(o.x-n.right),points:[{x:n.right,y:n.top-r},{x:n.right,y:n.bottom+r}]},{distance:Math.abs(o.y-n.top),points:[{x:n.left-r,y:n.top},{x:n.right+r,y:n.top}]},{distance:Math.abs(o.y-n.bottom),points:[{x:n.left-r,y:n.bottom},{x:n.right+r,y:n.bottom}]}].sort((c,s)=>c.distance-s.distance)[0];e.parent.pointerGrace={owner:e,triangle:[o,...d.points]}}function zc(e,t){let n=e.pointerGrace;if(!n)return!1;if(!n.owner.content||!n.owner.content.matches(":popover-open"))return e.pointerGrace=void 0,!1;let o=Ec({x:t.clientX,y:t.clientY},...n.triangle);return o||(e.pointerGrace=void 0),o}function zn(e,t){e&&(!t||e.pointerGrace&&e.pointerGrace.owner===t)&&(e.pointerGrace=void 0)}function Ec(e,t,n,o){let r=Go(e,t,n),a=Go(e,n,o),d=Go(e,o,t),c=r<0||a<0||d<0,s=r>0||a>0||d>0;return!(c&&s)}function Go(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function $c(e,t,n,o,r,a,d){let c=e==="top"||e==="bottom",s={top:"block-start",right:"inline-end",bottom:"block-end",left:"inline-start"}[e]||"block-end",l=t==="center"?"":" span-"+(c?"inline-":"block-")+(t==="end"?"start":"end"),u={top:"margin-block-end",right:"margin-inline-start",bottom:"margin-block-start",left:"margin-inline-end"}[e]||"margin-block-start",h=c?"margin-inline-start":"margin-block-start",p=c?Ri:Li,f=["flip-block","flip-inline","flip-block flip-inline",p,p+" flip-block",p+" flip-inline",p+" flip-block flip-inline"].join(", ");return{"position-area":s+l,"position-try-fallbacks":r?f:"none","position-try-order":r&&a==="most-space"?c?"most-block-size":"most-inline-size":"normal",[u]:$i(n),[h]:$i(o),"--sinewy-trigger-width":"anchor-size(width)","--sinewy-trigger-height":"anchor-size(height)","--sinewy-transform-origin":Oc(e,t,d)}}function Oc(e,t,n){let a=t==="center"?"center":t==="end"?n==="rtl"?"left":"right":n==="rtl"?"right":"left",d=t==="center"?"center":t==="end"?"bottom":"top";return e==="top"?a+" bottom":e==="bottom"?a+" top":e==="left"?"right "+d:"left "+d}function $i(e){return typeof e=="number"?e+"px":e}function qc(e){return e.dir==="rtl"?"ArrowLeft":"ArrowRight"}function Rc(e){return e.dir==="rtl"?"ArrowRight":"ArrowLeft"}function Gi(e,t="dropdown"){let n=e,o;for(;(o=Object.getPrototypeOf(n))&&o!==Object.prototype;)n=o;let r=n[Ii]||(n[Ii]={value:0});return"sinewy-"+t+"-"+ ++r.value}function Hi(e){return"--"+e.replace(/[^a-zA-Z0-9_-]/g,"-")+"-anchor"}function _o(e){return e.filter(Boolean)}function En(e){return e==null?[]:Array.isArray(e)?e:[e]}function ee(e,t,...n){En(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function Ui(e,t,n,o){return e?e(n,o):i(t,n,o)}var Ki=Symbol("sinewy-context-menu-ids"),Lc=700,Mc=['[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]'].join(","),ne=i(({id:e},[],t)=>{let n=e||Wc(t),o={name:"ContextMenu",prefix:"context-menu",id:n,triggerId:n+"-trigger",contentId:n+"-content",anchorName:Yc(n),trigger:void 0,content:void 0,anchor:void 0,open:!1,renderOpen:!1,openState:{value:!1},openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!1,dir:"ltr",openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,pointerGrace:void 0,pointerDown:void 0,pointerCleanup:void 0,pendingOpen:void 0,longPressTimer:void 0,onbeforeopenchange:void 0,onopenchange:void 0},r=Object.create(t);return r[Ne]=o,o.root=o,t.onremove(()=>{clearTimeout(o.searchTimer),cancelAnimationFrame(o.reconcileFrame),o.pointerCleanup&&o.pointerCleanup(),o.pendingOpen&&o.pendingOpen(),_e(o),o.anchor&&o.anchor.remove()}),({loop:a=!1,dir:d="ltr",onbeforeopenchange:c,onopenchange:s},l)=>(o.loop=a,o.dir=d,o.onbeforeopenchange=c,o.onopenchange=s,o.renderOpen=o.openState.value,i({context:r},()=>l))});ne.Trigger=i(({as:e,disabled:t=!1,dom:n,oncontextmenu:o,onkeydown:r,...a},d,c)=>{let s=Bc(c,"Trigger");return Jc(e,"div",{...a,id:s.triggerId,tabIndex:e?a.tabIndex:a.tabIndex==null?0:a.tabIndex,disabled:e&&t||void 0,"aria-haspopup":"menu","aria-controls":s.contentId,"aria-expanded":String(s.renderOpen),"aria-disabled":String(t),style:Hc(a.style,t),data:{...a.data,disabled:t?"":null,state:s.renderOpen?"open":"closed"},dom:_c([l=>jc(s,l),...Qi(n)]),oncontextmenu:(l,u,h,p)=>{Yi(o,l,u,h,p),_e(s),!(t||l.defaultPrevented||!s.content)&&Wi(s,l,u,Nc(l,u,s.dir),!0)},onkeydown:(l,u,h,p)=>{Yi(r,l,u,h,p),!(!Fc(l)||t||l.defaultPrevented||!s.content)&&(_e(s),Wi(s,l,u,_i(u,s.dir),!1))}},d)});ne.Content=R.Content;ne.Item=R.Item;ne.Checkbox=R.Checkbox;ne.RadioGroup=R.RadioGroup;ne.Radio=R.Radio;ne.Indicator=R.Indicator;ne.Group=R.Group;ne.Label=R.Label;ne.Separator=R.Separator;ne.Sub=R.Sub;ne.SubTrigger=R.SubTrigger;ne.SubContent=R.SubContent;function Bc(e,t){let n=e[Ne];if(!n||n.name!=="ContextMenu")throw new Error("ContextMenu."+t+" must be used inside ContextMenu");return n}function jc(e,t){import.meta.dev&&e.trigger&&e.trigger!==t&&e.trigger.isConnected&&console.warn("ContextMenu.Trigger should only be rendered once per ContextMenu state scope"),e.trigger=t;let n=o=>Vc(e,o);return t.addEventListener("pointerdown",n,!0),()=>{t.removeEventListener("pointerdown",n,!0),e.pointerCleanup&&e.pointerCleanup()}}function Nc(e,t,n){return e.clientX!==0||e.clientY!==0||e.button===2||e.pointerType?{x:e.clientX,y:e.clientY}:_i(t,n)}function _i(e,t){let n=e.getBoundingClientRect();return{x:t==="rtl"?n.right:n.left,y:n.bottom}}function Fc(e){return e.key==="ContextMenu"||e.key==="F10"&&e.shiftKey}function Wi(e,t,n,o,r){t.preventDefault(),Ji(e,n.ownerDocument,o.x,o.y),e.openFocus="first",e.restoreFocus=!0,e.pendingOpen&&e.pendingOpen(),r&&e.pointerDown?Zi(e,n,e.pointerDown):Xi(e,n)}function Ji(e,t,n,o){let r=e.anchor||Uc(e,t);r.style.left=n+"px",r.style.top=o+"px"}function Xi(e,t){!e.content||!t.isConnected||(e.content.matches(":popover-open")?Kc(e.content):e.content.showPopover({source:t}))}function Zi(e,t,n){let o=t.ownerDocument,{button:r,pointerId:a}=n,d,c=()=>{o.removeEventListener("pointerup",u,!0),o.removeEventListener("mouseup",u,!0),o.removeEventListener("pointercancel",h,!0)},s=()=>{c(),cancelAnimationFrame(d),e.pendingOpen===s&&(e.pendingOpen=void 0)},l=p=>a==null||p.pointerId==null||p.pointerId===a,u=p=>{p.button!==r||!l(p)||(e.pointerCleanup&&e.pointerCleanup(),c(),d=requestAnimationFrame(()=>{e.pendingOpen===s&&(e.pendingOpen=void 0),Xi(e,t)}))},h=p=>{l(p)&&s()};o.addEventListener("pointerup",u,!0),o.addEventListener("mouseup",u,!0),o.addEventListener("pointercancel",h,!0),e.pendingOpen=s}function Vc(e,t){e.pointerCleanup&&e.pointerCleanup();let n=t.currentTarget.ownerDocument,o=e.pointerDown={button:t.button,pointerId:t.pointerId,pointerType:t.pointerType,x:t.clientX,y:t.clientY},r=o.pointerType&&o.pointerType!=="mouse",a=s=>{s.pointerId===o.pointerId&&(n.removeEventListener("pointerup",a,!0),n.removeEventListener("pointercancel",a,!0),n.removeEventListener("pointermove",d,!0),_e(e),e.pointerDown===o&&(e.pointerDown=void 0),e.pointerCleanup===c&&(e.pointerCleanup=void 0))},d=s=>{r&&s.pointerId===o.pointerId&&_e(e)},c=()=>{n.removeEventListener("pointerup",a,!0),n.removeEventListener("pointercancel",a,!0),n.removeEventListener("pointermove",d,!0),_e(e),e.pointerDown===o&&(e.pointerDown=void 0),e.pointerCleanup===c&&(e.pointerCleanup=void 0)};n.addEventListener("pointerup",a,!0),n.addEventListener("pointercancel",a,!0),n.addEventListener("pointermove",d,!0),e.pointerCleanup=c,r&&t.currentTarget.getAttribute("aria-disabled")!=="true"&&Gc(e,t.currentTarget,o)}function Gc(e,t,n){_e(e),e.content&&e.content.matches(":popover-open")&&e.content.hidePopover(),e.longPressTimer=setTimeout(()=>{e.longPressTimer=void 0,!(e.pointerDown!==n||!e.content)&&(Ji(e,t.ownerDocument,n.x,n.y),e.openFocus="first",e.restoreFocus=!0,e.pendingOpen&&e.pendingOpen(),Zi(e,t,n))},Lc)}function _e(e){clearTimeout(e.longPressTimer),e.longPressTimer=void 0}function Hc(e,t){return t?e:e&&typeof e=="object"?{"-webkit-touch-callout":"none",...e}:"-webkit-touch-callout:none;"+(e||"")}function Uc(e,t){let n=t.createElement("span");return n.setAttribute("aria-hidden","true"),n.setAttribute("data-sinewy-context-anchor",""),n.style.position="fixed",n.style.inset="auto",n.style.width="0",n.style.height="0",n.style.pointerEvents="none",n.style.setProperty("anchor-name",e.anchorName),t.body.insertBefore(n,t.body.firstChild),e.anchor=n,n}function Kc(e){let t=Array.from(e.querySelectorAll(Mc)).find(n=>n.closest('[role="menu"]')===e&&n.getAttribute("aria-disabled")!=="true");t&&t.focus({preventScroll:!0})}function Wc(e){let t=e,n;for(;(n=Object.getPrototypeOf(t))&&n!==Object.prototype;)t=n;let o=t[Ki]||(t[Ki]={value:0});return"sinewy-context-menu-"+ ++o.value}function Yc(e){return"--"+e.replace(/[^a-zA-Z0-9_-]/g,"-")+"-anchor"}function _c(e){return e.filter(Boolean)}function Qi(e){return e==null?[]:Array.isArray(e)?e:[e]}function Yi(e,t,...n){Qi(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function Jc(e,t,n,o){return e?e(n,o):i(t,n,o)}var lt=ne;function ze(e){return e`
    min-height 36
    display inline-flex
    align-items center
    justify-content center
    gap 8
    padding 0 11
    border 1px solid transparent
    border-radius 9
    appearance none
    background transparent
    color inherit
    cursor pointer
    font inherit
    font-size 13
    font-weight 750
    line-height 1
    text-align center
    text-decoration none
    user-select none
    white-space nowrap
    transition background-color 80ms ease, border-color 80ms ease, color 80ms ease, transform 60ms ease

    &[data-size='1'] {
      min-height 30
      gap 6
      padding 0 9
      border-radius 7
      font-size 12
    }

    &[data-size='3'] {
      min-height 42
      gap 9
      padding 0 14
      border-radius 11
      font-size 14
    }

    &[data-variant='solid'] {
      background $sinewy-accent-9
      color $sinewy-accent-contrast
    }

    &[data-variant='solid']:hover:not(:disabled):not([data-disabled]),
    &[data-variant='solid'][data-state='open'] {
      background $sinewy-accent-10
    }

    &[data-variant='solid']:active:not(:disabled):not([data-disabled]) {
      background $sinewy-accent-10
    }

    &[data-variant='soft'] {
      background $sinewy-accent-3
      color $sinewy-accent-11
    }

    &[data-variant='soft']:hover:not(:disabled):not([data-disabled]),
    &[data-variant='soft'][data-state='open'] {
      background $sinewy-accent-4
      color $sinewy-accent-12
    }

    &[data-variant='soft']:active:not(:disabled):not([data-disabled]) {
      background $sinewy-accent-4
      color $sinewy-accent-12
    }

    &[data-variant='outline'] {
      border-color $sinewy-accent-7
      background $sinewy-panel
      color $sinewy-accent-11
    }

    &[data-variant='outline']:hover:not(:disabled):not([data-disabled]),
    &[data-variant='outline'][data-state='open'] {
      border-color $sinewy-accent-8
      background $sinewy-accent-2
      color $sinewy-accent-12
    }

    &[data-variant='outline']:active:not(:disabled):not([data-disabled]) {
      border-color $sinewy-accent-8
      background $sinewy-accent-3
      color $sinewy-accent-12
    }

    &[data-variant='ghost'] {
      background transparent
      color $sinewy-accent-11
    }

    &[data-variant='ghost']:hover:not(:disabled):not([data-disabled]),
    &[data-variant='ghost'][data-state='open'] {
      background $sinewy-accent-3
      color $sinewy-accent-12
    }

    &[data-variant='ghost']:active:not(:disabled):not([data-disabled]) {
      background $sinewy-accent-4
      color $sinewy-accent-12
    }

    &[data-high-contrast][data-variant='solid'] {
      background $sinewy-accent-12
      color $sinewy-accent-1
    }

    &[data-color='gray'][data-variant='solid'] {
      background $sinewy-accent-12
      color $sinewy-accent-1
    }

    &:is([data-high-contrast], [data-color='gray'])[data-variant='solid']:is(:hover, :active):not(:disabled):not([data-disabled]) {
      background $sinewy-extreme
    }

    &:is([data-high-contrast], [data-color='gray'])[data-variant='solid'][data-state='open'] {
      background $sinewy-extreme
    }

    &[data-high-contrast]:not([data-variant='solid']) {
      color $sinewy-accent-12
    }

    &[data-high-contrast][data-variant='outline'] {
      border-color $sinewy-accent-8
    }

    &[data-state='off'][data-variant='solid'] {
      background $sinewy-neutral-3
      color $sinewy-neutral-11
    }

    &[data-state='off'][data-variant='soft'] {
      background $sinewy-neutral-3
      color $sinewy-neutral-11
    }

    &[data-state='off'][data-variant='solid']:hover:not(:disabled) {
      background $sinewy-neutral-4
      color $sinewy-neutral-12
    }

    &[data-state='off'][data-variant='soft']:hover:not(:disabled) {
      background $sinewy-neutral-4
      color $sinewy-neutral-12
    }

    &[data-state='off'][data-variant='outline'] {
      border-color $sinewy-neutral-7
      background $sinewy-panel
      color $sinewy-neutral-11
    }

    &[data-state='off'][data-variant='outline']:hover:not(:disabled) {
      border-color $sinewy-neutral-8
      background $sinewy-neutral-2
      color $sinewy-neutral-12
    }

    &[data-state='off'][data-variant='ghost'] {
      background transparent
      color $sinewy-neutral-11
    }

    &[data-state='off'][data-variant='ghost']:hover:not(:disabled) {
      background $sinewy-neutral-3
      color $sinewy-neutral-12
    }

    &[data-state='on'][data-variant='ghost'] {
      background $sinewy-accent-3
      color $sinewy-accent-12
    }

    &:active:not(:disabled):not([data-disabled]) {
      transform translateY(1px)
    }

    &:focus-visible {
      outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
      outline-offset 2px
    }

    &:disabled,
    &[data-disabled] {
      cursor default
      opacity 0.48
    }

    @media (prefers-reduced-motion: reduce) {
      transition none
    }
  `}function E(e,t){return{...e,...Object.fromEntries(Object.entries(t).map(([n,o])=>[n,o==null?null:typeof o=="boolean"?o?"":null:String(o)]))}}var Xc=ze(i`button`),Zc=i(({size:e="2",variant:t="solid",color:n="accent",highContrast:o=!1,type:r="button",data:a,style:d,...c},s)=>Xc({...c,type:r,style:$(n,d),data:E(a,{size:e,variant:t,color:n,highContrast:o})},s));var Ee=Zc;var Qc=ze(i`button`),es=i(({defaultPressed:e=!1},[],t)=>{let n=W(!!e,t);return({pressed:o,defaultPressed:r,bind:a,onpressedchange:d,onclick:c,disabled:s=!1,size:l="2",variant:u="soft",color:h="accent",highContrast:p=!1,type:f="button",data:g,style:m,...v},y,x)=>{Y(n,a,x);let w=!!M(n,a,o);return Qc({...v,type:f,disabled:s,"aria-pressed":String(w),style:$(h,m),data:E(g,{size:l,variant:u,color:h,highContrast:p,state:w?"on":"off"}),onclick:(k,b,S,P)=>{if(D(c,k,b,S,P),k.defaultPrevented||s)return;let j=!w;F(n,a,o,j,x),d&&d(j,k)}},y)}});var Bt=es;var Jo=Symbol("sinewy-dialog");var ed=Symbol("sinewy-dialog-ids"),ts=ze(i`button`),ns=ze(i`button`),os=i`dialog
  width calc(100% - 32px)
  max-width 480
  max-height calc(100svh - 32px)
  margin auto
  padding 24
  overflow auto
  border 1px solid $sinewy-neutral-6
  border-radius 15
  background $sinewy-panel
  color $sinewy-neutral-12
  box-shadow 0 28px 80px light-dark(rgb(35 31 24 / 0.24), rgb(0 0 0 / 0.68)), 0 4px 14px light-dark(rgb(35 31 24 / 0.1), rgb(0 0 0 / 0.34))

  &[data-size='1'] {
    max-width 360
    padding 20
    border-radius 13
  }

  &[data-size='3'] {
    max-width 640
    padding 28
    border-radius 17
  }

  &:focus-visible {
    outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
    outline-offset 2px
  }

  &::backdrop {
    background light-dark(rgb(24 22 18 / 0.42), rgb(0 0 0 / 0.68))
    backdrop-filter blur(2px)
  }
`,rs=i`h2
  margin 0
  color $sinewy-neutral-12
  font-size 20
  font-weight 780
  line-height 1.2
  letter-spacing -0.02em
`,is=i`p
  margin 8px 0 0
  color $sinewy-neutral-11
  font-size 14
  line-height 1.55
`,pt=i(({id:e,defaultOpen:t=!1},[],n)=>{let o=e||ds(n),r=W(!!t,n),a={id:o,contentId:o+"-content",titleId:o+"-title",descriptionId:o+"-description",content:void 0,trigger:void 0,local:r,bind:void 0,controlled:void 0,renderOpen:!!t,onopenchange:void 0,closing:!1},d=Object.create(n);return d[Jo]=a,({open:c,defaultOpen:s,bind:l,onopenchange:u},h,p)=>(a.bind=l,a.controlled=c,a.onopenchange=u,Y(r,l,p),a.renderOpen=!!M(r,l,c),Xo(a),i({context:d},()=>h))});pt.Trigger=i(({disabled:e=!1,dom:t,onclick:n,size:o="2",variant:r="solid",color:a="accent",highContrast:d=!1,type:c="button",data:s,style:l,...u},h,p)=>{let f=jt(p,"Trigger");return ts({...u,type:c,disabled:e,"aria-haspopup":"dialog","aria-controls":f.contentId,"aria-expanded":String(f.renderOpen),style:$(a,l),data:E(s,{size:o,variant:r,color:a,highContrast:d,state:f.renderOpen?"open":"closed"}),dom:[g=>f.trigger=g,...td(t)],onclick:(g,m,v,y)=>{D(n,g,m,v,y),!(g.defaultPrevented||e)&&$n(f,!0,g,p)}},h)});pt.Content=i(({dom:e,oncancel:t,onclose:n,"aria-label":o,"aria-labelledby":r,"aria-describedby":a,size:d="2",color:c="accent",highContrast:s=!1,data:l,style:u,...h},p,f)=>{let g=jt(f,"Content");return os({...h,id:g.contentId,"aria-label":o,"aria-labelledby":o?r:r||g.titleId,"aria-describedby":a===null?void 0:a||g.descriptionId,style:$(c,u),data:E(l,{size:d,color:c,highContrast:s,state:g.renderOpen?"open":"closed"}),dom:[m=>{g.content=m,queueMicrotask(()=>Xo(g))},...td(e)],oncancel:(m,v,y,x)=>{D(t,m,v,y,x),!m.defaultPrevented&&(m.preventDefault(),$n(g,!1,m,f))},onclose:(m,v,y,x)=>{if(D(n,m,v,y,x),g.closing){g.closing=!1;return}g.renderOpen&&$n(g,!1,m,f)}},p)});pt.Title=i((e,t,n)=>{let o=jt(n,"Title");return rs({...e,id:e.id||o.titleId},t)});pt.Description=i((e,t,n)=>{let o=jt(n,"Description");return is({...e,id:e.id||o.descriptionId},t)});pt.Close=i(({disabled:e=!1,onclick:t,size:n="2",variant:o="soft",color:r="gray",highContrast:a=!1,type:d="button",data:c,style:s,...l},u,h)=>{let p=jt(h,"Close");return ns({...l,type:d,disabled:e,style:$(r,s),data:E(c,{size:n,variant:o,color:r,highContrast:a}),onclick:(f,g,m,v)=>{D(t,f,g,m,v),!(f.defaultPrevented||e)&&$n(p,!1,f,h)}},u)});function $n(e,t,n,o){t!==e.renderOpen&&(F(e.local,e.bind,e.controlled,t,o),e.renderOpen=!!M(e.local,e.bind,e.controlled),e.onopenchange&&e.onopenchange(t,n),queueMicrotask(()=>Xo(e)))}function Xo(e){let t=e.content;!t||!t.isConnected||(e.renderOpen&&!t.open?t.showModal():!e.renderOpen&&t.open&&(e.closing=!0,t.close()))}function jt(e,t){let n=e[Jo];if(!n)throw new Error("Dialog."+t+" must be used inside Dialog");return n}function ds(e){let t=e,n;for(;(n=Object.getPrototypeOf(t))&&n!==Object.prototype;)t=n;let o=t[ed]||(t[ed]={value:0});return"sinewy-dialog-"+ ++o.value}function td(e){return e==null?[]:Array.isArray(e)?e:[e]}var J=pt;var ut=i((e,t)=>J(e,...t));ut.Trigger=J.Trigger;ut.Content=i((e,t)=>J.Content({...e,role:"alertdialog"},t));ut.Title=J.Title;ut.Description=J.Description;ut.Close=J.Close;var $e=ut;var as=i`input
  $sinewy-switch-thumb-size 18px
  $sinewy-switch-inset 2px
  width 36
  height 22
  display inline-block
  position relative
  flex 0 0 auto
  margin 0
  padding 0
  overflow hidden
  border 0
  border-radius 999px
  appearance none
  background $sinewy-neutral-6
  box-shadow inset 0 0 0 1px color-mix(in srgb, $sinewy-neutral-12 10%, transparent)
  cursor pointer
  vertical-align middle
  transition background-color 100ms ease, box-shadow 100ms ease

  &::before {
    content ''
    width $sinewy-switch-thumb-size
    height $sinewy-switch-thumb-size
    display block
    position absolute
    inset-block-start $sinewy-switch-inset
    inset-inline-start $sinewy-switch-inset
    border-radius 50%
    background $sinewy-panel
    box-shadow 0 1px 4px light-dark(rgb(25 23 19 / 0.34), rgb(0 0 0 / 0.72))
    transition inset-inline-start 120ms ease, transform 80ms ease
  }

  &[data-size='1'] {
    $sinewy-switch-thumb-size 14px
    width 30
    height 18
  }

  &[data-size='3'] {
    $sinewy-switch-thumb-size 22px
    width 44
    height 26
  }

  &:checked {
    background $sinewy-accent-9
    box-shadow inset 0 0 0 1px color-mix(in srgb, $sinewy-accent-12 14%, transparent)
  }

  &:checked::before {
    inset-inline-start calc(100% - $sinewy-switch-thumb-size - $sinewy-switch-inset)
  }

  &:hover:not(:disabled) {
    background $sinewy-neutral-7
  }

  &:checked:hover:not(:disabled) {
    background $sinewy-accent-10
  }

  &[data-high-contrast]:checked,
  &[data-color='gray']:checked {
    background $sinewy-accent-12
  }

  &[data-high-contrast]:checked:hover:not(:disabled),
  &[data-color='gray']:checked:hover:not(:disabled) {
    background $sinewy-extreme
  }

  &:active:not(:disabled)::before {
    transform scale(0.9)
  }

  &:focus-visible {
    outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
    outline-offset 2px
  }

  &:disabled {
    cursor default
    opacity 0.48
  }

  @media (prefers-reduced-motion: reduce) {
    transition none

    &::before {
      transition none
    }
  }
`,cs=i(({defaultChecked:e=!1},[],t)=>{let n=W(!!e,t),o={local:n,defaultChecked:!!e,bind:void 0,controlled:void 0};return({checked:r,defaultChecked:a,bind:d,oncheckedchange:c,onchange:s,dom:l,disabled:u=!1,size:h="2",color:p="accent",highContrast:f=!1,type:g,role:m,data:v,style:y,...x},[],w)=>{o.bind=d,o.controlled=r,Y(n,d,w);let k=!!M(n,d,r);return as({...x,type:"checkbox",role:"switch",checked:k,disabled:u,style:$(p,y),data:E(v,{size:h,color:p,highContrast:f,state:k?"checked":"unchecked"}),dom:[b=>ss(o,b,w),...ls(l)],onchange:(b,S,P,j)=>{D(s,b,S,P,j);let N=S.checked;F(n,d,r,N,w),c&&c(N,b),r!==void 0&&(S.checked=k)}})}});function ss(e,t,n){t.defaultChecked=e.defaultChecked;let o=t.form;if(!o)return;let r=()=>queueMicrotask(()=>{let a=t.checked;F(e.local,e.bind,e.controlled,a,n),t.checked=!!M(e.local,e.bind,e.controlled),n.redraw()});return o.addEventListener("reset",r),()=>o.removeEventListener("reset",r)}function ls(e){return e==null?[]:Array.isArray(e)?e:[e]}var Nt=cs;var nd=Symbol("sinewy-select"),ps=i`select
  $sinewy-select-indicator-width 16px
  $sinewy-select-indicator-start 9px
  $sinewy-select-indicator-font-size 12px
  min-width 0
  min-height 36
  margin 0
  padding 0 10px
  border 1px solid $sinewy-neutral-7
  border-radius 9
  appearance auto
  background $sinewy-panel
  color $sinewy-neutral-12
  cursor pointer
  font inherit
  font-size 13
  line-height 1.2
  transition background-color 80ms ease, border-color 80ms ease, box-shadow 80ms ease

  &[data-size='1'] {
    $sinewy-select-indicator-width 14px
    $sinewy-select-indicator-start 7px
    $sinewy-select-indicator-font-size 11px
    min-height 30
    padding-inline 8px
    border-radius 7
    font-size 12
  }

  &[data-size='3'] {
    $sinewy-select-indicator-width 18px
    $sinewy-select-indicator-start 11px
    $sinewy-select-indicator-font-size 13px
    min-height 42
    padding-inline 12px
    border-radius 11
    font-size 14
  }

  &:hover:not(:disabled) {
    border-color $sinewy-accent-8
    background $sinewy-accent-2
  }

  &[data-high-contrast] {
    border-color $sinewy-accent-8
  }

  &:focus-visible {
    border-color $sinewy-accent-8
    outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
    outline-offset 2px
  }

  &:disabled {
    cursor default
    opacity 0.5
  }

  @supports (appearance: base-select) {
    align-items center
    gap 8
    appearance base-select

    &::picker(select) {
      min-width anchor-size(width)
      max-width min(340px, calc(100vw - 24px))
      max-height min(480px, calc(100vh - 24px))
      padding 6
      overflow auto
      border 1px solid $sinewy-neutral-6
      border-radius 13
      appearance base-select
      background color-mix(in srgb, $sinewy-panel 98%, transparent)
      color $sinewy-neutral-12
      box-shadow 0 22px 60px light-dark(rgb(35 31 24 / 0.18), rgb(0 0 0 / 0.5)), 0 3px 10px light-dark(rgb(35 31 24 / 0.08), rgb(0 0 0 / 0.28))
      opacity 0
      transform translateY(-4px) scale(0.985)
      transform-origin top
      transition opacity 120ms ease, transform 120ms ease, display 120ms allow-discrete, overlay 120ms allow-discrete
    }

    &:open::picker(select) {
      opacity 1
      transform translateY(0) scale(1)
    }

    @starting-style {
      &:open::picker(select) {
        opacity 0
        transform translateY(-4px) scale(0.985)
      }
    }

    &::picker-icon {
      margin-inline-start auto
      margin-inline-end 4px
      color $sinewy-accent-11
      transition transform 120ms ease
    }

    &:open::picker-icon {
      transform rotate(180deg)
    }

    & optgroup {
      margin 0
      padding 5px 0 0
      border 0
      color $sinewy-neutral-11
      font-size 11
      font-weight 750
      letter-spacing 0.08em
      text-transform uppercase
    }

    & optgroup + optgroup {
      margin-block-start 5px
      border-block-start 1px solid $sinewy-neutral-6
    }

    & option {
      min-height 36
      display flex
      position relative
      align-items center
      gap 10
      margin 0
      padding 7px 9px
      padding-inline-start 35px
      border 0
      border-radius 8
      background transparent
      color $sinewy-neutral-12
      cursor pointer
      font-size 14
      font-weight 500
      line-height 20px
      letter-spacing normal
      text-align start
      text-transform none
      user-select none
    }

    & optgroup > option:first-of-type {
      margin-block-start 4px
    }

    &[data-size='1']::picker(select) {
      max-width min(300px, calc(100vw - 20px))
      max-height min(400px, calc(100vh - 20px))
      padding 5
      border-radius 11
    }

    &[data-size='1'] optgroup {
      padding-block-start 4px
      font-size 10
    }

    &[data-size='1'] option {
      min-height 30
      gap 8
      padding 5px 7px
      padding-inline-start 29px
      border-radius 7
      font-size 12
      line-height 16px
    }

    &[data-size='1'] optgroup > option:first-of-type {
      margin-block-start 3px
    }

    &[data-size='3']::picker(select) {
      max-width min(380px, calc(100vw - 28px))
      max-height min(540px, calc(100vh - 28px))
      padding 7
      border-radius 15
    }

    &[data-size='3'] optgroup {
      padding-block-start 6px
      font-size 12
    }

    &[data-size='3'] option {
      min-height 42
      gap 12
      padding 9px 11px
      padding-inline-start 41px
      border-radius 10
      font-size 16
      line-height 24px
    }

    &[data-size='3'] optgroup > option:first-of-type {
      margin-block-start 5px
    }

    & option::checkmark {
      content '✓'
      width $sinewy-select-indicator-width
      display inline-grid
      place-items center
      position absolute
      inset-inline-start $sinewy-select-indicator-start
      color $sinewy-accent-11
      font-size $sinewy-select-indicator-font-size
      font-weight 900
    }

    & option:checked {
      background $sinewy-accent-3
      color $sinewy-accent-12
    }

    & option:hover:not(:disabled) {
      outline 0
      background $sinewy-accent-9
      color $sinewy-accent-contrast
    }

    & option:focus:not(:disabled) {
      outline 0
      background $sinewy-accent-9
      color $sinewy-accent-contrast
    }

    & option:hover:not(:disabled)::checkmark {
      color currentColor
    }

    & option:focus:not(:disabled)::checkmark {
      color currentColor
    }

    &[data-high-contrast] option:checked {
      background $sinewy-accent-12
      color $sinewy-accent-1
    }

    &[data-high-contrast] option:checked::checkmark {
      color currentColor
    }

    & option:disabled {
      cursor default
      color $sinewy-neutral-9
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition none

    &::picker(select) {
      transition none
      transform none
    }

    &::picker-icon {
      transition none
      transform none
    }
  }
`,us=i(({value:e="",selected:t,...n},o,r)=>{let a=r[nd],d=String(e);return i`option`({...n,value:d,selected:a?.renderValue===void 0?t:a.renderValue===d},o)}),hs=i`optgroup`,Zo=i(({defaultValue:e},[],t)=>{let n=e==null?void 0:String(e),o=W(n,t),r={local:o,defaultValue:n,bind:void 0,controlled:void 0,renderValue:n},a=Object.create(t);return a[nd]=r,({value:d,defaultValue:c,bind:s,onvaluechange:l,onchange:u,dom:h,multiple:p,disabled:f=!1,size:g="2",color:m="accent",highContrast:v=!1,data:y,style:x,...w},k,b)=>{let S=d==null?void 0:String(d);r.bind=s,r.controlled=S,Y(o,s,b);let P=od(M(o,s,S));return r.renderValue=P,i({context:a},()=>ps({...w,value:P,disabled:f,style:$(m,x),data:E(y,{size:g,color:m,highContrast:v}),dom:[j=>fs(r,j,b),...ms(h)],onchange:(j,N,xe,Z)=>{D(u,j,N,xe,Z);let X=N.value;F(o,s,S,X,b),l&&l(X,j),S!==void 0&&(N.value=P)}},k))}});Zo.Option=us;Zo.Group=hs;function fs(e,t,n){if(e.defaultValue!==void 0)for(let a of t.options)a.defaultSelected=a.value===e.defaultValue;let o=t.form;if(!o)return;let r=()=>queueMicrotask(()=>{let a=t.value;F(e.local,e.bind,e.controlled,a,n);let d=od(M(e.local,e.bind,e.controlled));d!==void 0&&(t.value=d),n.redraw()});return o.addEventListener("reset",r),()=>o.removeEventListener("reset",r)}function od(e){return e==null?void 0:String(e)}function ms(e){return e==null?[]:Array.isArray(e)?e:[e]}var oe=Zo;var rd=i`div
  position fixed
  inset auto
  box-sizing border-box
  width max-content
  height auto
  margin 0
`;function id(e,t){e.content=t;let n=t.ownerDocument.defaultView,o=()=>dd(e),r=c=>{!e.open||e.control?.contains(c.target)||t.contains(c.target)||(e.open=!1,e.activeId=void 0,e.editing=!1,i.redraw())},a=c=>{e.selectOnly||!e.open||c.defaultPrevented||c.key!=="Escape"||!e.control?.contains(c.target)&&!t.contains(c.target)||(c.preventDefault(),t.contains(c.target)&&e.input?.focus(),e.open=!1,e.activeId=void 0,e.editing=!1,i.redraw())};n.addEventListener("resize",o),n.addEventListener("scroll",o,!0),t.ownerDocument.addEventListener("pointerdown",r,!0),t.ownerDocument.addEventListener("keydown",a);let d=new ResizeObserver(o);return d.observe(t),queueMicrotask(()=>{t.isConnected&&e.control&&d.observe(e.control),Qo(e)}),()=>{n.removeEventListener("resize",o),n.removeEventListener("scroll",o,!0),t.ownerDocument.removeEventListener("pointerdown",r,!0),t.ownerDocument.removeEventListener("keydown",a),d.disconnect(),t.matches(":popover-open")&&t.hidePopover(),e.content===t&&(e.content=void 0)}}function Qo(e){let t=e.content;if(!t?.isConnected||!t.showPopover)return;let n=t.matches(":popover-open");e.open&&!n?(t.hidden=!1,t.showPopover({source:e.input||e.control})):!e.open&&n&&t.hidePopover(),dd(e),e.open&&!n&&e.items.find(o=>o.id===e.activeId)?.scrollIntoView({block:"nearest"})}function dd(e){let t=e.content;if(!e.open||!t?.isConnected||!e.control)return;let n=e.control.getBoundingClientRect(),o=t.ownerDocument.defaultView,r=8,a=6,d=Math.max(0,o.innerWidth-r*2);t.style.minWidth=Math.min(n.width,d)+"px",t.style.maxWidth=d+"px";let c=t.getBoundingClientRect().width,s=o.innerHeight-n.bottom-a-r,l=n.top-a-r,u=s<Math.min(t.scrollHeight,280)&&l>s,h=Math.max(0,u?l:s);Object.assign(t.style,{maxHeight:Math.min(320,h)+"px",left:Math.max(r,Math.min(n.left,o.innerWidth-c-r))+"px",top:u?"auto":n.bottom+a+"px",bottom:u?o.innerHeight-n.top+a+"px":"auto"})}var ld=Symbol("sinewy-combobox"),ad=Symbol("sinewy-combobox-ids"),cd=Symbol("sinewy-selection-group");function Ln({name:e="Combobox",selectOnly:t=!1}={}){let n=i(({id:o,multiple:r=!1,defaultValue:a=r?[]:null},[],d)=>{let c=o||Ts(d,e),s=W(a,d),l={name:e,selectOnly:t,id:c,controlId:c+"-control",inputId:c+"-input",contentId:c+"-content",optionId:0,control:void 0,input:void 0,content:void 0,items:[],labels:new Map,records:new Map,defaultValue:a,disabled:!1,required:!1,invalid:!1,typeahead:"",typedAt:0,local:s,multiple:r,dir:"ltr",selected:Rn(a,r),controlled:void 0,bind:void 0,onvaluechange:void 0,filter:sd,formatValue:void 0,query:"",editing:!1,open:!1,activeId:void 0,activePill:void 0,context:d},u=Object.create(d);return u[ld]=l,({multiple:h=!1,value:p,bind:f,dir:g="ltr",filter:m=sd,formatValue:v,onvaluechange:y,disabled:x=!1,required:w=!1},k,b)=>(Y(s,f,{redraw:i.redraw}),l.multiple=h,l.dir=g,l.controlled=p,l.bind=f,l.onvaluechange=y,l.filter=m,l.formatValue=v,l.disabled=x,l.required=w,l.selected=Rn(M(s,f,p),h),x&&(l.open=!1),!h&&!l.editing&&(l.query=ft(l,l.selected)),i({context:u},()=>k))});return n.Control=i(({dom:o,onclick:r,onfocusout:a,...d},c,s)=>{let l=Je(s,"Control");return i`div`({...d,id:d.id||l.controlId,data:{...d.data,state:l.open?"open":"closed",multiple:l.multiple?"":null},dom:Ft([u=>l.control=u,...ht(o)]),onclick:(u,h,p,f)=>{D(r,u,h,p,f),!u.defaultPrevented&&u.target===h&&l.input&&l.input.focus()},onfocusout:(u,h,p,f)=>{D(a,u,h,p,f),!u.defaultPrevented&&queueMicrotask(()=>{let g=document.activeElement;h.contains(g)||l.content&&l.content.contains(g)||(l.activePill=void 0,Oe(l,!0))})}},c)}),n.Pills=i(({},[],o)=>{let r=Je(o,"Pills");return({removelabel:a,...d},[],c)=>{if(!r.multiple)return null;let s=r.selected;return i`span`({...d,data:{...d.data,sinewyComboboxPills:""},dom:ht(d.dom)},s.map((l,u)=>i`button`({key:l,type:"button",tabIndex:-1,"aria-label":a?a(l,ft(r,l)):"Remove "+ft(r,l),data:{sinewyComboboxPill:"",selected:r.activePill===l?"":null,value:l},onfocus:()=>{r.activePill=l,i.redraw()},onclick:h=>{h.preventDefault(),pd(r,l,h),r.input&&r.input.focus()},onkeydown:h=>vs(r,h,u,l)},ft(r,l))))}}),n.Input=i(({},[],o)=>{let r=Je(o,"Input"),a,d=()=>{};function c(l,u){d(),a=l.pointerId;let h=u.ownerDocument,p=h.defaultView,f,g=m=>{m.pointerId===a&&(m.type==="pointercancel"?d():f=setTimeout(()=>d(),0))};d=()=>{clearTimeout(f),a=void 0,h.removeEventListener("pointerup",g,!0),h.removeEventListener("pointercancel",g,!0),p.removeEventListener("blur",d)},h.addEventListener("pointerup",g,!0),h.addEventListener("pointercancel",g,!0),p.addEventListener("blur",d)}function s(l){r.disabled||l.matches(":disabled")||(r.editing=!0,r.open=!0,r.activePill=void 0,r.multiple||(r.query="",l.select()))}return(l,[],u)=>i`input`({...l,id:l.id||r.inputId,type:l.type||"text",role:"combobox",value:r.query,autocomplete:l.autocomplete||"off","aria-autocomplete":"list","aria-controls":r.contentId,"aria-expanded":String(r.open),"aria-activedescendant":r.open?r.activeId:null,dom:Ft([h=>(r.input=h,()=>{d(),r.input===h&&(r.input=void 0)}),...ht(l.dom)]),onpointerdown:(h,p,f,g)=>{D(l.onpointerdown,h,p,f,g),!h.defaultPrevented&&h.button===0&&h.isPrimary&&!r.disabled&&c(h,p)},onfocus:(h,p,f,g)=>{D(l.onfocus,h,p,f,g),!h.defaultPrevented&&a===void 0&&s(p)},onclick:(h,p,f,g)=>{d(),D(l.onclick,h,p,f,g),!h.defaultPrevented&&!r.open&&p.isConnected&&p.ownerDocument.activeElement===p&&s(p)},oninput:(h,p,f,g)=>{D(l.oninput,h,p,f,g),!h.defaultPrevented&&(r.query=p.value,r.editing=!0,r.open=!0,r.activeId=ws(r)?.id)},onkeydown:(h,p,f,g)=>{D(l.onkeydown,h,p,f,g),h.defaultPrevented||bs(r,h,p)},onblur:(h,p,f,g)=>{d(),D(l.onblur,h,p,f,g)}})}),n.Content=i(({dom:o,...r},a,d)=>{let c=Je(d,"Content");return queueMicrotask(()=>Qo(c)),rd({...r,id:c.contentId,role:"listbox",popover:c.selectOnly?"auto":"manual",hidden:c.open?null:!0,"aria-multiselectable":c.multiple?"true":null,data:{...r.data,state:c.open?"open":"closed"},dom:Ft([s=>id(c,s),...ht(o)]),ontoggle:(s,...l)=>{D(r.ontoggle,s,...l),!c.content?.matches(":popover-open")&&s.newState==="closed"&&c.open&&Oe(c,!0)}},a)}),n.Item=i(({id:o},[],r)=>{let a=Je(r,"Item"),d=o||a.id+"-option-"+ ++a.optionId;return r.onremove(()=>{a.records.delete(d),a.activeId===d&&(a.activeId=void 0)}),({value:c,textValue:s=String(c),disabled:l=!1,dom:u,onclick:h,onpointerdown:p,onpointermove:f,onselect:g,...m},v,y)=>{if(typeof c!="string")throw new TypeError("Combobox.Item value must be a string");if(t&&!c)throw new TypeError("CustomSelect.Option value must be a non-empty string");l||=!!y[cd]?.disabled,a.labels.set(c,s);let x=tr(a,c),w=a.selectOnly||a.filter(s,a.query,c);return a.records.set(d,{value:c,textValue:s,disabled:l,onselect:g}),i`div`({...m,id:d,role:"option",tabIndex:-1,hidden:w?null:!0,"aria-selected":String(x),"aria-disabled":String(l),data:{...m.data,value:c,textValue:s,selected:x?"":null,disabled:l?"":null,highlighted:a.activeId===d?"":null},dom:Ft([k=>xs(a,k),...ht(u)]),onpointerdown:(k,b,S,P)=>{D(p,k,b,S,P),k.defaultPrevented||k.preventDefault()},onpointermove:(k,b,S,P)=>{D(f,k,b,S,P),!(k.defaultPrevented||l||a.disabled)&&(a.activeId=d)},onclick:(k,b,S,P)=>{D(h,k,b,S,P),!(k.defaultPrevented||l||a.disabled||a.input?.matches(":disabled"))&&(D(g,k,b,S,P),k.defaultPrevented||ys(a,c,s,a.keyboardEvent||k))}},v)}}),n.Group=i(({label:o,disabled:r=!1,...a},d,c)=>{let s=Object.create(c);return s[cd]={disabled:r},i`div`({...a,role:"group","aria-label":o},i`div`({"aria-hidden":"true",data:{selectionGroupLabel:""}},o),i({context:s},()=>d))}),n.Trigger=i((o,r,a)=>{let d=Je(a,"Trigger"),{placeholder:c="Choose an option",dom:s,...l}=o;return i`button`({...l,id:o.id||d.inputId,type:"button",role:"combobox",disabled:d.disabled,"aria-haspopup":"listbox","aria-expanded":String(d.open),"aria-controls":d.contentId,"aria-activedescendant":d.open?d.activeId:null,"aria-required":d.required?"true":null,"aria-invalid":d.invalid&&!d.selected?"true":o["aria-invalid"],data:{...o.data,state:d.open?"open":"closed",placeholder:d.selected==null?"":null},dom:Ft([u=>d.input=d.control=u,...ht(s)]),onclick:(u,...h)=>{D(o.onclick,u,...h),!(u.defaultPrevented||d.disabled)&&(d.open?Oe(d,!0):On(d))},onkeydown:(u,...h)=>{D(o.onkeydown,u,...h),!u.defaultPrevented&&!d.disabled&&gs(d,u)},onblur:(u,...h)=>{D(o.onblur,u,...h),u.defaultPrevented||Oe(d,!0)}},r.length?r:ft(d,d.selected)||c)}),n.FormControl=i((o,[],r)=>{let a=Je(r,"FormControl");return i`select
      position absolute
      width 1px
      height 1px
      padding 0
      border 0
      margin -1px
      overflow hidden
      clip-path inset(50%)
      white-space nowrap
    `({...o,tabIndex:-1,"aria-hidden":"true",required:a.required,disabled:a.disabled,value:a.selected??"",dom:d=>{let c=s=>{s.target===d.form&&queueMicrotask(()=>{s.defaultPrevented||(a.invalid=!1,Vt(a,a.defaultValue??null,s),Oe(a,!0))})};return d.ownerDocument.addEventListener("reset",c,!0),()=>d.ownerDocument.removeEventListener("reset",c,!0)},oninvalid:d=>{d.preventDefault(),a.invalid=!0,a.input?.focus(),i.redraw()},onchange:d=>{Vt(a,d.target.value||null,d),Oe(a,!0)}},i`option`({value:"",selected:a.selected==null},""),Array.from(a.records.values(),d=>i`option`({value:d.value,disabled:d.disabled,selected:a.selected===d.value},d.textValue)))}),n}function On(e){e.open=!0;let t=Gt(e);e.activeId=(t.find(n=>n.dataset.value===e.selected)||t[0])?.id,i.redraw(),e.items.find(n=>n.id===e.activeId)?.scrollIntoView({block:"nearest"})}function gs(e,t){let n=t.key;if(n==="Escape"&&e.open){t.preventDefault(),Oe(e,!0);return}if(n==="Tab"){e.open&&er(e,t),Oe(e,!0);return}if(n==="Enter"||n===" "){t.preventDefault(),e.open?er(e,t):On(e);return}if(["ArrowDown","ArrowUp","Home","End"].includes(n)){t.preventDefault();let h=e.open;if(h||On(e),n==="Home"||n==="End"){let p=Gt(e);e.activeId=(n==="Home"?p[0]:p.at(-1))?.id}else h&&!t.altKey?ud(e,n==="ArrowDown"?1:-1):h&&n==="ArrowUp"&&t.altKey&&er(e,t);e.items.find(p=>p.id===e.activeId)?.scrollIntoView({block:"nearest"});return}if(n.length!==1||t.ctrlKey||t.metaKey||t.altKey||t.isComposing)return;t.preventDefault();let o=Date.now();e.typeahead=o-e.typedAt>700?n:e.typeahead+n,e.typedAt=o;let r=[...e.typeahead].every(h=>h===n),a=(r?n:e.typeahead).toLocaleLowerCase();e.open||On(e);let d=Gt(e),c=d.findIndex(h=>h.id===e.activeId),s=r?c+1:Math.max(0,c),u=d.slice(s).concat(d.slice(0,s)).find(h=>h.dataset.textValue.toLocaleLowerCase().startsWith(a));u&&(e.activeId=u.id,u.scrollIntoView({block:"nearest"}))}function er(e,t){let n=Gt(e).find(o=>o.id===e.activeId);if(n){e.keyboardEvent=t;try{n.click()}finally{e.keyboardEvent=void 0}}}function bs(e,t,n){if(t.key==="ArrowDown"||t.key==="ArrowUp"){t.preventDefault(),e.open=!0,ud(e,t.key==="ArrowDown"?1:-1);return}if(t.key==="Enter"&&e.open&&e.activeId){let o=e.items.find(r=>r.id===e.activeId);if(!o||!hd(o))return;t.preventDefault(),o.click();return}if(t.key==="Escape"&&e.open){t.preventDefault(),Oe(e,!0);return}if(!(!e.multiple||n.selectionStart!==0||n.selectionEnd!==0)&&(t.key==="Backspace"||t.key===fd(e))){let o=qn(e);if(!o.length)return;t.preventDefault(),o.at(-1).focus()}}function vs(e,t,n,o){let r=qn(e);if(t.key==="Backspace"||t.key==="Delete"){t.preventDefault(),pd(e,o,t),i.redraw().then(()=>{let a=qn(e);(a[Math.min(n,a.length-1)]||e.input)?.focus()});return}if(t.key===fd(e)){t.preventDefault(),r[Math.max(0,n-1)]?.focus();return}t.key===Cs(e)&&(t.preventDefault(),(r[n+1]||e.input)?.focus())}function ys(e,t,n,o){if(o.key!=="Tab"&&e.input&&e.input.focus(),e.multiple){let r=tr(e,t)?e.selected.filter(a=>a!==t):[...e.selected,t];Vt(e,r,o),e.query="",e.open=!0,e.activeId=void 0}else Vt(e,t,o),e.query=n,e.editing=!1,e.open=!1,e.activeId=void 0;e.invalid=!1,i.redraw()}function pd(e,t,n){e.multiple&&(Vt(e,e.selected.filter(o=>o!==t),n),e.activePill=void 0)}function Vt(e,t,n){Ss(e.bind)?(e.bind(t),e.selected=Rn(t,e.multiple)):e.controlled===void 0&&(e.local.value=t,e.selected=Rn(t,e.multiple),i.redraw()),e.onvaluechange&&e.onvaluechange(t,n)}function ud(e,t){let n=Gt(e);if(!n.length){e.activeId=void 0;return}let o=n.findIndex(d=>d.id===e.activeId),r=o===-1?t>0?0:n.length-1:e.selectOnly?Math.max(0,Math.min(n.length-1,o+t)):(o+t+n.length)%n.length,a=n[r];e.activeId=a.id,a.scrollIntoView({block:"nearest"})}function Oe(e,t){e.open=!1,e.activeId=void 0,e.editing=!1,t&&!e.multiple&&(e.query=ft(e,e.selected)),i.redraw()}function Gt(e){return e.items.filter(hd).sort((t,n)=>t.compareDocumentPosition(n)&4?-1:t===n?0:1)}function ws(e){return e.items.find(t=>t.getAttribute("aria-disabled")!=="true"&&e.filter(t.dataset.textValue,e.query,t.dataset.value))}function hd(e){return!e.hidden&&e.getAttribute("aria-disabled")!=="true"}function xs(e,t){return e.items.push(t),ks(e,t),()=>e.items=e.items.filter(n=>n!==t)}function ks(e,t){if(!e.selectOnly&&tr(e,t.dataset.value)){if(!e.multiple&&!e.editing&&e.query!==t.dataset.textValue){e.query=t.dataset.textValue,queueMicrotask(i.redraw);return}if(e.multiple){let n=qn(e).find(o=>o.dataset.value===t.dataset.value);n&&n.textContent!==t.dataset.textValue&&queueMicrotask(i.redraw)}}}function qn(e){return e.control?Array.from(e.control.querySelectorAll("[data-sinewy-combobox-pill]")):[]}function ft(e,t){return t==null?"":e.formatValue?e.formatValue(t):e.labels.get(t)||String(t)}function tr(e,t){return e.multiple?e.selected.includes(t):e.selected===t}function Rn(e,t){return t?Array.isArray(e)?[...new Set(e)]:e==null?[]:[e]:Array.isArray(e)?e[0]??null:e??null}function sd(e,t){return e.toLocaleLowerCase().includes(t.trim().toLocaleLowerCase())}function Ss(e){return typeof e=="function"&&typeof e.observe=="function"}function fd(e){return e.dir==="rtl"?"ArrowRight":"ArrowLeft"}function Cs(e){return e.dir==="rtl"?"ArrowLeft":"ArrowRight"}function Je(e,t){let n=e[ld];if(!n)throw new Error("Combobox."+t+" must be used inside Combobox");return n}function Ts(e,t){let n=e,o;for(;(o=Object.getPrototypeOf(n))&&o!==Object.prototype;)n=o;let r=n[ad]||(n[ad]={value:0});return"sinewy-"+(t==="Combobox"?"combobox":"custom-select")+"-"+ ++r.value}function Ft(e){return e.filter(Boolean)}function ht(e){return e==null?[]:Array.isArray(e)?e:[e]}var Mn=Ln();delete Mn.Trigger;delete Mn.FormControl;delete Mn.Group;var Xe=Mn;var md=Symbol("sinewy-combobox-theme"),As=i`div
  width min(100%, 320px)
  display grid
  position relative
  gap 6
  color $sinewy-neutral-12
  font-family inherit
`,Ds=Xe.Control`
  width 100%
  min-height 36
  display flex
  flex-wrap wrap
  align-items center
  gap 5
  padding 4px 8px
  border 1px solid $sinewy-neutral-7
  border-radius 9
  background $sinewy-panel
  color inherit
  box-shadow 0 1px 2px light-dark(rgb(0 0 0 / 0.04), rgb(0 0 0 / 0.24))
  cursor text
  transition border-color 80ms ease, box-shadow 80ms ease

  &[data-size='1'] {
    min-height 30
    gap 4
    padding 3px 7px
    border-radius 7
  }

  &[data-size='3'] {
    min-height 42
    gap 6
    padding 5px 10px
    border-radius 11
  }

  &:hover {
    border-color $sinewy-neutral-8
  }

  &:focus-within {
    border-color $sinewy-accent-8
    box-shadow 0 0 0 3px color-mix(in srgb, $sinewy-accent-8 26%, transparent)
  }

  &[data-state='open'] {
    border-color $sinewy-accent-8
    box-shadow 0 0 0 3px color-mix(in srgb, $sinewy-accent-8 26%, transparent)
  }

  &[data-high-contrast]:focus-within {
    border-color $sinewy-accent-9
  }

  &[data-high-contrast][data-state='open'] {
    border-color $sinewy-accent-9
  }

  @media (prefers-reduced-motion: reduce) {
    transition none
  }
`,Is=Xe.Pills`
  display contents

  > [data-sinewy-combobox-pill] {
    min-width 0
    min-height 24
    display inline-flex
    align-items center
    gap 5
    padding 2px 7px
    border 0
    border-radius 6
    background $sinewy-accent-3
    color $sinewy-accent-11
    font inherit
    font-size 12
    font-weight 650
    line-height 18px
    cursor pointer
  }

  > [data-sinewy-combobox-pill]::after {
    content '×'
    color currentColor
    font-size 13
    line-height 1
    opacity 0.62
  }

  > [data-sinewy-combobox-pill]:hover {
    background $sinewy-accent-4
    color $sinewy-accent-12
  }

  > [data-sinewy-combobox-pill]:focus-visible {
    outline 2px solid $sinewy-accent-8
    outline-offset 1px
  }

  > [data-sinewy-combobox-pill][data-selected] {
    outline 2px solid $sinewy-accent-8
    outline-offset 1px
  }

  &[data-size='1'] > [data-sinewy-combobox-pill] {
    min-height 20
    padding 1px 6px
    border-radius 5
    font-size 11
    line-height 16px
  }

  &[data-size='3'] > [data-sinewy-combobox-pill] {
    min-height 28
    padding 3px 8px
    border-radius 7
    font-size 13
    line-height 20px
  }

  &[data-high-contrast] > [data-sinewy-combobox-pill] {
    background $sinewy-accent-4
    color $sinewy-accent-12
  }
`,Ps=Xe.Input`
  min-width 9ch
  min-height 26
  flex 1 1 9ch
  padding 0 2px
  outline 0
  border 0
  background transparent
  color inherit
  font inherit
  font-size 13
  line-height 20px

  &::placeholder {
    color $sinewy-neutral-9
  }

  &[data-size='1'] {
    min-height 22
    font-size 12
    line-height 18px
  }

  &[data-size='3'] {
    min-height 30
    font-size 14
    line-height 22px
  }
`,nr=Xe.Content`
  width max-content
  height auto
  max-height min(280px, calc(100vh - 24px))
  display grid
  align-content start
  grid-auto-rows max-content
  position fixed
  inset auto
  margin 0
  gap 2
  padding 5
  overflow auto
  overflow-wrap anywhere
  border 1px solid $sinewy-neutral-6
  border-radius 10
  background color-mix(in srgb, $sinewy-panel 98%, transparent)
  color inherit
  box-shadow 0 18px 48px light-dark(rgb(35 31 24 / 0.16), rgb(0 0 0 / 0.48)), 0 3px 10px light-dark(rgb(35 31 24 / 0.07), rgb(0 0 0 / 0.26))
  z-index 20

  &[hidden] {
    display none
  }

  &[data-size='1'] {
    max-height min(240px, calc(100vh - 20px))
    padding 4
    border-radius 8
  }

  &[data-size='3'] {
    max-height min(320px, calc(100vh - 28px))
    padding 6
    border-radius 12
  }
`,zs=Xe.Item`
  box-sizing border-box
  width 100%
  min-height 34
  display grid
  grid-template-columns minmax(0, 1fr) auto
  align-items center
  gap 10
  padding 6px 8px
  border-radius 7
  color $sinewy-neutral-12
  font-size 13
  line-height 20px
  cursor pointer
  user-select none

  &[hidden] {
    display none
  }

  > [data-selection-indicator] {
    color $sinewy-accent-11
    font-size 12
    font-weight 900
    opacity 0
  }

  &[data-selected] {
    background $sinewy-accent-3
    color $sinewy-accent-12
    font-weight 650
  }

  &[data-selected] > [data-selection-indicator] {
    opacity 1
  }

  &[data-highlighted] {
    background $sinewy-accent-9
    color $sinewy-accent-contrast
  }

  &[data-highlighted] > [data-selection-indicator] {
    color currentColor
  }

  &[data-high-contrast][data-highlighted] {
    background $sinewy-accent-12
    color $sinewy-accent-1
  }

  &[data-disabled] {
    color $sinewy-neutral-9
    cursor default
  }

  &[data-size='1'] {
    min-height 30
    padding 5px 7px
    border-radius 6
    font-size 12
    line-height 18px
  }

  &[data-size='3'] {
    min-height 40
    padding 8px 10px
    border-radius 9
    font-size 14
    line-height 22px
  }
`,or=i((e,t)=>zs({...e,"aria-label":e["aria-label"]??e.textValue},i`span`(t),i`span`({"aria-hidden":"true",data:{selectionIndicator:""}},"\u2713"))),mt=i(({id:e,multiple:t,value:n,defaultValue:o,bind:r,dir:a,filter:d,formatValue:c,onvaluechange:s,size:l="2",color:u="accent",highContrast:h=!1,data:p,style:f,...g},m,v)=>{let y={size:l,color:u,highContrast:h},x=Object.create(v);return x[md]=y,As({...g,id:e,style:$(u,f),data:E(p,y)},i({context:x},()=>Xe({id:e,multiple:t,value:n,defaultValue:o,bind:r,dir:a,filter:d,formatValue:c,onvaluechange:s},m)))});mt.Control=Ht(Ds);mt.Pills=Ht(Is);mt.Input=Ht(Ps);mt.Content=Ht(nr);mt.Item=Ht(or);function Ht(e){return i((t,n,o)=>{let{size:r="2",highContrast:a=!1}=o[md]||{};return e({...t,data:E(t.data,{size:r,highContrast:a})},n)})}var se=mt;var Bn=Ln({name:"CustomSelect",selectOnly:!0}),gd=Symbol("sinewy-custom-select-theme"),Es=i`div
  position relative
  width min(100%, 320px)
  color $sinewy-neutral-12
  font-family inherit
`,$s=Bn.Trigger`
  width 100%
  min-width 0
  min-height 36
  display flex
  align-items center
  justify-content space-between
  gap 10
  padding 6px 10px
  border 1px solid $sinewy-neutral-7
  border-radius 9
  background $sinewy-panel
  color inherit
  font inherit
  font-size 13
  line-height 20px
  text-align start
  cursor pointer
  box-shadow 0 1px 2px light-dark(rgb(0 0 0 / 0.04), rgb(0 0 0 / 0.24))
  transition border-color 80ms ease, box-shadow 80ms ease

  &::after {
    content ''
    width 7
    height 7
    flex-shrink 0
    margin-inline 3px
    margin-block-start -3px
    border-right 1.5px solid currentColor
    border-bottom 1.5px solid currentColor
    transform rotate(45deg)
    color $sinewy-accent-11
  }

  &[data-state='open']::after {
    margin-block-start 3px
    transform rotate(225deg)
  }

  &:hover:not(:disabled) {
    border-color $sinewy-accent-8
  }

  &:focus-visible {
    outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
    outline-offset 2px
  }

  &[data-state='open'] {
    border-color $sinewy-accent-8
  }

  &[data-placeholder] {
    color $sinewy-neutral-11
  }

  &[data-high-contrast] {
    border-color $sinewy-accent-8
  }

  &[aria-invalid='true'] {
    border-color #e5484d
  }

  &:disabled {
    cursor default
    opacity 0.5
  }

  &[data-size='1'] {
    min-height 30
    padding 4px 8px
    border-radius 7
    font-size 12
    line-height 18px
  }

  &[data-size='3'] {
    min-height 42
    padding 8px 12px
    border-radius 11
    font-size 14
    line-height 22px
  }

  @media (prefers-reduced-motion: reduce) {
    transition none
  }
`,Os=Bn.Group`
  & + [role='group'] {
    margin-block-start 5px
    border-block-start 1px solid $sinewy-neutral-6
  }

  > [data-selection-group-label] {
    padding 7px 8px 4px
    color $sinewy-neutral-11
    font-size 11
    font-weight 750
    letter-spacing 0.06em
    text-transform uppercase
  }
`,rr=i(({id:e,value:t,defaultValue:n,bind:o,onvaluechange:r,formatValue:a,name:d,form:c,required:s=!1,disabled:l=!1,autocomplete:u,placeholder:h,dir:p="ltr",size:f="2",color:g="accent",highContrast:m=!1,style:v,data:y,...x},w,k)=>{let b={size:f,color:g,highContrast:m},S=Object.create(k);return S[gd]=b,Es({dir:p,style:$(g,v),data:E(y,b)},i({context:S},()=>Bn({id:e,value:t,defaultValue:n,bind:o,onvaluechange:r,formatValue:a,disabled:l,required:s},nr({"aria-label":x["aria-label"],"aria-labelledby":x["aria-labelledby"],data:E({},b)},w),$s({...x,id:e,form:c,placeholder:h,data:E({},b)}),Bn.FormControl({name:d,form:c,autocomplete:u}))))});rr.Option=i(({value:e,textValue:t,...n},o,r)=>{if(typeof e!="string"||!e)throw new TypeError("CustomSelect.Option value must be a non-empty string");let a=r[gd]||{};return or({...n,value:e,textValue:t??(o.every(d=>typeof d=="string"||typeof d=="number")?o.join(""):e),data:E(n.data,a)},o)});rr.Group=Os;var we=rr;var jn=i`fieldset
  min-width 0
  display grid
  gap 8
  margin 0
  padding 0
  border 0

  > legend {
    margin-bottom 8
    padding 0
    color $sinewy-neutral-12
    font-size 14
    font-weight 750
    line-height 1.3
  }
`;var bd=Symbol("sinewy-checkbox-group"),qs=i`input
  width 18
  height 18
  display inline-grid
  place-content center
  flex 0 0 auto
  margin 0
  padding 0
  border 1px solid $sinewy-neutral-8
  border-radius 5
  appearance none
  background $sinewy-panel
  color $sinewy-accent-contrast
  cursor pointer
  vertical-align middle
  transition background-color 80ms ease, border-color 80ms ease, box-shadow 80ms ease

  &::before {
    content ''
    width 9px
    height 5px
    border-inline-start 2px solid currentColor
    border-block-end 2px solid currentColor
    opacity 0
    transform translateY(-1px) rotate(-45deg) scale(0.7)
    transition opacity 80ms ease, transform 80ms ease
  }

  &[data-size='1'] {
    width 16
    height 16
    border-radius 4
  }

  &[data-size='3'] {
    width 22
    height 22
    border-radius 6

    &::before {
      width 11px
      height 6px
    }
  }

  &:hover:not(:disabled) {
    border-color $sinewy-accent-8
    background $sinewy-accent-2
  }

  &:checked {
    border-color $sinewy-accent-9
    background $sinewy-accent-9
  }

  &:checked::before {
    opacity 1
    transform translateY(-1px) rotate(-45deg) scale(1)
  }

  &:checked:hover:not(:disabled) {
    border-color $sinewy-accent-10
    background $sinewy-accent-10
  }

  &[data-high-contrast]:checked,
  &[data-color='gray']:checked {
    border-color $sinewy-accent-12
    background $sinewy-accent-12
    color $sinewy-accent-1
  }

  &:active:not(:disabled) {
    transform scale(0.94)
  }

  &:focus-visible {
    outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
    outline-offset 2px
  }

  &:disabled {
    cursor default
    opacity 0.48
  }

  @media (prefers-reduced-motion: reduce) {
    transition none

    &::before {
      transition none
    }
  }
`,vd=i(({defaultChecked:e=!1},[],t)=>{let n=W(!!e,t),o={local:n,defaultChecked:!!e,bind:void 0,controlled:void 0};return({checked:r,defaultChecked:a,bind:d,oncheckedchange:c,onchange:s,dom:l,disabled:u=!1,size:h,color:p,highContrast:f,type:g,role:m,value:v="on",data:y,style:x,...w},[],k)=>{let b=k[bd],S=h??b?.size??"2",P=p??b?.color??"accent",j=f??b?.highContrast??!1,N=String(v),xe=b?void 0:r;o.bind=d,o.controlled=xe,!b&&Y(n,d,k);let Z=b?b.renderValue.includes(N):!!M(n,d,r);return qs({...w,type:"checkbox",name:b?.name??w.name,value:N,checked:Z,disabled:u,style:$(P,x),data:E(y,{size:S,color:P,highContrast:j,state:Z?"checked":"unchecked"}),dom:[X=>Ls(o,b,X,k),...yd(l)],onchange:(X,Ve,vt,Ge)=>{D(s,X,Ve,vt,Ge);let Ze=Ve.checked;if(b){let yt=Ze?[...new Set([...b.renderValue,N])]:b.renderValue.filter(Kt=>Kt!==N);F(b.local,b.bind,b.controlled,yt,b.context),c&&c(Ze,X),b.onvaluechange&&b.onvaluechange(yt,X),b.controlled!==void 0&&Bs(b)}else F(n,d,r,Ze,k),c&&c(Ze,X),r!==void 0&&(Ve.checked=Z)}})}}),Rs=i(({defaultValue:e=[]},[],t)=>{let n=ir(e),o=W(n,t),r={local:o,defaultValue:n,bind:void 0,controlled:void 0,renderValue:n,context:t,element:void 0,onvaluechange:void 0,name:void 0,size:"2",color:"accent",highContrast:!1},a=Object.create(t);return a[bd]=r,({value:d,defaultValue:c,bind:s,onvaluechange:l,name:u,disabled:h=!1,size:p="2",color:f="accent",highContrast:g=!1,dom:m,data:v,style:y,...x},w,k)=>(r.bind=s,r.controlled=d===void 0?void 0:ir(d),r.context=k,r.onvaluechange=l,r.name=u,r.size=p,r.color=f,r.highContrast=g,Y(o,s,k),r.renderValue=ir(M(o,s,r.controlled)),i({context:a},()=>jn({...x,disabled:h,style:$(f,y),data:E(v,{size:p,color:f,highContrast:g}),dom:[b=>Ms(r,b),...yd(m)]},w)))});vd.Group=Rs;function Ls(e,t,n,o){if(n.defaultChecked=t?t.defaultValue.includes(n.value):e.defaultChecked,t)return;let r=n.form;if(!r)return;let a=()=>queueMicrotask(()=>{let d=n.checked;F(e.local,e.bind,e.controlled,d,o),n.checked=!!M(e.local,e.bind,e.controlled),o.redraw()});return r.addEventListener("reset",a),()=>r.removeEventListener("reset",a)}function Ms(e,t){e.element=t;let n=t.form;if(!n)return;let o=()=>queueMicrotask(()=>{let r=[...e.defaultValue];F(e.local,e.bind,e.controlled,r,e.context),e.context.redraw()});return n.addEventListener("reset",o),()=>n.removeEventListener("reset",o)}function Bs(e){e.element?.querySelectorAll('input[type="checkbox"]').forEach(t=>{t.checked=e.renderValue.includes(t.value)}),e.context.redraw()}function ir(e){return e==null?[]:[...new Set([...e].map(String))]}function yd(e){return e==null?[]:Array.isArray(e)?e:[e]}var gt=vd;var wd=Symbol("sinewy-radio-group"),Nn=Symbol("sinewy-radio-names"),js=i`input
  width 18
  height 18
  display inline-grid
  place-content center
  flex 0 0 auto
  margin 0
  padding 0
  border 1px solid $sinewy-neutral-8
  border-radius 50%
  appearance none
  background $sinewy-panel
  color $sinewy-accent-contrast
  cursor pointer
  vertical-align middle
  transition background-color 80ms ease, border-color 80ms ease, box-shadow 80ms ease

  &::before {
    content ''
    width 8px
    height 8px
    border-radius 50%
    background currentColor
    opacity 0
    transform scale(0.6)
    transition opacity 80ms ease, transform 80ms ease
  }

  &[data-size='1'] {
    width 16
    height 16

    &::before {
      width 6px
      height 6px
    }
  }

  &[data-size='3'] {
    width 22
    height 22

    &::before {
      width 10px
      height 10px
    }
  }

  &:hover:not(:disabled) {
    border-color $sinewy-accent-8
    background $sinewy-accent-2
  }

  &:checked {
    border-color $sinewy-accent-9
    background $sinewy-accent-9
  }

  &:checked::before {
    opacity 1
    transform scale(1)
  }

  &:checked:hover:not(:disabled) {
    border-color $sinewy-accent-10
    background $sinewy-accent-10
  }

  &[data-high-contrast]:checked,
  &[data-color='gray']:checked {
    border-color $sinewy-accent-12
    background $sinewy-accent-12
    color $sinewy-accent-1
  }

  &:active:not(:disabled) {
    transform scale(0.94)
  }

  &:focus-visible {
    outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
    outline-offset 2px
  }

  &:disabled {
    cursor default
    opacity 0.48
  }

  @media (prefers-reduced-motion: reduce) {
    transition none

    &::before {
      transition none
    }
  }
`,xd=i(({defaultChecked:e=!1},[],t)=>{let n=W(!!e,t),o={local:n,defaultChecked:!!e,bind:void 0,controlled:void 0};return({checked:r,defaultChecked:a,bind:d,oncheckedchange:c,onchange:s,dom:l,disabled:u=!1,size:h,color:p,highContrast:f,type:g,role:m,value:v="on",data:y,style:x,...w},[],k)=>{let b=k[wd],S=h??b?.size??"2",P=p??b?.color??"accent",j=f??b?.highContrast??!1,N=String(v);o.bind=d,o.controlled=b?void 0:r,!b&&Y(n,d,k);let xe=b?b.renderValue===N:!!M(n,d,r);return js({...w,type:"radio",name:b?.name??w.name,value:N,checked:xe,required:b&&b.required||w.required,disabled:u,style:$(P,x),data:E(y,{size:S,color:P,highContrast:j,state:xe?"checked":"unchecked"}),dom:[Z=>Fs(o,b,Z,k),...kd(l)],onchange:(Z,X,Ve,vt)=>{D(s,Z,X,Ve,vt);let Ge=X.checked;b&&Ge?(F(b.local,b.bind,b.controlled,N,b.context),c&&c(!0,Z),b.onvaluechange&&b.onvaluechange(N,Z),b.controlled!==void 0&&Gs(b)):b||(F(n,d,r,Ge,k),c&&c(Ge,Z),r!==void 0&&(X.checked=xe))}})}}),Ns=i(({name:e,defaultValue:t},[],n)=>{let o=e||Hs(n),r=dr(t),a=W(r,n),d={local:a,defaultValue:r,bind:void 0,controlled:void 0,renderValue:r,context:n,element:void 0,onvaluechange:void 0,name:o,required:!1,size:"2",color:"accent",highContrast:!1},c=Object.create(n);return c[wd]=d,({value:s,defaultValue:l,bind:u,onvaluechange:h,name:p=o,required:f=!1,disabled:g=!1,size:m="2",color:v="accent",highContrast:y=!1,dom:x,data:w,style:k,...b},S,P)=>(d.bind=u,d.controlled=dr(s),d.context=P,d.onvaluechange=h,d.name=p,d.required=f,d.size=m,d.color=v,d.highContrast=y,Y(a,u,P),d.renderValue=dr(M(a,u,d.controlled)),i({context:c},()=>jn({...b,disabled:g,style:$(v,k),data:E(w,{size:m,color:v,highContrast:y}),dom:[j=>Vs(d,j),...kd(x)]},S)))});xd.Group=Ns;function Fs(e,t,n,o){if(n.defaultChecked=t?t.defaultValue===n.value:e.defaultChecked,t)return;let r=n.form;if(!r)return;let a=()=>queueMicrotask(()=>{let d=n.checked;F(e.local,e.bind,e.controlled,d,o),n.checked=!!M(e.local,e.bind,e.controlled),o.redraw()});return r.addEventListener("reset",a),()=>r.removeEventListener("reset",a)}function Vs(e,t){e.element=t;let n=t.form;if(!n)return;let o=()=>queueMicrotask(()=>{F(e.local,e.bind,e.controlled,e.defaultValue,e.context),e.context.redraw()});return n.addEventListener("reset",o),()=>n.removeEventListener("reset",o)}function Gs(e){e.element?.querySelectorAll('input[type="radio"]').forEach(t=>{t.checked=t.value===e.renderValue}),e.context.redraw()}function Hs(e){let t=e;for(;t&&!Object.prototype.hasOwnProperty.call(t,Nn);)t=Object.getPrototypeOf(t);return t||=e,t[Nn]=(t[Nn]||0)+1,"sinewy-radio-"+t[Nn]}function dr(e){return e==null?void 0:String(e)}function kd(e){return e==null?[]:Array.isArray(e)?e:[e]}var bt=xd;var Sd=Symbol("sinewy-theme"),Us=R.Content`
  $dropdown-item-gutter initial
  $dropdown-item-gutter-size 35px
  $dropdown-separator-margin 5px
  width max-content
  min-width 248
  max-width min(340px, calc(100vw - 24px))
  max-height min(480px, calc(100vh - 24px))
  padding 6
  overflow auto
  outline 0
  border 1px solid $sinewy-neutral-6
  border-radius 13
  background color-mix(in srgb, $sinewy-panel 98%, transparent)
  color $sinewy-neutral-12
  box-shadow 0 22px 60px light-dark(rgb(35 31 24 / 0.18), rgb(0 0 0 / 0.5)), 0 3px 10px light-dark(rgb(35 31 24 / 0.08), rgb(0 0 0 / 0.28))
  opacity 0
  transform translateY(-4px) scale(0.985)
  transform-origin $sinewy-transform-origin
  transition opacity 120ms ease, transform 120ms ease, display 120ms allow-discrete, overlay 120ms allow-discrete

  &[data-size='1'] {
    $dropdown-item-gutter-size 29px
    $dropdown-separator-margin 4px
    min-width 200
    max-width min(300px, calc(100vw - 20px))
    max-height min(400px, calc(100vh - 20px))
    padding 5
    border-radius 11
  }

  &[data-size='3'] {
    $dropdown-item-gutter-size 41px
    $dropdown-separator-margin 6px
    min-width 280
    max-width min(380px, calc(100vw - 28px))
    max-height min(540px, calc(100vh - 28px))
    padding 7
    border-radius 15
  }

  &:has(> [role='menuitemcheckbox']),
  &:has(> [role='menuitemradio']),
  &:has(> [role='group'] > [role='menuitemcheckbox']),
  &:has(> [role='group'] > [role='menuitemradio']) {
    $dropdown-item-gutter $dropdown-item-gutter-size
  }

  &:popover-open {
    opacity 1
    transform translateY(0) scale(1)
  }

  @starting-style {
    &:popover-open {
      opacity 0
      transform translateY(-4px) scale(0.985)
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition none
    transform none
  }

  &::backdrop {
    background transparent
  }
`,Ks=R.SubContent`
  $dropdown-item-gutter initial
  $dropdown-item-gutter-size 35px
  $dropdown-separator-margin 5px
  width max-content
  min-width 220
  max-width min(320px, calc(100vw - 24px))
  max-height min(440px, calc(100vh - 24px))
  padding 6
  overflow auto
  outline 0
  border 1px solid $sinewy-neutral-6
  border-radius 13
  background color-mix(in srgb, $sinewy-panel 98%, transparent)
  color $sinewy-neutral-12
  box-shadow 0 22px 60px light-dark(rgb(35 31 24 / 0.18), rgb(0 0 0 / 0.5)), 0 3px 10px light-dark(rgb(35 31 24 / 0.08), rgb(0 0 0 / 0.28))
  opacity 0
  transform translateY(-4px) scale(0.985)
  transform-origin $sinewy-transform-origin
  transition opacity 120ms ease, transform 120ms ease, display 120ms allow-discrete, overlay 120ms allow-discrete

  &[data-size='1'] {
    $dropdown-item-gutter-size 29px
    $dropdown-separator-margin 4px
    min-width 184
    max-width min(280px, calc(100vw - 20px))
    max-height min(380px, calc(100vh - 20px))
    padding 5
    border-radius 11
  }

  &[data-size='3'] {
    $dropdown-item-gutter-size 41px
    $dropdown-separator-margin 6px
    min-width 252
    max-width min(360px, calc(100vw - 28px))
    max-height min(500px, calc(100vh - 28px))
    padding 7
    border-radius 15
  }

  &:has(> [role='menuitemcheckbox']),
  &:has(> [role='menuitemradio']),
  &:has(> [role='group'] > [role='menuitemcheckbox']),
  &:has(> [role='group'] > [role='menuitemradio']) {
    $dropdown-item-gutter $dropdown-item-gutter-size
  }

  &:popover-open {
    opacity 1
    transform translateY(0) scale(1)
  }

  @starting-style {
    &:popover-open {
      opacity 0
      transform translateY(-4px) scale(0.985)
    }
  }

  @media (prefers-reduced-motion: reduce) {
    transition none
    transform none
  }

  &::backdrop {
    background transparent
  }
`,Ws=ze(R.Trigger),Fn=e=>e`
  $dropdown-indicator-width 16px
  $dropdown-indicator-start 9px
  $dropdown-indicator-font-size 12px
  width 100%
  min-height 36
  display flex
  position relative
  align-items center
  gap 10
  padding 7 9
  padding-inline-start var(--dropdown-item-gutter, 9px)
  border 0
  border-radius 8
  background transparent
  color inherit
  font-size 14
  line-height 20px
  text-align start
  text-decoration none
  user-select none

  &[data-size='1'] {
    $dropdown-indicator-width 14px
    $dropdown-indicator-start 7px
    $dropdown-indicator-font-size 11px
    min-height 30
    gap 8
    padding 5 7
    padding-inline-start var(--dropdown-item-gutter, 7px)
    border-radius 7
    font-size 12
    line-height 16px
  }

  &[data-size='3'] {
    $dropdown-indicator-width 18px
    $dropdown-indicator-start 11px
    $dropdown-indicator-font-size 13px
    min-height 42
    gap 12
    padding 9 11
    padding-inline-start var(--dropdown-item-gutter, 11px)
    border-radius 10
    font-size 16
    line-height 24px
  }

  &:focus-visible {
    outline 0
  }

  &[data-color] {
    color $sinewy-accent-11
  }

  &[data-variant='solid'][data-highlighted] {
    background $sinewy-accent-9
    color $sinewy-accent-contrast
  }

  &[data-variant='solid'][data-state='open'] {
    background $sinewy-accent-9
    color $sinewy-accent-contrast
  }

  &[data-variant='soft'][data-highlighted] {
    background $sinewy-accent-4
    color $sinewy-accent-12
  }

  &[data-variant='soft'][data-state='open'] {
    background $sinewy-accent-4
    color $sinewy-accent-12
  }

  &[data-high-contrast][data-highlighted] {
    background $sinewy-accent-12
    color $sinewy-accent-1
  }

  &[data-high-contrast][data-state='open'] {
    background $sinewy-accent-12
    color $sinewy-accent-1
  }

  &[data-color][data-high-contrast][data-highlighted] {
    background $sinewy-accent-9
    color $sinewy-accent-contrast
  }

  &[data-color][data-high-contrast][data-state='open'] {
    background $sinewy-accent-9
    color $sinewy-accent-contrast
  }

  &[data-disabled] {
    cursor default
    color $sinewy-neutral-9
  }

`,Ys=Fn(R.Item),_s=Fn(R.Checkbox),Js=Fn(R.Radio),Xs=Fn(R.SubTrigger),Zs=R.Label`
  padding 7 9 4
  color $sinewy-neutral-11
  font-size 11
  font-weight 750
  letter-spacing 0.08em
  text-transform uppercase

  &[data-size='1'] {
    padding 6 7 3
    font-size 10
  }

  &[data-size='3'] {
    padding 8 11 5
    font-size 12
  }
`,Qs=R.Separator`
  height 1
  margin $dropdown-separator-margin
  background $sinewy-neutral-6
`,el=R.Indicator`
  width $dropdown-indicator-width
  display inline-grid
  place-items center
  position absolute
  inset-inline-start $dropdown-indicator-start
  flex 0 0 $dropdown-indicator-width
  font-size $dropdown-indicator-font-size
  font-weight 900
`,Cd=i`kbd
  margin-inline-start auto
  color currentColor
  font-family inherit
  font-size inherit
  line-height inherit
  opacity 0.58
`,tl=i`svg
  width 14
  height 14
  display block
  margin-inline-start auto
  flex 0 0 14px
  opacity 0.72

  &:dir(rtl) {
    transform rotate(180deg)
  }
`,L=i((e,t)=>R(e,t));L.Trigger=i(({size:e="2",variant:t="solid",color:n="gray",highContrast:o=!1,data:r,style:a,...d},c)=>Ws({...d,style:$(n,a),data:E(r,{size:e,variant:t,color:n,highContrast:o})},c));L.Content=i(({size:e="2",variant:t="solid",color:n="gray",highContrast:o=!1,data:r,style:a,...d},c,s)=>{let l={size:e,variant:t,color:n,highContrast:o};return Us({...d,style:$(n,a),data:E(r,{size:e,variant:t,color:n,highContrast:o})},Td(s,l,c))});L.Item=Vn(Ys);L.Checkbox=Vn(_s);L.Radio=Vn(Js);L.SubTrigger=Vn(Xs,ol);L.SubContent=i(({size:e,variant:t,color:n,highContrast:o,data:r,style:a,...d},c,s)=>{let l=ar(s,{size:e,variant:t,color:n,highContrast:o});return Ks({...d,style:n==null?a:$(n,a),data:E(r,l)},Td(s,l,c))});L.Label=i(({size:e,data:t,...n},o,r)=>{let a=ar(r,{size:e});return Zs({...n,data:E(t,{size:a.size})},o)});L.Separator=i((e,t)=>Qs(e,t));L.Indicator=i((e,t)=>el(e,t));L.Shortcut=i((e,t)=>Cd(e,t));L.TriggerIcon=i((e,t)=>nl(e,t));L.Group=R.Group;L.RadioGroup=R.RadioGroup;L.Sub=R.Sub;var V=i((e,t)=>lt(e,t));V.Trigger=lt.Trigger;V.Content=L.Content;V.Item=L.Item;V.Checkbox=L.Checkbox;V.RadioGroup=lt.RadioGroup;V.Radio=L.Radio;V.Indicator=L.Indicator;V.Group=lt.Group;V.Label=L.Label;V.Separator=L.Separator;V.Sub=lt.Sub;V.SubTrigger=L.SubTrigger;V.SubContent=L.SubContent;V.Shortcut=L.Shortcut;function Vn(e,t){return i(({size:n,color:o,highContrast:r,shortcut:a,data:d,style:c,...s},l,u)=>{let h=ar(u,{size:n,highContrast:r}),p=a==null?l:[...l,Cd(a)];return e({...s,style:o==null?c:$(o,c),data:E(d,{size:h.size,variant:h.variant,color:o,highContrast:h.highContrast})},t==null?p:[...p,t()])})}function ar(e,t){let n=e[Sd]||{};return Object.fromEntries(["size","variant","color","highContrast"].map(o=>[o,t[o]==null?n[o]:t[o]]))}function Td(e,t,n){let o=Object.create(e);return o[Sd]=t,i({context:o},()=>n)}function nl(e){return i`svg
    width 14
    height 14
    display block
    flex 0 0 14px
  `({...e,viewBox:"0 0 14 14",fill:"none",focusable:"false","aria-hidden":e["aria-hidden"]==null?"true":e["aria-hidden"]},i`path`({d:"M3.5 5.25 7 8.75l3.5-3.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))}function ol(){return tl({viewBox:"0 0 14 14",fill:"none",focusable:"false","aria-hidden":"true"},i`path`({d:"M5.25 3.5 8.75 7l-3.5 3.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))}var B=L;var Ad=[{title:"Alert Dialog",description:"A Dialog specialization for decisions that require immediate attention.",slug:"alert-dialog",source:"docs/components/alert-dialog.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"why-it-shares-dialog-parts",text:"Why it shares Dialog parts"},{depth:2,id:"state-and-events",text:"State and events"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"alertdialogattrs-children",text:"AlertDialog(attrs?, ...children)"},{depth:3,id:"alertdialogtriggerattrs-children",text:"AlertDialog.Trigger(attrs?, ...children)"},{depth:3,id:"alertdialogcontentattrs-children",text:"AlertDialog.Content(attrs?, ...children)"},{depth:3,id:"alertdialogtitleattrs-children",text:"AlertDialog.Title(attrs?, ...children)"},{depth:3,id:"alertdialogdescriptionattrs-children",text:"AlertDialog.Description(attrs?, ...children)"},{depth:3,id:"alertdialogcloseattrs-children",text:"AlertDialog.Close(attrs?, ...children)"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
<p><code>AlertDialog</code> is a semantic specialization of <code>Dialog</code>. It uses the same native modal engine, state contract, accessible relationships, theming, and parts, while Content always renders <code>role=&quot;alertdialog&quot;</code> so assistive technology can announce an urgent decision appropriately.</p>
<p>Use Alert Dialog when the user must acknowledge or choose before continuing\u2014for example, confirming permanent deletion. Use ordinary Dialog for focused tasks that are not urgent interruptions.</p>
<h2 id="import">Import</h2>
<pre><code class="language-js">import { AlertDialog } from &#39;sinewy&#39;
import AlertDialog from &#39;sinewy/alert-dialog&#39;
</code></pre>
<p>The themed facade also exports <code>AlertDialog</code> by name:</p>
<pre><code class="language-js">import { AlertDialog } from &#39;sinewy/theme&#39;
</code></pre>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">AlertDialog(
  AlertDialog.Trigger({ color: &#39;red&#39; }, &#39;Delete account&#39;),
  AlertDialog.Content({ color: &#39;red&#39; },
    AlertDialog.Title(&#39;Delete account?&#39;),
    AlertDialog.Description(&#39;This action permanently removes the account.&#39;),
    AlertDialog.Close({ autofocus: true }, &#39;Cancel&#39;),
    AlertDialog.Close({
      variant: &#39;solid&#39;,
      color: &#39;red&#39;,
      onclick: deleteAccount
    }, &#39;Delete&#39;)
  )
)
</code></pre>
<p>Put the least destructive choice first and give it <code>autofocus</code> when that is the safest initial focus. A destructive Close button may run the action in its native <code>onclick</code> handler and then use the shared close transition.</p>
<h2 id="why-it-shares-dialog-parts">Why it shares Dialog parts</h2>
<p>Alert Dialog does not add <code>Action</code> or <code>Cancel</code> aliases. Both would render the same native button and request the same close transition, so those names would not express a distinct runtime contract. Use <code>AlertDialog.Close</code> with ordinary button theme options and event handlers to make each choice explicit.</p>
<p>This keeps the specialization small while <code>role=&quot;alertdialog&quot;</code> provides the concrete semantic difference.</p>
<h2 id="state-and-events">State and events</h2>
<p>Alert Dialog supports the same <code>open</code>, <code>defaultOpen</code>, <code>bind</code>, and <code>onopenchange</code> API as Dialog. Controlled state, live bindings, consumer event ordering, prevented Trigger and Close clicks, and prevented Content cancellation behave identically.</p>
<pre><code class="language-js">const open = s.live(false)

AlertDialog({ bind: open },
  // parts
)
</code></pre>
<h2 id="api-reference">API reference</h2>
<h3 id="alertdialogattrs-children"><code>AlertDialog(attrs?, ...children)</code></h3>
<p>Accepts the same root attributes as <code>Dialog</code>: <code>id</code>, <code>open</code>, <code>defaultOpen</code>, <code>bind</code>, and <code>onopenchange</code>. It emits no wrapper element.</p>
<h3 id="alertdialogtriggerattrs-children"><code>AlertDialog.Trigger(attrs?, ...children)</code></h3>
<p>The same themed native trigger contract as <code>Dialog.Trigger</code>.</p>
<h3 id="alertdialogcontentattrs-children"><code>AlertDialog.Content(attrs?, ...children)</code></h3>
<p>The same themed native <code>dialog</code> contract as <code>Dialog.Content</code>, with <code>role=&quot;alertdialog&quot;</code> enforced. A caller-provided <code>role</code> cannot weaken the specialization.</p>
<h3 id="alertdialogtitleattrs-children"><code>AlertDialog.Title(attrs?, ...children)</code></h3>
<p>The accessible heading linked from Content.</p>
<h3 id="alertdialogdescriptionattrs-children"><code>AlertDialog.Description(attrs?, ...children)</code></h3>
<p>The accessible consequence or decision description linked from Content. Keep it concise and specific.</p>
<h3 id="alertdialogcloseattrs-children"><code>AlertDialog.Close(attrs?, ...children)</code></h3>
<p>A themed native choice button that requests closure after its consumer click handler runs. Use <code>autofocus</code> on the safest choice where appropriate.</p>
<h2 id="keyboard-and-focus-behavior">Keyboard and focus behavior</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td>Trigger <code>Enter</code> or <code>Space</code></td>
<td>Opens the native alert dialog modally.</td>
</tr>
<tr>
<td>Initial focus</td>
<td>Follows native dialog focus, including an explicit <code>autofocus</code> choice.</td>
</tr>
<tr>
<td><code>Tab</code> and <code>Shift+Tab</code></td>
<td>Move within the modal while the rest of the page is inert.</td>
</tr>
<tr>
<td><code>Escape</code></td>
<td>Dispatches native <code>cancel</code> and closes unless prevented.</td>
</tr>
<tr>
<td>Choice activation</td>
<td>Runs its native click handler and requests closure unless prevented.</td>
</tr>
<tr>
<td>Close</td>
<td>Restores focus to the invoking control.</td>
</tr>
</tbody></table>
<h2 id="styling">Styling</h2>
<p>Alert Dialog inherits all Dialog theme axes and styling hooks. Content supports <code>size</code>, <code>color</code>, and <code>highContrast</code>; Trigger and Close support the shared control <code>size</code>, <code>variant</code>, <code>color</code>, and <code>highContrast</code> options. Every part supports normal Sin style extension.</p>
<h2 id="current-limits">Current limits</h2>
<ul>
<li>Alert Dialog is modal only and intentionally reuses the native Dialog engine.</li>
<li>There are no compatibility-only <code>Action</code> or <code>Cancel</code> aliases; use <code>Close</code> with explicit attributes and handlers.</li>
<li>There is no Portal or Overlay part because the native top layer and <code>::backdrop</code> already provide those behaviors.</li>
<li>Async action progress and loading state remain application concerns until a concrete shared API is justified.</li>
</ul>
`},{title:"Button",description:"A themed native button control for common actions.",slug:"button",source:"docs/components/button.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"buttonattrs-children",text:"Button(attrs?, ...children)"},{depth:2,id:"accessibility",text:"Accessibility"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling-hooks",text:"Styling hooks"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
<p><code>Button</code> renders a native HTML <code>button</code> with Sinewy&#39;s reusable control theme. The browser supplies activation, keyboard, form, disabled, and focus semantics; Sinewy supplies size, variant, color, contrast, and interaction styling.</p>
<p>The first release is intentionally one directly callable component. Icons are ordinary children. There is no <code>Button.Root</code>, <code>as</code>, <code>asChild</code>, loading state, icon part, or radius option.</p>
<h2 id="import">Import</h2>
<p>The package root and focused module both export Button:</p>
<pre><code class="language-js">import { Button } from &#39;sinewy&#39;
import Button from &#39;sinewy/button&#39;
</code></pre>
<p>The themed facade also provides the same component as a named export:</p>
<pre><code class="language-js">import { Button } from &#39;sinewy/theme&#39;
</code></pre>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">import { Button } from &#39;sinewy&#39;

Button({
  size: &#39;2&#39;,
  variant: &#39;solid&#39;,
  color: &#39;accent&#39;,
  highContrast: false,
  type: &#39;button&#39;
}, &#39;Save&#39;)
</code></pre>
<p><code>type</code> defaults to <code>button</code>, preventing an otherwise implicit form submission. Set <code>type=&quot;submit&quot;</code> or <code>type=&quot;reset&quot;</code> when that native behavior is intended.</p>
<h2 id="styling">Styling</h2>
<p>Button supports normal Sin style extension and forwards <code>style</code>, <code>data</code>, native attributes, DOM hooks, and events to the button element:</p>
<pre><code class="language-js">const WideButton = Button\`
  min-width 180
\`

WideButton({ onclick: save }, &#39;Save changes&#39;)
</code></pre>
<p>The four variants are <code>solid</code>, <code>soft</code>, <code>outline</code>, and <code>ghost</code>. Colors are <code>gray</code>, <code>accent</code>, <code>red</code>, <code>orange</code>, <code>amber</code>, <code>green</code>, <code>teal</code>, <code>cyan</code>, <code>blue</code>, <code>indigo</code>, <code>purple</code>, <code>pink</code>, and <code>crimson</code>. The palette responds to inherited <code>color-scheme</code>, and <code>highContrast</code> strengthens foregrounds and solid endpoints.</p>
<p>TypeScript consumers can reuse the component-neutral <code>ThemeSize</code>, <code>ThemeColor</code>, <code>ControlVariant</code>, <code>ThemeOptions</code>, and <code>ControlThemeOptions</code> exports when building related controls.</p>
<h2 id="api-reference">API reference</h2>
<h3 id="buttonattrs-children"><code>Button(attrs?, ...children)</code></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>size</code></td>
<td><code>&#39;1&#39; | &#39;2&#39; | &#39;3&#39;</code></td>
<td><code>&#39;2&#39;</code></td>
<td>Controls height, spacing, radius, and font size.</td>
</tr>
<tr>
<td><code>variant</code></td>
<td><code>&#39;solid&#39; | &#39;soft&#39; | &#39;outline&#39; | &#39;ghost&#39;</code></td>
<td><code>&#39;solid&#39;</code></td>
<td>Selects the visual treatment.</td>
</tr>
<tr>
<td><code>color</code></td>
<td>theme color</td>
<td><code>&#39;accent&#39;</code></td>
<td>Selects the light/dark-aware palette.</td>
</tr>
<tr>
<td><code>highContrast</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Uses stronger palette endpoints.</td>
</tr>
<tr>
<td><code>type</code></td>
<td><code>&#39;button&#39; | &#39;submit&#39; | &#39;reset&#39; | &#39;menu&#39;</code></td>
<td><code>&#39;button&#39;</code></td>
<td>Native button type.</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>native button attribute</td>
<td><code>false</code></td>
<td>Uses native disabled semantics and suppresses activation.</td>
</tr>
</tbody></table>
<p>All other native button attributes and events are forwarded. Theme options become <code>data-size</code>, <code>data-variant</code>, <code>data-color</code>, and optional <code>data-high-contrast</code> hooks instead of leaking as invalid DOM attributes. Consumer <code>data</code> and <code>style</code> objects are preserved; explicit style values can override theme custom properties.</p>
<h2 id="accessibility">Accessibility</h2>
<p>Button keeps the native button element and its built-in accessibility semantics. Supply visible text or an accessible name when using only an icon. Native <code>disabled</code> buttons do not receive focus or dispatch click events.</p>
<h2 id="keyboard-and-focus-behavior">Keyboard and focus behavior</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>Enter</code> or <code>Space</code></td>
<td>Activates the native button.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td>Moves focus to an enabled button in normal document order.</td>
</tr>
<tr>
<td>Pointer press</td>
<td>Uses native pressed behavior plus the themed active treatment.</td>
</tr>
<tr>
<td>Keyboard focus</td>
<td>Shows the themed <code>:focus-visible</code> outline.</td>
</tr>
</tbody></table>
<h2 id="styling-hooks">Styling hooks</h2>
<table>
<thead>
<tr>
<th>Hook</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td><code>data-size=&quot;1|2|3&quot;</code></td>
<td>Resolved size.</td>
</tr>
<tr>
<td><code>data-variant=&quot;solid|soft|outline|ghost&quot;</code></td>
<td>Resolved variant.</td>
</tr>
<tr>
<td><code>data-color</code></td>
<td>Resolved theme color.</td>
</tr>
<tr>
<td><code>data-high-contrast</code></td>
<td>Present when high contrast is enabled.</td>
</tr>
<tr>
<td><code>:hover</code>, <code>:active</code>, <code>:focus-visible</code>, <code>:disabled</code></td>
<td>Native interaction states.</td>
</tr>
</tbody></table>
<h2 id="current-limits">Current limits</h2>
<ul>
<li>Button always renders a native <code>button</code>; composition options remain unreserved until a concrete semantic use case can render truthfully.</li>
<li>Loading and icon-specific APIs are not included. Pass icons as children and manage application state with native attributes.</li>
</ul>
`},{title:"Checkbox",description:"A themed native checkbox with boolean and array-valued group binding.",slug:"checkbox",source:"docs/components/checkbox.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"group-binding",text:"Group binding"},{depth:2,id:"state",text:"State"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"checkboxattrs",text:"Checkbox(attrs?)"},{depth:3,id:"checkboxgroupattrs-children",text:"Checkbox.Group(attrs?, ...children)"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling-hooks",text:"Styling hooks"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
<p><code>Checkbox</code> renders a native <code>input type=&quot;checkbox&quot;</code>. It preserves native labels, keyboard activation, validation, form data, reset, disabled behavior, and events while adding Sinewy theming and controlled, uncontrolled, or live boolean state.</p>
<p><code>Checkbox.Group</code> is an optional native <code>fieldset</code>. It coordinates a shared <code>name</code> and an array of selected checkbox values, which makes one <code>s.Live&lt;string[]&gt;</code> useful for a real multi-value group. There are no decorative parts; associate each checkbox with an ordinary <code>label</code>, and put an ordinary <code>legend</code> inside a group.</p>
<h2 id="import">Import</h2>
<pre><code class="language-js">import { Checkbox } from &#39;sinewy&#39;
import Checkbox from &#39;sinewy/checkbox&#39;
</code></pre>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">s\`label\`(
  Checkbox({ name: &#39;terms&#39;, value: &#39;accepted&#39;, required: true }),
  &#39;Accept the terms&#39;
)
</code></pre>
<h2 id="group-binding">Group binding</h2>
<pre><code class="language-js">const channels = s.live([&#39;email&#39;])

Checkbox.Group({ name: &#39;channels&#39;, bind: channels },
  s\`legend\`(&#39;Notifications&#39;),
  s\`label\`(Checkbox({ value: &#39;email&#39; }), &#39;Email&#39;),
  s\`label\`(Checkbox({ value: &#39;sms&#39; }), &#39;SMS&#39;)
)
</code></pre>
<p>The group reads and writes a new string array. Checked native inputs contribute repeated <code>name=value</code> pairs to <code>FormData</code>, exactly like ordinary HTML checkboxes.</p>
<p>HTML has no native \u201Cat least one checkbox in this group\u201D constraint. <code>Checkbox.Group</code> therefore does not invent a <code>required</code> group attribute. Native <code>required</code> remains available on an individual Checkbox and means that particular checkbox must be checked.</p>
<h2 id="state">State</h2>
<p>A standalone Checkbox accepts <code>defaultChecked</code>, controlled <code>checked</code>, or <code>bind: s.Live&lt;boolean&gt;</code>. <code>oncheckedchange</code> reports its next boolean state after the consumer&#39;s native <code>onchange</code> handler.</p>
<p>Within Checkbox.Group, the group value owns checked state. Its <code>defaultValue</code>, controlled <code>value</code>, or <code>bind: s.Live&lt;string[]&gt;</code> contains the values of checked items, and <code>onvaluechange</code> reports the next array. Individual <code>oncheckedchange</code> callbacks still report the changed item.</p>
<h2 id="styling">Styling</h2>
<p>Checkbox and Checkbox.Group support <code>size</code>, <code>color</code>, and <code>highContrast</code>. Group theme options are inherited by items unless an item overrides them. Both roots support normal Sin style extension.</p>
<h2 id="api-reference">API reference</h2>
<h3 id="checkboxattrs"><code>Checkbox(attrs?)</code></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>checked</code></td>
<td><code>boolean</code></td>
<td>\u2014</td>
<td>Controls standalone checked state.</td>
</tr>
<tr>
<td><code>defaultChecked</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Sets initial standalone state and reset baseline.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;boolean&gt;</code></td>
<td>\u2014</td>
<td>Reads and writes standalone checked state.</td>
</tr>
<tr>
<td><code>oncheckedchange</code></td>
<td><code>(checked, event) =&gt; unknown</code></td>
<td>\u2014</td>
<td>Reports the changed item.</td>
</tr>
<tr>
<td><code>size</code></td>
<td><code>&#39;1&#39; | &#39;2&#39; | &#39;3&#39;</code></td>
<td>inherited or <code>&#39;2&#39;</code></td>
<td>Controls checkbox dimensions.</td>
</tr>
<tr>
<td><code>color</code></td>
<td>theme color</td>
<td>inherited or <code>&#39;accent&#39;</code></td>
<td>Selects the checked palette.</td>
</tr>
<tr>
<td><code>highContrast</code></td>
<td><code>boolean</code></td>
<td>inherited or <code>false</code></td>
<td>Uses a stronger checked endpoint.</td>
</tr>
</tbody></table>
<p>Checkbox owns <code>type=&quot;checkbox&quot;</code> and its native checkbox semantics. Compatible native input attributes and events are forwarded.</p>
<h3 id="checkboxgroupattrs-children"><code>Checkbox.Group(attrs?, ...children)</code></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>value</code></td>
<td><code>string[]</code></td>
<td>\u2014</td>
<td>Controls the checked item values.</td>
</tr>
<tr>
<td><code>defaultValue</code></td>
<td><code>string[]</code></td>
<td><code>[]</code></td>
<td>Sets initial values and the reset baseline.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;string[]&gt;</code></td>
<td>\u2014</td>
<td>Reads and writes checked item values.</td>
</tr>
<tr>
<td><code>onvaluechange</code></td>
<td><code>(values, event) =&gt; unknown</code></td>
<td>\u2014</td>
<td>Reports the next selected values.</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>\u2014</td>
<td>Supplies a shared native name to descendant items.</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>native fieldset attribute</td>
<td><code>false</code></td>
<td>Disables all descendant controls natively.</td>
</tr>
</tbody></table>
<p>The group renders <code>fieldset</code> and forwards compatible fieldset attributes. Use a native <code>legend</code> for its accessible group name.</p>
<h2 id="keyboard-and-focus-behavior">Keyboard and focus behavior</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>Space</code></td>
<td>Toggles the focused checkbox.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td>Moves through enabled checkboxes in document order.</td>
</tr>
<tr>
<td>Label click</td>
<td>Activates the associated checkbox.</td>
</tr>
</tbody></table>
<h2 id="styling-hooks">Styling hooks</h2>
<table>
<thead>
<tr>
<th>Hook</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td><code>:checked</code></td>
<td>Native checked state.</td>
</tr>
<tr>
<td><code>data-state=&quot;checked|unchecked&quot;</code></td>
<td>Stable public state hook.</td>
</tr>
<tr>
<td><code>data-size</code>, <code>data-color</code>, <code>data-high-contrast</code></td>
<td>Resolved theme options.</td>
</tr>
<tr>
<td><code>::before</code></td>
<td>Visual check mark.</td>
</tr>
<tr>
<td><code>:hover</code>, <code>:active</code>, <code>:focus-visible</code>, <code>:disabled</code></td>
<td>Native interaction states.</td>
</tr>
</tbody></table>
<h2 id="current-limits">Current limits</h2>
<ul>
<li>Indeterminate state is not yet public.</li>
<li>Group values are strings, matching native form values.</li>
<li>There are no indicator, label, or root subparts.</li>
</ul>
`},{title:"Combobox",description:"An accessible searchable single- or multiple-selection control for Sin.js.",slug:"combobox",source:"docs/components/combobox.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"themed-facade",text:"Themed facade"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"comboboxattrs-children",text:"Combobox(attrs?, ...children)"},{depth:3,id:"comboboxcontrolattrs-children",text:"Combobox.Control(attrs?, ...children)"},{depth:3,id:"comboboxpillsattrs",text:"Combobox.Pills(attrs?)"},{depth:3,id:"comboboxinputattrs",text:"Combobox.Input(attrs?)"},{depth:3,id:"comboboxcontentattrs-children",text:"Combobox.Content(attrs?, ...children)"},{depth:3,id:"comboboxitemattrs-children",text:"Combobox.Item(attrs?, ...children)"},{depth:2,id:"accessibility",text:"Accessibility"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
<p>For selection without a search field, use <a href="/components/custom-select">CustomSelect</a>. It shares the selection foundation and themed options but exposes a separate, non-editable control.</p>
<p><code>Combobox</code> is a searchable selection component with a headless primitive and an optional themed facade. Typing narrows its list of options while focus stays in the text input. Single selection displays the chosen option as input text; multiple selection displays chosen values as removable pills inside the control.</p>
<p>The component owns selection, filtering, active-option state, keyboard behavior, and ARIA relationships. Consumers own labels, option data, and visual styling. Values are strings so selection identity is stable across redraws and can be submitted or persisted without an object-identity contract.</p>
<h2 id="import">Import</h2>
<pre><code class="language-js">import { Combobox } from &#39;sinewy&#39;
import { Combobox as ThemedCombobox } from &#39;sinewy/theme&#39;
</code></pre>
<p><code>sinewy/combobox</code> also exposes the focused module with default and named exports.</p>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">import s from &#39;sin&#39;
import { Combobox } from &#39;sinewy&#39;

const accounts = s.live([])

const AccountPicker = () =&gt; Combobox({ multiple: true, bind: accounts },
  s\`label\`({ for: &#39;accounts-input&#39; }, &#39;Accounts&#39;),
  Combobox.Control(
    Combobox.Pills({
      removelabel: (_, text) =&gt; \`Fjern \${text}\`
    }),
    Combobox.Input({ id: &#39;accounts-input&#39;, placeholder: &#39;Find an account&#39; })
  ),
  Combobox.Content(
    Combobox.Item({ value: &#39;assets:bank&#39;, textValue: &#39;Assets:Bank&#39; }, &#39;Assets:Bank&#39;),
    Combobox.Item({ value: &#39;expenses:office&#39;, textValue: &#39;Expenses:Office&#39; }, &#39;Expenses:Office&#39;)
  )
)
</code></pre>
<p>In single-selection mode, omit <code>multiple</code> and <code>Combobox.Pills</code>. Use only one state mode: <code>defaultValue</code> for uncontrolled state, <code>value</code> plus <code>onvaluechange</code> for controlled state, or <code>bind</code> for Sin-native two-way live state.</p>
<h2 id="themed-facade">Themed facade</h2>
<p>The named <code>Combobox</code> export from <code>sinewy/theme</code> preserves the headless part structure and behavior while adding a positioned root, field surface, pills, listbox, option states, and inherited theme colors:</p>
<pre><code class="language-js">import { Combobox } from &#39;sinewy/theme&#39;

Combobox({ size: &#39;2&#39;, color: &#39;indigo&#39; },
  s\`label\`({ for: &#39;account&#39; }, &#39;Account&#39;),
  Combobox.Control(
    Combobox.Input({ id: &#39;account&#39;, placeholder: &#39;Find an account&#39; })
  ),
  Combobox.Content(
    Combobox.Item({ value: &#39;assets:bank&#39;, textValue: &#39;Assets:Bank&#39; }, &#39;Assets:Bank&#39;),
    Combobox.Item({ value: &#39;expenses:office&#39;, textValue: &#39;Expenses:Office&#39; }, &#39;Expenses:Office&#39;)
  )
)
</code></pre>
<p>The themed root accepts <code>size=&quot;1|2|3&quot;</code>, <code>color</code>, and <code>highContrast</code>, plus normal root <code>style</code> and <code>data</code> values. It deliberately has one field treatment rather than the action-oriented <code>solid</code>, <code>soft</code>, <code>outline</code>, and <code>ghost</code> variants used by Button.</p>
<p>Unlike the headless root, the themed root renders a positioned wrapper. Its listbox inherits the root&#39;s light/dark-aware palette. Both versions place the listbox in the browser&#39;s popover top layer, aligned with the control and flipped above it when space below is limited. The list is at least as wide as the control and can grow to fit option labels within the viewport. Resize and scroll keep the list aligned. All themed parts still support normal Sin style extension.</p>
<h2 id="styling">Styling</h2>
<p>Each headless or themed visible part is a normal Sin component and accepts call-site style extensions:</p>
<pre><code class="language-js">const Control = Combobox.Control\`
  display flex
  flex-wrap wrap
  gap 6
  padding 6
  border 1px solid #d8d8d8
  border-radius 8
\`

const Input = Combobox.Input\`
  flex 1
  min-width 8ch
  border 0
  outline 0
\`

const Content = Combobox.Content\`
  max-height 240
  overflow auto
  border 1px solid #d8d8d8
\`
</code></pre>
<h2 id="api-reference">API reference</h2>
<h3 id="comboboxattrs-children"><code>Combobox(attrs?, ...children)</code></h3>
<p>Creates a shared combobox state scope without adding a wrapper element.</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td>generated</td>
<td>Base for deterministic input, listbox, and option IDs.</td>
</tr>
<tr>
<td><code>multiple</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Uses an array selection and enables pills and multi-select semantics.</td>
</tr>
<tr>
<td><code>defaultValue</code></td>
<td><code>string | null | string[]</code></td>
<td><code>null</code> or <code>[]</code></td>
<td>Initial uncontrolled selection.</td>
</tr>
<tr>
<td><code>value</code></td>
<td><code>string | null | string[]</code></td>
<td>\u2014</td>
<td>Controlled selection. Its shape must match <code>multiple</code>.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;string | null&gt;</code> or <code>s.Live&lt;string[]&gt;</code></td>
<td>\u2014</td>
<td>Sin-native two-way selection binding.</td>
</tr>
<tr>
<td><code>dir</code></td>
<td><code>&#39;ltr&#39; | &#39;rtl&#39;</code></td>
<td><code>&#39;ltr&#39;</code></td>
<td>Controls logical Arrow Left/Right pill navigation.</td>
</tr>
<tr>
<td><code>filter</code></td>
<td><code>(textValue, query, value) =&gt; boolean</code></td>
<td>case-insensitive contains</td>
<td>Determines which options match the input query.</td>
</tr>
<tr>
<td><code>formatValue</code></td>
<td><code>(value) =&gt; string</code></td>
<td>item <code>textValue</code> or value</td>
<td>Formats selected input text and pills. Useful when stored values differ from labels.</td>
</tr>
<tr>
<td><code>onvaluechange</code></td>
<td><code>(value, event) =&gt; void</code></td>
<td>\u2014</td>
<td>Reports a requested selection change.</td>
</tr>
</tbody></table>
<h3 id="comboboxcontrolattrs-children"><code>Combobox.Control(attrs?, ...children)</code></h3>
<p>Renders the textbox-area <code>div</code>. Place <code>Combobox.Pills</code> before <code>Combobox.Input</code> in multiple mode. Clicking otherwise empty control space focuses the input. It exposes <code>data-state=&quot;open|closed&quot;</code> and <code>data-multiple</code>.</p>
<h3 id="comboboxpillsattrs"><code>Combobox.Pills(attrs?)</code></h3>
<p>Renders the selected values as buttons in multiple mode and renders nothing in single mode. Every pill exposes <code>data-sinewy-combobox-pill</code>, <code>data-value</code>, and <code>data-selected</code> while keyboard-selected. Activating a pill removes it.</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>removelabel</code></td>
<td><code>(value, textValue) =&gt; string</code></td>
<td><code>(_, text) =&gt; \`Remove \${text}\` </code></td>
<td>Localizes the accessible label for each remove button.</td>
</tr>
</tbody></table>
<h3 id="comboboxinputattrs"><code>Combobox.Input(attrs?)</code></h3>
<p>Renders the text input with <code>role=&quot;combobox&quot;</code>, <code>aria-autocomplete=&quot;list&quot;</code>, <code>aria-controls</code>, <code>aria-expanded</code>, and active-option state. It accepts ordinary input attributes. Its value is owned by the combobox query or current single selection.</p>
<h3 id="comboboxcontentattrs-children"><code>Combobox.Content(attrs?, ...children)</code></h3>
<p>Renders the <code>role=&quot;listbox&quot;</code> container. It is hidden while closed and exposes <code>data-state=&quot;open|closed&quot;</code>. Multiple mode adds <code>aria-multiselectable=&quot;true&quot;</code>.</p>
<h3 id="comboboxitemattrs-children"><code>Combobox.Item(attrs?, ...children)</code></h3>
<p>Renders one <code>role=&quot;option&quot;</code>.</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>value</code></td>
<td><code>string</code></td>
<td>required</td>
<td>Stable selection identity.</td>
</tr>
<tr>
<td><code>textValue</code></td>
<td><code>string</code></td>
<td><code>value</code></td>
<td>Text used for filtering and selected-value display. Supply it when children are not identical plain text.</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Removes the option from keyboard and mouse selection.</td>
</tr>
<tr>
<td><code>onselect</code></td>
<td>Sin mouse-event handler</td>
<td>\u2014</td>
<td>Runs before selection. Prevent default to cancel selection.</td>
</tr>
</tbody></table>
<p>Items expose <code>aria-selected</code>, <code>aria-disabled</code>, <code>data-selected</code>, <code>data-disabled</code>, <code>data-highlighted</code>, <code>data-value</code>, and <code>data-text-value</code>.</p>
<h2 id="accessibility">Accessibility</h2>
<p>The component supplies the ARIA combobox, listbox, and option relationships and keeps DOM focus in the input while options are navigated. Consumers must provide an accessible name using a native <code>&lt;label for&gt;</code> or <code>aria-label</code> on <code>Combobox.Input</code>. Visual themes should make highlighted options, selected options, disabled options, and keyboard-selected pills distinguishable.</p>
<h2 id="keyboard-and-focus-behavior">Keyboard and focus behavior</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td>Type in input</td>
<td>Filters options.</td>
</tr>
<tr>
<td>Arrow Down / Arrow Up</td>
<td>Opens the list and moves through matching enabled options, wrapping at either edge.</td>
</tr>
<tr>
<td>Enter</td>
<td>Selects the active option.</td>
</tr>
<tr>
<td>Escape</td>
<td>Closes the list and restores selected text in single mode.</td>
</tr>
<tr>
<td>Backspace at input position 0</td>
<td>Keyboard-selects the last pill in multiple mode.</td>
</tr>
<tr>
<td>Arrow Left at input position 0</td>
<td>Also selects the last pill in left-to-right mode; direction reverses in RTL.</td>
</tr>
<tr>
<td>Arrow Left / Arrow Right on pill</td>
<td>Moves between pills and back to the input using logical direction.</td>
</tr>
<tr>
<td>Backspace / Delete on pill</td>
<td>Removes it and keeps focus on a neighboring pill or the input.</td>
</tr>
</tbody></table>
<h2 id="current-limits">Current limits</h2>
<ul>
<li>The headless component positions its listbox but does not theme it. Popover API and ResizeObserver support are required.</li>
<li>Values are strings; richer records remain consumer-owned option data.</li>
<li>The listbox stays in its DOM context for inherited styles while the browser renders it in the top layer, outside ancestor overflow clipping.</li>
</ul>
`},{title:"Context Menu",description:"A headless menu opened at a contextual pointer or keyboard invocation point.",slug:"context-menu",source:"docs/components/context-menu.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"styling",text:"Styling"},{depth:3,id:"themed-facade",text:"Themed facade"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"contextmenuattrs-children",text:"ContextMenu(attrs?, ...children)"},{depth:3,id:"contextmenutriggerattrs-children",text:"ContextMenu.Trigger(attrs?, ...children)"},{depth:3,id:"contextmenucontentattrs-children",text:"ContextMenu.Content(attrs?, ...children)"},{depth:3,id:"shared-menu-parts",text:"Shared menu parts"},{depth:2,id:"accessibility",text:"Accessibility"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
<p><code>ContextMenu</code> is a headless contextual menu for Sin.js. It opens from the native <code>contextmenu</code> event or a stationary touch or pen long press, positions its content at the invocation point, and reuses Sinewy&#39;s tested menu navigation, selection, checkbox, radio, and submenu behavior.</p>
<p>A non-mouse press is recognized after 700 milliseconds. Movement, cancellation, or an earlier release aborts it; once recognized, the menu opens immediately after release so the same pointer gesture cannot trigger native popover light-dismiss.</p>
<h2 id="import">Import</h2>
<pre><code class="language-js">import { ContextMenu } from &#39;sinewy&#39;
</code></pre>
<p>The focused entrypoint provides the same default and named export:</p>
<pre><code class="language-js">import ContextMenu from &#39;sinewy/context-menu&#39;
</code></pre>
<p>The optional themed facade is a named export from the shared theme entrypoint:</p>
<pre><code class="language-js">import { ContextMenu } from &#39;sinewy/theme&#39;
</code></pre>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">ContextMenu(
  ContextMenu.Trigger(&#39;Right-click or press and hold here&#39;),
  ContextMenu.Content(
    ContextMenu.Item({ onselect: rename }, &#39;Rename&#39;),
    ContextMenu.Item({ onselect: duplicate }, &#39;Duplicate&#39;),
    ContextMenu.Separator(),
    ContextMenu.Item({ onselect: remove }, &#39;Delete&#39;)
  )
)
</code></pre>
<p>Run the interactive example from the repository root with:</p>
<pre><code class="language-sh">npm run context-menu-demo
</code></pre>
<h2 id="styling">Styling</h2>
<p>Every part is a normal Sin component and supports tagged-template style extension:</p>
<pre><code class="language-js">const Target = ContextMenu.Trigger\`
  min-height 240
  border 1px dashed #aaa
\`

const Content = ContextMenu.Content\`
  width 220
  padding 6
  border-radius 10
  background white
  box-shadow 0 16px 40px rgb(0 0 0 / 0.16)
\`
</code></pre>
<h3 id="themed-facade">Themed facade</h3>
<p>The themed facade leaves <code>ContextMenu.Trigger</code> visually unstyled because it represents an arbitrary contextual target rather than a menu button. <code>Content</code>, <code>SubContent</code>, and the shared menu parts reuse Dropdown&#39;s theme system:</p>
<table>
<thead>
<tr>
<th>Part</th>
<th>Option</th>
<th>Values</th>
<th>Default and behavior</th>
</tr>
</thead>
<tbody><tr>
<td>content, subcontent</td>
<td><code>size</code></td>
<td><code>1 | 2 | 3</code></td>
<td><code>2</code> on root content; inherited by submenu content and menu parts.</td>
</tr>
<tr>
<td>content, subcontent</td>
<td><code>variant</code></td>
<td><code>solid | soft</code></td>
<td><code>solid</code>; controls highlighted and open-subtrigger treatment.</td>
</tr>
<tr>
<td>content, subcontent</td>
<td><code>color</code></td>
<td>theme color</td>
<td><code>gray</code> on root content; inherited by submenu content and item states.</td>
</tr>
<tr>
<td>content, subcontent, item</td>
<td><code>highContrast</code></td>
<td><code>boolean</code></td>
<td>Strengthens solid highlighted states.</td>
</tr>
<tr>
<td>item, checkbox, radio, subtrigger</td>
<td><code>color</code></td>
<td>theme color</td>
<td>An explicit value provides a semantic override.</td>
</tr>
<tr>
<td>item, checkbox, radio, subtrigger</td>
<td><code>shortcut</code></td>
<td>Sin children</td>
<td>Renders a trailing themed <code>kbd</code>.</td>
</tr>
</tbody></table>
<p><code>ContextMenu.Shortcut</code> is also available for explicit composition, and themed submenu triggers receive the same automatic direction-aware chevron as Dropdown. Theme values are rendered as data attributes and CSS custom properties; ordinary <code>style</code> values and tagged-template extensions continue to work.</p>
<h2 id="api-reference">API reference</h2>
<h3 id="contextmenuattrs-children"><code>ContextMenu(attrs?, ...children)</code></h3>
<p>Creates the contextual-menu state scope without rendering a wrapper.</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td>generated</td>
<td>Base ID for the target and content relationship.</td>
</tr>
<tr>
<td><code>loop</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Whether arrow navigation wraps at the menu edges.</td>
</tr>
<tr>
<td><code>dir</code></td>
<td><code>&#39;ltr&#39; | &#39;rtl&#39;</code></td>
<td><code>&#39;ltr&#39;</code></td>
<td>Reading direction, including submenu keys and keyboard-point placement.</td>
</tr>
<tr>
<td><code>onbeforeopenchange</code></td>
<td><code>(open, event) =&gt; void</code></td>
<td>\u2014</td>
<td>Runs for the native <code>beforetoggle</code> event. Opening can be prevented.</td>
</tr>
<tr>
<td><code>onopenchange</code></td>
<td><code>(open, event) =&gt; void</code></td>
<td>\u2014</td>
<td>Reports completed native popover transitions.</td>
</tr>
</tbody></table>
<p>Controlled <code>open</code>, <code>defaultOpen</code>, and <code>bind</code> are intentionally absent. Programmatic opening would be incomplete without a corresponding point or anchor contract.</p>
<h3 id="contextmenutriggerattrs-children"><code>ContextMenu.Trigger(attrs?, ...children)</code></h3>
<p>Renders the area that invokes the menu. The default element is a focusable <code>div</code>; <code>as</code> can supply a custom Sin component.</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>as</code></td>
<td>Sin component</td>
<td><code>div</code></td>
<td>Renders a custom target with the owned attributes and handlers.</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Disables the custom menu and leaves the browser&#39;s native context menu available.</td>
</tr>
<tr>
<td><code>oncontextmenu</code></td>
<td>Sin event handler</td>
<td>\u2014</td>
<td>Runs before internal opening. Prevent default to suppress the custom menu.</td>
</tr>
<tr>
<td><code>onkeydown</code></td>
<td>Sin event handler</td>
<td>\u2014</td>
<td>Runs before shortcut handling. Prevent default to suppress Shift+F10 and the Context Menu key.</td>
</tr>
</tbody></table>
<p>Shift+F10 and the Context Menu key open at the target&#39;s logical lower-start corner. Sinewy handles those keys directly so invocation does not depend on whether a browser synthesizes a native <code>contextmenu</code> event. A consumer <code>onkeydown</code> handler runs first and can prevent the custom menu. Keyboard-origin <code>contextmenu</code> events use the same fallback point.</p>
<p>Touch and pen invocation uses a stationary 700 millisecond long press at the initial pointer coordinates. Sinewy suppresses the iOS touch callout by default; a consumer-provided <code>-webkit-touch-callout</code> style can override that behavior.</p>
<h3 id="contextmenucontentattrs-children"><code>ContextMenu.Content(attrs?, ...children)</code></h3>
<p>Renders a <code>popover=&quot;auto&quot;</code> menu positioned against an internal zero-sized point anchor. It accepts the same placement and collision attributes as <code>Dropdown.Content</code>.</p>
<h3 id="shared-menu-parts">Shared menu parts</h3>
<p>The remaining parts have the same observable behavior and attributes as their <code>Dropdown</code> counterparts:</p>
<ul>
<li><code>ContextMenu.Item</code></li>
<li><code>ContextMenu.Checkbox</code></li>
<li><code>ContextMenu.RadioGroup</code></li>
<li><code>ContextMenu.Radio</code></li>
<li><code>ContextMenu.Indicator</code></li>
<li><code>ContextMenu.Group</code></li>
<li><code>ContextMenu.Label</code></li>
<li><code>ContextMenu.Separator</code></li>
<li><code>ContextMenu.Sub</code></li>
<li><code>ContextMenu.SubTrigger</code></li>
<li><code>ContextMenu.SubContent</code></li>
</ul>
<p>They use the same menu engine: their roles, focus movement, typeahead, selection, checked state, submenu intent, and styling hooks operate against the enclosing <code>ContextMenu</code> state.</p>
<h2 id="accessibility">Accessibility</h2>
<p>The target owns <code>aria-haspopup=&quot;menu&quot;</code>, <code>aria-controls</code>, synchronized <code>aria-expanded</code>, and disabled state. Content and items use the WAI-ARIA menu roles and roving focus behavior already covered by the Dropdown suite. Closing restores focus to the invoking target when focus remained inside the menu.</p>
<p>Consumers using <code>as</code> must forward received attributes, event handlers, <code>dom</code>, and children. They are responsible for making a custom target keyboard-focusable when necessary.</p>
<h2 id="current-limits">Current limits</h2>
<ul>
<li>Programmatic or controlled opening has no public contract yet.</li>
<li>The ephemeral point anchor is inserted into <code>document.body</code> when invoked and removed with the component; menu content itself remains in its original Sin ancestry and enters the top layer through the Popover API.</li>
<li>Positioning requires named CSS Anchor Positioning (<code>anchor-name</code>, <code>position-anchor</code>, and <code>position-area</code>). There is no JavaScript positioning fallback for older browsers without that support.</li>
</ul>
`},{title:"Custom Select",description:"A consistently themed single-choice control without a search field.",slug:"custom-select",source:"docs/components/custom-select.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"state-and-forms",text:"State and forms"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"customselectattrs-children",text:"CustomSelect(attrs?, ...children)"},{depth:3,id:"customselectoptionattrs-children",text:"CustomSelect.Option(attrs?, ...children)"},{depth:3,id:"customselectgroupattrs-children",text:"CustomSelect.Group(attrs?, ...children)"},{depth:2,id:"accessibility",text:"Accessibility"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling-hooks",text:"Styling hooks"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
<p><code>CustomSelect</code> displays a button-like trigger and a themed list of options. It shares selection state, option styling, and popup positioning with <a href="/components/combobox">Combobox</a>, but has no text input or filtering. Typing jumps to a matching option without hiding the others.</p>
<p>Use this component when consistent picker styling matters. Use <a href="/components/select">Select or NativeSelect</a> when you want the platform&#39;s own picker. The existing <code>Select</code> export is unchanged; <code>NativeSelect</code> is an explicit alias, not a migration requirement.</p>
<p>The popup uses the Popover API&#39;s top layer to escape clipping ancestors, with viewport-aware positioning that flips above the trigger when needed. It is at least as wide as the trigger and can grow to fit option labels, capped to the viewport. Groups stay content-sized, including in Safari. Target browsers must support the Popover API and ResizeObserver. Custom selection requires JavaScript; choose NativeSelect for a functional no-JavaScript control.</p>
<h2 id="import">Import</h2>
<pre><code class="language-js">import { CustomSelect, NativeSelect } from &#39;sinewy&#39;
import CustomSelect from &#39;sinewy/custom-select&#39;
import NativeSelect from &#39;sinewy/native-select&#39;
</code></pre>
<p>Both controls are also exported from <code>sinewy/theme</code>. CustomSelect is already themed.</p>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">import s from &#39;sin&#39;
import { CustomSelect } from &#39;sinewy&#39;

const produce = s.live(&#39;pear&#39;)

CustomSelect({ bind: produce, name: &#39;produce&#39;, &#39;aria-label&#39;: &#39;Produce&#39; },
  CustomSelect.Group({ label: &#39;Fruit&#39; },
    CustomSelect.Option({ value: &#39;apple&#39; }, &#39;Apple&#39;),
    CustomSelect.Option({ value: &#39;pear&#39; }, &#39;Pear&#39;)
  ),
  CustomSelect.Option({ value: &#39;carrot&#39; }, &#39;Carrot&#39;)
)
</code></pre>
<p>In TypeScript, declare nullable live state explicitly: <code>s.live&lt;string | null&gt;(&#39;pear&#39;)</code>. <code>null</code> represents no selection. Non-empty strings identify options; the empty string is reserved for the form placeholder.</p>
<h2 id="state-and-forms">State and forms</h2>
<p>Use <code>defaultValue</code> for local state, <code>value</code> plus <code>onvaluechange</code> for owner-controlled state, or <code>bind</code> for two-way live state. Controlled requests do not change the displayed or submitted value until the owner accepts them.</p>
<p>A visually hidden native select carries the selected value for <code>name</code>, external <code>form</code> association, <code>required</code> validation, and form reset. It is excluded from the accessibility tree and tab order. Failed required validation focuses the visible trigger and marks it invalid. Disabled controls and disabled fieldsets are excluded from submission.</p>
<p>Reset requests restore <code>defaultValue</code>, or <code>null</code> when omitted, and synchronize live state. Controlled owners receive the reset request through <code>onvaluechange</code> and remain authoritative. A cancelled native reset preserves the current state. Reset callbacks receive the native reset event; pointer and keyboard selections receive their originating events.</p>
<h2 id="styling">Styling</h2>
<p>Use <code>size=&quot;1|2|3&quot;</code>, <code>color</code>, and <code>highContrast</code>. The option surface and selection/highlight colors are shared with the themed Combobox and inherit light/dark color schemes.</p>
<p><code>style</code>, <code>data</code>, and call-site Sin template extensions apply to the outer wrapper. Other compatible button attributes, including <code>id</code>, accessible labels, <code>dom</code>, and native event handlers, apply to the trigger. Consumer trigger handlers run first and can prevent the internal action.</p>
<pre><code class="language-js">const WideSelect = CustomSelect\`width 360\`
</code></pre>
<h2 id="api-reference">API reference</h2>
<h3 id="customselectattrs-children"><code>CustomSelect(attrs?, ...children)</code></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>value</code></td>
<td><code>string | null</code></td>
<td>\u2014</td>
<td>Owner-controlled selection.</td>
</tr>
<tr>
<td><code>defaultValue</code></td>
<td><code>string | null</code></td>
<td><code>null</code></td>
<td>Initial local selection and reset baseline.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;string | null&gt;</code></td>
<td>\u2014</td>
<td>Two-way selection state.</td>
</tr>
<tr>
<td><code>onvaluechange</code></td>
<td><code>(value, event) =&gt; unknown</code></td>
<td>\u2014</td>
<td>Reports selection or reset requests.</td>
</tr>
<tr>
<td><code>placeholder</code></td>
<td><code>string</code></td>
<td><code>&#39;Choose an option&#39;</code></td>
<td>Text when nothing is selected.</td>
</tr>
<tr>
<td><code>formatValue</code></td>
<td><code>(value) =&gt; string</code></td>
<td>option text</td>
<td>Formats the selected trigger text.</td>
</tr>
<tr>
<td><code>name</code>, <code>form</code>, <code>autocomplete</code></td>
<td><code>string</code></td>
<td>\u2014</td>
<td>Forwarded to the native form proxy.</td>
</tr>
<tr>
<td><code>required</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Requires a selected option for valid submission.</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Disables selection and submission.</td>
</tr>
<tr>
<td><code>size</code></td>
<td><code>&#39;1&#39; | &#39;2&#39; | &#39;3&#39;</code></td>
<td><code>&#39;2&#39;</code></td>
<td>Trigger and option dimensions.</td>
</tr>
<tr>
<td><code>color</code></td>
<td>theme color</td>
<td><code>&#39;accent&#39;</code></td>
<td>Interaction palette.</td>
</tr>
<tr>
<td><code>highContrast</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Stronger trigger border and highlighted option contrast.</td>
</tr>
</tbody></table>
<h3 id="customselectoptionattrs-children"><code>CustomSelect.Option(attrs?, ...children)</code></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>value</code></td>
<td>non-empty <code>string</code></td>
<td>required</td>
<td>Stable, unique selection identity.</td>
</tr>
<tr>
<td><code>textValue</code></td>
<td><code>string</code></td>
<td>plain children or value</td>
<td>Typeahead, selected display, and form option text. Supply it for rich children.</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Excludes the option from selection and keyboard navigation.</td>
</tr>
<tr>
<td><code>onselect</code></td>
<td>mouse-event handler</td>
<td>\u2014</td>
<td>Runs before pointer or keyboard activation; prevent default to cancel.</td>
</tr>
</tbody></table>
<h3 id="customselectgroupattrs-children"><code>CustomSelect.Group(attrs?, ...children)</code></h3>
<p>Renders a labelled <code>role=&quot;group&quot;</code>. The required <code>label</code> is shown above its options; <code>disabled</code> disables the contained options. Use flat groups, not nested groups.</p>
<h2 id="accessibility">Accessibility</h2>
<p>The visible trigger has <code>role=&quot;combobox&quot;</code>, <code>aria-expanded</code>, <code>aria-controls</code>, and active-option relationships. The popup uses listbox/option semantics, not action-menu semantics. DOM focus stays on the trigger during option navigation. Give the trigger an accessible name with a native <code>label</code> targeting its <code>id</code>, <code>aria-label</code>, or <code>aria-labelledby</code>.</p>
<p>Keyboard and DOM behavior have automated coverage. Manual screen-reader and mobile assistive-technology sign-off remains outstanding; this is a preview component. The interaction follows the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/">WAI-ARIA select-only combobox pattern</a>.</p>
<h2 id="keyboard-and-focus-behavior">Keyboard and focus behavior</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td>Click, Enter, Space, Arrow Down/Up</td>
<td>Opens at the selected option, or the first enabled option.</td>
</tr>
<tr>
<td>Arrow Down/Up while open</td>
<td>Moves through enabled options without wrapping or committing.</td>
</tr>
<tr>
<td>Home / End</td>
<td>Opens and highlights the first / last enabled option.</td>
</tr>
<tr>
<td>Printable characters</td>
<td>Opens and jumps to matching text; repeated characters cycle matches.</td>
</tr>
<tr>
<td>Enter / Space while open</td>
<td>Commits the highlighted option and closes.</td>
</tr>
<tr>
<td>Tab</td>
<td>Commits the highlighted option, closes, and permits normal focus movement.</td>
</tr>
<tr>
<td>Escape</td>
<td>Closes without changing the selected value.</td>
</tr>
<tr>
<td>Outside click or blur</td>
<td>Closes without committing the highlighted option.</td>
</tr>
</tbody></table>
<h2 id="styling-hooks">Styling hooks</h2>
<p>The wrapper exposes <code>data-size</code>, <code>data-color</code>, and <code>data-high-contrast</code>. The trigger exposes <code>data-state=&quot;open|closed&quot;</code> and <code>data-placeholder</code>. Options expose <code>data-selected</code>, <code>data-highlighted</code>, <code>data-disabled</code>, <code>data-value</code>, and <code>data-text-value</code>. Native <code>:focus-visible</code>, <code>:disabled</code>, and <code>aria-invalid</code> style trigger interactions.</p>
<h2 id="current-limits">Current limits</h2>
<ul>
<li>Single string values only; no multiple-selection, filtering, or Input part.</li>
<li>Options must be supplied as CustomSelect.Option, not native option elements.</li>
<li>NativeSelect remains preferable when native picker behavior or no-JavaScript operation is required.</li>
<li>Popup placement is automatic; there is no speculative portal or placement configuration API.</li>
</ul>
`},{title:"Dialog",description:"A themed native modal dialog for focused tasks and decisions.",slug:"dialog",source:"docs/components/dialog.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"state",text:"State"},{depth:2,id:"accessible-naming",text:"Accessible naming"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"dialogattrs-children",text:"Dialog(attrs?, ...children)"},{depth:3,id:"dialogtriggerattrs-children",text:"Dialog.Trigger(attrs?, ...children)"},{depth:3,id:"dialogcontentattrs-children",text:"Dialog.Content(attrs?, ...children)"},{depth:3,id:"dialogtitleattrs-children",text:"Dialog.Title(attrs?, ...children)"},{depth:3,id:"dialogdescriptionattrs-children",text:"Dialog.Description(attrs?, ...children)"},{depth:3,id:"dialogcloseattrs-children",text:"Dialog.Close(attrs?, ...children)"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling-hooks",text:"Styling hooks"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
<p><code>Dialog</code> uses the native HTML <code>dialog</code> element and <code>showModal()</code>. The browser owns top-layer rendering, focus containment, page inertness, Escape cancellation, and the backdrop; Sinewy supplies state control, accessible relationships, themed parts, and event composition.</p>
<p>The initial API has only the parts needed for an accessible modal: <code>Trigger</code>, <code>Content</code>, <code>Title</code>, <code>Description</code>, and <code>Close</code>. There is no portal or overlay part because a modal native dialog already enters the top layer and exposes <code>::backdrop</code>.</p>
<h2 id="import">Import</h2>
<pre><code class="language-js">import { Dialog } from &#39;sinewy&#39;
import Dialog from &#39;sinewy/dialog&#39;
</code></pre>
<p>The themed facade also exports <code>Dialog</code> by name:</p>
<pre><code class="language-js">import { Dialog } from &#39;sinewy/theme&#39;
</code></pre>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">Dialog(
  Dialog.Trigger(&#39;Edit profile&#39;),
  Dialog.Content(
    Dialog.Title(&#39;Edit profile&#39;),
    Dialog.Description(&#39;Change the public details shown on your account.&#39;),
    // Form fields and ordinary children can go here.
    Dialog.Close(&#39;Cancel&#39;),
    Dialog.Close({ variant: &#39;solid&#39;, color: &#39;accent&#39; }, &#39;Save changes&#39;)
  )
)
</code></pre>
<p>Trigger and Close render native buttons with <code>type=&quot;button&quot;</code> by default. Content renders a native <code>dialog</code>. Icons, fields, forms, and action layouts are ordinary children.</p>
<h2 id="state">State</h2>
<p>Use <code>defaultOpen</code> for local state, <code>open</code> for owner-controlled state, or <code>bind</code> with a <code>s.Live&lt;boolean&gt;</code>:</p>
<pre><code class="language-js">const open = s.live(false)

Dialog({ bind: open, onopenchange(next, event) {
  console.log(next, event.type)
}},
  Dialog.Trigger(&#39;Open&#39;),
  Dialog.Content(
    Dialog.Title(&#39;Settings&#39;),
    Dialog.Description(&#39;Update your preferences.&#39;),
    Dialog.Close(&#39;Done&#39;)
  )
)
</code></pre>
<p>Controlled dialogs report an open or close request through <code>onopenchange</code> and wait for the owner to update <code>open</code>. Consumer click and cancel handlers run first. Calling <code>event.preventDefault()</code> on a Trigger click, Close click, or Content <code>cancel</code> event suppresses Sinewy&#39;s corresponding transition.</p>
<h2 id="accessible-naming">Accessible naming</h2>
<p><code>Dialog.Title</code> and <code>Dialog.Description</code> receive deterministic IDs. Content links to them with <code>aria-labelledby</code> and <code>aria-describedby</code>. Include both by default, even if they are visually styled to suit the layout.</p>
<p>For a dialog whose visible contents cannot include a title, give Content an <code>aria-label</code>. If a description is intentionally absent, pass <code>aria-describedby: null</code> to Content so it does not reference the default description ID.</p>
<p>If you replace a Title or Description <code>id</code>, also pass the matching <code>aria-labelledby</code> or <code>aria-describedby</code> value to Content so the relationship remains valid.</p>
<h2 id="styling">Styling</h2>
<p>Content supports <code>size</code>, <code>color</code>, and <code>highContrast</code>. Size controls the panel&#39;s maximum width, padding, and radius. Color supplies the focus palette and an inherited palette for themed descendants. Trigger and Close support the shared control <code>size</code>, <code>variant</code>, <code>color</code>, and <code>highContrast</code> options.</p>
<p>Every part supports normal Sin style extension:</p>
<pre><code class="language-js">const WideContent = Dialog.Content\`
  max-width 720
\`
</code></pre>
<h2 id="api-reference">API reference</h2>
<h3 id="dialogattrs-children"><code>Dialog(attrs?, ...children)</code></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td>generated</td>
<td>Establishes deterministic part IDs.</td>
</tr>
<tr>
<td><code>open</code></td>
<td><code>boolean</code></td>
<td>\u2014</td>
<td>Controls modal visibility.</td>
</tr>
<tr>
<td><code>defaultOpen</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Sets the initial uncontrolled state.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;boolean&gt;</code></td>
<td>\u2014</td>
<td>Reads and writes visibility through a live binding.</td>
</tr>
<tr>
<td><code>onopenchange</code></td>
<td><code>(open, event) =&gt; unknown</code></td>
<td>\u2014</td>
<td>Reports requested visibility changes.</td>
</tr>
</tbody></table>
<p>Dialog itself emits no wrapper element.</p>
<h3 id="dialogtriggerattrs-children"><code>Dialog.Trigger(attrs?, ...children)</code></h3>
<p>Renders a themed native button with <code>aria-haspopup=&quot;dialog&quot;</code>, <code>aria-controls</code>, and <code>aria-expanded</code>. It supports all shared control theme options, native button attributes, events, <code>data</code>, and <code>style</code>. <code>type</code> defaults to <code>button</code>.</p>
<h3 id="dialogcontentattrs-children"><code>Dialog.Content(attrs?, ...children)</code></h3>
<p>Renders a themed native <code>dialog</code>. It supports <code>size</code>, <code>color</code>, <code>highContrast</code>, native dialog attributes and events, <code>data</code>, and <code>style</code>. Native <code>cancel</code> and <code>close</code> events are forwarded.</p>
<h3 id="dialogtitleattrs-children"><code>Dialog.Title(attrs?, ...children)</code></h3>
<p>Renders the accessible <code>h2</code> title linked from Content.</p>
<h3 id="dialogdescriptionattrs-children"><code>Dialog.Description(attrs?, ...children)</code></h3>
<p>Renders the accessible description paragraph linked from Content.</p>
<h3 id="dialogcloseattrs-children"><code>Dialog.Close(attrs?, ...children)</code></h3>
<p>Renders a themed native button that requests closure. It supports shared control options and defaults to <code>variant=&quot;soft&quot;</code>, <code>color=&quot;gray&quot;</code>, and <code>type=&quot;button&quot;</code>.</p>
<h2 id="keyboard-and-focus-behavior">Keyboard and focus behavior</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td>Trigger <code>Enter</code> or <code>Space</code></td>
<td>Opens the native modal.</td>
</tr>
<tr>
<td><code>Tab</code> and <code>Shift+Tab</code></td>
<td>Move within the modal while the rest of the page is inert.</td>
</tr>
<tr>
<td><code>Escape</code></td>
<td>Dispatches native <code>cancel</code> and closes unless prevented.</td>
</tr>
<tr>
<td>Close <code>Enter</code> or <code>Space</code></td>
<td>Requests closure.</td>
</tr>
<tr>
<td>Close</td>
<td>Native dialog focus restoration returns focus to the invoking control.</td>
</tr>
</tbody></table>
<h2 id="styling-hooks">Styling hooks</h2>
<table>
<thead>
<tr>
<th>Hook</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td><code>data-state=&quot;open|closed&quot;</code></td>
<td>Resolved root state on Trigger and Content.</td>
</tr>
<tr>
<td><code>data-size</code>, <code>data-color</code>, <code>data-high-contrast</code></td>
<td>Resolved Content theme options.</td>
</tr>
<tr>
<td><code>data-variant</code></td>
<td>Resolved Trigger or Close control variant.</td>
</tr>
<tr>
<td><code>dialog::backdrop</code></td>
<td>Native top-layer backdrop.</td>
</tr>
<tr>
<td><code>:focus-visible</code></td>
<td>Keyboard focus treatment.</td>
</tr>
</tbody></table>
<h2 id="current-limits">Current limits</h2>
<ul>
<li>Dialog is modal only. A non-modal <code>show()</code> mode is not exposed.</li>
<li>There is no Portal or Overlay part; the native top layer and <code>::backdrop</code> provide those capabilities.</li>
<li>Outside-pointer dismissal is not added because native modal dialogs do not define it as a default behavior.</li>
<li>Include Title and Description, or explicitly replace their accessible relationships on Content.</li>
</ul>
`},{title:"Dropdown",description:"Headless and themed dropdown-menu components for Sin.js.",slug:"dropdown",source:"docs/components/dropdown.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"api-stability",text:"API stability"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"styling",text:"Styling"},{depth:3,id:"themed-facade",text:"Themed facade"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"dropdownattrs-children",text:"Dropdown(attrs?, ...children)"},{depth:3,id:"dropdowntriggerattrs-children",text:"Dropdown.Trigger(attrs?, ...children)"},{depth:3,id:"dropdowncontentattrs-children",text:"Dropdown.Content(attrs?, ...children)"},{depth:3,id:"dropdownitemattrs-children",text:"Dropdown.Item(attrs?, ...children)"},{depth:3,id:"dropdowncheckboxattrs-children",text:"Dropdown.Checkbox(attrs?, ...children)"},{depth:3,id:"dropdownindicatorattrs-children",text:"Dropdown.Indicator(attrs?, ...children)"},{depth:3,id:"dropdownradiogroupattrs-children",text:"Dropdown.RadioGroup(attrs?, ...children)"},{depth:3,id:"dropdownradioattrs-children",text:"Dropdown.Radio(attrs?, ...children)"},{depth:3,id:"dropdowngroupattrs-children",text:"Dropdown.Group(attrs?, ...children)"},{depth:3,id:"dropdownlabelattrs-children",text:"Dropdown.Label(attrs?, ...children)"},{depth:3,id:"dropdownseparatorattrs-children",text:"Dropdown.Separator(attrs?, ...children)"},{depth:3,id:"dropdownsubattrs-children",text:"Dropdown.Sub(attrs?, ...children)"},{depth:3,id:"dropdownsubtriggerattrs-children",text:"Dropdown.SubTrigger(attrs?, ...children)"},{depth:3,id:"dropdownsubcontentattrs-children",text:"Dropdown.SubContent(attrs?, ...children)"},{depth:2,id:"accessibility",text:"Accessibility"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling-hooks",text:"Styling hooks"},{depth:2,id:"platform-contract-and-boundaries",text:"Platform contract and boundaries"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
<p><code>Dropdown</code> is a headless dropdown-menu component for Sin.js. It provides structure, state, accessibility attributes, focus management, keyboard navigation, and selection behavior. It deliberately provides almost no visual design.</p>
<p>The current implementation targets browsers with the Popover API and CSS anchor positioning. It uses a native <code>popover=&quot;auto&quot;</code>, so top-layer rendering, light dismissal, and Escape handling come from the browser rather than a portal or overlay manager.</p>
<p>Run the complete interactive example from the repository root with:</p>
<pre><code class="language-sh">npm run demo
</code></pre>
<p>See <a href="https://github.com/tamstrup/sinewy/blob/main/examples/demo.js"><code>../../examples/demo.js</code></a> for a styled demonstration plus an evaluation lab covering collision strategy, viewport edges, oversized content, moving and clipped anchors, deep submenus, lifecycle cancellation, and rapid clicks.</p>
<h2 id="import">Import</h2>
<p>The package root is the canonical headless entry:</p>
<pre><code class="language-js">import { Dropdown } from &#39;sinewy&#39;
</code></pre>
<p><code>sinewy/dropdown</code> exposes the focused implementation module with default and named exports.</p>
<p>The reusable visual facade has the same structure and is exported separately:</p>
<pre><code class="language-js">import Dropdown from &#39;sinewy/theme&#39;

Dropdown(
  Dropdown.Trigger({ variant: &#39;outline&#39;, color: &#39;accent&#39; },
    &#39;Actions&#39;,
    Dropdown.TriggerIcon()
  ),
  Dropdown.Content({ size: &#39;2&#39;, variant: &#39;soft&#39;, color: &#39;indigo&#39; },
    Dropdown.Item({ shortcut: &#39;\u2318 D&#39; }, &#39;Duplicate&#39;),
    Dropdown.Item({ color: &#39;red&#39;, shortcut: &#39;\u2318 \u232B&#39; }, &#39;Delete&#39;)
  )
)
</code></pre>
<p>The theme adds an inherited <code>size=&quot;1|2|3&quot;</code> menu scale with 12/14/16px item typography and size-specific height, spacing, radius, indicator, and gutter metrics. Setting <code>size</code> on content scopes labels, items, shortcuts, indicators, and nested menus; a part-level size is an explicit override. When a menu contains a checkbox or radio item, every item in that menu reserves the indicator gutter, while parent and nested menu scopes remain independent.</p>
<p>Content and subcontent accept <code>variant=&quot;solid|soft&quot;</code>, <code>color</code>, and <code>highContrast</code>. Triggers accept <code>variant=&quot;solid|soft|outline|ghost&quot;</code> plus the same color and contrast options. Items inherit the menu palette and variant but may use <code>color</code> or <code>highContrast</code> as semantic overrides. Available colors are <code>gray</code>, <code>accent</code>, <code>red</code>, <code>orange</code>, <code>amber</code>, <code>green</code>, <code>teal</code>, <code>cyan</code>, <code>blue</code>, <code>indigo</code>, <code>purple</code>, <code>pink</code>, and <code>crimson</code>; <code>accent</code> currently aliases indigo. The light/dark-aware palette is adapted from Radix Colors 3.0.0 under its MIT license, recorded in <a href="https://github.com/tamstrup/sinewy/blob/main/licenses/radix-colors.txt"><code>../../licenses/radix-colors.txt</code></a>.</p>
<p>These options become stable <code>data-*</code> styling hooks and are not forwarded as invalid DOM attributes. The facade also supplies the <code>shortcut</code> convenience, styled indicators, an automatic direction-aware submenu chevron, <code>.Shortcut</code>, and an SVG <code>.TriggerIcon</code>.</p>
<p>Both the headless and themed modules have adjacent TypeScript declarations. The theme wraps each directly styled headless primitive in an explicit Sin component so call-site template extensions retain the intermediate theme class.</p>
<h2 id="api-stability">API stability</h2>
<p>The source-level public names were reviewed and frozen for the current-browser preview on 25 August 2026:</p>
<ul>
<li>callable root: <code>Dropdown</code></li>
<li>headless parts: <code>.Trigger</code>, <code>.Content</code>, <code>.Item</code>, <code>.Checkbox</code>, <code>.RadioGroup</code>, <code>.Radio</code>, <code>.Indicator</code>, <code>.Group</code>, <code>.Label</code>, <code>.Separator</code>, <code>.Sub</code>, <code>.SubTrigger</code>, and <code>.SubContent</code></li>
<li>themed conveniences: <code>.TriggerIcon</code> and <code>.Shortcut</code></li>
</ul>
<p>Component identifiers use PascalCase throughout the public API. The short <code>Checkbox</code> and <code>Radio</code> names are deliberate in the scoped <code>Dropdown.*</code> namespace. The root is directly callable, so there is no redundant <code>.Root</code>; native top-layer popovers remove the need for <code>.Portal</code>. Callbacks retain Sin&#39;s lower-case event naming, and <code>bind</code> remains the Sin-native live-value convenience alongside controlled and uncontrolled state.</p>
<p>An anchor arrow, modal behavior, outside-interaction hooks, collision padding, and legacy fallbacks are not reserved public parts or attributes. They should be added only when the platform can support a truthful contract. Compatibility-only no-ops are deliberately excluded.</p>
<p>The names are frozen, but production accessibility sign-off still requires keyboard and assistive-technology testing in each supported browser.</p>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">import s from &#39;sin&#39;
import { Dropdown } from &#39;sinewy&#39;

const selected = s.live(&#39;Nothing selected&#39;)

const App = () =&gt; Dropdown(
  Dropdown.Trigger(&#39;Options&#39;),

  Dropdown.Content(
    Dropdown.Label(&#39;File actions&#39;),
    Dropdown.Group({ ariaLabel: &#39;File actions&#39; },
      Dropdown.Item({
        textValue: &#39;Edit&#39;,
        onselect: () =&gt; selected(&#39;Edit&#39;)
      }, &#39;Edit&#39;),

      Dropdown.Item({ disabled: true }, &#39;Rename&#39;)
    ),
    Dropdown.Separator(),
    Dropdown.Item({
      onselect: event =&gt; {
        selected(&#39;Kept open&#39;)
        event.preventDefault()
      }
    }, &#39;Keep menu open&#39;)
  )
)

s.mount(App)
</code></pre>
<p><code>Dropdown.Trigger</code>, <code>Dropdown.Content</code>, and <code>Dropdown.Item</code> must render below a <code>Dropdown</code> root. The root shares one private state object with its parts through Sin context. Rendering one of these parts outside a root throws an error. Development builds also warn when more than one trigger or content is mounted in the same state scope.</p>
<h2 id="styling">Styling</h2>
<p>Every part is a normal Sin component and accepts call-site style extensions:</p>
<pre><code class="language-js">const Trigger = Dropdown.Trigger\`
  padding 8 12
  border-radius 8
\`

const Content = Dropdown.Content\`
  position-area block-end span-inline-end
  position-try-fallbacks flip-block, flip-inline
  min-width 220
  padding 6
  border 1px solid #ddd
  border-radius 10
  background white
  box-shadow 0 16px 40px rgb(0 0 0 / 0.16)
\`

const Item = Dropdown.Item\`
  padding 7 9

  &amp;[data-highlighted] {
    background #7c3aed
    color white
  }

  &amp;[data-disabled] {
    color #aaa
  }
\`
</code></pre>
<p>The headless content supplies <code>position: fixed</code>, <code>inset: auto</code>, anchor placement, logical collision fallbacks, size-constraining fallbacks, and offset margins. When no natural placement fits, the final fallbacks stretch the menu along its placement axis to the available viewport space. Set <code>overflow: auto</code> in the theme to make oversized content scroll within that space. Consumers provide dimensions, animation, and all other theme styles. An object passed through <code>style</code> can override the generated placement declarations.</p>
<h3 id="themed-facade">Themed facade</h3>
<p>The themed facade keeps the same component structure and adds these visual options:</p>
<table>
<thead>
<tr>
<th>Part</th>
<th>Option</th>
<th>Values</th>
<th>Default and behavior</th>
</tr>
</thead>
<tbody><tr>
<td>trigger</td>
<td><code>size</code></td>
<td><code>1 | 2 | 3</code></td>
<td><code>2</code>; controls trigger metrics.</td>
</tr>
<tr>
<td>trigger</td>
<td><code>variant</code></td>
<td><code>solid | soft | outline | ghost</code></td>
<td><code>solid</code>.</td>
</tr>
<tr>
<td>trigger</td>
<td><code>color</code></td>
<td>theme color</td>
<td><code>gray</code>.</td>
</tr>
<tr>
<td>content, subcontent</td>
<td><code>size</code></td>
<td><code>1 | 2 | 3</code></td>
<td><code>2</code> on root content; inherited by submenu content and menu parts.</td>
</tr>
<tr>
<td>content, subcontent</td>
<td><code>variant</code></td>
<td><code>solid | soft</code></td>
<td><code>solid</code>; controls highlighted and open-subtrigger treatment.</td>
</tr>
<tr>
<td>content, subcontent</td>
<td><code>color</code></td>
<td>theme color</td>
<td><code>gray</code> on root content; inherited by submenu content and item states.</td>
</tr>
<tr>
<td>trigger, content, subcontent, item</td>
<td><code>highContrast</code></td>
<td><code>boolean</code></td>
<td>Strengthens solid highlighted states.</td>
</tr>
<tr>
<td>item, checkbox, radio, subtrigger</td>
<td><code>color</code></td>
<td>theme color</td>
<td>Inherits menu state styling; an explicit value provides a semantic override.</td>
</tr>
<tr>
<td>item, checkbox, radio, subtrigger</td>
<td><code>shortcut</code></td>
<td>Sin children</td>
<td>Renders a trailing themed <code>kbd</code>.</td>
</tr>
</tbody></table>
<p>The palette is expressed through inline <code>--sinewy-accent-*</code>, neutral, panel, contrast, and extreme custom properties. Consumer <code>style</code> values take precedence, so a component can remap individual theme tokens without replacing its behavioral attributes. Light and dark values follow the inherited CSS <code>color-scheme</code>; no React-style theme provider is required.</p>
<h2 id="api-reference">API reference</h2>
<h3 id="dropdownattrs-children"><code>Dropdown(attrs?, ...children)</code></h3>
<p>Creates a dropdown state scope. It does not render a wrapper element.</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>id</code></td>
<td><code>string</code></td>
<td>generated</td>
<td>Base ID. The trigger receives <code>\${id}-trigger</code> and content receives <code>\${id}-content</code>.</td>
</tr>
<tr>
<td><code>defaultOpen</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Initial uncontrolled open state. Open content is shown after mounting.</td>
</tr>
<tr>
<td><code>open</code></td>
<td><code>boolean</code></td>
<td>\u2014</td>
<td>Controlled open state. Native interactions call <code>onopenchange</code> and reconcile to this value.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;boolean&gt;</code></td>
<td>\u2014</td>
<td>Optional two-way live binding synchronized with the native popover.</td>
</tr>
<tr>
<td><code>loop</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Whether Arrow Up/Down wrap at the first and last enabled items.</td>
</tr>
<tr>
<td><code>dir</code></td>
<td><code>&#39;ltr&#39; | &#39;rtl&#39;</code></td>
<td><code>&#39;ltr&#39;</code></td>
<td>Reading direction, including submenu forward/back keyboard behavior.</td>
</tr>
<tr>
<td><code>onbeforeopenchange</code></td>
<td><code>(open, event) =&gt; void</code></td>
<td>\u2014</td>
<td>Runs for native <code>beforetoggle</code>. Preventing the opening event keeps the menu closed; native closing events are not cancelable.</td>
</tr>
<tr>
<td><code>onopenchange</code></td>
<td><code>(open, event) =&gt; void</code></td>
<td>\u2014</td>
<td>Called after the native popover emits <code>toggle</code>.</td>
</tr>
</tbody></table>
<p>Generated IDs are deterministic within a render and are shared through Sin context, including during SSR and hydration.</p>
<p>Use only one state mode at a time. <code>defaultOpen</code> initializes uncontrolled state. With <code>open</code>, the prop remains authoritative and <code>onopenchange</code> reports requested transitions. With <code>bind</code>, native transitions update the live value and external live-value changes update the popover.</p>
<h3 id="dropdowntriggerattrs-children"><code>Dropdown.Trigger(attrs?, ...children)</code></h3>
<p>Renders the button that toggles the menu.</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>as</code></td>
<td>Sin component</td>
<td>native button</td>
<td>Renders the supplied component with merged trigger attributes and children.</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Suppresses pointer and keyboard activation and exposes disabled state.</td>
</tr>
<tr>
<td><code>type</code></td>
<td><code>string</code></td>
<td><code>&#39;button&#39;</code></td>
<td>Native button type. No default is supplied when using <code>as</code>.</td>
</tr>
<tr>
<td><code>onclick</code></td>
<td>Sin event handler</td>
<td>\u2014</td>
<td>Runs before non-native trigger activation; preventing default suppresses opening.</td>
</tr>
<tr>
<td><code>onkeydown</code></td>
<td>Sin event handler</td>
<td>\u2014</td>
<td>Runs before internal keyboard behavior; preventing default suppresses it.</td>
</tr>
<tr>
<td><code>dom</code></td>
<td>callback or callback array</td>
<td>\u2014</td>
<td>Runs after the internal trigger reference is captured.</td>
</tr>
</tbody></table>
<p>It owns these attributes:</p>
<ul>
<li><code>id</code></li>
<li><code>popovertarget</code> and <code>popovertargetaction=&quot;toggle&quot;</code></li>
<li><code>aria-haspopup=&quot;menu&quot;</code></li>
<li><code>aria-controls</code></li>
<li><code>aria-expanded</code></li>
<li><code>data-state=&quot;open|closed&quot;</code></li>
</ul>
<p>It accepts ordinary button attributes. A custom component must forward the received DOM attributes, event handlers, and <code>dom</code> callback to its interactive element. Native buttons use <code>popovertarget</code>; other rendered elements are toggled through the Popover API by the internal click handler.</p>
<h3 id="dropdowncontentattrs-children"><code>Dropdown.Content(attrs?, ...children)</code></h3>
<p>Renders the menu as a <code>div</code> with <code>popover=&quot;auto&quot;</code> and <code>role=&quot;menu&quot;</code>.</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>side</code></td>
<td><code>&#39;top&#39; | &#39;right&#39; | &#39;bottom&#39; | &#39;left&#39;</code></td>
<td><code>&#39;bottom&#39;</code></td>
<td>Requested CSS anchor side. <code>SubContent</code> defaults to <code>&#39;right&#39;</code>.</td>
</tr>
<tr>
<td><code>align</code></td>
<td><code>&#39;start&#39; | &#39;center&#39; | &#39;end&#39;</code></td>
<td><code>&#39;start&#39;</code></td>
<td>Alignment within the requested anchor side.</td>
</tr>
<tr>
<td><code>offset</code></td>
<td><code>number | CSS length</code></td>
<td><code>0</code></td>
<td>Gap from the trigger; numbers are pixels.</td>
</tr>
<tr>
<td><code>alignOffset</code></td>
<td><code>number | CSS length</code></td>
<td><code>0</code></td>
<td>Cross-axis adjustment; numbers are pixels.</td>
</tr>
<tr>
<td><code>avoidCollisions</code></td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Enables logical block/inline flip fallbacks.</td>
</tr>
<tr>
<td><code>collisionStrategy</code></td>
<td><code>&#39;preferred&#39; | &#39;most-space&#39;</code></td>
<td><code>&#39;preferred&#39;</code></td>
<td>Keeps the requested side first, or ranks fallbacks by available space on the placement axis.</td>
</tr>
<tr>
<td><code>loop</code></td>
<td><code>boolean</code></td>
<td>root value</td>
<td>Overrides keyboard looping for this content.</td>
</tr>
<tr>
<td><code>aria-labelledby</code></td>
<td><code>string</code></td>
<td>trigger ID</td>
<td>Overrides the accessible relationship when necessary.</td>
</tr>
<tr>
<td><code>onbeforetoggle</code></td>
<td>Sin event handler</td>
<td>\u2014</td>
<td>Runs after the root <code>onbeforeopenchange</code> callback for the native pre-transition event.</td>
</tr>
<tr>
<td><code>ontoggle</code></td>
<td>Sin event handler</td>
<td>\u2014</td>
<td>Runs after internal open-state synchronization.</td>
</tr>
<tr>
<td><code>onkeydown</code></td>
<td>Sin event handler</td>
<td>\u2014</td>
<td>Runs before menu keyboard handling; preventing default suppresses the built-in behavior.</td>
</tr>
<tr>
<td><code>dom</code></td>
<td>callback or callback array</td>
<td>\u2014</td>
<td>Runs after the internal content reference is captured.</td>
</tr>
</tbody></table>
<p>The component owns <code>id</code>, <code>popover</code>, <code>role</code>, <code>data-state</code>, <code>data-side</code>, and <code>data-align</code>. It exposes <code>--sinewy-trigger-width</code>, <code>--sinewy-trigger-height</code>, and <code>--sinewy-transform-origin</code> for theme CSS. The demo uses the transform-origin variable and disables motion under <code>prefers-reduced-motion: reduce</code>. <code>data-side</code>, <code>data-align</code>, and the transform origin currently describe the requested placement, not a collision-resolved fallback.</p>
<h3 id="dropdownitemattrs-children"><code>Dropdown.Item(attrs?, ...children)</code></h3>
<p>Renders an actionable <code>button</code> with <code>role=&quot;menuitem&quot;</code> and roving <code>tabIndex</code>.</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>as</code></td>
<td>Sin component</td>
<td>native button</td>
<td>Renders the supplied component with merged item attributes and children.</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Marks the item unavailable, removes it from keyboard movement, and suppresses activation.</td>
</tr>
<tr>
<td><code>textValue</code></td>
<td><code>string</code></td>
<td>text content</td>
<td>Explicit text used by typeahead. Recommended for items with complex children.</td>
</tr>
<tr>
<td><code>onselect</code></td>
<td><code>(event, element) =&gt; void</code></td>
<td>\u2014</td>
<td>Called for activation. Prevent default to keep the menu open.</td>
</tr>
<tr>
<td><code>onclick</code></td>
<td>Sin event handler</td>
<td>\u2014</td>
<td>Runs before <code>onselect</code>; preventing default also suppresses selection and closing.</td>
</tr>
<tr>
<td><code>onfocus</code></td>
<td>Sin event handler</td>
<td>\u2014</td>
<td>Runs before internal highlighting. Prevent default to suppress highlighting.</td>
</tr>
<tr>
<td><code>onpointermove</code></td>
<td>Sin event handler</td>
<td>\u2014</td>
<td>Runs before pointer focus/highlighting. Prevent default to suppress it.</td>
</tr>
</tbody></table>
<p>The component owns <code>role</code>, <code>tabIndex</code>, <code>aria-disabled</code>, <code>data-disabled</code>, and <code>data-text-value</code>. <code>type</code> defaults to <code>button</code> for the native element and has no default when using <code>as</code>. A custom component must forward its received attributes and handlers to the interactive element.</p>
<p>Disabled items use ARIA disabled state instead of the native <code>disabled</code> attribute so the menu can consistently control pointer and focus semantics.</p>
<h3 id="dropdowncheckboxattrs-children"><code>Dropdown.Checkbox(attrs?, ...children)</code></h3>
<p>Renders a checkable item with <code>role=&quot;menuitemcheckbox&quot;</code>. It supports boolean and indeterminate state.</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>checked</code></td>
<td><code>boolean | &#39;indeterminate&#39;</code></td>
<td>\u2014</td>
<td>Controlled checked state.</td>
</tr>
<tr>
<td><code>defaultChecked</code></td>
<td><code>boolean | &#39;indeterminate&#39;</code></td>
<td><code>false</code></td>
<td>Initial uncontrolled checked state.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;boolean | &#39;indeterminate&#39;&gt;</code></td>
<td>\u2014</td>
<td>Optional two-way live binding.</td>
</tr>
<tr>
<td><code>oncheckedchange</code></td>
<td><code>(checked, event) =&gt; void</code></td>
<td>\u2014</td>
<td>Called after activation with the next boolean value.</td>
</tr>
<tr>
<td><code>onselect</code></td>
<td><code>(event, element) =&gt; void</code></td>
<td>\u2014</td>
<td>Prevent default to toggle without closing the menu.</td>
</tr>
<tr>
<td><code>disabled</code>, <code>as</code>, <code>textValue</code></td>
<td>as for <code>.Item</code></td>
<td>\u2014</td>
<td>Uses the same composition, disabled, and typeahead behavior as an ordinary item.</td>
</tr>
</tbody></table>
<p>The item exposes <code>aria-checked=&quot;true|false|mixed&quot;</code> and <code>data-state=&quot;checked|unchecked|indeterminate&quot;</code>. Activating an indeterminate checkbox changes it to <code>true</code>.</p>
<h3 id="dropdownindicatorattrs-children"><code>Dropdown.Indicator(attrs?, ...children)</code></h3>
<p>Renders a <code>span</code> inside a checkbox when its state is checked or indeterminate. Pass <code>forceMount: true</code> to keep it mounted while unchecked; in that case, use <code>data-state</code> to style visibility.</p>
<pre><code class="language-js">Dropdown.Checkbox({ bind: notifications },
  Dropdown.Indicator(&#39;\u2713&#39;),
  &#39;Notifications&#39;
)
</code></pre>
<p>An indicator exposes <code>data-state=&quot;checked|unchecked|indeterminate&quot;</code> and defaults to <code>aria-hidden=&quot;true&quot;</code>. It must be nested in a checkbox or radio item.</p>
<h3 id="dropdownradiogroupattrs-children"><code>Dropdown.RadioGroup(attrs?, ...children)</code></h3>
<p>Provides exclusive selection state to nested radio items and renders a <code>div</code> with <code>role=&quot;group&quot;</code>.</p>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>value</code></td>
<td>any</td>
<td>\u2014</td>
<td>Controlled selected value.</td>
</tr>
<tr>
<td><code>defaultValue</code></td>
<td>any</td>
<td>\u2014</td>
<td>Initial uncontrolled selected value.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;any&gt;</code></td>
<td>\u2014</td>
<td>Optional two-way live binding.</td>
</tr>
<tr>
<td><code>onvaluechange</code></td>
<td><code>(value, event) =&gt; void</code></td>
<td>\u2014</td>
<td>Called when activation selects a different value.</td>
</tr>
<tr>
<td><code>ariaLabel</code></td>
<td><code>string</code></td>
<td>\u2014</td>
<td>Convenience alias for <code>aria-label</code>.</td>
</tr>
</tbody></table>
<h3 id="dropdownradioattrs-children"><code>Dropdown.Radio(attrs?, ...children)</code></h3>
<p>Renders a <code>button</code> with <code>role=&quot;menuitemradio&quot;</code>. It accepts a required <code>value</code> plus the same <code>disabled</code>, <code>as</code>, <code>textValue</code>, <code>onselect</code>, and DOM event attributes as <code>.Item</code>.</p>
<pre><code class="language-js">Dropdown.RadioGroup({ bind: density, ariaLabel: &#39;Density&#39; },
  Dropdown.Radio({ value: &#39;compact&#39; },
    Dropdown.Indicator(&#39;\u2022&#39;),
    &#39;Compact&#39;
  ),
  Dropdown.Radio({ value: &#39;comfortable&#39; },
    Dropdown.Indicator(&#39;\u2022&#39;),
    &#39;Comfortable&#39;
  )
)
</code></pre>
<p>The selected item exposes <code>aria-checked=&quot;true&quot;</code> and <code>data-state=&quot;checked&quot;</code>; its siblings expose false/unchecked state. Activation closes by default. Prevent <code>onselect</code> to change the value while leaving the menu open.</p>
<h3 id="dropdowngroupattrs-children"><code>Dropdown.Group(attrs?, ...children)</code></h3>
<p>Renders a <code>div</code> with <code>role=&quot;group&quot;</code>. <code>ariaLabel</code> is a convenience alias for <code>aria-label</code>; other DOM attributes are forwarded.</p>
<pre><code class="language-js">Dropdown.Group({ ariaLabel: &#39;File actions&#39; },
  Dropdown.Label(&#39;File actions&#39;),
  Dropdown.Item(&#39;Edit&#39;)
)
</code></pre>
<h3 id="dropdownlabelattrs-children"><code>Dropdown.Label(attrs?, ...children)</code></h3>
<p>Renders an unstyled, non-focusable <code>div</code>. It adds no role or automatic relationship, allowing the consumer to choose visible or ARIA labeling structure.</p>
<h3 id="dropdownseparatorattrs-children"><code>Dropdown.Separator(attrs?, ...children)</code></h3>
<p>Renders a <code>div</code> with <code>role=&quot;separator&quot;</code>.</p>
<h3 id="dropdownsubattrs-children"><code>Dropdown.Sub(attrs?, ...children)</code></h3>
<p>Creates a nested menu state scope without rendering a wrapper. It accepts <code>defaultOpen</code>, controlled <code>open</code>, <code>bind: s.Live&lt;boolean&gt;</code>, <code>onbeforeopenchange</code>, <code>onopenchange</code>, and <code>loop</code> with the same meanings as the root. <code>openDelay</code> defaults to 100 ms and <code>closeDelay</code> to 300 ms for pointer interaction.</p>
<h3 id="dropdownsubtriggerattrs-children"><code>Dropdown.SubTrigger(attrs?, ...children)</code></h3>
<p>Renders the submenu trigger as a menu item with <code>aria-haspopup=&quot;menu&quot;</code>, synchronized expanded state, and a native popover target. It accepts <code>as</code>, <code>disabled</code>, <code>textValue</code>, and ordinary item event attributes. The themed facade appends a decorative chevron that follows the document direction; the headless primitive leaves visual affordances to the consumer.</p>
<h3 id="dropdownsubcontentattrs-children"><code>Dropdown.SubContent(attrs?, ...children)</code></h3>
<p>Renders a nested <code>popover=&quot;auto&quot;</code> menu. It accepts the same attributes as <code>.Content</code>, with <code>side</code> defaulting to <code>right</code>.</p>
<pre><code class="language-js">Dropdown.Sub(
  Dropdown.SubTrigger(&#39;More&#39;),
  Dropdown.SubContent(
    Dropdown.Item({ onselect: archive }, &#39;Archive&#39;),
    Dropdown.Item({ onselect: duplicate }, &#39;Duplicate&#39;)
  )
)
</code></pre>
<p>In LTR mode, Right Arrow opens a focused submenu and Left Arrow closes it. RTL reverses those keys. Pointer movement over a subtrigger opens it after <code>openDelay</code>; leaving its trigger or content closes it after <code>closeDelay</code>. A geometric pointer-grace region preserves the active submenu while the pointer moves diagonally from its trigger into the nested content. Escape closes only the current submenu, including through multiple nested levels. Selecting a nested item closes the full dropdown tree.</p>
<h2 id="accessibility">Accessibility</h2>
<p>The primitive supplies menu roles, trigger/content relationships, synchronized expanded state, roving focus, and ARIA-disabled item state. Consumers remain responsible for providing a meaningful trigger label, a visible or ARIA menu label, sufficient color contrast, and styles that make focus and disabled states distinguishable.</p>
<p>The implementation follows the browser&#39;s native popover lifecycle. Keyboard-only and assistive-technology testing is still required before treating the component as stable.</p>
<h2 id="keyboard-and-focus-behavior">Keyboard and focus behavior</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Current behavior</th>
</tr>
</thead>
<tbody><tr>
<td>Trigger click</td>
<td>Toggles the native popover and focuses the first enabled item when opening.</td>
</tr>
<tr>
<td>Enter/Space on trigger</td>
<td>Opens and focuses the first enabled item.</td>
</tr>
<tr>
<td>Arrow Down on trigger</td>
<td>Opens and focuses the first enabled item.</td>
</tr>
<tr>
<td>Arrow Up on trigger</td>
<td>Opens and focuses the last enabled item.</td>
</tr>
<tr>
<td>Arrow Down/Up in menu</td>
<td>Moves through enabled items and optionally loops.</td>
</tr>
<tr>
<td>Home/End</td>
<td>Focuses the first/last enabled item.</td>
</tr>
<tr>
<td>Printable characters</td>
<td>Runs prefix typeahead with a 500 ms search reset; repeated characters cycle matching items. Space is excluded.</td>
</tr>
<tr>
<td>Enter/Space on an item</td>
<td>Uses native button activation, invoking <code>onselect</code>.</td>
</tr>
<tr>
<td>Escape</td>
<td>Uses native popover dismissal; focus is restored to the trigger.</td>
</tr>
<tr>
<td>Tab/Shift+Tab</td>
<td>Closes without forcing focus back to the trigger, allowing normal tab movement.</td>
</tr>
<tr>
<td>Pointer movement</td>
<td>Focuses and marks the enabled item under the pointer.</td>
</tr>
</tbody></table>
<p>When an ordinary item is selected, the popover closes. Calling <code>event.preventDefault()</code> from <code>onclick</code> or <code>onselect</code> keeps it open. Disabled items are skipped by navigation and typeahead.</p>
<h2 id="styling-hooks">Styling hooks</h2>
<table>
<thead>
<tr>
<th>Hook</th>
<th>Element</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td><code>[data-state=&quot;open|closed&quot;]</code></td>
<td>trigger, content</td>
<td>Current native popover state.</td>
</tr>
<tr>
<td><code>[data-highlighted]</code></td>
<td>item</td>
<td>Current roving-focus/pointer-highlighted item.</td>
</tr>
<tr>
<td><code>[data-disabled]</code></td>
<td>trigger, item</td>
<td>Trigger or item is disabled.</td>
</tr>
<tr>
<td><code>[data-text-value]</code></td>
<td>item</td>
<td>Explicit typeahead value when supplied.</td>
</tr>
<tr>
<td><code>[data-side]</code></td>
<td>content</td>
<td>Requested side metadata.</td>
</tr>
<tr>
<td><code>[data-align]</code></td>
<td>content</td>
<td>Requested alignment metadata.</td>
</tr>
<tr>
<td><code>:popover-open</code></td>
<td>content</td>
<td>Native open-state pseudo-class, useful for animation.</td>
</tr>
</tbody></table>
<h2 id="platform-contract-and-boundaries">Platform contract and boundaries</h2>
<p>This implementation intentionally keeps the browser&#39;s native popover lifecycle and CSS anchor-positioning engine as the source of truth:</p>
<ul>
<li>Content is non-modal. A <code>modal</code> option is not exposed because <code>popover=&quot;auto&quot;</code> does not trap focus or make the rest of the page inert.</li>
<li>Content always remains in the DOM, including while closed, so there is no content-level <code>forceMount</code> attribute. Indicator-level <code>forceMount</code> remains meaningful because indicators are conditionally rendered.</li>
<li><code>onbeforeopenchange</code> can cancel opening. Native closing <code>beforetoggle</code> events are observational and non-cancelable, and the stable event does not distinguish Escape from light dismissal well enough to support faithful escape/outside/focus-outside cancellation hooks.</li>
<li>Collision fallback selection is browser-owned. <code>data-side</code>, <code>data-align</code>, and <code>--sinewy-transform-origin</code> describe the requested placement because Anchor Positioning Level 1 does not expose the winning fallback to script or ordinary selectors.</li>
<li>A detached-anchor option is not exposed yet. The current CSS draft defines conditional anchor visibility, but adjacent trigger/content topology and current browser behavior do not provide a dependable cross-browser &quot;hide when detached&quot; contract.</li>
</ul>
<p>The supported target is current evergreen browsers implementing the Popover API and CSS anchor positioning. There is intentionally no portal, JavaScript geometry engine, or legacy fallback. Test in every browser your application supports before adopting the primitive.</p>
<h2 id="current-limits">Current limits</h2>
<p>This current-browser preview has a reviewed component API, but it intentionally does not yet include:</p>
<ul>
<li>an anchor-pointing menu arrow</li>
<li>collision padding, available-space variables, or resolved fallback metadata</li>
<li>modal behavior or cancelable outside-interaction callbacks</li>
<li>dependable detached-anchor hiding</li>
<li>a legacy positioning or popover fallback</li>
</ul>
<p>See <a href="https://github.com/tamstrup/sinewy/blob/main/PLAN.md"><code>../../PLAN.md</code></a> for the completed milestones and remaining platform questions, <a href="https://github.com/tamstrup/sinewy/blob/main/examples/demo.js"><code>../../examples/demo.js</code></a> for the evaluation lab, and <a href="https://github.com/tamstrup/sinewy/blob/main/examples/spike.js"><code>../../examples/spike.js</code></a> for the focused development example.</p>
`},{title:"Radio",description:"A themed native radio with scalar group binding and fieldset semantics.",slug:"radio",source:"docs/components/radio.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"state",text:"State"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"radioattrs",text:"Radio(attrs?)"},{depth:3,id:"radiogroupattrs-children",text:"Radio.Group(attrs?, ...children)"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling-hooks",text:"Styling hooks"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
<p><code>Radio</code> renders a native <code>input type=&quot;radio&quot;</code>. <code>Radio.Group</code> renders a native <code>fieldset</code>, supplies one shared radio <code>name</code>, and coordinates one string value through controlled, uncontrolled, or live state.</p>
<p>The group is the recommended form because a radio represents one choice among alternatives. Native radios supply arrow-key movement, mutual exclusion, validation, labels, form submission, reset, focus, and disabled behavior. Use an ordinary <code>legend</code> for the group name and ordinary <code>label</code> elements for items.</p>
<h2 id="import">Import</h2>
<pre><code class="language-js">import { Radio } from &#39;sinewy&#39;
import Radio from &#39;sinewy/radio&#39;
</code></pre>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">const plan = s.live(&#39;free&#39;)

Radio.Group({ name: &#39;plan&#39;, bind: plan },
  s\`legend\`(&#39;Plan&#39;),
  s\`label\`(Radio({ value: &#39;free&#39; }), &#39;Free&#39;),
  s\`label\`(Radio({ value: &#39;pro&#39; }), &#39;Pro&#39;)
)
</code></pre>
<p>All radios in a group receive the same native name. <code>required</code> is inherited by the items and uses the browser&#39;s native one-choice-required validation.</p>
<h2 id="state">State</h2>
<p>Radio.Group accepts <code>defaultValue</code>, controlled <code>value</code>, or <code>bind: s.Live&lt;string&gt;</code>. When a radio becomes checked, <code>onvaluechange</code> receives its string value. Form reset restores <code>defaultValue</code> and synchronizes local or live-bound state.</p>
<p>A standalone Radio can use <code>defaultChecked</code>, controlled <code>checked</code>, or <code>bind: s.Live&lt;boolean&gt;</code>, but Radio.Group should be preferred whenever several radios form one choice.</p>
<h2 id="styling">Styling</h2>
<p>Radio and Radio.Group support <code>size</code>, <code>color</code>, and <code>highContrast</code>. Group options are inherited by descendant radios unless an item overrides them. Both roots support ordinary Sin style extension.</p>
<h2 id="api-reference">API reference</h2>
<h3 id="radioattrs"><code>Radio(attrs?)</code></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>checked</code></td>
<td><code>boolean</code></td>
<td>\u2014</td>
<td>Controls standalone checked state.</td>
</tr>
<tr>
<td><code>defaultChecked</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Sets initial standalone state.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;boolean&gt;</code></td>
<td>\u2014</td>
<td>Reads and writes standalone checked state.</td>
</tr>
<tr>
<td><code>oncheckedchange</code></td>
<td><code>(checked, event) =&gt; unknown</code></td>
<td>\u2014</td>
<td>Reports a standalone or selected item change.</td>
</tr>
<tr>
<td><code>value</code></td>
<td>native string value</td>
<td><code>&#39;on&#39;</code></td>
<td>Identifies the item in a group and form.</td>
</tr>
<tr>
<td><code>size</code></td>
<td><code>&#39;1&#39; | &#39;2&#39; | &#39;3&#39;</code></td>
<td>inherited or <code>&#39;2&#39;</code></td>
<td>Controls radio dimensions.</td>
</tr>
<tr>
<td><code>color</code></td>
<td>theme color</td>
<td>inherited or <code>&#39;accent&#39;</code></td>
<td>Selects the checked palette.</td>
</tr>
<tr>
<td><code>highContrast</code></td>
<td><code>boolean</code></td>
<td>inherited or <code>false</code></td>
<td>Uses a stronger checked endpoint.</td>
</tr>
</tbody></table>
<p>Radio owns <code>type=&quot;radio&quot;</code> and its native radio semantics. Compatible native input attributes and events are forwarded.</p>
<h3 id="radiogroupattrs-children"><code>Radio.Group(attrs?, ...children)</code></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>value</code></td>
<td><code>string</code></td>
<td>\u2014</td>
<td>Controls the selected item value.</td>
</tr>
<tr>
<td><code>defaultValue</code></td>
<td><code>string</code></td>
<td>\u2014</td>
<td>Sets initial selection and the reset baseline.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;string&gt;</code></td>
<td>\u2014</td>
<td>Reads and writes the selected value.</td>
</tr>
<tr>
<td><code>onvaluechange</code></td>
<td><code>(value, event) =&gt; unknown</code></td>
<td>\u2014</td>
<td>Reports a newly selected value.</td>
</tr>
<tr>
<td><code>name</code></td>
<td><code>string</code></td>
<td>required</td>
<td>Supplies the shared native radio name.</td>
</tr>
<tr>
<td><code>required</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Requires one native radio selection.</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>native fieldset attribute</td>
<td><code>false</code></td>
<td>Disables every descendant natively.</td>
</tr>
</tbody></table>
<p>JavaScript calls that omit <code>name</code> receive a deterministic internal name so native grouping remains functional, but the typed API requires an explicit name for an intentional form contract.</p>
<h2 id="keyboard-and-focus-behavior">Keyboard and focus behavior</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td>Arrow keys</td>
<td>Move selection within the native named group.</td>
</tr>
<tr>
<td><code>Space</code></td>
<td>Selects the focused radio.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td>Moves into or out of the radio group according to browser behavior.</td>
</tr>
<tr>
<td>Label click</td>
<td>Selects the associated radio.</td>
</tr>
</tbody></table>
<h2 id="styling-hooks">Styling hooks</h2>
<table>
<thead>
<tr>
<th>Hook</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td><code>:checked</code></td>
<td>Native selected state.</td>
</tr>
<tr>
<td><code>data-state=&quot;checked|unchecked&quot;</code></td>
<td>Stable public state hook.</td>
</tr>
<tr>
<td><code>data-size</code>, <code>data-color</code>, <code>data-high-contrast</code></td>
<td>Resolved theme options.</td>
</tr>
<tr>
<td><code>::before</code></td>
<td>Visual inner selection dot.</td>
</tr>
<tr>
<td><code>:hover</code>, <code>:active</code>, <code>:focus-visible</code>, <code>:disabled</code></td>
<td>Native interaction states.</td>
</tr>
</tbody></table>
<h2 id="current-limits">Current limits</h2>
<ul>
<li>Group values are strings, matching native radio values.</li>
<li>Radio.Group does not invent roving focus; same-name native radios own keyboard movement.</li>
<li>There are no indicator, item-label, or composition parts.</li>
</ul>
`},{title:"Select",description:"A themed native single-value select with option and optgroup helpers.",slug:"select",source:"docs/components/select.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"state-and-forms",text:"State and forms"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"selectattrs-children",text:"Select(attrs?, ...children)"},{depth:3,id:"selectoptionattrs-children",text:"Select.Option(attrs?, ...children)"},{depth:3,id:"selectgroupattrs-children",text:"Select.Group(attrs?, ...children)"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling-hooks",text:"Styling hooks"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
<p>Need a consistently styled picker without a search field? Use <a href="/components/custom-select">CustomSelect</a>. This page documents the native control, still exported as <code>Select</code> and now also available as <code>NativeSelect</code> from <code>sinewy</code>, <code>sinewy/theme</code>, or <code>sinewy/native-select</code>. Existing imports and behavior are unchanged.</p>
<p><code>Select</code> renders a native <code>select</code>. The browser supplies its popup, keyboard navigation, focus behavior, validation, form submission, and disabled semantics; Sinewy supplies sizing, color-aware interaction styling, controlled state, and live binding.</p>
<p>In browsers with customizable Select support, Sinewy progressively enhances the native picker with the same surface, option sizing, selection gutter, group typography, shadow, and interaction colors used by Dropdown and ContextMenu. Other browsers keep their platform picker and the existing themed closed control.</p>
<p><code>Select.Option</code> renders <code>option</code>, and <code>Select.Group</code> renders <code>optgroup</code>. They exist because options and labelled groups are concrete parts of the native select model, not custom menu abstractions.</p>
<p>The initial contract is deliberately single-value. Native <code>multiple</code> selection is deferred because it needs an array-valued state contract and a materially different visual interaction.</p>
<h2 id="import">Import</h2>
<pre><code class="language-js">import { Select } from &#39;sinewy&#39;
import Select from &#39;sinewy/select&#39;
</code></pre>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">Select({ name: &#39;produce&#39;, defaultValue: &#39;pear&#39; },
  Select.Group({ label: &#39;Fruit&#39; },
    Select.Option({ value: &#39;apple&#39; }, &#39;Apple&#39;),
    Select.Option({ value: &#39;pear&#39; }, &#39;Pear&#39;)
  ),
  Select.Group({ label: &#39;Vegetables&#39; },
    Select.Option({ value: &#39;carrot&#39; }, &#39;Carrot&#39;)
  )
)
</code></pre>
<p>Use a native <code>label</code> or an accessible name through <code>aria-label</code> or <code>aria-labelledby</code>.</p>
<h2 id="state-and-forms">State and forms</h2>
<p>Use <code>defaultValue</code> for local state, <code>value</code> for owner-controlled state, or <code>bind</code> with a <code>s.Live&lt;string&gt;</code>:</p>
<pre><code class="language-js">const produce = s.live(&#39;pear&#39;)

Select({
  bind: produce,
  name: &#39;produce&#39;,
  onvaluechange(value, event) {
    console.log(value, event.type)
  }
},
Select.Option({ value: &#39;apple&#39; }, &#39;Apple&#39;),
Select.Option({ value: &#39;pear&#39; }, &#39;Pear&#39;)
)
</code></pre>
<p>Native <code>name</code>, <code>required</code>, <code>form</code>, <code>disabled</code>, <code>autocomplete</code>, and other compatible select attributes are forwarded. Form reset restores <code>defaultValue</code> and synchronizes local or live-bound state. The consumer&#39;s native <code>onchange</code> handler runs before <code>onvaluechange</code>.</p>
<h2 id="styling">Styling</h2>
<p>Select supports <code>size</code>, <code>color</code>, and <code>highContrast</code>, plus normal Sin style extension:</p>
<pre><code class="language-js">const WideSelect = Select\`
  width 240
\`
</code></pre>
<p>The browser continues to own popup behavior and placement. Where <code>appearance: base-select</code> and <code>::picker(select)</code> are supported, Sinewy also themes the popup and options. The enhancement requires no additional public attribute and falls back to the platform picker without changing behavior.</p>
<blockquote>
<p><strong>Safari support:</strong> Customizable picker styling requires Safari 27 or later. Safari 26 and earlier render the regular platform-native picker. Sinewy does not currently replace it with a custom listbox fallback.</p>
</blockquote>
<h2 id="api-reference">API reference</h2>
<h3 id="selectattrs-children"><code>Select(attrs?, ...children)</code></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>value</code></td>
<td><code>string</code></td>
<td>\u2014</td>
<td>Controls the selected value.</td>
</tr>
<tr>
<td><code>defaultValue</code></td>
<td><code>string</code></td>
<td>\u2014</td>
<td>Sets initial local state and the reset baseline.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;string&gt;</code></td>
<td>\u2014</td>
<td>Reads and writes one selected value.</td>
</tr>
<tr>
<td><code>onvaluechange</code></td>
<td><code>(value, event) =&gt; unknown</code></td>
<td>\u2014</td>
<td>Reports a native selection change.</td>
</tr>
<tr>
<td><code>size</code></td>
<td><code>&#39;1&#39; | &#39;2&#39; | &#39;3&#39;</code></td>
<td><code>&#39;2&#39;</code></td>
<td>Controls the closed control dimensions.</td>
</tr>
<tr>
<td><code>color</code></td>
<td>theme color</td>
<td><code>&#39;accent&#39;</code></td>
<td>Selects the interaction palette.</td>
</tr>
<tr>
<td><code>highContrast</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Strengthens the border endpoint.</td>
</tr>
</tbody></table>
<h3 id="selectoptionattrs-children"><code>Select.Option(attrs?, ...children)</code></h3>
<p>Renders a native <code>option</code> and forwards native option attributes such as <code>value</code>, <code>disabled</code>, and <code>label</code>. When Select owns a value, Option emits the matching native <code>selected</code> state for SSR and hydration.</p>
<h3 id="selectgroupattrs-children"><code>Select.Group(attrs?, ...children)</code></h3>
<p>Renders a native <code>optgroup</code>. Supply its required visible group name with the native <code>label</code> attribute; <code>disabled</code> and other compatible attributes are forwarded.</p>
<h2 id="keyboard-and-focus-behavior">Keyboard and focus behavior</h2>
<p>Keyboard and popup behavior follow the browser&#39;s native select implementation, including arrow navigation, typeahead, Escape, Enter, Space, and platform-specific modifier behavior.</p>
<h2 id="styling-hooks">Styling hooks</h2>
<table>
<thead>
<tr>
<th>Hook</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td><code>data-size</code>, <code>data-color</code></td>
<td>Resolved theme options.</td>
</tr>
<tr>
<td><code>data-high-contrast</code></td>
<td>Present when high contrast is enabled.</td>
</tr>
<tr>
<td><code>:open</code></td>
<td>Native open-picker state in customizable Select implementations.</td>
</tr>
<tr>
<td><code>::picker(select)</code></td>
<td>Native top-layer picker surface where supported.</td>
</tr>
<tr>
<td><code>::picker-icon</code></td>
<td>Native disclosure icon where supported.</td>
</tr>
<tr>
<td><code>option:checked</code>, <code>option::checkmark</code></td>
<td>Native selected option and indicator where supported.</td>
</tr>
<tr>
<td><code>:hover</code>, <code>:focus-visible</code>, <code>:disabled</code></td>
<td>Native interaction states.</td>
</tr>
</tbody></table>
<h2 id="current-limits">Current limits</h2>
<ul>
<li>Select supports one scalar string value; <code>multiple</code> is not yet public.</li>
<li>Browsers without customizable Select support use their native popup appearance.</li>
<li>Popup placement remains browser controlled and does not expose Dropdown placement options.</li>
<li>There is no custom trigger, portal, searchable combobox behavior, or composition API.</li>
</ul>
`},{title:"Split Panel",description:"Two resizable panes with a pointer- and keyboard-operated divider.",slug:"split-panel",source:"docs/components/split-panel.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"orientation-and-sizing",text:"Orientation and sizing"},{depth:2,id:"state",text:"State"},{depth:2,id:"snapping",text:"Snapping"},{depth:2,id:"api-reference",text:"API reference"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"accessibility-and-keyboard-behavior",text:"Accessibility and keyboard behavior"}],html:`<h2 id="overview">Overview</h2>
<p><code>SplitPanel</code> arranges two panes around a draggable separator. Use it for a navigation sidebar,
editor/results workspace, or nested panes. The primitive owns layout, pointer capture, constraints,
keyboard behavior, and accessibility. The themed export adds a subtle divider and focus treatment.
It is not a docking system and does not persist layout settings.</p>
<h2 id="import">Import</h2>
<pre><code class="language-js">import { SplitPanel } from &#39;sinewy&#39; // structural primitive
import SplitPanel from &#39;sinewy/split-panel&#39;
import { SplitPanel as ThemedSplitPanel } from &#39;sinewy/theme&#39;
</code></pre>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">import s from &#39;sin&#39;
import { SplitPanel } from &#39;sinewy/theme&#39;

const position = s.live(35)
const Workspace = SplitPanel\`
  height 320
  --min 120px
  --max calc(100% - 160px)
\`

Workspace({ bind: position },
  SplitPanel.Start({ id: &#39;navigation&#39; }, &#39;Navigation&#39;),
  SplitPanel.Divider({ &#39;aria-label&#39;: &#39;Navigation&#39; }),
  SplitPanel.End(&#39;Content&#39;)
)
</code></pre>
<p>Supply exactly one Start, Divider, and End, in that order. Divider children may provide a decorative
grip; do not place buttons or other focusable controls inside the separator. Parts receive ordinary
div attributes, styles, DOM hooks, and events. Consumer handlers run first and may prevent default.</p>
<h2 id="orientation-and-sizing">Orientation and sizing</h2>
<p><code>orientation: &#39;horizontal&#39;</code> places panes side by side, separated by a vertical divider. <code>&#39;vertical&#39;</code>
stacks them with a horizontal divider. Stacked layouts require a definite container height. Nested
SplitPanels work independently. Panes have zero minimum intrinsic size and hide overflow by default;
set pane <code>overflow: auto</code> or provide a scrollable child as appropriate.</p>
<p>Position is the size of the primary pane (Start when none is designated). Percentages use the space
available <strong>after subtracting the divider</strong>, so 50% gives equally sized panes. <code>primary: &#39;start&#39;</code> or
<code>&#39;end&#39;</code> preserves that pane&#39;s pixel size when the container resizes; without it, the ratio is preserved.
Right-to-left layouts place Start at the inline start. Sizes are clamped to the available space.</p>
<h2 id="state">State</h2>
<p>Use <code>defaultPosition</code> or <code>defaultPositionInPixels</code> for initial, internally managed state. Use <code>bind</code>
for two-way percentage state, or <code>position</code> / <code>positionInPixels</code> with <code>onreposition</code> for owner-controlled
state. Precedence is <strong>bind, positionInPixels, position</strong>, then the defaults. Pixel defaults take
precedence over percentage defaults. Avoid supplying multiple state modes.</p>
<p>Controlled pointer/keyboard requests are reported but do not move the divider until accepted by
the owner. Physical container constraints still clamp the rendered size. A primary pane preserves
its pixel size on parent resize; a bound percentage updates accordingly. Resize notifications let
controlled owners synchronize their state. Inputs are reapplied when changed.</p>
<p><code>onreposition({ position, positionInPixels, source }, event)</code> reports pointer/keyboard requests and
container/constraint resizing. <code>source</code> is <code>pointer</code>, <code>keyboard</code>, or <code>resize</code>; the native event is
absent for resize notifications. No callback is emitted simply for initial mounting. Pointer moves
are coalesced to animation frames. Uncontrolled dragging updates layout and ARIA without remounting
children. Owners should avoid expensive work inside reposition callbacks.</p>
<h2 id="snapping">Snapping</h2>
<p>Use <code>snap: &#39;120px 50% repeat(100px)&#39;</code> and <code>snapThreshold</code> (pixels, default 12). The nearest snap point
within the threshold wins, then constraints are applied. Invalid tokens and nonpositive repeat
intervals are ignored. Snapping applies only to pointer movement, so arrow keys cannot become trapped.</p>
<p>A custom <code>snap({ positionInPixels, size, snapThreshold })</code> may return a pixel position or <code>null</code>.
Custom functions own their threshold logic. Coordinates always measure from the primary pane&#39;s edge,
independently of orientation or text direction.</p>
<h2 id="api-reference">API reference</h2>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td><code>defaultPosition</code></td>
<td>number</td>
<td>50</td>
<td>Initial percentage.</td>
</tr>
<tr>
<td><code>defaultPositionInPixels</code></td>
<td>number</td>
<td>\u2014</td>
<td>Initial pixel size.</td>
</tr>
<tr>
<td><code>position</code></td>
<td>number</td>
<td>\u2014</td>
<td>Owner-controlled percentage.</td>
</tr>
<tr>
<td><code>positionInPixels</code></td>
<td>number</td>
<td>\u2014</td>
<td>Owner-controlled pixel size.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;number&gt;</code></td>
<td>\u2014</td>
<td>Two-way percentage binding.</td>
</tr>
<tr>
<td><code>orientation</code></td>
<td><code>&#39;horizontal&#39; | &#39;vertical&#39;</code></td>
<td>horizontal</td>
<td>Pane arrangement, not divider direction.</td>
</tr>
<tr>
<td><code>primary</code></td>
<td><code>&#39;start&#39; | &#39;end&#39;</code></td>
<td>\u2014</td>
<td>Pane whose pixel size is preserved on resize.</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>boolean</td>
<td>false</td>
<td>Disables user resizing, not responsive layout.</td>
</tr>
<tr>
<td><code>snap</code></td>
<td>string or function</td>
<td>\u2014</td>
<td>Pointer snap targets or transformation.</td>
</tr>
<tr>
<td><code>snapThreshold</code></td>
<td>number</td>
<td>12</td>
<td>Pixel distance for built-in snapping.</td>
</tr>
<tr>
<td><code>onreposition</code></td>
<td><code>(detail, event?) =&gt; unknown</code></td>
<td>\u2014</td>
<td>Position requests and resize notifications.</td>
</tr>
<tr>
<td><code>color</code></td>
<td>theme color</td>
<td>accent</td>
<td>Themed export only.</td>
</tr>
</tbody></table>
<h2 id="styling">Styling</h2>
<p>Extend the root or any part with a Sin tagged template. Interpolation can supply values that change on redraw without moving ordinary styling into a <code>style</code> object:</p>
<pre><code class="language-js">const panelHeight = s.live(320)
const SidebarSplit = SplitPanel\`
  height \${panelHeight}
  --min 12rem
\`

const ScrollablePane = SplitPanel.Start\`
  overflow auto
\`
</code></pre>
<p>Root CSS properties: <code>--divider-width</code> (4px), <code>--divider-hit-area</code> (12px), <code>--min</code> (0px), and <code>--max</code>
(100%). Constraints accept CSS lengths, percentages, and <code>calc()</code>, relative to the space available to
the panes. If constraints conflict, the maximum wins and the minimum is reduced to fit it. The reported
ARIA position reflects the actual constrained size. Root padding is supported; put decorative pane
padding on children so an empty pane can genuinely collapse.</p>
<p>Use <code>data-split-panel</code>, <code>data-split-start</code>, <code>data-split-end</code>, <code>data-split-divider</code>, <code>data-orientation</code>,
and the root&#39;s <code>data-dragging</code> hooks. <code>--split-start</code> and <code>--split-end</code> are internal layout properties,
not public configuration. Thin visible dividers can retain a generous invisible drag target.</p>
<h2 id="accessibility-and-keyboard-behavior">Accessibility and keyboard behavior</h2>
<p>Give Divider an <code>aria-label</code> matching the primary pane, or <code>aria-labelledby</code> referencing its heading.
It supplies separator semantics, orientation, current/minimum/maximum values, and <code>aria-controls</code>.
Zero-size panes become inert while their content stays mounted. Disabled dividers leave the tab order.
Pointer dragging focuses the divider without a focus ring, including when focus came from a text
editor. Keyboard interaction and subsequent keyboard focus retain the visible focus treatment.</p>
<table>
<thead>
<tr>
<th>Key</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td>Left / Right</td>
<td>Move a vertical divider physically left / right.</td>
</tr>
<tr>
<td>Up / Down</td>
<td>Move a horizontal divider up / down.</td>
</tr>
<tr>
<td>Shift + arrow</td>
<td>Larger step (10% instead of 1%).</td>
</tr>
<tr>
<td>Home / End</td>
<td>Minimum / maximum primary pane size.</td>
</tr>
<tr>
<td>Enter</td>
<td>Toggle the minimum permitted size and the previous size.</td>
</tr>
</tbody></table>
<p>With a nonzero minimum, Enter minimizes rather than fully hides the pane. Pointer cancellation,
lost capture, disabling, and removal end dragging. Hidden containers preserve positioning intent
until they have a nonzero size. ResizeObserver and Pointer Events are required for interaction;
server rendering supplies the structural layout without accessing browser globals.</p>
<p>Behavior follows the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/windowsplitter/">WAI-ARIA window splitter pattern</a>.
Automated keyboard, geometry, state, and DOM coverage is included. Manual screen-reader and mobile
assistive-technology sign-off remains outstanding; this is a preview component.</p>
`},{title:"Switch",description:"A themed native form switch for immediate boolean settings.",slug:"switch",source:"docs/components/switch.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"state",text:"State"},{depth:2,id:"forms",text:"Forms"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"switchattrs",text:"Switch(attrs?)"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling-hooks",text:"Styling hooks"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
<p><code>Switch</code> renders a native <code>input type=&quot;checkbox&quot;</code> with <code>role=&quot;switch&quot;</code>. The checkbox supplies keyboard activation, focus, disabled behavior, validation, form submission, and reset semantics; Sinewy supplies the switch track, thumb, theme, and controlled state contract.</p>
<p>Use Switch for a setting that takes effect immediately, such as notifications or dark mode. Use Toggle for a pressed tool or formatting choice, and use an ordinary checkbox when the interaction represents selection rather than an immediate on/off setting.</p>
<p>The first API is one directly callable control. There is no <code>Switch.Root</code>, thumb part, label part, indeterminate state, variant, or composition option. Associate the input with an ordinary native <code>label</code>.</p>
<h2 id="import">Import</h2>
<pre><code class="language-js">import { Switch } from &#39;sinewy&#39;
import Switch from &#39;sinewy/switch&#39;
</code></pre>
<p>The themed facade also exports <code>Switch</code> by name:</p>
<pre><code class="language-js">import { Switch } from &#39;sinewy/theme&#39;
</code></pre>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">s\`label\`(
  Switch({
    defaultChecked: true,
    name: &#39;notifications&#39;,
    value: &#39;enabled&#39;
  }),
  &#39;Notifications&#39;
)
</code></pre>
<p>The whole label activates the input. When a visible label is not available, provide an accessible name with <code>aria-label</code> or <code>aria-labelledby</code>.</p>
<h2 id="state">State</h2>
<p>Use <code>defaultChecked</code> for native-style local state, <code>checked</code> when the owner controls state, or <code>bind</code> with a <code>s.Live&lt;boolean&gt;</code>:</p>
<pre><code class="language-js">const notifications = s.live(true)

Switch({
  bind: notifications,
  oncheckedchange(checked, event) {
    console.log(checked, event.type)
  }
})
</code></pre>
<p>Controlled switches report the requested value through <code>oncheckedchange</code> and keep displaying the supplied <code>checked</code> value until the owner redraws with a new value. A live binding is read and written directly.</p>
<p>The consumer&#39;s native <code>onchange</code> handler runs before <code>oncheckedchange</code>. Native checkbox change events are not cancelable because the browser has already completed activation. To guard a transition, prevent the preceding native <code>click</code> event.</p>
<h2 id="forms">Forms</h2>
<p>Because Switch is a real checkbox, a checked switch contributes its <code>name</code> and <code>value</code> to <code>FormData</code>; an unchecked switch contributes nothing. Native <code>required</code>, <code>form</code>, <code>name</code>, <code>value</code>, and other input attributes are forwarded. Form reset restores <code>defaultChecked</code> and synchronizes uncontrolled or live-bound state.</p>
<p>Switch always owns <code>type=&quot;checkbox&quot;</code> and <code>role=&quot;switch&quot;</code>. Those attributes cannot be changed to a different input or accessibility role.</p>
<h2 id="styling">Styling</h2>
<p>Switch supports <code>size</code>, <code>color</code>, and <code>highContrast</code>. There is no <code>variant</code>: the switch track already has one concrete visual state transition. Normal Sin style extension and forwarded <code>style</code> and <code>data</code> objects are supported:</p>
<pre><code class="language-js">const SpacedSwitch = Switch\`
  margin-inline-start 8
\`
</code></pre>
<h2 id="api-reference">API reference</h2>
<h3 id="switchattrs"><code>Switch(attrs?)</code></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>checked</code></td>
<td><code>boolean</code></td>
<td>\u2014</td>
<td>Controls checked state.</td>
</tr>
<tr>
<td><code>defaultChecked</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Sets initial uncontrolled state and the form reset baseline.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;boolean&gt;</code></td>
<td>\u2014</td>
<td>Reads and writes checked state through a live binding.</td>
</tr>
<tr>
<td><code>oncheckedchange</code></td>
<td><code>(checked, event) =&gt; unknown</code></td>
<td>\u2014</td>
<td>Reports a native checkbox change.</td>
</tr>
<tr>
<td><code>size</code></td>
<td><code>&#39;1&#39; | &#39;2&#39; | &#39;3&#39;</code></td>
<td><code>&#39;2&#39;</code></td>
<td>Controls track and thumb dimensions.</td>
</tr>
<tr>
<td><code>color</code></td>
<td>theme color</td>
<td><code>&#39;accent&#39;</code></td>
<td>Selects the checked track palette.</td>
</tr>
<tr>
<td><code>highContrast</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Uses a stronger checked endpoint.</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>native input attribute</td>
<td><code>false</code></td>
<td>Disables focus and activation natively.</td>
</tr>
</tbody></table>
<p>All other compatible native input attributes, DOM hooks, and events are forwarded. Switch does not accept children.</p>
<h2 id="keyboard-and-focus-behavior">Keyboard and focus behavior</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>Space</code></td>
<td>Toggles the focused native checkbox.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td>Moves focus to an enabled switch in document order.</td>
</tr>
<tr>
<td>Label click</td>
<td>Activates the associated switch.</td>
</tr>
<tr>
<td>Pointer press</td>
<td>Uses native checkbox activation plus the themed active treatment.</td>
</tr>
<tr>
<td>Keyboard focus</td>
<td>Shows the themed <code>:focus-visible</code> outline.</td>
</tr>
</tbody></table>
<h2 id="styling-hooks">Styling hooks</h2>
<table>
<thead>
<tr>
<th>Hook</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td><code>:checked</code></td>
<td>Native checked state.</td>
</tr>
<tr>
<td><code>data-state=&quot;checked|unchecked&quot;</code></td>
<td>Stable state hook synchronized with the public state contract.</td>
</tr>
<tr>
<td><code>data-size</code>, <code>data-color</code></td>
<td>Resolved theme options.</td>
</tr>
<tr>
<td><code>data-high-contrast</code></td>
<td>Present when high contrast is enabled.</td>
</tr>
<tr>
<td><code>::before</code></td>
<td>Visual thumb on the native input.</td>
</tr>
<tr>
<td><code>:hover</code>, <code>:active</code>, <code>:focus-visible</code>, <code>:disabled</code></td>
<td>Native interaction states.</td>
</tr>
</tbody></table>
<h2 id="current-limits">Current limits</h2>
<ul>
<li>Switch always renders a native checkbox with the switch role.</li>
<li>There are no structural parts; the thumb is a pseudo-element and labels remain native HTML.</li>
<li>Indeterminate state is omitted because a switch represents a binary setting.</li>
<li>Loading, icons, and speculative composition APIs are not included.</li>
</ul>
`},{title:"Toast",description:"Small, non-modal notifications with polite announcements and pausable auto-dismiss.",slug:"toast",source:"docs/components/toast.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"toastattrs-children",text:"Toast(attrs?, ...children)"},{depth:3,id:"toastviewportattrs-children",text:"Toast.Viewport(attrs?, ...children)"},{depth:3,id:"toastcloseattrs-children",text:"Toast.Close(attrs?, ...children)"},{depth:2,id:"accessibility",text:"Accessibility"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
<p><code>Toast</code> confirms a completed action without interrupting the current task. The primitive owns
visibility, dismissal, and timing; the themed export adds a restrained panel and close button.
Use inline messages or dialogs for errors and decisions that must not disappear.</p>
<h2 id="import">Import</h2>
<pre><code class="language-js">import { Toast } from &#39;sinewy&#39;
import Toast from &#39;sinewy/toast&#39;
import { Toast as ThemedToast } from &#39;sinewy/theme&#39;
</code></pre>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">import s from &#39;sin&#39;
import { Button, Toast } from &#39;sinewy/theme&#39;

const Example = s(() =&gt; {
  let notification = null, nextId = 0
  return () =&gt; s\`div\`(
    Button({ onclick: () =&gt; notification = { id: ++nextId, message: &#39;Query saved&#39; } }, &#39;Save&#39;),
    Toast.Viewport({ &#39;aria-label&#39;: &#39;Notifications&#39; },
      notification &amp;&amp; Toast({
        key: notification.id,
        onopenchange: open =&gt; { if (!open) notification = null }
      },
        s\`span\`(notification.message),
        Toast.Close({ &#39;aria-label&#39;: &#39;Dismiss notification&#39; })
      )
    )
  )
})
</code></pre>
<p>Keep Viewport mounted, even while empty, so the live region exists before a notification arrives.
Use a new key for a new notification, including repeated identical messages: this restarts its
timer and inserts new content into the live region. Ordinary rerenders do not restart a timer.</p>
<h2 id="styling">Styling</h2>
<p>The themed toast defaults to a neutral surface, compact typography, a subtle border and shadow,
and a small close button. <code>color</code> changes its focus palette. It inherits the document&#39;s color scheme
and supports forced colors. There is no entrance animation or motion requirement.</p>
<p>All parts forward native attributes, styles, DOM hooks, and events. Extend them with Sin templates.
Viewport is fixed to the bottom inline end by default, with pointer events passing through its
empty space. Toasts stack vertically and accept pointer interaction. Its top/bottom positions
respect safe-area insets. Mount it near the app root, outside transformed/clipping containers.
It does not enter the browser top layer and does not appear above native modal dialogs.</p>
<h2 id="api-reference">API reference</h2>
<h3 id="toastattrs-children"><code>Toast(attrs?, ...children)</code></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>open</code></td>
<td>boolean</td>
<td>\u2014</td>
<td>Owner-controlled visibility.</td>
</tr>
<tr>
<td><code>defaultOpen</code></td>
<td>boolean</td>
<td>true</td>
<td>Initial uncontrolled visibility.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;boolean&gt;</code></td>
<td>\u2014</td>
<td>Two-way visibility binding, taking precedence over <code>open</code>.</td>
</tr>
<tr>
<td><code>duration</code></td>
<td>number</td>
<td>5000</td>
<td>Visible milliseconds before requesting dismissal; 0 disables the timer.</td>
</tr>
<tr>
<td><code>onopenchange</code></td>
<td><code>(open, event?) =&gt; unknown</code></td>
<td>\u2014</td>
<td>Reports a dismissal request. Timer dismissals have no native event.</td>
</tr>
<tr>
<td><code>color</code></td>
<td>theme color</td>
<td>gray</td>
<td>Themed export only.</td>
</tr>
</tbody></table>
<p>Duration must be finite and nonnegative; invalid values use 5000ms. Changing duration resets the
remaining time. Closing and reopening starts a fresh timer. A controlled owner may reject dismissal;
the timeout is requested only once until reopened or duration changes. No callback fires on mounting.
The root renders nothing while closed. <code>data-toast</code>, <code>data-state=&quot;open&quot;</code>, and <code>aria-atomic=&quot;true&quot;</code>
are supplied on its visible element.</p>
<h3 id="toastviewportattrs-children"><code>Toast.Viewport(attrs?, ...children)</code></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>position</code></td>
<td>bottom-end, bottom-start, top-end, top-start</td>
<td>bottom-end</td>
<td>Fixed placement, respecting text direction.</td>
</tr>
<tr>
<td><code>aria-label</code></td>
<td>string</td>
<td>Notifications</td>
<td>Localizable label for the notification area.</td>
</tr>
</tbody></table>
<p>Viewport owns <code>role=&quot;status&quot;</code>, <code>aria-live=&quot;polite&quot;</code>, <code>aria-relevant=&quot;additions text&quot;</code>, and
<code>aria-atomic=&quot;false&quot;</code>. Each toast is atomic, so a message update is announced together without
re-reading the whole stack. Hooks: <code>data-toast-viewport</code> and <code>data-position</code>.</p>
<h3 id="toastcloseattrs-children"><code>Toast.Close(attrs?, ...children)</code></h3>
<p>A native button, nested inside Toast, which requests dismissal. Its default text is <code>\xD7</code> and its
default accessible label is \u201CDismiss notification\u201D; localize <code>aria-label</code> when needed. <code>type</code>
defaults to button. Native disabled behavior applies. Consumer click handlers run first and can
prevent dismissal with <code>event.preventDefault()</code>.</p>
<h2 id="accessibility">Accessibility</h2>
<p>Opening a toast does not move focus. Keep notifications short and use the always-mounted Viewport
for <a href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA22">polite status announcements</a>.
Timers pause while hovered, while focus is inside the toast, when the window loses focus, or when
the document is hidden. Resuming uses the remaining time, not a new full duration. Every toast should
have a Close button. For important content or actions, use <code>duration: 0</code> and provide a persistent
alternative to the toast; do not use timed notifications as the only record of important information.</p>
<h2 id="keyboard-and-focus-behavior">Keyboard and focus behavior</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td>Tab / Shift+Tab</td>
<td>Normal document order; focus within the toast pauses its timer.</td>
</tr>
<tr>
<td>Enter / Space on Close</td>
<td>Dismisses the toast.</td>
</tr>
<tr>
<td>Escape inside a toast</td>
<td>Dismisses that toast only; Escape elsewhere is untouched.</td>
</tr>
</tbody></table>
<p>When a focused toast is dismissed, focus returns to the element active when it appeared if that
element remains available and focus has not already moved elsewhere. Automatic dismissal does not
steal focus. All timers and window/document listeners are removed on teardown.</p>
<h2 id="current-limits">Current limits</h2>
<ul>
<li>Preview component; manual screen-reader and mobile assistive-technology sign-off is outstanding.</li>
<li>No global store, notification history, queue limit, swipe dismissal, or dedicated action part.
Applications own message lists and may compose ordinary buttons as actions.</li>
<li>Viewport should be mounted empty before messages appear. Server rendering is supported without
starting timers; announcing a message already present in server HTML is not guaranteed.</li>
</ul>
`},{title:"Toggle",description:"A themed native two-state button for persistent choices.",slug:"toggle",source:"docs/components/toggle.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"state",text:"State"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"toggleattrs-children",text:"Toggle(attrs?, ...children)"},{depth:2,id:"accessibility",text:"Accessibility"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling-hooks",text:"Styling hooks"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
<p><code>Toggle</code> renders a native HTML <code>button</code> with <code>aria-pressed</code> and Sinewy&#39;s reusable control theme. Use it for a choice that stays on or off, such as bold text, muting audio, or pinning an item. Use <code>Button</code> for an action that happens once.</p>
<p>The initial API is deliberately direct: there is no <code>Toggle.Root</code>, group, indicator part, composition option, or indeterminate state. Icons and labels are ordinary children.</p>
<h2 id="import">Import</h2>
<pre><code class="language-js">import { Toggle } from &#39;sinewy&#39;
import Toggle from &#39;sinewy/toggle&#39;
</code></pre>
<p>The themed facade also exports <code>Toggle</code> by name:</p>
<pre><code class="language-js">import { Toggle } from &#39;sinewy/theme&#39;
</code></pre>
<h2 id="basic-usage">Basic usage</h2>
<pre><code class="language-js">Toggle({
  defaultPressed: false,
  size: &#39;2&#39;,
  variant: &#39;soft&#39;,
  color: &#39;accent&#39;,
  onpressedchange(pressed) {
    console.log(pressed)
  }
}, &#39;Bold&#39;)
</code></pre>
<p><code>type</code> defaults to <code>button</code>, preventing accidental form submission. The button exposes <code>aria-pressed=&quot;true|false&quot;</code> and <code>data-state=&quot;on|off&quot;</code>.</p>
<h2 id="state">State</h2>
<p>Use <code>defaultPressed</code> for locally managed state, <code>pressed</code> when the owner controls state, or <code>bind</code> with a <code>s.Live&lt;boolean&gt;</code>:</p>
<pre><code class="language-js">const bold = s.live(false)

Toggle({ bind: bold }, &#39;Bold&#39;)
</code></pre>
<p>When controlled with <code>pressed</code>, activation calls <code>onpressedchange</code> but does not mutate the rendered state. The owner must pass the new value back. A consumer <code>onclick</code> runs before Toggle&#39;s state transition; calling <code>event.preventDefault()</code> cancels that transition.</p>
<h2 id="styling">Styling</h2>
<p>Toggle shares <code>size</code>, <code>variant</code>, <code>color</code>, and <code>highContrast</code> with Button and Dropdown controls. The four variants are <code>solid</code>, <code>soft</code>, <code>outline</code>, and <code>ghost</code>. Its unpressed appearance uses the neutral theme scale, while its pressed appearance uses the selected color.</p>
<p>Normal Sin style extension is supported:</p>
<pre><code class="language-js">const SquareToggle = Toggle\`
  width 36
  padding 0
\`
</code></pre>
<h2 id="api-reference">API reference</h2>
<h3 id="toggleattrs-children"><code>Toggle(attrs?, ...children)</code></h3>
<table>
<thead>
<tr>
<th>Attribute</th>
<th>Type</th>
<th>Default</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>pressed</code></td>
<td><code>boolean</code></td>
<td>\u2014</td>
<td>Controls the pressed state.</td>
</tr>
<tr>
<td><code>defaultPressed</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Sets the initial uncontrolled state.</td>
</tr>
<tr>
<td><code>bind</code></td>
<td><code>s.Live&lt;boolean&gt;</code></td>
<td>\u2014</td>
<td>Reads and writes pressed state through a live binding.</td>
</tr>
<tr>
<td><code>onpressedchange</code></td>
<td><code>(pressed, event) =&gt; unknown</code></td>
<td>\u2014</td>
<td>Reports a requested state change.</td>
</tr>
<tr>
<td><code>size</code></td>
<td><code>&#39;1&#39; | &#39;2&#39; | &#39;3&#39;</code></td>
<td><code>&#39;2&#39;</code></td>
<td>Controls height, spacing, radius, and font size.</td>
</tr>
<tr>
<td><code>variant</code></td>
<td><code>&#39;solid&#39; | &#39;soft&#39; | &#39;outline&#39; | &#39;ghost&#39;</code></td>
<td><code>&#39;soft&#39;</code></td>
<td>Selects the visual treatment.</td>
</tr>
<tr>
<td><code>color</code></td>
<td>theme color</td>
<td><code>&#39;accent&#39;</code></td>
<td>Selects the light/dark-aware pressed palette.</td>
</tr>
<tr>
<td><code>highContrast</code></td>
<td><code>boolean</code></td>
<td><code>false</code></td>
<td>Uses stronger pressed-state palette endpoints.</td>
</tr>
<tr>
<td><code>type</code></td>
<td>native button type</td>
<td><code>&#39;button&#39;</code></td>
<td>Selects native form behavior.</td>
</tr>
<tr>
<td><code>disabled</code></td>
<td>native button attribute</td>
<td><code>false</code></td>
<td>Disables focus and activation natively.</td>
</tr>
</tbody></table>
<p>All other native button attributes, DOM hooks, and events are forwarded. Consumer <code>data</code> and <code>style</code> objects are preserved.</p>
<h2 id="accessibility">Accessibility</h2>
<p>Toggle keeps native button keyboard and disabled behavior and communicates its persistent state with <code>aria-pressed</code>. Its accessible name should describe the choice without changing between states\u2014for example, \u201CBold\u201D rather than alternating between \u201CEnable bold\u201D and \u201CDisable bold.\u201D</p>
<h2 id="keyboard-and-focus-behavior">Keyboard and focus behavior</h2>
<table>
<thead>
<tr>
<th>Input</th>
<th>Behavior</th>
</tr>
</thead>
<tbody><tr>
<td><code>Enter</code> or <code>Space</code></td>
<td>Toggles the native button.</td>
</tr>
<tr>
<td><code>Tab</code></td>
<td>Moves focus to an enabled toggle in document order.</td>
</tr>
<tr>
<td>Pointer press</td>
<td>Toggles state and applies the active treatment.</td>
</tr>
<tr>
<td>Keyboard focus</td>
<td>Shows the themed <code>:focus-visible</code> outline.</td>
</tr>
</tbody></table>
<h2 id="styling-hooks">Styling hooks</h2>
<table>
<thead>
<tr>
<th>Hook</th>
<th>Meaning</th>
</tr>
</thead>
<tbody><tr>
<td><code>aria-pressed=&quot;true|false&quot;</code></td>
<td>Native accessible pressed state.</td>
</tr>
<tr>
<td><code>data-state=&quot;on|off&quot;</code></td>
<td>Stable styling state.</td>
</tr>
<tr>
<td><code>data-size</code>, <code>data-variant</code>, <code>data-color</code></td>
<td>Resolved theme options.</td>
</tr>
<tr>
<td><code>data-high-contrast</code></td>
<td>Present when high contrast is enabled.</td>
</tr>
<tr>
<td><code>:hover</code>, <code>:active</code>, <code>:focus-visible</code>, <code>:disabled</code></td>
<td>Native interaction states.</td>
</tr>
</tbody></table>
<h2 id="current-limits">Current limits</h2>
<ul>
<li>Toggle always renders a native <code>button</code>.</li>
<li>Toggle groups, indeterminate state, and icon-specific parts are not included.</li>
<li>Use a stable accessible name; visual state changes do not replace the button&#39;s label.</li>
</ul>
`}],Dd=Object.fromEntries(Ad.map(e=>[e.slug,e]));var Gn=Ad;i.title="Sinewy \u2014 Documentation";i.css.reset``;i.css`
  :root {
    color-scheme light;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: #f7f6f2;
    color: #20211f;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    min-width: 320px;
    min-height: 100svh;
  }

  button,
  a {
    font: inherit;
  }

  a {
    color: inherit;
  }

  ::selection {
    background: #dcd5ff;
  }
`;var rl=i(({},[],{route:e})=>il(e({"/":Cl,"/components/:slug":Tl,"/?":Gd}))),il=i`div
  min-height 100svh
  display grid
  grid-template-columns 256px minmax(0, 1fr)

  @media (max-width: 780px) {
    grid-template-columns 1fr
  }
`,dl=i`aside
  position fixed
  inset 0 auto 0 0
  width 256
  display grid
  grid-template-rows auto 1fr auto
  gap 32
  padding 28 22
  border-right 1px solid #dfddd6
  background rgb(250 249 246 / 0.92)
  backdrop-filter blur(18px)
  z-index 2

  @media (max-width: 780px) {
    display none
  }
`,Rd=i`a
  width fit-content
  display flex
  align-items center
  gap 10
  color inherit
  text-decoration none

  strong {
    font-size 15
    letter-spacing -0.02em
  }

  > span:last-child {
    display grid
    gap 1
  }

  > span:last-child > span {
    color #77766f
    font-size 12
  }
`,Ld=i`span
  width 31
  height 31
  display grid
  place-items center
  border-radius 9
  background #20211f
  color #fff
  font-size 17
  font-weight 820
  letter-spacing -0.08em
`,al=i`nav
  display grid
  align-content start
  gap 25
`,Id=i`section
  display grid
  gap 7

  h2 {
    padding-inline 9
    color #929087
    font-size 10
    font-weight 780
    letter-spacing 0.12em
    text-transform uppercase
  }
`,Pd=i`a
  display flex
  align-items center
  justify-content space-between
  gap 12
  padding 8 9
  border-radius 8
  color #5f605b
  font-size 13
  font-weight 590
  text-decoration none

  &:hover,
  &[data-active] {
    background #eceae3
    color #20211f
  }

  span {
    color #96938b
    font-size 10
    font-weight 650
  }
`,cl=i`footer
  display grid
  gap 6
  color #85837c
  font-size 11
  line-height 1.45

  strong {
    color #5c5c57
    font-weight 680
  }
`,sl=i`nav
  min-width 0
  display none
  align-items center
  gap 5
  overflow-x auto

  @media (max-width: 780px) {
    display flex
  }
`,zd=i`a
  padding 7 9
  border-radius 7
  color #5f605b
  font-size 12
  font-weight 640
  text-decoration none

  &[data-active] {
    background #eceae3
    color #20211f
  }
`,ll=i`main
  min-width 0
  grid-column 2

  @media (max-width: 780px) {
    grid-column 1
  }
`,ur=i`div
  width min(100%, 1100px)
  display grid
  gap 48
  margin 0 auto
  padding 72 52 96

  @media (max-width: 780px) {
    padding 44 20 72
  }
`,pl=i`header
  display grid
  gap 18
  max-width 780

  h1 {
    max-width 12ch
    font-size clamp(42px, 7vw, 78px)
    line-height 0.96
    letter-spacing -0.062em
    word-spacing 0.08em
  }

  p {
    max-width 64ch
    color #686964
    font-size 17
    line-height 1.65
  }
`,Md=i`div
  display flex
  align-items center
  gap 9
  color #6553ca
  font-size 11
  font-weight 790
  letter-spacing 0.11em
  text-transform uppercase

  &::before {
    content ''
    width 7
    height 7
    border-radius 50%
    background #7865df
    box-shadow 0 0 0 4px #e7e2ff
  }
`,cr=i`section
  display grid
  gap 18

  > header {
    display grid
    gap 6
  }

  h2 {
    font-size 22
    letter-spacing -0.035em
  }

  > header p {
    max-width 66ch
    color #74746e
    font-size 14
    line-height 1.55
  }
`,ul=i`div
  display grid
  grid-template-columns repeat(3, minmax(0, 1fr))
  gap 12

  @media (max-width: 900px) {
    grid-template-columns 1fr
  }
`,sr=i`article
  min-width 0
  display grid
  align-content start
  gap 13
  padding 19
  border 1px solid #dedcd4
  border-radius 14
  background rgb(255 255 253 / 0.72)

  strong {
    font-size 14
    letter-spacing -0.015em
  }

  p {
    color #75756f
    font-size 12
    line-height 1.5
  }
`,lr=i`div
  display flex
  align-items center
  justify-content space-between
  gap 12
`,Kn=i`span
  width fit-content
  padding 4 7
  border-radius 99
  background #e6f3e9
  color #347147
  font-size 9
  font-weight 790
  letter-spacing 0.08em
  text-transform uppercase

  &[data-tone='progress'] {
    background #eeeaff
    color #6854ca
  }

  &[data-tone='manual'] {
    background #f6ead3
    color #8b6423
  }
`,Ed=i`div
  height 5
  overflow hidden
  border-radius 99
  background #e9e7e0

  span {
    height 100%
    display block
    border-radius inherit
    background #7966dc
  }
`,$d=i`span
  width 100%
`,Bd=i`a
  display grid
  grid-template-columns minmax(0, 1fr) auto
  align-items center
  gap 20
  padding 24
  border 1px solid #d9d6cd
  border-radius 16
  background #fff
  color inherit
  text-decoration none
  box-shadow 0 15px 45px rgb(52 49 40 / 0.055)
  transition transform 140ms ease, border-color 140ms ease, box-shadow 140ms ease

  &:hover {
    transform translateY(-2px)
    border-color #bcb5df
    box-shadow 0 20px 54px rgb(52 49 40 / 0.09)
  }

  h3 {
    margin-bottom 5
    font-size 18
    letter-spacing -0.025em
  }

  p {
    color #71716b
    font-size 13
    line-height 1.5
  }
`,jd=i`span
  width 34
  height 34
  display grid
  place-items center
  border-radius 50%
  background #f0eee8
  color #555650
  font-size 18
`,hl=i`ol
  display grid
  gap 0
  list-style none

  li {
    position relative
    display grid
    grid-template-columns 26px minmax(0, 1fr)
    gap 13
    padding 0 0 22
    color #74746e
    font-size 13
    line-height 1.5
  }

  li:not(:last-child)::before {
    content ''
    position absolute
    top 19
    left 9
    bottom 2
    width 1
    background #d8d5cc
  }

  strong {
    display block
    margin-bottom 2
    color #363733
    font-size 13
  }
`,Hn=i`span
  width 19
  height 19
  display grid
  place-items center
  border 1px solid #c8c5bc
  border-radius 50%
  background #f7f6f2
  color #89877f
  font-size 9
  font-weight 800
  z-index 1

  &[data-done] {
    border-color #78a987
    background #e6f3e9
    color #347147
  }

  &[data-current] {
    border-color #8d7de0
    background #eeeaff
    color #6854ca
  }
`,Nd=i`header
  display grid
  gap 17
  padding-bottom 32
  border-bottom 1px solid #dddbd3

  h1 {
    font-size clamp(40px, 6vw, 65px)
    line-height 1
    letter-spacing -0.055em
    word-spacing 0.08em
  }

  p {
    max-width 65ch
    color #6e6f69
    font-size 16
    line-height 1.62
  }
`,fl=i`div
  display flex
  align-items center
  gap 7
  color #88877f
  font-size 11
  font-weight 650

  a {
    text-decoration none
  }

  a:hover {
    color #20211f
  }
`,ml=i`div
  display flex
  flex-wrap wrap
  align-items center
  gap 7
`,gl=i`span
  padding 5 8
  border 1px solid #d9d6cd
  border-radius 99
  color #6c6c66
  font-size 10
  font-weight 650
`,bl=i`div
  display grid
  grid-template-columns minmax(0, 1fr) 190px
  gap 58
  align-items start

  @media (max-width: 980px) {
    grid-template-columns 1fr

    > aside {
      display none
    }
  }
`,vl=i`article
  min-width 0
  display grid
  grid-template-columns minmax(0, 1fr)
  gap 48

  section {
    display grid
    grid-template-columns minmax(0, 1fr)
    gap 14
    scroll-margin-top 24
  }

  h2 {
    font-size 23
    letter-spacing -0.035em
  }

  h3 {
    font-size 15
    letter-spacing -0.015em
  }

  p,
  li {
    color #656660
    font-size 14
    line-height 1.68
  }

  ul {
    display grid
    gap 8
    padding-left 19
  }
`,yl=i`div
  width 100%
  min-width 0
  display grid
  gap 14

  h2,
  h3 {
    scroll-margin-top 24
  }

  h2 {
    margin-top 34
    font-size 23
    letter-spacing -0.035em
  }

  h2:first-child {
    margin-top 0
  }

  h3 {
    margin-top 15
    font-size 15
    letter-spacing -0.015em
  }

  p,
  li {
    color #656660
    font-size 14
    line-height 1.68
  }

  ul,
  ol {
    display grid
    gap 7
    padding-left 21
  }

  a {
    color #5e4cc2
    text-underline-offset 3px
  }

  pre {
    min-width 0
    overflow-x auto
    padding 17 19
    border-radius 11
    background #242522
    color #e9e8e2
    font 12px/1.65 "SFMono-Regular", Consolas, "Liberation Mono", monospace
    tab-size 2
  }

  code {
    font-family "SFMono-Regular", Consolas, "Liberation Mono", monospace
    font-size 0.9em
  }

  :not(pre) > code {
    padding 2px 5px
    border 1px solid #dfdcd3
    border-radius 5px
    background #efede7
    color #4f504b
  }

  table {
    width 100%
    max-width 100%
    display block
    overflow-x auto
    border-collapse collapse
    border 1px solid #dedbd2
    border-radius 10
  }

  th,
  td {
    min-width 120
    padding 9 11
    border-bottom 1px solid #e5e2da
    color #656660
    font-size 14
    line-height 1.68
    text-align left
    vertical-align top
  }

  th {
    background #efede7
    color #444540
    font-weight 720
  }

  tr:last-child td {
    border-bottom 0
  }

  blockquote {
    padding 13 16
    border-left 3px solid #7a67d9
    background #efecff
  }

  hr {
    border 0
    border-top 1px solid #dddbd3
  }
`,wl=i`aside
  position sticky
  top 28
  display grid
  max-height calc(100svh - 56px)
  overflow-y auto
  gap 10

  strong {
    color #88877f
    font-size 10
    font-weight 770
    letter-spacing 0.1em
    text-transform uppercase
  }

  a {
    color #77776f
    font-size 12
    text-decoration none
  }

  a:hover {
    color #20211f
  }
`,le=i`div
  min-height 230
  display grid
  place-items center
  padding 28
  border 1px solid #dad7ce
  border-radius 15 15 0 0
  background-color #f2f0e9
  background-image radial-gradient(#d8d4c9 0.7px, transparent 0.7px)
  background-size 13px 13px
`,xl=i`div
  display grid
  gap 16
`,Od=i`section
  display grid
  gap 9
  padding 16
  border 1px solid #dad7ce
  border-radius 14
  background #fff

  h3 {
    color #77766f
    font-size 10
    font-weight 780
    letter-spacing 0.1em
    text-transform uppercase
  }
`,Ut=i`div
  display flex
  flex-wrap wrap
  align-items center
  gap 9
`,kl=i`div
  min-width 116
  display grid
  justify-items start
  gap 8
  padding 12
  border 1px solid #e2dfd7
  border-radius 10
  background #f8f7f3

  > span {
    color #88877f
    font-size 10
    font-weight 680
  }

  &[data-dark] {
    color-scheme dark
    border-color #333
    background #111

    > span {
      color #aaa
    }
  }
`,pe=i`pre
  overflow-x auto
  padding 18 20
  border-radius 0 0 15px 15px
  background #242522
  color #e9e8e2
  font-family "SFMono-Regular", Consolas, "Liberation Mono", monospace
  font-size 12
  line-height 1.65
  tab-size 2
`,Sl=V.Trigger`
  width min(100%, 380px)
  min-height 120
  display grid
  place-items center
  padding 24
  border 1px dashed #8b7dd8
  border-radius 13
  background #f7f5ff
  color #55489b
  font-size 13
  font-weight 690
  text-align center
  user-select none

  &:focus-visible {
    outline 3px solid rgb(111 91 211 / 0.3)
    outline-offset 3px
  }
`,Fd=i`div
  display flex
  justify-content flex-end
  gap 8
  margin-top 24
`,qe=i`label
  display inline-flex
  align-items center
  gap 9
  color #343532
  font-size 13
  font-weight 680
  cursor pointer
`,Vd=i`div
  width 100%
  display grid
  grid-template-columns repeat(2, minmax(0, 1fr))
  align-items start
  gap 26

  @media (max-width: 720px) {
    grid-template-columns 1fr
  }
`,Wn=i`div
  min-width 0
  display grid
  gap 8

  > label {
    color #555650
    font-size 12
    font-weight 720
  }

  > p {
    color #85857f
    font-size 11
    line-height 1.45
  }
`,hr={toast:{status:"Preview",tags:["Status messages","Pausable timer","Headless + theme"],summary:"Quiet confirmations with polite announcements, dismissal, and timers that pause during interaction.",preview:Rl,previewHeadings:[{id:"live-example",text:"Live example"}]},"split-panel":{status:"Preview",tags:["Resizable layout","Pointer + keyboard","Headless + theme"],summary:"Two panes with constrained sizing, snapping, keyboard access, and optional fixed-size primary panes.",preview:Nl,previewHeadings:[{id:"live-example",text:"Live example"}]},"alert-dialog":{status:"Preview",tags:["Native dialog","Alert semantics","Dialog specialization"],summary:"An urgent-decision specialization of Dialog that enforces the native alertdialog role.",preview:zl,previewHeadings:[{id:"live-example",text:"Live example"}]},button:{status:"Preview",tags:["Native control","Shared theme","Form-safe"],summary:"A compact themed native control with four variants and full button attribute forwarding.",preview:Al,previewHeadings:[{id:"live-example",text:"Live example"}]},toggle:{status:"Preview",tags:["Native control","Pressed state","Shared theme"],summary:"A native two-state button with controlled, uncontrolled, and live binding contracts.",preview:Il,previewHeadings:[{id:"live-example",text:"Live example"}]},dialog:{status:"Preview",tags:["Native dialog","Modal top layer","Controlled state"],summary:"A native modal dialog with accessible semantic parts and shared Sinewy theming.",preview:Pl,previewHeadings:[{id:"live-example",text:"Live example"}]},switch:{status:"Preview",tags:["Native checkbox","Form control","Shared theme"],summary:"A native checkbox switch with real form behavior and controlled, uncontrolled, and live state.",preview:$l,previewHeadings:[{id:"live-example",text:"Live example"}]},"custom-select":{status:"Preview",tags:["No search field","Top-layer listbox","Form control"],summary:"Consistently styled single selection with grouped options, typeahead, and native form integration.",preview:Vl,previewHeadings:[{id:"live-example",text:"Live example"}]},select:{status:"Preview",tags:["Native select","Optgroup","Shared theme"],summary:"A themed native scalar select with option groups and controlled, uncontrolled, and live values.",preview:ql,previewHeadings:[{id:"live-example",text:"Live example"}]},checkbox:{status:"Preview",tags:["Native checkbox","Array binding","Fieldset group"],summary:"A native checkbox with boolean state and optional array-valued fieldset grouping.",preview:Ul,previewHeadings:[{id:"live-example",text:"Live example"}]},combobox:{status:"Preview",tags:["Searchable","Single + multiple","Headless + theme"],summary:"A searchable single- or multiple-value field with accessible option and pill navigation.",preview:Yl,previewHeadings:[{id:"live-example",text:"Live example"}]},radio:{status:"Preview",tags:["Native radio","Scalar binding","Fieldset group"],summary:"A native radio with a named fieldset group and one shared scalar value.",preview:Wl,previewHeadings:[{id:"live-example",text:"Live example"}]},"context-menu":{status:"Preview",tags:["Popover API","Point anchors","Headless + theme"],summary:"Contextual actions at pointer or keyboard invocation points, backed by the shared menu engine.",preview:Jl,previewHeadings:[{id:"live-example",text:"Live example"}]},dropdown:{status:"API reviewed",tags:["Popover API","CSS anchors","Headless + theme"],summary:"Actions, checkbox and radio choices, nested menus, room-aware placement, and a theme facade.",preview:_l,previewHeadings:[{id:"live-example",text:"Live example"},{id:"theme-preview",text:"Theme preview"}]}};function fr(e,t){return[dl(Rd({href:"/"},Ld("S"),i`span`(i`strong`("Sinewy"),i`span`("Documentation"))),al(Id(i`h2`("Start here"),Pd({href:"/",data:{active:t.has("/")||void 0}},"Overview")),Id(i`h2`("Components"),Gn.map(n=>Pd({href:"/components/"+n.slug,data:{active:t.has("/components/"+n.slug)||void 0}},n.title,i`span`(hr[n.slug]?.status||"Preview"))))),cl(i`strong`("Independent preview"),"Built for Sin.js with the platform.")),ll(e)]}function Cl({},[],{route:e,doc:t}){return t.title("Sinewy \u2014 Documentation"),fr([mr(e),ur(pl(Md("Independent components for Sin.js"),i`h1`("Small parts. Native behavior."),i`p`("Sinewy is an independently maintained component library for Sin.js. This site documents each public surface as it becomes useful, testable, and honest about its platform boundaries.")),cr(i`header`(i`h2`("Where things stand"),i`p`("The status here follows implemented and verified behavior, not a speculative component catalog.")),ul(sr(lr(i`strong`("Portable reference"),Kn("Markdown")),i`p`("Component prose, API tables, and platform limits now come directly from the repository documents."),Ed($d())),sr(lr(i`strong`("Behavior suite"),Kn("Green")),i`p`("Browser, server rendering, hydration, submenu, and type declaration coverage are in place."),Ed($d())),sr(lr(i`strong`("Accessibility sign-off"),Kn({data:{tone:"manual"}},"Manual")),i`p`("Keyboard behavior is covered; supported-browser and assistive-technology verification remains.")))),cr(i`header`(i`h2`("Components"),i`p`("Each component page combines its portable contract with live Sin examples and generated navigation.")),Gn.map(n=>Bd({href:"/components/"+n.slug},i`div`(i`h3`(n.title),i`p`(hr[n.slug]?.summary||n.description)),jd("\u2192")))),cr({id:"roadmap"},i`header`(i`h2`("Documentation roadmap"),i`p`("The site itself is the visible checklist for turning implementation work into a usable system.")),hl(i`li`(Hn({data:{done:""}},"\u2713"),i`div`(i`strong`("Establish the documentation shell"),"Navigation, progress overview, component layout, and live examples.")),i`li`(Hn({data:{done:""}},"\u2713"),i`div`(i`strong`("Render portable Markdown"),"Frontmatter, GFM content, heading IDs, links, and tables feed the site directly.")),i`li`(Hn({data:{current:""}},"3"),i`div`(i`strong`("Generate the static site"),"Use Sin SSR and route discovery to publish every documented component.")),i`li`(Hn("4"),i`div`(i`strong`("Expand through real components"),"Add primitives only as their contracts become concrete enough to document.")))))],e)}function Tl({slug:e},[],t){let n=Dd[e];if(!n)return t.doc.status(404),Gd({},[],t);let o=hr[e]||{},r=o.preview?o.preview():[],a=o.previewHeadings||[];return t.doc.title(n.title+" \u2014 Sinewy"),fr([mr(t.route),ur(Nd(fl(i`a`({href:"/"},"Components"),i`span`("/"),i`span`(n.title)),ml(Kn(o.status||"Preview"),(o.tags||[]).map(d=>gl(d))),i`h1`(n.title),i`p`(n.description)),bl(vl(r,yl({data:{source:n.source}},i.trust(n.html))),wl(i`strong`("On this page"),[...a,...n.headings.filter(d=>d.depth===2)].map(d=>i`a`({href:"#"+d.id},d.text)))))],t.route)}function Al(){return i`section#live-example`(i`h2`("Live example"),i`p`("A native button with shared size, variant, color, and contrast styling. Tab to see its focus-visible treatment."),i`div`(le(Ut(Ee({variant:"solid",color:"accent"},"Save"),Ee({variant:"soft",color:"cyan"},"Duplicate"),Ee({variant:"outline",color:"green"},"Publish"),Ee({variant:"ghost",color:"red"},"Delete"))),pe(`import { Button } from 'sinewy'

Button({
  size: '2',
  variant: 'solid',
  color: 'accent',
  highContrast: false
}, 'Save')`)))}var Dl=i(()=>{let e=i.live(!1);return()=>Ut(Bt({bind:e,variant:"soft"},e()?"Bold on":"Bold"),Bt({defaultPressed:!0,variant:"outline",color:"green"},"Pinned"),Bt({variant:"ghost",color:"crimson","aria-label":"Mute audio"},"\u266A"))});function Il(){return i`section#live-example`(i`h2`("Live example"),i`p`("Activate a toggle to see its persistent pressed state. The same control theme becomes neutral while off and colored while on."),i`div`(le(Dl()),pe(`import s from 'sin'
import { Toggle } from 'sinewy'

const bold = s.live(false)

Toggle({
  bind: bold,
  size: '2',
  variant: 'soft',
  color: 'accent'
}, 'Bold')`)))}function Pl(){return i`section#live-example`(i`h2`("Live example"),i`p`("Open the native modal to see top-layer focus containment, the themed backdrop, and semantic title and description relationships."),i`div`(le(J(J.Trigger({variant:"solid"},"Edit profile"),J.Content(J.Title("Edit profile"),J.Description("Change the public details shown on your account."),Fd(J.Close("Cancel"),J.Close({variant:"solid",color:"accent"},"Save changes"))))),pe(`import { Dialog } from 'sinewy'

Dialog(
  Dialog.Trigger('Edit profile'),
  Dialog.Content(
    Dialog.Title('Edit profile'),
    Dialog.Description('Change your public details.'),
    Dialog.Close('Cancel'),
    Dialog.Close({ variant: 'solid' }, 'Save changes')
  )
)`)))}function zl(){return i`section#live-example`(i`h2`("Live example"),i`p`("The alert specialization keeps Dialog behavior while announcing an urgent decision and initially focusing the safest choice."),i`div`(le($e($e.Trigger({variant:"outline",color:"red"},"Delete account"),$e.Content({color:"red"},$e.Title("Delete account?"),$e.Description("This action permanently removes the account and its saved data."),Fd($e.Close({autofocus:!0},"Cancel"),$e.Close({variant:"solid",color:"red"},"Delete"))))),pe(`import { AlertDialog } from 'sinewy'

AlertDialog(
  AlertDialog.Trigger('Delete account'),
  AlertDialog.Content(
    AlertDialog.Title('Delete account?'),
    AlertDialog.Description('This cannot be undone.'),
    AlertDialog.Close({ autofocus: true }, 'Cancel'),
    AlertDialog.Close({ variant: 'solid', color: 'red' }, 'Delete')
  )
)`)))}var El=i(()=>{let e=i.live(!0);return()=>Ut(qe(Nt({bind:e}),"Notifications"),qe(Nt({defaultChecked:!0,color:"green"}),"Auto-save"),qe(Nt({color:"crimson",highContrast:!0}),"Public profile"))});function $l(){return i`section#live-example`(i`h2`("Live example"),i`p`("Each themed track is still a native labelled checkbox, including keyboard, form, focus, and reset behavior."),i`div`(le(El()),pe(`import s from 'sin'
import { Switch } from 'sinewy'

const notifications = s.live(true)

s\`label\`(
  Switch({
    bind: notifications,
    color: 'accent'
  }),
  'Notifications'
)`)))}var Ol=i(()=>{let e=i.live("pear");return()=>oe({bind:e,name:"produce","aria-label":"Produce",color:"cyan"},oe.Group({label:"Fruit"},oe.Option({value:"apple"},"Apple"),oe.Option({value:"pear"},"Pear")),oe.Group({label:"Vegetables"},oe.Option({value:"carrot"},"Carrot")))});function ql(){return i`section#live-example`(i`h2`("Live example"),i`p`("For a consistently themed picker across supported browsers, try ",i`a`({href:"/components/custom-select"},"Custom Select"),". This native Select remains unchanged and is also exported as NativeSelect."),i`p`("Supporting browsers render the native picker with Sinewy\u2019s menu surface, grouped options, selection gutter, and theme colors. Browsers without customizable select support keep their platform-native picker."),i`div`(le(Ol()),pe(`import s from 'sin'
import { Select } from 'sinewy'

const produce = s.live('pear')

Select({ bind: produce, name: 'produce' },
  Select.Group({ label: 'Fruit' },
    Select.Option({ value: 'apple' }, 'Apple'),
    Select.Option({ value: 'pear' }, 'Pear')
  )
)`)))}function Rl(){return i`section#live-example`(i`h2`("Live example"),i`p`("Send a notification to the bottom corner. Hover or focus it to pause dismissal."),Ll())}var Ll=i(()=>{let e=null,t=0;return()=>i`div`(Ee({onclick:()=>e={id:++t}},"Show toast"),Mt.Viewport(e&&Mt({key:e.id,onopenchange:n=>{n||(e=null)}},i`span`("Query saved"),Mt.Close())))}),Ml=ye`
  width 100%
  height 320
  --min 100px
  --max calc(100% - 200px)
  --divider-width 2px
`,Bl=ye.Start`
  overflow auto
`,jl=ye`
  height 100%
  --min 60px
  --max calc(100% - 60px)
`;function Nl(){let e=t=>i`div padding 20`(t);return i`section`(i`h2#live-example`("Live example"),i`p`("Drag either divider, or focus it and use arrow keys. Enter minimizes and restores the pane."),Ml({primary:"start",defaultPositionInPixels:200,color:"indigo"},Bl(e("Navigation \u2014 fixed pixel width")),ye.Divider({"aria-label":"Navigation"}),ye.End(jl({orientation:"vertical",snap:"50%"},ye.Start(e("Editor \u2014 proportional height")),ye.Divider({"aria-label":"Editor"}),ye.End(e("Results"))))))}var Fl=we`
  width 140
`;function Vl(){return i`section#live-example`(i`h2`("Live example"),i`p`("Choose from a consistently styled list without a search field. Both pickers below share the same value; the native picker remains available when platform behavior is preferred."),le(Gl()),pe(`import s from 'sin'
import { CustomSelect } from 'sinewy'

const produce = s.live('pear')

CustomSelect({ bind: produce, name: 'produce', 'aria-label': 'Produce' },
  CustomSelect.Group({ label: 'Fruit' },
    CustomSelect.Option({ value: 'apple' }, 'Apple'),
    CustomSelect.Option({ value: 'pear' }, 'Pear')
  ),
  CustomSelect.Option({ value: 'carrot' }, 'Carrot')
)`))}var Gl=i(()=>{let e=i.live("pear"),t="Choose a value, then submit or reset.";return()=>i`div display grid; gap 24`(Vd(Wn(i`label`({for:"custom-produce"},"Custom picker"),we({id:"custom-produce",bind:e,defaultValue:"pear",color:"cyan"},pr(we)),i`p`("No search input. Type a letter to jump to an option.")),Wn(i`label`({for:"native-produce"},"Native picker"),oe({id:"native-produce",bind:e,color:"cyan"},pr(oe)),i`p`("The same selection, using the platform picker."))),i`div display flex; gap 12; flex-wrap wrap`(["1","2","3"].map(n=>Fl({size:n,defaultValue:"pear","aria-label":"Size "+n},pr(we)))),i`form display grid; gap 12`({onsubmit:n=>{n.preventDefault(),t="Submitted: "+new FormData(n.currentTarget).get("delivery")},onreset:()=>t="Reset: choose a delivery method."},i`label`({for:"delivery-method"},"Delivery method (required)"),we({id:"delivery-method",name:"delivery",required:!0,placeholder:"Choose delivery",color:"indigo"},we.Option({value:"standard"},"Standard delivery"),we.Option({value:"express"},"Express delivery"),we.Option({value:"collection",disabled:!0},"Collection \u2014 unavailable")),i`div display flex; gap 8`(Ee({type:"submit"},"Submit"),Ee({type:"reset",variant:"outline"},"Reset")),i`p`({role:"status"},t)))});function pr(e){return[e.Group({label:"Fruit"},e.Option({value:"apple"},"Apple"),e.Option({value:"pear"},"Pear"),e.Option({value:"orange",disabled:!0},"Orange \u2014 unavailable")),e.Group({label:"Vegetables"},e.Option({value:"carrot"},"Carrot"),e.Option({value:"broccoli"},"Broccoli"))]}var Hl=i(()=>{let e=i.live(["email"]);return()=>gt.Group({bind:e,name:"channels",color:"green"},i`legend`("Notifications"),qe(gt({value:"email"}),"Email"),qe(gt({value:"sms"}),"SMS"),qe(gt({value:"push"}),"Push"))});function Ul(){return i`section#live-example`(i`h2`("Live example"),i`p`("The fieldset binds its checked native values to one array while labels, form data, focus, and toggling remain HTML behavior."),i`div`(le(Hl()),pe(`import s from 'sin'
import { Checkbox } from 'sinewy'

const channels = s.live(['email'])

Checkbox.Group({ bind: channels, name: 'channels' },
  s\`legend\`('Notifications'),
  s\`label\`(Checkbox({ value: 'email' }), 'Email'),
  s\`label\`(Checkbox({ value: 'sms' }), 'SMS')
)`)))}var Kl=i(()=>{let e=i.live("free");return()=>bt.Group({bind:e,name:"plan",color:"purple"},i`legend`("Plan"),qe(bt({value:"free"}),"Free"),qe(bt({value:"pro"}),"Pro"),qe(bt({value:"team"}),"Team"))});function Wl(){return i`section#live-example`(i`h2`("Live example"),i`p`("The named native radio group shares one live string value and keeps fieldset, legend, label, form, and arrow-key semantics."),i`div`(le(Kl()),pe(`import s from 'sin'
import { Radio } from 'sinewy'

const plan = s.live('free')

Radio.Group({ bind: plan, name: 'plan' },
  s\`legend\`('Plan'),
  s\`label\`(Radio({ value: 'free' }), 'Free'),
  s\`label\`(Radio({ value: 'pro' }), 'Pro')
)`)))}function Yl(){return i`section#live-example`(i`h2`("Live example"),i`p`("Type to narrow the account list. The multiple field keeps selections as pills that can be reached with Backspace or arrow keys and removed with Backspace or Delete."),i`div`(le(Zl()),pe(`import s from 'sin'
import { Combobox } from 'sinewy/theme'

const account = s.live(null)

Combobox({ bind: account, color: 'indigo' },
  s\`label\`({ for: 'account' }, 'Account'),
  Combobox.Control(
    Combobox.Input({ id: 'account', placeholder: 'Find an account' })
  ),
  Combobox.Content(
    Combobox.Item({ value: 'assets:bank', textValue: 'Assets:Bank' }, 'Assets:Bank'),
    Combobox.Item({ value: 'expenses:office', textValue: 'Expenses:Office' }, 'Expenses:Office')
  )
)`)))}function _l(){return[i`section#live-example`(i`h2`("Live example"),i`p`("The themed facade keeps the headless part structure and remains open to normal Sin style extension."),i`div`(le(Xl()),pe(`import Dropdown from 'sinewy/theme'

Dropdown(
  Dropdown.Trigger('Open menu'),
  Dropdown.Content(
    Dropdown.Item('Edit'),
    Dropdown.Checkbox({ checked: true },
      Dropdown.Indicator('\u2713'),
      'Notifications'
    )
  )
)`))),i`section#theme-preview`(i`h2`("Theme preview"),i`p`("Size and color establish an inherited menu scope. Parts can make deliberate local overrides."),xl(Od(i`h3`("Sizes"),Ut(Un({label:"Size 1",size:"1",color:"indigo"}),Un({label:"Size 2",size:"2",color:"indigo"}),Un({label:"Size 3",size:"3",color:"indigo"}))),Od(i`h3`("Colors"),Ut(...["gray","indigo","cyan","green","amber","crimson","purple"].map(e=>Un({label:Ql(e),variant:"soft",color:e}))))))]}function Jl(){return i`section#live-example`(i`h2`("Live example"),i`p`("Right-click or press and hold the target, or focus it and press Shift+F10."),i`div`(le(V(Sl("Open a contextual menu here"),V.Content({variant:"soft",color:"indigo"},V.Item({shortcut:"\u2318 R"},"Rename"),V.Item({shortcut:"\u2318 D"},"Duplicate"),V.Separator(),V.Item({color:"red"},"Delete")))),pe(`import { ContextMenu } from 'sinewy/theme'

ContextMenu(
  ContextMenu.Trigger('Right-click here'),
  ContextMenu.Content({ variant: 'soft', color: 'indigo' },
    ContextMenu.Item({ shortcut: '\u2318 R' }, 'Rename'),
    ContextMenu.Item('Duplicate')
  )
)`)))}var Xl=i(()=>{let e=i.live(!0);return()=>B(B.Trigger({variant:"outline",color:"accent",size:"2"},"Open menu",B.TriggerIcon()),B.Content({align:"start",offset:7,variant:"soft",color:"indigo"},B.Label("Workspace"),B.Item({shortcut:"\u2318 E"},"Edit details"),B.Checkbox({bind:e},B.Indicator("\u2713"),"Notifications"),B.Separator(),B.Sub(B.SubTrigger("Share"),B.SubContent(B.Item("Copy link"),B.Item("Invite people")))))}),Zl=i(()=>{let e=i.live("assets:bank"),t=i.live(["assets:bank","expenses:office"]);return()=>Vd(Wn(i`label`({for:"single-account"},"Single account"),se({id:"single-account-picker",bind:e,color:"indigo"},se.Control(se.Input({id:"single-account",placeholder:"Find an account"})),se.Content(qd())),i`p`("The selected account is displayed as editable text.")),Wn(i`label`({for:"multiple-accounts"},"Multiple accounts"),se({id:"multiple-accounts-picker",multiple:!0,bind:t,color:"cyan"},se.Control(se.Pills(),se.Input({id:"multiple-accounts",placeholder:"Add an account"})),se.Content(qd())),i`p`("Backspace at the start of the input selects the last pill.")))});function qd(){return[["assets:bank","Assets:Bank"],["assets:vat","Assets:VAT receivable"],["expenses:office","Expenses:Office"],["expenses:software","Expenses:Software"],["income:consulting","Income:Consulting"]].map(([e,t])=>se.Item({value:e,textValue:t},t))}function Un({label:e,size:t="2",variant:n="solid",color:o,highContrast:r=!1,dark:a=!1}){return kl({data:{dark:a||null}},i`span`(e),B(B.Trigger({size:t,variant:n==="soft"?"soft":"outline",color:o,highContrast:r},"Open",B.TriggerIcon()),B.Content({size:t,variant:n,color:o,highContrast:r,align:"start",offset:6},B.Item({shortcut:"\u2318 E"},"Edit"),B.Checkbox({checked:!0},B.Indicator("\u2713"),"Enabled"),B.Item({color:"red"},"Delete"))))}function Ql(e){return e[0].toUpperCase()+e.slice(1)}function mr(e){return i`header
    display none
    align-items center
    justify-content space-between
    gap 12
    padding 14 20
    border-bottom 1px solid #dfddd6
    background #faf9f6

    @media (max-width: 780px) {
      display flex
    }
  `(Rd({href:"/"},Ld("S"),i`strong`("Sinewy")),sl(zd({href:"/",data:{active:e.has("/")||void 0}},"Overview"),Gn.map(t=>zd({href:"/components/"+t.slug,data:{active:e.has("/components/"+t.slug)||void 0}},t.title))))}function Gd({},[],{route:e,doc:t}){return t.title("Not found \u2014 Sinewy"),fr([mr(e),ur(Nd(Md("404"),i`h1`("Nothing here yet."),i`p`("This documentation is growing alongside the component system."),Bd({href:"/"},i`div`(i`h3`("Return to the overview"),i`p`("See current progress and available component pages.")),jd("\u2192"))))],e)}var Gh=i.mount(rl);export{Gh as default};
