function e(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function n(e){return!!e||""===e}function r(e){if(b(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=k(i)?o(i):r(i);if(s)for(const e in s)t[e]=s[e]}return t}return k(e)||S(e)?e:void 0}const i=/;(?![^(]*\))/g,s=/:(.+)/;function o(e){const t={};return e.split(i).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(k(e))t=e;else if(b(e))for(let n=0;n<e.length;n++){const r=a(e[n]);r&&(t+=r+" ")}else if(S(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const l=e=>null==e?"":b(e)||S(e)&&(e.toString===P||!T(e.toString))?JSON.stringify(e,c,2):String(e),c=(e,t)=>t&&t.__v_isRef?c(e,t.value):w(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:E(t)?{[`Set(${t.size})`]:[...t.values()]}:!S(t)||b(t)||R(t)?t:String(t),u={},h=[],d=()=>{},p=()=>!1,f=/^on[^a-z]/,_=e=>f.test(e),g=e=>e.startsWith("onUpdate:"),m=Object.assign,v=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},y=Object.prototype.hasOwnProperty,C=(e,t)=>y.call(e,t),b=Array.isArray,w=e=>"[object Map]"===N(e),E=e=>"[object Set]"===N(e),T=e=>"function"==typeof e,k=e=>"string"==typeof e,I=e=>"symbol"==typeof e,S=e=>null!==e&&"object"==typeof e,x=e=>S(e)&&T(e.then)&&T(e.catch),P=Object.prototype.toString,N=e=>P.call(e),R=e=>"[object Object]"===N(e),O=e=>k(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,A=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),D=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},M=/-(\w)/g,L=D((e=>e.replace(M,((e,t)=>t?t.toUpperCase():"")))),F=/\B([A-Z])/g,q=D((e=>e.replace(F,"-$1").toLowerCase())),j=D((e=>e.charAt(0).toUpperCase()+e.slice(1))),B=D((e=>e?`on${j(e)}`:"")),U=(e,t)=>!Object.is(e,t),W=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},H=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},V=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let z;const $=[];class G{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&z&&(this.parent=z,this.index=(z.scopes||(z.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&($.push(this),z=this)}off(){this.active&&($.pop(),z=$[$.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}const Y=e=>{const t=new Set(e);return t.w=0,t.n=0,t},K=e=>(e.w&Z)>0,Q=e=>(e.n&Z)>0,X=new WeakMap;let J=0,Z=1;const ee=[];let te;const ne=Symbol(""),re=Symbol("");class ie{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],function(e,t){(t=t||z)&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();if(!ee.includes(this))try{return ee.push(te=this),ae.push(oe),oe=!0,Z=1<<++J,J<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Z})(this):se(this),this.fn()}finally{J<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];K(i)&&!Q(i)?i.delete(e):t[n++]=i,i.w&=~Z,i.n&=~Z}t.length=n}})(this),Z=1<<--J,ce(),ee.pop();const e=ee.length;te=e>0?ee[e-1]:void 0}}stop(){this.active&&(se(this),this.onStop&&this.onStop(),this.active=!1)}}function se(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let oe=!0;const ae=[];function le(){ae.push(oe),oe=!1}function ce(){const e=ae.pop();oe=void 0===e||e}function ue(e,t,n){if(!he())return;let r=X.get(e);r||X.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Y()),de(i)}function he(){return oe&&void 0!==te}function de(e,t){let n=!1;J<=30?Q(e)||(e.n|=Z,n=!K(e)):n=!e.has(te),n&&(e.add(te),te.deps.push(e))}function pe(e,t,n,r,i,s){const o=X.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&b(e))o.forEach(((e,t)=>{("length"===t||t>=r)&&a.push(e)}));else switch(void 0!==n&&a.push(o.get(n)),t){case"add":b(e)?O(n)&&a.push(o.get("length")):(a.push(o.get(ne)),w(e)&&a.push(o.get(re)));break;case"delete":b(e)||(a.push(o.get(ne)),w(e)&&a.push(o.get(re)));break;case"set":w(e)&&a.push(o.get(ne))}if(1===a.length)a[0]&&fe(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);fe(Y(e))}}function fe(e,t){for(const n of b(e)?e:[...e])(n!==te||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const _e=e("__proto__,__v_isRef,__isVue"),ge=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(I)),me=we(),ve=we(!1,!0),ye=we(!0),Ce=be();function be(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=at(this);for(let t=0,i=this.length;t<i;t++)ue(n,0,t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(at)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){le();const n=at(this)[t].apply(this,e);return ce(),n}})),e}function we(e=!1,t=!1){return function(n,r,i){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&i===(e?t?Ze:Je:t?Xe:Qe).get(n))return n;const s=b(n);if(!e&&s&&C(Ce,r))return Reflect.get(Ce,r,i);const o=Reflect.get(n,r,i);if(I(r)?ge.has(r):_e(r))return o;if(e||ue(n,0,r),t)return o;if(dt(o)){return!s||!O(r)?o.value:o}return S(o)?e?nt(o):tt(o):o}}function Ee(e=!1){return function(t,n,r,i){let s=t[n];if(!e&&(r=at(r),s=at(s),!b(t)&&dt(s)&&!dt(r)))return s.value=r,!0;const o=b(t)&&O(n)?Number(n)<t.length:C(t,n),a=Reflect.set(t,n,r,i);return t===at(i)&&(o?U(r,s)&&pe(t,"set",n,r):pe(t,"add",n,r)),a}}const Te={get:me,set:Ee(),deleteProperty:function(e,t){const n=C(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&pe(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return I(t)&&ge.has(t)||ue(e,0,t),n},ownKeys:function(e){return ue(e,0,b(e)?"length":ne),Reflect.ownKeys(e)}},ke={get:ye,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Ie=m({},Te,{get:ve,set:Ee(!0)}),Se=e=>S(e)?tt(e):e,xe=e=>S(e)?nt(e):e,Pe=e=>e,Ne=e=>Reflect.getPrototypeOf(e);function Re(e,t,n=!1,r=!1){const i=at(e=e.__v_raw),s=at(t);t!==s&&!n&&ue(i,0,t),!n&&ue(i,0,s);const{has:o}=Ne(i),a=r?Pe:n?xe:Se;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Oe(e,t=!1){const n=this.__v_raw,r=at(n),i=at(e);return e!==i&&!t&&ue(r,0,e),!t&&ue(r,0,i),e===i?n.has(e):n.has(e)||n.has(i)}function Ae(e,t=!1){return e=e.__v_raw,!t&&ue(at(e),0,ne),Reflect.get(e,"size",e)}function De(e){e=at(e);const t=at(this);return Ne(t).has.call(t,e)||(t.add(e),pe(t,"add",e,e)),this}function Me(e,t){t=at(t);const n=at(this),{has:r,get:i}=Ne(n);let s=r.call(n,e);s||(e=at(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?U(t,o)&&pe(n,"set",e,t):pe(n,"add",e,t),this}function Le(e){const t=at(this),{has:n,get:r}=Ne(t);let i=n.call(t,e);i||(e=at(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&pe(t,"delete",e,void 0),s}function Fe(){const e=at(this),t=0!==e.size,n=e.clear();return t&&pe(e,"clear",void 0,void 0),n}function qe(e,t){return function(n,r){const i=this,s=i.__v_raw,o=at(s),a=t?Pe:e?xe:Se;return!e&&ue(o,0,ne),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function je(e,t,n){return function(...r){const i=this.__v_raw,s=at(i),o=w(s),a="entries"===e||e===Symbol.iterator&&o,l="keys"===e&&o,c=i[e](...r),u=n?Pe:t?xe:Se;return!t&&ue(s,0,l?re:ne),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function Be(e){return function(...t){return"delete"!==e&&this}}function Ue(){const e={get(e){return Re(this,e)},get size(){return Ae(this)},has:Oe,add:De,set:Me,delete:Le,clear:Fe,forEach:qe(!1,!1)},t={get(e){return Re(this,e,!1,!0)},get size(){return Ae(this)},has:Oe,add:De,set:Me,delete:Le,clear:Fe,forEach:qe(!1,!0)},n={get(e){return Re(this,e,!0)},get size(){return Ae(this,!0)},has(e){return Oe.call(this,e,!0)},add:Be("add"),set:Be("set"),delete:Be("delete"),clear:Be("clear"),forEach:qe(!0,!1)},r={get(e){return Re(this,e,!0,!0)},get size(){return Ae(this,!0)},has(e){return Oe.call(this,e,!0)},add:Be("add"),set:Be("set"),delete:Be("delete"),clear:Be("clear"),forEach:qe(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{e[i]=je(i,!1,!1),n[i]=je(i,!0,!1),t[i]=je(i,!1,!0),r[i]=je(i,!0,!0)})),[e,n,t,r]}const[We,He,Ve,ze]=Ue();function $e(e,t){const n=t?e?ze:Ve:e?He:We;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(C(n,r)&&r in t?n:t,r,i)}const Ge={get:$e(!1,!1)},Ye={get:$e(!1,!0)},Ke={get:$e(!0,!1)},Qe=new WeakMap,Xe=new WeakMap,Je=new WeakMap,Ze=new WeakMap;function et(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>N(e).slice(8,-1))(e))}function tt(e){return e&&e.__v_isReadonly?e:rt(e,!1,Te,Ge,Qe)}function nt(e){return rt(e,!0,ke,Ke,Je)}function rt(e,t,n,r,i){if(!S(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=et(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return i.set(e,a),a}function it(e){return st(e)?it(e.__v_raw):!(!e||!e.__v_isReactive)}function st(e){return!(!e||!e.__v_isReadonly)}function ot(e){return it(e)||st(e)}function at(e){const t=e&&e.__v_raw;return t?at(t):e}function lt(e){return H(e,"__v_skip",!0),e}function ct(e){he()&&((e=at(e)).dep||(e.dep=Y()),de(e.dep))}function ut(e,t){(e=at(e)).dep&&fe(e.dep)}const ht=e=>S(e)?tt(e):e;function dt(e){return Boolean(e&&!0===e.__v_isRef)}function pt(e){return _t(e,!1)}class ft{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:at(e),this._value=t?e:ht(e)}get value(){return ct(this),this._value}set value(e){e=this._shallow?e:at(e),U(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:ht(e),ut(this))}}function _t(e,t){return dt(e)?e:new ft(e,t)}function gt(e){return dt(e)?e.value:e}const mt={get:(e,t,n)=>gt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return dt(i)&&!dt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function vt(e){return it(e)?e:new Proxy(e,mt)}class yt{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new ie(e,(()=>{this._dirty||(this._dirty=!0,ut(this))})),this.__v_isReadonly=n}get value(){const e=at(this);return ct(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Ct(e,t){let n,r;T(e)?(n=e,r=d):(n=e.get,r=e.set);return new yt(n,r,T(e)||!e.set)}Promise.resolve();function bt(e,t,...n){const r=e.vnode.props||u;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:s}=r[e]||u;s?i=n.map((e=>e.trim())):t&&(i=n.map(V))}let a,l=r[a=B(t)]||r[a=B(L(t))];!l&&s&&(l=r[a=B(q(t))]),l&&wr(l,e,6,i);const c=r[a+"Once"];if(c){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,wr(c,e,6,i)}}function wt(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!T(e)){const r=e=>{const n=wt(e,t,!0);n&&(a=!0,m(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(b(s)?s.forEach((e=>o[e]=null)):m(o,s),r.set(e,o),o):(r.set(e,null),null)}function Et(e,t){return!(!e||!_(t))&&(t=t.slice(2).replace(/Once$/,""),C(e,t[0].toLowerCase()+t.slice(1))||C(e,q(t))||C(e,t))}let Tt=null,kt=null;function It(e){const t=Tt;return Tt=e,kt=e&&e.type.__scopeId||null,t}function St(e,t=Tt,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Vn(-1);const i=It(t),s=e(...n);return It(i),r._d&&Vn(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function xt(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:f,inheritAttrs:_}=e;let m;const v=It(e);try{let e;if(4&n.shapeFlag){const t=i||r;m=rr(u.call(t,t,h,s,p,d,f)),e=l}else{const n=t;0,m=rr(n.length>1?n(s,{attrs:l,slots:a,emit:c}):n(s,null)),e=t.props?l:Pt(l)}let v=m;if(e&&!1!==_){const t=Object.keys(e),{shapeFlag:n}=v;t.length&&7&n&&(o&&t.some(g)&&(e=Nt(e,o)),v=tr(v,e))}0,n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),m=v}catch(y){Bn.length=0,Er(y,e,1),m=er(qn)}return It(v),m}const Pt=e=>{let t;for(const n in e)("class"===n||"style"===n||_(n))&&((t||(t={}))[n]=e[n]);return t},Nt=(e,t)=>{const n={};for(const r in e)g(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function Rt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Et(n,s))return!0}return!1}function Ot(e,t){if(dr){let n=dr.provides;const r=dr.parent&&dr.parent.provides;r===n&&(n=dr.provides=Object.create(r)),n[e]=t}else;}function At(e,t,n=!1){const r=dr||Tt;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&T(t)?t.call(r.proxy):t}}function Dt(e){return T(e)?{setup:e,name:e.name}:e}const Mt=e=>!!e.type.__asyncLoader,Lt=e=>e.type.__isKeepAlive;function Ft(e,t){jt(e,"a",t)}function qt(e,t){jt(e,"da",t)}function jt(e,t,n=dr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()});if(Ut(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Lt(e.parent.vnode)&&Bt(r,t,n,e),e=e.parent}}function Bt(e,t,n,r){const i=Ut(t,e,r,!0);Yt((()=>{v(r[t],i)}),n)}function Ut(e,t,n=dr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;le(),pr(n);const i=wr(t,n,e,r);return fr(),ce(),i});return r?i.unshift(s):i.push(s),s}}const Wt=e=>(t,n=dr)=>(!gr||"sp"===e)&&Ut(e,t,n),Ht=Wt("bm"),Vt=Wt("m"),zt=Wt("bu"),$t=Wt("u"),Gt=Wt("bum"),Yt=Wt("um"),Kt=Wt("sp"),Qt=Wt("rtg"),Xt=Wt("rtc");function Jt(e,t=dr){Ut("ec",e,t)}let Zt=!0;function en(e){const t=rn(e),n=e.proxy,r=e.ctx;Zt=!1,t.beforeCreate&&tn(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:p,beforeUpdate:f,updated:_,activated:g,deactivated:m,beforeDestroy:v,beforeUnmount:y,destroyed:C,unmounted:w,render:E,renderTracked:k,renderTriggered:I,errorCaptured:x,serverPrefetch:P,expose:N,inheritAttrs:R,components:O,directives:A,filters:D}=t;if(c&&function(e,t,n=d,r=!1){b(e)&&(e=ln(e));for(const i in e){const n=e[i];let s;s=S(n)?"default"in n?At(n.from||i,n.default,!0):At(n.from||i):At(n),dt(s)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const d in o){const e=o[d];T(e)&&(r[d]=e.bind(n))}if(i){const t=i.call(n,n);S(t)&&(e.data=tt(t))}if(Zt=!0,s)for(const b in s){const e=s[b],t=Ct({get:T(e)?e.bind(n,n):T(e.get)?e.get.bind(n,n):d,set:!T(e)&&T(e.set)?e.set.bind(n):d});Object.defineProperty(r,b,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}if(a)for(const d in a)nn(a[d],r,n,d);if(l){const e=T(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{Ot(t,e[t])}))}function M(e,t){b(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&tn(u,e,"c"),M(Ht,h),M(Vt,p),M(zt,f),M($t,_),M(Ft,g),M(qt,m),M(Jt,x),M(Xt,k),M(Qt,I),M(Gt,y),M(Yt,w),M(Kt,P),b(N))if(N.length){const t=e.exposed||(e.exposed={});N.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});E&&e.render===d&&(e.render=E),null!=R&&(e.inheritAttrs=R),O&&(e.components=O),A&&(e.directives=A)}function tn(e,t,n){wr(b(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function nn(e,t,n,r){const i=r.includes(".")?Kr(n,r):()=>n[r];if(k(e)){const n=t[e];T(n)&&$r(i,n)}else if(T(e))$r(i,e.bind(n));else if(S(e))if(b(e))e.forEach((e=>nn(e,t,n,r)));else{const r=T(e.handler)?e.handler.bind(n):t[e.handler];T(r)&&$r(i,r,e)}}function rn(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:i.length||n||r?(l={},i.length&&i.forEach((e=>sn(l,e,o,!0))),sn(l,t,o)):l=t,s.set(t,l),l}function sn(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&sn(e,s,n,!0),i&&i.forEach((t=>sn(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=on[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const on={data:an,props:un,emits:un,methods:un,computed:un,beforeCreate:cn,created:cn,beforeMount:cn,mounted:cn,beforeUpdate:cn,updated:cn,beforeDestroy:cn,beforeUnmount:cn,destroyed:cn,unmounted:cn,activated:cn,deactivated:cn,errorCaptured:cn,serverPrefetch:cn,components:un,directives:un,watch:function(e,t){if(!e)return t;if(!t)return e;const n=m(Object.create(null),e);for(const r in t)n[r]=cn(e[r],t[r]);return n},provide:an,inject:function(e,t){return un(ln(e),ln(t))}};function an(e,t){return t?e?function(){return m(T(e)?e.call(this,this):e,T(t)?t.call(this,this):t)}:t:e}function ln(e){if(b(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function cn(e,t){return e?[...new Set([].concat(e,t))]:t}function un(e,t){return e?m(m(Object.create(null),e),t):t}function hn(e,t,n,r=!1){const i={},s={};H(s,Qn,1),e.propsDefaults=Object.create(null),dn(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:rt(i,!1,Ie,Ye,Xe):e.type.props?e.props=i:e.props=s,e.attrs=s}function dn(e,t,n,r){const[i,s]=e.propsOptions;let o,a=!1;if(t)for(let l in t){if(A(l))continue;const c=t[l];let u;i&&C(i,u=L(l))?s&&s.includes(u)?(o||(o={}))[u]=c:n[u]=c:Et(e.emitsOptions,l)||c!==r[l]&&(r[l]=c,a=!0)}if(s){const t=at(n),r=o||u;for(let o=0;o<s.length;o++){const a=s[o];n[a]=pn(i,t,a,r[a],e,!C(r,a))}}return a}function pn(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=C(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&T(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(pr(i),r=s[n]=e.call(null,t),fr())}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==q(n)||(r=!0))}return r}function fn(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!T(e)){const r=e=>{l=!0;const[n,r]=fn(e,t,!0);m(o,n),r&&a.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!l)return r.set(e,h),h;if(b(s))for(let h=0;h<s.length;h++){const e=L(s[h]);_n(e)&&(o[e]=u)}else if(s)for(const u in s){const e=L(u);if(_n(e)){const t=s[u],n=o[e]=b(t)||T(t)?{type:t}:t;if(n){const t=vn(Boolean,n.type),r=vn(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||C(n,"default"))&&a.push(e)}}}const c=[o,a];return r.set(e,c),c}function _n(e){return"$"!==e[0]}function gn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function mn(e,t){return gn(e)===gn(t)}function vn(e,t){return b(t)?t.findIndex((t=>mn(t,e))):T(t)&&mn(t,e)?0:-1}const yn=e=>"_"===e[0]||"$stable"===e,Cn=e=>b(e)?e.map(rr):[rr(e)],bn=(e,t,n)=>{const r=St(((...e)=>Cn(t(...e))),n);return r._c=!1,r},wn=(e,t,n)=>{const r=e._ctx;for(const i in e){if(yn(i))continue;const n=e[i];if(T(n))t[i]=bn(0,n,r);else if(null!=n){const e=Cn(n);t[i]=()=>e}}},En=(e,t)=>{const n=Cn(t);e.slots.default=()=>n};function Tn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(le(),wr(l,n,8,[e.el,a,e,t]),ce())}}function kn(){return{app:null,config:{isNativeTag:p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let In=0;function Sn(e,t){return function(n,r=null){null==r||S(r)||(r=null);const i=kn(),s=new Set;let o=!1;const a=i.app={_uid:In++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Jr,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&T(e.install)?(s.add(e),e.install(a,...t)):T(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||i.mixins.push(e),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,l,c){if(!o){const u=er(n,r);return u.appContext=i,l&&t?t(u,s):e(u,s,c),o=!0,a._container=s,s.__vue_app__=a,u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a)};return a}}const xn=function(e,t){t&&t.pendingBranch?b(e)?t.effects.push(...e):t.effects.push(e):Br(e,Or,Rr,Ar)};function Pn(e){return function(e,t){const{insert:n,remove:r,patchProp:i,createElement:s,createText:o,createComment:a,setText:l,setElementText:c,parentNode:p,nextSibling:f,setScopeId:_=d,cloneNode:g,insertStaticContent:v}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Kn(e,t)&&(r=te(e),Q(e,i,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Fn:b(e,t,n,r);break;case qn:w(e,t,n,r);break;case jn:null==e&&E(t,n,r,o);break;case Ln:M(e,t,n,r,i,s,o,a,l);break;default:1&h?I(e,t,n,r,i,s,o,a,l):6&h?F(e,t,n,r,i,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,r,i,s,o,a,l,re)}null!=u&&i&&Nn(u,e&&e.ref,s,t||e,!t)},b=(e,t,r,i)=>{if(null==e)n(t.el=o(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},w=(e,t,r,i)=>{null==e?n(t.el=a(t.children||""),r,i):t.el=e.el},E=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r)},T=({el:e,anchor:t},r,i)=>{let s;for(;e&&e!==t;)s=f(e),n(e,r,i),e=s;n(t,r,i)},k=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),r(e),e=n;r(t)},I=(e,t,n,r,i,s,o,a,l)=>{o=o||"svg"===t.type,null==e?S(t,n,r,i,s,o,a,l):R(e,t,i,s,o,a,l)},S=(e,t,r,o,a,l,u,h)=>{let d,p;const{type:f,props:_,shapeFlag:m,transition:v,patchFlag:y,dirs:C}=e;if(e.el&&void 0!==g&&-1===y)d=e.el=g(e.el);else{if(d=e.el=s(e.type,l,_&&_.is,_),8&m?c(d,e.children):16&m&&N(e.children,d,null,o,a,l&&"foreignObject"!==f,u,h),C&&Tn(e,null,o,"created"),_){for(const t in _)"value"===t||A(t)||i(d,t,null,_[t],l,e.children,o,a,ee);"value"in _&&i(d,"value",null,_.value),(p=_.onVnodeBeforeMount)&&Rn(p,o,e)}P(d,e,e.scopeId,u,o)}C&&Tn(e,null,o,"beforeMount");const b=(!a||a&&!a.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(d),n(d,t,r),((p=_&&_.onVnodeMounted)||b||C)&&xn((()=>{p&&Rn(p,o,e),b&&v.enter(d),C&&Tn(e,null,o,"mounted")}),a)},P=(e,t,n,r,i)=>{if(n&&_(e,n),r)for(let s=0;s<r.length;s++)_(e,r[s]);if(i){if(t===i.subTree){const t=i.vnode;P(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?ir(e[c]):rr(e[c]);y(null,l,t,n,r,i,s,o,a)}},R=(e,t,n,r,s,o,a)=>{const l=t.el=e.el;let{patchFlag:h,dynamicChildren:d,dirs:p}=t;h|=16&e.patchFlag;const f=e.props||u,_=t.props||u;let g;(g=_.onVnodeBeforeUpdate)&&Rn(g,n,t,e),p&&Tn(t,e,n,"beforeUpdate");const m=s&&"foreignObject"!==t.type;if(d?O(e.dynamicChildren,d,l,n,r,m,o):a||z(e,t,l,null,n,r,m,o,!1),h>0){if(16&h)D(l,t,f,_,n,r,s);else if(2&h&&f.class!==_.class&&i(l,"class",null,_.class,s),4&h&&i(l,"style",f.style,_.style,s),8&h){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const a=o[t],c=f[a],u=_[a];u===c&&"value"!==a||i(l,a,c,u,s,e.children,n,r,ee)}}1&h&&e.children!==t.children&&c(l,t.children)}else a||null!=d||D(l,t,f,_,n,r,s);((g=_.onVnodeUpdated)||p)&&xn((()=>{g&&Rn(g,n,t,e),p&&Tn(t,e,n,"updated")}),r)},O=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Ln||!Kn(l,c)||70&l.shapeFlag)?p(l.el):n;y(l,c,u,null,r,i,s,o,!0)}},D=(e,t,n,r,s,o,a)=>{if(n!==r){for(const l in r){if(A(l))continue;const c=r[l],u=n[l];c!==u&&"value"!==l&&i(e,l,u,c,a,t.children,s,o,ee)}if(n!==u)for(const l in n)A(l)||l in r||i(e,l,n[l],null,a,t.children,s,o,ee);"value"in r&&i(e,"value",n.value,r.value)}},M=(e,t,r,i,s,a,l,c,u)=>{const h=t.el=e?e.el:o(""),d=t.anchor=e?e.anchor:o("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:_}=t;_&&(c=c?c.concat(_):_),null==e?(n(h,r,i),n(d,r,i),N(t.children,r,d,s,a,l,c,u)):p>0&&64&p&&f&&e.dynamicChildren?(O(e.dynamicChildren,f,r,s,a,l,c),(null!=t.key||s&&t===s.subTree)&&On(e,t,!0)):z(e,t,r,d,s,a,l,c,u)},F=(e,t,n,r,i,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,l):j(t,n,r,i,s,o,l):B(e,t,l)},j=(e,t,n,r,i,s,o)=>{const a=e.component=function(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||ur,s={uid:hr++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,scope:new G(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fn(r,i),emitsOptions:wt(r,i),emit:null,emitted:null,propsDefaults:u,inheritAttrs:r.inheritAttrs,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};s.ctx={_:s},s.root=t?t.root:s,s.emit=bt.bind(null,s),e.ce&&e.ce(s);return s}(e,r,i);if(Lt(e)&&(a.ctx.renderer=re),function(e,t=!1){gr=t;const{props:n,children:r}=e.vnode,i=_r(e);hn(e,n,i,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=at(t),H(t,"_",n)):wn(t,e.slots={})}else e.slots={},t&&En(e,t);H(e.slots,Qn,1)})(e,r);const s=i?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=lt(new Proxy(e.ctx,cr));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(ue(e,0,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}(e):null;pr(e),le();const i=br(r,e,0,[e.props,n]);if(ce(),fr(),x(i)){if(i.then(fr,fr),t)return i.then((t=>{mr(e,t)})).catch((t=>{Er(t,e,0)}));e.asyncDep=i}else mr(e,i)}else vr(e)}(e,t):void 0;gr=!1}(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=er(qn);w(null,e,t,n)}}else U(a,e,t,n,i,s,o)},B=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||Rt(r,o,c):!!o);if(1024&l)return!0;if(16&l)return r?Rt(r,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!Et(c,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,function(e){const t=Ir.indexOf(e);t>Sr&&Ir.splice(t,1)}(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},U=(e,t,n,r,i,s,o)=>{const a=new ie((()=>{if(e.isMounted){let t,{next:n,bu:r,u:l,parent:c,vnode:u}=e,h=n;a.allowRecurse=!1,n?(n.el=u.el,V(e,n,o)):n=u,r&&W(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Rn(t,c,n,u),a.allowRecurse=!0;const d=xt(e),f=e.subTree;e.subTree=d,y(f,d,p(f.el),te(f),e,i,s),n.el=d.el,null===h&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,d.el),l&&xn(l,i),(t=n.props&&n.props.onVnodeUpdated)&&xn((()=>Rn(t,c,n,u)),i)}else{let o;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,p=Mt(t);if(a.allowRecurse=!1,u&&W(u),!p&&(o=c&&c.onVnodeBeforeMount)&&Rn(o,d,t),a.allowRecurse=!0,l&&oe){const n=()=>{e.subTree=xt(e),oe(l,e.subTree,e,i,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=xt(e);y(null,o,n,r,e,i,s),t.el=o.el}if(h&&xn(h,i),!p&&(o=c&&c.onVnodeMounted)){const e=t;xn((()=>Rn(o,d,e)),i)}256&t.shapeFlag&&e.a&&xn(e.a,i),e.isMounted=!0,t=n=r=null}}),(()=>qr(e.update)),e.scope),l=e.update=a.run.bind(a);l.id=e.uid,a.allowRecurse=l.allowRecurse=!0,l()},V=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=at(i),[l]=e.propsOptions;let c=!1;if(!(r||o>0)||16&o){let r;dn(e,t,i,s)&&(c=!0);for(const s in a)t&&(C(t,s)||(r=q(s))!==s&&C(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(i[s]=pn(l,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&C(t,e)||(delete s[e],c=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];const u=t[o];if(l)if(C(s,o))u!==s[o]&&(s[o]=u,c=!0);else{const t=L(o);i[t]=pn(l,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,c=!0)}}c&&pe(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=u;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:(m(i,t),n||1!==e||delete i._):(s=!t.$stable,wn(t,i)),o=t}else t&&(En(e,t),o={default:1});if(s)for(const a in i)yn(a)||a in o||delete i[a]})(e,t.children,n),le(),Ur(void 0,e.update),ce()},z=(e,t,n,r,i,s,o,a,l=!1)=>{const u=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void Y(u,d,n,r,i,s,o,a,l);if(256&p)return void $(u,d,n,r,i,s,o,a,l)}8&f?(16&h&&ee(u,i,s),d!==u&&c(n,d)):16&h?16&f?Y(u,d,n,r,i,s,o,a,l):ee(u,i,s,!0):(8&h&&c(n,""),16&f&&N(d,n,r,i,s,o,a,l))},$=(e,t,n,r,i,s,o,a,l)=>{t=t||h;const c=(e=e||h).length,u=t.length,d=Math.min(c,u);let p;for(p=0;p<d;p++){const r=t[p]=l?ir(t[p]):rr(t[p]);y(e[p],r,n,null,i,s,o,a,l)}c>u?ee(e,i,s,!0,!1,d):N(t,n,r,i,s,o,a,l,d)},Y=(e,t,n,r,i,s,o,a,l)=>{let c=0;const u=t.length;let d=e.length-1,p=u-1;for(;c<=d&&c<=p;){const r=e[c],u=t[c]=l?ir(t[c]):rr(t[c]);if(!Kn(r,u))break;y(r,u,n,null,i,s,o,a,l),c++}for(;c<=d&&c<=p;){const r=e[d],c=t[p]=l?ir(t[p]):rr(t[p]);if(!Kn(r,c))break;y(r,c,n,null,i,s,o,a,l),d--,p--}if(c>d){if(c<=p){const e=p+1,h=e<u?t[e].el:r;for(;c<=p;)y(null,t[c]=l?ir(t[c]):rr(t[c]),n,h,i,s,o,a,l),c++}}else if(c>p)for(;c<=d;)Q(e[c],i,s,!0),c++;else{const f=c,_=c,g=new Map;for(c=_;c<=p;c++){const e=t[c]=l?ir(t[c]):rr(t[c]);null!=e.key&&g.set(e.key,c)}let m,v=0;const C=p-_+1;let b=!1,w=0;const E=new Array(C);for(c=0;c<C;c++)E[c]=0;for(c=f;c<=d;c++){const r=e[c];if(v>=C){Q(r,i,s,!0);continue}let u;if(null!=r.key)u=g.get(r.key);else for(m=_;m<=p;m++)if(0===E[m-_]&&Kn(r,t[m])){u=m;break}void 0===u?Q(r,i,s,!0):(E[u-_]=c+1,u>=w?w=u:b=!0,y(r,t[u],n,null,i,s,o,a,l),v++)}const T=b?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(E):h;for(m=T.length-1,c=C-1;c>=0;c--){const e=_+c,h=t[e],d=e+1<u?t[e+1].el:r;0===E[c]?y(null,h,n,d,i,s,o,a,l):b&&(m<0||c!==T[m]?K(h,n,d,2):m--)}}},K=(e,t,r,i,s=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void K(e.component.subTree,t,r,i);if(128&u)return void e.suspense.move(t,r,i);if(64&u)return void a.move(e,t,r,re);if(a===Ln){n(o,t,r);for(let e=0;e<c.length;e++)K(c[e],t,r,i);return void n(e.anchor,t,r)}if(a===jn)return void T(e,t,r);if(2!==i&&1&u&&l)if(0===i)l.beforeEnter(o),n(o,t,r),xn((()=>l.enter(o)),s);else{const{leave:e,delayLeave:i,afterLeave:s}=l,a=()=>n(o,t,r),c=()=>{e(o,(()=>{a(),s&&s()}))};i?i(o,a,c):c()}else n(o,t,r)},Q=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Nn(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!Mt(e);let _;if(f&&(_=o&&o.onVnodeBeforeUnmount)&&Rn(_,t,e),6&u)Z(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&Tn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,re,r):c&&(s!==Ln||h>0&&64&h)?ee(c,t,n,!1,!0):(s===Ln&&384&h||!i&&16&u)&&ee(l,t,n),r&&X(e)}(f&&(_=o&&o.onVnodeUnmounted)||p)&&xn((()=>{_&&Rn(_,t,e),p&&Tn(e,null,t,"unmounted")}),n)},X=e=>{const{type:t,el:n,anchor:i,transition:s}=e;if(t===Ln)return void J(n,i);if(t===jn)return void k(e);const o=()=>{r(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},J=(e,t)=>{let n;for(;e!==t;)n=f(e),r(e),e=n;r(t)},Z=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:o,um:a}=e;r&&W(r),i.stop(),s&&(s.active=!1,Q(o,e,t,n)),a&&xn(a,t),xn((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},ee=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)Q(e[o],t,n,r,i)},te=e=>6&e.shapeFlag?te(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),ne=(e,t,n)=>{null==e?t._vnode&&Q(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),Wr(),t._vnode=e},re={p:y,um:Q,m:K,r:X,mt:j,mc:N,pc:z,pbc:O,n:te,o:e};let se,oe;t&&([se,oe]=t(re));return{render:ne,hydrate:se,createApp:Sn(ne,se)}}(e)}function Nn(e,t,n,r,i=!1){if(b(e))return void e.forEach(((e,s)=>Nn(e,t&&(b(t)?t[s]:t),n,r,i)));if(Mt(r)&&!i)return;const s=4&r.shapeFlag?yr(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=e,c=t&&t.r,h=a.refs===u?a.refs={}:a.refs,d=a.setupState;if(null!=c&&c!==l&&(k(c)?(h[c]=null,C(d,c)&&(d[c]=null)):dt(c)&&(c.value=null)),k(l)){const e=()=>{h[l]=o,C(d,l)&&(d[l]=o)};o?(e.id=-1,xn(e,n)):e()}else if(dt(l)){const e=()=>{l.value=o};o?(e.id=-1,xn(e,n)):e()}else T(l)&&br(l,a,12,[o,h])}function Rn(e,t,n,r=null){wr(e,t,7,[n,r])}function On(e,t,n=!1){const r=e.children,i=t.children;if(b(r)&&b(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=ir(i[s]),t.el=e.el),n||On(e,t))}}function An(e,t){return function(e,t,n=!0,r=!1){const i=Tt||dr;if(i){const n=i.type;if("components"===e){const e=Cr(n);if(e&&(e===t||e===L(t)||e===j(L(t))))return n}const s=Mn(i[e]||n[e],t)||Mn(i.appContext[e],t);return!s&&r?n:s}}("components",e,!0,t)||e}const Dn=Symbol();function Mn(e,t){return e&&(e[t]||e[L(t)]||e[j(L(t))])}const Ln=Symbol(void 0),Fn=Symbol(void 0),qn=Symbol(void 0),jn=Symbol(void 0),Bn=[];let Un=null;function Wn(e=!1){Bn.push(Un=e?null:[])}let Hn=1;function Vn(e){Hn+=e}function zn(e){return e.dynamicChildren=Hn>0?Un||h:null,Bn.pop(),Un=Bn[Bn.length-1]||null,Hn>0&&Un&&Un.push(e),e}function $n(e,t,n,r,i,s){return zn(Zn(e,t,n,r,i,s,!0))}function Gn(e,t,n,r,i){return zn(er(e,t,n,r,i,!0))}function Yn(e){return!!e&&!0===e.__v_isVNode}function Kn(e,t){return e.type===t.type&&e.key===t.key}const Qn="__vInternal",Xn=({key:e})=>null!=e?e:null,Jn=({ref:e})=>null!=e?k(e)||dt(e)||T(e)?{i:Tt,r:e}:e:null;function Zn(e,t=null,n=null,r=0,i=null,s=(e===Ln?0:1),o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Xn(t),ref:t&&Jn(t),scopeId:kt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(sr(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=k(n)?8:16),Hn>0&&!o&&Un&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&Un.push(l),l}const er=function(e,t=null,n=null,i=0,s=null,o=!1){e&&e!==Dn||(e=qn);if(Yn(e)){const r=tr(e,t,!0);return n&&sr(r,n),r}l=e,T(l)&&"__vccOpts"in l&&(e=e.__vccOpts);var l;if(t){t=function(e){return e?ot(e)||Qn in e?m({},e):e:null}(t);let{class:e,style:n}=t;e&&!k(e)&&(t.class=a(e)),S(n)&&(ot(n)&&!b(n)&&(n=m({},n)),t.style=r(n))}const c=k(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:S(e)?4:T(e)?2:0;return Zn(e,t,n,i,s,c,o,!0)};function tr(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:l}=e,c=t?function(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=a([t.class,i.class]));else if("style"===e)t.style=r([t.style,i.style]);else if(_(e)){const n=t[e],r=i[e];n!==r&&(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=i[e])}return t}(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Xn(c),ref:t&&t.ref?n&&s?b(s)?s.concat(Jn(t)):[s,Jn(t)]:Jn(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ln?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&tr(e.ssContent),ssFallback:e.ssFallback&&tr(e.ssFallback),el:e.el,anchor:e.anchor}}function nr(e=" ",t=0){return er(Fn,null,e,t)}function rr(e){return null==e||"boolean"==typeof e?er(qn):b(e)?er(Ln,null,e.slice()):"object"==typeof e?ir(e):er(Fn,null,String(e))}function ir(e){return null===e.el||e.memo?e:tr(e)}function sr(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(b(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),sr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Qn in t?3===r&&Tt&&(1===Tt.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Tt}}else T(t)?(t={default:t,_ctx:Tt},n=32):(t=String(t),64&r?(n=16,t=[nr(t)]):n=8);e.children=t,e.shapeFlag|=n}function or(e,t,n,r){let i;const s=n&&n[r];if(b(e)||k(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if(S(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}const ar=e=>e?_r(e)?yr(e)||e.proxy:ar(e.parent):null,lr=m(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ar(e.parent),$root:e=>ar(e.root),$emit:e=>e.emit,$options:e=>rn(e),$forceUpdate:e=>()=>qr(e.update),$nextTick:e=>Fr.bind(e.proxy),$watch:e=>Yr.bind(e)}),cr={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=e;let c;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 0:return r[t];case 1:return i[t];case 3:return n[t];case 2:return s[t]}else{if(r!==u&&C(r,t))return o[t]=0,r[t];if(i!==u&&C(i,t))return o[t]=1,i[t];if((c=e.propsOptions[0])&&C(c,t))return o[t]=2,s[t];if(n!==u&&C(n,t))return o[t]=3,n[t];Zt&&(o[t]=4)}}const h=lr[t];let d,p;return h?("$attrs"===t&&ue(e,0,t),h(e)):(d=a.__cssModules)&&(d=d[t])?d:n!==u&&C(n,t)?(o[t]=3,n[t]):(p=l.config.globalProperties,C(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;if(i!==u&&C(i,t))i[t]=n;else if(r!==u&&C(r,t))r[t]=n;else if(C(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return void 0!==n[o]||e!==u&&C(e,o)||t!==u&&C(t,o)||(a=s[0])&&C(a,o)||C(r,o)||C(lr,o)||C(i.config.globalProperties,o)}},ur=kn();let hr=0;let dr=null;const pr=e=>{dr=e,e.scope.on()},fr=()=>{dr&&dr.scope.off(),dr=null};function _r(e){return 4&e.vnode.shapeFlag}let gr=!1;function mr(e,t,n){T(t)?e.render=t:S(t)&&(e.setupState=vt(t)),vr(e)}function vr(e,t,n){const r=e.type;e.render||(e.render=r.render||d),pr(e),le(),en(e),ce(),fr()}function yr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(vt(lt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in lr?lr[n](e):void 0}))}function Cr(e){return T(e)&&e.displayName||e.name}function br(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Er(s,t,n)}return i}function wr(e,t,n,r){if(T(e)){const i=br(e,t,n,r);return i&&x(i)&&i.catch((e=>{Er(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(wr(e[s],t,n,r));return i}function Er(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void br(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let Tr=!1,kr=!1;const Ir=[];let Sr=0;const xr=[];let Pr=null,Nr=0;const Rr=[];let Or=null,Ar=0;const Dr=Promise.resolve();let Mr=null,Lr=null;function Fr(e){const t=Mr||Dr;return e?t.then(this?e.bind(this):e):t}function qr(e){Ir.length&&Ir.includes(e,Tr&&e.allowRecurse?Sr+1:Sr)||e===Lr||(null==e.id?Ir.push(e):Ir.splice(function(e){let t=Sr+1,n=Ir.length;for(;t<n;){const r=t+n>>>1;Hr(Ir[r])<e?t=r+1:n=r}return t}(e.id),0,e),jr())}function jr(){Tr||kr||(kr=!0,Mr=Dr.then(Vr))}function Br(e,t,n,r){b(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),jr()}function Ur(e,t=null){if(xr.length){for(Lr=t,Pr=[...new Set(xr)],xr.length=0,Nr=0;Nr<Pr.length;Nr++)Pr[Nr]();Pr=null,Nr=0,Lr=null,Ur(e,t)}}function Wr(e){if(Rr.length){const e=[...new Set(Rr)];if(Rr.length=0,Or)return void Or.push(...e);for(Or=e,Or.sort(((e,t)=>Hr(e)-Hr(t))),Ar=0;Ar<Or.length;Ar++)Or[Ar]();Or=null,Ar=0}}const Hr=e=>null==e.id?1/0:e.id;function Vr(e){kr=!1,Tr=!0,Ur(e),Ir.sort(((e,t)=>Hr(e)-Hr(t)));try{for(Sr=0;Sr<Ir.length;Sr++){const e=Ir[Sr];e&&!1!==e.active&&br(e,null,14)}}finally{Sr=0,Ir.length=0,Wr(),Tr=!1,Mr=null,(Ir.length||xr.length||Rr.length)&&Vr(e)}}const zr={};function $r(e,t,n){return Gr(e,t,n)}function Gr(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=u){const a=dr;let l,c,h=!1,p=!1;if(dt(e)?(l=()=>e.value,h=!!e._shallow):it(e)?(l=()=>e,r=!0):b(e)?(p=!0,h=e.some(it),l=()=>e.map((e=>dt(e)?e.value:it(e)?Qr(e):T(e)?br(e,a,2):void 0))):l=T(e)?t?()=>br(e,a,2):()=>{if(!a||!a.isUnmounted)return c&&c(),wr(e,a,3,[f])}:d,t&&r){const e=l;l=()=>Qr(e())}let f=e=>{c=y.onStop=()=>{br(e,a,4)}},_=p?[]:zr;const g=()=>{if(y.active)if(t){const e=y.run();(r||h||(p?e.some(((e,t)=>U(e,_[t]))):U(e,_)))&&(c&&c(),wr(t,a,3,[e,_===zr?void 0:_,f]),_=e)}else y.run()};let m;g.allowRecurse=!!t,m="sync"===i?g:"post"===i?()=>xn(g,a&&a.suspense):()=>{!a||a.isMounted?function(e){Br(e,Pr,xr,Nr)}(g):g()};const y=new ie(l,m);return t?n?g():_=y.run():"post"===i?xn(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&v(a.scope.effects,y)}}function Yr(e,t,n){const r=this.proxy,i=k(e)?e.includes(".")?Kr(r,e):()=>r[e]:e.bind(r,r);let s;T(t)?s=t:(s=t.handler,n=t);const o=dr;pr(this);const a=Gr(i,s.bind(r),n);return o?pr(o):fr(),a}function Kr(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Qr(e,t=new Set){if(!S(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),dt(e))Qr(e.value,t);else if(b(e))for(let n=0;n<e.length;n++)Qr(e[n],t);else if(E(e)||w(e))e.forEach((e=>{Qr(e,t)}));else if(R(e))for(const n in e)Qr(e[n],t);return e}function Xr(e,t,n){const r=arguments.length;return 2===r?S(t)&&!b(t)?Yn(t)?er(e,null,[t]):er(e,t):er(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Yn(n)&&(n=[n]),er(e,t,n))}const Jr="3.2.11",Zr="undefined"!=typeof document?document:null,ei=new Map,ti={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?Zr.createElementNS("http://www.w3.org/2000/svg",e):Zr.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>Zr.createTextNode(e),createComment:e=>Zr.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Zr.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let s=ei.get(e);if(!s){const t=Zr.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,s=t.content,r){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e)}ei.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const ni=/\s*!important$/;function ri(e,t,n){if(b(n))n.forEach((n=>ri(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=si[t];if(n)return n;let r=L(t);if("filter"!==r&&r in e)return si[t]=r;r=j(r);for(let i=0;i<ii.length;i++){const n=ii[i]+r;if(n in e)return si[t]=n}return t}(e,t);ni.test(n)?e.setProperty(q(r),n.replace(ni,""),"important"):e[r]=n}}const ii=["Webkit","Moz","ms"],si={};const oi="http://www.w3.org/1999/xlink";let ai=Date.now,li=!1;if("undefined"!=typeof window){ai()>document.createEvent("Event").timeStamp&&(ai=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);li=!!(e&&Number(e[1])<=53)}let ci=0;const ui=Promise.resolve(),hi=()=>{ci=0};function di(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(pi.test(e)){let n;for(t={};n=e.match(pi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[q(e.slice(2)),t]}(t);if(r){!function(e,t,n,r){e.addEventListener(t,n,r)}(e,n,s[t]=function(e,t){const n=e=>{const r=e.timeStamp||ai();(li||r>=n.attached-1)&&wr(function(e,t){if(b(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>ci||(ui.then(hi),ci=ai()))(),n}(r,i),a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const pi=/(?:Once|Passive|Capture)$/;const fi=/^on[a-z]/;const _i=m({patchProp:(e,r,i,s,o=!1,a,l,c,u)=>{"class"===r?function(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,s,o):"style"===r?function(e,t,n){const r=e.style,i=r.display;if(n)if(k(n))t!==n&&(r.cssText=n);else{for(const e in n)ri(r,e,n[e]);if(t&&!k(t))for(const e in t)null==n[e]&&ri(r,e,"")}else e.removeAttribute("style");"_vod"in e&&(r.display=i)}(e,i,s):_(r)?g(r)||di(e,r,0,s,l):("."===r[0]?(r=r.slice(1),1):"^"===r[0]?(r=r.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&fi.test(t)&&T(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(fi.test(t)&&k(n))return!1;return t in e}(e,r,s,o))?function(e,t,r,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==r?"":r);if("value"===t&&"PROGRESS"!==e.tagName){e._value=r;const n=null==r?"":r;return e.value!==n&&(e.value=n),void(null==r&&e.removeAttribute(t))}if(""===r||null==r){const i=typeof e[t];if("boolean"===i)return void(e[t]=n(r));if(null==r&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(l){}return void e.removeAttribute(t)}}try{e[t]=r}catch(c){}}(e,r,s,a,l,c,u):("true-value"===r?e._trueValue=s:"false-value"===r&&(e._falseValue=s),function(e,r,i,s,o){if(s&&r.startsWith("xlink:"))null==i?e.removeAttributeNS(oi,r.slice(6,r.length)):e.setAttributeNS(oi,r,i);else{const s=t(r);null==i||s&&!n(i)?e.removeAttribute(r):e.setAttribute(r,s?"":i)}}(e,r,s,o))}},ti);let gi;const mi=(...e)=>{const t=(gi||(gi=Pn(_i))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(k(e)){return document.querySelector(e)}return e}(e);if(!r)return;const i=t._component;T(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function vi(){return"undefined"!=typeof navigator?window:"undefined"!=typeof global?global:{}}function yi(e,t){const n=vi().__VUE_DEVTOOLS_GLOBAL_HOOK__;if(n)n.emit("devtools-plugin:setup",e,t);else{const n=vi();(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:e,setupFn:t})}}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */function Ci(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function bi(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function wi(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;Ti(e,n,[],e._modules.root,!0),Ei(e,n,t)}function Ei(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};Ci(i,(function(t,n){s[n]=function(e,t){return function(){return e(t)}}(t,e),Object.defineProperty(e.getters,n,{get:function(){return s[n]()},enumerable:!0})})),e._state=tt({data:t}),e.strict&&function(e){$r((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),r&&n&&e._withCommit((function(){r.data=null}))}function Ti(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=Ii(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=r.state}))}var c=r.context=function(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=Si(n,r,i),o=s.payload,a=s.options,l=s.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:r?e.commit:function(n,r,i){var s=Si(n,r,i),o=s.payload,a=s.options,l=s.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return ki(e,t)}},state:{get:function(){return Ii(e.state,n)}}}),i}(e,o,n);r.forEachMutation((function(t,n){!function(e,t,n,r){(e._mutations[t]||(e._mutations[t]=[])).push((function(t){n.call(e,r.state,t)}))}(e,o+n,t,c)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;!function(e,t,n,r){(e._actions[t]||(e._actions[t]=[])).push((function(t){var i,s=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return(i=s)&&"function"==typeof i.then||(s=Promise.resolve(s)),e._devtoolHook?s.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):s}))}(e,r,i,c)})),r.forEachGetter((function(t,n){!function(e,t,n,r){if(e._wrappedGetters[t])return;e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}(e,o+n,t,c)})),r.forEachChild((function(r,s){Ti(e,t,n.concat(s),r,i)}))}function ki(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function Ii(e,t){return t.reduce((function(e,t){return e[t]}),e)}function Si(e,t,n){var r;return null!==(r=e)&&"object"==typeof r&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var xi=0;function Pi(e,t){yi({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:"vuex:mutations",label:"Vuex Mutations",color:Ni}),n.addTimelineLayer({id:"vuex:actions",label:"Vuex Actions",color:Ni}),n.addInspector({id:"vuex",label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&"vuex"===n.inspectorId)if(n.filter){var r=[];Di(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[Ai(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var r=n.nodeId;ki(t,r),n.state=function(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=function(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=Mi((function(){return e[n]}))}else t[n]=Mi((function(){return e[n]}))})),t}(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?Oi(e):e,editable:!1,value:Mi((function(){return s[e]}))}}))}return i}((i=t._modules,(o=(s=r).split("/").filter((function(e){return e}))).reduce((function(e,t,n){var r=e[t];if(!r)throw new Error('Missing module "'+t+'" for path "'+s+'".');return n===o.length-1?r:r._children}),"root"===s?i:i.root._children)),"root"===r?t.getters:t._makeLocalGettersCache,r)}var i,s,o})),n.on.editInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree("vuex"),n.sendInspectorState("vuex"),n.addTimelineEvent({layerId:"vuex:mutations",event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=xi++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var Ni=8702998,Ri={label:"namespaced",textColor:16777215,backgroundColor:6710886};function Oi(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function Ai(e,t){return{id:t||"root",label:Oi(t),tags:e.namespaced?[Ri]:[],children:Object.keys(e._children).map((function(n){return Ai(e._children[n],t+n+"/")}))}}function Di(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[Ri]:[]}),Object.keys(t._children).forEach((function(i){Di(e,t._children[i],n,r+i+"/")}))}function Mi(e){try{return e()}catch(t){return t}}var Li=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"==typeof n?n():n)||{}},Fi={namespaced:{configurable:!0}};Fi.namespaced.get=function(){return!!this._rawModule.namespaced},Li.prototype.addChild=function(e,t){this._children[e]=t},Li.prototype.removeChild=function(e){delete this._children[e]},Li.prototype.getChild=function(e){return this._children[e]},Li.prototype.hasChild=function(e){return e in this._children},Li.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Li.prototype.forEachChild=function(e){Ci(this._children,e)},Li.prototype.forEachGetter=function(e){this._rawModule.getters&&Ci(this._rawModule.getters,e)},Li.prototype.forEachAction=function(e){this._rawModule.actions&&Ci(this._rawModule.actions,e)},Li.prototype.forEachMutation=function(e){this._rawModule.mutations&&Ci(this._rawModule.mutations,e)},Object.defineProperties(Li.prototype,Fi);var qi=function(e){this.register([],e,!1)};function ji(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;ji(e.concat(r),t.getChild(r),n.modules[r])}}function Bi(e){return new Ui(e)}qi.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},qi.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return e+((t=t.getChild(n)).namespaced?n+"/":"")}),"")},qi.prototype.update=function(e){ji([],this.root,e)},qi.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new Li(t,n);0===e.length?this.root=i:this.get(e.slice(0,-1)).addChild(e[e.length-1],i);t.modules&&Ci(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},qi.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},qi.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var Ui=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new qi(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,o=this.dispatch,a=this.commit;this.dispatch=function(e,t){return o.call(s,e,t)},this.commit=function(e,t,n){return a.call(s,e,t,n)},this.strict=r;var l=this._modules.root.state;Ti(this,l,[],this._modules.root),Ei(this,l),n.forEach((function(e){return e(t)}))},Wi={state:{configurable:!0}};Ui.prototype.install=function(e,t){e.provide(t||"store",this),e.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&Pi(e,this)},Wi.state.get=function(){return this._state.data},Wi.state.set=function(e){},Ui.prototype.commit=function(e,t,n){var r=this,i=Si(e,t,n),s=i.type,o=i.payload,a={type:s,payload:o},l=this._mutations[s];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},Ui.prototype.dispatch=function(e,t){var n=this,r=Si(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(c){}var l=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(c){}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(c){}t(e)}))}))}},Ui.prototype.subscribe=function(e,t){return bi(e,this._subscribers,t)},Ui.prototype.subscribeAction=function(e,t){return bi("function"==typeof e?{before:e}:e,this._actionSubscribers,t)},Ui.prototype.watch=function(e,t,n){var r=this;return $r((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},Ui.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},Ui.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=[e]),this._modules.register(e,t),Ti(this,this.state,e,this._modules.get(e),n.preserveState),Ei(this,this.state)},Ui.prototype.unregisterModule=function(e){var t=this;"string"==typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){delete Ii(t.state,e.slice(0,-1))[e[e.length-1]]})),wi(this)},Ui.prototype.hasModule=function(e){return"string"==typeof e&&(e=[e]),this._modules.isRegistered(e)},Ui.prototype.hotUpdate=function(e){this._modules.update(e),wi(this,!0)},Ui.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(Ui.prototype,Wi);
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
var Hi=function(e,t){return(Hi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function Vi(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{l(r.next(e))}catch(t){s(t)}}function a(e){try{l(r.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))}function zi(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function $i(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Gi(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function Yi(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}
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
 */var Ki=!1,Qi="${JSCORE_VERSION}",Xi=function(e,t){if(!e)throw Ji(t)},Ji=function(e){return new Error("Firebase Database ("+Qi+") INTERNAL ASSERT FAILED: "+e)},Zi=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},es={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|c>>6,p=63&c;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Zi(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,l=++i<e.length?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==l)throw Error();var c=s<<2|o>>4;if(r.push(c),64!==a){var u=o<<4&240|a>>2;if(r.push(u),64!==l){var h=a<<6&192|l;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ts=function(e){try{return es.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function ns(e){return rs(void 0,e)}function rs(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=rs(e[n],t[n]));return e}
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
var is=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
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
 */function ss(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function os(){return!0===Ki}
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
 */var as=function(e){function t(n,r,i){var s=e.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,ls.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}Hi(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),ls=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,s=this.errors[e],o=s?cs(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",l=new as(i,a,r);return l},e}();function cs(e,t){return e.replace(us,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var us=/\{\$([^}]+)}/g;
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
 */function hs(e){return JSON.parse(e)}function ds(e){return JSON.stringify(e)}
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
 */var ps=function(e){var t={},n={},r={},i="";try{var s=e.split(".");t=hs(ts(s[0])||""),n=hs(ts(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(o){}return{header:t,claims:n,data:r,signature:i}};
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
function fs(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _s(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function gs(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ms(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function vs(e,t){if(e===t)return!0;for(var n=Object.keys(e),r=Object.keys(t),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=e[o],l=t[o];if(ys(a)&&ys(l)){if(!vs(a,l))return!1}else if(a!==l)return!1}for(var c=0,u=r;c<u.length;c++){o=u[c];if(!n.includes(o))return!1}return!0}function ys(e){return null!==e&&"object"==typeof e}
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
var Cs=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var s,o,a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],u=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(s=u^l&(c^u),o=1518500249):(s=l^c^u,o=1859775393):r<60?(s=l&c|u&(l|c),o=2400959708):(s=l^c^u,o=3395469782);i=(a<<5|a>>>27)+s+h+o+n[r]&4294967295;h=u,u=c,c=4294967295&(l<<30|l>>>2),l=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++r,++s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++r,++s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e},e}();function bs(e,t){return e+" failed: "+t+" argument "}
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
 */var ws=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
function Es(e){return e&&e._delegate?e._delegate:e}var Ts=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),ks=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new is;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(u){}try{for(var r=$i(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=Gi(i.value,2),o=s[0],a=s[1],l=this.normalizeInstanceIdentifier(o);try{var c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch(u){}}}catch(h){t={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Vi(this,void 0,void 0,(function(){var e;return zi(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Yi(Yi([],Gi(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Gi(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e="[DEFAULT]"),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=$i(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var c=Gi(l.value,2),u=c[0],h=c[1];s===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(d){t={error:d}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=$i(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(l){}}}catch(c){n={error:c}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
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
 */var Is,Ss,xs,Ps=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new ks(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
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
***************************************************************************** */function Ns(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
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
 */(xs=Ss||(Ss={}))[xs.DEBUG=0]="DEBUG",xs[xs.VERBOSE=1]="VERBOSE",xs[xs.INFO=2]="INFO",xs[xs.WARN=3]="WARN",xs[xs.ERROR=4]="ERROR",xs[xs.SILENT=5]="SILENT";var Rs={debug:Ss.DEBUG,verbose:Ss.VERBOSE,info:Ss.INFO,warn:Ss.WARN,error:Ss.ERROR,silent:Ss.SILENT},Os=Ss.INFO,As=((Is={})[Ss.DEBUG]="log",Is[Ss.VERBOSE]="log",Is[Ss.INFO]="info",Is[Ss.WARN]="warn",Is[Ss.ERROR]="error",Is),Ds=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=As[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,Ns(["["+i+"]  "+e.name+":"],n))}},Ms=function(){function e(e){this.name=e,this._logLevel=Os,this._logHandler=Ds,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Ss))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?Rs[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ns([this,Ss.DEBUG],e)),this._logHandler.apply(this,Ns([this,Ss.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ns([this,Ss.VERBOSE],e)),this._logHandler.apply(this,Ns([this,Ss.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ns([this,Ss.INFO],e)),this._logHandler.apply(this,Ns([this,Ss.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ns([this,Ss.WARN],e)),this._logHandler.apply(this,Ns([this,Ss.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ns([this,Ss.ERROR],e)),this._logHandler.apply(this,Ns([this,Ss.ERROR],e))},e}();
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
class Ls{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Fs=new Ms("@firebase/app"),qs={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},js=new Map,Bs=new Map;function Us(e,t){try{e.container.addComponent(t)}catch(n){Fs.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ws(e){const t=e.name;if(Bs.has(t))return Fs.debug(`There were multiple attempts to register component ${t}.`),!1;Bs.set(t,e);for(const n of js.values())Us(n,e);return!0}
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
const Hs=new ls("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Vs{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ts("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hs.create("app-deleted",{appName:this._name})}}
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
 */function zs(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Hs.create("bad-app-name",{appName:String(r)});const i=js.get(r);if(i){if(vs(e,i.options)&&vs(n,i.config))return i;throw Hs.create("duplicate-app",{appName:r})}const s=new Ps(r);for(const a of Bs.values())s.addComponent(a);const o=new Vs(e,n,s);return js.set(r,o),o}function $s(e,t,n){var r;let i=null!==(r=qs[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Fs.warn(e.join(" "))}Ws(new Ts(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
 */var Gs;Ws(new Ts("platform-logger",(e=>new Ls(e)),"PRIVATE")),$s("@firebase/app","0.7.0",Gs),$s("fire-js","");
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
$s("firebase","9.0.2","app");
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const Ys="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,Ks=e=>Ys?Symbol(e):"_vr_"+e,Qs=Ks("rvlm"),Xs=Ks("rvd"),Js=Ks("r"),Zs=Ks("rl"),eo=Ks("rvl"),to="undefined"!=typeof window;const no=Object.assign;function ro(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const io=()=>{},so=/\/$/;function oo(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),l=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),i=e(s)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function ao(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function lo(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function co(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!uo(e[n],t[n]))return!1;return!0}function uo(e,t){return Array.isArray(e)?ho(e,t):Array.isArray(t)?ho(t,e):e===t}function ho(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var po,fo,_o,go;function mo(e){if(!e)if(to){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(so,"")}(fo=po||(po={})).pop="pop",fo.push="push",(go=_o||(_o={})).back="back",go.forward="forward",go.unknown="";const vo=/^[^#]+#/;function yo(e,t){return e.replace(vo,"#")+t}const Co=()=>({left:window.pageXOffset,top:window.pageYOffset});function bo(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),i="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function wo(e,t){return(history.state?history.state.position-t:-1)+e}const Eo=new Map;function To(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),ao(n,"")}return ao(n,e)+r+i}function ko(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Co():null}}function Io(e){const{history:t,location:n}=window,r={value:To(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[o?"replaceState":"pushState"](s,"",l),i.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:function(e,n){const o=no({},i.value,t.state,{forward:e,scroll:Co()});s(o.current,o,!0),s(e,no({},ko(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){s(e,no({},t.state,ko(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}}}function So(e){const t=Io(e=mo(e)),n=function(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=To(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:u,type:po.pop,direction:u?u>0?_o.forward:_o.back:_o.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(no({},e.state,{scroll:Co()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:function(){o=n.value},listen:function(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace);const r=no({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:yo.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function xo(e){return"string"==typeof e||"symbol"==typeof e}const Po={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},No=Ks("nf");var Ro,Oo;function Ao(e,t){return no(new Error,{type:e,[No]:!0},t)}function Do(e,t){return e instanceof Error&&No in e&&(null==t||!!(e.type&t))}(Oo=Ro||(Ro={}))[Oo.aborted=4]="aborted",Oo[Oo.cancelled=8]="cancelled",Oo[Oo.duplicated=16]="duplicated";const Mo={sensitive:!1,strict:!1,start:!0,end:!0},Lo=/[.+*?^${}()[\]/\\]/g;function Fo(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function qo(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const e=Fo(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const jo={type:0,value:""},Bo=/[a-zA-Z0-9_]/;function Uo(e,t,n){const r=function(e,t){const n=no({},Mo,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(Lo,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const h=u||"[^/]+?";if("[^/]+?"!==h){o+=10;try{new RegExp(`(${h})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+a.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=c&&l.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");return{re:o,score:r,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(Array.isArray(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=Array.isArray(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[jo]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<e.length;)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:Bo.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}(e.path),n),i=no(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Wo(e,t){const n=[],r=new Map;function i(e,n,r){const a=!r,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Ho(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);l.aliasOf=r&&r.record;const c=$o(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(no({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=Uo(t,n,c),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!Vo(h)&&s(e.name)),"children"in l){const e=l.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,o(h)}return d?()=>{s(d)}:io}function s(e){if(xo(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&qo(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!Vo(e)&&r.set(e.record.name,e)}return t=$o({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:function(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Ao(1,{location:e});o=i.record.name,a=no(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Ao(1,{location:e,currentLocation:t});o=i.record.name,a=no({},t.params,e.params),s=i.stringify(a)}const l=[];let c=i;for(;c;)l.unshift(c.record),c=c.parent;return{name:o,path:s,params:a,matched:l,meta:zo(l)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function Ho(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function Vo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function zo(e){return e.reduce(((e,t)=>no(e,t.meta)),{})}function $o(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const Go=/#/g,Yo=/&/g,Ko=/\//g,Qo=/=/g,Xo=/\?/g,Jo=/\+/g,Zo=/%5B/g,ea=/%5D/g,ta=/%5E/g,na=/%60/g,ra=/%7B/g,ia=/%7C/g,sa=/%7D/g,oa=/%20/g;function aa(e){return encodeURI(""+e).replace(ia,"|").replace(Zo,"[").replace(ea,"]")}function la(e){return aa(e).replace(Jo,"%2B").replace(oa,"+").replace(Go,"%23").replace(Yo,"%26").replace(na,"`").replace(ra,"{").replace(sa,"}").replace(ta,"^")}function ca(e){return null==e?"":function(e){return aa(e).replace(Go,"%23").replace(Xo,"%3F")}(e).replace(Ko,"%2F")}function ua(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function ha(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(Jo," "),i=e.indexOf("="),s=ua(i<0?e:e.slice(0,i)),o=i<0?null:ua(e.slice(i+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function da(e){let t="";for(let n in e){const r=e[n];if(n=la(n).replace(Qo,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&la(e))):[r&&la(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function pa(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function fa(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function _a(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const l=e=>{var l;!1===e?a(Ao(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(l=e)||l&&"object"==typeof l?a(Ao(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"==typeof e&&s.push(e),o())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function ga(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&i.push(_a(s,n,r,o,e))}else{let s=a();i.push((()=>s.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=i).__esModule||Ys&&"Module"===a[Symbol.toStringTag]?i.default:i;var a;o.components[e]=s;const l=(s.__vccOpts||s)[t];return l&&_a(l,n,r,o,e)()}))))}}var s;return i}function ma(e){const t=At(Js),n=At(Zs),r=Ct((()=>t.resolve(gt(e.to)))),i=Ct((()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(lo.bind(null,i));if(o>-1)return o;const a=ya(e[t-2]);return t>1&&ya(i)===a&&s[s.length-1].path!==a?s.findIndex(lo.bind(null,e[t-2])):o})),s=Ct((()=>i.value>-1&&function(e,t){for(const n in t){const r=t[n],i=e[n];if("string"==typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}(n.params,r.value.params))),o=Ct((()=>i.value>-1&&i.value===n.matched.length-1&&co(n.params,r.value.params)));return{route:r,href:Ct((()=>r.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[gt(e.replace)?"replace":"push"](gt(e.to)).catch(io):Promise.resolve()}}}const va=Dt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ma,setup(e,{slots:t}){const n=tt(ma(e)),{options:r}=At(Js),i=Ct((()=>({[Ca(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ca(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:Xr("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function ya(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ca=(e,t,n)=>null!=e?e:null!=t?t:n;function ba(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const wa=Dt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=At(eo),i=Ct((()=>e.route||r.value)),s=At(Xs,0),o=Ct((()=>i.value.matched[s]));Ot(Xs,s+1),Ot(Qs,o),Ot(eo,i);const a=pt();return $r((()=>[a.value,o.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&lo(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=i.value,s=o.value,l=s&&s.components[e.name],c=e.name;if(!l)return ba(n.default,{Component:l,route:r});const u=s.props[e.name],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=Xr(l,no({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(s.instances[c]=null)},ref:a}));return ba(n.default,{Component:d,route:r})||d}}});function Ea(e){const t=Wo(e.routes,e),n=e.parseQuery||ha,r=e.stringifyQuery||da,i=e.history,s=fa(),o=fa(),a=fa(),l=_t(Po,!0);let c=Po;to&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ro.bind(null,(e=>""+e)),h=ro.bind(null,ca),d=ro.bind(null,ua);function p(e,s){if(s=no({},s||l.value),"string"==typeof e){const r=oo(n,e,s.path),o=t.resolve({path:r.path},s),a=i.createHref(r.fullPath);return no(r,o,{params:d(o.params),hash:ua(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=no({},e,{path:oo(n,e.path,s.path).path});else{const t=no({},e.params);for(const e in t)null==t[e]&&delete t[e];o=no({},e,{params:h(e.params)}),s.params=h(s.params)}const a=t.resolve(o,s),c=e.hash||"";a.params=u(d(a.params));const p=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,no({},e,{hash:(f=c,aa(f).replace(ra,"{").replace(sa,"}").replace(ta,"^")),path:a.path}));var f;const _=i.createHref(p);return no({fullPath:p,hash:c,query:r===da?pa(e.query):e.query||{}},a,{redirectedFrom:void 0,href:_})}function f(e){return"string"==typeof e?oo(n,e,l.value.path):no({},e)}function _(e,t){if(c!==e)return Ao(8,{from:t,to:e})}function g(e){return v(e)}function m(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=f(r):{path:r},r.params={}),no({query:e.query,hash:e.hash,params:e.params},r)}}function v(e,t){const n=c=p(e),i=l.value,s=e.state,o=e.force,a=!0===e.replace,u=m(n);if(u)return v(no(f(u),{state:s,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&lo(t.matched[r],n.matched[i])&&co(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,i,n)&&(d=Ao(16,{to:h,from:i}),N(i,i,!0,!1)),(d?Promise.resolve(d):C(h,i)).catch((e=>Do(e)?e:x(e,h,i))).then((e=>{if(e){if(Do(e,2))return v(no(f(e.to),{state:s,force:o,replace:a}),t||h)}else e=w(h,i,!0,a,s);return b(h,i,e),e}))}function y(e,t){const n=_(e,t);return n?Promise.reject(n):Promise.resolve()}function C(e,t){let n;const[r,i,a]=function(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>lo(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>lo(e,a)))||i.push(a))}return[n,r,i]}(e,t);n=ga(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(_a(r,e,t))}));const l=y.bind(null,e,t);return n.push(l),Ta(n).then((()=>{n=[];for(const r of s.list())n.push(_a(r,e,t));return n.push(l),Ta(n)})).then((()=>{n=ga(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(_a(r,e,t))}));return n.push(l),Ta(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(_a(i,e,t));else n.push(_a(r.beforeEnter,e,t));return n.push(l),Ta(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ga(a,"beforeRouteEnter",e,t),n.push(l),Ta(n)))).then((()=>{n=[];for(const r of o.list())n.push(_a(r,e,t));return n.push(l),Ta(n)})).catch((e=>Do(e,8)?e:Promise.reject(e)))}function b(e,t,n){for(const r of a.list())r(e,t,n)}function w(e,t,n,r,s){const o=_(e,t);if(o)return o;const a=t===Po,c=to?history.state:{};n&&(r||a?i.replace(e.fullPath,no({scroll:a&&c&&c.scroll},s)):i.push(e.fullPath,s)),l.value=e,N(e,t,n,a),P()}let E;function T(){E=i.listen(((e,t,n)=>{const r=p(e),s=m(r);if(s)return void v(no(s,{replace:!0}),r).catch(io);c=r;const o=l.value;var a,u;to&&(a=wo(o.fullPath,n.delta),u=Co(),Eo.set(a,u)),C(r,o).catch((e=>Do(e,12)?e:Do(e,2)?(v(e.to,r).then((e=>{Do(e,20)&&!n.delta&&n.type===po.pop&&i.go(-1,!1)})).catch(io),Promise.reject()):(n.delta&&i.go(-n.delta,!1),x(e,r,o)))).then((e=>{(e=e||w(r,o,!1))&&(n.delta?i.go(-n.delta,!1):n.type===po.pop&&Do(e,20)&&i.go(-1,!1)),b(r,o,e)})).catch(io)}))}let k,I=fa(),S=fa();function x(e,t,n){P(e);const r=S.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function P(e){k||(k=!0,T(),I.list().forEach((([t,n])=>e?n(e):t())),I.reset())}function N(t,n,r,i){const{scrollBehavior:s}=e;if(!to||!s)return Promise.resolve();const o=!r&&function(e){const t=Eo.get(e);return Eo.delete(e),t}(wo(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Fr().then((()=>s(t,n,o))).then((e=>e&&bo(e))).catch((e=>x(e,t,n)))}const R=e=>i.go(e);let O;const A=new Set;return{currentRoute:l,addRoute:function(e,n){let r,i;return xo(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:p,options:e,push:g,replace:function(e){return g(no(f(e),{replace:!0}))},go:R,back:()=>R(-1),forward:()=>R(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:S.add,isReady:function(){return k&&l.value!==Po?Promise.resolve():new Promise(((e,t)=>{I.add([e,t])}))},install(e){e.component("RouterLink",va),e.component("RouterView",wa),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>gt(l)}),to&&!O&&l.value===Po&&(O=!0,g(i.location).catch((e=>{})));const t={};for(const r in Po)t[r]=Ct((()=>l.value[r]));e.provide(Js,this),e.provide(Zs,tt(t)),e.provide(eo,l);const n=e.unmount;A.add(e),e.unmount=function(){A.delete(e),A.size<1&&(c=Po,E&&E(),l.value=Po,O=!1,k=!1),n()}}}}function Ta(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}
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
let ka="";
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
class Ia{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ds(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:hs(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
 */class Sa{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return fs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
 */const xa=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Ia(t)}}catch(t){}return new Sa},Pa=xa("localStorage"),Na=xa("sessionStorage"),Ra=new Ms("@firebase/database"),Oa=function(){let e=1;return function(){return e++}}(),Aa=function(e){const t=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var s=i-55296;r++,Xi(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(s<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),n=new Cs;n.update(t);const r=n.digest();return es.encodeByteArray(r)},Da=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=Da.apply(null,r):t+="object"==typeof r?ds(r):r,t+=" "}return t};let Ma=null,La=!0;const Fa=function(...e){var t,n;if(!0===La&&(La=!1,null===Ma&&!0===Na.get("logging_enabled")&&(t=!0,Xi(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(Ra.logLevel=Ss.VERBOSE,Ma=Ra.log.bind(Ra),n&&Na.set("logging_enabled",!0)):"function"==typeof t?Ma=t:(Ma=null,Na.remove("logging_enabled")))),Ma){const t=Da.apply(null,e);Ma(t)}},qa=function(e){return function(...t){Fa(e,...t)}},ja=function(...e){const t="FIREBASE INTERNAL ERROR: "+Da(...e);Ra.error(t)},Ba=function(...e){const t=`FIREBASE FATAL ERROR: ${Da(...e)}`;throw Ra.error(t),new Error(t)},Ua=function(...e){const t="FIREBASE WARNING: "+Da(...e);Ra.warn(t)},Wa=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Ha="[MIN_NAME]",Va="[MAX_NAME]",za=function(e,t){if(e===t)return 0;if(e===Ha||t===Va)return-1;if(t===Ha||e===Va)return 1;{const n=Za(e),r=Za(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},$a=function(e,t){return e===t?0:e<t?-1:1},Ga=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ds(t))},Ya=function(e){if("object"!=typeof e||null===e)return ds(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=ds(t[r]),n+=":",n+=Ya(e[t[r]]);return n+="}",n},Ka=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function Qa(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Xa=function(e){Xi(!Wa(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const Ja=new RegExp("^-?(0*)\\d{1,10}$"),Za=function(e){if(Ja.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},el=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw Ua("Exception was thrown by user callback.",e),t}),Math.floor(0))}},tl=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
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
class nl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Ua(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class rl{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(Fa("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ua(e)}}class il{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}il.OWNER="owner";
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
const sl=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class ol{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Pa.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Pa.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function al(e,t,n){let r;if(Xi("string"==typeof t,"typeof type must == string"),Xi("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return Qa(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
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
 */class ll{constructor(){this.counters_={}}incrementCounter(e,t=1){fs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return ns(this.counters_)}}
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
 */const cl={},ul={};function hl(e){const t=e.toString();return cl[t]||(cl[t]=new ll),cl[t]}
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
class dl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&el((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */class pl{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=qa(e),this.stats_=hl(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),al(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new dl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new fl(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&sl.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pl.forceAllow_=!0}static forceDisallow(){pl.forceDisallow_=!0}static isAvailable(){return!!pl.forceAllow_||!(pl.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=ds(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(r=Zi(t),es.encodeByteArray(r,!0));var r;const i=Ka(n,1840);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=ds(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class fl{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Oa(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=fl.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){Fa("frame writing exception"),i.stack&&Fa(i.stack),Fa(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||Fa("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Fa("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
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
 */let _l=null;"undefined"!=typeof MozWebSocket?_l=MozWebSocket:"undefined"!=typeof WebSocket&&(_l=WebSocket);class gl{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=qa(this.connId),this.stats_=hl(t),this.connURL=gl.connectionURL_(t,s,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={v:"5"};return"undefined"!=typeof location&&location.hostname&&sl.test(location.hostname)&&(i.r="f"),t&&(i.s=t),n&&(i.ls=n),r&&(i.ac=r),al(e,"websocket",i)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Pa.set("previous_websocket_failure",!0);try{if(os());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new _l(this.connURL,[],e)}}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){gl.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==_l&&!gl.forceDisallow_}static previouslyFailed(){return Pa.isInMemoryStorage||!0===Pa.get("previous_websocket_failure")}markConnectionHealthy(){Pa.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=hs(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Xi(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=ds(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Ka(t,16384);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gl.responsesRequiredToBeHealthy=2,gl.healthyTimeout=3e4;
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
class ml{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pl,gl]}initTransports_(e){const t=gl&&gl.isAvailable();let n=t&&!gl.previouslyFailed();if(e.webSocketOnly&&(t||Ua("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[gl];else{const e=this.transports_=[];for(const t of ml.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
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
 */class vl{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=qa("c:"+this.id+":"),this.transportManager_=new ml(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=tl((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ga("t",e),n=Ga("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ga("t",e),n=Ga("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ga("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?ja("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ja("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Ua("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),tl((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):tl((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Pa.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class yl{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class Cl{constructor(e){this.allowedEvents_=e,this.listeners_={},Xi(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){Xi(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
 */class bl extends Cl{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ss()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new bl}getInitialEvent(e){return Xi("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */class wl{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function El(){return new wl("")}function Tl(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function kl(e){return e.pieces_.length-e.pieceNum_}function Il(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new wl(e.pieces_,t)}function Sl(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function xl(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Pl(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new wl(t,0)}function Nl(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof wl)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new wl(n,0)}function Rl(e){return e.pieceNum_>=e.pieces_.length}function Ol(e,t){const n=Tl(e),r=Tl(t);if(null===n)return t;if(n===r)return Ol(Il(e),Il(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Al(e,t){if(kl(e)!==kl(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Dl(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(kl(e)>kl(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Ml{constructor(e,t){this.errorPrefix_=t,this.parts_=xl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=ws(this.parts_[n]);Ll(this)}}function Ll(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Fl(e))}function Fl(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class ql extends Cl{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new ql}getInitialEvent(e){return Xi("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */class jl extends yl{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=jl.nextPersistentConnectionId_++,this.log_=qa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!os())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ql.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&bl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(ds(i)),Xi(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new is,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),Xi(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Xi(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;jl.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&fs(e,"w")){const n=_s(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Ua(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){var t;(e&&40===e.length||"object"==typeof(t=ps(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){var t=ps(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Xi(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ds(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):ja("Unrecognized action received from server: "+ds(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Xi(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+jl.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(e){Xi(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[e,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Fa("getToken() completed but was canceled"):(Fa("getToken() completed. Creating connection."),this.authToken_=e&&e.accessToken,this.appCheckToken_=l&&l.token,a=new vl(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,(e=>{Ua(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&Ua(e),l())}}}interrupt(e){Fa("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fa("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gs(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Ya(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new wl(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){Fa("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Fa("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+ka.replace(/\./g,"-")]=1,ss()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bl.getInstance().currentlyOnline();return gs(this.interruptReasons_)&&e}}jl.nextPersistentConnectionId_=0,jl.nextConnectionId_=0;
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
class Bl{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Bl(e,t)}}
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
 */class Ul{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Bl(Ha,e),r=new Bl(Ha,t);return 0!==this.compare(n,r)}minPost(){return Bl.MIN}}
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
 */let Wl;class Hl extends Ul{static get __EMPTY_NODE(){return Wl}static set __EMPTY_NODE(e){Wl=e}compare(e,t){return za(e.name,t.name)}isDefinedOn(e){throw Ji("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Bl.MIN}maxPost(){return new Bl(Va,Wl)}makePost(e,t){return Xi("string"==typeof e,"KeyIndex indexValue must always be a string."),new Bl(e,Wl)}toString(){return".key"}}const Vl=new Hl;
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
 */class zl{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $l{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:$l.RED,this.left=null!=r?r:Gl.EMPTY_NODE,this.right=null!=i?i:Gl.EMPTY_NODE}copy(e,t,n,r,i){return new $l(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Gl.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Gl.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$l.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$l.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$l.RED=!0,$l.BLACK=!1;class Gl{constructor(e,t=Gl.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Gl(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,$l.BLACK,null,null))}remove(e){return new Gl(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$l.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new zl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new zl(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new zl(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new zl(this.root_,null,this.comparator_,!0,e)}}
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
function Yl(e,t){return za(e.name,t.name)}function Kl(e,t){return za(e,t)}
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
 */let Ql;Gl.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new $l(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Xl=function(e){return"number"==typeof e?"number:"+Xa(e):"string:"+e},Jl=function(e){if(e.isLeafNode()){const t=e.val();Xi("string"==typeof t||"number"==typeof t||"object"==typeof t&&fs(t,".sv"),"Priority must be a string or number.")}else Xi(e===Ql||e.isEmpty(),"priority of unexpected type.");Xi(e===Ql||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Zl,ec,tc;class nc{constructor(e,t=nc.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Xi(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Jl(this.priorityNode_)}static set __childrenNodeConstructor(e){Zl=e}static get __childrenNodeConstructor(){return Zl}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new nc(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:nc.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Rl(e)?this:".priority"===Tl(e)?this.priorityNode_:nc.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:nc.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Tl(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(Xi(".priority"!==n||1===kl(e),".priority must be the last token in a path"),this.updateImmediateChild(n,nc.__childrenNodeConstructor.EMPTY_NODE.updateChild(Il(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Xa(this.value_):this.value_,this.lazyHash_=Aa(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===nc.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof nc.__childrenNodeConstructor?-1:(Xi(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=nc.VALUE_TYPE_ORDER.indexOf(t),i=nc.VALUE_TYPE_ORDER.indexOf(n);return Xi(r>=0,"Unknown leaf type: "+t),Xi(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}nc.VALUE_TYPE_ORDER=["object","boolean","number","string"];const rc=new class extends Ul{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?za(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Bl.MIN}maxPost(){return new Bl(Va,new nc("[PRIORITY-POST]",tc))}makePost(e,t){const n=ec(e);return new Bl(t,new nc("[PRIORITY-POST]",n))}toString(){return".priority"}},ic=Math.log(2);
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
 */class sc{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/ic,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const oc=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new $l(a,o.node,$l.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new $l(a,o.node,$l.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],h=n?n(u):u;l(new $l(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,$l.BLACK):(a(r,$l.BLACK),a(r,$l.RED))}return s}(new sc(e.length));return new Gl(r||t,s)};
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
 */let ac;const lc={};class cc{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Xi(lc&&rc,"ChildrenNode.ts has not been loaded"),ac=ac||new cc({".priority":lc},{".priority":rc}),ac}get(e){const t=_s(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Gl?t:null}hasIndex(e){return fs(this.indexSet_,e.toString())}addIndex(e,t){Xi(e!==Vl,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(Bl.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?oc(n,e.getCompare()):lc;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new cc(c,l)}addToIndexes(e,t){const n=ms(this.indexes_,((n,r)=>{const i=_s(this.indexSet_,r);if(Xi(i,"Missing index implementation for "+r),n===lc){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(Bl.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),oc(n,i.getCompare())}return lc}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new Bl(e.name,r))),i.insert(e,e.node)}}));return new cc(n,this.indexSet_)}removeFromIndexes(e,t){const n=ms(this.indexes_,(n=>{if(n===lc)return n;{const r=t.get(e.name);return r?n.remove(new Bl(e.name,r)):n}}));return new cc(n,this.indexSet_)}}
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
 */let uc;class hc{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Jl(this.priorityNode_),this.children_.isEmpty()&&Xi(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return uc||(uc=new hc(new Gl(Kl),null,cc.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||uc}updatePriority(e){return this.children_.isEmpty()?this:new hc(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?uc:t}}getChild(e){const t=Tl(e);return null===t?this:this.getImmediateChild(t).getChild(Il(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(Xi(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Bl(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?uc:this.priorityNode_;return new hc(r,s,i)}}updateChild(e,t){const n=Tl(e);if(null===n)return t;{Xi(".priority"!==Tl(e)||1===kl(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Il(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(rc,((s,o)=>{t[s]=o.val(e),n++,i&&hc.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xl(this.getPriority().val())+":"),this.forEachChild(rc,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":Aa(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new Bl(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Bl(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Bl(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Bl.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Bl.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===dc?-1:0}withIndex(e){if(e===Vl||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new hc(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Vl||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(rc),n=t.getIterator(rc);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===Vl?null:this.indexMap_.get(e.toString())}}hc.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const dc=new class extends hc{constructor(){super(new Gl(Kl),hc.EMPTY_NODE,cc.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return hc.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Bl,{MIN:{value:new Bl(Ha,hc.EMPTY_NODE)},MAX:{value:new Bl(Va,dc)}}),Hl.__EMPTY_NODE=hc.EMPTY_NODE,nc.__childrenNodeConstructor=hc,Ql=dc,function(e){tc=e}(dc);function pc(e,t=null){if(null===e)return hc.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),Xi(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new nc(e,pc(t))}if(e instanceof Array){let n=hc.EMPTY_NODE;return Qa(e,((t,r)=>{if(fs(e,t)&&"."!==t.substring(0,1)){const e=pc(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(pc(t))}{const n=[];let r=!1;if(Qa(e,((e,t)=>{if("."!==e.substring(0,1)){const i=pc(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new Bl(e,i)))}})),0===n.length)return hc.EMPTY_NODE;const i=oc(n,Yl,(e=>e.name),Kl);if(r){const e=oc(n,rc.getCompare());return new hc(i,pc(t),new cc({".priority":e},{".priority":rc}))}return new hc(i,pc(t),cc.Default)}}!function(e){ec=e}(pc);
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
class fc extends Ul{constructor(e){super(),this.indexPath_=e,Xi(!Rl(e)&&".priority"!==Tl(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?za(e.name,t.name):i}makePost(e,t){const n=pc(e),r=hc.EMPTY_NODE.updateChild(this.indexPath_,n);return new Bl(t,r)}maxPost(){const e=hc.EMPTY_NODE.updateChild(this.indexPath_,dc);return new Bl(Va,e)}toString(){return xl(this.indexPath_,0).join("/")}}
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
 */const _c=new class extends Ul{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?za(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Bl.MIN}maxPost(){return Bl.MAX}makePost(e,t){const n=pc(e);return new Bl(t,n)}toString(){return".value"}};
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
 */function gc(e){return{type:"value",snapshotNode:e}}function mc(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function vc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function yc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Cc{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){Xi(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(vc(t,o)):Xi(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(mc(t,n)):s.trackChildChange(yc(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(rc,((e,r)=>{t.hasChild(e)||n.trackChildChange(vc(e,r))})),t.isLeafNode()||t.forEachChild(rc,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(yc(t,r,i))}else n.trackChildChange(mc(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?hc.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
 */class bc{constructor(e){this.indexedFilter_=new Cc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=bc.getStartPost_(e),this.endPost_=bc.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,s){return this.matches(new Bl(t,n))||(n=hc.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=hc.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(hc.EMPTY_NODE);const i=this;return t.forEachChild(rc,((e,t)=>{i.matches(new Bl(e,t))||(r=r.updateImmediateChild(e,hc.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
 */class wc{constructor(e){this.rangedFilter_=new bc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new Bl(t,n))||(n=hc.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=hc.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=hc.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,s;if(r=t.withIndex(this.index_),r=r.updatePriority(hc.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else s=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&i(e,t)<=0&&(a=!0);a&&o<this.limit_&&i(t,n)<=0?o++:r=r.updateImmediateChild(t.name,hc.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;Xi(o.numChildren()===this.limit_,"");const a=new Bl(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:s(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(yc(t,n,e)),o.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(vc(t,e));const n=o.updateImmediateChild(t,hc.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(mc(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=i&&(i.trackChildChange(vc(l.name,l.node)),i.trackChildChange(mc(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,hc.EMPTY_NODE)):e}}
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
 */class Ec{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=rc}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return Xi(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Xi(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ha}hasEnd(){return this.endSet_}getIndexEndValue(){return Xi(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Xi(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Va}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return Xi(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===rc}copy(){const e=new Ec;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Tc(e){const t={};if(e.isDefault())return t;let n;return e.index_===rc?n="$priority":e.index_===_c?n="$value":e.index_===Vl?n="$key":(Xi(e.index_ instanceof fc,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=ds(n),e.startSet_&&(t.startAt=ds(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+ds(e.indexStartName_))),e.endSet_&&(t.endAt=ds(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+ds(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function kc(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==rc&&(t.i=e.index_.toString()),t}
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
 */class Ic extends yl{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=qa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(Xi(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=Ic.getListenId_(e,n),o={};this.listens_[s]=o;const a=Tc(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),_s(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=Ic.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Tc(e._queryParams),n=e._path.toString(),r=new is;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var s=i[r];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=hs(o.responseText)}catch(e){Ua("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&Ua("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
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
 */class Sc{constructor(){this.rootNode_=hc.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function xc(){return{value:null,children:new Map}}function Pc(e,t,n){if(Rl(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=Tl(t);e.children.has(r)||e.children.set(r,xc());Pc(e.children.get(r),t=Il(t),n)}}function Nc(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,r)=>{Nc(r,new wl(t.toString()+"/"+e),n)}))}class Rc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Qa(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
 */class Oc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Rc(e);const n=1e4+2e4*Math.random();tl(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Qa(e,((e,r)=>{r>0&&fs(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),tl(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
 */var Ac,Dc;function Mc(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(Dc=Ac||(Ac={}))[Dc.OVERWRITE=0]="OVERWRITE",Dc[Dc.MERGE=1]="MERGE",Dc[Dc.ACK_USER_WRITE=2]="ACK_USER_WRITE",Dc[Dc.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class Lc{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Ac.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Rl(this.path)){if(null!=this.affectedTree.value)return Xi(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new wl(e));return new Lc(El(),t,this.revert)}}return Xi(Tl(this.path)===e,"operationForChild called for unrelated child."),new Lc(Il(this.path),this.affectedTree,this.revert)}}
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
 */class Fc{constructor(e,t){this.source=e,this.path=t,this.type=Ac.LISTEN_COMPLETE}operationForChild(e){return Rl(this.path)?new Fc(this.source,El()):new Fc(this.source,Il(this.path))}}
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
 */class qc{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Ac.OVERWRITE}operationForChild(e){return Rl(this.path)?new qc(this.source,El(),this.snap.getImmediateChild(e)):new qc(this.source,Il(this.path),this.snap)}}
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
 */class jc{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Ac.MERGE}operationForChild(e){if(Rl(this.path)){const t=this.children.subtree(new wl(e));return t.isEmpty()?null:t.value?new qc(this.source,El(),t.value):new jc(this.source,El(),t)}return Xi(Tl(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new jc(this.source,Il(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class Bc{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Rl(e))return this.isFullyInitialized()&&!this.filtered_;const t=Tl(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */class Uc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Wc(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw Ji("Should only compare child_ events.");const r=new Bl(t.childName,t.snapshotNode),i=new Bl(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function Hc(e,t){return{eventCache:e,serverCache:t}}function Vc(e,t,n,r){return Hc(new Bc(t,n,r),e.serverCache)}function zc(e,t,n,r){return Hc(e.eventCache,new Bc(t,n,r))}function $c(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Gc(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let Yc;class Kc{constructor(e,t=(()=>(Yc||(Yc=new Gl($a)),Yc))()){this.value=e,this.children=t}static fromObject(e){let t=new Kc(null);return Qa(e,((e,n)=>{t=t.set(new wl(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:El(),value:this.value};if(Rl(e))return null;{const n=Tl(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(Il(e),t);if(null!=i){return{path:Nl(new wl(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Rl(e))return this;{const t=Tl(e),n=this.children.get(t);return null!==n?n.subtree(Il(e)):new Kc(null)}}set(e,t){if(Rl(e))return new Kc(t,this.children);{const n=Tl(e),r=(this.children.get(n)||new Kc(null)).set(Il(e),t),i=this.children.insert(n,r);return new Kc(this.value,i)}}remove(e){if(Rl(e))return this.children.isEmpty()?new Kc(null):new Kc(null,this.children);{const t=Tl(e),n=this.children.get(t);if(n){const r=n.remove(Il(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new Kc(null):new Kc(this.value,i)}return this}}get(e){if(Rl(e))return this.value;{const t=Tl(e),n=this.children.get(t);return n?n.get(Il(e)):null}}setTree(e,t){if(Rl(e))return t;{const n=Tl(e),r=(this.children.get(n)||new Kc(null)).setTree(Il(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new Kc(this.value,i)}}fold(e){return this.fold_(El(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(Nl(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,El(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(Rl(e))return null;{const r=Tl(e),i=this.children.get(r);return i?i.findOnPath_(Il(e),Nl(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,El(),t)}foreachOnPath_(e,t,n){if(Rl(e))return this;{this.value&&n(t,this.value);const r=Tl(e),i=this.children.get(r);return i?i.foreachOnPath_(Il(e),Nl(t,r),n):new Kc(null)}}foreach(e){this.foreach_(El(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(Nl(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
 */class Qc{constructor(e){this.writeTree_=e}static empty(){return new Qc(new Kc(null))}}function Xc(e,t,n){if(Rl(t))return new Qc(new Kc(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=Ol(i,t);return s=s.updateChild(o,n),new Qc(e.writeTree_.set(i,s))}{const r=new Kc(n),i=e.writeTree_.setTree(t,r);return new Qc(i)}}}function Jc(e,t,n){let r=e;return Qa(n,((e,n)=>{r=Xc(r,Nl(t,e),n)})),r}function Zc(e,t){if(Rl(t))return Qc.empty();{const n=e.writeTree_.setTree(t,new Kc(null));return new Qc(n)}}function eu(e,t){return null!=tu(e,t)}function tu(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Ol(n.path,t)):null}function nu(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(rc,((e,n)=>{t.push(new Bl(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Bl(e,n.value))})),t}function ru(e,t){if(Rl(t))return e;{const n=tu(e,t);return new Qc(null!=n?new Kc(n):e.writeTree_.subtree(t))}}function iu(e){return e.writeTree_.isEmpty()}function su(e,t){return ou(El(),e.writeTree_,t)}function ou(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(Xi(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=ou(Nl(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(Nl(e,".priority"),r)),n}}
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
 */function au(e,t){return Cu(t,e)}function lu(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));Xi(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&cu(t,r.path)?i=!1:Dl(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=hu(e.allWrites,uu,El()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Zc(e.visibleWrites,r.path);else{Qa(r.children,(t=>{e.visibleWrites=Zc(e.visibleWrites,Nl(r.path,t))}))}return!0}return!1}function cu(e,t){if(e.snap)return Dl(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Dl(Nl(e.path,n),t))return!0;return!1}function uu(e){return e.visible}function hu(e,t,n){let r=Qc.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)Dl(n,e)?(t=Ol(n,e),r=Xc(r,t,s.snap)):Dl(e,n)&&(t=Ol(e,n),r=Xc(r,El(),s.snap.getChild(t)));else{if(!s.children)throw Ji("WriteRecord should have .snap or .children");if(Dl(n,e))t=Ol(n,e),r=Jc(r,t,s.children);else if(Dl(e,n))if(t=Ol(e,n),Rl(t))r=Jc(r,El(),s.children);else{const e=_s(s.children,Tl(t));if(e){const n=e.getChild(Il(t));r=Xc(r,El(),n)}}}}}return r}function du(e,t,n,r,i){if(r||i){const s=ru(e.visibleWrites,t);if(!i&&iu(s))return n;if(i||null!=n||eu(s,El())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(Dl(e.path,t)||Dl(t,e.path))};return su(hu(e.allWrites,s,t),n||hc.EMPTY_NODE)}return null}{const r=tu(e.visibleWrites,t);if(null!=r)return r;{const r=ru(e.visibleWrites,t);if(iu(r))return n;if(null!=n||eu(r,El())){return su(r,n||hc.EMPTY_NODE)}return null}}}function pu(e,t,n,r){return du(e.writeTree,e.treePath,t,n,r)}function fu(e,t){return function(e,t,n){let r=hc.EMPTY_NODE;const i=tu(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(rc,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=ru(e.visibleWrites,t);return n.forEachChild(rc,((e,t)=>{const n=su(ru(i,new wl(e)),t);r=r.updateImmediateChild(e,n)})),nu(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return nu(ru(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function _u(e,t,n,r){return function(e,t,n,r,i){Xi(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Nl(t,n);if(eu(e.visibleWrites,s))return null;{const t=ru(e.visibleWrites,s);return iu(t)?i.getChild(n):su(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function gu(e,t){return function(e,t){return tu(e.visibleWrites,t)}(e.writeTree,Nl(e.treePath,t))}function mu(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=ru(e.visibleWrites,t),c=tu(l,El());if(null!=c)a=c;else{if(null==n)return[];a=su(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function vu(e,t,n){return function(e,t,n,r){const i=Nl(t,n),s=tu(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return su(ru(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function yu(e,t){return Cu(Nl(e.treePath,t),e.writeTree)}function Cu(e,t){return{treePath:e,writeTree:t}}
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
 */class bu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Xi("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),Xi(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,yc(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,vc(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,mc(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw Ji("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,yc(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */const wu=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class Eu{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Bc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return vu(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Gc(this.viewCache_),i=mu(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
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
 */function Tu(e,t,n,r,i){const s=new bu;let o,a;if(n.type===Ac.OVERWRITE){const l=n;l.source.fromUser?o=Su(e,t,l.path,l.snap,r,i,s):(Xi(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Rl(l.path),o=Iu(e,t,l.path,l.snap,r,i,a,s))}else if(n.type===Ac.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=Nl(n,r);xu(t,Tl(c))&&(a=Su(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=Nl(n,r);xu(t,Tl(c))||(a=Su(e,a,c,l,i,s,o))})),a}(e,t,l.path,l.children,r,i,s):(Xi(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=Nu(e,t,l.path,l.children,r,i,a,s))}else if(n.type===Ac.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=gu(r,n))return t;{const a=new Eu(r,t,i),l=t.eventCache.getNode();let c;if(Rl(n)||".priority"===Tl(n)){let n;if(t.serverCache.isFullyInitialized())n=pu(r,Gc(t));else{const e=t.serverCache.getNode();Xi(e instanceof hc,"serverChildren would be complete if leaf node"),n=fu(r,e)}n=n,c=e.filter.updateFullNode(l,n,s)}else{const i=Tl(n);let u=vu(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=l.getImmediateChild(i)),c=null!=u?e.filter.updateChild(l,i,u,Il(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,hc.EMPTY_NODE,Il(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=pu(r,Gc(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=gu(r,El()),Vc(t,c,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=gu(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(Rl(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Iu(e,t,n,l.getNode().getChild(n),i,s,a,o);if(Rl(n)){let r=new Kc(null);return l.getNode().forEachChild(Vl,((e,t)=>{r=r.set(new wl(e),t)})),Nu(e,t,n,r,i,s,a,o)}return t}{let c=new Kc(null);return r.foreach(((e,t)=>{const r=Nl(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),Nu(e,t,n,c,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==Ac.LISTEN_COMPLETE)throw Ji("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=zc(t,s.getNode(),s.isFullyInitialized()||Rl(n),s.isFiltered());return ku(e,o,n,r,wu,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=$c(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(gc($c(t)))}}(t,o,l),{viewCache:o,changes:l}}function ku(e,t,n,r,i,s){const o=t.eventCache;if(null!=gu(r,n))return t;{let a,l;if(Rl(n))if(Xi(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Gc(t),i=fu(r,n instanceof hc?n:hc.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=pu(r,Gc(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Tl(n);if(".priority"===c){Xi(1===kl(n),"Can't have a priority with additional path components");const i=o.getNode();l=t.serverCache.getNode();const s=_u(r,n,i,l);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const u=Il(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=_u(r,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=vu(r,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,i,s):o.getNode()}}return Vc(t,a,o.isFullyInitialized()||Rl(n),e.filter.filtersNodes())}}function Iu(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(Rl(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Tl(n);if(!l.isCompleteForPath(n)&&kl(n)>1)return t;const i=Il(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,i,wu,null)}const h=zc(t,c,l.isFullyInitialized()||Rl(n),u.filtersNodes());return ku(e,h,n,i,new Eu(i,h,s),a)}function Su(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new Eu(i,t,s);if(Rl(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=Vc(t,c,!0,e.filter.filtersNodes());else{const i=Tl(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=Vc(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=Il(n),c=a.getNode().getImmediateChild(i);let h;if(Rl(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===Sl(s)&&e.getChild(Pl(s)).isEmpty()?e:e.updateChild(s,r):hc.EMPTY_NODE}if(c.equals(h))l=t;else{l=Vc(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function xu(e,t){return e.eventCache.isCompleteForChild(t)}function Pu(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function Nu(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Rl(n)?r:new Kc(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=Pu(0,t.serverCache.getNode().getImmediateChild(n),r);c=Iu(e,c,new wl(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!l){const l=Pu(0,t.serverCache.getNode().getImmediateChild(n),r);c=Iu(e,c,new wl(n),l,i,s,o,a)}})),c}class Ru{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Cc(n.getIndex()),i=(s=n).loadsAllData()?new Cc(s.getIndex()):s.hasLimit()?new wc(s):new bc(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(hc.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(hc.EMPTY_NODE,a.getNode(),null),u=new Bc(l,o.isFullyInitialized(),r.filtersNodes()),h=new Bc(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Hc(h,u),this.eventGenerator_=new Uc(this.query_)}get query(){return this.query_}}function Ou(e,t){const n=Gc(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Rl(t)&&!n.getImmediateChild(Tl(t)).isEmpty())?n.getChild(t):null}function Au(e){return 0===e.eventRegistrations_.length}function Du(e,t,n){const r=[];if(n){Xi(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function Mu(e,t,n,r){t.type===Ac.MERGE&&null!==t.source.queryId&&(Xi(Gc(e.viewCache_),"We should always have a full cache before handling merges"),Xi($c(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=Tu(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,Xi(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),Xi(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),Xi(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Lu(e,s.changes,s.viewCache.eventCache.getNode(),null)}function Lu(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Wc(e,i,"child_removed",t,r,n),Wc(e,i,"child_added",t,r,n),Wc(e,i,"child_moved",s,r,n),Wc(e,i,"child_changed",t,r,n),Wc(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
 */let Fu,qu;class ju{constructor(){this.views=new Map}}function Bu(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return Xi(null!=s,"SyncTree gave us an op for an invalid query."),Mu(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(Mu(s,t,n,r));return i}}function Uu(e,t,n,r,i,s){const o=function(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=pu(n,i?r:null),s=!1;e?s=!0:r instanceof hc?(e=fu(n,r),s=!1):(e=hc.EMPTY_NODE,s=!1);const o=Hc(new Bc(e,s,!1),new Bc(r,i,!1));return new Ru(t,o)}return o}(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(rc,((e,t)=>{r.push(mc(e,t))}));return n.isFullyInitialized()&&r.push(gc(n.getNode())),Lu(e,r,n.getNode(),t)}(o,n)}function Wu(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=Gu(e);if("default"===i)for(const[l,c]of e.views.entries())o=o.concat(Du(c,n,r)),Au(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(i);t&&(o=o.concat(Du(t,n,r)),Au(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Gu(e)&&s.push(new(Xi(Fu,"Reference.ts has not been loaded"),Fu)(t._repo,t._path)),{removed:s,events:o}}function Hu(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Vu(e,t){let n=null;for(const r of e.views.values())n=n||Ou(r,t);return n}function zu(e,t){if(t._queryParams.loadsAllData())return Yu(e);{const n=t._queryIdentifier;return e.views.get(n)}}function $u(e,t){return null!=zu(e,t)}function Gu(e){return null!=Yu(e)}function Yu(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */let Ku=1;class Qu{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Kc(null),this.pendingWriteTree_={visibleWrites:Qc.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Xu(e,t,n,r,i){return function(e,t,n,r,i){Xi(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Xc(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?rh(e,new qc({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Ju(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(lu(e.pendingWriteTree_,t)){let t=new Kc(null);return null!=r.snap?t=t.set(El(),!0):Qa(r.children,(e=>{t=t.set(new wl(e),!0)})),rh(e,new Lc(r.path,t,n))}return[]}function Zu(e,t,n){return rh(e,new qc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function eh(e,t,n,r){const i=t._path,s=e.syncPointTree_.get(i);let o=[];if(s&&("default"===t._queryIdentifier||$u(s,t))){const a=Wu(s,t,n,r);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(i,((e,t)=>Gu(t)));if(c&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Gu(t)){return[Yu(t)]}{let e=[];return t&&(e=Hu(t)),Qa(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=oh(e,r);e.listenProvider_.startListening(dh(i),ah(e,i),s.hashFn,s.onComplete)}}}if(!u&&l.length>0&&!r)if(c){const n=null;e.listenProvider_.stopListening(dh(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(lh(t));e.listenProvider_.stopListening(dh(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=lh(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return o}function th(e,t,n){const r=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=Ol(e,r);i=i||Vu(t,n),s=s||Gu(t)}));let o,a=e.syncPointTree_.get(r);if(a?(s=s||Gu(a),i=i||Vu(a,El())):(a=new ju,e.syncPointTree_=e.syncPointTree_.set(r,a)),null!=i)o=!0;else{o=!1,i=hc.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=Vu(t,El());n&&(i=i.updateImmediateChild(e,n))}))}const l=$u(a,t);if(!l&&!t._queryParams.loadsAllData()){const n=lh(t);Xi(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=Ku++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let c=Uu(a,t,n,au(e.pendingWriteTree_,r),i,o);if(!l&&!s){const n=zu(a,t);c=c.concat(function(e,t,n){const r=t._path,i=ah(e,t),s=oh(e,n),o=e.listenProvider_.startListening(dh(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)Xi(!Gu(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Rl(e)&&t&&Gu(t))return[Yu(t).query];{let e=[];return t&&(e=e.concat(Hu(t).map((e=>e.query)))),Qa(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(dh(r),ah(e,r))}}return o}
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
 */(e,t,n))}return c}function nh(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=Vu(n,Ol(e,t));if(r)return r}));return du(r,t,i,n,!0)}function rh(e,t){return ih(t,e.syncPointTree_,null,au(e.pendingWriteTree_,El()))}function ih(e,t,n,r){if(Rl(e.path))return sh(e,t,n,r);{const i=t.get(El());null==n&&null!=i&&(n=Vu(i,El()));let s=[];const o=Tl(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=yu(r,o);s=s.concat(ih(a,l,e,t))}return i&&(s=s.concat(Bu(i,e,r,n))),s}}function sh(e,t,n,r){const i=t.get(El());null==n&&null!=i&&(n=Vu(i,El()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=yu(r,t),l=e.operationForChild(t);l&&(s=s.concat(sh(l,i,o,a)))})),i&&(s=s.concat(Bu(i,e,r,n))),s}function oh(e,t){const n=t.query,r=ah(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||hc.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=ch(e,n);if(r){const n=uh(r),i=n.path,s=n.queryId,o=Ol(i,t);return hh(e,i,new Fc(Mc(s),o))}return[]}(e,n._path,r):function(e,t){return rh(e,new Fc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return eh(e,n,null,r)}}}}function ah(e,t){const n=lh(t);return e.queryToTagMap.get(n)}function lh(e){return e._path.toString()+"$"+e._queryIdentifier}function ch(e,t){return e.tagToQueryMap.get(t)}function uh(e){const t=e.indexOf("$");return Xi(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new wl(e.substr(0,t))}}function hh(e,t,n){const r=e.syncPointTree_.get(t);Xi(r,"Missing sync point for query tag that we're tracking");return Bu(r,n,au(e.pendingWriteTree_,t),null)}function dh(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(Xi(qu,"Reference.ts has not been loaded"),qu)(e._repo,e._path):e}class ph{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new ph(t)}node(){return this.node_}}class fh{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Nl(this.path_,e);return new fh(this.syncTree_,t)}node(){return nh(this.syncTree_,this.path_)}}const _h=function(e,t,n){return e&&"object"==typeof e?(Xi(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?gh(e[".sv"],t,n):"object"==typeof e[".sv"]?mh(e[".sv"],t):void Xi(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},gh=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:Xi(!1,"Unexpected server value: "+e)}},mh=function(e,t,n){e.hasOwnProperty("increment")||Xi(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&Xi(!1,"Unexpected increment value: "+r);const i=t.node();if(Xi(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},vh=function(e,t,n){return yh(e,new ph(t),n)};function yh(e,t,n){const r=e.getPriority().val(),i=_h(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=_h(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new nc(s,pc(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new nc(i))),r.forEachChild(rc,((e,r)=>{const i=yh(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
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
 */class Ch{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function bh(e,t){let n=t instanceof wl?t:new wl(t),r=e,i=Tl(n);for(;null!==i;){const e=_s(r.node.children,i)||{children:{},childCount:0};r=new Ch(i,r,e),n=Il(n),i=Tl(n)}return r}function wh(e){return e.node.value}function Eh(e,t){e.node.value=t,xh(e)}function Th(e){return e.node.childCount>0}function kh(e,t){Qa(e.node.children,((n,r)=>{t(new Ch(n,e,r))}))}function Ih(e,t,n,r){n&&!r&&t(e),kh(e,(e=>{Ih(e,t,!0,r)})),n&&r&&t(e)}function Sh(e){return new wl(null===e.parent?e.name:Sh(e.parent)+"/"+e.name)}function xh(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===wh(e)&&!Th(e)}(n),i=fs(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,xh(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,xh(e))}
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
 */(e.parent,e.name,e)}const Ph=/[\[\].#$\/\u0000-\u001F\u007F]/,Nh=/[\[\].#$\u0000-\u001F\u007F]/,Rh=function(e){return"string"==typeof e&&0!==e.length&&!Ph.test(e)},Oh=function(e){return"string"==typeof e&&0!==e.length&&!Nh.test(e)},Ah=function(e,t,n){const r=n instanceof wl?new Ml(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Fl(r));if("function"==typeof t)throw new Error(e+"contains a function "+Fl(r)+" with contents = "+t.toString());if(Wa(t))throw new Error(e+"contains "+t.toString()+" "+Fl(r));if("string"==typeof t&&t.length>10485760/3&&ws(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+Fl(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(Qa(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!Rh(t)))throw new Error(e+" contains an invalid key ("+t+") "+Fl(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=ws(a),Ll(o),Ah(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=ws(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+Fl(r)+" in addition to actual children.")}},Dh=function(e,t,n,r){if(!(r&&void 0===n||Oh(n)))throw new Error(bs(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Mh=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Rh(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Oh(e)}(n))throw new Error(bs(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class Lh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fh(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||Al(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function qh(e,t,n){Fh(e,n),Bh(e,(e=>Al(e,t)))}function jh(e,t,n){Fh(e,n),Bh(e,(e=>Dl(e,t)||Dl(t,e)))}function Bh(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(Uh(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Uh(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();Ma&&Fa("event: "+n.toString()),el(r)}}}
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
 */class Wh{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Lh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xc(),this.transactionQueueTree_=new Ch,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hh(e,t,n){if(e.stats_=hl(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ic(e.repoInfo_,((t,n,r,i)=>{$h(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Gh(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ds(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new jl(e.repoInfo_,t,((t,n,r,i)=>{$h(e,t,n,r,i)}),(t=>{Gh(e,t)}),(t=>{!function(e,t){Qa(t,((t,n)=>{Yh(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return ul[n]||(ul[n]=t()),ul[n]}(e.repoInfo_,(()=>new Oc(e.stats_,e.server_))),e.infoData_=new Sc,e.infoSyncTree_=new Qu({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Zu(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),Yh(e,"connected",!1),e.serverSyncTree_=new Qu({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);jh(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Vh(e){const t=e.infoData_.getNode(new wl(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function zh(e){return(t=(t={timestamp:Vh(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function $h(e,t,n,r,i){e.dataUpdateCount++;const s=new wl(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=ms(n,(e=>pc(e)));o=function(e,t,n,r){const i=ch(e,r);if(i){const r=uh(i),s=r.path,o=r.queryId,a=Ol(s,t),l=Kc.fromObject(n);return hh(e,s,new jc(Mc(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=pc(n);o=function(e,t,n,r){const i=ch(e,r);if(null!=i){const r=uh(i),s=r.path,o=r.queryId,a=Ol(s,t);return hh(e,s,new qc(Mc(o),a,n))}return[]}(e.serverSyncTree_,s,t,i)}else if(r){const t=ms(n,(e=>pc(e)));o=function(e,t,n){const r=Kc.fromObject(n);return rh(e,new jc({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=pc(n);o=Zu(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=td(e,s)),jh(e.eventQueue_,a,o)}function Gh(e,t){Yh(e,"connected",t),!1===t&&function(e){Jh(e,"onDisconnectEvents");const t=zh(e),n=xc();Nc(e.onDisconnect_,El(),((r,i)=>{const s=function(e,t,n,r){return yh(t,new fh(n,e),r)}(r,i,e.serverSyncTree_,t);Pc(n,r,s)}));let r=[];Nc(n,El(),((t,n)=>{r=r.concat(Zu(e.serverSyncTree_,t,n));const i=od(e,t);td(e,i)})),e.onDisconnect_=xc(),jh(e.eventQueue_,El(),r)}(e)}function Yh(e,t,n){const r=new wl("/.info/"+t),i=pc(n);e.infoData_.updateSnapshot(r,i);const s=Zu(e.infoSyncTree_,r,i);jh(e.eventQueue_,r,s)}function Kh(e){return e.nextWriteId_++}function Qh(e,t,n,r,i){Jh(e,"set",{path:t.toString(),value:n,priority:r});const s=zh(e),o=pc(n,r),a=nh(e.serverSyncTree_,t),l=vh(o,a,s),c=Kh(e),u=Xu(e.serverSyncTree_,t,l,c,!0);Fh(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||Ua("set at "+t+" failed: "+n);const o=Ju(e.serverSyncTree_,c,!s);jh(e.eventQueue_,t,o),function(e,t,n,r){t&&el((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}(0,i,n,r)}));const h=od(e,t);td(e,h),jh(e.eventQueue_,h,[])}function Xh(e,t,n){let r;r=".info"===Tl(t._path)?eh(e.infoSyncTree_,t,n):eh(e.serverSyncTree_,t,n),qh(e.eventQueue_,t._path,r)}function Jh(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Fa(n,...t)}function Zh(e,t,n){return nh(e.serverSyncTree_,t,n)||hc.EMPTY_NODE}function ed(e,t=e.transactionQueueTree_){if(t||sd(e,t),wh(t)){const n=rd(e,t);Xi(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Zh(e,t,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const e=n[c];Xi(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=Ol(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{Jh(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Ju(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();sd(e,bh(e.transactionQueueTree_,t)),ed(e,e.transactionQueueTree_),jh(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)el(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Ua("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}td(e,t)}}),o)}(e,Sh(t),n)}else Th(t)&&kh(t,(t=>{ed(e,t)}))}function td(e,t){const n=nd(e,t),r=Sh(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=Ol(n,l.path);let u,h=!1;if(Xi(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,i=i.concat(Ju(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",i=i.concat(Ju(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Zh(e,l.path,s);l.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){Ah("transaction failed: Data returned ",r,l.path);let t=pc(r);"object"==typeof r&&null!=r&&fs(r,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=zh(e),c=vh(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Kh(e),s.splice(s.indexOf(o),1),i=i.concat(Xu(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat(Ju(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",i=i.concat(Ju(e.serverSyncTree_,l.currentWriteId,!0))}jh(e.eventQueue_,n,i),i=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;sd(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)el(r[a]);ed(e,e.transactionQueueTree_)}(e,rd(e,n),r),r}function nd(e,t){let n,r=e.transactionQueueTree_;for(n=Tl(t);null!==n&&void 0===wh(r);)r=bh(r,n),n=Tl(t=Il(t));return r}function rd(e,t){const n=[];return id(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function id(e,t,n){const r=wh(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);kh(t,(t=>{id(e,t,n)}))}function sd(e,t){const n=wh(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Eh(t,n.length>0?n:void 0)}kh(t,(t=>{sd(e,t)}))}function od(e,t){const n=Sh(nd(e,t)),r=bh(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{ad(e,t)})),ad(e,r),Ih(r,(t=>{ad(e,t)})),n}function ad(e,t){const n=wh(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(Xi(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(Xi(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Ju(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Eh(t,void 0):n.length=s+1,jh(e.eventQueue_,Sh(t),i);for(let e=0;e<r.length;e++)el(r[e])}}
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
 */const ld=function(e,t){const n=cd(e),r=n.namespace;"firebase.com"===n.domain&&Ba(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||Ba("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Ua("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ol(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new wl(n.pathString)}},cd=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ua(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
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
class ud{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ds(this.snapshot.exportVal())}}class hd{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
 */class dd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Xi(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
 */class pd{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return Rl(this._path)?null:Sl(this._path)}get ref(){return new fd(this._repo,this._path)}get _queryIdentifier(){const e=kc(this._queryParams),t=Ya(e);return"{}"===t?"default":t}get _queryObject(){return kc(this._queryParams)}isEqual(e){if(!((e=Es(e))instanceof pd))return!1;const t=this._repo===e._repo,n=Al(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class fd extends pd{constructor(e,t){super(e,t,new Ec,!1)}get parent(){const e=Pl(this._path);return null===e?null:new fd(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class _d{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new wl(e),n=md(this.ref,e);return new _d(this._node.getChild(t),n,rc)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new _d(n,md(this.ref,t),rc))))}hasChild(e){const t=new wl(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function gd(e,t){return(e=Es(e))._checkNotDeleted("ref"),void 0!==t?md(e._root,t):e._root}function md(e,t){var n,r,i,s;return null===Tl((e=Es(e))._path)?(n="child",r="path",s=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),Dh(n,r,i,s)):Dh("child","path",t,!1),new fd(e._repo,Nl(e._path,t))}function vd(e,t){(function(e,t){if(".info"===Tl(t))throw new Error(e+" failed = Can't modify data under /.info/")})("set",(e=Es(e))._path),function(e,t,n,r){r&&void 0===t||Ah(bs(e,"value"),t,n)}("set",t,e._path,!1);const n=new is;return Qh(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class yd{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new ud("value",this,new _d(e.snapshotNode,new fd(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new hd(this,e,t):null}matches(e){return e instanceof yd&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Cd{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new hd(this,e,t):null}createEvent(e,t){Xi(null!=e.childName,"Child events should have a childName.");const n=md(new fd(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new ud(e.type,this,new _d(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Cd&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function bd(e,t,n,r,i){let s;if("object"==typeof r&&(s=void 0,i=r),"function"==typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Xh(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new dd(n,s||void 0),a="value"===t?new yd(o):new Cd(t,o);return function(e,t,n){let r;r=".info"===Tl(t._path)?th(e.infoSyncTree_,t,n):th(e.serverSyncTree_,t,n),qh(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>Xh(e._repo,e,a)}function wd(e,t,n,r){return bd(e,"value",t,n,r)}!function(e){Xi(!Fu,"__referenceConstructor has already been defined"),Fu=e}(fd),function(e){Xi(!qu,"__referenceConstructor has already been defined"),qu=e}(fd);
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
const Ed={};function Td(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||Ba("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fa("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=ld(s,i),c=l.repoInfo;"undefined"!=typeof process&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=ld(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const u=i&&o?new il(il.OWNER):new rl(e.name,e.options,t);Mh("Invalid Firebase Database URL",l),Rl(l.path)||Ba("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=Ed[t.name];i||(i={},Ed[t.name]=i);let s=i[e.toURLString()];s&&Ba("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Wh(e,false,n,r),i[e.toURLString()]=s,s}(c,e,u,new nl(e.name,n));return new kd(h,e)}class kd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new fd(this._repo,El())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Ed[t];n&&n[e.key]===e||Ba(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Ba("Cannot call "+e+" on a deleted database.")}}function Id(e=function(e="[DEFAULT]"){const t=js.get(e);if(!t)throw Hs.create("no-app",{appName:e});return t}(),t){return function(e,t){return e.container.getProvider(t)}(e,"database").getImmediate({identifier:t})}
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
jl.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},jl.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){ka="9.0.0",Ws(new Ts("database",((e,{instanceIdentifier:t})=>Td(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),$s("@firebase/database","0.12.0",e)}();
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
var Sd=function(){return(Sd=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},xd={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},Pd=xd;function Nd(e){this.mode=Pd.MODE_8BIT_BYTE,this.data=e}Nd.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}};var Rd=Nd,Od={L:1,M:0,Q:3,H:2},Ad=Od;function Dd(e,t){this.totalCount=e,this.dataCount=t}Dd.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],Dd.getRSBlocks=function(e,t){var n=Dd.getRsBlockTable(e,t);if(null==n)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var r=n.length/3,i=new Array,s=0;s<r;s++)for(var o=n[3*s+0],a=n[3*s+1],l=n[3*s+2],c=0;c<o;c++)i.push(new Dd(a,l));return i},Dd.getRsBlockTable=function(e,t){switch(t){case Ad.L:return Dd.RS_BLOCK_TABLE[4*(e-1)+0];case Ad.M:return Dd.RS_BLOCK_TABLE[4*(e-1)+1];case Ad.Q:return Dd.RS_BLOCK_TABLE[4*(e-1)+2];case Ad.H:return Dd.RS_BLOCK_TABLE[4*(e-1)+3];default:return}};var Md=Dd;function Ld(){this.buffer=new Array,this.length=0}Ld.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var n=0;n<t;n++)this.putBit(1==(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};for(var Fd=Ld,qd={glog:function(e){if(e<1)throw new Error("glog("+e+")");return qd.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return qd.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},jd=0;jd<8;jd++)qd.EXP_TABLE[jd]=1<<jd;for(jd=8;jd<256;jd++)qd.EXP_TABLE[jd]=qd.EXP_TABLE[jd-4]^qd.EXP_TABLE[jd-5]^qd.EXP_TABLE[jd-6]^qd.EXP_TABLE[jd-8];for(jd=0;jd<255;jd++)qd.LOG_TABLE[qd.EXP_TABLE[jd]]=jd;var Bd=qd,Ud=Bd;function Wd(e,t){if(null==e.length)throw new Error(e.length+"/"+t);for(var n=0;n<e.length&&0==e[n];)n++;this.num=new Array(e.length-n+t);for(var r=0;r<e.length-n;r++)this.num[r]=e[r+n]}Wd.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<e.getLength();r++)t[n+r]^=Ud.gexp(Ud.glog(this.get(n))+Ud.glog(e.get(r)));return new Wd(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=Ud.glog(this.get(0))-Ud.glog(e.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<e.getLength();r++)n[r]^=Ud.gexp(Ud.glog(e.get(r))+t);return new Wd(n,0).mod(e)}};var Hd=xd,Vd=Wd,zd=Bd,$d=0,Gd=1,Yd=2,Kd=3,Qd=4,Xd=5,Jd=6,Zd=7,ep={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;ep.getBCHDigit(t)-ep.getBCHDigit(ep.G15)>=0;)t^=ep.G15<<ep.getBCHDigit(t)-ep.getBCHDigit(ep.G15);return(e<<10|t)^ep.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;ep.getBCHDigit(t)-ep.getBCHDigit(ep.G18)>=0;)t^=ep.G18<<ep.getBCHDigit(t)-ep.getBCHDigit(ep.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return ep.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,n){switch(e){case $d:return(t+n)%2==0;case Gd:return t%2==0;case Yd:return n%3==0;case Kd:return(t+n)%3==0;case Qd:return(Math.floor(t/2)+Math.floor(n/3))%2==0;case Xd:return t*n%2+t*n%3==0;case Jd:return(t*n%2+t*n%3)%2==0;case Zd:return(t*n%3+(t+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new Vd([1],0),n=0;n<e;n++)t=t.multiply(new Vd([1,zd.gexp(n)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case Hd.MODE_NUMBER:return 10;case Hd.MODE_ALPHA_NUM:return 9;case Hd.MODE_8BIT_BYTE:case Hd.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case Hd.MODE_NUMBER:return 12;case Hd.MODE_ALPHA_NUM:return 11;case Hd.MODE_8BIT_BYTE:return 16;case Hd.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case Hd.MODE_NUMBER:return 14;case Hd.MODE_ALPHA_NUM:return 13;case Hd.MODE_8BIT_BYTE:return 16;case Hd.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r++)for(var i=0;i<t;i++){for(var s=0,o=e.isDark(r,i),a=-1;a<=1;a++)if(!(r+a<0||t<=r+a))for(var l=-1;l<=1;l++)i+l<0||t<=i+l||0==a&&0==l||o==e.isDark(r+a,i+l)&&s++;s>5&&(n+=3+s-5)}for(r=0;r<t-1;r++)for(i=0;i<t-1;i++){var c=0;e.isDark(r,i)&&c++,e.isDark(r+1,i)&&c++,e.isDark(r,i+1)&&c++,e.isDark(r+1,i+1)&&c++,0!=c&&4!=c||(n+=3)}for(r=0;r<t;r++)for(i=0;i<t-6;i++)e.isDark(r,i)&&!e.isDark(r,i+1)&&e.isDark(r,i+2)&&e.isDark(r,i+3)&&e.isDark(r,i+4)&&!e.isDark(r,i+5)&&e.isDark(r,i+6)&&(n+=40);for(i=0;i<t;i++)for(r=0;r<t-6;r++)e.isDark(r,i)&&!e.isDark(r+1,i)&&e.isDark(r+2,i)&&e.isDark(r+3,i)&&e.isDark(r+4,i)&&!e.isDark(r+5,i)&&e.isDark(r+6,i)&&(n+=40);var u=0;for(i=0;i<t;i++)for(r=0;r<t;r++)e.isDark(r,i)&&u++;return n+=10*(Math.abs(100*u/t/t-50)/5)}},tp=Rd,np=Md,rp=Fd,ip=ep,sp=Wd;function op(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var ap=op.prototype;ap.addData=function(e){var t=new tp(e);this.dataList.push(t),this.dataCache=null},ap.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},ap.getModuleCount=function(){return this.moduleCount},ap.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=np.getRSBlocks(e,this.errorCorrectLevel),n=new rp,r=0,i=0;i<t.length;i++)r+=t[i].dataCount;for(i=0;i<this.dataList.length;i++){var s=this.dataList[i];n.put(s.mode,4),n.put(s.getLength(),ip.getLengthInBits(s.mode,e)),s.write(n)}if(n.getLengthInBits()<=8*r)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},ap.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=op.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},ap.setupPositionProbePattern=function(e,t){for(var n=-1;n<=7;n++)if(!(e+n<=-1||this.moduleCount<=e+n))for(var r=-1;r<=7;r++)t+r<=-1||this.moduleCount<=t+r||(this.modules[e+n][t+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},ap.getBestMaskPattern=function(){for(var e=0,t=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=ip.getLostPoint(this);(0==n||e>r)&&(e=r,t=n)}return t},ap.createMovieClip=function(e,t,n){var r=e.createEmptyMovieClip(t,n);this.make();for(var i=0;i<this.modules.length;i++)for(var s=1*i,o=0;o<this.modules[i].length;o++){var a=1*o;this.modules[i][o]&&(r.beginFill(0,100),r.moveTo(a,s),r.lineTo(a+1,s),r.lineTo(a+1,s+1),r.lineTo(a,s+1),r.endFill())}return r},ap.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},ap.setupPositionAdjustPattern=function(){for(var e=ip.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var n=0;n<e.length;n++){var r=e[t],i=e[n];if(null==this.modules[r][i])for(var s=-2;s<=2;s++)for(var o=-2;o<=2;o++)this.modules[r+s][i+o]=-2==s||2==s||-2==o||2==o||0==s&&0==o}},ap.setupTypeNumber=function(e){for(var t=ip.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!e&&1==(t>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++){r=!e&&1==(t>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},ap.setupTypeInfo=function(e,t){for(var n=this.errorCorrectLevel<<3|t,r=ip.getBCHTypeInfo(n),i=0;i<15;i++){var s=!e&&1==(r>>i&1);i<6?this.modules[i][8]=s:i<8?this.modules[i+1][8]=s:this.modules[this.moduleCount-15+i][8]=s}for(i=0;i<15;i++){s=!e&&1==(r>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=s:i<9?this.modules[8][15-i-1+1]=s:this.modules[8][15-i-1]=s}this.modules[this.moduleCount-8][8]=!e},ap.mapData=function(e,t){for(var n=-1,r=this.moduleCount-1,i=7,s=0,o=this.moduleCount-1;o>0;o-=2)for(6==o&&o--;;){for(var a=0;a<2;a++)if(null==this.modules[r][o-a]){var l=!1;s<e.length&&(l=1==(e[s]>>>i&1)),ip.getMask(t,r,o-a)&&(l=!l),this.modules[r][o-a]=l,-1==--i&&(s++,i=7)}if((r+=n)<0||this.moduleCount<=r){r-=n,n=-n;break}}},op.PAD0=236,op.PAD1=17,op.createData=function(e,t,n){for(var r=np.getRSBlocks(e,t),i=new rp,s=0;s<n.length;s++){var o=n[s];i.put(o.mode,4),i.put(o.getLength(),ip.getLengthInBits(o.mode,e)),o.write(i)}var a=0;for(s=0;s<r.length;s++)a+=r[s].dataCount;if(i.getLengthInBits()>8*a)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*a+")");for(i.getLengthInBits()+4<=8*a&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=8*a||(i.put(op.PAD0,8),i.getLengthInBits()>=8*a));)i.put(op.PAD1,8);return op.createBytes(i,r)},op.createBytes=function(e,t){for(var n=0,r=0,i=0,s=new Array(t.length),o=new Array(t.length),a=0;a<t.length;a++){var l=t[a].dataCount,c=t[a].totalCount-l;r=Math.max(r,l),i=Math.max(i,c),s[a]=new Array(l);for(var u=0;u<s[a].length;u++)s[a][u]=255&e.buffer[u+n];n+=l;var h=ip.getErrorCorrectPolynomial(c),d=new sp(s[a],h.getLength()-1).mod(h);o[a]=new Array(h.getLength()-1);for(u=0;u<o[a].length;u++){var p=u+d.getLength()-o[a].length;o[a][u]=p>=0?d.get(p):0}}var f=0;for(u=0;u<t.length;u++)f+=t[u].totalCount;var _=new Array(f),g=0;for(u=0;u<r;u++)for(a=0;a<t.length;a++)u<s[a].length&&(_[g++]=s[a][u]);for(u=0;u<i;u++)for(a=0;a<t.length;a++)u<o[a].length&&(_[g++]=o[a][u]);return _};var lp=op,cp=Od,up=function(e,t){var n=new lp((t=t||{}).typeNumber||-1,t.errorCorrectLevel||cp.H);return n.addData(e),n.make(),n};up.ErrorCorrectLevel=cp;var hp=up,dp=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function pp(e,t){return hp(function(e){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r<2048?(t+=String.fromCharCode(192|r>>6),t+=String.fromCharCode(128|63&r)):r<55296||r>=57344?(t+=String.fromCharCode(224|r>>12),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r)):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t+=String.fromCharCode(240|r>>18),t+=String.fromCharCode(128|r>>12&63),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r))}return t}(e),{typeNumber:-1,errorCorrectLevel:t})}function fp(e){return e in hp.ErrorCorrectLevel}function _p(e,t){void 0===t&&(t=0);var n=[];return e.forEach((function(e,r){var i=null;e.forEach((function(s,o){if(!s&&null!==i)return n.push("M"+(i+t)+" "+(r+t)+"h"+(o-i)+"v1H"+(i+t)+"z"),void(i=null);if(o!==e.length-1)s&&null===i&&(i=o);else{if(!s)return;null===i?n.push("M"+(o+t)+","+(r+t)+" h1v1H"+(o+t)+"z"):n.push("M"+(i+t)+","+(r+t)+" h"+(o+1-i)+"v1H"+(i+t)+"z")}}))})),n.join("")}var gp={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:"H",validator:function(e){return fp(e)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},mp=Sd(Sd({},gp),{renderAs:{type:String,required:!1,default:"canvas",validator:function(e){return["canvas","svg"].indexOf(e)>-1}}}),vp=Dt({name:"QRCodeSvg",props:gp,setup:function(e){var t=pt(0),n=pt(""),r=function(){var r=e.value,i=e.level,s=e.margin,o=pp(r,hp.ErrorCorrectLevel[i]).modules;t.value=o.length+2*s,n.value=_p(o,s)};return r(),$t(r),function(){return Xr("svg",{width:e.size,height:e.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.value+" "+t.value},[Xr("path",{fill:e.background,d:"M0,0 h"+t.value+"v"+t.value+"H0z"}),Xr("path",{fill:e.foreground,d:n.value})])}}}),yp=Dt({name:"QRCodeCanvas",props:gp,setup:function(e){var t=pt(null),n=function(){var n=e.value,r=e.level,i=e.size,s=e.margin,o=e.background,a=e.foreground,l=pp(n,hp.ErrorCorrectLevel[r]).modules,c=l.length+2*s,u=t.value;if(u){var h=u.getContext("2d");if(h){var d=window.devicePixelRatio||1,p=i/c*d;u.height=u.width=i*d,h.scale(p,p),h.fillStyle=o,h.fillRect(0,0,c,c),h.fillStyle=a,dp?h.fill(new Path2D(_p(l,s))):l.forEach((function(e,t){e.forEach((function(e,n){e&&h.fillRect(n+s,t+s,1,1)}))}))}}};return Vt(n),$t(n),function(){return Xr("canvas",{ref:t,style:{width:e.size+"px",height:e.size+"px"}})}}}),Cp=Dt({name:"Qrcode",render:function(){var e=this.$props,t=e.renderAs,n=e.value,r=e.size,i=e.margin,s=e.level,o=e.background,a=e.foreground,l=r>>>0,c=i>>>0,u=fp(s)?s:"H";return Xr("svg"===t?vp:yp,{value:n,size:l,margin:c,level:u,background:o,foreground:a})},props:mp});export{Ln as F,Cp as Q,gd as a,wd as b,Gn as c,$n as d,Zn as e,or as f,Id as g,nr as h,er as i,Ea as j,So as k,Bi as l,zs as m,mi as n,Wn as o,An as r,vd as s,l as t,St as w};
