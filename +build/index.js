typeof globalThis>"u"&&(window.globalThis=window);var C=typeof window>"u"?{}:window;var _o=Symbol("stackTrace"),ht=Object.freeze({}),Jo=Object.freeze([]),En=Promise.resolve(),D={}.hasOwnProperty,Pe=new WeakSet;function Xo(e){return typeof e=="function"?e():e}function Rt(e){return e&&String(e).replace(/\/+/g,"/").replace(/(.)\/\*?$/,"$1")}function ft(e){return e&&Rt(e).replace("/?","?")}function Lt(e){return e.replace(/(\B[A-Z])/g,"-$1").toLowerCase()}function re(e){return e&&O(e.observe)}function O(e){return typeof e=="function"}function Zo(e){return e&&O(e.then)}function qn(e){return e.charCodeAt(0)===111&&e.charCodeAt(1)===110}function Mt(e){return typeof e=="boolean"||e==null}function Rn(e){return e&&Array.isArray(e.raw)}function Ln(e){return e.charCodeAt(0)===36?"--"+e.slice(1):e.charCodeAt(0)===45&&e.charCodeAt(1)===45?e:null}function Mn(e){return e==="dom"||e==="type"||e==="value"||e==="key"||e==="src"||e==="srcset"||e==="href"||e==="class"||e==="className"||e==="data"||e==="style"||e==="deferrable"||e==="is"||e==="handleEvent"}function Bn(e){for(;e.parent&&!e.name;)e=e.parent;return e.name}function Qo(e){for(;e.parent&&!e.id;)e=e.parent;return e.id}function ui(e){let t=e.classes||"";for(;e.parent;)e=e.parent,t+=" "+e.classes||"";return t}function er(e){return(On(e.attrs.class)+On(e.attrs.className)+ui(e.tag)).trim()}function Bt(e){return Array.isArray(e)?e:[e]}function $e(){}function jt(e){return Ln(e)||(e==="cssFloat"?"float":Lt(e))}function On(e){return re(e)||O(e)?On(e()):e?typeof e=="object"?hi(e):e+" ":""}function hi(e){let t;for(let n in e)e[n]&&(t=t==null?n:[t,n].join(" "));return t||""}function Nt(e,t,n){t?e.style.setProperty("min-width",t+"px"):e.style.removeProperty("min-width"),n?e.style.setProperty("min-height",n+"px"):e.style.removeProperty("min-height")}function Ke(e,[t,n,o,r]=[],{callbacks:i,depth:a}={}){if(e===document.documentElement)Nt(e,o,r),window.scrollTo(t||0,n||0);else{if(a){let c=document.createElement("div");c.style="position:absolute;width:1px;height:1px;top:"+(r-1)+"px;left:"+(o-1)+"px",e.appendChild(c),Pe.add(c),i.push(()=>(Pe.delete(c),c.remove()))}e.scrollLeft=t,e.scrollTop=n}}function tr(e,t){return!t||!t.tag?e:!e||!e.tag?(e.tag=t.tag,e):(e.tag={id:t.tag.id||e.tag.id,name:t.tag.name||e.tag.name,classes:(e.tag.classes?e.tag.classes+" ":"")+t.tag.classes,args:t.tag.args,vars:t.tag.vars,parent:e.tag},e)}var ne=class{constructor(t,n,o=null,r=0,i=ht,a=Jo){this.nesting=r,this.component=n,this.inline=t,this.tag=o,this.attrs=i,this.key=i?i.key:void 0,this.dom=null,this.children=a}};["head","get","put","post","delete","patch"].forEach(e=>We[e]=function(t,n={}){return n.method=e,We(t,n)});We.redraw=()=>{};var fi=typeof Uint8Array>"u"?[]:[Object.getPrototypeOf(Uint8Array)],gi="Blob ArrayBuffer DataView FormData URLSearchParams File".split(" ").map(e=>globalThis[e]).filter(e=>e).concat(fi);function We(e,{url:t=new URL(e,C.location.origin),method:n="GET",responseType:o,json:r="application/json",query:i,body:a,user:c=t.username,pass:s=t.password,headers:l={},config:p,timeout:h=0,signal:u,...f}={}){let g=new C.XMLHttpRequest(f);u?.addEventListener("abort",()=>g.abort());let y=!1,w=new Promise((k,v)=>{let x,b;n=n.toUpperCase(),g.addEventListener("readystatechange",function(){if(g.readyState===g.DONE)try{g.headers=g.headers||bi(g.getAllResponseHeaders()),g.status&&Object.defineProperty(g,"body",{enumerable:!0,value:x===r?g.response===void 0||g.response===""?void 0:JSON.parse(g.response):g.response}),g.status===304||g.status>=200&&g.status<300?k(y?g:g.body):v(mi(g))}catch(A){v(A)}}),g.addEventListener("error",v),g.addEventListener("abort",()=>v(new Error("ABORTED"))),g.addEventListener("timeout",()=>v(new Error("TIMEOUT"))),i&&(i=new URLSearchParams(i))&&i.size&&i.forEach((A,$)=>t.searchParams.append($,A)),g.open(n,""+t,!0,c,s),g.timeout=h,o&&(g.responseType=o),Object.entries(l).forEach(([A,$])=>{$&&g.setRequestHeader(A,$),A.toLowerCase()==="accept"&&(x=$),A.toLowerCase()==="content-type"&&(b=$)}),!x&&!o&&r&&g.setRequestHeader("Accept",x=r),!b&&a!==void 0&&!gi.some(A=>a instanceof A)&&r&&g.setRequestHeader("Content-Type",b=r),p&&p(g),g.send(b===r?JSON.stringify(a):a)}).catch(k=>{let v=Object.assign(new Error(k.message),{...k,url:t,status:g.status,headers:g.headers,body:g.body||g.response});throw Object.defineProperty(v,"xhr",{value:g}),v});return Object.defineProperties(w,{abort:{value:()=>g.abort(),enumerable:!0},xhr:{get:()=>(y=!0,w)}})}function mi(e){return new Error(e.status?e.status+(e.statusText?" "+e.statusText:""):"Unknown")}function bi(e){let t={};return e.split(`
`).forEach(n=>{let o=n.indexOf(":"),r=n.substring(0,o).trim().toLowerCase(),i=n.substring(o+1).trim();r==="set-cookie"?t[r]?t[r].push(i):t[r]=[i]:t[r]=i}),t}function Ye(e,...t){let n=new Set;return t.forEach(s=>O(s)&&n.add(s)),a.value=e,a.observe=o,a.valueOf=a.toString=a.toJSON=()=>e,a.detach=$e,a.reduce=c,a.set=s=>(...l)=>(a(O(s)?s(...l):s),a),a.get=s=>Object.assign(r.bind(null,s),{observe:l=>a.observe(()=>l(r(s)))}),a.if=(...s)=>Object.assign(i.bind(null,...s),{observe:l=>a.observe(()=>l(i(...s)))}),a;function o(s,l){let p=l?(...h)=>(n.delete(p),s(...h)):s;return n.add(p),()=>n.delete(p)}function r(s){return O(s)?s(a.value):a.value[s]}function i(s,l=!0,p=!1){return a.value===s?l:p}function a(s){if(!arguments.length)return a.value;let l=e;return a.value=e=s,n.forEach(p=>a.value!==l&&p(a.value,l,()=>n.delete(p))),a.value}function c(s,l){let p=1,h=Ye(arguments.length>1?s(l,a.value,p++):a.value);return a.observe(u=>h(s(h.value,u,p++))),h}}Ye.from=function(...e){let t=e.pop(),n=Ye(t(...e.map(jn))),o=e.map(r=>r.observe(()=>n(t(...e.map(jn)))));return n.detach=()=>o.forEach(jn),n};function jn(e){return e()}var nr=!1,or={};function rr(e){return e.split(/(?=\/)/)}function yi(e,t){return e.reduce((n,o,r)=>(o[1]===":"&&(n[o.slice(2)]=decodeURIComponent(t[r].slice(1))),n),{})}function gt(e,t,n,o){let r=h.location=n.location,i=e(({key:u,route:f,...m},[g],y)=>(y.route=gt(e,u.replace(/[/*?]$/,""),n,f),f.key=u,()=>c(g,m,y)));return h.root=o?o.root:h,h.parent=o||h,h.query=n.query,h.toString=h,h.state=a,h.has=u=>{let f=s(r);if((u=u.replace(t,""))==="/")return f===t||f==="/"&&t==="";let m=ft(t+"/"+u);return f.indexOf(m)===0&&(f[m.length]===void 0||f[m.length]==="/")},Object.defineProperty(h,"path",{get(){let u=s(r),f=u.indexOf("/",t.length+1);return f===-1?u:u.slice(0,f)}}),h;function a(u){return u&&C.history.replaceState({...history.state,...u},"",r.pathname+r.search+r.hash),C.history?.state}function c(u,f,m){let g=O(u)?u(f,[],m):u;return Zo(g)?e(()=>g)(f):g}function s(u,f=0){return decodeURIComponent(Rt(e.route.prefix[0]==="#"?u.hash.slice(e.route.prefix.length+f):e.route.prefix[0]==="?"?u.search.slice(e.route.prefix.length+f):u.pathname.slice(e.route.prefix.length+f)))}async function l(u,{state:f,replace:m=!1,redraw:g=!0,scroll:y=!0}={}){if(u!==s(r)+r.search){if(e.is.server)return n.doc.status(302),n.doc.headers({Location:e.route.prefix+u});e.route.prefix[0]==="#"?C.location.hash=e.route.prefix+u:e.route.prefix[0]==="?"?C.location.search=e.route.prefix+u:C.history[m?"replaceState":"pushState"](f,null,e.route.prefix+u),or[u]=f,u.indexOf(r.search)>-1&&n.query(r.search),g&&await e.redraw(),y===!1||e.route.scroll===!1?e.route.scroll=void 0:Ke(document.documentElement)}}function p({state:u={}}={}){e.redraw().then(()=>Ke(document.documentElement,u?.sinscroll?.[""]))}function h(u,f={}){if(typeof u>"u")return t+"/";if(typeof u=="string")return l(ft(u[0]==="/"?u:"/"+u),f);nr||(nr=!0,e.route.prefix[0]==="#"?C.addEventListener("hashchange",p,{passive:!0}):O(C.history.pushState)&&C.addEventListener("popstate",p,{passive:!0}));let m=s(r,t.length),g=rr(m),{match:y,view:w}=vi(u,g),k=t+(y?y.map((v,x)=>v==="/*"?"*":v==="/?"?"?":g[x]).join(""):"?");return(w===void 0||y[0]==="/?")&&n.doc.status(404),h.params={...h.parent.params,...yi(y||[],g)},i({key:k,route:h,...h.params,...t+m===k&&or[t+m]||C.history.state||{},...f},w)}}function vi(e,t){let n=0,o,r;function i(a,c){if(a.charCodeAt(0)!==47&&(a="/"+a),a=rr(Rt(a)),typeof c=="object"&&c!=null){for(let l in c)i(a+l,c[l]);return}let s=wi(a,t);s>n&&(n=s,o=a,r=c)}for(let a in e)i(a,e[a]);return{match:o,view:r}}function wi(e,t){return e.reduce((n,o,r)=>n+(o==="/?"?1:o===t[r]?7:o&&t[r]&&o.toLowerCase()===t[r].toLowerCase()?6:o[1]===":"&&t[r]&&t[r].length>1?5:o==="/"&&!t[r]?4:o.indexOf("/...")===0?3:o==="/*"?2:-1/0),0)}function Nn(e,t){let n=URLSearchParams,o=["append","delete","set","sort"],r=t.search,i=new n(r),a,c=e.live();c.replace=p=>(i=new n(p),l()),c.clear=()=>c.replace("");for(let p in n.prototype)c[p]=(...h)=>(a=s()[p](...h),o.includes(p)&&l(),a);return c;function s(){return r===t.search?i:(r=t.search,i=new n(r))}function l(){let p=t.pathname+(i+""?"?"+(i+"").replace(/=$/g,""):"")+t.hash;location.href.endsWith(p)||(C.history.replaceState(C.history.state,null,p),c(t.search),e.redraw())}}var dr={ai:"align-items",as:"align-self",ac:"align-content",ar:"aspect-ratio",b:"bottom",bg:"background",bf:"backdrop-filter",bc:"background-color",br:"border-radius",bs:"box-shadow",bi:"background-image",c:"color",d:"display",fg:"flex-grow",fb:"flex-basis",f:"float",fd:"flex-direction",ff:"font-family",fs:"font-size",fw:"font-weight",g:"gap",ga:"grid-area",gg:"grid-gap",gta:"grid-template-areas",gtc:"grid-template-columns",gtr:"grid-template-rows",h:"height",jc:"justify-content",js:"justify-self",l:"left",lh:"line-height",ls:"letter-spacing",m:"margin",mb:"margin-bottom",ml:"margin-left",mr:"margin-right",mt:"margin-top",o:"opacity",p:"padding",pb:"padding-bottom",pl:"padding-left",pr:"padding-right",pt:"padding-top",pi:"place-items",pe:"pointer-events",r:"right",t:"top",ta:"text-align",td:"text-decoration",tt:"text-transform",ts:"text-shadow",us:"user-select",va:"vertical-align",ws:"white-space",w:"width",zi:"z-index",z:"zoom"};var ye,Gt="s",vt=C.document,xi=/^(ms|moz|webkit)[-A-Z]/i,Xe=vt.createElement("div"),Ut=new Map,ir={},Fn={},Vn=new Map,he={$:"calc"},Qn=e=>ye||(ye=e||vt.querySelector("style.sin")||vt.createElement("style"));function hr(e){if(Vn.has(e))return Vn.get(e);let t=Object.assign(document.createElement("link"),{rel:"stylesheet",href:e});document.head.appendChild(t);let n=new Promise((o,r)=>{t.onload=()=>o(t),t.onerror=r});return Vn.set(e,n),n}var fr=(e,t)=>typeof t=="function"?Ut.set(e.charCodeAt(0),t):Object.entries(e).forEach(([n,o])=>Ut.set(n.charCodeAt(0),o)),Ft={flex:"",border:"px","line-height":"","box-shadow":"px","border-top":"px","border-left":"px","border-right":"px","border-bottom":"px","text-shadow":"px","@media":"px","@container":"px"},Un=Array.from(Object.keys(D.call(Xe.style,"width")?Xe.style:Object.getPrototypeOf(Xe.style)).reduce((e,t)=>(e.add(t.match(xi)?"-"+Lt(t):Lt(t)),e),new Set(["float"]))),ar=Un.reduce((e,t)=>{let n=t.match(/-(ms|o|webkit|moz)-/g);if(n){let o=t.replace(/-(ms|o|webkit|moz)-/,"");Un.indexOf(o)===-1&&(o==="flexDirection"&&(e.flex="-"+n[1].toLowerCase()+"-flex"),e[o]=t)}return e},{}),Gn=new Map,cr=new Set,sr=C.CSS&&C.CSS.supports("color","var(--support-test)"),ki=["perspective","blur","drop-shadow","inset","polygon","minmax"],Ci=["@media","@container","@supports","@document","@layer","@starting-style"],gr=e=>Ci.some(t=>e.indexOf(t)===0),Si=(e,t)=>e==="translate"||t.indexOf("translate")===0||ki.indexOf(t)>-1,Ti=(e,t)=>e==="rotate"||t.indexOf("rotate")===0||t.indexOf("skew")===0,Kn=e=>e!==32&&e!==9&&e!==10&&e!==13&&e!==59,mr=e=>e>=48&&e<=57||e===46,Ai=e=>e>=65&&e<=90||e>=97&&e<=122||e===45||e===95,Di=e=>e===37||e>=65&&e<=90||e>=97&&e<=122,Ii=e=>e===34||e===39,lr=e=>e===32||e===58||e===9,Pi=e=>e===59||e===10||e===125,br=e=>e===38||e===58||e===64||e===91,$i=e=>e===59||e===125,Kt=e=>e[e.length-1],le=[],ve=-1,I=-1,be=-1,mt=-1,Wt=-1,_e=-1,S=-1,yr=-1,Oe=-1,xe=-1,Wn=-1,ue=-1,ie=-1,de="",H="",we="&&",Be="",bt="",pr="",Ht="",N="",Yn="",_n="",yt="",Je="",T="",F="",Vt="",J=null,ur=!0,Qe=!1,Jn=!1,Hn=!0,Xn=!1,pe=0,Ze=!1,ze=[];function eo(e){return e.charCodeAt(0)===36?"--"+e.slice(1):dr[e]||e}function vr(e,t,n){return(e?";":"")+(Qe?t:zi(t))+":"+n+(yr===33?"important":"")}function zi(e){return ir[e]||(ir[e]=Hi(eo(e)))}function Oi(e){return Ze?e:e.replace(/,\s*[:[&]?/g,t=>br(t.charCodeAt(t.length-1))?",&"+Kt(t):",& ")}function Yt(e,t){if(ur&&(ye&&vt.head&&vt.head.appendChild(ye),ur=!1),ye&&ye.sheet)try{ye.sheet.insertRule(e,t??ye.sheet.cssRules.length)}catch(n){console.error("Insert rule error:",n,e)}}function to([e,...t],n,o=0,r=!1){if(ye||Qn(),Gn.has(e))return{...Gn.get(e),parent:n,args:t};Ze=r;let i={};ze=[],we="&&",_n=yt=Je=N=F=H="",le.length=pe=0,Oe=I=Wn=Wt=ie=ue=-1,J=Ze?{}:null,Xn=!1,Jn=!1,Hn=!0,T=e[0];for(let c=0;c<e.length;c++)if(J?wr(0,c===e.length-1):Ei(e,c),T=e[c+1],c<t.length){let s=e[c].slice(I);if(!r&&sr&&I>=0)de=Gt+Math.abs(pe).toString(31),i[Vt="--"+de+c]={property:H,fns:ze.slice(-1),unit:Zn(H,Kt(ze)),index:c,transform:ue!==-1&&Fi},F+=s+"var("+Vt+")"+(ue===-1?"":(ue=-1,")")),I=0;else if(e[c+1].trim().charCodeAt(0)===123)de=Gt+Math.abs(pe).toString(31),i[Vt=de+c]={index:c},le.push("["+Vt+"]");else{let l=s+Xo(t[c])+Zn(H,Kt(ze));F+=l;for(let p=0;p<l.length;p++)pe=Math.imul(31,pe)+l.charCodeAt(p)|0;Hn=!1,I=I>=0?0:sr?-1:0}}Xn&&(Ze?Object.entries(J).forEach(([c,s])=>{Yt(c.replace(/&\s+/g,"").replace(/{&$/,"")+"{"+s+"}")}):(de=Gt+Math.abs(pe).toString(31),Je+=(Je?" ":"")+de,pr=o&&"&".repeat(o+1),cr.has(de)||Object.entries(J).forEach(([c,s])=>{pr&&(c=c.replace("&","&".repeat(o+1))),Yt(c.replace(/&/g,"."+de)+"{"+s+"}")})));let a={name:_n,classes:Je,id:yt,args:t,vars:i,parent:n};return Hn?Gn.set(e,a):cr.add(de),a}function Ei(e,t){for(let n=0;n<=T.length;n++)if(S=T.charCodeAt(n),n<T.length&&(pe=Math.imul(31,pe)+S|0),Jn){if(Kn(S)){J={},wr(n++,t===e.length-1);break}}else!Kn(S)||n===T.length?(Je=(be!==-1?T.slice(be+1,n).replace(/\./g," "):"")+Je,yt===""&&(yt=mt!==-1?T.slice(mt,be===-1?n:be):""),_n=T.slice(0,yt?mt-1:be!==-1?be:n),mt=be=-1,Jn=!0):S===35?mt=n+1:be===-1&&S===46&&(be=n)}function qi(e){return he[e]||e}function wr(e,t){for(let n=e;n<=T.length;n++)yr=S,S=T.charCodeAt(n),n<T.length&&(pe=Math.imul(31,pe)+S|0),_e===-1&&I!==-1&&(Qe?$i(S):Pi(S)||t&&n===T.length)&&Ri(n),_e!==-1?_e===S&&T.charCodeAt(n-1)!==92&&(_e=-1):_e===-1&&Ii(S)?(_e=S,I===-1&&(I=n)):S===123?Li(n):S===125||t&&n===T.length?Mi():n!==T.length&&ve===-1&&Kn(S)?(ve=n,Wt=S):!H&&ve>=0&&lr(S)?(H=T.slice(ve,n),Qe=S===58):I===-1&&H&&!lr(S)?(I=Oe=n,mr(S)?xe=n:S===36&&(ie=n)):I!==-1?kr(n):(S===9||S===32)&&(Oe=n+1)}function Ri(e){xr(e),H==="@import"?Yt(H+" "+T.slice(I,e)+";",0):N+=vr(N,H,F+T.slice(I,e)),Xn=!0,ve=I=-1,Qe=!1,H=F=""}function xr(e){ue!==-1?ji(e):ie!==-1?Bi(e):xe!==-1&&Vi(e)}function Li(e){H==="animation"?(N&&(J[we]=N),bt=F+T.slice(I,e).trim(),Yn=F="",N=""):bt?(Ht=T.slice(ve,e).trim(),N=""):(N&&(J[we]=N),Be=(Wt===64?qi(H)+(Qe?":":" ")+F+(I===-1?"":T.slice(I,e)):T.slice(ve,e)).trim(),Be.indexOf(",")!==-1&&(Be=Oi(Be)),F=H="",le.push((br(Wt)?"":" ")+Be+(Be==="@font-face"&&++Wn?"/*"+Array(Wn).join(" ")+"*/":"")),we=Sr(le),N=J[we]||""),ve=I=-1,Qe=!1,H=""}function Mi(){if(Ht)Yn+=Ht+"{"+N+"}",Ht=N="";else if(bt)N=J[we]||"",de=Gt+Math.abs(pe).toString(31),Yt("@keyframes "+de+"{"+Yn+"}"),N+=vr(N,"animation",bt+" "+de),bt="";else{let e=le.map(n=>n.charCodeAt(0)===64&&gr(n)?"}":"").join(""),t=le.pop();le.length&&le[0].indexOf("@keyframes")===0?J[le[0]]=(J[le[0]]||"")+Be+"{"+N+"}":N&&(J[we]=N.trim()+e),t in he&&(J[he[t]+" &&"]=N.trim()),we=Sr(le),N=J[we]||""}ve=I=-1,H=""}function kr(e){if(mr(S)?xe===-1&&(xe=e):S===40?ie=-1:xr(e),S===40){let t=T.slice(Math.max(Oe,I),e);t in he&&(t=he[t]),F+=T.slice(I,e-t.length)+t+"(",ze.push(t),I=Oe=e+1}else S===41?ze.pop():S===9||S===32?Oe=e+1:S===36?ie=e:ie!==-1&&S===47&&(ue=e)}function Bi(e){T.charCodeAt(e)===47?ue=e:Ai(S)||(F=F+T.slice(I,ie)+"var(--"+T.slice(ie+1,e)+")",I=e,ie=-1)}function ji(e){F=F+T.slice(I,ie)+"color-mix(in oklab, var(--"+T.slice(ie+1,ue)+"), transparent "+(T.length===ue+1?"":Ni(T.slice(ue+1,e),T.charCodeAt(e))+")"),I=e+1,ie=xe=-1}function Ni(e,t){return ue=-1,100-(e*(t===37?1:100)).toFixed(0)+"%"}function Fi(e){return(100-(typeof e=="string"&&e.charCodeAt(e.length-1)===37?e.slice(0,-1):e*100)).toFixed(0)+"%"}function Vi(e){Di(S)?Ut.has(S)&&(F=F+T.slice(I,xe)+Ut.get(S)(T.slice(xe,e)),I=e+1):T.charCodeAt(Oe)!==35&&(F=F+T.slice(I,e)+Zn(H,Kt(ze)),I=e),xe=-1}function Zn(e,t=""){if(e=eo(e),e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return"";let n=e+","+t;return D.call(Fn,n)?Fn[n]:Fn[n]=t&&Si(e,t)?"px":Ti(e,t)?"deg":t?"":Gi(e)}function Cr(e,{property:t,fns:n,unit:o,transform:r}){if(O(e)&&(e=C.isServerSin&&!re(e)?"6iacvt":e()),r&&(e=r(e)),!e&&e!==0)return"";if(typeof e=="number")return e+o;if(typeof e!="string"&&(e=""+e),e.charCodeAt(0)===36)return"var(--"+e.slice(1)+")";T=e,F="",I=0,xe=Oe=-1,H=t,ze=n;for(let i=0;i<=e.length;i++)S=e.charCodeAt(i),kr(i);return F+e.slice(I)}function Sr(e){if(e.length===0)return"&&";let t=0;return e.reduce((n,o,r,i)=>{let a=o.charCodeAt(0);return a===64&&(o.indexOf("@font-face")===0&&r++,gr(o))?(t++,o+"{"+(r===i.length-1?"&&":"")+n):a===58&&o.startsWith(":root")?o+" "+n+(Ze||r-t?"":a===32?"&":"&&"):n+(Ze||r-t?"":a===32?"&":"&&")+o},"")}function Gi(e){if(e=eo(e),Ln(e)||D.call(Ft,e))return Ft[e];try{return Xe.style[e]="1px",Xe.style.setProperty(e,"1px"),Ft[e]=Xe.style[e].slice(-3)==="1px"?"px":""}catch{return Ft[e]=""}}function Hi(e){if(Un.indexOf(e)===-1){if(ar[e])return ar[e];e.indexOf("--")!==0&&C.sindevhmr&&C.console.error(e,"css property not found")}return e}var E=C.document,Tr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},co=new Map,so=Symbol("deferrable"),xt=Symbol("observable"),fe=Symbol("component"),Zt=Symbol("cycle"),lo=Symbol("event"),po=Symbol("$arrayEnd"),uo=Symbol("$arrayStart"),no=Symbol("class"),oo=Symbol("live"),Ar=Symbol("size"),kt=Symbol("life"),Ct=Symbol("attr"),Dr=Symbol("attrs"),Ne=Symbol("source"),Ir=Symbol("children"),et=Symbol("keyIndex"),ge=Symbol("keys"),zr=Symbol("key"),Ve=Symbol("s"),Ee=[],Xt,Qt,Or;function d(...e){let t=typeof e[0];return t==="string"?ho(Object.assign([e[0]],{raw:[]}))(...e.slice(1)):D.call(e[0],Ve)?e[0](...e.slice(1)):qr(ho,Rn(e[0])?Er(e):t==="function"?new ne(d.redrawing,e):new ne(d.redrawing,[e[1],e[0]]))}function ho(...e){return Rn(e[0])?qr(ho,Er(e,this)):Qi(e,this)}function Er(e,t){let n=t?t.nesting+1:0;return new ne(t&&t.inline,t&&t.component,to(e,t&&t.tag,n),n)}function qr(e,t){let n=e.bind(t);return n[Ve]=!0,n}d.redrawing=!1;d.sleep=(e,...t)=>new Promise(n=>setTimeout(n,e,...t));d.with=(e,t)=>e===void 0?e:t(e);d.isAttrs=Lr;d.is={server:d.isServer=C.isServerSin||!1};d.containers=[];d.redraw=en;d.redraw.force=ra;d.mount=ea;d.css=(...e)=>to(e,null,0,!0);d.css.alias=Rr;d.css.reset=Sa;d.css.unit=fr;d.css.load=hr;d.style=Qn;d.animate=Ji;d.animate.transform=_i;d.http=We;d.live=Ye;d.event=Ki;d.on=Yi;d.trust=Wi;d.route=gt(d,"",{location:C.location,query:Nn(d,C.location)});d.route.prefix="";d.window=C;d.scroll=!0;d.View=ne;d.error=d(e=>(console.error(e),()=>d`pre;all initial;d block;c white;bc #ff0033;p 8 12;br 6;overflow auto;fs 12`(d`code`("Unexpected Error: "+(e.message||e)))));d.jsx=d((e,t)=>t.slice(1));d.container=d((e,t,n)=>{return n.container={},()=>d``({...e,dom:[o].concat(e.dom)},d` display contents`(t));function o(r){r.style.containerType="inline-size";let i=r.firstElementChild;return i.setAttribute("data-sin-container",""),requestAnimationFrame(()=>{i.style.setProperty("transition-behavior","allow-discrete"),i.style.setProperty("transition",d.containers.map(c=>"--sin-container-"+c+" 0.001ms step-start").join(", ")),i.addEventListener("transitionrun",a)}),a(),()=>i.removeEventListener("transitionrun",a);function a(c){let s=getComputedStyle(i);for(let l of d.containers)n.container[l]=s.getPropertyValue("--sin-container-"+l)==="1";n.redraw()}}});var Ui=d(({strings:e,values:t=[]})=>{let n=E.createElement("div"),o=Array.isArray(e.raw)?[...e.raw]:Array.isArray(e)?[...e]:[e.trim()];o[0]=o[0].trimStart(),o[o.length-1]=o[o.length-1].trimEnd(),n.innerHTML=String.raw({raw:o},...t);let r=[...n.childNodes,E.createComment("trust")];return()=>r});function Rr(e,t){if(typeof e=="object")return Object.entries(e).forEach(([o,r])=>Rr(o,r));if(Array.isArray(t)?(he["@"+e]=t[0],he[t[0]]=t[1]):(he["@"+e]=t,he[e]=t),d.is.server)return;let n=(Array.isArray(t)?t[0]:t).split(" ")[0];if(n==="@media"){let o=null;Object.defineProperty(d.is,e,{get(){if(o!==null)return o;let r=C.matchMedia(t.slice(t.indexOf("(")));return r.addEventListener("change",i=>(o=i.matches,d.redraw())),o=r.matches}})}else n==="@container"&&(d.css([`@property --sin-container-${e}{syntax:'<number>';inherits:false;initial-value:0;}`]),d.css([`${t}{[data-sin-container]{--sin-container-${e}:1}}`]),d.containers.push(e))}function Ki(e){let t=new Set(e?[e]:[]);return n.observe=r,Object.defineProperty(n,"signal",{get:o}),n;function n(...i){return[...t].map(a=>a(...i))}function o(){let i=new AbortController;return r(()=>i.abort(),!0),i.signal}function r(i,a){let c=a?(...s)=>(t.delete(c),i(...s)):i;return t.add(c),()=>t.delete(c)}}function Wi(e,...t){return e&&e.raw||(e=Array.isArray(e)?e.map(n=>Mt(n)?"":n).join(""):Mt(e)?"":""+e),Ui({key:""+e,strings:e,values:t})}function Yi(e,t,n,o){return typeof o=="function"&&([n,o]=[o,n]),(...r)=>{let i=a=>vo(n,a,...r);return e.addEventListener(t,i,o),()=>e.removeEventListener(t,i,o)}}function _i(e){return function(...t){let[n]=t;O(e)&&(e=e(...t));let o=e.getBoundingClientRect(),r=n.getBoundingClientRect();return n.style.setProperty("transition","none"),n.style.setProperty("--transform",`translate(${o.left-r.left}px, ${o.top-r.top}px) scale(${o.width/r.width}, ${o.height/r.height})`),requestAnimationFrame(()=>n.style.removeProperty("transition")),d.animate(n)}}function Ji(e){return e.setAttribute("animate","entry"),requestAnimationFrame(()=>(e.offsetWidth,e.removeAttribute("animate"))),t=>t&&(e.setAttribute("animate","exit"),Promise.allSettled(e.getAnimations().map(n=>n instanceof C.CSSTransition&&n.finished)))}function Xi(e,t,n){e.addEventListener("click",o=>{if(!o.defaultPrevented&&(o.button===0||o.which===0||o.which===1)&&(!o.currentTarget.target||o.currentTarget.target==="_self")&&!Zi(o.currentTarget)&&!o.ctrlKey&&!o.metaKey&&!o.shiftKey&&!o.altKey){o.preventDefault();let r=e[Ct].state;n(e.getAttribute("href"),e[Ct])}})}function Zi(e){return d.route.prefix[0]!=="#"&&e.getAttribute("href")?.includes("#")&&e.origin===C.location.origin&&e.pathname===C.location.pathname&&e.search===C.location.search}function Qi(e,t){let n=Lr(e[0]);return new ne(t.inline,t.component,t.tag,t?t.nesting+1:0,n?e.shift():void 0,e.length===1&&Array.isArray(e[0])?e[0]:e)}function Lr(e){return e!==null&&typeof e=="object"&&!(e instanceof ne)&&!Array.isArray(e)&&!(e instanceof Date)&&!(e instanceof C.Node)&&!O(e.then)&&!(e instanceof String)&&!(e instanceof Number)}function ea(e,t,n={},o={}){if(O(t)){if(!e)throw new Error("The dom element you tried to mount to does not exist.")}else if(o=n||{},n=t||{},t=e,e=E.body,!e)throw new Error("document.body does not exist.");if(!(t instanceof ne)&&!D.call(t,Ve)&&(t=d(t)),D.call(o,"location")||(o.location=C.location),D.call(o,"error")||(o.error=d.error),d.is.server)return{view:t,attrs:n,context:o,unmount:$e};e[_o]=new Error().stack,d.scroll&&ta(o),oa(e.firstChild,o,n);let r={head:o.hydrating?$e:Mr,lang:d.live(E.documentElement.lang,a=>E.documentElement.lang=a),title:d.live(E.title,a=>E.title=a),status:$e,doctype:$e,headers:$e};o.doc=r,o.route=gt(d,"",{doc:o.doc,location:o.location,query:d.route.query});let i={view:t,attrs:n,context:o};return co.set(e,i),jr(i,e),{view:t,attrs:n,context:o,unmount:()=>co.delete(e)}}function ta(e){C.history.scrollRestoration="manual";let t=""in(history.state?.sinscroll||ht);t&&Ke(E.documentElement,history.state.sinscroll[""]);let n=e[Zt]={depth:0,callbacks:[],done:a=>n.depth!==-1&&(n.depth+=a)||(n.depth=0,i())},o;setTimeout(()=>{E.addEventListener("scroll",r,{passive:!0,capture:!0}),E.addEventListener("resize",r,{passive:!0,capture:!0}),t&&n.depth===0&&(n.depth=-1,Nt(E.documentElement,0,0))},200);function r(a){clearTimeout(o),o=setTimeout(na,100,a)}function i(){n.callbacks.forEach(a=>a()),Nt(E.documentElement,0,0)}}function na(e){let t=history.state?.sinscroll||{};e.type==="scroll"?Object.keys(t).forEach(o=>n(o?E.getElementById(o):E)):e.target===E?n(E):e.target.id&&n(e.target);function n(o){o&&(t[o===E?"":o.id]=[o.scrollLeft,o.scrollTop,o.scrollWidth,o.scrollHeight],d.route.state({sinscroll:t}))}}function Mr(e){if(Array.isArray(e))return e.forEach(Mr);let t=E.createElement(Bn(e.tag));for(let n in e.attrs)t.setAttribute(n,e.attrs[n]);e.children.length&&(t.innerHTML=e.children[0]),E.head.appendChild(t)}function oa(e,t,n){if(e){if(e.nodeType===8&&e.data==="h")e.remove(),t.hydrating=!0;else if(e.nodeType===1&&e.tagName==="SCRIPT"&&e.hasAttribute("h")){t.hydrating=!0;let a=JSON.parse(e.textContent);Object.assign(t,a.context),Object.assign(n,a.attrs)}}if(!t.hydrating)return;let o,r=[],i=E.createTreeWalker(E.body,NodeFilter.SHOW_COMMENT);for(;o=i.nextNode();)o.data===","&&r.push(o);r.forEach(a=>a.remove())}function en(){return Xt||(Or=C.requestAnimationFrame(Br),Xt=d.is.server?En:new Promise(e=>Qt=e)),Xt}function ra(){return new Promise(e=>{let t=Qt;Qt=t?()=>(e(),t()):e,C.cancelAnimationFrame(Or),Br()})}function Br(){Xt=null,co.forEach(jr),Qt()}function jr(e,t){bo();try{e.doms=St(t,Bt(e.view(e.attrs)),e.context,e.doms&&tt(e.doms.dom),e.doms&&e.doms.last)}catch(n){e.attrs.error=n,e.doms=St(t,Bt(e.context.error(n,e.attrs,[],e.context)),e.context,e.doms&&tt(e.doms.dom),e.doms&&e.doms.last)}finally{yo()}}function bo(){d.redrawing=!0}function yo(){Ee.forEach(e=>e()),Ee=[],d.redrawing=!1}function St(e,t,n,o,r=e.lastChild){let i=t[0]&&t[0].key!==void 0&&new Array(t.length),a=V(o,e.firstChild),c=a&&D.call(a,ge),s=V(r,null);i&&(i.rev=new Map)&&c?da(e,n,a[ge],t,i,s,a):Nr(e,n,t,i,a,s);let l=V(o,e.firstChild);return i&&(l[ge]=i),Ce(l,s&&tt(s)||e.lastChild)}function V(e,t){let n=e?e.nextSibling:t;for(;Pe.has(n);)n=n.nextSibling;return n}function tt(e,t){let n=e?e.previousSibling:t;for(;Pe.has(n);)n=n.previousSibling;return n}function wt(e,t,n,o){e[o]={dom:t,key:n},t[ge]=e,t[et]=o,e.rev.set(n,o)}function Nr(e,t,n,o,r,i=null){let a=0,c,s;for(;a<n.length;)(r===null||!Pe.has(r))&&(s=n[a],c=r!==i?ke(r,s,t,e):ke(null,s,t),r===i&&e.insertBefore(c.dom,i),o&&wt(o,c.first,s.key,a),r=c.last,a++),r!==null&&(r=V(r));for(;r&&r!==i;)r=Fe(r,e)}function da(e,t,n,o,r,i,a){let c=n.rev,s=new Set;for(let m of o){if(m&&m.key===void 0)return Nr(e,t,o,r,a,i);m&&s.add(m.key)}let l=n.length-1,p=o.length-1,h=n[l],u=o[p],f=-1;e:for(;;){if(u==null){u=o[--p];continue}for(;h&&!s.has(h.key);)Fe(h.dom,e),c.delete(h.key),h=n[--l];for(;h&&h.key===u.key;){if(i=ke(h.dom,u,t,e).first,wt(r,i,u.key,p),c.delete(u.key),p===0)break e;if(l===0){u=o[--p];break}h=n[--l],u=o[--p]}if(c.has(u.key)){if(f=c.get(u.key),f>p)f=ke(n[f].dom,u,t,e),ro(e,f,i),i=f.first,wt(r,i,u.key,p);else if(f!==p)f=ke(n[f].dom,u,t,e),ro(e,f,i),i=f.first,wt(r,i,u.key,p);else{h=n[--l];continue}if(c.delete(u.key),p===0)break;u=o[--p]}else{if(f=ke(null,u,t),ro(e,f,i),i=f.first,wt(r,i,u.key,p),p===0)break;u=o[--p]}}c.forEach(m=>Fe(n[m].dom,e))}function ro(e,{first:t,last:n},o){let r=t,i;do i=r,r=V(i);while(e.insertBefore(i,o)!==n)}function ke(e,t,n,o,r,i,a){return re(t)?aa(e,t,n,o,r,i):O(t)?ke(e,t(),n,o,r,i,a):t instanceof ne?Pr(e,t,n,o,r,i):t instanceof Promise?Pr(e,d(()=>t)(),n,o,r,i):Array.isArray(t)?Vr(e,t,n,o,i,a):t instanceof Node?ia(e,t,n):Gr(e,t,o,i,void 0,a)}function ia(e,t,n){return e&&n.hydrating?Ce(e):Ce(t)}function Pr(e,t,n,o,r,i){return t.component?Hr(e,t,n,o,r,i):sa(e,t,n,o,i)}function aa(e,t,n,o){if(e&&D.call(e,oo)&&e[oo].view===t)return i(t());let r=i(t());return Tt(e,t,i),r;function i(a){let c=d.redrawing,s=Ee;Ee=[],bo();let l=ke(e,a,n,o||e&&e.parentNode);return yo(),d.redrawing=c,Ee=s,e!==l.first&&Tt(l.first,t,i),e=l.first,l.first[oo]={view:t,doms:l},l}}function Ce(e,t=e,n=t){return{dom:e,first:t,last:n}}function ca(e){if(!e||e.nodeType!==8||e.data.charCodeAt(0)!==91)return;let t=parseInt(e.data.slice(1)),n=e,o;for(;t&&(n=V(n));)n.nodeType===8?(o=n.data.charCodeAt(0),t+=o===91?parseInt(n.data.slice(1))-1:o===97?1:-1):t--;return tn(e,n),n}function tn(e,t){(t||e)[uo]=e,e[po]=t}function Fr(e){return e&&D.call(e,po)?e[po]:ca(e)}function Vr(e,t,n,o,r,i){r&&e&&o&&(e=Vr(e,[],n,o).first);let a=Fr(e)||e,c=Gr(e,"["+t.length,o,!1,8,i);if(e!==c.dom&&(a=c.last),o){let s=V(a,null);St(o,t,n,c.first,a);let l=tt(s,o.lastChild);return a!==l&&tn(c.first,l),Ce(c.dom,c.first,l)}return o=new DocumentFragment,o.appendChild(c.dom),St(o,t,n,c.first,a),tn(c.first,o.lastChild),Ce(o,c.first,o.lastChild)}function Gr(e,t,n,o,r=Mt(t)?8:3,i=!1){let a=o||!e||e.nodeType!==r;return e&&D.call(e,fe)&&e[fe]!==i&&on(e),a&&Yr(e,e=r===8?E.createComment(t):E.createTextNode(t),n),!a&&e.data!==""+t&&(e.data=t),Ce(e)}function sa(e,t,n,o,r){let i=n.NS,a=Bn(t.tag),c=r===!0||e===null||pa(e,t,n,a);(t.attrs.xmlns||Tr[a])&&(n.NS=t.attrs.xmlns||Tr[a]),c&&Yr(e,e=ua(t,n,a),o),a==="foreignObject"&&(n.NS="http://www.w3.org/1999/xhtml");let s=t.children&&t.children.length;return ga(e,t,n,a),s?St(e,t.children,n):e[Ar]&&la(e.firstChild,e),e[Ar]=s,n.NS=i,D.call(t,"key")&&(e[zr]=t.key),Ce(e)}function la(e,t){for(;e;)e=Fe(e,t)}function pa(e,t,n,o){return e[zr]!==t.key&&!n.hydrating||(n.NS?e.nodeName!==o:e.nodeName.toLowerCase()!==(o.toLowerCase()||"div"))}function ua(e,t,n){let o=e.attrs.is;return t.NS&&t.NS!=="http://www.w3.org/1999/xhtml"?o?E.createElementNS(t.NS,n,{is:o}):E.createElementNS(t.NS,n):o?E.createElement(n||"div",{is:o}):E.createElement(n||"div")}var fo=class{constructor(t,n,o,r,i,a,c,s){this.init=t,this.key=void 0,this.view=n,this.error=o,this.caught=void 0,this.loading=r,this.context=i,this.hydrating=a,this.onremoves=void 0,this.promise=void 0,this.stateful=void 0,this.next=void 0,this.ignore=!1,this.recreate=!1,this.attrs=rn(c),this.children=rn(s)}},go=class{constructor(){this.xs=[],this.i=0,this.top=0,this.bottom=0,this.dom=null}changed(t,n){if(this.i>=this.xs.length)return!0;let o=this.xs[this.i],r=o.key!==t.key&&!n.hydrating||o.init&&o.init!==t.component[0];return r&&o.onremoves&&o.onremoves.forEach(i=>i()),r}add(t,n,o){let r=this.i,[i,a]=t.component;o&&this.xs[this.i]&&(t.attrs=this.xs[this.i].attrs,t.children=this.xs[this.i].children);let c=new fo(t.inline?!1:i,i,a&&a.error||n.error,a&&a.loading||n.loading,a&&a.context||n.context,n.hydrating,t.attrs,t.children),s=(f,m,g)=>{if(this.xs.indexOf(c)===-1)return;bo(),f instanceof Event&&(f.redraw=!1);let y=this.dom.first[ge],w=this.dom.first[et];this.i=this.bottom=r,Hr(this.dom.first,t,n,this.dom.first.parentNode,this,m,g,!0),D.call(this.dom.first,ge)||(this.dom.first[ge]=y,this.dom.first[et]=w),y&&(y[w].dom=this.dom.first),this.i=this.bottom=0,yo()},l=d.event(f=>d.redrawing?requestAnimationFrame(l):s(f,!1,!1)),p=d.event(f=>{c.onremoves&&(c.onremoves.forEach(m=>m()),c.onremoves=void 0),s(f,!0)}),h=d.event(f=>{c.onremoves&&(c.onremoves.forEach(m=>m()),c.onremoves=void 0),s(f,!0,!0),c=this.xs[r]});c.context=Object.create(c.context||n,{hydrating:{value:n.hydrating,writable:!0},onremove:{value:f=>{_t(c,f)}},ignore:{value:f=>{c.ignore=f}},refresh:{value:h},redraw:{value:l},reload:{value:p}}),c.attrs[Ne]=t.attrs,c.children[Ne]=t.children;let u=Ur(!0,c,t,c.attrs,c.children);return re(t.attrs.reload)&&_t(c,t.attrs.reload.observe(p)),re(t.attrs.redraw)&&_t(c,t.attrs.redraw.observe(l)),re(t.attrs.refresh)&&_t(c,t.attrs.refresh.observe(h)),c.promise=u&&O(u.then)&&u,c.stateful=c.promise||O(u)&&!u[Ve],c.view=c.promise?o?this.xs[this.i].view:c.loading:u,o||this.cut(),this.top=this.i,this.xs[this.i++]=c}next(t){let n=this.i<this.xs.length&&this.xs[this.top=this.i++];return n.attrs[Ne]=t.attrs,n.children[Ne]=t.children,n}pop(){return--this.i!==this.bottom?!1:(this.cut(this.top+1),!0)}cut(t=this.i){for(let n=t;n<this.xs.length;n++)this.xs[n].onremoves&&this.xs[n].onremoves.forEach(o=>o());this.xs.length=t}};function _t(e,t){e.onremoves?e.onremoves.add(t):e.onremoves=new Set([t])}function ha(e){let t="/"+e.data,n=V(e);for(;n&&(n.nodeType!==8||n.data!==t);)n=V(n);let o=Ce(V(e),V(e),tt(n));if(D.call(n,uo)&&tn(n[uo],tt(n)),D.call(e,fe)&&(o.first[fe]=e[fe]),D.call(e,ge)){let r=e[ge],i=e[et];o.first[ge]=r,o.first[et]=i,r[e[et]].dom=o.first}return e.remove(),n.remove(),o}function fa(e){let t="/"+e.data,n=V(e);for(;n&&(n.nodeType!==8||n.data!==t);)n=V(n);return Ce(e,e,n)}function Hr(e,t,n,o,r=e&&e[fe]||new go,i=r.changed(t,n),a=!1,c=!1){let s=i?r.add(t,n,a):r.next(t);if(!i&&s.ignore&&!c)return r.pop(),r.dom;t.key!==void 0&&(i||n.hydrating)&&(s.key=t.key);let l=s.promise&&e&&e.nodeType===8&&e.data.charCodeAt(0)===97;if(l)s.next=fa(e);else{let h=Ur(i,s,a?s.view:t,s.attrs,s.children);h&&D.call(h,Ve)&&(h=h(t.attrs,t.children,s.context)),s.next=ke(e,!s.caught&&!s.promise&&h instanceof ne||a?tr(h,t):h,s.context,o,r,(i||s.recreate)&&!s.hydrating&&!a?!0:void 0,r),s.hydrating&&(s.hydrating=s.context.hydrating=!1),s.recreate&&(s.recreate=!1)}if(i&&s.promise){let h=r.i-1;n[Zt].done(1),s.promise.then(u=>s.view=u&&D.call(u,"default")?u.default:u).catch(u=>{s.caught=u,s.view=Kr(s,t,u)}).then(()=>D.call(s.next.first,fe)&&r.xs[h]===s&&(l&&(r.dom=ha(e)),n.hydrating=!1,s.recreate=!a,s.promise=!1,s.context.redraw(),n[Zt].done(-1)))}let p=e!==s.next.first;return r.pop()&&(p||i)&&(r.dom=s.next,s.next.first[fe]=r),s.next}function Ur(e,t,n,o,r){try{return t.stateful||e?O(t.view)&&!t.view[Ve]?t.view(o,r,t.context):t.view:n.component[0](o,r,t.context)}catch(i){return Kr(t,n,i)}}function Kr(e,t,n){return D.call(e.error,Ve)?e.error().component[0](n,t.attrs,t.children,e.context):e.error(n,t.attrs,t.children,e.context)}function ga(e,t,n,o){let r=t.tag,i,a=e[Ct]||n.hydrating&&ma(e)||void 0,c=!a;if(c&&D.call(t.attrs,"id")===!1){let l=Qo(t.tag);l&&(e.id=l)}io(e,t),c&&Tt(e,t.attrs.class,()=>io(e,t)),c&&Tt(e,t.attrs.className,()=>io(e,t)),t.attrs.type!=null&&nn(e,"type",t.attrs.type);for(let l in t.attrs)Mn(l)?l==="deferrable"&&(e[so]=t.attrs[l]):(!a||a[l]!==t.attrs[l])&&je(e,t.attrs,l,a&&a[l],t.attrs[l],c,n);if(D.call(t.attrs,"value"))if(!a&&o==="input"&&e.value!==""+t.attrs.value){let l,p;e===E.activeElement&&(l=e.selectionStart,p=e.selectionEnd),je(e,t.attrs,"value",e.value,t.attrs.value,c,n),e===E.activeElement&&(e.selectionStart!==l||e.selectionEnd!==p)&&e.setSelectionRange(l,p)}else(!a||a.value!==t.attrs.value)&&je(e,t.attrs,"value",a&&a.value,t.attrs.value,c,n);if(o==="option"&&!c&&D.call(t.attrs,"selected")&&e.selected!==t.attrs.selected&&je(e,t.attrs,"selected",e.selected,t.attrs.selected,c,n),D.call(t.attrs,"srcset")&&a?.srcset!==t.attrs.srcset&&je(e,t.attrs,"srcset",a?.srcset,t.attrs.srcset,c,n),D.call(t.attrs,"src")&&a?.src!==t.attrs.src&&je(e,t.attrs,"src",a?.src,t.attrs.src,c,n),D.call(t.attrs,"href")&&(n.hydrating||!a||a.href!==t.attrs.href)){i=t.attrs.href;let l=!String(i).match(/^([a-z]+:|\/\/)/)&&!t.attrs.target&&!t.attrs.download;l&&(i=ft(t.attrs.href)),je(e,t.attrs,"href",a&&a.href,i,c,n),i&&l&&(t.attrs.href=d.route.prefix+i,Xi(e,t.attrs,n.route))}if(a)for(let l in a)D.call(t.attrs,l)===!1&&(qn(l)?Wr(e,l):Mn(l)?l==="deferrable"&&(e[so]=!1):e.removeAttribute(l));ya(e,t.attrs.data,a&&a.data);let s=ba(e,t.attrs.style,a&&a.style);if(r)for($r(e,r.vars,r.args,c||n.hydrating,s);r=r.parent;)$r(e,r.vars,r.args,c||n.hydrating,s);t.attrs.dom&&(c||n.hydrating?va(e,e[Dr]=rn(t.attrs),e[Ir]=rn(t.children),n,t.attrs.dom):(e[Dr][Ne]=t.attrs,e[Ir][Ne]=t.children)),e[Ct]=t.attrs,c&&e.id&&e.id in(history.state?.sinscroll||ht)&&Ee.push(()=>Ke(e,history.state?.sinscroll?.[e.id],n[Zt]))}function ma(e){if(!e||!e.hasAttributes())return;let t={};for(let n of e.attributes)t[n.name]=n.value||!0;return t}function ba(e,t,n){if(t==null)return t!==n&&(e.style.cssText="",!0);if(typeof t!="object")return t!==n&&(e.style.cssText=t,!0);if(n==null||typeof n!="object"){e.style.cssText="";for(let o in t){let r=t[o];r!=null&&e.style.setProperty(jt(o),r+"")}return!0}for(let o in t){let r=t[o];r!=null&&(!n||(r=r+"")!=n[o]+"")&&e.style.setProperty(jt(o),r)}for(let o in n)n[o]!=null&&t[o]==null&&e.style.removeProperty(jt(o));return!0}function ya(e,t,n){for(let o in t){let r=t[o];r!=null&&(!n||(r=r+"")!=n[o]+"")&&(e.dataset[o]=r)}for(let o in n)n[o]!=null&&t[o]==null&&delete e.dataset[o]}function Tt(e,t,n){if(!re(t))return;let o=D.call(e,xt),r=o?e[xt]:new Set;o||(e[xt]=r),r.add(t.observe(n))}function io(e,t){let n=er(t),o=D.call(e,no)&&e[no]||"";if(n!==o){e[no]=n;for(let r of o&&o.split(" "))r&&e.classList.remove(r);for(let r of n&&n.split(" "))r&&e.classList.add(r)}}function $r(e,t,n,o,r){for(let i in t){let a=t[i],c=n[a.index];mo(e,i,c,a,o,r)}}function mo(e,t,n,o,r,i,a){if(re(n)){r&&n.observe(c=>ao(e,t,c,o)),(r||i)&&mo(e,t,n(),o,r,r);return}if(O(n))return En.then(()=>mo(e,t,n(e),o,r,i,a));ao(e,t,n,o),a&&Ee.push(()=>ao(e,t,n,o))}function ao(e,t,n,o){D.call(o,"property")?e.style.setProperty(t,Cr(n,o)):n?e.setAttribute(t,""):e.removeAttribute(t)}function va(e,t,n,o,r){Ee.push(()=>{Bt(r).forEach(async i=>{let a=O(i)&&i(e,t,n,o);a&&O(a.then)&&(a=await a,en()),O(a)&&(D.call(e,kt)?e[kt].push(a):e[kt]=[a])},[])})}function je(e,t,n,o,r,i,a){if(o===r)return;let c=qn(n);c&&typeof o==typeof r||(c?r?xa(e,t,n,a):Wr(e,n):(nn(e,n,r),i&&Tt(e,r,s=>nn(e,n,s))))}function nn(e,t,n){if(n==null&&(n=""),O(n))return nn(e,t,n());wa(e,t)?e[t]=n:!n&&n!==0?e.removeAttribute(t):e.setAttribute(t,n===!0?"":n)}function wa(e,t){return!(e instanceof SVGElement)&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="width"&&t!=="height"&&t in e}function Wr(e,t){e.removeEventListener(t.slice(2),e[lo])}function xa(e,t,n,o){e.addEventListener(n.slice(2),e[lo]||(e[lo]=ka(e,t,o)))}function ka(e,...t){return{handleEvent:n=>vo(e[Ct]["on"+n.type],n,e,...t)}}function vo(e,t,...n){if(Array.isArray(e))return e.forEach(r=>vo(r,t,...n));let o=O(e)?e.call(t.currentTarget,t,...n):O(e.handleEvent)&&e.handleEvent(t,...n);if(t.redraw===!1){delete t.redraw;return}!re(o)&&!re(e)&&en(),o&&O(o.then)&&o.then(en)}function Yr(e,t,n){if(n)return e&&(n.insertBefore(t,e),Fe(e,n)),t}function Ca(e,t,n,o,r){let i=Fr(e);if(!i||e===i)return V(e);let a=V(i);if(e=V(e),!e)return a;do e=Fe(e,t,n,o,r);while(e&&e!==a);return a}function Jt(e,t){on(t),e.removeChild(t)}function on(e){D.call(e,fe)&&e[fe].cut(),D.call(e,xt)&&e[xt].forEach(t=>t())}function Fe(e,t,n=!0,o=[],r=!1){let i=e.nextSibling;if(Pe.has(e))return i;if(e.nodeType===8)if(e.data.charCodeAt(0)===97){if(i=V(e),Jt(t,e),!i)return i;e=i,i=V(e)}else e.data.charCodeAt(0)===91&&(i=Ca(e,t,n,o,r));if(e.nodeType!==1)return n?Jt(t,e):on(e),i;if(D.call(e,kt))for(let c of e[kt])try{let s=c(r||n);(r||n)&&s&&O(s.then)&&o.push(s)}catch(s){console.error(s)}!r&&(r=e[so]||!1);let a=e.firstChild;for(;a;)Fe(a,e,!1,o,r),a=V(a);return n?o.length===0?Jt(t,e):(Pe.add(e),Promise.all(o.map(c=>c.catch(console.error))).then(()=>Jt(t,e))):on(e),i}function Sa(e=[],...t){return d.css`
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
  `,d.css`
    img,video{background-repeat no-repeat;background-size cover;object-fit cover;shape-margin 0.75rem}
    button,[type='button'],[type='reset'],[type='submit']{-webkit-appearance button;bc transparent;bi none}
    button,input,optgroup,select,textarea{c inherit}
    :target{scroll-margin-block 5ex}
  `,d.css(e,...t)}function rn(e){return new Proxy(e,{get:(t,n)=>e[n],set:(t,n,o)=>n===Ne&&e!==o?e=o:!0})}var qe=Symbol("sinewy-menu");var ed=Symbol("dropdown-indicator"),td=Symbol("dropdown-radio-group"),_r=Symbol("sinewy-ids"),nd="--sinewy-dropdown-fit-block",od="--sinewy-dropdown-fit-inline",Ta=['[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]'].join(",");d.css([`
  @position-try ${nd} {
    align-self: stretch;
    height: stretch;
  }

  @position-try ${od} {
    justify-self: stretch;
    width: stretch;
  }
`]);var Z=d(({id:e,defaultOpen:t=!1},[],n)=>{let o=e||ld(n),r=ln(t,n),i={name:"Dropdown",prefix:"dropdown",id:o,triggerId:o+"-trigger",contentId:o+"-content",anchorName:pd(o),trigger:void 0,content:void 0,open:!1,renderOpen:t,openState:r,openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!0,dir:"ltr",openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,pointerGrace:void 0,onbeforeopenchange:void 0,onopenchange:void 0},a=Object.create(n);return a[qe]=i,i.root=i,n.onremove(()=>{clearTimeout(i.searchTimer),cancelAnimationFrame(i.reconcileFrame)}),({loop:c=!0,dir:s="ltr",open:l,bind:p,onbeforeopenchange:h,onopenchange:u},f,m)=>(i.loop=c,i.dir=s,i.controlledOpen=l,i.openBind=p,i.onbeforeopenchange=h,i.onopenchange=u,pn(r,p,m),i.renderOpen=nt(i),cn(i),d({context:a},()=>f))});Z.Trigger=d(({as:e,disabled:t=!1,dom:n,onclick:o,onkeydown:r,...i},a,c)=>{let s=Se(c,"trigger");return ud(e,"button",{...i,id:s.triggerId,type:e?i.type:i.type||"button",disabled:t,popovertarget:s.contentId,popovertargetaction:"toggle","aria-haspopup":"menu","aria-controls":s.contentId,"aria-expanded":String(s.renderOpen),"aria-disabled":String(t),style:{"anchor-name":s.anchorName,...i.style},data:{...i.data,disabled:t?"":null,state:s.renderOpen?"open":"closed"},dom:Ao([l=>xo(s,"trigger",l),...fn(n)]),onclick:(l,p,h,u)=>{if(t){l.preventDefault();return}let f="popoverTargetElement"in p;if(X(o,l,p,h,u),l.defaultPrevented||f){f&&!o&&(l.redraw=!1);return}l.preventDefault(),s.content.matches(":popover-open")?Re(s):s.content.showPopover({source:p})},onkeydown:(l,p,h,u)=>{if(t){l.preventDefault();return}X(r,l,p,h,u),!(l.defaultPrevented||!["Enter"," ","ArrowDown","ArrowUp"].includes(l.key))&&(l.preventDefault(),s.openFocus=l.key==="ArrowUp"?"last":"first",s.content.matches(":popover-open")?sn(s,s.openFocus):s.content.showPopover())}},a)});Z.Content=d(({},[],e)=>{let t=Se(e,"content");return(n,o,r)=>rd(t,n,o,r)});Z.Item=d(({},[],e)=>{let t=Se(e,"item");return(n,o,r)=>an(t,n,o,r)});Z.Checkbox=d(({defaultChecked:e=!1},[],t)=>{let n=Se(t,"checkbox"),o=ln(e,t),r=d.live(Xr(e));return({checked:i,defaultChecked:a,bind:c,oncheckedchange:s,...l},p,h)=>{pn(o,c,h);let u=Xr(So(o,c,i));r(u);let f=cd(h,r);return an(n,{...l,role:"menuitemcheckbox","aria-checked":u==="indeterminate"?"mixed":String(u),data:{...l.data,state:To(u)},onactivate:m=>{let g=u==="indeterminate"||!u;ad(o,c,i,g,h),s&&s(g,m)}},d({context:f},()=>p),h)}});Z.RadioGroup=d(({defaultValue:e},[],t)=>{Se(t,"radioGroup");let n=ln(e,t),o={},r=Object.create(t);return r[td]=o,({value:i,defaultValue:a,bind:c,onvaluechange:s,ariaLabel:l,...p},h,u)=>(pn(n,c,u),Object.assign(o,{local:n,bind:c,controlled:i,onvaluechange:s,context:u}),d`div`({...p,role:"group","aria-label":p["aria-label"]||l},d({context:r},()=>h)))});Z.Radio=d(({},[],e)=>{let t=Se(e,"radio"),n=e[td],o=d.live(!1);if(!n)throw new Error(t.name+".Radio must be used inside "+t.name+".RadioGroup");return({value:r,...i},a,c)=>{let l=So(n.local,n.bind,n.controlled)===r;o(l);let p=cd(c,o);return an(t,{...i,role:"menuitemradio","aria-checked":String(l),data:{...i.data,state:To(l)},onactivate:h=>{l||(ad(n.local,n.bind,n.controlled,r,n.context),n.onvaluechange&&n.onvaluechange(r,h))}},d({context:p},()=>a),c)}});Z.Sub=d(({id:e,defaultOpen:t=!1},[],n)=>{let o=Se(n,"sub"),r=e||ld(n,o.prefix),i=ln(t,n),a={name:o.name,prefix:o.prefix,id:r,triggerId:r+"-trigger",contentId:r+"-content",anchorName:pd(r),trigger:void 0,content:void 0,open:!1,renderOpen:t,openState:i,openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!0,dir:o.dir,openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,openTimer:void 0,closeTimer:void 0,pointerGrace:void 0,openDelay:100,closeDelay:300,onbeforeopenchange:void 0,onopenchange:void 0,parent:o,root:o.root},c=Object.create(n);return c[qe]=a,n.onremove(()=>{clearTimeout(a.searchTimer),clearTimeout(a.openTimer),clearTimeout(a.closeTimer),cancelAnimationFrame(a.reconcileFrame)}),({loop:s=!0,dir:l=o.dir,open:p,bind:h,onbeforeopenchange:u,onopenchange:f,openDelay:m=100,closeDelay:g=300},y,w)=>(a.loop=s,a.dir=l,a.openDelay=m,a.closeDelay=g,a.controlledOpen=p,a.openBind=h,a.onbeforeopenchange=u,a.onopenchange=f,pn(i,h,w),a.renderOpen=nt(a),cn(a),d({context:c},()=>y))});Z.SubTrigger=d(({as:e,disabled:t=!1,dom:n,onclick:o,onkeydown:r,onpointermove:i,onpointerleave:a,...c},s,l)=>{let p=Se(l,"subtrigger");return an(p.parent,{...c,as:e,disabled:t,id:p.triggerId,style:{"anchor-name":p.anchorName,...c.style},dom:Ao([h=>xo(p,"trigger",h),...fn(n)]),popovertarget:p.contentId,popovertargetaction:"toggle","aria-haspopup":"menu","aria-controls":p.contentId,"aria-expanded":String(p.renderOpen),data:{...c.data,state:p.renderOpen?"open":"closed"},onclick:(h,u,f,m)=>{Zr(p);let g="popoverTargetElement"in u;if(X(o,h,u,f,m),h.defaultPrevented||t||g){g&&!o&&(h.redraw=!1);return}h.preventDefault(),p.content.matches(":popover-open")?Re(p):p.content.showPopover({source:u})},onkeydown:(h,u,f,m)=>{Zr(p),X(r,h,u,f,m),!(h.defaultPrevented||t||h.key!==Ra(p))&&(h.preventDefault(),p.openFocus="first",p.content.matches(":popover-open")?sn(p,"first"):p.content.showPopover())},onpointermove:(h,u,f,m)=>{X(i,h,u,f,m),!(h.defaultPrevented||t||p.open||p.openTimer)&&(clearTimeout(p.closeTimer),p.openTimer=setTimeout(()=>{p.openTimer=void 0,p.content.matches(":popover-open")||(p.openFocus="none",p.content.showPopover({source:u}))},p.openDelay))},onpointerleave:(h,u,f,m)=>{X(a,h,u,f,m),h.defaultPrevented||($a(p,h),sd(p))},closeOnSelect:!1,invokeSelect:!1},s,l)});Z.SubContent=d(({},[],e)=>{let t=Se(e,"subcontent");if(!t.parent)throw new Error(t.name+".SubContent must be used inside "+t.name+".Sub");return({onpointerenter:n,onpointerleave:o,...r},i,a)=>rd(t,{...r,onpointerenter:(c,s,l,p)=>{clearTimeout(t.closeTimer),t.closeTimer=void 0,hn(t.parent,t),X(n,c,s,l,p)},onpointerleave:(c,s,l,p)=>{X(o,c,s,l,p),c.defaultPrevented||sd(t)}},i,a)});Z.Indicator=d(({},[],e)=>{let t=e[qe],n=e[ed];if(!n)throw new Error((t?t.name:"Dropdown")+".Indicator must be used inside a Checkbox or Radio");let o=n.selection.observe(e.redraw);return e.onremove(o),({forceMount:r=!1,...i},a)=>{let c=n.selection();return r||c!==!1?d`span`({...i,"aria-hidden":i["aria-hidden"]==null?"true":i["aria-hidden"],data:{...i.data,state:To(c)}},a):null}});function an(e,{as:t,disabled:n=!1,dom:o,onclick:r,onfocus:i,onpointermove:a,onselect:c,onactivate:s,closeOnSelect:l=!0,invokeSelect:p=!0,role:h="menuitem",textValue:u,...f},m,g){return ud(t,"button",{...f,type:t?f.type:f.type||"button",role:h,tabIndex:-1,"aria-disabled":String(n),data:{...f.data,disabled:n?"":null,textValue:u||null},dom:o,onclick:(y,w,k,v)=>{if(n){y.preventDefault();return}X(r,y,w,k,v),!y.defaultPrevented&&(p&&c&&c(y,w),s&&s(y,w),l&&!y.defaultPrevented&&Re(e.root))},onfocus:(y,w,k,v)=>{X(i,y,w,k,v),y.defaultPrevented||dd(e,w)},onpointermove:(y,w,k,v)=>{X(a,y,w,k,v),n||y.defaultPrevented||za(e,y)||dn(e,w)}},m)}Z.Group=d(({ariaLabel:e,...t},n)=>d`div`({...t,role:"group","aria-label":t["aria-label"]||e},n));Z.Label=d((e,t)=>d`div`(e,t));Z.Separator=d((e,t)=>d`div`({...e,role:"separator"},t));var q=Z;function Aa(e,t){xo(e,"content",t),cn(e)}function xo(e,t,n){import.meta.dev&&e[t]&&e[t]!==n&&e[t].isConnected&&console.warn(e.name+"."+id(t)+" should only be rendered once per "+e.name+" state scope"),e[t]=n}function rd(e,{dom:t,onbeforetoggle:n,ontoggle:o,onkeydown:r,side:i=e.parent?"right":"bottom",align:a="start",offset:c=0,alignOffset:s=0,avoidCollisions:l=!0,collisionStrategy:p="preferred",loop:h=e.loop,...u},f,m){return d`div
    position fixed
    inset auto
    margin 0
  `({...u,id:e.contentId,popover:"auto",role:"menu",dir:u.dir||e.dir,style:{"position-anchor":e.anchorName,...Ea(i,a,c,s,l,p,e.dir),...u.style},"aria-labelledby":u["aria-labelledby"]||e.triggerId,data:{...u.data,state:e.renderOpen?"open":"closed",side:i,align:a},dom:Ao([g=>Aa(e,g),...fn(t)]),onbeforetoggle:e.onbeforeopenchange||n?(g,y,w,k)=>{let v=g.newState==="open";e.onbeforeopenchange&&e.onbeforeopenchange(v,g),X(n,g,y,w,k)}:void 0,ontoggle:(g,y,w,k)=>{let v=g.newState==="open",x=e.reconcileTo===v;if(x&&(e.reconcileTo=void 0),e.open=v,e.renderOpen=nt(e),e.trigger&&(e.trigger.ariaExpanded=String(v)),e.trigger&&(e.trigger.dataset.state=v?"open":"closed"),y.dataset.state=v?"open":"closed",X(o,g,y,w,k),x||(un(e.openBind)?e.openBind(v):e.controlledOpen===void 0&&(e.openState.value=v),e.onopenchange&&e.onopenchange(v,g),e.renderOpen=nt(e),cn(e)),v)Jr(e),e.openFocus!=="none"&&sn(e,e.openFocus),e.openFocus="first";else{e.parent&&hn(e.parent,e),Jr(e),Ia(e);let b=e.restoreFocus;e.restoreFocus=!0,requestAnimationFrame(()=>{b&&!e.open&&(y.contains(document.activeElement)||document.activeElement===document.body)&&e.trigger&&e.trigger.focus()})}},onkeydown:(g,y,w,k)=>{if(X(r,g,y,w,k),!g.defaultPrevented){if(e.parent&&g.key===La(e)){g.preventDefault(),g.stopPropagation(),Re(e);return}if(e.parent&&g.key==="Escape"){g.preventDefault(),g.stopPropagation(),Re(e);return}Da(e,g,h)}}},f)}function nt(e){return!!So(e.openState,e.openBind,e.controlledOpen)}function cn(e){if(!e.content)return;let t=nt(e),n=e.content.matches(":popover-open");t!==n&&(cancelAnimationFrame(e.reconcileFrame),e.reconcileFrame=requestAnimationFrame(()=>{if(!e.content||!e.content.isConnected)return;let o=nt(e),r=e.content.matches(":popover-open");o!==r&&(e.reconcileTo=o,o?e.content.showPopover():e.content.hidePopover())}))}function Da(e,t,n){let o=ko(e),r=o.indexOf(document.activeElement);if(t.key==="Tab"){e.root.restoreFocus=!1,Re(e.root,!1);return}if(t.key==="Escape"){t.preventDefault(),Re(e);return}if(t.key==="Enter"||t.key===" "){if(r===-1)return;t.preventDefault(),o[r].click();return}if(t.key==="ArrowDown"||t.key==="ArrowUp"){if(t.preventDefault(),!o.length)return;let l=t.key==="ArrowDown"?1:-1,p=r===-1?l===1?0:o.length-1:r+l;n?p=(p+o.length)%o.length:p=Math.max(0,Math.min(o.length-1,p)),dn(e,o[p]);return}if(t.key==="Home"||t.key==="End"){t.preventDefault(),sn(e,t.key==="Home"?"first":"last");return}if(t.key.length!==1||t.key===" "||t.metaKey||t.ctrlKey||t.altKey)return;t.preventDefault(),clearTimeout(e.searchTimer),e.search+=t.key.toLocaleLowerCase(),e.searchTimer=setTimeout(()=>e.search="",500);let a=Array.from(e.search).every(l=>l===e.search[0])?e.search[0]:e.search,s=o.slice(r+1).concat(o.slice(0,r+1)).find(l=>Pa(l).startsWith(a));s&&dn(e,s)}function Re(e,t=!0){e.restoreFocus=t,e.parent&&hn(e.parent,e),e.content.matches(":popover-open")&&e.content.hidePopover()}function ko(e){return Co(e).filter(t=>t.getAttribute("aria-disabled")!=="true")}function Co(e){return e.content?Array.from(e.content.querySelectorAll(Ta)).filter(t=>t.closest('[role="menu"]')===e.content):[]}function sn(e,t){let n=ko(e);dn(e,t==="last"?n.at(-1):n[0])}function dn(e,t){t&&(ko(e).forEach(n=>n.tabIndex=n===t?0:-1),dd(e,t),t.focus({preventScroll:!0}))}function dd(e,t){Co(e).forEach(n=>{n.toggleAttribute("data-highlighted",n===t)}),e.activeItem=t}function Ia(e){Co(e).forEach(t=>t.removeAttribute("data-highlighted")),e.activeItem=void 0}function Jr(e){clearTimeout(e.searchTimer),e.search=""}function Pa(e){return(e.dataset.textValue||e.textContent).trim().toLocaleLowerCase()}function id(e){return{trigger:"Trigger",content:"Content",item:"Item",checkbox:"Checkbox",radioGroup:"RadioGroup",radio:"Radio",indicator:"Indicator",group:"Group",label:"Label",separator:"Separator",sub:"Sub",subtrigger:"SubTrigger",subcontent:"SubContent"}[e]||e}function Se(e,t){let n=e[qe];if(!n)throw new Error(id(t)+" must be used inside a menu root");return n}function ln(e,t){let n={value:e,binding:void 0,unobserve:void 0};return t.onremove(()=>n.unobserve&&n.unobserve()),n}function pn(e,t,n){e.binding!==t&&(e.unobserve&&e.unobserve(),e.binding=t,e.unobserve=un(t)?t.observe(n.redraw):void 0)}function So(e,t,n){return un(t)?t():n===void 0?e.value:n}function ad(e,t,n,o,r){un(t)?t(o):n===void 0&&(e.value=o,r.redraw())}function cd(e,t){let n=Object.create(e);return n[ed]={selection:t},n}function Xr(e){return e==="indeterminate"?e:!!e}function To(e){return e==="indeterminate"?e:e?"checked":"unchecked"}function un(e){return typeof e=="function"&&typeof e.observe=="function"}function sd(e){clearTimeout(e.openTimer),clearTimeout(e.closeTimer),e.openTimer=void 0,e.closeTimer=setTimeout(()=>{e.closeTimer=void 0,e.content.matches(":popover-open")&&Re(e)},e.closeDelay)}function Zr(e){clearTimeout(e.openTimer),clearTimeout(e.closeTimer),e.openTimer=e.closeTimer=void 0,hn(e.parent,e)}function $a(e,t){if(!e.parent||!e.content||!e.content.matches(":popover-open"))return;let n=e.content.getBoundingClientRect(),o={x:t.clientX,y:t.clientY},r=5,a=[{distance:Math.abs(o.x-n.left),points:[{x:n.left,y:n.top-r},{x:n.left,y:n.bottom+r}]},{distance:Math.abs(o.x-n.right),points:[{x:n.right,y:n.top-r},{x:n.right,y:n.bottom+r}]},{distance:Math.abs(o.y-n.top),points:[{x:n.left-r,y:n.top},{x:n.right+r,y:n.top}]},{distance:Math.abs(o.y-n.bottom),points:[{x:n.left-r,y:n.bottom},{x:n.right+r,y:n.bottom}]}].sort((c,s)=>c.distance-s.distance)[0];e.parent.pointerGrace={owner:e,triangle:[o,...a.points]}}function za(e,t){let n=e.pointerGrace;if(!n)return!1;if(!n.owner.content||!n.owner.content.matches(":popover-open"))return e.pointerGrace=void 0,!1;let o=Oa({x:t.clientX,y:t.clientY},...n.triangle);return o||(e.pointerGrace=void 0),o}function hn(e,t){e&&(!t||e.pointerGrace&&e.pointerGrace.owner===t)&&(e.pointerGrace=void 0)}function Oa(e,t,n,o){let r=wo(e,t,n),i=wo(e,n,o),a=wo(e,o,t),c=r<0||i<0||a<0,s=r>0||i>0||a>0;return!(c&&s)}function wo(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function Ea(e,t,n,o,r,i,a){let c=e==="top"||e==="bottom",s={top:"block-start",right:"inline-end",bottom:"block-end",left:"inline-start"}[e]||"block-end",l=t==="center"?"":" span-"+(c?"inline-":"block-")+(t==="end"?"start":"end"),p={top:"margin-block-end",right:"margin-inline-start",bottom:"margin-block-start",left:"margin-inline-end"}[e]||"margin-block-start",h=c?"margin-inline-start":"margin-block-start",u=c?nd:od,f=["flip-block","flip-inline","flip-block flip-inline",u,u+" flip-block",u+" flip-inline",u+" flip-block flip-inline"].join(", ");return{"position-area":s+l,"position-try-fallbacks":r?f:"none","position-try-order":r&&i==="most-space"?c?"most-block-size":"most-inline-size":"normal",[p]:Qr(n),[h]:Qr(o),"--sinewy-trigger-width":"anchor-size(width)","--sinewy-trigger-height":"anchor-size(height)","--sinewy-transform-origin":qa(e,t,a)}}function qa(e,t,n){let i=t==="center"?"center":t==="end"?n==="rtl"?"left":"right":n==="rtl"?"right":"left",a=t==="center"?"center":t==="end"?"bottom":"top";return e==="top"?i+" bottom":e==="bottom"?i+" top":e==="left"?"right "+a:"left "+a}function Qr(e){return typeof e=="number"?e+"px":e}function Ra(e){return e.dir==="rtl"?"ArrowLeft":"ArrowRight"}function La(e){return e.dir==="rtl"?"ArrowRight":"ArrowLeft"}function ld(e,t="dropdown"){let n=e,o;for(;(o=Object.getPrototypeOf(n))&&o!==Object.prototype;)n=o;let r=n[_r]||(n[_r]={value:0});return"sinewy-"+t+"-"+ ++r.value}function pd(e){return"--"+e.replace(/[^a-zA-Z0-9_-]/g,"-")+"-anchor"}function Ao(e){return e.filter(Boolean)}function fn(e){return e==null?[]:Array.isArray(e)?e:[e]}function X(e,t,...n){fn(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function ud(e,t,n,o){return e?e(n,o):d(t,n,o)}var hd=Symbol("sinewy-context-menu-ids"),Ma=700,Ba=['[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]'].join(","),Q=d(({id:e},[],t)=>{let n=e||Ya(t),o={name:"ContextMenu",prefix:"context-menu",id:n,triggerId:n+"-trigger",contentId:n+"-content",anchorName:_a(n),trigger:void 0,content:void 0,anchor:void 0,open:!1,renderOpen:!1,openState:{value:!1},openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!1,dir:"ltr",openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,pointerGrace:void 0,pointerDown:void 0,pointerCleanup:void 0,pendingOpen:void 0,longPressTimer:void 0,onbeforeopenchange:void 0,onopenchange:void 0},r=Object.create(t);return r[qe]=o,o.root=o,t.onremove(()=>{clearTimeout(o.searchTimer),cancelAnimationFrame(o.reconcileFrame),o.pointerCleanup&&o.pointerCleanup(),o.pendingOpen&&o.pendingOpen(),Ge(o),o.anchor&&o.anchor.remove()}),({loop:i=!1,dir:a="ltr",onbeforeopenchange:c,onopenchange:s},l)=>(o.loop=i,o.dir=a,o.onbeforeopenchange=c,o.onopenchange=s,o.renderOpen=o.openState.value,d({context:r},()=>l))});Q.Trigger=d(({as:e,disabled:t=!1,dom:n,oncontextmenu:o,onkeydown:r,...i},a,c)=>{let s=ja(c,"Trigger");return Xa(e,"div",{...i,id:s.triggerId,tabIndex:e?i.tabIndex:i.tabIndex==null?0:i.tabIndex,disabled:e&&t||void 0,"aria-haspopup":"menu","aria-controls":s.contentId,"aria-expanded":String(s.renderOpen),"aria-disabled":String(t),style:Ua(i.style,t),data:{...i.data,disabled:t?"":null,state:s.renderOpen?"open":"closed"},dom:Ja([l=>Na(s,l),...wd(n)]),oncontextmenu:(l,p,h,u)=>{gd(o,l,p,h,u),Ge(s),!(t||l.defaultPrevented||!s.content)&&fd(s,l,p,Fa(l,p,s.dir),!0)},onkeydown:(l,p,h,u)=>{gd(r,l,p,h,u),!(!Va(l)||t||l.defaultPrevented||!s.content)&&(Ge(s),fd(s,l,p,md(p,s.dir),!1))}},a)});Q.Content=q.Content;Q.Item=q.Item;Q.Checkbox=q.Checkbox;Q.RadioGroup=q.RadioGroup;Q.Radio=q.Radio;Q.Indicator=q.Indicator;Q.Group=q.Group;Q.Label=q.Label;Q.Separator=q.Separator;Q.Sub=q.Sub;Q.SubTrigger=q.SubTrigger;Q.SubContent=q.SubContent;function ja(e,t){let n=e[qe];if(!n||n.name!=="ContextMenu")throw new Error("ContextMenu."+t+" must be used inside ContextMenu");return n}function Na(e,t){import.meta.dev&&e.trigger&&e.trigger!==t&&e.trigger.isConnected&&console.warn("ContextMenu.Trigger should only be rendered once per ContextMenu state scope"),e.trigger=t;let n=o=>Ga(e,o);return t.addEventListener("pointerdown",n,!0),()=>{t.removeEventListener("pointerdown",n,!0),e.pointerCleanup&&e.pointerCleanup()}}function Fa(e,t,n){return e.clientX!==0||e.clientY!==0||e.button===2||e.pointerType?{x:e.clientX,y:e.clientY}:md(t,n)}function md(e,t){let n=e.getBoundingClientRect();return{x:t==="rtl"?n.right:n.left,y:n.bottom}}function Va(e){return e.key==="ContextMenu"||e.key==="F10"&&e.shiftKey}function fd(e,t,n,o,r){t.preventDefault(),bd(e,n.ownerDocument,o.x,o.y),e.openFocus="first",e.restoreFocus=!0,e.pendingOpen&&e.pendingOpen(),r&&e.pointerDown?vd(e,n,e.pointerDown):yd(e,n)}function bd(e,t,n,o){let r=e.anchor||Ka(e,t);r.style.left=n+"px",r.style.top=o+"px"}function yd(e,t){!e.content||!t.isConnected||(e.content.matches(":popover-open")?Wa(e.content):e.content.showPopover({source:t}))}function vd(e,t,n){let o=t.ownerDocument,{button:r,pointerId:i}=n,a,c=()=>{o.removeEventListener("pointerup",p,!0),o.removeEventListener("mouseup",p,!0),o.removeEventListener("pointercancel",h,!0)},s=()=>{c(),cancelAnimationFrame(a),e.pendingOpen===s&&(e.pendingOpen=void 0)},l=u=>i==null||u.pointerId==null||u.pointerId===i,p=u=>{u.button!==r||!l(u)||(e.pointerCleanup&&e.pointerCleanup(),c(),a=requestAnimationFrame(()=>{e.pendingOpen===s&&(e.pendingOpen=void 0),yd(e,t)}))},h=u=>{l(u)&&s()};o.addEventListener("pointerup",p,!0),o.addEventListener("mouseup",p,!0),o.addEventListener("pointercancel",h,!0),e.pendingOpen=s}function Ga(e,t){e.pointerCleanup&&e.pointerCleanup();let n=t.currentTarget.ownerDocument,o=e.pointerDown={button:t.button,pointerId:t.pointerId,pointerType:t.pointerType,x:t.clientX,y:t.clientY},r=o.pointerType&&o.pointerType!=="mouse",i=s=>{s.pointerId===o.pointerId&&(n.removeEventListener("pointerup",i,!0),n.removeEventListener("pointercancel",i,!0),n.removeEventListener("pointermove",a,!0),Ge(e),e.pointerDown===o&&(e.pointerDown=void 0),e.pointerCleanup===c&&(e.pointerCleanup=void 0))},a=s=>{r&&s.pointerId===o.pointerId&&Ge(e)},c=()=>{n.removeEventListener("pointerup",i,!0),n.removeEventListener("pointercancel",i,!0),n.removeEventListener("pointermove",a,!0),Ge(e),e.pointerDown===o&&(e.pointerDown=void 0),e.pointerCleanup===c&&(e.pointerCleanup=void 0)};n.addEventListener("pointerup",i,!0),n.addEventListener("pointercancel",i,!0),n.addEventListener("pointermove",a,!0),e.pointerCleanup=c,r&&t.currentTarget.getAttribute("aria-disabled")!=="true"&&Ha(e,t.currentTarget,o)}function Ha(e,t,n){Ge(e),e.content&&e.content.matches(":popover-open")&&e.content.hidePopover(),e.longPressTimer=setTimeout(()=>{e.longPressTimer=void 0,!(e.pointerDown!==n||!e.content)&&(bd(e,t.ownerDocument,n.x,n.y),e.openFocus="first",e.restoreFocus=!0,e.pendingOpen&&e.pendingOpen(),vd(e,t,n))},Ma)}function Ge(e){clearTimeout(e.longPressTimer),e.longPressTimer=void 0}function Ua(e,t){return t?e:e&&typeof e=="object"?{"-webkit-touch-callout":"none",...e}:"-webkit-touch-callout:none;"+(e||"")}function Ka(e,t){let n=t.createElement("span");return n.setAttribute("aria-hidden","true"),n.setAttribute("data-sinewy-context-anchor",""),n.style.position="fixed",n.style.inset="auto",n.style.width="0",n.style.height="0",n.style.pointerEvents="none",n.style.setProperty("anchor-name",e.anchorName),t.body.insertBefore(n,t.body.firstChild),e.anchor=n,n}function Wa(e){let t=Array.from(e.querySelectorAll(Ba)).find(n=>n.closest('[role="menu"]')===e&&n.getAttribute("aria-disabled")!=="true");t&&t.focus({preventScroll:!0})}function Ya(e){let t=e,n;for(;(n=Object.getPrototypeOf(t))&&n!==Object.prototype;)t=n;let o=t[hd]||(t[hd]={value:0});return"sinewy-context-menu-"+ ++o.value}function _a(e){return"--"+e.replace(/[^a-zA-Z0-9_-]/g,"-")+"-anchor"}function Ja(e){return e.filter(Boolean)}function wd(e){return e==null?[]:Array.isArray(e)?e:[e]}function gd(e,t,...n){wd(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function Xa(e,t,n,o){return e?e(n,o):d(t,n,o)}var ot=Q;function Te(e){return e`
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
  `}var xd={gray:["#fcfcfc #111111","#f9f9f9 #191919","#f0f0f0 #222222","#e8e8e8 #2a2a2a","#e0e0e0 #313131","#d9d9d9 #3a3a3a","#cecece #484848","#bbbbbb #606060","#8d8d8d #6e6e6e","#838383 #7b7b7b","#646464 #b4b4b4","#202020 #eeeeee"],indigo:["#fdfdfe #11131f","#f7f9ff #141726","#edf2fe #182449","#e1e9ff #1d2e62","#d2deff #253974","#c1d0ff #304384","#abbdf9 #3a4f97","#8da4ef #435db1","#3e63dd #3e63dd","#3358d4 #5472e4","#3a5bc7 #9eb1ff","#1f2d5c #d6e1ff"],blue:["#fbfdff #0d1520","#f4faff #111927","#e6f4fe #0d2847","#d5efff #003362","#c2e5ff #004074","#acd8fc #104d87","#8ec8f6 #205d9e","#5eb1ef #2870bd","#0090ff #0090ff","#0588f0 #3b9eff","#0d74ce #70b8ff","#113264 #c2e6ff"],cyan:["#fafdfe #0b161a","#f2fafb #101b20","#def7f9 #082c36","#caf1f6 #003848","#b5e9f0 #004558","#9ddde7 #045468","#7dcedc #12677e","#3db9cf #11809c","#00a2c7 #00a2c7","#0797b9 #23afd0","#107d98 #4ccce6","#0d3c48 #b6ecf7"],teal:["#fafefd #0d1514","#f3fbf9 #111c1b","#e0f8f3 #0d2d2a","#ccf3ea #023b37","#b8eae0 #084843","#a1ded2 #145750","#83cdc1 #1c6961","#53b9ab #207e73","#12a594 #12a594","#0d9b8a #0eb39e","#008573 #0bd8b6","#0d3d38 #adf0dd"],green:["#fbfefc #0e1512","#f4fbf6 #121b17","#e6f6eb #132d21","#d6f1df #113b29","#c4e8d1 #174933","#adddc0 #20573e","#8eceaa #28684a","#5bb98b #2f7c57","#30a46c #30a46c","#2b9a66 #33b074","#218358 #3dd68c","#193b2d #b1f1cb"],amber:["#fefdfb #16120c","#fefbe9 #1d180f","#fff7c2 #302008","#ffee9c #3f2700","#fbe577 #4d3000","#f3d673 #5c3d05","#e9c162 #714f19","#e2a336 #8f6424","#ffc53d #ffc53d","#ffba18 #ffd60a","#ab6400 #ffca16","#4f3422 #ffe7b3"],orange:["#fefcfb #17120e","#fff7ed #1e160f","#ffefd6 #331e0b","#ffdfb5 #462100","#ffd19a #562800","#ffc182 #66350c","#f5ae73 #7e451d","#ec9455 #a35829","#f76b15 #f76b15","#ef5f00 #ff801f","#cc4e00 #ffa057","#582d1d #ffe0c2"],red:["#fffcfc #191111","#fff7f7 #201314","#feebec #3b1219","#ffdbdc #500f1c","#ffcdce #611623","#fdbdbe #72232d","#f4a9aa #8c333a","#eb8e90 #b54548","#e5484d #e5484d","#dc3e42 #ec5d5e","#ce2c31 #ff9592","#641723 #ffd1d9"],crimson:["#fffcfd #191114","#fef7f9 #201318","#ffe9f0 #381525","#fedce7 #4d122f","#facedd #5c1839","#f3bed1 #6d2545","#eaacc3 #873356","#e093b2 #b0436e","#e93d82 #e93d82","#df3478 #ee518a","#cb1d63 #ff92ad","#621639 #fdd3e8"],pink:["#fffcfe #191117","#fef7fb #21121d","#fee9f5 #37172f","#fbdcef #4b143d","#f6cee7 #591c47","#efbfdd #692955","#e7acd0 #833869","#dd93c2 #a84885","#d6409f #d6409f","#cf3897 #de51a8","#c2298a #ff8dcc","#651249 #fdd1ea"],purple:["#fefcfe #18111b","#fbf7fe #1e1523","#f7edfe #301c3b","#f2e2fc #3d224e","#ead5f9 #48295c","#e0c4f4 #54346b","#d1afec #664282","#be93e4 #8457aa","#8e4ec6 #8e4ec6","#8347b9 #9a5cd0","#8145b5 #d19dff","#402060 #ecd9fa"]},Za={accent:"indigo"},Qa={amber:"#21201c"},ec=[1,2,3,4,7,8,9,10,11,12],jl=Object.freeze(["gray","accent","red","orange","amber","green","teal","cyan","blue","indigo","purple","pink","crimson"]);function R(e,t){let n=Za[e]||e,o=xd[n];if(!o)return t;let r=Object.fromEntries(ec.map(i=>[`--sinewy-accent-${i}`,kd(o[i-1])]));return r["--sinewy-accent-contrast"]=Qa[n]||"white",r["--sinewy-panel"]="light-dark(#fff, #191919)",[1,2,3,4,6,7,8,9,11,12].forEach(i=>{r[`--sinewy-neutral-${i}`]=kd(xd.gray[i-1])}),r["--sinewy-extreme"]="light-dark(#000, #fff)",{...r,...t}}function kd(e){let[t,n]=e.split(" ");return`light-dark(${t}, ${n})`}function P(e,t){return{...e,...Object.fromEntries(Object.entries(t).map(([n,o])=>[n,o==null?null:typeof o=="boolean"?o?"":null:String(o)]))}}var tc=Te(d`button`),nc=d(({size:e="2",variant:t="solid",color:n="accent",highContrast:o=!1,type:r="button",data:i,style:a,...c},s)=>tc({...c,type:r,style:R(n,a),data:P(i,{size:e,variant:t,color:n,highContrast:o})},s));var Le=nc;function K(e,t){let n={value:e,binding:void 0,unobserve:void 0};return t.onremove(()=>n.unobserve&&n.unobserve()),n}function W(e,t,n){e.binding!==t&&(e.unobserve&&e.unobserve(),e.binding=t,e.unobserve=Do(t)?t.observe(n.redraw):void 0)}function j(e,t,n){return Do(t)?t():n===void 0?e.value:n}function G(e,t,n,o,r){Do(t)?t(o):n===void 0&&(e.value=o,r.redraw())}function z(e,t,...n){oc(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function oc(e){return e==null?[]:Array.isArray(e)?e:[e]}function Do(e){return typeof e=="function"&&typeof e.observe=="function"}var rc=Te(d`button`),dc=d(({defaultPressed:e=!1},[],t)=>{let n=K(!!e,t);return({pressed:o,defaultPressed:r,bind:i,onpressedchange:a,onclick:c,disabled:s=!1,size:l="2",variant:p="soft",color:h="accent",highContrast:u=!1,type:f="button",data:m,style:g,...y},w,k)=>{W(n,i,k);let v=!!j(n,i,o);return rc({...y,type:f,disabled:s,"aria-pressed":String(v),style:R(h,g),data:P(m,{size:l,variant:p,color:h,highContrast:u,state:v?"on":"off"}),onclick:(x,b,A,$)=>{if(z(c,x,b,A,$),x.defaultPrevented||s)return;let _=!v;G(n,i,o,_,k),a&&a(_,x)}},w)}});var At=dc;var Io=Symbol("sinewy-dialog");var Cd=Symbol("sinewy-dialog-ids"),ic=Te(d`button`),ac=Te(d`button`),cc=d`dialog
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
`,sc=d`h2
  margin 0
  color $sinewy-neutral-12
  font-size 20
  font-weight 780
  line-height 1.2
  letter-spacing -0.02em
`,lc=d`p
  margin 8px 0 0
  color $sinewy-neutral-11
  font-size 14
  line-height 1.55
`,rt=d(({id:e,defaultOpen:t=!1},[],n)=>{let o=e||pc(n),r=K(!!t,n),i={id:o,contentId:o+"-content",titleId:o+"-title",descriptionId:o+"-description",content:void 0,trigger:void 0,local:r,bind:void 0,controlled:void 0,renderOpen:!!t,onopenchange:void 0,closing:!1},a=Object.create(n);return a[Io]=i,({open:c,defaultOpen:s,bind:l,onopenchange:p},h,u)=>(i.bind=l,i.controlled=c,i.onopenchange=p,W(r,l,u),i.renderOpen=!!j(r,l,c),Po(i),d({context:a},()=>h))});rt.Trigger=d(({disabled:e=!1,dom:t,onclick:n,size:o="2",variant:r="solid",color:i="accent",highContrast:a=!1,type:c="button",data:s,style:l,...p},h,u)=>{let f=Dt(u,"Trigger");return ic({...p,type:c,disabled:e,"aria-haspopup":"dialog","aria-controls":f.contentId,"aria-expanded":String(f.renderOpen),style:R(i,l),data:P(s,{size:o,variant:r,color:i,highContrast:a,state:f.renderOpen?"open":"closed"}),dom:[m=>f.trigger=m,...Sd(t)],onclick:(m,g,y,w)=>{z(n,m,g,y,w),!(m.defaultPrevented||e)&&gn(f,!0,m,u)}},h)});rt.Content=d(({dom:e,oncancel:t,onclose:n,"aria-label":o,"aria-labelledby":r,"aria-describedby":i,size:a="2",color:c="accent",highContrast:s=!1,data:l,style:p,...h},u,f)=>{let m=Dt(f,"Content");return cc({...h,id:m.contentId,"aria-label":o,"aria-labelledby":o?r:r||m.titleId,"aria-describedby":i===null?void 0:i||m.descriptionId,style:R(c,p),data:P(l,{size:a,color:c,highContrast:s,state:m.renderOpen?"open":"closed"}),dom:[g=>{m.content=g,queueMicrotask(()=>Po(m))},...Sd(e)],oncancel:(g,y,w,k)=>{z(t,g,y,w,k),!g.defaultPrevented&&(g.preventDefault(),gn(m,!1,g,f))},onclose:(g,y,w,k)=>{if(z(n,g,y,w,k),m.closing){m.closing=!1;return}m.renderOpen&&gn(m,!1,g,f)}},u)});rt.Title=d((e,t,n)=>{let o=Dt(n,"Title");return sc({...e,id:e.id||o.titleId},t)});rt.Description=d((e,t,n)=>{let o=Dt(n,"Description");return lc({...e,id:e.id||o.descriptionId},t)});rt.Close=d(({disabled:e=!1,onclick:t,size:n="2",variant:o="soft",color:r="gray",highContrast:i=!1,type:a="button",data:c,style:s,...l},p,h)=>{let u=Dt(h,"Close");return ac({...l,type:a,disabled:e,style:R(r,s),data:P(c,{size:n,variant:o,color:r,highContrast:i}),onclick:(f,m,g,y)=>{z(t,f,m,g,y),!(f.defaultPrevented||e)&&gn(u,!1,f,h)}},p)});function gn(e,t,n,o){t!==e.renderOpen&&(G(e.local,e.bind,e.controlled,t,o),e.renderOpen=!!j(e.local,e.bind,e.controlled),e.onopenchange&&e.onopenchange(t,n),queueMicrotask(()=>Po(e)))}function Po(e){let t=e.content;!t||!t.isConnected||(e.renderOpen&&!t.open?t.showModal():!e.renderOpen&&t.open&&(e.closing=!0,t.close()))}function Dt(e,t){let n=e[Io];if(!n)throw new Error("Dialog."+t+" must be used inside Dialog");return n}function pc(e){let t=e,n;for(;(n=Object.getPrototypeOf(t))&&n!==Object.prototype;)t=n;let o=t[Cd]||(t[Cd]={value:0});return"sinewy-dialog-"+ ++o.value}function Sd(e){return e==null?[]:Array.isArray(e)?e:[e]}var Y=rt;var dt=d((e,t)=>Y(e,...t));dt.Trigger=Y.Trigger;dt.Content=d((e,t)=>Y.Content({...e,role:"alertdialog"},t));dt.Title=Y.Title;dt.Description=Y.Description;dt.Close=Y.Close;var Ae=dt;var uc=d`input
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
`,hc=d(({defaultChecked:e=!1},[],t)=>{let n=K(!!e,t),o={local:n,defaultChecked:!!e,bind:void 0,controlled:void 0};return({checked:r,defaultChecked:i,bind:a,oncheckedchange:c,onchange:s,dom:l,disabled:p=!1,size:h="2",color:u="accent",highContrast:f=!1,type:m,role:g,data:y,style:w,...k},[],v)=>{o.bind=a,o.controlled=r,W(n,a,v);let x=!!j(n,a,r);return uc({...k,type:"checkbox",role:"switch",checked:x,disabled:p,style:R(u,w),data:P(y,{size:h,color:u,highContrast:f,state:x?"checked":"unchecked"}),dom:[b=>fc(o,b,v),...gc(l)],onchange:(b,A,$,_)=>{z(s,b,A,$,_);let U=A.checked;G(n,a,r,U,v),c&&c(U,b),r!==void 0&&(A.checked=x)}})}});function fc(e,t,n){t.defaultChecked=e.defaultChecked;let o=t.form;if(!o)return;let r=()=>queueMicrotask(()=>{let i=t.checked;G(e.local,e.bind,e.controlled,i,n),t.checked=!!j(e.local,e.bind,e.controlled),n.redraw()});return o.addEventListener("reset",r),()=>o.removeEventListener("reset",r)}function gc(e){return e==null?[]:Array.isArray(e)?e:[e]}var It=hc;var Td=Symbol("sinewy-select"),mc=d`select
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
`,bc=d(({value:e="",selected:t,...n},o,r)=>{let i=r[Td],a=String(e);return d`option`({...n,value:a,selected:i?.renderValue===void 0?t:i.renderValue===a},o)}),yc=d`optgroup`,$o=d(({defaultValue:e},[],t)=>{let n=e==null?void 0:String(e),o=K(n,t),r={local:o,defaultValue:n,bind:void 0,controlled:void 0,renderValue:n},i=Object.create(t);return i[Td]=r,({value:a,defaultValue:c,bind:s,onvaluechange:l,onchange:p,dom:h,multiple:u,disabled:f=!1,size:m="2",color:g="accent",highContrast:y=!1,data:w,style:k,...v},x,b)=>{let A=a==null?void 0:String(a);r.bind=s,r.controlled=A,W(o,s,b);let $=Ad(j(o,s,A));return r.renderValue=$,d({context:i},()=>mc({...v,value:$,disabled:f,style:R(g,k),data:P(w,{size:m,color:g,highContrast:y}),dom:[_=>vc(r,_,b),...wc(h)],onchange:(_,U,Me,oe)=>{z(p,_,U,Me,oe);let te=U.value;G(o,s,A,te,b),l&&l(te,_),A!==void 0&&(U.value=$)}},x))}});$o.Option=bc;$o.Group=yc;function vc(e,t,n){if(e.defaultValue!==void 0)for(let i of t.options)i.defaultSelected=i.value===e.defaultValue;let o=t.form;if(!o)return;let r=()=>queueMicrotask(()=>{let i=t.value;G(e.local,e.bind,e.controlled,i,n);let a=Ad(j(e.local,e.bind,e.controlled));a!==void 0&&(t.value=a),n.redraw()});return o.addEventListener("reset",r),()=>o.removeEventListener("reset",r)}function Ad(e){return e==null?void 0:String(e)}function wc(e){return e==null?[]:Array.isArray(e)?e:[e]}var ee=$o;function Dd(e,t){e.content=t;let n=t.ownerDocument.defaultView,o=()=>Id(e),r=a=>{!e.open||e.control?.contains(a.target)||t.contains(a.target)||(e.open=!1,e.activeId=void 0,e.editing=!1,d.redraw())};n.addEventListener("resize",o),n.addEventListener("scroll",o,!0),t.ownerDocument.addEventListener("pointerdown",r);let i=new ResizeObserver(o);return i.observe(t),queueMicrotask(()=>{t.isConnected&&e.control&&i.observe(e.control),zo(e)}),()=>{n.removeEventListener("resize",o),n.removeEventListener("scroll",o,!0),t.ownerDocument.removeEventListener("pointerdown",r),i.disconnect(),t.matches(":popover-open")&&t.hidePopover(),e.content===t&&(e.content=void 0)}}function zo(e){let t=e.content;if(!t?.isConnected||!t.showPopover)return;let n=t.matches(":popover-open");e.open&&!n?(t.hidden=!1,t.showPopover()):!e.open&&n&&t.hidePopover(),Id(e),e.open&&!n&&e.items.find(o=>o.id===e.activeId)?.scrollIntoView({block:"nearest"})}function Id(e){let t=e.content;if(!e.open||!t?.isConnected||!e.control)return;let n=e.control.getBoundingClientRect(),o=t.ownerDocument.defaultView,r=8,i=6,a=o.innerHeight-n.bottom-i-r,c=n.top-i-r,s=a<Math.min(t.scrollHeight,280)&&c>a,l=Math.max(0,s?c:a);Object.assign(t.style,{position:"fixed",margin:"0",inset:"auto",boxSizing:"border-box",width:Math.min(n.width,o.innerWidth-r*2)+"px",maxHeight:Math.min(320,l)+"px",left:Math.max(r,Math.min(n.left,o.innerWidth-n.width-r))+"px",top:s?"auto":n.bottom+i+"px",bottom:s?o.innerHeight-n.top+i+"px":"auto"})}var Od=Symbol("sinewy-combobox"),Pd=Symbol("sinewy-combobox-ids"),$d=Symbol("sinewy-selection-group");function vn({name:e="Combobox",selectOnly:t=!1}={}){let n=d(({id:o,multiple:r=!1,defaultValue:i=r?[]:null},[],a)=>{let c=o||$c(a,e),s=K(i,a),l={name:e,selectOnly:t,id:c,controlId:c+"-control",inputId:c+"-input",contentId:c+"-content",optionId:0,control:void 0,input:void 0,content:void 0,items:[],labels:new Map,records:new Map,defaultValue:i,disabled:!1,required:!1,invalid:!1,typeahead:"",typedAt:0,local:s,multiple:r,dir:"ltr",selected:yn(i,r),controlled:void 0,bind:void 0,onvaluechange:void 0,filter:zd,formatValue:void 0,query:"",editing:!1,open:!1,activeId:void 0,activePill:void 0,context:a},p=Object.create(a);return p[Od]=l,({multiple:h=!1,value:u,bind:f,dir:m="ltr",filter:g=zd,formatValue:y,onvaluechange:w,disabled:k=!1,required:v=!1},x,b)=>(W(s,f,{redraw:d.redraw}),l.multiple=h,l.dir=m,l.controlled=u,l.bind=f,l.onvaluechange=w,l.filter=g,l.formatValue=y,l.disabled=k,l.required=v,l.selected=yn(j(s,f,u),h),k&&(l.open=!1),!h&&!l.editing&&(l.query=at(l,l.selected)),d({context:p},()=>x))});return n.Control=d(({dom:o,onclick:r,onfocusout:i,...a},c,s)=>{let l=He(s,"Control");return d`div`({...a,id:a.id||l.controlId,data:{...a.data,state:l.open?"open":"closed",multiple:l.multiple?"":null},dom:Pt([p=>l.control=p,...it(o)]),onclick:(p,h,u,f)=>{z(r,p,h,u,f),!p.defaultPrevented&&p.target===h&&l.input&&l.input.focus()},onfocusout:(p,h,u,f)=>{z(i,p,h,u,f),!p.defaultPrevented&&queueMicrotask(()=>{let m=document.activeElement;h.contains(m)||l.content&&l.content.contains(m)||(l.activePill=void 0,De(l,!0))})}},c)}),n.Pills=d(({},[],o)=>{let r=He(o,"Pills");return({removelabel:i,...a},[],c)=>{if(!r.multiple)return null;let s=r.selected;return d`span`({...a,data:{...a.data,sinewyComboboxPills:""},dom:it(a.dom)},s.map((l,p)=>d`button`({key:l,type:"button",tabIndex:-1,"aria-label":i?i(l,at(r,l)):"Remove "+at(r,l),data:{sinewyComboboxPill:"",selected:r.activePill===l?"":null,value:l},onfocus:()=>{r.activePill=l,d.redraw()},onclick:h=>{h.preventDefault(),Ed(r,l,h),r.input&&r.input.focus()},onkeydown:h=>Cc(r,h,p,l)},at(r,l))))}}),n.Input=d(({},[],o)=>{let r=He(o,"Input");return(i,[],a)=>d`input`({...i,id:i.id||r.inputId,type:i.type||"text",role:"combobox",value:r.query,autocomplete:i.autocomplete||"off","aria-autocomplete":"list","aria-controls":r.contentId,"aria-expanded":String(r.open),"aria-activedescendant":r.open?r.activeId:null,dom:Pt([c=>r.input=c,...it(i.dom)]),onfocus:(c,s,l,p)=>{z(i.onfocus,c,s,l,p),!c.defaultPrevented&&(r.editing=!0,r.open=!0,r.activePill=void 0,r.multiple||(r.query="",s.select()))},oninput:(c,s,l,p)=>{z(i.oninput,c,s,l,p),!c.defaultPrevented&&(r.query=s.value,r.editing=!0,r.open=!0,r.activeId=Tc(r)?.id)},onkeydown:(c,s,l,p)=>{z(i.onkeydown,c,s,l,p),c.defaultPrevented||kc(r,c,s)},onblur:(c,s,l,p)=>z(i.onblur,c,s,l,p)})}),n.Content=d(({dom:o,...r},i,a)=>{let c=He(a,"Content");return queueMicrotask(()=>zo(c)),d`div`({...r,id:c.contentId,role:"listbox",popover:"auto",hidden:c.open?null:!0,"aria-multiselectable":c.multiple?"true":null,data:{...r.data,state:c.open?"open":"closed"},dom:Pt([s=>Dd(c,s),...it(o)]),ontoggle:(s,...l)=>{z(r.ontoggle,s,...l),!c.content?.matches(":popover-open")&&s.newState==="closed"&&c.open&&De(c,!0)}},i)}),n.Item=d(({id:o},[],r)=>{let i=He(r,"Item"),a=o||i.id+"-option-"+ ++i.optionId;return r.onremove(()=>{i.records.delete(a),i.activeId===a&&(i.activeId=void 0)}),({value:c,textValue:s=String(c),disabled:l=!1,dom:p,onclick:h,onpointerdown:u,onpointermove:f,onselect:m,...g},y,w)=>{if(typeof c!="string")throw new TypeError("Combobox.Item value must be a string");if(t&&!c)throw new TypeError("CustomSelect.Option value must be a non-empty string");l||=!!w[$d]?.disabled,i.labels.set(c,s);let k=Eo(i,c),v=i.selectOnly||i.filter(s,i.query,c);return i.records.set(a,{value:c,textValue:s,disabled:l,onselect:m}),d`div`({...g,id:a,role:"option",tabIndex:-1,hidden:v?null:!0,"aria-selected":String(k),"aria-disabled":String(l),data:{...g.data,value:c,textValue:s,selected:k?"":null,disabled:l?"":null,highlighted:i.activeId===a?"":null},dom:Pt([x=>Ac(i,x),...it(p)]),onpointerdown:(x,b,A,$)=>{z(u,x,b,A,$),x.defaultPrevented||x.preventDefault()},onpointermove:(x,b,A,$)=>{z(f,x,b,A,$),!(x.defaultPrevented||l||i.disabled)&&(i.activeId=a)},onclick:(x,b,A,$)=>{z(h,x,b,A,$),!(x.defaultPrevented||l||i.disabled||i.input?.matches(":disabled"))&&(z(m,x,b,A,$),x.defaultPrevented||Sc(i,c,s,i.keyboardEvent||x))}},y)}}),n.Group=d(({label:o,disabled:r=!1,...i},a,c)=>{let s=Object.create(c);return s[$d]={disabled:r},d`div`({...i,role:"group","aria-label":o},d`div`({"aria-hidden":"true",data:{selectionGroupLabel:""}},o),d({context:s},()=>a))}),n.Trigger=d((o,r,i)=>{let a=He(i,"Trigger"),{placeholder:c="Choose an option",dom:s,...l}=o;return d`button`({...l,id:o.id||a.inputId,type:"button",role:"combobox",disabled:a.disabled,"aria-haspopup":"listbox","aria-expanded":String(a.open),"aria-controls":a.contentId,"aria-activedescendant":a.open?a.activeId:null,"aria-required":a.required?"true":null,"aria-invalid":a.invalid&&!a.selected?"true":o["aria-invalid"],data:{...o.data,state:a.open?"open":"closed",placeholder:a.selected==null?"":null},dom:Pt([p=>a.input=a.control=p,...it(s)]),onclick:(p,...h)=>{z(o.onclick,p,...h),!(p.defaultPrevented||a.disabled)&&(a.open?De(a,!0):mn(a))},onkeydown:(p,...h)=>{z(o.onkeydown,p,...h),!p.defaultPrevented&&!a.disabled&&xc(a,p)},onblur:(p,...h)=>{z(o.onblur,p,...h),p.defaultPrevented||De(a,!0)}},r.length?r:at(a,a.selected)||c)}),n.FormControl=d((o,[],r)=>{let i=He(r,"FormControl");return d`select
      position absolute
      width 1px
      height 1px
      padding 0
      border 0
      margin -1px
      overflow hidden
      clip-path inset(50%)
      white-space nowrap
    `({...o,tabIndex:-1,"aria-hidden":"true",required:i.required,disabled:i.disabled,value:i.selected??"",dom:a=>{let c=s=>{s.target===a.form&&queueMicrotask(()=>{s.defaultPrevented||(i.invalid=!1,$t(i,i.defaultValue??null,s),De(i,!0))})};return a.ownerDocument.addEventListener("reset",c,!0),()=>a.ownerDocument.removeEventListener("reset",c,!0)},oninvalid:a=>{a.preventDefault(),i.invalid=!0,i.input?.focus(),d.redraw()},onchange:a=>{$t(i,a.target.value||null,a),De(i,!0)}},d`option`({value:"",selected:i.selected==null},""),Array.from(i.records.values(),a=>d`option`({value:a.value,disabled:a.disabled,selected:i.selected===a.value},a.textValue)))}),n}function mn(e){e.open=!0;let t=zt(e);e.activeId=(t.find(n=>n.dataset.value===e.selected)||t[0])?.id,d.redraw(),e.items.find(n=>n.id===e.activeId)?.scrollIntoView({block:"nearest"})}function xc(e,t){let n=t.key;if(n==="Escape"&&e.open){t.preventDefault(),De(e,!0);return}if(n==="Tab"){e.open&&Oo(e,t),De(e,!0);return}if(n==="Enter"||n===" "){t.preventDefault(),e.open?Oo(e,t):mn(e);return}if(["ArrowDown","ArrowUp","Home","End"].includes(n)){t.preventDefault();let h=e.open;if(h||mn(e),n==="Home"||n==="End"){let u=zt(e);e.activeId=(n==="Home"?u[0]:u.at(-1))?.id}else h&&!t.altKey?qd(e,n==="ArrowDown"?1:-1):h&&n==="ArrowUp"&&t.altKey&&Oo(e,t);e.items.find(u=>u.id===e.activeId)?.scrollIntoView({block:"nearest"});return}if(n.length!==1||t.ctrlKey||t.metaKey||t.altKey||t.isComposing)return;t.preventDefault();let o=Date.now();e.typeahead=o-e.typedAt>700?n:e.typeahead+n,e.typedAt=o;let r=[...e.typeahead].every(h=>h===n),i=(r?n:e.typeahead).toLocaleLowerCase();e.open||mn(e);let a=zt(e),c=a.findIndex(h=>h.id===e.activeId),s=r?c+1:Math.max(0,c),p=a.slice(s).concat(a.slice(0,s)).find(h=>h.dataset.textValue.toLocaleLowerCase().startsWith(i));p&&(e.activeId=p.id,p.scrollIntoView({block:"nearest"}))}function Oo(e,t){let n=zt(e).find(o=>o.id===e.activeId);if(n){e.keyboardEvent=t;try{n.click()}finally{e.keyboardEvent=void 0}}}function kc(e,t,n){if(t.key==="ArrowDown"||t.key==="ArrowUp"){t.preventDefault(),e.open=!0,qd(e,t.key==="ArrowDown"?1:-1);return}if(t.key==="Enter"&&e.open&&e.activeId){let o=e.items.find(r=>r.id===e.activeId);if(!o||!Rd(o))return;t.preventDefault(),o.click();return}if(t.key==="Escape"&&e.open){t.preventDefault(),De(e,!0);return}if(!(!e.multiple||n.selectionStart!==0||n.selectionEnd!==0)&&(t.key==="Backspace"||t.key===Ld(e))){let o=bn(e);if(!o.length)return;t.preventDefault(),o.at(-1).focus()}}function Cc(e,t,n,o){let r=bn(e);if(t.key==="Backspace"||t.key==="Delete"){t.preventDefault(),Ed(e,o,t),d.redraw().then(()=>{let i=bn(e);(i[Math.min(n,i.length-1)]||e.input)?.focus()});return}if(t.key===Ld(e)){t.preventDefault(),r[Math.max(0,n-1)]?.focus();return}t.key===Pc(e)&&(t.preventDefault(),(r[n+1]||e.input)?.focus())}function Sc(e,t,n,o){if(o.key!=="Tab"&&e.input&&e.input.focus(),e.multiple){let r=Eo(e,t)?e.selected.filter(i=>i!==t):[...e.selected,t];$t(e,r,o),e.query="",e.open=!0,e.activeId=void 0}else $t(e,t,o),e.query=n,e.editing=!1,e.open=!1,e.activeId=void 0;e.invalid=!1,d.redraw()}function Ed(e,t,n){e.multiple&&($t(e,e.selected.filter(o=>o!==t),n),e.activePill=void 0)}function $t(e,t,n){Ic(e.bind)?(e.bind(t),e.selected=yn(t,e.multiple)):e.controlled===void 0&&(e.local.value=t,e.selected=yn(t,e.multiple),d.redraw()),e.onvaluechange&&e.onvaluechange(t,n)}function qd(e,t){let n=zt(e);if(!n.length){e.activeId=void 0;return}let o=n.findIndex(a=>a.id===e.activeId),r=o===-1?t>0?0:n.length-1:e.selectOnly?Math.max(0,Math.min(n.length-1,o+t)):(o+t+n.length)%n.length,i=n[r];e.activeId=i.id,i.scrollIntoView({block:"nearest"})}function De(e,t){e.open=!1,e.activeId=void 0,e.editing=!1,t&&!e.multiple&&(e.query=at(e,e.selected)),d.redraw()}function zt(e){return e.items.filter(Rd).sort((t,n)=>t.compareDocumentPosition(n)&4?-1:t===n?0:1)}function Tc(e){return e.items.find(t=>t.getAttribute("aria-disabled")!=="true"&&e.filter(t.dataset.textValue,e.query,t.dataset.value))}function Rd(e){return!e.hidden&&e.getAttribute("aria-disabled")!=="true"}function Ac(e,t){return e.items.push(t),Dc(e,t),()=>e.items=e.items.filter(n=>n!==t)}function Dc(e,t){if(!e.selectOnly&&Eo(e,t.dataset.value)){if(!e.multiple&&!e.editing&&e.query!==t.dataset.textValue){e.query=t.dataset.textValue,queueMicrotask(d.redraw);return}if(e.multiple){let n=bn(e).find(o=>o.dataset.value===t.dataset.value);n&&n.textContent!==t.dataset.textValue&&queueMicrotask(d.redraw)}}}function bn(e){return e.control?Array.from(e.control.querySelectorAll("[data-sinewy-combobox-pill]")):[]}function at(e,t){return t==null?"":e.formatValue?e.formatValue(t):e.labels.get(t)||String(t)}function Eo(e,t){return e.multiple?e.selected.includes(t):e.selected===t}function yn(e,t){return t?Array.isArray(e)?[...new Set(e)]:e==null?[]:[e]:Array.isArray(e)?e[0]??null:e??null}function zd(e,t){return e.toLocaleLowerCase().includes(t.trim().toLocaleLowerCase())}function Ic(e){return typeof e=="function"&&typeof e.observe=="function"}function Ld(e){return e.dir==="rtl"?"ArrowRight":"ArrowLeft"}function Pc(e){return e.dir==="rtl"?"ArrowLeft":"ArrowRight"}function He(e,t){let n=e[Od];if(!n)throw new Error("Combobox."+t+" must be used inside Combobox");return n}function $c(e,t){let n=e,o;for(;(o=Object.getPrototypeOf(n))&&o!==Object.prototype;)n=o;let r=n[Pd]||(n[Pd]={value:0});return"sinewy-"+(t==="Combobox"?"combobox":"custom-select")+"-"+ ++r.value}function Pt(e){return e.filter(Boolean)}function it(e){return e==null?[]:Array.isArray(e)?e:[e]}var wn=vn();delete wn.Trigger;delete wn.FormControl;delete wn.Group;var Ue=wn;var Md=Symbol("sinewy-combobox-theme"),zc=d`div
  width min(100%, 320px)
  display grid
  position relative
  gap 6
  color $sinewy-neutral-12
  font-family inherit
`,Oc=Ue.Control`
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
`,Ec=Ue.Pills`
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
`,qc=Ue.Input`
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
`,qo=Ue.Content`
  width 100%
  max-height min(280px, calc(100vh - 24px))
  display grid
  position fixed
  inset auto
  margin 0
  gap 2
  padding 5
  overflow auto
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
`,Rc=Ue.Item`
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
`,Ro=d((e,t)=>Rc({...e,"aria-label":e["aria-label"]??e.textValue},d`span`(t),d`span`({"aria-hidden":"true",data:{selectionIndicator:""}},"\u2713"))),ct=d(({id:e,multiple:t,value:n,defaultValue:o,bind:r,dir:i,filter:a,formatValue:c,onvaluechange:s,size:l="2",color:p="accent",highContrast:h=!1,data:u,style:f,...m},g,y)=>{let w={size:l,color:p,highContrast:h},k=Object.create(y);return k[Md]=w,zc({...m,id:e,style:R(p,f),data:P(u,w)},d({context:k},()=>Ue({id:e,multiple:t,value:n,defaultValue:o,bind:r,dir:i,filter:a,formatValue:c,onvaluechange:s},g)))});ct.Control=Ot(Oc);ct.Pills=Ot(Ec);ct.Input=Ot(qc);ct.Content=Ot(qo);ct.Item=Ot(Ro);function Ot(e){return d((t,n,o)=>{let{size:r="2",highContrast:i=!1}=o[Md]||{};return e({...t,data:P(t.data,{size:r,highContrast:i})},n)})}var ae=ct;var xn=vn({name:"CustomSelect",selectOnly:!0}),Bd=Symbol("sinewy-custom-select-theme"),Lc=d`div
  position relative
  width min(100%, 320px)
  color $sinewy-neutral-12
  font-family inherit
`,Mc=xn.Trigger`
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
`,Bc=xn.Group`
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
`,Lo=d(({id:e,value:t,defaultValue:n,bind:o,onvaluechange:r,formatValue:i,name:a,form:c,required:s=!1,disabled:l=!1,autocomplete:p,placeholder:h,dir:u="ltr",size:f="2",color:m="accent",highContrast:g=!1,style:y,data:w,...k},v,x)=>{let b={size:f,color:m,highContrast:g},A=Object.create(x);return A[Bd]=b,Lc({dir:u,style:R(m,y),data:P(w,b)},d({context:A},()=>xn({id:e,value:t,defaultValue:n,bind:o,onvaluechange:r,formatValue:i,disabled:l,required:s},qo({"aria-label":k["aria-label"],"aria-labelledby":k["aria-labelledby"],data:P({},b)},v),Mc({...k,id:e,form:c,placeholder:h,data:P({},b)}),xn.FormControl({name:a,form:c,autocomplete:p}))))});Lo.Option=d(({value:e,textValue:t,...n},o,r)=>{if(typeof e!="string"||!e)throw new TypeError("CustomSelect.Option value must be a non-empty string");let i=r[Bd]||{};return Ro({...n,value:e,textValue:t??(o.every(a=>typeof a=="string"||typeof a=="number")?o.join(""):e),data:P(n.data,i)},o)});Lo.Group=Bc;var me=Lo;var kn=d`fieldset
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
`;var jd=Symbol("sinewy-checkbox-group"),jc=d`input
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
`,Nd=d(({defaultChecked:e=!1},[],t)=>{let n=K(!!e,t),o={local:n,defaultChecked:!!e,bind:void 0,controlled:void 0};return({checked:r,defaultChecked:i,bind:a,oncheckedchange:c,onchange:s,dom:l,disabled:p=!1,size:h,color:u,highContrast:f,type:m,role:g,value:y="on",data:w,style:k,...v},[],x)=>{let b=x[jd],A=h??b?.size??"2",$=u??b?.color??"accent",_=f??b?.highContrast??!1,U=String(y),Me=b?void 0:r;o.bind=a,o.controlled=Me,!b&&W(n,a,x);let oe=b?b.renderValue.includes(U):!!j(n,a,r);return jc({...v,type:"checkbox",name:b?.name??v.name,value:U,checked:oe,disabled:p,style:R($,k),data:P(w,{size:A,color:$,highContrast:_,state:oe?"checked":"unchecked"}),dom:[te=>Fc(o,b,te,x),...Fd(l)],onchange:(te,pt,zn,ut)=>{z(s,te,pt,zn,ut);let qt=pt.checked;if(b){let Yo=qt?[...new Set([...b.renderValue,U])]:b.renderValue.filter(pi=>pi!==U);G(b.local,b.bind,b.controlled,Yo,b.context),c&&c(qt,te),b.onvaluechange&&b.onvaluechange(Yo,te),b.controlled!==void 0&&Gc(b)}else G(n,a,r,qt,x),c&&c(qt,te),r!==void 0&&(pt.checked=oe)}})}}),Nc=d(({defaultValue:e=[]},[],t)=>{let n=Mo(e),o=K(n,t),r={local:o,defaultValue:n,bind:void 0,controlled:void 0,renderValue:n,context:t,element:void 0,onvaluechange:void 0,name:void 0,size:"2",color:"accent",highContrast:!1},i=Object.create(t);return i[jd]=r,({value:a,defaultValue:c,bind:s,onvaluechange:l,name:p,disabled:h=!1,size:u="2",color:f="accent",highContrast:m=!1,dom:g,data:y,style:w,...k},v,x)=>(r.bind=s,r.controlled=a===void 0?void 0:Mo(a),r.context=x,r.onvaluechange=l,r.name=p,r.size=u,r.color=f,r.highContrast=m,W(o,s,x),r.renderValue=Mo(j(o,s,r.controlled)),d({context:i},()=>kn({...k,disabled:h,style:R(f,w),data:P(y,{size:u,color:f,highContrast:m}),dom:[b=>Vc(r,b),...Fd(g)]},v)))});Nd.Group=Nc;function Fc(e,t,n,o){if(n.defaultChecked=t?t.defaultValue.includes(n.value):e.defaultChecked,t)return;let r=n.form;if(!r)return;let i=()=>queueMicrotask(()=>{let a=n.checked;G(e.local,e.bind,e.controlled,a,o),n.checked=!!j(e.local,e.bind,e.controlled),o.redraw()});return r.addEventListener("reset",i),()=>r.removeEventListener("reset",i)}function Vc(e,t){e.element=t;let n=t.form;if(!n)return;let o=()=>queueMicrotask(()=>{let r=[...e.defaultValue];G(e.local,e.bind,e.controlled,r,e.context),e.context.redraw()});return n.addEventListener("reset",o),()=>n.removeEventListener("reset",o)}function Gc(e){e.element?.querySelectorAll('input[type="checkbox"]').forEach(t=>{t.checked=e.renderValue.includes(t.value)}),e.context.redraw()}function Mo(e){return e==null?[]:[...new Set([...e].map(String))]}function Fd(e){return e==null?[]:Array.isArray(e)?e:[e]}var st=Nd;var Vd=Symbol("sinewy-radio-group"),Cn=Symbol("sinewy-radio-names"),Hc=d`input
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
`,Gd=d(({defaultChecked:e=!1},[],t)=>{let n=K(!!e,t),o={local:n,defaultChecked:!!e,bind:void 0,controlled:void 0};return({checked:r,defaultChecked:i,bind:a,oncheckedchange:c,onchange:s,dom:l,disabled:p=!1,size:h,color:u,highContrast:f,type:m,role:g,value:y="on",data:w,style:k,...v},[],x)=>{let b=x[Vd],A=h??b?.size??"2",$=u??b?.color??"accent",_=f??b?.highContrast??!1,U=String(y);o.bind=a,o.controlled=b?void 0:r,!b&&W(n,a,x);let Me=b?b.renderValue===U:!!j(n,a,r);return Hc({...v,type:"radio",name:b?.name??v.name,value:U,checked:Me,required:b&&b.required||v.required,disabled:p,style:R($,k),data:P(w,{size:A,color:$,highContrast:_,state:Me?"checked":"unchecked"}),dom:[oe=>Kc(o,b,oe,x),...Hd(l)],onchange:(oe,te,pt,zn)=>{z(s,oe,te,pt,zn);let ut=te.checked;b&&ut?(G(b.local,b.bind,b.controlled,U,b.context),c&&c(!0,oe),b.onvaluechange&&b.onvaluechange(U,oe),b.controlled!==void 0&&Yc(b)):b||(G(n,a,r,ut,x),c&&c(ut,oe),r!==void 0&&(te.checked=Me))}})}}),Uc=d(({name:e,defaultValue:t},[],n)=>{let o=e||_c(n),r=Bo(t),i=K(r,n),a={local:i,defaultValue:r,bind:void 0,controlled:void 0,renderValue:r,context:n,element:void 0,onvaluechange:void 0,name:o,required:!1,size:"2",color:"accent",highContrast:!1},c=Object.create(n);return c[Vd]=a,({value:s,defaultValue:l,bind:p,onvaluechange:h,name:u=o,required:f=!1,disabled:m=!1,size:g="2",color:y="accent",highContrast:w=!1,dom:k,data:v,style:x,...b},A,$)=>(a.bind=p,a.controlled=Bo(s),a.context=$,a.onvaluechange=h,a.name=u,a.required=f,a.size=g,a.color=y,a.highContrast=w,W(i,p,$),a.renderValue=Bo(j(i,p,a.controlled)),d({context:c},()=>kn({...b,disabled:m,style:R(y,x),data:P(v,{size:g,color:y,highContrast:w}),dom:[_=>Wc(a,_),...Hd(k)]},A)))});Gd.Group=Uc;function Kc(e,t,n,o){if(n.defaultChecked=t?t.defaultValue===n.value:e.defaultChecked,t)return;let r=n.form;if(!r)return;let i=()=>queueMicrotask(()=>{let a=n.checked;G(e.local,e.bind,e.controlled,a,o),n.checked=!!j(e.local,e.bind,e.controlled),o.redraw()});return r.addEventListener("reset",i),()=>r.removeEventListener("reset",i)}function Wc(e,t){e.element=t;let n=t.form;if(!n)return;let o=()=>queueMicrotask(()=>{G(e.local,e.bind,e.controlled,e.defaultValue,e.context),e.context.redraw()});return n.addEventListener("reset",o),()=>n.removeEventListener("reset",o)}function Yc(e){e.element?.querySelectorAll('input[type="radio"]').forEach(t=>{t.checked=t.value===e.renderValue}),e.context.redraw()}function _c(e){let t=e;for(;t&&!Object.prototype.hasOwnProperty.call(t,Cn);)t=Object.getPrototypeOf(t);return t||=e,t[Cn]=(t[Cn]||0)+1,"sinewy-radio-"+t[Cn]}function Bo(e){return e==null?void 0:String(e)}function Hd(e){return e==null?[]:Array.isArray(e)?e:[e]}var lt=Gd;var Ud=Symbol("sinewy-theme"),Jc=q.Content`
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
`,Xc=q.SubContent`
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
`,Zc=Te(q.Trigger),Sn=e=>e`
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

`,Qc=Sn(q.Item),es=Sn(q.Checkbox),ts=Sn(q.Radio),ns=Sn(q.SubTrigger),os=q.Label`
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
`,rs=q.Separator`
  height 1
  margin $dropdown-separator-margin
  background $sinewy-neutral-6
`,ds=q.Indicator`
  width $dropdown-indicator-width
  display inline-grid
  place-items center
  position absolute
  inset-inline-start $dropdown-indicator-start
  flex 0 0 $dropdown-indicator-width
  font-size $dropdown-indicator-font-size
  font-weight 900
`,Kd=d`kbd
  margin-inline-start auto
  color currentColor
  font-family inherit
  font-size inherit
  line-height inherit
  opacity 0.58
`,is=d`svg
  width 14
  height 14
  display block
  margin-inline-start auto
  flex 0 0 14px
  opacity 0.72

  &:dir(rtl) {
    transform rotate(180deg)
  }
`,L=d((e,t)=>q(e,t));L.Trigger=d(({size:e="2",variant:t="solid",color:n="gray",highContrast:o=!1,data:r,style:i,...a},c)=>Zc({...a,style:R(n,i),data:P(r,{size:e,variant:t,color:n,highContrast:o})},c));L.Content=d(({size:e="2",variant:t="solid",color:n="gray",highContrast:o=!1,data:r,style:i,...a},c,s)=>{let l={size:e,variant:t,color:n,highContrast:o};return Jc({...a,style:R(n,i),data:P(r,{size:e,variant:t,color:n,highContrast:o})},Wd(s,l,c))});L.Item=Tn(Qc);L.Checkbox=Tn(es);L.Radio=Tn(ts);L.SubTrigger=Tn(ns,cs);L.SubContent=d(({size:e,variant:t,color:n,highContrast:o,data:r,style:i,...a},c,s)=>{let l=jo(s,{size:e,variant:t,color:n,highContrast:o});return Xc({...a,style:n==null?i:R(n,i),data:P(r,l)},Wd(s,l,c))});L.Label=d(({size:e,data:t,...n},o,r)=>{let i=jo(r,{size:e});return os({...n,data:P(t,{size:i.size})},o)});L.Separator=d((e,t)=>rs(e,t));L.Indicator=d((e,t)=>ds(e,t));L.Shortcut=d((e,t)=>Kd(e,t));L.TriggerIcon=d((e,t)=>as(e,t));L.Group=q.Group;L.RadioGroup=q.RadioGroup;L.Sub=q.Sub;var B=d((e,t)=>ot(e,t));B.Trigger=ot.Trigger;B.Content=L.Content;B.Item=L.Item;B.Checkbox=L.Checkbox;B.RadioGroup=ot.RadioGroup;B.Radio=L.Radio;B.Indicator=L.Indicator;B.Group=ot.Group;B.Label=L.Label;B.Separator=L.Separator;B.Sub=ot.Sub;B.SubTrigger=L.SubTrigger;B.SubContent=L.SubContent;B.Shortcut=L.Shortcut;function Tn(e,t){return d(({size:n,color:o,highContrast:r,shortcut:i,data:a,style:c,...s},l,p)=>{let h=jo(p,{size:n,highContrast:r}),u=i==null?l:[...l,Kd(i)];return e({...s,style:o==null?c:R(o,c),data:P(a,{size:h.size,variant:h.variant,color:o,highContrast:h.highContrast})},t==null?u:[...u,t()])})}function jo(e,t){let n=e[Ud]||{};return Object.fromEntries(["size","variant","color","highContrast"].map(o=>[o,t[o]==null?n[o]:t[o]]))}function Wd(e,t,n){let o=Object.create(e);return o[Ud]=t,d({context:o},()=>n)}function as(e){return d`svg
    width 14
    height 14
    display block
    flex 0 0 14px
  `({...e,viewBox:"0 0 14 14",fill:"none",focusable:"false","aria-hidden":e["aria-hidden"]==null?"true":e["aria-hidden"]},d`path`({d:"M3.5 5.25 7 8.75l3.5-3.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))}function cs(){return is({viewBox:"0 0 14 14",fill:"none",focusable:"false","aria-hidden":"true"},d`path`({d:"M5.25 3.5 8.75 7l-3.5 3.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))}var M=L;var Yd=[{title:"Alert Dialog",description:"A Dialog specialization for decisions that require immediate attention.",slug:"alert-dialog",source:"docs/components/alert-dialog.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"why-it-shares-dialog-parts",text:"Why it shares Dialog parts"},{depth:2,id:"state-and-events",text:"State and events"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"alertdialogattrs-children",text:"AlertDialog(attrs?, ...children)"},{depth:3,id:"alertdialogtriggerattrs-children",text:"AlertDialog.Trigger(attrs?, ...children)"},{depth:3,id:"alertdialogcontentattrs-children",text:"AlertDialog.Content(attrs?, ...children)"},{depth:3,id:"alertdialogtitleattrs-children",text:"AlertDialog.Title(attrs?, ...children)"},{depth:3,id:"alertdialogdescriptionattrs-children",text:"AlertDialog.Description(attrs?, ...children)"},{depth:3,id:"alertdialogcloseattrs-children",text:"AlertDialog.Close(attrs?, ...children)"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
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
<p>Unlike the headless root, the themed root renders a positioned wrapper. Its listbox inherits the root&#39;s light/dark-aware palette. Both versions place the listbox in the browser&#39;s popover top layer, aligned with the control and flipped above it when space below is limited. Resize and scroll keep the list aligned. All themed parts still support normal Sin style extension.</p>
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
<p>The popup uses the Popover API&#39;s top layer to escape clipping ancestors, with viewport-aware positioning that flips above the trigger when needed. Target browsers must support the Popover API and ResizeObserver. Custom selection requires JavaScript; choose NativeSelect for a functional no-JavaScript control.</p>
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
`}],_d=Object.fromEntries(Yd.map(e=>[e.slug,e]));var An=Yd;d.title="Sinewy \u2014 Documentation";d.css.reset``;d.css`
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
`;var ss=d(({},[],{route:e})=>ls(e({"/":Ps,"/components/:slug":$s,"/?":li}))),ls=d`div
  min-height 100svh
  display grid
  grid-template-columns 256px minmax(0, 1fr)

  @media (max-width: 780px) {
    grid-template-columns 1fr
  }
`,ps=d`aside
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
`,ni=d`a
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
`,oi=d`span
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
`,us=d`nav
  display grid
  align-content start
  gap 25
`,Jd=d`section
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
`,Xd=d`a
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
`,hs=d`footer
  display grid
  gap 6
  color #85837c
  font-size 11
  line-height 1.45

  strong {
    color #5c5c57
    font-weight 680
  }
`,fs=d`nav
  min-width 0
  display none
  align-items center
  gap 5
  overflow-x auto

  @media (max-width: 780px) {
    display flex
  }
`,Zd=d`a
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
`,gs=d`main
  min-width 0
  grid-column 2

  @media (max-width: 780px) {
    grid-column 1
  }
`,Ho=d`div
  width min(100%, 1100px)
  display grid
  gap 48
  margin 0 auto
  padding 72 52 96

  @media (max-width: 780px) {
    padding 44 20 72
  }
`,ms=d`header
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
`,ri=d`div
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
`,No=d`section
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
`,bs=d`div
  display grid
  grid-template-columns repeat(3, minmax(0, 1fr))
  gap 12

  @media (max-width: 900px) {
    grid-template-columns 1fr
  }
`,Fo=d`article
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
`,Vo=d`div
  display flex
  align-items center
  justify-content space-between
  gap 12
`,Pn=d`span
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
`,Qd=d`div
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
`,di=d`a
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
`,ii=d`span
  width 34
  height 34
  display grid
  place-items center
  border-radius 50%
  background #f0eee8
  color #555650
  font-size 18
`,ys=d`ol
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
`,Dn=d`span
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
`,ai=d`header
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
`,vs=d`div
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
`,ws=d`div
  display flex
  flex-wrap wrap
  align-items center
  gap 7
`,xs=d`span
  padding 5 8
  border 1px solid #d9d6cd
  border-radius 99
  color #6c6c66
  font-size 10
  font-weight 650
`,ks=d`div
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
`,Cs=d`article
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
`,Ss=d`div
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
`,Ts=d`aside
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
`,ce=d`div
  min-height 230
  display grid
  place-items center
  padding 28
  border 1px solid #dad7ce
  border-radius 15 15 0 0
  background-color #f2f0e9
  background-image radial-gradient(#d8d4c9 0.7px, transparent 0.7px)
  background-size 13px 13px
`,As=d`div
  display grid
  gap 16
`,ei=d`section
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
`,Et=d`div
  display flex
  flex-wrap wrap
  align-items center
  gap 9
`,Ds=d`div
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
`,se=d`pre
  overflow-x auto
  padding 18 20
  border-radius 0 0 15px 15px
  background #242522
  color #e9e8e2
  font-family "SFMono-Regular", Consolas, "Liberation Mono", monospace
  font-size 12
  line-height 1.65
  tab-size 2
`,Is=B.Trigger`
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
`,ci=d`div
  display flex
  justify-content flex-end
  gap 8
  margin-top 24
`,Ie=d`label
  display inline-flex
  align-items center
  gap 9
  color #343532
  font-size 13
  font-weight 680
  cursor pointer
`,si=d`div
  width 100%
  display grid
  grid-template-columns repeat(2, minmax(0, 1fr))
  align-items start
  gap 26

  @media (max-width: 720px) {
    grid-template-columns 1fr
  }
`,$n=d`div
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
`,Uo={"alert-dialog":{status:"Preview",tags:["Native dialog","Alert semantics","Dialog specialization"],summary:"An urgent-decision specialization of Dialog that enforces the native alertdialog role.",preview:Rs,previewHeadings:[{id:"live-example",text:"Live example"}]},button:{status:"Preview",tags:["Native control","Shared theme","Form-safe"],summary:"A compact themed native control with four variants and full button attribute forwarding.",preview:zs,previewHeadings:[{id:"live-example",text:"Live example"}]},toggle:{status:"Preview",tags:["Native control","Pressed state","Shared theme"],summary:"A native two-state button with controlled, uncontrolled, and live binding contracts.",preview:Es,previewHeadings:[{id:"live-example",text:"Live example"}]},dialog:{status:"Preview",tags:["Native dialog","Modal top layer","Controlled state"],summary:"A native modal dialog with accessible semantic parts and shared Sinewy theming.",preview:qs,previewHeadings:[{id:"live-example",text:"Live example"}]},switch:{status:"Preview",tags:["Native checkbox","Form control","Shared theme"],summary:"A native checkbox switch with real form behavior and controlled, uncontrolled, and live state.",preview:Ms,previewHeadings:[{id:"live-example",text:"Live example"}]},"custom-select":{status:"Preview",tags:["No search field","Top-layer listbox","Form control"],summary:"Consistently styled single selection with grouped options, typeahead, and native form integration.",preview:Ns,previewHeadings:[{id:"live-example",text:"Live example"}]},select:{status:"Preview",tags:["Native select","Optgroup","Shared theme"],summary:"A themed native scalar select with option groups and controlled, uncontrolled, and live values.",preview:js,previewHeadings:[{id:"live-example",text:"Live example"}]},checkbox:{status:"Preview",tags:["Native checkbox","Array binding","Fieldset group"],summary:"A native checkbox with boolean state and optional array-valued fieldset grouping.",preview:Gs,previewHeadings:[{id:"live-example",text:"Live example"}]},combobox:{status:"Preview",tags:["Searchable","Single + multiple","Headless + theme"],summary:"A searchable single- or multiple-value field with accessible option and pill navigation.",preview:Ks,previewHeadings:[{id:"live-example",text:"Live example"}]},radio:{status:"Preview",tags:["Native radio","Scalar binding","Fieldset group"],summary:"A native radio with a named fieldset group and one shared scalar value.",preview:Us,previewHeadings:[{id:"live-example",text:"Live example"}]},"context-menu":{status:"Preview",tags:["Popover API","Point anchors","Headless + theme"],summary:"Contextual actions at pointer or keyboard invocation points, backed by the shared menu engine.",preview:Ys,previewHeadings:[{id:"live-example",text:"Live example"}]},dropdown:{status:"API reviewed",tags:["Popover API","CSS anchors","Headless + theme"],summary:"Actions, checkbox and radio choices, nested menus, room-aware placement, and a theme facade.",preview:Ws,previewHeadings:[{id:"live-example",text:"Live example"},{id:"theme-preview",text:"Theme preview"}]}};function Ko(e,t){return[ps(ni({href:"/"},oi("S"),d`span`(d`strong`("Sinewy"),d`span`("Documentation"))),us(Jd(d`h2`("Start here"),Xd({href:"/",data:{active:t.has("/")||void 0}},"Overview")),Jd(d`h2`("Components"),An.map(n=>Xd({href:"/components/"+n.slug,data:{active:t.has("/components/"+n.slug)||void 0}},n.title,d`span`(Uo[n.slug]?.status||"Preview"))))),hs(d`strong`("Independent preview"),"Built for Sin.js with the platform.")),gs(e)]}function Ps({},[],{route:e,doc:t}){return t.title("Sinewy \u2014 Documentation"),Ko([Wo(e),Ho(ms(ri("Independent components for Sin.js"),d`h1`("Small parts. Native behavior."),d`p`("Sinewy is an independently maintained component library for Sin.js. This site documents each public surface as it becomes useful, testable, and honest about its platform boundaries.")),No(d`header`(d`h2`("Where things stand"),d`p`("The status here follows implemented and verified behavior, not a speculative component catalog.")),bs(Fo(Vo(d`strong`("Portable reference"),Pn("Markdown")),d`p`("Component prose, API tables, and platform limits now come directly from the repository documents."),Qd(d`span`({style:{width:"100%"}}))),Fo(Vo(d`strong`("Behavior suite"),Pn("Green")),d`p`("Browser, server rendering, hydration, submenu, and type declaration coverage are in place."),Qd(d`span`({style:{width:"100%"}}))),Fo(Vo(d`strong`("Accessibility sign-off"),Pn({data:{tone:"manual"}},"Manual")),d`p`("Keyboard behavior is covered; supported-browser and assistive-technology verification remains.")))),No(d`header`(d`h2`("Components"),d`p`("Each component page combines its portable contract with live Sin examples and generated navigation.")),An.map(n=>di({href:"/components/"+n.slug},d`div`(d`h3`(n.title),d`p`(Uo[n.slug]?.summary||n.description)),ii("\u2192")))),No({id:"roadmap"},d`header`(d`h2`("Documentation roadmap"),d`p`("The site itself is the visible checklist for turning implementation work into a usable system.")),ys(d`li`(Dn({data:{done:""}},"\u2713"),d`div`(d`strong`("Establish the documentation shell"),"Navigation, progress overview, component layout, and live examples.")),d`li`(Dn({data:{done:""}},"\u2713"),d`div`(d`strong`("Render portable Markdown"),"Frontmatter, GFM content, heading IDs, links, and tables feed the site directly.")),d`li`(Dn({data:{current:""}},"3"),d`div`(d`strong`("Generate the static site"),"Use Sin SSR and route discovery to publish every documented component.")),d`li`(Dn("4"),d`div`(d`strong`("Expand through real components"),"Add primitives only as their contracts become concrete enough to document.")))))],e)}function $s({slug:e},[],t){let n=_d[e];if(!n)return t.doc.status(404),li({},[],t);let o=Uo[e]||{},r=o.preview?o.preview():[],i=o.previewHeadings||[];return t.doc.title(n.title+" \u2014 Sinewy"),Ko([Wo(t.route),Ho(ai(vs(d`a`({href:"/"},"Components"),d`span`("/"),d`span`(n.title)),ws(Pn(o.status||"Preview"),(o.tags||[]).map(a=>xs(a))),d`h1`(n.title),d`p`(n.description)),ks(Cs(r,Ss({data:{source:n.source}},d.trust(n.html))),Ts(d`strong`("On this page"),[...i,...n.headings.filter(a=>a.depth===2)].map(a=>d`a`({href:"#"+a.id},a.text)))))],t.route)}function zs(){return d`section#live-example`(d`h2`("Live example"),d`p`("A native button with shared size, variant, color, and contrast styling. Tab to see its focus-visible treatment."),d`div`(ce(Et(Le({variant:"solid",color:"accent"},"Save"),Le({variant:"soft",color:"cyan"},"Duplicate"),Le({variant:"outline",color:"green"},"Publish"),Le({variant:"ghost",color:"red"},"Delete"))),se(`import { Button } from 'sinewy'

Button({
  size: '2',
  variant: 'solid',
  color: 'accent',
  highContrast: false
}, 'Save')`)))}var Os=d(()=>{let e=d.live(!1);return()=>Et(At({bind:e,variant:"soft"},e()?"Bold on":"Bold"),At({defaultPressed:!0,variant:"outline",color:"green"},"Pinned"),At({variant:"ghost",color:"crimson","aria-label":"Mute audio"},"\u266A"))});function Es(){return d`section#live-example`(d`h2`("Live example"),d`p`("Activate a toggle to see its persistent pressed state. The same control theme becomes neutral while off and colored while on."),d`div`(ce(Os()),se(`import s from 'sin'
import { Toggle } from 'sinewy'

const bold = s.live(false)

Toggle({
  bind: bold,
  size: '2',
  variant: 'soft',
  color: 'accent'
}, 'Bold')`)))}function qs(){return d`section#live-example`(d`h2`("Live example"),d`p`("Open the native modal to see top-layer focus containment, the themed backdrop, and semantic title and description relationships."),d`div`(ce(Y(Y.Trigger({variant:"solid"},"Edit profile"),Y.Content(Y.Title("Edit profile"),Y.Description("Change the public details shown on your account."),ci(Y.Close("Cancel"),Y.Close({variant:"solid",color:"accent"},"Save changes"))))),se(`import { Dialog } from 'sinewy'

Dialog(
  Dialog.Trigger('Edit profile'),
  Dialog.Content(
    Dialog.Title('Edit profile'),
    Dialog.Description('Change your public details.'),
    Dialog.Close('Cancel'),
    Dialog.Close({ variant: 'solid' }, 'Save changes')
  )
)`)))}function Rs(){return d`section#live-example`(d`h2`("Live example"),d`p`("The alert specialization keeps Dialog behavior while announcing an urgent decision and initially focusing the safest choice."),d`div`(ce(Ae(Ae.Trigger({variant:"outline",color:"red"},"Delete account"),Ae.Content({color:"red"},Ae.Title("Delete account?"),Ae.Description("This action permanently removes the account and its saved data."),ci(Ae.Close({autofocus:!0},"Cancel"),Ae.Close({variant:"solid",color:"red"},"Delete"))))),se(`import { AlertDialog } from 'sinewy'

AlertDialog(
  AlertDialog.Trigger('Delete account'),
  AlertDialog.Content(
    AlertDialog.Title('Delete account?'),
    AlertDialog.Description('This cannot be undone.'),
    AlertDialog.Close({ autofocus: true }, 'Cancel'),
    AlertDialog.Close({ variant: 'solid', color: 'red' }, 'Delete')
  )
)`)))}var Ls=d(()=>{let e=d.live(!0);return()=>Et(Ie(It({bind:e}),"Notifications"),Ie(It({defaultChecked:!0,color:"green"}),"Auto-save"),Ie(It({color:"crimson",highContrast:!0}),"Public profile"))});function Ms(){return d`section#live-example`(d`h2`("Live example"),d`p`("Each themed track is still a native labelled checkbox, including keyboard, form, focus, and reset behavior."),d`div`(ce(Ls()),se(`import s from 'sin'
import { Switch } from 'sinewy'

const notifications = s.live(true)

s\`label\`(
  Switch({
    bind: notifications,
    color: 'accent'
  }),
  'Notifications'
)`)))}var Bs=d(()=>{let e=d.live("pear");return()=>ee({bind:e,name:"produce","aria-label":"Produce",color:"cyan"},ee.Group({label:"Fruit"},ee.Option({value:"apple"},"Apple"),ee.Option({value:"pear"},"Pear")),ee.Group({label:"Vegetables"},ee.Option({value:"carrot"},"Carrot")))});function js(){return d`section#live-example`(d`h2`("Live example"),d`p`("For a consistently themed picker across supported browsers, try ",d`a`({href:"/components/custom-select"},"Custom Select"),". This native Select remains unchanged and is also exported as NativeSelect."),d`p`("Supporting browsers render the native picker with Sinewy\u2019s menu surface, grouped options, selection gutter, and theme colors. Browsers without customizable select support keep their platform-native picker."),d`div`(ce(Bs()),se(`import s from 'sin'
import { Select } from 'sinewy'

const produce = s.live('pear')

Select({ bind: produce, name: 'produce' },
  Select.Group({ label: 'Fruit' },
    Select.Option({ value: 'apple' }, 'Apple'),
    Select.Option({ value: 'pear' }, 'Pear')
  )
)`)))}function Ns(){return d`section#live-example`(d`h2`("Live example"),d`p`("Choose from a consistently styled list without a search field. Both pickers below share the same value; the native picker remains available when platform behavior is preferred."),ce(Fs()),se(`import s from 'sin'
import { CustomSelect } from 'sinewy'

const produce = s.live('pear')

CustomSelect({ bind: produce, name: 'produce', 'aria-label': 'Produce' },
  CustomSelect.Group({ label: 'Fruit' },
    CustomSelect.Option({ value: 'apple' }, 'Apple'),
    CustomSelect.Option({ value: 'pear' }, 'Pear')
  ),
  CustomSelect.Option({ value: 'carrot' }, 'Carrot')
)`))}var Fs=d(()=>{let e=d.live("pear"),t="Choose a value, then submit or reset.";return()=>d`div display grid; gap 24`(si($n(d`label`({for:"custom-produce"},"Custom picker"),me({id:"custom-produce",bind:e,defaultValue:"pear",color:"cyan"},Go(me)),d`p`("No search input. Type a letter to jump to an option.")),$n(d`label`({for:"native-produce"},"Native picker"),ee({id:"native-produce",bind:e,color:"cyan"},Go(ee)),d`p`("The same selection, using the platform picker."))),d`div display flex; gap 12; flex-wrap wrap`(["1","2","3"].map(n=>me({size:n,defaultValue:"pear","aria-label":"Size "+n,style:{width:"140px"}},Go(me)))),d`form display grid; gap 12`({onsubmit:n=>{n.preventDefault(),t="Submitted: "+new FormData(n.currentTarget).get("delivery")},onreset:()=>t="Reset: choose a delivery method."},d`label`({for:"delivery-method"},"Delivery method (required)"),me({id:"delivery-method",name:"delivery",required:!0,placeholder:"Choose delivery",color:"indigo"},me.Option({value:"standard"},"Standard delivery"),me.Option({value:"express"},"Express delivery"),me.Option({value:"collection",disabled:!0},"Collection \u2014 unavailable")),d`div display flex; gap 8`(Le({type:"submit"},"Submit"),Le({type:"reset",variant:"outline"},"Reset")),d`p`({role:"status"},t)))});function Go(e){return[e.Group({label:"Fruit"},e.Option({value:"apple"},"Apple"),e.Option({value:"pear"},"Pear"),e.Option({value:"orange",disabled:!0},"Orange \u2014 unavailable")),e.Group({label:"Vegetables"},e.Option({value:"carrot"},"Carrot"),e.Option({value:"broccoli"},"Broccoli"))]}var Vs=d(()=>{let e=d.live(["email"]);return()=>st.Group({bind:e,name:"channels",color:"green"},d`legend`("Notifications"),Ie(st({value:"email"}),"Email"),Ie(st({value:"sms"}),"SMS"),Ie(st({value:"push"}),"Push"))});function Gs(){return d`section#live-example`(d`h2`("Live example"),d`p`("The fieldset binds its checked native values to one array while labels, form data, focus, and toggling remain HTML behavior."),d`div`(ce(Vs()),se(`import s from 'sin'
import { Checkbox } from 'sinewy'

const channels = s.live(['email'])

Checkbox.Group({ bind: channels, name: 'channels' },
  s\`legend\`('Notifications'),
  s\`label\`(Checkbox({ value: 'email' }), 'Email'),
  s\`label\`(Checkbox({ value: 'sms' }), 'SMS')
)`)))}var Hs=d(()=>{let e=d.live("free");return()=>lt.Group({bind:e,name:"plan",color:"purple"},d`legend`("Plan"),Ie(lt({value:"free"}),"Free"),Ie(lt({value:"pro"}),"Pro"),Ie(lt({value:"team"}),"Team"))});function Us(){return d`section#live-example`(d`h2`("Live example"),d`p`("The named native radio group shares one live string value and keeps fieldset, legend, label, form, and arrow-key semantics."),d`div`(ce(Hs()),se(`import s from 'sin'
import { Radio } from 'sinewy'

const plan = s.live('free')

Radio.Group({ bind: plan, name: 'plan' },
  s\`legend\`('Plan'),
  s\`label\`(Radio({ value: 'free' }), 'Free'),
  s\`label\`(Radio({ value: 'pro' }), 'Pro')
)`)))}function Ks(){return d`section#live-example`(d`h2`("Live example"),d`p`("Type to narrow the account list. The multiple field keeps selections as pills that can be reached with Backspace or arrow keys and removed with Backspace or Delete."),d`div`(ce(Js()),se(`import s from 'sin'
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
)`)))}function Ws(){return[d`section#live-example`(d`h2`("Live example"),d`p`("The themed facade keeps the headless part structure and remains open to normal Sin style extension."),d`div`(ce(_s()),se(`import Dropdown from 'sinewy/theme'

Dropdown(
  Dropdown.Trigger('Open menu'),
  Dropdown.Content(
    Dropdown.Item('Edit'),
    Dropdown.Checkbox({ checked: true },
      Dropdown.Indicator('\u2713'),
      'Notifications'
    )
  )
)`))),d`section#theme-preview`(d`h2`("Theme preview"),d`p`("Size and color establish an inherited menu scope. Parts can make deliberate local overrides."),As(ei(d`h3`("Sizes"),Et(In({label:"Size 1",size:"1",color:"indigo"}),In({label:"Size 2",size:"2",color:"indigo"}),In({label:"Size 3",size:"3",color:"indigo"}))),ei(d`h3`("Colors"),Et(...["gray","indigo","cyan","green","amber","crimson","purple"].map(e=>In({label:Xs(e),variant:"soft",color:e}))))))]}function Ys(){return d`section#live-example`(d`h2`("Live example"),d`p`("Right-click or press and hold the target, or focus it and press Shift+F10."),d`div`(ce(B(Is("Open a contextual menu here"),B.Content({variant:"soft",color:"indigo"},B.Item({shortcut:"\u2318 R"},"Rename"),B.Item({shortcut:"\u2318 D"},"Duplicate"),B.Separator(),B.Item({color:"red"},"Delete")))),se(`import { ContextMenu } from 'sinewy/theme'

ContextMenu(
  ContextMenu.Trigger('Right-click here'),
  ContextMenu.Content({ variant: 'soft', color: 'indigo' },
    ContextMenu.Item({ shortcut: '\u2318 R' }, 'Rename'),
    ContextMenu.Item('Duplicate')
  )
)`)))}var _s=d(()=>{let e=d.live(!0);return()=>M(M.Trigger({variant:"outline",color:"accent",size:"2"},"Open menu",M.TriggerIcon()),M.Content({align:"start",offset:7,variant:"soft",color:"indigo"},M.Label("Workspace"),M.Item({shortcut:"\u2318 E"},"Edit details"),M.Checkbox({bind:e},M.Indicator("\u2713"),"Notifications"),M.Separator(),M.Sub(M.SubTrigger("Share"),M.SubContent(M.Item("Copy link"),M.Item("Invite people")))))}),Js=d(()=>{let e=d.live("assets:bank"),t=d.live(["assets:bank","expenses:office"]);return()=>si($n(d`label`({for:"single-account"},"Single account"),ae({id:"single-account-picker",bind:e,color:"indigo"},ae.Control(ae.Input({id:"single-account",placeholder:"Find an account"})),ae.Content(ti())),d`p`("The selected account is displayed as editable text.")),$n(d`label`({for:"multiple-accounts"},"Multiple accounts"),ae({id:"multiple-accounts-picker",multiple:!0,bind:t,color:"cyan"},ae.Control(ae.Pills(),ae.Input({id:"multiple-accounts",placeholder:"Add an account"})),ae.Content(ti())),d`p`("Backspace at the start of the input selects the last pill.")))});function ti(){return[["assets:bank","Assets:Bank"],["assets:vat","Assets:VAT receivable"],["expenses:office","Expenses:Office"],["expenses:software","Expenses:Software"],["income:consulting","Income:Consulting"]].map(([e,t])=>ae.Item({value:e,textValue:t},t))}function In({label:e,size:t="2",variant:n="solid",color:o,highContrast:r=!1,dark:i=!1}){return Ds({data:{dark:i||null}},d`span`(e),M(M.Trigger({size:t,variant:n==="soft"?"soft":"outline",color:o,highContrast:r},"Open",M.TriggerIcon()),M.Content({size:t,variant:n,color:o,highContrast:r,align:"start",offset:6},M.Item({shortcut:"\u2318 E"},"Edit"),M.Checkbox({checked:!0},M.Indicator("\u2713"),"Enabled"),M.Item({color:"red"},"Delete"))))}function Xs(e){return e[0].toUpperCase()+e.slice(1)}function Wo(e){return d`header
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
  `(ni({href:"/"},oi("S"),d`strong`("Sinewy")),fs(Zd({href:"/",data:{active:e.has("/")||void 0}},"Overview"),An.map(t=>Zd({href:"/components/"+t.slug,data:{active:e.has("/components/"+t.slug)||void 0}},t.title))))}function li({},[],{route:e,doc:t}){return t.title("Not found \u2014 Sinewy"),Ko([Wo(e),Ho(ai(ri("404"),d`h1`("Nothing here yet."),d`p`("This documentation is growing alongside the component system."),di({href:"/"},d`div`(d`h3`("Return to the overview"),d`p`("See current progress and available component pages.")),ii("\u2192"))))],e)}var Su=d.mount(ss);export{Su as default};
