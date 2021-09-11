function e(e,t){const n=Object.create(null),i=e.split(",");for(let r=0;r<i.length;r++)n[i[r]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function n(e){return!!e||""===e}function i(e){if(b(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=I(r)?o(r):i(r);if(s)for(const e in s)t[e]=s[e]}return t}return I(e)||S(e)?e:void 0}const r=/;(?![^(]*\))/g,s=/:(.+)/;function o(e){const t={};return e.split(r).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(I(e))t=e;else if(b(e))for(let n=0;n<e.length;n++){const i=a(e[n]);i&&(t+=i+" ")}else if(S(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const l=e=>null==e?"":b(e)||S(e)&&(e.toString===P||!T(e.toString))?JSON.stringify(e,c,2):String(e),c=(e,t)=>t&&t.__v_isRef?c(e,t.value):w(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:E(t)?{[`Set(${t.size})`]:[...t.values()]}:!S(t)||b(t)||R(t)?t:String(t),u={},h=[],d=()=>{},p=()=>!1,f=/^on[^a-z]/,_=e=>f.test(e),m=e=>e.startsWith("onUpdate:"),g=Object.assign,v=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},y=Object.prototype.hasOwnProperty,C=(e,t)=>y.call(e,t),b=Array.isArray,w=e=>"[object Map]"===N(e),E=e=>"[object Set]"===N(e),T=e=>"function"==typeof e,I=e=>"string"==typeof e,k=e=>"symbol"==typeof e,S=e=>null!==e&&"object"==typeof e,x=e=>S(e)&&T(e.then)&&T(e.catch),P=Object.prototype.toString,N=e=>P.call(e),R=e=>"[object Object]"===N(e),O=e=>I(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,A=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),D=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},M=/-(\w)/g,F=D((e=>e.replace(M,((e,t)=>t?t.toUpperCase():"")))),L=/\B([A-Z])/g,q=D((e=>e.replace(L,"-$1").toLowerCase())),j=D((e=>e.charAt(0).toUpperCase()+e.slice(1))),U=D((e=>e?`on${j(e)}`:"")),W=(e,t)=>!Object.is(e,t),V=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},B=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},H=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let z;const $=[];class G{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&z&&(this.parent=z,this.index=(z.scopes||(z.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&($.push(this),z=this)}off(){this.active&&($.pop(),z=$[$.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}const Y=e=>{const t=new Set(e);return t.w=0,t.n=0,t},K=e=>(e.w&Z)>0,Q=e=>(e.n&Z)>0,X=new WeakMap;let J=0,Z=1;const ee=[];let te;const ne=Symbol(""),ie=Symbol("");class re{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],function(e,t){(t=t||z)&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();if(!ee.includes(this))try{return ee.push(te=this),ae.push(oe),oe=!0,Z=1<<++J,J<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Z})(this):se(this),this.fn()}finally{J<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const r=t[i];K(r)&&!Q(r)?r.delete(e):t[n++]=r,r.w&=~Z,r.n&=~Z}t.length=n}})(this),Z=1<<--J,ce(),ee.pop();const e=ee.length;te=e>0?ee[e-1]:void 0}}stop(){this.active&&(se(this),this.onStop&&this.onStop(),this.active=!1)}}function se(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let oe=!0;const ae=[];function le(){ae.push(oe),oe=!1}function ce(){const e=ae.pop();oe=void 0===e||e}function ue(e,t,n){if(!he())return;let i=X.get(e);i||X.set(e,i=new Map);let r=i.get(n);r||i.set(n,r=Y()),de(r)}function he(){return oe&&void 0!==te}function de(e,t){let n=!1;J<=30?Q(e)||(e.n|=Z,n=!K(e)):n=!e.has(te),n&&(e.add(te),te.deps.push(e))}function pe(e,t,n,i,r,s){const o=X.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&b(e))o.forEach(((e,t)=>{("length"===t||t>=i)&&a.push(e)}));else switch(void 0!==n&&a.push(o.get(n)),t){case"add":b(e)?O(n)&&a.push(o.get("length")):(a.push(o.get(ne)),w(e)&&a.push(o.get(ie)));break;case"delete":b(e)||(a.push(o.get(ne)),w(e)&&a.push(o.get(ie)));break;case"set":w(e)&&a.push(o.get(ne))}if(1===a.length)a[0]&&fe(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);fe(Y(e))}}function fe(e,t){for(const n of b(e)?e:[...e])(n!==te||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const _e=e("__proto__,__v_isRef,__isVue"),me=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(k)),ge=we(),ve=we(!1,!0),ye=we(!0),Ce=be();function be(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=at(this);for(let t=0,r=this.length;t<r;t++)ue(n,0,t+"");const i=n[t](...e);return-1===i||!1===i?n[t](...e.map(at)):i}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){le();const n=at(this)[t].apply(this,e);return ce(),n}})),e}function we(e=!1,t=!1){return function(n,i,r){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&r===(e?t?Ze:Je:t?Xe:Qe).get(n))return n;const s=b(n);if(!e&&s&&C(Ce,i))return Reflect.get(Ce,i,r);const o=Reflect.get(n,i,r);if(k(i)?me.has(i):_e(i))return o;if(e||ue(n,0,i),t)return o;if(dt(o)){return!s||!O(i)?o.value:o}return S(o)?e?nt(o):tt(o):o}}function Ee(e=!1){return function(t,n,i,r){let s=t[n];if(!e&&(i=at(i),s=at(s),!b(t)&&dt(s)&&!dt(i)))return s.value=i,!0;const o=b(t)&&O(n)?Number(n)<t.length:C(t,n),a=Reflect.set(t,n,i,r);return t===at(r)&&(o?W(i,s)&&pe(t,"set",n,i):pe(t,"add",n,i)),a}}const Te={get:ge,set:Ee(),deleteProperty:function(e,t){const n=C(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&pe(e,"delete",t,void 0),i},has:function(e,t){const n=Reflect.has(e,t);return k(t)&&me.has(t)||ue(e,0,t),n},ownKeys:function(e){return ue(e,0,b(e)?"length":ne),Reflect.ownKeys(e)}},Ie={get:ye,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},ke=g({},Te,{get:ve,set:Ee(!0)}),Se=e=>S(e)?tt(e):e,xe=e=>S(e)?nt(e):e,Pe=e=>e,Ne=e=>Reflect.getPrototypeOf(e);function Re(e,t,n=!1,i=!1){const r=at(e=e.__v_raw),s=at(t);t!==s&&!n&&ue(r,0,t),!n&&ue(r,0,s);const{has:o}=Ne(r),a=i?Pe:n?xe:Se;return o.call(r,t)?a(e.get(t)):o.call(r,s)?a(e.get(s)):void(e!==r&&e.get(t))}function Oe(e,t=!1){const n=this.__v_raw,i=at(n),r=at(e);return e!==r&&!t&&ue(i,0,e),!t&&ue(i,0,r),e===r?n.has(e):n.has(e)||n.has(r)}function Ae(e,t=!1){return e=e.__v_raw,!t&&ue(at(e),0,ne),Reflect.get(e,"size",e)}function De(e){e=at(e);const t=at(this);return Ne(t).has.call(t,e)||(t.add(e),pe(t,"add",e,e)),this}function Me(e,t){t=at(t);const n=at(this),{has:i,get:r}=Ne(n);let s=i.call(n,e);s||(e=at(e),s=i.call(n,e));const o=r.call(n,e);return n.set(e,t),s?W(t,o)&&pe(n,"set",e,t):pe(n,"add",e,t),this}function Fe(e){const t=at(this),{has:n,get:i}=Ne(t);let r=n.call(t,e);r||(e=at(e),r=n.call(t,e)),i&&i.call(t,e);const s=t.delete(e);return r&&pe(t,"delete",e,void 0),s}function Le(){const e=at(this),t=0!==e.size,n=e.clear();return t&&pe(e,"clear",void 0,void 0),n}function qe(e,t){return function(n,i){const r=this,s=r.__v_raw,o=at(s),a=t?Pe:e?xe:Se;return!e&&ue(o,0,ne),s.forEach(((e,t)=>n.call(i,a(e),a(t),r)))}}function je(e,t,n){return function(...i){const r=this.__v_raw,s=at(r),o=w(s),a="entries"===e||e===Symbol.iterator&&o,l="keys"===e&&o,c=r[e](...i),u=n?Pe:t?xe:Se;return!t&&ue(s,0,l?ie:ne),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Ue(e){return function(...t){return"delete"!==e&&this}}function We(){const e={get(e){return Re(this,e)},get size(){return Ae(this)},has:Oe,add:De,set:Me,delete:Fe,clear:Le,forEach:qe(!1,!1)},t={get(e){return Re(this,e,!1,!0)},get size(){return Ae(this)},has:Oe,add:De,set:Me,delete:Fe,clear:Le,forEach:qe(!1,!0)},n={get(e){return Re(this,e,!0)},get size(){return Ae(this,!0)},has(e){return Oe.call(this,e,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:qe(!0,!1)},i={get(e){return Re(this,e,!0,!0)},get size(){return Ae(this,!0)},has(e){return Oe.call(this,e,!0)},add:Ue("add"),set:Ue("set"),delete:Ue("delete"),clear:Ue("clear"),forEach:qe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((r=>{e[r]=je(r,!1,!1),n[r]=je(r,!0,!1),t[r]=je(r,!1,!0),i[r]=je(r,!0,!0)})),[e,n,t,i]}const[Ve,Be,He,ze]=We();function $e(e,t){const n=t?e?ze:He:e?Be:Ve;return(t,i,r)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(C(n,i)&&i in t?n:t,i,r)}const Ge={get:$e(!1,!1)},Ye={get:$e(!1,!0)},Ke={get:$e(!0,!1)},Qe=new WeakMap,Xe=new WeakMap,Je=new WeakMap,Ze=new WeakMap;function et(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>N(e).slice(8,-1))(e))}function tt(e){return e&&e.__v_isReadonly?e:it(e,!1,Te,Ge,Qe)}function nt(e){return it(e,!0,Ie,Ke,Je)}function it(e,t,n,i,r){if(!S(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=r.get(e);if(s)return s;const o=et(e);if(0===o)return e;const a=new Proxy(e,2===o?i:n);return r.set(e,a),a}function rt(e){return st(e)?rt(e.__v_raw):!(!e||!e.__v_isReactive)}function st(e){return!(!e||!e.__v_isReadonly)}function ot(e){return rt(e)||st(e)}function at(e){const t=e&&e.__v_raw;return t?at(t):e}function lt(e){return B(e,"__v_skip",!0),e}function ct(e){he()&&((e=at(e)).dep||(e.dep=Y()),de(e.dep))}function ut(e,t){(e=at(e)).dep&&fe(e.dep)}const ht=e=>S(e)?tt(e):e;function dt(e){return Boolean(e&&!0===e.__v_isRef)}class pt{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:at(e),this._value=t?e:ht(e)}get value(){return ct(this),this._value}set value(e){e=this._shallow?e:at(e),W(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:ht(e),ut(this))}}function ft(e,t){return dt(e)?e:new pt(e,t)}function _t(e){return dt(e)?e.value:e}const mt={get:(e,t,n)=>_t(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return dt(r)&&!dt(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function gt(e){return rt(e)?e:new Proxy(e,mt)}class vt{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new re(e,(()=>{this._dirty||(this._dirty=!0,ut(this))})),this.__v_isReadonly=n}get value(){const e=at(this);return ct(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function yt(e,t){let n,i;T(e)?(n=e,i=d):(n=e.get,i=e.set);return new vt(n,i,T(e)||!e.set)}Promise.resolve();function Ct(e,t,...n){const i=e.vnode.props||u;let r=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in i){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:s}=i[e]||u;s?r=n.map((e=>e.trim())):t&&(r=n.map(H))}let a,l=i[a=U(t)]||i[a=U(F(t))];!l&&s&&(l=i[a=U(q(t))]),l&&Pi(l,e,6,r);const c=i[a+"Once"];if(c){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,Pi(c,e,6,r)}}function bt(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(void 0!==r)return r;const s=e.emits;let o={},a=!1;if(!T(e)){const i=e=>{const n=bt(e,t,!0);n&&(a=!0,g(o,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||a?(b(s)?s.forEach((e=>o[e]=null)):g(o,s),i.set(e,o),o):(i.set(e,null),null)}function wt(e,t){return!(!e||!_(t))&&(t=t.slice(2).replace(/Once$/,""),C(e,t[0].toLowerCase()+t.slice(1))||C(e,q(t))||C(e,t))}let Et=null,Tt=null;function It(e){const t=Et;return Et=e,Tt=e&&e.type.__scopeId||null,t}function kt(e,t=Et,n){if(!t)return e;if(e._n)return e;const i=(...n)=>{i._d&&Qn(-1);const r=It(t),s=e(...n);return It(r),i._d&&Qn(1),s};return i._n=!0,i._c=!0,i._d=!0,i}function St(e){const{type:t,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:f,inheritAttrs:_}=e;let g;const v=It(e);try{let e;if(4&n.shapeFlag){const t=r||i;g=ci(u.call(t,t,h,s,p,d,f)),e=l}else{const n=t;0,g=ci(n.length>1?n(s,{attrs:l,slots:a,emit:c}):n(s,null)),e=t.props?l:xt(l)}let v=g;if(e&&!1!==_){const t=Object.keys(e),{shapeFlag:n}=v;t.length&&7&n&&(o&&t.some(m)&&(e=Pt(e,o)),v=ai(v,e))}0,n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),g=v}catch(y){$n.length=0,Ni(y,e,1),g=oi(Hn)}return It(v),g}const xt=e=>{let t;for(const n in e)("class"===n||"style"===n||_(n))&&((t||(t={}))[n]=e[n]);return t},Pt=(e,t)=>{const n={};for(const i in e)m(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function Nt(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!wt(n,s))return!0}return!1}function Rt(e,t){if(vi){let n=vi.provides;const i=vi.parent&&vi.parent.provides;i===n&&(n=vi.provides=Object.create(i)),n[e]=t}else;}function Ot(e,t,n=!1){const i=vi||Et;if(i){const r=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&T(t)?t.call(i.proxy):t}}const At=[Function,Array];Boolean,Boolean;function Dt(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Mt(e,t,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:f,onBeforeAppear:_,onAppear:m,onAfterAppear:g,onAppearCancelled:v}=t,y=String(e.key),C=Dt(n,e),b=(e,t)=>{e&&Pi(e,i,9,t)},w={mode:s,persisted:o,beforeEnter(t){let i=a;if(!n.isMounted){if(!r)return;i=_||a}t._leaveCb&&t._leaveCb(!0);const s=C[y];s&&ti(e,s)&&s.el._leaveCb&&s.el._leaveCb(),b(i,[t])},enter(e){let t=l,i=c,s=u;if(!n.isMounted){if(!r)return;t=m||l,i=g||c,s=v||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,b(t?s:i,[e]),w.delayedLeave&&w.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,i){const r=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return i();b(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,i(),b(n?f:p,[t]),t._leaveCb=void 0,C[r]===e&&delete C[r])};C[r]=e,d?(d(t,o),d.length<=1&&o()):o()},clone:e=>Mt(e,t,n,i)};return w}function Ft(e){if(Vt(e))return(e=ai(e)).children=null,e}function Lt(e){return Vt(e)?e.children?e.children[0]:void 0:e}function qt(e,t){6&e.shapeFlag&&e.component?qt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function jt(e,t=!1){let n=[],i=0;for(let r=0;r<e.length;r++){const s=e[r];s.type===Vn?(128&s.patchFlag&&i++,n=n.concat(jt(s.children,t))):(t||s.type!==Hn)&&n.push(s)}if(i>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function Ut(e){return T(e)?{setup:e,name:e.name}:e}const Wt=e=>!!e.type.__asyncLoader,Vt=e=>e.type.__isKeepAlive;function Bt(e,t){zt(e,"a",t)}function Ht(e,t){zt(e,"da",t)}function zt(e,t,n=vi){const i=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()});if(Gt(t,i,n),n){let e=n.parent;for(;e&&e.parent;)Vt(e.parent.vnode)&&$t(i,t,n,e),e=e.parent}}function $t(e,t,n,i){const r=Gt(t,e,i,!0);en((()=>{v(i[t],r)}),n)}function Gt(e,t,n=vi,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;le(),Ci(n);const r=Pi(t,n,e,i);return bi(),ce(),r});return i?r.unshift(s):r.push(s),s}}const Yt=e=>(t,n=vi)=>(!Ei||"sp"===e)&&Gt(e,t,n),Kt=Yt("bm"),Qt=Yt("m"),Xt=Yt("bu"),Jt=Yt("u"),Zt=Yt("bum"),en=Yt("um"),tn=Yt("sp"),nn=Yt("rtg"),rn=Yt("rtc");function sn(e,t=vi){Gt("ec",e,t)}let on=!0;function an(e){const t=un(e),n=e.proxy,i=e.ctx;on=!1,t.beforeCreate&&ln(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:p,beforeUpdate:f,updated:_,activated:m,deactivated:g,beforeDestroy:v,beforeUnmount:y,destroyed:C,unmounted:w,render:E,renderTracked:I,renderTriggered:k,errorCaptured:x,serverPrefetch:P,expose:N,inheritAttrs:R,components:O,directives:A,filters:D}=t;if(c&&function(e,t,n=d,i=!1){b(e)&&(e=fn(e));for(const r in e){const n=e[r];let s;s=S(n)?"default"in n?Ot(n.from||r,n.default,!0):Ot(n.from||r):Ot(n),dt(s)&&i?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[r]=s}}(c,i,null,e.appContext.config.unwrapInjectedRef),o)for(const d in o){const e=o[d];T(e)&&(i[d]=e.bind(n))}if(r){const t=r.call(n,n);S(t)&&(e.data=tt(t))}if(on=!0,s)for(const b in s){const e=s[b],t=yt({get:T(e)?e.bind(n,n):T(e.get)?e.get.bind(n,n):d,set:!T(e)&&T(e.set)?e.set.bind(n):d});Object.defineProperty(i,b,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}if(a)for(const d in a)cn(a[d],i,n,d);if(l){const e=T(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{Rt(t,e[t])}))}function M(e,t){b(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&ln(u,e,"c"),M(Kt,h),M(Qt,p),M(Xt,f),M(Jt,_),M(Bt,m),M(Ht,g),M(sn,x),M(rn,I),M(nn,k),M(Zt,y),M(en,w),M(tn,P),b(N))if(N.length){const t=e.exposed||(e.exposed={});N.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===d&&(e.render=E),null!=R&&(e.inheritAttrs=R),O&&(e.components=O),A&&(e.directives=A)}function ln(e,t,n){Pi(b(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function cn(e,t,n,i){const r=i.includes(".")?nr(n,i):()=>n[i];if(I(e)){const n=t[e];T(n)&&Zi(r,n)}else if(T(e))Zi(r,e.bind(n));else if(S(e))if(b(e))e.forEach((e=>cn(e,t,n,i)));else{const i=T(e.handler)?e.handler.bind(n):t[e.handler];T(i)&&Zi(r,i,e)}}function un(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:r.length||n||i?(l={},r.length&&r.forEach((e=>hn(l,e,o,!0))),hn(l,t,o)):l=t,s.set(t,l),l}function hn(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&hn(e,s,n,!0),r&&r.forEach((t=>hn(e,t,n,!0)));for(const o in t)if(i&&"expose"===o);else{const i=dn[o]||n&&n[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const dn={data:pn,props:mn,emits:mn,methods:mn,computed:mn,beforeCreate:_n,created:_n,beforeMount:_n,mounted:_n,beforeUpdate:_n,updated:_n,beforeDestroy:_n,beforeUnmount:_n,destroyed:_n,unmounted:_n,activated:_n,deactivated:_n,errorCaptured:_n,serverPrefetch:_n,components:mn,directives:mn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=g(Object.create(null),e);for(const i in t)n[i]=_n(e[i],t[i]);return n},provide:pn,inject:function(e,t){return mn(fn(e),fn(t))}};function pn(e,t){return t?e?function(){return g(T(e)?e.call(this,this):e,T(t)?t.call(this,this):t)}:t:e}function fn(e){if(b(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function _n(e,t){return e?[...new Set([].concat(e,t))]:t}function mn(e,t){return e?g(g(Object.create(null),e),t):t}function gn(e,t,n,i=!1){const r={},s={};B(s,ni,1),e.propsDefaults=Object.create(null),vn(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=i?r:it(r,!1,ke,Ye,Xe):e.type.props?e.props=r:e.props=s,e.attrs=s}function vn(e,t,n,i){const[r,s]=e.propsOptions;let o,a=!1;if(t)for(let l in t){if(A(l))continue;const c=t[l];let u;r&&C(r,u=F(l))?s&&s.includes(u)?(o||(o={}))[u]=c:n[u]=c:wt(e.emitsOptions,l)||c!==i[l]&&(i[l]=c,a=!0)}if(s){const t=at(n),i=o||u;for(let o=0;o<s.length;o++){const a=s[o];n[a]=yn(r,t,a,i[a],e,!C(i,a))}}return a}function yn(e,t,n,i,r,s){const o=e[n];if(null!=o){const e=C(o,"default");if(e&&void 0===i){const e=o.default;if(o.type!==Function&&T(e)){const{propsDefaults:s}=r;n in s?i=s[n]:(Ci(r),i=s[n]=e.call(null,t),bi())}else i=e}o[0]&&(s&&!e?i=!1:!o[1]||""!==i&&i!==q(n)||(i=!0))}return i}function Cn(e,t,n=!1){const i=t.propsCache,r=i.get(e);if(r)return r;const s=e.props,o={},a=[];let l=!1;if(!T(e)){const i=e=>{l=!0;const[n,i]=Cn(e,t,!0);g(o,n),i&&a.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!l)return i.set(e,h),h;if(b(s))for(let h=0;h<s.length;h++){const e=F(s[h]);bn(e)&&(o[e]=u)}else if(s)for(const u in s){const e=F(u);if(bn(e)){const t=s[u],n=o[e]=b(t)||T(t)?{type:t}:t;if(n){const t=Tn(Boolean,n.type),i=Tn(String,n.type);n[0]=t>-1,n[1]=i<0||t<i,(t>-1||C(n,"default"))&&a.push(e)}}}const c=[o,a];return i.set(e,c),c}function bn(e){return"$"!==e[0]}function wn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function En(e,t){return wn(e)===wn(t)}function Tn(e,t){return b(t)?t.findIndex((t=>En(t,e))):T(t)&&En(t,e)?0:-1}const In=e=>"_"===e[0]||"$stable"===e,kn=e=>b(e)?e.map(ci):[ci(e)],Sn=(e,t,n)=>{const i=kt(((...e)=>kn(t(...e))),n);return i._c=!1,i},xn=(e,t,n)=>{const i=e._ctx;for(const r in e){if(In(r))continue;const n=e[r];if(T(n))t[r]=Sn(0,n,i);else if(null!=n){const e=kn(n);t[r]=()=>e}}},Pn=(e,t)=>{const n=kn(t);e.slots.default=()=>n};function Nn(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(le(),Pi(l,n,8,[e.el,a,e,t]),ce())}}function Rn(){return{app:null,config:{isNativeTag:p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let On=0;function An(e,t){return function(n,i=null){null==i||S(i)||(i=null);const r=Rn(),s=new Set;let o=!1;const a=r.app={_uid:On++,_component:n,_props:i,_container:null,_context:r,_instance:null,version:sr,get config(){return r.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&T(e.install)?(s.add(e),e.install(a,...t)):T(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(r.mixins.includes(e)||r.mixins.push(e),a),component:(e,t)=>t?(r.components[e]=t,a):r.components[e],directive:(e,t)=>t?(r.directives[e]=t,a):r.directives[e],mount(s,l,c){if(!o){const u=oi(n,i);return u.appContext=r,l&&t?t(u,s):e(u,s,c),o=!0,a._container=s,s.__vue_app__=a,u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(r.provides[e]=t,a)};return a}}const Dn=function(e,t){t&&t.pendingBranch?b(e)?t.effects.push(...e):t.effects.push(e):Gi(e,ji,qi,Ui)};function Mn(e){return function(e,t){const{insert:n,remove:i,patchProp:r,createElement:s,createText:o,createComment:a,setText:l,setElementText:c,parentNode:p,nextSibling:f,setScopeId:_=d,cloneNode:m,insertStaticContent:v}=e,y=(e,t,n,i=null,r=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!ti(e,t)&&(i=te(e),Q(e,r,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Bn:b(e,t,n,i);break;case Hn:w(e,t,n,i);break;case zn:null==e&&E(t,n,i,o);break;case Vn:M(e,t,n,i,r,s,o,a,l);break;default:1&h?k(e,t,n,i,r,s,o,a,l):6&h?L(e,t,n,i,r,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,i,r,s,o,a,l,ie)}null!=u&&r&&Fn(u,e&&e.ref,s,t||e,!t)},b=(e,t,i,r)=>{if(null==e)n(t.el=o(t.children),i,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},w=(e,t,i,r)=>{null==e?n(t.el=a(t.children||""),i,r):t.el=e.el},E=(e,t,n,i)=>{[e.el,e.anchor]=v(e.children,t,n,i)},T=({el:e,anchor:t},i,r)=>{let s;for(;e&&e!==t;)s=f(e),n(e,i,r),e=s;n(t,i,r)},I=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),i(e),e=n;i(t)},k=(e,t,n,i,r,s,o,a,l)=>{o=o||"svg"===t.type,null==e?S(t,n,i,r,s,o,a,l):R(e,t,r,s,o,a,l)},S=(e,t,i,o,a,l,u,h)=>{let d,p;const{type:f,props:_,shapeFlag:g,transition:v,patchFlag:y,dirs:C}=e;if(e.el&&void 0!==m&&-1===y)d=e.el=m(e.el);else{if(d=e.el=s(e.type,l,_&&_.is,_),8&g?c(d,e.children):16&g&&N(e.children,d,null,o,a,l&&"foreignObject"!==f,u,h),C&&Nn(e,null,o,"created"),_){for(const t in _)"value"===t||A(t)||r(d,t,null,_[t],l,e.children,o,a,ee);"value"in _&&r(d,"value",null,_.value),(p=_.onVnodeBeforeMount)&&Ln(p,o,e)}P(d,e,e.scopeId,u,o)}C&&Nn(e,null,o,"beforeMount");const b=(!a||a&&!a.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(d),n(d,t,i),((p=_&&_.onVnodeMounted)||b||C)&&Dn((()=>{p&&Ln(p,o,e),b&&v.enter(d),C&&Nn(e,null,o,"mounted")}),a)},P=(e,t,n,i,r)=>{if(n&&_(e,n),i)for(let s=0;s<i.length;s++)_(e,i[s]);if(r){if(t===r.subTree){const t=r.vnode;P(e,t,t.scopeId,t.slotScopeIds,r.parent)}}},N=(e,t,n,i,r,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?ui(e[c]):ci(e[c]);y(null,l,t,n,i,r,s,o,a)}},R=(e,t,n,i,s,o,a)=>{const l=t.el=e.el;let{patchFlag:h,dynamicChildren:d,dirs:p}=t;h|=16&e.patchFlag;const f=e.props||u,_=t.props||u;let m;(m=_.onVnodeBeforeUpdate)&&Ln(m,n,t,e),p&&Nn(t,e,n,"beforeUpdate");const g=s&&"foreignObject"!==t.type;if(d?O(e.dynamicChildren,d,l,n,i,g,o):a||z(e,t,l,null,n,i,g,o,!1),h>0){if(16&h)D(l,t,f,_,n,i,s);else if(2&h&&f.class!==_.class&&r(l,"class",null,_.class,s),4&h&&r(l,"style",f.style,_.style,s),8&h){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const a=o[t],c=f[a],u=_[a];u===c&&"value"!==a||r(l,a,c,u,s,e.children,n,i,ee)}}1&h&&e.children!==t.children&&c(l,t.children)}else a||null!=d||D(l,t,f,_,n,i,s);((m=_.onVnodeUpdated)||p)&&Dn((()=>{m&&Ln(m,n,t,e),p&&Nn(t,e,n,"updated")}),i)},O=(e,t,n,i,r,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Vn||!ti(l,c)||70&l.shapeFlag)?p(l.el):n;y(l,c,u,null,i,r,s,o,!0)}},D=(e,t,n,i,s,o,a)=>{if(n!==i){for(const l in i){if(A(l))continue;const c=i[l],u=n[l];c!==u&&"value"!==l&&r(e,l,u,c,a,t.children,s,o,ee)}if(n!==u)for(const l in n)A(l)||l in i||r(e,l,n[l],null,a,t.children,s,o,ee);"value"in i&&r(e,"value",n.value,i.value)}},M=(e,t,i,r,s,a,l,c,u)=>{const h=t.el=e?e.el:o(""),d=t.anchor=e?e.anchor:o("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:_}=t;_&&(c=c?c.concat(_):_),null==e?(n(h,i,r),n(d,i,r),N(t.children,i,d,s,a,l,c,u)):p>0&&64&p&&f&&e.dynamicChildren?(O(e.dynamicChildren,f,i,s,a,l,c),(null!=t.key||s&&t===s.subTree)&&qn(e,t,!0)):z(e,t,i,d,s,a,l,c,u)},L=(e,t,n,i,r,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?r.ctx.activate(t,n,i,o,l):j(t,n,i,r,s,o,l):U(e,t,l)},j=(e,t,n,i,r,s,o)=>{const a=e.component=function(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||mi,s={uid:gi++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,update:null,scope:new G(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Cn(i,r),emitsOptions:bt(i,r),emit:null,emitted:null,propsDefaults:u,inheritAttrs:i.inheritAttrs,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};s.ctx={_:s},s.root=t?t.root:s,s.emit=Ct.bind(null,s),e.ce&&e.ce(s);return s}(e,i,r);if(Vt(e)&&(a.ctx.renderer=ie),function(e,t=!1){Ei=t;const{props:n,children:i}=e.vnode,r=wi(e);gn(e,n,r,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=at(t),B(t,"_",n)):xn(t,e.slots={})}else e.slots={},t&&Pn(e,t);B(e.slots,ni,1)})(e,i);const s=r?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=lt(new Proxy(e.ctx,_i));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?function(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(ue(e,0,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}(e):null;Ci(e),le();const r=xi(i,e,0,[e.props,n]);if(ce(),bi(),x(r)){if(r.then(bi,bi),t)return r.then((t=>{Ti(e,t)})).catch((t=>{Ni(t,e,0)}));e.asyncDep=r}else Ti(e,r)}else Ii(e)}(e,t):void 0;Ei=!1}(a),a.asyncDep){if(r&&r.registerDep(a,W),!e.el){const e=a.subTree=oi(Hn);w(null,e,t,n)}}else W(a,e,t,n,r,s,o)},U=(e,t,n)=>{const i=t.component=e.component;if(function(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!r&&!a||a&&a.$stable)||i!==o&&(i?!o||Nt(i,o,c):!!o);if(1024&l)return!0;if(16&l)return i?Nt(i,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==i[n]&&!wt(c,n))return!0}}return!1}(e,t,n)){if(i.asyncDep&&!i.asyncResolved)return void H(i,t,n);i.next=t,function(e){const t=Ai.indexOf(e);t>Di&&Ai.splice(t,1)}(i.update),i.update()}else t.component=e.component,t.el=e.el,i.vnode=t},W=(e,t,n,i,r,s,o)=>{const a=new re((()=>{if(e.isMounted){let t,{next:n,bu:i,u:l,parent:c,vnode:u}=e,h=n;a.allowRecurse=!1,n?(n.el=u.el,H(e,n,o)):n=u,i&&V(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Ln(t,c,n,u),a.allowRecurse=!0;const d=St(e),f=e.subTree;e.subTree=d,y(f,d,p(f.el),te(f),e,r,s),n.el=d.el,null===h&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,d.el),l&&Dn(l,r),(t=n.props&&n.props.onVnodeUpdated)&&Dn((()=>Ln(t,c,n,u)),r)}else{let o;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,p=Wt(t);if(a.allowRecurse=!1,u&&V(u),!p&&(o=c&&c.onVnodeBeforeMount)&&Ln(o,d,t),a.allowRecurse=!0,l&&oe){const n=()=>{e.subTree=St(e),oe(l,e.subTree,e,r,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=St(e);y(null,o,n,i,e,r,s),t.el=o.el}if(h&&Dn(h,r),!p&&(o=c&&c.onVnodeMounted)){const e=t;Dn((()=>Ln(o,d,e)),r)}256&t.shapeFlag&&e.a&&Dn(e.a,r),e.isMounted=!0,t=n=i=null}}),(()=>zi(e.update)),e.scope),l=e.update=a.run.bind(a);l.id=e.uid,a.allowRecurse=l.allowRecurse=!0,l()},H=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,a=at(r),[l]=e.propsOptions;let c=!1;if(!(i||o>0)||16&o){let i;vn(e,t,r,s)&&(c=!0);for(const s in a)t&&(C(t,s)||(i=q(s))!==s&&C(t,i))||(l?!n||void 0===n[s]&&void 0===n[i]||(r[s]=yn(l,a,s,void 0,e,!0)):delete r[s]);if(s!==a)for(const e in s)t&&C(t,e)||(delete s[e],c=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let o=n[i];const u=t[o];if(l)if(C(s,o))u!==s[o]&&(s[o]=u,c=!0);else{const t=F(o);r[t]=yn(l,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,c=!0)}}c&&pe(e,"set","$attrs")}(e,t.props,i,n),((e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,o=u;if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:(g(r,t),n||1!==e||delete r._):(s=!t.$stable,xn(t,r)),o=t}else t&&(Pn(e,t),o={default:1});if(s)for(const a in r)In(a)||a in o||delete r[a]})(e,t.children,n),le(),Yi(void 0,e.update),ce()},z=(e,t,n,i,r,s,o,a,l=!1)=>{const u=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void Y(u,d,n,i,r,s,o,a,l);if(256&p)return void $(u,d,n,i,r,s,o,a,l)}8&f?(16&h&&ee(u,r,s),d!==u&&c(n,d)):16&h?16&f?Y(u,d,n,i,r,s,o,a,l):ee(u,r,s,!0):(8&h&&c(n,""),16&f&&N(d,n,i,r,s,o,a,l))},$=(e,t,n,i,r,s,o,a,l)=>{t=t||h;const c=(e=e||h).length,u=t.length,d=Math.min(c,u);let p;for(p=0;p<d;p++){const i=t[p]=l?ui(t[p]):ci(t[p]);y(e[p],i,n,null,r,s,o,a,l)}c>u?ee(e,r,s,!0,!1,d):N(t,n,i,r,s,o,a,l,d)},Y=(e,t,n,i,r,s,o,a,l)=>{let c=0;const u=t.length;let d=e.length-1,p=u-1;for(;c<=d&&c<=p;){const i=e[c],u=t[c]=l?ui(t[c]):ci(t[c]);if(!ti(i,u))break;y(i,u,n,null,r,s,o,a,l),c++}for(;c<=d&&c<=p;){const i=e[d],c=t[p]=l?ui(t[p]):ci(t[p]);if(!ti(i,c))break;y(i,c,n,null,r,s,o,a,l),d--,p--}if(c>d){if(c<=p){const e=p+1,h=e<u?t[e].el:i;for(;c<=p;)y(null,t[c]=l?ui(t[c]):ci(t[c]),n,h,r,s,o,a,l),c++}}else if(c>p)for(;c<=d;)Q(e[c],r,s,!0),c++;else{const f=c,_=c,m=new Map;for(c=_;c<=p;c++){const e=t[c]=l?ui(t[c]):ci(t[c]);null!=e.key&&m.set(e.key,c)}let g,v=0;const C=p-_+1;let b=!1,w=0;const E=new Array(C);for(c=0;c<C;c++)E[c]=0;for(c=f;c<=d;c++){const i=e[c];if(v>=C){Q(i,r,s,!0);continue}let u;if(null!=i.key)u=m.get(i.key);else for(g=_;g<=p;g++)if(0===E[g-_]&&ti(i,t[g])){u=g;break}void 0===u?Q(i,r,s,!0):(E[u-_]=c+1,u>=w?w=u:b=!0,y(i,t[u],n,null,r,s,o,a,l),v++)}const T=b?function(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const l=e[i];if(0!==l){if(r=n[n.length-1],e[r]<l){t[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(E):h;for(g=T.length-1,c=C-1;c>=0;c--){const e=_+c,h=t[e],d=e+1<u?t[e+1].el:i;0===E[c]?y(null,h,n,d,r,s,o,a,l):b&&(g<0||c!==T[g]?K(h,n,d,2):g--)}}},K=(e,t,i,r,s=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void K(e.component.subTree,t,i,r);if(128&u)return void e.suspense.move(t,i,r);if(64&u)return void a.move(e,t,i,ie);if(a===Vn){n(o,t,i);for(let e=0;e<c.length;e++)K(c[e],t,i,r);return void n(e.anchor,t,i)}if(a===zn)return void T(e,t,i);if(2!==r&&1&u&&l)if(0===r)l.beforeEnter(o),n(o,t,i),Dn((()=>l.enter(o)),s);else{const{leave:e,delayLeave:r,afterLeave:s}=l,a=()=>n(o,t,i),c=()=>{e(o,(()=>{a(),s&&s()}))};r?r(o,a,c):c()}else n(o,t,i)},Q=(e,t,n,i=!1,r=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Fn(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!Wt(e);let _;if(f&&(_=o&&o.onVnodeBeforeUnmount)&&Ln(_,t,e),6&u)Z(e.component,n,i);else{if(128&u)return void e.suspense.unmount(n,i);p&&Nn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,r,ie,i):c&&(s!==Vn||h>0&&64&h)?ee(c,t,n,!1,!0):(s===Vn&&384&h||!r&&16&u)&&ee(l,t,n),i&&X(e)}(f&&(_=o&&o.onVnodeUnmounted)||p)&&Dn((()=>{_&&Ln(_,t,e),p&&Nn(e,null,t,"unmounted")}),n)},X=e=>{const{type:t,el:n,anchor:r,transition:s}=e;if(t===Vn)return void J(n,r);if(t===zn)return void I(e);const o=()=>{i(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:i}=s,r=()=>t(n,o);i?i(e.el,o,r):r()}else o()},J=(e,t)=>{let n;for(;e!==t;)n=f(e),i(e),e=n;i(t)},Z=(e,t,n)=>{const{bum:i,scope:r,update:s,subTree:o,um:a}=e;i&&V(i),r.stop(),s&&(s.active=!1,Q(o,e,t,n)),a&&Dn(a,t),Dn((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},ee=(e,t,n,i=!1,r=!1,s=0)=>{for(let o=s;o<e.length;o++)Q(e[o],t,n,i,r)},te=e=>6&e.shapeFlag?te(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),ne=(e,t,n)=>{null==e?t._vnode&&Q(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),Ki(),t._vnode=e},ie={p:y,um:Q,m:K,r:X,mt:j,mc:N,pc:z,pbc:O,n:te,o:e};let se,oe;t&&([se,oe]=t(ie));return{render:ne,hydrate:se,createApp:An(ne,se)}}(e)}function Fn(e,t,n,i,r=!1){if(b(e))return void e.forEach(((e,s)=>Fn(e,t&&(b(t)?t[s]:t),n,i,r)));if(Wt(i)&&!r)return;const s=4&i.shapeFlag?ki(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=e,c=t&&t.r,h=a.refs===u?a.refs={}:a.refs,d=a.setupState;if(null!=c&&c!==l&&(I(c)?(h[c]=null,C(d,c)&&(d[c]=null)):dt(c)&&(c.value=null)),I(l)){const e=()=>{h[l]=o,C(d,l)&&(d[l]=o)};o?(e.id=-1,Dn(e,n)):e()}else if(dt(l)){const e=()=>{l.value=o};o?(e.id=-1,Dn(e,n)):e()}else T(l)&&xi(l,a,12,[o,h])}function Ln(e,t,n,i=null){Pi(e,t,7,[n,i])}function qn(e,t,n=!1){const i=e.children,r=t.children;if(b(i)&&b(r))for(let s=0;s<i.length;s++){const e=i[s];let t=r[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=r[s]=ui(r[s]),t.el=e.el),n||qn(e,t))}}function jn(e,t){return function(e,t,n=!0,i=!1){const r=Et||vi;if(r){const n=r.type;if("components"===e){const e=Si(n);if(e&&(e===t||e===F(t)||e===j(F(t))))return n}const s=Wn(r[e]||n[e],t)||Wn(r.appContext[e],t);return!s&&i?n:s}}("components",e,!0,t)||e}const Un=Symbol();function Wn(e,t){return e&&(e[t]||e[F(t)]||e[j(F(t))])}const Vn=Symbol(void 0),Bn=Symbol(void 0),Hn=Symbol(void 0),zn=Symbol(void 0),$n=[];let Gn=null;function Yn(e=!1){$n.push(Gn=e?null:[])}let Kn=1;function Qn(e){Kn+=e}function Xn(e){return e.dynamicChildren=Kn>0?Gn||h:null,$n.pop(),Gn=$n[$n.length-1]||null,Kn>0&&Gn&&Gn.push(e),e}function Jn(e,t,n,i,r,s){return Xn(si(e,t,n,i,r,s,!0))}function Zn(e,t,n,i,r){return Xn(oi(e,t,n,i,r,!0))}function ei(e){return!!e&&!0===e.__v_isVNode}function ti(e,t){return e.type===t.type&&e.key===t.key}const ni="__vInternal",ii=({key:e})=>null!=e?e:null,ri=({ref:e})=>null!=e?I(e)||dt(e)||T(e)?{i:Et,r:e}:e:null;function si(e,t=null,n=null,i=0,r=null,s=(e===Vn?0:1),o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ii(t),ref:t&&ri(t),scopeId:Tt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null};return a?(hi(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=I(n)?8:16),Kn>0&&!o&&Gn&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Gn.push(l),l}const oi=function(e,t=null,n=null,r=0,s=null,o=!1){e&&e!==Un||(e=Hn);if(ei(e)){const i=ai(e,t,!0);return n&&hi(i,n),i}l=e,T(l)&&"__vccOpts"in l&&(e=e.__vccOpts);var l;if(t){t=function(e){return e?ot(e)||ni in e?g({},e):e:null}(t);let{class:e,style:n}=t;e&&!I(e)&&(t.class=a(e)),S(n)&&(ot(n)&&!b(n)&&(n=g({},n)),t.style=i(n))}const c=I(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:S(e)?4:T(e)?2:0;return si(e,t,n,r,s,c,o,!0)};function ai(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:l}=e,c=t?function(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=a([t.class,r.class]));else if("style"===e)t.style=i([t.style,r.style]);else if(_(e)){const n=t[e],i=r[e];n!==i&&(t[e]=n?[].concat(n,i):i)}else""!==e&&(t[e]=r[e])}return t}(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&ii(c),ref:t&&t.ref?n&&s?b(s)?s.concat(ri(t)):[s,ri(t)]:ri(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Vn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ai(e.ssContent),ssFallback:e.ssFallback&&ai(e.ssFallback),el:e.el,anchor:e.anchor}}function li(e=" ",t=0){return oi(Bn,null,e,t)}function ci(e){return null==e||"boolean"==typeof e?oi(Hn):b(e)?oi(Vn,null,e.slice()):"object"==typeof e?ui(e):oi(Bn,null,String(e))}function ui(e){return null===e.el||e.memo?e:ai(e)}function hi(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(b(t))n=16;else if("object"==typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),hi(e,n()),n._c&&(n._d=!0)))}{n=32;const i=t._;i||ni in t?3===i&&Et&&(1===Et.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Et}}else T(t)?(t={default:t,_ctx:Et},n=32):(t=String(t),64&i?(n=16,t=[li(t)]):n=8);e.children=t,e.shapeFlag|=n}function di(e,t,n,i){let r;const s=n&&n[i];if(b(e)||I(e)){r=new Array(e.length);for(let n=0,i=e.length;n<i;n++)r[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){r=new Array(e);for(let n=0;n<e;n++)r[n]=t(n+1,n,void 0,s&&s[n])}else if(S(e))if(e[Symbol.iterator])r=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);r=new Array(n.length);for(let i=0,o=n.length;i<o;i++){const o=n[i];r[i]=t(e[o],o,i,s&&s[i])}}else r=[];return n&&(n[i]=r),r}const pi=e=>e?wi(e)?ki(e)||e.proxy:pi(e.parent):null,fi=g(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pi(e.parent),$root:e=>pi(e.root),$emit:e=>e.emit,$options:e=>un(e),$forceUpdate:e=>()=>zi(e.update),$nextTick:e=>Hi.bind(e.proxy),$watch:e=>tr.bind(e)}),_i={get({_:e},t){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=e;let c;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 0:return i[t];case 1:return r[t];case 3:return n[t];case 2:return s[t]}else{if(i!==u&&C(i,t))return o[t]=0,i[t];if(r!==u&&C(r,t))return o[t]=1,r[t];if((c=e.propsOptions[0])&&C(c,t))return o[t]=2,s[t];if(n!==u&&C(n,t))return o[t]=3,n[t];on&&(o[t]=4)}}const h=fi[t];let d,p;return h?("$attrs"===t&&ue(e,0,t),h(e)):(d=a.__cssModules)&&(d=d[t])?d:n!==u&&C(n,t)?(o[t]=3,n[t]):(p=l.config.globalProperties,C(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;if(r!==u&&C(r,t))r[t]=n;else if(i!==u&&C(i,t))i[t]=n;else if(C(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return void 0!==n[o]||e!==u&&C(e,o)||t!==u&&C(t,o)||(a=s[0])&&C(a,o)||C(i,o)||C(fi,o)||C(r.config.globalProperties,o)}},mi=Rn();let gi=0;let vi=null;const yi=()=>vi||Et,Ci=e=>{vi=e,e.scope.on()},bi=()=>{vi&&vi.scope.off(),vi=null};function wi(e){return 4&e.vnode.shapeFlag}let Ei=!1;function Ti(e,t,n){T(t)?e.render=t:S(t)&&(e.setupState=gt(t)),Ii(e)}function Ii(e,t,n){const i=e.type;e.render||(e.render=i.render||d),Ci(e),le(),an(e),ce(),bi()}function ki(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(gt(lt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in fi?fi[n](e):void 0}))}function Si(e){return T(e)&&e.displayName||e.name}function xi(e,t,n,i){let r;try{r=i?e(...i):e()}catch(s){Ni(s,t,n)}return r}function Pi(e,t,n,i){if(T(e)){const r=xi(e,t,n,i);return r&&x(r)&&r.catch((e=>{Ni(e,t,n)})),r}const r=[];for(let s=0;s<e.length;s++)r.push(Pi(e[s],t,n,i));return r}function Ni(e,t,n,i=!0){t&&t.vnode;if(t){let i=t.parent;const r=t.proxy,s=n;for(;i;){const t=i.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,r,s))return;i=i.parent}const o=t.appContext.config.errorHandler;if(o)return void xi(o,null,10,[e,r,s])}!function(e,t,n,i=!0){console.error(e)}(e,0,0,i)}let Ri=!1,Oi=!1;const Ai=[];let Di=0;const Mi=[];let Fi=null,Li=0;const qi=[];let ji=null,Ui=0;const Wi=Promise.resolve();let Vi=null,Bi=null;function Hi(e){const t=Vi||Wi;return e?t.then(this?e.bind(this):e):t}function zi(e){Ai.length&&Ai.includes(e,Ri&&e.allowRecurse?Di+1:Di)||e===Bi||(null==e.id?Ai.push(e):Ai.splice(function(e){let t=Di+1,n=Ai.length;for(;t<n;){const i=t+n>>>1;Qi(Ai[i])<e?t=i+1:n=i}return t}(e.id),0,e),$i())}function $i(){Ri||Oi||(Oi=!0,Vi=Wi.then(Xi))}function Gi(e,t,n,i){b(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),$i()}function Yi(e,t=null){if(Mi.length){for(Bi=t,Fi=[...new Set(Mi)],Mi.length=0,Li=0;Li<Fi.length;Li++)Fi[Li]();Fi=null,Li=0,Bi=null,Yi(e,t)}}function Ki(e){if(qi.length){const e=[...new Set(qi)];if(qi.length=0,ji)return void ji.push(...e);for(ji=e,ji.sort(((e,t)=>Qi(e)-Qi(t))),Ui=0;Ui<ji.length;Ui++)ji[Ui]();ji=null,Ui=0}}const Qi=e=>null==e.id?1/0:e.id;function Xi(e){Oi=!1,Ri=!0,Yi(e),Ai.sort(((e,t)=>Qi(e)-Qi(t)));try{for(Di=0;Di<Ai.length;Di++){const e=Ai[Di];e&&!1!==e.active&&xi(e,null,14)}}finally{Di=0,Ai.length=0,Ki(),Ri=!1,Vi=null,(Ai.length||Mi.length||qi.length)&&Xi(e)}}const Ji={};function Zi(e,t,n){return er(e,t,n)}function er(e,t,{immediate:n,deep:i,flush:r,onTrack:s,onTrigger:o}=u){const a=vi;let l,c,h=!1,p=!1;if(dt(e)?(l=()=>e.value,h=!!e._shallow):rt(e)?(l=()=>e,i=!0):b(e)?(p=!0,h=e.some(rt),l=()=>e.map((e=>dt(e)?e.value:rt(e)?ir(e):T(e)?xi(e,a,2):void 0))):l=T(e)?t?()=>xi(e,a,2):()=>{if(!a||!a.isUnmounted)return c&&c(),Pi(e,a,3,[f])}:d,t&&i){const e=l;l=()=>ir(e())}let f=e=>{c=y.onStop=()=>{xi(e,a,4)}},_=p?[]:Ji;const m=()=>{if(y.active)if(t){const e=y.run();(i||h||(p?e.some(((e,t)=>W(e,_[t]))):W(e,_)))&&(c&&c(),Pi(t,a,3,[e,_===Ji?void 0:_,f]),_=e)}else y.run()};let g;m.allowRecurse=!!t,g="sync"===r?m:"post"===r?()=>Dn(m,a&&a.suspense):()=>{!a||a.isMounted?function(e){Gi(e,Fi,Mi,Li)}(m):m()};const y=new re(l,g);return t?n?m():_=y.run():"post"===r?Dn(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&v(a.scope.effects,y)}}function tr(e,t,n){const i=this.proxy,r=I(e)?e.includes(".")?nr(i,e):()=>i[e]:e.bind(i,i);let s;T(t)?s=t:(s=t.handler,n=t);const o=vi;Ci(this);const a=er(r,s.bind(i),n);return o?Ci(o):bi(),a}function nr(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ir(e,t=new Set){if(!S(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),dt(e))ir(e.value,t);else if(b(e))for(let n=0;n<e.length;n++)ir(e[n],t);else if(E(e)||w(e))e.forEach((e=>{ir(e,t)}));else if(R(e))for(const n in e)ir(e[n],t);return e}function rr(e,t,n){const i=arguments.length;return 2===i?S(t)&&!b(t)?ei(t)?oi(e,null,[t]):oi(e,t):oi(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&ei(n)&&(n=[n]),oi(e,t,n))}const sr="3.2.11",or="undefined"!=typeof document?document:null,ar=new Map,lr={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?or.createElementNS("http://www.w3.org/2000/svg",e):or.createElement(e,n?{is:n}:void 0);return"select"===e&&i&&null!=i.multiple&&r.setAttribute("multiple",i.multiple),r},createText:e=>or.createTextNode(e),createComment:e=>or.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>or.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,i){const r=n?n.previousSibling:t.lastChild;let s=ar.get(e);if(!s){const t=or.createElement("template");if(t.innerHTML=i?`<svg>${e}</svg>`:e,s=t.content,i){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e)}ar.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[r?r.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const cr=/\s*!important$/;function ur(e,t,n){if(b(n))n.forEach((n=>ur(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=function(e,t){const n=dr[t];if(n)return n;let i=F(t);if("filter"!==i&&i in e)return dr[t]=i;i=j(i);for(let r=0;r<hr.length;r++){const n=hr[r]+i;if(n in e)return dr[t]=n}return t}(e,t);cr.test(n)?e.setProperty(q(i),n.replace(cr,""),"important"):e[i]=n}}const hr=["Webkit","Moz","ms"],dr={};const pr="http://www.w3.org/1999/xlink";let fr=Date.now,_r=!1;if("undefined"!=typeof window){fr()>document.createEvent("Event").timeStamp&&(fr=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);_r=!!(e&&Number(e[1])<=53)}let mr=0;const gr=Promise.resolve(),vr=()=>{mr=0};function yr(e,t,n,i,r=null){const s=e._vei||(e._vei={}),o=s[t];if(i&&o)o.value=i;else{const[n,a]=function(e){let t;if(Cr.test(e)){let n;for(t={};n=e.match(Cr);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[q(e.slice(2)),t]}(t);if(i){!function(e,t,n,i){e.addEventListener(t,n,i)}(e,n,s[t]=function(e,t){const n=e=>{const i=e.timeStamp||fr();(_r||i>=n.attached-1)&&Pi(function(e,t){if(b(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>mr||(gr.then(vr),mr=fr()))(),n}(i,r),a)}else o&&(!function(e,t,n,i){e.removeEventListener(t,n,i)}(e,n,o,a),s[t]=void 0)}}const Cr=/(?:Once|Passive|Capture)$/;const br=/^on[a-z]/;Boolean;const wr=g({patchProp:(e,i,r,s,o=!1,a,l,c,u)=>{"class"===i?function(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,s,o):"style"===i?function(e,t,n){const i=e.style,r=i.display;if(n)if(I(n))t!==n&&(i.cssText=n);else{for(const e in n)ur(i,e,n[e]);if(t&&!I(t))for(const e in t)null==n[e]&&ur(i,e,"")}else e.removeAttribute("style");"_vod"in e&&(i.display=r)}(e,r,s):_(i)?m(i)||yr(e,i,0,s,l):("."===i[0]?(i=i.slice(1),1):"^"===i[0]?(i=i.slice(1),0):function(e,t,n,i){if(i)return"innerHTML"===t||"textContent"===t||!!(t in e&&br.test(t)&&T(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(br.test(t)&&I(n))return!1;return t in e}(e,i,s,o))?function(e,t,i,r,s,o,a){if("innerHTML"===t||"textContent"===t)return r&&a(r,s,o),void(e[t]=null==i?"":i);if("value"===t&&"PROGRESS"!==e.tagName){e._value=i;const n=null==i?"":i;return e.value!==n&&(e.value=n),void(null==i&&e.removeAttribute(t))}if(""===i||null==i){const r=typeof e[t];if("boolean"===r)return void(e[t]=n(i));if(null==i&&"string"===r)return e[t]="",void e.removeAttribute(t);if("number"===r){try{e[t]=0}catch(l){}return void e.removeAttribute(t)}}try{e[t]=i}catch(c){}}(e,i,s,a,l,c,u):("true-value"===i?e._trueValue=s:"false-value"===i&&(e._falseValue=s),function(e,i,r,s,o){if(s&&i.startsWith("xlink:"))null==r?e.removeAttributeNS(pr,i.slice(6,i.length)):e.setAttributeNS(pr,i,r);else{const s=t(i);null==r||s&&!n(r)?e.removeAttribute(i):e.setAttribute(i,s?"":r)}}(e,i,s,o))}},lr);let Er;const Tr=(...e)=>{const t=(Er||(Er=Mn(wr))).createApp(...e),{mount:n}=t;return t.mount=e=>{const i=function(e){if(I(e)){return document.querySelector(e)}return e}(e);if(!i)return;const r=t._component;T(r)||r.render||r.template||(r.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Ir(){return"undefined"!=typeof navigator?window:"undefined"!=typeof global?global:{}}function kr(e,t){const n=Ir().__VUE_DEVTOOLS_GLOBAL_HOOK__;if(n)n.emit("devtools-plugin:setup",e,t);else{const n=Ir();(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:e,setupFn:t})}}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */function Sr(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function xr(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Pr(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;Rr(e,n,[],e._modules.root,!0),Nr(e,n,t)}function Nr(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var r=e._wrappedGetters,s={};Sr(r,(function(t,n){s[n]=function(e,t){return function(){return e(t)}}(t,e),Object.defineProperty(e.getters,n,{get:function(){return s[n]()},enumerable:!0})})),e._state=tt({data:t}),e.strict&&function(e){Zi((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),i&&n&&e._withCommit((function(){i.data=null}))}function Rr(e,t,n,i,r){var s=!n.length,o=e._modules.getNamespace(n);if(i.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=i),!s&&!r){var a=Ar(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=i.state}))}var c=i.context=function(e,t,n){var i=""===t,r={dispatch:i?e.dispatch:function(n,i,r){var s=Dr(n,i,r),o=s.payload,a=s.options,l=s.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:i?e.commit:function(n,i,r){var s=Dr(n,i,r),o=s.payload,a=s.options,l=s.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(r,{getters:{get:i?function(){return e.getters}:function(){return Or(e,t)}},state:{get:function(){return Ar(e.state,n)}}}),r}(e,o,n);i.forEachMutation((function(t,n){!function(e,t,n,i){(e._mutations[t]||(e._mutations[t]=[])).push((function(t){n.call(e,i.state,t)}))}(e,o+n,t,c)})),i.forEachAction((function(t,n){var i=t.root?n:o+n,r=t.handler||t;!function(e,t,n,i){(e._actions[t]||(e._actions[t]=[])).push((function(t){var r,s=n.call(e,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:e.getters,rootState:e.state},t);return(r=s)&&"function"==typeof r.then||(s=Promise.resolve(s)),e._devtoolHook?s.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):s}))}(e,i,r,c)})),i.forEachGetter((function(t,n){!function(e,t,n,i){if(e._wrappedGetters[t])return;e._wrappedGetters[t]=function(e){return n(i.state,i.getters,e.state,e.getters)}}(e,o+n,t,c)})),i.forEachChild((function(i,s){Rr(e,t,n.concat(s),i,r)}))}function Or(e,t){if(!e._makeLocalGettersCache[t]){var n={},i=t.length;Object.keys(e.getters).forEach((function(r){if(r.slice(0,i)===t){var s=r.slice(i);Object.defineProperty(n,s,{get:function(){return e.getters[r]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function Ar(e,t){return t.reduce((function(e,t){return e[t]}),e)}function Dr(e,t,n){var i;return null!==(i=e)&&"object"==typeof i&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var Mr=0;function Fr(e,t){kr({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:"vuex:mutations",label:"Vuex Mutations",color:Lr}),n.addTimelineLayer({id:"vuex:actions",label:"Vuex Actions",color:Lr}),n.addInspector({id:"vuex",label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&"vuex"===n.inspectorId)if(n.filter){var i=[];Wr(i,t._modules.root,n.filter,""),n.rootNodes=i}else n.rootNodes=[Ur(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var i=n.nodeId;Or(t,i),n.state=function(e,t,n){t="root"===n?t:t[n];var i=Object.keys(t),r={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(i.length){var s=function(e){var t={};return Object.keys(e).forEach((function(n){var i=n.split("/");if(i.length>1){var r=t,s=i.pop();i.forEach((function(e){r[e]||(r[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),r=r[e]._custom.value})),r[s]=Vr((function(){return e[n]}))}else t[n]=Vr((function(){return e[n]}))})),t}(t);r.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?jr(e):e,editable:!1,value:Vr((function(){return s[e]}))}}))}return r}((r=t._modules,(o=(s=i).split("/").filter((function(e){return e}))).reduce((function(e,t,n){var i=e[t];if(!i)throw new Error('Missing module "'+t+'" for path "'+s+'".');return n===o.length-1?i:i._children}),"root"===s?r:r.root._children)),"root"===i?t.getters:t._makeLocalGettersCache,i)}var r,s,o})),n.on.editInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var i=n.nodeId,r=n.path;"root"!==i&&(r=i.split("/").filter(Boolean).concat(r)),t._withCommit((function(){n.set(t._state.data,r,n.state.value)}))}})),t.subscribe((function(e,t){var i={};e.payload&&(i.payload=e.payload),i.state=t,n.notifyComponentUpdate(),n.sendInspectorTree("vuex"),n.sendInspectorState("vuex"),n.addTimelineEvent({layerId:"vuex:mutations",event:{time:Date.now(),title:e.type,data:i}})})),t.subscribeAction({before:function(e,t){var i={};e.payload&&(i.payload=e.payload),e._id=Mr++,e._time=Date.now(),i.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:i}})},after:function(e,t){var i={},r=Date.now()-e._time;i.duration={_custom:{type:"duration",display:r+"ms",tooltip:"Action duration",value:r}},e.payload&&(i.payload=e.payload),i.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:i}})}})}))}var Lr=8702998,qr={label:"namespaced",textColor:16777215,backgroundColor:6710886};function jr(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function Ur(e,t){return{id:t||"root",label:jr(t),tags:e.namespaced?[qr]:[],children:Object.keys(e._children).map((function(n){return Ur(e._children[n],t+n+"/")}))}}function Wr(e,t,n,i){i.includes(n)&&e.push({id:i||"root",label:i.endsWith("/")?i.slice(0,i.length-1):i||"Root",tags:t.namespaced?[qr]:[]}),Object.keys(t._children).forEach((function(r){Wr(e,t._children[r],n,i+r+"/")}))}function Vr(e){try{return e()}catch(t){return t}}var Br=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"==typeof n?n():n)||{}},Hr={namespaced:{configurable:!0}};Hr.namespaced.get=function(){return!!this._rawModule.namespaced},Br.prototype.addChild=function(e,t){this._children[e]=t},Br.prototype.removeChild=function(e){delete this._children[e]},Br.prototype.getChild=function(e){return this._children[e]},Br.prototype.hasChild=function(e){return e in this._children},Br.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Br.prototype.forEachChild=function(e){Sr(this._children,e)},Br.prototype.forEachGetter=function(e){this._rawModule.getters&&Sr(this._rawModule.getters,e)},Br.prototype.forEachAction=function(e){this._rawModule.actions&&Sr(this._rawModule.actions,e)},Br.prototype.forEachMutation=function(e){this._rawModule.mutations&&Sr(this._rawModule.mutations,e)},Object.defineProperties(Br.prototype,Hr);var zr=function(e){this.register([],e,!1)};function $r(e,t,n){if(t.update(n),n.modules)for(var i in n.modules){if(!t.getChild(i))return;$r(e.concat(i),t.getChild(i),n.modules[i])}}function Gr(e){return new Yr(e)}zr.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},zr.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return e+((t=t.getChild(n)).namespaced?n+"/":"")}),"")},zr.prototype.update=function(e){$r([],this.root,e)},zr.prototype.register=function(e,t,n){var i=this;void 0===n&&(n=!0);var r=new Br(t,n);0===e.length?this.root=r:this.get(e.slice(0,-1)).addChild(e[e.length-1],r);t.modules&&Sr(t.modules,(function(t,r){i.register(e.concat(r),t,n)}))},zr.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],i=t.getChild(n);i&&i.runtime&&t.removeChild(n)},zr.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var Yr=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var i=e.strict;void 0===i&&(i=!1);var r=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new zr(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=r;var s=this,o=this.dispatch,a=this.commit;this.dispatch=function(e,t){return o.call(s,e,t)},this.commit=function(e,t,n){return a.call(s,e,t,n)},this.strict=i;var l=this._modules.root.state;Rr(this,l,[],this._modules.root),Nr(this,l),n.forEach((function(e){return e(t)}))},Kr={state:{configurable:!0}};Yr.prototype.install=function(e,t){e.provide(t||"store",this),e.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&Fr(e,this)},Kr.state.get=function(){return this._state.data},Kr.state.set=function(e){},Yr.prototype.commit=function(e,t,n){var i=this,r=Dr(e,t,n),s=r.type,o=r.payload,a={type:s,payload:o},l=this._mutations[s];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,i.state)})))},Yr.prototype.dispatch=function(e,t){var n=this,i=Dr(e,t),r=i.type,s=i.payload,o={type:r,payload:s},a=this._actions[r];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(c){}var l=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(c){}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(c){}t(e)}))}))}},Yr.prototype.subscribe=function(e,t){return xr(e,this._subscribers,t)},Yr.prototype.subscribeAction=function(e,t){return xr("function"==typeof e?{before:e}:e,this._actionSubscribers,t)},Yr.prototype.watch=function(e,t,n){var i=this;return Zi((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},Yr.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Yr.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=[e]),this._modules.register(e,t),Rr(this,this.state,e,this._modules.get(e),n.preserveState),Nr(this,this.state)},Yr.prototype.unregisterModule=function(e){var t=this;"string"==typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){delete Ar(t.state,e.slice(0,-1))[e[e.length-1]]})),Pr(this)},Yr.prototype.hasModule=function(e){return"string"==typeof e&&(e=[e]),this._modules.isRegistered(e)},Yr.prototype.hotUpdate=function(e){this._modules.update(e),Pr(this,!0)},Yr.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Yr.prototype,Kr);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Qr=function(e,t){return(Qr=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function Xr(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{l(i.next(e))}catch(t){s(t)}}function a(e){try{l(i.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((i=i.apply(e,t||[])).next())}))}function Jr(e,t){var n,i,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(r=2&s[0]?i.return:s[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,s[1])).done)return r;switch(i=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,i=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1];break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s);break}r[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],i=0}finally{n=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function Zr(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function es(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,r,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(i=s.next()).done;)o.push(i.value)}catch(a){r={error:a}}finally{try{i&&!i.done&&(n=s.return)&&n.call(s)}finally{if(r)throw r.error}}return o}function ts(e,t,n){if(n||2===arguments.length)for(var i,r=0,s=t.length;r<s;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ns=!1,is="${JSCORE_VERSION}",rs=function(e,t){if(!e)throw ss(t)},ss=function(e){return new Error("Firebase Database ("+is+") INTERNAL ASSERT FAILED: "+e)},os=function(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},as={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[],r=0;r<e.length;r+=3){var s=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,c=l?e[r+2]:0,u=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|c>>6,p=63&c;l||(p=64,o||(d=64)),i.push(n[u],n[h],n[d],n[p])}return i.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(os(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,i=0;n<e.length;){var r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){var s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){var o=((7&r)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[],r=0;r<e.length;){var s=n[e.charAt(r++)],o=r<e.length?n[e.charAt(r)]:0,a=++r<e.length?n[e.charAt(r)]:64,l=++r<e.length?n[e.charAt(r)]:64;if(++r,null==s||null==o||null==a||null==l)throw Error();var c=s<<2|o>>4;if(i.push(c),64!==a){var u=o<<4&240|a>>2;if(i.push(u),64!==l){var h=a<<6&192|l;i.push(h)}}}return i},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ls=function(e){try{return as.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cs(e){return us(void 0,e)}function us(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=us(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var hs=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,i){n?t.reject(n):t.resolve(i),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,i))}},e}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function ps(){return!0===ns}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var fs=function(e){function t(n,i,r){var s=e.call(this,i)||this;return s.code=n,s.customData=r,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,_s.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Qr(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),_s=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=t[0]||{},r=this.service+"/"+e,s=this.errors[e],o=s?ms(s,i):"Error",a=this.serviceName+": "+o+" ("+r+").",l=new fs(r,a,i);return l},e}();function ms(e,t){return e.replace(gs,(function(e,n){var i=t[n];return null!=i?String(i):"<"+n+"?>"}))}var gs=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(e){return JSON.parse(e)}function ys(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Cs=function(e){var t={},n={},i={},r="";try{var s=e.split(".");t=vs(ls(s[0])||""),n=vs(ls(s[1])||""),r=s[2],i=n.d||{},delete n.d}catch(o){}return{header:t,claims:n,data:i,signature:r}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bs(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function ws(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Es(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ts(e,t,n){var i={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function Is(e,t){if(e===t)return!0;for(var n=Object.keys(e),i=Object.keys(t),r=0,s=n;r<s.length;r++){var o=s[r];if(!i.includes(o))return!1;var a=e[o],l=t[o];if(ks(a)&&ks(l)){if(!Is(a,l))return!1}else if(a!==l)return!1}for(var c=0,u=i;c<u.length;c++){o=u[c];if(!n.includes(o))return!1}return!0}function ks(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ss=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(i=16;i<80;i++){var r=n[i-3]^n[i-8]^n[i-14]^n[i-16];n[i]=4294967295&(r<<1|r>>>31)}var s,o,a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],u=this.chain_[3],h=this.chain_[4];for(i=0;i<80;i++){i<40?i<20?(s=u^l&(c^u),o=1518500249):(s=l^c^u,o=1859775393):i<60?(s=l&c|u&(l|c),o=2400959708):(s=l^c^u,o=3395469782);r=(a<<5|a>>>27)+s+h+o+n[i]&4294967295;h=u,u=c,c=4294967295&(l<<30|l>>>2),l=a,a=r}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=0,r=this.buf_,s=this.inbuf_;i<t;){if(0===s)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(r[s]=e.charCodeAt(i),++i,++s===this.blockSize){this.compress_(r),s=0;break}}else for(;i<t;)if(r[s]=e[i],++i,++s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var i=0;for(n=0;n<5;n++)for(var r=24;r>=0;r-=8)e[i]=this.chain_[n]>>r&255,++i;return e},e}();function xs(e,t){return e+" failed: "+t+" argument "}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ps=function(e){for(var t=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ns(e){return e&&e._delegate?e._delegate:e}var Rs=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),Os=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new hs;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch(r){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(u){}try{for(var i=Zr(this.instancesDeferred.entries()),r=i.next();!r.done;r=i.next()){var s=es(r.value,2),o=s[0],a=s[1],l=this.normalizeInstanceIdentifier(o);try{var c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch(u){}}}catch(h){t={error:h}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Xr(this,void 0,void 0,(function(){var e;return Jr(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(ts(ts([],es(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),es(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e="[DEFAULT]"),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var i=e.options,r=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:r});try{for(var a=Zr(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var c=es(l.value,2),u=c[0],h=c[1];s===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(d){t={error:d}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);var s=this.instances.get(i);return s&&e(s,i),function(){r.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,r=this.onInitCallbacks.get(t);if(r)try{for(var s=Zr(r),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(l){}}}catch(c){n={error:c}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,i=e.options,r=void 0===i?{}:i,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:r}),this.instances.set(n,s),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var As,Ds,Ms,Fs=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Os(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function Ls(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var i=Array(e),r=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,r++)i[r]=s[o];return i}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Ms=Ds||(Ds={}))[Ms.DEBUG=0]="DEBUG",Ms[Ms.VERBOSE=1]="VERBOSE",Ms[Ms.INFO=2]="INFO",Ms[Ms.WARN=3]="WARN",Ms[Ms.ERROR=4]="ERROR",Ms[Ms.SILENT=5]="SILENT";var qs={debug:Ds.DEBUG,verbose:Ds.VERBOSE,info:Ds.INFO,warn:Ds.WARN,error:Ds.ERROR,silent:Ds.SILENT},js=Ds.INFO,Us=((As={})[Ds.DEBUG]="log",As[Ds.VERBOSE]="log",As[Ds.INFO]="info",As[Ds.WARN]="warn",As[Ds.ERROR]="error",As),Ws=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(t<e.logLevel)){var r=(new Date).toISOString(),s=Us[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,Ls(["["+r+"]  "+e.name+":"],n))}},Vs=function(){function e(e){this.name=e,this._logLevel=js,this._logHandler=Ws,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Ds))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?qs[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ls([this,Ds.DEBUG],e)),this._logHandler.apply(this,Ls([this,Ds.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ls([this,Ds.VERBOSE],e)),this._logHandler.apply(this,Ls([this,Ds.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ls([this,Ds.INFO],e)),this._logHandler.apply(this,Ls([this,Ds.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ls([this,Ds.WARN],e)),this._logHandler.apply(this,Ls([this,Ds.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ls([this,Ds.ERROR],e)),this._logHandler.apply(this,Ls([this,Ds.ERROR],e))},e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Hs=new Vs("@firebase/app"),zs={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},$s=new Map,Gs=new Map;function Ys(e,t){try{e.container.addComponent(t)}catch(n){Hs.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ks(e){const t=e.name;if(Gs.has(t))return Hs.debug(`There were multiple attempts to register component ${t}.`),!1;Gs.set(t,e);for(const n of $s.values())Ys(n,e);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qs=new _s("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xs{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Rs("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qs.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Js(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Qs.create("bad-app-name",{appName:String(i)});const r=$s.get(i);if(r){if(Is(e,r.options)&&Is(n,r.config))return r;throw Qs.create("duplicate-app",{appName:i})}const s=new Fs(i);for(const a of Gs.values())s.addComponent(a);const o=new Xs(e,n,s);return $s.set(i,o),o}function Zs(e,t,n){var i;let r=null!==(i=zs[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Hs.warn(e.join(" "))}Ks(new Rs(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var eo;Ks(new Rs("platform-logger",(e=>new Bs(e)),"PRIVATE")),Zs("@firebase/app","0.7.0",eo),Zs("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Zs("firebase","9.0.2","app");
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const to="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,no=e=>to?Symbol(e):"_vr_"+e,io=no("rvlm"),ro=no("rvd"),so=no("r"),oo=no("rl"),ao=no("rvl"),lo="undefined"!=typeof window;const co=Object.assign;function uo(e,t){const n={};for(const i in t){const r=t[i];n[i]=Array.isArray(r)?r.map(e):e(r)}return n}const ho=()=>{},po=/\/$/;function fo(e,t,n="/"){let i,r={},s="",o="";const a=t.indexOf("?"),l=t.indexOf("#",a>-1?a:0);return a>-1&&(i=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),r=e(s)),l>-1&&(i=i||t.slice(0,l),o=t.slice(l,t.length)),i=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/");let r,s,o=n.length-1;for(r=0;r<i.length;r++)if(s=i[r],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+i.slice(r-(r===i.length?1:0)).join("/")}(null!=i?i:t,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:o}}function _o(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function mo(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function go(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!vo(e[n],t[n]))return!1;return!0}function vo(e,t){return Array.isArray(e)?yo(e,t):Array.isArray(t)?yo(t,e):e===t}function yo(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var Co,bo,wo,Eo;function To(e){if(!e)if(lo){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(po,"")}(bo=Co||(Co={})).pop="pop",bo.push="push",(Eo=wo||(wo={})).back="back",Eo.forward="forward",Eo.unknown="";const Io=/^[^#]+#/;function ko(e,t){return e.replace(Io,"#")+t}const So=()=>({left:window.pageXOffset,top:window.pageYOffset});function xo(e){let t;if("el"in e){const n=e.el,i="string"==typeof n&&n.startsWith("#"),r="string"==typeof n?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function Po(e,t){return(history.state?history.state.position-t:-1)+e}const No=new Map;function Ro(e,t){const{pathname:n,search:i,hash:r}=t,s=e.indexOf("#");if(s>-1){let t=r.includes(e.slice(s))?e.slice(s).length:1,n=r.slice(t);return"/"!==n[0]&&(n="/"+n),_o(n,"")}return _o(n,e)+i+r}function Oo(e,t,n,i=!1,r=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:r?So():null}}function Ao(e){const{history:t,location:n}=window,i={value:Ro(e,n)},r={value:t.state};function s(i,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+i:location.protocol+"//"+location.host+e+i;try{t[o?"replaceState":"pushState"](s,"",l),r.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}return r.value||s(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:i,state:r,push:function(e,n){const o=co({},r.value,t.state,{forward:e,scroll:So()});s(o.current,o,!0),s(e,co({},Oo(i.value,e,null),{position:o.position+1},n),!1),i.value=e},replace:function(e,n){s(e,co({},t.state,Oo(r.value.back,e,r.value.forward,!0),n,{position:r.value.position}),!0),i.value=e}}}function Do(e){const t=Ao(e=To(e)),n=function(e,t,n,i){let r=[],s=[],o=null;const a=({state:s})=>{const a=Ro(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else i(a);r.forEach((e=>{e(n.value,l,{delta:u,type:Co.pop,direction:u?u>0?wo.forward:wo.back:wo.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(co({},e.state,{scroll:So()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:function(){o=n.value},listen:function(e){r.push(e);const t=()=>{const t=r.indexOf(e);t>-1&&r.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace);const i=co({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:ko.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Mo(e){return"string"==typeof e||"symbol"==typeof e}const Fo={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lo=no("nf");var qo,jo;function Uo(e,t){return co(new Error,{type:e,[Lo]:!0},t)}function Wo(e,t){return e instanceof Error&&Lo in e&&(null==t||!!(e.type&t))}(jo=qo||(qo={}))[jo.aborted=4]="aborted",jo[jo.cancelled=8]="cancelled",jo[jo.duplicated=16]="duplicated";const Vo={sensitive:!1,strict:!1,start:!0,end:!0},Bo=/[.+*?^${}()[\]/\\]/g;function Ho(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function zo(e,t){let n=0;const i=e.score,r=t.score;for(;n<i.length&&n<r.length;){const e=Ho(i[n],r[n]);if(e)return e;n++}return r.length-i.length}const $o={type:0,value:""},Go=/[a-zA-Z0-9_]/;function Yo(e,t,n){const i=function(e,t){const n=co({},Vo,t),i=[];let r=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(r+="/");for(let t=0;t<l.length;t++){const i=l[t];let o=40+(n.sensitive?.25:0);if(0===i.type)t||(r+="/"),r+=i.value.replace(Bo,"\\$&"),o+=40;else if(1===i.type){const{value:e,repeatable:n,optional:c,regexp:u}=i;s.push({name:e,repeatable:n,optional:c});const h=u||"[^/]+?";if("[^/]+?"!==h){o+=10;try{new RegExp(`(${h})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+a.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=c&&l.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),r+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}i.push(e)}if(n.strict&&n.end){const e=i.length-1;i[e][i[e].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");return{re:o,score:i,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let i=1;i<t.length;i++){const e=t[i]||"",r=s[i-1];n[r.name]=e&&r.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",i=!1;for(const r of e){i&&n.endsWith("/")||(n+="/"),i=!1;for(const e of r)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(Array.isArray(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=Array.isArray(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);r.length<2&&(n.endsWith("/")?n=n.slice(0,-1):i=!0)}n+=c}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[$o]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<e.length;)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=i;break;case 1:"("===a?n=2:Go.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state")}else i=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),r}(e.path),n),r=co(i,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Ko(e,t){const n=[],i=new Map;function r(e,n,i){const a=!i,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Qo(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);l.aliasOf=i&&i.record;const c=Zo(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(co({},l,{components:i?i.record.components:l.components,path:e,aliasOf:i?i.record:l}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,i="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&i+u)}if(h=Yo(t,n,c),i?i.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!Xo(h)&&s(e.name)),"children"in l){const e=l.children;for(let t=0;t<e.length;t++)r(e[t],h,i&&i.children[t])}i=i||h,o(h)}return d?()=>{s(d)}:ho}function s(e){if(Mo(e)){const t=i.get(e);t&&(i.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&i.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&zo(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!Xo(e)&&i.set(e.record.name,e)}return t=Zo({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>r(e))),{addRoute:r,resolve:function(e,t){let r,s,o,a={};if("name"in e&&e.name){if(r=i.get(e.name),!r)throw Uo(1,{location:e});o=r.record.name,a=co(function(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}(t.params,r.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=r.stringify(a)}else if("path"in e)s=e.path,r=n.find((e=>e.re.test(s))),r&&(a=r.parse(s),o=r.record.name);else{if(r=t.name?i.get(t.name):n.find((e=>e.re.test(t.path))),!r)throw Uo(1,{location:e,currentLocation:t});o=r.record.name,a=co({},t.params,e.params),s=r.stringify(a)}const l=[];let c=r;for(;c;)l.unshift(c.record),c=c.parent;return{name:o,path:s,params:a,matched:l,meta:Jo(l)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return i.get(e)}}}function Qo(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]="boolean"==typeof n?n:n[i];return t}function Xo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Jo(e){return e.reduce(((e,t)=>co(e,t.meta)),{})}function Zo(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}const ea=/#/g,ta=/&/g,na=/\//g,ia=/=/g,ra=/\?/g,sa=/\+/g,oa=/%5B/g,aa=/%5D/g,la=/%5E/g,ca=/%60/g,ua=/%7B/g,ha=/%7C/g,da=/%7D/g,pa=/%20/g;function fa(e){return encodeURI(""+e).replace(ha,"|").replace(oa,"[").replace(aa,"]")}function _a(e){return fa(e).replace(sa,"%2B").replace(pa,"+").replace(ea,"%23").replace(ta,"%26").replace(ca,"`").replace(ua,"{").replace(da,"}").replace(la,"^")}function ma(e){return null==e?"":function(e){return fa(e).replace(ea,"%23").replace(ra,"%3F")}(e).replace(na,"%2F")}function ga(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function va(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let i=0;i<n.length;++i){const e=n[i].replace(sa," "),r=e.indexOf("="),s=ga(r<0?e:e.slice(0,r)),o=r<0?null:ga(e.slice(r+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function ya(e){let t="";for(let n in e){const i=e[n];if(n=_a(n).replace(ia,"%3D"),null==i){void 0!==i&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(i)?i.map((e=>e&&_a(e))):[i&&_a(i)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ca(e){const t={};for(const n in e){const i=e[n];void 0!==i&&(t[n]=Array.isArray(i)?i.map((e=>null==e?null:""+e)):null==i?i:""+i)}return t}function ba(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function wa(e,t,n,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise(((o,a)=>{const l=e=>{var l;!1===e?a(Uo(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(l=e)||l&&"object"==typeof l?a(Uo(2,{from:t,to:e})):(s&&i.enterCallbacks[r]===s&&"function"==typeof e&&s.push(e),o())},c=e.call(i&&i.instances[r],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function Ea(e,t,n,i){const r=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&r.push(wa(s,n,i,o,e))}else{let s=a();r.push((()=>s.then((r=>{if(!r)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=r).__esModule||to&&"Module"===a[Symbol.toStringTag]?r.default:r;var a;o.components[e]=s;const l=(s.__vccOpts||s)[t];return l&&wa(l,n,i,o,e)()}))))}}var s;return r}function Ta(e){const t=Ot(so),n=Ot(oo),i=yt((()=>t.resolve(_t(e.to)))),r=yt((()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(mo.bind(null,r));if(o>-1)return o;const a=ka(e[t-2]);return t>1&&ka(r)===a&&s[s.length-1].path!==a?s.findIndex(mo.bind(null,e[t-2])):o})),s=yt((()=>r.value>-1&&function(e,t){for(const n in t){const i=t[n],r=e[n];if("string"==typeof i){if(i!==r)return!1}else if(!Array.isArray(r)||r.length!==i.length||i.some(((e,t)=>e!==r[t])))return!1}return!0}(n.params,i.value.params))),o=yt((()=>r.value>-1&&r.value===n.matched.length-1&&go(n.params,i.value.params)));return{route:i,href:yt((()=>i.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[_t(e.replace)?"replace":"push"](_t(e.to)).catch(ho):Promise.resolve()}}}const Ia=Ut({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ta,setup(e,{slots:t}){const n=tt(Ta(e)),{options:i}=Ot(so),r=yt((()=>({[Sa(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Sa(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:rr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}});function ka(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Sa=(e,t,n)=>null!=e?e:null!=t?t:n;function xa(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Pa=Ut({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=Ot(ao),r=yt((()=>e.route||i.value)),s=Ot(ro,0),o=yt((()=>r.value.matched[s]));Rt(ro,s+1),Rt(io,o),Rt(ao,r);const a=ft(l,!1);var l;return Zi((()=>[a.value,o.value,e.name]),(([e,t,n],[i,r,s])=>{t&&(t.instances[n]=e,r&&r!==t&&e&&e===i&&(t.leaveGuards.size||(t.leaveGuards=r.leaveGuards),t.updateGuards.size||(t.updateGuards=r.updateGuards))),!e||!t||r&&mo(t,r)&&i||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=r.value,s=o.value,l=s&&s.components[e.name],c=e.name;if(!l)return xa(n.default,{Component:l,route:i});const u=s.props[e.name],h=u?!0===u?i.params:"function"==typeof u?u(i):u:null,d=rr(l,co({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(s.instances[c]=null)},ref:a}));return xa(n.default,{Component:d,route:i})||d}}});function Na(e){const t=Ko(e.routes,e),n=e.parseQuery||va,i=e.stringifyQuery||ya,r=e.history,s=ba(),o=ba(),a=ba(),l=ft(Fo,!0);let c=Fo;lo&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=uo.bind(null,(e=>""+e)),h=uo.bind(null,ma),d=uo.bind(null,ga);function p(e,s){if(s=co({},s||l.value),"string"==typeof e){const i=fo(n,e,s.path),o=t.resolve({path:i.path},s),a=r.createHref(i.fullPath);return co(i,o,{params:d(o.params),hash:ga(i.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=co({},e,{path:fo(n,e.path,s.path).path});else{const t=co({},e.params);for(const e in t)null==t[e]&&delete t[e];o=co({},e,{params:h(e.params)}),s.params=h(s.params)}const a=t.resolve(o,s),c=e.hash||"";a.params=u(d(a.params));const p=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,co({},e,{hash:(f=c,fa(f).replace(ua,"{").replace(da,"}").replace(la,"^")),path:a.path}));var f;const _=r.createHref(p);return co({fullPath:p,hash:c,query:i===ya?Ca(e.query):e.query||{}},a,{redirectedFrom:void 0,href:_})}function f(e){return"string"==typeof e?fo(n,e,l.value.path):co({},e)}function _(e,t){if(c!==e)return Uo(8,{from:t,to:e})}function m(e){return v(e)}function g(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let i="function"==typeof n?n(e):n;return"string"==typeof i&&(i=i.includes("?")||i.includes("#")?i=f(i):{path:i},i.params={}),co({query:e.query,hash:e.hash,params:e.params},i)}}function v(e,t){const n=c=p(e),r=l.value,s=e.state,o=e.force,a=!0===e.replace,u=g(n);if(u)return v(co(f(u),{state:s,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){const i=t.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&mo(t.matched[i],n.matched[r])&&go(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,r,n)&&(d=Uo(16,{to:h,from:r}),N(r,r,!0,!1)),(d?Promise.resolve(d):C(h,r)).catch((e=>Wo(e)?e:x(e,h,r))).then((e=>{if(e){if(Wo(e,2))return v(co(f(e.to),{state:s,force:o,replace:a}),t||h)}else e=w(h,r,!0,a,s);return b(h,r,e),e}))}function y(e,t){const n=_(e,t);return n?Promise.reject(n):Promise.resolve()}function C(e,t){let n;const[i,r,a]=function(e,t){const n=[],i=[],r=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>mo(e,s)))?i.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>mo(e,a)))||r.push(a))}return[n,i,r]}(e,t);n=Ea(i.reverse(),"beforeRouteLeave",e,t);for(const s of i)s.leaveGuards.forEach((i=>{n.push(wa(i,e,t))}));const l=y.bind(null,e,t);return n.push(l),Ra(n).then((()=>{n=[];for(const i of s.list())n.push(wa(i,e,t));return n.push(l),Ra(n)})).then((()=>{n=Ea(r,"beforeRouteUpdate",e,t);for(const i of r)i.updateGuards.forEach((i=>{n.push(wa(i,e,t))}));return n.push(l),Ra(n)})).then((()=>{n=[];for(const i of e.matched)if(i.beforeEnter&&!t.matched.includes(i))if(Array.isArray(i.beforeEnter))for(const r of i.beforeEnter)n.push(wa(r,e,t));else n.push(wa(i.beforeEnter,e,t));return n.push(l),Ra(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Ea(a,"beforeRouteEnter",e,t),n.push(l),Ra(n)))).then((()=>{n=[];for(const i of o.list())n.push(wa(i,e,t));return n.push(l),Ra(n)})).catch((e=>Wo(e,8)?e:Promise.reject(e)))}function b(e,t,n){for(const i of a.list())i(e,t,n)}function w(e,t,n,i,s){const o=_(e,t);if(o)return o;const a=t===Fo,c=lo?history.state:{};n&&(i||a?r.replace(e.fullPath,co({scroll:a&&c&&c.scroll},s)):r.push(e.fullPath,s)),l.value=e,N(e,t,n,a),P()}let E;function T(){E=r.listen(((e,t,n)=>{const i=p(e),s=g(i);if(s)return void v(co(s,{replace:!0}),i).catch(ho);c=i;const o=l.value;var a,u;lo&&(a=Po(o.fullPath,n.delta),u=So(),No.set(a,u)),C(i,o).catch((e=>Wo(e,12)?e:Wo(e,2)?(v(e.to,i).then((e=>{Wo(e,20)&&!n.delta&&n.type===Co.pop&&r.go(-1,!1)})).catch(ho),Promise.reject()):(n.delta&&r.go(-n.delta,!1),x(e,i,o)))).then((e=>{(e=e||w(i,o,!1))&&(n.delta?r.go(-n.delta,!1):n.type===Co.pop&&Wo(e,20)&&r.go(-1,!1)),b(i,o,e)})).catch(ho)}))}let I,k=ba(),S=ba();function x(e,t,n){P(e);const i=S.list();return i.length?i.forEach((i=>i(e,t,n))):console.error(e),Promise.reject(e)}function P(e){I||(I=!0,T(),k.list().forEach((([t,n])=>e?n(e):t())),k.reset())}function N(t,n,i,r){const{scrollBehavior:s}=e;if(!lo||!s)return Promise.resolve();const o=!i&&function(e){const t=No.get(e);return No.delete(e),t}(Po(t.fullPath,0))||(r||!i)&&history.state&&history.state.scroll||null;return Hi().then((()=>s(t,n,o))).then((e=>e&&xo(e))).catch((e=>x(e,t,n)))}const R=e=>r.go(e);let O;const A=new Set;return{currentRoute:l,addRoute:function(e,n){let i,r;return Mo(e)?(i=t.getRecordMatcher(e),r=n):r=e,t.addRoute(r,i)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:p,options:e,push:m,replace:function(e){return m(co(f(e),{replace:!0}))},go:R,back:()=>R(-1),forward:()=>R(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:S.add,isReady:function(){return I&&l.value!==Fo?Promise.resolve():new Promise(((e,t)=>{k.add([e,t])}))},install(e){e.component("RouterLink",Ia),e.component("RouterView",Pa),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>_t(l)}),lo&&!O&&l.value===Fo&&(O=!0,m(r.location).catch((e=>{})));const t={};for(const i in Fo)t[i]=yt((()=>l.value[i]));e.provide(so,this),e.provide(oo,tt(t)),e.provide(ao,l);const n=e.unmount;A.add(e),e.unmount=function(){A.delete(e),A.size<1&&(c=Fo,E&&E(),l.value=Fo,O=!1,I=!1),n()}}}}function Ra(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Oa="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Aa{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ys(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:vs(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return bs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Aa(t)}}catch(t){}return new Da},Fa=Ma("localStorage"),La=Ma("sessionStorage"),qa=new Vs("@firebase/database"),ja=function(){let e=1;return function(){return e++}}(),Ua=function(e){const t=function(e){for(var t=[],n=0,i=0;i<e.length;i++){var r=e.charCodeAt(i);if(r>=55296&&r<=56319){var s=r-55296;i++,rs(i<e.length,"Surrogate pair missing trail surrogate."),r=65536+(s<<10)+(e.charCodeAt(i)-56320)}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t}(e),n=new Ss;n.update(t);const i=n.digest();return as.encodeByteArray(i)},Wa=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Wa.apply(null,i):t+="object"==typeof i?ys(i):i,t+=" "}return t};let Va=null,Ba=!0;const Ha=function(...e){var t,n;if(!0===Ba&&(Ba=!1,null===Va&&!0===La.get("logging_enabled")&&(t=!0,rs(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(qa.logLevel=Ds.VERBOSE,Va=qa.log.bind(qa),n&&La.set("logging_enabled",!0)):"function"==typeof t?Va=t:(Va=null,La.remove("logging_enabled")))),Va){const t=Wa.apply(null,e);Va(t)}},za=function(e){return function(...t){Ha(e,...t)}},$a=function(...e){const t="FIREBASE INTERNAL ERROR: "+Wa(...e);qa.error(t)},Ga=function(...e){const t=`FIREBASE FATAL ERROR: ${Wa(...e)}`;throw qa.error(t),new Error(t)},Ya=function(...e){const t="FIREBASE WARNING: "+Wa(...e);qa.warn(t)},Ka=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Qa="[MIN_NAME]",Xa="[MAX_NAME]",Ja=function(e,t){if(e===t)return 0;if(e===Qa||t===Xa)return-1;if(t===Qa||e===Xa)return 1;{const n=ol(e),i=ol(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Za=function(e,t){return e===t?0:e<t?-1:1},el=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ys(t))},tl=function(e){if("object"!=typeof e||null===e)return ys(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=ys(t[i]),n+=":",n+=tl(e[t[i]]);return n+="}",n},nl=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function il(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const rl=function(e){rs(!Ka(e),"Invalid JSON number");const t=1023;let n,i,r,s,o;0===e?(i=0,r=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=s+t,r=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(i=0,r=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const sl=new RegExp("^-?(0*)\\d{1,10}$"),ol=function(e){if(sl.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},al=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw Ya("Exception was thrown by user callback.",e),t}),Math.floor(0))}},ll=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Ya(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Ha("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ya(e)}}class hl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}hl.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const dl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pl{constructor(e,t,n,i,r=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Fa.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Fa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function fl(e,t,n){let i;if(rs("string"==typeof t,"typeof type must == string"),rs("object"==typeof n,"typeof params must == object"),"websocket"===t)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const r=[];return il(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.counters_={}}incrementCounter(e,t=1){bs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return cs(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml={},gl={};function vl(e){const t=e.toString();return ml[t]||(ml[t]=new _l),ml[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class yl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&al((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=za(e),this.stats_=vl(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),fl(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new yl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new bl(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&dl.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cl.forceAllow_=!0}static forceDisallow(){Cl.forceDisallow_=!0}static isAvailable(){return!!Cl.forceAllow_||!(Cl.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ys(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(i=os(t),as.encodeByteArray(i,!0));var i;const r=nl(n,1840);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ys(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class bl{constructor(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ja(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=bl.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){Ha("frame writing exception"),r.stack&&Ha(r.stack),Ha(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Ha("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Ha("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wl=null;"undefined"!=typeof MozWebSocket?wl=MozWebSocket:"undefined"!=typeof WebSocket&&(wl=WebSocket);class El{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=za(this.connId),this.stats_=vl(t),this.connURL=El.connectionURL_(t,s,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const r={v:"5"};return"undefined"!=typeof location&&location.hostname&&dl.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r.ac=i),fl(e,"websocket",r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Fa.set("previous_websocket_failure",!0);try{if(ps());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new wl(this.connURL,[],e)}}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){El.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==wl&&!El.forceDisallow_}static previouslyFailed(){return Fa.isInMemoryStorage||!0===Fa.get("previous_websocket_failure")}markConnectionHealthy(){Fa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=vs(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(rs(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=ys(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=nl(t,16384);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}El.responsesRequiredToBeHealthy=2,El.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Cl,El]}initTransports_(e){const t=El&&El.isAvailable();let n=t&&!El.previouslyFailed();if(e.webSocketOnly&&(t||Ya("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[El];else{const e=this.transports_=[];for(const t of Tl.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t,n,i,r,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=za("c:"+this.id+":"),this.transportManager_=new Tl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=ll((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=el("t",e),n=el("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=el("t",e),n=el("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=el("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?$a("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$a("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Ya("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),ll((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ll((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Fa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e){this.allowedEvents_=e,this.listeners_={},rs(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){rs(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends Sl{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ds()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new xl}getInitialEvent(e){return rs("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Nl(){return new Pl("")}function Rl(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ol(e){return e.pieces_.length-e.pieceNum_}function Al(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Pl(e.pieces_,t)}function Dl(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ml(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Fl(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Pl(t,0)}function Ll(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof Pl)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Pl(n,0)}function ql(e){return e.pieceNum_>=e.pieces_.length}function jl(e,t){const n=Rl(e),i=Rl(t);if(null===n)return t;if(n===i)return jl(Al(e),Al(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ul(e,t){if(Ol(e)!==Ol(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Wl(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Ol(e)>Ol(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Vl{constructor(e,t){this.errorPrefix_=t,this.parts_=Ml(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Ps(this.parts_[n]);Bl(this)}}function Bl(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Hl(e))}function Hl(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends Sl{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new zl}getInitialEvent(e){return rs("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l extends kl{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=$l.nextPersistentConnectionId_++,this.log_=za("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!ps())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");zl.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&xl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(ys(r)),rs(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new hs,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[r];void 0!==e&&i===e&&(delete this.outstandingGets_[r],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+r+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),rs(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),rs(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n};e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest("q",r,(r=>{const s=r.d,o=r.s;$l.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&bs(e,"w")){const n=ws(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Ya(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){var t;(e&&40===e.length||"object"==typeof(t=Cs(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){var t=Cs(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),rs(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e};i&&(r.q=n,r.t=i),this.sendRequest("n",r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s.h=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ys(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):$a("Unrecognized action received from server: "+ys(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){rs(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+$l.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(e){rs(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[e,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ha("getToken() completed but was canceled"):(Ha("getToken() completed. Creating connection."),this.authToken_=e&&e.accessToken,this.appCheckToken_=l&&l.token,a=new Il(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,i,(e=>{Ya(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&Ya(e),l())}}}interrupt(e){Ha("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ha("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Es(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>tl(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new Pl(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){Ha("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Ha("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+Oa.replace(/\./g,"-")]=1,ds()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=xl.getInstance().currentlyOnline();return Es(this.interruptReasons_)&&e}}$l.nextPersistentConnectionId_=0,$l.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gl{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Gl(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Gl(Qa,e),i=new Gl(Qa,t);return 0!==this.compare(n,i)}minPost(){return Gl.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl;class Ql extends Yl{static get __EMPTY_NODE(){return Kl}static set __EMPTY_NODE(e){Kl=e}compare(e,t){return Ja(e.name,t.name)}isDefinedOn(e){throw ss("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Gl.MIN}maxPost(){return new Gl(Xa,Kl)}makePost(e,t){return rs("string"==typeof e,"KeyIndex indexValue must always be a string."),new Gl(e,Kl)}toString(){return".key"}}const Xl=new Ql;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Zl{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:Zl.RED,this.left=null!=i?i:ec.EMPTY_NODE,this.right=null!=r?r:ec.EMPTY_NODE}copy(e,t,n,i,r){return new Zl(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ec.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return ec.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Zl.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Zl.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Zl.RED=!0,Zl.BLACK=!1;class ec{constructor(e,t=ec.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ec(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Zl.BLACK,null,null))}remove(e){return new ec(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Zl.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Jl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Jl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Jl(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tc(e,t){return Ja(e.name,t.name)}function nc(e,t){return Ja(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ic;ec.EMPTY_NODE=new class{copy(e,t,n,i,r){return this}insert(e,t,n){return new Zl(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const rc=function(e){return"number"==typeof e?"number:"+rl(e):"string:"+e},sc=function(e){if(e.isLeafNode()){const t=e.val();rs("string"==typeof t||"number"==typeof t||"object"==typeof t&&bs(t,".sv"),"Priority must be a string or number.")}else rs(e===ic||e.isEmpty(),"priority of unexpected type.");rs(e===ic||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let oc,ac,lc;class cc{constructor(e,t=cc.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,rs(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),sc(this.priorityNode_)}static set __childrenNodeConstructor(e){oc=e}static get __childrenNodeConstructor(){return oc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new cc(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:cc.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ql(e)?this:".priority"===Rl(e)?this.priorityNode_:cc.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:cc.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Rl(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(rs(".priority"!==n||1===Ol(e),".priority must be the last token in a path"),this.updateImmediateChild(n,cc.__childrenNodeConstructor.EMPTY_NODE.updateChild(Al(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+rc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?rl(this.value_):this.value_,this.lazyHash_=Ua(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===cc.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof cc.__childrenNodeConstructor?-1:(rs(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=cc.VALUE_TYPE_ORDER.indexOf(t),r=cc.VALUE_TYPE_ORDER.indexOf(n);return rs(i>=0,"Unknown leaf type: "+t),rs(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}cc.VALUE_TYPE_ORDER=["object","boolean","number","string"];const uc=new class extends Yl{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?Ja(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Gl.MIN}maxPost(){return new Gl(Xa,new cc("[PRIORITY-POST]",lc))}makePost(e,t){const n=ac(e);return new Gl(t,new cc("[PRIORITY-POST]",n))}toString(){return".priority"}},hc=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/hc,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const pc=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Zl(a,o.node,Zl.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=r(t,l),u=r(l+1,i);return o=e[l],a=n?n(o):o,new Zl(a,o.node,Zl.BLACK,c,u)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const c=r(s+1,a),u=e[s],h=n?n(u):u;l(new Zl(h,u.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Zl.BLACK):(a(i,Zl.BLACK),a(i,Zl.RED))}return s}(new dc(e.length));return new ec(i||t,s)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fc;const _c={};class mc{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return rs(_c&&uc,"ChildrenNode.ts has not been loaded"),fc=fc||new mc({".priority":_c},{".priority":uc}),fc}get(e){const t=ws(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ec?t:null}hasIndex(e){return bs(this.indexSet_,e.toString())}addIndex(e,t){rs(e!==Xl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(Gl.Wrap);let s,o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?pc(n,e.getCompare()):_c;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new mc(c,l)}addToIndexes(e,t){const n=Ts(this.indexes_,((n,i)=>{const r=ws(this.indexSet_,i);if(rs(r,"Missing index implementation for "+i),n===_c){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(Gl.Wrap);let s=i.getNext();for(;s;)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),pc(n,r.getCompare())}return _c}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new Gl(e.name,i))),r.insert(e,e.node)}}));return new mc(n,this.indexSet_)}removeFromIndexes(e,t){const n=Ts(this.indexes_,(n=>{if(n===_c)return n;{const i=t.get(e.name);return i?n.remove(new Gl(e.name,i)):n}}));return new mc(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc;class vc{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&sc(this.priorityNode_),this.children_.isEmpty()&&rs(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return gc||(gc=new vc(new ec(nc),null,mc.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||gc}updatePriority(e){return this.children_.isEmpty()?this:new vc(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?gc:t}}getChild(e){const t=Rl(e);return null===t?this:this.getImmediateChild(t).getChild(Al(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(rs(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Gl(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?gc:this.priorityNode_;return new vc(i,s,r)}}updateChild(e,t){const n=Rl(e);if(null===n)return t;{rs(".priority"!==Rl(e)||1===Ol(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Al(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(uc,((s,o)=>{t[s]=o.val(e),n++,r&&vc.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+rc(this.getPriority().val())+":"),this.forEachChild(uc,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Ua(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Gl(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Gl(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Gl(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Gl.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Gl.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===yc?-1:0}withIndex(e){if(e===Xl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new vc(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Xl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(uc),n=t.getIterator(uc);let i=e.getNext(),r=n.getNext();for(;i&&r;){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Xl?null:this.indexMap_.get(e.toString())}}vc.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const yc=new class extends vc{constructor(){super(new ec(nc),vc.EMPTY_NODE,mc.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return vc.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Gl,{MIN:{value:new Gl(Qa,vc.EMPTY_NODE)},MAX:{value:new Gl(Xa,yc)}}),Ql.__EMPTY_NODE=vc.EMPTY_NODE,cc.__childrenNodeConstructor=vc,ic=yc,function(e){lc=e}(yc);function Cc(e,t=null){if(null===e)return vc.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),rs(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new cc(e,Cc(t))}if(e instanceof Array){let n=vc.EMPTY_NODE;return il(e,((t,i)=>{if(bs(e,t)&&"."!==t.substring(0,1)){const e=Cc(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Cc(t))}{const n=[];let i=!1;if(il(e,((e,t)=>{if("."!==e.substring(0,1)){const r=Cc(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new Gl(e,r)))}})),0===n.length)return vc.EMPTY_NODE;const r=pc(n,tc,(e=>e.name),nc);if(i){const e=pc(n,uc.getCompare());return new vc(r,Cc(t),new mc({".priority":e},{".priority":uc}))}return new vc(r,Cc(t),mc.Default)}}!function(e){ac=e}(Cc);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bc extends Yl{constructor(e){super(),this.indexPath_=e,rs(!ql(e)&&".priority"!==Rl(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?Ja(e.name,t.name):r}makePost(e,t){const n=Cc(e),i=vc.EMPTY_NODE.updateChild(this.indexPath_,n);return new Gl(t,i)}maxPost(){const e=vc.EMPTY_NODE.updateChild(this.indexPath_,yc);return new Gl(Xa,e)}toString(){return Ml(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new class extends Yl{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Ja(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Gl.MIN}maxPost(){return Gl.MAX}makePost(e,t){const n=Cc(e);return new Gl(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(e){return{type:"value",snapshotNode:e}}function Tc(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ic(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function kc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sc{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){rs(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Ic(t,o)):rs(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Tc(t,n)):s.trackChildChange(kc(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(uc,((e,i)=>{t.hasChild(e)||n.trackChildChange(Ic(e,i))})),t.isLeafNode()||t.forEachChild(uc,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(kc(t,i,r))}else n.trackChildChange(Tc(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?vc.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this.indexedFilter_=new Sc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=xc.getStartPost_(e),this.endPost_=xc.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,r,s){return this.matches(new Gl(t,n))||(n=vc.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=vc.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(vc.EMPTY_NODE);const r=this;return t.forEachChild(uc,((e,t)=>{r.matches(new Gl(e,t))||(i=i.updateImmediateChild(e,vc.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e){this.rangedFilter_=new xc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new Gl(t,n))||(n=vc.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=vc.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=vc.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let r;if(r=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!r)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,r,s;if(i=t.withIndex(this.index_),i=i.updatePriority(vc.EMPTY_NODE),this.reverse_){s=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();r=(e,n)=>t(n,e)}else s=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),r=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&r(e,t)<=0&&(a=!0);a&&o<this.limit_&&r(t,n)<=0?o++:i=i.updateImmediateChild(t.name,vc.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;rs(o.numChildren()===this.limit_,"");const a=new Gl(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:s(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=r&&r.trackChildChange(kc(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Ic(t,e));const n=o.updateImmediateChild(t,vc.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=r&&r.trackChildChange(Tc(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=r&&(r.trackChildChange(Ic(l.name,l.node)),r.trackChildChange(Tc(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,vc.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=uc}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return rs(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return rs(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Qa}hasEnd(){return this.endSet_}getIndexEndValue(){return rs(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return rs(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Xa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return rs(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===uc}copy(){const e=new Nc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rc(e){const t={};if(e.isDefault())return t;let n;return e.index_===uc?n="$priority":e.index_===wc?n="$value":e.index_===Xl?n="$key":(rs(e.index_ instanceof bc,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=ys(n),e.startSet_&&(t.startAt=ys(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+ys(e.indexStartName_))),e.endSet_&&(t.endAt=ys(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+ys(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Oc(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==uc&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac extends kl{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=za("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(rs(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Ac.getListenId_(e,n),o={};this.listens_[s]=o;const a=Rc(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),ws(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Ac.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Rc(e._queryParams),n=e._path.toString(),i=new hs;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},i=0,r=Object.entries(e);i<r.length;i++){var s=r[i];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=vs(o.responseText)}catch(e){Ya("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&Ya("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(){this.rootNode_=vc.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(){return{value:null,children:new Map}}function Fc(e,t,n){if(ql(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Rl(t);e.children.has(i)||e.children.set(i,Mc());Fc(e.children.get(i),t=Al(t),n)}}function Lc(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{Lc(i,new Pl(t.toString()+"/"+e),n)}))}class qc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&il(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new qc(e);const n=1e4+2e4*Math.random();ll(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;il(e,((e,i)=>{i>0&&bs(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),ll(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Uc,Wc;function Vc(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Wc=Uc||(Uc={}))[Wc.OVERWRITE=0]="OVERWRITE",Wc[Wc.MERGE=1]="MERGE",Wc[Wc.ACK_USER_WRITE=2]="ACK_USER_WRITE",Wc[Wc.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Bc{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Uc.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(ql(this.path)){if(null!=this.affectedTree.value)return rs(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Pl(e));return new Bc(Nl(),t,this.revert)}}return rs(Rl(this.path)===e,"operationForChild called for unrelated child."),new Bc(Al(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,t){this.source=e,this.path=t,this.type=Uc.LISTEN_COMPLETE}operationForChild(e){return ql(this.path)?new Hc(this.source,Nl()):new Hc(this.source,Al(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Uc.OVERWRITE}operationForChild(e){return ql(this.path)?new zc(this.source,Nl(),this.snap.getImmediateChild(e)):new zc(this.source,Al(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Uc.MERGE}operationForChild(e){if(ql(this.path)){const t=this.children.subtree(new Pl(e));return t.isEmpty()?null:t.value?new zc(this.source,Nl(),t.value):new $c(this.source,Nl(),t)}return rs(Rl(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $c(this.source,Al(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ql(e))return this.isFullyInitialized()&&!this.filtered_;const t=Rl(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Kc(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw ss("Should only compare child_ events.");const i=new Gl(t.childName,t.snapshotNode),r=new Gl(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function Qc(e,t){return{eventCache:e,serverCache:t}}function Xc(e,t,n,i){return Qc(new Gc(t,n,i),e.serverCache)}function Jc(e,t,n,i){return Qc(e.eventCache,new Gc(t,n,i))}function Zc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function eu(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu;class nu{constructor(e,t=(()=>(tu||(tu=new ec(Za)),tu))()){this.value=e,this.children=t}static fromObject(e){let t=new nu(null);return il(e,((e,n)=>{t=t.set(new Pl(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Nl(),value:this.value};if(ql(e))return null;{const n=Rl(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(Al(e),t);if(null!=r){return{path:Ll(new Pl(n),r.path),value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(ql(e))return this;{const t=Rl(e),n=this.children.get(t);return null!==n?n.subtree(Al(e)):new nu(null)}}set(e,t){if(ql(e))return new nu(t,this.children);{const n=Rl(e),i=(this.children.get(n)||new nu(null)).set(Al(e),t),r=this.children.insert(n,i);return new nu(this.value,r)}}remove(e){if(ql(e))return this.children.isEmpty()?new nu(null):new nu(null,this.children);{const t=Rl(e),n=this.children.get(t);if(n){const i=n.remove(Al(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new nu(null):new nu(this.value,r)}return this}}get(e){if(ql(e))return this.value;{const t=Rl(e),n=this.children.get(t);return n?n.get(Al(e)):null}}setTree(e,t){if(ql(e))return t;{const n=Rl(e),i=(this.children.get(n)||new nu(null)).setTree(Al(e),t);let r;return r=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new nu(this.value,r)}}fold(e){return this.fold_(Nl(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(Ll(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Nl(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(ql(e))return null;{const i=Rl(e),r=this.children.get(i);return r?r.findOnPath_(Al(e),Ll(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Nl(),t)}foreachOnPath_(e,t,n){if(ql(e))return this;{this.value&&n(t,this.value);const i=Rl(e),r=this.children.get(i);return r?r.foreachOnPath_(Al(e),Ll(t,i),n):new nu(null)}}foreach(e){this.foreach_(Nl(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Ll(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this.writeTree_=e}static empty(){return new iu(new nu(null))}}function ru(e,t,n){if(ql(t))return new iu(new nu(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=jl(r,t);return s=s.updateChild(o,n),new iu(e.writeTree_.set(r,s))}{const i=new nu(n),r=e.writeTree_.setTree(t,i);return new iu(r)}}}function su(e,t,n){let i=e;return il(n,((e,n)=>{i=ru(i,Ll(t,e),n)})),i}function ou(e,t){if(ql(t))return iu.empty();{const n=e.writeTree_.setTree(t,new nu(null));return new iu(n)}}function au(e,t){return null!=lu(e,t)}function lu(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(jl(n.path,t)):null}function cu(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(uc,((e,n)=>{t.push(new Gl(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Gl(e,n.value))})),t}function uu(e,t){if(ql(t))return e;{const n=lu(e,t);return new iu(null!=n?new nu(n):e.writeTree_.subtree(t))}}function hu(e){return e.writeTree_.isEmpty()}function du(e,t){return pu(Nl(),e.writeTree_,t)}function pu(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(rs(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=pu(Ll(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Ll(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(e,t){return Su(t,e)}function _u(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));rs(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;for(;r&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&mu(t,i.path)?r=!1:Wl(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return function(e){e.visibleWrites=vu(e.allWrites,gu,Nl()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=ou(e.visibleWrites,i.path);else{il(i.children,(t=>{e.visibleWrites=ou(e.visibleWrites,Ll(i.path,t))}))}return!0}return!1}function mu(e,t){if(e.snap)return Wl(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Wl(Ll(e.path,n),t))return!0;return!1}function gu(e){return e.visible}function vu(e,t,n){let i=iu.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Wl(n,e)?(t=jl(n,e),i=ru(i,t,s.snap)):Wl(e,n)&&(t=jl(e,n),i=ru(i,Nl(),s.snap.getChild(t)));else{if(!s.children)throw ss("WriteRecord should have .snap or .children");if(Wl(n,e))t=jl(n,e),i=su(i,t,s.children);else if(Wl(e,n))if(t=jl(e,n),ql(t))i=su(i,Nl(),s.children);else{const e=ws(s.children,Rl(t));if(e){const n=e.getChild(Al(t));i=ru(i,Nl(),n)}}}}}return i}function yu(e,t,n,i,r){if(i||r){const s=uu(e.visibleWrites,t);if(!r&&hu(s))return n;if(r||null!=n||au(s,Nl())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Wl(e.path,t)||Wl(t,e.path))};return du(vu(e.allWrites,s,t),n||vc.EMPTY_NODE)}return null}{const i=lu(e.visibleWrites,t);if(null!=i)return i;{const i=uu(e.visibleWrites,t);if(hu(i))return n;if(null!=n||au(i,Nl())){return du(i,n||vc.EMPTY_NODE)}return null}}}function Cu(e,t,n,i){return yu(e.writeTree,e.treePath,t,n,i)}function bu(e,t){return function(e,t,n){let i=vc.EMPTY_NODE;const r=lu(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(uc,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=uu(e.visibleWrites,t);return n.forEachChild(uc,((e,t)=>{const n=du(uu(r,new Pl(e)),t);i=i.updateImmediateChild(e,n)})),cu(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return cu(uu(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function wu(e,t,n,i){return function(e,t,n,i,r){rs(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=Ll(t,n);if(au(e.visibleWrites,s))return null;{const t=uu(e.visibleWrites,s);return hu(t)?r.getChild(n):du(t,r.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function Eu(e,t){return function(e,t){return lu(e.visibleWrites,t)}(e.writeTree,Ll(e.treePath,t))}function Tu(e,t,n,i,r,s){return function(e,t,n,i,r,s,o){let a;const l=uu(e.visibleWrites,t),c=lu(l,Nl());if(null!=c)a=c;else{if(null==n)return[];a=du(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<r;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,r,s)}function Iu(e,t,n){return function(e,t,n,i){const r=Ll(t,n),s=lu(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n))return du(uu(e.visibleWrites,r),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function ku(e,t){return Su(Ll(e.treePath,t),e.writeTree)}function Su(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;rs("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),rs(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,kc(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Ic(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Tc(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw ss("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,kc(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Nu{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Gc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Iu(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:eu(this.viewCache_),r=Tu(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(e,t,n,i,r){const s=new xu;let o,a;if(n.type===Uc.OVERWRITE){const l=n;l.source.fromUser?o=Du(e,t,l.path,l.snap,i,r,s):(rs(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!ql(l.path),o=Au(e,t,l.path,l.snap,i,r,a,s))}else if(n.type===Uc.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,l)=>{const c=Ll(n,i);Mu(t,Rl(c))&&(a=Du(e,a,c,l,r,s,o))})),i.foreach(((i,l)=>{const c=Ll(n,i);Mu(t,Rl(c))||(a=Du(e,a,c,l,r,s,o))})),a}(e,t,l.path,l.children,i,r,s):(rs(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Lu(e,t,l.path,l.children,i,r,a,s))}else if(n.type===Uc.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,r,s){let o;if(null!=Eu(i,n))return t;{const a=new Nu(i,t,r),l=t.eventCache.getNode();let c;if(ql(n)||".priority"===Rl(n)){let n;if(t.serverCache.isFullyInitialized())n=Cu(i,eu(t));else{const e=t.serverCache.getNode();rs(e instanceof vc,"serverChildren would be complete if leaf node"),n=bu(i,e)}n=n,c=e.filter.updateFullNode(l,n,s)}else{const r=Rl(n);let u=Iu(i,r,t.serverCache);null==u&&t.serverCache.isCompleteForChild(r)&&(u=l.getImmediateChild(r)),c=null!=u?e.filter.updateChild(l,r,u,Al(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(l,r,vc.EMPTY_NODE,Al(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Cu(i,eu(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Eu(i,Nl()),Xc(t,c,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,a.path,i,r,s):function(e,t,n,i,r,s,o){if(null!=Eu(r,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(ql(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Au(e,t,n,l.getNode().getChild(n),r,s,a,o);if(ql(n)){let i=new nu(null);return l.getNode().forEachChild(Xl,((e,t)=>{i=i.set(new Pl(e),t)})),Lu(e,t,n,i,r,s,a,o)}return t}{let c=new nu(null);return i.foreach(((e,t)=>{const i=Ll(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),Lu(e,t,n,c,r,s,a,o)}}(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Uc.LISTEN_COMPLETE)throw ss("Unknown operation type: "+n.type);o=function(e,t,n,i,r){const s=t.serverCache,o=Jc(t,s.getNode(),s.isFullyInitialized()||ql(n),s.isFiltered());return Ou(e,o,n,i,Pu,r)}(e,t,n.path,i,s)}const l=s.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=Zc(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(Ec(Zc(t)))}}(t,o,l),{viewCache:o,changes:l}}function Ou(e,t,n,i,r,s){const o=t.eventCache;if(null!=Eu(i,n))return t;{let a,l;if(ql(n))if(rs(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=eu(t),r=bu(i,n instanceof vc?n:vc.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),r,s)}else{const n=Cu(i,eu(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Rl(n);if(".priority"===c){rs(1===Ol(n),"Can't have a priority with additional path components");const r=o.getNode();l=t.serverCache.getNode();const s=wu(i,n,r,l);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const u=Al(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=wu(i,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=Iu(i,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,r,s):o.getNode()}}return Xc(t,a,o.isFullyInitialized()||ql(n),e.filter.filtersNodes())}}function Au(e,t,n,i,r,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(ql(n))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Rl(n);if(!l.isCompleteForPath(n)&&Ol(n)>1)return t;const r=Al(n),s=l.getNode().getImmediateChild(e).updateChild(r,i);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,r,Pu,null)}const h=Jc(t,c,l.isFullyInitialized()||ql(n),u.filtersNodes());return Ou(e,h,n,r,new Nu(r,h,s),a)}function Du(e,t,n,i,r,s,o){const a=t.eventCache;let l,c;const u=new Nu(r,t,s);if(ql(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Xc(t,c,!0,e.filter.filtersNodes());else{const r=Rl(n);if(".priority"===r)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=Xc(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=Al(n),c=a.getNode().getImmediateChild(r);let h;if(ql(s))h=i;else{const e=u.getCompleteChild(r);h=null!=e?".priority"===Dl(s)&&e.getChild(Fl(s)).isEmpty()?e:e.updateChild(s,i):vc.EMPTY_NODE}if(c.equals(h))l=t;else{l=Xc(t,e.filter.updateChild(a.getNode(),r,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Mu(e,t){return e.eventCache.isCompleteForChild(t)}function Fu(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Lu(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=ql(n)?i:new nu(null).setTree(n,i);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(u.hasChild(n)){const l=Fu(0,t.serverCache.getNode().getImmediateChild(n),i);c=Au(e,c,new Pl(n),l,r,s,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!u.hasChild(n)&&!l){const l=Fu(0,t.serverCache.getNode().getImmediateChild(n),i);c=Au(e,c,new Pl(n),l,r,s,o,a)}})),c}class qu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Sc(n.getIndex()),r=(s=n).loadsAllData()?new Sc(s.getIndex()):s.hasLimit()?new Pc(s):new xc(s);var s;this.processor_=function(e){return{filter:e}}(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(vc.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(vc.EMPTY_NODE,a.getNode(),null),u=new Gc(l,o.isFullyInitialized(),i.filtersNodes()),h=new Gc(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Qc(h,u),this.eventGenerator_=new Yc(this.query_)}get query(){return this.query_}}function ju(e,t){const n=eu(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!ql(t)&&!n.getImmediateChild(Rl(t)).isEmpty())?n.getChild(t):null}function Uu(e){return 0===e.eventRegistrations_.length}function Wu(e,t,n){const i=[];if(n){rs(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function Vu(e,t,n,i){t.type===Uc.MERGE&&null!==t.source.queryId&&(rs(eu(e.viewCache_),"We should always have a full cache before handling merges"),rs(Zc(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=Ru(e.processor_,r,t,n,i);var o,a;return o=e.processor_,a=s.viewCache,rs(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),rs(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),rs(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Bu(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Bu(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const r=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Kc(e,r,"child_removed",t,i,n),Kc(e,r,"child_added",t,i,n),Kc(e,r,"child_moved",s,i,n),Kc(e,r,"child_changed",t,i,n),Kc(e,r,"value",t,i,n),r}(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hu,zu;class $u{constructor(){this.views=new Map}}function Gu(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return rs(null!=s,"SyncTree gave us an op for an invalid query."),Vu(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(Vu(s,t,n,i));return r}}function Yu(e,t,n,i,r,s){const o=function(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=Cu(n,r?i:null),s=!1;e?s=!0:i instanceof vc?(e=bu(n,i),s=!1):(e=vc.EMPTY_NODE,s=!1);const o=Qc(new Gc(e,s,!1),new Gc(i,r,!1));return new qu(t,o)}return o}(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(uc,((e,t)=>{i.push(Tc(e,t))}));return n.isFullyInitialized()&&i.push(Ec(n.getNode())),Bu(e,i,n.getNode(),t)}(o,n)}function Ku(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=eh(e);if("default"===r)for(const[l,c]of e.views.entries())o=o.concat(Wu(c,n,i)),Uu(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(r);t&&(o=o.concat(Wu(t,n,i)),Uu(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!eh(e)&&s.push(new(rs(Hu,"Reference.ts has not been loaded"),Hu)(t._repo,t._path)),{removed:s,events:o}}function Qu(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Xu(e,t){let n=null;for(const i of e.views.values())n=n||ju(i,t);return n}function Ju(e,t){if(t._queryParams.loadsAllData())return th(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Zu(e,t){return null!=Ju(e,t)}function eh(e){return null!=th(e)}function th(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nh=1;class ih{constructor(e){this.listenProvider_=e,this.syncPointTree_=new nu(null),this.pendingWriteTree_={visibleWrites:iu.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rh(e,t,n,i,r){return function(e,t,n,i,r){rs(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=ru(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,r),r?uh(e,new zc({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function sh(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(_u(e.pendingWriteTree_,t)){let t=new nu(null);return null!=i.snap?t=t.set(Nl(),!0):il(i.children,(e=>{t=t.set(new Pl(e),!0)})),uh(e,new Bc(i.path,t,n))}return[]}function oh(e,t,n){return uh(e,new zc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function ah(e,t,n,i){const r=t._path,s=e.syncPointTree_.get(r);let o=[];if(s&&("default"===t._queryIdentifier||Zu(s,t))){const a=Ku(s,t,n,i);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const l=a.removed;o=a.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(r,((e,t)=>eh(t)));if(c&&!u){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&eh(t)){return[th(t)]}{let e=[];return t&&(e=Qu(t)),il(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=ph(e,i);e.listenProvider_.startListening(yh(r),fh(e,r),s.hashFn,s.onComplete)}}}if(!u&&l.length>0&&!i)if(c){const n=null;e.listenProvider_.stopListening(yh(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(_h(t));e.listenProvider_.stopListening(yh(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=_h(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return o}function lh(e,t,n){const i=t._path;let r=null,s=!1;e.syncPointTree_.foreachOnPath(i,((e,t)=>{const n=jl(e,i);r=r||Xu(t,n),s=s||eh(t)}));let o,a=e.syncPointTree_.get(i);if(a?(s=s||eh(a),r=r||Xu(a,Nl())):(a=new $u,e.syncPointTree_=e.syncPointTree_.set(i,a)),null!=r)o=!0;else{o=!1,r=vc.EMPTY_NODE;e.syncPointTree_.subtree(i).foreachChild(((e,t)=>{const n=Xu(t,Nl());n&&(r=r.updateImmediateChild(e,n))}))}const l=Zu(a,t);if(!l&&!t._queryParams.loadsAllData()){const n=_h(t);rs(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=nh++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let c=Yu(a,t,n,fu(e.pendingWriteTree_,i),r,o);if(!l&&!s){const n=Ju(a,t);c=c.concat(function(e,t,n){const i=t._path,r=fh(e,t),s=ph(e,n),o=e.listenProvider_.startListening(yh(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)rs(!eh(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!ql(e)&&t&&eh(t))return[th(t).query];{let e=[];return t&&(e=e.concat(Qu(t).map((e=>e.query)))),il(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(yh(i),fh(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return c}function ch(e,t,n){const i=e.pendingWriteTree_,r=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Xu(n,jl(e,t));if(i)return i}));return yu(i,t,r,n,!0)}function uh(e,t){return hh(t,e.syncPointTree_,null,fu(e.pendingWriteTree_,Nl()))}function hh(e,t,n,i){if(ql(e.path))return dh(e,t,n,i);{const r=t.get(Nl());null==n&&null!=r&&(n=Xu(r,Nl()));let s=[];const o=Rl(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=ku(i,o);s=s.concat(hh(a,l,e,t))}return r&&(s=s.concat(Gu(r,e,i,n))),s}}function dh(e,t,n,i){const r=t.get(Nl());null==n&&null!=r&&(n=Xu(r,Nl()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=ku(i,t),l=e.operationForChild(t);l&&(s=s.concat(dh(l,r,o,a)))})),r&&(s=s.concat(Gu(r,e,i,n))),s}function ph(e,t){const n=t.query,i=fh(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||vc.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=mh(e,n);if(i){const n=gh(i),r=n.path,s=n.queryId,o=jl(r,t);return vh(e,r,new Hc(Vc(s),o))}return[]}(e,n._path,i):function(e,t){return uh(e,new Hc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return ah(e,n,null,i)}}}}function fh(e,t){const n=_h(t);return e.queryToTagMap.get(n)}function _h(e){return e._path.toString()+"$"+e._queryIdentifier}function mh(e,t){return e.tagToQueryMap.get(t)}function gh(e){const t=e.indexOf("$");return rs(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Pl(e.substr(0,t))}}function vh(e,t,n){const i=e.syncPointTree_.get(t);rs(i,"Missing sync point for query tag that we're tracking");return Gu(i,n,fu(e.pendingWriteTree_,t),null)}function yh(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(rs(zu,"Reference.ts has not been loaded"),zu)(e._repo,e._path):e}class Ch{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ch(t)}node(){return this.node_}}class bh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ll(this.path_,e);return new bh(this.syncTree_,t)}node(){return ch(this.syncTree_,this.path_)}}const wh=function(e,t,n){return e&&"object"==typeof e?(rs(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Eh(e[".sv"],t,n):"object"==typeof e[".sv"]?Th(e[".sv"],t):void rs(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Eh=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:rs(!1,"Unexpected server value: "+e)}},Th=function(e,t,n){e.hasOwnProperty("increment")||rs(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&rs(!1,"Unexpected increment value: "+i);const r=t.node();if(rs(null!=r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r.getValue();return"number"!=typeof s?i:s+i},Ih=function(e,t,n){return kh(e,new Ch(t),n)};function kh(e,t,n){const i=e.getPriority().val(),r=wh(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=wh(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new cc(s,Cc(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new cc(r))),i.forEachChild(uc,((e,i)=>{const r=kh(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function xh(e,t){let n=t instanceof Pl?t:new Pl(t),i=e,r=Rl(n);for(;null!==r;){const e=ws(i.node.children,r)||{children:{},childCount:0};i=new Sh(r,i,e),n=Al(n),r=Rl(n)}return i}function Ph(e){return e.node.value}function Nh(e,t){e.node.value=t,Mh(e)}function Rh(e){return e.node.childCount>0}function Oh(e,t){il(e.node.children,((n,i)=>{t(new Sh(n,e,i))}))}function Ah(e,t,n,i){n&&!i&&t(e),Oh(e,(e=>{Ah(e,t,!0,i)})),n&&i&&t(e)}function Dh(e){return new Pl(null===e.parent?e.name:Dh(e.parent)+"/"+e.name)}function Mh(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Ph(e)&&!Rh(e)}(n),r=bs(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Mh(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Mh(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Fh=/[\[\].#$\/\u0000-\u001F\u007F]/,Lh=/[\[\].#$\u0000-\u001F\u007F]/,qh=function(e){return"string"==typeof e&&0!==e.length&&!Fh.test(e)},jh=function(e){return"string"==typeof e&&0!==e.length&&!Lh.test(e)},Uh=function(e,t,n){const i=n instanceof Pl?new Vl(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Hl(i));if("function"==typeof t)throw new Error(e+"contains a function "+Hl(i)+" with contents = "+t.toString());if(Ka(t))throw new Error(e+"contains "+t.toString()+" "+Hl(i));if("string"==typeof t&&t.length>10485760/3&&Ps(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Hl(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,r=!1;if(il(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!qh(t)))throw new Error(e+" contains an invalid key ("+t+") "+Hl(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=i).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Ps(a),Bl(o),Uh(e,s,i),function(e){const t=e.parts_.pop();e.byteLength_-=Ps(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&r)throw new Error(e+' contains ".value" child '+Hl(i)+" in addition to actual children.")}},Wh=function(e,t,n,i){if(!(i&&void 0===n||jh(n)))throw new Error(xs(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Vh=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!qh(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),jh(e)}(n))throw new Error(xs(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Hh(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||Ul(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function zh(e,t,n){Hh(e,n),Gh(e,(e=>Ul(e,t)))}function $h(e,t,n){Hh(e,n),Gh(e,(e=>Wl(e,t)||Wl(t,e)))}function Gh(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){t(r.path)?(Yh(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Yh(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();Va&&Ha("event: "+n.toString()),al(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Bh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Mc(),this.transactionQueueTree_=new Sh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Qh(e,t,n){if(e.stats_=vl(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ac(e.repoInfo_,((t,n,i,r)=>{Zh(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>ed(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ys(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new $l(e.repoInfo_,t,((t,n,i,r)=>{Zh(e,t,n,i,r)}),(t=>{ed(e,t)}),(t=>{!function(e,t){il(t,((t,n)=>{td(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return gl[n]||(gl[n]=t()),gl[n]}(e.repoInfo_,(()=>new jc(e.stats_,e.server_))),e.infoData_=new Dc,e.infoSyncTree_=new ih({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=oh(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),td(e,"connected",!1),e.serverSyncTree_=new ih({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);$h(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Xh(e){const t=e.infoData_.getNode(new Pl(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Jh(e){return(t=(t={timestamp:Xh(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Zh(e,t,n,i,r){e.dataUpdateCount++;const s=new Pl(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=Ts(n,(e=>Cc(e)));o=function(e,t,n,i){const r=mh(e,i);if(r){const i=gh(r),s=i.path,o=i.queryId,a=jl(s,t),l=nu.fromObject(n);return vh(e,s,new $c(Vc(o),a,l))}return[]}(e.serverSyncTree_,s,t,r)}else{const t=Cc(n);o=function(e,t,n,i){const r=mh(e,i);if(null!=r){const i=gh(r),s=i.path,o=i.queryId,a=jl(s,t);return vh(e,s,new zc(Vc(o),a,n))}return[]}(e.serverSyncTree_,s,t,r)}else if(i){const t=Ts(n,(e=>Cc(e)));o=function(e,t,n){const i=nu.fromObject(n);return uh(e,new $c({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,s,t)}else{const t=Cc(n);o=oh(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=ld(e,s)),$h(e.eventQueue_,a,o)}function ed(e,t){td(e,"connected",t),!1===t&&function(e){sd(e,"onDisconnectEvents");const t=Jh(e),n=Mc();Lc(e.onDisconnect_,Nl(),((i,r)=>{const s=function(e,t,n,i){return kh(t,new bh(n,e),i)}(i,r,e.serverSyncTree_,t);Fc(n,i,s)}));let i=[];Lc(n,Nl(),((t,n)=>{i=i.concat(oh(e.serverSyncTree_,t,n));const r=pd(e,t);ld(e,r)})),e.onDisconnect_=Mc(),$h(e.eventQueue_,Nl(),i)}(e)}function td(e,t,n){const i=new Pl("/.info/"+t),r=Cc(n);e.infoData_.updateSnapshot(i,r);const s=oh(e.infoSyncTree_,i,r);$h(e.eventQueue_,i,s)}function nd(e){return e.nextWriteId_++}function id(e,t,n,i,r){sd(e,"set",{path:t.toString(),value:n,priority:i});const s=Jh(e),o=Cc(n,i),a=ch(e.serverSyncTree_,t),l=Ih(o,a,s),c=nd(e),u=rh(e.serverSyncTree_,t,l,c,!0);Hh(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||Ya("set at "+t+" failed: "+n);const o=sh(e.serverSyncTree_,c,!s);$h(e.eventQueue_,t,o),function(e,t,n,i){t&&al((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}(0,r,n,i)}));const h=pd(e,t);ld(e,h),$h(e.eventQueue_,h,[])}function rd(e,t,n){let i;i=".info"===Rl(t._path)?ah(e.infoSyncTree_,t,n):ah(e.serverSyncTree_,t,n),zh(e.eventQueue_,t._path,i)}function sd(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ha(n,...t)}function od(e,t,n){return ch(e.serverSyncTree_,t,n)||vc.EMPTY_NODE}function ad(e,t=e.transactionQueueTree_){if(t||dd(e,t),Ph(t)){const n=ud(e,t);rs(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),r=od(e,t,i);let s=r;const o=r.hash();for(let c=0;c<n.length;c++){const e=n[c];rs(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=jl(t,e.path);s=s.updateChild(i,e.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{sd(e,"transaction put response",{path:l.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(sh(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();dd(e,xh(e.transactionQueueTree_,t)),ad(e,e.transactionQueueTree_),$h(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)al(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Ya("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}ld(e,t)}}),o)}(e,Dh(t),n)}else Rh(t)&&Oh(t,(t=>{ad(e,t)}))}function ld(e,t){const n=cd(e,t),i=Dh(n);return function(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=jl(n,l.path);let u,h=!1;if(rs(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,r=r.concat(sh(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",r=r.concat(sh(e.serverSyncTree_,l.currentWriteId,!0));else{const n=od(e,l.path,s);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){Uh("transaction failed: Data returned ",i,l.path);let t=Cc(i);"object"==typeof i&&null!=i&&bs(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=Jh(e),c=Ih(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=nd(e),s.splice(s.indexOf(o),1),r=r.concat(rh(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),r=r.concat(sh(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",r=r.concat(sh(e.serverSyncTree_,l.currentWriteId,!0))}$h(e.eventQueue_,n,r),r=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;dd(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)al(i[a]);ad(e,e.transactionQueueTree_)}(e,ud(e,n),i),i}function cd(e,t){let n,i=e.transactionQueueTree_;for(n=Rl(t);null!==n&&void 0===Ph(i);)i=xh(i,n),n=Rl(t=Al(t));return i}function ud(e,t){const n=[];return hd(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function hd(e,t,n){const i=Ph(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);Oh(t,(t=>{hd(e,t,n)}))}function dd(e,t){const n=Ph(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Nh(t,n.length>0?n:void 0)}Oh(t,(t=>{dd(e,t)}))}function pd(e,t){const n=Dh(cd(e,t)),i=xh(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{fd(e,t)})),fd(e,i),Ah(i,(t=>{fd(e,t)})),n}function fd(e,t){const n=Ph(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(rs(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(rs(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(sh(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Nh(t,void 0):n.length=s+1,$h(e.eventQueue_,Dh(t),r);for(let e=0;e<i.length;e++)al(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d=function(e,t){const n=md(e),i=n.namespace;"firebase.com"===n.domain&&Ga(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Ga("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ya("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new pl(n.host,n.secure,i,t,r,"",i!==n.subdomain),path:new Pl(n.pathString)}},md=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(r=function(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Ya(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gd{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ys(this.snapshot.exportVal())}}class vd{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return rs(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return ql(this._path)?null:Dl(this._path)}get ref(){return new bd(this._repo,this._path)}get _queryIdentifier(){const e=Oc(this._queryParams),t=tl(e);return"{}"===t?"default":t}get _queryObject(){return Oc(this._queryParams)}isEqual(e){if(!((e=Ns(e))instanceof Cd))return!1;const t=this._repo===e._repo,n=Ul(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class bd extends Cd{constructor(e,t){super(e,t,new Nc,!1)}get parent(){const e=Fl(this._path);return null===e?null:new bd(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class wd{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Pl(e),n=Td(this.ref,e);return new wd(this._node.getChild(t),n,uc)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new wd(n,Td(this.ref,t),uc))))}hasChild(e){const t=new Pl(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ed(e,t){return(e=Ns(e))._checkNotDeleted("ref"),void 0!==t?Td(e._root,t):e._root}function Td(e,t){var n,i,r,s;return null===Rl((e=Ns(e))._path)?(n="child",i="path",s=!1,(r=t)&&(r=r.replace(/^\/*\.info(\/|$)/,"/")),Wh(n,i,r,s)):Wh("child","path",t,!1),new bd(e._repo,Ll(e._path,t))}function Id(e,t){(function(e,t){if(".info"===Rl(t))throw new Error(e+" failed = Can't modify data under /.info/")})("set",(e=Ns(e))._path),function(e,t,n,i){i&&void 0===t||Uh(xs(e,"value"),t,n)}("set",t,e._path,!1);const n=new hs;return id(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class kd{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new gd("value",this,new wd(e.snapshotNode,new bd(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new vd(this,e,t):null}matches(e){return e instanceof kd&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Sd{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new vd(this,e,t):null}createEvent(e,t){rs(null!=e.childName,"Child events should have a childName.");const n=Td(new bd(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new gd(e.type,this,new wd(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Sd&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function xd(e,t,n,i,r){let s;if("object"==typeof i&&(s=void 0,r=i),"function"==typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{rd(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new yd(n,s||void 0),a="value"===t?new kd(o):new Sd(t,o);return function(e,t,n){let i;i=".info"===Rl(t._path)?lh(e.infoSyncTree_,t,n):lh(e.serverSyncTree_,t,n),zh(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>rd(e._repo,e,a)}function Pd(e,t,n,i){return xd(e,"value",t,n,i)}!function(e){rs(!Hu,"__referenceConstructor has already been defined"),Hu=e}(bd),function(e){rs(!zu,"__referenceConstructor has already been defined"),zu=e}(bd);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Nd={};function Rd(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||Ga("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ha("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=_d(s,r),c=l.repoInfo;"undefined"!=typeof process&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=_d(s,r),c=l.repoInfo):o=!l.repoInfo.secure;const u=r&&o?new hl(hl.OWNER):new ul(e.name,e.options,t);Vh("Invalid Firebase Database URL",l),ql(l.path)||Ga("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,i){let r=Nd[t.name];r||(r={},Nd[t.name]=r);let s=r[e.toURLString()];s&&Ga("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Kh(e,false,n,i),r[e.toURLString()]=s,s}(c,e,u,new cl(e.name,n));return new Od(h,e)}class Od{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Qh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new bd(this._repo,Nl())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Nd[t];n&&n[e.key]===e||Ga(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Ga("Cannot call "+e+" on a deleted database.")}}function Ad(e=function(e="[DEFAULT]"){const t=$s.get(e);if(!t)throw Qs.create("no-app",{appName:e});return t}(),t){return function(e,t){return e.container.getProvider(t)}(e,"database").getImmediate({identifier:t})}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$l.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},$l.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){Oa="9.0.0",Ks(new Rs("database",((e,{instanceIdentifier:t})=>Rd(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Zs("@firebase/database","0.12.0",e)}();export{Vn as F,Ed as a,Pd as b,Zn as c,Jn as d,si as e,di as f,Ad as g,li as h,oi as i,Na as j,Do as k,Gr as l,Js as m,Tr as n,Yn as o,jn as r,Id as s,l as t,kt as w};
