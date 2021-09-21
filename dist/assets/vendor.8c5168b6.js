function e(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}const t=e("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function n(e){return!!e||""===e}function r(e){if(b(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=T(i)?o(i):r(i);if(s)for(const e in s)t[e]=s[e]}return t}return T(e)||S(e)?e:void 0}const i=/;(?![^(]*\))/g,s=/:(.+)/;function o(e){const t={};return e.split(i).forEach((e=>{if(e){const n=e.split(s);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function a(e){let t="";if(T(e))t=e;else if(b(e))for(let n=0;n<e.length;n++){const r=a(e[n]);r&&(t+=r+" ")}else if(S(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const l=e=>null==e?"":b(e)||S(e)&&(e.toString===R||!E(e.toString))?JSON.stringify(e,c,2):String(e),c=(e,t)=>t&&t.__v_isRef?c(e,t.value):C(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:I(t)?{[`Set(${t.size})`]:[...t.values()]}:!S(t)||b(t)||x(t)?t:String(t),u={},h=[],d=()=>{},p=()=>!1,f=/^on[^a-z]/,g=e=>f.test(e),_=e=>e.startsWith("onUpdate:"),m=Object.assign,v=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},y=Object.prototype.hasOwnProperty,w=(e,t)=>y.call(e,t),b=Array.isArray,C=e=>"[object Map]"===N(e),I=e=>"[object Set]"===N(e),E=e=>"function"==typeof e,T=e=>"string"==typeof e,k=e=>"symbol"==typeof e,S=e=>null!==e&&"object"==typeof e,P=e=>S(e)&&E(e.then)&&E(e.catch),R=Object.prototype.toString,N=e=>R.call(e),x=e=>"[object Object]"===N(e),O=e=>T(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,A=e(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),D=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},L=/-(\w)/g,M=D((e=>e.replace(L,((e,t)=>t?t.toUpperCase():"")))),F=/\B([A-Z])/g,U=D((e=>e.replace(F,"-$1").toLowerCase())),j=D((e=>e.charAt(0).toUpperCase()+e.slice(1))),q=D((e=>e?`on${j(e)}`:"")),B=(e,t)=>!Object.is(e,t),W=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},V=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},z=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let H;const $=[];class G{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&H&&(this.parent=H,this.index=(H.scopes||(H.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}}on(){this.active&&($.push(this),H=this)}off(){this.active&&($.pop(),H=$[$.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}const K=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Y=e=>(e.w&Z)>0,J=e=>(e.n&Z)>0,Q=new WeakMap;let X=0,Z=1;const ee=[];let te;const ne=Symbol(""),re=Symbol("");class ie{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],function(e,t){(t=t||H)&&t.active&&t.effects.push(e)}(this,n)}run(){if(!this.active)return this.fn();if(!ee.includes(this))try{return ee.push(te=this),ae.push(oe),oe=!0,Z=1<<++X,X<=30?(({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Z})(this):se(this),this.fn()}finally{X<=30&&(e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Y(i)&&!J(i)?i.delete(e):t[n++]=i,i.w&=~Z,i.n&=~Z}t.length=n}})(this),Z=1<<--X,ce(),ee.pop();const e=ee.length;te=e>0?ee[e-1]:void 0}}stop(){this.active&&(se(this),this.onStop&&this.onStop(),this.active=!1)}}function se(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let oe=!0;const ae=[];function le(){ae.push(oe),oe=!1}function ce(){const e=ae.pop();oe=void 0===e||e}function ue(e,t,n){if(!he())return;let r=Q.get(e);r||Q.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=K()),de(i)}function he(){return oe&&void 0!==te}function de(e,t){let n=!1;X<=30?J(e)||(e.n|=Z,n=!Y(e)):n=!e.has(te),n&&(e.add(te),te.deps.push(e))}function pe(e,t,n,r,i,s){const o=Q.get(e);if(!o)return;let a=[];if("clear"===t)a=[...o.values()];else if("length"===n&&b(e))o.forEach(((e,t)=>{("length"===t||t>=r)&&a.push(e)}));else switch(void 0!==n&&a.push(o.get(n)),t){case"add":b(e)?O(n)&&a.push(o.get("length")):(a.push(o.get(ne)),C(e)&&a.push(o.get(re)));break;case"delete":b(e)||(a.push(o.get(ne)),C(e)&&a.push(o.get(re)));break;case"set":C(e)&&a.push(o.get(ne))}if(1===a.length)a[0]&&fe(a[0]);else{const e=[];for(const t of a)t&&e.push(...t);fe(K(e))}}function fe(e,t){for(const n of b(e)?e:[...e])(n!==te||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ge=e("__proto__,__v_isRef,__isVue"),_e=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(k)),me=Ce(),ve=Ce(!1,!0),ye=Ce(!0),we=be();function be(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=at(this);for(let t=0,i=this.length;t<i;t++)ue(n,0,t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(at)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){le();const n=at(this)[t].apply(this,e);return ce(),n}})),e}function Ce(e=!1,t=!1){return function(n,r,i){if("__v_isReactive"===r)return!e;if("__v_isReadonly"===r)return e;if("__v_raw"===r&&i===(e?t?Ze:Xe:t?Qe:Je).get(n))return n;const s=b(n);if(!e&&s&&w(we,r))return Reflect.get(we,r,i);const o=Reflect.get(n,r,i);if(k(r)?_e.has(r):ge(r))return o;if(e||ue(n,0,r),t)return o;if(dt(o)){return!s||!O(r)?o.value:o}return S(o)?e?nt(o):tt(o):o}}function Ie(e=!1){return function(t,n,r,i){let s=t[n];if(!e&&(r=at(r),s=at(s),!b(t)&&dt(s)&&!dt(r)))return s.value=r,!0;const o=b(t)&&O(n)?Number(n)<t.length:w(t,n),a=Reflect.set(t,n,r,i);return t===at(i)&&(o?B(r,s)&&pe(t,"set",n,r):pe(t,"add",n,r)),a}}const Ee={get:me,set:Ie(),deleteProperty:function(e,t){const n=w(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&pe(e,"delete",t,void 0),r},has:function(e,t){const n=Reflect.has(e,t);return k(t)&&_e.has(t)||ue(e,0,t),n},ownKeys:function(e){return ue(e,0,b(e)?"length":ne),Reflect.ownKeys(e)}},Te={get:ye,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},ke=m({},Ee,{get:ve,set:Ie(!0)}),Se=e=>S(e)?tt(e):e,Pe=e=>S(e)?nt(e):e,Re=e=>e,Ne=e=>Reflect.getPrototypeOf(e);function xe(e,t,n=!1,r=!1){const i=at(e=e.__v_raw),s=at(t);t!==s&&!n&&ue(i,0,t),!n&&ue(i,0,s);const{has:o}=Ne(i),a=r?Re:n?Pe:Se;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Oe(e,t=!1){const n=this.__v_raw,r=at(n),i=at(e);return e!==i&&!t&&ue(r,0,e),!t&&ue(r,0,i),e===i?n.has(e):n.has(e)||n.has(i)}function Ae(e,t=!1){return e=e.__v_raw,!t&&ue(at(e),0,ne),Reflect.get(e,"size",e)}function De(e){e=at(e);const t=at(this);return Ne(t).has.call(t,e)||(t.add(e),pe(t,"add",e,e)),this}function Le(e,t){t=at(t);const n=at(this),{has:r,get:i}=Ne(n);let s=r.call(n,e);s||(e=at(e),s=r.call(n,e));const o=i.call(n,e);return n.set(e,t),s?B(t,o)&&pe(n,"set",e,t):pe(n,"add",e,t),this}function Me(e){const t=at(this),{has:n,get:r}=Ne(t);let i=n.call(t,e);i||(e=at(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&pe(t,"delete",e,void 0),s}function Fe(){const e=at(this),t=0!==e.size,n=e.clear();return t&&pe(e,"clear",void 0,void 0),n}function Ue(e,t){return function(n,r){const i=this,s=i.__v_raw,o=at(s),a=t?Re:e?Pe:Se;return!e&&ue(o,0,ne),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function je(e,t,n){return function(...r){const i=this.__v_raw,s=at(i),o=C(s),a="entries"===e||e===Symbol.iterator&&o,l="keys"===e&&o,c=i[e](...r),u=n?Re:t?Pe:Se;return!t&&ue(s,0,l?re:ne),{next(){const{value:e,done:t}=c.next();return t?{value:e,done:t}:{value:a?[u(e[0]),u(e[1])]:u(e),done:t}},[Symbol.iterator](){return this}}}}function qe(e){return function(...t){return"delete"!==e&&this}}function Be(){const e={get(e){return xe(this,e)},get size(){return Ae(this)},has:Oe,add:De,set:Le,delete:Me,clear:Fe,forEach:Ue(!1,!1)},t={get(e){return xe(this,e,!1,!0)},get size(){return Ae(this)},has:Oe,add:De,set:Le,delete:Me,clear:Fe,forEach:Ue(!1,!0)},n={get(e){return xe(this,e,!0)},get size(){return Ae(this,!0)},has(e){return Oe.call(this,e,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:Ue(!0,!1)},r={get(e){return xe(this,e,!0,!0)},get size(){return Ae(this,!0)},has(e){return Oe.call(this,e,!0)},add:qe("add"),set:qe("set"),delete:qe("delete"),clear:qe("clear"),forEach:Ue(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach((i=>{e[i]=je(i,!1,!1),n[i]=je(i,!0,!1),t[i]=je(i,!1,!0),r[i]=je(i,!0,!0)})),[e,n,t,r]}const[We,Ve,ze,He]=Be();function $e(e,t){const n=t?e?He:ze:e?Ve:We;return(t,r,i)=>"__v_isReactive"===r?!e:"__v_isReadonly"===r?e:"__v_raw"===r?t:Reflect.get(w(n,r)&&r in t?n:t,r,i)}const Ge={get:$e(!1,!1)},Ke={get:$e(!1,!0)},Ye={get:$e(!0,!1)},Je=new WeakMap,Qe=new WeakMap,Xe=new WeakMap,Ze=new WeakMap;function et(e){return e.__v_skip||!Object.isExtensible(e)?0:function(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((e=>N(e).slice(8,-1))(e))}function tt(e){return e&&e.__v_isReadonly?e:rt(e,!1,Ee,Ge,Je)}function nt(e){return rt(e,!0,Te,Ye,Xe)}function rt(e,t,n,r,i){if(!S(e))return e;if(e.__v_raw&&(!t||!e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const o=et(e);if(0===o)return e;const a=new Proxy(e,2===o?r:n);return i.set(e,a),a}function it(e){return st(e)?it(e.__v_raw):!(!e||!e.__v_isReactive)}function st(e){return!(!e||!e.__v_isReadonly)}function ot(e){return it(e)||st(e)}function at(e){const t=e&&e.__v_raw;return t?at(t):e}function lt(e){return V(e,"__v_skip",!0),e}function ct(e){he()&&((e=at(e)).dep||(e.dep=K()),de(e.dep))}function ut(e,t){(e=at(e)).dep&&fe(e.dep)}const ht=e=>S(e)?tt(e):e;function dt(e){return Boolean(e&&!0===e.__v_isRef)}function pt(e){return gt(e,!1)}class ft{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:at(e),this._value=t?e:ht(e)}get value(){return ct(this),this._value}set value(e){e=this._shallow?e:at(e),B(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:ht(e),ut(this))}}function gt(e,t){return dt(e)?e:new ft(e,t)}function _t(e){return dt(e)?e.value:e}const mt={get:(e,t,n)=>_t(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return dt(i)&&!dt(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function vt(e){return it(e)?e:new Proxy(e,mt)}class yt{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new ie(e,(()=>{this._dirty||(this._dirty=!0,ut(this))})),this.__v_isReadonly=n}get value(){const e=at(this);return ct(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function wt(e,t){let n,r;E(e)?(n=e,r=d):(n=e.get,r=e.set);return new yt(n,r,E(e)||!e.set)}Promise.resolve();function bt(e,t,...n){const r=e.vnode.props||u;let i=n;const s=t.startsWith("update:"),o=s&&t.slice(7);if(o&&o in r){const e=`${"modelValue"===o?"model":o}Modifiers`,{number:t,trim:s}=r[e]||u;s?i=n.map((e=>e.trim())):t&&(i=n.map(z))}let a,l=r[a=q(t)]||r[a=q(M(t))];!l&&s&&(l=r[a=q(U(t))]),l&&Pr(l,e,6,i);const c=r[a+"Once"];if(c){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,Pr(c,e,6,i)}}function Ct(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(void 0!==i)return i;const s=e.emits;let o={},a=!1;if(!E(e)){const r=e=>{const n=Ct(e,t,!0);n&&(a=!0,m(o,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return s||a?(b(s)?s.forEach((e=>o[e]=null)):m(o,s),r.set(e,o),o):(r.set(e,null),null)}function It(e,t){return!(!e||!g(t))&&(t=t.slice(2).replace(/Once$/,""),w(e,t[0].toLowerCase()+t.slice(1))||w(e,U(t))||w(e,t))}let Et=null,Tt=null;function kt(e){const t=Et;return Et=e,Tt=e&&e.type.__scopeId||null,t}function St(e){Tt=e}function Pt(){Tt=null}function Rt(e,t=Et,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Gn(-1);const i=kt(t),s=e(...n);return kt(i),r._d&&Gn(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function Nt(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:p,ctx:f,inheritAttrs:g}=e;let m;const v=kt(e);try{let e;if(4&n.shapeFlag){const t=i||r;m=ar(u.call(t,t,h,s,p,d,f)),e=l}else{const n=t;0,m=ar(n.length>1?n(s,{attrs:l,slots:a,emit:c}):n(s,null)),e=t.props?l:xt(l)}let v=m;if(e&&!1!==g){const t=Object.keys(e),{shapeFlag:n}=v;t.length&&7&n&&(o&&t.some(_)&&(e=Ot(e,o)),v=ir(v,e))}0,n.dirs&&(v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&(v.transition=n.transition),m=v}catch(y){Vn.length=0,Rr(y,e,1),m=rr(Bn)}return kt(v),m}const xt=e=>{let t;for(const n in e)("class"===n||"style"===n||g(n))&&((t||(t={}))[n]=e[n]);return t},Ot=(e,t)=>{const n={};for(const r in e)_(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function At(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!It(n,s))return!0}return!1}function Dt(e,t){if(vr){let n=vr.provides;const r=vr.parent&&vr.parent.provides;r===n&&(n=vr.provides=Object.create(r)),n[e]=t}else;}function Lt(e,t,n=!1){const r=vr||Et;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&E(t)?t.call(r.proxy):t}}function Mt(e){return E(e)?{setup:e,name:e.name}:e}const Ft=e=>!!e.type.__asyncLoader,Ut=e=>e.type.__isKeepAlive;function jt(e,t){Bt(e,"a",t)}function qt(e,t){Bt(e,"da",t)}function Bt(e,t,n=vr){const r=e.__wdc||(e.__wdc=()=>{let t=n;for(;t;){if(t.isDeactivated)return;t=t.parent}e()});if(Vt(t,r,n),n){let e=n.parent;for(;e&&e.parent;)Ut(e.parent.vnode)&&Wt(r,t,n,e),e=e.parent}}function Wt(e,t,n,r){const i=Vt(t,e,r,!0);Jt((()=>{v(r[t],i)}),n)}function Vt(e,t,n=vr,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;le(),yr(n);const i=Pr(t,n,e,r);return wr(),ce(),i});return r?i.unshift(s):i.push(s),s}}const zt=e=>(t,n=vr)=>(!Cr||"sp"===e)&&Vt(e,t,n),Ht=zt("bm"),$t=zt("m"),Gt=zt("bu"),Kt=zt("u"),Yt=zt("bum"),Jt=zt("um"),Qt=zt("sp"),Xt=zt("rtg"),Zt=zt("rtc");function en(e,t=vr){Vt("ec",e,t)}let tn=!0;function nn(e){const t=on(e),n=e.proxy,r=e.ctx;tn=!1,t.beforeCreate&&rn(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:p,beforeUpdate:f,updated:g,activated:_,deactivated:m,beforeDestroy:v,beforeUnmount:y,destroyed:w,unmounted:C,render:I,renderTracked:T,renderTriggered:k,errorCaptured:P,serverPrefetch:R,expose:N,inheritAttrs:x,components:O,directives:A,filters:D}=t;if(c&&function(e,t,n=d,r=!1){b(e)&&(e=un(e));for(const i in e){const n=e[i];let s;s=S(n)?"default"in n?Lt(n.from||i,n.default,!0):Lt(n.from||i):Lt(n),dt(s)&&r?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[i]=s}}(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const d in o){const e=o[d];E(e)&&(r[d]=e.bind(n))}if(i){const t=i.call(n,n);S(t)&&(e.data=tt(t))}if(tn=!0,s)for(const b in s){const e=s[b],t=wt({get:E(e)?e.bind(n,n):E(e.get)?e.get.bind(n,n):d,set:!E(e)&&E(e.set)?e.set.bind(n):d});Object.defineProperty(r,b,{enumerable:!0,configurable:!0,get:()=>t.value,set:e=>t.value=e})}if(a)for(const d in a)sn(a[d],r,n,d);if(l){const e=E(l)?l.call(n):l;Reflect.ownKeys(e).forEach((t=>{Dt(t,e[t])}))}function L(e,t){b(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(u&&rn(u,e,"c"),L(Ht,h),L($t,p),L(Gt,f),L(Kt,g),L(jt,_),L(qt,m),L(en,P),L(Zt,T),L(Xt,k),L(Yt,y),L(Jt,C),L(Qt,R),b(N))if(N.length){const t=e.exposed||(e.exposed={});N.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});I&&e.render===d&&(e.render=I),null!=x&&(e.inheritAttrs=x),O&&(e.components=O),A&&(e.directives=A)}function rn(e,t,n){Pr(b(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function sn(e,t,n,r){const i=r.includes(".")?ti(n,r):()=>n[r];if(T(e)){const n=t[e];E(n)&&Xr(i,n)}else if(E(e))Xr(i,e.bind(n));else if(S(e))if(b(e))e.forEach((e=>sn(e,t,n,r)));else{const r=E(e.handler)?e.handler.bind(n):t[e.handler];E(r)&&Xr(i,r,e)}}function on(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:i.length||n||r?(l={},i.length&&i.forEach((e=>an(l,e,o,!0))),an(l,t,o)):l=t,s.set(t,l),l}function an(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&an(e,s,n,!0),i&&i.forEach((t=>an(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=ln[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const ln={data:cn,props:dn,emits:dn,methods:dn,computed:dn,beforeCreate:hn,created:hn,beforeMount:hn,mounted:hn,beforeUpdate:hn,updated:hn,beforeDestroy:hn,beforeUnmount:hn,destroyed:hn,unmounted:hn,activated:hn,deactivated:hn,errorCaptured:hn,serverPrefetch:hn,components:dn,directives:dn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=m(Object.create(null),e);for(const r in t)n[r]=hn(e[r],t[r]);return n},provide:cn,inject:function(e,t){return dn(un(e),un(t))}};function cn(e,t){return t?e?function(){return m(E(e)?e.call(this,this):e,E(t)?t.call(this,this):t)}:t:e}function un(e){if(b(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function hn(e,t){return e?[...new Set([].concat(e,t))]:t}function dn(e,t){return e?m(m(Object.create(null),e),t):t}function pn(e,t,n,r=!1){const i={},s={};V(s,Zn,1),e.propsDefaults=Object.create(null),fn(e,t,i,s);for(const o in e.propsOptions[0])o in i||(i[o]=void 0);n?e.props=r?i:rt(i,!1,ke,Ke,Qe):e.type.props?e.props=i:e.props=s,e.attrs=s}function fn(e,t,n,r){const[i,s]=e.propsOptions;let o,a=!1;if(t)for(let l in t){if(A(l))continue;const c=t[l];let u;i&&w(i,u=M(l))?s&&s.includes(u)?(o||(o={}))[u]=c:n[u]=c:It(e.emitsOptions,l)||c!==r[l]&&(r[l]=c,a=!0)}if(s){const t=at(n),r=o||u;for(let o=0;o<s.length;o++){const a=s[o];n[a]=gn(i,t,a,r[a],e,!w(r,a))}}return a}function gn(e,t,n,r,i,s){const o=e[n];if(null!=o){const e=w(o,"default");if(e&&void 0===r){const e=o.default;if(o.type!==Function&&E(e)){const{propsDefaults:s}=i;n in s?r=s[n]:(yr(i),r=s[n]=e.call(null,t),wr())}else r=e}o[0]&&(s&&!e?r=!1:!o[1]||""!==r&&r!==U(n)||(r=!0))}return r}function _n(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,o={},a=[];let l=!1;if(!E(e)){const r=e=>{l=!0;const[n,r]=_n(e,t,!0);m(o,n),r&&a.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!s&&!l)return r.set(e,h),h;if(b(s))for(let h=0;h<s.length;h++){const e=M(s[h]);mn(e)&&(o[e]=u)}else if(s)for(const u in s){const e=M(u);if(mn(e)){const t=s[u],n=o[e]=b(t)||E(t)?{type:t}:t;if(n){const t=wn(Boolean,n.type),r=wn(String,n.type);n[0]=t>-1,n[1]=r<0||t<r,(t>-1||w(n,"default"))&&a.push(e)}}}const c=[o,a];return r.set(e,c),c}function mn(e){return"$"!==e[0]}function vn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function yn(e,t){return vn(e)===vn(t)}function wn(e,t){return b(t)?t.findIndex((t=>yn(t,e))):E(t)&&yn(t,e)?0:-1}const bn=e=>"_"===e[0]||"$stable"===e,Cn=e=>b(e)?e.map(ar):[ar(e)],In=(e,t,n)=>{const r=Rt(((...e)=>Cn(t(...e))),n);return r._c=!1,r},En=(e,t,n)=>{const r=e._ctx;for(const i in e){if(bn(i))continue;const n=e[i];if(E(n))t[i]=In(0,n,r);else if(null!=n){const e=Cn(n);t[i]=()=>e}}},Tn=(e,t)=>{const n=Cn(t);e.slots.default=()=>n};function kn(e,t){if(null===Et)return e;const n=Et.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[e,s,o,a=u]=t[i];E(e)&&(e={mounted:e,updated:e}),e.deep&&ni(s),r.push({dir:e,instance:n,value:s,oldValue:void 0,arg:o,modifiers:a})}return e}function Sn(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let o=0;o<i.length;o++){const a=i[o];s&&(a.oldValue=s[o].value);let l=a.dir[r];l&&(le(),Pr(l,n,8,[e.el,a,e,t]),ce())}}function Pn(){return{app:null,config:{isNativeTag:p,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rn=0;function Nn(e,t){return function(n,r=null){null==r||S(r)||(r=null);const i=Pn(),s=new Set;let o=!1;const a=i.app={_uid:Rn++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:ii,get config(){return i.config},set config(e){},use:(e,...t)=>(s.has(e)||(e&&E(e.install)?(s.add(e),e.install(a,...t)):E(e)&&(s.add(e),e(a,...t))),a),mixin:e=>(i.mixins.includes(e)||i.mixins.push(e),a),component:(e,t)=>t?(i.components[e]=t,a):i.components[e],directive:(e,t)=>t?(i.directives[e]=t,a):i.directives[e],mount(s,l,c){if(!o){const u=rr(n,r);return u.appContext=i,l&&t?t(u,s):e(u,s,c),o=!0,a._container=s,s.__vue_app__=a,u.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(e,t)=>(i.provides[e]=t,a)};return a}}const xn=function(e,t){t&&t.pendingBranch?b(e)?t.effects.push(...e):t.effects.push(e):$r(e,Ur,Fr,jr)};function On(e){return function(e,t){const{insert:n,remove:r,patchProp:i,createElement:s,createText:o,createComment:a,setText:l,setElementText:c,parentNode:p,nextSibling:f,setScopeId:g=d,cloneNode:_,insertStaticContent:v}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Xn(e,t)&&(r=te(e),J(e,i,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case qn:b(e,t,n,r);break;case Bn:C(e,t,n,r);break;case Wn:null==e&&I(t,n,r,o);break;case jn:L(e,t,n,r,i,s,o,a,l);break;default:1&h?k(e,t,n,r,i,s,o,a,l):6&h?F(e,t,n,r,i,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,r,i,s,o,a,l,re)}null!=u&&i&&An(u,e&&e.ref,s,t||e,!t)},b=(e,t,r,i)=>{if(null==e)n(t.el=o(t.children),r,i);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},C=(e,t,r,i)=>{null==e?n(t.el=a(t.children||""),r,i):t.el=e.el},I=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r)},E=({el:e,anchor:t},r,i)=>{let s;for(;e&&e!==t;)s=f(e),n(e,r,i),e=s;n(t,r,i)},T=({el:e,anchor:t})=>{let n;for(;e&&e!==t;)n=f(e),r(e),e=n;r(t)},k=(e,t,n,r,i,s,o,a,l)=>{o=o||"svg"===t.type,null==e?S(t,n,r,i,s,o,a,l):x(e,t,i,s,o,a,l)},S=(e,t,r,o,a,l,u,h)=>{let d,p;const{type:f,props:g,shapeFlag:m,transition:v,patchFlag:y,dirs:w}=e;if(e.el&&void 0!==_&&-1===y)d=e.el=_(e.el);else{if(d=e.el=s(e.type,l,g&&g.is,g),8&m?c(d,e.children):16&m&&N(e.children,d,null,o,a,l&&"foreignObject"!==f,u,h),w&&Sn(e,null,o,"created"),g){for(const t in g)"value"===t||A(t)||i(d,t,null,g[t],l,e.children,o,a,ee);"value"in g&&i(d,"value",null,g.value),(p=g.onVnodeBeforeMount)&&Dn(p,o,e)}R(d,e,e.scopeId,u,o)}w&&Sn(e,null,o,"beforeMount");const b=(!a||a&&!a.pendingBranch)&&v&&!v.persisted;b&&v.beforeEnter(d),n(d,t,r),((p=g&&g.onVnodeMounted)||b||w)&&xn((()=>{p&&Dn(p,o,e),b&&v.enter(d),w&&Sn(e,null,o,"mounted")}),a)},R=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){if(t===i.subTree){const t=i.vnode;R(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},N=(e,t,n,r,i,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?lr(e[c]):ar(e[c]);y(null,l,t,n,r,i,s,o,a)}},x=(e,t,n,r,s,o,a)=>{const l=t.el=e.el;let{patchFlag:h,dynamicChildren:d,dirs:p}=t;h|=16&e.patchFlag;const f=e.props||u,g=t.props||u;let _;(_=g.onVnodeBeforeUpdate)&&Dn(_,n,t,e),p&&Sn(t,e,n,"beforeUpdate");const m=s&&"foreignObject"!==t.type;if(d?O(e.dynamicChildren,d,l,n,r,m,o):a||H(e,t,l,null,n,r,m,o,!1),h>0){if(16&h)D(l,t,f,g,n,r,s);else if(2&h&&f.class!==g.class&&i(l,"class",null,g.class,s),4&h&&i(l,"style",f.style,g.style,s),8&h){const o=t.dynamicProps;for(let t=0;t<o.length;t++){const a=o[t],c=f[a],u=g[a];u===c&&"value"!==a||i(l,a,c,u,s,e.children,n,r,ee)}}1&h&&e.children!==t.children&&c(l,t.children)}else a||null!=d||D(l,t,f,g,n,r,s);((_=g.onVnodeUpdated)||p)&&xn((()=>{_&&Dn(_,n,t,e),p&&Sn(t,e,n,"updated")}),r)},O=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===jn||!Xn(l,c)||70&l.shapeFlag)?p(l.el):n;y(l,c,u,null,r,i,s,o,!0)}},D=(e,t,n,r,s,o,a)=>{if(n!==r){for(const l in r){if(A(l))continue;const c=r[l],u=n[l];c!==u&&"value"!==l&&i(e,l,u,c,a,t.children,s,o,ee)}if(n!==u)for(const l in n)A(l)||l in r||i(e,l,n[l],null,a,t.children,s,o,ee);"value"in r&&i(e,"value",n.value,r.value)}},L=(e,t,r,i,s,a,l,c,u)=>{const h=t.el=e?e.el:o(""),d=t.anchor=e?e.anchor:o("");let{patchFlag:p,dynamicChildren:f,slotScopeIds:g}=t;g&&(c=c?c.concat(g):g),null==e?(n(h,r,i),n(d,r,i),N(t.children,r,d,s,a,l,c,u)):p>0&&64&p&&f&&e.dynamicChildren?(O(e.dynamicChildren,f,r,s,a,l,c),(null!=t.key||s&&t===s.subTree)&&Ln(e,t,!0)):H(e,t,r,d,s,a,l,c,u)},F=(e,t,n,r,i,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,l):j(t,n,r,i,s,o,l):q(e,t,l)},j=(e,t,n,r,i,s,o)=>{const a=e.component=function(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||_r,s={uid:mr++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,update:null,scope:new G(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_n(r,i),emitsOptions:Ct(r,i),emit:null,emitted:null,propsDefaults:u,inheritAttrs:r.inheritAttrs,ctx:u,data:u,props:u,attrs:u,slots:u,refs:u,setupState:u,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};s.ctx={_:s},s.root=t?t.root:s,s.emit=bt.bind(null,s),e.ce&&e.ce(s);return s}(e,r,i);if(Ut(e)&&(a.ctx.renderer=re),function(e,t=!1){Cr=t;const{props:n,children:r}=e.vnode,i=br(e);pn(e,n,i,t),((e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=at(t),V(t,"_",n)):En(t,e.slots={})}else e.slots={},t&&Tn(e,t);V(e.slots,Zn,1)})(e,r);const s=i?function(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=lt(new Proxy(e.ctx,gr));const{setup:r}=n;if(r){const n=e.setupContext=r.length>1?function(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=function(e){return new Proxy(e.attrs,{get:(t,n)=>(ue(e,0,"$attrs"),t[n])})}(e))},slots:e.slots,emit:e.emit,expose:t}}(e):null;yr(e),le();const i=Sr(r,e,0,[e.props,n]);if(ce(),wr(),P(i)){if(i.then(wr,wr),t)return i.then((t=>{Ir(e,t)})).catch((t=>{Rr(t,e,0)}));e.asyncDep=i}else Ir(e,i)}else Er(e)}(e,t):void 0;Cr=!1}(a),a.asyncDep){if(i&&i.registerDep(a,B),!e.el){const e=a.subTree=rr(Bn);C(null,e,t,n)}}else B(a,e,t,n,i,s,o)},q=(e,t,n)=>{const r=t.component=e.component;if(function(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||At(r,o,c):!!o);if(1024&l)return!0;if(16&l)return r?At(r,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!It(c,n))return!0}}return!1}(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void z(r,t,n);r.next=t,function(e){const t=Or.indexOf(e);t>Ar&&Or.splice(t,1)}(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},B=(e,t,n,r,i,s,o)=>{const a=new ie((()=>{if(e.isMounted){let t,{next:n,bu:r,u:l,parent:c,vnode:u}=e,h=n;a.allowRecurse=!1,n?(n.el=u.el,z(e,n,o)):n=u,r&&W(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&Dn(t,c,n,u),a.allowRecurse=!0;const d=Nt(e),f=e.subTree;e.subTree=d,y(f,d,p(f.el),te(f),e,i,s),n.el=d.el,null===h&&function({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}(e,d.el),l&&xn(l,i),(t=n.props&&n.props.onVnodeUpdated)&&xn((()=>Dn(t,c,n,u)),i)}else{let o;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,p=Ft(t);if(a.allowRecurse=!1,u&&W(u),!p&&(o=c&&c.onVnodeBeforeMount)&&Dn(o,d,t),a.allowRecurse=!0,l&&oe){const n=()=>{e.subTree=Nt(e),oe(l,e.subTree,e,i,null)};p?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{const o=e.subTree=Nt(e);y(null,o,n,r,e,i,s),t.el=o.el}if(h&&xn(h,i),!p&&(o=c&&c.onVnodeMounted)){const e=t;xn((()=>Dn(o,d,e)),i)}256&t.shapeFlag&&e.a&&xn(e.a,i),e.isMounted=!0,t=n=r=null}}),(()=>zr(e.update)),e.scope),l=e.update=a.run.bind(a);l.id=e.uid,a.allowRecurse=l.allowRecurse=!0,l()},z=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,function(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=e,a=at(i),[l]=e.propsOptions;let c=!1;if(!(r||o>0)||16&o){let r;fn(e,t,i,s)&&(c=!0);for(const s in a)t&&(w(t,s)||(r=U(s))!==s&&w(t,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(i[s]=gn(l,a,s,void 0,e,!0)):delete i[s]);if(s!==a)for(const e in s)t&&w(t,e)||(delete s[e],c=!0)}else if(8&o){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let o=n[r];const u=t[o];if(l)if(w(s,o))u!==s[o]&&(s[o]=u,c=!0);else{const t=M(o);i[t]=gn(l,a,t,u,e,!1)}else u!==s[o]&&(s[o]=u,c=!0)}}c&&pe(e,"set","$attrs")}(e,t.props,r,n),((e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,o=u;if(32&r.shapeFlag){const e=t._;e?n&&1===e?s=!1:(m(i,t),n||1!==e||delete i._):(s=!t.$stable,En(t,i)),o=t}else t&&(Tn(e,t),o={default:1});if(s)for(const a in i)bn(a)||a in o||delete i[a]})(e,t.children,n),le(),Gr(void 0,e.update),ce()},H=(e,t,n,r,i,s,o,a,l=!1)=>{const u=e&&e.children,h=e?e.shapeFlag:0,d=t.children,{patchFlag:p,shapeFlag:f}=t;if(p>0){if(128&p)return void K(u,d,n,r,i,s,o,a,l);if(256&p)return void $(u,d,n,r,i,s,o,a,l)}8&f?(16&h&&ee(u,i,s),d!==u&&c(n,d)):16&h?16&f?K(u,d,n,r,i,s,o,a,l):ee(u,i,s,!0):(8&h&&c(n,""),16&f&&N(d,n,r,i,s,o,a,l))},$=(e,t,n,r,i,s,o,a,l)=>{t=t||h;const c=(e=e||h).length,u=t.length,d=Math.min(c,u);let p;for(p=0;p<d;p++){const r=t[p]=l?lr(t[p]):ar(t[p]);y(e[p],r,n,null,i,s,o,a,l)}c>u?ee(e,i,s,!0,!1,d):N(t,n,r,i,s,o,a,l,d)},K=(e,t,n,r,i,s,o,a,l)=>{let c=0;const u=t.length;let d=e.length-1,p=u-1;for(;c<=d&&c<=p;){const r=e[c],u=t[c]=l?lr(t[c]):ar(t[c]);if(!Xn(r,u))break;y(r,u,n,null,i,s,o,a,l),c++}for(;c<=d&&c<=p;){const r=e[d],c=t[p]=l?lr(t[p]):ar(t[p]);if(!Xn(r,c))break;y(r,c,n,null,i,s,o,a,l),d--,p--}if(c>d){if(c<=p){const e=p+1,h=e<u?t[e].el:r;for(;c<=p;)y(null,t[c]=l?lr(t[c]):ar(t[c]),n,h,i,s,o,a,l),c++}}else if(c>p)for(;c<=d;)J(e[c],i,s,!0),c++;else{const f=c,g=c,_=new Map;for(c=g;c<=p;c++){const e=t[c]=l?lr(t[c]):ar(t[c]);null!=e.key&&_.set(e.key,c)}let m,v=0;const w=p-g+1;let b=!1,C=0;const I=new Array(w);for(c=0;c<w;c++)I[c]=0;for(c=f;c<=d;c++){const r=e[c];if(v>=w){J(r,i,s,!0);continue}let u;if(null!=r.key)u=_.get(r.key);else for(m=g;m<=p;m++)if(0===I[m-g]&&Xn(r,t[m])){u=m;break}void 0===u?J(r,i,s,!0):(I[u-g]=c+1,u>=C?C=u:b=!0,y(r,t[u],n,null,i,s,o,a,l),v++)}const E=b?function(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];for(;s-- >0;)n[s]=o,o=t[o];return n}(I):h;for(m=E.length-1,c=w-1;c>=0;c--){const e=g+c,h=t[e],d=e+1<u?t[e+1].el:r;0===I[c]?y(null,h,n,d,i,s,o,a,l):b&&(m<0||c!==E[m]?Y(h,n,d,2):m--)}}},Y=(e,t,r,i,s=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void Y(e.component.subTree,t,r,i);if(128&u)return void e.suspense.move(t,r,i);if(64&u)return void a.move(e,t,r,re);if(a===jn){n(o,t,r);for(let e=0;e<c.length;e++)Y(c[e],t,r,i);return void n(e.anchor,t,r)}if(a===Wn)return void E(e,t,r);if(2!==i&&1&u&&l)if(0===i)l.beforeEnter(o),n(o,t,r),xn((()=>l.enter(o)),s);else{const{leave:e,delayLeave:i,afterLeave:s}=l,a=()=>n(o,t,r),c=()=>{e(o,(()=>{a(),s&&s()}))};i?i(o,a,c):c()}else n(o,t,r)},J=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&An(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const p=1&u&&d,f=!Ft(e);let g;if(f&&(g=o&&o.onVnodeBeforeUnmount)&&Dn(g,t,e),6&u)Z(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);p&&Sn(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,re,r):c&&(s!==jn||h>0&&64&h)?ee(c,t,n,!1,!0):(s===jn&&384&h||!i&&16&u)&&ee(l,t,n),r&&Q(e)}(f&&(g=o&&o.onVnodeUnmounted)||p)&&xn((()=>{g&&Dn(g,t,e),p&&Sn(e,null,t,"unmounted")}),n)},Q=e=>{const{type:t,el:n,anchor:i,transition:s}=e;if(t===jn)return void X(n,i);if(t===Wn)return void T(e);const o=()=>{r(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&e.shapeFlag&&s&&!s.persisted){const{leave:t,delayLeave:r}=s,i=()=>t(n,o);r?r(e.el,o,i):i()}else o()},X=(e,t)=>{let n;for(;e!==t;)n=f(e),r(e),e=n;r(t)},Z=(e,t,n)=>{const{bum:r,scope:i,update:s,subTree:o,um:a}=e;r&&W(r),i.stop(),s&&(s.active=!1,J(o,e,t,n)),a&&xn(a,t),xn((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},ee=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)J(e[o],t,n,r,i)},te=e=>6&e.shapeFlag?te(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),ne=(e,t,n)=>{null==e?t._vnode&&J(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),Kr(),t._vnode=e},re={p:y,um:J,m:Y,r:Q,mt:j,mc:N,pc:H,pbc:O,n:te,o:e};let se,oe;t&&([se,oe]=t(re));return{render:ne,hydrate:se,createApp:Nn(ne,se)}}(e)}function An(e,t,n,r,i=!1){if(b(e))return void e.forEach(((e,s)=>An(e,t&&(b(t)?t[s]:t),n,r,i)));if(Ft(r)&&!i)return;const s=4&r.shapeFlag?Tr(r.component)||r.component.proxy:r.el,o=i?null:s,{i:a,r:l}=e,c=t&&t.r,h=a.refs===u?a.refs={}:a.refs,d=a.setupState;if(null!=c&&c!==l&&(T(c)?(h[c]=null,w(d,c)&&(d[c]=null)):dt(c)&&(c.value=null)),T(l)){const e=()=>{h[l]=o,w(d,l)&&(d[l]=o)};o?(e.id=-1,xn(e,n)):e()}else if(dt(l)){const e=()=>{l.value=o};o?(e.id=-1,xn(e,n)):e()}else E(l)&&Sr(l,a,12,[o,h])}function Dn(e,t,n,r=null){Pr(e,t,7,[n,r])}function Ln(e,t,n=!1){const r=e.children,i=t.children;if(b(r)&&b(i))for(let s=0;s<r.length;s++){const e=r[s];let t=i[s];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=i[s]=lr(i[s]),t.el=e.el),n||Ln(e,t))}}function Mn(e,t){return function(e,t,n=!0,r=!1){const i=Et||vr;if(i){const n=i.type;if("components"===e){const e=kr(n);if(e&&(e===t||e===M(t)||e===j(M(t))))return n}const s=Un(i[e]||n[e],t)||Un(i.appContext[e],t);return!s&&r?n:s}}("components",e,!0,t)||e}const Fn=Symbol();function Un(e,t){return e&&(e[t]||e[M(t)]||e[j(M(t))])}const jn=Symbol(void 0),qn=Symbol(void 0),Bn=Symbol(void 0),Wn=Symbol(void 0),Vn=[];let zn=null;function Hn(e=!1){Vn.push(zn=e?null:[])}let $n=1;function Gn(e){$n+=e}function Kn(e){return e.dynamicChildren=$n>0?zn||h:null,Vn.pop(),zn=Vn[Vn.length-1]||null,$n>0&&zn&&zn.push(e),e}function Yn(e,t,n,r,i,s){return Kn(nr(e,t,n,r,i,s,!0))}function Jn(e,t,n,r,i){return Kn(rr(e,t,n,r,i,!0))}function Qn(e){return!!e&&!0===e.__v_isVNode}function Xn(e,t){return e.type===t.type&&e.key===t.key}const Zn="__vInternal",er=({key:e})=>null!=e?e:null,tr=({ref:e})=>null!=e?T(e)||dt(e)||E(e)?{i:Et,r:e}:e:null;function nr(e,t=null,n=null,r=0,i=null,s=(e===jn?0:1),o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&er(t),ref:t&&tr(t),scopeId:Tt,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return a?(cr(l,n),128&s&&e.normalize(l)):n&&(l.shapeFlag|=T(n)?8:16),$n>0&&!o&&zn&&(l.patchFlag>0||6&s)&&32!==l.patchFlag&&zn.push(l),l}const rr=function(e,t=null,n=null,i=0,s=null,o=!1){e&&e!==Fn||(e=Bn);if(Qn(e)){const r=ir(e,t,!0);return n&&cr(r,n),r}l=e,E(l)&&"__vccOpts"in l&&(e=e.__vccOpts);var l;if(t){t=function(e){return e?ot(e)||Zn in e?m({},e):e:null}(t);let{class:e,style:n}=t;e&&!T(e)&&(t.class=a(e)),S(n)&&(ot(n)&&!b(n)&&(n=m({},n)),t.style=r(n))}const c=T(e)?1:(e=>e.__isSuspense)(e)?128:(e=>e.__isTeleport)(e)?64:S(e)?4:E(e)?2:0;return nr(e,t,n,i,s,c,o,!0)};function ir(e,t,n=!1){const{props:i,ref:s,patchFlag:o,children:l}=e,c=t?function(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=a([t.class,i.class]));else if("style"===e)t.style=r([t.style,i.style]);else if(g(e)){const n=t[e],r=i[e];n!==r&&(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=i[e])}return t}(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&er(c),ref:t&&t.ref?n&&s?b(s)?s.concat(tr(t)):[s,tr(t)]:tr(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==jn?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ir(e.ssContent),ssFallback:e.ssFallback&&ir(e.ssFallback),el:e.el,anchor:e.anchor}}function sr(e=" ",t=0){return rr(qn,null,e,t)}function or(e="",t=!1){return t?(Hn(),Jn(Bn,null,e)):rr(Bn,null,e)}function ar(e){return null==e||"boolean"==typeof e?rr(Bn):b(e)?rr(jn,null,e.slice()):"object"==typeof e?lr(e):rr(qn,null,String(e))}function lr(e){return null===e.el||e.memo?e:ir(e)}function cr(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if(b(t))n=16;else if("object"==typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),cr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Zn in t?3===r&&Et&&(1===Et.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Et}}else E(t)?(t={default:t,_ctx:Et},n=32):(t=String(t),64&r?(n=16,t=[sr(t)]):n=8);e.children=t,e.shapeFlag|=n}function ur(e,t,n,r){let i;const s=n&&n[r];if(b(e)||T(e)){i=new Array(e.length);for(let n=0,r=e.length;n<r;n++)i[n]=t(e[n],n,void 0,s&&s[n])}else if("number"==typeof e){i=new Array(e);for(let n=0;n<e;n++)i[n]=t(n+1,n,void 0,s&&s[n])}else if(S(e))if(e[Symbol.iterator])i=Array.from(e,((e,n)=>t(e,n,void 0,s&&s[n])));else{const n=Object.keys(e);i=new Array(n.length);for(let r=0,o=n.length;r<o;r++){const o=n[r];i[r]=t(e[o],o,r,s&&s[r])}}else i=[];return n&&(n[r]=i),i}function hr(e,t,n={},r,i){if(Et.isCE)return rr("slot","default"===t?null:{name:t},r&&r());let s=e[t];s&&s._c&&(s._d=!1),Hn();const o=s&&dr(s(n)),a=Jn(jn,{key:n.key||`_${t}`},o||(r?r():[]),o&&1===e._?64:-2);return!i&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function dr(e){return e.some((e=>!Qn(e)||e.type!==Bn&&!(e.type===jn&&!dr(e.children))))?e:null}const pr=e=>e?br(e)?Tr(e)||e.proxy:pr(e.parent):null,fr=m(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pr(e.parent),$root:e=>pr(e.root),$emit:e=>e.emit,$options:e=>on(e),$forceUpdate:e=>()=>zr(e.update),$nextTick:e=>Vr.bind(e.proxy),$watch:e=>ei.bind(e)}),gr={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:a,appContext:l}=e;let c;if("$"!==t[0]){const a=o[t];if(void 0!==a)switch(a){case 0:return r[t];case 1:return i[t];case 3:return n[t];case 2:return s[t]}else{if(r!==u&&w(r,t))return o[t]=0,r[t];if(i!==u&&w(i,t))return o[t]=1,i[t];if((c=e.propsOptions[0])&&w(c,t))return o[t]=2,s[t];if(n!==u&&w(n,t))return o[t]=3,n[t];tn&&(o[t]=4)}}const h=fr[t];let d,p;return h?("$attrs"===t&&ue(e,0,t),h(e)):(d=a.__cssModules)&&(d=d[t])?d:n!==u&&w(n,t)?(o[t]=3,n[t]):(p=l.config.globalProperties,w(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;if(i!==u&&w(i,t))i[t]=n;else if(r!==u&&w(r,t))r[t]=n;else if(w(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let a;return void 0!==n[o]||e!==u&&w(e,o)||t!==u&&w(t,o)||(a=s[0])&&w(a,o)||w(r,o)||w(fr,o)||w(i.config.globalProperties,o)}},_r=Pn();let mr=0;let vr=null;const yr=e=>{vr=e,e.scope.on()},wr=()=>{vr&&vr.scope.off(),vr=null};function br(e){return 4&e.vnode.shapeFlag}let Cr=!1;function Ir(e,t,n){E(t)?e.render=t:S(t)&&(e.setupState=vt(t)),Er(e)}function Er(e,t,n){const r=e.type;e.render||(e.render=r.render||d),yr(e),le(),nn(e),ce(),wr()}function Tr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(vt(lt(e.exposed)),{get:(t,n)=>n in t?t[n]:n in fr?fr[n](e):void 0}))}function kr(e){return E(e)&&e.displayName||e.name}function Sr(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Rr(s,t,n)}return i}function Pr(e,t,n,r){if(E(e)){const i=Sr(e,t,n,r);return i&&P(i)&&i.catch((e=>{Rr(e,t,n)})),i}const i=[];for(let s=0;s<e.length;s++)i.push(Pr(e[s],t,n,r));return i}function Rr(e,t,n,r=!0){t&&t.vnode;if(t){let r=t.parent;const i=t.proxy,s=n;for(;r;){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void Sr(o,null,10,[e,i,s])}!function(e,t,n,r=!0){console.error(e)}(e,0,0,r)}let Nr=!1,xr=!1;const Or=[];let Ar=0;const Dr=[];let Lr=null,Mr=0;const Fr=[];let Ur=null,jr=0;const qr=Promise.resolve();let Br=null,Wr=null;function Vr(e){const t=Br||qr;return e?t.then(this?e.bind(this):e):t}function zr(e){Or.length&&Or.includes(e,Nr&&e.allowRecurse?Ar+1:Ar)||e===Wr||(null==e.id?Or.push(e):Or.splice(function(e){let t=Ar+1,n=Or.length;for(;t<n;){const r=t+n>>>1;Yr(Or[r])<e?t=r+1:n=r}return t}(e.id),0,e),Hr())}function Hr(){Nr||xr||(xr=!0,Br=qr.then(Jr))}function $r(e,t,n,r){b(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),Hr()}function Gr(e,t=null){if(Dr.length){for(Wr=t,Lr=[...new Set(Dr)],Dr.length=0,Mr=0;Mr<Lr.length;Mr++)Lr[Mr]();Lr=null,Mr=0,Wr=null,Gr(e,t)}}function Kr(e){if(Fr.length){const e=[...new Set(Fr)];if(Fr.length=0,Ur)return void Ur.push(...e);for(Ur=e,Ur.sort(((e,t)=>Yr(e)-Yr(t))),jr=0;jr<Ur.length;jr++)Ur[jr]();Ur=null,jr=0}}const Yr=e=>null==e.id?1/0:e.id;function Jr(e){xr=!1,Nr=!0,Gr(e),Or.sort(((e,t)=>Yr(e)-Yr(t)));try{for(Ar=0;Ar<Or.length;Ar++){const e=Or[Ar];e&&!1!==e.active&&Sr(e,null,14)}}finally{Ar=0,Or.length=0,Kr(),Nr=!1,Br=null,(Or.length||Dr.length||Fr.length)&&Jr(e)}}const Qr={};function Xr(e,t,n){return Zr(e,t,n)}function Zr(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:o}=u){const a=vr;let l,c,h=!1,p=!1;if(dt(e)?(l=()=>e.value,h=!!e._shallow):it(e)?(l=()=>e,r=!0):b(e)?(p=!0,h=e.some(it),l=()=>e.map((e=>dt(e)?e.value:it(e)?ni(e):E(e)?Sr(e,a,2):void 0))):l=E(e)?t?()=>Sr(e,a,2):()=>{if(!a||!a.isUnmounted)return c&&c(),Pr(e,a,3,[f])}:d,t&&r){const e=l;l=()=>ni(e())}let f=e=>{c=y.onStop=()=>{Sr(e,a,4)}},g=p?[]:Qr;const _=()=>{if(y.active)if(t){const e=y.run();(r||h||(p?e.some(((e,t)=>B(e,g[t]))):B(e,g)))&&(c&&c(),Pr(t,a,3,[e,g===Qr?void 0:g,f]),g=e)}else y.run()};let m;_.allowRecurse=!!t,m="sync"===i?_:"post"===i?()=>xn(_,a&&a.suspense):()=>{!a||a.isMounted?function(e){$r(e,Lr,Dr,Mr)}(_):_()};const y=new ie(l,m);return t?n?_():g=y.run():"post"===i?xn(y.run.bind(y),a&&a.suspense):y.run(),()=>{y.stop(),a&&a.scope&&v(a.scope.effects,y)}}function ei(e,t,n){const r=this.proxy,i=T(e)?e.includes(".")?ti(r,e):()=>r[e]:e.bind(r,r);let s;E(t)?s=t:(s=t.handler,n=t);const o=vr;yr(this);const a=Zr(i,s.bind(r),n);return o?yr(o):wr(),a}function ti(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ni(e,t=new Set){if(!S(e)||e.__v_skip)return e;if((t=t||new Set).has(e))return e;if(t.add(e),dt(e))ni(e.value,t);else if(b(e))for(let n=0;n<e.length;n++)ni(e[n],t);else if(I(e)||C(e))e.forEach((e=>{ni(e,t)}));else if(x(e))for(const n in e)ni(e[n],t);return e}function ri(e,t,n){const r=arguments.length;return 2===r?S(t)&&!b(t)?Qn(t)?rr(e,null,[t]):rr(e,t):rr(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Qn(n)&&(n=[n]),rr(e,t,n))}const ii="3.2.11",si="undefined"!=typeof document?document:null,oi=new Map,ai={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?si.createElementNS("http://www.w3.org/2000/svg",e):si.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>si.createTextNode(e),createComment:e=>si.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>si.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let s=oi.get(e);if(!s){const t=si.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,s=t.content,r){const e=s.firstChild;for(;e.firstChild;)s.appendChild(e.firstChild);s.removeChild(e)}oi.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};const li=/\s*!important$/;function ci(e,t,n){if(b(n))n.forEach((n=>ci(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const r=function(e,t){const n=hi[t];if(n)return n;let r=M(t);if("filter"!==r&&r in e)return hi[t]=r;r=j(r);for(let i=0;i<ui.length;i++){const n=ui[i]+r;if(n in e)return hi[t]=n}return t}(e,t);li.test(n)?e.setProperty(U(r),n.replace(li,""),"important"):e[r]=n}}const ui=["Webkit","Moz","ms"],hi={};const di="http://www.w3.org/1999/xlink";let pi=Date.now,fi=!1;if("undefined"!=typeof window){pi()>document.createEvent("Event").timeStamp&&(pi=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);fi=!!(e&&Number(e[1])<=53)}let gi=0;const _i=Promise.resolve(),mi=()=>{gi=0};function vi(e,t,n,r){e.addEventListener(t,n,r)}function yi(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=function(e){let t;if(wi.test(e)){let n;for(t={};n=e.match(wi);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[U(e.slice(2)),t]}(t);if(r){vi(e,n,s[t]=function(e,t){const n=e=>{const r=e.timeStamp||pi();(fi||r>=n.attached-1)&&Pr(function(e,t){if(b(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}(e,n.value),t,5,[e])};return n.value=e,n.attached=(()=>gi||(_i.then(mi),gi=pi()))(),n}(r,i),a)}else o&&(!function(e,t,n,r){e.removeEventListener(t,n,r)}(e,n,o,a),s[t]=void 0)}}const wi=/(?:Once|Passive|Capture)$/;const bi=/^on[a-z]/;const Ci=e=>{const t=e.props["onUpdate:modelValue"];return b(t)?e=>W(t,e):t};function Ii(e){e.target.composing=!0}function Ei(e){const t=e.target;t.composing&&(t.composing=!1,function(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(t,"input"))}const Ti={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=Ci(i);const s=r||i.props&&"number"===i.props.type;vi(e,t?"change":"input",(t=>{if(t.target.composing)return;let r=e.value;n?r=r.trim():s&&(r=z(r)),e._assign(r)})),n&&vi(e,"change",(()=>{e.value=e.value.trim()})),t||(vi(e,"compositionstart",Ii),vi(e,"compositionend",Ei),vi(e,"change",Ei))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=Ci(s),e.composing)return;if(document.activeElement===e){if(n)return;if(r&&e.value.trim()===t)return;if((i||"number"===e.type)&&z(e.value)===t)return}const o=null==t?"":t;e.value!==o&&(e.value=o)}},ki=["ctrl","shift","alt","meta"],Si={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>ki.some((n=>e[`${n}Key`]&&!t.includes(n)))},Pi=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=Si[t[e]];if(r&&r(n,t))return}return e(n,...r)},Ri=m({patchProp:(e,r,i,s,o=!1,a,l,c,u)=>{"class"===r?function(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}(e,s,o):"style"===r?function(e,t,n){const r=e.style,i=r.display;if(n)if(T(n))t!==n&&(r.cssText=n);else{for(const e in n)ci(r,e,n[e]);if(t&&!T(t))for(const e in t)null==n[e]&&ci(r,e,"")}else e.removeAttribute("style");"_vod"in e&&(r.display=i)}(e,i,s):g(r)?_(r)||yi(e,r,0,s,l):("."===r[0]?(r=r.slice(1),1):"^"===r[0]?(r=r.slice(1),0):function(e,t,n,r){if(r)return"innerHTML"===t||"textContent"===t||!!(t in e&&bi.test(t)&&E(n));if("spellcheck"===t||"draggable"===t)return!1;if("form"===t)return!1;if("list"===t&&"INPUT"===e.tagName)return!1;if("type"===t&&"TEXTAREA"===e.tagName)return!1;if(bi.test(t)&&T(n))return!1;return t in e}(e,r,s,o))?function(e,t,r,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==r?"":r);if("value"===t&&"PROGRESS"!==e.tagName){e._value=r;const n=null==r?"":r;return e.value!==n&&(e.value=n),void(null==r&&e.removeAttribute(t))}if(""===r||null==r){const i=typeof e[t];if("boolean"===i)return void(e[t]=n(r));if(null==r&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(l){}return void e.removeAttribute(t)}}try{e[t]=r}catch(c){}}(e,r,s,a,l,c,u):("true-value"===r?e._trueValue=s:"false-value"===r&&(e._falseValue=s),function(e,r,i,s,o){if(s&&r.startsWith("xlink:"))null==i?e.removeAttributeNS(di,r.slice(6,r.length)):e.setAttributeNS(di,r,i);else{const s=t(r);null==i||s&&!n(i)?e.removeAttribute(r):e.setAttribute(r,s?"":i)}}(e,r,s,o))}},ai);let Ni;const xi=(...e)=>{const t=(Ni||(Ni=On(Ri))).createApp(...e),{mount:n}=t;return t.mount=e=>{const r=function(e){if(T(e)){return document.querySelector(e)}return e}(e);if(!r)return;const i=t._component;E(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const s=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},t};function Oi(){return"undefined"!=typeof navigator?window:"undefined"!=typeof global?global:{}}function Ai(e,t){const n=Oi().__VUE_DEVTOOLS_GLOBAL_HOOK__;if(n)n.emit("devtools-plugin:setup",e,t);else{const n=Oi();(n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:e,setupFn:t})}}
/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */function Di(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function Li(e){return null!==e&&"object"==typeof e}function Mi(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function Fi(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;ji(e,n,[],e._modules.root,!0),Ui(e,n,t)}function Ui(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};Di(i,(function(t,n){s[n]=function(e,t){return function(){return e(t)}}(t,e),Object.defineProperty(e.getters,n,{get:function(){return s[n]()},enumerable:!0})})),e._state=tt({data:t}),e.strict&&function(e){Xr((function(){return e._state.data}),(function(){}),{deep:!0,flush:"sync"})}(e),r&&n&&e._withCommit((function(){r.data=null}))}function ji(e,t,n,r,i){var s=!n.length,o=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[o],e._modulesNamespaceMap[o]=r),!s&&!i){var a=Bi(t,n.slice(0,-1)),l=n[n.length-1];e._withCommit((function(){a[l]=r.state}))}var c=r.context=function(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var s=Wi(n,r,i),o=s.payload,a=s.options,l=s.type;return a&&a.root||(l=t+l),e.dispatch(l,o)},commit:r?e.commit:function(n,r,i){var s=Wi(n,r,i),o=s.payload,a=s.options,l=s.type;a&&a.root||(l=t+l),e.commit(l,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return qi(e,t)}},state:{get:function(){return Bi(e.state,n)}}}),i}(e,o,n);r.forEachMutation((function(t,n){!function(e,t,n,r){(e._mutations[t]||(e._mutations[t]=[])).push((function(t){n.call(e,r.state,t)}))}(e,o+n,t,c)})),r.forEachAction((function(t,n){var r=t.root?n:o+n,i=t.handler||t;!function(e,t,n,r){(e._actions[t]||(e._actions[t]=[])).push((function(t){var i,s=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return(i=s)&&"function"==typeof i.then||(s=Promise.resolve(s)),e._devtoolHook?s.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):s}))}(e,r,i,c)})),r.forEachGetter((function(t,n){!function(e,t,n,r){if(e._wrappedGetters[t])return;e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}(e,o+n,t,c)})),r.forEachChild((function(r,s){ji(e,t,n.concat(s),r,i)}))}function qi(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function Bi(e,t){return t.reduce((function(e,t){return e[t]}),e)}function Wi(e,t,n){return Li(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var Vi=0;function zi(e,t){Ai({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:["vuex bindings"]},(function(n){n.addTimelineLayer({id:"vuex:mutations",label:"Vuex Mutations",color:Hi}),n.addTimelineLayer({id:"vuex:actions",label:"Vuex Actions",color:Hi}),n.addInspector({id:"vuex",label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&"vuex"===n.inspectorId)if(n.filter){var r=[];Yi(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[Ki(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var r=n.nodeId;qi(t,r),n.state=function(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var s=function(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[s]=Ji((function(){return e[n]}))}else t[n]=Ji((function(){return e[n]}))})),t}(t);i.getters=Object.keys(s).map((function(e){return{key:e.endsWith("/")?Gi(e):e,editable:!1,value:Ji((function(){return s[e]}))}}))}return i}((i=t._modules,(o=(s=r).split("/").filter((function(e){return e}))).reduce((function(e,t,n){var r=e[t];if(!r)throw new Error('Missing module "'+t+'" for path "'+s+'".');return n===o.length-1?r:r._children}),"root"===s?i:i.root._children)),"root"===r?t.getters:t._makeLocalGettersCache,r)}var i,s,o})),n.on.editInspectorState((function(n){if(n.app===e&&"vuex"===n.inspectorId){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree("vuex"),n.sendInspectorState("vuex"),n.addTimelineEvent({layerId:"vuex:mutations",event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=Vi++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:"vuex:actions",event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var Hi=8702998,$i={label:"namespaced",textColor:16777215,backgroundColor:6710886};function Gi(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function Ki(e,t){return{id:t||"root",label:Gi(t),tags:e.namespaced?[$i]:[],children:Object.keys(e._children).map((function(n){return Ki(e._children[n],t+n+"/")}))}}function Yi(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[$i]:[]}),Object.keys(t._children).forEach((function(i){Yi(e,t._children[i],n,r+i+"/")}))}function Ji(e){try{return e()}catch(t){return t}}var Qi=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"==typeof n?n():n)||{}},Xi={namespaced:{configurable:!0}};Xi.namespaced.get=function(){return!!this._rawModule.namespaced},Qi.prototype.addChild=function(e,t){this._children[e]=t},Qi.prototype.removeChild=function(e){delete this._children[e]},Qi.prototype.getChild=function(e){return this._children[e]},Qi.prototype.hasChild=function(e){return e in this._children},Qi.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},Qi.prototype.forEachChild=function(e){Di(this._children,e)},Qi.prototype.forEachGetter=function(e){this._rawModule.getters&&Di(this._rawModule.getters,e)},Qi.prototype.forEachAction=function(e){this._rawModule.actions&&Di(this._rawModule.actions,e)},Qi.prototype.forEachMutation=function(e){this._rawModule.mutations&&Di(this._rawModule.mutations,e)},Object.defineProperties(Qi.prototype,Xi);var Zi=function(e){this.register([],e,!1)};function es(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;es(e.concat(r),t.getChild(r),n.modules[r])}}function ts(e){return new ns(e)}Zi.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},Zi.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return e+((t=t.getChild(n)).namespaced?n+"/":"")}),"")},Zi.prototype.update=function(e){es([],this.root,e)},Zi.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0);var i=new Qi(t,n);0===e.length?this.root=i:this.get(e.slice(0,-1)).addChild(e[e.length-1],i);t.modules&&Di(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},Zi.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r&&r.runtime&&t.removeChild(n)},Zi.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var ns=function(e){var t=this;void 0===e&&(e={});var n=e.plugins;void 0===n&&(n=[]);var r=e.strict;void 0===r&&(r=!1);var i=e.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Zi(e),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=i;var s=this,o=this.dispatch,a=this.commit;this.dispatch=function(e,t){return o.call(s,e,t)},this.commit=function(e,t,n){return a.call(s,e,t,n)},this.strict=r;var l=this._modules.root.state;ji(this,l,[],this._modules.root),Ui(this,l),n.forEach((function(e){return e(t)}))},rs={state:{configurable:!0}};ns.prototype.install=function(e,t){e.provide(t||"store",this),e.config.globalProperties.$store=this,void 0!==this._devtools&&this._devtools&&zi(e,this)},rs.state.get=function(){return this._state.data},rs.state.set=function(e){},ns.prototype.commit=function(e,t,n){var r=this,i=Wi(e,t,n),s=i.type,o=i.payload,a={type:s,payload:o},l=this._mutations[s];l&&(this._withCommit((function(){l.forEach((function(e){e(o)}))})),this._subscribers.slice().forEach((function(e){return e(a,r.state)})))},ns.prototype.dispatch=function(e,t){var n=this,r=Wi(e,t),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(o,n.state)}))}catch(c){}var l=a.length>1?Promise.all(a.map((function(e){return e(s)}))):a[0](s);return new Promise((function(e,t){l.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(o,n.state)}))}catch(c){}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(o,n.state,e)}))}catch(c){}t(e)}))}))}},ns.prototype.subscribe=function(e,t){return Mi(e,this._subscribers,t)},ns.prototype.subscribeAction=function(e,t){return Mi("function"==typeof e?{before:e}:e,this._actionSubscribers,t)},ns.prototype.watch=function(e,t,n){var r=this;return Xr((function(){return e(r.state,r.getters)}),t,Object.assign({},n))},ns.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},ns.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"==typeof e&&(e=[e]),this._modules.register(e,t),ji(this,this.state,e,this._modules.get(e),n.preserveState),Ui(this,this.state)},ns.prototype.unregisterModule=function(e){var t=this;"string"==typeof e&&(e=[e]),this._modules.unregister(e),this._withCommit((function(){delete Bi(t.state,e.slice(0,-1))[e[e.length-1]]})),Fi(this)},ns.prototype.hasModule=function(e){return"string"==typeof e&&(e=[e]),this._modules.isRegistered(e)},ns.prototype.hotUpdate=function(e){this._modules.update(e),Fi(this,!0)},ns.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(ns.prototype,rs);var is=as((function(e,t){var n={};return os(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];var r=this.$store.commit;if(e){var s=ls(this.$store,"mapMutations",e);if(!s)return;r=s.context.commit}return"function"==typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n})),ss=as((function(e,t){var n={};return os(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||ls(this.$store,"mapGetters",e))return this.$store.getters[i]},n[r].vuex=!0})),n}));function os(e){return function(e){return Array.isArray(e)||Li(e)}(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function as(e){return function(t,n){return"string"!=typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ls(e,t,n){return e._modulesNamespaceMap[n]}
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
***************************************************************************** */var cs=function(e,t){return(cs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function us(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function hs(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{l(r.next(e))}catch(t){s(t)}}function a(e){try{l(r.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))}function ds(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}function ps(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function fs(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,s=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function gs(e,t,n){if(n||2===arguments.length)for(var r,i=0,s=t.length;i<s;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}
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
 */var _s=!1,ms="${JSCORE_VERSION}",vs=function(e,t){if(!e)throw ys(t)},ys=function(e){return new Error("Firebase Database ("+ms+") INTERNAL ASSERT FAILED: "+e)},ws=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},bs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<e.length;i+=3){var s=e[i],o=i+1<e.length,a=o?e[i+1]:0,l=i+2<e.length,c=l?e[i+2]:0,u=s>>2,h=(3&s)<<4|a>>4,d=(15&a)<<2|c>>6,p=63&c;l||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ws(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,r=0;n<e.length;){var i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(1023&o))}else{s=e[n++];var a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<e.length;){var s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0,a=++i<e.length?n[e.charAt(i)]:64,l=++i<e.length?n[e.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==l)throw Error();var c=s<<2|o>>4;if(r.push(c),64!==a){var u=o<<4&240|a>>2;if(r.push(u),64!==l){var h=a<<6&192|l;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Cs=function(e){try{return bs.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
function Is(e){return Es(void 0,e)}function Es(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=Es(e[n],t[n]));return e}
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
var Ts=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,r){n?t.reject(n):t.resolve(r),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,r))}},e}();
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
 */function ks(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Ss(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ks())}function Ps(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function Rs(){return!0===_s}
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
 */var Ns=function(e){function t(n,r,i){var s=e.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,xs.prototype.create),s}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}cs(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),xs=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=t[0]||{},i=this.service+"/"+e,s=this.errors[e],o=s?Os(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",l=new Ns(i,a,r);return l},e}();function Os(e,t){return e.replace(As,(function(e,n){var r=t[n];return null!=r?String(r):"<"+n+"?>"}))}var As=/\{\$([^}]+)}/g;
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
 */function Ds(e){return JSON.parse(e)}function Ls(e){return JSON.stringify(e)}
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
 */var Ms=function(e){var t={},n={},r={},i="";try{var s=e.split(".");t=Ds(Cs(s[0])||""),n=Ds(Cs(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(o){}return{header:t,claims:n,data:r,signature:i}};
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
function Fs(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Us(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function js(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qs(e,t,n){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function Bs(e,t){if(e===t)return!0;for(var n=Object.keys(e),r=Object.keys(t),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=e[o],l=t[o];if(Ws(a)&&Ws(l)){if(!Bs(a,l))return!1}else if(a!==l)return!1}for(var c=0,u=r;c<u.length;c++){o=u[c];if(!n.includes(o))return!1}return!0}function Ws(e){return null!==e&&"object"==typeof e}
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
 */function Vs(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},r=0,i=Object.entries(e);r<i.length;r++){var s=i[r];n(s[0],s[1])}return t.length?"&"+t.join("&"):""}
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
 */var zs=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var r=0;r<16;r++)n[r]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(r=0;r<16;r++)n[r]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var s,o,a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],u=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(s=u^l&(c^u),o=1518500249):(s=l^c^u,o=1859775393):r<60?(s=l&c|u&(l|c),o=2400959708):(s=l^c^u,o=3395469782);i=(a<<5|a>>>27)+s+h+o+n[r]&4294967295;h=u,u=c,c=4294967295&(l<<30|l>>>2),l=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+u&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;r<t;){if(0===s)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if("string"==typeof e){for(;r<t;)if(i[s]=e.charCodeAt(r),++r,++s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<t;)if(i[s]=e[r],++r,++s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)e[r]=this.chain_[n]>>i&255,++r;return e},e}();var Hs=function(){function e(e,t){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((function(){e(n)})).catch((function(e){n.error(e)}))}return e.prototype.next=function(e){this.forEachObserver((function(t){t.next(e)}))},e.prototype.error=function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)},e.prototype.complete=function(){this.forEachObserver((function(e){e.complete()})),this.close()},e.prototype.subscribe=function(e,t,n){var r,i=this;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(e,t){if("object"!=typeof e||null===e)return!1;for(var n=0,r=t;n<r.length;n++){var i=r[n];if(i in e&&"function"==typeof e[i])return!0}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n}).next&&(r.next=$s),void 0===r.error&&(r.error=$s),void 0===r.complete&&(r.complete=$s);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(e){}})),this.observers.push(r),s},e.prototype.unsubscribeOne=function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},e.prototype.forEachObserver=function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)},e.prototype.sendOne=function(e,t){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[e])try{t(n.observers[e])}catch(r){"undefined"!=typeof console&&console.error&&console.error(r)}}))},e.prototype.close=function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))},e}();function $s(){}function Gs(e,t){return e+" failed: "+t+" argument "}
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
 */var Ks=function(e){for(var t=0,n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};
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
function Ys(e){return e&&e._delegate?e._delegate:e}var Js=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),Qs=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new Ts;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(i){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(u){}try{for(var r=ps(this.instancesDeferred.entries()),i=r.next();!i.done;i=r.next()){var s=fs(i.value,2),o=s[0],a=s[1],l=this.normalizeInstanceIdentifier(o);try{var c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch(u){}}}catch(h){t={error:h}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e="[DEFAULT]"),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return hs(this,void 0,void 0,(function(){var e;return ds(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(gs(gs([],fs(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),fs(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e="[DEFAULT]"),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e="[DEFAULT]"),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var r=e.options,i=void 0===r?{}:r,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:s,options:i});try{for(var a=ps(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var c=fs(l.value,2),u=c[0],h=c[1];s===this.normalizeInstanceIdentifier(u)&&h.resolve(o)}}catch(d){t={error:d}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&e(s,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,r,i=this.onInitCallbacks.get(t);if(i)try{for(var s=ps(i),o=s.next();!o.done;o=s.next()){var a=o.value;try{a(e,t)}catch(l){}}}catch(c){n={error:c}}finally{try{o&&!o.done&&(r=s.return)&&r.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,r=e.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,"[DEFAULT]"===t?void 0:t),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(o){}return s||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e="[DEFAULT]"),this.component?this.component.multipleInstances?e:"[DEFAULT]":e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
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
 */var Xs,Zs,eo,to=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Qs(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
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
***************************************************************************** */function no(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),i=0;for(t=0;t<n;t++)for(var s=arguments[t],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
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
 */(eo=Zs||(Zs={}))[eo.DEBUG=0]="DEBUG",eo[eo.VERBOSE=1]="VERBOSE",eo[eo.INFO=2]="INFO",eo[eo.WARN=3]="WARN",eo[eo.ERROR=4]="ERROR",eo[eo.SILENT=5]="SILENT";var ro={debug:Zs.DEBUG,verbose:Zs.VERBOSE,info:Zs.INFO,warn:Zs.WARN,error:Zs.ERROR,silent:Zs.SILENT},io=Zs.INFO,so=((Xs={})[Zs.DEBUG]="log",Xs[Zs.VERBOSE]="log",Xs[Zs.INFO]="info",Xs[Zs.WARN]="warn",Xs[Zs.ERROR]="error",Xs),oo=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(!(t<e.logLevel)){var i=(new Date).toISOString(),s=so[t];if(!s)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[s].apply(console,no(["["+i+"]  "+e.name+":"],n))}},ao=function(){function e(e){this.name=e,this._logLevel=io,this._logHandler=oo,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in Zs))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?ro[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,no([this,Zs.DEBUG],e)),this._logHandler.apply(this,no([this,Zs.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,no([this,Zs.VERBOSE],e)),this._logHandler.apply(this,no([this,Zs.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,no([this,Zs.INFO],e)),this._logHandler.apply(this,no([this,Zs.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,no([this,Zs.WARN],e)),this._logHandler.apply(this,no([this,Zs.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,no([this,Zs.ERROR],e)),this._logHandler.apply(this,no([this,Zs.ERROR],e))},e}();
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
class lo{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const co=new ao("@firebase/app"),uo={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ho=new Map,po=new Map;function fo(e,t){try{e.container.addComponent(t)}catch(n){co.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function go(e){const t=e.name;if(po.has(t))return co.debug(`There were multiple attempts to register component ${t}.`),!1;po.set(t,e);for(const n of ho.values())fo(n,e);return!0}function _o(e,t){return e.container.getProvider(t)}
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
 */const mo=new xs("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class vo{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Js("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw mo.create("app-deleted",{appName:this._name})}}
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
 */function yo(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw mo.create("bad-app-name",{appName:String(r)});const i=ho.get(r);if(i){if(Bs(e,i.options)&&Bs(n,i.config))return i;throw mo.create("duplicate-app",{appName:r})}const s=new to(r);for(const a of po.values())s.addComponent(a);const o=new vo(e,n,s);return ho.set(r,o),o}function wo(e="[DEFAULT]"){const t=ho.get(e);if(!t)throw mo.create("no-app",{appName:e});return t}function bo(e,t,n){var r;let i=null!==(r=uo[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void co.warn(e.join(" "))}go(new Js(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
 */var Co;go(new Js("platform-logger",(e=>new lo(e)),"PRIVATE")),bo("@firebase/app","0.7.0",Co),bo("fire-js","");
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
bo("firebase","9.0.2","app");
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const Io="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,Eo=e=>Io?Symbol(e):"_vr_"+e,To=Eo("rvlm"),ko=Eo("rvd"),So=Eo("r"),Po=Eo("rl"),Ro=Eo("rvl"),No="undefined"!=typeof window;const xo=Object.assign;function Oo(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const Ao=()=>{},Do=/\/$/;function Lo(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),l=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),i=e(s)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function Mo(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function Fo(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Uo(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!jo(e[n],t[n]))return!1;return!0}function jo(e,t){return Array.isArray(e)?qo(e,t):Array.isArray(t)?qo(t,e):e===t}function qo(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var Bo,Wo,Vo,zo;function Ho(e){if(!e)if(No){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),e.replace(Do,"")}(Wo=Bo||(Bo={})).pop="pop",Wo.push="push",(zo=Vo||(Vo={})).back="back",zo.forward="forward",zo.unknown="";const $o=/^[^#]+#/;function Go(e,t){return e.replace($o,"#")+t}const Ko=()=>({left:window.pageXOffset,top:window.pageYOffset});function Yo(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),i="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function Jo(e,t){return(history.state?history.state.position-t:-1)+e}const Qo=new Map;function Xo(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),Mo(n,"")}return Mo(n,e)+r+i}function Zo(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?Ko():null}}function ea(e){const{history:t,location:n}=window,r={value:Xo(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:location.protocol+"//"+location.host+e+r;try{t[o?"replaceState":"pushState"](s,"",l),i.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:function(e,n){const o=xo({},i.value,t.state,{forward:e,scroll:Ko()});s(o.current,o,!0),s(e,xo({},Zo(r.value,e,null),{position:o.position+1},n),!1),r.value=e},replace:function(e,n){s(e,xo({},t.state,Zo(i.value.back,e,i.value.forward,!0),n,{position:i.value.position}),!0),r.value=e}}}function ta(e){const t=ea(e=Ho(e)),n=function(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=Xo(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:u,type:Bo.pop,direction:u?u>0?Vo.forward:Vo.back:Vo.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(xo({},e.state,{scroll:Ko()}),"")}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:function(){o=n.value},listen:function(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t},destroy:function(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace);const r=xo({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:Go.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function na(e){return"string"==typeof e||"symbol"==typeof e}const ra={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},ia=Eo("nf");var sa,oa;function aa(e,t){return xo(new Error,{type:e,[ia]:!0},t)}function la(e,t){return e instanceof Error&&ia in e&&(null==t||!!(e.type&t))}(oa=sa||(sa={}))[oa.aborted=4]="aborted",oa[oa.cancelled=8]="cancelled",oa[oa.duplicated=16]="duplicated";const ca={sensitive:!1,strict:!1,start:!0,end:!0},ua=/[.+*?^${}()[\]/\\]/g;function ha(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function da(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const e=ha(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const pa={type:0,value:""},fa=/[a-zA-Z0-9_]/;function ga(e,t,n){const r=function(e,t){const n=xo({},ca,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ua,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:c,regexp:u}=r;s.push({name:e,repeatable:n,optional:c});const h=u||"[^/]+?";if("[^/]+?"!==h){o+=10;try{new RegExp(`(${h})`)}catch(a){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+a.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=c&&l.length<2?`(?:/${d})`:"/"+d),c&&(d+="?"),i+=d,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");return{re:o,score:r,keys:s,parse:function(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n},stringify:function(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(Array.isArray(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=Array.isArray(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n}}}(function(e){if(!e)return[[]];if("/"===e)return[[pa]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}for(;l<e.length;)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:fa.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}(e.path),n),i=xo(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function _a(e,t){const n=[],r=new Map;function i(e,n,r){const a=!r,l=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:ma(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}(e);l.aliasOf=r&&r.record;const c=wa(t,e),u=[l];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(xo({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=ga(t,n,c),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),a&&e.name&&!va(h)&&s(e.name)),"children"in l){const e=l.children;for(let t=0;t<e.length;t++)i(e[t],h,r&&r.children[t])}r=r||h,o(h)}return d?()=>{s(d)}:Ao}function s(e){if(na(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function o(e){let t=0;for(;t<n.length&&da(e,n[t])>=0;)t++;n.splice(t,0,e),e.record.name&&!va(e)&&r.set(e.record.name,e)}return t=wa({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>i(e))),{addRoute:i,resolve:function(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw aa(1,{location:e});o=i.record.name,a=xo(function(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw aa(1,{location:e,currentLocation:t});o=i.record.name,a=xo({},t.params,e.params),s=i.stringify(a)}const l=[];let c=i;for(;c;)l.unshift(c.record),c=c.parent;return{name:o,path:s,params:a,matched:l,meta:ya(l)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function ma(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"==typeof n?n:n[r];return t}function va(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ya(e){return e.reduce(((e,t)=>xo(e,t.meta)),{})}function wa(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ba=/#/g,Ca=/&/g,Ia=/\//g,Ea=/=/g,Ta=/\?/g,ka=/\+/g,Sa=/%5B/g,Pa=/%5D/g,Ra=/%5E/g,Na=/%60/g,xa=/%7B/g,Oa=/%7C/g,Aa=/%7D/g,Da=/%20/g;function La(e){return encodeURI(""+e).replace(Oa,"|").replace(Sa,"[").replace(Pa,"]")}function Ma(e){return La(e).replace(ka,"%2B").replace(Da,"+").replace(ba,"%23").replace(Ca,"%26").replace(Na,"`").replace(xa,"{").replace(Aa,"}").replace(Ra,"^")}function Fa(e){return null==e?"":function(e){return La(e).replace(ba,"%23").replace(Ta,"%3F")}(e).replace(Ia,"%2F")}function Ua(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function ja(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let r=0;r<n.length;++r){const e=n[r].replace(ka," "),i=e.indexOf("="),s=Ua(i<0?e:e.slice(0,i)),o=i<0?null:Ua(e.slice(i+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function qa(e){let t="";for(let n in e){const r=e[n];if(n=Ma(n).replace(Ea,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(Array.isArray(r)?r.map((e=>e&&Ma(e))):[r&&Ma(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ba(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function Wa(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e,reset:function(){e=[]}}}function Va(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const l=e=>{var l;!1===e?a(aa(4,{from:n,to:t})):e instanceof Error?a(e):"string"==typeof(l=e)||l&&"object"==typeof l?a(aa(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"==typeof e&&s.push(e),o())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function za(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let a=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if("object"==typeof(s=a)||"displayName"in s||"props"in s||"__vccOpts"in s){const s=(a.__vccOpts||a)[t];s&&i.push(Va(s,n,r,o,e))}else{let s=a();i.push((()=>s.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=(a=i).__esModule||Io&&"Module"===a[Symbol.toStringTag]?i.default:i;var a;o.components[e]=s;const l=(s.__vccOpts||s)[t];return l&&Va(l,n,r,o,e)()}))))}}var s;return i}function Ha(e){const t=Lt(So),n=Lt(Po),r=wt((()=>t.resolve(_t(e.to)))),i=wt((()=>{const{matched:e}=r.value,{length:t}=e,i=e[t-1],s=n.matched;if(!i||!s.length)return-1;const o=s.findIndex(Fo.bind(null,i));if(o>-1)return o;const a=Ga(e[t-2]);return t>1&&Ga(i)===a&&s[s.length-1].path!==a?s.findIndex(Fo.bind(null,e[t-2])):o})),s=wt((()=>i.value>-1&&function(e,t){for(const n in t){const r=t[n],i=e[n];if("string"==typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}(n.params,r.value.params))),o=wt((()=>i.value>-1&&i.value===n.matched.length-1&&Uo(n.params,r.value.params)));return{route:r,href:wt((()=>r.value.href)),isActive:s,isExactActive:o,navigate:function(n={}){return function(e){if(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;if(void 0!==e.button&&0!==e.button)return;if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}e.preventDefault&&e.preventDefault();return!0}(n)?t[_t(e.replace)?"replace":"push"](_t(e.to)).catch(Ao):Promise.resolve()}}}const $a=Mt({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ha,setup(e,{slots:t}){const n=tt(Ha(e)),{options:r}=Lt(So),i=wt((()=>({[Ka(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ka(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const r=t.default&&t.default(n);return e.custom?r:ri("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}});function Ga(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ka=(e,t,n)=>null!=e?e:null!=t?t:n;function Ya(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ja=Mt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const r=Lt(Ro),i=wt((()=>e.route||r.value)),s=Lt(ko,0),o=wt((()=>i.value.matched[s]));Dt(ko,s+1),Dt(To,o),Dt(Ro,i);const a=pt();return Xr((()=>[a.value,o.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&Fo(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const r=i.value,s=o.value,l=s&&s.components[e.name],c=e.name;if(!l)return Ya(n.default,{Component:l,route:r});const u=s.props[e.name],h=u?!0===u?r.params:"function"==typeof u?u(r):u:null,d=ri(l,xo({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(s.instances[c]=null)},ref:a}));return Ya(n.default,{Component:d,route:r})||d}}});function Qa(e){const t=_a(e.routes,e),n=e.parseQuery||ja,r=e.stringifyQuery||qa,i=e.history,s=Wa(),o=Wa(),a=Wa(),l=gt(ra,!0);let c=ra;No&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Oo.bind(null,(e=>""+e)),h=Oo.bind(null,Fa),d=Oo.bind(null,Ua);function p(e,s){if(s=xo({},s||l.value),"string"==typeof e){const r=Lo(n,e,s.path),o=t.resolve({path:r.path},s),a=i.createHref(r.fullPath);return xo(r,o,{params:d(o.params),hash:Ua(r.hash),redirectedFrom:void 0,href:a})}let o;if("path"in e)o=xo({},e,{path:Lo(n,e.path,s.path).path});else{const t=xo({},e.params);for(const e in t)null==t[e]&&delete t[e];o=xo({},e,{params:h(e.params)}),s.params=h(s.params)}const a=t.resolve(o,s),c=e.hash||"";a.params=u(d(a.params));const p=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(r,xo({},e,{hash:(f=c,La(f).replace(xa,"{").replace(Aa,"}").replace(Ra,"^")),path:a.path}));var f;const g=i.createHref(p);return xo({fullPath:p,hash:c,query:r===qa?Ba(e.query):e.query||{}},a,{redirectedFrom:void 0,href:g})}function f(e){return"string"==typeof e?Lo(n,e,l.value.path):xo({},e)}function g(e,t){if(c!==e)return aa(8,{from:t,to:e})}function _(e){return v(e)}function m(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=f(r):{path:r},r.params={}),xo({query:e.query,hash:e.hash,params:e.params},r)}}function v(e,t){const n=c=p(e),i=l.value,s=e.state,o=e.force,a=!0===e.replace,u=m(n);if(u)return v(xo(f(u),{state:s,force:o,replace:a}),t||n);const h=n;let d;return h.redirectedFrom=t,!o&&function(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Fo(t.matched[r],n.matched[i])&&Uo(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(r,i,n)&&(d=aa(16,{to:h,from:i}),N(i,i,!0,!1)),(d?Promise.resolve(d):w(h,i)).catch((e=>la(e)?e:P(e,h,i))).then((e=>{if(e){if(la(e,2))return v(xo(f(e.to),{state:s,force:o,replace:a}),t||h)}else e=C(h,i,!0,a,s);return b(h,i,e),e}))}function y(e,t){const n=g(e,t);return n?Promise.reject(n):Promise.resolve()}function w(e,t){let n;const[r,i,a]=function(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>Fo(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>Fo(e,a)))||i.push(a))}return[n,r,i]}(e,t);n=za(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach((r=>{n.push(Va(r,e,t))}));const l=y.bind(null,e,t);return n.push(l),Xa(n).then((()=>{n=[];for(const r of s.list())n.push(Va(r,e,t));return n.push(l),Xa(n)})).then((()=>{n=za(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Va(r,e,t))}));return n.push(l),Xa(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Va(i,e,t));else n.push(Va(r.beforeEnter,e,t));return n.push(l),Xa(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=za(a,"beforeRouteEnter",e,t),n.push(l),Xa(n)))).then((()=>{n=[];for(const r of o.list())n.push(Va(r,e,t));return n.push(l),Xa(n)})).catch((e=>la(e,8)?e:Promise.reject(e)))}function b(e,t,n){for(const r of a.list())r(e,t,n)}function C(e,t,n,r,s){const o=g(e,t);if(o)return o;const a=t===ra,c=No?history.state:{};n&&(r||a?i.replace(e.fullPath,xo({scroll:a&&c&&c.scroll},s)):i.push(e.fullPath,s)),l.value=e,N(e,t,n,a),R()}let I;function E(){I=i.listen(((e,t,n)=>{const r=p(e),s=m(r);if(s)return void v(xo(s,{replace:!0}),r).catch(Ao);c=r;const o=l.value;var a,u;No&&(a=Jo(o.fullPath,n.delta),u=Ko(),Qo.set(a,u)),w(r,o).catch((e=>la(e,12)?e:la(e,2)?(v(e.to,r).then((e=>{la(e,20)&&!n.delta&&n.type===Bo.pop&&i.go(-1,!1)})).catch(Ao),Promise.reject()):(n.delta&&i.go(-n.delta,!1),P(e,r,o)))).then((e=>{(e=e||C(r,o,!1))&&(n.delta?i.go(-n.delta,!1):n.type===Bo.pop&&la(e,20)&&i.go(-1,!1)),b(r,o,e)})).catch(Ao)}))}let T,k=Wa(),S=Wa();function P(e,t,n){R(e);const r=S.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function R(e){T||(T=!0,E(),k.list().forEach((([t,n])=>e?n(e):t())),k.reset())}function N(t,n,r,i){const{scrollBehavior:s}=e;if(!No||!s)return Promise.resolve();const o=!r&&function(e){const t=Qo.get(e);return Qo.delete(e),t}(Jo(t.fullPath,0))||(i||!r)&&history.state&&history.state.scroll||null;return Vr().then((()=>s(t,n,o))).then((e=>e&&Yo(e))).catch((e=>P(e,t,n)))}const x=e=>i.go(e);let O;const A=new Set;return{currentRoute:l,addRoute:function(e,n){let r,i;return na(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)},removeRoute:function(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)},hasRoute:function(e){return!!t.getRecordMatcher(e)},getRoutes:function(){return t.getRoutes().map((e=>e.record))},resolve:p,options:e,push:_,replace:function(e){return _(xo(f(e),{replace:!0}))},go:x,back:()=>x(-1),forward:()=>x(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:S.add,isReady:function(){return T&&l.value!==ra?Promise.resolve():new Promise(((e,t)=>{k.add([e,t])}))},install(e){e.component("RouterLink",$a),e.component("RouterView",Ja),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>_t(l)}),No&&!O&&l.value===ra&&(O=!0,_(i.location).catch((e=>{})));const t={};for(const r in ra)t[r]=wt((()=>l.value[r]));e.provide(So,this),e.provide(Po,tt(t)),e.provide(Ro,l);const n=e.unmount;A.add(e),e.unmount=function(){A.delete(e),A.size<1&&(c=ra,I&&I(),l.value=ra,O=!1,T=!1),n()}}}}function Xa(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}
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
let Za="";
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
class el{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ls(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Ds(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
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
 */class tl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Fs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
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
 */const nl=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new el(t)}}catch(t){}return new tl},rl=nl("localStorage"),il=nl("sessionStorage"),sl=new ao("@firebase/database"),ol=function(){let e=1;return function(){return e++}}(),al=function(e){const t=function(e){for(var t=[],n=0,r=0;r<e.length;r++){var i=e.charCodeAt(r);if(i>=55296&&i<=56319){var s=i-55296;r++,vs(r<e.length,"Surrogate pair missing trail surrogate."),i=65536+(s<<10)+(e.charCodeAt(r)-56320)}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t}(e),n=new zs;n.update(t);const r=n.digest();return bs.encodeByteArray(r)},ll=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&"object"==typeof r&&"number"==typeof r.length?t+=ll.apply(null,r):t+="object"==typeof r?Ls(r):r,t+=" "}return t};let cl=null,ul=!0;const hl=function(...e){var t,n;if(!0===ul&&(ul=!1,null===cl&&!0===il.get("logging_enabled")&&(t=!0,vs(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(sl.logLevel=Zs.VERBOSE,cl=sl.log.bind(sl),n&&il.set("logging_enabled",!0)):"function"==typeof t?cl=t:(cl=null,il.remove("logging_enabled")))),cl){const t=ll.apply(null,e);cl(t)}},dl=function(e){return function(...t){hl(e,...t)}},pl=function(...e){const t="FIREBASE INTERNAL ERROR: "+ll(...e);sl.error(t)},fl=function(...e){const t=`FIREBASE FATAL ERROR: ${ll(...e)}`;throw sl.error(t),new Error(t)},gl=function(...e){const t="FIREBASE WARNING: "+ll(...e);sl.warn(t)},_l=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},ml="[MIN_NAME]",vl="[MAX_NAME]",yl=function(e,t){if(e===t)return 0;if(e===ml||t===vl)return-1;if(t===ml||e===vl)return 1;{const n=Sl(e),r=Sl(t);return null!==n?null!==r?n-r==0?e.length-t.length:n-r:-1:null!==r?1:e<t?-1:1}},wl=function(e,t){return e===t?0:e<t?-1:1},bl=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ls(t))},Cl=function(e){if("object"!=typeof e||null===e)return Ls(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)0!==r&&(n+=","),n+=Ls(t[r]),n+=":",n+=Cl(e[t[r]]);return n+="}",n},Il=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function El(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Tl=function(e){vs(!_l(e),"Invalid JSON number");const t=1023;let n,r,i,s,o;0===e?(r=0,i=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(s=Math.min(Math.floor(Math.log(e)/Math.LN2),t),r=s+t,i=Math.round(e*Math.pow(2,52-s)-Math.pow(2,52))):(r=0,i=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);for(o=11;o;o-=1)a.push(r%2?1:0),r=Math.floor(r/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const kl=new RegExp("^-?(0*)\\d{1,10}$"),Sl=function(e){if(kl.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Pl=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw gl("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Rl=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
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
class Nl{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){gl(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
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
 */class xl{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(hl("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gl(e)}}class Ol{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ol.OWNER="owner";
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
const Al=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/;
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
class Dl{constructor(e,t,n,r,i=!1,s="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=rl.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&rl.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ll(e,t,n){let r;if(vs("string"==typeof t,"typeof type must == string"),vs("object"==typeof n,"typeof params must == object"),"websocket"===t)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if("long_polling"!==t)throw new Error("Unknown connection type: "+t);r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const i=[];return El(n,((e,t)=>{i.push(e+"="+t)})),r+i.join("&")}
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
 */class Ml{constructor(){this.counters_={}}incrementCounter(e,t=1){Fs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Is(this.counters_)}}
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
 */const Fl={},Ul={};function jl(e){const t=e.toString();return Fl[t]||(Fl[t]=new Ml),Fl[t]}
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
class ql{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Pl((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
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
 */class Bl{constructor(e,t,n,r,i,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=dl(e),this.stats_=jl(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),Ll(t,"long_polling",e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ql(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wl(((...e)=>{const[t,n,r,i,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,"start"===t)this.id=n,this.password=r;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Al.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Bl.forceAllow_=!0}static forceDisallow(){Bl.forceDisallow_=!0}static isAvailable(){return!!Bl.forceAllow_||!(Bl.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ls(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(r=ws(t),bs.encodeByteArray(r,!0));var r;const i=Il(n,1840);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ls(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Wl{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ol(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=Wl.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const r="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(r),this.myIFrame.doc.close()}catch(i){hl("frame writing exception"),i.stack&&hl(i.stack),hl(i)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||hl("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+r+"="+e.seg+"&ts"+r+"="+e.ts+"&d"+r+"="+e.d,r++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(r),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{hl("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
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
 */let Vl=null;"undefined"!=typeof MozWebSocket?Vl=MozWebSocket:"undefined"!=typeof WebSocket&&(Vl=WebSocket);class zl{constructor(e,t,n,r,i,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=dl(this.connId),this.stats_=jl(t),this.connURL=zl.connectionURL_(t,s,o,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r){const i={v:"5"};return"undefined"!=typeof location&&location.hostname&&Al.test(location.hostname)&&(i.r="f"),t&&(i.s=t),n&&(i.ls=n),r&&(i.ac=r),Ll(e,"websocket",i)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,rl.set("previous_websocket_failure",!0);try{if(Rs());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new Vl(this.connURL,[],e)}}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){zl.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Vl&&!zl.forceDisallow_}static previouslyFailed(){return rl.isInMemoryStorage||!0===rl.get("previous_websocket_failure")}markConnectionHealthy(){rl.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Ds(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(vs(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Ls(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Il(t,16384);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}zl.responsesRequiredToBeHealthy=2,zl.healthyTimeout=3e4;
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
class Hl{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Bl,zl]}initTransports_(e){const t=zl&&zl.isAvailable();let n=t&&!zl.previouslyFailed();if(e.webSocketOnly&&(t||gl("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[zl];else{const e=this.transports_=[];for(const t of Hl.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
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
 */class $l{constructor(e,t,n,r,i,s,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=dl("c:"+this.id+":"),this.transportManager_=new Hl(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Rl((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=bl("t",e),n=bl("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=bl("t",e),n=bl("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=bl("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?pl("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pl("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&gl("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Rl((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Rl((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(rl.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
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
 */class Gl{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
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
 */class Kl{constructor(e){this.allowedEvents_=e,this.listeners_={},vs(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context))return void r.splice(i,1)}validateEventType_(e){vs(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
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
 */class Yl extends Kl{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||Ss()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new Yl}getInitialEvent(e){return vs("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
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
 */class Jl{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ql(){return new Jl("")}function Xl(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Zl(e){return e.pieces_.length-e.pieceNum_}function ec(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Jl(e.pieces_,t)}function tc(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function nc(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function rc(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Jl(t,0)}function ic(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Jl)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new Jl(n,0)}function sc(e){return e.pieceNum_>=e.pieces_.length}function oc(e,t){const n=Xl(e),r=Xl(t);if(null===n)return t;if(n===r)return oc(ec(e),ec(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ac(e,t){const n=nc(e,0),r=nc(t,0);for(let i=0;i<n.length&&i<r.length;i++){const e=yl(n[i],r[i]);if(0!==e)return e}return n.length===r.length?0:n.length<r.length?-1:1}function lc(e,t){if(Zl(e)!==Zl(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function cc(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Zl(e)>Zl(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class uc{constructor(e,t){this.errorPrefix_=t,this.parts_=nc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Ks(this.parts_[n]);hc(this)}}function hc(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+dc(e))}function dc(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
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
 */class pc extends Kl{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new pc}getInitialEvent(e){return vs("visible"===e,"Unknown event type: "+e),[this.visible_]}}
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
 */class fc extends Gl{constructor(e,t,n,r,i,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=fc.nextPersistentConnectionId_++,this.log_=dl("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!Rs())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");pc.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&Yl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r:r,a:e,b:t};this.log_(Ls(i)),vs(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new Ts,n={p:e._path.toString(),q:e._queryObject},r={action:"g",request:n,onComplete:e=>{const r=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,r,!1,null),t.resolve(r)):t.reject(r)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[i];void 0!==e&&r===e&&(delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+i+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+i),this.listens.has(s)||this.listens.set(s,new Map),vs(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),vs(!this.listens.get(s).has(i),"listen() called twice for same path/queryId.");const o={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(s).set(i,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n};e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest("q",i,(i=>{const s=i.d,o=i.s;fc.warnOnListenWarnings_(s,t);(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",i),"ok"!==o&&this.removeListen_(n,r),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Fs(e,"w")){const n=Us(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();gl(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){var t;(e&&40===e.length||"object"==typeof(t=Ms(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){var t=Ms(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,r=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,r))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),vs(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e};r&&(i.q=n,i.t=r),this.sendRequest("n",i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,(e=>{r&&setTimeout((()=>{r(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const s={p:t,d:n};void 0!==i&&(s.h=i),this.outstandingPuts_.push({action:e,request:s,onComplete:r}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),r&&r(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ls(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):pl("Unrecognized action received from server: "+Ls(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){vs(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+fc.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(e){vs(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[e,l]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?hl("getToken() completed but was canceled"):(hl("getToken() completed. Creating connection."),this.authToken_=e&&e.accessToken,this.appCheckToken_=l&&l.token,a=new $l(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,(e=>{gl(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),o||(this.repoInfo_.nodeAdmin&&gl(e),l())}}}interrupt(e){hl("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){hl("Resuming connection for reason: "+e),delete this.interruptReasons_[e],js(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Cl(e))).join("$"):"default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Jl(e).toString();let r;if(this.listens.has(n)){const e=this.listens.get(n);r=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){hl("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){hl("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+Za.replace(/\./g,"-")]=1,Ss()?e["framework.cordova"]=1:Ps()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Yl.getInstance().currentlyOnline();return js(this.interruptReasons_)&&e}}fc.nextPersistentConnectionId_=0,fc.nextConnectionId_=0;
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
class gc{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new gc(e,t)}}
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
 */class _c{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new gc(ml,e),r=new gc(ml,t);return 0!==this.compare(n,r)}minPost(){return gc.MIN}}
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
 */let mc;class vc extends _c{static get __EMPTY_NODE(){return mc}static set __EMPTY_NODE(e){mc=e}compare(e,t){return yl(e.name,t.name)}isDefinedOn(e){throw ys("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return gc.MIN}maxPost(){return new gc(vl,mc)}makePost(e,t){return vs("string"==typeof e,"KeyIndex indexValue must always be a string."),new gc(e,mc)}toString(){return".key"}}const yc=new vc;
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
 */class wc{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let s=1;for(;!e.isEmpty();)if(e=e,s=t?n(e.key,t):1,r&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class bc{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:bc.RED,this.left=null!=r?r:Cc.EMPTY_NODE,this.right=null!=i?i:Cc.EMPTY_NODE}copy(e,t,n,r,i){return new bc(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Cc.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Cc.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,bc.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,bc.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}bc.RED=!0,bc.BLACK=!1;class Cc{constructor(e,t=Cc.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Cc(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,bc.BLACK,null,null))}remove(e){return new Cc(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,bc.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(r=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wc(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new wc(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new wc(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new wc(this.root_,null,this.comparator_,!0,e)}}
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
function Ic(e,t){return yl(e.name,t.name)}function Ec(e,t){return yl(e,t)}
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
 */let Tc;Cc.EMPTY_NODE=new class{copy(e,t,n,r,i){return this}insert(e,t,n){return new bc(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const kc=function(e){return"number"==typeof e?"number:"+Tl(e):"string:"+e},Sc=function(e){if(e.isLeafNode()){const t=e.val();vs("string"==typeof t||"number"==typeof t||"object"==typeof t&&Fs(t,".sv"),"Priority must be a string or number.")}else vs(e===Tc||e.isEmpty(),"priority of unexpected type.");vs(e===Tc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
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
let Pc,Rc,Nc;class xc{constructor(e,t=xc.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,vs(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Sc(this.priorityNode_)}static set __childrenNodeConstructor(e){Pc=e}static get __childrenNodeConstructor(){return Pc}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new xc(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:xc.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return sc(e)?this:".priority"===Xl(e)?this.priorityNode_:xc.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:xc.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Xl(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(vs(".priority"!==n||1===Zl(e),".priority must be the last token in a path"),this.updateImmediateChild(n,xc.__childrenNodeConstructor.EMPTY_NODE.updateChild(ec(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kc(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Tl(this.value_):this.value_,this.lazyHash_=al(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===xc.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof xc.__childrenNodeConstructor?-1:(vs(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=xc.VALUE_TYPE_ORDER.indexOf(t),i=xc.VALUE_TYPE_ORDER.indexOf(n);return vs(r>=0,"Unknown leaf type: "+t),vs(i>=0,"Unknown leaf type: "+n),r===i?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}xc.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Oc=new class extends _c{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return 0===i?yl(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return gc.MIN}maxPost(){return new gc(vl,new xc("[PRIORITY-POST]",Nc))}makePost(e,t){const n=Rc(e);return new gc(t,new xc("[PRIORITY-POST]",n))}toString(){return".priority"}},Ac=Math.log(2);
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
 */class Dc{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/Ac,10)),this.current_=this.count-1;const n=(r=this.count,parseInt(Array(r+1).join("1"),2));var r;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Lc=function(e,t,n,r){e.sort(t);const i=function(t,r){const s=r-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new bc(a,o.node,bc.BLACK,null,null);{const l=parseInt(s/2,10)+t,c=i(t,l),u=i(l+1,r);return o=e[l],a=n?n(o):o,new bc(a,o.node,bc.BLACK,c,u)}},s=function(t){let r=null,s=null,o=e.length;const a=function(t,r){const s=o-t,a=o;o-=t;const c=i(s+1,a),u=e[s],h=n?n(u):u;l(new bc(h,u.node,r,null,c))},l=function(e){r?(r.left=e,r=e):(s=e,r=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),r=Math.pow(2,t.count-(e+1));n?a(r,bc.BLACK):(a(r,bc.BLACK),a(r,bc.RED))}return s}(new Dc(e.length));return new Cc(r||t,s)};
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
 */let Mc;const Fc={};class Uc{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return vs(Fc&&Oc,"ChildrenNode.ts has not been loaded"),Mc=Mc||new Uc({".priority":Fc},{".priority":Oc}),Mc}get(e){const t=Us(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Cc?t:null}hasIndex(e){return Fs(this.indexSet_,e.toString())}addIndex(e,t){vs(e!==yc,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(gc.Wrap);let s,o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();s=r?Lc(n,e.getCompare()):Fc;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=s,new Uc(c,l)}addToIndexes(e,t){const n=qs(this.indexes_,((n,r)=>{const i=Us(this.indexSet_,r);if(vs(i,"Missing index implementation for "+r),n===Fc){if(i.isDefinedOn(e.node)){const n=[],r=t.getIterator(gc.Wrap);let s=r.getNext();for(;s;)s.name!==e.name&&n.push(s),s=r.getNext();return n.push(e),Lc(n,i.getCompare())}return Fc}{const r=t.get(e.name);let i=n;return r&&(i=i.remove(new gc(e.name,r))),i.insert(e,e.node)}}));return new Uc(n,this.indexSet_)}removeFromIndexes(e,t){const n=qs(this.indexes_,(n=>{if(n===Fc)return n;{const r=t.get(e.name);return r?n.remove(new gc(e.name,r)):n}}));return new Uc(n,this.indexSet_)}}
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
 */let jc;class qc{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Sc(this.priorityNode_),this.children_.isEmpty()&&vs(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return jc||(jc=new qc(new Cc(Ec),null,Uc.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||jc}updatePriority(e){return this.children_.isEmpty()?this:new qc(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?jc:t}}getChild(e){const t=Xl(e);return null===t?this:this.getImmediateChild(t).getChild(ec(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(vs(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new gc(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const s=r.isEmpty()?jc:this.priorityNode_;return new qc(r,s,i)}}updateChild(e,t){const n=Xl(e);if(null===n)return t;{vs(".priority"!==Xl(e)||1===Zl(e),".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(ec(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Oc,((s,o)=>{t[s]=o.val(e),n++,i&&qc.INTEGER_REGEXP_.test(s)?r=Math.max(r,Number(s)):i=!1})),!e&&i&&r<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+kc(this.getPriority().val())+":"),this.forEachChild(Oc,((t,n)=>{const r=n.hash();""!==r&&(e+=":"+t+":"+r)})),this.lazyHash_=""===e?"":al(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const n=r.getPredecessorKey(new gc(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new gc(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new gc(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,gc.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)<0;)n.getNext(),r=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,gc.Wrap);let r=n.peek();for(;null!=r&&t.compare(r,e)>0;)n.getNext(),r=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Bc?-1:0}withIndex(e){if(e===yc||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new qc(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===yc||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Oc),n=t.getIterator(Oc);let r=e.getNext(),i=n.getNext();for(;r&&i;){if(r.name!==i.name||!r.node.equals(i.node))return!1;r=e.getNext(),i=n.getNext()}return null===r&&null===i}return!1}return!1}}resolveIndex_(e){return e===yc?null:this.indexMap_.get(e.toString())}}qc.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const Bc=new class extends qc{constructor(){super(new Cc(Ec),qc.EMPTY_NODE,Uc.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return qc.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(gc,{MIN:{value:new gc(ml,qc.EMPTY_NODE)},MAX:{value:new gc(vl,Bc)}}),vc.__EMPTY_NODE=qc.EMPTY_NODE,xc.__childrenNodeConstructor=qc,Tc=Bc,function(e){Nc=e}(Bc);function Wc(e,t=null){if(null===e)return qc.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),vs(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new xc(e,Wc(t))}if(e instanceof Array){let n=qc.EMPTY_NODE;return El(e,((t,r)=>{if(Fs(e,t)&&"."!==t.substring(0,1)){const e=Wc(r);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(Wc(t))}{const n=[];let r=!1;if(El(e,((e,t)=>{if("."!==e.substring(0,1)){const i=Wc(t);i.isEmpty()||(r=r||!i.getPriority().isEmpty(),n.push(new gc(e,i)))}})),0===n.length)return qc.EMPTY_NODE;const i=Lc(n,Ic,(e=>e.name),Ec);if(r){const e=Lc(n,Oc.getCompare());return new qc(i,Wc(t),new Uc({".priority":e},{".priority":Oc}))}return new qc(i,Wc(t),Uc.Default)}}!function(e){Rc=e}(Wc);
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
class Vc extends _c{constructor(e){super(),this.indexPath_=e,vs(!sc(e)&&".priority"!==Xl(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return 0===i?yl(e.name,t.name):i}makePost(e,t){const n=Wc(e),r=qc.EMPTY_NODE.updateChild(this.indexPath_,n);return new gc(t,r)}maxPost(){const e=qc.EMPTY_NODE.updateChild(this.indexPath_,Bc);return new gc(vl,e)}toString(){return nc(this.indexPath_,0).join("/")}}
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
 */const zc=new class extends _c{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?yl(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return gc.MIN}maxPost(){return gc.MAX}makePost(e,t){const n=Wc(e);return new gc(t,n)}toString(){return".value"}},Hc="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",$c=function(){let e=0;const t=[];return function(n){const r=n===e;let i;e=n;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Hc.charAt(n%64),n=Math.floor(n/64);vs(0===n,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&63===t[i];i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(64*Math.random());for(i=0;i<12;i++)o+=Hc.charAt(t[i]);return vs(20===o.length,"nextPushId: Length should be 20."),o}}();
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
function Gc(e){return{type:"value",snapshotNode:e}}function Kc(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Yc(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Jc(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
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
class Qc{constructor(e){this.index_=e}updateChild(e,t,n,r,i,s){vs(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(r).equals(n.getChild(r))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Yc(t,o)):vs(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Kc(t,n)):s.trackChildChange(Jc(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Oc,((e,r)=>{t.hasChild(e)||n.trackChildChange(Yc(e,r))})),t.isLeafNode()||t.forEachChild(Oc,((t,r)=>{if(e.hasChild(t)){const i=e.getImmediateChild(t);i.equals(r)||n.trackChildChange(Jc(t,r,i))}else n.trackChildChange(Kc(t,r))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?qc.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
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
 */class Xc{constructor(e){this.indexedFilter_=new Qc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Xc.getStartPost_(e),this.endPost_=Xc.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,r,i,s){return this.matches(new gc(t,n))||(n=qc.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=qc.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(qc.EMPTY_NODE);const i=this;return t.forEachChild(Oc,((e,t)=>{i.matches(new gc(e,t))||(r=r.updateImmediateChild(e,qc.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
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
 */class Zc{constructor(e){this.rangedFilter_=new Xc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,r,i,s){return this.rangedFilter_.matches(new gc(t,n))||(n=qc.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,s):this.fullLimitUpdateChild_(e,t,n,i,s)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=qc.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;r=qc.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let i;if(i=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!i)break;r=r.updateImmediateChild(t.name,t.node),n++}}else{let e,n,i,s;if(r=t.withIndex(this.index_),r=r.updatePriority(qc.EMPTY_NODE),this.reverse_){s=r.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();i=(e,n)=>t(n,e)}else s=r.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),i=this.index_.getCompare();let o=0,a=!1;for(;s.hasNext();){const t=s.getNext();!a&&i(e,t)<=0&&(a=!0);a&&o<this.limit_&&i(t,n)<=0?o++:r=r.updateImmediateChild(t.name,qc.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;vs(o.numChildren()===this.limit_,"");const a=new gc(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let u=r.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=u&&(u.name===t||o.hasChild(u.name));)u=r.getChildAfterChild(this.index_,u,this.reverse_);const h=null==u?1:s(u,a);if(c&&!n.isEmpty()&&h>=0)return null!=i&&i.trackChildChange(Jc(t,n,e)),o.updateImmediateChild(t,n);{null!=i&&i.trackChildChange(Yc(t,e));const n=o.updateImmediateChild(t,qc.EMPTY_NODE);return null!=u&&this.rangedFilter_.matches(u)?(null!=i&&i.trackChildChange(Kc(u.name,u.node)),n.updateImmediateChild(u.name,u.node)):n}}return n.isEmpty()?e:c&&s(l,a)>=0?(null!=i&&(i.trackChildChange(Yc(l.name,l.node)),i.trackChildChange(Kc(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,qc.EMPTY_NODE)):e}}
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
 */class eu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oc}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return vs(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return vs(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ml}hasEnd(){return this.endSet_}getIndexEndValue(){return vs(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return vs(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vl}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return vs(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oc}copy(){const e=new eu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function tu(e){const t={};if(e.isDefault())return t;let n;return e.index_===Oc?n="$priority":e.index_===zc?n="$value":e.index_===yc?n="$key":(vs(e.index_ instanceof Vc,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ls(n),e.startSet_&&(t.startAt=Ls(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+Ls(e.indexStartName_))),e.endSet_&&(t.endAt=Ls(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+Ls(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function nu(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Oc&&(t.i=e.index_.toString()),t}
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
 */class ru extends Gl{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=dl("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(vs(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const s=ru.getListenId_(e,n),o={};this.listens_[s]=o;const a=tu(e._queryParams);this.restRequest_(i+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(i,a,!1,n),Us(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",r(t,null)}}))}unlisten(e,t){const n=ru.getListenId_(e,t);delete this.listens_[n]}get(e){const t=tu(e._queryParams),n=e._path.toString(),r=new Ts;return this.restRequest_(n+".json",t,((e,t)=>{let i=t;404===e&&(i=null,e=null),null===e?(this.onDataUpdate_(n,i,!1,null),r.resolve(i)):r.reject(new Error(i))})),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vs(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=Ds(o.responseText)}catch(e){gl("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&gl("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
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
 */class iu{constructor(){this.rootNode_=qc.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
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
 */function su(){return{value:null,children:new Map}}function ou(e,t,n){if(sc(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const r=Xl(t);e.children.has(r)||e.children.set(r,su());ou(e.children.get(r),t=ec(t),n)}}function au(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
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
 */(e,((e,r)=>{au(r,new Jl(t.toString()+"/"+e),n)}))}class lu{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&El(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
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
 */class cu{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new lu(e);const n=1e4+2e4*Math.random();Rl(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;El(e,((e,r)=>{r>0&&Fs(this.statsToReport_,e)&&(t[e]=r,n=!0)})),n&&this.server_.reportStats(t),Rl(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
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
 */var uu,hu;function du(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
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
 */(hu=uu||(uu={}))[hu.OVERWRITE=0]="OVERWRITE",hu[hu.MERGE=1]="MERGE",hu[hu.ACK_USER_WRITE=2]="ACK_USER_WRITE",hu[hu.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class pu{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=uu.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(sc(this.path)){if(null!=this.affectedTree.value)return vs(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Jl(e));return new pu(Ql(),t,this.revert)}}return vs(Xl(this.path)===e,"operationForChild called for unrelated child."),new pu(ec(this.path),this.affectedTree,this.revert)}}
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
 */class fu{constructor(e,t){this.source=e,this.path=t,this.type=uu.LISTEN_COMPLETE}operationForChild(e){return sc(this.path)?new fu(this.source,Ql()):new fu(this.source,ec(this.path))}}
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
 */class gu{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=uu.OVERWRITE}operationForChild(e){return sc(this.path)?new gu(this.source,Ql(),this.snap.getImmediateChild(e)):new gu(this.source,ec(this.path),this.snap)}}
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
 */class _u{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=uu.MERGE}operationForChild(e){if(sc(this.path)){const t=this.children.subtree(new Jl(e));return t.isEmpty()?null:t.value?new gu(this.source,Ql(),t.value):new _u(this.source,Ql(),t)}return vs(Xl(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _u(this.source,ec(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
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
 */class mu{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(sc(e))return this.isFullyInitialized()&&!this.filtered_;const t=Xl(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
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
 */class vu{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yu(e,t,n,r,i,s){const o=r.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw ys("Should only compare child_ events.");const r=new gc(t.childName,t.snapshotNode),i=new gc(n.childName,n.snapshotNode);return e.index_.compare(r,i)}
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
 */(e,t,n))),o.forEach((n=>{const r=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,s);i.forEach((i=>{i.respondsTo(n.type)&&t.push(i.createEvent(r,e.query_))}))}))}function wu(e,t){return{eventCache:e,serverCache:t}}function bu(e,t,n,r){return wu(new mu(t,n,r),e.serverCache)}function Cu(e,t,n,r){return wu(e.eventCache,new mu(t,n,r))}function Iu(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Eu(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
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
 */let Tu;class ku{constructor(e,t=(()=>(Tu||(Tu=new Cc(wl)),Tu))()){this.value=e,this.children=t}static fromObject(e){let t=new ku(null);return El(e,((e,n)=>{t=t.set(new Jl(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Ql(),value:this.value};if(sc(e))return null;{const n=Xl(e),r=this.children.get(n);if(null!==r){const i=r.findRootMostMatchingPathAndValue(ec(e),t);if(null!=i){return{path:ic(new Jl(n),i.path),value:i.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(sc(e))return this;{const t=Xl(e),n=this.children.get(t);return null!==n?n.subtree(ec(e)):new ku(null)}}set(e,t){if(sc(e))return new ku(t,this.children);{const n=Xl(e),r=(this.children.get(n)||new ku(null)).set(ec(e),t),i=this.children.insert(n,r);return new ku(this.value,i)}}remove(e){if(sc(e))return this.children.isEmpty()?new ku(null):new ku(null,this.children);{const t=Xl(e),n=this.children.get(t);if(n){const r=n.remove(ec(e));let i;return i=r.isEmpty()?this.children.remove(t):this.children.insert(t,r),null===this.value&&i.isEmpty()?new ku(null):new ku(this.value,i)}return this}}get(e){if(sc(e))return this.value;{const t=Xl(e),n=this.children.get(t);return n?n.get(ec(e)):null}}setTree(e,t){if(sc(e))return t;{const n=Xl(e),r=(this.children.get(n)||new ku(null)).setTree(ec(e),t);let i;return i=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new ku(this.value,i)}}fold(e){return this.fold_(Ql(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((r,i)=>{n[r]=i.fold_(ic(e,r),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Ql(),t)}findOnPath_(e,t,n){const r=!!this.value&&n(t,this.value);if(r)return r;if(sc(e))return null;{const r=Xl(e),i=this.children.get(r);return i?i.findOnPath_(ec(e),ic(t,r),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ql(),t)}foreachOnPath_(e,t,n){if(sc(e))return this;{this.value&&n(t,this.value);const r=Xl(e),i=this.children.get(r);return i?i.foreachOnPath_(ec(e),ic(t,r),n):new ku(null)}}foreach(e){this.foreach_(Ql(),e)}foreach_(e,t){this.children.inorderTraversal(((n,r)=>{r.foreach_(ic(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
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
 */class Su{constructor(e){this.writeTree_=e}static empty(){return new Su(new ku(null))}}function Pu(e,t,n){if(sc(t))return new Su(new ku(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(null!=r){const i=r.path;let s=r.value;const o=oc(i,t);return s=s.updateChild(o,n),new Su(e.writeTree_.set(i,s))}{const r=new ku(n),i=e.writeTree_.setTree(t,r);return new Su(i)}}}function Ru(e,t,n){let r=e;return El(n,((e,n)=>{r=Pu(r,ic(t,e),n)})),r}function Nu(e,t){if(sc(t))return Su.empty();{const n=e.writeTree_.setTree(t,new ku(null));return new Su(n)}}function xu(e,t){return null!=Ou(e,t)}function Ou(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(oc(n.path,t)):null}function Au(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Oc,((e,n)=>{t.push(new gc(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new gc(e,n.value))})),t}function Du(e,t){if(sc(t))return e;{const n=Ou(e,t);return new Su(null!=n?new ku(n):e.writeTree_.subtree(t))}}function Lu(e){return e.writeTree_.isEmpty()}function Mu(e,t){return Fu(Ql(),e.writeTree_,t)}function Fu(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal(((t,i)=>{".priority"===t?(vs(null!==i.value,"Priority writes must always be leaf nodes"),r=i.value):n=Fu(ic(e,t),i,n)})),n.getChild(e).isEmpty()||null===r||(n=n.updateChild(ic(e,".priority"),r)),n}}
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
 */function Uu(e,t){return Qu(t,e)}function ju(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));vs(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&qu(t,r.path)?i=!1:cc(r.path,t.path)&&(s=!0)),o--}if(i){if(s)return function(e){e.visibleWrites=Wu(e.allWrites,Bu,Ql()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(r.snap)e.visibleWrites=Nu(e.visibleWrites,r.path);else{El(r.children,(t=>{e.visibleWrites=Nu(e.visibleWrites,ic(r.path,t))}))}return!0}return!1}function qu(e,t){if(e.snap)return cc(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&cc(ic(e.path,n),t))return!0;return!1}function Bu(e){return e.visible}function Wu(e,t,n){let r=Su.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const e=s.path;let t;if(s.snap)cc(n,e)?(t=oc(n,e),r=Pu(r,t,s.snap)):cc(e,n)&&(t=oc(e,n),r=Pu(r,Ql(),s.snap.getChild(t)));else{if(!s.children)throw ys("WriteRecord should have .snap or .children");if(cc(n,e))t=oc(n,e),r=Ru(r,t,s.children);else if(cc(e,n))if(t=oc(e,n),sc(t))r=Ru(r,Ql(),s.children);else{const e=Us(s.children,Xl(t));if(e){const n=e.getChild(ec(t));r=Pu(r,Ql(),n)}}}}}return r}function Vu(e,t,n,r,i){if(r||i){const s=Du(e.visibleWrites,t);if(!i&&Lu(s))return n;if(i||null!=n||xu(s,Ql())){const s=function(e){return(e.visible||i)&&(!r||!~r.indexOf(e.writeId))&&(cc(e.path,t)||cc(t,e.path))};return Mu(Wu(e.allWrites,s,t),n||qc.EMPTY_NODE)}return null}{const r=Ou(e.visibleWrites,t);if(null!=r)return r;{const r=Du(e.visibleWrites,t);if(Lu(r))return n;if(null!=n||xu(r,Ql())){return Mu(r,n||qc.EMPTY_NODE)}return null}}}function zu(e,t,n,r){return Vu(e.writeTree,e.treePath,t,n,r)}function Hu(e,t){return function(e,t,n){let r=qc.EMPTY_NODE;const i=Ou(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Oc,((e,t)=>{r=r.updateImmediateChild(e,t)})),r;if(n){const i=Du(e.visibleWrites,t);return n.forEachChild(Oc,((e,t)=>{const n=Mu(Du(i,new Jl(e)),t);r=r.updateImmediateChild(e,n)})),Au(i).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}return Au(Du(e.visibleWrites,t)).forEach((e=>{r=r.updateImmediateChild(e.name,e.node)})),r}(e.writeTree,e.treePath,t)}function $u(e,t,n,r){return function(e,t,n,r,i){vs(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ic(t,n);if(xu(e.visibleWrites,s))return null;{const t=Du(e.visibleWrites,s);return Lu(t)?i.getChild(n):Mu(t,i.getChild(n))}}(e.writeTree,e.treePath,t,n,r)}function Gu(e,t){return function(e,t){return Ou(e.visibleWrites,t)}(e.writeTree,ic(e.treePath,t))}function Ku(e,t,n,r,i,s){return function(e,t,n,r,i,s,o){let a;const l=Du(e.visibleWrites,t),c=Ou(l,Ql());if(null!=c)a=c;else{if(null==n)return[];a=Mu(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let l=n.getNext();for(;l&&e.length<i;)0!==t(l,r)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,r,i,s)}function Yu(e,t,n){return function(e,t,n,r){const i=ic(t,n),s=Ou(e.visibleWrites,i);if(null!=s)return s;if(r.isCompleteForChild(n))return Mu(Du(e.visibleWrites,i),r.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function Ju(e,t){return Qu(ic(e.treePath,t),e.writeTree)}function Qu(e,t){return{treePath:e,writeTree:t}}
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
 */class Xu{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;vs("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),vs(".priority"!==n,"Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if("child_added"===t&&"child_removed"===i)this.changeMap.set(n,Jc(n,e.snapshotNode,r.snapshotNode));else if("child_removed"===t&&"child_added"===i)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===i)this.changeMap.set(n,Yc(n,r.oldSnap));else if("child_changed"===t&&"child_added"===i)this.changeMap.set(n,Kc(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==i)throw ys("Illegal combination of changes: "+e+" occurred after "+r);this.changeMap.set(n,Jc(n,e.snapshotNode,r.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
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
 */const Zu=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class eh{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new mu(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Yu(this.writes_,e,t)}}getChildAfterChild(e,t,n){const r=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Eu(this.viewCache_),i=Ku(this.writes_,r,t,1,n,e);return 0===i.length?null:i[0]}}
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
 */function th(e,t,n,r,i){const s=new Xu;let o,a;if(n.type===uu.OVERWRITE){const l=n;l.source.fromUser?o=ih(e,t,l.path,l.snap,r,i,s):(vs(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!sc(l.path),o=rh(e,t,l.path,l.snap,r,i,a,s))}else if(n.type===uu.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,r,i,s,o){let a=t;return r.foreach(((r,l)=>{const c=ic(n,r);sh(t,Xl(c))&&(a=ih(e,a,c,l,i,s,o))})),r.foreach(((r,l)=>{const c=ic(n,r);sh(t,Xl(c))||(a=ih(e,a,c,l,i,s,o))})),a}(e,t,l.path,l.children,r,i,s):(vs(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=ah(e,t,l.path,l.children,r,i,a,s))}else if(n.type===uu.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,r,i,s){let o;if(null!=Gu(r,n))return t;{const a=new eh(r,t,i),l=t.eventCache.getNode();let c;if(sc(n)||".priority"===Xl(n)){let n;if(t.serverCache.isFullyInitialized())n=zu(r,Eu(t));else{const e=t.serverCache.getNode();vs(e instanceof qc,"serverChildren would be complete if leaf node"),n=Hu(r,e)}n=n,c=e.filter.updateFullNode(l,n,s)}else{const i=Xl(n);let u=Yu(r,i,t.serverCache);null==u&&t.serverCache.isCompleteForChild(i)&&(u=l.getImmediateChild(i)),c=null!=u?e.filter.updateChild(l,i,u,ec(n),a,s):t.eventCache.getNode().hasChild(i)?e.filter.updateChild(l,i,qc.EMPTY_NODE,ec(n),a,s):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=zu(r,Eu(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Gu(r,Ql()),bu(t,c,o,e.filter.filtersNodes())}}
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
 */(e,t,a.path,r,i,s):function(e,t,n,r,i,s,o){if(null!=Gu(i,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=r.value){if(sc(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return rh(e,t,n,l.getNode().getChild(n),i,s,a,o);if(sc(n)){let r=new ku(null);return l.getNode().forEachChild(yc,((e,t)=>{r=r.set(new Jl(e),t)})),ah(e,t,n,r,i,s,a,o)}return t}{let c=new ku(null);return r.foreach(((e,t)=>{const r=ic(n,e);l.isCompleteForPath(r)&&(c=c.set(e,l.getNode().getChild(r)))})),ah(e,t,n,c,i,s,a,o)}}(e,t,a.path,a.affectedTree,r,i,s)}else{if(n.type!==uu.LISTEN_COMPLETE)throw ys("Unknown operation type: "+n.type);o=function(e,t,n,r,i){const s=t.serverCache,o=Cu(t,s.getNode(),s.isFullyInitialized()||sc(n),s.isFiltered());return nh(e,o,n,r,Zu,i)}(e,t,n.path,r,s)}const l=s.getChanges();return function(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Iu(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Gc(Iu(t)))}}(t,o,l),{viewCache:o,changes:l}}function nh(e,t,n,r,i,s){const o=t.eventCache;if(null!=Gu(r,n))return t;{let a,l;if(sc(n))if(vs(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Eu(t),i=Hu(r,n instanceof qc?n:qc.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),i,s)}else{const n=zu(r,Eu(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const c=Xl(n);if(".priority"===c){vs(1===Zl(n),"Can't have a priority with additional path components");const i=o.getNode();l=t.serverCache.getNode();const s=$u(r,n,i,l);a=null!=s?e.filter.updatePriority(i,s):o.getNode()}else{const u=ec(n);let h;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=$u(r,n,o.getNode(),l);h=null!=e?o.getNode().getImmediateChild(c).updateChild(u,e):o.getNode().getImmediateChild(c)}else h=Yu(r,c,t.serverCache);a=null!=h?e.filter.updateChild(o.getNode(),c,h,u,i,s):o.getNode()}}return bu(t,a,o.isFullyInitialized()||sc(n),e.filter.filtersNodes())}}function rh(e,t,n,r,i,s,o,a){const l=t.serverCache;let c;const u=o?e.filter:e.filter.getIndexedFilter();if(sc(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),e,null)}else{const e=Xl(n);if(!l.isCompleteForPath(n)&&Zl(n)>1)return t;const i=ec(n),s=l.getNode().getImmediateChild(e).updateChild(i,r);c=".priority"===e?u.updatePriority(l.getNode(),s):u.updateChild(l.getNode(),e,s,i,Zu,null)}const h=Cu(t,c,l.isFullyInitialized()||sc(n),u.filtersNodes());return nh(e,h,n,i,new eh(i,h,s),a)}function ih(e,t,n,r,i,s,o){const a=t.eventCache;let l,c;const u=new eh(i,t,s);if(sc(n))c=e.filter.updateFullNode(t.eventCache.getNode(),r,o),l=bu(t,c,!0,e.filter.filtersNodes());else{const i=Xl(n);if(".priority"===i)c=e.filter.updatePriority(t.eventCache.getNode(),r),l=bu(t,c,a.isFullyInitialized(),a.isFiltered());else{const s=ec(n),c=a.getNode().getImmediateChild(i);let h;if(sc(s))h=r;else{const e=u.getCompleteChild(i);h=null!=e?".priority"===tc(s)&&e.getChild(rc(s)).isEmpty()?e:e.updateChild(s,r):qc.EMPTY_NODE}if(c.equals(h))l=t;else{l=bu(t,e.filter.updateChild(a.getNode(),i,h,s,u,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function sh(e,t){return e.eventCache.isCompleteForChild(t)}function oh(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ah(e,t,n,r,i,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=sc(n)?r:new ku(null).setTree(n,r);const u=t.serverCache.getNode();return l.children.inorderTraversal(((n,r)=>{if(u.hasChild(n)){const l=oh(0,t.serverCache.getNode().getImmediateChild(n),r);c=rh(e,c,new Jl(n),l,i,s,o,a)}})),l.children.inorderTraversal(((n,r)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===r.value;if(!u.hasChild(n)&&!l){const l=oh(0,t.serverCache.getNode().getImmediateChild(n),r);c=rh(e,c,new Jl(n),l,i,s,o,a)}})),c}class lh{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Qc(n.getIndex()),i=(s=n).loadsAllData()?new Qc(s.getIndex()):s.hasLimit()?new Zc(s):new Xc(s);var s;this.processor_=function(e){return{filter:e}}(i);const o=t.serverCache,a=t.eventCache,l=r.updateFullNode(qc.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(qc.EMPTY_NODE,a.getNode(),null),u=new mu(l,o.isFullyInitialized(),r.filtersNodes()),h=new mu(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=wu(h,u),this.eventGenerator_=new vu(this.query_)}get query(){return this.query_}}function ch(e,t){const n=Eu(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!sc(t)&&!n.getImmediateChild(Xl(t)).isEmpty())?n.getChild(t):null}function uh(e){return 0===e.eventRegistrations_.length}function hh(e,t,n){const r=[];if(n){vs(null==t,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,i);t&&r.push(t)}))}if(t){let n=[];for(let r=0;r<e.eventRegistrations_.length;++r){const i=e.eventRegistrations_[r];if(i.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(r+1));break}}else n.push(i)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return r}function dh(e,t,n,r){t.type===uu.MERGE&&null!==t.source.queryId&&(vs(Eu(e.viewCache_),"We should always have a full cache before handling merges"),vs(Iu(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=th(e.processor_,i,t,n,r);var o,a;return o=e.processor_,a=s.viewCache,vs(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),vs(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),vs(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,ph(e,s.changes,s.viewCache.eventCache.getNode(),null)}function ph(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return function(e,t,n,r){const i=[],s=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),yu(e,i,"child_removed",t,r,n),yu(e,i,"child_added",t,r,n),yu(e,i,"child_moved",s,r,n),yu(e,i,"child_changed",t,r,n),yu(e,i,"value",t,r,n),i}(e.eventGenerator_,t,n,i)}
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
 */let fh,gh;class _h{constructor(){this.views=new Map}}function mh(e,t,n,r){const i=t.source.queryId;if(null!==i){const s=e.views.get(i);return vs(null!=s,"SyncTree gave us an op for an invalid query."),dh(s,t,n,r)}{let i=[];for(const s of e.views.values())i=i.concat(dh(s,t,n,r));return i}}function vh(e,t,n,r,i,s){const o=function(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=zu(n,i?r:null),s=!1;e?s=!0:r instanceof qc?(e=Hu(n,r),s=!1):(e=qc.EMPTY_NODE,s=!1);const o=wu(new mu(e,s,!1),new mu(r,i,!1));return new lh(t,o)}return o}(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,r=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Oc,((e,t)=>{r.push(Kc(e,t))}));return n.isFullyInitialized()&&r.push(Gc(n.getNode())),ph(e,r,n.getNode(),t)}(o,n)}function yh(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const a=Eh(e);if("default"===i)for(const[l,c]of e.views.entries())o=o.concat(hh(c,n,r)),uh(c)&&(e.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const t=e.views.get(i);t&&(o=o.concat(hh(t,n,r)),uh(t)&&(e.views.delete(i),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Eh(e)&&s.push(new(vs(fh,"Reference.ts has not been loaded"),fh)(t._repo,t._path)),{removed:s,events:o}}function wh(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function bh(e,t){let n=null;for(const r of e.views.values())n=n||ch(r,t);return n}function Ch(e,t){if(t._queryParams.loadsAllData())return Th(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Ih(e,t){return null!=Ch(e,t)}function Eh(e){return null!=Th(e)}function Th(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
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
 */let kh=1;class Sh{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ku(null),this.pendingWriteTree_={visibleWrites:Su.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Ph(e,t,n,r,i){return function(e,t,n,r,i){vs(r>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===i&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Pu(e.visibleWrites,t,n)),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r,i),i?Lh(e,new gu({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Rh(e,t,n,r){!function(e,t,n,r){vs(r>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:r,visible:!0}),e.visibleWrites=Ru(e.visibleWrites,t,n),e.lastWriteId=r}(e.pendingWriteTree_,t,n,r);const i=ku.fromObject(n);return Lh(e,new _u({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,i))}function Nh(e,t,n=!1){const r=function(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}(e.pendingWriteTree_,t);if(ju(e.pendingWriteTree_,t)){let t=new ku(null);return null!=r.snap?t=t.set(Ql(),!0):El(r.children,(e=>{t=t.set(new Jl(e),!0)})),Lh(e,new pu(r.path,t,n))}return[]}function xh(e,t,n){return Lh(e,new gu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function Oh(e,t,n,r){const i=t._path,s=e.syncPointTree_.get(i);let o=[];if(s&&("default"===t._queryIdentifier||Ih(s,t))){const a=yh(s,t,n,r);0===s.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(i));const l=a.removed;o=a.events;const c=-1!==l.findIndex((e=>e._queryParams.loadsAllData())),u=e.syncPointTree_.findOnPath(i,((e,t)=>Eh(t)));if(c&&!u){const t=e.syncPointTree_.subtree(i);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&Eh(t)){return[Th(t)]}{let e=[];return t&&(e=wh(t)),El(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const r=n[t],i=r.query,s=Uh(e,r);e.listenProvider_.startListening(zh(i),jh(e,i),s.hashFn,s.onComplete)}}}if(!u&&l.length>0&&!r)if(c){const n=null;e.listenProvider_.stopListening(zh(t),n)}else l.forEach((t=>{const n=e.queryToTagMap.get(qh(t));e.listenProvider_.stopListening(zh(t),n)}));!function(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const t=qh(r),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,l)}return o}function Ah(e,t,n){const r=t._path;let i=null,s=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=oc(e,r);i=i||bh(t,n),s=s||Eh(t)}));let o,a=e.syncPointTree_.get(r);if(a?(s=s||Eh(a),i=i||bh(a,Ql())):(a=new _h,e.syncPointTree_=e.syncPointTree_.set(r,a)),null!=i)o=!0;else{o=!1,i=qc.EMPTY_NODE;e.syncPointTree_.subtree(r).foreachChild(((e,t)=>{const n=bh(t,Ql());n&&(i=i.updateImmediateChild(e,n))}))}const l=Ih(a,t);if(!l&&!t._queryParams.loadsAllData()){const n=qh(t);vs(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const r=kh++;e.queryToTagMap.set(n,r),e.tagToQueryMap.set(r,n)}let c=vh(a,t,n,Uu(e.pendingWriteTree_,r),i,o);if(!l&&!s){const n=Ch(a,t);c=c.concat(function(e,t,n){const r=t._path,i=jh(e,t),s=Uh(e,n),o=e.listenProvider_.startListening(zh(t),i,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(r);if(i)vs(!Eh(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!sc(e)&&t&&Eh(t))return[Th(t).query];{let e=[];return t&&(e=e.concat(wh(t).map((e=>e.query)))),El(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const r=t[n];e.listenProvider_.stopListening(zh(r),jh(e,r))}}return o}
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
 */(e,t,n))}return c}function Dh(e,t,n){const r=e.pendingWriteTree_,i=e.syncPointTree_.findOnPath(t,((e,n)=>{const r=bh(n,oc(e,t));if(r)return r}));return Vu(r,t,i,n,!0)}function Lh(e,t){return Mh(t,e.syncPointTree_,null,Uu(e.pendingWriteTree_,Ql()))}function Mh(e,t,n,r){if(sc(e.path))return Fh(e,t,n,r);{const i=t.get(Ql());null==n&&null!=i&&(n=bh(i,Ql()));let s=[];const o=Xl(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=Ju(r,o);s=s.concat(Mh(a,l,e,t))}return i&&(s=s.concat(mh(i,e,r,n))),s}}function Fh(e,t,n,r){const i=t.get(Ql());null==n&&null!=i&&(n=bh(i,Ql()));let s=[];return t.children.inorderTraversal(((t,i)=>{const o=n?n.getImmediateChild(t):null,a=Ju(r,t),l=e.operationForChild(t);l&&(s=s.concat(Fh(l,i,o,a)))})),i&&(s=s.concat(mh(i,e,r,n))),s}function Uh(e,t){const n=t.query,r=jh(e,n);return{hashFn:()=>(function(e){return e.viewCache_.serverCache.getNode()}(t)||qc.EMPTY_NODE).hash(),onComplete:t=>{if("ok"===t)return r?function(e,t,n){const r=Bh(e,n);if(r){const n=Wh(r),i=n.path,s=n.queryId,o=oc(i,t);return Vh(e,i,new fu(du(s),o))}return[]}(e,n._path,r):function(e,t){return Lh(e,new fu({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const r=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}(t,n);return Oh(e,n,null,r)}}}}function jh(e,t){const n=qh(t);return e.queryToTagMap.get(n)}function qh(e){return e._path.toString()+"$"+e._queryIdentifier}function Bh(e,t){return e.tagToQueryMap.get(t)}function Wh(e){const t=e.indexOf("$");return vs(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Jl(e.substr(0,t))}}function Vh(e,t,n){const r=e.syncPointTree_.get(t);vs(r,"Missing sync point for query tag that we're tracking");return mh(r,n,Uu(e.pendingWriteTree_,t),null)}function zh(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(vs(gh,"Reference.ts has not been loaded"),gh)(e._repo,e._path):e}class Hh{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Hh(t)}node(){return this.node_}}class $h{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=ic(this.path_,e);return new $h(this.syncTree_,t)}node(){return Dh(this.syncTree_,this.path_)}}const Gh=function(e,t,n){return e&&"object"==typeof e?(vs(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Kh(e[".sv"],t,n):"object"==typeof e[".sv"]?Yh(e[".sv"],t):void vs(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Kh=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:vs(!1,"Unexpected server value: "+e)}},Yh=function(e,t,n){e.hasOwnProperty("increment")||vs(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;"number"!=typeof r&&vs(!1,"Unexpected increment value: "+r);const i=t.node();if(vs(null!=i,"Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const s=i.getValue();return"number"!=typeof s?r:s+r},Jh=function(e,t,n,r){return Xh(t,new $h(n,e),r)},Qh=function(e,t,n){return Xh(e,new Hh(t),n)};function Xh(e,t,n){const r=e.getPriority().val(),i=Gh(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const r=e,s=Gh(r.getValue(),t,n);return s!==r.getValue()||i!==r.getPriority().val()?new xc(s,Wc(i)):e}{const r=e;return s=r,i!==r.getPriority().val()&&(s=s.updatePriority(new xc(i))),r.forEachChild(Oc,((e,r)=>{const i=Xh(r,t.getImmediateChild(e),n);i!==r&&(s=s.updateImmediateChild(e,i))})),s}}
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
 */class Zh{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function ed(e,t){let n=t instanceof Jl?t:new Jl(t),r=e,i=Xl(n);for(;null!==i;){const e=Us(r.node.children,i)||{children:{},childCount:0};r=new Zh(i,r,e),n=ec(n),i=Xl(n)}return r}function td(e){return e.node.value}function nd(e,t){e.node.value=t,ad(e)}function rd(e){return e.node.childCount>0}function id(e,t){El(e.node.children,((n,r)=>{t(new Zh(n,e,r))}))}function sd(e,t,n,r){n&&!r&&t(e),id(e,(e=>{sd(e,t,!0,r)})),n&&r&&t(e)}function od(e){return new Jl(null===e.parent?e.name:od(e.parent)+"/"+e.name)}function ad(e){null!==e.parent&&function(e,t,n){const r=function(e){return void 0===td(e)&&!rd(e)}(n),i=Fs(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,ad(e)):r||i||(e.node.children[t]=n.node,e.node.childCount++,ad(e))}
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
 */(e.parent,e.name,e)}const ld=/[\[\].#$\/\u0000-\u001F\u007F]/,cd=/[\[\].#$\u0000-\u001F\u007F]/,ud=function(e){return"string"==typeof e&&0!==e.length&&!ld.test(e)},hd=function(e){return"string"==typeof e&&0!==e.length&&!cd.test(e)},dd=function(e,t,n,r){r&&void 0===t||pd(Gs(e,"value"),t,n)},pd=function(e,t,n){const r=n instanceof Jl?new uc(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+dc(r));if("function"==typeof t)throw new Error(e+"contains a function "+dc(r)+" with contents = "+t.toString());if(_l(t))throw new Error(e+"contains "+t.toString()+" "+dc(r));if("string"==typeof t&&t.length>10485760/3&&Ks(t)>10485760)throw new Error(e+"contains a string greater than 10485760 utf8 bytes "+dc(r)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,i=!1;if(El(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(i=!0,!ud(t)))throw new Error(e+" contains an invalid key ("+t+") "+dc(r)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var o,a;a=t,(o=r).parts_.length>0&&(o.byteLength_+=1),o.parts_.push(a),o.byteLength_+=Ks(a),hc(o),pd(e,s,r),function(e){const t=e.parts_.pop();e.byteLength_-=Ks(t),e.parts_.length>0&&(e.byteLength_-=1)}(r)})),n&&i)throw new Error(e+' contains ".value" child '+dc(r)+" in addition to actual children.")}},fd=function(e,t,n,r){if(r&&void 0===t)return;const i=Gs(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(i+" must be an object containing the children to replace.");const s=[];El(t,((e,t)=>{const r=new Jl(e);if(pd(i,t,ic(n,r)),".priority"===tc(r)&&!(null===(o=t)||"string"==typeof o||"number"==typeof o&&!_l(o)||o&&"object"==typeof o&&Fs(o,".sv")))throw new Error(i+"contains an invalid value for '"+r.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");var o;s.push(r)})),function(e,t){let n,r;for(n=0;n<t.length;n++){r=t[n];const i=nc(r);for(let t=0;t<i.length;t++)if(".priority"===i[t]&&t===i.length-1);else if(!ud(i[t]))throw new Error(e+"contains an invalid key ("+i[t]+") in path "+r.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(ac);let i=null;for(n=0;n<t.length;n++){if(r=t[n],null!==i&&cc(i,r))throw new Error(e+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}}(i,s)},gd=function(e,t,n,r){if(!(r&&void 0===n||hd(n)))throw new Error(Gs(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},_d=function(e,t){if(".info"===Xl(t))throw new Error(e+" failed = Can't modify data under /.info/")},md=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!ud(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),hd(e)}(n))throw new Error(Gs(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
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
class vd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function yd(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();null===n||lc(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function wd(e,t,n){yd(e,n),Cd(e,(e=>lc(e,t)))}function bd(e,t,n){yd(e,n),Cd(e,(e=>cc(e,t)||cc(t,e)))}function Cd(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){t(i.path)?(Id(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Id(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const r=n.getEventRunner();cl&&hl("event: "+n.toString()),Pl(r)}}}
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
 */class Ed{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new vd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=su(),this.transactionQueueTree_=new Zh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Td(e,t,n){if(e.stats_=jl(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new ru(e.repoInfo_,((t,n,r,i)=>{Pd(e,t,n,r,i)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Rd(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ls(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new fc(e.repoInfo_,t,((t,n,r,i)=>{Pd(e,t,n,r,i)}),(t=>{Rd(e,t)}),(t=>{!function(e,t){El(t,((t,n)=>{Nd(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return Ul[n]||(Ul[n]=t()),Ul[n]}(e.repoInfo_,(()=>new cu(e.stats_,e.server_))),e.infoData_=new iu,e.infoSyncTree_=new Sh({startListening:(t,n,r,i)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=xh(e.infoSyncTree_,t._path,o),setTimeout((()=>{i("ok")}),0)),s},stopListening:()=>{}}),Nd(e,"connected",!1),e.serverSyncTree_=new Sh({startListening:(t,n,r,i)=>(e.server_.listen(t,r,n,((n,r)=>{const s=i(n,r);bd(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function kd(e){const t=e.infoData_.getNode(new Jl(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function Sd(e){return(t=(t={timestamp:kd(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function Pd(e,t,n,r,i){e.dataUpdateCount++;const s=new Jl(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const t=qs(n,(e=>Wc(e)));o=function(e,t,n,r){const i=Bh(e,r);if(i){const r=Wh(i),s=r.path,o=r.queryId,a=oc(s,t),l=ku.fromObject(n);return Vh(e,s,new _u(du(o),a,l))}return[]}(e.serverSyncTree_,s,t,i)}else{const t=Wc(n);o=function(e,t,n,r){const i=Bh(e,r);if(null!=i){const r=Wh(i),s=r.path,o=r.queryId,a=oc(s,t);return Vh(e,s,new gu(du(o),a,n))}return[]}(e.serverSyncTree_,s,t,i)}else if(r){const t=qs(n,(e=>Wc(e)));o=function(e,t,n){const r=ku.fromObject(n);return Lh(e,new _u({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,r))}(e.serverSyncTree_,s,t)}else{const t=Wc(n);o=xh(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=Fd(e,s)),bd(e.eventQueue_,a,o)}function Rd(e,t){Nd(e,"connected",t),!1===t&&function(e){Ad(e,"onDisconnectEvents");const t=Sd(e),n=su();au(e.onDisconnect_,Ql(),((r,i)=>{const s=Jh(r,i,e.serverSyncTree_,t);ou(n,r,s)}));let r=[];au(n,Ql(),((t,n)=>{r=r.concat(xh(e.serverSyncTree_,t,n));const i=Wd(e,t);Fd(e,i)})),e.onDisconnect_=su(),bd(e.eventQueue_,Ql(),r)}(e)}function Nd(e,t,n){const r=new Jl("/.info/"+t),i=Wc(n);e.infoData_.updateSnapshot(r,i);const s=xh(e.infoSyncTree_,r,i);bd(e.eventQueue_,r,s)}function xd(e){return e.nextWriteId_++}function Od(e,t,n){let r;r=".info"===Xl(t._path)?Oh(e.infoSyncTree_,t,n):Oh(e.serverSyncTree_,t,n),wd(e.eventQueue_,t._path,r)}function Ad(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),hl(n,...t)}function Dd(e,t,n,r){t&&Pl((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let i=e;r&&(i+=": "+r);const s=new Error(i);s.code=e,t(s)}}))}function Ld(e,t,n){return Dh(e.serverSyncTree_,t,n)||qc.EMPTY_NODE}function Md(e,t=e.transactionQueueTree_){if(t||Bd(e,t),td(t)){const n=jd(e,t);vs(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const r=n.map((e=>e.currentWriteId)),i=Ld(e,t,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const e=n[c];vs(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const r=oc(t,e.path);s=s.updateChild(r,e.currentOutputSnapshotRaw)}const a=s.val(!0),l=t;e.server_.put(l.toString(),a,(r=>{Ad(e,"transaction put response",{path:l.toString(),status:r});let i=[];if("ok"===r){const r=[];for(let t=0;t<n.length;t++)n[t].status=2,i=i.concat(Nh(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&r.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Bd(e,ed(e.transactionQueueTree_,t)),Md(e,e.transactionQueueTree_),bd(e.eventQueue_,t,i);for(let e=0;e<r.length;e++)Pl(r[e])}else{if("datastale"===r)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{gl("transaction at "+l.toString()+" failed: "+r);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=r}Fd(e,t)}}),o)}(e,od(t),n)}else rd(t)&&id(t,(t=>{Md(e,t)}))}function Fd(e,t){const n=Ud(e,t),r=od(n);return function(e,t,n){if(0===t.length)return;const r=[];let i=[];const s=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=oc(n,l.path);let u,h=!1;if(vs(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)h=!0,u=l.abortReason,i=i.concat(Nh(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)h=!0,u="maxretry",i=i.concat(Nh(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Ld(e,l.path,s);l.currentInputSnapshot=n;const r=t[a].update(n.val());if(void 0!==r){pd("transaction failed: Data returned ",r,l.path);let t=Wc(r);"object"==typeof r&&null!=r&&Fs(r,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=Sd(e),c=Qh(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=xd(e),s.splice(s.indexOf(o),1),i=i.concat(Ph(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),i=i.concat(Nh(e.serverSyncTree_,o,!0))}else h=!0,u="nodata",i=i.concat(Nh(e.serverSyncTree_,l.currentWriteId,!0))}bd(e.eventQueue_,n,i),i=[],h&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===u?r.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):r.push((()=>t[a].onComplete(new Error(u),!1,null)))))}var o;Bd(e,e.transactionQueueTree_);for(let a=0;a<r.length;a++)Pl(r[a]);Md(e,e.transactionQueueTree_)}(e,jd(e,n),r),r}function Ud(e,t){let n,r=e.transactionQueueTree_;for(n=Xl(t);null!==n&&void 0===td(r);)r=ed(r,n),n=Xl(t=ec(t));return r}function jd(e,t){const n=[];return qd(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function qd(e,t,n){const r=td(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);id(t,(t=>{qd(e,t,n)}))}function Bd(e,t){const n=td(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,nd(t,n.length>0?n:void 0)}id(t,(t=>{Bd(e,t)}))}function Wd(e,t){const n=od(Ud(e,t)),r=ed(e.transactionQueueTree_,t);return function(e,t,n){let r=n?e:e.parent;for(;null!==r;){if(t(r))return!0;r=r.parent}}(r,(t=>{Vd(e,t)})),Vd(e,r),sd(r,(t=>{Vd(e,t)})),n}function Vd(e,t){const n=td(t);if(n){const r=[];let i=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(vs(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(vs(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),i=i.concat(Nh(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&r.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?nd(t,void 0):n.length=s+1,bd(e.eventQueue_,od(t),i);for(let e=0;e<r.length;e++)Pl(r[e])}}
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
 */const zd=function(e,t){const n=Hd(e),r=n.namespace;"firebase.com"===n.domain&&fl(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),r&&"undefined"!==r||"localhost"===n.domain||fl("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&gl("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const i="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new Dl(n.host,n.secure,r,t,i,"",r!==n.subdomain),path:new Jl(n.pathString)}},Hd=function(e){let t="",n="",r="",i="",s="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let u=e.indexOf("/");-1===u&&(u=e.length);let h=e.indexOf("?");-1===h&&(h=e.length),t=e.substring(0,Math.min(u,h)),u<h&&(i=function(e){let t="";const n=e.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let e=n[i];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(r){}t+="/"+e}return t}(e.substring(u,h)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const r=n.split("=");2===r.length?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):gl(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,h)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const p=t.slice(0,c);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");r=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};
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
class $d{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ls(this.snapshot.exportVal())}}class Gd{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
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
 */class Kd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return vs(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
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
 */class Yd{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return sc(this._path)?null:tc(this._path)}get ref(){return new Jd(this._repo,this._path)}get _queryIdentifier(){const e=nu(this._queryParams),t=Cl(e);return"{}"===t?"default":t}get _queryObject(){return nu(this._queryParams)}isEqual(e){if(!((e=Ys(e))instanceof Yd))return!1;const t=this._repo===e._repo,n=lc(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Jd extends Yd{constructor(e,t){super(e,t,new eu,!1)}get parent(){const e=rc(this._path);return null===e?null:new Jd(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Qd{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Jl(e),n=Zd(this.ref,e);return new Qd(this._node.getChild(t),n,Oc)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Qd(n,Zd(this.ref,t),Oc))))}hasChild(e){const t=new Jl(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xd(e,t){return(e=Ys(e))._checkNotDeleted("ref"),void 0!==t?Zd(e._root,t):e._root}function Zd(e,t){var n,r,i,s;return null===Xl((e=Ys(e))._path)?(n="child",r="path",s=!1,(i=t)&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),gd(n,r,i,s)):gd("child","path",t,!1),new Jd(e._repo,ic(e._path,t))}function ep(e,t){e=Ys(e),_d("push",e._path),dd("push",t,e._path,!0);const n=kd(e._repo),r=$c(n),i=Zd(e,r),s=Zd(e,r);let o;return o=null!=t?tp(s,t).then((()=>s)):Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function tp(e,t){e=Ys(e),_d("set",e._path),dd("set",t,e._path,!1);const n=new Ts;return function(e,t,n,r,i){Ad(e,"set",{path:t.toString(),value:n,priority:r});const s=Sd(e),o=Wc(n,r),a=Dh(e.serverSyncTree_,t),l=Qh(o,a,s),c=xd(e),u=Ph(e.serverSyncTree_,t,l,c,!0);yd(e.eventQueue_,u),e.server_.put(t.toString(),o.val(!0),((n,r)=>{const s="ok"===n;s||gl("set at "+t+" failed: "+n);const o=Nh(e.serverSyncTree_,c,!s);bd(e.eventQueue_,t,o),Dd(0,i,n,r)}));const h=Wd(e,t);Fd(e,h),bd(e.eventQueue_,h,[])}(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function np(e,t){fd("update",t,e._path,!1);const n=new Ts;return function(e,t,n,r){Ad(e,"update",{path:t.toString(),value:n});let i=!0;const s=Sd(e),o={};if(El(n,((n,r)=>{i=!1,o[n]=Jh(ic(t,n),Wc(r),e.serverSyncTree_,s)})),i)hl("update() called with empty data.  Don't do anything."),Dd(0,r,"ok",void 0);else{const i=xd(e),s=Rh(e.serverSyncTree_,t,o,i);yd(e.eventQueue_,s),e.server_.merge(t.toString(),n,((n,s)=>{const o="ok"===n;o||gl("update at "+t+" failed: "+n);const a=Nh(e.serverSyncTree_,i,!o),l=a.length>0?Fd(e,t):t;bd(e.eventQueue_,l,a),Dd(0,r,n,s)})),El(n,(n=>{const r=Wd(e,ic(t,n));Fd(e,r)})),bd(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}class rp{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new $d("value",this,new Qd(e.snapshotNode,new Jd(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Gd(this,e,t):null}matches(e){return e instanceof rp&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class ip{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Gd(this,e,t):null}createEvent(e,t){vs(null!=e.childName,"Child events should have a childName.");const n=Zd(new Jd(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new $d(e.type,this,new Qd(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof ip&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function sp(e,t,n,r,i){let s;if("object"==typeof r&&(s=void 0,i=r),"function"==typeof r&&(s=r),i&&i.onlyOnce){const t=n,r=(n,r)=>{Od(e._repo,e,a),t(n,r)};r.userCallback=n.userCallback,r.context=n.context,n=r}const o=new Kd(n,s||void 0),a="value"===t?new rp(o):new ip(t,o);return function(e,t,n){let r;r=".info"===Xl(t._path)?Ah(e.infoSyncTree_,t,n):Ah(e.serverSyncTree_,t,n),wd(e.eventQueue_,t._path,r)}(e._repo,e,a),()=>Od(e._repo,e,a)}function op(e,t,n,r){return sp(e,"value",t,n,r)}!function(e){vs(!fh,"__referenceConstructor has already been defined"),fh=e}(Jd),function(e){vs(!gh,"__referenceConstructor has already been defined"),gh=e}(Jd);
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
const ap={};function lp(e,t,n,r,i){let s=r||e.options.databaseURL;void 0===s&&(e.options.projectId||fl("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),hl("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=zd(s,i),c=l.repoInfo;"undefined"!=typeof process&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,s=`http://${a}?ns=${c.namespace}`,l=zd(s,i),c=l.repoInfo):o=!l.repoInfo.secure;const u=i&&o?new Ol(Ol.OWNER):new xl(e.name,e.options,t);md("Invalid Firebase Database URL",l),sc(l.path)||fl("Database URL must point to the root of a Firebase Database (not including a child path).");const h=function(e,t,n,r){let i=ap[t.name];i||(i={},ap[t.name]=i);let s=i[e.toURLString()];s&&fl("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return s=new Ed(e,false,n,r),i[e.toURLString()]=s,s}(c,e,u,new Nl(e.name,n));return new cp(h,e)}class cp{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Td(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jd(this._repo,Ql())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=ap[t];n&&n[e.key]===e||fl(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&fl("Cannot call "+e+" on a deleted database.")}}function up(e=wo(),t){return _o(e,"database").getImmediate({identifier:t})}
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
 */function hp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
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
fc.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},fc.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},function(e){Za="9.0.0",go(new Js("database",((e,{instanceIdentifier:t})=>lp(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),bo("@firebase/database","0.12.0",e)}();const dp=hp,pp=new xs("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),fp=new ao("@firebase/auth");function gp(e,...t){fp.logLevel<=Zs.ERROR&&fp.error(`Auth (9.0.0): ${e}`,...t)}
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
 */function _p(e,...t){throw yp(e,...t)}function mp(e,...t){return yp(e,...t)}function vp(e,t,n){const r=Object.assign(Object.assign({},dp()),{[t]:n});return new xs("auth","Firebase",r).create(t,{appName:e.name})}function yp(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return pp.create(e,...t)}function wp(e,t,...n){if(!e)throw yp(t,...n)}function bp(e){const t="INTERNAL ASSERTION FAILED: "+e;throw gp(t),new Error(t)}function Cp(e,t){e||bp(t)}
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
 */const Ip=new Map;function Ep(e){Cp(e instanceof Function,"Expected a class definition");let t=Ip.get(e);return t?(Cp(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ip.set(e,t),t)}
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
function Tp(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function kp(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function Sp(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==kp()&&"https:"!==kp()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
class Pp{constructor(e,t){this.shortDelay=e,this.longDelay=t,Cp(t>e,"Short delay should be less than long delay!"),this.isMobile=Ss()||Ps()}get(){return Sp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function Rp(e,t){Cp(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class Np{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void bp("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void bp("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void bp("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const xp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Op=new Pp(3e4,6e4);
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
 */async function Ap(e,t,n,r,i={}){return Dp(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const o=Vs(Object.assign({key:e.config.apiKey},s)).slice(1),a=new(Np.headers());return a.set("Content-Type","application/json"),a.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&a.set("X-Firebase-Locale",e.languageCode),Np.fetch()(Lp(e,e.config.apiHost,n,o),Object.assign({method:t,headers:a,referrerPolicy:"no-referrer"},i))}))}async function Dp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},xp),t);try{const t=new Mp(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Fp(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Fp(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Fp(e,"email-already-in-use",s);const a=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw vp(e,a,o);_p(e,a)}}catch(i){if(i instanceof Ns)throw i;_p(e,"network-request-failed")}}function Lp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Rp(e.config,i):`${e.config.apiScheme}://${i}`}class Mp{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(mp(this.auth,"timeout"))),Op.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fp(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mp(e,t,r);return i.customData._tokenResponse=n,i}
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
function Up(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function jp(e){return 1e3*Number(e)}function qp(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return gp("JWT malformed, contained fewer than 3 sections"),null;try{const e=Cs(n);return e?JSON.parse(e):(gp("Failed to decode base64 JWT payload"),null)}catch(i){return gp("Caught error parsing JWT payload as JSON",i),null}}
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
async function Bp(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Ns&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Wp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class Vp{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Up(this.lastLoginAt),this.creationTime=Up(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function zp(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Bp(e,async function(e,t){return Ap(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));wp(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=us(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const a=(l=e.providerData,c=o,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==a?void 0:a.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Vp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
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
class Hp{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){wp(e.idToken,"internal-error"),wp(void 0!==e.idToken,"internal-error"),wp(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=qp(e);return wp(t,"internal-error"),wp(void 0!==t.exp,"internal-error"),wp(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return wp(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
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
async function(e,t){const n=await Dp(e,{},(()=>{const n=Vs({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Lp(e,r,"/v1/token",`key=${i}`);return Np.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Hp;return n&&(wp("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(wp("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(wp("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Hp,this.toJSON())}_performRefresh(){return bp("not implemented")}}
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
 */function $p(e,t){wp("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Gp{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=us(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Wp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Vp(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Bp(this,this.stsTokenManager.getToken(this.auth,e));return wp(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ys(e),r=await n.getIdToken(t),i=qp(r);wp(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,o=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Up(jp(i.auth_time)),issuedAtTime:Up(jp(i.iat)),expirationTime:Up(jp(i.exp)),signInProvider:o||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ys(e);await zp(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(wp(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Gp(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){wp(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await zp(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Bp(this,async function(e,t){return Ap(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,_=null!==(l=t.createdAt)&&void 0!==l?l:void 0,m=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:y,isAnonymous:w,providerData:b,stsTokenManager:C}=t;wp(v&&C,e,"internal-error");const I=Hp.fromJSON(this.name,C);wp("string"==typeof v,e,"internal-error"),$p(u,e.name),$p(h,e.name),wp("boolean"==typeof y,e,"internal-error"),wp("boolean"==typeof w,e,"internal-error"),$p(d,e.name),$p(p,e.name),$p(f,e.name),$p(g,e.name),$p(_,e.name),$p(m,e.name);const E=new Gp({uid:v,auth:e,email:h,emailVerified:y,displayName:u,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:I,createdAt:_,lastLoginAt:m});return b&&Array.isArray(b)&&(E.providerData=b.map((e=>Object.assign({},e)))),g&&(E._redirectEventId=g),E}static async _fromIdTokenResponse(e,t,n=!1){const r=new Hp;r.updateFromServerResponse(t);const i=new Gp({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await zp(i),i}}
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
 */class Kp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Kp.type="NONE";const Yp=Kp;
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
 */function Jp(e,t,n){return`firebase:${e}:${t}:${n}`}class Qp{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Jp(this.userKey,r.apiKey,i),this.fullPersistenceKey=Jp("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gp._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Qp(Ep(Yp),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Ep(Yp);const s=Jp(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=Gp._fromJSON(e,t);c!==i&&(o=n),i=c;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new Qp(i,e,n)):new Qp(i,e,n)}}
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
 */function Xp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(nf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Zp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(sf(t))return"Blackberry";if(of(t))return"Webos";if(ef(t))return"Safari";if((t.includes("chrome/")||tf(t))&&!t.includes("edge/"))return"Chrome";if(rf(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Zp(e=ks()){return/firefox\//i.test(e)}function ef(e=ks()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function tf(e=ks()){return/crios\//i.test(e)}function nf(e=ks()){return/iemobile/i.test(e)}function rf(e=ks()){return/android/i.test(e)}function sf(e=ks()){return/blackberry/i.test(e)}function of(e=ks()){return/webos/i.test(e)}function af(e=ks()){return/iphone|ipad|ipod/i.test(e)}function lf(){return((e=ks()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function cf(e=ks()){return af(e)||rf(e)||of(e)||sf(e)||/windows phone/i.test(e)||nf(e)}
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
function uf(e,t=[]){let n;switch(e){case"Browser":n=Xp(ks());break;case"Worker":n=`${Xp(ks())}-${e}`;break;default:n=e}return`${n}/JsCore/9.0.0/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class hf{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pf(this),this.idTokenSubscription=new pf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pp,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ep(t)),this._initializationPromise=this.queue((async()=>{var n;this._deleted||(this.persistenceManager=await Qp.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e)):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(wp(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zp(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ys(e):null;return t&&wp(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&wp(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Ep(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new xs("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ep(e)||this._popupRedirectResolver;wp(t,this,"argument-error"),this.redirectPersistenceManager=await Qp.create(this,[Ep(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return wp(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return wp(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=uf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function df(e){return Ys(e)}class pf{constructor(e){var t,n;this.auth=e,this.observer=null,this.addObserver=(n=new Hs((e=>this.observer=e),t)).subscribe.bind(n)}get next(){return wp(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
 */class ff{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return bp("not implemented")}_getIdTokenResponse(e){return bp("not implemented")}_linkToIdToken(e,t){return bp("not implemented")}_getReauthenticationResolver(e){return bp("not implemented")}}
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
 */async function gf(e,t){return async function(e,t,n,r,i={}){const s=await Ap(e,t,n,r,i);return"mfaPendingCredential"in s&&_p(e,"multi-factor-auth-required",{serverResponse:s}),s}(e,"POST","/v1/accounts:signInWithIdp",function(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}(e,t))}
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
 */class _f extends ff{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _f(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_p("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=us(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new _f(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){return gf(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,gf(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,gf(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Vs(t)}return e}}
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
 */class mf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class vf extends mf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
 */class yf extends vf{constructor(){super("facebook.com")}static credential(e){return _f._fromParams({providerId:yf.PROVIDER_ID,signInMethod:yf.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yf.credentialFromTaggedObject(e)}static credentialFromError(e){return yf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return yf.credential(e.oauthAccessToken)}catch(t){return null}}}yf.FACEBOOK_SIGN_IN_METHOD="facebook.com",yf.PROVIDER_ID="facebook.com";
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
class wf extends vf{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _f._fromParams({providerId:wf.PROVIDER_ID,signInMethod:wf.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wf.credentialFromTaggedObject(e)}static credentialFromError(e){return wf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return wf.credential(t,n)}catch(r){return null}}}wf.GOOGLE_SIGN_IN_METHOD="google.com",wf.PROVIDER_ID="google.com";
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
class bf extends vf{constructor(){super("github.com")}static credential(e){return _f._fromParams({providerId:bf.PROVIDER_ID,signInMethod:bf.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bf.credentialFromTaggedObject(e)}static credentialFromError(e){return bf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return bf.credential(e.oauthAccessToken)}catch(t){return null}}}bf.GITHUB_SIGN_IN_METHOD="github.com",bf.PROVIDER_ID="github.com";
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
class Cf extends vf{constructor(){super("twitter.com")}static credential(e,t){return _f._fromParams({providerId:Cf.PROVIDER_ID,signInMethod:Cf.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cf.credentialFromTaggedObject(e)}static credentialFromError(e){return Cf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Cf.credential(t,n)}catch(r){return null}}}Cf.TWITTER_SIGN_IN_METHOD="twitter.com",Cf.PROVIDER_ID="twitter.com";
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
class If{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Gp._fromIdTokenResponse(e,n,r),s=Ef(n);return new If({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ef(n);return new If({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ef(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
 */class Tf extends Ns{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,Tf.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new Tf(e,t,n,r)}}function kf(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Tf._fromErrorAndOperation(e,n,t,r);throw n}))}
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
class Sf{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
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
 */class Pf extends Sf{constructor(){super(window.localStorage,"LOCAL"),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ks();return ef(e)||af(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=cf(),this._shouldAllowMigration=!0,this.boundEventHandler=this.onStorageEvent.bind(this)}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);lf()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Pf.type="LOCAL";const Rf=Pf;
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
 */class Nf extends Sf{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nf.type="SESSION";const xf=Nf;
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
class Of{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Of(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Af(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Of.receivers=[];class Df{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=Af("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Lf(){return window}
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
function Mf(){return void 0!==Lf().WorkerGlobalScope&&"function"==typeof Lf().importScripts}
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
const Ff="firebaseLocalStorageDb";class Uf{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function jf(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function qf(){const e=indexedDB.open(Ff,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Ff);return new Uf(e).toPromise()}(),t(await qf()))}))}))}async function Bf(e,t,n){const r=jf(e,!0).put({fbase_key:t,value:n});return new Uf(r).toPromise()}function Wf(e,t){const n=jf(e,!0).delete(t);return new Uf(n).toPromise()}class Vf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await qf()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Mf()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Of._getInstance(Mf()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Df(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await qf();return await Bf(e,"__sak","1"),await Wf(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Bf(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=jf(e,!1).get(t),r=await new Uf(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Wf(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=jf(e,!1).getAll();return new Uf(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Vf.type="LOCAL";const zf=Vf;
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
 */function Hf(e){return new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=mp("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}
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
function $f(e,t){return t?Ep(t):(wp(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */new Pp(3e4,6e4);class Gf extends ff{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gf(e,this._buildIdpRequest())}_linkToIdToken(e,t){return gf(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return gf(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Kf(e){
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
return async function(e,t,n=!1){const r="signIn",i=await kf(e,r,t),s=await If._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new Gf(e),e.bypassAuthState)}function Yf(e){const{auth:t,user:n}=e;return wp(n,t,"internal-error"),
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
async function(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Bp(e,kf(r,i,t,e),n);wp(s.idToken,r,"internal-error");const o=qp(s.idToken);wp(o,r,"internal-error");const{sub:a}=o;return wp(e.uid===a,r,"user-mismatch"),If._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&_p(r,"user-mismatch"),s}}(n,new Gf(e),e.bypassAuthState)}async function Jf(e){const{auth:t,user:n}=e;return wp(n,t,"internal-error"),async function(e,t,n=!1){const r=await Bp(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return If._forOperation(e,"link",r)}(n,new Gf(e),e.bypassAuthState)}
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
 */class Qf{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kf;case"linkViaPopup":case"linkViaRedirect":return Jf;case"reauthViaPopup":case"reauthViaRedirect":return Yf;default:_p(this.auth,"internal-error")}}resolve(e){Cp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cp(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Xf=new Pp(2e3,1e4);async function Zf(e,t,n){const r=df(e);!function(e,t,n){if(!(t instanceof n))throw n.name!==t.constructor.name&&_p(e,"argument-error"),vp(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}(e,t,mf);const i=$f(r,n);return new eg(r,"signInViaPopup",t,i).executeNotNull()}class eg extends Qf{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,eg.currentPopupAction&&eg.currentPopupAction.cancel(),eg.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return wp(e,this.auth,"internal-error"),e}async onExecution(){Cp(1===this.filter.length,"Popup operations only handle one event");const e=Af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(mp(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(mp(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,eg.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(mp(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Xf.get())};e()}}eg.currentPopupAction=null;
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
const tg=new Map;class ng extends Qf{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=tg.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Jp("pendingRedirect",e.config.apiKey,e.name)}(t),r="true"===await rg(e)._get(n);return await rg(e)._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}tg.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function rg(e){return Ep(e._redirectPersistence)}async function ig(e,t,n=!1){const r=df(e),i=$f(r,t),s=new ng(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
 */class sg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ag(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ag(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(mp(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(og(e))}saveEventToCache(e){this.cachedEventUids.add(og(e)),this.lastProcessedEventTime=Date.now()}}function og(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ag({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const lg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,cg=/^https?/;async function ug(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Ap(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(hg(r))return}catch(n){}_p(e,"unauthorized-domain")}function hg(e){const t=Tp(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!cg.test(n))return!1;if(lg.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const dg=new Pp(3e4,6e4);function pg(){const e=Lf().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function fg(e){return new Promise(((t,n)=>{var r,i,s;function o(){pg(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{pg(),n(mp(e,"network-request-failed"))},timeout:dg.get()})}if(null===(i=null===(r=Lf().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Lf().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return Lf()[t]=()=>{gapi.load?o():n(mp(e,"network-request-failed"))},Hf(`https://apis.google.com/js/api.js?onload=${t}`)}o()}})).catch((e=>{throw gg=null,e}))}let gg=null;
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
const _g=new Pp(5e3,15e3),mg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},vg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yg(e){const t=e.config;wp(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Rp(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:"9.0.0"},i=vg.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Vs(r).slice(1)}`}async function wg(e){const t=await function(e){return gg=gg||fg(e),gg}(e),n=Lf().gapi;return wp(n,e,"internal-error"),t.open({where:document.body,url:yg(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mg,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=mp(e,"network-request-failed"),s=Lf().setTimeout((()=>{r(i)}),_g.get());function o(){Lf().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const bg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Cg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Ig(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bg),{width:r.toString(),height:i.toString(),top:s,left:o}),c=ks().toLowerCase();n&&(a=tf(c)?"_blank":n),Zp(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=ks()){var t;return af(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==a)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",a),new Cg(null);const h=window.open(t||"",a,u);wp(h,e,"popup-blocked");try{h.focus()}catch(d){}return new Cg(h)}function Eg(e,t,n,r,i,s){wp(e.config.authDomain,e,"auth-domain-config-required"),wp(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:"9.0.0",eventId:i};if(t instanceof mf){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",js(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))o[e]=t}if(t instanceof vf){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(o.scopes=e.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const l of Object.keys(a))void 0===a[l]&&delete a[l];return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/__/auth/handler`;return Rp(e,"emulator/auth/handler")}
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
 */(e)}?${Vs(a).slice(1)}`}const Tg=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=xf,this._completeRedirectFn=ig}async _openPopup(e,t,n,r){var i;Cp(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ig(e,Eg(e,t,n,Tp(),r),Af())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Eg(e,t,n,Tp(),r),Lf().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Cp(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await wg(e),n=new sg(e);return t.register("authEvent",(t=>{wp(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),_p(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ug(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cf()||ef()||af()}};var kg;
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
class Sg{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){wp(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
function Pg(e=wo()){const t=_o(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=_o(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Bs(n.getOptions(),null!=t?t:{}))return e;_p(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Tg,persistence:[zf,Rf,xf]})}kg="Browser",go(new Js("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{wp(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),wp(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:kg,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:uf(kg)},s=new hf(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ep);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),go(new Js("auth-internal",(e=>{const t=df(e.getProvider("auth").getImmediate());return new Sg(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),bo("@firebase/auth","0.17.2",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(kg));
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
var Rg=function(){return(Rg=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},Ng={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},xg=Ng;function Og(e){this.mode=xg.MODE_8BIT_BYTE,this.data=e}Og.prototype={getLength:function(e){return this.data.length},write:function(e){for(var t=0;t<this.data.length;t++)e.put(this.data.charCodeAt(t),8)}};var Ag=Og,Dg={L:1,M:0,Q:3,H:2},Lg=Dg;function Mg(e,t){this.totalCount=e,this.dataCount=t}Mg.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],Mg.getRSBlocks=function(e,t){var n=Mg.getRsBlockTable(e,t);if(null==n)throw new Error("bad rs block @ typeNumber:"+e+"/errorCorrectLevel:"+t);for(var r=n.length/3,i=new Array,s=0;s<r;s++)for(var o=n[3*s+0],a=n[3*s+1],l=n[3*s+2],c=0;c<o;c++)i.push(new Mg(a,l));return i},Mg.getRsBlockTable=function(e,t){switch(t){case Lg.L:return Mg.RS_BLOCK_TABLE[4*(e-1)+0];case Lg.M:return Mg.RS_BLOCK_TABLE[4*(e-1)+1];case Lg.Q:return Mg.RS_BLOCK_TABLE[4*(e-1)+2];case Lg.H:return Mg.RS_BLOCK_TABLE[4*(e-1)+3];default:return}};var Fg=Mg;function Ug(){this.buffer=new Array,this.length=0}Ug.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(e,t){for(var n=0;n<t;n++)this.putBit(1==(e>>>t-n-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};for(var jg=Ug,qg={glog:function(e){if(e<1)throw new Error("glog("+e+")");return qg.LOG_TABLE[e]},gexp:function(e){for(;e<0;)e+=255;for(;e>=256;)e-=255;return qg.EXP_TABLE[e]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},Bg=0;Bg<8;Bg++)qg.EXP_TABLE[Bg]=1<<Bg;for(Bg=8;Bg<256;Bg++)qg.EXP_TABLE[Bg]=qg.EXP_TABLE[Bg-4]^qg.EXP_TABLE[Bg-5]^qg.EXP_TABLE[Bg-6]^qg.EXP_TABLE[Bg-8];for(Bg=0;Bg<255;Bg++)qg.LOG_TABLE[qg.EXP_TABLE[Bg]]=Bg;var Wg=qg,Vg=Wg;function zg(e,t){if(null==e.length)throw new Error(e.length+"/"+t);for(var n=0;n<e.length&&0==e[n];)n++;this.num=new Array(e.length-n+t);for(var r=0;r<e.length-n;r++)this.num[r]=e[r+n]}zg.prototype={get:function(e){return this.num[e]},getLength:function(){return this.num.length},multiply:function(e){for(var t=new Array(this.getLength()+e.getLength()-1),n=0;n<this.getLength();n++)for(var r=0;r<e.getLength();r++)t[n+r]^=Vg.gexp(Vg.glog(this.get(n))+Vg.glog(e.get(r)));return new zg(t,0)},mod:function(e){if(this.getLength()-e.getLength()<0)return this;for(var t=Vg.glog(this.get(0))-Vg.glog(e.get(0)),n=new Array(this.getLength()),r=0;r<this.getLength();r++)n[r]=this.get(r);for(r=0;r<e.getLength();r++)n[r]^=Vg.gexp(Vg.glog(e.get(r))+t);return new zg(n,0).mod(e)}};var Hg=Ng,$g=zg,Gg=Wg,Kg=0,Yg=1,Jg=2,Qg=3,Xg=4,Zg=5,e_=6,t_=7,n_={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(e){for(var t=e<<10;n_.getBCHDigit(t)-n_.getBCHDigit(n_.G15)>=0;)t^=n_.G15<<n_.getBCHDigit(t)-n_.getBCHDigit(n_.G15);return(e<<10|t)^n_.G15_MASK},getBCHTypeNumber:function(e){for(var t=e<<12;n_.getBCHDigit(t)-n_.getBCHDigit(n_.G18)>=0;)t^=n_.G18<<n_.getBCHDigit(t)-n_.getBCHDigit(n_.G18);return e<<12|t},getBCHDigit:function(e){for(var t=0;0!=e;)t++,e>>>=1;return t},getPatternPosition:function(e){return n_.PATTERN_POSITION_TABLE[e-1]},getMask:function(e,t,n){switch(e){case Kg:return(t+n)%2==0;case Yg:return t%2==0;case Jg:return n%3==0;case Qg:return(t+n)%3==0;case Xg:return(Math.floor(t/2)+Math.floor(n/3))%2==0;case Zg:return t*n%2+t*n%3==0;case e_:return(t*n%2+t*n%3)%2==0;case t_:return(t*n%3+(t+n)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}},getErrorCorrectPolynomial:function(e){for(var t=new $g([1],0),n=0;n<e;n++)t=t.multiply(new $g([1,Gg.gexp(n)],0));return t},getLengthInBits:function(e,t){if(1<=t&&t<10)switch(e){case Hg.MODE_NUMBER:return 10;case Hg.MODE_ALPHA_NUM:return 9;case Hg.MODE_8BIT_BYTE:case Hg.MODE_KANJI:return 8;default:throw new Error("mode:"+e)}else if(t<27)switch(e){case Hg.MODE_NUMBER:return 12;case Hg.MODE_ALPHA_NUM:return 11;case Hg.MODE_8BIT_BYTE:return 16;case Hg.MODE_KANJI:return 10;default:throw new Error("mode:"+e)}else{if(!(t<41))throw new Error("type:"+t);switch(e){case Hg.MODE_NUMBER:return 14;case Hg.MODE_ALPHA_NUM:return 13;case Hg.MODE_8BIT_BYTE:return 16;case Hg.MODE_KANJI:return 12;default:throw new Error("mode:"+e)}}},getLostPoint:function(e){for(var t=e.getModuleCount(),n=0,r=0;r<t;r++)for(var i=0;i<t;i++){for(var s=0,o=e.isDark(r,i),a=-1;a<=1;a++)if(!(r+a<0||t<=r+a))for(var l=-1;l<=1;l++)i+l<0||t<=i+l||0==a&&0==l||o==e.isDark(r+a,i+l)&&s++;s>5&&(n+=3+s-5)}for(r=0;r<t-1;r++)for(i=0;i<t-1;i++){var c=0;e.isDark(r,i)&&c++,e.isDark(r+1,i)&&c++,e.isDark(r,i+1)&&c++,e.isDark(r+1,i+1)&&c++,0!=c&&4!=c||(n+=3)}for(r=0;r<t;r++)for(i=0;i<t-6;i++)e.isDark(r,i)&&!e.isDark(r,i+1)&&e.isDark(r,i+2)&&e.isDark(r,i+3)&&e.isDark(r,i+4)&&!e.isDark(r,i+5)&&e.isDark(r,i+6)&&(n+=40);for(i=0;i<t;i++)for(r=0;r<t-6;r++)e.isDark(r,i)&&!e.isDark(r+1,i)&&e.isDark(r+2,i)&&e.isDark(r+3,i)&&e.isDark(r+4,i)&&!e.isDark(r+5,i)&&e.isDark(r+6,i)&&(n+=40);var u=0;for(i=0;i<t;i++)for(r=0;r<t;r++)e.isDark(r,i)&&u++;return n+=10*(Math.abs(100*u/t/t-50)/5)}},r_=Ag,i_=Fg,s_=jg,o_=n_,a_=zg;function l_(e,t){this.typeNumber=e,this.errorCorrectLevel=t,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}var c_=l_.prototype;c_.addData=function(e){var t=new r_(e);this.dataList.push(t),this.dataCache=null},c_.isDark=function(e,t){if(e<0||this.moduleCount<=e||t<0||this.moduleCount<=t)throw new Error(e+","+t);return this.modules[e][t]},c_.getModuleCount=function(){return this.moduleCount},c_.make=function(){if(this.typeNumber<1){var e=1;for(e=1;e<40;e++){for(var t=i_.getRSBlocks(e,this.errorCorrectLevel),n=new s_,r=0,i=0;i<t.length;i++)r+=t[i].dataCount;for(i=0;i<this.dataList.length;i++){var s=this.dataList[i];n.put(s.mode,4),n.put(s.getLength(),o_.getLengthInBits(s.mode,e)),s.write(n)}if(n.getLengthInBits()<=8*r)break}this.typeNumber=e}this.makeImpl(!1,this.getBestMaskPattern())},c_.makeImpl=function(e,t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){this.modules[n]=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++)this.modules[n][r]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(e,t),this.typeNumber>=7&&this.setupTypeNumber(e),null==this.dataCache&&(this.dataCache=l_.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,t)},c_.setupPositionProbePattern=function(e,t){for(var n=-1;n<=7;n++)if(!(e+n<=-1||this.moduleCount<=e+n))for(var r=-1;r<=7;r++)t+r<=-1||this.moduleCount<=t+r||(this.modules[e+n][t+r]=0<=n&&n<=6&&(0==r||6==r)||0<=r&&r<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=r&&r<=4)},c_.getBestMaskPattern=function(){for(var e=0,t=0,n=0;n<8;n++){this.makeImpl(!0,n);var r=o_.getLostPoint(this);(0==n||e>r)&&(e=r,t=n)}return t},c_.createMovieClip=function(e,t,n){var r=e.createEmptyMovieClip(t,n);this.make();for(var i=0;i<this.modules.length;i++)for(var s=1*i,o=0;o<this.modules[i].length;o++){var a=1*o;this.modules[i][o]&&(r.beginFill(0,100),r.moveTo(a,s),r.lineTo(a+1,s),r.lineTo(a+1,s+1),r.lineTo(a,s+1),r.endFill())}return r},c_.setupTimingPattern=function(){for(var e=8;e<this.moduleCount-8;e++)null==this.modules[e][6]&&(this.modules[e][6]=e%2==0);for(var t=8;t<this.moduleCount-8;t++)null==this.modules[6][t]&&(this.modules[6][t]=t%2==0)},c_.setupPositionAdjustPattern=function(){for(var e=o_.getPatternPosition(this.typeNumber),t=0;t<e.length;t++)for(var n=0;n<e.length;n++){var r=e[t],i=e[n];if(null==this.modules[r][i])for(var s=-2;s<=2;s++)for(var o=-2;o<=2;o++)this.modules[r+s][i+o]=-2==s||2==s||-2==o||2==o||0==s&&0==o}},c_.setupTypeNumber=function(e){for(var t=o_.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var r=!e&&1==(t>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=r}for(n=0;n<18;n++){r=!e&&1==(t>>n&1);this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=r}},c_.setupTypeInfo=function(e,t){for(var n=this.errorCorrectLevel<<3|t,r=o_.getBCHTypeInfo(n),i=0;i<15;i++){var s=!e&&1==(r>>i&1);i<6?this.modules[i][8]=s:i<8?this.modules[i+1][8]=s:this.modules[this.moduleCount-15+i][8]=s}for(i=0;i<15;i++){s=!e&&1==(r>>i&1);i<8?this.modules[8][this.moduleCount-i-1]=s:i<9?this.modules[8][15-i-1+1]=s:this.modules[8][15-i-1]=s}this.modules[this.moduleCount-8][8]=!e},c_.mapData=function(e,t){for(var n=-1,r=this.moduleCount-1,i=7,s=0,o=this.moduleCount-1;o>0;o-=2)for(6==o&&o--;;){for(var a=0;a<2;a++)if(null==this.modules[r][o-a]){var l=!1;s<e.length&&(l=1==(e[s]>>>i&1)),o_.getMask(t,r,o-a)&&(l=!l),this.modules[r][o-a]=l,-1==--i&&(s++,i=7)}if((r+=n)<0||this.moduleCount<=r){r-=n,n=-n;break}}},l_.PAD0=236,l_.PAD1=17,l_.createData=function(e,t,n){for(var r=i_.getRSBlocks(e,t),i=new s_,s=0;s<n.length;s++){var o=n[s];i.put(o.mode,4),i.put(o.getLength(),o_.getLengthInBits(o.mode,e)),o.write(i)}var a=0;for(s=0;s<r.length;s++)a+=r[s].dataCount;if(i.getLengthInBits()>8*a)throw new Error("code length overflow. ("+i.getLengthInBits()+">"+8*a+")");for(i.getLengthInBits()+4<=8*a&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(!1);for(;!(i.getLengthInBits()>=8*a||(i.put(l_.PAD0,8),i.getLengthInBits()>=8*a));)i.put(l_.PAD1,8);return l_.createBytes(i,r)},l_.createBytes=function(e,t){for(var n=0,r=0,i=0,s=new Array(t.length),o=new Array(t.length),a=0;a<t.length;a++){var l=t[a].dataCount,c=t[a].totalCount-l;r=Math.max(r,l),i=Math.max(i,c),s[a]=new Array(l);for(var u=0;u<s[a].length;u++)s[a][u]=255&e.buffer[u+n];n+=l;var h=o_.getErrorCorrectPolynomial(c),d=new a_(s[a],h.getLength()-1).mod(h);o[a]=new Array(h.getLength()-1);for(u=0;u<o[a].length;u++){var p=u+d.getLength()-o[a].length;o[a][u]=p>=0?d.get(p):0}}var f=0;for(u=0;u<t.length;u++)f+=t[u].totalCount;var g=new Array(f),_=0;for(u=0;u<r;u++)for(a=0;a<t.length;a++)u<s[a].length&&(g[_++]=s[a][u]);for(u=0;u<i;u++)for(a=0;a<t.length;a++)u<o[a].length&&(g[_++]=o[a][u]);return g};var u_=l_,h_=Dg,d_=function(e,t){var n=new u_((t=t||{}).typeNumber||-1,t.errorCorrectLevel||h_.H);return n.addData(e),n.make(),n};d_.ErrorCorrectLevel=h_;var p_=d_,f_=function(){try{(new Path2D).addPath(new Path2D)}catch(e){return!1}return!0}();function g_(e,t){return p_(function(e){for(var t="",n=0;n<e.length;n++){var r=e.charCodeAt(n);r<128?t+=String.fromCharCode(r):r<2048?(t+=String.fromCharCode(192|r>>6),t+=String.fromCharCode(128|63&r)):r<55296||r>=57344?(t+=String.fromCharCode(224|r>>12),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r)):(n++,r=65536+((1023&r)<<10|1023&e.charCodeAt(n)),t+=String.fromCharCode(240|r>>18),t+=String.fromCharCode(128|r>>12&63),t+=String.fromCharCode(128|r>>6&63),t+=String.fromCharCode(128|63&r))}return t}(e),{typeNumber:-1,errorCorrectLevel:t})}function __(e){return e in p_.ErrorCorrectLevel}function m_(e,t){void 0===t&&(t=0);var n=[];return e.forEach((function(e,r){var i=null;e.forEach((function(s,o){if(!s&&null!==i)return n.push("M"+(i+t)+" "+(r+t)+"h"+(o-i)+"v1H"+(i+t)+"z"),void(i=null);if(o!==e.length-1)s&&null===i&&(i=o);else{if(!s)return;null===i?n.push("M"+(o+t)+","+(r+t)+" h1v1H"+(o+t)+"z"):n.push("M"+(i+t)+","+(r+t)+" h"+(o+1-i)+"v1H"+(i+t)+"z")}}))})),n.join("")}var v_={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:"H",validator:function(e){return __(e)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},y_=Rg(Rg({},v_),{renderAs:{type:String,required:!1,default:"canvas",validator:function(e){return["canvas","svg"].indexOf(e)>-1}}}),w_=Mt({name:"QRCodeSvg",props:v_,setup:function(e){var t=pt(0),n=pt(""),r=function(){var r=e.value,i=e.level,s=e.margin,o=g_(r,p_.ErrorCorrectLevel[i]).modules;t.value=o.length+2*s,n.value=m_(o,s)};return r(),Kt(r),function(){return ri("svg",{width:e.size,height:e.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+t.value+" "+t.value},[ri("path",{fill:e.background,d:"M0,0 h"+t.value+"v"+t.value+"H0z"}),ri("path",{fill:e.foreground,d:n.value})])}}}),b_=Mt({name:"QRCodeCanvas",props:v_,setup:function(e){var t=pt(null),n=function(){var n=e.value,r=e.level,i=e.size,s=e.margin,o=e.background,a=e.foreground,l=g_(n,p_.ErrorCorrectLevel[r]).modules,c=l.length+2*s,u=t.value;if(u){var h=u.getContext("2d");if(h){var d=window.devicePixelRatio||1,p=i/c*d;u.height=u.width=i*d,h.scale(p,p),h.fillStyle=o,h.fillRect(0,0,c,c),h.fillStyle=a,f_?h.fill(new Path2D(m_(l,s))):l.forEach((function(e,t){e.forEach((function(e,n){e&&h.fillRect(n+s,t+s,1,1)}))}))}}};return $t(n),Kt(n),function(){return ri("canvas",{ref:t,style:{width:e.size+"px",height:e.size+"px"}})}}}),C_=Mt({name:"Qrcode",render:function(){var e=this.$props,t=e.renderAs,n=e.value,r=e.size,i=e.margin,s=e.level,o=e.background,a=e.foreground,l=r>>>0,c=i>>>0,u=__(s)?s:"H";return ri("svg"===t?w_:b_,{value:n,size:l,margin:c,level:u,background:o,foreground:a})},props:y_});export{np as A,Qa as B,ta as C,ts as D,yo as E,jn as F,wf as G,xi as H,C_ as Q,is as a,Pt as b,Jn as c,Yn as d,nr as e,ur as f,or as g,hr as h,rr as i,sr as j,up as k,Xd as l,ss as m,op as n,Hn as o,St as p,Pg as q,Mn as r,Zf as s,l as t,Pi as u,ep as v,Rt as w,tp as x,kn as y,Ti as z};
