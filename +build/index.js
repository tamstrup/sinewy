typeof globalThis>"u"&&(window.globalThis=window);var y=typeof window>"u"?{}:window;var ao=Symbol("stackTrace"),Ye=Object.freeze({}),co=Object.freeze([]),Qt=Promise.resolve(),C={}.hasOwnProperty,fe=new WeakSet;function so(e){return typeof e=="function"?e():e}function ut(e){return e&&String(e).replace(/\/+/g,"/").replace(/(.)\/\*?$/,"$1")}function _e(e){return e&&ut(e).replace("/?","?")}function ht(e){return e.replace(/(\B[A-Z])/g,"-$1").toLowerCase()}function W(e){return e&&T(e.observe)}function T(e){return typeof e=="function"}function lo(e){return e&&T(e.then)}function en(e){return e.charCodeAt(0)===111&&e.charCodeAt(1)===110}function ft(e){return typeof e=="boolean"||e==null}function tn(e){return e&&Array.isArray(e.raw)}function nn(e){return e.charCodeAt(0)===36?"--"+e.slice(1):e.charCodeAt(0)===45&&e.charCodeAt(1)===45?e:null}function on(e){return e==="dom"||e==="type"||e==="value"||e==="key"||e==="src"||e==="srcset"||e==="href"||e==="class"||e==="className"||e==="data"||e==="style"||e==="deferrable"||e==="is"||e==="handleEvent"}function rn(e){for(;e.parent&&!e.name;)e=e.parent;return e.name}function po(e){for(;e.parent&&!e.id;)e=e.parent;return e.id}function ti(e){let t=e.classes||"";for(;e.parent;)e=e.parent,t+=" "+e.classes||"";return t}function uo(e){return(Zt(e.attrs.class)+Zt(e.attrs.className)+ti(e.tag)).trim()}function gt(e){return Array.isArray(e)?e:[e]}function ge(){}function mt(e){return nn(e)||(e==="cssFloat"?"float":ht(e))}function Zt(e){return W(e)||T(e)?Zt(e()):e?typeof e=="object"?ni(e):e+" ":""}function ni(e){let t;for(let n in e)e[n]&&(t=t==null?n:[t,n].join(" "));return t||""}function bt(e,t,n){t?e.style.setProperty("min-width",t+"px"):e.style.removeProperty("min-width"),n?e.style.setProperty("min-height",n+"px"):e.style.removeProperty("min-height")}function Oe(e,[t,n,o,r]=[],{callbacks:d,depth:a}={}){if(e===document.documentElement)bt(e,o,r),window.scrollTo(t||0,n||0);else{if(a){let c=document.createElement("div");c.style="position:absolute;width:1px;height:1px;top:"+(r-1)+"px;left:"+(o-1)+"px",e.appendChild(c),fe.add(c),d.push(()=>(fe.delete(c),c.remove()))}e.scrollLeft=t,e.scrollTop=n}}function ho(e,t){return!t||!t.tag?e:!e||!e.tag?(e.tag=t.tag,e):(e.tag={id:t.tag.id||e.tag.id,name:t.tag.name||e.tag.name,classes:(e.tag.classes?e.tag.classes+" ":"")+t.tag.classes,args:t.tag.args,vars:t.tag.vars,parent:e.tag},e)}var V=class{constructor(t,n,o=null,r=0,d=Ye,a=co){this.nesting=r,this.component=n,this.inline=t,this.tag=o,this.attrs=d,this.key=d?d.key:void 0,this.dom=null,this.children=a}};["head","get","put","post","delete","patch"].forEach(e=>ze[e]=function(t,n={}){return n.method=e,ze(t,n)});ze.redraw=()=>{};var oi=typeof Uint8Array>"u"?[]:[Object.getPrototypeOf(Uint8Array)],ri="Blob ArrayBuffer DataView FormData URLSearchParams File".split(" ").map(e=>globalThis[e]).filter(e=>e).concat(oi);function ze(e,{url:t=new URL(e,y.location.origin),method:n="GET",responseType:o,json:r="application/json",query:d,body:a,user:c=t.username,pass:s=t.password,headers:l={},config:u,timeout:h=0,signal:p,...f}={}){let g=new y.XMLHttpRequest(f);p?.addEventListener("abort",()=>g.abort());let b=!1,k=new Promise((A,x)=>{let M,K;n=n.toUpperCase(),g.addEventListener("readystatechange",function(){if(g.readyState===g.DONE)try{g.headers=g.headers||di(g.getAllResponseHeaders()),g.status&&Object.defineProperty(g,"body",{enumerable:!0,value:M===r?g.response===void 0||g.response===""?void 0:JSON.parse(g.response):g.response}),g.status===304||g.status>=200&&g.status<300?A(b?g:g.body):x(ii(g))}catch(B){x(B)}}),g.addEventListener("error",x),g.addEventListener("abort",()=>x(new Error("ABORTED"))),g.addEventListener("timeout",()=>x(new Error("TIMEOUT"))),d&&(d=new URLSearchParams(d))&&d.size&&d.forEach((B,Q)=>t.searchParams.append(Q,B)),g.open(n,""+t,!0,c,s),g.timeout=h,o&&(g.responseType=o),Object.entries(l).forEach(([B,Q])=>{Q&&g.setRequestHeader(B,Q),B.toLowerCase()==="accept"&&(M=Q),B.toLowerCase()==="content-type"&&(K=Q)}),!M&&!o&&r&&g.setRequestHeader("Accept",M=r),!K&&a!==void 0&&!ri.some(B=>a instanceof B)&&r&&g.setRequestHeader("Content-Type",K=r),u&&u(g),g.send(K===r?JSON.stringify(a):a)}).catch(A=>{let x=Object.assign(new Error(A.message),{...A,url:t,status:g.status,headers:g.headers,body:g.body||g.response});throw Object.defineProperty(x,"xhr",{value:g}),x});return Object.defineProperties(k,{abort:{value:()=>g.abort(),enumerable:!0},xhr:{get:()=>(b=!0,k)}})}function ii(e){return new Error(e.status?e.status+(e.statusText?" "+e.statusText:""):"Unknown")}function di(e){let t={};return e.split(`
`).forEach(n=>{let o=n.indexOf(":"),r=n.substring(0,o).trim().toLowerCase(),d=n.substring(o+1).trim();r==="set-cookie"?t[r]?t[r].push(d):t[r]=[d]:t[r]=d}),t}function $e(e,...t){let n=new Set;return t.forEach(s=>T(s)&&n.add(s)),a.value=e,a.observe=o,a.valueOf=a.toString=a.toJSON=()=>e,a.detach=ge,a.reduce=c,a.set=s=>(...l)=>(a(T(s)?s(...l):s),a),a.get=s=>Object.assign(r.bind(null,s),{observe:l=>a.observe(()=>l(r(s)))}),a.if=(...s)=>Object.assign(d.bind(null,...s),{observe:l=>a.observe(()=>l(d(...s)))}),a;function o(s,l){let u=l?(...h)=>(n.delete(u),s(...h)):s;return n.add(u),()=>n.delete(u)}function r(s){return T(s)?s(a.value):a.value[s]}function d(s,l=!0,u=!1){return a.value===s?l:u}function a(s){if(!arguments.length)return a.value;let l=e;return a.value=e=s,n.forEach(u=>a.value!==l&&u(a.value,l,()=>n.delete(u))),a.value}function c(s,l){let u=1,h=$e(arguments.length>1?s(l,a.value,u++):a.value);return a.observe(p=>h(s(h.value,p,u++))),h}}$e.from=function(...e){let t=e.pop(),n=$e(t(...e.map(dn))),o=e.map(r=>r.observe(()=>n(t(...e.map(dn)))));return n.detach=()=>o.forEach(dn),n};function dn(e){return e()}var fo=!1,go={};function mo(e){return e.split(/(?=\/)/)}function ai(e,t){return e.reduce((n,o,r)=>(o[1]===":"&&(n[o.slice(2)]=decodeURIComponent(t[r].slice(1))),n),{})}function Je(e,t,n,o){let r=h.location=n.location,d=e(({key:p,route:f,...m},[g],b)=>(b.route=Je(e,p.replace(/[/*?]$/,""),n,f),f.key=p,()=>c(g,m,b)));return h.root=o?o.root:h,h.parent=o||h,h.query=n.query,h.toString=h,h.state=a,h.has=p=>{let f=s(r);if((p=p.replace(t,""))==="/")return f===t||f==="/"&&t==="";let m=_e(t+"/"+p);return f.indexOf(m)===0&&(f[m.length]===void 0||f[m.length]==="/")},Object.defineProperty(h,"path",{get(){let p=s(r),f=p.indexOf("/",t.length+1);return f===-1?p:p.slice(0,f)}}),h;function a(p){return p&&y.history.replaceState({...history.state,...p},"",r.pathname+r.search+r.hash),y.history?.state}function c(p,f,m){let g=T(p)?p(f,[],m):p;return lo(g)?e(()=>g)(f):g}function s(p,f=0){return decodeURIComponent(ut(e.route.prefix[0]==="#"?p.hash.slice(e.route.prefix.length+f):e.route.prefix[0]==="?"?p.search.slice(e.route.prefix.length+f):p.pathname.slice(e.route.prefix.length+f)))}async function l(p,{state:f,replace:m=!1,redraw:g=!0,scroll:b=!0}={}){if(p!==s(r)+r.search){if(e.is.server)return n.doc.status(302),n.doc.headers({Location:e.route.prefix+p});e.route.prefix[0]==="#"?y.location.hash=e.route.prefix+p:e.route.prefix[0]==="?"?y.location.search=e.route.prefix+p:y.history[m?"replaceState":"pushState"](f,null,e.route.prefix+p),go[p]=f,p.indexOf(r.search)>-1&&n.query(r.search),g&&await e.redraw(),b===!1||e.route.scroll===!1?e.route.scroll=void 0:Oe(document.documentElement)}}function u({state:p={}}={}){e.redraw().then(()=>Oe(document.documentElement,p?.sinscroll?.[""]))}function h(p,f={}){if(typeof p>"u")return t+"/";if(typeof p=="string")return l(_e(p[0]==="/"?p:"/"+p),f);fo||(fo=!0,e.route.prefix[0]==="#"?y.addEventListener("hashchange",u,{passive:!0}):T(y.history.pushState)&&y.addEventListener("popstate",u,{passive:!0}));let m=s(r,t.length),g=mo(m),{match:b,view:k}=ci(p,g),A=t+(b?b.map((x,M)=>x==="/*"?"*":x==="/?"?"?":g[M]).join(""):"?");return(k===void 0||b[0]==="/?")&&n.doc.status(404),h.params={...h.parent.params,...ai(b||[],g)},d({key:A,route:h,...h.params,...t+m===A&&go[t+m]||y.history.state||{},...f},k)}}function ci(e,t){let n=0,o,r;function d(a,c){if(a.charCodeAt(0)!==47&&(a="/"+a),a=mo(ut(a)),typeof c=="object"&&c!=null){for(let l in c)d(a+l,c[l]);return}let s=si(a,t);s>n&&(n=s,o=a,r=c)}for(let a in e)d(a,e[a]);return{match:o,view:r}}function si(e,t){return e.reduce((n,o,r)=>n+(o==="/?"?1:o===t[r]?7:o&&t[r]&&o.toLowerCase()===t[r].toLowerCase()?6:o[1]===":"&&t[r]&&t[r].length>1?5:o==="/"&&!t[r]?4:o.indexOf("/...")===0?3:o==="/*"?2:-1/0),0)}function an(e,t){let n=URLSearchParams,o=["append","delete","set","sort"],r=t.search,d=new n(r),a,c=e.live();c.replace=u=>(d=new n(u),l()),c.clear=()=>c.replace("");for(let u in n.prototype)c[u]=(...h)=>(a=s()[u](...h),o.includes(u)&&l(),a);return c;function s(){return r===t.search?d:(r=t.search,d=new n(r))}function l(){let u=t.pathname+(d+""?"?"+(d+"").replace(/=$/g,""):"")+t.hash;location.href.endsWith(u)||(y.history.replaceState(y.history.state,null,u),c(t.search),e.redraw())}}var bo={ai:"align-items",as:"align-self",ac:"align-content",ar:"aspect-ratio",b:"bottom",bg:"background",bf:"backdrop-filter",bc:"background-color",br:"border-radius",bs:"box-shadow",bi:"background-image",c:"color",d:"display",fg:"flex-grow",fb:"flex-basis",f:"float",fd:"flex-direction",ff:"font-family",fs:"font-size",fw:"font-weight",g:"gap",ga:"grid-area",gg:"grid-gap",gta:"grid-template-areas",gtc:"grid-template-columns",gtr:"grid-template-rows",h:"height",jc:"justify-content",js:"justify-self",l:"left",lh:"line-height",ls:"letter-spacing",m:"margin",mb:"margin-bottom",ml:"margin-left",mr:"margin-right",mt:"margin-top",o:"opacity",p:"padding",pb:"padding-bottom",pl:"padding-left",pr:"padding-right",pt:"padding-top",pi:"place-items",pe:"pointer-events",r:"right",t:"top",ta:"text-align",td:"text-decoration",tt:"text-transform",ts:"text-shadow",us:"user-select",va:"vertical-align",ws:"white-space",w:"width",zi:"z-index",z:"zoom"};var re,wt="s",et=y.document,li=/^(ms|moz|webkit)[-A-Z]/i,Me=et.createElement("div"),kt=new Map,yo={},cn={},sn=new Map,ee={$:"calc"},wn=e=>re||(re=e||et.querySelector("style.sin")||et.createElement("style"));function To(e){if(sn.has(e))return sn.get(e);let t=Object.assign(document.createElement("link"),{rel:"stylesheet",href:e});document.head.appendChild(t);let n=new Promise((o,r)=>{t.onload=()=>o(t),t.onerror=r});return sn.set(e,n),n}var Do=(e,t)=>typeof t=="function"?kt.set(e.charCodeAt(0),t):Object.entries(e).forEach(([n,o])=>kt.set(n.charCodeAt(0),o)),yt={flex:"",border:"px","line-height":"","box-shadow":"px","border-top":"px","border-left":"px","border-right":"px","border-bottom":"px","text-shadow":"px","@media":"px","@container":"px"},un=Array.from(Object.keys(C.call(Me.style,"width")?Me.style:Object.getPrototypeOf(Me.style)).reduce((e,t)=>(e.add(t.match(li)?"-"+ht(t):ht(t)),e),new Set(["float"]))),vo=un.reduce((e,t)=>{let n=t.match(/-(ms|o|webkit|moz)-/g);if(n){let o=t.replace(/-(ms|o|webkit|moz)-/,"");un.indexOf(o)===-1&&(o==="flexDirection"&&(e.flex="-"+n[1].toLowerCase()+"-flex"),e[o]=t)}return e},{}),ln=new Map,wo=new Set,xo=y.CSS&&y.CSS.supports("color","var(--support-test)"),pi=["perspective","blur","drop-shadow","inset","polygon","minmax"],ui=["@media","@container","@supports","@document","@layer","@starting-style"],Ao=e=>ui.some(t=>e.indexOf(t)===0),hi=(e,t)=>e==="translate"||t.indexOf("translate")===0||pi.indexOf(t)>-1,fi=(e,t)=>e==="rotate"||t.indexOf("rotate")===0||t.indexOf("skew")===0,hn=e=>e!==32&&e!==9&&e!==10&&e!==13&&e!==59,Io=e=>e>=48&&e<=57||e===46,gi=e=>e>=65&&e<=90||e>=97&&e<=122||e===45||e===95,mi=e=>e===37||e>=65&&e<=90||e>=97&&e<=122,bi=e=>e===34||e===39,ko=e=>e===32||e===58||e===9,yi=e=>e===59||e===10||e===125,Po=e=>e===38||e===58||e===64||e===91,vi=e=>e===59||e===125,Ct=e=>e[e.length-1],J=[],ie=-1,S=-1,oe=-1,Xe=-1,St=-1,Re=-1,v=-1,Eo=-1,be=-1,ae=-1,fn=-1,Z=-1,_=-1,Y="",q="",de="&&",ke="",Ze="",Co="",xt="",z="",gn="",mn="",Qe="",qe="",w="",$="",vt="",F=null,So=!0,je=!1,bn=!1,pn=!0,yn=!1,X=0,Le=!1,me=[];function xn(e){return e.charCodeAt(0)===36?"--"+e.slice(1):bo[e]||e}function Oo(e,t,n){return(e?";":"")+(je?t:wi(t))+":"+n+(Eo===33?"important":"")}function wi(e){return yo[e]||(yo[e]=$i(xn(e)))}function xi(e){return Le?e:e.replace(/,\s*[:[&]?/g,t=>Po(t.charCodeAt(t.length-1))?",&"+Ct(t):",& ")}function Tt(e,t){if(So&&(re&&et.head&&et.head.appendChild(re),So=!1),re&&re.sheet)try{re.sheet.insertRule(e,t??re.sheet.cssRules.length)}catch(n){console.error("Insert rule error:",n,e)}}function kn([e,...t],n,o=0,r=!1){if(re||wn(),ln.has(e))return{...ln.get(e),parent:n,args:t};Le=r;let d={};me=[],de="&&",mn=Qe=qe=z=$=q="",J.length=X=0,be=S=fn=St=_=Z=-1,F=Le?{}:null,yn=!1,bn=!1,pn=!0,w=e[0];for(let c=0;c<e.length;c++)if(F?zo(0,c===e.length-1):ki(e,c),w=e[c+1],c<t.length){let s=e[c].slice(S);if(!r&&xo&&S>=0)Y=wt+Math.abs(X).toString(31),d[vt="--"+Y+c]={property:q,fns:me.slice(-1),unit:vn(q,Ct(me)),index:c,transform:Z!==-1&&Ei},$+=s+"var("+vt+")"+(Z===-1?"":(Z=-1,")")),S=0;else if(e[c+1].trim().charCodeAt(0)===123)Y=wt+Math.abs(X).toString(31),d[vt=Y+c]={index:c},J.push("["+vt+"]");else{let l=s+so(t[c])+vn(q,Ct(me));$+=l;for(let u=0;u<l.length;u++)X=Math.imul(31,X)+l.charCodeAt(u)|0;pn=!1,S=S>=0?0:xo?-1:0}}yn&&(Le?Object.entries(F).forEach(([c,s])=>{Tt(c.replace(/&\s+/g,"").replace(/{&$/,"")+"{"+s+"}")}):(Y=wt+Math.abs(X).toString(31),qe+=(qe?" ":"")+Y,Co=o&&"&".repeat(o+1),wo.has(Y)||Object.entries(F).forEach(([c,s])=>{Co&&(c=c.replace("&","&".repeat(o+1))),Tt(c.replace(/&/g,"."+Y)+"{"+s+"}")})));let a={name:mn,classes:qe,id:Qe,args:t,vars:d,parent:n};return pn?ln.set(e,a):wo.add(Y),a}function ki(e,t){for(let n=0;n<=w.length;n++)if(v=w.charCodeAt(n),n<w.length&&(X=Math.imul(31,X)+v|0),bn){if(hn(v)){F={},zo(n++,t===e.length-1);break}}else!hn(v)||n===w.length?(qe=(oe!==-1?w.slice(oe+1,n).replace(/\./g," "):"")+qe,Qe===""&&(Qe=Xe!==-1?w.slice(Xe,oe===-1?n:oe):""),mn=w.slice(0,Qe?Xe-1:oe!==-1?oe:n),Xe=oe=-1,bn=!0):v===35?Xe=n+1:oe===-1&&v===46&&(oe=n)}function Ci(e){return ee[e]||e}function zo(e,t){for(let n=e;n<=w.length;n++)Eo=v,v=w.charCodeAt(n),n<w.length&&(X=Math.imul(31,X)+v|0),Re===-1&&S!==-1&&(je?vi(v):yi(v)||t&&n===w.length)&&Si(n),Re!==-1?Re===v&&w.charCodeAt(n-1)!==92&&(Re=-1):Re===-1&&bi(v)?(Re=v,S===-1&&(S=n)):v===123?Ti(n):v===125||t&&n===w.length?Di():n!==w.length&&ie===-1&&hn(v)?(ie=n,St=v):!q&&ie>=0&&ko(v)?(q=w.slice(ie,n),je=v===58):S===-1&&q&&!ko(v)?(S=be=n,Io(v)?ae=n:v===36&&(_=n)):S!==-1?Ro(n):(v===9||v===32)&&(be=n+1)}function Si(e){$o(e),q==="@import"?Tt(q+" "+w.slice(S,e)+";",0):z+=Oo(z,q,$+w.slice(S,e)),yn=!0,ie=S=-1,je=!1,q=$=""}function $o(e){Z!==-1?Ii(e):_!==-1?Ai(e):ae!==-1&&Oi(e)}function Ti(e){q==="animation"?(z&&(F[de]=z),Ze=$+w.slice(S,e).trim(),gn=$="",z=""):Ze?(xt=w.slice(ie,e).trim(),z=""):(z&&(F[de]=z),ke=(St===64?Ci(q)+(je?":":" ")+$+(S===-1?"":w.slice(S,e)):w.slice(ie,e)).trim(),ke.indexOf(",")!==-1&&(ke=xi(ke)),$=q="",J.push((Po(St)?"":" ")+ke+(ke==="@font-face"&&++fn?"/*"+Array(fn).join(" ")+"*/":"")),de=Mo(J),z=F[de]||""),ie=S=-1,je=!1,q=""}function Di(){if(xt)gn+=xt+"{"+z+"}",xt=z="";else if(Ze)z=F[de]||"",Y=wt+Math.abs(X).toString(31),Tt("@keyframes "+Y+"{"+gn+"}"),z+=Oo(z,"animation",Ze+" "+Y),Ze="";else{let e=J.map(n=>n.charCodeAt(0)===64&&Ao(n)?"}":"").join(""),t=J.pop();J.length&&J[0].indexOf("@keyframes")===0?F[J[0]]=(F[J[0]]||"")+ke+"{"+z+"}":z&&(F[de]=z.trim()+e),t in ee&&(F[ee[t]+" &&"]=z.trim()),de=Mo(J),z=F[de]||""}ie=S=-1,q=""}function Ro(e){if(Io(v)?ae===-1&&(ae=e):v===40?_=-1:$o(e),v===40){let t=w.slice(Math.max(be,S),e);t in ee&&(t=ee[t]),$+=w.slice(S,e-t.length)+t+"(",me.push(t),S=be=e+1}else v===41?me.pop():v===9||v===32?be=e+1:v===36?_=e:_!==-1&&v===47&&(Z=e)}function Ai(e){w.charCodeAt(e)===47?Z=e:gi(v)||($=$+w.slice(S,_)+"var(--"+w.slice(_+1,e)+")",S=e,_=-1)}function Ii(e){$=$+w.slice(S,_)+"color-mix(in oklab, var(--"+w.slice(_+1,Z)+"), transparent "+(w.length===Z+1?"":Pi(w.slice(Z+1,e),w.charCodeAt(e))+")"),S=e+1,_=ae=-1}function Pi(e,t){return Z=-1,100-(e*(t===37?1:100)).toFixed(0)+"%"}function Ei(e){return(100-(typeof e=="string"&&e.charCodeAt(e.length-1)===37?e.slice(0,-1):e*100)).toFixed(0)+"%"}function Oi(e){mi(v)?kt.has(v)&&($=$+w.slice(S,ae)+kt.get(v)(w.slice(ae,e)),S=e+1):w.charCodeAt(be)!==35&&($=$+w.slice(S,e)+vn(q,Ct(me)),S=e),ae=-1}function vn(e,t=""){if(e=xn(e),e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return"";let n=e+","+t;return C.call(cn,n)?cn[n]:cn[n]=t&&hi(e,t)?"px":fi(e,t)?"deg":t?"":zi(e)}function qo(e,{property:t,fns:n,unit:o,transform:r}){if(T(e)&&(e=y.isServerSin&&!W(e)?"6iacvt":e()),r&&(e=r(e)),!e&&e!==0)return"";if(typeof e=="number")return e+o;if(typeof e!="string"&&(e=""+e),e.charCodeAt(0)===36)return"var(--"+e.slice(1)+")";w=e,$="",S=0,ae=be=-1,q=t,me=n;for(let d=0;d<=e.length;d++)v=e.charCodeAt(d),Ro(d);return $+e.slice(S)}function Mo(e){if(e.length===0)return"&&";let t=0;return e.reduce((n,o,r,d)=>{let a=o.charCodeAt(0);return a===64&&(o.indexOf("@font-face")===0&&r++,Ao(o))?(t++,o+"{"+(r===d.length-1?"&&":"")+n):a===58&&o.startsWith(":root")?o+" "+n+(Le||r-t?"":a===32?"&":"&&"):n+(Le||r-t?"":a===32?"&":"&&")+o},"")}function zi(e){if(e=xn(e),nn(e)||C.call(yt,e))return yt[e];try{return Me.style[e]="1px",Me.style.setProperty(e,"1px"),yt[e]=Me.style[e].slice(-3)==="1px"?"px":""}catch{return yt[e]=""}}function $i(e){if(un.indexOf(e)===-1){if(vo[e])return vo[e];e.indexOf("--")!==0&&y.sindevhmr&&y.console.error(e,"css property not found")}return e}var D=y.document,Lo={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},In=new Map,Pn=Symbol("deferrable"),nt=Symbol("observable"),te=Symbol("component"),Pt=Symbol("cycle"),En=Symbol("event"),On=Symbol("$arrayEnd"),zn=Symbol("$arrayStart"),Cn=Symbol("class"),Sn=Symbol("live"),jo=Symbol("size"),ot=Symbol("life"),rt=Symbol("attr"),Bo=Symbol("attrs"),Se=Symbol("source"),No=Symbol("children"),Be=Symbol("keyIndex"),ne=Symbol("keys"),Uo=Symbol("key"),De=Symbol("s"),ye=[],It,Et,Ho;function i(...e){let t=typeof e[0];return t==="string"?$n(Object.assign([e[0]],{raw:[]}))(...e.slice(1)):C.call(e[0],De)?e[0](...e.slice(1)):Vo($n,tn(e[0])?Ko(e):t==="function"?new V(i.redrawing,e):new V(i.redrawing,[e[1],e[0]]))}function $n(...e){return tn(e[0])?Vo($n,Ko(e,this)):Gi(e,this)}function Ko(e,t){let n=t?t.nesting+1:0;return new V(t&&t.inline,t&&t.component,kn(e,t&&t.tag,n),n)}function Vo(e,t){let n=e.bind(t);return n[De]=!0,n}i.redrawing=!1;i.sleep=(e,...t)=>new Promise(n=>setTimeout(n,e,...t));i.with=(e,t)=>e===void 0?e:t(e);i.isAttrs=Yo;i.is={server:i.isServer=y.isServerSin||!1};i.containers=[];i.redraw=Ot;i.redraw.force=Wi;i.mount=Ui;i.css=(...e)=>kn(e,null,0,!0);i.css.alias=Wo;i.css.reset=hd;i.css.unit=Do;i.css.load=To;i.style=wn;i.animate=Bi;i.animate.transform=ji;i.http=ze;i.live=$e;i.event=qi;i.on=Li;i.trust=Mi;i.route=Je(i,"",{location:y.location,query:an(i,y.location)});i.route.prefix="";i.window=y;i.scroll=!0;i.View=V;i.error=i(e=>(console.error(e),()=>i`pre;all initial;d block;c white;bc #ff0033;p 8 12;br 6;overflow auto;fs 12`(i`code`("Unexpected Error: "+(e.message||e)))));i.jsx=i((e,t)=>t.slice(1));i.container=i((e,t,n)=>{return n.container={},()=>i``({...e,dom:[o].concat(e.dom)},i` display contents`(t));function o(r){r.style.containerType="inline-size";let d=r.firstElementChild;return d.setAttribute("data-sin-container",""),requestAnimationFrame(()=>{d.style.setProperty("transition-behavior","allow-discrete"),d.style.setProperty("transition",i.containers.map(c=>"--sin-container-"+c+" 0.001ms step-start").join(", ")),d.addEventListener("transitionrun",a)}),a(),()=>d.removeEventListener("transitionrun",a);function a(c){let s=getComputedStyle(d);for(let l of i.containers)n.container[l]=s.getPropertyValue("--sin-container-"+l)==="1";n.redraw()}}});var Ri=i(({strings:e,values:t=[]})=>{let n=D.createElement("div"),o=Array.isArray(e.raw)?[...e.raw]:Array.isArray(e)?[...e]:[e.trim()];o[0]=o[0].trimStart(),o[o.length-1]=o[o.length-1].trimEnd(),n.innerHTML=String.raw({raw:o},...t);let r=[...n.childNodes,D.createComment("trust")];return()=>r});function Wo(e,t){if(typeof e=="object")return Object.entries(e).forEach(([o,r])=>Wo(o,r));if(Array.isArray(t)?(ee["@"+e]=t[0],ee[t[0]]=t[1]):(ee["@"+e]=t,ee[e]=t),i.is.server)return;let n=(Array.isArray(t)?t[0]:t).split(" ")[0];if(n==="@media"){let o=null;Object.defineProperty(i.is,e,{get(){if(o!==null)return o;let r=y.matchMedia(t.slice(t.indexOf("(")));return r.addEventListener("change",d=>(o=d.matches,i.redraw())),o=r.matches}})}else n==="@container"&&(i.css([`@property --sin-container-${e}{syntax:'<number>';inherits:false;initial-value:0;}`]),i.css([`${t}{[data-sin-container]{--sin-container-${e}:1}}`]),i.containers.push(e))}function qi(e){let t=new Set(e?[e]:[]);return n.observe=r,Object.defineProperty(n,"signal",{get:o}),n;function n(...d){return[...t].map(a=>a(...d))}function o(){let d=new AbortController;return r(()=>d.abort(),!0),d.signal}function r(d,a){let c=a?(...s)=>(t.delete(c),d(...s)):d;return t.add(c),()=>t.delete(c)}}function Mi(e,...t){return e&&e.raw||(e=Array.isArray(e)?e.map(n=>ft(n)?"":n).join(""):ft(e)?"":""+e),Ri({key:""+e,strings:e,values:t})}function Li(e,t,n,o){return typeof o=="function"&&([n,o]=[o,n]),(...r)=>{let d=a=>Bn(n,a,...r);return e.addEventListener(t,d,o),()=>e.removeEventListener(t,d,o)}}function ji(e){return function(...t){let[n]=t;T(e)&&(e=e(...t));let o=e.getBoundingClientRect(),r=n.getBoundingClientRect();return n.style.setProperty("transition","none"),n.style.setProperty("--transform",`translate(${o.left-r.left}px, ${o.top-r.top}px) scale(${o.width/r.width}, ${o.height/r.height})`),requestAnimationFrame(()=>n.style.removeProperty("transition")),i.animate(n)}}function Bi(e){return e.setAttribute("animate","entry"),requestAnimationFrame(()=>(e.offsetWidth,e.removeAttribute("animate"))),t=>t&&(e.setAttribute("animate","exit"),Promise.allSettled(e.getAnimations().map(n=>n instanceof y.CSSTransition&&n.finished)))}function Ni(e,t,n){e.addEventListener("click",o=>{if(!o.defaultPrevented&&(o.button===0||o.which===0||o.which===1)&&(!o.currentTarget.target||o.currentTarget.target==="_self")&&!Fi(o.currentTarget)&&!o.ctrlKey&&!o.metaKey&&!o.shiftKey&&!o.altKey){o.preventDefault();let r=e[rt].state;n(e.getAttribute("href"),e[rt])}})}function Fi(e){return i.route.prefix[0]!=="#"&&e.getAttribute("href")?.includes("#")&&e.origin===y.location.origin&&e.pathname===y.location.pathname&&e.search===y.location.search}function Gi(e,t){let n=Yo(e[0]);return new V(t.inline,t.component,t.tag,t?t.nesting+1:0,n?e.shift():void 0,e.length===1&&Array.isArray(e[0])?e[0]:e)}function Yo(e){return e!==null&&typeof e=="object"&&!(e instanceof V)&&!Array.isArray(e)&&!(e instanceof Date)&&!(e instanceof y.Node)&&!T(e.then)&&!(e instanceof String)&&!(e instanceof Number)}function Ui(e,t,n={},o={}){if(T(t)){if(!e)throw new Error("The dom element you tried to mount to does not exist.")}else if(o=n||{},n=t||{},t=e,e=D.body,!e)throw new Error("document.body does not exist.");if(!(t instanceof V)&&!C.call(t,De)&&(t=i(t)),C.call(o,"location")||(o.location=y.location),C.call(o,"error")||(o.error=i.error),i.is.server)return{view:t,attrs:n,context:o,unmount:ge};e[ao]=new Error().stack,i.scroll&&Hi(o),Vi(e.firstChild,o,n);let r={head:o.hydrating?ge:_o,lang:i.live(D.documentElement.lang,a=>D.documentElement.lang=a),title:i.live(D.title,a=>D.title=a),status:ge,doctype:ge,headers:ge};o.doc=r,o.route=Je(i,"",{doc:o.doc,location:o.location,query:i.route.query});let d={view:t,attrs:n,context:o};return In.set(e,d),Xo(d,e),{view:t,attrs:n,context:o,unmount:()=>In.delete(e)}}function Hi(e){y.history.scrollRestoration="manual";let t=""in(history.state?.sinscroll||Ye);t&&Oe(D.documentElement,history.state.sinscroll[""]);let n=e[Pt]={depth:0,callbacks:[],done:a=>n.depth!==-1&&(n.depth+=a)||(n.depth=0,d())},o;setTimeout(()=>{D.addEventListener("scroll",r,{passive:!0,capture:!0}),D.addEventListener("resize",r,{passive:!0,capture:!0}),t&&n.depth===0&&(n.depth=-1,bt(D.documentElement,0,0))},200);function r(a){clearTimeout(o),o=setTimeout(Ki,100,a)}function d(){n.callbacks.forEach(a=>a()),bt(D.documentElement,0,0)}}function Ki(e){let t=history.state?.sinscroll||{};e.type==="scroll"?Object.keys(t).forEach(o=>n(o?D.getElementById(o):D)):e.target===D?n(D):e.target.id&&n(e.target);function n(o){o&&(t[o===D?"":o.id]=[o.scrollLeft,o.scrollTop,o.scrollWidth,o.scrollHeight],i.route.state({sinscroll:t}))}}function _o(e){if(Array.isArray(e))return e.forEach(_o);let t=D.createElement(rn(e.tag));for(let n in e.attrs)t.setAttribute(n,e.attrs[n]);e.children.length&&(t.innerHTML=e.children[0]),D.head.appendChild(t)}function Vi(e,t,n){if(e){if(e.nodeType===8&&e.data==="h")e.remove(),t.hydrating=!0;else if(e.nodeType===1&&e.tagName==="SCRIPT"&&e.hasAttribute("h")){t.hydrating=!0;let a=JSON.parse(e.textContent);Object.assign(t,a.context),Object.assign(n,a.attrs)}}if(!t.hydrating)return;let o,r=[],d=D.createTreeWalker(D.body,NodeFilter.SHOW_COMMENT);for(;o=d.nextNode();)o.data===","&&r.push(o);r.forEach(a=>a.remove())}function Ot(){return It||(Ho=y.requestAnimationFrame(Jo),It=i.is.server?Qt:new Promise(e=>Et=e)),It}function Wi(){return new Promise(e=>{let t=Et;Et=t?()=>(e(),t()):e,y.cancelAnimationFrame(Ho),Jo()})}function Jo(){It=null,In.forEach(Xo),Et()}function Xo(e,t){Ln();try{e.doms=it(t,gt(e.view(e.attrs)),e.context,e.doms&&Ne(e.doms.dom),e.doms&&e.doms.last)}catch(n){e.attrs.error=n,e.doms=it(t,gt(e.context.error(n,e.attrs,[],e.context)),e.context,e.doms&&Ne(e.doms.dom),e.doms&&e.doms.last)}finally{jn()}}function Ln(){i.redrawing=!0}function jn(){ye.forEach(e=>e()),ye=[],i.redrawing=!1}function it(e,t,n,o,r=e.lastChild){let d=t[0]&&t[0].key!==void 0&&new Array(t.length),a=R(o,e.firstChild),c=a&&C.call(a,ne),s=R(r,null);d&&(d.rev=new Map)&&c?Yi(e,n,a[ne],t,d,s,a):Zo(e,n,t,d,a,s);let l=R(o,e.firstChild);return d&&(l[ne]=d),se(l,s&&Ne(s)||e.lastChild)}function R(e,t){let n=e?e.nextSibling:t;for(;fe.has(n);)n=n.nextSibling;return n}function Ne(e,t){let n=e?e.previousSibling:t;for(;fe.has(n);)n=n.previousSibling;return n}function tt(e,t,n,o){e[o]={dom:t,key:n},t[ne]=e,t[Be]=o,e.rev.set(n,o)}function Zo(e,t,n,o,r,d=null){let a=0,c,s;for(;a<n.length;)(r===null||!fe.has(r))&&(s=n[a],c=r!==d?ce(r,s,t,e):ce(null,s,t),r===d&&e.insertBefore(c.dom,d),o&&tt(o,c.first,s.key,a),r=c.last,a++),r!==null&&(r=R(r));for(;r&&r!==d;)r=Te(r,e)}function Yi(e,t,n,o,r,d,a){let c=n.rev,s=new Set;for(let m of o){if(m&&m.key===void 0)return Zo(e,t,o,r,a,d);m&&s.add(m.key)}let l=n.length-1,u=o.length-1,h=n[l],p=o[u],f=-1;e:for(;;){if(p==null){p=o[--u];continue}for(;h&&!s.has(h.key);)Te(h.dom,e),c.delete(h.key),h=n[--l];for(;h&&h.key===p.key;){if(d=ce(h.dom,p,t,e).first,tt(r,d,p.key,u),c.delete(p.key),u===0)break e;if(l===0){p=o[--u];break}h=n[--l],p=o[--u]}if(c.has(p.key)){if(f=c.get(p.key),f>u)f=ce(n[f].dom,p,t,e),Tn(e,f,d),d=f.first,tt(r,d,p.key,u);else if(f!==u)f=ce(n[f].dom,p,t,e),Tn(e,f,d),d=f.first,tt(r,d,p.key,u);else{h=n[--l];continue}if(c.delete(p.key),u===0)break;p=o[--u]}else{if(f=ce(null,p,t),Tn(e,f,d),d=f.first,tt(r,d,p.key,u),u===0)break;p=o[--u]}}c.forEach(m=>Te(n[m].dom,e))}function Tn(e,{first:t,last:n},o){let r=t,d;do d=r,r=R(d);while(e.insertBefore(d,o)!==n)}function ce(e,t,n,o,r,d,a){return W(t)?Ji(e,t,n,o,r,d):T(t)?ce(e,t(),n,o,r,d,a):t instanceof V?Fo(e,t,n,o,r,d):t instanceof Promise?Fo(e,i(()=>t)(),n,o,r,d):Array.isArray(t)?er(e,t,n,o,d,a):t instanceof Node?_i(e,t,n):tr(e,t,o,d,void 0,a)}function _i(e,t,n){return e&&n.hydrating?se(e):se(t)}function Fo(e,t,n,o,r,d){return t.component?nr(e,t,n,o,r,d):Zi(e,t,n,o,d)}function Ji(e,t,n,o){if(e&&C.call(e,Sn)&&e[Sn].view===t)return d(t());let r=d(t());return dt(e,t,d),r;function d(a){let c=i.redrawing,s=ye;ye=[],Ln();let l=ce(e,a,n,o||e&&e.parentNode);return jn(),i.redrawing=c,ye=s,e!==l.first&&dt(l.first,t,d),e=l.first,l.first[Sn]={view:t,doms:l},l}}function se(e,t=e,n=t){return{dom:e,first:t,last:n}}function Xi(e){if(!e||e.nodeType!==8||e.data.charCodeAt(0)!==91)return;let t=parseInt(e.data.slice(1)),n=e,o;for(;t&&(n=R(n));)n.nodeType===8?(o=n.data.charCodeAt(0),t+=o===91?parseInt(n.data.slice(1))-1:o===97?1:-1):t--;return zt(e,n),n}function zt(e,t){(t||e)[zn]=e,e[On]=t}function Qo(e){return e&&C.call(e,On)?e[On]:Xi(e)}function er(e,t,n,o,r,d){r&&e&&o&&(e=er(e,[],n,o).first);let a=Qo(e)||e,c=tr(e,"["+t.length,o,!1,8,d);if(e!==c.dom&&(a=c.last),o){let s=R(a,null);it(o,t,n,c.first,a);let l=Ne(s,o.lastChild);return a!==l&&zt(c.first,l),se(c.dom,c.first,l)}return o=new DocumentFragment,o.appendChild(c.dom),it(o,t,n,c.first,a),zt(c.first,o.lastChild),se(o,c.first,o.lastChild)}function tr(e,t,n,o,r=ft(t)?8:3,d=!1){let a=o||!e||e.nodeType!==r;return e&&C.call(e,te)&&e[te]!==d&&Rt(e),a&&dr(e,e=r===8?D.createComment(t):D.createTextNode(t),n),!a&&e.data!==""+t&&(e.data=t),se(e)}function Zi(e,t,n,o,r){let d=n.NS,a=rn(t.tag),c=r===!0||e===null||ed(e,t,n,a);(t.attrs.xmlns||Lo[a])&&(n.NS=t.attrs.xmlns||Lo[a]),c&&dr(e,e=td(t,n,a),o),a==="foreignObject"&&(n.NS="http://www.w3.org/1999/xhtml");let s=t.children&&t.children.length;return rd(e,t,n,a),s?it(e,t.children,n):e[jo]&&Qi(e.firstChild,e),e[jo]=s,n.NS=d,C.call(t,"key")&&(e[Uo]=t.key),se(e)}function Qi(e,t){for(;e;)e=Te(e,t)}function ed(e,t,n,o){return e[Uo]!==t.key&&!n.hydrating||(n.NS?e.nodeName!==o:e.nodeName.toLowerCase()!==(o.toLowerCase()||"div"))}function td(e,t,n){let o=e.attrs.is;return t.NS&&t.NS!=="http://www.w3.org/1999/xhtml"?o?D.createElementNS(t.NS,n,{is:o}):D.createElementNS(t.NS,n):o?D.createElement(n||"div",{is:o}):D.createElement(n||"div")}var Rn=class{constructor(t,n,o,r,d,a,c,s){this.init=t,this.key=void 0,this.view=n,this.error=o,this.caught=void 0,this.loading=r,this.context=d,this.hydrating=a,this.onremoves=void 0,this.promise=void 0,this.stateful=void 0,this.next=void 0,this.ignore=!1,this.recreate=!1,this.attrs=qt(c),this.children=qt(s)}},qn=class{constructor(){this.xs=[],this.i=0,this.top=0,this.bottom=0,this.dom=null}changed(t,n){if(this.i>=this.xs.length)return!0;let o=this.xs[this.i],r=o.key!==t.key&&!n.hydrating||o.init&&o.init!==t.component[0];return r&&o.onremoves&&o.onremoves.forEach(d=>d()),r}add(t,n,o){let r=this.i,[d,a]=t.component;o&&this.xs[this.i]&&(t.attrs=this.xs[this.i].attrs,t.children=this.xs[this.i].children);let c=new Rn(t.inline?!1:d,d,a&&a.error||n.error,a&&a.loading||n.loading,a&&a.context||n.context,n.hydrating,t.attrs,t.children),s=(f,m,g)=>{if(this.xs.indexOf(c)===-1)return;Ln(),f instanceof Event&&(f.redraw=!1);let b=this.dom.first[ne],k=this.dom.first[Be];this.i=this.bottom=r,nr(this.dom.first,t,n,this.dom.first.parentNode,this,m,g,!0),C.call(this.dom.first,ne)||(this.dom.first[ne]=b,this.dom.first[Be]=k),b&&(b[k].dom=this.dom.first),this.i=this.bottom=0,jn()},l=i.event(f=>i.redrawing?requestAnimationFrame(l):s(f,!1,!1)),u=i.event(f=>{c.onremoves&&(c.onremoves.forEach(m=>m()),c.onremoves=void 0),s(f,!0)}),h=i.event(f=>{c.onremoves&&(c.onremoves.forEach(m=>m()),c.onremoves=void 0),s(f,!0,!0),c=this.xs[r]});c.context=Object.create(c.context||n,{hydrating:{value:n.hydrating,writable:!0},onremove:{value:f=>{Dt(c,f)}},ignore:{value:f=>{c.ignore=f}},refresh:{value:h},redraw:{value:l},reload:{value:u}}),c.attrs[Se]=t.attrs,c.children[Se]=t.children;let p=or(!0,c,t,c.attrs,c.children);return W(t.attrs.reload)&&Dt(c,t.attrs.reload.observe(u)),W(t.attrs.redraw)&&Dt(c,t.attrs.redraw.observe(l)),W(t.attrs.refresh)&&Dt(c,t.attrs.refresh.observe(h)),c.promise=p&&T(p.then)&&p,c.stateful=c.promise||T(p)&&!p[De],c.view=c.promise?o?this.xs[this.i].view:c.loading:p,o||this.cut(),this.top=this.i,this.xs[this.i++]=c}next(t){let n=this.i<this.xs.length&&this.xs[this.top=this.i++];return n.attrs[Se]=t.attrs,n.children[Se]=t.children,n}pop(){return--this.i!==this.bottom?!1:(this.cut(this.top+1),!0)}cut(t=this.i){for(let n=t;n<this.xs.length;n++)this.xs[n].onremoves&&this.xs[n].onremoves.forEach(o=>o());this.xs.length=t}};function Dt(e,t){e.onremoves?e.onremoves.add(t):e.onremoves=new Set([t])}function nd(e){let t="/"+e.data,n=R(e);for(;n&&(n.nodeType!==8||n.data!==t);)n=R(n);let o=se(R(e),R(e),Ne(n));if(C.call(n,zn)&&zt(n[zn],Ne(n)),C.call(e,te)&&(o.first[te]=e[te]),C.call(e,ne)){let r=e[ne],d=e[Be];o.first[ne]=r,o.first[Be]=d,r[e[Be]].dom=o.first}return e.remove(),n.remove(),o}function od(e){let t="/"+e.data,n=R(e);for(;n&&(n.nodeType!==8||n.data!==t);)n=R(n);return se(e,e,n)}function nr(e,t,n,o,r=e&&e[te]||new qn,d=r.changed(t,n),a=!1,c=!1){let s=d?r.add(t,n,a):r.next(t);if(!d&&s.ignore&&!c)return r.pop(),r.dom;t.key!==void 0&&(d||n.hydrating)&&(s.key=t.key);let l=s.promise&&e&&e.nodeType===8&&e.data.charCodeAt(0)===97;if(l)s.next=od(e);else{let h=or(d,s,a?s.view:t,s.attrs,s.children);h&&C.call(h,De)&&(h=h(t.attrs,t.children,s.context)),s.next=ce(e,!s.caught&&!s.promise&&h instanceof V||a?ho(h,t):h,s.context,o,r,(d||s.recreate)&&!s.hydrating&&!a?!0:void 0,r),s.hydrating&&(s.hydrating=s.context.hydrating=!1),s.recreate&&(s.recreate=!1)}if(d&&s.promise){let h=r.i-1;n[Pt].done(1),s.promise.then(p=>s.view=p&&C.call(p,"default")?p.default:p).catch(p=>{s.caught=p,s.view=rr(s,t,p)}).then(()=>C.call(s.next.first,te)&&r.xs[h]===s&&(l&&(r.dom=nd(e)),n.hydrating=!1,s.recreate=!a,s.promise=!1,s.context.redraw(),n[Pt].done(-1)))}let u=e!==s.next.first;return r.pop()&&(u||d)&&(r.dom=s.next,s.next.first[te]=r),s.next}function or(e,t,n,o,r){try{return t.stateful||e?T(t.view)&&!t.view[De]?t.view(o,r,t.context):t.view:n.component[0](o,r,t.context)}catch(d){return rr(t,n,d)}}function rr(e,t,n){return C.call(e.error,De)?e.error().component[0](n,t.attrs,t.children,e.context):e.error(n,t.attrs,t.children,e.context)}function rd(e,t,n,o){let r=t.tag,d,a=e[rt]||n.hydrating&&id(e)||void 0,c=!a;if(c&&C.call(t.attrs,"id")===!1){let l=po(t.tag);l&&(e.id=l)}Dn(e,t),c&&dt(e,t.attrs.class,()=>Dn(e,t)),c&&dt(e,t.attrs.className,()=>Dn(e,t)),t.attrs.type!=null&&$t(e,"type",t.attrs.type);for(let l in t.attrs)on(l)?l==="deferrable"&&(e[Pn]=t.attrs[l]):(!a||a[l]!==t.attrs[l])&&Ce(e,t.attrs,l,a&&a[l],t.attrs[l],c,n);if(C.call(t.attrs,"value"))if(!a&&o==="input"&&e.value!==""+t.attrs.value){let l,u;e===D.activeElement&&(l=e.selectionStart,u=e.selectionEnd),Ce(e,t.attrs,"value",e.value,t.attrs.value,c,n),e===D.activeElement&&(e.selectionStart!==l||e.selectionEnd!==u)&&e.setSelectionRange(l,u)}else(!a||a.value!==t.attrs.value)&&Ce(e,t.attrs,"value",a&&a.value,t.attrs.value,c,n);if(o==="option"&&!c&&C.call(t.attrs,"selected")&&e.selected!==t.attrs.selected&&Ce(e,t.attrs,"selected",e.selected,t.attrs.selected,c,n),C.call(t.attrs,"srcset")&&a?.srcset!==t.attrs.srcset&&Ce(e,t.attrs,"srcset",a?.srcset,t.attrs.srcset,c,n),C.call(t.attrs,"src")&&a?.src!==t.attrs.src&&Ce(e,t.attrs,"src",a?.src,t.attrs.src,c,n),C.call(t.attrs,"href")&&(n.hydrating||!a||a.href!==t.attrs.href)){d=t.attrs.href;let l=!String(d).match(/^([a-z]+:|\/\/)/)&&!t.attrs.target&&!t.attrs.download;l&&(d=_e(t.attrs.href)),Ce(e,t.attrs,"href",a&&a.href,d,c,n),d&&l&&(t.attrs.href=i.route.prefix+d,Ni(e,t.attrs,n.route))}if(a)for(let l in a)C.call(t.attrs,l)===!1&&(en(l)?ir(e,l):on(l)?l==="deferrable"&&(e[Pn]=!1):e.removeAttribute(l));ad(e,t.attrs.data,a&&a.data);let s=dd(e,t.attrs.style,a&&a.style);if(r)for(Go(e,r.vars,r.args,c||n.hydrating,s);r=r.parent;)Go(e,r.vars,r.args,c||n.hydrating,s);t.attrs.dom&&(c||n.hydrating?cd(e,e[Bo]=qt(t.attrs),e[No]=qt(t.children),n,t.attrs.dom):(e[Bo][Se]=t.attrs,e[No][Se]=t.children)),e[rt]=t.attrs,c&&e.id&&e.id in(history.state?.sinscroll||Ye)&&ye.push(()=>Oe(e,history.state?.sinscroll?.[e.id],n[Pt]))}function id(e){if(!e||!e.hasAttributes())return;let t={};for(let n of e.attributes)t[n.name]=n.value||!0;return t}function dd(e,t,n){if(t==null)return t!==n&&(e.style.cssText="",!0);if(typeof t!="object")return t!==n&&(e.style.cssText=t,!0);if(n==null||typeof n!="object"){e.style.cssText="";for(let o in t){let r=t[o];r!=null&&e.style.setProperty(mt(o),r+"")}return!0}for(let o in t){let r=t[o];r!=null&&(!n||(r=r+"")!=n[o]+"")&&e.style.setProperty(mt(o),r)}for(let o in n)n[o]!=null&&t[o]==null&&e.style.removeProperty(mt(o));return!0}function ad(e,t,n){for(let o in t){let r=t[o];r!=null&&(!n||(r=r+"")!=n[o]+"")&&(e.dataset[o]=r)}for(let o in n)n[o]!=null&&t[o]==null&&delete e.dataset[o]}function dt(e,t,n){if(!W(t))return;let o=C.call(e,nt),r=o?e[nt]:new Set;o||(e[nt]=r),r.add(t.observe(n))}function Dn(e,t){let n=uo(t),o=C.call(e,Cn)&&e[Cn]||"";if(n!==o){e[Cn]=n;for(let r of o&&o.split(" "))r&&e.classList.remove(r);for(let r of n&&n.split(" "))r&&e.classList.add(r)}}function Go(e,t,n,o,r){for(let d in t){let a=t[d],c=n[a.index];Mn(e,d,c,a,o,r)}}function Mn(e,t,n,o,r,d,a){if(W(n)){r&&n.observe(c=>An(e,t,c,o)),(r||d)&&Mn(e,t,n(),o,r,r);return}if(T(n))return Qt.then(()=>Mn(e,t,n(e),o,r,d,a));An(e,t,n,o),a&&ye.push(()=>An(e,t,n,o))}function An(e,t,n,o){C.call(o,"property")?e.style.setProperty(t,qo(n,o)):n?e.setAttribute(t,""):e.removeAttribute(t)}function cd(e,t,n,o,r){ye.push(()=>{gt(r).forEach(async d=>{let a=T(d)&&d(e,t,n,o);a&&T(a.then)&&(a=await a,Ot()),T(a)&&(C.call(e,ot)?e[ot].push(a):e[ot]=[a])},[])})}function Ce(e,t,n,o,r,d,a){if(o===r)return;let c=en(n);c&&typeof o==typeof r||(c?r?ld(e,t,n,a):ir(e,n):($t(e,n,r),d&&dt(e,r,s=>$t(e,n,s))))}function $t(e,t,n){if(n==null&&(n=""),T(n))return $t(e,t,n());sd(e,t)?e[t]=n:!n&&n!==0?e.removeAttribute(t):e.setAttribute(t,n===!0?"":n)}function sd(e,t){return!(e instanceof SVGElement)&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="width"&&t!=="height"&&t in e}function ir(e,t){e.removeEventListener(t.slice(2),e[En])}function ld(e,t,n,o){e.addEventListener(n.slice(2),e[En]||(e[En]=pd(e,t,o)))}function pd(e,...t){return{handleEvent:n=>Bn(e[rt]["on"+n.type],n,e,...t)}}function Bn(e,t,...n){if(Array.isArray(e))return e.forEach(r=>Bn(r,t,...n));let o=T(e)?e.call(t.currentTarget,t,...n):T(e.handleEvent)&&e.handleEvent(t,...n);if(t.redraw===!1){delete t.redraw;return}!W(o)&&!W(e)&&Ot(),o&&T(o.then)&&o.then(Ot)}function dr(e,t,n){if(n)return e&&(n.insertBefore(t,e),Te(e,n)),t}function ud(e,t,n,o,r){let d=Qo(e);if(!d||e===d)return R(e);let a=R(d);if(e=R(e),!e)return a;do e=Te(e,t,n,o,r);while(e&&e!==a);return a}function At(e,t){Rt(t),e.removeChild(t)}function Rt(e){C.call(e,te)&&e[te].cut(),C.call(e,nt)&&e[nt].forEach(t=>t())}function Te(e,t,n=!0,o=[],r=!1){let d=e.nextSibling;if(fe.has(e))return d;if(e.nodeType===8)if(e.data.charCodeAt(0)===97){if(d=R(e),At(t,e),!d)return d;e=d,d=R(e)}else e.data.charCodeAt(0)===91&&(d=ud(e,t,n,o,r));if(e.nodeType!==1)return n?At(t,e):Rt(e),d;if(C.call(e,ot))for(let c of e[ot])try{let s=c(r||n);(r||n)&&s&&T(s.then)&&o.push(s)}catch(s){console.error(s)}!r&&(r=e[Pn]||!1);let a=e.firstChild;for(;a;)Te(a,e,!1,o,r),a=R(a);return n?o.length===0?At(t,e):(fe.add(e),Promise.all(o.map(c=>c.catch(console.error))).then(()=>At(t,e))):Rt(e),d}function hd(e=[],...t){return i.css`
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
  `,i.css(e,...t)}function qt(e){return new Proxy(e,{get:(t,n)=>e[n],set:(t,n,o)=>n===Se&&e!==o?e=o:!0})}var ve=Symbol("sinewy-menu");var ur=Symbol("dropdown-indicator"),hr=Symbol("dropdown-radio-group"),ar=Symbol("sinewy-ids"),fr="--sinewy-dropdown-fit-block",gr="--sinewy-dropdown-fit-inline",fd=['[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]'].join(",");i.css([`
  @position-try ${fr} {
    align-self: stretch;
    height: stretch;
  }

  @position-try ${gr} {
    justify-self: stretch;
    width: stretch;
  }
`]);var U=i(({id:e,defaultOpen:t=!1},[],n)=>{let o=e||kr(n),r=Nt(t,n),d={name:"Dropdown",prefix:"dropdown",id:o,triggerId:o+"-trigger",contentId:o+"-content",anchorName:Cr(o),trigger:void 0,content:void 0,open:!1,renderOpen:t,openState:r,openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!0,dir:"ltr",openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,pointerGrace:void 0,onbeforeopenchange:void 0,onopenchange:void 0},a=Object.create(n);return a[ve]=d,d.root=d,n.onremove(()=>{clearTimeout(d.searchTimer),cancelAnimationFrame(d.reconcileFrame)}),({loop:c=!0,dir:s="ltr",open:l,bind:u,onbeforeopenchange:h,onopenchange:p},f,m)=>(d.loop=c,d.dir=s,d.controlledOpen=l,d.openBind=u,d.onbeforeopenchange=h,d.onopenchange=p,Ft(r,u,m),d.renderOpen=Fe(d),jt(d),i({context:a},()=>f))});U.Trigger=i(({as:e,disabled:t=!1,dom:n,onclick:o,onkeydown:r,...d},a,c)=>{let s=le(c,"trigger");return Sr(e,"button",{...d,id:s.triggerId,type:e?d.type:d.type||"button",disabled:t,popovertarget:s.contentId,popovertargetaction:"toggle","aria-haspopup":"menu","aria-controls":s.contentId,"aria-expanded":String(s.renderOpen),"aria-disabled":String(t),style:{"anchor-name":s.anchorName,...d.style},data:{...d.data,disabled:t?"":null,state:s.renderOpen?"open":"closed"},dom:Vn([l=>Fn(s,"trigger",l),...Ht(n)]),onclick:(l,u,h,p)=>{if(t){l.preventDefault();return}let f="popoverTargetElement"in u;if(G(o,l,u,h,p),l.defaultPrevented||f){f&&!o&&(l.redraw=!1);return}l.preventDefault(),s.content.matches(":popover-open")?we(s):s.content.showPopover({source:u})},onkeydown:(l,u,h,p)=>{if(t){l.preventDefault();return}G(r,l,u,h,p),!(l.defaultPrevented||!["Enter"," ","ArrowDown","ArrowUp"].includes(l.key))&&(l.preventDefault(),s.openFocus=l.key==="ArrowUp"?"last":"first",s.content.matches(":popover-open")?Bt(s,s.openFocus):s.content.showPopover())}},a)});U.Content=i(({},[],e)=>{let t=le(e,"content");return(n,o,r)=>mr(t,n,o,r)});U.Item=i(({},[],e)=>{let t=le(e,"item");return(n,o,r)=>Lt(t,n,o,r)});U.Checkbox=i(({defaultChecked:e=!1},[],t)=>{let n=le(t,"checkbox"),o=Nt(e,t),r=i.live(sr(e));return({checked:d,defaultChecked:a,bind:c,oncheckedchange:s,...l},u,h)=>{Ft(o,c,h);let p=sr(Hn(o,c,d));r(p);let f=wr(h,r);return Lt(n,{...l,role:"menuitemcheckbox","aria-checked":p==="indeterminate"?"mixed":String(p),data:{...l.data,state:Kn(p)},onactivate:m=>{let g=p==="indeterminate"||!p;vr(o,c,d,g,h),s&&s(g,m)}},i({context:f},()=>u),h)}});U.RadioGroup=i(({defaultValue:e},[],t)=>{le(t,"radioGroup");let n=Nt(e,t),o={},r=Object.create(t);return r[hr]=o,({value:d,defaultValue:a,bind:c,onvaluechange:s,ariaLabel:l,...u},h,p)=>(Ft(n,c,p),Object.assign(o,{local:n,bind:c,controlled:d,onvaluechange:s,context:p}),i`div`({...u,role:"group","aria-label":u["aria-label"]||l},i({context:r},()=>h)))});U.Radio=i(({},[],e)=>{let t=le(e,"radio"),n=e[hr],o=i.live(!1);if(!n)throw new Error(t.name+".Radio must be used inside "+t.name+".RadioGroup");return({value:r,...d},a,c)=>{let l=Hn(n.local,n.bind,n.controlled)===r;o(l);let u=wr(c,o);return Lt(t,{...d,role:"menuitemradio","aria-checked":String(l),data:{...d.data,state:Kn(l)},onactivate:h=>{l||(vr(n.local,n.bind,n.controlled,r,n.context),n.onvaluechange&&n.onvaluechange(r,h))}},i({context:u},()=>a),c)}});U.Sub=i(({id:e,defaultOpen:t=!1},[],n)=>{let o=le(n,"sub"),r=e||kr(n,o.prefix),d=Nt(t,n),a={name:o.name,prefix:o.prefix,id:r,triggerId:r+"-trigger",contentId:r+"-content",anchorName:Cr(r),trigger:void 0,content:void 0,open:!1,renderOpen:t,openState:d,openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!0,dir:o.dir,openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,openTimer:void 0,closeTimer:void 0,pointerGrace:void 0,openDelay:100,closeDelay:300,onbeforeopenchange:void 0,onopenchange:void 0,parent:o,root:o.root},c=Object.create(n);return c[ve]=a,n.onremove(()=>{clearTimeout(a.searchTimer),clearTimeout(a.openTimer),clearTimeout(a.closeTimer),cancelAnimationFrame(a.reconcileFrame)}),({loop:s=!0,dir:l=o.dir,open:u,bind:h,onbeforeopenchange:p,onopenchange:f,openDelay:m=100,closeDelay:g=300},b,k)=>(a.loop=s,a.dir=l,a.openDelay=m,a.closeDelay=g,a.controlledOpen=u,a.openBind=h,a.onbeforeopenchange=p,a.onopenchange=f,Ft(d,h,k),a.renderOpen=Fe(a),jt(a),i({context:c},()=>b))});U.SubTrigger=i(({as:e,disabled:t=!1,dom:n,onclick:o,onkeydown:r,onpointermove:d,onpointerleave:a,...c},s,l)=>{let u=le(l,"subtrigger");return Lt(u.parent,{...c,as:e,disabled:t,id:u.triggerId,style:{"anchor-name":u.anchorName,...c.style},dom:Vn([h=>Fn(u,"trigger",h),...Ht(n)]),popovertarget:u.contentId,popovertargetaction:"toggle","aria-haspopup":"menu","aria-controls":u.contentId,"aria-expanded":String(u.renderOpen),data:{...c.data,state:u.renderOpen?"open":"closed"},onclick:(h,p,f,m)=>{lr(u);let g="popoverTargetElement"in p;if(G(o,h,p,f,m),h.defaultPrevented||t||g){g&&!o&&(h.redraw=!1);return}h.preventDefault(),u.content.matches(":popover-open")?we(u):u.content.showPopover({source:p})},onkeydown:(h,p,f,m)=>{lr(u),G(r,h,p,f,m),!(h.defaultPrevented||t||h.key!==Sd(u))&&(h.preventDefault(),u.openFocus="first",u.content.matches(":popover-open")?Bt(u,"first"):u.content.showPopover())},onpointermove:(h,p,f,m)=>{G(d,h,p,f,m),!(h.defaultPrevented||t||u.open||u.openTimer)&&(clearTimeout(u.closeTimer),u.openTimer=setTimeout(()=>{u.openTimer=void 0,u.content.matches(":popover-open")||(u.openFocus="none",u.content.showPopover({source:p}))},u.openDelay))},onpointerleave:(h,p,f,m)=>{G(a,h,p,f,m),h.defaultPrevented||(vd(u,h),xr(u))},closeOnSelect:!1,invokeSelect:!1},s,l)});U.SubContent=i(({},[],e)=>{let t=le(e,"subcontent");if(!t.parent)throw new Error(t.name+".SubContent must be used inside "+t.name+".Sub");return({onpointerenter:n,onpointerleave:o,...r},d,a)=>mr(t,{...r,onpointerenter:(c,s,l,u)=>{clearTimeout(t.closeTimer),t.closeTimer=void 0,Ut(t.parent,t),G(n,c,s,l,u)},onpointerleave:(c,s,l,u)=>{G(o,c,s,l,u),c.defaultPrevented||xr(t)}},d,a)});U.Indicator=i(({},[],e)=>{let t=e[ve],n=e[ur];if(!n)throw new Error((t?t.name:"Dropdown")+".Indicator must be used inside a Checkbox or Radio");let o=n.selection.observe(e.redraw);return e.onremove(o),({forceMount:r=!1,...d},a)=>{let c=n.selection();return r||c!==!1?i`span`({...d,"aria-hidden":d["aria-hidden"]==null?"true":d["aria-hidden"],data:{...d.data,state:Kn(c)}},a):null}});function Lt(e,{as:t,disabled:n=!1,dom:o,onclick:r,onfocus:d,onpointermove:a,onselect:c,onactivate:s,closeOnSelect:l=!0,invokeSelect:u=!0,role:h="menuitem",textValue:p,...f},m,g){return Sr(t,"button",{...f,type:t?f.type:f.type||"button",role:h,tabIndex:-1,"aria-disabled":String(n),data:{...f.data,disabled:n?"":null,textValue:p||null},dom:o,onclick:(b,k,A,x)=>{if(n){b.preventDefault();return}G(r,b,k,A,x),!b.defaultPrevented&&(u&&c&&c(b,k),s&&s(b,k),l&&!b.defaultPrevented&&we(e.root))},onfocus:(b,k,A,x)=>{G(d,b,k,A,x),b.defaultPrevented||br(e,k)},onpointermove:(b,k,A,x)=>{G(a,b,k,A,x),n||b.defaultPrevented||wd(e,b)||Mt(e,k)}},m)}U.Group=i(({ariaLabel:e,...t},n)=>i`div`({...t,role:"group","aria-label":t["aria-label"]||e},n));U.Label=i((e,t)=>i`div`(e,t));U.Separator=i((e,t)=>i`div`({...e,role:"separator"},t));var I=U;function gd(e,t){Fn(e,"content",t),jt(e)}function Fn(e,t,n){import.meta.dev&&e[t]&&e[t]!==n&&e[t].isConnected&&console.warn(e.name+"."+yr(t)+" should only be rendered once per "+e.name+" state scope"),e[t]=n}function mr(e,{dom:t,onbeforetoggle:n,ontoggle:o,onkeydown:r,side:d=e.parent?"right":"bottom",align:a="start",offset:c=0,alignOffset:s=0,avoidCollisions:l=!0,collisionStrategy:u="preferred",loop:h=e.loop,...p},f,m){return i`div
    position fixed
    inset auto
    margin 0
  `({...p,id:e.contentId,popover:"auto",role:"menu",dir:p.dir||e.dir,style:{"position-anchor":e.anchorName,...kd(d,a,c,s,l,u,e.dir),...p.style},"aria-labelledby":p["aria-labelledby"]||e.triggerId,data:{...p.data,state:e.renderOpen?"open":"closed",side:d,align:a},dom:Vn([g=>gd(e,g),...Ht(t)]),onbeforetoggle:e.onbeforeopenchange||n?(g,b,k,A)=>{let x=g.newState==="open";e.onbeforeopenchange&&e.onbeforeopenchange(x,g),G(n,g,b,k,A)}:void 0,ontoggle:(g,b,k,A)=>{let x=g.newState==="open",M=e.reconcileTo===x;if(M&&(e.reconcileTo=void 0),e.open=x,e.renderOpen=Fe(e),e.trigger&&(e.trigger.ariaExpanded=String(x)),e.trigger&&(e.trigger.dataset.state=x?"open":"closed"),b.dataset.state=x?"open":"closed",G(o,g,b,k,A),M||(Gt(e.openBind)?e.openBind(x):e.controlledOpen===void 0&&(e.openState.value=x),e.onopenchange&&e.onopenchange(x,g),e.renderOpen=Fe(e),jt(e)),x)cr(e),e.openFocus!=="none"&&Bt(e,e.openFocus),e.openFocus="first";else{e.parent&&Ut(e.parent,e),cr(e),bd(e);let K=e.restoreFocus;e.restoreFocus=!0,requestAnimationFrame(()=>{K&&!e.open&&(b.contains(document.activeElement)||document.activeElement===document.body)&&e.trigger&&e.trigger.focus()})}},onkeydown:(g,b,k,A)=>{if(G(r,g,b,k,A),!g.defaultPrevented){if(e.parent&&g.key===Td(e)){g.preventDefault(),g.stopPropagation(),we(e);return}if(e.parent&&g.key==="Escape"){g.preventDefault(),g.stopPropagation(),we(e);return}md(e,g,h)}}},f)}function Fe(e){return!!Hn(e.openState,e.openBind,e.controlledOpen)}function jt(e){if(!e.content)return;let t=Fe(e),n=e.content.matches(":popover-open");t!==n&&(cancelAnimationFrame(e.reconcileFrame),e.reconcileFrame=requestAnimationFrame(()=>{if(!e.content||!e.content.isConnected)return;let o=Fe(e),r=e.content.matches(":popover-open");o!==r&&(e.reconcileTo=o,o?e.content.showPopover():e.content.hidePopover())}))}function md(e,t,n){let o=Gn(e),r=o.indexOf(document.activeElement);if(t.key==="Tab"){e.root.restoreFocus=!1,we(e.root,!1);return}if(t.key==="Escape"){t.preventDefault(),we(e);return}if(t.key==="Enter"||t.key===" "){if(r===-1)return;t.preventDefault(),o[r].click();return}if(t.key==="ArrowDown"||t.key==="ArrowUp"){if(t.preventDefault(),!o.length)return;let l=t.key==="ArrowDown"?1:-1,u=r===-1?l===1?0:o.length-1:r+l;n?u=(u+o.length)%o.length:u=Math.max(0,Math.min(o.length-1,u)),Mt(e,o[u]);return}if(t.key==="Home"||t.key==="End"){t.preventDefault(),Bt(e,t.key==="Home"?"first":"last");return}if(t.key.length!==1||t.key===" "||t.metaKey||t.ctrlKey||t.altKey)return;t.preventDefault(),clearTimeout(e.searchTimer),e.search+=t.key.toLocaleLowerCase(),e.searchTimer=setTimeout(()=>e.search="",500);let a=Array.from(e.search).every(l=>l===e.search[0])?e.search[0]:e.search,s=o.slice(r+1).concat(o.slice(0,r+1)).find(l=>yd(l).startsWith(a));s&&Mt(e,s)}function we(e,t=!0){e.restoreFocus=t,e.parent&&Ut(e.parent,e),e.content.matches(":popover-open")&&e.content.hidePopover()}function Gn(e){return Un(e).filter(t=>t.getAttribute("aria-disabled")!=="true")}function Un(e){return e.content?Array.from(e.content.querySelectorAll(fd)).filter(t=>t.closest('[role="menu"]')===e.content):[]}function Bt(e,t){let n=Gn(e);Mt(e,t==="last"?n.at(-1):n[0])}function Mt(e,t){t&&(Gn(e).forEach(n=>n.tabIndex=n===t?0:-1),br(e,t),t.focus({preventScroll:!0}))}function br(e,t){Un(e).forEach(n=>{n.toggleAttribute("data-highlighted",n===t)}),e.activeItem=t}function bd(e){Un(e).forEach(t=>t.removeAttribute("data-highlighted")),e.activeItem=void 0}function cr(e){clearTimeout(e.searchTimer),e.search=""}function yd(e){return(e.dataset.textValue||e.textContent).trim().toLocaleLowerCase()}function yr(e){return{trigger:"Trigger",content:"Content",item:"Item",checkbox:"Checkbox",radioGroup:"RadioGroup",radio:"Radio",indicator:"Indicator",group:"Group",label:"Label",separator:"Separator",sub:"Sub",subtrigger:"SubTrigger",subcontent:"SubContent"}[e]||e}function le(e,t){let n=e[ve];if(!n)throw new Error(yr(t)+" must be used inside a menu root");return n}function Nt(e,t){let n={value:e,binding:void 0,unobserve:void 0};return t.onremove(()=>n.unobserve&&n.unobserve()),n}function Ft(e,t,n){e.binding!==t&&(e.unobserve&&e.unobserve(),e.binding=t,e.unobserve=Gt(t)?t.observe(n.redraw):void 0)}function Hn(e,t,n){return Gt(t)?t():n===void 0?e.value:n}function vr(e,t,n,o,r){Gt(t)?t(o):n===void 0&&(e.value=o,r.redraw())}function wr(e,t){let n=Object.create(e);return n[ur]={selection:t},n}function sr(e){return e==="indeterminate"?e:!!e}function Kn(e){return e==="indeterminate"?e:e?"checked":"unchecked"}function Gt(e){return typeof e=="function"&&typeof e.observe=="function"}function xr(e){clearTimeout(e.openTimer),clearTimeout(e.closeTimer),e.openTimer=void 0,e.closeTimer=setTimeout(()=>{e.closeTimer=void 0,e.content.matches(":popover-open")&&we(e)},e.closeDelay)}function lr(e){clearTimeout(e.openTimer),clearTimeout(e.closeTimer),e.openTimer=e.closeTimer=void 0,Ut(e.parent,e)}function vd(e,t){if(!e.parent||!e.content||!e.content.matches(":popover-open"))return;let n=e.content.getBoundingClientRect(),o={x:t.clientX,y:t.clientY},r=5,a=[{distance:Math.abs(o.x-n.left),points:[{x:n.left,y:n.top-r},{x:n.left,y:n.bottom+r}]},{distance:Math.abs(o.x-n.right),points:[{x:n.right,y:n.top-r},{x:n.right,y:n.bottom+r}]},{distance:Math.abs(o.y-n.top),points:[{x:n.left-r,y:n.top},{x:n.right+r,y:n.top}]},{distance:Math.abs(o.y-n.bottom),points:[{x:n.left-r,y:n.bottom},{x:n.right+r,y:n.bottom}]}].sort((c,s)=>c.distance-s.distance)[0];e.parent.pointerGrace={owner:e,triangle:[o,...a.points]}}function wd(e,t){let n=e.pointerGrace;if(!n)return!1;if(!n.owner.content||!n.owner.content.matches(":popover-open"))return e.pointerGrace=void 0,!1;let o=xd({x:t.clientX,y:t.clientY},...n.triangle);return o||(e.pointerGrace=void 0),o}function Ut(e,t){e&&(!t||e.pointerGrace&&e.pointerGrace.owner===t)&&(e.pointerGrace=void 0)}function xd(e,t,n,o){let r=Nn(e,t,n),d=Nn(e,n,o),a=Nn(e,o,t),c=r<0||d<0||a<0,s=r>0||d>0||a>0;return!(c&&s)}function Nn(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function kd(e,t,n,o,r,d,a){let c=e==="top"||e==="bottom",s={top:"block-start",right:"inline-end",bottom:"block-end",left:"inline-start"}[e]||"block-end",l=t==="center"?"":" span-"+(c?"inline-":"block-")+(t==="end"?"start":"end"),u={top:"margin-block-end",right:"margin-inline-start",bottom:"margin-block-start",left:"margin-inline-end"}[e]||"margin-block-start",h=c?"margin-inline-start":"margin-block-start",p=c?fr:gr,f=["flip-block","flip-inline","flip-block flip-inline",p,p+" flip-block",p+" flip-inline",p+" flip-block flip-inline"].join(", ");return{"position-area":s+l,"position-try-fallbacks":r?f:"none","position-try-order":r&&d==="most-space"?c?"most-block-size":"most-inline-size":"normal",[u]:pr(n),[h]:pr(o),"--sinewy-trigger-width":"anchor-size(width)","--sinewy-trigger-height":"anchor-size(height)","--sinewy-transform-origin":Cd(e,t,a)}}function Cd(e,t,n){let d=t==="center"?"center":t==="end"?n==="rtl"?"left":"right":n==="rtl"?"right":"left",a=t==="center"?"center":t==="end"?"bottom":"top";return e==="top"?d+" bottom":e==="bottom"?d+" top":e==="left"?"right "+a:"left "+a}function pr(e){return typeof e=="number"?e+"px":e}function Sd(e){return e.dir==="rtl"?"ArrowLeft":"ArrowRight"}function Td(e){return e.dir==="rtl"?"ArrowRight":"ArrowLeft"}function kr(e,t="dropdown"){let n=e,o;for(;(o=Object.getPrototypeOf(n))&&o!==Object.prototype;)n=o;let r=n[ar]||(n[ar]={value:0});return"sinewy-"+t+"-"+ ++r.value}function Cr(e){return"--"+e.replace(/[^a-zA-Z0-9_-]/g,"-")+"-anchor"}function Vn(e){return e.filter(Boolean)}function Ht(e){return e==null?[]:Array.isArray(e)?e:[e]}function G(e,t,...n){Ht(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function Sr(e,t,n,o){return e?e(n,o):i(t,n,o)}var Tr=Symbol("sinewy-context-menu-ids"),Dd=700,Ad=['[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]'].join(","),H=i(({id:e},[],t)=>{let n=e||Ld(t),o={name:"ContextMenu",prefix:"context-menu",id:n,triggerId:n+"-trigger",contentId:n+"-content",anchorName:jd(n),trigger:void 0,content:void 0,anchor:void 0,open:!1,renderOpen:!1,openState:{value:!1},openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!1,dir:"ltr",openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,pointerGrace:void 0,pointerDown:void 0,pointerCleanup:void 0,pendingOpen:void 0,longPressTimer:void 0,onbeforeopenchange:void 0,onopenchange:void 0},r=Object.create(t);return r[ve]=o,o.root=o,t.onremove(()=>{clearTimeout(o.searchTimer),cancelAnimationFrame(o.reconcileFrame),o.pointerCleanup&&o.pointerCleanup(),o.pendingOpen&&o.pendingOpen(),Ae(o),o.anchor&&o.anchor.remove()}),({loop:d=!1,dir:a="ltr",onbeforeopenchange:c,onopenchange:s},l)=>(o.loop=d,o.dir=a,o.onbeforeopenchange=c,o.onopenchange=s,o.renderOpen=o.openState.value,i({context:r},()=>l))});H.Trigger=i(({as:e,disabled:t=!1,dom:n,oncontextmenu:o,onkeydown:r,...d},a,c)=>{let s=Id(c,"Trigger");return Nd(e,"div",{...d,id:s.triggerId,tabIndex:e?d.tabIndex:d.tabIndex==null?0:d.tabIndex,disabled:e&&t||void 0,"aria-haspopup":"menu","aria-controls":s.contentId,"aria-expanded":String(s.renderOpen),"aria-disabled":String(t),style:Rd(d.style,t),data:{...d.data,disabled:t?"":null,state:s.renderOpen?"open":"closed"},dom:Bd([l=>Pd(s,l),...zr(n)]),oncontextmenu:(l,u,h,p)=>{Ar(o,l,u,h,p),Ae(s),!(t||l.defaultPrevented||!s.content)&&Dr(s,l,u,Ed(l,u,s.dir),!0)},onkeydown:(l,u,h,p)=>{Ar(r,l,u,h,p),!(!Od(l)||t||l.defaultPrevented||!s.content)&&(Ae(s),Dr(s,l,u,Ir(u,s.dir),!1))}},a)});H.Content=I.Content;H.Item=I.Item;H.Checkbox=I.Checkbox;H.RadioGroup=I.RadioGroup;H.Radio=I.Radio;H.Indicator=I.Indicator;H.Group=I.Group;H.Label=I.Label;H.Separator=I.Separator;H.Sub=I.Sub;H.SubTrigger=I.SubTrigger;H.SubContent=I.SubContent;function Id(e,t){let n=e[ve];if(!n||n.name!=="ContextMenu")throw new Error("ContextMenu."+t+" must be used inside ContextMenu");return n}function Pd(e,t){import.meta.dev&&e.trigger&&e.trigger!==t&&e.trigger.isConnected&&console.warn("ContextMenu.Trigger should only be rendered once per ContextMenu state scope"),e.trigger=t;let n=o=>zd(e,o);return t.addEventListener("pointerdown",n,!0),()=>{t.removeEventListener("pointerdown",n,!0),e.pointerCleanup&&e.pointerCleanup()}}function Ed(e,t,n){return e.clientX!==0||e.clientY!==0||e.button===2||e.pointerType?{x:e.clientX,y:e.clientY}:Ir(t,n)}function Ir(e,t){let n=e.getBoundingClientRect();return{x:t==="rtl"?n.right:n.left,y:n.bottom}}function Od(e){return e.key==="ContextMenu"||e.key==="F10"&&e.shiftKey}function Dr(e,t,n,o,r){t.preventDefault(),Pr(e,n.ownerDocument,o.x,o.y),e.openFocus="first",e.restoreFocus=!0,e.pendingOpen&&e.pendingOpen(),r&&e.pointerDown?Or(e,n,e.pointerDown):Er(e,n)}function Pr(e,t,n,o){let r=e.anchor||qd(e,t);r.style.left=n+"px",r.style.top=o+"px"}function Er(e,t){!e.content||!t.isConnected||(e.content.matches(":popover-open")?Md(e.content):e.content.showPopover({source:t}))}function Or(e,t,n){let o=t.ownerDocument,{button:r,pointerId:d}=n,a,c=()=>{o.removeEventListener("pointerup",u,!0),o.removeEventListener("mouseup",u,!0),o.removeEventListener("pointercancel",h,!0)},s=()=>{c(),cancelAnimationFrame(a),e.pendingOpen===s&&(e.pendingOpen=void 0)},l=p=>d==null||p.pointerId==null||p.pointerId===d,u=p=>{p.button!==r||!l(p)||(e.pointerCleanup&&e.pointerCleanup(),c(),a=requestAnimationFrame(()=>{e.pendingOpen===s&&(e.pendingOpen=void 0),Er(e,t)}))},h=p=>{l(p)&&s()};o.addEventListener("pointerup",u,!0),o.addEventListener("mouseup",u,!0),o.addEventListener("pointercancel",h,!0),e.pendingOpen=s}function zd(e,t){e.pointerCleanup&&e.pointerCleanup();let n=t.currentTarget.ownerDocument,o=e.pointerDown={button:t.button,pointerId:t.pointerId,pointerType:t.pointerType,x:t.clientX,y:t.clientY},r=o.pointerType&&o.pointerType!=="mouse",d=s=>{s.pointerId===o.pointerId&&(n.removeEventListener("pointerup",d,!0),n.removeEventListener("pointercancel",d,!0),n.removeEventListener("pointermove",a,!0),Ae(e),e.pointerDown===o&&(e.pointerDown=void 0),e.pointerCleanup===c&&(e.pointerCleanup=void 0))},a=s=>{r&&s.pointerId===o.pointerId&&Ae(e)},c=()=>{n.removeEventListener("pointerup",d,!0),n.removeEventListener("pointercancel",d,!0),n.removeEventListener("pointermove",a,!0),Ae(e),e.pointerDown===o&&(e.pointerDown=void 0),e.pointerCleanup===c&&(e.pointerCleanup=void 0)};n.addEventListener("pointerup",d,!0),n.addEventListener("pointercancel",d,!0),n.addEventListener("pointermove",a,!0),e.pointerCleanup=c,r&&t.currentTarget.getAttribute("aria-disabled")!=="true"&&$d(e,t.currentTarget,o)}function $d(e,t,n){Ae(e),e.content&&e.content.matches(":popover-open")&&e.content.hidePopover(),e.longPressTimer=setTimeout(()=>{e.longPressTimer=void 0,!(e.pointerDown!==n||!e.content)&&(Pr(e,t.ownerDocument,n.x,n.y),e.openFocus="first",e.restoreFocus=!0,e.pendingOpen&&e.pendingOpen(),Or(e,t,n))},Dd)}function Ae(e){clearTimeout(e.longPressTimer),e.longPressTimer=void 0}function Rd(e,t){return t?e:e&&typeof e=="object"?{"-webkit-touch-callout":"none",...e}:"-webkit-touch-callout:none;"+(e||"")}function qd(e,t){let n=t.createElement("span");return n.setAttribute("aria-hidden","true"),n.setAttribute("data-sinewy-context-anchor",""),n.style.position="fixed",n.style.inset="auto",n.style.width="0",n.style.height="0",n.style.pointerEvents="none",n.style.setProperty("anchor-name",e.anchorName),t.body.insertBefore(n,t.body.firstChild),e.anchor=n,n}function Md(e){let t=Array.from(e.querySelectorAll(Ad)).find(n=>n.closest('[role="menu"]')===e&&n.getAttribute("aria-disabled")!=="true");t&&t.focus({preventScroll:!0})}function Ld(e){let t=e,n;for(;(n=Object.getPrototypeOf(t))&&n!==Object.prototype;)t=n;let o=t[Tr]||(t[Tr]={value:0});return"sinewy-context-menu-"+ ++o.value}function jd(e){return"--"+e.replace(/[^a-zA-Z0-9_-]/g,"-")+"-anchor"}function Bd(e){return e.filter(Boolean)}function zr(e){return e==null?[]:Array.isArray(e)?e:[e]}function Ar(e,t,...n){zr(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function Nd(e,t,n,o){return e?e(n,o):i(t,n,o)}var Ge=H;function pe(e){return e`
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

    &[data-high-contrast][data-variant='solid']:hover:not(:disabled):not([data-disabled]),
    &[data-high-contrast][data-variant='solid']:active:not(:disabled):not([data-disabled]),
    &[data-high-contrast][data-variant='solid'][data-state='open'],
    &[data-color='gray'][data-variant='solid']:hover:not(:disabled):not([data-disabled]),
    &[data-color='gray'][data-variant='solid']:active:not(:disabled):not([data-disabled]),
    &[data-color='gray'][data-variant='solid'][data-state='open'] {
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
  `}var $r={gray:["#fcfcfc #111111","#f9f9f9 #191919","#f0f0f0 #222222","#e8e8e8 #2a2a2a","#e0e0e0 #313131","#d9d9d9 #3a3a3a","#cecece #484848","#bbbbbb #606060","#8d8d8d #6e6e6e","#838383 #7b7b7b","#646464 #b4b4b4","#202020 #eeeeee"],indigo:["#fdfdfe #11131f","#f7f9ff #141726","#edf2fe #182449","#e1e9ff #1d2e62","#d2deff #253974","#c1d0ff #304384","#abbdf9 #3a4f97","#8da4ef #435db1","#3e63dd #3e63dd","#3358d4 #5472e4","#3a5bc7 #9eb1ff","#1f2d5c #d6e1ff"],blue:["#fbfdff #0d1520","#f4faff #111927","#e6f4fe #0d2847","#d5efff #003362","#c2e5ff #004074","#acd8fc #104d87","#8ec8f6 #205d9e","#5eb1ef #2870bd","#0090ff #0090ff","#0588f0 #3b9eff","#0d74ce #70b8ff","#113264 #c2e6ff"],cyan:["#fafdfe #0b161a","#f2fafb #101b20","#def7f9 #082c36","#caf1f6 #003848","#b5e9f0 #004558","#9ddde7 #045468","#7dcedc #12677e","#3db9cf #11809c","#00a2c7 #00a2c7","#0797b9 #23afd0","#107d98 #4ccce6","#0d3c48 #b6ecf7"],teal:["#fafefd #0d1514","#f3fbf9 #111c1b","#e0f8f3 #0d2d2a","#ccf3ea #023b37","#b8eae0 #084843","#a1ded2 #145750","#83cdc1 #1c6961","#53b9ab #207e73","#12a594 #12a594","#0d9b8a #0eb39e","#008573 #0bd8b6","#0d3d38 #adf0dd"],green:["#fbfefc #0e1512","#f4fbf6 #121b17","#e6f6eb #132d21","#d6f1df #113b29","#c4e8d1 #174933","#adddc0 #20573e","#8eceaa #28684a","#5bb98b #2f7c57","#30a46c #30a46c","#2b9a66 #33b074","#218358 #3dd68c","#193b2d #b1f1cb"],amber:["#fefdfb #16120c","#fefbe9 #1d180f","#fff7c2 #302008","#ffee9c #3f2700","#fbe577 #4d3000","#f3d673 #5c3d05","#e9c162 #714f19","#e2a336 #8f6424","#ffc53d #ffc53d","#ffba18 #ffd60a","#ab6400 #ffca16","#4f3422 #ffe7b3"],orange:["#fefcfb #17120e","#fff7ed #1e160f","#ffefd6 #331e0b","#ffdfb5 #462100","#ffd19a #562800","#ffc182 #66350c","#f5ae73 #7e451d","#ec9455 #a35829","#f76b15 #f76b15","#ef5f00 #ff801f","#cc4e00 #ffa057","#582d1d #ffe0c2"],red:["#fffcfc #191111","#fff7f7 #201314","#feebec #3b1219","#ffdbdc #500f1c","#ffcdce #611623","#fdbdbe #72232d","#f4a9aa #8c333a","#eb8e90 #b54548","#e5484d #e5484d","#dc3e42 #ec5d5e","#ce2c31 #ff9592","#641723 #ffd1d9"],crimson:["#fffcfd #191114","#fef7f9 #201318","#ffe9f0 #381525","#fedce7 #4d122f","#facedd #5c1839","#f3bed1 #6d2545","#eaacc3 #873356","#e093b2 #b0436e","#e93d82 #e93d82","#df3478 #ee518a","#cb1d63 #ff92ad","#621639 #fdd3e8"],pink:["#fffcfe #191117","#fef7fb #21121d","#fee9f5 #37172f","#fbdcef #4b143d","#f6cee7 #591c47","#efbfdd #692955","#e7acd0 #833869","#dd93c2 #a84885","#d6409f #d6409f","#cf3897 #de51a8","#c2298a #ff8dcc","#651249 #fdd1ea"],purple:["#fefcfe #18111b","#fbf7fe #1e1523","#f7edfe #301c3b","#f2e2fc #3d224e","#ead5f9 #48295c","#e0c4f4 #54346b","#d1afec #664282","#be93e4 #8457aa","#8e4ec6 #8e4ec6","#8347b9 #9a5cd0","#8145b5 #d19dff","#402060 #ecd9fa"]},Fd={accent:"indigo"},Gd={amber:"#21201c"},Ud=[1,2,3,4,7,8,9,10,11,12],jc=Object.freeze(["gray","accent","red","orange","amber","green","teal","cyan","blue","indigo","purple","pink","crimson"]);function N(e,t){let n=Fd[e]||e,o=$r[n];if(!o)return t;let r=Object.fromEntries(Ud.map(d=>[`--sinewy-accent-${d}`,Rr(o[d-1])]));return r["--sinewy-accent-contrast"]=Gd[n]||"white",r["--sinewy-panel"]="light-dark(#fff, #191919)",[1,2,3,4,6,7,8,9,11,12].forEach(d=>{r[`--sinewy-neutral-${d}`]=Rr($r.gray[d-1])}),r["--sinewy-extreme"]="light-dark(#000, #fff)",{...r,...t}}function Rr(e){let[t,n]=e.split(" ");return`light-dark(${t}, ${n})`}function L(e,t){return{...e,...Object.fromEntries(Object.entries(t).map(([n,o])=>[n,o==null?null:typeof o=="boolean"?o?"":null:String(o)]))}}var Hd=pe(i`button`),Kd=i(({size:e="2",variant:t="solid",color:n="accent",highContrast:o=!1,type:r="button",data:d,style:a,...c},s)=>Hd({...c,type:r,style:N(n,a),data:L(d,{size:e,variant:t,color:n,highContrast:o})},s));var Ue=Kd;function He(e,t){let n={value:e,binding:void 0,unobserve:void 0};return t.onremove(()=>n.unobserve&&n.unobserve()),n}function Ke(e,t,n){e.binding!==t&&(e.unobserve&&e.unobserve(),e.binding=t,e.unobserve=Wn(t)?t.observe(n.redraw):void 0)}function xe(e,t,n){return Wn(t)?t():n===void 0?e.value:n}function Ie(e,t,n,o,r){Wn(t)?t(o):n===void 0&&(e.value=o,r.redraw())}function ue(e,t,...n){Vd(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function Vd(e){return e==null?[]:Array.isArray(e)?e:[e]}function Wn(e){return typeof e=="function"&&typeof e.observe=="function"}var Wd=pe(i`button`),Yd=i(({defaultPressed:e=!1},[],t)=>{let n=He(!!e,t);return({pressed:o,defaultPressed:r,bind:d,onpressedchange:a,onclick:c,disabled:s=!1,size:l="2",variant:u="soft",color:h="accent",highContrast:p=!1,type:f="button",data:m,style:g,...b},k,A)=>{Ke(n,d,A);let x=!!xe(n,d,o);return Wd({...b,type:f,disabled:s,"aria-pressed":String(x),style:N(h,g),data:L(m,{size:l,variant:u,color:h,highContrast:p,state:x?"on":"off"}),onclick:(M,K,B,Q)=>{if(ue(c,M,K,B,Q),M.defaultPrevented||s)return;let pt=!x;Ie(n,d,o,pt,A),a&&a(pt,M)}},k)}});var at=Yd;var Yn=Symbol("sinewy-dialog");var qr=Symbol("sinewy-dialog-ids"),_d=pe(i`button`),Jd=pe(i`button`),Xd=i`dialog
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
`,Zd=i`h2
  margin 0
  color $sinewy-neutral-12
  font-size 20
  font-weight 780
  line-height 1.2
  letter-spacing -0.02em
`,Qd=i`p
  margin 8px 0 0
  color $sinewy-neutral-11
  font-size 14
  line-height 1.55
`,Ve=i(({id:e,defaultOpen:t=!1},[],n)=>{let o=e||ea(n),r=He(!!t,n),d={id:o,contentId:o+"-content",titleId:o+"-title",descriptionId:o+"-description",content:void 0,trigger:void 0,local:r,bind:void 0,controlled:void 0,renderOpen:!!t,onopenchange:void 0,closing:!1},a=Object.create(n);return a[Yn]=d,({open:c,defaultOpen:s,bind:l,onopenchange:u},h,p)=>(d.bind=l,d.controlled=c,d.onopenchange=u,Ke(r,l,p),d.renderOpen=!!xe(r,l,c),_n(d),i({context:a},()=>h))});Ve.Trigger=i(({disabled:e=!1,dom:t,onclick:n,size:o="2",variant:r="solid",color:d="accent",highContrast:a=!1,type:c="button",data:s,style:l,...u},h,p)=>{let f=ct(p,"Trigger");return _d({...u,type:c,disabled:e,"aria-haspopup":"dialog","aria-controls":f.contentId,"aria-expanded":String(f.renderOpen),style:N(d,l),data:L(s,{size:o,variant:r,color:d,highContrast:a,state:f.renderOpen?"open":"closed"}),dom:[m=>f.trigger=m,...Mr(t)],onclick:(m,g,b,k)=>{ue(n,m,g,b,k),!(m.defaultPrevented||e)&&Kt(f,!0,m,p)}},h)});Ve.Content=i(({dom:e,oncancel:t,onclose:n,"aria-label":o,"aria-labelledby":r,"aria-describedby":d,size:a="2",color:c="accent",highContrast:s=!1,data:l,style:u,...h},p,f)=>{let m=ct(f,"Content");return Xd({...h,id:m.contentId,"aria-label":o,"aria-labelledby":o?r:r||m.titleId,"aria-describedby":d===null?void 0:d||m.descriptionId,style:N(c,u),data:L(l,{size:a,color:c,highContrast:s,state:m.renderOpen?"open":"closed"}),dom:[g=>{m.content=g,queueMicrotask(()=>_n(m))},...Mr(e)],oncancel:(g,b,k,A)=>{ue(t,g,b,k,A),!g.defaultPrevented&&(g.preventDefault(),Kt(m,!1,g,f))},onclose:(g,b,k,A)=>{if(ue(n,g,b,k,A),m.closing){m.closing=!1;return}m.renderOpen&&Kt(m,!1,g,f)}},p)});Ve.Title=i((e,t,n)=>{let o=ct(n,"Title");return Zd({...e,id:e.id||o.titleId},t)});Ve.Description=i((e,t,n)=>{let o=ct(n,"Description");return Qd({...e,id:e.id||o.descriptionId},t)});Ve.Close=i(({disabled:e=!1,onclick:t,size:n="2",variant:o="soft",color:r="gray",highContrast:d=!1,type:a="button",data:c,style:s,...l},u,h)=>{let p=ct(h,"Close");return Jd({...l,type:a,disabled:e,style:N(r,s),data:L(c,{size:n,variant:o,color:r,highContrast:d}),onclick:(f,m,g,b)=>{ue(t,f,m,g,b),!(f.defaultPrevented||e)&&Kt(p,!1,f,h)}},u)});function Kt(e,t,n,o){t!==e.renderOpen&&(Ie(e.local,e.bind,e.controlled,t,o),e.renderOpen=!!xe(e.local,e.bind,e.controlled),e.onopenchange&&e.onopenchange(t,n),queueMicrotask(()=>_n(e)))}function _n(e){let t=e.content;!t||!t.isConnected||(e.renderOpen&&!t.open?t.showModal():!e.renderOpen&&t.open&&(e.closing=!0,t.close()))}function ct(e,t){let n=e[Yn];if(!n)throw new Error("Dialog."+t+" must be used inside Dialog");return n}function ea(e){let t=e,n;for(;(n=Object.getPrototypeOf(t))&&n!==Object.prototype;)t=n;let o=t[qr]||(t[qr]={value:0});return"sinewy-dialog-"+ ++o.value}function Mr(e){return e==null?[]:Array.isArray(e)?e:[e]}var j=Ve;var We=i((e,t)=>j(e,...t));We.Trigger=j.Trigger;We.Content=i((e,t)=>j.Content({...e,role:"alertdialog"},t));We.Title=j.Title;We.Description=j.Description;We.Close=j.Close;var he=We;var ta=i`input
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
`,na=i(({defaultChecked:e=!1},[],t)=>{let n=He(!!e,t),o={local:n,defaultChecked:!!e,bind:void 0,controlled:void 0};return({checked:r,defaultChecked:d,bind:a,oncheckedchange:c,onchange:s,dom:l,disabled:u=!1,size:h="2",color:p="accent",highContrast:f=!1,type:m,role:g,data:b,style:k,...A},[],x)=>{o.bind=a,o.controlled=r,Ke(n,a,x);let M=!!xe(n,a,r);return ta({...A,type:"checkbox",role:"switch",checked:M,disabled:u,style:N(p,k),data:L(b,{size:h,color:p,highContrast:f,state:M?"checked":"unchecked"}),dom:[K=>oa(o,K,x),...ra(l)],onchange:(K,B,Q,pt)=>{ue(s,K,B,Q,pt);let io=B.checked;Ie(n,a,r,io,x),c&&c(io,K),r!==void 0&&(B.checked=M)}})}});function oa(e,t,n){t.defaultChecked=e.defaultChecked;let o=t.form;if(!o)return;let r=()=>queueMicrotask(()=>{let d=t.checked;Ie(e.local,e.bind,e.controlled,d,n),t.checked=!!xe(e.local,e.bind,e.controlled),n.redraw()});return o.addEventListener("reset",r),()=>o.removeEventListener("reset",r)}function ra(e){return e==null?[]:Array.isArray(e)?e:[e]}var st=na;var Lr=Symbol("sinewy-theme"),ia=I.Content`
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
`,da=I.SubContent`
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
`,aa=pe(I.Trigger),Vt=e=>e`
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

`,ca=Vt(I.Item),sa=Vt(I.Checkbox),la=Vt(I.Radio),pa=Vt(I.SubTrigger),ua=I.Label`
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
`,ha=I.Separator`
  height 1
  margin $dropdown-separator-margin
  background $sinewy-neutral-6
`,fa=I.Indicator`
  width $dropdown-indicator-width
  display inline-grid
  place-items center
  position absolute
  inset-inline-start $dropdown-indicator-start
  flex 0 0 $dropdown-indicator-width
  font-size $dropdown-indicator-font-size
  font-weight 900
`,jr=i`kbd
  margin-inline-start auto
  color currentColor
  font-family inherit
  font-size inherit
  line-height inherit
  opacity 0.58
`,ga=i`svg
  width 14
  height 14
  display block
  margin-inline-start auto
  flex 0 0 14px
  opacity 0.72

  &:dir(rtl) {
    transform rotate(180deg)
  }
`,P=i((e,t)=>I(e,t));P.Trigger=i(({size:e="2",variant:t="solid",color:n="gray",highContrast:o=!1,data:r,style:d,...a},c)=>aa({...a,style:N(n,d),data:L(r,{size:e,variant:t,color:n,highContrast:o})},c));P.Content=i(({size:e="2",variant:t="solid",color:n="gray",highContrast:o=!1,data:r,style:d,...a},c,s)=>{let l={size:e,variant:t,color:n,highContrast:o};return ia({...a,style:N(n,d),data:L(r,{size:e,variant:t,color:n,highContrast:o})},Br(s,l,c))});P.Item=Wt(ca);P.Checkbox=Wt(sa);P.Radio=Wt(la);P.SubTrigger=Wt(pa,ba);P.SubContent=i(({size:e,variant:t,color:n,highContrast:o,data:r,style:d,...a},c,s)=>{let l=Jn(s,{size:e,variant:t,color:n,highContrast:o});return da({...a,style:n==null?d:N(n,d),data:L(r,l)},Br(s,l,c))});P.Label=i(({size:e,data:t,...n},o,r)=>{let d=Jn(r,{size:e});return ua({...n,data:L(t,{size:d.size})},o)});P.Separator=i((e,t)=>ha(e,t));P.Indicator=i((e,t)=>fa(e,t));P.Shortcut=i((e,t)=>jr(e,t));P.TriggerIcon=i((e,t)=>ma(e,t));P.Group=I.Group;P.RadioGroup=I.RadioGroup;P.Sub=I.Sub;var O=i((e,t)=>Ge(e,t));O.Trigger=Ge.Trigger;O.Content=P.Content;O.Item=P.Item;O.Checkbox=P.Checkbox;O.RadioGroup=Ge.RadioGroup;O.Radio=P.Radio;O.Indicator=P.Indicator;O.Group=Ge.Group;O.Label=P.Label;O.Separator=P.Separator;O.Sub=Ge.Sub;O.SubTrigger=P.SubTrigger;O.SubContent=P.SubContent;O.Shortcut=P.Shortcut;function Wt(e,t){return i(({size:n,color:o,highContrast:r,shortcut:d,data:a,style:c,...s},l,u)=>{let h=Jn(u,{size:n,highContrast:r}),p=d==null?l:[...l,jr(d)];return e({...s,style:o==null?c:N(o,c),data:L(a,{size:h.size,variant:h.variant,color:o,highContrast:h.highContrast})},t==null?p:[...p,t()])})}function Jn(e,t){let n=e[Lr]||{};return Object.fromEntries(["size","variant","color","highContrast"].map(o=>[o,t[o]==null?n[o]:t[o]]))}function Br(e,t,n){let o=Object.create(e);return o[Lr]=t,i({context:o},()=>n)}function ma(e){return i`svg
    width 14
    height 14
    display block
    flex 0 0 14px
  `({...e,viewBox:"0 0 14 14",fill:"none",focusable:"false","aria-hidden":e["aria-hidden"]==null?"true":e["aria-hidden"]},i`path`({d:"M3.5 5.25 7 8.75l3.5-3.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))}function ba(){return ga({viewBox:"0 0 14 14",fill:"none",focusable:"false","aria-hidden":"true"},i`path`({d:"M5.25 3.5 8.75 7l-3.5 3.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))}var E=P;var Nr=[{title:"Alert Dialog",description:"A Dialog specialization for decisions that require immediate attention.",slug:"alert-dialog",source:"docs/components/alert-dialog.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"why-it-shares-dialog-parts",text:"Why it shares Dialog parts"},{depth:2,id:"state-and-events",text:"State and events"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"alertdialogattrs-children",text:"AlertDialog(attrs?, ...children)"},{depth:3,id:"alertdialogtriggerattrs-children",text:"AlertDialog.Trigger(attrs?, ...children)"},{depth:3,id:"alertdialogcontentattrs-children",text:"AlertDialog.Content(attrs?, ...children)"},{depth:3,id:"alertdialogtitleattrs-children",text:"AlertDialog.Title(attrs?, ...children)"},{depth:3,id:"alertdialogdescriptionattrs-children",text:"AlertDialog.Description(attrs?, ...children)"},{depth:3,id:"alertdialogcloseattrs-children",text:"AlertDialog.Close(attrs?, ...children)"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
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
`}],Fr=Object.fromEntries(Nr.map(e=>[e.slug,e]));var Yt=Nr;i.title="Sinewy \u2014 Documentation";i.css.reset``;i.css`
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
`;var ya=i(({},[],{route:e})=>va(e({"/":ja,"/components/:slug":Ba,"/?":ei}))),va=i`div
  min-height 100svh
  display grid
  grid-template-columns 256px minmax(0, 1fr)

  @media (max-width: 780px) {
    grid-template-columns 1fr
  }
`,wa=i`aside
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
`,Wr=i`a
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
`,Yr=i`span
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
`,xa=i`nav
  display grid
  align-content start
  gap 25
`,Gr=i`section
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
`,Ur=i`a
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
`,ka=i`footer
  display grid
  gap 6
  color #85837c
  font-size 11
  line-height 1.45

  strong {
    color #5c5c57
    font-weight 680
  }
`,Ca=i`nav
  min-width 0
  display none
  align-items center
  gap 5
  overflow-x auto

  @media (max-width: 780px) {
    display flex
  }
`,Hr=i`a
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
`,Sa=i`main
  min-width 0
  grid-column 2

  @media (max-width: 780px) {
    grid-column 1
  }
`,to=i`div
  width min(100%, 1100px)
  display grid
  gap 48
  margin 0 auto
  padding 72 52 96

  @media (max-width: 780px) {
    padding 44 20 72
  }
`,Ta=i`header
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
`,_r=i`div
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
`,Xn=i`section
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
`,Da=i`div
  display grid
  grid-template-columns repeat(3, minmax(0, 1fr))
  gap 12

  @media (max-width: 900px) {
    grid-template-columns 1fr
  }
`,Zn=i`article
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
`,Qn=i`div
  display flex
  align-items center
  justify-content space-between
  gap 12
`,Xt=i`span
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
`,Kr=i`div
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
`,Jr=i`a
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
`,Xr=i`span
  width 34
  height 34
  display grid
  place-items center
  border-radius 50%
  background #f0eee8
  color #555650
  font-size 18
`,Aa=i`ol
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
`,_t=i`span
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
`,Zr=i`header
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
`,Ia=i`div
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
`,Pa=i`div
  display flex
  flex-wrap wrap
  align-items center
  gap 7
`,Ea=i`span
  padding 5 8
  border 1px solid #d9d6cd
  border-radius 99
  color #6c6c66
  font-size 10
  font-weight 650
`,Oa=i`div
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
`,za=i`article
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
`,$a=i`div
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
`,Ra=i`aside
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
`,Pe=i`div
  min-height 230
  display grid
  place-items center
  padding 28
  border 1px solid #dad7ce
  border-radius 15 15 0 0
  background-color #f2f0e9
  background-image radial-gradient(#d8d4c9 0.7px, transparent 0.7px)
  background-size 13px 13px
`,qa=i`div
  display grid
  gap 16
`,Vr=i`section
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
`,lt=i`div
  display flex
  flex-wrap wrap
  align-items center
  gap 9
`,Ma=i`div
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
`,Ee=i`pre
  overflow-x auto
  padding 18 20
  border-radius 0 0 15px 15px
  background #242522
  color #e9e8e2
  font-family "SFMono-Regular", Consolas, "Liberation Mono", monospace
  font-size 12
  line-height 1.65
  tab-size 2
`,La=O.Trigger`
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
`,Qr=i`div
  display flex
  justify-content flex-end
  gap 8
  margin-top 24
`,eo=i`label
  display inline-flex
  align-items center
  gap 9
  color #343532
  font-size 13
  font-weight 680
  cursor pointer
`,no={"alert-dialog":{status:"Preview",tags:["Native dialog","Alert semantics","Dialog specialization"],summary:"An urgent-decision specialization of Dialog that enforces the native alertdialog role.",preview:Ha,previewHeadings:[{id:"live-example",text:"Live example"}]},button:{status:"Preview",tags:["Native control","Shared theme","Form-safe"],summary:"A compact themed native control with four variants and full button attribute forwarding.",preview:Na,previewHeadings:[{id:"live-example",text:"Live example"}]},toggle:{status:"Preview",tags:["Native control","Pressed state","Shared theme"],summary:"A native two-state button with controlled, uncontrolled, and live binding contracts.",preview:Ga,previewHeadings:[{id:"live-example",text:"Live example"}]},dialog:{status:"Preview",tags:["Native dialog","Modal top layer","Controlled state"],summary:"A native modal dialog with accessible semantic parts and shared Sinewy theming.",preview:Ua,previewHeadings:[{id:"live-example",text:"Live example"}]},switch:{status:"Preview",tags:["Native checkbox","Form control","Shared theme"],summary:"A native checkbox switch with real form behavior and controlled, uncontrolled, and live state.",preview:Va,previewHeadings:[{id:"live-example",text:"Live example"}]},"context-menu":{status:"Preview",tags:["Popover API","Point anchors","Headless + theme"],summary:"Contextual actions at pointer or keyboard invocation points, backed by the shared menu engine.",preview:Ya,previewHeadings:[{id:"live-example",text:"Live example"}]},dropdown:{status:"API reviewed",tags:["Popover API","CSS anchors","Headless + theme"],summary:"Actions, checkbox and radio choices, nested menus, room-aware placement, and a theme facade.",preview:Wa,previewHeadings:[{id:"live-example",text:"Live example"},{id:"theme-preview",text:"Theme preview"}]}};function oo(e,t){return[wa(Wr({href:"/"},Yr("S"),i`span`(i`strong`("Sinewy"),i`span`("Documentation"))),xa(Gr(i`h2`("Start here"),Ur({href:"/",data:{active:t.has("/")||void 0}},"Overview")),Gr(i`h2`("Components"),Yt.map(n=>Ur({href:"/components/"+n.slug,data:{active:t.has("/components/"+n.slug)||void 0}},n.title,i`span`(no[n.slug]?.status||"Preview"))))),ka(i`strong`("Independent preview"),"Built for Sin.js with the platform.")),Sa(e)]}function ja({},[],{route:e,doc:t}){return t.title("Sinewy \u2014 Documentation"),oo([ro(e),to(Ta(_r("Independent components for Sin.js"),i`h1`("Small parts. Native behavior."),i`p`("Sinewy is an independently maintained component library for Sin.js. This site documents each public surface as it becomes useful, testable, and honest about its platform boundaries.")),Xn(i`header`(i`h2`("Where things stand"),i`p`("The status here follows implemented and verified behavior, not a speculative component catalog.")),Da(Zn(Qn(i`strong`("Portable reference"),Xt("Markdown")),i`p`("Component prose, API tables, and platform limits now come directly from the repository documents."),Kr(i`span`({style:{width:"100%"}}))),Zn(Qn(i`strong`("Behavior suite"),Xt("Green")),i`p`("Browser, server rendering, hydration, submenu, and type declaration coverage are in place."),Kr(i`span`({style:{width:"100%"}}))),Zn(Qn(i`strong`("Accessibility sign-off"),Xt({data:{tone:"manual"}},"Manual")),i`p`("Keyboard behavior is covered; supported-browser and assistive-technology verification remains.")))),Xn(i`header`(i`h2`("Components"),i`p`("Each component page combines its portable contract with live Sin examples and generated navigation.")),Yt.map(n=>Jr({href:"/components/"+n.slug},i`div`(i`h3`(n.title),i`p`(no[n.slug]?.summary||n.description)),Xr("\u2192")))),Xn({id:"roadmap"},i`header`(i`h2`("Documentation roadmap"),i`p`("The site itself is the visible checklist for turning implementation work into a usable system.")),Aa(i`li`(_t({data:{done:""}},"\u2713"),i`div`(i`strong`("Establish the documentation shell"),"Navigation, progress overview, component layout, and live examples.")),i`li`(_t({data:{done:""}},"\u2713"),i`div`(i`strong`("Render portable Markdown"),"Frontmatter, GFM content, heading IDs, links, and tables feed the site directly.")),i`li`(_t({data:{current:""}},"3"),i`div`(i`strong`("Generate the static site"),"Use Sin SSR and route discovery to publish every documented component.")),i`li`(_t("4"),i`div`(i`strong`("Expand through real components"),"Add primitives only as their contracts become concrete enough to document.")))))],e)}function Ba({slug:e},[],t){let n=Fr[e];if(!n)return t.doc.status(404),ei({},[],t);let o=no[e]||{},r=o.preview?o.preview():[],d=o.previewHeadings||[];return t.doc.title(n.title+" \u2014 Sinewy"),oo([ro(t.route),to(Zr(Ia(i`a`({href:"/"},"Components"),i`span`("/"),i`span`(n.title)),Pa(Xt(o.status||"Preview"),(o.tags||[]).map(a=>Ea(a))),i`h1`(n.title),i`p`(n.description)),Oa(za(r,$a({data:{source:n.source}},i.trust(n.html))),Ra(i`strong`("On this page"),[...d,...n.headings.filter(a=>a.depth===2)].map(a=>i`a`({href:"#"+a.id},a.text)))))],t.route)}function Na(){return i`section#live-example`(i`h2`("Live example"),i`p`("A native button with shared size, variant, color, and contrast styling. Tab to see its focus-visible treatment."),i`div`(Pe(lt(Ue({variant:"solid",color:"accent"},"Save"),Ue({variant:"soft",color:"cyan"},"Duplicate"),Ue({variant:"outline",color:"green"},"Publish"),Ue({variant:"ghost",color:"red"},"Delete"))),Ee(`import { Button } from 'sinewy'

Button({
  size: '2',
  variant: 'solid',
  color: 'accent',
  highContrast: false
}, 'Save')`)))}var Fa=i(()=>{let e=i.live(!1);return()=>lt(at({bind:e,variant:"soft"},e()?"Bold on":"Bold"),at({defaultPressed:!0,variant:"outline",color:"green"},"Pinned"),at({variant:"ghost",color:"crimson","aria-label":"Mute audio"},"\u266A"))});function Ga(){return i`section#live-example`(i`h2`("Live example"),i`p`("Activate a toggle to see its persistent pressed state. The same control theme becomes neutral while off and colored while on."),i`div`(Pe(Fa()),Ee(`import s from 'sin'
import { Toggle } from 'sinewy'

const bold = s.live(false)

Toggle({
  bind: bold,
  size: '2',
  variant: 'soft',
  color: 'accent'
}, 'Bold')`)))}function Ua(){return i`section#live-example`(i`h2`("Live example"),i`p`("Open the native modal to see top-layer focus containment, the themed backdrop, and semantic title and description relationships."),i`div`(Pe(j(j.Trigger({variant:"solid"},"Edit profile"),j.Content(j.Title("Edit profile"),j.Description("Change the public details shown on your account."),Qr(j.Close("Cancel"),j.Close({variant:"solid",color:"accent"},"Save changes"))))),Ee(`import { Dialog } from 'sinewy'

Dialog(
  Dialog.Trigger('Edit profile'),
  Dialog.Content(
    Dialog.Title('Edit profile'),
    Dialog.Description('Change your public details.'),
    Dialog.Close('Cancel'),
    Dialog.Close({ variant: 'solid' }, 'Save changes')
  )
)`)))}function Ha(){return i`section#live-example`(i`h2`("Live example"),i`p`("The alert specialization keeps Dialog behavior while announcing an urgent decision and initially focusing the safest choice."),i`div`(Pe(he(he.Trigger({variant:"outline",color:"red"},"Delete account"),he.Content({color:"red"},he.Title("Delete account?"),he.Description("This action permanently removes the account and its saved data."),Qr(he.Close({autofocus:!0},"Cancel"),he.Close({variant:"solid",color:"red"},"Delete"))))),Ee(`import { AlertDialog } from 'sinewy'

AlertDialog(
  AlertDialog.Trigger('Delete account'),
  AlertDialog.Content(
    AlertDialog.Title('Delete account?'),
    AlertDialog.Description('This cannot be undone.'),
    AlertDialog.Close({ autofocus: true }, 'Cancel'),
    AlertDialog.Close({ variant: 'solid', color: 'red' }, 'Delete')
  )
)`)))}var Ka=i(()=>{let e=i.live(!0);return()=>lt(eo(st({bind:e}),"Notifications"),eo(st({defaultChecked:!0,color:"green"}),"Auto-save"),eo(st({color:"crimson",highContrast:!0}),"Public profile"))});function Va(){return i`section#live-example`(i`h2`("Live example"),i`p`("Each themed track is still a native labelled checkbox, including keyboard, form, focus, and reset behavior."),i`div`(Pe(Ka()),Ee(`import s from 'sin'
import { Switch } from 'sinewy'

const notifications = s.live(true)

s\`label\`(
  Switch({
    bind: notifications,
    color: 'accent'
  }),
  'Notifications'
)`)))}function Wa(){return[i`section#live-example`(i`h2`("Live example"),i`p`("The themed facade keeps the headless part structure and remains open to normal Sin style extension."),i`div`(Pe(_a()),Ee(`import Dropdown from 'sinewy/theme'

Dropdown(
  Dropdown.Trigger('Open menu'),
  Dropdown.Content(
    Dropdown.Item('Edit'),
    Dropdown.Checkbox({ checked: true },
      Dropdown.Indicator('\u2713'),
      'Notifications'
    )
  )
)`))),i`section#theme-preview`(i`h2`("Theme preview"),i`p`("Size and color establish an inherited menu scope. Parts can make deliberate local overrides."),qa(Vr(i`h3`("Sizes"),lt(Jt({label:"Size 1",size:"1",color:"indigo"}),Jt({label:"Size 2",size:"2",color:"indigo"}),Jt({label:"Size 3",size:"3",color:"indigo"}))),Vr(i`h3`("Colors"),lt(...["gray","indigo","cyan","green","amber","crimson","purple"].map(e=>Jt({label:Ja(e),variant:"soft",color:e}))))))]}function Ya(){return i`section#live-example`(i`h2`("Live example"),i`p`("Right-click or press and hold the target, or focus it and press Shift+F10."),i`div`(Pe(O(La("Open a contextual menu here"),O.Content({variant:"soft",color:"indigo"},O.Item({shortcut:"\u2318 R"},"Rename"),O.Item({shortcut:"\u2318 D"},"Duplicate"),O.Separator(),O.Item({color:"red"},"Delete")))),Ee(`import { ContextMenu } from 'sinewy/theme'

ContextMenu(
  ContextMenu.Trigger('Right-click here'),
  ContextMenu.Content({ variant: 'soft', color: 'indigo' },
    ContextMenu.Item({ shortcut: '\u2318 R' }, 'Rename'),
    ContextMenu.Item('Duplicate')
  )
)`)))}var _a=i(()=>{let e=i.live(!0);return()=>E(E.Trigger({variant:"outline",color:"accent",size:"2"},"Open menu",E.TriggerIcon()),E.Content({align:"start",offset:7,variant:"soft",color:"indigo"},E.Label("Workspace"),E.Item({shortcut:"\u2318 E"},"Edit details"),E.Checkbox({bind:e},E.Indicator("\u2713"),"Notifications"),E.Separator(),E.Sub(E.SubTrigger("Share"),E.SubContent(E.Item("Copy link"),E.Item("Invite people")))))});function Jt({label:e,size:t="2",variant:n="solid",color:o,highContrast:r=!1,dark:d=!1}){return Ma({data:{dark:d||null}},i`span`(e),E(E.Trigger({size:t,variant:n==="soft"?"soft":"outline",color:o,highContrast:r},"Open",E.TriggerIcon()),E.Content({size:t,variant:n,color:o,highContrast:r,align:"start",offset:6},E.Item({shortcut:"\u2318 E"},"Edit"),E.Checkbox({checked:!0},E.Indicator("\u2713"),"Enabled"),E.Item({color:"red"},"Delete"))))}function Ja(e){return e[0].toUpperCase()+e.slice(1)}function ro(e){return i`header
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
  `(Wr({href:"/"},Yr("S"),i`strong`("Sinewy")),Ca(Hr({href:"/",data:{active:e.has("/")||void 0}},"Overview"),Yt.map(t=>Hr({href:"/components/"+t.slug,data:{active:e.has("/components/"+t.slug)||void 0}},t.title))))}function ei({},[],{route:e,doc:t}){return t.title("Not found \u2014 Sinewy"),oo([ro(e),to(Zr(_r("404"),i`h1`("Nothing here yet."),i`p`("This documentation is growing alongside the component system."),Jr({href:"/"},i`div`(i`h3`("Return to the overview"),i`p`("See current progress and available component pages.")),Xr("\u2192"))))],e)}var Os=i.mount(ya);export{Os as default};
