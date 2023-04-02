(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Hf(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Wf(i){if(We(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Pt(n)?ix(n):Wf(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Pt(i))return i;if(_t(i))return i}}const ex=/;(?![^(]*\))/g,tx=/:([^]+)/,nx=/\/\*.*?\*\//gs;function ix(i){const e={};return i.replace(nx,"").split(ex).forEach(t=>{if(t){const n=t.split(tx);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Xf(i){let e="";if(Pt(i))e=i;else if(We(i))for(let t=0;t<i.length;t++){const n=Xf(i[t]);n&&(e+=n+" ")}else if(_t(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const rx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sx=Hf(rx);function Um(i){return!!i||i===""}const ox=i=>Pt(i)?i:i==null?"":We(i)||_t(i)&&(i.toString===Vm||!$e(i.toString))?JSON.stringify(i,km,2):String(i),km=(i,e)=>e&&e.__v_isRef?km(i,e.value):to(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:Bm(e)?{[`Set(${e.size})`]:[...e.values()]}:_t(e)&&!We(e)&&!Hm(e)?String(e):e,yt={},eo=[],xi=()=>{},ax=()=>!1,lx=/^on[^a-z]/,mc=i=>lx.test(i),qf=i=>i.startsWith("onUpdate:"),jt=Object.assign,$f=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},cx=Object.prototype.hasOwnProperty,nt=(i,e)=>cx.call(i,e),We=Array.isArray,to=i=>gc(i)==="[object Map]",Bm=i=>gc(i)==="[object Set]",$e=i=>typeof i=="function",Pt=i=>typeof i=="string",Yf=i=>typeof i=="symbol",_t=i=>i!==null&&typeof i=="object",Gm=i=>_t(i)&&$e(i.then)&&$e(i.catch),Vm=Object.prototype.toString,gc=i=>Vm.call(i),ux=i=>gc(i).slice(8,-1),Hm=i=>gc(i)==="[object Object]",jf=i=>Pt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Rl=Hf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_c=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},fx=/-(\w)/g,Ni=_c(i=>i.replace(fx,(e,t)=>t?t.toUpperCase():"")),hx=/\B([A-Z])/g,Po=_c(i=>i.replace(hx,"-$1").toLowerCase()),xc=_c(i=>i.charAt(0).toUpperCase()+i.slice(1)),Gc=_c(i=>i?`on${xc(i)}`:""),va=(i,e)=>!Object.is(i,e),Vc=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},Kl=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},dx=i=>{const e=parseFloat(i);return isNaN(e)?i:e},px=i=>{const e=Pt(i)?Number(i):NaN;return isNaN(e)?i:e};let Wh;const mx=()=>Wh||(Wh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ci;class gx{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ci,!e&&ci&&(this.index=(ci.scopes||(ci.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=ci;try{return ci=this,e()}finally{ci=t}}}on(){ci=this}off(){ci=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function _x(i,e=ci){e&&e.active&&e.effects.push(i)}function xx(){return ci}const Kf=i=>{const e=new Set(i);return e.w=0,e.n=0,e},Wm=i=>(i.w&Dr)>0,Xm=i=>(i.n&Dr)>0,vx=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Dr},yx=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];Wm(r)&&!Xm(r)?r.delete(i):e[t++]=r,r.w&=~Dr,r.n&=~Dr}e.length=t}},$u=new WeakMap;let jo=0,Dr=1;const Yu=30;let hi;const cs=Symbol(""),ju=Symbol("");class Zf{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,_x(this,n)}run(){if(!this.active)return this.fn();let e=hi,t=Tr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=hi,hi=this,Tr=!0,Dr=1<<++jo,jo<=Yu?vx(this):Xh(this),this.fn()}finally{jo<=Yu&&yx(this),Dr=1<<--jo,hi=this.parent,Tr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){hi===this?this.deferStop=!0:this.active&&(Xh(this),this.onStop&&this.onStop(),this.active=!1)}}function Xh(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Tr=!0;const qm=[];function Ro(){qm.push(Tr),Tr=!1}function Lo(){const i=qm.pop();Tr=i===void 0?!0:i}function wn(i,e,t){if(Tr&&hi){let n=$u.get(i);n||$u.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=Kf()),$m(r)}}function $m(i,e){let t=!1;jo<=Yu?Xm(i)||(i.n|=Dr,t=!Wm(i)):t=!i.has(hi),t&&(i.add(hi),hi.deps.push(i))}function er(i,e,t,n,r,s){const o=$u.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&We(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":We(i)?jf(t)&&a.push(o.get("length")):(a.push(o.get(cs)),to(i)&&a.push(o.get(ju)));break;case"delete":We(i)||(a.push(o.get(cs)),to(i)&&a.push(o.get(ju)));break;case"set":to(i)&&a.push(o.get(cs));break}if(a.length===1)a[0]&&Ku(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Ku(Kf(l))}}function Ku(i,e){const t=We(i)?i:[...i];for(const n of t)n.computed&&qh(n);for(const n of t)n.computed||qh(n)}function qh(i,e){(i!==hi||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const bx=Hf("__proto__,__v_isRef,__isVue"),Ym=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Yf)),Mx=Jf(),Sx=Jf(!1,!0),wx=Jf(!0),$h=Tx();function Tx(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=rt(this);for(let s=0,o=this.length;s<o;s++)wn(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(rt)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Ro();const n=rt(this)[e].apply(this,t);return Lo(),n}}),i}function Ex(i){const e=rt(this);return wn(e,"has",i),e.hasOwnProperty(i)}function Jf(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?Vx:Qm:e?Jm:Zm).get(n))return n;const o=We(n);if(!i){if(o&&nt($h,r))return Reflect.get($h,r,s);if(r==="hasOwnProperty")return Ex}const a=Reflect.get(n,r,s);return(Yf(r)?Ym.has(r):bx(r))||(i||wn(n,"get",r),e)?a:tn(a)?o&&jf(r)?a:a.value:_t(a)?i?eg(a):Na(a):a}}const Cx=jm(),Ax=jm(!0);function jm(i=!1){return function(t,n,r,s){let o=t[n];if(ho(o)&&tn(o)&&!tn(r))return!1;if(!i&&(!Zl(r)&&!ho(r)&&(o=rt(o),r=rt(r)),!We(t)&&tn(o)&&!tn(r)))return o.value=r,!0;const a=We(t)&&jf(n)?Number(n)<t.length:nt(t,n),l=Reflect.set(t,n,r,s);return t===rt(s)&&(a?va(r,o)&&er(t,"set",n,r):er(t,"add",n,r)),l}}function Px(i,e){const t=nt(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&er(i,"delete",e,void 0),n}function Rx(i,e){const t=Reflect.has(i,e);return(!Yf(e)||!Ym.has(e))&&wn(i,"has",e),t}function Lx(i){return wn(i,"iterate",We(i)?"length":cs),Reflect.ownKeys(i)}const Km={get:Mx,set:Cx,deleteProperty:Px,has:Rx,ownKeys:Lx},Dx={get:wx,set(i,e){return!0},deleteProperty(i,e){return!0}},Ix=jt({},Km,{get:Sx,set:Ax}),Qf=i=>i,vc=i=>Reflect.getPrototypeOf(i);function Va(i,e,t=!1,n=!1){i=i.__v_raw;const r=rt(i),s=rt(e);t||(e!==s&&wn(r,"get",e),wn(r,"get",s));const{has:o}=vc(r),a=n?Qf:t?nh:ya;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function Ha(i,e=!1){const t=this.__v_raw,n=rt(t),r=rt(i);return e||(i!==r&&wn(n,"has",i),wn(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function Wa(i,e=!1){return i=i.__v_raw,!e&&wn(rt(i),"iterate",cs),Reflect.get(i,"size",i)}function Yh(i){i=rt(i);const e=rt(this);return vc(e).has.call(e,i)||(e.add(i),er(e,"add",i,i)),this}function jh(i,e){e=rt(e);const t=rt(this),{has:n,get:r}=vc(t);let s=n.call(t,i);s||(i=rt(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?va(e,o)&&er(t,"set",i,e):er(t,"add",i,e),this}function Kh(i){const e=rt(this),{has:t,get:n}=vc(e);let r=t.call(e,i);r||(i=rt(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&er(e,"delete",i,void 0),s}function Zh(){const i=rt(this),e=i.size!==0,t=i.clear();return e&&er(i,"clear",void 0,void 0),t}function Xa(i,e){return function(n,r){const s=this,o=s.__v_raw,a=rt(o),l=e?Qf:i?nh:ya;return!i&&wn(a,"iterate",cs),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function qa(i,e,t){return function(...n){const r=this.__v_raw,s=rt(r),o=to(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?Qf:e?nh:ya;return!e&&wn(s,"iterate",l?ju:cs),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function or(i){return function(...e){return i==="delete"?!1:this}}function Ox(){const i={get(s){return Va(this,s)},get size(){return Wa(this)},has:Ha,add:Yh,set:jh,delete:Kh,clear:Zh,forEach:Xa(!1,!1)},e={get(s){return Va(this,s,!1,!0)},get size(){return Wa(this)},has:Ha,add:Yh,set:jh,delete:Kh,clear:Zh,forEach:Xa(!1,!0)},t={get(s){return Va(this,s,!0)},get size(){return Wa(this,!0)},has(s){return Ha.call(this,s,!0)},add:or("add"),set:or("set"),delete:or("delete"),clear:or("clear"),forEach:Xa(!0,!1)},n={get(s){return Va(this,s,!0,!0)},get size(){return Wa(this,!0)},has(s){return Ha.call(this,s,!0)},add:or("add"),set:or("set"),delete:or("delete"),clear:or("clear"),forEach:Xa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=qa(s,!1,!1),t[s]=qa(s,!0,!1),e[s]=qa(s,!1,!0),n[s]=qa(s,!0,!0)}),[i,t,e,n]}const[Fx,Nx,zx,Ux]=Ox();function eh(i,e){const t=e?i?Ux:zx:i?Nx:Fx;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(nt(t,r)&&r in n?t:n,r,s)}const kx={get:eh(!1,!1)},Bx={get:eh(!1,!0)},Gx={get:eh(!0,!1)},Zm=new WeakMap,Jm=new WeakMap,Qm=new WeakMap,Vx=new WeakMap;function Hx(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wx(i){return i.__v_skip||!Object.isExtensible(i)?0:Hx(ux(i))}function Na(i){return ho(i)?i:th(i,!1,Km,kx,Zm)}function Xx(i){return th(i,!1,Ix,Bx,Jm)}function eg(i){return th(i,!0,Dx,Gx,Qm)}function th(i,e,t,n,r){if(!_t(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=Wx(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function no(i){return ho(i)?no(i.__v_raw):!!(i&&i.__v_isReactive)}function ho(i){return!!(i&&i.__v_isReadonly)}function Zl(i){return!!(i&&i.__v_isShallow)}function tg(i){return no(i)||ho(i)}function rt(i){const e=i&&i.__v_raw;return e?rt(e):i}function ng(i){return Kl(i,"__v_skip",!0),i}const ya=i=>_t(i)?Na(i):i,nh=i=>_t(i)?eg(i):i;function ig(i){Tr&&hi&&(i=rt(i),$m(i.dep||(i.dep=Kf())))}function rg(i,e){i=rt(i);const t=i.dep;t&&Ku(t)}function tn(i){return!!(i&&i.__v_isRef===!0)}function ih(i){return sg(i,!1)}function qx(i){return sg(i,!0)}function sg(i,e){return tn(i)?i:new $x(i,e)}class $x{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:rt(e),this._value=t?e:ya(e)}get value(){return ig(this),this._value}set value(e){const t=this.__v_isShallow||Zl(e)||ho(e);e=t?e:rt(e),va(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:ya(e),rg(this))}}function Er(i){return tn(i)?i.value:i}const Yx={get:(i,e,t)=>Er(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return tn(r)&&!tn(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function og(i){return no(i)?i:new Proxy(i,Yx)}var ag;class jx{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[ag]=!1,this._dirty=!0,this.effect=new Zf(e,()=>{this._dirty||(this._dirty=!0,rg(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=rt(this);return ig(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}ag="__v_isReadonly";function Kx(i,e,t=!1){let n,r;const s=$e(i);return s?(n=i,r=xi):(n=i.get,r=i.set),new jx(n,r,s||!r,t)}function Cr(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){yc(s,e,t)}return r}function ni(i,e,t,n){if($e(i)){const s=Cr(i,e,t,n);return s&&Gm(s)&&s.catch(o=>{yc(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(ni(i[s],e,t,n));return r}function yc(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Cr(l,null,10,[i,o,a]);return}}Zx(i,t,r,n)}function Zx(i,e,t,n=!0){console.error(i)}let ba=!1,Zu=!1;const Qt=[];let Ci=0;const io=[];let Xi=null,ts=0;const lg=Promise.resolve();let rh=null;function cg(i){const e=rh||lg;return i?e.then(this?i.bind(this):i):e}function Jx(i){let e=Ci+1,t=Qt.length;for(;e<t;){const n=e+t>>>1;Ma(Qt[n])<i?e=n+1:t=n}return e}function sh(i){(!Qt.length||!Qt.includes(i,ba&&i.allowRecurse?Ci+1:Ci))&&(i.id==null?Qt.push(i):Qt.splice(Jx(i.id),0,i),ug())}function ug(){!ba&&!Zu&&(Zu=!0,rh=lg.then(hg))}function Qx(i){const e=Qt.indexOf(i);e>Ci&&Qt.splice(e,1)}function ev(i){We(i)?io.push(...i):(!Xi||!Xi.includes(i,i.allowRecurse?ts+1:ts))&&io.push(i),ug()}function Jh(i,e=ba?Ci+1:0){for(;e<Qt.length;e++){const t=Qt[e];t&&t.pre&&(Qt.splice(e,1),e--,t())}}function fg(i){if(io.length){const e=[...new Set(io)];if(io.length=0,Xi){Xi.push(...e);return}for(Xi=e,Xi.sort((t,n)=>Ma(t)-Ma(n)),ts=0;ts<Xi.length;ts++)Xi[ts]();Xi=null,ts=0}}const Ma=i=>i.id==null?1/0:i.id,tv=(i,e)=>{const t=Ma(i)-Ma(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function hg(i){Zu=!1,ba=!0,Qt.sort(tv);const e=xi;try{for(Ci=0;Ci<Qt.length;Ci++){const t=Qt[Ci];t&&t.active!==!1&&Cr(t,null,14)}}finally{Ci=0,Qt.length=0,fg(),ba=!1,rh=null,(Qt.length||io.length)&&hg()}}function nv(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||yt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||yt;f&&(r=t.map(p=>Pt(p)?p.trim():p)),h&&(r=t.map(dx))}let a,l=n[a=Gc(e)]||n[a=Gc(Ni(e))];!l&&s&&(l=n[a=Gc(Po(e))]),l&&ni(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,ni(c,i,6,r)}}function dg(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!$e(i)){const l=c=>{const u=dg(c,e,!0);u&&(a=!0,jt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(_t(i)&&n.set(i,null),null):(We(s)?s.forEach(l=>o[l]=null):jt(o,s),_t(i)&&n.set(i,o),o)}function bc(i,e){return!i||!mc(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(i,e[0].toLowerCase()+e.slice(1))||nt(i,Po(e))||nt(i,e))}let Jn=null,Mc=null;function Jl(i){const e=Jn;return Jn=i,Mc=i&&i.type.__scopeId||null,e}function pg(i){Mc=i}function mg(){Mc=null}function Ql(i,e=Jn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&cd(-1);const s=Jl(e);let o;try{o=i(...r)}finally{Jl(s),n._d&&cd(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Hc(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:d}=i;let m,_;const b=Jl(i);try{if(t.shapeFlag&4){const y=r||n;m=Ti(u.call(y,y,h,s,p,f,g)),_=l}else{const y=e;m=Ti(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),_=e.props?l:iv(l)}}catch(y){sa.length=0,yc(y,i,1),m=qt(Zi)}let x=m;if(_&&d!==!1){const y=Object.keys(_),{shapeFlag:w}=x;y.length&&w&7&&(o&&y.some(qf)&&(_=rv(_,o)),x=Ir(x,_))}return t.dirs&&(x=Ir(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,Jl(b),m}const iv=i=>{let e;for(const t in i)(t==="class"||t==="style"||mc(t))&&((e||(e={}))[t]=i[t]);return e},rv=(i,e)=>{const t={};for(const n in i)(!qf(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function sv(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?Qh(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!bc(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?Qh(n,o,c):!0:!!o;return!1}function Qh(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!bc(t,s))return!0}return!1}function ov({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const av=i=>i.__isSuspense;function lv(i,e){e&&e.pendingBranch?We(i)?e.effects.push(...i):e.effects.push(i):ev(i)}function Ll(i,e){if(At){let t=At.provides;const n=At.parent&&At.parent.provides;n===t&&(t=At.provides=Object.create(n)),t[i]=e}}function Li(i,e,t=!1){const n=At||Jn;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&$e(e)?e.call(n.proxy):e}}const $a={};function Dl(i,e,t){return gg(i,e,t)}function gg(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=yt){const a=xx()===(At==null?void 0:At.scope)?At:null;let l,c=!1,u=!1;if(tn(i)?(l=()=>i.value,c=Zl(i)):no(i)?(l=()=>i,n=!0):We(i)?(u=!0,c=i.some(x=>no(x)||Zl(x)),l=()=>i.map(x=>{if(tn(x))return x.value;if(no(x))return Ys(x);if($e(x))return Cr(x,a,2)})):$e(i)?e?l=()=>Cr(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ni(i,a,3,[f])}:l=xi,e&&n){const x=l;l=()=>Ys(x())}let h,f=x=>{h=_.onStop=()=>{Cr(x,a,4)}},p;if(wa)if(f=xi,e?t&&ni(e,a,3,[l(),u?[]:void 0,f]):l(),r==="sync"){const x=Qv();p=x.__watcherHandles||(x.__watcherHandles=[])}else return xi;let g=u?new Array(i.length).fill($a):$a;const d=()=>{if(_.active)if(e){const x=_.run();(n||c||(u?x.some((y,w)=>va(y,g[w])):va(x,g)))&&(h&&h(),ni(e,a,3,[x,g===$a?void 0:u&&g[0]===$a?[]:g,f]),g=x)}else _.run()};d.allowRecurse=!!e;let m;r==="sync"?m=d:r==="post"?m=()=>_n(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),m=()=>sh(d));const _=new Zf(l,m);e?t?d():g=_.run():r==="post"?_n(_.run.bind(_),a&&a.suspense):_.run();const b=()=>{_.stop(),a&&a.scope&&$f(a.scope.effects,_)};return p&&p.push(b),b}function cv(i,e,t){const n=this.proxy,r=Pt(i)?i.includes(".")?_g(n,i):()=>n[i]:i.bind(n,n);let s;$e(e)?s=e:(s=e.handler,t=e);const o=At;po(this);const a=gg(r,s.bind(n),t);return o?po(o):us(),a}function _g(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function Ys(i,e){if(!_t(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),tn(i))Ys(i.value,e);else if(We(i))for(let t=0;t<i.length;t++)Ys(i[t],e);else if(Bm(i)||to(i))i.forEach(t=>{Ys(t,e)});else if(Hm(i))for(const t in i)Ys(i[t],e);return i}function uv(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Tc(()=>{i.isMounted=!0}),wg(()=>{i.isUnmounting=!0}),i}const Hn=[Function,Array],fv={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Hn,onEnter:Hn,onAfterEnter:Hn,onEnterCancelled:Hn,onBeforeLeave:Hn,onLeave:Hn,onAfterLeave:Hn,onLeaveCancelled:Hn,onBeforeAppear:Hn,onAppear:Hn,onAfterAppear:Hn,onAppearCancelled:Hn},setup(i,{slots:e}){const t=Xv(),n=uv();let r;return()=>{const s=e.default&&yg(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const d of s)if(d.type!==Zi){o=d;break}}const a=rt(i),{mode:l}=a;if(n.isLeaving)return Wc(o);const c=ed(o);if(!c)return Wc(o);const u=Ju(c,a,n,t);Qu(c,u);const h=t.subTree,f=h&&ed(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const d=g();r===void 0?r=d:d!==r&&(r=d,p=!0)}if(f&&f.type!==Zi&&(!ns(c,f)||p)){const d=Ju(f,a,n,t);if(Qu(f,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},Wc(o);l==="in-out"&&c.type!==Zi&&(d.delayLeave=(m,_,b)=>{const x=vg(n,f);x[String(f.key)]=f,m._leaveCb=()=>{_(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},xg=fv;function vg(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function Ju(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:d,onAppear:m,onAfterAppear:_,onAppearCancelled:b}=e,x=String(i.key),y=vg(t,i),w=(v,S)=>{v&&ni(v,n,9,S)},P=(v,S)=>{const L=S[1];w(v,S),We(v)?v.every(W=>W.length<=1)&&L():v.length<=1&&L()},A={mode:s,persisted:o,beforeEnter(v){let S=a;if(!t.isMounted)if(r)S=d||a;else return;v._leaveCb&&v._leaveCb(!0);const L=y[x];L&&ns(i,L)&&L.el._leaveCb&&L.el._leaveCb(),w(S,[v])},enter(v){let S=l,L=c,W=u;if(!t.isMounted)if(r)S=m||l,L=_||c,W=b||u;else return;let O=!1;const U=v._enterCb=N=>{O||(O=!0,N?w(W,[v]):w(L,[v]),A.delayedLeave&&A.delayedLeave(),v._enterCb=void 0)};S?P(S,[v,U]):U()},leave(v,S){const L=String(i.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return S();w(h,[v]);let W=!1;const O=v._leaveCb=U=>{W||(W=!0,S(),U?w(g,[v]):w(p,[v]),v._leaveCb=void 0,y[L]===i&&delete y[L])};y[L]=i,f?P(f,[v,O]):O()},clone(v){return Ju(v,e,t,n)}};return A}function Wc(i){if(Sc(i))return i=Ir(i),i.children=null,i}function ed(i){return Sc(i)?i.children?i.children[0]:void 0:i}function Qu(i,e){i.shapeFlag&6&&i.component?Qu(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function yg(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===$n?(o.patchFlag&128&&r++,n=n.concat(yg(o.children,e,a))):(e||o.type!==Zi)&&n.push(a!=null?Ir(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Do(i){return $e(i)?{setup:i,name:i.name}:i}const Il=i=>!!i.type.__asyncLoader,Sc=i=>i.type.__isKeepAlive;function bg(i,e){Sg(i,"a",e)}function Mg(i,e){Sg(i,"da",e)}function Sg(i,e,t=At){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(wc(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Sc(r.parent.vnode)&&hv(n,e,t,r),r=r.parent}}function hv(i,e,t,n){const r=wc(e,i,n,!0);oh(()=>{$f(n[e],r)},t)}function wc(i,e,t=At,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Ro(),po(t);const a=ni(e,t,i,o);return us(),Lo(),a});return n?r.unshift(s):r.push(s),s}}const ir=i=>(e,t=At)=>(!wa||i==="sp")&&wc(i,(...n)=>e(...n),t),dv=ir("bm"),Tc=ir("m"),pv=ir("bu"),mv=ir("u"),wg=ir("bum"),oh=ir("um"),gv=ir("sp"),_v=ir("rtg"),xv=ir("rtc");function vv(i,e=At){wc("ec",i,e)}function Gr(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(Ro(),ni(l,t,8,[i.el,a,i,e]),Lo())}}const ah="components";function Tg(i,e){return Cg(ah,i,!0,e)||i}const Eg=Symbol();function yv(i){return Pt(i)?Cg(ah,i,!1)||i:i||Eg}function Cg(i,e,t=!0,n=!1){const r=Jn||At;if(r){const s=r.type;if(i===ah){const a=Kv(s,!1);if(a&&(a===e||a===Ni(e)||a===xc(Ni(e))))return s}const o=td(r[i]||s[i],e)||td(r.appContext[i],e);return!o&&n?s:o}}function td(i,e){return i&&(i[e]||i[Ni(e)]||i[xc(Ni(e))])}function nd(i,e,t,n){let r;const s=t&&t[n];if(We(i)||Pt(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=e(i[o],o,void 0,s&&s[o])}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(_t(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(i[c],c,a,s&&s[a])}}else r=[];return t&&(t[n]=r),r}const ef=i=>i?Bg(i)?fh(i)||i.proxy:ef(i.parent):null,ra=jt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>ef(i.parent),$root:i=>ef(i.root),$emit:i=>i.emit,$options:i=>lh(i),$forceUpdate:i=>i.f||(i.f=()=>sh(i.update)),$nextTick:i=>i.n||(i.n=cg.bind(i.proxy)),$watch:i=>cv.bind(i)}),Xc=(i,e)=>i!==yt&&!i.__isScriptSetup&&nt(i,e),bv={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Xc(n,e))return o[e]=1,n[e];if(r!==yt&&nt(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&nt(c,e))return o[e]=3,s[e];if(t!==yt&&nt(t,e))return o[e]=4,t[e];tf&&(o[e]=0)}}const u=ra[e];let h,f;if(u)return e==="$attrs"&&wn(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==yt&&nt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,nt(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return Xc(r,e)?(r[e]=t,!0):n!==yt&&nt(n,e)?(n[e]=t,!0):nt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==yt&&nt(i,o)||Xc(e,o)||(a=s[0])&&nt(a,o)||nt(n,o)||nt(ra,o)||nt(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:nt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let tf=!0;function Mv(i){const e=lh(i),t=i.proxy,n=i.ctx;tf=!1,e.beforeCreate&&id(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:d,deactivated:m,beforeDestroy:_,beforeUnmount:b,destroyed:x,unmounted:y,render:w,renderTracked:P,renderTriggered:A,errorCaptured:v,serverPrefetch:S,expose:L,inheritAttrs:W,components:O,directives:U,filters:N}=e;if(c&&Sv(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const q in o){const G=o[q];$e(G)&&(n[q]=G.bind(t))}if(r){const q=r.call(t,t);_t(q)&&(i.data=Na(q))}if(tf=!0,s)for(const q in s){const G=s[q],le=$e(G)?G.bind(t,t):$e(G.get)?G.get.bind(t,t):xi,D=!$e(G)&&$e(G.set)?G.set.bind(t):xi,ye=Zn({get:le,set:D});Object.defineProperty(n,q,{enumerable:!0,configurable:!0,get:()=>ye.value,set:H=>ye.value=H})}if(a)for(const q in a)Ag(a[q],n,t,q);if(l){const q=$e(l)?l.call(t):l;Reflect.ownKeys(q).forEach(G=>{Ll(G,q[G])})}u&&id(u,i,"c");function j(q,G){We(G)?G.forEach(le=>q(le.bind(t))):G&&q(G.bind(t))}if(j(dv,h),j(Tc,f),j(pv,p),j(mv,g),j(bg,d),j(Mg,m),j(vv,v),j(xv,P),j(_v,A),j(wg,b),j(oh,y),j(gv,S),We(L))if(L.length){const q=i.exposed||(i.exposed={});L.forEach(G=>{Object.defineProperty(q,G,{get:()=>t[G],set:le=>t[G]=le})})}else i.exposed||(i.exposed={});w&&i.render===xi&&(i.render=w),W!=null&&(i.inheritAttrs=W),O&&(i.components=O),U&&(i.directives=U)}function Sv(i,e,t=xi,n=!1){We(i)&&(i=nf(i));for(const r in i){const s=i[r];let o;_t(s)?"default"in s?o=Li(s.from||r,s.default,!0):o=Li(s.from||r):o=Li(s),tn(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function id(i,e,t){ni(We(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function Ag(i,e,t,n){const r=n.includes(".")?_g(t,n):()=>t[n];if(Pt(i)){const s=e[i];$e(s)&&Dl(r,s)}else if($e(i))Dl(r,i.bind(t));else if(_t(i))if(We(i))i.forEach(s=>Ag(s,e,t,n));else{const s=$e(i.handler)?i.handler.bind(t):e[i.handler];$e(s)&&Dl(r,s,i)}}function lh(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>ec(l,c,o,!0)),ec(l,e,o)),_t(e)&&s.set(e,l),l}function ec(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&ec(i,s,t,!0),r&&r.forEach(o=>ec(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=wv[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const wv={data:rd,props:Kr,emits:Kr,methods:Kr,computed:Kr,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:Kr,directives:Kr,watch:Ev,provide:rd,inject:Tv};function rd(i,e){return e?i?function(){return jt($e(i)?i.call(this,this):i,$e(e)?e.call(this,this):e)}:e:i}function Tv(i,e){return Kr(nf(i),nf(e))}function nf(i){if(We(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function ln(i,e){return i?[...new Set([].concat(i,e))]:e}function Kr(i,e){return i?jt(jt(Object.create(null),i),e):e}function Ev(i,e){if(!i)return e;if(!e)return i;const t=jt(Object.create(null),i);for(const n in e)t[n]=ln(i[n],e[n]);return t}function Cv(i,e,t,n=!1){const r={},s={};Kl(s,Cc,1),i.propsDefaults=Object.create(null),Pg(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:Xx(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Av(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=rt(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(bc(i.emitsOptions,f))continue;const p=e[f];if(l)if(nt(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=Ni(f);r[g]=rf(l,a,g,p,i,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Pg(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!nt(e,h)&&((u=Po(h))===h||!nt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=rf(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!nt(e,h))&&(delete s[h],c=!0)}c&&er(i,"set","$attrs")}function Pg(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Rl(l))continue;const c=e[l];let u;r&&nt(r,u=Ni(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:bc(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=rt(t),c=a||yt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=rf(r,l,h,c[h],i,!nt(c,h))}}return o}function rf(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=nt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&$e(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(po(r),n=c[t]=l.call(null,e),us())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===Po(t))&&(n=!0))}return n}function Rg(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!$e(i)){const u=h=>{l=!0;const[f,p]=Rg(h,e,!0);jt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return _t(i)&&n.set(i,eo),eo;if(We(s))for(let u=0;u<s.length;u++){const h=Ni(s[u]);sd(h)&&(o[h]=yt)}else if(s)for(const u in s){const h=Ni(u);if(sd(h)){const f=s[u],p=o[h]=We(f)||$e(f)?{type:f}:Object.assign({},f);if(p){const g=ld(Boolean,p.type),d=ld(String,p.type);p[0]=g>-1,p[1]=d<0||g<d,(g>-1||nt(p,"default"))&&a.push(h)}}}const c=[o,a];return _t(i)&&n.set(i,c),c}function sd(i){return i[0]!=="$"}function od(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function ad(i,e){return od(i)===od(e)}function ld(i,e){return We(e)?e.findIndex(t=>ad(t,i)):$e(e)&&ad(e,i)?0:-1}const Lg=i=>i[0]==="_"||i==="$stable",ch=i=>We(i)?i.map(Ti):[Ti(i)],Pv=(i,e,t)=>{if(e._n)return e;const n=Ql((...r)=>ch(e(...r)),t);return n._c=!1,n},Dg=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Lg(r))continue;const s=i[r];if($e(s))e[r]=Pv(r,s,n);else if(s!=null){const o=ch(s);e[r]=()=>o}}},Ig=(i,e)=>{const t=ch(e);i.slots.default=()=>t},Rv=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=rt(e),Kl(e,"_",t)):Dg(e,i.slots={})}else i.slots={},e&&Ig(i,e);Kl(i.slots,Cc,1)},Lv=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=yt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(jt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Dg(e,r)),o=e}else e&&(Ig(i,e),o={default:1});if(s)for(const a in r)!Lg(a)&&!(a in o)&&delete r[a]};function Og(){return{app:null,config:{isNativeTag:ax,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dv=0;function Iv(i,e){return function(n,r=null){$e(n)||(n=Object.assign({},n)),r!=null&&!_t(r)&&(r=null);const s=Og(),o=new Set;let a=!1;const l=s.app={_uid:Dv++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:ey,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&$e(c.install)?(o.add(c),c.install(l,...u)):$e(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=qt(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,fh(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function sf(i,e,t,n,r=!1){if(We(i)){i.forEach((f,p)=>sf(f,e&&(We(e)?e[p]:e),t,n,r));return}if(Il(n)&&!r)return;const s=n.shapeFlag&4?fh(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===yt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Pt(c)?(u[c]=null,nt(h,c)&&(h[c]=null)):tn(c)&&(c.value=null)),$e(l))Cr(l,a,12,[o,u]);else{const f=Pt(l),p=tn(l);if(f||p){const g=()=>{if(i.f){const d=f?nt(h,l)?h[l]:u[l]:l.value;r?We(d)&&$f(d,s):We(d)?d.includes(s)||d.push(s):f?(u[l]=[s],nt(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,nt(h,l)&&(h[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,_n(g,t)):g()}}}const _n=lv;function Ov(i){return Fv(i)}function Fv(i,e){const t=mx();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=xi,insertStaticContent:g}=i,d=(T,I,$,Q=null,se=null,F=null,de=!1,re=null,_e=!!I.dynamicChildren)=>{if(T===I)return;T&&!ns(T,I)&&(Q=K(T),H(T,se,F,!0),T=null),I.patchFlag===-2&&(_e=!1,I.dynamicChildren=null);const{type:ce,ref:E,shapeFlag:M}=I;switch(ce){case Ec:m(T,I,$,Q);break;case Zi:_(T,I,$,Q);break;case Ol:T==null&&b(I,$,Q,de);break;case $n:O(T,I,$,Q,se,F,de,re,_e);break;default:M&1?w(T,I,$,Q,se,F,de,re,_e):M&6?U(T,I,$,Q,se,F,de,re,_e):(M&64||M&128)&&ce.process(T,I,$,Q,se,F,de,re,_e,me)}E!=null&&se&&sf(E,T&&T.ref,F,I||T,!I)},m=(T,I,$,Q)=>{if(T==null)n(I.el=a(I.children),$,Q);else{const se=I.el=T.el;I.children!==T.children&&c(se,I.children)}},_=(T,I,$,Q)=>{T==null?n(I.el=l(I.children||""),$,Q):I.el=T.el},b=(T,I,$,Q)=>{[T.el,T.anchor]=g(T.children,I,$,Q,T.el,T.anchor)},x=({el:T,anchor:I},$,Q)=>{let se;for(;T&&T!==I;)se=f(T),n(T,$,Q),T=se;n(I,$,Q)},y=({el:T,anchor:I})=>{let $;for(;T&&T!==I;)$=f(T),r(T),T=$;r(I)},w=(T,I,$,Q,se,F,de,re,_e)=>{de=de||I.type==="svg",T==null?P(I,$,Q,se,F,de,re,_e):S(T,I,se,F,de,re,_e)},P=(T,I,$,Q,se,F,de,re)=>{let _e,ce;const{type:E,props:M,shapeFlag:k,transition:ie,dirs:ee}=T;if(_e=T.el=o(T.type,F,M&&M.is,M),k&8?u(_e,T.children):k&16&&v(T.children,_e,null,Q,se,F&&E!=="foreignObject",de,re),ee&&Gr(T,null,Q,"created"),A(_e,T,T.scopeId,de,Q),M){for(const xe in M)xe!=="value"&&!Rl(xe)&&s(_e,xe,null,M[xe],F,T.children,Q,se,Y);"value"in M&&s(_e,"value",null,M.value),(ce=M.onVnodeBeforeMount)&&bi(ce,Q,T)}ee&&Gr(T,null,Q,"beforeMount");const fe=(!se||se&&!se.pendingBranch)&&ie&&!ie.persisted;fe&&ie.beforeEnter(_e),n(_e,I,$),((ce=M&&M.onVnodeMounted)||fe||ee)&&_n(()=>{ce&&bi(ce,Q,T),fe&&ie.enter(_e),ee&&Gr(T,null,Q,"mounted")},se)},A=(T,I,$,Q,se)=>{if($&&p(T,$),Q)for(let F=0;F<Q.length;F++)p(T,Q[F]);if(se){let F=se.subTree;if(I===F){const de=se.vnode;A(T,de,de.scopeId,de.slotScopeIds,se.parent)}}},v=(T,I,$,Q,se,F,de,re,_e=0)=>{for(let ce=_e;ce<T.length;ce++){const E=T[ce]=re?mr(T[ce]):Ti(T[ce]);d(null,E,I,$,Q,se,F,de,re)}},S=(T,I,$,Q,se,F,de)=>{const re=I.el=T.el;let{patchFlag:_e,dynamicChildren:ce,dirs:E}=I;_e|=T.patchFlag&16;const M=T.props||yt,k=I.props||yt;let ie;$&&Vr($,!1),(ie=k.onVnodeBeforeUpdate)&&bi(ie,$,I,T),E&&Gr(I,T,$,"beforeUpdate"),$&&Vr($,!0);const ee=se&&I.type!=="foreignObject";if(ce?L(T.dynamicChildren,ce,re,$,Q,ee,F):de||G(T,I,re,null,$,Q,ee,F,!1),_e>0){if(_e&16)W(re,I,M,k,$,Q,se);else if(_e&2&&M.class!==k.class&&s(re,"class",null,k.class,se),_e&4&&s(re,"style",M.style,k.style,se),_e&8){const fe=I.dynamicProps;for(let xe=0;xe<fe.length;xe++){const ve=fe[xe],ne=M[ve],Re=k[ve];(Re!==ne||ve==="value")&&s(re,ve,ne,Re,se,T.children,$,Q,Y)}}_e&1&&T.children!==I.children&&u(re,I.children)}else!de&&ce==null&&W(re,I,M,k,$,Q,se);((ie=k.onVnodeUpdated)||E)&&_n(()=>{ie&&bi(ie,$,I,T),E&&Gr(I,T,$,"updated")},Q)},L=(T,I,$,Q,se,F,de)=>{for(let re=0;re<I.length;re++){const _e=T[re],ce=I[re],E=_e.el&&(_e.type===$n||!ns(_e,ce)||_e.shapeFlag&70)?h(_e.el):$;d(_e,ce,E,null,Q,se,F,de,!0)}},W=(T,I,$,Q,se,F,de)=>{if($!==Q){if($!==yt)for(const re in $)!Rl(re)&&!(re in Q)&&s(T,re,$[re],null,de,I.children,se,F,Y);for(const re in Q){if(Rl(re))continue;const _e=Q[re],ce=$[re];_e!==ce&&re!=="value"&&s(T,re,ce,_e,de,I.children,se,F,Y)}"value"in Q&&s(T,"value",$.value,Q.value)}},O=(T,I,$,Q,se,F,de,re,_e)=>{const ce=I.el=T?T.el:a(""),E=I.anchor=T?T.anchor:a("");let{patchFlag:M,dynamicChildren:k,slotScopeIds:ie}=I;ie&&(re=re?re.concat(ie):ie),T==null?(n(ce,$,Q),n(E,$,Q),v(I.children,$,E,se,F,de,re,_e)):M>0&&M&64&&k&&T.dynamicChildren?(L(T.dynamicChildren,k,$,se,F,de,re),(I.key!=null||se&&I===se.subTree)&&Fg(T,I,!0)):G(T,I,$,E,se,F,de,re,_e)},U=(T,I,$,Q,se,F,de,re,_e)=>{I.slotScopeIds=re,T==null?I.shapeFlag&512?se.ctx.activate(I,$,Q,de,_e):N(I,$,Q,se,F,de,_e):X(T,I,_e)},N=(T,I,$,Q,se,F,de)=>{const re=T.component=Wv(T,Q,se);if(Sc(T)&&(re.ctx.renderer=me),qv(re),re.asyncDep){if(se&&se.registerDep(re,j),!T.el){const _e=re.subTree=qt(Zi);_(null,_e,I,$)}return}j(re,T,I,$,se,F,de)},X=(T,I,$)=>{const Q=I.component=T.component;if(sv(T,I,$))if(Q.asyncDep&&!Q.asyncResolved){q(Q,I,$);return}else Q.next=I,Qx(Q.update),Q.update();else I.el=T.el,Q.vnode=I},j=(T,I,$,Q,se,F,de)=>{const re=()=>{if(T.isMounted){let{next:E,bu:M,u:k,parent:ie,vnode:ee}=T,fe=E,xe;Vr(T,!1),E?(E.el=ee.el,q(T,E,de)):E=ee,M&&Vc(M),(xe=E.props&&E.props.onVnodeBeforeUpdate)&&bi(xe,ie,E,ee),Vr(T,!0);const ve=Hc(T),ne=T.subTree;T.subTree=ve,d(ne,ve,h(ne.el),K(ne),T,se,F),E.el=ve.el,fe===null&&ov(T,ve.el),k&&_n(k,se),(xe=E.props&&E.props.onVnodeUpdated)&&_n(()=>bi(xe,ie,E,ee),se)}else{let E;const{el:M,props:k}=I,{bm:ie,m:ee,parent:fe}=T,xe=Il(I);if(Vr(T,!1),ie&&Vc(ie),!xe&&(E=k&&k.onVnodeBeforeMount)&&bi(E,fe,I),Vr(T,!0),M&&be){const ve=()=>{T.subTree=Hc(T),be(M,T.subTree,T,se,null)};xe?I.type.__asyncLoader().then(()=>!T.isUnmounted&&ve()):ve()}else{const ve=T.subTree=Hc(T);d(null,ve,$,Q,T,se,F),I.el=ve.el}if(ee&&_n(ee,se),!xe&&(E=k&&k.onVnodeMounted)){const ve=I;_n(()=>bi(E,fe,ve),se)}(I.shapeFlag&256||fe&&Il(fe.vnode)&&fe.vnode.shapeFlag&256)&&T.a&&_n(T.a,se),T.isMounted=!0,I=$=Q=null}},_e=T.effect=new Zf(re,()=>sh(ce),T.scope),ce=T.update=()=>_e.run();ce.id=T.uid,Vr(T,!0),ce()},q=(T,I,$)=>{I.component=T;const Q=T.vnode.props;T.vnode=I,T.next=null,Av(T,I.props,Q,$),Lv(T,I.children,$),Ro(),Jh(),Lo()},G=(T,I,$,Q,se,F,de,re,_e=!1)=>{const ce=T&&T.children,E=T?T.shapeFlag:0,M=I.children,{patchFlag:k,shapeFlag:ie}=I;if(k>0){if(k&128){D(ce,M,$,Q,se,F,de,re,_e);return}else if(k&256){le(ce,M,$,Q,se,F,de,re,_e);return}}ie&8?(E&16&&Y(ce,se,F),M!==ce&&u($,M)):E&16?ie&16?D(ce,M,$,Q,se,F,de,re,_e):Y(ce,se,F,!0):(E&8&&u($,""),ie&16&&v(M,$,Q,se,F,de,re,_e))},le=(T,I,$,Q,se,F,de,re,_e)=>{T=T||eo,I=I||eo;const ce=T.length,E=I.length,M=Math.min(ce,E);let k;for(k=0;k<M;k++){const ie=I[k]=_e?mr(I[k]):Ti(I[k]);d(T[k],ie,$,null,se,F,de,re,_e)}ce>E?Y(T,se,F,!0,!1,M):v(I,$,Q,se,F,de,re,_e,M)},D=(T,I,$,Q,se,F,de,re,_e)=>{let ce=0;const E=I.length;let M=T.length-1,k=E-1;for(;ce<=M&&ce<=k;){const ie=T[ce],ee=I[ce]=_e?mr(I[ce]):Ti(I[ce]);if(ns(ie,ee))d(ie,ee,$,null,se,F,de,re,_e);else break;ce++}for(;ce<=M&&ce<=k;){const ie=T[M],ee=I[k]=_e?mr(I[k]):Ti(I[k]);if(ns(ie,ee))d(ie,ee,$,null,se,F,de,re,_e);else break;M--,k--}if(ce>M){if(ce<=k){const ie=k+1,ee=ie<E?I[ie].el:Q;for(;ce<=k;)d(null,I[ce]=_e?mr(I[ce]):Ti(I[ce]),$,ee,se,F,de,re,_e),ce++}}else if(ce>k)for(;ce<=M;)H(T[ce],se,F,!0),ce++;else{const ie=ce,ee=ce,fe=new Map;for(ce=ee;ce<=k;ce++){const Ee=I[ce]=_e?mr(I[ce]):Ti(I[ce]);Ee.key!=null&&fe.set(Ee.key,ce)}let xe,ve=0;const ne=k-ee+1;let Re=!1,Pe=0;const Ie=new Array(ne);for(ce=0;ce<ne;ce++)Ie[ce]=0;for(ce=ie;ce<=M;ce++){const Ee=T[ce];if(ve>=ne){H(Ee,se,F,!0);continue}let Ge;if(Ee.key!=null)Ge=fe.get(Ee.key);else for(xe=ee;xe<=k;xe++)if(Ie[xe-ee]===0&&ns(Ee,I[xe])){Ge=xe;break}Ge===void 0?H(Ee,se,F,!0):(Ie[Ge-ee]=ce+1,Ge>=Pe?Pe=Ge:Re=!0,d(Ee,I[Ge],$,null,se,F,de,re,_e),ve++)}const Fe=Re?Nv(Ie):eo;for(xe=Fe.length-1,ce=ne-1;ce>=0;ce--){const Ee=ee+ce,Ge=I[Ee],Le=Ee+1<E?I[Ee+1].el:Q;Ie[ce]===0?d(null,Ge,$,Le,se,F,de,re,_e):Re&&(xe<0||ce!==Fe[xe]?ye(Ge,$,Le,2):xe--)}}},ye=(T,I,$,Q,se=null)=>{const{el:F,type:de,transition:re,children:_e,shapeFlag:ce}=T;if(ce&6){ye(T.component.subTree,I,$,Q);return}if(ce&128){T.suspense.move(I,$,Q);return}if(ce&64){de.move(T,I,$,me);return}if(de===$n){n(F,I,$);for(let M=0;M<_e.length;M++)ye(_e[M],I,$,Q);n(T.anchor,I,$);return}if(de===Ol){x(T,I,$);return}if(Q!==2&&ce&1&&re)if(Q===0)re.beforeEnter(F),n(F,I,$),_n(()=>re.enter(F),se);else{const{leave:M,delayLeave:k,afterLeave:ie}=re,ee=()=>n(F,I,$),fe=()=>{M(F,()=>{ee(),ie&&ie()})};k?k(F,ee,fe):fe()}else n(F,I,$)},H=(T,I,$,Q=!1,se=!1)=>{const{type:F,props:de,ref:re,children:_e,dynamicChildren:ce,shapeFlag:E,patchFlag:M,dirs:k}=T;if(re!=null&&sf(re,null,$,T,!0),E&256){I.ctx.deactivate(T);return}const ie=E&1&&k,ee=!Il(T);let fe;if(ee&&(fe=de&&de.onVnodeBeforeUnmount)&&bi(fe,I,T),E&6)R(T.component,$,Q);else{if(E&128){T.suspense.unmount($,Q);return}ie&&Gr(T,null,I,"beforeUnmount"),E&64?T.type.remove(T,I,$,se,me,Q):ce&&(F!==$n||M>0&&M&64)?Y(ce,I,$,!1,!0):(F===$n&&M&384||!se&&E&16)&&Y(_e,I,$),Q&&ue(T)}(ee&&(fe=de&&de.onVnodeUnmounted)||ie)&&_n(()=>{fe&&bi(fe,I,T),ie&&Gr(T,null,I,"unmounted")},$)},ue=T=>{const{type:I,el:$,anchor:Q,transition:se}=T;if(I===$n){pe($,Q);return}if(I===Ol){y(T);return}const F=()=>{r($),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(T.shapeFlag&1&&se&&!se.persisted){const{leave:de,delayLeave:re}=se,_e=()=>de($,F);re?re(T.el,F,_e):_e()}else F()},pe=(T,I)=>{let $;for(;T!==I;)$=f(T),r(T),T=$;r(I)},R=(T,I,$)=>{const{bum:Q,scope:se,update:F,subTree:de,um:re}=T;Q&&Vc(Q),se.stop(),F&&(F.active=!1,H(de,T,I,$)),re&&_n(re,I),_n(()=>{T.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Y=(T,I,$,Q=!1,se=!1,F=0)=>{for(let de=F;de<T.length;de++)H(T[de],I,$,Q,se)},K=T=>T.shapeFlag&6?K(T.component.subTree):T.shapeFlag&128?T.suspense.next():f(T.anchor||T.el),ae=(T,I,$)=>{T==null?I._vnode&&H(I._vnode,null,null,!0):d(I._vnode||null,T,I,null,null,null,$),Jh(),fg(),I._vnode=T},me={p:d,um:H,m:ye,r:ue,mt:N,mc:v,pc:G,pbc:L,n:K,o:i};let Me,be;return e&&([Me,be]=e(me)),{render:ae,hydrate:Me,createApp:Iv(ae,Me)}}function Vr({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function Fg(i,e,t=!1){const n=i.children,r=e.children;if(We(n)&&We(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=mr(r[s]),a.el=o.el),t||Fg(o,a)),a.type===Ec&&(a.el=o.el)}}function Nv(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const zv=i=>i.__isTeleport,$n=Symbol(void 0),Ec=Symbol(void 0),Zi=Symbol(void 0),Ol=Symbol(void 0),sa=[];let gi=null;function Un(i=!1){sa.push(gi=i?null:[])}function Uv(){sa.pop(),gi=sa[sa.length-1]||null}let Sa=1;function cd(i){Sa+=i}function Ng(i){return i.dynamicChildren=Sa>0?gi||eo:null,Uv(),Sa>0&&gi&&gi.push(i),i}function _i(i,e,t,n,r,s){return Ng(dt(i,e,t,n,r,s,!0))}function ud(i,e,t,n,r){return Ng(qt(i,e,t,n,r,!0))}function of(i){return i?i.__v_isVNode===!0:!1}function ns(i,e){return i.type===e.type&&i.key===e.key}const Cc="__vInternal",zg=({key:i})=>i??null,Fl=({ref:i,ref_key:e,ref_for:t})=>i!=null?Pt(i)||tn(i)||$e(i)?{i:Jn,r:i,k:e,f:!!t}:i:null;function dt(i,e=null,t=null,n=0,r=null,s=i===$n?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&zg(e),ref:e&&Fl(e),scopeId:Mc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Jn};return a?(uh(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Pt(t)?8:16),Sa>0&&!o&&gi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&gi.push(l),l}const qt=kv;function kv(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Eg)&&(i=Zi),of(i)){const a=Ir(i,e,!0);return t&&uh(a,t),Sa>0&&!s&&gi&&(a.shapeFlag&6?gi[gi.indexOf(i)]=a:gi.push(a)),a.patchFlag|=-2,a}if(Zv(i)&&(i=i.__vccOpts),e){e=Bv(e);let{class:a,style:l}=e;a&&!Pt(a)&&(e.class=Xf(a)),_t(l)&&(tg(l)&&!We(l)&&(l=jt({},l)),e.style=Wf(l))}const o=Pt(i)?1:av(i)?128:zv(i)?64:_t(i)?4:$e(i)?2:0;return dt(i,e,t,n,r,o,s,!0)}function Bv(i){return i?tg(i)||Cc in i?jt({},i):i:null}function Ir(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?Gv(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&zg(a),ref:e&&e.ref?t&&r?We(r)?r.concat(Fl(e)):[r,Fl(e)]:Fl(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==$n?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&Ir(i.ssContent),ssFallback:i.ssFallback&&Ir(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function Ug(i=" ",e=0){return qt(Ec,null,i,e)}function kg(i,e){const t=qt(Ol,null,i);return t.staticCount=e,t}function Ti(i){return i==null||typeof i=="boolean"?qt(Zi):We(i)?qt($n,null,i.slice()):typeof i=="object"?mr(i):qt(Ec,null,String(i))}function mr(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:Ir(i)}function uh(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),uh(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Cc in e)?e._ctx=Jn:r===3&&Jn&&(Jn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:Jn},t=32):(e=String(e),n&64?(t=16,e=[Ug(e)]):t=8);i.children=e,i.shapeFlag|=t}function Gv(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=Xf([e.class,n.class]));else if(r==="style")e.style=Wf([e.style,n.style]);else if(mc(r)){const s=e[r],o=n[r];o&&s!==o&&!(We(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function bi(i,e,t,n=null){ni(i,e,7,[t,n])}const Vv=Og();let Hv=0;function Wv(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||Vv,s={uid:Hv++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new gx(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rg(n,r),emitsOptions:dg(n,r),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:n.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=nv.bind(null,s),i.ce&&i.ce(s),s}let At=null;const Xv=()=>At||Jn,po=i=>{At=i,i.scope.on()},us=()=>{At&&At.scope.off(),At=null};function Bg(i){return i.vnode.shapeFlag&4}let wa=!1;function qv(i,e=!1){wa=e;const{props:t,children:n}=i.vnode,r=Bg(i);Cv(i,t,r,e),Rv(i,n);const s=r?$v(i,e):void 0;return wa=!1,s}function $v(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=ng(new Proxy(i.ctx,bv));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?jv(i):null;po(i),Ro();const s=Cr(n,i,0,[i.props,r]);if(Lo(),us(),Gm(s)){if(s.then(us,us),e)return s.then(o=>{fd(i,o,e)}).catch(o=>{yc(o,i,0)});i.asyncDep=s}else fd(i,s,e)}else Gg(i,e)}function fd(i,e,t){$e(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:_t(e)&&(i.setupState=og(e)),Gg(i,t)}let hd;function Gg(i,e,t){const n=i.type;if(!i.render){if(!e&&hd&&!n.render){const r=n.template||lh(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=jt(jt({isCustomElement:s,delimiters:a},o),l);n.render=hd(r,c)}}i.render=n.render||xi}po(i),Ro(),Mv(i),Lo(),us()}function Yv(i){return new Proxy(i.attrs,{get(e,t){return wn(i,"get","$attrs"),e[t]}})}function jv(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=Yv(i))},slots:i.slots,emit:i.emit,expose:e}}function fh(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(og(ng(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in ra)return ra[t](i)},has(e,t){return t in e||t in ra}}))}function Kv(i,e=!0){return $e(i)?i.displayName||i.name:i.name||e&&i.__name}function Zv(i){return $e(i)&&"__vccOpts"in i}const Zn=(i,e)=>Kx(i,e,wa);function hh(i,e,t){const n=arguments.length;return n===2?_t(e)&&!We(e)?of(e)?qt(i,null,[e]):qt(i,e):qt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&of(t)&&(t=[t]),qt(i,e,t))}const Jv=Symbol(""),Qv=()=>Li(Jv),ey="3.2.47",ty="http://www.w3.org/2000/svg",is=typeof document<"u"?document:null,dd=is&&is.createElement("template"),ny={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?is.createElementNS(ty,i):is.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>is.createTextNode(i),createComment:i=>is.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>is.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{dd.innerHTML=n?`<svg>${i}</svg>`:i;const a=dd.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function iy(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function ry(i,e,t){const n=i.style,r=Pt(t);if(t&&!r){if(e&&!Pt(e))for(const s in e)t[s]==null&&af(n,s,"");for(const s in t)af(n,s,t[s])}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const pd=/\s*!important$/;function af(i,e,t){if(We(t))t.forEach(n=>af(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=sy(i,e);pd.test(t)?i.setProperty(Po(n),t.replace(pd,""),"important"):i[n]=t}}const md=["Webkit","Moz","ms"],qc={};function sy(i,e){const t=qc[e];if(t)return t;let n=Ni(e);if(n!=="filter"&&n in i)return qc[e]=n;n=xc(n);for(let r=0;r<md.length;r++){const s=md[r]+n;if(s in i)return qc[e]=s}return e}const gd="http://www.w3.org/1999/xlink";function oy(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(gd,e.slice(6,e.length)):i.setAttributeNS(gd,e,t);else{const s=sx(e);t==null||s&&!Um(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function ay(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Um(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function ly(i,e,t,n){i.addEventListener(e,t,n)}function cy(i,e,t,n){i.removeEventListener(e,t,n)}function uy(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=fy(e);if(n){const c=s[e]=py(n,r);ly(i,a,c,l)}else o&&(cy(i,a,o,l),s[e]=void 0)}}const _d=/(?:Once|Passive|Capture)$/;function fy(i){let e;if(_d.test(i)){e={};let n;for(;n=i.match(_d);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):Po(i.slice(2)),e]}let $c=0;const hy=Promise.resolve(),dy=()=>$c||(hy.then(()=>$c=0),$c=Date.now());function py(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;ni(my(n,t.value),e,5,[n])};return t.value=i,t.attached=dy(),t}function my(i,e){if(We(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const xd=/^on[a-z]/,gy=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?iy(i,n,r):e==="style"?ry(i,t,n):mc(e)?qf(e)||uy(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):_y(i,e,n,r))?ay(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),oy(i,e,n,r))};function _y(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&xd.test(e)&&$e(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||xd.test(e)&&Pt(t)?!1:e in i}const ar="transition",zo="animation",dh=(i,{slots:e})=>hh(xg,xy(i),e);dh.displayName="Transition";const Vg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};dh.props=jt({},xg.props,Vg);const Hr=(i,e=[])=>{We(i)?i.forEach(t=>t(...e)):i&&i(...e)},vd=i=>i?We(i)?i.some(e=>e.length>1):i.length>1:!1;function xy(i){const e={};for(const O in i)O in Vg||(e[O]=i[O]);if(i.css===!1)return e;const{name:t="v",type:n,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=i,g=vy(r),d=g&&g[0],m=g&&g[1],{onBeforeEnter:_,onEnter:b,onEnterCancelled:x,onLeave:y,onLeaveCancelled:w,onBeforeAppear:P=_,onAppear:A=b,onAppearCancelled:v=x}=e,S=(O,U,N)=>{Wr(O,U?u:a),Wr(O,U?c:o),N&&N()},L=(O,U)=>{O._isLeaving=!1,Wr(O,h),Wr(O,p),Wr(O,f),U&&U()},W=O=>(U,N)=>{const X=O?A:b,j=()=>S(U,O,N);Hr(X,[U,j]),yd(()=>{Wr(U,O?l:s),lr(U,O?u:a),vd(X)||bd(U,n,d,j)})};return jt(e,{onBeforeEnter(O){Hr(_,[O]),lr(O,s),lr(O,o)},onBeforeAppear(O){Hr(P,[O]),lr(O,l),lr(O,c)},onEnter:W(!1),onAppear:W(!0),onLeave(O,U){O._isLeaving=!0;const N=()=>L(O,U);lr(O,h),My(),lr(O,f),yd(()=>{O._isLeaving&&(Wr(O,h),lr(O,p),vd(y)||bd(O,n,m,N))}),Hr(y,[O,N])},onEnterCancelled(O){S(O,!1),Hr(x,[O])},onAppearCancelled(O){S(O,!0),Hr(v,[O])},onLeaveCancelled(O){L(O),Hr(w,[O])}})}function vy(i){if(i==null)return null;if(_t(i))return[Yc(i.enter),Yc(i.leave)];{const e=Yc(i);return[e,e]}}function Yc(i){return px(i)}function lr(i,e){e.split(/\s+/).forEach(t=>t&&i.classList.add(t)),(i._vtc||(i._vtc=new Set)).add(e)}function Wr(i,e){e.split(/\s+/).forEach(n=>n&&i.classList.remove(n));const{_vtc:t}=i;t&&(t.delete(e),t.size||(i._vtc=void 0))}function yd(i){requestAnimationFrame(()=>{requestAnimationFrame(i)})}let yy=0;function bd(i,e,t,n){const r=i._endId=++yy,s=()=>{r===i._endId&&n()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=by(i,e);if(!o)return n();const c=o+"end";let u=0;const h=()=>{i.removeEventListener(c,f),s()},f=p=>{p.target===i&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),i.addEventListener(c,f)}function by(i,e){const t=window.getComputedStyle(i),n=g=>(t[g]||"").split(", "),r=n(`${ar}Delay`),s=n(`${ar}Duration`),o=Md(r,s),a=n(`${zo}Delay`),l=n(`${zo}Duration`),c=Md(a,l);let u=null,h=0,f=0;e===ar?o>0&&(u=ar,h=o,f=s.length):e===zo?c>0&&(u=zo,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?ar:zo:null,f=u?u===ar?s.length:l.length:0);const p=u===ar&&/\b(transform|all)(,|$)/.test(n(`${ar}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function Md(i,e){for(;i.length<e.length;)i=i.concat(i);return Math.max(...e.map((t,n)=>Sd(t)+Sd(i[n])))}function Sd(i){return Number(i.slice(0,-1).replace(",","."))*1e3}function My(){return document.body.offsetHeight}const Sy=jt({patchProp:gy},ny);let wd;function wy(){return wd||(wd=Ov(Sy))}const Ty=(...i)=>{const e=wy().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Ey(n);if(!r)return;const s=e._component;!$e(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ey(i){return Pt(i)?document.querySelector(i):i}const rr=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},Cy={};function Ay(i,e){const t=Tg("router-view");return Un(),ud(t,null,{default:Ql(({Component:n})=>[qt(dh,null,{default:Ql(()=>[(Un(),ud(yv(n)))]),_:2},1024)]),_:1})}const Py=rr(Cy,[["render",Ay],["__scopeId","data-v-131cda9f"]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Hs=typeof window<"u";function Ry(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const ot=Object.assign;function jc(i,e){const t={};for(const n in e){const r=e[n];t[n]=yi(r)?r.map(i):i(r)}return t}const oa=()=>{},yi=Array.isArray,Ly=/\/$/,Dy=i=>i.replace(Ly,"");function Kc(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=Ny(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:o}}function Iy(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Td(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function Oy(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&mo(e.matched[n],t.matched[r])&&Hg(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function mo(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function Hg(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!Fy(i[t],e[t]))return!1;return!0}function Fy(i,e){return yi(i)?Ed(i,e):yi(e)?Ed(e,i):i===e}function Ed(i,e){return yi(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function Ny(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let r=t.length-1,s,o;for(s=0;s<n.length;s++)if(o=n[s],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var Ta;(function(i){i.pop="pop",i.push="push"})(Ta||(Ta={}));var aa;(function(i){i.back="back",i.forward="forward",i.unknown=""})(aa||(aa={}));function zy(i){if(!i)if(Hs){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),Dy(i)}const Uy=/^[^#]+#/;function ky(i,e){return i.replace(Uy,"#")+e}function By(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const Ac=()=>({left:window.pageXOffset,top:window.pageYOffset});function Gy(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=By(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Cd(i,e){return(history.state?history.state.position-e:-1)+i}const lf=new Map;function Vy(i,e){lf.set(i,e)}function Hy(i){const e=lf.get(i);return lf.delete(i),e}let Wy=()=>location.protocol+"//"+location.host;function Wg(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Td(l,"")}return Td(t,i)+n+r}function Xy(i,e,t,n){let r=[],s=[],o=null;const a=({state:f})=>{const p=Wg(i,location),g=t.value,d=e.value;let m=0;if(f){if(t.value=p,e.value=f,o&&o===g){o=null;return}m=d?f.position-d.position:0}else n(p);r.forEach(_=>{_(t.value,g,{delta:m,type:Ta.pop,direction:m?m>0?aa.forward:aa.back:aa.unknown})})};function l(){o=t.value}function c(f){r.push(f);const p=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(ot({},f.state,{scroll:Ac()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function Ad(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?Ac():null}}function qy(i){const{history:e,location:t}=window,n={value:Wg(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:Wy()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](f)}}function o(l,c){const u=ot({},e.state,Ad(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=ot({},r.value,e.state,{forward:l,scroll:Ac()});s(u.current,u,!0);const h=ot({},Ad(n.value,l,null),{position:u.position+1},c);s(l,h,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function $y(i){i=zy(i);const e=qy(i),t=Xy(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=ot({location:"",base:i,go:n,createHref:ky.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function Yy(i){return typeof i=="string"||i&&typeof i=="object"}function Xg(i){return typeof i=="string"||typeof i=="symbol"}const cr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},qg=Symbol("");var Pd;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(Pd||(Pd={}));function go(i,e){return ot(new Error,{type:i,[qg]:!0},e)}function ki(i,e){return i instanceof Error&&qg in i&&(e==null||!!(i.type&e))}const Rd="[^/]+?",jy={sensitive:!1,strict:!1,start:!0,end:!0},Ky=/[.+*?^${}()[\]/\\]/g;function Zy(i,e){const t=ot({},jy,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(t.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(Ky,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:d,optional:m,regexp:_}=f;s.push({name:g,repeatable:d,optional:m});const b=_||Rd;if(b!==Rd){p+=10;try{new RegExp(`(${b})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+y.message)}}let x=d?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(x=m&&c.length<2?`(?:/${x})`:"/"+x),m&&(x+="?"),r+=x,p+=20,m&&(p+=-8),d&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=s[f-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:d,optional:m}=p,_=g in c?c[g]:"";if(yi(_)&&!d)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=yi(_)?_.join("/"):_;if(!b)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function Jy(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Qy(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=Jy(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(Ld(n))return 1;if(Ld(r))return-1}return r.length-n.length}function Ld(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const eb={type:0,value:""},tb=/[a-zA-Z0-9_]/;function nb(i){if(!i)return[[]];if(i==="/")return[[eb]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:tb.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function ib(i,e,t){const n=Zy(nb(i.path),t),r=ot(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function rb(i,e){const t=[],n=new Map;e=Od({strict:!1,end:!0,sensitive:!1},e);function r(u){return n.get(u)}function s(u,h,f){const p=!f,g=sb(u);g.aliasOf=f&&f.record;const d=Od(e,u),m=[g];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of x)m.push(ot({},g,{components:f?f.record.components:g.components,path:y,aliasOf:f?f.record:g}))}let _,b;for(const x of m){const{path:y}=x;if(h&&y[0]!=="/"){const w=h.record.path,P=w[w.length-1]==="/"?"":"/";x.path=h.record.path+(y&&P+y)}if(_=ib(x,h,d),f?f.alias.push(_):(b=b||_,b!==_&&b.alias.push(_),p&&u.name&&!Id(_)&&o(u.name)),g.children){const w=g.children;for(let P=0;P<w.length;P++)s(w[P],_,f&&f.children[P])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return b?()=>{o(b)}:oa}function o(u){if(Xg(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&Qy(u,t[h])>=0&&(u.record.path!==t[h].record.path||!$g(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Id(u)&&n.set(u.record.name,u)}function c(u,h){let f,p={},g,d;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw go(1,{location:u});d=f.record.name,p=ot(Dd(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Dd(u.params,f.keys.map(b=>b.name))),g=f.stringify(p)}else if("path"in u)g=u.path,f=t.find(b=>b.re.test(g)),f&&(p=f.parse(g),d=f.record.name);else{if(f=h.name?n.get(h.name):t.find(b=>b.re.test(h.path)),!f)throw go(1,{location:u,currentLocation:h});d=f.record.name,p=ot({},h.params,u.params),g=f.stringify(p)}const m=[];let _=f;for(;_;)m.unshift(_.record),_=_.parent;return{name:d,path:g,params:p,matched:m,meta:ab(m)}}return i.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Dd(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function sb(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:ob(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function ob(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function Id(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function ab(i){return i.reduce((e,t)=>ot(e,t.meta),{})}function Od(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function $g(i,e){return e.children.some(t=>t===i||$g(i,t))}const Yg=/#/g,lb=/&/g,cb=/\//g,ub=/=/g,fb=/\?/g,jg=/\+/g,hb=/%5B/g,db=/%5D/g,Kg=/%5E/g,pb=/%60/g,Zg=/%7B/g,mb=/%7C/g,Jg=/%7D/g,gb=/%20/g;function ph(i){return encodeURI(""+i).replace(mb,"|").replace(hb,"[").replace(db,"]")}function _b(i){return ph(i).replace(Zg,"{").replace(Jg,"}").replace(Kg,"^")}function cf(i){return ph(i).replace(jg,"%2B").replace(gb,"+").replace(Yg,"%23").replace(lb,"%26").replace(pb,"`").replace(Zg,"{").replace(Jg,"}").replace(Kg,"^")}function xb(i){return cf(i).replace(ub,"%3D")}function vb(i){return ph(i).replace(Yg,"%23").replace(fb,"%3F")}function yb(i){return i==null?"":vb(i).replace(cb,"%2F")}function tc(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function bb(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(jg," "),o=s.indexOf("="),a=tc(o<0?s:s.slice(0,o)),l=o<0?null:tc(s.slice(o+1));if(a in e){let c=e[a];yi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Fd(i){let e="";for(let t in i){const n=i[t];if(t=xb(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(yi(n)?n.map(s=>s&&cf(s)):[n&&cf(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Mb(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=yi(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const Qg=Symbol(""),Nd=Symbol(""),mh=Symbol(""),e_=Symbol(""),uf=Symbol("");function Uo(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function Sb(i,e,t){const n=()=>{i[e].delete(t)};oh(n),Mg(n),bg(()=>{i[e].add(t)}),i[e].add(t)}function wb(i){const e=Li(Qg,{}).value;e&&Sb(e,"leaveGuards",i)}function gr(i,e,t,n,r){const s=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(go(4,{from:t,to:e})):h instanceof Error?a(h):Yy(h)?a(go(2,{from:e,to:h})):(s&&n.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},c=i.call(n&&n.instances[r],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function Zc(i,e,t,n){const r=[];for(const s of i)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(Tb(a)){const c=(a.__vccOpts||a)[e];c&&r.push(gr(c,t,n,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=Ry(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&gr(f,t,n,s,o)()}))}}return r}function Tb(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function zd(i){const e=Li(mh),t=Li(e_),n=Zn(()=>e.resolve(Er(i.to))),r=Zn(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(mo.bind(null,u));if(f>-1)return f;const p=Ud(l[c-2]);return c>1&&Ud(u)===p&&h[h.length-1].path!==p?h.findIndex(mo.bind(null,l[c-2])):f}),s=Zn(()=>r.value>-1&&Pb(t.params,n.value.params)),o=Zn(()=>r.value>-1&&r.value===t.matched.length-1&&Hg(t.params,n.value.params));function a(l={}){return Ab(l)?e[Er(i.replace)?"replace":"push"](Er(i.to)).catch(oa):Promise.resolve()}return{route:n,href:Zn(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const Eb=Do({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zd,setup(i,{slots:e}){const t=Na(zd(i)),{options:n}=Li(mh),r=Zn(()=>({[kd(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[kd(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return i.custom?s:hh("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Cb=Eb;function Ab(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function Pb(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!yi(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function Ud(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const kd=(i,e,t)=>i??e??t,Rb=Do({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=Li(uf),r=Zn(()=>i.route||n.value),s=Li(Nd,0),o=Zn(()=>{let c=Er(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Zn(()=>r.value.matched[o.value]);Ll(Nd,Zn(()=>o.value+1)),Ll(Qg,a),Ll(uf,r);const l=ih();return Dl(()=>[l.value,a.value,i.name],([c,u,h],[f,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!mo(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,h=a.value,f=h&&h.components[u];if(!f)return Bd(t.default,{Component:f,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=hh(f,ot({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Bd(t.default,{Component:m,route:c})||m}}});function Bd(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const Lb=Rb;function Db(i){const e=rb(i.routes,i),t=i.parseQuery||bb,n=i.stringifyQuery||Fd,r=i.history,s=Uo(),o=Uo(),a=Uo(),l=qx(cr);let c=cr;Hs&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jc.bind(null,R=>""+R),h=jc.bind(null,yb),f=jc.bind(null,tc);function p(R,Y){let K,ae;return Xg(R)?(K=e.getRecordMatcher(R),ae=Y):ae=R,e.addRoute(ae,K)}function g(R){const Y=e.getRecordMatcher(R);Y&&e.removeRoute(Y)}function d(){return e.getRoutes().map(R=>R.record)}function m(R){return!!e.getRecordMatcher(R)}function _(R,Y){if(Y=ot({},Y||l.value),typeof R=="string"){const T=Kc(t,R,Y.path),I=e.resolve({path:T.path},Y),$=r.createHref(T.fullPath);return ot(T,I,{params:f(I.params),hash:tc(T.hash),redirectedFrom:void 0,href:$})}let K;if("path"in R)K=ot({},R,{path:Kc(t,R.path,Y.path).path});else{const T=ot({},R.params);for(const I in T)T[I]==null&&delete T[I];K=ot({},R,{params:h(R.params)}),Y.params=h(Y.params)}const ae=e.resolve(K,Y),me=R.hash||"";ae.params=u(f(ae.params));const Me=Iy(n,ot({},R,{hash:_b(me),path:ae.path})),be=r.createHref(Me);return ot({fullPath:Me,hash:me,query:n===Fd?Mb(R.query):R.query||{}},ae,{redirectedFrom:void 0,href:be})}function b(R){return typeof R=="string"?Kc(t,R,l.value.path):ot({},R)}function x(R,Y){if(c!==R)return go(8,{from:Y,to:R})}function y(R){return A(R)}function w(R){return y(ot(b(R),{replace:!0}))}function P(R){const Y=R.matched[R.matched.length-1];if(Y&&Y.redirect){const{redirect:K}=Y;let ae=typeof K=="function"?K(R):K;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=b(ae):{path:ae},ae.params={}),ot({query:R.query,hash:R.hash,params:"path"in ae?{}:R.params},ae)}}function A(R,Y){const K=c=_(R),ae=l.value,me=R.state,Me=R.force,be=R.replace===!0,T=P(K);if(T)return A(ot(b(T),{state:typeof T=="object"?ot({},me,T.state):me,force:Me,replace:be}),Y||K);const I=K;I.redirectedFrom=Y;let $;return!Me&&Oy(n,ae,K)&&($=go(16,{to:I,from:ae}),D(ae,ae,!0,!1)),($?Promise.resolve($):S(I,ae)).catch(Q=>ki(Q)?ki(Q,2)?Q:le(Q):q(Q,I,ae)).then(Q=>{if(Q){if(ki(Q,2))return A(ot({replace:be},b(Q.to),{state:typeof Q.to=="object"?ot({},me,Q.to.state):me,force:Me}),Y||I)}else Q=W(I,ae,!0,be,me);return L(I,ae,Q),Q})}function v(R,Y){const K=x(R,Y);return K?Promise.reject(K):Promise.resolve()}function S(R,Y){let K;const[ae,me,Me]=Ib(R,Y);K=Zc(ae.reverse(),"beforeRouteLeave",R,Y);for(const T of ae)T.leaveGuards.forEach(I=>{K.push(gr(I,R,Y))});const be=v.bind(null,R,Y);return K.push(be),Es(K).then(()=>{K=[];for(const T of s.list())K.push(gr(T,R,Y));return K.push(be),Es(K)}).then(()=>{K=Zc(me,"beforeRouteUpdate",R,Y);for(const T of me)T.updateGuards.forEach(I=>{K.push(gr(I,R,Y))});return K.push(be),Es(K)}).then(()=>{K=[];for(const T of R.matched)if(T.beforeEnter&&!Y.matched.includes(T))if(yi(T.beforeEnter))for(const I of T.beforeEnter)K.push(gr(I,R,Y));else K.push(gr(T.beforeEnter,R,Y));return K.push(be),Es(K)}).then(()=>(R.matched.forEach(T=>T.enterCallbacks={}),K=Zc(Me,"beforeRouteEnter",R,Y),K.push(be),Es(K))).then(()=>{K=[];for(const T of o.list())K.push(gr(T,R,Y));return K.push(be),Es(K)}).catch(T=>ki(T,8)?T:Promise.reject(T))}function L(R,Y,K){for(const ae of a.list())ae(R,Y,K)}function W(R,Y,K,ae,me){const Me=x(R,Y);if(Me)return Me;const be=Y===cr,T=Hs?history.state:{};K&&(ae||be?r.replace(R.fullPath,ot({scroll:be&&T&&T.scroll},me)):r.push(R.fullPath,me)),l.value=R,D(R,Y,K,be),le()}let O;function U(){O||(O=r.listen((R,Y,K)=>{if(!pe.listening)return;const ae=_(R),me=P(ae);if(me){A(ot(me,{replace:!0}),ae).catch(oa);return}c=ae;const Me=l.value;Hs&&Vy(Cd(Me.fullPath,K.delta),Ac()),S(ae,Me).catch(be=>ki(be,12)?be:ki(be,2)?(A(be.to,ae).then(T=>{ki(T,20)&&!K.delta&&K.type===Ta.pop&&r.go(-1,!1)}).catch(oa),Promise.reject()):(K.delta&&r.go(-K.delta,!1),q(be,ae,Me))).then(be=>{be=be||W(ae,Me,!1),be&&(K.delta&&!ki(be,8)?r.go(-K.delta,!1):K.type===Ta.pop&&ki(be,20)&&r.go(-1,!1)),L(ae,Me,be)}).catch(oa)}))}let N=Uo(),X=Uo(),j;function q(R,Y,K){le(R);const ae=X.list();return ae.length?ae.forEach(me=>me(R,Y,K)):console.error(R),Promise.reject(R)}function G(){return j&&l.value!==cr?Promise.resolve():new Promise((R,Y)=>{N.add([R,Y])})}function le(R){return j||(j=!R,U(),N.list().forEach(([Y,K])=>R?K(R):Y()),N.reset()),R}function D(R,Y,K,ae){const{scrollBehavior:me}=i;if(!Hs||!me)return Promise.resolve();const Me=!K&&Hy(Cd(R.fullPath,0))||(ae||!K)&&history.state&&history.state.scroll||null;return cg().then(()=>me(R,Y,Me)).then(be=>be&&Gy(be)).catch(be=>q(be,R,Y))}const ye=R=>r.go(R);let H;const ue=new Set,pe={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:d,resolve:_,options:i,push:y,replace:w,go:ye,back:()=>ye(-1),forward:()=>ye(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:G,install(R){const Y=this;R.component("RouterLink",Cb),R.component("RouterView",Lb),R.config.globalProperties.$router=Y,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>Er(l)}),Hs&&!H&&l.value===cr&&(H=!0,y(r.location).catch(me=>{}));const K={};for(const me in cr)K[me]=Zn(()=>l.value[me]);R.provide(mh,Y),R.provide(e_,Na(K)),R.provide(uf,l);const ae=R.unmount;ue.add(R),R.unmount=function(){ue.delete(R),ue.size<1&&(c=cr,O&&O(),O=null,l.value=cr,H=!1,j=!1),ae()}}};return pe}function Es(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function Ib(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>mo(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>mo(c,l))||r.push(l))}return[t,n,r]}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gh="150",Ob=0,Gd=1,Fb=2,t_=1,Nb=2,Ko=3,Or=0,kn=1,_r=2,Ar=0,ro=1,Vd=2,Hd=3,Wd=4,zb=5,Ws=100,Ub=101,kb=102,Xd=103,qd=104,Bb=200,Gb=201,Vb=202,Hb=203,n_=204,i_=205,Wb=206,Xb=207,qb=208,$b=209,Yb=210,jb=0,Kb=1,Zb=2,ff=3,Jb=4,Qb=5,eM=6,tM=7,r_=0,nM=1,iM=2,Ji=0,rM=1,sM=2,oM=3,aM=4,lM=5,s_=300,_o=301,xo=302,hf=303,df=304,Pc=306,pf=1e3,di=1001,mf=1002,fn=1003,$d=1004,Jc=1005,Yn=1006,cM=1007,Ea=1008,xs=1009,uM=1010,fM=1011,o_=1012,hM=1013,ss=1014,os=1015,Ca=1016,dM=1017,pM=1018,so=1020,mM=1021,pi=1023,gM=1024,_M=1025,fs=1026,vo=1027,xM=1028,vM=1029,yM=1030,bM=1031,MM=1033,Qc=33776,eu=33777,tu=33778,nu=33779,Yd=35840,jd=35841,Kd=35842,Zd=35843,SM=36196,Jd=37492,Qd=37496,ep=37808,tp=37809,np=37810,ip=37811,rp=37812,sp=37813,op=37814,ap=37815,lp=37816,cp=37817,up=37818,fp=37819,hp=37820,dp=37821,iu=36492,wM=36283,pp=36284,mp=36285,gp=36286,vs=3e3,pt=3001,TM=3200,EM=3201,CM=0,AM=1,Si="srgb",Aa="srgb-linear",a_="display-p3",ru=7680,PM=519,_p=35044,xp="300 es",gf=1035;class Io{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nl=Math.PI/180,vp=180/Math.PI;function za(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function Fn(i,e,t){return Math.max(e,Math.min(t,i))}function RM(i,e){return(i%e+e)%e}function su(i,e,t){return(1-t)*i+t*e}function yp(i){return(i&i-1)===0&&i!==0}function LM(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ya(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function An(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class gt{constructor(e=0,t=0){gt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mn{constructor(){mn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],d=r[0],m=r[3],_=r[6],b=r[1],x=r[4],y=r[7],w=r[2],P=r[5],A=r[8];return s[0]=o*d+a*b+l*w,s[3]=o*m+a*x+l*P,s[6]=o*_+a*y+l*A,s[1]=c*d+u*b+h*w,s[4]=c*m+u*x+h*P,s[7]=c*_+u*y+h*A,s[2]=f*d+p*b+g*w,s[5]=f*m+p*x+g*P,s[8]=f*_+p*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(r*c-u*n)*d,e[2]=(a*n-r*o)*d,e[3]=f*d,e[4]=(u*t-r*l)*d,e[5]=(r*s-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ou.makeScale(e,t)),this}rotate(e){return this.premultiply(ou.makeRotation(-e)),this}translate(e,t){return this.premultiply(ou.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ou=new mn;function l_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function nc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}class Ua{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==p||u!==g){let m=1-a;const _=l*f+c*p+u*g+h*d,b=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const w=Math.sqrt(x),P=Math.atan2(w,_*b);m=Math.sin(m*P)/w,a=Math.sin(a*P)/w}const y=a*b;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,h=h*m+d*y,m===1-a){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Fn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,n=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return au.copy(this).projectOnVector(e),this.sub(au)}reflect(e){return this.sub(au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Fn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const au=new Z,bp=new Ua;function oo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function lu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const DM=new mn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),IM=new mn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),xr=new Z;function OM(i){return i.convertSRGBToLinear(),xr.set(i.r,i.g,i.b).applyMatrix3(IM),i.setRGB(xr.x,xr.y,xr.z)}function FM(i){return xr.set(i.r,i.g,i.b).applyMatrix3(DM),i.setRGB(xr.x,xr.y,xr.z).convertLinearToSRGB()}const NM={[Aa]:i=>i,[Si]:i=>i.convertSRGBToLinear(),[a_]:OM},zM={[Aa]:i=>i,[Si]:i=>i.convertLinearToSRGB(),[a_]:FM},on={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Aa},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=NM[e],r=zM[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Cs;class c_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=nc("canvas")),Cs.width=e.width,Cs.height=e.height;const n=Cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=oo(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(oo(t[n]/255)*255):t[n]=oo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class u_{constructor(e=null){this.isSource=!0,this.uuid=za(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cu(r[o].image)):s.push(cu(r[o]))}else s=cu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function cu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?c_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let UM=0;class Bn extends Io{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,n=di,r=di,s=Yn,o=Ea,a=pi,l=xs,c=Bn.DEFAULT_ANISOTROPY,u=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=za(),this.name="",this.source=new u_(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==s_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pf:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pf:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=s_;Bn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,n=0,r=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,w=(_+1)/2,P=(u+f)/4,A=(h+d)/4,v=(g+m)/4;return x>y&&x>w?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=P/n,s=A/n):y>w?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=P/r,s=v/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=A/s,r=v/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-d)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ys extends Io{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Bn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Yn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new u_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class f_ extends Bn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kM extends Bn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=fn,this.minFilter=fn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ka{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Xr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Xr)}else n.boundingBox===null&&n.computeBoundingBox(),uu.copy(n.boundingBox),uu.applyMatrix4(e.matrixWorld),this.union(uu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xr),Xr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),ja.subVectors(this.max,ko),As.subVectors(e.a,ko),Ps.subVectors(e.b,ko),Rs.subVectors(e.c,ko),ur.subVectors(Ps,As),fr.subVectors(Rs,Ps),qr.subVectors(As,Rs);let t=[0,-ur.z,ur.y,0,-fr.z,fr.y,0,-qr.z,qr.y,ur.z,0,-ur.x,fr.z,0,-fr.x,qr.z,0,-qr.x,-ur.y,ur.x,0,-fr.y,fr.x,0,-qr.y,qr.x,0];return!fu(t,As,Ps,Rs,ja)||(t=[1,0,0,0,1,0,0,0,1],!fu(t,As,Ps,Rs,ja))?!1:(Ka.crossVectors(ur,fr),t=[Ka.x,Ka.y,Ka.z],fu(t,As,Ps,Rs,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Bi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Xr=new Z,uu=new ka,As=new Z,Ps=new Z,Rs=new Z,ur=new Z,fr=new Z,qr=new Z,ko=new Z,ja=new Z,Ka=new Z,$r=new Z;function fu(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){$r.fromArray(i,s);const a=r.x*Math.abs($r.x)+r.y*Math.abs($r.y)+r.z*Math.abs($r.z),l=e.dot($r),c=t.dot($r),u=n.dot($r);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const BM=new ka,Bo=new Z,hu=new Z;class Rc{constructor(e=new Z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):BM.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const t=Bo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Bo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(hu)),this.expandByPoint(Bo.copy(e.center).sub(hu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Gi=new Z,du=new Z,Za=new Z,hr=new Z,pu=new Z,Ja=new Z,mu=new Z;class h_{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Gi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gi.copy(this.origin).addScaledVector(this.direction,t),Gi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){du.copy(e).add(t).multiplyScalar(.5),Za.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(du);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Za),a=hr.dot(this.direction),l=-hr.dot(Za),c=hr.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(du).addScaledVector(Za,f),p}intersectSphere(e,t){Gi.subVectors(e.center,this.origin);const n=Gi.dot(this.direction),r=Gi.dot(Gi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Gi)!==null}intersectTriangle(e,t,n,r,s){pu.subVectors(t,e),Ja.subVectors(n,e),mu.crossVectors(pu,Ja);let o=this.direction.dot(mu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hr.subVectors(this.origin,e);const l=a*this.direction.dot(Ja.crossVectors(hr,Ja));if(l<0)return null;const c=a*this.direction.dot(pu.cross(hr));if(c<0||l+c>o)return null;const u=-a*hr.dot(mu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,h,f,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ls.setFromMatrixColumn(e,0).length(),s=1/Ls.setFromMatrixColumn(e,1).length(),o=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,d=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-d*c,t[9]=-a*l,t[2]=d-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=d+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f-d*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=d-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,d=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GM,e,VM)}lookAt(e,t,n){const r=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),dr.crossVectors(n,Pn),dr.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),dr.crossVectors(n,Pn)),dr.normalize(),Qa.crossVectors(Pn,dr),r[0]=dr.x,r[4]=Qa.x,r[8]=Pn.x,r[1]=dr.y,r[5]=Qa.y,r[9]=Pn.y,r[2]=dr.z,r[6]=Qa.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],b=n[3],x=n[7],y=n[11],w=n[15],P=r[0],A=r[4],v=r[8],S=r[12],L=r[1],W=r[5],O=r[9],U=r[13],N=r[2],X=r[6],j=r[10],q=r[14],G=r[3],le=r[7],D=r[11],ye=r[15];return s[0]=o*P+a*L+l*N+c*G,s[4]=o*A+a*W+l*X+c*le,s[8]=o*v+a*O+l*j+c*D,s[12]=o*S+a*U+l*q+c*ye,s[1]=u*P+h*L+f*N+p*G,s[5]=u*A+h*W+f*X+p*le,s[9]=u*v+h*O+f*j+p*D,s[13]=u*S+h*U+f*q+p*ye,s[2]=g*P+d*L+m*N+_*G,s[6]=g*A+d*W+m*X+_*le,s[10]=g*v+d*O+m*j+_*D,s[14]=g*S+d*U+m*q+_*ye,s[3]=b*P+x*L+y*N+w*G,s[7]=b*A+x*W+y*X+w*le,s[11]=b*v+x*O+y*j+w*D,s[15]=b*S+x*U+y*q+w*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*p-n*l*p)+d*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+_*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],b=h*m*c-d*f*c+d*l*p-a*m*p-h*l*_+a*f*_,x=g*f*c-u*m*c-g*l*p+o*m*p+u*l*_-o*f*_,y=u*d*c-g*h*c+g*a*p-o*d*p-u*a*_+o*h*_,w=g*h*l-u*d*l-g*a*f+o*d*f+u*a*m-o*h*m,P=t*b+n*x+r*y+s*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=b*A,e[1]=(d*f*s-h*m*s-d*r*p+n*m*p+h*r*_-n*f*_)*A,e[2]=(a*m*s-d*l*s+d*r*c-n*m*c-a*r*_+n*l*_)*A,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*A,e[4]=x*A,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*_+t*f*_)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*_-t*l*_)*A,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*A,e[8]=y*A,e[9]=(g*h*s-u*d*s-g*n*p+t*d*p+u*n*_-t*h*_)*A,e[10]=(o*d*s-g*a*s+g*n*c-t*d*c-o*n*_+t*a*_)*A,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*A,e[12]=w*A,e[13]=(u*d*r-g*h*r+g*n*f-t*d*f-u*n*m+t*h*m)*A,e[14]=(g*a*r-o*d*r-g*n*l+t*d*l+o*n*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,d=o*u,m=o*h,_=a*h,b=l*c,x=l*u,y=l*h,w=n.x,P=n.y,A=n.z;return r[0]=(1-(d+_))*w,r[1]=(p+y)*w,r[2]=(g-x)*w,r[3]=0,r[4]=(p-y)*P,r[5]=(1-(f+_))*P,r[6]=(m+b)*P,r[7]=0,r[8]=(g+x)*A,r[9]=(m-b)*A,r[10]=(1-(f+d))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ls.set(r[0],r[1],r[2]).length();const o=Ls.set(r[4],r[5],r[6]).length(),a=Ls.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const c=1/s,u=1/o,h=1/a;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=h,si.elements[9]*=h,si.elements[10]*=h,t.setFromRotationMatrix(si),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ls=new Z,si=new Vt,GM=new Z(0,0,0),VM=new Z(1,1,1),dr=new Z,Qa=new Z,Pn=new Z,Mp=new Vt,Sp=new Ua;class Lc{constructor(e=0,t=0,n=0,r=Lc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Fn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Fn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Fn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Fn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sp.setFromEuler(this),this.setFromQuaternion(Sp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lc.DEFAULT_ORDER="XYZ";class d_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HM=0;const wp=new Z,Ds=new Ua,Vi=new Vt,el=new Z,Go=new Z,WM=new Z,XM=new Ua,Tp=new Z(1,0,0),Ep=new Z(0,1,0),Cp=new Z(0,0,1),qM={type:"added"},Ap={type:"removed"};class yn extends Io{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HM++}),this.uuid=za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const e=new Z,t=new Lc,n=new Ua,r=new Z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Vt},normalMatrix:{value:new mn}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new d_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.multiply(Ds),this}rotateOnWorldAxis(e,t){return Ds.setFromAxisAngle(e,t),this.quaternion.premultiply(Ds),this}rotateX(e){return this.rotateOnAxis(Tp,e)}rotateY(e){return this.rotateOnAxis(Ep,e)}rotateZ(e){return this.rotateOnAxis(Cp,e)}translateOnAxis(e,t){return wp.copy(e).applyQuaternion(this.quaternion),this.position.add(wp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tp,e)}translateY(e){return this.translateOnAxis(Ep,e)}translateZ(e){return this.translateOnAxis(Cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?el.copy(e):el.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Go,el,this.up):Vi.lookAt(el,Go,this.up),this.quaternion.setFromRotationMatrix(Vi),r&&(Vi.extractRotation(r.matrixWorld),Ds.setFromRotationMatrix(Vi),this.quaternion.premultiply(Ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ap)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Ap)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,WM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,XM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}yn.DEFAULT_UP=new Z(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new Z,Hi=new Z,gu=new Z,Wi=new Z,Is=new Z,Os=new Z,Pp=new Z,_u=new Z,xu=new Z,vu=new Z;class Ai{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),oi.subVectors(e,t),r.cross(oi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){oi.subVectors(r,t),Hi.subVectors(n,t),gu.subVectors(e,t);const o=oi.dot(oi),a=oi.dot(Hi),l=oi.dot(gu),c=Hi.dot(Hi),u=Hi.dot(gu),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Wi),Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Wi),l.set(0,0),l.addScaledVector(s,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l}static isFrontFacing(e,t,n,r){return oi.subVectors(n,t),Hi.subVectors(e,t),oi.cross(Hi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),oi.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ai.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ai.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Is.subVectors(r,n),Os.subVectors(s,n),_u.subVectors(e,n);const l=Is.dot(_u),c=Os.dot(_u);if(l<=0&&c<=0)return t.copy(n);xu.subVectors(e,r);const u=Is.dot(xu),h=Os.dot(xu);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Is,o);vu.subVectors(e,s);const p=Is.dot(vu),g=Os.dot(vu);if(g>=0&&p<=g)return t.copy(s);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Os,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Pp.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Pp,a);const _=1/(m+d+f);return o=d*_,a=f*_,t.copy(n).addScaledVector(Is,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let $M=0;class Ba extends Io{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$M++}),this.uuid=za(),this.name="",this.type="Material",this.blending=ro,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=n_,this.blendDst=i_,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ff,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=PM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ru,this.stencilZFail=ru,this.stencilZPass=ru,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(n.blending=this.blending),this.side!==Or&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const p_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},tl={h:0,s:0,l:0};function yu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,on.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=on.workingColorSpace){return this.r=e,this.g=t,this.b=n,on.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=on.workingColorSpace){if(e=RM(e,1),t=Fn(t,0,1),n=Fn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=yu(o,s,e+1/3),this.g=yu(o,s,e),this.b=yu(o,s,e-1/3)}return on.toWorkingColorSpace(this,r),this}setStyle(e,t=Si){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,on.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,on.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,on.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,on.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Si){const n=p_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}copyLinearToSRGB(e){return this.r=lu(e.r),this.g=lu(e.g),this.b=lu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return on.fromWorkingColorSpace(Zt.copy(this),e),Fn(Zt.r*255,0,255)<<16^Fn(Zt.g*255,0,255)<<8^Fn(Zt.b*255,0,255)<<0}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=on.workingColorSpace){on.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=on.workingColorSpace){return on.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Si){on.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,r=Zt.b;return e!==Si?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(ai),ai.h+=e,ai.s+=t,ai.l+=n,this.setHSL(ai.h,ai.s,ai.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(tl);const n=su(ai.h,tl.h,t),r=su(ai.s,tl.s,t),s=su(ai.l,tl.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new mt;mt.NAMES=p_;class m_ extends Ba{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=r_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new Z,nl=new gt;class Di{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_p,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)nl.fromBufferAttribute(this,t),nl.applyMatrix3(e),this.setXY(t,nl.x,nl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ya(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ya(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ya(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ya(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),n=An(n,this.array),r=An(r,this.array),s=An(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_p&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class g_ extends Di{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class __ extends Di{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ii extends Di{constructor(e,t,n){super(new Float32Array(e),t,n)}}let YM=0;const Wn=new Vt,bu=new yn,Fs=new Z,Rn=new ka,Vo=new ka,kt=new Z;class sr extends Io{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YM++}),this.uuid=za(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(l_(e)?__:g_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new mn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return bu.lookAt(e),bu.updateMatrix(),this.applyMatrix4(bu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ii(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Vo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(Rn.min,Vo.min),Rn.expandByPoint(kt),kt.addVectors(Rn.max,Vo.max),Rn.expandByPoint(kt)):(Rn.expandByPoint(Vo.min),Rn.expandByPoint(Vo.max))}Rn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(kt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)kt.fromBufferAttribute(a,c),l&&(Fs.fromBufferAttribute(e,c),kt.add(Fs)),r=Math.max(r,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<a;L++)c[L]=new Z,u[L]=new Z;const h=new Z,f=new Z,p=new Z,g=new gt,d=new gt,m=new gt,_=new Z,b=new Z;function x(L,W,O){h.fromArray(r,L*3),f.fromArray(r,W*3),p.fromArray(r,O*3),g.fromArray(o,L*2),d.fromArray(o,W*2),m.fromArray(o,O*2),f.sub(h),p.sub(h),d.sub(g),m.sub(g);const U=1/(d.x*m.y-m.x*d.y);isFinite(U)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(U),b.copy(p).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(U),c[L].add(_),c[W].add(_),c[O].add(_),u[L].add(b),u[W].add(b),u[O].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let L=0,W=y.length;L<W;++L){const O=y[L],U=O.start,N=O.count;for(let X=U,j=U+N;X<j;X+=3)x(n[X+0],n[X+1],n[X+2])}const w=new Z,P=new Z,A=new Z,v=new Z;function S(L){A.fromArray(s,L*3),v.copy(A);const W=c[L];w.copy(W),w.sub(A.multiplyScalar(A.dot(W))).normalize(),P.crossVectors(v,W);const U=P.dot(u[L])<0?-1:1;l[L*4]=w.x,l[L*4+1]=w.y,l[L*4+2]=w.z,l[L*4+3]=U}for(let L=0,W=y.length;L<W;++L){const O=y[L],U=O.start,N=O.count;for(let X=U,j=U+N;X<j;X+=3)S(n[X+0]),S(n[X+1]),S(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Di(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,h=new Z;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),d=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new Di(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sr,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rp=new Vt,Mi=new h_,il=new Rc,Lp=new Z,Ho=new Z,Wo=new Z,Xo=new Z,Mu=new Z,rl=new Z,sl=new gt,ol=new gt,al=new gt,Su=new Z,ll=new Z;class ji extends yn{constructor(e=new sr,t=new m_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){rl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Mu.fromBufferAttribute(h,e),o?rl.addScaledVector(Mu,u):rl.addScaledVector(Mu.sub(t),u))}t.add(rl)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),il.copy(n.boundingSphere),il.applyMatrix4(s),Mi.copy(e.ray).recast(e.near),il.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(il,Lp)===null||Mi.origin.distanceToSquared(Lp)>(e.far-e.near)**2))||(Rp.copy(s).invert(),Mi.copy(e.ray).applyMatrix4(Rp),n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=r[d.materialIndex],_=Math.max(d.start,f.start),b=Math.min(a.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,y=b;x<y;x+=3){const w=a.getX(x),P=a.getX(x+1),A=a.getX(x+2);o=cl(this,m,e,Mi,c,u,w,P,A),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=a.getX(d),b=a.getX(d+1),x=a.getX(d+2);o=cl(this,r,e,Mi,c,u,_,b,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=r[d.materialIndex],_=Math.max(d.start,f.start),b=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,y=b;x<y;x+=3){const w=x,P=x+1,A=x+2;o=cl(this,m,e,Mi,c,u,w,P,A),o&&(o.faceIndex=Math.floor(x/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=d,b=d+1,x=d+2;o=cl(this,r,e,Mi,c,u,_,b,x),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function jM(i,e,t,n,r,s,o,a){let l;if(e.side===kn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;ll.copy(a),ll.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ll);return c<t.near||c>t.far?null:{distance:c,point:ll.clone(),object:i}}function cl(i,e,t,n,r,s,o,a,l){i.getVertexPosition(o,Ho),i.getVertexPosition(a,Wo),i.getVertexPosition(l,Xo);const c=jM(i,e,t,n,Ho,Wo,Xo,Su);if(c){r&&(sl.fromBufferAttribute(r,o),ol.fromBufferAttribute(r,a),al.fromBufferAttribute(r,l),c.uv=Ai.getUV(Su,Ho,Wo,Xo,sl,ol,al,new gt)),s&&(sl.fromBufferAttribute(s,o),ol.fromBufferAttribute(s,a),al.fromBufferAttribute(s,l),c.uv2=Ai.getUV(Su,Ho,Wo,Xo,sl,ol,al,new gt));const u={a:o,b:a,c:l,normal:new Z,materialIndex:0};Ai.getNormal(Ho,Wo,Xo,u.normal),c.face=u}return c}class Oo extends sr{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(u,3)),this.setAttribute("uv",new Ii(h,2));function g(d,m,_,b,x,y,w,P,A,v,S){const L=y/A,W=w/v,O=y/2,U=w/2,N=P/2,X=A+1,j=v+1;let q=0,G=0;const le=new Z;for(let D=0;D<j;D++){const ye=D*W-U;for(let H=0;H<X;H++){const ue=H*L-O;le[d]=ue*b,le[m]=ye*x,le[_]=N,c.push(le.x,le.y,le.z),le[d]=0,le[m]=0,le[_]=P>0?1:-1,u.push(le.x,le.y,le.z),h.push(H/A),h.push(1-D/v),q+=1}}for(let D=0;D<v;D++)for(let ye=0;ye<A;ye++){const H=f+ye+X*D,ue=f+ye+X*(D+1),pe=f+(ye+1)+X*(D+1),R=f+(ye+1)+X*D;l.push(H,ue,R),l.push(ue,pe,R),G+=6}a.addGroup(p,G,S),p+=G,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function cn(i){const e={};for(let t=0;t<i.length;t++){const n=yo(i[t]);for(const r in n)e[r]=n[r]}return e}function KM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function x_(i){return i.getRenderTarget()===null&&i.outputEncoding===pt?Si:Aa}const ZM={clone:yo,merge:cn};var JM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,QM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends Ba{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JM,this.fragmentShader=QM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=KM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class v_ extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class jn extends v_{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vp*2*Math.atan(Math.tan(Nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Nl*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ns=-90,zs=1;class eS extends yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new jn(Ns,zs,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new jn(Ns,zs,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new jn(Ns,zs,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new jn(Ns,zs,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new jn(Ns,zs,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new jn(Ns,zs,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Ji,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class y_ extends Bn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:_o,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tS extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new y_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Oo(5,5,5),s=new Fr({name:"CubemapFromEquirect",uniforms:yo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kn,blending:Ar});s.uniforms.tEquirect.value=t;const o=new ji(r,s),a=t.minFilter;return t.minFilter===Ea&&(t.minFilter=Yn),new eS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const wu=new Z,nS=new Z,iS=new mn;class Zr{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=wu.subVectors(n,t).cross(nS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||iS.getNormalMatrix(e),r=this.coplanarPoint(wu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Us=new Rc,ul=new Z;class b_{constructor(e=new Zr,t=new Zr,n=new Zr,r=new Zr,s=new Zr,o=new Zr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],b=n[14],x=n[15];return t[0].setComponents(a-r,h-l,d-f,x-m).normalize(),t[1].setComponents(a+r,h+l,d+f,x+m).normalize(),t[2].setComponents(a+s,h+c,d+p,x+_).normalize(),t[3].setComponents(a-s,h-c,d-p,x-_).normalize(),t[4].setComponents(a-o,h-u,d-g,x-b).normalize(),t[5].setComponents(a+o,h+u,d+g,x+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSprite(e){return Us.center.set(0,0,0),Us.radius=.7071067811865476,Us.applyMatrix4(e.matrixWorld),this.intersectsSphere(Us)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ul.x=r.normal.x>0?e.max.x:e.min.x,ul.y=r.normal.y>0?e.max.y:e.min.y,ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function M_(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function rS(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Dc extends sr{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const b=_*f-o;for(let x=0;x<c;x++){const y=x*h-s;g.push(y,-b,0),d.push(0,0,1),m.push(x/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const x=b+c*_,y=b+c*(_+1),w=b+1+c*(_+1),P=b+1+c*_;p.push(x,y,P),p.push(y,w,P)}this.setIndex(p),this.setAttribute("position",new Ii(g,3)),this.setAttribute("normal",new Ii(d,3)),this.setAttribute("uv",new Ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dc(e.width,e.height,e.widthSegments,e.heightSegments)}}var sS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,oS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,lS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fS="vec3 transformed = vec3( position );",hS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dS=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,pS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,mS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,gS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,_S=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,MS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,SS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,wS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,TS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ES=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,PS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,LS="gl_FragColor = linearToOutputTexel( gl_FragColor );",DS=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,FS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,US=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,GS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HS=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,WS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,XS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$S=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,YS=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,jS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,e1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,t1=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,r1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,a1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,u1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,f1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,g1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,_1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,x1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,v1=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,w1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,T1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,E1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,C1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,R1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,O1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,F1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,N1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,z1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,U1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,k1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,B1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,G1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,V1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,H1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,j1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,K1=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Z1=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,J1=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Q1=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ew=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,tw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,nw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ow=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,aw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_w=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ww=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Tw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ew=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Aw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Iw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ow=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ye={alphamap_fragment:sS,alphamap_pars_fragment:oS,alphatest_fragment:aS,alphatest_pars_fragment:lS,aomap_fragment:cS,aomap_pars_fragment:uS,begin_vertex:fS,beginnormal_vertex:hS,bsdfs:dS,iridescence_fragment:pS,bumpmap_pars_fragment:mS,clipping_planes_fragment:gS,clipping_planes_pars_fragment:_S,clipping_planes_pars_vertex:xS,clipping_planes_vertex:vS,color_fragment:yS,color_pars_fragment:bS,color_pars_vertex:MS,color_vertex:SS,common:wS,cube_uv_reflection_fragment:TS,defaultnormal_vertex:ES,displacementmap_pars_vertex:CS,displacementmap_vertex:AS,emissivemap_fragment:PS,emissivemap_pars_fragment:RS,encodings_fragment:LS,encodings_pars_fragment:DS,envmap_fragment:IS,envmap_common_pars_fragment:OS,envmap_pars_fragment:FS,envmap_pars_vertex:NS,envmap_physical_pars_fragment:YS,envmap_vertex:zS,fog_vertex:US,fog_pars_vertex:kS,fog_fragment:BS,fog_pars_fragment:GS,gradientmap_pars_fragment:VS,lightmap_fragment:HS,lightmap_pars_fragment:WS,lights_lambert_fragment:XS,lights_lambert_pars_fragment:qS,lights_pars_begin:$S,lights_toon_fragment:jS,lights_toon_pars_fragment:KS,lights_phong_fragment:ZS,lights_phong_pars_fragment:JS,lights_physical_fragment:QS,lights_physical_pars_fragment:e1,lights_fragment_begin:t1,lights_fragment_maps:n1,lights_fragment_end:i1,logdepthbuf_fragment:r1,logdepthbuf_pars_fragment:s1,logdepthbuf_pars_vertex:o1,logdepthbuf_vertex:a1,map_fragment:l1,map_pars_fragment:c1,map_particle_fragment:u1,map_particle_pars_fragment:f1,metalnessmap_fragment:h1,metalnessmap_pars_fragment:d1,morphcolor_vertex:p1,morphnormal_vertex:m1,morphtarget_pars_vertex:g1,morphtarget_vertex:_1,normal_fragment_begin:x1,normal_fragment_maps:v1,normal_pars_fragment:y1,normal_pars_vertex:b1,normal_vertex:M1,normalmap_pars_fragment:S1,clearcoat_normal_fragment_begin:w1,clearcoat_normal_fragment_maps:T1,clearcoat_pars_fragment:E1,iridescence_pars_fragment:C1,output_fragment:A1,packing:P1,premultiplied_alpha_fragment:R1,project_vertex:L1,dithering_fragment:D1,dithering_pars_fragment:I1,roughnessmap_fragment:O1,roughnessmap_pars_fragment:F1,shadowmap_pars_fragment:N1,shadowmap_pars_vertex:z1,shadowmap_vertex:U1,shadowmask_pars_fragment:k1,skinbase_vertex:B1,skinning_pars_vertex:G1,skinning_vertex:V1,skinnormal_vertex:H1,specularmap_fragment:W1,specularmap_pars_fragment:X1,tonemapping_fragment:q1,tonemapping_pars_fragment:$1,transmission_fragment:Y1,transmission_pars_fragment:j1,uv_pars_fragment:K1,uv_pars_vertex:Z1,uv_vertex:J1,uv2_pars_fragment:Q1,uv2_pars_vertex:ew,uv2_vertex:tw,worldpos_vertex:nw,background_vert:iw,background_frag:rw,backgroundCube_vert:sw,backgroundCube_frag:ow,cube_vert:aw,cube_frag:lw,depth_vert:cw,depth_frag:uw,distanceRGBA_vert:fw,distanceRGBA_frag:hw,equirect_vert:dw,equirect_frag:pw,linedashed_vert:mw,linedashed_frag:gw,meshbasic_vert:_w,meshbasic_frag:xw,meshlambert_vert:vw,meshlambert_frag:yw,meshmatcap_vert:bw,meshmatcap_frag:Mw,meshnormal_vert:Sw,meshnormal_frag:ww,meshphong_vert:Tw,meshphong_frag:Ew,meshphysical_vert:Cw,meshphysical_frag:Aw,meshtoon_vert:Pw,meshtoon_frag:Rw,points_vert:Lw,points_frag:Dw,shadow_vert:Iw,shadow_frag:Ow,sprite_vert:Fw,sprite_frag:Nw},we={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new mn},uv2Transform:{value:new mn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mn}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new mn}}},Ei={basic:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:cn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:cn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:cn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:cn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:cn([we.points,we.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:cn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:cn([we.common,we.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:cn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:cn([we.sprite,we.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new mn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:cn([we.common,we.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:cn([we.lights,we.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Ei.physical={uniforms:cn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new gt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const fl={r:0,b:0,g:0};function zw(i,e,t,n,r,s,o){const a=new mt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,_){let b=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const y=i.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(x=null),x===null?d(a,l):x&&x.isColor&&(d(x,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Pc)?(u===void 0&&(u=new ji(new Oo(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:yo(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==pt,(h!==x||f!==x.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ji(new Dc(2,2),new Fr({name:"BackgroundMaterial",uniforms:yo(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(fl,x_(i)),n.buffers.color.setClear(fl.r,fl.g,fl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function Uw(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(N,X,j,q,G){let le=!1;if(o){const D=d(q,j,X);c!==D&&(c=D,p(c.object)),le=_(N,q,j,G),le&&b(N,q,j,G)}else{const D=X.wireframe===!0;(c.geometry!==q.id||c.program!==j.id||c.wireframe!==D)&&(c.geometry=q.id,c.program=j.id,c.wireframe=D,le=!0)}G!==null&&t.update(G,34963),(le||u)&&(u=!1,v(N,X,j,q),G!==null&&i.bindBuffer(34963,t.get(G).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function d(N,X,j){const q=j.wireframe===!0;let G=a[N.id];G===void 0&&(G={},a[N.id]=G);let le=G[X.id];le===void 0&&(le={},G[X.id]=le);let D=le[q];return D===void 0&&(D=m(f()),le[q]=D),D}function m(N){const X=[],j=[],q=[];for(let G=0;G<r;G++)X[G]=0,j[G]=0,q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:j,attributeDivisors:q,object:N,attributes:{},index:null}}function _(N,X,j,q){const G=c.attributes,le=X.attributes;let D=0;const ye=j.getAttributes();for(const H in ye)if(ye[H].location>=0){const pe=G[H];let R=le[H];if(R===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),pe===void 0||pe.attribute!==R||R&&pe.data!==R.data)return!0;D++}return c.attributesNum!==D||c.index!==q}function b(N,X,j,q){const G={},le=X.attributes;let D=0;const ye=j.getAttributes();for(const H in ye)if(ye[H].location>=0){let pe=le[H];pe===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(pe=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(pe=N.instanceColor));const R={};R.attribute=pe,pe&&pe.data&&(R.data=pe.data),G[H]=R,D++}c.attributes=G,c.attributesNum=D,c.index=q}function x(){const N=c.newAttributes;for(let X=0,j=N.length;X<j;X++)N[X]=0}function y(N){w(N,0)}function w(N,X){const j=c.newAttributes,q=c.enabledAttributes,G=c.attributeDivisors;j[N]=1,q[N]===0&&(i.enableVertexAttribArray(N),q[N]=1),G[N]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),G[N]=X)}function P(){const N=c.newAttributes,X=c.enabledAttributes;for(let j=0,q=X.length;j<q;j++)X[j]!==N[j]&&(i.disableVertexAttribArray(j),X[j]=0)}function A(N,X,j,q,G,le){n.isWebGL2===!0&&(j===5124||j===5125)?i.vertexAttribIPointer(N,X,j,G,le):i.vertexAttribPointer(N,X,j,q,G,le)}function v(N,X,j,q){if(n.isWebGL2===!1&&(N.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const G=q.attributes,le=j.getAttributes(),D=X.defaultAttributeValues;for(const ye in le){const H=le[ye];if(H.location>=0){let ue=G[ye];if(ue===void 0&&(ye==="instanceMatrix"&&N.instanceMatrix&&(ue=N.instanceMatrix),ye==="instanceColor"&&N.instanceColor&&(ue=N.instanceColor)),ue!==void 0){const pe=ue.normalized,R=ue.itemSize,Y=t.get(ue);if(Y===void 0)continue;const K=Y.buffer,ae=Y.type,me=Y.bytesPerElement;if(ue.isInterleavedBufferAttribute){const Me=ue.data,be=Me.stride,T=ue.offset;if(Me.isInstancedInterleavedBuffer){for(let I=0;I<H.locationSize;I++)w(H.location+I,Me.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let I=0;I<H.locationSize;I++)y(H.location+I);i.bindBuffer(34962,K);for(let I=0;I<H.locationSize;I++)A(H.location+I,R/H.locationSize,ae,pe,be*me,(T+R/H.locationSize*I)*me)}else{if(ue.isInstancedBufferAttribute){for(let Me=0;Me<H.locationSize;Me++)w(H.location+Me,ue.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Me=0;Me<H.locationSize;Me++)y(H.location+Me);i.bindBuffer(34962,K);for(let Me=0;Me<H.locationSize;Me++)A(H.location+Me,R/H.locationSize,ae,pe,R*me,R/H.locationSize*Me*me)}}else if(D!==void 0){const pe=D[ye];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(H.location,pe);break;case 3:i.vertexAttrib3fv(H.location,pe);break;case 4:i.vertexAttrib4fv(H.location,pe);break;default:i.vertexAttrib1fv(H.location,pe)}}}}P()}function S(){O();for(const N in a){const X=a[N];for(const j in X){const q=X[j];for(const G in q)g(q[G].object),delete q[G];delete X[j]}delete a[N]}}function L(N){if(a[N.id]===void 0)return;const X=a[N.id];for(const j in X){const q=X[j];for(const G in q)g(q[G].object),delete q[G];delete X[j]}delete a[N.id]}function W(N){for(const X in a){const j=a[X];if(j[N.id]===void 0)continue;const q=j[N.id];for(const G in q)g(q[G].object),delete q[G];delete j[N.id]}}function O(){U(),u=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:U,dispose:S,releaseStatesOfGeometry:L,releaseStatesOfProgram:W,initAttributes:x,enableAttribute:y,disableUnusedAttributes:P}}function kw(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function Bw(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),d=i.getParameter(34921),m=i.getParameter(36347),_=i.getParameter(36348),b=i.getParameter(36349),x=f>0,y=o||e.has("OES_texture_float"),w=x&&y,P=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:P}}function Gw(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Zr,a=new mn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,d=h.clipIntersection,m=h.clipShadows,_=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,x=b*4;let y=_.clippingState||null;l.value=y,y=u(g,f,x,p);for(let w=0;w!==x;++w)y[w]=t[w];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const d=h!==null?h.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,y=p;x!==d;++x,y+=4)o.copy(h[x]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function Vw(i){let e=new WeakMap;function t(o,a){return a===hf?o.mapping=_o:a===df&&(o.mapping=xo),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===hf||a===df)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tS(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Hw extends v_{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const js=4,Dp=[.125,.215,.35,.446,.526,.582],rs=20,Tu=new Hw,Ip=new mt;let Eu=null;const Jr=(1+Math.sqrt(5))/2,ks=1/Jr,Op=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,Jr,ks),new Z(0,Jr,-ks),new Z(ks,0,Jr),new Z(-ks,0,Jr),new Z(Jr,ks,0),new Z(-Jr,ks,0)];class Fp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Eu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eu),e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_o||e.mapping===xo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eu=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Ca,format:pi,encoding:vs,depthBuffer:!1},r=Np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Np(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ww(s)),this._blurMaterial=Xw(s,e,t)}return r}_compileMaterial(e){const t=new ji(this._lodPlanes[0],e);this._renderer.compile(t,Tu)}_sceneToCubeUV(e,t,n,r){const a=new jn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ip),u.toneMapping=Ji,u.autoClear=!1;const p=new m_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),g=new ji(new Oo,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(Ip),d=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const x=this._cubeSize;hl(r,b*x,_>2?x:0,x,x),u.setRenderTarget(r),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===_o||e.mapping===xo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ji(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Tu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Op[(r-1)%Op.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ji(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*rs-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):rs;m>rs&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const _=[];let b=0;for(let A=0;A<rs;++A){const v=A/d,S=Math.exp(-v*v/2);_.push(S),A===0?b+=S:A<m&&(b+=2*S)}for(let A=0;A<_.length;A++)_[A]=_[A]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[r],w=3*y*(r>x-js?r-x+js:0),P=4*(this._cubeSize-y);hl(t,w,P,3*y,2*y),l.setRenderTarget(t),l.render(h,Tu)}}function Ww(i){const e=[],t=[],n=[];let r=i;const s=i-js+1+Dp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-js?l=Dp[o-i+js-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,d=3,m=2,_=1,b=new Float32Array(d*g*p),x=new Float32Array(m*g*p),y=new Float32Array(_*g*p);for(let P=0;P<p;P++){const A=P%3*2/3-1,v=P>2?0:-1,S=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];b.set(S,d*g*P),x.set(f,m*g*P);const L=[P,P,P,P,P,P];y.set(L,_*g*P)}const w=new sr;w.setAttribute("position",new Di(b,d)),w.setAttribute("uv",new Di(x,m)),w.setAttribute("faceIndex",new Di(y,_)),e.push(w),r>js&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Np(i,e,t){const n=new ys(i,e,t);return n.texture.mapping=Pc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Xw(i,e,t){const n=new Float32Array(rs),r=new Z(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function zp(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Up(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function _h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qw(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===hf||l===df,u=l===_o||l===xo;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Fp(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new Fp(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function $w(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Yw(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let d=0;if(p!==null){const b=p.array;d=p.version;for(let x=0,y=b.length;x<y;x+=3){const w=b[x+0],P=b[x+1],A=b[x+2];f.push(w,P,P,A,A,w)}}else{const b=g.array;d=g.version;for(let x=0,y=b.length/3-1;x<y;x+=3){const w=x+0,P=x+1,A=x+2;f.push(w,P,P,A,A,w)}}const m=new(l_(f)?__:g_)(f,1);m.version=d;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function jw(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(s,p,a,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let d,m;if(r)d=i,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,p,a,f*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function Kw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Zw(i,e){return i[0]-e[0]}function Jw(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Qw(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new $t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==d){let X=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",X)};var p=X;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let S=0;x===!0&&(S=1),y===!0&&(S=2),w===!0&&(S=3);let L=u.attributes.position.count*S,W=1;L>e.maxTextureSize&&(W=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const O=new Float32Array(L*W*4*d),U=new f_(O,L,W,d);U.type=os,U.needsUpdate=!0;const N=S*4;for(let j=0;j<d;j++){const q=P[j],G=A[j],le=v[j],D=L*W*4*j;for(let ye=0;ye<q.count;ye++){const H=ye*N;x===!0&&(o.fromBufferAttribute(q,ye),O[D+H+0]=o.x,O[D+H+1]=o.y,O[D+H+2]=o.z,O[D+H+3]=0),y===!0&&(o.fromBufferAttribute(G,ye),O[D+H+4]=o.x,O[D+H+5]=o.y,O[D+H+6]=o.z,O[D+H+7]=0),w===!0&&(o.fromBufferAttribute(le,ye),O[D+H+8]=o.x,O[D+H+9]=o.y,O[D+H+10]=o.z,O[D+H+11]=le.itemSize===4?o.w:1)}}m={count:d,texture:U,size:new gt(L,W)},s.set(u,m),u.addEventListener("dispose",X)}let _=0;for(let x=0;x<f.length;x++)_+=f[x];const b=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let y=0;y<g;y++)d[y]=[y,0];n[u.id]=d}for(let y=0;y<g;y++){const w=d[y];w[0]=y,w[1]=f[y]}d.sort(Jw);for(let y=0;y<8;y++)y<g&&d[y][1]?(a[y][0]=d[y][0],a[y][1]=d[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(Zw);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const w=a[y],P=w[0],A=w[1];P!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+y)!==m[P]&&u.setAttribute("morphTarget"+y,m[P]),_&&u.getAttribute("morphNormal"+y)!==_[P]&&u.setAttribute("morphNormal"+y,_[P]),r[y]=A,b+=A):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const x=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function eT(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const S_=new Bn,w_=new f_,T_=new kM,E_=new y_,kp=[],Bp=[],Gp=new Float32Array(16),Vp=new Float32Array(9),Hp=new Float32Array(4);function Fo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=kp[r];if(s===void 0&&(s=new Float32Array(r),kp[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ic(i,e){let t=Bp[e];t===void 0&&(t=new Int32Array(e),Bp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function tT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function nT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function iT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function rT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function sT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Nt(t,n))return;Hp.set(n),i.uniformMatrix2fv(this.addr,!1,Hp),zt(t,n)}}function oT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Nt(t,n))return;Vp.set(n),i.uniformMatrix3fv(this.addr,!1,Vp),zt(t,n)}}function aT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Nt(t,n))return;Gp.set(n),i.uniformMatrix4fv(this.addr,!1,Gp),zt(t,n)}}function lT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function uT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function fT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function hT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function dT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function pT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function mT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function gT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||S_,r)}function _T(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||T_,r)}function xT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||E_,r)}function vT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||w_,r)}function yT(i){switch(i){case 5126:return tT;case 35664:return nT;case 35665:return iT;case 35666:return rT;case 35674:return sT;case 35675:return oT;case 35676:return aT;case 5124:case 35670:return lT;case 35667:case 35671:return cT;case 35668:case 35672:return uT;case 35669:case 35673:return fT;case 5125:return hT;case 36294:return dT;case 36295:return pT;case 36296:return mT;case 35678:case 36198:case 36298:case 36306:case 35682:return gT;case 35679:case 36299:case 36307:return _T;case 35680:case 36300:case 36308:case 36293:return xT;case 36289:case 36303:case 36311:case 36292:return vT}}function bT(i,e){i.uniform1fv(this.addr,e)}function MT(i,e){const t=Fo(e,this.size,2);i.uniform2fv(this.addr,t)}function ST(i,e){const t=Fo(e,this.size,3);i.uniform3fv(this.addr,t)}function wT(i,e){const t=Fo(e,this.size,4);i.uniform4fv(this.addr,t)}function TT(i,e){const t=Fo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ET(i,e){const t=Fo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function CT(i,e){const t=Fo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function AT(i,e){i.uniform1iv(this.addr,e)}function PT(i,e){i.uniform2iv(this.addr,e)}function RT(i,e){i.uniform3iv(this.addr,e)}function LT(i,e){i.uniform4iv(this.addr,e)}function DT(i,e){i.uniform1uiv(this.addr,e)}function IT(i,e){i.uniform2uiv(this.addr,e)}function OT(i,e){i.uniform3uiv(this.addr,e)}function FT(i,e){i.uniform4uiv(this.addr,e)}function NT(i,e,t){const n=this.cache,r=e.length,s=Ic(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||S_,s[o])}function zT(i,e,t){const n=this.cache,r=e.length,s=Ic(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||T_,s[o])}function UT(i,e,t){const n=this.cache,r=e.length,s=Ic(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||E_,s[o])}function kT(i,e,t){const n=this.cache,r=e.length,s=Ic(t,r);Nt(n,s)||(i.uniform1iv(this.addr,s),zt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||w_,s[o])}function BT(i){switch(i){case 5126:return bT;case 35664:return MT;case 35665:return ST;case 35666:return wT;case 35674:return TT;case 35675:return ET;case 35676:return CT;case 5124:case 35670:return AT;case 35667:case 35671:return PT;case 35668:case 35672:return RT;case 35669:case 35673:return LT;case 5125:return DT;case 36294:return IT;case 36295:return OT;case 36296:return FT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return kT}}class GT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=yT(t.type)}}class VT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=BT(t.type)}}class HT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Cu=/(\w+)(\])?(\[|\.)?/g;function Wp(i,e){i.seq.push(e),i.map[e.id]=e}function WT(i,e,t){const n=i.name,r=n.length;for(Cu.lastIndex=0;;){const s=Cu.exec(n),o=Cu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Wp(t,c===void 0?new GT(a,i,e):new VT(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new HT(a),Wp(t,h)),t=h}}}class zl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);WT(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Xp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let XT=0;function qT(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function $T(i){switch(i){case vs:return["Linear","( value )"];case pt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function qp(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+qT(i.getShaderSource(e),o)}else return r}function YT(i,e){const t=$T(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function jT(i,e){let t;switch(e){case rM:t="Linear";break;case sM:t="Reinhard";break;case oM:t="OptimizedCineon";break;case aM:t="ACESFilmic";break;case lM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function KT(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zo).join(`
`)}function ZT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function JT(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Zo(i){return i!==""}function $p(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const QT=/^[ \t]*#include +<([\w\d./]+)>/gm;function _f(i){return i.replace(QT,eE)}function eE(i,e){const t=Ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return _f(t)}const tE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jp(i){return i.replace(tE,nE)}function nE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kp(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===t_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nb?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ko&&(e="SHADOWMAP_TYPE_VSM"),e}function rE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _o:case xo:e="ENVMAP_TYPE_CUBE";break;case Pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case xo:e="ENVMAP_MODE_REFRACTION";break}return e}function oE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case r_:e="ENVMAP_BLENDING_MULTIPLY";break;case nM:e="ENVMAP_BLENDING_MIX";break;case iM:e="ENVMAP_BLENDING_ADD";break}return e}function aE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function lE(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=iE(t),c=rE(t),u=sE(t),h=oE(t),f=aE(t),p=t.isWebGL2?"":KT(t),g=ZT(s),d=r.createProgram();let m,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Zo).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(Zo).join(`
`),_.length>0&&(_+=`
`)):(m=[Kp(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),_=[p,Kp(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Ji?jT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.encodings_pars_fragment,YT("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zo).join(`
`)),o=_f(o),o=$p(o,t),o=Yp(o,t),a=_f(a),a=$p(a,t),a=Yp(a,t),o=jp(o),a=jp(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===xp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=b+m+o,y=b+_+a,w=Xp(r,35633,x),P=Xp(r,35632,y);if(r.attachShader(d,w),r.attachShader(d,P),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),i.debug.checkShaderErrors){const S=r.getProgramInfoLog(d).trim(),L=r.getShaderInfoLog(w).trim(),W=r.getShaderInfoLog(P).trim();let O=!0,U=!0;if(r.getProgramParameter(d,35714)===!1){O=!1;const N=qp(r,w,"vertex"),X=qp(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+S+`
`+N+`
`+X)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(L===""||W==="")&&(U=!1);U&&(this.diagnostics={runnable:O,programLog:S,vertexShader:{log:L,prefix:m},fragmentShader:{log:W,prefix:_}})}r.deleteShader(w),r.deleteShader(P);let A;this.getUniforms=function(){return A===void 0&&(A=new zl(r,d)),A};let v;return this.getAttributes=function(){return v===void 0&&(v=JT(r,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=XT++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=w,this.fragmentShader=P,this}let cE=0;class uE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new fE(e),t.set(e,n)),n}}class fE{constructor(e){this.id=cE++,this.code=e,this.usedTimes=0}}function hE(i,e,t,n,r,s,o){const a=new d_,l=new uE,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,S,L,W,O){const U=W.fog,N=O.geometry,X=v.isMeshStandardMaterial?W.environment:null,j=(v.isMeshStandardMaterial?t:e).get(v.envMap||X),q=j&&j.mapping===Pc?j.image.height:null,G=g[v.type];v.precision!==null&&(p=r.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const le=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,D=le!==void 0?le.length:0;let ye=0;N.morphAttributes.position!==void 0&&(ye=1),N.morphAttributes.normal!==void 0&&(ye=2),N.morphAttributes.color!==void 0&&(ye=3);let H,ue,pe,R;if(G){const be=Ei[G];H=be.vertexShader,ue=be.fragmentShader}else H=v.vertexShader,ue=v.fragmentShader,l.update(v),pe=l.getVertexShaderID(v),R=l.getFragmentShaderID(v);const Y=i.getRenderTarget(),K=v.alphaTest>0,ae=v.clearcoat>0,me=v.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:v.type,vertexShader:H,fragmentShader:ue,defines:v.defines,customVertexShaderID:pe,customFragmentShaderID:R,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?i.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:vs,map:!!v.map,matcap:!!v.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:q,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===AM,tangentSpaceNormalMap:v.normalMapType===CM,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===pt,clearcoat:ae,clearcoatMap:ae&&!!v.clearcoatMap,clearcoatRoughnessMap:ae&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ae&&!!v.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!v.iridescenceMap,iridescenceThicknessMap:me&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===ro,alphaMap:!!v.alphaMap,alphaTest:K,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!N.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!U,useFog:v.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:ye,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:v.toneMapped?i.toneMapping:Ji,useLegacyLights:i.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===_r,flipSided:v.side===kn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const L in v.defines)S.push(L),S.push(v.defines[L]);return v.isRawShaderMaterial===!1&&(_(S,v),b(S,v),S.push(i.outputEncoding)),S.push(v.customProgramCacheKey),S.join()}function _(v,S){v.push(S.precision),v.push(S.outputEncoding),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.combine),v.push(S.vertexUvs),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.specularIntensityMap&&a.enable(15),S.specularColorMap&&a.enable(16),S.transmission&&a.enable(17),S.transmissionMap&&a.enable(18),S.thicknessMap&&a.enable(19),S.sheen&&a.enable(20),S.sheenColorMap&&a.enable(21),S.sheenRoughnessMap&&a.enable(22),S.decodeVideoTexture&&a.enable(23),S.opaque&&a.enable(24),v.push(a.mask)}function x(v){const S=g[v.type];let L;if(S){const W=Ei[S];L=ZM.clone(W.uniforms)}else L=v.uniforms;return L}function y(v,S){let L;for(let W=0,O=c.length;W<O;W++){const U=c[W];if(U.cacheKey===S){L=U,++L.usedTimes;break}}return L===void 0&&(L=new lE(i,S,v,s),c.push(L)),L}function w(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),v.destroy()}}function P(v){l.remove(v)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:x,acquireProgram:y,releaseProgram:w,releaseShaderCache:P,programs:c,dispose:A}}function dE(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function pE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Zp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,g,d,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:d,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=m),e++,_}function a(h,f,p,g,d,m){const _=o(h,f,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):t.push(_)}function l(h,f,p,g,d,m){const _=o(h,f,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||pE),n.length>1&&n.sort(f||Zp),r.length>1&&r.sort(f||Zp)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function mE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Jp,i.set(n,[o])):r>=s.length?(o=new Jp,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function gE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new mt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function _E(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xE=0;function vE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yE(i,e){const t=new gE,n=_E(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new Z);const s=new Z,o=new Vt,a=new Vt;function l(u,h){let f=0,p=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let d=0,m=0,_=0,b=0,x=0,y=0,w=0,P=0,A=0,v=0;u.sort(vE);const S=h===!0?Math.PI:1;for(let W=0,O=u.length;W<O;W++){const U=u[W],N=U.color,X=U.intensity,j=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=N.r*X*S,p+=N.g*X*S,g+=N.b*X*S;else if(U.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(U.sh.coefficients[G],X);else if(U.isDirectionalLight){const G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*S),U.castShadow){const le=U.shadow,D=n.get(U);D.shadowBias=le.bias,D.shadowNormalBias=le.normalBias,D.shadowRadius=le.radius,D.shadowMapSize=le.mapSize,r.directionalShadow[d]=D,r.directionalShadowMap[d]=q,r.directionalShadowMatrix[d]=U.shadow.matrix,y++}r.directional[d]=G,d++}else if(U.isSpotLight){const G=t.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(N).multiplyScalar(X*S),G.distance=j,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,r.spot[_]=G;const le=U.shadow;if(U.map&&(r.spotLightMap[A]=U.map,A++,le.updateMatrices(U),U.castShadow&&v++),r.spotLightMatrix[_]=le.matrix,U.castShadow){const D=n.get(U);D.shadowBias=le.bias,D.shadowNormalBias=le.normalBias,D.shadowRadius=le.radius,D.shadowMapSize=le.mapSize,r.spotShadow[_]=D,r.spotShadowMap[_]=q,P++}_++}else if(U.isRectAreaLight){const G=t.get(U);G.color.copy(N).multiplyScalar(X),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),r.rectArea[b]=G,b++}else if(U.isPointLight){const G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*S),G.distance=U.distance,G.decay=U.decay,U.castShadow){const le=U.shadow,D=n.get(U);D.shadowBias=le.bias,D.shadowNormalBias=le.normalBias,D.shadowRadius=le.radius,D.shadowMapSize=le.mapSize,D.shadowCameraNear=le.camera.near,D.shadowCameraFar=le.camera.far,r.pointShadow[m]=D,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=U.shadow.matrix,w++}r.point[m]=G,m++}else if(U.isHemisphereLight){const G=t.get(U);G.skyColor.copy(U.color).multiplyScalar(X*S),G.groundColor.copy(U.groundColor).multiplyScalar(X*S),r.hemi[x]=G,x++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=we.LTC_FLOAT_1,r.rectAreaLTC2=we.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=we.LTC_HALF_1,r.rectAreaLTC2=we.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const L=r.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==b||L.hemiLength!==x||L.numDirectionalShadows!==y||L.numPointShadows!==w||L.numSpotShadows!==P||L.numSpotMaps!==A)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=b,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=P+A-v,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=v,L.directionalLength=d,L.pointLength=m,L.spotLength=_,L.rectAreaLength=b,L.hemiLength=x,L.numDirectionalShadows=y,L.numPointShadows=w,L.numSpotShadows=P,L.numSpotMaps=A,r.version=xE++)}function c(u,h){let f=0,p=0,g=0,d=0,m=0;const _=h.matrixWorldInverse;for(let b=0,x=u.length;b<x;b++){const y=u[b];if(y.isDirectionalLight){const w=r.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),f++}else if(y.isSpotLight){const w=r.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const w=r.rectArea[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:r}}function Qp(i,e){const t=new yE(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function bE(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Qp(i,e),t.set(s,[l])):o>=a.length?(l=new Qp(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class ME extends Ba{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=TM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class SE extends Ba{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function EE(i,e,t){let n=new b_;const r=new gt,s=new gt,o=new $t,a=new ME({depthPacking:EM}),l=new SE,c={},u=t.maxTextureSize,h={[Or]:kn,[kn]:Or,[_r]:_r},f=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:wE,fragmentShader:TE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new sr;g.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new ji(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=t_,this.render=function(y,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const A=i.getRenderTarget(),v=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ar),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let W=0,O=y.length;W<O;W++){const U=y[W],N=U.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const X=N.getFrameExtents();if(r.multiply(X),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,N.mapSize.y=s.y)),N.map===null){const q=this.type!==Ko?{minFilter:fn,magFilter:fn}:{};N.map=new ys(r.x,r.y,q),N.map.texture.name=U.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const j=N.getViewportCount();for(let q=0;q<j;q++){const G=N.getViewport(q);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),L.viewport(o),N.updateMatrices(U,q),n=N.getFrustum(),x(w,P,N.camera,U,this.type)}N.isPointLightShadow!==!0&&this.type===Ko&&_(N,P),N.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(A,v,S)};function _(y,w){const P=e.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new ys(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(w,null,P,f,d,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(w,null,P,p,d,null)}function b(y,w,P,A,v,S){let L=null;const W=P.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(W!==void 0)L=W;else if(L=P.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=L.uuid,U=w.uuid;let N=c[O];N===void 0&&(N={},c[O]=N);let X=N[U];X===void 0&&(X=L.clone(),N[U]=X),L=X}return L.visible=w.visible,L.wireframe=w.wireframe,S===Ko?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:h[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,P.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(P.matrixWorld),L.nearDistance=A,L.farDistance=v),L}function x(y,w,P,A,v){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Ko)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,y.matrixWorld);const W=e.update(y),O=y.material;if(Array.isArray(O)){const U=W.groups;for(let N=0,X=U.length;N<X;N++){const j=U[N],q=O[j.materialIndex];if(q&&q.visible){const G=b(y,q,A,P.near,P.far,v);i.renderBufferDirect(P,null,W,G,y,j)}}}else if(O.visible){const U=b(y,O,A,P.near,P.far,v);i.renderBufferDirect(P,null,W,U,y,null)}}const L=y.children;for(let W=0,O=L.length;W<O;W++)x(L[W],w,P,A,v)}}function CE(i,e,t){const n=t.isWebGL2;function r(){let z=!1;const oe=new $t;let he=null;const Se=new $t(0,0,0,0);return{setMask:function(Ae){he!==Ae&&!z&&(i.colorMask(Ae,Ae,Ae,Ae),he=Ae)},setLocked:function(Ae){z=Ae},setClear:function(Ae,it,lt,Tt,Be){Be===!0&&(Ae*=Tt,it*=Tt,lt*=Tt),oe.set(Ae,it,lt,Tt),Se.equals(oe)===!1&&(i.clearColor(Ae,it,lt,Tt),Se.copy(oe))},reset:function(){z=!1,he=null,Se.set(-1,0,0,0)}}}function s(){let z=!1,oe=null,he=null,Se=null;return{setTest:function(Ae){Ae?K(2929):ae(2929)},setMask:function(Ae){oe!==Ae&&!z&&(i.depthMask(Ae),oe=Ae)},setFunc:function(Ae){if(he!==Ae){switch(Ae){case jb:i.depthFunc(512);break;case Kb:i.depthFunc(519);break;case Zb:i.depthFunc(513);break;case ff:i.depthFunc(515);break;case Jb:i.depthFunc(514);break;case Qb:i.depthFunc(518);break;case eM:i.depthFunc(516);break;case tM:i.depthFunc(517);break;default:i.depthFunc(515)}he=Ae}},setLocked:function(Ae){z=Ae},setClear:function(Ae){Se!==Ae&&(i.clearDepth(Ae),Se=Ae)},reset:function(){z=!1,oe=null,he=null,Se=null}}}function o(){let z=!1,oe=null,he=null,Se=null,Ae=null,it=null,lt=null,Tt=null,Be=null;return{setTest:function(Ce){z||(Ce?K(2960):ae(2960))},setMask:function(Ce){oe!==Ce&&!z&&(i.stencilMask(Ce),oe=Ce)},setFunc:function(Ce,ge,De){(he!==Ce||Se!==ge||Ae!==De)&&(i.stencilFunc(Ce,ge,De),he=Ce,Se=ge,Ae=De)},setOp:function(Ce,ge,De){(it!==Ce||lt!==ge||Tt!==De)&&(i.stencilOp(Ce,ge,De),it=Ce,lt=ge,Tt=De)},setLocked:function(Ce){z=Ce},setClear:function(Ce){Be!==Ce&&(i.clearStencil(Ce),Be=Ce)},reset:function(){z=!1,oe=null,he=null,Se=null,Ae=null,it=null,lt=null,Tt=null,Be=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,d=[],m=null,_=!1,b=null,x=null,y=null,w=null,P=null,A=null,v=null,S=!1,L=null,W=null,O=null,U=null,N=null;const X=i.getParameter(35661);let j=!1,q=0;const G=i.getParameter(7938);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=q>=2);let le=null,D={};const ye=i.getParameter(3088),H=i.getParameter(2978),ue=new $t().fromArray(ye),pe=new $t().fromArray(H);function R(z,oe,he){const Se=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(z,Ae),i.texParameteri(z,10241,9728),i.texParameteri(z,10240,9728);for(let it=0;it<he;it++)i.texImage2D(oe+it,0,6408,1,1,0,6408,5121,Se);return Ae}const Y={};Y[3553]=R(3553,3553,1),Y[34067]=R(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),K(2929),l.setFunc(ff),se(!1),F(Gd),K(2884),$(Ar);function K(z){f[z]!==!0&&(i.enable(z),f[z]=!0)}function ae(z){f[z]!==!1&&(i.disable(z),f[z]=!1)}function me(z,oe){return p[z]!==oe?(i.bindFramebuffer(z,oe),p[z]=oe,n&&(z===36009&&(p[36160]=oe),z===36160&&(p[36009]=oe)),!0):!1}function Me(z,oe){let he=d,Se=!1;if(z)if(he=g.get(oe),he===void 0&&(he=[],g.set(oe,he)),z.isWebGLMultipleRenderTargets){const Ae=z.texture;if(he.length!==Ae.length||he[0]!==36064){for(let it=0,lt=Ae.length;it<lt;it++)he[it]=36064+it;he.length=Ae.length,Se=!0}}else he[0]!==36064&&(he[0]=36064,Se=!0);else he[0]!==1029&&(he[0]=1029,Se=!0);Se&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function be(z){return m!==z?(i.useProgram(z),m=z,!0):!1}const T={[Ws]:32774,[Ub]:32778,[kb]:32779};if(n)T[Xd]=32775,T[qd]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(T[Xd]=z.MIN_EXT,T[qd]=z.MAX_EXT)}const I={[Bb]:0,[Gb]:1,[Vb]:768,[n_]:770,[Yb]:776,[qb]:774,[Wb]:772,[Hb]:769,[i_]:771,[$b]:775,[Xb]:773};function $(z,oe,he,Se,Ae,it,lt,Tt){if(z===Ar){_===!0&&(ae(3042),_=!1);return}if(_===!1&&(K(3042),_=!0),z!==zb){if(z!==b||Tt!==S){if((x!==Ws||P!==Ws)&&(i.blendEquation(32774),x=Ws,P=Ws),Tt)switch(z){case ro:i.blendFuncSeparate(1,771,1,771);break;case Vd:i.blendFunc(1,1);break;case Hd:i.blendFuncSeparate(0,769,0,1);break;case Wd:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ro:i.blendFuncSeparate(770,771,1,771);break;case Vd:i.blendFunc(770,1);break;case Hd:i.blendFuncSeparate(0,769,0,1);break;case Wd:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,w=null,A=null,v=null,b=z,S=Tt}return}Ae=Ae||oe,it=it||he,lt=lt||Se,(oe!==x||Ae!==P)&&(i.blendEquationSeparate(T[oe],T[Ae]),x=oe,P=Ae),(he!==y||Se!==w||it!==A||lt!==v)&&(i.blendFuncSeparate(I[he],I[Se],I[it],I[lt]),y=he,w=Se,A=it,v=lt),b=z,S=!1}function Q(z,oe){z.side===_r?ae(2884):K(2884);let he=z.side===kn;oe&&(he=!he),se(he),z.blending===ro&&z.transparent===!1?$(Ar):$(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const Se=z.stencilWrite;c.setTest(Se),Se&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),re(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?K(32926):ae(32926)}function se(z){L!==z&&(z?i.frontFace(2304):i.frontFace(2305),L=z)}function F(z){z!==Ob?(K(2884),z!==W&&(z===Gd?i.cullFace(1029):z===Fb?i.cullFace(1028):i.cullFace(1032))):ae(2884),W=z}function de(z){z!==O&&(j&&i.lineWidth(z),O=z)}function re(z,oe,he){z?(K(32823),(U!==oe||N!==he)&&(i.polygonOffset(oe,he),U=oe,N=he)):ae(32823)}function _e(z){z?K(3089):ae(3089)}function ce(z){z===void 0&&(z=33984+X-1),le!==z&&(i.activeTexture(z),le=z)}function E(z,oe,he){he===void 0&&(le===null?he=33984+X-1:he=le);let Se=D[he];Se===void 0&&(Se={type:void 0,texture:void 0},D[he]=Se),(Se.type!==z||Se.texture!==oe)&&(le!==he&&(i.activeTexture(he),le=he),i.bindTexture(z,oe||Y[z]),Se.type=z,Se.texture=oe)}function M(){const z=D[le];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function xe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Fe(z){ue.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ue.copy(z))}function Ee(z){pe.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),pe.copy(z))}function Ge(z,oe){let he=h.get(oe);he===void 0&&(he=new WeakMap,h.set(oe,he));let Se=he.get(z);Se===void 0&&(Se=i.getUniformBlockIndex(oe,z.name),he.set(z,Se))}function Le(z,oe){const Se=h.get(oe).get(z);u.get(oe)!==Se&&(i.uniformBlockBinding(oe,Se,z.__bindingPointIndex),u.set(oe,Se))}function at(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},le=null,D={},p={},g=new WeakMap,d=[],m=null,_=!1,b=null,x=null,y=null,w=null,P=null,A=null,v=null,S=!1,L=null,W=null,O=null,U=null,N=null,ue.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:K,disable:ae,bindFramebuffer:me,drawBuffers:Me,useProgram:be,setBlending:$,setMaterial:Q,setFlipSided:se,setCullFace:F,setLineWidth:de,setPolygonOffset:re,setScissorTest:_e,activeTexture:ce,bindTexture:E,unbindTexture:M,compressedTexImage2D:k,compressedTexImage3D:ie,texImage2D:Pe,texImage3D:Ie,updateUBOMapping:Ge,uniformBlockBinding:Le,texStorage2D:ne,texStorage3D:Re,texSubImage2D:ee,texSubImage3D:fe,compressedTexSubImage2D:xe,compressedTexSubImage3D:ve,scissor:Fe,viewport:Ee,reset:at}}function AE(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,M){return _?new OffscreenCanvas(E,M):nc("canvas")}function x(E,M,k,ie){let ee=1;if((E.width>ie||E.height>ie)&&(ee=ie/Math.max(E.width,E.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const fe=M?LM:Math.floor,xe=fe(ee*E.width),ve=fe(ee*E.height);d===void 0&&(d=b(xe,ve));const ne=k?b(xe,ve):d;return ne.width=xe,ne.height=ve,ne.getContext("2d").drawImage(E,0,0,xe,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+xe+"x"+ve+")."),ne}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return yp(E.width)&&yp(E.height)}function w(E){return a?!1:E.wrapS!==di||E.wrapT!==di||E.minFilter!==fn&&E.minFilter!==Yn}function P(E,M){return E.generateMipmaps&&M&&E.minFilter!==fn&&E.minFilter!==Yn}function A(E){i.generateMipmap(E)}function v(E,M,k,ie,ee=!1){if(a===!1)return M;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let fe=M;return M===6403&&(k===5126&&(fe=33326),k===5131&&(fe=33325),k===5121&&(fe=33321)),M===33319&&(k===5126&&(fe=33328),k===5131&&(fe=33327),k===5121&&(fe=33323)),M===6408&&(k===5126&&(fe=34836),k===5131&&(fe=34842),k===5121&&(fe=ie===pt&&ee===!1?35907:32856),k===32819&&(fe=32854),k===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function S(E,M,k){return P(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==fn&&E.minFilter!==Yn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function L(E){return E===fn||E===$d||E===Jc?9728:9729}function W(E){const M=E.target;M.removeEventListener("dispose",W),U(M),M.isVideoTexture&&g.delete(M)}function O(E){const M=E.target;M.removeEventListener("dispose",O),X(M)}function U(E){const M=n.get(E);if(M.__webglInit===void 0)return;const k=E.source,ie=m.get(k);if(ie){const ee=ie[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&N(E),Object.keys(ie).length===0&&m.delete(k)}n.remove(E)}function N(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const k=E.source,ie=m.get(k);delete ie[M.__cacheKey],o.memory.textures--}function X(E){const M=E.texture,k=n.get(E),ie=n.get(M);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)i.deleteFramebuffer(k.__webglFramebuffer[ee]),k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[ee]);else{if(i.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ee=0,fe=M.length;ee<fe;ee++){const xe=n.get(M[ee]);xe.__webglTexture&&(i.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(M[ee])}n.remove(M),n.remove(E)}let j=0;function q(){j=0}function G(){const E=j;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),j+=1,E}function le(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function D(E,M){const k=n.get(E);if(E.isVideoTexture&&_e(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(k,E,M);return}}t.bindTexture(3553,k.__webglTexture,33984+M)}function ye(E,M){const k=n.get(E);if(E.version>0&&k.__version!==E.version){ae(k,E,M);return}t.bindTexture(35866,k.__webglTexture,33984+M)}function H(E,M){const k=n.get(E);if(E.version>0&&k.__version!==E.version){ae(k,E,M);return}t.bindTexture(32879,k.__webglTexture,33984+M)}function ue(E,M){const k=n.get(E);if(E.version>0&&k.__version!==E.version){me(k,E,M);return}t.bindTexture(34067,k.__webglTexture,33984+M)}const pe={[pf]:10497,[di]:33071,[mf]:33648},R={[fn]:9728,[$d]:9984,[Jc]:9986,[Yn]:9729,[cM]:9985,[Ea]:9987};function Y(E,M,k){if(k?(i.texParameteri(E,10242,pe[M.wrapS]),i.texParameteri(E,10243,pe[M.wrapT]),(E===32879||E===35866)&&i.texParameteri(E,32882,pe[M.wrapR]),i.texParameteri(E,10240,R[M.magFilter]),i.texParameteri(E,10241,R[M.minFilter])):(i.texParameteri(E,10242,33071),i.texParameteri(E,10243,33071),(E===32879||E===35866)&&i.texParameteri(E,32882,33071),(M.wrapS!==di||M.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,10240,L(M.magFilter)),i.texParameteri(E,10241,L(M.minFilter)),M.minFilter!==fn&&M.minFilter!==Yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===fn||M.minFilter!==Jc&&M.minFilter!==Ea||M.type===os&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ca&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(E,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function K(E,M){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",W));const ie=M.source;let ee=m.get(ie);ee===void 0&&(ee={},m.set(ie,ee));const fe=le(M);if(fe!==E.__cacheKey){ee[fe]===void 0&&(ee[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[fe].usedTimes++;const xe=ee[E.__cacheKey];xe!==void 0&&(ee[E.__cacheKey].usedTimes--,xe.usedTimes===0&&N(M)),E.__cacheKey=fe,E.__webglTexture=ee[fe].texture}return k}function ae(E,M,k){let ie=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=35866),M.isData3DTexture&&(ie=32879);const ee=K(E,M),fe=M.source;t.bindTexture(ie,E.__webglTexture,33984+k);const xe=n.get(fe);if(fe.version!==xe.__version||ee===!0){t.activeTexture(33984+k),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const ve=w(M)&&y(M.image)===!1;let ne=x(M.image,ve,!1,u);ne=ce(M,ne);const Re=y(ne)||a,Pe=s.convert(M.format,M.encoding);let Ie=s.convert(M.type),Fe=v(M.internalFormat,Pe,Ie,M.encoding,M.isVideoTexture);Y(ie,M,Re);let Ee;const Ge=M.mipmaps,Le=a&&M.isVideoTexture!==!0,at=xe.__version===void 0||ee===!0,z=S(M,ne,Re);if(M.isDepthTexture)Fe=6402,a?M.type===os?Fe=36012:M.type===ss?Fe=33190:M.type===so?Fe=35056:Fe=33189:M.type===os&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===fs&&Fe===6402&&M.type!==o_&&M.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ss,Ie=s.convert(M.type)),M.format===vo&&Fe===6402&&(Fe=34041,M.type!==so&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=so,Ie=s.convert(M.type))),at&&(Le?t.texStorage2D(3553,1,Fe,ne.width,ne.height):t.texImage2D(3553,0,Fe,ne.width,ne.height,0,Pe,Ie,null));else if(M.isDataTexture)if(Ge.length>0&&Re){Le&&at&&t.texStorage2D(3553,z,Fe,Ge[0].width,Ge[0].height);for(let oe=0,he=Ge.length;oe<he;oe++)Ee=Ge[oe],Le?t.texSubImage2D(3553,oe,0,0,Ee.width,Ee.height,Pe,Ie,Ee.data):t.texImage2D(3553,oe,Fe,Ee.width,Ee.height,0,Pe,Ie,Ee.data);M.generateMipmaps=!1}else Le?(at&&t.texStorage2D(3553,z,Fe,ne.width,ne.height),t.texSubImage2D(3553,0,0,0,ne.width,ne.height,Pe,Ie,ne.data)):t.texImage2D(3553,0,Fe,ne.width,ne.height,0,Pe,Ie,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Le&&at&&t.texStorage3D(35866,z,Fe,Ge[0].width,Ge[0].height,ne.depth);for(let oe=0,he=Ge.length;oe<he;oe++)Ee=Ge[oe],M.format!==pi?Pe!==null?Le?t.compressedTexSubImage3D(35866,oe,0,0,0,Ee.width,Ee.height,ne.depth,Pe,Ee.data,0,0):t.compressedTexImage3D(35866,oe,Fe,Ee.width,Ee.height,ne.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(35866,oe,0,0,0,Ee.width,Ee.height,ne.depth,Pe,Ie,Ee.data):t.texImage3D(35866,oe,Fe,Ee.width,Ee.height,ne.depth,0,Pe,Ie,Ee.data)}else{Le&&at&&t.texStorage2D(3553,z,Fe,Ge[0].width,Ge[0].height);for(let oe=0,he=Ge.length;oe<he;oe++)Ee=Ge[oe],M.format!==pi?Pe!==null?Le?t.compressedTexSubImage2D(3553,oe,0,0,Ee.width,Ee.height,Pe,Ee.data):t.compressedTexImage2D(3553,oe,Fe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(3553,oe,0,0,Ee.width,Ee.height,Pe,Ie,Ee.data):t.texImage2D(3553,oe,Fe,Ee.width,Ee.height,0,Pe,Ie,Ee.data)}else if(M.isDataArrayTexture)Le?(at&&t.texStorage3D(35866,z,Fe,ne.width,ne.height,ne.depth),t.texSubImage3D(35866,0,0,0,0,ne.width,ne.height,ne.depth,Pe,Ie,ne.data)):t.texImage3D(35866,0,Fe,ne.width,ne.height,ne.depth,0,Pe,Ie,ne.data);else if(M.isData3DTexture)Le?(at&&t.texStorage3D(32879,z,Fe,ne.width,ne.height,ne.depth),t.texSubImage3D(32879,0,0,0,0,ne.width,ne.height,ne.depth,Pe,Ie,ne.data)):t.texImage3D(32879,0,Fe,ne.width,ne.height,ne.depth,0,Pe,Ie,ne.data);else if(M.isFramebufferTexture){if(at)if(Le)t.texStorage2D(3553,z,Fe,ne.width,ne.height);else{let oe=ne.width,he=ne.height;for(let Se=0;Se<z;Se++)t.texImage2D(3553,Se,Fe,oe,he,0,Pe,Ie,null),oe>>=1,he>>=1}}else if(Ge.length>0&&Re){Le&&at&&t.texStorage2D(3553,z,Fe,Ge[0].width,Ge[0].height);for(let oe=0,he=Ge.length;oe<he;oe++)Ee=Ge[oe],Le?t.texSubImage2D(3553,oe,0,0,Pe,Ie,Ee):t.texImage2D(3553,oe,Fe,Pe,Ie,Ee);M.generateMipmaps=!1}else Le?(at&&t.texStorage2D(3553,z,Fe,ne.width,ne.height),t.texSubImage2D(3553,0,0,0,Pe,Ie,ne)):t.texImage2D(3553,0,Fe,Pe,Ie,ne);P(M,Re)&&A(ie),xe.__version=fe.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function me(E,M,k){if(M.image.length!==6)return;const ie=K(E,M),ee=M.source;t.bindTexture(34067,E.__webglTexture,33984+k);const fe=n.get(ee);if(ee.version!==fe.__version||ie===!0){t.activeTexture(33984+k),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,ve=M.image[0]&&M.image[0].isDataTexture,ne=[];for(let oe=0;oe<6;oe++)!xe&&!ve?ne[oe]=x(M.image[oe],!1,!0,c):ne[oe]=ve?M.image[oe].image:M.image[oe],ne[oe]=ce(M,ne[oe]);const Re=ne[0],Pe=y(Re)||a,Ie=s.convert(M.format,M.encoding),Fe=s.convert(M.type),Ee=v(M.internalFormat,Ie,Fe,M.encoding),Ge=a&&M.isVideoTexture!==!0,Le=fe.__version===void 0||ie===!0;let at=S(M,Re,Pe);Y(34067,M,Pe);let z;if(xe){Ge&&Le&&t.texStorage2D(34067,at,Ee,Re.width,Re.height);for(let oe=0;oe<6;oe++){z=ne[oe].mipmaps;for(let he=0;he<z.length;he++){const Se=z[he];M.format!==pi?Ie!==null?Ge?t.compressedTexSubImage2D(34069+oe,he,0,0,Se.width,Se.height,Ie,Se.data):t.compressedTexImage2D(34069+oe,he,Ee,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(34069+oe,he,0,0,Se.width,Se.height,Ie,Fe,Se.data):t.texImage2D(34069+oe,he,Ee,Se.width,Se.height,0,Ie,Fe,Se.data)}}}else{z=M.mipmaps,Ge&&Le&&(z.length>0&&at++,t.texStorage2D(34067,at,Ee,ne[0].width,ne[0].height));for(let oe=0;oe<6;oe++)if(ve){Ge?t.texSubImage2D(34069+oe,0,0,0,ne[oe].width,ne[oe].height,Ie,Fe,ne[oe].data):t.texImage2D(34069+oe,0,Ee,ne[oe].width,ne[oe].height,0,Ie,Fe,ne[oe].data);for(let he=0;he<z.length;he++){const Ae=z[he].image[oe].image;Ge?t.texSubImage2D(34069+oe,he+1,0,0,Ae.width,Ae.height,Ie,Fe,Ae.data):t.texImage2D(34069+oe,he+1,Ee,Ae.width,Ae.height,0,Ie,Fe,Ae.data)}}else{Ge?t.texSubImage2D(34069+oe,0,0,0,Ie,Fe,ne[oe]):t.texImage2D(34069+oe,0,Ee,Ie,Fe,ne[oe]);for(let he=0;he<z.length;he++){const Se=z[he];Ge?t.texSubImage2D(34069+oe,he+1,0,0,Ie,Fe,Se.image[oe]):t.texImage2D(34069+oe,he+1,Ee,Ie,Fe,Se.image[oe])}}}P(M,Pe)&&A(34067),fe.__version=ee.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Me(E,M,k,ie,ee){const fe=s.convert(k.format,k.encoding),xe=s.convert(k.type),ve=v(k.internalFormat,fe,xe,k.encoding);n.get(M).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,ve,M.width,M.height,M.depth,0,fe,xe,null):t.texImage2D(ee,0,ve,M.width,M.height,0,fe,xe,null)),t.bindFramebuffer(36160,E),re(M)?f.framebufferTexture2DMultisampleEXT(36160,ie,ee,n.get(k).__webglTexture,0,de(M)):(ee===3553||ee>=34069&&ee<=34074)&&i.framebufferTexture2D(36160,ie,ee,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function be(E,M,k){if(i.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let ie=33189;if(k||re(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===os?ie=36012:ee.type===ss&&(ie=33190));const fe=de(M);re(M)?f.renderbufferStorageMultisampleEXT(36161,fe,ie,M.width,M.height):i.renderbufferStorageMultisample(36161,fe,ie,M.width,M.height)}else i.renderbufferStorage(36161,ie,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){const ie=de(M);k&&re(M)===!1?i.renderbufferStorageMultisample(36161,ie,35056,M.width,M.height):re(M)?f.renderbufferStorageMultisampleEXT(36161,ie,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,E)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<ie.length;ee++){const fe=ie[ee],xe=s.convert(fe.format,fe.encoding),ve=s.convert(fe.type),ne=v(fe.internalFormat,xe,ve,fe.encoding),Re=de(M);k&&re(M)===!1?i.renderbufferStorageMultisample(36161,Re,ne,M.width,M.height):re(M)?f.renderbufferStorageMultisampleEXT(36161,Re,ne,M.width,M.height):i.renderbufferStorage(36161,ne,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function T(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const ie=n.get(M.depthTexture).__webglTexture,ee=de(M);if(M.depthTexture.format===fs)re(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,ee):i.framebufferTexture2D(36160,36096,3553,ie,0);else if(M.depthTexture.format===vo)re(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,ee):i.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function I(E){const M=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");T(M.__webglFramebuffer,E)}else if(k){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=i.createRenderbuffer(),be(M.__webglDepthbuffer[ie],E,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),be(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function $(E,M,k){const ie=n.get(E);M!==void 0&&Me(ie.__webglFramebuffer,E,E.texture,36064,3553),k!==void 0&&I(E)}function Q(E){const M=E.texture,k=n.get(E),ie=n.get(M);E.addEventListener("dispose",O),E.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=M.version,o.memory.textures++);const ee=E.isWebGLCubeRenderTarget===!0,fe=E.isWebGLMultipleRenderTargets===!0,xe=y(E)||a;if(ee){k.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)k.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(k.__webglFramebuffer=i.createFramebuffer(),fe)if(r.drawBuffers){const ve=E.texture;for(let ne=0,Re=ve.length;ne<Re;ne++){const Pe=n.get(ve[ne]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&re(E)===!1){const ve=fe?M:[M];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let ne=0;ne<ve.length;ne++){const Re=ve[ne];k.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(36161,k.__webglColorRenderbuffer[ne]);const Pe=s.convert(Re.format,Re.encoding),Ie=s.convert(Re.type),Fe=v(Re.internalFormat,Pe,Ie,Re.encoding,E.isXRRenderTarget===!0),Ee=de(E);i.renderbufferStorageMultisample(36161,Ee,Fe,E.width,E.height),i.framebufferRenderbuffer(36160,36064+ne,36161,k.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(36161,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),be(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,ie.__webglTexture),Y(34067,M,xe);for(let ve=0;ve<6;ve++)Me(k.__webglFramebuffer[ve],E,M,36064,34069+ve);P(M,xe)&&A(34067),t.unbindTexture()}else if(fe){const ve=E.texture;for(let ne=0,Re=ve.length;ne<Re;ne++){const Pe=ve[ne],Ie=n.get(Pe);t.bindTexture(3553,Ie.__webglTexture),Y(3553,Pe,xe),Me(k.__webglFramebuffer,E,Pe,36064+ne,3553),P(Pe,xe)&&A(3553)}t.unbindTexture()}else{let ve=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ve=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,ie.__webglTexture),Y(ve,M,xe),Me(k.__webglFramebuffer,E,M,36064,ve),P(M,xe)&&A(ve),t.unbindTexture()}E.depthBuffer&&I(E)}function se(E){const M=y(E)||a,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0,ee=k.length;ie<ee;ie++){const fe=k[ie];if(P(fe,M)){const xe=E.isWebGLCubeRenderTarget?34067:3553,ve=n.get(fe).__webglTexture;t.bindTexture(xe,ve),A(xe),t.unbindTexture()}}}function F(E){if(a&&E.samples>0&&re(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],k=E.width,ie=E.height;let ee=16384;const fe=[],xe=E.stencilBuffer?33306:36096,ve=n.get(E),ne=E.isWebGLMultipleRenderTargets===!0;if(ne)for(let Re=0;Re<M.length;Re++)t.bindFramebuffer(36160,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Re,36161,null),t.bindFramebuffer(36160,ve.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Re,3553,null,0);t.bindFramebuffer(36008,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ve.__webglFramebuffer);for(let Re=0;Re<M.length;Re++){fe.push(36064+Re),E.depthBuffer&&fe.push(xe);const Pe=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Pe===!1&&(E.depthBuffer&&(ee|=256),E.stencilBuffer&&(ee|=1024)),ne&&i.framebufferRenderbuffer(36008,36064,36161,ve.__webglColorRenderbuffer[Re]),Pe===!0&&(i.invalidateFramebuffer(36008,[xe]),i.invalidateFramebuffer(36009,[xe])),ne){const Ie=n.get(M[Re]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Ie,0)}i.blitFramebuffer(0,0,k,ie,0,0,k,ie,ee,9728),p&&i.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ne)for(let Re=0;Re<M.length;Re++){t.bindFramebuffer(36160,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Re,36161,ve.__webglColorRenderbuffer[Re]);const Pe=n.get(M[Re]).__webglTexture;t.bindFramebuffer(36160,ve.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Re,3553,Pe,0)}t.bindFramebuffer(36009,ve.__webglMultisampledFramebuffer)}}function de(E){return Math.min(h,E.samples)}function re(E){const M=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function _e(E){const M=o.render.frame;g.get(E)!==M&&(g.set(E,M),E.update())}function ce(E,M){const k=E.encoding,ie=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===gf||k!==vs&&(k===pt?a===!1?e.has("EXT_sRGB")===!0&&ie===pi?(E.format=gf,E.minFilter=Yn,E.generateMipmaps=!1):M=c_.sRGBToLinear(M):(ie!==pi||ee!==xs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),M}this.allocateTextureUnit=G,this.resetTextureUnits=q,this.setTexture2D=D,this.setTexture2DArray=ye,this.setTexture3D=H,this.setTextureCube=ue,this.rebindTextures=$,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=re}function PE(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===xs)return 5121;if(s===dM)return 32819;if(s===pM)return 32820;if(s===uM)return 5120;if(s===fM)return 5122;if(s===o_)return 5123;if(s===hM)return 5124;if(s===ss)return 5125;if(s===os)return 5126;if(s===Ca)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===mM)return 6406;if(s===pi)return 6408;if(s===gM)return 6409;if(s===_M)return 6410;if(s===fs)return 6402;if(s===vo)return 34041;if(s===gf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===xM)return 6403;if(s===vM)return 36244;if(s===yM)return 33319;if(s===bM)return 33320;if(s===MM)return 36249;if(s===Qc||s===eu||s===tu||s===nu)if(o===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===eu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===eu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yd||s===jd||s===Kd||s===Zd)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Yd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kd)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zd)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===SM)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jd||s===Qd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Jd)return o===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Qd)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ep||s===tp||s===np||s===ip||s===rp||s===sp||s===op||s===ap||s===lp||s===cp||s===up||s===fp||s===hp||s===dp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===ep)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tp)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===np)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ip)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rp)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sp)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===op)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ap)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lp)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cp)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===up)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fp)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hp)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dp)return o===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===iu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===iu)return o===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===wM||s===pp||s===mp||s===gp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===iu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===pp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===so?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class RE extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dl extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const LE={type:"move"};class Au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(LE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new dl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class DE extends Bn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:fs,u!==fs&&u!==vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===fs&&(n=ss),n===void 0&&u===vo&&(n=so),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:fn,this.minFilter=l!==void 0?l:fn,this.flipY=!1,this.generateMipmaps=!1}}class IE extends Io{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const d=t.getContextAttributes();let m=null,_=null;const b=[],x=[],y=new Set,w=new Map,P=new jn;P.layers.enable(1),P.viewport=new $t;const A=new jn;A.layers.enable(2),A.viewport=new $t;const v=[P,A],S=new RE;S.layers.enable(1),S.layers.enable(2);let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ue=b[H];return ue===void 0&&(ue=new Au,b[H]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(H){let ue=b[H];return ue===void 0&&(ue=new Au,b[H]=ue),ue.getGripSpace()},this.getHand=function(H){let ue=b[H];return ue===void 0&&(ue=new Au,b[H]=ue),ue.getHandSpace()};function O(H){const ue=x.indexOf(H.inputSource);if(ue===-1)return;const pe=b[ue];pe!==void 0&&pe.dispatchEvent({type:H.type,data:H.inputSource})}function U(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",N);for(let H=0;H<b.length;H++){const ue=x[H];ue!==null&&(x[H]=null,b[H].disconnect(ue))}L=null,W=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,_=null,ye.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",U),r.addEventListener("inputsourceschange",N),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),_=new ys(p.framebufferWidth,p.framebufferHeight,{format:pi,type:xs,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let ue=null,pe=null,R=null;d.depth&&(R=d.stencil?35056:33190,ue=d.stencil?vo:fs,pe=d.stencil?so:ss);const Y={colorFormat:32856,depthFormat:R,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Y),r.updateRenderState({layers:[f]}),_=new ys(f.textureWidth,f.textureHeight,{format:pi,type:xs,depthTexture:new DE(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const K=e.properties.get(_);K.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ye.setContext(r),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(H){for(let ue=0;ue<H.removed.length;ue++){const pe=H.removed[ue],R=x.indexOf(pe);R>=0&&(x[R]=null,b[R].disconnect(pe))}for(let ue=0;ue<H.added.length;ue++){const pe=H.added[ue];let R=x.indexOf(pe);if(R===-1){for(let K=0;K<b.length;K++)if(K>=x.length){x.push(pe),R=K;break}else if(x[K]===null){x[K]=pe,R=K;break}if(R===-1)break}const Y=b[R];Y&&Y.connect(pe)}}const X=new Z,j=new Z;function q(H,ue,pe){X.setFromMatrixPosition(ue.matrixWorld),j.setFromMatrixPosition(pe.matrixWorld);const R=X.distanceTo(j),Y=ue.projectionMatrix.elements,K=pe.projectionMatrix.elements,ae=Y[14]/(Y[10]-1),me=Y[14]/(Y[10]+1),Me=(Y[9]+1)/Y[5],be=(Y[9]-1)/Y[5],T=(Y[8]-1)/Y[0],I=(K[8]+1)/K[0],$=ae*T,Q=ae*I,se=R/(-T+I),F=se*-T;ue.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(F),H.translateZ(se),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const de=ae+se,re=me+se,_e=$-F,ce=Q+(R-F),E=Me*me/re*de,M=be*me/re*de;H.projectionMatrix.makePerspective(_e,ce,E,M,de,re)}function G(H,ue){ue===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ue.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;S.near=A.near=P.near=H.near,S.far=A.far=P.far=H.far,(L!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,W=S.far);const ue=H.parent,pe=S.cameras;G(S,ue);for(let Y=0;Y<pe.length;Y++)G(pe[Y],ue);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),H.matrix.copy(S.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const R=H.children;for(let Y=0,K=R.length;Y<K;Y++)R[Y].updateMatrixWorld(!0);pe.length===2?q(S,P,A):S.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.getPlanes=function(){return y};let le=null;function D(H,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let R=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,R=!0);for(let Y=0;Y<pe.length;Y++){const K=pe[Y];let ae=null;if(p!==null)ae=p.getViewport(K);else{const Me=h.getViewSubImage(f,K);ae=Me.viewport,Y===0&&(e.setRenderTargetTextures(_,Me.colorTexture,f.ignoreDepthValues?void 0:Me.depthStencilTexture),e.setRenderTarget(_))}let me=v[Y];me===void 0&&(me=new jn,me.layers.enable(Y),me.viewport=new $t,v[Y]=me),me.matrix.fromArray(K.transform.matrix),me.projectionMatrix.fromArray(K.projectionMatrix),me.viewport.set(ae.x,ae.y,ae.width,ae.height),Y===0&&S.matrix.copy(me.matrix),R===!0&&S.cameras.push(me)}}for(let pe=0;pe<b.length;pe++){const R=x[pe],Y=b[pe];R!==null&&Y!==void 0&&Y.update(R,ue,c||o)}if(le&&le(H,ue),ue.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let pe=null;for(const R of y)ue.detectedPlanes.has(R)||(pe===null&&(pe=[]),pe.push(R));if(pe!==null)for(const R of pe)y.delete(R),w.delete(R),n.dispatchEvent({type:"planeremoved",data:R});for(const R of ue.detectedPlanes)if(!y.has(R))y.add(R),w.set(R,ue.lastChangedTime),n.dispatchEvent({type:"planeadded",data:R});else{const Y=w.get(R);R.lastChangedTime>Y&&(w.set(R,R.lastChangedTime),n.dispatchEvent({type:"planechanged",data:R}))}}g=null}const ye=new M_;ye.setAnimationLoop(D),this.setAnimationLoop=function(H){le=H},this.dispose=function(){}}}function OE(i,e){function t(d,m){m.color.getRGB(d.fogColor.value,x_(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,b,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),u(d,m)):m.isMeshPhongMaterial?(r(d,m),c(d,m)):m.isMeshStandardMaterial?(r(d,m),h(d,m),m.isMeshPhysicalMaterial&&f(d,m,x)):m.isMeshMatcapMaterial?(r(d,m),p(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),g(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,_,b):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===kn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===kn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const y=i.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,_,b){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=b*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===kn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function FE(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(b,x){const y=x.program;n.uniformBlockBinding(b,y)}function c(b,x){let y=r[b.id];y===void 0&&(g(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(b,w);const P=e.render.frame;s[b.id]!==P&&(f(b),s[b.id]=P)}function u(b){const x=h();b.__bindingPointIndex=x;const y=i.createBuffer(),w=b.__size,P=b.usage;return i.bindBuffer(35345,y),i.bufferData(35345,w,P),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,y),y}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const x=r[b.id],y=b.uniforms,w=b.__cache;i.bindBuffer(35345,x);for(let P=0,A=y.length;P<A;P++){const v=y[P];if(p(v,P,w)===!0){const S=v.__offset,L=Array.isArray(v.value)?v.value:[v.value];let W=0;for(let O=0;O<L.length;O++){const U=L[O],N=d(U);typeof U=="number"?(v.__data[0]=U,i.bufferSubData(35345,S+W,v.__data)):U.isMatrix3?(v.__data[0]=U.elements[0],v.__data[1]=U.elements[1],v.__data[2]=U.elements[2],v.__data[3]=U.elements[0],v.__data[4]=U.elements[3],v.__data[5]=U.elements[4],v.__data[6]=U.elements[5],v.__data[7]=U.elements[0],v.__data[8]=U.elements[6],v.__data[9]=U.elements[7],v.__data[10]=U.elements[8],v.__data[11]=U.elements[0]):(U.toArray(v.__data,W),W+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,S,v.__data)}}i.bindBuffer(35345,null)}function p(b,x,y){const w=b.value;if(y[x]===void 0){if(typeof w=="number")y[x]=w;else{const P=Array.isArray(w)?w:[w],A=[];for(let v=0;v<P.length;v++)A.push(P[v].clone());y[x]=A}return!0}else if(typeof w=="number"){if(y[x]!==w)return y[x]=w,!0}else{const P=Array.isArray(y[x])?y[x]:[y[x]],A=Array.isArray(w)?w:[w];for(let v=0;v<P.length;v++){const S=P[v];if(S.equals(A[v])===!1)return S.copy(A[v]),!0}}return!1}function g(b){const x=b.uniforms;let y=0;const w=16;let P=0;for(let A=0,v=x.length;A<v;A++){const S=x[A],L={boundary:0,storage:0},W=Array.isArray(S.value)?S.value:[S.value];for(let O=0,U=W.length;O<U;O++){const N=W[O],X=d(N);L.boundary+=X.boundary,L.storage+=X.storage}if(S.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=y,A>0){P=y%w;const O=w-P;P!==0&&O-L.boundary<0&&(y+=w-P,S.__offset=y)}y+=L.storage}return P=y%w,P>0&&(y+=w-P),b.__size=y,b.__cache={},this}function d(b){const x={boundary:0,storage:0};return typeof b=="number"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function m(b){const x=b.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function _(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function NE(){const i=nc("canvas");return i.style.display="block",i}function xh(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:NE(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=vs,this.useLegacyLights=!0,this.toneMapping=Ji,this.toneMappingExposure=1;const d=this;let m=!1,_=0,b=0,x=null,y=-1,w=null;const P=new $t,A=new $t;let v=null,S=e.width,L=e.height,W=1,O=null,U=null;const N=new $t(0,0,S,L),X=new $t(0,0,S,L);let j=!1;const q=new b_;let G=!1,le=!1,D=null;const ye=new Vt,H=new Z,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return x===null?W:1}let R=t;function Y(C,V){for(let J=0;J<C.length;J++){const B=C[J],te=e.getContext(B,V);if(te!==null)return te}return null}try{const C={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gh}`),e.addEventListener("webglcontextlost",Ie,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",Ee,!1),R===null){const V=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&V.shift(),R=Y(V,C),R===null)throw Y(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let K,ae,me,Me,be,T,I,$,Q,se,F,de,re,_e,ce,E,M,k,ie,ee,fe,xe,ve,ne;function Re(){K=new $w(R),ae=new Bw(R,K,i),K.init(ae),xe=new PE(R,K,ae),me=new CE(R,K,ae),Me=new Kw,be=new dE,T=new AE(R,K,me,be,ae,xe,Me),I=new Vw(d),$=new qw(d),Q=new rS(R,ae),ve=new Uw(R,K,Q,ae),se=new Yw(R,Q,Me,ve),F=new eT(R,se,Q,Me),ie=new Qw(R,ae,T),E=new Gw(be),de=new hE(d,I,$,K,ae,ve,E),re=new OE(d,be),_e=new mE,ce=new bE(K,ae),k=new zw(d,I,$,me,F,u,o),M=new EE(d,F,ae),ne=new FE(R,Me,ae,me),ee=new kw(R,K,Me,ae),fe=new jw(R,K,Me,ae),Me.programs=de.programs,d.capabilities=ae,d.extensions=K,d.properties=be,d.renderLists=_e,d.shadowMap=M,d.state=me,d.info=Me}Re();const Pe=new IE(d,R);this.xr=Pe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const C=K.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=K.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(S,L,!1))},this.getSize=function(C){return C.set(S,L)},this.setSize=function(C,V,J=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=C,L=V,e.width=Math.floor(C*W),e.height=Math.floor(V*W),J===!0&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(S*W,L*W).floor()},this.setDrawingBufferSize=function(C,V,J){S=C,L=V,W=J,e.width=Math.floor(C*J),e.height=Math.floor(V*J),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,V,J,B){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,V,J,B),me.viewport(P.copy(N).multiplyScalar(W).floor())},this.getScissor=function(C){return C.copy(X)},this.setScissor=function(C,V,J,B){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,V,J,B),me.scissor(A.copy(X).multiplyScalar(W).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(C){me.setScissorTest(j=C)},this.setOpaqueSort=function(C){O=C},this.setTransparentSort=function(C){U=C},this.getClearColor=function(C){return C.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(C=!0,V=!0,J=!0){let B=0;C&&(B|=16384),V&&(B|=256),J&&(B|=1024),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ie,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",Ee,!1),_e.dispose(),ce.dispose(),be.dispose(),I.dispose(),$.dispose(),F.dispose(),ve.dispose(),ne.dispose(),de.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",he),Pe.removeEventListener("sessionend",Se),D&&(D.dispose(),D=null),Ae.stop()};function Ie(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=Me.autoReset,V=M.enabled,J=M.autoUpdate,B=M.needsUpdate,te=M.type;Re(),Me.autoReset=C,M.enabled=V,M.autoUpdate=J,M.needsUpdate=B,M.type=te}function Ee(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ge(C){const V=C.target;V.removeEventListener("dispose",Ge),Le(V)}function Le(C){at(C),be.remove(C)}function at(C){const V=be.get(C).programs;V!==void 0&&(V.forEach(function(J){de.releaseProgram(J)}),C.isShaderMaterial&&de.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,J,B,te,Te){V===null&&(V=ue);const Ne=te.isMesh&&te.matrixWorld.determinant()<0,Ue=He(C,V,J,B,te);me.setMaterial(B,Ne);let ze=J.index,ke=1;B.wireframe===!0&&(ze=se.getWireframeAttribute(J),ke=2);const Ve=J.drawRange,qe=J.attributes.position;let ct=Ve.start*ke,tt=(Ve.start+Ve.count)*ke;Te!==null&&(ct=Math.max(ct,Te.start*ke),tt=Math.min(tt,(Te.start+Te.count)*ke)),ze!==null?(ct=Math.max(ct,0),tt=Math.min(tt,ze.count)):qe!=null&&(ct=Math.max(ct,0),tt=Math.min(tt,qe.count));const ut=tt-ct;if(ut<0||ut===1/0)return;ve.setup(te,B,Ue,J,ze);let Ut,xt=ee;if(ze!==null&&(Ut=Q.get(ze),xt=fe,xt.setIndex(Ut)),te.isMesh)B.wireframe===!0?(me.setLineWidth(B.wireframeLinewidth*pe()),xt.setMode(1)):xt.setMode(4);else if(te.isLine){let Ke=B.linewidth;Ke===void 0&&(Ke=1),me.setLineWidth(Ke*pe()),te.isLineSegments?xt.setMode(1):te.isLineLoop?xt.setMode(2):xt.setMode(3)}else te.isPoints?xt.setMode(0):te.isSprite&&xt.setMode(4);if(te.isInstancedMesh)xt.renderInstances(ct,ut,te.count);else if(J.isInstancedBufferGeometry){const Ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ui=Math.min(J.instanceCount,Ke);xt.renderInstances(ct,ut,Ui)}else xt.render(ct,ut)},this.compile=function(C,V){function J(B,te,Te){B.transparent===!0&&B.side===_r&&B.forceSinglePass===!1?(B.side=kn,B.needsUpdate=!0,ge(B,te,Te),B.side=Or,B.needsUpdate=!0,ge(B,te,Te),B.side=_r):ge(B,te,Te)}f=ce.get(C),f.init(),g.push(f),C.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(d.useLegacyLights),C.traverse(function(B){const te=B.material;if(te)if(Array.isArray(te))for(let Te=0;Te<te.length;Te++){const Ne=te[Te];J(Ne,C,B)}else J(te,C,B)}),g.pop(),f=null};let z=null;function oe(C){z&&z(C)}function he(){Ae.stop()}function Se(){Ae.start()}const Ae=new M_;Ae.setAnimationLoop(oe),typeof self<"u"&&Ae.setContext(self),this.setAnimationLoop=function(C){z=C,Pe.setAnimationLoop(C),C===null?Ae.stop():Ae.start()},Pe.addEventListener("sessionstart",he),Pe.addEventListener("sessionend",Se),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(V),V=Pe.getCamera()),C.isScene===!0&&C.onBeforeRender(d,C,V,x),f=ce.get(C,g.length),f.init(),g.push(f),ye.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(ye),le=this.localClippingEnabled,G=E.init(this.clippingPlanes,le),h=_e.get(C,p.length),h.init(),p.push(h),it(C,V,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(O,U),G===!0&&E.beginShadows();const J=f.state.shadowsArray;if(M.render(J,C,V),G===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(h,C),f.setupLights(d.useLegacyLights),V.isArrayCamera){const B=V.cameras;for(let te=0,Te=B.length;te<Te;te++){const Ne=B[te];lt(h,C,Ne,Ne.viewport)}}else lt(h,C,V);x!==null&&(T.updateMultisampleRenderTarget(x),T.updateRenderTargetMipmap(x)),C.isScene===!0&&C.onAfterRender(d,C,V),ve.resetDefaultState(),y=-1,w=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function it(C,V,J,B){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){B&&H.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ye);const Ne=F.update(C),Ue=C.material;Ue.visible&&h.push(C,Ne,Ue,J,H.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Me.render.frame&&(C.skeleton.update(),C.skeleton.frame=Me.render.frame),!C.frustumCulled||q.intersectsObject(C))){B&&H.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ye);const Ne=F.update(C),Ue=C.material;if(Array.isArray(Ue)){const ze=Ne.groups;for(let ke=0,Ve=ze.length;ke<Ve;ke++){const qe=ze[ke],ct=Ue[qe.materialIndex];ct&&ct.visible&&h.push(C,Ne,ct,J,H.z,qe)}}else Ue.visible&&h.push(C,Ne,Ue,J,H.z,null)}}const Te=C.children;for(let Ne=0,Ue=Te.length;Ne<Ue;Ne++)it(Te[Ne],V,J,B)}function lt(C,V,J,B){const te=C.opaque,Te=C.transmissive,Ne=C.transparent;f.setupLightsView(J),G===!0&&E.setGlobalState(d.clippingPlanes,J),Te.length>0&&Tt(te,V,J),B&&me.viewport(P.copy(B)),te.length>0&&Be(te,V,J),Te.length>0&&Be(Te,V,J),Ne.length>0&&Be(Ne,V,J),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function Tt(C,V,J){const B=ae.isWebGL2;D===null&&(D=new ys(1024,1024,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?Ca:xs,minFilter:Ea,samples:B&&s===!0?4:0}));const te=d.getRenderTarget();d.setRenderTarget(D),d.clear();const Te=d.toneMapping;d.toneMapping=Ji,Be(C,V,J),d.toneMapping=Te,T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D),d.setRenderTarget(te)}function Be(C,V,J){const B=V.isScene===!0?V.overrideMaterial:null;for(let te=0,Te=C.length;te<Te;te++){const Ne=C[te],Ue=Ne.object,ze=Ne.geometry,ke=B===null?Ne.material:B,Ve=Ne.group;Ue.layers.test(J.layers)&&Ce(Ue,V,J,ze,ke,Ve)}}function Ce(C,V,J,B,te,Te){C.onBeforeRender(d,V,J,B,te,Te),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(d,V,J,B,C,Te),te.transparent===!0&&te.side===_r&&te.forceSinglePass===!1?(te.side=kn,te.needsUpdate=!0,d.renderBufferDirect(J,V,B,te,C,Te),te.side=Or,te.needsUpdate=!0,d.renderBufferDirect(J,V,B,te,C,Te),te.side=_r):d.renderBufferDirect(J,V,B,te,C,Te),C.onAfterRender(d,V,J,B,te,Te)}function ge(C,V,J){V.isScene!==!0&&(V=ue);const B=be.get(C),te=f.state.lights,Te=f.state.shadowsArray,Ne=te.state.version,Ue=de.getParameters(C,te.state,Te,V,J),ze=de.getProgramCacheKey(Ue);let ke=B.programs;B.environment=C.isMeshStandardMaterial?V.environment:null,B.fog=V.fog,B.envMap=(C.isMeshStandardMaterial?$:I).get(C.envMap||B.environment),ke===void 0&&(C.addEventListener("dispose",Ge),ke=new Map,B.programs=ke);let Ve=ke.get(ze);if(Ve!==void 0){if(B.currentProgram===Ve&&B.lightsStateVersion===Ne)return De(C,Ue),Ve}else Ue.uniforms=de.getUniforms(C),C.onBuild(J,Ue,d),C.onBeforeCompile(Ue,d),Ve=de.acquireProgram(Ue,ze),ke.set(ze,Ve),B.uniforms=Ue.uniforms;const qe=B.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=E.uniform),De(C,Ue),B.needsLights=Rt(C),B.lightsStateVersion=Ne,B.needsLights&&(qe.ambientLightColor.value=te.state.ambient,qe.lightProbe.value=te.state.probe,qe.directionalLights.value=te.state.directional,qe.directionalLightShadows.value=te.state.directionalShadow,qe.spotLights.value=te.state.spot,qe.spotLightShadows.value=te.state.spotShadow,qe.rectAreaLights.value=te.state.rectArea,qe.ltc_1.value=te.state.rectAreaLTC1,qe.ltc_2.value=te.state.rectAreaLTC2,qe.pointLights.value=te.state.point,qe.pointLightShadows.value=te.state.pointShadow,qe.hemisphereLights.value=te.state.hemi,qe.directionalShadowMap.value=te.state.directionalShadowMap,qe.directionalShadowMatrix.value=te.state.directionalShadowMatrix,qe.spotShadowMap.value=te.state.spotShadowMap,qe.spotLightMatrix.value=te.state.spotLightMatrix,qe.spotLightMap.value=te.state.spotLightMap,qe.pointShadowMap.value=te.state.pointShadowMap,qe.pointShadowMatrix.value=te.state.pointShadowMatrix);const ct=Ve.getUniforms(),tt=zl.seqWithValue(ct.seq,qe);return B.currentProgram=Ve,B.uniformsList=tt,Ve}function De(C,V){const J=be.get(C);J.outputEncoding=V.outputEncoding,J.instancing=V.instancing,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function He(C,V,J,B,te){V.isScene!==!0&&(V=ue),T.resetTextureUnits();const Te=V.fog,Ne=B.isMeshStandardMaterial?V.environment:null,Ue=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:vs,ze=(B.isMeshStandardMaterial?$:I).get(B.envMap||Ne),ke=B.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ve=!!B.normalMap&&!!J.attributes.tangent,qe=!!J.morphAttributes.position,ct=!!J.morphAttributes.normal,tt=!!J.morphAttributes.color,ut=B.toneMapped?d.toneMapping:Ji,Ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=Ut!==void 0?Ut.length:0,Ke=be.get(B),Ui=f.state.lights;if(G===!0&&(le===!0||C!==w)){const Cn=C===w&&B.id===y;E.setState(B,C,Cn)}let st=!1;B.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Ui.state.version||Ke.outputEncoding!==Ue||te.isInstancedMesh&&Ke.instancing===!1||!te.isInstancedMesh&&Ke.instancing===!0||te.isSkinnedMesh&&Ke.skinning===!1||!te.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==ze||B.fog===!0&&Ke.fog!==Te||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==E.numPlanes||Ke.numIntersection!==E.numIntersection)||Ke.vertexAlphas!==ke||Ke.vertexTangents!==Ve||Ke.morphTargets!==qe||Ke.morphNormals!==ct||Ke.morphColors!==tt||Ke.toneMapping!==ut||ae.isWebGL2===!0&&Ke.morphTargetsCount!==xt)&&(st=!0):(st=!0,Ke.__version=B.version);let En=Ke.currentProgram;st===!0&&(En=ge(B,V,te));let Vh=!1,No=!1,Uc=!1;const sn=En.getUniforms(),Br=Ke.uniforms;if(me.useProgram(En.program)&&(Vh=!0,No=!0,Uc=!0),B.id!==y&&(y=B.id,No=!0),Vh||w!==C){if(sn.setValue(R,"projectionMatrix",C.projectionMatrix),ae.logarithmicDepthBuffer&&sn.setValue(R,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),w!==C&&(w=C,No=!0,Uc=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Cn=sn.map.cameraPosition;Cn!==void 0&&Cn.setValue(R,H.setFromMatrixPosition(C.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&sn.setValue(R,"isOrthographic",C.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||te.isSkinnedMesh)&&sn.setValue(R,"viewMatrix",C.matrixWorldInverse)}if(te.isSkinnedMesh){sn.setOptional(R,te,"bindMatrix"),sn.setOptional(R,te,"bindMatrixInverse");const Cn=te.skeleton;Cn&&(ae.floatVertexTextures?(Cn.boneTexture===null&&Cn.computeBoneTexture(),sn.setValue(R,"boneTexture",Cn.boneTexture,T),sn.setValue(R,"boneTextureSize",Cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const kc=J.morphAttributes;if((kc.position!==void 0||kc.normal!==void 0||kc.color!==void 0&&ae.isWebGL2===!0)&&ie.update(te,J,En),(No||Ke.receiveShadow!==te.receiveShadow)&&(Ke.receiveShadow=te.receiveShadow,sn.setValue(R,"receiveShadow",te.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Br.envMap.value=ze,Br.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),No&&(sn.setValue(R,"toneMappingExposure",d.toneMappingExposure),Ke.needsLights&&Xe(Br,Uc),Te&&B.fog===!0&&re.refreshFogUniforms(Br,Te),re.refreshMaterialUniforms(Br,B,W,L,D),zl.upload(R,Ke.uniformsList,Br,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(zl.upload(R,Ke.uniformsList,Br,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&sn.setValue(R,"center",te.center),sn.setValue(R,"modelViewMatrix",te.modelViewMatrix),sn.setValue(R,"normalMatrix",te.normalMatrix),sn.setValue(R,"modelMatrix",te.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Cn=B.uniformsGroups;for(let Bc=0,Q0=Cn.length;Bc<Q0;Bc++)if(ae.isWebGL2){const Hh=Cn[Bc];ne.update(Hh,En),ne.bind(Hh,En)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return En}function Xe(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Rt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(C,V,J){be.get(C.texture).__webglTexture=V,be.get(C.depthTexture).__webglTexture=J;const B=be.get(C);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=J===void 0,B.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const J=be.get(C);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,J=0){x=C,_=V,b=J;let B=!0,te=null,Te=!1,Ne=!1;if(C){const ze=be.get(C);ze.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),B=!1):ze.__webglFramebuffer===void 0?T.setupRenderTarget(C):ze.__hasExternalTextures&&T.rebindTextures(C,be.get(C.texture).__webglTexture,be.get(C.depthTexture).__webglTexture);const ke=C.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ne=!0);const Ve=be.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(te=Ve[V],Te=!0):ae.isWebGL2&&C.samples>0&&T.useMultisampledRTT(C)===!1?te=be.get(C).__webglMultisampledFramebuffer:te=Ve,P.copy(C.viewport),A.copy(C.scissor),v=C.scissorTest}else P.copy(N).multiplyScalar(W).floor(),A.copy(X).multiplyScalar(W).floor(),v=j;if(me.bindFramebuffer(36160,te)&&ae.drawBuffers&&B&&me.drawBuffers(C,te),me.viewport(P),me.scissor(A),me.setScissorTest(v),Te){const ze=be.get(C.texture);R.framebufferTexture2D(36160,36064,34069+V,ze.__webglTexture,J)}else if(Ne){const ze=be.get(C.texture),ke=V||0;R.framebufferTextureLayer(36160,36064,ze.__webglTexture,J||0,ke)}y=-1},this.readRenderTargetPixels=function(C,V,J,B,te,Te,Ne){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=be.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ue=Ue[Ne]),Ue){me.bindFramebuffer(36160,Ue);try{const ze=C.texture,ke=ze.format,Ve=ze.type;if(ke!==pi&&xe.convert(ke)!==R.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Ve===Ca&&(K.has("EXT_color_buffer_half_float")||ae.isWebGL2&&K.has("EXT_color_buffer_float"));if(Ve!==xs&&xe.convert(Ve)!==R.getParameter(35738)&&!(Ve===os&&(ae.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-B&&J>=0&&J<=C.height-te&&R.readPixels(V,J,B,te,xe.convert(ke),xe.convert(Ve),Te)}finally{const ze=x!==null?be.get(x).__webglFramebuffer:null;me.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(C,V,J=0){const B=Math.pow(2,-J),te=Math.floor(V.image.width*B),Te=Math.floor(V.image.height*B);T.setTexture2D(V,0),R.copyTexSubImage2D(3553,J,0,0,C.x,C.y,te,Te),me.unbindTexture()},this.copyTextureToTexture=function(C,V,J,B=0){const te=V.image.width,Te=V.image.height,Ne=xe.convert(J.format),Ue=xe.convert(J.type);T.setTexture2D(J,0),R.pixelStorei(37440,J.flipY),R.pixelStorei(37441,J.premultiplyAlpha),R.pixelStorei(3317,J.unpackAlignment),V.isDataTexture?R.texSubImage2D(3553,B,C.x,C.y,te,Te,Ne,Ue,V.image.data):V.isCompressedTexture?R.compressedTexSubImage2D(3553,B,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Ne,V.mipmaps[0].data):R.texSubImage2D(3553,B,C.x,C.y,Ne,Ue,V.image),B===0&&J.generateMipmaps&&R.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(C,V,J,B,te=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=C.max.x-C.min.x+1,Ne=C.max.y-C.min.y+1,Ue=C.max.z-C.min.z+1,ze=xe.convert(B.format),ke=xe.convert(B.type);let Ve;if(B.isData3DTexture)T.setTexture3D(B,0),Ve=32879;else if(B.isDataArrayTexture)T.setTexture2DArray(B,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(37440,B.flipY),R.pixelStorei(37441,B.premultiplyAlpha),R.pixelStorei(3317,B.unpackAlignment);const qe=R.getParameter(3314),ct=R.getParameter(32878),tt=R.getParameter(3316),ut=R.getParameter(3315),Ut=R.getParameter(32877),xt=J.isCompressedTexture?J.mipmaps[0]:J.image;R.pixelStorei(3314,xt.width),R.pixelStorei(32878,xt.height),R.pixelStorei(3316,C.min.x),R.pixelStorei(3315,C.min.y),R.pixelStorei(32877,C.min.z),J.isDataTexture||J.isData3DTexture?R.texSubImage3D(Ve,te,V.x,V.y,V.z,Te,Ne,Ue,ze,ke,xt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(Ve,te,V.x,V.y,V.z,Te,Ne,Ue,ze,xt.data)):R.texSubImage3D(Ve,te,V.x,V.y,V.z,Te,Ne,Ue,ze,ke,xt),R.pixelStorei(3314,qe),R.pixelStorei(32878,ct),R.pixelStorei(3316,tt),R.pixelStorei(3315,ut),R.pixelStorei(32877,Ut),te===0&&B.generateMipmaps&&R.generateMipmap(Ve),me.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),me.unbindTexture()},this.resetState=function(){_=0,b=0,x=null,me.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(xh.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(i){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!i}}});class zE extends xh{}zE.prototype.isWebGL1Renderer=!0;class UE extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class C_ extends Ba{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const em=new Z,tm=new Z,nm=new Vt,Pu=new h_,pl=new Rc;class kE extends yn{constructor(e=new sr,t=new C_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)em.fromBufferAttribute(t,r-1),tm.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=em.distanceTo(tm);e.setAttribute("lineDistance",new Ii(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pl.copy(n.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;nm.copy(r).invert(),Pu.copy(e.ray).applyMatrix4(nm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new Z,u=new Z,h=new Z,f=new Z,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let x=_,y=b-1;x<y;x+=p){const w=g.getX(x),P=g.getX(x+1);if(c.fromBufferAttribute(m,w),u.fromBufferAttribute(m,P),Pu.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let x=_,y=b-1;x<y;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Pu.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const im=new Z,rm=new Z;class BE extends kE{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)im.fromBufferAttribute(t,r),rm.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+im.distanceTo(rm);e.setAttribute("lineDistance",new Ii(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const ml=new Z,gl=new Z,Ru=new Z,_l=new Ai;class GE extends sr{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Nl*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:d,b:m,c:_}=_l;if(d.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),_l.getNormal(Ru),h[0]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const x=(b+1)%3,y=h[b],w=h[x],P=_l[u[b]],A=_l[u[x]],v=`${y}_${w}`,S=`${w}_${y}`;S in f&&f[S]?(Ru.dot(f[S].normal)<=s&&(p.push(P.x,P.y,P.z),p.push(A.x,A.y,A.z)),f[S]=null):v in f||(f[v]={index0:c[b],index1:c[x],normal:Ru.clone()})}}for(const g in f)if(f[g]){const{index0:d,index1:m}=f[g];ml.fromBufferAttribute(a,d),gl.fromBufferAttribute(a,m),p.push(ml.x,ml.y,ml.z),p.push(gl.x,gl.y,gl.z)}this.setAttribute("position",new Ii(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class VE{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=sm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=sm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function sm(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gh);const HE={},A_=i=>(pg("data-v-149ad815"),i=i(),mg(),i),WE={class:"mv"},XE=A_(()=>dt("h1",null,[Ug("Shusuke Yoshizawa"),dt("br"),dt("small",null,"Portfolio")],-1)),qE=A_(()=>dt("div",{class:"scroll"},null,-1)),$E=[XE,qE];function YE(i,e){return Un(),_i("div",WE,$E)}const jE=rr(HE,[["render",YE],["__scopeId","data-v-149ad815"]]);function qi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function P_(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},bo={duration:.5,overwrite:!1,delay:0},vh,nn,Dt,Qn=1e8,ht=1/Qn,xf=Math.PI*2,KE=xf/4,ZE=0,R_=Math.sqrt,JE=Math.cos,QE=Math.sin,Ht=function(e){return typeof e=="string"},wt=function(e){return typeof e=="function"},tr=function(e){return typeof e=="number"},yh=function(e){return typeof e>"u"},zi=function(e){return typeof e=="object"},bn=function(e){return e!==!1},bh=function(){return typeof window<"u"},xl=function(e){return wt(e)||Ht(e)},L_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,vf=/(?:-?\.?\d|\.)+/gi,D_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,I_=/[+-]=-?[.\d]+/,O_=/[^,'"\[\]\s]+/gi,eC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,qn,yf,Mh,Vn={},ic={},F_,N_=function(e){return(ic=bs(e,Vn))&&Tn},Sh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},rc=function(e,t){return!t&&console.warn(e)},z_=function(e,t){return e&&(Vn[e]=t)&&ic&&(ic[e]=t)||Vn},Pa=function(){return 0},tC={suppressEvents:!0,isStart:!0,kill:!1},Ul={suppressEvents:!0,kill:!1},nC={suppressEvents:!0},wh={},Pr=[],bf={},U_,In={},Du={},om=30,kl=[],Th="",Eh=function(e){var t=e[0],n,r;if(zi(t)||wt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=kl.length;r--&&!kl[r].targetTest(t););n=kl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new l0(e[r],n)))||e.splice(r,1);return e},hs=function(e){return e._gsap||Eh(ei(e))[0]._gsap},k_=function(e,t,n){return(n=e[t])&&wt(n)?e[t]():yh(n)&&e.getAttribute&&e.getAttribute(t)||n},Mn=function(e,t){return(e=e.split(",")).forEach(t)||e},Ct=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},ao=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},iC=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},sc=function(){var e=Pr.length,t=Pr.slice(0),n,r;for(bf={},Pr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},B_=function(e,t,n,r){Pr.length&&!nn&&sc(),e.render(t,n,r||nn&&t<0&&(e._initted||e._startAt)),Pr.length&&!nn&&sc()},G_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(O_).length<2?t:Ht(e)?e.trim():e},V_=function(e){return e},ri=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},rC=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},bs=function(e,t){for(var n in t)e[n]=t[n];return e},am=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=zi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},oc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},la=function(e){var t=e.parent||bt,n=e.keyframes?rC(rn(e.keyframes)):ri;if(bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},sC=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},H_=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Oc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Nr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},ds=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},oC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Mf=function(e,t,n,r){return e._startAt&&(nn?e._startAt.revert(Ul):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},aC=function i(e){return!e||e._ts&&i(e.parent)},lm=function(e){return e._repeat?Mo(e._tTime,e=e.duration()+e._rDelay)*e:0},Mo=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},ac=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Fc=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||ht)||0))},Nc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Fc(e),n._dirty||ds(n,e)),e},W_=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=ac(e.rawTime(),t),(!t._dur||Ga(0,t.totalDuration(),n)-t._tTime>ht)&&t.render(n,!0)),ds(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ht}},Pi=function(e,t,n,r){return t.parent&&Nr(t),t._start=Xt((tr(n)?n:n||e!==bt?Xn(e,n,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),H_(e,t,"_first","_last",e._sort?"_start":0),Sf(t)||(e._recent=t),r||W_(e,t),e._ts<0&&Nc(e,e._tTime),e},X_=function(e,t){return(Vn.ScrollTrigger||Sh("scrollTrigger",t))&&Vn.ScrollTrigger.create(t,e)},q_=function(e,t,n,r,s){if(Ah(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!nn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&U_!==Nn.frame)return Pr.push(e),e._lazy=[s,r],1},lC=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Sf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},cC=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&lC(e)&&!(!e._initted&&Sf(e))||(e._ts<0||e._dp._ts<0)&&!Sf(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ga(0,e._tDur,t),u=Mo(l,a),e._yoyo&&u&1&&(o=1-o),u!==Mo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||nn||r||e._zTime===ht||!t&&e._zTime){if(!e._initted&&q_(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?ht:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Mf(e,t,n,!0),e._onUpdate&&!n&&ti(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ti(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Nr(e,1),!n&&!nn&&(ti(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},uC=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},So=function(e,t,n,r){var s=e._repeat,o=Xt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Xt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Nc(e,e._tTime=e._tDur*a),e.parent&&Fc(e),n||ds(e.parent,e),e},cm=function(e){return e instanceof vn?ds(e):So(e,e._dur)},fC={_start:0,endTime:Pa,totalDuration:Pa},Xn=function i(e,t,n){var r=e.labels,s=e._recent||fC,o=e.duration()>=Qn?s.endTime(!1):e._dur,a,l,c;return Ht(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(rn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ca=function(e,t,n){var r=tr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=bn(l.vars.inherit)&&l.parent;o.immediateRender=bn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ot(t[0],o,t[s+1])},kr=function(e,t){return e||e===0?t(e):t},Ga=function(e,t,n){return n<e?e:n>t?t:n},en=function(e,t){return!Ht(e)||!(t=eC.exec(e))?"":t[1]},hC=function(e,t,n){return kr(n,function(r){return Ga(e,t,r)})},wf=[].slice,$_=function(e,t){return e&&zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&zi(e[0]))&&!e.nodeType&&e!==qn},dC=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Ht(r)&&!t||$_(r,1)?(s=n).push.apply(s,ei(r)):n.push(r)})||n},ei=function(e,t,n){return Dt&&!t&&Dt.selector?Dt.selector(e):Ht(e)&&!n&&(yf||!wo())?wf.call((t||Mh).querySelectorAll(e),0):rn(e)?dC(e,n):$_(e)?wf.call(e,0):e?[e]:[]},Tf=function(e){return e=ei(e)[0]||rc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ei(t,n.querySelectorAll?n:n===e?rc("Invalid scope")||Mh.createElement("div"):e)}},Y_=function(e){return e.sort(function(){return .5-Math.random()})},j_=function(e){if(wt(e))return e;var t=zi(e)?e:{each:e},n=ps(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return Ht(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,p,g){var d=(g||t).length,m=o[d],_,b,x,y,w,P,A,v,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Qn])[1],!S){for(A=-Qn;A<(A=g[S++].getBoundingClientRect().left)&&S<d;);S--}for(m=o[d]=[],_=l?Math.min(S,d)*u-.5:r%S,b=S===Qn?0:l?d*h/S-.5:r/S|0,A=0,v=Qn,P=0;P<d;P++)x=P%S-_,y=b-(P/S|0),m[P]=w=c?Math.abs(c==="y"?y:x):R_(x*x+y*y),w>A&&(A=w),w<v&&(v=w);r==="random"&&Y_(m),m.max=A-v,m.min=v,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(S>d?d-1:c?c==="y"?d/S:S:Math.max(S,d/S))||0)*(r==="edges"?-1:1),m.b=d<0?s-d:s,m.u=en(t.amount||t.each)||0,n=n&&d<0?s0(n):n}return d=(m[f]-m.min)/m.max||0,Xt(m.b+(n?n(d):d)*m.v)+m.u}},Ef=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Xt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(tr(n)?0:en(n))}},K_=function(e,t){var n=rn(e),r,s;return!n&&zi(e)&&(r=n=e.radius||Qn,e.values?(e=ei(e.values),(s=!tr(e[0]))&&(r*=r)):e=Ef(e.increment)),kr(t,n?wt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Qn,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||tr(o)?u:u+en(o)}:Ef(e))},Z_=function(e,t,n,r){return kr(rn(e)?!t:n===!0?!!(n=0):!r,function(){return rn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},pC=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},mC=function(e,t){return function(n){return e(parseFloat(n))+(t||en(n))}},gC=function(e,t,n){return Q_(e,t,0,1,n)},J_=function(e,t,n){return kr(n,function(r){return e[~~t(r)]})},_C=function i(e,t,n){var r=t-e;return rn(e)?J_(e,i(0,e.length),t):kr(n,function(s){return(r+(s-e)%r)%r+e})},xC=function i(e,t,n){var r=t-e,s=r*2;return rn(e)?J_(e,i(0,e.length-1),t):kr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ra=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?O_:vf),n+=e.substr(t,r-t)+Z_(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Q_=function(e,t,n,r,s){var o=t-e,a=r-n;return kr(s,function(l){return n+((l-e)/o*a||0)})},vC=function i(e,t,n,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Ht(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(rn(e)&&!rn(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else r||(e=bs(rn(e)?[]:{},e));if(!u){for(l in t)Ch.call(a,e,l,"get",t[l]);s=function(g){return Lh(g,a)||(o?e.p:e)}}}return kr(n,s)},um=function(e,t,n){var r=e.labels,s=Qn,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ti=function(e,t,n){var r=e.vars,s=r[t],o=Dt,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Pr.length&&sc(),a&&(Dt=a),u=l?s.apply(c,l):s.call(c),Dt=o,u},Jo=function(e){return Nr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!nn),e.progress()<1&&ti(e,"onInterrupt"),e},Zs,e0=[],t0=function(e){if(!bh()){e0.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=wt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Pa,render:Lh,add:Ch,kill:FC,modifier:OC,rawVars:0},o={targetTest:0,get:0,getSetter:Rh,aliases:{},register:0};if(wo(),e!==r){if(In[t])return;ri(r,ri(oc(e,s),o)),bs(r.prototype,bs(s,oc(e,o))),In[r.prop=t]=r,e.targetTest&&(kl.push(r),wh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}z_(t,r),e.register&&e.register(Tn,r,Sn)},ft=255,Qo={aqua:[0,ft,ft],lime:[0,ft,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ft],navy:[0,0,128],white:[ft,ft,ft],olive:[128,128,0],yellow:[ft,ft,0],orange:[ft,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ft,0,0],pink:[ft,192,203],cyan:[0,ft,ft],transparent:[ft,ft,ft,0]},Iu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ft+.5|0},n0=function(e,t,n){var r=e?tr(e)?[e>>16,e>>8&ft,e&ft]:0:Qo.black,s,o,a,l,c,u,h,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Qo[e])r=Qo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&ft,r&ft,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&ft,e&ft]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(vf),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Iu(l+1/3,s,o),r[1]=Iu(l,s,o),r[2]=Iu(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(D_),n&&r.length<4&&(r[3]=1),r}else r=e.match(vf)||Qo.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/ft,o=r[1]/ft,a=r[2]/ft,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},i0=function(e){var t=[],n=[],r=-1;return e.split(Rr).forEach(function(s){var o=s.match(Ks)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},fm=function(e,t,n){var r="",s=(e+r).match(Rr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=n0(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=i0(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Rr,"1").split(Ks),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Rr),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Rr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Qo)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),yC=/hsl[a]?\(/,r0=function(e){var t=e.join(" "),n;if(Rr.lastIndex=0,Rr.test(t))return n=yC.test(t),e[1]=fm(e[1],n),e[0]=fm(e[0],n,i0(e[1])),!0},La,Nn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,p,g=function d(m){var _=i()-r,b=m===!0,x,y,w,P;if(_>e&&(n+=_-t),r+=_,w=r-n,x=w-o,(x>0||b)&&(P=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,o+=x+(x>=s?4:s-x),y=1),b||(l=c(d)),y)for(p=0;p<a.length;p++)a[p](w,f,P,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){F_&&(!yf&&bh()&&(qn=yf=window,Mh=qn.document||{},Vn.gsap=Tn,(qn.gsapVersions||(qn.gsapVersions=[])).push(Tn.version),N_(ic||qn.GreenSockGlobals||!qn.gsap&&qn||{}),u=qn.requestAnimationFrame,e0.forEach(t0)),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},La=1,g(2))},sleep:function(){(u?qn.cancelAnimationFrame:clearTimeout)(l),La=0,c=Pa},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,_,b){var x=_?function(y,w,P,A){m(y,w,P,A),h.remove(x)}:m;return h.remove(m),a[b?"unshift":"push"](x),wo(),x},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},h}(),wo=function(){return!La&&Nn.wake()},et={},bC=/^[\d.\-M][\d.\-,\s]/,MC=/["']/g,SC=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(MC,"").trim():+c,r=l.substr(a+1).trim();return t},wC=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},TC=function(e){var t=(e+"").split("("),n=et[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[SC(t[1])]:wC(e).split(",").map(G_)):et._CE&&bC.test(e)?et._CE("",e):n},s0=function(e){return function(t){return 1-e(1-t)}},o0=function i(e,t){for(var n=e._first,r;n;)n instanceof vn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},ps=function(e,t){return e&&(wt(e)?e:et[e]||TC(e))||t},Ts=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Mn(e,function(a){et[a]=Vn[a]=s,et[o=a.toLowerCase()]=n;for(var l in s)et[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=et[a+"."+l]=s[l]}),s},a0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ou=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/xf*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*QE((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:a0(a);return s=xf/s,l.config=function(c,u){return i(e,c,u)},l},Fu=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:a0(n);return r.config=function(s){return i(e,s)},r};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ts(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});et.Linear.easeNone=et.none=et.Linear.easeIn;Ts("Elastic",Ou("in"),Ou("out"),Ou());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Ts("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ts("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Ts("Circ",function(i){return-(R_(1-i*i)-1)});Ts("Sine",function(i){return i===1?1:-JE(i*KE)+1});Ts("Back",Fu("in"),Fu("out"),Fu());et.SteppedEase=et.steps=Vn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-ht;return function(a){return((r*Ga(0,o,a)|0)+s)*n}}};bo.ease=et["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Th+=i+","+i+"Params,"});var l0=function(e,t){this.id=ZE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:k_,this.set=t?t.getSetter:Rh},To=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,So(this,+t.duration,1,1),this.data=t.data,Dt&&(this._ctx=Dt,Dt.data.push(this)),La||Nn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,So(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(wo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Nc(this,n),!s._dp||s.parent||W_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===ht||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),B_(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+lm(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+lm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Mo(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ht?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ac(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ht?0:this._rts,this.totalTime(Ga(-Math.abs(this._delay),this._tDur,r),!0),Fc(this),oC(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ht&&(this._tTime-=ht)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Pi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ac(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=nC);var r=nn;return nn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),nn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,cm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,cm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Xn(this,n),bn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,bn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ht:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ht,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-ht)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=wt(n)?n:V_,a=function(){var c=r.then;r.then=null,wt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Jo(this)},i}();ri(To.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ht,_prom:0,_ps:!1,_rts:1});var vn=function(i){P_(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=bn(n.sortChildren),bt&&Pi(n.parent||bt,qi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&X_(qi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return ca(0,arguments,this),this},t.from=function(r,s,o){return ca(1,arguments,this),this},t.fromTo=function(r,s,o,a){return ca(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,la(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ot(r,s,Xn(this,o),1),this},t.call=function(r,s,o){return Pi(this,Ot.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ot(r,o,Xn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,la(o).immediateRender=bn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,la(a).immediateRender=bn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Xt(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,p,g,d,m,_,b,x,y,w,P,A;if(this!==bt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,y=this._start,x=this._ts,_=!x,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=Xt(u%m),u===l?(d=this._repeat,f=c):(d=~~(u/m),d&&d===u/m&&(f=c,d--),f>c&&(f=c)),w=Mo(this._tTime,m),!a&&this._tTime&&w!==d&&this._tTime-w*m-this._dur<=0&&(w=d),P&&d&1&&(f=c-f,A=1),d!==w&&!this._lock){var v=P&&w&1,S=v===(P&&d&1);if(d<w&&(v=!v),a=v?0:c,this._lock=1,this.render(a||(A?0:Xt(d*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ti(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,a=v?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;o0(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=uC(this,Xt(a),Xt(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!d&&(ti(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=-ht);break}}p=g}else{p=this._last;for(var L=r<0?r:f;p;){if(g=p._prev,(p._act||L<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(L-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(L-p._start)*p._ts,s,o||nn&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=L?-ht:ht);break}}p=g}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-ht)._zTime=f>=a?1:-1,this._ts))return this._start=y,Fc(this),this.render(r,s,o);this._onUpdate&&!s&&ti(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Nr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(ti(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(tr(s)||(s=Xn(this,s,r)),!(r instanceof To)){if(rn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ht(r))return this.addLabel(r,s);if(wt(r))r=Ot.delayedCall(0,r);else return this}return this!==r?Pi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ot?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ht(r)?this.removeLabel(r):wt(r)?this.killTweensOf(r):(Oc(this,r),r===this._recent&&(this._recent=this._last),ds(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(Nn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Xn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Ot.delayedCall(0,s||Pa,o);return a.data="isPause",this._hasPause=1,Pi(this,a,Xn(this,r))},t.removePause=function(r){var s=this._first;for(r=Xn(this,r);s;)s._start===r&&s.data==="isPause"&&Nr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)vr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ei(r),l=this._first,c=tr(s),u;l;)l instanceof Ot?iC(l._targets,a)&&(c?(!vr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Xn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=Ot.to(o,ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ht,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&So(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,ri({startAt:{time:Xn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),um(this,Xn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),um(this,Xn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+ht)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return ds(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),ds(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Qn,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Pi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;So(o,o===bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(bt._ts&&(B_(bt,ac(r,bt)),U_=Nn.frame),Nn.frame>=om){om+=Gn.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&Gn.autoSleep&&Nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Nn.sleep()}}},e}(To);ri(vn.prototype,{_lock:0,_hasPause:0,_forcing:0});var EC=function(e,t,n,r,s,o,a){var l=new Sn(this._pt,e,t,0,1,p0,null,s),c=0,u=0,h,f,p,g,d,m,_,b;for(l.b=n,l.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=Ra(r)),o&&(b=[n,r],o(b,e,t),n=b[0],r=b[1]),f=n.match(Lu)||[];h=Lu.exec(r);)g=h[0],d=r.substring(c,h.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?ao(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Lu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(I_.test(r)||_)&&(l.e=0),this._pt=l,l},Ch=function(e,t,n,r,s,o,a,l,c,u){wt(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:wt(h)?c?e[t.indexOf("set")||!wt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=wt(h)?c?LC:h0:Ph,g;if(Ht(r)&&(~r.indexOf("random(")&&(r=Ra(r)),r.charAt(1)==="="&&(g=ao(f,r)+(en(f)||0),(g||g===0)&&(r=g))),!u||f!==r||Cf)return!isNaN(f*r)&&r!==""?(g=new Sn(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?IC:d0,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Sh(t,r),EC.call(this,e,t,f,r,p,l||Gn.stringFilter,c))},CC=function(e,t,n,r,s){if(wt(e)&&(e=ua(e,s,t,n,r)),!zi(e)||e.style&&e.nodeType||rn(e)||L_(e))return Ht(e)?ua(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=ua(e[a],s,t,n,r);return o},c0=function(e,t,n,r,s,o){var a,l,c,u;if(In[e]&&(a=new In[e]).init(s,a.rawVars?t[e]:CC(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new Sn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Zs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},vr,Cf,Ah=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,h=r.callbackScope,f=r.runBackwards,p=r.yoyoEase,g=r.keyframes,d=r.autoRevert,m=e._dur,_=e._startAt,b=e._targets,x=e.parent,y=x&&x.data==="nested"?x.vars.targets:b,w=e._overwrite==="auto"&&!vh,P=e.timeline,A,v,S,L,W,O,U,N,X,j,q,G,le;if(P&&(!g||!s)&&(s="none"),e._ease=ps(s,bo.ease),e._yEase=p?s0(ps(p===!0?s:p,bo.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!P&&!!r.runBackwards,!P||g&&!r.stagger){if(N=b[0]?hs(b[0]).harness:0,G=N&&r[N.prop],A=oc(r,wh),_&&(_._zTime<0&&_.progress(1),t<0&&f&&a&&!d?_.render(-1,!0):_.revert(f&&m?Ul:tC),_._lazy=0),o){if(Nr(e._startAt=Ot.set(b,ri({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&bn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn||!a&&!d)&&e._startAt.revert(Ul),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!_){if(t&&(a=!1),S=ri({overwrite:!1,data:"isFromStart",lazy:a&&!_&&bn(l),immediateRender:a,stagger:0,parent:x},A),G&&(S[N.prop]=G),Nr(e._startAt=Ot.set(b,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(nn?e._startAt.revert(Ul):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,ht,ht);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&bn(l)||l&&!m,v=0;v<b.length;v++){if(W=b[v],U=W._gsap||Eh(b)[v]._gsap,e._ptLookup[v]=j={},bf[U.id]&&Pr.length&&sc(),q=y===b?v:y.indexOf(W),N&&(X=new N).init(W,G||A,e,q,y)!==!1&&(e._pt=L=new Sn(e._pt,W,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(D){j[D]=L}),X.priority&&(O=1)),!N||G)for(S in A)In[S]&&(X=c0(S,A,e,q,W,y))?X.priority&&(O=1):j[S]=L=Ch.call(e,W,S,"get",A[S],q,y,0,r.stringFilter);e._op&&e._op[v]&&e.kill(W,e._op[v]),w&&e._pt&&(vr=e,bt.killTweensOf(W,j,e.globalTime(t)),le=!e.parent,vr=0),e._pt&&l&&(bf[U.id]=1)}O&&m0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!le,g&&t<=0&&P.render(Qn,!0,!0)},AC=function(e,t,n,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Cf=1,e.vars[t]="+=0",Ah(e,a),Cf=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=Ct(n)+en(u.e)),u.b&&(u.b=c.s+en(u.b))},PC=function(e,t){var n=e[0]?hs(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=bs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},RC=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(rn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ua=function(e,t,n,r,s){return wt(e)?e.call(t,n,r,s):Ht(e)&&~e.indexOf("random(")?Ra(e):e},u0=Th+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",f0={};Mn(u0+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return f0[i]=1});var Ot=function(i){P_(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:la(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,b=r.parent||bt,x=(rn(n)||L_(n)?tr(n[0]):"length"in r)?[n]:ei(n),y,w,P,A,v,S,L,W;if(a._targets=x.length?Eh(x):rc("GSAP target "+n+" not found. https://greensock.com",!Gn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||xl(c)||xl(u)){if(r=a.vars,y=a.timeline=new vn({data:"nested",defaults:d||{},targets:b&&b.data==="nested"?b.vars.targets:x}),y.kill(),y.parent=y._dp=qi(a),y._start=0,f||xl(c)||xl(u)){if(A=x.length,L=f&&j_(f),zi(f))for(v in f)~u0.indexOf(v)&&(W||(W={}),W[v]=f[v]);for(w=0;w<A;w++)P=oc(r,f0),P.stagger=0,_&&(P.yoyoEase=_),W&&bs(P,W),S=x[w],P.duration=+ua(c,qi(a),w,S,x),P.delay=(+ua(u,qi(a),w,S,x)||0)-a._delay,!f&&A===1&&P.delay&&(a._delay=u=P.delay,a._start+=u,P.delay=0),y.to(S,P,L?L(w,S,x):0),y._ease=et.none;y.duration()?c=u=0:a.timeline=0}else if(g){la(ri(y.vars.defaults,{ease:"none"})),y._ease=ps(g.ease||r.ease||"none");var O=0,U,N,X;if(rn(g))g.forEach(function(j){return y.to(x,j,">")}),y.duration();else{P={};for(v in g)v==="ease"||v==="easeEach"||RC(v,g[v],P,g.easeEach);for(v in P)for(U=P[v].sort(function(j,q){return j.t-q.t}),O=0,w=0;w<U.length;w++)N=U[w],X={ease:N.e,duration:(N.t-(w?U[w-1].t:0))/100*c},X[v]=N.v,y.to(x,X,O),O+=X.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return p===!0&&!vh&&(vr=qi(a),bt.killTweensOf(x),vr=0),Pi(b,qi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===Xt(b._time)&&bn(h)&&aC(qi(a))&&b.data!=="nested")&&(a._tTime=-ht,a.render(Math.max(0,-u)||0)),m&&X_(qi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-ht&&!u?l:r<ht?0:r,f,p,g,d,m,_,b,x,y;if(!c)cC(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+r,s,o);if(f=Xt(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,f=c-f),m=Mo(this._tTime,d),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&o0(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render(Xt(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(q_(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!a&&!s&&!g&&(ti(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;x&&x.render(r<0?r:!f&&_?-ht:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Mf(this,r,s,o),ti(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ti(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Mf(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Nr(this,1),!s&&!(u&&!a)&&(h||a||_)&&(ti(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){La||Nn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Ah(this,l),c=this._ease(l/this._dur),AC(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(Nc(this,0),this.parent||H_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Jo(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,vr&&vr.vars.overwrite!==!0)._first||Jo(this),this.parent&&o!==this.timeline.totalDuration()&&So(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ei(r):a,c=this._ptLookup,u=this._pt,h,f,p,g,d,m,_;if((!s||s==="all")&&sC(a,l))return s==="all"&&(this._pt=0),Jo(this);for(h=this._op=this._op||[],s!=="all"&&(Ht(s)&&(d={},Mn(s,function(b){return d[b]=1}),s=d),s=PC(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],s==="all"?(h[_]=s,g=f,p={}):(p=h[_]=h[_]||{},g=s);for(d in g)m=f&&f[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Oc(this,m,"_pt"),delete f[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&Jo(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ca(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return ca(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return bt.killTweensOf(r,s,o)},e}(To);ri(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(i){Ot[i]=function(){var e=new vn,t=wf.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Ph=function(e,t,n){return e[t]=n},h0=function(e,t,n){return e[t](n)},LC=function(e,t,n,r){return e[t](r.fp,n)},DC=function(e,t,n){return e.setAttribute(t,n)},Rh=function(e,t){return wt(e[t])?h0:yh(e[t])&&e.setAttribute?DC:Ph},d0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},IC=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},p0=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Lh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},OC=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},FC=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Oc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},NC=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},m0=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Sn=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||d0,this.d=l||this,this.set=c||Ph,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=NC,this.m=n,this.mt=s,this.tween=r},i}();Mn(Th+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return wh[i]=1});Vn.TweenMax=Vn.TweenLite=Ot;Vn.TimelineLite=Vn.TimelineMax=vn;bt=new vn({sortChildren:!1,defaults:bo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gn.stringFilter=r0;var Eo=[],Bl={},zC=[],hm=0,Nu=function(e){return(Bl[e]||zC).map(function(t){return t()})},Af=function(){var e=Date.now(),t=[];e-hm>2&&(Nu("matchMediaInit"),Eo.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=qn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Nu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),hm=e,Nu("matchMedia"))},g0=function(){function i(t,n){this.selector=n&&Tf(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){wt(n)&&(s=r,r=n,n=wt);var o=this,a=function(){var c=Dt,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Tf(s)),Dt=o,h=r.apply(o,arguments),wt(h)&&o._r.push(h),Dt=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===wt?a(o):n?o[n]=a:a},e.ignore=function(n){var r=Dt;Dt=null,n(this),Dt=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Ot&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof To)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var a=Eo.indexOf(this);~a&&Eo.splice(a,1)}},e.revert=function(n){this.kill(n||{})},i}(),UC=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){zi(n)||(n={matches:n});var o=new g0(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=qn.matchMedia(n[c]),l&&(Eo.indexOf(o)<0&&Eo.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Af):l.addEventListener("change",Af)));return u&&r(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),lc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return t0(r)})},timeline:function(e){return new vn(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Ht(e)&&(e=ei(e)[0]);var s=hs(e||{}).get,o=n?V_:G_;return n==="native"&&(n=""),e&&(t?o((In[t]&&In[t].get||s)(e,t,n,r)):function(a,l,c){return o((In[a]&&In[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ei(e),e.length>1){var r=e.map(function(u){return Tn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=In[t],a=hs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;Zs._pt=0,h.init(e,n?u+n:u,Zs,0,[e]),h.render(1,h),Zs._pt&&Lh(1,Zs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=Tn.to(e,bs((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ps(e.ease,bo.ease)),am(bo,e||{})},config:function(e){return am(Gn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!In[a]&&!Vn[a]&&rc(t+" effect requires "+a+" plugin.")}),Du[t]=function(a,l,c){return n(ei(a),ri(l||{},s),c)},o&&(vn.prototype[t]=function(a,l,c){return this.add(Du[t](a,zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){et[e]=ps(t)},parseEase:function(e,t){return arguments.length?ps(e,t):et},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vn(e),r,s;for(n.smoothChildTiming=bn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,r=bt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ot&&r.vars.onComplete===r._targets[0]))&&Pi(n,r,r._start-r._delay),r=s;return Pi(bt,n,0),n},context:function(e,t){return e?new g0(e,t):Dt},matchMedia:function(e){return new UC(e)},matchMediaRefresh:function(){return Eo.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Af()},addEventListener:function(e,t){var n=Bl[e]||(Bl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Bl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:_C,wrapYoyo:xC,distribute:j_,random:Z_,snap:K_,normalize:gC,getUnit:en,clamp:hC,splitColor:n0,toArray:ei,selector:Tf,mapRange:Q_,pipe:pC,unitize:mC,interpolate:vC,shuffle:Y_},install:N_,effects:Du,ticker:Nn,updateRoot:vn.updateRoot,plugins:In,globalTimeline:bt,core:{PropTween:Sn,globals:z_,Tween:Ot,Timeline:vn,Animation:To,getCache:hs,_removeLinkedListItem:Oc,reverting:function(){return nn},context:function(e){return e&&Dt&&(Dt.data.push(e),e._ctx=Dt),Dt},suppressOverwrites:function(e){return vh=e}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return lc[i]=Ot[i]});Nn.add(vn.updateRoot);Zs=lc.to({},{duration:0});var kC=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},BC=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=kC(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},zu=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Ht(s)&&(l={},Mn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}BC(a,s)}}}},Tn=lc.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)nn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},zu("roundProps",Ef),zu("modifiers"),zu("snap",K_))||lc;Ot.version=vn.version=Tn.version="3.11.5";F_=1;bh()&&wo();et.Power0;et.Power1;et.Power2;et.Power3;et.Power4;et.Linear;et.Quad;et.Cubic;et.Quart;et.Quint;et.Strong;et.Elastic;et.Back;et.SteppedEase;et.Bounce;et.Sine;et.Expo;et.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var dm,yr,lo,Dh,as,pm,Ih,GC=function(){return typeof window<"u"},nr={},Qr=180/Math.PI,co=Math.PI/180,Bs=Math.atan2,mm=1e8,Oh=/([A-Z])/g,VC=/(left|right|width|margin|padding|x)/i,HC=/[\s,\(]\S/,Ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Pf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WC=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},XC=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qC=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},_0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},x0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},$C=function(e,t,n){return e.style[t]=n},YC=function(e,t,n){return e.style.setProperty(t,n)},jC=function(e,t,n){return e._gsap[t]=n},KC=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ZC=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},JC=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Mt="transform",vi=Mt+"Origin",QC=function i(e,t){var n=this,r=this.target,s=r.style;if(e in nr){if(this.tfm=this.tfm||{},e!=="transform")e=Ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=$i(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:$i(r,e);else return Ri.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(Mt)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(vi,t,"")),e=Mt}(s||t)&&this.props.push(e,t,s[e])},v0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},eA=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Oh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ih(),(!s||!s.isStart)&&!n[Mt]&&(v0(n),r.uncache=1)}},y0=function(e,t){var n={target:e,props:[],revert:eA,save:QC};return e._gsap||Tn.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},b0,Rf=function(e,t){var n=yr.createElementNS?yr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):yr.createElement(e);return n.style?n:yr.createElement(e)},Oi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Oh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Co(t)||t,1)||""},gm="O,Moz,ms,Ms,Webkit".split(","),Co=function(e,t,n){var r=t||as,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(gm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?gm[o]:"")+e},Lf=function(){GC()&&window.document&&(dm=window,yr=dm.document,lo=yr.documentElement,as=Rf("div")||{style:{}},Rf("div"),Mt=Co(Mt),vi=Mt+"Origin",as.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",b0=!!Co("perspective"),Ih=Tn.core.reverting,Dh=1)},Uu=function i(e){var t=Rf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(lo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),lo.removeChild(t),this.style.cssText=s,o},_m=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},M0=function(e){var t;try{t=e.getBBox()}catch{t=Uu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Uu||(t=Uu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+_m(e,["x","cx","x1"])||0,y:+_m(e,["y","cy","y1"])||0,width:0,height:0}:t},S0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&M0(e))},Da=function(e,t){if(t){var n=e.style;t in nr&&t!==vi&&(t=Mt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(Oh,"-$1").toLowerCase())):n.removeAttribute(t)}},br=function(e,t,n,r,s,o){var a=new Sn(e._pt,t,n,0,1,o?x0:_0);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},xm={deg:1,rad:1,turn:1},tA={grid:1,flex:1},zr=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=as.style,l=VC.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,d,m,_;return r===o||!s||xm[r]||xm[o]?s:(o!=="px"&&!f&&(s=i(e,t,n,"px")),_=e.getCTM&&S0(e),(p||o==="%")&&(nr[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],Ct(p?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(f?o:r),d=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===yr||!d.appendChild)&&(d=yr.body),m=d._gsap,m&&p&&m.width&&l&&m.time===Nn.time&&!m.uncache?Ct(s/m.width*h):((p||o==="%")&&!tA[Oi(d,"display")]&&(a.position=Oi(e,"position")),d===e&&(a.position="static"),d.appendChild(as),g=as[u],d.removeChild(as),a.position="absolute",l&&p&&(m=hs(d),m.time=Nn.time,m.width=d[u]),Ct(f?g*s/h:g&&s?h/g*s:0))))},$i=function(e,t,n,r){var s;return Dh||Lf(),t in Ri&&t!=="transform"&&(t=Ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),nr[t]&&t!=="transform"?(s=Oa(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:uc(Oi(e,vi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=cc[t]&&cc[t](e,t,n)||Oi(e,t)||k_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?zr(e,t,s,n)+n:s},nA=function(e,t,n,r){if(!n||n==="none"){var s=Co(t,e,1),o=s&&Oi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Oi(e,"borderTopColor"))}var a=new Sn(this._pt,e.style,t,0,1,p0),l=0,c=0,u,h,f,p,g,d,m,_,b,x,y,w;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=Oi(e,t)||r,e.style[t]=n),u=[n,r],r0(u),n=u[0],r=u[1],f=n.match(Ks)||[],w=r.match(Ks)||[],w.length){for(;h=Ks.exec(r);)m=h[0],b=r.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(d=f[c++]||"")&&(p=parseFloat(d)||0,y=d.substr((p+"").length),m.charAt(1)==="="&&(m=ao(p,m)+y),_=parseFloat(m),x=m.substr((_+"").length),l=Ks.lastIndex-x.length,x||(x=x||Gn.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=zr(e,t,d,x)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?x0:_0;return I_.test(r)&&(a.e=0),this._pt=a,a},vm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},iA=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=vm[n]||n,t[1]=vm[r]||r,t.join(" ")},rA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],nr[a]&&(l=1,a=a==="transformOrigin"?vi:Mt),Da(n,a);l&&(Da(n,Mt),o&&(o.svg&&n.removeAttribute("transform"),Oa(n,1),o.uncache=1,v0(r)))}},cc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Sn(e._pt,t,n,0,0,rA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ia=[1,0,0,1,0,0],w0={},T0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ym=function(e){var t=Oi(e,Mt);return T0(t)?Ia:t.substr(7).match(D_).map(Ct)},Fh=function(e,t){var n=e._gsap||hs(e),r=e.style,s=ym(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ia:s):(s===Ia&&!e.offsetParent&&e!==lo&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,lo.appendChild(e)),s=ym(e),l?r.display=l:Da(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):lo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Df=function(e,t,n,r,s,o){var a=e._gsap,l=s||Fh(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],b=l[5],x=t.split(" "),y=parseFloat(x[0])||0,w=parseFloat(x[1])||0,P,A,v,S;n?l!==Ia&&(A=p*m-g*d)&&(v=y*(m/A)+w*(-d/A)+(d*b-m*_)/A,S=y*(-g/A)+w*(p/A)-(p*b-g*_)/A,y=v,w=S):(P=M0(e),y=P.x+(~x[0].indexOf("%")?y/100*P.width:y),w=P.y+(~(x[1]||x[0]).indexOf("%")?w/100*P.height:w)),r||r!==!1&&a.smooth?(_=y-c,b=w-u,a.xOffset=h+(_*p+b*d)-_,a.yOffset=f+(_*g+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[vi]="0px 0px",o&&(br(o,a,"xOrigin",c,y),br(o,a,"yOrigin",u,w),br(o,a,"xOffset",h,a.xOffset),br(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},Oa=function(e,t){var n=e._gsap||new l0(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Oi(e,vi)||"0",u,h,f,p,g,d,m,_,b,x,y,w,P,A,v,S,L,W,O,U,N,X,j,q,G,le,D,ye,H,ue,pe,R;return u=h=f=d=m=_=b=x=y=0,p=g=1,n.svg=!!(e.getCTM&&S0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[Mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Mt]!=="none"?l[Mt]:"")),r.scale=r.rotate=r.translate="none"),A=Fh(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Df(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,A)),w=n.xOrigin||0,P=n.yOrigin||0,A!==Ia&&(W=A[0],O=A[1],U=A[2],N=A[3],u=X=A[4],h=j=A[5],A.length===6?(p=Math.sqrt(W*W+O*O),g=Math.sqrt(N*N+U*U),d=W||O?Bs(O,W)*Qr:0,b=U||N?Bs(U,N)*Qr+d:0,b&&(g*=Math.abs(Math.cos(b*co))),n.svg&&(u-=w-(w*W+P*U),h-=P-(w*O+P*N))):(R=A[6],ue=A[7],D=A[8],ye=A[9],H=A[10],pe=A[11],u=A[12],h=A[13],f=A[14],v=Bs(R,H),m=v*Qr,v&&(S=Math.cos(-v),L=Math.sin(-v),q=X*S+D*L,G=j*S+ye*L,le=R*S+H*L,D=X*-L+D*S,ye=j*-L+ye*S,H=R*-L+H*S,pe=ue*-L+pe*S,X=q,j=G,R=le),v=Bs(-U,H),_=v*Qr,v&&(S=Math.cos(-v),L=Math.sin(-v),q=W*S-D*L,G=O*S-ye*L,le=U*S-H*L,pe=N*L+pe*S,W=q,O=G,U=le),v=Bs(O,W),d=v*Qr,v&&(S=Math.cos(v),L=Math.sin(v),q=W*S+O*L,G=X*S+j*L,O=O*S-W*L,j=j*S-X*L,W=q,X=G),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=Ct(Math.sqrt(W*W+O*O+U*U)),g=Ct(Math.sqrt(j*j+R*R)),v=Bs(X,j),b=Math.abs(v)>2e-4?v*Qr:0,y=pe?1/(pe<0?-pe:pe):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!T0(Oi(e,Mt)),q&&e.setAttribute("transform",q))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(p*=-1,b+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Ct(p),n.scaleY=Ct(g),n.rotation=Ct(d)+a,n.rotationX=Ct(m)+a,n.rotationY=Ct(_)+a,n.skewX=b+a,n.skewY=x+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[vi]=uc(c)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?oA:b0?E0:sA,n.uncache=0,n},uc=function(e){return(e=e.split(" "))[0]+" "+e[1]},ku=function(e,t,n){var r=en(t);return Ct(parseFloat(t)+parseFloat(zr(e,"x",n+"px",r)))+r},sA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,E0(e,t)},Yr="0deg",qo="0px",jr=") ",E0=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,b=n.target,x=n.zOrigin,y="",w=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==Yr||u!==Yr)){var P=parseFloat(u)*co,A=Math.sin(P),v=Math.cos(P),S;P=parseFloat(h)*co,S=Math.cos(P),o=ku(b,o,A*S*-x),a=ku(b,a,-Math.sin(P)*-x),l=ku(b,l,v*S*-x+x)}m!==qo&&(y+="perspective("+m+jr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(w||o!==qo||a!==qo||l!==qo)&&(y+=l!==qo||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+jr),c!==Yr&&(y+="rotate("+c+jr),u!==Yr&&(y+="rotateY("+u+jr),h!==Yr&&(y+="rotateX("+h+jr),(f!==Yr||p!==Yr)&&(y+="skew("+f+", "+p+jr),(g!==1||d!==1)&&(y+="scale("+g+", "+d+jr),b.style[Mt]=y||"translate(0, 0)"},oA=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,b=n.forceCSS,x=parseFloat(o),y=parseFloat(a),w,P,A,v,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=co,c*=co,w=Math.cos(l)*h,P=Math.sin(l)*h,A=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=co,S=Math.tan(c-u),S=Math.sqrt(1+S*S),A*=S,v*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),w*=S,P*=S)),w=Ct(w),P=Ct(P),A=Ct(A),v=Ct(v)):(w=h,v=f,P=A=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=zr(p,"x",o,"px"),y=zr(p,"y",a,"px")),(g||d||m||_)&&(x=Ct(x+g-(g*w+d*A)+m),y=Ct(y+d-(g*P+d*v)+_)),(r||s)&&(S=p.getBBox(),x=Ct(x+r/100*S.width),y=Ct(y+s/100*S.height)),S="matrix("+w+","+P+","+A+","+v+","+x+","+y+")",p.setAttribute("transform",S),b&&(p.style[Mt]=S)},aA=function(e,t,n,r,s){var o=360,a=Ht(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Qr:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*mm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*mm)%o-~~(c/o)*o)),e._pt=f=new Sn(e._pt,t,n,r,c,WC),f.e=u,f.u="deg",e._props.push(n),f},bm=function(e,t){for(var n in t)e[n]=t[n];return e},lA=function(e,t,n){var r=bm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,p,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Mt]=t,a=Oa(n,1),Da(n,Mt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Mt],o[Mt]=t,a=Oa(n,1),o[Mt]=c);for(l in nr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=en(c),g=en(u),h=p!==g?zr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new Sn(e._pt,a,l,h,f-h,Pf),e._pt.u=g||0,e._props.push(l));bm(a,r)};Mn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});cc[e>1?"border"+i:i]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return $i(a,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(g,d){return p[g]=f[d]=f[d]||f[(d-1)/2|0]}),a.init(l,p,h)}});var C0={name:"css",register:Lf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,p,g,d,m,_,b,x,y,w,P,A,v;Dh||Lf(),this.styles=this.styles||y0(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(In[d]&&c0(d,t,n,r,e,s)))){if(p=typeof u,g=cc[d],p==="function"&&(u=u.call(n,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Ra(u)),g)g(this,e,d,u,n)&&(A=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Rr.lastIndex=0,Rr.test(c)||(m=en(c),_=en(u)),_?m!==_&&(c=zr(e,d,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,d),o.push(d),v.push(d,0,a[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,r,e,s):l[d],Ht(c)&&~c.indexOf("random(")&&(c=Ra(c)),en(c+"")||(c+=Gn.units[d]||en($i(e,d))||""),(c+"").charAt(1)==="="&&(c=$i(e,d))):c=$i(e,d),f=parseFloat(c),b=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),d in Ri&&(d==="autoAlpha"&&(f===1&&$i(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,a.visibility),br(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Ri[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in nr,x){if(this.styles.save(d),y||(w=e._gsap,w.renderTransform&&!t.parseTransform||Oa(e,t.parseTransform),P=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new Sn(this._pt,a,Mt,0,1,w.renderTransform,w,0,-1),y.dep=1),d==="scale")this._pt=new Sn(this._pt,w,"scaleY",w.scaleY,(b?ao(w.scaleY,b+h):h)-w.scaleY||0,Pf),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(vi,0,a[vi]),u=iA(u),w.svg?Df(e,u,0,P,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==w.zOrigin&&br(this,w,"zOrigin",w.zOrigin,_),br(this,a,d,uc(c),uc(u)));continue}else if(d==="svgOrigin"){Df(e,u,1,P,0,this);continue}else if(d in w0){aA(this,w,d,f,b?ao(f,b+u):u);continue}else if(d==="smoothOrigin"){br(this,w,"smooth",w.smooth,u);continue}else if(d==="force3D"){w[d]=u;continue}else if(d==="transform"){lA(this,u,e);continue}}else d in a||(d=Co(d)||d);if(x||(h||h===0)&&(f||f===0)&&!HC.test(u)&&d in a)m=(c+"").substr((f+"").length),h||(h=0),_=en(u)||(d in Gn.units?Gn.units[d]:m),m!==_&&(f=zr(e,d,c,_)),this._pt=new Sn(this._pt,x?w:a,d,f,(b?ao(f,b+h):h)-f,!x&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?qC:Pf),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=XC);else if(d in a)nA.call(this,e,d,c,b?b+u:u);else if(d in e)this.add(e,d,c||e[d],b?b+u:u,r,s);else if(d!=="parseTransform"){Sh(d,u);continue}x||(d in a?v.push(d,0,a[d]):v.push(d,1,c||e[d])),o.push(d)}}A&&m0(this)},render:function(e,t){if(t.tween._time||!Ih())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:$i,aliases:Ri,getSetter:function(e,t,n){var r=Ri[t];return r&&r.indexOf(",")<0&&(t=r),t in nr&&t!==vi&&(e._gsap.x||$i(e,"x"))?n&&pm===n?t==="scale"?KC:jC:(pm=n||{})&&(t==="scale"?ZC:JC):e.style&&!yh(e.style[t])?$C:~t.indexOf("-")?YC:Rh(e,t)},core:{_removeProperty:Da,_getMatrix:Fh}};Tn.utils.checkPrefix=Co;Tn.core.getStyleSaver=y0;(function(i,e,t,n){var r=Mn(i+","+e+","+t,function(s){nr[s]=1});Mn(e,function(s){Gn.units[s]="deg",w0[s]=1}),Ri[r[13]]=i+","+e,Mn(n,function(s){var o=s.split(":");Ri[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Gn.units[i]="px"});Tn.registerPlugin(C0);var Gl=Tn.registerPlugin(C0)||Tn;Gl.core.Tween;function Mm(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function cA(i,e,t){return e&&Mm(i.prototype,e),t&&Mm(i,t),i}/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yt,If,zn,Mr,Sr,uo,A0,es,fa,P0,Ki,li,R0,L0=function(){return Yt||typeof window<"u"&&(Yt=window.gsap)&&Yt.registerPlugin&&Yt},D0=1,Js=[],Ze=[],Fi=[],ha=Date.now,Of=function(e,t){return t},uA=function(){var e=fa.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Ze),r.push.apply(r,Fi),Ze=n,Fi=r,Of=function(o,a){return t[o](a)}},Lr=function(e,t){return~Fi.indexOf(e)&&Fi[Fi.indexOf(e)+1][t]},da=function(e){return!!~P0.indexOf(e)},gn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},an=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},vl="scrollLeft",yl="scrollTop",Ff=function(){return Ki&&Ki.isPressed||Ze.cache++},fc=function(e,t){var n=function r(s){if(s||s===0){D0&&(zn.history.scrollRestoration="manual");var o=Ki&&Ki.isPressed;s=r.v=Math.round(s)||(Ki&&Ki.iOS?1:0),e(s),r.cacheID=Ze.cache,o&&Of("ss",s)}else(t||Ze.cache!==r.cacheID||Of("ref"))&&(r.cacheID=Ze.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},dn={s:vl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:fc(function(i){return arguments.length?zn.scrollTo(i,Ft.sc()):zn.pageXOffset||Mr[vl]||Sr[vl]||uo[vl]||0})},Ft={s:yl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:dn,sc:fc(function(i){return arguments.length?zn.scrollTo(dn.sc(),i):zn.pageYOffset||Mr[yl]||Sr[yl]||uo[yl]||0})},xn=function(e){return Yt.utils.toArray(e)[0]||(typeof e=="string"&&Yt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Ur=function(e,t){var n=t.s,r=t.sc;da(e)&&(e=Mr.scrollingElement||Sr);var s=Ze.indexOf(e),o=r===Ft.sc?1:2;!~s&&(s=Ze.push(e)-1),Ze[s+o]||e.addEventListener("scroll",Ff);var a=Ze[s+o],l=a||(Ze[s+o]=fc(Lr(e,n),!0)||(da(e)?r:fc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Yt.getProperty(e,"scrollBehavior")==="smooth"),l},Nf=function(e,t,n){var r=e,s=e,o=ha(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,d){var m=ha();d||m-o>l?(s=r,r=g,a=o,o=m):n?r+=g:r=s+(g-s)/(m-a)*(o-a)},h=function(){s=r=n?0:r,a=o=0},f=function(g){var d=a,m=s,_=ha();return(g||g===0)&&g!==r&&u(g),o===a||_-a>c?0:(r+(n?m:-m))/((n?_:o)-d)*1e3};return{update:u,reset:h,getVelocity:f}},$o=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Sm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},I0=function(){fa=Yt.core.globals().ScrollTrigger,fa&&fa.core&&uA()},O0=function(e){return Yt=e||L0(),Yt&&typeof document<"u"&&document.body&&(zn=window,Mr=document,Sr=Mr.documentElement,uo=Mr.body,P0=[zn,Mr,Sr,uo],Yt.utils.clamp,R0=Yt.core.context||function(){},es="onpointerenter"in uo?"pointer":"mouse",A0=It.isTouch=zn.matchMedia&&zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,li=It.eventTypes=("ontouchstart"in Sr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Sr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return D0=0},500),I0(),If=1),If};dn.op=Ft;Ze.cache=0;var It=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){If||O0(Yt)||console.warn("Please gsap.registerPlugin(Observer)"),fa||I0();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,d=n.event,m=n.onDragStart,_=n.onDragEnd,b=n.onDrag,x=n.onPress,y=n.onRelease,w=n.onRight,P=n.onLeft,A=n.onUp,v=n.onDown,S=n.onChangeX,L=n.onChangeY,W=n.onChange,O=n.onToggleX,U=n.onToggleY,N=n.onHover,X=n.onHoverEnd,j=n.onMove,q=n.ignoreCheck,G=n.isNormalizer,le=n.onGestureStart,D=n.onGestureEnd,ye=n.onWheel,H=n.onEnable,ue=n.onDisable,pe=n.onClick,R=n.scrollSpeed,Y=n.capture,K=n.allowClicks,ae=n.lockAxis,me=n.onLockAxis;this.target=a=xn(a)||Sr,this.vars=n,p&&(p=Yt.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,R=R||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(zn.getComputedStyle(uo).lineHeight)||22);var Me,be,T,I,$,Q,se,F=this,de=0,re=0,_e=Ur(a,dn),ce=Ur(a,Ft),E=_e(),M=ce(),k=~o.indexOf("touch")&&!~o.indexOf("pointer")&&li[0]==="pointerdown",ie=da(a),ee=a.ownerDocument||Mr,fe=[0,0,0],xe=[0,0,0],ve=0,ne=function(){return ve=ha()},Re=function(Ce,ge){return(F.event=Ce)&&p&&~p.indexOf(Ce.target)||ge&&k&&Ce.pointerType!=="touch"||q&&q(Ce,ge)},Pe=function(){F._vx.reset(),F._vy.reset(),be.pause(),h&&h(F)},Ie=function(){var Ce=F.deltaX=Sm(fe),ge=F.deltaY=Sm(xe),De=Math.abs(Ce)>=r,He=Math.abs(ge)>=r;W&&(De||He)&&W(F,Ce,ge,fe,xe),De&&(w&&F.deltaX>0&&w(F),P&&F.deltaX<0&&P(F),S&&S(F),O&&F.deltaX<0!=de<0&&O(F),de=F.deltaX,fe[0]=fe[1]=fe[2]=0),He&&(v&&F.deltaY>0&&v(F),A&&F.deltaY<0&&A(F),L&&L(F),U&&F.deltaY<0!=re<0&&U(F),re=F.deltaY,xe[0]=xe[1]=xe[2]=0),(I||T)&&(j&&j(F),T&&(b(F),T=!1),I=!1),Q&&!(Q=!1)&&me&&me(F),$&&(ye(F),$=!1),Me=0},Fe=function(Ce,ge,De){fe[De]+=Ce,xe[De]+=ge,F._vx.update(Ce),F._vy.update(ge),c?Me||(Me=requestAnimationFrame(Ie)):Ie()},Ee=function(Ce,ge){ae&&!se&&(F.axis=se=Math.abs(Ce)>Math.abs(ge)?"x":"y",Q=!0),se!=="y"&&(fe[2]+=Ce,F._vx.update(Ce,!0)),se!=="x"&&(xe[2]+=ge,F._vy.update(ge,!0)),c?Me||(Me=requestAnimationFrame(Ie)):Ie()},Ge=function(Ce){if(!Re(Ce,1)){Ce=$o(Ce,u);var ge=Ce.clientX,De=Ce.clientY,He=ge-F.x,Xe=De-F.y,Rt=F.isDragging;F.x=ge,F.y=De,(Rt||Math.abs(F.startX-ge)>=s||Math.abs(F.startY-De)>=s)&&(b&&(T=!0),Rt||(F.isDragging=!0),Ee(He,Xe),Rt||m&&m(F))}},Le=F.onPress=function(Be){Re(Be,1)||Be&&Be.button||(F.axis=se=null,be.pause(),F.isPressed=!0,Be=$o(Be),de=re=0,F.startX=F.x=Be.clientX,F.startY=F.y=Be.clientY,F._vx.reset(),F._vy.reset(),gn(G?a:ee,li[1],Ge,u,!0),F.deltaX=F.deltaY=0,x&&x(F))},at=F.onRelease=function(Be){if(!Re(Be,1)){an(G?a:ee,li[1],Ge,!0);var Ce=!isNaN(F.y-F.startY),ge=F.isDragging&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),De=$o(Be);!ge&&Ce&&(F._vx.reset(),F._vy.reset(),u&&K&&Yt.delayedCall(.08,function(){if(ha()-ve>300&&!Be.defaultPrevented){if(Be.target.click)Be.target.click();else if(ee.createEvent){var He=ee.createEvent("MouseEvents");He.initMouseEvent("click",!0,!0,zn,1,De.screenX,De.screenY,De.clientX,De.clientY,!1,!1,!1,!1,0,null),Be.target.dispatchEvent(He)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,h&&!G&&be.restart(!0),_&&ge&&_(F),y&&y(F,ge)}},z=function(Ce){return Ce.touches&&Ce.touches.length>1&&(F.isGesturing=!0)&&le(Ce,F.isDragging)},oe=function(){return(F.isGesturing=!1)||D(F)},he=function(Ce){if(!Re(Ce)){var ge=_e(),De=ce();Fe((ge-E)*R,(De-M)*R,1),E=ge,M=De,h&&be.restart(!0)}},Se=function(Ce){if(!Re(Ce)){Ce=$o(Ce,u),ye&&($=!0);var ge=(Ce.deltaMode===1?l:Ce.deltaMode===2?zn.innerHeight:1)*g;Fe(Ce.deltaX*ge,Ce.deltaY*ge,0),h&&!G&&be.restart(!0)}},Ae=function(Ce){if(!Re(Ce)){var ge=Ce.clientX,De=Ce.clientY,He=ge-F.x,Xe=De-F.y;F.x=ge,F.y=De,I=!0,(He||Xe)&&Ee(He,Xe)}},it=function(Ce){F.event=Ce,N(F)},lt=function(Ce){F.event=Ce,X(F)},Tt=function(Ce){return Re(Ce)||$o(Ce,u)&&pe(F)};be=F._dc=Yt.delayedCall(f||.25,Pe).pause(),F.deltaX=F.deltaY=0,F._vx=Nf(0,50,!0),F._vy=Nf(0,50,!0),F.scrollX=_e,F.scrollY=ce,F.isDragging=F.isGesturing=F.isPressed=!1,R0(this),F.enable=function(Be){return F.isEnabled||(gn(ie?ee:a,"scroll",Ff),o.indexOf("scroll")>=0&&gn(ie?ee:a,"scroll",he,u,Y),o.indexOf("wheel")>=0&&gn(a,"wheel",Se,u,Y),(o.indexOf("touch")>=0&&A0||o.indexOf("pointer")>=0)&&(gn(a,li[0],Le,u,Y),gn(ee,li[2],at),gn(ee,li[3],at),K&&gn(a,"click",ne,!1,!0),pe&&gn(a,"click",Tt),le&&gn(ee,"gesturestart",z),D&&gn(ee,"gestureend",oe),N&&gn(a,es+"enter",it),X&&gn(a,es+"leave",lt),j&&gn(a,es+"move",Ae)),F.isEnabled=!0,Be&&Be.type&&Le(Be),H&&H(F)),F},F.disable=function(){F.isEnabled&&(Js.filter(function(Be){return Be!==F&&da(Be.target)}).length||an(ie?ee:a,"scroll",Ff),F.isPressed&&(F._vx.reset(),F._vy.reset(),an(G?a:ee,li[1],Ge,!0)),an(ie?ee:a,"scroll",he,Y),an(a,"wheel",Se,Y),an(a,li[0],Le,Y),an(ee,li[2],at),an(ee,li[3],at),an(a,"click",ne,!0),an(a,"click",Tt),an(ee,"gesturestart",z),an(ee,"gestureend",oe),an(a,es+"enter",it),an(a,es+"leave",lt),an(a,es+"move",Ae),F.isEnabled=F.isPressed=F.isDragging=!1,ue&&ue(F))},F.kill=F.revert=function(){F.disable();var Be=Js.indexOf(F);Be>=0&&Js.splice(Be,1),Ki===F&&(Ki=0)},Js.push(F),G&&da(a)&&(Ki=F),F.enable(d)},cA(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();It.version="3.11.5";It.create=function(i){return new It(i)};It.register=O0;It.getAll=function(){return Js.slice()};It.getById=function(i){return Js.filter(function(e){return e.vars.id===i})[0]};L0()&&Yt.registerPlugin(It);/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Oe,Xs,Je,vt,fi,St,F0,hc,dc,Qs,Vl,bl,Jt,zc,zf,un,wm,Tm,qs,N0,Bu,z0,Ln,U0,k0,B0,pr,Uf,Nh,Gu,Ml=1,hn=Date.now,Vu=hn(),ii=0,ea=0,fA=function i(){return ea&&requestAnimationFrame(i)},Em=function(){return zc=1},Cm=function(){return zc=0},wi=function(e){return e},ta=function(e){return Math.round(e*1e5)/1e5||0},G0=function(){return typeof window<"u"},V0=function(){return Oe||G0()&&(Oe=window.gsap)&&Oe.registerPlugin&&Oe},Ms=function(e){return!!~F0.indexOf(e)},H0=function(e){return Lr(e,"getBoundingClientRect")||(Ms(e)?function(){return Yl.width=Je.innerWidth,Yl.height=Je.innerHeight,Yl}:function(){return Yi(e)})},hA=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=Lr(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?Je["inner"+s]:e["client"+s])||0}},dA=function(e,t){return!t||~Fi.indexOf(e)?H0(e):function(){return Yl}},wr=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=Lr(e,n))?o()-H0(e)()[s]:Ms(e)?(fi[n]||St[n])-(Je["inner"+r]||fi["client"+r]||St["client"+r]):e[n]-e["offset"+r])},Sl=function(e,t){for(var n=0;n<qs.length;n+=3)(!t||~t.indexOf(qs[n+1]))&&e(qs[n],qs[n+1],qs[n+2])},ui=function(e){return typeof e=="string"},pn=function(e){return typeof e=="function"},na=function(e){return typeof e=="number"},Hl=function(e){return typeof e=="object"},Yo=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Hu=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Gs=Math.abs,W0="left",X0="top",zh="right",Uh="bottom",ms="width",gs="height",pa="Right",ma="Left",ga="Top",_a="Bottom",Et="padding",Kn="margin",Ao="Width",kh="Height",Wt="px",mi=function(e){return Je.getComputedStyle(e)},pA=function(e){var t=mi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Am=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Yi=function(e,t){var n=t&&mi(e)[zf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Oe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},kf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},q0=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},mA=function(e){return function(t){return Oe.utils.snap(q0(e),t)}},Bh=function(e){var t=Oe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},gA=function(e){return function(t,n){return Bh(q0(e))(t,n.direction)}},wl=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},Gt=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},Bt=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Tl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Pm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},El={toggleActions:"play",anticipatePin:0},pc={top:0,left:0,center:.5,bottom:1,right:1},Wl=function(e,t){if(ui(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in pc?pc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Cl=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,p=s.fontWeight,g=vt.createElement("div"),d=Ms(n)||Lr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=d?St:n,b=e.indexOf("start")!==-1,x=b?c:u,y="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&d?"fixed;":"absolute;"),(m||l||!d)&&(y+=(r===Ft?zh:Uh)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+r.op.d2],Xl(g,0,r,b),g},Xl=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+Ao]=1,s["border"+a+Ao]=0,s[n.p]=t+"px",Oe.set(e,s)},je=[],Bf={},Fa,Rm=function(){return hn()-ii>34&&(Fa||(Fa=requestAnimationFrame(Qi)))},Vs=function(){(!Ln||!Ln.isPressed||Ln.startX>St.clientWidth)&&(Ze.cache++,Ln?Fa||(Fa=requestAnimationFrame(Qi)):Qi(),ii||ws("scrollStart"),ii=hn())},Wu=function(){B0=Je.innerWidth,k0=Je.innerHeight},ia=function(){Ze.cache++,!Jt&&!z0&&!vt.fullscreenElement&&!vt.webkitFullscreenElement&&(!U0||B0!==Je.innerWidth||Math.abs(Je.innerHeight-k0)>Je.innerHeight*.25)&&hc.restart(!0)},Ss={},_A=[],$0=function i(){return Bt(Qe,"scrollEnd",i)||ls(!0)},ws=function(e){return Ss[e]&&Ss[e].map(function(t){return t()})||_A},Dn=[],Y0=function(e){for(var t=0;t<Dn.length;t+=5)(!e||Dn[t+4]&&Dn[t+4].query===e)&&(Dn[t].style.cssText=Dn[t+1],Dn[t].getBBox&&Dn[t].setAttribute("transform",Dn[t+2]||""),Dn[t+3].uncache=1)},Gh=function(e,t){var n;for(un=0;un<je.length;un++)n=je[un],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&Y0(t),t||ws("revert")},j0=function(e,t){Ze.cache++,(t||!On)&&Ze.forEach(function(n){return pn(n)&&n.cacheID++&&(n.rec=0)}),ui(e)&&(Je.history.scrollRestoration=Nh=e)},On,_s=0,Lm,xA=function(){if(Lm!==_s){var e=Lm=_s;requestAnimationFrame(function(){return e===_s&&ls(!0)})}},ls=function(e,t){if(ii&&!e){Gt(Qe,"scrollEnd",$0);return}On=Qe.isRefreshing=!0,Ze.forEach(function(r){return pn(r)&&r.cacheID++&&(r.rec=r())});var n=ws("refreshInit");N0&&Qe.sort(),t||Gh(),Ze.forEach(function(r){pn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),je.slice(0).forEach(function(r){return r.refresh()}),je.forEach(function(r,s){if(r._subPinOffset&&r.pin){var o=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[o];r.revert(!0,1),r.adjustPinSpacing(r.pin[o]-a),r.refresh()}}),je.forEach(function(r){return r.vars.end==="max"&&r.setPositions(r.start,Math.max(r.start+1,wr(r.scroller,r._dir)))}),n.forEach(function(r){return r&&r.render&&r.render(-1)}),Ze.forEach(function(r){pn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),j0(Nh,1),hc.pause(),_s++,On=2,Qi(2),je.forEach(function(r){return pn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),On=Qe.isRefreshing=!1,ws("refresh")},Gf=0,ql=1,xa,Qi=function(e){if(!On||e===2){Qe.isUpdating=!0,xa&&xa.update(0);var t=je.length,n=hn(),r=n-Vu>=50,s=t&&je[0].scroll();if(ql=Gf>s?-1:1,On||(Gf=s),r&&(ii&&!zc&&n-ii>200&&(ii=0,ws("scrollEnd")),Vl=Vu,Vu=n),ql<0){for(un=t;un-- >0;)je[un]&&je[un].update(0,r);ql=1}else for(un=0;un<t;un++)je[un]&&je[un].update(0,r);Qe.isUpdating=!1}Fa=0},Vf=[W0,X0,Uh,zh,Kn+_a,Kn+pa,Kn+ga,Kn+ma,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$l=Vf.concat([ms,gs,"boxSizing","max"+Ao,"max"+kh,"position",Kn,Et,Et+ga,Et+pa,Et+_a,Et+ma]),vA=function(e,t,n){fo(n);var r=e._gsap;if(r.spacerIsNative)fo(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Xu=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Vf.length,o=t.style,a=e.style,l;s--;)l=Vf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Uh]=a[zh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ms]=kf(e,dn)+Wt,o[gs]=kf(e,Ft)+Wt,o[Et]=a[Kn]=a[X0]=a[W0]="0",fo(r),a[ms]=a["max"+Ao]=n[ms],a[gs]=a["max"+kh]=n[gs],a[Et]=n[Et],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},yA=/([A-Z])/g,fo=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Oe.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(yA,"-$1").toLowerCase())}},Al=function(e){for(var t=$l.length,n=e.style,r=[],s=0;s<t;s++)r.push($l[s],n[$l[s]]);return r.t=e,r},bA=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Yl={left:0,top:0},Dm=function(e,t,n,r,s,o,a,l,c,u,h,f,p){pn(e)&&(e=e(l)),ui(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Wl("0"+e.substr(3),n):0));var g=p?p.time():0,d,m,_;if(p&&p.seek(0),na(e))p&&(e=Oe.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&Xl(a,n,r,!0);else{pn(t)&&(t=t(l));var b=(e||"0").split(" "),x,y,w,P;_=xn(t)||St,x=Yi(_)||{},(!x||!x.left&&!x.top)&&mi(_).display==="none"&&(P=_.style.display,_.style.display="block",x=Yi(_),P?_.style.display=P:_.style.removeProperty("display")),y=Wl(b[0],x[r.d]),w=Wl(b[1]||"0",n),e=x[r.p]-c[r.p]-u+y+s-w,a&&Xl(a,w,r,n-w<20||a._isStart&&w>20),n-=n-w}if(o){var A=e+n,v=o._isStart;d="scroll"+r.d2,Xl(o,A,r,v&&A>20||!v&&(h?Math.max(St[d],fi[d]):o.parentNode[d])<=A+1),h&&(c=Yi(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+Wt))}return p&&_&&(d=Yi(_),p.seek(f),m=Yi(_),p._caScrollDist=d[r.p]-m[r.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},MA=/(webkit|moz|length|cssText|inset)/i,Im=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===St){e._stOrig=s.cssText,a=mi(e);for(o in a)!+o&&!MA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Oe.core.getCache(e).uncache=1,t.appendChild(e)}},K0=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=o,o}},Om=function(e,t){var n=Ur(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,p=l.onComplete,g={};c=c||n();var d=K0(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[r]=a,l.modifiers=g,g[r]=function(){return d(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){Ze.cache++,Qi()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Oe.to(e,l),f};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Gt(e,"wheel",n.wheelHandler),Qe.isTouch&&Gt(e,"touchmove",n.wheelHandler),s},Qe=function(){function i(t,n){Xs||i.register(Oe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ea){this.update=this.refresh=this.kill=wi;return}n=Am(ui(n)||na(n)||n.nodeType?{trigger:n}:n,El);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,p=s.pin,g=s.pinSpacing,d=s.invalidateOnRefresh,m=s.anticipatePin,_=s.onScrubComplete,b=s.onSnapComplete,x=s.once,y=s.snap,w=s.pinReparent,P=s.pinSpacer,A=s.containerAnimation,v=s.fastScrollEnd,S=s.preventOverlaps,L=n.horizontal||n.containerAnimation&&n.horizontal!==!1?dn:Ft,W=!h&&h!==0,O=xn(n.scroller||Je),U=Oe.core.getCache(O),N=Ms(O),X=("pinType"in n?n.pinType:Lr(O,"pinType")||N&&"fixed")==="fixed",j=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=W&&n.toggleActions.split(" "),G="markers"in n?n.markers:El.markers,le=N?0:parseFloat(mi(O)["border"+L.p2+Ao])||0,D=this,ye=n.onRefreshInit&&function(){return n.onRefreshInit(D)},H=hA(O,N,L),ue=dA(O,N),pe=0,R=0,Y=Ur(O,L),K,ae,me,Me,be,T,I,$,Q,se,F,de,re,_e,ce,E,M,k,ie,ee,fe,xe,ve,ne,Re,Pe,Ie,Fe,Ee,Ge,Le,at,z,oe,he,Se,Ae,it,lt;if(Uf(D),D._dir=L,m*=45,D.scroller=O,D.scroll=A?A.time.bind(A):Y,Me=Y(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(N0=1,n.refreshPriority===-9999&&(xa=D)),U.tweenScroll=U.tweenScroll||{top:Om(O,Ft),left:Om(O,dn)},D.tweenTo=K=U.tweenScroll[L.p],D.scrubDuration=function(ge){at=na(ge)&&ge,at?Le?Le.duration(ge):Le=Oe.to(r,{ease:"expo",totalProgress:"+=0.001",duration:at,paused:!0,onComplete:function(){return _&&_(D)}}):(Le&&Le.progress(1).kill(),Le=0)},r&&(r.vars.lazy=!1,r._initted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(h),Le&&Le.resetTo&&Le.resetTo("totalProgress",0),Ee=0,l||(l=r.vars.id)),je.push(D),y&&((!Hl(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in St.style&&Oe.set(N?[St,fi]:O,{scrollBehavior:"auto"}),Ze.forEach(function(ge){return pn(ge)&&ge.target===(N?vt.scrollingElement||fi:O)&&(ge.smooth=!1)}),me=pn(y.snapTo)?y.snapTo:y.snapTo==="labels"?mA(r):y.snapTo==="labelsDirectional"?gA(r):y.directional!==!1?function(ge,De){return Bh(y.snapTo)(ge,hn()-R<500?0:De.direction)}:Oe.utils.snap(y.snapTo),z=y.duration||{min:.1,max:2},z=Hl(z)?Qs(z.min,z.max):Qs(z,z),oe=Oe.delayedCall(y.delay||at/2||.1,function(){var ge=Y(),De=hn()-R<500,He=K.tween;if((De||Math.abs(D.getVelocity())<10)&&!He&&!zc&&pe!==ge){var Xe=(ge-T)/re,Rt=r&&!W?r.totalProgress():Xe,C=De?0:(Rt-Ge)/(hn()-Vl)*1e3||0,V=Oe.utils.clamp(-Xe,1-Xe,Gs(C/2)*C/.185),J=Xe+(y.inertia===!1?0:V),B=Qs(0,1,me(J,D)),te=Math.round(T+B*re),Te=y,Ne=Te.onStart,Ue=Te.onInterrupt,ze=Te.onComplete;if(ge<=I&&ge>=T&&te!==ge){if(He&&!He._initted&&He.data<=Gs(te-ge))return;y.inertia===!1&&(V=B-Xe),K(te,{duration:z(Gs(Math.max(Gs(J-Rt),Gs(B-Rt))*.185/C/.05||0)),ease:y.ease||"power3",data:Gs(te-ge),onInterrupt:function(){return oe.restart(!0)&&Ue&&Ue(D)},onComplete:function(){D.update(),pe=Y(),Ee=Ge=r&&!W?r.totalProgress():D.progress,b&&b(D),ze&&ze(D)}},ge,V*re,te-ge-V*re),Ne&&Ne(D,K.tween)}}else D.isActive&&pe!==ge&&oe.restart(!0)}).pause()),l&&(Bf[l]=D),f=D.trigger=xn(f||p),lt=f&&f._gsap&&f._gsap.stRevert,lt&&(lt=lt(D)),p=p===!0?f:xn(p),ui(a)&&(a={targets:f,className:a}),p&&(g===!1||g===Kn||(g=!g&&p.parentNode&&p.parentNode.style&&mi(p.parentNode).display==="flex"?!1:Et),D.pin=p,ae=Oe.core.getCache(p),ae.spacer?_e=ae.pinState:(P&&(P=xn(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),ae.spacerIsNative=!!P,P&&(ae.spacerState=Al(P))),ae.spacer=M=P||vt.createElement("div"),M.classList.add("pin-spacer"),l&&M.classList.add("pin-spacer-"+l),ae.pinState=_e=Al(p)),n.force3D!==!1&&Oe.set(p,{force3D:!0}),D.spacer=M=ae.spacer,Fe=mi(p),ve=Fe[g+L.os2],ie=Oe.getProperty(p),ee=Oe.quickSetter(p,L.a,Wt),Xu(p,M,Fe),E=Al(p)),G){de=Hl(G)?Am(G,Pm):Pm,se=Cl("scroller-start",l,O,L,de,0),F=Cl("scroller-end",l,O,L,de,0,se),k=se["offset"+L.op.d2];var Tt=xn(Lr(O,"content")||O);$=this.markerStart=Cl("start",l,Tt,L,de,k,0,A),Q=this.markerEnd=Cl("end",l,Tt,L,de,k,0,A),A&&(it=Oe.quickSetter([$,Q],L.a,Wt)),!X&&!(Fi.length&&Lr(O,"fixedMarkers")===!0)&&(pA(N?St:O),Oe.set([se,F],{force3D:!0}),Re=Oe.quickSetter(se,L.a,Wt),Ie=Oe.quickSetter(F,L.a,Wt))}if(A){var Be=A.vars.onUpdate,Ce=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){D.update(0,0,1),Be&&Be.apply(A,Ce||[])})}D.previous=function(){return je[je.indexOf(D)-1]},D.next=function(){return je[je.indexOf(D)+1]},D.revert=function(ge,De){if(!De)return D.kill(!0);var He=ge!==!1||!D.enabled,Xe=Jt;He!==D.isReverted&&(He&&(Se=Math.max(Y(),D.scroll.rec||0),he=D.progress,Ae=r&&r.progress()),$&&[$,Q,se,F].forEach(function(Rt){return Rt.style.display=He?"none":"block"}),He&&(Jt=D,D.update(He)),p&&(!w||!D.isActive)&&(He?vA(p,M,_e):Xu(p,M,mi(p),ne)),He||D.update(He),Jt=Xe,D.isReverted=He)},D.refresh=function(ge,De){if(!((Jt||!D.enabled)&&!De)){if(p&&ge&&ii){Gt(i,"scrollEnd",$0);return}!On&&ye&&ye(D),Jt=D,R=hn(),K.tween&&(K.tween.kill(),K.tween=0),Le&&Le.pause(),d&&r&&r.revert({kill:!1}).invalidate(),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;for(var He=H(),Xe=ue(),Rt=A?A.duration():wr(O,L),C=re<=.01,V=0,J=0,B=n.end,te=n.endTrigger||f,Te=n.start||(n.start===0||!f?0:p?"0 0":"0 100%"),Ne=D.pinnedContainer=n.pinnedContainer&&xn(n.pinnedContainer),Ue=f&&Math.max(0,je.indexOf(D))||0,ze=Ue,ke,Ve,qe,ct,tt,ut,Ut,xt,Ke,Ui,st;ze--;)ut=je[ze],ut.end||ut.refresh(0,1)||(Jt=D),Ut=ut.pin,Ut&&(Ut===f||Ut===p||Ut===Ne)&&!ut.isReverted&&(Ui||(Ui=[]),Ui.unshift(ut),ut.revert(!0,!0)),ut!==je[ze]&&(Ue--,ze--);for(pn(Te)&&(Te=Te(D)),T=Dm(Te,f,He,L,Y(),$,se,D,Xe,le,X,Rt,A)||(p?-.001:0),pn(B)&&(B=B(D)),ui(B)&&!B.indexOf("+=")&&(~B.indexOf(" ")?B=(ui(Te)?Te.split(" ")[0]:"")+B:(V=Wl(B.substr(2),He),B=ui(Te)?Te:(A?Oe.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,T):T)+V,te=f)),I=Math.max(T,Dm(B||(te?"100% 0":Rt),te,He,L,Y()+V,Q,F,D,Xe,le,X,Rt,A))||-.001,re=I-T||(T-=.01)&&.001,V=0,ze=Ue;ze--;)ut=je[ze],Ut=ut.pin,Ut&&ut.start-ut._pinPush<=T&&!A&&ut.end>0&&(ke=ut.end-ut.start,(Ut===f&&ut.start-ut._pinPush<T||Ut===Ne)&&!na(Te)&&(V+=ke*(1-ut.progress)),Ut===p&&(J+=ke));if(T+=V,I+=V,C&&(he=Oe.utils.clamp(0,1,Oe.utils.normalize(T,I,Se))),D._pinPush=J,$&&V&&(ke={},ke[L.a]="+="+V,Ne&&(ke[L.p]="-="+Y()),Oe.set([$,Q],ke)),p)ke=mi(p),ct=L===Ft,qe=Y(),fe=parseFloat(ie(L.a))+J,!Rt&&I>1&&(st=(N?vt.scrollingElement||fi:O).style,st={style:st,value:st["overflow"+L.a.toUpperCase()]},st.style["overflow"+L.a.toUpperCase()]="scroll"),Xu(p,M,ke),E=Al(p),Ve=Yi(p,!0),xt=X&&Ur(O,ct?dn:Ft)(),g&&(ne=[g+L.os2,re+J+Wt],ne.t=M,ze=g===Et?kf(p,L)+re+J:0,ze&&ne.push(L.d,ze+Wt),fo(ne),Ne&&je.forEach(function(En){En.pin===Ne&&En.vars.pinSpacing!==!1&&(En._subPinOffset=!0)}),X&&Y(Se)),X&&(tt={top:Ve.top+(ct?qe-T:xt)+Wt,left:Ve.left+(ct?xt:qe-T)+Wt,boxSizing:"border-box",position:"fixed"},tt[ms]=tt["max"+Ao]=Math.ceil(Ve.width)+Wt,tt[gs]=tt["max"+kh]=Math.ceil(Ve.height)+Wt,tt[Kn]=tt[Kn+ga]=tt[Kn+pa]=tt[Kn+_a]=tt[Kn+ma]="0",tt[Et]=ke[Et],tt[Et+ga]=ke[Et+ga],tt[Et+pa]=ke[Et+pa],tt[Et+_a]=ke[Et+_a],tt[Et+ma]=ke[Et+ma],ce=bA(_e,tt,w),On&&Y(0)),r?(Ke=r._initted,Bu(1),r.render(r.duration(),!0,!0),xe=ie(L.a)-fe+re+J,Pe=Math.abs(re-xe)>1,X&&Pe&&ce.splice(ce.length-2,2),r.render(0,!0,!0),Ke||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Bu(0)):xe=re,st&&(st.value?st.style["overflow"+L.a.toUpperCase()]=st.value:st.style.removeProperty("overflow-"+L.a));else if(f&&Y()&&!A)for(Ve=f.parentNode;Ve&&Ve!==St;)Ve._pinOffset&&(T-=Ve._pinOffset,I-=Ve._pinOffset),Ve=Ve.parentNode;Ui&&Ui.forEach(function(En){return En.revert(!1,!0)}),D.start=T,D.end=I,Me=be=On?Se:Y(),!A&&!On&&(Me<Se&&Y(Se),D.scroll.rec=0),D.revert(!1,!0),oe&&(pe=-1,D.isActive&&Y(T+re*he),oe.restart(!0)),Jt=0,r&&W&&(r._initted||Ae)&&r.progress()!==Ae&&r.progress(Ae,!0).render(r.time(),!0,!0),(C||he!==D.progress||A)&&(r&&!W&&r.totalProgress(A&&T<-.001&&!he?Oe.utils.normalize(T,I,0):he,!0),D.progress=(Me-T)/re===he?0:he),p&&g&&(M._pinOffset=Math.round(D.progress*xe)),Le&&Le.invalidate(),u&&!On&&u(D)}},D.getVelocity=function(){return(Y()-be)/(hn()-Vl)*1e3||0},D.endAnimation=function(){Yo(D.callbackAnimation),r&&(Le?Le.progress(1):r.paused()?W||Yo(r,D.direction<0,1):Yo(r,r.reversed()))},D.labelToScroll=function(ge){return r&&r.labels&&(T||D.refresh()||T)+r.labels[ge]/r.duration()*re||0},D.getTrailing=function(ge){var De=je.indexOf(D),He=D.direction>0?je.slice(0,De).reverse():je.slice(De+1);return(ui(ge)?He.filter(function(Xe){return Xe.vars.preventOverlaps===ge}):He).filter(function(Xe){return D.direction>0?Xe.end<=T:Xe.start>=I})},D.update=function(ge,De,He){if(!(A&&!He&&!ge)){var Xe=On===!0?Se:D.scroll(),Rt=ge?0:(Xe-T)/re,C=Rt<0?0:Rt>1?1:Rt||0,V=D.progress,J,B,te,Te,Ne,Ue,ze,ke;if(De&&(be=Me,Me=A?Y():Xe,y&&(Ge=Ee,Ee=r&&!W?r.totalProgress():C)),m&&!C&&p&&!Jt&&!Ml&&ii&&T<Xe+(Xe-be)/(hn()-Vl)*m&&(C=1e-4),C!==V&&D.enabled){if(J=D.isActive=!!C&&C<1,B=!!V&&V<1,Ue=J!==B,Ne=Ue||!!C!=!!V,D.direction=C>V?1:-1,D.progress=C,Ne&&!Jt&&(te=C&&!V?0:C===1?1:V===1?2:3,W&&(Te=!Ue&&q[te+1]!=="none"&&q[te+1]||q[te],ke=r&&(Te==="complete"||Te==="reset"||Te in r))),S&&(Ue||ke)&&(ke||h||!r)&&(pn(S)?S(D):D.getTrailing(S).forEach(function(tt){return tt.endAnimation()})),W||(Le&&!Jt&&!Ml?(Le._dp._time-Le._start!==Le._time&&Le.render(Le._dp._time-Le._start),Le.resetTo?Le.resetTo("totalProgress",C,r._tTime/r._tDur):(Le.vars.totalProgress=C,Le.invalidate().restart())):r&&r.totalProgress(C,!!Jt)),p){if(ge&&g&&(M.style[g+L.os2]=ve),!X)ee(ta(fe+xe*C));else if(Ne){if(ze=!ge&&C>V&&I+1>Xe&&Xe+1>=wr(O,L),w)if(!ge&&(J||ze)){var Ve=Yi(p,!0),qe=Xe-T;Im(p,St,Ve.top+(L===Ft?qe:0)+Wt,Ve.left+(L===Ft?0:qe)+Wt)}else Im(p,M);fo(J||ze?ce:E),Pe&&C<1&&J||ee(fe+(C===1&&!ze?xe:0))}}y&&!K.tween&&!Jt&&!Ml&&oe.restart(!0),a&&(Ue||x&&C&&(C<1||!Gu))&&dc(a.targets).forEach(function(tt){return tt.classList[J||x?"add":"remove"](a.className)}),o&&!W&&!ge&&o(D),Ne&&!Jt?(W&&(ke&&(Te==="complete"?r.pause().totalProgress(1):Te==="reset"?r.restart(!0).pause():Te==="restart"?r.restart(!0):r[Te]()),o&&o(D)),(Ue||!Gu)&&(c&&Ue&&Hu(D,c),j[te]&&Hu(D,j[te]),x&&(C===1?D.kill(!1,1):j[te]=0),Ue||(te=C===1?1:3,j[te]&&Hu(D,j[te]))),v&&!J&&Math.abs(D.getVelocity())>(na(v)?v:2500)&&(Yo(D.callbackAnimation),Le?Le.progress(1):Yo(r,Te==="reverse"?1:!C,1))):W&&o&&!Jt&&o(D)}if(Ie){var ct=A?Xe/A.duration()*(A._caScrollDist||0):Xe;Re(ct+(se._isFlipped?1:0)),Ie(ct)}it&&it(-Xe/A.duration()*(A._caScrollDist||0))}},D.enable=function(ge,De){D.enabled||(D.enabled=!0,Gt(O,"resize",ia),Gt(N?vt:O,"scroll",Vs),ye&&Gt(i,"refreshInit",ye),ge!==!1&&(D.progress=he=0,Me=be=pe=Y()),De!==!1&&D.refresh())},D.getTween=function(ge){return ge&&K?K.tween:Le},D.setPositions=function(ge,De){p&&(fe+=ge-T,xe+=De-ge-re,g===Et&&D.adjustPinSpacing(De-ge-re)),D.start=T=ge,D.end=I=De,re=De-ge,D.update()},D.adjustPinSpacing=function(ge){if(ne&&ge){var De=ne.indexOf(L.d)+1;ne[De]=parseFloat(ne[De])+ge+Wt,ne[1]=parseFloat(ne[1])+ge+Wt,fo(ne)}},D.disable=function(ge,De){if(D.enabled&&(ge!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,De||Le&&Le.pause(),Se=0,ae&&(ae.uncache=1),ye&&Bt(i,"refreshInit",ye),oe&&(oe.pause(),K.tween&&K.tween.kill()&&(K.tween=0)),!N)){for(var He=je.length;He--;)if(je[He].scroller===O&&je[He]!==D)return;Bt(O,"resize",ia),Bt(O,"scroll",Vs)}},D.kill=function(ge,De){D.disable(ge,De),Le&&!De&&Le.kill(),l&&delete Bf[l];var He=je.indexOf(D);He>=0&&je.splice(He,1),He===un&&ql>0&&un--,He=0,je.forEach(function(Xe){return Xe.scroller===D.scroller&&(He=1)}),He||On||(D.scroll.rec=0),r&&(r.scrollTrigger=null,ge&&r.revert({kill:!1}),De||r.kill()),$&&[$,Q,se,F].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),xa===D&&(xa=0),p&&(ae&&(ae.uncache=1),He=0,je.forEach(function(Xe){return Xe.pin===p&&He++}),He||(ae.spacer=0)),n.onKill&&n.onKill(D)},D.enable(!1,!1),lt&&lt(D),!r||!r.add||re?D.refresh():Oe.delayedCall(.01,function(){return T||I||D.refresh()})&&(re=.01)&&(T=I=0),p&&xA()},i.register=function(n){return Xs||(Oe=n||V0(),G0()&&window.document&&i.enable(),Xs=ea),Xs},i.defaults=function(n){if(n)for(var r in n)El[r]=n[r];return El},i.disable=function(n,r){ea=0,je.forEach(function(o){return o[r?"kill":"disable"](n)}),Bt(Je,"wheel",Vs),Bt(vt,"scroll",Vs),clearInterval(bl),Bt(vt,"touchcancel",wi),Bt(St,"touchstart",wi),wl(Bt,vt,"pointerdown,touchstart,mousedown",Em),wl(Bt,vt,"pointerup,touchend,mouseup",Cm),hc.kill(),Sl(Bt);for(var s=0;s<Ze.length;s+=3)Tl(Bt,Ze[s],Ze[s+1]),Tl(Bt,Ze[s],Ze[s+2])},i.enable=function(){if(Je=window,vt=document,fi=vt.documentElement,St=vt.body,Oe&&(dc=Oe.utils.toArray,Qs=Oe.utils.clamp,Uf=Oe.core.context||wi,Bu=Oe.core.suppressOverwrites||wi,Nh=Je.history.scrollRestoration||"auto",Gf=Je.pageYOffset,Oe.core.globals("ScrollTrigger",i),St)){ea=1,fA(),It.register(Oe),i.isTouch=It.isTouch,pr=It.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Gt(Je,"wheel",Vs),F0=[Je,vt,fi,St],Oe.matchMedia?(i.matchMedia=function(l){var c=Oe.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Oe.addEventListener("matchMediaInit",function(){return Gh()}),Oe.addEventListener("matchMediaRevert",function(){return Y0()}),Oe.addEventListener("matchMedia",function(){ls(0,1),ws("matchMedia")}),Oe.matchMedia("(orientation: portrait)",function(){return Wu(),Wu})):console.warn("Requires GSAP 3.11.0 or later"),Wu(),Gt(vt,"scroll",Vs);var n=St.style,r=n.borderTopStyle,s=Oe.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Yi(St),Ft.m=Math.round(o.top+Ft.sc())||0,dn.m=Math.round(o.left+dn.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),bl=setInterval(Rm,250),Oe.delayedCall(.5,function(){return Ml=0}),Gt(vt,"touchcancel",wi),Gt(St,"touchstart",wi),wl(Gt,vt,"pointerdown,touchstart,mousedown",Em),wl(Gt,vt,"pointerup,touchend,mouseup",Cm),zf=Oe.utils.checkPrefix("transform"),$l.push(zf),Xs=hn(),hc=Oe.delayedCall(.2,ls).pause(),qs=[vt,"visibilitychange",function(){var l=Je.innerWidth,c=Je.innerHeight;vt.hidden?(wm=l,Tm=c):(wm!==l||Tm!==c)&&ia()},vt,"DOMContentLoaded",ls,Je,"load",ls,Je,"resize",ia],Sl(Gt),je.forEach(function(l){return l.enable(0,1)}),a=0;a<Ze.length;a+=3)Tl(Bt,Ze[a],Ze[a+1]),Tl(Bt,Ze[a],Ze[a+2])}},i.config=function(n){"limitCallbacks"in n&&(Gu=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(bl)||(bl=r)&&setInterval(Rm,r),"ignoreMobileResize"in n&&(U0=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Sl(Bt)||Sl(Gt,n.autoRefreshEvents||"none"),z0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=xn(n),o=Ze.indexOf(s),a=Ms(s);~o&&Ze.splice(o,a?6:2),r&&(a?Fi.unshift(Je,r,St,r,fi,r):Fi.unshift(s,r))},i.clearMatchMedia=function(n){je.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(ui(n)?xn(n):n).getBoundingClientRect(),a=o[s?ms:gs]*r||0;return s?o.right-a>0&&o.left+a<Je.innerWidth:o.bottom-a>0&&o.top+a<Je.innerHeight},i.positionInViewport=function(n,r,s){ui(n)&&(n=xn(n));var o=n.getBoundingClientRect(),a=o[s?ms:gs],l=r==null?a/2:r in pc?pc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/Je.innerWidth:(o.top+l)/Je.innerHeight},i.killAll=function(n){if(je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Ss.killAll||[];Ss={},r.forEach(function(s){return s()})}},i}();Qe.version="3.11.5";Qe.saveStyles=function(i){return i?dc(i).forEach(function(e){if(e&&e.style){var t=Dn.indexOf(e);t>=0&&Dn.splice(t,5),Dn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Oe.core.getCache(e),Uf())}}):Dn};Qe.revert=function(i,e){return Gh(!i,e)};Qe.create=function(i,e){return new Qe(i,e)};Qe.refresh=function(i){return i?ia():(Xs||Qe.register())&&ls(!0)};Qe.update=function(i){return++Ze.cache&&Qi(i===!0?2:0)};Qe.clearScrollMemory=j0;Qe.maxScroll=function(i,e){return wr(i,e?dn:Ft)};Qe.getScrollFunc=function(i,e){return Ur(xn(i),e?dn:Ft)};Qe.getById=function(i){return Bf[i]};Qe.getAll=function(){return je.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!ii};Qe.snapDirectional=Bh;Qe.addEventListener=function(i,e){var t=Ss[i]||(Ss[i]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(i,e){var t=Ss[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],p=Oe.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||p.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&p.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&pn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return pn(s)&&(s=s(),Gt(Qe,"refresh",function(){return s=e.batchMax()})),dc(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Qe.create(c))}),t};var Fm=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},qu=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(It.isTouch?" pinch-zoom":""):"none",e===fi&&i(St,t)},Pl={auto:1,scroll:1},SA=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Oe.core.getCache(s),a=hn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Pl[(l=mi(s)).overflowY]||Pl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Ms(s)&&(Pl[(l=mi(s)).overflowY]||Pl[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Z0=function(e,t,n,r){return It.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&SA,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Gt(vt,It.eventTypes[0],zm,!1,!0)},onDisable:function(){return Bt(vt,It.eventTypes[0],zm,!0)}})},wA=/(input|label|select|textarea)/i,Nm,zm=function(e){var t=wA.test(e.target.tagName);(t||Nm)&&(e._gsapAllow=!0,Nm=t)},TA=function(e){Hl(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=xn(e.target)||fi,u=Oe.core.globals().ScrollSmoother,h=u&&u.get(),f=pr&&(e.content&&xn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=Ur(c,Ft),g=Ur(c,dn),d=1,m=(It.isTouch&&Je.visualViewport?Je.visualViewport.scale*Je.visualViewport.width:Je.outerWidth)/Je.innerWidth,_=0,b=pn(r)?function(){return r(a)}:function(){return r||2.8},x,y,w=Z0(c,e.type,!0,s),P=function(){return y=!1},A=wi,v=wi,S=function(){l=wr(c,Ft),v=Qs(pr?1:0,l),n&&(A=Qs(0,wr(c,dn))),x=_s},L=function(){f._gsap.y=ta(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},W=function(){if(y){requestAnimationFrame(P);var G=ta(a.deltaY/2),le=v(p.v-G);if(f&&le!==p.v+p.offset){p.offset=le-p.v;var D=ta((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",p.cacheID=Ze.cache,Qi()}return!0}p.offset&&L(),y=!0},O,U,N,X,j=function(){S(),O.isActive()&&O.vars.scrollY>l&&(p()>l?O.progress(1)&&p(l):O.resetTo("scrollY",l))};return f&&Oe.set(f,{y:"+=0"}),e.ignoreCheck=function(q){return pr&&q.type==="touchmove"&&W()||d>1.05&&q.type!=="touchstart"||a.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){y=!1;var q=d;d=ta((Je.visualViewport&&Je.visualViewport.scale||1)/m),O.pause(),q!==d&&qu(c,d>1.01?!0:n?!1:"x"),U=g(),N=p(),S(),x=_s},e.onRelease=e.onGestureStart=function(q,G){if(p.offset&&L(),!G)X.restart(!0);else{Ze.cache++;var le=b(),D,ye;n&&(D=g(),ye=D+le*.05*-q.velocityX/.227,le*=Fm(g,D,ye,wr(c,dn)),O.vars.scrollX=A(ye)),D=p(),ye=D+le*.05*-q.velocityY/.227,le*=Fm(p,D,ye,wr(c,Ft)),O.vars.scrollY=v(ye),O.invalidate().duration(le).play(.01),(pr&&O.vars.scrollY>=l||D>=l-1)&&Oe.to({},{onUpdate:j,duration:le})}o&&o(q)},e.onWheel=function(){O._ts&&O.pause(),hn()-_>1e3&&(x=0,_=hn())},e.onChange=function(q,G,le,D,ye){if(_s!==x&&S(),G&&n&&g(A(D[2]===G?U+(q.startX-q.x):g()+G-D[1])),le){p.offset&&L();var H=ye[2]===le,ue=H?N+q.startY-q.y:p()+le-ye[1],pe=v(ue);H&&ue!==pe&&(N+=pe-ue),p(pe)}(le||G)&&Qi()},e.onEnable=function(){qu(c,n?!1:"x"),Qe.addEventListener("refresh",j),Gt(Je,"resize",j),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){qu(c,!0),Bt(Je,"resize",j),Qe.removeEventListener("refresh",j),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new It(e),a.iOS=pr,pr&&!p()&&p(1),pr&&Oe.ticker.add(wi),X=a._dc,O=Oe.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:K0(p,p(),function(){return O.pause()})},onUpdate:Qi,onComplete:X.vars.onComplete}),a};Qe.sort=function(i){return je.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(i){return new It(i)};Qe.normalizeScroll=function(i){if(typeof i>"u")return Ln;if(i===!0&&Ln)return Ln.enable();if(i===!1)return Ln&&Ln.kill();var e=i instanceof It?i:TA(i);return Ln&&Ln.target===e.target&&Ln.kill(),Ms(e.target)&&(Ln=e),e};Qe.core={_getVelocityProp:Nf,_inputObserver:Z0,_scrollers:Ze,_proxies:Fi,bridge:{ss:function(){ii||ws("scrollStart"),ii=hn()},ref:function(){return Jt}}};V0()&&Oe.registerPlugin(Qe);const jl="/portfolio/assets/rotating_gallery-d31b857b.jpg",$s="/portfolio/assets/seamless_color_ball-2a2861a9.jpg",EA="/portfolio/assets/particle_wave-c99d3ee3.jpg",CA="/portfolio/assets/target_game-2d33d328.jpg",AA="/portfolio/assets/todo_list-3fbfbd84.jpg",PA=i=>(pg("data-v-db4596b0"),i=i(),mg(),i),RA={class:"contents"},LA={class:"list"},DA={class:"work-img-wrap is-img-wrap"},IA=["src"],OA=PA(()=>dt("div",{class:"split-str-wrap"},[dt("span",{class:"split-str is-hover-text"},"V"),dt("span",{class:"split-str is-hover-text"},"i"),dt("span",{class:"split-str is-hover-text"},"e"),dt("span",{class:"split-str is-hover-text"},"w"),dt("span",{class:"split-str is-hover-text"}," "),dt("span",{class:"split-str is-hover-text"},"W"),dt("span",{class:"split-str is-hover-text"},"o"),dt("span",{class:"split-str is-hover-text"},"r"),dt("span",{class:"split-str is-hover-text"},"k")],-1)),FA={class:"tecs-list"},NA={class:"tec is-tec"},zA=Do({__name:"Contents",setup(i){const e=[{img:$s,link:"/seamless-color-ball",tecs:["Vue.js","Vue Router","Three.js"]},{img:jl,link:"/rotationg-gallery",tecs:["Vue.js","Three.js"]},{img:EA,link:"/particle-wave",tecs:["Vue.js","Three.js"]},{img:CA,link:"/target-game",tecs:["Vue.js","Vue Router","Vuex"]},{img:AA,link:"/todo-list",tecs:["Vue.js"]},{img:$s,link:"",tecs:["Vue.js","Vue Router","Three.js"]},{img:jl,link:"",tecs:["Vue.js","Three.js"]},{img:$s,link:"",tecs:["Vue.js","Three.js"]},{img:$s,link:"",tecs:["Vue.js","Vue Router","Three.js"]},{img:jl,link:"",tecs:["Vue.js","Three.js"]},{img:$s,link:"",tecs:["Vue.js","Three.js"]}],t=ih(),n=[],r=a=>{navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)||(n[a]=Gl.to(`li:nth-child(${a+1}) .is-hover-text`,{y:5,opacity:1,duration:.2,stagger:.02}))},s=a=>{navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)||n[a].reverse()},o=()=>{Gl.registerPlugin(Qe),t.value.forEach(l=>{const c=l.querySelectorAll(".is-img-wrap")[0],u=l.querySelectorAll(".is-tec"),h=Gl.timeline({scrollTrigger:{trigger:l,start:"top 80%",toggleActions:"play none none none"}});h.fromTo(c,{opacity:0,scaleY:0},{opacity:1,scaleY:1,duration:.3}),h.fromTo(u,{opacity:0},{opacity:1,duration:.5,stagger:.2})})};return Tc(()=>{o()}),wb((a,l)=>{console.log("leave")}),(a,l)=>{const c=Tg("router-link");return Un(),_i("div",RA,[dt("ul",LA,[(Un(),_i($n,null,nd(e,(u,h)=>dt("li",{class:"item",ref_for:!0,ref_key:"item",ref:t},[qt(c,{to:u.link,class:"work-link",onMouseenter:f=>r(h),onMouseleave:f=>s(h)},{default:Ql(()=>[dt("div",DA,[dt("img",{class:"work-img",src:u.img,alt:""},null,8,IA),OA]),dt("ul",FA,[(Un(!0),_i($n,null,nd(u.tecs,f=>(Un(),_i("li",NA,ox(f),1))),256))])]),_:2},1032,["to","onMouseenter","onMouseleave"])],512)),64))])])}}});const UA=rr(zA,[["__scopeId","data-v-db4596b0"]]),kA=`void main() {
  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`,BA=`uniform float uTime;

void main() {
  vec3 pos = position;
  pos.y += (sin(uv.x * 50.0 + uTime) + cos(uv.x * 30.0 + uTime * 0.5)) * 10.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

}`,GA={class:"wrap"},VA=Do({__name:"Top",setup(i){const e=ih();let t=innerWidth,n=innerHeight;const r=new xh({antialias:!0});r.setSize(t,n),r.setPixelRatio(devicePixelRatio);const o=500/2*(Math.PI/180);let a=n/2/Math.tan(o);const l=new jn(75,t/n,.1,1e3);l.position.set(0,0,7),l.position.z=a;const c=new UE,u=new Dc(344,1,256,256),h={uTime:{value:0}},f=new Fr({vertexShader:BA,fragmentShader:kA,uniforms:h}),p=new ji(u,f);c.add(p);const g=new Oo(30,30,30),d=new GE(g),m=5,_=new Array(m),b=new C_({color:16777215}),x=[],y=[-80,90,-30,90,-100],w=[0,70,140,200,220],P=[70,20,-20,50,40];for(let S=0;S<m;S++)_[S]=new BE(d,b),_[S].position.set(y[S],-S*w[S]-n*.15,P[S]),_[S].rotation.x=Math.random()*2,_[S].rotation.y=Math.random()*2,_[S].rotation.z=Math.random()*2,x[S]=_[S].position.y,c.add(_[S]);window.addEventListener("resize",()=>{t=innerWidth,n=innerHeight,r.setSize(t,n),a=n/2/Math.tan(o),l.position.z=a,l.aspect=t/n,l.updateProjectionMatrix()});for(let S=0;S<m;S++)_[S].position.y=window.pageYOffset+x[S];window.addEventListener("scroll",()=>{for(let S=0;S<m;S++)_[S].position.y=(window.pageYOffset+x[S]-S*w[S]-n*.9)*.15,p.position.y=window.pageYOffset*.3});const A=new VE,v=()=>{requestAnimationFrame(()=>{v()}),r.render(c,l),A.getElapsedTime();for(let S=0;S<m;S++)_[S].rotation.y+=.005;h.uTime.value+=.1};return Tc(()=>{e.value.appendChild(r.domElement),v()}),(S,L)=>(Un(),_i("div",GA,[dt("div",{ref_key:"canvas",ref:e,class:"canvas"},null,512),qt(jE),qt(UA)]))}});const HA=rr(VA,[["__scopeId","data-v-7a93dca3"]]),WA={class:"wrap"},XA={class:"inner"},qA=["src"],$A=kg('<div class="link-wrap" data-v-797ff506><p data-v-797ff506><a href="https://yoshizawa888.github.io/rotating-gallery/" target="_blank" data-v-797ff506>View Site</a></p><p data-v-797ff506><a href="https://github.com/yoshizawa888/rotating-gallery" target="_blank" data-v-797ff506>GitHub</a></p></div><div class="text-wrap" data-v-797ff506><p data-v-797ff506>このサイトについて</p><p data-v-797ff506> three.jsを触り始めて何を作ろうかと考えた時に、どこかで見たような複数の画像が回転している物を作ってみたいと思いました。<br data-v-797ff506> 参考にしたくて探してみたのですが、同じ様な物は見つけられませんでしたが...<br data-v-797ff506> しかし、オブジェクトが10個円状に並んでいるものがあったのでそれを基盤に作り始めてみました。<br data-v-797ff506> どの様にしたら元のオブジェクトが画像にできるのか、画像を常に外側を向かせて回転させるにはなど、ただ画像を回転させるだけ色々課題がありました。<br data-v-797ff506> ありましたが、ここまでは概ねスムーズに実装できました。<br data-v-797ff506> 思いの外早く完成してしまったため、もう少し手を加えようと考えました。<br data-v-797ff506> そこで、画像をクリックできる様にできたら面白そうと思い、その機能も実装してみました。<br data-v-797ff506> クリックしているオブジェクトを取得方法を探したのですが、マウスオーバーしているオブジェクトの取得方法ばかり出てきたのでその方法をクリックイベントに直すところから始まりました。<br data-v-797ff506> うまく動作してもクリックが残ってしまっていたり、画像を前に出した後空いたところにうまく戻る様にする処理など色々と試行錯誤が必要でした。<br data-v-797ff506> また、諸々を実装し終わった後にアニメーションをGSAPで実装してみたいと思いましたが、回転させる都合上サインコサインを使っておりその辺りがイマイチ上手くいかなかったので今回は全てJSでアニメーションさせています。<br data-v-797ff506> 機会があればGSAPでサインコサインを実装してみたいです。<br data-v-797ff506> この作品を作るにあたり3Dを扱う上でサインコサインの重要性が理解できました。<br data-v-797ff506> 数学の知識はほとんど忘れてしまっていましたが、この作品の場合はサインはX軸、コサインはZ軸くらいの認識で良かったのは幸いでした。<br data-v-797ff506> 使っている画像に関して正直なんでも良かったのですが、せっかくなら好きなものをと思いポケモンにしてみました。<br data-v-797ff506> 画像の形や種類が多くて非常に使い勝手も良かったです。<br data-v-797ff506> 最後に2段にしてそれでも隙間がとても空いていたのでテキストとパーティクルを散らせてみました。<br data-v-797ff506> 拙いコードと拙すぎるデザインですが、ぜひ見てみてください。 </p></div>',2),YA=Do({__name:"RotationgGallery",setup(i){return(e,t)=>(Un(),_i("div",WA,[dt("div",XA,[dt("img",{class:"main-img",src:Er(jl),alt:""},null,8,qA),$A])]))}});const jA=rr(YA,[["__scopeId","data-v-797ff506"]]),KA={class:"wrap"},ZA={class:"inner"},JA=["src"],QA=kg('<div class="link-wrap" data-v-35e4032c><p data-v-35e4032c><a href="https://yoshizawa888.github.io/seamless-color-ball/" target="_blank" data-v-35e4032c>View Site</a></p><p data-v-35e4032c><a href="https://github.com/yoshizawa888/seamless-color-ball" target="_blank" data-v-35e4032c>GitHub</a></p></div><div class="text-wrap" data-v-35e4032c><p data-v-35e4032c>このサイトについて</p><p data-v-35e4032c> three.jsを触り始めて何を作ろうかと考えた時に、どこかで見たような複数の画像が回転している物を作ってみたいと思いました。<br data-v-35e4032c> 参考にしたくて探してみたのですが、同じ様な物は見つけられませんでしたが...<br data-v-35e4032c> しかし、オブジェクトが10個円状に並んでいるものがあったのでそれを基盤に作り始めてみました。<br data-v-35e4032c> どの様にしたら元のオブジェクトが画像にできるのか、画像を常に外側を向かせて回転させるにはなど、ただ画像を回転させるだけ色々課題がありました。<br data-v-35e4032c> ありましたが、ここまでは概ねスムーズに実装できました。<br data-v-35e4032c> 思いの外早く完成してしまったため、もう少し手を加えようと考えました。<br data-v-35e4032c> そこで、画像をクリックできる様にできたら面白そうと思い、その機能も実装してみました。<br data-v-35e4032c> クリックしているオブジェクトを取得方法を探したのですが、マウスオーバーしているオブジェクトの取得方法ばかり出てきたのでその方法をクリックイベントに直すところから始まりました。<br data-v-35e4032c> うまく動作してもクリックが残ってしまっていたり、画像を前に出した後空いたところにうまく戻る様にする処理など色々と試行錯誤が必要でした。<br data-v-35e4032c> また、諸々を実装し終わった後にアニメーションをGSAPで実装してみたいと思いましたが、回転させる都合上サインコサインを使っておりその辺りがイマイチうまくできなかったので今回は全てJSでアニメーションさせています。<br data-v-35e4032c> 機会があればGSAPでサインコサインを実装してみたいです。<br data-v-35e4032c> この作品を作るにあたり3Dを扱う上でサインコサインの重要性が理解できました。<br data-v-35e4032c> 数学の知識はほとんど忘れてしまっていましたが、この作品の場合はサインはX軸、コサインはZ軸くらいの認識で良かったのは幸いでした。<br data-v-35e4032c> 使っている画像に関して正直なんでも良かったのですが、せっかくなら好きなものをと思いポケモンにしてみました。<br data-v-35e4032c> 画像の形や種類が多くて非常に使い勝手も良かったです。<br data-v-35e4032c> 最後に2段にしてそれでも隙間がとても空いていたのでテキストとパーティクルを散らせてみました。<br data-v-35e4032c> 拙いコードと拙すぎるデザインですが、ぜひ見てみてください。 </p></div>',2),e3=Do({__name:"SeamlessColorBall",setup(i){return(e,t)=>(Un(),_i("div",KA,[dt("div",ZA,[dt("img",{class:"main-img",src:Er($s),alt:""},null,8,JA),QA])]))}});const t3=rr(e3,[["__scopeId","data-v-35e4032c"]]),n3={};function i3(i,e){return Un(),_i("div",null," ウェーブ ")}const r3=rr(n3,[["render",i3]]),s3={};function o3(i,e){return Un(),_i("div",null," ターゲットゲーム ")}const a3=rr(s3,[["render",o3]]),l3={};function c3(i,e){return Un(),_i("div",null," トードゥー ")}const u3=rr(l3,[["render",c3]]),f3=[{path:"/",component:HA},{path:"/rotationg-gallery",component:jA},{path:"/seamless-color-ball",component:t3},{path:"/particle-wave",component:r3},{path:"/target-game",component:a3},{path:"/todo-list",component:u3}],h3=Db({history:$y("/portfolio/"),routes:f3}),J0=Ty(Py);J0.use(h3);J0.mount("#app");
