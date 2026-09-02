typeof globalThis>"u"&&(window.globalThis=window);var C=typeof window>"u"?{}:window;var Bo=Symbol("stackTrace"),pt=Object.freeze({}),jo=Object.freeze([]),An=Promise.resolve(),A={}.hasOwnProperty,De=new WeakSet;function Fo(e){return typeof e=="function"?e():e}function Et(e){return e&&String(e).replace(/\/+/g,"/").replace(/(.)\/\*?$/,"$1")}function ut(e){return e&&Et(e).replace("/?","?")}function Ot(e){return e.replace(/(\B[A-Z])/g,"-$1").toLowerCase()}function oe(e){return e&&I(e.observe)}function I(e){return typeof e=="function"}function No(e){return e&&I(e.then)}function Dn(e){return e.charCodeAt(0)===111&&e.charCodeAt(1)===110}function Rt(e){return typeof e=="boolean"||e==null}function In(e){return e&&Array.isArray(e.raw)}function $n(e){return e.charCodeAt(0)===36?"--"+e.slice(1):e.charCodeAt(0)===45&&e.charCodeAt(1)===45?e:null}function zn(e){return e==="dom"||e==="type"||e==="value"||e==="key"||e==="src"||e==="srcset"||e==="href"||e==="class"||e==="className"||e==="data"||e==="style"||e==="deferrable"||e==="is"||e==="handleEvent"}function Pn(e){for(;e.parent&&!e.name;)e=e.parent;return e.name}function Go(e){for(;e.parent&&!e.id;)e=e.parent;return e.id}function Xd(e){let t=e.classes||"";for(;e.parent;)e=e.parent,t+=" "+e.classes||"";return t}function Vo(e){return(Tn(e.attrs.class)+Tn(e.attrs.className)+Xd(e.tag)).trim()}function qt(e){return Array.isArray(e)?e:[e]}function Ie(){}function Lt(e){return $n(e)||(e==="cssFloat"?"float":Ot(e))}function Tn(e){return oe(e)||I(e)?Tn(e()):e?typeof e=="object"?Zd(e):e+" ":""}function Zd(e){let t;for(let n in e)e[n]&&(t=t==null?n:[t,n].join(" "));return t||""}function Mt(e,t,n){t?e.style.setProperty("min-width",t+"px"):e.style.removeProperty("min-width"),n?e.style.setProperty("min-height",n+"px"):e.style.removeProperty("min-height")}function Ve(e,[t,n,o,r]=[],{callbacks:a,depth:d}={}){if(e===document.documentElement)Mt(e,o,r),window.scrollTo(t||0,n||0);else{if(d){let c=document.createElement("div");c.style="position:absolute;width:1px;height:1px;top:"+(r-1)+"px;left:"+(o-1)+"px",e.appendChild(c),De.add(c),a.push(()=>(De.delete(c),c.remove()))}e.scrollLeft=t,e.scrollTop=n}}function Ho(e,t){return!t||!t.tag?e:!e||!e.tag?(e.tag=t.tag,e):(e.tag={id:t.tag.id||e.tag.id,name:t.tag.name||e.tag.name,classes:(e.tag.classes?e.tag.classes+" ":"")+t.tag.classes,args:t.tag.args,vars:t.tag.vars,parent:e.tag},e)}var te=class{constructor(t,n,o=null,r=0,a=pt,d=jo){this.nesting=r,this.component=n,this.inline=t,this.tag=o,this.attrs=a,this.key=a?a.key:void 0,this.dom=null,this.children=d}};["head","get","put","post","delete","patch"].forEach(e=>He[e]=function(t,n={}){return n.method=e,He(t,n)});He.redraw=()=>{};var Qd=typeof Uint8Array>"u"?[]:[Object.getPrototypeOf(Uint8Array)],ei="Blob ArrayBuffer DataView FormData URLSearchParams File".split(" ").map(e=>globalThis[e]).filter(e=>e).concat(Qd);function He(e,{url:t=new URL(e,C.location.origin),method:n="GET",responseType:o,json:r="application/json",query:a,body:d,user:c=t.username,pass:s=t.password,headers:l={},config:p,timeout:h=0,signal:u,...f}={}){let g=new C.XMLHttpRequest(f);u?.addEventListener("abort",()=>g.abort());let b=!1,y=new Promise((x,w)=>{let k,v;n=n.toUpperCase(),g.addEventListener("readystatechange",function(){if(g.readyState===g.DONE)try{g.headers=g.headers||ni(g.getAllResponseHeaders()),g.status&&Object.defineProperty(g,"body",{enumerable:!0,value:k===r?g.response===void 0||g.response===""?void 0:JSON.parse(g.response):g.response}),g.status===304||g.status>=200&&g.status<300?x(b?g:g.body):w(ti(g))}catch(E){w(E)}}),g.addEventListener("error",w),g.addEventListener("abort",()=>w(new Error("ABORTED"))),g.addEventListener("timeout",()=>w(new Error("TIMEOUT"))),a&&(a=new URLSearchParams(a))&&a.size&&a.forEach((E,q)=>t.searchParams.append(q,E)),g.open(n,""+t,!0,c,s),g.timeout=h,o&&(g.responseType=o),Object.entries(l).forEach(([E,q])=>{q&&g.setRequestHeader(E,q),E.toLowerCase()==="accept"&&(k=q),E.toLowerCase()==="content-type"&&(v=q)}),!k&&!o&&r&&g.setRequestHeader("Accept",k=r),!v&&d!==void 0&&!ei.some(E=>d instanceof E)&&r&&g.setRequestHeader("Content-Type",v=r),p&&p(g),g.send(v===r?JSON.stringify(d):d)}).catch(x=>{let w=Object.assign(new Error(x.message),{...x,url:t,status:g.status,headers:g.headers,body:g.body||g.response});throw Object.defineProperty(w,"xhr",{value:g}),w});return Object.defineProperties(y,{abort:{value:()=>g.abort(),enumerable:!0},xhr:{get:()=>(b=!0,y)}})}function ti(e){return new Error(e.status?e.status+(e.statusText?" "+e.statusText:""):"Unknown")}function ni(e){let t={};return e.split(`
`).forEach(n=>{let o=n.indexOf(":"),r=n.substring(0,o).trim().toLowerCase(),a=n.substring(o+1).trim();r==="set-cookie"?t[r]?t[r].push(a):t[r]=[a]:t[r]=a}),t}function Ue(e,...t){let n=new Set;return t.forEach(s=>I(s)&&n.add(s)),d.value=e,d.observe=o,d.valueOf=d.toString=d.toJSON=()=>e,d.detach=Ie,d.reduce=c,d.set=s=>(...l)=>(d(I(s)?s(...l):s),d),d.get=s=>Object.assign(r.bind(null,s),{observe:l=>d.observe(()=>l(r(s)))}),d.if=(...s)=>Object.assign(a.bind(null,...s),{observe:l=>d.observe(()=>l(a(...s)))}),d;function o(s,l){let p=l?(...h)=>(n.delete(p),s(...h)):s;return n.add(p),()=>n.delete(p)}function r(s){return I(s)?s(d.value):d.value[s]}function a(s,l=!0,p=!1){return d.value===s?l:p}function d(s){if(!arguments.length)return d.value;let l=e;return d.value=e=s,n.forEach(p=>d.value!==l&&p(d.value,l,()=>n.delete(p))),d.value}function c(s,l){let p=1,h=Ue(arguments.length>1?s(l,d.value,p++):d.value);return d.observe(u=>h(s(h.value,u,p++))),h}}Ue.from=function(...e){let t=e.pop(),n=Ue(t(...e.map(En))),o=e.map(r=>r.observe(()=>n(t(...e.map(En)))));return n.detach=()=>o.forEach(En),n};function En(e){return e()}var Uo=!1,Ko={};function Wo(e){return e.split(/(?=\/)/)}function oi(e,t){return e.reduce((n,o,r)=>(o[1]===":"&&(n[o.slice(2)]=decodeURIComponent(t[r].slice(1))),n),{})}function ht(e,t,n,o){let r=h.location=n.location,a=e(({key:u,route:f,...m},[g],b)=>(b.route=ht(e,u.replace(/[/*?]$/,""),n,f),f.key=u,()=>c(g,m,b)));return h.root=o?o.root:h,h.parent=o||h,h.query=n.query,h.toString=h,h.state=d,h.has=u=>{let f=s(r);if((u=u.replace(t,""))==="/")return f===t||f==="/"&&t==="";let m=ut(t+"/"+u);return f.indexOf(m)===0&&(f[m.length]===void 0||f[m.length]==="/")},Object.defineProperty(h,"path",{get(){let u=s(r),f=u.indexOf("/",t.length+1);return f===-1?u:u.slice(0,f)}}),h;function d(u){return u&&C.history.replaceState({...history.state,...u},"",r.pathname+r.search+r.hash),C.history?.state}function c(u,f,m){let g=I(u)?u(f,[],m):u;return No(g)?e(()=>g)(f):g}function s(u,f=0){return decodeURIComponent(Et(e.route.prefix[0]==="#"?u.hash.slice(e.route.prefix.length+f):e.route.prefix[0]==="?"?u.search.slice(e.route.prefix.length+f):u.pathname.slice(e.route.prefix.length+f)))}async function l(u,{state:f,replace:m=!1,redraw:g=!0,scroll:b=!0}={}){if(u!==s(r)+r.search){if(e.is.server)return n.doc.status(302),n.doc.headers({Location:e.route.prefix+u});e.route.prefix[0]==="#"?C.location.hash=e.route.prefix+u:e.route.prefix[0]==="?"?C.location.search=e.route.prefix+u:C.history[m?"replaceState":"pushState"](f,null,e.route.prefix+u),Ko[u]=f,u.indexOf(r.search)>-1&&n.query(r.search),g&&await e.redraw(),b===!1||e.route.scroll===!1?e.route.scroll=void 0:Ve(document.documentElement)}}function p({state:u={}}={}){e.redraw().then(()=>Ve(document.documentElement,u?.sinscroll?.[""]))}function h(u,f={}){if(typeof u>"u")return t+"/";if(typeof u=="string")return l(ut(u[0]==="/"?u:"/"+u),f);Uo||(Uo=!0,e.route.prefix[0]==="#"?C.addEventListener("hashchange",p,{passive:!0}):I(C.history.pushState)&&C.addEventListener("popstate",p,{passive:!0}));let m=s(r,t.length),g=Wo(m),{match:b,view:y}=ri(u,g),x=t+(b?b.map((w,k)=>w==="/*"?"*":w==="/?"?"?":g[k]).join(""):"?");return(y===void 0||b[0]==="/?")&&n.doc.status(404),h.params={...h.parent.params,...oi(b||[],g)},a({key:x,route:h,...h.params,...t+m===x&&Ko[t+m]||C.history.state||{},...f},y)}}function ri(e,t){let n=0,o,r;function a(d,c){if(d.charCodeAt(0)!==47&&(d="/"+d),d=Wo(Et(d)),typeof c=="object"&&c!=null){for(let l in c)a(d+l,c[l]);return}let s=di(d,t);s>n&&(n=s,o=d,r=c)}for(let d in e)a(d,e[d]);return{match:o,view:r}}function di(e,t){return e.reduce((n,o,r)=>n+(o==="/?"?1:o===t[r]?7:o&&t[r]&&o.toLowerCase()===t[r].toLowerCase()?6:o[1]===":"&&t[r]&&t[r].length>1?5:o==="/"&&!t[r]?4:o.indexOf("/...")===0?3:o==="/*"?2:-1/0),0)}function On(e,t){let n=URLSearchParams,o=["append","delete","set","sort"],r=t.search,a=new n(r),d,c=e.live();c.replace=p=>(a=new n(p),l()),c.clear=()=>c.replace("");for(let p in n.prototype)c[p]=(...h)=>(d=s()[p](...h),o.includes(p)&&l(),d);return c;function s(){return r===t.search?a:(r=t.search,a=new n(r))}function l(){let p=t.pathname+(a+""?"?"+(a+"").replace(/=$/g,""):"")+t.hash;location.href.endsWith(p)||(C.history.replaceState(C.history.state,null,p),c(t.search),e.redraw())}}var Yo={ai:"align-items",as:"align-self",ac:"align-content",ar:"aspect-ratio",b:"bottom",bg:"background",bf:"backdrop-filter",bc:"background-color",br:"border-radius",bs:"box-shadow",bi:"background-image",c:"color",d:"display",fg:"flex-grow",fb:"flex-basis",f:"float",fd:"flex-direction",ff:"font-family",fs:"font-size",fw:"font-weight",g:"gap",ga:"grid-area",gg:"grid-gap",gta:"grid-template-areas",gtc:"grid-template-columns",gtr:"grid-template-rows",h:"height",jc:"justify-content",js:"justify-self",l:"left",lh:"line-height",ls:"letter-spacing",m:"margin",mb:"margin-bottom",ml:"margin-left",mr:"margin-right",mt:"margin-top",o:"opacity",p:"padding",pb:"padding-bottom",pl:"padding-left",pr:"padding-right",pt:"padding-top",pi:"place-items",pe:"pointer-events",r:"right",t:"top",ta:"text-align",td:"text-decoration",tt:"text-transform",ts:"text-shadow",us:"user-select",va:"vertical-align",ws:"white-space",w:"width",zi:"z-index",z:"zoom"};var be,Ft="s",bt=C.document,ii=/^(ms|moz|webkit)[-A-Z]/i,Ye=bt.createElement("div"),Gt=new Map,_o={},Rn={},qn=new Map,ue={$:"calc"},Kn=e=>be||(be=e||bt.querySelector("style.sin")||bt.createElement("style"));function nr(e){if(qn.has(e))return qn.get(e);let t=Object.assign(document.createElement("link"),{rel:"stylesheet",href:e});document.head.appendChild(t);let n=new Promise((o,r)=>{t.onload=()=>o(t),t.onerror=r});return qn.set(e,n),n}var or=(e,t)=>typeof t=="function"?Gt.set(e.charCodeAt(0),t):Object.entries(e).forEach(([n,o])=>Gt.set(n.charCodeAt(0),o)),Bt={flex:"",border:"px","line-height":"","box-shadow":"px","border-top":"px","border-left":"px","border-right":"px","border-bottom":"px","text-shadow":"px","@media":"px","@container":"px"},Bn=Array.from(Object.keys(A.call(Ye.style,"width")?Ye.style:Object.getPrototypeOf(Ye.style)).reduce((e,t)=>(e.add(t.match(ii)?"-"+Ot(t):Ot(t)),e),new Set(["float"]))),Jo=Bn.reduce((e,t)=>{let n=t.match(/-(ms|o|webkit|moz)-/g);if(n){let o=t.replace(/-(ms|o|webkit|moz)-/,"");Bn.indexOf(o)===-1&&(o==="flexDirection"&&(e.flex="-"+n[1].toLowerCase()+"-flex"),e[o]=t)}return e},{}),Ln=new Map,Xo=new Set,Zo=C.CSS&&C.CSS.supports("color","var(--support-test)"),ai=["perspective","blur","drop-shadow","inset","polygon","minmax"],ci=["@media","@container","@supports","@document","@layer","@starting-style"],rr=e=>ci.some(t=>e.indexOf(t)===0),si=(e,t)=>e==="translate"||t.indexOf("translate")===0||ai.indexOf(t)>-1,li=(e,t)=>e==="rotate"||t.indexOf("rotate")===0||t.indexOf("skew")===0,jn=e=>e!==32&&e!==9&&e!==10&&e!==13&&e!==59,dr=e=>e>=48&&e<=57||e===46,pi=e=>e>=65&&e<=90||e>=97&&e<=122||e===45||e===95,ui=e=>e===37||e>=65&&e<=90||e>=97&&e<=122,hi=e=>e===34||e===39,Qo=e=>e===32||e===58||e===9,fi=e=>e===59||e===10||e===125,ir=e=>e===38||e===58||e===64||e===91,gi=e=>e===59||e===125,Vt=e=>e[e.length-1],ae=[],ye=-1,D=-1,me=-1,ft=-1,Ht=-1,Ke=-1,S=-1,ar=-1,ze=-1,we=-1,Fn=-1,se=-1,de=-1,re="",V="",ve="&&",Le="",gt="",er="",Nt="",B="",Nn="",Gn="",mt="",We="",T="",j="",jt="",Y=null,tr=!0,Je=!1,Vn=!1,Mn=!0,Hn=!1,ce=0,_e=!1,$e=[];function Wn(e){return e.charCodeAt(0)===36?"--"+e.slice(1):Yo[e]||e}function cr(e,t,n){return(e?";":"")+(Je?t:mi(t))+":"+n+(ar===33?"important":"")}function mi(e){return _o[e]||(_o[e]=$i(Wn(e)))}function bi(e){return _e?e:e.replace(/,\s*[:[&]?/g,t=>ir(t.charCodeAt(t.length-1))?",&"+Vt(t):",& ")}function Ut(e,t){if(tr&&(be&&bt.head&&bt.head.appendChild(be),tr=!1),be&&be.sheet)try{be.sheet.insertRule(e,t??be.sheet.cssRules.length)}catch(n){console.error("Insert rule error:",n,e)}}function Yn([e,...t],n,o=0,r=!1){if(be||Kn(),Ln.has(e))return{...Ln.get(e),parent:n,args:t};_e=r;let a={};$e=[],ve="&&",Gn=mt=We=B=j=V="",ae.length=ce=0,ze=D=Fn=Ht=de=se=-1,Y=_e?{}:null,Hn=!1,Vn=!1,Mn=!0,T=e[0];for(let c=0;c<e.length;c++)if(Y?sr(0,c===e.length-1):yi(e,c),T=e[c+1],c<t.length){let s=e[c].slice(D);if(!r&&Zo&&D>=0)re=Ft+Math.abs(ce).toString(31),a[jt="--"+re+c]={property:V,fns:$e.slice(-1),unit:Un(V,Vt($e)),index:c,transform:se!==-1&&Ai},j+=s+"var("+jt+")"+(se===-1?"":(se=-1,")")),D=0;else if(e[c+1].trim().charCodeAt(0)===123)re=Ft+Math.abs(ce).toString(31),a[jt=re+c]={index:c},ae.push("["+jt+"]");else{let l=s+Fo(t[c])+Un(V,Vt($e));j+=l;for(let p=0;p<l.length;p++)ce=Math.imul(31,ce)+l.charCodeAt(p)|0;Mn=!1,D=D>=0?0:Zo?-1:0}}Hn&&(_e?Object.entries(Y).forEach(([c,s])=>{Ut(c.replace(/&\s+/g,"").replace(/{&$/,"")+"{"+s+"}")}):(re=Ft+Math.abs(ce).toString(31),We+=(We?" ":"")+re,er=o&&"&".repeat(o+1),Xo.has(re)||Object.entries(Y).forEach(([c,s])=>{er&&(c=c.replace("&","&".repeat(o+1))),Ut(c.replace(/&/g,"."+re)+"{"+s+"}")})));let d={name:Gn,classes:We,id:mt,args:t,vars:a,parent:n};return Mn?Ln.set(e,d):Xo.add(re),d}function yi(e,t){for(let n=0;n<=T.length;n++)if(S=T.charCodeAt(n),n<T.length&&(ce=Math.imul(31,ce)+S|0),Vn){if(jn(S)){Y={},sr(n++,t===e.length-1);break}}else!jn(S)||n===T.length?(We=(me!==-1?T.slice(me+1,n).replace(/\./g," "):"")+We,mt===""&&(mt=ft!==-1?T.slice(ft,me===-1?n:me):""),Gn=T.slice(0,mt?ft-1:me!==-1?me:n),ft=me=-1,Vn=!0):S===35?ft=n+1:me===-1&&S===46&&(me=n)}function vi(e){return ue[e]||e}function sr(e,t){for(let n=e;n<=T.length;n++)ar=S,S=T.charCodeAt(n),n<T.length&&(ce=Math.imul(31,ce)+S|0),Ke===-1&&D!==-1&&(Je?gi(S):fi(S)||t&&n===T.length)&&wi(n),Ke!==-1?Ke===S&&T.charCodeAt(n-1)!==92&&(Ke=-1):Ke===-1&&hi(S)?(Ke=S,D===-1&&(D=n)):S===123?xi(n):S===125||t&&n===T.length?ki():n!==T.length&&ye===-1&&jn(S)?(ye=n,Ht=S):!V&&ye>=0&&Qo(S)?(V=T.slice(ye,n),Je=S===58):D===-1&&V&&!Qo(S)?(D=ze=n,dr(S)?we=n:S===36&&(de=n)):D!==-1?pr(n):(S===9||S===32)&&(ze=n+1)}function wi(e){lr(e),V==="@import"?Ut(V+" "+T.slice(D,e)+";",0):B+=cr(B,V,j+T.slice(D,e)),Hn=!0,ye=D=-1,Je=!1,V=j=""}function lr(e){se!==-1?Si(e):de!==-1?Ci(e):we!==-1&&Di(e)}function xi(e){V==="animation"?(B&&(Y[ve]=B),gt=j+T.slice(D,e).trim(),Nn=j="",B=""):gt?(Nt=T.slice(ye,e).trim(),B=""):(B&&(Y[ve]=B),Le=(Ht===64?vi(V)+(Je?":":" ")+j+(D===-1?"":T.slice(D,e)):T.slice(ye,e)).trim(),Le.indexOf(",")!==-1&&(Le=bi(Le)),j=V="",ae.push((ir(Ht)?"":" ")+Le+(Le==="@font-face"&&++Fn?"/*"+Array(Fn).join(" ")+"*/":"")),ve=hr(ae),B=Y[ve]||""),ye=D=-1,Je=!1,V=""}function ki(){if(Nt)Nn+=Nt+"{"+B+"}",Nt=B="";else if(gt)B=Y[ve]||"",re=Ft+Math.abs(ce).toString(31),Ut("@keyframes "+re+"{"+Nn+"}"),B+=cr(B,"animation",gt+" "+re),gt="";else{let e=ae.map(n=>n.charCodeAt(0)===64&&rr(n)?"}":"").join(""),t=ae.pop();ae.length&&ae[0].indexOf("@keyframes")===0?Y[ae[0]]=(Y[ae[0]]||"")+Le+"{"+B+"}":B&&(Y[ve]=B.trim()+e),t in ue&&(Y[ue[t]+" &&"]=B.trim()),ve=hr(ae),B=Y[ve]||""}ye=D=-1,V=""}function pr(e){if(dr(S)?we===-1&&(we=e):S===40?de=-1:lr(e),S===40){let t=T.slice(Math.max(ze,D),e);t in ue&&(t=ue[t]),j+=T.slice(D,e-t.length)+t+"(",$e.push(t),D=ze=e+1}else S===41?$e.pop():S===9||S===32?ze=e+1:S===36?de=e:de!==-1&&S===47&&(se=e)}function Ci(e){T.charCodeAt(e)===47?se=e:pi(S)||(j=j+T.slice(D,de)+"var(--"+T.slice(de+1,e)+")",D=e,de=-1)}function Si(e){j=j+T.slice(D,de)+"color-mix(in oklab, var(--"+T.slice(de+1,se)+"), transparent "+(T.length===se+1?"":Ti(T.slice(se+1,e),T.charCodeAt(e))+")"),D=e+1,de=we=-1}function Ti(e,t){return se=-1,100-(e*(t===37?1:100)).toFixed(0)+"%"}function Ai(e){return(100-(typeof e=="string"&&e.charCodeAt(e.length-1)===37?e.slice(0,-1):e*100)).toFixed(0)+"%"}function Di(e){ui(S)?Gt.has(S)&&(j=j+T.slice(D,we)+Gt.get(S)(T.slice(we,e)),D=e+1):T.charCodeAt(ze)!==35&&(j=j+T.slice(D,e)+Un(V,Vt($e)),D=e),we=-1}function Un(e,t=""){if(e=Wn(e),e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return"";let n=e+","+t;return A.call(Rn,n)?Rn[n]:Rn[n]=t&&si(e,t)?"px":li(e,t)?"deg":t?"":Ii(e)}function ur(e,{property:t,fns:n,unit:o,transform:r}){if(I(e)&&(e=C.isServerSin&&!oe(e)?"6iacvt":e()),r&&(e=r(e)),!e&&e!==0)return"";if(typeof e=="number")return e+o;if(typeof e!="string"&&(e=""+e),e.charCodeAt(0)===36)return"var(--"+e.slice(1)+")";T=e,j="",D=0,we=ze=-1,V=t,$e=n;for(let a=0;a<=e.length;a++)S=e.charCodeAt(a),pr(a);return j+e.slice(D)}function hr(e){if(e.length===0)return"&&";let t=0;return e.reduce((n,o,r,a)=>{let d=o.charCodeAt(0);return d===64&&(o.indexOf("@font-face")===0&&r++,rr(o))?(t++,o+"{"+(r===a.length-1?"&&":"")+n):d===58&&o.startsWith(":root")?o+" "+n+(_e||r-t?"":d===32?"&":"&&"):n+(_e||r-t?"":d===32?"&":"&&")+o},"")}function Ii(e){if(e=Wn(e),$n(e)||A.call(Bt,e))return Bt[e];try{return Ye.style[e]="1px",Ye.style.setProperty(e,"1px"),Bt[e]=Ye.style[e].slice(-3)==="1px"?"px":""}catch{return Bt[e]=""}}function $i(e){if(Bn.indexOf(e)===-1){if(Jo[e])return Jo[e];e.indexOf("--")!==0&&C.sindevhmr&&C.console.error(e,"css property not found")}return e}var $=C.document,fr={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},eo=new Map,to=Symbol("deferrable"),vt=Symbol("observable"),he=Symbol("component"),_t=Symbol("cycle"),no=Symbol("event"),oo=Symbol("$arrayEnd"),ro=Symbol("$arrayStart"),_n=Symbol("class"),Jn=Symbol("live"),gr=Symbol("size"),wt=Symbol("life"),xt=Symbol("attr"),mr=Symbol("attrs"),Be=Symbol("source"),br=Symbol("children"),Xe=Symbol("keyIndex"),fe=Symbol("keys"),wr=Symbol("key"),Fe=Symbol("s"),Pe=[],Yt,Jt,xr;function i(...e){let t=typeof e[0];return t==="string"?io(Object.assign([e[0]],{raw:[]}))(...e.slice(1)):A.call(e[0],Fe)?e[0](...e.slice(1)):Cr(io,In(e[0])?kr(e):t==="function"?new te(i.redrawing,e):new te(i.redrawing,[e[1],e[0]]))}function io(...e){return In(e[0])?Cr(io,kr(e,this)):Bi(e,this)}function kr(e,t){let n=t?t.nesting+1:0;return new te(t&&t.inline,t&&t.component,Yn(e,t&&t.tag,n),n)}function Cr(e,t){let n=e.bind(t);return n[Fe]=!0,n}i.redrawing=!1;i.sleep=(e,...t)=>new Promise(n=>setTimeout(n,e,...t));i.with=(e,t)=>e===void 0?e:t(e);i.isAttrs=Tr;i.is={server:i.isServer=C.isServerSin||!1};i.containers=[];i.redraw=Xt;i.redraw.force=Vi;i.mount=ji;i.css=(...e)=>Yn(e,null,0,!0);i.css.alias=Sr;i.css.reset=sa;i.css.unit=or;i.css.load=nr;i.style=Kn;i.animate=qi;i.animate.transform=Ri;i.http=He;i.live=Ue;i.event=Pi;i.on=Oi;i.trust=Ei;i.route=ht(i,"",{location:C.location,query:On(i,C.location)});i.route.prefix="";i.window=C;i.scroll=!0;i.View=te;i.error=i(e=>(console.error(e),()=>i`pre;all initial;d block;c white;bc #ff0033;p 8 12;br 6;overflow auto;fs 12`(i`code`("Unexpected Error: "+(e.message||e)))));i.jsx=i((e,t)=>t.slice(1));i.container=i((e,t,n)=>{return n.container={},()=>i``({...e,dom:[o].concat(e.dom)},i` display contents`(t));function o(r){r.style.containerType="inline-size";let a=r.firstElementChild;return a.setAttribute("data-sin-container",""),requestAnimationFrame(()=>{a.style.setProperty("transition-behavior","allow-discrete"),a.style.setProperty("transition",i.containers.map(c=>"--sin-container-"+c+" 0.001ms step-start").join(", ")),a.addEventListener("transitionrun",d)}),d(),()=>a.removeEventListener("transitionrun",d);function d(c){let s=getComputedStyle(a);for(let l of i.containers)n.container[l]=s.getPropertyValue("--sin-container-"+l)==="1";n.redraw()}}});var zi=i(({strings:e,values:t=[]})=>{let n=$.createElement("div"),o=Array.isArray(e.raw)?[...e.raw]:Array.isArray(e)?[...e]:[e.trim()];o[0]=o[0].trimStart(),o[o.length-1]=o[o.length-1].trimEnd(),n.innerHTML=String.raw({raw:o},...t);let r=[...n.childNodes,$.createComment("trust")];return()=>r});function Sr(e,t){if(typeof e=="object")return Object.entries(e).forEach(([o,r])=>Sr(o,r));if(Array.isArray(t)?(ue["@"+e]=t[0],ue[t[0]]=t[1]):(ue["@"+e]=t,ue[e]=t),i.is.server)return;let n=(Array.isArray(t)?t[0]:t).split(" ")[0];if(n==="@media"){let o=null;Object.defineProperty(i.is,e,{get(){if(o!==null)return o;let r=C.matchMedia(t.slice(t.indexOf("(")));return r.addEventListener("change",a=>(o=a.matches,i.redraw())),o=r.matches}})}else n==="@container"&&(i.css([`@property --sin-container-${e}{syntax:'<number>';inherits:false;initial-value:0;}`]),i.css([`${t}{[data-sin-container]{--sin-container-${e}:1}}`]),i.containers.push(e))}function Pi(e){let t=new Set(e?[e]:[]);return n.observe=r,Object.defineProperty(n,"signal",{get:o}),n;function n(...a){return[...t].map(d=>d(...a))}function o(){let a=new AbortController;return r(()=>a.abort(),!0),a.signal}function r(a,d){let c=d?(...s)=>(t.delete(c),a(...s)):a;return t.add(c),()=>t.delete(c)}}function Ei(e,...t){return e&&e.raw||(e=Array.isArray(e)?e.map(n=>Rt(n)?"":n).join(""):Rt(e)?"":""+e),zi({key:""+e,strings:e,values:t})}function Oi(e,t,n,o){return typeof o=="function"&&([n,o]=[o,n]),(...r)=>{let a=d=>uo(n,d,...r);return e.addEventListener(t,a,o),()=>e.removeEventListener(t,a,o)}}function Ri(e){return function(...t){let[n]=t;I(e)&&(e=e(...t));let o=e.getBoundingClientRect(),r=n.getBoundingClientRect();return n.style.setProperty("transition","none"),n.style.setProperty("--transform",`translate(${o.left-r.left}px, ${o.top-r.top}px) scale(${o.width/r.width}, ${o.height/r.height})`),requestAnimationFrame(()=>n.style.removeProperty("transition")),i.animate(n)}}function qi(e){return e.setAttribute("animate","entry"),requestAnimationFrame(()=>(e.offsetWidth,e.removeAttribute("animate"))),t=>t&&(e.setAttribute("animate","exit"),Promise.allSettled(e.getAnimations().map(n=>n instanceof C.CSSTransition&&n.finished)))}function Li(e,t,n){e.addEventListener("click",o=>{if(!o.defaultPrevented&&(o.button===0||o.which===0||o.which===1)&&(!o.currentTarget.target||o.currentTarget.target==="_self")&&!Mi(o.currentTarget)&&!o.ctrlKey&&!o.metaKey&&!o.shiftKey&&!o.altKey){o.preventDefault();let r=e[xt].state;n(e.getAttribute("href"),e[xt])}})}function Mi(e){return i.route.prefix[0]!=="#"&&e.getAttribute("href")?.includes("#")&&e.origin===C.location.origin&&e.pathname===C.location.pathname&&e.search===C.location.search}function Bi(e,t){let n=Tr(e[0]);return new te(t.inline,t.component,t.tag,t?t.nesting+1:0,n?e.shift():void 0,e.length===1&&Array.isArray(e[0])?e[0]:e)}function Tr(e){return e!==null&&typeof e=="object"&&!(e instanceof te)&&!Array.isArray(e)&&!(e instanceof Date)&&!(e instanceof C.Node)&&!I(e.then)&&!(e instanceof String)&&!(e instanceof Number)}function ji(e,t,n={},o={}){if(I(t)){if(!e)throw new Error("The dom element you tried to mount to does not exist.")}else if(o=n||{},n=t||{},t=e,e=$.body,!e)throw new Error("document.body does not exist.");if(!(t instanceof te)&&!A.call(t,Fe)&&(t=i(t)),A.call(o,"location")||(o.location=C.location),A.call(o,"error")||(o.error=i.error),i.is.server)return{view:t,attrs:n,context:o,unmount:Ie};e[Bo]=new Error().stack,i.scroll&&Fi(o),Gi(e.firstChild,o,n);let r={head:o.hydrating?Ie:Ar,lang:i.live($.documentElement.lang,d=>$.documentElement.lang=d),title:i.live($.title,d=>$.title=d),status:Ie,doctype:Ie,headers:Ie};o.doc=r,o.route=ht(i,"",{doc:o.doc,location:o.location,query:i.route.query});let a={view:t,attrs:n,context:o};return eo.set(e,a),Ir(a,e),{view:t,attrs:n,context:o,unmount:()=>eo.delete(e)}}function Fi(e){C.history.scrollRestoration="manual";let t=""in(history.state?.sinscroll||pt);t&&Ve($.documentElement,history.state.sinscroll[""]);let n=e[_t]={depth:0,callbacks:[],done:d=>n.depth!==-1&&(n.depth+=d)||(n.depth=0,a())},o;setTimeout(()=>{$.addEventListener("scroll",r,{passive:!0,capture:!0}),$.addEventListener("resize",r,{passive:!0,capture:!0}),t&&n.depth===0&&(n.depth=-1,Mt($.documentElement,0,0))},200);function r(d){clearTimeout(o),o=setTimeout(Ni,100,d)}function a(){n.callbacks.forEach(d=>d()),Mt($.documentElement,0,0)}}function Ni(e){let t=history.state?.sinscroll||{};e.type==="scroll"?Object.keys(t).forEach(o=>n(o?$.getElementById(o):$)):e.target===$?n($):e.target.id&&n(e.target);function n(o){o&&(t[o===$?"":o.id]=[o.scrollLeft,o.scrollTop,o.scrollWidth,o.scrollHeight],i.route.state({sinscroll:t}))}}function Ar(e){if(Array.isArray(e))return e.forEach(Ar);let t=$.createElement(Pn(e.tag));for(let n in e.attrs)t.setAttribute(n,e.attrs[n]);e.children.length&&(t.innerHTML=e.children[0]),$.head.appendChild(t)}function Gi(e,t,n){if(e){if(e.nodeType===8&&e.data==="h")e.remove(),t.hydrating=!0;else if(e.nodeType===1&&e.tagName==="SCRIPT"&&e.hasAttribute("h")){t.hydrating=!0;let d=JSON.parse(e.textContent);Object.assign(t,d.context),Object.assign(n,d.attrs)}}if(!t.hydrating)return;let o,r=[],a=$.createTreeWalker($.body,NodeFilter.SHOW_COMMENT);for(;o=a.nextNode();)o.data===","&&r.push(o);r.forEach(d=>d.remove())}function Xt(){return Yt||(xr=C.requestAnimationFrame(Dr),Yt=i.is.server?An:new Promise(e=>Jt=e)),Yt}function Vi(){return new Promise(e=>{let t=Jt;Jt=t?()=>(e(),t()):e,C.cancelAnimationFrame(xr),Dr()})}function Dr(){Yt=null,eo.forEach(Ir),Jt()}function Ir(e,t){lo();try{e.doms=kt(t,qt(e.view(e.attrs)),e.context,e.doms&&Ze(e.doms.dom),e.doms&&e.doms.last)}catch(n){e.attrs.error=n,e.doms=kt(t,qt(e.context.error(n,e.attrs,[],e.context)),e.context,e.doms&&Ze(e.doms.dom),e.doms&&e.doms.last)}finally{po()}}function lo(){i.redrawing=!0}function po(){Pe.forEach(e=>e()),Pe=[],i.redrawing=!1}function kt(e,t,n,o,r=e.lastChild){let a=t[0]&&t[0].key!==void 0&&new Array(t.length),d=F(o,e.firstChild),c=d&&A.call(d,fe),s=F(r,null);a&&(a.rev=new Map)&&c?Hi(e,n,d[fe],t,a,s,d):$r(e,n,t,a,d,s);let l=F(o,e.firstChild);return a&&(l[fe]=a),ke(l,s&&Ze(s)||e.lastChild)}function F(e,t){let n=e?e.nextSibling:t;for(;De.has(n);)n=n.nextSibling;return n}function Ze(e,t){let n=e?e.previousSibling:t;for(;De.has(n);)n=n.previousSibling;return n}function yt(e,t,n,o){e[o]={dom:t,key:n},t[fe]=e,t[Xe]=o,e.rev.set(n,o)}function $r(e,t,n,o,r,a=null){let d=0,c,s;for(;d<n.length;)(r===null||!De.has(r))&&(s=n[d],c=r!==a?xe(r,s,t,e):xe(null,s,t),r===a&&e.insertBefore(c.dom,a),o&&yt(o,c.first,s.key,d),r=c.last,d++),r!==null&&(r=F(r));for(;r&&r!==a;)r=je(r,e)}function Hi(e,t,n,o,r,a,d){let c=n.rev,s=new Set;for(let m of o){if(m&&m.key===void 0)return $r(e,t,o,r,d,a);m&&s.add(m.key)}let l=n.length-1,p=o.length-1,h=n[l],u=o[p],f=-1;e:for(;;){if(u==null){u=o[--p];continue}for(;h&&!s.has(h.key);)je(h.dom,e),c.delete(h.key),h=n[--l];for(;h&&h.key===u.key;){if(a=xe(h.dom,u,t,e).first,yt(r,a,u.key,p),c.delete(u.key),p===0)break e;if(l===0){u=o[--p];break}h=n[--l],u=o[--p]}if(c.has(u.key)){if(f=c.get(u.key),f>p)f=xe(n[f].dom,u,t,e),Xn(e,f,a),a=f.first,yt(r,a,u.key,p);else if(f!==p)f=xe(n[f].dom,u,t,e),Xn(e,f,a),a=f.first,yt(r,a,u.key,p);else{h=n[--l];continue}if(c.delete(u.key),p===0)break;u=o[--p]}else{if(f=xe(null,u,t),Xn(e,f,a),a=f.first,yt(r,a,u.key,p),p===0)break;u=o[--p]}}c.forEach(m=>je(n[m].dom,e))}function Xn(e,{first:t,last:n},o){let r=t,a;do a=r,r=F(a);while(e.insertBefore(a,o)!==n)}function xe(e,t,n,o,r,a,d){return oe(t)?Ki(e,t,n,o,r,a):I(t)?xe(e,t(),n,o,r,a,d):t instanceof te?yr(e,t,n,o,r,a):t instanceof Promise?yr(e,i(()=>t)(),n,o,r,a):Array.isArray(t)?Pr(e,t,n,o,a,d):t instanceof Node?Ui(e,t,n):Er(e,t,o,a,void 0,d)}function Ui(e,t,n){return e&&n.hydrating?ke(e):ke(t)}function yr(e,t,n,o,r,a){return t.component?Or(e,t,n,o,r,a):Yi(e,t,n,o,a)}function Ki(e,t,n,o){if(e&&A.call(e,Jn)&&e[Jn].view===t)return a(t());let r=a(t());return Ct(e,t,a),r;function a(d){let c=i.redrawing,s=Pe;Pe=[],lo();let l=xe(e,d,n,o||e&&e.parentNode);return po(),i.redrawing=c,Pe=s,e!==l.first&&Ct(l.first,t,a),e=l.first,l.first[Jn]={view:t,doms:l},l}}function ke(e,t=e,n=t){return{dom:e,first:t,last:n}}function Wi(e){if(!e||e.nodeType!==8||e.data.charCodeAt(0)!==91)return;let t=parseInt(e.data.slice(1)),n=e,o;for(;t&&(n=F(n));)n.nodeType===8?(o=n.data.charCodeAt(0),t+=o===91?parseInt(n.data.slice(1))-1:o===97?1:-1):t--;return Zt(e,n),n}function Zt(e,t){(t||e)[ro]=e,e[oo]=t}function zr(e){return e&&A.call(e,oo)?e[oo]:Wi(e)}function Pr(e,t,n,o,r,a){r&&e&&o&&(e=Pr(e,[],n,o).first);let d=zr(e)||e,c=Er(e,"["+t.length,o,!1,8,a);if(e!==c.dom&&(d=c.last),o){let s=F(d,null);kt(o,t,n,c.first,d);let l=Ze(s,o.lastChild);return d!==l&&Zt(c.first,l),ke(c.dom,c.first,l)}return o=new DocumentFragment,o.appendChild(c.dom),kt(o,t,n,c.first,d),Zt(c.first,o.lastChild),ke(o,c.first,o.lastChild)}function Er(e,t,n,o,r=Rt(t)?8:3,a=!1){let d=o||!e||e.nodeType!==r;return e&&A.call(e,he)&&e[he]!==a&&en(e),d&&Mr(e,e=r===8?$.createComment(t):$.createTextNode(t),n),!d&&e.data!==""+t&&(e.data=t),ke(e)}function Yi(e,t,n,o,r){let a=n.NS,d=Pn(t.tag),c=r===!0||e===null||Ji(e,t,n,d);(t.attrs.xmlns||fr[d])&&(n.NS=t.attrs.xmlns||fr[d]),c&&Mr(e,e=Xi(t,n,d),o),d==="foreignObject"&&(n.NS="http://www.w3.org/1999/xhtml");let s=t.children&&t.children.length;return ea(e,t,n,d),s?kt(e,t.children,n):e[gr]&&_i(e.firstChild,e),e[gr]=s,n.NS=a,A.call(t,"key")&&(e[wr]=t.key),ke(e)}function _i(e,t){for(;e;)e=je(e,t)}function Ji(e,t,n,o){return e[wr]!==t.key&&!n.hydrating||(n.NS?e.nodeName!==o:e.nodeName.toLowerCase()!==(o.toLowerCase()||"div"))}function Xi(e,t,n){let o=e.attrs.is;return t.NS&&t.NS!=="http://www.w3.org/1999/xhtml"?o?$.createElementNS(t.NS,n,{is:o}):$.createElementNS(t.NS,n):o?$.createElement(n||"div",{is:o}):$.createElement(n||"div")}var ao=class{constructor(t,n,o,r,a,d,c,s){this.init=t,this.key=void 0,this.view=n,this.error=o,this.caught=void 0,this.loading=r,this.context=a,this.hydrating=d,this.onremoves=void 0,this.promise=void 0,this.stateful=void 0,this.next=void 0,this.ignore=!1,this.recreate=!1,this.attrs=tn(c),this.children=tn(s)}},co=class{constructor(){this.xs=[],this.i=0,this.top=0,this.bottom=0,this.dom=null}changed(t,n){if(this.i>=this.xs.length)return!0;let o=this.xs[this.i],r=o.key!==t.key&&!n.hydrating||o.init&&o.init!==t.component[0];return r&&o.onremoves&&o.onremoves.forEach(a=>a()),r}add(t,n,o){let r=this.i,[a,d]=t.component;o&&this.xs[this.i]&&(t.attrs=this.xs[this.i].attrs,t.children=this.xs[this.i].children);let c=new ao(t.inline?!1:a,a,d&&d.error||n.error,d&&d.loading||n.loading,d&&d.context||n.context,n.hydrating,t.attrs,t.children),s=(f,m,g)=>{if(this.xs.indexOf(c)===-1)return;lo(),f instanceof Event&&(f.redraw=!1);let b=this.dom.first[fe],y=this.dom.first[Xe];this.i=this.bottom=r,Or(this.dom.first,t,n,this.dom.first.parentNode,this,m,g,!0),A.call(this.dom.first,fe)||(this.dom.first[fe]=b,this.dom.first[Xe]=y),b&&(b[y].dom=this.dom.first),this.i=this.bottom=0,po()},l=i.event(f=>i.redrawing?requestAnimationFrame(l):s(f,!1,!1)),p=i.event(f=>{c.onremoves&&(c.onremoves.forEach(m=>m()),c.onremoves=void 0),s(f,!0)}),h=i.event(f=>{c.onremoves&&(c.onremoves.forEach(m=>m()),c.onremoves=void 0),s(f,!0,!0),c=this.xs[r]});c.context=Object.create(c.context||n,{hydrating:{value:n.hydrating,writable:!0},onremove:{value:f=>{Kt(c,f)}},ignore:{value:f=>{c.ignore=f}},refresh:{value:h},redraw:{value:l},reload:{value:p}}),c.attrs[Be]=t.attrs,c.children[Be]=t.children;let u=Rr(!0,c,t,c.attrs,c.children);return oe(t.attrs.reload)&&Kt(c,t.attrs.reload.observe(p)),oe(t.attrs.redraw)&&Kt(c,t.attrs.redraw.observe(l)),oe(t.attrs.refresh)&&Kt(c,t.attrs.refresh.observe(h)),c.promise=u&&I(u.then)&&u,c.stateful=c.promise||I(u)&&!u[Fe],c.view=c.promise?o?this.xs[this.i].view:c.loading:u,o||this.cut(),this.top=this.i,this.xs[this.i++]=c}next(t){let n=this.i<this.xs.length&&this.xs[this.top=this.i++];return n.attrs[Be]=t.attrs,n.children[Be]=t.children,n}pop(){return--this.i!==this.bottom?!1:(this.cut(this.top+1),!0)}cut(t=this.i){for(let n=t;n<this.xs.length;n++)this.xs[n].onremoves&&this.xs[n].onremoves.forEach(o=>o());this.xs.length=t}};function Kt(e,t){e.onremoves?e.onremoves.add(t):e.onremoves=new Set([t])}function Zi(e){let t="/"+e.data,n=F(e);for(;n&&(n.nodeType!==8||n.data!==t);)n=F(n);let o=ke(F(e),F(e),Ze(n));if(A.call(n,ro)&&Zt(n[ro],Ze(n)),A.call(e,he)&&(o.first[he]=e[he]),A.call(e,fe)){let r=e[fe],a=e[Xe];o.first[fe]=r,o.first[Xe]=a,r[e[Xe]].dom=o.first}return e.remove(),n.remove(),o}function Qi(e){let t="/"+e.data,n=F(e);for(;n&&(n.nodeType!==8||n.data!==t);)n=F(n);return ke(e,e,n)}function Or(e,t,n,o,r=e&&e[he]||new co,a=r.changed(t,n),d=!1,c=!1){let s=a?r.add(t,n,d):r.next(t);if(!a&&s.ignore&&!c)return r.pop(),r.dom;t.key!==void 0&&(a||n.hydrating)&&(s.key=t.key);let l=s.promise&&e&&e.nodeType===8&&e.data.charCodeAt(0)===97;if(l)s.next=Qi(e);else{let h=Rr(a,s,d?s.view:t,s.attrs,s.children);h&&A.call(h,Fe)&&(h=h(t.attrs,t.children,s.context)),s.next=xe(e,!s.caught&&!s.promise&&h instanceof te||d?Ho(h,t):h,s.context,o,r,(a||s.recreate)&&!s.hydrating&&!d?!0:void 0,r),s.hydrating&&(s.hydrating=s.context.hydrating=!1),s.recreate&&(s.recreate=!1)}if(a&&s.promise){let h=r.i-1;n[_t].done(1),s.promise.then(u=>s.view=u&&A.call(u,"default")?u.default:u).catch(u=>{s.caught=u,s.view=qr(s,t,u)}).then(()=>A.call(s.next.first,he)&&r.xs[h]===s&&(l&&(r.dom=Zi(e)),n.hydrating=!1,s.recreate=!d,s.promise=!1,s.context.redraw(),n[_t].done(-1)))}let p=e!==s.next.first;return r.pop()&&(p||a)&&(r.dom=s.next,s.next.first[he]=r),s.next}function Rr(e,t,n,o,r){try{return t.stateful||e?I(t.view)&&!t.view[Fe]?t.view(o,r,t.context):t.view:n.component[0](o,r,t.context)}catch(a){return qr(t,n,a)}}function qr(e,t,n){return A.call(e.error,Fe)?e.error().component[0](n,t.attrs,t.children,e.context):e.error(n,t.attrs,t.children,e.context)}function ea(e,t,n,o){let r=t.tag,a,d=e[xt]||n.hydrating&&ta(e)||void 0,c=!d;if(c&&A.call(t.attrs,"id")===!1){let l=Go(t.tag);l&&(e.id=l)}Zn(e,t),c&&Ct(e,t.attrs.class,()=>Zn(e,t)),c&&Ct(e,t.attrs.className,()=>Zn(e,t)),t.attrs.type!=null&&Qt(e,"type",t.attrs.type);for(let l in t.attrs)zn(l)?l==="deferrable"&&(e[to]=t.attrs[l]):(!d||d[l]!==t.attrs[l])&&Me(e,t.attrs,l,d&&d[l],t.attrs[l],c,n);if(A.call(t.attrs,"value"))if(!d&&o==="input"&&e.value!==""+t.attrs.value){let l,p;e===$.activeElement&&(l=e.selectionStart,p=e.selectionEnd),Me(e,t.attrs,"value",e.value,t.attrs.value,c,n),e===$.activeElement&&(e.selectionStart!==l||e.selectionEnd!==p)&&e.setSelectionRange(l,p)}else(!d||d.value!==t.attrs.value)&&Me(e,t.attrs,"value",d&&d.value,t.attrs.value,c,n);if(o==="option"&&!c&&A.call(t.attrs,"selected")&&e.selected!==t.attrs.selected&&Me(e,t.attrs,"selected",e.selected,t.attrs.selected,c,n),A.call(t.attrs,"srcset")&&d?.srcset!==t.attrs.srcset&&Me(e,t.attrs,"srcset",d?.srcset,t.attrs.srcset,c,n),A.call(t.attrs,"src")&&d?.src!==t.attrs.src&&Me(e,t.attrs,"src",d?.src,t.attrs.src,c,n),A.call(t.attrs,"href")&&(n.hydrating||!d||d.href!==t.attrs.href)){a=t.attrs.href;let l=!String(a).match(/^([a-z]+:|\/\/)/)&&!t.attrs.target&&!t.attrs.download;l&&(a=ut(t.attrs.href)),Me(e,t.attrs,"href",d&&d.href,a,c,n),a&&l&&(t.attrs.href=i.route.prefix+a,Li(e,t.attrs,n.route))}if(d)for(let l in d)A.call(t.attrs,l)===!1&&(Dn(l)?Lr(e,l):zn(l)?l==="deferrable"&&(e[to]=!1):e.removeAttribute(l));oa(e,t.attrs.data,d&&d.data);let s=na(e,t.attrs.style,d&&d.style);if(r)for(vr(e,r.vars,r.args,c||n.hydrating,s);r=r.parent;)vr(e,r.vars,r.args,c||n.hydrating,s);t.attrs.dom&&(c||n.hydrating?ra(e,e[mr]=tn(t.attrs),e[br]=tn(t.children),n,t.attrs.dom):(e[mr][Be]=t.attrs,e[br][Be]=t.children)),e[xt]=t.attrs,c&&e.id&&e.id in(history.state?.sinscroll||pt)&&Pe.push(()=>Ve(e,history.state?.sinscroll?.[e.id],n[_t]))}function ta(e){if(!e||!e.hasAttributes())return;let t={};for(let n of e.attributes)t[n.name]=n.value||!0;return t}function na(e,t,n){if(t==null)return t!==n&&(e.style.cssText="",!0);if(typeof t!="object")return t!==n&&(e.style.cssText=t,!0);if(n==null||typeof n!="object"){e.style.cssText="";for(let o in t){let r=t[o];r!=null&&e.style.setProperty(Lt(o),r+"")}return!0}for(let o in t){let r=t[o];r!=null&&(!n||(r=r+"")!=n[o]+"")&&e.style.setProperty(Lt(o),r)}for(let o in n)n[o]!=null&&t[o]==null&&e.style.removeProperty(Lt(o));return!0}function oa(e,t,n){for(let o in t){let r=t[o];r!=null&&(!n||(r=r+"")!=n[o]+"")&&(e.dataset[o]=r)}for(let o in n)n[o]!=null&&t[o]==null&&delete e.dataset[o]}function Ct(e,t,n){if(!oe(t))return;let o=A.call(e,vt),r=o?e[vt]:new Set;o||(e[vt]=r),r.add(t.observe(n))}function Zn(e,t){let n=Vo(t),o=A.call(e,_n)&&e[_n]||"";if(n!==o){e[_n]=n;for(let r of o&&o.split(" "))r&&e.classList.remove(r);for(let r of n&&n.split(" "))r&&e.classList.add(r)}}function vr(e,t,n,o,r){for(let a in t){let d=t[a],c=n[d.index];so(e,a,c,d,o,r)}}function so(e,t,n,o,r,a,d){if(oe(n)){r&&n.observe(c=>Qn(e,t,c,o)),(r||a)&&so(e,t,n(),o,r,r);return}if(I(n))return An.then(()=>so(e,t,n(e),o,r,a,d));Qn(e,t,n,o),d&&Pe.push(()=>Qn(e,t,n,o))}function Qn(e,t,n,o){A.call(o,"property")?e.style.setProperty(t,ur(n,o)):n?e.setAttribute(t,""):e.removeAttribute(t)}function ra(e,t,n,o,r){Pe.push(()=>{qt(r).forEach(async a=>{let d=I(a)&&a(e,t,n,o);d&&I(d.then)&&(d=await d,Xt()),I(d)&&(A.call(e,wt)?e[wt].push(d):e[wt]=[d])},[])})}function Me(e,t,n,o,r,a,d){if(o===r)return;let c=Dn(n);c&&typeof o==typeof r||(c?r?ia(e,t,n,d):Lr(e,n):(Qt(e,n,r),a&&Ct(e,r,s=>Qt(e,n,s))))}function Qt(e,t,n){if(n==null&&(n=""),I(n))return Qt(e,t,n());da(e,t)?e[t]=n:!n&&n!==0?e.removeAttribute(t):e.setAttribute(t,n===!0?"":n)}function da(e,t){return!(e instanceof SVGElement)&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="width"&&t!=="height"&&t in e}function Lr(e,t){e.removeEventListener(t.slice(2),e[no])}function ia(e,t,n,o){e.addEventListener(n.slice(2),e[no]||(e[no]=aa(e,t,o)))}function aa(e,...t){return{handleEvent:n=>uo(e[xt]["on"+n.type],n,e,...t)}}function uo(e,t,...n){if(Array.isArray(e))return e.forEach(r=>uo(r,t,...n));let o=I(e)?e.call(t.currentTarget,t,...n):I(e.handleEvent)&&e.handleEvent(t,...n);if(t.redraw===!1){delete t.redraw;return}!oe(o)&&!oe(e)&&Xt(),o&&I(o.then)&&o.then(Xt)}function Mr(e,t,n){if(n)return e&&(n.insertBefore(t,e),je(e,n)),t}function ca(e,t,n,o,r){let a=zr(e);if(!a||e===a)return F(e);let d=F(a);if(e=F(e),!e)return d;do e=je(e,t,n,o,r);while(e&&e!==d);return d}function Wt(e,t){en(t),e.removeChild(t)}function en(e){A.call(e,he)&&e[he].cut(),A.call(e,vt)&&e[vt].forEach(t=>t())}function je(e,t,n=!0,o=[],r=!1){let a=e.nextSibling;if(De.has(e))return a;if(e.nodeType===8)if(e.data.charCodeAt(0)===97){if(a=F(e),Wt(t,e),!a)return a;e=a,a=F(e)}else e.data.charCodeAt(0)===91&&(a=ca(e,t,n,o,r));if(e.nodeType!==1)return n?Wt(t,e):en(e),a;if(A.call(e,wt))for(let c of e[wt])try{let s=c(r||n);(r||n)&&s&&I(s.then)&&o.push(s)}catch(s){console.error(s)}!r&&(r=e[to]||!1);let d=e.firstChild;for(;d;)je(d,e,!1,o,r),d=F(d);return n?o.length===0?Wt(t,e):(De.add(e),Promise.all(o.map(c=>c.catch(console.error))).then(()=>Wt(t,e))):en(e),a}function sa(e=[],...t){return i.css`
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
  `,i.css(e,...t)}function tn(e){return new Proxy(e,{get:(t,n)=>e[n],set:(t,n,o)=>n===Be&&e!==o?e=o:!0})}var Ee=Symbol("sinewy-menu");var Vr=Symbol("dropdown-indicator"),Hr=Symbol("dropdown-radio-group"),Br=Symbol("sinewy-ids"),Ur="--sinewy-dropdown-fit-block",Kr="--sinewy-dropdown-fit-inline",la=['[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]'].join(",");i.css([`
  @position-try ${Ur} {
    align-self: stretch;
    height: stretch;
  }

  @position-try ${Kr} {
    justify-self: stretch;
    width: stretch;
  }
`]);var J=i(({id:e,defaultOpen:t=!1},[],n)=>{let o=e||Qr(n),r=an(t,n),a={name:"Dropdown",prefix:"dropdown",id:o,triggerId:o+"-trigger",contentId:o+"-content",anchorName:ed(o),trigger:void 0,content:void 0,open:!1,renderOpen:t,openState:r,openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!0,dir:"ltr",openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,pointerGrace:void 0,onbeforeopenchange:void 0,onopenchange:void 0},d=Object.create(n);return d[Ee]=a,a.root=a,n.onremove(()=>{clearTimeout(a.searchTimer),cancelAnimationFrame(a.reconcileFrame)}),({loop:c=!0,dir:s="ltr",open:l,bind:p,onbeforeopenchange:h,onopenchange:u},f,m)=>(a.loop=c,a.dir=s,a.controlledOpen=l,a.openBind=p,a.onbeforeopenchange=h,a.onopenchange=u,cn(r,p,m),a.renderOpen=Qe(a),rn(a),i({context:d},()=>f))});J.Trigger=i(({as:e,disabled:t=!1,dom:n,onclick:o,onkeydown:r,...a},d,c)=>{let s=Ce(c,"trigger");return td(e,"button",{...a,id:s.triggerId,type:e?a.type:a.type||"button",disabled:t,popovertarget:s.contentId,popovertargetaction:"toggle","aria-haspopup":"menu","aria-controls":s.contentId,"aria-expanded":String(s.renderOpen),"aria-disabled":String(t),style:{"anchor-name":s.anchorName,...a.style},data:{...a.data,disabled:t?"":null,state:s.renderOpen?"open":"closed"},dom:vo([l=>fo(s,"trigger",l),...pn(n)]),onclick:(l,p,h,u)=>{if(t){l.preventDefault();return}let f="popoverTargetElement"in p;if(_(o,l,p,h,u),l.defaultPrevented||f){f&&!o&&(l.redraw=!1);return}l.preventDefault(),s.content.matches(":popover-open")?Oe(s):s.content.showPopover({source:p})},onkeydown:(l,p,h,u)=>{if(t){l.preventDefault();return}_(r,l,p,h,u),!(l.defaultPrevented||!["Enter"," ","ArrowDown","ArrowUp"].includes(l.key))&&(l.preventDefault(),s.openFocus=l.key==="ArrowUp"?"last":"first",s.content.matches(":popover-open")?dn(s,s.openFocus):s.content.showPopover())}},d)});J.Content=i(({},[],e)=>{let t=Ce(e,"content");return(n,o,r)=>Wr(t,n,o,r)});J.Item=i(({},[],e)=>{let t=Ce(e,"item");return(n,o,r)=>on(t,n,o,r)});J.Checkbox=i(({defaultChecked:e=!1},[],t)=>{let n=Ce(t,"checkbox"),o=an(e,t),r=i.live(Fr(e));return({checked:a,defaultChecked:d,bind:c,oncheckedchange:s,...l},p,h)=>{cn(o,c,h);let u=Fr(bo(o,c,a));r(u);let f=Xr(h,r);return on(n,{...l,role:"menuitemcheckbox","aria-checked":u==="indeterminate"?"mixed":String(u),data:{...l.data,state:yo(u)},onactivate:m=>{let g=u==="indeterminate"||!u;Jr(o,c,a,g,h),s&&s(g,m)}},i({context:f},()=>p),h)}});J.RadioGroup=i(({defaultValue:e},[],t)=>{Ce(t,"radioGroup");let n=an(e,t),o={},r=Object.create(t);return r[Hr]=o,({value:a,defaultValue:d,bind:c,onvaluechange:s,ariaLabel:l,...p},h,u)=>(cn(n,c,u),Object.assign(o,{local:n,bind:c,controlled:a,onvaluechange:s,context:u}),i`div`({...p,role:"group","aria-label":p["aria-label"]||l},i({context:r},()=>h)))});J.Radio=i(({},[],e)=>{let t=Ce(e,"radio"),n=e[Hr],o=i.live(!1);if(!n)throw new Error(t.name+".Radio must be used inside "+t.name+".RadioGroup");return({value:r,...a},d,c)=>{let l=bo(n.local,n.bind,n.controlled)===r;o(l);let p=Xr(c,o);return on(t,{...a,role:"menuitemradio","aria-checked":String(l),data:{...a.data,state:yo(l)},onactivate:h=>{l||(Jr(n.local,n.bind,n.controlled,r,n.context),n.onvaluechange&&n.onvaluechange(r,h))}},i({context:p},()=>d),c)}});J.Sub=i(({id:e,defaultOpen:t=!1},[],n)=>{let o=Ce(n,"sub"),r=e||Qr(n,o.prefix),a=an(t,n),d={name:o.name,prefix:o.prefix,id:r,triggerId:r+"-trigger",contentId:r+"-content",anchorName:ed(r),trigger:void 0,content:void 0,open:!1,renderOpen:t,openState:a,openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!0,dir:o.dir,openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,openTimer:void 0,closeTimer:void 0,pointerGrace:void 0,openDelay:100,closeDelay:300,onbeforeopenchange:void 0,onopenchange:void 0,parent:o,root:o.root},c=Object.create(n);return c[Ee]=d,n.onremove(()=>{clearTimeout(d.searchTimer),clearTimeout(d.openTimer),clearTimeout(d.closeTimer),cancelAnimationFrame(d.reconcileFrame)}),({loop:s=!0,dir:l=o.dir,open:p,bind:h,onbeforeopenchange:u,onopenchange:f,openDelay:m=100,closeDelay:g=300},b,y)=>(d.loop=s,d.dir=l,d.openDelay=m,d.closeDelay=g,d.controlledOpen=p,d.openBind=h,d.onbeforeopenchange=u,d.onopenchange=f,cn(a,h,y),d.renderOpen=Qe(d),rn(d),i({context:c},()=>b))});J.SubTrigger=i(({as:e,disabled:t=!1,dom:n,onclick:o,onkeydown:r,onpointermove:a,onpointerleave:d,...c},s,l)=>{let p=Ce(l,"subtrigger");return on(p.parent,{...c,as:e,disabled:t,id:p.triggerId,style:{"anchor-name":p.anchorName,...c.style},dom:vo([h=>fo(p,"trigger",h),...pn(n)]),popovertarget:p.contentId,popovertargetaction:"toggle","aria-haspopup":"menu","aria-controls":p.contentId,"aria-expanded":String(p.renderOpen),data:{...c.data,state:p.renderOpen?"open":"closed"},onclick:(h,u,f,m)=>{Nr(p);let g="popoverTargetElement"in u;if(_(o,h,u,f,m),h.defaultPrevented||t||g){g&&!o&&(h.redraw=!1);return}h.preventDefault(),p.content.matches(":popover-open")?Oe(p):p.content.showPopover({source:u})},onkeydown:(h,u,f,m)=>{Nr(p),_(r,h,u,f,m),!(h.defaultPrevented||t||h.key!==wa(p))&&(h.preventDefault(),p.openFocus="first",p.content.matches(":popover-open")?dn(p,"first"):p.content.showPopover())},onpointermove:(h,u,f,m)=>{_(a,h,u,f,m),!(h.defaultPrevented||t||p.open||p.openTimer)&&(clearTimeout(p.closeTimer),p.openTimer=setTimeout(()=>{p.openTimer=void 0,p.content.matches(":popover-open")||(p.openFocus="none",p.content.showPopover({source:u}))},p.openDelay))},onpointerleave:(h,u,f,m)=>{_(d,h,u,f,m),h.defaultPrevented||(ga(p,h),Zr(p))},closeOnSelect:!1,invokeSelect:!1},s,l)});J.SubContent=i(({},[],e)=>{let t=Ce(e,"subcontent");if(!t.parent)throw new Error(t.name+".SubContent must be used inside "+t.name+".Sub");return({onpointerenter:n,onpointerleave:o,...r},a,d)=>Wr(t,{...r,onpointerenter:(c,s,l,p)=>{clearTimeout(t.closeTimer),t.closeTimer=void 0,ln(t.parent,t),_(n,c,s,l,p)},onpointerleave:(c,s,l,p)=>{_(o,c,s,l,p),c.defaultPrevented||Zr(t)}},a,d)});J.Indicator=i(({},[],e)=>{let t=e[Ee],n=e[Vr];if(!n)throw new Error((t?t.name:"Dropdown")+".Indicator must be used inside a Checkbox or Radio");let o=n.selection.observe(e.redraw);return e.onremove(o),({forceMount:r=!1,...a},d)=>{let c=n.selection();return r||c!==!1?i`span`({...a,"aria-hidden":a["aria-hidden"]==null?"true":a["aria-hidden"],data:{...a.data,state:yo(c)}},d):null}});function on(e,{as:t,disabled:n=!1,dom:o,onclick:r,onfocus:a,onpointermove:d,onselect:c,onactivate:s,closeOnSelect:l=!0,invokeSelect:p=!0,role:h="menuitem",textValue:u,...f},m,g){return td(t,"button",{...f,type:t?f.type:f.type||"button",role:h,tabIndex:-1,"aria-disabled":String(n),data:{...f.data,disabled:n?"":null,textValue:u||null},dom:o,onclick:(b,y,x,w)=>{if(n){b.preventDefault();return}_(r,b,y,x,w),!b.defaultPrevented&&(p&&c&&c(b,y),s&&s(b,y),l&&!b.defaultPrevented&&Oe(e.root))},onfocus:(b,y,x,w)=>{_(a,b,y,x,w),b.defaultPrevented||Yr(e,y)},onpointermove:(b,y,x,w)=>{_(d,b,y,x,w),n||b.defaultPrevented||ma(e,b)||nn(e,y)}},m)}J.Group=i(({ariaLabel:e,...t},n)=>i`div`({...t,role:"group","aria-label":t["aria-label"]||e},n));J.Label=i((e,t)=>i`div`(e,t));J.Separator=i((e,t)=>i`div`({...e,role:"separator"},t));var z=J;function pa(e,t){fo(e,"content",t),rn(e)}function fo(e,t,n){import.meta.dev&&e[t]&&e[t]!==n&&e[t].isConnected&&console.warn(e.name+"."+_r(t)+" should only be rendered once per "+e.name+" state scope"),e[t]=n}function Wr(e,{dom:t,onbeforetoggle:n,ontoggle:o,onkeydown:r,side:a=e.parent?"right":"bottom",align:d="start",offset:c=0,alignOffset:s=0,avoidCollisions:l=!0,collisionStrategy:p="preferred",loop:h=e.loop,...u},f,m){return i`div
    position fixed
    inset auto
    margin 0
  `({...u,id:e.contentId,popover:"auto",role:"menu",dir:u.dir||e.dir,style:{"position-anchor":e.anchorName,...ya(a,d,c,s,l,p,e.dir),...u.style},"aria-labelledby":u["aria-labelledby"]||e.triggerId,data:{...u.data,state:e.renderOpen?"open":"closed",side:a,align:d},dom:vo([g=>pa(e,g),...pn(t)]),onbeforetoggle:e.onbeforeopenchange||n?(g,b,y,x)=>{let w=g.newState==="open";e.onbeforeopenchange&&e.onbeforeopenchange(w,g),_(n,g,b,y,x)}:void 0,ontoggle:(g,b,y,x)=>{let w=g.newState==="open",k=e.reconcileTo===w;if(k&&(e.reconcileTo=void 0),e.open=w,e.renderOpen=Qe(e),e.trigger&&(e.trigger.ariaExpanded=String(w)),e.trigger&&(e.trigger.dataset.state=w?"open":"closed"),b.dataset.state=w?"open":"closed",_(o,g,b,y,x),k||(sn(e.openBind)?e.openBind(w):e.controlledOpen===void 0&&(e.openState.value=w),e.onopenchange&&e.onopenchange(w,g),e.renderOpen=Qe(e),rn(e)),w)jr(e),e.openFocus!=="none"&&dn(e,e.openFocus),e.openFocus="first";else{e.parent&&ln(e.parent,e),jr(e),ha(e);let v=e.restoreFocus;e.restoreFocus=!0,requestAnimationFrame(()=>{v&&!e.open&&(b.contains(document.activeElement)||document.activeElement===document.body)&&e.trigger&&e.trigger.focus()})}},onkeydown:(g,b,y,x)=>{if(_(r,g,b,y,x),!g.defaultPrevented){if(e.parent&&g.key===xa(e)){g.preventDefault(),g.stopPropagation(),Oe(e);return}if(e.parent&&g.key==="Escape"){g.preventDefault(),g.stopPropagation(),Oe(e);return}ua(e,g,h)}}},f)}function Qe(e){return!!bo(e.openState,e.openBind,e.controlledOpen)}function rn(e){if(!e.content)return;let t=Qe(e),n=e.content.matches(":popover-open");t!==n&&(cancelAnimationFrame(e.reconcileFrame),e.reconcileFrame=requestAnimationFrame(()=>{if(!e.content||!e.content.isConnected)return;let o=Qe(e),r=e.content.matches(":popover-open");o!==r&&(e.reconcileTo=o,o?e.content.showPopover():e.content.hidePopover())}))}function ua(e,t,n){let o=go(e),r=o.indexOf(document.activeElement);if(t.key==="Tab"){e.root.restoreFocus=!1,Oe(e.root,!1);return}if(t.key==="Escape"){t.preventDefault(),Oe(e);return}if(t.key==="Enter"||t.key===" "){if(r===-1)return;t.preventDefault(),o[r].click();return}if(t.key==="ArrowDown"||t.key==="ArrowUp"){if(t.preventDefault(),!o.length)return;let l=t.key==="ArrowDown"?1:-1,p=r===-1?l===1?0:o.length-1:r+l;n?p=(p+o.length)%o.length:p=Math.max(0,Math.min(o.length-1,p)),nn(e,o[p]);return}if(t.key==="Home"||t.key==="End"){t.preventDefault(),dn(e,t.key==="Home"?"first":"last");return}if(t.key.length!==1||t.key===" "||t.metaKey||t.ctrlKey||t.altKey)return;t.preventDefault(),clearTimeout(e.searchTimer),e.search+=t.key.toLocaleLowerCase(),e.searchTimer=setTimeout(()=>e.search="",500);let d=Array.from(e.search).every(l=>l===e.search[0])?e.search[0]:e.search,s=o.slice(r+1).concat(o.slice(0,r+1)).find(l=>fa(l).startsWith(d));s&&nn(e,s)}function Oe(e,t=!0){e.restoreFocus=t,e.parent&&ln(e.parent,e),e.content.matches(":popover-open")&&e.content.hidePopover()}function go(e){return mo(e).filter(t=>t.getAttribute("aria-disabled")!=="true")}function mo(e){return e.content?Array.from(e.content.querySelectorAll(la)).filter(t=>t.closest('[role="menu"]')===e.content):[]}function dn(e,t){let n=go(e);nn(e,t==="last"?n.at(-1):n[0])}function nn(e,t){t&&(go(e).forEach(n=>n.tabIndex=n===t?0:-1),Yr(e,t),t.focus({preventScroll:!0}))}function Yr(e,t){mo(e).forEach(n=>{n.toggleAttribute("data-highlighted",n===t)}),e.activeItem=t}function ha(e){mo(e).forEach(t=>t.removeAttribute("data-highlighted")),e.activeItem=void 0}function jr(e){clearTimeout(e.searchTimer),e.search=""}function fa(e){return(e.dataset.textValue||e.textContent).trim().toLocaleLowerCase()}function _r(e){return{trigger:"Trigger",content:"Content",item:"Item",checkbox:"Checkbox",radioGroup:"RadioGroup",radio:"Radio",indicator:"Indicator",group:"Group",label:"Label",separator:"Separator",sub:"Sub",subtrigger:"SubTrigger",subcontent:"SubContent"}[e]||e}function Ce(e,t){let n=e[Ee];if(!n)throw new Error(_r(t)+" must be used inside a menu root");return n}function an(e,t){let n={value:e,binding:void 0,unobserve:void 0};return t.onremove(()=>n.unobserve&&n.unobserve()),n}function cn(e,t,n){e.binding!==t&&(e.unobserve&&e.unobserve(),e.binding=t,e.unobserve=sn(t)?t.observe(n.redraw):void 0)}function bo(e,t,n){return sn(t)?t():n===void 0?e.value:n}function Jr(e,t,n,o,r){sn(t)?t(o):n===void 0&&(e.value=o,r.redraw())}function Xr(e,t){let n=Object.create(e);return n[Vr]={selection:t},n}function Fr(e){return e==="indeterminate"?e:!!e}function yo(e){return e==="indeterminate"?e:e?"checked":"unchecked"}function sn(e){return typeof e=="function"&&typeof e.observe=="function"}function Zr(e){clearTimeout(e.openTimer),clearTimeout(e.closeTimer),e.openTimer=void 0,e.closeTimer=setTimeout(()=>{e.closeTimer=void 0,e.content.matches(":popover-open")&&Oe(e)},e.closeDelay)}function Nr(e){clearTimeout(e.openTimer),clearTimeout(e.closeTimer),e.openTimer=e.closeTimer=void 0,ln(e.parent,e)}function ga(e,t){if(!e.parent||!e.content||!e.content.matches(":popover-open"))return;let n=e.content.getBoundingClientRect(),o={x:t.clientX,y:t.clientY},r=5,d=[{distance:Math.abs(o.x-n.left),points:[{x:n.left,y:n.top-r},{x:n.left,y:n.bottom+r}]},{distance:Math.abs(o.x-n.right),points:[{x:n.right,y:n.top-r},{x:n.right,y:n.bottom+r}]},{distance:Math.abs(o.y-n.top),points:[{x:n.left-r,y:n.top},{x:n.right+r,y:n.top}]},{distance:Math.abs(o.y-n.bottom),points:[{x:n.left-r,y:n.bottom},{x:n.right+r,y:n.bottom}]}].sort((c,s)=>c.distance-s.distance)[0];e.parent.pointerGrace={owner:e,triangle:[o,...d.points]}}function ma(e,t){let n=e.pointerGrace;if(!n)return!1;if(!n.owner.content||!n.owner.content.matches(":popover-open"))return e.pointerGrace=void 0,!1;let o=ba({x:t.clientX,y:t.clientY},...n.triangle);return o||(e.pointerGrace=void 0),o}function ln(e,t){e&&(!t||e.pointerGrace&&e.pointerGrace.owner===t)&&(e.pointerGrace=void 0)}function ba(e,t,n,o){let r=ho(e,t,n),a=ho(e,n,o),d=ho(e,o,t),c=r<0||a<0||d<0,s=r>0||a>0||d>0;return!(c&&s)}function ho(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function ya(e,t,n,o,r,a,d){let c=e==="top"||e==="bottom",s={top:"block-start",right:"inline-end",bottom:"block-end",left:"inline-start"}[e]||"block-end",l=t==="center"?"":" span-"+(c?"inline-":"block-")+(t==="end"?"start":"end"),p={top:"margin-block-end",right:"margin-inline-start",bottom:"margin-block-start",left:"margin-inline-end"}[e]||"margin-block-start",h=c?"margin-inline-start":"margin-block-start",u=c?Ur:Kr,f=["flip-block","flip-inline","flip-block flip-inline",u,u+" flip-block",u+" flip-inline",u+" flip-block flip-inline"].join(", ");return{"position-area":s+l,"position-try-fallbacks":r?f:"none","position-try-order":r&&a==="most-space"?c?"most-block-size":"most-inline-size":"normal",[p]:Gr(n),[h]:Gr(o),"--sinewy-trigger-width":"anchor-size(width)","--sinewy-trigger-height":"anchor-size(height)","--sinewy-transform-origin":va(e,t,d)}}function va(e,t,n){let a=t==="center"?"center":t==="end"?n==="rtl"?"left":"right":n==="rtl"?"right":"left",d=t==="center"?"center":t==="end"?"bottom":"top";return e==="top"?a+" bottom":e==="bottom"?a+" top":e==="left"?"right "+d:"left "+d}function Gr(e){return typeof e=="number"?e+"px":e}function wa(e){return e.dir==="rtl"?"ArrowLeft":"ArrowRight"}function xa(e){return e.dir==="rtl"?"ArrowRight":"ArrowLeft"}function Qr(e,t="dropdown"){let n=e,o;for(;(o=Object.getPrototypeOf(n))&&o!==Object.prototype;)n=o;let r=n[Br]||(n[Br]={value:0});return"sinewy-"+t+"-"+ ++r.value}function ed(e){return"--"+e.replace(/[^a-zA-Z0-9_-]/g,"-")+"-anchor"}function vo(e){return e.filter(Boolean)}function pn(e){return e==null?[]:Array.isArray(e)?e:[e]}function _(e,t,...n){pn(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function td(e,t,n,o){return e?e(n,o):i(t,n,o)}var nd=Symbol("sinewy-context-menu-ids"),ka=700,Ca=['[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]'].join(","),X=i(({id:e},[],t)=>{let n=e||Oa(t),o={name:"ContextMenu",prefix:"context-menu",id:n,triggerId:n+"-trigger",contentId:n+"-content",anchorName:Ra(n),trigger:void 0,content:void 0,anchor:void 0,open:!1,renderOpen:!1,openState:{value:!1},openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!1,dir:"ltr",openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,pointerGrace:void 0,pointerDown:void 0,pointerCleanup:void 0,pendingOpen:void 0,longPressTimer:void 0,onbeforeopenchange:void 0,onopenchange:void 0},r=Object.create(t);return r[Ee]=o,o.root=o,t.onremove(()=>{clearTimeout(o.searchTimer),cancelAnimationFrame(o.reconcileFrame),o.pointerCleanup&&o.pointerCleanup(),o.pendingOpen&&o.pendingOpen(),Ne(o),o.anchor&&o.anchor.remove()}),({loop:a=!1,dir:d="ltr",onbeforeopenchange:c,onopenchange:s},l)=>(o.loop=a,o.dir=d,o.onbeforeopenchange=c,o.onopenchange=s,o.renderOpen=o.openState.value,i({context:r},()=>l))});X.Trigger=i(({as:e,disabled:t=!1,dom:n,oncontextmenu:o,onkeydown:r,...a},d,c)=>{let s=Sa(c,"Trigger");return La(e,"div",{...a,id:s.triggerId,tabIndex:e?a.tabIndex:a.tabIndex==null?0:a.tabIndex,disabled:e&&t||void 0,"aria-haspopup":"menu","aria-controls":s.contentId,"aria-expanded":String(s.renderOpen),"aria-disabled":String(t),style:za(a.style,t),data:{...a.data,disabled:t?"":null,state:s.renderOpen?"open":"closed"},dom:qa([l=>Ta(s,l),...sd(n)]),oncontextmenu:(l,p,h,u)=>{rd(o,l,p,h,u),Ne(s),!(t||l.defaultPrevented||!s.content)&&od(s,l,p,Aa(l,p,s.dir),!0)},onkeydown:(l,p,h,u)=>{rd(r,l,p,h,u),!(!Da(l)||t||l.defaultPrevented||!s.content)&&(Ne(s),od(s,l,p,dd(p,s.dir),!1))}},d)});X.Content=z.Content;X.Item=z.Item;X.Checkbox=z.Checkbox;X.RadioGroup=z.RadioGroup;X.Radio=z.Radio;X.Indicator=z.Indicator;X.Group=z.Group;X.Label=z.Label;X.Separator=z.Separator;X.Sub=z.Sub;X.SubTrigger=z.SubTrigger;X.SubContent=z.SubContent;function Sa(e,t){let n=e[Ee];if(!n||n.name!=="ContextMenu")throw new Error("ContextMenu."+t+" must be used inside ContextMenu");return n}function Ta(e,t){import.meta.dev&&e.trigger&&e.trigger!==t&&e.trigger.isConnected&&console.warn("ContextMenu.Trigger should only be rendered once per ContextMenu state scope"),e.trigger=t;let n=o=>Ia(e,o);return t.addEventListener("pointerdown",n,!0),()=>{t.removeEventListener("pointerdown",n,!0),e.pointerCleanup&&e.pointerCleanup()}}function Aa(e,t,n){return e.clientX!==0||e.clientY!==0||e.button===2||e.pointerType?{x:e.clientX,y:e.clientY}:dd(t,n)}function dd(e,t){let n=e.getBoundingClientRect();return{x:t==="rtl"?n.right:n.left,y:n.bottom}}function Da(e){return e.key==="ContextMenu"||e.key==="F10"&&e.shiftKey}function od(e,t,n,o,r){t.preventDefault(),id(e,n.ownerDocument,o.x,o.y),e.openFocus="first",e.restoreFocus=!0,e.pendingOpen&&e.pendingOpen(),r&&e.pointerDown?cd(e,n,e.pointerDown):ad(e,n)}function id(e,t,n,o){let r=e.anchor||Pa(e,t);r.style.left=n+"px",r.style.top=o+"px"}function ad(e,t){!e.content||!t.isConnected||(e.content.matches(":popover-open")?Ea(e.content):e.content.showPopover({source:t}))}function cd(e,t,n){let o=t.ownerDocument,{button:r,pointerId:a}=n,d,c=()=>{o.removeEventListener("pointerup",p,!0),o.removeEventListener("mouseup",p,!0),o.removeEventListener("pointercancel",h,!0)},s=()=>{c(),cancelAnimationFrame(d),e.pendingOpen===s&&(e.pendingOpen=void 0)},l=u=>a==null||u.pointerId==null||u.pointerId===a,p=u=>{u.button!==r||!l(u)||(e.pointerCleanup&&e.pointerCleanup(),c(),d=requestAnimationFrame(()=>{e.pendingOpen===s&&(e.pendingOpen=void 0),ad(e,t)}))},h=u=>{l(u)&&s()};o.addEventListener("pointerup",p,!0),o.addEventListener("mouseup",p,!0),o.addEventListener("pointercancel",h,!0),e.pendingOpen=s}function Ia(e,t){e.pointerCleanup&&e.pointerCleanup();let n=t.currentTarget.ownerDocument,o=e.pointerDown={button:t.button,pointerId:t.pointerId,pointerType:t.pointerType,x:t.clientX,y:t.clientY},r=o.pointerType&&o.pointerType!=="mouse",a=s=>{s.pointerId===o.pointerId&&(n.removeEventListener("pointerup",a,!0),n.removeEventListener("pointercancel",a,!0),n.removeEventListener("pointermove",d,!0),Ne(e),e.pointerDown===o&&(e.pointerDown=void 0),e.pointerCleanup===c&&(e.pointerCleanup=void 0))},d=s=>{r&&s.pointerId===o.pointerId&&Ne(e)},c=()=>{n.removeEventListener("pointerup",a,!0),n.removeEventListener("pointercancel",a,!0),n.removeEventListener("pointermove",d,!0),Ne(e),e.pointerDown===o&&(e.pointerDown=void 0),e.pointerCleanup===c&&(e.pointerCleanup=void 0)};n.addEventListener("pointerup",a,!0),n.addEventListener("pointercancel",a,!0),n.addEventListener("pointermove",d,!0),e.pointerCleanup=c,r&&t.currentTarget.getAttribute("aria-disabled")!=="true"&&$a(e,t.currentTarget,o)}function $a(e,t,n){Ne(e),e.content&&e.content.matches(":popover-open")&&e.content.hidePopover(),e.longPressTimer=setTimeout(()=>{e.longPressTimer=void 0,!(e.pointerDown!==n||!e.content)&&(id(e,t.ownerDocument,n.x,n.y),e.openFocus="first",e.restoreFocus=!0,e.pendingOpen&&e.pendingOpen(),cd(e,t,n))},ka)}function Ne(e){clearTimeout(e.longPressTimer),e.longPressTimer=void 0}function za(e,t){return t?e:e&&typeof e=="object"?{"-webkit-touch-callout":"none",...e}:"-webkit-touch-callout:none;"+(e||"")}function Pa(e,t){let n=t.createElement("span");return n.setAttribute("aria-hidden","true"),n.setAttribute("data-sinewy-context-anchor",""),n.style.position="fixed",n.style.inset="auto",n.style.width="0",n.style.height="0",n.style.pointerEvents="none",n.style.setProperty("anchor-name",e.anchorName),t.body.insertBefore(n,t.body.firstChild),e.anchor=n,n}function Ea(e){let t=Array.from(e.querySelectorAll(Ca)).find(n=>n.closest('[role="menu"]')===e&&n.getAttribute("aria-disabled")!=="true");t&&t.focus({preventScroll:!0})}function Oa(e){let t=e,n;for(;(n=Object.getPrototypeOf(t))&&n!==Object.prototype;)t=n;let o=t[nd]||(t[nd]={value:0});return"sinewy-context-menu-"+ ++o.value}function Ra(e){return"--"+e.replace(/[^a-zA-Z0-9_-]/g,"-")+"-anchor"}function qa(e){return e.filter(Boolean)}function sd(e){return e==null?[]:Array.isArray(e)?e:[e]}function rd(e,t,...n){sd(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function La(e,t,n,o){return e?e(n,o):i(t,n,o)}var et=X;function Se(e){return e`
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
  `}var ld={gray:["#fcfcfc #111111","#f9f9f9 #191919","#f0f0f0 #222222","#e8e8e8 #2a2a2a","#e0e0e0 #313131","#d9d9d9 #3a3a3a","#cecece #484848","#bbbbbb #606060","#8d8d8d #6e6e6e","#838383 #7b7b7b","#646464 #b4b4b4","#202020 #eeeeee"],indigo:["#fdfdfe #11131f","#f7f9ff #141726","#edf2fe #182449","#e1e9ff #1d2e62","#d2deff #253974","#c1d0ff #304384","#abbdf9 #3a4f97","#8da4ef #435db1","#3e63dd #3e63dd","#3358d4 #5472e4","#3a5bc7 #9eb1ff","#1f2d5c #d6e1ff"],blue:["#fbfdff #0d1520","#f4faff #111927","#e6f4fe #0d2847","#d5efff #003362","#c2e5ff #004074","#acd8fc #104d87","#8ec8f6 #205d9e","#5eb1ef #2870bd","#0090ff #0090ff","#0588f0 #3b9eff","#0d74ce #70b8ff","#113264 #c2e6ff"],cyan:["#fafdfe #0b161a","#f2fafb #101b20","#def7f9 #082c36","#caf1f6 #003848","#b5e9f0 #004558","#9ddde7 #045468","#7dcedc #12677e","#3db9cf #11809c","#00a2c7 #00a2c7","#0797b9 #23afd0","#107d98 #4ccce6","#0d3c48 #b6ecf7"],teal:["#fafefd #0d1514","#f3fbf9 #111c1b","#e0f8f3 #0d2d2a","#ccf3ea #023b37","#b8eae0 #084843","#a1ded2 #145750","#83cdc1 #1c6961","#53b9ab #207e73","#12a594 #12a594","#0d9b8a #0eb39e","#008573 #0bd8b6","#0d3d38 #adf0dd"],green:["#fbfefc #0e1512","#f4fbf6 #121b17","#e6f6eb #132d21","#d6f1df #113b29","#c4e8d1 #174933","#adddc0 #20573e","#8eceaa #28684a","#5bb98b #2f7c57","#30a46c #30a46c","#2b9a66 #33b074","#218358 #3dd68c","#193b2d #b1f1cb"],amber:["#fefdfb #16120c","#fefbe9 #1d180f","#fff7c2 #302008","#ffee9c #3f2700","#fbe577 #4d3000","#f3d673 #5c3d05","#e9c162 #714f19","#e2a336 #8f6424","#ffc53d #ffc53d","#ffba18 #ffd60a","#ab6400 #ffca16","#4f3422 #ffe7b3"],orange:["#fefcfb #17120e","#fff7ed #1e160f","#ffefd6 #331e0b","#ffdfb5 #462100","#ffd19a #562800","#ffc182 #66350c","#f5ae73 #7e451d","#ec9455 #a35829","#f76b15 #f76b15","#ef5f00 #ff801f","#cc4e00 #ffa057","#582d1d #ffe0c2"],red:["#fffcfc #191111","#fff7f7 #201314","#feebec #3b1219","#ffdbdc #500f1c","#ffcdce #611623","#fdbdbe #72232d","#f4a9aa #8c333a","#eb8e90 #b54548","#e5484d #e5484d","#dc3e42 #ec5d5e","#ce2c31 #ff9592","#641723 #ffd1d9"],crimson:["#fffcfd #191114","#fef7f9 #201318","#ffe9f0 #381525","#fedce7 #4d122f","#facedd #5c1839","#f3bed1 #6d2545","#eaacc3 #873356","#e093b2 #b0436e","#e93d82 #e93d82","#df3478 #ee518a","#cb1d63 #ff92ad","#621639 #fdd3e8"],pink:["#fffcfe #191117","#fef7fb #21121d","#fee9f5 #37172f","#fbdcef #4b143d","#f6cee7 #591c47","#efbfdd #692955","#e7acd0 #833869","#dd93c2 #a84885","#d6409f #d6409f","#cf3897 #de51a8","#c2298a #ff8dcc","#651249 #fdd1ea"],purple:["#fefcfe #18111b","#fbf7fe #1e1523","#f7edfe #301c3b","#f2e2fc #3d224e","#ead5f9 #48295c","#e0c4f4 #54346b","#d1afec #664282","#be93e4 #8457aa","#8e4ec6 #8e4ec6","#8347b9 #9a5cd0","#8145b5 #d19dff","#402060 #ecd9fa"]},Ma={accent:"indigo"},Ba={amber:"#21201c"},ja=[1,2,3,4,7,8,9,10,11,12],Sl=Object.freeze(["gray","accent","red","orange","amber","green","teal","cyan","blue","indigo","purple","pink","crimson"]);function R(e,t){let n=Ma[e]||e,o=ld[n];if(!o)return t;let r=Object.fromEntries(ja.map(a=>[`--sinewy-accent-${a}`,pd(o[a-1])]));return r["--sinewy-accent-contrast"]=Ba[n]||"white",r["--sinewy-panel"]="light-dark(#fff, #191919)",[1,2,3,4,6,7,8,9,11,12].forEach(a=>{r[`--sinewy-neutral-${a}`]=pd(ld.gray[a-1])}),r["--sinewy-extreme"]="light-dark(#000, #fff)",{...r,...t}}function pd(e){let[t,n]=e.split(" ");return`light-dark(${t}, ${n})`}function P(e,t){return{...e,...Object.fromEntries(Object.entries(t).map(([n,o])=>[n,o==null?null:typeof o=="boolean"?o?"":null:String(o)]))}}var Fa=Se(i`button`),Na=i(({size:e="2",variant:t="solid",color:n="accent",highContrast:o=!1,type:r="button",data:a,style:d,...c},s)=>Fa({...c,type:r,style:R(n,d),data:P(a,{size:e,variant:t,color:n,highContrast:o})},s));var tt=Na;function Z(e,t){let n={value:e,binding:void 0,unobserve:void 0};return t.onremove(()=>n.unobserve&&n.unobserve()),n}function Q(e,t,n){e.binding!==t&&(e.unobserve&&e.unobserve(),e.binding=t,e.unobserve=wo(t)?t.observe(n.redraw):void 0)}function G(e,t,n){return wo(t)?t():n===void 0?e.value:n}function N(e,t,n,o,r){wo(t)?t(o):n===void 0&&(e.value=o,r.redraw())}function W(e,t,...n){Ga(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function Ga(e){return e==null?[]:Array.isArray(e)?e:[e]}function wo(e){return typeof e=="function"&&typeof e.observe=="function"}var Va=Se(i`button`),Ha=i(({defaultPressed:e=!1},[],t)=>{let n=Z(!!e,t);return({pressed:o,defaultPressed:r,bind:a,onpressedchange:d,onclick:c,disabled:s=!1,size:l="2",variant:p="soft",color:h="accent",highContrast:u=!1,type:f="button",data:m,style:g,...b},y,x)=>{Q(n,a,x);let w=!!G(n,a,o);return Va({...b,type:f,disabled:s,"aria-pressed":String(w),style:R(h,g),data:P(m,{size:l,variant:p,color:h,highContrast:u,state:w?"on":"off"}),onclick:(k,v,E,q)=>{if(W(c,k,v,E,q),k.defaultPrevented||s)return;let K=!w;N(n,a,o,K,x),d&&d(K,k)}},y)}});var St=Ha;var xo=Symbol("sinewy-dialog");var ud=Symbol("sinewy-dialog-ids"),Ua=Se(i`button`),Ka=Se(i`button`),Wa=i`dialog
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
`,Ya=i`h2
  margin 0
  color $sinewy-neutral-12
  font-size 20
  font-weight 780
  line-height 1.2
  letter-spacing -0.02em
`,_a=i`p
  margin 8px 0 0
  color $sinewy-neutral-11
  font-size 14
  line-height 1.55
`,nt=i(({id:e,defaultOpen:t=!1},[],n)=>{let o=e||Ja(n),r=Z(!!t,n),a={id:o,contentId:o+"-content",titleId:o+"-title",descriptionId:o+"-description",content:void 0,trigger:void 0,local:r,bind:void 0,controlled:void 0,renderOpen:!!t,onopenchange:void 0,closing:!1},d=Object.create(n);return d[xo]=a,({open:c,defaultOpen:s,bind:l,onopenchange:p},h,u)=>(a.bind=l,a.controlled=c,a.onopenchange=p,Q(r,l,u),a.renderOpen=!!G(r,l,c),ko(a),i({context:d},()=>h))});nt.Trigger=i(({disabled:e=!1,dom:t,onclick:n,size:o="2",variant:r="solid",color:a="accent",highContrast:d=!1,type:c="button",data:s,style:l,...p},h,u)=>{let f=Tt(u,"Trigger");return Ua({...p,type:c,disabled:e,"aria-haspopup":"dialog","aria-controls":f.contentId,"aria-expanded":String(f.renderOpen),style:R(a,l),data:P(s,{size:o,variant:r,color:a,highContrast:d,state:f.renderOpen?"open":"closed"}),dom:[m=>f.trigger=m,...hd(t)],onclick:(m,g,b,y)=>{W(n,m,g,b,y),!(m.defaultPrevented||e)&&un(f,!0,m,u)}},h)});nt.Content=i(({dom:e,oncancel:t,onclose:n,"aria-label":o,"aria-labelledby":r,"aria-describedby":a,size:d="2",color:c="accent",highContrast:s=!1,data:l,style:p,...h},u,f)=>{let m=Tt(f,"Content");return Wa({...h,id:m.contentId,"aria-label":o,"aria-labelledby":o?r:r||m.titleId,"aria-describedby":a===null?void 0:a||m.descriptionId,style:R(c,p),data:P(l,{size:d,color:c,highContrast:s,state:m.renderOpen?"open":"closed"}),dom:[g=>{m.content=g,queueMicrotask(()=>ko(m))},...hd(e)],oncancel:(g,b,y,x)=>{W(t,g,b,y,x),!g.defaultPrevented&&(g.preventDefault(),un(m,!1,g,f))},onclose:(g,b,y,x)=>{if(W(n,g,b,y,x),m.closing){m.closing=!1;return}m.renderOpen&&un(m,!1,g,f)}},u)});nt.Title=i((e,t,n)=>{let o=Tt(n,"Title");return Ya({...e,id:e.id||o.titleId},t)});nt.Description=i((e,t,n)=>{let o=Tt(n,"Description");return _a({...e,id:e.id||o.descriptionId},t)});nt.Close=i(({disabled:e=!1,onclick:t,size:n="2",variant:o="soft",color:r="gray",highContrast:a=!1,type:d="button",data:c,style:s,...l},p,h)=>{let u=Tt(h,"Close");return Ka({...l,type:d,disabled:e,style:R(r,s),data:P(c,{size:n,variant:o,color:r,highContrast:a}),onclick:(f,m,g,b)=>{W(t,f,m,g,b),!(f.defaultPrevented||e)&&un(u,!1,f,h)}},p)});function un(e,t,n,o){t!==e.renderOpen&&(N(e.local,e.bind,e.controlled,t,o),e.renderOpen=!!G(e.local,e.bind,e.controlled),e.onopenchange&&e.onopenchange(t,n),queueMicrotask(()=>ko(e)))}function ko(e){let t=e.content;!t||!t.isConnected||(e.renderOpen&&!t.open?t.showModal():!e.renderOpen&&t.open&&(e.closing=!0,t.close()))}function Tt(e,t){let n=e[xo];if(!n)throw new Error("Dialog."+t+" must be used inside Dialog");return n}function Ja(e){let t=e,n;for(;(n=Object.getPrototypeOf(t))&&n!==Object.prototype;)t=n;let o=t[ud]||(t[ud]={value:0});return"sinewy-dialog-"+ ++o.value}function hd(e){return e==null?[]:Array.isArray(e)?e:[e]}var U=nt;var ot=i((e,t)=>U(e,...t));ot.Trigger=U.Trigger;ot.Content=i((e,t)=>U.Content({...e,role:"alertdialog"},t));ot.Title=U.Title;ot.Description=U.Description;ot.Close=U.Close;var Te=ot;var Xa=i`input
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
`,Za=i(({defaultChecked:e=!1},[],t)=>{let n=Z(!!e,t),o={local:n,defaultChecked:!!e,bind:void 0,controlled:void 0};return({checked:r,defaultChecked:a,bind:d,oncheckedchange:c,onchange:s,dom:l,disabled:p=!1,size:h="2",color:u="accent",highContrast:f=!1,type:m,role:g,data:b,style:y,...x},[],w)=>{o.bind=d,o.controlled=r,Q(n,d,w);let k=!!G(n,d,r);return Xa({...x,type:"checkbox",role:"switch",checked:k,disabled:p,style:R(u,y),data:P(b,{size:h,color:u,highContrast:f,state:k?"checked":"unchecked"}),dom:[v=>Qa(o,v,w),...ec(l)],onchange:(v,E,q,K)=>{W(s,v,E,q,K);let H=E.checked;N(n,d,r,H,w),c&&c(H,v),r!==void 0&&(E.checked=k)}})}});function Qa(e,t,n){t.defaultChecked=e.defaultChecked;let o=t.form;if(!o)return;let r=()=>queueMicrotask(()=>{let a=t.checked;N(e.local,e.bind,e.controlled,a,n),t.checked=!!G(e.local,e.bind,e.controlled),n.redraw()});return o.addEventListener("reset",r),()=>o.removeEventListener("reset",r)}function ec(e){return e==null?[]:Array.isArray(e)?e:[e]}var At=Za;var fd=Symbol("sinewy-select"),tc=i`select
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
`,nc=i(({value:e="",selected:t,...n},o,r)=>{let a=r[fd],d=String(e);return i`option`({...n,value:d,selected:a?.renderValue===void 0?t:a.renderValue===d},o)}),oc=i`optgroup`,Co=i(({defaultValue:e},[],t)=>{let n=e==null?void 0:String(e),o=Z(n,t),r={local:o,defaultValue:n,bind:void 0,controlled:void 0,renderValue:n},a=Object.create(t);return a[fd]=r,({value:d,defaultValue:c,bind:s,onvaluechange:l,onchange:p,dom:h,multiple:u,disabled:f=!1,size:m="2",color:g="accent",highContrast:b=!1,data:y,style:x,...w},k,v)=>{let E=d==null?void 0:String(d);r.bind=s,r.controlled=E,Q(o,s,v);let q=gd(G(o,s,E));return r.renderValue=q,i({context:a},()=>tc({...w,value:q,disabled:f,style:R(g,x),data:P(y,{size:m,color:g,highContrast:b}),dom:[K=>rc(r,K,v),...dc(h)],onchange:(K,H,qe,ne)=>{W(p,K,H,qe,ne);let ee=H.value;N(o,s,E,ee,v),l&&l(ee,K),E!==void 0&&(H.value=q)}},k))}});Co.Option=nc;Co.Group=oc;function rc(e,t,n){if(e.defaultValue!==void 0)for(let a of t.options)a.defaultSelected=a.value===e.defaultValue;let o=t.form;if(!o)return;let r=()=>queueMicrotask(()=>{let a=t.value;N(e.local,e.bind,e.controlled,a,n);let d=gd(G(e.local,e.bind,e.controlled));d!==void 0&&(t.value=d),n.redraw()});return o.addEventListener("reset",r),()=>o.removeEventListener("reset",r)}function gd(e){return e==null?void 0:String(e)}function dc(e){return e==null?[]:Array.isArray(e)?e:[e]}var Re=Co;var hn=i`fieldset
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
`;var md=Symbol("sinewy-checkbox-group"),ic=i`input
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
`,bd=i(({defaultChecked:e=!1},[],t)=>{let n=Z(!!e,t),o={local:n,defaultChecked:!!e,bind:void 0,controlled:void 0};return({checked:r,defaultChecked:a,bind:d,oncheckedchange:c,onchange:s,dom:l,disabled:p=!1,size:h,color:u,highContrast:f,type:m,role:g,value:b="on",data:y,style:x,...w},[],k)=>{let v=k[md],E=h??v?.size??"2",q=u??v?.color??"accent",K=f??v?.highContrast??!1,H=String(b),qe=v?void 0:r;o.bind=d,o.controlled=qe,!v&&Q(n,d,k);let ne=v?v.renderValue.includes(H):!!G(n,d,r);return ic({...w,type:"checkbox",name:v?.name??w.name,value:H,checked:ne,disabled:p,style:R(q,x),data:P(y,{size:E,color:q,highContrast:K,state:ne?"checked":"unchecked"}),dom:[ee=>cc(o,v,ee,k),...yd(l)],onchange:(ee,st,Sn,lt)=>{W(s,ee,st,Sn,lt);let Pt=st.checked;if(v){let Mo=Pt?[...new Set([...v.renderValue,H])]:v.renderValue.filter(Jd=>Jd!==H);N(v.local,v.bind,v.controlled,Mo,v.context),c&&c(Pt,ee),v.onvaluechange&&v.onvaluechange(Mo,ee),v.controlled!==void 0&&lc(v)}else N(n,d,r,Pt,k),c&&c(Pt,ee),r!==void 0&&(st.checked=ne)}})}}),ac=i(({defaultValue:e=[]},[],t)=>{let n=So(e),o=Z(n,t),r={local:o,defaultValue:n,bind:void 0,controlled:void 0,renderValue:n,context:t,element:void 0,onvaluechange:void 0,name:void 0,size:"2",color:"accent",highContrast:!1},a=Object.create(t);return a[md]=r,({value:d,defaultValue:c,bind:s,onvaluechange:l,name:p,disabled:h=!1,size:u="2",color:f="accent",highContrast:m=!1,dom:g,data:b,style:y,...x},w,k)=>(r.bind=s,r.controlled=d===void 0?void 0:So(d),r.context=k,r.onvaluechange=l,r.name=p,r.size=u,r.color=f,r.highContrast=m,Q(o,s,k),r.renderValue=So(G(o,s,r.controlled)),i({context:a},()=>hn({...x,disabled:h,style:R(f,y),data:P(b,{size:u,color:f,highContrast:m}),dom:[v=>sc(r,v),...yd(g)]},w)))});bd.Group=ac;function cc(e,t,n,o){if(n.defaultChecked=t?t.defaultValue.includes(n.value):e.defaultChecked,t)return;let r=n.form;if(!r)return;let a=()=>queueMicrotask(()=>{let d=n.checked;N(e.local,e.bind,e.controlled,d,o),n.checked=!!G(e.local,e.bind,e.controlled),o.redraw()});return r.addEventListener("reset",a),()=>r.removeEventListener("reset",a)}function sc(e,t){e.element=t;let n=t.form;if(!n)return;let o=()=>queueMicrotask(()=>{let r=[...e.defaultValue];N(e.local,e.bind,e.controlled,r,e.context),e.context.redraw()});return n.addEventListener("reset",o),()=>n.removeEventListener("reset",o)}function lc(e){e.element?.querySelectorAll('input[type="checkbox"]').forEach(t=>{t.checked=e.renderValue.includes(t.value)}),e.context.redraw()}function So(e){return e==null?[]:[...new Set([...e].map(String))]}function yd(e){return e==null?[]:Array.isArray(e)?e:[e]}var rt=bd;var vd=Symbol("sinewy-radio-group"),fn=Symbol("sinewy-radio-names"),pc=i`input
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
`,wd=i(({defaultChecked:e=!1},[],t)=>{let n=Z(!!e,t),o={local:n,defaultChecked:!!e,bind:void 0,controlled:void 0};return({checked:r,defaultChecked:a,bind:d,oncheckedchange:c,onchange:s,dom:l,disabled:p=!1,size:h,color:u,highContrast:f,type:m,role:g,value:b="on",data:y,style:x,...w},[],k)=>{let v=k[vd],E=h??v?.size??"2",q=u??v?.color??"accent",K=f??v?.highContrast??!1,H=String(b);o.bind=d,o.controlled=v?void 0:r,!v&&Q(n,d,k);let qe=v?v.renderValue===H:!!G(n,d,r);return pc({...w,type:"radio",name:v?.name??w.name,value:H,checked:qe,required:v&&v.required||w.required,disabled:p,style:R(q,x),data:P(y,{size:E,color:q,highContrast:K,state:qe?"checked":"unchecked"}),dom:[ne=>hc(o,v,ne,k),...xd(l)],onchange:(ne,ee,st,Sn)=>{W(s,ne,ee,st,Sn);let lt=ee.checked;v&&lt?(N(v.local,v.bind,v.controlled,H,v.context),c&&c(!0,ne),v.onvaluechange&&v.onvaluechange(H,ne),v.controlled!==void 0&&gc(v)):v||(N(n,d,r,lt,k),c&&c(lt,ne),r!==void 0&&(ee.checked=qe))}})}}),uc=i(({name:e,defaultValue:t},[],n)=>{let o=e||mc(n),r=To(t),a=Z(r,n),d={local:a,defaultValue:r,bind:void 0,controlled:void 0,renderValue:r,context:n,element:void 0,onvaluechange:void 0,name:o,required:!1,size:"2",color:"accent",highContrast:!1},c=Object.create(n);return c[vd]=d,({value:s,defaultValue:l,bind:p,onvaluechange:h,name:u=o,required:f=!1,disabled:m=!1,size:g="2",color:b="accent",highContrast:y=!1,dom:x,data:w,style:k,...v},E,q)=>(d.bind=p,d.controlled=To(s),d.context=q,d.onvaluechange=h,d.name=u,d.required=f,d.size=g,d.color=b,d.highContrast=y,Q(a,p,q),d.renderValue=To(G(a,p,d.controlled)),i({context:c},()=>hn({...v,disabled:m,style:R(b,k),data:P(w,{size:g,color:b,highContrast:y}),dom:[K=>fc(d,K),...xd(x)]},E)))});wd.Group=uc;function hc(e,t,n,o){if(n.defaultChecked=t?t.defaultValue===n.value:e.defaultChecked,t)return;let r=n.form;if(!r)return;let a=()=>queueMicrotask(()=>{let d=n.checked;N(e.local,e.bind,e.controlled,d,o),n.checked=!!G(e.local,e.bind,e.controlled),o.redraw()});return r.addEventListener("reset",a),()=>r.removeEventListener("reset",a)}function fc(e,t){e.element=t;let n=t.form;if(!n)return;let o=()=>queueMicrotask(()=>{N(e.local,e.bind,e.controlled,e.defaultValue,e.context),e.context.redraw()});return n.addEventListener("reset",o),()=>n.removeEventListener("reset",o)}function gc(e){e.element?.querySelectorAll('input[type="radio"]').forEach(t=>{t.checked=t.value===e.renderValue}),e.context.redraw()}function mc(e){let t=e;for(;t&&!Object.prototype.hasOwnProperty.call(t,fn);)t=Object.getPrototypeOf(t);return t||=e,t[fn]=(t[fn]||0)+1,"sinewy-radio-"+t[fn]}function To(e){return e==null?void 0:String(e)}function xd(e){return e==null?[]:Array.isArray(e)?e:[e]}var dt=wd;var Sd=Symbol("sinewy-combobox"),kd=Symbol("sinewy-combobox-ids"),it=i(({id:e,multiple:t=!1,defaultValue:n=t?[]:null},[],o)=>{let r=e||$c(o),a=Tc(n,o),d={name:"Combobox",id:r,controlId:r+"-control",inputId:r+"-input",contentId:r+"-content",optionId:0,control:void 0,input:void 0,content:void 0,items:[],labels:new Map,local:a,multiple:t,dir:"ltr",selected:mn(n,t),controlled:void 0,bind:void 0,onvaluechange:void 0,filter:Cd,formatValue:void 0,query:"",editing:!1,open:!1,activeId:void 0,activePill:void 0,context:o},c=Object.create(o);return c[Sd]=d,({multiple:s=!1,value:l,bind:p,dir:h="ltr",filter:u=Cd,formatValue:f,onvaluechange:m},g,b)=>(Ac(a,p,b),d.multiple=s,d.dir=h,d.controlled=l,d.bind=p,d.onvaluechange=m,d.filter=u,d.formatValue=f,d.selected=mn(Dc(a,p,l),s),!s&&!d.editing&&(d.query=Dt(d,d.selected)),i({context:c},()=>g))});it.Control=i(({dom:e,onclick:t,onfocusout:n,...o},r,a)=>{let d=It(a,"Control");return i`div`({...o,id:o.id||d.controlId,data:{...o.data,state:d.open?"open":"closed",multiple:d.multiple?"":null},dom:bn([c=>d.control=c,...at(e)]),onclick:(c,s,l,p)=>{ge(t,c,s,l,p),!c.defaultPrevented&&c.target===s&&d.input&&d.input.focus()},onfocusout:(c,s,l,p)=>{ge(n,c,s,l,p),!c.defaultPrevented&&queueMicrotask(()=>{let h=document.activeElement;s.contains(h)||d.content&&d.content.contains(h)||(d.activePill=void 0,Ad(d,!0))})}},r)});it.Pills=i(({},[],e)=>{let t=It(e,"Pills");return({removelabel:n,...o},[],r)=>{if(!t.multiple)return null;let a=t.selected;return i`span`({...o,data:{...o.data,sinewyComboboxPills:""},dom:at(o.dom)},a.map((d,c)=>i`button`({key:d,type:"button",tabIndex:-1,"aria-label":n?n(d,Dt(t,d)):"Remove "+Dt(t,d),data:{sinewyComboboxPill:"",selected:t.activePill===d?"":null,value:d},onfocus:()=>{t.activePill=d,r.redraw()},onclick:s=>{s.preventDefault(),Td(t,d,s),t.input&&t.input.focus()},onkeydown:s=>yc(t,s,c,d)},Dt(t,d))))}});it.Input=i(({},[],e)=>{let t=It(e,"Input");return(n,[],o)=>i`input`({...n,id:n.id||t.inputId,type:n.type||"text",role:"combobox",value:t.query,autocomplete:n.autocomplete||"off","aria-autocomplete":"list","aria-controls":t.contentId,"aria-expanded":String(t.open),"aria-activedescendant":t.open?t.activeId:null,dom:bn([r=>t.input=r,...at(n.dom)]),onfocus:(r,a,d,c)=>{ge(n.onfocus,r,a,d,c),!r.defaultPrevented&&(t.editing=!0,t.open=!0,t.activePill=void 0,t.multiple||a.select())},oninput:(r,a,d,c)=>{ge(n.oninput,r,a,d,c),!r.defaultPrevented&&(t.query=a.value,t.editing=!0,t.open=!0,t.activeId=kc(t)?.id)},onkeydown:(r,a,d,c)=>{ge(n.onkeydown,r,a,d,c),r.defaultPrevented||bc(t,r,a)},onblur:(r,a,d,c)=>ge(n.onblur,r,a,d,c)})});it.Content=i(({dom:e,...t},n,o)=>{let r=It(o,"Content");return i`div`({...t,id:r.contentId,role:"listbox",hidden:r.open?null:!0,"aria-multiselectable":r.multiple?"true":null,data:{...t.data,state:r.open?"open":"closed"},dom:bn([a=>r.content=a,...at(e)])},n)});it.Item=i(({id:e},[],t)=>{let n=It(t,"Item"),o=e||n.id+"-option-"+ ++n.optionId;return({value:r,textValue:a=String(r),disabled:d=!1,dom:c,onclick:s,onpointerdown:l,onpointermove:p,onselect:h,...u},f,m)=>{if(typeof r!="string")throw new TypeError("Combobox.Item value must be a string");n.labels.set(r,a);let g=Do(n,r),b=n.filter(a,n.query,r);return i`div`({...u,id:o,role:"option",tabIndex:-1,hidden:b?null:!0,"aria-selected":String(g),"aria-disabled":String(d),data:{...u.data,value:r,textValue:a,selected:g?"":null,disabled:d?"":null,highlighted:n.activeId===o?"":null},dom:bn([y=>Cc(n,y),...at(c)]),onpointerdown:(y,x,w,k)=>{ge(l,y,x,w,k),y.defaultPrevented||y.preventDefault()},onpointermove:(y,x,w,k)=>{ge(p,y,x,w,k),!(y.defaultPrevented||d)&&(n.activeId=o)},onclick:(y,x,w,k)=>{ge(s,y,x,w,k),!(y.defaultPrevented||d)&&(ge(h,y,x,w,k),y.defaultPrevented||vc(n,r,a,y))}},f)}});function bc(e,t,n){if(t.key==="ArrowDown"||t.key==="ArrowUp"){t.preventDefault(),e.open=!0,wc(e,t.key==="ArrowDown"?1:-1);return}if(t.key==="Enter"&&e.open&&e.activeId){let o=e.items.find(r=>r.id===e.activeId);if(!o||!Dd(o))return;t.preventDefault(),o.click();return}if(t.key==="Escape"&&e.open){t.preventDefault(),Ad(e,!0);return}if(!(!e.multiple||n.selectionStart!==0||n.selectionEnd!==0)&&(t.key==="Backspace"||t.key===Id(e))){let o=gn(e);if(!o.length)return;t.preventDefault(),o.at(-1).focus()}}function yc(e,t,n,o){let r=gn(e);if(t.key==="Backspace"||t.key==="Delete"){t.preventDefault(),Td(e,o,t),queueMicrotask(()=>{let a=gn(e);(a[Math.min(n,a.length-1)]||e.input)?.focus()});return}if(t.key===Id(e)){t.preventDefault(),r[Math.max(0,n-1)]?.focus();return}t.key===Ic(e)&&(t.preventDefault(),(r[n+1]||e.input)?.focus())}function vc(e,t,n,o){if(e.multiple){let r=Do(e,t)?e.selected.filter(a=>a!==t):[...e.selected,t];Ao(e,r,o),e.query="",e.open=!0,e.activeId=void 0}else Ao(e,t,o),e.query=n,e.editing=!1,e.open=!1,e.activeId=void 0;e.input&&e.input.focus()}function Td(e,t,n){e.multiple&&(Ao(e,e.selected.filter(o=>o!==t),n),e.activePill=void 0)}function Ao(e,t,n){Io(e.bind)?(e.bind(t),e.selected=mn(t,e.multiple)):e.controlled===void 0&&(e.local.value=t,e.selected=mn(t,e.multiple),e.context.redraw()),e.onvaluechange&&e.onvaluechange(t,n)}function wc(e,t){let n=xc(e);if(!n.length){e.activeId=void 0;return}let o=n.findIndex(d=>d.id===e.activeId),r=o===-1?t>0?0:n.length-1:(o+t+n.length)%n.length,a=n[r];e.activeId=a.id,a.scrollIntoView({block:"nearest"})}function Ad(e,t){e.open=!1,e.activeId=void 0,e.editing=!1,t&&!e.multiple&&(e.query=Dt(e,e.selected)),e.context.redraw()}function xc(e){return e.items.filter(Dd)}function kc(e){return e.items.find(t=>t.getAttribute("aria-disabled")!=="true"&&e.filter(t.dataset.textValue,e.query,t.dataset.value))}function Dd(e){return!e.hidden&&e.getAttribute("aria-disabled")!=="true"}function Cc(e,t){return e.items.push(t),Sc(e,t),()=>e.items=e.items.filter(n=>n!==t)}function Sc(e,t){if(Do(e,t.dataset.value)){if(!e.multiple&&!e.editing&&e.query!==t.dataset.textValue){e.query=t.dataset.textValue,queueMicrotask(e.context.redraw);return}if(e.multiple){let n=gn(e).find(o=>o.dataset.value===t.dataset.value);n&&n.textContent!==t.dataset.textValue&&queueMicrotask(e.context.redraw)}}}function gn(e){return e.control?Array.from(e.control.querySelectorAll("[data-sinewy-combobox-pill]")):[]}function Dt(e,t){return t==null?"":e.formatValue?e.formatValue(t):e.labels.get(t)||String(t)}function Do(e,t){return e.multiple?e.selected.includes(t):e.selected===t}function mn(e,t){return t?Array.isArray(e)?[...new Set(e)]:e==null?[]:[e]:Array.isArray(e)?e[0]??null:e??null}function Cd(e,t){return e.toLocaleLowerCase().includes(t.trim().toLocaleLowerCase())}function Tc(e,t){let n={value:e,binding:void 0,unobserve:void 0};return t.onremove(()=>n.unobserve&&n.unobserve()),n}function Ac(e,t,n){e.binding!==t&&(e.unobserve&&e.unobserve(),e.binding=t,e.unobserve=Io(t)?t.observe(n.redraw):void 0)}function Dc(e,t,n){return Io(t)?t():n===void 0?e.value:n}function Io(e){return typeof e=="function"&&typeof e.observe=="function"}function Id(e){return e.dir==="rtl"?"ArrowRight":"ArrowLeft"}function Ic(e){return e.dir==="rtl"?"ArrowLeft":"ArrowRight"}function It(e,t){let n=e[Sd];if(!n)throw new Error("Combobox."+t+" must be used inside Combobox");return n}function $c(e){let t=e,n;for(;(n=Object.getPrototypeOf(t))&&n!==Object.prototype;)t=n;let o=t[kd]||(t[kd]={value:0});return"sinewy-combobox-"+ ++o.value}function bn(e){return e.filter(Boolean)}function at(e){return e==null?[]:Array.isArray(e)?e:[e]}function ge(e,t,...n){at(e).forEach(o=>o&&o(t,...n))}var Ge=it;var $d=Symbol("sinewy-combobox-theme"),zc=i`div
  width min(100%, 320px)
  display grid
  position relative
  gap 6
  color $sinewy-neutral-12
  font-family inherit
`,Pc=Ge.Control`
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
`,Ec=Ge.Pills`
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
`,Oc=Ge.Input`
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
`,Rc=Ge.Content`
  width 100%
  max-height min(280px, calc(100vh - 24px))
  display grid
  position absolute
  inset-block-start calc(100% + 6px)
  inset-inline 0
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
`,qc=Ge.Item`
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

  &::after {
    content '✓'
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

  &[data-selected]::after {
    opacity 1
  }

  &[data-highlighted] {
    background $sinewy-accent-9
    color $sinewy-accent-contrast
  }

  &[data-highlighted]::after {
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
`,ct=i(({id:e,multiple:t,value:n,defaultValue:o,bind:r,dir:a,filter:d,formatValue:c,onvaluechange:s,size:l="2",color:p="accent",highContrast:h=!1,data:u,style:f,...m},g,b)=>{let y={size:l,color:p,highContrast:h},x=Object.create(b);return x[$d]=y,zc({...m,id:e,style:R(p,f),data:P(u,y)},i({context:x},()=>Ge({id:e,multiple:t,value:n,defaultValue:o,bind:r,dir:a,filter:d,formatValue:c,onvaluechange:s},g)))});ct.Control=$t(Pc);ct.Pills=$t(Ec);ct.Input=$t(Oc);ct.Content=$t(Rc);ct.Item=$t(qc);function $t(e){return i((t,n,o)=>{let{size:r="2",highContrast:a=!1}=o[$d]||{};return e({...t,data:P(t.data,{size:r,highContrast:a})},n)})}var ie=ct;var zd=Symbol("sinewy-theme"),Lc=z.Content`
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
`,Mc=z.SubContent`
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
`,Bc=Se(z.Trigger),yn=e=>e`
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

`,jc=yn(z.Item),Fc=yn(z.Checkbox),Nc=yn(z.Radio),Gc=yn(z.SubTrigger),Vc=z.Label`
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
`,Hc=z.Separator`
  height 1
  margin $dropdown-separator-margin
  background $sinewy-neutral-6
`,Uc=z.Indicator`
  width $dropdown-indicator-width
  display inline-grid
  place-items center
  position absolute
  inset-inline-start $dropdown-indicator-start
  flex 0 0 $dropdown-indicator-width
  font-size $dropdown-indicator-font-size
  font-weight 900
`,Pd=i`kbd
  margin-inline-start auto
  color currentColor
  font-family inherit
  font-size inherit
  line-height inherit
  opacity 0.58
`,Kc=i`svg
  width 14
  height 14
  display block
  margin-inline-start auto
  flex 0 0 14px
  opacity 0.72

  &:dir(rtl) {
    transform rotate(180deg)
  }
`,O=i((e,t)=>z(e,t));O.Trigger=i(({size:e="2",variant:t="solid",color:n="gray",highContrast:o=!1,data:r,style:a,...d},c)=>Bc({...d,style:R(n,a),data:P(r,{size:e,variant:t,color:n,highContrast:o})},c));O.Content=i(({size:e="2",variant:t="solid",color:n="gray",highContrast:o=!1,data:r,style:a,...d},c,s)=>{let l={size:e,variant:t,color:n,highContrast:o};return Lc({...d,style:R(n,a),data:P(r,{size:e,variant:t,color:n,highContrast:o})},Ed(s,l,c))});O.Item=vn(jc);O.Checkbox=vn(Fc);O.Radio=vn(Nc);O.SubTrigger=vn(Gc,Yc);O.SubContent=i(({size:e,variant:t,color:n,highContrast:o,data:r,style:a,...d},c,s)=>{let l=$o(s,{size:e,variant:t,color:n,highContrast:o});return Mc({...d,style:n==null?a:R(n,a),data:P(r,l)},Ed(s,l,c))});O.Label=i(({size:e,data:t,...n},o,r)=>{let a=$o(r,{size:e});return Vc({...n,data:P(t,{size:a.size})},o)});O.Separator=i((e,t)=>Hc(e,t));O.Indicator=i((e,t)=>Uc(e,t));O.Shortcut=i((e,t)=>Pd(e,t));O.TriggerIcon=i((e,t)=>Wc(e,t));O.Group=z.Group;O.RadioGroup=z.RadioGroup;O.Sub=z.Sub;var M=i((e,t)=>et(e,t));M.Trigger=et.Trigger;M.Content=O.Content;M.Item=O.Item;M.Checkbox=O.Checkbox;M.RadioGroup=et.RadioGroup;M.Radio=O.Radio;M.Indicator=O.Indicator;M.Group=et.Group;M.Label=O.Label;M.Separator=O.Separator;M.Sub=et.Sub;M.SubTrigger=O.SubTrigger;M.SubContent=O.SubContent;M.Shortcut=O.Shortcut;function vn(e,t){return i(({size:n,color:o,highContrast:r,shortcut:a,data:d,style:c,...s},l,p)=>{let h=$o(p,{size:n,highContrast:r}),u=a==null?l:[...l,Pd(a)];return e({...s,style:o==null?c:R(o,c),data:P(d,{size:h.size,variant:h.variant,color:o,highContrast:h.highContrast})},t==null?u:[...u,t()])})}function $o(e,t){let n=e[zd]||{};return Object.fromEntries(["size","variant","color","highContrast"].map(o=>[o,t[o]==null?n[o]:t[o]]))}function Ed(e,t,n){let o=Object.create(e);return o[zd]=t,i({context:o},()=>n)}function Wc(e){return i`svg
    width 14
    height 14
    display block
    flex 0 0 14px
  `({...e,viewBox:"0 0 14 14",fill:"none",focusable:"false","aria-hidden":e["aria-hidden"]==null?"true":e["aria-hidden"]},i`path`({d:"M3.5 5.25 7 8.75l3.5-3.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))}function Yc(){return Kc({viewBox:"0 0 14 14",fill:"none",focusable:"false","aria-hidden":"true"},i`path`({d:"M5.25 3.5 8.75 7l-3.5 3.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))}var L=O;var Od=[{title:"Alert Dialog",description:"A Dialog specialization for decisions that require immediate attention.",slug:"alert-dialog",source:"docs/components/alert-dialog.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"why-it-shares-dialog-parts",text:"Why it shares Dialog parts"},{depth:2,id:"state-and-events",text:"State and events"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"alertdialogattrs-children",text:"AlertDialog(attrs?, ...children)"},{depth:3,id:"alertdialogtriggerattrs-children",text:"AlertDialog.Trigger(attrs?, ...children)"},{depth:3,id:"alertdialogcontentattrs-children",text:"AlertDialog.Content(attrs?, ...children)"},{depth:3,id:"alertdialogtitleattrs-children",text:"AlertDialog.Title(attrs?, ...children)"},{depth:3,id:"alertdialogdescriptionattrs-children",text:"AlertDialog.Description(attrs?, ...children)"},{depth:3,id:"alertdialogcloseattrs-children",text:"AlertDialog.Close(attrs?, ...children)"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
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
<p>Unlike the headless root, the themed root renders a positioned wrapper. Its listbox is placed immediately below the control and inherits the root&#39;s light/dark-aware palette. All themed parts still support normal Sin style extension.</p>
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
<li>The headless component does not position or style its listbox.</li>
<li>Values are strings; richer records remain consumer-owned option data.</li>
<li>The listbox is rendered in place rather than in a portal or browser top layer. The themed listbox is absolutely positioned inside its root and can be clipped by an ancestor with restrictive overflow.</li>
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
`}],Rd=Object.fromEntries(Od.map(e=>[e.slug,e]));var wn=Od;i.title="Sinewy \u2014 Documentation";i.css.reset``;i.css`
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
`;var _c=i(({},[],{route:e})=>Jc(e({"/":ms,"/components/:slug":bs,"/?":_d}))),Jc=i`div
  min-height 100svh
  display grid
  grid-template-columns 256px minmax(0, 1fr)

  @media (max-width: 780px) {
    grid-template-columns 1fr
  }
`,Xc=i`aside
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
`,Gd=i`a
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
`,Vd=i`span
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
`,Zc=i`nav
  display grid
  align-content start
  gap 25
`,qd=i`section
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
`,Ld=i`a
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
`,Qc=i`footer
  display grid
  gap 6
  color #85837c
  font-size 11
  line-height 1.45

  strong {
    color #5c5c57
    font-weight 680
  }
`,es=i`nav
  min-width 0
  display none
  align-items center
  gap 5
  overflow-x auto

  @media (max-width: 780px) {
    display flex
  }
`,Md=i`a
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
`,ts=i`main
  min-width 0
  grid-column 2

  @media (max-width: 780px) {
    grid-column 1
  }
`,Oo=i`div
  width min(100%, 1100px)
  display grid
  gap 48
  margin 0 auto
  padding 72 52 96

  @media (max-width: 780px) {
    padding 44 20 72
  }
`,ns=i`header
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
`,Hd=i`div
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
`,zo=i`section
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
`,os=i`div
  display grid
  grid-template-columns repeat(3, minmax(0, 1fr))
  gap 12

  @media (max-width: 900px) {
    grid-template-columns 1fr
  }
`,Po=i`article
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
`,Eo=i`div
  display flex
  align-items center
  justify-content space-between
  gap 12
`,Cn=i`span
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
`,Bd=i`div
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
`,Ud=i`a
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
`,Kd=i`span
  width 34
  height 34
  display grid
  place-items center
  border-radius 50%
  background #f0eee8
  color #555650
  font-size 18
`,rs=i`ol
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
`,xn=i`span
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
`,Wd=i`header
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
`,ds=i`div
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
`,is=i`div
  display flex
  flex-wrap wrap
  align-items center
  gap 7
`,as=i`span
  padding 5 8
  border 1px solid #d9d6cd
  border-radius 99
  color #6c6c66
  font-size 10
  font-weight 650
`,cs=i`div
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
`,ss=i`article
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
`,ls=i`div
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
`,ps=i`aside
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
`,us=i`div
  display grid
  gap 16
`,jd=i`section
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
`,zt=i`div
  display flex
  flex-wrap wrap
  align-items center
  gap 9
`,hs=i`div
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
`,fs=M.Trigger`
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
`,Yd=i`div
  display flex
  justify-content flex-end
  gap 8
  margin-top 24
`,Ae=i`label
  display inline-flex
  align-items center
  gap 9
  color #343532
  font-size 13
  font-weight 680
  cursor pointer
`,gs=i`div
  width 100%
  display grid
  grid-template-columns repeat(2, minmax(0, 1fr))
  align-items start
  gap 26

  @media (max-width: 720px) {
    grid-template-columns 1fr
  }
`,Fd=i`div
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
`,Ro={"alert-dialog":{status:"Preview",tags:["Native dialog","Alert semantics","Dialog specialization"],summary:"An urgent-decision specialization of Dialog that enforces the native alertdialog role.",preview:ks,previewHeadings:[{id:"live-example",text:"Live example"}]},button:{status:"Preview",tags:["Native control","Shared theme","Form-safe"],summary:"A compact themed native control with four variants and full button attribute forwarding.",preview:ys,previewHeadings:[{id:"live-example",text:"Live example"}]},toggle:{status:"Preview",tags:["Native control","Pressed state","Shared theme"],summary:"A native two-state button with controlled, uncontrolled, and live binding contracts.",preview:ws,previewHeadings:[{id:"live-example",text:"Live example"}]},dialog:{status:"Preview",tags:["Native dialog","Modal top layer","Controlled state"],summary:"A native modal dialog with accessible semantic parts and shared Sinewy theming.",preview:xs,previewHeadings:[{id:"live-example",text:"Live example"}]},switch:{status:"Preview",tags:["Native checkbox","Form control","Shared theme"],summary:"A native checkbox switch with real form behavior and controlled, uncontrolled, and live state.",preview:Ss,previewHeadings:[{id:"live-example",text:"Live example"}]},select:{status:"Preview",tags:["Native select","Optgroup","Shared theme"],summary:"A themed native scalar select with option groups and controlled, uncontrolled, and live values.",preview:As,previewHeadings:[{id:"live-example",text:"Live example"}]},checkbox:{status:"Preview",tags:["Native checkbox","Array binding","Fieldset group"],summary:"A native checkbox with boolean state and optional array-valued fieldset grouping.",preview:Is,previewHeadings:[{id:"live-example",text:"Live example"}]},combobox:{status:"Preview",tags:["Searchable","Single + multiple","Headless + theme"],summary:"A searchable single- or multiple-value field with accessible option and pill navigation.",preview:Ps,previewHeadings:[{id:"live-example",text:"Live example"}]},radio:{status:"Preview",tags:["Native radio","Scalar binding","Fieldset group"],summary:"A native radio with a named fieldset group and one shared scalar value.",preview:zs,previewHeadings:[{id:"live-example",text:"Live example"}]},"context-menu":{status:"Preview",tags:["Popover API","Point anchors","Headless + theme"],summary:"Contextual actions at pointer or keyboard invocation points, backed by the shared menu engine.",preview:Os,previewHeadings:[{id:"live-example",text:"Live example"}]},dropdown:{status:"API reviewed",tags:["Popover API","CSS anchors","Headless + theme"],summary:"Actions, checkbox and radio choices, nested menus, room-aware placement, and a theme facade.",preview:Es,previewHeadings:[{id:"live-example",text:"Live example"},{id:"theme-preview",text:"Theme preview"}]}};function qo(e,t){return[Xc(Gd({href:"/"},Vd("S"),i`span`(i`strong`("Sinewy"),i`span`("Documentation"))),Zc(qd(i`h2`("Start here"),Ld({href:"/",data:{active:t.has("/")||void 0}},"Overview")),qd(i`h2`("Components"),wn.map(n=>Ld({href:"/components/"+n.slug,data:{active:t.has("/components/"+n.slug)||void 0}},n.title,i`span`(Ro[n.slug]?.status||"Preview"))))),Qc(i`strong`("Independent preview"),"Built for Sin.js with the platform.")),ts(e)]}function ms({},[],{route:e,doc:t}){return t.title("Sinewy \u2014 Documentation"),qo([Lo(e),Oo(ns(Hd("Independent components for Sin.js"),i`h1`("Small parts. Native behavior."),i`p`("Sinewy is an independently maintained component library for Sin.js. This site documents each public surface as it becomes useful, testable, and honest about its platform boundaries.")),zo(i`header`(i`h2`("Where things stand"),i`p`("The status here follows implemented and verified behavior, not a speculative component catalog.")),os(Po(Eo(i`strong`("Portable reference"),Cn("Markdown")),i`p`("Component prose, API tables, and platform limits now come directly from the repository documents."),Bd(i`span`({style:{width:"100%"}}))),Po(Eo(i`strong`("Behavior suite"),Cn("Green")),i`p`("Browser, server rendering, hydration, submenu, and type declaration coverage are in place."),Bd(i`span`({style:{width:"100%"}}))),Po(Eo(i`strong`("Accessibility sign-off"),Cn({data:{tone:"manual"}},"Manual")),i`p`("Keyboard behavior is covered; supported-browser and assistive-technology verification remains.")))),zo(i`header`(i`h2`("Components"),i`p`("Each component page combines its portable contract with live Sin examples and generated navigation.")),wn.map(n=>Ud({href:"/components/"+n.slug},i`div`(i`h3`(n.title),i`p`(Ro[n.slug]?.summary||n.description)),Kd("\u2192")))),zo({id:"roadmap"},i`header`(i`h2`("Documentation roadmap"),i`p`("The site itself is the visible checklist for turning implementation work into a usable system.")),rs(i`li`(xn({data:{done:""}},"\u2713"),i`div`(i`strong`("Establish the documentation shell"),"Navigation, progress overview, component layout, and live examples.")),i`li`(xn({data:{done:""}},"\u2713"),i`div`(i`strong`("Render portable Markdown"),"Frontmatter, GFM content, heading IDs, links, and tables feed the site directly.")),i`li`(xn({data:{current:""}},"3"),i`div`(i`strong`("Generate the static site"),"Use Sin SSR and route discovery to publish every documented component.")),i`li`(xn("4"),i`div`(i`strong`("Expand through real components"),"Add primitives only as their contracts become concrete enough to document.")))))],e)}function bs({slug:e},[],t){let n=Rd[e];if(!n)return t.doc.status(404),_d({},[],t);let o=Ro[e]||{},r=o.preview?o.preview():[],a=o.previewHeadings||[];return t.doc.title(n.title+" \u2014 Sinewy"),qo([Lo(t.route),Oo(Wd(ds(i`a`({href:"/"},"Components"),i`span`("/"),i`span`(n.title)),is(Cn(o.status||"Preview"),(o.tags||[]).map(d=>as(d))),i`h1`(n.title),i`p`(n.description)),cs(ss(r,ls({data:{source:n.source}},i.trust(n.html))),ps(i`strong`("On this page"),[...a,...n.headings.filter(d=>d.depth===2)].map(d=>i`a`({href:"#"+d.id},d.text)))))],t.route)}function ys(){return i`section#live-example`(i`h2`("Live example"),i`p`("A native button with shared size, variant, color, and contrast styling. Tab to see its focus-visible treatment."),i`div`(le(zt(tt({variant:"solid",color:"accent"},"Save"),tt({variant:"soft",color:"cyan"},"Duplicate"),tt({variant:"outline",color:"green"},"Publish"),tt({variant:"ghost",color:"red"},"Delete"))),pe(`import { Button } from 'sinewy'

Button({
  size: '2',
  variant: 'solid',
  color: 'accent',
  highContrast: false
}, 'Save')`)))}var vs=i(()=>{let e=i.live(!1);return()=>zt(St({bind:e,variant:"soft"},e()?"Bold on":"Bold"),St({defaultPressed:!0,variant:"outline",color:"green"},"Pinned"),St({variant:"ghost",color:"crimson","aria-label":"Mute audio"},"\u266A"))});function ws(){return i`section#live-example`(i`h2`("Live example"),i`p`("Activate a toggle to see its persistent pressed state. The same control theme becomes neutral while off and colored while on."),i`div`(le(vs()),pe(`import s from 'sin'
import { Toggle } from 'sinewy'

const bold = s.live(false)

Toggle({
  bind: bold,
  size: '2',
  variant: 'soft',
  color: 'accent'
}, 'Bold')`)))}function xs(){return i`section#live-example`(i`h2`("Live example"),i`p`("Open the native modal to see top-layer focus containment, the themed backdrop, and semantic title and description relationships."),i`div`(le(U(U.Trigger({variant:"solid"},"Edit profile"),U.Content(U.Title("Edit profile"),U.Description("Change the public details shown on your account."),Yd(U.Close("Cancel"),U.Close({variant:"solid",color:"accent"},"Save changes"))))),pe(`import { Dialog } from 'sinewy'

Dialog(
  Dialog.Trigger('Edit profile'),
  Dialog.Content(
    Dialog.Title('Edit profile'),
    Dialog.Description('Change your public details.'),
    Dialog.Close('Cancel'),
    Dialog.Close({ variant: 'solid' }, 'Save changes')
  )
)`)))}function ks(){return i`section#live-example`(i`h2`("Live example"),i`p`("The alert specialization keeps Dialog behavior while announcing an urgent decision and initially focusing the safest choice."),i`div`(le(Te(Te.Trigger({variant:"outline",color:"red"},"Delete account"),Te.Content({color:"red"},Te.Title("Delete account?"),Te.Description("This action permanently removes the account and its saved data."),Yd(Te.Close({autofocus:!0},"Cancel"),Te.Close({variant:"solid",color:"red"},"Delete"))))),pe(`import { AlertDialog } from 'sinewy'

AlertDialog(
  AlertDialog.Trigger('Delete account'),
  AlertDialog.Content(
    AlertDialog.Title('Delete account?'),
    AlertDialog.Description('This cannot be undone.'),
    AlertDialog.Close({ autofocus: true }, 'Cancel'),
    AlertDialog.Close({ variant: 'solid', color: 'red' }, 'Delete')
  )
)`)))}var Cs=i(()=>{let e=i.live(!0);return()=>zt(Ae(At({bind:e}),"Notifications"),Ae(At({defaultChecked:!0,color:"green"}),"Auto-save"),Ae(At({color:"crimson",highContrast:!0}),"Public profile"))});function Ss(){return i`section#live-example`(i`h2`("Live example"),i`p`("Each themed track is still a native labelled checkbox, including keyboard, form, focus, and reset behavior."),i`div`(le(Cs()),pe(`import s from 'sin'
import { Switch } from 'sinewy'

const notifications = s.live(true)

s\`label\`(
  Switch({
    bind: notifications,
    color: 'accent'
  }),
  'Notifications'
)`)))}var Ts=i(()=>{let e=i.live("pear");return()=>Re({bind:e,name:"produce","aria-label":"Produce",color:"cyan"},Re.Group({label:"Fruit"},Re.Option({value:"apple"},"Apple"),Re.Option({value:"pear"},"Pear")),Re.Group({label:"Vegetables"},Re.Option({value:"carrot"},"Carrot")))});function As(){return i`section#live-example`(i`h2`("Live example"),i`p`("Supporting browsers render the native picker with Sinewy\u2019s menu surface, grouped options, selection gutter, and theme colors. Customizable picker styling requires Safari 27 or later; Safari 26 and earlier show the regular platform-native picker."),i`div`(le(Ts()),pe(`import s from 'sin'
import { Select } from 'sinewy'

const produce = s.live('pear')

Select({ bind: produce, name: 'produce' },
  Select.Group({ label: 'Fruit' },
    Select.Option({ value: 'apple' }, 'Apple'),
    Select.Option({ value: 'pear' }, 'Pear')
  )
)`)))}var Ds=i(()=>{let e=i.live(["email"]);return()=>rt.Group({bind:e,name:"channels",color:"green"},i`legend`("Notifications"),Ae(rt({value:"email"}),"Email"),Ae(rt({value:"sms"}),"SMS"),Ae(rt({value:"push"}),"Push"))});function Is(){return i`section#live-example`(i`h2`("Live example"),i`p`("The fieldset binds its checked native values to one array while labels, form data, focus, and toggling remain HTML behavior."),i`div`(le(Ds()),pe(`import s from 'sin'
import { Checkbox } from 'sinewy'

const channels = s.live(['email'])

Checkbox.Group({ bind: channels, name: 'channels' },
  s\`legend\`('Notifications'),
  s\`label\`(Checkbox({ value: 'email' }), 'Email'),
  s\`label\`(Checkbox({ value: 'sms' }), 'SMS')
)`)))}var $s=i(()=>{let e=i.live("free");return()=>dt.Group({bind:e,name:"plan",color:"purple"},i`legend`("Plan"),Ae(dt({value:"free"}),"Free"),Ae(dt({value:"pro"}),"Pro"),Ae(dt({value:"team"}),"Team"))});function zs(){return i`section#live-example`(i`h2`("Live example"),i`p`("The named native radio group shares one live string value and keeps fieldset, legend, label, form, and arrow-key semantics."),i`div`(le($s()),pe(`import s from 'sin'
import { Radio } from 'sinewy'

const plan = s.live('free')

Radio.Group({ bind: plan, name: 'plan' },
  s\`legend\`('Plan'),
  s\`label\`(Radio({ value: 'free' }), 'Free'),
  s\`label\`(Radio({ value: 'pro' }), 'Pro')
)`)))}function Ps(){return i`section#live-example`(i`h2`("Live example"),i`p`("Type to narrow the account list. The multiple field keeps selections as pills that can be reached with Backspace or arrow keys and removed with Backspace or Delete."),i`div`(le(qs()),pe(`import s from 'sin'
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
)`)))}function Es(){return[i`section#live-example`(i`h2`("Live example"),i`p`("The themed facade keeps the headless part structure and remains open to normal Sin style extension."),i`div`(le(Rs()),pe(`import Dropdown from 'sinewy/theme'

Dropdown(
  Dropdown.Trigger('Open menu'),
  Dropdown.Content(
    Dropdown.Item('Edit'),
    Dropdown.Checkbox({ checked: true },
      Dropdown.Indicator('\u2713'),
      'Notifications'
    )
  )
)`))),i`section#theme-preview`(i`h2`("Theme preview"),i`p`("Size and color establish an inherited menu scope. Parts can make deliberate local overrides."),us(jd(i`h3`("Sizes"),zt(kn({label:"Size 1",size:"1",color:"indigo"}),kn({label:"Size 2",size:"2",color:"indigo"}),kn({label:"Size 3",size:"3",color:"indigo"}))),jd(i`h3`("Colors"),zt(...["gray","indigo","cyan","green","amber","crimson","purple"].map(e=>kn({label:Ls(e),variant:"soft",color:e}))))))]}function Os(){return i`section#live-example`(i`h2`("Live example"),i`p`("Right-click or press and hold the target, or focus it and press Shift+F10."),i`div`(le(M(fs("Open a contextual menu here"),M.Content({variant:"soft",color:"indigo"},M.Item({shortcut:"\u2318 R"},"Rename"),M.Item({shortcut:"\u2318 D"},"Duplicate"),M.Separator(),M.Item({color:"red"},"Delete")))),pe(`import { ContextMenu } from 'sinewy/theme'

ContextMenu(
  ContextMenu.Trigger('Right-click here'),
  ContextMenu.Content({ variant: 'soft', color: 'indigo' },
    ContextMenu.Item({ shortcut: '\u2318 R' }, 'Rename'),
    ContextMenu.Item('Duplicate')
  )
)`)))}var Rs=i(()=>{let e=i.live(!0);return()=>L(L.Trigger({variant:"outline",color:"accent",size:"2"},"Open menu",L.TriggerIcon()),L.Content({align:"start",offset:7,variant:"soft",color:"indigo"},L.Label("Workspace"),L.Item({shortcut:"\u2318 E"},"Edit details"),L.Checkbox({bind:e},L.Indicator("\u2713"),"Notifications"),L.Separator(),L.Sub(L.SubTrigger("Share"),L.SubContent(L.Item("Copy link"),L.Item("Invite people")))))}),qs=i(()=>{let e=i.live("assets:bank"),t=i.live(["assets:bank","expenses:office"]);return()=>gs(Fd(i`label`({for:"single-account"},"Single account"),ie({id:"single-account-picker",bind:e,color:"indigo"},ie.Control(ie.Input({id:"single-account",placeholder:"Find an account"})),ie.Content(Nd())),i`p`("The selected account is displayed as editable text.")),Fd(i`label`({for:"multiple-accounts"},"Multiple accounts"),ie({id:"multiple-accounts-picker",multiple:!0,bind:t,color:"cyan"},ie.Control(ie.Pills(),ie.Input({id:"multiple-accounts",placeholder:"Add an account"})),ie.Content(Nd())),i`p`("Backspace at the start of the input selects the last pill.")))});function Nd(){return[["assets:bank","Assets:Bank"],["assets:vat","Assets:VAT receivable"],["expenses:office","Expenses:Office"],["expenses:software","Expenses:Software"],["income:consulting","Income:Consulting"]].map(([e,t])=>ie.Item({value:e,textValue:t},t))}function kn({label:e,size:t="2",variant:n="solid",color:o,highContrast:r=!1,dark:a=!1}){return hs({data:{dark:a||null}},i`span`(e),L(L.Trigger({size:t,variant:n==="soft"?"soft":"outline",color:o,highContrast:r},"Open",L.TriggerIcon()),L.Content({size:t,variant:n,color:o,highContrast:r,align:"start",offset:6},L.Item({shortcut:"\u2318 E"},"Edit"),L.Checkbox({checked:!0},L.Indicator("\u2713"),"Enabled"),L.Item({color:"red"},"Delete"))))}function Ls(e){return e[0].toUpperCase()+e.slice(1)}function Lo(e){return i`header
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
  `(Gd({href:"/"},Vd("S"),i`strong`("Sinewy")),es(Md({href:"/",data:{active:e.has("/")||void 0}},"Overview"),wn.map(t=>Md({href:"/components/"+t.slug,data:{active:e.has("/components/"+t.slug)||void 0}},t.title))))}function _d({},[],{route:e,doc:t}){return t.title("Not found \u2014 Sinewy"),qo([Lo(e),Oo(Wd(Hd("404"),i`h1`("Nothing here yet."),i`p`("This documentation is growing alongside the component system."),Ud({href:"/"},i`div`(i`h3`("Return to the overview"),i`p`("See current progress and available component pages.")),Kd("\u2192"))))],e)}var Wp=i.mount(_c);export{Wp as default};
