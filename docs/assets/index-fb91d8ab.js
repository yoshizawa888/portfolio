(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function lf(r,e){const t=Object.create(null),n=r.split(",");for(let i=0;i<n.length;i++)t[n[i]]=!0;return e?i=>!!t[i.toLowerCase()]:i=>!!t[i]}function cf(r){if(We(r)){const e={};for(let t=0;t<r.length;t++){const n=r[t],i=It(n)?E_(n):cf(n);if(i)for(const s in i)e[s]=i[s]}return e}else{if(It(r))return r;if(yt(r))return r}}const S_=/;(?![^(]*\))/g,w_=/:([^]+)/,T_=/\/\*.*?\*\//gs;function E_(r){const e={};return r.replace(T_,"").split(S_).forEach(t=>{if(t){const n=t.split(w_);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function uf(r){let e="";if(It(r))e=r;else if(We(r))for(let t=0;t<r.length;t++){const n=uf(r[t]);n&&(e+=n+" ")}else if(yt(r))for(const t in r)r[t]&&(e+=t+" ");return e.trim()}const C_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",A_=lf(C_);function Lp(r){return!!r||r===""}const P_=r=>It(r)?r:r==null?"":We(r)||yt(r)&&(r.toString===Fp||!$e(r.toString))?JSON.stringify(r,Dp,2):String(r),Dp=(r,e)=>e&&e.__v_isRef?Dp(r,e.value):Bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,i])=>(t[`${n} =>`]=i,t),{})}:Rp(e)?{[`Set(${e.size})`]:[...e.values()]}:yt(e)&&!We(e)&&!Op(e)?String(e):e,_t={},Us=[],di=()=>{},L_=()=>!1,D_=/^on[^a-z]/,Vl=r=>D_.test(r),ff=r=>r.startsWith("onUpdate:"),en=Object.assign,hf=(r,e)=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)},R_=Object.prototype.hasOwnProperty,nt=(r,e)=>R_.call(r,e),We=Array.isArray,Bs=r=>Hl(r)==="[object Map]",Rp=r=>Hl(r)==="[object Set]",$e=r=>typeof r=="function",It=r=>typeof r=="string",df=r=>typeof r=="symbol",yt=r=>r!==null&&typeof r=="object",Ip=r=>yt(r)&&$e(r.then)&&$e(r.catch),Fp=Object.prototype.toString,Hl=r=>Fp.call(r),I_=r=>Hl(r).slice(8,-1),Op=r=>Hl(r)==="[object Object]",pf=r=>It(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,al=lf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wl=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},F_=/-(\w)/g,Ks=Wl(r=>r.replace(F_,(e,t)=>t?t.toUpperCase():"")),O_=/\B([A-Z])/g,fo=Wl(r=>r.replace(O_,"-$1").toLowerCase()),Np=Wl(r=>r.charAt(0).toUpperCase()+r.slice(1)),hc=Wl(r=>r?`on${Np(r)}`:""),Zo=(r,e)=>!Object.is(r,e),dc=(r,e)=>{for(let t=0;t<r.length;t++)r[t](e)},Tl=(r,e,t)=>{Object.defineProperty(r,e,{configurable:!0,enumerable:!1,value:t})},N_=r=>{const e=parseFloat(r);return isNaN(e)?r:e};let sh;const z_=()=>sh||(sh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let ri;class U_{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ri,!e&&ri&&(this.index=(ri.scopes||(ri.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=ri;try{return ri=this,e()}finally{ri=t}}}on(){ri=this}off(){ri=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function B_(r,e=ri){e&&e.active&&e.effects.push(r)}function k_(){return ri}const mf=r=>{const e=new Set(r);return e.w=0,e.n=0,e},zp=r=>(r.w&xr)>0,Up=r=>(r.n&xr)>0,G_=({deps:r})=>{if(r.length)for(let e=0;e<r.length;e++)r[e].w|=xr},V_=r=>{const{deps:e}=r;if(e.length){let t=0;for(let n=0;n<e.length;n++){const i=e[n];zp(i)&&!Up(i)?i.delete(r):e[t++]=i,i.w&=~xr,i.n&=~xr}e.length=t}},mu=new WeakMap;let Po=0,xr=1;const gu=30;let ai;const jr=Symbol(""),_u=Symbol("");class gf{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,B_(this,n)}run(){if(!this.active)return this.fn();let e=ai,t=hr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=ai,ai=this,hr=!0,xr=1<<++Po,Po<=gu?G_(this):oh(this),this.fn()}finally{Po<=gu&&V_(this),xr=1<<--Po,ai=this.parent,hr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ai===this?this.deferStop=!0:this.active&&(oh(this),this.onStop&&this.onStop(),this.active=!1)}}function oh(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}let hr=!0;const Bp=[];function ho(){Bp.push(hr),hr=!1}function po(){const r=Bp.pop();hr=r===void 0?!0:r}function bn(r,e,t){if(hr&&ai){let n=mu.get(r);n||mu.set(r,n=new Map);let i=n.get(t);i||n.set(t,i=mf()),kp(i)}}function kp(r,e){let t=!1;Po<=gu?Up(r)||(r.n|=xr,t=!zp(r)):t=!r.has(ai),t&&(r.add(ai),ai.deps.push(r))}function qi(r,e,t,n,i,s){const a=mu.get(r);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&We(r)){const l=Number(n);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":We(r)?pf(t)&&o.push(a.get("length")):(o.push(a.get(jr)),Bs(r)&&o.push(a.get(_u)));break;case"delete":We(r)||(o.push(a.get(jr)),Bs(r)&&o.push(a.get(_u)));break;case"set":Bs(r)&&o.push(a.get(jr));break}if(o.length===1)o[0]&&xu(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);xu(mf(l))}}function xu(r,e){const t=We(r)?r:[...r];for(const n of t)n.computed&&ah(n);for(const n of t)n.computed||ah(n)}function ah(r,e){(r!==ai||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}const H_=lf("__proto__,__v_isRef,__isVue"),Gp=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(df)),W_=_f(),X_=_f(!1,!0),q_=_f(!0),lh=Y_();function Y_(){const r={};return["includes","indexOf","lastIndexOf"].forEach(e=>{r[e]=function(...t){const n=rt(this);for(let s=0,a=this.length;s<a;s++)bn(n,"get",s+"");const i=n[e](...t);return i===-1||i===!1?n[e](...t.map(rt)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{r[e]=function(...t){ho();const n=rt(this)[e].apply(this,t);return po(),n}}),r}function $_(r){const e=rt(this);return bn(e,"has",r),e.hasOwnProperty(r)}function _f(r=!1,e=!1){return function(n,i,s){if(i==="__v_isReactive")return!r;if(i==="__v_isReadonly")return r;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&s===(r?e?u0:qp:e?Xp:Wp).get(n))return n;const a=We(n);if(!r){if(a&&nt(lh,i))return Reflect.get(lh,i,s);if(i==="hasOwnProperty")return $_}const o=Reflect.get(n,i,s);return(df(i)?Gp.has(i):H_(i))||(r||bn(n,"get",i),e)?o:Zt(o)?a&&pf(i)?o:o.value:yt(o)?r?Yp(o):yf(o):o}}const j_=Vp(),K_=Vp(!0);function Vp(r=!1){return function(t,n,i,s){let a=t[n];if(Zs(a)&&Zt(a)&&!Zt(i))return!1;if(!r&&(!El(i)&&!Zs(i)&&(a=rt(a),i=rt(i)),!We(t)&&Zt(a)&&!Zt(i)))return a.value=i,!0;const o=We(t)&&pf(n)?Number(n)<t.length:nt(t,n),l=Reflect.set(t,n,i,s);return t===rt(s)&&(o?Zo(i,a)&&qi(t,"set",n,i):qi(t,"add",n,i)),l}}function Z_(r,e){const t=nt(r,e);r[e];const n=Reflect.deleteProperty(r,e);return n&&t&&qi(r,"delete",e,void 0),n}function J_(r,e){const t=Reflect.has(r,e);return(!df(e)||!Gp.has(e))&&bn(r,"has",e),t}function Q_(r){return bn(r,"iterate",We(r)?"length":jr),Reflect.ownKeys(r)}const Hp={get:W_,set:j_,deleteProperty:Z_,has:J_,ownKeys:Q_},e0={get:q_,set(r,e){return!0},deleteProperty(r,e){return!0}},t0=en({},Hp,{get:X_,set:K_}),xf=r=>r,Xl=r=>Reflect.getPrototypeOf(r);function xa(r,e,t=!1,n=!1){r=r.__v_raw;const i=rt(r),s=rt(e);t||(e!==s&&bn(i,"get",e),bn(i,"get",s));const{has:a}=Xl(i),o=n?xf:t?Mf:Jo;if(a.call(i,e))return o(r.get(e));if(a.call(i,s))return o(r.get(s));r!==i&&r.get(e)}function va(r,e=!1){const t=this.__v_raw,n=rt(t),i=rt(r);return e||(r!==i&&bn(n,"has",r),bn(n,"has",i)),r===i?t.has(r):t.has(r)||t.has(i)}function ya(r,e=!1){return r=r.__v_raw,!e&&bn(rt(r),"iterate",jr),Reflect.get(r,"size",r)}function ch(r){r=rt(r);const e=rt(this);return Xl(e).has.call(e,r)||(e.add(r),qi(e,"add",r,r)),this}function uh(r,e){e=rt(e);const t=rt(this),{has:n,get:i}=Xl(t);let s=n.call(t,r);s||(r=rt(r),s=n.call(t,r));const a=i.call(t,r);return t.set(r,e),s?Zo(e,a)&&qi(t,"set",r,e):qi(t,"add",r,e),this}function fh(r){const e=rt(this),{has:t,get:n}=Xl(e);let i=t.call(e,r);i||(r=rt(r),i=t.call(e,r)),n&&n.call(e,r);const s=e.delete(r);return i&&qi(e,"delete",r,void 0),s}function hh(){const r=rt(this),e=r.size!==0,t=r.clear();return e&&qi(r,"clear",void 0,void 0),t}function ba(r,e){return function(n,i){const s=this,a=s.__v_raw,o=rt(a),l=e?xf:r?Mf:Jo;return!r&&bn(o,"iterate",jr),a.forEach((c,u)=>n.call(i,l(c),l(u),s))}}function Ma(r,e,t){return function(...n){const i=this.__v_raw,s=rt(i),a=Bs(s),o=r==="entries"||r===Symbol.iterator&&a,l=r==="keys"&&a,c=i[r](...n),u=t?xf:e?Mf:Jo;return!e&&bn(s,"iterate",l?_u:jr),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:o?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function Zi(r){return function(...e){return r==="delete"?!1:this}}function n0(){const r={get(s){return xa(this,s)},get size(){return ya(this)},has:va,add:ch,set:uh,delete:fh,clear:hh,forEach:ba(!1,!1)},e={get(s){return xa(this,s,!1,!0)},get size(){return ya(this)},has:va,add:ch,set:uh,delete:fh,clear:hh,forEach:ba(!1,!0)},t={get(s){return xa(this,s,!0)},get size(){return ya(this,!0)},has(s){return va.call(this,s,!0)},add:Zi("add"),set:Zi("set"),delete:Zi("delete"),clear:Zi("clear"),forEach:ba(!0,!1)},n={get(s){return xa(this,s,!0,!0)},get size(){return ya(this,!0)},has(s){return va.call(this,s,!0)},add:Zi("add"),set:Zi("set"),delete:Zi("delete"),clear:Zi("clear"),forEach:ba(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{r[s]=Ma(s,!1,!1),t[s]=Ma(s,!0,!1),e[s]=Ma(s,!1,!0),n[s]=Ma(s,!0,!0)}),[r,t,e,n]}const[i0,r0,s0,o0]=n0();function vf(r,e){const t=e?r?o0:s0:r?r0:i0;return(n,i,s)=>i==="__v_isReactive"?!r:i==="__v_isReadonly"?r:i==="__v_raw"?n:Reflect.get(nt(t,i)&&i in n?t:n,i,s)}const a0={get:vf(!1,!1)},l0={get:vf(!1,!0)},c0={get:vf(!0,!1)},Wp=new WeakMap,Xp=new WeakMap,qp=new WeakMap,u0=new WeakMap;function f0(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function h0(r){return r.__v_skip||!Object.isExtensible(r)?0:f0(I_(r))}function yf(r){return Zs(r)?r:bf(r,!1,Hp,a0,Wp)}function d0(r){return bf(r,!1,t0,l0,Xp)}function Yp(r){return bf(r,!0,e0,c0,qp)}function bf(r,e,t,n,i){if(!yt(r)||r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=i.get(r);if(s)return s;const a=h0(r);if(a===0)return r;const o=new Proxy(r,a===2?n:t);return i.set(r,o),o}function ks(r){return Zs(r)?ks(r.__v_raw):!!(r&&r.__v_isReactive)}function Zs(r){return!!(r&&r.__v_isReadonly)}function El(r){return!!(r&&r.__v_isShallow)}function $p(r){return ks(r)||Zs(r)}function rt(r){const e=r&&r.__v_raw;return e?rt(e):r}function jp(r){return Tl(r,"__v_skip",!0),r}const Jo=r=>yt(r)?yf(r):r,Mf=r=>yt(r)?Yp(r):r;function Kp(r){hr&&ai&&(r=rt(r),kp(r.dep||(r.dep=mf())))}function Zp(r,e){r=rt(r);const t=r.dep;t&&xu(t)}function Zt(r){return!!(r&&r.__v_isRef===!0)}function vu(r){return p0(r,!1)}function p0(r,e){return Zt(r)?r:new m0(r,e)}class m0{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:rt(e),this._value=t?e:Jo(e)}get value(){return Kp(this),this._value}set value(e){const t=this.__v_isShallow||El(e)||Zs(e);e=t?e:rt(e),Zo(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Jo(e),Zp(this))}}function g0(r){return Zt(r)?r.value:r}const _0={get:(r,e,t)=>g0(Reflect.get(r,e,t)),set:(r,e,t,n)=>{const i=r[e];return Zt(i)&&!Zt(t)?(i.value=t,!0):Reflect.set(r,e,t,n)}};function Jp(r){return ks(r)?r:new Proxy(r,_0)}var Qp;class x0{constructor(e,t,n,i){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Qp]=!1,this._dirty=!0,this.effect=new gf(e,()=>{this._dirty||(this._dirty=!0,Zp(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=n}get value(){const e=rt(this);return Kp(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Qp="__v_isReadonly";function v0(r,e,t=!1){let n,i;const s=$e(r);return s?(n=r,i=di):(n=r.get,i=r.set),new x0(n,i,s||!i,t)}function dr(r,e,t,n){let i;try{i=n?r(...n):r()}catch(s){ql(s,e,t)}return i}function Zn(r,e,t,n){if($e(r)){const s=dr(r,e,t,n);return s&&Ip(s)&&s.catch(a=>{ql(a,e,t)}),s}const i=[];for(let s=0;s<r.length;s++)i.push(Zn(r[s],e,t,n));return i}function ql(r,e,t,n=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](r,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){dr(l,null,10,[r,a,o]);return}}y0(r,t,i,n)}function y0(r,e,t,n=!0){console.error(r)}let Qo=!1,yu=!1;const jt=[];let Mi=0;const Gs=[];let zi=null,kr=0;const em=Promise.resolve();let Sf=null;function b0(r){const e=Sf||em;return r?e.then(this?r.bind(this):r):e}function M0(r){let e=Mi+1,t=jt.length;for(;e<t;){const n=e+t>>>1;ea(jt[n])<r?e=n+1:t=n}return e}function wf(r){(!jt.length||!jt.includes(r,Qo&&r.allowRecurse?Mi+1:Mi))&&(r.id==null?jt.push(r):jt.splice(M0(r.id),0,r),tm())}function tm(){!Qo&&!yu&&(yu=!0,Sf=em.then(im))}function S0(r){const e=jt.indexOf(r);e>Mi&&jt.splice(e,1)}function w0(r){We(r)?Gs.push(...r):(!zi||!zi.includes(r,r.allowRecurse?kr+1:kr))&&Gs.push(r),tm()}function dh(r,e=Qo?Mi+1:0){for(;e<jt.length;e++){const t=jt[e];t&&t.pre&&(jt.splice(e,1),e--,t())}}function nm(r){if(Gs.length){const e=[...new Set(Gs)];if(Gs.length=0,zi){zi.push(...e);return}for(zi=e,zi.sort((t,n)=>ea(t)-ea(n)),kr=0;kr<zi.length;kr++)zi[kr]();zi=null,kr=0}}const ea=r=>r.id==null?1/0:r.id,T0=(r,e)=>{const t=ea(r)-ea(e);if(t===0){if(r.pre&&!e.pre)return-1;if(e.pre&&!r.pre)return 1}return t};function im(r){yu=!1,Qo=!0,jt.sort(T0);const e=di;try{for(Mi=0;Mi<jt.length;Mi++){const t=jt[Mi];t&&t.active!==!1&&dr(t,null,14)}}finally{Mi=0,jt.length=0,nm(),Qo=!1,Sf=null,(jt.length||Gs.length)&&im()}}function E0(r,e,...t){if(r.isUnmounted)return;const n=r.vnode.props||_t;let i=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in n){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:h,trim:f}=n[u]||_t;f&&(i=t.map(p=>It(p)?p.trim():p)),h&&(i=t.map(N_))}let o,l=n[o=hc(e)]||n[o=hc(Ks(e))];!l&&s&&(l=n[o=hc(fo(e))]),l&&Zn(l,r,6,i);const c=n[o+"Once"];if(c){if(!r.emitted)r.emitted={};else if(r.emitted[o])return;r.emitted[o]=!0,Zn(c,r,6,i)}}function rm(r,e,t=!1){const n=e.emitsCache,i=n.get(r);if(i!==void 0)return i;const s=r.emits;let a={},o=!1;if(!$e(r)){const l=c=>{const u=rm(c,e,!0);u&&(o=!0,en(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),r.extends&&l(r.extends),r.mixins&&r.mixins.forEach(l)}return!s&&!o?(yt(r)&&n.set(r,null),null):(We(s)?s.forEach(l=>a[l]=null):en(a,s),yt(r)&&n.set(r,a),a)}function Yl(r,e){return!r||!Vl(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(r,e[0].toLowerCase()+e.slice(1))||nt(r,fo(e))||nt(r,e))}let fi=null,$l=null;function Cl(r){const e=fi;return fi=r,$l=r&&r.type.__scopeId||null,e}function C0(r){$l=r}function A0(){$l=null}function P0(r,e=fi,t){if(!e||r._n)return r;const n=(...i)=>{n._d&&Sh(-1);const s=Cl(e);let a;try{a=r(...i)}finally{Cl(s),n._d&&Sh(1)}return a};return n._n=!0,n._c=!0,n._d=!0,n}function pc(r){const{type:e,vnode:t,proxy:n,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:d}=r;let m,_;const S=Cl(r);try{if(t.shapeFlag&4){const y=i||n;m=yi(u.call(y,y,h,s,p,f,g)),_=l}else{const y=e;m=yi(y.length>1?y(s,{attrs:l,slots:o,emit:c}):y(s,null)),_=e.props?l:L0(l)}}catch(y){Bo.length=0,ql(y,r,1),m=pi(Hi)}let x=m;if(_&&d!==!1){const y=Object.keys(_),{shapeFlag:w}=x;y.length&&w&7&&(a&&y.some(ff)&&(_=D0(_,a)),x=vr(x,_))}return t.dirs&&(x=vr(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),m=x,Cl(S),m}const L0=r=>{let e;for(const t in r)(t==="class"||t==="style"||Vl(t))&&((e||(e={}))[t]=r[t]);return e},D0=(r,e)=>{const t={};for(const n in r)(!ff(n)||!(n.slice(9)in e))&&(t[n]=r[n]);return t};function R0(r,e,t){const{props:n,children:i,component:s}=r,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?ph(n,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(a[f]!==n[f]&&!Yl(c,f))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:n===a?!1:n?a?ph(n,a,c):!0:!!a;return!1}function ph(r,e,t){const n=Object.keys(e);if(n.length!==Object.keys(r).length)return!0;for(let i=0;i<n.length;i++){const s=n[i];if(e[s]!==r[s]&&!Yl(t,s))return!0}return!1}function I0({vnode:r,parent:e},t){for(;e&&e.subTree===r;)(r=e.vnode).el=t,e=e.parent}const F0=r=>r.__isSuspense;function O0(r,e){e&&e.pendingBranch?We(r)?e.effects.push(...r):e.effects.push(r):w0(r)}function N0(r,e){if(Pt){let t=Pt.provides;const n=Pt.parent&&Pt.parent.provides;n===t&&(t=Pt.provides=Object.create(n)),t[r]=e}}function ll(r,e,t=!1){const n=Pt||fi;if(n){const i=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(i&&r in i)return i[r];if(arguments.length>1)return t&&$e(e)?e.call(n.proxy):e}}const Sa={};function mc(r,e,t){return sm(r,e,t)}function sm(r,e,{immediate:t,deep:n,flush:i,onTrack:s,onTrigger:a}=_t){const o=k_()===(Pt==null?void 0:Pt.scope)?Pt:null;let l,c=!1,u=!1;if(Zt(r)?(l=()=>r.value,c=El(r)):ks(r)?(l=()=>r,n=!0):We(r)?(u=!0,c=r.some(x=>ks(x)||El(x)),l=()=>r.map(x=>{if(Zt(x))return x.value;if(ks(x))return Ds(x);if($e(x))return dr(x,o,2)})):$e(r)?e?l=()=>dr(r,o,2):l=()=>{if(!(o&&o.isUnmounted))return h&&h(),Zn(r,o,3,[f])}:l=di,e&&n){const x=l;l=()=>Ds(x())}let h,f=x=>{h=_.onStop=()=>{dr(x,o,4)}},p;if(na)if(f=di,e?t&&Zn(e,o,3,[l(),u?[]:void 0,f]):l(),i==="sync"){const x=Ix();p=x.__watcherHandles||(x.__watcherHandles=[])}else return di;let g=u?new Array(r.length).fill(Sa):Sa;const d=()=>{if(_.active)if(e){const x=_.run();(n||c||(u?x.some((y,w)=>Zo(y,g[w])):Zo(x,g)))&&(h&&h(),Zn(e,o,3,[x,g===Sa?void 0:u&&g[0]===Sa?[]:g,f]),g=x)}else _.run()};d.allowRecurse=!!e;let m;i==="sync"?m=d:i==="post"?m=()=>pn(d,o&&o.suspense):(d.pre=!0,o&&(d.id=o.uid),m=()=>wf(d));const _=new gf(l,m);e?t?d():g=_.run():i==="post"?pn(_.run.bind(_),o&&o.suspense):_.run();const S=()=>{_.stop(),o&&o.scope&&hf(o.scope.effects,_)};return p&&p.push(S),S}function z0(r,e,t){const n=this.proxy,i=It(r)?r.includes(".")?om(n,r):()=>n[r]:r.bind(n,n);let s;$e(e)?s=e:(s=e.handler,t=e);const a=Pt;Js(this);const o=sm(i,s.bind(n),t);return a?Js(a):Kr(),o}function om(r,e){const t=e.split(".");return()=>{let n=r;for(let i=0;i<t.length&&n;i++)n=n[t[i]];return n}}function Ds(r,e){if(!yt(r)||r.__v_skip||(e=e||new Set,e.has(r)))return r;if(e.add(r),Zt(r))Ds(r.value,e);else if(We(r))for(let t=0;t<r.length;t++)Ds(r[t],e);else if(Rp(r)||Bs(r))r.forEach(t=>{Ds(t,e)});else if(Op(r))for(const t in r)Ds(r[t],e);return r}function U0(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Zl(()=>{r.isMounted=!0}),um(()=>{r.isUnmounting=!0}),r}const kn=[Function,Array],B0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:kn,onEnter:kn,onAfterEnter:kn,onEnterCancelled:kn,onBeforeLeave:kn,onLeave:kn,onAfterLeave:kn,onLeaveCancelled:kn,onBeforeAppear:kn,onAppear:kn,onAfterAppear:kn,onAppearCancelled:kn},setup(r,{slots:e}){const t=Tx(),n=U0();let i;return()=>{const s=e.default&&lm(e.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const d of s)if(d.type!==Hi){a=d;break}}const o=rt(r),{mode:l}=o;if(n.isLeaving)return gc(a);const c=mh(a);if(!c)return gc(a);const u=bu(c,o,n,t);Mu(c,u);const h=t.subTree,f=h&&mh(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const d=g();i===void 0?i=d:d!==i&&(i=d,p=!0)}if(f&&f.type!==Hi&&(!Gr(c,f)||p)){const d=bu(f,o,n,t);if(Mu(f,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},gc(a);l==="in-out"&&c.type!==Hi&&(d.delayLeave=(m,_,S)=>{const x=am(n,f);x[String(f.key)]=f,m._leaveCb=()=>{_(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return a}}},k0=B0;function am(r,e){const{leavingVNodes:t}=r;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function bu(r,e,t,n){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:d,onAppear:m,onAfterAppear:_,onAppearCancelled:S}=e,x=String(r.key),y=am(t,r),w=(v,M)=>{v&&Zn(v,n,9,M)},P=(v,M)=>{const D=M[1];w(v,M),We(v)?v.every(W=>W.length<=1)&&D():v.length<=1&&D()},A={mode:s,persisted:a,beforeEnter(v){let M=o;if(!t.isMounted)if(i)M=d||o;else return;v._leaveCb&&v._leaveCb(!0);const D=y[x];D&&Gr(r,D)&&D.el._leaveCb&&D.el._leaveCb(),w(M,[v])},enter(v){let M=l,D=c,W=u;if(!t.isMounted)if(i)M=m||l,D=_||c,W=S||u;else return;let B=!1;const U=v._enterCb=O=>{B||(B=!0,O?w(W,[v]):w(D,[v]),A.delayedLeave&&A.delayedLeave(),v._enterCb=void 0)};M?P(M,[v,U]):U()},leave(v,M){const D=String(r.key);if(v._enterCb&&v._enterCb(!0),t.isUnmounting)return M();w(h,[v]);let W=!1;const B=v._leaveCb=U=>{W||(W=!0,M(),U?w(g,[v]):w(p,[v]),v._leaveCb=void 0,y[D]===r&&delete y[D])};y[D]=r,f?P(f,[v,B]):B()},clone(v){return bu(v,e,t,n)}};return A}function gc(r){if(jl(r))return r=vr(r),r.children=null,r}function mh(r){return jl(r)?r.children?r.children[0]:void 0:r}function Mu(r,e){r.shapeFlag&6&&r.component?Mu(r.component.subTree,e):r.shapeFlag&128?(r.ssContent.transition=e.clone(r.ssContent),r.ssFallback.transition=e.clone(r.ssFallback)):r.transition=e}function lm(r,e=!1,t){let n=[],i=0;for(let s=0;s<r.length;s++){let a=r[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===Wn?(a.patchFlag&128&&i++,n=n.concat(lm(a.children,e,o))):(e||a.type!==Hi)&&n.push(o!=null?vr(a,{key:o}):a)}if(i>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Tf(r){return $e(r)?{setup:r,name:r.name}:r}const cl=r=>!!r.type.__asyncLoader,jl=r=>r.type.__isKeepAlive;function G0(r,e){cm(r,"a",e)}function V0(r,e){cm(r,"da",e)}function cm(r,e,t=Pt){const n=r.__wdc||(r.__wdc=()=>{let i=t;for(;i;){if(i.isDeactivated)return;i=i.parent}return r()});if(Kl(e,n,t),t){let i=t.parent;for(;i&&i.parent;)jl(i.parent.vnode)&&H0(n,e,t,i),i=i.parent}}function H0(r,e,t,n){const i=Kl(e,r,n,!0);fm(()=>{hf(n[e],i)},t)}function Kl(r,e,t=Pt,n=!1){if(t){const i=t[r]||(t[r]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;ho(),Js(t);const o=Zn(e,t,r,a);return Kr(),po(),o});return n?i.unshift(s):i.push(s),s}}const ji=r=>(e,t=Pt)=>(!na||r==="sp")&&Kl(r,(...n)=>e(...n),t),W0=ji("bm"),Zl=ji("m"),X0=ji("bu"),q0=ji("u"),um=ji("bum"),fm=ji("um"),Y0=ji("sp"),$0=ji("rtg"),j0=ji("rtc");function K0(r,e=Pt){Kl("ec",r,e)}function Cr(r,e,t,n){const i=r.dirs,s=e&&e.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let l=o.dir[n];l&&(ho(),Zn(l,t,8,[r.el,o,r,e]),po())}}const Z0=Symbol();function gh(r,e,t,n){let i;const s=t&&t[n];if(We(r)||It(r)){i=new Array(r.length);for(let a=0,o=r.length;a<o;a++)i[a]=e(r[a],a,void 0,s&&s[a])}else if(typeof r=="number"){i=new Array(r);for(let a=0;a<r;a++)i[a]=e(a+1,a,void 0,s&&s[a])}else if(yt(r))if(r[Symbol.iterator])i=Array.from(r,(a,o)=>e(a,o,void 0,s&&s[o]));else{const a=Object.keys(r);i=new Array(a.length);for(let o=0,l=a.length;o<l;o++){const c=a[o];i[o]=e(r[c],c,o,s&&s[o])}}else i=[];return t&&(t[n]=i),i}const Su=r=>r?Sm(r)?Pf(r)||r.proxy:Su(r.parent):null,Uo=en(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>Su(r.parent),$root:r=>Su(r.root),$emit:r=>r.emit,$options:r=>Ef(r),$forceUpdate:r=>r.f||(r.f=()=>wf(r.update)),$nextTick:r=>r.n||(r.n=b0.bind(r.proxy)),$watch:r=>z0.bind(r)}),_c=(r,e)=>r!==_t&&!r.__isScriptSetup&&nt(r,e),J0={get({_:r},e){const{ctx:t,setupState:n,data:i,props:s,accessCache:a,type:o,appContext:l}=r;let c;if(e[0]!=="$"){const p=a[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return i[e];case 4:return t[e];case 3:return s[e]}else{if(_c(n,e))return a[e]=1,n[e];if(i!==_t&&nt(i,e))return a[e]=2,i[e];if((c=r.propsOptions[0])&&nt(c,e))return a[e]=3,s[e];if(t!==_t&&nt(t,e))return a[e]=4,t[e];wu&&(a[e]=0)}}const u=Uo[e];let h,f;if(u)return e==="$attrs"&&bn(r,"get",e),u(r);if((h=o.__cssModules)&&(h=h[e]))return h;if(t!==_t&&nt(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,nt(f,e))return f[e]},set({_:r},e,t){const{data:n,setupState:i,ctx:s}=r;return _c(i,e)?(i[e]=t,!0):n!==_t&&nt(n,e)?(n[e]=t,!0):nt(r.props,e)||e[0]==="$"&&e.slice(1)in r?!1:(s[e]=t,!0)},has({_:{data:r,setupState:e,accessCache:t,ctx:n,appContext:i,propsOptions:s}},a){let o;return!!t[a]||r!==_t&&nt(r,a)||_c(e,a)||(o=s[0])&&nt(o,a)||nt(n,a)||nt(Uo,a)||nt(i.config.globalProperties,a)},defineProperty(r,e,t){return t.get!=null?r._.accessCache[e]=0:nt(t,"value")&&this.set(r,e,t.value,null),Reflect.defineProperty(r,e,t)}};let wu=!0;function Q0(r){const e=Ef(r),t=r.proxy,n=r.ctx;wu=!1,e.beforeCreate&&_h(e.beforeCreate,r,"bc");const{data:i,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:d,deactivated:m,beforeDestroy:_,beforeUnmount:S,destroyed:x,unmounted:y,render:w,renderTracked:P,renderTriggered:A,errorCaptured:v,serverPrefetch:M,expose:D,inheritAttrs:W,components:B,directives:U,filters:O}=e;if(c&&ex(c,n,null,r.appContext.config.unwrapInjectedRef),a)for(const X in a){const k=a[X];$e(k)&&(n[X]=k.bind(t))}if(i){const X=i.call(t,t);yt(X)&&(r.data=yf(X))}if(wu=!0,s)for(const X in s){const k=s[X],se=$e(k)?k.bind(t,t):$e(k.get)?k.get.bind(t,t):di,L=!$e(k)&&$e(k.set)?k.set.bind(t):di,_e=Dx({get:se,set:L});Object.defineProperty(n,X,{enumerable:!0,configurable:!0,get:()=>_e.value,set:V=>_e.value=V})}if(o)for(const X in o)hm(o[X],n,t,X);if(l){const X=$e(l)?l.call(t):l;Reflect.ownKeys(X).forEach(k=>{N0(k,X[k])})}u&&_h(u,r,"c");function j(X,k){We(k)?k.forEach(se=>X(se.bind(t))):k&&X(k.bind(t))}if(j(W0,h),j(Zl,f),j(X0,p),j(q0,g),j(G0,d),j(V0,m),j(K0,v),j(j0,P),j($0,A),j(um,S),j(fm,y),j(Y0,M),We(D))if(D.length){const X=r.exposed||(r.exposed={});D.forEach(k=>{Object.defineProperty(X,k,{get:()=>t[k],set:se=>t[k]=se})})}else r.exposed||(r.exposed={});w&&r.render===di&&(r.render=w),W!=null&&(r.inheritAttrs=W),B&&(r.components=B),U&&(r.directives=U)}function ex(r,e,t=di,n=!1){We(r)&&(r=Tu(r));for(const i in r){const s=r[i];let a;yt(s)?"default"in s?a=ll(s.from||i,s.default,!0):a=ll(s.from||i):a=ll(s),Zt(a)&&n?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[i]=a}}function _h(r,e,t){Zn(We(r)?r.map(n=>n.bind(e.proxy)):r.bind(e.proxy),e,t)}function hm(r,e,t,n){const i=n.includes(".")?om(t,n):()=>t[n];if(It(r)){const s=e[r];$e(s)&&mc(i,s)}else if($e(r))mc(i,r.bind(t));else if(yt(r))if(We(r))r.forEach(s=>hm(s,e,t,n));else{const s=$e(r.handler)?r.handler.bind(t):e[r.handler];$e(s)&&mc(i,s,r)}}function Ef(r){const e=r.type,{mixins:t,extends:n}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=r.appContext,o=s.get(e);let l;return o?l=o:!i.length&&!t&&!n?l=e:(l={},i.length&&i.forEach(c=>Al(l,c,a,!0)),Al(l,e,a)),yt(e)&&s.set(e,l),l}function Al(r,e,t,n=!1){const{mixins:i,extends:s}=e;s&&Al(r,s,t,!0),i&&i.forEach(a=>Al(r,a,t,!0));for(const a in e)if(!(n&&a==="expose")){const o=tx[a]||t&&t[a];r[a]=o?o(r[a],e[a]):e[a]}return r}const tx={data:xh,props:Or,emits:Or,methods:Or,computed:Or,beforeCreate:sn,created:sn,beforeMount:sn,mounted:sn,beforeUpdate:sn,updated:sn,beforeDestroy:sn,beforeUnmount:sn,destroyed:sn,unmounted:sn,activated:sn,deactivated:sn,errorCaptured:sn,serverPrefetch:sn,components:Or,directives:Or,watch:ix,provide:xh,inject:nx};function xh(r,e){return e?r?function(){return en($e(r)?r.call(this,this):r,$e(e)?e.call(this,this):e)}:e:r}function nx(r,e){return Or(Tu(r),Tu(e))}function Tu(r){if(We(r)){const e={};for(let t=0;t<r.length;t++)e[r[t]]=r[t];return e}return r}function sn(r,e){return r?[...new Set([].concat(r,e))]:e}function Or(r,e){return r?en(en(Object.create(null),r),e):e}function ix(r,e){if(!r)return e;if(!e)return r;const t=en(Object.create(null),r);for(const n in e)t[n]=sn(r[n],e[n]);return t}function rx(r,e,t,n=!1){const i={},s={};Tl(s,Ql,1),r.propsDefaults=Object.create(null),dm(r,e,i,s);for(const a in r.propsOptions[0])a in i||(i[a]=void 0);t?r.props=n?i:d0(i):r.type.props?r.props=i:r.props=s,r.attrs=s}function sx(r,e,t,n){const{props:i,attrs:s,vnode:{patchFlag:a}}=r,o=rt(i),[l]=r.propsOptions;let c=!1;if((n||a>0)&&!(a&16)){if(a&8){const u=r.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Yl(r.emitsOptions,f))continue;const p=e[f];if(l)if(nt(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=Ks(f);i[g]=Eu(l,o,g,p,r,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{dm(r,e,i,s)&&(c=!0);let u;for(const h in o)(!e||!nt(e,h)&&((u=fo(h))===h||!nt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(i[h]=Eu(l,o,h,void 0,r,!0)):delete i[h]);if(s!==o)for(const h in s)(!e||!nt(e,h))&&(delete s[h],c=!0)}c&&qi(r,"set","$attrs")}function dm(r,e,t,n){const[i,s]=r.propsOptions;let a=!1,o;if(e)for(let l in e){if(al(l))continue;const c=e[l];let u;i&&nt(i,u=Ks(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Yl(r.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,a=!0)}if(s){const l=rt(t),c=o||_t;for(let u=0;u<s.length;u++){const h=s[u];t[h]=Eu(i,l,h,c[h],r,!nt(c,h))}}return a}function Eu(r,e,t,n,i,s){const a=r[t];if(a!=null){const o=nt(a,"default");if(o&&n===void 0){const l=a.default;if(a.type!==Function&&$e(l)){const{propsDefaults:c}=i;t in c?n=c[t]:(Js(i),n=c[t]=l.call(null,e),Kr())}else n=l}a[0]&&(s&&!o?n=!1:a[1]&&(n===""||n===fo(t))&&(n=!0))}return n}function pm(r,e,t=!1){const n=e.propsCache,i=n.get(r);if(i)return i;const s=r.props,a={},o=[];let l=!1;if(!$e(r)){const u=h=>{l=!0;const[f,p]=pm(h,e,!0);en(a,f),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),r.extends&&u(r.extends),r.mixins&&r.mixins.forEach(u)}if(!s&&!l)return yt(r)&&n.set(r,Us),Us;if(We(s))for(let u=0;u<s.length;u++){const h=Ks(s[u]);vh(h)&&(a[h]=_t)}else if(s)for(const u in s){const h=Ks(u);if(vh(h)){const f=s[u],p=a[h]=We(f)||$e(f)?{type:f}:Object.assign({},f);if(p){const g=Mh(Boolean,p.type),d=Mh(String,p.type);p[0]=g>-1,p[1]=d<0||g<d,(g>-1||nt(p,"default"))&&o.push(h)}}}const c=[a,o];return yt(r)&&n.set(r,c),c}function vh(r){return r[0]!=="$"}function yh(r){const e=r&&r.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:r===null?"null":""}function bh(r,e){return yh(r)===yh(e)}function Mh(r,e){return We(e)?e.findIndex(t=>bh(t,r)):$e(e)&&bh(e,r)?0:-1}const mm=r=>r[0]==="_"||r==="$stable",Cf=r=>We(r)?r.map(yi):[yi(r)],ox=(r,e,t)=>{if(e._n)return e;const n=P0((...i)=>Cf(e(...i)),t);return n._c=!1,n},gm=(r,e,t)=>{const n=r._ctx;for(const i in r){if(mm(i))continue;const s=r[i];if($e(s))e[i]=ox(i,s,n);else if(s!=null){const a=Cf(s);e[i]=()=>a}}},_m=(r,e)=>{const t=Cf(e);r.slots.default=()=>t},ax=(r,e)=>{if(r.vnode.shapeFlag&32){const t=e._;t?(r.slots=rt(e),Tl(e,"_",t)):gm(e,r.slots={})}else r.slots={},e&&_m(r,e);Tl(r.slots,Ql,1)},lx=(r,e,t)=>{const{vnode:n,slots:i}=r;let s=!0,a=_t;if(n.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(en(i,e),!t&&o===1&&delete i._):(s=!e.$stable,gm(e,i)),a=e}else e&&(_m(r,e),a={default:1});if(s)for(const o in i)!mm(o)&&!(o in a)&&delete i[o]};function xm(){return{app:null,config:{isNativeTag:L_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cx=0;function ux(r,e){return function(n,i=null){$e(n)||(n=Object.assign({},n)),i!=null&&!yt(i)&&(i=null);const s=xm(),a=new Set;let o=!1;const l=s.app={_uid:cx++,_component:n,_props:i,_container:null,_context:s,_instance:null,version:Fx,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&$e(c.install)?(a.add(c),c.install(l,...u)):$e(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!o){const f=pi(n,i);return f.appContext=s,u&&e?e(f,c):r(f,c,h),o=!0,l._container=c,c.__vue_app__=l,Pf(f.component)||f.component.proxy}},unmount(){o&&(r(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Cu(r,e,t,n,i=!1){if(We(r)){r.forEach((f,p)=>Cu(f,e&&(We(e)?e[p]:e),t,n,i));return}if(cl(n)&&!i)return;const s=n.shapeFlag&4?Pf(n.component)||n.component.proxy:n.el,a=i?null:s,{i:o,r:l}=r,c=e&&e.r,u=o.refs===_t?o.refs={}:o.refs,h=o.setupState;if(c!=null&&c!==l&&(It(c)?(u[c]=null,nt(h,c)&&(h[c]=null)):Zt(c)&&(c.value=null)),$e(l))dr(l,o,12,[a,u]);else{const f=It(l),p=Zt(l);if(f||p){const g=()=>{if(r.f){const d=f?nt(h,l)?h[l]:u[l]:l.value;i?We(d)&&hf(d,s):We(d)?d.includes(s)||d.push(s):f?(u[l]=[s],nt(h,l)&&(h[l]=u[l])):(l.value=[s],r.k&&(u[r.k]=l.value))}else f?(u[l]=a,nt(h,l)&&(h[l]=a)):p&&(l.value=a,r.k&&(u[r.k]=a))};a?(g.id=-1,pn(g,t)):g()}}}const pn=O0;function fx(r){return hx(r)}function hx(r,e){const t=z_();t.__VUE__=!0;const{insert:n,remove:i,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=di,insertStaticContent:g}=r,d=(C,R,Y,re=null,ne=null,I=null,ue=!1,te=null,de=!!R.dynamicChildren)=>{if(C===R)return;C&&!Gr(C,R)&&(re=xe(C),V(C,ne,I,!0),C=null),R.patchFlag===-2&&(de=!1,R.dynamicChildren=null);const{type:oe,ref:T,shapeFlag:b}=R;switch(oe){case Jl:m(C,R,Y,re);break;case Hi:_(C,R,Y,re);break;case ul:C==null&&S(R,Y,re,ue);break;case Wn:B(C,R,Y,re,ne,I,ue,te,de);break;default:b&1?w(C,R,Y,re,ne,I,ue,te,de):b&6?U(C,R,Y,re,ne,I,ue,te,de):(b&64||b&128)&&oe.process(C,R,Y,re,ne,I,ue,te,de,we)}T!=null&&ne&&Cu(T,C&&C.ref,I,R||C,!R)},m=(C,R,Y,re)=>{if(C==null)n(R.el=o(R.children),Y,re);else{const ne=R.el=C.el;R.children!==C.children&&c(ne,R.children)}},_=(C,R,Y,re)=>{C==null?n(R.el=l(R.children||""),Y,re):R.el=C.el},S=(C,R,Y,re)=>{[C.el,C.anchor]=g(C.children,R,Y,re,C.el,C.anchor)},x=({el:C,anchor:R},Y,re)=>{let ne;for(;C&&C!==R;)ne=f(C),n(C,Y,re),C=ne;n(R,Y,re)},y=({el:C,anchor:R})=>{let Y;for(;C&&C!==R;)Y=f(C),i(C),C=Y;i(R)},w=(C,R,Y,re,ne,I,ue,te,de)=>{ue=ue||R.type==="svg",C==null?P(R,Y,re,ne,I,ue,te,de):M(C,R,ne,I,ue,te,de)},P=(C,R,Y,re,ne,I,ue,te)=>{let de,oe;const{type:T,props:b,shapeFlag:N,transition:ee,dirs:Z}=C;if(de=C.el=a(C.type,I,b&&b.is,b),N&8?u(de,C.children):N&16&&v(C.children,de,null,re,ne,I&&T!=="foreignObject",ue,te),Z&&Cr(C,null,re,"created"),A(de,C,C.scopeId,ue,re),b){for(const pe in b)pe!=="value"&&!al(pe)&&s(de,pe,null,b[pe],I,C.children,re,ne,me);"value"in b&&s(de,"value",null,b.value),(oe=b.onVnodeBeforeMount)&&gi(oe,re,C)}Z&&Cr(C,null,re,"beforeMount");const ae=(!ne||ne&&!ne.pendingBranch)&&ee&&!ee.persisted;ae&&ee.beforeEnter(de),n(de,R,Y),((oe=b&&b.onVnodeMounted)||ae||Z)&&pn(()=>{oe&&gi(oe,re,C),ae&&ee.enter(de),Z&&Cr(C,null,re,"mounted")},ne)},A=(C,R,Y,re,ne)=>{if(Y&&p(C,Y),re)for(let I=0;I<re.length;I++)p(C,re[I]);if(ne){let I=ne.subTree;if(R===I){const ue=ne.vnode;A(C,ue,ue.scopeId,ue.slotScopeIds,ne.parent)}}},v=(C,R,Y,re,ne,I,ue,te,de=0)=>{for(let oe=de;oe<C.length;oe++){const T=C[oe]=te?ir(C[oe]):yi(C[oe]);d(null,T,R,Y,re,ne,I,ue,te)}},M=(C,R,Y,re,ne,I,ue)=>{const te=R.el=C.el;let{patchFlag:de,dynamicChildren:oe,dirs:T}=R;de|=C.patchFlag&16;const b=C.props||_t,N=R.props||_t;let ee;Y&&Ar(Y,!1),(ee=N.onVnodeBeforeUpdate)&&gi(ee,Y,R,C),T&&Cr(R,C,Y,"beforeUpdate"),Y&&Ar(Y,!0);const Z=ne&&R.type!=="foreignObject";if(oe?D(C.dynamicChildren,oe,te,Y,re,Z,I):ue||k(C,R,te,null,Y,re,Z,I,!1),de>0){if(de&16)W(te,R,b,N,Y,re,ne);else if(de&2&&b.class!==N.class&&s(te,"class",null,N.class,ne),de&4&&s(te,"style",b.style,N.style,ne),de&8){const ae=R.dynamicProps;for(let pe=0;pe<ae.length;pe++){const ge=ae[pe],Q=b[ge],Pe=N[ge];(Pe!==Q||ge==="value")&&s(te,ge,Q,Pe,ne,C.children,Y,re,me)}}de&1&&C.children!==R.children&&u(te,R.children)}else!ue&&oe==null&&W(te,R,b,N,Y,re,ne);((ee=N.onVnodeUpdated)||T)&&pn(()=>{ee&&gi(ee,Y,R,C),T&&Cr(R,C,Y,"updated")},re)},D=(C,R,Y,re,ne,I,ue)=>{for(let te=0;te<R.length;te++){const de=C[te],oe=R[te],T=de.el&&(de.type===Wn||!Gr(de,oe)||de.shapeFlag&70)?h(de.el):Y;d(de,oe,T,null,re,ne,I,ue,!0)}},W=(C,R,Y,re,ne,I,ue)=>{if(Y!==re){if(Y!==_t)for(const te in Y)!al(te)&&!(te in re)&&s(C,te,Y[te],null,ue,R.children,ne,I,me);for(const te in re){if(al(te))continue;const de=re[te],oe=Y[te];de!==oe&&te!=="value"&&s(C,te,oe,de,ue,R.children,ne,I,me)}"value"in re&&s(C,"value",Y.value,re.value)}},B=(C,R,Y,re,ne,I,ue,te,de)=>{const oe=R.el=C?C.el:o(""),T=R.anchor=C?C.anchor:o("");let{patchFlag:b,dynamicChildren:N,slotScopeIds:ee}=R;ee&&(te=te?te.concat(ee):ee),C==null?(n(oe,Y,re),n(T,Y,re),v(R.children,Y,T,ne,I,ue,te,de)):b>0&&b&64&&N&&C.dynamicChildren?(D(C.dynamicChildren,N,Y,ne,I,ue,te),(R.key!=null||ne&&R===ne.subTree)&&vm(C,R,!0)):k(C,R,Y,T,ne,I,ue,te,de)},U=(C,R,Y,re,ne,I,ue,te,de)=>{R.slotScopeIds=te,C==null?R.shapeFlag&512?ne.ctx.activate(R,Y,re,ue,de):O(R,Y,re,ne,I,ue,de):q(C,R,de)},O=(C,R,Y,re,ne,I,ue)=>{const te=C.component=wx(C,re,ne);if(jl(C)&&(te.ctx.renderer=we),Ex(te),te.asyncDep){if(ne&&ne.registerDep(te,j),!C.el){const de=te.subTree=pi(Hi);_(null,de,R,Y)}return}j(te,C,R,Y,ne,I,ue)},q=(C,R,Y)=>{const re=R.component=C.component;if(R0(C,R,Y))if(re.asyncDep&&!re.asyncResolved){X(re,R,Y);return}else re.next=R,S0(re.update),re.update();else R.el=C.el,re.vnode=R},j=(C,R,Y,re,ne,I,ue)=>{const te=()=>{if(C.isMounted){let{next:T,bu:b,u:N,parent:ee,vnode:Z}=C,ae=T,pe;Ar(C,!1),T?(T.el=Z.el,X(C,T,ue)):T=Z,b&&dc(b),(pe=T.props&&T.props.onVnodeBeforeUpdate)&&gi(pe,ee,T,Z),Ar(C,!0);const ge=pc(C),Q=C.subTree;C.subTree=ge,d(Q,ge,h(Q.el),xe(Q),C,ne,I),T.el=ge.el,ae===null&&I0(C,ge.el),N&&pn(N,ne),(pe=T.props&&T.props.onVnodeUpdated)&&pn(()=>gi(pe,ee,T,Z),ne)}else{let T;const{el:b,props:N}=R,{bm:ee,m:Z,parent:ae}=C,pe=cl(R);if(Ar(C,!1),ee&&dc(ee),!pe&&(T=N&&N.onVnodeBeforeMount)&&gi(T,ae,R),Ar(C,!0),b&&ze){const ge=()=>{C.subTree=pc(C),ze(b,C.subTree,C,ne,null)};pe?R.type.__asyncLoader().then(()=>!C.isUnmounted&&ge()):ge()}else{const ge=C.subTree=pc(C);d(null,ge,Y,re,C,ne,I),R.el=ge.el}if(Z&&pn(Z,ne),!pe&&(T=N&&N.onVnodeMounted)){const ge=R;pn(()=>gi(T,ae,ge),ne)}(R.shapeFlag&256||ae&&cl(ae.vnode)&&ae.vnode.shapeFlag&256)&&C.a&&pn(C.a,ne),C.isMounted=!0,R=Y=re=null}},de=C.effect=new gf(te,()=>wf(oe),C.scope),oe=C.update=()=>de.run();oe.id=C.uid,Ar(C,!0),oe()},X=(C,R,Y)=>{R.component=C;const re=C.vnode.props;C.vnode=R,C.next=null,sx(C,R.props,re,Y),lx(C,R.children,Y),ho(),dh(),po()},k=(C,R,Y,re,ne,I,ue,te,de=!1)=>{const oe=C&&C.children,T=C?C.shapeFlag:0,b=R.children,{patchFlag:N,shapeFlag:ee}=R;if(N>0){if(N&128){L(oe,b,Y,re,ne,I,ue,te,de);return}else if(N&256){se(oe,b,Y,re,ne,I,ue,te,de);return}}ee&8?(T&16&&me(oe,ne,I),b!==oe&&u(Y,b)):T&16?ee&16?L(oe,b,Y,re,ne,I,ue,te,de):me(oe,ne,I,!0):(T&8&&u(Y,""),ee&16&&v(b,Y,re,ne,I,ue,te,de))},se=(C,R,Y,re,ne,I,ue,te,de)=>{C=C||Us,R=R||Us;const oe=C.length,T=R.length,b=Math.min(oe,T);let N;for(N=0;N<b;N++){const ee=R[N]=de?ir(R[N]):yi(R[N]);d(C[N],ee,Y,null,ne,I,ue,te,de)}oe>T?me(C,ne,I,!0,!1,b):v(R,Y,re,ne,I,ue,te,de,b)},L=(C,R,Y,re,ne,I,ue,te,de)=>{let oe=0;const T=R.length;let b=C.length-1,N=T-1;for(;oe<=b&&oe<=N;){const ee=C[oe],Z=R[oe]=de?ir(R[oe]):yi(R[oe]);if(Gr(ee,Z))d(ee,Z,Y,null,ne,I,ue,te,de);else break;oe++}for(;oe<=b&&oe<=N;){const ee=C[b],Z=R[N]=de?ir(R[N]):yi(R[N]);if(Gr(ee,Z))d(ee,Z,Y,null,ne,I,ue,te,de);else break;b--,N--}if(oe>b){if(oe<=N){const ee=N+1,Z=ee<T?R[ee].el:re;for(;oe<=N;)d(null,R[oe]=de?ir(R[oe]):yi(R[oe]),Y,Z,ne,I,ue,te,de),oe++}}else if(oe>N)for(;oe<=b;)V(C[oe],ne,I,!0),oe++;else{const ee=oe,Z=oe,ae=new Map;for(oe=Z;oe<=N;oe++){const Se=R[oe]=de?ir(R[oe]):yi(R[oe]);Se.key!=null&&ae.set(Se.key,oe)}let pe,ge=0;const Q=N-Z+1;let Pe=!1,Ce=0;const Re=new Array(Q);for(oe=0;oe<Q;oe++)Re[oe]=0;for(oe=ee;oe<=b;oe++){const Se=C[oe];if(ge>=Q){V(Se,ne,I,!0);continue}let Ge;if(Se.key!=null)Ge=ae.get(Se.key);else for(pe=Z;pe<=N;pe++)if(Re[pe-Z]===0&&Gr(Se,R[pe])){Ge=pe;break}Ge===void 0?V(Se,ne,I,!0):(Re[Ge-Z]=oe+1,Ge>=Ce?Ce=Ge:Pe=!0,d(Se,R[Ge],Y,null,ne,I,ue,te,de),ge++)}const Fe=Pe?dx(Re):Us;for(pe=Fe.length-1,oe=Q-1;oe>=0;oe--){const Se=Z+oe,Ge=R[Se],Le=Se+1<T?R[Se+1].el:re;Re[oe]===0?d(null,Ge,Y,Le,ne,I,ue,te,de):Pe&&(pe<0||oe!==Fe[pe]?_e(Ge,Y,Le,2):pe--)}}},_e=(C,R,Y,re,ne=null)=>{const{el:I,type:ue,transition:te,children:de,shapeFlag:oe}=C;if(oe&6){_e(C.component.subTree,R,Y,re);return}if(oe&128){C.suspense.move(R,Y,re);return}if(oe&64){ue.move(C,R,Y,we);return}if(ue===Wn){n(I,R,Y);for(let b=0;b<de.length;b++)_e(de[b],R,Y,re);n(C.anchor,R,Y);return}if(ue===ul){x(C,R,Y);return}if(re!==2&&oe&1&&te)if(re===0)te.beforeEnter(I),n(I,R,Y),pn(()=>te.enter(I),ne);else{const{leave:b,delayLeave:N,afterLeave:ee}=te,Z=()=>n(I,R,Y),ae=()=>{b(I,()=>{Z(),ee&&ee()})};N?N(I,Z,ae):ae()}else n(I,R,Y)},V=(C,R,Y,re=!1,ne=!1)=>{const{type:I,props:ue,ref:te,children:de,dynamicChildren:oe,shapeFlag:T,patchFlag:b,dirs:N}=C;if(te!=null&&Cu(te,null,Y,C,!0),T&256){R.ctx.deactivate(C);return}const ee=T&1&&N,Z=!cl(C);let ae;if(Z&&(ae=ue&&ue.onVnodeBeforeUnmount)&&gi(ae,R,C),T&6)H(C.component,Y,re);else{if(T&128){C.suspense.unmount(Y,re);return}ee&&Cr(C,null,R,"beforeUnmount"),T&64?C.type.remove(C,R,Y,ne,we,re):oe&&(I!==Wn||b>0&&b&64)?me(oe,R,Y,!1,!0):(I===Wn&&b&384||!ne&&T&16)&&me(de,R,Y),re&&le(C)}(Z&&(ae=ue&&ue.onVnodeUnmounted)||ee)&&pn(()=>{ae&&gi(ae,R,C),ee&&Cr(C,null,R,"unmounted")},Y)},le=C=>{const{type:R,el:Y,anchor:re,transition:ne}=C;if(R===Wn){fe(Y,re);return}if(R===ul){y(C);return}const I=()=>{i(Y),ne&&!ne.persisted&&ne.afterLeave&&ne.afterLeave()};if(C.shapeFlag&1&&ne&&!ne.persisted){const{leave:ue,delayLeave:te}=ne,de=()=>ue(Y,I);te?te(C.el,I,de):de()}else I()},fe=(C,R)=>{let Y;for(;C!==R;)Y=f(C),i(C),C=Y;i(R)},H=(C,R,Y)=>{const{bum:re,scope:ne,update:I,subTree:ue,um:te}=C;re&&dc(re),ne.stop(),I&&(I.active=!1,V(ue,C,R,Y)),te&&pn(te,R),pn(()=>{C.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&C.asyncDep&&!C.asyncResolved&&C.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},me=(C,R,Y,re=!1,ne=!1,I=0)=>{for(let ue=I;ue<C.length;ue++)V(C[ue],R,Y,re,ne)},xe=C=>C.shapeFlag&6?xe(C.component.subTree):C.shapeFlag&128?C.suspense.next():f(C.anchor||C.el),ye=(C,R,Y)=>{C==null?R._vnode&&V(R._vnode,null,null,!0):d(R._vnode||null,C,R,null,null,null,Y),dh(),nm(),R._vnode=C},we={p:d,um:V,m:_e,r:le,mt:O,mc:v,pc:k,pbc:D,n:xe,o:r};let Ae,ze;return e&&([Ae,ze]=e(we)),{render:ye,hydrate:Ae,createApp:ux(ye,Ae)}}function Ar({effect:r,update:e},t){r.allowRecurse=e.allowRecurse=t}function vm(r,e,t=!1){const n=r.children,i=e.children;if(We(n)&&We(i))for(let s=0;s<n.length;s++){const a=n[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=ir(i[s]),o.el=a.el),t||vm(a,o)),o.type===Jl&&(o.el=a.el)}}function dx(r){const e=r.slice(),t=[0];let n,i,s,a,o;const l=r.length;for(n=0;n<l;n++){const c=r[n];if(c!==0){if(i=t[t.length-1],r[i]<c){e[n]=i,t.push(n);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,r[t[o]]<c?s=o+1:a=o;c<r[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const px=r=>r.__isTeleport,Wn=Symbol(void 0),Jl=Symbol(void 0),Hi=Symbol(void 0),ul=Symbol(void 0),Bo=[];let hi=null;function Wr(r=!1){Bo.push(hi=r?null:[])}function mx(){Bo.pop(),hi=Bo[Bo.length-1]||null}let ta=1;function Sh(r){ta+=r}function ym(r){return r.dynamicChildren=ta>0?hi||Us:null,mx(),ta>0&&hi&&hi.push(r),r}function Rs(r,e,t,n,i,s){return ym(Rn(r,e,t,n,i,s,!0))}function gx(r,e,t,n,i){return ym(pi(r,e,t,n,i,!0))}function _x(r){return r?r.__v_isVNode===!0:!1}function Gr(r,e){return r.type===e.type&&r.key===e.key}const Ql="__vInternal",bm=({key:r})=>r??null,fl=({ref:r,ref_key:e,ref_for:t})=>r!=null?It(r)||Zt(r)||$e(r)?{i:fi,r,k:e,f:!!t}:r:null;function Rn(r,e=null,t=null,n=0,i=null,s=r===Wn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:r,props:e,key:e&&bm(e),ref:e&&fl(e),scopeId:$l,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:fi};return o?(Af(l,t),s&128&&r.normalize(l)):t&&(l.shapeFlag|=It(t)?8:16),ta>0&&!a&&hi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hi.push(l),l}const pi=xx;function xx(r,e=null,t=null,n=0,i=null,s=!1){if((!r||r===Z0)&&(r=Hi),_x(r)){const o=vr(r,e,!0);return t&&Af(o,t),ta>0&&!s&&hi&&(o.shapeFlag&6?hi[hi.indexOf(r)]=o:hi.push(o)),o.patchFlag|=-2,o}if(Lx(r)&&(r=r.__vccOpts),e){e=vx(e);let{class:o,style:l}=e;o&&!It(o)&&(e.class=uf(o)),yt(l)&&($p(l)&&!We(l)&&(l=en({},l)),e.style=cf(l))}const a=It(r)?1:F0(r)?128:px(r)?64:yt(r)?4:$e(r)?2:0;return Rn(r,e,t,n,i,a,s,!0)}function vx(r){return r?$p(r)||Ql in r?en({},r):r:null}function vr(r,e,t=!1){const{props:n,ref:i,patchFlag:s,children:a}=r,o=e?bx(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:o,key:o&&bm(o),ref:e&&e.ref?t&&i?We(i)?i.concat(fl(e)):[i,fl(e)]:fl(e):i,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:a,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:e&&r.type!==Wn?s===-1?16:s|16:s,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&vr(r.ssContent),ssFallback:r.ssFallback&&vr(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function Mm(r=" ",e=0){return pi(Jl,null,r,e)}function yx(r,e){const t=pi(ul,null,r);return t.staticCount=e,t}function yi(r){return r==null||typeof r=="boolean"?pi(Hi):We(r)?pi(Wn,null,r.slice()):typeof r=="object"?ir(r):pi(Jl,null,String(r))}function ir(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:vr(r)}function Af(r,e){let t=0;const{shapeFlag:n}=r;if(e==null)e=null;else if(We(e))t=16;else if(typeof e=="object")if(n&65){const i=e.default;i&&(i._c&&(i._d=!1),Af(r,i()),i._c&&(i._d=!0));return}else{t=32;const i=e._;!i&&!(Ql in e)?e._ctx=fi:i===3&&fi&&(fi.slots._===1?e._=1:(e._=2,r.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:fi},t=32):(e=String(e),n&64?(t=16,e=[Mm(e)]):t=8);r.children=e,r.shapeFlag|=t}function bx(...r){const e={};for(let t=0;t<r.length;t++){const n=r[t];for(const i in n)if(i==="class")e.class!==n.class&&(e.class=uf([e.class,n.class]));else if(i==="style")e.style=cf([e.style,n.style]);else if(Vl(i)){const s=e[i],a=n[i];a&&s!==a&&!(We(s)&&s.includes(a))&&(e[i]=s?[].concat(s,a):a)}else i!==""&&(e[i]=n[i])}return e}function gi(r,e,t,n=null){Zn(r,e,7,[t,n])}const Mx=xm();let Sx=0;function wx(r,e,t){const n=r.type,i=(e?e.appContext:r.appContext)||Mx,s={uid:Sx++,vnode:r,type:n,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new U_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pm(n,i),emitsOptions:rm(n,i),emit:null,emitted:null,propsDefaults:_t,inheritAttrs:n.inheritAttrs,ctx:_t,data:_t,props:_t,attrs:_t,slots:_t,refs:_t,setupState:_t,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=E0.bind(null,s),r.ce&&r.ce(s),s}let Pt=null;const Tx=()=>Pt||fi,Js=r=>{Pt=r,r.scope.on()},Kr=()=>{Pt&&Pt.scope.off(),Pt=null};function Sm(r){return r.vnode.shapeFlag&4}let na=!1;function Ex(r,e=!1){na=e;const{props:t,children:n}=r.vnode,i=Sm(r);rx(r,t,i,e),ax(r,n);const s=i?Cx(r,e):void 0;return na=!1,s}function Cx(r,e){const t=r.type;r.accessCache=Object.create(null),r.proxy=jp(new Proxy(r.ctx,J0));const{setup:n}=t;if(n){const i=r.setupContext=n.length>1?Px(r):null;Js(r),ho();const s=dr(n,r,0,[r.props,i]);if(po(),Kr(),Ip(s)){if(s.then(Kr,Kr),e)return s.then(a=>{wh(r,a,e)}).catch(a=>{ql(a,r,0)});r.asyncDep=s}else wh(r,s,e)}else wm(r,e)}function wh(r,e,t){$e(e)?r.type.__ssrInlineRender?r.ssrRender=e:r.render=e:yt(e)&&(r.setupState=Jp(e)),wm(r,t)}let Th;function wm(r,e,t){const n=r.type;if(!r.render){if(!e&&Th&&!n.render){const i=n.template||Ef(r).template;if(i){const{isCustomElement:s,compilerOptions:a}=r.appContext.config,{delimiters:o,compilerOptions:l}=n,c=en(en({isCustomElement:s,delimiters:o},a),l);n.render=Th(i,c)}}r.render=n.render||di}Js(r),ho(),Q0(r),po(),Kr()}function Ax(r){return new Proxy(r.attrs,{get(e,t){return bn(r,"get","$attrs"),e[t]}})}function Px(r){const e=n=>{r.exposed=n||{}};let t;return{get attrs(){return t||(t=Ax(r))},slots:r.slots,emit:r.emit,expose:e}}function Pf(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(Jp(jp(r.exposed)),{get(e,t){if(t in e)return e[t];if(t in Uo)return Uo[t](r)},has(e,t){return t in e||t in Uo}}))}function Lx(r){return $e(r)&&"__vccOpts"in r}const Dx=(r,e)=>v0(r,e,na),Rx=Symbol(""),Ix=()=>ll(Rx),Fx="3.2.47",Ox="http://www.w3.org/2000/svg",Vr=typeof document<"u"?document:null,Eh=Vr&&Vr.createElement("template"),Nx={insert:(r,e,t)=>{e.insertBefore(r,t||null)},remove:r=>{const e=r.parentNode;e&&e.removeChild(r)},createElement:(r,e,t,n)=>{const i=e?Vr.createElementNS(Ox,r):Vr.createElement(r,t?{is:t}:void 0);return r==="select"&&n&&n.multiple!=null&&i.setAttribute("multiple",n.multiple),i},createText:r=>Vr.createTextNode(r),createComment:r=>Vr.createComment(r),setText:(r,e)=>{r.nodeValue=e},setElementText:(r,e)=>{r.textContent=e},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>Vr.querySelector(r),setScopeId(r,e){r.setAttribute(e,"")},insertStaticContent(r,e,t,n,i,s){const a=t?t.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),t),!(i===s||!(i=i.nextSibling)););else{Eh.innerHTML=n?`<svg>${r}</svg>`:r;const o=Eh.content;if(n){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function zx(r,e,t){const n=r._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?r.removeAttribute("class"):t?r.setAttribute("class",e):r.className=e}function Ux(r,e,t){const n=r.style,i=It(t);if(t&&!i){if(e&&!It(e))for(const s in e)t[s]==null&&Au(n,s,"");for(const s in t)Au(n,s,t[s])}else{const s=n.display;i?e!==t&&(n.cssText=t):e&&r.removeAttribute("style"),"_vod"in r&&(n.display=s)}}const Ch=/\s*!important$/;function Au(r,e,t){if(We(t))t.forEach(n=>Au(r,e,n));else if(t==null&&(t=""),e.startsWith("--"))r.setProperty(e,t);else{const n=Bx(r,e);Ch.test(t)?r.setProperty(fo(n),t.replace(Ch,""),"important"):r[n]=t}}const Ah=["Webkit","Moz","ms"],xc={};function Bx(r,e){const t=xc[e];if(t)return t;let n=Ks(e);if(n!=="filter"&&n in r)return xc[e]=n;n=Np(n);for(let i=0;i<Ah.length;i++){const s=Ah[i]+n;if(s in r)return xc[e]=s}return e}const Ph="http://www.w3.org/1999/xlink";function kx(r,e,t,n,i){if(n&&e.startsWith("xlink:"))t==null?r.removeAttributeNS(Ph,e.slice(6,e.length)):r.setAttributeNS(Ph,e,t);else{const s=A_(e);t==null||s&&!Lp(t)?r.removeAttribute(e):r.setAttribute(e,s?"":t)}}function Gx(r,e,t,n,i,s,a){if(e==="innerHTML"||e==="textContent"){n&&a(n,i,s),r[e]=t??"";return}if(e==="value"&&r.tagName!=="PROGRESS"&&!r.tagName.includes("-")){r._value=t;const l=t??"";(r.value!==l||r.tagName==="OPTION")&&(r.value=l),t==null&&r.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof r[e];l==="boolean"?t=Lp(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{r[e]=t}catch{}o&&r.removeAttribute(e)}function Vx(r,e,t,n){r.addEventListener(e,t,n)}function Hx(r,e,t,n){r.removeEventListener(e,t,n)}function Wx(r,e,t,n,i=null){const s=r._vei||(r._vei={}),a=s[e];if(n&&a)a.value=n;else{const[o,l]=Xx(e);if(n){const c=s[e]=$x(n,i);Vx(r,o,c,l)}else a&&(Hx(r,o,a,l),s[e]=void 0)}}const Lh=/(?:Once|Passive|Capture)$/;function Xx(r){let e;if(Lh.test(r)){e={};let n;for(;n=r.match(Lh);)r=r.slice(0,r.length-n[0].length),e[n[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):fo(r.slice(2)),e]}let vc=0;const qx=Promise.resolve(),Yx=()=>vc||(qx.then(()=>vc=0),vc=Date.now());function $x(r,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;Zn(jx(n,t.value),e,5,[n])};return t.value=r,t.attached=Yx(),t}function jx(r,e){if(We(e)){const t=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{t.call(r),r._stopped=!0},e.map(n=>i=>!i._stopped&&n&&n(i))}else return e}const Dh=/^on[a-z]/,Kx=(r,e,t,n,i=!1,s,a,o,l)=>{e==="class"?zx(r,n,i):e==="style"?Ux(r,t,n):Vl(e)?ff(e)||Wx(r,e,t,n,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zx(r,e,n,i))?Gx(r,e,n,s,a,o,l):(e==="true-value"?r._trueValue=n:e==="false-value"&&(r._falseValue=n),kx(r,e,n,i))};function Zx(r,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in r&&Dh.test(e)&&$e(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&r.tagName==="INPUT"||e==="type"&&r.tagName==="TEXTAREA"||Dh.test(e)&&It(t)?!1:e in r}const Jx={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};k0.props;const Qx=en({patchProp:Kx},Nx);let Rh;function ev(){return Rh||(Rh=fx(Qx))}const tv=(...r)=>{const e=ev().createApp(...r),{mount:t}=e;return e.mount=n=>{const i=nv(n);if(!i)return;const s=e._component;!$e(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=t(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},e};function nv(r){return It(r)?document.querySelector(r):r}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lf="150",iv=0,Ih=1,rv=2,Tm=1,sv=2,Lo=3,yr=0,Nn=1,rr=2,pr=0,Vs=1,Fh=2,Oh=3,Nh=4,ov=5,As=100,av=101,lv=102,zh=103,Uh=104,cv=200,uv=201,fv=202,hv=203,Em=204,Cm=205,dv=206,pv=207,mv=208,gv=209,_v=210,xv=0,vv=1,yv=2,Pu=3,bv=4,Mv=5,Sv=6,wv=7,Am=0,Tv=1,Ev=2,Wi=0,Cv=1,Av=2,Pv=3,Lv=4,Dv=5,Pm=300,Qs=301,eo=302,Lu=303,Du=304,ec=306,Ru=1e3,li=1001,Iu=1002,ln=1003,Bh=1004,yc=1005,Xn=1006,Rv=1007,ia=1008,rs=1009,Iv=1010,Fv=1011,Lm=1012,Ov=1013,Xr=1014,qr=1015,ra=1016,Nv=1017,zv=1018,Hs=1020,Uv=1021,ci=1023,Bv=1024,kv=1025,Zr=1026,to=1027,Gv=1028,Vv=1029,Hv=1030,Wv=1031,Xv=1033,bc=33776,Mc=33777,Sc=33778,wc=33779,kh=35840,Gh=35841,Vh=35842,Hh=35843,qv=36196,Wh=37492,Xh=37496,qh=37808,Yh=37809,$h=37810,jh=37811,Kh=37812,Zh=37813,Jh=37814,Qh=37815,ed=37816,td=37817,nd=37818,id=37819,rd=37820,sd=37821,Tc=36492,Yv=36283,od=36284,ad=36285,ld=36286,ss=3e3,ht=3001,$v=3200,jv=3201,Kv=0,Zv=1,xi="srgb",sa="srgb-linear",Dm="display-p3",Ec=7680,Jv=519,cd=35044,ud="300 es",Fu=1035;class mo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],hl=Math.PI/180,fd=180/Math.PI;function da(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[r&255]+qt[r>>8&255]+qt[r>>16&255]+qt[r>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function In(r,e,t){return Math.max(e,Math.min(t,r))}function Qv(r,e){return(r%e+e)%e}function Cc(r,e,t){return(1-t)*r+t*e}function hd(r){return(r&r-1)===0&&r!==0}function ey(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wa(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Tn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class hn{constructor(){hn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],d=i[0],m=i[3],_=i[6],S=i[1],x=i[4],y=i[7],w=i[2],P=i[5],A=i[8];return s[0]=a*d+o*S+l*w,s[3]=a*m+o*x+l*P,s[6]=a*_+o*y+l*A,s[1]=c*d+u*S+h*w,s[4]=c*m+u*x+h*P,s[7]=c*_+u*y+h*A,s[2]=f*d+p*S+g*w,s[5]=f*m+p*x+g*P,s[8]=f*_+p*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=t*h+n*f+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(i*c-u*n)*d,e[2]=(o*n-i*a)*d,e[3]=f*d,e[4]=(u*t-i*l)*d,e[5]=(i*s-o*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(a*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ac.makeScale(e,t)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ac.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new hn;function Rm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Pl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class pa{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const f=s[a+0],p=s[a+1],g=s[a+2],d=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==p||u!==g){let m=1-o;const _=l*f+c*p+u*g+h*d,S=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const w=Math.sqrt(x),P=Math.atan2(w,_*S);m=Math.sin(m*P)/w,o=Math.sin(o*P)/w}const y=o*S;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,h=h*m+d*y,m===1-o){const w=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=w,c*=w,u*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),f=l(n/2),p=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-i)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-i)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(In(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,n=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dd.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*i-o*n,u=l*n+o*t-s*i,h=l*i+s*n-a*t,f=-s*t-a*n-o*i;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(In(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pc=new $,dd=new pa;function Ws(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Lc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ty=new hn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ny=new hn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),sr=new $;function iy(r){return r.convertSRGBToLinear(),sr.set(r.r,r.g,r.b).applyMatrix3(ny),r.setRGB(sr.x,sr.y,sr.z)}function ry(r){return sr.set(r.r,r.g,r.b).applyMatrix3(ty),r.setRGB(sr.x,sr.y,sr.z).convertLinearToSRGB()}const sy={[sa]:r=>r,[xi]:r=>r.convertSRGBToLinear(),[Dm]:iy},oy={[sa]:r=>r,[xi]:r=>r.convertLinearToSRGB(),[Dm]:ry},nn={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return sa},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=sy[e],i=oy[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let hs;class Im{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hs===void 0&&(hs=Pl("canvas")),hs.width=e.width,hs.height=e.height;const n=hs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ws(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ws(t[n]/255)*255):t[n]=Ws(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Fm{constructor(e=null){this.isSource=!0,this.uuid=da(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Dc(i[a].image)):s.push(Dc(i[a]))}else s=Dc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Dc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Im.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ay=0;class zn extends mo{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,n=li,i=li,s=Xn,a=ia,o=ci,l=rs,c=zn.DEFAULT_ANISOTROPY,u=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=da(),this.name="",this.source=new Fm(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new hn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ru:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case Iu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ru:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case Iu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Pm;zn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,n=0,i=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,y=(p+1)/2,w=(_+1)/2,P=(u+f)/4,A=(h+d)/4,v=(g+m)/4;return x>y&&x>w?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=P/n,s=A/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=P/i,s=v/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=A/s,i=v/s),this.set(n,i,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-d)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class os extends mo{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new zn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Om extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ly extends zn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ln,this.minFilter=ln,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ma{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<i&&(i=f),u>s&&(s=u),h>a&&(a=h),f>o&&(o=f)}return this.min.set(t,n,i),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let a=0,o=s.count;a<o;a++)Pr.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Pr)}else n.boundingBox===null&&n.computeBoundingBox(),Rc.copy(n.boundingBox),Rc.applyMatrix4(e.matrixWorld),this.union(Rc);const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pr),Pr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vo),Ta.subVectors(this.max,vo),ds.subVectors(e.a,vo),ps.subVectors(e.b,vo),ms.subVectors(e.c,vo),Ji.subVectors(ps,ds),Qi.subVectors(ms,ps),Lr.subVectors(ds,ms);let t=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-Lr.z,Lr.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,Lr.z,0,-Lr.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-Lr.y,Lr.x,0];return!Ic(t,ds,ps,ms,Ta)||(t=[1,0,0,0,1,0,0,0,1],!Ic(t,ds,ps,ms,Ta))?!1:(Ea.crossVectors(Ji,Qi),t=[Ea.x,Ea.y,Ea.z],Ic(t,ds,ps,ms,Ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ri=[new $,new $,new $,new $,new $,new $,new $,new $],Pr=new $,Rc=new ma,ds=new $,ps=new $,ms=new $,Ji=new $,Qi=new $,Lr=new $,vo=new $,Ta=new $,Ea=new $,Dr=new $;function Ic(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Dr.fromArray(r,s);const o=i.x*Math.abs(Dr.x)+i.y*Math.abs(Dr.y)+i.z*Math.abs(Dr.z),l=e.dot(Dr),c=t.dot(Dr),u=n.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const cy=new ma,yo=new $,Fc=new $;class tc{constructor(e=new $,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cy.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yo.subVectors(e,this.center);const t=yo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(yo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yo.copy(e.center).add(Fc)),this.expandByPoint(yo.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ii=new $,Oc=new $,Ca=new $,er=new $,Nc=new $,Aa=new $,zc=new $;class Nm{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ii)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ii.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ii.copy(this.origin).addScaledVector(this.direction,t),Ii.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Oc.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),er.copy(this.origin).sub(Oc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),o=er.dot(this.direction),l=-er.dot(Ca),c=er.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Oc).addScaledVector(Ca,f),p}intersectSphere(e,t){Ii.subVectors(e.center,this.origin);const n=Ii.dot(this.direction),i=Ii.dot(Ii)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ii)!==null}intersectTriangle(e,t,n,i,s){Nc.subVectors(t,e),Aa.subVectors(n,e),zc.crossVectors(Nc,Aa);let a=this.direction.dot(zc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;er.subVectors(this.origin,e);const l=o*this.direction.dot(Aa.crossVectors(er,Aa));if(l<0)return null;const c=o*this.direction.dot(Nc.cross(er));if(c<0||l+c>a)return null;const u=-o*er.dot(zc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,a,o,l,c,u,h,f,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,d=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-d*c,t[9]=-o*l,t[2]=d-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f+d*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=d+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f-d*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=d-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,d=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,d=o*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,d=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uy,e,fy)}lookAt(e,t,n){const i=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),tr.crossVectors(n,En),tr.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),tr.crossVectors(n,En)),tr.normalize(),Pa.crossVectors(En,tr),i[0]=tr.x,i[4]=Pa.x,i[8]=En.x,i[1]=tr.y,i[5]=Pa.y,i[9]=En.y,i[2]=tr.z,i[6]=Pa.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],S=n[3],x=n[7],y=n[11],w=n[15],P=i[0],A=i[4],v=i[8],M=i[12],D=i[1],W=i[5],B=i[9],U=i[13],O=i[2],q=i[6],j=i[10],X=i[14],k=i[3],se=i[7],L=i[11],_e=i[15];return s[0]=a*P+o*D+l*O+c*k,s[4]=a*A+o*W+l*q+c*se,s[8]=a*v+o*B+l*j+c*L,s[12]=a*M+o*U+l*X+c*_e,s[1]=u*P+h*D+f*O+p*k,s[5]=u*A+h*W+f*q+p*se,s[9]=u*v+h*B+f*j+p*L,s[13]=u*M+h*U+f*X+p*_e,s[2]=g*P+d*D+m*O+_*k,s[6]=g*A+d*W+m*q+_*se,s[10]=g*v+d*B+m*j+_*L,s[14]=g*M+d*U+m*X+_*_e,s[3]=S*P+x*D+y*O+w*k,s[7]=S*A+x*W+y*q+w*se,s[11]=S*v+x*B+y*j+w*L,s[15]=S*M+x*U+y*X+w*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+s*l*h-i*c*h-s*o*f+n*c*f+i*o*p-n*l*p)+d*(+t*l*p-t*c*f+s*a*f-i*a*p+i*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+_*(-i*o*u-t*l*h+t*o*f+i*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],S=h*m*c-d*f*c+d*l*p-o*m*p-h*l*_+o*f*_,x=g*f*c-u*m*c-g*l*p+a*m*p+u*l*_-a*f*_,y=u*d*c-g*h*c+g*o*p-a*d*p-u*o*_+a*h*_,w=g*h*l-u*d*l-g*o*f+a*d*f+u*o*m-a*h*m,P=t*S+n*x+i*y+s*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=S*A,e[1]=(d*f*s-h*m*s-d*i*p+n*m*p+h*i*_-n*f*_)*A,e[2]=(o*m*s-d*l*s+d*i*c-n*m*c-o*i*_+n*l*_)*A,e[3]=(h*l*s-o*f*s-h*i*c+n*f*c+o*i*p-n*l*p)*A,e[4]=x*A,e[5]=(u*m*s-g*f*s+g*i*p-t*m*p-u*i*_+t*f*_)*A,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*_-t*l*_)*A,e[7]=(a*f*s-u*l*s+u*i*c-t*f*c-a*i*p+t*l*p)*A,e[8]=y*A,e[9]=(g*h*s-u*d*s-g*n*p+t*d*p+u*n*_-t*h*_)*A,e[10]=(a*d*s-g*o*s+g*n*c-t*d*c-a*n*_+t*o*_)*A,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*A,e[12]=w*A,e[13]=(u*d*i-g*h*i+g*n*f-t*d*f-u*n*m+t*h*m)*A,e[14]=(g*o*i-a*d*i-g*n*l+t*d*l+a*n*m-t*o*m)*A,e[15]=(a*h*i-u*o*i+u*n*l-t*h*l-a*n*f+t*o*f)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,d=a*u,m=a*h,_=o*h,S=l*c,x=l*u,y=l*h,w=n.x,P=n.y,A=n.z;return i[0]=(1-(d+_))*w,i[1]=(p+y)*w,i[2]=(g-x)*w,i[3]=0,i[4]=(p-y)*P,i[5]=(1-(f+_))*P,i[6]=(m+S)*P,i[7]=0,i[8]=(g+x)*A,i[9]=(m-S)*A,i[10]=(1-(f+d))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=gs.set(i[0],i[1],i[2]).length();const a=gs.set(i[4],i[5],i[6]).length(),o=gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],ei.copy(this);const c=1/s,u=1/a,h=1/o;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=u,ei.elements[5]*=u,ei.elements[6]*=u,ei.elements[8]*=h,ei.elements[9]*=h,ei.elements[10]*=h,t.setFromRotationMatrix(ei),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(n-i),u=(t+e)/(t-e),h=(n+i)/(n-i),f=-(a+s)/(a-s),p=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=h,o[13]=0,o[2]=0,o[6]=0,o[10]=f,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,n,i,s,a){const o=this.elements,l=1/(t-e),c=1/(n-i),u=1/(a-s),h=(t+e)*l,f=(n+i)*c,p=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-h,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-f,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gs=new $,ei=new kt,uy=new $(0,0,0),fy=new $(1,1,1),tr=new $,Pa=new $,En=new $,pd=new kt,md=new pa;class nc{constructor(e=0,t=0,n=0,i=nc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(In(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-In(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(In(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-In(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(In(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-In(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return md.setFromEuler(this),this.setFromQuaternion(md,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nc.DEFAULT_ORDER="XYZ";class zm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hy=0;const gd=new $,_s=new pa,Fi=new kt,La=new $,bo=new $,dy=new $,py=new pa,_d=new $(1,0,0),xd=new $(0,1,0),vd=new $(0,0,1),my={type:"added"},yd={type:"removed"};class _n extends mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new $,t=new nc,n=new pa,i=new $(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new hn}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new zm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(_d,e)}rotateY(e){return this.rotateOnAxis(xd,e)}rotateZ(e){return this.rotateOnAxis(vd,e)}translateOnAxis(e,t){return gd.copy(e).applyQuaternion(this.quaternion),this.position.add(gd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_d,e)}translateY(e){return this.translateOnAxis(xd,e)}translateZ(e){return this.translateOnAxis(vd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?La.copy(e):La.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(bo,La,this.up):Fi.lookAt(La,bo,this.up),this.quaternion.setFromRotationMatrix(Fi),i&&(Fi.extractRotation(i.matrixWorld),_s.setFromRotationMatrix(Fi),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(my)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(yd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,e,dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_n.DEFAULT_UP=new $(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new $,Oi=new $,Uc=new $,Ni=new $,xs=new $,vs=new $,bd=new $,Bc=new $,kc=new $,Gc=new $;class Si{constructor(e=new $,t=new $,n=new $){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ti.subVectors(e,t),i.cross(ti);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ti.subVectors(i,t),Oi.subVectors(n,t),Uc.subVectors(e,t);const a=ti.dot(ti),o=ti.dot(Oi),l=ti.dot(Uc),c=Oi.dot(Oi),u=Oi.dot(Uc),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ni),Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getUV(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,Ni),l.set(0,0),l.addScaledVector(s,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l}static isFrontFacing(e,t,n,i){return ti.subVectors(n,t),Oi.subVectors(e,t),ti.cross(Oi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ti.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Si.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;xs.subVectors(i,n),vs.subVectors(s,n),Bc.subVectors(e,n);const l=xs.dot(Bc),c=vs.dot(Bc);if(l<=0&&c<=0)return t.copy(n);kc.subVectors(e,i);const u=xs.dot(kc),h=vs.dot(kc);if(u>=0&&h<=u)return t.copy(i);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(xs,a);Gc.subVectors(e,s);const p=xs.dot(Gc),g=vs.dot(Gc);if(g>=0&&p<=g)return t.copy(s);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(vs,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return bd.subVectors(s,i),o=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(bd,o);const _=1/(m+d+f);return a=d*_,o=f*_,t.copy(n).addScaledVector(xs,a).addScaledVector(vs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gy=0;class ga extends mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=da(),this.name="",this.type="Material",this.blending=Vs,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Em,this.blendDst=Cm,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Pu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ec,this.stencilZFail=Ec,this.stencilZPass=Ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(n.blending=this.blending),this.side!==yr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Um={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={h:0,s:0,l:0},Da={h:0,s:0,l:0};function Vc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nn.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=nn.workingColorSpace){return this.r=e,this.g=t,this.b=n,nn.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=nn.workingColorSpace){if(e=Qv(e,1),t=In(t,0,1),n=In(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Vc(a,s,e+1/3),this.g=Vc(a,s,e),this.b=Vc(a,s,e-1/3)}return nn.toWorkingColorSpace(this,i),this}setStyle(e,t=xi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,nn.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,nn.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,nn.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,nn.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const n=Um[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return nn.fromWorkingColorSpace(Yt.copy(this),e),In(Yt.r*255,0,255)<<16^In(Yt.g*255,0,255)<<8^In(Yt.b*255,0,255)<<0}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nn.workingColorSpace){nn.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,i=Yt.g,s=Yt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=nn.workingColorSpace){return nn.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=xi){nn.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,i=Yt.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(ni),ni.h+=e,ni.s+=t,ni.l+=n,this.setHSL(ni.h,ni.s,ni.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ni),e.getHSL(Da);const n=Cc(ni.h,Da.h,t),i=Cc(ni.s,Da.s,t),s=Cc(ni.l,Da.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new dt;dt.NAMES=Um;class Bm extends ga{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Am,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new $,Ra=new pt;class Ei{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=cd,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array),i=Tn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),n=Tn(n,this.array),i=Tn(i,this.array),s=Tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class km extends Ei{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gm extends Ei{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ci extends Ei{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _y=0;const Gn=new kt,Hc=new _n,ys=new $,Cn=new ma,Mo=new ma,zt=new $;class Ki extends mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=da(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rm(e)?Gm:km)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new hn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,t,n){return Gn.makeTranslation(e,t,n),this.applyMatrix4(Gn),this}scale(e,t,n){return Gn.makeScale(e,t,n),this.applyMatrix4(Gn),this}lookAt(e){return Hc.lookAt(e),Hc.updateMatrix(),this.applyMatrix4(Hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ci(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new $,1/0);return}if(e){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Mo.setFromBufferAttribute(o),this.morphTargetsRelative?(zt.addVectors(Cn.min,Mo.min),Cn.expandByPoint(zt),zt.addVectors(Cn.max,Mo.max),Cn.expandByPoint(zt)):(Cn.expandByPoint(Mo.min),Cn.expandByPoint(Mo.max))}Cn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)zt.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(e,c),zt.add(ys)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,a=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let D=0;D<o;D++)c[D]=new $,u[D]=new $;const h=new $,f=new $,p=new $,g=new pt,d=new pt,m=new pt,_=new $,S=new $;function x(D,W,B){h.fromArray(i,D*3),f.fromArray(i,W*3),p.fromArray(i,B*3),g.fromArray(a,D*2),d.fromArray(a,W*2),m.fromArray(a,B*2),f.sub(h),p.sub(h),d.sub(g),m.sub(g);const U=1/(d.x*m.y-m.x*d.y);isFinite(U)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(U),S.copy(p).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(U),c[D].add(_),c[W].add(_),c[B].add(_),u[D].add(S),u[W].add(S),u[B].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let D=0,W=y.length;D<W;++D){const B=y[D],U=B.start,O=B.count;for(let q=U,j=U+O;q<j;q+=3)x(n[q+0],n[q+1],n[q+2])}const w=new $,P=new $,A=new $,v=new $;function M(D){A.fromArray(s,D*3),v.copy(A);const W=c[D];w.copy(W),w.sub(A.multiplyScalar(A.dot(W))).normalize(),P.crossVectors(v,W);const U=P.dot(u[D])<0?-1:1;l[D*4]=w.x,l[D*4+1]=w.y,l[D*4+2]=w.z,l[D*4+3]=U}for(let D=0,W=y.length;D<W;++D){const B=y[D],U=B.start,O=B.count;for(let q=U,j=U+O;q<j;q+=3)M(n[q+0]),M(n[q+1]),M(n[q+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ei(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const i=new $,s=new $,a=new $,o=new $,l=new $,c=new $,u=new $,h=new $;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),d=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){o.isInterleavedBufferAttribute?p=l[d]*o.data.stride+o.offset:p=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new Ei(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ki,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Md=new kt,_i=new Nm,Ia=new tc,Sd=new $,So=new $,wo=new $,To=new $,Wc=new $,Fa=new $,Oa=new pt,Na=new pt,za=new pt,Xc=new $,Ua=new $;class Gi extends _n{constructor(e=new Ki,t=new Bm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(Wc.fromBufferAttribute(h,e),a?Fa.addScaledVector(Wc,u):Fa.addScaledVector(Wc.sub(t),u))}t.add(Fa)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ia.copy(n.boundingSphere),Ia.applyMatrix4(s),_i.copy(e.ray).recast(e.near),Ia.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Ia,Sd)===null||_i.origin.distanceToSquared(Sd)>(e.far-e.near)**2))||(Md.copy(s).invert(),_i.copy(e.ray).applyMatrix4(Md),n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1))return;let a;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=i[d.materialIndex],_=Math.max(d.start,f.start),S=Math.min(o.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,y=S;x<y;x+=3){const w=o.getX(x),P=o.getX(x+1),A=o.getX(x+2);a=Ba(this,m,e,_i,c,u,w,P,A),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const p=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=o.getX(d),S=o.getX(d+1),x=o.getX(d+2);a=Ba(this,i,e,_i,c,u,_,S,x),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=i[d.materialIndex],_=Math.max(d.start,f.start),S=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let x=_,y=S;x<y;x+=3){const w=x,P=x+1,A=x+2;a=Ba(this,m,e,_i,c,u,w,P,A),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=d,S=d+1,x=d+2;a=Ba(this,i,e,_i,c,u,_,S,x),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}}function xy(r,e,t,n,i,s,a,o){let l;if(e.side===Nn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===yr,o),l===null)return null;Ua.copy(o),Ua.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ua);return c<t.near||c>t.far?null:{distance:c,point:Ua.clone(),object:r}}function Ba(r,e,t,n,i,s,a,o,l){r.getVertexPosition(a,So),r.getVertexPosition(o,wo),r.getVertexPosition(l,To);const c=xy(r,e,t,n,So,wo,To,Xc);if(c){i&&(Oa.fromBufferAttribute(i,a),Na.fromBufferAttribute(i,o),za.fromBufferAttribute(i,l),c.uv=Si.getUV(Xc,So,wo,To,Oa,Na,za,new pt)),s&&(Oa.fromBufferAttribute(s,a),Na.fromBufferAttribute(s,o),za.fromBufferAttribute(s,l),c.uv2=Si.getUV(Xc,So,wo,To,Oa,Na,za,new pt));const u={a,b:o,c:l,normal:new $,materialIndex:0};Si.getNormal(So,wo,To,u.normal),c.face=u}return c}class go extends Ki{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ci(c,3)),this.setAttribute("normal",new Ci(u,3)),this.setAttribute("uv",new Ci(h,2));function g(d,m,_,S,x,y,w,P,A,v,M){const D=y/A,W=w/v,B=y/2,U=w/2,O=P/2,q=A+1,j=v+1;let X=0,k=0;const se=new $;for(let L=0;L<j;L++){const _e=L*W-U;for(let V=0;V<q;V++){const le=V*D-B;se[d]=le*S,se[m]=_e*x,se[_]=O,c.push(se.x,se.y,se.z),se[d]=0,se[m]=0,se[_]=P>0?1:-1,u.push(se.x,se.y,se.z),h.push(V/A),h.push(1-L/v),X+=1}}for(let L=0;L<v;L++)for(let _e=0;_e<A;_e++){const V=f+_e+q*L,le=f+_e+q*(L+1),fe=f+(_e+1)+q*(L+1),H=f+(_e+1)+q*L;l.push(V,le,H),l.push(le,fe,H),k+=6}o.addGroup(p,k,M),p+=k,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function no(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function on(r){const e={};for(let t=0;t<r.length;t++){const n=no(r[t]);for(const i in n)e[i]=n[i]}return e}function vy(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Vm(r){return r.getRenderTarget()===null&&r.outputEncoding===ht?xi:sa}const yy={clone:no,merge:on};var by=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,My=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class br extends ga{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=by,this.fragmentShader=My,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=no(e.uniforms),this.uniformsGroups=vy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Hm extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qn extends Hm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fd*2*Math.atan(Math.tan(hl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bs=-90,Ms=1;class Sy extends _n{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new qn(bs,Ms,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new qn(bs,Ms,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new qn(bs,Ms,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new qn(bs,Ms,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new qn(bs,Ms,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new qn(bs,Ms,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=Wi,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Wm extends zn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Qs,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wy extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new go(5,5,5),s=new br({name:"CubemapFromEquirect",uniforms:no(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nn,blending:pr});s.uniforms.tEquirect.value=t;const a=new Gi(i,s),o=t.minFilter;return t.minFilter===ia&&(t.minFilter=Xn),new Sy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const qc=new $,Ty=new $,Ey=new hn;class Nr{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qc.subVectors(n,t).cross(Ty.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ey.getNormalMatrix(e),i=this.coplanarPoint(qc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ss=new tc,ka=new $;class Xm{constructor(e=new Nr,t=new Nr,n=new Nr,i=new Nr,s=new Nr,a=new Nr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],a=n[2],o=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],S=n[14],x=n[15];return t[0].setComponents(o-i,h-l,d-f,x-m).normalize(),t[1].setComponents(o+i,h+l,d+f,x+m).normalize(),t[2].setComponents(o+s,h+c,d+p,x+_).normalize(),t[3].setComponents(o-s,h-c,d-p,x-_).normalize(),t[4].setComponents(o-a,h-u,d-g,x-S).normalize(),t[5].setComponents(o+a,h+u,d+g,x+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSprite(e){return Ss.center.set(0,0,0),Ss.radius=.7071067811865476,Ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ss)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ka.x=i.normal.x>0?e.max.x:e.min.x,ka.y=i.normal.y>0?e.max.y:e.min.y,ka.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qm(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Cy(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,u){const h=c.array,f=c.usage,p=r.createBuffer();r.bindBuffer(u,p),r.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;r.bindBuffer(h,c),p.count===-1?r.bufferSubData(h,0,f):(t?r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):r.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(r.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,i(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class ic extends Ki{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const S=_*f-a;for(let x=0;x<c;x++){const y=x*h-s;g.push(y,-S,0),d.push(0,0,1),m.push(x/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let S=0;S<o;S++){const x=S+c*_,y=S+c*(_+1),w=S+1+c*(_+1),P=S+1+c*_;p.push(x,y,P),p.push(y,w,P)}this.setIndex(p),this.setAttribute("position",new Ci(g,3)),this.setAttribute("normal",new Ci(d,3)),this.setAttribute("uv",new Ci(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ic(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ay=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Py=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ly=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ry=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fy="vec3 transformed = vec3( position );",Oy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ny=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,zy=`#ifdef USE_IRIDESCENCE
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
#endif`,Uy=`#ifdef USE_BUMPMAP
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
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yy=`#define PI 3.141592653589793
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
}`,$y=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",tb=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nb=`#ifdef USE_ENVMAP
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
#endif`,ib=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rb=`#ifdef USE_ENVMAP
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
#endif`,sb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ob=`#ifdef USE_ENVMAP
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
#endif`,ab=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ub=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fb=`#ifdef USE_GRADIENTMAP
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
}`,hb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,db=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gb=`uniform bool receiveShadow;
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
#endif`,_b=`#if defined( USE_ENVMAP )
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
#endif`,xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mb=`PhysicalMaterial material;
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
#endif`,Sb=`struct PhysicalMaterial {
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
}`,wb=`
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
#endif`,Tb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Cb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ab=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Lb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Db=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ib=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ob=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ub=`#ifdef USE_MORPHNORMALS
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
#endif`,Bb=`#ifdef USE_MORPHTARGETS
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
#endif`,kb=`#ifdef USE_MORPHTARGETS
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
#endif`,Gb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Vb=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,Hb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qb=`#ifdef USE_NORMALMAP
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
#endif`,Yb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,$b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Kb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Qb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,nM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,iM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,lM=`float getShadowMask() {
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
}`,cM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,uM=`#ifdef USE_SKINNING
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
#endif`,fM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hM=`#ifdef USE_SKINNING
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
#endif`,dM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_M=`#ifdef USE_TRANSMISSION
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
#endif`,xM=`#ifdef USE_TRANSMISSION
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
#endif`,vM=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,yM=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,bM=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,MM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,SM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,wM=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,TM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CM=`uniform sampler2D t2D;
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
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,RM=`#include <common>
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
}`,IM=`#if DEPTH_PACKING == 3200
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
}`,FM=`#define DISTANCE
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
}`,OM=`#define DISTANCE
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
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,UM=`uniform float scale;
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
}`,BM=`uniform vec3 diffuse;
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
}`,kM=`#include <common>
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
}`,GM=`uniform vec3 diffuse;
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
}`,VM=`#define LAMBERT
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
}`,HM=`#define LAMBERT
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
}`,WM=`#define MATCAP
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
}`,XM=`#define MATCAP
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
}`,qM=`#define NORMAL
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
}`,YM=`#define NORMAL
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
}`,$M=`#define PHONG
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
}`,jM=`#define PHONG
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
}`,KM=`#define STANDARD
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
}`,ZM=`#define STANDARD
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
}`,JM=`#define TOON
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
}`,QM=`#define TOON
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
}`,eS=`uniform float size;
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
}`,tS=`uniform vec3 diffuse;
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
}`,nS=`#include <common>
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
}`,iS=`uniform vec3 color;
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
}`,rS=`uniform float rotation;
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
}`,sS=`uniform vec3 diffuse;
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
}`,Ye={alphamap_fragment:Ay,alphamap_pars_fragment:Py,alphatest_fragment:Ly,alphatest_pars_fragment:Dy,aomap_fragment:Ry,aomap_pars_fragment:Iy,begin_vertex:Fy,beginnormal_vertex:Oy,bsdfs:Ny,iridescence_fragment:zy,bumpmap_pars_fragment:Uy,clipping_planes_fragment:By,clipping_planes_pars_fragment:ky,clipping_planes_pars_vertex:Gy,clipping_planes_vertex:Vy,color_fragment:Hy,color_pars_fragment:Wy,color_pars_vertex:Xy,color_vertex:qy,common:Yy,cube_uv_reflection_fragment:$y,defaultnormal_vertex:jy,displacementmap_pars_vertex:Ky,displacementmap_vertex:Zy,emissivemap_fragment:Jy,emissivemap_pars_fragment:Qy,encodings_fragment:eb,encodings_pars_fragment:tb,envmap_fragment:nb,envmap_common_pars_fragment:ib,envmap_pars_fragment:rb,envmap_pars_vertex:sb,envmap_physical_pars_fragment:_b,envmap_vertex:ob,fog_vertex:ab,fog_pars_vertex:lb,fog_fragment:cb,fog_pars_fragment:ub,gradientmap_pars_fragment:fb,lightmap_fragment:hb,lightmap_pars_fragment:db,lights_lambert_fragment:pb,lights_lambert_pars_fragment:mb,lights_pars_begin:gb,lights_toon_fragment:xb,lights_toon_pars_fragment:vb,lights_phong_fragment:yb,lights_phong_pars_fragment:bb,lights_physical_fragment:Mb,lights_physical_pars_fragment:Sb,lights_fragment_begin:wb,lights_fragment_maps:Tb,lights_fragment_end:Eb,logdepthbuf_fragment:Cb,logdepthbuf_pars_fragment:Ab,logdepthbuf_pars_vertex:Pb,logdepthbuf_vertex:Lb,map_fragment:Db,map_pars_fragment:Rb,map_particle_fragment:Ib,map_particle_pars_fragment:Fb,metalnessmap_fragment:Ob,metalnessmap_pars_fragment:Nb,morphcolor_vertex:zb,morphnormal_vertex:Ub,morphtarget_pars_vertex:Bb,morphtarget_vertex:kb,normal_fragment_begin:Gb,normal_fragment_maps:Vb,normal_pars_fragment:Hb,normal_pars_vertex:Wb,normal_vertex:Xb,normalmap_pars_fragment:qb,clearcoat_normal_fragment_begin:Yb,clearcoat_normal_fragment_maps:$b,clearcoat_pars_fragment:jb,iridescence_pars_fragment:Kb,output_fragment:Zb,packing:Jb,premultiplied_alpha_fragment:Qb,project_vertex:eM,dithering_fragment:tM,dithering_pars_fragment:nM,roughnessmap_fragment:iM,roughnessmap_pars_fragment:rM,shadowmap_pars_fragment:sM,shadowmap_pars_vertex:oM,shadowmap_vertex:aM,shadowmask_pars_fragment:lM,skinbase_vertex:cM,skinning_pars_vertex:uM,skinning_vertex:fM,skinnormal_vertex:hM,specularmap_fragment:dM,specularmap_pars_fragment:pM,tonemapping_fragment:mM,tonemapping_pars_fragment:gM,transmission_fragment:_M,transmission_pars_fragment:xM,uv_pars_fragment:vM,uv_pars_vertex:yM,uv_vertex:bM,uv2_pars_fragment:MM,uv2_pars_vertex:SM,uv2_vertex:wM,worldpos_vertex:TM,background_vert:EM,background_frag:CM,backgroundCube_vert:AM,backgroundCube_frag:PM,cube_vert:LM,cube_frag:DM,depth_vert:RM,depth_frag:IM,distanceRGBA_vert:FM,distanceRGBA_frag:OM,equirect_vert:NM,equirect_frag:zM,linedashed_vert:UM,linedashed_frag:BM,meshbasic_vert:kM,meshbasic_frag:GM,meshlambert_vert:VM,meshlambert_frag:HM,meshmatcap_vert:WM,meshmatcap_frag:XM,meshnormal_vert:qM,meshnormal_frag:YM,meshphong_vert:$M,meshphong_frag:jM,meshphysical_vert:KM,meshphysical_frag:ZM,meshtoon_vert:JM,meshtoon_frag:QM,points_vert:eS,points_frag:tS,shadow_vert:nS,shadow_frag:iS,sprite_vert:rS,sprite_frag:sS},be={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new hn},uv2Transform:{value:new hn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new hn}}},bi={basic:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new dt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:on([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:on([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:on([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new dt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:on([be.points,be.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:on([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:on([be.common,be.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:on([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:on([be.sprite,be.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new hn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:on([be.common,be.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:on([be.lights,be.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};bi.physical={uniforms:on([bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new pt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ga={r:0,b:0,g:0};function oS(r,e,t,n,i,s,a){const o=new dt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,_){let S=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const y=r.xr,w=y.getSession&&y.getSession();w&&w.environmentBlendMode==="additive"&&(x=null),x===null?d(o,l):x&&x.isColor&&(d(x,1),S=!0),(r.autoClear||S)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ec)?(u===void 0&&(u=new Gi(new go(1,1,1),new br({name:"BackgroundCubeMaterial",uniforms:no(bi.backgroundCube.uniforms),vertexShader:bi.backgroundCube.vertexShader,fragmentShader:bi.backgroundCube.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=x.encoding!==ht,(h!==x||f!==x.version||p!==r.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,p=r.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Gi(new ic(2,2),new br({name:"BackgroundMaterial",uniforms:no(bi.background.uniforms),vertexShader:bi.background.vertexShader,fragmentShader:bi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=x.encoding!==ht,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(Ga,Vm(r)),n.buffers.color.setClear(Ga.r,Ga.g,Ga.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(o,l)},render:g}}function aS(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function h(O,q,j,X,k){let se=!1;if(a){const L=d(X,j,q);c!==L&&(c=L,p(c.object)),se=_(O,X,j,k),se&&S(O,X,j,k)}else{const L=q.wireframe===!0;(c.geometry!==X.id||c.program!==j.id||c.wireframe!==L)&&(c.geometry=X.id,c.program=j.id,c.wireframe=L,se=!0)}k!==null&&t.update(k,34963),(se||u)&&(u=!1,v(O,q,j,X),k!==null&&r.bindBuffer(34963,t.get(k).buffer))}function f(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(O){return n.isWebGL2?r.bindVertexArray(O):s.bindVertexArrayOES(O)}function g(O){return n.isWebGL2?r.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function d(O,q,j){const X=j.wireframe===!0;let k=o[O.id];k===void 0&&(k={},o[O.id]=k);let se=k[q.id];se===void 0&&(se={},k[q.id]=se);let L=se[X];return L===void 0&&(L=m(f()),se[X]=L),L}function m(O){const q=[],j=[],X=[];for(let k=0;k<i;k++)q[k]=0,j[k]=0,X[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:j,attributeDivisors:X,object:O,attributes:{},index:null}}function _(O,q,j,X){const k=c.attributes,se=q.attributes;let L=0;const _e=j.getAttributes();for(const V in _e)if(_e[V].location>=0){const fe=k[V];let H=se[V];if(H===void 0&&(V==="instanceMatrix"&&O.instanceMatrix&&(H=O.instanceMatrix),V==="instanceColor"&&O.instanceColor&&(H=O.instanceColor)),fe===void 0||fe.attribute!==H||H&&fe.data!==H.data)return!0;L++}return c.attributesNum!==L||c.index!==X}function S(O,q,j,X){const k={},se=q.attributes;let L=0;const _e=j.getAttributes();for(const V in _e)if(_e[V].location>=0){let fe=se[V];fe===void 0&&(V==="instanceMatrix"&&O.instanceMatrix&&(fe=O.instanceMatrix),V==="instanceColor"&&O.instanceColor&&(fe=O.instanceColor));const H={};H.attribute=fe,fe&&fe.data&&(H.data=fe.data),k[V]=H,L++}c.attributes=k,c.attributesNum=L,c.index=X}function x(){const O=c.newAttributes;for(let q=0,j=O.length;q<j;q++)O[q]=0}function y(O){w(O,0)}function w(O,q){const j=c.newAttributes,X=c.enabledAttributes,k=c.attributeDivisors;j[O]=1,X[O]===0&&(r.enableVertexAttribArray(O),X[O]=1),k[O]!==q&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,q),k[O]=q)}function P(){const O=c.newAttributes,q=c.enabledAttributes;for(let j=0,X=q.length;j<X;j++)q[j]!==O[j]&&(r.disableVertexAttribArray(j),q[j]=0)}function A(O,q,j,X,k,se){n.isWebGL2===!0&&(j===5124||j===5125)?r.vertexAttribIPointer(O,q,j,k,se):r.vertexAttribPointer(O,q,j,X,k,se)}function v(O,q,j,X){if(n.isWebGL2===!1&&(O.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const k=X.attributes,se=j.getAttributes(),L=q.defaultAttributeValues;for(const _e in se){const V=se[_e];if(V.location>=0){let le=k[_e];if(le===void 0&&(_e==="instanceMatrix"&&O.instanceMatrix&&(le=O.instanceMatrix),_e==="instanceColor"&&O.instanceColor&&(le=O.instanceColor)),le!==void 0){const fe=le.normalized,H=le.itemSize,me=t.get(le);if(me===void 0)continue;const xe=me.buffer,ye=me.type,we=me.bytesPerElement;if(le.isInterleavedBufferAttribute){const Ae=le.data,ze=Ae.stride,C=le.offset;if(Ae.isInstancedInterleavedBuffer){for(let R=0;R<V.locationSize;R++)w(V.location+R,Ae.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let R=0;R<V.locationSize;R++)y(V.location+R);r.bindBuffer(34962,xe);for(let R=0;R<V.locationSize;R++)A(V.location+R,H/V.locationSize,ye,fe,ze*we,(C+H/V.locationSize*R)*we)}else{if(le.isInstancedBufferAttribute){for(let Ae=0;Ae<V.locationSize;Ae++)w(V.location+Ae,le.meshPerAttribute);O.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ae=0;Ae<V.locationSize;Ae++)y(V.location+Ae);r.bindBuffer(34962,xe);for(let Ae=0;Ae<V.locationSize;Ae++)A(V.location+Ae,H/V.locationSize,ye,fe,H*we,H/V.locationSize*Ae*we)}}else if(L!==void 0){const fe=L[_e];if(fe!==void 0)switch(fe.length){case 2:r.vertexAttrib2fv(V.location,fe);break;case 3:r.vertexAttrib3fv(V.location,fe);break;case 4:r.vertexAttrib4fv(V.location,fe);break;default:r.vertexAttrib1fv(V.location,fe)}}}}P()}function M(){B();for(const O in o){const q=o[O];for(const j in q){const X=q[j];for(const k in X)g(X[k].object),delete X[k];delete q[j]}delete o[O]}}function D(O){if(o[O.id]===void 0)return;const q=o[O.id];for(const j in q){const X=q[j];for(const k in X)g(X[k].object),delete X[k];delete q[j]}delete o[O.id]}function W(O){for(const q in o){const j=o[q];if(j[O.id]===void 0)continue;const X=j[O.id];for(const k in X)g(X[k].object),delete X[k];delete j[O.id]}}function B(){U(),u=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:B,resetDefaultState:U,dispose:M,releaseStatesOfGeometry:D,releaseStatesOfProgram:W,initAttributes:x,enableAttribute:y,disableUnusedAttributes:P}}function lS(r,e,t,n){const i=n.isWebGL2;let s;function a(c){s=c}function o(c,u){r.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(i)f=r,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function cS(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(34930),f=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),d=r.getParameter(34921),m=r.getParameter(36347),_=r.getParameter(36348),S=r.getParameter(36349),x=f>0,y=a||e.has("OES_texture_float"),w=x&&y,P=a?r.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:P}}function uS(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Nr,o=new hn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||i;return i=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,d=h.clipIntersection,m=h.clipShadows,_=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,x=S*4;let y=_.clippingState||null;l.value=y,y=u(g,f,x,p);for(let w=0;w!==x;++w)y[w]=t[w];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const d=h!==null?h.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<_)&&(m=new Float32Array(_));for(let x=0,y=p;x!==d;++x,y+=4)a.copy(h[x]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function fS(r){let e=new WeakMap;function t(a,o){return o===Lu?a.mapping=Qs:o===Du&&(a.mapping=eo),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Lu||o===Du)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wy(l.height/2);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class hS extends Hm{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Is=4,wd=[.125,.215,.35,.446,.526,.582],Hr=20,Yc=new hS,Td=new dt;let $c=null;const zr=(1+Math.sqrt(5))/2,ws=1/zr,Ed=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,zr,ws),new $(0,zr,-ws),new $(ws,0,zr),new $(-ws,0,zr),new $(zr,ws,0),new $(-zr,ws,0)];class Cd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$c=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c),e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:ra,format:ci,encoding:ss,depthBuffer:!1},i=Ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ad(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dS(s)),this._blurMaterial=pS(s,e,t)}return i}_compileMaterial(e){const t=new Gi(this._lodPlanes[0],e);this._renderer.compile(t,Yc)}_sceneToCubeUV(e,t,n,i){const o=new qn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Td),u.toneMapping=Wi,u.autoClear=!1;const p=new Bm({name:"PMREM.Background",side:Nn,depthWrite:!1,depthTest:!1}),g=new Gi(new go,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(Td),d=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):S===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const x=this._cubeSize;Va(i,S*x,_>2?x:0,x,x),u.setRenderTarget(i),d&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Qs||e.mapping===eo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ld()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pd());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Gi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Yc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Ed[(i-1)%Ed.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Gi(this._lodPlanes[i],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Hr-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):Hr;m>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hr}`);const _=[];let S=0;for(let A=0;A<Hr;++A){const v=A/d,M=Math.exp(-v*v/2);_.push(M),A===0?S+=M:A<m&&(S+=2*M)}for(let A=0;A<_.length;A++)_[A]=_[A]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const y=this._sizeLods[i],w=3*y*(i>x-Is?i-x+Is:0),P=4*(this._cubeSize-y);Va(t,w,P,3*y,2*y),l.setRenderTarget(t),l.render(h,Yc)}}function dS(r){const e=[],t=[],n=[];let i=r;const s=r-Is+1+wd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-Is?l=wd[a-r+Is-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,d=3,m=2,_=1,S=new Float32Array(d*g*p),x=new Float32Array(m*g*p),y=new Float32Array(_*g*p);for(let P=0;P<p;P++){const A=P%3*2/3-1,v=P>2?0:-1,M=[A,v,0,A+2/3,v,0,A+2/3,v+1,0,A,v,0,A+2/3,v+1,0,A,v+1,0];S.set(M,d*g*P),x.set(f,m*g*P);const D=[P,P,P,P,P,P];y.set(D,_*g*P)}const w=new Ki;w.setAttribute("position",new Ei(S,d)),w.setAttribute("uv",new Ei(x,m)),w.setAttribute("faceIndex",new Ei(y,_)),e.push(w),i>Is&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ad(r,e,t){const n=new os(r,e,t);return n.texture.mapping=ec,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function pS(r,e,t){const n=new Float32Array(Hr),i=new $(0,1,0);return new br({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Df(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Pd(){return new br({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Df(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Ld(){return new br({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Df(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Df(){return`

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
	`}function mS(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Lu||l===Du,u=l===Qs||l===eo;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Cd(r)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new Cd(r));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function gS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _S(r,e,t,n){const i={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete i[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let d=0;if(p!==null){const S=p.array;d=p.version;for(let x=0,y=S.length;x<y;x+=3){const w=S[x+0],P=S[x+1],A=S[x+2];f.push(w,P,P,A,A,w)}}else{const S=g.array;d=g.version;for(let x=0,y=S.length/3-1;x<y;x+=3){const w=x+0,P=x+1,A=x+2;f.push(w,P,P,A,A,w)}}const m=new(Rm(f)?Gm:km)(f,1);m.version=d;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function xS(r,e,t,n){const i=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,p){r.drawElements(s,p,o,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let d,m;if(i)d=r,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,p,o,f*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function vS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function yS(r,e){return r[0]-e[0]}function bS(r,e){return Math.abs(e[1])-Math.abs(r[1])}function MS(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,a=new Wt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==d){let q=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",q)};var p=q;m!==void 0&&m.texture.dispose();const x=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],v=u.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),w===!0&&(M=3);let D=u.attributes.position.count*M,W=1;D>e.maxTextureSize&&(W=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const B=new Float32Array(D*W*4*d),U=new Om(B,D,W,d);U.type=qr,U.needsUpdate=!0;const O=M*4;for(let j=0;j<d;j++){const X=P[j],k=A[j],se=v[j],L=D*W*4*j;for(let _e=0;_e<X.count;_e++){const V=_e*O;x===!0&&(a.fromBufferAttribute(X,_e),B[L+V+0]=a.x,B[L+V+1]=a.y,B[L+V+2]=a.z,B[L+V+3]=0),y===!0&&(a.fromBufferAttribute(k,_e),B[L+V+4]=a.x,B[L+V+5]=a.y,B[L+V+6]=a.z,B[L+V+7]=0),w===!0&&(a.fromBufferAttribute(se,_e),B[L+V+8]=a.x,B[L+V+9]=a.y,B[L+V+10]=a.z,B[L+V+11]=se.itemSize===4?a.w:1)}}m={count:d,texture:U,size:new pt(D,W)},s.set(u,m),u.addEventListener("dispose",q)}let _=0;for(let x=0;x<f.length;x++)_+=f[x];const S=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(r,"morphTargetBaseInfluence",S),h.getUniforms().setValue(r,"morphTargetInfluences",f),h.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let y=0;y<g;y++)d[y]=[y,0];n[u.id]=d}for(let y=0;y<g;y++){const w=d[y];w[0]=y,w[1]=f[y]}d.sort(bS);for(let y=0;y<8;y++)y<g&&d[y][1]?(o[y][0]=d[y][0],o[y][1]=d[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(yS);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const w=o[y],P=w[0],A=w[1];P!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+y)!==m[P]&&u.setAttribute("morphTarget"+y,m[P]),_&&u.getAttribute("morphNormal"+y)!==_[P]&&u.setAttribute("morphNormal"+y,_[P]),i[y]=A,S+=A):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const x=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function SS(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Ym=new zn,$m=new Om,jm=new ly,Km=new Wm,Dd=[],Rd=[],Id=new Float32Array(16),Fd=new Float32Array(9),Od=new Float32Array(4);function _o(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Dd[i];if(s===void 0&&(s=new Float32Array(i),Dd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Ft(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ot(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function rc(r,e){let t=Rd[e];t===void 0&&(t=new Int32Array(e),Rd[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function wS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function TS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2fv(this.addr,e),Ot(t,e)}}function ES(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;r.uniform3fv(this.addr,e),Ot(t,e)}}function CS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4fv(this.addr,e),Ot(t,e)}}function AS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Od.set(n),r.uniformMatrix2fv(this.addr,!1,Od),Ot(t,n)}}function PS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Fd.set(n),r.uniformMatrix3fv(this.addr,!1,Fd),Ot(t,n)}}function LS(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Ft(t,n))return;Id.set(n),r.uniformMatrix4fv(this.addr,!1,Id),Ot(t,n)}}function DS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function RS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2iv(this.addr,e),Ot(t,e)}}function IS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;r.uniform3iv(this.addr,e),Ot(t,e)}}function FS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4iv(this.addr,e),Ot(t,e)}}function OS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function NS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;r.uniform2uiv(this.addr,e),Ot(t,e)}}function zS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;r.uniform3uiv(this.addr,e),Ot(t,e)}}function US(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;r.uniform4uiv(this.addr,e),Ot(t,e)}}function BS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Ym,i)}function kS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||jm,i)}function GS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Km,i)}function VS(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$m,i)}function HS(r){switch(r){case 5126:return wS;case 35664:return TS;case 35665:return ES;case 35666:return CS;case 35674:return AS;case 35675:return PS;case 35676:return LS;case 5124:case 35670:return DS;case 35667:case 35671:return RS;case 35668:case 35672:return IS;case 35669:case 35673:return FS;case 5125:return OS;case 36294:return NS;case 36295:return zS;case 36296:return US;case 35678:case 36198:case 36298:case 36306:case 35682:return BS;case 35679:case 36299:case 36307:return kS;case 35680:case 36300:case 36308:case 36293:return GS;case 36289:case 36303:case 36311:case 36292:return VS}}function WS(r,e){r.uniform1fv(this.addr,e)}function XS(r,e){const t=_o(e,this.size,2);r.uniform2fv(this.addr,t)}function qS(r,e){const t=_o(e,this.size,3);r.uniform3fv(this.addr,t)}function YS(r,e){const t=_o(e,this.size,4);r.uniform4fv(this.addr,t)}function $S(r,e){const t=_o(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function jS(r,e){const t=_o(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function KS(r,e){const t=_o(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function ZS(r,e){r.uniform1iv(this.addr,e)}function JS(r,e){r.uniform2iv(this.addr,e)}function QS(r,e){r.uniform3iv(this.addr,e)}function e1(r,e){r.uniform4iv(this.addr,e)}function t1(r,e){r.uniform1uiv(this.addr,e)}function n1(r,e){r.uniform2uiv(this.addr,e)}function i1(r,e){r.uniform3uiv(this.addr,e)}function r1(r,e){r.uniform4uiv(this.addr,e)}function s1(r,e,t){const n=this.cache,i=e.length,s=rc(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ym,s[a])}function o1(r,e,t){const n=this.cache,i=e.length,s=rc(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||jm,s[a])}function a1(r,e,t){const n=this.cache,i=e.length,s=rc(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Km,s[a])}function l1(r,e,t){const n=this.cache,i=e.length,s=rc(t,i);Ft(n,s)||(r.uniform1iv(this.addr,s),Ot(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||$m,s[a])}function c1(r){switch(r){case 5126:return WS;case 35664:return XS;case 35665:return qS;case 35666:return YS;case 35674:return $S;case 35675:return jS;case 35676:return KS;case 5124:case 35670:return ZS;case 35667:case 35671:return JS;case 35668:case 35672:return QS;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return r1;case 35678:case 36198:case 36298:case 36306:case 35682:return s1;case 35679:case 36299:case 36307:return o1;case 35680:case 36300:case 36308:case 36293:return a1;case 36289:case 36303:case 36311:case 36292:return l1}}class u1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=HS(t.type)}}class f1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=c1(t.type)}}class h1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const jc=/(\w+)(\])?(\[|\.)?/g;function Nd(r,e){r.seq.push(e),r.map[e.id]=e}function d1(r,e,t){const n=r.name,i=n.length;for(jc.lastIndex=0;;){const s=jc.exec(n),a=jc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Nd(t,c===void 0?new u1(o,r,e):new f1(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new h1(o),Nd(t,h)),t=h}}}class dl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);d1(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function zd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let p1=0;function m1(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function g1(r){switch(r){case ss:return["Linear","( value )"];case ht:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Ud(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+m1(r.getShaderSource(e),a)}else return i}function _1(r,e){const t=g1(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function x1(r,e){let t;switch(e){case Cv:t="Linear";break;case Av:t="Reinhard";break;case Pv:t="OptimizedCineon";break;case Lv:t="ACESFilmic";break;case Dv:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function v1(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Do).join(`
`)}function y1(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function b1(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Do(r){return r!==""}function Bd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ou(r){return r.replace(M1,S1)}function S1(r,e){const t=Ye[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ou(t)}const w1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gd(r){return r.replace(w1,T1)}function T1(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Vd(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Tm?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===sv?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Lo&&(e="SHADOWMAP_TYPE_VSM"),e}function C1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qs:case eo:e="ENVMAP_TYPE_CUBE";break;case ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function P1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Am:e="ENVMAP_BLENDING_MULTIPLY";break;case Tv:e="ENVMAP_BLENDING_MIX";break;case Ev:e="ENVMAP_BLENDING_ADD";break}return e}function L1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function D1(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=E1(t),c=C1(t),u=A1(t),h=P1(t),f=L1(t),p=t.isWebGL2?"":v1(t),g=y1(s),d=i.createProgram();let m,_,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Do).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(Do).join(`
`),_.length>0&&(_+=`
`)):(m=[Vd(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),_=[p,Vd(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Wi?"#define TONE_MAPPING":"",t.toneMapping!==Wi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Wi?x1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.encodings_pars_fragment,_1("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Do).join(`
`)),a=Ou(a),a=Bd(a,t),a=kd(a,t),o=Ou(o),o=Bd(o,t),o=kd(o,t),a=Gd(a),o=Gd(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=S+m+a,y=S+_+o,w=zd(i,35633,x),P=zd(i,35632,y);if(i.attachShader(d,w),i.attachShader(d,P),t.index0AttributeName!==void 0?i.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(d,0,"position"),i.linkProgram(d),r.debug.checkShaderErrors){const M=i.getProgramInfoLog(d).trim(),D=i.getShaderInfoLog(w).trim(),W=i.getShaderInfoLog(P).trim();let B=!0,U=!0;if(i.getProgramParameter(d,35714)===!1){B=!1;const O=Ud(i,w,"vertex"),q=Ud(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(d,35715)+`

Program Info Log: `+M+`
`+O+`
`+q)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(D===""||W==="")&&(U=!1);U&&(this.diagnostics={runnable:B,programLog:M,vertexShader:{log:D,prefix:m},fragmentShader:{log:W,prefix:_}})}i.deleteShader(w),i.deleteShader(P);let A;this.getUniforms=function(){return A===void 0&&(A=new dl(i,d)),A};let v;return this.getAttributes=function(){return v===void 0&&(v=b1(i,d)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=p1++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=w,this.fragmentShader=P,this}let R1=0;class I1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new F1(e),t.set(e,n)),n}}class F1{constructor(e){this.id=R1++,this.code=e,this.usedTimes=0}}function O1(r,e,t,n,i,s,a){const o=new zm,l=new I1,c=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v,M,D,W,B){const U=W.fog,O=B.geometry,q=v.isMeshStandardMaterial?W.environment:null,j=(v.isMeshStandardMaterial?t:e).get(v.envMap||q),X=j&&j.mapping===ec?j.image.height:null,k=g[v.type];v.precision!==null&&(p=i.getMaxPrecision(v.precision),p!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const se=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,L=se!==void 0?se.length:0;let _e=0;O.morphAttributes.position!==void 0&&(_e=1),O.morphAttributes.normal!==void 0&&(_e=2),O.morphAttributes.color!==void 0&&(_e=3);let V,le,fe,H;if(k){const ze=bi[k];V=ze.vertexShader,le=ze.fragmentShader}else V=v.vertexShader,le=v.fragmentShader,l.update(v),fe=l.getVertexShaderID(v),H=l.getFragmentShaderID(v);const me=r.getRenderTarget(),xe=v.alphaTest>0,ye=v.clearcoat>0,we=v.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:v.type,vertexShader:V,fragmentShader:le,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:H,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:f,outputEncoding:me===null?r.outputEncoding:me.isXRRenderTarget===!0?me.texture.encoding:ss,map:!!v.map,matcap:!!v.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:X,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Zv,tangentSpaceNormalMap:v.normalMapType===Kv,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===ht,clearcoat:ye,clearcoatMap:ye&&!!v.clearcoatMap,clearcoatRoughnessMap:ye&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ye&&!!v.clearcoatNormalMap,iridescence:we,iridescenceMap:we&&!!v.iridescenceMap,iridescenceThicknessMap:we&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Vs,alphaMap:!!v.alphaMap,alphaTest:xe,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!O.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!U,useFog:v.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:_e,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:Wi,useLegacyLights:r.useLegacyLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===rr,flipSided:v.side===Nn,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function m(v){const M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)M.push(D),M.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(_(M,v),S(M,v),M.push(r.outputEncoding)),M.push(v.customProgramCacheKey),M.join()}function _(v,M){v.push(M.precision),v.push(M.outputEncoding),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.combine),v.push(M.vertexUvs),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function S(v,M){o.disableAll(),M.isWebGL2&&o.enable(0),M.supportsVertexTextures&&o.enable(1),M.instancing&&o.enable(2),M.instancingColor&&o.enable(3),M.map&&o.enable(4),M.matcap&&o.enable(5),M.envMap&&o.enable(6),M.lightMap&&o.enable(7),M.aoMap&&o.enable(8),M.emissiveMap&&o.enable(9),M.bumpMap&&o.enable(10),M.normalMap&&o.enable(11),M.objectSpaceNormalMap&&o.enable(12),M.tangentSpaceNormalMap&&o.enable(13),M.clearcoat&&o.enable(14),M.clearcoatMap&&o.enable(15),M.clearcoatRoughnessMap&&o.enable(16),M.clearcoatNormalMap&&o.enable(17),M.iridescence&&o.enable(18),M.iridescenceMap&&o.enable(19),M.iridescenceThicknessMap&&o.enable(20),M.displacementMap&&o.enable(21),M.specularMap&&o.enable(22),M.roughnessMap&&o.enable(23),M.metalnessMap&&o.enable(24),M.gradientMap&&o.enable(25),M.alphaMap&&o.enable(26),M.alphaTest&&o.enable(27),M.vertexColors&&o.enable(28),M.vertexAlphas&&o.enable(29),M.vertexUvs&&o.enable(30),M.vertexTangents&&o.enable(31),M.uvsVertexOnly&&o.enable(32),v.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.useLegacyLights&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.specularIntensityMap&&o.enable(15),M.specularColorMap&&o.enable(16),M.transmission&&o.enable(17),M.transmissionMap&&o.enable(18),M.thicknessMap&&o.enable(19),M.sheen&&o.enable(20),M.sheenColorMap&&o.enable(21),M.sheenRoughnessMap&&o.enable(22),M.decodeVideoTexture&&o.enable(23),M.opaque&&o.enable(24),v.push(o.mask)}function x(v){const M=g[v.type];let D;if(M){const W=bi[M];D=yy.clone(W.uniforms)}else D=v.uniforms;return D}function y(v,M){let D;for(let W=0,B=c.length;W<B;W++){const U=c[W];if(U.cacheKey===M){D=U,++D.usedTimes;break}}return D===void 0&&(D=new D1(r,M,v,s),c.push(D)),D}function w(v){if(--v.usedTimes===0){const M=c.indexOf(v);c[M]=c[c.length-1],c.pop(),v.destroy()}}function P(v){l.remove(v)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:x,acquireProgram:y,releaseProgram:w,releaseShaderCache:P,programs:c,dispose:A}}function N1(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function z1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Hd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,p,g,d,m){let _=r[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:d,group:m},r[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=m),e++,_}function o(h,f,p,g,d,m){const _=a(h,f,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?i.push(_):t.push(_)}function l(h,f,p,g,d,m){const _=a(h,f,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?i.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||z1),n.length>1&&n.sort(f||Hd),i.length>1&&i.sort(f||Hd)}function u(){for(let h=e,f=r.length;h<f;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function U1(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Wd,r.set(n,[a])):i>=s.length?(a=new Wd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function B1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new dt};break;case"SpotLight":t={position:new $,direction:new $,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new $,halfWidth:new $,halfHeight:new $};break}return r[e.id]=t,t}}}function k1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let G1=0;function V1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function H1(r,e){const t=new B1,n=k1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new $);const s=new $,a=new kt,o=new kt;function l(u,h){let f=0,p=0,g=0;for(let W=0;W<9;W++)i.probe[W].set(0,0,0);let d=0,m=0,_=0,S=0,x=0,y=0,w=0,P=0,A=0,v=0;u.sort(V1);const M=h===!0?Math.PI:1;for(let W=0,B=u.length;W<B;W++){const U=u[W],O=U.color,q=U.intensity,j=U.distance,X=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=O.r*q*M,p+=O.g*q*M,g+=O.b*q*M;else if(U.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(U.sh.coefficients[k],q);else if(U.isDirectionalLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*M),U.castShadow){const se=U.shadow,L=n.get(U);L.shadowBias=se.bias,L.shadowNormalBias=se.normalBias,L.shadowRadius=se.radius,L.shadowMapSize=se.mapSize,i.directionalShadow[d]=L,i.directionalShadowMap[d]=X,i.directionalShadowMatrix[d]=U.shadow.matrix,y++}i.directional[d]=k,d++}else if(U.isSpotLight){const k=t.get(U);k.position.setFromMatrixPosition(U.matrixWorld),k.color.copy(O).multiplyScalar(q*M),k.distance=j,k.coneCos=Math.cos(U.angle),k.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),k.decay=U.decay,i.spot[_]=k;const se=U.shadow;if(U.map&&(i.spotLightMap[A]=U.map,A++,se.updateMatrices(U),U.castShadow&&v++),i.spotLightMatrix[_]=se.matrix,U.castShadow){const L=n.get(U);L.shadowBias=se.bias,L.shadowNormalBias=se.normalBias,L.shadowRadius=se.radius,L.shadowMapSize=se.mapSize,i.spotShadow[_]=L,i.spotShadowMap[_]=X,P++}_++}else if(U.isRectAreaLight){const k=t.get(U);k.color.copy(O).multiplyScalar(q),k.halfWidth.set(U.width*.5,0,0),k.halfHeight.set(0,U.height*.5,0),i.rectArea[S]=k,S++}else if(U.isPointLight){const k=t.get(U);if(k.color.copy(U.color).multiplyScalar(U.intensity*M),k.distance=U.distance,k.decay=U.decay,U.castShadow){const se=U.shadow,L=n.get(U);L.shadowBias=se.bias,L.shadowNormalBias=se.normalBias,L.shadowRadius=se.radius,L.shadowMapSize=se.mapSize,L.shadowCameraNear=se.camera.near,L.shadowCameraFar=se.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=X,i.pointShadowMatrix[m]=U.shadow.matrix,w++}i.point[m]=k,m++}else if(U.isHemisphereLight){const k=t.get(U);k.skyColor.copy(U.color).multiplyScalar(q*M),k.groundColor.copy(U.groundColor).multiplyScalar(q*M),i.hemi[x]=k,x++}}S>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=g;const D=i.hash;(D.directionalLength!==d||D.pointLength!==m||D.spotLength!==_||D.rectAreaLength!==S||D.hemiLength!==x||D.numDirectionalShadows!==y||D.numPointShadows!==w||D.numSpotShadows!==P||D.numSpotMaps!==A)&&(i.directional.length=d,i.spot.length=_,i.rectArea.length=S,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=P+A-v,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=v,D.directionalLength=d,D.pointLength=m,D.spotLength=_,D.rectAreaLength=S,D.hemiLength=x,D.numDirectionalShadows=y,D.numPointShadows=w,D.numSpotShadows=P,D.numSpotMaps=A,i.version=G1++)}function c(u,h){let f=0,p=0,g=0,d=0,m=0;const _=h.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){const y=u[S];if(y.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),f++}else if(y.isSpotLight){const w=i.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const w=i.rectArea[d];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),o.identity(),a.copy(y.matrixWorld),a.premultiply(_),o.extractRotation(a),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),d++}else if(y.isPointLight){const w=i.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const w=i.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:i}}function Xd(r,e){const t=new H1(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function W1(r,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Xd(r,e),t.set(s,[l])):a>=o.length?(l=new Xd(r,e),o.push(l)):l=o[a],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class X1 extends ga{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q1 extends ga{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new $,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$1=`uniform sampler2D shadow_pass;
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
}`;function j1(r,e,t){let n=new Xm;const i=new pt,s=new pt,a=new Wt,o=new X1({depthPacking:jv}),l=new q1,c={},u=t.maxTextureSize,h={[yr]:Nn,[Nn]:yr,[rr]:rr},f=new br({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Y1,fragmentShader:$1}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ki;g.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Gi(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tm,this.render=function(y,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const A=r.getRenderTarget(),v=r.getActiveCubeFace(),M=r.getActiveMipmapLevel(),D=r.state;D.setBlending(pr),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);for(let W=0,B=y.length;W<B;W++){const U=y[W],O=U.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const q=O.getFrameExtents();if(i.multiply(q),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,O.mapSize.y=s.y)),O.map===null){const X=this.type!==Lo?{minFilter:ln,magFilter:ln}:{};O.map=new os(i.x,i.y,X),O.map.texture.name=U.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();const j=O.getViewportCount();for(let X=0;X<j;X++){const k=O.getViewport(X);a.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),D.viewport(a),O.updateMatrices(U,X),n=O.getFrustum(),x(w,P,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===Lo&&_(O,P),O.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(A,v,M)};function _(y,w){const P=e.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new os(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,r.setRenderTarget(y.mapPass),r.clear(),r.renderBufferDirect(w,null,P,f,d,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,r.setRenderTarget(y.map),r.clear(),r.renderBufferDirect(w,null,P,p,d,null)}function S(y,w,P,A,v,M){let D=null;const W=P.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(W!==void 0)D=W;else if(D=P.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const B=D.uuid,U=w.uuid;let O=c[B];O===void 0&&(O={},c[B]=O);let q=O[U];q===void 0&&(q=D.clone(),O[U]=q),D=q}return D.visible=w.visible,D.wireframe=w.wireframe,M===Lo?D.side=w.shadowSide!==null?w.shadowSide:w.side:D.side=w.shadowSide!==null?w.shadowSide:h[w.side],D.alphaMap=w.alphaMap,D.alphaTest=w.alphaTest,D.map=w.map,D.clipShadows=w.clipShadows,D.clippingPlanes=w.clippingPlanes,D.clipIntersection=w.clipIntersection,D.displacementMap=w.displacementMap,D.displacementScale=w.displacementScale,D.displacementBias=w.displacementBias,D.wireframeLinewidth=w.wireframeLinewidth,D.linewidth=w.linewidth,P.isPointLight===!0&&D.isMeshDistanceMaterial===!0&&(D.referencePosition.setFromMatrixPosition(P.matrixWorld),D.nearDistance=A,D.farDistance=v),D}function x(y,w,P,A,v){if(y.visible===!1)return;if(y.layers.test(w.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&v===Lo)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,y.matrixWorld);const W=e.update(y),B=y.material;if(Array.isArray(B)){const U=W.groups;for(let O=0,q=U.length;O<q;O++){const j=U[O],X=B[j.materialIndex];if(X&&X.visible){const k=S(y,X,A,P.near,P.far,v);r.renderBufferDirect(P,null,W,k,y,j)}}}else if(B.visible){const U=S(y,B,A,P.near,P.far,v);r.renderBufferDirect(P,null,W,U,y,null)}}const D=y.children;for(let W=0,B=D.length;W<B;W++)x(D[W],w,P,A,v)}}function K1(r,e,t){const n=t.isWebGL2;function i(){let F=!1;const ie=new Wt;let ce=null;const ve=new Wt(0,0,0,0);return{setMask:function(Ee){ce!==Ee&&!F&&(r.colorMask(Ee,Ee,Ee,Ee),ce=Ee)},setLocked:function(Ee){F=Ee},setClear:function(Ee,it,at,St,ke){ke===!0&&(Ee*=St,it*=St,at*=St),ie.set(Ee,it,at,St),ve.equals(ie)===!1&&(r.clearColor(Ee,it,at,St),ve.copy(ie))},reset:function(){F=!1,ce=null,ve.set(-1,0,0,0)}}}function s(){let F=!1,ie=null,ce=null,ve=null;return{setTest:function(Ee){Ee?xe(2929):ye(2929)},setMask:function(Ee){ie!==Ee&&!F&&(r.depthMask(Ee),ie=Ee)},setFunc:function(Ee){if(ce!==Ee){switch(Ee){case xv:r.depthFunc(512);break;case vv:r.depthFunc(519);break;case yv:r.depthFunc(513);break;case Pu:r.depthFunc(515);break;case bv:r.depthFunc(514);break;case Mv:r.depthFunc(518);break;case Sv:r.depthFunc(516);break;case wv:r.depthFunc(517);break;default:r.depthFunc(515)}ce=Ee}},setLocked:function(Ee){F=Ee},setClear:function(Ee){ve!==Ee&&(r.clearDepth(Ee),ve=Ee)},reset:function(){F=!1,ie=null,ce=null,ve=null}}}function a(){let F=!1,ie=null,ce=null,ve=null,Ee=null,it=null,at=null,St=null,ke=null;return{setTest:function(Te){F||(Te?xe(2960):ye(2960))},setMask:function(Te){ie!==Te&&!F&&(r.stencilMask(Te),ie=Te)},setFunc:function(Te,he,De){(ce!==Te||ve!==he||Ee!==De)&&(r.stencilFunc(Te,he,De),ce=Te,ve=he,Ee=De)},setOp:function(Te,he,De){(it!==Te||at!==he||St!==De)&&(r.stencilOp(Te,he,De),it=Te,at=he,St=De)},setLocked:function(Te){F=Te},setClear:function(Te){ke!==Te&&(r.clearStencil(Te),ke=Te)},reset:function(){F=!1,ie=null,ce=null,ve=null,Ee=null,it=null,at=null,St=null,ke=null}}}const o=new i,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,d=[],m=null,_=!1,S=null,x=null,y=null,w=null,P=null,A=null,v=null,M=!1,D=null,W=null,B=null,U=null,O=null;const q=r.getParameter(35661);let j=!1,X=0;const k=r.getParameter(7938);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),j=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),j=X>=2);let se=null,L={};const _e=r.getParameter(3088),V=r.getParameter(2978),le=new Wt().fromArray(_e),fe=new Wt().fromArray(V);function H(F,ie,ce){const ve=new Uint8Array(4),Ee=r.createTexture();r.bindTexture(F,Ee),r.texParameteri(F,10241,9728),r.texParameteri(F,10240,9728);for(let it=0;it<ce;it++)r.texImage2D(ie+it,0,6408,1,1,0,6408,5121,ve);return Ee}const me={};me[3553]=H(3553,3553,1),me[34067]=H(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),xe(2929),l.setFunc(Pu),ne(!1),I(Ih),xe(2884),Y(pr);function xe(F){f[F]!==!0&&(r.enable(F),f[F]=!0)}function ye(F){f[F]!==!1&&(r.disable(F),f[F]=!1)}function we(F,ie){return p[F]!==ie?(r.bindFramebuffer(F,ie),p[F]=ie,n&&(F===36009&&(p[36160]=ie),F===36160&&(p[36009]=ie)),!0):!1}function Ae(F,ie){let ce=d,ve=!1;if(F)if(ce=g.get(ie),ce===void 0&&(ce=[],g.set(ie,ce)),F.isWebGLMultipleRenderTargets){const Ee=F.texture;if(ce.length!==Ee.length||ce[0]!==36064){for(let it=0,at=Ee.length;it<at;it++)ce[it]=36064+it;ce.length=Ee.length,ve=!0}}else ce[0]!==36064&&(ce[0]=36064,ve=!0);else ce[0]!==1029&&(ce[0]=1029,ve=!0);ve&&(t.isWebGL2?r.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function ze(F){return m!==F?(r.useProgram(F),m=F,!0):!1}const C={[As]:32774,[av]:32778,[lv]:32779};if(n)C[zh]=32775,C[Uh]=32776;else{const F=e.get("EXT_blend_minmax");F!==null&&(C[zh]=F.MIN_EXT,C[Uh]=F.MAX_EXT)}const R={[cv]:0,[uv]:1,[fv]:768,[Em]:770,[_v]:776,[mv]:774,[dv]:772,[hv]:769,[Cm]:771,[gv]:775,[pv]:773};function Y(F,ie,ce,ve,Ee,it,at,St){if(F===pr){_===!0&&(ye(3042),_=!1);return}if(_===!1&&(xe(3042),_=!0),F!==ov){if(F!==S||St!==M){if((x!==As||P!==As)&&(r.blendEquation(32774),x=As,P=As),St)switch(F){case Vs:r.blendFuncSeparate(1,771,1,771);break;case Fh:r.blendFunc(1,1);break;case Oh:r.blendFuncSeparate(0,769,0,1);break;case Nh:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Vs:r.blendFuncSeparate(770,771,1,771);break;case Fh:r.blendFunc(770,1);break;case Oh:r.blendFuncSeparate(0,769,0,1);break;case Nh:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,w=null,A=null,v=null,S=F,M=St}return}Ee=Ee||ie,it=it||ce,at=at||ve,(ie!==x||Ee!==P)&&(r.blendEquationSeparate(C[ie],C[Ee]),x=ie,P=Ee),(ce!==y||ve!==w||it!==A||at!==v)&&(r.blendFuncSeparate(R[ce],R[ve],R[it],R[at]),y=ce,w=ve,A=it,v=at),S=F,M=!1}function re(F,ie){F.side===rr?ye(2884):xe(2884);let ce=F.side===Nn;ie&&(ce=!ce),ne(ce),F.blending===Vs&&F.transparent===!1?Y(pr):Y(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const ve=F.stencilWrite;c.setTest(ve),ve&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),te(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?xe(32926):ye(32926)}function ne(F){D!==F&&(F?r.frontFace(2304):r.frontFace(2305),D=F)}function I(F){F!==iv?(xe(2884),F!==W&&(F===Ih?r.cullFace(1029):F===rv?r.cullFace(1028):r.cullFace(1032))):ye(2884),W=F}function ue(F){F!==B&&(j&&r.lineWidth(F),B=F)}function te(F,ie,ce){F?(xe(32823),(U!==ie||O!==ce)&&(r.polygonOffset(ie,ce),U=ie,O=ce)):ye(32823)}function de(F){F?xe(3089):ye(3089)}function oe(F){F===void 0&&(F=33984+q-1),se!==F&&(r.activeTexture(F),se=F)}function T(F,ie,ce){ce===void 0&&(se===null?ce=33984+q-1:ce=se);let ve=L[ce];ve===void 0&&(ve={type:void 0,texture:void 0},L[ce]=ve),(ve.type!==F||ve.texture!==ie)&&(se!==ce&&(r.activeTexture(ce),se=ce),r.bindTexture(F,ie||me[F]),ve.type=F,ve.texture=ie)}function b(){const F=L[se];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function N(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Fe(F){le.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),le.copy(F))}function Se(F){fe.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),fe.copy(F))}function Ge(F,ie){let ce=h.get(ie);ce===void 0&&(ce=new WeakMap,h.set(ie,ce));let ve=ce.get(F);ve===void 0&&(ve=r.getUniformBlockIndex(ie,F.name),ce.set(F,ve))}function Le(F,ie){const ve=h.get(ie).get(F);u.get(ie)!==ve&&(r.uniformBlockBinding(ie,ve,F.__bindingPointIndex),u.set(ie,ve))}function ot(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},se=null,L={},p={},g=new WeakMap,d=[],m=null,_=!1,S=null,x=null,y=null,w=null,P=null,A=null,v=null,M=!1,D=null,W=null,B=null,U=null,O=null,le.set(0,0,r.canvas.width,r.canvas.height),fe.set(0,0,r.canvas.width,r.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:xe,disable:ye,bindFramebuffer:we,drawBuffers:Ae,useProgram:ze,setBlending:Y,setMaterial:re,setFlipSided:ne,setCullFace:I,setLineWidth:ue,setPolygonOffset:te,setScissorTest:de,activeTexture:oe,bindTexture:T,unbindTexture:b,compressedTexImage2D:N,compressedTexImage3D:ee,texImage2D:Ce,texImage3D:Re,updateUBOMapping:Ge,uniformBlockBinding:Le,texStorage2D:Q,texStorage3D:Pe,texSubImage2D:Z,texSubImage3D:ae,compressedTexSubImage2D:pe,compressedTexSubImage3D:ge,scissor:Fe,viewport:Se,reset:ot}}function Z1(r,e,t,n,i,s,a){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(T,b){return _?new OffscreenCanvas(T,b):Pl("canvas")}function x(T,b,N,ee){let Z=1;if((T.width>ee||T.height>ee)&&(Z=ee/Math.max(T.width,T.height)),Z<1||b===!0)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap){const ae=b?ey:Math.floor,pe=ae(Z*T.width),ge=ae(Z*T.height);d===void 0&&(d=S(pe,ge));const Q=N?S(pe,ge):d;return Q.width=pe,Q.height=ge,Q.getContext("2d").drawImage(T,0,0,pe,ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+T.width+"x"+T.height+") to ("+pe+"x"+ge+")."),Q}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+T.width+"x"+T.height+")."),T;return T}function y(T){return hd(T.width)&&hd(T.height)}function w(T){return o?!1:T.wrapS!==li||T.wrapT!==li||T.minFilter!==ln&&T.minFilter!==Xn}function P(T,b){return T.generateMipmaps&&b&&T.minFilter!==ln&&T.minFilter!==Xn}function A(T){r.generateMipmap(T)}function v(T,b,N,ee,Z=!1){if(o===!1)return b;if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ae=b;return b===6403&&(N===5126&&(ae=33326),N===5131&&(ae=33325),N===5121&&(ae=33321)),b===33319&&(N===5126&&(ae=33328),N===5131&&(ae=33327),N===5121&&(ae=33323)),b===6408&&(N===5126&&(ae=34836),N===5131&&(ae=34842),N===5121&&(ae=ee===ht&&Z===!1?35907:32856),N===32819&&(ae=32854),N===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function M(T,b,N){return P(T,N)===!0||T.isFramebufferTexture&&T.minFilter!==ln&&T.minFilter!==Xn?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function D(T){return T===ln||T===Bh||T===yc?9728:9729}function W(T){const b=T.target;b.removeEventListener("dispose",W),U(b),b.isVideoTexture&&g.delete(b)}function B(T){const b=T.target;b.removeEventListener("dispose",B),q(b)}function U(T){const b=n.get(T);if(b.__webglInit===void 0)return;const N=T.source,ee=m.get(N);if(ee){const Z=ee[b.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&O(T),Object.keys(ee).length===0&&m.delete(N)}n.remove(T)}function O(T){const b=n.get(T);r.deleteTexture(b.__webglTexture);const N=T.source,ee=m.get(N);delete ee[b.__cacheKey],a.memory.textures--}function q(T){const b=T.texture,N=n.get(T),ee=n.get(b);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),a.memory.textures--),T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)r.deleteFramebuffer(N.__webglFramebuffer[Z]),N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer[Z]);else{if(r.deleteFramebuffer(N.__webglFramebuffer),N.__webglDepthbuffer&&r.deleteRenderbuffer(N.__webglDepthbuffer),N.__webglMultisampledFramebuffer&&r.deleteFramebuffer(N.__webglMultisampledFramebuffer),N.__webglColorRenderbuffer)for(let Z=0;Z<N.__webglColorRenderbuffer.length;Z++)N.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(N.__webglColorRenderbuffer[Z]);N.__webglDepthRenderbuffer&&r.deleteRenderbuffer(N.__webglDepthRenderbuffer)}if(T.isWebGLMultipleRenderTargets)for(let Z=0,ae=b.length;Z<ae;Z++){const pe=n.get(b[Z]);pe.__webglTexture&&(r.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(b[Z])}n.remove(b),n.remove(T)}let j=0;function X(){j=0}function k(){const T=j;return T>=l&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+l),j+=1,T}function se(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.encoding),b.join()}function L(T,b){const N=n.get(T);if(T.isVideoTexture&&de(T),T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){const ee=T.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(N,T,b);return}}t.bindTexture(3553,N.__webglTexture,33984+b)}function _e(T,b){const N=n.get(T);if(T.version>0&&N.__version!==T.version){ye(N,T,b);return}t.bindTexture(35866,N.__webglTexture,33984+b)}function V(T,b){const N=n.get(T);if(T.version>0&&N.__version!==T.version){ye(N,T,b);return}t.bindTexture(32879,N.__webglTexture,33984+b)}function le(T,b){const N=n.get(T);if(T.version>0&&N.__version!==T.version){we(N,T,b);return}t.bindTexture(34067,N.__webglTexture,33984+b)}const fe={[Ru]:10497,[li]:33071,[Iu]:33648},H={[ln]:9728,[Bh]:9984,[yc]:9986,[Xn]:9729,[Rv]:9985,[ia]:9987};function me(T,b,N){if(N?(r.texParameteri(T,10242,fe[b.wrapS]),r.texParameteri(T,10243,fe[b.wrapT]),(T===32879||T===35866)&&r.texParameteri(T,32882,fe[b.wrapR]),r.texParameteri(T,10240,H[b.magFilter]),r.texParameteri(T,10241,H[b.minFilter])):(r.texParameteri(T,10242,33071),r.texParameteri(T,10243,33071),(T===32879||T===35866)&&r.texParameteri(T,32882,33071),(b.wrapS!==li||b.wrapT!==li)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(T,10240,D(b.magFilter)),r.texParameteri(T,10241,D(b.minFilter)),b.minFilter!==ln&&b.minFilter!==Xn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===ln||b.minFilter!==yc&&b.minFilter!==ia||b.type===qr&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===ra&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||n.get(b).__currentAnisotropy)&&(r.texParameterf(T,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy)}}function xe(T,b){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",W));const ee=b.source;let Z=m.get(ee);Z===void 0&&(Z={},m.set(ee,Z));const ae=se(b);if(ae!==T.__cacheKey){Z[ae]===void 0&&(Z[ae]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Z[ae].usedTimes++;const pe=Z[T.__cacheKey];pe!==void 0&&(Z[T.__cacheKey].usedTimes--,pe.usedTimes===0&&O(b)),T.__cacheKey=ae,T.__webglTexture=Z[ae].texture}return N}function ye(T,b,N){let ee=3553;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ee=35866),b.isData3DTexture&&(ee=32879);const Z=xe(T,b),ae=b.source;t.bindTexture(ee,T.__webglTexture,33984+N);const pe=n.get(ae);if(ae.version!==pe.__version||Z===!0){t.activeTexture(33984+N),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const ge=w(b)&&y(b.image)===!1;let Q=x(b.image,ge,!1,u);Q=oe(b,Q);const Pe=y(Q)||o,Ce=s.convert(b.format,b.encoding);let Re=s.convert(b.type),Fe=v(b.internalFormat,Ce,Re,b.encoding,b.isVideoTexture);me(ee,b,Pe);let Se;const Ge=b.mipmaps,Le=o&&b.isVideoTexture!==!0,ot=pe.__version===void 0||Z===!0,F=M(b,Q,Pe);if(b.isDepthTexture)Fe=6402,o?b.type===qr?Fe=36012:b.type===Xr?Fe=33190:b.type===Hs?Fe=35056:Fe=33189:b.type===qr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Zr&&Fe===6402&&b.type!==Lm&&b.type!==Xr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Xr,Re=s.convert(b.type)),b.format===to&&Fe===6402&&(Fe=34041,b.type!==Hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Hs,Re=s.convert(b.type))),ot&&(Le?t.texStorage2D(3553,1,Fe,Q.width,Q.height):t.texImage2D(3553,0,Fe,Q.width,Q.height,0,Ce,Re,null));else if(b.isDataTexture)if(Ge.length>0&&Pe){Le&&ot&&t.texStorage2D(3553,F,Fe,Ge[0].width,Ge[0].height);for(let ie=0,ce=Ge.length;ie<ce;ie++)Se=Ge[ie],Le?t.texSubImage2D(3553,ie,0,0,Se.width,Se.height,Ce,Re,Se.data):t.texImage2D(3553,ie,Fe,Se.width,Se.height,0,Ce,Re,Se.data);b.generateMipmaps=!1}else Le?(ot&&t.texStorage2D(3553,F,Fe,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Q.width,Q.height,Ce,Re,Q.data)):t.texImage2D(3553,0,Fe,Q.width,Q.height,0,Ce,Re,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Le&&ot&&t.texStorage3D(35866,F,Fe,Ge[0].width,Ge[0].height,Q.depth);for(let ie=0,ce=Ge.length;ie<ce;ie++)Se=Ge[ie],b.format!==ci?Ce!==null?Le?t.compressedTexSubImage3D(35866,ie,0,0,0,Se.width,Se.height,Q.depth,Ce,Se.data,0,0):t.compressedTexImage3D(35866,ie,Fe,Se.width,Se.height,Q.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage3D(35866,ie,0,0,0,Se.width,Se.height,Q.depth,Ce,Re,Se.data):t.texImage3D(35866,ie,Fe,Se.width,Se.height,Q.depth,0,Ce,Re,Se.data)}else{Le&&ot&&t.texStorage2D(3553,F,Fe,Ge[0].width,Ge[0].height);for(let ie=0,ce=Ge.length;ie<ce;ie++)Se=Ge[ie],b.format!==ci?Ce!==null?Le?t.compressedTexSubImage2D(3553,ie,0,0,Se.width,Se.height,Ce,Se.data):t.compressedTexImage2D(3553,ie,Fe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?t.texSubImage2D(3553,ie,0,0,Se.width,Se.height,Ce,Re,Se.data):t.texImage2D(3553,ie,Fe,Se.width,Se.height,0,Ce,Re,Se.data)}else if(b.isDataArrayTexture)Le?(ot&&t.texStorage3D(35866,F,Fe,Q.width,Q.height,Q.depth),t.texSubImage3D(35866,0,0,0,0,Q.width,Q.height,Q.depth,Ce,Re,Q.data)):t.texImage3D(35866,0,Fe,Q.width,Q.height,Q.depth,0,Ce,Re,Q.data);else if(b.isData3DTexture)Le?(ot&&t.texStorage3D(32879,F,Fe,Q.width,Q.height,Q.depth),t.texSubImage3D(32879,0,0,0,0,Q.width,Q.height,Q.depth,Ce,Re,Q.data)):t.texImage3D(32879,0,Fe,Q.width,Q.height,Q.depth,0,Ce,Re,Q.data);else if(b.isFramebufferTexture){if(ot)if(Le)t.texStorage2D(3553,F,Fe,Q.width,Q.height);else{let ie=Q.width,ce=Q.height;for(let ve=0;ve<F;ve++)t.texImage2D(3553,ve,Fe,ie,ce,0,Ce,Re,null),ie>>=1,ce>>=1}}else if(Ge.length>0&&Pe){Le&&ot&&t.texStorage2D(3553,F,Fe,Ge[0].width,Ge[0].height);for(let ie=0,ce=Ge.length;ie<ce;ie++)Se=Ge[ie],Le?t.texSubImage2D(3553,ie,0,0,Ce,Re,Se):t.texImage2D(3553,ie,Fe,Ce,Re,Se);b.generateMipmaps=!1}else Le?(ot&&t.texStorage2D(3553,F,Fe,Q.width,Q.height),t.texSubImage2D(3553,0,0,0,Ce,Re,Q)):t.texImage2D(3553,0,Fe,Ce,Re,Q);P(b,Pe)&&A(ee),pe.__version=ae.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function we(T,b,N){if(b.image.length!==6)return;const ee=xe(T,b),Z=b.source;t.bindTexture(34067,T.__webglTexture,33984+N);const ae=n.get(Z);if(Z.version!==ae.__version||ee===!0){t.activeTexture(33984+N),r.pixelStorei(37440,b.flipY),r.pixelStorei(37441,b.premultiplyAlpha),r.pixelStorei(3317,b.unpackAlignment),r.pixelStorei(37443,0);const pe=b.isCompressedTexture||b.image[0].isCompressedTexture,ge=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let ie=0;ie<6;ie++)!pe&&!ge?Q[ie]=x(b.image[ie],!1,!0,c):Q[ie]=ge?b.image[ie].image:b.image[ie],Q[ie]=oe(b,Q[ie]);const Pe=Q[0],Ce=y(Pe)||o,Re=s.convert(b.format,b.encoding),Fe=s.convert(b.type),Se=v(b.internalFormat,Re,Fe,b.encoding),Ge=o&&b.isVideoTexture!==!0,Le=ae.__version===void 0||ee===!0;let ot=M(b,Pe,Ce);me(34067,b,Ce);let F;if(pe){Ge&&Le&&t.texStorage2D(34067,ot,Se,Pe.width,Pe.height);for(let ie=0;ie<6;ie++){F=Q[ie].mipmaps;for(let ce=0;ce<F.length;ce++){const ve=F[ce];b.format!==ci?Re!==null?Ge?t.compressedTexSubImage2D(34069+ie,ce,0,0,ve.width,ve.height,Re,ve.data):t.compressedTexImage2D(34069+ie,ce,Se,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?t.texSubImage2D(34069+ie,ce,0,0,ve.width,ve.height,Re,Fe,ve.data):t.texImage2D(34069+ie,ce,Se,ve.width,ve.height,0,Re,Fe,ve.data)}}}else{F=b.mipmaps,Ge&&Le&&(F.length>0&&ot++,t.texStorage2D(34067,ot,Se,Q[0].width,Q[0].height));for(let ie=0;ie<6;ie++)if(ge){Ge?t.texSubImage2D(34069+ie,0,0,0,Q[ie].width,Q[ie].height,Re,Fe,Q[ie].data):t.texImage2D(34069+ie,0,Se,Q[ie].width,Q[ie].height,0,Re,Fe,Q[ie].data);for(let ce=0;ce<F.length;ce++){const Ee=F[ce].image[ie].image;Ge?t.texSubImage2D(34069+ie,ce+1,0,0,Ee.width,Ee.height,Re,Fe,Ee.data):t.texImage2D(34069+ie,ce+1,Se,Ee.width,Ee.height,0,Re,Fe,Ee.data)}}else{Ge?t.texSubImage2D(34069+ie,0,0,0,Re,Fe,Q[ie]):t.texImage2D(34069+ie,0,Se,Re,Fe,Q[ie]);for(let ce=0;ce<F.length;ce++){const ve=F[ce];Ge?t.texSubImage2D(34069+ie,ce+1,0,0,Re,Fe,ve.image[ie]):t.texImage2D(34069+ie,ce+1,Se,Re,Fe,ve.image[ie])}}}P(b,Ce)&&A(34067),ae.__version=Z.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function Ae(T,b,N,ee,Z){const ae=s.convert(N.format,N.encoding),pe=s.convert(N.type),ge=v(N.internalFormat,ae,pe,N.encoding);n.get(b).__hasExternalTextures||(Z===32879||Z===35866?t.texImage3D(Z,0,ge,b.width,b.height,b.depth,0,ae,pe,null):t.texImage2D(Z,0,ge,b.width,b.height,0,ae,pe,null)),t.bindFramebuffer(36160,T),te(b)?f.framebufferTexture2DMultisampleEXT(36160,ee,Z,n.get(N).__webglTexture,0,ue(b)):(Z===3553||Z>=34069&&Z<=34074)&&r.framebufferTexture2D(36160,ee,Z,n.get(N).__webglTexture,0),t.bindFramebuffer(36160,null)}function ze(T,b,N){if(r.bindRenderbuffer(36161,T),b.depthBuffer&&!b.stencilBuffer){let ee=33189;if(N||te(b)){const Z=b.depthTexture;Z&&Z.isDepthTexture&&(Z.type===qr?ee=36012:Z.type===Xr&&(ee=33190));const ae=ue(b);te(b)?f.renderbufferStorageMultisampleEXT(36161,ae,ee,b.width,b.height):r.renderbufferStorageMultisample(36161,ae,ee,b.width,b.height)}else r.renderbufferStorage(36161,ee,b.width,b.height);r.framebufferRenderbuffer(36160,36096,36161,T)}else if(b.depthBuffer&&b.stencilBuffer){const ee=ue(b);N&&te(b)===!1?r.renderbufferStorageMultisample(36161,ee,35056,b.width,b.height):te(b)?f.renderbufferStorageMultisampleEXT(36161,ee,35056,b.width,b.height):r.renderbufferStorage(36161,34041,b.width,b.height),r.framebufferRenderbuffer(36160,33306,36161,T)}else{const ee=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Z=0;Z<ee.length;Z++){const ae=ee[Z],pe=s.convert(ae.format,ae.encoding),ge=s.convert(ae.type),Q=v(ae.internalFormat,pe,ge,ae.encoding),Pe=ue(b);N&&te(b)===!1?r.renderbufferStorageMultisample(36161,Pe,Q,b.width,b.height):te(b)?f.renderbufferStorageMultisampleEXT(36161,Pe,Q,b.width,b.height):r.renderbufferStorage(36161,Q,b.width,b.height)}}r.bindRenderbuffer(36161,null)}function C(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),L(b.depthTexture,0);const ee=n.get(b.depthTexture).__webglTexture,Z=ue(b);if(b.depthTexture.format===Zr)te(b)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,Z):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(b.depthTexture.format===to)te(b)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,Z):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function R(T){const b=n.get(T),N=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");C(b.__webglFramebuffer,T)}else if(N){b.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,b.__webglFramebuffer[ee]),b.__webglDepthbuffer[ee]=r.createRenderbuffer(),ze(b.__webglDepthbuffer[ee],T,!1)}else t.bindFramebuffer(36160,b.__webglFramebuffer),b.__webglDepthbuffer=r.createRenderbuffer(),ze(b.__webglDepthbuffer,T,!1);t.bindFramebuffer(36160,null)}function Y(T,b,N){const ee=n.get(T);b!==void 0&&Ae(ee.__webglFramebuffer,T,T.texture,36064,3553),N!==void 0&&R(T)}function re(T){const b=T.texture,N=n.get(T),ee=n.get(b);T.addEventListener("dispose",B),T.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=b.version,a.memory.textures++);const Z=T.isWebGLCubeRenderTarget===!0,ae=T.isWebGLMultipleRenderTargets===!0,pe=y(T)||o;if(Z){N.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)N.__webglFramebuffer[ge]=r.createFramebuffer()}else{if(N.__webglFramebuffer=r.createFramebuffer(),ae)if(i.drawBuffers){const ge=T.texture;for(let Q=0,Pe=ge.length;Q<Pe;Q++){const Ce=n.get(ge[Q]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=r.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&T.samples>0&&te(T)===!1){const ge=ae?b:[b];N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,N.__webglMultisampledFramebuffer);for(let Q=0;Q<ge.length;Q++){const Pe=ge[Q];N.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(36161,N.__webglColorRenderbuffer[Q]);const Ce=s.convert(Pe.format,Pe.encoding),Re=s.convert(Pe.type),Fe=v(Pe.internalFormat,Ce,Re,Pe.encoding,T.isXRRenderTarget===!0),Se=ue(T);r.renderbufferStorageMultisample(36161,Se,Fe,T.width,T.height),r.framebufferRenderbuffer(36160,36064+Q,36161,N.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(36161,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),ze(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(36160,null)}}if(Z){t.bindTexture(34067,ee.__webglTexture),me(34067,b,pe);for(let ge=0;ge<6;ge++)Ae(N.__webglFramebuffer[ge],T,b,36064,34069+ge);P(b,pe)&&A(34067),t.unbindTexture()}else if(ae){const ge=T.texture;for(let Q=0,Pe=ge.length;Q<Pe;Q++){const Ce=ge[Q],Re=n.get(Ce);t.bindTexture(3553,Re.__webglTexture),me(3553,Ce,pe),Ae(N.__webglFramebuffer,T,Ce,36064+Q,3553),P(Ce,pe)&&A(3553)}t.unbindTexture()}else{let ge=3553;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(o?ge=T.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ge,ee.__webglTexture),me(ge,b,pe),Ae(N.__webglFramebuffer,T,b,36064,ge),P(b,pe)&&A(ge),t.unbindTexture()}T.depthBuffer&&R(T)}function ne(T){const b=y(T)||o,N=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ee=0,Z=N.length;ee<Z;ee++){const ae=N[ee];if(P(ae,b)){const pe=T.isWebGLCubeRenderTarget?34067:3553,ge=n.get(ae).__webglTexture;t.bindTexture(pe,ge),A(pe),t.unbindTexture()}}}function I(T){if(o&&T.samples>0&&te(T)===!1){const b=T.isWebGLMultipleRenderTargets?T.texture:[T.texture],N=T.width,ee=T.height;let Z=16384;const ae=[],pe=T.stencilBuffer?33306:36096,ge=n.get(T),Q=T.isWebGLMultipleRenderTargets===!0;if(Q)for(let Pe=0;Pe<b.length;Pe++)t.bindFramebuffer(36160,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Pe,36161,null),t.bindFramebuffer(36160,ge.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Pe,3553,null,0);t.bindFramebuffer(36008,ge.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ge.__webglFramebuffer);for(let Pe=0;Pe<b.length;Pe++){ae.push(36064+Pe),T.depthBuffer&&ae.push(pe);const Ce=ge.__ignoreDepthValues!==void 0?ge.__ignoreDepthValues:!1;if(Ce===!1&&(T.depthBuffer&&(Z|=256),T.stencilBuffer&&(Z|=1024)),Q&&r.framebufferRenderbuffer(36008,36064,36161,ge.__webglColorRenderbuffer[Pe]),Ce===!0&&(r.invalidateFramebuffer(36008,[pe]),r.invalidateFramebuffer(36009,[pe])),Q){const Re=n.get(b[Pe]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Re,0)}r.blitFramebuffer(0,0,N,ee,0,0,N,ee,Z,9728),p&&r.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Q)for(let Pe=0;Pe<b.length;Pe++){t.bindFramebuffer(36160,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Pe,36161,ge.__webglColorRenderbuffer[Pe]);const Ce=n.get(b[Pe]).__webglTexture;t.bindFramebuffer(36160,ge.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Pe,3553,Ce,0)}t.bindFramebuffer(36009,ge.__webglMultisampledFramebuffer)}}function ue(T){return Math.min(h,T.samples)}function te(T){const b=n.get(T);return o&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function de(T){const b=a.render.frame;g.get(T)!==b&&(g.set(T,b),T.update())}function oe(T,b){const N=T.encoding,ee=T.format,Z=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===Fu||N!==ss&&(N===ht?o===!1?e.has("EXT_sRGB")===!0&&ee===ci?(T.format=Fu,T.minFilter=Xn,T.generateMipmaps=!1):b=Im.sRGBToLinear(b):(ee!==ci||Z!==rs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",N)),b}this.allocateTextureUnit=k,this.resetTextureUnits=X,this.setTexture2D=L,this.setTexture2DArray=_e,this.setTexture3D=V,this.setTextureCube=le,this.rebindTextures=Y,this.setupRenderTarget=re,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=I,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=te}function J1(r,e,t){const n=t.isWebGL2;function i(s,a=null){let o;if(s===rs)return 5121;if(s===Nv)return 32819;if(s===zv)return 32820;if(s===Iv)return 5120;if(s===Fv)return 5122;if(s===Lm)return 5123;if(s===Ov)return 5124;if(s===Xr)return 5125;if(s===qr)return 5126;if(s===ra)return n?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Uv)return 6406;if(s===ci)return 6408;if(s===Bv)return 6409;if(s===kv)return 6410;if(s===Zr)return 6402;if(s===to)return 34041;if(s===Fu)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Gv)return 6403;if(s===Vv)return 36244;if(s===Hv)return 33319;if(s===Wv)return 33320;if(s===Xv)return 36249;if(s===bc||s===Mc||s===Sc||s===wc)if(a===ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===bc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===wc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===bc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Mc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Sc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===wc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===kh||s===Gh||s===Vh||s===Hh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===kh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Gh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Vh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qv)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Wh||s===Xh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Wh)return a===ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Xh)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===qh||s===Yh||s===$h||s===jh||s===Kh||s===Zh||s===Jh||s===Qh||s===ed||s===td||s===nd||s===id||s===rd||s===sd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===qh)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Yh)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$h)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===jh)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Kh)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zh)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Jh)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Qh)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ed)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===td)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===nd)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===id)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===rd)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===sd)return a===ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tc)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Tc)return a===ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Yv||s===od||s===ad||s===ld)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Tc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===od)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ad)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ld)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hs?n?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class Q1 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ha extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ew={type:"move"};class Kc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ew)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ha;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class tw extends zn{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:Zr,u!==Zr&&u!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zr&&(n=Xr),n===void 0&&u===to&&(n=Hs),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1}}class nw extends mo{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const d=t.getContextAttributes();let m=null,_=null;const S=[],x=[],y=new Set,w=new Map,P=new qn;P.layers.enable(1),P.viewport=new Wt;const A=new qn;A.layers.enable(2),A.viewport=new Wt;const v=[P,A],M=new Q1;M.layers.enable(1),M.layers.enable(2);let D=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let le=S[V];return le===void 0&&(le=new Kc,S[V]=le),le.getTargetRaySpace()},this.getControllerGrip=function(V){let le=S[V];return le===void 0&&(le=new Kc,S[V]=le),le.getGripSpace()},this.getHand=function(V){let le=S[V];return le===void 0&&(le=new Kc,S[V]=le),le.getHandSpace()};function B(V){const le=x.indexOf(V.inputSource);if(le===-1)return;const fe=S[le];fe!==void 0&&fe.dispatchEvent({type:V.type,data:V.inputSource})}function U(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",O);for(let V=0;V<S.length;V++){const le=x[V];le!==null&&(x[V]=null,S[V].disconnect(le))}D=null,W=null,e.setRenderTarget(m),p=null,f=null,h=null,i=null,_=null,_e.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",U),i.addEventListener("inputsourceschange",O),d.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const le={antialias:i.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,le),i.updateRenderState({baseLayer:p}),_=new os(p.framebufferWidth,p.framebufferHeight,{format:ci,type:rs,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let le=null,fe=null,H=null;d.depth&&(H=d.stencil?35056:33190,le=d.stencil?to:Zr,fe=d.stencil?Hs:Xr);const me={colorFormat:32856,depthFormat:H,scaleFactor:s};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(me),i.updateRenderState({layers:[f]}),_=new os(f.textureWidth,f.textureHeight,{format:ci,type:rs,depthTexture:new tw(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const xe=e.properties.get(_);xe.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),_e.setContext(i),_e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function O(V){for(let le=0;le<V.removed.length;le++){const fe=V.removed[le],H=x.indexOf(fe);H>=0&&(x[H]=null,S[H].disconnect(fe))}for(let le=0;le<V.added.length;le++){const fe=V.added[le];let H=x.indexOf(fe);if(H===-1){for(let xe=0;xe<S.length;xe++)if(xe>=x.length){x.push(fe),H=xe;break}else if(x[xe]===null){x[xe]=fe,H=xe;break}if(H===-1)break}const me=S[H];me&&me.connect(fe)}}const q=new $,j=new $;function X(V,le,fe){q.setFromMatrixPosition(le.matrixWorld),j.setFromMatrixPosition(fe.matrixWorld);const H=q.distanceTo(j),me=le.projectionMatrix.elements,xe=fe.projectionMatrix.elements,ye=me[14]/(me[10]-1),we=me[14]/(me[10]+1),Ae=(me[9]+1)/me[5],ze=(me[9]-1)/me[5],C=(me[8]-1)/me[0],R=(xe[8]+1)/xe[0],Y=ye*C,re=ye*R,ne=H/(-C+R),I=ne*-C;le.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(I),V.translateZ(ne),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const ue=ye+ne,te=we+ne,de=Y-I,oe=re+(H-I),T=Ae*we/te*ue,b=ze*we/te*ue;V.projectionMatrix.makePerspective(de,oe,T,b,ue,te)}function k(V,le){le===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(le.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;M.near=A.near=P.near=V.near,M.far=A.far=P.far=V.far,(D!==M.near||W!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,W=M.far);const le=V.parent,fe=M.cameras;k(M,le);for(let me=0;me<fe.length;me++)k(fe[me],le);M.matrixWorld.decompose(M.position,M.quaternion,M.scale),V.matrix.copy(M.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const H=V.children;for(let me=0,xe=H.length;me<xe;me++)H[me].updateMatrixWorld(!0);fe.length===2?X(M,P,A):M.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.getPlanes=function(){return y};let se=null;function L(V,le){if(u=le.getViewerPose(c||a),g=le,u!==null){const fe=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let H=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,H=!0);for(let me=0;me<fe.length;me++){const xe=fe[me];let ye=null;if(p!==null)ye=p.getViewport(xe);else{const Ae=h.getViewSubImage(f,xe);ye=Ae.viewport,me===0&&(e.setRenderTargetTextures(_,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(_))}let we=v[me];we===void 0&&(we=new qn,we.layers.enable(me),we.viewport=new Wt,v[me]=we),we.matrix.fromArray(xe.transform.matrix),we.projectionMatrix.fromArray(xe.projectionMatrix),we.viewport.set(ye.x,ye.y,ye.width,ye.height),me===0&&M.matrix.copy(we.matrix),H===!0&&M.cameras.push(we)}}for(let fe=0;fe<S.length;fe++){const H=x[fe],me=S[fe];H!==null&&me!==void 0&&me.update(H,le,c||a)}if(se&&se(V,le),le.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:le.detectedPlanes});let fe=null;for(const H of y)le.detectedPlanes.has(H)||(fe===null&&(fe=[]),fe.push(H));if(fe!==null)for(const H of fe)y.delete(H),w.delete(H),n.dispatchEvent({type:"planeremoved",data:H});for(const H of le.detectedPlanes)if(!y.has(H))y.add(H),w.set(H,le.lastChangedTime),n.dispatchEvent({type:"planeadded",data:H});else{const me=w.get(H);H.lastChangedTime>me&&(w.set(H,H.lastChangedTime),n.dispatchEvent({type:"planechanged",data:H}))}}g=null}const _e=new qm;_e.setAnimationLoop(L),this.setAnimationLoop=function(V){se=V},this.dispose=function(){}}}function iw(r,e){function t(d,m){m.color.getRGB(d.fogColor.value,Vm(r)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,S,x){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(d,m):m.isMeshToonMaterial?(i(d,m),u(d,m)):m.isMeshPhongMaterial?(i(d,m),c(d,m)):m.isMeshStandardMaterial?(i(d,m),h(d,m),m.isMeshPhysicalMaterial&&f(d,m,x)):m.isMeshMatcapMaterial?(i(d,m),p(d,m)):m.isMeshDepthMaterial?i(d,m):m.isMeshDistanceMaterial?(i(d,m),g(d,m)):m.isMeshNormalMaterial?i(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&a(d,m)):m.isPointsMaterial?o(d,m,_,S):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===Nn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===Nn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const y=r.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let S;m.map?S=m.map:m.specularMap?S=m.specularMap:m.displacementMap?S=m.displacementMap:m.normalMap?S=m.normalMap:m.bumpMap?S=m.bumpMap:m.roughnessMap?S=m.roughnessMap:m.metalnessMap?S=m.metalnessMap:m.alphaMap?S=m.alphaMap:m.emissiveMap?S=m.emissiveMap:m.clearcoatMap?S=m.clearcoatMap:m.clearcoatNormalMap?S=m.clearcoatNormalMap:m.clearcoatRoughnessMap?S=m.clearcoatRoughnessMap:m.iridescenceMap?S=m.iridescenceMap:m.iridescenceThicknessMap?S=m.iridescenceThicknessMap:m.specularIntensityMap?S=m.specularIntensityMap:m.specularColorMap?S=m.specularColorMap:m.transmissionMap?S=m.transmissionMap:m.thicknessMap?S=m.thicknessMap:m.sheenColorMap?S=m.sheenColorMap:m.sheenRoughnessMap&&(S=m.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix));let x;m.aoMap?x=m.aoMap:m.lightMap&&(x=m.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function a(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function o(d,m,_,S){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=S*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let x;m.map?x=m.map:m.alphaMap&&(x=m.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Nn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function rw(r,e,t,n){let i={},s={},a=[];const o=t.isWebGL2?r.getParameter(35375):0;function l(S,x){const y=x.program;n.uniformBlockBinding(S,y)}function c(S,x){let y=i[S.id];y===void 0&&(g(S),y=u(S),i[S.id]=y,S.addEventListener("dispose",m));const w=x.program;n.updateUBOMapping(S,w);const P=e.render.frame;s[S.id]!==P&&(f(S),s[S.id]=P)}function u(S){const x=h();S.__bindingPointIndex=x;const y=r.createBuffer(),w=S.__size,P=S.usage;return r.bindBuffer(35345,y),r.bufferData(35345,w,P),r.bindBuffer(35345,null),r.bindBufferBase(35345,x,y),y}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const x=i[S.id],y=S.uniforms,w=S.__cache;r.bindBuffer(35345,x);for(let P=0,A=y.length;P<A;P++){const v=y[P];if(p(v,P,w)===!0){const M=v.__offset,D=Array.isArray(v.value)?v.value:[v.value];let W=0;for(let B=0;B<D.length;B++){const U=D[B],O=d(U);typeof U=="number"?(v.__data[0]=U,r.bufferSubData(35345,M+W,v.__data)):U.isMatrix3?(v.__data[0]=U.elements[0],v.__data[1]=U.elements[1],v.__data[2]=U.elements[2],v.__data[3]=U.elements[0],v.__data[4]=U.elements[3],v.__data[5]=U.elements[4],v.__data[6]=U.elements[5],v.__data[7]=U.elements[0],v.__data[8]=U.elements[6],v.__data[9]=U.elements[7],v.__data[10]=U.elements[8],v.__data[11]=U.elements[0]):(U.toArray(v.__data,W),W+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,M,v.__data)}}r.bindBuffer(35345,null)}function p(S,x,y){const w=S.value;if(y[x]===void 0){if(typeof w=="number")y[x]=w;else{const P=Array.isArray(w)?w:[w],A=[];for(let v=0;v<P.length;v++)A.push(P[v].clone());y[x]=A}return!0}else if(typeof w=="number"){if(y[x]!==w)return y[x]=w,!0}else{const P=Array.isArray(y[x])?y[x]:[y[x]],A=Array.isArray(w)?w:[w];for(let v=0;v<P.length;v++){const M=P[v];if(M.equals(A[v])===!1)return M.copy(A[v]),!0}}return!1}function g(S){const x=S.uniforms;let y=0;const w=16;let P=0;for(let A=0,v=x.length;A<v;A++){const M=x[A],D={boundary:0,storage:0},W=Array.isArray(M.value)?M.value:[M.value];for(let B=0,U=W.length;B<U;B++){const O=W[B],q=d(O);D.boundary+=q.boundary,D.storage+=q.storage}if(M.__data=new Float32Array(D.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,A>0){P=y%w;const B=w-P;P!==0&&B-D.boundary<0&&(y+=w-P,M.__offset=y)}y+=D.storage}return P=y%w,P>0&&(y+=w-P),S.__size=y,S.__cache={},this}function d(S){const x={boundary:0,storage:0};return typeof S=="number"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){const x=S.target;x.removeEventListener("dispose",m);const y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function _(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:l,update:c,dispose:_}}function sw(){const r=Pl("canvas");return r.style.display="block",r}function Rf(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:sw(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,a=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,o=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=r.alpha!==void 0?r.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ss,this.useLegacyLights=!0,this.toneMapping=Wi,this.toneMappingExposure=1;const d=this;let m=!1,_=0,S=0,x=null,y=-1,w=null;const P=new Wt,A=new Wt;let v=null,M=e.width,D=e.height,W=1,B=null,U=null;const O=new Wt(0,0,M,D),q=new Wt(0,0,M,D);let j=!1;const X=new Xm;let k=!1,se=!1,L=null;const _e=new kt,V=new $,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function fe(){return x===null?W:1}let H=t;function me(E,G){for(let K=0;K<E.length;K++){const z=E[K],J=e.getContext(z,G);if(J!==null)return J}return null}try{const E={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Lf}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",Fe,!1),e.addEventListener("webglcontextcreationerror",Se,!1),H===null){const G=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&G.shift(),H=me(G,E),H===null)throw me(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,ye,we,Ae,ze,C,R,Y,re,ne,I,ue,te,de,oe,T,b,N,ee,Z,ae,pe,ge,Q;function Pe(){xe=new gS(H),ye=new cS(H,xe,r),xe.init(ye),pe=new J1(H,xe,ye),we=new K1(H,xe,ye),Ae=new vS,ze=new N1,C=new Z1(H,xe,we,ze,ye,pe,Ae),R=new fS(d),Y=new mS(d),re=new Cy(H,ye),ge=new aS(H,xe,re,ye),ne=new _S(H,re,Ae,ge),I=new SS(H,ne,re,Ae),ee=new MS(H,ye,C),T=new uS(ze),ue=new O1(d,R,Y,xe,ye,ge,T),te=new iw(d,ze),de=new U1,oe=new W1(xe,ye),N=new oS(d,R,Y,we,I,u,a),b=new j1(d,I,ye),Q=new rw(H,Ae,ye,we),Z=new lS(H,xe,Ae,ye),ae=new xS(H,xe,Ae,ye),Ae.programs=ue.programs,d.capabilities=ye,d.extensions=xe,d.properties=ze,d.renderLists=de,d.shadowMap=b,d.state=we,d.info=Ae}Pe();const Ce=new nw(d,H);this.xr=Ce,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(M,D,!1))},this.getSize=function(E){return E.set(M,D)},this.setSize=function(E,G,K=!0){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=E,D=G,e.width=Math.floor(E*W),e.height=Math.floor(G*W),K===!0&&(e.style.width=E+"px",e.style.height=G+"px"),this.setViewport(0,0,E,G)},this.getDrawingBufferSize=function(E){return E.set(M*W,D*W).floor()},this.setDrawingBufferSize=function(E,G,K){M=E,D=G,W=K,e.width=Math.floor(E*K),e.height=Math.floor(G*K),this.setViewport(0,0,E,G)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,G,K,z){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,G,K,z),we.viewport(P.copy(O).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(q)},this.setScissor=function(E,G,K,z){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,G,K,z),we.scissor(A.copy(q).multiplyScalar(W).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(E){we.setScissorTest(j=E)},this.setOpaqueSort=function(E){B=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor.apply(N,arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha.apply(N,arguments)},this.clear=function(E=!0,G=!0,K=!0){let z=0;E&&(z|=16384),G&&(z|=256),K&&(z|=1024),H.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Fe,!1),e.removeEventListener("webglcontextcreationerror",Se,!1),de.dispose(),oe.dispose(),ze.dispose(),R.dispose(),Y.dispose(),I.dispose(),ge.dispose(),Q.dispose(),ue.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",ce),Ce.removeEventListener("sessionend",ve),L&&(L.dispose(),L=null),Ee.stop()};function Re(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const E=Ae.autoReset,G=b.enabled,K=b.autoUpdate,z=b.needsUpdate,J=b.type;Pe(),Ae.autoReset=E,b.enabled=G,b.autoUpdate=K,b.needsUpdate=z,b.type=J}function Se(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ge(E){const G=E.target;G.removeEventListener("dispose",Ge),Le(G)}function Le(E){ot(E),ze.remove(E)}function ot(E){const G=ze.get(E).programs;G!==void 0&&(G.forEach(function(K){ue.releaseProgram(K)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,G,K,z,J,Me){G===null&&(G=le);const Oe=J.isMesh&&J.matrixWorld.determinant()<0,Ue=He(E,G,K,z,J);we.setMaterial(z,Oe);let Ne=K.index,Be=1;z.wireframe===!0&&(Ne=ne.getWireframeAttribute(K),Be=2);const Ve=K.drawRange,qe=K.attributes.position;let lt=Ve.start*Be,tt=(Ve.start+Ve.count)*Be;Me!==null&&(lt=Math.max(lt,Me.start*Be),tt=Math.min(tt,(Me.start+Me.count)*Be)),Ne!==null?(lt=Math.max(lt,0),tt=Math.min(tt,Ne.count)):qe!=null&&(lt=Math.max(lt,0),tt=Math.min(tt,qe.count));const ct=tt-lt;if(ct<0||ct===1/0)return;ge.setup(J,z,Ue,K,Ne);let Nt,mt=Z;if(Ne!==null&&(Nt=re.get(Ne),mt=ae,mt.setIndex(Nt)),J.isMesh)z.wireframe===!0?(we.setLineWidth(z.wireframeLinewidth*fe()),mt.setMode(1)):mt.setMode(4);else if(J.isLine){let Ke=z.linewidth;Ke===void 0&&(Ke=1),we.setLineWidth(Ke*fe()),J.isLineSegments?mt.setMode(1):J.isLineLoop?mt.setMode(2):mt.setMode(3)}else J.isPoints?mt.setMode(0):J.isSprite&&mt.setMode(4);if(J.isInstancedMesh)mt.renderInstances(lt,ct,J.count);else if(K.isInstancedBufferGeometry){const Ke=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Di=Math.min(K.instanceCount,Ke);mt.renderInstances(lt,ct,Di)}else mt.render(lt,ct)},this.compile=function(E,G){function K(z,J,Me){z.transparent===!0&&z.side===rr&&z.forceSinglePass===!1?(z.side=Nn,z.needsUpdate=!0,he(z,J,Me),z.side=yr,z.needsUpdate=!0,he(z,J,Me),z.side=rr):he(z,J,Me)}f=oe.get(E),f.init(),g.push(f),E.traverseVisible(function(z){z.isLight&&z.layers.test(G.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights(d.useLegacyLights),E.traverse(function(z){const J=z.material;if(J)if(Array.isArray(J))for(let Me=0;Me<J.length;Me++){const Oe=J[Me];K(Oe,E,z)}else K(J,E,z)}),g.pop(),f=null};let F=null;function ie(E){F&&F(E)}function ce(){Ee.stop()}function ve(){Ee.start()}const Ee=new qm;Ee.setAnimationLoop(ie),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(E){F=E,Ce.setAnimationLoop(E),E===null?Ee.stop():Ee.start()},Ce.addEventListener("sessionstart",ce),Ce.addEventListener("sessionend",ve),this.render=function(E,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(G),G=Ce.getCamera()),E.isScene===!0&&E.onBeforeRender(d,E,G,x),f=oe.get(E,g.length),f.init(),g.push(f),_e.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),X.setFromProjectionMatrix(_e),se=this.localClippingEnabled,k=T.init(this.clippingPlanes,se),h=de.get(E,p.length),h.init(),p.push(h),it(E,G,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(B,U),k===!0&&T.beginShadows();const K=f.state.shadowsArray;if(b.render(K,E,G),k===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),N.render(h,E),f.setupLights(d.useLegacyLights),G.isArrayCamera){const z=G.cameras;for(let J=0,Me=z.length;J<Me;J++){const Oe=z[J];at(h,E,Oe,Oe.viewport)}}else at(h,E,G);x!==null&&(C.updateMultisampleRenderTarget(x),C.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(d,E,G),ge.resetDefaultState(),y=-1,w=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function it(E,G,K,z){if(E.visible===!1)return;if(E.layers.test(G.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(G);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){z&&V.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);const Oe=I.update(E),Ue=E.material;Ue.visible&&h.push(E,Oe,Ue,K,V.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Ae.render.frame&&(E.skeleton.update(),E.skeleton.frame=Ae.render.frame),!E.frustumCulled||X.intersectsObject(E))){z&&V.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_e);const Oe=I.update(E),Ue=E.material;if(Array.isArray(Ue)){const Ne=Oe.groups;for(let Be=0,Ve=Ne.length;Be<Ve;Be++){const qe=Ne[Be],lt=Ue[qe.materialIndex];lt&&lt.visible&&h.push(E,Oe,lt,K,V.z,qe)}}else Ue.visible&&h.push(E,Oe,Ue,K,V.z,null)}}const Me=E.children;for(let Oe=0,Ue=Me.length;Oe<Ue;Oe++)it(Me[Oe],G,K,z)}function at(E,G,K,z){const J=E.opaque,Me=E.transmissive,Oe=E.transparent;f.setupLightsView(K),k===!0&&T.setGlobalState(d.clippingPlanes,K),Me.length>0&&St(J,G,K),z&&we.viewport(P.copy(z)),J.length>0&&ke(J,G,K),Me.length>0&&ke(Me,G,K),Oe.length>0&&ke(Oe,G,K),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function St(E,G,K){const z=ye.isWebGL2;L===null&&(L=new os(1024,1024,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?ra:rs,minFilter:ia,samples:z&&s===!0?4:0}));const J=d.getRenderTarget();d.setRenderTarget(L),d.clear();const Me=d.toneMapping;d.toneMapping=Wi,ke(E,G,K),d.toneMapping=Me,C.updateMultisampleRenderTarget(L),C.updateRenderTargetMipmap(L),d.setRenderTarget(J)}function ke(E,G,K){const z=G.isScene===!0?G.overrideMaterial:null;for(let J=0,Me=E.length;J<Me;J++){const Oe=E[J],Ue=Oe.object,Ne=Oe.geometry,Be=z===null?Oe.material:z,Ve=Oe.group;Ue.layers.test(K.layers)&&Te(Ue,G,K,Ne,Be,Ve)}}function Te(E,G,K,z,J,Me){E.onBeforeRender(d,G,K,z,J,Me),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(d,G,K,z,E,Me),J.transparent===!0&&J.side===rr&&J.forceSinglePass===!1?(J.side=Nn,J.needsUpdate=!0,d.renderBufferDirect(K,G,z,J,E,Me),J.side=yr,J.needsUpdate=!0,d.renderBufferDirect(K,G,z,J,E,Me),J.side=rr):d.renderBufferDirect(K,G,z,J,E,Me),E.onAfterRender(d,G,K,z,J,Me)}function he(E,G,K){G.isScene!==!0&&(G=le);const z=ze.get(E),J=f.state.lights,Me=f.state.shadowsArray,Oe=J.state.version,Ue=ue.getParameters(E,J.state,Me,G,K),Ne=ue.getProgramCacheKey(Ue);let Be=z.programs;z.environment=E.isMeshStandardMaterial?G.environment:null,z.fog=G.fog,z.envMap=(E.isMeshStandardMaterial?Y:R).get(E.envMap||z.environment),Be===void 0&&(E.addEventListener("dispose",Ge),Be=new Map,z.programs=Be);let Ve=Be.get(Ne);if(Ve!==void 0){if(z.currentProgram===Ve&&z.lightsStateVersion===Oe)return De(E,Ue),Ve}else Ue.uniforms=ue.getUniforms(E),E.onBuild(K,Ue,d),E.onBeforeCompile(Ue,d),Ve=ue.acquireProgram(Ue,Ne),Be.set(Ne,Ve),z.uniforms=Ue.uniforms;const qe=z.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(qe.clippingPlanes=T.uniform),De(E,Ue),z.needsLights=Et(E),z.lightsStateVersion=Oe,z.needsLights&&(qe.ambientLightColor.value=J.state.ambient,qe.lightProbe.value=J.state.probe,qe.directionalLights.value=J.state.directional,qe.directionalLightShadows.value=J.state.directionalShadow,qe.spotLights.value=J.state.spot,qe.spotLightShadows.value=J.state.spotShadow,qe.rectAreaLights.value=J.state.rectArea,qe.ltc_1.value=J.state.rectAreaLTC1,qe.ltc_2.value=J.state.rectAreaLTC2,qe.pointLights.value=J.state.point,qe.pointLightShadows.value=J.state.pointShadow,qe.hemisphereLights.value=J.state.hemi,qe.directionalShadowMap.value=J.state.directionalShadowMap,qe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,qe.spotShadowMap.value=J.state.spotShadowMap,qe.spotLightMatrix.value=J.state.spotLightMatrix,qe.spotLightMap.value=J.state.spotLightMap,qe.pointShadowMap.value=J.state.pointShadowMap,qe.pointShadowMatrix.value=J.state.pointShadowMatrix);const lt=Ve.getUniforms(),tt=dl.seqWithValue(lt.seq,qe);return z.currentProgram=Ve,z.uniformsList=tt,Ve}function De(E,G){const K=ze.get(E);K.outputEncoding=G.outputEncoding,K.instancing=G.instancing,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function He(E,G,K,z,J){G.isScene!==!0&&(G=le),C.resetTextureUnits();const Me=G.fog,Oe=z.isMeshStandardMaterial?G.environment:null,Ue=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:ss,Ne=(z.isMeshStandardMaterial?Y:R).get(z.envMap||Oe),Be=z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ve=!!z.normalMap&&!!K.attributes.tangent,qe=!!K.morphAttributes.position,lt=!!K.morphAttributes.normal,tt=!!K.morphAttributes.color,ct=z.toneMapped?d.toneMapping:Wi,Nt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,mt=Nt!==void 0?Nt.length:0,Ke=ze.get(z),Di=f.state.lights;if(k===!0&&(se===!0||E!==w)){const wn=E===w&&z.id===y;T.setState(z,E,wn)}let st=!1;z.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Di.state.version||Ke.outputEncoding!==Ue||J.isInstancedMesh&&Ke.instancing===!1||!J.isInstancedMesh&&Ke.instancing===!0||J.isSkinnedMesh&&Ke.skinning===!1||!J.isSkinnedMesh&&Ke.skinning===!0||Ke.envMap!==Ne||z.fog===!0&&Ke.fog!==Me||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==T.numPlanes||Ke.numIntersection!==T.numIntersection)||Ke.vertexAlphas!==Be||Ke.vertexTangents!==Ve||Ke.morphTargets!==qe||Ke.morphNormals!==lt||Ke.morphColors!==tt||Ke.toneMapping!==ct||ye.isWebGL2===!0&&Ke.morphTargetsCount!==mt)&&(st=!0):(st=!0,Ke.__version=z.version);let Sn=Ke.currentProgram;st===!0&&(Sn=he(z,G,J));let ih=!1,xo=!1,cc=!1;const tn=Sn.getUniforms(),Er=Ke.uniforms;if(we.useProgram(Sn.program)&&(ih=!0,xo=!0,cc=!0),z.id!==y&&(y=z.id,xo=!0),ih||w!==E){if(tn.setValue(H,"projectionMatrix",E.projectionMatrix),ye.logarithmicDepthBuffer&&tn.setValue(H,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,xo=!0,cc=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const wn=tn.map.cameraPosition;wn!==void 0&&wn.setValue(H,V.setFromMatrixPosition(E.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&tn.setValue(H,"isOrthographic",E.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||J.isSkinnedMesh)&&tn.setValue(H,"viewMatrix",E.matrixWorldInverse)}if(J.isSkinnedMesh){tn.setOptional(H,J,"bindMatrix"),tn.setOptional(H,J,"bindMatrixInverse");const wn=J.skeleton;wn&&(ye.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),tn.setValue(H,"boneTexture",wn.boneTexture,C),tn.setValue(H,"boneTextureSize",wn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const uc=K.morphAttributes;if((uc.position!==void 0||uc.normal!==void 0||uc.color!==void 0&&ye.isWebGL2===!0)&&ee.update(J,K,Sn),(xo||Ke.receiveShadow!==J.receiveShadow)&&(Ke.receiveShadow=J.receiveShadow,tn.setValue(H,"receiveShadow",J.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Er.envMap.value=Ne,Er.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),xo&&(tn.setValue(H,"toneMappingExposure",d.toneMappingExposure),Ke.needsLights&&Xe(Er,cc),Me&&z.fog===!0&&te.refreshFogUniforms(Er,Me),te.refreshMaterialUniforms(Er,z,W,D,L),dl.upload(H,Ke.uniformsList,Er,C)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(dl.upload(H,Ke.uniformsList,Er,C),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&tn.setValue(H,"center",J.center),tn.setValue(H,"modelViewMatrix",J.modelViewMatrix),tn.setValue(H,"normalMatrix",J.normalMatrix),tn.setValue(H,"modelMatrix",J.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const wn=z.uniformsGroups;for(let fc=0,M_=wn.length;fc<M_;fc++)if(ye.isWebGL2){const rh=wn[fc];Q.update(rh,Sn),Q.bind(rh,Sn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Sn}function Xe(E,G){E.ambientLightColor.needsUpdate=G,E.lightProbe.needsUpdate=G,E.directionalLights.needsUpdate=G,E.directionalLightShadows.needsUpdate=G,E.pointLights.needsUpdate=G,E.pointLightShadows.needsUpdate=G,E.spotLights.needsUpdate=G,E.spotLightShadows.needsUpdate=G,E.rectAreaLights.needsUpdate=G,E.hemisphereLights.needsUpdate=G}function Et(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,G,K){ze.get(E.texture).__webglTexture=G,ze.get(E.depthTexture).__webglTexture=K;const z=ze.get(E);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=K===void 0,z.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,G){const K=ze.get(E);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(E,G=0,K=0){x=E,_=G,S=K;let z=!0,J=null,Me=!1,Oe=!1;if(E){const Ne=ze.get(E);Ne.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(36160,null),z=!1):Ne.__webglFramebuffer===void 0?C.setupRenderTarget(E):Ne.__hasExternalTextures&&C.rebindTextures(E,ze.get(E.texture).__webglTexture,ze.get(E.depthTexture).__webglTexture);const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Oe=!0);const Ve=ze.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(J=Ve[G],Me=!0):ye.isWebGL2&&E.samples>0&&C.useMultisampledRTT(E)===!1?J=ze.get(E).__webglMultisampledFramebuffer:J=Ve,P.copy(E.viewport),A.copy(E.scissor),v=E.scissorTest}else P.copy(O).multiplyScalar(W).floor(),A.copy(q).multiplyScalar(W).floor(),v=j;if(we.bindFramebuffer(36160,J)&&ye.drawBuffers&&z&&we.drawBuffers(E,J),we.viewport(P),we.scissor(A),we.setScissorTest(v),Me){const Ne=ze.get(E.texture);H.framebufferTexture2D(36160,36064,34069+G,Ne.__webglTexture,K)}else if(Oe){const Ne=ze.get(E.texture),Be=G||0;H.framebufferTextureLayer(36160,36064,Ne.__webglTexture,K||0,Be)}y=-1},this.readRenderTargetPixels=function(E,G,K,z,J,Me,Oe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=ze.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ue=Ue[Oe]),Ue){we.bindFramebuffer(36160,Ue);try{const Ne=E.texture,Be=Ne.format,Ve=Ne.type;if(Be!==ci&&pe.convert(Be)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const qe=Ve===ra&&(xe.has("EXT_color_buffer_half_float")||ye.isWebGL2&&xe.has("EXT_color_buffer_float"));if(Ve!==rs&&pe.convert(Ve)!==H.getParameter(35738)&&!(Ve===qr&&(ye.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=E.width-z&&K>=0&&K<=E.height-J&&H.readPixels(G,K,z,J,pe.convert(Be),pe.convert(Ve),Me)}finally{const Ne=x!==null?ze.get(x).__webglFramebuffer:null;we.bindFramebuffer(36160,Ne)}}},this.copyFramebufferToTexture=function(E,G,K=0){const z=Math.pow(2,-K),J=Math.floor(G.image.width*z),Me=Math.floor(G.image.height*z);C.setTexture2D(G,0),H.copyTexSubImage2D(3553,K,0,0,E.x,E.y,J,Me),we.unbindTexture()},this.copyTextureToTexture=function(E,G,K,z=0){const J=G.image.width,Me=G.image.height,Oe=pe.convert(K.format),Ue=pe.convert(K.type);C.setTexture2D(K,0),H.pixelStorei(37440,K.flipY),H.pixelStorei(37441,K.premultiplyAlpha),H.pixelStorei(3317,K.unpackAlignment),G.isDataTexture?H.texSubImage2D(3553,z,E.x,E.y,J,Me,Oe,Ue,G.image.data):G.isCompressedTexture?H.compressedTexSubImage2D(3553,z,E.x,E.y,G.mipmaps[0].width,G.mipmaps[0].height,Oe,G.mipmaps[0].data):H.texSubImage2D(3553,z,E.x,E.y,Oe,Ue,G.image),z===0&&K.generateMipmaps&&H.generateMipmap(3553),we.unbindTexture()},this.copyTextureToTexture3D=function(E,G,K,z,J=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=E.max.x-E.min.x+1,Oe=E.max.y-E.min.y+1,Ue=E.max.z-E.min.z+1,Ne=pe.convert(z.format),Be=pe.convert(z.type);let Ve;if(z.isData3DTexture)C.setTexture3D(z,0),Ve=32879;else if(z.isDataArrayTexture)C.setTexture2DArray(z,0),Ve=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,z.flipY),H.pixelStorei(37441,z.premultiplyAlpha),H.pixelStorei(3317,z.unpackAlignment);const qe=H.getParameter(3314),lt=H.getParameter(32878),tt=H.getParameter(3316),ct=H.getParameter(3315),Nt=H.getParameter(32877),mt=K.isCompressedTexture?K.mipmaps[0]:K.image;H.pixelStorei(3314,mt.width),H.pixelStorei(32878,mt.height),H.pixelStorei(3316,E.min.x),H.pixelStorei(3315,E.min.y),H.pixelStorei(32877,E.min.z),K.isDataTexture||K.isData3DTexture?H.texSubImage3D(Ve,J,G.x,G.y,G.z,Me,Oe,Ue,Ne,Be,mt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ve,J,G.x,G.y,G.z,Me,Oe,Ue,Ne,mt.data)):H.texSubImage3D(Ve,J,G.x,G.y,G.z,Me,Oe,Ue,Ne,Be,mt),H.pixelStorei(3314,qe),H.pixelStorei(32878,lt),H.pixelStorei(3316,tt),H.pixelStorei(3315,ct),H.pixelStorei(32877,Nt),J===0&&z.generateMipmaps&&H.generateMipmap(Ve),we.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),we.unbindTexture()},this.resetState=function(){_=0,S=0,x=null,we.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Rf.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class ow extends Rf{}ow.prototype.isWebGL1Renderer=!0;class aw extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Zm extends ga{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qd=new $,Yd=new $,$d=new kt,Zc=new Nm,Wa=new tc;class lw extends _n{constructor(e=new Ki,t=new Zm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)qd.fromBufferAttribute(t,i-1),Yd.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=qd.distanceTo(Yd);e.setAttribute("lineDistance",new Ci(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wa.copy(n.boundingSphere),Wa.applyMatrix4(i),Wa.radius+=s,e.ray.intersectsSphere(Wa)===!1)return;$d.copy(i).invert(),Zc.copy(e.ray).applyMatrix4($d);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new $,u=new $,h=new $,f=new $,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let x=_,y=S-1;x<y;x+=p){const w=g.getX(x),P=g.getX(x+1);if(c.fromBufferAttribute(m,w),u.fromBufferAttribute(m,P),Zc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(f);v<e.near||v>e.far||t.push({distance:v,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),S=Math.min(m.count,a.start+a.count);for(let x=_,y=S-1;x<y;x+=p){if(c.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Zc.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const jd=new $,Kd=new $;class cw extends lw{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)jd.fromBufferAttribute(t,i),Kd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jd.distanceTo(Kd);e.setAttribute("lineDistance",new Ci(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Xa=new $,qa=new $,Jc=new $,Ya=new Si;class uw extends Ki{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos(hl*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:d,b:m,c:_}=Ya;if(d.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),_.fromBufferAttribute(o,c[2]),Ya.getNormal(Jc),h[0]=`${Math.round(d.x*i)},${Math.round(d.y*i)},${Math.round(d.z*i)}`,h[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,h[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let S=0;S<3;S++){const x=(S+1)%3,y=h[S],w=h[x],P=Ya[u[S]],A=Ya[u[x]],v=`${y}_${w}`,M=`${w}_${y}`;M in f&&f[M]?(Jc.dot(f[M].normal)<=s&&(p.push(P.x,P.y,P.z),p.push(A.x,A.y,A.z)),f[M]=null):v in f||(f[v]={index0:c[S],index1:c[x],normal:Jc.clone()})}}for(const g in f)if(f[g]){const{index0:d,index1:m}=f[g];Xa.fromBufferAttribute(o,d),qa.fromBufferAttribute(o,m),p.push(Xa.x,Xa.y,Xa.z),p.push(qa.x,qa.y,qa.z)}this.setAttribute("position",new Ci(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class fw{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Zd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Zd();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Zd(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lf);const If=(r,e)=>{const t=r.__vccOpts||r;for(const[n,i]of e)t[n]=i;return t},hw={},Jm=r=>(C0("data-v-149ad815"),r=r(),A0(),r),dw={class:"mv"},pw=Jm(()=>Rn("h1",null,[Mm("Shusuke Yoshizawa"),Rn("br"),Rn("small",null,"Portfolio")],-1)),mw=Jm(()=>Rn("div",{class:"scroll"},null,-1)),gw=[pw,mw];function _w(r,e){return Wr(),Rs("div",dw,gw)}const xw=If(hw,[["render",_w],["__scopeId","data-v-149ad815"]]);function Ui(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Qm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Un={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},io={duration:.5,overwrite:!1,delay:0},Ff,Jt,At,$n=1e8,ft=1/$n,Nu=Math.PI*2,vw=Nu/4,yw=0,eg=Math.sqrt,bw=Math.cos,Mw=Math.sin,Gt=function(e){return typeof e=="string"},Mt=function(e){return typeof e=="function"},Yi=function(e){return typeof e=="number"},Of=function(e){return typeof e>"u"},Li=function(e){return typeof e=="object"},xn=function(e){return e!==!1},Nf=function(){return typeof window<"u"},$a=function(e){return Mt(e)||Gt(e)},tg=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qt=Array.isArray,zu=/(?:-?\.?\d|\.)+/gi,ng=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Qc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ig=/[+-]=-?[.\d]+/,rg=/[^,'"\[\]\s]+/gi,Sw=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,xt,Hn,Uu,zf,Bn={},Ll={},sg,og=function(e){return(Ll=as(e,Bn))&&Mn},Uf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Dl=function(e,t){return!t&&console.warn(e)},ag=function(e,t){return e&&(Bn[e]=t)&&Ll&&(Ll[e]=t)||Bn},oa=function(){return 0},ww={suppressEvents:!0,isStart:!0,kill:!1},pl={suppressEvents:!0,kill:!1},Tw={suppressEvents:!0},Bf={},mr=[],Bu={},lg,Ln={},eu={},Jd=30,ml=[],kf="",Gf=function(e){var t=e[0],n,i;if(Li(t)||Mt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ml.length;i--&&!ml[i].targetTest(t););n=ml[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Rg(e[i],n)))||e.splice(i,1);return e},Jr=function(e){return e._gsap||Gf(jn(e))[0]._gsap},cg=function(e,t,n){return(n=e[t])&&Mt(n)?e[t]():Of(n)&&e.getAttribute&&e.getAttribute(t)||n},vn=function(e,t){return(e=e.split(",")).forEach(t)||e},Tt=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},Xs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ew=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Rl=function(){var e=mr.length,t=mr.slice(0),n,i;for(Bu={},mr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ug=function(e,t,n,i){mr.length&&!Jt&&Rl(),e.render(t,n,i||Jt&&t<0&&(e._initted||e._startAt)),mr.length&&!Jt&&Rl()},fg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(rg).length<2?t:Gt(e)?e.trim():e},hg=function(e){return e},Qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Cw=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},as=function(e,t){for(var n in t)e[n]=t[n];return e},Qd=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Li(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Il=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ko=function(e){var t=e.parent||xt,n=e.keyframes?Cw(Qt(e.keyframes)):Qn;if(xn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Aw=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},dg=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},sc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Mr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Pw=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ku=function(e,t,n,i){return e._startAt&&(Jt?e._startAt.revert(pl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Lw=function r(e){return!e||e._ts&&r(e.parent)},ep=function(e){return e._repeat?ro(e._tTime,e=e.duration()+e._rDelay)*e:0},ro=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Fl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},oc=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||ft)||0))},ac=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),oc(e),n._dirty||Qr(n,e)),e},pg=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=Fl(e.rawTime(),t),(!t._dur||_a(0,t.totalDuration(),n)-t._tTime>ft)&&t.render(n,!0)),Qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-ft}},wi=function(e,t,n,i){return t.parent&&Mr(t),t._start=Ht((Yi(n)?n:n||e!==xt?Vn(e,n,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),dg(e,t,"_first","_last",e._sort?"_start":0),Gu(t)||(e._recent=t),i||pg(e,t),e._ts<0&&ac(e,e._tTime),e},mg=function(e,t){return(Bn.ScrollTrigger||Uf("scrollTrigger",t))&&Bn.ScrollTrigger.create(t,e)},gg=function(e,t,n,i,s){if(Hf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&lg!==Fn.frame)return mr.push(e),e._lazy=[s,i],1},Dw=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Gu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Rw=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Dw(e)&&!(!e._initted&&Gu(e))||(e._ts<0||e._dp._ts<0)&&!Gu(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=_a(0,e._tDur,t),u=ro(l,o),e._yoyo&&u&1&&(a=1-a),u!==ro(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Jt||i||e._zTime===ft||!t&&e._zTime){if(!e._initted&&gg(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?ft:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ku(e,t,n,!0),e._onUpdate&&!n&&Kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Mr(e,1),!n&&!Jt&&(Kn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Iw=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},so=function(e,t,n,i){var s=e._repeat,a=Ht(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ht(a*(s+1)+e._rDelay*s):a,o>0&&!i&&ac(e,e._tTime=e._tDur*o),e.parent&&oc(e),n||Qr(e.parent,e),e},tp=function(e){return e instanceof gn?Qr(e):so(e,e._dur)},Fw={_start:0,endTime:oa,totalDuration:oa},Vn=function r(e,t,n){var i=e.labels,s=e._recent||Fw,a=e.duration()>=$n?s.endTime(!1):e._dur,o,l,c;return Gt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(Qt(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Go=function(e,t,n){var i=Yi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=xn(l.vars.inherit)&&l.parent;a.immediateRender=xn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Dt(t[0],a,t[s+1])},Tr=function(e,t){return e||e===0?t(e):t},_a=function(e,t,n){return n<e?e:n>t?t:n},Kt=function(e,t){return!Gt(e)||!(t=Sw.exec(e))?"":t[1]},Ow=function(e,t,n){return Tr(n,function(i){return _a(e,t,i)})},Vu=[].slice,_g=function(e,t){return e&&Li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Li(e[0]))&&!e.nodeType&&e!==Hn},Nw=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Gt(i)&&!t||_g(i,1)?(s=n).push.apply(s,jn(i)):n.push(i)})||n},jn=function(e,t,n){return At&&!t&&At.selector?At.selector(e):Gt(e)&&!n&&(Uu||!oo())?Vu.call((t||zf).querySelectorAll(e),0):Qt(e)?Nw(e,n):_g(e)?Vu.call(e,0):e?[e]:[]},Hu=function(e){return e=jn(e)[0]||Dl("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return jn(t,n.querySelectorAll?n:n===e?Dl("Invalid scope")||zf.createElement("div"):e)}},xg=function(e){return e.sort(function(){return .5-Math.random()})},vg=function(e){if(Mt(e))return e;var t=Li(e)?e:{each:e},n=es(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Gt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(f,p,g){var d=(g||t).length,m=a[d],_,S,x,y,w,P,A,v,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,$n])[1],!M){for(A=-$n;A<(A=g[M++].getBoundingClientRect().left)&&M<d;);M--}for(m=a[d]=[],_=l?Math.min(M,d)*u-.5:i%M,S=M===$n?0:l?d*h/M-.5:i/M|0,A=0,v=$n,P=0;P<d;P++)x=P%M-_,y=S-(P/M|0),m[P]=w=c?Math.abs(c==="y"?y:x):eg(x*x+y*y),w>A&&(A=w),w<v&&(v=w);i==="random"&&xg(m),m.max=A-v,m.min=v,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(M>d?d-1:c?c==="y"?d/M:M:Math.max(M,d/M))||0)*(i==="edges"?-1:1),m.b=d<0?s-d:s,m.u=Kt(t.amount||t.each)||0,n=n&&d<0?Pg(n):n}return d=(m[f]-m.min)/m.max||0,Ht(m.b+(n?n(d):d)*m.v)+m.u}},Wu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ht(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Yi(n)?0:Kt(n))}},yg=function(e,t){var n=Qt(e),i,s;return!n&&Li(e)&&(i=n=e.radius||$n,e.values?(e=jn(e.values),(s=!Yi(e[0]))&&(i*=i)):e=Wu(e.increment)),Tr(t,n?Mt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=$n,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-o,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-o),f<c&&(c=f,u=h);return u=!i||c<=i?e[u]:a,s||u===a||Yi(a)?u:u+Kt(a)}:Wu(e))},bg=function(e,t,n,i){return Tr(Qt(e)?!t:n===!0?!!(n=0):!i,function(){return Qt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},zw=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},Uw=function(e,t){return function(n){return e(parseFloat(n))+(t||Kt(n))}},Bw=function(e,t,n){return Sg(e,t,0,1,n)},Mg=function(e,t,n){return Tr(n,function(i){return e[~~t(i)]})},kw=function r(e,t,n){var i=t-e;return Qt(e)?Mg(e,r(0,e.length),t):Tr(n,function(s){return(i+(s-e)%i)%i+e})},Gw=function r(e,t,n){var i=t-e,s=i*2;return Qt(e)?Mg(e,r(0,e.length-1),t):Tr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},aa=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?rg:zu),n+=e.substr(t,i-t)+bg(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},Sg=function(e,t,n,i,s){var a=t-e,o=i-n;return Tr(s,function(l){return n+((l-e)/a*o||0)})},Vw=function r(e,t,n,i){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var a=Gt(e),o={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Qt(e)&&!Qt(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else i||(e=as(Qt(e)?[]:{},e));if(!u){for(l in t)Vf.call(o,e,l,"get",t[l]);s=function(g){return qf(g,o)||(a?e.p:e)}}}return Tr(n,s)},np=function(e,t,n){var i=e.labels,s=$n,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Kn=function(e,t,n){var i=e.vars,s=i[t],a=At,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&mr.length&&Rl(),o&&(At=o),u=l?s.apply(c,l):s.call(c),At=a,u},Ro=function(e){return Mr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Jt),e.progress()<1&&Kn(e,"onInterrupt"),e},Os,wg=[],Tg=function(e){if(!Nf()){wg.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=Mt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:oa,render:qf,add:Vf,kill:rT,modifier:iT,rawVars:0},a={targetTest:0,get:0,getSetter:Xf,aliases:{},register:0};if(oo(),e!==i){if(Ln[t])return;Qn(i,Qn(Il(e,s),a)),as(i.prototype,as(s,Il(e,a))),Ln[i.prop=t]=i,e.targetTest&&(ml.push(i),Bf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ag(t,i),e.register&&e.register(Mn,i,yn)},ut=255,Io={aqua:[0,ut,ut],lime:[0,ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ut],navy:[0,0,128],white:[ut,ut,ut],olive:[128,128,0],yellow:[ut,ut,0],orange:[ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ut,0,0],pink:[ut,192,203],cyan:[0,ut,ut],transparent:[ut,ut,ut,0]},tu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ut+.5|0},Eg=function(e,t,n){var i=e?Yi(e)?[e>>16,e>>8&ut,e&ut]:0:Io.black,s,a,o,l,c,u,h,f,p,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Io[e])i=Io[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ut,i&ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ut,e&ut]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(zu),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=tu(l+1/3,s,a),i[1]=tu(l,s,a),i[2]=tu(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(ng),n&&i.length<4&&(i[3]=1),i}else i=e.match(zu)||Io.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/ut,a=i[1]/ut,o=i[2]/ut,h=Math.max(s,a,o),f=Math.min(s,a,o),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(a-o)/p+(a<o?6:0):h===a?(o-s)/p+2:(s-a)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Cg=function(e){var t=[],n=[],i=-1;return e.split(gr).forEach(function(s){var a=s.match(Fs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},ip=function(e,t,n){var i="",s=(e+i).match(gr),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=Eg(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=Cg(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(gr,"1").split(Fs),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(gr),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},gr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Io)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Hw=/hsl[a]?\(/,Ag=function(e){var t=e.join(" "),n;if(gr.lastIndex=0,gr.test(t))return n=Hw.test(t),e[1]=ip(e[1],n),e[0]=ip(e[0],n,Cg(e[1])),!0},la,Fn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,f,p,g=function d(m){var _=r()-i,S=m===!0,x,y,w,P;if(_>e&&(n+=_-t),i+=_,w=i-n,x=w-a,(x>0||S)&&(P=++h.frame,f=w-h.time*1e3,h.time=w=w/1e3,a+=x+(x>=s?4:s-x),y=1),S||(l=c(d)),y)for(p=0;p<o.length;p++)o[p](w,f,P,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){sg&&(!Uu&&Nf()&&(Hn=Uu=window,zf=Hn.document||{},Bn.gsap=Mn,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(Mn.version),og(Ll||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),u=Hn.requestAnimationFrame,wg.forEach(Tg)),l&&h.sleep(),c=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},la=1,g(2))},sleep:function(){(u?Hn.cancelAnimationFrame:clearTimeout)(l),la=0,c=oa},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),a=h.time*1e3+s},add:function(m,_,S){var x=_?function(y,w,P,A){m(y,w,P,A),h.remove(x)}:m;return h.remove(m),o[S?"unshift":"push"](x),oo(),x},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&p>=_&&p--},_listeners:o},h}(),oo=function(){return!la&&Fn.wake()},et={},Ww=/^[\d.\-M][\d.\-,\s]/,Xw=/["']/g,qw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Xw,"").trim():+c,i=l.substr(o+1).trim();return t},Yw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},$w=function(e){var t=(e+"").split("("),n=et[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[qw(t[1])]:Yw(e).split(",").map(fg)):et._CE&&Ww.test(e)?et._CE("",e):n},Pg=function(e){return function(t){return 1-e(1-t)}},Lg=function r(e,t){for(var n=e._first,i;n;)n instanceof gn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},es=function(e,t){return e&&(Mt(e)?e:et[e]||$w(e))||t},fs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return vn(e,function(o){et[o]=Bn[o]=s,et[a=o.toLowerCase()]=n;for(var l in s)et[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=et[o+"."+l]=s[l]}),s},Dg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},nu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Nu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Mw((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Dg(o);return s=Nu/s,l.config=function(c,u){return r(e,c,u)},l},iu=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Dg(n);return i.config=function(s){return r(e,s)},i};vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;fs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});et.Linear.easeNone=et.none=et.Linear.easeIn;fs("Elastic",nu("in"),nu("out"),nu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};fs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);fs("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});fs("Circ",function(r){return-(eg(1-r*r)-1)});fs("Sine",function(r){return r===1?1:-bw(r*vw)+1});fs("Back",iu("in"),iu("out"),iu());et.SteppedEase=et.steps=Bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-ft;return function(o){return((i*_a(0,a,o)|0)+s)*n}}};io.ease=et["quad.out"];vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return kf+=r+","+r+"Params,"});var Rg=function(e,t){this.id=yw++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:cg,this.set=t?t.getSetter:Xf},ao=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,so(this,+t.duration,1,1),this.data=t.data,At&&(this._ctx=At,At.data.push(this)),la||Fn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,so(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(oo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ac(this,n),!s._dp||s.parent||pg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&wi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ft||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),ug(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ep(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ep(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ro(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-ft?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?Fl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ft?0:this._rts,this.totalTime(_a(-Math.abs(this._delay),this._tDur,i),!0),oc(this),Pw(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(oo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ft&&(this._tTime-=ft)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&wi(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Tw);var i=Jt;return Jt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Jt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,tp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,tp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Vn(this,n),xn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,xn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-ft,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ft)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=Mt(n)?n:hg,o=function(){var c=i.then;i.then=null,Mt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){Ro(this)},r}();Qn(ao.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ft,_prom:0,_ps:!1,_rts:1});var gn=function(r){Qm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=xn(n.sortChildren),xt&&wi(n.parent||xt,Ui(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&mg(Ui(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Go(0,arguments,this),this},t.from=function(i,s,a){return Go(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Go(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,ko(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Dt(i,s,Vn(this,a),1),this},t.call=function(i,s,a){return wi(this,Dt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Dt(i,a,Vn(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,ko(a).immediateRender=xn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,ko(o).immediateRender=xn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ht(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,p,g,d,m,_,S,x,y,w,P,A;if(this!==xt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),f=u,y=this._start,x=this._ts,_=!x,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(P=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(f=Ht(u%m),u===l?(d=this._repeat,f=c):(d=~~(u/m),d&&d===u/m&&(f=c,d--),f>c&&(f=c)),w=ro(this._tTime,m),!o&&this._tTime&&w!==d&&this._tTime-w*m-this._dur<=0&&(w=d),P&&d&1&&(f=c-f,A=1),d!==w&&!this._lock){var v=P&&w&1,M=v===(P&&d&1);if(d<w&&(v=!v),o=v?0:c,this._lock=1,this.render(o||(A?0:Ht(d*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;Lg(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Iw(this,Ht(o),Ht(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&!s&&!d&&(Kn(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,a),f!==this._time||!this._ts&&!_){S=0,g&&(u+=this._zTime=-ft);break}}p=g}else{p=this._last;for(var D=i<0?i:f;p;){if(g=p._prev,(p._act||D<=p._end)&&p._ts&&S!==p){if(p.parent!==this)return this.render(i,s,a);if(p.render(p._ts>0?(D-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(D-p._start)*p._ts,s,a||Jt&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!_){S=0,g&&(u+=this._zTime=D?-ft:ft);break}}p=g}}if(S&&!s&&(this.pause(),S.render(f>=o?0:-ft)._zTime=f>=o?1:-1,this._ts))return this._start=y,oc(this),this.render(i,s,a);this._onUpdate&&!s&&Kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Mr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Kn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Yi(s)||(s=Vn(this,s,i)),!(i instanceof ao)){if(Qt(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Gt(i))return this.addLabel(i,s);if(Mt(i))i=Dt.delayedCall(0,i);else return this}return this!==i?wi(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-$n);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Dt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Gt(i)?this.removeLabel(i):Mt(i)?this.killTweensOf(i):(sc(this,i),i===this._recent&&(this._recent=this._last),Qr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(Fn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Vn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Dt.delayedCall(0,s||oa,a);return o.data="isPause",this._hasPause=1,wi(this,o,Vn(this,i))},t.removePause=function(i){var s=this._first;for(i=Vn(this,i);s;)s._start===i&&s.data==="isPause"&&Mr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)or!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=jn(i),l=this._first,c=Yi(s),u;l;)l instanceof Dt?Ew(l._targets,o)&&(c?(!or||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=Vn(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=Dt.to(a,Qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||ft,onStart:function(){if(a.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&so(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Qn({startAt:{time:Vn(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),np(this,Vn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),np(this,Vn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ft)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Qr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=$n,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,wi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;so(a,a===xt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(xt._ts&&(ug(xt,Fl(i,xt)),lg=Fn.frame),Fn.frame>=Jd){Jd+=Un.autoSleep||120;var s=xt._first;if((!s||!s._ts)&&Un.autoSleep&&Fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Fn.sleep()}}},e}(ao);Qn(gn.prototype,{_lock:0,_hasPause:0,_forcing:0});var jw=function(e,t,n,i,s,a,o){var l=new yn(this._pt,e,t,0,1,Ug,null,s),c=0,u=0,h,f,p,g,d,m,_,S;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=aa(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(Qc)||[];h=Qc.exec(i);)g=h[0],d=i.substring(c,h.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?Xs(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Qc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ig.test(i)||_)&&(l.e=0),this._pt=l,l},Vf=function(e,t,n,i,s,a,o,l,c,u){Mt(i)&&(i=i(s||0,e,a));var h=e[t],f=n!=="get"?n:Mt(h)?c?e[t.indexOf("set")||!Mt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=Mt(h)?c?eT:Ng:Wf,g;if(Gt(i)&&(~i.indexOf("random(")&&(i=aa(i)),i.charAt(1)==="="&&(g=Xs(f,i)+(Kt(f)||0),(g||g===0)&&(i=g))),!u||f!==i||Xu)return!isNaN(f*i)&&i!==""?(g=new yn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?nT:zg,0,p),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!h&&!(t in e)&&Uf(t,i),jw.call(this,e,t,f,i,p,l||Un.stringFilter,c))},Kw=function(e,t,n,i,s){if(Mt(e)&&(e=Vo(e,s,t,n,i)),!Li(e)||e.style&&e.nodeType||Qt(e)||tg(e))return Gt(e)?Vo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Vo(e[o],s,t,n,i);return a},Ig=function(e,t,n,i,s,a){var o,l,c,u;if(Ln[e]&&(o=new Ln[e]).init(s,o.rawVars?t[e]:Kw(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new yn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Os))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},or,Xu,Hf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,h=i.callbackScope,f=i.runBackwards,p=i.yoyoEase,g=i.keyframes,d=i.autoRevert,m=e._dur,_=e._startAt,S=e._targets,x=e.parent,y=x&&x.data==="nested"?x.vars.targets:S,w=e._overwrite==="auto"&&!Ff,P=e.timeline,A,v,M,D,W,B,U,O,q,j,X,k,se;if(P&&(!g||!s)&&(s="none"),e._ease=es(s,io.ease),e._yEase=p?Pg(es(p===!0?s:p,io.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!P&&!!i.runBackwards,!P||g&&!i.stagger){if(O=S[0]?Jr(S[0]).harness:0,k=O&&i[O.prop],A=Il(i,Bf),_&&(_._zTime<0&&_.progress(1),t<0&&f&&o&&!d?_.render(-1,!0):_.revert(f&&m?pl:ww),_._lazy=0),a){if(Mr(e._startAt=Dt.set(S,Qn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!_&&xn(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Jt||!o&&!d)&&e._startAt.revert(pl),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!_){if(t&&(o=!1),M=Qn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&xn(l),immediateRender:o,stagger:0,parent:x},A),k&&(M[O.prop]=k),Mr(e._startAt=Dt.set(S,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Jt?e._startAt.revert(pl):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,ft,ft);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&xn(l)||l&&!m,v=0;v<S.length;v++){if(W=S[v],U=W._gsap||Gf(S)[v]._gsap,e._ptLookup[v]=j={},Bu[U.id]&&mr.length&&Rl(),X=y===S?v:y.indexOf(W),O&&(q=new O).init(W,k||A,e,X,y)!==!1&&(e._pt=D=new yn(e._pt,W,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(L){j[L]=D}),q.priority&&(B=1)),!O||k)for(M in A)Ln[M]&&(q=Ig(M,A,e,X,W,y))?q.priority&&(B=1):j[M]=D=Vf.call(e,W,M,"get",A[M],X,y,0,i.stringFilter);e._op&&e._op[v]&&e.kill(W,e._op[v]),w&&e._pt&&(or=e,xt.killTweensOf(W,j,e.globalTime(t)),se=!e.parent,or=0),e._pt&&l&&(Bu[U.id]=1)}B&&Bg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!se,g&&t<=0&&P.render($n,!0,!0)},Zw=function(e,t,n,i,s,a,o){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Xu=1,e.vars[t]="+=0",Hf(e,o),Xu=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+a*c.c,c.c=n-c.s,u.e&&(u.e=Tt(n)+Kt(u.e)),u.b&&(u.b=c.s+Kt(u.b))},Jw=function(e,t){var n=e[0]?Jr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=as({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Qw=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(Qt(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Vo=function(e,t,n,i,s){return Mt(e)?e.call(t,n,i,s):Gt(e)&&~e.indexOf("random(")?aa(e):e},Fg=kf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Og={};vn(Fg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Og[r]=1});var Dt=function(r){Qm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:ko(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,S=i.parent||xt,x=(Qt(n)||tg(n)?Yi(n[0]):"length"in i)?[n]:jn(n),y,w,P,A,v,M,D,W;if(o._targets=x.length?Gf(x):Dl("GSAP target "+n+" not found. https://greensock.com",!Un.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,g||f||$a(c)||$a(u)){if(i=o.vars,y=o.timeline=new gn({data:"nested",defaults:d||{},targets:S&&S.data==="nested"?S.vars.targets:x}),y.kill(),y.parent=y._dp=Ui(o),y._start=0,f||$a(c)||$a(u)){if(A=x.length,D=f&&vg(f),Li(f))for(v in f)~Fg.indexOf(v)&&(W||(W={}),W[v]=f[v]);for(w=0;w<A;w++)P=Il(i,Og),P.stagger=0,_&&(P.yoyoEase=_),W&&as(P,W),M=x[w],P.duration=+Vo(c,Ui(o),w,M,x),P.delay=(+Vo(u,Ui(o),w,M,x)||0)-o._delay,!f&&A===1&&P.delay&&(o._delay=u=P.delay,o._start+=u,P.delay=0),y.to(M,P,D?D(w,M,x):0),y._ease=et.none;y.duration()?c=u=0:o.timeline=0}else if(g){ko(Qn(y.vars.defaults,{ease:"none"})),y._ease=es(g.ease||i.ease||"none");var B=0,U,O,q;if(Qt(g))g.forEach(function(j){return y.to(x,j,">")}),y.duration();else{P={};for(v in g)v==="ease"||v==="easeEach"||Qw(v,g[v],P,g.easeEach);for(v in P)for(U=P[v].sort(function(j,X){return j.t-X.t}),B=0,w=0;w<U.length;w++)O=U[w],q={ease:O.e,duration:(O.t-(w?U[w-1].t:0))/100*c},q[v]=O.v,y.to(x,q,B),B+=q.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||o.duration(c=y.duration())}else o.timeline=0;return p===!0&&!Ff&&(or=Ui(o),xt.killTweensOf(x),or=0),wi(S,Ui(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!g&&o._start===Ht(S._time)&&xn(h)&&Lw(Ui(o))&&S.data!=="nested")&&(o._tTime=-ft,o.render(Math.max(0,-u)||0)),m&&mg(Ui(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-ft&&!u?l:i<ft?0:i,f,p,g,d,m,_,S,x,y;if(!c)Rw(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,x=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+i,s,a);if(f=Ht(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,f=c-f),m=ro(this._tTime,d),f===o&&!a&&this._initted)return this._tTime=h,this;g!==m&&(x&&this._yEase&&Lg(x,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=a=1,this.render(Ht(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(gg(this,u?i:f,a,s,h))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(y||this._ease)(f/c),this._from&&(this.ratio=S=1-S),f&&!o&&!s&&!g&&(Kn(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(S,p.d),p=p._next;x&&x.render(i<0?i:!f&&_?-ft:x._dur*x._ease(f/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ku(this,i,s,a),Kn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Kn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&ku(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Mr(this,1),!s&&!(u&&!o)&&(h||o||_)&&(Kn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o){la||Fn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Hf(this,l),c=this._ease(l/this._dur),Zw(this,i,s,a,o,c,l)?this.resetTo(i,s,a,o):(ac(this,0),this.parent||dg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ro(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,or&&or.vars.overwrite!==!0)._first||Ro(this),this.parent&&a!==this.timeline.totalDuration()&&so(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?jn(i):o,c=this._ptLookup,u=this._pt,h,f,p,g,d,m,_;if((!s||s==="all")&&Aw(o,l))return s==="all"&&(this._pt=0),Ro(this);for(h=this._op=this._op||[],s!=="all"&&(Gt(s)&&(d={},vn(s,function(S){return d[S]=1}),s=d),s=Jw(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){f=c[_],s==="all"?(h[_]=s,g=f,p={}):(p=h[_]=h[_]||{},g=s);for(d in g)m=f&&f[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&sc(this,m,"_pt"),delete f[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&Ro(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Go(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Go(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return xt.killTweensOf(i,s,a)},e}(ao);Qn(Dt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});vn("staggerTo,staggerFrom,staggerFromTo",function(r){Dt[r]=function(){var e=new gn,t=Vu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Wf=function(e,t,n){return e[t]=n},Ng=function(e,t,n){return e[t](n)},eT=function(e,t,n,i){return e[t](i.fp,n)},tT=function(e,t,n){return e.setAttribute(t,n)},Xf=function(e,t){return Mt(e[t])?Ng:Of(e[t])&&e.setAttribute?tT:Wf},zg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},nT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ug=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},qf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},iT=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},rT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?sc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},sT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Bg=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},yn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||zg,this.d=l||this,this.set=c||Wf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=sT,this.m=n,this.mt=s,this.tween=i},r}();vn(kf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Bf[r]=1});Bn.TweenMax=Bn.TweenLite=Dt;Bn.TimelineLite=Bn.TimelineMax=gn;xt=new gn({sortChildren:!1,defaults:io,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Un.stringFilter=Ag;var lo=[],gl={},oT=[],rp=0,ru=function(e){return(gl[e]||oT).map(function(t){return t()})},qu=function(){var e=Date.now(),t=[];e-rp>2&&(ru("matchMediaInit"),lo.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Hn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),ru("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),rp=e,ru("matchMedia"))},kg=function(){function r(t,n){this.selector=n&&Hu(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Mt(n)&&(s=i,i=n,n=Mt);var a=this,o=function(){var c=At,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Hu(s)),At=a,h=i.apply(a,arguments),Mt(h)&&a._r.push(h),At=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Mt?o(a):n?a[n]=o:o},e.ignore=function(n){var i=At;At=null,n(this),At=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Dt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}))}),a.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ao)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=lo.indexOf(this);~o&&lo.splice(o,1)}},e.revert=function(n){this.kill(n||{})},r}(),aT=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(n,i,s){Li(n)||(n={matches:n});var a=new kg(0,s||this.scope),o=a.conditions={},l,c,u;this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Hn.matchMedia(n[c]),l&&(lo.indexOf(a)<0&&lo.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(qu):l.addEventListener("change",qu)));return u&&i(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ol={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Tg(i)})},timeline:function(e){return new gn(e)},getTweensOf:function(e,t){return xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Gt(e)&&(e=jn(e)[0]);var s=Jr(e||{}).get,a=n?hg:fg;return n==="native"&&(n=""),e&&(t?a((Ln[t]&&Ln[t].get||s)(e,t,n,i)):function(o,l,c){return a((Ln[o]&&Ln[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=jn(e),e.length>1){var i=e.map(function(u){return Mn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=Ln[t],o=Jr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;Os._pt=0,h.init(e,n?u+n:u,Os,0,[e]),h.render(1,h),Os._pt&&qf(1,Os)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=Mn.to(e,as((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=es(e.ease,io.ease)),Qd(io,e||{})},config:function(e){return Qd(Un,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Ln[o]&&!Bn[o]&&Dl(t+" effect requires "+o+" plugin.")}),eu[t]=function(o,l,c){return n(jn(o),Qn(l||{},s),c)},a&&(gn.prototype[t]=function(o,l,c){return this.add(eu[t](o,Li(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){et[e]=es(t)},parseEase:function(e,t){return arguments.length?es(e,t):et},getById:function(e){return xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new gn(e),i,s;for(n.smoothChildTiming=xn(e.smoothChildTiming),xt.remove(n),n._dp=0,n._time=n._tTime=xt._time,i=xt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Dt&&i.vars.onComplete===i._targets[0]))&&wi(n,i,i._start-i._delay),i=s;return wi(xt,n,0),n},context:function(e,t){return e?new kg(e,t):At},matchMedia:function(e){return new aT(e)},matchMediaRefresh:function(){return lo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||qu()},addEventListener:function(e,t){var n=gl[e]||(gl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=gl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:kw,wrapYoyo:Gw,distribute:vg,random:bg,snap:yg,normalize:Bw,getUnit:Kt,clamp:Ow,splitColor:Eg,toArray:jn,selector:Hu,mapRange:Sg,pipe:zw,unitize:Uw,interpolate:Vw,shuffle:xg},install:og,effects:eu,ticker:Fn,updateRoot:gn.updateRoot,plugins:Ln,globalTimeline:xt,core:{PropTween:yn,globals:ag,Tween:Dt,Timeline:gn,Animation:ao,getCache:Jr,_removeLinkedListItem:sc,reverting:function(){return Jt},context:function(e){return e&&At&&(At.data.push(e),e._ctx=At),At},suppressOverwrites:function(e){return Ff=e}}};vn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ol[r]=Dt[r]});Fn.add(gn.updateRoot);Os=Ol.to({},{duration:0});var lT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},cT=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=lT(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},su=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Gt(s)&&(l={},vn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}cT(o,s)}}}},Mn=Ol.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Jt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},su("roundProps",Wu),su("modifiers"),su("snap",yg))||Ol;Dt.version=gn.version=Mn.version="3.11.5";sg=1;Nf()&&oo();et.Power0;et.Power1;et.Power2;et.Power3;et.Power4;et.Linear;et.Quad;et.Cubic;et.Quart;et.Quint;et.Strong;et.Elastic;et.Back;et.SteppedEase;et.Bounce;et.Sine;et.Expo;et.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var sp,ar,qs,Yf,Yr,op,$f,uT=function(){return typeof window<"u"},$i={},Ur=180/Math.PI,Ys=Math.PI/180,Ts=Math.atan2,ap=1e8,jf=/([A-Z])/g,fT=/(left|right|width|margin|padding|x)/i,hT=/[\s,\(]\S/,Ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yu=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Gg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Vg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},gT=function(e,t,n){return e.style[t]=n},_T=function(e,t,n){return e.style.setProperty(t,n)},xT=function(e,t,n){return e._gsap[t]=n},vT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},yT=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},bT=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},vt="transform",mi=vt+"Origin",MT=function r(e,t){var n=this,i=this.target,s=i.style;if(e in $i){if(this.tfm=this.tfm||{},e!=="transform")e=Ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Bi(i,a)}):this.tfm[e]=i._gsap.x?i._gsap[e]:Bi(i,e);else return Ti.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(vt)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(mi,t,"")),e=vt}(s||t)&&this.props.push(e,t,s[e])},Hg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ST=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(jf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=$f(),(!s||!s.isStart)&&!n[vt]&&(Hg(n),i.uncache=1)}},Wg=function(e,t){var n={target:e,props:[],revert:ST,save:MT};return e._gsap||Mn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Xg,$u=function(e,t){var n=ar.createElementNS?ar.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ar.createElement(e);return n.style?n:ar.createElement(e)},Ai=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(jf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,co(t)||t,1)||""},lp="O,Moz,ms,Ms,Webkit".split(","),co=function(e,t,n){var i=t||Yr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(lp[a]+e in s););return a<0?null:(a===3?"ms":a>=0?lp[a]:"")+e},ju=function(){uT()&&window.document&&(sp=window,ar=sp.document,qs=ar.documentElement,Yr=$u("div")||{style:{}},$u("div"),vt=co(vt),mi=vt+"Origin",Yr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Xg=!!co("perspective"),$f=Mn.core.reverting,Yf=1)},ou=function r(e){var t=$u("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(qs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),qs.removeChild(t),this.style.cssText=s,a},cp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},qg=function(e){var t;try{t=e.getBBox()}catch{t=ou.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===ou||(t=ou.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+cp(e,["x","cx","x1"])||0,y:+cp(e,["y","cy","y1"])||0,width:0,height:0}:t},Yg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&qg(e))},ca=function(e,t){if(t){var n=e.style;t in $i&&t!==mi&&(t=vt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(jf,"-$1").toLowerCase())):n.removeAttribute(t)}},lr=function(e,t,n,i,s,a){var o=new yn(e._pt,t,n,0,1,a?Vg:Gg);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},up={deg:1,rad:1,turn:1},wT={grid:1,flex:1},Sr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Yr.style,l=fT.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",p=i==="%",g,d,m,_;return i===a||!s||up[i]||up[a]?s:(a!=="px"&&!f&&(s=r(e,t,n,"px")),_=e.getCTM&&Yg(e),(p||a==="%")&&($i[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],Tt(p?s/g*h:s/100*g)):(o[l?"width":"height"]=h+(f?a:i),d=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===ar||!d.appendChild)&&(d=ar.body),m=d._gsap,m&&p&&m.width&&l&&m.time===Fn.time&&!m.uncache?Tt(s/m.width*h):((p||a==="%")&&!wT[Ai(d,"display")]&&(o.position=Ai(e,"position")),d===e&&(o.position="static"),d.appendChild(Yr),g=Yr[u],d.removeChild(Yr),o.position="absolute",l&&p&&(m=Jr(d),m.time=Fn.time,m.width=d[u]),Tt(f?g*s/h:g&&s?h/g*s:0))))},Bi=function(e,t,n,i){var s;return Yf||ju(),t in Ti&&t!=="transform"&&(t=Ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),$i[t]&&t!=="transform"?(s=fa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:zl(Ai(e,mi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Nl[t]&&Nl[t](e,t,n)||Ai(e,t)||cg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Sr(e,t,s,n)+n:s},TT=function(e,t,n,i){if(!n||n==="none"){var s=co(t,e,1),a=s&&Ai(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Ai(e,"borderTopColor"))}var o=new yn(this._pt,e.style,t,0,1,Ug),l=0,c=0,u,h,f,p,g,d,m,_,S,x,y,w;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(e.style[t]=i,i=Ai(e,t)||i,e.style[t]=n),u=[n,i],Ag(u),n=u[0],i=u[1],f=n.match(Fs)||[],w=i.match(Fs)||[],w.length){for(;h=Fs.exec(i);)m=h[0],S=i.substring(l,h.index),g?g=(g+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(g=1),m!==(d=f[c++]||"")&&(p=parseFloat(d)||0,y=d.substr((p+"").length),m.charAt(1)==="="&&(m=Xs(p,m)+y),_=parseFloat(m),x=m.substr((_+"").length),l=Fs.lastIndex-x.length,x||(x=x||Un.units[t]||y,l===i.length&&(i+=x,o.e+=x)),y!==x&&(p=Sr(e,t,d,x)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Vg:Gg;return ig.test(i)&&(o.e=0),this._pt=o,o},fp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ET=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=fp[n]||n,t[1]=fp[i]||i,t.join(" ")},CT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],$i[o]&&(l=1,o=o==="transformOrigin"?mi:vt),ca(n,o);l&&(ca(n,vt),a&&(a.svg&&n.removeAttribute("transform"),fa(n,1),a.uncache=1,Hg(i)))}},Nl={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new yn(e._pt,t,n,0,0,CT);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ua=[1,0,0,1,0,0],$g={},jg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},hp=function(e){var t=Ai(e,vt);return jg(t)?ua:t.substr(7).match(ng).map(Tt)},Kf=function(e,t){var n=e._gsap||Jr(e),i=e.style,s=hp(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ua:s):(s===ua&&!e.offsetParent&&e!==qs&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,qs.appendChild(e)),s=hp(e),l?i.display=l:ca(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):qs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ku=function(e,t,n,i,s,a){var o=e._gsap,l=s||Kf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],S=l[5],x=t.split(" "),y=parseFloat(x[0])||0,w=parseFloat(x[1])||0,P,A,v,M;n?l!==ua&&(A=p*m-g*d)&&(v=y*(m/A)+w*(-d/A)+(d*S-m*_)/A,M=y*(-g/A)+w*(p/A)-(p*S-g*_)/A,y=v,w=M):(P=qg(e),y=P.x+(~x[0].indexOf("%")?y/100*P.width:y),w=P.y+(~(x[1]||x[0]).indexOf("%")?w/100*P.height:w)),i||i!==!1&&o.smooth?(_=y-c,S=w-u,o.xOffset=h+(_*p+S*d)-_,o.yOffset=f+(_*g+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=w,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[mi]="0px 0px",a&&(lr(a,o,"xOrigin",c,y),lr(a,o,"yOrigin",u,w),lr(a,o,"xOffset",h,o.xOffset),lr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},fa=function(e,t){var n=e._gsap||new Rg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Ai(e,mi)||"0",u,h,f,p,g,d,m,_,S,x,y,w,P,A,v,M,D,W,B,U,O,q,j,X,k,se,L,_e,V,le,fe,H;return u=h=f=d=m=_=S=x=y=0,p=g=1,n.svg=!!(e.getCTM&&Yg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[vt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[vt]!=="none"?l[vt]:"")),i.scale=i.rotate=i.translate="none"),A=Kf(e,n.svg),n.svg&&(n.uncache?(k=e.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Ku(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,A)),w=n.xOrigin||0,P=n.yOrigin||0,A!==ua&&(W=A[0],B=A[1],U=A[2],O=A[3],u=q=A[4],h=j=A[5],A.length===6?(p=Math.sqrt(W*W+B*B),g=Math.sqrt(O*O+U*U),d=W||B?Ts(B,W)*Ur:0,S=U||O?Ts(U,O)*Ur+d:0,S&&(g*=Math.abs(Math.cos(S*Ys))),n.svg&&(u-=w-(w*W+P*U),h-=P-(w*B+P*O))):(H=A[6],le=A[7],L=A[8],_e=A[9],V=A[10],fe=A[11],u=A[12],h=A[13],f=A[14],v=Ts(H,V),m=v*Ur,v&&(M=Math.cos(-v),D=Math.sin(-v),X=q*M+L*D,k=j*M+_e*D,se=H*M+V*D,L=q*-D+L*M,_e=j*-D+_e*M,V=H*-D+V*M,fe=le*-D+fe*M,q=X,j=k,H=se),v=Ts(-U,V),_=v*Ur,v&&(M=Math.cos(-v),D=Math.sin(-v),X=W*M-L*D,k=B*M-_e*D,se=U*M-V*D,fe=O*D+fe*M,W=X,B=k,U=se),v=Ts(B,W),d=v*Ur,v&&(M=Math.cos(v),D=Math.sin(v),X=W*M+B*D,k=q*M+j*D,B=B*M-W*D,j=j*M-q*D,W=X,q=k),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=Tt(Math.sqrt(W*W+B*B+U*U)),g=Tt(Math.sqrt(j*j+H*H)),v=Ts(q,j),S=Math.abs(v)>2e-4?v*Ur:0,y=fe?1/(fe<0?-fe:fe):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!jg(Ai(e,vt)),X&&e.setAttribute("transform",X))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(p*=-1,S+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Tt(p),n.scaleY=Tt(g),n.rotation=Tt(d)+o,n.rotationX=Tt(m)+o,n.rotationY=Tt(_)+o,n.skewX=S+o,n.skewY=x+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[mi]=zl(c)),n.xOffset=n.yOffset=0,n.force3D=Un.force3D,n.renderTransform=n.svg?PT:Xg?Kg:AT,n.uncache=0,n},zl=function(e){return(e=e.split(" "))[0]+" "+e[1]},au=function(e,t,n){var i=Kt(t);return Tt(parseFloat(t)+parseFloat(Sr(e,"x",n+"px",i)))+i},AT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Kg(e,t)},Rr="0deg",Eo="0px",Ir=") ",Kg=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,S=n.target,x=n.zOrigin,y="",w=_==="auto"&&e&&e!==1||_===!0;if(x&&(h!==Rr||u!==Rr)){var P=parseFloat(u)*Ys,A=Math.sin(P),v=Math.cos(P),M;P=parseFloat(h)*Ys,M=Math.cos(P),a=au(S,a,A*M*-x),o=au(S,o,-Math.sin(P)*-x),l=au(S,l,v*M*-x+x)}m!==Eo&&(y+="perspective("+m+Ir),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(w||a!==Eo||o!==Eo||l!==Eo)&&(y+=l!==Eo||w?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Ir),c!==Rr&&(y+="rotate("+c+Ir),u!==Rr&&(y+="rotateY("+u+Ir),h!==Rr&&(y+="rotateX("+h+Ir),(f!==Rr||p!==Rr)&&(y+="skew("+f+", "+p+Ir),(g!==1||d!==1)&&(y+="scale("+g+", "+d+Ir),S.style[vt]=y||"translate(0, 0)"},PT=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,S=n.forceCSS,x=parseFloat(a),y=parseFloat(o),w,P,A,v,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ys,c*=Ys,w=Math.cos(l)*h,P=Math.sin(l)*h,A=Math.sin(l-c)*-f,v=Math.cos(l-c)*f,c&&(u*=Ys,M=Math.tan(c-u),M=Math.sqrt(1+M*M),A*=M,v*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),w*=M,P*=M)),w=Tt(w),P=Tt(P),A=Tt(A),v=Tt(v)):(w=h,v=f,P=A=0),(x&&!~(a+"").indexOf("px")||y&&!~(o+"").indexOf("px"))&&(x=Sr(p,"x",a,"px"),y=Sr(p,"y",o,"px")),(g||d||m||_)&&(x=Tt(x+g-(g*w+d*A)+m),y=Tt(y+d-(g*P+d*v)+_)),(i||s)&&(M=p.getBBox(),x=Tt(x+i/100*M.width),y=Tt(y+s/100*M.height)),M="matrix("+w+","+P+","+A+","+v+","+x+","+y+")",p.setAttribute("transform",M),S&&(p.style[vt]=M)},LT=function(e,t,n,i,s){var a=360,o=Gt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ur:1),c=l-i,u=i+c+"deg",h,f;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*ap)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*ap)%a-~~(c/a)*a)),e._pt=f=new yn(e._pt,t,n,i,c,dT),f.e=u,f.u="deg",e._props.push(n),f},dp=function(e,t){for(var n in t)e[n]=t[n];return e},DT=function(e,t,n){var i=dp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,f,p,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[vt]=t,o=fa(n,1),ca(n,vt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[vt],a[vt]=t,o=fa(n,1),a[vt]=c);for(l in $i)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(p=Kt(c),g=Kt(u),h=p!==g?Sr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new yn(e._pt,o,l,h,f-h,Yu),e._pt.u=g||0,e._props.push(l));dp(o,i)};vn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Nl[e>1?"border"+r:r]=function(o,l,c,u,h){var f,p;if(arguments.length<4)return f=a.map(function(g){return Bi(o,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},a.forEach(function(g,d){return p[g]=f[d]=f[d]||f[(d-1)/2|0]}),o.init(l,p,h)}});var Zg={name:"css",register:ju,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,f,p,g,d,m,_,S,x,y,w,P,A,v;Yf||ju(),this.styles=this.styles||Wg(e),v=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Ln[d]&&Ig(d,t,n,i,e,s)))){if(p=typeof u,g=Nl[d],p==="function"&&(u=u.call(n,i,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=aa(u)),g)g(this,e,d,u,n)&&(A=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",gr.lastIndex=0,gr.test(c)||(m=Kt(c),_=Kt(u)),_?m!==_&&(c=Sr(e,d,c,_)+_):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,d),a.push(d),v.push(d,0,o[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,i,e,s):l[d],Gt(c)&&~c.indexOf("random(")&&(c=aa(c)),Kt(c+"")||(c+=Un.units[d]||Kt(Bi(e,d))||""),(c+"").charAt(1)==="="&&(c=Bi(e,d))):c=Bi(e,d),f=parseFloat(c),S=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),d in Ti&&(d==="autoAlpha"&&(f===1&&Bi(e,"visibility")==="hidden"&&h&&(f=0),v.push("visibility",0,o.visibility),lr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Ti[d],~d.indexOf(",")&&(d=d.split(",")[0]))),x=d in $i,x){if(this.styles.save(d),y||(w=e._gsap,w.renderTransform&&!t.parseTransform||fa(e,t.parseTransform),P=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new yn(this._pt,o,vt,0,1,w.renderTransform,w,0,-1),y.dep=1),d==="scale")this._pt=new yn(this._pt,w,"scaleY",w.scaleY,(S?Xs(w.scaleY,S+h):h)-w.scaleY||0,Yu),this._pt.u=0,a.push("scaleY",d),d+="X";else if(d==="transformOrigin"){v.push(mi,0,o[mi]),u=ET(u),w.svg?Ku(e,u,0,P,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==w.zOrigin&&lr(this,w,"zOrigin",w.zOrigin,_),lr(this,o,d,zl(c),zl(u)));continue}else if(d==="svgOrigin"){Ku(e,u,1,P,0,this);continue}else if(d in $g){LT(this,w,d,f,S?Xs(f,S+u):u);continue}else if(d==="smoothOrigin"){lr(this,w,"smooth",w.smooth,u);continue}else if(d==="force3D"){w[d]=u;continue}else if(d==="transform"){DT(this,u,e);continue}}else d in o||(d=co(d)||d);if(x||(h||h===0)&&(f||f===0)&&!hT.test(u)&&d in o)m=(c+"").substr((f+"").length),h||(h=0),_=Kt(u)||(d in Un.units?Un.units[d]:m),m!==_&&(f=Sr(e,d,c,_)),this._pt=new yn(this._pt,x?w:o,d,f,(S?Xs(f,S+h):h)-f,!x&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?mT:Yu),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=pT);else if(d in o)TT.call(this,e,d,c,S?S+u:u);else if(d in e)this.add(e,d,c||e[d],S?S+u:u,i,s);else if(d!=="parseTransform"){Uf(d,u);continue}x||(d in o?v.push(d,0,o[d]):v.push(d,1,c||e[d])),a.push(d)}}A&&Bg(this)},render:function(e,t){if(t.tween._time||!$f())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Bi,aliases:Ti,getSetter:function(e,t,n){var i=Ti[t];return i&&i.indexOf(",")<0&&(t=i),t in $i&&t!==mi&&(e._gsap.x||Bi(e,"x"))?n&&op===n?t==="scale"?vT:xT:(op=n||{})&&(t==="scale"?yT:bT):e.style&&!Of(e.style[t])?gT:~t.indexOf("-")?_T:Xf(e,t)},core:{_removeProperty:ca,_getMatrix:Kf}};Mn.utils.checkPrefix=co;Mn.core.getStyleSaver=Wg;(function(r,e,t,n){var i=vn(r+","+e+","+t,function(s){$i[s]=1});vn(e,function(s){Un.units[s]="deg",$g[s]=1}),Ti[i[13]]=r+","+e,vn(n,function(s){var a=s.split(":");Ti[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Un.units[r]="px"});Mn.registerPlugin(Zg);var _l=Mn.registerPlugin(Zg)||Mn;_l.core.Tween;function pp(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function RT(r,e,t){return e&&pp(r.prototype,e),t&&pp(r,t),r}/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xt,Zu,On,cr,ur,$s,Jg,Br,Ho,Qg,Vi,ii,e_,t_=function(){return Xt||typeof window<"u"&&(Xt=window.gsap)&&Xt.registerPlugin&&Xt},n_=1,Ns=[],Ze=[],Pi=[],Wo=Date.now,Ju=function(e,t){return t},IT=function(){var e=Ho.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Ze),i.push.apply(i,Pi),Ze=n,Pi=i,Ju=function(a,o){return t[a](o)}},_r=function(e,t){return~Pi.indexOf(e)&&Pi[Pi.indexOf(e)+1][t]},Xo=function(e){return!!~Qg.indexOf(e)},dn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ja="scrollLeft",Ka="scrollTop",Qu=function(){return Vi&&Vi.isPressed||Ze.cache++},Ul=function(e,t){var n=function i(s){if(s||s===0){n_&&(On.history.scrollRestoration="manual");var a=Vi&&Vi.isPressed;s=i.v=Math.round(s)||(Vi&&Vi.iOS?1:0),e(s),i.cacheID=Ze.cache,a&&Ju("ss",s)}else(t||Ze.cache!==i.cacheID||Ju("ref"))&&(i.cacheID=Ze.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},un={s:ja,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ul(function(r){return arguments.length?On.scrollTo(r,Rt.sc()):On.pageXOffset||cr[ja]||ur[ja]||$s[ja]||0})},Rt={s:Ka,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:un,sc:Ul(function(r){return arguments.length?On.scrollTo(un.sc(),r):On.pageYOffset||cr[Ka]||ur[Ka]||$s[Ka]||0})},mn=function(e){return Xt.utils.toArray(e)[0]||(typeof e=="string"&&Xt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},wr=function(e,t){var n=t.s,i=t.sc;Xo(e)&&(e=cr.scrollingElement||ur);var s=Ze.indexOf(e),a=i===Rt.sc?1:2;!~s&&(s=Ze.push(e)-1),Ze[s+a]||e.addEventListener("scroll",Qu);var o=Ze[s+a],l=o||(Ze[s+a]=Ul(_r(e,n),!0)||(Xo(e)?i:Ul(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Xt.getProperty(e,"scrollBehavior")==="smooth"),l},ef=function(e,t,n){var i=e,s=e,a=Wo(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,d){var m=Wo();d||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},h=function(){s=i=n?0:i,o=a=0},f=function(g){var d=o,m=s,_=Wo();return(g||g===0)&&g!==i&&u(g),a===o||_-o>c?0:(i+(n?m:-m))/((n?_:a)-d)*1e3};return{update:u,reset:h,getVelocity:f}},Co=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},mp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},i_=function(){Ho=Xt.core.globals().ScrollTrigger,Ho&&Ho.core&&IT()},r_=function(e){return Xt=e||t_(),Xt&&typeof document<"u"&&document.body&&(On=window,cr=document,ur=cr.documentElement,$s=cr.body,Qg=[On,cr,ur,$s],Xt.utils.clamp,e_=Xt.core.context||function(){},Br="onpointerenter"in $s?"pointer":"mouse",Jg=Lt.isTouch=On.matchMedia&&On.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in On||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ii=Lt.eventTypes=("ontouchstart"in ur?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ur?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return n_=0},500),i_(),Zu=1),Zu};un.op=Rt;Ze.cache=0;var Lt=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Zu||r_(Xt)||console.warn("Please gsap.registerPlugin(Observer)"),Ho||i_();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,d=n.event,m=n.onDragStart,_=n.onDragEnd,S=n.onDrag,x=n.onPress,y=n.onRelease,w=n.onRight,P=n.onLeft,A=n.onUp,v=n.onDown,M=n.onChangeX,D=n.onChangeY,W=n.onChange,B=n.onToggleX,U=n.onToggleY,O=n.onHover,q=n.onHoverEnd,j=n.onMove,X=n.ignoreCheck,k=n.isNormalizer,se=n.onGestureStart,L=n.onGestureEnd,_e=n.onWheel,V=n.onEnable,le=n.onDisable,fe=n.onClick,H=n.scrollSpeed,me=n.capture,xe=n.allowClicks,ye=n.lockAxis,we=n.onLockAxis;this.target=o=mn(o)||ur,this.vars=n,p&&(p=Xt.utils.toArray(p)),i=i||1e-9,s=s||0,g=g||1,H=H||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(On.getComputedStyle($s).lineHeight)||22);var Ae,ze,C,R,Y,re,ne,I=this,ue=0,te=0,de=wr(o,un),oe=wr(o,Rt),T=de(),b=oe(),N=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ii[0]==="pointerdown",ee=Xo(o),Z=o.ownerDocument||cr,ae=[0,0,0],pe=[0,0,0],ge=0,Q=function(){return ge=Wo()},Pe=function(Te,he){return(I.event=Te)&&p&&~p.indexOf(Te.target)||he&&N&&Te.pointerType!=="touch"||X&&X(Te,he)},Ce=function(){I._vx.reset(),I._vy.reset(),ze.pause(),h&&h(I)},Re=function(){var Te=I.deltaX=mp(ae),he=I.deltaY=mp(pe),De=Math.abs(Te)>=i,He=Math.abs(he)>=i;W&&(De||He)&&W(I,Te,he,ae,pe),De&&(w&&I.deltaX>0&&w(I),P&&I.deltaX<0&&P(I),M&&M(I),B&&I.deltaX<0!=ue<0&&B(I),ue=I.deltaX,ae[0]=ae[1]=ae[2]=0),He&&(v&&I.deltaY>0&&v(I),A&&I.deltaY<0&&A(I),D&&D(I),U&&I.deltaY<0!=te<0&&U(I),te=I.deltaY,pe[0]=pe[1]=pe[2]=0),(R||C)&&(j&&j(I),C&&(S(I),C=!1),R=!1),re&&!(re=!1)&&we&&we(I),Y&&(_e(I),Y=!1),Ae=0},Fe=function(Te,he,De){ae[De]+=Te,pe[De]+=he,I._vx.update(Te),I._vy.update(he),c?Ae||(Ae=requestAnimationFrame(Re)):Re()},Se=function(Te,he){ye&&!ne&&(I.axis=ne=Math.abs(Te)>Math.abs(he)?"x":"y",re=!0),ne!=="y"&&(ae[2]+=Te,I._vx.update(Te,!0)),ne!=="x"&&(pe[2]+=he,I._vy.update(he,!0)),c?Ae||(Ae=requestAnimationFrame(Re)):Re()},Ge=function(Te){if(!Pe(Te,1)){Te=Co(Te,u);var he=Te.clientX,De=Te.clientY,He=he-I.x,Xe=De-I.y,Et=I.isDragging;I.x=he,I.y=De,(Et||Math.abs(I.startX-he)>=s||Math.abs(I.startY-De)>=s)&&(S&&(C=!0),Et||(I.isDragging=!0),Se(He,Xe),Et||m&&m(I))}},Le=I.onPress=function(ke){Pe(ke,1)||ke&&ke.button||(I.axis=ne=null,ze.pause(),I.isPressed=!0,ke=Co(ke),ue=te=0,I.startX=I.x=ke.clientX,I.startY=I.y=ke.clientY,I._vx.reset(),I._vy.reset(),dn(k?o:Z,ii[1],Ge,u,!0),I.deltaX=I.deltaY=0,x&&x(I))},ot=I.onRelease=function(ke){if(!Pe(ke,1)){rn(k?o:Z,ii[1],Ge,!0);var Te=!isNaN(I.y-I.startY),he=I.isDragging&&(Math.abs(I.x-I.startX)>3||Math.abs(I.y-I.startY)>3),De=Co(ke);!he&&Te&&(I._vx.reset(),I._vy.reset(),u&&xe&&Xt.delayedCall(.08,function(){if(Wo()-ge>300&&!ke.defaultPrevented){if(ke.target.click)ke.target.click();else if(Z.createEvent){var He=Z.createEvent("MouseEvents");He.initMouseEvent("click",!0,!0,On,1,De.screenX,De.screenY,De.clientX,De.clientY,!1,!1,!1,!1,0,null),ke.target.dispatchEvent(He)}}})),I.isDragging=I.isGesturing=I.isPressed=!1,h&&!k&&ze.restart(!0),_&&he&&_(I),y&&y(I,he)}},F=function(Te){return Te.touches&&Te.touches.length>1&&(I.isGesturing=!0)&&se(Te,I.isDragging)},ie=function(){return(I.isGesturing=!1)||L(I)},ce=function(Te){if(!Pe(Te)){var he=de(),De=oe();Fe((he-T)*H,(De-b)*H,1),T=he,b=De,h&&ze.restart(!0)}},ve=function(Te){if(!Pe(Te)){Te=Co(Te,u),_e&&(Y=!0);var he=(Te.deltaMode===1?l:Te.deltaMode===2?On.innerHeight:1)*g;Fe(Te.deltaX*he,Te.deltaY*he,0),h&&!k&&ze.restart(!0)}},Ee=function(Te){if(!Pe(Te)){var he=Te.clientX,De=Te.clientY,He=he-I.x,Xe=De-I.y;I.x=he,I.y=De,R=!0,(He||Xe)&&Se(He,Xe)}},it=function(Te){I.event=Te,O(I)},at=function(Te){I.event=Te,q(I)},St=function(Te){return Pe(Te)||Co(Te,u)&&fe(I)};ze=I._dc=Xt.delayedCall(f||.25,Ce).pause(),I.deltaX=I.deltaY=0,I._vx=ef(0,50,!0),I._vy=ef(0,50,!0),I.scrollX=de,I.scrollY=oe,I.isDragging=I.isGesturing=I.isPressed=!1,e_(this),I.enable=function(ke){return I.isEnabled||(dn(ee?Z:o,"scroll",Qu),a.indexOf("scroll")>=0&&dn(ee?Z:o,"scroll",ce,u,me),a.indexOf("wheel")>=0&&dn(o,"wheel",ve,u,me),(a.indexOf("touch")>=0&&Jg||a.indexOf("pointer")>=0)&&(dn(o,ii[0],Le,u,me),dn(Z,ii[2],ot),dn(Z,ii[3],ot),xe&&dn(o,"click",Q,!1,!0),fe&&dn(o,"click",St),se&&dn(Z,"gesturestart",F),L&&dn(Z,"gestureend",ie),O&&dn(o,Br+"enter",it),q&&dn(o,Br+"leave",at),j&&dn(o,Br+"move",Ee)),I.isEnabled=!0,ke&&ke.type&&Le(ke),V&&V(I)),I},I.disable=function(){I.isEnabled&&(Ns.filter(function(ke){return ke!==I&&Xo(ke.target)}).length||rn(ee?Z:o,"scroll",Qu),I.isPressed&&(I._vx.reset(),I._vy.reset(),rn(k?o:Z,ii[1],Ge,!0)),rn(ee?Z:o,"scroll",ce,me),rn(o,"wheel",ve,me),rn(o,ii[0],Le,me),rn(Z,ii[2],ot),rn(Z,ii[3],ot),rn(o,"click",Q,!0),rn(o,"click",St),rn(Z,"gesturestart",F),rn(Z,"gestureend",ie),rn(o,Br+"enter",it),rn(o,Br+"leave",at),rn(o,Br+"move",Ee),I.isEnabled=I.isPressed=I.isDragging=!1,le&&le(I))},I.kill=I.revert=function(){I.disable();var ke=Ns.indexOf(I);ke>=0&&Ns.splice(ke,1),Vi===I&&(Vi=0)},Ns.push(I),k&&Xo(o)&&(Vi=I),I.enable(d)},RT(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Lt.version="3.11.5";Lt.create=function(r){return new Lt(r)};Lt.register=r_;Lt.getAll=function(){return Ns.slice()};Lt.getById=function(r){return Ns.filter(function(e){return e.vars.id===r})[0]};t_()&&Xt.registerPlugin(Lt);/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ie,Ps,Je,gt,oi,bt,s_,Bl,kl,zs,xl,Za,$t,lc,tf,an,gp,_p,Ls,o_,lu,a_,An,l_,c_,u_,nr,nf,Zf,cu,Ja=1,cn=Date.now,uu=cn(),Jn=0,Fo=0,FT=function r(){return Fo&&requestAnimationFrame(r)},xp=function(){return lc=1},vp=function(){return lc=0},vi=function(e){return e},Oo=function(e){return Math.round(e*1e5)/1e5||0},f_=function(){return typeof window<"u"},h_=function(){return Ie||f_()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},ls=function(e){return!!~s_.indexOf(e)},d_=function(e){return _r(e,"getBoundingClientRect")||(ls(e)?function(){return wl.width=Je.innerWidth,wl.height=Je.innerHeight,wl}:function(){return ki(e)})},OT=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=_r(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Je["inner"+s]:e["client"+s])||0}},NT=function(e,t){return!t||~Pi.indexOf(e)?d_(e):function(){return wl}},fr=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=_r(e,n))?a()-d_(e)()[s]:ls(e)?(oi[n]||bt[n])-(Je["inner"+i]||oi["client"+i]||bt["client"+i]):e[n]-e["offset"+i])},Qa=function(e,t){for(var n=0;n<Ls.length;n+=3)(!t||~t.indexOf(Ls[n+1]))&&e(Ls[n],Ls[n+1],Ls[n+2])},si=function(e){return typeof e=="string"},fn=function(e){return typeof e=="function"},No=function(e){return typeof e=="number"},vl=function(e){return typeof e=="object"},Ao=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},fu=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Es=Math.abs,p_="left",m_="top",Jf="right",Qf="bottom",ts="width",ns="height",qo="Right",Yo="Left",$o="Top",jo="Bottom",wt="padding",Yn="margin",uo="Width",eh="Height",Vt="px",ui=function(e){return Je.getComputedStyle(e)},zT=function(e){var t=ui(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},yp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ki=function(e,t){var n=t&&ui(e)[tf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},rf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},g_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},UT=function(e){return function(t){return Ie.utils.snap(g_(e),t)}},th=function(e){var t=Ie.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},BT=function(e){return function(t,n){return th(g_(e))(t,n.direction)}},el=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Bt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Ut=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},tl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},bp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},nl={toggleActions:"play",anticipatePin:0},Gl={top:0,left:0,center:.5,bottom:1,right:1},yl=function(e,t){if(si(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Gl?Gl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},il=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,p=s.fontWeight,g=gt.createElement("div"),d=ls(n)||_r(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=d?bt:n,S=e.indexOf("start")!==-1,x=S?c:u,y="border-color:"+x+";font-size:"+h+";color:"+x+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&d?"fixed;":"absolute;"),(m||l||!d)&&(y+=(i===Rt?Jf:Qf)+":"+(a+parseFloat(f))+"px;"),o&&(y+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=S,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+i.op.d2],bl(g,0,i,S),g},bl=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+uo]=1,s["border"+o+uo]=0,s[n.p]=t+"px",Ie.set(e,s)},je=[],sf={},ha,Mp=function(){return cn()-Jn>34&&(ha||(ha=requestAnimationFrame(Xi)))},Cs=function(){(!An||!An.isPressed||An.startX>bt.clientWidth)&&(Ze.cache++,An?ha||(ha=requestAnimationFrame(Xi)):Xi(),Jn||us("scrollStart"),Jn=cn())},hu=function(){u_=Je.innerWidth,c_=Je.innerHeight},zo=function(){Ze.cache++,!$t&&!a_&&!gt.fullscreenElement&&!gt.webkitFullscreenElement&&(!l_||u_!==Je.innerWidth||Math.abs(Je.innerHeight-c_)>Je.innerHeight*.25)&&Bl.restart(!0)},cs={},kT=[],__=function r(){return Ut(Qe,"scrollEnd",r)||$r(!0)},us=function(e){return cs[e]&&cs[e].map(function(t){return t()})||kT},Pn=[],x_=function(e){for(var t=0;t<Pn.length;t+=5)(!e||Pn[t+4]&&Pn[t+4].query===e)&&(Pn[t].style.cssText=Pn[t+1],Pn[t].getBBox&&Pn[t].setAttribute("transform",Pn[t+2]||""),Pn[t+3].uncache=1)},nh=function(e,t){var n;for(an=0;an<je.length;an++)n=je[an],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&x_(t),t||us("revert")},v_=function(e,t){Ze.cache++,(t||!Dn)&&Ze.forEach(function(n){return fn(n)&&n.cacheID++&&(n.rec=0)}),si(e)&&(Je.history.scrollRestoration=Zf=e)},Dn,is=0,Sp,GT=function(){if(Sp!==is){var e=Sp=is;requestAnimationFrame(function(){return e===is&&$r(!0)})}},$r=function(e,t){if(Jn&&!e){Bt(Qe,"scrollEnd",__);return}Dn=Qe.isRefreshing=!0,Ze.forEach(function(i){return fn(i)&&i.cacheID++&&(i.rec=i())});var n=us("refreshInit");o_&&Qe.sort(),t||nh(),Ze.forEach(function(i){fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),je.slice(0).forEach(function(i){return i.refresh()}),je.forEach(function(i,s){if(i._subPinOffset&&i.pin){var a=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[a];i.revert(!0,1),i.adjustPinSpacing(i.pin[a]-o),i.refresh()}}),je.forEach(function(i){return i.vars.end==="max"&&i.setPositions(i.start,Math.max(i.start+1,fr(i.scroller,i._dir)))}),n.forEach(function(i){return i&&i.render&&i.render(-1)}),Ze.forEach(function(i){fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),v_(Zf,1),Bl.pause(),is++,Dn=2,Xi(2),je.forEach(function(i){return fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Dn=Qe.isRefreshing=!1,us("refresh")},of=0,Ml=1,Ko,Xi=function(e){if(!Dn||e===2){Qe.isUpdating=!0,Ko&&Ko.update(0);var t=je.length,n=cn(),i=n-uu>=50,s=t&&je[0].scroll();if(Ml=of>s?-1:1,Dn||(of=s),i&&(Jn&&!lc&&n-Jn>200&&(Jn=0,us("scrollEnd")),xl=uu,uu=n),Ml<0){for(an=t;an-- >0;)je[an]&&je[an].update(0,i);Ml=1}else for(an=0;an<t;an++)je[an]&&je[an].update(0,i);Qe.isUpdating=!1}ha=0},af=[p_,m_,Qf,Jf,Yn+jo,Yn+qo,Yn+$o,Yn+Yo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Sl=af.concat([ts,ns,"boxSizing","max"+uo,"max"+eh,"position",Yn,wt,wt+$o,wt+qo,wt+jo,wt+Yo]),VT=function(e,t,n){js(n);var i=e._gsap;if(i.spacerIsNative)js(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},du=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=af.length,a=t.style,o=e.style,l;s--;)l=af[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Qf]=o[Jf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[ts]=rf(e,un)+Vt,a[ns]=rf(e,Rt)+Vt,a[wt]=o[Yn]=o[m_]=o[p_]="0",js(i),o[ts]=o["max"+uo]=n[ts],o[ns]=o["max"+eh]=n[ns],o[wt]=n[wt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},HT=/([A-Z])/g,js=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(HT,"-$1").toLowerCase())}},rl=function(e){for(var t=Sl.length,n=e.style,i=[],s=0;s<t;s++)i.push(Sl[s],n[Sl[s]]);return i.t=e,i},WT=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},wl={left:0,top:0},wp=function(e,t,n,i,s,a,o,l,c,u,h,f,p){fn(e)&&(e=e(l)),si(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?yl("0"+e.substr(3),n):0));var g=p?p.time():0,d,m,_;if(p&&p.seek(0),No(e))p&&(e=Ie.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),o&&bl(o,n,i,!0);else{fn(t)&&(t=t(l));var S=(e||"0").split(" "),x,y,w,P;_=mn(t)||bt,x=ki(_)||{},(!x||!x.left&&!x.top)&&ui(_).display==="none"&&(P=_.style.display,_.style.display="block",x=ki(_),P?_.style.display=P:_.style.removeProperty("display")),y=yl(S[0],x[i.d]),w=yl(S[1]||"0",n),e=x[i.p]-c[i.p]-u+y+s-w,o&&bl(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(a){var A=e+n,v=a._isStart;d="scroll"+i.d2,bl(a,A,i,v&&A>20||!v&&(h?Math.max(bt[d],oi[d]):a.parentNode[d])<=A+1),h&&(c=ki(o),h&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Vt))}return p&&_&&(d=ki(_),p.seek(f),m=ki(_),p._caScrollDist=d[i.p]-m[i.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},XT=/(webkit|moz|length|cssText|inset)/i,Tp=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===bt){e._stOrig=s.cssText,o=ui(e);for(a in o)!+a&&!XT.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},y_=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=a,a}},Ep=function(e,t){var n=wr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,h){var f=a.tween,p=l.onComplete,g={};c=c||n();var d=y_(n,c,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-c,f&&f.kill(),l[i]=o,l.modifiers=g,g[i]=function(){return d(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){Ze.cache++,Xi()},l.onComplete=function(){a.tween=0,p&&p.call(f)},f=a.tween=Ie.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Bt(e,"wheel",n.wheelHandler),Qe.isTouch&&Bt(e,"touchmove",n.wheelHandler),s},Qe=function(){function r(t,n){Ps||r.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Fo){this.update=this.refresh=this.kill=vi;return}n=yp(si(n)||No(n)||n.nodeType?{trigger:n}:n,nl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,p=s.pin,g=s.pinSpacing,d=s.invalidateOnRefresh,m=s.anticipatePin,_=s.onScrubComplete,S=s.onSnapComplete,x=s.once,y=s.snap,w=s.pinReparent,P=s.pinSpacer,A=s.containerAnimation,v=s.fastScrollEnd,M=s.preventOverlaps,D=n.horizontal||n.containerAnimation&&n.horizontal!==!1?un:Rt,W=!h&&h!==0,B=mn(n.scroller||Je),U=Ie.core.getCache(B),O=ls(B),q=("pinType"in n?n.pinType:_r(B,"pinType")||O&&"fixed")==="fixed",j=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=W&&n.toggleActions.split(" "),k="markers"in n?n.markers:nl.markers,se=O?0:parseFloat(ui(B)["border"+D.p2+uo])||0,L=this,_e=n.onRefreshInit&&function(){return n.onRefreshInit(L)},V=OT(B,O,D),le=NT(B,O),fe=0,H=0,me=wr(B,D),xe,ye,we,Ae,ze,C,R,Y,re,ne,I,ue,te,de,oe,T,b,N,ee,Z,ae,pe,ge,Q,Pe,Ce,Re,Fe,Se,Ge,Le,ot,F,ie,ce,ve,Ee,it,at;if(nf(L),L._dir=D,m*=45,L.scroller=B,L.scroll=A?A.time.bind(A):me,Ae=me(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(o_=1,n.refreshPriority===-9999&&(Ko=L)),U.tweenScroll=U.tweenScroll||{top:Ep(B,Rt),left:Ep(B,un)},L.tweenTo=xe=U.tweenScroll[D.p],L.scrubDuration=function(he){ot=No(he)&&he,ot?Le?Le.duration(he):Le=Ie.to(i,{ease:"expo",totalProgress:"+=0.001",duration:ot,paused:!0,onComplete:function(){return _&&_(L)}}):(Le&&Le.progress(1).kill(),Le=0)},i&&(i.vars.lazy=!1,i._initted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(h),Le&&Le.resetTo&&Le.resetTo("totalProgress",0),Se=0,l||(l=i.vars.id)),je.push(L),y&&((!vl(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in bt.style&&Ie.set(O?[bt,oi]:B,{scrollBehavior:"auto"}),Ze.forEach(function(he){return fn(he)&&he.target===(O?gt.scrollingElement||oi:B)&&(he.smooth=!1)}),we=fn(y.snapTo)?y.snapTo:y.snapTo==="labels"?UT(i):y.snapTo==="labelsDirectional"?BT(i):y.directional!==!1?function(he,De){return th(y.snapTo)(he,cn()-H<500?0:De.direction)}:Ie.utils.snap(y.snapTo),F=y.duration||{min:.1,max:2},F=vl(F)?zs(F.min,F.max):zs(F,F),ie=Ie.delayedCall(y.delay||ot/2||.1,function(){var he=me(),De=cn()-H<500,He=xe.tween;if((De||Math.abs(L.getVelocity())<10)&&!He&&!lc&&fe!==he){var Xe=(he-C)/te,Et=i&&!W?i.totalProgress():Xe,E=De?0:(Et-Ge)/(cn()-xl)*1e3||0,G=Ie.utils.clamp(-Xe,1-Xe,Es(E/2)*E/.185),K=Xe+(y.inertia===!1?0:G),z=zs(0,1,we(K,L)),J=Math.round(C+z*te),Me=y,Oe=Me.onStart,Ue=Me.onInterrupt,Ne=Me.onComplete;if(he<=R&&he>=C&&J!==he){if(He&&!He._initted&&He.data<=Es(J-he))return;y.inertia===!1&&(G=z-Xe),xe(J,{duration:F(Es(Math.max(Es(K-Et),Es(z-Et))*.185/E/.05||0)),ease:y.ease||"power3",data:Es(J-he),onInterrupt:function(){return ie.restart(!0)&&Ue&&Ue(L)},onComplete:function(){L.update(),fe=me(),Se=Ge=i&&!W?i.totalProgress():L.progress,S&&S(L),Ne&&Ne(L)}},he,G*te,J-he-G*te),Oe&&Oe(L,xe.tween)}}else L.isActive&&fe!==he&&ie.restart(!0)}).pause()),l&&(sf[l]=L),f=L.trigger=mn(f||p),at=f&&f._gsap&&f._gsap.stRevert,at&&(at=at(L)),p=p===!0?f:mn(p),si(o)&&(o={targets:f,className:o}),p&&(g===!1||g===Yn||(g=!g&&p.parentNode&&p.parentNode.style&&ui(p.parentNode).display==="flex"?!1:wt),L.pin=p,ye=Ie.core.getCache(p),ye.spacer?de=ye.pinState:(P&&(P=mn(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),ye.spacerIsNative=!!P,P&&(ye.spacerState=rl(P))),ye.spacer=b=P||gt.createElement("div"),b.classList.add("pin-spacer"),l&&b.classList.add("pin-spacer-"+l),ye.pinState=de=rl(p)),n.force3D!==!1&&Ie.set(p,{force3D:!0}),L.spacer=b=ye.spacer,Fe=ui(p),ge=Fe[g+D.os2],ee=Ie.getProperty(p),Z=Ie.quickSetter(p,D.a,Vt),du(p,b,Fe),T=rl(p)),k){ue=vl(k)?yp(k,bp):bp,ne=il("scroller-start",l,B,D,ue,0),I=il("scroller-end",l,B,D,ue,0,ne),N=ne["offset"+D.op.d2];var St=mn(_r(B,"content")||B);Y=this.markerStart=il("start",l,St,D,ue,N,0,A),re=this.markerEnd=il("end",l,St,D,ue,N,0,A),A&&(it=Ie.quickSetter([Y,re],D.a,Vt)),!q&&!(Pi.length&&_r(B,"fixedMarkers")===!0)&&(zT(O?bt:B),Ie.set([ne,I],{force3D:!0}),Pe=Ie.quickSetter(ne,D.a,Vt),Re=Ie.quickSetter(I,D.a,Vt))}if(A){var ke=A.vars.onUpdate,Te=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){L.update(0,0,1),ke&&ke.apply(A,Te||[])})}L.previous=function(){return je[je.indexOf(L)-1]},L.next=function(){return je[je.indexOf(L)+1]},L.revert=function(he,De){if(!De)return L.kill(!0);var He=he!==!1||!L.enabled,Xe=$t;He!==L.isReverted&&(He&&(ve=Math.max(me(),L.scroll.rec||0),ce=L.progress,Ee=i&&i.progress()),Y&&[Y,re,ne,I].forEach(function(Et){return Et.style.display=He?"none":"block"}),He&&($t=L,L.update(He)),p&&(!w||!L.isActive)&&(He?VT(p,b,de):du(p,b,ui(p),Q)),He||L.update(He),$t=Xe,L.isReverted=He)},L.refresh=function(he,De){if(!(($t||!L.enabled)&&!De)){if(p&&he&&Jn){Bt(r,"scrollEnd",__);return}!Dn&&_e&&_e(L),$t=L,H=cn(),xe.tween&&(xe.tween.kill(),xe.tween=0),Le&&Le.pause(),d&&i&&i.revert({kill:!1}).invalidate(),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;for(var He=V(),Xe=le(),Et=A?A.duration():fr(B,D),E=te<=.01,G=0,K=0,z=n.end,J=n.endTrigger||f,Me=n.start||(n.start===0||!f?0:p?"0 0":"0 100%"),Oe=L.pinnedContainer=n.pinnedContainer&&mn(n.pinnedContainer),Ue=f&&Math.max(0,je.indexOf(L))||0,Ne=Ue,Be,Ve,qe,lt,tt,ct,Nt,mt,Ke,Di,st;Ne--;)ct=je[Ne],ct.end||ct.refresh(0,1)||($t=L),Nt=ct.pin,Nt&&(Nt===f||Nt===p||Nt===Oe)&&!ct.isReverted&&(Di||(Di=[]),Di.unshift(ct),ct.revert(!0,!0)),ct!==je[Ne]&&(Ue--,Ne--);for(fn(Me)&&(Me=Me(L)),C=wp(Me,f,He,D,me(),Y,ne,L,Xe,se,q,Et,A)||(p?-.001:0),fn(z)&&(z=z(L)),si(z)&&!z.indexOf("+=")&&(~z.indexOf(" ")?z=(si(Me)?Me.split(" ")[0]:"")+z:(G=yl(z.substr(2),He),z=si(Me)?Me:(A?Ie.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,C):C)+G,J=f)),R=Math.max(C,wp(z||(J?"100% 0":Et),J,He,D,me()+G,re,I,L,Xe,se,q,Et,A))||-.001,te=R-C||(C-=.01)&&.001,G=0,Ne=Ue;Ne--;)ct=je[Ne],Nt=ct.pin,Nt&&ct.start-ct._pinPush<=C&&!A&&ct.end>0&&(Be=ct.end-ct.start,(Nt===f&&ct.start-ct._pinPush<C||Nt===Oe)&&!No(Me)&&(G+=Be*(1-ct.progress)),Nt===p&&(K+=Be));if(C+=G,R+=G,E&&(ce=Ie.utils.clamp(0,1,Ie.utils.normalize(C,R,ve))),L._pinPush=K,Y&&G&&(Be={},Be[D.a]="+="+G,Oe&&(Be[D.p]="-="+me()),Ie.set([Y,re],Be)),p)Be=ui(p),lt=D===Rt,qe=me(),ae=parseFloat(ee(D.a))+K,!Et&&R>1&&(st=(O?gt.scrollingElement||oi:B).style,st={style:st,value:st["overflow"+D.a.toUpperCase()]},st.style["overflow"+D.a.toUpperCase()]="scroll"),du(p,b,Be),T=rl(p),Ve=ki(p,!0),mt=q&&wr(B,lt?un:Rt)(),g&&(Q=[g+D.os2,te+K+Vt],Q.t=b,Ne=g===wt?rf(p,D)+te+K:0,Ne&&Q.push(D.d,Ne+Vt),js(Q),Oe&&je.forEach(function(Sn){Sn.pin===Oe&&Sn.vars.pinSpacing!==!1&&(Sn._subPinOffset=!0)}),q&&me(ve)),q&&(tt={top:Ve.top+(lt?qe-C:mt)+Vt,left:Ve.left+(lt?mt:qe-C)+Vt,boxSizing:"border-box",position:"fixed"},tt[ts]=tt["max"+uo]=Math.ceil(Ve.width)+Vt,tt[ns]=tt["max"+eh]=Math.ceil(Ve.height)+Vt,tt[Yn]=tt[Yn+$o]=tt[Yn+qo]=tt[Yn+jo]=tt[Yn+Yo]="0",tt[wt]=Be[wt],tt[wt+$o]=Be[wt+$o],tt[wt+qo]=Be[wt+qo],tt[wt+jo]=Be[wt+jo],tt[wt+Yo]=Be[wt+Yo],oe=WT(de,tt,w),Dn&&me(0)),i?(Ke=i._initted,lu(1),i.render(i.duration(),!0,!0),pe=ee(D.a)-ae+te+K,Ce=Math.abs(te-pe)>1,q&&Ce&&oe.splice(oe.length-2,2),i.render(0,!0,!0),Ke||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),lu(0)):pe=te,st&&(st.value?st.style["overflow"+D.a.toUpperCase()]=st.value:st.style.removeProperty("overflow-"+D.a));else if(f&&me()&&!A)for(Ve=f.parentNode;Ve&&Ve!==bt;)Ve._pinOffset&&(C-=Ve._pinOffset,R-=Ve._pinOffset),Ve=Ve.parentNode;Di&&Di.forEach(function(Sn){return Sn.revert(!1,!0)}),L.start=C,L.end=R,Ae=ze=Dn?ve:me(),!A&&!Dn&&(Ae<ve&&me(ve),L.scroll.rec=0),L.revert(!1,!0),ie&&(fe=-1,L.isActive&&me(C+te*ce),ie.restart(!0)),$t=0,i&&W&&(i._initted||Ee)&&i.progress()!==Ee&&i.progress(Ee,!0).render(i.time(),!0,!0),(E||ce!==L.progress||A)&&(i&&!W&&i.totalProgress(A&&C<-.001&&!ce?Ie.utils.normalize(C,R,0):ce,!0),L.progress=(Ae-C)/te===ce?0:ce),p&&g&&(b._pinOffset=Math.round(L.progress*pe)),Le&&Le.invalidate(),u&&!Dn&&u(L)}},L.getVelocity=function(){return(me()-ze)/(cn()-xl)*1e3||0},L.endAnimation=function(){Ao(L.callbackAnimation),i&&(Le?Le.progress(1):i.paused()?W||Ao(i,L.direction<0,1):Ao(i,i.reversed()))},L.labelToScroll=function(he){return i&&i.labels&&(C||L.refresh()||C)+i.labels[he]/i.duration()*te||0},L.getTrailing=function(he){var De=je.indexOf(L),He=L.direction>0?je.slice(0,De).reverse():je.slice(De+1);return(si(he)?He.filter(function(Xe){return Xe.vars.preventOverlaps===he}):He).filter(function(Xe){return L.direction>0?Xe.end<=C:Xe.start>=R})},L.update=function(he,De,He){if(!(A&&!He&&!he)){var Xe=Dn===!0?ve:L.scroll(),Et=he?0:(Xe-C)/te,E=Et<0?0:Et>1?1:Et||0,G=L.progress,K,z,J,Me,Oe,Ue,Ne,Be;if(De&&(ze=Ae,Ae=A?me():Xe,y&&(Ge=Se,Se=i&&!W?i.totalProgress():E)),m&&!E&&p&&!$t&&!Ja&&Jn&&C<Xe+(Xe-ze)/(cn()-xl)*m&&(E=1e-4),E!==G&&L.enabled){if(K=L.isActive=!!E&&E<1,z=!!G&&G<1,Ue=K!==z,Oe=Ue||!!E!=!!G,L.direction=E>G?1:-1,L.progress=E,Oe&&!$t&&(J=E&&!G?0:E===1?1:G===1?2:3,W&&(Me=!Ue&&X[J+1]!=="none"&&X[J+1]||X[J],Be=i&&(Me==="complete"||Me==="reset"||Me in i))),M&&(Ue||Be)&&(Be||h||!i)&&(fn(M)?M(L):L.getTrailing(M).forEach(function(tt){return tt.endAnimation()})),W||(Le&&!$t&&!Ja?(Le._dp._time-Le._start!==Le._time&&Le.render(Le._dp._time-Le._start),Le.resetTo?Le.resetTo("totalProgress",E,i._tTime/i._tDur):(Le.vars.totalProgress=E,Le.invalidate().restart())):i&&i.totalProgress(E,!!$t)),p){if(he&&g&&(b.style[g+D.os2]=ge),!q)Z(Oo(ae+pe*E));else if(Oe){if(Ne=!he&&E>G&&R+1>Xe&&Xe+1>=fr(B,D),w)if(!he&&(K||Ne)){var Ve=ki(p,!0),qe=Xe-C;Tp(p,bt,Ve.top+(D===Rt?qe:0)+Vt,Ve.left+(D===Rt?0:qe)+Vt)}else Tp(p,b);js(K||Ne?oe:T),Ce&&E<1&&K||Z(ae+(E===1&&!Ne?pe:0))}}y&&!xe.tween&&!$t&&!Ja&&ie.restart(!0),o&&(Ue||x&&E&&(E<1||!cu))&&kl(o.targets).forEach(function(tt){return tt.classList[K||x?"add":"remove"](o.className)}),a&&!W&&!he&&a(L),Oe&&!$t?(W&&(Be&&(Me==="complete"?i.pause().totalProgress(1):Me==="reset"?i.restart(!0).pause():Me==="restart"?i.restart(!0):i[Me]()),a&&a(L)),(Ue||!cu)&&(c&&Ue&&fu(L,c),j[J]&&fu(L,j[J]),x&&(E===1?L.kill(!1,1):j[J]=0),Ue||(J=E===1?1:3,j[J]&&fu(L,j[J]))),v&&!K&&Math.abs(L.getVelocity())>(No(v)?v:2500)&&(Ao(L.callbackAnimation),Le?Le.progress(1):Ao(i,Me==="reverse"?1:!E,1))):W&&a&&!$t&&a(L)}if(Re){var lt=A?Xe/A.duration()*(A._caScrollDist||0):Xe;Pe(lt+(ne._isFlipped?1:0)),Re(lt)}it&&it(-Xe/A.duration()*(A._caScrollDist||0))}},L.enable=function(he,De){L.enabled||(L.enabled=!0,Bt(B,"resize",zo),Bt(O?gt:B,"scroll",Cs),_e&&Bt(r,"refreshInit",_e),he!==!1&&(L.progress=ce=0,Ae=ze=fe=me()),De!==!1&&L.refresh())},L.getTween=function(he){return he&&xe?xe.tween:Le},L.setPositions=function(he,De){p&&(ae+=he-C,pe+=De-he-te,g===wt&&L.adjustPinSpacing(De-he-te)),L.start=C=he,L.end=R=De,te=De-he,L.update()},L.adjustPinSpacing=function(he){if(Q&&he){var De=Q.indexOf(D.d)+1;Q[De]=parseFloat(Q[De])+he+Vt,Q[1]=parseFloat(Q[1])+he+Vt,js(Q)}},L.disable=function(he,De){if(L.enabled&&(he!==!1&&L.revert(!0,!0),L.enabled=L.isActive=!1,De||Le&&Le.pause(),ve=0,ye&&(ye.uncache=1),_e&&Ut(r,"refreshInit",_e),ie&&(ie.pause(),xe.tween&&xe.tween.kill()&&(xe.tween=0)),!O)){for(var He=je.length;He--;)if(je[He].scroller===B&&je[He]!==L)return;Ut(B,"resize",zo),Ut(B,"scroll",Cs)}},L.kill=function(he,De){L.disable(he,De),Le&&!De&&Le.kill(),l&&delete sf[l];var He=je.indexOf(L);He>=0&&je.splice(He,1),He===an&&Ml>0&&an--,He=0,je.forEach(function(Xe){return Xe.scroller===L.scroller&&(He=1)}),He||Dn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,he&&i.revert({kill:!1}),De||i.kill()),Y&&[Y,re,ne,I].forEach(function(Xe){return Xe.parentNode&&Xe.parentNode.removeChild(Xe)}),Ko===L&&(Ko=0),p&&(ye&&(ye.uncache=1),He=0,je.forEach(function(Xe){return Xe.pin===p&&He++}),He||(ye.spacer=0)),n.onKill&&n.onKill(L)},L.enable(!1,!1),at&&at(L),!i||!i.add||te?L.refresh():Ie.delayedCall(.01,function(){return C||R||L.refresh()})&&(te=.01)&&(C=R=0),p&&GT()},r.register=function(n){return Ps||(Ie=n||h_(),f_()&&window.document&&r.enable(),Ps=Fo),Ps},r.defaults=function(n){if(n)for(var i in n)nl[i]=n[i];return nl},r.disable=function(n,i){Fo=0,je.forEach(function(a){return a[i?"kill":"disable"](n)}),Ut(Je,"wheel",Cs),Ut(gt,"scroll",Cs),clearInterval(Za),Ut(gt,"touchcancel",vi),Ut(bt,"touchstart",vi),el(Ut,gt,"pointerdown,touchstart,mousedown",xp),el(Ut,gt,"pointerup,touchend,mouseup",vp),Bl.kill(),Qa(Ut);for(var s=0;s<Ze.length;s+=3)tl(Ut,Ze[s],Ze[s+1]),tl(Ut,Ze[s],Ze[s+2])},r.enable=function(){if(Je=window,gt=document,oi=gt.documentElement,bt=gt.body,Ie&&(kl=Ie.utils.toArray,zs=Ie.utils.clamp,nf=Ie.core.context||vi,lu=Ie.core.suppressOverwrites||vi,Zf=Je.history.scrollRestoration||"auto",of=Je.pageYOffset,Ie.core.globals("ScrollTrigger",r),bt)){Fo=1,FT(),Lt.register(Ie),r.isTouch=Lt.isTouch,nr=Lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Bt(Je,"wheel",Cs),s_=[Je,gt,oi,bt],Ie.matchMedia?(r.matchMedia=function(l){var c=Ie.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Ie.addEventListener("matchMediaInit",function(){return nh()}),Ie.addEventListener("matchMediaRevert",function(){return x_()}),Ie.addEventListener("matchMedia",function(){$r(0,1),us("matchMedia")}),Ie.matchMedia("(orientation: portrait)",function(){return hu(),hu})):console.warn("Requires GSAP 3.11.0 or later"),hu(),Bt(gt,"scroll",Cs);var n=bt.style,i=n.borderTopStyle,s=Ie.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=ki(bt),Rt.m=Math.round(a.top+Rt.sc())||0,un.m=Math.round(a.left+un.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Za=setInterval(Mp,250),Ie.delayedCall(.5,function(){return Ja=0}),Bt(gt,"touchcancel",vi),Bt(bt,"touchstart",vi),el(Bt,gt,"pointerdown,touchstart,mousedown",xp),el(Bt,gt,"pointerup,touchend,mouseup",vp),tf=Ie.utils.checkPrefix("transform"),Sl.push(tf),Ps=cn(),Bl=Ie.delayedCall(.2,$r).pause(),Ls=[gt,"visibilitychange",function(){var l=Je.innerWidth,c=Je.innerHeight;gt.hidden?(gp=l,_p=c):(gp!==l||_p!==c)&&zo()},gt,"DOMContentLoaded",$r,Je,"load",$r,Je,"resize",zo],Qa(Bt),je.forEach(function(l){return l.enable(0,1)}),o=0;o<Ze.length;o+=3)tl(Ut,Ze[o],Ze[o+1]),tl(Ut,Ze[o],Ze[o+2])}},r.config=function(n){"limitCallbacks"in n&&(cu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Za)||(Za=i)&&setInterval(Mp,i),"ignoreMobileResize"in n&&(l_=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Qa(Ut)||Qa(Bt,n.autoRefreshEvents||"none"),a_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=mn(n),a=Ze.indexOf(s),o=ls(s);~a&&Ze.splice(a,o?6:2),i&&(o?Pi.unshift(Je,i,bt,i,oi,i):Pi.unshift(s,i))},r.clearMatchMedia=function(n){je.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(si(n)?mn(n):n).getBoundingClientRect(),o=a[s?ts:ns]*i||0;return s?a.right-o>0&&a.left+o<Je.innerWidth:a.bottom-o>0&&a.top+o<Je.innerHeight},r.positionInViewport=function(n,i,s){si(n)&&(n=mn(n));var a=n.getBoundingClientRect(),o=a[s?ts:ns],l=i==null?o/2:i in Gl?Gl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/Je.innerWidth:(a.top+l)/Je.innerHeight},r.killAll=function(n){if(je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=cs.killAll||[];cs={},i.forEach(function(s){return s()})}},r}();Qe.version="3.11.5";Qe.saveStyles=function(r){return r?kl(r).forEach(function(e){if(e&&e.style){var t=Pn.indexOf(e);t>=0&&Pn.splice(t,5),Pn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),nf())}}):Pn};Qe.revert=function(r,e){return nh(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?zo():(Ps||Qe.register())&&$r(!0)};Qe.update=function(r){return++Ze.cache&&Xi(r===!0?2:0)};Qe.clearScrollMemory=v_;Qe.maxScroll=function(r,e){return fr(r,e?un:Rt)};Qe.getScrollFunc=function(r,e){return wr(mn(r),e?un:Rt)};Qe.getById=function(r){return sf[r]};Qe.getAll=function(){return je.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!Jn};Qe.snapDirectional=th;Qe.addEventListener=function(r,e){var t=cs[r]||(cs[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=cs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var h=[],f=[],p=Ie.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||p.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&p.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&fn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return fn(s)&&(s=s(),Bt(Qe,"refresh",function(){return s=e.batchMax()})),kl(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Qe.create(c))}),t};var Cp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},pu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Lt.isTouch?" pinch-zoom":""):"none",e===oi&&r(bt,t)},sl={auto:1,scroll:1},qT=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ie.core.getCache(s),o=cn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==bt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(sl[(l=ui(s)).overflowY]||sl[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ls(s)&&(sl[(l=ui(s)).overflowY]||sl[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},b_=function(e,t,n,i){return Lt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&qT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Bt(gt,Lt.eventTypes[0],Pp,!1,!0)},onDisable:function(){return Ut(gt,Lt.eventTypes[0],Pp,!0)}})},YT=/(input|label|select|textarea)/i,Ap,Pp=function(e){var t=YT.test(e.target.tagName);(t||Ap)&&(e._gsapAllow=!0,Ap=t)},$T=function(e){vl(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=mn(e.target)||oi,u=Ie.core.globals().ScrollSmoother,h=u&&u.get(),f=nr&&(e.content&&mn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=wr(c,Rt),g=wr(c,un),d=1,m=(Lt.isTouch&&Je.visualViewport?Je.visualViewport.scale*Je.visualViewport.width:Je.outerWidth)/Je.innerWidth,_=0,S=fn(i)?function(){return i(o)}:function(){return i||2.8},x,y,w=b_(c,e.type,!0,s),P=function(){return y=!1},A=vi,v=vi,M=function(){l=fr(c,Rt),v=zs(nr?1:0,l),n&&(A=zs(0,fr(c,un))),x=is},D=function(){f._gsap.y=Oo(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},W=function(){if(y){requestAnimationFrame(P);var k=Oo(o.deltaY/2),se=v(p.v-k);if(f&&se!==p.v+p.offset){p.offset=se-p.v;var L=Oo((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",f._gsap.y=L+"px",p.cacheID=Ze.cache,Xi()}return!0}p.offset&&D(),y=!0},B,U,O,q,j=function(){M(),B.isActive()&&B.vars.scrollY>l&&(p()>l?B.progress(1)&&p(l):B.resetTo("scrollY",l))};return f&&Ie.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return nr&&X.type==="touchmove"&&W()||d>1.05&&X.type!=="touchstart"||o.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){y=!1;var X=d;d=Oo((Je.visualViewport&&Je.visualViewport.scale||1)/m),B.pause(),X!==d&&pu(c,d>1.01?!0:n?!1:"x"),U=g(),O=p(),M(),x=is},e.onRelease=e.onGestureStart=function(X,k){if(p.offset&&D(),!k)q.restart(!0);else{Ze.cache++;var se=S(),L,_e;n&&(L=g(),_e=L+se*.05*-X.velocityX/.227,se*=Cp(g,L,_e,fr(c,un)),B.vars.scrollX=A(_e)),L=p(),_e=L+se*.05*-X.velocityY/.227,se*=Cp(p,L,_e,fr(c,Rt)),B.vars.scrollY=v(_e),B.invalidate().duration(se).play(.01),(nr&&B.vars.scrollY>=l||L>=l-1)&&Ie.to({},{onUpdate:j,duration:se})}a&&a(X)},e.onWheel=function(){B._ts&&B.pause(),cn()-_>1e3&&(x=0,_=cn())},e.onChange=function(X,k,se,L,_e){if(is!==x&&M(),k&&n&&g(A(L[2]===k?U+(X.startX-X.x):g()+k-L[1])),se){p.offset&&D();var V=_e[2]===se,le=V?O+X.startY-X.y:p()+se-_e[1],fe=v(le);V&&le!==fe&&(O+=fe-le),p(fe)}(se||k)&&Xi()},e.onEnable=function(){pu(c,n?!1:"x"),Qe.addEventListener("refresh",j),Bt(Je,"resize",j),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),w.enable()},e.onDisable=function(){pu(c,!0),Ut(Je,"resize",j),Qe.removeEventListener("refresh",j),w.kill()},e.lockAxis=e.lockAxis!==!1,o=new Lt(e),o.iOS=nr,nr&&!p()&&p(1),nr&&Ie.ticker.add(vi),q=o._dc,B=Ie.to(o,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:y_(p,p(),function(){return B.pause()})},onUpdate:Xi,onComplete:q.vars.onComplete}),o};Qe.sort=function(r){return je.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new Lt(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return An;if(r===!0&&An)return An.enable();if(r===!1)return An&&An.kill();var e=r instanceof Lt?r:$T(r);return An&&An.target===e.target&&An.kill(),ls(e.target)&&(An=e),e};Qe.core={_getVelocityProp:ef,_inputObserver:b_,_scrollers:Ze,_proxies:Pi,bridge:{ss:function(){Jn||us("scrollStart"),Jn=cn()},ref:function(){return $t}}};h_()&&Ie.registerPlugin(Qe);const ol="/portfolio/assets/rotating_gallery-c27371e9.png",Fr="/portfolio/assets/seamless_color_ball-c5b492c1.png",jT={class:"contents"},KT={class:"list"},ZT=["href","onMouseenter","onMouseleave"],JT={class:"work-img-wrap is-img-wrap"},QT=["src"],eE=yx('<div class="split-str-wrap" data-v-25742bdc><span class="split-str is-hover-text" data-v-25742bdc>V</span><span class="split-str is-hover-text" data-v-25742bdc>i</span><span class="split-str is-hover-text" data-v-25742bdc>e</span><span class="split-str is-hover-text" data-v-25742bdc>w</span><span class="split-str is-hover-text" data-v-25742bdc> </span><span class="split-str is-hover-text" data-v-25742bdc>W</span><span class="split-str is-hover-text" data-v-25742bdc>o</span><span class="split-str is-hover-text" data-v-25742bdc>r</span><span class="split-str is-hover-text" data-v-25742bdc>k</span></div>',1),tE={class:"tecs-list"},nE={class:"tec is-tec"},iE=Tf({__name:"Contents",setup(r){const e=[{img:Fr,link:"https://yoshizawa888.github.io/seamless-color-ball/",tecs:["Vue.js","Vue Router","Three.js"]},{img:ol,link:"https://yoshizawa888.github.io/rotating-gallery/",tecs:["Vue.js","Three.js"]},{img:Fr,link:"https://yoshizawa888.github.io/seamless-color-ball/",tecs:["Vue.js","Three.js"]},{img:Fr,link:"https://yoshizawa888.github.io/seamless-color-ball/",tecs:["Vue.js","Three.js","Vue.js","Three.js","Vue.js","Three.js","Vue.js","Three.js"]},{img:ol,link:"https://yoshizawa888.github.io/rotating-gallery/",tecs:["Vue.js","Three.js"]},{img:Fr,link:"https://yoshizawa888.github.io/seamless-color-ball/",tecs:["Vue.js","Vue Router","Three.js"]},{img:ol,link:"https://yoshizawa888.github.io/rotating-gallery/",tecs:["Vue.js","Three.js"]},{img:Fr,link:"https://yoshizawa888.github.io/seamless-color-ball/",tecs:["Vue.js","Three.js"]},{img:Fr,link:"https://yoshizawa888.github.io/seamless-color-ball/",tecs:["Vue.js","Vue Router","Three.js"]},{img:ol,link:"https://yoshizawa888.github.io/rotating-gallery/",tecs:["Vue.js","Three.js"]},{img:Fr,link:"https://yoshizawa888.github.io/seamless-color-ball/",tecs:["Vue.js","Three.js"]}],t=vu(),n=[],i=o=>{n[o]=_l.to(`li:nth-child(${o+1}) .is-hover-text`,{y:5,opacity:1,duration:.2,stagger:.03})},s=o=>{n[o].reverse()},a=()=>{_l.registerPlugin(Qe),t.value.forEach(l=>{const c=l.querySelectorAll(".is-img-wrap")[0],u=l.querySelectorAll(".is-tec"),h=_l.timeline({scrollTrigger:{trigger:l,start:"top 80%",toggleActions:"play none none none"}});h.fromTo(c,{opacity:0,scaleY:0},{opacity:1,scaleY:1,duration:.3}),h.fromTo(u,{opacity:0},{opacity:1,duration:.5,stagger:.2})})};return Zl(()=>{a()}),(o,l)=>(Wr(),Rs("div",jT,[Rn("ul",KT,[(Wr(),Rs(Wn,null,gh(e,(c,u)=>Rn("li",{class:"item",ref_for:!0,ref_key:"item",ref:t},[Rn("a",{href:c.link,class:"work-link",target:"_blank",onMouseenter:h=>i(u),onMouseleave:h=>s(u)},[Rn("div",JT,[Rn("img",{class:"work-img",src:c.img,alt:""},null,8,QT),eE]),Rn("ul",tE,[(Wr(!0),Rs(Wn,null,gh(c.tecs,h=>(Wr(),Rs("li",nE,P_(h),1))),256))])],40,ZT)],512)),64))])]))}});const rE=If(iE,[["__scopeId","data-v-25742bdc"]]),sE=`void main() {
  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`,oE=`uniform float uTime;

void main() {
  vec3 pos = position;
  pos.y += (sin(uv.x * 50.0 + uTime) + cos(uv.x * 30.0 + uTime * 0.5)) * 10.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

}`,aE={class:"wrap"},lE=Tf({__name:"Canvas",setup(r){const e=vu();vu();let t=innerWidth,n=innerHeight;const i=new Rf({antialias:!0});i.setSize(t,n),i.setPixelRatio(devicePixelRatio);const a=500/2*(Math.PI/180);let o=n/2/Math.tan(a);const l=new qn(75,t/n,.1,1e3);l.position.set(0,0,7),l.position.z=o;const c=new aw,u=new ic(300,1,256,256),h={uTime:{value:0}},f=new br({vertexShader:oE,fragmentShader:sE,uniforms:h}),p=new Gi(u,f);c.add(p);const g=new go(30,30,30),d=new uw(g),m=5,_=new Array(m),S=new Zm({color:16777215}),x=[],y=[-80,90,-30,90,-100],w=[0,70,140,200,220],P=[70,20,-20,50,40];for(let M=0;M<m;M++)_[M]=new cw(d,S),_[M].position.set(y[M],-M*w[M]-n*.15,P[M]),_[M].rotation.x=Math.random()*2,_[M].rotation.y=Math.random()*2,_[M].rotation.z=Math.random()*2,x[M]=_[M].position.y,c.add(_[M]);window.addEventListener("resize",()=>{t=innerWidth,n=innerHeight,i.setSize(t,n),o=n/2/Math.tan(a),l.position.z=o,l.aspect=t/n,l.updateProjectionMatrix()});for(let M=0;M<m;M++)_[M].position.y=window.pageYOffset+x[M];window.addEventListener("scroll",()=>{for(let M=0;M<m;M++)_[M].position.y=(window.pageYOffset+x[M]-M*w[M]-n*.9)*.15,p.position.y=window.pageYOffset*.3});const A=new fw,v=()=>{requestAnimationFrame(()=>{v()}),i.render(c,l),A.getElapsedTime();for(let M=0;M<m;M++)_[M].rotation.y+=.005;h.uTime.value+=.1};return Zl(()=>{e.value.appendChild(i.domElement),v()}),(M,D)=>(Wr(),Rs("div",aE,[Rn("div",{ref_key:"canvas",ref:e,class:"canvas"},null,512),pi(xw),pi(rE)]))}});const cE=If(lE,[["__scopeId","data-v-cae64e69"]]),uE=Tf({__name:"App",setup(r){return(e,t)=>(Wr(),gx(cE))}});tv(uE).mount("#app");
