typeof globalThis>"u"&&(window.globalThis=window);var x=typeof window>"u"?{}:window;var So=Symbol("stackTrace"),dt=Object.freeze({}),Co=Object.freeze([]),fn=Promise.resolve(),T={}.hasOwnProperty,Te=new WeakSet;function To(e){return typeof e=="function"?e():e}function St(e){return e&&String(e).replace(/\/+/g,"/").replace(/(.)\/\*?$/,"$1")}function it(e){return e&&St(e).replace("/?","?")}function Ct(e){return e.replace(/(\B[A-Z])/g,"-$1").toLowerCase()}function oe(e){return e&&I(e.observe)}function I(e){return typeof e=="function"}function Do(e){return e&&I(e.then)}function gn(e){return e.charCodeAt(0)===111&&e.charCodeAt(1)===110}function Tt(e){return typeof e=="boolean"||e==null}function mn(e){return e&&Array.isArray(e.raw)}function bn(e){return e.charCodeAt(0)===36?"--"+e.slice(1):e.charCodeAt(0)===45&&e.charCodeAt(1)===45?e:null}function yn(e){return e==="dom"||e==="type"||e==="value"||e==="key"||e==="src"||e==="srcset"||e==="href"||e==="class"||e==="className"||e==="data"||e==="style"||e==="deferrable"||e==="is"||e==="handleEvent"}function vn(e){for(;e.parent&&!e.name;)e=e.parent;return e.name}function Ao(e){for(;e.parent&&!e.id;)e=e.parent;return e.id}function Dd(e){let t=e.classes||"";for(;e.parent;)e=e.parent,t+=" "+e.classes||"";return t}function Io(e){return(hn(e.attrs.class)+hn(e.attrs.className)+Dd(e.tag)).trim()}function Dt(e){return Array.isArray(e)?e:[e]}function De(){}function At(e){return bn(e)||(e==="cssFloat"?"float":Ct(e))}function hn(e){return oe(e)||I(e)?hn(e()):e?typeof e=="object"?Ad(e):e+" ":""}function Ad(e){let t;for(let n in e)e[n]&&(t=t==null?n:[t,n].join(" "));return t||""}function It(e,t,n){t?e.style.setProperty("min-width",t+"px"):e.style.removeProperty("min-width"),n?e.style.setProperty("min-height",n+"px"):e.style.removeProperty("min-height")}function Ne(e,[t,n,o,r]=[],{callbacks:a,depth:i}={}){if(e===document.documentElement)It(e,o,r),window.scrollTo(t||0,n||0);else{if(i){let c=document.createElement("div");c.style="position:absolute;width:1px;height:1px;top:"+(r-1)+"px;left:"+(o-1)+"px",e.appendChild(c),Te.add(c),a.push(()=>(Te.delete(c),c.remove()))}e.scrollLeft=t,e.scrollTop=n}}function $o(e,t){return!t||!t.tag?e:!e||!e.tag?(e.tag=t.tag,e):(e.tag={id:t.tag.id||e.tag.id,name:t.tag.name||e.tag.name,classes:(e.tag.classes?e.tag.classes+" ":"")+t.tag.classes,args:t.tag.args,vars:t.tag.vars,parent:e.tag},e)}var te=class{constructor(t,n,o=null,r=0,a=dt,i=Co){this.nesting=r,this.component=n,this.inline=t,this.tag=o,this.attrs=a,this.key=a?a.key:void 0,this.dom=null,this.children=i}};["head","get","put","post","delete","patch"].forEach(e=>Fe[e]=function(t,n={}){return n.method=e,Fe(t,n)});Fe.redraw=()=>{};var Id=typeof Uint8Array>"u"?[]:[Object.getPrototypeOf(Uint8Array)],$d="Blob ArrayBuffer DataView FormData URLSearchParams File".split(" ").map(e=>globalThis[e]).filter(e=>e).concat(Id);function Fe(e,{url:t=new URL(e,x.location.origin),method:n="GET",responseType:o,json:r="application/json",query:a,body:i,user:c=t.username,pass:s=t.password,headers:l={},config:p,timeout:h=0,signal:u,...f}={}){let g=new x.XMLHttpRequest(f);u?.addEventListener("abort",()=>g.abort());let b=!1,w=new Promise((k,v)=>{let D,y;n=n.toUpperCase(),g.addEventListener("readystatechange",function(){if(g.readyState===g.DONE)try{g.headers=g.headers||Pd(g.getAllResponseHeaders()),g.status&&Object.defineProperty(g,"body",{enumerable:!0,value:D===r?g.response===void 0||g.response===""?void 0:JSON.parse(g.response):g.response}),g.status===304||g.status>=200&&g.status<300?k(b?g:g.body):v(zd(g))}catch(P){v(P)}}),g.addEventListener("error",v),g.addEventListener("abort",()=>v(new Error("ABORTED"))),g.addEventListener("timeout",()=>v(new Error("TIMEOUT"))),a&&(a=new URLSearchParams(a))&&a.size&&a.forEach((P,R)=>t.searchParams.append(R,P)),g.open(n,""+t,!0,c,s),g.timeout=h,o&&(g.responseType=o),Object.entries(l).forEach(([P,R])=>{R&&g.setRequestHeader(P,R),P.toLowerCase()==="accept"&&(D=R),P.toLowerCase()==="content-type"&&(y=R)}),!D&&!o&&r&&g.setRequestHeader("Accept",D=r),!y&&i!==void 0&&!$d.some(P=>i instanceof P)&&r&&g.setRequestHeader("Content-Type",y=r),p&&p(g),g.send(y===r?JSON.stringify(i):i)}).catch(k=>{let v=Object.assign(new Error(k.message),{...k,url:t,status:g.status,headers:g.headers,body:g.body||g.response});throw Object.defineProperty(v,"xhr",{value:g}),v});return Object.defineProperties(w,{abort:{value:()=>g.abort(),enumerable:!0},xhr:{get:()=>(b=!0,w)}})}function zd(e){return new Error(e.status?e.status+(e.statusText?" "+e.statusText:""):"Unknown")}function Pd(e){let t={};return e.split(`
`).forEach(n=>{let o=n.indexOf(":"),r=n.substring(0,o).trim().toLowerCase(),a=n.substring(o+1).trim();r==="set-cookie"?t[r]?t[r].push(a):t[r]=[a]:t[r]=a}),t}function Ge(e,...t){let n=new Set;return t.forEach(s=>I(s)&&n.add(s)),i.value=e,i.observe=o,i.valueOf=i.toString=i.toJSON=()=>e,i.detach=De,i.reduce=c,i.set=s=>(...l)=>(i(I(s)?s(...l):s),i),i.get=s=>Object.assign(r.bind(null,s),{observe:l=>i.observe(()=>l(r(s)))}),i.if=(...s)=>Object.assign(a.bind(null,...s),{observe:l=>i.observe(()=>l(a(...s)))}),i;function o(s,l){let p=l?(...h)=>(n.delete(p),s(...h)):s;return n.add(p),()=>n.delete(p)}function r(s){return I(s)?s(i.value):i.value[s]}function a(s,l=!0,p=!1){return i.value===s?l:p}function i(s){if(!arguments.length)return i.value;let l=e;return i.value=e=s,n.forEach(p=>i.value!==l&&p(i.value,l,()=>n.delete(p))),i.value}function c(s,l){let p=1,h=Ge(arguments.length>1?s(l,i.value,p++):i.value);return i.observe(u=>h(s(h.value,u,p++))),h}}Ge.from=function(...e){let t=e.pop(),n=Ge(t(...e.map(wn))),o=e.map(r=>r.observe(()=>n(t(...e.map(wn)))));return n.detach=()=>o.forEach(wn),n};function wn(e){return e()}var zo=!1,Po={};function Oo(e){return e.split(/(?=\/)/)}function Od(e,t){return e.reduce((n,o,r)=>(o[1]===":"&&(n[o.slice(2)]=decodeURIComponent(t[r].slice(1))),n),{})}function at(e,t,n,o){let r=h.location=n.location,a=e(({key:u,route:f,...m},[g],b)=>(b.route=at(e,u.replace(/[/*?]$/,""),n,f),f.key=u,()=>c(g,m,b)));return h.root=o?o.root:h,h.parent=o||h,h.query=n.query,h.toString=h,h.state=i,h.has=u=>{let f=s(r);if((u=u.replace(t,""))==="/")return f===t||f==="/"&&t==="";let m=it(t+"/"+u);return f.indexOf(m)===0&&(f[m.length]===void 0||f[m.length]==="/")},Object.defineProperty(h,"path",{get(){let u=s(r),f=u.indexOf("/",t.length+1);return f===-1?u:u.slice(0,f)}}),h;function i(u){return u&&x.history.replaceState({...history.state,...u},"",r.pathname+r.search+r.hash),x.history?.state}function c(u,f,m){let g=I(u)?u(f,[],m):u;return Do(g)?e(()=>g)(f):g}function s(u,f=0){return decodeURIComponent(St(e.route.prefix[0]==="#"?u.hash.slice(e.route.prefix.length+f):e.route.prefix[0]==="?"?u.search.slice(e.route.prefix.length+f):u.pathname.slice(e.route.prefix.length+f)))}async function l(u,{state:f,replace:m=!1,redraw:g=!0,scroll:b=!0}={}){if(u!==s(r)+r.search){if(e.is.server)return n.doc.status(302),n.doc.headers({Location:e.route.prefix+u});e.route.prefix[0]==="#"?x.location.hash=e.route.prefix+u:e.route.prefix[0]==="?"?x.location.search=e.route.prefix+u:x.history[m?"replaceState":"pushState"](f,null,e.route.prefix+u),Po[u]=f,u.indexOf(r.search)>-1&&n.query(r.search),g&&await e.redraw(),b===!1||e.route.scroll===!1?e.route.scroll=void 0:Ne(document.documentElement)}}function p({state:u={}}={}){e.redraw().then(()=>Ne(document.documentElement,u?.sinscroll?.[""]))}function h(u,f={}){if(typeof u>"u")return t+"/";if(typeof u=="string")return l(it(u[0]==="/"?u:"/"+u),f);zo||(zo=!0,e.route.prefix[0]==="#"?x.addEventListener("hashchange",p,{passive:!0}):I(x.history.pushState)&&x.addEventListener("popstate",p,{passive:!0}));let m=s(r,t.length),g=Oo(m),{match:b,view:w}=Ed(u,g),k=t+(b?b.map((v,D)=>v==="/*"?"*":v==="/?"?"?":g[D]).join(""):"?");return(w===void 0||b[0]==="/?")&&n.doc.status(404),h.params={...h.parent.params,...Od(b||[],g)},a({key:k,route:h,...h.params,...t+m===k&&Po[t+m]||x.history.state||{},...f},w)}}function Ed(e,t){let n=0,o,r;function a(i,c){if(i.charCodeAt(0)!==47&&(i="/"+i),i=Oo(St(i)),typeof c=="object"&&c!=null){for(let l in c)a(i+l,c[l]);return}let s=Rd(i,t);s>n&&(n=s,o=i,r=c)}for(let i in e)a(i,e[i]);return{match:o,view:r}}function Rd(e,t){return e.reduce((n,o,r)=>n+(o==="/?"?1:o===t[r]?7:o&&t[r]&&o.toLowerCase()===t[r].toLowerCase()?6:o[1]===":"&&t[r]&&t[r].length>1?5:o==="/"&&!t[r]?4:o.indexOf("/...")===0?3:o==="/*"?2:-1/0),0)}function xn(e,t){let n=URLSearchParams,o=["append","delete","set","sort"],r=t.search,a=new n(r),i,c=e.live();c.replace=p=>(a=new n(p),l()),c.clear=()=>c.replace("");for(let p in n.prototype)c[p]=(...h)=>(i=s()[p](...h),o.includes(p)&&l(),i);return c;function s(){return r===t.search?a:(r=t.search,a=new n(r))}function l(){let p=t.pathname+(a+""?"?"+(a+"").replace(/=$/g,""):"")+t.hash;location.href.endsWith(p)||(x.history.replaceState(x.history.state,null,p),c(t.search),e.redraw())}}var Eo={ai:"align-items",as:"align-self",ac:"align-content",ar:"aspect-ratio",b:"bottom",bg:"background",bf:"backdrop-filter",bc:"background-color",br:"border-radius",bs:"box-shadow",bi:"background-image",c:"color",d:"display",fg:"flex-grow",fb:"flex-basis",f:"float",fd:"flex-direction",ff:"font-family",fs:"font-size",fw:"font-weight",g:"gap",ga:"grid-area",gg:"grid-gap",gta:"grid-template-areas",gtc:"grid-template-columns",gtr:"grid-template-rows",h:"height",jc:"justify-content",js:"justify-self",l:"left",lh:"line-height",ls:"letter-spacing",m:"margin",mb:"margin-bottom",ml:"margin-left",mr:"margin-right",mt:"margin-top",o:"opacity",p:"padding",pb:"padding-bottom",pl:"padding-left",pr:"padding-right",pt:"padding-top",pi:"place-items",pe:"pointer-events",r:"right",t:"top",ta:"text-align",td:"text-decoration",tt:"text-transform",ts:"text-shadow",us:"user-select",va:"vertical-align",ws:"white-space",w:"width",zi:"z-index",z:"zoom"};var ge,Pt="s",pt=x.document,qd=/^(ms|moz|webkit)[-A-Z]/i,Ue=pt.createElement("div"),Et=new Map,Ro={},kn={},Sn=new Map,se={$:"calc"},Rn=e=>ge||(ge=e||pt.querySelector("style.sin")||pt.createElement("style"));function Fo(e){if(Sn.has(e))return Sn.get(e);let t=Object.assign(document.createElement("link"),{rel:"stylesheet",href:e});document.head.appendChild(t);let n=new Promise((o,r)=>{t.onload=()=>o(t),t.onerror=r});return Sn.set(e,n),n}var Go=(e,t)=>typeof t=="function"?Et.set(e.charCodeAt(0),t):Object.entries(e).forEach(([n,o])=>Et.set(n.charCodeAt(0),o)),$t={flex:"",border:"px","line-height":"","box-shadow":"px","border-top":"px","border-left":"px","border-right":"px","border-bottom":"px","text-shadow":"px","@media":"px","@container":"px"},Dn=Array.from(Object.keys(T.call(Ue.style,"width")?Ue.style:Object.getPrototypeOf(Ue.style)).reduce((e,t)=>(e.add(t.match(qd)?"-"+Ct(t):Ct(t)),e),new Set(["float"]))),qo=Dn.reduce((e,t)=>{let n=t.match(/-(ms|o|webkit|moz)-/g);if(n){let o=t.replace(/-(ms|o|webkit|moz)-/,"");Dn.indexOf(o)===-1&&(o==="flexDirection"&&(e.flex="-"+n[1].toLowerCase()+"-flex"),e[o]=t)}return e},{}),Cn=new Map,Lo=new Set,Mo=x.CSS&&x.CSS.supports("color","var(--support-test)"),Ld=["perspective","blur","drop-shadow","inset","polygon","minmax"],Md=["@media","@container","@supports","@document","@layer","@starting-style"],Vo=e=>Md.some(t=>e.indexOf(t)===0),jd=(e,t)=>e==="translate"||t.indexOf("translate")===0||Ld.indexOf(t)>-1,Bd=(e,t)=>e==="rotate"||t.indexOf("rotate")===0||t.indexOf("skew")===0,An=e=>e!==32&&e!==9&&e!==10&&e!==13&&e!==59,Ho=e=>e>=48&&e<=57||e===46,Nd=e=>e>=65&&e<=90||e>=97&&e<=122||e===45||e===95,Fd=e=>e===37||e>=65&&e<=90||e>=97&&e<=122,Gd=e=>e===34||e===39,jo=e=>e===32||e===58||e===9,Vd=e=>e===59||e===10||e===125,Uo=e=>e===38||e===58||e===64||e===91,Hd=e=>e===59||e===125,Rt=e=>e[e.length-1],ie=[],me=-1,A=-1,fe=-1,ct=-1,qt=-1,Ve=-1,S=-1,Ko=-1,Ie=-1,ye=-1,In=-1,ce=-1,de=-1,re="",V="",be="&&",Re="",st="",Bo="",Ot="",j="",$n="",zn="",lt="",He="",C="",B="",zt="",Y=null,No=!0,We=!1,Pn=!1,Tn=!0,On=!1,ae=0,Ke=!1,Ae=[];function qn(e){return e.charCodeAt(0)===36?"--"+e.slice(1):Eo[e]||e}function Wo(e,t,n){return(e?";":"")+(We?t:Ud(t))+":"+n+(Ko===33?"important":"")}function Ud(e){return Ro[e]||(Ro[e]=ri(qn(e)))}function Kd(e){return Ke?e:e.replace(/,\s*[:[&]?/g,t=>Uo(t.charCodeAt(t.length-1))?",&"+Rt(t):",& ")}function Lt(e,t){if(No&&(ge&&pt.head&&pt.head.appendChild(ge),No=!1),ge&&ge.sheet)try{ge.sheet.insertRule(e,t??ge.sheet.cssRules.length)}catch(n){console.error("Insert rule error:",n,e)}}function Ln([e,...t],n,o=0,r=!1){if(ge||Rn(),Cn.has(e))return{...Cn.get(e),parent:n,args:t};Ke=r;let a={};Ae=[],be="&&",zn=lt=He=j=B=V="",ie.length=ae=0,Ie=A=In=qt=de=ce=-1,Y=Ke?{}:null,On=!1,Pn=!1,Tn=!0,C=e[0];for(let c=0;c<e.length;c++)if(Y?Yo(0,c===e.length-1):Wd(e,c),C=e[c+1],c<t.length){let s=e[c].slice(A);if(!r&&Mo&&A>=0)re=Pt+Math.abs(ae).toString(31),a[zt="--"+re+c]={property:V,fns:Ae.slice(-1),unit:En(V,Rt(Ae)),index:c,transform:ce!==-1&&ti},B+=s+"var("+zt+")"+(ce===-1?"":(ce=-1,")")),A=0;else if(e[c+1].trim().charCodeAt(0)===123)re=Pt+Math.abs(ae).toString(31),a[zt=re+c]={index:c},ie.push("["+zt+"]");else{let l=s+To(t[c])+En(V,Rt(Ae));B+=l;for(let p=0;p<l.length;p++)ae=Math.imul(31,ae)+l.charCodeAt(p)|0;Tn=!1,A=A>=0?0:Mo?-1:0}}On&&(Ke?Object.entries(Y).forEach(([c,s])=>{Lt(c.replace(/&\s+/g,"").replace(/{&$/,"")+"{"+s+"}")}):(re=Pt+Math.abs(ae).toString(31),He+=(He?" ":"")+re,Bo=o&&"&".repeat(o+1),Lo.has(re)||Object.entries(Y).forEach(([c,s])=>{Bo&&(c=c.replace("&","&".repeat(o+1))),Lt(c.replace(/&/g,"."+re)+"{"+s+"}")})));let i={name:zn,classes:He,id:lt,args:t,vars:a,parent:n};return Tn?Cn.set(e,i):Lo.add(re),i}function Wd(e,t){for(let n=0;n<=C.length;n++)if(S=C.charCodeAt(n),n<C.length&&(ae=Math.imul(31,ae)+S|0),Pn){if(An(S)){Y={},Yo(n++,t===e.length-1);break}}else!An(S)||n===C.length?(He=(fe!==-1?C.slice(fe+1,n).replace(/\./g," "):"")+He,lt===""&&(lt=ct!==-1?C.slice(ct,fe===-1?n:fe):""),zn=C.slice(0,lt?ct-1:fe!==-1?fe:n),ct=fe=-1,Pn=!0):S===35?ct=n+1:fe===-1&&S===46&&(fe=n)}function Yd(e){return se[e]||e}function Yo(e,t){for(let n=e;n<=C.length;n++)Ko=S,S=C.charCodeAt(n),n<C.length&&(ae=Math.imul(31,ae)+S|0),Ve===-1&&A!==-1&&(We?Hd(S):Vd(S)||t&&n===C.length)&&_d(n),Ve!==-1?Ve===S&&C.charCodeAt(n-1)!==92&&(Ve=-1):Ve===-1&&Gd(S)?(Ve=S,A===-1&&(A=n)):S===123?Jd(n):S===125||t&&n===C.length?Xd():n!==C.length&&me===-1&&An(S)?(me=n,qt=S):!V&&me>=0&&jo(S)?(V=C.slice(me,n),We=S===58):A===-1&&V&&!jo(S)?(A=Ie=n,Ho(S)?ye=n:S===36&&(de=n)):A!==-1?Jo(n):(S===9||S===32)&&(Ie=n+1)}function _d(e){_o(e),V==="@import"?Lt(V+" "+C.slice(A,e)+";",0):j+=Wo(j,V,B+C.slice(A,e)),On=!0,me=A=-1,We=!1,V=B=""}function _o(e){ce!==-1?Qd(e):de!==-1?Zd(e):ye!==-1&&ni(e)}function Jd(e){V==="animation"?(j&&(Y[be]=j),st=B+C.slice(A,e).trim(),$n=B="",j=""):st?(Ot=C.slice(me,e).trim(),j=""):(j&&(Y[be]=j),Re=(qt===64?Yd(V)+(We?":":" ")+B+(A===-1?"":C.slice(A,e)):C.slice(me,e)).trim(),Re.indexOf(",")!==-1&&(Re=Kd(Re)),B=V="",ie.push((Uo(qt)?"":" ")+Re+(Re==="@font-face"&&++In?"/*"+Array(In).join(" ")+"*/":"")),be=Zo(ie),j=Y[be]||""),me=A=-1,We=!1,V=""}function Xd(){if(Ot)$n+=Ot+"{"+j+"}",Ot=j="";else if(st)j=Y[be]||"",re=Pt+Math.abs(ae).toString(31),Lt("@keyframes "+re+"{"+$n+"}"),j+=Wo(j,"animation",st+" "+re),st="";else{let e=ie.map(n=>n.charCodeAt(0)===64&&Vo(n)?"}":"").join(""),t=ie.pop();ie.length&&ie[0].indexOf("@keyframes")===0?Y[ie[0]]=(Y[ie[0]]||"")+Re+"{"+j+"}":j&&(Y[be]=j.trim()+e),t in se&&(Y[se[t]+" &&"]=j.trim()),be=Zo(ie),j=Y[be]||""}me=A=-1,V=""}function Jo(e){if(Ho(S)?ye===-1&&(ye=e):S===40?de=-1:_o(e),S===40){let t=C.slice(Math.max(Ie,A),e);t in se&&(t=se[t]),B+=C.slice(A,e-t.length)+t+"(",Ae.push(t),A=Ie=e+1}else S===41?Ae.pop():S===9||S===32?Ie=e+1:S===36?de=e:de!==-1&&S===47&&(ce=e)}function Zd(e){C.charCodeAt(e)===47?ce=e:Nd(S)||(B=B+C.slice(A,de)+"var(--"+C.slice(de+1,e)+")",A=e,de=-1)}function Qd(e){B=B+C.slice(A,de)+"color-mix(in oklab, var(--"+C.slice(de+1,ce)+"), transparent "+(C.length===ce+1?"":ei(C.slice(ce+1,e),C.charCodeAt(e))+")"),A=e+1,de=ye=-1}function ei(e,t){return ce=-1,100-(e*(t===37?1:100)).toFixed(0)+"%"}function ti(e){return(100-(typeof e=="string"&&e.charCodeAt(e.length-1)===37?e.slice(0,-1):e*100)).toFixed(0)+"%"}function ni(e){Fd(S)?Et.has(S)&&(B=B+C.slice(A,ye)+Et.get(S)(C.slice(ye,e)),A=e+1):C.charCodeAt(Ie)!==35&&(B=B+C.slice(A,e)+En(V,Rt(Ae)),A=e),ye=-1}function En(e,t=""){if(e=qn(e),e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return"";let n=e+","+t;return T.call(kn,n)?kn[n]:kn[n]=t&&jd(e,t)?"px":Bd(e,t)?"deg":t?"":oi(e)}function Xo(e,{property:t,fns:n,unit:o,transform:r}){if(I(e)&&(e=x.isServerSin&&!oe(e)?"6iacvt":e()),r&&(e=r(e)),!e&&e!==0)return"";if(typeof e=="number")return e+o;if(typeof e!="string"&&(e=""+e),e.charCodeAt(0)===36)return"var(--"+e.slice(1)+")";C=e,B="",A=0,ye=Ie=-1,V=t,Ae=n;for(let a=0;a<=e.length;a++)S=e.charCodeAt(a),Jo(a);return B+e.slice(A)}function Zo(e){if(e.length===0)return"&&";let t=0;return e.reduce((n,o,r,a)=>{let i=o.charCodeAt(0);return i===64&&(o.indexOf("@font-face")===0&&r++,Vo(o))?(t++,o+"{"+(r===a.length-1?"&&":"")+n):i===58&&o.startsWith(":root")?o+" "+n+(Ke||r-t?"":i===32?"&":"&&"):n+(Ke||r-t?"":i===32?"&":"&&")+o},"")}function oi(e){if(e=qn(e),bn(e)||T.call($t,e))return $t[e];try{return Ue.style[e]="1px",Ue.style.setProperty(e,"1px"),$t[e]=Ue.style[e].slice(-3)==="1px"?"px":""}catch{return $t[e]=""}}function ri(e){if(Dn.indexOf(e)===-1){if(qo[e])return qo[e];e.indexOf("--")!==0&&x.sindevhmr&&x.console.error(e,"css property not found")}return e}var $=x.document,Qo={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Gn=new Map,Vn=Symbol("deferrable"),ht=Symbol("observable"),le=Symbol("component"),Nt=Symbol("cycle"),Hn=Symbol("event"),Un=Symbol("$arrayEnd"),Kn=Symbol("$arrayStart"),Mn=Symbol("class"),jn=Symbol("live"),er=Symbol("size"),ft=Symbol("life"),gt=Symbol("attr"),tr=Symbol("attrs"),Le=Symbol("source"),nr=Symbol("children"),Ye=Symbol("keyIndex"),pe=Symbol("keys"),dr=Symbol("key"),je=Symbol("s"),$e=[],Bt,Ft,ir;function d(...e){let t=typeof e[0];return t==="string"?Wn(Object.assign([e[0]],{raw:[]}))(...e.slice(1)):T.call(e[0],je)?e[0](...e.slice(1)):cr(Wn,mn(e[0])?ar(e):t==="function"?new te(d.redrawing,e):new te(d.redrawing,[e[1],e[0]]))}function Wn(...e){return mn(e[0])?cr(Wn,ar(e,this)):hi(e,this)}function ar(e,t){let n=t?t.nesting+1:0;return new te(t&&t.inline,t&&t.component,Ln(e,t&&t.tag,n),n)}function cr(e,t){let n=e.bind(t);return n[je]=!0,n}d.redrawing=!1;d.sleep=(e,...t)=>new Promise(n=>setTimeout(n,e,...t));d.with=(e,t)=>e===void 0?e:t(e);d.isAttrs=lr;d.is={server:d.isServer=x.isServerSin||!1};d.containers=[];d.redraw=Gt;d.redraw.force=yi;d.mount=fi;d.css=(...e)=>Ln(e,null,0,!0);d.css.alias=sr;d.css.reset=ji;d.css.unit=Go;d.css.load=Fo;d.style=Rn;d.animate=li;d.animate.transform=si;d.http=Fe;d.live=Ge;d.event=ii;d.on=ci;d.trust=ai;d.route=at(d,"",{location:x.location,query:xn(d,x.location)});d.route.prefix="";d.window=x;d.scroll=!0;d.View=te;d.error=d(e=>(console.error(e),()=>d`pre;all initial;d block;c white;bc #ff0033;p 8 12;br 6;overflow auto;fs 12`(d`code`("Unexpected Error: "+(e.message||e)))));d.jsx=d((e,t)=>t.slice(1));d.container=d((e,t,n)=>{return n.container={},()=>d``({...e,dom:[o].concat(e.dom)},d` display contents`(t));function o(r){r.style.containerType="inline-size";let a=r.firstElementChild;return a.setAttribute("data-sin-container",""),requestAnimationFrame(()=>{a.style.setProperty("transition-behavior","allow-discrete"),a.style.setProperty("transition",d.containers.map(c=>"--sin-container-"+c+" 0.001ms step-start").join(", ")),a.addEventListener("transitionrun",i)}),i(),()=>a.removeEventListener("transitionrun",i);function i(c){let s=getComputedStyle(a);for(let l of d.containers)n.container[l]=s.getPropertyValue("--sin-container-"+l)==="1";n.redraw()}}});var di=d(({strings:e,values:t=[]})=>{let n=$.createElement("div"),o=Array.isArray(e.raw)?[...e.raw]:Array.isArray(e)?[...e]:[e.trim()];o[0]=o[0].trimStart(),o[o.length-1]=o[o.length-1].trimEnd(),n.innerHTML=String.raw({raw:o},...t);let r=[...n.childNodes,$.createComment("trust")];return()=>r});function sr(e,t){if(typeof e=="object")return Object.entries(e).forEach(([o,r])=>sr(o,r));if(Array.isArray(t)?(se["@"+e]=t[0],se[t[0]]=t[1]):(se["@"+e]=t,se[e]=t),d.is.server)return;let n=(Array.isArray(t)?t[0]:t).split(" ")[0];if(n==="@media"){let o=null;Object.defineProperty(d.is,e,{get(){if(o!==null)return o;let r=x.matchMedia(t.slice(t.indexOf("(")));return r.addEventListener("change",a=>(o=a.matches,d.redraw())),o=r.matches}})}else n==="@container"&&(d.css([`@property --sin-container-${e}{syntax:'<number>';inherits:false;initial-value:0;}`]),d.css([`${t}{[data-sin-container]{--sin-container-${e}:1}}`]),d.containers.push(e))}function ii(e){let t=new Set(e?[e]:[]);return n.observe=r,Object.defineProperty(n,"signal",{get:o}),n;function n(...a){return[...t].map(i=>i(...a))}function o(){let a=new AbortController;return r(()=>a.abort(),!0),a.signal}function r(a,i){let c=i?(...s)=>(t.delete(c),a(...s)):a;return t.add(c),()=>t.delete(c)}}function ai(e,...t){return e&&e.raw||(e=Array.isArray(e)?e.map(n=>Tt(n)?"":n).join(""):Tt(e)?"":""+e),di({key:""+e,strings:e,values:t})}function ci(e,t,n,o){return typeof o=="function"&&([n,o]=[o,n]),(...r)=>{let a=i=>Qn(n,i,...r);return e.addEventListener(t,a,o),()=>e.removeEventListener(t,a,o)}}function si(e){return function(...t){let[n]=t;I(e)&&(e=e(...t));let o=e.getBoundingClientRect(),r=n.getBoundingClientRect();return n.style.setProperty("transition","none"),n.style.setProperty("--transform",`translate(${o.left-r.left}px, ${o.top-r.top}px) scale(${o.width/r.width}, ${o.height/r.height})`),requestAnimationFrame(()=>n.style.removeProperty("transition")),d.animate(n)}}function li(e){return e.setAttribute("animate","entry"),requestAnimationFrame(()=>(e.offsetWidth,e.removeAttribute("animate"))),t=>t&&(e.setAttribute("animate","exit"),Promise.allSettled(e.getAnimations().map(n=>n instanceof x.CSSTransition&&n.finished)))}function pi(e,t,n){e.addEventListener("click",o=>{if(!o.defaultPrevented&&(o.button===0||o.which===0||o.which===1)&&(!o.currentTarget.target||o.currentTarget.target==="_self")&&!ui(o.currentTarget)&&!o.ctrlKey&&!o.metaKey&&!o.shiftKey&&!o.altKey){o.preventDefault();let r=e[gt].state;n(e.getAttribute("href"),e[gt])}})}function ui(e){return d.route.prefix[0]!=="#"&&e.getAttribute("href")?.includes("#")&&e.origin===x.location.origin&&e.pathname===x.location.pathname&&e.search===x.location.search}function hi(e,t){let n=lr(e[0]);return new te(t.inline,t.component,t.tag,t?t.nesting+1:0,n?e.shift():void 0,e.length===1&&Array.isArray(e[0])?e[0]:e)}function lr(e){return e!==null&&typeof e=="object"&&!(e instanceof te)&&!Array.isArray(e)&&!(e instanceof Date)&&!(e instanceof x.Node)&&!I(e.then)&&!(e instanceof String)&&!(e instanceof Number)}function fi(e,t,n={},o={}){if(I(t)){if(!e)throw new Error("The dom element you tried to mount to does not exist.")}else if(o=n||{},n=t||{},t=e,e=$.body,!e)throw new Error("document.body does not exist.");if(!(t instanceof te)&&!T.call(t,je)&&(t=d(t)),T.call(o,"location")||(o.location=x.location),T.call(o,"error")||(o.error=d.error),d.is.server)return{view:t,attrs:n,context:o,unmount:De};e[So]=new Error().stack,d.scroll&&gi(o),bi(e.firstChild,o,n);let r={head:o.hydrating?De:pr,lang:d.live($.documentElement.lang,i=>$.documentElement.lang=i),title:d.live($.title,i=>$.title=i),status:De,doctype:De,headers:De};o.doc=r,o.route=at(d,"",{doc:o.doc,location:o.location,query:d.route.query});let a={view:t,attrs:n,context:o};return Gn.set(e,a),hr(a,e),{view:t,attrs:n,context:o,unmount:()=>Gn.delete(e)}}function gi(e){x.history.scrollRestoration="manual";let t=""in(history.state?.sinscroll||dt);t&&Ne($.documentElement,history.state.sinscroll[""]);let n=e[Nt]={depth:0,callbacks:[],done:i=>n.depth!==-1&&(n.depth+=i)||(n.depth=0,a())},o;setTimeout(()=>{$.addEventListener("scroll",r,{passive:!0,capture:!0}),$.addEventListener("resize",r,{passive:!0,capture:!0}),t&&n.depth===0&&(n.depth=-1,It($.documentElement,0,0))},200);function r(i){clearTimeout(o),o=setTimeout(mi,100,i)}function a(){n.callbacks.forEach(i=>i()),It($.documentElement,0,0)}}function mi(e){let t=history.state?.sinscroll||{};e.type==="scroll"?Object.keys(t).forEach(o=>n(o?$.getElementById(o):$)):e.target===$?n($):e.target.id&&n(e.target);function n(o){o&&(t[o===$?"":o.id]=[o.scrollLeft,o.scrollTop,o.scrollWidth,o.scrollHeight],d.route.state({sinscroll:t}))}}function pr(e){if(Array.isArray(e))return e.forEach(pr);let t=$.createElement(vn(e.tag));for(let n in e.attrs)t.setAttribute(n,e.attrs[n]);e.children.length&&(t.innerHTML=e.children[0]),$.head.appendChild(t)}function bi(e,t,n){if(e){if(e.nodeType===8&&e.data==="h")e.remove(),t.hydrating=!0;else if(e.nodeType===1&&e.tagName==="SCRIPT"&&e.hasAttribute("h")){t.hydrating=!0;let i=JSON.parse(e.textContent);Object.assign(t,i.context),Object.assign(n,i.attrs)}}if(!t.hydrating)return;let o,r=[],a=$.createTreeWalker($.body,NodeFilter.SHOW_COMMENT);for(;o=a.nextNode();)o.data===","&&r.push(o);r.forEach(i=>i.remove())}function Gt(){return Bt||(ir=x.requestAnimationFrame(ur),Bt=d.is.server?fn:new Promise(e=>Ft=e)),Bt}function yi(){return new Promise(e=>{let t=Ft;Ft=t?()=>(e(),t()):e,x.cancelAnimationFrame(ir),ur()})}function ur(){Bt=null,Gn.forEach(hr),Ft()}function hr(e,t){Xn();try{e.doms=mt(t,Dt(e.view(e.attrs)),e.context,e.doms&&_e(e.doms.dom),e.doms&&e.doms.last)}catch(n){e.attrs.error=n,e.doms=mt(t,Dt(e.context.error(n,e.attrs,[],e.context)),e.context,e.doms&&_e(e.doms.dom),e.doms&&e.doms.last)}finally{Zn()}}function Xn(){d.redrawing=!0}function Zn(){$e.forEach(e=>e()),$e=[],d.redrawing=!1}function mt(e,t,n,o,r=e.lastChild){let a=t[0]&&t[0].key!==void 0&&new Array(t.length),i=N(o,e.firstChild),c=i&&T.call(i,pe),s=N(r,null);a&&(a.rev=new Map)&&c?vi(e,n,i[pe],t,a,s,i):fr(e,n,t,a,i,s);let l=N(o,e.firstChild);return a&&(l[pe]=a),we(l,s&&_e(s)||e.lastChild)}function N(e,t){let n=e?e.nextSibling:t;for(;Te.has(n);)n=n.nextSibling;return n}function _e(e,t){let n=e?e.previousSibling:t;for(;Te.has(n);)n=n.previousSibling;return n}function ut(e,t,n,o){e[o]={dom:t,key:n},t[pe]=e,t[Ye]=o,e.rev.set(n,o)}function fr(e,t,n,o,r,a=null){let i=0,c,s;for(;i<n.length;)(r===null||!Te.has(r))&&(s=n[i],c=r!==a?ve(r,s,t,e):ve(null,s,t),r===a&&e.insertBefore(c.dom,a),o&&ut(o,c.first,s.key,i),r=c.last,i++),r!==null&&(r=N(r));for(;r&&r!==a;)r=Me(r,e)}function vi(e,t,n,o,r,a,i){let c=n.rev,s=new Set;for(let m of o){if(m&&m.key===void 0)return fr(e,t,o,r,i,a);m&&s.add(m.key)}let l=n.length-1,p=o.length-1,h=n[l],u=o[p],f=-1;e:for(;;){if(u==null){u=o[--p];continue}for(;h&&!s.has(h.key);)Me(h.dom,e),c.delete(h.key),h=n[--l];for(;h&&h.key===u.key;){if(a=ve(h.dom,u,t,e).first,ut(r,a,u.key,p),c.delete(u.key),p===0)break e;if(l===0){u=o[--p];break}h=n[--l],u=o[--p]}if(c.has(u.key)){if(f=c.get(u.key),f>p)f=ve(n[f].dom,u,t,e),Bn(e,f,a),a=f.first,ut(r,a,u.key,p);else if(f!==p)f=ve(n[f].dom,u,t,e),Bn(e,f,a),a=f.first,ut(r,a,u.key,p);else{h=n[--l];continue}if(c.delete(u.key),p===0)break;u=o[--p]}else{if(f=ve(null,u,t),Bn(e,f,a),a=f.first,ut(r,a,u.key,p),p===0)break;u=o[--p]}}c.forEach(m=>Me(n[m].dom,e))}function Bn(e,{first:t,last:n},o){let r=t,a;do a=r,r=N(a);while(e.insertBefore(a,o)!==n)}function ve(e,t,n,o,r,a,i){return oe(t)?xi(e,t,n,o,r,a):I(t)?ve(e,t(),n,o,r,a,i):t instanceof te?or(e,t,n,o,r,a):t instanceof Promise?or(e,d(()=>t)(),n,o,r,a):Array.isArray(t)?mr(e,t,n,o,a,i):t instanceof Node?wi(e,t,n):br(e,t,o,a,void 0,i)}function wi(e,t,n){return e&&n.hydrating?we(e):we(t)}function or(e,t,n,o,r,a){return t.component?yr(e,t,n,o,r,a):Si(e,t,n,o,a)}function xi(e,t,n,o){if(e&&T.call(e,jn)&&e[jn].view===t)return a(t());let r=a(t());return bt(e,t,a),r;function a(i){let c=d.redrawing,s=$e;$e=[],Xn();let l=ve(e,i,n,o||e&&e.parentNode);return Zn(),d.redrawing=c,$e=s,e!==l.first&&bt(l.first,t,a),e=l.first,l.first[jn]={view:t,doms:l},l}}function we(e,t=e,n=t){return{dom:e,first:t,last:n}}function ki(e){if(!e||e.nodeType!==8||e.data.charCodeAt(0)!==91)return;let t=parseInt(e.data.slice(1)),n=e,o;for(;t&&(n=N(n));)n.nodeType===8?(o=n.data.charCodeAt(0),t+=o===91?parseInt(n.data.slice(1))-1:o===97?1:-1):t--;return Vt(e,n),n}function Vt(e,t){(t||e)[Kn]=e,e[Un]=t}function gr(e){return e&&T.call(e,Un)?e[Un]:ki(e)}function mr(e,t,n,o,r,a){r&&e&&o&&(e=mr(e,[],n,o).first);let i=gr(e)||e,c=br(e,"["+t.length,o,!1,8,a);if(e!==c.dom&&(i=c.last),o){let s=N(i,null);mt(o,t,n,c.first,i);let l=_e(s,o.lastChild);return i!==l&&Vt(c.first,l),we(c.dom,c.first,l)}return o=new DocumentFragment,o.appendChild(c.dom),mt(o,t,n,c.first,i),Vt(c.first,o.lastChild),we(o,c.first,o.lastChild)}function br(e,t,n,o,r=Tt(t)?8:3,a=!1){let i=o||!e||e.nodeType!==r;return e&&T.call(e,le)&&e[le]!==a&&Ut(e),i&&kr(e,e=r===8?$.createComment(t):$.createTextNode(t),n),!i&&e.data!==""+t&&(e.data=t),we(e)}function Si(e,t,n,o,r){let a=n.NS,i=vn(t.tag),c=r===!0||e===null||Ti(e,t,n,i);(t.attrs.xmlns||Qo[i])&&(n.NS=t.attrs.xmlns||Qo[i]),c&&kr(e,e=Di(t,n,i),o),i==="foreignObject"&&(n.NS="http://www.w3.org/1999/xhtml");let s=t.children&&t.children.length;return $i(e,t,n,i),s?mt(e,t.children,n):e[er]&&Ci(e.firstChild,e),e[er]=s,n.NS=a,T.call(t,"key")&&(e[dr]=t.key),we(e)}function Ci(e,t){for(;e;)e=Me(e,t)}function Ti(e,t,n,o){return e[dr]!==t.key&&!n.hydrating||(n.NS?e.nodeName!==o:e.nodeName.toLowerCase()!==(o.toLowerCase()||"div"))}function Di(e,t,n){let o=e.attrs.is;return t.NS&&t.NS!=="http://www.w3.org/1999/xhtml"?o?$.createElementNS(t.NS,n,{is:o}):$.createElementNS(t.NS,n):o?$.createElement(n||"div",{is:o}):$.createElement(n||"div")}var Yn=class{constructor(t,n,o,r,a,i,c,s){this.init=t,this.key=void 0,this.view=n,this.error=o,this.caught=void 0,this.loading=r,this.context=a,this.hydrating=i,this.onremoves=void 0,this.promise=void 0,this.stateful=void 0,this.next=void 0,this.ignore=!1,this.recreate=!1,this.attrs=Kt(c),this.children=Kt(s)}},_n=class{constructor(){this.xs=[],this.i=0,this.top=0,this.bottom=0,this.dom=null}changed(t,n){if(this.i>=this.xs.length)return!0;let o=this.xs[this.i],r=o.key!==t.key&&!n.hydrating||o.init&&o.init!==t.component[0];return r&&o.onremoves&&o.onremoves.forEach(a=>a()),r}add(t,n,o){let r=this.i,[a,i]=t.component;o&&this.xs[this.i]&&(t.attrs=this.xs[this.i].attrs,t.children=this.xs[this.i].children);let c=new Yn(t.inline?!1:a,a,i&&i.error||n.error,i&&i.loading||n.loading,i&&i.context||n.context,n.hydrating,t.attrs,t.children),s=(f,m,g)=>{if(this.xs.indexOf(c)===-1)return;Xn(),f instanceof Event&&(f.redraw=!1);let b=this.dom.first[pe],w=this.dom.first[Ye];this.i=this.bottom=r,yr(this.dom.first,t,n,this.dom.first.parentNode,this,m,g,!0),T.call(this.dom.first,pe)||(this.dom.first[pe]=b,this.dom.first[Ye]=w),b&&(b[w].dom=this.dom.first),this.i=this.bottom=0,Zn()},l=d.event(f=>d.redrawing?requestAnimationFrame(l):s(f,!1,!1)),p=d.event(f=>{c.onremoves&&(c.onremoves.forEach(m=>m()),c.onremoves=void 0),s(f,!0)}),h=d.event(f=>{c.onremoves&&(c.onremoves.forEach(m=>m()),c.onremoves=void 0),s(f,!0,!0),c=this.xs[r]});c.context=Object.create(c.context||n,{hydrating:{value:n.hydrating,writable:!0},onremove:{value:f=>{Mt(c,f)}},ignore:{value:f=>{c.ignore=f}},refresh:{value:h},redraw:{value:l},reload:{value:p}}),c.attrs[Le]=t.attrs,c.children[Le]=t.children;let u=vr(!0,c,t,c.attrs,c.children);return oe(t.attrs.reload)&&Mt(c,t.attrs.reload.observe(p)),oe(t.attrs.redraw)&&Mt(c,t.attrs.redraw.observe(l)),oe(t.attrs.refresh)&&Mt(c,t.attrs.refresh.observe(h)),c.promise=u&&I(u.then)&&u,c.stateful=c.promise||I(u)&&!u[je],c.view=c.promise?o?this.xs[this.i].view:c.loading:u,o||this.cut(),this.top=this.i,this.xs[this.i++]=c}next(t){let n=this.i<this.xs.length&&this.xs[this.top=this.i++];return n.attrs[Le]=t.attrs,n.children[Le]=t.children,n}pop(){return--this.i!==this.bottom?!1:(this.cut(this.top+1),!0)}cut(t=this.i){for(let n=t;n<this.xs.length;n++)this.xs[n].onremoves&&this.xs[n].onremoves.forEach(o=>o());this.xs.length=t}};function Mt(e,t){e.onremoves?e.onremoves.add(t):e.onremoves=new Set([t])}function Ai(e){let t="/"+e.data,n=N(e);for(;n&&(n.nodeType!==8||n.data!==t);)n=N(n);let o=we(N(e),N(e),_e(n));if(T.call(n,Kn)&&Vt(n[Kn],_e(n)),T.call(e,le)&&(o.first[le]=e[le]),T.call(e,pe)){let r=e[pe],a=e[Ye];o.first[pe]=r,o.first[Ye]=a,r[e[Ye]].dom=o.first}return e.remove(),n.remove(),o}function Ii(e){let t="/"+e.data,n=N(e);for(;n&&(n.nodeType!==8||n.data!==t);)n=N(n);return we(e,e,n)}function yr(e,t,n,o,r=e&&e[le]||new _n,a=r.changed(t,n),i=!1,c=!1){let s=a?r.add(t,n,i):r.next(t);if(!a&&s.ignore&&!c)return r.pop(),r.dom;t.key!==void 0&&(a||n.hydrating)&&(s.key=t.key);let l=s.promise&&e&&e.nodeType===8&&e.data.charCodeAt(0)===97;if(l)s.next=Ii(e);else{let h=vr(a,s,i?s.view:t,s.attrs,s.children);h&&T.call(h,je)&&(h=h(t.attrs,t.children,s.context)),s.next=ve(e,!s.caught&&!s.promise&&h instanceof te||i?$o(h,t):h,s.context,o,r,(a||s.recreate)&&!s.hydrating&&!i?!0:void 0,r),s.hydrating&&(s.hydrating=s.context.hydrating=!1),s.recreate&&(s.recreate=!1)}if(a&&s.promise){let h=r.i-1;n[Nt].done(1),s.promise.then(u=>s.view=u&&T.call(u,"default")?u.default:u).catch(u=>{s.caught=u,s.view=wr(s,t,u)}).then(()=>T.call(s.next.first,le)&&r.xs[h]===s&&(l&&(r.dom=Ai(e)),n.hydrating=!1,s.recreate=!i,s.promise=!1,s.context.redraw(),n[Nt].done(-1)))}let p=e!==s.next.first;return r.pop()&&(p||a)&&(r.dom=s.next,s.next.first[le]=r),s.next}function vr(e,t,n,o,r){try{return t.stateful||e?I(t.view)&&!t.view[je]?t.view(o,r,t.context):t.view:n.component[0](o,r,t.context)}catch(a){return wr(t,n,a)}}function wr(e,t,n){return T.call(e.error,je)?e.error().component[0](n,t.attrs,t.children,e.context):e.error(n,t.attrs,t.children,e.context)}function $i(e,t,n,o){let r=t.tag,a,i=e[gt]||n.hydrating&&zi(e)||void 0,c=!i;if(c&&T.call(t.attrs,"id")===!1){let l=Ao(t.tag);l&&(e.id=l)}Nn(e,t),c&&bt(e,t.attrs.class,()=>Nn(e,t)),c&&bt(e,t.attrs.className,()=>Nn(e,t)),t.attrs.type!=null&&Ht(e,"type",t.attrs.type);for(let l in t.attrs)yn(l)?l==="deferrable"&&(e[Vn]=t.attrs[l]):(!i||i[l]!==t.attrs[l])&&qe(e,t.attrs,l,i&&i[l],t.attrs[l],c,n);if(T.call(t.attrs,"value"))if(!i&&o==="input"&&e.value!==""+t.attrs.value){let l,p;e===$.activeElement&&(l=e.selectionStart,p=e.selectionEnd),qe(e,t.attrs,"value",e.value,t.attrs.value,c,n),e===$.activeElement&&(e.selectionStart!==l||e.selectionEnd!==p)&&e.setSelectionRange(l,p)}else(!i||i.value!==t.attrs.value)&&qe(e,t.attrs,"value",i&&i.value,t.attrs.value,c,n);if(o==="option"&&!c&&T.call(t.attrs,"selected")&&e.selected!==t.attrs.selected&&qe(e,t.attrs,"selected",e.selected,t.attrs.selected,c,n),T.call(t.attrs,"srcset")&&i?.srcset!==t.attrs.srcset&&qe(e,t.attrs,"srcset",i?.srcset,t.attrs.srcset,c,n),T.call(t.attrs,"src")&&i?.src!==t.attrs.src&&qe(e,t.attrs,"src",i?.src,t.attrs.src,c,n),T.call(t.attrs,"href")&&(n.hydrating||!i||i.href!==t.attrs.href)){a=t.attrs.href;let l=!String(a).match(/^([a-z]+:|\/\/)/)&&!t.attrs.target&&!t.attrs.download;l&&(a=it(t.attrs.href)),qe(e,t.attrs,"href",i&&i.href,a,c,n),a&&l&&(t.attrs.href=d.route.prefix+a,pi(e,t.attrs,n.route))}if(i)for(let l in i)T.call(t.attrs,l)===!1&&(gn(l)?xr(e,l):yn(l)?l==="deferrable"&&(e[Vn]=!1):e.removeAttribute(l));Oi(e,t.attrs.data,i&&i.data);let s=Pi(e,t.attrs.style,i&&i.style);if(r)for(rr(e,r.vars,r.args,c||n.hydrating,s);r=r.parent;)rr(e,r.vars,r.args,c||n.hydrating,s);t.attrs.dom&&(c||n.hydrating?Ei(e,e[tr]=Kt(t.attrs),e[nr]=Kt(t.children),n,t.attrs.dom):(e[tr][Le]=t.attrs,e[nr][Le]=t.children)),e[gt]=t.attrs,c&&e.id&&e.id in(history.state?.sinscroll||dt)&&$e.push(()=>Ne(e,history.state?.sinscroll?.[e.id],n[Nt]))}function zi(e){if(!e||!e.hasAttributes())return;let t={};for(let n of e.attributes)t[n.name]=n.value||!0;return t}function Pi(e,t,n){if(t==null)return t!==n&&(e.style.cssText="",!0);if(typeof t!="object")return t!==n&&(e.style.cssText=t,!0);if(n==null||typeof n!="object"){e.style.cssText="";for(let o in t){let r=t[o];r!=null&&e.style.setProperty(At(o),r+"")}return!0}for(let o in t){let r=t[o];r!=null&&(!n||(r=r+"")!=n[o]+"")&&e.style.setProperty(At(o),r)}for(let o in n)n[o]!=null&&t[o]==null&&e.style.removeProperty(At(o));return!0}function Oi(e,t,n){for(let o in t){let r=t[o];r!=null&&(!n||(r=r+"")!=n[o]+"")&&(e.dataset[o]=r)}for(let o in n)n[o]!=null&&t[o]==null&&delete e.dataset[o]}function bt(e,t,n){if(!oe(t))return;let o=T.call(e,ht),r=o?e[ht]:new Set;o||(e[ht]=r),r.add(t.observe(n))}function Nn(e,t){let n=Io(t),o=T.call(e,Mn)&&e[Mn]||"";if(n!==o){e[Mn]=n;for(let r of o&&o.split(" "))r&&e.classList.remove(r);for(let r of n&&n.split(" "))r&&e.classList.add(r)}}function rr(e,t,n,o,r){for(let a in t){let i=t[a],c=n[i.index];Jn(e,a,c,i,o,r)}}function Jn(e,t,n,o,r,a,i){if(oe(n)){r&&n.observe(c=>Fn(e,t,c,o)),(r||a)&&Jn(e,t,n(),o,r,r);return}if(I(n))return fn.then(()=>Jn(e,t,n(e),o,r,a,i));Fn(e,t,n,o),i&&$e.push(()=>Fn(e,t,n,o))}function Fn(e,t,n,o){T.call(o,"property")?e.style.setProperty(t,Xo(n,o)):n?e.setAttribute(t,""):e.removeAttribute(t)}function Ei(e,t,n,o,r){$e.push(()=>{Dt(r).forEach(async a=>{let i=I(a)&&a(e,t,n,o);i&&I(i.then)&&(i=await i,Gt()),I(i)&&(T.call(e,ft)?e[ft].push(i):e[ft]=[i])},[])})}function qe(e,t,n,o,r,a,i){if(o===r)return;let c=gn(n);c&&typeof o==typeof r||(c?r?qi(e,t,n,i):xr(e,n):(Ht(e,n,r),a&&bt(e,r,s=>Ht(e,n,s))))}function Ht(e,t,n){if(n==null&&(n=""),I(n))return Ht(e,t,n());Ri(e,t)?e[t]=n:!n&&n!==0?e.removeAttribute(t):e.setAttribute(t,n===!0?"":n)}function Ri(e,t){return!(e instanceof SVGElement)&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="width"&&t!=="height"&&t in e}function xr(e,t){e.removeEventListener(t.slice(2),e[Hn])}function qi(e,t,n,o){e.addEventListener(n.slice(2),e[Hn]||(e[Hn]=Li(e,t,o)))}function Li(e,...t){return{handleEvent:n=>Qn(e[gt]["on"+n.type],n,e,...t)}}function Qn(e,t,...n){if(Array.isArray(e))return e.forEach(r=>Qn(r,t,...n));let o=I(e)?e.call(t.currentTarget,t,...n):I(e.handleEvent)&&e.handleEvent(t,...n);if(t.redraw===!1){delete t.redraw;return}!oe(o)&&!oe(e)&&Gt(),o&&I(o.then)&&o.then(Gt)}function kr(e,t,n){if(n)return e&&(n.insertBefore(t,e),Me(e,n)),t}function Mi(e,t,n,o,r){let a=gr(e);if(!a||e===a)return N(e);let i=N(a);if(e=N(e),!e)return i;do e=Me(e,t,n,o,r);while(e&&e!==i);return i}function jt(e,t){Ut(t),e.removeChild(t)}function Ut(e){T.call(e,le)&&e[le].cut(),T.call(e,ht)&&e[ht].forEach(t=>t())}function Me(e,t,n=!0,o=[],r=!1){let a=e.nextSibling;if(Te.has(e))return a;if(e.nodeType===8)if(e.data.charCodeAt(0)===97){if(a=N(e),jt(t,e),!a)return a;e=a,a=N(e)}else e.data.charCodeAt(0)===91&&(a=Mi(e,t,n,o,r));if(e.nodeType!==1)return n?jt(t,e):Ut(e),a;if(T.call(e,ft))for(let c of e[ft])try{let s=c(r||n);(r||n)&&s&&I(s.then)&&o.push(s)}catch(s){console.error(s)}!r&&(r=e[Vn]||!1);let i=e.firstChild;for(;i;)Me(i,e,!1,o,r),i=N(i);return n?o.length===0?jt(t,e):(Te.add(e),Promise.all(o.map(c=>c.catch(console.error))).then(()=>jt(t,e))):Ut(e),a}function ji(e=[],...t){return d.css`
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
  `,d.css(e,...t)}function Kt(e){return new Proxy(e,{get:(t,n)=>e[n],set:(t,n,o)=>n===Le&&e!==o?e=o:!0})}var ze=Symbol("sinewy-menu");var Ir=Symbol("dropdown-indicator"),$r=Symbol("dropdown-radio-group"),Sr=Symbol("sinewy-ids"),zr="--sinewy-dropdown-fit-block",Pr="--sinewy-dropdown-fit-inline",Bi=['[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]'].join(",");d.css([`
  @position-try ${zr} {
    align-self: stretch;
    height: stretch;
  }

  @position-try ${Pr} {
    justify-self: stretch;
    width: stretch;
  }
`]);var J=d(({id:e,defaultOpen:t=!1},[],n)=>{let o=e||jr(n),r=Xt(t,n),a={name:"Dropdown",prefix:"dropdown",id:o,triggerId:o+"-trigger",contentId:o+"-content",anchorName:Br(o),trigger:void 0,content:void 0,open:!1,renderOpen:t,openState:r,openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!0,dir:"ltr",openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,pointerGrace:void 0,onbeforeopenchange:void 0,onopenchange:void 0},i=Object.create(n);return i[ze]=a,a.root=a,n.onremove(()=>{clearTimeout(a.searchTimer),cancelAnimationFrame(a.reconcileFrame)}),({loop:c=!0,dir:s="ltr",open:l,bind:p,onbeforeopenchange:h,onopenchange:u},f,m)=>(a.loop=c,a.dir=s,a.controlledOpen=l,a.openBind=p,a.onbeforeopenchange=h,a.onopenchange=u,Zt(r,p,m),a.renderOpen=Je(a),_t(a),d({context:i},()=>f))});J.Trigger=d(({as:e,disabled:t=!1,dom:n,onclick:o,onkeydown:r,...a},i,c)=>{let s=xe(c,"trigger");return Nr(e,"button",{...a,id:s.triggerId,type:e?a.type:a.type||"button",disabled:t,popovertarget:s.contentId,popovertargetaction:"toggle","aria-haspopup":"menu","aria-controls":s.contentId,"aria-expanded":String(s.renderOpen),"aria-disabled":String(t),style:{"anchor-name":s.anchorName,...a.style},data:{...a.data,disabled:t?"":null,state:s.renderOpen?"open":"closed"},dom:ao([l=>to(s,"trigger",l),...tn(n)]),onclick:(l,p,h,u)=>{if(t){l.preventDefault();return}let f="popoverTargetElement"in p;if(_(o,l,p,h,u),l.defaultPrevented||f){f&&!o&&(l.redraw=!1);return}l.preventDefault(),s.content.matches(":popover-open")?Pe(s):s.content.showPopover({source:p})},onkeydown:(l,p,h,u)=>{if(t){l.preventDefault();return}_(r,l,p,h,u),!(l.defaultPrevented||!["Enter"," ","ArrowDown","ArrowUp"].includes(l.key))&&(l.preventDefault(),s.openFocus=l.key==="ArrowUp"?"last":"first",s.content.matches(":popover-open")?Jt(s,s.openFocus):s.content.showPopover())}},i)});J.Content=d(({},[],e)=>{let t=xe(e,"content");return(n,o,r)=>Or(t,n,o,r)});J.Item=d(({},[],e)=>{let t=xe(e,"item");return(n,o,r)=>Yt(t,n,o,r)});J.Checkbox=d(({defaultChecked:e=!1},[],t)=>{let n=xe(t,"checkbox"),o=Xt(e,t),r=d.live(Tr(e));return({checked:a,defaultChecked:i,bind:c,oncheckedchange:s,...l},p,h)=>{Zt(o,c,h);let u=Tr(ro(o,c,a));r(u);let f=Lr(h,r);return Yt(n,{...l,role:"menuitemcheckbox","aria-checked":u==="indeterminate"?"mixed":String(u),data:{...l.data,state:io(u)},onactivate:m=>{let g=u==="indeterminate"||!u;qr(o,c,a,g,h),s&&s(g,m)}},d({context:f},()=>p),h)}});J.RadioGroup=d(({defaultValue:e},[],t)=>{xe(t,"radioGroup");let n=Xt(e,t),o={},r=Object.create(t);return r[$r]=o,({value:a,defaultValue:i,bind:c,onvaluechange:s,ariaLabel:l,...p},h,u)=>(Zt(n,c,u),Object.assign(o,{local:n,bind:c,controlled:a,onvaluechange:s,context:u}),d`div`({...p,role:"group","aria-label":p["aria-label"]||l},d({context:r},()=>h)))});J.Radio=d(({},[],e)=>{let t=xe(e,"radio"),n=e[$r],o=d.live(!1);if(!n)throw new Error(t.name+".Radio must be used inside "+t.name+".RadioGroup");return({value:r,...a},i,c)=>{let l=ro(n.local,n.bind,n.controlled)===r;o(l);let p=Lr(c,o);return Yt(t,{...a,role:"menuitemradio","aria-checked":String(l),data:{...a.data,state:io(l)},onactivate:h=>{l||(qr(n.local,n.bind,n.controlled,r,n.context),n.onvaluechange&&n.onvaluechange(r,h))}},d({context:p},()=>i),c)}});J.Sub=d(({id:e,defaultOpen:t=!1},[],n)=>{let o=xe(n,"sub"),r=e||jr(n,o.prefix),a=Xt(t,n),i={name:o.name,prefix:o.prefix,id:r,triggerId:r+"-trigger",contentId:r+"-content",anchorName:Br(r),trigger:void 0,content:void 0,open:!1,renderOpen:t,openState:a,openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!0,dir:o.dir,openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,openTimer:void 0,closeTimer:void 0,pointerGrace:void 0,openDelay:100,closeDelay:300,onbeforeopenchange:void 0,onopenchange:void 0,parent:o,root:o.root},c=Object.create(n);return c[ze]=i,n.onremove(()=>{clearTimeout(i.searchTimer),clearTimeout(i.openTimer),clearTimeout(i.closeTimer),cancelAnimationFrame(i.reconcileFrame)}),({loop:s=!0,dir:l=o.dir,open:p,bind:h,onbeforeopenchange:u,onopenchange:f,openDelay:m=100,closeDelay:g=300},b,w)=>(i.loop=s,i.dir=l,i.openDelay=m,i.closeDelay=g,i.controlledOpen=p,i.openBind=h,i.onbeforeopenchange=u,i.onopenchange=f,Zt(a,h,w),i.renderOpen=Je(i),_t(i),d({context:c},()=>b))});J.SubTrigger=d(({as:e,disabled:t=!1,dom:n,onclick:o,onkeydown:r,onpointermove:a,onpointerleave:i,...c},s,l)=>{let p=xe(l,"subtrigger");return Yt(p.parent,{...c,as:e,disabled:t,id:p.triggerId,style:{"anchor-name":p.anchorName,...c.style},dom:ao([h=>to(p,"trigger",h),...tn(n)]),popovertarget:p.contentId,popovertargetaction:"toggle","aria-haspopup":"menu","aria-controls":p.contentId,"aria-expanded":String(p.renderOpen),data:{...c.data,state:p.renderOpen?"open":"closed"},onclick:(h,u,f,m)=>{Dr(p);let g="popoverTargetElement"in u;if(_(o,h,u,f,m),h.defaultPrevented||t||g){g&&!o&&(h.redraw=!1);return}h.preventDefault(),p.content.matches(":popover-open")?Pe(p):p.content.showPopover({source:u})},onkeydown:(h,u,f,m)=>{Dr(p),_(r,h,u,f,m),!(h.defaultPrevented||t||h.key!==_i(p))&&(h.preventDefault(),p.openFocus="first",p.content.matches(":popover-open")?Jt(p,"first"):p.content.showPopover())},onpointermove:(h,u,f,m)=>{_(a,h,u,f,m),!(h.defaultPrevented||t||p.open||p.openTimer)&&(clearTimeout(p.closeTimer),p.openTimer=setTimeout(()=>{p.openTimer=void 0,p.content.matches(":popover-open")||(p.openFocus="none",p.content.showPopover({source:u}))},p.openDelay))},onpointerleave:(h,u,f,m)=>{_(i,h,u,f,m),h.defaultPrevented||(Hi(p,h),Mr(p))},closeOnSelect:!1,invokeSelect:!1},s,l)});J.SubContent=d(({},[],e)=>{let t=xe(e,"subcontent");if(!t.parent)throw new Error(t.name+".SubContent must be used inside "+t.name+".Sub");return({onpointerenter:n,onpointerleave:o,...r},a,i)=>Or(t,{...r,onpointerenter:(c,s,l,p)=>{clearTimeout(t.closeTimer),t.closeTimer=void 0,en(t.parent,t),_(n,c,s,l,p)},onpointerleave:(c,s,l,p)=>{_(o,c,s,l,p),c.defaultPrevented||Mr(t)}},a,i)});J.Indicator=d(({},[],e)=>{let t=e[ze],n=e[Ir];if(!n)throw new Error((t?t.name:"Dropdown")+".Indicator must be used inside a Checkbox or Radio");let o=n.selection.observe(e.redraw);return e.onremove(o),({forceMount:r=!1,...a},i)=>{let c=n.selection();return r||c!==!1?d`span`({...a,"aria-hidden":a["aria-hidden"]==null?"true":a["aria-hidden"],data:{...a.data,state:io(c)}},i):null}});function Yt(e,{as:t,disabled:n=!1,dom:o,onclick:r,onfocus:a,onpointermove:i,onselect:c,onactivate:s,closeOnSelect:l=!0,invokeSelect:p=!0,role:h="menuitem",textValue:u,...f},m,g){return Nr(t,"button",{...f,type:t?f.type:f.type||"button",role:h,tabIndex:-1,"aria-disabled":String(n),data:{...f.data,disabled:n?"":null,textValue:u||null},dom:o,onclick:(b,w,k,v)=>{if(n){b.preventDefault();return}_(r,b,w,k,v),!b.defaultPrevented&&(p&&c&&c(b,w),s&&s(b,w),l&&!b.defaultPrevented&&Pe(e.root))},onfocus:(b,w,k,v)=>{_(a,b,w,k,v),b.defaultPrevented||Er(e,w)},onpointermove:(b,w,k,v)=>{_(i,b,w,k,v),n||b.defaultPrevented||Ui(e,b)||Wt(e,w)}},m)}J.Group=d(({ariaLabel:e,...t},n)=>d`div`({...t,role:"group","aria-label":t["aria-label"]||e},n));J.Label=d((e,t)=>d`div`(e,t));J.Separator=d((e,t)=>d`div`({...e,role:"separator"},t));var z=J;function Ni(e,t){to(e,"content",t),_t(e)}function to(e,t,n){import.meta.dev&&e[t]&&e[t]!==n&&e[t].isConnected&&console.warn(e.name+"."+Rr(t)+" should only be rendered once per "+e.name+" state scope"),e[t]=n}function Or(e,{dom:t,onbeforetoggle:n,ontoggle:o,onkeydown:r,side:a=e.parent?"right":"bottom",align:i="start",offset:c=0,alignOffset:s=0,avoidCollisions:l=!0,collisionStrategy:p="preferred",loop:h=e.loop,...u},f,m){return d`div
    position fixed
    inset auto
    margin 0
  `({...u,id:e.contentId,popover:"auto",role:"menu",dir:u.dir||e.dir,style:{"position-anchor":e.anchorName,...Wi(a,i,c,s,l,p,e.dir),...u.style},"aria-labelledby":u["aria-labelledby"]||e.triggerId,data:{...u.data,state:e.renderOpen?"open":"closed",side:a,align:i},dom:ao([g=>Ni(e,g),...tn(t)]),onbeforetoggle:e.onbeforeopenchange||n?(g,b,w,k)=>{let v=g.newState==="open";e.onbeforeopenchange&&e.onbeforeopenchange(v,g),_(n,g,b,w,k)}:void 0,ontoggle:(g,b,w,k)=>{let v=g.newState==="open",D=e.reconcileTo===v;if(D&&(e.reconcileTo=void 0),e.open=v,e.renderOpen=Je(e),e.trigger&&(e.trigger.ariaExpanded=String(v)),e.trigger&&(e.trigger.dataset.state=v?"open":"closed"),b.dataset.state=v?"open":"closed",_(o,g,b,w,k),D||(Qt(e.openBind)?e.openBind(v):e.controlledOpen===void 0&&(e.openState.value=v),e.onopenchange&&e.onopenchange(v,g),e.renderOpen=Je(e),_t(e)),v)Cr(e),e.openFocus!=="none"&&Jt(e,e.openFocus),e.openFocus="first";else{e.parent&&en(e.parent,e),Cr(e),Gi(e);let y=e.restoreFocus;e.restoreFocus=!0,requestAnimationFrame(()=>{y&&!e.open&&(b.contains(document.activeElement)||document.activeElement===document.body)&&e.trigger&&e.trigger.focus()})}},onkeydown:(g,b,w,k)=>{if(_(r,g,b,w,k),!g.defaultPrevented){if(e.parent&&g.key===Ji(e)){g.preventDefault(),g.stopPropagation(),Pe(e);return}if(e.parent&&g.key==="Escape"){g.preventDefault(),g.stopPropagation(),Pe(e);return}Fi(e,g,h)}}},f)}function Je(e){return!!ro(e.openState,e.openBind,e.controlledOpen)}function _t(e){if(!e.content)return;let t=Je(e),n=e.content.matches(":popover-open");t!==n&&(cancelAnimationFrame(e.reconcileFrame),e.reconcileFrame=requestAnimationFrame(()=>{if(!e.content||!e.content.isConnected)return;let o=Je(e),r=e.content.matches(":popover-open");o!==r&&(e.reconcileTo=o,o?e.content.showPopover():e.content.hidePopover())}))}function Fi(e,t,n){let o=no(e),r=o.indexOf(document.activeElement);if(t.key==="Tab"){e.root.restoreFocus=!1,Pe(e.root,!1);return}if(t.key==="Escape"){t.preventDefault(),Pe(e);return}if(t.key==="Enter"||t.key===" "){if(r===-1)return;t.preventDefault(),o[r].click();return}if(t.key==="ArrowDown"||t.key==="ArrowUp"){if(t.preventDefault(),!o.length)return;let l=t.key==="ArrowDown"?1:-1,p=r===-1?l===1?0:o.length-1:r+l;n?p=(p+o.length)%o.length:p=Math.max(0,Math.min(o.length-1,p)),Wt(e,o[p]);return}if(t.key==="Home"||t.key==="End"){t.preventDefault(),Jt(e,t.key==="Home"?"first":"last");return}if(t.key.length!==1||t.key===" "||t.metaKey||t.ctrlKey||t.altKey)return;t.preventDefault(),clearTimeout(e.searchTimer),e.search+=t.key.toLocaleLowerCase(),e.searchTimer=setTimeout(()=>e.search="",500);let i=Array.from(e.search).every(l=>l===e.search[0])?e.search[0]:e.search,s=o.slice(r+1).concat(o.slice(0,r+1)).find(l=>Vi(l).startsWith(i));s&&Wt(e,s)}function Pe(e,t=!0){e.restoreFocus=t,e.parent&&en(e.parent,e),e.content.matches(":popover-open")&&e.content.hidePopover()}function no(e){return oo(e).filter(t=>t.getAttribute("aria-disabled")!=="true")}function oo(e){return e.content?Array.from(e.content.querySelectorAll(Bi)).filter(t=>t.closest('[role="menu"]')===e.content):[]}function Jt(e,t){let n=no(e);Wt(e,t==="last"?n.at(-1):n[0])}function Wt(e,t){t&&(no(e).forEach(n=>n.tabIndex=n===t?0:-1),Er(e,t),t.focus({preventScroll:!0}))}function Er(e,t){oo(e).forEach(n=>{n.toggleAttribute("data-highlighted",n===t)}),e.activeItem=t}function Gi(e){oo(e).forEach(t=>t.removeAttribute("data-highlighted")),e.activeItem=void 0}function Cr(e){clearTimeout(e.searchTimer),e.search=""}function Vi(e){return(e.dataset.textValue||e.textContent).trim().toLocaleLowerCase()}function Rr(e){return{trigger:"Trigger",content:"Content",item:"Item",checkbox:"Checkbox",radioGroup:"RadioGroup",radio:"Radio",indicator:"Indicator",group:"Group",label:"Label",separator:"Separator",sub:"Sub",subtrigger:"SubTrigger",subcontent:"SubContent"}[e]||e}function xe(e,t){let n=e[ze];if(!n)throw new Error(Rr(t)+" must be used inside a menu root");return n}function Xt(e,t){let n={value:e,binding:void 0,unobserve:void 0};return t.onremove(()=>n.unobserve&&n.unobserve()),n}function Zt(e,t,n){e.binding!==t&&(e.unobserve&&e.unobserve(),e.binding=t,e.unobserve=Qt(t)?t.observe(n.redraw):void 0)}function ro(e,t,n){return Qt(t)?t():n===void 0?e.value:n}function qr(e,t,n,o,r){Qt(t)?t(o):n===void 0&&(e.value=o,r.redraw())}function Lr(e,t){let n=Object.create(e);return n[Ir]={selection:t},n}function Tr(e){return e==="indeterminate"?e:!!e}function io(e){return e==="indeterminate"?e:e?"checked":"unchecked"}function Qt(e){return typeof e=="function"&&typeof e.observe=="function"}function Mr(e){clearTimeout(e.openTimer),clearTimeout(e.closeTimer),e.openTimer=void 0,e.closeTimer=setTimeout(()=>{e.closeTimer=void 0,e.content.matches(":popover-open")&&Pe(e)},e.closeDelay)}function Dr(e){clearTimeout(e.openTimer),clearTimeout(e.closeTimer),e.openTimer=e.closeTimer=void 0,en(e.parent,e)}function Hi(e,t){if(!e.parent||!e.content||!e.content.matches(":popover-open"))return;let n=e.content.getBoundingClientRect(),o={x:t.clientX,y:t.clientY},r=5,i=[{distance:Math.abs(o.x-n.left),points:[{x:n.left,y:n.top-r},{x:n.left,y:n.bottom+r}]},{distance:Math.abs(o.x-n.right),points:[{x:n.right,y:n.top-r},{x:n.right,y:n.bottom+r}]},{distance:Math.abs(o.y-n.top),points:[{x:n.left-r,y:n.top},{x:n.right+r,y:n.top}]},{distance:Math.abs(o.y-n.bottom),points:[{x:n.left-r,y:n.bottom},{x:n.right+r,y:n.bottom}]}].sort((c,s)=>c.distance-s.distance)[0];e.parent.pointerGrace={owner:e,triangle:[o,...i.points]}}function Ui(e,t){let n=e.pointerGrace;if(!n)return!1;if(!n.owner.content||!n.owner.content.matches(":popover-open"))return e.pointerGrace=void 0,!1;let o=Ki({x:t.clientX,y:t.clientY},...n.triangle);return o||(e.pointerGrace=void 0),o}function en(e,t){e&&(!t||e.pointerGrace&&e.pointerGrace.owner===t)&&(e.pointerGrace=void 0)}function Ki(e,t,n,o){let r=eo(e,t,n),a=eo(e,n,o),i=eo(e,o,t),c=r<0||a<0||i<0,s=r>0||a>0||i>0;return!(c&&s)}function eo(e,t,n){return(e.x-n.x)*(t.y-n.y)-(t.x-n.x)*(e.y-n.y)}function Wi(e,t,n,o,r,a,i){let c=e==="top"||e==="bottom",s={top:"block-start",right:"inline-end",bottom:"block-end",left:"inline-start"}[e]||"block-end",l=t==="center"?"":" span-"+(c?"inline-":"block-")+(t==="end"?"start":"end"),p={top:"margin-block-end",right:"margin-inline-start",bottom:"margin-block-start",left:"margin-inline-end"}[e]||"margin-block-start",h=c?"margin-inline-start":"margin-block-start",u=c?zr:Pr,f=["flip-block","flip-inline","flip-block flip-inline",u,u+" flip-block",u+" flip-inline",u+" flip-block flip-inline"].join(", ");return{"position-area":s+l,"position-try-fallbacks":r?f:"none","position-try-order":r&&a==="most-space"?c?"most-block-size":"most-inline-size":"normal",[p]:Ar(n),[h]:Ar(o),"--sinewy-trigger-width":"anchor-size(width)","--sinewy-trigger-height":"anchor-size(height)","--sinewy-transform-origin":Yi(e,t,i)}}function Yi(e,t,n){let a=t==="center"?"center":t==="end"?n==="rtl"?"left":"right":n==="rtl"?"right":"left",i=t==="center"?"center":t==="end"?"bottom":"top";return e==="top"?a+" bottom":e==="bottom"?a+" top":e==="left"?"right "+i:"left "+i}function Ar(e){return typeof e=="number"?e+"px":e}function _i(e){return e.dir==="rtl"?"ArrowLeft":"ArrowRight"}function Ji(e){return e.dir==="rtl"?"ArrowRight":"ArrowLeft"}function jr(e,t="dropdown"){let n=e,o;for(;(o=Object.getPrototypeOf(n))&&o!==Object.prototype;)n=o;let r=n[Sr]||(n[Sr]={value:0});return"sinewy-"+t+"-"+ ++r.value}function Br(e){return"--"+e.replace(/[^a-zA-Z0-9_-]/g,"-")+"-anchor"}function ao(e){return e.filter(Boolean)}function tn(e){return e==null?[]:Array.isArray(e)?e:[e]}function _(e,t,...n){tn(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function Nr(e,t,n,o){return e?e(n,o):d(t,n,o)}var Fr=Symbol("sinewy-context-menu-ids"),Xi=700,Zi=['[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]'].join(","),X=d(({id:e},[],t)=>{let n=e||ca(t),o={name:"ContextMenu",prefix:"context-menu",id:n,triggerId:n+"-trigger",contentId:n+"-content",anchorName:sa(n),trigger:void 0,content:void 0,anchor:void 0,open:!1,renderOpen:!1,openState:{value:!1},openBind:void 0,controlledOpen:void 0,reconcileFrame:void 0,reconcileTo:void 0,loop:!1,dir:"ltr",openFocus:"first",restoreFocus:!0,search:"",searchTimer:void 0,pointerGrace:void 0,pointerDown:void 0,pointerCleanup:void 0,pendingOpen:void 0,longPressTimer:void 0,onbeforeopenchange:void 0,onopenchange:void 0},r=Object.create(t);return r[ze]=o,o.root=o,t.onremove(()=>{clearTimeout(o.searchTimer),cancelAnimationFrame(o.reconcileFrame),o.pointerCleanup&&o.pointerCleanup(),o.pendingOpen&&o.pendingOpen(),Be(o),o.anchor&&o.anchor.remove()}),({loop:a=!1,dir:i="ltr",onbeforeopenchange:c,onopenchange:s},l)=>(o.loop=a,o.dir=i,o.onbeforeopenchange=c,o.onopenchange=s,o.renderOpen=o.openState.value,d({context:r},()=>l))});X.Trigger=d(({as:e,disabled:t=!1,dom:n,oncontextmenu:o,onkeydown:r,...a},i,c)=>{let s=Qi(c,"Trigger");return pa(e,"div",{...a,id:s.triggerId,tabIndex:e?a.tabIndex:a.tabIndex==null?0:a.tabIndex,disabled:e&&t||void 0,"aria-haspopup":"menu","aria-controls":s.contentId,"aria-expanded":String(s.renderOpen),"aria-disabled":String(t),style:da(a.style,t),data:{...a.data,disabled:t?"":null,state:s.renderOpen?"open":"closed"},dom:la([l=>ea(s,l),...Yr(n)]),oncontextmenu:(l,p,h,u)=>{Vr(o,l,p,h,u),Be(s),!(t||l.defaultPrevented||!s.content)&&Gr(s,l,p,ta(l,p,s.dir),!0)},onkeydown:(l,p,h,u)=>{Vr(r,l,p,h,u),!(!na(l)||t||l.defaultPrevented||!s.content)&&(Be(s),Gr(s,l,p,Hr(p,s.dir),!1))}},i)});X.Content=z.Content;X.Item=z.Item;X.Checkbox=z.Checkbox;X.RadioGroup=z.RadioGroup;X.Radio=z.Radio;X.Indicator=z.Indicator;X.Group=z.Group;X.Label=z.Label;X.Separator=z.Separator;X.Sub=z.Sub;X.SubTrigger=z.SubTrigger;X.SubContent=z.SubContent;function Qi(e,t){let n=e[ze];if(!n||n.name!=="ContextMenu")throw new Error("ContextMenu."+t+" must be used inside ContextMenu");return n}function ea(e,t){import.meta.dev&&e.trigger&&e.trigger!==t&&e.trigger.isConnected&&console.warn("ContextMenu.Trigger should only be rendered once per ContextMenu state scope"),e.trigger=t;let n=o=>oa(e,o);return t.addEventListener("pointerdown",n,!0),()=>{t.removeEventListener("pointerdown",n,!0),e.pointerCleanup&&e.pointerCleanup()}}function ta(e,t,n){return e.clientX!==0||e.clientY!==0||e.button===2||e.pointerType?{x:e.clientX,y:e.clientY}:Hr(t,n)}function Hr(e,t){let n=e.getBoundingClientRect();return{x:t==="rtl"?n.right:n.left,y:n.bottom}}function na(e){return e.key==="ContextMenu"||e.key==="F10"&&e.shiftKey}function Gr(e,t,n,o,r){t.preventDefault(),Ur(e,n.ownerDocument,o.x,o.y),e.openFocus="first",e.restoreFocus=!0,e.pendingOpen&&e.pendingOpen(),r&&e.pointerDown?Wr(e,n,e.pointerDown):Kr(e,n)}function Ur(e,t,n,o){let r=e.anchor||ia(e,t);r.style.left=n+"px",r.style.top=o+"px"}function Kr(e,t){!e.content||!t.isConnected||(e.content.matches(":popover-open")?aa(e.content):e.content.showPopover({source:t}))}function Wr(e,t,n){let o=t.ownerDocument,{button:r,pointerId:a}=n,i,c=()=>{o.removeEventListener("pointerup",p,!0),o.removeEventListener("mouseup",p,!0),o.removeEventListener("pointercancel",h,!0)},s=()=>{c(),cancelAnimationFrame(i),e.pendingOpen===s&&(e.pendingOpen=void 0)},l=u=>a==null||u.pointerId==null||u.pointerId===a,p=u=>{u.button!==r||!l(u)||(e.pointerCleanup&&e.pointerCleanup(),c(),i=requestAnimationFrame(()=>{e.pendingOpen===s&&(e.pendingOpen=void 0),Kr(e,t)}))},h=u=>{l(u)&&s()};o.addEventListener("pointerup",p,!0),o.addEventListener("mouseup",p,!0),o.addEventListener("pointercancel",h,!0),e.pendingOpen=s}function oa(e,t){e.pointerCleanup&&e.pointerCleanup();let n=t.currentTarget.ownerDocument,o=e.pointerDown={button:t.button,pointerId:t.pointerId,pointerType:t.pointerType,x:t.clientX,y:t.clientY},r=o.pointerType&&o.pointerType!=="mouse",a=s=>{s.pointerId===o.pointerId&&(n.removeEventListener("pointerup",a,!0),n.removeEventListener("pointercancel",a,!0),n.removeEventListener("pointermove",i,!0),Be(e),e.pointerDown===o&&(e.pointerDown=void 0),e.pointerCleanup===c&&(e.pointerCleanup=void 0))},i=s=>{r&&s.pointerId===o.pointerId&&Be(e)},c=()=>{n.removeEventListener("pointerup",a,!0),n.removeEventListener("pointercancel",a,!0),n.removeEventListener("pointermove",i,!0),Be(e),e.pointerDown===o&&(e.pointerDown=void 0),e.pointerCleanup===c&&(e.pointerCleanup=void 0)};n.addEventListener("pointerup",a,!0),n.addEventListener("pointercancel",a,!0),n.addEventListener("pointermove",i,!0),e.pointerCleanup=c,r&&t.currentTarget.getAttribute("aria-disabled")!=="true"&&ra(e,t.currentTarget,o)}function ra(e,t,n){Be(e),e.content&&e.content.matches(":popover-open")&&e.content.hidePopover(),e.longPressTimer=setTimeout(()=>{e.longPressTimer=void 0,!(e.pointerDown!==n||!e.content)&&(Ur(e,t.ownerDocument,n.x,n.y),e.openFocus="first",e.restoreFocus=!0,e.pendingOpen&&e.pendingOpen(),Wr(e,t,n))},Xi)}function Be(e){clearTimeout(e.longPressTimer),e.longPressTimer=void 0}function da(e,t){return t?e:e&&typeof e=="object"?{"-webkit-touch-callout":"none",...e}:"-webkit-touch-callout:none;"+(e||"")}function ia(e,t){let n=t.createElement("span");return n.setAttribute("aria-hidden","true"),n.setAttribute("data-sinewy-context-anchor",""),n.style.position="fixed",n.style.inset="auto",n.style.width="0",n.style.height="0",n.style.pointerEvents="none",n.style.setProperty("anchor-name",e.anchorName),t.body.insertBefore(n,t.body.firstChild),e.anchor=n,n}function aa(e){let t=Array.from(e.querySelectorAll(Zi)).find(n=>n.closest('[role="menu"]')===e&&n.getAttribute("aria-disabled")!=="true");t&&t.focus({preventScroll:!0})}function ca(e){let t=e,n;for(;(n=Object.getPrototypeOf(t))&&n!==Object.prototype;)t=n;let o=t[Fr]||(t[Fr]={value:0});return"sinewy-context-menu-"+ ++o.value}function sa(e){return"--"+e.replace(/[^a-zA-Z0-9_-]/g,"-")+"-anchor"}function la(e){return e.filter(Boolean)}function Yr(e){return e==null?[]:Array.isArray(e)?e:[e]}function Vr(e,t,...n){Yr(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function pa(e,t,n,o){return e?e(n,o):d(t,n,o)}var Xe=X;function ke(e){return e`
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
  `}var _r={gray:["#fcfcfc #111111","#f9f9f9 #191919","#f0f0f0 #222222","#e8e8e8 #2a2a2a","#e0e0e0 #313131","#d9d9d9 #3a3a3a","#cecece #484848","#bbbbbb #606060","#8d8d8d #6e6e6e","#838383 #7b7b7b","#646464 #b4b4b4","#202020 #eeeeee"],indigo:["#fdfdfe #11131f","#f7f9ff #141726","#edf2fe #182449","#e1e9ff #1d2e62","#d2deff #253974","#c1d0ff #304384","#abbdf9 #3a4f97","#8da4ef #435db1","#3e63dd #3e63dd","#3358d4 #5472e4","#3a5bc7 #9eb1ff","#1f2d5c #d6e1ff"],blue:["#fbfdff #0d1520","#f4faff #111927","#e6f4fe #0d2847","#d5efff #003362","#c2e5ff #004074","#acd8fc #104d87","#8ec8f6 #205d9e","#5eb1ef #2870bd","#0090ff #0090ff","#0588f0 #3b9eff","#0d74ce #70b8ff","#113264 #c2e6ff"],cyan:["#fafdfe #0b161a","#f2fafb #101b20","#def7f9 #082c36","#caf1f6 #003848","#b5e9f0 #004558","#9ddde7 #045468","#7dcedc #12677e","#3db9cf #11809c","#00a2c7 #00a2c7","#0797b9 #23afd0","#107d98 #4ccce6","#0d3c48 #b6ecf7"],teal:["#fafefd #0d1514","#f3fbf9 #111c1b","#e0f8f3 #0d2d2a","#ccf3ea #023b37","#b8eae0 #084843","#a1ded2 #145750","#83cdc1 #1c6961","#53b9ab #207e73","#12a594 #12a594","#0d9b8a #0eb39e","#008573 #0bd8b6","#0d3d38 #adf0dd"],green:["#fbfefc #0e1512","#f4fbf6 #121b17","#e6f6eb #132d21","#d6f1df #113b29","#c4e8d1 #174933","#adddc0 #20573e","#8eceaa #28684a","#5bb98b #2f7c57","#30a46c #30a46c","#2b9a66 #33b074","#218358 #3dd68c","#193b2d #b1f1cb"],amber:["#fefdfb #16120c","#fefbe9 #1d180f","#fff7c2 #302008","#ffee9c #3f2700","#fbe577 #4d3000","#f3d673 #5c3d05","#e9c162 #714f19","#e2a336 #8f6424","#ffc53d #ffc53d","#ffba18 #ffd60a","#ab6400 #ffca16","#4f3422 #ffe7b3"],orange:["#fefcfb #17120e","#fff7ed #1e160f","#ffefd6 #331e0b","#ffdfb5 #462100","#ffd19a #562800","#ffc182 #66350c","#f5ae73 #7e451d","#ec9455 #a35829","#f76b15 #f76b15","#ef5f00 #ff801f","#cc4e00 #ffa057","#582d1d #ffe0c2"],red:["#fffcfc #191111","#fff7f7 #201314","#feebec #3b1219","#ffdbdc #500f1c","#ffcdce #611623","#fdbdbe #72232d","#f4a9aa #8c333a","#eb8e90 #b54548","#e5484d #e5484d","#dc3e42 #ec5d5e","#ce2c31 #ff9592","#641723 #ffd1d9"],crimson:["#fffcfd #191114","#fef7f9 #201318","#ffe9f0 #381525","#fedce7 #4d122f","#facedd #5c1839","#f3bed1 #6d2545","#eaacc3 #873356","#e093b2 #b0436e","#e93d82 #e93d82","#df3478 #ee518a","#cb1d63 #ff92ad","#621639 #fdd3e8"],pink:["#fffcfe #191117","#fef7fb #21121d","#fee9f5 #37172f","#fbdcef #4b143d","#f6cee7 #591c47","#efbfdd #692955","#e7acd0 #833869","#dd93c2 #a84885","#d6409f #d6409f","#cf3897 #de51a8","#c2298a #ff8dcc","#651249 #fdd1ea"],purple:["#fefcfe #18111b","#fbf7fe #1e1523","#f7edfe #301c3b","#f2e2fc #3d224e","#ead5f9 #48295c","#e0c4f4 #54346b","#d1afec #664282","#be93e4 #8457aa","#8e4ec6 #8e4ec6","#8347b9 #9a5cd0","#8145b5 #d19dff","#402060 #ecd9fa"]},ua={accent:"indigo"},ha={amber:"#21201c"},fa=[1,2,3,4,7,8,9,10,11,12],Ps=Object.freeze(["gray","accent","red","orange","amber","green","teal","cyan","blue","indigo","purple","pink","crimson"]);function q(e,t){let n=ua[e]||e,o=_r[n];if(!o)return t;let r=Object.fromEntries(fa.map(a=>[`--sinewy-accent-${a}`,Jr(o[a-1])]));return r["--sinewy-accent-contrast"]=ha[n]||"white",r["--sinewy-panel"]="light-dark(#fff, #191919)",[1,2,3,4,6,7,8,9,11,12].forEach(a=>{r[`--sinewy-neutral-${a}`]=Jr(_r.gray[a-1])}),r["--sinewy-extreme"]="light-dark(#000, #fff)",{...r,...t}}function Jr(e){let[t,n]=e.split(" ");return`light-dark(${t}, ${n})`}function E(e,t){return{...e,...Object.fromEntries(Object.entries(t).map(([n,o])=>[n,o==null?null:typeof o=="boolean"?o?"":null:String(o)]))}}var ga=ke(d`button`),ma=d(({size:e="2",variant:t="solid",color:n="accent",highContrast:o=!1,type:r="button",data:a,style:i,...c},s)=>ga({...c,type:r,style:q(n,i),data:E(a,{size:e,variant:t,color:n,highContrast:o})},s));var Ze=ma;function Z(e,t){let n={value:e,binding:void 0,unobserve:void 0};return t.onremove(()=>n.unobserve&&n.unobserve()),n}function Q(e,t,n){e.binding!==t&&(e.unobserve&&e.unobserve(),e.binding=t,e.unobserve=co(t)?t.observe(n.redraw):void 0)}function G(e,t,n){return co(t)?t():n===void 0?e.value:n}function F(e,t,n,o,r){co(t)?t(o):n===void 0&&(e.value=o,r.redraw())}function W(e,t,...n){ba(e).forEach(o=>{typeof o=="function"?o.call(t.currentTarget,t,...n):o&&typeof o.handleEvent=="function"&&o.handleEvent(t,...n)})}function ba(e){return e==null?[]:Array.isArray(e)?e:[e]}function co(e){return typeof e=="function"&&typeof e.observe=="function"}var ya=ke(d`button`),va=d(({defaultPressed:e=!1},[],t)=>{let n=Z(!!e,t);return({pressed:o,defaultPressed:r,bind:a,onpressedchange:i,onclick:c,disabled:s=!1,size:l="2",variant:p="soft",color:h="accent",highContrast:u=!1,type:f="button",data:m,style:g,...b},w,k)=>{Q(n,a,k);let v=!!G(n,a,o);return ya({...b,type:f,disabled:s,"aria-pressed":String(v),style:q(h,g),data:E(m,{size:l,variant:p,color:h,highContrast:u,state:v?"on":"off"}),onclick:(D,y,P,R)=>{if(W(c,D,y,P,R),D.defaultPrevented||s)return;let K=!v;F(n,a,o,K,k),i&&i(K,D)}},w)}});var yt=va;var so=Symbol("sinewy-dialog");var Xr=Symbol("sinewy-dialog-ids"),wa=ke(d`button`),xa=ke(d`button`),ka=d`dialog
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
`,Sa=d`h2
  margin 0
  color $sinewy-neutral-12
  font-size 20
  font-weight 780
  line-height 1.2
  letter-spacing -0.02em
`,Ca=d`p
  margin 8px 0 0
  color $sinewy-neutral-11
  font-size 14
  line-height 1.55
`,Qe=d(({id:e,defaultOpen:t=!1},[],n)=>{let o=e||Ta(n),r=Z(!!t,n),a={id:o,contentId:o+"-content",titleId:o+"-title",descriptionId:o+"-description",content:void 0,trigger:void 0,local:r,bind:void 0,controlled:void 0,renderOpen:!!t,onopenchange:void 0,closing:!1},i=Object.create(n);return i[so]=a,({open:c,defaultOpen:s,bind:l,onopenchange:p},h,u)=>(a.bind=l,a.controlled=c,a.onopenchange=p,Q(r,l,u),a.renderOpen=!!G(r,l,c),lo(a),d({context:i},()=>h))});Qe.Trigger=d(({disabled:e=!1,dom:t,onclick:n,size:o="2",variant:r="solid",color:a="accent",highContrast:i=!1,type:c="button",data:s,style:l,...p},h,u)=>{let f=vt(u,"Trigger");return wa({...p,type:c,disabled:e,"aria-haspopup":"dialog","aria-controls":f.contentId,"aria-expanded":String(f.renderOpen),style:q(a,l),data:E(s,{size:o,variant:r,color:a,highContrast:i,state:f.renderOpen?"open":"closed"}),dom:[m=>f.trigger=m,...Zr(t)],onclick:(m,g,b,w)=>{W(n,m,g,b,w),!(m.defaultPrevented||e)&&nn(f,!0,m,u)}},h)});Qe.Content=d(({dom:e,oncancel:t,onclose:n,"aria-label":o,"aria-labelledby":r,"aria-describedby":a,size:i="2",color:c="accent",highContrast:s=!1,data:l,style:p,...h},u,f)=>{let m=vt(f,"Content");return ka({...h,id:m.contentId,"aria-label":o,"aria-labelledby":o?r:r||m.titleId,"aria-describedby":a===null?void 0:a||m.descriptionId,style:q(c,p),data:E(l,{size:i,color:c,highContrast:s,state:m.renderOpen?"open":"closed"}),dom:[g=>{m.content=g,queueMicrotask(()=>lo(m))},...Zr(e)],oncancel:(g,b,w,k)=>{W(t,g,b,w,k),!g.defaultPrevented&&(g.preventDefault(),nn(m,!1,g,f))},onclose:(g,b,w,k)=>{if(W(n,g,b,w,k),m.closing){m.closing=!1;return}m.renderOpen&&nn(m,!1,g,f)}},u)});Qe.Title=d((e,t,n)=>{let o=vt(n,"Title");return Sa({...e,id:e.id||o.titleId},t)});Qe.Description=d((e,t,n)=>{let o=vt(n,"Description");return Ca({...e,id:e.id||o.descriptionId},t)});Qe.Close=d(({disabled:e=!1,onclick:t,size:n="2",variant:o="soft",color:r="gray",highContrast:a=!1,type:i="button",data:c,style:s,...l},p,h)=>{let u=vt(h,"Close");return xa({...l,type:i,disabled:e,style:q(r,s),data:E(c,{size:n,variant:o,color:r,highContrast:a}),onclick:(f,m,g,b)=>{W(t,f,m,g,b),!(f.defaultPrevented||e)&&nn(u,!1,f,h)}},p)});function nn(e,t,n,o){t!==e.renderOpen&&(F(e.local,e.bind,e.controlled,t,o),e.renderOpen=!!G(e.local,e.bind,e.controlled),e.onopenchange&&e.onopenchange(t,n),queueMicrotask(()=>lo(e)))}function lo(e){let t=e.content;!t||!t.isConnected||(e.renderOpen&&!t.open?t.showModal():!e.renderOpen&&t.open&&(e.closing=!0,t.close()))}function vt(e,t){let n=e[so];if(!n)throw new Error("Dialog."+t+" must be used inside Dialog");return n}function Ta(e){let t=e,n;for(;(n=Object.getPrototypeOf(t))&&n!==Object.prototype;)t=n;let o=t[Xr]||(t[Xr]={value:0});return"sinewy-dialog-"+ ++o.value}function Zr(e){return e==null?[]:Array.isArray(e)?e:[e]}var U=Qe;var et=d((e,t)=>U(e,...t));et.Trigger=U.Trigger;et.Content=d((e,t)=>U.Content({...e,role:"alertdialog"},t));et.Title=U.Title;et.Description=U.Description;et.Close=U.Close;var Se=et;var Da=d`input
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
`,Aa=d(({defaultChecked:e=!1},[],t)=>{let n=Z(!!e,t),o={local:n,defaultChecked:!!e,bind:void 0,controlled:void 0};return({checked:r,defaultChecked:a,bind:i,oncheckedchange:c,onchange:s,dom:l,disabled:p=!1,size:h="2",color:u="accent",highContrast:f=!1,type:m,role:g,data:b,style:w,...k},[],v)=>{o.bind=i,o.controlled=r,Q(n,i,v);let D=!!G(n,i,r);return Da({...k,type:"checkbox",role:"switch",checked:D,disabled:p,style:q(u,w),data:E(b,{size:h,color:u,highContrast:f,state:D?"checked":"unchecked"}),dom:[y=>Ia(o,y,v),...$a(l)],onchange:(y,P,R,K)=>{W(s,y,P,R,K);let H=P.checked;F(n,i,r,H,v),c&&c(H,y),r!==void 0&&(P.checked=D)}})}});function Ia(e,t,n){t.defaultChecked=e.defaultChecked;let o=t.form;if(!o)return;let r=()=>queueMicrotask(()=>{let a=t.checked;F(e.local,e.bind,e.controlled,a,n),t.checked=!!G(e.local,e.bind,e.controlled),n.redraw()});return o.addEventListener("reset",r),()=>o.removeEventListener("reset",r)}function $a(e){return e==null?[]:Array.isArray(e)?e:[e]}var wt=Aa;var Qr=Symbol("sinewy-select"),za=d`select
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
`,Pa=d(({value:e="",selected:t,...n},o,r)=>{let a=r[Qr],i=String(e);return d`option`({...n,value:i,selected:a?.renderValue===void 0?t:a.renderValue===i},o)}),Oa=d`optgroup`,po=d(({defaultValue:e},[],t)=>{let n=e==null?void 0:String(e),o=Z(n,t),r={local:o,defaultValue:n,bind:void 0,controlled:void 0,renderValue:n},a=Object.create(t);return a[Qr]=r,({value:i,defaultValue:c,bind:s,onvaluechange:l,onchange:p,dom:h,multiple:u,disabled:f=!1,size:m="2",color:g="accent",highContrast:b=!1,data:w,style:k,...v},D,y)=>{let P=i==null?void 0:String(i);r.bind=s,r.controlled=P,Q(o,s,y);let R=ed(G(o,s,P));return r.renderValue=R,d({context:a},()=>za({...v,value:R,disabled:f,style:q(g,k),data:E(w,{size:m,color:g,highContrast:b}),dom:[K=>Ea(r,K,y),...Ra(h)],onchange:(K,H,Ee,ne)=>{W(p,K,H,Ee,ne);let ee=H.value;F(o,s,P,ee,y),l&&l(ee,K),P!==void 0&&(H.value=R)}},D))}});po.Option=Pa;po.Group=Oa;function Ea(e,t,n){if(e.defaultValue!==void 0)for(let a of t.options)a.defaultSelected=a.value===e.defaultValue;let o=t.form;if(!o)return;let r=()=>queueMicrotask(()=>{let a=t.value;F(e.local,e.bind,e.controlled,a,n);let i=ed(G(e.local,e.bind,e.controlled));i!==void 0&&(t.value=i),n.redraw()});return o.addEventListener("reset",r),()=>o.removeEventListener("reset",r)}function ed(e){return e==null?void 0:String(e)}function Ra(e){return e==null?[]:Array.isArray(e)?e:[e]}var Oe=po;var on=d`fieldset
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
`;var td=Symbol("sinewy-checkbox-group"),qa=d`input
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
`,nd=d(({defaultChecked:e=!1},[],t)=>{let n=Z(!!e,t),o={local:n,defaultChecked:!!e,bind:void 0,controlled:void 0};return({checked:r,defaultChecked:a,bind:i,oncheckedchange:c,onchange:s,dom:l,disabled:p=!1,size:h,color:u,highContrast:f,type:m,role:g,value:b="on",data:w,style:k,...v},[],D)=>{let y=D[td],P=h??y?.size??"2",R=u??y?.color??"accent",K=f??y?.highContrast??!1,H=String(b),Ee=y?void 0:r;o.bind=i,o.controlled=Ee,!y&&Q(n,i,D);let ne=y?y.renderValue.includes(H):!!G(n,i,r);return qa({...v,type:"checkbox",name:y?.name??v.name,value:H,checked:ne,disabled:p,style:q(R,k),data:E(w,{size:P,color:R,highContrast:K,state:ne?"checked":"unchecked"}),dom:[ee=>Ma(o,y,ee,D),...od(l)],onchange:(ee,ot,un,rt)=>{W(s,ee,ot,un,rt);let kt=ot.checked;if(y){let ko=kt?[...new Set([...y.renderValue,H])]:y.renderValue.filter(Td=>Td!==H);F(y.local,y.bind,y.controlled,ko,y.context),c&&c(kt,ee),y.onvaluechange&&y.onvaluechange(ko,ee),y.controlled!==void 0&&Ba(y)}else F(n,i,r,kt,D),c&&c(kt,ee),r!==void 0&&(ot.checked=ne)}})}}),La=d(({defaultValue:e=[]},[],t)=>{let n=uo(e),o=Z(n,t),r={local:o,defaultValue:n,bind:void 0,controlled:void 0,renderValue:n,context:t,element:void 0,onvaluechange:void 0,name:void 0,size:"2",color:"accent",highContrast:!1},a=Object.create(t);return a[td]=r,({value:i,defaultValue:c,bind:s,onvaluechange:l,name:p,disabled:h=!1,size:u="2",color:f="accent",highContrast:m=!1,dom:g,data:b,style:w,...k},v,D)=>(r.bind=s,r.controlled=i===void 0?void 0:uo(i),r.context=D,r.onvaluechange=l,r.name=p,r.size=u,r.color=f,r.highContrast=m,Q(o,s,D),r.renderValue=uo(G(o,s,r.controlled)),d({context:a},()=>on({...k,disabled:h,style:q(f,w),data:E(b,{size:u,color:f,highContrast:m}),dom:[y=>ja(r,y),...od(g)]},v)))});nd.Group=La;function Ma(e,t,n,o){if(n.defaultChecked=t?t.defaultValue.includes(n.value):e.defaultChecked,t)return;let r=n.form;if(!r)return;let a=()=>queueMicrotask(()=>{let i=n.checked;F(e.local,e.bind,e.controlled,i,o),n.checked=!!G(e.local,e.bind,e.controlled),o.redraw()});return r.addEventListener("reset",a),()=>r.removeEventListener("reset",a)}function ja(e,t){e.element=t;let n=t.form;if(!n)return;let o=()=>queueMicrotask(()=>{let r=[...e.defaultValue];F(e.local,e.bind,e.controlled,r,e.context),e.context.redraw()});return n.addEventListener("reset",o),()=>n.removeEventListener("reset",o)}function Ba(e){e.element?.querySelectorAll('input[type="checkbox"]').forEach(t=>{t.checked=e.renderValue.includes(t.value)}),e.context.redraw()}function uo(e){return e==null?[]:[...new Set([...e].map(String))]}function od(e){return e==null?[]:Array.isArray(e)?e:[e]}var tt=nd;var rd=Symbol("sinewy-radio-group"),rn=Symbol("sinewy-radio-names"),Na=d`input
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
`,dd=d(({defaultChecked:e=!1},[],t)=>{let n=Z(!!e,t),o={local:n,defaultChecked:!!e,bind:void 0,controlled:void 0};return({checked:r,defaultChecked:a,bind:i,oncheckedchange:c,onchange:s,dom:l,disabled:p=!1,size:h,color:u,highContrast:f,type:m,role:g,value:b="on",data:w,style:k,...v},[],D)=>{let y=D[rd],P=h??y?.size??"2",R=u??y?.color??"accent",K=f??y?.highContrast??!1,H=String(b);o.bind=i,o.controlled=y?void 0:r,!y&&Q(n,i,D);let Ee=y?y.renderValue===H:!!G(n,i,r);return Na({...v,type:"radio",name:y?.name??v.name,value:H,checked:Ee,required:y&&y.required||v.required,disabled:p,style:q(R,k),data:E(w,{size:P,color:R,highContrast:K,state:Ee?"checked":"unchecked"}),dom:[ne=>Ga(o,y,ne,D),...id(l)],onchange:(ne,ee,ot,un)=>{W(s,ne,ee,ot,un);let rt=ee.checked;y&&rt?(F(y.local,y.bind,y.controlled,H,y.context),c&&c(!0,ne),y.onvaluechange&&y.onvaluechange(H,ne),y.controlled!==void 0&&Ha(y)):y||(F(n,i,r,rt,D),c&&c(rt,ne),r!==void 0&&(ee.checked=Ee))}})}}),Fa=d(({name:e,defaultValue:t},[],n)=>{let o=e||Ua(n),r=ho(t),a=Z(r,n),i={local:a,defaultValue:r,bind:void 0,controlled:void 0,renderValue:r,context:n,element:void 0,onvaluechange:void 0,name:o,required:!1,size:"2",color:"accent",highContrast:!1},c=Object.create(n);return c[rd]=i,({value:s,defaultValue:l,bind:p,onvaluechange:h,name:u=o,required:f=!1,disabled:m=!1,size:g="2",color:b="accent",highContrast:w=!1,dom:k,data:v,style:D,...y},P,R)=>(i.bind=p,i.controlled=ho(s),i.context=R,i.onvaluechange=h,i.name=u,i.required=f,i.size=g,i.color=b,i.highContrast=w,Q(a,p,R),i.renderValue=ho(G(a,p,i.controlled)),d({context:c},()=>on({...y,disabled:m,style:q(b,D),data:E(v,{size:g,color:b,highContrast:w}),dom:[K=>Va(i,K),...id(k)]},P)))});dd.Group=Fa;function Ga(e,t,n,o){if(n.defaultChecked=t?t.defaultValue===n.value:e.defaultChecked,t)return;let r=n.form;if(!r)return;let a=()=>queueMicrotask(()=>{let i=n.checked;F(e.local,e.bind,e.controlled,i,o),n.checked=!!G(e.local,e.bind,e.controlled),o.redraw()});return r.addEventListener("reset",a),()=>r.removeEventListener("reset",a)}function Va(e,t){e.element=t;let n=t.form;if(!n)return;let o=()=>queueMicrotask(()=>{F(e.local,e.bind,e.controlled,e.defaultValue,e.context),e.context.redraw()});return n.addEventListener("reset",o),()=>n.removeEventListener("reset",o)}function Ha(e){e.element?.querySelectorAll('input[type="radio"]').forEach(t=>{t.checked=t.value===e.renderValue}),e.context.redraw()}function Ua(e){let t=e;for(;t&&!Object.prototype.hasOwnProperty.call(t,rn);)t=Object.getPrototypeOf(t);return t||=e,t[rn]=(t[rn]||0)+1,"sinewy-radio-"+t[rn]}function ho(e){return e==null?void 0:String(e)}function id(e){return e==null?[]:Array.isArray(e)?e:[e]}var nt=dd;var ad=Symbol("sinewy-theme"),Ka=z.Content`
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
`,Wa=z.SubContent`
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
`,Ya=ke(z.Trigger),dn=e=>e`
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

`,_a=dn(z.Item),Ja=dn(z.Checkbox),Xa=dn(z.Radio),Za=dn(z.SubTrigger),Qa=z.Label`
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
`,ec=z.Separator`
  height 1
  margin $dropdown-separator-margin
  background $sinewy-neutral-6
`,tc=z.Indicator`
  width $dropdown-indicator-width
  display inline-grid
  place-items center
  position absolute
  inset-inline-start $dropdown-indicator-start
  flex 0 0 $dropdown-indicator-width
  font-size $dropdown-indicator-font-size
  font-weight 900
`,cd=d`kbd
  margin-inline-start auto
  color currentColor
  font-family inherit
  font-size inherit
  line-height inherit
  opacity 0.58
`,nc=d`svg
  width 14
  height 14
  display block
  margin-inline-start auto
  flex 0 0 14px
  opacity 0.72

  &:dir(rtl) {
    transform rotate(180deg)
  }
`,O=d((e,t)=>z(e,t));O.Trigger=d(({size:e="2",variant:t="solid",color:n="gray",highContrast:o=!1,data:r,style:a,...i},c)=>Ya({...i,style:q(n,a),data:E(r,{size:e,variant:t,color:n,highContrast:o})},c));O.Content=d(({size:e="2",variant:t="solid",color:n="gray",highContrast:o=!1,data:r,style:a,...i},c,s)=>{let l={size:e,variant:t,color:n,highContrast:o};return Ka({...i,style:q(n,a),data:E(r,{size:e,variant:t,color:n,highContrast:o})},sd(s,l,c))});O.Item=an(_a);O.Checkbox=an(Ja);O.Radio=an(Xa);O.SubTrigger=an(Za,rc);O.SubContent=d(({size:e,variant:t,color:n,highContrast:o,data:r,style:a,...i},c,s)=>{let l=fo(s,{size:e,variant:t,color:n,highContrast:o});return Wa({...i,style:n==null?a:q(n,a),data:E(r,l)},sd(s,l,c))});O.Label=d(({size:e,data:t,...n},o,r)=>{let a=fo(r,{size:e});return Qa({...n,data:E(t,{size:a.size})},o)});O.Separator=d((e,t)=>ec(e,t));O.Indicator=d((e,t)=>tc(e,t));O.Shortcut=d((e,t)=>cd(e,t));O.TriggerIcon=d((e,t)=>oc(e,t));O.Group=z.Group;O.RadioGroup=z.RadioGroup;O.Sub=z.Sub;var M=d((e,t)=>Xe(e,t));M.Trigger=Xe.Trigger;M.Content=O.Content;M.Item=O.Item;M.Checkbox=O.Checkbox;M.RadioGroup=Xe.RadioGroup;M.Radio=O.Radio;M.Indicator=O.Indicator;M.Group=Xe.Group;M.Label=O.Label;M.Separator=O.Separator;M.Sub=Xe.Sub;M.SubTrigger=O.SubTrigger;M.SubContent=O.SubContent;M.Shortcut=O.Shortcut;function an(e,t){return d(({size:n,color:o,highContrast:r,shortcut:a,data:i,style:c,...s},l,p)=>{let h=fo(p,{size:n,highContrast:r}),u=a==null?l:[...l,cd(a)];return e({...s,style:o==null?c:q(o,c),data:E(i,{size:h.size,variant:h.variant,color:o,highContrast:h.highContrast})},t==null?u:[...u,t()])})}function fo(e,t){let n=e[ad]||{};return Object.fromEntries(["size","variant","color","highContrast"].map(o=>[o,t[o]==null?n[o]:t[o]]))}function sd(e,t,n){let o=Object.create(e);return o[ad]=t,d({context:o},()=>n)}function oc(e){return d`svg
    width 14
    height 14
    display block
    flex 0 0 14px
  `({...e,viewBox:"0 0 14 14",fill:"none",focusable:"false","aria-hidden":e["aria-hidden"]==null?"true":e["aria-hidden"]},d`path`({d:"M3.5 5.25 7 8.75l3.5-3.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))}function rc(){return nc({viewBox:"0 0 14 14",fill:"none",focusable:"false","aria-hidden":"true"},d`path`({d:"M5.25 3.5 8.75 7l-3.5 3.5",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"}))}var L=O;var ld=[{title:"Alert Dialog",description:"A Dialog specialization for decisions that require immediate attention.",slug:"alert-dialog",source:"docs/components/alert-dialog.md",headings:[{depth:2,id:"overview",text:"Overview"},{depth:2,id:"import",text:"Import"},{depth:2,id:"basic-usage",text:"Basic usage"},{depth:2,id:"why-it-shares-dialog-parts",text:"Why it shares Dialog parts"},{depth:2,id:"state-and-events",text:"State and events"},{depth:2,id:"api-reference",text:"API reference"},{depth:3,id:"alertdialogattrs-children",text:"AlertDialog(attrs?, ...children)"},{depth:3,id:"alertdialogtriggerattrs-children",text:"AlertDialog.Trigger(attrs?, ...children)"},{depth:3,id:"alertdialogcontentattrs-children",text:"AlertDialog.Content(attrs?, ...children)"},{depth:3,id:"alertdialogtitleattrs-children",text:"AlertDialog.Title(attrs?, ...children)"},{depth:3,id:"alertdialogdescriptionattrs-children",text:"AlertDialog.Description(attrs?, ...children)"},{depth:3,id:"alertdialogcloseattrs-children",text:"AlertDialog.Close(attrs?, ...children)"},{depth:2,id:"keyboard-and-focus-behavior",text:"Keyboard and focus behavior"},{depth:2,id:"styling",text:"Styling"},{depth:2,id:"current-limits",text:"Current limits"}],html:`<h2 id="overview">Overview</h2>
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
`}],pd=Object.fromEntries(ld.map(e=>[e.slug,e]));var cn=ld;d.title="Sinewy \u2014 Documentation";d.css.reset``;d.css`
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
`;var dc=d(({},[],{route:e})=>ic(e({"/":Tc,"/components/:slug":Dc,"/?":Cd}))),ic=d`div
  min-height 100svh
  display grid
  grid-template-columns 256px minmax(0, 1fr)

  @media (max-width: 780px) {
    grid-template-columns 1fr
  }
`,ac=d`aside
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
`,bd=d`a
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
`,yd=d`span
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
`,cc=d`nav
  display grid
  align-content start
  gap 25
`,ud=d`section
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
`,hd=d`a
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
`,sc=d`footer
  display grid
  gap 6
  color #85837c
  font-size 11
  line-height 1.45

  strong {
    color #5c5c57
    font-weight 680
  }
`,lc=d`nav
  min-width 0
  display none
  align-items center
  gap 5
  overflow-x auto

  @media (max-width: 780px) {
    display flex
  }
`,fd=d`a
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
`,pc=d`main
  min-width 0
  grid-column 2

  @media (max-width: 780px) {
    grid-column 1
  }
`,yo=d`div
  width min(100%, 1100px)
  display grid
  gap 48
  margin 0 auto
  padding 72 52 96

  @media (max-width: 780px) {
    padding 44 20 72
  }
`,uc=d`header
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
`,vd=d`div
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
`,go=d`section
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
`,hc=d`div
  display grid
  grid-template-columns repeat(3, minmax(0, 1fr))
  gap 12

  @media (max-width: 900px) {
    grid-template-columns 1fr
  }
`,mo=d`article
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
`,bo=d`div
  display flex
  align-items center
  justify-content space-between
  gap 12
`,pn=d`span
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
`,gd=d`div
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
`,wd=d`a
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
`,xd=d`span
  width 34
  height 34
  display grid
  place-items center
  border-radius 50%
  background #f0eee8
  color #555650
  font-size 18
`,fc=d`ol
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
`,sn=d`span
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
`,kd=d`header
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
`,gc=d`div
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
`,mc=d`div
  display flex
  flex-wrap wrap
  align-items center
  gap 7
`,bc=d`span
  padding 5 8
  border 1px solid #d9d6cd
  border-radius 99
  color #6c6c66
  font-size 10
  font-weight 650
`,yc=d`div
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
`,vc=d`article
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
`,wc=d`div
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
`,xc=d`aside
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
`,ue=d`div
  min-height 230
  display grid
  place-items center
  padding 28
  border 1px solid #dad7ce
  border-radius 15 15 0 0
  background-color #f2f0e9
  background-image radial-gradient(#d8d4c9 0.7px, transparent 0.7px)
  background-size 13px 13px
`,kc=d`div
  display grid
  gap 16
`,md=d`section
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
`,xt=d`div
  display flex
  flex-wrap wrap
  align-items center
  gap 9
`,Sc=d`div
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
`,he=d`pre
  overflow-x auto
  padding 18 20
  border-radius 0 0 15px 15px
  background #242522
  color #e9e8e2
  font-family "SFMono-Regular", Consolas, "Liberation Mono", monospace
  font-size 12
  line-height 1.65
  tab-size 2
`,Cc=M.Trigger`
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
`,Sd=d`div
  display flex
  justify-content flex-end
  gap 8
  margin-top 24
`,Ce=d`label
  display inline-flex
  align-items center
  gap 9
  color #343532
  font-size 13
  font-weight 680
  cursor pointer
`,vo={"alert-dialog":{status:"Preview",tags:["Native dialog","Alert semantics","Dialog specialization"],summary:"An urgent-decision specialization of Dialog that enforces the native alertdialog role.",preview:Pc,previewHeadings:[{id:"live-example",text:"Live example"}]},button:{status:"Preview",tags:["Native control","Shared theme","Form-safe"],summary:"A compact themed native control with four variants and full button attribute forwarding.",preview:Ac,previewHeadings:[{id:"live-example",text:"Live example"}]},toggle:{status:"Preview",tags:["Native control","Pressed state","Shared theme"],summary:"A native two-state button with controlled, uncontrolled, and live binding contracts.",preview:$c,previewHeadings:[{id:"live-example",text:"Live example"}]},dialog:{status:"Preview",tags:["Native dialog","Modal top layer","Controlled state"],summary:"A native modal dialog with accessible semantic parts and shared Sinewy theming.",preview:zc,previewHeadings:[{id:"live-example",text:"Live example"}]},switch:{status:"Preview",tags:["Native checkbox","Form control","Shared theme"],summary:"A native checkbox switch with real form behavior and controlled, uncontrolled, and live state.",preview:Ec,previewHeadings:[{id:"live-example",text:"Live example"}]},select:{status:"Preview",tags:["Native select","Optgroup","Shared theme"],summary:"A themed native scalar select with option groups and controlled, uncontrolled, and live values.",preview:qc,previewHeadings:[{id:"live-example",text:"Live example"}]},checkbox:{status:"Preview",tags:["Native checkbox","Array binding","Fieldset group"],summary:"A native checkbox with boolean state and optional array-valued fieldset grouping.",preview:Mc,previewHeadings:[{id:"live-example",text:"Live example"}]},radio:{status:"Preview",tags:["Native radio","Scalar binding","Fieldset group"],summary:"A native radio with a named fieldset group and one shared scalar value.",preview:Bc,previewHeadings:[{id:"live-example",text:"Live example"}]},"context-menu":{status:"Preview",tags:["Popover API","Point anchors","Headless + theme"],summary:"Contextual actions at pointer or keyboard invocation points, backed by the shared menu engine.",preview:Fc,previewHeadings:[{id:"live-example",text:"Live example"}]},dropdown:{status:"API reviewed",tags:["Popover API","CSS anchors","Headless + theme"],summary:"Actions, checkbox and radio choices, nested menus, room-aware placement, and a theme facade.",preview:Nc,previewHeadings:[{id:"live-example",text:"Live example"},{id:"theme-preview",text:"Theme preview"}]}};function wo(e,t){return[ac(bd({href:"/"},yd("S"),d`span`(d`strong`("Sinewy"),d`span`("Documentation"))),cc(ud(d`h2`("Start here"),hd({href:"/",data:{active:t.has("/")||void 0}},"Overview")),ud(d`h2`("Components"),cn.map(n=>hd({href:"/components/"+n.slug,data:{active:t.has("/components/"+n.slug)||void 0}},n.title,d`span`(vo[n.slug]?.status||"Preview"))))),sc(d`strong`("Independent preview"),"Built for Sin.js with the platform.")),pc(e)]}function Tc({},[],{route:e,doc:t}){return t.title("Sinewy \u2014 Documentation"),wo([xo(e),yo(uc(vd("Independent components for Sin.js"),d`h1`("Small parts. Native behavior."),d`p`("Sinewy is an independently maintained component library for Sin.js. This site documents each public surface as it becomes useful, testable, and honest about its platform boundaries.")),go(d`header`(d`h2`("Where things stand"),d`p`("The status here follows implemented and verified behavior, not a speculative component catalog.")),hc(mo(bo(d`strong`("Portable reference"),pn("Markdown")),d`p`("Component prose, API tables, and platform limits now come directly from the repository documents."),gd(d`span`({style:{width:"100%"}}))),mo(bo(d`strong`("Behavior suite"),pn("Green")),d`p`("Browser, server rendering, hydration, submenu, and type declaration coverage are in place."),gd(d`span`({style:{width:"100%"}}))),mo(bo(d`strong`("Accessibility sign-off"),pn({data:{tone:"manual"}},"Manual")),d`p`("Keyboard behavior is covered; supported-browser and assistive-technology verification remains.")))),go(d`header`(d`h2`("Components"),d`p`("Each component page combines its portable contract with live Sin examples and generated navigation.")),cn.map(n=>wd({href:"/components/"+n.slug},d`div`(d`h3`(n.title),d`p`(vo[n.slug]?.summary||n.description)),xd("\u2192")))),go({id:"roadmap"},d`header`(d`h2`("Documentation roadmap"),d`p`("The site itself is the visible checklist for turning implementation work into a usable system.")),fc(d`li`(sn({data:{done:""}},"\u2713"),d`div`(d`strong`("Establish the documentation shell"),"Navigation, progress overview, component layout, and live examples.")),d`li`(sn({data:{done:""}},"\u2713"),d`div`(d`strong`("Render portable Markdown"),"Frontmatter, GFM content, heading IDs, links, and tables feed the site directly.")),d`li`(sn({data:{current:""}},"3"),d`div`(d`strong`("Generate the static site"),"Use Sin SSR and route discovery to publish every documented component.")),d`li`(sn("4"),d`div`(d`strong`("Expand through real components"),"Add primitives only as their contracts become concrete enough to document.")))))],e)}function Dc({slug:e},[],t){let n=pd[e];if(!n)return t.doc.status(404),Cd({},[],t);let o=vo[e]||{},r=o.preview?o.preview():[],a=o.previewHeadings||[];return t.doc.title(n.title+" \u2014 Sinewy"),wo([xo(t.route),yo(kd(gc(d`a`({href:"/"},"Components"),d`span`("/"),d`span`(n.title)),mc(pn(o.status||"Preview"),(o.tags||[]).map(i=>bc(i))),d`h1`(n.title),d`p`(n.description)),yc(vc(r,wc({data:{source:n.source}},d.trust(n.html))),xc(d`strong`("On this page"),[...a,...n.headings.filter(i=>i.depth===2)].map(i=>d`a`({href:"#"+i.id},i.text)))))],t.route)}function Ac(){return d`section#live-example`(d`h2`("Live example"),d`p`("A native button with shared size, variant, color, and contrast styling. Tab to see its focus-visible treatment."),d`div`(ue(xt(Ze({variant:"solid",color:"accent"},"Save"),Ze({variant:"soft",color:"cyan"},"Duplicate"),Ze({variant:"outline",color:"green"},"Publish"),Ze({variant:"ghost",color:"red"},"Delete"))),he(`import { Button } from 'sinewy'

Button({
  size: '2',
  variant: 'solid',
  color: 'accent',
  highContrast: false
}, 'Save')`)))}var Ic=d(()=>{let e=d.live(!1);return()=>xt(yt({bind:e,variant:"soft"},e()?"Bold on":"Bold"),yt({defaultPressed:!0,variant:"outline",color:"green"},"Pinned"),yt({variant:"ghost",color:"crimson","aria-label":"Mute audio"},"\u266A"))});function $c(){return d`section#live-example`(d`h2`("Live example"),d`p`("Activate a toggle to see its persistent pressed state. The same control theme becomes neutral while off and colored while on."),d`div`(ue(Ic()),he(`import s from 'sin'
import { Toggle } from 'sinewy'

const bold = s.live(false)

Toggle({
  bind: bold,
  size: '2',
  variant: 'soft',
  color: 'accent'
}, 'Bold')`)))}function zc(){return d`section#live-example`(d`h2`("Live example"),d`p`("Open the native modal to see top-layer focus containment, the themed backdrop, and semantic title and description relationships."),d`div`(ue(U(U.Trigger({variant:"solid"},"Edit profile"),U.Content(U.Title("Edit profile"),U.Description("Change the public details shown on your account."),Sd(U.Close("Cancel"),U.Close({variant:"solid",color:"accent"},"Save changes"))))),he(`import { Dialog } from 'sinewy'

Dialog(
  Dialog.Trigger('Edit profile'),
  Dialog.Content(
    Dialog.Title('Edit profile'),
    Dialog.Description('Change your public details.'),
    Dialog.Close('Cancel'),
    Dialog.Close({ variant: 'solid' }, 'Save changes')
  )
)`)))}function Pc(){return d`section#live-example`(d`h2`("Live example"),d`p`("The alert specialization keeps Dialog behavior while announcing an urgent decision and initially focusing the safest choice."),d`div`(ue(Se(Se.Trigger({variant:"outline",color:"red"},"Delete account"),Se.Content({color:"red"},Se.Title("Delete account?"),Se.Description("This action permanently removes the account and its saved data."),Sd(Se.Close({autofocus:!0},"Cancel"),Se.Close({variant:"solid",color:"red"},"Delete"))))),he(`import { AlertDialog } from 'sinewy'

AlertDialog(
  AlertDialog.Trigger('Delete account'),
  AlertDialog.Content(
    AlertDialog.Title('Delete account?'),
    AlertDialog.Description('This cannot be undone.'),
    AlertDialog.Close({ autofocus: true }, 'Cancel'),
    AlertDialog.Close({ variant: 'solid', color: 'red' }, 'Delete')
  )
)`)))}var Oc=d(()=>{let e=d.live(!0);return()=>xt(Ce(wt({bind:e}),"Notifications"),Ce(wt({defaultChecked:!0,color:"green"}),"Auto-save"),Ce(wt({color:"crimson",highContrast:!0}),"Public profile"))});function Ec(){return d`section#live-example`(d`h2`("Live example"),d`p`("Each themed track is still a native labelled checkbox, including keyboard, form, focus, and reset behavior."),d`div`(ue(Oc()),he(`import s from 'sin'
import { Switch } from 'sinewy'

const notifications = s.live(true)

s\`label\`(
  Switch({
    bind: notifications,
    color: 'accent'
  }),
  'Notifications'
)`)))}var Rc=d(()=>{let e=d.live("pear");return()=>Oe({bind:e,name:"produce","aria-label":"Produce",color:"cyan"},Oe.Group({label:"Fruit"},Oe.Option({value:"apple"},"Apple"),Oe.Option({value:"pear"},"Pear")),Oe.Group({label:"Vegetables"},Oe.Option({value:"carrot"},"Carrot")))});function qc(){return d`section#live-example`(d`h2`("Live example"),d`p`("Supporting browsers render the native picker with Sinewy\u2019s menu surface, grouped options, selection gutter, and theme colors. Customizable picker styling requires Safari 27 or later; Safari 26 and earlier show the regular platform-native picker."),d`div`(ue(Rc()),he(`import s from 'sin'
import { Select } from 'sinewy'

const produce = s.live('pear')

Select({ bind: produce, name: 'produce' },
  Select.Group({ label: 'Fruit' },
    Select.Option({ value: 'apple' }, 'Apple'),
    Select.Option({ value: 'pear' }, 'Pear')
  )
)`)))}var Lc=d(()=>{let e=d.live(["email"]);return()=>tt.Group({bind:e,name:"channels",color:"green"},d`legend`("Notifications"),Ce(tt({value:"email"}),"Email"),Ce(tt({value:"sms"}),"SMS"),Ce(tt({value:"push"}),"Push"))});function Mc(){return d`section#live-example`(d`h2`("Live example"),d`p`("The fieldset binds its checked native values to one array while labels, form data, focus, and toggling remain HTML behavior."),d`div`(ue(Lc()),he(`import s from 'sin'
import { Checkbox } from 'sinewy'

const channels = s.live(['email'])

Checkbox.Group({ bind: channels, name: 'channels' },
  s\`legend\`('Notifications'),
  s\`label\`(Checkbox({ value: 'email' }), 'Email'),
  s\`label\`(Checkbox({ value: 'sms' }), 'SMS')
)`)))}var jc=d(()=>{let e=d.live("free");return()=>nt.Group({bind:e,name:"plan",color:"purple"},d`legend`("Plan"),Ce(nt({value:"free"}),"Free"),Ce(nt({value:"pro"}),"Pro"),Ce(nt({value:"team"}),"Team"))});function Bc(){return d`section#live-example`(d`h2`("Live example"),d`p`("The named native radio group shares one live string value and keeps fieldset, legend, label, form, and arrow-key semantics."),d`div`(ue(jc()),he(`import s from 'sin'
import { Radio } from 'sinewy'

const plan = s.live('free')

Radio.Group({ bind: plan, name: 'plan' },
  s\`legend\`('Plan'),
  s\`label\`(Radio({ value: 'free' }), 'Free'),
  s\`label\`(Radio({ value: 'pro' }), 'Pro')
)`)))}function Nc(){return[d`section#live-example`(d`h2`("Live example"),d`p`("The themed facade keeps the headless part structure and remains open to normal Sin style extension."),d`div`(ue(Gc()),he(`import Dropdown from 'sinewy/theme'

Dropdown(
  Dropdown.Trigger('Open menu'),
  Dropdown.Content(
    Dropdown.Item('Edit'),
    Dropdown.Checkbox({ checked: true },
      Dropdown.Indicator('\u2713'),
      'Notifications'
    )
  )
)`))),d`section#theme-preview`(d`h2`("Theme preview"),d`p`("Size and color establish an inherited menu scope. Parts can make deliberate local overrides."),kc(md(d`h3`("Sizes"),xt(ln({label:"Size 1",size:"1",color:"indigo"}),ln({label:"Size 2",size:"2",color:"indigo"}),ln({label:"Size 3",size:"3",color:"indigo"}))),md(d`h3`("Colors"),xt(...["gray","indigo","cyan","green","amber","crimson","purple"].map(e=>ln({label:Vc(e),variant:"soft",color:e}))))))]}function Fc(){return d`section#live-example`(d`h2`("Live example"),d`p`("Right-click or press and hold the target, or focus it and press Shift+F10."),d`div`(ue(M(Cc("Open a contextual menu here"),M.Content({variant:"soft",color:"indigo"},M.Item({shortcut:"\u2318 R"},"Rename"),M.Item({shortcut:"\u2318 D"},"Duplicate"),M.Separator(),M.Item({color:"red"},"Delete")))),he(`import { ContextMenu } from 'sinewy/theme'

ContextMenu(
  ContextMenu.Trigger('Right-click here'),
  ContextMenu.Content({ variant: 'soft', color: 'indigo' },
    ContextMenu.Item({ shortcut: '\u2318 R' }, 'Rename'),
    ContextMenu.Item('Duplicate')
  )
)`)))}var Gc=d(()=>{let e=d.live(!0);return()=>L(L.Trigger({variant:"outline",color:"accent",size:"2"},"Open menu",L.TriggerIcon()),L.Content({align:"start",offset:7,variant:"soft",color:"indigo"},L.Label("Workspace"),L.Item({shortcut:"\u2318 E"},"Edit details"),L.Checkbox({bind:e},L.Indicator("\u2713"),"Notifications"),L.Separator(),L.Sub(L.SubTrigger("Share"),L.SubContent(L.Item("Copy link"),L.Item("Invite people")))))});function ln({label:e,size:t="2",variant:n="solid",color:o,highContrast:r=!1,dark:a=!1}){return Sc({data:{dark:a||null}},d`span`(e),L(L.Trigger({size:t,variant:n==="soft"?"soft":"outline",color:o,highContrast:r},"Open",L.TriggerIcon()),L.Content({size:t,variant:n,color:o,highContrast:r,align:"start",offset:6},L.Item({shortcut:"\u2318 E"},"Edit"),L.Checkbox({checked:!0},L.Indicator("\u2713"),"Enabled"),L.Item({color:"red"},"Delete"))))}function Vc(e){return e[0].toUpperCase()+e.slice(1)}function xo(e){return d`header
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
  `(bd({href:"/"},yd("S"),d`strong`("Sinewy")),lc(fd({href:"/",data:{active:e.has("/")||void 0}},"Overview"),cn.map(t=>fd({href:"/components/"+t.slug,data:{active:e.has("/components/"+t.slug)||void 0}},t.title))))}function Cd({},[],{route:e,doc:t}){return t.title("Not found \u2014 Sinewy"),wo([xo(e),yo(kd(vd("404"),d`h1`("Nothing here yet."),d`p`("This documentation is growing alongside the component system."),wd({href:"/"},d`div`(d`h3`("Return to the overview"),d`p`("See current progress and available component pages.")),xd("\u2192"))))],e)}var Kl=d.mount(dc);export{Kl as default};
