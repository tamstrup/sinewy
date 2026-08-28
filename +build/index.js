typeof globalThis>"u"&&(window.globalThis=window);var v=typeof window>"u"?{}:window;var qn=Symbol("stackTrace"),Me=Object.freeze({}),Fn=Object.freeze([]),Lt=Promise.resolve(),x={}.hasOwnProperty,ae=new WeakSet;function Nn(e){return typeof e=="function"?e():e}function Je(e){return e&&String(e).replace(/\/+/g,"/").replace(/(.)\/\*?$/,"$1")}function Le(e){return e&&Je(e).replace("/?","?")}function Xe(e){return e.replace(/(\B[A-Z])/g,"-$1").toLowerCase()}function B(e){return e&&C(e.observe)}function C(e){return typeof e=="function"}function Bn(e){return e&&C(e.then)}function jt(e){return e.charCodeAt(0)===111&&e.charCodeAt(1)===110}function Ze(e){return typeof e=="boolean"||e==null}function qt(e){return e&&Array.isArray(e.raw)}function Ft(e){return e.charCodeAt(0)===36?"--"+e.slice(1):e.charCodeAt(0)===45&&e.charCodeAt(1)===45?e:null}function Nt(e){return e==="dom"||e==="type"||e==="value"||e==="key"||e==="src"||e==="srcset"||e==="href"||e==="class"||e==="className"||e==="data"||e==="style"||e==="deferrable"||e==="is"||e==="handleEvent"}function Bt(e){for(;e.parent&&!e.name;)e=e.parent;return e.name}function Gn(e){for(;e.parent&&!e.id;)e=e.parent;return e.id}function Pr(e){let t=e.classes||"";for(;e.parent;)e=e.parent,t+=" "+e.classes||"";return t}function Un(e){return(Mt(e.attrs.class)+Mt(e.attrs.className)+Pr(e.tag)).trim()}function Qe(e){return Array.isArray(e)?e:[e]}function de(){}function et(e){return Ft(e)||(e==="cssFloat"?"float":Xe(e))}function Mt(e){return B(e)||C(e)?Mt(e()):e?typeof e=="object"?zr(e):e+" ":""}function zr(e){let t;for(let n in e)e[n]&&(t=t==null?n:[t,n].join(" "));return t||""}function tt(e,t,n){t?e.style.setProperty("min-width",t+"px"):e.style.removeProperty("min-width"),n?e.style.setProperty("min-height",n+"px"):e.style.removeProperty("min-height")}function xe(e,[t,n,o,r]=[],{callbacks:i,depth:a}={}){if(e===document.documentElement)tt(e,o,r),window.scrollTo(t||0,n||0);else{if(a){let c=document.createElement("div");c.style="position:absolute;width:1px;height:1px;top:"+(r-1)+"px;left:"+(o-1)+"px",e.appendChild(c),ae.add(c),i.push(()=>(ae.delete(c),c.remove()))}e.scrollLeft=t,e.scrollTop=n}}function Hn(e,t){return!t||!t.tag?e:!e||!e.tag?(e.tag=t.tag,e):(e.tag={id:t.tag.id||e.tag.id,name:t.tag.name||e.tag.name,classes:(e.tag.classes?e.tag.classes+" ":"")+t.tag.classes,args:t.tag.args,vars:t.tag.vars,parent:e.tag},e)}var N=class{constructor(t,n,o=null,r=0,i=Me,a=Fn){this.nesting=r,this.component=n,this.inline=t,this.tag=o,this.attrs=i,this.key=i?i.key:void 0,this.dom=null,this.children=a}};["head","get","put","post","delete","patch"].forEach(e=>ke[e]=function(t,n={}){return n.method=e,ke(t,n)});ke.redraw=()=>{};var Rr=typeof Uint8Array>"u"?[]:[Object.getPrototypeOf(Uint8Array)],$r="Blob ArrayBuffer DataView FormData URLSearchParams File".split(" ").map(e=>globalThis[e]).filter(e=>e).concat(Rr);function ke(e,{url:t=new URL(e,v.location.origin),method:n="GET",responseType:o,json:r="application/json",query:i,body:a,user:c=t.username,pass:s=t.password,headers:l={},config:u,timeout:h=0,signal:p,...f}={}){let g=new v.XMLHttpRequest(f);p?.addEventListener("abort",()=>g.abort());let b=!1,D=new Promise(($,S)=>{let J,we;n=n.toUpperCase(),g.addEventListener("readystatechange",function(){if(g.readyState===g.DONE)try{g.headers=g.headers||Lr(g.getAllResponseHeaders()),g.status&&Object.defineProperty(g,"body",{enumerable:!0,value:J===r?g.response===void 0||g.response===""?void 0:JSON.parse(g.response):g.response}),g.status===304||g.status>=200&&g.status<300?$(b?g:g.body):S(Mr(g))}catch(X){S(X)}}),g.addEventListener("error",S),g.addEventListener("abort",()=>S(new Error("ABORTED"))),g.addEventListener("timeout",()=>S(new Error("TIMEOUT"))),i&&(i=new URLSearchParams(i))&&i.size&&i.forEach((X,ve)=>t.searchParams.append(ve,X)),g.open(n,""+t,!0,c,s),g.timeout=h,o&&(g.responseType=o),Object.entries(l).forEach(([X,ve])=>{ve&&g.setRequestHeader(X,ve),X.toLowerCase()==="accept"&&(J=ve),X.toLowerCase()==="content-type"&&(we=ve)}),!J&&!o&&r&&g.setRequestHeader("Accept",J=r),!we&&a!==void 0&&!$r.some(X=>a instanceof X)&&r&&g.setRequestHeader("Content-Type",we=r),u&&u(g),g.send(we===r?JSON.stringify(a):a)}).catch($=>{let S=Object.assign(new Error($.message),{...$,url:t,status:g.status,headers:g.headers,body:g.body||g.response});throw Object.defineProperty(S,"xhr",{value:g}),S});return Object.defineProperties(D,{abort:{value:()=>g.abort(),enumerable:!0},xhr:{get:()=>(b=!0,D)}})}function Mr(e){return new Error(e.status?e.status+(e.statusText?" "+e.statusText:""):"Unknown")}function Lr(e){let t={};return e.split(`
`).forEach(n=>{let o=n.indexOf(":"),r=n.substring(0,o).trim().toLowerCase(),i=n.substring(o+1).trim();r==="set-cookie"?t[r]?t[r].push(i):t[r]=[i]:t[r]=i}),t}function Se(e,...t){let n=new Set;return t.forEach(s=>C(s)&&n.add(s)),a.value=e,a.observe=o,a.valueOf=a.toString=a.toJSON=()=>e,a.detach=de,a.reduce=c,a.set=s=>(...l)=>(a(C(s)?s(...l):s),a),a.get=s=>Object.assign(r.bind(null,s),{observe:l=>a.observe(()=>l(r(s)))}),a.if=(...s)=>Object.assign(i.bind(null,...s),{observe:l=>a.observe(()=>l(i(...s)))}),a;function o(s,l){let u=l?(...h)=>(n.delete(u),s(...h)):s;return n.add(u),()=>n.delete(u)}function r(s){return C(s)?s(a.value):a.value[s]}function i(s,l=!0,u=!1){return a.value===s?l:u}function a(s){if(!arguments.length)return a.value;let l=e;return a.value=e=s,n.forEach(u=>a.value!==l&&u(a.value,l,()=>n.delete(u))),a.value}function c(s,l){let u=1,h=Se(arguments.length>1?s(l,a.value,u++):a.value);return a.observe(p=>h(s(h.value,p,u++))),h}}Se.from=function(...e){let t=e.pop(),n=Se(t(...e.map(Gt))),o=e.map(r=>r.observe(()=>n(t(...e.map(Gt)))));return n.detach=()=>o.forEach(Gt),n};function Gt(e){return e()}var Vn=!1,Kn={};function Wn(e){return e.split(/(?=\/)/)}function jr(e,t){return e.reduce((n,o,r)=>(o[1]===":"&&(n[o.slice(2)]=decodeURIComponent(t[r].slice(1))),n),{})}function je(e,t,n,o){let r=h.location=n.location,i=e(({key:p,route:f,...m},[g],b)=>(b.route=je(e,p.replace(/[/*?]$/,""),n,f),f.key=p,()=>c(g,m,b)));return h.root=o?o.root:h,h.parent=o||h,h.query=n.query,h.toString=h,h.state=a,h.has=p=>{let f=s(r);if((p=p.replace(t,""))==="/")return f===t||f==="/"&&t==="";let m=Le(t+"/"+p);return f.indexOf(m)===0&&(f[m.length]===void 0||f[m.length]==="/")},Object.defineProperty(h,"path",{get(){let p=s(r),f=p.indexOf("/",t.length+1);return f===-1?p:p.slice(0,f)}}),h;function a(p){return p&&v.history.replaceState({...history.state,...p},"",r.pathname+r.search+r.hash),v.history?.state}function c(p,f,m){let g=C(p)?p(f,[],m):p;return Bn(g)?e(()=>g)(f):g}function s(p,f=0){return decodeURIComponent(Je(e.route.prefix[0]==="#"?p.hash.slice(e.route.prefix.length+f):e.route.prefix[0]==="?"?p.search.slice(e.route.prefix.length+f):p.pathname.slice(e.route.prefix.length+f)))}async function l(p,{state:f,replace:m=!1,redraw:g=!0,scroll:b=!0}={}){if(p!==s(r)+r.search){if(e.is.server)return n.doc.status(302),n.doc.headers({Location:e.route.prefix+p});e.route.prefix[0]==="#"?v.location.hash=e.route.prefix+p:e.route.prefix[0]==="?"?v.location.search=e.route.prefix+p:v.history[m?"replaceState":"pushState"](f,null,e.route.prefix+p),Kn[p]=f,p.indexOf(r.search)>-1&&n.query(r.search),g&&await e.redraw(),b===!1||e.route.scroll===!1?e.route.scroll=void 0:xe(document.documentElement)}}function u({state:p={}}={}){e.redraw().then(()=>xe(document.documentElement,p?.sinscroll?.[""]))}function h(p,f={}){if(typeof p>"u")return t+"/";if(typeof p=="string")return l(Le(p[0]==="/"?p:"/"+p),f);Vn||(Vn=!0,e.route.prefix[0]==="#"?v.addEventListener("hashchange",u,{passive:!0}):C(v.history.pushState)&&v.addEventListener("popstate",u,{passive:!0}));let m=s(r,t.length),g=Wn(m),{match:b,view:D}=qr(p,g),$=t+(b?b.map((S,J)=>S==="/*"?"*":S==="/?"?"?":g[J]).join(""):"?");return(D===void 0||b[0]==="/?")&&n.doc.status(404),h.params={...h.parent.params,...jr(b||[],g)},i({key:$,route:h,...h.params,...t+m===$&&Kn[t+m]||v.history.state||{},...f},D)}}function qr(e,t){let n=0,o,r;function i(a,c){if(a.charCodeAt(0)!==47&&(a="/"+a),a=Wn(Je(a)),typeof c=="object"&&c!=null){for(let l in c)i(a+l,c[l]);return}let s=Fr(a,t);s>n&&(n=s,o=a,r=c)}for(let a in e)i(a,e[a]);return{match:o,view:r}}function Fr(e,t){return e.reduce((n,o,r)=>n+(o==="/?"?1:o===t[r]?7:o&&t[r]&&o.toLowerCase()===t[r].toLowerCase()?6:o[1]===":"&&t[r]&&t[r].length>1?5:o==="/"&&!t[r]?4:o.indexOf("/...")===0?3:o==="/*"?2:-1/0),0)}function Ut(e,t){let n=URLSearchParams,o=["append","delete","set","sort"],r=t.search,i=new n(r),a,c=e.live();c.replace=u=>(i=new n(u),l()),c.clear=()=>c.replace("");for(let u in n.prototype)c[u]=(...h)=>(a=s()[u](...h),o.includes(u)&&l(),a);return c;function s(){return r===t.search?i:(r=t.search,i=new n(r))}function l(){let u=t.pathname+(i+""?"?"+(i+"").replace(/=$/g,""):"")+t.hash;location.href.endsWith(u)||(v.history.replaceState(v.history.state,null,u),c(t.search),e.redraw())}}var Yn={ai:"align-items",as:"align-self",ac:"align-content",ar:"aspect-ratio",b:"bottom",bg:"background",bf:"backdrop-filter",bc:"background-color",br:"border-radius",bs:"box-shadow",bi:"background-image",c:"color",d:"display",fg:"flex-grow",fb:"flex-basis",f:"float",fd:"flex-direction",ff:"font-family",fs:"font-size",fw:"font-weight",g:"gap",ga:"grid-area",gg:"grid-gap",gta:"grid-template-areas",gtc:"grid-template-columns",gtr:"grid-template-rows",h:"height",jc:"justify-content",js:"justify-self",l:"left",lh:"line-height",ls:"letter-spacing",m:"margin",mb:"margin-bottom",ml:"margin-left",mr:"margin-right",mt:"margin-top",o:"opacity",p:"padding",pb:"padding-bottom",pl:"padding-left",pr:"padding-right",pt:"padding-top",pi:"place-items",pe:"pointer-events",r:"right",t:"top",ta:"text-align",td:"text-decoration",tt:"text-transform",ts:"text-shadow",us:"user-select",va:"vertical-align",ws:"white-space",w:"width",zi:"z-index",z:"zoom"};var Q,rt="s",Be=v.document,Nr=/^(ms|moz|webkit)[-A-Z]/i,Ae=Be.createElement("div"),at=new Map,_n={},Ht={},Vt=new Map,W={$:"calc"},nn=e=>Q||(Q=e||Be.querySelector("style.sin")||Be.createElement("style"));function no(e){if(Vt.has(e))return Vt.get(e);let t=Object.assign(document.createElement("link"),{rel:"stylesheet",href:e});document.head.appendChild(t);let n=new Promise((o,r)=>{t.onload=()=>o(t),t.onerror=r});return Vt.set(e,n),n}var oo=(e,t)=>typeof t=="function"?at.set(e.charCodeAt(0),t):Object.entries(e).forEach(([n,o])=>at.set(n.charCodeAt(0),o)),nt={flex:"",border:"px","line-height":"","box-shadow":"px","border-top":"px","border-left":"px","border-right":"px","border-bottom":"px","text-shadow":"px","@media":"px","@container":"px"},Yt=Array.from(Object.keys(x.call(Ae.style,"width")?Ae.style:Object.getPrototypeOf(Ae.style)).reduce((e,t)=>(e.add(t.match(Nr)?"-"+Xe(t):Xe(t)),e),new Set(["float"]))),Jn=Yt.reduce((e,t)=>{let n=t.match(/-(ms|o|webkit|moz)-/g);if(n){let o=t.replace(/-(ms|o|webkit|moz)-/,"");Yt.indexOf(o)===-1&&(o==="flexDirection"&&(e.flex="-"+n[1].toLowerCase()+"-flex"),e[o]=t)}return e},{}),Kt=new Map,Xn=new Set,Zn=v.CSS&&v.CSS.supports("color","var(--support-test)"),Br=["perspective","blur","drop-shadow","inset","polygon","minmax"],Gr=["@media","@container","@supports","@document","@layer","@starting-style"],ro=e=>Gr.some(t=>e.indexOf(t)===0),Ur=(e,t)=>e==="translate"||t.indexOf("translate")===0||Br.indexOf(t)>-1,Hr=(e,t)=>e==="rotate"||t.indexOf("rotate")===0||t.indexOf("skew")===0,_t=e=>e!==32&&e!==9&&e!==10&&e!==13&&e!==59,io=e=>e>=48&&e<=57||e===46,Vr=e=>e>=65&&e<=90||e>=97&&e<=122||e===45||e===95,Kr=e=>e===37||e>=65&&e<=90||e>=97&&e<=122,Wr=e=>e===34||e===39,Qn=e=>e===32||e===58||e===9,Yr=e=>e===59||e===10||e===125,ao=e=>e===38||e===58||e===64||e===91,_r=e=>e===59||e===125,dt=e=>e[e.length-1],H=[],ee=-1,k=-1,Z=-1,qe=-1,ct=-1,Ce=-1,y=-1,co=-1,se=-1,ne=-1,Jt=-1,K=-1,U=-1,G="",M="",te="&&",he="",Fe="",eo="",it="",P="",Xt="",Zt="",Ne="",Te="",w="",z="",ot="",L=null,to=!0,Ie=!1,Qt=!1,Wt=!0,en=!1,V=0,De=!1,ce=[];function on(e){return e.charCodeAt(0)===36?"--"+e.slice(1):Yn[e]||e}function so(e,t,n){return(e?";":"")+(Ie?t:Jr(t))+":"+n+(co===33?"important":"")}function Jr(e){return _n[e]||(_n[e]=si(on(e)))}function Xr(e){return De?e:e.replace(/,\s*[:[&]?/g,t=>ao(t.charCodeAt(t.length-1))?",&"+dt(t):",& ")}function st(e,t){if(to&&(Q&&Be.head&&Be.head.appendChild(Q),to=!1),Q&&Q.sheet)try{Q.sheet.insertRule(e,t??Q.sheet.cssRules.length)}catch(n){console.error("Insert rule error:",n,e)}}function rn([e,...t],n,o=0,r=!1){if(Q||nn(),Kt.has(e))return{...Kt.get(e),parent:n,args:t};De=r;let i={};ce=[],te="&&",Zt=Ne=Te=P=z=M="",H.length=V=0,se=k=Jt=ct=U=K=-1,L=De?{}:null,en=!1,Qt=!1,Wt=!0,w=e[0];for(let c=0;c<e.length;c++)if(L?lo(0,c===e.length-1):Zr(e,c),w=e[c+1],c<t.length){let s=e[c].slice(k);if(!r&&Zn&&k>=0)G=rt+Math.abs(V).toString(31),i[ot="--"+G+c]={property:M,fns:ce.slice(-1),unit:tn(M,dt(ce)),index:c,transform:K!==-1&&ai},z+=s+"var("+ot+")"+(K===-1?"":(K=-1,")")),k=0;else if(e[c+1].trim().charCodeAt(0)===123)G=rt+Math.abs(V).toString(31),i[ot=G+c]={index:c},H.push("["+ot+"]");else{let l=s+Nn(t[c])+tn(M,dt(ce));z+=l;for(let u=0;u<l.length;u++)V=Math.imul(31,V)+l.charCodeAt(u)|0;Wt=!1,k=k>=0?0:Zn?-1:0}}en&&(De?Object.entries(L).forEach(([c,s])=>{st(c.replace(/&\s+/g,"").replace(/{&$/,"")+"{"+s+"}")}):(G=rt+Math.abs(V).toString(31),Te+=(Te?" ":"")+G,eo=o&&"&".repeat(o+1),Xn.has(G)||Object.entries(L).forEach(([c,s])=>{eo&&(c=c.replace("&","&".repeat(o+1))),st(c.replace(/&/g,"."+G)+"{"+s+"}")})));let a={name:Zt,classes:Te,id:Ne,args:t,vars:i,parent:n};return Wt?Kt.set(e,a):Xn.add(G),a}function Zr(e,t){for(let n=0;n<=w.length;n++)if(y=w.charCodeAt(n),n<w.length&&(V=Math.imul(31,V)+y|0),Qt){if(_t(y)){L={},lo(n++,t===e.length-1);break}}else!_t(y)||n===w.length?(Te=(Z!==-1?w.slice(Z+1,n).replace(/\./g," "):"")+Te,Ne===""&&(Ne=qe!==-1?w.slice(qe,Z===-1?n:Z):""),Zt=w.slice(0,Ne?qe-1:Z!==-1?Z:n),qe=Z=-1,Qt=!0):y===35?qe=n+1:Z===-1&&y===46&&(Z=n)}function Qr(e){return W[e]||e}function lo(e,t){for(let n=e;n<=w.length;n++)co=y,y=w.charCodeAt(n),n<w.length&&(V=Math.imul(31,V)+y|0),Ce===-1&&k!==-1&&(Ie?_r(y):Yr(y)||t&&n===w.length)&&ei(n),Ce!==-1?Ce===y&&w.charCodeAt(n-1)!==92&&(Ce=-1):Ce===-1&&Wr(y)?(Ce=y,k===-1&&(k=n)):y===123?ti(n):y===125||t&&n===w.length?ni():n!==w.length&&ee===-1&&_t(y)?(ee=n,ct=y):!M&&ee>=0&&Qn(y)?(M=w.slice(ee,n),Ie=y===58):k===-1&&M&&!Qn(y)?(k=se=n,io(y)?ne=n:y===36&&(U=n)):k!==-1?po(n):(y===9||y===32)&&(se=n+1)}function ei(e){uo(e),M==="@import"?st(M+" "+w.slice(k,e)+";",0):P+=so(P,M,z+w.slice(k,e)),en=!0,ee=k=-1,Ie=!1,M=z=""}function uo(e){K!==-1?ri(e):U!==-1?oi(e):ne!==-1&&di(e)}function ti(e){M==="animation"?(P&&(L[te]=P),Fe=z+w.slice(k,e).trim(),Xt=z="",P=""):Fe?(it=w.slice(ee,e).trim(),P=""):(P&&(L[te]=P),he=(ct===64?Qr(M)+(Ie?":":" ")+z+(k===-1?"":w.slice(k,e)):w.slice(ee,e)).trim(),he.indexOf(",")!==-1&&(he=Xr(he)),z=M="",H.push((ao(ct)?"":" ")+he+(he==="@font-face"&&++Jt?"/*"+Array(Jt).join(" ")+"*/":"")),te=fo(H),P=L[te]||""),ee=k=-1,Ie=!1,M=""}function ni(){if(it)Xt+=it+"{"+P+"}",it=P="";else if(Fe)P=L[te]||"",G=rt+Math.abs(V).toString(31),st("@keyframes "+G+"{"+Xt+"}"),P+=so(P,"animation",Fe+" "+G),Fe="";else{let e=H.map(n=>n.charCodeAt(0)===64&&ro(n)?"}":"").join(""),t=H.pop();H.length&&H[0].indexOf("@keyframes")===0?L[H[0]]=(L[H[0]]||"")+he+"{"+P+"}":P&&(L[te]=P.trim()+e),t in W&&(L[W[t]+" &&"]=P.trim()),te=fo(H),P=L[te]||""}ee=k=-1,M=""}function po(e){if(io(y)?ne===-1&&(ne=e):y===40?U=-1:uo(e),y===40){let t=w.slice(Math.max(se,k),e);t in W&&(t=W[t]),z+=w.slice(k,e-t.length)+t+"(",ce.push(t),k=se=e+1}else y===41?ce.pop():y===9||y===32?se=e+1:y===36?U=e:U!==-1&&y===47&&(K=e)}function oi(e){w.charCodeAt(e)===47?K=e:Vr(y)||(z=z+w.slice(k,U)+"var(--"+w.slice(U+1,e)+")",k=e,U=-1)}function ri(e){z=z+w.slice(k,U)+"color-mix(in oklab, var(--"+w.slice(U+1,K)+"), transparent "+(w.length===K+1?"":ii(w.slice(K+1,e),w.charCodeAt(e))+")"),k=e+1,U=ne=-1}function ii(e,t){return K=-1,100-(e*(t===37?1:100)).toFixed(0)+"%"}function ai(e){return(100-(typeof e=="string"&&e.charCodeAt(e.length-1)===37?e.slice(0,-1):e*100)).toFixed(0)+"%"}function di(e){Kr(y)?at.has(y)&&(z=z+w.slice(k,ne)+at.get(y)(w.slice(ne,e)),k=e+1):w.charCodeAt(se)!==35&&(z=z+w.slice(k,e)+tn(M,dt(ce)),k=e),ne=-1}function tn(e,t=""){if(e=on(e),e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return"";let n=e+","+t;return x.call(Ht,n)?Ht[n]:Ht[n]=t&&Ur(e,t)?"px":Hr(e,t)?"deg":t?"":ci(e)}function ho(e,{property:t,fns:n,unit:o,transform:r}){if(C(e)&&(e=v.isServerSin&&!B(e)?"6iacvt":e()),r&&(e=r(e)),!e&&e!==0)return"";if(typeof e=="number")return e+o;if(typeof e!="string"&&(e=""+e),e.charCodeAt(0)===36)return"var(--"+e.slice(1)+")";w=e,z="",k=0,ne=se=-1,M=t,ce=n;for(let i=0;i<=e.length;i++)y=e.charCodeAt(i),po(i);return z+e.slice(k)}function fo(e){if(e.length===0)return"&&";let t=0;return e.reduce((n,o,r,i)=>{let a=o.charCodeAt(0);return a===64&&(o.indexOf("@font-face")===0&&r++,ro(o))?(t++,o+"{"+(r===i.length-1?"&&":"")+n):a===58&&o.startsWith(":root")?o+" "+n+(De||r-t?"":a===32?"&":"&&"):n+(De||r-t?"":a===32?"&":"&&")+o},"")}function ci(e){if(e=on(e),Ft(e)||x.call(nt,e))return nt[e];try{return Ae.style[e]="1px",Ae.style.setProperty(e,"1px"),nt[e]=Ae.style[e].slice(-3)==="1px"?"px":""}catch{return nt[e]=""}}function si(e){if(Yt.indexOf(e)===-1){if(Jn[e])return Jn[e];e.indexOf("--")!==0&&v.sindevhmr&&v.console.error(e,"css property not found")}return e}var T=v.document,go={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},un=new Map,pn=Symbol("deferrable"),Ue=Symbol("observable"),Y=Symbol("component"),ht=Symbol("cycle"),hn=Symbol("event"),fn=Symbol("$arrayEnd"),gn=Symbol("$arrayStart"),an=Symbol("class"),dn=Symbol("live"),mo=Symbol("size"),He=Symbol("life"),Ve=Symbol("attr"),bo=Symbol("attrs"),ge=Symbol("source"),yo=Symbol("children"),Ee=Symbol("keyIndex"),_=Symbol("keys"),xo=Symbol("key"),be=Symbol("s"),le=[],pt,ft,ko;function d(...e){let t=typeof e[0];return t==="string"?mn(Object.assign([e[0]],{raw:[]}))(...e.slice(1)):x.call(e[0],be)?e[0](...e.slice(1)):Co(mn,qt(e[0])?So(e):t==="function"?new N(d.redrawing,e):new N(d.redrawing,[e[1],e[0]]))}function mn(...e){return qt(e[0])?Co(mn,So(e,this)):bi(e,this)}function So(e,t){let n=t?t.nesting+1:0;return new N(t&&t.inline,t&&t.component,rn(e,t&&t.tag,n),n)}function Co(e,t){let n=e.bind(t);return n[be]=!0,n}d.redrawing=!1;d.sleep=(e,...t)=>new Promise(n=>setTimeout(n,e,...t));d.with=(e,t)=>e===void 0?e:t(e);d.isAttrs=Ao;d.is={server:d.isServer=v.isServerSin||!1};d.containers=[];d.redraw=gt;d.redraw.force=ki;d.mount=yi;d.css=(...e)=>rn(e,null,0,!0);d.css.alias=To;d.css.reset=Gi;d.css.unit=oo;d.css.load=no;d.style=nn;d.animate=gi;d.animate.transform=fi;d.http=ke;d.live=Se;d.event=ui;d.on=hi;d.trust=pi;d.route=je(d,"",{location:v.location,query:Ut(d,v.location)});d.route.prefix="";d.window=v;d.scroll=!0;d.View=N;d.error=d(e=>(console.error(e),()=>d`pre;all initial;d block;c white;bc #ff0033;p 8 12;br 6;overflow auto;fs 12`(d`code`("Unexpected Error: "+(e.message||e)))));d.jsx=d((e,t)=>t.slice(1));d.container=d((e,t,n)=>{return n.container={},()=>d``({...e,dom:[o].concat(e.dom)},d` display contents`(t));function o(r){r.style.containerType="inline-size";let i=r.firstElementChild;return i.setAttribute("data-sin-container",""),requestAnimationFrame(()=>{i.style.setProperty("transition-behavior","allow-discrete"),i.style.setProperty("transition",d.containers.map(c=>"--sin-container-"+c+" 0.001ms step-start").join(", ")),i.addEventListener("transitionrun",a)}),a(),()=>i.removeEventListener("transitionrun",a);function a(c){let s=getComputedStyle(i);for(let l of d.containers)n.container[l]=s.getPropertyValue("--sin-container-"+l)==="1";n.redraw()}}});var li=d(({strings:e,values:t=[]})=>{let n=T.createElement("div"),o=Array.isArray(e.raw)?[...e.raw]:Array.isArray(e)?[...e]:[e.trim()];o[0]=o[0].trimStart(),o[o.length-1]=o[o.length-1].trimEnd(),n.innerHTML=String.raw({raw:o},...t);let r=[...n.childNodes,T.createComment("trust")];return()=>r});function To(e,t){if(typeof e=="object")return Object.entries(e).forEach(([o,r])=>To(o,r));if(Array.isArray(t)?(W["@"+e]=t[0],W[t[0]]=t[1]):(W["@"+e]=t,W[e]=t),d.is.server)return;let n=(Array.isArray(t)?t[0]:t).split(" ")[0];if(n==="@media"){let o=null;Object.defineProperty(d.is,e,{get(){if(o!==null)return o;let r=v.matchMedia(t.slice(t.indexOf("(")));return r.addEventListener("change",i=>(o=i.matches,d.redraw())),o=r.matches}})}else n==="@container"&&(d.css([`@property --sin-container-${e}{syntax:'<number>';inherits:false;initial-value:0;}`]),d.css([`${t}{[data-sin-container]{--sin-container-${e}:1}}`]),d.containers.push(e))}function ui(e){let t=new Set(e?[e]:[]);return n.observe=r,Object.defineProperty(n,"signal",{get:o}),n;function n(...i){return[...t].map(a=>a(...i))}function o(){let i=new AbortController;return r(()=>i.abort(),!0),i.signal}function r(i,a){let c=a?(...s)=>(t.delete(c),i(...s)):i;return t.add(c),()=>t.delete(c)}}function pi(e,...t){return e&&e.raw||(e=Array.isArray(e)?e.map(n=>Ze(n)?"":n).join(""):Ze(e)?"":""+e),li({key:""+e,strings:e,values:t})}function hi(e,t,n,o){return typeof o=="function"&&([n,o]=[o,n]),(...r)=>{let i=a=>kn(n,a,...r);return e.addEventListener(t,i,o),()=>e.removeEventListener(t,i,o)}}function fi(e){return function(...t){let[n]=t;C(e)&&(e=e(...t));let o=e.getBoundingClientRect(),r=n.getBoundingClientRect();return n.style.setProperty("transition","none"),n.style.setProperty("--transform",`translate(${o.left-r.left}px, ${o.top-r.top}px) scale(${o.width/r.width}, ${o.height/r.height})`),requestAnimationFrame(()=>n.style.removeProperty("transition")),d.animate(n)}}function gi(e){return e.setAttribute("animate","entry"),requestAnimationFrame(()=>(e.offsetWidth,e.removeAttribute("animate"))),t=>t&&(e.setAttribute("animate","exit"),Promise.allSettled(e.getAnimations().map(n=>n instanceof v.CSSTransition&&n.finished)))}function mi(e,t,n){e.addEventListener("click",o=>{if(!o.defaultPrevented&&(o.button===0||o.which===0||o.which===1)&&(!o.currentTarget.target||o.currentTarget.target==="_self")&&!o.ctrlKey&&!o.metaKey&&!o.shiftKey&&!o.altKey){o.preventDefault();let r=e[Ve].state;n(e.getAttribute("href"),e[Ve])}})}function bi(e,t){let n=Ao(e[0]);return new N(t.inline,t.component,t.tag,t?t.nesting+1:0,n?e.shift():void 0,e.length===1&&Array.isArray(e[0])?e[0]:e)}function Ao(e){return e!==null&&typeof e=="object"&&!(e instanceof N)&&!Array.isArray(e)&&!(e instanceof Date)&&!(e instanceof v.Node)&&!C(e.then)&&!(e instanceof String)&&!(e instanceof Number)}function yi(e,t,n={},o={}){if(C(t)){if(!e)throw new Error("The dom element you tried to mount to does not exist.")}else if(o=n||{},n=t||{},t=e,e=T.body,!e)throw new Error("document.body does not exist.");if(!(t instanceof N)&&!x.call(t,be)&&(t=d(t)),x.call(o,"location")||(o.location=v.location),x.call(o,"error")||(o.error=d.error),d.is.server)return{view:t,attrs:n,context:o,unmount:de};e[qn]=new Error().stack,d.scroll&&wi(o),xi(e.firstChild,o,n);let r={head:o.hydrating?de:Do,lang:d.live(T.documentElement.lang,a=>T.documentElement.lang=a),title:d.live(T.title,a=>T.title=a),status:de,doctype:de,headers:de};o.doc=r,o.route=je(d,"",{doc:o.doc,location:o.location,query:d.route.query});let i={view:t,attrs:n,context:o};return un.set(e,i),Eo(i,e),{view:t,attrs:n,context:o,unmount:()=>un.delete(e)}}function wi(e){v.history.scrollRestoration="manual";let t=""in(history.state?.sinscroll||Me);t&&xe(T.documentElement,history.state.sinscroll[""]);let n=e[ht]={depth:0,callbacks:[],done:a=>n.depth!==-1&&(n.depth+=a)||(n.depth=0,i())},o;setTimeout(()=>{T.addEventListener("scroll",r,{passive:!0,capture:!0}),T.addEventListener("resize",r,{passive:!0,capture:!0}),t&&n.depth===0&&(n.depth=-1,tt(T.documentElement,0,0))},200);function r(a){clearTimeout(o),o=setTimeout(vi,100,a)}function i(){n.callbacks.forEach(a=>a()),tt(T.documentElement,0,0)}}function vi(e){let t=history.state?.sinscroll||{};e.type==="scroll"?Object.keys(t).forEach(o=>n(o?T.getElementById(o):T)):e.target===T?n(T):e.target.id&&n(e.target);function n(o){o&&(t[o===T?"":o.id]=[o.scrollLeft,o.scrollTop,o.scrollWidth,o.scrollHeight],d.route.state({sinscroll:t}))}}function Do(e){if(Array.isArray(e))return e.forEach(Do);let t=T.createElement(Bt(e.tag));for(let n in e.attrs)t.setAttribute(n,e.attrs[n]);e.children.length&&(t.innerHTML=e.children[0]),T.head.appendChild(t)}function xi(e,t,n){if(e){if(e.nodeType===8&&e.data==="h")e.remove(),t.hydrating=!0;else if(e.nodeType===1&&e.tagName==="SCRIPT"&&e.hasAttribute("h")){t.hydrating=!0;let a=JSON.parse(e.textContent);Object.assign(t,a.context),Object.assign(n,a.attrs)}}if(!t.hydrating)return;let o,r=[],i=T.createTreeWalker(T.body,NodeFilter.SHOW_COMMENT);for(;o=i.nextNode();)o.data===","&&r.push(o);r.forEach(a=>a.remove())}function gt(){return pt||(ko=v.requestAnimationFrame(Io),pt=d.is.server?Lt:new Promise(e=>ft=e)),pt}function ki(){return new Promise(e=>{let t=ft;ft=t?()=>(e(),t()):e,v.cancelAnimationFrame(ko),Io()})}function Io(){pt=null,un.forEach(Eo),ft()}function Eo(e,t){vn();try{e.doms=Ke(t,Qe(e.view(e.attrs)),e.context,e.doms&&Oe(e.doms.dom),e.doms&&e.doms.last)}catch(n){e.attrs.error=n,e.doms=Ke(t,Qe(e.context.error(n,e.attrs,[],e.context)),e.context,e.doms&&Oe(e.doms.dom),e.doms&&e.doms.last)}finally{xn()}}function vn(){d.redrawing=!0}function xn(){le.forEach(e=>e()),le=[],d.redrawing=!1}function Ke(e,t,n,o,r=e.lastChild){let i=t[0]&&t[0].key!==void 0&&new Array(t.length),a=R(o,e.firstChild),c=a&&x.call(a,_),s=R(r,null);i&&(i.rev=new Map)&&c?Si(e,n,a[_],t,i,s,a):Oo(e,n,t,i,a,s);let l=R(o,e.firstChild);return i&&(l[_]=i),re(l,s&&Oe(s)||e.lastChild)}function R(e,t){let n=e?e.nextSibling:t;for(;ae.has(n);)n=n.nextSibling;return n}function Oe(e,t){let n=e?e.previousSibling:t;for(;ae.has(n);)n=n.previousSibling;return n}function Ge(e,t,n,o){e[o]={dom:t,key:n},t[_]=e,t[Ee]=o,e.rev.set(n,o)}function Oo(e,t,n,o,r,i=null){let a=0,c,s;for(;a<n.length;)(r===null||!ae.has(r))&&(s=n[a],c=r!==i?oe(r,s,t,e):oe(null,s,t),r===i&&e.insertBefore(c.dom,i),o&&Ge(o,c.first,s.key,a),r=c.last,a++),r!==null&&(r=R(r));for(;r&&r!==i;)r=me(r,e)}function Si(e,t,n,o,r,i,a){let c=n.rev,s=new Set;for(let m of o){if(m&&m.key===void 0)return Oo(e,t,o,r,a,i);m&&s.add(m.key)}let l=n.length-1,u=o.length-1,h=n[l],p=o[u],f=-1;e:for(;;){if(p==null){p=o[--u];continue}for(;h&&!s.has(h.key);)me(h.dom,e),c.delete(h.key),h=n[--l];for(;h&&h.key===p.key;){if(i=oe(h.dom,p,t,e).first,Ge(r,i,p.key,u),c.delete(p.key),u===0)break e;if(l===0){p=o[--u];break}h=n[--l],p=o[--u]}if(c.has(p.key)){if(f=c.get(p.key),f>u)f=oe(n[f].dom,p,t,e),cn(e,f,i),i=f.first,Ge(r,i,p.key,u);else if(f!==u)f=oe(n[f].dom,p,t,e),cn(e,f,i),i=f.first,Ge(r,i,p.key,u);else{h=n[--l];continue}if(c.delete(p.key),u===0)break;p=o[--u]}else{if(f=oe(null,p,t),cn(e,f,i),i=f.first,Ge(r,i,p.key,u),u===0)break;p=o[--u]}}c.forEach(m=>me(n[m].dom,e))}function cn(e,{first:t,last:n},o){let r=t,i;do i=r,r=R(i);while(e.insertBefore(i,o)!==n)}function oe(e,t,n,o,r,i,a){return B(t)?Ti(e,t,n,o,r,i):C(t)?oe(e,t(),n,o,r,i,a):t instanceof N?wo(e,t,n,o,r,i):t instanceof Promise?wo(e,d(()=>t)(),n,o,r,i):Array.isArray(t)?zo(e,t,n,o,i,a):t instanceof Node?Ci(e,t,n):Ro(e,t,o,i,void 0,a)}function Ci(e,t,n){return e&&n.hydrating?re(e):re(t)}function wo(e,t,n,o,r,i){return t.component?$o(e,t,n,o,r,i):Di(e,t,n,o,i)}function Ti(e,t,n,o){if(e&&x.call(e,dn)&&e[dn].view===t)return i(t());let r=i(t());return We(e,t,i),r;function i(a){let c=d.redrawing,s=le;le=[],vn();let l=oe(e,a,n,o||e&&e.parentNode);return xn(),d.redrawing=c,le=s,e!==l.first&&We(l.first,t,i),e=l.first,l.first[dn]={view:t,doms:l},l}}function re(e,t=e,n=t){return{dom:e,first:t,last:n}}function Ai(e){if(!e||e.nodeType!==8||e.data.charCodeAt(0)!==91)return;let t=parseInt(e.data.slice(1)),n=e,o;for(;t&&(n=R(n));)n.nodeType===8?(o=n.data.charCodeAt(0),t+=o===91?parseInt(n.data.slice(1))-1:o===97?1:-1):t--;return mt(e,n),n}function mt(e,t){(t||e)[gn]=e,e[fn]=t}function Po(e){return e&&x.call(e,fn)?e[fn]:Ai(e)}function zo(e,t,n,o,r,i){r&&e&&o&&(e=zo(e,[],n,o).first);let a=Po(e)||e,c=Ro(e,"["+t.length,o,!1,8,i);if(e!==c.dom&&(a=c.last),o){let s=R(a,null);Ke(o,t,n,c.first,a);let l=Oe(s,o.lastChild);return a!==l&&mt(c.first,l),re(c.dom,c.first,l)}return o=new DocumentFragment,o.appendChild(c.dom),Ke(o,t,n,c.first,a),mt(c.first,o.lastChild),re(o,c.first,o.lastChild)}function Ro(e,t,n,o,r=Ze(t)?8:3,i=!1){let a=o||!e||e.nodeType!==r;return e&&x.call(e,Y)&&e[Y]!==i&&yt(e),a&&qo(e,e=r===8?T.createComment(t):T.createTextNode(t),n),!a&&e.data!==""+t&&(e.data=t),re(e)}function Di(e,t,n,o,r){let i=n.NS,a=Bt(t.tag),c=r===!0||e===null||Ei(e,t,n,a);(t.attrs.xmlns||go[a])&&(n.NS=t.attrs.xmlns||go[a]),c&&qo(e,e=Oi(t,n,a),o),a==="foreignObject"&&(n.NS="http://www.w3.org/1999/xhtml");let s=t.children&&t.children.length;return Ri(e,t,n,a),s?Ke(e,t.children,n):e[mo]&&Ii(e.firstChild,e),e[mo]=s,n.NS=i,x.call(t,"key")&&(e[xo]=t.key),re(e)}function Ii(e,t){for(;e;)e=me(e,t)}function Ei(e,t,n,o){return e[xo]!==t.key&&!n.hydrating||(n.NS?e.nodeName!==o:e.nodeName.toLowerCase()!==(o.toLowerCase()||"div"))}function Oi(e,t,n){let o=e.attrs.is;return t.NS&&t.NS!=="http://www.w3.org/1999/xhtml"?o?T.createElementNS(t.NS,n,{is:o}):T.createElementNS(t.NS,n):o?T.createElement(n||"div",{is:o}):T.createElement(n||"div")}var bn=class{constructor(t,n,o,r,i,a,c,s){this.init=t,this.key=void 0,this.view=n,this.error=o,this.caught=void 0,this.loading=r,this.context=i,this.hydrating=a,this.onremoves=void 0,this.promise=void 0,this.stateful=void 0,this.next=void 0,this.ignore=!1,this.recreate=!1,this.attrs=wt(c),this.children=wt(s)}},yn=class{constructor(){this.xs=[],this.i=0,this.top=0,this.bottom=0,this.dom=null}changed(t,n){if(this.i>=this.xs.length)return!0;let o=this.xs[this.i],r=o.key!==t.key&&!n.hydrating||o.init&&o.init!==t.component[0];return r&&o.onremoves&&o.onremoves.forEach(i=>i()),r}add(t,n,o){let r=this.i,[i,a]=t.component;o&&this.xs[this.i]&&(t.attrs=this.xs[this.i].attrs,t.children=this.xs[this.i].children);let c=new bn(t.inline?!1:i,i,a&&a.error||n.error,a&&a.loading||n.loading,a&&a.context||n.context,n.hydrating,t.attrs,t.children),s=(f,m,g)=>{if(this.xs.indexOf(c)===-1)return;vn(),f instanceof Event&&(f.redraw=!1);let b=this.dom.first[_],D=this.dom.first[Ee];this.i=this.bottom=r,$o(this.dom.first,t,n,this.dom.first.parentNode,this,m,g,!0),x.call(this.dom.first,_)||(this.dom.first[_]=b,this.dom.first[Ee]=D),b&&(b[D].dom=this.dom.first),this.i=this.bottom=0,xn()},l=d.event(f=>d.redrawing?requestAnimationFrame(l):s(f,!1,!1)),u=d.event(f=>{c.onremoves&&(c.onremoves.forEach(m=>m()),c.onremoves=void 0),s(f,!0)}),h=d.event(f=>{c.onremoves&&(c.onremoves.forEach(m=>m()),c.onremoves=void 0),s(f,!0,!0),c=this.xs[r]});c.context=Object.create(c.context||n,{hydrating:{value:n.hydrating,writable:!0},onremove:{value:f=>{lt(c,f)}},ignore:{value:f=>{c.ignore=f}},refresh:{value:h},redraw:{value:l},reload:{value:u}}),c.attrs[ge]=t.attrs,c.children[ge]=t.children;let p=Mo(!0,c,t,c.attrs,c.children);return B(t.attrs.reload)&&lt(c,t.attrs.reload.observe(u)),B(t.attrs.redraw)&&lt(c,t.attrs.redraw.observe(l)),B(t.attrs.refresh)&&lt(c,t.attrs.refresh.observe(h)),c.promise=p&&C(p.then)&&p,c.stateful=c.promise||C(p)&&!p[be],c.view=c.promise?o?this.xs[this.i].view:c.loading:p,o||this.cut(),this.top=this.i,this.xs[this.i++]=c}next(t){let n=this.i<this.xs.length&&this.xs[this.top=this.i++];return n.attrs[ge]=t.attrs,n.children[ge]=t.children,n}pop(){return--this.i!==this.bottom?!1:(this.cut(this.top+1),!0)}cut(t=this.i){for(let n=t;n<this.xs.length;n++)this.xs[n].onremoves&&this.xs[n].onremoves.forEach(o=>o());this.xs.length=t}};function lt(e,t){e.onremoves?e.onremoves.add(t):e.onremoves=new Set([t])}function Pi(e){let t="/"+e.data,n=R(e);for(;n&&(n.nodeType!==8||n.data!==t);)n=R(n);let o=re(R(e),R(e),Oe(n));if(x.call(n,gn)&&mt(n[gn],Oe(n)),x.call(e,Y)&&(o.first[Y]=e[Y]),x.call(e,_)){let r=e[_],i=e[Ee];o.first[_]=r,o.first[Ee]=i,r[e[Ee]].dom=o.first}return e.remove(),n.remove(),o}function zi(e){let t="/"+e.data,n=R(e);for(;n&&(n.nodeType!==8||n.data!==t);)n=R(n);return re(e,e,n)}function $o(e,t,n,o,r=e&&e[Y]||new yn,i=r.changed(t,n),a=!1,c=!1){let s=i?r.add(t,n,a):r.next(t);if(!i&&s.ignore&&!c)return r.pop(),r.dom;t.key!==void 0&&(i||n.hydrating)&&(s.key=t.key);let l=s.promise&&e&&e.nodeType===8&&e.data.charCodeAt(0)===97;if(l)s.next=zi(e);else{let h=Mo(i,s,a?s.view:t,s.attrs,s.children);h&&x.call(h,be)&&(h=h(t.attrs,t.children,s.context)),s.next=oe(e,!s.caught&&!s.promise&&h instanceof N||a?Hn(h,t):h,s.context,o,r,(i||s.recreate)&&!s.hydrating&&!a?!0:void 0,r),s.hydrating&&(s.hydrating=s.context.hydrating=!1),s.recreate&&(s.recreate=!1)}if(i&&s.promise){let h=r.i-1;n[ht].done(1),s.promise.then(p=>s.view=p&&x.call(p,"default")?p.default:p).catch(p=>{s.caught=p,s.view=Lo(s,t,p)}).then(()=>x.call(s.next.first,Y)&&r.xs[h]===s&&(l&&(r.dom=Pi(e)),n.hydrating=!1,s.recreate=!a,s.promise=!1,s.context.redraw(),n[ht].done(-1)))}let u=e!==s.next.first;return r.pop()&&(u||i)&&(r.dom=s.next,s.next.first[Y]=r),s.next}function Mo(e,t,n,o,r){try{return t.stateful||e?C(t.view)&&!t.view[be]?t.view(o,r,t.context):t.view:n.component[0](o,r,t.context)}catch(i){return Lo(t,n,i)}}function Lo(e,t,n){return x.call(e.error,be)?e.error().component[0](n,t.attrs,t.children,e.context):e.error(n,t.attrs,t.children,e.context)}function Ri(e,t,n,o){let r=t.tag,i,a=e[Ve]||n.hydrating&&$i(e)||void 0,c=!a;if(c&&x.call(t.attrs,"id")===!1){let l=Gn(t.tag);l&&(e.id=l)}sn(e,t),c&&We(e,t.attrs.class,()=>sn(e,t)),c&&We(e,t.attrs.className,()=>sn(e,t)),t.attrs.type!=null&&bt(e,"type",t.attrs.type);for(let l in t.attrs)Nt(l)?l==="deferrable"&&(e[pn]=t.attrs[l]):(!a||a[l]!==t.attrs[l])&&fe(e,t.attrs,l,a&&a[l],t.attrs[l],c,n);if(x.call(t.attrs,"value"))if(!a&&o==="input"&&e.value!==""+t.attrs.value){let l,u;e===T.activeElement&&(l=e.selectionStart,u=e.selectionEnd),fe(e,t.attrs,"value",e.value,t.attrs.value,c,n),e===T.activeElement&&(e.selectionStart!==l||e.selectionEnd!==u)&&e.setSelectionRange(l,u)}else(!a||a.value!==t.attrs.value)&&fe(e,t.attrs,"value",a&&a.value,t.attrs.value,c,n);if(o==="option"&&!c&&x.call(t.attrs,"selected")&&e.selected!==t.attrs.selected&&fe(e,t.attrs,"selected",e.selected,t.attrs.selected,c,n),x.call(t.attrs,"srcset")&&a?.srcset!==t.attrs.srcset&&fe(e,t.attrs,"srcset",a?.srcset,t.attrs.srcset,c,n),x.call(t.attrs,"src")&&a?.src!==t.attrs.src&&fe(e,t.attrs,"src",a?.src,t.attrs.src,c,n),x.call(t.attrs,"href")&&(n.hydrating||!a||a.href!==t.attrs.href)){i=t.attrs.href;let l=!String(i).match(/^([a-z]+:|\/\/)/)&&!t.attrs.target&&!t.attrs.download;l&&(i=Le(t.attrs.href)),fe(e,t.attrs,"href",a&&a.href,i,c,n),i&&l&&(t.attrs.href=d.route.prefix+i,mi(e,t.attrs,n.route))}if(a)for(let l in a)x.call(t.attrs,l)===!1&&(jt(l)?jo(e,l):Nt(l)?l==="deferrable"&&(e[pn]=!1):e.removeAttribute(l));Li(e,t.attrs.data,a&&a.data);let s=Mi(e,t.attrs.style,a&&a.style);if(r)for(vo(e,r.vars,r.args,c||n.hydrating,s);r=r.parent;)vo(e,r.vars,r.args,c||n.hydrating,s);t.attrs.dom&&(c||n.hydrating?ji(e,e[bo]=wt(t.attrs),e[yo]=wt(t.children),n,t.attrs.dom):(e[bo][ge]=t.attrs,e[yo][ge]=t.children)),e[Ve]=t.attrs,c&&e.id&&e.id in(history.state?.sinscroll||Me)&&le.push(()=>xe(e,history.state?.sinscroll?.[e.id],n[ht]))}function $i(e){if(!e||!e.hasAttributes())return;let t={};for(let n of e.attributes)t[n.name]=n.value||!0;return t}function Mi(e,t,n){if(t==null)return t!==n&&(e.style.cssText="",!0);if(typeof t!="object")return t!==n&&(e.style.cssText=t,!0);if(n==null||typeof n!="object"){e.style.cssText="";for(let o in t){let r=t[o];r!=null&&e.style.setProperty(et(o),r+"")}return!0}for(let o in t){let r=t[o];r!=null&&(!n||(r=r+"")!=n[o]+"")&&e.style.setProperty(et(o),r)}for(let o in n)n[o]!=null&&t[o]==null&&e.style.removeProperty(et(o));return!0}function Li(e,t,n){for(let o in t){let r=t[o];r!=null&&(!n||(r=r+"")!=n[o]+"")&&(e.dataset[o]=r)}for(let o in n)n[o]!=null&&t[o]==null&&delete e.dataset[o]}function We(e,t,n){if(!B(t))return;let o=x.call(e,Ue),r=o?e[Ue]:new Set;o||(e[Ue]=r),r.add(t.observe(n))}function sn(e,t){let n=Un(t),o=x.call(e,an)&&e[an]||"";if(n!==o){e[an]=n;for(let r of o&&o.split(" "))r&&e.classList.remove(r);for(let r of n&&n.split(" "))r&&e.classList.add(r)}}function vo(e,t,n,o,r){for(let i in t){let a=t[i],c=n[a.index];wn(e,i,c,a,o,r)}}function wn(e,t,n,o,r,i,a){if(B(n)){r&&n.observe(c=>ln(e,t,c,o)),(r||i)&&wn(e,t,n(),o,r,r);return}if(C(n))return Lt.then(()=>wn(e,t,n(e),o,r,i,a));ln(e,t,n,o),a&&le.push(()=>ln(e,t,n,o))}function ln(e,t,n,o){x.call(o,"property")?e.style.setProperty(t,ho(n,o)):n?e.setAttribute(t,""):e.removeAttribute(t)}function ji(e,t,n,o,r){le.push(()=>{Qe(r).forEach(async i=>{let a=C(i)&&i(e,t,n,o);a&&C(a.then)&&(a=await a,gt()),C(a)&&(x.call(e,He)?e[He].push(a):e[He]=[a])},[])})}function fe(e,t,n,o,r,i,a){if(o===r)return;let c=jt(n);c&&typeof o==typeof r||(c?r?Fi(e,t,n,a):jo(e,n):(bt(e,n,r),i&&We(e,r,s=>bt(e,n,s))))}function bt(e,t,n){if(n==null&&(n=""),C(n))return bt(e,t,n());qi(e,t)?e[t]=n:!n&&n!==0?e.removeAttribute(t):e.setAttribute(t,n===!0?"":n)}function qi(e,t){return!(e instanceof SVGElement)&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="width"&&t!=="height"&&t in e}function jo(e,t){e.removeEventListener(t.slice(2),e[hn])}function Fi(e,t,n,o){e.addEventListener(n.slice(2),e[hn]||(e[hn]=Ni(e,t,o)))}function Ni(e,...t){return{handleEvent:n=>kn(e[Ve]["on"+n.type],n,e,...t)}}function kn(e,t,...n){if(Array.isArray(e))return e.forEach(r=>kn(r,t,...n));let o=C(e)?e.call(t.currentTarget,t,...n):C(e.handleEvent)&&e.handleEvent(t,...n);if(t.redraw===!1){delete t.redraw;return}!B(o)&&!B(e)&&gt(),o&&C(o.then)&&o.then(gt)}function qo(e,t,n){if(n)return e&&(n.insertBefore(t,e),me(e,n)),t}function Bi(e,t,n,o,r){let i=Po(e);if(!i||e===i)return R(e);let a=R(i);if(e=R(e),!e)return a;do e=me(e,t,n,o,r);while(e&&e!==a);return a}function ut(e,t){yt(t),e.removeChild(t)}function yt(e){x.call(e,Y)&&e[Y].cut(),x.call(e,Ue)&&e[Ue].forEach(t=>t())}function me(e,t,n=!0,o=[],r=!1){let i=e.nextSibling;if(ae.has(e))return i;if(e.nodeType===8)if(e.data.charCodeAt(0)===97){if(i=R(e),ut(t,e),!i)return i;e=i,i=R(e)}else e.data.charCodeAt(0)===91&&(i=Bi(e,t,n,o,r));if(e.nodeType!==1)return n?ut(t,e):yt(e),i;if(x.call(e,He))for(let c of e[He])try{let s=c(r||n);(r||n)&&s&&C(s.then)&&o.push(s)}catch(s){console.error(s)}!r&&(r=e[pn]||!1);let a=e.firstChild;for(;a;)me(a,e,!1,o,r),a=R(a);return n?o.length===0?ut(t,e):(ae.add(e),Promise.all(o.map(c=>c.catch(console.error))).then(()=>ut(t,e))):yt(e),i}function Gi(e=[],...t){return d.css`
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
  `,d.css(e,...t)}function wt(e){return new Proxy(e,{get:(t,n)=>e[n],set:(t,n,o)=>n===ge&&e!==o?e=o:!0})}var ue=Symbol("sinewy-menu");var Ho=Symbol("dropdown-indicator"),Vo=Symbol("dropdown-radio-group"),Fo=Symbol("sinewy-ids"),Ko="--sinewy-dropdown-fit-block",Wo="--sinewy-dropdown-fit-inline",Ui=['[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]'].join(",");d.css([`
  @position-try ${Ko} {
    align-self: stretch;
    height: stretch;
  }

  @position-try ${Wo} {
    justify-self: stretch;
    width: stretch;
  }
`]);var q=d(({id:e,defaultOpen:t=!1},[],n)=>{let o=e||er(n),r=Ct(t,n),i={name:"Dropdown",prefix:"dropdown",id:o,triggerId:o+"-trigger",contentId:o+"-content",anchorName:tr(o),trigger:void 0,content:void 0,open:!1,renderOpen:t,openState:r,openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!0,dir:"ltr",openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,pointerGrace:void 0,onbeforeopenchange:void 0,onopenchange:void 0},a=Object.create(n);return a[ue]=i,i.root=i,n.onremove(()=>{clearTimeout(i.searchTimer),cancelAnimationFrame(i.reconcileFrame)}),({loop:c=!0,dir:s="ltr",open:l,bind:u,onbeforeopenchange:h,onopenchange:p},f,m)=>(i.loop=c,i.dir=s,i.controlledOpen=l,i.openBind=u,i.onbeforeopenchange=h,i.onopenchange=p,Tt(r,u,m),i.renderOpen=Pe(i),kt(i),d({context:a},()=>f))});q.Trigger=d(({as:e,disabled:t=!1,dom:n,onclick:o,onkeydown:r,...i},a,c)=>{let s=ie(c,"trigger");return nr(e,"button",{...i,id:s.triggerId,type:e?i.type:i.type||"button",disabled:t,popovertarget:s.contentId,popovertargetaction:"toggle","aria-haspopup":"menu","aria-controls":s.contentId,"aria-expanded":String(s.renderOpen),"aria-disabled":String(t),style:{"anchor-name":s.anchorName,...i.style},data:{...i.data,disabled:t?"":null,state:s.renderOpen?"open":"closed"},dom:En([l=>Cn(s,"trigger",l),...It(n)]),onclick:(l,u,h,p)=>{if(t){l.preventDefault();return}let f="popoverTargetElement"in u;if(j(o,l,u,h,p),l.defaultPrevented||f){f&&!o&&(l.redraw=!1);return}l.preventDefault(),s.content.matches(":popover-open")?pe(s):s.content.showPopover({source:u})},onkeydown:(l,u,h,p)=>{if(t){l.preventDefault();return}j(r,l,u,h,p),!(l.defaultPrevented||!["Enter"," ","ArrowDown","ArrowUp"].includes(l.key))&&(l.preventDefault(),s.openFocus=l.key==="ArrowUp"?"last":"first",s.content.matches(":popover-open")?St(s,s.openFocus):s.content.showPopover())}},a)});q.Content=d(({},[],e)=>{let t=ie(e,"content");return(n,o,r)=>Yo(t,n,o,r)});q.Item=d(({},[],e)=>{let t=ie(e,"item");return(n,o,r)=>xt(t,n,o,r)});q.Checkbox=d(({defaultChecked:e=!1},[],t)=>{let n=ie(t,"checkbox"),o=Ct(e,t),r=d.live(Bo(e));return({checked:i,defaultChecked:a,bind:c,oncheckedchange:s,...l},u,h)=>{Tt(o,c,h);let p=Bo(Dn(o,c,i));r(p);let f=Zo(h,r);return xt(n,{...l,role:"menuitemcheckbox","aria-checked":p==="indeterminate"?"mixed":String(p),data:{...l.data,state:In(p)},onactivate:m=>{let g=p==="indeterminate"||!p;Xo(o,c,i,g,h),s&&s(g,m)}},d({context:f},()=>u),h)}});q.RadioGroup=d(({defaultValue:e},[],t)=>{ie(t,"radioGroup");let n=Ct(e,t),o={},r=Object.create(t);return r[Vo]=o,({value:i,defaultValue:a,bind:c,onvaluechange:s,ariaLabel:l,...u},h,p)=>(Tt(n,c,p),Object.assign(o,{local:n,bind:c,controlled:i,onvaluechange:s,context:p}),d`div`({...u,role:"group","aria-label":u["aria-label"]||l},d({context:r},()=>h)))});q.Radio=d(({},[],e)=>{let t=ie(e,"radio"),n=e[Vo],o=d.live(!1);if(!n)throw new Error(t.name+".Radio must be used inside "+t.name+".RadioGroup");return({value:r,...i},a,c)=>{let l=Dn(n.local,n.bind,n.controlled)===r;o(l);let u=Zo(c,o);return xt(t,{...i,role:"menuitemradio","aria-checked":String(l),data:{...i.data,state:In(l)},onactivate:h=>{l||(Xo(n.local,n.bind,n.controlled,r,n.context),n.onvaluechange&&n.onvaluechange(r,h))}},d({context:u},()=>a),c)}});q.Sub=d(({id:e,defaultOpen:t=!1},[],n)=>{let o=ie(n,"sub"),r=e||er(n,o.prefix),i=Ct(t,n),a={name:o.name,prefix:o.prefix,id:r,triggerId:r+"-trigger",contentId:r+"-content",anchorName:tr(r),trigger:void 0,content:void 0,open:!1,renderOpen:t,openState:i,openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!0,dir:o.dir,openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,openTimer:void 0,closeTimer:void 0,pointerGrace:void 0,openDelay:100,closeDelay:300,onbeforeopenchange:void 0,onopenchange:void 0,parent:o,root:o.root},c=Object.create(n);return c[ue]=a,n.onremove(()=>{clearTimeout(a.searchTimer),clearTimeout(a.openTimer),clearTimeout(a.closeTimer),cancelAnimationFrame(a.reconcileFrame)}),({loop:s=!0,dir:l=o.dir,open:u,bind:h,onbeforeopenchange:p,onopenchange:f,openDelay:m=100,closeDelay:g=300},b,D)=>(a.loop=s,a.dir=l,a.openDelay=m,a.closeDelay=g,a.controlledOpen=u,a.openBind=h,a.onbeforeopenchange=p,a.onopenchange=f,Tt(i,h,D),a.renderOpen=Pe(a),kt(a),d({context:c},()=>b))});q.SubTrigger=d(({as:e,disabled:t=!1,dom:n,onclick:o,onkeydown:r,onpointermove:i,onpointerleave:a,...c},s,l)=>{let u=ie(l,"subtrigger");return xt(u.parent,{...c,as:e,disabled:t,id:u.triggerId,style:{"anchor-name":u.anchorName,...c.style},dom:En([h=>Cn(u,"trigger",h),...It(n)]),popovertarget:u.contentId,popovertargetaction:"toggle","aria-haspopup":"menu","aria-controls":u.contentId,"aria-expanded":String(u.renderOpen),data:{...c.data,state:u.renderOpen?"open":"closed"},onclick:(h,p,f,m)=>{Go(u);let g="popoverTargetElement"in p;if(j(o,h,p,f,m),h.defaultPrevented||t||g){g&&!o&&(h.redraw=!1);return}h.preventDefault(),u.content.matches(":popover-open")?pe(u):u.content.showPopover({source:p})},onkeydown:(h,p,f,m)=>{Go(u),j(r,h,p,f,m),!(h.defaultPrevented||t||h.key!==Qi(u))&&(h.preventDefault(),u.openFocus="first",u.content.matches(":popover-open")?St(u,"first"):u.content.showPopover())},onpointermove:(h,p,f,m)=>{j(i,h,p,f,m),!(h.defaultPrevented||t||u.open||u.openTimer)&&(clearTimeout(u.closeTimer),u.openTimer=setTimeout(()=>{u.openTimer=void 0,u.content.matches(":popover-open")||(u.openFocus="none",u.content.showPopover({source:p}))},u.openDelay))},onpointerleave:(h,p,f,m)=>{j(a,h,p,f,m),h.defaultPrevented||(Yi(u,h),Qo(u))},closeOnSelect:!1,invokeSelect:!1},s,l)});q.SubContent=d(({},[],e)=>{let t=ie(e,"subcontent");if(!t.parent)throw new Error(t.name+".SubContent must be used inside "+t.name+".Sub");return({onpointerenter:n,onpointerleave:o,...r},i,a)=>Yo(t,{...r,onpointerenter:(c,s,l,u)=>{clearTimeout(t.closeTimer),t.closeTimer=void 0,Dt(t.parent,t),j(n,c,s,l,u)},onpointerleave:(c,s,l,u)=>{j(o,c,s,l,u),c.defaultPrevented||Qo(t)}},i,a)});q.Indicator=d(({},[],e)=>{let t=e[ue],n=e[Ho];if(!n)throw new Error((t?t.name:"Dropdown")+".Indicator must be used inside a Checkbox or Radio");let o=n.selection.observe(e.redraw);return e.onremove(o),({forceMount:r=!1,...i},a)=>{let c=n.selection();return r||c!==!1?d`span`({...i,"aria-hidden":i["aria-hidden"]==null?"true":i["aria-hidden"],data:{...i.data,state:In(c)}},a):null}});function xt(e,{as:t,disabled:n=!1,dom:o,onclick:r,onfocus:i,onpointermove:a,onselect:c,onactivate:s,closeOnSelect:l=!0,invokeSelect:u=!0,role:h="menuitem",textValue:p,...f},m,g){return nr(t,"button",{...f,type:t?f.type:f.type||"button",role:h,tabIndex:-1,"aria-disabled":String(n),data:{...f.data,disabled:n?"":null,textValue:p||null},dom:o,onclick:(b,D,$,S)=>{if(n){b.preventDefault();return}j(r,b,D,$,S),!b.defaultPrevented&&(u&&c&&c(b,D),s&&s(b,D),l&&!b.defaultPrevented&&pe(e.root))},onfocus:(b,D,$,S)=>{j(i,b,D,$,S),b.defaultPrevented||_o(e,D)},onpointermove:(b,D,$,S)=>{j(a,b,D,$,S),n||b.defaultPrevented||_i(e,b)||vt(e,D)}},m)}q.Group=d(({ariaLabel:e,...t},n)=>d`div`({...t,role:"group","aria-label":t["aria-label"]||e},n));q.Label=d((e,t)=>d`div`(e,t));q.Separator=d((e,t)=>d`div`({...e,role:"separator"},t));var A=q;function Hi(e,t){Cn(e,"content",t),kt(e)}function Cn(e,t,n){import.meta.dev&&e[t]&&e[t]!==n&&e[t].isConnected&&console.warn(e.name+"."+Jo(t)+" should only be rendered once per "+e.name+" state scope"),e[t]=n}function Yo(e,{dom:t,onbeforetoggle:n,ontoggle:o,onkeydown:r,side:i=e.parent?"right":"bottom",align:a="start",offset:c=0,alignOffset:s=0,avoidCollisions:l=!0,collisionStrategy:u="preferred",loop:h=e.loop,...p},f,m){return d`div
    position fixed
    inset auto
    margin 0
  `({...p,id:e.contentId,popover:"auto",role:"menu",dir:p.dir||e.dir,style:{"position-anchor":e.anchorName,...Xi(i,a,c,s,l,u,e.dir),...p.style},"aria-labelledby":p["aria-labelledby"]||e.triggerId,data:{...p.data,state:e.renderOpen?"open":"closed",side:i,align:a},dom:En([g=>Hi(e,g),...It(t)]),onbeforetoggle:e.onbeforeopenchange||n?(g,b,D,$)=>{let S=g.newState==="open";e.onbeforeopenchange&&e.onbeforeopenchange(S,g),j(n,g,b,D,$)}:void 0,ontoggle:(g,b,D,$)=>{let S=g.newState==="open",J=e.reconcileTo===S;if(J&&(e.reconcileTo=void 0),e.open=S,e.renderOpen=Pe(e),e.trigger&&(e.trigger.ariaExpanded=String(S)),e.trigger&&(e.trigger.dataset.state=S?"open":"closed"),b.dataset.state=S?"open":"closed",j(o,g,b,D,$),J||(At(e.openBind)?e.openBind(S):e.controlledOpen===void 0&&(e.openState.value=S),e.onopenchange&&e.onopenchange(S,g),e.renderOpen=Pe(e),kt(e)),S)No(e),e.openFocus!=="none"&&St(e,e.openFocus),e.openFocus="first";else{e.parent&&Dt(e.parent,e),No(e),Ki(e);let we=e.restoreFocus;e.restoreFocus=!0,requestAnimationFrame(()=>{we&&!e.open&&(b.contains(document.activeElement)||document.activeElement===document.body)&&e.trigger&&e.trigger.focus()})}},onkeydown:(g,b,D,$)=>{if(j(r,g,b,D,$),!g.defaultPrevented){if(e.parent&&g.key===ea(e)){g.preventDefault(),g.stopPropagation(),pe(e);return}if(e.parent&&g.key==="Escape"){g.preventDefault(),g.stopPropagation(),pe(e);return}Vi(e,g,h)}}},f)}function Pe(e){return!!Dn(e.openState,e.openBind,e.controlledOpen)}function kt(e){if(!e.content)return;let t=Pe(e),n=e.content.matches(":popover-open");t!==n&&(cancelAnimationFrame(e.reconcileFrame),e.reconcileFrame=requestAnimationFrame(()=>{if(!e.content||!e.content.isConnected)return;let o=Pe(e),r=e.content.matches(":popover-open");o!==r&&(e.reconcileTo=o,o?e.content.showPopover():e.content.hidePopover())}))}function Vi(e,t,n){let o=Tn(e),r=o.indexOf(document.activeElement);if(t.key==="Tab"){e.root.restoreFocus=!1,pe(e.root,!1);return}if(t.key==="Escape"){t.preventDefault(),pe(e);return}if(t.key==="Enter"||t.key===" "){if(r===-1)return;t.preventDefault(),o[r].click();return}if(t.key==="ArrowDown"||t.key==="ArrowUp"){if(t.preventDefault(),!o.length)return;let l=t.key==="ArrowDown"?1:-1,u=r===-1?l===1?0:o.length-1:r+l;n?u=(u+o.length)%o.length:u=Math.max(0,Math.min(o.length-1,u)),vt(e,o[u]);return}if(t.key==="Home"||t.key==="End"){t.preventDefault(),St(e,t.key==="Home"?"first":"last");return}if(t.key.length!==1||t.key===" "||t.metaKey||t.ctrlKey||t.altKey)return;t.preventDefault(),clearTimeout(e.searchTimer),e.search+=t.key.toLocaleLowerCase(),e.searchTimer=setTimeout(()=>e.search="",500);let a=Array.from(e.search).every(l=>l===e.search[0])?e.search[0]:e.search,s=o.slice(r+1).concat(o.slice(0,r+1)).find(l=>Wi(l).startsWith(a));s&&vt(e,s)}function pe(e,t=!0){e.restoreFocus=t,e.parent&&Dt(e.parent,e),e.content.matches(":popover-open")&&e.content.hidePopover()}function Tn(e){return An(e).filter(t=>t.getAttribute("aria-disabled")!=="true")}function An(e){return e.content?Array.from(e.content.querySelectorAll(Ui)).filter(t=>t.closest('[role="menu"]')===e.content):[]}function St(e,t){let n=Tn(e);vt(e,t==="last"?n.at(-1):n[0])}function vt(e,t){t&&(Tn(e).forEach(n=>n.tabIndex=n===t?0:-1),_o(e,t),t.focus({preventScroll:!0}))}function _o(e,t){An(e).forEach(n=>{n.toggleAttribute("data-highlighted",n===t)}),e.activeItem=t}function Ki(e){An(e).forEach(t=>t.removeAttribute("data-highlighted")),e.activeItem=void 0}function No(e){clearTimeout(e.searchTimer),e.search=""}function Wi(e){return(e.dataset.textValue||e.textContent).trim().toLocaleLowerCase()}function Jo(e){return{trigger:"Trigger",content:"Content",item:"Item",checkbox:"Checkbox",radioGroup:"RadioGroup",radio:"Radio",indicator:"Indicator",group:"Group",label:"Label",separator:"Separator",sub:"Sub",subtrigger:"SubTrigger",subcontent:"SubContent"}[e]||e}function ie(e,t){let n=e[ue];if(!n)throw new Error(Jo(t)+" must be used inside a menu root");return n}function Ct(e,t){let n={value:e,binding:void 0,unobserve:void 0};return t.onremove(()=>n.unobserve&&n.unobserve()),n}function Tt(e,t,n){e.binding!==t&&(e.unobserve&&e.unobserve(),e.binding=t,e.unobserve=At(t)?t.observe(n.redraw):void 0)}function Dn(e,t,n){return At(t)?t():n===void 0?e.value:n}function Xo(e,t,n,o,r){At(t)?t(o):n===void 0&&(e.value=o,r.redraw())}function Zo(e,t){let n=Object.create(e);return n[Ho]={selection:t},n}function Bo(e){return e==="indeterminate"?e:!!e}function In(e){return e==="indeterminate"?e:e?"checked":"unchecked"}function At(e){return typeof e=="function"&&typeof e.observe=="function"}function Qo(e){clearTimeout(e.openTimer),clearTimeout(e.closeTimer),e.openTimer=void 0,e.closeTimer=setTimeout(()=>{e.closeTimer=void 0,e.content.matches(":popover-open")&&pe(e)},e.closeDelay)}function Go(e){clearTimeout(e.openTimer),clearTimeout(e.closeTimer),e.openTimer=e.closeTimer=void 0,Dt(e.parent,e)}function Yi(e,t){if(!e.parent||!e.content||!e.content.matches(":popover-open"))return;let n=e.content.getBoundingClientRect(),o={x:t.clientX,y:t.clientY},r=5,a=[{distance:Math.abs(o.x-n.left),points:[{x:n.left,y:n.top-r},{x:n.left,y:n.bottom+r}]},{distance:Math.abs(o.x-n.right),points:[{x:n.right,y:n.top-r},{x:n.right,y:n.bottom+r}]},{distance:Math.abs(o.y-n.top),points:[{x:n.left-r,y:n.top},{x:n.right+r,y:n.top}]},{distance:Math.abs(o.y-n.bottom),points:[{x:n.left-r,y:n.bottom},{x:n.right+r,y:n.bottom}]}].sort((c,s)=>c.distance-s.distance)[0];e.parent.pointerGrace={owner:e,triangle:[o,...a.points]}}function _i(e,t){let n=e.pointerGrace;if(!n)return!1;if(!n.owner.content||!n.owner.content.matches(":popover-open"))return e.pointerGrace=void 0,!1;let o=Ji({x:t.clientX,y:t.clientY},...n.triangle);return o||(e.pointerGrace=void 0),o}function Dt(e,t){e&&(!t||e.pointerGrace&&e.pointerGrace.owner===t)&&(e.pointerGrace=void 0)}function Ji(e,t,n,o){let r=Sn(e,t,n),i=Sn(e,n,o),a=Sn(e,o,t),c=r<0||i<0||a<0,s=r>0||i>0||a>0;return!(c&&s)}function Sn(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function Xi(e,t,n,o,r,i,a){let c=e==="top"||e==="bottom",s={top:"block-start",right:"inline-end",bottom:"block-end",left:"inline-start"}[e]||"block-end",l=t==="center"?"":" span-"+(c?"inline-":"block-")+(t==="end"?"start":"end"),u={top:"margin-block-end",right:"margin-inline-start",bottom:"margin-block-start",left:"margin-inline-end"}[e]||"margin-block-start",h=c?"margin-inline-start":"margin-block-start",p=c?Ko:Wo,f=["flip-block","flip-inline","flip-block flip-inline",p,p+" flip-block",p+" flip-inline",p+" flip-block flip-inline"].join(", ");return{"position-area":s+l,"position-try-fallbacks":r?f:"none","position-try-order":r&&i==="most-space"?c?"most-block-size":"most-inline-size":"normal",[u]:Uo(n),[h]:Uo(o),"--sinewy-trigger-width":"anchor-size(width)","--sinewy-trigger-height":"anchor-size(height)","--sinewy-transform-origin":Zi(e,t,a)}}function Zi(e,t,n){let i=t==="center"?"center":t==="end"?n==="rtl"?"left":"right":n==="rtl"?"right":"left",a=t==="center"?"center":t==="end"?"bottom":"top";return e==="top"?i+" bottom":e==="bottom"?i+" top":e==="left"?"right "+a:"left "+a}function Uo(e){return typeof e=="number"?e+"px":e}function Qi(e){return e.dir==="rtl"?"ArrowLeft":"ArrowRight"}function ea(e){return e.dir==="rtl"?"ArrowRight":"ArrowLeft"}function er(e,t="dropdown"){let n=e,o;for(;(o=Object.getPrototypeOf(n))&&o!==Object.prototype;)n=o;let r=n[Fo]||(n[Fo]={value:0});return"sinewy-"+t+"-"+ ++r.value}function tr(e){return"--"+e.replace(/[^a-zA-Z0-9_-]/g,"-")+"-anchor"}function En(e){return e.filter(Boolean)}function It(e){return e==null?[]:Array.isArray(e)?e:[e]}function j(e,t,...n){It(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function nr(e,t,n,o){return e?e(n,o):d(t,n,o)}var or=Symbol("sinewy-context-menu-ids"),ta=700,na=['[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]'].join(","),F=d(({id:e},[],t)=>{let n=e||pa(t),o={name:"ContextMenu",prefix:"context-menu",id:n,triggerId:n+"-trigger",contentId:n+"-content",anchorName:ha(n),trigger:void 0,content:void 0,anchor:void 0,open:!1,renderOpen:!1,openState:{value:!1},openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!1,dir:"ltr",openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,pointerGrace:void 0,pointerDown:void 0,pointerCleanup:void 0,pendingOpen:void 0,longPressTimer:void 0,onbeforeopenchange:void 0,onopenchange:void 0},r=Object.create(t);return r[ue]=o,o.root=o,t.onremove(()=>{clearTimeout(o.searchTimer),cancelAnimationFrame(o.reconcileFrame),o.pointerCleanup&&o.pointerCleanup(),o.pendingOpen&&o.pendingOpen(),ye(o),o.anchor&&o.anchor.remove()}),({loop:i=!1,dir:a="ltr",onbeforeopenchange:c,onopenchange:s},l)=>(o.loop=i,o.dir=a,o.onbeforeopenchange=c,o.onopenchange=s,o.renderOpen=o.openState.value,d({context:r},()=>l))});F.Trigger=d(({as:e,disabled:t=!1,dom:n,oncontextmenu:o,onkeydown:r,...i},a,c)=>{let s=oa(c,"Trigger");return ga(e,"div",{...i,id:s.triggerId,tabIndex:e?i.tabIndex:i.tabIndex==null?0:i.tabIndex,disabled:e&&t||void 0,"aria-haspopup":"menu","aria-controls":s.contentId,"aria-expanded":String(s.renderOpen),"aria-disabled":String(t),style:sa(i.style,t),data:{...i.data,disabled:t?"":null,state:s.renderOpen?"open":"closed"},dom:fa([l=>ra(s,l),...lr(n)]),oncontextmenu:(l,u,h,p)=>{ir(o,l,u,h,p),ye(s),!(t||l.defaultPrevented||!s.content)&&rr(s,l,u,ia(l,u,s.dir),!0)},onkeydown:(l,u,h,p)=>{ir(r,l,u,h,p),!(!aa(l)||t||l.defaultPrevented||!s.content)&&(ye(s),rr(s,l,u,ar(u,s.dir),!1))}},a)});F.Content=A.Content;F.Item=A.Item;F.Checkbox=A.Checkbox;F.RadioGroup=A.RadioGroup;F.Radio=A.Radio;F.Indicator=A.Indicator;F.Group=A.Group;F.Label=A.Label;F.Separator=A.Separator;F.Sub=A.Sub;F.SubTrigger=A.SubTrigger;F.SubContent=A.SubContent;function oa(e,t){let n=e[ue];if(!n||n.name!=="ContextMenu")throw new Error("ContextMenu."+t+" must be used inside ContextMenu");return n}function ra(e,t){import.meta.dev&&e.trigger&&e.trigger!==t&&e.trigger.isConnected&&console.warn("ContextMenu.Trigger should only be rendered once per ContextMenu state scope"),e.trigger=t;let n=o=>da(e,o);return t.addEventListener("pointerdown",n,!0),()=>{t.removeEventListener("pointerdown",n,!0),e.pointerCleanup&&e.pointerCleanup()}}function ia(e,t,n){return e.clientX!==0||e.clientY!==0||e.button===2||e.pointerType?{x:e.clientX,y:e.clientY}:ar(t,n)}function ar(e,t){let n=e.getBoundingClientRect();return{x:t==="rtl"?n.right:n.left,y:n.bottom}}function aa(e){return e.key==="ContextMenu"||e.key==="F10"&&e.shiftKey}function rr(e,t,n,o,r){t.preventDefault(),dr(e,n.ownerDocument,o.x,o.y),e.openFocus="first",e.restoreFocus=!0,e.pendingOpen&&e.pendingOpen(),r&&e.pointerDown?sr(e,n,e.pointerDown):cr(e,n)}function dr(e,t,n,o){let r=e.anchor||la(e,t);r.style.left=n+"px",r.style.top=o+"px"}function cr(e,t){!e.content||!t.isConnected||(e.content.matches(":popover-open")?ua(e.content):e.content.showPopover({source:t}))}function sr(e,t,n){let o=t.ownerDocument,{button:r,pointerId:i}=n,a,c=()=>{o.removeEventListener("pointerup",u,!0),o.removeEventListener("mouseup",u,!0),o.removeEventListener("pointercancel",h,!0)},s=()=>{c(),cancelAnimationFrame(a),e.pendingOpen===s&&(e.pendingOpen=void 0)},l=p=>i==null||p.pointerId==null||p.pointerId===i,u=p=>{p.button!==r||!l(p)||(e.pointerCleanup&&e.pointerCleanup(),c(),a=requestAnimationFrame(()=>{e.pendingOpen===s&&(e.pendingOpen=void 0),cr(e,t)}))},h=p=>{l(p)&&s()};o.addEventListener("pointerup",u,!0),o.addEventListener("mouseup",u,!0),o.addEventListener("pointercancel",h,!0),e.pendingOpen=s}function da(e,t){e.pointerCleanup&&e.pointerCleanup();let n=t.currentTarget.ownerDocument,o=e.pointerDown={button:t.button,pointerId:t.pointerId,pointerType:t.pointerType,x:t.clientX,y:t.clientY},r=o.pointerType&&o.pointerType!=="mouse",i=s=>{s.pointerId===o.pointerId&&(n.removeEventListener("pointerup",i,!0),n.removeEventListener("pointercancel",i,!0),n.removeEventListener("pointermove",a,!0),ye(e),e.pointerDown===o&&(e.pointerDown=void 0),e.pointerCleanup===c&&(e.pointerCleanup=void 0))},a=s=>{r&&s.pointerId===o.pointerId&&ye(e)},c=()=>{n.removeEventListener("pointerup",i,!0),n.removeEventListener("pointercancel",i,!0),n.removeEventListener("pointermove",a,!0),ye(e),e.pointerDown===o&&(e.pointerDown=void 0),e.pointerCleanup===c&&(e.pointerCleanup=void 0)};n.addEventListener("pointerup",i,!0),n.addEventListener("pointercancel",i,!0),n.addEventListener("pointermove",a,!0),e.pointerCleanup=c,r&&t.currentTarget.getAttribute("aria-disabled")!=="true"&&ca(e,t.currentTarget,o)}function ca(e,t,n){ye(e),e.content&&e.content.matches(":popover-open")&&e.content.hidePopover(),e.longPressTimer=setTimeout(()=>{e.longPressTimer=void 0,!(e.pointerDown!==n||!e.content)&&(dr(e,t.ownerDocument,n.x,n.y),e.openFocus="first",e.restoreFocus=!0,e.pendingOpen&&e.pendingOpen(),sr(e,t,n))},ta)}function ye(e){clearTimeout(e.longPressTimer),e.longPressTimer=void 0}function sa(e,t){return t?e:e&&typeof e=="object"?{"-webkit-touch-callout":"none",...e}:"-webkit-touch-callout:none;"+(e||"")}function la(e,t){let n=t.createElement("span");return n.setAttribute("aria-hidden","true"),n.setAttribute("data-sinewy-context-anchor",""),n.style.position="fixed",n.style.inset="auto",n.style.width="0",n.style.height="0",n.style.pointerEvents="none",n.style.setProperty("anchor-name",e.anchorName),t.body.insertBefore(n,t.body.firstChild),e.anchor=n,n}function ua(e){let t=Array.from(e.querySelectorAll(na)).find(n=>n.closest('[role="menu"]')===e&&n.getAttribute("aria-disabled")!=="true");t&&t.focus({preventScroll:!0})}function pa(e){let t=e,n;for(;(n=Object.getPrototypeOf(t))&&n!==Object.prototype;)t=n;let o=t[or]||(t[or]={value:0});return"sinewy-context-menu-"+ ++o.value}function ha(e){return"--"+e.replace(/[^a-zA-Z0-9_-]/g,"-")+"-anchor"}function fa(e){return e.filter(Boolean)}function lr(e){return e==null?[]:Array.isArray(e)?e:[e]}function ir(e,t,...n){lr(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function ga(e,t,n,o){return e?e(n,o):d(t,n,o)}var ze=F;var Re={gray:["#fcfcfc #111111","#f9f9f9 #191919","#f0f0f0 #222222","#e8e8e8 #2a2a2a","#e0e0e0 #313131","#d9d9d9 #3a3a3a","#cecece #484848","#bbbbbb #606060","#8d8d8d #6e6e6e","#838383 #7b7b7b","#646464 #b4b4b4","#202020 #eeeeee"],indigo:["#fdfdfe #11131f","#f7f9ff #141726","#edf2fe #182449","#e1e9ff #1d2e62","#d2deff #253974","#c1d0ff #304384","#abbdf9 #3a4f97","#8da4ef #435db1","#3e63dd #3e63dd","#3358d4 #5472e4","#3a5bc7 #9eb1ff","#1f2d5c #d6e1ff"],blue:["#fbfdff #0d1520","#f4faff #111927","#e6f4fe #0d2847","#d5efff #003362","#c2e5ff #004074","#acd8fc #104d87","#8ec8f6 #205d9e","#5eb1ef #2870bd","#0090ff #0090ff","#0588f0 #3b9eff","#0d74ce #70b8ff","#113264 #c2e6ff"],cyan:["#fafdfe #0b161a","#f2fafb #101b20","#def7f9 #082c36","#caf1f6 #003848","#b5e9f0 #004558","#9ddde7 #045468","#7dcedc #12677e","#3db9cf #11809c","#00a2c7 #00a2c7","#0797b9 #23afd0","#107d98 #4ccce6","#0d3c48 #b6ecf7"],teal:["#fafefd #0d1514","#f3fbf9 #111c1b","#e0f8f3 #0d2d2a","#ccf3ea #023b37","#b8eae0 #084843","#a1ded2 #145750","#83cdc1 #1c6961","#53b9ab #207e73","#12a594 #12a594","#0d9b8a #0eb39e","#008573 #0bd8b6","#0d3d38 #adf0dd"],green:["#fbfefc #0e1512","#f4fbf6 #121b17","#e6f6eb #132d21","#d6f1df #113b29","#c4e8d1 #174933","#adddc0 #20573e","#8eceaa #28684a","#5bb98b #2f7c57","#30a46c #30a46c","#2b9a66 #33b074","#218358 #3dd68c","#193b2d #b1f1cb"],amber:["#fefdfb #16120c","#fefbe9 #1d180f","#fff7c2 #302008","#ffee9c #3f2700","#fbe577 #4d3000","#f3d673 #5c3d05","#e9c162 #714f19","#e2a336 #8f6424","#ffc53d #ffc53d","#ffba18 #ffd60a","#ab6400 #ffca16","#4f3422 #ffe7b3"],orange:["#fefcfb #17120e","#fff7ed #1e160f","#ffefd6 #331e0b","#ffdfb5 #462100","#ffd19a #562800","#ffc182 #66350c","#f5ae73 #7e451d","#ec9455 #a35829","#f76b15 #f76b15","#ef5f00 #ff801f","#cc4e00 #ffa057","#582d1d #ffe0c2"],red:["#fffcfc #191111","#fff7f7 #201314","#feebec #3b1219","#ffdbdc #500f1c","#ffcdce #611623","#fdbdbe #72232d","#f4a9aa #8c333a","#eb8e90 #b54548","#e5484d #e5484d","#dc3e42 #ec5d5e","#ce2c31 #ff9592","#641723 #ffd1d9"],crimson:["#fffcfd #191114","#fef7f9 #201318","#ffe9f0 #381525","#fedce7 #4d122f","#facedd #5c1839","#f3bed1 #6d2545","#eaacc3 #873356","#e093b2 #b0436e","#e93d82 #e93d82","#df3478 #ee518a","#cb1d63 #ff92ad","#621639 #fdd3e8"],pink:["#fffcfe #191117","#fef7fb #21121d","#fee9f5 #37172f","#fbdcef #4b143d","#f6cee7 #591c47","#efbfdd #692955","#e7acd0 #833869","#dd93c2 #a84885","#d6409f #d6409f","#cf3897 #de51a8","#c2298a #ff8dcc","#651249 #fdd1ea"],purple:["#fefcfe #18111b","#fbf7fe #1e1523","#f7edfe #301c3b","#f2e2fc #3d224e","#ead5f9 #48295c","#e0c4f4 #54346b","#d1afec #664282","#be93e4 #8457aa","#8e4ec6 #8e4ec6","#8347b9 #9a5cd0","#8145b5 #d19dff","#402060 #ecd9fa"]},ma={accent:"indigo"},ba={amber:"#21201c"},ya=[1,2,3,4,7,8,9,10,11,12],Hd=Object.freeze(["gray","accent","red","orange","amber","green","teal","cyan","blue","indigo","purple","pink","crimson"]);function Ye(e,t){let n=ma[e]||e,o=Re[n];if(!o)return t;let r=Object.fromEntries(ya.map(i=>[`--sinewy-accent-${i}`,$e(o[i-1])]));return r["--sinewy-accent-contrast"]=ba[n]||"white",r["--sinewy-panel"]="light-dark(#fff, #191919)",r["--sinewy-neutral-1"]=$e(Re.gray[0]),r["--sinewy-neutral-6"]=$e(Re.gray[5]),r["--sinewy-neutral-9"]=$e(Re.gray[8]),r["--sinewy-neutral-11"]=$e(Re.gray[10]),r["--sinewy-neutral-12"]=$e(Re.gray[11]),r["--sinewy-extreme"]="light-dark(#000, #fff)",{...r,...t}}function $e(e){let[t,n]=e.split(" ");return`light-dark(${t}, ${n})`}var ur=Symbol("sinewy-theme"),wa=A.Content`
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
`,va=A.SubContent`
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
`,xa=A.Trigger`
  min-height 36
  display inline-flex
  align-items center
  justify-content center
  gap 8
  padding 0 11
  border 1px solid transparent
  border-radius 9
  font-size 13
  font-weight 750

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

  &[data-variant='solid']:hover,
  &[data-variant='solid'][data-state='open'] {
    background $sinewy-accent-10
  }

  &[data-variant='soft'] {
    background $sinewy-accent-3
    color $sinewy-accent-11
  }

  &[data-variant='soft']:hover,
  &[data-variant='soft'][data-state='open'] {
    background $sinewy-accent-4
    color $sinewy-accent-12
  }

  &[data-variant='outline'] {
    border-color $sinewy-accent-7
    background $sinewy-panel
    color $sinewy-accent-11
  }

  &[data-variant='outline']:hover,
  &[data-variant='outline'][data-state='open'] {
    border-color $sinewy-accent-8
    background $sinewy-accent-2
    color $sinewy-accent-12
  }

  &[data-variant='ghost'] {
    background transparent
    color $sinewy-accent-11
  }

  &[data-variant='ghost']:hover,
  &[data-variant='ghost'][data-state='open'] {
    background $sinewy-accent-3
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

  &[data-high-contrast][data-variant='solid']:hover,
  &[data-high-contrast][data-variant='solid'][data-state='open'],
  &[data-color='gray'][data-variant='solid']:hover,
  &[data-color='gray'][data-variant='solid'][data-state='open'] {
    background $sinewy-extreme
  }

  &:focus-visible {
    outline 3px solid color-mix(in srgb, $sinewy-accent-8 42%, transparent)
    outline-offset 2px
  }

  &[data-disabled] {
    cursor default
    opacity 0.48
  }
`,Et=e=>e`
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

`,ka=Et(A.Item),Sa=Et(A.Checkbox),Ca=Et(A.Radio),Ta=Et(A.SubTrigger),Aa=A.Label`
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
`,Da=A.Separator`
  height 1
  margin $dropdown-separator-margin
  background $sinewy-neutral-6
`,Ia=A.Indicator`
  width $dropdown-indicator-width
  display inline-grid
  place-items center
  position absolute
  inset-inline-start $dropdown-indicator-start
  flex 0 0 $dropdown-indicator-width
  font-size $dropdown-indicator-font-size
  font-weight 900
`,pr=d`kbd
  margin-inline-start auto
  color currentColor
  font-family inherit
  font-size inherit
  line-height inherit
  opacity 0.58
`,Ea=d`svg
  width 14
  height 14
  display block
  margin-inline-start auto
  flex 0 0 14px
  opacity 0.72

  &:dir(rtl) {
    transform rotate(180deg)
  }
`,I=d((e,t)=>A(e,t));I.Trigger=d(({size:e="2",variant:t="solid",color:n="gray",highContrast:o=!1,data:r,style:i,...a},c)=>xa({...a,style:Ye(n,i),data:_e(r,{size:e,variant:t,color:n,highContrast:o})},c));I.Content=d(({size:e="2",variant:t="solid",color:n="gray",highContrast:o=!1,data:r,style:i,...a},c,s)=>{let l={size:e,variant:t,color:n,highContrast:o};return wa({...a,style:Ye(n,i),data:_e(r,{size:e,variant:t,color:n,highContrast:o})},hr(s,l,c))});I.Item=Ot(ka);I.Checkbox=Ot(Sa);I.Radio=Ot(Ca);I.SubTrigger=Ot(Ta,Pa);I.SubContent=d(({size:e,variant:t,color:n,highContrast:o,data:r,style:i,...a},c,s)=>{let l=On(s,{size:e,variant:t,color:n,highContrast:o});return va({...a,style:n==null?i:Ye(n,i),data:_e(r,l)},hr(s,l,c))});I.Label=d(({size:e,data:t,...n},o,r)=>{let i=On(r,{size:e});return Aa({...n,data:_e(t,{size:i.size})},o)});I.Separator=d((e,t)=>Da(e,t));I.Indicator=d((e,t)=>Ia(e,t));I.Shortcut=d((e,t)=>pr(e,t));I.TriggerIcon=d((e,t)=>Oa(e,t));I.Group=A.Group;I.RadioGroup=A.RadioGroup;I.Sub=A.Sub;var O=d((e,t)=>ze(e,t));O.Trigger=ze.Trigger;O.Content=I.Content;O.Item=I.Item;O.Checkbox=I.Checkbox;O.RadioGroup=ze.RadioGroup;O.Radio=I.Radio;O.Indicator=I.Indicator;O.Group=ze.Group;O.Label=I.Label;O.Separator=I.Separator;O.Sub=ze.Sub;O.SubTrigger=I.SubTrigger;O.SubContent=I.SubContent;O.Shortcut=I.Shortcut;function Ot(e,t){return d(({size:n,color:o,highContrast:r,shortcut:i,data:a,style:c,...s},l,u)=>{let h=On(u,{size:n,highContrast:r}),p=i==null?l:[...l,pr(i)];return e({...s,style:o==null?c:Ye(o,c),data:_e(a,{size:h.size,variant:h.variant,color:o,highContrast:h.highContrast})},t==null?p:[...p,t()])})}function On(e,t){let n=e[ur]||{};return Object.fromEntries(["size","variant","color","highContrast"].map(o=>[o,t[o]==null?n[o]:t[o]]))}function hr(e,t,n){let o=Object.create(e);return o[ur]=t,d({context:o},()=>n)}function Oa(e){return d`svg
    width 14
    height 14
    display block
    flex 0 0 14px
  `({...e,viewBox:"0 0 14 14",fill:"none",focusable:"false","aria-hidden":e["aria-hidden"]==null?"true":e["aria-hidden"]},d`path`({d:"M3.5 5.25 7 8.75l3.5-3.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))}function Pa(){return Ea({viewBox:"0 0 14 14",fill:"none",focusable:"false","aria-hidden":"true"},d`path`({d:"M5.25 3.5 8.75 7l-3.5 3.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))}function _e(e,t){return{...e,...Object.fromEntries(Object.entries(t).map(([n,o])=>[n,o==null?null:typeof o=="boolean"?o?"":null:String(o)]))}}var E=I;var fr=[{title:"Context Menu",description:"A headless menu opened at a contextual pointer or keyboard invocation point.",slug:"context-menu",source:"docs/components/context-menu.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"styling",text:"Styling"},{depth:3,id:"themed-facade",text:"Themed facade"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"contextmenuattrs-children",text:"ContextMenu(attrs?, ...children)"},{depth:3,id:"contextmenutriggerattrs-children",text:"ContextMenu.Trigger(attrs?, ...children)"},{depth:3,id:"contextmenucontentattrs-children",text:"ContextMenu.Content(attrs?, ...children)"},{depth:3,id:"shared-menu-parts",text:"Shared menu parts"},{depth:2,id:"accessibility",text:"Accessibility"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
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
`}],gr=Object.fromEntries(fr.map(e=>[e.slug,e]));var Pt=fr;d.title="Sinewy \u2014 Documentation";d.css.reset``;d.css`
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
`;var za=d(({},[],{route:e})=>Ra(e({"/":Za,"/components/:slug":Qa,"/?":Or}))),Ra=d`div
  min-height 100svh
  display grid
  grid-template-columns 256px minmax(0, 1fr)

  @media (max-width: 780px) {
    grid-template-columns 1fr
  }
`,$a=d`aside
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
`,kr=d`a
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
`,Sr=d`span
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
`,Ma=d`nav
  display grid
  align-content start
  gap 25
`,mr=d`section
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
`,br=d`a
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
`,La=d`footer
  display grid
  gap 6
  color #85837c
  font-size 11
  line-height 1.45

  strong {
    color #5c5c57
    font-weight 680
  }
`,ja=d`nav
  min-width 0
  display none
  align-items center
  gap 5
  overflow-x auto

  @media (max-width: 780px) {
    display flex
  }
`,yr=d`a
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
`,qa=d`main
  min-width 0
  grid-column 2

  @media (max-width: 780px) {
    grid-column 1
  }
`,$n=d`div
  width min(100%, 1100px)
  display grid
  gap 48
  margin 0 auto
  padding 72 52 96

  @media (max-width: 780px) {
    padding 44 20 72
  }
`,Fa=d`header
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
`,Cr=d`div
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
`,Pn=d`section
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
`,Na=d`div
  display grid
  grid-template-columns repeat(3, minmax(0, 1fr))
  gap 12

  @media (max-width: 900px) {
    grid-template-columns 1fr
  }
`,zn=d`article
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
`,Rn=d`div
  display flex
  align-items center
  justify-content space-between
  gap 12
`,$t=d`span
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
`,wr=d`div
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
`,Tr=d`a
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
`,Ar=d`span
  width 34
  height 34
  display grid
  place-items center
  border-radius 50%
  background #f0eee8
  color #555650
  font-size 18
`,Ba=d`ol
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
`,zt=d`span
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
`,Dr=d`header
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
`,Ga=d`div
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
`,Ua=d`div
  display flex
  flex-wrap wrap
  align-items center
  gap 7
`,Ha=d`span
  padding 5 8
  border 1px solid #d9d6cd
  border-radius 99
  color #6c6c66
  font-size 10
  font-weight 650
`,Va=d`div
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
`,Ka=d`article
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
`,Wa=d`div
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
`,Ya=d`aside
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
`,Ir=d`div
  min-height 230
  display grid
  place-items center
  padding 28
  border 1px solid #dad7ce
  border-radius 15 15 0 0
  background-color #f2f0e9
  background-image radial-gradient(#d8d4c9 0.7px, transparent 0.7px)
  background-size 13px 13px
`,_a=d`div
  display grid
  gap 16
`,vr=d`section
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
`,xr=d`div
  display flex
  flex-wrap wrap
  align-items center
  gap 9
`,Ja=d`div
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
`,Er=d`pre
  overflow-x auto
  padding 18 20
  border-radius 0 0 15px 15px
  background #242522
  color #e9e8e2
  font-family "SFMono-Regular", Consolas, "Liberation Mono", monospace
  font-size 12
  line-height 1.65
  tab-size 2
`,Xa=O.Trigger`
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
`,Mn={"context-menu":{status:"Preview",tags:["Popover API","Point anchors","Headless + theme"],summary:"Contextual actions at pointer or keyboard invocation points, backed by the shared menu engine.",preview:td,previewHeadings:[{id:"live-example",text:"Live example"}]},dropdown:{status:"API reviewed",tags:["Popover API","CSS anchors","Headless + theme"],summary:"Actions, checkbox and radio choices, nested menus, room-aware placement, and a theme facade.",preview:ed,previewHeadings:[{id:"live-example",text:"Live example"},{id:"theme-preview",text:"Theme preview"}]}};function Ln(e,t){return[$a(kr({href:"/"},Sr("S"),d`span`(d`strong`("Sinewy"),d`span`("Documentation"))),Ma(mr(d`h2`("Start here"),br({href:"/",data:{active:t.has("/")||void 0}},"Overview")),mr(d`h2`("Components"),Pt.map(n=>br({href:"/components/"+n.slug,data:{active:t.has("/components/"+n.slug)||void 0}},n.title,d`span`(Mn[n.slug]?.status||"Preview"))))),La(d`strong`("Independent preview"),"Built for Sin.js with the platform.")),qa(e)]}function Za({},[],{route:e,doc:t}){return t.title("Sinewy \u2014 Documentation"),Ln([jn(e),$n(Fa(Cr("Independent components for Sin.js"),d`h1`("Small parts. Native behavior."),d`p`("Sinewy is an independently maintained component library for Sin.js. This site documents each public surface as it becomes useful, testable, and honest about its platform boundaries.")),Pn(d`header`(d`h2`("Where things stand"),d`p`("The status here follows implemented and verified behavior, not a speculative component catalog.")),Na(zn(Rn(d`strong`("Portable reference"),$t("Markdown")),d`p`("Component prose, API tables, and platform limits now come directly from the repository documents."),wr(d`span`({style:{width:"100%"}}))),zn(Rn(d`strong`("Behavior suite"),$t("Green")),d`p`("Browser, server rendering, hydration, submenu, and type declaration coverage are in place."),wr(d`span`({style:{width:"100%"}}))),zn(Rn(d`strong`("Accessibility sign-off"),$t({data:{tone:"manual"}},"Manual")),d`p`("Keyboard behavior is covered; supported-browser and assistive-technology verification remains.")))),Pn(d`header`(d`h2`("Components"),d`p`("Each component page combines its portable contract with live Sin examples and generated navigation.")),Pt.map(n=>Tr({href:"/components/"+n.slug},d`div`(d`h3`(n.title),d`p`(Mn[n.slug]?.summary||n.description)),Ar("\u2192")))),Pn({id:"roadmap"},d`header`(d`h2`("Documentation roadmap"),d`p`("The site itself is the visible checklist for turning implementation work into a usable system.")),Ba(d`li`(zt({data:{done:""}},"\u2713"),d`div`(d`strong`("Establish the documentation shell"),"Navigation, progress overview, component layout, and live examples.")),d`li`(zt({data:{done:""}},"\u2713"),d`div`(d`strong`("Render portable Markdown"),"Frontmatter, GFM content, heading IDs, links, and tables feed the site directly.")),d`li`(zt({data:{current:""}},"3"),d`div`(d`strong`("Generate the static site"),"Use Sin SSR and route discovery to publish every documented component.")),d`li`(zt("4"),d`div`(d`strong`("Expand through real components"),"Add primitives only as their contracts become concrete enough to document.")))))],e)}function Qa({slug:e},[],t){let n=gr[e];if(!n)return t.doc.status(404),Or({},[],t);let o=Mn[e]||{},r=o.preview?o.preview():[],i=o.previewHeadings||[];return t.doc.title(n.title+" \u2014 Sinewy"),Ln([jn(t.route),$n(Dr(Ga(d`a`({href:"/"},"Components"),d`span`("/"),d`span`(n.title)),Ua($t(o.status||"Preview"),(o.tags||[]).map(a=>Ha(a))),d`h1`(n.title),d`p`(n.description)),Va(Ka(r,Wa({data:{source:n.source}},d.trust(n.html))),Ya(d`strong`("On this page"),[...i,...n.headings.filter(a=>a.depth===2)].map(a=>d`a`({href:"#"+a.id},a.text)))))],t.route)}function ed(){return[d`section#live-example`(d`h2`("Live example"),d`p`("The themed facade keeps the headless part structure and remains open to normal Sin style extension."),d`div`(Ir(nd()),Er(`import Dropdown from 'sinewy/theme'

Dropdown(
  Dropdown.Trigger('Open menu'),
  Dropdown.Content(
    Dropdown.Item('Edit'),
    Dropdown.Checkbox({ checked: true },
      Dropdown.Indicator('\u2713'),
      'Notifications'
    )
  )
)`))),d`section#theme-preview`(d`h2`("Theme preview"),d`p`("Size and color establish an inherited menu scope. Parts can make deliberate local overrides."),_a(vr(d`h3`("Sizes"),xr(Rt({label:"Size 1",size:"1",color:"indigo"}),Rt({label:"Size 2",size:"2",color:"indigo"}),Rt({label:"Size 3",size:"3",color:"indigo"}))),vr(d`h3`("Colors"),xr(...["gray","indigo","cyan","green","amber","crimson","purple"].map(e=>Rt({label:od(e),variant:"soft",color:e}))))))]}function td(){return d`section#live-example`(d`h2`("Live example"),d`p`("Right-click or press and hold the target, or focus it and press Shift+F10."),d`div`(Ir(O(Xa("Open a contextual menu here"),O.Content({variant:"soft",color:"indigo"},O.Item({shortcut:"\u2318 R"},"Rename"),O.Item({shortcut:"\u2318 D"},"Duplicate"),O.Separator(),O.Item({color:"red"},"Delete")))),Er(`import { ContextMenu } from 'sinewy/theme'

ContextMenu(
  ContextMenu.Trigger('Right-click here'),
  ContextMenu.Content({ variant: 'soft', color: 'indigo' },
    ContextMenu.Item({ shortcut: '\u2318 R' }, 'Rename'),
    ContextMenu.Item('Duplicate')
  )
)`)))}var nd=d(()=>{let e=d.live(!0);return()=>E(E.Trigger({variant:"outline",color:"accent",size:"2"},"Open menu",E.TriggerIcon()),E.Content({align:"start",offset:7,variant:"soft",color:"indigo"},E.Label("Workspace"),E.Item({shortcut:"\u2318 E"},"Edit details"),E.Checkbox({bind:e},E.Indicator("\u2713"),"Notifications"),E.Separator(),E.Sub(E.SubTrigger("Share"),E.SubContent(E.Item("Copy link"),E.Item("Invite people")))))});function Rt({label:e,size:t="2",variant:n="solid",color:o,highContrast:r=!1,dark:i=!1}){return Ja({data:{dark:i||null}},d`span`(e),E(E.Trigger({size:t,variant:n==="soft"?"soft":"outline",color:o,highContrast:r},"Open",E.TriggerIcon()),E.Content({size:t,variant:n,color:o,highContrast:r,align:"start",offset:6},E.Item({shortcut:"\u2318 E"},"Edit"),E.Checkbox({checked:!0},E.Indicator("\u2713"),"Enabled"),E.Item({color:"red"},"Delete"))))}function od(e){return e[0].toUpperCase()+e.slice(1)}function jn(e){return d`header
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
  `(kr({href:"/"},Sr("S"),d`strong`("Sinewy")),ja(yr({href:"/",data:{active:e.has("/")||void 0}},"Overview"),Pt.map(t=>yr({href:"/components/"+t.slug,data:{active:e.has("/components/"+t.slug)||void 0}},t.title))))}function Or({},[],{route:e,doc:t}){return t.title("Not found \u2014 Sinewy"),Ln([jn(e),$n(Dr(Cr("404"),d`h1`("Nothing here yet."),d`p`("This documentation is growing alongside the component system."),Tr({href:"/"},d`div`(d`h3`("Return to the overview"),d`p`("See current progress and available component pages.")),Ar("\u2192"))))],e)}var tc=d.mount(za);export{tc as default};
