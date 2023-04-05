(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Jf(i,e){const t=Object.create(null),n=i.split(",");for(let r=0;r<n.length;r++)t[n[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Qf(i){if(qe(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],r=Rt(n)?Ex(n):Qf(n);if(r)for(const s in r)e[s]=r[s]}return e}else{if(Rt(i))return i;if(xt(i))return i}}const Sx=/;(?![^(]*\))/g,wx=/:([^]+)/,Tx=/\/\*.*?\*\//gs;function Ex(i){const e={};return i.replace(Tx,"").split(Sx).forEach(t=>{if(t){const n=t.split(wx);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function eh(i){let e="";if(Rt(i))e=i;else if(qe(i))for(let t=0;t<i.length;t++){const n=eh(i[t]);n&&(e+=n+" ")}else if(xt(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const Cx="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ax=Jf(Cx);function Zm(i){return!!i||i===""}const Px=i=>Rt(i)?i:i==null?"":qe(i)||xt(i)&&(i.toString===tg||!je(i.toString))?JSON.stringify(i,Jm,2):String(i),Jm=(i,e)=>e&&e.__v_isRef?Jm(i,e.value):ao(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[n,r])=>(t[`${n} =>`]=r,t),{})}:Qm(e)?{[`Set(${e.size})`]:[...e.values()]}:xt(e)&&!qe(e)&&!ng(e)?String(e):e,bt={},oo=[],vi=()=>{},Rx=()=>!1,Lx=/^on[^a-z]/,Tc=i=>Lx.test(i),th=i=>i.startsWith("onUpdate:"),Kt=Object.assign,nh=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Dx=Object.prototype.hasOwnProperty,rt=(i,e)=>Dx.call(i,e),qe=Array.isArray,ao=i=>Ec(i)==="[object Map]",Qm=i=>Ec(i)==="[object Set]",je=i=>typeof i=="function",Rt=i=>typeof i=="string",ih=i=>typeof i=="symbol",xt=i=>i!==null&&typeof i=="object",eg=i=>xt(i)&&je(i.then)&&je(i.catch),tg=Object.prototype.toString,Ec=i=>tg.call(i),Ix=i=>Ec(i).slice(8,-1),ng=i=>Ec(i)==="[object Object]",rh=i=>Rt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Wl=Jf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Cc=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},Ox=/-(\w)/g,Bi=Cc(i=>i.replace(Ox,(e,t)=>t?t.toUpperCase():"")),Fx=/\B([A-Z])/g,No=Cc(i=>i.replace(Fx,"-$1").toLowerCase()),Ac=Cc(i=>i.charAt(0).toUpperCase()+i.slice(1)),Kc=Cc(i=>i?`on${Ac(i)}`:""),Ea=(i,e)=>!Object.is(i,e),Zc=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},oc=(i,e,t)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,value:t})},Nx=i=>{const e=parseFloat(i);return isNaN(e)?i:e},zx=i=>{const e=Rt(i)?Number(i):NaN;return isNaN(e)?i:e};let nd;const Ux=()=>nd||(nd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let fi;class kx{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=fi,!e&&fi&&(this.index=(fi.scopes||(fi.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=fi;try{return fi=this,e()}finally{fi=t}}}on(){fi=this}off(){fi=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Bx(i,e=fi){e&&e.active&&e.effects.push(i)}function Gx(){return fi}const sh=i=>{const e=new Set(i);return e.w=0,e.n=0,e},ig=i=>(i.w&Ur)>0,rg=i=>(i.n&Ur)>0,Vx=({deps:i})=>{if(i.length)for(let e=0;e<i.length;e++)i[e].w|=Ur},Hx=i=>{const{deps:e}=i;if(e.length){let t=0;for(let n=0;n<e.length;n++){const r=e[n];ig(r)&&!rg(r)?r.delete(i):e[t++]=r,r.w&=~Ur,r.n&=~Ur}e.length=t}},rf=new WeakMap;let ta=0,Ur=1;const sf=30;let pi;const ms=Symbol(""),of=Symbol("");class oh{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Bx(this,n)}run(){if(!this.active)return this.fn();let e=pi,t=Lr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=pi,pi=this,Lr=!0,Ur=1<<++ta,ta<=sf?Vx(this):id(this),this.fn()}finally{ta<=sf&&Hx(this),Ur=1<<--ta,pi=this.parent,Lr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){pi===this?this.deferStop=!0:this.active&&(id(this),this.onStop&&this.onStop(),this.active=!1)}}function id(i){const{deps:e}=i;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(i);e.length=0}}let Lr=!0;const sg=[];function zo(){sg.push(Lr),Lr=!1}function Uo(){const i=sg.pop();Lr=i===void 0?!0:i}function Pn(i,e,t){if(Lr&&pi){let n=rf.get(i);n||rf.set(i,n=new Map);let r=n.get(t);r||n.set(t,r=sh()),og(r)}}function og(i,e){let t=!1;ta<=sf?rg(i)||(i.n|=Ur,t=!ig(i)):t=!i.has(pi),t&&(i.add(pi),pi.deps.push(i))}function or(i,e,t,n,r,s){const o=rf.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&qe(i)){const l=Number(n);o.forEach((c,u)=>{(u==="length"||u>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":qe(i)?rh(t)&&a.push(o.get("length")):(a.push(o.get(ms)),ao(i)&&a.push(o.get(of)));break;case"delete":qe(i)||(a.push(o.get(ms)),ao(i)&&a.push(o.get(of)));break;case"set":ao(i)&&a.push(o.get(ms));break}if(a.length===1)a[0]&&af(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);af(sh(l))}}function af(i,e){const t=qe(i)?i:[...i];for(const n of t)n.computed&&rd(n);for(const n of t)n.computed||rd(n)}function rd(i,e){(i!==pi||i.allowRecurse)&&(i.scheduler?i.scheduler():i.run())}const Wx=Jf("__proto__,__v_isRef,__isVue"),ag=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(ih)),Xx=ah(),qx=ah(!1,!0),$x=ah(!0),sd=Yx();function Yx(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=ot(this);for(let s=0,o=this.length;s<o;s++)Pn(n,"get",s+"");const r=n[e](...t);return r===-1||r===!1?n[e](...t.map(ot)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){zo();const n=ot(this)[e].apply(this,t);return Uo(),n}}),i}function jx(i){const e=ot(this);return Pn(e,"has",i),e.hasOwnProperty(i)}function ah(i=!1,e=!1){return function(n,r,s){if(r==="__v_isReactive")return!i;if(r==="__v_isReadonly")return i;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(i?e?fv:hg:e?fg:ug).get(n))return n;const o=qe(n);if(!i){if(o&&rt(sd,r))return Reflect.get(sd,r,s);if(r==="hasOwnProperty")return jx}const a=Reflect.get(n,r,s);return(ih(r)?ag.has(r):Wx(r))||(i||Pn(n,"get",r),e)?a:nn(a)?o&&rh(r)?a:a.value:xt(a)?i?dg(a):Xa(a):a}}const Kx=lg(),Zx=lg(!0);function lg(i=!1){return function(t,n,r,s){let o=t[n];if(yo(o)&&nn(o)&&!nn(r))return!1;if(!i&&(!ac(r)&&!yo(r)&&(o=ot(o),r=ot(r)),!qe(t)&&nn(o)&&!nn(r)))return o.value=r,!0;const a=qe(t)&&rh(n)?Number(n)<t.length:rt(t,n),l=Reflect.set(t,n,r,s);return t===ot(s)&&(a?Ea(r,o)&&or(t,"set",n,r):or(t,"add",n,r)),l}}function Jx(i,e){const t=rt(i,e);i[e];const n=Reflect.deleteProperty(i,e);return n&&t&&or(i,"delete",e,void 0),n}function Qx(i,e){const t=Reflect.has(i,e);return(!ih(e)||!ag.has(e))&&Pn(i,"has",e),t}function ev(i){return Pn(i,"iterate",qe(i)?"length":ms),Reflect.ownKeys(i)}const cg={get:Xx,set:Kx,deleteProperty:Jx,has:Qx,ownKeys:ev},tv={get:$x,set(i,e){return!0},deleteProperty(i,e){return!0}},nv=Kt({},cg,{get:qx,set:Zx}),lh=i=>i,Pc=i=>Reflect.getPrototypeOf(i);function tl(i,e,t=!1,n=!1){i=i.__v_raw;const r=ot(i),s=ot(e);t||(e!==s&&Pn(r,"get",e),Pn(r,"get",s));const{has:o}=Pc(r),a=n?lh:t?fh:Ca;if(o.call(r,e))return a(i.get(e));if(o.call(r,s))return a(i.get(s));i!==r&&i.get(e)}function nl(i,e=!1){const t=this.__v_raw,n=ot(t),r=ot(i);return e||(i!==r&&Pn(n,"has",i),Pn(n,"has",r)),i===r?t.has(i):t.has(i)||t.has(r)}function il(i,e=!1){return i=i.__v_raw,!e&&Pn(ot(i),"iterate",ms),Reflect.get(i,"size",i)}function od(i){i=ot(i);const e=ot(this);return Pc(e).has.call(e,i)||(e.add(i),or(e,"add",i,i)),this}function ad(i,e){e=ot(e);const t=ot(this),{has:n,get:r}=Pc(t);let s=n.call(t,i);s||(i=ot(i),s=n.call(t,i));const o=r.call(t,i);return t.set(i,e),s?Ea(e,o)&&or(t,"set",i,e):or(t,"add",i,e),this}function ld(i){const e=ot(this),{has:t,get:n}=Pc(e);let r=t.call(e,i);r||(i=ot(i),r=t.call(e,i)),n&&n.call(e,i);const s=e.delete(i);return r&&or(e,"delete",i,void 0),s}function cd(){const i=ot(this),e=i.size!==0,t=i.clear();return e&&or(i,"clear",void 0,void 0),t}function rl(i,e){return function(n,r){const s=this,o=s.__v_raw,a=ot(o),l=e?lh:i?fh:Ca;return!i&&Pn(a,"iterate",ms),o.forEach((c,u)=>n.call(r,l(c),l(u),s))}}function sl(i,e,t){return function(...n){const r=this.__v_raw,s=ot(r),o=ao(s),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=r[i](...n),u=t?lh:e?fh:Ca;return!e&&Pn(s,"iterate",l?of:ms),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function fr(i){return function(...e){return i==="delete"?!1:this}}function iv(){const i={get(s){return tl(this,s)},get size(){return il(this)},has:nl,add:od,set:ad,delete:ld,clear:cd,forEach:rl(!1,!1)},e={get(s){return tl(this,s,!1,!0)},get size(){return il(this)},has:nl,add:od,set:ad,delete:ld,clear:cd,forEach:rl(!1,!0)},t={get(s){return tl(this,s,!0)},get size(){return il(this,!0)},has(s){return nl.call(this,s,!0)},add:fr("add"),set:fr("set"),delete:fr("delete"),clear:fr("clear"),forEach:rl(!0,!1)},n={get(s){return tl(this,s,!0,!0)},get size(){return il(this,!0)},has(s){return nl.call(this,s,!0)},add:fr("add"),set:fr("set"),delete:fr("delete"),clear:fr("clear"),forEach:rl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{i[s]=sl(s,!1,!1),t[s]=sl(s,!0,!1),e[s]=sl(s,!1,!0),n[s]=sl(s,!0,!0)}),[i,t,e,n]}const[rv,sv,ov,av]=iv();function ch(i,e){const t=e?i?av:ov:i?sv:rv;return(n,r,s)=>r==="__v_isReactive"?!i:r==="__v_isReadonly"?i:r==="__v_raw"?n:Reflect.get(rt(t,r)&&r in n?t:n,r,s)}const lv={get:ch(!1,!1)},cv={get:ch(!1,!0)},uv={get:ch(!0,!1)},ug=new WeakMap,fg=new WeakMap,hg=new WeakMap,fv=new WeakMap;function hv(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dv(i){return i.__v_skip||!Object.isExtensible(i)?0:hv(Ix(i))}function Xa(i){return yo(i)?i:uh(i,!1,cg,lv,ug)}function pv(i){return uh(i,!1,nv,cv,fg)}function dg(i){return uh(i,!0,tv,uv,hg)}function uh(i,e,t,n,r){if(!xt(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const s=r.get(i);if(s)return s;const o=dv(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return r.set(i,a),a}function lo(i){return yo(i)?lo(i.__v_raw):!!(i&&i.__v_isReactive)}function yo(i){return!!(i&&i.__v_isReadonly)}function ac(i){return!!(i&&i.__v_isShallow)}function pg(i){return lo(i)||yo(i)}function ot(i){const e=i&&i.__v_raw;return e?ot(e):i}function mg(i){return oc(i,"__v_skip",!0),i}const Ca=i=>xt(i)?Xa(i):i,fh=i=>xt(i)?dg(i):i;function gg(i){Lr&&pi&&(i=ot(i),og(i.dep||(i.dep=sh())))}function _g(i,e){i=ot(i);const t=i.dep;t&&af(t)}function nn(i){return!!(i&&i.__v_isRef===!0)}function hh(i){return xg(i,!1)}function mv(i){return xg(i,!0)}function xg(i,e){return nn(i)?i:new gv(i,e)}class gv{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ot(e),this._value=t?e:Ca(e)}get value(){return gg(this),this._value}set value(e){const t=this.__v_isShallow||ac(e)||yo(e);e=t?e:ot(e),Ea(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ca(e),_g(this))}}function yi(i){return nn(i)?i.value:i}const _v={get:(i,e,t)=>yi(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const r=i[e];return nn(r)&&!nn(t)?(r.value=t,!0):Reflect.set(i,e,t,n)}};function vg(i){return lo(i)?i:new Proxy(i,_v)}var yg;class xv{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[yg]=!1,this._dirty=!0,this.effect=new oh(e,()=>{this._dirty||(this._dirty=!0,_g(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=ot(this);return gg(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}yg="__v_isReadonly";function vv(i,e,t=!1){let n,r;const s=je(i);return s?(n=i,r=vi):(n=i.get,r=i.set),new xv(n,r,s||!r,t)}function Dr(i,e,t,n){let r;try{r=n?i(...n):i()}catch(s){Rc(s,e,t)}return r}function ri(i,e,t,n){if(je(i)){const s=Dr(i,e,t,n);return s&&eg(s)&&s.catch(o=>{Rc(o,e,t)}),s}const r=[];for(let s=0;s<i.length;s++)r.push(ri(i[s],e,t,n));return r}function Rc(i,e,t,n=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](i,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Dr(l,null,10,[i,o,a]);return}}yv(i,t,r,n)}function yv(i,e,t,n=!0){console.error(i)}let Aa=!1,lf=!1;const en=[];let Pi=0;const co=[];let Zi=null,as=0;const bg=Promise.resolve();let dh=null;function Mg(i){const e=dh||bg;return i?e.then(this?i.bind(this):i):e}function bv(i){let e=Pi+1,t=en.length;for(;e<t;){const n=e+t>>>1;Pa(en[n])<i?e=n+1:t=n}return e}function ph(i){(!en.length||!en.includes(i,Aa&&i.allowRecurse?Pi+1:Pi))&&(i.id==null?en.push(i):en.splice(bv(i.id),0,i),Sg())}function Sg(){!Aa&&!lf&&(lf=!0,dh=bg.then(Tg))}function Mv(i){const e=en.indexOf(i);e>Pi&&en.splice(e,1)}function Sv(i){qe(i)?co.push(...i):(!Zi||!Zi.includes(i,i.allowRecurse?as+1:as))&&co.push(i),Sg()}function ud(i,e=Aa?Pi+1:0){for(;e<en.length;e++){const t=en[e];t&&t.pre&&(en.splice(e,1),e--,t())}}function wg(i){if(co.length){const e=[...new Set(co)];if(co.length=0,Zi){Zi.push(...e);return}for(Zi=e,Zi.sort((t,n)=>Pa(t)-Pa(n)),as=0;as<Zi.length;as++)Zi[as]();Zi=null,as=0}}const Pa=i=>i.id==null?1/0:i.id,wv=(i,e)=>{const t=Pa(i)-Pa(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function Tg(i){lf=!1,Aa=!0,en.sort(wv);const e=vi;try{for(Pi=0;Pi<en.length;Pi++){const t=en[Pi];t&&t.active!==!1&&Dr(t,null,14)}}finally{Pi=0,en.length=0,wg(),Aa=!1,dh=null,(en.length||co.length)&&Tg()}}function Tv(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||bt;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in n){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=n[u]||bt;f&&(r=t.map(p=>Rt(p)?p.trim():p)),h&&(r=t.map(Nx))}let a,l=n[a=Kc(e)]||n[a=Kc(Bi(e))];!l&&s&&(l=n[a=Kc(No(e))]),l&&ri(l,i,6,r);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,ri(c,i,6,r)}}function Eg(i,e,t=!1){const n=e.emitsCache,r=n.get(i);if(r!==void 0)return r;const s=i.emits;let o={},a=!1;if(!je(i)){const l=c=>{const u=Eg(c,e,!0);u&&(a=!0,Kt(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!s&&!a?(xt(i)&&n.set(i,null),null):(qe(s)?s.forEach(l=>o[l]=null):Kt(o,s),xt(i)&&n.set(i,o),o)}function Lc(i,e){return!i||!Tc(e)?!1:(e=e.slice(2).replace(/Once$/,""),rt(i,e[0].toLowerCase()+e.slice(1))||rt(i,No(e))||rt(i,e))}let rn=null,Dc=null;function lc(i){const e=rn;return rn=i,Dc=i&&i.type.__scopeId||null,e}function mh(i){Dc=i}function gh(){Dc=null}function Gi(i,e=rn,t){if(!e||i._n)return i;const n=(...r)=>{n._d&&bd(-1);const s=lc(e);let o;try{o=i(...r)}finally{lc(s),n._d&&bd(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function Jc(i){const{type:e,vnode:t,proxy:n,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:p,ctx:g,inheritAttrs:d}=i;let m,_;const b=lc(i);try{if(t.shapeFlag&4){const y=r||n;m=Ci(u.call(y,y,h,s,p,f,g)),_=l}else{const y=e;m=Ci(y.length>1?y(s,{attrs:l,slots:a,emit:c}):y(s,null)),_=e.props?l:Ev(l)}}catch(y){ha.length=0,Rc(y,i,1),m=zt(Fi)}let v=m;if(_&&d!==!1){const y=Object.keys(_),{shapeFlag:S}=v;y.length&&S&7&&(o&&y.some(th)&&(_=Cv(_,o)),v=kr(v,_))}return t.dirs&&(v=kr(v),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&(v.transition=t.transition),m=v,lc(b),m}const Ev=i=>{let e;for(const t in i)(t==="class"||t==="style"||Tc(t))&&((e||(e={}))[t]=i[t]);return e},Cv=(i,e)=>{const t={};for(const n in i)(!th(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Av(i,e,t){const{props:n,children:r,component:s}=i,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?fd(n,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==n[f]&&!Lc(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?fd(n,o,c):!0:!!o;return!1}function fd(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let r=0;r<n.length;r++){const s=n[r];if(e[s]!==i[s]&&!Lc(t,s))return!0}return!1}function Pv({vnode:i,parent:e},t){for(;e&&e.subTree===i;)(i=e.vnode).el=t,e=e.parent}const Rv=i=>i.__isSuspense;function Lv(i,e){e&&e.pendingBranch?qe(i)?e.effects.push(...i):e.effects.push(i):Sv(i)}function Xl(i,e){if(Pt){let t=Pt.provides;const n=Pt.parent&&Pt.parent.provides;n===t&&(t=Pt.provides=Object.create(n)),t[i]=e}}function Oi(i,e,t=!1){const n=Pt||rn;if(n){const r=n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides;if(r&&i in r)return r[i];if(arguments.length>1)return t&&je(e)?e.call(n.proxy):e}}const ol={};function ql(i,e,t){return Cg(i,e,t)}function Cg(i,e,{immediate:t,deep:n,flush:r,onTrack:s,onTrigger:o}=bt){const a=Gx()===(Pt==null?void 0:Pt.scope)?Pt:null;let l,c=!1,u=!1;if(nn(i)?(l=()=>i.value,c=ac(i)):lo(i)?(l=()=>i,n=!0):qe(i)?(u=!0,c=i.some(v=>lo(v)||ac(v)),l=()=>i.map(v=>{if(nn(v))return v.value;if(lo(v))return eo(v);if(je(v))return Dr(v,a,2)})):je(i)?e?l=()=>Dr(i,a,2):l=()=>{if(!(a&&a.isUnmounted))return h&&h(),ri(i,a,3,[f])}:l=vi,e&&n){const v=l;l=()=>eo(v())}let h,f=v=>{h=_.onStop=()=>{Dr(v,a,4)}},p;if(La)if(f=vi,e?t&&ri(e,a,3,[l(),u?[]:void 0,f]):l(),r==="sync"){const v=Sy();p=v.__watcherHandles||(v.__watcherHandles=[])}else return vi;let g=u?new Array(i.length).fill(ol):ol;const d=()=>{if(_.active)if(e){const v=_.run();(n||c||(u?v.some((y,S)=>Ea(y,g[S])):Ea(v,g)))&&(h&&h(),ri(e,a,3,[v,g===ol?void 0:u&&g[0]===ol?[]:g,f]),g=v)}else _.run()};d.allowRecurse=!!e;let m;r==="sync"?m=d:r==="post"?m=()=>bn(d,a&&a.suspense):(d.pre=!0,a&&(d.id=a.uid),m=()=>ph(d));const _=new oh(l,m);e?t?d():g=_.run():r==="post"?bn(_.run.bind(_),a&&a.suspense):_.run();const b=()=>{_.stop(),a&&a.scope&&nh(a.scope.effects,_)};return p&&p.push(b),b}function Dv(i,e,t){const n=this.proxy,r=Rt(i)?i.includes(".")?Ag(n,i):()=>n[i]:i.bind(n,n);let s;je(e)?s=e:(s=e.handler,t=e);const o=Pt;bo(this);const a=Cg(r,s.bind(n),t);return o?bo(o):gs(),a}function Ag(i,e){const t=e.split(".");return()=>{let n=i;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}function eo(i,e){if(!xt(i)||i.__v_skip||(e=e||new Set,e.has(i)))return i;if(e.add(i),nn(i))eo(i.value,e);else if(qe(i))for(let t=0;t<i.length;t++)eo(i[t],e);else if(Qm(i)||ao(i))i.forEach(t=>{eo(t,e)});else if(ng(i))for(const t in i)eo(i[t],e);return i}function Iv(){const i={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qa(()=>{i.isMounted=!0}),Fg(()=>{i.isUnmounting=!0}),i}const $n=[Function,Array],Ov={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$n,onEnter:$n,onAfterEnter:$n,onEnterCancelled:$n,onBeforeLeave:$n,onLeave:$n,onAfterLeave:$n,onLeaveCancelled:$n,onBeforeAppear:$n,onAppear:$n,onAfterAppear:$n,onAppearCancelled:$n},setup(i,{slots:e}){const t=my(),n=Iv();let r;return()=>{const s=e.default&&Lg(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const d of s)if(d.type!==Fi){o=d;break}}const a=ot(i),{mode:l}=a;if(n.isLeaving)return Qc(o);const c=hd(o);if(!c)return Qc(o);const u=cf(c,a,n,t);uf(c,u);const h=t.subTree,f=h&&hd(h);let p=!1;const{getTransitionKey:g}=c.type;if(g){const d=g();r===void 0?r=d:d!==r&&(r=d,p=!0)}if(f&&f.type!==Fi&&(!ls(c,f)||p)){const d=cf(f,a,n,t);if(uf(f,d),l==="out-in")return n.isLeaving=!0,d.afterLeave=()=>{n.isLeaving=!1,t.update.active!==!1&&t.update()},Qc(o);l==="in-out"&&c.type!==Fi&&(d.delayLeave=(m,_,b)=>{const v=Rg(n,f);v[String(f.key)]=f,m._leaveCb=()=>{_(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=b})}return o}}},Pg=Ov;function Rg(i,e){const{leavingVNodes:t}=i;let n=t.get(e.type);return n||(n=Object.create(null),t.set(e.type,n)),n}function cf(i,e,t,n){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:f,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:d,onAppear:m,onAfterAppear:_,onAppearCancelled:b}=e,v=String(i.key),y=Rg(t,i),S=(x,w)=>{x&&ri(x,n,9,w)},P=(x,w)=>{const L=w[1];S(x,w),qe(x)?x.every(W=>W.length<=1)&&L():x.length<=1&&L()},A={mode:s,persisted:o,beforeEnter(x){let w=a;if(!t.isMounted)if(r)w=d||a;else return;x._leaveCb&&x._leaveCb(!0);const L=y[v];L&&ls(i,L)&&L.el._leaveCb&&L.el._leaveCb(),S(w,[x])},enter(x){let w=l,L=c,W=u;if(!t.isMounted)if(r)w=m||l,L=_||c,W=b||u;else return;let O=!1;const U=x._enterCb=N=>{O||(O=!0,N?S(W,[x]):S(L,[x]),A.delayedLeave&&A.delayedLeave(),x._enterCb=void 0)};w?P(w,[x,U]):U()},leave(x,w){const L=String(i.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return w();S(h,[x]);let W=!1;const O=x._leaveCb=U=>{W||(W=!0,w(),U?S(g,[x]):S(p,[x]),x._leaveCb=void 0,y[L]===i&&delete y[L])};y[L]=i,f?P(f,[x,O]):O()},clone(x){return cf(x,e,t,n)}};return A}function Qc(i){if(Ic(i))return i=kr(i),i.children=null,i}function hd(i){return Ic(i)?i.children?i.children[0]:void 0:i}function uf(i,e){i.shapeFlag&6&&i.component?uf(i.component.subTree,e):i.shapeFlag&128?(i.ssContent.transition=e.clone(i.ssContent),i.ssFallback.transition=e.clone(i.ssFallback)):i.transition=e}function Lg(i,e=!1,t){let n=[],r=0;for(let s=0;s<i.length;s++){let o=i[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===Sn?(o.patchFlag&128&&r++,n=n.concat(Lg(o.children,e,a))):(e||o.type!==Fi)&&n.push(a!=null?kr(o,{key:a}):o)}if(r>1)for(let s=0;s<n.length;s++)n[s].patchFlag=-2;return n}function Hi(i){return je(i)?{setup:i,name:i.name}:i}const ua=i=>!!i.type.__asyncLoader,Ic=i=>i.type.__isKeepAlive;function Dg(i,e){Og(i,"a",e)}function Ig(i,e){Og(i,"da",e)}function Og(i,e,t=Pt){const n=i.__wdc||(i.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return i()});if(Oc(e,n,t),t){let r=t.parent;for(;r&&r.parent;)Ic(r.parent.vnode)&&Fv(n,e,t,r),r=r.parent}}function Fv(i,e,t,n){const r=Oc(e,i,n,!0);_h(()=>{nh(n[e],r)},t)}function Oc(i,e,t=Pt,n=!1){if(t){const r=t[i]||(t[i]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;zo(),bo(t);const a=ri(e,t,i,o);return gs(),Uo(),a});return n?r.unshift(s):r.push(s),s}}const cr=i=>(e,t=Pt)=>(!La||i==="sp")&&Oc(i,(...n)=>e(...n),t),Nv=cr("bm"),qa=cr("m"),zv=cr("bu"),Uv=cr("u"),Fg=cr("bum"),_h=cr("um"),kv=cr("sp"),Bv=cr("rtg"),Gv=cr("rtc");function Vv(i,e=Pt){Oc("ec",i,e)}function $r(i,e,t,n){const r=i.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[n];l&&(zo(),ri(l,t,8,[i.el,a,i,e]),Uo())}}const xh="components";function vh(i,e){return zg(xh,i,!0,e)||i}const Ng=Symbol();function Hv(i){return Rt(i)?zg(xh,i,!1)||i:i||Ng}function zg(i,e,t=!0,n=!1){const r=rn||Pt;if(r){const s=r.type;if(i===xh){const a=yy(s,!1);if(a&&(a===e||a===Bi(e)||a===Ac(Bi(e))))return s}const o=dd(r[i]||s[i],e)||dd(r.appContext[i],e);return!o&&n?s:o}}function dd(i,e){return i&&(i[e]||i[Bi(e)]||i[Ac(Bi(e))])}function pd(i,e,t,n){let r;const s=t&&t[n];if(qe(i)||Rt(i)){r=new Array(i.length);for(let o=0,a=i.length;o<a;o++)r[o]=e(i[o],o,void 0,s&&s[o])}else if(typeof i=="number"){r=new Array(i);for(let o=0;o<i;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(xt(i))if(i[Symbol.iterator])r=Array.from(i,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(i);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(i[c],c,a,s&&s[a])}}else r=[];return t&&(t[n]=r),r}function Wv(i,e,t={},n,r){if(rn.isCE||rn.parent&&ua(rn.parent)&&rn.parent.isCE)return e!=="default"&&(t.name=e),zt("slot",t,n&&n());let s=i[e];s&&s._c&&(s._d=!1),xn();const o=s&&Ug(s(t)),a=Ls(Sn,{key:t.key||o&&o.key||`_${e}`},o||(n?n():[]),o&&i._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Ug(i){return i.some(e=>uc(e)?!(e.type===Fi||e.type===Sn&&!Ug(e.children)):!0)?i:null}const ff=i=>i?jg(i)?Sh(i)||i.proxy:ff(i.parent):null,fa=Kt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>ff(i.parent),$root:i=>ff(i.root),$emit:i=>i.emit,$options:i=>yh(i),$forceUpdate:i=>i.f||(i.f=()=>ph(i.update)),$nextTick:i=>i.n||(i.n=Mg.bind(i.proxy)),$watch:i=>Dv.bind(i)}),eu=(i,e)=>i!==bt&&!i.__isScriptSetup&&rt(i,e),Xv={get({_:i},e){const{ctx:t,setupState:n,data:r,props:s,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return n[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(eu(n,e))return o[e]=1,n[e];if(r!==bt&&rt(r,e))return o[e]=2,r[e];if((c=i.propsOptions[0])&&rt(c,e))return o[e]=3,s[e];if(t!==bt&&rt(t,e))return o[e]=4,t[e];hf&&(o[e]=0)}}const u=fa[e];let h,f;if(u)return e==="$attrs"&&Pn(i,"get",e),u(i);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==bt&&rt(t,e))return o[e]=4,t[e];if(f=l.config.globalProperties,rt(f,e))return f[e]},set({_:i},e,t){const{data:n,setupState:r,ctx:s}=i;return eu(r,e)?(r[e]=t,!0):n!==bt&&rt(n,e)?(n[e]=t,!0):rt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(s[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:r,propsOptions:s}},o){let a;return!!t[o]||i!==bt&&rt(i,o)||eu(e,o)||(a=s[0])&&rt(a,o)||rt(n,o)||rt(fa,o)||rt(r.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:rt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};let hf=!0;function qv(i){const e=yh(i),t=i.proxy,n=i.ctx;hf=!1,e.beforeCreate&&md(e.beforeCreate,i,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:p,updated:g,activated:d,deactivated:m,beforeDestroy:_,beforeUnmount:b,destroyed:v,unmounted:y,render:S,renderTracked:P,renderTriggered:A,errorCaptured:x,serverPrefetch:w,expose:L,inheritAttrs:W,components:O,directives:U,filters:N}=e;if(c&&$v(c,n,null,i.appContext.config.unwrapInjectedRef),o)for(const q in o){const G=o[q];je(G)&&(n[q]=G.bind(t))}if(r){const q=r.call(t,t);xt(q)&&(i.data=Xa(q))}if(hf=!0,s)for(const q in s){const G=s[q],le=je(G)?G.bind(t,t):je(G.get)?G.get.bind(t,t):vi,D=!je(G)&&je(G.set)?G.set.bind(t):vi,be=ei({get:le,set:D});Object.defineProperty(n,q,{enumerable:!0,configurable:!0,get:()=>be.value,set:H=>be.value=H})}if(a)for(const q in a)kg(a[q],n,t,q);if(l){const q=je(l)?l.call(t):l;Reflect.ownKeys(q).forEach(G=>{Xl(G,q[G])})}u&&md(u,i,"c");function j(q,G){qe(G)?G.forEach(le=>q(le.bind(t))):G&&q(G.bind(t))}if(j(Nv,h),j(qa,f),j(zv,p),j(Uv,g),j(Dg,d),j(Ig,m),j(Vv,x),j(Gv,P),j(Bv,A),j(Fg,b),j(_h,y),j(kv,w),qe(L))if(L.length){const q=i.exposed||(i.exposed={});L.forEach(G=>{Object.defineProperty(q,G,{get:()=>t[G],set:le=>t[G]=le})})}else i.exposed||(i.exposed={});S&&i.render===vi&&(i.render=S),W!=null&&(i.inheritAttrs=W),O&&(i.components=O),U&&(i.directives=U)}function $v(i,e,t=vi,n=!1){qe(i)&&(i=df(i));for(const r in i){const s=i[r];let o;xt(s)?"default"in s?o=Oi(s.from||r,s.default,!0):o=Oi(s.from||r):o=Oi(s),nn(o)&&n?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function md(i,e,t){ri(qe(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function kg(i,e,t,n){const r=n.includes(".")?Ag(t,n):()=>t[n];if(Rt(i)){const s=e[i];je(s)&&ql(r,s)}else if(je(i))ql(r,i.bind(t));else if(xt(i))if(qe(i))i.forEach(s=>kg(s,e,t,n));else{const s=je(i.handler)?i.handler.bind(t):e[i.handler];je(s)&&ql(r,s,i)}}function yh(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=i.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!t&&!n?l=e:(l={},r.length&&r.forEach(c=>cc(l,c,o,!0)),cc(l,e,o)),xt(e)&&s.set(e,l),l}function cc(i,e,t,n=!1){const{mixins:r,extends:s}=e;s&&cc(i,s,t,!0),r&&r.forEach(o=>cc(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=Yv[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const Yv={data:gd,props:ns,emits:ns,methods:ns,computed:ns,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:ns,directives:ns,watch:Kv,provide:gd,inject:jv};function gd(i,e){return e?i?function(){return Kt(je(i)?i.call(this,this):i,je(e)?e.call(this,this):e)}:e:i}function jv(i,e){return ns(df(i),df(e))}function df(i){if(qe(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function un(i,e){return i?[...new Set([].concat(i,e))]:e}function ns(i,e){return i?Kt(Kt(Object.create(null),i),e):e}function Kv(i,e){if(!i)return e;if(!e)return i;const t=Kt(Object.create(null),i);for(const n in e)t[n]=un(i[n],e[n]);return t}function Zv(i,e,t,n=!1){const r={},s={};oc(s,Nc,1),i.propsDefaults=Object.create(null),Bg(i,e,r,s);for(const o in i.propsOptions[0])o in r||(r[o]=void 0);t?i.props=n?r:pv(r):i.type.props?i.props=r:i.props=s,i.attrs=s}function Jv(i,e,t,n){const{props:r,attrs:s,vnode:{patchFlag:o}}=i,a=ot(r),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const u=i.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Lc(i.emitsOptions,f))continue;const p=e[f];if(l)if(rt(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=Bi(f);r[g]=pf(l,a,g,p,i,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Bg(i,e,r,s)&&(c=!0);let u;for(const h in a)(!e||!rt(e,h)&&((u=No(h))===h||!rt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(r[h]=pf(l,a,h,void 0,i,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!rt(e,h))&&(delete s[h],c=!0)}c&&or(i,"set","$attrs")}function Bg(i,e,t,n){const[r,s]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Wl(l))continue;const c=e[l];let u;r&&rt(r,u=Bi(l))?!s||!s.includes(u)?t[u]=c:(a||(a={}))[u]=c:Lc(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(s){const l=ot(t),c=a||bt;for(let u=0;u<s.length;u++){const h=s[u];t[h]=pf(r,l,h,c[h],i,!rt(c,h))}}return o}function pf(i,e,t,n,r,s){const o=i[t];if(o!=null){const a=rt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&je(l)){const{propsDefaults:c}=r;t in c?n=c[t]:(bo(r),n=c[t]=l.call(null,e),gs())}else n=l}o[0]&&(s&&!a?n=!1:o[1]&&(n===""||n===No(t))&&(n=!0))}return n}function Gg(i,e,t=!1){const n=e.propsCache,r=n.get(i);if(r)return r;const s=i.props,o={},a=[];let l=!1;if(!je(i)){const u=h=>{l=!0;const[f,p]=Gg(h,e,!0);Kt(o,f),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),i.extends&&u(i.extends),i.mixins&&i.mixins.forEach(u)}if(!s&&!l)return xt(i)&&n.set(i,oo),oo;if(qe(s))for(let u=0;u<s.length;u++){const h=Bi(s[u]);_d(h)&&(o[h]=bt)}else if(s)for(const u in s){const h=Bi(u);if(_d(h)){const f=s[u],p=o[h]=qe(f)||je(f)?{type:f}:Object.assign({},f);if(p){const g=yd(Boolean,p.type),d=yd(String,p.type);p[0]=g>-1,p[1]=d<0||g<d,(g>-1||rt(p,"default"))&&a.push(h)}}}const c=[o,a];return xt(i)&&n.set(i,c),c}function _d(i){return i[0]!=="$"}function xd(i){const e=i&&i.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:i===null?"null":""}function vd(i,e){return xd(i)===xd(e)}function yd(i,e){return qe(e)?e.findIndex(t=>vd(t,i)):je(e)&&vd(e,i)?0:-1}const Vg=i=>i[0]==="_"||i==="$stable",bh=i=>qe(i)?i.map(Ci):[Ci(i)],Qv=(i,e,t)=>{if(e._n)return e;const n=Gi((...r)=>bh(e(...r)),t);return n._c=!1,n},Hg=(i,e,t)=>{const n=i._ctx;for(const r in i){if(Vg(r))continue;const s=i[r];if(je(s))e[r]=Qv(r,s,n);else if(s!=null){const o=bh(s);e[r]=()=>o}}},Wg=(i,e)=>{const t=bh(e);i.slots.default=()=>t},ey=(i,e)=>{if(i.vnode.shapeFlag&32){const t=e._;t?(i.slots=ot(e),oc(e,"_",t)):Hg(e,i.slots={})}else i.slots={},e&&Wg(i,e);oc(i.slots,Nc,1)},ty=(i,e,t)=>{const{vnode:n,slots:r}=i;let s=!0,o=bt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Kt(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Hg(e,r)),o=e}else e&&(Wg(i,e),o={default:1});if(s)for(const a in r)!Vg(a)&&!(a in o)&&delete r[a]};function Xg(){return{app:null,config:{isNativeTag:Rx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ny=0;function iy(i,e){return function(n,r=null){je(n)||(n=Object.assign({},n)),r!=null&&!xt(r)&&(r=null);const s=Xg(),o=new Set;let a=!1;const l=s.app={_uid:ny++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:wy,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&je(c.install)?(o.add(c),c.install(l,...u)):je(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,h){if(!a){const f=zt(n,r);return f.appContext=s,u&&e?e(f,c):i(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Sh(f.component)||f.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function mf(i,e,t,n,r=!1){if(qe(i)){i.forEach((f,p)=>mf(f,e&&(qe(e)?e[p]:e),t,n,r));return}if(ua(n)&&!r)return;const s=n.shapeFlag&4?Sh(n.component)||n.component.proxy:n.el,o=r?null:s,{i:a,r:l}=i,c=e&&e.r,u=a.refs===bt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Rt(c)?(u[c]=null,rt(h,c)&&(h[c]=null)):nn(c)&&(c.value=null)),je(l))Dr(l,a,12,[o,u]);else{const f=Rt(l),p=nn(l);if(f||p){const g=()=>{if(i.f){const d=f?rt(h,l)?h[l]:u[l]:l.value;r?qe(d)&&nh(d,s):qe(d)?d.includes(s)||d.push(s):f?(u[l]=[s],rt(h,l)&&(h[l]=u[l])):(l.value=[s],i.k&&(u[i.k]=l.value))}else f?(u[l]=o,rt(h,l)&&(h[l]=o)):p&&(l.value=o,i.k&&(u[i.k]=o))};o?(g.id=-1,bn(g,t)):g()}}}const bn=Lv;function ry(i){return sy(i)}function sy(i,e){const t=Ux();t.__VUE__=!0;const{insert:n,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:p=vi,insertStaticContent:g}=i,d=(T,I,$,Q=null,se=null,F=null,de=!1,re=null,xe=!!I.dynamicChildren)=>{if(T===I)return;T&&!ls(T,I)&&(Q=K(T),H(T,se,F,!0),T=null),I.patchFlag===-2&&(xe=!1,I.dynamicChildren=null);const{type:ce,ref:E,shapeFlag:M}=I;switch(ce){case Fc:m(T,I,$,Q);break;case Fi:_(T,I,$,Q);break;case tu:T==null&&b(I,$,Q,de);break;case Sn:O(T,I,$,Q,se,F,de,re,xe);break;default:M&1?S(T,I,$,Q,se,F,de,re,xe):M&6?U(T,I,$,Q,se,F,de,re,xe):(M&64||M&128)&&ce.process(T,I,$,Q,se,F,de,re,xe,ge)}E!=null&&se&&mf(E,T&&T.ref,F,I||T,!I)},m=(T,I,$,Q)=>{if(T==null)n(I.el=a(I.children),$,Q);else{const se=I.el=T.el;I.children!==T.children&&c(se,I.children)}},_=(T,I,$,Q)=>{T==null?n(I.el=l(I.children||""),$,Q):I.el=T.el},b=(T,I,$,Q)=>{[T.el,T.anchor]=g(T.children,I,$,Q,T.el,T.anchor)},v=({el:T,anchor:I},$,Q)=>{let se;for(;T&&T!==I;)se=f(T),n(T,$,Q),T=se;n(I,$,Q)},y=({el:T,anchor:I})=>{let $;for(;T&&T!==I;)$=f(T),r(T),T=$;r(I)},S=(T,I,$,Q,se,F,de,re,xe)=>{de=de||I.type==="svg",T==null?P(I,$,Q,se,F,de,re,xe):w(T,I,se,F,de,re,xe)},P=(T,I,$,Q,se,F,de,re)=>{let xe,ce;const{type:E,props:M,shapeFlag:k,transition:ie,dirs:ee}=T;if(xe=T.el=o(T.type,F,M&&M.is,M),k&8?u(xe,T.children):k&16&&x(T.children,xe,null,Q,se,F&&E!=="foreignObject",de,re),ee&&$r(T,null,Q,"created"),A(xe,T,T.scopeId,de,Q),M){for(const ve in M)ve!=="value"&&!Wl(ve)&&s(xe,ve,null,M[ve],F,T.children,Q,se,Y);"value"in M&&s(xe,"value",null,M.value),(ce=M.onVnodeBeforeMount)&&Si(ce,Q,T)}ee&&$r(T,null,Q,"beforeMount");const fe=(!se||se&&!se.pendingBranch)&&ie&&!ie.persisted;fe&&ie.beforeEnter(xe),n(xe,I,$),((ce=M&&M.onVnodeMounted)||fe||ee)&&bn(()=>{ce&&Si(ce,Q,T),fe&&ie.enter(xe),ee&&$r(T,null,Q,"mounted")},se)},A=(T,I,$,Q,se)=>{if($&&p(T,$),Q)for(let F=0;F<Q.length;F++)p(T,Q[F]);if(se){let F=se.subTree;if(I===F){const de=se.vnode;A(T,de,de.scopeId,de.slotScopeIds,se.parent)}}},x=(T,I,$,Q,se,F,de,re,xe=0)=>{for(let ce=xe;ce<T.length;ce++){const E=T[ce]=re?yr(T[ce]):Ci(T[ce]);d(null,E,I,$,Q,se,F,de,re)}},w=(T,I,$,Q,se,F,de)=>{const re=I.el=T.el;let{patchFlag:xe,dynamicChildren:ce,dirs:E}=I;xe|=T.patchFlag&16;const M=T.props||bt,k=I.props||bt;let ie;$&&Yr($,!1),(ie=k.onVnodeBeforeUpdate)&&Si(ie,$,I,T),E&&$r(I,T,$,"beforeUpdate"),$&&Yr($,!0);const ee=se&&I.type!=="foreignObject";if(ce?L(T.dynamicChildren,ce,re,$,Q,ee,F):de||G(T,I,re,null,$,Q,ee,F,!1),xe>0){if(xe&16)W(re,I,M,k,$,Q,se);else if(xe&2&&M.class!==k.class&&s(re,"class",null,k.class,se),xe&4&&s(re,"style",M.style,k.style,se),xe&8){const fe=I.dynamicProps;for(let ve=0;ve<fe.length;ve++){const ye=fe[ve],ne=M[ye],Le=k[ye];(Le!==ne||ye==="value")&&s(re,ye,ne,Le,se,T.children,$,Q,Y)}}xe&1&&T.children!==I.children&&u(re,I.children)}else!de&&ce==null&&W(re,I,M,k,$,Q,se);((ie=k.onVnodeUpdated)||E)&&bn(()=>{ie&&Si(ie,$,I,T),E&&$r(I,T,$,"updated")},Q)},L=(T,I,$,Q,se,F,de)=>{for(let re=0;re<I.length;re++){const xe=T[re],ce=I[re],E=xe.el&&(xe.type===Sn||!ls(xe,ce)||xe.shapeFlag&70)?h(xe.el):$;d(xe,ce,E,null,Q,se,F,de,!0)}},W=(T,I,$,Q,se,F,de)=>{if($!==Q){if($!==bt)for(const re in $)!Wl(re)&&!(re in Q)&&s(T,re,$[re],null,de,I.children,se,F,Y);for(const re in Q){if(Wl(re))continue;const xe=Q[re],ce=$[re];xe!==ce&&re!=="value"&&s(T,re,ce,xe,de,I.children,se,F,Y)}"value"in Q&&s(T,"value",$.value,Q.value)}},O=(T,I,$,Q,se,F,de,re,xe)=>{const ce=I.el=T?T.el:a(""),E=I.anchor=T?T.anchor:a("");let{patchFlag:M,dynamicChildren:k,slotScopeIds:ie}=I;ie&&(re=re?re.concat(ie):ie),T==null?(n(ce,$,Q),n(E,$,Q),x(I.children,$,E,se,F,de,re,xe)):M>0&&M&64&&k&&T.dynamicChildren?(L(T.dynamicChildren,k,$,se,F,de,re),(I.key!=null||se&&I===se.subTree)&&qg(T,I,!0)):G(T,I,$,E,se,F,de,re,xe)},U=(T,I,$,Q,se,F,de,re,xe)=>{I.slotScopeIds=re,T==null?I.shapeFlag&512?se.ctx.activate(I,$,Q,de,xe):N(I,$,Q,se,F,de,xe):X(T,I,xe)},N=(T,I,$,Q,se,F,de)=>{const re=T.component=py(T,Q,se);if(Ic(T)&&(re.ctx.renderer=ge),gy(re),re.asyncDep){if(se&&se.registerDep(re,j),!T.el){const xe=re.subTree=zt(Fi);_(null,xe,I,$)}return}j(re,T,I,$,se,F,de)},X=(T,I,$)=>{const Q=I.component=T.component;if(Av(T,I,$))if(Q.asyncDep&&!Q.asyncResolved){q(Q,I,$);return}else Q.next=I,Mv(Q.update),Q.update();else I.el=T.el,Q.vnode=I},j=(T,I,$,Q,se,F,de)=>{const re=()=>{if(T.isMounted){let{next:E,bu:M,u:k,parent:ie,vnode:ee}=T,fe=E,ve;Yr(T,!1),E?(E.el=ee.el,q(T,E,de)):E=ee,M&&Zc(M),(ve=E.props&&E.props.onVnodeBeforeUpdate)&&Si(ve,ie,E,ee),Yr(T,!0);const ye=Jc(T),ne=T.subTree;T.subTree=ye,d(ne,ye,h(ne.el),K(ne),T,se,F),E.el=ye.el,fe===null&&Pv(T,ye.el),k&&bn(k,se),(ve=E.props&&E.props.onVnodeUpdated)&&bn(()=>Si(ve,ie,E,ee),se)}else{let E;const{el:M,props:k}=I,{bm:ie,m:ee,parent:fe}=T,ve=ua(I);if(Yr(T,!1),ie&&Zc(ie),!ve&&(E=k&&k.onVnodeBeforeMount)&&Si(E,fe,I),Yr(T,!0),M&&Me){const ye=()=>{T.subTree=Jc(T),Me(M,T.subTree,T,se,null)};ve?I.type.__asyncLoader().then(()=>!T.isUnmounted&&ye()):ye()}else{const ye=T.subTree=Jc(T);d(null,ye,$,Q,T,se,F),I.el=ye.el}if(ee&&bn(ee,se),!ve&&(E=k&&k.onVnodeMounted)){const ye=I;bn(()=>Si(E,fe,ye),se)}(I.shapeFlag&256||fe&&ua(fe.vnode)&&fe.vnode.shapeFlag&256)&&T.a&&bn(T.a,se),T.isMounted=!0,I=$=Q=null}},xe=T.effect=new oh(re,()=>ph(ce),T.scope),ce=T.update=()=>xe.run();ce.id=T.uid,Yr(T,!0),ce()},q=(T,I,$)=>{I.component=T;const Q=T.vnode.props;T.vnode=I,T.next=null,Jv(T,I.props,Q,$),ty(T,I.children,$),zo(),ud(),Uo()},G=(T,I,$,Q,se,F,de,re,xe=!1)=>{const ce=T&&T.children,E=T?T.shapeFlag:0,M=I.children,{patchFlag:k,shapeFlag:ie}=I;if(k>0){if(k&128){D(ce,M,$,Q,se,F,de,re,xe);return}else if(k&256){le(ce,M,$,Q,se,F,de,re,xe);return}}ie&8?(E&16&&Y(ce,se,F),M!==ce&&u($,M)):E&16?ie&16?D(ce,M,$,Q,se,F,de,re,xe):Y(ce,se,F,!0):(E&8&&u($,""),ie&16&&x(M,$,Q,se,F,de,re,xe))},le=(T,I,$,Q,se,F,de,re,xe)=>{T=T||oo,I=I||oo;const ce=T.length,E=I.length,M=Math.min(ce,E);let k;for(k=0;k<M;k++){const ie=I[k]=xe?yr(I[k]):Ci(I[k]);d(T[k],ie,$,null,se,F,de,re,xe)}ce>E?Y(T,se,F,!0,!1,M):x(I,$,Q,se,F,de,re,xe,M)},D=(T,I,$,Q,se,F,de,re,xe)=>{let ce=0;const E=I.length;let M=T.length-1,k=E-1;for(;ce<=M&&ce<=k;){const ie=T[ce],ee=I[ce]=xe?yr(I[ce]):Ci(I[ce]);if(ls(ie,ee))d(ie,ee,$,null,se,F,de,re,xe);else break;ce++}for(;ce<=M&&ce<=k;){const ie=T[M],ee=I[k]=xe?yr(I[k]):Ci(I[k]);if(ls(ie,ee))d(ie,ee,$,null,se,F,de,re,xe);else break;M--,k--}if(ce>M){if(ce<=k){const ie=k+1,ee=ie<E?I[ie].el:Q;for(;ce<=k;)d(null,I[ce]=xe?yr(I[ce]):Ci(I[ce]),$,ee,se,F,de,re,xe),ce++}}else if(ce>k)for(;ce<=M;)H(T[ce],se,F,!0),ce++;else{const ie=ce,ee=ce,fe=new Map;for(ce=ee;ce<=k;ce++){const Ce=I[ce]=xe?yr(I[ce]):Ci(I[ce]);Ce.key!=null&&fe.set(Ce.key,ce)}let ve,ye=0;const ne=k-ee+1;let Le=!1,Re=0;const Oe=new Array(ne);for(ce=0;ce<ne;ce++)Oe[ce]=0;for(ce=ie;ce<=M;ce++){const Ce=T[ce];if(ye>=ne){H(Ce,se,F,!0);continue}let He;if(Ce.key!=null)He=fe.get(Ce.key);else for(ve=ee;ve<=k;ve++)if(Oe[ve-ee]===0&&ls(Ce,I[ve])){He=ve;break}He===void 0?H(Ce,se,F,!0):(Oe[He-ee]=ce+1,He>=Re?Re=He:Le=!0,d(Ce,I[He],$,null,se,F,de,re,xe),ye++)}const Ne=Le?oy(Oe):oo;for(ve=Ne.length-1,ce=ne-1;ce>=0;ce--){const Ce=ee+ce,He=I[Ce],De=Ce+1<E?I[Ce+1].el:Q;Oe[ce]===0?d(null,He,$,De,se,F,de,re,xe):Le&&(ve<0||ce!==Ne[ve]?be(He,$,De,2):ve--)}}},be=(T,I,$,Q,se=null)=>{const{el:F,type:de,transition:re,children:xe,shapeFlag:ce}=T;if(ce&6){be(T.component.subTree,I,$,Q);return}if(ce&128){T.suspense.move(I,$,Q);return}if(ce&64){de.move(T,I,$,ge);return}if(de===Sn){n(F,I,$);for(let M=0;M<xe.length;M++)be(xe[M],I,$,Q);n(T.anchor,I,$);return}if(de===tu){v(T,I,$);return}if(Q!==2&&ce&1&&re)if(Q===0)re.beforeEnter(F),n(F,I,$),bn(()=>re.enter(F),se);else{const{leave:M,delayLeave:k,afterLeave:ie}=re,ee=()=>n(F,I,$),fe=()=>{M(F,()=>{ee(),ie&&ie()})};k?k(F,ee,fe):fe()}else n(F,I,$)},H=(T,I,$,Q=!1,se=!1)=>{const{type:F,props:de,ref:re,children:xe,dynamicChildren:ce,shapeFlag:E,patchFlag:M,dirs:k}=T;if(re!=null&&mf(re,null,$,T,!0),E&256){I.ctx.deactivate(T);return}const ie=E&1&&k,ee=!ua(T);let fe;if(ee&&(fe=de&&de.onVnodeBeforeUnmount)&&Si(fe,I,T),E&6)R(T.component,$,Q);else{if(E&128){T.suspense.unmount($,Q);return}ie&&$r(T,null,I,"beforeUnmount"),E&64?T.type.remove(T,I,$,se,ge,Q):ce&&(F!==Sn||M>0&&M&64)?Y(ce,I,$,!1,!0):(F===Sn&&M&384||!se&&E&16)&&Y(xe,I,$),Q&&ue(T)}(ee&&(fe=de&&de.onVnodeUnmounted)||ie)&&bn(()=>{fe&&Si(fe,I,T),ie&&$r(T,null,I,"unmounted")},$)},ue=T=>{const{type:I,el:$,anchor:Q,transition:se}=T;if(I===Sn){pe($,Q);return}if(I===tu){y(T);return}const F=()=>{r($),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(T.shapeFlag&1&&se&&!se.persisted){const{leave:de,delayLeave:re}=se,xe=()=>de($,F);re?re(T.el,F,xe):xe()}else F()},pe=(T,I)=>{let $;for(;T!==I;)$=f(T),r(T),T=$;r(I)},R=(T,I,$)=>{const{bum:Q,scope:se,update:F,subTree:de,um:re}=T;Q&&Zc(Q),se.stop(),F&&(F.active=!1,H(de,T,I,$)),re&&bn(re,I),bn(()=>{T.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},Y=(T,I,$,Q=!1,se=!1,F=0)=>{for(let de=F;de<T.length;de++)H(T[de],I,$,Q,se)},K=T=>T.shapeFlag&6?K(T.component.subTree):T.shapeFlag&128?T.suspense.next():f(T.anchor||T.el),ae=(T,I,$)=>{T==null?I._vnode&&H(I._vnode,null,null,!0):d(I._vnode||null,T,I,null,null,null,$),ud(),wg(),I._vnode=T},ge={p:d,um:H,m:be,r:ue,mt:N,mc:x,pc:G,pbc:L,n:K,o:i};let Se,Me;return e&&([Se,Me]=e(ge)),{render:ae,hydrate:Se,createApp:iy(ae,Se)}}function Yr({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function qg(i,e,t=!1){const n=i.children,r=e.children;if(qe(n)&&qe(r))for(let s=0;s<n.length;s++){const o=n[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=yr(r[s]),a.el=o.el),t||qg(o,a)),a.type===Fc&&(a.el=o.el)}}function oy(i){const e=i.slice(),t=[0];let n,r,s,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(r=t[t.length-1],i[r]<c){e[n]=r,t.push(n);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,i[t[a]]<c?s=a+1:o=a;c<i[t[s]]&&(s>0&&(e[n]=t[s-1]),t[s]=n)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const ay=i=>i.__isTeleport,Sn=Symbol(void 0),Fc=Symbol(void 0),Fi=Symbol(void 0),tu=Symbol(void 0),ha=[];let xi=null;function xn(i=!1){ha.push(xi=i?null:[])}function ly(){ha.pop(),xi=ha[ha.length-1]||null}let Ra=1;function bd(i){Ra+=i}function $g(i){return i.dynamicChildren=Ra>0?xi||oo:null,ly(),Ra>0&&xi&&xi.push(i),i}function Mr(i,e,t,n,r,s){return $g(me(i,e,t,n,r,s,!0))}function Ls(i,e,t,n,r){return $g(zt(i,e,t,n,r,!0))}function uc(i){return i?i.__v_isVNode===!0:!1}function ls(i,e){return i.type===e.type&&i.key===e.key}const Nc="__vInternal",Yg=({key:i})=>i??null,$l=({ref:i,ref_key:e,ref_for:t})=>i!=null?Rt(i)||nn(i)||je(i)?{i:rn,r:i,k:e,f:!!t}:i:null;function me(i,e=null,t=null,n=0,r=null,s=i===Sn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&Yg(e),ref:e&&$l(e),scopeId:Dc,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:rn};return a?(Mh(l,t),s&128&&i.normalize(l)):t&&(l.shapeFlag|=Rt(t)?8:16),Ra>0&&!o&&xi&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&xi.push(l),l}const zt=cy;function cy(i,e=null,t=null,n=0,r=null,s=!1){if((!i||i===Ng)&&(i=Fi),uc(i)){const a=kr(i,e,!0);return t&&Mh(a,t),Ra>0&&!s&&xi&&(a.shapeFlag&6?xi[xi.indexOf(i)]=a:xi.push(a)),a.patchFlag|=-2,a}if(by(i)&&(i=i.__vccOpts),e){e=uy(e);let{class:a,style:l}=e;a&&!Rt(a)&&(e.class=eh(a)),xt(l)&&(pg(l)&&!qe(l)&&(l=Kt({},l)),e.style=Qf(l))}const o=Rt(i)?1:Rv(i)?128:ay(i)?64:xt(i)?4:je(i)?2:0;return me(i,e,t,n,r,o,s,!0)}function uy(i){return i?pg(i)||Nc in i?Kt({},i):i:null}function kr(i,e,t=!1){const{props:n,ref:r,patchFlag:s,children:o}=i,a=e?fy(n||{},e):n;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:a,key:a&&Yg(a),ref:e&&e.ref?t&&r?qe(r)?r.concat($l(e)):[r,$l(e)]:$l(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:o,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Sn?s===-1?16:s|16:s,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&kr(i.ssContent),ssFallback:i.ssFallback&&kr(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce}}function ze(i=" ",e=0){return zt(Fc,null,i,e)}function Ci(i){return i==null||typeof i=="boolean"?zt(Fi):qe(i)?zt(Sn,null,i.slice()):typeof i=="object"?yr(i):zt(Fc,null,String(i))}function yr(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:kr(i)}function Mh(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(qe(e))t=16;else if(typeof e=="object")if(n&65){const r=e.default;r&&(r._c&&(r._d=!1),Mh(i,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Nc in e)?e._ctx=rn:r===3&&rn&&(rn.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:rn},t=32):(e=String(e),n&64?(t=16,e=[ze(e)]):t=8);i.children=e,i.shapeFlag|=t}function fy(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const r in n)if(r==="class")e.class!==n.class&&(e.class=eh([e.class,n.class]));else if(r==="style")e.style=Qf([e.style,n.style]);else if(Tc(r)){const s=e[r],o=n[r];o&&s!==o&&!(qe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=n[r])}return e}function Si(i,e,t,n=null){ri(i,e,7,[t,n])}const hy=Xg();let dy=0;function py(i,e,t){const n=i.type,r=(e?e.appContext:i.appContext)||hy,s={uid:dy++,vnode:i,type:n,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new kx(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gg(n,r),emitsOptions:Eg(n,r),emit:null,emitted:null,propsDefaults:bt,inheritAttrs:n.inheritAttrs,ctx:bt,data:bt,props:bt,attrs:bt,slots:bt,refs:bt,setupState:bt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Tv.bind(null,s),i.ce&&i.ce(s),s}let Pt=null;const my=()=>Pt||rn,bo=i=>{Pt=i,i.scope.on()},gs=()=>{Pt&&Pt.scope.off(),Pt=null};function jg(i){return i.vnode.shapeFlag&4}let La=!1;function gy(i,e=!1){La=e;const{props:t,children:n}=i.vnode,r=jg(i);Zv(i,t,r,e),ey(i,n);const s=r?_y(i,e):void 0;return La=!1,s}function _y(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=mg(new Proxy(i.ctx,Xv));const{setup:n}=t;if(n){const r=i.setupContext=n.length>1?vy(i):null;bo(i),zo();const s=Dr(n,i,0,[i.props,r]);if(Uo(),gs(),eg(s)){if(s.then(gs,gs),e)return s.then(o=>{Md(i,o,e)}).catch(o=>{Rc(o,i,0)});i.asyncDep=s}else Md(i,s,e)}else Kg(i,e)}function Md(i,e,t){je(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:xt(e)&&(i.setupState=vg(e)),Kg(i,t)}let Sd;function Kg(i,e,t){const n=i.type;if(!i.render){if(!e&&Sd&&!n.render){const r=n.template||yh(i).template;if(r){const{isCustomElement:s,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=Kt(Kt({isCustomElement:s,delimiters:a},o),l);n.render=Sd(r,c)}}i.render=n.render||vi}bo(i),zo(),qv(i),Uo(),gs()}function xy(i){return new Proxy(i.attrs,{get(e,t){return Pn(i,"get","$attrs"),e[t]}})}function vy(i){const e=n=>{i.exposed=n||{}};let t;return{get attrs(){return t||(t=xy(i))},slots:i.slots,emit:i.emit,expose:e}}function Sh(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(vg(mg(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in fa)return fa[t](i)},has(e,t){return t in e||t in fa}}))}function yy(i,e=!0){return je(i)?i.displayName||i.name:i.name||e&&i.__name}function by(i){return je(i)&&"__vccOpts"in i}const ei=(i,e)=>vv(i,e,La);function wh(i,e,t){const n=arguments.length;return n===2?xt(e)&&!qe(e)?uc(e)?zt(i,null,[e]):zt(i,e):zt(i,null,e):(n>3?t=Array.prototype.slice.call(arguments,2):n===3&&uc(t)&&(t=[t]),zt(i,e,t))}const My=Symbol(""),Sy=()=>Oi(My),wy="3.2.47",Ty="http://www.w3.org/2000/svg",cs=typeof document<"u"?document:null,wd=cs&&cs.createElement("template"),Ey={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const r=e?cs.createElementNS(Ty,i):cs.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:i=>cs.createTextNode(i),createComment:i=>cs.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>cs.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{wd.innerHTML=n?`<svg>${i}</svg>`:i;const a=wd.content;if(n){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Cy(i,e,t){const n=i._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}function Ay(i,e,t){const n=i.style,r=Rt(t);if(t&&!r){if(e&&!Rt(e))for(const s in e)t[s]==null&&gf(n,s,"");for(const s in t)gf(n,s,t[s])}else{const s=n.display;r?e!==t&&(n.cssText=t):e&&i.removeAttribute("style"),"_vod"in i&&(n.display=s)}}const Td=/\s*!important$/;function gf(i,e,t){if(qe(t))t.forEach(n=>gf(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=Py(i,e);Td.test(t)?i.setProperty(No(n),t.replace(Td,""),"important"):i[n]=t}}const Ed=["Webkit","Moz","ms"],nu={};function Py(i,e){const t=nu[e];if(t)return t;let n=Bi(e);if(n!=="filter"&&n in i)return nu[e]=n;n=Ac(n);for(let r=0;r<Ed.length;r++){const s=Ed[r]+n;if(s in i)return nu[e]=s}return e}const Cd="http://www.w3.org/1999/xlink";function Ry(i,e,t,n,r){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(Cd,e.slice(6,e.length)):i.setAttributeNS(Cd,e,t);else{const s=Ax(e);t==null||s&&!Zm(t)?i.removeAttribute(e):i.setAttribute(e,s?"":t)}}function Ly(i,e,t,n,r,s,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,r,s),i[e]=t??"";return}if(e==="value"&&i.tagName!=="PROGRESS"&&!i.tagName.includes("-")){i._value=t;const l=t??"";(i.value!==l||i.tagName==="OPTION")&&(i.value=l),t==null&&i.removeAttribute(e);return}let a=!1;if(t===""||t==null){const l=typeof i[e];l==="boolean"?t=Zm(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{i[e]=t}catch{}a&&i.removeAttribute(e)}function Dy(i,e,t,n){i.addEventListener(e,t,n)}function Iy(i,e,t,n){i.removeEventListener(e,t,n)}function Oy(i,e,t,n,r=null){const s=i._vei||(i._vei={}),o=s[e];if(n&&o)o.value=n;else{const[a,l]=Fy(e);if(n){const c=s[e]=Uy(n,r);Dy(i,a,c,l)}else o&&(Iy(i,a,o,l),s[e]=void 0)}}const Ad=/(?:Once|Passive|Capture)$/;function Fy(i){let e;if(Ad.test(i)){e={};let n;for(;n=i.match(Ad);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):No(i.slice(2)),e]}let iu=0;const Ny=Promise.resolve(),zy=()=>iu||(Ny.then(()=>iu=0),iu=Date.now());function Uy(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;ri(ky(n,t.value),e,5,[n])};return t.value=i,t.attached=zy(),t}function ky(i,e){if(qe(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>r=>!r._stopped&&n&&n(r))}else return e}const Pd=/^on[a-z]/,By=(i,e,t,n,r=!1,s,o,a,l)=>{e==="class"?Cy(i,n,r):e==="style"?Ay(i,t,n):Tc(e)?th(e)||Oy(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Gy(i,e,n,r))?Ly(i,e,n,s,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),Ry(i,e,n,r))};function Gy(i,e,t,n){return n?!!(e==="innerHTML"||e==="textContent"||e in i&&Pd.test(e)&&je(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA"||Pd.test(e)&&Rt(t)?!1:e in i}const hr="transition",Ho="animation",Th=(i,{slots:e})=>wh(Pg,Vy(i),e);Th.displayName="Transition";const Zg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Th.props=Kt({},Pg.props,Zg);const jr=(i,e=[])=>{qe(i)?i.forEach(t=>t(...e)):i&&i(...e)},Rd=i=>i?qe(i)?i.some(e=>e.length>1):i.length>1:!1;function Vy(i){const e={};for(const O in i)O in Zg||(e[O]=i[O]);if(i.css===!1)return e;const{name:t="v",type:n,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:o=`${t}-enter-active`,enterToClass:a=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=i,g=Hy(r),d=g&&g[0],m=g&&g[1],{onBeforeEnter:_,onEnter:b,onEnterCancelled:v,onLeave:y,onLeaveCancelled:S,onBeforeAppear:P=_,onAppear:A=b,onAppearCancelled:x=v}=e,w=(O,U,N)=>{Kr(O,U?u:a),Kr(O,U?c:o),N&&N()},L=(O,U)=>{O._isLeaving=!1,Kr(O,h),Kr(O,p),Kr(O,f),U&&U()},W=O=>(U,N)=>{const X=O?A:b,j=()=>w(U,O,N);jr(X,[U,j]),Ld(()=>{Kr(U,O?l:s),dr(U,O?u:a),Rd(X)||Dd(U,n,d,j)})};return Kt(e,{onBeforeEnter(O){jr(_,[O]),dr(O,s),dr(O,o)},onBeforeAppear(O){jr(P,[O]),dr(O,l),dr(O,c)},onEnter:W(!1),onAppear:W(!0),onLeave(O,U){O._isLeaving=!0;const N=()=>L(O,U);dr(O,h),qy(),dr(O,f),Ld(()=>{O._isLeaving&&(Kr(O,h),dr(O,p),Rd(y)||Dd(O,n,m,N))}),jr(y,[O,N])},onEnterCancelled(O){w(O,!1),jr(v,[O])},onAppearCancelled(O){w(O,!0),jr(x,[O])},onLeaveCancelled(O){L(O),jr(S,[O])}})}function Hy(i){if(i==null)return null;if(xt(i))return[ru(i.enter),ru(i.leave)];{const e=ru(i);return[e,e]}}function ru(i){return zx(i)}function dr(i,e){e.split(/\s+/).forEach(t=>t&&i.classList.add(t)),(i._vtc||(i._vtc=new Set)).add(e)}function Kr(i,e){e.split(/\s+/).forEach(n=>n&&i.classList.remove(n));const{_vtc:t}=i;t&&(t.delete(e),t.size||(i._vtc=void 0))}function Ld(i){requestAnimationFrame(()=>{requestAnimationFrame(i)})}let Wy=0;function Dd(i,e,t,n){const r=i._endId=++Wy,s=()=>{r===i._endId&&n()};if(t)return setTimeout(s,t);const{type:o,timeout:a,propCount:l}=Xy(i,e);if(!o)return n();const c=o+"end";let u=0;const h=()=>{i.removeEventListener(c,f),s()},f=p=>{p.target===i&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),i.addEventListener(c,f)}function Xy(i,e){const t=window.getComputedStyle(i),n=g=>(t[g]||"").split(", "),r=n(`${hr}Delay`),s=n(`${hr}Duration`),o=Id(r,s),a=n(`${Ho}Delay`),l=n(`${Ho}Duration`),c=Id(a,l);let u=null,h=0,f=0;e===hr?o>0&&(u=hr,h=o,f=s.length):e===Ho?c>0&&(u=Ho,h=c,f=l.length):(h=Math.max(o,c),u=h>0?o>c?hr:Ho:null,f=u?u===hr?s.length:l.length:0);const p=u===hr&&/\b(transform|all)(,|$)/.test(n(`${hr}Property`).toString());return{type:u,timeout:h,propCount:f,hasTransform:p}}function Id(i,e){for(;i.length<e.length;)i=i.concat(i);return Math.max(...e.map((t,n)=>Od(t)+Od(i[n])))}function Od(i){return Number(i.slice(0,-1).replace(",","."))*1e3}function qy(){return document.body.offsetHeight}const $y=Kt({patchProp:By},Ey);let Fd;function Yy(){return Fd||(Fd=ry($y))}const jy=(...i)=>{const e=Yy().createApp(...i),{mount:t}=e;return e.mount=n=>{const r=Ky(n);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Ky(i){return Rt(i)?document.querySelector(i):i}const $a=(i,e)=>{const t=i.__vccOpts||i;for(const[n,r]of e)t[n]=r;return t},Zy={},Jy={id:"content"};function Qy(i,e){const t=vh("router-view");return xn(),Mr("div",Jy,[zt(t,null,{default:Gi(({Component:n})=>[zt(Th,{mode:"out-in"},{default:Gi(()=>[(xn(),Ls(Hv(n)))]),_:2},1024)]),_:1})])}const eb=$a(Zy,[["render",Qy],["__scopeId","data-v-5cea27d4"]]);/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ks=typeof window<"u";function tb(i){return i.__esModule||i[Symbol.toStringTag]==="Module"}const lt=Object.assign;function su(i,e){const t={};for(const n in e){const r=e[n];t[n]=Mi(r)?r.map(i):i(r)}return t}const da=()=>{},Mi=Array.isArray,nb=/\/$/,ib=i=>i.replace(nb,"");function ou(i,e,t="/"){let n,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(n=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=i(s)),a>-1&&(n=n||e.slice(0,a),o=e.slice(a,e.length)),n=ab(n??e,t),{fullPath:n+(s&&"?")+s+o,path:n,query:r,hash:o}}function rb(i,e){const t=e.query?i(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Nd(i,e){return!e||!i.toLowerCase().startsWith(e.toLowerCase())?i:i.slice(e.length)||"/"}function sb(i,e,t){const n=e.matched.length-1,r=t.matched.length-1;return n>-1&&n===r&&Mo(e.matched[n],t.matched[r])&&Jg(e.params,t.params)&&i(e.query)===i(t.query)&&e.hash===t.hash}function Mo(i,e){return(i.aliasOf||i)===(e.aliasOf||e)}function Jg(i,e){if(Object.keys(i).length!==Object.keys(e).length)return!1;for(const t in i)if(!ob(i[t],e[t]))return!1;return!0}function ob(i,e){return Mi(i)?zd(i,e):Mi(e)?zd(e,i):i===e}function zd(i,e){return Mi(e)?i.length===e.length&&i.every((t,n)=>t===e[n]):i.length===1&&i[0]===e}function ab(i,e){if(i.startsWith("/"))return i;if(!i)return e;const t=e.split("/"),n=i.split("/");let r=t.length-1,s,o;for(s=0;s<n.length;s++)if(o=n[s],o!==".")if(o==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+n.slice(s-(s===n.length?1:0)).join("/")}var Da;(function(i){i.pop="pop",i.push="push"})(Da||(Da={}));var pa;(function(i){i.back="back",i.forward="forward",i.unknown=""})(pa||(pa={}));function lb(i){if(!i)if(Ks){const e=document.querySelector("base");i=e&&e.getAttribute("href")||"/",i=i.replace(/^\w+:\/\/[^\/]+/,"")}else i="/";return i[0]!=="/"&&i[0]!=="#"&&(i="/"+i),ib(i)}const cb=/^[^#]+#/;function ub(i,e){return i.replace(cb,"#")+e}function fb(i,e){const t=document.documentElement.getBoundingClientRect(),n=i.getBoundingClientRect();return{behavior:e.behavior,left:n.left-t.left-(e.left||0),top:n.top-t.top-(e.top||0)}}const zc=()=>({left:window.pageXOffset,top:window.pageYOffset});function hb(i){let e;if("el"in i){const t=i.el,n=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?n?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=fb(r,i)}else e=i;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Ud(i,e){return(history.state?history.state.position-e:-1)+i}const _f=new Map;function db(i,e){_f.set(i,e)}function pb(i){const e=_f.get(i);return _f.delete(i),e}let mb=()=>location.protocol+"//"+location.host;function Qg(i,e){const{pathname:t,search:n,hash:r}=e,s=i.indexOf("#");if(s>-1){let a=r.includes(i.slice(s))?i.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Nd(l,"")}return Nd(t,i)+n+r}function gb(i,e,t,n){let r=[],s=[],o=null;const a=({state:f})=>{const p=Qg(i,location),g=t.value,d=e.value;let m=0;if(f){if(t.value=p,e.value=f,o&&o===g){o=null;return}m=d?f.position-d.position:0}else n(p);r.forEach(_=>{_(t.value,g,{delta:m,type:Da.pop,direction:m?m>0?pa.forward:pa.back:pa.unknown})})};function l(){o=t.value}function c(f){r.push(f);const p=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){const{history:f}=window;f.state&&f.replaceState(lt({},f.state,{scroll:zc()}),"")}function h(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function kd(i,e,t,n=!1,r=!1){return{back:i,current:e,forward:t,replaced:n,position:window.history.length,scroll:r?zc():null}}function _b(i){const{history:e,location:t}=window,n={value:Qg(i,t)},r={value:e.state};r.value||s(n.value,{back:null,current:n.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const h=i.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?i:i.slice(h))+l:mb()+i+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),t[u?"replace":"assign"](f)}}function o(l,c){const u=lt({},e.state,kd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),n.value=l}function a(l,c){const u=lt({},r.value,e.state,{forward:l,scroll:zc()});s(u.current,u,!0);const h=lt({},kd(n.value,l,null),{position:u.position+1},c);s(l,h,!1),n.value=l}return{location:n,state:r,push:a,replace:o}}function xb(i){i=lb(i);const e=_b(i),t=gb(i,e.state,e.location,e.replace);function n(s,o=!0){o||t.pauseListeners(),history.go(s)}const r=lt({location:"",base:i,go:n,createHref:ub.bind(null,i)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function vb(i){return typeof i=="string"||i&&typeof i=="object"}function e_(i){return typeof i=="string"||typeof i=="symbol"}const pr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},t_=Symbol("");var Bd;(function(i){i[i.aborted=4]="aborted",i[i.cancelled=8]="cancelled",i[i.duplicated=16]="duplicated"})(Bd||(Bd={}));function So(i,e){return lt(new Error,{type:i,[t_]:!0},e)}function Xi(i,e){return i instanceof Error&&t_ in i&&(e==null||!!(i.type&e))}const Gd="[^/]+?",yb={sensitive:!1,strict:!1,start:!0,end:!0},bb=/[.+*?^${}()[\]/\\]/g;function Mb(i,e){const t=lt({},yb,e),n=[];let r=t.start?"^":"";const s=[];for(const c of i){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let h=0;h<c.length;h++){const f=c[h];let p=40+(t.sensitive?.25:0);if(f.type===0)h||(r+="/"),r+=f.value.replace(bb,"\\$&"),p+=40;else if(f.type===1){const{value:g,repeatable:d,optional:m,regexp:_}=f;s.push({name:g,repeatable:d,optional:m});const b=_||Gd;if(b!==Gd){p+=10;try{new RegExp(`(${b})`)}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${b}): `+y.message)}}let v=d?`((?:${b})(?:/(?:${b}))*)`:`(${b})`;h||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),r+=v,p+=20,m&&(p+=-8),d&&(p+=-20),b===".*"&&(p+=-50)}u.push(p)}n.push(u)}if(t.strict&&t.end){const c=n.length-1;n[c][n[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const o=new RegExp(r,t.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=s[f-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function l(c){let u="",h=!1;for(const f of i){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of f)if(p.type===0)u+=p.value;else if(p.type===1){const{value:g,repeatable:d,optional:m}=p,_=g in c?c[g]:"";if(Mi(_)&&!d)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const b=Mi(_)?_.join("/"):_;if(!b)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=b}}return u||"/"}return{re:o,score:n,keys:s,parse:a,stringify:l}}function Sb(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=e[t]-i[t];if(n)return n;t++}return i.length<e.length?i.length===1&&i[0]===40+40?-1:1:i.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function wb(i,e){let t=0;const n=i.score,r=e.score;for(;t<n.length&&t<r.length;){const s=Sb(n[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-n.length)===1){if(Vd(n))return 1;if(Vd(r))return-1}return r.length-n.length}function Vd(i){const e=i[i.length-1];return i.length>0&&e[e.length-1]<0}const Tb={type:0,value:""},Eb=/[a-zA-Z0-9_]/;function Cb(i){if(!i)return[[]];if(i==="/")return[[Tb]];if(!i.startsWith("/"))throw new Error(`Invalid path "${i}"`);function e(p){throw new Error(`ERR (${t})/"${c}": ${p}`)}let t=0,n=t;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function h(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<i.length;){if(l=i[a++],l==="\\"&&t!==2){n=t,t=4;continue}switch(t){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),t=1):f();break;case 4:f(),t=n;break;case 1:l==="("?t=2:Eb.test(l)?f():(h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:h(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}function Ab(i,e,t){const n=Mb(Cb(i.path),t),r=lt(n,{record:i,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Pb(i,e){const t=[],n=new Map;e=Xd({strict:!1,end:!0,sensitive:!1},e);function r(u){return n.get(u)}function s(u,h,f){const p=!f,g=Rb(u);g.aliasOf=f&&f.record;const d=Xd(e,u),m=[g];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of v)m.push(lt({},g,{components:f?f.record.components:g.components,path:y,aliasOf:f?f.record:g}))}let _,b;for(const v of m){const{path:y}=v;if(h&&y[0]!=="/"){const S=h.record.path,P=S[S.length-1]==="/"?"":"/";v.path=h.record.path+(y&&P+y)}if(_=Ab(v,h,d),f?f.alias.push(_):(b=b||_,b!==_&&b.alias.push(_),p&&u.name&&!Wd(_)&&o(u.name)),g.children){const S=g.children;for(let P=0;P<S.length;P++)s(S[P],_,f&&f.children[P])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&l(_)}return b?()=>{o(b)}:da}function o(u){if(e_(u)){const h=n.get(u);h&&(n.delete(u),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(u);h>-1&&(t.splice(h,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return t}function l(u){let h=0;for(;h<t.length&&wb(u,t[h])>=0&&(u.record.path!==t[h].record.path||!n_(u,t[h]));)h++;t.splice(h,0,u),u.record.name&&!Wd(u)&&n.set(u.record.name,u)}function c(u,h){let f,p={},g,d;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw So(1,{location:u});d=f.record.name,p=lt(Hd(h.params,f.keys.filter(b=>!b.optional).map(b=>b.name)),u.params&&Hd(u.params,f.keys.map(b=>b.name))),g=f.stringify(p)}else if("path"in u)g=u.path,f=t.find(b=>b.re.test(g)),f&&(p=f.parse(g),d=f.record.name);else{if(f=h.name?n.get(h.name):t.find(b=>b.re.test(h.path)),!f)throw So(1,{location:u,currentLocation:h});d=f.record.name,p=lt({},h.params,u.params),g=f.stringify(p)}const m=[];let _=f;for(;_;)m.unshift(_.record),_=_.parent;return{name:d,path:g,params:p,matched:m,meta:Db(m)}}return i.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Hd(i,e){const t={};for(const n of e)n in i&&(t[n]=i[n]);return t}function Rb(i){return{path:i.path,redirect:i.redirect,name:i.name,meta:i.meta||{},aliasOf:void 0,beforeEnter:i.beforeEnter,props:Lb(i),children:i.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in i?i.components||null:i.component&&{default:i.component}}}function Lb(i){const e={},t=i.props||!1;if("component"in i)e.default=t;else for(const n in i.components)e[n]=typeof t=="boolean"?t:t[n];return e}function Wd(i){for(;i;){if(i.record.aliasOf)return!0;i=i.parent}return!1}function Db(i){return i.reduce((e,t)=>lt(e,t.meta),{})}function Xd(i,e){const t={};for(const n in i)t[n]=n in e?e[n]:i[n];return t}function n_(i,e){return e.children.some(t=>t===i||n_(i,t))}const i_=/#/g,Ib=/&/g,Ob=/\//g,Fb=/=/g,Nb=/\?/g,r_=/\+/g,zb=/%5B/g,Ub=/%5D/g,s_=/%5E/g,kb=/%60/g,o_=/%7B/g,Bb=/%7C/g,a_=/%7D/g,Gb=/%20/g;function Eh(i){return encodeURI(""+i).replace(Bb,"|").replace(zb,"[").replace(Ub,"]")}function Vb(i){return Eh(i).replace(o_,"{").replace(a_,"}").replace(s_,"^")}function xf(i){return Eh(i).replace(r_,"%2B").replace(Gb,"+").replace(i_,"%23").replace(Ib,"%26").replace(kb,"`").replace(o_,"{").replace(a_,"}").replace(s_,"^")}function Hb(i){return xf(i).replace(Fb,"%3D")}function Wb(i){return Eh(i).replace(i_,"%23").replace(Nb,"%3F")}function Xb(i){return i==null?"":Wb(i).replace(Ob,"%2F")}function fc(i){try{return decodeURIComponent(""+i)}catch{}return""+i}function qb(i){const e={};if(i===""||i==="?")return e;const n=(i[0]==="?"?i.slice(1):i).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(r_," "),o=s.indexOf("="),a=fc(o<0?s:s.slice(0,o)),l=o<0?null:fc(s.slice(o+1));if(a in e){let c=e[a];Mi(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function qd(i){let e="";for(let t in i){const n=i[t];if(t=Hb(t),n==null){n!==void 0&&(e+=(e.length?"&":"")+t);continue}(Mi(n)?n.map(s=>s&&xf(s)):[n&&xf(n)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function $b(i){const e={};for(const t in i){const n=i[t];n!==void 0&&(e[t]=Mi(n)?n.map(r=>r==null?null:""+r):n==null?n:""+n)}return e}const l_=Symbol(""),$d=Symbol(""),Ch=Symbol(""),c_=Symbol(""),vf=Symbol("");function Wo(){let i=[];function e(n){return i.push(n),()=>{const r=i.indexOf(n);r>-1&&i.splice(r,1)}}function t(){i=[]}return{add:e,list:()=>i,reset:t}}function Yb(i,e,t){const n=()=>{i[e].delete(t)};_h(n),Ig(n),Dg(()=>{i[e].add(t)}),i[e].add(t)}function u_(i){const e=Oi(l_,{}).value;e&&Yb(e,"leaveGuards",i)}function br(i,e,t,n,r){const s=n&&(n.enterCallbacks[r]=n.enterCallbacks[r]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(So(4,{from:t,to:e})):h instanceof Error?a(h):vb(h)?a(So(2,{from:e,to:h})):(s&&n.enterCallbacks[r]===s&&typeof h=="function"&&s.push(h),o())},c=i.call(n&&n.instances[r],e,t,l);let u=Promise.resolve(c);i.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function au(i,e,t,n){const r=[];for(const s of i)for(const o in s.components){let a=s.components[o];if(!(e!=="beforeRouteEnter"&&!s.instances[o]))if(jb(a)){const c=(a.__vccOpts||a)[e];c&&r.push(br(c,t,n,s,o))}else{let l=a();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${s.path}"`));const u=tb(c)?c.default:c;s.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&br(f,t,n,s,o)()}))}}return r}function jb(i){return typeof i=="object"||"displayName"in i||"props"in i||"__vccOpts"in i}function Yd(i){const e=Oi(Ch),t=Oi(c_),n=ei(()=>e.resolve(yi(i.to))),r=ei(()=>{const{matched:l}=n.value,{length:c}=l,u=l[c-1],h=t.matched;if(!u||!h.length)return-1;const f=h.findIndex(Mo.bind(null,u));if(f>-1)return f;const p=jd(l[c-2]);return c>1&&jd(u)===p&&h[h.length-1].path!==p?h.findIndex(Mo.bind(null,l[c-2])):f}),s=ei(()=>r.value>-1&&Qb(t.params,n.value.params)),o=ei(()=>r.value>-1&&r.value===t.matched.length-1&&Jg(t.params,n.value.params));function a(l={}){return Jb(l)?e[yi(i.replace)?"replace":"push"](yi(i.to)).catch(da):Promise.resolve()}return{route:n,href:ei(()=>n.value.href),isActive:s,isExactActive:o,navigate:a}}const Kb=Hi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yd,setup(i,{slots:e}){const t=Xa(Yd(i)),{options:n}=Oi(Ch),r=ei(()=>({[Kd(i.activeClass,n.linkActiveClass,"router-link-active")]:t.isActive,[Kd(i.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return i.custom?s:wh("a",{"aria-current":t.isExactActive?i.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Zb=Kb;function Jb(i){if(!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)&&!i.defaultPrevented&&!(i.button!==void 0&&i.button!==0)){if(i.currentTarget&&i.currentTarget.getAttribute){const e=i.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return i.preventDefault&&i.preventDefault(),!0}}function Qb(i,e){for(const t in e){const n=e[t],r=i[t];if(typeof n=="string"){if(n!==r)return!1}else if(!Mi(r)||r.length!==n.length||n.some((s,o)=>s!==r[o]))return!1}return!0}function jd(i){return i?i.aliasOf?i.aliasOf.path:i.path:""}const Kd=(i,e,t)=>i??e??t,eM=Hi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(i,{attrs:e,slots:t}){const n=Oi(vf),r=ei(()=>i.route||n.value),s=Oi($d,0),o=ei(()=>{let c=yi(s);const{matched:u}=r.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ei(()=>r.value.matched[o.value]);Xl($d,ei(()=>o.value+1)),Xl(l_,a),Xl(vf,r);const l=hh();return ql(()=>[l.value,a.value,i.name],([c,u,h],[f,p,g])=>{u&&(u.instances[h]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Mo(u,p)||!f)&&(u.enterCallbacks[h]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=r.value,u=i.name,h=a.value,f=h&&h.components[u];if(!f)return Zd(t.default,{Component:f,route:c});const p=h.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=wh(f,lt({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Zd(t.default,{Component:m,route:c})||m}}});function Zd(i,e){if(!i)return null;const t=i(e);return t.length===1?t[0]:t}const tM=eM;function nM(i){const e=Pb(i.routes,i),t=i.parseQuery||qb,n=i.stringifyQuery||qd,r=i.history,s=Wo(),o=Wo(),a=Wo(),l=mv(pr);let c=pr;Ks&&i.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=su.bind(null,R=>""+R),h=su.bind(null,Xb),f=su.bind(null,fc);function p(R,Y){let K,ae;return e_(R)?(K=e.getRecordMatcher(R),ae=Y):ae=R,e.addRoute(ae,K)}function g(R){const Y=e.getRecordMatcher(R);Y&&e.removeRoute(Y)}function d(){return e.getRoutes().map(R=>R.record)}function m(R){return!!e.getRecordMatcher(R)}function _(R,Y){if(Y=lt({},Y||l.value),typeof R=="string"){const T=ou(t,R,Y.path),I=e.resolve({path:T.path},Y),$=r.createHref(T.fullPath);return lt(T,I,{params:f(I.params),hash:fc(T.hash),redirectedFrom:void 0,href:$})}let K;if("path"in R)K=lt({},R,{path:ou(t,R.path,Y.path).path});else{const T=lt({},R.params);for(const I in T)T[I]==null&&delete T[I];K=lt({},R,{params:h(R.params)}),Y.params=h(Y.params)}const ae=e.resolve(K,Y),ge=R.hash||"";ae.params=u(f(ae.params));const Se=rb(n,lt({},R,{hash:Vb(ge),path:ae.path})),Me=r.createHref(Se);return lt({fullPath:Se,hash:ge,query:n===qd?$b(R.query):R.query||{}},ae,{redirectedFrom:void 0,href:Me})}function b(R){return typeof R=="string"?ou(t,R,l.value.path):lt({},R)}function v(R,Y){if(c!==R)return So(8,{from:Y,to:R})}function y(R){return A(R)}function S(R){return y(lt(b(R),{replace:!0}))}function P(R){const Y=R.matched[R.matched.length-1];if(Y&&Y.redirect){const{redirect:K}=Y;let ae=typeof K=="function"?K(R):K;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=b(ae):{path:ae},ae.params={}),lt({query:R.query,hash:R.hash,params:"path"in ae?{}:R.params},ae)}}function A(R,Y){const K=c=_(R),ae=l.value,ge=R.state,Se=R.force,Me=R.replace===!0,T=P(K);if(T)return A(lt(b(T),{state:typeof T=="object"?lt({},ge,T.state):ge,force:Se,replace:Me}),Y||K);const I=K;I.redirectedFrom=Y;let $;return!Se&&sb(n,ae,K)&&($=So(16,{to:I,from:ae}),D(ae,ae,!0,!1)),($?Promise.resolve($):w(I,ae)).catch(Q=>Xi(Q)?Xi(Q,2)?Q:le(Q):q(Q,I,ae)).then(Q=>{if(Q){if(Xi(Q,2))return A(lt({replace:Me},b(Q.to),{state:typeof Q.to=="object"?lt({},ge,Q.to.state):ge,force:Se}),Y||I)}else Q=W(I,ae,!0,Me,ge);return L(I,ae,Q),Q})}function x(R,Y){const K=v(R,Y);return K?Promise.reject(K):Promise.resolve()}function w(R,Y){let K;const[ae,ge,Se]=iM(R,Y);K=au(ae.reverse(),"beforeRouteLeave",R,Y);for(const T of ae)T.leaveGuards.forEach(I=>{K.push(br(I,R,Y))});const Me=x.bind(null,R,Y);return K.push(Me),Is(K).then(()=>{K=[];for(const T of s.list())K.push(br(T,R,Y));return K.push(Me),Is(K)}).then(()=>{K=au(ge,"beforeRouteUpdate",R,Y);for(const T of ge)T.updateGuards.forEach(I=>{K.push(br(I,R,Y))});return K.push(Me),Is(K)}).then(()=>{K=[];for(const T of R.matched)if(T.beforeEnter&&!Y.matched.includes(T))if(Mi(T.beforeEnter))for(const I of T.beforeEnter)K.push(br(I,R,Y));else K.push(br(T.beforeEnter,R,Y));return K.push(Me),Is(K)}).then(()=>(R.matched.forEach(T=>T.enterCallbacks={}),K=au(Se,"beforeRouteEnter",R,Y),K.push(Me),Is(K))).then(()=>{K=[];for(const T of o.list())K.push(br(T,R,Y));return K.push(Me),Is(K)}).catch(T=>Xi(T,8)?T:Promise.reject(T))}function L(R,Y,K){for(const ae of a.list())ae(R,Y,K)}function W(R,Y,K,ae,ge){const Se=v(R,Y);if(Se)return Se;const Me=Y===pr,T=Ks?history.state:{};K&&(ae||Me?r.replace(R.fullPath,lt({scroll:Me&&T&&T.scroll},ge)):r.push(R.fullPath,ge)),l.value=R,D(R,Y,K,Me),le()}let O;function U(){O||(O=r.listen((R,Y,K)=>{if(!pe.listening)return;const ae=_(R),ge=P(ae);if(ge){A(lt(ge,{replace:!0}),ae).catch(da);return}c=ae;const Se=l.value;Ks&&db(Ud(Se.fullPath,K.delta),zc()),w(ae,Se).catch(Me=>Xi(Me,12)?Me:Xi(Me,2)?(A(Me.to,ae).then(T=>{Xi(T,20)&&!K.delta&&K.type===Da.pop&&r.go(-1,!1)}).catch(da),Promise.reject()):(K.delta&&r.go(-K.delta,!1),q(Me,ae,Se))).then(Me=>{Me=Me||W(ae,Se,!1),Me&&(K.delta&&!Xi(Me,8)?r.go(-K.delta,!1):K.type===Da.pop&&Xi(Me,20)&&r.go(-1,!1)),L(ae,Se,Me)}).catch(da)}))}let N=Wo(),X=Wo(),j;function q(R,Y,K){le(R);const ae=X.list();return ae.length?ae.forEach(ge=>ge(R,Y,K)):console.error(R),Promise.reject(R)}function G(){return j&&l.value!==pr?Promise.resolve():new Promise((R,Y)=>{N.add([R,Y])})}function le(R){return j||(j=!R,U(),N.list().forEach(([Y,K])=>R?K(R):Y()),N.reset()),R}function D(R,Y,K,ae){const{scrollBehavior:ge}=i;if(!Ks||!ge)return Promise.resolve();const Se=!K&&pb(Ud(R.fullPath,0))||(ae||!K)&&history.state&&history.state.scroll||null;return Mg().then(()=>ge(R,Y,Se)).then(Me=>Me&&hb(Me)).catch(Me=>q(Me,R,Y))}const be=R=>r.go(R);let H;const ue=new Set,pe={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,hasRoute:m,getRoutes:d,resolve:_,options:i,push:y,replace:S,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:X.add,isReady:G,install(R){const Y=this;R.component("RouterLink",Zb),R.component("RouterView",tM),R.config.globalProperties.$router=Y,Object.defineProperty(R.config.globalProperties,"$route",{enumerable:!0,get:()=>yi(l)}),Ks&&!H&&l.value===pr&&(H=!0,y(r.location).catch(ge=>{}));const K={};for(const ge in pr)K[ge]=ei(()=>l.value[ge]);R.provide(Ch,Y),R.provide(c_,Xa(K)),R.provide(vf,l);const ae=R.unmount;ue.add(R),R.unmount=function(){ue.delete(R),ue.size<1&&(c=pr,O&&O(),O=null,l.value=pr,H=!1,j=!1),ae()}}};return pe}function Is(i){return i.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function iM(i,e){const t=[],n=[],r=[],s=Math.max(e.matched.length,i.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(i.matched.find(c=>Mo(c,a))?n.push(a):t.push(a));const l=i.matched[o];l&&(e.matched.find(c=>Mo(c,l))||r.push(l))}return[t,n,r]}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ah="150",rM=0,Jd=1,sM=2,f_=1,oM=2,na=3,Br=0,Hn=1,Sr=2,Ir=0,uo=1,Qd=2,ep=3,tp=4,aM=5,Zs=100,lM=101,cM=102,np=103,ip=104,uM=200,fM=201,hM=202,dM=203,h_=204,d_=205,pM=206,mM=207,gM=208,_M=209,xM=210,vM=0,yM=1,bM=2,yf=3,MM=4,SM=5,wM=6,TM=7,p_=0,EM=1,CM=2,ir=0,AM=1,PM=2,RM=3,LM=4,DM=5,m_=300,wo=301,To=302,bf=303,Mf=304,Uc=306,Sf=1e3,mi=1001,wf=1002,dn=1003,rp=1004,lu=1005,Zn=1006,IM=1007,Ia=1008,ws=1009,OM=1010,FM=1011,g_=1012,NM=1013,fs=1014,hs=1015,Oa=1016,zM=1017,UM=1018,fo=1020,kM=1021,gi=1023,BM=1024,GM=1025,_s=1026,Eo=1027,VM=1028,HM=1029,WM=1030,XM=1031,qM=1033,cu=33776,uu=33777,fu=33778,hu=33779,sp=35840,op=35841,ap=35842,lp=35843,$M=36196,cp=37492,up=37496,fp=37808,hp=37809,dp=37810,pp=37811,mp=37812,gp=37813,_p=37814,xp=37815,vp=37816,yp=37817,bp=37818,Mp=37819,Sp=37820,wp=37821,du=36492,YM=36283,Tp=36284,Ep=36285,Cp=36286,Ts=3e3,mt=3001,jM=3200,KM=3201,ZM=0,JM=1,Ti="srgb",Fa="srgb-linear",__="display-p3",pu=7680,QM=519,Ap=35044,Pp="300 es",Tf=1035;class ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Yl=Math.PI/180,Rp=180/Math.PI;function Ya(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Bn(i,e,t){return Math.max(e,Math.min(t,i))}function eS(i,e){return(i%e+e)%e}function mu(i,e,t){return(1-t)*i+t*e}function Lp(i){return(i&i-1)===0&&i!==0}function tS(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function al(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function In(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class _t{constructor(e=0,t=0){_t.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(){vn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],d=r[0],m=r[3],_=r[6],b=r[1],v=r[4],y=r[7],S=r[2],P=r[5],A=r[8];return s[0]=o*d+a*b+l*S,s[3]=o*m+a*v+l*P,s[6]=o*_+a*y+l*A,s[1]=c*d+u*b+h*S,s[4]=c*m+u*v+h*P,s[7]=c*_+u*y+h*A,s[2]=f*d+p*b+g*S,s[5]=f*m+p*v+g*P,s[8]=f*_+p*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/g;return e[0]=h*d,e[1]=(r*c-u*n)*d,e[2]=(a*n-r*o)*d,e[3]=f*d,e[4]=(u*t-r*l)*d,e[5]=(r*s-a*t)*d,e[6]=p*d,e[7]=(n*l-c*t)*d,e[8]=(o*t-n*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(gu.makeScale(e,t)),this}rotate(e){return this.premultiply(gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(gu.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gu=new vn;function x_(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function hc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}class ja{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],d=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=d;return}if(h!==d||l!==f||c!==p||u!==g){let m=1-a;const _=l*f+c*p+u*g+h*d,b=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const S=Math.sqrt(v),P=Math.atan2(S,_*b);m=Math.sin(m*P)/S,a=Math.sin(a*P)/S}const y=a*b;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,h=h*m+d*y,m===1-a){const S=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=S,c*=S,u*=S,h*=S}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-a*p,e[t+2]=c*g+u*p+a*f-l*h,e[t+3]=u*g-a*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),h=a(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,t=0,n=0){Z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*r-a*n,u=l*n+a*t-s*r,h=l*r+s*n-o*t,f=-s*t-o*n-a*r;return this.x=c*l+f*-s+u*-a-h*-o,this.y=u*l+f*-o+h*-s-c*-a,this.z=h*l+f*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _u.copy(this).projectOnVector(e),this.sub(_u)}reflect(e){return this.sub(_u.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _u=new Z,Dp=new ja;function ho(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const nS=new vn().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),iS=new vn().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),wr=new Z;function rS(i){return i.convertSRGBToLinear(),wr.set(i.r,i.g,i.b).applyMatrix3(iS),i.setRGB(wr.x,wr.y,wr.z)}function sS(i){return wr.set(i.r,i.g,i.b).applyMatrix3(nS),i.setRGB(wr.x,wr.y,wr.z).convertLinearToSRGB()}const oS={[Fa]:i=>i,[Ti]:i=>i.convertSRGBToLinear(),[__]:rS},aS={[Fa]:i=>i,[Ti]:i=>i.convertLinearToSRGB(),[__]:sS},ln={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Fa},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=oS[e],r=aS[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let Os;class v_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=hc("canvas")),Os.width=e.width,Os.height=e.height;const n=Os.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ho(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ho(t[n]/255)*255):t[n]=ho(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class y_{constructor(e=null){this.isSource=!0,this.uuid=Ya(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vu(r[o].image)):s.push(vu(r[o]))}else s=vu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function vu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?v_.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lS=0;class Wn extends ko{constructor(e=Wn.DEFAULT_IMAGE,t=Wn.DEFAULT_MAPPING,n=mi,r=mi,s=Zn,o=Ia,a=gi,l=ws,c=Wn.DEFAULT_ANISOTROPY,u=Ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lS++}),this.uuid=Ya(),this.name="",this.source=new y_(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Sf:e.x=e.x-Math.floor(e.x);break;case mi:e.x=e.x<0?0:1;break;case wf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Sf:e.y=e.y-Math.floor(e.y);break;case mi:e.y=e.y<0?0:1;break;case wf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Wn.DEFAULT_IMAGE=null;Wn.DEFAULT_MAPPING=m_;Wn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,n=0,r=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],d=l[2],m=l[6],_=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-d)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+d)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,y=(p+1)/2,S=(_+1)/2,P=(u+f)/4,A=(h+d)/4,x=(g+m)/4;return v>y&&v>S?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=P/n,s=A/n):y>S?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=P/r,s=x/r):S<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),n=A/s,r=x/s),this.set(n,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(h-d)*(h-d)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-d)/b,this.z=(f-u)/b,this.w=Math.acos((c+p+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Es extends ko{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Wn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Zn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new y_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class b_ extends Wn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cS extends Wn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=dn,this.minFilter=dn,this.wrapR=mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ka{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],h=e[l+1],f=e[l+2];u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),h=e.getY(l),f=e.getZ(l);u<t&&(t=u),h<n&&(n=h),f<r&&(r=f),u>s&&(s=u),h>o&&(o=h),f>a&&(a=f)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Zr.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Zr)}else n.boundingBox===null&&n.computeBoundingBox(),yu.copy(n.boundingBox),yu.applyMatrix4(e.matrixWorld),this.union(yu);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Zr),Zr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),ll.subVectors(this.max,Xo),Fs.subVectors(e.a,Xo),Ns.subVectors(e.b,Xo),zs.subVectors(e.c,Xo),mr.subVectors(Ns,Fs),gr.subVectors(zs,Ns),Jr.subVectors(Fs,zs);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Jr.z,Jr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Jr.z,0,-Jr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Jr.y,Jr.x,0];return!bu(t,Fs,Ns,zs,ll)||(t=[1,0,0,0,1,0,0,0,1],!bu(t,Fs,Ns,zs,ll))?!1:(cl.crossVectors(mr,gr),t=[cl.x,cl.y,cl.z],bu(t,Fs,Ns,zs,ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const qi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Zr=new Z,yu=new Ka,Fs=new Z,Ns=new Z,zs=new Z,mr=new Z,gr=new Z,Jr=new Z,Xo=new Z,ll=new Z,cl=new Z,Qr=new Z;function bu(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Qr.fromArray(i,s);const a=r.x*Math.abs(Qr.x)+r.y*Math.abs(Qr.y)+r.z*Math.abs(Qr.z),l=e.dot(Qr),c=t.dot(Qr),u=n.dot(Qr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const uS=new Ka,qo=new Z,Mu=new Z;class kc{constructor(e=new Z,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uS.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qo.subVectors(e,this.center);const t=qo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(qo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qo.copy(e.center).add(Mu)),this.expandByPoint(qo.copy(e.center).sub(Mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $i=new Z,Su=new Z,ul=new Z,_r=new Z,wu=new Z,fl=new Z,Tu=new Z;class M_{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Su.copy(e).add(t).multiplyScalar(.5),ul.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(Su);const s=e.distanceTo(t)*.5,o=-this.direction.dot(ul),a=_r.dot(this.direction),l=-_r.dot(ul),c=_r.lengthSq(),u=Math.abs(1-o*o);let h,f,p,g;if(u>0)if(h=o*l-a,f=o*a-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const d=1/u;h*=d,f*=d,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Su).addScaledVector(ul,f),p}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const n=$i.dot(this.direction),r=$i.dot($i)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,n,r,s){wu.subVectors(t,e),fl.subVectors(n,e),Tu.crossVectors(wu,fl);let o=this.direction.dot(Tu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;_r.subVectors(this.origin,e);const l=a*this.direction.dot(fl.crossVectors(_r,fl));if(l<0)return null;const c=a*this.direction.dot(wu.cross(_r));if(c<0||l+c>o)return null;const u=-a*_r.dot(Tu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Wt{constructor(){Wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,l,c,u,h,f,p,g,d,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=u,_[10]=h,_[14]=f,_[3]=p,_[7]=g,_[11]=d,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*h,g=a*u,d=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-d*c,t[9]=-a*l,t[2]=d-f*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f+d*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=d+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,d=c*h;t[0]=f-d*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=d-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*h,g=a*u,d=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+d,t[1]=l*h,t[5]=d*c+f,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=d-f*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-d*h}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,d=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+d,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=d*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fS,e,hS)}lookAt(e,t,n){const r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),xr.crossVectors(n,On),xr.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),xr.crossVectors(n,On)),xr.normalize(),hl.crossVectors(On,xr),r[0]=xr.x,r[4]=hl.x,r[8]=On.x,r[1]=xr.y,r[5]=hl.y,r[9]=On.y,r[2]=xr.z,r[6]=hl.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],d=n[6],m=n[10],_=n[14],b=n[3],v=n[7],y=n[11],S=n[15],P=r[0],A=r[4],x=r[8],w=r[12],L=r[1],W=r[5],O=r[9],U=r[13],N=r[2],X=r[6],j=r[10],q=r[14],G=r[3],le=r[7],D=r[11],be=r[15];return s[0]=o*P+a*L+l*N+c*G,s[4]=o*A+a*W+l*X+c*le,s[8]=o*x+a*O+l*j+c*D,s[12]=o*w+a*U+l*q+c*be,s[1]=u*P+h*L+f*N+p*G,s[5]=u*A+h*W+f*X+p*le,s[9]=u*x+h*O+f*j+p*D,s[13]=u*w+h*U+f*q+p*be,s[2]=g*P+d*L+m*N+_*G,s[6]=g*A+d*W+m*X+_*le,s[10]=g*x+d*O+m*j+_*D,s[14]=g*w+d*U+m*q+_*be,s[3]=b*P+v*L+y*N+S*G,s[7]=b*A+v*W+y*X+S*le,s[11]=b*x+v*O+y*j+S*D,s[15]=b*w+v*U+y*q+S*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],d=e[7],m=e[11],_=e[15];return g*(+s*l*h-r*c*h-s*a*f+n*c*f+r*a*p-n*l*p)+d*(+t*l*p-t*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+t*c*h-t*a*p-s*o*h+n*o*p+s*a*u-n*c*u)+_*(-r*a*u-t*l*h+t*a*f+r*o*h-n*o*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],d=e[13],m=e[14],_=e[15],b=h*m*c-d*f*c+d*l*p-a*m*p-h*l*_+a*f*_,v=g*f*c-u*m*c-g*l*p+o*m*p+u*l*_-o*f*_,y=u*d*c-g*h*c+g*a*p-o*d*p-u*a*_+o*h*_,S=g*h*l-u*d*l-g*a*f+o*d*f+u*a*m-o*h*m,P=t*b+n*v+r*y+s*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/P;return e[0]=b*A,e[1]=(d*f*s-h*m*s-d*r*p+n*m*p+h*r*_-n*f*_)*A,e[2]=(a*m*s-d*l*s+d*r*c-n*m*c-a*r*_+n*l*_)*A,e[3]=(h*l*s-a*f*s-h*r*c+n*f*c+a*r*p-n*l*p)*A,e[4]=v*A,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*_+t*f*_)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*_-t*l*_)*A,e[7]=(o*f*s-u*l*s+u*r*c-t*f*c-o*r*p+t*l*p)*A,e[8]=y*A,e[9]=(g*h*s-u*d*s-g*n*p+t*d*p+u*n*_-t*h*_)*A,e[10]=(o*d*s-g*a*s+g*n*c-t*d*c-o*n*_+t*a*_)*A,e[11]=(u*a*s-o*h*s-u*n*c+t*h*c+o*n*p-t*a*p)*A,e[12]=S*A,e[13]=(u*d*r-g*h*r+g*n*f-t*d*f-u*n*m+t*h*m)*A,e[14]=(g*a*r-o*d*r-g*n*l+t*d*l+o*n*m-t*a*m)*A,e[15]=(o*h*r-u*a*r+u*n*l-t*h*l-o*n*f+t*a*f)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,h=a+a,f=s*c,p=s*u,g=s*h,d=o*u,m=o*h,_=a*h,b=l*c,v=l*u,y=l*h,S=n.x,P=n.y,A=n.z;return r[0]=(1-(d+_))*S,r[1]=(p+y)*S,r[2]=(g-v)*S,r[3]=0,r[4]=(p-y)*P,r[5]=(1-(f+_))*P,r[6]=(m+b)*P,r[7]=0,r[8]=(g+v)*A,r[9]=(m-b)*A,r[10]=(1-(f+d))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Us.set(r[0],r[1],r[2]).length();const o=Us.set(r[4],r[5],r[6]).length(),a=Us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ai.copy(this);const c=1/s,u=1/o,h=1/a;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=h,ai.elements[9]*=h,ai.elements[10]*=h,t.setFromRotationMatrix(ai),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-r),u=(t+e)/(t-e),h=(n+r)/(n-r),f=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=c,a[9]=h,a[13]=0,a[2]=0,a[6]=0,a[10]=f,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,l=1/(t-e),c=1/(n-r),u=1/(o-s),h=(t+e)*l,f=(n+r)*c,p=(o+s)*u;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-h,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-f,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Us=new Z,ai=new Wt,fS=new Z(0,0,0),hS=new Z(1,1,1),xr=new Z,hl=new Z,On=new Z,Ip=new Wt,Op=new ja;class Bc{constructor(e=0,t=0,n=0,r=Bc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Bn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Bn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ip.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ip,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Op.setFromEuler(this),this.setFromQuaternion(Op,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bc.DEFAULT_ORDER="XYZ";class S_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dS=0;const Fp=new Z,ks=new ja,Yi=new Wt,dl=new Z,$o=new Z,pS=new Z,mS=new ja,Np=new Z(1,0,0),zp=new Z(0,1,0),Up=new Z(0,0,1),gS={type:"added"},kp={type:"removed"};class Tn extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new Z,t=new Bc,n=new ja,r=new Z(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Wt},normalMatrix:{value:new vn}}),this.matrix=new Wt,this.matrixWorld=new Wt,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new S_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Np,e)}rotateY(e){return this.rotateOnAxis(zp,e)}rotateZ(e){return this.rotateOnAxis(Up,e)}translateOnAxis(e,t){return Fp.copy(e).applyQuaternion(this.quaternion),this.position.add(Fp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Np,e)}translateY(e){return this.translateOnAxis(zp,e)}translateZ(e){return this.translateOnAxis(Up,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dl.copy(e):dl.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt($o,dl,this.up):Yi.lookAt(dl,$o,this.up),this.quaternion.setFromRotationMatrix(Yi),r&&(Yi.extractRotation(r.matrixWorld),ks.setFromRotationMatrix(Yi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gS)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kp)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(kp)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,pS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,mS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Tn.DEFAULT_UP=new Z(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new Z,ji=new Z,Eu=new Z,Ki=new Z,Bs=new Z,Gs=new Z,Bp=new Z,Cu=new Z,Au=new Z,Pu=new Z;class Ri{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),li.subVectors(e,t),r.cross(li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){li.subVectors(r,t),ji.subVectors(n,t),Eu.subVectors(e,t);const o=li.dot(li),a=li.dot(ji),l=li.dot(Eu),c=ji.dot(ji),u=ji.dot(Eu),h=o*c-a*a;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ki),Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getUV(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Ki),l.set(0,0),l.addScaledVector(s,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l}static isFrontFacing(e,t,n,r){return li.subVectors(n,t),ji.subVectors(e,t),li.cross(ji).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),ji.subVectors(this.a,this.b),li.cross(ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Ri.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;Bs.subVectors(r,n),Gs.subVectors(s,n),Cu.subVectors(e,n);const l=Bs.dot(Cu),c=Gs.dot(Cu);if(l<=0&&c<=0)return t.copy(n);Au.subVectors(e,r);const u=Bs.dot(Au),h=Gs.dot(Au);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Bs,o);Pu.subVectors(e,s);const p=Bs.dot(Pu),g=Gs.dot(Pu);if(g>=0&&p<=g)return t.copy(s);const d=p*c-l*g;if(d<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Gs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Bp.subVectors(s,r),a=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Bp,a);const _=1/(m+d+f);return o=d*_,a=f*_,t.copy(n).addScaledVector(Bs,o).addScaledVector(Gs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let _S=0;class Za extends ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=uo,this.side=Br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=h_,this.blendDst=d_,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=yf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=QM,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pu,this.stencilZFail=pu,this.stencilZPass=pu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(n.blending=this.blending),this.side!==Br&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const w_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},pl={h:0,s:0,l:0};function Ru(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class gt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ln.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ln.workingColorSpace){return this.r=e,this.g=t,this.b=n,ln.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ln.workingColorSpace){if(e=eS(e,1),t=Bn(t,0,1),n=Bn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ru(o,s,e+1/3),this.g=Ru(o,s,e),this.b=Ru(o,s,e-1/3)}return ln.toWorkingColorSpace(this,r),this}setStyle(e,t=Ti){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,ln.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,ln.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,ln.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,ln.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ti){const n=w_[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}copyLinearToSRGB(e){return this.r=xu(e.r),this.g=xu(e.g),this.b=xu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return ln.fromWorkingColorSpace(Jt.copy(this),e),Bn(Jt.r*255,0,255)<<16^Bn(Jt.g*255,0,255)<<8^Bn(Jt.b*255,0,255)<<0}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ln.workingColorSpace){ln.fromWorkingColorSpace(Jt.copy(this),t);const n=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ln.workingColorSpace){return ln.fromWorkingColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Ti){ln.fromWorkingColorSpace(Jt.copy(this),e);const t=Jt.r,n=Jt.g,r=Jt.b;return e!==Ti?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${r*255|0})`}offsetHSL(e,t,n){return this.getHSL(ci),ci.h+=e,ci.s+=t,ci.l+=n,this.setHSL(ci.h,ci.s,ci.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(pl);const n=mu(ci.h,pl.h,t),r=mu(ci.s,pl.s,t),s=mu(ci.l,pl.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new gt;gt.NAMES=w_;class T_ extends Za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=p_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new Z,ml=new _t;class Ni{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ap,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=al(t,this.array)),t}setX(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=al(t,this.array)),t}setY(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=al(t,this.array)),t}setZ(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=al(t,this.array)),t}setW(e,t){return this.normalized&&(t=In(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),r=In(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=In(t,this.array),n=In(n,this.array),r=In(r,this.array),s=In(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ap&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class E_ extends Ni{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class C_ extends Ni{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class zi extends Ni{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xS=0;const Yn=new Wt,Lu=new Tn,Vs=new Z,Fn=new Ka,Yo=new Ka,Gt=new Z;class ur extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xS++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(x_(e)?C_:E_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new vn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return Lu.lookAt(e),Lu.updateMatrix(),this.applyMatrix4(Lu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Fn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Fn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Fn.min),this.boundingBox.expandByPoint(Fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Z,1/0);return}if(e){const n=this.boundingSphere.center;if(Fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Yo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Fn.min,Yo.min),Fn.expandByPoint(Gt),Gt.addVectors(Fn.max,Yo.max),Fn.expandByPoint(Gt)):(Fn.expandByPoint(Yo.min),Fn.expandByPoint(Yo.max))}Fn.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Gt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Gt.fromBufferAttribute(a,c),l&&(Vs.fromBufferAttribute(e,c),Gt.add(Vs)),r=Math.max(r,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let L=0;L<a;L++)c[L]=new Z,u[L]=new Z;const h=new Z,f=new Z,p=new Z,g=new _t,d=new _t,m=new _t,_=new Z,b=new Z;function v(L,W,O){h.fromArray(r,L*3),f.fromArray(r,W*3),p.fromArray(r,O*3),g.fromArray(o,L*2),d.fromArray(o,W*2),m.fromArray(o,O*2),f.sub(h),p.sub(h),d.sub(g),m.sub(g);const U=1/(d.x*m.y-m.x*d.y);isFinite(U)&&(_.copy(f).multiplyScalar(m.y).addScaledVector(p,-d.y).multiplyScalar(U),b.copy(p).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(U),c[L].add(_),c[W].add(_),c[O].add(_),u[L].add(b),u[W].add(b),u[O].add(b))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let L=0,W=y.length;L<W;++L){const O=y[L],U=O.start,N=O.count;for(let X=U,j=U+N;X<j;X+=3)v(n[X+0],n[X+1],n[X+2])}const S=new Z,P=new Z,A=new Z,x=new Z;function w(L){A.fromArray(s,L*3),x.copy(A);const W=c[L];S.copy(W),S.sub(A.multiplyScalar(A.dot(W))).normalize(),P.crossVectors(x,W);const U=P.dot(u[L])<0?-1:1;l[L*4]=S.x,l[L*4+1]=S.y,l[L*4+2]=S.z,l[L*4+3]=U}for(let L=0,W=y.length;L<W;++L){const O=y[L],U=O.start,N=O.count;for(let X=U,j=U+N;X<j;X+=3)w(n[X+0]),w(n[X+1]),w(n[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ni(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,h=new Z;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),d=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,d),o.fromBufferAttribute(t,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,d),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let d=0,m=l.length;d<m;d++){a.isInterleavedBufferAttribute?p=l[d]*a.data.stride+a.offset:p=l[d]*u;for(let _=0;_<u;_++)f[g++]=c[p++]}return new Ni(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ur,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gp=new Wt,wi=new M_,gl=new kc,Vp=new Z,jo=new Z,Ko=new Z,Zo=new Z,Du=new Z,_l=new Z,xl=new _t,vl=new _t,yl=new _t,Iu=new Z,bl=new Z;class tr extends Tn{constructor(e=new ur,t=new T_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){_l.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(Du.fromBufferAttribute(h,e),o?_l.addScaledVector(Du,u):_l.addScaledVector(Du.sub(t),u))}t.add(_l)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),gl.copy(n.boundingSphere),gl.applyMatrix4(s),wi.copy(e.ray).recast(e.near),gl.containsPoint(wi.origin)===!1&&(wi.intersectSphere(gl,Vp)===null||wi.origin.distanceToSquared(Vp)>(e.far-e.near)**2))||(Gp.copy(s).invert(),wi.copy(e.ray).applyMatrix4(Gp),n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,h=n.groups,f=n.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=r[d.materialIndex],_=Math.max(d.start,f.start),b=Math.min(a.count,Math.min(d.start+d.count,f.start+f.count));for(let v=_,y=b;v<y;v+=3){const S=a.getX(v),P=a.getX(v+1),A=a.getX(v+2);o=Ml(this,m,e,wi,c,u,S,P,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=a.getX(d),b=a.getX(d+1),v=a.getX(d+2);o=Ml(this,r,e,wi,c,u,_,b,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(r))for(let p=0,g=h.length;p<g;p++){const d=h[p],m=r[d.materialIndex],_=Math.max(d.start,f.start),b=Math.min(l.count,Math.min(d.start+d.count,f.start+f.count));for(let v=_,y=b;v<y;v+=3){const S=v,P=v+1,A=v+2;o=Ml(this,m,e,wi,c,u,S,P,A),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=d.materialIndex,t.push(o))}}else{const p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let d=p,m=g;d<m;d+=3){const _=d,b=d+1,v=d+2;o=Ml(this,r,e,wi,c,u,_,b,v),o&&(o.faceIndex=Math.floor(d/3),t.push(o))}}}}function vS(i,e,t,n,r,s,o,a){let l;if(e.side===Hn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Br,a),l===null)return null;bl.copy(a),bl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(bl);return c<t.near||c>t.far?null:{distance:c,point:bl.clone(),object:i}}function Ml(i,e,t,n,r,s,o,a,l){i.getVertexPosition(o,jo),i.getVertexPosition(a,Ko),i.getVertexPosition(l,Zo);const c=vS(i,e,t,n,jo,Ko,Zo,Iu);if(c){r&&(xl.fromBufferAttribute(r,o),vl.fromBufferAttribute(r,a),yl.fromBufferAttribute(r,l),c.uv=Ri.getUV(Iu,jo,Ko,Zo,xl,vl,yl,new _t)),s&&(xl.fromBufferAttribute(s,o),vl.fromBufferAttribute(s,a),yl.fromBufferAttribute(s,l),c.uv2=Ri.getUV(Iu,jo,Ko,Zo,xl,vl,yl,new _t));const u={a:o,b:a,c:l,normal:new Z,materialIndex:0};Ri.getNormal(jo,Ko,Zo,u.normal),c.face=u}return c}class Bo extends ur{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new zi(c,3)),this.setAttribute("normal",new zi(u,3)),this.setAttribute("uv",new zi(h,2));function g(d,m,_,b,v,y,S,P,A,x,w){const L=y/A,W=S/x,O=y/2,U=S/2,N=P/2,X=A+1,j=x+1;let q=0,G=0;const le=new Z;for(let D=0;D<j;D++){const be=D*W-U;for(let H=0;H<X;H++){const ue=H*L-O;le[d]=ue*b,le[m]=be*v,le[_]=N,c.push(le.x,le.y,le.z),le[d]=0,le[m]=0,le[_]=P>0?1:-1,u.push(le.x,le.y,le.z),h.push(H/A),h.push(1-D/x),q+=1}}for(let D=0;D<x;D++)for(let be=0;be<A;be++){const H=f+be+X*D,ue=f+be+X*(D+1),pe=f+(be+1)+X*(D+1),R=f+(be+1)+X*D;l.push(H,ue,R),l.push(ue,pe,R),G+=6}a.addGroup(p,G,w),p+=G,f+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Co(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function fn(i){const e={};for(let t=0;t<i.length;t++){const n=Co(i[t]);for(const r in n)e[r]=n[r]}return e}function yS(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function A_(i){return i.getRenderTarget()===null&&i.outputEncoding===mt?Ti:Fa}const bS={clone:Co,merge:fn};var MS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends Za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MS,this.fragmentShader=SS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=yS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class P_ extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Wt,this.projectionMatrix=new Wt,this.projectionMatrixInverse=new Wt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jn extends P_{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Rp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Yl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rp*2*Math.atan(Math.tan(Yl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Yl*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Ws=1;class wS extends Tn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Jn(Hs,Ws,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Jn(Hs,Ws,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Jn(Hs,Ws,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Jn(Hs,Ws,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new Jn(Hs,Ws,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Jn(Hs,Ws,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),h=e.toneMapping,f=e.xr.enabled;e.toneMapping=ir,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=h,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class R_ extends Wn{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:wo,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TS extends Es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new R_(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Bo(5,5,5),s=new Gr({name:"CubemapFromEquirect",uniforms:Co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Hn,blending:Ir});s.uniforms.tEquirect.value=t;const o=new tr(r,s),a=t.minFilter;return t.minFilter===Ia&&(t.minFilter=Zn),new wS(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Ou=new Z,ES=new Z,CS=new vn;class is{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ou.subVectors(n,t).cross(ES.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ou),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||CS.getNormalMatrix(e),r=this.coplanarPoint(Ou).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new kc,Sl=new Z;class L_{constructor(e=new is,t=new is,n=new is,r=new is,s=new is,o=new is){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],u=n[6],h=n[7],f=n[8],p=n[9],g=n[10],d=n[11],m=n[12],_=n[13],b=n[14],v=n[15];return t[0].setComponents(a-r,h-l,d-f,v-m).normalize(),t[1].setComponents(a+r,h+l,d+f,v+m).normalize(),t[2].setComponents(a+s,h+c,d+p,v+_).normalize(),t[3].setComponents(a-s,h-c,d-p,v-_).normalize(),t[4].setComponents(a-o,h-u,d-g,v-b).normalize(),t[5].setComponents(a+o,h+u,d+g,v+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSprite(e){return Xs.center.set(0,0,0),Xs.radius=.7071067811865476,Xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Sl.x=r.normal.x>0?e.max.x:e.min.x,Sl.y=r.normal.y>0?e.max.y:e.min.y,Sl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function D_(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function AS(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=5126;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(h instanceof Int16Array)g=5122;else if(h instanceof Uint32Array)g=5125;else if(h instanceof Int32Array)g=5124;else if(h instanceof Int8Array)g=5120;else if(h instanceof Uint8Array)g=5121;else if(h instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:o,remove:a,update:l}}class Gc extends ur{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,h=e/a,f=t/l,p=[],g=[],d=[],m=[];for(let _=0;_<u;_++){const b=_*f-o;for(let v=0;v<c;v++){const y=v*h-s;g.push(y,-b,0),d.push(0,0,1),m.push(v/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let b=0;b<a;b++){const v=b+c*_,y=b+c*(_+1),S=b+1+c*(_+1),P=b+1+c*_;p.push(v,y,P),p.push(y,S,P)}this.setIndex(p),this.setAttribute("position",new zi(g,3)),this.setAttribute("normal",new zi(d,3)),this.setAttribute("uv",new zi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.width,e.height,e.widthSegments,e.heightSegments)}}var PS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,RS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,LS=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,DS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,IS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,FS="vec3 transformed = vec3( position );",NS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zS=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,US=`#ifdef USE_IRIDESCENCE
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
#endif`,kS=`#ifdef USE_BUMPMAP
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
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,GS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,$S=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,YS=`#define PI 3.141592653589793
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
}`,jS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KS=`vec3 transformedNormal = objectNormal;
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
#endif`,ZS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,JS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,QS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",n1=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i1=`#ifdef USE_ENVMAP
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
#endif`,r1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s1=`#ifdef USE_ENVMAP
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
#endif`,o1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
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
#endif`,l1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,f1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,h1=`#ifdef USE_GRADIENTMAP
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
}`,d1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,p1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,m1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_1=`uniform bool receiveShadow;
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
#endif`,x1=`#if defined( USE_ENVMAP )
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
#endif`,v1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,y1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,b1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,S1=`PhysicalMaterial material;
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
#endif`,w1=`struct PhysicalMaterial {
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
}`,T1=`
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
#endif`,E1=`#if defined( RE_IndirectDiffuse )
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
#endif`,C1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,A1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,P1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,L1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,D1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,I1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,F1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,k1=`#ifdef USE_MORPHNORMALS
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
#endif`,B1=`#ifdef USE_MORPHTARGETS
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
#endif`,G1=`#ifdef USE_MORPHTARGETS
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
#endif`,V1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,H1=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$1=`#ifdef USE_NORMALMAP
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
#endif`,Y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,j1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,K1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Q1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,aw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cw=`float getShadowMask() {
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
}`,uw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fw=`#ifdef USE_SKINNING
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
#endif`,hw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dw=`#ifdef USE_SKINNING
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
#endif`,pw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_w=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xw=`#ifdef USE_TRANSMISSION
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
#endif`,vw=`#ifdef USE_TRANSMISSION
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
#endif`,yw=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,bw=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Mw=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Sw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ww=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Tw=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ew=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Aw=`uniform sampler2D t2D;
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
}`,Pw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Iw=`#include <common>
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
}`,Ow=`#if DEPTH_PACKING == 3200
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
}`,Fw=`#define DISTANCE
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
}`,Nw=`#define DISTANCE
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
}`,zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kw=`uniform float scale;
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
}`,Bw=`uniform vec3 diffuse;
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
}`,Gw=`#include <common>
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
}`,Vw=`uniform vec3 diffuse;
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
}`,Hw=`#define LAMBERT
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
}`,Ww=`#define LAMBERT
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
}`,Xw=`#define MATCAP
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
}`,qw=`#define MATCAP
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
}`,$w=`#define NORMAL
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
}`,Yw=`#define NORMAL
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
}`,jw=`#define PHONG
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
}`,Kw=`#define PHONG
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
}`,Zw=`#define STANDARD
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
}`,Jw=`#define STANDARD
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
}`,Qw=`#define TOON
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
}`,eT=`#define TOON
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
}`,tT=`uniform float size;
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
}`,nT=`uniform vec3 diffuse;
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
}`,iT=`#include <common>
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
}`,rT=`uniform vec3 color;
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
}`,sT=`uniform float rotation;
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
}`,oT=`uniform vec3 diffuse;
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
}`,Ke={alphamap_fragment:PS,alphamap_pars_fragment:RS,alphatest_fragment:LS,alphatest_pars_fragment:DS,aomap_fragment:IS,aomap_pars_fragment:OS,begin_vertex:FS,beginnormal_vertex:NS,bsdfs:zS,iridescence_fragment:US,bumpmap_pars_fragment:kS,clipping_planes_fragment:BS,clipping_planes_pars_fragment:GS,clipping_planes_pars_vertex:VS,clipping_planes_vertex:HS,color_fragment:WS,color_pars_fragment:XS,color_pars_vertex:qS,color_vertex:$S,common:YS,cube_uv_reflection_fragment:jS,defaultnormal_vertex:KS,displacementmap_pars_vertex:ZS,displacementmap_vertex:JS,emissivemap_fragment:QS,emissivemap_pars_fragment:e1,encodings_fragment:t1,encodings_pars_fragment:n1,envmap_fragment:i1,envmap_common_pars_fragment:r1,envmap_pars_fragment:s1,envmap_pars_vertex:o1,envmap_physical_pars_fragment:x1,envmap_vertex:a1,fog_vertex:l1,fog_pars_vertex:c1,fog_fragment:u1,fog_pars_fragment:f1,gradientmap_pars_fragment:h1,lightmap_fragment:d1,lightmap_pars_fragment:p1,lights_lambert_fragment:m1,lights_lambert_pars_fragment:g1,lights_pars_begin:_1,lights_toon_fragment:v1,lights_toon_pars_fragment:y1,lights_phong_fragment:b1,lights_phong_pars_fragment:M1,lights_physical_fragment:S1,lights_physical_pars_fragment:w1,lights_fragment_begin:T1,lights_fragment_maps:E1,lights_fragment_end:C1,logdepthbuf_fragment:A1,logdepthbuf_pars_fragment:P1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:L1,map_fragment:D1,map_pars_fragment:I1,map_particle_fragment:O1,map_particle_pars_fragment:F1,metalnessmap_fragment:N1,metalnessmap_pars_fragment:z1,morphcolor_vertex:U1,morphnormal_vertex:k1,morphtarget_pars_vertex:B1,morphtarget_vertex:G1,normal_fragment_begin:V1,normal_fragment_maps:H1,normal_pars_fragment:W1,normal_pars_vertex:X1,normal_vertex:q1,normalmap_pars_fragment:$1,clearcoat_normal_fragment_begin:Y1,clearcoat_normal_fragment_maps:j1,clearcoat_pars_fragment:K1,iridescence_pars_fragment:Z1,output_fragment:J1,packing:Q1,premultiplied_alpha_fragment:ew,project_vertex:tw,dithering_fragment:nw,dithering_pars_fragment:iw,roughnessmap_fragment:rw,roughnessmap_pars_fragment:sw,shadowmap_pars_fragment:ow,shadowmap_pars_vertex:aw,shadowmap_vertex:lw,shadowmask_pars_fragment:cw,skinbase_vertex:uw,skinning_pars_vertex:fw,skinning_vertex:hw,skinnormal_vertex:dw,specularmap_fragment:pw,specularmap_pars_fragment:mw,tonemapping_fragment:gw,tonemapping_pars_fragment:_w,transmission_fragment:xw,transmission_pars_fragment:vw,uv_pars_fragment:yw,uv_pars_vertex:bw,uv_vertex:Mw,uv2_pars_fragment:Sw,uv2_pars_vertex:ww,uv2_vertex:Tw,worldpos_vertex:Ew,background_vert:Cw,background_frag:Aw,backgroundCube_vert:Pw,backgroundCube_frag:Rw,cube_vert:Lw,cube_frag:Dw,depth_vert:Iw,depth_frag:Ow,distanceRGBA_vert:Fw,distanceRGBA_frag:Nw,equirect_vert:zw,equirect_frag:Uw,linedashed_vert:kw,linedashed_frag:Bw,meshbasic_vert:Gw,meshbasic_frag:Vw,meshlambert_vert:Hw,meshlambert_frag:Ww,meshmatcap_vert:Xw,meshmatcap_frag:qw,meshnormal_vert:$w,meshnormal_frag:Yw,meshphong_vert:jw,meshphong_frag:Kw,meshphysical_vert:Zw,meshphysical_frag:Jw,meshtoon_vert:Qw,meshtoon_frag:eT,points_vert:tT,points_frag:nT,shadow_vert:iT,shadow_frag:rT,sprite_vert:sT,sprite_frag:oT},Te={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new vn},uv2Transform:{value:new vn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vn}}},Ai={basic:{uniforms:fn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:fn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new gt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:fn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:fn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:fn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new gt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:fn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:fn([Te.points,Te.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:fn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:fn([Te.common,Te.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:fn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:fn([Te.sprite,Te.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new vn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:fn([Te.common,Te.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:fn([Te.lights,Te.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Ai.physical={uniforms:fn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new _t(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const wl={r:0,b:0,g:0};function aT(i,e,t,n,r,s,o){const a=new gt(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,_){let b=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const y=i.xr,S=y.getSession&&y.getSession();S&&S.environmentBlendMode==="additive"&&(v=null),v===null?d(a,l):v&&v.isColor&&(d(v,1),b=!0),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Uc)?(u===void 0&&(u=new tr(new Bo(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:Co(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==mt,(h!==v||f!==v.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new tr(new Gc(2,2),new Gr({name:"BackgroundMaterial",uniforms:Co(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Br,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==mt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function d(m,_){m.getRGB(wl,A_(i)),n.buffers.color.setClear(wl.r,wl.g,wl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(m,_=1){a.set(m),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,d(a,l)},render:g}}function lT(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function h(N,X,j,q,G){let le=!1;if(o){const D=d(q,j,X);c!==D&&(c=D,p(c.object)),le=_(N,q,j,G),le&&b(N,q,j,G)}else{const D=X.wireframe===!0;(c.geometry!==q.id||c.program!==j.id||c.wireframe!==D)&&(c.geometry=q.id,c.program=j.id,c.wireframe=D,le=!0)}G!==null&&t.update(G,34963),(le||u)&&(u=!1,x(N,X,j,q),G!==null&&i.bindBuffer(34963,t.get(G).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function d(N,X,j){const q=j.wireframe===!0;let G=a[N.id];G===void 0&&(G={},a[N.id]=G);let le=G[X.id];le===void 0&&(le={},G[X.id]=le);let D=le[q];return D===void 0&&(D=m(f()),le[q]=D),D}function m(N){const X=[],j=[],q=[];for(let G=0;G<r;G++)X[G]=0,j[G]=0,q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:j,attributeDivisors:q,object:N,attributes:{},index:null}}function _(N,X,j,q){const G=c.attributes,le=X.attributes;let D=0;const be=j.getAttributes();for(const H in be)if(be[H].location>=0){const pe=G[H];let R=le[H];if(R===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(R=N.instanceColor)),pe===void 0||pe.attribute!==R||R&&pe.data!==R.data)return!0;D++}return c.attributesNum!==D||c.index!==q}function b(N,X,j,q){const G={},le=X.attributes;let D=0;const be=j.getAttributes();for(const H in be)if(be[H].location>=0){let pe=le[H];pe===void 0&&(H==="instanceMatrix"&&N.instanceMatrix&&(pe=N.instanceMatrix),H==="instanceColor"&&N.instanceColor&&(pe=N.instanceColor));const R={};R.attribute=pe,pe&&pe.data&&(R.data=pe.data),G[H]=R,D++}c.attributes=G,c.attributesNum=D,c.index=q}function v(){const N=c.newAttributes;for(let X=0,j=N.length;X<j;X++)N[X]=0}function y(N){S(N,0)}function S(N,X){const j=c.newAttributes,q=c.enabledAttributes,G=c.attributeDivisors;j[N]=1,q[N]===0&&(i.enableVertexAttribArray(N),q[N]=1),G[N]!==X&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,X),G[N]=X)}function P(){const N=c.newAttributes,X=c.enabledAttributes;for(let j=0,q=X.length;j<q;j++)X[j]!==N[j]&&(i.disableVertexAttribArray(j),X[j]=0)}function A(N,X,j,q,G,le){n.isWebGL2===!0&&(j===5124||j===5125)?i.vertexAttribIPointer(N,X,j,G,le):i.vertexAttribPointer(N,X,j,q,G,le)}function x(N,X,j,q){if(n.isWebGL2===!1&&(N.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const G=q.attributes,le=j.getAttributes(),D=X.defaultAttributeValues;for(const be in le){const H=le[be];if(H.location>=0){let ue=G[be];if(ue===void 0&&(be==="instanceMatrix"&&N.instanceMatrix&&(ue=N.instanceMatrix),be==="instanceColor"&&N.instanceColor&&(ue=N.instanceColor)),ue!==void 0){const pe=ue.normalized,R=ue.itemSize,Y=t.get(ue);if(Y===void 0)continue;const K=Y.buffer,ae=Y.type,ge=Y.bytesPerElement;if(ue.isInterleavedBufferAttribute){const Se=ue.data,Me=Se.stride,T=ue.offset;if(Se.isInstancedInterleavedBuffer){for(let I=0;I<H.locationSize;I++)S(H.location+I,Se.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let I=0;I<H.locationSize;I++)y(H.location+I);i.bindBuffer(34962,K);for(let I=0;I<H.locationSize;I++)A(H.location+I,R/H.locationSize,ae,pe,Me*ge,(T+R/H.locationSize*I)*ge)}else{if(ue.isInstancedBufferAttribute){for(let Se=0;Se<H.locationSize;Se++)S(H.location+Se,ue.meshPerAttribute);N.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Se=0;Se<H.locationSize;Se++)y(H.location+Se);i.bindBuffer(34962,K);for(let Se=0;Se<H.locationSize;Se++)A(H.location+Se,R/H.locationSize,ae,pe,R*ge,R/H.locationSize*Se*ge)}}else if(D!==void 0){const pe=D[be];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(H.location,pe);break;case 3:i.vertexAttrib3fv(H.location,pe);break;case 4:i.vertexAttrib4fv(H.location,pe);break;default:i.vertexAttrib1fv(H.location,pe)}}}}P()}function w(){O();for(const N in a){const X=a[N];for(const j in X){const q=X[j];for(const G in q)g(q[G].object),delete q[G];delete X[j]}delete a[N]}}function L(N){if(a[N.id]===void 0)return;const X=a[N.id];for(const j in X){const q=X[j];for(const G in q)g(q[G].object),delete q[G];delete X[j]}delete a[N.id]}function W(N){for(const X in a){const j=a[X];if(j[N.id]===void 0)continue;const q=j[N.id];for(const G in q)g(q[G].object),delete q[G];delete j[N.id]}}function O(){U(),u=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:U,dispose:w,releaseStatesOfGeometry:L,releaseStatesOfProgram:W,initAttributes:v,enableAttribute:y,disableUnusedAttributes:P}}function cT(i,e,t,n){const r=n.isWebGL2;let s;function o(c){s=c}function a(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=o,this.render=a,this.renderInstances=l}function uT(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(34930),f=i.getParameter(35660),p=i.getParameter(3379),g=i.getParameter(34076),d=i.getParameter(34921),m=i.getParameter(36347),_=i.getParameter(36348),b=i.getParameter(36349),v=f>0,y=o||e.has("OES_texture_float"),S=v&&y,P=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:P}}function fT(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new is,a=new vn,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,d=h.clipIntersection,m=h.clipShadows,_=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const b=s?0:n,v=b*4;let y=_.clippingState||null;l.value=y,y=u(g,f,v,p);for(let S=0;S!==v;++S)y[S]=t[S];_.clippingState=y,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const d=h!==null?h.length:0;let m=null;if(d!==0){if(m=l.value,g!==!0||m===null){const _=p+d*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,y=p;v!==d;++v,y+=4)o.copy(h[v]).applyMatrix4(b,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,m}}function hT(i){let e=new WeakMap;function t(o,a){return a===bf?o.mapping=wo:a===Mf&&(o.mapping=To),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===bf||a===Mf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new TS(l.height/2);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class dT extends P_{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const to=4,Hp=[.125,.215,.35,.446,.526,.582],us=20,Fu=new dT,Wp=new gt;let Nu=null;const rs=(1+Math.sqrt(5))/2,qs=1/rs,Xp=[new Z(1,1,1),new Z(-1,1,1),new Z(1,1,-1),new Z(-1,1,-1),new Z(0,rs,qs),new Z(0,rs,-qs),new Z(qs,0,rs),new Z(-qs,0,rs),new Z(rs,qs,0),new Z(-rs,qs,0)];class qp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Nu=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Nu),e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wo||e.mapping===To?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nu=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Oa,format:gi,encoding:Ts,depthBuffer:!1},r=$p(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$p(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pT(s)),this._blurMaterial=mT(s,e,t)}return r}_compileMaterial(e){const t=new tr(this._lodPlanes[0],e);this._renderer.compile(t,Fu)}_sceneToCubeUV(e,t,n,r){const a=new Jn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Wp),u.toneMapping=ir,u.autoClear=!1;const p=new T_({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),g=new tr(new Bo,p);let d=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,d=!0):(p.color.copy(Wp),d=!0);for(let _=0;_<6;_++){const b=_%3;b===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):b===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const v=this._cubeSize;Tl(r,b*v,_>2?v:0,v,v),u.setRenderTarget(r),d&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===wo||e.mapping===To;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=jp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new tr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Tl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Fu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Xp[(r-1)%Xp.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new tr(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*us-1),d=s/g,m=isFinite(s)?1+Math.floor(u*d):us;m>us&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${us}`);const _=[];let b=0;for(let A=0;A<us;++A){const x=A/d,w=Math.exp(-x*x/2);_.push(w),A===0?b+=w:A<m&&(b+=2*w)}for(let A=0;A<_.length;A++)_[A]=_[A]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=_,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;const y=this._sizeLods[r],S=3*y*(r>v-to?r-v+to:0),P=4*(this._cubeSize-y);Tl(t,S,P,3*y,2*y),l.setRenderTarget(t),l.render(h,Fu)}}function pT(i){const e=[],t=[],n=[];let r=i;const s=i-to+1+Hp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-to?l=Hp[o-i+to-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,d=3,m=2,_=1,b=new Float32Array(d*g*p),v=new Float32Array(m*g*p),y=new Float32Array(_*g*p);for(let P=0;P<p;P++){const A=P%3*2/3-1,x=P>2?0:-1,w=[A,x,0,A+2/3,x,0,A+2/3,x+1,0,A,x,0,A+2/3,x+1,0,A,x+1,0];b.set(w,d*g*P),v.set(f,m*g*P);const L=[P,P,P,P,P,P];y.set(L,_*g*P)}const S=new ur;S.setAttribute("position",new Ni(b,d)),S.setAttribute("uv",new Ni(v,m)),S.setAttribute("faceIndex",new Ni(y,_)),e.push(S),r>to&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $p(i,e,t){const n=new Es(i,e,t);return n.texture.mapping=Uc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function mT(i,e,t){const n=new Float32Array(us),r=new Z(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Yp(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ph(),fragmentShader:`

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
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function jp(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ir,depthTest:!1,depthWrite:!1})}function Ph(){return`

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
	`}function gT(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===bf||l===Mf,u=l===wo||l===To;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new qp(i)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new qp(i));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function _T(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function xT(i,e,t,n){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],34962);const p=h.morphAttributes;for(const g in p){const d=p[g];for(let m=0,_=d.length;m<_;m++)e.update(d[m],34962)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let d=0;if(p!==null){const b=p.array;d=p.version;for(let v=0,y=b.length;v<y;v+=3){const S=b[v+0],P=b[v+1],A=b[v+2];f.push(S,P,P,A,A,S)}}else{const b=g.array;d=g.version;for(let v=0,y=b.length/3-1;v<y;v+=3){const S=v+0,P=v+1,A=v+2;f.push(S,P,P,A,A,S)}}const m=new(x_(f)?C_:E_)(f,1);m.version=d;const _=s.get(h);_&&e.remove(_),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function vT(i,e,t,n){const r=n.isWebGL2;let s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(s,p,a,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let d,m;if(r)d=i,m="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](s,p,a,f*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h}function yT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function bT(i,e){return i[0]-e[0]}function MT(i,e){return Math.abs(e[1])-Math.abs(i[1])}function ST(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,d=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==d){let X=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",X)};var p=X;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,P=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],x=u.morphAttributes.color||[];let w=0;v===!0&&(w=1),y===!0&&(w=2),S===!0&&(w=3);let L=u.attributes.position.count*w,W=1;L>e.maxTextureSize&&(W=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const O=new Float32Array(L*W*4*d),U=new b_(O,L,W,d);U.type=hs,U.needsUpdate=!0;const N=w*4;for(let j=0;j<d;j++){const q=P[j],G=A[j],le=x[j],D=L*W*4*j;for(let be=0;be<q.count;be++){const H=be*N;v===!0&&(o.fromBufferAttribute(q,be),O[D+H+0]=o.x,O[D+H+1]=o.y,O[D+H+2]=o.z,O[D+H+3]=0),y===!0&&(o.fromBufferAttribute(G,be),O[D+H+4]=o.x,O[D+H+5]=o.y,O[D+H+6]=o.z,O[D+H+7]=0),S===!0&&(o.fromBufferAttribute(le,be),O[D+H+8]=o.x,O[D+H+9]=o.y,O[D+H+10]=o.z,O[D+H+11]=le.itemSize===4?o.w:1)}}m={count:d,texture:U,size:new _t(L,W)},s.set(u,m),u.addEventListener("dispose",X)}let _=0;for(let v=0;v<f.length;v++)_+=f[v];const b=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",b),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let d=n[u.id];if(d===void 0||d.length!==g){d=[];for(let y=0;y<g;y++)d[y]=[y,0];n[u.id]=d}for(let y=0;y<g;y++){const S=d[y];S[0]=y,S[1]=f[y]}d.sort(MT);for(let y=0;y<8;y++)y<g&&d[y][1]?(a[y][0]=d[y][0],a[y][1]=d[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(bT);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let b=0;for(let y=0;y<8;y++){const S=a[y],P=S[0],A=S[1];P!==Number.MAX_SAFE_INTEGER&&A?(m&&u.getAttribute("morphTarget"+y)!==m[P]&&u.setAttribute("morphTarget"+y,m[P]),_&&u.getAttribute("morphNormal"+y)!==_[P]&&u.setAttribute("morphNormal"+y,_[P]),r[y]=A,b+=A):(m&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const v=u.morphTargetsRelative?1:1-b;h.getUniforms().setValue(i,"morphTargetBaseInfluence",v),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function wT(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);return r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const I_=new Wn,O_=new b_,F_=new cS,N_=new R_,Kp=[],Zp=[],Jp=new Float32Array(16),Qp=new Float32Array(9),em=new Float32Array(4);function Go(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Kp[r];if(s===void 0&&(s=new Float32Array(r),Kp[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vc(i,e){let t=Zp[e];t===void 0&&(t=new Int32Array(e),Zp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function TT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ET(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function CT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ut(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function AT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function PT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,n))return;em.set(n),i.uniformMatrix2fv(this.addr,!1,em),kt(t,n)}}function RT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,n))return;Qp.set(n),i.uniformMatrix3fv(this.addr,!1,Qp),kt(t,n)}}function LT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ut(t,n))return;Jp.set(n),i.uniformMatrix4fv(this.addr,!1,Jp),kt(t,n)}}function DT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function IT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function OT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function FT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function NT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ut(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function UT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ut(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function kT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ut(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function BT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||I_,r)}function GT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||F_,r)}function VT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||N_,r)}function HT(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||O_,r)}function WT(i){switch(i){case 5126:return TT;case 35664:return ET;case 35665:return CT;case 35666:return AT;case 35674:return PT;case 35675:return RT;case 35676:return LT;case 5124:case 35670:return DT;case 35667:case 35671:return IT;case 35668:case 35672:return OT;case 35669:case 35673:return FT;case 5125:return NT;case 36294:return zT;case 36295:return UT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return BT;case 35679:case 36299:case 36307:return GT;case 35680:case 36300:case 36308:case 36293:return VT;case 36289:case 36303:case 36311:case 36292:return HT}}function XT(i,e){i.uniform1fv(this.addr,e)}function qT(i,e){const t=Go(e,this.size,2);i.uniform2fv(this.addr,t)}function $T(i,e){const t=Go(e,this.size,3);i.uniform3fv(this.addr,t)}function YT(i,e){const t=Go(e,this.size,4);i.uniform4fv(this.addr,t)}function jT(i,e){const t=Go(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function KT(i,e){const t=Go(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function ZT(i,e){const t=Go(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function JT(i,e){i.uniform1iv(this.addr,e)}function QT(i,e){i.uniform2iv(this.addr,e)}function eE(i,e){i.uniform3iv(this.addr,e)}function tE(i,e){i.uniform4iv(this.addr,e)}function nE(i,e){i.uniform1uiv(this.addr,e)}function iE(i,e){i.uniform2uiv(this.addr,e)}function rE(i,e){i.uniform3uiv(this.addr,e)}function sE(i,e){i.uniform4uiv(this.addr,e)}function oE(i,e,t){const n=this.cache,r=e.length,s=Vc(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||I_,s[o])}function aE(i,e,t){const n=this.cache,r=e.length,s=Vc(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||F_,s[o])}function lE(i,e,t){const n=this.cache,r=e.length,s=Vc(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||N_,s[o])}function cE(i,e,t){const n=this.cache,r=e.length,s=Vc(t,r);Ut(n,s)||(i.uniform1iv(this.addr,s),kt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||O_,s[o])}function uE(i){switch(i){case 5126:return XT;case 35664:return qT;case 35665:return $T;case 35666:return YT;case 35674:return jT;case 35675:return KT;case 35676:return ZT;case 5124:case 35670:return JT;case 35667:case 35671:return QT;case 35668:case 35672:return eE;case 35669:case 35673:return tE;case 5125:return nE;case 36294:return iE;case 36295:return rE;case 36296:return sE;case 35678:case 36198:case 36298:case 36306:case 35682:return oE;case 35679:case 36299:case 36307:return aE;case 35680:case 36300:case 36308:case 36293:return lE;case 36289:case 36303:case 36311:case 36292:return cE}}class fE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=WT(t.type)}}class hE{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=uE(t.type)}}class dE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const zu=/(\w+)(\])?(\[|\.)?/g;function tm(i,e){i.seq.push(e),i.map[e.id]=e}function pE(i,e,t){const n=i.name,r=n.length;for(zu.lastIndex=0;;){const s=zu.exec(n),o=zu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){tm(t,c===void 0?new fE(a,i,e):new hE(a,i,e));break}else{let h=t.map[a];h===void 0&&(h=new dE(a),tm(t,h)),t=h}}}class jl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);pE(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function nm(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let mE=0;function gE(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function _E(i){switch(i){case Ts:return["Linear","( value )"];case mt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function im(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+gE(i.getShaderSource(e),o)}else return r}function xE(i,e){const t=_E(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function vE(i,e){let t;switch(e){case AM:t="Linear";break;case PM:t="Reinhard";break;case RM:t="OptimizedCineon";break;case LM:t="ACESFilmic";break;case DM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function yE(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ia).join(`
`)}function bE(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ME(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ia(i){return i!==""}function rm(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ef(i){return i.replace(SE,wE)}function wE(i,e){const t=Ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ef(t)}const TE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(i){return i.replace(TE,EE)}function EE(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function am(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CE(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===f_?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===oM?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===na&&(e="SHADOWMAP_TYPE_VSM"),e}function AE(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wo:case To:e="ENVMAP_TYPE_CUBE";break;case Uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PE(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case To:e="ENVMAP_MODE_REFRACTION";break}return e}function RE(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case p_:e="ENVMAP_BLENDING_MULTIPLY";break;case EM:e="ENVMAP_BLENDING_MIX";break;case CM:e="ENVMAP_BLENDING_ADD";break}return e}function LE(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function DE(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=CE(t),c=AE(t),u=PE(t),h=RE(t),f=LE(t),p=t.isWebGL2?"":yE(t),g=bE(s),d=r.createProgram();let m,_,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(ia).join(`
`),m.length>0&&(m+=`
`),_=[p,g].filter(ia).join(`
`),_.length>0&&(_+=`
`)):(m=[am(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),_=[p,am(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?Ke.tonemapping_pars_fragment:"",t.toneMapping!==ir?vE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.encodings_pars_fragment,xE("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ia).join(`
`)),o=Ef(o),o=rm(o,t),o=sm(o,t),a=Ef(a),a=rm(a,t),a=sm(a,t),o=om(o),a=om(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===Pp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=b+m+o,y=b+_+a,S=nm(r,35633,v),P=nm(r,35632,y);if(r.attachShader(d,S),r.attachShader(d,P),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),i.debug.checkShaderErrors){const w=r.getProgramInfoLog(d).trim(),L=r.getShaderInfoLog(S).trim(),W=r.getShaderInfoLog(P).trim();let O=!0,U=!0;if(r.getProgramParameter(d,35714)===!1){O=!1;const N=im(r,S,"vertex"),X=im(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+w+`
`+N+`
`+X)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(L===""||W==="")&&(U=!1);U&&(this.diagnostics={runnable:O,programLog:w,vertexShader:{log:L,prefix:m},fragmentShader:{log:W,prefix:_}})}r.deleteShader(S),r.deleteShader(P);let A;this.getUniforms=function(){return A===void 0&&(A=new jl(r,d)),A};let x;return this.getAttributes=function(){return x===void 0&&(x=ME(r,d)),x},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=mE++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=S,this.fragmentShader=P,this}let IE=0;class OE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new FE(e),t.set(e,n)),n}}class FE{constructor(e){this.id=IE++,this.code=e,this.usedTimes=0}}function NE(i,e,t,n,r,s,o){const a=new S_,l=new OE,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(x,w,L,W,O){const U=W.fog,N=O.geometry,X=x.isMeshStandardMaterial?W.environment:null,j=(x.isMeshStandardMaterial?t:e).get(x.envMap||X),q=j&&j.mapping===Uc?j.image.height:null,G=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const le=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,D=le!==void 0?le.length:0;let be=0;N.morphAttributes.position!==void 0&&(be=1),N.morphAttributes.normal!==void 0&&(be=2),N.morphAttributes.color!==void 0&&(be=3);let H,ue,pe,R;if(G){const Me=Ai[G];H=Me.vertexShader,ue=Me.fragmentShader}else H=x.vertexShader,ue=x.fragmentShader,l.update(x),pe=l.getVertexShaderID(x),R=l.getFragmentShaderID(x);const Y=i.getRenderTarget(),K=x.alphaTest>0,ae=x.clearcoat>0,ge=x.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:x.type,vertexShader:H,fragmentShader:ue,defines:x.defines,customVertexShaderID:pe,customFragmentShaderID:R,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:f,outputEncoding:Y===null?i.outputEncoding:Y.isXRRenderTarget===!0?Y.texture.encoding:Ts,map:!!x.map,matcap:!!x.matcap,envMap:!!j,envMapMode:j&&j.mapping,envMapCubeUVHeight:q,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===JM,tangentSpaceNormalMap:x.normalMapType===ZM,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===mt,clearcoat:ae,clearcoatMap:ae&&!!x.clearcoatMap,clearcoatRoughnessMap:ae&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:ae&&!!x.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!x.iridescenceMap,iridescenceThicknessMap:ge&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===uo,alphaMap:!!x.alphaMap,alphaTest:K,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!N.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!U,useFog:x.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:be,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:x.toneMapped?i.toneMapping:ir,useLegacyLights:i.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Sr,flipSided:x.side===Hn,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)w.push(L),w.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(_(w,x),b(w,x),w.push(i.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function b(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),x.push(a.mask)}function v(x){const w=g[x.type];let L;if(w){const W=Ai[w];L=bS.clone(W.uniforms)}else L=x.uniforms;return L}function y(x,w){let L;for(let W=0,O=c.length;W<O;W++){const U=c[W];if(U.cacheKey===w){L=U,++L.usedTimes;break}}return L===void 0&&(L=new DE(i,w,x,s),c.push(L)),L}function S(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function P(x){l.remove(x)}function A(){l.dispose()}return{getParameters:d,getProgramCacheKey:m,getUniforms:v,acquireProgram:y,releaseProgram:S,releaseShaderCache:P,programs:c,dispose:A}}function zE(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function UE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function lm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function cm(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(h,f,p,g,d,m){let _=i[e];return _===void 0?(_={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:d,group:m},i[e]=_):(_.id=h.id,_.object=h,_.geometry=f,_.material=p,_.groupOrder=g,_.renderOrder=h.renderOrder,_.z=d,_.group=m),e++,_}function a(h,f,p,g,d,m){const _=o(h,f,p,g,d,m);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):t.push(_)}function l(h,f,p,g,d,m){const _=o(h,f,p,g,d,m);p.transmission>0?n.unshift(_):p.transparent===!0?r.unshift(_):t.unshift(_)}function c(h,f){t.length>1&&t.sort(h||UE),n.length>1&&n.sort(f||lm),r.length>1&&r.sort(f||lm)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function kE(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new cm,i.set(n,[o])):r>=s.length?(o=new cm,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function BE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new gt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new gt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":t={color:new gt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function GE(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let VE=0;function HE(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function WE(i,e){const t=new BE,n=GE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new Z);const s=new Z,o=new Wt,a=new Wt;function l(u,h){let f=0,p=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let d=0,m=0,_=0,b=0,v=0,y=0,S=0,P=0,A=0,x=0;u.sort(HE);const w=h===!0?Math.PI:1;for(let W=0,O=u.length;W<O;W++){const U=u[W],N=U.color,X=U.intensity,j=U.distance,q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=N.r*X*w,p+=N.g*X*w,g+=N.b*X*w;else if(U.isLightProbe)for(let G=0;G<9;G++)r.probe[G].addScaledVector(U.sh.coefficients[G],X);else if(U.isDirectionalLight){const G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*w),U.castShadow){const le=U.shadow,D=n.get(U);D.shadowBias=le.bias,D.shadowNormalBias=le.normalBias,D.shadowRadius=le.radius,D.shadowMapSize=le.mapSize,r.directionalShadow[d]=D,r.directionalShadowMap[d]=q,r.directionalShadowMatrix[d]=U.shadow.matrix,y++}r.directional[d]=G,d++}else if(U.isSpotLight){const G=t.get(U);G.position.setFromMatrixPosition(U.matrixWorld),G.color.copy(N).multiplyScalar(X*w),G.distance=j,G.coneCos=Math.cos(U.angle),G.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),G.decay=U.decay,r.spot[_]=G;const le=U.shadow;if(U.map&&(r.spotLightMap[A]=U.map,A++,le.updateMatrices(U),U.castShadow&&x++),r.spotLightMatrix[_]=le.matrix,U.castShadow){const D=n.get(U);D.shadowBias=le.bias,D.shadowNormalBias=le.normalBias,D.shadowRadius=le.radius,D.shadowMapSize=le.mapSize,r.spotShadow[_]=D,r.spotShadowMap[_]=q,P++}_++}else if(U.isRectAreaLight){const G=t.get(U);G.color.copy(N).multiplyScalar(X),G.halfWidth.set(U.width*.5,0,0),G.halfHeight.set(0,U.height*.5,0),r.rectArea[b]=G,b++}else if(U.isPointLight){const G=t.get(U);if(G.color.copy(U.color).multiplyScalar(U.intensity*w),G.distance=U.distance,G.decay=U.decay,U.castShadow){const le=U.shadow,D=n.get(U);D.shadowBias=le.bias,D.shadowNormalBias=le.normalBias,D.shadowRadius=le.radius,D.shadowMapSize=le.mapSize,D.shadowCameraNear=le.camera.near,D.shadowCameraFar=le.camera.far,r.pointShadow[m]=D,r.pointShadowMap[m]=q,r.pointShadowMatrix[m]=U.shadow.matrix,S++}r.point[m]=G,m++}else if(U.isHemisphereLight){const G=t.get(U);G.skyColor.copy(U.color).multiplyScalar(X*w),G.groundColor.copy(U.groundColor).multiplyScalar(X*w),r.hemi[v]=G,v++}}b>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const L=r.hash;(L.directionalLength!==d||L.pointLength!==m||L.spotLength!==_||L.rectAreaLength!==b||L.hemiLength!==v||L.numDirectionalShadows!==y||L.numPointShadows!==S||L.numSpotShadows!==P||L.numSpotMaps!==A)&&(r.directional.length=d,r.spot.length=_,r.rectArea.length=b,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=P+A-x,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=x,L.directionalLength=d,L.pointLength=m,L.spotLength=_,L.rectAreaLength=b,L.hemiLength=v,L.numDirectionalShadows=y,L.numPointShadows=S,L.numSpotShadows=P,L.numSpotMaps=A,r.version=VE++)}function c(u,h){let f=0,p=0,g=0,d=0,m=0;const _=h.matrixWorldInverse;for(let b=0,v=u.length;b<v;b++){const y=u[b];if(y.isDirectionalLight){const S=r.directional[f];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),f++}else if(y.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),g++}else if(y.isRectAreaLight){const S=r.rectArea[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),a.identity(),o.copy(y.matrixWorld),o.premultiply(_),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),d++}else if(y.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(_),p++}else if(y.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:r}}function um(i,e){const t=new WE(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(h){n.push(h)}function a(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function XE(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new um(i,e),t.set(s,[l])):o>=a.length?(l=new um(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class qE extends Za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $E extends Za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Z,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const YE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jE=`uniform sampler2D shadow_pass;
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
}`;function KE(i,e,t){let n=new L_;const r=new _t,s=new _t,o=new Yt,a=new qE({depthPacking:KM}),l=new $E,c={},u=t.maxTextureSize,h={[Br]:Hn,[Hn]:Br,[Sr]:Sr},f=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:YE,fragmentShader:jE}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ur;g.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new tr(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f_,this.render=function(y,S,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;const A=i.getRenderTarget(),x=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ir),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);for(let W=0,O=y.length;W<O;W++){const U=y[W],N=U.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const X=N.getFrameExtents();if(r.multiply(X),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/X.x),r.x=s.x*X.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/X.y),r.y=s.y*X.y,N.mapSize.y=s.y)),N.map===null){const q=this.type!==na?{minFilter:dn,magFilter:dn}:{};N.map=new Es(r.x,r.y,q),N.map.texture.name=U.name+".shadowMap",N.camera.updateProjectionMatrix()}i.setRenderTarget(N.map),i.clear();const j=N.getViewportCount();for(let q=0;q<j;q++){const G=N.getViewport(q);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),L.viewport(o),N.updateMatrices(U,q),n=N.getFrustum(),v(S,P,N.camera,U,this.type)}N.isPointLightShadow!==!0&&this.type===na&&_(N,P),N.needsUpdate=!1}m.needsUpdate=!1,i.setRenderTarget(A,x,w)};function _(y,S){const P=e.update(d);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new Es(r.x,r.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(S,null,P,f,d,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(S,null,P,p,d,null)}function b(y,S,P,A,x,w){let L=null;const W=P.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(W!==void 0)L=W;else if(L=P.isPointLight===!0?l:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const O=L.uuid,U=S.uuid;let N=c[O];N===void 0&&(N={},c[O]=N);let X=N[U];X===void 0&&(X=L.clone(),N[U]=X),L=X}return L.visible=S.visible,L.wireframe=S.wireframe,w===na?L.side=S.shadowSide!==null?S.shadowSide:S.side:L.side=S.shadowSide!==null?S.shadowSide:h[S.side],L.alphaMap=S.alphaMap,L.alphaTest=S.alphaTest,L.map=S.map,L.clipShadows=S.clipShadows,L.clippingPlanes=S.clippingPlanes,L.clipIntersection=S.clipIntersection,L.displacementMap=S.displacementMap,L.displacementScale=S.displacementScale,L.displacementBias=S.displacementBias,L.wireframeLinewidth=S.wireframeLinewidth,L.linewidth=S.linewidth,P.isPointLight===!0&&L.isMeshDistanceMaterial===!0&&(L.referencePosition.setFromMatrixPosition(P.matrixWorld),L.nearDistance=A,L.farDistance=x),L}function v(y,S,P,A,x){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&x===na)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,y.matrixWorld);const W=e.update(y),O=y.material;if(Array.isArray(O)){const U=W.groups;for(let N=0,X=U.length;N<X;N++){const j=U[N],q=O[j.materialIndex];if(q&&q.visible){const G=b(y,q,A,P.near,P.far,x);i.renderBufferDirect(P,null,W,G,y,j)}}}else if(O.visible){const U=b(y,O,A,P.near,P.far,x);i.renderBufferDirect(P,null,W,U,y,null)}}const L=y.children;for(let W=0,O=L.length;W<O;W++)v(L[W],S,P,A,x)}}function ZE(i,e,t){const n=t.isWebGL2;function r(){let z=!1;const oe=new Yt;let he=null;const we=new Yt(0,0,0,0);return{setMask:function(Pe){he!==Pe&&!z&&(i.colorMask(Pe,Pe,Pe,Pe),he=Pe)},setLocked:function(Pe){z=Pe},setClear:function(Pe,st,ut,Et,Ve){Ve===!0&&(Pe*=Et,st*=Et,ut*=Et),oe.set(Pe,st,ut,Et),we.equals(oe)===!1&&(i.clearColor(Pe,st,ut,Et),we.copy(oe))},reset:function(){z=!1,he=null,we.set(-1,0,0,0)}}}function s(){let z=!1,oe=null,he=null,we=null;return{setTest:function(Pe){Pe?K(2929):ae(2929)},setMask:function(Pe){oe!==Pe&&!z&&(i.depthMask(Pe),oe=Pe)},setFunc:function(Pe){if(he!==Pe){switch(Pe){case vM:i.depthFunc(512);break;case yM:i.depthFunc(519);break;case bM:i.depthFunc(513);break;case yf:i.depthFunc(515);break;case MM:i.depthFunc(514);break;case SM:i.depthFunc(518);break;case wM:i.depthFunc(516);break;case TM:i.depthFunc(517);break;default:i.depthFunc(515)}he=Pe}},setLocked:function(Pe){z=Pe},setClear:function(Pe){we!==Pe&&(i.clearDepth(Pe),we=Pe)},reset:function(){z=!1,oe=null,he=null,we=null}}}function o(){let z=!1,oe=null,he=null,we=null,Pe=null,st=null,ut=null,Et=null,Ve=null;return{setTest:function(Ae){z||(Ae?K(2960):ae(2960))},setMask:function(Ae){oe!==Ae&&!z&&(i.stencilMask(Ae),oe=Ae)},setFunc:function(Ae,_e,Ie){(he!==Ae||we!==_e||Pe!==Ie)&&(i.stencilFunc(Ae,_e,Ie),he=Ae,we=_e,Pe=Ie)},setOp:function(Ae,_e,Ie){(st!==Ae||ut!==_e||Et!==Ie)&&(i.stencilOp(Ae,_e,Ie),st=Ae,ut=_e,Et=Ie)},setLocked:function(Ae){z=Ae},setClear:function(Ae){Ve!==Ae&&(i.clearStencil(Ae),Ve=Ae)},reset:function(){z=!1,oe=null,he=null,we=null,Pe=null,st=null,ut=null,Et=null,Ve=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,d=[],m=null,_=!1,b=null,v=null,y=null,S=null,P=null,A=null,x=null,w=!1,L=null,W=null,O=null,U=null,N=null;const X=i.getParameter(35661);let j=!1,q=0;const G=i.getParameter(7938);G.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(G)[1]),j=q>=1):G.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),j=q>=2);let le=null,D={};const be=i.getParameter(3088),H=i.getParameter(2978),ue=new Yt().fromArray(be),pe=new Yt().fromArray(H);function R(z,oe,he){const we=new Uint8Array(4),Pe=i.createTexture();i.bindTexture(z,Pe),i.texParameteri(z,10241,9728),i.texParameteri(z,10240,9728);for(let st=0;st<he;st++)i.texImage2D(oe+st,0,6408,1,1,0,6408,5121,we);return Pe}const Y={};Y[3553]=R(3553,3553,1),Y[34067]=R(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),K(2929),l.setFunc(yf),se(!1),F(Jd),K(2884),$(Ir);function K(z){f[z]!==!0&&(i.enable(z),f[z]=!0)}function ae(z){f[z]!==!1&&(i.disable(z),f[z]=!1)}function ge(z,oe){return p[z]!==oe?(i.bindFramebuffer(z,oe),p[z]=oe,n&&(z===36009&&(p[36160]=oe),z===36160&&(p[36009]=oe)),!0):!1}function Se(z,oe){let he=d,we=!1;if(z)if(he=g.get(oe),he===void 0&&(he=[],g.set(oe,he)),z.isWebGLMultipleRenderTargets){const Pe=z.texture;if(he.length!==Pe.length||he[0]!==36064){for(let st=0,ut=Pe.length;st<ut;st++)he[st]=36064+st;he.length=Pe.length,we=!0}}else he[0]!==36064&&(he[0]=36064,we=!0);else he[0]!==1029&&(he[0]=1029,we=!0);we&&(t.isWebGL2?i.drawBuffers(he):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(he))}function Me(z){return m!==z?(i.useProgram(z),m=z,!0):!1}const T={[Zs]:32774,[lM]:32778,[cM]:32779};if(n)T[np]=32775,T[ip]=32776;else{const z=e.get("EXT_blend_minmax");z!==null&&(T[np]=z.MIN_EXT,T[ip]=z.MAX_EXT)}const I={[uM]:0,[fM]:1,[hM]:768,[h_]:770,[xM]:776,[gM]:774,[pM]:772,[dM]:769,[d_]:771,[_M]:775,[mM]:773};function $(z,oe,he,we,Pe,st,ut,Et){if(z===Ir){_===!0&&(ae(3042),_=!1);return}if(_===!1&&(K(3042),_=!0),z!==aM){if(z!==b||Et!==w){if((v!==Zs||P!==Zs)&&(i.blendEquation(32774),v=Zs,P=Zs),Et)switch(z){case uo:i.blendFuncSeparate(1,771,1,771);break;case Qd:i.blendFunc(1,1);break;case ep:i.blendFuncSeparate(0,769,0,1);break;case tp:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case uo:i.blendFuncSeparate(770,771,1,771);break;case Qd:i.blendFunc(770,1);break;case ep:i.blendFuncSeparate(0,769,0,1);break;case tp:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,S=null,A=null,x=null,b=z,w=Et}return}Pe=Pe||oe,st=st||he,ut=ut||we,(oe!==v||Pe!==P)&&(i.blendEquationSeparate(T[oe],T[Pe]),v=oe,P=Pe),(he!==y||we!==S||st!==A||ut!==x)&&(i.blendFuncSeparate(I[he],I[we],I[st],I[ut]),y=he,S=we,A=st,x=ut),b=z,w=!1}function Q(z,oe){z.side===Sr?ae(2884):K(2884);let he=z.side===Hn;oe&&(he=!he),se(he),z.blending===uo&&z.transparent===!1?$(Ir):$(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),l.setFunc(z.depthFunc),l.setTest(z.depthTest),l.setMask(z.depthWrite),a.setMask(z.colorWrite);const we=z.stencilWrite;c.setTest(we),we&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),re(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?K(32926):ae(32926)}function se(z){L!==z&&(z?i.frontFace(2304):i.frontFace(2305),L=z)}function F(z){z!==rM?(K(2884),z!==W&&(z===Jd?i.cullFace(1029):z===sM?i.cullFace(1028):i.cullFace(1032))):ae(2884),W=z}function de(z){z!==O&&(j&&i.lineWidth(z),O=z)}function re(z,oe,he){z?(K(32823),(U!==oe||N!==he)&&(i.polygonOffset(oe,he),U=oe,N=he)):ae(32823)}function xe(z){z?K(3089):ae(3089)}function ce(z){z===void 0&&(z=33984+X-1),le!==z&&(i.activeTexture(z),le=z)}function E(z,oe,he){he===void 0&&(le===null?he=33984+X-1:he=le);let we=D[he];we===void 0&&(we={type:void 0,texture:void 0},D[he]=we),(we.type!==z||we.texture!==oe)&&(le!==he&&(i.activeTexture(he),le=he),i.bindTexture(z,oe||Y[z]),we.type=z,we.texture=oe)}function M(){const z=D[le];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function k(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ee(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ve(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Re(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Oe(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ne(z){ue.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),ue.copy(z))}function Ce(z){pe.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),pe.copy(z))}function He(z,oe){let he=h.get(oe);he===void 0&&(he=new WeakMap,h.set(oe,he));let we=he.get(z);we===void 0&&(we=i.getUniformBlockIndex(oe,z.name),he.set(z,we))}function De(z,oe){const we=h.get(oe).get(z);u.get(oe)!==we&&(i.uniformBlockBinding(oe,we,z.__bindingPointIndex),u.set(oe,we))}function ct(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},le=null,D={},p={},g=new WeakMap,d=[],m=null,_=!1,b=null,v=null,y=null,S=null,P=null,A=null,x=null,w=!1,L=null,W=null,O=null,U=null,N=null,ue.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:K,disable:ae,bindFramebuffer:ge,drawBuffers:Se,useProgram:Me,setBlending:$,setMaterial:Q,setFlipSided:se,setCullFace:F,setLineWidth:de,setPolygonOffset:re,setScissorTest:xe,activeTexture:ce,bindTexture:E,unbindTexture:M,compressedTexImage2D:k,compressedTexImage3D:ie,texImage2D:Re,texImage3D:Oe,updateUBOMapping:He,uniformBlockBinding:De,texStorage2D:ne,texStorage3D:Le,texSubImage2D:ee,texSubImage3D:fe,compressedTexSubImage2D:ve,compressedTexSubImage3D:ye,scissor:Ne,viewport:Ce,reset:ct}}function JE(i,e,t,n,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let d;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(E,M){return _?new OffscreenCanvas(E,M):hc("canvas")}function v(E,M,k,ie){let ee=1;if((E.width>ie||E.height>ie)&&(ee=ie/Math.max(E.width,E.height)),ee<1||M===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){const fe=M?tS:Math.floor,ve=fe(ee*E.width),ye=fe(ee*E.height);d===void 0&&(d=b(ve,ye));const ne=k?b(ve,ye):d;return ne.width=ve,ne.height=ye,ne.getContext("2d").drawImage(E,0,0,ve,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+ve+"x"+ye+")."),ne}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return Lp(E.width)&&Lp(E.height)}function S(E){return a?!1:E.wrapS!==mi||E.wrapT!==mi||E.minFilter!==dn&&E.minFilter!==Zn}function P(E,M){return E.generateMipmaps&&M&&E.minFilter!==dn&&E.minFilter!==Zn}function A(E){i.generateMipmap(E)}function x(E,M,k,ie,ee=!1){if(a===!1)return M;if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let fe=M;return M===6403&&(k===5126&&(fe=33326),k===5131&&(fe=33325),k===5121&&(fe=33321)),M===33319&&(k===5126&&(fe=33328),k===5131&&(fe=33327),k===5121&&(fe=33323)),M===6408&&(k===5126&&(fe=34836),k===5131&&(fe=34842),k===5121&&(fe=ie===mt&&ee===!1?35907:32856),k===32819&&(fe=32854),k===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function w(E,M,k){return P(E,k)===!0||E.isFramebufferTexture&&E.minFilter!==dn&&E.minFilter!==Zn?Math.log2(Math.max(M.width,M.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?M.mipmaps.length:1}function L(E){return E===dn||E===rp||E===lu?9728:9729}function W(E){const M=E.target;M.removeEventListener("dispose",W),U(M),M.isVideoTexture&&g.delete(M)}function O(E){const M=E.target;M.removeEventListener("dispose",O),X(M)}function U(E){const M=n.get(E);if(M.__webglInit===void 0)return;const k=E.source,ie=m.get(k);if(ie){const ee=ie[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&N(E),Object.keys(ie).length===0&&m.delete(k)}n.remove(E)}function N(E){const M=n.get(E);i.deleteTexture(M.__webglTexture);const k=E.source,ie=m.get(k);delete ie[M.__cacheKey],o.memory.textures--}function X(E){const M=E.texture,k=n.get(E),ie=n.get(M);if(ie.__webglTexture!==void 0&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++)i.deleteFramebuffer(k.__webglFramebuffer[ee]),k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer[ee]);else{if(i.deleteFramebuffer(k.__webglFramebuffer),k.__webglDepthbuffer&&i.deleteRenderbuffer(k.__webglDepthbuffer),k.__webglMultisampledFramebuffer&&i.deleteFramebuffer(k.__webglMultisampledFramebuffer),k.__webglColorRenderbuffer)for(let ee=0;ee<k.__webglColorRenderbuffer.length;ee++)k.__webglColorRenderbuffer[ee]&&i.deleteRenderbuffer(k.__webglColorRenderbuffer[ee]);k.__webglDepthRenderbuffer&&i.deleteRenderbuffer(k.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let ee=0,fe=M.length;ee<fe;ee++){const ve=n.get(M[ee]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove(M[ee])}n.remove(M),n.remove(E)}let j=0;function q(){j=0}function G(){const E=j;return E>=l&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+l),j+=1,E}function le(E){const M=[];return M.push(E.wrapS),M.push(E.wrapT),M.push(E.wrapR||0),M.push(E.magFilter),M.push(E.minFilter),M.push(E.anisotropy),M.push(E.internalFormat),M.push(E.format),M.push(E.type),M.push(E.generateMipmaps),M.push(E.premultiplyAlpha),M.push(E.flipY),M.push(E.unpackAlignment),M.push(E.encoding),M.join()}function D(E,M){const k=n.get(E);if(E.isVideoTexture&&xe(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const ie=E.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(k,E,M);return}}t.bindTexture(3553,k.__webglTexture,33984+M)}function be(E,M){const k=n.get(E);if(E.version>0&&k.__version!==E.version){ae(k,E,M);return}t.bindTexture(35866,k.__webglTexture,33984+M)}function H(E,M){const k=n.get(E);if(E.version>0&&k.__version!==E.version){ae(k,E,M);return}t.bindTexture(32879,k.__webglTexture,33984+M)}function ue(E,M){const k=n.get(E);if(E.version>0&&k.__version!==E.version){ge(k,E,M);return}t.bindTexture(34067,k.__webglTexture,33984+M)}const pe={[Sf]:10497,[mi]:33071,[wf]:33648},R={[dn]:9728,[rp]:9984,[lu]:9986,[Zn]:9729,[IM]:9985,[Ia]:9987};function Y(E,M,k){if(k?(i.texParameteri(E,10242,pe[M.wrapS]),i.texParameteri(E,10243,pe[M.wrapT]),(E===32879||E===35866)&&i.texParameteri(E,32882,pe[M.wrapR]),i.texParameteri(E,10240,R[M.magFilter]),i.texParameteri(E,10241,R[M.minFilter])):(i.texParameteri(E,10242,33071),i.texParameteri(E,10243,33071),(E===32879||E===35866)&&i.texParameteri(E,32882,33071),(M.wrapS!==mi||M.wrapT!==mi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(E,10240,L(M.magFilter)),i.texParameteri(E,10241,L(M.minFilter)),M.minFilter!==dn&&M.minFilter!==Zn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ie=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===dn||M.minFilter!==lu&&M.minFilter!==Ia||M.type===hs&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Oa&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(E,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function K(E,M){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,M.addEventListener("dispose",W));const ie=M.source;let ee=m.get(ie);ee===void 0&&(ee={},m.set(ie,ee));const fe=le(M);if(fe!==E.__cacheKey){ee[fe]===void 0&&(ee[fe]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,k=!0),ee[fe].usedTimes++;const ve=ee[E.__cacheKey];ve!==void 0&&(ee[E.__cacheKey].usedTimes--,ve.usedTimes===0&&N(M)),E.__cacheKey=fe,E.__webglTexture=ee[fe].texture}return k}function ae(E,M,k){let ie=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ie=35866),M.isData3DTexture&&(ie=32879);const ee=K(E,M),fe=M.source;t.bindTexture(ie,E.__webglTexture,33984+k);const ve=n.get(fe);if(fe.version!==ve.__version||ee===!0){t.activeTexture(33984+k),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const ye=S(M)&&y(M.image)===!1;let ne=v(M.image,ye,!1,u);ne=ce(M,ne);const Le=y(ne)||a,Re=s.convert(M.format,M.encoding);let Oe=s.convert(M.type),Ne=x(M.internalFormat,Re,Oe,M.encoding,M.isVideoTexture);Y(ie,M,Le);let Ce;const He=M.mipmaps,De=a&&M.isVideoTexture!==!0,ct=ve.__version===void 0||ee===!0,z=w(M,ne,Le);if(M.isDepthTexture)Ne=6402,a?M.type===hs?Ne=36012:M.type===fs?Ne=33190:M.type===fo?Ne=35056:Ne=33189:M.type===hs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===_s&&Ne===6402&&M.type!==g_&&M.type!==fs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=fs,Oe=s.convert(M.type)),M.format===Eo&&Ne===6402&&(Ne=34041,M.type!==fo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=fo,Oe=s.convert(M.type))),ct&&(De?t.texStorage2D(3553,1,Ne,ne.width,ne.height):t.texImage2D(3553,0,Ne,ne.width,ne.height,0,Re,Oe,null));else if(M.isDataTexture)if(He.length>0&&Le){De&&ct&&t.texStorage2D(3553,z,Ne,He[0].width,He[0].height);for(let oe=0,he=He.length;oe<he;oe++)Ce=He[oe],De?t.texSubImage2D(3553,oe,0,0,Ce.width,Ce.height,Re,Oe,Ce.data):t.texImage2D(3553,oe,Ne,Ce.width,Ce.height,0,Re,Oe,Ce.data);M.generateMipmaps=!1}else De?(ct&&t.texStorage2D(3553,z,Ne,ne.width,ne.height),t.texSubImage2D(3553,0,0,0,ne.width,ne.height,Re,Oe,ne.data)):t.texImage2D(3553,0,Ne,ne.width,ne.height,0,Re,Oe,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){De&&ct&&t.texStorage3D(35866,z,Ne,He[0].width,He[0].height,ne.depth);for(let oe=0,he=He.length;oe<he;oe++)Ce=He[oe],M.format!==gi?Re!==null?De?t.compressedTexSubImage3D(35866,oe,0,0,0,Ce.width,Ce.height,ne.depth,Re,Ce.data,0,0):t.compressedTexImage3D(35866,oe,Ne,Ce.width,Ce.height,ne.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(35866,oe,0,0,0,Ce.width,Ce.height,ne.depth,Re,Oe,Ce.data):t.texImage3D(35866,oe,Ne,Ce.width,Ce.height,ne.depth,0,Re,Oe,Ce.data)}else{De&&ct&&t.texStorage2D(3553,z,Ne,He[0].width,He[0].height);for(let oe=0,he=He.length;oe<he;oe++)Ce=He[oe],M.format!==gi?Re!==null?De?t.compressedTexSubImage2D(3553,oe,0,0,Ce.width,Ce.height,Re,Ce.data):t.compressedTexImage2D(3553,oe,Ne,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(3553,oe,0,0,Ce.width,Ce.height,Re,Oe,Ce.data):t.texImage2D(3553,oe,Ne,Ce.width,Ce.height,0,Re,Oe,Ce.data)}else if(M.isDataArrayTexture)De?(ct&&t.texStorage3D(35866,z,Ne,ne.width,ne.height,ne.depth),t.texSubImage3D(35866,0,0,0,0,ne.width,ne.height,ne.depth,Re,Oe,ne.data)):t.texImage3D(35866,0,Ne,ne.width,ne.height,ne.depth,0,Re,Oe,ne.data);else if(M.isData3DTexture)De?(ct&&t.texStorage3D(32879,z,Ne,ne.width,ne.height,ne.depth),t.texSubImage3D(32879,0,0,0,0,ne.width,ne.height,ne.depth,Re,Oe,ne.data)):t.texImage3D(32879,0,Ne,ne.width,ne.height,ne.depth,0,Re,Oe,ne.data);else if(M.isFramebufferTexture){if(ct)if(De)t.texStorage2D(3553,z,Ne,ne.width,ne.height);else{let oe=ne.width,he=ne.height;for(let we=0;we<z;we++)t.texImage2D(3553,we,Ne,oe,he,0,Re,Oe,null),oe>>=1,he>>=1}}else if(He.length>0&&Le){De&&ct&&t.texStorage2D(3553,z,Ne,He[0].width,He[0].height);for(let oe=0,he=He.length;oe<he;oe++)Ce=He[oe],De?t.texSubImage2D(3553,oe,0,0,Re,Oe,Ce):t.texImage2D(3553,oe,Ne,Re,Oe,Ce);M.generateMipmaps=!1}else De?(ct&&t.texStorage2D(3553,z,Ne,ne.width,ne.height),t.texSubImage2D(3553,0,0,0,Re,Oe,ne)):t.texImage2D(3553,0,Ne,Re,Oe,ne);P(M,Le)&&A(ie),ve.__version=fe.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function ge(E,M,k){if(M.image.length!==6)return;const ie=K(E,M),ee=M.source;t.bindTexture(34067,E.__webglTexture,33984+k);const fe=n.get(ee);if(ee.version!==fe.__version||ie===!0){t.activeTexture(33984+k),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const ve=M.isCompressedTexture||M.image[0].isCompressedTexture,ye=M.image[0]&&M.image[0].isDataTexture,ne=[];for(let oe=0;oe<6;oe++)!ve&&!ye?ne[oe]=v(M.image[oe],!1,!0,c):ne[oe]=ye?M.image[oe].image:M.image[oe],ne[oe]=ce(M,ne[oe]);const Le=ne[0],Re=y(Le)||a,Oe=s.convert(M.format,M.encoding),Ne=s.convert(M.type),Ce=x(M.internalFormat,Oe,Ne,M.encoding),He=a&&M.isVideoTexture!==!0,De=fe.__version===void 0||ie===!0;let ct=w(M,Le,Re);Y(34067,M,Re);let z;if(ve){He&&De&&t.texStorage2D(34067,ct,Ce,Le.width,Le.height);for(let oe=0;oe<6;oe++){z=ne[oe].mipmaps;for(let he=0;he<z.length;he++){const we=z[he];M.format!==gi?Oe!==null?He?t.compressedTexSubImage2D(34069+oe,he,0,0,we.width,we.height,Oe,we.data):t.compressedTexImage2D(34069+oe,he,Ce,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(34069+oe,he,0,0,we.width,we.height,Oe,Ne,we.data):t.texImage2D(34069+oe,he,Ce,we.width,we.height,0,Oe,Ne,we.data)}}}else{z=M.mipmaps,He&&De&&(z.length>0&&ct++,t.texStorage2D(34067,ct,Ce,ne[0].width,ne[0].height));for(let oe=0;oe<6;oe++)if(ye){He?t.texSubImage2D(34069+oe,0,0,0,ne[oe].width,ne[oe].height,Oe,Ne,ne[oe].data):t.texImage2D(34069+oe,0,Ce,ne[oe].width,ne[oe].height,0,Oe,Ne,ne[oe].data);for(let he=0;he<z.length;he++){const Pe=z[he].image[oe].image;He?t.texSubImage2D(34069+oe,he+1,0,0,Pe.width,Pe.height,Oe,Ne,Pe.data):t.texImage2D(34069+oe,he+1,Ce,Pe.width,Pe.height,0,Oe,Ne,Pe.data)}}else{He?t.texSubImage2D(34069+oe,0,0,0,Oe,Ne,ne[oe]):t.texImage2D(34069+oe,0,Ce,Oe,Ne,ne[oe]);for(let he=0;he<z.length;he++){const we=z[he];He?t.texSubImage2D(34069+oe,he+1,0,0,Oe,Ne,we.image[oe]):t.texImage2D(34069+oe,he+1,Ce,Oe,Ne,we.image[oe])}}}P(M,Re)&&A(34067),fe.__version=ee.version,M.onUpdate&&M.onUpdate(M)}E.__version=M.version}function Se(E,M,k,ie,ee){const fe=s.convert(k.format,k.encoding),ve=s.convert(k.type),ye=x(k.internalFormat,fe,ve,k.encoding);n.get(M).__hasExternalTextures||(ee===32879||ee===35866?t.texImage3D(ee,0,ye,M.width,M.height,M.depth,0,fe,ve,null):t.texImage2D(ee,0,ye,M.width,M.height,0,fe,ve,null)),t.bindFramebuffer(36160,E),re(M)?f.framebufferTexture2DMultisampleEXT(36160,ie,ee,n.get(k).__webglTexture,0,de(M)):(ee===3553||ee>=34069&&ee<=34074)&&i.framebufferTexture2D(36160,ie,ee,n.get(k).__webglTexture,0),t.bindFramebuffer(36160,null)}function Me(E,M,k){if(i.bindRenderbuffer(36161,E),M.depthBuffer&&!M.stencilBuffer){let ie=33189;if(k||re(M)){const ee=M.depthTexture;ee&&ee.isDepthTexture&&(ee.type===hs?ie=36012:ee.type===fs&&(ie=33190));const fe=de(M);re(M)?f.renderbufferStorageMultisampleEXT(36161,fe,ie,M.width,M.height):i.renderbufferStorageMultisample(36161,fe,ie,M.width,M.height)}else i.renderbufferStorage(36161,ie,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,E)}else if(M.depthBuffer&&M.stencilBuffer){const ie=de(M);k&&re(M)===!1?i.renderbufferStorageMultisample(36161,ie,35056,M.width,M.height):re(M)?f.renderbufferStorageMultisampleEXT(36161,ie,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,E)}else{const ie=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ee=0;ee<ie.length;ee++){const fe=ie[ee],ve=s.convert(fe.format,fe.encoding),ye=s.convert(fe.type),ne=x(fe.internalFormat,ve,ye,fe.encoding),Le=de(M);k&&re(M)===!1?i.renderbufferStorageMultisample(36161,Le,ne,M.width,M.height):re(M)?f.renderbufferStorageMultisampleEXT(36161,Le,ne,M.width,M.height):i.renderbufferStorage(36161,ne,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function T(E,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,E),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),D(M.depthTexture,0);const ie=n.get(M.depthTexture).__webglTexture,ee=de(M);if(M.depthTexture.format===_s)re(M)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,ie,0,ee):i.framebufferTexture2D(36160,36096,3553,ie,0);else if(M.depthTexture.format===Eo)re(M)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,ie,0,ee):i.framebufferTexture2D(36160,33306,3553,ie,0);else throw new Error("Unknown depthTexture format")}function I(E){const M=n.get(E),k=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");T(M.__webglFramebuffer,E)}else if(k){M.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)t.bindFramebuffer(36160,M.__webglFramebuffer[ie]),M.__webglDepthbuffer[ie]=i.createRenderbuffer(),Me(M.__webglDepthbuffer[ie],E,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Me(M.__webglDepthbuffer,E,!1);t.bindFramebuffer(36160,null)}function $(E,M,k){const ie=n.get(E);M!==void 0&&Se(ie.__webglFramebuffer,E,E.texture,36064,3553),k!==void 0&&I(E)}function Q(E){const M=E.texture,k=n.get(E),ie=n.get(M);E.addEventListener("dispose",O),E.isWebGLMultipleRenderTargets!==!0&&(ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture()),ie.__version=M.version,o.memory.textures++);const ee=E.isWebGLCubeRenderTarget===!0,fe=E.isWebGLMultipleRenderTargets===!0,ve=y(E)||a;if(ee){k.__webglFramebuffer=[];for(let ye=0;ye<6;ye++)k.__webglFramebuffer[ye]=i.createFramebuffer()}else{if(k.__webglFramebuffer=i.createFramebuffer(),fe)if(r.drawBuffers){const ye=E.texture;for(let ne=0,Le=ye.length;ne<Le;ne++){const Re=n.get(ye[ne]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&re(E)===!1){const ye=fe?M:[M];k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer);for(let ne=0;ne<ye.length;ne++){const Le=ye[ne];k.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(36161,k.__webglColorRenderbuffer[ne]);const Re=s.convert(Le.format,Le.encoding),Oe=s.convert(Le.type),Ne=x(Le.internalFormat,Re,Oe,Le.encoding,E.isXRRenderTarget===!0),Ce=de(E);i.renderbufferStorageMultisample(36161,Ce,Ne,E.width,E.height),i.framebufferRenderbuffer(36160,36064+ne,36161,k.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(36161,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(k.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(36160,null)}}if(ee){t.bindTexture(34067,ie.__webglTexture),Y(34067,M,ve);for(let ye=0;ye<6;ye++)Se(k.__webglFramebuffer[ye],E,M,36064,34069+ye);P(M,ve)&&A(34067),t.unbindTexture()}else if(fe){const ye=E.texture;for(let ne=0,Le=ye.length;ne<Le;ne++){const Re=ye[ne],Oe=n.get(Re);t.bindTexture(3553,Oe.__webglTexture),Y(3553,Re,ve),Se(k.__webglFramebuffer,E,Re,36064+ne,3553),P(Re,ve)&&A(3553)}t.unbindTexture()}else{let ye=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ye=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ye,ie.__webglTexture),Y(ye,M,ve),Se(k.__webglFramebuffer,E,M,36064,ye),P(M,ve)&&A(ye),t.unbindTexture()}E.depthBuffer&&I(E)}function se(E){const M=y(E)||a,k=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ie=0,ee=k.length;ie<ee;ie++){const fe=k[ie];if(P(fe,M)){const ve=E.isWebGLCubeRenderTarget?34067:3553,ye=n.get(fe).__webglTexture;t.bindTexture(ve,ye),A(ve),t.unbindTexture()}}}function F(E){if(a&&E.samples>0&&re(E)===!1){const M=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],k=E.width,ie=E.height;let ee=16384;const fe=[],ve=E.stencilBuffer?33306:36096,ye=n.get(E),ne=E.isWebGLMultipleRenderTargets===!0;if(ne)for(let Le=0;Le<M.length;Le++)t.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Le,36161,null),t.bindFramebuffer(36160,ye.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Le,3553,null,0);t.bindFramebuffer(36008,ye.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,ye.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){fe.push(36064+Le),E.depthBuffer&&fe.push(ve);const Re=ye.__ignoreDepthValues!==void 0?ye.__ignoreDepthValues:!1;if(Re===!1&&(E.depthBuffer&&(ee|=256),E.stencilBuffer&&(ee|=1024)),ne&&i.framebufferRenderbuffer(36008,36064,36161,ye.__webglColorRenderbuffer[Le]),Re===!0&&(i.invalidateFramebuffer(36008,[ve]),i.invalidateFramebuffer(36009,[ve])),ne){const Oe=n.get(M[Le]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,Oe,0)}i.blitFramebuffer(0,0,k,ie,0,0,k,ie,ee,9728),p&&i.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),ne)for(let Le=0;Le<M.length;Le++){t.bindFramebuffer(36160,ye.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+Le,36161,ye.__webglColorRenderbuffer[Le]);const Re=n.get(M[Le]).__webglTexture;t.bindFramebuffer(36160,ye.__webglFramebuffer),i.framebufferTexture2D(36009,36064+Le,3553,Re,0)}t.bindFramebuffer(36009,ye.__webglMultisampledFramebuffer)}}function de(E){return Math.min(h,E.samples)}function re(E){const M=n.get(E);return a&&E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function xe(E){const M=o.render.frame;g.get(E)!==M&&(g.set(E,M),E.update())}function ce(E,M){const k=E.encoding,ie=E.format,ee=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Tf||k!==Ts&&(k===mt?a===!1?e.has("EXT_sRGB")===!0&&ie===gi?(E.format=Tf,E.minFilter=Zn,E.generateMipmaps=!1):M=v_.sRGBToLinear(M):(ie!==gi||ee!==ws)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",k)),M}this.allocateTextureUnit=G,this.resetTextureUnits=q,this.setTexture2D=D,this.setTexture2DArray=be,this.setTexture3D=H,this.setTextureCube=ue,this.rebindTextures=$,this.setupRenderTarget=Q,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=F,this.setupDepthRenderbuffer=I,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=re}function QE(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===ws)return 5121;if(s===zM)return 32819;if(s===UM)return 32820;if(s===OM)return 5120;if(s===FM)return 5122;if(s===g_)return 5123;if(s===NM)return 5124;if(s===fs)return 5125;if(s===hs)return 5126;if(s===Oa)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===kM)return 6406;if(s===gi)return 6408;if(s===BM)return 6409;if(s===GM)return 6410;if(s===_s)return 6402;if(s===Eo)return 34041;if(s===Tf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===VM)return 6403;if(s===HM)return 36244;if(s===WM)return 33319;if(s===XM)return 33320;if(s===qM)return 36249;if(s===cu||s===uu||s===fu||s===hu)if(o===mt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===cu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===hu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===cu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===uu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===hu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sp||s===op||s===ap||s===lp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===sp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===op)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ap)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$M)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===cp||s===up)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===cp)return o===mt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===up)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fp||s===hp||s===dp||s===pp||s===mp||s===gp||s===_p||s===xp||s===vp||s===yp||s===bp||s===Mp||s===Sp||s===wp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===fp)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===hp)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dp)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pp)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mp)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gp)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_p)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===xp)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vp)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yp)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bp)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mp)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sp)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wp)return o===mt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===du)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===du)return o===mt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===YM||s===Tp||s===Ep||s===Cp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===du)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Tp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Ep)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fo?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class eC extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class El extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const tC={type:"move"};class Uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new El,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new El,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new El,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const d of e.hand.values()){const m=t.getJointPose(d,n),_=this._getHandJoint(c,d);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(tC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new El;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class nC extends Wn{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:_s,u!==_s&&u!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===_s&&(n=fs),n===void 0&&u===Eo&&(n=fo),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dn,this.minFilter=l!==void 0?l:dn,this.flipY=!1,this.generateMipmaps=!1}}class iC extends ko{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const d=t.getContextAttributes();let m=null,_=null;const b=[],v=[],y=new Set,S=new Map,P=new Jn;P.layers.enable(1),P.viewport=new Yt;const A=new Jn;A.layers.enable(2),A.viewport=new Yt;const x=[P,A],w=new eC;w.layers.enable(1),w.layers.enable(2);let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let ue=b[H];return ue===void 0&&(ue=new Uu,b[H]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(H){let ue=b[H];return ue===void 0&&(ue=new Uu,b[H]=ue),ue.getGripSpace()},this.getHand=function(H){let ue=b[H];return ue===void 0&&(ue=new Uu,b[H]=ue),ue.getHandSpace()};function O(H){const ue=v.indexOf(H.inputSource);if(ue===-1)return;const pe=b[ue];pe!==void 0&&pe.dispatchEvent({type:H.type,data:H.inputSource})}function U(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",N);for(let H=0;H<b.length;H++){const ue=v[H];ue!==null&&(v[H]=null,b[H].disconnect(ue))}L=null,W=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,_=null,be.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",U),r.addEventListener("inputsourceschange",N),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:p}),_=new Es(p.framebufferWidth,p.framebufferHeight,{format:gi,type:ws,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let ue=null,pe=null,R=null;d.depth&&(R=d.stencil?35056:33190,ue=d.stencil?Eo:_s,pe=d.stencil?fo:fs);const Y={colorFormat:32856,depthFormat:R,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(Y),r.updateRenderState({layers:[f]}),_=new Es(f.textureWidth,f.textureHeight,{format:gi,type:ws,depthTexture:new nC(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const K=e.properties.get(_);K.__ignoreDepthValues=f.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),be.setContext(r),be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function N(H){for(let ue=0;ue<H.removed.length;ue++){const pe=H.removed[ue],R=v.indexOf(pe);R>=0&&(v[R]=null,b[R].disconnect(pe))}for(let ue=0;ue<H.added.length;ue++){const pe=H.added[ue];let R=v.indexOf(pe);if(R===-1){for(let K=0;K<b.length;K++)if(K>=v.length){v.push(pe),R=K;break}else if(v[K]===null){v[K]=pe,R=K;break}if(R===-1)break}const Y=b[R];Y&&Y.connect(pe)}}const X=new Z,j=new Z;function q(H,ue,pe){X.setFromMatrixPosition(ue.matrixWorld),j.setFromMatrixPosition(pe.matrixWorld);const R=X.distanceTo(j),Y=ue.projectionMatrix.elements,K=pe.projectionMatrix.elements,ae=Y[14]/(Y[10]-1),ge=Y[14]/(Y[10]+1),Se=(Y[9]+1)/Y[5],Me=(Y[9]-1)/Y[5],T=(Y[8]-1)/Y[0],I=(K[8]+1)/K[0],$=ae*T,Q=ae*I,se=R/(-T+I),F=se*-T;ue.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(F),H.translateZ(se),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const de=ae+se,re=ge+se,xe=$-F,ce=Q+(R-F),E=Se*ge/re*de,M=Me*ge/re*de;H.projectionMatrix.makePerspective(xe,ce,E,M,de,re)}function G(H,ue){ue===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(ue.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;w.near=A.near=P.near=H.near,w.far=A.far=P.far=H.far,(L!==w.near||W!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,W=w.far);const ue=H.parent,pe=w.cameras;G(w,ue);for(let Y=0;Y<pe.length;Y++)G(pe[Y],ue);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),H.matrix.copy(w.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const R=H.children;for(let Y=0,K=R.length;Y<K;Y++)R[Y].updateMatrixWorld(!0);pe.length===2?q(w,P,A):w.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(H){l=H,f!==null&&(f.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.getPlanes=function(){return y};let le=null;function D(H,ue){if(u=ue.getViewerPose(c||o),g=ue,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let R=!1;pe.length!==w.cameras.length&&(w.cameras.length=0,R=!0);for(let Y=0;Y<pe.length;Y++){const K=pe[Y];let ae=null;if(p!==null)ae=p.getViewport(K);else{const Se=h.getViewSubImage(f,K);ae=Se.viewport,Y===0&&(e.setRenderTargetTextures(_,Se.colorTexture,f.ignoreDepthValues?void 0:Se.depthStencilTexture),e.setRenderTarget(_))}let ge=x[Y];ge===void 0&&(ge=new Jn,ge.layers.enable(Y),ge.viewport=new Yt,x[Y]=ge),ge.matrix.fromArray(K.transform.matrix),ge.projectionMatrix.fromArray(K.projectionMatrix),ge.viewport.set(ae.x,ae.y,ae.width,ae.height),Y===0&&w.matrix.copy(ge.matrix),R===!0&&w.cameras.push(ge)}}for(let pe=0;pe<b.length;pe++){const R=v[pe],Y=b[pe];R!==null&&Y!==void 0&&Y.update(R,ue,c||o)}if(le&&le(H,ue),ue.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let pe=null;for(const R of y)ue.detectedPlanes.has(R)||(pe===null&&(pe=[]),pe.push(R));if(pe!==null)for(const R of pe)y.delete(R),S.delete(R),n.dispatchEvent({type:"planeremoved",data:R});for(const R of ue.detectedPlanes)if(!y.has(R))y.add(R),S.set(R,ue.lastChangedTime),n.dispatchEvent({type:"planeadded",data:R});else{const Y=S.get(R);R.lastChangedTime>Y&&(S.set(R,R.lastChangedTime),n.dispatchEvent({type:"planechanged",data:R}))}}g=null}const be=new D_;be.setAnimationLoop(D),this.setAnimationLoop=function(H){le=H},this.dispose=function(){}}}function rC(i,e){function t(d,m){m.color.getRGB(d.fogColor.value,A_(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function n(d,m,_,b,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),u(d,m)):m.isMeshPhongMaterial?(r(d,m),c(d,m)):m.isMeshStandardMaterial?(r(d,m),h(d,m),m.isMeshPhysicalMaterial&&f(d,m,v)):m.isMeshMatcapMaterial?(r(d,m),p(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),g(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(s(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?a(d,m,_,b):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.bumpMap&&(d.bumpMap.value=m.bumpMap,d.bumpScale.value=m.bumpScale,m.side===Hn&&(d.bumpScale.value*=-1)),m.displacementMap&&(d.displacementMap.value=m.displacementMap,d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap),m.normalMap&&(d.normalMap.value=m.normalMap,d.normalScale.value.copy(m.normalScale),m.side===Hn&&d.normalScale.value.negate()),m.specularMap&&(d.specularMap.value=m.specularMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(d.envMap.value=_,d.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap){d.lightMap.value=m.lightMap;const y=i.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=m.lightMapIntensity*y}m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),d.uvTransform.value.copy(b.matrix));let v;m.aoMap?v=m.aoMap:m.lightMap&&(v=m.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uv2Transform.value.copy(v.matrix))}function s(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function a(d,m,_,b){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*_,d.scale.value=b*.5,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map),m.alphaMap&&(d.alphaMap.value=m.alphaMap),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),d.uvTransform.value.copy(_.matrix))}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function h(d,m){d.roughness.value=m.roughness,d.metalness.value=m.metalness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function f(d,m,_){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),d.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Hn&&d.clearcoatNormalScale.value.negate())),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=_.texture,d.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap)}function p(d,m){m.matcap&&(d.matcap.value=m.matcap)}function g(d,m){d.referencePosition.value.copy(m.referencePosition),d.nearDistance.value=m.nearDistance,d.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function sC(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function l(b,v){const y=v.program;n.uniformBlockBinding(b,y)}function c(b,v){let y=r[b.id];y===void 0&&(g(b),y=u(b),r[b.id]=y,b.addEventListener("dispose",m));const S=v.program;n.updateUBOMapping(b,S);const P=e.render.frame;s[b.id]!==P&&(f(b),s[b.id]=P)}function u(b){const v=h();b.__bindingPointIndex=v;const y=i.createBuffer(),S=b.__size,P=b.usage;return i.bindBuffer(35345,y),i.bufferData(35345,S,P),i.bindBuffer(35345,null),i.bindBufferBase(35345,v,y),y}function h(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const v=r[b.id],y=b.uniforms,S=b.__cache;i.bindBuffer(35345,v);for(let P=0,A=y.length;P<A;P++){const x=y[P];if(p(x,P,S)===!0){const w=x.__offset,L=Array.isArray(x.value)?x.value:[x.value];let W=0;for(let O=0;O<L.length;O++){const U=L[O],N=d(U);typeof U=="number"?(x.__data[0]=U,i.bufferSubData(35345,w+W,x.__data)):U.isMatrix3?(x.__data[0]=U.elements[0],x.__data[1]=U.elements[1],x.__data[2]=U.elements[2],x.__data[3]=U.elements[0],x.__data[4]=U.elements[3],x.__data[5]=U.elements[4],x.__data[6]=U.elements[5],x.__data[7]=U.elements[0],x.__data[8]=U.elements[6],x.__data[9]=U.elements[7],x.__data[10]=U.elements[8],x.__data[11]=U.elements[0]):(U.toArray(x.__data,W),W+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(35345,w,x.__data)}}i.bindBuffer(35345,null)}function p(b,v,y){const S=b.value;if(y[v]===void 0){if(typeof S=="number")y[v]=S;else{const P=Array.isArray(S)?S:[S],A=[];for(let x=0;x<P.length;x++)A.push(P[x].clone());y[v]=A}return!0}else if(typeof S=="number"){if(y[v]!==S)return y[v]=S,!0}else{const P=Array.isArray(y[v])?y[v]:[y[v]],A=Array.isArray(S)?S:[S];for(let x=0;x<P.length;x++){const w=P[x];if(w.equals(A[x])===!1)return w.copy(A[x]),!0}}return!1}function g(b){const v=b.uniforms;let y=0;const S=16;let P=0;for(let A=0,x=v.length;A<x;A++){const w=v[A],L={boundary:0,storage:0},W=Array.isArray(w.value)?w.value:[w.value];for(let O=0,U=W.length;O<U;O++){const N=W[O],X=d(N);L.boundary+=X.boundary,L.storage+=X.storage}if(w.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=y,A>0){P=y%S;const O=S-P;P!==0&&O-L.boundary<0&&(y+=S-P,w.__offset=y)}y+=L.storage}return P=y%S,P>0&&(y+=S-P),b.__size=y,b.__cache={},this}function d(b){const v={boundary:0,storage:0};return typeof b=="number"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){const v=b.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function _(){for(const b in r)i.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}function oC(){const i=hc("canvas");return i.style.display="block",i}function Rh(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:oC(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,l=i.powerPreference!==void 0?i.powerPreference:"default",c=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let h=null,f=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ts,this.useLegacyLights=!0,this.toneMapping=ir,this.toneMappingExposure=1;const d=this;let m=!1,_=0,b=0,v=null,y=-1,S=null;const P=new Yt,A=new Yt;let x=null,w=e.width,L=e.height,W=1,O=null,U=null;const N=new Yt(0,0,w,L),X=new Yt(0,0,w,L);let j=!1;const q=new L_;let G=!1,le=!1,D=null;const be=new Wt,H=new Z,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return v===null?W:1}let R=t;function Y(C,V){for(let J=0;J<C.length;J++){const B=C[J],te=e.getContext(B,V);if(te!==null)return te}return null}try{const C={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ah}`),e.addEventListener("webglcontextlost",Oe,!1),e.addEventListener("webglcontextrestored",Ne,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),R===null){const V=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&V.shift(),R=Y(V,C),R===null)throw Y(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}R.getShaderPrecisionFormat===void 0&&(R.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let K,ae,ge,Se,Me,T,I,$,Q,se,F,de,re,xe,ce,E,M,k,ie,ee,fe,ve,ye,ne;function Le(){K=new _T(R),ae=new uT(R,K,i),K.init(ae),ve=new QE(R,K,ae),ge=new ZE(R,K,ae),Se=new yT,Me=new zE,T=new JE(R,K,ge,Me,ae,ve,Se),I=new hT(d),$=new gT(d),Q=new AS(R,ae),ye=new lT(R,K,Q,ae),se=new xT(R,Q,Se,ye),F=new wT(R,se,Q,Se),ie=new ST(R,ae,T),E=new fT(Me),de=new NE(d,I,$,K,ae,ye,E),re=new rC(d,Me),xe=new kE,ce=new XE(K,ae),k=new aT(d,I,$,ge,F,u,o),M=new KE(d,F,ae),ne=new sC(R,Se,ae,ge),ee=new cT(R,K,Se,ae),fe=new vT(R,K,Se,ae),Se.programs=de.programs,d.capabilities=ae,d.extensions=K,d.properties=Me,d.renderLists=xe,d.shadowMap=M,d.state=ge,d.info=Se}Le();const Re=new iC(d,R);this.xr=Re,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const C=K.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=K.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(w,L,!1))},this.getSize=function(C){return C.set(w,L)},this.setSize=function(C,V,J=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=C,L=V,e.width=Math.floor(C*W),e.height=Math.floor(V*W),J===!0&&(e.style.width=C+"px",e.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(w*W,L*W).floor()},this.setDrawingBufferSize=function(C,V,J){w=C,L=V,W=J,e.width=Math.floor(C*J),e.height=Math.floor(V*J),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,V,J,B){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,V,J,B),ge.viewport(P.copy(N).multiplyScalar(W).floor())},this.getScissor=function(C){return C.copy(X)},this.setScissor=function(C,V,J,B){C.isVector4?X.set(C.x,C.y,C.z,C.w):X.set(C,V,J,B),ge.scissor(A.copy(X).multiplyScalar(W).floor())},this.getScissorTest=function(){return j},this.setScissorTest=function(C){ge.setScissorTest(j=C)},this.setOpaqueSort=function(C){O=C},this.setTransparentSort=function(C){U=C},this.getClearColor=function(C){return C.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor.apply(k,arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha.apply(k,arguments)},this.clear=function(C=!0,V=!0,J=!0){let B=0;C&&(B|=16384),V&&(B|=256),J&&(B|=1024),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Oe,!1),e.removeEventListener("webglcontextrestored",Ne,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),xe.dispose(),ce.dispose(),Me.dispose(),I.dispose(),$.dispose(),F.dispose(),ye.dispose(),ne.dispose(),de.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",he),Re.removeEventListener("sessionend",we),D&&(D.dispose(),D=null),Pe.stop()};function Oe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const C=Se.autoReset,V=M.enabled,J=M.autoUpdate,B=M.needsUpdate,te=M.type;Le(),Se.autoReset=C,M.enabled=V,M.autoUpdate=J,M.needsUpdate=B,M.type=te}function Ce(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function He(C){const V=C.target;V.removeEventListener("dispose",He),De(V)}function De(C){ct(C),Me.remove(C)}function ct(C){const V=Me.get(C).programs;V!==void 0&&(V.forEach(function(J){de.releaseProgram(J)}),C.isShaderMaterial&&de.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,J,B,te,Ee){V===null&&(V=ue);const Ue=te.isMesh&&te.matrixWorld.determinant()<0,Be=Xe(C,V,J,B,te);ge.setMaterial(B,Ue);let ke=J.index,Ge=1;B.wireframe===!0&&(ke=se.getWireframeAttribute(J),Ge=2);const We=J.drawRange,Ye=J.attributes.position;let ft=We.start*Ge,it=(We.start+We.count)*Ge;Ee!==null&&(ft=Math.max(ft,Ee.start*Ge),it=Math.min(it,(Ee.start+Ee.count)*Ge)),ke!==null?(ft=Math.max(ft,0),it=Math.min(it,ke.count)):Ye!=null&&(ft=Math.max(ft,0),it=Math.min(it,Ye.count));const ht=it-ft;if(ht<0||ht===1/0)return;ye.setup(te,B,Be,J,ke);let Bt,vt=ee;if(ke!==null&&(Bt=Q.get(ke),vt=fe,vt.setIndex(Bt)),te.isMesh)B.wireframe===!0?(ge.setLineWidth(B.wireframeLinewidth*pe()),vt.setMode(1)):vt.setMode(4);else if(te.isLine){let Je=B.linewidth;Je===void 0&&(Je=1),ge.setLineWidth(Je*pe()),te.isLineSegments?vt.setMode(1):te.isLineLoop?vt.setMode(2):vt.setMode(3)}else te.isPoints?vt.setMode(0):te.isSprite&&vt.setMode(4);if(te.isInstancedMesh)vt.renderInstances(ft,ht,te.count);else if(J.isInstancedBufferGeometry){const Je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Wi=Math.min(J.instanceCount,Je);vt.renderInstances(ft,ht,Wi)}else vt.render(ft,ht)},this.compile=function(C,V){function J(B,te,Ee){B.transparent===!0&&B.side===Sr&&B.forceSinglePass===!1?(B.side=Hn,B.needsUpdate=!0,_e(B,te,Ee),B.side=Br,B.needsUpdate=!0,_e(B,te,Ee),B.side=Sr):_e(B,te,Ee)}f=ce.get(C),f.init(),g.push(f),C.traverseVisible(function(B){B.isLight&&B.layers.test(V.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(d.useLegacyLights),C.traverse(function(B){const te=B.material;if(te)if(Array.isArray(te))for(let Ee=0;Ee<te.length;Ee++){const Ue=te[Ee];J(Ue,C,B)}else J(te,C,B)}),g.pop(),f=null};let z=null;function oe(C){z&&z(C)}function he(){Pe.stop()}function we(){Pe.start()}const Pe=new D_;Pe.setAnimationLoop(oe),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(C){z=C,Re.setAnimationLoop(C),C===null?Pe.stop():Pe.start()},Re.addEventListener("sessionstart",he),Re.addEventListener("sessionend",we),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(V),V=Re.getCamera()),C.isScene===!0&&C.onBeforeRender(d,C,V,v),f=ce.get(C,g.length),f.init(),g.push(f),be.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),q.setFromProjectionMatrix(be),le=this.localClippingEnabled,G=E.init(this.clippingPlanes,le),h=xe.get(C,p.length),h.init(),p.push(h),st(C,V,0,d.sortObjects),h.finish(),d.sortObjects===!0&&h.sort(O,U),G===!0&&E.beginShadows();const J=f.state.shadowsArray;if(M.render(J,C,V),G===!0&&E.endShadows(),this.info.autoReset===!0&&this.info.reset(),k.render(h,C),f.setupLights(d.useLegacyLights),V.isArrayCamera){const B=V.cameras;for(let te=0,Ee=B.length;te<Ee;te++){const Ue=B[te];ut(h,C,Ue,Ue.viewport)}}else ut(h,C,V);v!==null&&(T.updateMultisampleRenderTarget(v),T.updateRenderTargetMipmap(v)),C.isScene===!0&&C.onAfterRender(d,C,V),ye.resetDefaultState(),y=-1,S=null,g.pop(),g.length>0?f=g[g.length-1]:f=null,p.pop(),p.length>0?h=p[p.length-1]:h=null};function st(C,V,J,B){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)J=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)f.pushLight(C),C.castShadow&&f.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||q.intersectsSprite(C)){B&&H.setFromMatrixPosition(C.matrixWorld).applyMatrix4(be);const Ue=F.update(C),Be=C.material;Be.visible&&h.push(C,Ue,Be,J,H.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(C.isSkinnedMesh&&C.skeleton.frame!==Se.render.frame&&(C.skeleton.update(),C.skeleton.frame=Se.render.frame),!C.frustumCulled||q.intersectsObject(C))){B&&H.setFromMatrixPosition(C.matrixWorld).applyMatrix4(be);const Ue=F.update(C),Be=C.material;if(Array.isArray(Be)){const ke=Ue.groups;for(let Ge=0,We=ke.length;Ge<We;Ge++){const Ye=ke[Ge],ft=Be[Ye.materialIndex];ft&&ft.visible&&h.push(C,Ue,ft,J,H.z,Ye)}}else Be.visible&&h.push(C,Ue,Be,J,H.z,null)}}const Ee=C.children;for(let Ue=0,Be=Ee.length;Ue<Be;Ue++)st(Ee[Ue],V,J,B)}function ut(C,V,J,B){const te=C.opaque,Ee=C.transmissive,Ue=C.transparent;f.setupLightsView(J),G===!0&&E.setGlobalState(d.clippingPlanes,J),Ee.length>0&&Et(te,V,J),B&&ge.viewport(P.copy(B)),te.length>0&&Ve(te,V,J),Ee.length>0&&Ve(Ee,V,J),Ue.length>0&&Ve(Ue,V,J),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Et(C,V,J){const B=ae.isWebGL2;D===null&&(D=new Es(1024,1024,{generateMipmaps:!0,type:K.has("EXT_color_buffer_half_float")?Oa:ws,minFilter:Ia,samples:B&&s===!0?4:0}));const te=d.getRenderTarget();d.setRenderTarget(D),d.clear();const Ee=d.toneMapping;d.toneMapping=ir,Ve(C,V,J),d.toneMapping=Ee,T.updateMultisampleRenderTarget(D),T.updateRenderTargetMipmap(D),d.setRenderTarget(te)}function Ve(C,V,J){const B=V.isScene===!0?V.overrideMaterial:null;for(let te=0,Ee=C.length;te<Ee;te++){const Ue=C[te],Be=Ue.object,ke=Ue.geometry,Ge=B===null?Ue.material:B,We=Ue.group;Be.layers.test(J.layers)&&Ae(Be,V,J,ke,Ge,We)}}function Ae(C,V,J,B,te,Ee){C.onBeforeRender(d,V,J,B,te,Ee),C.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(d,V,J,B,C,Ee),te.transparent===!0&&te.side===Sr&&te.forceSinglePass===!1?(te.side=Hn,te.needsUpdate=!0,d.renderBufferDirect(J,V,B,te,C,Ee),te.side=Br,te.needsUpdate=!0,d.renderBufferDirect(J,V,B,te,C,Ee),te.side=Sr):d.renderBufferDirect(J,V,B,te,C,Ee),C.onAfterRender(d,V,J,B,te,Ee)}function _e(C,V,J){V.isScene!==!0&&(V=ue);const B=Me.get(C),te=f.state.lights,Ee=f.state.shadowsArray,Ue=te.state.version,Be=de.getParameters(C,te.state,Ee,V,J),ke=de.getProgramCacheKey(Be);let Ge=B.programs;B.environment=C.isMeshStandardMaterial?V.environment:null,B.fog=V.fog,B.envMap=(C.isMeshStandardMaterial?$:I).get(C.envMap||B.environment),Ge===void 0&&(C.addEventListener("dispose",He),Ge=new Map,B.programs=Ge);let We=Ge.get(ke);if(We!==void 0){if(B.currentProgram===We&&B.lightsStateVersion===Ue)return Ie(C,Be),We}else Be.uniforms=de.getUniforms(C),C.onBuild(J,Be,d),C.onBeforeCompile(Be,d),We=de.acquireProgram(Be,ke),Ge.set(ke,We),B.uniforms=Be.uniforms;const Ye=B.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ye.clippingPlanes=E.uniform),Ie(C,Be),B.needsLights=Lt(C),B.lightsStateVersion=Ue,B.needsLights&&(Ye.ambientLightColor.value=te.state.ambient,Ye.lightProbe.value=te.state.probe,Ye.directionalLights.value=te.state.directional,Ye.directionalLightShadows.value=te.state.directionalShadow,Ye.spotLights.value=te.state.spot,Ye.spotLightShadows.value=te.state.spotShadow,Ye.rectAreaLights.value=te.state.rectArea,Ye.ltc_1.value=te.state.rectAreaLTC1,Ye.ltc_2.value=te.state.rectAreaLTC2,Ye.pointLights.value=te.state.point,Ye.pointLightShadows.value=te.state.pointShadow,Ye.hemisphereLights.value=te.state.hemi,Ye.directionalShadowMap.value=te.state.directionalShadowMap,Ye.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ye.spotShadowMap.value=te.state.spotShadowMap,Ye.spotLightMatrix.value=te.state.spotLightMatrix,Ye.spotLightMap.value=te.state.spotLightMap,Ye.pointShadowMap.value=te.state.pointShadowMap,Ye.pointShadowMatrix.value=te.state.pointShadowMatrix);const ft=We.getUniforms(),it=jl.seqWithValue(ft.seq,Ye);return B.currentProgram=We,B.uniformsList=it,We}function Ie(C,V){const J=Me.get(C);J.outputEncoding=V.outputEncoding,J.instancing=V.instancing,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function Xe(C,V,J,B,te){V.isScene!==!0&&(V=ue),T.resetTextureUnits();const Ee=V.fog,Ue=B.isMeshStandardMaterial?V.environment:null,Be=v===null?d.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:Ts,ke=(B.isMeshStandardMaterial?$:I).get(B.envMap||Ue),Ge=B.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,We=!!B.normalMap&&!!J.attributes.tangent,Ye=!!J.morphAttributes.position,ft=!!J.morphAttributes.normal,it=!!J.morphAttributes.color,ht=B.toneMapped?d.toneMapping:ir,Bt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,vt=Bt!==void 0?Bt.length:0,Je=Me.get(B),Wi=f.state.lights;if(G===!0&&(le===!0||C!==S)){const Dn=C===S&&B.id===y;E.setState(B,C,Dn)}let at=!1;B.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Wi.state.version||Je.outputEncoding!==Be||te.isInstancedMesh&&Je.instancing===!1||!te.isInstancedMesh&&Je.instancing===!0||te.isSkinnedMesh&&Je.skinning===!1||!te.isSkinnedMesh&&Je.skinning===!0||Je.envMap!==ke||B.fog===!0&&Je.fog!==Ee||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==E.numPlanes||Je.numIntersection!==E.numIntersection)||Je.vertexAlphas!==Ge||Je.vertexTangents!==We||Je.morphTargets!==Ye||Je.morphNormals!==ft||Je.morphColors!==it||Je.toneMapping!==ht||ae.isWebGL2===!0&&Je.morphTargetsCount!==vt)&&(at=!0):(at=!0,Je.__version=B.version);let Ln=Je.currentProgram;at===!0&&(Ln=_e(B,V,te));let ed=!1,Vo=!1,$c=!1;const an=Ln.getUniforms(),qr=Je.uniforms;if(ge.useProgram(Ln.program)&&(ed=!0,Vo=!0,$c=!0),B.id!==y&&(y=B.id,Vo=!0),ed||S!==C){if(an.setValue(R,"projectionMatrix",C.projectionMatrix),ae.logarithmicDepthBuffer&&an.setValue(R,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),S!==C&&(S=C,Vo=!0,$c=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const Dn=an.map.cameraPosition;Dn!==void 0&&Dn.setValue(R,H.setFromMatrixPosition(C.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&an.setValue(R,"isOrthographic",C.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||te.isSkinnedMesh)&&an.setValue(R,"viewMatrix",C.matrixWorldInverse)}if(te.isSkinnedMesh){an.setOptional(R,te,"bindMatrix"),an.setOptional(R,te,"bindMatrixInverse");const Dn=te.skeleton;Dn&&(ae.floatVertexTextures?(Dn.boneTexture===null&&Dn.computeBoneTexture(),an.setValue(R,"boneTexture",Dn.boneTexture,T),an.setValue(R,"boneTextureSize",Dn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Yc=J.morphAttributes;if((Yc.position!==void 0||Yc.normal!==void 0||Yc.color!==void 0&&ae.isWebGL2===!0)&&ie.update(te,J,Ln),(Vo||Je.receiveShadow!==te.receiveShadow)&&(Je.receiveShadow=te.receiveShadow,an.setValue(R,"receiveShadow",te.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(qr.envMap.value=ke,qr.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Vo&&(an.setValue(R,"toneMappingExposure",d.toneMappingExposure),Je.needsLights&&$e(qr,$c),Ee&&B.fog===!0&&re.refreshFogUniforms(qr,Ee),re.refreshMaterialUniforms(qr,B,W,L,D),jl.upload(R,Je.uniformsList,qr,T)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(jl.upload(R,Je.uniformsList,qr,T),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&an.setValue(R,"center",te.center),an.setValue(R,"modelViewMatrix",te.modelViewMatrix),an.setValue(R,"normalMatrix",te.normalMatrix),an.setValue(R,"modelMatrix",te.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Dn=B.uniformsGroups;for(let jc=0,Mx=Dn.length;jc<Mx;jc++)if(ae.isWebGL2){const td=Dn[jc];ne.update(td,Ln),ne.bind(td,Ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ln}function $e(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function Lt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(C,V,J){Me.get(C.texture).__webglTexture=V,Me.get(C.depthTexture).__webglTexture=J;const B=Me.get(C);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=J===void 0,B.__autoAllocateDepthBuffer||K.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){const J=Me.get(C);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,J=0){v=C,_=V,b=J;let B=!0,te=null,Ee=!1,Ue=!1;if(C){const ke=Me.get(C);ke.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(36160,null),B=!1):ke.__webglFramebuffer===void 0?T.setupRenderTarget(C):ke.__hasExternalTextures&&T.rebindTextures(C,Me.get(C.texture).__webglTexture,Me.get(C.depthTexture).__webglTexture);const Ge=C.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ue=!0);const We=Me.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(te=We[V],Ee=!0):ae.isWebGL2&&C.samples>0&&T.useMultisampledRTT(C)===!1?te=Me.get(C).__webglMultisampledFramebuffer:te=We,P.copy(C.viewport),A.copy(C.scissor),x=C.scissorTest}else P.copy(N).multiplyScalar(W).floor(),A.copy(X).multiplyScalar(W).floor(),x=j;if(ge.bindFramebuffer(36160,te)&&ae.drawBuffers&&B&&ge.drawBuffers(C,te),ge.viewport(P),ge.scissor(A),ge.setScissorTest(x),Ee){const ke=Me.get(C.texture);R.framebufferTexture2D(36160,36064,34069+V,ke.__webglTexture,J)}else if(Ue){const ke=Me.get(C.texture),Ge=V||0;R.framebufferTextureLayer(36160,36064,ke.__webglTexture,J||0,Ge)}y=-1},this.readRenderTargetPixels=function(C,V,J,B,te,Ee,Ue){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Me.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Be=Be[Ue]),Be){ge.bindFramebuffer(36160,Be);try{const ke=C.texture,Ge=ke.format,We=ke.type;if(Ge!==gi&&ve.convert(Ge)!==R.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=We===Oa&&(K.has("EXT_color_buffer_half_float")||ae.isWebGL2&&K.has("EXT_color_buffer_float"));if(We!==ws&&ve.convert(We)!==R.getParameter(35738)&&!(We===hs&&(ae.isWebGL2||K.has("OES_texture_float")||K.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-B&&J>=0&&J<=C.height-te&&R.readPixels(V,J,B,te,ve.convert(Ge),ve.convert(We),Ee)}finally{const ke=v!==null?Me.get(v).__webglFramebuffer:null;ge.bindFramebuffer(36160,ke)}}},this.copyFramebufferToTexture=function(C,V,J=0){const B=Math.pow(2,-J),te=Math.floor(V.image.width*B),Ee=Math.floor(V.image.height*B);T.setTexture2D(V,0),R.copyTexSubImage2D(3553,J,0,0,C.x,C.y,te,Ee),ge.unbindTexture()},this.copyTextureToTexture=function(C,V,J,B=0){const te=V.image.width,Ee=V.image.height,Ue=ve.convert(J.format),Be=ve.convert(J.type);T.setTexture2D(J,0),R.pixelStorei(37440,J.flipY),R.pixelStorei(37441,J.premultiplyAlpha),R.pixelStorei(3317,J.unpackAlignment),V.isDataTexture?R.texSubImage2D(3553,B,C.x,C.y,te,Ee,Ue,Be,V.image.data):V.isCompressedTexture?R.compressedTexSubImage2D(3553,B,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Ue,V.mipmaps[0].data):R.texSubImage2D(3553,B,C.x,C.y,Ue,Be,V.image),B===0&&J.generateMipmaps&&R.generateMipmap(3553),ge.unbindTexture()},this.copyTextureToTexture3D=function(C,V,J,B,te=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=C.max.x-C.min.x+1,Ue=C.max.y-C.min.y+1,Be=C.max.z-C.min.z+1,ke=ve.convert(B.format),Ge=ve.convert(B.type);let We;if(B.isData3DTexture)T.setTexture3D(B,0),We=32879;else if(B.isDataArrayTexture)T.setTexture2DArray(B,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(37440,B.flipY),R.pixelStorei(37441,B.premultiplyAlpha),R.pixelStorei(3317,B.unpackAlignment);const Ye=R.getParameter(3314),ft=R.getParameter(32878),it=R.getParameter(3316),ht=R.getParameter(3315),Bt=R.getParameter(32877),vt=J.isCompressedTexture?J.mipmaps[0]:J.image;R.pixelStorei(3314,vt.width),R.pixelStorei(32878,vt.height),R.pixelStorei(3316,C.min.x),R.pixelStorei(3315,C.min.y),R.pixelStorei(32877,C.min.z),J.isDataTexture||J.isData3DTexture?R.texSubImage3D(We,te,V.x,V.y,V.z,Ee,Ue,Be,ke,Ge,vt.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),R.compressedTexSubImage3D(We,te,V.x,V.y,V.z,Ee,Ue,Be,ke,vt.data)):R.texSubImage3D(We,te,V.x,V.y,V.z,Ee,Ue,Be,ke,Ge,vt),R.pixelStorei(3314,Ye),R.pixelStorei(32878,ft),R.pixelStorei(3316,it),R.pixelStorei(3315,ht),R.pixelStorei(32877,Bt),te===0&&B.generateMipmaps&&R.generateMipmap(We),ge.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?T.setTextureCube(C,0):C.isData3DTexture?T.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?T.setTexture2DArray(C,0):T.setTexture2D(C,0),ge.unbindTexture()},this.resetState=function(){_=0,b=0,v=null,ge.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Rh.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(i){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!i}}});class aC extends Rh{}aC.prototype.isWebGL1Renderer=!0;class lC extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class z_ extends Za{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fm=new Z,hm=new Z,dm=new Wt,ku=new M_,Cl=new kc;class cC extends Tn{constructor(e=new ur,t=new z_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)fm.fromBufferAttribute(t,r-1),hm.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=fm.distanceTo(hm);e.setAttribute("lineDistance",new zi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cl.copy(n.boundingSphere),Cl.applyMatrix4(r),Cl.radius+=s,e.ray.intersectsSphere(Cl)===!1)return;dm.copy(r).invert(),ku.copy(e.ray).applyMatrix4(dm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new Z,u=new Z,h=new Z,f=new Z,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let v=_,y=b-1;v<y;v+=p){const S=g.getX(v),P=g.getX(v+1);if(c.fromBufferAttribute(m,S),u.fromBufferAttribute(m,P),ku.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(f);x<e.near||x>e.far||t.push({distance:x,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let v=_,y=b-1;v<y;v+=p){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),ku.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(f);P<e.near||P>e.far||t.push({distance:P,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const pm=new Z,mm=new Z;class uC extends cC{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)pm.fromBufferAttribute(t,r),mm.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+pm.distanceTo(mm);e.setAttribute("lineDistance",new zi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const Al=new Z,Pl=new Z,Bu=new Z,Rl=new Ri;class fC extends ur{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Yl*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:d,b:m,c:_}=Rl;if(d.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),Rl.getNormal(Bu),h[0]=`${Math.round(d.x*r)},${Math.round(d.y*r)},${Math.round(d.z*r)}`,h[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,h[2]=`${Math.round(_.x*r)},${Math.round(_.y*r)},${Math.round(_.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const v=(b+1)%3,y=h[b],S=h[v],P=Rl[u[b]],A=Rl[u[v]],x=`${y}_${S}`,w=`${S}_${y}`;w in f&&f[w]?(Bu.dot(f[w].normal)<=s&&(p.push(P.x,P.y,P.z),p.push(A.x,A.y,A.z)),f[w]=null):x in f||(f[x]={index0:c[b],index1:c[v],normal:Bu.clone()})}}for(const g in f)if(f[g]){const{index0:d,index1:m}=f[g];Al.fromBufferAttribute(a,d),Pl.fromBufferAttribute(a,m),p.push(Al.x,Al.y,Al.z),p.push(Pl.x,Pl.y,Pl.z)}this.setAttribute("position",new zi(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ah);const hC={},U_=i=>(mh("data-v-149ad815"),i=i(),gh(),i),dC={class:"mv"},pC=U_(()=>me("h1",null,[ze("Shusuke Yoshizawa"),me("br"),me("small",null,"Portfolio")],-1)),mC=U_(()=>me("div",{class:"scroll"},null,-1)),gC=[pC,mC];function _C(i,e){return xn(),Mr("div",dC,gC)}const xC=$a(hC,[["render",_C],["__scopeId","data-v-149ad815"]]);function Ji(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function k_(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ao={duration:.5,overwrite:!1,delay:0},Lh,sn,It,ti=1e8,pt=1/ti,Cf=Math.PI*2,vC=Cf/4,yC=0,B_=Math.sqrt,bC=Math.cos,MC=Math.sin,Xt=function(e){return typeof e=="string"},Tt=function(e){return typeof e=="function"},ar=function(e){return typeof e=="number"},Dh=function(e){return typeof e>"u"},Vi=function(e){return typeof e=="object"},En=function(e){return e!==!1},Ih=function(){return typeof window<"u"},Ll=function(e){return Tt(e)||Xt(e)},G_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},on=Array.isArray,Af=/(?:-?\.?\d|\.)+/gi,V_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,no=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Gu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,H_=/[+-]=-?[.\d]+/,W_=/[^,'"\[\]\s]+/gi,SC=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Mt,Kn,Pf,Oh,qn={},dc={},X_,q_=function(e){return(dc=Cs(e,qn))&&Rn},Fh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},pc=function(e,t){return!t&&console.warn(e)},$_=function(e,t){return e&&(qn[e]=t)&&dc&&(dc[e]=t)||qn},Na=function(){return 0},wC={suppressEvents:!0,isStart:!0,kill:!1},Kl={suppressEvents:!0,kill:!1},TC={suppressEvents:!0},Nh={},Or=[],Rf={},Y_,Un={},Vu={},gm=30,Zl=[],zh="",Uh=function(e){var t=e[0],n,r;if(Vi(t)||Tt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Zl.length;r--&&!Zl[r].targetTest(t););n=Zl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new x0(e[r],n)))||e.splice(r,1);return e},xs=function(e){return e._gsap||Uh(ni(e))[0]._gsap},j_=function(e,t,n){return(n=e[t])&&Tt(n)?e[t]():Dh(n)&&e.getAttribute&&e.getAttribute(t)||n},Cn=function(e,t){return(e=e.split(",")).forEach(t)||e},At=function(e){return Math.round(e*1e5)/1e5||0},$t=function(e){return Math.round(e*1e7)/1e7||0},po=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},EC=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},mc=function(){var e=Or.length,t=Or.slice(0),n,r;for(Rf={},Or.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},K_=function(e,t,n,r){Or.length&&!sn&&mc(),e.render(t,n,r||sn&&t<0&&(e._initted||e._startAt)),Or.length&&!sn&&mc()},Z_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(W_).length<2?t:Xt(e)?e.trim():e},J_=function(e){return e},oi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},CC=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Cs=function(e,t){for(var n in t)e[n]=t[n];return e},_m=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Vi(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},gc=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},ma=function(e){var t=e.parent||Mt,n=e.keyframes?CC(on(e.keyframes)):oi;if(En(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},AC=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Q_=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Hc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Vr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},vs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},PC=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Lf=function(e,t,n,r){return e._startAt&&(sn?e._startAt.revert(Kl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},RC=function i(e){return!e||e._ts&&i(e.parent)},xm=function(e){return e._repeat?Po(e._tTime,e=e.duration()+e._rDelay)*e:0},Po=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},_c=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Wc=function(e){return e._end=$t(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},Xc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=$t(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Wc(e),n._dirty||vs(n,e)),e},e0=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=_c(e.rawTime(),t),(!t._dur||Ja(0,t.totalDuration(),n)-t._tTime>pt)&&t.render(n,!0)),vs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-pt}},Li=function(e,t,n,r){return t.parent&&Vr(t),t._start=$t((ar(n)?n:n||e!==Mt?jn(e,n,t):e._time)+t._delay),t._end=$t(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Q_(e,t,"_first","_last",e._sort?"_start":0),Df(t)||(e._recent=t),r||e0(e,t),e._ts<0&&Xc(e,e._tTime),e},t0=function(e,t){return(qn.ScrollTrigger||Fh("scrollTrigger",t))&&qn.ScrollTrigger.create(t,e)},n0=function(e,t,n,r,s){if(Bh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Y_!==Gn.frame)return Or.push(e),e._lazy=[s,r],1},LC=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Df=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},DC=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&LC(e)&&!(!e._initted&&Df(e))||(e._ts<0||e._dp._ts<0)&&!Df(e))?0:1,a=e._rDelay,l=0,c,u,h;if(a&&e._repeat&&(l=Ja(0,e._tDur,t),u=Po(l,a),e._yoyo&&u&1&&(o=1-o),u!==Po(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||sn||r||e._zTime===pt||!t&&e._zTime){if(!e._initted&&n0(e,t,r,n,l))return;for(h=e._zTime,e._zTime=t||(n?pt:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Lf(e,t,n,!0),e._onUpdate&&!n&&ii(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&ii(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Vr(e,1),!n&&!sn&&(ii(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},IC=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ro=function(e,t,n,r){var s=e._repeat,o=$t(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:$t(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Xc(e,e._tTime=e._tDur*a),e.parent&&Wc(e),n||vs(e.parent,e),e},vm=function(e){return e instanceof wn?vs(e):Ro(e,e._dur)},OC={_start:0,endTime:Na,totalDuration:Na},jn=function i(e,t,n){var r=e.labels,s=e._recent||OC,o=e.duration()>=ti?s.endTime(!1):e._dur,a,l,c;return Xt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(on(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},ga=function(e,t,n){var r=ar(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=En(l.vars.inherit)&&l.parent;o.immediateRender=En(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ft(t[0],o,t[s+1])},Xr=function(e,t){return e||e===0?t(e):t},Ja=function(e,t,n){return n<e?e:n>t?t:n},tn=function(e,t){return!Xt(e)||!(t=SC.exec(e))?"":t[1]},FC=function(e,t,n){return Xr(n,function(r){return Ja(e,t,r)})},If=[].slice,i0=function(e,t){return e&&Vi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Vi(e[0]))&&!e.nodeType&&e!==Kn},NC=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Xt(r)&&!t||i0(r,1)?(s=n).push.apply(s,ni(r)):n.push(r)})||n},ni=function(e,t,n){return It&&!t&&It.selector?It.selector(e):Xt(e)&&!n&&(Pf||!Lo())?If.call((t||Oh).querySelectorAll(e),0):on(e)?NC(e,n):i0(e)?If.call(e,0):e?[e]:[]},Of=function(e){return e=ni(e)[0]||pc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ni(t,n.querySelectorAll?n:n===e?pc("Invalid scope")||Oh.createElement("div"):e)}},r0=function(e){return e.sort(function(){return .5-Math.random()})},s0=function(e){if(Tt(e))return e;var t=Vi(e)?e:{each:e},n=ys(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,h=r;return Xt(r)?u=h={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],h=r[1]),function(f,p,g){var d=(g||t).length,m=o[d],_,b,v,y,S,P,A,x,w;if(!m){if(w=t.grid==="auto"?0:(t.grid||[1,ti])[1],!w){for(A=-ti;A<(A=g[w++].getBoundingClientRect().left)&&w<d;);w--}for(m=o[d]=[],_=l?Math.min(w,d)*u-.5:r%w,b=w===ti?0:l?d*h/w-.5:r/w|0,A=0,x=ti,P=0;P<d;P++)v=P%w-_,y=b-(P/w|0),m[P]=S=c?Math.abs(c==="y"?y:v):B_(v*v+y*y),S>A&&(A=S),S<x&&(x=S);r==="random"&&r0(m),m.max=A-x,m.min=x,m.v=d=(parseFloat(t.amount)||parseFloat(t.each)*(w>d?d-1:c?c==="y"?d/w:w:Math.max(w,d/w))||0)*(r==="edges"?-1:1),m.b=d<0?s-d:s,m.u=tn(t.amount||t.each)||0,n=n&&d<0?m0(n):n}return d=(m[f]-m.min)/m.max||0,$t(m.b+(n?n(d):d)*m.v)+m.u}},Ff=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=$t(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ar(n)?0:tn(n))}},o0=function(e,t){var n=on(e),r,s;return!n&&Vi(e)&&(r=n=e.radius||ti,e.values?(e=ni(e.values),(s=!ar(e[0]))&&(r*=r)):e=Ff(e.increment)),Xr(t,n?Tt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ti,u=0,h=e.length,f,p;h--;)s?(f=e[h].x-a,p=e[h].y-l,f=f*f+p*p):f=Math.abs(e[h]-a),f<c&&(c=f,u=h);return u=!r||c<=r?e[u]:o,s||u===o||ar(o)?u:u+tn(o)}:Ff(e))},a0=function(e,t,n,r){return Xr(on(e)?!t:n===!0?!!(n=0):!r,function(){return on(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},zC=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},UC=function(e,t){return function(n){return e(parseFloat(n))+(t||tn(n))}},kC=function(e,t,n){return c0(e,t,0,1,n)},l0=function(e,t,n){return Xr(n,function(r){return e[~~t(r)]})},BC=function i(e,t,n){var r=t-e;return on(e)?l0(e,i(0,e.length),t):Xr(n,function(s){return(r+(s-e)%r)%r+e})},GC=function i(e,t,n){var r=t-e,s=r*2;return on(e)?l0(e,i(0,e.length-1),t):Xr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},za=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?W_:Af),n+=e.substr(t,r-t)+a0(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},c0=function(e,t,n,r,s){var o=t-e,a=r-n;return Xr(s,function(l){return n+((l-e)/o*a||0)})},VC=function i(e,t,n,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Xt(e),a={},l,c,u,h,f;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(on(e)&&!on(t)){for(u=[],h=e.length,f=h-2,c=1;c<h;c++)u.push(i(e[c-1],e[c]));h--,s=function(g){g*=h;var d=Math.min(f,~~g);return u[d](g-d)},n=t}else r||(e=Cs(on(e)?[]:{},e));if(!u){for(l in t)kh.call(a,e,l,"get",t[l]);s=function(g){return Hh(g,a)||(o?e.p:e)}}}return Xr(n,s)},ym=function(e,t,n){var r=e.labels,s=ti,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},ii=function(e,t,n){var r=e.vars,s=r[t],o=It,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&Or.length&&mc(),a&&(It=a),u=l?s.apply(c,l):s.call(c),It=o,u},ra=function(e){return Vr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&ii(e,"onInterrupt"),e},io,u0=[],f0=function(e){if(!Ih()){u0.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=Tt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Na,render:Hh,add:kh,kill:rA,modifier:iA,rawVars:0},o={targetTest:0,get:0,getSetter:Vh,aliases:{},register:0};if(Lo(),e!==r){if(Un[t])return;oi(r,oi(gc(e,s),o)),Cs(r.prototype,Cs(s,gc(e,o))),Un[r.prop=t]=r,e.targetTest&&(Zl.push(r),Nh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}$_(t,r),e.register&&e.register(Rn,r,An)},dt=255,sa={aqua:[0,dt,dt],lime:[0,dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,dt],navy:[0,0,128],white:[dt,dt,dt],olive:[128,128,0],yellow:[dt,dt,0],orange:[dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[dt,0,0],pink:[dt,192,203],cyan:[0,dt,dt],transparent:[dt,dt,dt,0]},Hu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*dt+.5|0},h0=function(e,t,n){var r=e?ar(e)?[e>>16,e>>8&dt,e&dt]:0:sa.black,s,o,a,l,c,u,h,f,p,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),sa[e])r=sa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&dt,r&dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&dt,e&dt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Af),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Hu(l+1/3,s,o),r[1]=Hu(l,s,o),r[2]=Hu(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(V_),n&&r.length<4&&(r[3]=1),r}else r=e.match(Af)||sa.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/dt,o=r[1]/dt,a=r[2]/dt,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(p=h-f,c=u>.5?p/(2-h-f):p/(h+f),l=h===s?(o-a)/p+(o<a?6:0):h===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},d0=function(e){var t=[],n=[],r=-1;return e.split(Fr).forEach(function(s){var o=s.match(no)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},bm=function(e,t,n){var r="",s=(e+r).match(Fr),o=t?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return e;if(s=s.map(function(f){return(f=h0(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=d0(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Fr,"1").split(no),h=c.length-1;a<h;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(Fr),h=c.length-1;a<h;a++)r+=c[a]+s[a];return r+c[h]},Fr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in sa)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),HC=/hsl[a]?\(/,p0=function(e){var t=e.join(" "),n;if(Fr.lastIndex=0,Fr.test(t))return n=HC.test(t),e[1]=bm(e[1],n),e[0]=bm(e[0],n,d0(e[1])),!0},Ua,Gn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,h,f,p,g=function d(m){var _=i()-r,b=m===!0,v,y,S,P;if(_>e&&(n+=_-t),r+=_,S=r-n,v=S-o,(v>0||b)&&(P=++h.frame,f=S-h.time*1e3,h.time=S=S/1e3,o+=v+(v>=s?4:s-v),y=1),b||(l=c(d)),y)for(p=0;p<a.length;p++)a[p](S,f,P,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){X_&&(!Pf&&Ih()&&(Kn=Pf=window,Oh=Kn.document||{},qn.gsap=Rn,(Kn.gsapVersions||(Kn.gsapVersions=[])).push(Rn.version),q_(dc||Kn.GreenSockGlobals||!Kn.gsap&&Kn||{}),u=Kn.requestAnimationFrame,u0.forEach(f0)),l&&h.sleep(),c=u||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Ua=1,g(2))},sleep:function(){(u?Kn.cancelAnimationFrame:clearTimeout)(l),Ua=0,c=Na},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,_,b){var v=_?function(y,S,P,A){m(y,S,P,A),h.remove(v)}:m;return h.remove(m),a[b?"unshift":"push"](v),Lo(),v},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&p>=_&&p--},_listeners:a},h}(),Lo=function(){return!Ua&&Gn.wake()},nt={},WC=/^[\d.\-M][\d.\-,\s]/,XC=/["']/g,qC=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(XC,"").trim():+c,r=l.substr(a+1).trim();return t},$C=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},YC=function(e){var t=(e+"").split("("),n=nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[qC(t[1])]:$C(e).split(",").map(Z_)):nt._CE&&WC.test(e)?nt._CE("",e):n},m0=function(e){return function(t){return 1-e(1-t)}},g0=function i(e,t){for(var n=e._first,r;n;)n instanceof wn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},ys=function(e,t){return e&&(Tt(e)?e:nt[e]||YC(e))||t},Ds=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Cn(e,function(a){nt[a]=qn[a]=s,nt[o=a.toLowerCase()]=n;for(var l in s)nt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=nt[a+"."+l]=s[l]}),s},_0=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wu=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Cf*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*MC((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:_0(a);return s=Cf/s,l.config=function(c,u){return i(e,c,u)},l},Xu=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:_0(n);return r.config=function(s){return i(e,s)},r};Cn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Ds(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});nt.Linear.easeNone=nt.none=nt.Linear.easeIn;Ds("Elastic",Wu("in"),Wu("out"),Wu());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};Ds("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ds("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Ds("Circ",function(i){return-(B_(1-i*i)-1)});Ds("Sine",function(i){return i===1?1:-bC(i*vC)+1});Ds("Back",Xu("in"),Xu("out"),Xu());nt.SteppedEase=nt.steps=qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-pt;return function(a){return((r*Ja(0,o,a)|0)+s)*n}}};Ao.ease=nt["quad.out"];Cn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return zh+=i+","+i+"Params,"});var x0=function(e,t){this.id=yC++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:j_,this.set=t?t.getSetter:Vh},Do=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ro(this,+t.duration,1,1),this.data=t.data,It&&(this._ctx=It,It.data.push(this)),Ua||Gn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ro(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Lo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Xc(this,n),!s._dp||s.parent||e0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Li(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===pt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),K_(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+xm(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+xm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Po(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?_c(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pt?0:this._rts,this.totalTime(Ja(-Math.abs(this._delay),this._tDur,r),!0),Wc(this),PC(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Lo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Li(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(En(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_c(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=TC);var r=sn;return sn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vm(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,vm(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(jn(this,n),En(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,En(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-pt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Tt(n)?n:J_,a=function(){var c=r.then;r.then=null,Tt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){ra(this)},i}();oi(Do.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var wn=function(i){k_(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=En(n.sortChildren),Mt&&Li(n.parent||Mt,Ji(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&t0(Ji(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return ga(0,arguments,this),this},t.from=function(r,s,o){return ga(1,arguments,this),this},t.fromTo=function(r,s,o,a){return ga(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,ma(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ft(r,s,jn(this,o),1),this},t.call=function(r,s,o){return Li(this,Ft.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ft(r,o,jn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,ma(o).immediateRender=En(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,h){return a.startAt=o,ma(a).immediateRender=En(a.immediateRender),this.staggerTo(r,s,a,l,c,u,h)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:$t(r),h=this._zTime<0!=r<0&&(this._initted||!c),f,p,g,d,m,_,b,v,y,S,P,A;if(this!==Mt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),f=u,y=this._start,v=this._ts,_=!v,h&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(P=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(f=$t(u%m),u===l?(d=this._repeat,f=c):(d=~~(u/m),d&&d===u/m&&(f=c,d--),f>c&&(f=c)),S=Po(this._tTime,m),!a&&this._tTime&&S!==d&&this._tTime-S*m-this._dur<=0&&(S=d),P&&d&1&&(f=c-f,A=1),d!==S&&!this._lock){var x=P&&S&1,w=x===(P&&d&1);if(d<S&&(x=!x),a=x?0:c,this._lock=1,this.render(a||(A?0:$t(d*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&ii(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,a=x?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!_)return this;g0(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=IC(this,$t(a),$t(f)),b&&(u-=f-(f=b._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&f&&!s&&!d&&(ii(this,"onStart"),this._tTime!==u))return this;if(f>=a&&r>=0)for(p=this._first;p;){if(g=p._next,(p._act||f>=p._start)&&p._ts&&b!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(f-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(f-p._start)*p._ts,s,o),f!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=-pt);break}}p=g}else{p=this._last;for(var L=r<0?r:f;p;){if(g=p._prev,(p._act||L<=p._end)&&p._ts&&b!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(L-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(L-p._start)*p._ts,s,o||sn&&(p._initted||p._startAt)),f!==this._time||!this._ts&&!_){b=0,g&&(u+=this._zTime=L?-pt:pt);break}}p=g}}if(b&&!s&&(this.pause(),b.render(f>=a?0:-pt)._zTime=f>=a?1:-1,this._ts))return this._start=y,Wc(this),this.render(r,s,o);this._onUpdate&&!s&&ii(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Vr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(ii(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ar(s)||(s=jn(this,s,r)),!(r instanceof Do)){if(on(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Xt(r))return this.addLabel(r,s);if(Tt(r))r=Ft.delayedCall(0,r);else return this}return this!==r?Li(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ft?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Xt(r)?this.removeLabel(r):Tt(r)?this.killTweensOf(r):(Hc(this,r),r===this._recent&&(this._recent=this._last),vs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$t(Gn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=jn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Ft.delayedCall(0,s||Na,o);return a.data="isPause",this._hasPause=1,Li(this,a,jn(this,r))},t.removePause=function(r){var s=this._first;for(r=jn(this,r);s;)s._start===r&&s.data==="isPause"&&Vr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)Tr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ni(r),l=this._first,c=ar(s),u;l;)l instanceof Ft?EC(l._targets,a)&&(c?(!Tr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=jn(o,r),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,p,g=Ft.to(o,oi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||pt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&Ro(g,m,0,1).render(g._time,!0,!0),p=1}u&&u.apply(g,h||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,oi({startAt:{time:jn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ym(this,jn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ym(this,jn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return vs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),vs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ti,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Li(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ro(o,o===Mt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Mt._ts&&(K_(Mt,_c(r,Mt)),Y_=Gn.frame),Gn.frame>=gm){gm+=Xn.autoSleep||120;var s=Mt._first;if((!s||!s._ts)&&Xn.autoSleep&&Gn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Gn.sleep()}}},e}(Do);oi(wn.prototype,{_lock:0,_hasPause:0,_forcing:0});var jC=function(e,t,n,r,s,o,a){var l=new An(this._pt,e,t,0,1,w0,null,s),c=0,u=0,h,f,p,g,d,m,_,b;for(l.b=n,l.e=r,n+="",r+="",(_=~r.indexOf("random("))&&(r=za(r)),o&&(b=[n,r],o(b,e,t),n=b[0],r=b[1]),f=n.match(Gu)||[];h=Gu.exec(r);)g=h[0],d=r.substring(c,h.index),p?p=(p+1)%5:d.substr(-5)==="rgba("&&(p=1),g!==f[u++]&&(m=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:d||u===1?d:",",s:m,c:g.charAt(1)==="="?po(m,g)-m:parseFloat(g)-m,m:p&&p<4?Math.round:0},c=Gu.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(H_.test(r)||_)&&(l.e=0),this._pt=l,l},kh=function(e,t,n,r,s,o,a,l,c,u){Tt(r)&&(r=r(s||0,e,o));var h=e[t],f=n!=="get"?n:Tt(h)?c?e[t.indexOf("set")||!Tt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,p=Tt(h)?c?eA:M0:Gh,g;if(Xt(r)&&(~r.indexOf("random(")&&(r=za(r)),r.charAt(1)==="="&&(g=po(f,r)+(tn(f)||0),(g||g===0)&&(r=g))),!u||f!==r||Nf)return!isNaN(f*r)&&r!==""?(g=new An(this._pt,e,t,+f||0,r-(f||0),typeof h=="boolean"?nA:S0,0,p),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&Fh(t,r),jC.call(this,e,t,f,r,p,l||Xn.stringFilter,c))},KC=function(e,t,n,r,s){if(Tt(e)&&(e=_a(e,s,t,n,r)),!Vi(e)||e.style&&e.nodeType||on(e)||G_(e))return Xt(e)?_a(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=_a(e[a],s,t,n,r);return o},v0=function(e,t,n,r,s,o){var a,l,c,u;if(Un[e]&&(a=new Un[e]).init(s,a.rawVars?t[e]:KC(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new An(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==io))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Tr,Nf,Bh=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.onUpdateParams,h=r.callbackScope,f=r.runBackwards,p=r.yoyoEase,g=r.keyframes,d=r.autoRevert,m=e._dur,_=e._startAt,b=e._targets,v=e.parent,y=v&&v.data==="nested"?v.vars.targets:b,S=e._overwrite==="auto"&&!Lh,P=e.timeline,A,x,w,L,W,O,U,N,X,j,q,G,le;if(P&&(!g||!s)&&(s="none"),e._ease=ys(s,Ao.ease),e._yEase=p?m0(ys(p===!0?s:p,Ao.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!P&&!!r.runBackwards,!P||g&&!r.stagger){if(N=b[0]?xs(b[0]).harness:0,G=N&&r[N.prop],A=gc(r,Nh),_&&(_._zTime<0&&_.progress(1),t<0&&f&&a&&!d?_.render(-1,!0):_.revert(f&&m?Kl:wC),_._lazy=0),o){if(Vr(e._startAt=Ft.set(b,oi({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!_&&En(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:h,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!a&&!d)&&e._startAt.revert(Kl),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&m&&!_){if(t&&(a=!1),w=oi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&En(l),immediateRender:a,stagger:0,parent:v},A),G&&(w[N.prop]=G),Vr(e._startAt=Ft.set(b,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(Kl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&En(l)||l&&!m,x=0;x<b.length;x++){if(W=b[x],U=W._gsap||Uh(b)[x]._gsap,e._ptLookup[x]=j={},Rf[U.id]&&Or.length&&mc(),q=y===b?x:y.indexOf(W),N&&(X=new N).init(W,G||A,e,q,y)!==!1&&(e._pt=L=new An(e._pt,W,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(D){j[D]=L}),X.priority&&(O=1)),!N||G)for(w in A)Un[w]&&(X=v0(w,A,e,q,W,y))?X.priority&&(O=1):j[w]=L=kh.call(e,W,w,"get",A[w],q,y,0,r.stringFilter);e._op&&e._op[x]&&e.kill(W,e._op[x]),S&&e._pt&&(Tr=e,Mt.killTweensOf(W,j,e.globalTime(t)),le=!e.parent,Tr=0),e._pt&&l&&(Rf[U.id]=1)}O&&T0(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!le,g&&t<=0&&P.render(ti,!0,!0)},ZC=function(e,t,n,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,u,h,f;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,f=e._targets.length;f--;){if(c=h[f][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Nf=1,e.vars[t]="+=0",Bh(e,a),Nf=0,1;l.push(c)}for(f=l.length;f--;)u=l[f],c=u._pt||u,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=n-c.s,u.e&&(u.e=At(n)+tn(u.e)),u.b&&(u.b=c.s+tn(u.b))},JC=function(e,t){var n=e[0]?xs(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=Cs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},QC=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(on(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},_a=function(e,t,n,r,s){return Tt(e)?e.call(t,n,r,s):Xt(e)&&~e.indexOf("random(")?za(e):e},y0=zh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",b0={};Cn(y0+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return b0[i]=1});var Ft=function(i){k_(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:ma(r))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,p=l.overwrite,g=l.keyframes,d=l.defaults,m=l.scrollTrigger,_=l.yoyoEase,b=r.parent||Mt,v=(on(n)||G_(n)?ar(n[0]):"length"in r)?[n]:ni(n),y,S,P,A,x,w,L,W;if(a._targets=v.length?Uh(v):pc("GSAP target "+n+" not found. https://greensock.com",!Xn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,g||f||Ll(c)||Ll(u)){if(r=a.vars,y=a.timeline=new wn({data:"nested",defaults:d||{},targets:b&&b.data==="nested"?b.vars.targets:v}),y.kill(),y.parent=y._dp=Ji(a),y._start=0,f||Ll(c)||Ll(u)){if(A=v.length,L=f&&s0(f),Vi(f))for(x in f)~y0.indexOf(x)&&(W||(W={}),W[x]=f[x]);for(S=0;S<A;S++)P=gc(r,b0),P.stagger=0,_&&(P.yoyoEase=_),W&&Cs(P,W),w=v[S],P.duration=+_a(c,Ji(a),S,w,v),P.delay=(+_a(u,Ji(a),S,w,v)||0)-a._delay,!f&&A===1&&P.delay&&(a._delay=u=P.delay,a._start+=u,P.delay=0),y.to(w,P,L?L(S,w,v):0),y._ease=nt.none;y.duration()?c=u=0:a.timeline=0}else if(g){ma(oi(y.vars.defaults,{ease:"none"})),y._ease=ys(g.ease||r.ease||"none");var O=0,U,N,X;if(on(g))g.forEach(function(j){return y.to(v,j,">")}),y.duration();else{P={};for(x in g)x==="ease"||x==="easeEach"||QC(x,g[x],P,g.easeEach);for(x in P)for(U=P[x].sort(function(j,q){return j.t-q.t}),O=0,S=0;S<U.length;S++)N=U[S],X={ease:N.e,duration:(N.t-(S?U[S-1].t:0))/100*c},X[x]=N.v,y.to(v,X,O),O+=X.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return p===!0&&!Lh&&(Tr=Ji(a),Mt.killTweensOf(v),Tr=0),Li(b,Ji(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(h||!c&&!g&&a._start===$t(b._time)&&En(h)&&RC(Ji(a))&&b.data!=="nested")&&(a._tTime=-pt,a.render(Math.max(0,-u)||0)),m&&t0(Ji(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,h=r>l-pt&&!u?l:r<pt?0:r,f,p,g,d,m,_,b,v,y;if(!c)DC(this,r,s,o);else if(h!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(f=h,v=this.timeline,this._repeat){if(d=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(d*100+r,s,o);if(f=$t(h%d),h===l?(g=this._repeat,f=c):(g=~~(h/d),g&&g===h/d&&(f=c,g--),f>c&&(f=c)),_=this._yoyo&&g&1,_&&(y=this._yEase,f=c-f),m=Po(this._tTime,d),f===a&&!o&&this._initted)return this._tTime=h,this;g!==m&&(v&&this._yEase&&g0(v,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=o=1,this.render($t(d*g),!0).invalidate()._lock=0))}if(!this._initted){if(n0(this,u?r:f,o,s,h))return this._tTime=0,this;if(a!==this._time)return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(y||this._ease)(f/c),this._from&&(this.ratio=b=1-b),f&&!a&&!s&&!g&&(ii(this,"onStart"),this._tTime!==h))return this;for(p=this._pt;p;)p.r(b,p.d),p=p._next;v&&v.render(r<0?r:!f&&_?-pt:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Lf(this,r,s,o),ii(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&ii(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Lf(this,r,!0,!0),(r||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Vr(this,1),!s&&!(u&&!a)&&(h||a||_)&&(ii(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){Ua||Gn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Bh(this,l),c=this._ease(l/this._dur),ZC(this,r,s,o,a,c,l)?this.resetTo(r,s,o,a):(Xc(this,0),this.parent||Q_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ra(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Tr&&Tr.vars.overwrite!==!0)._first||ra(this),this.parent&&o!==this.timeline.totalDuration()&&Ro(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ni(r):a,c=this._ptLookup,u=this._pt,h,f,p,g,d,m,_;if((!s||s==="all")&&AC(a,l))return s==="all"&&(this._pt=0),ra(this);for(h=this._op=this._op||[],s!=="all"&&(Xt(s)&&(d={},Cn(s,function(b){return d[b]=1}),s=d),s=JC(a,s)),_=a.length;_--;)if(~l.indexOf(a[_])){f=c[_],s==="all"?(h[_]=s,g=f,p={}):(p=h[_]=h[_]||{},g=s);for(d in g)m=f&&f[d],m&&((!("kill"in m.d)||m.d.kill(d)===!0)&&Hc(this,m,"_pt"),delete f[d]),p!=="all"&&(p[d]=1)}return this._initted&&!this._pt&&u&&ra(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ga(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return ga(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Mt.killTweensOf(r,s,o)},e}(Do);oi(Ft.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Cn("staggerTo,staggerFrom,staggerFromTo",function(i){Ft[i]=function(){var e=new wn,t=If.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Gh=function(e,t,n){return e[t]=n},M0=function(e,t,n){return e[t](n)},eA=function(e,t,n,r){return e[t](r.fp,n)},tA=function(e,t,n){return e.setAttribute(t,n)},Vh=function(e,t){return Tt(e[t])?M0:Dh(e[t])&&e.setAttribute?tA:Gh},S0=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},nA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},w0=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},Hh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},iA=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},rA=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Hc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},sA=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},T0=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},An=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||S0,this.d=l||this,this.set=c||Gh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=sA,this.m=n,this.mt=s,this.tween=r},i}();Cn(zh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Nh[i]=1});qn.TweenMax=qn.TweenLite=Ft;qn.TimelineLite=qn.TimelineMax=wn;Mt=new wn({sortChildren:!1,defaults:Ao,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Xn.stringFilter=p0;var Io=[],Jl={},oA=[],Mm=0,qu=function(e){return(Jl[e]||oA).map(function(t){return t()})},zf=function(){var e=Date.now(),t=[];e-Mm>2&&(qu("matchMediaInit"),Io.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=Kn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),qu("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),Mm=e,qu("matchMedia"))},E0=function(){function i(t,n){this.selector=n&&Of(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Tt(n)&&(s=r,r=n,n=Tt);var o=this,a=function(){var c=It,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=Of(s)),It=o,h=r.apply(o,arguments),Tt(h)&&o._r.push(h),It=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===Tt?a(o):n?o[n]=a:a},e.ignore=function(n){var r=It;It=null,n(this),It=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Ft&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof Do)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r){var a=Io.indexOf(this);~a&&Io.splice(a,1)}},e.revert=function(n){this.kill(n||{})},i}(),aA=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){Vi(n)||(n={matches:n});var o=new E0(0,s||this.scope),a=o.conditions={},l,c,u;this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=Kn.matchMedia(n[c]),l&&(Io.indexOf(o)<0&&Io.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(zf):l.addEventListener("change",zf)));return u&&r(o),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),xc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return f0(r)})},timeline:function(e){return new wn(e)},getTweensOf:function(e,t){return Mt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Xt(e)&&(e=ni(e)[0]);var s=xs(e||{}).get,o=n?J_:Z_;return n==="native"&&(n=""),e&&(t?o((Un[t]&&Un[t].get||s)(e,t,n,r)):function(a,l,c){return o((Un[a]&&Un[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ni(e),e.length>1){var r=e.map(function(u){return Rn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var h=s;h--;)r[h](u)}}e=e[0]||{};var o=Un[t],a=xs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var h=new o;io._pt=0,h.init(e,n?u+n:u,io,0,[e]),h.render(1,h),io._pt&&Hh(1,io)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=Rn.to(e,Cs((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return Mt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ys(e.ease,Ao.ease)),_m(Ao,e||{})},config:function(e){return _m(Xn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Un[a]&&!qn[a]&&pc(t+" effect requires "+a+" plugin.")}),Vu[t]=function(a,l,c){return n(ni(a),oi(l||{},s),c)},o&&(wn.prototype[t]=function(a,l,c){return this.add(Vu[t](a,Vi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){nt[e]=ys(t)},parseEase:function(e,t){return arguments.length?ys(e,t):nt},getById:function(e){return Mt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new wn(e),r,s;for(n.smoothChildTiming=En(e.smoothChildTiming),Mt.remove(n),n._dp=0,n._time=n._tTime=Mt._time,r=Mt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ft&&r.vars.onComplete===r._targets[0]))&&Li(n,r,r._start-r._delay),r=s;return Li(Mt,n,0),n},context:function(e,t){return e?new E0(e,t):It},matchMedia:function(e){return new aA(e)},matchMediaRefresh:function(){return Io.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||zf()},addEventListener:function(e,t){var n=Jl[e]||(Jl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Jl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:BC,wrapYoyo:GC,distribute:s0,random:a0,snap:o0,normalize:kC,getUnit:tn,clamp:FC,splitColor:h0,toArray:ni,selector:Of,mapRange:c0,pipe:zC,unitize:UC,interpolate:VC,shuffle:r0},install:q_,effects:Vu,ticker:Gn,updateRoot:wn.updateRoot,plugins:Un,globalTimeline:Mt,core:{PropTween:An,globals:$_,Tween:Ft,Timeline:wn,Animation:Do,getCache:xs,_removeLinkedListItem:Hc,reverting:function(){return sn},context:function(e){return e&&It&&(It.data.push(e),e._ctx=It),It},suppressOverwrites:function(e){return Lh=e}}};Cn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return xc[i]=Ft[i]});Gn.add(wn.updateRoot);io=xc.to({},{duration:0});var lA=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},cA=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=lA(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},$u=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(Xt(s)&&(l={},Cn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}cA(a,s)}}}},Rn=xc.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},$u("roundProps",Ff),$u("modifiers"),$u("snap",o0))||xc;Ft.version=wn.version=Rn.version="3.11.5";X_=1;Ih()&&Lo();nt.Power0;nt.Power1;nt.Power2;nt.Power3;nt.Power4;nt.Linear;nt.Quad;nt.Cubic;nt.Quart;nt.Quint;nt.Strong;nt.Elastic;nt.Back;nt.SteppedEase;nt.Bounce;nt.Sine;nt.Expo;nt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Sm,Er,mo,Wh,ds,wm,Xh,uA=function(){return typeof window<"u"},lr={},ss=180/Math.PI,go=Math.PI/180,$s=Math.atan2,Tm=1e8,qh=/([A-Z])/g,fA=/(left|right|width|margin|padding|x)/i,hA=/[\s,\(]\S/,Di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Uf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dA=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},pA=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},mA=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},C0=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},A0=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},gA=function(e,t,n){return e.style[t]=n},_A=function(e,t,n){return e.style.setProperty(t,n)},xA=function(e,t,n){return e._gsap[t]=n},vA=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},yA=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},bA=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},St="transform",bi=St+"Origin",MA=function i(e,t){var n=this,r=this.target,s=r.style;if(e in lr){if(this.tfm=this.tfm||{},e!=="transform")e=Di[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Qi(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:Qi(r,e);else return Di.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(St)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(bi,t,"")),e=St}(s||t)&&this.props.push(e,t,s[e])},P0=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},SA=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(qh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Xh(),(!s||!s.isStart)&&!n[St]&&(P0(n),r.uncache=1)}},R0=function(e,t){var n={target:e,props:[],revert:SA,save:MA};return e._gsap||Rn.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},L0,kf=function(e,t){var n=Er.createElementNS?Er.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Er.createElement(e);return n.style?n:Er.createElement(e)},Ui=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(qh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Oo(t)||t,1)||""},Em="O,Moz,ms,Ms,Webkit".split(","),Oo=function(e,t,n){var r=t||ds,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Em[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Em[o]:"")+e},Bf=function(){uA()&&window.document&&(Sm=window,Er=Sm.document,mo=Er.documentElement,ds=kf("div")||{style:{}},kf("div"),St=Oo(St),bi=St+"Origin",ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",L0=!!Oo("perspective"),Xh=Rn.core.reverting,Wh=1)},Yu=function i(e){var t=kf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(mo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),mo.removeChild(t),this.style.cssText=s,o},Cm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},D0=function(e){var t;try{t=e.getBBox()}catch{t=Yu.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Yu||(t=Yu.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Cm(e,["x","cx","x1"])||0,y:+Cm(e,["y","cy","y1"])||0,width:0,height:0}:t},I0=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&D0(e))},ka=function(e,t){if(t){var n=e.style;t in lr&&t!==bi&&(t=St),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(qh,"-$1").toLowerCase())):n.removeAttribute(t)}},Cr=function(e,t,n,r,s,o){var a=new An(e._pt,t,n,0,1,o?A0:C0);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Am={deg:1,rad:1,turn:1},wA={grid:1,flex:1},Hr=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=ds.style,l=fA.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=r==="px",p=r==="%",g,d,m,_;return r===o||!s||Am[r]||Am[o]?s:(o!=="px"&&!f&&(s=i(e,t,n,"px")),_=e.getCTM&&I0(e),(p||o==="%")&&(lr[t]||~t.indexOf("adius"))?(g=_?e.getBBox()[l?"width":"height"]:e[u],At(p?s/g*h:s/100*g)):(a[l?"width":"height"]=h+(f?o:r),d=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(d=(e.ownerSVGElement||{}).parentNode),(!d||d===Er||!d.appendChild)&&(d=Er.body),m=d._gsap,m&&p&&m.width&&l&&m.time===Gn.time&&!m.uncache?At(s/m.width*h):((p||o==="%")&&!wA[Ui(d,"display")]&&(a.position=Ui(e,"position")),d===e&&(a.position="static"),d.appendChild(ds),g=ds[u],d.removeChild(ds),a.position="absolute",l&&p&&(m=xs(d),m.time=Gn.time,m.width=d[u]),At(f?g*s/h:g&&s?h/g*s:0))))},Qi=function(e,t,n,r){var s;return Wh||Bf(),t in Di&&t!=="transform"&&(t=Di[t],~t.indexOf(",")&&(t=t.split(",")[0])),lr[t]&&t!=="transform"?(s=Ga(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:yc(Ui(e,bi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=vc[t]&&vc[t](e,t,n)||Ui(e,t)||j_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Hr(e,t,s,n)+n:s},TA=function(e,t,n,r){if(!n||n==="none"){var s=Oo(t,e,1),o=s&&Ui(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ui(e,"borderTopColor"))}var a=new An(this._pt,e.style,t,0,1,w0),l=0,c=0,u,h,f,p,g,d,m,_,b,v,y,S;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=Ui(e,t)||r,e.style[t]=n),u=[n,r],p0(u),n=u[0],r=u[1],f=n.match(no)||[],S=r.match(no)||[],S.length){for(;h=no.exec(r);)m=h[0],b=r.substring(l,h.index),g?g=(g+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(g=1),m!==(d=f[c++]||"")&&(p=parseFloat(d)||0,y=d.substr((p+"").length),m.charAt(1)==="="&&(m=po(p,m)+y),_=parseFloat(m),v=m.substr((_+"").length),l=no.lastIndex-v.length,v||(v=v||Xn.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=Hr(e,t,d,v)||0),a._pt={_next:a._pt,p:b||c===1?b:",",s:p,c:_-p,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?A0:C0;return H_.test(r)&&(a.e=0),this._pt=a,a},Pm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},EA=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Pm[n]||n,t[1]=Pm[r]||r,t.join(" ")},CA=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],lr[a]&&(l=1,a=a==="transformOrigin"?bi:St),ka(n,a);l&&(ka(n,St),o&&(o.svg&&n.removeAttribute("transform"),Ga(n,1),o.uncache=1,P0(r)))}},vc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new An(e._pt,t,n,0,0,CA);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},Ba=[1,0,0,1,0,0],O0={},F0=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Rm=function(e){var t=Ui(e,St);return F0(t)?Ba:t.substr(7).match(V_).map(At)},$h=function(e,t){var n=e._gsap||xs(e),r=e.style,s=Rm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ba:s):(s===Ba&&!e.offsetParent&&e!==mo&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,mo.appendChild(e)),s=Rm(e),l?r.display=l:ka(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):mo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Gf=function(e,t,n,r,s,o){var a=e._gsap,l=s||$h(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,p=l[0],g=l[1],d=l[2],m=l[3],_=l[4],b=l[5],v=t.split(" "),y=parseFloat(v[0])||0,S=parseFloat(v[1])||0,P,A,x,w;n?l!==Ba&&(A=p*m-g*d)&&(x=y*(m/A)+S*(-d/A)+(d*b-m*_)/A,w=y*(-g/A)+S*(p/A)-(p*b-g*_)/A,y=x,S=w):(P=D0(e),y=P.x+(~v[0].indexOf("%")?y/100*P.width:y),S=P.y+(~(v[1]||v[0]).indexOf("%")?S/100*P.height:S)),r||r!==!1&&a.smooth?(_=y-c,b=S-u,a.xOffset=h+(_*p+b*d)-_,a.yOffset=f+(_*g+b*m)-b):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[bi]="0px 0px",o&&(Cr(o,a,"xOrigin",c,y),Cr(o,a,"yOrigin",u,S),Cr(o,a,"xOffset",h,a.xOffset),Cr(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},Ga=function(e,t){var n=e._gsap||new x0(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ui(e,bi)||"0",u,h,f,p,g,d,m,_,b,v,y,S,P,A,x,w,L,W,O,U,N,X,j,q,G,le,D,be,H,ue,pe,R;return u=h=f=d=m=_=b=v=y=0,p=g=1,n.svg=!!(e.getCTM&&I0(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[St]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[St]!=="none"?l[St]:"")),r.scale=r.rotate=r.translate="none"),A=$h(e,n.svg),n.svg&&(n.uncache?(G=e.getBBox(),c=n.xOrigin-G.x+"px "+(n.yOrigin-G.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Gf(e,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,A)),S=n.xOrigin||0,P=n.yOrigin||0,A!==Ba&&(W=A[0],O=A[1],U=A[2],N=A[3],u=X=A[4],h=j=A[5],A.length===6?(p=Math.sqrt(W*W+O*O),g=Math.sqrt(N*N+U*U),d=W||O?$s(O,W)*ss:0,b=U||N?$s(U,N)*ss+d:0,b&&(g*=Math.abs(Math.cos(b*go))),n.svg&&(u-=S-(S*W+P*U),h-=P-(S*O+P*N))):(R=A[6],ue=A[7],D=A[8],be=A[9],H=A[10],pe=A[11],u=A[12],h=A[13],f=A[14],x=$s(R,H),m=x*ss,x&&(w=Math.cos(-x),L=Math.sin(-x),q=X*w+D*L,G=j*w+be*L,le=R*w+H*L,D=X*-L+D*w,be=j*-L+be*w,H=R*-L+H*w,pe=ue*-L+pe*w,X=q,j=G,R=le),x=$s(-U,H),_=x*ss,x&&(w=Math.cos(-x),L=Math.sin(-x),q=W*w-D*L,G=O*w-be*L,le=U*w-H*L,pe=N*L+pe*w,W=q,O=G,U=le),x=$s(O,W),d=x*ss,x&&(w=Math.cos(x),L=Math.sin(x),q=W*w+O*L,G=X*w+j*L,O=O*w-W*L,j=j*w-X*L,W=q,X=G),m&&Math.abs(m)+Math.abs(d)>359.9&&(m=d=0,_=180-_),p=At(Math.sqrt(W*W+O*O+U*U)),g=At(Math.sqrt(j*j+R*R)),x=$s(X,j),b=Math.abs(x)>2e-4?x*ss:0,y=pe?1/(pe<0?-pe:pe):0),n.svg&&(q=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!F0(Ui(e,St)),q&&e.setAttribute("transform",q))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(p*=-1,b+=d<=0?180:-180,d+=d<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=At(p),n.scaleY=At(g),n.rotation=At(d)+a,n.rotationX=At(m)+a,n.rotationY=At(_)+a,n.skewX=b+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(r[bi]=yc(c)),n.xOffset=n.yOffset=0,n.force3D=Xn.force3D,n.renderTransform=n.svg?PA:L0?N0:AA,n.uncache=0,n},yc=function(e){return(e=e.split(" "))[0]+" "+e[1]},ju=function(e,t,n){var r=tn(t);return At(parseFloat(t)+parseFloat(Hr(e,"x",n+"px",r)))+r},AA=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,N0(e,t)},es="0deg",Jo="0px",ts=") ",N0=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,p=n.skewY,g=n.scaleX,d=n.scaleY,m=n.transformPerspective,_=n.force3D,b=n.target,v=n.zOrigin,y="",S=_==="auto"&&e&&e!==1||_===!0;if(v&&(h!==es||u!==es)){var P=parseFloat(u)*go,A=Math.sin(P),x=Math.cos(P),w;P=parseFloat(h)*go,w=Math.cos(P),o=ju(b,o,A*w*-v),a=ju(b,a,-Math.sin(P)*-v),l=ju(b,l,x*w*-v+v)}m!==Jo&&(y+="perspective("+m+ts),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(S||o!==Jo||a!==Jo||l!==Jo)&&(y+=l!==Jo||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ts),c!==es&&(y+="rotate("+c+ts),u!==es&&(y+="rotateY("+u+ts),h!==es&&(y+="rotateX("+h+ts),(f!==es||p!==es)&&(y+="skew("+f+", "+p+ts),(g!==1||d!==1)&&(y+="scale("+g+", "+d+ts),b.style[St]=y||"translate(0, 0)"},PA=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,p=n.target,g=n.xOrigin,d=n.yOrigin,m=n.xOffset,_=n.yOffset,b=n.forceCSS,v=parseFloat(o),y=parseFloat(a),S,P,A,x,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=go,c*=go,S=Math.cos(l)*h,P=Math.sin(l)*h,A=Math.sin(l-c)*-f,x=Math.cos(l-c)*f,c&&(u*=go,w=Math.tan(c-u),w=Math.sqrt(1+w*w),A*=w,x*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),S*=w,P*=w)),S=At(S),P=At(P),A=At(A),x=At(x)):(S=h,x=f,P=A=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Hr(p,"x",o,"px"),y=Hr(p,"y",a,"px")),(g||d||m||_)&&(v=At(v+g-(g*S+d*A)+m),y=At(y+d-(g*P+d*x)+_)),(r||s)&&(w=p.getBBox(),v=At(v+r/100*w.width),y=At(y+s/100*w.height)),w="matrix("+S+","+P+","+A+","+x+","+v+","+y+")",p.setAttribute("transform",w),b&&(p.style[St]=w)},RA=function(e,t,n,r,s){var o=360,a=Xt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ss:1),c=l-r,u=r+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*Tm)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*Tm)%o-~~(c/o)*o)),e._pt=f=new An(e._pt,t,n,r,c,dA),f.e=u,f.u="deg",e._props.push(n),f},Lm=function(e,t){for(var n in t)e[n]=t[n];return e},LA=function(e,t,n){var r=Lm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,p,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[St]=t,a=Ga(n,1),ka(n,St),n.setAttribute("transform",c)):(c=getComputedStyle(n)[St],o[St]=t,a=Ga(n,1),o[St]=c);for(l in lr)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(p=tn(c),g=tn(u),h=p!==g?Hr(n,l,c,g):parseFloat(c),f=parseFloat(u),e._pt=new An(e._pt,a,l,h,f-h,Uf),e._pt.u=g||0,e._props.push(l));Lm(a,r)};Cn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});vc[e>1?"border"+i:i]=function(a,l,c,u,h){var f,p;if(arguments.length<4)return f=o.map(function(g){return Qi(a,g,c)}),p=f.join(" "),p.split(f[0]).length===5?f[0]:p;f=(u+"").split(" "),p={},o.forEach(function(g,d){return p[g]=f[d]=f[d]||f[(d-1)/2|0]}),a.init(l,p,h)}});var z0={name:"css",register:Bf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,h,f,p,g,d,m,_,b,v,y,S,P,A,x;Wh||Bf(),this.styles=this.styles||R0(e),x=this.styles.props,this.tween=n;for(d in t)if(d!=="autoRound"&&(u=t[d],!(Un[d]&&v0(d,t,n,r,e,s)))){if(p=typeof u,g=vc[d],p==="function"&&(u=u.call(n,r,e,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=za(u)),g)g(this,e,d,u,n)&&(A=1);else if(d.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(d)+"").trim(),u+="",Fr.lastIndex=0,Fr.test(c)||(m=tn(c),_=tn(u)),_?m!==_&&(c=Hr(e,d,c,_)+_):m&&(u+=m),this.add(a,"setProperty",c,u,r,s,0,0,d),o.push(d),x.push(d,0,a[d]);else if(p!=="undefined"){if(l&&d in l?(c=typeof l[d]=="function"?l[d].call(n,r,e,s):l[d],Xt(c)&&~c.indexOf("random(")&&(c=za(c)),tn(c+"")||(c+=Xn.units[d]||tn(Qi(e,d))||""),(c+"").charAt(1)==="="&&(c=Qi(e,d))):c=Qi(e,d),f=parseFloat(c),b=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),b&&(u=u.substr(2)),h=parseFloat(u),d in Di&&(d==="autoAlpha"&&(f===1&&Qi(e,"visibility")==="hidden"&&h&&(f=0),x.push("visibility",0,a.visibility),Cr(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),d!=="scale"&&d!=="transform"&&(d=Di[d],~d.indexOf(",")&&(d=d.split(",")[0]))),v=d in lr,v){if(this.styles.save(d),y||(S=e._gsap,S.renderTransform&&!t.parseTransform||Ga(e,t.parseTransform),P=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new An(this._pt,a,St,0,1,S.renderTransform,S,0,-1),y.dep=1),d==="scale")this._pt=new An(this._pt,S,"scaleY",S.scaleY,(b?po(S.scaleY,b+h):h)-S.scaleY||0,Uf),this._pt.u=0,o.push("scaleY",d),d+="X";else if(d==="transformOrigin"){x.push(bi,0,a[bi]),u=EA(u),S.svg?Gf(e,u,0,P,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==S.zOrigin&&Cr(this,S,"zOrigin",S.zOrigin,_),Cr(this,a,d,yc(c),yc(u)));continue}else if(d==="svgOrigin"){Gf(e,u,1,P,0,this);continue}else if(d in O0){RA(this,S,d,f,b?po(f,b+u):u);continue}else if(d==="smoothOrigin"){Cr(this,S,"smooth",S.smooth,u);continue}else if(d==="force3D"){S[d]=u;continue}else if(d==="transform"){LA(this,u,e);continue}}else d in a||(d=Oo(d)||d);if(v||(h||h===0)&&(f||f===0)&&!hA.test(u)&&d in a)m=(c+"").substr((f+"").length),h||(h=0),_=tn(u)||(d in Xn.units?Xn.units[d]:m),m!==_&&(f=Hr(e,d,c,_)),this._pt=new An(this._pt,v?S:a,d,f,(b?po(f,b+h):h)-f,!v&&(_==="px"||d==="zIndex")&&t.autoRound!==!1?mA:Uf),this._pt.u=_||0,m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=pA);else if(d in a)TA.call(this,e,d,c,b?b+u:u);else if(d in e)this.add(e,d,c||e[d],b?b+u:u,r,s);else if(d!=="parseTransform"){Fh(d,u);continue}v||(d in a?x.push(d,0,a[d]):x.push(d,1,c||e[d])),o.push(d)}}A&&T0(this)},render:function(e,t){if(t.tween._time||!Xh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Qi,aliases:Di,getSetter:function(e,t,n){var r=Di[t];return r&&r.indexOf(",")<0&&(t=r),t in lr&&t!==bi&&(e._gsap.x||Qi(e,"x"))?n&&wm===n?t==="scale"?vA:xA:(wm=n||{})&&(t==="scale"?yA:bA):e.style&&!Dh(e.style[t])?gA:~t.indexOf("-")?_A:Vh(e,t)},core:{_removeProperty:ka,_getMatrix:$h}};Rn.utils.checkPrefix=Oo;Rn.core.getStyleSaver=R0;(function(i,e,t,n){var r=Cn(i+","+e+","+t,function(s){lr[s]=1});Cn(e,function(s){Xn.units[s]="deg",O0[s]=1}),Di[r[13]]=i+","+e,Cn(n,function(s){var o=s.split(":");Di[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Cn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Xn.units[i]="px"});Rn.registerPlugin(z0);var _o=Rn.registerPlugin(z0)||Rn;_o.core.Tween;function Dm(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function DA(i,e,t){return e&&Dm(i.prototype,e),t&&Dm(i,t),i}/*!
 * Observer 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var jt,Vf,Vn,Ar,Pr,xo,U0,os,xa,k0,nr,ui,B0,G0=function(){return jt||typeof window<"u"&&(jt=window.gsap)&&jt.registerPlugin&&jt},V0=1,ro=[],Qe=[],ki=[],va=Date.now,Hf=function(e,t){return t},IA=function(){var e=xa.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Qe),r.push.apply(r,ki),Qe=n,ki=r,Hf=function(o,a){return t[o](a)}},Nr=function(e,t){return~ki.indexOf(e)&&ki[ki.indexOf(e)+1][t]},ya=function(e){return!!~k0.indexOf(e)},yn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},cn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Dl="scrollLeft",Il="scrollTop",Wf=function(){return nr&&nr.isPressed||Qe.cache++},bc=function(e,t){var n=function r(s){if(s||s===0){V0&&(Vn.history.scrollRestoration="manual");var o=nr&&nr.isPressed;s=r.v=Math.round(s)||(nr&&nr.iOS?1:0),e(s),r.cacheID=Qe.cache,o&&Hf("ss",s)}else(t||Qe.cache!==r.cacheID||Hf("ref"))&&(r.cacheID=Qe.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},mn={s:Dl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:bc(function(i){return arguments.length?Vn.scrollTo(i,Nt.sc()):Vn.pageXOffset||Ar[Dl]||Pr[Dl]||xo[Dl]||0})},Nt={s:Il,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:mn,sc:bc(function(i){return arguments.length?Vn.scrollTo(mn.sc(),i):Vn.pageYOffset||Ar[Il]||Pr[Il]||xo[Il]||0})},Mn=function(e){return jt.utils.toArray(e)[0]||(typeof e=="string"&&jt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Wr=function(e,t){var n=t.s,r=t.sc;ya(e)&&(e=Ar.scrollingElement||Pr);var s=Qe.indexOf(e),o=r===Nt.sc?1:2;!~s&&(s=Qe.push(e)-1),Qe[s+o]||e.addEventListener("scroll",Wf);var a=Qe[s+o],l=a||(Qe[s+o]=bc(Nr(e,n),!0)||(ya(e)?r:bc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=jt.getProperty(e,"scrollBehavior")==="smooth"),l},Xf=function(e,t,n){var r=e,s=e,o=va(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,d){var m=va();d||m-o>l?(s=r,r=g,a=o,o=m):n?r+=g:r=s+(g-s)/(m-a)*(o-a)},h=function(){s=r=n?0:r,a=o=0},f=function(g){var d=a,m=s,_=va();return(g||g===0)&&g!==r&&u(g),o===a||_-a>c?0:(r+(n?m:-m))/((n?_:o)-d)*1e3};return{update:u,reset:h,getVelocity:f}},Qo=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Im=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},H0=function(){xa=jt.core.globals().ScrollTrigger,xa&&xa.core&&IA()},W0=function(e){return jt=e||G0(),jt&&typeof document<"u"&&document.body&&(Vn=window,Ar=document,Pr=Ar.documentElement,xo=Ar.body,k0=[Vn,Ar,Pr,xo],jt.utils.clamp,B0=jt.core.context||function(){},os="onpointerenter"in xo?"pointer":"mouse",U0=Ot.isTouch=Vn.matchMedia&&Vn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Vn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ui=Ot.eventTypes=("ontouchstart"in Pr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Pr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return V0=0},500),H0(),Vf=1),Vf};mn.op=Nt;Qe.cache=0;var Ot=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Vf||W0(jt)||console.warn("Please gsap.registerPlugin(Observer)"),xa||H0();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,p=n.ignore,g=n.wheelSpeed,d=n.event,m=n.onDragStart,_=n.onDragEnd,b=n.onDrag,v=n.onPress,y=n.onRelease,S=n.onRight,P=n.onLeft,A=n.onUp,x=n.onDown,w=n.onChangeX,L=n.onChangeY,W=n.onChange,O=n.onToggleX,U=n.onToggleY,N=n.onHover,X=n.onHoverEnd,j=n.onMove,q=n.ignoreCheck,G=n.isNormalizer,le=n.onGestureStart,D=n.onGestureEnd,be=n.onWheel,H=n.onEnable,ue=n.onDisable,pe=n.onClick,R=n.scrollSpeed,Y=n.capture,K=n.allowClicks,ae=n.lockAxis,ge=n.onLockAxis;this.target=a=Mn(a)||Pr,this.vars=n,p&&(p=jt.utils.toArray(p)),r=r||1e-9,s=s||0,g=g||1,R=R||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Vn.getComputedStyle(xo).lineHeight)||22);var Se,Me,T,I,$,Q,se,F=this,de=0,re=0,xe=Wr(a,mn),ce=Wr(a,Nt),E=xe(),M=ce(),k=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ui[0]==="pointerdown",ie=ya(a),ee=a.ownerDocument||Ar,fe=[0,0,0],ve=[0,0,0],ye=0,ne=function(){return ye=va()},Le=function(Ae,_e){return(F.event=Ae)&&p&&~p.indexOf(Ae.target)||_e&&k&&Ae.pointerType!=="touch"||q&&q(Ae,_e)},Re=function(){F._vx.reset(),F._vy.reset(),Me.pause(),h&&h(F)},Oe=function(){var Ae=F.deltaX=Im(fe),_e=F.deltaY=Im(ve),Ie=Math.abs(Ae)>=r,Xe=Math.abs(_e)>=r;W&&(Ie||Xe)&&W(F,Ae,_e,fe,ve),Ie&&(S&&F.deltaX>0&&S(F),P&&F.deltaX<0&&P(F),w&&w(F),O&&F.deltaX<0!=de<0&&O(F),de=F.deltaX,fe[0]=fe[1]=fe[2]=0),Xe&&(x&&F.deltaY>0&&x(F),A&&F.deltaY<0&&A(F),L&&L(F),U&&F.deltaY<0!=re<0&&U(F),re=F.deltaY,ve[0]=ve[1]=ve[2]=0),(I||T)&&(j&&j(F),T&&(b(F),T=!1),I=!1),Q&&!(Q=!1)&&ge&&ge(F),$&&(be(F),$=!1),Se=0},Ne=function(Ae,_e,Ie){fe[Ie]+=Ae,ve[Ie]+=_e,F._vx.update(Ae),F._vy.update(_e),c?Se||(Se=requestAnimationFrame(Oe)):Oe()},Ce=function(Ae,_e){ae&&!se&&(F.axis=se=Math.abs(Ae)>Math.abs(_e)?"x":"y",Q=!0),se!=="y"&&(fe[2]+=Ae,F._vx.update(Ae,!0)),se!=="x"&&(ve[2]+=_e,F._vy.update(_e,!0)),c?Se||(Se=requestAnimationFrame(Oe)):Oe()},He=function(Ae){if(!Le(Ae,1)){Ae=Qo(Ae,u);var _e=Ae.clientX,Ie=Ae.clientY,Xe=_e-F.x,$e=Ie-F.y,Lt=F.isDragging;F.x=_e,F.y=Ie,(Lt||Math.abs(F.startX-_e)>=s||Math.abs(F.startY-Ie)>=s)&&(b&&(T=!0),Lt||(F.isDragging=!0),Ce(Xe,$e),Lt||m&&m(F))}},De=F.onPress=function(Ve){Le(Ve,1)||Ve&&Ve.button||(F.axis=se=null,Me.pause(),F.isPressed=!0,Ve=Qo(Ve),de=re=0,F.startX=F.x=Ve.clientX,F.startY=F.y=Ve.clientY,F._vx.reset(),F._vy.reset(),yn(G?a:ee,ui[1],He,u,!0),F.deltaX=F.deltaY=0,v&&v(F))},ct=F.onRelease=function(Ve){if(!Le(Ve,1)){cn(G?a:ee,ui[1],He,!0);var Ae=!isNaN(F.y-F.startY),_e=F.isDragging&&(Math.abs(F.x-F.startX)>3||Math.abs(F.y-F.startY)>3),Ie=Qo(Ve);!_e&&Ae&&(F._vx.reset(),F._vy.reset(),u&&K&&jt.delayedCall(.08,function(){if(va()-ye>300&&!Ve.defaultPrevented){if(Ve.target.click)Ve.target.click();else if(ee.createEvent){var Xe=ee.createEvent("MouseEvents");Xe.initMouseEvent("click",!0,!0,Vn,1,Ie.screenX,Ie.screenY,Ie.clientX,Ie.clientY,!1,!1,!1,!1,0,null),Ve.target.dispatchEvent(Xe)}}})),F.isDragging=F.isGesturing=F.isPressed=!1,h&&!G&&Me.restart(!0),_&&_e&&_(F),y&&y(F,_e)}},z=function(Ae){return Ae.touches&&Ae.touches.length>1&&(F.isGesturing=!0)&&le(Ae,F.isDragging)},oe=function(){return(F.isGesturing=!1)||D(F)},he=function(Ae){if(!Le(Ae)){var _e=xe(),Ie=ce();Ne((_e-E)*R,(Ie-M)*R,1),E=_e,M=Ie,h&&Me.restart(!0)}},we=function(Ae){if(!Le(Ae)){Ae=Qo(Ae,u),be&&($=!0);var _e=(Ae.deltaMode===1?l:Ae.deltaMode===2?Vn.innerHeight:1)*g;Ne(Ae.deltaX*_e,Ae.deltaY*_e,0),h&&!G&&Me.restart(!0)}},Pe=function(Ae){if(!Le(Ae)){var _e=Ae.clientX,Ie=Ae.clientY,Xe=_e-F.x,$e=Ie-F.y;F.x=_e,F.y=Ie,I=!0,(Xe||$e)&&Ce(Xe,$e)}},st=function(Ae){F.event=Ae,N(F)},ut=function(Ae){F.event=Ae,X(F)},Et=function(Ae){return Le(Ae)||Qo(Ae,u)&&pe(F)};Me=F._dc=jt.delayedCall(f||.25,Re).pause(),F.deltaX=F.deltaY=0,F._vx=Xf(0,50,!0),F._vy=Xf(0,50,!0),F.scrollX=xe,F.scrollY=ce,F.isDragging=F.isGesturing=F.isPressed=!1,B0(this),F.enable=function(Ve){return F.isEnabled||(yn(ie?ee:a,"scroll",Wf),o.indexOf("scroll")>=0&&yn(ie?ee:a,"scroll",he,u,Y),o.indexOf("wheel")>=0&&yn(a,"wheel",we,u,Y),(o.indexOf("touch")>=0&&U0||o.indexOf("pointer")>=0)&&(yn(a,ui[0],De,u,Y),yn(ee,ui[2],ct),yn(ee,ui[3],ct),K&&yn(a,"click",ne,!1,!0),pe&&yn(a,"click",Et),le&&yn(ee,"gesturestart",z),D&&yn(ee,"gestureend",oe),N&&yn(a,os+"enter",st),X&&yn(a,os+"leave",ut),j&&yn(a,os+"move",Pe)),F.isEnabled=!0,Ve&&Ve.type&&De(Ve),H&&H(F)),F},F.disable=function(){F.isEnabled&&(ro.filter(function(Ve){return Ve!==F&&ya(Ve.target)}).length||cn(ie?ee:a,"scroll",Wf),F.isPressed&&(F._vx.reset(),F._vy.reset(),cn(G?a:ee,ui[1],He,!0)),cn(ie?ee:a,"scroll",he,Y),cn(a,"wheel",we,Y),cn(a,ui[0],De,Y),cn(ee,ui[2],ct),cn(ee,ui[3],ct),cn(a,"click",ne,!0),cn(a,"click",Et),cn(ee,"gesturestart",z),cn(ee,"gestureend",oe),cn(a,os+"enter",st),cn(a,os+"leave",ut),cn(a,os+"move",Pe),F.isEnabled=F.isPressed=F.isDragging=!1,ue&&ue(F))},F.kill=F.revert=function(){F.disable();var Ve=ro.indexOf(F);Ve>=0&&ro.splice(Ve,1),nr===F&&(nr=0)},ro.push(F),G&&ya(a)&&(nr=F),F.enable(d)},DA(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Ot.version="3.11.5";Ot.create=function(i){return new Ot(i)};Ot.register=W0;Ot.getAll=function(){return ro.slice()};Ot.getById=function(i){return ro.filter(function(e){return e.vars.id===i})[0]};G0()&&jt.registerPlugin(Ot);/*!
 * ScrollTrigger 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fe,Js,tt,yt,di,wt,X0,Mc,Sc,so,Ql,Ol,Qt,qc,qf,hn,Om,Fm,Qs,q0,Ku,$0,Nn,Y0,j0,K0,vr,$f,Yh,Zu,Fl=1,pn=Date.now,Ju=pn(),si=0,oa=0,OA=function i(){return oa&&requestAnimationFrame(i)},Nm=function(){return qc=1},zm=function(){return qc=0},Ei=function(e){return e},aa=function(e){return Math.round(e*1e5)/1e5||0},Z0=function(){return typeof window<"u"},J0=function(){return Fe||Z0()&&(Fe=window.gsap)&&Fe.registerPlugin&&Fe},As=function(e){return!!~X0.indexOf(e)},Q0=function(e){return Nr(e,"getBoundingClientRect")||(As(e)?function(){return sc.width=tt.innerWidth,sc.height=tt.innerHeight,sc}:function(){return er(e)})},FA=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=Nr(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?tt["inner"+s]:e["client"+s])||0}},NA=function(e,t){return!t||~ki.indexOf(e)?Q0(e):function(){return sc}},Rr=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=Nr(e,n))?o()-Q0(e)()[s]:As(e)?(di[n]||wt[n])-(tt["inner"+r]||di["client"+r]||wt["client"+r]):e[n]-e["offset"+r])},Nl=function(e,t){for(var n=0;n<Qs.length;n+=3)(!t||~t.indexOf(Qs[n+1]))&&e(Qs[n],Qs[n+1],Qs[n+2])},hi=function(e){return typeof e=="string"},gn=function(e){return typeof e=="function"},la=function(e){return typeof e=="number"},ec=function(e){return typeof e=="object"},ea=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Qu=function(e,t){if(e.enabled){var n=t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ys=Math.abs,ex="left",tx="top",jh="right",Kh="bottom",bs="width",Ms="height",ba="Right",Ma="Left",Sa="Top",wa="Bottom",Ct="padding",Qn="margin",Fo="Width",Zh="Height",qt="px",_i=function(e){return tt.getComputedStyle(e)},zA=function(e){var t=_i(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Um=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},er=function(e,t){var n=t&&_i(e)[qf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Fe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Yf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},nx=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},UA=function(e){return function(t){return Fe.utils.snap(nx(e),t)}},Jh=function(e){var t=Fe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},kA=function(e){return function(t,n){return Jh(nx(e))(t,n.direction)}},zl=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},Ht=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},Vt=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Ul=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},km={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},kl={toggleActions:"play",anticipatePin:0},wc={top:0,left:0,center:.5,bottom:1,right:1},tc=function(e,t){if(hi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in wc?wc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Bl=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,p=s.fontWeight,g=yt.createElement("div"),d=As(n)||Nr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=d?wt:n,b=e.indexOf("start")!==-1,v=b?c:u,y="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&d?"fixed;":"absolute;"),(m||l||!d)&&(y+=(r===Nt?jh:Kh)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=b,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(g,_.children[0]):_.appendChild(g),g._offset=g["offset"+r.op.d2],nc(g,0,r,b),g},nc=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+Fo]=1,s["border"+a+Fo]=0,s[n.p]=t+"px",Fe.set(e,s)},Ze=[],jf={},Va,Bm=function(){return pn()-si>34&&(Va||(Va=requestAnimationFrame(rr)))},js=function(){(!Nn||!Nn.isPressed||Nn.startX>wt.clientWidth)&&(Qe.cache++,Nn?Va||(Va=requestAnimationFrame(rr)):rr(),si||Rs("scrollStart"),si=pn())},ef=function(){K0=tt.innerWidth,j0=tt.innerHeight},ca=function(){Qe.cache++,!Qt&&!$0&&!yt.fullscreenElement&&!yt.webkitFullscreenElement&&(!Y0||K0!==tt.innerWidth||Math.abs(tt.innerHeight-j0)>tt.innerHeight*.25)&&Mc.restart(!0)},Ps={},BA=[],ix=function i(){return Vt(et,"scrollEnd",i)||ps(!0)},Rs=function(e){return Ps[e]&&Ps[e].map(function(t){return t()})||BA},zn=[],rx=function(e){for(var t=0;t<zn.length;t+=5)(!e||zn[t+4]&&zn[t+4].query===e)&&(zn[t].style.cssText=zn[t+1],zn[t].getBBox&&zn[t].setAttribute("transform",zn[t+2]||""),zn[t+3].uncache=1)},Qh=function(e,t){var n;for(hn=0;hn<Ze.length;hn++)n=Ze[hn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));t&&rx(t),t||Rs("revert")},sx=function(e,t){Qe.cache++,(t||!kn)&&Qe.forEach(function(n){return gn(n)&&n.cacheID++&&(n.rec=0)}),hi(e)&&(tt.history.scrollRestoration=Yh=e)},kn,Ss=0,Gm,GA=function(){if(Gm!==Ss){var e=Gm=Ss;requestAnimationFrame(function(){return e===Ss&&ps(!0)})}},ps=function(e,t){if(si&&!e){Ht(et,"scrollEnd",ix);return}kn=et.isRefreshing=!0,Qe.forEach(function(r){return gn(r)&&r.cacheID++&&(r.rec=r())});var n=Rs("refreshInit");q0&&et.sort(),t||Qh(),Qe.forEach(function(r){gn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Ze.slice(0).forEach(function(r){return r.refresh()}),Ze.forEach(function(r,s){if(r._subPinOffset&&r.pin){var o=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[o];r.revert(!0,1),r.adjustPinSpacing(r.pin[o]-a),r.refresh()}}),Ze.forEach(function(r){return r.vars.end==="max"&&r.setPositions(r.start,Math.max(r.start+1,Rr(r.scroller,r._dir)))}),n.forEach(function(r){return r&&r.render&&r.render(-1)}),Qe.forEach(function(r){gn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),sx(Yh,1),Mc.pause(),Ss++,kn=2,rr(2),Ze.forEach(function(r){return gn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),kn=et.isRefreshing=!1,Rs("refresh")},Kf=0,ic=1,Ta,rr=function(e){if(!kn||e===2){et.isUpdating=!0,Ta&&Ta.update(0);var t=Ze.length,n=pn(),r=n-Ju>=50,s=t&&Ze[0].scroll();if(ic=Kf>s?-1:1,kn||(Kf=s),r&&(si&&!qc&&n-si>200&&(si=0,Rs("scrollEnd")),Ql=Ju,Ju=n),ic<0){for(hn=t;hn-- >0;)Ze[hn]&&Ze[hn].update(0,r);ic=1}else for(hn=0;hn<t;hn++)Ze[hn]&&Ze[hn].update(0,r);et.isUpdating=!1}Va=0},Zf=[ex,tx,Kh,jh,Qn+wa,Qn+ba,Qn+Sa,Qn+Ma,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],rc=Zf.concat([bs,Ms,"boxSizing","max"+Fo,"max"+Zh,"position",Qn,Ct,Ct+Sa,Ct+ba,Ct+wa,Ct+Ma]),VA=function(e,t,n){vo(n);var r=e._gsap;if(r.spacerIsNative)vo(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},tf=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Zf.length,o=t.style,a=e.style,l;s--;)l=Zf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Kh]=a[jh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[bs]=Yf(e,mn)+qt,o[Ms]=Yf(e,Nt)+qt,o[Ct]=a[Qn]=a[tx]=a[ex]="0",vo(r),a[bs]=a["max"+Fo]=n[bs],a[Ms]=a["max"+Zh]=n[Ms],a[Ct]=n[Ct],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},HA=/([A-Z])/g,vo=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||Fe.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(HA,"-$1").toLowerCase())}},Gl=function(e){for(var t=rc.length,n=e.style,r=[],s=0;s<t;s++)r.push(rc[s],n[rc[s]]);return r.t=e,r},WA=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},sc={left:0,top:0},Vm=function(e,t,n,r,s,o,a,l,c,u,h,f,p){gn(e)&&(e=e(l)),hi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?tc("0"+e.substr(3),n):0));var g=p?p.time():0,d,m,_;if(p&&p.seek(0),la(e))p&&(e=Fe.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,f,e)),a&&nc(a,n,r,!0);else{gn(t)&&(t=t(l));var b=(e||"0").split(" "),v,y,S,P;_=Mn(t)||wt,v=er(_)||{},(!v||!v.left&&!v.top)&&_i(_).display==="none"&&(P=_.style.display,_.style.display="block",v=er(_),P?_.style.display=P:_.style.removeProperty("display")),y=tc(b[0],v[r.d]),S=tc(b[1]||"0",n),e=v[r.p]-c[r.p]-u+y+s-S,a&&nc(a,S,r,n-S<20||a._isStart&&S>20),n-=n-S}if(o){var A=e+n,x=o._isStart;d="scroll"+r.d2,nc(o,A,r,x&&A>20||!x&&(h?Math.max(wt[d],di[d]):o.parentNode[d])<=A+1),h&&(c=er(a),h&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+qt))}return p&&_&&(d=er(_),p.seek(f),m=er(_),p._caScrollDist=d[r.p]-m[r.p],e=e/p._caScrollDist*f),p&&p.seek(g),p?e:Math.round(e)},XA=/(webkit|moz|length|cssText|inset)/i,Hm=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===wt){e._stOrig=s.cssText,a=_i(e);for(o in a)!+o&&!XA.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;Fe.core.getCache(e).uncache=1,t.appendChild(e)}},ox=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=o,o}},Wm=function(e,t){var n=Wr(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,h){var f=o.tween,p=l.onComplete,g={};c=c||n();var d=ox(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[r]=a,l.modifiers=g,g[r]=function(){return d(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){Qe.cache++,rr()},l.onComplete=function(){o.tween=0,p&&p.call(f)},f=o.tween=Fe.to(e,l),f};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ht(e,"wheel",n.wheelHandler),et.isTouch&&Ht(e,"touchmove",n.wheelHandler),s},et=function(){function i(t,n){Js||i.register(Fe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!oa){this.update=this.refresh=this.kill=Ei;return}n=Um(hi(n)||la(n)||n.nodeType?{trigger:n}:n,kl);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,p=s.pin,g=s.pinSpacing,d=s.invalidateOnRefresh,m=s.anticipatePin,_=s.onScrubComplete,b=s.onSnapComplete,v=s.once,y=s.snap,S=s.pinReparent,P=s.pinSpacer,A=s.containerAnimation,x=s.fastScrollEnd,w=s.preventOverlaps,L=n.horizontal||n.containerAnimation&&n.horizontal!==!1?mn:Nt,W=!h&&h!==0,O=Mn(n.scroller||tt),U=Fe.core.getCache(O),N=As(O),X=("pinType"in n?n.pinType:Nr(O,"pinType")||N&&"fixed")==="fixed",j=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],q=W&&n.toggleActions.split(" "),G="markers"in n?n.markers:kl.markers,le=N?0:parseFloat(_i(O)["border"+L.p2+Fo])||0,D=this,be=n.onRefreshInit&&function(){return n.onRefreshInit(D)},H=FA(O,N,L),ue=NA(O,N),pe=0,R=0,Y=Wr(O,L),K,ae,ge,Se,Me,T,I,$,Q,se,F,de,re,xe,ce,E,M,k,ie,ee,fe,ve,ye,ne,Le,Re,Oe,Ne,Ce,He,De,ct,z,oe,he,we,Pe,st,ut;if($f(D),D._dir=L,m*=45,D.scroller=O,D.scroll=A?A.time.bind(A):Y,Se=Y(),D.vars=n,r=r||n.animation,"refreshPriority"in n&&(q0=1,n.refreshPriority===-9999&&(Ta=D)),U.tweenScroll=U.tweenScroll||{top:Wm(O,Nt),left:Wm(O,mn)},D.tweenTo=K=U.tweenScroll[L.p],D.scrubDuration=function(_e){ct=la(_e)&&_e,ct?De?De.duration(_e):De=Fe.to(r,{ease:"expo",totalProgress:"+=0.001",duration:ct,paused:!0,onComplete:function(){return _&&_(D)}}):(De&&De.progress(1).kill(),De=0)},r&&(r.vars.lazy=!1,r._initted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),D.animation=r.pause(),r.scrollTrigger=D,D.scrubDuration(h),De&&De.resetTo&&De.resetTo("totalProgress",0),Ce=0,l||(l=r.vars.id)),Ze.push(D),y&&((!ec(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in wt.style&&Fe.set(N?[wt,di]:O,{scrollBehavior:"auto"}),Qe.forEach(function(_e){return gn(_e)&&_e.target===(N?yt.scrollingElement||di:O)&&(_e.smooth=!1)}),ge=gn(y.snapTo)?y.snapTo:y.snapTo==="labels"?UA(r):y.snapTo==="labelsDirectional"?kA(r):y.directional!==!1?function(_e,Ie){return Jh(y.snapTo)(_e,pn()-R<500?0:Ie.direction)}:Fe.utils.snap(y.snapTo),z=y.duration||{min:.1,max:2},z=ec(z)?so(z.min,z.max):so(z,z),oe=Fe.delayedCall(y.delay||ct/2||.1,function(){var _e=Y(),Ie=pn()-R<500,Xe=K.tween;if((Ie||Math.abs(D.getVelocity())<10)&&!Xe&&!qc&&pe!==_e){var $e=(_e-T)/re,Lt=r&&!W?r.totalProgress():$e,C=Ie?0:(Lt-He)/(pn()-Ql)*1e3||0,V=Fe.utils.clamp(-$e,1-$e,Ys(C/2)*C/.185),J=$e+(y.inertia===!1?0:V),B=so(0,1,ge(J,D)),te=Math.round(T+B*re),Ee=y,Ue=Ee.onStart,Be=Ee.onInterrupt,ke=Ee.onComplete;if(_e<=I&&_e>=T&&te!==_e){if(Xe&&!Xe._initted&&Xe.data<=Ys(te-_e))return;y.inertia===!1&&(V=B-$e),K(te,{duration:z(Ys(Math.max(Ys(J-Lt),Ys(B-Lt))*.185/C/.05||0)),ease:y.ease||"power3",data:Ys(te-_e),onInterrupt:function(){return oe.restart(!0)&&Be&&Be(D)},onComplete:function(){D.update(),pe=Y(),Ce=He=r&&!W?r.totalProgress():D.progress,b&&b(D),ke&&ke(D)}},_e,V*re,te-_e-V*re),Ue&&Ue(D,K.tween)}}else D.isActive&&pe!==_e&&oe.restart(!0)}).pause()),l&&(jf[l]=D),f=D.trigger=Mn(f||p),ut=f&&f._gsap&&f._gsap.stRevert,ut&&(ut=ut(D)),p=p===!0?f:Mn(p),hi(a)&&(a={targets:f,className:a}),p&&(g===!1||g===Qn||(g=!g&&p.parentNode&&p.parentNode.style&&_i(p.parentNode).display==="flex"?!1:Ct),D.pin=p,ae=Fe.core.getCache(p),ae.spacer?xe=ae.pinState:(P&&(P=Mn(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),ae.spacerIsNative=!!P,P&&(ae.spacerState=Gl(P))),ae.spacer=M=P||yt.createElement("div"),M.classList.add("pin-spacer"),l&&M.classList.add("pin-spacer-"+l),ae.pinState=xe=Gl(p)),n.force3D!==!1&&Fe.set(p,{force3D:!0}),D.spacer=M=ae.spacer,Ne=_i(p),ye=Ne[g+L.os2],ie=Fe.getProperty(p),ee=Fe.quickSetter(p,L.a,qt),tf(p,M,Ne),E=Gl(p)),G){de=ec(G)?Um(G,km):km,se=Bl("scroller-start",l,O,L,de,0),F=Bl("scroller-end",l,O,L,de,0,se),k=se["offset"+L.op.d2];var Et=Mn(Nr(O,"content")||O);$=this.markerStart=Bl("start",l,Et,L,de,k,0,A),Q=this.markerEnd=Bl("end",l,Et,L,de,k,0,A),A&&(st=Fe.quickSetter([$,Q],L.a,qt)),!X&&!(ki.length&&Nr(O,"fixedMarkers")===!0)&&(zA(N?wt:O),Fe.set([se,F],{force3D:!0}),Le=Fe.quickSetter(se,L.a,qt),Oe=Fe.quickSetter(F,L.a,qt))}if(A){var Ve=A.vars.onUpdate,Ae=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){D.update(0,0,1),Ve&&Ve.apply(A,Ae||[])})}D.previous=function(){return Ze[Ze.indexOf(D)-1]},D.next=function(){return Ze[Ze.indexOf(D)+1]},D.revert=function(_e,Ie){if(!Ie)return D.kill(!0);var Xe=_e!==!1||!D.enabled,$e=Qt;Xe!==D.isReverted&&(Xe&&(we=Math.max(Y(),D.scroll.rec||0),he=D.progress,Pe=r&&r.progress()),$&&[$,Q,se,F].forEach(function(Lt){return Lt.style.display=Xe?"none":"block"}),Xe&&(Qt=D,D.update(Xe)),p&&(!S||!D.isActive)&&(Xe?VA(p,M,xe):tf(p,M,_i(p),ne)),Xe||D.update(Xe),Qt=$e,D.isReverted=Xe)},D.refresh=function(_e,Ie){if(!((Qt||!D.enabled)&&!Ie)){if(p&&_e&&si){Ht(i,"scrollEnd",ix);return}!kn&&be&&be(D),Qt=D,R=pn(),K.tween&&(K.tween.kill(),K.tween=0),De&&De.pause(),d&&r&&r.revert({kill:!1}).invalidate(),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;for(var Xe=H(),$e=ue(),Lt=A?A.duration():Rr(O,L),C=re<=.01,V=0,J=0,B=n.end,te=n.endTrigger||f,Ee=n.start||(n.start===0||!f?0:p?"0 0":"0 100%"),Ue=D.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer),Be=f&&Math.max(0,Ze.indexOf(D))||0,ke=Be,Ge,We,Ye,ft,it,ht,Bt,vt,Je,Wi,at;ke--;)ht=Ze[ke],ht.end||ht.refresh(0,1)||(Qt=D),Bt=ht.pin,Bt&&(Bt===f||Bt===p||Bt===Ue)&&!ht.isReverted&&(Wi||(Wi=[]),Wi.unshift(ht),ht.revert(!0,!0)),ht!==Ze[ke]&&(Be--,ke--);for(gn(Ee)&&(Ee=Ee(D)),T=Vm(Ee,f,Xe,L,Y(),$,se,D,$e,le,X,Lt,A)||(p?-.001:0),gn(B)&&(B=B(D)),hi(B)&&!B.indexOf("+=")&&(~B.indexOf(" ")?B=(hi(Ee)?Ee.split(" ")[0]:"")+B:(V=tc(B.substr(2),Xe),B=hi(Ee)?Ee:(A?Fe.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,T):T)+V,te=f)),I=Math.max(T,Vm(B||(te?"100% 0":Lt),te,Xe,L,Y()+V,Q,F,D,$e,le,X,Lt,A))||-.001,re=I-T||(T-=.01)&&.001,V=0,ke=Be;ke--;)ht=Ze[ke],Bt=ht.pin,Bt&&ht.start-ht._pinPush<=T&&!A&&ht.end>0&&(Ge=ht.end-ht.start,(Bt===f&&ht.start-ht._pinPush<T||Bt===Ue)&&!la(Ee)&&(V+=Ge*(1-ht.progress)),Bt===p&&(J+=Ge));if(T+=V,I+=V,C&&(he=Fe.utils.clamp(0,1,Fe.utils.normalize(T,I,we))),D._pinPush=J,$&&V&&(Ge={},Ge[L.a]="+="+V,Ue&&(Ge[L.p]="-="+Y()),Fe.set([$,Q],Ge)),p)Ge=_i(p),ft=L===Nt,Ye=Y(),fe=parseFloat(ie(L.a))+J,!Lt&&I>1&&(at=(N?yt.scrollingElement||di:O).style,at={style:at,value:at["overflow"+L.a.toUpperCase()]},at.style["overflow"+L.a.toUpperCase()]="scroll"),tf(p,M,Ge),E=Gl(p),We=er(p,!0),vt=X&&Wr(O,ft?mn:Nt)(),g&&(ne=[g+L.os2,re+J+qt],ne.t=M,ke=g===Ct?Yf(p,L)+re+J:0,ke&&ne.push(L.d,ke+qt),vo(ne),Ue&&Ze.forEach(function(Ln){Ln.pin===Ue&&Ln.vars.pinSpacing!==!1&&(Ln._subPinOffset=!0)}),X&&Y(we)),X&&(it={top:We.top+(ft?Ye-T:vt)+qt,left:We.left+(ft?vt:Ye-T)+qt,boxSizing:"border-box",position:"fixed"},it[bs]=it["max"+Fo]=Math.ceil(We.width)+qt,it[Ms]=it["max"+Zh]=Math.ceil(We.height)+qt,it[Qn]=it[Qn+Sa]=it[Qn+ba]=it[Qn+wa]=it[Qn+Ma]="0",it[Ct]=Ge[Ct],it[Ct+Sa]=Ge[Ct+Sa],it[Ct+ba]=Ge[Ct+ba],it[Ct+wa]=Ge[Ct+wa],it[Ct+Ma]=Ge[Ct+Ma],ce=WA(xe,it,S),kn&&Y(0)),r?(Je=r._initted,Ku(1),r.render(r.duration(),!0,!0),ve=ie(L.a)-fe+re+J,Re=Math.abs(re-ve)>1,X&&Re&&ce.splice(ce.length-2,2),r.render(0,!0,!0),Je||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Ku(0)):ve=re,at&&(at.value?at.style["overflow"+L.a.toUpperCase()]=at.value:at.style.removeProperty("overflow-"+L.a));else if(f&&Y()&&!A)for(We=f.parentNode;We&&We!==wt;)We._pinOffset&&(T-=We._pinOffset,I-=We._pinOffset),We=We.parentNode;Wi&&Wi.forEach(function(Ln){return Ln.revert(!1,!0)}),D.start=T,D.end=I,Se=Me=kn?we:Y(),!A&&!kn&&(Se<we&&Y(we),D.scroll.rec=0),D.revert(!1,!0),oe&&(pe=-1,D.isActive&&Y(T+re*he),oe.restart(!0)),Qt=0,r&&W&&(r._initted||Pe)&&r.progress()!==Pe&&r.progress(Pe,!0).render(r.time(),!0,!0),(C||he!==D.progress||A)&&(r&&!W&&r.totalProgress(A&&T<-.001&&!he?Fe.utils.normalize(T,I,0):he,!0),D.progress=(Se-T)/re===he?0:he),p&&g&&(M._pinOffset=Math.round(D.progress*ve)),De&&De.invalidate(),u&&!kn&&u(D)}},D.getVelocity=function(){return(Y()-Me)/(pn()-Ql)*1e3||0},D.endAnimation=function(){ea(D.callbackAnimation),r&&(De?De.progress(1):r.paused()?W||ea(r,D.direction<0,1):ea(r,r.reversed()))},D.labelToScroll=function(_e){return r&&r.labels&&(T||D.refresh()||T)+r.labels[_e]/r.duration()*re||0},D.getTrailing=function(_e){var Ie=Ze.indexOf(D),Xe=D.direction>0?Ze.slice(0,Ie).reverse():Ze.slice(Ie+1);return(hi(_e)?Xe.filter(function($e){return $e.vars.preventOverlaps===_e}):Xe).filter(function($e){return D.direction>0?$e.end<=T:$e.start>=I})},D.update=function(_e,Ie,Xe){if(!(A&&!Xe&&!_e)){var $e=kn===!0?we:D.scroll(),Lt=_e?0:($e-T)/re,C=Lt<0?0:Lt>1?1:Lt||0,V=D.progress,J,B,te,Ee,Ue,Be,ke,Ge;if(Ie&&(Me=Se,Se=A?Y():$e,y&&(He=Ce,Ce=r&&!W?r.totalProgress():C)),m&&!C&&p&&!Qt&&!Fl&&si&&T<$e+($e-Me)/(pn()-Ql)*m&&(C=1e-4),C!==V&&D.enabled){if(J=D.isActive=!!C&&C<1,B=!!V&&V<1,Be=J!==B,Ue=Be||!!C!=!!V,D.direction=C>V?1:-1,D.progress=C,Ue&&!Qt&&(te=C&&!V?0:C===1?1:V===1?2:3,W&&(Ee=!Be&&q[te+1]!=="none"&&q[te+1]||q[te],Ge=r&&(Ee==="complete"||Ee==="reset"||Ee in r))),w&&(Be||Ge)&&(Ge||h||!r)&&(gn(w)?w(D):D.getTrailing(w).forEach(function(it){return it.endAnimation()})),W||(De&&!Qt&&!Fl?(De._dp._time-De._start!==De._time&&De.render(De._dp._time-De._start),De.resetTo?De.resetTo("totalProgress",C,r._tTime/r._tDur):(De.vars.totalProgress=C,De.invalidate().restart())):r&&r.totalProgress(C,!!Qt)),p){if(_e&&g&&(M.style[g+L.os2]=ye),!X)ee(aa(fe+ve*C));else if(Ue){if(ke=!_e&&C>V&&I+1>$e&&$e+1>=Rr(O,L),S)if(!_e&&(J||ke)){var We=er(p,!0),Ye=$e-T;Hm(p,wt,We.top+(L===Nt?Ye:0)+qt,We.left+(L===Nt?0:Ye)+qt)}else Hm(p,M);vo(J||ke?ce:E),Re&&C<1&&J||ee(fe+(C===1&&!ke?ve:0))}}y&&!K.tween&&!Qt&&!Fl&&oe.restart(!0),a&&(Be||v&&C&&(C<1||!Zu))&&Sc(a.targets).forEach(function(it){return it.classList[J||v?"add":"remove"](a.className)}),o&&!W&&!_e&&o(D),Ue&&!Qt?(W&&(Ge&&(Ee==="complete"?r.pause().totalProgress(1):Ee==="reset"?r.restart(!0).pause():Ee==="restart"?r.restart(!0):r[Ee]()),o&&o(D)),(Be||!Zu)&&(c&&Be&&Qu(D,c),j[te]&&Qu(D,j[te]),v&&(C===1?D.kill(!1,1):j[te]=0),Be||(te=C===1?1:3,j[te]&&Qu(D,j[te]))),x&&!J&&Math.abs(D.getVelocity())>(la(x)?x:2500)&&(ea(D.callbackAnimation),De?De.progress(1):ea(r,Ee==="reverse"?1:!C,1))):W&&o&&!Qt&&o(D)}if(Oe){var ft=A?$e/A.duration()*(A._caScrollDist||0):$e;Le(ft+(se._isFlipped?1:0)),Oe(ft)}st&&st(-$e/A.duration()*(A._caScrollDist||0))}},D.enable=function(_e,Ie){D.enabled||(D.enabled=!0,Ht(O,"resize",ca),Ht(N?yt:O,"scroll",js),be&&Ht(i,"refreshInit",be),_e!==!1&&(D.progress=he=0,Se=Me=pe=Y()),Ie!==!1&&D.refresh())},D.getTween=function(_e){return _e&&K?K.tween:De},D.setPositions=function(_e,Ie){p&&(fe+=_e-T,ve+=Ie-_e-re,g===Ct&&D.adjustPinSpacing(Ie-_e-re)),D.start=T=_e,D.end=I=Ie,re=Ie-_e,D.update()},D.adjustPinSpacing=function(_e){if(ne&&_e){var Ie=ne.indexOf(L.d)+1;ne[Ie]=parseFloat(ne[Ie])+_e+qt,ne[1]=parseFloat(ne[1])+_e+qt,vo(ne)}},D.disable=function(_e,Ie){if(D.enabled&&(_e!==!1&&D.revert(!0,!0),D.enabled=D.isActive=!1,Ie||De&&De.pause(),we=0,ae&&(ae.uncache=1),be&&Vt(i,"refreshInit",be),oe&&(oe.pause(),K.tween&&K.tween.kill()&&(K.tween=0)),!N)){for(var Xe=Ze.length;Xe--;)if(Ze[Xe].scroller===O&&Ze[Xe]!==D)return;Vt(O,"resize",ca),Vt(O,"scroll",js)}},D.kill=function(_e,Ie){D.disable(_e,Ie),De&&!Ie&&De.kill(),l&&delete jf[l];var Xe=Ze.indexOf(D);Xe>=0&&Ze.splice(Xe,1),Xe===hn&&ic>0&&hn--,Xe=0,Ze.forEach(function($e){return $e.scroller===D.scroller&&(Xe=1)}),Xe||kn||(D.scroll.rec=0),r&&(r.scrollTrigger=null,_e&&r.revert({kill:!1}),Ie||r.kill()),$&&[$,Q,se,F].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),Ta===D&&(Ta=0),p&&(ae&&(ae.uncache=1),Xe=0,Ze.forEach(function($e){return $e.pin===p&&Xe++}),Xe||(ae.spacer=0)),n.onKill&&n.onKill(D)},D.enable(!1,!1),ut&&ut(D),!r||!r.add||re?D.refresh():Fe.delayedCall(.01,function(){return T||I||D.refresh()})&&(re=.01)&&(T=I=0),p&&GA()},i.register=function(n){return Js||(Fe=n||J0(),Z0()&&window.document&&i.enable(),Js=oa),Js},i.defaults=function(n){if(n)for(var r in n)kl[r]=n[r];return kl},i.disable=function(n,r){oa=0,Ze.forEach(function(o){return o[r?"kill":"disable"](n)}),Vt(tt,"wheel",js),Vt(yt,"scroll",js),clearInterval(Ol),Vt(yt,"touchcancel",Ei),Vt(wt,"touchstart",Ei),zl(Vt,yt,"pointerdown,touchstart,mousedown",Nm),zl(Vt,yt,"pointerup,touchend,mouseup",zm),Mc.kill(),Nl(Vt);for(var s=0;s<Qe.length;s+=3)Ul(Vt,Qe[s],Qe[s+1]),Ul(Vt,Qe[s],Qe[s+2])},i.enable=function(){if(tt=window,yt=document,di=yt.documentElement,wt=yt.body,Fe&&(Sc=Fe.utils.toArray,so=Fe.utils.clamp,$f=Fe.core.context||Ei,Ku=Fe.core.suppressOverwrites||Ei,Yh=tt.history.scrollRestoration||"auto",Kf=tt.pageYOffset,Fe.core.globals("ScrollTrigger",i),wt)){oa=1,OA(),Ot.register(Fe),i.isTouch=Ot.isTouch,vr=Ot.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ht(tt,"wheel",js),X0=[tt,yt,di,wt],Fe.matchMedia?(i.matchMedia=function(l){var c=Fe.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},Fe.addEventListener("matchMediaInit",function(){return Qh()}),Fe.addEventListener("matchMediaRevert",function(){return rx()}),Fe.addEventListener("matchMedia",function(){ps(0,1),Rs("matchMedia")}),Fe.matchMedia("(orientation: portrait)",function(){return ef(),ef})):console.warn("Requires GSAP 3.11.0 or later"),ef(),Ht(yt,"scroll",js);var n=wt.style,r=n.borderTopStyle,s=Fe.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=er(wt),Nt.m=Math.round(o.top+Nt.sc())||0,mn.m=Math.round(o.left+mn.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Ol=setInterval(Bm,250),Fe.delayedCall(.5,function(){return Fl=0}),Ht(yt,"touchcancel",Ei),Ht(wt,"touchstart",Ei),zl(Ht,yt,"pointerdown,touchstart,mousedown",Nm),zl(Ht,yt,"pointerup,touchend,mouseup",zm),qf=Fe.utils.checkPrefix("transform"),rc.push(qf),Js=pn(),Mc=Fe.delayedCall(.2,ps).pause(),Qs=[yt,"visibilitychange",function(){var l=tt.innerWidth,c=tt.innerHeight;yt.hidden?(Om=l,Fm=c):(Om!==l||Fm!==c)&&ca()},yt,"DOMContentLoaded",ps,tt,"load",ps,tt,"resize",ca],Nl(Ht),Ze.forEach(function(l){return l.enable(0,1)}),a=0;a<Qe.length;a+=3)Ul(Vt,Qe[a],Qe[a+1]),Ul(Vt,Qe[a],Qe[a+2])}},i.config=function(n){"limitCallbacks"in n&&(Zu=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Ol)||(Ol=r)&&setInterval(Bm,r),"ignoreMobileResize"in n&&(Y0=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Nl(Vt)||Nl(Ht,n.autoRefreshEvents||"none"),$0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Mn(n),o=Qe.indexOf(s),a=As(s);~o&&Qe.splice(o,a?6:2),r&&(a?ki.unshift(tt,r,wt,r,di,r):ki.unshift(s,r))},i.clearMatchMedia=function(n){Ze.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(hi(n)?Mn(n):n).getBoundingClientRect(),a=o[s?bs:Ms]*r||0;return s?o.right-a>0&&o.left+a<tt.innerWidth:o.bottom-a>0&&o.top+a<tt.innerHeight},i.positionInViewport=function(n,r,s){hi(n)&&(n=Mn(n));var o=n.getBoundingClientRect(),a=o[s?bs:Ms],l=r==null?a/2:r in wc?wc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/tt.innerWidth:(o.top+l)/tt.innerHeight},i.killAll=function(n){if(Ze.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=Ps.killAll||[];Ps={},r.forEach(function(s){return s()})}},i}();et.version="3.11.5";et.saveStyles=function(i){return i?Sc(i).forEach(function(e){if(e&&e.style){var t=zn.indexOf(e);t>=0&&zn.splice(t,5),zn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Fe.core.getCache(e),$f())}}):zn};et.revert=function(i,e){return Qh(!i,e)};et.create=function(i,e){return new et(i,e)};et.refresh=function(i){return i?ca():(Js||et.register())&&ps(!0)};et.update=function(i){return++Qe.cache&&rr(i===!0?2:0)};et.clearScrollMemory=sx;et.maxScroll=function(i,e){return Rr(i,e?mn:Nt)};et.getScrollFunc=function(i,e){return Wr(Mn(i),e?mn:Nt)};et.getById=function(i){return jf[i]};et.getAll=function(){return Ze.filter(function(i){return i.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!si};et.snapDirectional=Jh;et.addEventListener=function(i,e){var t=Ps[i]||(Ps[i]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(i,e){var t=Ps[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};et.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var h=[],f=[],p=Fe.delayedCall(r,function(){u(h,f),h=[],f=[]}).pause();return function(g){h.length||p.restart(!0),h.push(g.trigger),f.push(g),s<=h.length&&p.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&gn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return gn(s)&&(s=s(),Ht(et,"refresh",function(){return s=e.batchMax()})),Sc(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(et.create(c))}),t};var Xm=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},nf=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ot.isTouch?" pinch-zoom":""):"none",e===di&&i(wt,t)},Vl={auto:1,scroll:1},qA=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Fe.core.getCache(s),a=pn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==wt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Vl[(l=_i(s)).overflowY]||Vl[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!As(s)&&(Vl[(l=_i(s)).overflowY]||Vl[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ax=function(e,t,n,r){return Ot.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&qA,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Ht(yt,Ot.eventTypes[0],$m,!1,!0)},onDisable:function(){return Vt(yt,Ot.eventTypes[0],$m,!0)}})},$A=/(input|label|select|textarea)/i,qm,$m=function(e){var t=$A.test(e.target.tagName);(t||qm)&&(e._gsapAllow=!0,qm=t)},YA=function(e){ec(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Mn(e.target)||di,u=Fe.core.globals().ScrollSmoother,h=u&&u.get(),f=vr&&(e.content&&Mn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),p=Wr(c,Nt),g=Wr(c,mn),d=1,m=(Ot.isTouch&&tt.visualViewport?tt.visualViewport.scale*tt.visualViewport.width:tt.outerWidth)/tt.innerWidth,_=0,b=gn(r)?function(){return r(a)}:function(){return r||2.8},v,y,S=ax(c,e.type,!0,s),P=function(){return y=!1},A=Ei,x=Ei,w=function(){l=Rr(c,Nt),x=so(vr?1:0,l),n&&(A=so(0,Rr(c,mn))),v=Ss},L=function(){f._gsap.y=aa(parseFloat(f._gsap.y)+p.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},W=function(){if(y){requestAnimationFrame(P);var G=aa(a.deltaY/2),le=x(p.v-G);if(f&&le!==p.v+p.offset){p.offset=le-p.v;var D=aa((parseFloat(f&&f._gsap.y)||0)-p.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",f._gsap.y=D+"px",p.cacheID=Qe.cache,rr()}return!0}p.offset&&L(),y=!0},O,U,N,X,j=function(){w(),O.isActive()&&O.vars.scrollY>l&&(p()>l?O.progress(1)&&p(l):O.resetTo("scrollY",l))};return f&&Fe.set(f,{y:"+=0"}),e.ignoreCheck=function(q){return vr&&q.type==="touchmove"&&W()||d>1.05&&q.type!=="touchstart"||a.isGesturing||q.touches&&q.touches.length>1},e.onPress=function(){y=!1;var q=d;d=aa((tt.visualViewport&&tt.visualViewport.scale||1)/m),O.pause(),q!==d&&nf(c,d>1.01?!0:n?!1:"x"),U=g(),N=p(),w(),v=Ss},e.onRelease=e.onGestureStart=function(q,G){if(p.offset&&L(),!G)X.restart(!0);else{Qe.cache++;var le=b(),D,be;n&&(D=g(),be=D+le*.05*-q.velocityX/.227,le*=Xm(g,D,be,Rr(c,mn)),O.vars.scrollX=A(be)),D=p(),be=D+le*.05*-q.velocityY/.227,le*=Xm(p,D,be,Rr(c,Nt)),O.vars.scrollY=x(be),O.invalidate().duration(le).play(.01),(vr&&O.vars.scrollY>=l||D>=l-1)&&Fe.to({},{onUpdate:j,duration:le})}o&&o(q)},e.onWheel=function(){O._ts&&O.pause(),pn()-_>1e3&&(v=0,_=pn())},e.onChange=function(q,G,le,D,be){if(Ss!==v&&w(),G&&n&&g(A(D[2]===G?U+(q.startX-q.x):g()+G-D[1])),le){p.offset&&L();var H=be[2]===le,ue=H?N+q.startY-q.y:p()+le-be[1],pe=x(ue);H&&ue!==pe&&(N+=pe-ue),p(pe)}(le||G)&&rr()},e.onEnable=function(){nf(c,n?!1:"x"),et.addEventListener("refresh",j),Ht(tt,"resize",j),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=g.smooth=!1),S.enable()},e.onDisable=function(){nf(c,!0),Vt(tt,"resize",j),et.removeEventListener("refresh",j),S.kill()},e.lockAxis=e.lockAxis!==!1,a=new Ot(e),a.iOS=vr,vr&&!p()&&p(1),vr&&Fe.ticker.add(Ei),X=a._dc,O=Fe.to(a,{ease:"power4",paused:!0,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ox(p,p(),function(){return O.pause()})},onUpdate:rr,onComplete:X.vars.onComplete}),a};et.sort=function(i){return Ze.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};et.observe=function(i){return new Ot(i)};et.normalizeScroll=function(i){if(typeof i>"u")return Nn;if(i===!0&&Nn)return Nn.enable();if(i===!1)return Nn&&Nn.kill();var e=i instanceof Ot?i:YA(i);return Nn&&Nn.target===e.target&&Nn.kill(),As(e.target)&&(Nn=e),e};et.core={_getVelocityProp:Xf,_inputObserver:ax,_scrollers:Qe,_proxies:ki,bridge:{ss:function(){si||Rs("scrollStart"),si=pn()},ref:function(){return Qt}}};J0()&&Fe.registerPlugin(et);const lx="/portfolio/assets/rotating_gallery-d31b857b.jpg",cx="/portfolio/assets/seamless_color_ball-2a2861a9.jpg",ux="/portfolio/assets/particle_wave-c99d3ee3.jpg",fx="/portfolio/assets/target_game-2d33d328.jpg",hx="/portfolio/assets/todo_list-3fbfbd84.jpg",jA=i=>(mh("data-v-5e39415e"),i=i(),gh(),i),KA={class:"contents"},ZA={class:"list"},JA={class:"work-img-wrap is-img-wrap"},QA=["src"],e3=jA(()=>me("div",{class:"split-str-wrap"},[me("span",{class:"split-str is-hover-text"},"V"),me("span",{class:"split-str is-hover-text"},"i"),me("span",{class:"split-str is-hover-text"},"e"),me("span",{class:"split-str is-hover-text"},"w"),me("span",{class:"split-str is-hover-text"}," "),me("span",{class:"split-str is-hover-text"},"W"),me("span",{class:"split-str is-hover-text"},"o"),me("span",{class:"split-str is-hover-text"},"r"),me("span",{class:"split-str is-hover-text"},"k")],-1)),t3={class:"tecs-list"},n3={class:"tec is-tec"},i3=Hi({__name:"Contents",setup(i){const e=[{img:cx,link:"/seamless-color-ball",tecs:["Vue.js","Vue Router","Three.js"]},{img:lx,link:"/rotationg-gallery",tecs:["Vue.js","Three.js"]},{img:ux,link:"/particle-wave",tecs:["Vue.js","Three.js"]},{img:fx,link:"/target-game",tecs:["Vue.js","Vue Router","Vuex"]},{img:hx,link:"/todo-list",tecs:["Vue.js"]}],t=hh(),n=[],r=a=>{navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)||(n[a]=_o.to(`li:nth-child(${a+1}) .is-hover-text`,{y:5,opacity:1,duration:.2,stagger:.02}))},s=a=>{navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)||n[a].reverse()};_o.registerPlugin(et);const o=()=>{t.value.forEach(l=>{const c=l.querySelectorAll(".is-img-wrap")[0],u=l.querySelectorAll(".is-tec"),h=et.create({trigger:l,start:"top 85%",toggleActions:"play none none none"}),f=_o.timeline({scrollTrigger:h});f.fromTo(c,{opacity:0,scaleY:0},{opacity:1,scaleY:1,duration:.3}),f.fromTo(u,{opacity:0},{opacity:1,duration:.5,stagger:.2})})};return qa(()=>{o()}),(a,l)=>{const c=vh("router-link");return xn(),Mr("div",KA,[me("ul",ZA,[(xn(),Mr(Sn,null,pd(e,(u,h)=>me("li",{class:"item",ref_for:!0,ref_key:"item",ref:t},[zt(c,{to:u.link,class:"work-link",onMouseenter:f=>r(h),onMouseleave:f=>s(h)},{default:Gi(()=>[me("div",JA,[me("img",{class:"work-img",src:u.img,alt:""},null,8,QA),e3]),me("ul",t3,[(xn(!0),Mr(Sn,null,pd(u.tecs,f=>(xn(),Mr("li",n3,Px(f),1))),256))])]),_:2},1032,["to","onMouseenter","onMouseleave"])],512)),64))])])}}});const r3=$a(i3,[["__scopeId","data-v-5e39415e"]]);/*!
 * ScrollToPlugin 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _n,dx,sr,Ii,zr,px,mx,Hl,gx=function(){return typeof window<"u"},_x=function(){return _n||gx()&&(_n=window.gsap)&&_n.registerPlugin&&_n},xx=function(e){return typeof e=="string"},Ym=function(e){return typeof e=="function"},Ha=function(e,t){var n=t==="x"?"Width":"Height",r="scroll"+n,s="client"+n;return e===sr||e===Ii||e===zr?Math.max(Ii[r],zr[r])-(sr["inner"+n]||Ii[s]||zr[s]):e[r]-e["offset"+n]},Wa=function(e,t){var n="scroll"+(t==="x"?"Left":"Top");return e===sr&&(e.pageXOffset!=null?n="page"+t.toUpperCase()+"Offset":e=Ii[n]!=null?Ii:zr),function(){return e[n]}},s3=function(e,t,n,r){if(Ym(e)&&(e=e(t,n,r)),typeof e!="object")return xx(e)&&e!=="max"&&e.charAt(1)!=="="?{x:e,y:e}:{y:e};if(e.nodeType)return{y:e,x:e};var s={},o;for(o in e)s[o]=o!=="onAutoKill"&&Ym(e[o])?e[o](t,n,r):e[o];return s},vx=function(e,t){if(e=px(e)[0],!e||!e.getBoundingClientRect)return console.warn("scrollTo target doesn't exist. Using 0")||{x:0,y:0};var n=e.getBoundingClientRect(),r=!t||t===sr||t===zr,s=r?{top:Ii.clientTop-(sr.pageYOffset||Ii.scrollTop||zr.scrollTop||0),left:Ii.clientLeft-(sr.pageXOffset||Ii.scrollLeft||zr.scrollLeft||0)}:t.getBoundingClientRect(),o={x:n.left-s.left,y:n.top-s.top};return!r&&t&&(o.x+=Wa(t,"x")(),o.y+=Wa(t,"y")()),o},jm=function(e,t,n,r,s){return!isNaN(e)&&typeof e!="object"?parseFloat(e)-s:xx(e)&&e.charAt(1)==="="?parseFloat(e.substr(2))*(e.charAt(0)==="-"?-1:1)+r-s:e==="max"?Ha(t,n)-s:Math.min(Ha(t,n),vx(e,t)[n]-s)},Km=function(){_n=_x(),gx()&&_n&&typeof document<"u"&&document.body&&(sr=window,zr=document.body,Ii=document.documentElement,px=_n.utils.toArray,_n.config({autoKillThreshold:7}),mx=_n.config(),dx=1)},Qa={version:"3.11.5",name:"scrollTo",rawVars:1,register:function(e){_n=e,Km()},init:function(e,t,n,r,s){dx||Km();var o=this,a=_n.getProperty(e,"scrollSnapType");o.isWin=e===sr,o.target=e,o.tween=n,t=s3(t,r,e,s),o.vars=t,o.autoKill=!!t.autoKill,o.getX=Wa(e,"x"),o.getY=Wa(e,"y"),o.x=o.xPrev=o.getX(),o.y=o.yPrev=o.getY(),Hl||(Hl=_n.core.globals().ScrollTrigger),_n.getProperty(e,"scrollBehavior")==="smooth"&&_n.set(e,{scrollBehavior:"auto"}),a&&a!=="none"&&(o.snap=1,o.snapInline=e.style.scrollSnapType,e.style.scrollSnapType="none"),t.x!=null?(o.add(o,"x",o.x,jm(t.x,e,"x",o.x,t.offsetX||0),r,s),o._props.push("scrollTo_x")):o.skipX=1,t.y!=null?(o.add(o,"y",o.y,jm(t.y,e,"y",o.y,t.offsetY||0),r,s),o._props.push("scrollTo_y")):o.skipY=1},render:function(e,t){for(var n=t._pt,r=t.target,s=t.tween,o=t.autoKill,a=t.xPrev,l=t.yPrev,c=t.isWin,u=t.snap,h=t.snapInline,f,p,g,d,m;n;)n.r(e,n.d),n=n._next;f=c||!t.skipX?t.getX():a,p=c||!t.skipY?t.getY():l,g=p-l,d=f-a,m=mx.autoKillThreshold,t.x<0&&(t.x=0),t.y<0&&(t.y=0),o&&(!t.skipX&&(d>m||d<-m)&&f<Ha(r,"x")&&(t.skipX=1),!t.skipY&&(g>m||g<-m)&&p<Ha(r,"y")&&(t.skipY=1),t.skipX&&t.skipY&&(s.kill(),t.vars.onAutoKill&&t.vars.onAutoKill.apply(s,t.vars.onAutoKillParams||[]))),c?sr.scrollTo(t.skipX?f:t.x,t.skipY?p:t.y):(t.skipY||(r.scrollTop=t.y),t.skipX||(r.scrollLeft=t.x)),u&&(e===1||e===0)&&(p=r.scrollTop,f=r.scrollLeft,h?r.style.scrollSnapType=h:r.style.removeProperty("scroll-snap-type"),r.scrollTop=p+1,r.scrollLeft=f+1,r.scrollTop=p,r.scrollLeft=f),t.xPrev=t.x,t.yPrev=t.y,Hl&&Hl.update()},kill:function(e){var t=e==="scrollTo";(t||e==="scrollTo_x")&&(this.skipX=1),(t||e==="scrollTo_y")&&(this.skipY=1)}};Qa.max=Ha;Qa.getOffset=vx;Qa.buildGetter=Wa;_x()&&_n.registerPlugin(Qa);class yx{constructor(){_o.registerPlugin(Qa),_o.set(window,{duration:0,scrollTo:0})}}const o3=`void main() {
  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`,a3=`uniform float uTime;

void main() {
  vec3 pos = position;
  pos.y += (sin(uv.x * 50.0 + uTime) + cos(uv.x * 30.0 + uTime * 0.5)) * 10.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);

}`,l3={class:"wrap"},c3=Hi({__name:"Top",setup(i){const e=hh();let t=innerWidth,n=innerHeight;const r=new Rh({antialias:!0});r.setSize(t,n),r.setPixelRatio(devicePixelRatio);const o=500/2*(Math.PI/180);let a=n/2/Math.tan(o);const l=new Jn(75,t/n,.1,1e3);l.position.set(0,0,7),l.position.z=a;const c=new lC,u=new Gc(344,1,256,256),h={uTime:{value:0}},f=new Gr({vertexShader:a3,fragmentShader:o3,uniforms:h}),p=new tr(u,f);c.add(p);const g=new Bo(30,30,30),d=new fC(g),m=5,_=new Array(m),b=new z_({color:16777215}),v=[],y=[-80,90,-30,90,-100],S=[0,70,140,200,220],P=[70,20,-20,50,40];for(let x=0;x<m;x++)_[x]=new uC(d,b),_[x].position.set(y[x],-x*S[x]-n*.15,P[x]),_[x].rotation.x=Math.random()*2,_[x].rotation.y=Math.random()*2,_[x].rotation.z=Math.random()*2,v[x]=_[x].position.y,c.add(_[x]);window.addEventListener("resize",()=>{t=innerWidth,n=innerHeight,r.setSize(t,n),a=n/2/Math.tan(o),l.position.z=a,l.aspect=t/n,l.updateProjectionMatrix()});for(let x=0;x<m;x++)_[x].position.y=window.pageYOffset+v[x];window.addEventListener("scroll",()=>{for(let x=0;x<m;x++)_[x].position.y=(window.pageYOffset+v[x]-x*S[x]-n*.9)*.15,p.position.y=window.pageYOffset*.3});const A=()=>{requestAnimationFrame(()=>{A()}),r.render(c,l);for(let x=0;x<m;x++)_[x].rotation.y+=.005;h.uTime.value+=.1};return qa(()=>{new yx,e.value.appendChild(r.domElement),A()}),u_((x,w)=>{}),(x,w)=>(xn(),Mr("div",l3,[me("div",{ref_key:"canvas",ref:e,class:"canvas"},null,512),zt(xC),zt(r3)]))}});const u3=$a(c3,[["__scopeId","data-v-449e2ce8"]]),f3=i=>(mh("data-v-25bbafa4"),i=i(),gh(),i),h3={class:"wrap"},d3={class:"inner"},p3=["src"],m3={class:"link-wrap"},g3=["href"],_3=["href"],x3={class:"text-wrap"},v3=f3(()=>me("p",{class:"title"},"このアプリについて",-1)),y3={class:"text"},b3=Hi({__name:"Detail",props:{imgUrl:String,siteUrl:String,gitUrl:String,text:String},setup(i){return qa(()=>{new yx}),u_((e,t)=>{}),(e,t)=>{const n=vh("router-link");return xn(),Mr("div",h3,[me("div",d3,[me("img",{class:"main-img",src:i.imgUrl,alt:""},null,8,p3),me("div",m3,[me("p",null,[me("a",{href:i.siteUrl,target:"_blank"},"View Site",8,g3)]),me("p",null,[me("a",{href:i.gitUrl,target:"_blank"},"GitHub",8,_3)])]),me("div",x3,[v3,me("div",y3,[Wv(e.$slots,"default",{},void 0,!0)])]),zt(n,{class:"top-link",to:"/"},{default:Gi(()=>[ze("一覧へ戻る")]),_:1})])])}}});const el=$a(b3,[["__scopeId","data-v-25bbafa4"]]),M3=me("p",null,[ze(" Three.jsを触り始めて何を作ろうかと考えた時に、どこかで見たような複数の画像が回転している物を作ってみたいと思いました。"),me("br"),ze(" 参考にしたくて探してみたのですが、同じ様な物は見つけられませんでしたが..."),me("br"),ze(" しかし、オブジェクトが10個円状に並んでいるものがあったのでそれを基盤に作り始めてみました。 ")],-1),S3=me("br",null,null,-1),w3=me("p",null,[ze(" どの様にしたら元のオブジェクトが画像にできるのか、画像を常に外側を向かせて回転させるにはなど、ただ画像を回転させるだけ色々課題がありました。"),me("br"),ze(" ありましたが、ここまでは概ねスムーズに実装できました。"),me("br"),ze(" 思いの外早く完成してしまったため、もう少し手を加えようと考えました。 ")],-1),T3=me("br",null,null,-1),E3=me("p",null,[ze(" そこで、画像をクリックできる様にできたら面白そうと思い、その機能も実装してみました。"),me("br"),ze(" クリックしているオブジェクトを取得方法を探したのですが、マウスオーバーしているオブジェクトの取得方法ばかり出てきたのでその方法をクリックイベントに直すところから始まりました。"),me("br"),ze(" うまく動作してもクリックが残ってしまっていたり、画像を前に出した後空いたところにうまく戻る様にする処理など色々と試行錯誤が必要でした。"),me("br"),ze(" また、諸々を実装し終わった後にアニメーションをGSAPで実装してみたいと思いましたが、回転させる都合上サインコサインを使っておりその辺りがイマイチ上手くいかなかったので今回は全てJSでアニメーションさせています。"),me("br"),ze(" 機会があればGSAPでサインコサインを使ったアニメーションも実装してみたいです。 ")],-1),C3=me("br",null,null,-1),A3=me("p",null,[ze(" この作品を作るにあたり3Dを扱う上でサインコサインの重要性が理解できました。"),me("br"),ze(" 数学の知識はほとんど忘れてしまっていましたが、このアプリの場合はサインはX軸、コサインはZ軸くらいの認識で良かったのは幸いでした。"),me("br"),ze(" 使っている画像に関して正直なんでも良かったのですが、せっかくなら好きなものをと思いポケモンにしてみました。"),me("br"),ze(" ちょうど良い画像の形で種類が多く、非常に使い勝手も良かったです。"),me("br"),ze(" 最後に2段にしてそれでも隙間がとても空いていたのでテキストとパーティクルを散らせてみました。"),me("br"),ze(" 拙いコードと拙すぎるデザインですが、ぜひ見てみてください。 ")],-1),P3=Hi({__name:"RotationgGallery",setup(i){return(e,t)=>(xn(),Ls(el,{imgUrl:yi(lx),siteUrl:"https://yoshizawa888.github.io/rotating-gallery",gitUrl:"https://github.com/yoshizawa888/rotating-gallery/"},{default:Gi(()=>[M3,S3,w3,T3,E3,C3,A3]),_:1},8,["imgUrl"]))}}),R3=me("p",null,[ze(" このアプリはシームレスな画面遷移はどのように実装するのだろうかと言う疑問から出来上がりました。"),me("br"),ze(" Vue Routerを使いページ遷移しつつも真ん中のボールはそれを感じさせないように実装しています。 ")],-1),L3=me("br",null,null,-1),D3=me("p",null,[ze(" 最初は動かないオブジェクトにページによって色がフワッとつくだけの物でした。"),me("br"),ze(" それで原理自体はわかったのですが、せっかくならもう少し凝った物にしようともう少し手を加えてみました。"),me("br"),ze(" Three.jsの勉強をしていく中でShaderという物を使うと複雑な動きも実装できることを知ったので、そちらも合わせて実装することにしました。"),me("br"),ze(" このShaderはGLSLという言語を使用します。 波を実装しただけだとせっかくの3Dにもかかわらず立体感が全くなかったので、波の高さに応じての色と影をつけることで立体感を出しています。"),me("br")],-1),I3=me("br",null,null,-1),O3=me("p",null,[ze(" また、Noiseを使ってみたく、Redの色とGreenの動きは適当なNoiseを使っています。"),me("br"),ze(" このようにShaderを使うにあたり、最初はJS側で付けていた色をGLSL側でつけるようになり、その影響で色や動きが上手くシームレスにならなくなってしまいました。"),me("br"),ze(" これを解消するのにGLSLのmixという関数を使いました。"),me("br"),ze(" mixは第1、第2引数を第3引数によって割合を決めるという関数です。"),me("br"),ze(" この関数と第3引数をGSAPで操作することでシームレスな挙動にする事ができました。"),me("br")],-1),F3=me("p",null,[ze(" 現状の実装方法が最適なのかはわかりませんが、上手く実装できて幸いでした。"),me("br"),ze(" 最後に、このアプリはボールをマウスやタッチで回転させる事ができるようにしてあります。"),me("br"),ze(" RedはNoiseを使っている関係でわかりにくいですが、ぜひ触ってみてください。 ")],-1),N3=Hi({__name:"SeamlessColorBall",setup(i){return(e,t)=>(xn(),Ls(el,{imgUrl:yi(cx),siteUrl:"https://yoshizawa888.github.io/seamless-color-ball",gitUrl:"https://github.com/yoshizawa888/seamless-color-ball/"},{default:Gi(()=>[R3,L3,D3,I3,O3,F3]),_:1},8,["imgUrl"]))}}),z3=me("p",null,[ze(" こちらを作成しようと思ったきっかけは、学生の頃に卒業制作でUnityのVFXでパーティクルを触れたことがきっかけです。"),me("br"),ze(" 作っていて楽しくとても綺麗だったのでWebでもパーティクルがメインのものを作成してみました。 ")],-1),U3=me("br",null,null,-1),k3=me("p",null,[ze(" 構造は比較的シンプルです。"),me("br"),ze(" パーティクルが生成される2本の領域を生成し、左から右に流してサイン、コサイン、タンジェントで動きをつけています。"),me("br"),ze(" 色は赤を固定値にして青と緑は座標によって色が変わるようにしてグラデーションにしてみました。"),me("br"),ze(" 本当はもっとパーティクルを細かくして数を増やしたかったのですが、PCへの負荷を鑑みて今の形になっています。 ")],-1),B3=Hi({__name:"ParticleWave",setup(i){return(e,t)=>(xn(),Ls(el,{imgUrl:yi(ux),siteUrl:"https://yoshizawa888.github.io/particle-wave/",gitUrl:"https://github.com/yoshizawa888/particle-wave"},{default:Gi(()=>[z3,U3,k3]),_:1},8,["imgUrl"]))}}),G3=me("p",null,[ze(" こちらはVueを一通り学んだ後、最初に作成した物です。"),me("br"),ze(" 学んだ内容をなるべく使いたくてVue Router、Vuex、Transitonなど色々使えていると思います。"),me("br"),ze(" 何を作ってみようか悩みましたがVueといえばWebアプリ、尚且つVuexを使いたかった都合上値のやり取りが必要だと考え、ゲームを作ってみることにしました。"),me("br"),ze(" また、この時に勉強した内容がVue2でOptionAPIだったためこのアプリのみ、Vue2で作成しています。 ")],-1),V3=me("br",null,null,-1),H3=me("p",null,[ze(" ゲーム内容はエイム練習ができるゲームアプリです。"),me("br"),ze(" とにかく何か1つ作ってみたかったため、ゲームの内容は簡素なものにしました。"),me("br"),ze(" ランキング機能も付けており、リザルト画面で5位まで表示するようにしています。 ")],-1),W3=me("br",null,null,-1),X3=me("p",null,"このアプリを作らなかったらVue2で自発的に何か作ることは無かった可能性があったので、Vue2から学び始め、どのように記述していくのかが理解できて良かったと感じてます。",-1),q3=Hi({__name:"TargetGame",setup(i){return(e,t)=>(xn(),Ls(el,{imgUrl:yi(fx),siteUrl:"https://yoshizawa888.github.io/vue-target-game/",gitUrl:"https://github.com/yoshizawa888/vue-target-game"},{default:Gi(()=>[G3,V3,H3,W3,X3]),_:1},8,["imgUrl"]))}}),$3=me("p",null,[ze(" こちらはVue3でCompositionAPIを使って作成しています。"),me("br"),ze(" Vueの勉強の過程で色々調べていると、練習でTODOリストを作っているサイトをいくつも見ました。"),me("br"),ze(" 詳細を見ていくとテキストボックスに文字を入力して、ボタンを押すと下にリストで表示され、リロードすると消えてしまうという簡素なものが殆どでした。"),me("br"),ze(" そこでリロードしても消えず、もう少し使い勝手が良いものをと思い制作を始めました。 ")],-1),Y3=me("br",null,null,-1),j3=me("p",null,[ze(" どのような形にしようかと考えた時に、昔使っていたAsanaというTODOリストのWebアプリを思い出し、それを参考に作ってみようと思いました。"),me("br"),ze(" そのため、子リストはドラックで移動できるようにしています。"),me("br"),ze(" また、このアプリは敢えてCookieを使って実装しています。"),me("br"),ze(" 元々localStorage等を使用した方がいいと考えており、そのように実装しようとしました。"),me("br"),ze(" しかし、localStorageだとブラウザにデータが残ってしまいます。"),me("br"),ze(" サービスとしてリリースするならその実装がいいかと思います。"),me("br"),ze(" ですが、ポートフォリオとして見ていただくことを想定していたため、データが残ってしまうのが心苦しくそのままブラウザを閉じても勝手に消えるCookieを採用しました。 ")],-1),K3=Hi({__name:"TodoList",setup(i){return(e,t)=>(xn(),Ls(el,{imgUrl:yi(hx),siteUrl:"https://yoshizawa888.github.io/vue-todo-list/",gitUrl:"https://github.com/yoshizawa888/vue-todo-list"},{default:Gi(()=>[$3,Y3,j3]),_:1},8,["imgUrl"]))}}),Z3=[{path:"/",component:u3},{path:"/rotationg-gallery",component:P3},{path:"/seamless-color-ball",component:N3},{path:"/particle-wave",component:B3},{path:"/target-game",component:q3},{path:"/todo-list",component:K3}],J3=nM({history:xb("/portfolio/"),routes:Z3}),bx=jy(eb);bx.use(J3);bx.mount("#app");
