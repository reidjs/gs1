function e(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function n(e){return!!e||""===e}function r(e){if(I(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=P(i)?o(i):r(i);if(s)for(const e in s)t[e]=s[e]}return t}return P(e)||N(e)?e:void 0}const i=/;(?![^(]*\))/g,s=/:(.+)/;function o(e){const t={};return e.split(i).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(P(e))t=e;else if(I(e))for(let n=0;n<e.length;n++){const r=a(e[n]);r&&(t+=r+" ")}else if(N(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function l(e,t){if(e===t)return!0;let n=k(e),r=k(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=I(e),r=I(t),n||r)return!(!n||!r)&&function(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=l(e[r],t[r]);return n}(e,t);if(n=N(e),r=N(t),n||r){if(!n||!r)return!1;if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!l(e[n],t[n]))return!1}}return String(e)===String(t)}function c(e,t){return e.findIndex((e=>l(e,t)))}const u=e=>null==e?"":I(e)||N(e)&&(e.toString===x||!S(e.toString))?JSON.stringify(e,h,2):String(e),h=(e,t)=>t&&t.__v_isRef?h(e,t.value):E(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:T(t)?{[`Set(${t.size})`]:[...t.values()]}:!N(t)||I(t)||D(t)?t:String(t),d={},p=[],f=()=>{},m=()=>!1,g=/^on[^a-z]/,_=e=>g.test(e),v=e=>e.startsWith("onUpdate:"),y=Object.assign,w=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},b=Object.prototype.hasOwnProperty,C=(e,t)=>b.call(e,t),I=Array.isArray,E=e=>"[object Map]"===A(e),T=e=>"[object Set]"===A(e),k=e=>e instanceof Date,S=e=>"function"==typeof e,P=e=>"string"==typeof e,R=e=>"symbol"==typeof e,N=e=>null!==e&&"object"==typeof e,O=e=>N(e)&&S(e.then)&&S(e.catch),x=Object.prototype.toString,A=e=>x.call(e),D=e=>"[object Object]"===A(e),L=e=>P(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,M=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),F=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},U=/-(\w)/g,j=F((e=>e.replace(U,((e,t)=>t?t.toUpperCase():"")))),q=/\B([A-Z])/g,B=F((e=>e.replace(q,"-$1").toLowerCase())),V=F((e=>e.charAt(0).toUpperCase()+e.slice(1))),W=F((e=>e?`on${V(e)}`:"")),H=(e,t)=>!Object.is(e,t),z=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},$=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},K=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let G;const Y=[];class J{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&G&&(this.parent=G,this.index=(G.scopes||(G.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&(Y.push(this),G=this)}off(){this.active&&(Y.pop(),G=Y[Y.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}const Q=e=>{const t=new Set(e);return t.w=0,t.n=0,t},X=e=>(e.w&ne)>0,Z=e=>(e.n&ne)>0,ee=new WeakMap;let te=0,ne=1;const re=[];let ie;const se=Symbol(""),oe=Symbol("");class ae{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],function(e,t){(t=t||G)&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();if(!re.includes(this))try{return re.push(ie=this),ue.push(ce),ce=!0,ne=1<<++te,te<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=ne})(this):le(this),this.fn()}finally{te<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];X(i)&&!Z(i)?i.delete(e):t[n++]=i,i.w&=~ne,i.n&=~ne}t.length=n}})(this),ne=1<<--te,de(),re.pop();const e=re.length;ie=e>0?re[e-1]:void 0}}stop(){this.active&&(le(this),this.onStop&&this.onStop(),this.active=!1)}}function le(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let ce=!0;const ue=[];function he(){ue.push(ce),ce=!1}function de(){const e=ue.pop();ce=void 0===e||e}function pe(e,t,n){if(!fe())return;let r=ee.get(e);r||ee.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Q()),me(i)}function fe(){return ce&&void 0!==ie}function me(e,t){let n=!1;te<=30?Z(e)||(e.n|=ne,n=!X(e)):n=!e.has(ie),n&&(e.add(ie),ie.deps.push(e))}function ge(e,t,n,r,i,s){const o=ee.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&I(e))o.forEach(((e,t)=>{("length"===t||t>=r)&&a.push(e)}));else switch(void 0!==n&&a.push(o.get(n)),t){case"add":I(e)?L(n)&&a.push(o.get("length")):(a.push(o.get(se)),E(e)&&a.push(o.get(oe)));break;case"delete":I(e)||(a.push(o.get(se)),E(e)&&a.push(o.get(oe)));break;case"set":E(e)&&a.push(o.get(se))}if(1===a.length)a[0]&&_e(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);_e(Q(e))}}function _e(e,t){for(const n of I(e)?e:[...e])(n!==ie||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ve=e("__proto__,__v_isRef,__isVue"),ye=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(R)),we=Te(),be=Te(!1,!0),Ce=Te(!0),Ie=Ee();function Ee(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=ut(this);for(let t=0,i=this.length;t<i;t++)pe(n,0,t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(ut)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){he();const n=ut(this)[t].apply(this,e);return de(),n}})),e}function Te(e=!1,t=!1){return function(n,r,i){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&i===(e?t?nt:tt:t?et:Ze).get(n))return n;const s=I(n);if(!e&&s&&C(Ie,r))return Reflect.get(Ie,r,i);const o=Reflect.get(n,r,i);if(R(r)?ye.has(r):ve(r))return o;if(e||pe(n,0,r),t)return o;if(mt(o)){return!s||!L(r)?o.value:o}return N(o)?e?st(o):it(o):o}}function ke(e=!1){return function(t,n,r,i){let s=t[n];if(!e&&(r=ut(r),s=ut(s),!I(t)&&mt(s)&&!mt(r)))return s.value=r,!0;const o=I(t)&&L(n)?Number(n)<t.length:C(t,n),a=Reflect.set(t,n,r,i);return t===ut(i)&&(o?H(r,s)&&ge(t,"set",n,r):ge(t,"add",n,r)),a}}const Se={get:we,set:ke(),deleteProperty:function(e,t){const n=C(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ge(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return R(t)&&ye.has(t)||pe(e,0,t),n},ownKeys:function(e){return pe(e,0,I(e)?"length":se),Reflect.ownKeys(e)}},Pe={get:Ce,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Re=y({},Se,{get:be,set:ke(!0)}),Ne=e=>N(e)?it(e):e,Oe=e=>N(e)?st(e):e,xe=e=>e,Ae=e=>Reflect.getPrototypeOf(e);function De(e,t,n=!1,r=!1){const i=ut(e=e.__v_raw),s=ut(t);t!==s&&!n&&pe(i,0,t),!n&&pe(i,0,s);const{has:o}=Ae(i),a=r?xe:n?Oe:Ne;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Le(e,t=!1){const n=this.__v_raw,r=ut(n),i=ut(e);return e!==i&&!t&&pe(r,0,e),!t&&pe(r,0,i),e===i?n.has(e):n.has(e)||n.has(i)}function Me(e,t=!1){return e=e.__v_raw,!t&&pe(ut(e),0,se),Reflect.get(e,"size",e)}function Fe(e){e=ut(e);const t=ut(this);return Ae(t).has.call(t,e)||(t.add(e),ge(t,"add",e,e)),this}function Ue(e,t){t=ut(t);const n=ut(this),{has:r,get:i}=Ae(n);let s=r.call(n,e);s||(e=ut(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?H(t,o)&&ge(n,"set",e,t):ge(n,"add",e,t),this}function je(e){const t=ut(this),{has:n,get:r}=Ae(t);let i=n.call(t,e);i||(e=ut(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&ge(t,"delete",e,void 0),s}function qe(){const e=ut(this),t=0!==e.size,n=e.clear();return t&&ge(e,"clear",void 0,void 0),n}function Be(e,t){return function(n,r){const i=this,s=i.__v_raw,o=ut(s),a=t?xe:e?Oe:Ne;return!e&&pe(o,0,se),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function Ve(e,t,n){return function(...r){const i=this.__v_raw,s=ut(i),o=E(s),a="entries"===e||e===Symbol.iterator&&o,l="keys"===e&&o,c=i[e](...r),u=n?xe:t?Oe:Ne;return!t&&pe(s,0,l?oe:se),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return"delete"!==e&&this}}function He(){const e={get(e){return De(this,e)},get size(){return Me(this)},has:Le,add:Fe,set:Ue,delete:je,clear:qe,forEach:Be(!1,!1)},t={get(e){return De(this,e,!1,!0)},get size(){return Me(this)},has:Le,add:Fe,set:Ue,delete:je,clear:qe,forEach:Be(!1,!0)},n={get(e){return De(this,e,!0)},get size(){return Me(this,!0)},has(e){return Le.call(this,e,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:Be(!0,!1)},r={get(e){return De(this,e,!0,!0)},get size(){return Me(this,!0)},has(e){return Le.call(this,e,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:Be(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{e[i]=Ve(i,!1,!1),n[i]=Ve(i,!0,!1),t[i]=Ve(i,!1,!0),r[i]=Ve(i,!0,!0)})),[e,n,t,r]}const[ze,$e,Ke,Ge]=He();function Ye(e,t){const n=t?e?Ge:Ke:e?$e:ze;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(C(n,r)&&r in t?n:t,r,i)}const Je={get:Ye(!1,!1)},Qe={get:Ye(!1,!0)},Xe={get:Ye(!0,!1)},Ze=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=new WeakMap;function rt(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>A(e).slice(8,-1))(e))}function it(e){return e&&e.__v_isReadonly?e:ot(e,!1,Se,Je,Ze)}function st(e){return ot(e,!0,Pe,Xe,tt)}function ot(e,t,n,r,i){if(!N(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=rt(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return i.set(e,a),a}function at(e){return lt(e)?at(e.__v_raw):!(!e||!e.__v_isReactive)}function lt(e){return!(!e||!e.__v_isReadonly)}function ct(e){return at(e)||lt(e)}function ut(e){const t=e&&e.__v_raw;return t?ut(t):e}function ht(e){return $(e,"__v_skip",!0),e}function dt(e){fe()&&((e=ut(e)).dep||(e.dep=Q()),me(e.dep))}function pt(e,t){(e=ut(e)).dep&&_e(e.dep)}const ft=e=>N(e)?it(e):e;function mt(e){return Boolean(e&&!0===e.__v_isRef)}function gt(e){return vt(e,!1)}class _t{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ut(e),this._value=t?e:ft(e)}get value(){return dt(this),this._value}set value(e){e=this._shallow?e:ut(e),H(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:ft(e),pt(this))}}function vt(e,t){return mt(e)?e:new _t(e,t)}function yt(e){return mt(e)?e.value:e}const wt={get:(e,t,n)=>yt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return mt(i)&&!mt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function bt(e){return at(e)?e:new Proxy(e,wt)}class Ct{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new ae(e,(()=>{this._dirty||(this._dirty=!0,pt(this))})),this.__v_isReadonly=n}get value(){const e=ut(this);return dt(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function It(e,t){let n,r;S(e)?(n=e,r=f):(n=e.get,r=e.set);return new Ct(n,r,S(e)||!e.set)}Promise.resolve();function Et(e,t,...n){const r=e.vnode.props||d;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:s}=r[e]||d;s?i=n.map((e=>e.trim())):t&&(i=n.map(K))}let a,l=r[a=W(t)]||r[a=W(j(t))];!l&&s&&(l=r[a=W(B(t))]),l&&Br(l,e,6,i);const c=r[a+"Once"];if(c){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,Br(c,e,6,i)}}function Tt(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!S(e)){const r=e=>{const n=Tt(e,t,!0);n&&(a=!0,y(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(I(s)?s.forEach((e=>o[e]=null)):y(o,s),r.set(e,o),o):(r.set(e,null),null)}function kt(e,t){return!(!e||!_(t))&&(t=t.slice(2).replace(/Once$/,""),C(e,t[0].toLowerCase()+t.slice(1))||C(e,B(t))||C(e,t))}let St=null,Pt=null;function Rt(e){const t=St;return St=e,Pt=e&&e.type.__scopeId||null,t}function Nt(e){Pt=e}function Ot(){Pt=null}function xt(e,t=St,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&ir(-1);const i=Rt(t),s=e(...n);return Rt(i),r._d&&ir(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function At(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:f,inheritAttrs:m}=e;let g;const _=Rt(e);try{let e;if(4&n.shapeFlag){const t=i||r;g=yr(u.call(t,t,h,s,p,d,f)),e=l}else{const n=t;0,g=yr(n.length>1?n(s,{attrs:l,slots:a,emit:c}):n(s,null)),e=t.props?l:Dt(l)}let _=g;if(e&&!1!==m){const t=Object.keys(e),{shapeFlag:n}=_;t.length&&7&n&&(o&&t.some(v)&&(e=Lt(e,o)),_=mr(_,e))}0,n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),g=_}catch(y){er.length=0,Vr(y,e,1),g=fr(Xn)}return Rt(_),g}const Dt=e=>{let t;for(const n in e)("class"===n||"style"===n||_(n))&&((t||(t={}))[n]=e[n]);return t},Lt=(e,t)=>{const n={};for(const r in e)v(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Mt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!kt(n,s))return!0}return!1}function Ft(e,t){if(Nr){let n=Nr.provides;const r=Nr.parent&&Nr.parent.provides;r===n&&(n=Nr.provides=Object.create(r)),n[e]=t}else;}function Ut(e,t,n=!1){const r=Nr||St;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&S(t)?t.call(r.proxy):t}}const jt=[Function,Array],qt={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:jt,onEnter:jt,onAfterEnter:jt,onEnterCancelled:jt,onBeforeLeave:jt,onLeave:jt,onAfterLeave:jt,onLeaveCancelled:jt,onBeforeAppear:jt,onAppear:jt,onAfterAppear:jt,onAppearCancelled:jt},setup(e,{slots:t}){const n=Or(),r=function(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rn((()=>{e.isMounted=!0})),an((()=>{e.isUnmounting=!0})),e}();let i;return()=>{const s=t.default&&$t(t.default(),!0);if(!s||!s.length)return;const o=ut(e),{mode:a}=o,l=s[0];if(r.isLeaving)return Wt(l);const c=Ht(l);if(!c)return Wt(l);const u=Vt(c,o,r,n);zt(c,u);const h=n.subTree,d=h&&Ht(h);let p=!1;const{getTransitionKey:f}=c.type;if(f){const e=f();void 0===i?i=e:e!==i&&(i=e,p=!0)}if(d&&d.type!==Xn&&(!cr(c,d)||p)){const e=Vt(d,o,r,n);if(zt(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},Wt(l);"in-out"===a&&c.type!==Xn&&(e.delayLeave=(e,t,n)=>{Bt(r,d)[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=n})}return l}}};function Bt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Vt(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:f,onBeforeAppear:m,onAppear:g,onAfterAppear:_,onAppearCancelled:v}=t,y=String(e.key),w=Bt(n,e),b=(e,t)=>{e&&Br(e,r,9,t)},C={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const s=w[y];s&&cr(e,s)&&s.el._leaveCb&&s.el._leaveCb(),b(r,[t])},enter(e){let t=l,r=c,s=u;if(!n.isMounted){if(!i)return;t=g||l,r=_||c,s=v||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,b(t?s:r,[e]),C.delayedLeave&&C.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();b(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),b(n?f:p,[t]),t._leaveCb=void 0,w[i]===e&&delete w[i])};w[i]=e,d?(d(t,o),d.length<=1&&o()):o()},clone:e=>Vt(e,t,n,r)};return C}function Wt(e){if(Yt(e))return(e=mr(e)).children=null,e}function Ht(e){return Yt(e)?e.children?e.children[0]:void 0:e}function zt(e,t){6&e.shapeFlag&&e.component?zt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function $t(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===Jn?(128&s.patchFlag&&r++,n=n.concat($t(s.children,t))):(t||s.type!==Xn)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function Kt(e){return S(e)?{setup:e,name:e.name}:e}const Gt=e=>!!e.type.__asyncLoader,Yt=e=>e.type.__isKeepAlive;function Jt(e,t){Xt(e,"a",t)}function Qt(e,t){Xt(e,"da",t)}function Xt(e,t,n=Nr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()});if(en(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Yt(e.parent.vnode)&&Zt(r,t,n,e),e=e.parent}}function Zt(e,t,n,r){const i=en(t,e,r,!0);ln((()=>{w(r[t],i)}),n)}function en(e,t,n=Nr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;he(),xr(n);const i=Br(t,n,e,r);return Ar(),de(),i});return r?i.unshift(s):i.push(s),s}}const tn=e=>(t,n=Nr)=>(!Lr||"sp"===e)&&en(e,t,n),nn=tn("bm"),rn=tn("m"),sn=tn("bu"),on=tn("u"),an=tn("bum"),ln=tn("um"),cn=tn("sp"),un=tn("rtg"),hn=tn("rtc");function dn(e,t=Nr){en("ec",e,t)}let pn=!0;function fn(e){const t=_n(e),n=e.proxy,r=e.ctx;pn=!1,t.beforeCreate&&mn(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:m,activated:g,deactivated:_,beforeDestroy:v,beforeUnmount:y,destroyed:w,unmounted:b,render:C,renderTracked:E,renderTriggered:T,errorCaptured:k,serverPrefetch:P,expose:R,inheritAttrs:O,components:x,directives:A,filters:D}=t;if(c&&function(e,t,n=f,r=!1){I(e)&&(e=bn(e));for(const i in e){const n=e[i];let s;s=N(n)?"default"in n?Ut(n.from||i,n.default,!0):Ut(n.from||i):Ut(n),mt(s)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const f in o){const e=o[f];S(e)&&(r[f]=e.bind(n))}if(i){const t=i.call(n,n);N(t)&&(e.data=it(t))}if(pn=!0,s)for(const I in s){const e=s[I],t=It({get:S(e)?e.bind(n,n):S(e.get)?e.get.bind(n,n):f,set:!S(e)&&S(e.set)?e.set.bind(n):f});Object.defineProperty(r,I,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}if(a)for(const f in a)gn(a[f],r,n,f);if(l){const e=S(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{Ft(t,e[t])}))}function L(e,t){I(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&mn(u,e,"c"),L(nn,h),L(rn,d),L(sn,p),L(on,m),L(Jt,g),L(Qt,_),L(dn,k),L(hn,E),L(un,T),L(an,y),L(ln,b),L(cn,P),I(R))if(R.length){const t=e.exposed||(e.exposed={});R.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});C&&e.render===f&&(e.render=C),null!=O&&(e.inheritAttrs=O),x&&(e.components=x),A&&(e.directives=A)}function mn(e,t,n){Br(I(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function gn(e,t,n,r){const i=r.includes(".")?mi(n,r):()=>n[r];if(P(e)){const n=t[e];S(n)&&di(i,n)}else if(S(e))di(i,e.bind(n));else if(N(e))if(I(e))e.forEach((e=>gn(e,t,n,r)));else{const r=S(e.handler)?e.handler.bind(n):t[e.handler];S(r)&&di(i,r,e)}}function _n(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:i.length||n||r?(l={},i.length&&i.forEach((e=>vn(l,e,o,!0))),vn(l,t,o)):l=t,s.set(t,l),l}function vn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&vn(e,s,n,!0),i&&i.forEach((t=>vn(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=yn[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const yn={data:wn,props:In,emits:In,methods:In,computed:In,beforeCreate:Cn,created:Cn,beforeMount:Cn,mounted:Cn,beforeUpdate:Cn,updated:Cn,beforeDestroy:Cn,beforeUnmount:Cn,destroyed:Cn,unmounted:Cn,activated:Cn,deactivated:Cn,errorCaptured:Cn,serverPrefetch:Cn,components:In,directives:In,watch:function(e,t){if(!e)return t;if(!t)return e;const n=y(Object.create(null),e);for(const r in t)n[r]=Cn(e[r],t[r]);return n},provide:wn,inject:function(e,t){return In(bn(e),bn(t))}};function wn(e,t){return t?e?function(){return y(S(e)?e.call(this,this):e,S(t)?t.call(this,this):t)}:t:e}function bn(e){if(I(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Cn(e,t){return e?[...new Set([].concat(e,t))]:t}function In(e,t){return e?y(y(Object.create(null),e),t):t}function En(e,t,n,r=!1){const i={},s={};$(s,ur,1),e.propsDefaults=Object.create(null),Tn(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:ot(i,!1,Re,Qe,et):e.type.props?e.props=i:e.props=s,e.attrs=s}function Tn(e,t,n,r){const[i,s]=e.propsOptions;let o,a=!1;if(t)for(let l in t){if(M(l))continue;const c=t[l];let u;i&&C(i,u=j(l))?s&&s.includes(u)?(o||(o={}))[u]=c:n[u]=c:kt(e.emitsOptions,l)||c!==r[l]&&(r[l]=c,a=!0)}if(s){const t=ut(n),r=o||d;for(let o=0;o<s.length;o++){const a=s[o];n[a]=kn(i,t,a,r[a],e,!C(r,a))}}return a}function kn(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=C(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&S(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(xr(i),r=s[n]=e.call(null,t),Ar())}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==B(n)||(r=!0))}return r}function Sn(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!S(e)){const r=e=>{l=!0;const[n,r]=Sn(e,t,!0);y(o,n),r&&a.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!l)return r.set(e,p),p;if(I(s))for(let u=0;u<s.length;u++){const e=j(s[u]);Pn(e)&&(o[e]=d)}else if(s)for(const u in s){const e=j(u);if(Pn(e)){const t=s[u],n=o[e]=I(t)||S(t)?{type:t}:t;if(n){const t=On(Boolean,n.type),r=On(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||C(n,"default"))&&a.push(e)}}}const c=[o,a];return r.set(e,c),c}function Pn(e){return"$"!==e[0]}function Rn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Nn(e,t){return Rn(e)===Rn(t)}function On(e,t){return I(t)?t.findIndex((t=>Nn(t,e))):S(t)&&Nn(t,e)?0:-1}const xn=e=>"_"===e[0]||"$stable"===e,An=e=>I(e)?e.map(yr):[yr(e)],Dn=(e,t,n)=>{const r=xt(((...e)=>An(t(...e))),n);return r._c=!1,r},Ln=(e,t,n)=>{const r=e._ctx;for(const i in e){if(xn(i))continue;const n=e[i];if(S(n))t[i]=Dn(0,n,r);else if(null!=n){const e=An(n);t[i]=()=>e}}},Mn=(e,t)=>{const n=An(t);e.slots.default=()=>n};function Fn(e,t){if(null===St)return e;const n=St.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[e,s,o,a=d]=t[i];S(e)&&(e={mounted:e,updated:e}),e.deep&&gi(s),r.push({dir:e,instance:n,value:s,oldValue:void 0,arg:o,modifiers:a})}return e}function Un(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(he(),Br(l,n,8,[e.el,a,e,t]),de())}}function jn(){return{app:null,config:{isNativeTag:m,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let qn=0;function Bn(e,t){return function(n,r=null){null==r||N(r)||(r=null);const i=jn(),s=new Set;let o=!1;const a=i.app={_uid:qn++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:vi,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&S(e.install)?(s.add(e),e.install(a,...t)):S(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||i.mixins.push(e),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,l,c){if(!o){const u=fr(n,r);return u.appContext=i,l&&t?t(u,s):e(u,s,c),o=!0,a._container=s,s.__vue_app__=a,u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a)};return a}}const Vn=function(e,t){t&&t.pendingBranch?I(e)?t.effects.push(...e):t.effects.push(e):si(e,Qr,Jr,Xr)};function Wn(e){return function(e,t){const{insert:n,remove:r,patchProp:i,createElement:s,createText:o,createComment:a,setText:l,setElementText:c,parentNode:u,nextSibling:h,setScopeId:m=f,cloneNode:g,insertStaticContent:_}=e,v=(e,t,n,r=null,i=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!cr(e,t)&&(r=te(e),Y(e,i,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Qn:w(e,t,n,r);break;case Xn:b(e,t,n,r);break;case Zn:null==e&&I(t,n,r,o);break;case Jn:D(e,t,n,r,i,s,o,a,l);break;default:1&h?k(e,t,n,r,i,s,o,a,l):6&h?L(e,t,n,r,i,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,r,i,s,o,a,l,re)}null!=u&&i&&Hn(u,e&&e.ref,s,t||e,!t)},w=(e,t,r,i)=>{if(null==e)n(t.el=o(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},b=(e,t,r,i)=>{null==e?n(t.el=a(t.children||""),r,i):t.el=e.el},I=(e,t,n,r)=>{[e.el,e.anchor]=_(e.children,t,n,r)},E=({el:e,anchor:t},r,i)=>{let s;for(;e&&e!==t;)s=h(e),n(e,r,i),e=s;n(t,r,i)},T=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=h(e),r(e),e=n;r(t)},k=(e,t,n,r,i,s,o,a,l)=>{o=o||"svg"===t.type,null==e?S(t,n,r,i,s,o,a,l):N(e,t,i,s,o,a,l)},S=(e,t,r,o,a,l,u,h)=>{let d,p;const{type:f,props:m,shapeFlag:_,transition:v,patchFlag:y,dirs:w}=e;if(e.el&&void 0!==g&&-1===y)d=e.el=g(e.el);else{if(d=e.el=s(e.type,l,m&&m.is,m),8&_?c(d,e.children):16&_&&R(e.children,d,null,o,a,l&&"foreignObject"!==f,u,h),w&&Un(e,null,o,"created"),m){for(const t in m)"value"===t||M(t)||i(d,t,null,m[t],l,e.children,o,a,ee);"value"in m&&i(d,"value",null,m.value),(p=m.onVnodeBeforeMount)&&zn(p,o,e)}P(d,e,e.scopeId,u,o)}w&&Un(e,null,o,"beforeMount");const b=(!a||a&&!a.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(d),n(d,t,r),((p=m&&m.onVnodeMounted)||b||w)&&Vn((()=>{p&&zn(p,o,e),b&&v.enter(d),w&&Un(e,null,o,"mounted")}),a)},P=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){if(t===i.subTree){const t=i.vnode;P(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},R=(e,t,n,r,i,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?wr(e[c]):yr(e[c]);v(null,l,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,o,a)=>{const l=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:p}=t;u|=16&e.patchFlag;const f=e.props||d,m=t.props||d;let g;(g=m.onVnodeBeforeUpdate)&&zn(g,n,t,e),p&&Un(t,e,n,"beforeUpdate");const _=s&&"foreignObject"!==t.type;if(h?x(e.dynamicChildren,h,l,n,r,_,o):a||W(e,t,l,null,n,r,_,o,!1),u>0){if(16&u)A(l,t,f,m,n,r,s);else if(2&u&&f.class!==m.class&&i(l,"class",null,m.class,s),4&u&&i(l,"style",f.style,m.style,s),8&u){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const a=o[t],c=f[a],u=m[a];u===c&&"value"!==a||i(l,a,c,u,s,e.children,n,r,ee)}}1&u&&e.children!==t.children&&c(l,t.children)}else a||null!=h||A(l,t,f,m,n,r,s);((g=m.onVnodeUpdated)||p)&&Vn((()=>{g&&zn(g,n,t,e),p&&Un(t,e,n,"updated")}),r)},x=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],h=l.el&&(l.type===Jn||!cr(l,c)||70&l.shapeFlag)?u(l.el):n;v(l,c,h,null,r,i,s,o,!0)}},A=(e,t,n,r,s,o,a)=>{if(n!==r){for(const l in r){if(M(l))continue;const c=r[l],u=n[l];c!==u&&"value"!==l&&i(e,l,u,c,a,t.children,s,o,ee)}if(n!==d)for(const l in n)M(l)||l in r||i(e,l,n[l],null,a,t.children,s,o,ee);"value"in r&&i(e,"value",n.value,r.value)}},D=(e,t,r,i,s,a,l,c,u)=>{const h=t.el=e?e.el:o(""),d=t.anchor=e?e.anchor:o("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:m}=t;m&&(c=c?c.concat(m):m),null==e?(n(h,r,i),n(d,r,i),R(t.children,r,d,s,a,l,c,u)):p>0&&64&p&&f&&e.dynamicChildren?(x(e.dynamicChildren,f,r,s,a,l,c),(null!=t.key||s&&t===s.subTree)&&$n(e,t,!0)):W(e,t,r,d,s,a,l,c,u)},L=(e,t,n,r,i,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,l):F(t,n,r,i,s,o,l):U(e,t,l)},F=(e,t,n,r,i,s,o)=>{const a=e.component=function(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||Pr,s={uid:Rr++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,scope:new J(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sn(r,i),emitsOptions:Tt(r,i),emit:null,emitted:null,propsDefaults:d,inheritAttrs:r.inheritAttrs,ctx:d,data:d,props:d,attrs:d,slots:d,refs:d,setupState:d,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};s.ctx={_:s},s.root=t?t.root:s,s.emit=Et.bind(null,s),e.ce&&e.ce(s);return s}(e,r,i);if(Yt(e)&&(a.ctx.renderer=re),function(e,t=!1){Lr=t;const{props:n,children:r}=e.vnode,i=Dr(e);En(e,n,i,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=ut(t),$(t,"_",n)):Ln(t,e.slots={})}else e.slots={},t&&Mn(e,t);$(e.slots,ur,1)})(e,r);const s=i?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ht(new Proxy(e.ctx,Sr));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(pe(e,0,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}(e):null;xr(e),he();const i=qr(r,e,0,[e.props,n]);if(de(),Ar(),O(i)){if(i.then(Ar,Ar),t)return i.then((t=>{Mr(e,t)})).catch((t=>{Vr(t,e,0)}));e.asyncDep=i}else Mr(e,i)}else Fr(e)}(e,t):void 0;Lr=!1}(a),a.asyncDep){if(i&&i.registerDep(a,q),!e.el){const e=a.subTree=fr(Xn);b(null,e,t,n)}}else q(a,e,t,n,i,s,o)},U=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Mt(r,o,c):!!o);if(1024&l)return!0;if(16&l)return r?Mt(r,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!kt(c,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,function(e){const t=zr.indexOf(e);t>$r&&zr.splice(t,1)}(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},q=(e,t,n,r,i,s,o)=>{const a=new ae((()=>{if(e.isMounted){let t,{next:n,bu:r,u:l,parent:c,vnode:h}=e,d=n;a.allowRecurse=!1,n?(n.el=h.el,V(e,n,o)):n=h,r&&z(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&zn(t,c,n,h),a.allowRecurse=!0;const p=At(e),f=e.subTree;e.subTree=p,v(f,p,u(f.el),te(f),e,i,s),n.el=p.el,null===d&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,p.el),l&&Vn(l,i),(t=n.props&&n.props.onVnodeUpdated)&&Vn((()=>zn(t,c,n,h)),i)}else{let o;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,p=Gt(t);if(a.allowRecurse=!1,u&&z(u),!p&&(o=c&&c.onVnodeBeforeMount)&&zn(o,d,t),a.allowRecurse=!0,l&&se){const n=()=>{e.subTree=At(e),se(l,e.subTree,e,i,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=At(e);v(null,o,n,r,e,i,s),t.el=o.el}if(h&&Vn(h,i),!p&&(o=c&&c.onVnodeMounted)){const e=t;Vn((()=>zn(o,d,e)),i)}256&t.shapeFlag&&e.a&&Vn(e.a,i),e.isMounted=!0,t=n=r=null}}),(()=>ri(e.update)),e.scope),l=e.update=a.run.bind(a);l.id=e.uid,a.allowRecurse=l.allowRecurse=!0,l()},V=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=ut(i),[l]=e.propsOptions;let c=!1;if(!(r||o>0)||16&o){let r;Tn(e,t,i,s)&&(c=!0);for(const s in a)t&&(C(t,s)||(r=B(s))!==s&&C(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(i[s]=kn(l,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&C(t,e)||(delete s[e],c=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];const u=t[o];if(l)if(C(s,o))u!==s[o]&&(s[o]=u,c=!0);else{const t=j(o);i[t]=kn(l,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,c=!0)}}c&&ge(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=d;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:(y(i,t),n||1!==e||delete i._):(s=!t.$stable,Ln(t,i)),o=t}else t&&(Mn(e,t),o={default:1});if(s)for(const a in i)xn(a)||a in o||delete i[a]})(e,t.children,n),he(),oi(void 0,e.update),de()},W=(e,t,n,r,i,s,o,a,l=!1)=>{const u=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void K(u,d,n,r,i,s,o,a,l);if(256&p)return void H(u,d,n,r,i,s,o,a,l)}8&f?(16&h&&ee(u,i,s),d!==u&&c(n,d)):16&h?16&f?K(u,d,n,r,i,s,o,a,l):ee(u,i,s,!0):(8&h&&c(n,""),16&f&&R(d,n,r,i,s,o,a,l))},H=(e,t,n,r,i,s,o,a,l)=>{t=t||p;const c=(e=e||p).length,u=t.length,h=Math.min(c,u);let d;for(d=0;d<h;d++){const r=t[d]=l?wr(t[d]):yr(t[d]);v(e[d],r,n,null,i,s,o,a,l)}c>u?ee(e,i,s,!0,!1,h):R(t,n,r,i,s,o,a,l,h)},K=(e,t,n,r,i,s,o,a,l)=>{let c=0;const u=t.length;let h=e.length-1,d=u-1;for(;c<=h&&c<=d;){const r=e[c],u=t[c]=l?wr(t[c]):yr(t[c]);if(!cr(r,u))break;v(r,u,n,null,i,s,o,a,l),c++}for(;c<=h&&c<=d;){const r=e[h],c=t[d]=l?wr(t[d]):yr(t[d]);if(!cr(r,c))break;v(r,c,n,null,i,s,o,a,l),h--,d--}if(c>h){if(c<=d){const e=d+1,h=e<u?t[e].el:r;for(;c<=d;)v(null,t[c]=l?wr(t[c]):yr(t[c]),n,h,i,s,o,a,l),c++}}else if(c>d)for(;c<=h;)Y(e[c],i,s,!0),c++;else{const f=c,m=c,g=new Map;for(c=m;c<=d;c++){const e=t[c]=l?wr(t[c]):yr(t[c]);null!=e.key&&g.set(e.key,c)}let _,y=0;const w=d-m+1;let b=!1,C=0;const I=new Array(w);for(c=0;c<w;c++)I[c]=0;for(c=f;c<=h;c++){const r=e[c];if(y>=w){Y(r,i,s,!0);continue}let u;if(null!=r.key)u=g.get(r.key);else for(_=m;_<=d;_++)if(0===I[_-m]&&cr(r,t[_])){u=_;break}void 0===u?Y(r,i,s,!0):(I[u-m]=c+1,u>=C?C=u:b=!0,v(r,t[u],n,null,i,s,o,a,l),y++)}const E=b?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(I):p;for(_=E.length-1,c=w-1;c>=0;c--){const e=m+c,h=t[e],d=e+1<u?t[e+1].el:r;0===I[c]?v(null,h,n,d,i,s,o,a,l):b&&(_<0||c!==E[_]?G(h,n,d,2):_--)}}},G=(e,t,r,i,s=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void G(e.component.subTree,t,r,i);if(128&u)return void e.suspense.move(t,r,i);if(64&u)return void a.move(e,t,r,re);if(a===Jn){n(o,t,r);for(let e=0;e<c.length;e++)G(c[e],t,r,i);return void n(e.anchor,t,r)}if(a===Zn)return void E(e,t,r);if(2!==i&&1&u&&l)if(0===i)l.beforeEnter(o),n(o,t,r),Vn((()=>l.enter(o)),s);else{const{leave:e,delayLeave:i,afterLeave:s}=l,a=()=>n(o,t,r),c=()=>{e(o,(()=>{a(),s&&s()}))};i?i(o,a,c):c()}else n(o,t,r)},Y=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Hn(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!Gt(e);let m;if(f&&(m=o&&o.onVnodeBeforeUnmount)&&zn(m,t,e),6&u)Z(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&Un(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,re,r):c&&(s!==Jn||h>0&&64&h)?ee(c,t,n,!1,!0):(s===Jn&&384&h||!i&&16&u)&&ee(l,t,n),r&&Q(e)}(f&&(m=o&&o.onVnodeUnmounted)||p)&&Vn((()=>{m&&zn(m,t,e),p&&Un(e,null,t,"unmounted")}),n)},Q=e=>{const{type:t,el:n,anchor:i,transition:s}=e;if(t===Jn)return void X(n,i);if(t===Zn)return void T(e);const o=()=>{r(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},X=(e,t)=>{let n;for(;e!==t;)n=h(e),r(e),e=n;r(t)},Z=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:o,um:a}=e;r&&z(r),i.stop(),s&&(s.active=!1,Y(o,e,t,n)),a&&Vn(a,t),Vn((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},ee=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)Y(e[o],t,n,r,i)},te=e=>6&e.shapeFlag?te(e.component.subTree):128&e.shapeFlag?e.suspense.next():h(e.anchor||e.el),ne=(e,t,n)=>{null==e?t._vnode&&Y(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),ai(),t._vnode=e},re={p:v,um:Y,m:G,r:Q,mt:F,mc:R,pc:W,pbc:x,n:te,o:e};let ie,se;t&&([ie,se]=t(re));return{render:ne,hydrate:ie,createApp:Bn(ne,ie)}}(e)}function Hn(e,t,n,r,i=!1){if(I(e))return void e.forEach(((e,s)=>Hn(e,t&&(I(t)?t[s]:t),n,r,i)));if(Gt(r)&&!i)return;const s=4&r.shapeFlag?Ur(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=e,c=t&&t.r,u=a.refs===d?a.refs={}:a.refs,h=a.setupState;if(null!=c&&c!==l&&(P(c)?(u[c]=null,C(h,c)&&(h[c]=null)):mt(c)&&(c.value=null)),P(l)){const e=()=>{u[l]=o,C(h,l)&&(h[l]=o)};o?(e.id=-1,Vn(e,n)):e()}else if(mt(l)){const e=()=>{l.value=o};o?(e.id=-1,Vn(e,n)):e()}else S(l)&&qr(l,a,12,[o,u])}function zn(e,t,n,r=null){Br(e,t,7,[n,r])}function $n(e,t,n=!1){const r=e.children,i=t.children;if(I(r)&&I(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=wr(i[s]),t.el=e.el),n||$n(e,t))}}function Kn(e,t){return function(e,t,n=!0,r=!1){const i=St||Nr;if(i){const n=i.type;if("components"===e){const e=jr(n);if(e&&(e===t||e===j(t)||e===V(j(t))))return n}const s=Yn(i[e]||n[e],t)||Yn(i.appContext[e],t);return!s&&r?n:s}}("components",e,!0,t)||e}const Gn=Symbol();function Yn(e,t){return e&&(e[t]||e[j(t)]||e[V(j(t))])}const Jn=Symbol(void 0),Qn=Symbol(void 0),Xn=Symbol(void 0),Zn=Symbol(void 0),er=[];let tr=null;function nr(e=!1){er.push(tr=e?null:[])}let rr=1;function ir(e){rr+=e}function sr(e){return e.dynamicChildren=rr>0?tr||p:null,er.pop(),tr=er[er.length-1]||null,rr>0&&tr&&tr.push(e),e}function or(e,t,n,r,i,s){return sr(pr(e,t,n,r,i,s,!0))}function ar(e,t,n,r,i){return sr(fr(e,t,n,r,i,!0))}function lr(e){return!!e&&!0===e.__v_isVNode}function cr(e,t){return e.type===t.type&&e.key===t.key}const ur="__vInternal",hr=({key:e})=>null!=e?e:null,dr=({ref:e})=>null!=e?P(e)||mt(e)||S(e)?{i:St,r:e}:e:null;function pr(e,t=null,n=null,r=0,i=null,s=(e===Jn?0:1),o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&hr(t),ref:t&&dr(t),scopeId:Pt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(br(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=P(n)?8:16),rr>0&&!o&&tr&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&tr.push(l),l}const fr=function(e,t=null,n=null,i=0,s=null,o=!1){e&&e!==Gn||(e=Xn);if(lr(e)){const r=mr(e,t,!0);return n&&br(r,n),r}l=e,S(l)&&"__vccOpts"in l&&(e=e.__vccOpts);var l;if(t){t=function(e){return e?ct(e)||ur in e?y({},e):e:null}(t);let{class:e,style:n}=t;e&&!P(e)&&(t.class=a(e)),N(n)&&(ct(n)&&!I(n)&&(n=y({},n)),t.style=r(n))}const c=P(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:N(e)?4:S(e)?2:0;return pr(e,t,n,i,s,c,o,!0)};function mr(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:l}=e,c=t?function(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=a([t.class,i.class]));else if("style"===e)t.style=r([t.style,i.style]);else if(_(e)){const n=t[e],r=i[e];n!==r&&(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=i[e])}return t}(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&hr(c),ref:t&&t.ref?n&&s?I(s)?s.concat(dr(t)):[s,dr(t)]:dr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Jn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&mr(e.ssContent),ssFallback:e.ssFallback&&mr(e.ssFallback),el:e.el,anchor:e.anchor}}function gr(e=" ",t=0){return fr(Qn,null,e,t)}function _r(e,t){const n=fr(Zn,null,e);return n.staticCount=t,n}function vr(e="",t=!1){return t?(nr(),ar(Xn,null,e)):fr(Xn,null,e)}function yr(e){return null==e||"boolean"==typeof e?fr(Xn):I(e)?fr(Jn,null,e.slice()):"object"==typeof e?wr(e):fr(Qn,null,String(e))}function wr(e){return null===e.el||e.memo?e:mr(e)}function br(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(I(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),br(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||ur in t?3===r&&St&&(1===St.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=St}}else S(t)?(t={default:t,_ctx:St},n=32):(t=String(t),64&r?(n=16,t=[gr(t)]):n=8);e.children=t,e.shapeFlag|=n}function Cr(e,t,n,r){let i;const s=n&&n[r];if(I(e)||P(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if(N(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}function Ir(e,t,n={},r,i){if(St.isCE)return fr("slot","default"===t?null:{name:t},r&&r());let s=e[t];s&&s._c&&(s._d=!1),nr();const o=s&&Er(s(n)),a=ar(Jn,{key:n.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Er(e){return e.some((e=>!lr(e)||e.type!==Xn&&!(e.type===Jn&&!Er(e.children))))?e:null}const Tr=e=>e?Dr(e)?Ur(e)||e.proxy:Tr(e.parent):null,kr=y(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tr(e.parent),$root:e=>Tr(e.root),$emit:e=>e.emit,$options:e=>_n(e),$forceUpdate:e=>()=>ri(e.update),$nextTick:e=>ni.bind(e.proxy),$watch:e=>fi.bind(e)}),Sr={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=e;let c;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 0:return r[t];case 1:return i[t];case 3:return n[t];case 2:return s[t]}else{if(r!==d&&C(r,t))return o[t]=0,r[t];if(i!==d&&C(i,t))return o[t]=1,i[t];if((c=e.propsOptions[0])&&C(c,t))return o[t]=2,s[t];if(n!==d&&C(n,t))return o[t]=3,n[t];pn&&(o[t]=4)}}const u=kr[t];let h,p;return u?("$attrs"===t&&pe(e,0,t),u(e)):(h=a.__cssModules)&&(h=h[t])?h:n!==d&&C(n,t)?(o[t]=3,n[t]):(p=l.config.globalProperties,C(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;if(i!==d&&C(i,t))i[t]=n;else if(r!==d&&C(r,t))r[t]=n;else if(C(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return void 0!==n[o]||e!==d&&C(e,o)||t!==d&&C(t,o)||(a=s[0])&&C(a,o)||C(r,o)||C(kr,o)||C(i.config.globalProperties,o)}},Pr=jn();let Rr=0;let Nr=null;const Or=()=>Nr||St,xr=e=>{Nr=e,e.scope.on()},Ar=()=>{Nr&&Nr.scope.off(),Nr=null};function Dr(e){return 4&e.vnode.shapeFlag}let Lr=!1;function Mr(e,t,n){S(t)?e.render=t:N(t)&&(e.setupState=bt(t)),Fr(e)}function Fr(e,t,n){const r=e.type;e.render||(e.render=r.render||f),xr(e),he(),fn(e),de(),Ar()}function Ur(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(bt(ht(e.exposed)),{get:(t,n)=>n in t?t[n]:n in kr?kr[n](e):void 0}))}function jr(e){return S(e)&&e.displayName||e.name}function qr(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Vr(s,t,n)}return i}function Br(e,t,n,r){if(S(e)){const i=qr(e,t,n,r);return i&&O(i)&&i.catch((e=>{Vr(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(Br(e[s],t,n,r));return i}function Vr(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void qr(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let Wr=!1,Hr=!1;const zr=[];let $r=0;const Kr=[];let Gr=null,Yr=0;const Jr=[];let Qr=null,Xr=0;const Zr=Promise.resolve();let ei=null,ti=null;function ni(e){const t=ei||Zr;return e?t.then(this?e.bind(this):e):t}function ri(e){zr.length&&zr.includes(e,Wr&&e.allowRecurse?$r+1:$r)||e===ti||(null==e.id?zr.push(e):zr.splice(function(e){let t=$r+1,n=zr.length;for(;t<n;){const r=t+n>>>1;li(zr[r])<e?t=r+1:n=r}return t}(e.id),0,e),ii())}function ii(){Wr||Hr||(Hr=!0,ei=Zr.then(ci))}function si(e,t,n,r){I(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),ii()}function oi(e,t=null){if(Kr.length){for(ti=t,Gr=[...new Set(Kr)],Kr.length=0,Yr=0;Yr<Gr.length;Yr++)Gr[Yr]();Gr=null,Yr=0,ti=null,oi(e,t)}}function ai(e){if(Jr.length){const e=[...new Set(Jr)];if(Jr.length=0,Qr)return void Qr.push(...e);for(Qr=e,Qr.sort(((e,t)=>li(e)-li(t))),Xr=0;Xr<Qr.length;Xr++)Qr[Xr]();Qr=null,Xr=0}}const li=e=>null==e.id?1/0:e.id;function ci(e){Hr=!1,Wr=!0,oi(e),zr.sort(((e,t)=>li(e)-li(t)));try{for($r=0;$r<zr.length;$r++){const e=zr[$r];e&&!1!==e.active&&qr(e,null,14)}}finally{$r=0,zr.length=0,ai(),Wr=!1,ei=null,(zr.length||Kr.length||Jr.length)&&ci(e)}}function ui(e,t){return pi(e,null,t)}const hi={};function di(e,t,n){return pi(e,t,n)}function pi(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=d){const a=Nr;let l,c,u=!1,h=!1;if(mt(e)?(l=()=>e.value,u=!!e._shallow):at(e)?(l=()=>e,r=!0):I(e)?(h=!0,u=e.some(at),l=()=>e.map((e=>mt(e)?e.value:at(e)?gi(e):S(e)?qr(e,a,2):void 0))):l=S(e)?t?()=>qr(e,a,2):()=>{if(!a||!a.isUnmounted)return c&&c(),Br(e,a,3,[p])}:f,t&&r){const e=l;l=()=>gi(e())}let p=e=>{c=v.onStop=()=>{qr(e,a,4)}},m=h?[]:hi;const g=()=>{if(v.active)if(t){const e=v.run();(r||u||(h?e.some(((e,t)=>H(e,m[t]))):H(e,m)))&&(c&&c(),Br(t,a,3,[e,m===hi?void 0:m,p]),m=e)}else v.run()};let _;g.allowRecurse=!!t,_="sync"===i?g:"post"===i?()=>Vn(g,a&&a.suspense):()=>{!a||a.isMounted?function(e){si(e,Gr,Kr,Yr)}(g):g()};const v=new ae(l,_);return t?n?g():m=v.run():"post"===i?Vn(v.run.bind(v),a&&a.suspense):v.run(),()=>{v.stop(),a&&a.scope&&w(a.scope.effects,v)}}function fi(e,t,n){const r=this.proxy,i=P(e)?e.includes(".")?mi(r,e):()=>r[e]:e.bind(r,r);let s;S(t)?s=t:(s=t.handler,n=t);const o=Nr;xr(this);const a=pi(i,s.bind(r),n);return o?xr(o):Ar(),a}function mi(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function gi(e,t=new Set){if(!N(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),mt(e))gi(e.value,t);else if(I(e))for(let n=0;n<e.length;n++)gi(e[n],t);else if(T(e)||E(e))e.forEach((e=>{gi(e,t)}));else if(D(e))for(const n in e)gi(e[n],t);return e}function _i(e,t,n){const r=arguments.length;return 2===r?N(t)&&!I(t)?lr(t)?fr(e,null,[t]):fr(e,t):fr(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&lr(n)&&(n=[n]),fr(e,t,n))}const vi="3.2.11",yi="undefined"!=typeof document?document:null,wi=new Map,bi={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?yi.createElementNS("http://www.w3.org/2000/svg",e):yi.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>yi.createTextNode(e),createComment:e=>yi.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>yi.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let s=wi.get(e);if(!s){const t=yi.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,s=t.content,r){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e)}wi.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const Ci=/\s*!important$/;function Ii(e,t,n){if(I(n))n.forEach((n=>Ii(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=Ti[t];if(n)return n;let r=j(t);if("filter"!==r&&r in e)return Ti[t]=r;r=V(r);for(let i=0;i<Ei.length;i++){const n=Ei[i]+r;if(n in e)return Ti[t]=n}return t}(e,t);Ci.test(n)?e.setProperty(B(r),n.replace(Ci,""),"important"):e[r]=n}}const Ei=["Webkit","Moz","ms"],Ti={};const ki="http://www.w3.org/1999/xlink";let Si=Date.now,Pi=!1;if("undefined"!=typeof window){Si()>document.createEvent("Event").timeStamp&&(Si=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Pi=!!(e&&Number(e[1])<=53)}let Ri=0;const Ni=Promise.resolve(),Oi=()=>{Ri=0};function xi(e,t,n,r){e.addEventListener(t,n,r)}function Ai(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(Di.test(e)){let n;for(t={};n=e.match(Di);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[B(e.slice(2)),t]}(t);if(r){xi(e,n,s[t]=function(e,t){const n=e=>{const r=e.timeStamp||Si();(Pi||r>=n.attached-1)&&Br(function(e,t){if(I(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>Ri||(Ni.then(Oi),Ri=Si()))(),n}(r,i),a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const Di=/(?:Once|Passive|Capture)$/;const Li=/^on[a-z]/;const Mi="transition",Fi=(e,{slots:t})=>_i(qt,function(e){const t={};for(const y in e)y in Ui||(t[y]=e[y]);if(!1===e.css)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,f=function(e){if(null==e)return null;if(N(e))return[Bi(e.enter),Bi(e.leave)];{const t=Bi(e);return[t,t]}}(i),m=f&&f[0],g=f&&f[1],{onBeforeEnter:_,onEnter:v,onEnterCancelled:w,onLeave:b,onLeaveCancelled:C,onBeforeAppear:I=_,onAppear:E=v,onAppearCancelled:T=w}=t,k=(e,t,n)=>{Wi(e,t?u:a),Wi(e,t?c:o),n&&n()},S=(e,t)=>{Wi(e,p),Wi(e,d),t&&t()},P=e=>(t,n)=>{const i=e?E:v,o=()=>k(t,e,n);ji(i,[t,o]),Hi((()=>{Wi(t,e?l:s),Vi(t,e?u:a),qi(i)||$i(t,r,m,o)}))};return y(t,{onBeforeEnter(e){ji(_,[e]),Vi(e,s),Vi(e,o)},onBeforeAppear(e){ji(I,[e]),Vi(e,l),Vi(e,c)},onEnter:P(!1),onAppear:P(!0),onLeave(e,t){const n=()=>S(e,t);Vi(e,h),document.body.offsetHeight,Vi(e,d),Hi((()=>{Wi(e,h),Vi(e,p),qi(b)||$i(e,r,g,n)})),ji(b,[e,n])},onEnterCancelled(e){k(e,!1),ji(w,[e])},onAppearCancelled(e){k(e,!0),ji(T,[e])},onLeaveCancelled(e){S(e),ji(C,[e])}})}(e),t);Fi.displayName="Transition";const Ui={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Fi.props=y({},qt.props,Ui);const ji=(e,t=[])=>{I(e)?e.forEach((e=>e(...t))):e&&e(...t)},qi=e=>!!e&&(I(e)?e.some((e=>e.length>1)):e.length>1);function Bi(e){return K(e)}function Vi(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function Wi(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function Hi(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let zi=0;function $i(e,t,n,r){const i=e._endId=++zi,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=function(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r("transitionDelay"),s=r("transitionDuration"),o=Ki(i,s),a=r("animationDelay"),l=r("animationDuration"),c=Ki(a,l);let u=null,h=0,d=0;t===Mi?o>0&&(u=Mi,h=o,d=s.length):"animation"===t?c>0&&(u="animation",h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Mi:"animation":null,d=u?u===Mi?s.length:l.length:0);const p=u===Mi&&/\b(transform|all)(,|$)/.test(n.transitionProperty);return{type:u,timeout:h,propCount:d,hasTransform:p}}(e,t);if(!o)return r();const c=o+"end";let u=0;const h=()=>{e.removeEventListener(c,d),s()},d=t=>{t.target===e&&++u>=l&&h()};setTimeout((()=>{u<l&&h()}),a+1),e.addEventListener(c,d)}function Ki(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map(((t,n)=>Gi(t)+Gi(e[n]))))}function Gi(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}const Yi=e=>{const t=e.props["onUpdate:modelValue"];return I(t)?e=>z(t,e):t};function Ji(e){e.target.composing=!0}function Qi(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(t,"input"))}const Xi={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Yi(i);const s=r||i.props&&"number"===i.props.type;xi(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():s&&(r=K(r)),e._assign(r)})),n&&xi(e,"change",(()=>{e.value=e.value.trim()})),t||(xi(e,"compositionstart",Ji),xi(e,"compositionend",Qi),xi(e,"change",Qi))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=Yi(s),e.composing)return;if(document.activeElement===e){if(n)return;if(r&&e.value.trim()===t)return;if((i||"number"===e.type)&&K(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}},Zi={deep:!0,created(e,t,n){e._assign=Yi(n),xi(e,"change",(()=>{const t=e._modelValue,n=function(e){return"_value"in e?e._value:e.value}(e),r=e.checked,i=e._assign;if(I(t)){const e=c(t,n),s=-1!==e;if(r&&!s)i(t.concat(n));else if(!r&&s){const n=[...t];n.splice(e,1),i(n)}}else if(T(t)){const e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(ts(e,r))}))},mounted:es,beforeUpdate(e,t,n){e._assign=Yi(n),es(e,t,n)}};function es(e,{value:t,oldValue:n},r){e._modelValue=t,I(t)?e.checked=c(t,r.props.value)>-1:T(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=l(t,ts(e,!0)))}function ts(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const ns=["ctrl","shift","alt","meta"],rs={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ns.some((n=>e[`${n}Key`]&&!t.includes(n)))},is=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=rs[t[e]];if(r&&r(n,t))return}return e(n,...r)},ss=y({patchProp:(e,r,i,s,o=!1,a,l,c,u)=>{"class"===r?function(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,s,o):"style"===r?function(e,t,n){const r=e.style,i=r.display;if(n)if(P(n))t!==n&&(r.cssText=n);else{for(const e in n)Ii(r,e,n[e]);if(t&&!P(t))for(const e in t)null==n[e]&&Ii(r,e,"")}else e.removeAttribute("style");"_vod"in e&&(r.display=i)}(e,i,s):_(r)?v(r)||Ai(e,r,0,s,l):("."===r[0]?(r=r.slice(1),1):"^"===r[0]?(r=r.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&Li.test(t)&&S(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(Li.test(t)&&P(n))return!1;return t in e}(e,r,s,o))?function(e,t,r,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==r?"":r);if("value"===t&&"PROGRESS"!==e.tagName){e._value=r;const n=null==r?"":r;return e.value!==n&&(e.value=n),void(null==r&&e.removeAttribute(t))}if(""===r||null==r){const i=typeof e[t];if("boolean"===i)return void(e[t]=n(r));if(null==r&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(l){}return void e.removeAttribute(t)}}try{e[t]=r}catch(c){}}(e,r,s,a,l,c,u):("true-value"===r?e._trueValue=s:"false-value"===r&&(e._falseValue=s),function(e,r,i,s,o){if(s&&r.startsWith("xlink:"))null==i?e.removeAttributeNS(ki,r.slice(6,r.length)):e.setAttributeNS(ki,r,i);else{const s=t(r);null==i||s&&!n(i)?e.removeAttribute(r):e.setAttribute(r,s?"":i)}}(e,r,s,o))}},bi);let os;const as=(...e)=>{const t=(os||(os=Wn(ss))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(P(e)){return document.querySelector(e)}return e}(e);if(!r)return;const i=t._component;S(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function ls(){return"undefined"!=typeof navigator?window:"undefined"!=typeof global?global:{}}function cs(e,t){const n=ls().__VUE_DEVTOOLS_GLOBAL_HOOK__;if(n)n.emit("devtools-plugin:setup",e,t);else{const n=ls();(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:e,setupFn:t})}}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */function us(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function hs(e){return null!==e&&"object"==typeof e}function ds(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function ps(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;ms(e,n,[],e._modules.root,!0),fs(e,n,t)}function fs(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};us(i,(function(t,n){s[n]=function(e,t){return function(){return e(t)}}(t,e),Object.defineProperty(e.getters,n,{get:function(){return s[n]()},enumerable:!0})})),e._state=it({data:t}),e.strict&&function(e){di((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),r&&n&&e._withCommit((function(){r.data=null}))}function ms(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=_s(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=r.state}))}var c=r.context=function(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=vs(n,r,i),o=s.payload,a=s.options,l=s.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:r?e.commit:function(n,r,i){var s=vs(n,r,i),o=s.payload,a=s.options,l=s.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return gs(e,t)}},state:{get:function(){return _s(e.state,n)}}}),i}(e,o,n);r.forEachMutation((function(t,n){!function(e,t,n,r){(e._mutations[t]||(e._mutations[t]=[])).push((function(t){n.call(e,r.state,t)}))}(e,o+n,t,c)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;!function(e,t,n,r){(e._actions[t]||(e._actions[t]=[])).push((function(t){var i,s=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return(i=s)&&"function"==typeof i.then||(s=Promise.resolve(s)),e._devtoolHook?s.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):s}))}(e,r,i,c)})),r.forEachGetter((function(t,n){!function(e,t,n,r){if(e._wrappedGetters[t])return;e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}(e,o+n,t,c)})),r.forEachChild((function(r,s){ms(e,t,n.concat(s),r,i)}))}function gs(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function _s(e,t){return t.reduce((function(e,t){return e[t]}),e)}function vs(e,t,n){return hs(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var ys=0;function ws(e,t){cs({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:"vuex:mutations",label:"Vuex Mutations",color:bs}),n.addTimelineLayer({id:"vuex:actions",label:"Vuex Actions",color:bs}),n.addInspector({id:"vuex",label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&"vuex"===n.inspectorId)if(n.filter){var r=[];Ts(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[Es(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var r=n.nodeId;gs(t,r),n.state=function(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=function(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=ks((function(){return e[n]}))}else t[n]=ks((function(){return e[n]}))})),t}(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?Is(e):e,editable:!1,value:ks((function(){return s[e]}))}}))}return i}((i=t._modules,(o=(s=r).split("/").filter((function(e){return e}))).reduce((function(e,t,n){var r=e[t];if(!r)throw new Error('Missing module "'+t+'" for path "'+s+'".');return n===o.length-1?r:r._children}),"root"===s?i:i.root._children)),"root"===r?t.getters:t._makeLocalGettersCache,r)}var i,s,o})),n.on.editInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree("vuex"),n.sendInspectorState("vuex"),n.addTimelineEvent({layerId:"vuex:mutations",event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=ys++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var bs=8702998,Cs={label:"namespaced",textColor:16777215,backgroundColor:6710886};function Is(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function Es(e,t){return{id:t||"root",label:Is(t),tags:e.namespaced?[Cs]:[],children:Object.keys(e._children).map((function(n){return Es(e._children[n],t+n+"/")}))}}function Ts(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[Cs]:[]}),Object.keys(t._children).forEach((function(i){Ts(e,t._children[i],n,r+i+"/")}))}function ks(e){try{return e()}catch(t){return t}}var Ss=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"==typeof n?n():n)||{}},Ps={namespaced:{configurable:!0}};Ps.namespaced.get=function(){return!!this._rawModule.namespaced},Ss.prototype.addChild=function(e,t){this._children[e]=t},Ss.prototype.removeChild=function(e){delete this._children[e]},Ss.prototype.getChild=function(e){return this._children[e]},Ss.prototype.hasChild=function(e){return e in this._children},Ss.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Ss.prototype.forEachChild=function(e){us(this._children,e)},Ss.prototype.forEachGetter=function(e){this._rawModule.getters&&us(this._rawModule.getters,e)},Ss.prototype.forEachAction=function(e){this._rawModule.actions&&us(this._rawModule.actions,e)},Ss.prototype.forEachMutation=function(e){this._rawModule.mutations&&us(this._rawModule.mutations,e)},Object.defineProperties(Ss.prototype,Ps);var Rs=function(e){this.register([],e,!1)};function Ns(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;Ns(e.concat(r),t.getChild(r),n.modules[r])}}function Os(e){return new xs(e)}Rs.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Rs.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return e+((t=t.getChild(n)).namespaced?n+"/":"")}),"")},Rs.prototype.update=function(e){Ns([],this.root,e)},Rs.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new Ss(t,n);0===e.length?this.root=i:this.get(e.slice(0,-1)).addChild(e[e.length-1],i);t.modules&&us(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},Rs.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},Rs.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var xs=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Rs(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,o=this.dispatch,a=this.commit;this.dispatch=function(e,t){return o.call(s,e,t)},this.commit=function(e,t,n){return a.call(s,e,t,n)},this.strict=r;var l=this._modules.root.state;ms(this,l,[],this._modules.root),fs(this,l),n.forEach((function(e){return e(t)}))},As={state:{configurable:!0}};xs.prototype.install=function(e,t){e.provide(t||"store",this),e.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&ws(e,this)},As.state.get=function(){return this._state.data},As.state.set=function(e){},xs.prototype.commit=function(e,t,n){var r=this,i=vs(e,t,n),s=i.type,o=i.payload,a={type:s,payload:o},l=this._mutations[s];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},xs.prototype.dispatch=function(e,t){var n=this,r=vs(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(c){}var l=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(c){}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(c){}t(e)}))}))}},xs.prototype.subscribe=function(e,t){return ds(e,this._subscribers,t)},xs.prototype.subscribeAction=function(e,t){return ds("function"==typeof e?{before:e}:e,this._actionSubscribers,t)},xs.prototype.watch=function(e,t,n){var r=this;return di((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},xs.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},xs.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=[e]),this._modules.register(e,t),ms(this,this.state,e,this._modules.get(e),n.preserveState),fs(this,this.state)},xs.prototype.unregisterModule=function(e){var t=this;"string"==typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){delete _s(t.state,e.slice(0,-1))[e[e.length-1]]})),ps(this)},xs.prototype.hasModule=function(e){return"string"==typeof e&&(e=[e]),this._modules.isRegistered(e)},xs.prototype.hotUpdate=function(e){this._modules.update(e),ps(this,!0)},xs.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(xs.prototype,As);var Ds=Fs((function(e,t){var n={};return Ms(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=Us(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"==typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),Ls=Fs((function(e,t){var n={};return Ms(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||Us(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n}));function Ms(e){return function(e){return Array.isArray(e)||hs(e)}(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function Fs(e){return function(t,n){return"string"!=typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function Us(e,t,n){return e._modulesNamespaceMap[n]}
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
***************************************************************************** */var js=function(e,t){return(js=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function qs(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function Bs(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{l(r.next(e))}catch(t){s(t)}}function a(e){try{l(r.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))}function Vs(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function Ws(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Hs(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function zs(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}
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
 */var $s=!1,Ks="${JSCORE_VERSION}",Gs=function(e,t){if(!e)throw Ys(t)},Ys=function(e){return new Error("Firebase Database ("+Ks+") INTERNAL ASSERT FAILED: "+e)},Js=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Qs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|c>>6,p=63&c;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Js(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,l=++i<e.length?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==l)throw Error();var c=s<<2|o>>4;if(r.push(c),64!==a){var u=o<<4&240|a>>2;if(r.push(u),64!==l){var h=a<<6&192|l;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Xs=function(e){try{return Qs.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function Zs(e){return eo(void 0,e)}function eo(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=eo(e[n],t[n]));return e}
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
var to=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
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
 */function no(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function ro(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(no())}function io(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function so(){return!0===$s}
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
 */var oo=function(e){function t(n,r,i){var s=e.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,ao.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}js(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),ao=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,s=this.errors[e],o=s?lo(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",l=new oo(i,a,r);return l},e}();function lo(e,t){return e.replace(co,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var co=/\{\$([^}]+)}/g;
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
 */function uo(e){return JSON.parse(e)}function ho(e){return JSON.stringify(e)}
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
 */var po=function(e){var t={},n={},r={},i="";try{var s=e.split(".");t=uo(Xs(s[0])||""),n=uo(Xs(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(o){}return{header:t,claims:n,data:r,signature:i}};
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
function fo(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function mo(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function go(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function _o(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function vo(e,t){if(e===t)return!0;for(var n=Object.keys(e),r=Object.keys(t),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=e[o],l=t[o];if(yo(a)&&yo(l)){if(!vo(a,l))return!1}else if(a!==l)return!1}for(var c=0,u=r;c<u.length;c++){o=u[c];if(!n.includes(o))return!1}return!0}function yo(e){return null!==e&&"object"==typeof e}
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
 */function wo(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var s=i[r];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}function bo(e){var t={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=e.split("="),r=n[0],i=n[1];t[decodeURIComponent(r)]=decodeURIComponent(i)}})),t}function Co(e){var t=e.indexOf("?");if(!t)return"";var n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */var Io=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var s,o,a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],u=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(s=u^l&(c^u),o=1518500249):(s=l^c^u,o=1859775393):r<60?(s=l&c|u&(l|c),o=2400959708):(s=l^c^u,o=3395469782);i=(a<<5|a>>>27)+s+h+o+n[r]&4294967295;h=u,u=c,c=4294967295&(l<<30|l>>>2),l=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++r,++s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++r,++s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e},e}();var Eo=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=To),void 0===r.error&&(r.error=To),void 0===r.complete&&(r.complete=To);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function To(){}function ko(e,t){return e+" failed: "+t+" argument "}
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
 */var So=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
function Po(e){return e&&e._delegate?e._delegate:e}var Ro=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),No=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new to;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(u){}try{for(var r=Ws(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=Hs(i.value,2),o=s[0],a=s[1],l=this.normalizeInstanceIdentifier(o);try{var c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch(u){}}}catch(h){t={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Bs(this,void 0,void 0,(function(){var e;return Vs(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(zs(zs([],Hs(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Hs(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e="[DEFAULT]"),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=Ws(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var c=Hs(l.value,2),u=c[0],h=c[1];s===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(d){t={error:d}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=Ws(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(l){}}}catch(c){n={error:c}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
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
 */var Oo,xo,Ao,Do=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new No(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
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
***************************************************************************** */function Lo(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
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
 */(Ao=xo||(xo={}))[Ao.DEBUG=0]="DEBUG",Ao[Ao.VERBOSE=1]="VERBOSE",Ao[Ao.INFO=2]="INFO",Ao[Ao.WARN=3]="WARN",Ao[Ao.ERROR=4]="ERROR",Ao[Ao.SILENT=5]="SILENT";var Mo={debug:xo.DEBUG,verbose:xo.VERBOSE,info:xo.INFO,warn:xo.WARN,error:xo.ERROR,silent:xo.SILENT},Fo=xo.INFO,Uo=((Oo={})[xo.DEBUG]="log",Oo[xo.VERBOSE]="log",Oo[xo.INFO]="info",Oo[xo.WARN]="warn",Oo[xo.ERROR]="error",Oo),jo=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=Uo[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,Lo(["["+i+"]  "+e.name+":"],n))}},qo=function(){function e(e){this.name=e,this._logLevel=Fo,this._logHandler=jo,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in xo))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?Mo[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Lo([this,xo.DEBUG],e)),this._logHandler.apply(this,Lo([this,xo.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Lo([this,xo.VERBOSE],e)),this._logHandler.apply(this,Lo([this,xo.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Lo([this,xo.INFO],e)),this._logHandler.apply(this,Lo([this,xo.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Lo([this,xo.WARN],e)),this._logHandler.apply(this,Lo([this,xo.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Lo([this,xo.ERROR],e)),this._logHandler.apply(this,Lo([this,xo.ERROR],e))},e}();
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
class Bo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Vo=new qo("@firebase/app"),Wo={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Ho=new Map,zo=new Map;function $o(e,t){try{e.container.addComponent(t)}catch(n){Vo.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ko(e){const t=e.name;if(zo.has(t))return Vo.debug(`There were multiple attempts to register component ${t}.`),!1;zo.set(t,e);for(const n of Ho.values())$o(n,e);return!0}function Go(e,t){return e.container.getProvider(t)}
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
 */const Yo=new ao("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Jo{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ro("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yo.create("app-deleted",{appName:this._name})}}
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
 */function Qo(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Yo.create("bad-app-name",{appName:String(r)});const i=Ho.get(r);if(i){if(vo(e,i.options)&&vo(n,i.config))return i;throw Yo.create("duplicate-app",{appName:r})}const s=new Do(r);for(const a of zo.values())s.addComponent(a);const o=new Jo(e,n,s);return Ho.set(r,o),o}function Xo(e="[DEFAULT]"){const t=Ho.get(e);if(!t)throw Yo.create("no-app",{appName:e});return t}function Zo(e,t,n){var r;let i=null!==(r=Wo[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Vo.warn(e.join(" "))}Ko(new Ro(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
 */var ea;Ko(new Ro("platform-logger",(e=>new Bo(e)),"PRIVATE")),Zo("@firebase/app","0.7.0",ea),Zo("fire-js","");
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
Zo("firebase","9.0.2","app");
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
let ta="";
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
class na{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ho(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:uo(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
 */class ra{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return fo(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
 */const ia=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new na(t)}}catch(t){}return new ra},sa=ia("localStorage"),oa=ia("sessionStorage"),aa=new qo("@firebase/database"),la=function(){let e=1;return function(){return e++}}(),ca=function(e){const t=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var s=i-55296;r++,Gs(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(s<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),n=new Io;n.update(t);const r=n.digest();return Qs.encodeByteArray(r)},ua=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=ua.apply(null,r):t+="object"==typeof r?ho(r):r,t+=" "}return t};let ha=null,da=!0;const pa=function(...e){var t,n;if(!0===da&&(da=!1,null===ha&&!0===oa.get("logging_enabled")&&(t=!0,Gs(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(aa.logLevel=xo.VERBOSE,ha=aa.log.bind(aa),n&&oa.set("logging_enabled",!0)):"function"==typeof t?ha=t:(ha=null,oa.remove("logging_enabled")))),ha){const t=ua.apply(null,e);ha(t)}},fa=function(e){return function(...t){pa(e,...t)}},ma=function(...e){const t="FIREBASE INTERNAL ERROR: "+ua(...e);aa.error(t)},ga=function(...e){const t=`FIREBASE FATAL ERROR: ${ua(...e)}`;throw aa.error(t),new Error(t)},_a=function(...e){const t="FIREBASE WARNING: "+ua(...e);aa.warn(t)},va=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},ya="[MIN_NAME]",wa="[MAX_NAME]",ba=function(e,t){if(e===t)return 0;if(e===ya||t===wa)return-1;if(t===ya||e===wa)return 1;{const n=Ra(e),r=Ra(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},Ca=function(e,t){return e===t?0:e<t?-1:1},Ia=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ho(t))},Ea=function(e){if("object"!=typeof e||null===e)return ho(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=ho(t[r]),n+=":",n+=Ea(e[t[r]]);return n+="}",n},Ta=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function ka(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Sa=function(e){Gs(!va(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Pa=new RegExp("^-?(0*)\\d{1,10}$"),Ra=function(e){if(Pa.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Na=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw _a("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Oa=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
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
class xa{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){_a(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class Aa{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(pa("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',_a(e)}}class Da{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Da.OWNER="owner";
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
const La=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class Ma{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=sa.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&sa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Fa(e,t,n){let r;if(Gs("string"==typeof t,"typeof type must == string"),Gs("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return ka(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
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
 */class Ua{constructor(){this.counters_={}}incrementCounter(e,t=1){fo(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Zs(this.counters_)}}
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
 */const ja={},qa={};function Ba(e){const t=e.toString();return ja[t]||(ja[t]=new Ua),ja[t]}
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
class Va{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Na((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */class Wa{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fa(e),this.stats_=Ba(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Fa(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Va(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ha(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&La.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Wa.forceAllow_=!0}static forceDisallow(){Wa.forceDisallow_=!0}static isAvailable(){return!!Wa.forceAllow_||!(Wa.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ho(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(r=Js(t),Qs.encodeByteArray(r,!0));var r;const i=Ta(n,1840);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ho(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ha{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=la(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ha.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){pa("frame writing exception"),i.stack&&pa(i.stack),pa(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||pa("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{pa("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
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
 */let za=null;"undefined"!=typeof MozWebSocket?za=MozWebSocket:"undefined"!=typeof WebSocket&&(za=WebSocket);class $a{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fa(this.connId),this.stats_=Ba(t),this.connURL=$a.connectionURL_(t,s,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={v:"5"};return"undefined"!=typeof location&&location.hostname&&La.test(location.hostname)&&(i.r="f"),t&&(i.s=t),n&&(i.ls=n),r&&(i.ac=r),Fa(e,"websocket",i)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,sa.set("previous_websocket_failure",!0);try{if(so());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new za(this.connURL,[],e)}}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){$a.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==za&&!$a.forceDisallow_}static previouslyFailed(){return sa.isInMemoryStorage||!0===sa.get("previous_websocket_failure")}markConnectionHealthy(){sa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=uo(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Gs(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=ho(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ta(t,16384);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}$a.responsesRequiredToBeHealthy=2,$a.healthyTimeout=3e4;
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
class Ka{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Wa,$a]}initTransports_(e){const t=$a&&$a.isAvailable();let n=t&&!$a.previouslyFailed();if(e.webSocketOnly&&(t||_a("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[$a];else{const e=this.transports_=[];for(const t of Ka.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
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
 */class Ga{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fa("c:"+this.id+":"),this.transportManager_=new Ka(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Oa((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ia("t",e),n=Ia("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ia("t",e),n=Ia("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ia("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ma("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ma("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&_a("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Oa((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Oa((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(sa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class Ya{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class Ja{constructor(e){this.allowedEvents_=e,this.listeners_={},Gs(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){Gs(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
 */class Qa extends Ja{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ro()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Qa}getInitialEvent(e){return Gs("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */class Xa{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Za(){return new Xa("")}function el(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function tl(e){return e.pieces_.length-e.pieceNum_}function nl(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Xa(e.pieces_,t)}function rl(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function il(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function sl(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Xa(t,0)}function ol(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Xa)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Xa(n,0)}function al(e){return e.pieceNum_>=e.pieces_.length}function ll(e,t){const n=el(e),r=el(t);if(null===n)return t;if(n===r)return ll(nl(e),nl(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function cl(e,t){const n=il(e,0),r=il(t,0);for(let i=0;i<n.length&&i<r.length;i++){const e=ba(n[i],r[i]);if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function ul(e,t){if(tl(e)!==tl(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function hl(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(tl(e)>tl(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class dl{constructor(e,t){this.errorPrefix_=t,this.parts_=il(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=So(this.parts_[n]);pl(this)}}function pl(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+fl(e))}function fl(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class ml extends Ja{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new ml}getInitialEvent(e){return Gs("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */class gl extends Ya{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=gl.nextPersistentConnectionId_++,this.log_=fa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!so())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ml.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Qa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(ho(i)),Gs(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new to,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Gs(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Gs(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;gl.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&fo(e,"w")){const n=mo(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();_a(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){var t;(e&&40===e.length||"object"==typeof(t=po(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){var t=po(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Gs(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ho(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ma("Unrecognized action received from server: "+ho(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Gs(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+gl.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(e){Gs(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[e,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?pa("getToken() completed but was canceled"):(pa("getToken() completed. Creating connection."),this.authToken_=e&&e.accessToken,this.appCheckToken_=l&&l.token,a=new Ga(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,(e=>{_a(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&_a(e),l())}}}interrupt(e){pa("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){pa("Resuming connection for reason: "+e),delete this.interruptReasons_[e],go(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ea(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Xa(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){pa("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){pa("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+ta.replace(/\./g,"-")]=1,ro()?e["framework.cordova"]=1:io()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Qa.getInstance().currentlyOnline();return go(this.interruptReasons_)&&e}}gl.nextPersistentConnectionId_=0,gl.nextConnectionId_=0;
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
class _l{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new _l(e,t)}}
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
 */class vl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new _l(ya,e),r=new _l(ya,t);return 0!==this.compare(n,r)}minPost(){return _l.MIN}}
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
 */let yl;class wl extends vl{static get __EMPTY_NODE(){return yl}static set __EMPTY_NODE(e){yl=e}compare(e,t){return ba(e.name,t.name)}isDefinedOn(e){throw Ys("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return _l.MIN}maxPost(){return new _l(wa,yl)}makePost(e,t){return Gs("string"==typeof e,"KeyIndex indexValue must always be a string."),new _l(e,yl)}toString(){return".key"}}const bl=new wl;
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
 */class Cl{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Il{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Il.RED,this.left=null!=r?r:El.EMPTY_NODE,this.right=null!=i?i:El.EMPTY_NODE}copy(e,t,n,r,i){return new Il(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return El.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return El.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Il.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Il.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Il.RED=!0,Il.BLACK=!1;class El{constructor(e,t=El.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new El(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Il.BLACK,null,null))}remove(e){return new El(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Il.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Cl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Cl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Cl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Cl(this.root_,null,this.comparator_,!0,e)}}
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
function Tl(e,t){return ba(e.name,t.name)}function kl(e,t){return ba(e,t)}
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
 */let Sl;El.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new Il(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Pl=function(e){return"number"==typeof e?"number:"+Sa(e):"string:"+e},Rl=function(e){if(e.isLeafNode()){const t=e.val();Gs("string"==typeof t||"number"==typeof t||"object"==typeof t&&fo(t,".sv"),"Priority must be a string or number.")}else Gs(e===Sl||e.isEmpty(),"priority of unexpected type.");Gs(e===Sl||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Nl,Ol,xl;class Al{constructor(e,t=Al.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Gs(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Rl(this.priorityNode_)}static set __childrenNodeConstructor(e){Nl=e}static get __childrenNodeConstructor(){return Nl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Al(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Al.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return al(e)?this:".priority"===el(e)?this.priorityNode_:Al.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Al.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=el(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Gs(".priority"!==n||1===tl(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Al.__childrenNodeConstructor.EMPTY_NODE.updateChild(nl(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Pl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Sa(this.value_):this.value_,this.lazyHash_=ca(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Al.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Al.__childrenNodeConstructor?-1:(Gs(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=Al.VALUE_TYPE_ORDER.indexOf(t),i=Al.VALUE_TYPE_ORDER.indexOf(n);return Gs(r>=0,"Unknown leaf type: "+t),Gs(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Al.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Dl=new class extends vl{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?ba(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return _l.MIN}maxPost(){return new _l(wa,new Al("[PRIORITY-POST]",xl))}makePost(e,t){const n=Ol(e);return new _l(t,new Al("[PRIORITY-POST]",n))}toString(){return".priority"}},Ll=Math.log(2);
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
 */class Ml{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ll,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fl=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new Il(a,o.node,Il.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new Il(a,o.node,Il.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],h=n?n(u):u;l(new Il(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,Il.BLACK):(a(r,Il.BLACK),a(r,Il.RED))}return s}(new Ml(e.length));return new El(r||t,s)};
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
 */let Ul;const jl={};class ql{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Gs(jl&&Dl,"ChildrenNode.ts has not been loaded"),Ul=Ul||new ql({".priority":jl},{".priority":Dl}),Ul}get(e){const t=mo(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof El?t:null}hasIndex(e){return fo(this.indexSet_,e.toString())}addIndex(e,t){Gs(e!==bl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(_l.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?Fl(n,e.getCompare()):jl;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new ql(c,l)}addToIndexes(e,t){const n=_o(this.indexes_,((n,r)=>{const i=mo(this.indexSet_,r);if(Gs(i,"Missing index implementation for "+r),n===jl){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(_l.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),Fl(n,i.getCompare())}return jl}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new _l(e.name,r))),i.insert(e,e.node)}}));return new ql(n,this.indexSet_)}removeFromIndexes(e,t){const n=_o(this.indexes_,(n=>{if(n===jl)return n;{const r=t.get(e.name);return r?n.remove(new _l(e.name,r)):n}}));return new ql(n,this.indexSet_)}}
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
 */let Bl;class Vl{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Rl(this.priorityNode_),this.children_.isEmpty()&&Gs(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bl||(Bl=new Vl(new El(kl),null,ql.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bl}updatePriority(e){return this.children_.isEmpty()?this:new Vl(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?Bl:t}}getChild(e){const t=el(e);return null===t?this:this.getImmediateChild(t).getChild(nl(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Gs(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new _l(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?Bl:this.priorityNode_;return new Vl(r,s,i)}}updateChild(e,t){const n=el(e);if(null===n)return t;{Gs(".priority"!==el(e)||1===tl(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(nl(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Dl,((s,o)=>{t[s]=o.val(e),n++,i&&Vl.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Pl(this.getPriority().val())+":"),this.forEachChild(Dl,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":ca(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new _l(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new _l(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new _l(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,_l.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,_l.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Wl?-1:0}withIndex(e){if(e===bl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Vl(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===bl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Dl),n=t.getIterator(Dl);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===bl?null:this.indexMap_.get(e.toString())}}Vl.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Wl=new class extends Vl{constructor(){super(new El(kl),Vl.EMPTY_NODE,ql.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Vl.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(_l,{MIN:{value:new _l(ya,Vl.EMPTY_NODE)},MAX:{value:new _l(wa,Wl)}}),wl.__EMPTY_NODE=Vl.EMPTY_NODE,Al.__childrenNodeConstructor=Vl,Sl=Wl,function(e){xl=e}(Wl);function Hl(e,t=null){if(null===e)return Vl.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Gs(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Al(e,Hl(t))}if(e instanceof Array){let n=Vl.EMPTY_NODE;return ka(e,((t,r)=>{if(fo(e,t)&&"."!==t.substring(0,1)){const e=Hl(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Hl(t))}{const n=[];let r=!1;if(ka(e,((e,t)=>{if("."!==e.substring(0,1)){const i=Hl(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new _l(e,i)))}})),0===n.length)return Vl.EMPTY_NODE;const i=Fl(n,Tl,(e=>e.name),kl);if(r){const e=Fl(n,Dl.getCompare());return new Vl(i,Hl(t),new ql({".priority":e},{".priority":Dl}))}return new Vl(i,Hl(t),ql.Default)}}!function(e){Ol=e}(Hl);
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
class zl extends vl{constructor(e){super(),this.indexPath_=e,Gs(!al(e)&&".priority"!==el(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?ba(e.name,t.name):i}makePost(e,t){const n=Hl(e),r=Vl.EMPTY_NODE.updateChild(this.indexPath_,n);return new _l(t,r)}maxPost(){const e=Vl.EMPTY_NODE.updateChild(this.indexPath_,Wl);return new _l(wa,e)}toString(){return il(this.indexPath_,0).join("/")}}
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
 */const $l=new class extends vl{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?ba(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return _l.MIN}maxPost(){return _l.MAX}makePost(e,t){const n=Hl(e);return new _l(t,n)}toString(){return".value"}},Kl="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Gl=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Kl.charAt(n%64),n=Math.floor(n/64);Gs(0===n,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)o+=Kl.charAt(t[i]);return Gs(20===o.length,"nextPushId: Length should be 20."),o}}();
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
function Yl(e){return{type:"value",snapshotNode:e}}function Jl(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ql(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Xl(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Zl{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){Gs(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Ql(t,o)):Gs(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Jl(t,n)):s.trackChildChange(Xl(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Dl,((e,r)=>{t.hasChild(e)||n.trackChildChange(Ql(e,r))})),t.isLeafNode()||t.forEachChild(Dl,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Xl(t,r,i))}else n.trackChildChange(Jl(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Vl.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
 */class ec{constructor(e){this.indexedFilter_=new Zl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ec.getStartPost_(e),this.endPost_=ec.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,s){return this.matches(new _l(t,n))||(n=Vl.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Vl.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Vl.EMPTY_NODE);const i=this;return t.forEachChild(Dl,((e,t)=>{i.matches(new _l(e,t))||(r=r.updateImmediateChild(e,Vl.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
 */class tc{constructor(e){this.rangedFilter_=new ec(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new _l(t,n))||(n=Vl.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Vl.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=Vl.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,s;if(r=t.withIndex(this.index_),r=r.updatePriority(Vl.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else s=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&i(e,t)<=0&&(a=!0);a&&o<this.limit_&&i(t,n)<=0?o++:r=r.updateImmediateChild(t.name,Vl.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;Gs(o.numChildren()===this.limit_,"");const a=new _l(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:s(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(Xl(t,n,e)),o.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Ql(t,e));const n=o.updateImmediateChild(t,Vl.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(Jl(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=i&&(i.trackChildChange(Ql(l.name,l.node)),i.trackChildChange(Jl(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,Vl.EMPTY_NODE)):e}}
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
 */class nc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Dl}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Gs(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Gs(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ya}hasEnd(){return this.endSet_}getIndexEndValue(){return Gs(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Gs(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:wa}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Gs(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Dl}copy(){const e=new nc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function rc(e){const t={};if(e.isDefault())return t;let n;return e.index_===Dl?n="$priority":e.index_===$l?n="$value":e.index_===bl?n="$key":(Gs(e.index_ instanceof zl,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=ho(n),e.startSet_&&(t.startAt=ho(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+ho(e.indexStartName_))),e.endSet_&&(t.endAt=ho(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+ho(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ic(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Dl&&(t.i=e.index_.toString()),t}
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
 */class sc extends Ya{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=fa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Gs(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=sc.getListenId_(e,n),o={};this.listens_[s]=o;const a=rc(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),mo(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=sc.getListenId_(e,t);delete this.listens_[n]}get(e){const t=rc(e._queryParams),n=e._path.toString(),r=new to;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+wo(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=uo(o.responseText)}catch(e){_a("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&_a("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
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
 */class oc{constructor(){this.rootNode_=Vl.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function ac(){return{value:null,children:new Map}}function lc(e,t,n){if(al(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=el(t);e.children.has(r)||e.children.set(r,ac());lc(e.children.get(r),t=nl(t),n)}}function cc(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,r)=>{cc(r,new Xa(t.toString()+"/"+e),n)}))}class uc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ka(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
 */class hc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new uc(e);const n=1e4+2e4*Math.random();Oa(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;ka(e,((e,r)=>{r>0&&fo(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Oa(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
 */var dc,pc;function fc(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(pc=dc||(dc={}))[pc.OVERWRITE=0]="OVERWRITE",pc[pc.MERGE=1]="MERGE",pc[pc.ACK_USER_WRITE=2]="ACK_USER_WRITE",pc[pc.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class mc{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=dc.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(al(this.path)){if(null!=this.affectedTree.value)return Gs(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Xa(e));return new mc(Za(),t,this.revert)}}return Gs(el(this.path)===e,"operationForChild called for unrelated child."),new mc(nl(this.path),this.affectedTree,this.revert)}}
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
 */class gc{constructor(e,t){this.source=e,this.path=t,this.type=dc.LISTEN_COMPLETE}operationForChild(e){return al(this.path)?new gc(this.source,Za()):new gc(this.source,nl(this.path))}}
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
 */class _c{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=dc.OVERWRITE}operationForChild(e){return al(this.path)?new _c(this.source,Za(),this.snap.getImmediateChild(e)):new _c(this.source,nl(this.path),this.snap)}}
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
 */class vc{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=dc.MERGE}operationForChild(e){if(al(this.path)){const t=this.children.subtree(new Xa(e));return t.isEmpty()?null:t.value?new _c(this.source,Za(),t.value):new vc(this.source,Za(),t)}return Gs(el(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new vc(this.source,nl(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class yc{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(al(e))return this.isFullyInitialized()&&!this.filtered_;const t=el(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */class wc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function bc(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Ys("Should only compare child_ events.");const r=new _l(t.childName,t.snapshotNode),i=new _l(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Cc(e,t){return{eventCache:e,serverCache:t}}function Ic(e,t,n,r){return Cc(new yc(t,n,r),e.serverCache)}function Ec(e,t,n,r){return Cc(e.eventCache,new yc(t,n,r))}function Tc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function kc(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let Sc;class Pc{constructor(e,t=(()=>(Sc||(Sc=new El(Ca)),Sc))()){this.value=e,this.children=t}static fromObject(e){let t=new Pc(null);return ka(e,((e,n)=>{t=t.set(new Xa(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Za(),value:this.value};if(al(e))return null;{const n=el(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(nl(e),t);if(null!=i){return{path:ol(new Xa(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(al(e))return this;{const t=el(e),n=this.children.get(t);return null!==n?n.subtree(nl(e)):new Pc(null)}}set(e,t){if(al(e))return new Pc(t,this.children);{const n=el(e),r=(this.children.get(n)||new Pc(null)).set(nl(e),t),i=this.children.insert(n,r);return new Pc(this.value,i)}}remove(e){if(al(e))return this.children.isEmpty()?new Pc(null):new Pc(null,this.children);{const t=el(e),n=this.children.get(t);if(n){const r=n.remove(nl(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Pc(null):new Pc(this.value,i)}return this}}get(e){if(al(e))return this.value;{const t=el(e),n=this.children.get(t);return n?n.get(nl(e)):null}}setTree(e,t){if(al(e))return t;{const n=el(e),r=(this.children.get(n)||new Pc(null)).setTree(nl(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Pc(this.value,i)}}fold(e){return this.fold_(Za(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(ol(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Za(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(al(e))return null;{const r=el(e),i=this.children.get(r);return i?i.findOnPath_(nl(e),ol(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Za(),t)}foreachOnPath_(e,t,n){if(al(e))return this;{this.value&&n(t,this.value);const r=el(e),i=this.children.get(r);return i?i.foreachOnPath_(nl(e),ol(t,r),n):new Pc(null)}}foreach(e){this.foreach_(Za(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(ol(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
 */class Rc{constructor(e){this.writeTree_=e}static empty(){return new Rc(new Pc(null))}}function Nc(e,t,n){if(al(t))return new Rc(new Pc(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=ll(i,t);return s=s.updateChild(o,n),new Rc(e.writeTree_.set(i,s))}{const r=new Pc(n),i=e.writeTree_.setTree(t,r);return new Rc(i)}}}function Oc(e,t,n){let r=e;return ka(n,((e,n)=>{r=Nc(r,ol(t,e),n)})),r}function xc(e,t){if(al(t))return Rc.empty();{const n=e.writeTree_.setTree(t,new Pc(null));return new Rc(n)}}function Ac(e,t){return null!=Dc(e,t)}function Dc(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(ll(n.path,t)):null}function Lc(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Dl,((e,n)=>{t.push(new _l(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new _l(e,n.value))})),t}function Mc(e,t){if(al(t))return e;{const n=Dc(e,t);return new Rc(null!=n?new Pc(n):e.writeTree_.subtree(t))}}function Fc(e){return e.writeTree_.isEmpty()}function Uc(e,t){return jc(Za(),e.writeTree_,t)}function jc(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(Gs(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=jc(ol(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(ol(e,".priority"),r)),n}}
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
 */function qc(e,t){return Zc(t,e)}function Bc(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Gs(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&Vc(t,r.path)?i=!1:hl(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=Hc(e.allWrites,Wc,Za()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=xc(e.visibleWrites,r.path);else{ka(r.children,(t=>{e.visibleWrites=xc(e.visibleWrites,ol(r.path,t))}))}return!0}return!1}function Vc(e,t){if(e.snap)return hl(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&hl(ol(e.path,n),t))return!0;return!1}function Wc(e){return e.visible}function Hc(e,t,n){let r=Rc.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)hl(n,e)?(t=ll(n,e),r=Nc(r,t,s.snap)):hl(e,n)&&(t=ll(e,n),r=Nc(r,Za(),s.snap.getChild(t)));else{if(!s.children)throw Ys("WriteRecord should have .snap or .children");if(hl(n,e))t=ll(n,e),r=Oc(r,t,s.children);else if(hl(e,n))if(t=ll(e,n),al(t))r=Oc(r,Za(),s.children);else{const e=mo(s.children,el(t));if(e){const n=e.getChild(nl(t));r=Nc(r,Za(),n)}}}}}return r}function zc(e,t,n,r,i){if(r||i){const s=Mc(e.visibleWrites,t);if(!i&&Fc(s))return n;if(i||null!=n||Ac(s,Za())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(hl(e.path,t)||hl(t,e.path))};return Uc(Hc(e.allWrites,s,t),n||Vl.EMPTY_NODE)}return null}{const r=Dc(e.visibleWrites,t);if(null!=r)return r;{const r=Mc(e.visibleWrites,t);if(Fc(r))return n;if(null!=n||Ac(r,Za())){return Uc(r,n||Vl.EMPTY_NODE)}return null}}}function $c(e,t,n,r){return zc(e.writeTree,e.treePath,t,n,r)}function Kc(e,t){return function(e,t,n){let r=Vl.EMPTY_NODE;const i=Dc(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Dl,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Mc(e.visibleWrites,t);return n.forEachChild(Dl,((e,t)=>{const n=Uc(Mc(i,new Xa(e)),t);r=r.updateImmediateChild(e,n)})),Lc(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Lc(Mc(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function Gc(e,t,n,r){return function(e,t,n,r,i){Gs(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ol(t,n);if(Ac(e.visibleWrites,s))return null;{const t=Mc(e.visibleWrites,s);return Fc(t)?i.getChild(n):Uc(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Yc(e,t){return function(e,t){return Dc(e.visibleWrites,t)}(e.writeTree,ol(e.treePath,t))}function Jc(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=Mc(e.visibleWrites,t),c=Dc(l,Za());if(null!=c)a=c;else{if(null==n)return[];a=Uc(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function Qc(e,t,n){return function(e,t,n,r){const i=ol(t,n),s=Dc(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return Uc(Mc(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Xc(e,t){return Zc(ol(e.treePath,t),e.writeTree)}function Zc(e,t){return{treePath:e,writeTree:t}}
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
 */class eu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Gs("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Gs(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Xl(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Ql(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Jl(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Ys("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Xl(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */const tu=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class nu{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new yc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Qc(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:kc(this.viewCache_),i=Jc(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
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
 */function ru(e,t,n,r,i){const s=new eu;let o,a;if(n.type===dc.OVERWRITE){const l=n;l.source.fromUser?o=ou(e,t,l.path,l.snap,r,i,s):(Gs(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!al(l.path),o=su(e,t,l.path,l.snap,r,i,a,s))}else if(n.type===dc.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=ol(n,r);au(t,el(c))&&(a=ou(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=ol(n,r);au(t,el(c))||(a=ou(e,a,c,l,i,s,o))})),a}(e,t,l.path,l.children,r,i,s):(Gs(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=cu(e,t,l.path,l.children,r,i,a,s))}else if(n.type===dc.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=Yc(r,n))return t;{const a=new nu(r,t,i),l=t.eventCache.getNode();let c;if(al(n)||".priority"===el(n)){let n;if(t.serverCache.isFullyInitialized())n=$c(r,kc(t));else{const e=t.serverCache.getNode();Gs(e instanceof Vl,"serverChildren would be complete if leaf node"),n=Kc(r,e)}n=n,c=e.filter.updateFullNode(l,n,s)}else{const i=el(n);let u=Qc(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=l.getImmediateChild(i)),c=null!=u?e.filter.updateChild(l,i,u,nl(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,Vl.EMPTY_NODE,nl(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=$c(r,kc(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Yc(r,Za()),Ic(t,c,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=Yc(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(al(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return su(e,t,n,l.getNode().getChild(n),i,s,a,o);if(al(n)){let r=new Pc(null);return l.getNode().forEachChild(bl,((e,t)=>{r=r.set(new Xa(e),t)})),cu(e,t,n,r,i,s,a,o)}return t}{let c=new Pc(null);return r.foreach(((e,t)=>{const r=ol(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),cu(e,t,n,c,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==dc.LISTEN_COMPLETE)throw Ys("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=Ec(t,s.getNode(),s.isFullyInitialized()||al(n),s.isFiltered());return iu(e,o,n,r,tu,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Tc(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Yl(Tc(t)))}}(t,o,l),{viewCache:o,changes:l}}function iu(e,t,n,r,i,s){const o=t.eventCache;if(null!=Yc(r,n))return t;{let a,l;if(al(n))if(Gs(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=kc(t),i=Kc(r,n instanceof Vl?n:Vl.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=$c(r,kc(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=el(n);if(".priority"===c){Gs(1===tl(n),"Can't have a priority with additional path components");const i=o.getNode();l=t.serverCache.getNode();const s=Gc(r,n,i,l);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const u=nl(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=Gc(r,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=Qc(r,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,i,s):o.getNode()}}return Ic(t,a,o.isFullyInitialized()||al(n),e.filter.filtersNodes())}}function su(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(al(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=el(n);if(!l.isCompleteForPath(n)&&tl(n)>1)return t;const i=nl(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,i,tu,null)}const h=Ec(t,c,l.isFullyInitialized()||al(n),u.filtersNodes());return iu(e,h,n,i,new nu(i,h,s),a)}function ou(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new nu(i,t,s);if(al(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Ic(t,c,!0,e.filter.filtersNodes());else{const i=el(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=Ic(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=nl(n),c=a.getNode().getImmediateChild(i);let h;if(al(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===rl(s)&&e.getChild(sl(s)).isEmpty()?e:e.updateChild(s,r):Vl.EMPTY_NODE}if(c.equals(h))l=t;else{l=Ic(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function au(e,t){return e.eventCache.isCompleteForChild(t)}function lu(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function cu(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=al(n)?r:new Pc(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=lu(0,t.serverCache.getNode().getImmediateChild(n),r);c=su(e,c,new Xa(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!l){const l=lu(0,t.serverCache.getNode().getImmediateChild(n),r);c=su(e,c,new Xa(n),l,i,s,o,a)}})),c}class uu{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Zl(n.getIndex()),i=(s=n).loadsAllData()?new Zl(s.getIndex()):s.hasLimit()?new tc(s):new ec(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(Vl.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(Vl.EMPTY_NODE,a.getNode(),null),u=new yc(l,o.isFullyInitialized(),r.filtersNodes()),h=new yc(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Cc(h,u),this.eventGenerator_=new wc(this.query_)}get query(){return this.query_}}function hu(e,t){const n=kc(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!al(t)&&!n.getImmediateChild(el(t)).isEmpty())?n.getChild(t):null}function du(e){return 0===e.eventRegistrations_.length}function pu(e,t,n){const r=[];if(n){Gs(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function fu(e,t,n,r){t.type===dc.MERGE&&null!==t.source.queryId&&(Gs(kc(e.viewCache_),"We should always have a full cache before handling merges"),Gs(Tc(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=ru(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,Gs(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Gs(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Gs(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,mu(e,s.changes,s.viewCache.eventCache.getNode(),null)}function mu(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),bc(e,i,"child_removed",t,r,n),bc(e,i,"child_added",t,r,n),bc(e,i,"child_moved",s,r,n),bc(e,i,"child_changed",t,r,n),bc(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
 */let gu,_u;class vu{constructor(){this.views=new Map}}function yu(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return Gs(null!=s,"SyncTree gave us an op for an invalid query."),fu(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(fu(s,t,n,r));return i}}function wu(e,t,n,r,i,s){const o=function(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=$c(n,i?r:null),s=!1;e?s=!0:r instanceof Vl?(e=Kc(n,r),s=!1):(e=Vl.EMPTY_NODE,s=!1);const o=Cc(new yc(e,s,!1),new yc(r,i,!1));return new uu(t,o)}return o}(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Dl,((e,t)=>{r.push(Jl(e,t))}));return n.isFullyInitialized()&&r.push(Yl(n.getNode())),mu(e,r,n.getNode(),t)}(o,n)}function bu(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=ku(e);if("default"===i)for(const[l,c]of e.views.entries())o=o.concat(pu(c,n,r)),du(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(i);t&&(o=o.concat(pu(t,n,r)),du(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!ku(e)&&s.push(new(Gs(gu,"Reference.ts has not been loaded"),gu)(t._repo,t._path)),{removed:s,events:o}}function Cu(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Iu(e,t){let n=null;for(const r of e.views.values())n=n||hu(r,t);return n}function Eu(e,t){if(t._queryParams.loadsAllData())return Su(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Tu(e,t){return null!=Eu(e,t)}function ku(e){return null!=Su(e)}function Su(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */let Pu=1;class Ru{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pc(null),this.pendingWriteTree_={visibleWrites:Rc.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Nu(e,t,n,r,i){return function(e,t,n,r,i){Gs(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Nc(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Fu(e,new _c({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ou(e,t,n,r){!function(e,t,n,r){Gs(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Oc(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);const i=Pc.fromObject(n);return Fu(e,new vc({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function xu(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(Bc(e.pendingWriteTree_,t)){let t=new Pc(null);return null!=r.snap?t=t.set(Za(),!0):ka(r.children,(e=>{t=t.set(new Xa(e),!0)})),Fu(e,new mc(r.path,t,n))}return[]}function Au(e,t,n){return Fu(e,new _c({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Du(e,t,n,r){const i=t._path,s=e.syncPointTree_.get(i);let o=[];if(s&&("default"===t._queryIdentifier||Tu(s,t))){const a=bu(s,t,n,r);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(i,((e,t)=>ku(t)));if(c&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&ku(t)){return[Su(t)]}{let e=[];return t&&(e=Cu(t)),ka(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=qu(e,r);e.listenProvider_.startListening($u(i),Bu(e,i),s.hashFn,s.onComplete)}}}if(!u&&l.length>0&&!r)if(c){const n=null;e.listenProvider_.stopListening($u(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(Vu(t));e.listenProvider_.stopListening($u(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=Vu(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return o}function Lu(e,t,n){const r=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=ll(e,r);i=i||Iu(t,n),s=s||ku(t)}));let o,a=e.syncPointTree_.get(r);if(a?(s=s||ku(a),i=i||Iu(a,Za())):(a=new vu,e.syncPointTree_=e.syncPointTree_.set(r,a)),null!=i)o=!0;else{o=!1,i=Vl.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=Iu(t,Za());n&&(i=i.updateImmediateChild(e,n))}))}const l=Tu(a,t);if(!l&&!t._queryParams.loadsAllData()){const n=Vu(t);Gs(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Pu++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let c=wu(a,t,n,qc(e.pendingWriteTree_,r),i,o);if(!l&&!s){const n=Eu(a,t);c=c.concat(function(e,t,n){const r=t._path,i=Bu(e,t),s=qu(e,n),o=e.listenProvider_.startListening($u(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)Gs(!ku(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!al(e)&&t&&ku(t))return[Su(t).query];{let e=[];return t&&(e=e.concat(Cu(t).map((e=>e.query)))),ka(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening($u(r),Bu(e,r))}}return o}
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
 */(e,t,n))}return c}function Mu(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=Iu(n,ll(e,t));if(r)return r}));return zc(r,t,i,n,!0)}function Fu(e,t){return Uu(t,e.syncPointTree_,null,qc(e.pendingWriteTree_,Za()))}function Uu(e,t,n,r){if(al(e.path))return ju(e,t,n,r);{const i=t.get(Za());null==n&&null!=i&&(n=Iu(i,Za()));let s=[];const o=el(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Xc(r,o);s=s.concat(Uu(a,l,e,t))}return i&&(s=s.concat(yu(i,e,r,n))),s}}function ju(e,t,n,r){const i=t.get(Za());null==n&&null!=i&&(n=Iu(i,Za()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Xc(r,t),l=e.operationForChild(t);l&&(s=s.concat(ju(l,i,o,a)))})),i&&(s=s.concat(yu(i,e,r,n))),s}function qu(e,t){const n=t.query,r=Bu(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||Vl.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=Wu(e,n);if(r){const n=Hu(r),i=n.path,s=n.queryId,o=ll(i,t);return zu(e,i,new gc(fc(s),o))}return[]}(e,n._path,r):function(e,t){return Fu(e,new gc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Du(e,n,null,r)}}}}function Bu(e,t){const n=Vu(t);return e.queryToTagMap.get(n)}function Vu(e){return e._path.toString()+"$"+e._queryIdentifier}function Wu(e,t){return e.tagToQueryMap.get(t)}function Hu(e){const t=e.indexOf("$");return Gs(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Xa(e.substr(0,t))}}function zu(e,t,n){const r=e.syncPointTree_.get(t);Gs(r,"Missing sync point for query tag that we're tracking");return yu(r,n,qc(e.pendingWriteTree_,t),null)}function $u(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Gs(_u,"Reference.ts has not been loaded"),_u)(e._repo,e._path):e}class Ku{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ku(t)}node(){return this.node_}}class Gu{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ol(this.path_,e);return new Gu(this.syncTree_,t)}node(){return Mu(this.syncTree_,this.path_)}}const Yu=function(e,t,n){return e&&"object"==typeof e?(Gs(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Ju(e[".sv"],t,n):"object"==typeof e[".sv"]?Qu(e[".sv"],t):void Gs(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Ju=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:Gs(!1,"Unexpected server value: "+e)}},Qu=function(e,t,n){e.hasOwnProperty("increment")||Gs(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&Gs(!1,"Unexpected increment value: "+r);const i=t.node();if(Gs(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},Xu=function(e,t,n,r){return eh(t,new Gu(n,e),r)},Zu=function(e,t,n){return eh(e,new Ku(t),n)};function eh(e,t,n){const r=e.getPriority().val(),i=Yu(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Yu(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new Al(s,Hl(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new Al(i))),r.forEachChild(Dl,((e,r)=>{const i=eh(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
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
 */class th{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function nh(e,t){let n=t instanceof Xa?t:new Xa(t),r=e,i=el(n);for(;null!==i;){const e=mo(r.node.children,i)||{children:{},childCount:0};r=new th(i,r,e),n=nl(n),i=el(n)}return r}function rh(e){return e.node.value}function ih(e,t){e.node.value=t,ch(e)}function sh(e){return e.node.childCount>0}function oh(e,t){ka(e.node.children,((n,r)=>{t(new th(n,e,r))}))}function ah(e,t,n,r){n&&!r&&t(e),oh(e,(e=>{ah(e,t,!0,r)})),n&&r&&t(e)}function lh(e){return new Xa(null===e.parent?e.name:lh(e.parent)+"/"+e.name)}function ch(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===rh(e)&&!sh(e)}(n),i=fo(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,ch(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,ch(e))}
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
 */(e.parent,e.name,e)}const uh=/[\[\].#$\/\u0000-\u001F\u007F]/,hh=/[\[\].#$\u0000-\u001F\u007F]/,dh=function(e){return"string"==typeof e&&0!==e.length&&!uh.test(e)},ph=function(e){return"string"==typeof e&&0!==e.length&&!hh.test(e)},fh=function(e,t,n,r){r&&void 0===t||mh(ko(e,"value"),t,n)},mh=function(e,t,n){const r=n instanceof Xa?new dl(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+fl(r));if("function"==typeof t)throw new Error(e+"contains a function "+fl(r)+" with contents = "+t.toString());if(va(t))throw new Error(e+"contains "+t.toString()+" "+fl(r));if("string"==typeof t&&t.length>10485760/3&&So(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+fl(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(ka(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!dh(t)))throw new Error(e+" contains an invalid key ("+t+") "+fl(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=So(a),pl(o),mh(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=So(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+fl(r)+" in addition to actual children.")}},gh=function(e,t,n,r){if(r&&void 0===t)return;const i=ko(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];ka(t,((e,t)=>{const r=new Xa(e);if(mh(i,t,ol(n,r)),".priority"===rl(r)&&!(null===(o=t)||"string"==typeof o||"number"==typeof o&&!va(o)||o&&"object"==typeof o&&fo(o,".sv")))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");var o;s.push(r)})),function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=il(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!dh(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(cl);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&hl(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}}(i,s)},_h=function(e,t,n,r){if(!(r&&void 0===n||ph(n)))throw new Error(ko(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},vh=function(e,t){if(".info"===el(t))throw new Error(e+" failed = Can't modify data under /.info/")},yh=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!dh(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),ph(e)}(n))throw new Error(ko(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class wh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bh(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||ul(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Ch(e,t,n){bh(e,n),Eh(e,(e=>ul(e,t)))}function Ih(e,t,n){bh(e,n),Eh(e,(e=>hl(e,t)||hl(t,e)))}function Eh(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(Th(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Th(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();ha&&pa("event: "+n.toString()),Na(r)}}}
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
 */class kh{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new wh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ac(),this.transactionQueueTree_=new th,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Sh(e,t,n){if(e.stats_=Ba(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new sc(e.repoInfo_,((t,n,r,i)=>{Nh(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Oh(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ho(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new gl(e.repoInfo_,t,((t,n,r,i)=>{Nh(e,t,n,r,i)}),(t=>{Oh(e,t)}),(t=>{!function(e,t){ka(t,((t,n)=>{xh(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return qa[n]||(qa[n]=t()),qa[n]}(e.repoInfo_,(()=>new hc(e.stats_,e.server_))),e.infoData_=new oc,e.infoSyncTree_=new Ru({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Au(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),xh(e,"connected",!1),e.serverSyncTree_=new Ru({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);Ih(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Ph(e){const t=e.infoData_.getNode(new Xa(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Rh(e){return(t=(t={timestamp:Ph(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Nh(e,t,n,r,i){e.dataUpdateCount++;const s=new Xa(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=_o(n,(e=>Hl(e)));o=function(e,t,n,r){const i=Wu(e,r);if(i){const r=Hu(i),s=r.path,o=r.queryId,a=ll(s,t),l=Pc.fromObject(n);return zu(e,s,new vc(fc(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=Hl(n);o=function(e,t,n,r){const i=Wu(e,r);if(null!=i){const r=Hu(i),s=r.path,o=r.queryId,a=ll(s,t);return zu(e,s,new _c(fc(o),a,n))}return[]}(e.serverSyncTree_,s,t,i)}else if(r){const t=_o(n,(e=>Hl(e)));o=function(e,t,n){const r=Pc.fromObject(n);return Fu(e,new vc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=Hl(n);o=Au(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=jh(e,s)),Ih(e.eventQueue_,a,o)}function Oh(e,t){xh(e,"connected",t),!1===t&&function(e){Lh(e,"onDisconnectEvents");const t=Rh(e),n=ac();cc(e.onDisconnect_,Za(),((r,i)=>{const s=Xu(r,i,e.serverSyncTree_,t);lc(n,r,s)}));let r=[];cc(n,Za(),((t,n)=>{r=r.concat(Au(e.serverSyncTree_,t,n));const i=Hh(e,t);jh(e,i)})),e.onDisconnect_=ac(),Ih(e.eventQueue_,Za(),r)}(e)}function xh(e,t,n){const r=new Xa("/.info/"+t),i=Hl(n);e.infoData_.updateSnapshot(r,i);const s=Au(e.infoSyncTree_,r,i);Ih(e.eventQueue_,r,s)}function Ah(e){return e.nextWriteId_++}function Dh(e,t,n){let r;r=".info"===el(t._path)?Du(e.infoSyncTree_,t,n):Du(e.serverSyncTree_,t,n),Ch(e.eventQueue_,t._path,r)}function Lh(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),pa(n,...t)}function Mh(e,t,n,r){t&&Na((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function Fh(e,t,n){return Mu(e.serverSyncTree_,t,n)||Vl.EMPTY_NODE}function Uh(e,t=e.transactionQueueTree_){if(t||Wh(e,t),rh(t)){const n=Bh(e,t);Gs(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Fh(e,t,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const e=n[c];Gs(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=ll(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{Lh(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(xu(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Wh(e,nh(e.transactionQueueTree_,t)),Uh(e,e.transactionQueueTree_),Ih(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Na(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{_a("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}jh(e,t)}}),o)}(e,lh(t),n)}else sh(t)&&oh(t,(t=>{Uh(e,t)}))}function jh(e,t){const n=qh(e,t),r=lh(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=ll(n,l.path);let u,h=!1;if(Gs(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,i=i.concat(xu(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",i=i.concat(xu(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Fh(e,l.path,s);l.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){mh("transaction failed: Data returned ",r,l.path);let t=Hl(r);"object"==typeof r&&null!=r&&fo(r,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=Rh(e),c=Zu(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Ah(e),s.splice(s.indexOf(o),1),i=i.concat(Nu(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat(xu(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",i=i.concat(xu(e.serverSyncTree_,l.currentWriteId,!0))}Ih(e.eventQueue_,n,i),i=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;Wh(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)Na(r[a]);Uh(e,e.transactionQueueTree_)}(e,Bh(e,n),r),r}function qh(e,t){let n,r=e.transactionQueueTree_;for(n=el(t);null!==n&&void 0===rh(r);)r=nh(r,n),n=el(t=nl(t));return r}function Bh(e,t){const n=[];return Vh(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function Vh(e,t,n){const r=rh(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);oh(t,(t=>{Vh(e,t,n)}))}function Wh(e,t){const n=rh(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ih(t,n.length>0?n:void 0)}oh(t,(t=>{Wh(e,t)}))}function Hh(e,t){const n=lh(qh(e,t)),r=nh(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{zh(e,t)})),zh(e,r),ah(r,(t=>{zh(e,t)})),n}function zh(e,t){const n=rh(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Gs(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Gs(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(xu(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?ih(t,void 0):n.length=s+1,Ih(e.eventQueue_,lh(t),i);for(let e=0;e<r.length;e++)Na(r[e])}}
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
 */const $h=function(e,t){const n=Kh(e),r=n.namespace;"firebase.com"===n.domain&&ga(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||ga("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&_a("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Ma(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new Xa(n.pathString)}},Kh=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):_a(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
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
class Gh{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ho(this.snapshot.exportVal())}}class Yh{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
 */class Jh{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Gs(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
 */class Qh{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return al(this._path)?null:rl(this._path)}get ref(){return new Xh(this._repo,this._path)}get _queryIdentifier(){const e=ic(this._queryParams),t=Ea(e);return"{}"===t?"default":t}get _queryObject(){return ic(this._queryParams)}isEqual(e){if(!((e=Po(e))instanceof Qh))return!1;const t=this._repo===e._repo,n=ul(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Xh extends Qh{constructor(e,t){super(e,t,new nc,!1)}get parent(){const e=sl(this._path);return null===e?null:new Xh(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Zh{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Xa(e),n=td(this.ref,e);return new Zh(this._node.getChild(t),n,Dl)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Zh(n,td(this.ref,t),Dl))))}hasChild(e){const t=new Xa(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ed(e,t){return(e=Po(e))._checkNotDeleted("ref"),void 0!==t?td(e._root,t):e._root}function td(e,t){var n,r,i,s;return null===el((e=Po(e))._path)?(n="child",r="path",s=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),_h(n,r,i,s)):_h("child","path",t,!1),new Xh(e._repo,ol(e._path,t))}function nd(e,t){e=Po(e),vh("push",e._path),fh("push",t,e._path,!0);const n=Ph(e._repo),r=Gl(n),i=td(e,r),s=td(e,r);let o;return o=null!=t?rd(s,t).then((()=>s)):Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function rd(e,t){e=Po(e),vh("set",e._path),fh("set",t,e._path,!1);const n=new to;return function(e,t,n,r,i){Lh(e,"set",{path:t.toString(),value:n,priority:r});const s=Rh(e),o=Hl(n,r),a=Mu(e.serverSyncTree_,t),l=Zu(o,a,s),c=Ah(e),u=Nu(e.serverSyncTree_,t,l,c,!0);bh(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||_a("set at "+t+" failed: "+n);const o=xu(e.serverSyncTree_,c,!s);Ih(e.eventQueue_,t,o),Mh(0,i,n,r)}));const h=Hh(e,t);jh(e,h),Ih(e.eventQueue_,h,[])}(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function id(e,t){gh("update",t,e._path,!1);const n=new to;return function(e,t,n,r){Lh(e,"update",{path:t.toString(),value:n});let i=!0;const s=Rh(e),o={};if(ka(n,((n,r)=>{i=!1,o[n]=Xu(ol(t,n),Hl(r),e.serverSyncTree_,s)})),i)pa("update() called with empty data.  Don't do anything."),Mh(0,r,"ok",void 0);else{const i=Ah(e),s=Ou(e.serverSyncTree_,t,o,i);bh(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||_a("update at "+t+" failed: "+n);const a=xu(e.serverSyncTree_,i,!o),l=a.length>0?jh(e,t):t;Ih(e.eventQueue_,l,a),Mh(0,r,n,s)})),ka(n,(n=>{const r=Hh(e,ol(t,n));jh(e,r)})),Ih(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class sd{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Gh("value",this,new Zh(e.snapshotNode,new Xh(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Yh(this,e,t):null}matches(e){return e instanceof sd&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class od{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Yh(this,e,t):null}createEvent(e,t){Gs(null!=e.childName,"Child events should have a childName.");const n=td(new Xh(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new Gh(e.type,this,new Zh(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof od&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function ad(e,t,n,r,i){let s;if("object"==typeof r&&(s=void 0,i=r),"function"==typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Dh(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new Jh(n,s||void 0),a="value"===t?new sd(o):new od(t,o);return function(e,t,n){let r;r=".info"===el(t._path)?Lu(e.infoSyncTree_,t,n):Lu(e.serverSyncTree_,t,n),Ch(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>Dh(e._repo,e,a)}function ld(e,t,n,r){return ad(e,"value",t,n,r)}!function(e){Gs(!gu,"__referenceConstructor has already been defined"),gu=e}(Xh),function(e){Gs(!_u,"__referenceConstructor has already been defined"),_u=e}(Xh);
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
const cd={};function ud(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||ga("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),pa("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=$h(s,i),c=l.repoInfo;"undefined"!=typeof process&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=$h(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const u=i&&o?new Da(Da.OWNER):new Aa(e.name,e.options,t);yh("Invalid Firebase Database URL",l),al(l.path)||ga("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=cd[t.name];i||(i={},cd[t.name]=i);let s=i[e.toURLString()];s&&ga("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new kh(e,false,n,r),i[e.toURLString()]=s,s}(c,e,u,new xa(e.name,n));return new hd(h,e)}class hd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Sh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Xh(this._repo,Za())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=cd[t];n&&n[e.key]===e||ga(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&ga("Cannot call "+e+" on a deleted database.")}}function dd(e=Xo(),t){return Go(e,"database").getImmediate({identifier:t})}
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
gl.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},gl.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){ta="9.0.0",Ko(new Ro("database",((e,{instanceIdentifier:t})=>ud(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),Zo("@firebase/database","0.12.0",e)}();
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const pd="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,fd=e=>pd?Symbol(e):"_vr_"+e,md=fd("rvlm"),gd=fd("rvd"),_d=fd("r"),vd=fd("rl"),yd=fd("rvl"),wd="undefined"!=typeof window;const bd=Object.assign;function Cd(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const Id=()=>{},Ed=/\/$/;function Td(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),l=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),i=e(s)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function kd(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function Sd(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Pd(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Rd(e[n],t[n]))return!1;return!0}function Rd(e,t){return Array.isArray(e)?Nd(e,t):Array.isArray(t)?Nd(t,e):e===t}function Nd(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var Od,xd,Ad,Dd;function Ld(e){if(!e)if(wd){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(Ed,"")}(xd=Od||(Od={})).pop="pop",xd.push="push",(Dd=Ad||(Ad={})).back="back",Dd.forward="forward",Dd.unknown="";const Md=/^[^#]+#/;function Fd(e,t){return e.replace(Md,"#")+t}const Ud=()=>({left:window.pageXOffset,top:window.pageYOffset});function jd(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),i="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function qd(e,t){return(history.state?history.state.position-t:-1)+e}const Bd=new Map;function Vd(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),kd(n,"")}return kd(n,e)+r+i}function Wd(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Ud():null}}function Hd(e){const{history:t,location:n}=window,r={value:Vd(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[o?"replaceState":"pushState"](s,"",l),i.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:function(e,n){const o=bd({},i.value,t.state,{forward:e,scroll:Ud()});s(o.current,o,!0),s(e,bd({},Wd(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){s(e,bd({},t.state,Wd(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}}}function zd(e){const t=Hd(e=Ld(e)),n=function(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=Vd(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:u,type:Od.pop,direction:u?u>0?Ad.forward:Ad.back:Ad.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(bd({},e.state,{scroll:Ud()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:function(){o=n.value},listen:function(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace);const r=bd({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:Fd.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function $d(e){return"string"==typeof e||"symbol"==typeof e}const Kd={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gd=fd("nf");var Yd,Jd;function Qd(e,t){return bd(new Error,{type:e,[Gd]:!0},t)}function Xd(e,t){return e instanceof Error&&Gd in e&&(null==t||!!(e.type&t))}(Jd=Yd||(Yd={}))[Jd.aborted=4]="aborted",Jd[Jd.cancelled=8]="cancelled",Jd[Jd.duplicated=16]="duplicated";const Zd={sensitive:!1,strict:!1,start:!0,end:!0},ep=/[.+*?^${}()[\]/\\]/g;function tp(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function np(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const e=tp(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const rp={type:0,value:""},ip=/[a-zA-Z0-9_]/;function sp(e,t,n){const r=function(e,t){const n=bd({},Zd,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ep,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const h=u||"[^/]+?";if("[^/]+?"!==h){o+=10;try{new RegExp(`(${h})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+a.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=c&&l.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");return{re:o,score:r,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(Array.isArray(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=Array.isArray(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[rp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<e.length;)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ip.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}(e.path),n),i=bd(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function op(e,t){const n=[],r=new Map;function i(e,n,r){const a=!r,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ap(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);l.aliasOf=r&&r.record;const c=up(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(bd({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=sp(t,n,c),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!lp(h)&&s(e.name)),"children"in l){const e=l.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,o(h)}return d?()=>{s(d)}:Id}function s(e){if($d(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&np(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!lp(e)&&r.set(e.record.name,e)}return t=up({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:function(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Qd(1,{location:e});o=i.record.name,a=bd(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Qd(1,{location:e,currentLocation:t});o=i.record.name,a=bd({},t.params,e.params),s=i.stringify(a)}const l=[];let c=i;for(;c;)l.unshift(c.record),c=c.parent;return{name:o,path:s,params:a,matched:l,meta:cp(l)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function ap(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function lp(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function cp(e){return e.reduce(((e,t)=>bd(e,t.meta)),{})}function up(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const hp=/#/g,dp=/&/g,pp=/\//g,fp=/=/g,mp=/\?/g,gp=/\+/g,_p=/%5B/g,vp=/%5D/g,yp=/%5E/g,wp=/%60/g,bp=/%7B/g,Cp=/%7C/g,Ip=/%7D/g,Ep=/%20/g;function Tp(e){return encodeURI(""+e).replace(Cp,"|").replace(_p,"[").replace(vp,"]")}function kp(e){return Tp(e).replace(gp,"%2B").replace(Ep,"+").replace(hp,"%23").replace(dp,"%26").replace(wp,"`").replace(bp,"{").replace(Ip,"}").replace(yp,"^")}function Sp(e){return null==e?"":function(e){return Tp(e).replace(hp,"%23").replace(mp,"%3F")}(e).replace(pp,"%2F")}function Pp(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Rp(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(gp," "),i=e.indexOf("="),s=Pp(i<0?e:e.slice(0,i)),o=i<0?null:Pp(e.slice(i+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Np(e){let t="";for(let n in e){const r=e[n];if(n=kp(n).replace(fp,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&kp(e))):[r&&kp(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Op(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function xp(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Ap(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const l=e=>{var l;!1===e?a(Qd(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(l=e)||l&&"object"==typeof l?a(Qd(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"==typeof e&&s.push(e),o())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function Dp(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&i.push(Ap(s,n,r,o,e))}else{let s=a();i.push((()=>s.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=i).__esModule||pd&&"Module"===a[Symbol.toStringTag]?i.default:i;var a;o.components[e]=s;const l=(s.__vccOpts||s)[t];return l&&Ap(l,n,r,o,e)()}))))}}var s;return i}function Lp(e){const t=Ut(_d),n=Ut(vd),r=It((()=>t.resolve(yt(e.to)))),i=It((()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(Sd.bind(null,i));if(o>-1)return o;const a=Fp(e[t-2]);return t>1&&Fp(i)===a&&s[s.length-1].path!==a?s.findIndex(Sd.bind(null,e[t-2])):o})),s=It((()=>i.value>-1&&function(e,t){for(const n in t){const r=t[n],i=e[n];if("string"==typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}(n.params,r.value.params))),o=It((()=>i.value>-1&&i.value===n.matched.length-1&&Pd(n.params,r.value.params)));return{route:r,href:It((()=>r.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[yt(e.replace)?"replace":"push"](yt(e.to)).catch(Id):Promise.resolve()}}}const Mp=Kt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Lp,setup(e,{slots:t}){const n=it(Lp(e)),{options:r}=Ut(_d),i=It((()=>({[Up(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Up(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:_i("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Fp(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Up=(e,t,n)=>null!=e?e:null!=t?t:n;function jp(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const qp=Kt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Ut(yd),i=It((()=>e.route||r.value)),s=Ut(gd,0),o=It((()=>i.value.matched[s]));Ft(gd,s+1),Ft(md,o),Ft(yd,i);const a=gt();return di((()=>[a.value,o.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&Sd(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=i.value,s=o.value,l=s&&s.components[e.name],c=e.name;if(!l)return jp(n.default,{Component:l,route:r});const u=s.props[e.name],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=_i(l,bd({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(s.instances[c]=null)},ref:a}));return jp(n.default,{Component:d,route:r})||d}}});function Bp(e){const t=op(e.routes,e),n=e.parseQuery||Rp,r=e.stringifyQuery||Np,i=e.history,s=xp(),o=xp(),a=xp(),l=vt(Kd,!0);let c=Kd;wd&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Cd.bind(null,(e=>""+e)),h=Cd.bind(null,Sp),d=Cd.bind(null,Pp);function p(e,s){if(s=bd({},s||l.value),"string"==typeof e){const r=Td(n,e,s.path),o=t.resolve({path:r.path},s),a=i.createHref(r.fullPath);return bd(r,o,{params:d(o.params),hash:Pp(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=bd({},e,{path:Td(n,e.path,s.path).path});else{const t=bd({},e.params);for(const e in t)null==t[e]&&delete t[e];o=bd({},e,{params:h(e.params)}),s.params=h(s.params)}const a=t.resolve(o,s),c=e.hash||"";a.params=u(d(a.params));const p=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,bd({},e,{hash:(f=c,Tp(f).replace(bp,"{").replace(Ip,"}").replace(yp,"^")),path:a.path}));var f;const m=i.createHref(p);return bd({fullPath:p,hash:c,query:r===Np?Op(e.query):e.query||{}},a,{redirectedFrom:void 0,href:m})}function f(e){return"string"==typeof e?Td(n,e,l.value.path):bd({},e)}function m(e,t){if(c!==e)return Qd(8,{from:t,to:e})}function g(e){return v(e)}function _(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=f(r):{path:r},r.params={}),bd({query:e.query,hash:e.hash,params:e.params},r)}}function v(e,t){const n=c=p(e),i=l.value,s=e.state,o=e.force,a=!0===e.replace,u=_(n);if(u)return v(bd(f(u),{state:s,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Sd(t.matched[r],n.matched[i])&&Pd(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,i,n)&&(d=Qd(16,{to:h,from:i}),N(i,i,!0,!1)),(d?Promise.resolve(d):w(h,i)).catch((e=>Xd(e)?e:P(e,h,i))).then((e=>{if(e){if(Xd(e,2))return v(bd(f(e.to),{state:s,force:o,replace:a}),t||h)}else e=C(h,i,!0,a,s);return b(h,i,e),e}))}function y(e,t){const n=m(e,t);return n?Promise.reject(n):Promise.resolve()}function w(e,t){let n;const[r,i,a]=function(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>Sd(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>Sd(e,a)))||i.push(a))}return[n,r,i]}(e,t);n=Dp(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(Ap(r,e,t))}));const l=y.bind(null,e,t);return n.push(l),Vp(n).then((()=>{n=[];for(const r of s.list())n.push(Ap(r,e,t));return n.push(l),Vp(n)})).then((()=>{n=Dp(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Ap(r,e,t))}));return n.push(l),Vp(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ap(i,e,t));else n.push(Ap(r.beforeEnter,e,t));return n.push(l),Vp(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=Dp(a,"beforeRouteEnter",e,t),n.push(l),Vp(n)))).then((()=>{n=[];for(const r of o.list())n.push(Ap(r,e,t));return n.push(l),Vp(n)})).catch((e=>Xd(e,8)?e:Promise.reject(e)))}function b(e,t,n){for(const r of a.list())r(e,t,n)}function C(e,t,n,r,s){const o=m(e,t);if(o)return o;const a=t===Kd,c=wd?history.state:{};n&&(r||a?i.replace(e.fullPath,bd({scroll:a&&c&&c.scroll},s)):i.push(e.fullPath,s)),l.value=e,N(e,t,n,a),R()}let I;function E(){I=i.listen(((e,t,n)=>{const r=p(e),s=_(r);if(s)return void v(bd(s,{replace:!0}),r).catch(Id);c=r;const o=l.value;var a,u;wd&&(a=qd(o.fullPath,n.delta),u=Ud(),Bd.set(a,u)),w(r,o).catch((e=>Xd(e,12)?e:Xd(e,2)?(v(e.to,r).then((e=>{Xd(e,20)&&!n.delta&&n.type===Od.pop&&i.go(-1,!1)})).catch(Id),Promise.reject()):(n.delta&&i.go(-n.delta,!1),P(e,r,o)))).then((e=>{(e=e||C(r,o,!1))&&(n.delta?i.go(-n.delta,!1):n.type===Od.pop&&Xd(e,20)&&i.go(-1,!1)),b(r,o,e)})).catch(Id)}))}let T,k=xp(),S=xp();function P(e,t,n){R(e);const r=S.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function R(e){T||(T=!0,E(),k.list().forEach((([t,n])=>e?n(e):t())),k.reset())}function N(t,n,r,i){const{scrollBehavior:s}=e;if(!wd||!s)return Promise.resolve();const o=!r&&function(e){const t=Bd.get(e);return Bd.delete(e),t}(qd(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return ni().then((()=>s(t,n,o))).then((e=>e&&jd(e))).catch((e=>P(e,t,n)))}const O=e=>i.go(e);let x;const A=new Set;return{currentRoute:l,addRoute:function(e,n){let r,i;return $d(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:p,options:e,push:g,replace:function(e){return g(bd(f(e),{replace:!0}))},go:O,back:()=>O(-1),forward:()=>O(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:S.add,isReady:function(){return T&&l.value!==Kd?Promise.resolve():new Promise(((e,t)=>{k.add([e,t])}))},install(e){e.component("RouterLink",Mp),e.component("RouterView",qp),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>yt(l)}),wd&&!x&&l.value===Kd&&(x=!0,g(i.location).catch((e=>{})));const t={};for(const r in Kd)t[r]=It((()=>l.value[r]));e.provide(_d,this),e.provide(vd,it(t)),e.provide(yd,l);const n=e.unmount;A.add(e),e.unmount=function(){A.delete(e),A.size<1&&(c=Kd,I&&I(),l.value=Kd,x=!1,T=!1),n()}}}}function Vp(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function Wp(e,t){return nr(),ar("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[fr("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})])}function Hp(e,t){return nr(),ar("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[fr("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})])}function zp(e,t){return nr(),ar("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[fr("path",{"fill-rule":"evenodd",d:"M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z","clip-rule":"evenodd"})])}function $p(){return($p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Kp(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}function Gp(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yp(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return Gp(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gp(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function Jp(e,t){if(e in t){for(var n=t[e],r=arguments.length,i=new Array(r>2?r-2:0),s=2;s<r;s++)i[s-2]=arguments[s];return"function"==typeof n?n.apply(void 0,i):n}var o=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(t).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(o,Jp),o}var Qp,Xp,Zp,ef,tf,nf;function rf(e){var t,n,r=e.visible,i=void 0===r||r,s=e.features,o=void 0===s?Qp.None:s,a=Kp(e,["visible","features"]);return i||o&Qp.Static&&a.props.static?sf(a):o&Qp.RenderStrategy?Jp(null==(t=a.props.unmount)||t?Zp.Unmount:Zp.Hidden,((n={})[Zp.Unmount]=function(){return null},n[Zp.Hidden]=function(){return sf($p({},a,{props:$p({},a.props,{hidden:!0,style:{display:"none"}})}))},n)):sf(a)}function sf(e){var t,n=e.props,r=e.attrs,i=e.slots,s=e.slot,o=e.name,a=function(e,t){void 0===t&&(t=[]);for(var n,r=Object.assign({},e),i=Yp(t);!(n=i()).done;){var s=n.value;s in r&&delete r[s]}return r}(n,["unmount","static"]),l=a.as,c=Kp(a,["as"]),u=null==i.default?void 0:i.default(s);if("template"===l){if(Object.keys(c).length>0||Object.keys(r).length>0){var h=null!=u?u:[],d=h[0],p=h.slice(1);if(null==(t=d)||"string"!=typeof t.type&&"object"!=typeof t.type&&"function"!=typeof t.type||p.length>0)throw new Error(['Passing props on "template"!',"","The current component <"+o+' /> is rendering a "template".',"However we need to passthrough the following props:",Object.keys(c).concat(Object.keys(r)).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return mr(d,c)}return Array.isArray(u)&&1===u.length?u[0]:u}return _i(l,c,u)}(Xp=Qp||(Qp={}))[Xp.None=0]="None",Xp[Xp.RenderStrategy=1]="RenderStrategy",Xp[Xp.Static=2]="Static",(ef=Zp||(Zp={}))[ef.Unmount=0]="Unmount",ef[ef.Hidden=1]="Hidden",(nf=tf||(tf={})).Space=" ",nf.Enter="Enter",nf.Escape="Escape",nf.Backspace="Backspace",nf.ArrowLeft="ArrowLeft",nf.ArrowUp="ArrowUp",nf.ArrowRight="ArrowRight",nf.ArrowDown="ArrowDown",nf.Home="Home",nf.End="End",nf.PageUp="PageUp",nf.PageDown="PageDown",nf.Tab="Tab";var of,af,lf,cf,uf,hf,df,pf,ff,mf,gf=0;function _f(){return++gf}function vf(e){var t;return null==e||null==e.value?null:null!=(t=e.value.$el)?t:e.value}(af=of||(of={}))[af.First=1]="First",af[af.Previous=2]="Previous",af[af.Next=4]="Next",af[af.Last=8]="Last",af[af.WrapAround=16]="WrapAround",af[af.NoScroll=32]="NoScroll",(cf=lf||(lf={}))[cf.Error=0]="Error",cf[cf.Overflow=1]="Overflow",cf[cf.Success=2]="Success",cf[cf.Underflow=3]="Underflow",(hf=uf||(uf={}))[hf.Previous=-1]="Previous",hf[hf.Next=1]="Next",(pf=df||(df={}))[pf.Strict=0]="Strict",pf[pf.Loose=1]="Loose",(mf=ff||(ff={}))[mf.AddElement=0]="AddElement",mf[mf.RemoveElement=1]="RemoveElement";var yf,wf,bf,Cf,If,Ef,Tf=Symbol("Context");function kf(){return Ut(Tf,null)}function Sf(e){Ft(Tf,e)}function Pf(e,t){if(e)return e;var n=null!=t?t:"button";return"string"==typeof n&&"button"===n.toLowerCase()?"button":void 0}function Rf(e,t){var n=gt(Pf(e.value.type,e.value.as));return rn((function(){n.value=Pf(e.value.type,e.value.as)})),ui((function(){var e;n.value||vf(t)&&vf(t)instanceof HTMLButtonElement&&!(null==(e=vf(t))?void 0:e.hasAttribute("type"))&&(n.value="button")})),n}(wf=yf||(yf={}))[wf.Open=0]="Open",wf[wf.Closed=1]="Closed",(Cf=bf||(bf={}))[Cf.Open=0]="Open",Cf[Cf.Closed=1]="Closed",(Ef=If||(If={}))[Ef.Open=0]="Open",Ef[Ef.Closed=1]="Closed";var Nf=Symbol("DisclosureContext");function Of(e){var t=Ut(Nf,null);if(null===t){var n=new Error("<"+e+" /> is missing a parent <Disclosure /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,Of),n}return t}var xf=Symbol("DisclosurePanelContext");var Af,Df,Lf,Mf,Ff,Uf=Kt({name:"Disclosure",props:{as:{type:[Object,String],default:"template"},defaultOpen:{type:[Boolean],default:!1}},setup:function(e,t){var n=t.slots,r=t.attrs,i="headlessui-disclosure-button-"+_f(),s="headlessui-disclosure-panel-"+_f(),o=gt(e.defaultOpen?If.Open:If.Closed),a=gt(null),l=gt(null),c={buttonId:i,panelId:s,disclosureState:o,panel:a,button:l,toggleDisclosure:function(){var e;o.value=Jp(o.value,((e={})[If.Open]=If.Closed,e[If.Closed]=If.Open,e))},closeDisclosure:function(){o.value!==If.Closed&&(o.value=If.Closed)},close:function(e){c.closeDisclosure();var t=e?e instanceof HTMLElement?e:e.value instanceof HTMLElement?vf(e):vf(c.button):vf(c.button);null==t||t.focus()}};return Ft(Nf,c),Sf(It((function(){var e;return Jp(o.value,((e={})[If.Open]=yf.Open,e[If.Closed]=yf.Closed,e))}))),function(){return rf({props:Kp(e,["defaultOpen"]),slot:{open:o.value===If.Open,close:c.close},slots:n,attrs:r,name:"Disclosure"})}}}),jf=Kt({name:"DisclosureButton",props:{as:{type:[Object,String],default:"button"},disabled:{type:[Boolean],default:!1}},render:function(){var e=Of("DisclosureButton"),t={open:e.disclosureState.value===If.Open},n=this.isWithinPanel?{ref:"el",type:this.type,onClick:this.handleClick,onKeydown:this.handleKeyDown}:{id:this.id,ref:"el",type:this.type,"aria-expanded":this.$props.disabled?void 0:e.disclosureState.value===If.Open,"aria-controls":vf(e.panel)?e.panelId:void 0,disabled:!!this.$props.disabled||void 0,onClick:this.handleClick,onKeydown:this.handleKeyDown,onKeyup:this.handleKeyUp};return rf({props:$p({},this.$props,n),slot:t,attrs:this.$attrs,slots:this.$slots,name:"DisclosureButton"})},setup:function(e,t){var n=t.attrs,r=Of("DisclosureButton"),i=Ut(xf,null),s=null!==i&&i===r.panelId,o=gt(null);return s||ui((function(){r.button.value=o.value})),{isWithinPanel:s,id:r.buttonId,el:o,type:Rf(It((function(){return{as:e.as,type:n.type}})),o),handleClick:function(){var t;e.disabled||(s?(r.toggleDisclosure(),null==(t=vf(r.button))||t.focus()):r.toggleDisclosure())},handleKeyDown:function(t){var n;if(!e.disabled)if(s)switch(t.key){case tf.Space:case tf.Enter:t.preventDefault(),t.stopPropagation(),r.toggleDisclosure(),null==(n=vf(r.button))||n.focus()}else switch(t.key){case tf.Space:case tf.Enter:t.preventDefault(),t.stopPropagation(),r.toggleDisclosure()}},handleKeyUp:function(e){switch(e.key){case tf.Space:e.preventDefault()}}}}}),qf=Kt({name:"DisclosurePanel",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},render:function(){var e=Of("DisclosurePanel"),t={open:e.disclosureState.value===If.Open,close:e.close},n={id:this.id,ref:"el"};return rf({props:$p({},this.$props,n),slot:t,attrs:this.$attrs,slots:this.$slots,features:Qp.RenderStrategy|Qp.Static,visible:this.visible,name:"DisclosurePanel"})},setup:function(){var e=Of("DisclosurePanel");Ft(xf,e.panelId);var t=kf(),n=It((function(){return null!==t?t.value===yf.Open:e.disclosureState.value===If.Open}));return{id:e.panelId,el:e.panel,visible:n}}});function Bf(e,t){var n=t.resolveItems();if(n.length<=0)return null;var r=t.resolveActiveIndex(),i=null!=r?r:-1,s=function(){switch(e.focus){case Af.First:return n.findIndex((function(e){return!t.resolveDisabled(e)}));case Af.Previous:var r=n.slice().reverse().findIndex((function(e,n,r){return!(-1!==i&&r.length-n-1>=i)&&!t.resolveDisabled(e)}));return-1===r?r:n.length-1-r;case Af.Next:return n.findIndex((function(e,n){return!(n<=i)&&!t.resolveDisabled(e)}));case Af.Last:var s=n.slice().reverse().findIndex((function(e){return!t.resolveDisabled(e)}));return-1===s?s:n.length-1-s;case Af.Specific:return n.findIndex((function(n){return t.resolveId(n)===e.id}));case Af.Nothing:return null;default:!function(e){throw new Error("Unexpected object: "+e)}(e)}}();return-1===s?r:s}!function(e){e[e.First=0]="First",e[e.Previous=1]="Previous",e[e.Next=2]="Next",e[e.Last=3]="Last",e[e.Specific=4]="Specific",e[e.Nothing=5]="Nothing"}(Af||(Af={})),(Lf=Df||(Df={}))[Lf.Open=0]="Open",Lf[Lf.Closed=1]="Closed",(Ff=Mf||(Mf={}))[Ff.Open=0]="Open",Ff[Ff.Closed=1]="Closed";var Vf=Symbol("MenuContext");function Wf(e){var t=Ut(Vf,null);if(null===t){var n=new Error("<"+e+" /> is missing a parent <Menu /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,Wf),n}return t}var Hf,zf,$f,Kf,Gf,Yf,Jf,Qf,Xf=Kt({name:"Menu",props:{as:{type:[Object,String],default:"template"}},setup:function(e,t){var n,r,i,s=t.slots,o=t.attrs,a=gt(Mf.Closed),l=gt(null),c=gt(null),u=gt([]),h=gt(""),d=gt(null),p={menuState:a,buttonRef:l,itemsRef:c,items:u,searchQuery:h,activeItemIndex:d,closeMenu:function(){a.value=Mf.Closed,d.value=null},openMenu:function(){return a.value=Mf.Open},goToItem:function(e,t){var n=Bf(e===Af.Specific?{focus:Af.Specific,id:t}:{focus:e},{resolveItems:function(){return u.value},resolveActiveIndex:function(){return d.value},resolveId:function(e){return e.id},resolveDisabled:function(e){return e.dataRef.disabled}});""===h.value&&d.value===n||(h.value="",d.value=n)},search:function(e){h.value+=e.toLowerCase();var t=u.value.findIndex((function(e){return e.dataRef.textValue.startsWith(h.value)&&!e.dataRef.disabled}));-1!==t&&t!==d.value&&(d.value=t)},clearSearch:function(){h.value=""},registerItem:function(e,t){u.value.push({id:e,dataRef:t})},unregisterItem:function(e){var t=u.value.slice(),n=null!==d.value?t[d.value]:null,r=t.findIndex((function(t){return t.id===e}));-1!==r&&t.splice(r,1),u.value=t,d.value=r===d.value||null===n?null:t.indexOf(n)}};return n="mousedown",r=function(e){var t,n,r,i=e.target,s=document.activeElement;a.value===Mf.Open&&((null==(t=vf(l))?void 0:t.contains(i))||((null==(n=vf(c))?void 0:n.contains(i))||p.closeMenu(),s!==document.body&&(null==s?void 0:s.contains(i))||e.defaultPrevented||null==(r=vf(l))||r.focus({preventScroll:!0})))},window.addEventListener(n,r,i),ln((function(){return window.removeEventListener(n,r,i)})),Ft(Vf,p),Sf(It((function(){var e;return Jp(a.value,((e={})[Mf.Open]=yf.Open,e[Mf.Closed]=yf.Closed,e))}))),function(){var t={open:a.value===Mf.Open};return rf({props:e,slot:t,slots:s,attrs:o,name:"Menu"})}}}),Zf=Kt({name:"MenuButton",props:{disabled:{type:Boolean,default:!1},as:{type:[Object,String],default:"button"}},render:function(){var e,t=Wf("MenuButton"),n={open:t.menuState.value===Mf.Open},r={ref:"el",id:this.id,type:this.type,"aria-haspopup":!0,"aria-controls":null==(e=vf(t.itemsRef))?void 0:e.id,"aria-expanded":this.$props.disabled?void 0:t.menuState.value===Mf.Open,onKeydown:this.handleKeyDown,onKeyup:this.handleKeyUp,onClick:this.handleClick};return rf({props:$p({},this.$props,r),slot:n,attrs:this.$attrs,slots:this.$slots,name:"MenuButton"})},setup:function(e,t){var n=t.attrs,r=Wf("MenuButton");return{id:"headlessui-menu-button-"+_f(),el:r.buttonRef,type:Rf(It((function(){return{as:e.as,type:n.type}})),r.buttonRef),handleKeyDown:function(e){switch(e.key){case tf.Space:case tf.Enter:case tf.ArrowDown:e.preventDefault(),e.stopPropagation(),r.openMenu(),ni((function(){var e;null==(e=vf(r.itemsRef))||e.focus({preventScroll:!0}),r.goToItem(Af.First)}));break;case tf.ArrowUp:e.preventDefault(),e.stopPropagation(),r.openMenu(),ni((function(){var e;null==(e=vf(r.itemsRef))||e.focus({preventScroll:!0}),r.goToItem(Af.Last)}))}},handleKeyUp:function(e){switch(e.key){case tf.Space:e.preventDefault()}},handleClick:function(t){var n;e.disabled||(r.menuState.value===Mf.Open?(r.closeMenu(),ni((function(){var e;return null==(e=vf(r.buttonRef))?void 0:e.focus({preventScroll:!0})}))):(t.preventDefault(),t.stopPropagation(),r.openMenu(),n=function(){var e;return null==(e=vf(r.itemsRef))?void 0:e.focus({preventScroll:!0})},requestAnimationFrame((function(){return requestAnimationFrame(n)}))))}}}}),em=Kt({name:"MenuItems",props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},render:function(){var e,t,n=Wf("MenuItems"),r={open:n.menuState.value===Mf.Open},i={"aria-activedescendant":null===n.activeItemIndex.value||null==(e=n.items.value[n.activeItemIndex.value])?void 0:e.id,"aria-labelledby":null==(t=vf(n.buttonRef))?void 0:t.id,id:this.id,onKeydown:this.handleKeyDown,onKeyup:this.handleKeyUp,role:"menu",tabIndex:0,ref:"el"};return rf({props:$p({},this.$props,i),slot:r,attrs:this.$attrs,slots:this.$slots,features:Qp.RenderStrategy|Qp.Static,visible:this.visible,name:"MenuItems"})},setup:function(){var e,t,n,r,i,s=Wf("MenuItems"),o="headlessui-menu-items-"+_f(),a=gt(null);e={container:It((function(){return vf(s.itemsRef)})),enabled:It((function(){return s.menuState.value===Mf.Open})),accept:function(e){return"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk:function(e){e.setAttribute("role","none")}},t=e.container,n=e.accept,r=e.walk,i=e.enabled,ui((function(){var e=t.value;if(e&&(void 0===i||i.value))for(var s=Object.assign((function(e){return n(e)}),{acceptNode:n}),o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,s,!1);o.nextNode();)r(o.currentNode)}));var l=kf(),c=It((function(){return null!==l?l.value===yf.Open:s.menuState.value===Mf.Open}));return{id:o,el:s.itemsRef,handleKeyDown:function(e){switch(a.value&&clearTimeout(a.value),e.key){case tf.Space:if(""!==s.searchQuery.value)return e.preventDefault(),e.stopPropagation(),s.search(e.key);case tf.Enter:if(e.preventDefault(),e.stopPropagation(),null!==s.activeItemIndex.value){var t,n=s.items.value[s.activeItemIndex.value].id;null==(t=document.getElementById(n))||t.click()}s.closeMenu(),ni((function(){var e;return null==(e=vf(s.buttonRef))?void 0:e.focus({preventScroll:!0})}));break;case tf.ArrowDown:return e.preventDefault(),e.stopPropagation(),s.goToItem(Af.Next);case tf.ArrowUp:return e.preventDefault(),e.stopPropagation(),s.goToItem(Af.Previous);case tf.Home:case tf.PageUp:return e.preventDefault(),e.stopPropagation(),s.goToItem(Af.First);case tf.End:case tf.PageDown:return e.preventDefault(),e.stopPropagation(),s.goToItem(Af.Last);case tf.Escape:e.preventDefault(),e.stopPropagation(),s.closeMenu(),ni((function(){var e;return null==(e=vf(s.buttonRef))?void 0:e.focus({preventScroll:!0})}));break;case tf.Tab:e.preventDefault(),e.stopPropagation();break;default:1===e.key.length&&(s.search(e.key),a.value=setTimeout((function(){return s.clearSearch()}),350))}},handleKeyUp:function(e){switch(e.key){case tf.Space:e.preventDefault()}},visible:c}}}),tm=Kt({name:"MenuItem",props:{as:{type:[Object,String],default:"template"},disabled:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,r=t.attrs,i=Wf("MenuItem"),s="headlessui-menu-item-"+_f(),o=It((function(){return null!==i.activeItemIndex.value&&i.items.value[i.activeItemIndex.value].id===s})),a=gt({disabled:e.disabled,textValue:""});function l(t){if(e.disabled)return t.preventDefault();i.closeMenu(),ni((function(){var e;return null==(e=vf(i.buttonRef))?void 0:e.focus({preventScroll:!0})}))}function c(){if(e.disabled)return i.goToItem(Af.Nothing);i.goToItem(Af.Specific,s)}function u(){e.disabled||o.value||i.goToItem(Af.Specific,s)}function h(){e.disabled||o.value&&i.goToItem(Af.Nothing)}return rn((function(){var e,t,n=null==(e=document.getElementById(s))||null==(t=e.textContent)?void 0:t.toLowerCase().trim();void 0!==n&&(a.value.textValue=n)})),rn((function(){return i.registerItem(s,a)})),ln((function(){return i.unregisterItem(s)})),ui((function(){i.menuState.value===Mf.Open&&o.value&&ni((function(){var e;return null==(e=document.getElementById(s))||null==e.scrollIntoView?void 0:e.scrollIntoView({block:"nearest"})}))})),function(){var t=e.disabled,i={active:o.value,disabled:t};return rf({props:$p({},e,{id:s,role:"menuitem",tabIndex:!0===t?void 0:-1,"aria-disabled":!0===t||void 0,onClick:l,onFocus:c,onPointermove:u,onMousemove:u,onPointerleave:h,onMouseleave:h}),slot:i,attrs:r,slots:n,name:"MenuItem"})}}});function nm(e,t){return nr(),ar("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[fr("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"})])}function rm(e,t){return nr(),ar("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[fr("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})])}function im(e,t){return nr(),ar("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[fr("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})])}function sm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}(zf=Hf||(Hf={}))[zf.Open=0]="Open",zf[zf.Closed=1]="Closed",(Kf=$f||($f={}))[Kf.Empty=1]="Empty",Kf[Kf.Active=2]="Active",(Yf=Gf||(Gf={})).Finished="finished",Yf.Cancelled="cancelled",(Qf=Jf||(Jf={})).Visible="visible",Qf.Hidden="hidden",Qp.RenderStrategy;const om=sm,am=new ao("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),lm=new qo("@firebase/auth");function cm(e,...t){lm.logLevel<=xo.ERROR&&lm.error(`Auth (9.0.0): ${e}`,...t)}
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
 */function um(e,...t){throw pm(e,...t)}function hm(e,...t){return pm(e,...t)}function dm(e,t,n){const r=Object.assign(Object.assign({},om()),{[t]:n});return new ao("auth","Firebase",r).create(t,{appName:e.name})}function pm(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return am.create(e,...t)}function fm(e,t,...n){if(!e)throw pm(t,...n)}function mm(e){const t="INTERNAL ASSERTION FAILED: "+e;throw cm(t),new Error(t)}function gm(e,t){e||mm(t)}
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
 */const _m=new Map;function vm(e){gm(e instanceof Function,"Expected a class definition");let t=_m.get(e);return t?(gm(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_m.set(e,t),t)}
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
function ym(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function wm(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function bm(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==wm()&&"https:"!==wm()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
class Cm{constructor(e,t){this.shortDelay=e,this.longDelay=t,gm(t>e,"Short delay should be less than long delay!"),this.isMobile=ro()||io()}get(){return bm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Im(e,t){gm(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Em{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void mm("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void mm("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void mm("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const Tm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},km=new Cm(3e4,6e4);
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
 */function Sm(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Pm(e,t,n,r,i={}){return Rm(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=wo(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(Em.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),Em.fetch()(Om(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Rm(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Tm),t);try{const t=new xm(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Am(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Am(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Am(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw dm(e,a,o);um(e,a)}}catch(i){if(i instanceof oo)throw i;um(e,"network-request-failed")}}async function Nm(e,t,n,r,i={}){const s=await Pm(e,t,n,r,i);return"mfaPendingCredential"in s&&um(e,"multi-factor-auth-required",{serverResponse:s}),s}function Om(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Im(e.config,i):`${e.config.apiScheme}://${i}`}class xm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(hm(this.auth,"timeout"))),km.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Am(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=hm(e,t,r);return i.customData._tokenResponse=n,i}
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
function Dm(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Lm(e){return 1e3*Number(e)}function Mm(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return cm("JWT malformed, contained fewer than 3 sections"),null;try{const e=Xs(n);return e?JSON.parse(e):(cm("Failed to decode base64 JWT payload"),null)}catch(i){return cm("Caught error parsing JWT payload as JSON",i),null}}
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
async function Fm(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof oo&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Um{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class jm{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Dm(this.lastLoginAt),this.creationTime=Dm(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function qm(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Fm(e,async function(e,t){return Pm(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));fm(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=qs(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new jm(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
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
class Bm{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fm(e.idToken,"internal-error"),fm(void 0!==e.idToken,"internal-error"),fm(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Mm(e);return fm(t,"internal-error"),fm(void 0!==t.exp,"internal-error"),fm(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return fm(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Rm(e,{},(()=>{const n=wo({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Om(e,r,"/v1/token",`key=${i}`);return Em.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Bm;return n&&(fm("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(fm("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(fm("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Bm,this.toJSON())}_performRefresh(){return mm("not implemented")}}
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
 */function Vm(e,t){fm("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Wm{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=qs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Um(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new jm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Fm(this,this.stsTokenManager.getToken(this.auth,e));return fm(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Po(e),r=await n.getIdToken(t),i=Mm(r);fm(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Dm(Lm(i.auth_time)),issuedAtTime:Dm(Lm(i.iat)),expirationTime:Dm(Lm(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Po(e);await qm(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(fm(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Wm(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){fm(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await qm(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Fm(this,async function(e,t){return Pm(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,_=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:y,isAnonymous:w,providerData:b,stsTokenManager:C}=t;fm(v&&C,e,"internal-error");const I=Bm.fromJSON(this.name,C);fm("string"==typeof v,e,"internal-error"),Vm(u,e.name),Vm(h,e.name),fm("boolean"==typeof y,e,"internal-error"),fm("boolean"==typeof w,e,"internal-error"),Vm(d,e.name),Vm(p,e.name),Vm(f,e.name),Vm(m,e.name),Vm(g,e.name),Vm(_,e.name);const E=new Wm({uid:v,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:I,createdAt:g,lastLoginAt:_});return b&&Array.isArray(b)&&(E.providerData=b.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new Bm;r.updateFromServerResponse(t);const i=new Wm({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await qm(i),i}}
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
 */class Hm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hm.type="NONE";const zm=Hm;
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
 */function $m(e,t,n){return`firebase:${e}:${t}:${n}`}class Km{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=$m(this.userKey,r.apiKey,i),this.fullPersistenceKey=$m("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wm._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Km(vm(zm),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||vm(zm);const s=$m(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=Wm._fromJSON(e,t);c!==i&&(o=n),i=c;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new Km(i,e,n)):new Km(i,e,n)}}
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
 */function Gm(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Xm(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Ym(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(eg(t))return"Blackberry";if(tg(t))return"Webos";if(Jm(t))return"Safari";if((t.includes("chrome/")||Qm(t))&&!t.includes("edge/"))return"Chrome";if(Zm(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Ym(e=no()){return/firefox\//i.test(e)}function Jm(e=no()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Qm(e=no()){return/crios\//i.test(e)}function Xm(e=no()){return/iemobile/i.test(e)}function Zm(e=no()){return/android/i.test(e)}function eg(e=no()){return/blackberry/i.test(e)}function tg(e=no()){return/webos/i.test(e)}function ng(e=no()){return/iphone|ipad|ipod/i.test(e)}function rg(){return((e=no()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function ig(e=no()){return ng(e)||Zm(e)||tg(e)||eg(e)||/windows phone/i.test(e)||Xm(e)}
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
function sg(e,t=[]){let n;switch(e){case"Browser":n=Gm(no());break;case"Worker":n=`${Gm(no())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class og{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lg(this),this.idTokenSubscription=new lg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=am,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vm(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await Km.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(fm(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qm(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Po(e):null;return t&&fm(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&fm(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(vm(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ao("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vm(e)||this._popupRedirectResolver;fm(t,this,"argument-error"),this.redirectPersistenceManager=await Km.create(this,[vm(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return fm(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fm(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ag(e){return Po(e)}class lg{constructor(e){var t,n;this.auth=e,this.observer=null,this.addObserver=(n=new Eo((e=>this.observer=e),t)).subscribe.bind(n)}get next(){return fm(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */class cg{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mm("not implemented")}_getIdTokenResponse(e){return mm("not implemented")}_linkToIdToken(e,t){return mm("not implemented")}_getReauthenticationResolver(e){return mm("not implemented")}}
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
class ug extends cg{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new ug(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new ug(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return Nm(e,"POST","/v1/accounts:signInWithPassword",Sm(e,t))}
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
 */(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Nm(e,"POST","/v1/accounts:signInWithEmailLink",Sm(e,t))}(e,{email:this._email,oobCode:this._password});default:um(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return async function(e,t){return Pm(e,"POST","/v1/accounts:update",t)}(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Nm(e,"POST","/v1/accounts:signInWithEmailLink",Sm(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:um(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function hg(e,t){return Nm(e,"POST","/v1/accounts:signInWithIdp",Sm(e,t))}
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
 */class dg extends cg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new dg(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):um("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=qs(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new dg(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){return hg(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,hg(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hg(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wo(t)}return e}}
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
 */class pg{constructor(e){var t,n,r,i,s,o;const a=bo(Co(e)),l=null!==(t=a.apiKey)&&void 0!==t?t:null,c=null!==(n=a.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=a.mode)&&void 0!==r?r:null);fm(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(i=a.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=a.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(o=a.tenantId)&&void 0!==o?o:null}static parseLink(e){const t=function(e){const t=bo(Co(e)).link,n=t?bo(Co(t)).deep_link_id:null,r=bo(Co(e)).deep_link_id;return(r?bo(Co(r)).link:null)||r||n||t||e}(e);try{return new pg(t)}catch(n){return null}}}
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
 */class fg{constructor(){this.providerId=fg.PROVIDER_ID}static credential(e,t){return ug._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=pg.parseLink(t);return fm(n,"argument-error"),ug._fromEmailAndCode(e,n.code,n.tenantId)}}fg.PROVIDER_ID="password",fg.EMAIL_PASSWORD_SIGN_IN_METHOD="password",fg.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class mg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class gg extends mg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class _g extends gg{constructor(){super("facebook.com")}static credential(e){return dg._fromParams({providerId:_g.PROVIDER_ID,signInMethod:_g.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _g.credentialFromTaggedObject(e)}static credentialFromError(e){return _g.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return _g.credential(e.oauthAccessToken)}catch(t){return null}}}_g.FACEBOOK_SIGN_IN_METHOD="facebook.com",_g.PROVIDER_ID="facebook.com";
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
class vg extends gg{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return dg._fromParams({providerId:vg.PROVIDER_ID,signInMethod:vg.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return vg.credentialFromTaggedObject(e)}static credentialFromError(e){return vg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return vg.credential(t,n)}catch(r){return null}}}vg.GOOGLE_SIGN_IN_METHOD="google.com",vg.PROVIDER_ID="google.com";
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
class yg extends gg{constructor(){super("github.com")}static credential(e){return dg._fromParams({providerId:yg.PROVIDER_ID,signInMethod:yg.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yg.credentialFromTaggedObject(e)}static credentialFromError(e){return yg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return yg.credential(e.oauthAccessToken)}catch(t){return null}}}yg.GITHUB_SIGN_IN_METHOD="github.com",yg.PROVIDER_ID="github.com";
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
class wg extends gg{constructor(){super("twitter.com")}static credential(e,t){return dg._fromParams({providerId:wg.PROVIDER_ID,signInMethod:wg.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return wg.credentialFromTaggedObject(e)}static credentialFromError(e){return wg.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return wg.credential(t,n)}catch(r){return null}}}wg.TWITTER_SIGN_IN_METHOD="twitter.com",wg.PROVIDER_ID="twitter.com";
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
class bg{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Wm._fromIdTokenResponse(e,n,r),s=Cg(n);return new bg({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Cg(n);return new bg({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Cg(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class Ig extends oo{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Ig.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Ig(e,t,n,r)}}function Eg(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ig._fromErrorAndOperation(e,n,t,r);throw n}))}
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
async function Tg(e,t,n=!1){const r="signIn",i=await Eg(e,r,t),s=await bg._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function kg(e,t,n){const r=ag(e),i=await
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
async function(e,t){return Nm(e,"POST","/v1/accounts:signUp",Sm(e,t))}(r,{returnSecureToken:!0,email:t,password:n}),s=await bg._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Sg(e,t,n){return async function(e,t){return Tg(ag(e),t)}(Po(e),fg.credential(t,n))}
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
class Pg{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
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
 */class Rg extends Pg{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=no();return Jm(e)||ng(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=ig(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);rg()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Rg.type="LOCAL";const Ng=Rg;
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
 */class Og extends Pg{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Og.type="SESSION";const xg=Og;
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
class Ag{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Ag(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Dg(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Ag.receivers=[];class Lg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=Dg("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Mg(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
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
function Fg(){return void 0!==Mg().WorkerGlobalScope&&"function"==typeof Mg().importScripts}
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
const Ug="firebaseLocalStorageDb";class jg{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function qg(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Bg(){const e=indexedDB.open(Ug,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Ug);return new jg(e).toPromise()}(),t(await Bg()))}))}))}async function Vg(e,t,n){const r=qg(e,!0).put({fbase_key:t,value:n});return new jg(r).toPromise()}function Wg(e,t){const n=qg(e,!0).delete(t);return new jg(n).toPromise()}class Hg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Bg()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ag._getInstance(Fg()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Lg(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bg();return await Vg(e,"__sak","1"),await Wg(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Vg(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=qg(e,!1).get(t),r=await new jg(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Wg(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=qg(e,!1).getAll();return new jg(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Hg.type="LOCAL";const zg=Hg;
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
 */function $g(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=hm("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}
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
function Kg(e,t){return t?vm(t):(fm(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */new Cm(3e4,6e4);class Gg extends cg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hg(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hg(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hg(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Yg(e){return Tg(e.auth,new Gg(e),e.bypassAuthState)}function Jg(e){const{auth:t,user:n}=e;return fm(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Fm(e,Eg(r,i,t,e),n);fm(s.idToken,r,"internal-error");const o=Mm(s.idToken);fm(o,r,"internal-error");const{sub:a}=o;return fm(e.uid===a,r,"user-mismatch"),bg._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&um(r,"user-mismatch"),s}}(n,new Gg(e),e.bypassAuthState)}async function Qg(e){const{auth:t,user:n}=e;return fm(n,t,"internal-error"),async function(e,t,n=!1){const r=await Fm(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return bg._forOperation(e,"link",r)}(n,new Gg(e),e.bypassAuthState)}
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
 */class Xg{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yg;case"linkViaPopup":case"linkViaRedirect":return Qg;case"reauthViaPopup":case"reauthViaRedirect":return Jg;default:um(this.auth,"internal-error")}}resolve(e){gm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gm(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Zg=new Cm(2e3,1e4);async function e_(e,t,n){const r=ag(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&um(e,"argument-error"),dm(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,mg);const i=Kg(r,n);return new t_(r,"signInViaPopup",t,i).executeNotNull()}class t_ extends Xg{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,t_.currentPopupAction&&t_.currentPopupAction.cancel(),t_.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fm(e,this.auth,"internal-error"),e}async onExecution(){gm(1===this.filter.length,"Popup operations only handle one event");const e=Dg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(hm(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(hm(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,t_.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(hm(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Zg.get())};e()}}t_.currentPopupAction=null;
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
const n_=new Map;class r_ extends Xg{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=n_.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return $m("pendingRedirect",e.config.apiKey,e.name)}(t),r="true"===await i_(e)._get(n);return await i_(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}n_.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function i_(e){return vm(e._redirectPersistence)}async function s_(e,t,n=!1){const r=ag(e),i=Kg(r,t),s=new r_(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */class o_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return l_(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!l_(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(hm(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(a_(e))}saveEventToCache(e){this.cachedEventUids.add(a_(e)),this.lastProcessedEventTime=Date.now()}}function a_(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function l_({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const c_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,u_=/^https?/;async function h_(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Pm(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(d_(r))return}catch(n){}um(e,"unauthorized-domain")}function d_(e){const t=ym(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!u_.test(n))return!1;if(c_.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const p_=new Cm(3e4,6e4);function f_(){const e=Mg().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function m_(e){return new Promise(((t,n)=>{var r,i,s;function o(){f_(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{f_(),n(hm(e,"network-request-failed"))},timeout:p_.get()})}if(null===(i=null===(r=Mg().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Mg().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Mg()[t]=()=>{gapi.load?o():n(hm(e,"network-request-failed"))},$g(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw g_=null,e}))}let g_=null;
/**
 * @license
 * Copyright 2020 Google LLC.
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
const __=new Cm(5e3,15e3),v_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},y_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function w_(e){const t=e.config;fm(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Im(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.0.0"},i=y_.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${wo(r).slice(1)}`}async function b_(e){const t=await function(e){return g_=g_||m_(e),g_}(e),n=Mg().gapi;return fm(n,e,"internal-error"),t.open({where:document.body,url:w_(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:v_,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=hm(e,"network-request-failed"),s=Mg().setTimeout((()=>{r(i)}),__.get());function o(){Mg().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const C_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class I_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function E_(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},C_),{width:r.toString(),height:i.toString(),top:s,left:o}),c=no().toLowerCase();n&&(a=Qm(c)?"_blank":n),Ym(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=no()){var t;return ng(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new I_(null);const h=window.open(t||"",a,u);fm(h,e,"popup-blocked");try{h.focus()}catch(d){}return new I_(h)}function T_(e,t,n,r,i,s){fm(e.config.authDomain,e,"auth-domain-config-required"),fm(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.0.0",eventId:i};if(t instanceof mg){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",go(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof gg){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))void 0===a[l]&&delete a[l];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return Im(e,"emulator/auth/handler")}
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
 */(e)}?${wo(a).slice(1)}`}const k_=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xg,this._completeRedirectFn=s_}async _openPopup(e,t,n,r){var i;gm(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return E_(e,T_(e,t,n,ym(),r),Dg())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=T_(e,t,n,ym(),r),Mg().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(gm(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await b_(e),n=new o_(e);return t.register("authEvent",(t=>{fm(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),um(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=h_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ig()||Jm()||ng()}};var S_;
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
class P_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){fm(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
function R_(e=Xo()){const t=Go(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Go(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(vo(n.getOptions(),null!=t?t:{}))return e;um(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:k_,persistence:[zg,Ng,xg]})}S_="Browser",Ko(new Ro("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{fm(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),fm(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:S_,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sg(S_)},s=new og(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vm);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Ko(new Ro("auth-internal",(e=>{const t=ag(e.getProvider("auth").getImmediate());return new P_(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Zo("@firebase/auth","0.17.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(S_));
/*!
 * qrcode.vue v3.3.1
 * A Vue.js component to generate QRCode.
 * © 2017-2021 @scopewu(https://github.com/scopewu)
 * MIT License.
 */
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
var N_=function(){return(N_=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},O_={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},x_=O_;function A_(e){this.mode=x_.MODE_8BIT_BYTE,this.data=e}A_.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}};var D_=A_,L_={L:1,M:0,Q:3,H:2},M_=L_;function F_(e,t){this.totalCount=e,this.dataCount=t}F_.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],F_.getRSBlocks=function(e,t){var n=F_.getRsBlockTable(e,t);if(null==n)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var r=n.length/3,i=new Array,s=0;s<r;s++)for(var o=n[3*s+0],a=n[3*s+1],l=n[3*s+2],c=0;c<o;c++)i.push(new F_(a,l));return i},F_.getRsBlockTable=function(e,t){switch(t){case M_.L:return F_.RS_BLOCK_TABLE[4*(e-1)+0];case M_.M:return F_.RS_BLOCK_TABLE[4*(e-1)+1];case M_.Q:return F_.RS_BLOCK_TABLE[4*(e-1)+2];case M_.H:return F_.RS_BLOCK_TABLE[4*(e-1)+3];default:return}};var U_=F_;function j_(){this.buffer=new Array,this.length=0}j_.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var n=0;n<t;n++)this.putBit(1==(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};for(var q_=j_,B_={glog:function(e){if(e<1)throw new Error("glog("+e+")");return B_.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return B_.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},V_=0;V_<8;V_++)B_.EXP_TABLE[V_]=1<<V_;for(V_=8;V_<256;V_++)B_.EXP_TABLE[V_]=B_.EXP_TABLE[V_-4]^B_.EXP_TABLE[V_-5]^B_.EXP_TABLE[V_-6]^B_.EXP_TABLE[V_-8];for(V_=0;V_<255;V_++)B_.LOG_TABLE[B_.EXP_TABLE[V_]]=V_;var W_=B_,H_=W_;function z_(e,t){if(null==e.length)throw new Error(e.length+"/"+t);for(var n=0;n<e.length&&0==e[n];)n++;this.num=new Array(e.length-n+t);for(var r=0;r<e.length-n;r++)this.num[r]=e[r+n]}z_.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<e.getLength();r++)t[n+r]^=H_.gexp(H_.glog(this.get(n))+H_.glog(e.get(r)));return new z_(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=H_.glog(this.get(0))-H_.glog(e.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<e.getLength();r++)n[r]^=H_.gexp(H_.glog(e.get(r))+t);return new z_(n,0).mod(e)}};var $_=O_,K_=z_,G_=W_,Y_=0,J_=1,Q_=2,X_=3,Z_=4,ev=5,tv=6,nv=7,rv={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;rv.getBCHDigit(t)-rv.getBCHDigit(rv.G15)>=0;)t^=rv.G15<<rv.getBCHDigit(t)-rv.getBCHDigit(rv.G15);return(e<<10|t)^rv.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;rv.getBCHDigit(t)-rv.getBCHDigit(rv.G18)>=0;)t^=rv.G18<<rv.getBCHDigit(t)-rv.getBCHDigit(rv.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return rv.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,n){switch(e){case Y_:return(t+n)%2==0;case J_:return t%2==0;case Q_:return n%3==0;case X_:return(t+n)%3==0;case Z_:return(Math.floor(t/2)+Math.floor(n/3))%2==0;case ev:return t*n%2+t*n%3==0;case tv:return(t*n%2+t*n%3)%2==0;case nv:return(t*n%3+(t+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new K_([1],0),n=0;n<e;n++)t=t.multiply(new K_([1,G_.gexp(n)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case $_.MODE_NUMBER:return 10;case $_.MODE_ALPHA_NUM:return 9;case $_.MODE_8BIT_BYTE:case $_.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case $_.MODE_NUMBER:return 12;case $_.MODE_ALPHA_NUM:return 11;case $_.MODE_8BIT_BYTE:return 16;case $_.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case $_.MODE_NUMBER:return 14;case $_.MODE_ALPHA_NUM:return 13;case $_.MODE_8BIT_BYTE:return 16;case $_.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r++)for(var i=0;i<t;i++){for(var s=0,o=e.isDark(r,i),a=-1;a<=1;a++)if(!(r+a<0||t<=r+a))for(var l=-1;l<=1;l++)i+l<0||t<=i+l||0==a&&0==l||o==e.isDark(r+a,i+l)&&s++;s>5&&(n+=3+s-5)}for(r=0;r<t-1;r++)for(i=0;i<t-1;i++){var c=0;e.isDark(r,i)&&c++,e.isDark(r+1,i)&&c++,e.isDark(r,i+1)&&c++,e.isDark(r+1,i+1)&&c++,0!=c&&4!=c||(n+=3)}for(r=0;r<t;r++)for(i=0;i<t-6;i++)e.isDark(r,i)&&!e.isDark(r,i+1)&&e.isDark(r,i+2)&&e.isDark(r,i+3)&&e.isDark(r,i+4)&&!e.isDark(r,i+5)&&e.isDark(r,i+6)&&(n+=40);for(i=0;i<t;i++)for(r=0;r<t-6;r++)e.isDark(r,i)&&!e.isDark(r+1,i)&&e.isDark(r+2,i)&&e.isDark(r+3,i)&&e.isDark(r+4,i)&&!e.isDark(r+5,i)&&e.isDark(r+6,i)&&(n+=40);var u=0;for(i=0;i<t;i++)for(r=0;r<t;r++)e.isDark(r,i)&&u++;return n+=10*(Math.abs(100*u/t/t-50)/5)}},iv=D_,sv=U_,ov=q_,av=rv,lv=z_;function cv(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var uv=cv.prototype;uv.addData=function(e){var t=new iv(e);this.dataList.push(t),this.dataCache=null},uv.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},uv.getModuleCount=function(){return this.moduleCount},uv.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=sv.getRSBlocks(e,this.errorCorrectLevel),n=new ov,r=0,i=0;i<t.length;i++)r+=t[i].dataCount;for(i=0;i<this.dataList.length;i++){var s=this.dataList[i];n.put(s.mode,4),n.put(s.getLength(),av.getLengthInBits(s.mode,e)),s.write(n)}if(n.getLengthInBits()<=8*r)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},uv.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=cv.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},uv.setupPositionProbePattern=function(e,t){for(var n=-1;n<=7;n++)if(!(e+n<=-1||this.moduleCount<=e+n))for(var r=-1;r<=7;r++)t+r<=-1||this.moduleCount<=t+r||(this.modules[e+n][t+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},uv.getBestMaskPattern=function(){for(var e=0,t=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=av.getLostPoint(this);(0==n||e>r)&&(e=r,t=n)}return t},uv.createMovieClip=function(e,t,n){var r=e.createEmptyMovieClip(t,n);this.make();for(var i=0;i<this.modules.length;i++)for(var s=1*i,o=0;o<this.modules[i].length;o++){var a=1*o;this.modules[i][o]&&(r.beginFill(0,100),r.moveTo(a,s),r.lineTo(a+1,s),r.lineTo(a+1,s+1),r.lineTo(a,s+1),r.endFill())}return r},uv.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},uv.setupPositionAdjustPattern=function(){for(var e=av.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var n=0;n<e.length;n++){var r=e[t],i=e[n];if(null==this.modules[r][i])for(var s=-2;s<=2;s++)for(var o=-2;o<=2;o++)this.modules[r+s][i+o]=-2==s||2==s||-2==o||2==o||0==s&&0==o}},uv.setupTypeNumber=function(e){for(var t=av.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!e&&1==(t>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++){r=!e&&1==(t>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},uv.setupTypeInfo=function(e,t){for(var n=this.errorCorrectLevel<<3|t,r=av.getBCHTypeInfo(n),i=0;i<15;i++){var s=!e&&1==(r>>i&1);i<6?this.modules[i][8]=s:i<8?this.modules[i+1][8]=s:this.modules[this.moduleCount-15+i][8]=s}for(i=0;i<15;i++){s=!e&&1==(r>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=s:i<9?this.modules[8][15-i-1+1]=s:this.modules[8][15-i-1]=s}this.modules[this.moduleCount-8][8]=!e},uv.mapData=function(e,t){for(var n=-1,r=this.moduleCount-1,i=7,s=0,o=this.moduleCount-1;o>0;o-=2)for(6==o&&o--;;){for(var a=0;a<2;a++)if(null==this.modules[r][o-a]){var l=!1;s<e.length&&(l=1==(e[s]>>>i&1)),av.getMask(t,r,o-a)&&(l=!l),this.modules[r][o-a]=l,-1==--i&&(s++,i=7)}if((r+=n)<0||this.moduleCount<=r){r-=n,n=-n;break}}},cv.PAD0=236,cv.PAD1=17,cv.createData=function(e,t,n){for(var r=sv.getRSBlocks(e,t),i=new ov,s=0;s<n.length;s++){var o=n[s];i.put(o.mode,4),i.put(o.getLength(),av.getLengthInBits(o.mode,e)),o.write(i)}var a=0;for(s=0;s<r.length;s++)a+=r[s].dataCount;if(i.getLengthInBits()>8*a)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*a+")");for(i.getLengthInBits()+4<=8*a&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=8*a||(i.put(cv.PAD0,8),i.getLengthInBits()>=8*a));)i.put(cv.PAD1,8);return cv.createBytes(i,r)},cv.createBytes=function(e,t){for(var n=0,r=0,i=0,s=new Array(t.length),o=new Array(t.length),a=0;a<t.length;a++){var l=t[a].dataCount,c=t[a].totalCount-l;r=Math.max(r,l),i=Math.max(i,c),s[a]=new Array(l);for(var u=0;u<s[a].length;u++)s[a][u]=255&e.buffer[u+n];n+=l;var h=av.getErrorCorrectPolynomial(c),d=new lv(s[a],h.getLength()-1).mod(h);o[a]=new Array(h.getLength()-1);for(u=0;u<o[a].length;u++){var p=u+d.getLength()-o[a].length;o[a][u]=p>=0?d.get(p):0}}var f=0;for(u=0;u<t.length;u++)f+=t[u].totalCount;var m=new Array(f),g=0;for(u=0;u<r;u++)for(a=0;a<t.length;a++)u<s[a].length&&(m[g++]=s[a][u]);for(u=0;u<i;u++)for(a=0;a<t.length;a++)u<o[a].length&&(m[g++]=o[a][u]);return m};var hv=cv,dv=L_,pv=function(e,t){var n=new hv((t=t||{}).typeNumber||-1,t.errorCorrectLevel||dv.H);return n.addData(e),n.make(),n};pv.ErrorCorrectLevel=dv;var fv=pv,mv=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function gv(e,t){return fv(function(e){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r<2048?(t+=String.fromCharCode(192|r>>6),t+=String.fromCharCode(128|63&r)):r<55296||r>=57344?(t+=String.fromCharCode(224|r>>12),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r)):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t+=String.fromCharCode(240|r>>18),t+=String.fromCharCode(128|r>>12&63),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r))}return t}(e),{typeNumber:-1,errorCorrectLevel:t})}function _v(e){return e in fv.ErrorCorrectLevel}function vv(e,t){void 0===t&&(t=0);var n=[];return e.forEach((function(e,r){var i=null;e.forEach((function(s,o){if(!s&&null!==i)return n.push("M"+(i+t)+" "+(r+t)+"h"+(o-i)+"v1H"+(i+t)+"z"),void(i=null);if(o!==e.length-1)s&&null===i&&(i=o);else{if(!s)return;null===i?n.push("M"+(o+t)+","+(r+t)+" h1v1H"+(o+t)+"z"):n.push("M"+(i+t)+","+(r+t)+" h"+(o+1-i)+"v1H"+(i+t)+"z")}}))})),n.join("")}var yv={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:"H",validator:function(e){return _v(e)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},wv=N_(N_({},yv),{renderAs:{type:String,required:!1,default:"canvas",validator:function(e){return["canvas","svg"].indexOf(e)>-1}}}),bv=Kt({name:"QRCodeSvg",props:yv,setup:function(e){var t=gt(0),n=gt(""),r=function(){var r=e.value,i=e.level,s=e.margin,o=gv(r,fv.ErrorCorrectLevel[i]).modules;t.value=o.length+2*s,n.value=vv(o,s)};return r(),on(r),function(){return _i("svg",{width:e.size,height:e.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.value+" "+t.value},[_i("path",{fill:e.background,d:"M0,0 h"+t.value+"v"+t.value+"H0z"}),_i("path",{fill:e.foreground,d:n.value})])}}}),Cv=Kt({name:"QRCodeCanvas",props:yv,setup:function(e){var t=gt(null),n=function(){var n=e.value,r=e.level,i=e.size,s=e.margin,o=e.background,a=e.foreground,l=gv(n,fv.ErrorCorrectLevel[r]).modules,c=l.length+2*s,u=t.value;if(u){var h=u.getContext("2d");if(h){var d=window.devicePixelRatio||1,p=i/c*d;u.height=u.width=i*d,h.scale(p,p),h.fillStyle=o,h.fillRect(0,0,c,c),h.fillStyle=a,mv?h.fill(new Path2D(vv(l,s))):l.forEach((function(e,t){e.forEach((function(e,n){e&&h.fillRect(n+s,t+s,1,1)}))}))}}};return rn(n),on(n),function(){return _i("canvas",{ref:t,style:{width:e.size+"px",height:e.size+"px"}})}}}),Iv=Kt({name:"Qrcode",render:function(){var e=this.$props,t=e.renderAs,n=e.value,r=e.size,i=e.margin,s=e.level,o=e.background,a=e.foreground,l=r>>>0,c=i>>>0,u=_v(s)?s:"H";return _i("svg"===t?bv:Cv,{value:n,size:l,margin:c,level:u,background:o,foreground:a})},props:wv});export{as as $,vr as A,Cr as B,Ir as C,Uf as D,rd as E,Jn as F,ed as G,ld as H,Fn as I,Zi as J,_r as K,R_ as L,Xf as M,Sg as N,kg as O,vg as P,e_ as Q,Xi as R,is as S,Fi as T,nd as U,Iv as V,id as W,Bp as X,zd as Y,Os as Z,Qo as _,jf as a,qf as b,ar as c,Zf as d,tm as e,em as f,dd as g,nm as h,rm as i,zp as j,im as k,pr as l,Ls as m,fr as n,nr as o,or as p,a as q,Kn as r,gr as s,Wp as t,Hp as u,Ds as v,xt as w,Nt as x,Ot as y,u as z};
