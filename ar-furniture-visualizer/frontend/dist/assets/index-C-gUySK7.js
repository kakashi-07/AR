function U_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function F_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ig={exports:{}},jl={},rg={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.element"),O_=Symbol.for("react.portal"),k_=Symbol.for("react.fragment"),z_=Symbol.for("react.strict_mode"),B_=Symbol.for("react.profiler"),V_=Symbol.for("react.provider"),H_=Symbol.for("react.context"),G_=Symbol.for("react.forward_ref"),W_=Symbol.for("react.suspense"),j_=Symbol.for("react.memo"),X_=Symbol.for("react.lazy"),Th=Symbol.iterator;function Y_(t){return t===null||typeof t!="object"?null:(t=Th&&t[Th]||t["@@iterator"],typeof t=="function"?t:null)}var sg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ag=Object.assign,og={};function ks(t,e,n){this.props=t,this.context=e,this.refs=og,this.updater=n||sg}ks.prototype.isReactComponent={};ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function lg(){}lg.prototype=ks.prototype;function of(t,e,n){this.props=t,this.context=e,this.refs=og,this.updater=n||sg}var lf=of.prototype=new lg;lf.constructor=of;ag(lf,ks.prototype);lf.isPureReactComponent=!0;var Ah=Array.isArray,cg=Object.prototype.hasOwnProperty,cf={current:null},ug={key:!0,ref:!0,__self:!0,__source:!0};function dg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)cg.call(e,i)&&!ug.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ga,type:t,key:s,ref:a,props:r,_owner:cf.current}}function $_(t,e){return{$$typeof:Ga,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function uf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ga}function q_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ch=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?q_(""+t.key):e.toString(36)}function Yo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ga:case O_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+xc(a,0):i,Ah(r)?(n="",t!=null&&(n=t.replace(Ch,"$&/")+"/"),Yo(r,e,n,"",function(c){return c})):r!=null&&(uf(r)&&(r=$_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ch,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ah(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+xc(s,o);a+=Yo(s,e,n,l,r)}else if(l=Y_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+xc(s,o++),a+=Yo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function io(t,e,n){if(t==null)return t;var i=[],r=0;return Yo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function K_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},$o={transition:null},Z_={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:$o,ReactCurrentOwner:cf};function fg(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:io,forEach:function(t,e,n){io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return io(t,function(){e++}),e},toArray:function(t){return io(t,function(e){return e})||[]},only:function(t){if(!uf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=ks;Xe.Fragment=k_;Xe.Profiler=B_;Xe.PureComponent=of;Xe.StrictMode=z_;Xe.Suspense=W_;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_;Xe.act=fg;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=ag({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=cf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)cg.call(e,l)&&!ug.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Ga,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:H_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:V_,_context:t},t.Consumer=t};Xe.createElement=dg;Xe.createFactory=function(t){var e=dg.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:G_,render:t}};Xe.isValidElement=uf;Xe.lazy=function(t){return{$$typeof:X_,_payload:{_status:-1,_result:t},_init:K_}};Xe.memo=function(t,e){return{$$typeof:j_,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=$o.transition;$o.transition={};try{t()}finally{$o.transition=e}};Xe.unstable_act=fg;Xe.useCallback=function(t,e){return Kt.current.useCallback(t,e)};Xe.useContext=function(t){return Kt.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return Kt.current.useEffect(t,e)};Xe.useId=function(){return Kt.current.useId()};Xe.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return Kt.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};Xe.useRef=function(t){return Kt.current.useRef(t)};Xe.useState=function(t){return Kt.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return Kt.current.useTransition()};Xe.version="18.3.1";rg.exports=Xe;var O=rg.exports;const hg=F_(O),Q_=U_({__proto__:null,default:hg},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_=O,ex=Symbol.for("react.element"),tx=Symbol.for("react.fragment"),nx=Object.prototype.hasOwnProperty,ix=J_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rx={key:!0,ref:!0,__self:!0,__source:!0};function pg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)nx.call(e,i)&&!rx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ex,type:t,key:s,ref:a,props:r,_owner:ix.current}}jl.Fragment=tx;jl.jsx=pg;jl.jsxs=pg;ig.exports=jl;var M=ig.exports,Tu={},mg={exports:{}},_n={},gg={exports:{}},vg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,B){var Y=b.length;b.push(B);e:for(;0<Y;){var ne=Y-1>>>1,ye=b[ne];if(0<r(ye,B))b[ne]=B,b[Y]=ye,Y=ne;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var B=b[0],Y=b.pop();if(Y!==B){b[0]=Y;e:for(var ne=0,ye=b.length,Re=ye>>>1;ne<Re;){var $=2*(ne+1)-1,re=b[$],pe=$+1,fe=b[pe];if(0>r(re,Y))pe<ye&&0>r(fe,re)?(b[ne]=fe,b[pe]=Y,ne=pe):(b[ne]=re,b[$]=Y,ne=$);else if(pe<ye&&0>r(fe,Y))b[ne]=fe,b[pe]=Y,ne=pe;else break e}}return B}function r(b,B){var Y=b.sortIndex-B.sortIndex;return Y!==0?Y:b.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,f=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=b)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function E(b){if(x=!1,v(b),!_)if(n(l)!==null)_=!0,I(L);else{var B=n(c);B!==null&&F(E,B.startTime-b)}}function L(b,B){_=!1,x&&(x=!1,u(N),N=-1),m=!0;var Y=f;try{for(v(B),h=n(l);h!==null&&(!(h.expirationTime>B)||b&&!P());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,f=h.priorityLevel;var ye=ne(h.expirationTime<=B);B=t.unstable_now(),typeof ye=="function"?h.callback=ye:h===n(l)&&i(l),v(B)}else i(l);h=n(l)}if(h!==null)var Re=!0;else{var $=n(c);$!==null&&F(E,$.startTime-B),Re=!1}return Re}finally{h=null,f=Y,m=!1}}var C=!1,A=null,N=-1,T=5,y=-1;function P(){return!(t.unstable_now()-y<T)}function V(){if(A!==null){var b=t.unstable_now();y=b;var B=!0;try{B=A(!0,b)}finally{B?W():(C=!1,A=null)}}else C=!1}var W;if(typeof g=="function")W=function(){g(V)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,K=q.port2;q.port1.onmessage=V,W=function(){K.postMessage(null)}}else W=function(){p(V,0)};function I(b){A=b,C||(C=!0,W())}function F(b,B){N=p(function(){b(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,I(L))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var Y=f;f=B;try{return b()}finally{f=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,B){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var Y=f;f=b;try{return B()}finally{f=Y}},t.unstable_scheduleCallback=function(b,B,Y){var ne=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ne+Y:ne):Y=ne,b){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=Y+ye,b={id:d++,callback:B,priorityLevel:b,startTime:Y,expirationTime:ye,sortIndex:-1},Y>ne?(b.sortIndex=Y,e(c,b),n(l)===null&&b===n(c)&&(x?(u(N),N=-1):x=!0,F(E,Y-ne))):(b.sortIndex=ye,e(l,b),_||m||(_=!0,I(L))),b},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(b){var B=f;return function(){var Y=f;f=B;try{return b.apply(this,arguments)}finally{f=Y}}}})(vg);gg.exports=vg;var sx=gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=O,vn=sx;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _g=new Set,Ea={};function Lr(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(Ea[t]=e,t=0;t<e.length;t++)_g.add(e[t])}var gi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=Object.prototype.hasOwnProperty,ox=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rh={},bh={};function lx(t){return Au.call(bh,t)?!0:Au.call(Rh,t)?!1:ox.test(t)?bh[t]=!0:(Rh[t]=!0,!1)}function cx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ux(t,e,n,i){if(e===null||typeof e>"u"||cx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var df=/[\-:]([a-z])/g;function ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(df,ff);Bt[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(df,ff);Bt[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(df,ff);Bt[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function hf(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ux(e,n,r,i)&&(n=null),i||r===null?lx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Si=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),ns=Symbol.for("react.portal"),is=Symbol.for("react.fragment"),pf=Symbol.for("react.strict_mode"),Cu=Symbol.for("react.profiler"),xg=Symbol.for("react.provider"),yg=Symbol.for("react.context"),mf=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),bu=Symbol.for("react.suspense_list"),gf=Symbol.for("react.memo"),Pi=Symbol.for("react.lazy"),Sg=Symbol.for("react.offscreen"),Ph=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=Ph&&t[Ph]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Object.assign,yc;function aa(t){if(yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+t}var Sc=!1;function Mc(t,e){if(!t||Sc)return"";Sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?aa(t):""}function dx(t){switch(t.tag){case 5:return aa(t.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return t=Mc(t.type,!1),t;case 11:return t=Mc(t.type.render,!1),t;case 1:return t=Mc(t.type,!0),t;default:return""}}function Pu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case is:return"Fragment";case ns:return"Portal";case Cu:return"Profiler";case pf:return"StrictMode";case Ru:return"Suspense";case bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yg:return(t.displayName||"Context")+".Consumer";case xg:return(t._context.displayName||"Context")+".Provider";case mf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gf:return e=t.displayName||null,e!==null?e:Pu(t.type)||"Memo";case Pi:e=t._payload,t=t._init;try{return Pu(t(e))}catch{}}return null}function fx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pu(e);case 8:return e===pf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function $i(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hx(t){var e=Mg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function so(t){t._valueTracker||(t._valueTracker=hx(t))}function Eg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lu(t,e){var n=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Lh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=$i(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wg(t,e){e=e.checked,e!=null&&hf(t,"checked",e,!1)}function Nu(t,e){wg(t,e);var n=$i(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Du(t,e.type,n):e.hasOwnProperty("defaultValue")&&Du(t,e.type,$i(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Du(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oa=Array.isArray;function ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+$i(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Iu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(oa(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:$i(n)}}function Tg(t,e){var n=$i(e.value),i=$i(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ih(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ao,Cg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ao.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function wa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},px=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(t){px.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fa[e]=fa[t]})});function Rg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fa.hasOwnProperty(t)&&fa[t]?(""+e).trim():e+"px"}function bg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Rg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var mx=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fu(t,e){if(e){if(mx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Ou(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ku=null;function vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zu=null,gs=null,vs=null;function Uh(t){if(t=Xa(t)){if(typeof zu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=Kl(e),zu(t.stateNode,t.type,e))}}function Pg(t){gs?vs?vs.push(t):vs=[t]:gs=t}function Lg(){if(gs){var t=gs,e=vs;if(vs=gs=null,Uh(t),e)for(t=0;t<e.length;t++)Uh(e[t])}}function Ng(t,e){return t(e)}function Dg(){}var Ec=!1;function Ig(t,e,n){if(Ec)return t(e,n);Ec=!0;try{return Ng(t,e,n)}finally{Ec=!1,(gs!==null||vs!==null)&&(Dg(),Lg())}}function Ta(t,e){var n=t.stateNode;if(n===null)return null;var i=Kl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Bu=!1;if(gi)try{var js={};Object.defineProperty(js,"passive",{get:function(){Bu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Bu=!1}function gx(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ha=!1,fl=null,hl=!1,Vu=null,vx={onError:function(t){ha=!0,fl=t}};function _x(t,e,n,i,r,s,a,o,l){ha=!1,fl=null,gx.apply(vx,arguments)}function xx(t,e,n,i,r,s,a,o,l){if(_x.apply(this,arguments),ha){if(ha){var c=fl;ha=!1,fl=null}else throw Error(ae(198));hl||(hl=!0,Vu=c)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ug(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fh(t){if(Nr(t)!==t)throw Error(ae(188))}function yx(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Fh(r),t;if(s===i)return Fh(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function Fg(t){return t=yx(t),t!==null?Og(t):null}function Og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Og(t);if(e!==null)return e;t=t.sibling}return null}var kg=vn.unstable_scheduleCallback,Oh=vn.unstable_cancelCallback,Sx=vn.unstable_shouldYield,Mx=vn.unstable_requestPaint,_t=vn.unstable_now,Ex=vn.unstable_getCurrentPriorityLevel,_f=vn.unstable_ImmediatePriority,zg=vn.unstable_UserBlockingPriority,pl=vn.unstable_NormalPriority,wx=vn.unstable_LowPriority,Bg=vn.unstable_IdlePriority,Xl=null,Zn=null;function Tx(t){if(Zn&&typeof Zn.onCommitFiberRoot=="function")try{Zn.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:Rx,Ax=Math.log,Cx=Math.LN2;function Rx(t){return t>>>=0,t===0?32:31-(Ax(t)/Cx|0)|0}var oo=64,lo=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=la(o):(s&=a,s!==0&&(i=la(s)))}else a=n&~r,a!==0?i=la(a):s!==0&&(i=la(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function bx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Px(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Bn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=bx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Hu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Vg(){var t=oo;return oo<<=1,!(oo&4194240)&&(oo=64),t}function wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Wa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function Lx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function Hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gg,yf,Wg,jg,Xg,Gu=!1,co=[],ki=null,zi=null,Bi=null,Aa=new Map,Ca=new Map,Ni=[],Nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kh(t,e){switch(t){case"focusin":case"focusout":ki=null;break;case"dragenter":case"dragleave":zi=null;break;case"mouseover":case"mouseout":Bi=null;break;case"pointerover":case"pointerout":Aa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ca.delete(e.pointerId)}}function Xs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&yf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Dx(t,e,n,i,r){switch(e){case"focusin":return ki=Xs(ki,t,e,n,i,r),!0;case"dragenter":return zi=Xs(zi,t,e,n,i,r),!0;case"mouseover":return Bi=Xs(Bi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Aa.set(s,Xs(Aa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ca.set(s,Xs(Ca.get(s)||null,t,e,n,i,r)),!0}return!1}function Yg(t){var e=gr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ug(n),e!==null){t.blockedOn=e,Xg(t.priority,function(){Wg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function qo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ku=i,n.target.dispatchEvent(i),ku=null}else return e=Xa(n),e!==null&&yf(e),t.blockedOn=n,!1;e.shift()}return!0}function zh(t,e,n){qo(t)&&n.delete(e)}function Ix(){Gu=!1,ki!==null&&qo(ki)&&(ki=null),zi!==null&&qo(zi)&&(zi=null),Bi!==null&&qo(Bi)&&(Bi=null),Aa.forEach(zh),Ca.forEach(zh)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Gu||(Gu=!0,vn.unstable_scheduleCallback(vn.unstable_NormalPriority,Ix)))}function Ra(t){function e(r){return Ys(r,t)}if(0<co.length){Ys(co[0],t);for(var n=1;n<co.length;n++){var i=co[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ki!==null&&Ys(ki,t),zi!==null&&Ys(zi,t),Bi!==null&&Ys(Bi,t),Aa.forEach(e),Ca.forEach(e),n=0;n<Ni.length;n++)i=Ni[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ni.length&&(n=Ni[0],n.blockedOn===null);)Yg(n),n.blockedOn===null&&Ni.shift()}var _s=Si.ReactCurrentBatchConfig,gl=!0;function Ux(t,e,n,i){var r=nt,s=_s.transition;_s.transition=null;try{nt=1,Sf(t,e,n,i)}finally{nt=r,_s.transition=s}}function Fx(t,e,n,i){var r=nt,s=_s.transition;_s.transition=null;try{nt=4,Sf(t,e,n,i)}finally{nt=r,_s.transition=s}}function Sf(t,e,n,i){if(gl){var r=Wu(t,e,n,i);if(r===null)Ic(t,e,i,vl,n),kh(t,i);else if(Dx(r,t,e,n,i))i.stopPropagation();else if(kh(t,i),e&4&&-1<Nx.indexOf(t)){for(;r!==null;){var s=Xa(r);if(s!==null&&Gg(s),s=Wu(t,e,n,i),s===null&&Ic(t,e,i,vl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ic(t,e,i,null,n)}}var vl=null;function Wu(t,e,n,i){if(vl=null,t=vf(i),t=gr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ug(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vl=t,null}function $g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ex()){case _f:return 1;case zg:return 4;case pl:case wx:return 16;case Bg:return 536870912;default:return 16}default:return 16}}var Ui=null,Mf=null,Ko=null;function qg(){if(Ko)return Ko;var t,e=Mf,n=e.length,i,r="value"in Ui?Ui.value:Ui.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ko=r.slice(t,1<i?1-i:void 0)}function Zo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function uo(){return!0}function Bh(){return!1}function xn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?uo:Bh,this.isPropagationStopped=Bh,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),e}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=xn(zs),ja=pt({},zs,{view:0,detail:0}),Ox=xn(ja),Tc,Ac,$s,Yl=pt({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(Tc=t.screenX-$s.screenX,Ac=t.screenY-$s.screenY):Ac=Tc=0,$s=t),Tc)},movementY:function(t){return"movementY"in t?t.movementY:Ac}}),Vh=xn(Yl),kx=pt({},Yl,{dataTransfer:0}),zx=xn(kx),Bx=pt({},ja,{relatedTarget:0}),Cc=xn(Bx),Vx=pt({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=xn(Vx),Gx=pt({},zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wx=xn(Gx),jx=pt({},zs,{data:0}),Hh=xn(jx),Xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$x[t])?!!e[t]:!1}function wf(){return qx}var Kx=pt({},ja,{key:function(t){if(t.key){var e=Xx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Zo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(t){return t.type==="keypress"?Zo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Zo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zx=xn(Kx),Qx=pt({},Yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gh=xn(Qx),Jx=pt({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),ey=xn(Jx),ty=pt({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=xn(ty),iy=pt({},Yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=xn(iy),sy=[9,13,27,32],Tf=gi&&"CompositionEvent"in window,pa=null;gi&&"documentMode"in document&&(pa=document.documentMode);var ay=gi&&"TextEvent"in window&&!pa,Kg=gi&&(!Tf||pa&&8<pa&&11>=pa),Wh=" ",jh=!1;function Zg(t,e){switch(t){case"keyup":return sy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function oy(t,e){switch(t){case"compositionend":return Qg(e);case"keypress":return e.which!==32?null:(jh=!0,Wh);case"textInput":return t=e.data,t===Wh&&jh?null:t;default:return null}}function ly(t,e){if(rs)return t==="compositionend"||!Tf&&Zg(t,e)?(t=qg(),Ko=Mf=Ui=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Kg&&e.locale!=="ko"?null:e.data;default:return null}}var cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cy[t.type]:e==="textarea"}function Jg(t,e,n,i){Pg(i),e=_l(e,"onChange"),0<e.length&&(n=new Ef("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ma=null,ba=null;function uy(t){u0(t,0)}function $l(t){var e=os(t);if(Eg(e))return t}function dy(t,e){if(t==="change")return e}var e0=!1;if(gi){var Rc;if(gi){var bc="oninput"in document;if(!bc){var Yh=document.createElement("div");Yh.setAttribute("oninput","return;"),bc=typeof Yh.oninput=="function"}Rc=bc}else Rc=!1;e0=Rc&&(!document.documentMode||9<document.documentMode)}function $h(){ma&&(ma.detachEvent("onpropertychange",t0),ba=ma=null)}function t0(t){if(t.propertyName==="value"&&$l(ba)){var e=[];Jg(e,ba,t,vf(t)),Ig(uy,e)}}function fy(t,e,n){t==="focusin"?($h(),ma=e,ba=n,ma.attachEvent("onpropertychange",t0)):t==="focusout"&&$h()}function hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return $l(ba)}function py(t,e){if(t==="click")return $l(e)}function my(t,e){if(t==="input"||t==="change")return $l(e)}function gy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Hn=typeof Object.is=="function"?Object.is:gy;function Pa(t,e){if(Hn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Au.call(e,r)||!Hn(t[r],e[r]))return!1}return!0}function qh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kh(t,e){var n=qh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=qh(n)}}function n0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i0(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function Af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vy(t){var e=i0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n0(n.ownerDocument.documentElement,n)){if(i!==null&&Af(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Kh(n,s);var a=Kh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _y=gi&&"documentMode"in document&&11>=document.documentMode,ss=null,ju=null,ga=null,Xu=!1;function Zh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xu||ss==null||ss!==dl(i)||(i=ss,"selectionStart"in i&&Af(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ga&&Pa(ga,i)||(ga=i,i=_l(ju,"onSelect"),0<i.length&&(e=new Ef("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ss)))}function fo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},Pc={},r0={};gi&&(r0=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function ql(t){if(Pc[t])return Pc[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r0)return Pc[t]=e[n];return t}var s0=ql("animationend"),a0=ql("animationiteration"),o0=ql("animationstart"),l0=ql("transitionend"),c0=new Map,Qh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,e){c0.set(t,e),Lr(e,[t])}for(var Lc=0;Lc<Qh.length;Lc++){var Nc=Qh[Lc],xy=Nc.toLowerCase(),yy=Nc[0].toUpperCase()+Nc.slice(1);Qi(xy,"on"+yy)}Qi(s0,"onAnimationEnd");Qi(a0,"onAnimationIteration");Qi(o0,"onAnimationStart");Qi("dblclick","onDoubleClick");Qi("focusin","onFocus");Qi("focusout","onBlur");Qi(l0,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Lr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Jh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,xx(i,e,void 0,t),t.currentTarget=null}function u0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Jh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Jh(r,o,c),s=l}}}if(hl)throw t=Vu,hl=!1,Vu=null,t}function at(t,e){var n=e[Zu];n===void 0&&(n=e[Zu]=new Set);var i=t+"__bubble";n.has(i)||(d0(e,t,2,!1),n.add(i))}function Dc(t,e,n){var i=0;e&&(i|=4),d0(n,t,i,e)}var ho="_reactListening"+Math.random().toString(36).slice(2);function La(t){if(!t[ho]){t[ho]=!0,_g.forEach(function(n){n!=="selectionchange"&&(Sy.has(n)||Dc(n,!1,t),Dc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ho]||(e[ho]=!0,Dc("selectionchange",!1,e))}}function d0(t,e,n,i){switch($g(e)){case 1:var r=Ux;break;case 4:r=Fx;break;default:r=Sf}n=r.bind(null,e,n,t),r=void 0,!Bu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ic(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=gr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Ig(function(){var c=s,d=vf(n),h=[];e:{var f=c0.get(t);if(f!==void 0){var m=Ef,_=t;switch(t){case"keypress":if(Zo(n)===0)break e;case"keydown":case"keyup":m=Zx;break;case"focusin":_="focus",m=Cc;break;case"focusout":_="blur",m=Cc;break;case"beforeblur":case"afterblur":m=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Vh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ey;break;case s0:case a0:case o0:m=Hx;break;case l0:m=ny;break;case"scroll":m=Ox;break;case"wheel":m=ry;break;case"copy":case"cut":case"paste":m=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Gh}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,v;g!==null;){v=g;var E=v.stateNode;if(v.tag===5&&E!==null&&(v=E,u!==null&&(E=Ta(g,u),E!=null&&x.push(Na(g,E,v)))),p)break;g=g.return}0<x.length&&(f=new m(f,_,null,n,d),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==ku&&(_=n.relatedTarget||n.fromElement)&&(gr(_)||_[vi]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?gr(_):null,_!==null&&(p=Nr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=Vh,E="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Gh,E="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?f:os(m),v=_==null?f:os(_),f=new x(E,g+"leave",m,n,d),f.target=p,f.relatedTarget=v,E=null,gr(d)===c&&(x=new x(u,g+"enter",_,n,d),x.target=v,x.relatedTarget=p,E=x),p=E,m&&_)t:{for(x=m,u=_,g=0,v=x;v;v=kr(v))g++;for(v=0,E=u;E;E=kr(E))v++;for(;0<g-v;)x=kr(x),g--;for(;0<v-g;)u=kr(u),v--;for(;g--;){if(x===u||u!==null&&x===u.alternate)break t;x=kr(x),u=kr(u)}x=null}else x=null;m!==null&&ep(h,f,m,x,!1),_!==null&&p!==null&&ep(h,p,_,x,!0)}}e:{if(f=c?os(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var L=dy;else if(Xh(f))if(e0)L=my;else{L=hy;var C=fy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(L=py);if(L&&(L=L(t,c))){Jg(h,L,n,d);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Du(f,"number",f.value)}switch(C=c?os(c):window,t){case"focusin":(Xh(C)||C.contentEditable==="true")&&(ss=C,ju=c,ga=null);break;case"focusout":ga=ju=ss=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,Zh(h,n,d);break;case"selectionchange":if(_y)break;case"keydown":case"keyup":Zh(h,n,d)}var A;if(Tf)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else rs?Zg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Kg&&n.locale!=="ko"&&(rs||N!=="onCompositionStart"?N==="onCompositionEnd"&&rs&&(A=qg()):(Ui=d,Mf="value"in Ui?Ui.value:Ui.textContent,rs=!0)),C=_l(c,N),0<C.length&&(N=new Hh(N,t,null,n,d),h.push({event:N,listeners:C}),A?N.data=A:(A=Qg(n),A!==null&&(N.data=A)))),(A=ay?oy(t,n):ly(t,n))&&(c=_l(c,"onBeforeInput"),0<c.length&&(d=new Hh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=A))}u0(h,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function _l(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ta(t,n),s!=null&&i.unshift(Na(t,s,r)),s=Ta(t,e),s!=null&&i.push(Na(t,s,r))),t=t.return}return i}function kr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ep(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ta(n,s),l!=null&&a.unshift(Na(n,l,o))):r||(l=Ta(n,s),l!=null&&a.push(Na(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var My=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function tp(t){return(typeof t=="string"?t:""+t).replace(My,`
`).replace(Ey,"")}function po(t,e,n){if(e=tp(e),tp(t)!==e&&n)throw Error(ae(425))}function xl(){}var Yu=null,$u=null;function qu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,wy=typeof clearTimeout=="function"?clearTimeout:void 0,np=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof np<"u"?function(t){return np.resolve(null).then(t).catch(Ay)}:Ku;function Ay(t){setTimeout(function(){throw t})}function Uc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ra(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ra(e)}function Vi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ip(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),$n="__reactFiber$"+Bs,Da="__reactProps$"+Bs,vi="__reactContainer$"+Bs,Zu="__reactEvents$"+Bs,Cy="__reactListeners$"+Bs,Ry="__reactHandles$"+Bs;function gr(t){var e=t[$n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vi]||n[$n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ip(t);t!==null;){if(n=t[$n])return n;t=ip(t)}return e}t=n,n=t.parentNode}return null}function Xa(t){return t=t[$n]||t[vi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function Kl(t){return t[Da]||null}var Qu=[],ls=-1;function Ji(t){return{current:t}}function lt(t){0>ls||(t.current=Qu[ls],Qu[ls]=null,ls--)}function st(t,e){ls++,Qu[ls]=t.current,t.current=e}var qi={},Xt=Ji(qi),rn=Ji(!1),wr=qi;function As(t,e){var n=t.type.contextTypes;if(!n)return qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function sn(t){return t=t.childContextTypes,t!=null}function yl(){lt(rn),lt(Xt)}function rp(t,e,n){if(Xt.current!==qi)throw Error(ae(168));st(Xt,e),st(rn,n)}function f0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,fx(t)||"Unknown",r));return pt({},n,i)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,wr=Xt.current,st(Xt,t),st(rn,rn.current),!0}function sp(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=f0(t,e,wr),i.__reactInternalMemoizedMergedChildContext=t,lt(rn),lt(Xt),st(Xt,t)):lt(rn),st(rn,n)}var ui=null,Zl=!1,Fc=!1;function h0(t){ui===null?ui=[t]:ui.push(t)}function by(t){Zl=!0,h0(t)}function er(){if(!Fc&&ui!==null){Fc=!0;var t=0,e=nt;try{var n=ui;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ui=null,Zl=!1}catch(r){throw ui!==null&&(ui=ui.slice(t+1)),kg(_f,er),r}finally{nt=e,Fc=!1}}return null}var cs=[],us=0,Ml=null,El=0,En=[],wn=0,Tr=null,di=1,fi="";function ur(t,e){cs[us++]=El,cs[us++]=Ml,Ml=t,El=e}function p0(t,e,n){En[wn++]=di,En[wn++]=fi,En[wn++]=Tr,Tr=t;var i=di;t=fi;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,di=1<<32-Bn(e)+r|n<<r|i,fi=s+t}else di=1<<s|n<<r|i,fi=t}function Cf(t){t.return!==null&&(ur(t,1),p0(t,1,0))}function Rf(t){for(;t===Ml;)Ml=cs[--us],cs[us]=null,El=cs[--us],cs[us]=null;for(;t===Tr;)Tr=En[--wn],En[wn]=null,fi=En[--wn],En[wn]=null,di=En[--wn],En[wn]=null}var gn=null,mn=null,ct=!1,On=null;function m0(t,e){var n=Tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=Vi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Tr!==null?{id:di,overflow:fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function Ju(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ed(t){if(ct){var e=mn;if(e){var n=e;if(!ap(t,e)){if(Ju(t))throw Error(ae(418));e=Vi(n.nextSibling);var i=gn;e&&ap(t,e)?m0(i,n):(t.flags=t.flags&-4097|2,ct=!1,gn=t)}}else{if(Ju(t))throw Error(ae(418));t.flags=t.flags&-4097|2,ct=!1,gn=t}}}function op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function mo(t){if(t!==gn)return!1;if(!ct)return op(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qu(t.type,t.memoizedProps)),e&&(e=mn)){if(Ju(t))throw g0(),Error(ae(418));for(;e;)m0(t,e),e=Vi(e.nextSibling)}if(op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Vi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?Vi(t.stateNode.nextSibling):null;return!0}function g0(){for(var t=mn;t;)t=Vi(t.nextSibling)}function Cs(){mn=gn=null,ct=!1}function bf(t){On===null?On=[t]:On.push(t)}var Py=Si.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function go(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lp(t){var e=t._init;return e(t._payload)}function v0(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=ji(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,v,E){return g===null||g.tag!==6?(g=Gc(v,u.mode,E),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,E){var L=v.type;return L===is?d(u,g,v.props.children,E,v.key):g!==null&&(g.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Pi&&lp(L)===g.type)?(E=r(g,v.props),E.ref=qs(u,g,v),E.return=u,E):(E=rl(v.type,v.key,v.props,null,u.mode,E),E.ref=qs(u,g,v),E.return=u,E)}function c(u,g,v,E){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Wc(v,u.mode,E),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function d(u,g,v,E,L){return g===null||g.tag!==7?(g=Mr(v,u.mode,E,L),g.return=u,g):(g=r(g,v),g.return=u,g)}function h(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Gc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ro:return v=rl(g.type,g.key,g.props,null,u.mode,v),v.ref=qs(u,null,g),v.return=u,v;case ns:return g=Wc(g,u.mode,v),g.return=u,g;case Pi:var E=g._init;return h(u,E(g._payload),v)}if(oa(g)||Ws(g))return g=Mr(g,u.mode,v,null),g.return=u,g;go(u,g)}return null}function f(u,g,v,E){var L=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return L!==null?null:o(u,g,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ro:return v.key===L?l(u,g,v,E):null;case ns:return v.key===L?c(u,g,v,E):null;case Pi:return L=v._init,f(u,g,L(v._payload),E)}if(oa(v)||Ws(v))return L!==null?null:d(u,g,v,E,null);go(u,v)}return null}function m(u,g,v,E,L){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(v)||null,o(g,u,""+E,L);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ro:return u=u.get(E.key===null?v:E.key)||null,l(g,u,E,L);case ns:return u=u.get(E.key===null?v:E.key)||null,c(g,u,E,L);case Pi:var C=E._init;return m(u,g,v,C(E._payload),L)}if(oa(E)||Ws(E))return u=u.get(v)||null,d(g,u,E,L,null);go(g,E)}return null}function _(u,g,v,E){for(var L=null,C=null,A=g,N=g=0,T=null;A!==null&&N<v.length;N++){A.index>N?(T=A,A=null):T=A.sibling;var y=f(u,A,v[N],E);if(y===null){A===null&&(A=T);break}t&&A&&y.alternate===null&&e(u,A),g=s(y,g,N),C===null?L=y:C.sibling=y,C=y,A=T}if(N===v.length)return n(u,A),ct&&ur(u,N),L;if(A===null){for(;N<v.length;N++)A=h(u,v[N],E),A!==null&&(g=s(A,g,N),C===null?L=A:C.sibling=A,C=A);return ct&&ur(u,N),L}for(A=i(u,A);N<v.length;N++)T=m(A,u,N,v[N],E),T!==null&&(t&&T.alternate!==null&&A.delete(T.key===null?N:T.key),g=s(T,g,N),C===null?L=T:C.sibling=T,C=T);return t&&A.forEach(function(P){return e(u,P)}),ct&&ur(u,N),L}function x(u,g,v,E){var L=Ws(v);if(typeof L!="function")throw Error(ae(150));if(v=L.call(v),v==null)throw Error(ae(151));for(var C=L=null,A=g,N=g=0,T=null,y=v.next();A!==null&&!y.done;N++,y=v.next()){A.index>N?(T=A,A=null):T=A.sibling;var P=f(u,A,y.value,E);if(P===null){A===null&&(A=T);break}t&&A&&P.alternate===null&&e(u,A),g=s(P,g,N),C===null?L=P:C.sibling=P,C=P,A=T}if(y.done)return n(u,A),ct&&ur(u,N),L;if(A===null){for(;!y.done;N++,y=v.next())y=h(u,y.value,E),y!==null&&(g=s(y,g,N),C===null?L=y:C.sibling=y,C=y);return ct&&ur(u,N),L}for(A=i(u,A);!y.done;N++,y=v.next())y=m(A,u,N,y.value,E),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?N:y.key),g=s(y,g,N),C===null?L=y:C.sibling=y,C=y);return t&&A.forEach(function(V){return e(u,V)}),ct&&ur(u,N),L}function p(u,g,v,E){if(typeof v=="object"&&v!==null&&v.type===is&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ro:e:{for(var L=v.key,C=g;C!==null;){if(C.key===L){if(L=v.type,L===is){if(C.tag===7){n(u,C.sibling),g=r(C,v.props.children),g.return=u,u=g;break e}}else if(C.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Pi&&lp(L)===C.type){n(u,C.sibling),g=r(C,v.props),g.ref=qs(u,C,v),g.return=u,u=g;break e}n(u,C);break}else e(u,C);C=C.sibling}v.type===is?(g=Mr(v.props.children,u.mode,E,v.key),g.return=u,u=g):(E=rl(v.type,v.key,v.props,null,u.mode,E),E.ref=qs(u,g,v),E.return=u,u=E)}return a(u);case ns:e:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=Wc(v,u.mode,E),g.return=u,u=g}return a(u);case Pi:return C=v._init,p(u,g,C(v._payload),E)}if(oa(v))return _(u,g,v,E);if(Ws(v))return x(u,g,v,E);go(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=Gc(v,u.mode,E),g.return=u,u=g),a(u)):n(u,g)}return p}var Rs=v0(!0),_0=v0(!1),wl=Ji(null),Tl=null,ds=null,Pf=null;function Lf(){Pf=ds=Tl=null}function Nf(t){var e=wl.current;lt(wl),t._currentValue=e}function td(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){Tl=t,Pf=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(Pf!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(Tl===null)throw Error(ae(308));ds=t,Tl.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var vr=null;function Df(t){vr===null?vr=[t]:vr.push(t)}function x0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Df(e)):(n.next=r.next,r.next=n),e.interleaved=n,_i(t,i)}function _i(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Li=!1;function If(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Hi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,_i(t,n)}return r=i.interleaved,r===null?(e.next=e,Df(i)):(e.next=r.next,r.next=e),i.interleaved=e,_i(t,n)}function Qo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xf(t,n)}}function cp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,i){var r=t.updateQueue;Li=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(f=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=pt({},h,f);break e;case 2:Li=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Cr|=a,t.lanes=a,t.memoizedState=h}}function up(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Ya={},Qn=Ji(Ya),Ia=Ji(Ya),Ua=Ji(Ya);function _r(t){if(t===Ya)throw Error(ae(174));return t}function Uf(t,e){switch(st(Ua,e),st(Ia,t),st(Qn,Ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uu(e,t)}lt(Qn),st(Qn,e)}function bs(){lt(Qn),lt(Ia),lt(Ua)}function S0(t){_r(Ua.current);var e=_r(Qn.current),n=Uu(e,t.type);e!==n&&(st(Ia,t),st(Qn,n))}function Ff(t){Ia.current===t&&(lt(Qn),lt(Ia))}var ft=Ji(0);function Cl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Oc=[];function Of(){for(var t=0;t<Oc.length;t++)Oc[t]._workInProgressVersionPrimary=null;Oc.length=0}var Jo=Si.ReactCurrentDispatcher,kc=Si.ReactCurrentBatchConfig,Ar=0,ht=null,wt=null,Pt=null,Rl=!1,va=!1,Fa=0,Ly=0;function Vt(){throw Error(ae(321))}function kf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Hn(t[n],e[n]))return!1;return!0}function zf(t,e,n,i,r,s){if(Ar=s,ht=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jo.current=t===null||t.memoizedState===null?Uy:Fy,t=n(i,r),va){s=0;do{if(va=!1,Fa=0,25<=s)throw Error(ae(301));s+=1,Pt=wt=null,e.updateQueue=null,Jo.current=Oy,t=n(i,r)}while(va)}if(Jo.current=bl,e=wt!==null&&wt.next!==null,Ar=0,Pt=wt=ht=null,Rl=!1,e)throw Error(ae(300));return t}function Bf(){var t=Fa!==0;return Fa=0,t}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ht.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function bn(){if(wt===null){var t=ht.alternate;t=t!==null?t.memoizedState:null}else t=wt.next;var e=Pt===null?ht.memoizedState:Pt.next;if(e!==null)Pt=e,wt=t;else{if(t===null)throw Error(ae(310));wt=t,t={memoizedState:wt.memoizedState,baseState:wt.baseState,baseQueue:wt.baseQueue,queue:wt.queue,next:null},Pt===null?ht.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function Oa(t,e){return typeof e=="function"?e(t):e}function zc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=wt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Ar&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,ht.lanes|=d,Cr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Hn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ht.lanes|=s,Cr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Hn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function M0(){}function E0(t,e){var n=ht,i=bn(),r=e(),s=!Hn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,Vf(A0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,ka(9,T0.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(ae(349));Ar&30||w0(n,e,r)}return r}function w0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function T0(t,e,n,i){e.value=n,e.getSnapshot=i,C0(e)&&R0(t)}function A0(t,e,n){return n(function(){C0(e)&&R0(t)})}function C0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Hn(t,n)}catch{return!0}}function R0(t){var e=_i(t,1);e!==null&&Vn(e,t,1,-1)}function dp(t){var e=Xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},e.queue=t,t=t.dispatch=Iy.bind(null,ht,t),[e.memoizedState,t]}function ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ht.updateQueue,e===null?(e={lastEffect:null,stores:null},ht.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function b0(){return bn().memoizedState}function el(t,e,n,i){var r=Xn();ht.flags|=t,r.memoizedState=ka(1|e,n,void 0,i===void 0?null:i)}function Ql(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(wt!==null){var a=wt.memoizedState;if(s=a.destroy,i!==null&&kf(i,a.deps)){r.memoizedState=ka(e,n,s,i);return}}ht.flags|=t,r.memoizedState=ka(1|e,n,s,i)}function fp(t,e){return el(8390656,8,t,e)}function Vf(t,e){return Ql(2048,8,t,e)}function P0(t,e){return Ql(4,2,t,e)}function L0(t,e){return Ql(4,4,t,e)}function N0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function D0(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,N0.bind(null,e,t),n)}function Hf(){}function I0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function U0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&kf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function F0(t,e,n){return Ar&21?(Hn(n,e)||(n=Vg(),ht.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function Ny(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=kc.transition;kc.transition={};try{t(!1),e()}finally{nt=n,kc.transition=i}}function O0(){return bn().memoizedState}function Dy(t,e,n){var i=Wi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},k0(t))z0(e,n);else if(n=x0(t,e,n,i),n!==null){var r=qt();Vn(n,t,i,r),B0(n,e,i)}}function Iy(t,e,n){var i=Wi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(k0(t))z0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Hn(o,a)){var l=e.interleaved;l===null?(r.next=r,Df(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=x0(t,e,r,i),n!==null&&(r=qt(),Vn(n,t,i,r),B0(n,e,i))}}function k0(t){var e=t.alternate;return t===ht||e!==null&&e===ht}function z0(t,e){va=Rl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function B0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,xf(t,n)}}var bl={readContext:Rn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},Uy={readContext:Rn,useCallback:function(t,e){return Xn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:fp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,el(4194308,4,N0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return el(4194308,4,t,e)},useInsertionEffect:function(t,e){return el(4,2,t,e)},useMemo:function(t,e){var n=Xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Xn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Dy.bind(null,ht,t),[i.memoizedState,t]},useRef:function(t){var e=Xn();return t={current:t},e.memoizedState=t},useState:dp,useDebugValue:Hf,useDeferredValue:function(t){return Xn().memoizedState=t},useTransition:function(){var t=dp(!1),e=t[0];return t=Ny.bind(null,t[1]),Xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ht,r=Xn();if(ct){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Lt===null)throw Error(ae(349));Ar&30||w0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,fp(A0.bind(null,i,s,t),[t]),i.flags|=2048,ka(9,T0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Xn(),e=Lt.identifierPrefix;if(ct){var n=fi,i=di;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ly++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fy={readContext:Rn,useCallback:I0,useContext:Rn,useEffect:Vf,useImperativeHandle:D0,useInsertionEffect:P0,useLayoutEffect:L0,useMemo:U0,useReducer:zc,useRef:b0,useState:function(){return zc(Oa)},useDebugValue:Hf,useDeferredValue:function(t){var e=bn();return F0(e,wt.memoizedState,t)},useTransition:function(){var t=zc(Oa)[0],e=bn().memoizedState;return[t,e]},useMutableSource:M0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1},Oy={readContext:Rn,useCallback:I0,useContext:Rn,useEffect:Vf,useImperativeHandle:D0,useInsertionEffect:P0,useLayoutEffect:L0,useMemo:U0,useReducer:Bc,useRef:b0,useState:function(){return Bc(Oa)},useDebugValue:Hf,useDeferredValue:function(t){var e=bn();return wt===null?e.memoizedState=t:F0(e,wt.memoizedState,t)},useTransition:function(){var t=Bc(Oa)[0],e=bn().memoizedState;return[t,e]},useMutableSource:M0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=pt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function nd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:pt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Wi(t),s=mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Vn(e,t,r,i),Qo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Wi(t),s=mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Hi(t,s,r),e!==null&&(Vn(e,t,r,i),Qo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Wi(t),r=mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Hi(t,r,i),e!==null&&(Vn(e,t,i,n),Qo(e,t,i))}};function hp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Pa(n,i)||!Pa(r,s):!0}function V0(t,e,n){var i=!1,r=qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(r=sn(e)?wr:Xt.current,i=e.contextTypes,s=(i=i!=null)?As(t,r):qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function pp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function id(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},If(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Rn(s):(s=sn(e)?wr:Xt.current,r.context=As(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jl.enqueueReplaceState(r,r.state,null),Al(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e){try{var n="",i=e;do n+=dx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Vc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ky=typeof WeakMap=="function"?WeakMap:Map;function H0(t,e,n){n=mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ll||(Ll=!0,pd=i),rd(t,e)},n}function G0(t,e,n){n=mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){rd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rd(t,e),typeof i!="function"&&(Gi===null?Gi=new Set([this]):Gi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function mp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ky;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Qy.bind(null,t,e,n),e.then(t,t))}function gp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function vp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mi(-1,1),e.tag=2,Hi(n,e,1))),n.lanes|=1),t)}var zy=Si.ReactCurrentOwner,tn=!1;function $t(t,e,n,i){e.child=t===null?_0(e,null,n,i):Rs(e,t.child,n,i)}function _p(t,e,n,i,r){n=n.render;var s=e.ref;return xs(e,r),i=zf(t,e,n,i,s,r),n=Bf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(ct&&n&&Cf(e),e.flags|=1,$t(t,e,i,r),e.child)}function xp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,W0(t,e,s,i,r)):(t=rl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(a,i)&&t.ref===e.ref)return xi(t,e,r)}return e.flags|=1,t=ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function W0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Pa(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,xi(t,e,r)}return sd(t,e,n,i,r)}function j0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(hs,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(hs,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(hs,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(hs,hn),hn|=i;return $t(t,e,r,n),e.child}function X0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sd(t,e,n,i,r){var s=sn(n)?wr:Xt.current;return s=As(e,s),xs(e,r),n=zf(t,e,n,i,s,r),i=Bf(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,xi(t,e,r)):(ct&&i&&Cf(e),e.flags|=1,$t(t,e,n,r),e.child)}function yp(t,e,n,i,r){if(sn(n)){var s=!0;Sl(e)}else s=!1;if(xs(e,r),e.stateNode===null)tl(t,e),V0(e,n,i),id(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=sn(n)?wr:Xt.current,c=As(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&pp(e,a,i,c),Li=!1;var f=e.memoizedState;a.state=f,Al(e,i,a,r),l=e.memoizedState,o!==i||f!==l||rn.current||Li?(typeof d=="function"&&(nd(e,n,d,i),l=e.memoizedState),(o=Li||hp(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,y0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Un(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=sn(n)?wr:Xt.current,l=As(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&pp(e,a,i,l),Li=!1,f=e.memoizedState,a.state=f,Al(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||rn.current||Li?(typeof m=="function"&&(nd(e,n,m,i),_=e.memoizedState),(c=Li||hp(e,n,c,i,f,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return ad(t,e,n,i,s,r)}function ad(t,e,n,i,r,s){X0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&sp(e,n,!1),xi(t,e,s);i=e.stateNode,zy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,o,s)):$t(t,e,o,s),e.memoizedState=i.state,r&&sp(e,n,!0),e.child}function Y0(t){var e=t.stateNode;e.pendingContext?rp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&rp(t,e.context,!1),Uf(t,e.containerInfo)}function Sp(t,e,n,i,r){return Cs(),bf(r),e.flags|=256,$t(t,e,n,i),e.child}var od={dehydrated:null,treeContext:null,retryLane:0};function ld(t){return{baseLanes:t,cachePool:null,transitions:null}}function $0(t,e,n){var i=e.pendingProps,r=ft.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ft,r&1),t===null)return ed(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=nc(a,i,0,null),t=Mr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ld(n),e.memoizedState=od,t):Gf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return By(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ji(o,s):(s=Mr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?ld(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=od,i}return s=t.child,t=s.sibling,i=ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Gf(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function vo(t,e,n,i){return i!==null&&bf(i),Rs(e,t.child,null,n),t=Gf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function By(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Vc(Error(ae(422))),vo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nc({mode:"visible",children:i.children},r,0,null),s=Mr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,a),e.child.memoizedState=ld(a),e.memoizedState=od,s);if(!(e.mode&1))return vo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=Vc(s,i,void 0),vo(t,e,a,i)}if(o=(a&t.childLanes)!==0,tn||o){if(i=Lt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,_i(t,r),Vn(i,t,r,-1))}return qf(),i=Vc(Error(ae(421))),vo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Jy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Vi(r.nextSibling),gn=e,ct=!0,On=null,t!==null&&(En[wn++]=di,En[wn++]=fi,En[wn++]=Tr,di=t.id,fi=t.overflow,Tr=e),e=Gf(e,i.children),e.flags|=4096,e)}function Mp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),td(t.return,e,n)}function Hc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function q0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=ft.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mp(t,n,e);else if(t.tag===19)Mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ft,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Cl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Hc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Cl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Hc(e,!0,n,null,s);break;case"together":Hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Vy(t,e,n){switch(e.tag){case 3:Y0(e),Cs();break;case 5:S0(e);break;case 1:sn(e.type)&&Sl(e);break;case 4:Uf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(wl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ft,ft.current&1),e.flags|=128,null):n&e.child.childLanes?$0(t,e,n):(st(ft,ft.current&1),t=xi(t,e,n),t!==null?t.sibling:null);st(ft,ft.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return q0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ft,ft.current),i)break;return null;case 22:case 23:return e.lanes=0,j0(t,e,n)}return xi(t,e,n)}var K0,cd,Z0,Q0;K0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};Z0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,_r(Qn.current);var s=null;switch(n){case"input":r=Lu(t,r),i=Lu(t,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Iu(t,r),i=Iu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=xl)}Fu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ea.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ea.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Q0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ks(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Ht(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Hy(t,e,n){var i=e.pendingProps;switch(Rf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ht(e),null;case 1:return sn(e.type)&&yl(),Ht(e),null;case 3:return i=e.stateNode,bs(),lt(rn),lt(Xt),Of(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(mo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,On!==null&&(vd(On),On=null))),cd(t,e),Ht(e),null;case 5:Ff(e);var r=_r(Ua.current);if(n=e.type,t!==null&&e.stateNode!=null)Z0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Ht(e),null}if(t=_r(Qn.current),mo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[$n]=e,i[Da]=s,t=(e.mode&1)!==0,n){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<ca.length;r++)at(ca[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":Lh(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Dh(i,s),at("invalid",i)}Fu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&po(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&po(i.textContent,o,t),r=["children",""+o]):Ea.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&at("scroll",i)}switch(n){case"input":so(i),Nh(i,s,!0);break;case"textarea":so(i),Ih(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=xl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[$n]=e,t[Da]=i,K0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ou(n,i),n){case"dialog":at("cancel",t),at("close",t),r=i;break;case"iframe":case"object":case"embed":at("load",t),r=i;break;case"video":case"audio":for(r=0;r<ca.length;r++)at(ca[r],t);r=i;break;case"source":at("error",t),r=i;break;case"img":case"image":case"link":at("error",t),at("load",t),r=i;break;case"details":at("toggle",t),r=i;break;case"input":Lh(t,i),r=Lu(t,i),at("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),at("invalid",t);break;case"textarea":Dh(t,i),r=Iu(t,i),at("invalid",t);break;default:r=i}Fu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?bg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Cg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(t,l):typeof l=="number"&&wa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ea.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",t):l!=null&&hf(t,s,l,a))}switch(n){case"input":so(t),Nh(t,i,!1);break;case"textarea":so(t),Ih(t);break;case"option":i.value!=null&&t.setAttribute("value",""+$i(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=xl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ht(e),null;case 6:if(t&&e.stateNode!=null)Q0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=_r(Ua.current),_r(Qn.current),mo(e)){if(i=e.stateNode,n=e.memoizedProps,i[$n]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:po(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[$n]=e,e.stateNode=i}return Ht(e),null;case 13:if(lt(ft),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&mn!==null&&e.mode&1&&!(e.flags&128))g0(),Cs(),e.flags|=98560,s=!1;else if(s=mo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[$n]=e}else Cs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ht(e),s=!1}else On!==null&&(vd(On),On=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ft.current&1?At===0&&(At=3):qf())),e.updateQueue!==null&&(e.flags|=4),Ht(e),null);case 4:return bs(),cd(t,e),t===null&&La(e.stateNode.containerInfo),Ht(e),null;case 10:return Nf(e.type._context),Ht(e),null;case 17:return sn(e.type)&&yl(),Ht(e),null;case 19:if(lt(ft),s=e.memoizedState,s===null)return Ht(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ks(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Cl(t),a!==null){for(e.flags|=128,Ks(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ft,ft.current&1|2),e.child}t=t.sibling}s.tail!==null&&_t()>Ls&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=Cl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return Ht(e),null}else 2*_t()-s.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=_t(),e.sibling=null,n=ft.current,st(ft,i?n&1|2:n&1),e):(Ht(e),null);case 22:case 23:return $f(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(Ht(e),e.subtreeFlags&6&&(e.flags|=8192)):Ht(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function Gy(t,e){switch(Rf(e),e.tag){case 1:return sn(e.type)&&yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bs(),lt(rn),lt(Xt),Of(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ff(e),null;case 13:if(lt(ft),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Cs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return lt(ft),null;case 4:return bs(),null;case 10:return Nf(e.type._context),null;case 22:case 23:return $f(),null;case 24:return null;default:return null}}var _o=!1,jt=!1,Wy=typeof WeakSet=="function"?WeakSet:Set,ve=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function ud(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Ep=!1;function jy(t,e){if(Yu=gl,t=i0(),Af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:t,selectionRange:n},gl=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Un(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(E){vt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return _=Ep,Ep=!1,_}function _a(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ud(e,n,s)}r=r.next}while(r!==i)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J0(t){var e=t.alternate;e!==null&&(t.alternate=null,J0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[$n],delete e[Da],delete e[Zu],delete e[Cy],delete e[Ry])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ev(t){return t.tag===5||t.tag===3||t.tag===4}function wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ev(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=xl));else if(i!==4&&(t=t.child,t!==null))for(fd(t,e,n),t=t.sibling;t!==null;)fd(t,e,n),t=t.sibling}function hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}var Ut=null,Fn=!1;function Ei(t,e,n){for(n=n.child;n!==null;)tv(t,e,n),n=n.sibling}function tv(t,e,n){if(Zn&&typeof Zn.onCommitFiberUnmount=="function")try{Zn.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:jt||fs(n,e);case 6:var i=Ut,r=Fn;Ut=null,Ei(t,e,n),Ut=i,Fn=r,Ut!==null&&(Fn?(t=Ut,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ut.removeChild(n.stateNode));break;case 18:Ut!==null&&(Fn?(t=Ut,n=n.stateNode,t.nodeType===8?Uc(t.parentNode,n):t.nodeType===1&&Uc(t,n),Ra(t)):Uc(Ut,n.stateNode));break;case 4:i=Ut,r=Fn,Ut=n.stateNode.containerInfo,Fn=!0,Ei(t,e,n),Ut=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&ud(n,e,a),r=r.next}while(r!==i)}Ei(t,e,n);break;case 1:if(!jt&&(fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){vt(n,e,o)}Ei(t,e,n);break;case 21:Ei(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Ei(t,e,n),jt=i):Ei(t,e,n);break;default:Ei(t,e,n)}}function Tp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wy),e.forEach(function(i){var r=eS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ut=o.stateNode,Fn=!1;break e;case 3:Ut=o.stateNode.containerInfo,Fn=!0;break e;case 4:Ut=o.stateNode.containerInfo,Fn=!0;break e}o=o.return}if(Ut===null)throw Error(ae(160));tv(s,a,r),Ut=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nv(e,t),e=e.sibling}function nv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),jn(t),i&4){try{_a(3,t,t.return),ec(3,t)}catch(x){vt(t,t.return,x)}try{_a(5,t,t.return)}catch(x){vt(t,t.return,x)}}break;case 1:Ln(e,t),jn(t),i&512&&n!==null&&fs(n,n.return);break;case 5:if(Ln(e,t),jn(t),i&512&&n!==null&&fs(n,n.return),t.flags&32){var r=t.stateNode;try{wa(r,"")}catch(x){vt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&wg(r,s),Ou(o,a);var c=Ou(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?bg(r,h):d==="dangerouslySetInnerHTML"?Cg(r,h):d==="children"?wa(r,h):hf(r,d,h,c)}switch(o){case"input":Nu(r,s);break;case"textarea":Tg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ms(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ms(r,!!s.multiple,s.defaultValue,!0):ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Da]=s}catch(x){vt(t,t.return,x)}}break;case 6:if(Ln(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){vt(t,t.return,x)}}break;case 3:if(Ln(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ra(e.containerInfo)}catch(x){vt(t,t.return,x)}break;case 4:Ln(e,t),jn(t);break;case 13:Ln(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xf=_t())),i&4&&Tp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(c=jt)||d,Ln(e,t),jt=c):Ln(e,t),jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ve=t,d=t.child;d!==null;){for(h=ve=d;ve!==null;){switch(f=ve,m=f.child,f.tag){case 0:case 11:case 14:case 15:_a(4,f,f.return);break;case 1:fs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){vt(i,n,x)}}break;case 5:fs(f,f.return);break;case 22:if(f.memoizedState!==null){Cp(h);continue}}m!==null?(m.return=f,ve=m):Cp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Rg("display",a))}catch(x){vt(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){vt(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ln(e,t),jn(t),i&4&&Tp(t);break;case 21:break;default:Ln(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ev(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wa(r,""),i.flags&=-33);var s=wp(t);hd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=wp(t);fd(t,o,a);break;default:throw Error(ae(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Xy(t,e,n){ve=t,iv(t)}function iv(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||_o;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||jt;o=_o;var c=jt;if(_o=a,(jt=l)&&!c)for(ve=r;ve!==null;)a=ve,l=a.child,a.tag===22&&a.memoizedState!==null?Rp(r):l!==null?(l.return=a,ve=l):Rp(r);for(;s!==null;)ve=s,iv(s),s=s.sibling;ve=r,_o=o,jt=c}Ap(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Ap(t)}}function Ap(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&up(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}up(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Ra(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}jt||e.flags&512&&dd(e)}catch(f){vt(e,e.return,f)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Cp(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Rp(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{dd(e)}catch(l){vt(e,s,l)}break;case 5:var a=e.return;try{dd(e)}catch(l){vt(e,a,l)}}}catch(l){vt(e,e.return,l)}if(e===t){ve=null;break}var o=e.sibling;if(o!==null){o.return=e.return,ve=o;break}ve=e.return}}var Yy=Math.ceil,Pl=Si.ReactCurrentDispatcher,Wf=Si.ReactCurrentOwner,Cn=Si.ReactCurrentBatchConfig,Ke=0,Lt=null,Mt=null,Ot=0,hn=0,hs=Ji(0),At=0,za=null,Cr=0,tc=0,jf=0,xa=null,Jt=null,Xf=0,Ls=1/0,ci=null,Ll=!1,pd=null,Gi=null,xo=!1,Fi=null,Nl=0,ya=0,md=null,nl=-1,il=0;function qt(){return Ke&6?_t():nl!==-1?nl:nl=_t()}function Wi(t){return t.mode&1?Ke&2&&Ot!==0?Ot&-Ot:Py.transition!==null?(il===0&&(il=Vg()),il):(t=nt,t!==0||(t=window.event,t=t===void 0?16:$g(t.type)),t):1}function Vn(t,e,n,i){if(50<ya)throw ya=0,md=null,Error(ae(185));Wa(t,n,i),(!(Ke&2)||t!==Lt)&&(t===Lt&&(!(Ke&2)&&(tc|=n),At===4&&Di(t,Ot)),an(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Ls=_t()+500,Zl&&er()))}function an(t,e){var n=t.callbackNode;Px(t,e);var i=ml(t,t===Lt?Ot:0);if(i===0)n!==null&&Oh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Oh(n),e===1)t.tag===0?by(bp.bind(null,t)):h0(bp.bind(null,t)),Ty(function(){!(Ke&6)&&er()}),n=null;else{switch(Hg(i)){case 1:n=_f;break;case 4:n=zg;break;case 16:n=pl;break;case 536870912:n=Bg;break;default:n=pl}n=dv(n,rv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rv(t,e){if(nl=-1,il=0,Ke&6)throw Error(ae(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var i=ml(t,t===Lt?Ot:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Dl(t,i);else{e=i;var r=Ke;Ke|=2;var s=av();(Lt!==t||Ot!==e)&&(ci=null,Ls=_t()+500,Sr(t,e));do try{Ky();break}catch(o){sv(t,o)}while(!0);Lf(),Pl.current=s,Ke=r,Mt!==null?e=0:(Lt=null,Ot=0,e=At)}if(e!==0){if(e===2&&(r=Hu(t),r!==0&&(i=r,e=gd(t,r))),e===1)throw n=za,Sr(t,0),Di(t,i),an(t,_t()),n;if(e===6)Di(t,i);else{if(r=t.current.alternate,!(i&30)&&!$y(r)&&(e=Dl(t,i),e===2&&(s=Hu(t),s!==0&&(i=s,e=gd(t,s))),e===1))throw n=za,Sr(t,0),Di(t,i),an(t,_t()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:dr(t,Jt,ci);break;case 3:if(Di(t,i),(i&130023424)===i&&(e=Xf+500-_t(),10<e)){if(ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ku(dr.bind(null,t,Jt,ci),e);break}dr(t,Jt,ci);break;case 4:if(Di(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Bn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=_t()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Yy(i/1960))-i,10<i){t.timeoutHandle=Ku(dr.bind(null,t,Jt,ci),i);break}dr(t,Jt,ci);break;case 5:dr(t,Jt,ci);break;default:throw Error(ae(329))}}}return an(t,_t()),t.callbackNode===n?rv.bind(null,t):null}function gd(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(Sr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=Jt,Jt=n,e!==null&&vd(e)),t}function vd(t){Jt===null?Jt=t:Jt.push.apply(Jt,t)}function $y(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Hn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Di(t,e){for(e&=~jf,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function bp(t){if(Ke&6)throw Error(ae(327));ys();var e=ml(t,0);if(!(e&1))return an(t,_t()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var i=Hu(t);i!==0&&(e=i,n=gd(t,i))}if(n===1)throw n=za,Sr(t,0),Di(t,e),an(t,_t()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,Jt,ci),an(t,_t()),null}function Yf(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Ls=_t()+500,Zl&&er())}}function Rr(t){Fi!==null&&Fi.tag===0&&!(Ke&6)&&ys();var e=Ke;Ke|=1;var n=Cn.transition,i=nt;try{if(Cn.transition=null,nt=1,t)return t()}finally{nt=i,Cn.transition=n,Ke=e,!(Ke&6)&&er()}}function $f(){hn=hs.current,lt(hs)}function Sr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wy(n)),Mt!==null)for(n=Mt.return;n!==null;){var i=n;switch(Rf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&yl();break;case 3:bs(),lt(rn),lt(Xt),Of();break;case 5:Ff(i);break;case 4:bs();break;case 13:lt(ft);break;case 19:lt(ft);break;case 10:Nf(i.type._context);break;case 22:case 23:$f()}n=n.return}if(Lt=t,Mt=t=ji(t.current,null),Ot=hn=e,At=0,za=null,jf=tc=Cr=0,Jt=xa=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}vr=null}return t}function sv(t,e){do{var n=Mt;try{if(Lf(),Jo.current=bl,Rl){for(var i=ht.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Rl=!1}if(Ar=0,Pt=wt=ht=null,va=!1,Fa=0,Wf.current=null,n===null||n.return===null){At=1,za=e,Mt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Ot,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=gp(a);if(m!==null){m.flags&=-257,vp(m,a,o,s,e),m.mode&1&&mp(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){mp(s,c,e),qf();break e}l=Error(ae(426))}}else if(ct&&o.mode&1){var p=gp(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),vp(p,a,o,s,e),bf(Ps(l,o));break e}}s=l=Ps(l,o),At!==4&&(At=2),xa===null?xa=[s]:xa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=H0(s,l,e);cp(s,u);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Gi===null||!Gi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=G0(s,o,e);cp(s,E);break e}}s=s.return}while(s!==null)}lv(n)}catch(L){e=L,Mt===n&&n!==null&&(Mt=n=n.return);continue}break}while(!0)}function av(){var t=Pl.current;return Pl.current=bl,t===null?bl:t}function qf(){(At===0||At===3||At===2)&&(At=4),Lt===null||!(Cr&268435455)&&!(tc&268435455)||Di(Lt,Ot)}function Dl(t,e){var n=Ke;Ke|=2;var i=av();(Lt!==t||Ot!==e)&&(ci=null,Sr(t,e));do try{qy();break}catch(r){sv(t,r)}while(!0);if(Lf(),Ke=n,Pl.current=i,Mt!==null)throw Error(ae(261));return Lt=null,Ot=0,At}function qy(){for(;Mt!==null;)ov(Mt)}function Ky(){for(;Mt!==null&&!Sx();)ov(Mt)}function ov(t){var e=uv(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?lv(t):Mt=e,Wf.current=null}function lv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gy(n,e),n!==null){n.flags&=32767,Mt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,Mt=null;return}}else if(n=Hy(n,e,hn),n!==null){Mt=n;return}if(e=e.sibling,e!==null){Mt=e;return}Mt=e=t}while(e!==null);At===0&&(At=5)}function dr(t,e,n){var i=nt,r=Cn.transition;try{Cn.transition=null,nt=1,Zy(t,e,n,i)}finally{Cn.transition=r,nt=i}return null}function Zy(t,e,n,i){do ys();while(Fi!==null);if(Ke&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Lx(t,s),t===Lt&&(Mt=Lt=null,Ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xo||(xo=!0,dv(pl,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var a=nt;nt=1;var o=Ke;Ke|=4,Wf.current=null,jy(t,n),nv(n,t),vy($u),gl=!!Yu,$u=Yu=null,t.current=n,Xy(n),Mx(),Ke=o,nt=a,Cn.transition=s}else t.current=n;if(xo&&(xo=!1,Fi=t,Nl=r),s=t.pendingLanes,s===0&&(Gi=null),Tx(n.stateNode),an(t,_t()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ll)throw Ll=!1,t=pd,pd=null,t;return Nl&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===md?ya++:(ya=0,md=t):ya=0,er(),null}function ys(){if(Fi!==null){var t=Hg(Nl),e=Cn.transition,n=nt;try{if(Cn.transition=null,nt=16>t?16:t,Fi===null)var i=!1;else{if(t=Fi,Fi=null,Nl=0,Ke&6)throw Error(ae(331));var r=Ke;for(Ke|=4,ve=t.current;ve!==null;){var s=ve,a=s.child;if(ve.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(ve=c;ve!==null;){var d=ve;switch(d.tag){case 0:case 11:case 15:_a(8,d,s)}var h=d.child;if(h!==null)h.return=d,ve=h;else for(;ve!==null;){d=ve;var f=d.sibling,m=d.return;if(J0(d),d===c){ve=null;break}if(f!==null){f.return=m,ve=f;break}ve=m}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}ve=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,ve=a;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_a(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ve=u;break e}ve=s.return}}var g=t.current;for(ve=g;ve!==null;){a=ve;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,ve=v;else e:for(a=g;ve!==null;){if(o=ve,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:ec(9,o)}}catch(L){vt(o,o.return,L)}if(o===a){ve=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,ve=E;break e}ve=o.return}}if(Ke=r,er(),Zn&&typeof Zn.onPostCommitFiberRoot=="function")try{Zn.onPostCommitFiberRoot(Xl,t)}catch{}i=!0}return i}finally{nt=n,Cn.transition=e}}return!1}function Pp(t,e,n){e=Ps(n,e),e=H0(t,e,1),t=Hi(t,e,1),e=qt(),t!==null&&(Wa(t,1,e),an(t,e))}function vt(t,e,n){if(t.tag===3)Pp(t,t,n);else for(;e!==null;){if(e.tag===3){Pp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Gi===null||!Gi.has(i))){t=Ps(n,t),t=G0(e,t,1),e=Hi(e,t,1),t=qt(),e!==null&&(Wa(e,1,t),an(e,t));break}}e=e.return}}function Qy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(Ot&n)===n&&(At===4||At===3&&(Ot&130023424)===Ot&&500>_t()-Xf?Sr(t,0):jf|=n),an(t,e)}function cv(t,e){e===0&&(t.mode&1?(e=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):e=1);var n=qt();t=_i(t,e),t!==null&&(Wa(t,e,n),an(t,n))}function Jy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cv(t,n)}function eS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),cv(t,n)}var uv;uv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,Vy(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ct&&e.flags&1048576&&p0(e,El,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tl(t,e),t=e.pendingProps;var r=As(e,Xt.current);xs(e,n),r=zf(null,e,i,t,r,n);var s=Bf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,sn(i)?(s=!0,Sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,If(e),r.updater=Jl,e.stateNode=r,r._reactInternals=e,id(e,i,t,n),e=ad(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Cf(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(tl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nS(i),t=Un(i,t),r){case 0:e=sd(null,e,i,t,n);break e;case 1:e=yp(null,e,i,t,n);break e;case 11:e=_p(null,e,i,t,n);break e;case 14:e=xp(null,e,i,Un(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),sd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),yp(t,e,i,r,n);case 3:e:{if(Y0(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,y0(t,e),Al(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ps(Error(ae(423)),e),e=Sp(t,e,i,n,r);break e}else if(i!==r){r=Ps(Error(ae(424)),e),e=Sp(t,e,i,n,r);break e}else for(mn=Vi(e.stateNode.containerInfo.firstChild),gn=e,ct=!0,On=null,n=_0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cs(),i===r){e=xi(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return S0(e),t===null&&ed(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,qu(i,r)?a=null:s!==null&&qu(i,s)&&(e.flags|=32),X0(t,e),$t(t,e,a,n),e.child;case 6:return t===null&&ed(e),null;case 13:return $0(t,e,n);case 4:return Uf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),_p(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,st(wl,i._currentValue),i._currentValue=a,s!==null)if(Hn(s.value,a)){if(s.children===r.children&&!rn.current){e=xi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=mi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),td(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),td(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,xs(e,n),r=Rn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),xp(t,e,i,r,n);case 15:return W0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),tl(t,e),e.tag=1,sn(i)?(t=!0,Sl(e)):t=!1,xs(e,n),V0(e,i,r),id(e,i,r,n),ad(null,e,i,!0,t,n);case 19:return q0(t,e,n);case 22:return j0(t,e,n)}throw Error(ae(156,e.tag))};function dv(t,e){return kg(t,e)}function tS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tn(t,e,n,i){return new tS(t,e,n,i)}function Kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nS(t){if(typeof t=="function")return Kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===mf)return 11;if(t===gf)return 14}return 2}function ji(t,e){var n=t.alternate;return n===null?(n=Tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Kf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case is:return Mr(n.children,r,s,e);case pf:a=8,r|=8;break;case Cu:return t=Tn(12,n,e,r|2),t.elementType=Cu,t.lanes=s,t;case Ru:return t=Tn(13,n,e,r),t.elementType=Ru,t.lanes=s,t;case bu:return t=Tn(19,n,e,r),t.elementType=bu,t.lanes=s,t;case Sg:return nc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case xg:a=10;break e;case yg:a=9;break e;case mf:a=11;break e;case gf:a=14;break e;case Pi:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Tn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Mr(t,e,n,i){return t=Tn(7,t,i,e),t.lanes=n,t}function nc(t,e,n,i){return t=Tn(22,t,i,e),t.elementType=Sg,t.lanes=n,t.stateNode={isHidden:!1},t}function Gc(t,e,n){return t=Tn(6,t,null,e),t.lanes=n,t}function Wc(t,e,n){return e=Tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wc(0),this.expirationTimes=wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zf(t,e,n,i,r,s,a,o,l){return t=new iS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},If(s),t}function rS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fv(t){if(!t)return qi;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(sn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(sn(n))return f0(t,n,e)}return e}function hv(t,e,n,i,r,s,a,o,l){return t=Zf(n,i,!0,t,r,s,a,o,l),t.context=fv(null),n=t.current,i=qt(),r=Wi(n),s=mi(i,r),s.callback=e??null,Hi(n,s,r),t.current.lanes=r,Wa(t,r,i),an(t,i),t}function ic(t,e,n,i){var r=e.current,s=qt(),a=Wi(r);return n=fv(n),e.context===null?e.context=n:e.pendingContext=n,e=mi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Hi(r,e,a),t!==null&&(Vn(t,r,a,s),Qo(t,r,a)),a}function Il(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Lp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qf(t,e){Lp(t,e),(t=t.alternate)&&Lp(t,e)}function sS(){return null}var pv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jf(t){this._internalRoot=t}rc.prototype.render=Jf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));ic(t,e,null,null)};rc.prototype.unmount=Jf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){ic(null,t,null,null)}),e[vi]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=jg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ni.length&&e!==0&&e<Ni[n].priority;n++);Ni.splice(n,0,t),n===0&&Yg(t)}};function eh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Np(){}function aS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Il(a);s.call(c)}}var a=hv(e,i,t,0,null,!1,!1,"",Np);return t._reactRootContainer=a,t[vi]=a.current,La(t.nodeType===8?t.parentNode:t),Rr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Il(l);o.call(c)}}var l=Zf(t,0,!1,null,null,!1,!1,"",Np);return t._reactRootContainer=l,t[vi]=l.current,La(t.nodeType===8?t.parentNode:t),Rr(function(){ic(e,l,n,i)}),l}function ac(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Il(a);o.call(l)}}ic(e,a,t,r)}else a=aS(n,e,t,r,i);return Il(a)}Gg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(xf(e,n|1),an(e,_t()),!(Ke&6)&&(Ls=_t()+500,er()))}break;case 13:Rr(function(){var i=_i(t,1);if(i!==null){var r=qt();Vn(i,t,1,r)}}),Qf(t,1)}};yf=function(t){if(t.tag===13){var e=_i(t,134217728);if(e!==null){var n=qt();Vn(e,t,134217728,n)}Qf(t,134217728)}};Wg=function(t){if(t.tag===13){var e=Wi(t),n=_i(t,e);if(n!==null){var i=qt();Vn(n,t,e,i)}Qf(t,e)}};jg=function(){return nt};Xg=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};zu=function(t,e,n){switch(e){case"input":if(Nu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Kl(i);if(!r)throw Error(ae(90));Eg(i),Nu(i,r)}}}break;case"textarea":Tg(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};Ng=Yf;Dg=Rr;var oS={usingClientEntryPoint:!1,Events:[Xa,os,Kl,Pg,Lg,Yf]},Zs={findFiberByHostInstance:gr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lS={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Si.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fg(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||sS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{Xl=yo.inject(lS),Zn=yo}catch{}}_n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS;_n.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!eh(e))throw Error(ae(200));return rS(t,e,null,n)};_n.createRoot=function(t,e){if(!eh(t))throw Error(ae(299));var n=!1,i="",r=pv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zf(t,1,!1,null,null,n,!1,i,r),t[vi]=e.current,La(t.nodeType===8?t.parentNode:t),new Jf(e)};_n.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=Fg(e),t=t===null?null:t.stateNode,t};_n.flushSync=function(t){return Rr(t)};_n.hydrate=function(t,e,n){if(!sc(e))throw Error(ae(200));return ac(null,t,e,!0,n)};_n.hydrateRoot=function(t,e,n){if(!eh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=pv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=hv(e,null,t,1,n??null,r,!1,s,a),t[vi]=e.current,La(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new rc(e)};_n.render=function(t,e,n){if(!sc(e))throw Error(ae(200));return ac(null,t,e,!1,n)};_n.unmountComponentAtNode=function(t){if(!sc(t))throw Error(ae(40));return t._reactRootContainer?(Rr(function(){ac(null,null,t,!1,function(){t._reactRootContainer=null,t[vi]=null})}),!0):!1};_n.unstable_batchedUpdates=Yf;_n.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!sc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return ac(t,e,n,!1,i)};_n.version="18.3.1-next-f1338f8080-20240426";function mv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mv)}catch(t){console.error(t)}}mv(),mg.exports=_n;var cS=mg.exports,Dp=cS;Tu.createRoot=Dp.createRoot,Tu.hydrateRoot=Dp.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ba(){return Ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Ba.apply(this,arguments)}var Oi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Oi||(Oi={}));const Ip="popstate";function uS(t){t===void 0&&(t={});function e(i,r){let{pathname:s,search:a,hash:o}=i.location;return _d("",{pathname:s,search:a,hash:o},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:vv(r)}return fS(e,n,null,t)}function Et(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dS(){return Math.random().toString(36).substr(2,8)}function Up(t,e){return{usr:t.state,key:t.key,idx:e}}function _d(t,e,n,i){return n===void 0&&(n=null),Ba({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Vs(e):e,{state:n,key:e&&e.key||i||dS()})}function vv(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Vs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function fS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Oi.Pop,l=null,c=d();c==null&&(c=0,a.replaceState(Ba({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function h(){o=Oi.Pop;let p=d(),u=p==null?null:p-c;c=p,l&&l({action:o,location:x.location,delta:u})}function f(p,u){o=Oi.Push;let g=_d(x.location,p,u);c=d()+1;let v=Up(g,c),E=x.createHref(g);try{a.pushState(v,"",E)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;r.location.assign(E)}s&&l&&l({action:o,location:x.location,delta:1})}function m(p,u){o=Oi.Replace;let g=_d(x.location,p,u);c=d();let v=Up(g,c),E=x.createHref(g);a.replaceState(v,"",E),s&&l&&l({action:o,location:x.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:vv(p);return g=g.replace(/ $/,"%20"),Et(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let x={get action(){return o},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Ip,h),l=p,()=>{r.removeEventListener(Ip,h),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:f,replace:m,go(p){return a.go(p)}};return x}var Fp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Fp||(Fp={}));function hS(t,e,n){return n===void 0&&(n="/"),pS(t,e,n)}function pS(t,e,n,i){let r=typeof e=="string"?Vs(e):e,s=yv(r.pathname||"/",n);if(s==null)return null;let a=_v(t);mS(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=CS(s);o=wS(a[l],c)}return o}function _v(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(Et(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Er([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(Et(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_v(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:MS(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of xv(s.path))r(s,a,l)}),e}function xv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=xv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function mS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ES(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const gS=/^:[\w-]+$/,vS=3,_S=2,xS=1,yS=10,SS=-2,Op=t=>t==="*";function MS(t,e){let n=t.split("/"),i=n.length;return n.some(Op)&&(i+=SS),e&&(i+=_S),n.filter(r=>!Op(r)).reduce((r,s)=>r+(gS.test(s)?vS:s===""?xS:yS),i)}function ES(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function wS(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=TS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:Er([s,h.pathname]),pathnameBase:LS(Er([s,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(s=Er([s,h.pathnameBase]))}return a}function TS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=AS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,h)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let x=o[h]||"";a=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const _=o[h];return m&&!_?c[f]=void 0:c[f]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function AS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),gv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function CS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return gv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function RS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Vs(t):t;return{pathname:n?n.startsWith("/")?n:bS(n,e):e,search:NS(i),hash:DS(r)}}function bS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function jc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function PS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Sv(t,e){let n=PS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Mv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Vs(t):(r=Ba({},t),Et(!r.pathname||!r.pathname.includes("?"),jc("?","pathname","search",r)),Et(!r.pathname||!r.pathname.includes("#"),jc("#","pathname","hash",r)),Et(!r.search||!r.search.includes("#"),jc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}o=h>=0?e[h]:"/"}let l=RS(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Er=t=>t.join("/").replace(/\/\/+/g,"/"),LS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),NS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,DS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function IS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ev=["post","put","patch","delete"];new Set(Ev);const US=["get",...Ev];new Set(US);/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Va(){return Va=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Va.apply(this,arguments)}const th=O.createContext(null),FS=O.createContext(null),$a=O.createContext(null),oc=O.createContext(null),Dr=O.createContext({outlet:null,matches:[],isDataRoute:!1}),wv=O.createContext(null);function qa(){return O.useContext(oc)!=null}function nh(){return qa()||Et(!1),O.useContext(oc).location}function Tv(t){O.useContext($a).static||O.useLayoutEffect(t)}function lc(){let{isDataRoute:t}=O.useContext(Dr);return t?qS():OS()}function OS(){qa()||Et(!1);let t=O.useContext(th),{basename:e,future:n,navigator:i}=O.useContext($a),{matches:r}=O.useContext(Dr),{pathname:s}=nh(),a=JSON.stringify(Sv(r,n.v7_relativeSplatPath)),o=O.useRef(!1);return Tv(()=>{o.current=!0}),O.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let h=Mv(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Er([e,h.pathname])),(d.replace?i.replace:i.push)(h,d.state,d)},[e,i,a,s,t])}function kS(t,e){return zS(t,e)}function zS(t,e,n,i){qa()||Et(!1);let{navigator:r}=O.useContext($a),{matches:s}=O.useContext(Dr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=nh(),d;if(e){var h;let p=typeof e=="string"?Vs(e):e;l==="/"||(h=p.pathname)!=null&&h.startsWith(l)||Et(!1),d=p}else d=c;let f=d.pathname||"/",m=f;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=hS(t,{pathname:m}),x=WS(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:Er([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Er([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&x?O.createElement(oc.Provider,{value:{location:Va({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Oi.Pop}},x):x}function BS(){let t=$S(),e=IS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},e),n?O.createElement("pre",{style:r},n):null,null)}const VS=O.createElement(BS,null);class HS extends O.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?O.createElement(Dr.Provider,{value:this.props.routeContext},O.createElement(wv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GS(t){let{routeContext:e,match:n,children:i}=t,r=O.useContext(th);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(Dr.Provider,{value:e},i)}function WS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);d>=0||Et(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let h=a[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:f,errors:m}=n,_=h.route.loader&&f[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||_){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,h,f)=>{let m,_=!1,x=null,p=null;n&&(m=o&&h.route.id?o[h.route.id]:void 0,x=h.route.errorElement||VS,l&&(c<0&&f===0?(KS("route-fallback"),_=!0,p=null):c===f&&(_=!0,p=h.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,f+1)),g=()=>{let v;return m?v=x:_?v=p:h.route.Component?v=O.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=d,O.createElement(GS,{match:h,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?O.createElement(HS,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var Av=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Av||{}),Cv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Cv||{});function jS(t){let e=O.useContext(th);return e||Et(!1),e}function XS(t){let e=O.useContext(FS);return e||Et(!1),e}function YS(t){let e=O.useContext(Dr);return e||Et(!1),e}function Rv(t){let e=YS(),n=e.matches[e.matches.length-1];return n.route.id||Et(!1),n.route.id}function $S(){var t;let e=O.useContext(wv),n=XS(),i=Rv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function qS(){let{router:t}=jS(Av.UseNavigateStable),e=Rv(Cv.UseNavigateStable),n=O.useRef(!1);return Tv(()=>{n.current=!0}),O.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,Va({fromRouteId:e},s)))},[t,e])}const kp={};function KS(t,e,n){kp[t]||(kp[t]=!0)}function bv(t){let{to:e,replace:n,state:i,relative:r}=t;qa()||Et(!1);let{future:s,static:a}=O.useContext($a),{matches:o}=O.useContext(Dr),{pathname:l}=nh(),c=lc(),d=Mv(e,Sv(o,s.v7_relativeSplatPath),l,r==="path"),h=JSON.stringify(d);return O.useEffect(()=>c(JSON.parse(h),{replace:n,state:i,relative:r}),[c,h,r,n,i]),null}function ua(t){Et(!1)}function ZS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Oi.Pop,navigator:s,static:a=!1,future:o}=t;qa()&&Et(!1);let l=e.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:l,navigator:s,static:a,future:Va({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Vs(i));let{pathname:d="/",search:h="",hash:f="",state:m=null,key:_="default"}=i,x=O.useMemo(()=>{let p=yv(d,l);return p==null?null:{location:{pathname:p,search:h,hash:f,state:m,key:_},navigationType:r}},[l,d,h,f,m,_,r]);return x==null?null:O.createElement($a.Provider,{value:c},O.createElement(oc.Provider,{children:n,value:x}))}function QS(t){let{children:e,location:n}=t;return kS(xd(e),n)}new Promise(()=>{});function xd(t,e){e===void 0&&(e=[]);let n=[];return O.Children.forEach(t,(i,r)=>{if(!O.isValidElement(i))return;let s=[...e,r];if(i.type===O.Fragment){n.push.apply(n,xd(i.props.children,s));return}i.type!==ua&&Et(!1),!i.props.index||!i.props.children||Et(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=xd(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const JS="6";try{window.__reactRouterVersion=JS}catch{}const eM="startTransition",zp=Q_[eM];function tM(t){let{basename:e,children:n,future:i,window:r}=t,s=O.useRef();s.current==null&&(s.current=uS({window:r,v5Compat:!0}));let a=s.current,[o,l]=O.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=O.useCallback(h=>{c&&zp?zp(()=>l(h)):l(h)},[l,c]);return O.useLayoutEffect(()=>a.listen(d),[a,d]),O.createElement(ZS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}var Bp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Bp||(Bp={}));var Vp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vp||(Vp={}));var nM={},ng;const Pv=(ng=nM.VITE_API_BASE_URL)==null?void 0:ng.trim(),iM=`${window.location.origin}/api`,rM=(Pv||iM).replace(/\/+$/,"");Pv||console.warn("VITE_API_BASE_URL is not set. Falling back to same-origin /api. If frontend and backend are deployed as separate Render services, set VITE_API_BASE_URL.");function sM(t={}){const e=localStorage.getItem("ar_token");return e?{...t,Authorization:`Bearer ${e}`}:t}async function Xc(t,e={}){const n=await fetch(`${rM}${t}`,{...e,headers:sM(e.headers)}),i=await n.json().catch(()=>({}));if(!n.ok)throw{response:{status:n.status,data:i}};return{data:i}}const Yc={get(t){return Xc(t)},post(t,e){return Xc(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},delete(t){return Xc(t,{method:"DELETE"})}},Lv=O.createContext(null);function aM({children:t}){const[e,n]=O.useState(null),[i,r]=O.useState(!0),[s,a]=O.useState(null);O.useEffect(()=>{localStorage.getItem("ar_token")?Yc.get("/auth/me").then(f=>n(f.data)).catch(()=>{localStorage.removeItem("ar_token"),n(null)}).finally(()=>r(!1)):r(!1)},[]);const o=O.useCallback(async(h,f)=>{var m,_;a(null);try{const x=await Yc.post("/auth/login",{email:h,password:f});return localStorage.setItem("ar_token",x.data.token),n(x.data.user),{success:!0}}catch(x){const p=((_=(m=x.response)==null?void 0:m.data)==null?void 0:_.detail)||"Incorrect email or password.";return a(p),{success:!1,error:p}}},[]),l=O.useCallback(async(h,f,m)=>{var _,x;a(null);try{const p=await Yc.post("/auth/register",{name:h,email:f,password:m});return localStorage.setItem("ar_token",p.data.token),n(p.data.user),{success:!0}}catch(p){const u=((x=(_=p.response)==null?void 0:_.data)==null?void 0:x.detail)||"Registration failed. Please try again.";return a(u),{success:!1,error:u}}},[]),c=O.useCallback(()=>{localStorage.removeItem("ar_token"),n(null)},[]),d=O.useCallback(()=>a(null),[]);return M.jsx(Lv.Provider,{value:{user:e,loading:i,error:s,login:o,signup:l,logout:c,clearError:d},children:t})}const cc=()=>{const t=O.useContext(Lv);if(!t)throw new Error("useAuth must be used inside <AuthProvider>");return t};var It=[];for(var $c=0;$c<256;++$c)It.push(($c+256).toString(16).slice(1));function oM(t,e=0){return(It[t[e+0]]+It[t[e+1]]+It[t[e+2]]+It[t[e+3]]+"-"+It[t[e+4]]+It[t[e+5]]+"-"+It[t[e+6]]+It[t[e+7]]+"-"+It[t[e+8]]+It[t[e+9]]+"-"+It[t[e+10]]+It[t[e+11]]+It[t[e+12]]+It[t[e+13]]+It[t[e+14]]+It[t[e+15]]).toLowerCase()}var So,lM=new Uint8Array(16);function cM(){if(!So&&(So=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!So))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return So(lM)}var uM=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Hp={randomUUID:uM};function dM(t,e,n){if(Hp.randomUUID&&!t)return Hp.randomUUID();t=t||{};var i=t.random||(t.rng||cM)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,oM(i)}const Ss={wood:{hex:"#8B5E3C",label:"Oak Wood",three:9133628},walnut:{hex:"#4A2C0A",label:"Walnut",three:4860938},white:{hex:"#F5F0EB",label:"White",three:16117995},black:{hex:"#1A1A1A",label:"Matte Black",three:1710618},gray:{hex:"#6B7280",label:"Ash Gray",three:7041664},beige:{hex:"#D4B896",label:"Linen",three:13940886},navy:{hex:"#1E3A5F",label:"Navy Blue",three:1981023},sage:{hex:"#7A9E7E",label:"Sage Green",three:8035966}},fM=[{id:"all",label:"All",emoji:"🏠"},{id:"seating",label:"Seating",emoji:"🛋️"},{id:"tables",label:"Tables",emoji:"🪑"},{id:"storage",label:"Storage",emoji:"🗄️"},{id:"bedroom",label:"Bedroom",emoji:"🛏️"},{id:"work",label:"Work",emoji:"💼"}],Ns=[{id:"sofa_3seater",name:"3-Seater Sofa",category:"seating",emoji:"🛋️",description:"Classic 3-seat sofa with deep cushions and solid wooden legs.",colors:["wood","gray","navy","beige","black"],defaultColor:"gray",dimensions:{w:1.8,h:.85,d:.85},price:"₹45,000",popular:!0},{id:"loveseat",name:"Loveseat",category:"seating",emoji:"💑",description:"Compact 2-seater sofa, perfect for cozy corners.",colors:["wood","gray","beige","navy","sage"],defaultColor:"beige",dimensions:{w:1.3,h:.85,d:.82},price:"₹28,000",popular:!1},{id:"armchair",name:"Armchair",category:"seating",emoji:"🪑",description:"Elegant single-seat armchair with padded arms.",colors:["wood","gray","walnut","navy","black"],defaultColor:"walnut",dimensions:{w:.75,h:.9,d:.8},price:"₹15,000",popular:!1},{id:"coffee_table",name:"Coffee Table",category:"tables",emoji:"🧋",description:"Low profile rectangular table with shelf underneath.",colors:["wood","walnut","white","black"],defaultColor:"wood",dimensions:{w:1.1,h:.42,d:.55},price:"₹8,500",popular:!0},{id:"dining_table",name:"Dining Table",category:"tables",emoji:"🍽️",description:"6-person solid wood dining table with tapered legs.",colors:["wood","walnut","white","black"],defaultColor:"wood",dimensions:{w:1.8,h:.76,d:.9},price:"₹32,000",popular:!0},{id:"dining_chair",name:"Dining Chair",category:"seating",emoji:"🪑",description:"Modern dining chair with upholstered seat pad.",colors:["wood","walnut","white","black","gray"],defaultColor:"walnut",dimensions:{w:.45,h:.9,d:.48},price:"₹4,500",popular:!1},{id:"bed_queen",name:"Queen Bed",category:"bedroom",emoji:"🛏️",description:"Queen-size platform bed with upholstered headboard.",colors:["wood","walnut","gray","beige","black"],defaultColor:"walnut",dimensions:{w:1.6,h:.9,d:2.1},price:"₹55,000",popular:!0},{id:"wardrobe",name:"Wardrobe",category:"storage",emoji:"🚪",description:"3-door wardrobe with mirror panel and internal shelving.",colors:["wood","walnut","white","black"],defaultColor:"white",dimensions:{w:1.5,h:2,d:.55},price:"₹38,000",popular:!1},{id:"bookshelf",name:"Bookshelf",category:"storage",emoji:"📚",description:"5-tier open bookshelf, perfect for books and decor.",colors:["wood","walnut","white","black"],defaultColor:"wood",dimensions:{w:.8,h:1.8,d:.3},price:"₹12,000",popular:!1},{id:"office_desk",name:"Office Desk",category:"work",emoji:"💻",description:"Spacious L-shaped desk with cable management.",colors:["wood","walnut","white","black"],defaultColor:"white",dimensions:{w:1.4,h:.75,d:.7},price:"₹18,000",popular:!0},{id:"tv_stand",name:"TV Stand",category:"storage",emoji:"📺",description:"Modern low-profile media console with two door cabinets.",colors:["wood","walnut","white","black"],defaultColor:"walnut",dimensions:{w:1.5,h:.5,d:.4},price:"₹14,000",popular:!1},{id:"side_table",name:"Side Table",category:"tables",emoji:"🕯️",description:"Round bedside table with single drawer storage.",colors:["wood","walnut","white","black"],defaultColor:"wood",dimensions:{w:.45,h:.58,d:.45},price:"₹3,800",popular:!1}],Gp=t=>{var e;return((e=Ss[t])==null?void 0:e.three)||9133628},hM=t=>Ns.find(e=>e.id===t),Nv="ADD_OBJECT",Dv="REMOVE_OBJECT",Iv="SELECT_OBJECT",Uv="UPDATE_COLOR",Fv="UPDATE_TRANSFORM",Ov="RESET_SCENE",kv="SET_AR_MODE",zv="SET_ROOM_IMAGE",pM={objects:[],selectedId:null,isARMode:!1,roomImage:null};function mM(t,e){switch(e.type){case Nv:{const n=hM(e.furnitureId);if(!n)return t;const i={id:dM(),furnitureId:n.id,name:n.name,emoji:n.emoji,colorKey:n.defaultColor,colorHex:Gp(n.defaultColor),scale:1,rotationY:0,addedAt:Date.now()};return{...t,objects:[...t.objects,i],selectedId:i.id}}case Dv:return{...t,objects:t.objects.filter(n=>n.id!==e.id),selectedId:t.selectedId===e.id?null:t.selectedId};case Iv:return{...t,selectedId:e.id};case Uv:{const n=Gp(e.colorKey);return{...t,objects:t.objects.map(i=>i.id===e.id?{...i,colorKey:e.colorKey,colorHex:n}:i)}}case Fv:return{...t,objects:t.objects.map(n=>n.id===e.id?{...n,...e.transform}:n)};case Ov:return{...t,objects:[],selectedId:null};case kv:return{...t,isARMode:e.value};case zv:return{...t,roomImage:e.url};default:return t}}const Bv=O.createContext(null);function gM({children:t}){const[e,n]=O.useReducer(mM,pM),i=O.useCallback(f=>{n({type:Nv,furnitureId:f})},[]),r=O.useCallback(f=>{n({type:Dv,id:f})},[]),s=O.useCallback(f=>{n({type:Iv,id:f})},[]),a=O.useCallback((f,m)=>{n({type:Uv,id:f,colorKey:m})},[]),o=O.useCallback((f,m)=>{n({type:Fv,id:f,transform:m})},[]),l=O.useCallback(()=>{n({type:Ov})},[]),c=O.useCallback(f=>{n({type:kv,value:f})},[]),d=O.useCallback(f=>{n({type:zv,url:f})},[]),h=e.objects.find(f=>f.id===e.selectedId)||null;return M.jsx(Bv.Provider,{value:{objects:e.objects,selectedId:e.selectedId,selectedObject:h,isARMode:e.isARMode,roomImage:e.roomImage,addObject:i,removeObject:r,selectObject:s,updateColor:a,updateTransform:o,resetScene:l,setARMode:c,setRoomImage:d},children:t})}const Ir=()=>{const t=O.useContext(Bv);if(!t)throw new Error("useScene must be used within SceneProvider");return t};function Wp({children:t}){const{user:e,loading:n}=cc();return n?M.jsx("div",{className:"min-h-screen bg-bg-primary flex items-center justify-center",children:M.jsxs("div",{className:"flex flex-col items-center gap-4",children:[M.jsx("div",{className:"text-4xl animate-float",children:"🛋️"}),M.jsx("div",{className:"w-8 h-8 border-2 border-border border-t-accent rounded-full animate-spin"}),M.jsx("p",{className:"text-text-muted text-sm",children:"Loading your space…"})]})}):e?t:M.jsx(bv,{to:"/",replace:!0})}/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Vv=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _M={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=O.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>O.createElement("svg",{ref:l,..._M,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Vv("lucide",r),...o},[...a.map(([c,d])=>O.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=(t,e)=>{const n=O.forwardRef(({className:i,...r},s)=>O.createElement(xM,{ref:s,iconNode:e,className:Vv(`lucide-${vM(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=it("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=it("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=it("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=it("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=it("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=it("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=it("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=it("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=it("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=it("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=it("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=it("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=it("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=it("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=it("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=it("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=it("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=it("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=it("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=it("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=it("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=it("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=it("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=it("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=it("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=it("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=it("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=it("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=it("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Yp=["🛋️","🪑","🛏️","🗄️","💡","🪴","🖼️","🛁","🪞","📚"],BM=Array.from({length:18},(t,e)=>({emoji:Yp[e%Yp.length],x:`${5+Math.random()*90}%`,delay:`${Math.random()*6}s`,dur:`${6+Math.random()*6}s`,size:`${1.4+Math.random()*1.4}rem`,top:`${Math.random()*100}%`}));function VM(){return M.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[M.jsx("div",{className:"absolute w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl",style:{background:"radial-gradient(circle, #D4A574, transparent)",top:"-20%",left:"-10%"}}),M.jsx("div",{className:"absolute w-[500px] h-[500px] rounded-full opacity-[0.05] blur-3xl",style:{background:"radial-gradient(circle, #E8C49A, transparent)",bottom:"-15%",right:"-5%"}}),BM.map((t,e)=>M.jsx("div",{className:"absolute",style:{left:t.x,top:t.top,fontSize:t.size,opacity:.07,animation:`float ${t.dur} ${t.delay} ease-in-out infinite`,filter:"grayscale(0.3)"},children:t.emoji},e)),M.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`
            linear-gradient(rgba(212,165,116,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,165,116,0.03) 1px, transparent 1px)
          `,backgroundSize:"60px 60px"}})]})}function Mo({icon:t,type:e,placeholder:n,value:i,onChange:r,rightSlot:s}){return M.jsxs("div",{className:"relative",children:[M.jsx(t,{size:16,className:"absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"}),M.jsx("input",{type:e,placeholder:n,value:i,onChange:r,className:"input-field pl-10 pr-10",autoComplete:"off"}),s&&M.jsx("div",{className:"absolute right-3.5 top-1/2 -translate-y-1/2",children:s})]})}function HM(){const[t,e]=O.useState("login"),[n,i]=O.useState(""),[r,s]=O.useState(""),[a,o]=O.useState(""),[l,c]=O.useState(""),[d,h]=O.useState(!1),[f,m]=O.useState(!1),[_,x]=O.useState(""),[p,u]=O.useState(!1),{login:g,signup:v,error:E,clearError:L,user:C}=cc(),A=lc();O.useEffect(()=>{C&&A("/tutorial")},[C,A]);const N=V=>{u(!0),setTimeout(()=>{e(V),x(""),L(),u(!1)},200)},T=()=>t==="signup"&&!n.trim()?"Please enter your name.":r.includes("@")?a.length<6?"Password must be at least 6 characters.":t==="signup"&&a!==l?"Passwords do not match.":"":"Please enter a valid email address.",y=async V=>{V.preventDefault(),x(""),L();const W=T();if(W){x(W);return}m(!0);const q=t==="login"?await g(r,a):await v(n,r,a);m(!1),q.success&&A("/tutorial")},P=_||E;return M.jsxs("div",{className:"min-h-screen bg-bg-primary flex relative overflow-hidden",children:[M.jsx(VM,{}),M.jsxs("div",{className:"hidden md:flex flex-col justify-between w-1/2 p-12 relative z-10",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("span",{className:"text-3xl",children:"🛋️"}),M.jsxs("div",{children:[M.jsx("h1",{className:"font-display text-xl text-text-primary",children:"AR Furniture"}),M.jsx("p",{className:"text-text-muted text-xs",children:"Visualizer"})]})]}),M.jsxs("div",{className:"space-y-8",children:[M.jsxs("div",{children:[M.jsxs("h2",{className:"font-display text-4xl text-text-primary leading-tight mb-4",children:["See your furniture",M.jsx("br",{}),M.jsx("span",{className:"text-accent italic",children:"before you buy."})]}),M.jsx("p",{className:"text-text-secondary text-lg max-w-md leading-relaxed",children:"Place 3D furniture in your actual room using your phone camera or upload a room photo. No guessing. No returns."})]}),M.jsx("div",{className:"space-y-4",children:[{icon:"📱",title:"Live AR Camera",desc:"Point & place on any flat surface"},{icon:"🖼️",title:"Photo Mode",desc:"Upload a room photo on desktop"},{icon:"🛋️",title:"12+ Furniture",desc:"Sofas, beds, tables, storage & more"},{icon:"🎨",title:"Color Variants",desc:"8 finishes: wood, black, white, sage…"}].map(V=>M.jsxs("div",{className:"flex items-start gap-3",children:[M.jsx("span",{className:"text-xl mt-0.5",children:V.icon}),M.jsxs("div",{children:[M.jsx("p",{className:"text-text-primary font-semibold text-sm",children:V.title}),M.jsx("p",{className:"text-text-muted text-xs",children:V.desc})]})]},V.title))})]}),M.jsx("p",{className:"text-text-muted text-xs",children:"© 2025 AR Furniture Visualizer · Built with React + Three.js + WebXR"})]}),M.jsx("div",{className:"flex-1 flex items-center justify-center p-6 relative z-10",children:M.jsxs("div",{className:"glass-card w-full max-w-md p-8 shadow-card",style:{opacity:p?0:1,transform:p?"translateY(8px)":"translateY(0)",transition:"all 0.2s ease"},children:[M.jsxs("div",{className:"md:hidden flex items-center gap-2 mb-6",children:[M.jsx("span",{className:"text-2xl",children:"🛋️"}),M.jsx("span",{className:"font-display text-lg text-text-primary",children:"AR Furniture Visualizer"})]}),M.jsxs("div",{className:"mb-8",children:[M.jsx("h2",{className:"font-display text-2xl text-text-primary mb-1",children:t==="login"?"Welcome back":"Create account"}),M.jsx("p",{className:"text-text-secondary text-sm",children:t==="login"?"Sign in to continue your AR experience":"Start visualizing furniture in your space"})]}),M.jsxs("form",{onSubmit:y,className:"space-y-4",children:[t==="signup"&&M.jsx(Mo,{icon:Hv,type:"text",placeholder:"Full name",value:n,onChange:V=>i(V.target.value)}),M.jsx(Mo,{icon:NM,type:"email",placeholder:"Email address",value:r,onChange:V=>s(V.target.value)}),M.jsx(Mo,{icon:jp,type:d?"text":"password",placeholder:"Password",value:a,onChange:V=>o(V.target.value),rightSlot:M.jsx("button",{type:"button",onClick:()=>h(V=>!V),className:"text-text-muted hover:text-text-secondary transition-colors",children:d?M.jsx(CM,{size:15}):M.jsx(RM,{size:15})})}),t==="signup"&&M.jsx(Mo,{icon:jp,type:d?"text":"password",placeholder:"Confirm password",value:l,onChange:V=>c(V.target.value)}),P&&M.jsxs("div",{className:"flex items-start gap-2 bg-error/10 border border-error/20 rounded-xl px-4 py-3",children:[M.jsx(wM,{size:15,className:"text-error flex-shrink-0 mt-0.5"}),M.jsx("p",{className:"text-error text-sm",children:P})]}),M.jsx("button",{type:"submit",disabled:f,className:"btn-primary w-full flex items-center justify-center gap-2 mt-2",children:f?M.jsx("div",{className:"w-5 h-5 border-2 border-bg-primary/40 border-t-bg-primary rounded-full animate-spin"}):M.jsxs(M.Fragment,{children:[t==="login"?"Sign In":"Create Account",M.jsx(yd,{size:16})]})})]}),M.jsxs("div",{className:"flex items-center gap-3 my-6",children:[M.jsx("div",{className:"flex-1 h-px bg-border"}),M.jsx("span",{className:"text-text-muted text-xs",children:"or"}),M.jsx("div",{className:"flex-1 h-px bg-border"})]}),M.jsx("button",{onClick:()=>{s("demo@arfurniture.com"),o("demo123")},className:"btn-secondary w-full text-sm mb-4",children:"🎯 Use Demo Account"}),M.jsxs("p",{className:"text-center text-text-muted text-sm",children:[t==="login"?"Don't have an account?":"Already have an account?"," ",M.jsx("button",{onClick:()=>N(t==="login"?"signup":"login"),className:"text-accent hover:text-accent-light font-semibold transition-colors",children:t==="login"?"Sign up free":"Sign in"})]})]})})]})}const Qs=[{emoji:"🔐",step:"01",title:"Sign In & Get Started",subtitle:"Your personal AR session",desc:"Create your account to save your room layouts, furniture preferences, and AR sessions across devices.",tips:["Your data is private and secure","Works on mobile and desktop","Sync sessions across devices"],color:"from-amber-900/30 to-amber-800/10"},{emoji:"📷",step:"02",title:"Set Up Your Room",subtitle:"Desktop or Mobile camera",desc:"On desktop, upload a photo of your room. On mobile, point your camera at the floor and let AR detect the surface automatically.",tips:["Good lighting helps surface detection","Point camera at a flat floor","Upload JPG/PNG for desktop mode"],color:"from-blue-900/30 to-blue-800/10"},{emoji:"🛋️",step:"03",title:"Browse the Catalog",subtitle:"12+ furniture pieces",desc:"Choose from sofas, tables, beds, wardrobes, desks and more in the left sidebar. Filter by category or search by name.",tips:['Tap "Add to Scene" to queue it',"Multiple items can be added","See real dimensions & price"],color:"from-emerald-900/30 to-emerald-800/10"},{emoji:"🪄",step:"04",title:"Place & Interact",subtitle:"Move · Rotate · Scale",desc:"On mobile, tap any flat surface to place furniture. On desktop, drag it anywhere. Use the panel controls to rotate and resize.",tips:["Drag to reposition","Scroll wheel or pinch to scale","Press R or use buttons to rotate"],color:"from-purple-900/30 to-purple-800/10"},{emoji:"🎨",step:"05",title:"Change Colors",subtitle:"8 material finishes",desc:"Select any placed furniture and switch between Oak Wood, Walnut, White, Matte Black, Gray, Linen, Navy Blue, and Sage Green.",tips:["Click a color swatch to apply","Each item has unique color options","Mix & match for your style"],color:"from-rose-900/30 to-rose-800/10"},{emoji:"✅",step:"06",title:"Design Your Dream Room",subtitle:"Multi-object AR scene",desc:"Add as many furniture pieces as you need. Build the entire room layout virtually before making any purchase decision.",tips:["No purchase needed to try","Reset and start over anytime","Screenshot the final look"],color:"from-accent/20 to-accent/5"}];function GM(){var a;const[t,e]=O.useState(0),n=lc(),{user:i}=cc(),r=Qs[t],s=t===Qs.length-1;return M.jsxs("div",{className:"min-h-screen bg-bg-primary flex flex-col relative overflow-hidden",children:[M.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(ellipse at 50% -10%, rgba(212,165,116,0.08) 0%, transparent 60%)",backgroundImage:`
            linear-gradient(rgba(212,165,116,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,165,116,0.02) 1px, transparent 1px)
          `,backgroundSize:"80px 80px"}}),M.jsxs("header",{className:"relative z-10 flex items-center justify-between px-6 py-4 border-b border-border bg-bg-secondary/60 backdrop-blur-sm",children:[M.jsxs("div",{className:"flex items-center gap-2.5",children:[M.jsx("span",{className:"text-2xl",children:"🛋️"}),M.jsxs("div",{children:[M.jsx("h1",{className:"font-display text-base text-text-primary leading-none",children:"AR Furniture Visualizer"}),M.jsx("p",{className:"text-text-muted text-[10px]",children:"Quick Start Guide"})]})]}),M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsxs("span",{className:"text-text-muted text-sm",children:["Hello, ",((a=i==null?void 0:i.name)==null?void 0:a.split(" ")[0])||"there"," 👋"]}),M.jsx("button",{onClick:()=>n("/app"),className:"text-text-muted hover:text-text-secondary text-xs underline underline-offset-2 transition-colors",children:"Skip tutorial"})]})]}),M.jsx("main",{className:"flex-1 flex items-center justify-center p-6 relative z-10",children:M.jsxs("div",{className:"w-full max-w-4xl",children:[M.jsx("div",{className:"flex items-center justify-center gap-2 mb-8",children:Qs.map((o,l)=>M.jsx("button",{onClick:()=>e(l),className:`transition-all duration-300 rounded-full ${l===t?"w-8 h-2.5 bg-accent":l<t?"w-2.5 h-2.5 bg-accent/40":"w-2.5 h-2.5 bg-border"}`},l))}),M.jsx("div",{className:"glass-card overflow-hidden shadow-card",style:{animation:"slideUp 0.35s ease forwards"},children:M.jsxs("div",{className:"md:flex",children:[M.jsxs("div",{className:`md:w-5/12 bg-gradient-to-br ${r.color} flex flex-col items-center justify-center p-12`,children:[M.jsx("div",{className:"text-8xl mb-4",style:{animation:"float 3s ease-in-out infinite"},children:r.emoji}),M.jsxs("span",{className:"text-text-muted text-sm font-mono",children:["STEP ",r.step]}),M.jsx("div",{className:"mt-6 space-y-2 w-full max-w-xs",children:r.tips.map((o,l)=>M.jsxs("div",{className:"flex items-center gap-2",style:{animation:`slideUp 0.3s ${l*.08}s ease forwards`,opacity:0},children:[M.jsx(TM,{size:13,className:"text-accent flex-shrink-0"}),M.jsx("span",{className:"text-text-secondary text-xs",children:o})]},l))})]}),M.jsxs("div",{className:"md:w-7/12 p-8 md:p-12 flex flex-col justify-center",children:[M.jsx("p",{className:"text-accent text-xs font-semibold tracking-widest uppercase mb-2",children:r.subtitle}),M.jsx("h2",{className:"font-display text-3xl md:text-4xl text-text-primary mb-4 leading-tight",children:r.title}),M.jsx("p",{className:"text-text-secondary text-base leading-relaxed mb-8",children:r.desc}),M.jsxs("div",{className:"flex items-center gap-3",children:[t>0&&M.jsxs("button",{onClick:()=>e(o=>o-1),className:"btn-secondary flex items-center gap-2",children:[M.jsx(yM,{size:16}),"Back"]}),s?M.jsxs("button",{onClick:()=>n("/app"),className:"btn-primary flex items-center gap-2 text-base px-8 py-3",children:["Start AR Experience",M.jsx(yd,{size:18})]}):M.jsxs("button",{onClick:()=>e(o=>o+1),className:"btn-primary flex items-center gap-2",children:["Next",M.jsx(yd,{size:16})]}),M.jsxs("span",{className:"text-text-muted text-xs ml-auto",children:[t+1," / ",Qs.length]})]})]})]})},t),M.jsx("div",{className:"mt-6 grid grid-cols-3 md:grid-cols-6 gap-2",children:Qs.map((o,l)=>M.jsxs("button",{onClick:()=>e(l),className:`p-3 rounded-xl border text-center transition-all duration-200 ${l===t?"border-accent bg-accent/5":"border-border bg-bg-card hover:border-accent/30"}`,children:[M.jsx("div",{className:"text-xl mb-0.5",children:o.emoji}),M.jsx("p",{className:`text-[10px] font-medium ${l===t?"text-accent":"text-text-muted"}`,children:o.step})]},l))})]})})]})}function WM({item:t}){const n={seating:"from-amber-900/40 to-amber-800/20",tables:"from-stone-800/40 to-stone-700/20",storage:"from-slate-800/40 to-slate-700/20",bedroom:"from-indigo-900/40 to-indigo-800/20",work:"from-emerald-900/40 to-emerald-800/20"}[t.category]||"from-gray-800/40 to-gray-700/20";return M.jsxs("div",{className:`h-28 bg-gradient-to-br ${n} flex items-center justify-center relative overflow-hidden`,children:[M.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(circle at 50% 50%, rgba(212,165,116,0.3) 0%, transparent 70%)"}}),M.jsx("span",{className:"text-5xl filter drop-shadow-lg",role:"img","aria-label":t.name,children:t.emoji}),t.popular&&M.jsx("span",{className:"absolute top-2 right-2 badge badge-accent text-[10px]",children:"Popular"})]})}function jM({item:t}){const[e,n]=O.useState(!1),{addObject:i,objects:r,selectObject:s}=Ir(),a=r.filter(l=>l.furnitureId===t.id).length,o=()=>{i(t.id),n(!0),setTimeout(()=>n(!1),1500)};return M.jsxs("div",{className:"furniture-card group",children:[M.jsx(WM,{item:t}),M.jsxs("div",{className:"p-3",children:[M.jsxs("div",{className:"flex items-start justify-between gap-1 mb-1",children:[M.jsx("h3",{className:"text-text-primary font-semibold text-sm leading-tight line-clamp-1",children:t.name}),M.jsx("span",{className:"text-accent text-xs font-medium whitespace-nowrap flex-shrink-0",children:t.price})]}),M.jsx("p",{className:"text-text-muted text-xs line-clamp-2 mb-3 leading-relaxed",children:t.description}),M.jsxs("div",{className:"flex items-center gap-1 mb-3",children:[t.colors.slice(0,5).map(l=>{var c,d;return M.jsx("div",{title:(c=Ss[l])==null?void 0:c.label,className:"w-3.5 h-3.5 rounded-full border border-white/10 flex-shrink-0",style:{backgroundColor:(d=Ss[l])==null?void 0:d.hex}},l)}),t.colors.length>5&&M.jsxs("span",{className:"text-text-muted text-[10px]",children:["+",t.colors.length-5]})]}),a>0&&M.jsx("div",{className:"flex items-center gap-1 mb-2",children:M.jsxs("span",{className:"badge badge-success text-[10px]",children:["✓ ",a," in scene"]})}),M.jsx("button",{onClick:o,className:`w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${e?"bg-success/20 text-success border border-success/30":"bg-accent/10 hover:bg-accent text-accent hover:text-bg-primary border border-accent/30 hover:border-accent"}`,children:e?M.jsxs(M.Fragment,{children:[M.jsx(MM,{size:14})," Added!"]}):M.jsxs(M.Fragment,{children:[M.jsx(Ul,{size:14})," Add to Scene"]})})]})]})}function $p(){const[t,e]=O.useState("all"),[n,i]=O.useState(""),r=O.useMemo(()=>Ns.filter(s=>{const a=t==="all"||s.category===t,o=s.name.toLowerCase().includes(n.toLowerCase())||s.description.toLowerCase().includes(n.toLowerCase());return a&&o}),[t,n]);return M.jsxs("aside",{className:"w-full lg:w-72 flex-shrink-0 flex flex-col h-full bg-bg-secondary lg:border-r border-border min-w-0",children:[M.jsxs("div",{className:"px-4 pt-4 pb-3 border-b border-border",children:[M.jsxs("div",{className:"flex items-center justify-between mb-3",children:[M.jsx("h2",{className:"font-display text-lg text-text-primary",children:"Catalog"}),M.jsxs("span",{className:"badge badge-accent",children:[Ns.length," items"]})]}),M.jsxs("div",{className:"relative",children:[M.jsx(FM,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"}),M.jsx("input",{type:"text",placeholder:"Search furniture…",value:n,onChange:s=>i(s.target.value),className:"input-field text-sm pl-9 py-2"})]})]}),M.jsx("div",{className:"px-3 py-2 border-b border-border flex gap-1 overflow-x-auto custom-scroll",children:fM.map(s=>M.jsxs("button",{onClick:()=>e(s.id),className:`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${t===s.id?"bg-accent text-bg-primary":"text-text-secondary hover:text-text-primary hover:bg-bg-elevated"}`,children:[M.jsx("span",{children:s.emoji}),M.jsx("span",{children:s.label})]},s.id))}),M.jsx("div",{className:"flex-1 overflow-y-auto custom-scroll p-3",children:r.length===0?M.jsxs("div",{className:"text-center py-12",children:[M.jsx("div",{className:"text-3xl mb-2",children:"🔍"}),M.jsx("p",{className:"text-text-muted text-sm",children:"No furniture found"})]}):M.jsx("div",{className:"grid grid-cols-1 gap-3",children:r.map(s=>M.jsx(jM,{item:s},s.id))})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ih="167",XM=0,qp=1,YM=2,Gv=1,Wv=2,li=3,Ki=0,on=1,qn=2,Xi=0,Ms=1,Kp=2,Zp=3,Qp=4,$M=5,pr=100,qM=101,KM=102,ZM=103,QM=104,JM=200,eE=201,tE=202,nE=203,Td=204,Ad=205,iE=206,rE=207,sE=208,aE=209,oE=210,lE=211,cE=212,uE=213,dE=214,fE=0,hE=1,pE=2,Fl=3,mE=4,gE=5,vE=6,_E=7,jv=0,xE=1,yE=2,Yi=0,SE=1,ME=2,EE=3,wE=4,TE=5,AE=6,CE=7,Xv=300,Ds=301,Is=302,Cd=303,Rd=304,uc=306,bd=1e3,xr=1001,Pd=1002,An=1003,RE=1004,Eo=1005,kn=1006,qc=1007,yr=1008,yi=1009,Yv=1010,$v=1011,Ha=1012,rh=1013,br=1014,hi=1015,Ka=1016,sh=1017,ah=1018,Us=1020,qv=35902,Kv=1021,Zv=1022,zn=1023,Qv=1024,Jv=1025,Es=1026,Fs=1027,e_=1028,oh=1029,t_=1030,lh=1031,ch=1033,sl=33776,al=33777,ol=33778,ll=33779,Ld=35840,Nd=35841,Dd=35842,Id=35843,Ud=36196,Fd=37492,Od=37496,kd=37808,zd=37809,Bd=37810,Vd=37811,Hd=37812,Gd=37813,Wd=37814,jd=37815,Xd=37816,Yd=37817,$d=37818,qd=37819,Kd=37820,Zd=37821,cl=36492,Qd=36494,Jd=36495,n_=36283,ef=36284,tf=36285,nf=36286,bE=3200,PE=3201,i_=0,LE=1,Ii="",Mn="srgb",tr="srgb-linear",uh="display-p3",dc="display-p3-linear",Ol="linear",ot="srgb",kl="rec709",zl="p3",zr=7680,Jp=519,NE=512,DE=513,IE=514,r_=515,UE=516,FE=517,OE=518,kE=519,em=35044,tm="300 es",pi=2e3,Bl=2001;class Hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kc=Math.PI/180,rf=180/Math.PI;function Za(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[t&255]+Gt[t>>8&255]+Gt[t>>16&255]+Gt[t>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[n&63|128]+Gt[n>>8&255]+"-"+Gt[n>>16&255]+Gt[n>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function en(t,e,n){return Math.max(e,Math.min(n,t))}function zE(t,e){return(t%e+e)%e}function Zc(t,e,n){return(1-n)*t+n*e}function Js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],x=r[0],p=r[3],u=r[6],g=r[1],v=r[4],E=r[7],L=r[2],C=r[5],A=r[8];return s[0]=a*x+o*g+l*L,s[3]=a*p+o*v+l*C,s[6]=a*u+o*E+l*A,s[1]=c*x+d*g+h*L,s[4]=c*p+d*v+h*C,s[7]=c*u+d*E+h*A,s[2]=f*x+m*g+_*L,s[5]=f*p+m*v+_*C,s[8]=f*u+m*E+_*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*s,m=c*s-a*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Qc.makeScale(e,n)),this}rotate(e){return this.premultiply(Qc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qc=new Ge;function s_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Vl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function BE(){const t=Vl("canvas");return t.style.display="block",t}const nm={};function Sa(t){t in nm||(nm[t]=!0,console.warn(t))}function VE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const im=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rm=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[tr]:{transfer:Ol,primaries:kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Mn]:{transfer:ot,primaries:kl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[dc]:{transfer:Ol,primaries:zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(rm),fromReference:t=>t.applyMatrix3(im)},[uh]:{transfer:ot,primaries:zl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(rm),fromReference:t=>t.applyMatrix3(im).convertLinearToSRGB()}},HE=new Set([tr,dc]),tt={enabled:!0,_workingColorSpace:tr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!HE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ea[e].toReference,r=ea[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ea[t].primaries},getTransfer:function(t){return t===Ii?Ol:ea[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ea[e].luminanceCoefficients)}};function ws(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Jc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Br;class GE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Br===void 0&&(Br=Vl("canvas")),Br.width=e.width,Br.height=e.height;const i=Br.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Br}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Vl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ws(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ws(n[i]/255)*255):n[i]=ws(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WE=0;class a_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Za(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(eu(r[a].image)):s.push(eu(r[a]))}else s=eu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function eu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?GE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jE=0;class ln extends Hs{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=xr,r=xr,s=kn,a=yr,o=zn,l=yi,c=ln.DEFAULT_ANISOTROPY,d=Ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=Za(),this.name="",this.source=new a_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bd:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bd:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Xv;ln.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,E=(m+1)/2,L=(u+1)/2,C=(d+f)/4,A=(h+x)/4,N=(_+p)/4;return v>E&&v>L?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=A/i):E>L?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=C/r,s=N/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=A/s,r=N/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-_)*(p-_)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(h-x)/g,this.z=(f-d)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XE extends Hs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new ln(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new a_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends XE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class o_ extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YE extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==f||c!==m||d!==_){let p=1-o;const u=l*f+c*m+d*_+h*x,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const L=Math.sqrt(v),C=Math.atan2(L,u*g);p=Math.sin(p*C)/L,o=Math.sin(o*C)/L}const E=o*g;if(l=l*p+f*E,c=c*p+m*E,d=d*p+_*E,h=h*p+x*E,p===1-o){const L=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=L,c*=L,d*=L,h*=L}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*h+l*m-c*f,e[n+1]=l*_+d*f+c*h-o*m,e[n+2]=c*_+d*m+o*f-l*h,e[n+3]=d*_-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return tu.copy(this).projectOnVector(e),this.sub(tu)}reflect(e){return this.sub(tu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const tu=new G,sm=new Qa;class Ja{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wo.copy(i.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),To.subVectors(this.max,ta),Vr.subVectors(e.a,ta),Hr.subVectors(e.b,ta),Gr.subVectors(e.c,ta),wi.subVectors(Hr,Vr),Ti.subVectors(Gr,Hr),rr.subVectors(Vr,Gr);let n=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-rr.z,rr.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,rr.z,0,-rr.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-rr.y,rr.x,0];return!nu(n,Vr,Hr,Gr,To)||(n=[1,0,0,0,1,0,0,0,1],!nu(n,Vr,Hr,Gr,To))?!1:(Ao.crossVectors(wi,Ti),n=[Ao.x,Ao.y,Ao.z],nu(n,Vr,Hr,Gr,To))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ni=[new G,new G,new G,new G,new G,new G,new G,new G],Nn=new G,wo=new Ja,Vr=new G,Hr=new G,Gr=new G,wi=new G,Ti=new G,rr=new G,ta=new G,To=new G,Ao=new G,sr=new G;function nu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){sr.fromArray(t,s);const o=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),c=n.dot(sr),d=i.dot(sr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const $E=new Ja,na=new G,iu=new G;class fc{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):$E.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const n=na.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(iu)),this.expandByPoint(na.copy(e.center).sub(iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ii=new G,ru=new G,Co=new G,Ai=new G,su=new G,Ro=new G,au=new G;class dh{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ii)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ii.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ii.copy(this.origin).addScaledVector(this.direction,n),ii.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ru.copy(e).add(n).multiplyScalar(.5),Co.copy(n).sub(e).normalize(),Ai.copy(this.origin).sub(ru);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Co),o=Ai.dot(this.direction),l=-Ai.dot(Co),c=Ai.lengthSq(),d=Math.abs(1-a*a);let h,f,m,_;if(d>0)if(h=a*l-o,f=a*o-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const x=1/d;h*=x,f*=x,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ru).addScaledVector(Co,f),m}intersectSphere(e,n){ii.subVectors(e.center,this.origin);const i=ii.dot(this.direction),r=ii.dot(ii)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ii)!==null}intersectTriangle(e,n,i,r,s){su.subVectors(n,e),Ro.subVectors(i,e),au.crossVectors(su,Ro);let a=this.direction.dot(au),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ai.subVectors(this.origin,e);const l=o*this.direction.dot(Ro.crossVectors(Ai,Ro));if(l<0)return null;const c=o*this.direction.dot(su.cross(Ai));if(c<0||l+c>a)return null;const d=-o*Ai.dot(au);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,n,i,r,s,a,o,l,c,d,h,f,m,_,x,p){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,f,m,_,x,p)}set(e,n,i,r,s,a,o,l,c,d,h,f,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Wr.setFromMatrixColumn(e,0).length(),s=1/Wr.setFromMatrixColumn(e,1).length(),a=1/Wr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*h,_=o*d,x=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=c*d,x=c*h;n[0]=f+x*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=x+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=c*d,x=c*h;n[0]=f-x*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=x-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*h,_=o*d,x=o*h;n[0]=l*d,n[4]=_*c-m,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,x=o*c;n[0]=l*d,n[4]=x-f*h,n[8]=_*h+m,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*h+_,n[10]=f-x*h}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,x=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+x,n[5]=a*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*d,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qE,e,KE)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Ci.crossVectors(i,dn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Ci.crossVectors(i,dn)),Ci.normalize(),bo.crossVectors(dn,Ci),r[0]=Ci.x,r[4]=bo.x,r[8]=dn.x,r[1]=Ci.y,r[5]=bo.y,r[9]=dn.y,r[2]=Ci.z,r[6]=bo.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],g=i[3],v=i[7],E=i[11],L=i[15],C=r[0],A=r[4],N=r[8],T=r[12],y=r[1],P=r[5],V=r[9],W=r[13],q=r[2],K=r[6],I=r[10],F=r[14],b=r[3],B=r[7],Y=r[11],ne=r[15];return s[0]=a*C+o*y+l*q+c*b,s[4]=a*A+o*P+l*K+c*B,s[8]=a*N+o*V+l*I+c*Y,s[12]=a*T+o*W+l*F+c*ne,s[1]=d*C+h*y+f*q+m*b,s[5]=d*A+h*P+f*K+m*B,s[9]=d*N+h*V+f*I+m*Y,s[13]=d*T+h*W+f*F+m*ne,s[2]=_*C+x*y+p*q+u*b,s[6]=_*A+x*P+p*K+u*B,s[10]=_*N+x*V+p*I+u*Y,s[14]=_*T+x*W+p*F+u*ne,s[3]=g*C+v*y+E*q+L*b,s[7]=g*A+v*P+E*K+L*B,s[11]=g*N+v*V+E*I+L*Y,s[15]=g*T+v*W+E*F+L*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*m-i*l*m)+x*(+n*l*m-n*c*f+s*a*f-r*a*m+r*c*d-s*l*d)+p*(+n*c*h-n*o*m-s*a*h+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*h+n*o*f+r*a*h-i*a*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],g=h*p*c-x*f*c+x*l*m-o*p*m-h*l*u+o*f*u,v=_*f*c-d*p*c-_*l*m+a*p*m+d*l*u-a*f*u,E=d*x*c-_*h*c+_*o*m-a*x*m-d*o*u+a*h*u,L=_*h*l-d*x*l-_*o*f+a*x*f+d*o*p-a*h*p,C=n*g+i*v+r*E+s*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=g*A,e[1]=(x*f*s-h*p*s-x*r*m+i*p*m+h*r*u-i*f*u)*A,e[2]=(o*p*s-x*l*s+x*r*c-i*p*c-o*r*u+i*l*u)*A,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*m-i*l*m)*A,e[4]=v*A,e[5]=(d*p*s-_*f*s+_*r*m-n*p*m-d*r*u+n*f*u)*A,e[6]=(_*l*s-a*p*s-_*r*c+n*p*c+a*r*u-n*l*u)*A,e[7]=(a*f*s-d*l*s+d*r*c-n*f*c-a*r*m+n*l*m)*A,e[8]=E*A,e[9]=(_*h*s-d*x*s-_*i*m+n*x*m+d*i*u-n*h*u)*A,e[10]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*u+n*o*u)*A,e[11]=(d*o*s-a*h*s-d*i*c+n*h*c+a*i*m-n*o*m)*A,e[12]=L*A,e[13]=(d*x*r-_*h*r+_*i*f-n*x*f-d*i*p+n*h*p)*A,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*p-n*o*p)*A,e[15]=(a*h*r-d*o*r+d*i*l-n*h*l-a*i*f+n*o*f)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,f=s*c,m=s*d,_=s*h,x=a*d,p=a*h,u=o*h,g=l*c,v=l*d,E=l*h,L=i.x,C=i.y,A=i.z;return r[0]=(1-(x+u))*L,r[1]=(m+E)*L,r[2]=(_-v)*L,r[3]=0,r[4]=(m-E)*C,r[5]=(1-(f+u))*C,r[6]=(p+g)*C,r[7]=0,r[8]=(_+v)*A,r[9]=(p-g)*A,r[10]=(1-(f+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Wr.set(r[0],r[1],r[2]).length();const a=Wr.set(r[4],r[5],r[6]).length(),o=Wr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const c=1/s,d=1/a,h=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=d,Dn.elements[5]*=d,Dn.elements[6]*=d,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,n.setFromRotationMatrix(Dn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=pi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(o===pi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Bl)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=pi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(a-s),f=(n+e)*c,m=(i+r)*d;let _,x;if(o===pi)_=(a+s)*h,x=-2*h;else if(o===Bl)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Wr=new G,Dn=new ut,qE=new G(0,0,0),KE=new G(1,1,1),Ci=new G,bo=new G,dn=new G,am=new ut,om=new Qa;class ei{constructor(e=0,n=0,i=0,r=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return am.makeRotationFromQuaternion(e),this.setFromRotationMatrix(am,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return om.setFromEuler(this),this.setFromQuaternion(om,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class fh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZE=0;const lm=new G,jr=new Qa,ri=new ut,Po=new G,ia=new G,QE=new G,JE=new Qa,cm=new G(1,0,0),um=new G(0,1,0),dm=new G(0,0,1),fm={type:"added"},e1={type:"removed"},Xr={type:"childadded",child:null},ou={type:"childremoved",child:null};class kt extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Za(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new G,n=new ei,i=new Qa,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(cm,e)}rotateY(e){return this.rotateOnAxis(um,e)}rotateZ(e){return this.rotateOnAxis(dm,e)}translateOnAxis(e,n){return lm.copy(e).applyQuaternion(this.quaternion),this.position.add(lm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(cm,e)}translateY(e){return this.translateOnAxis(um,e)}translateZ(e){return this.translateOnAxis(dm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Po.copy(e):Po.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ia,Po,this.up):ri.lookAt(Po,ia,this.up),this.quaternion.setFromRotationMatrix(ri),r&&(ri.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(ri),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fm),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(e1),ou.child=e,this.dispatchEvent(ou),ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fm),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,QE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,JE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new G(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new G,si=new G,lu=new G,ai=new G,Yr=new G,$r=new G,hm=new G,cu=new G,uu=new G,du=new G;class Kn{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),si.subVectors(i,n),lu.subVectors(e,n);const a=In.dot(In),o=In.dot(si),l=In.dot(lu),c=si.dot(si),d=si.dot(lu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,_=(a*d-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(a,ai.y),l.addScaledVector(o,ai.z),l)}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),si.subVectors(e,n),In.cross(si).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),si.subVectors(this.a,this.b),In.cross(si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Yr.subVectors(r,i),$r.subVectors(s,i),cu.subVectors(e,i);const l=Yr.dot(cu),c=$r.dot(cu);if(l<=0&&c<=0)return n.copy(i);uu.subVectors(e,r);const d=Yr.dot(uu),h=$r.dot(uu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(Yr,a);du.subVectors(e,s);const m=Yr.dot(du),_=$r.dot(du);if(_>=0&&m<=_)return n.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector($r,o);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return hm.subVectors(s,r),o=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(hm,o);const u=1/(p+x+f);return a=x*u,o=f*u,n.copy(i).addScaledVector(Yr,a).addScaledVector($r,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},Lo={h:0,s:0,l:0};function fu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=zE(e,1),n=en(n,0,1),i=en(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=fu(a,s,e+1/3),this.g=fu(a,s,e),this.b=fu(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,n=Mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Mn){const i=l_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}copyLinearToSRGB(e){return this.r=Jc(e.r),this.g=Jc(e.g),this.b=Jc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mn){return tt.fromWorkingColorSpace(Wt.copy(this),e),Math.round(en(Wt.r*255,0,255))*65536+Math.round(en(Wt.g*255,0,255))*256+Math.round(en(Wt.b*255,0,255))}getHexString(e=Mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.fromWorkingColorSpace(Wt.copy(this),n);const i=Wt.r,r=Wt.g,s=Wt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=tt.workingColorSpace){return tt.fromWorkingColorSpace(Wt.copy(this),n),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Mn){tt.fromWorkingColorSpace(Wt.copy(this),e);const n=Wt.r,i=Wt.g,r=Wt.b;return e!==Mn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ri),this.setHSL(Ri.h+e,Ri.s+n,Ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ri),e.getHSL(Lo);const i=Zc(Ri.h,Lo.h,n),r=Zc(Ri.s,Lo.s,n),s=Zc(Ri.l,Lo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new Ye;Ye.NAMES=l_;let t1=0;class Ur extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=Za(),this.name="",this.type="Material",this.blending=Ms,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Ad,this.blendEquation=pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Fl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zr,this.stencilZFail=zr,this.stencilZPass=zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Td&&(i.blendSrc=this.blendSrc),this.blendDst!==Ad&&(i.blendDst=this.blendDst),this.blendEquation!==pr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Fl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==zr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==zr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class hh extends Ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const St=new G,No=new je;class Jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=em,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Sa("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)No.fromBufferAttribute(this,n),No.applyMatrix3(e),this.setXY(n,No.x,No.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix3(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyMatrix4(e),this.setXYZ(n,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.applyNormalMatrix(e),this.setXYZ(n,St.x,St.y,St.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)St.fromBufferAttribute(this,n),St.transformDirection(e),this.setXYZ(n,St.x,St.y,St.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Js(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Js(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Js(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qt(n,this.array),i=Qt(i,this.array),r=Qt(r,this.array),s=Qt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==em&&(e.usage=this.usage),e}}class c_ extends Jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class u_ extends Jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zt extends Jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let n1=0;const Sn=new ut,hu=new kt,qr=new G,fn=new Ja,ra=new Ja,bt=new G;class Gn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=Za(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s_(e)?u_:c_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return hu.lookAt(e),hu.updateMatrix(),this.applyMatrix4(hu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(fn.min,ra.min),fn.expandByPoint(bt),bt.addVectors(fn.max,ra.max),fn.expandByPoint(bt)):(fn.expandByPoint(ra.min),fn.expandByPoint(ra.max))}fn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)bt.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(e,c),bt.add(qr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new G,l[N]=new G;const c=new G,d=new G,h=new G,f=new je,m=new je,_=new je,x=new G,p=new G;function u(N,T,y){c.fromBufferAttribute(i,N),d.fromBufferAttribute(i,T),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,N),m.fromBufferAttribute(s,T),_.fromBufferAttribute(s,y),d.sub(c),h.sub(c),m.sub(f),_.sub(f);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(P),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(P),o[N].add(x),o[T].add(x),o[y].add(x),l[N].add(p),l[T].add(p),l[y].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let N=0,T=g.length;N<T;++N){const y=g[N],P=y.start,V=y.count;for(let W=P,q=P+V;W<q;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const v=new G,E=new G,L=new G,C=new G;function A(N){L.fromBufferAttribute(r,N),C.copy(L);const T=o[N];v.copy(T),v.sub(L.multiplyScalar(L.dot(T))).normalize(),E.crossVectors(C,T);const P=E.dot(l[N])<0?-1:1;a.setXYZW(N,v.x,v.y,v.z,P)}for(let N=0,T=g.length;N<T;++N){const y=g[N],P=y.start,V=y.count;for(let W=P,q=P+V;W<q;W+=3)A(e.getX(W+0)),A(e.getX(W+1)),A(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,d=new G,h=new G;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,p),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new Jn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pm=new ut,ar=new dh,Do=new fc,mm=new G,Kr=new G,Zr=new G,Qr=new G,pu=new G,Io=new G,Uo=new je,Fo=new je,Oo=new je,gm=new G,vm=new G,_m=new G,ko=new G,zo=new G;class nn extends kt{constructor(e=new Gn,n=new hh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Io.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(pu.fromBufferAttribute(h,e),a?Io.addScaledVector(pu,d):Io.addScaledVector(pu.sub(n),d))}n.add(Io)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Do.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Do,mm)===null||ar.origin.distanceToSquared(mm)>(e.far-e.near)**2))&&(pm.copy(s).invert(),ar.copy(e.ray).applyMatrix4(pm),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const p=f[_],u=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=g,L=v;E<L;E+=3){const C=o.getX(E),A=o.getX(E+1),N=o.getX(E+2);r=Bo(this,u,e,i,c,d,h,C,A,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const g=o.getX(p),v=o.getX(p+1),E=o.getX(p+2);r=Bo(this,a,e,i,c,d,h,g,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const p=f[_],u=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=g,L=v;E<L;E+=3){const C=E,A=E+1,N=E+2;r=Bo(this,u,e,i,c,d,h,C,A,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const g=p,v=p+1,E=p+2;r=Bo(this,a,e,i,c,d,h,g,v,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function i1(t,e,n,i,r,s,a,o){let l;if(e.side===on?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ki,o),l===null)return null;zo.copy(o),zo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(zo);return c<n.near||c>n.far?null:{distance:c,point:zo.clone(),object:t}}function Bo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Kr),t.getVertexPosition(l,Zr),t.getVertexPosition(c,Qr);const d=i1(t,e,n,i,Kr,Zr,Qr,ko);if(d){r&&(Uo.fromBufferAttribute(r,o),Fo.fromBufferAttribute(r,l),Oo.fromBufferAttribute(r,c),d.uv=Kn.getInterpolation(ko,Kr,Zr,Qr,Uo,Fo,Oo,new je)),s&&(Uo.fromBufferAttribute(s,o),Fo.fromBufferAttribute(s,l),Oo.fromBufferAttribute(s,c),d.uv1=Kn.getInterpolation(ko,Kr,Zr,Qr,Uo,Fo,Oo,new je)),a&&(gm.fromBufferAttribute(a,o),vm.fromBufferAttribute(a,l),_m.fromBufferAttribute(a,c),d.normal=Kn.getInterpolation(ko,Kr,Zr,Qr,gm,vm,_m,new G),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};Kn.getNormal(Kr,Zr,Qr,h.normal),d.face=h}return d}class Fr extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(h,2));function _(x,p,u,g,v,E,L,C,A,N,T){const y=E/A,P=L/N,V=E/2,W=L/2,q=C/2,K=A+1,I=N+1;let F=0,b=0;const B=new G;for(let Y=0;Y<I;Y++){const ne=Y*P-W;for(let ye=0;ye<K;ye++){const Re=ye*y-V;B[x]=Re*g,B[p]=ne*v,B[u]=q,c.push(B.x,B.y,B.z),B[x]=0,B[p]=0,B[u]=C>0?1:-1,d.push(B.x,B.y,B.z),h.push(ye/A),h.push(1-Y/N),F+=1}}for(let Y=0;Y<N;Y++)for(let ne=0;ne<A;ne++){const ye=f+ne+K*Y,Re=f+ne+K*(Y+1),$=f+(ne+1)+K*(Y+1),re=f+(ne+1)+K*Y;l.push(ye,Re,re),l.push(Re,$,re),b+=6}o.addGroup(m,b,T),m+=b,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Os(t[n]);for(const r in i)e[r]=i[r]}return e}function r1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function d_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const s1={clone:Os,merge:Yt};var a1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a1,this.fragmentShader=o1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=r1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class f_ extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=pi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new G,xm=new je,ym=new je;class pn extends f_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=rf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rf*2*Math.atan(Math.tan(Kc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,n){return this.getViewBounds(e,xm,ym),n.subVectors(ym,xm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Kc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Jr=-90,es=1;class l1 extends kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Jr,es,e,n);r.layers=this.layers,this.add(r);const s=new pn(Jr,es,e,n);s.layers=this.layers,this.add(s);const a=new pn(Jr,es,e,n);a.layers=this.layers,this.add(a);const o=new pn(Jr,es,e,n);o.layers=this.layers,this.add(o);const l=new pn(Jr,es,e,n);l.layers=this.layers,this.add(l);const c=new pn(Jr,es,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class h_ extends ln{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ds,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c1 extends Pr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new h_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fr(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Xi});s.uniforms.tEquirect.value=n;const a=new nn(r,s),o=n.minFilter;return n.minFilter===yr&&(n.minFilter=kn),new l1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const mu=new G,u1=new G,d1=new Ge;class fr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=mu.subVectors(i,n).cross(u1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(mu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||d1.getNormalMatrix(e),r=this.coplanarPoint(mu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const or=new fc,Vo=new G;class ph{constructor(e=new fr,n=new fr,i=new fr,r=new fr,s=new fr,a=new fr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=pi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],x=r[10],p=r[11],u=r[12],g=r[13],v=r[14],E=r[15];if(i[0].setComponents(l-s,f-c,p-m,E-u).normalize(),i[1].setComponents(l+s,f+c,p+m,E+u).normalize(),i[2].setComponents(l+a,f+d,p+_,E+g).normalize(),i[3].setComponents(l-a,f-d,p-_,E-g).normalize(),i[4].setComponents(l-o,f-h,p-x,E-v).normalize(),n===pi)i[5].setComponents(l+o,f+h,p+x,E+v).normalize();else if(n===Bl)i[5].setComponents(o,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){return or.center.set(0,0,0),or.radius=.7071067811865476,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Vo.x=r.normal.x>0?e.max.x:e.min.x,Vo.y=r.normal.y>0?e.max.y:e.min.y,Vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function p_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function f1(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,o),h.count===-1&&f.length===0&&t.bufferSubData(c,0,d),f.length!==0){for(let m=0,_=f.length;m<_;m++){const x=f[m];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class eo extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,f=n/l,m=[],_=[],x=[],p=[];for(let u=0;u<d;u++){const g=u*f-a;for(let v=0;v<c;v++){const E=v*h-s;_.push(E,-g,0),x.push(0,0,1),p.push(v/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const v=g+c*u,E=g+c*(u+1),L=g+1+c*(u+1),C=g+1+c*u;m.push(v,E,C),m.push(E,L,C)}this.setIndex(m),this.setAttribute("position",new zt(_,3)),this.setAttribute("normal",new zt(x,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.widthSegments,e.heightSegments)}}var h1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,m1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,g1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,M1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,E1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,w1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,T1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,A1=`#ifdef USE_IRIDESCENCE
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
#endif`,C1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,R1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,b1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,N1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,F1=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,O1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,k1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,z1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,V1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G1="gl_FragColor = linearToOutputTexel( gl_FragColor );",W1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,j1=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,X1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Y1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Q1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ew=`#ifdef USE_GRADIENTMAP
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
}`,tw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,sw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,aw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ow=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,dw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,fw=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,pw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_w=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ew=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ww=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Aw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ow=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Vw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Hw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$w=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tT=`#ifdef USE_SKINNING
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
#endif`,nT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,aT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,oT=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hT=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,pT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_T=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,xT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,ST=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ET=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,TT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,CT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,bT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,LT=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,DT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,IT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,UT=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,OT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,zT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,VT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,HT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,GT=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,WT=`uniform float rotation;
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
}`,jT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:h1,alphahash_pars_fragment:p1,alphamap_fragment:m1,alphamap_pars_fragment:g1,alphatest_fragment:v1,alphatest_pars_fragment:_1,aomap_fragment:x1,aomap_pars_fragment:y1,batching_pars_vertex:S1,batching_vertex:M1,begin_vertex:E1,beginnormal_vertex:w1,bsdfs:T1,iridescence_fragment:A1,bumpmap_pars_fragment:C1,clipping_planes_fragment:R1,clipping_planes_pars_fragment:b1,clipping_planes_pars_vertex:P1,clipping_planes_vertex:L1,color_fragment:N1,color_pars_fragment:D1,color_pars_vertex:I1,color_vertex:U1,common:F1,cube_uv_reflection_fragment:O1,defaultnormal_vertex:k1,displacementmap_pars_vertex:z1,displacementmap_vertex:B1,emissivemap_fragment:V1,emissivemap_pars_fragment:H1,colorspace_fragment:G1,colorspace_pars_fragment:W1,envmap_fragment:j1,envmap_common_pars_fragment:X1,envmap_pars_fragment:Y1,envmap_pars_vertex:$1,envmap_physical_pars_fragment:sw,envmap_vertex:q1,fog_vertex:K1,fog_pars_vertex:Z1,fog_fragment:Q1,fog_pars_fragment:J1,gradientmap_pars_fragment:ew,lightmap_pars_fragment:tw,lights_lambert_fragment:nw,lights_lambert_pars_fragment:iw,lights_pars_begin:rw,lights_toon_fragment:aw,lights_toon_pars_fragment:ow,lights_phong_fragment:lw,lights_phong_pars_fragment:cw,lights_physical_fragment:uw,lights_physical_pars_fragment:dw,lights_fragment_begin:fw,lights_fragment_maps:hw,lights_fragment_end:pw,logdepthbuf_fragment:mw,logdepthbuf_pars_fragment:gw,logdepthbuf_pars_vertex:vw,logdepthbuf_vertex:_w,map_fragment:xw,map_pars_fragment:yw,map_particle_fragment:Sw,map_particle_pars_fragment:Mw,metalnessmap_fragment:Ew,metalnessmap_pars_fragment:ww,morphinstance_vertex:Tw,morphcolor_vertex:Aw,morphnormal_vertex:Cw,morphtarget_pars_vertex:Rw,morphtarget_vertex:bw,normal_fragment_begin:Pw,normal_fragment_maps:Lw,normal_pars_fragment:Nw,normal_pars_vertex:Dw,normal_vertex:Iw,normalmap_pars_fragment:Uw,clearcoat_normal_fragment_begin:Fw,clearcoat_normal_fragment_maps:Ow,clearcoat_pars_fragment:kw,iridescence_pars_fragment:zw,opaque_fragment:Bw,packing:Vw,premultiplied_alpha_fragment:Hw,project_vertex:Gw,dithering_fragment:Ww,dithering_pars_fragment:jw,roughnessmap_fragment:Xw,roughnessmap_pars_fragment:Yw,shadowmap_pars_fragment:$w,shadowmap_pars_vertex:qw,shadowmap_vertex:Kw,shadowmask_pars_fragment:Zw,skinbase_vertex:Qw,skinning_pars_vertex:Jw,skinning_vertex:eT,skinnormal_vertex:tT,specularmap_fragment:nT,specularmap_pars_fragment:iT,tonemapping_fragment:rT,tonemapping_pars_fragment:sT,transmission_fragment:aT,transmission_pars_fragment:oT,uv_pars_fragment:lT,uv_pars_vertex:cT,uv_vertex:uT,worldpos_vertex:dT,background_vert:fT,background_frag:hT,backgroundCube_vert:pT,backgroundCube_frag:mT,cube_vert:gT,cube_frag:vT,depth_vert:_T,depth_frag:xT,distanceRGBA_vert:yT,distanceRGBA_frag:ST,equirect_vert:MT,equirect_frag:ET,linedashed_vert:wT,linedashed_frag:TT,meshbasic_vert:AT,meshbasic_frag:CT,meshlambert_vert:RT,meshlambert_frag:bT,meshmatcap_vert:PT,meshmatcap_frag:LT,meshnormal_vert:NT,meshnormal_frag:DT,meshphong_vert:IT,meshphong_frag:UT,meshphysical_vert:FT,meshphysical_frag:OT,meshtoon_vert:kT,meshtoon_frag:zT,points_vert:BT,points_frag:VT,shadow_vert:HT,shadow_frag:GT,sprite_vert:WT,sprite_frag:jT},he={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Yn={basic:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ye(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Yt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Yt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Yt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ye(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Yt([he.points,he.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Yt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Yt([he.common,he.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Yt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Yt([he.sprite,he.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Yt([he.common,he.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Yt([he.lights,he.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Yn.physical={uniforms:Yt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ho={r:0,b:0,g:0},lr=new ei,XT=new ut;function YT(t,e,n,i,r,s,a){const o=new Ye(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function x(g){let v=!1;const E=_(g);E===null?u(o,l):E&&E.isColor&&(u(E,1),v=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(g,v){const E=_(v);E&&(E.isCubeTexture||E.mapping===uc)?(d===void 0&&(d=new nn(new Fr(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:Os(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),lr.copy(v.backgroundRotation),lr.x*=-1,lr.y*=-1,lr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(XT.makeRotationFromEuler(lr)),d.material.toneMapped=tt.getTransfer(E.colorSpace)!==ot,(h!==E||f!==E.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=E,f=E.version,m=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new nn(new eo(2,2),new Zi({name:"BackgroundMaterial",uniforms:Os(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=tt.getTransfer(E.colorSpace)!==ot,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(h!==E||f!==E.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=E,f=E.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,v){g.getRGB(Ho,d_(t)),i.buffers.color.setClear(Ho.r,Ho.g,Ho.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(g,v=1){o.set(g),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(o,l)},render:x,addToRenderList:p}}function $T(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,P,V,W,q){let K=!1;const I=h(W,V,P);s!==I&&(s=I,c(s.object)),K=m(y,W,V,q),K&&_(y,W,V,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,E(y,P,V,W),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function h(y,P,V){const W=V.wireframe===!0;let q=i[y.id];q===void 0&&(q={},i[y.id]=q);let K=q[P.id];K===void 0&&(K={},q[P.id]=K);let I=K[W];return I===void 0&&(I=f(l()),K[W]=I),I}function f(y){const P=[],V=[],W=[];for(let q=0;q<n;q++)P[q]=0,V[q]=0,W[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:V,attributeDivisors:W,object:y,attributes:{},index:null}}function m(y,P,V,W){const q=s.attributes,K=P.attributes;let I=0;const F=V.getAttributes();for(const b in F)if(F[b].location>=0){const Y=q[b];let ne=K[b];if(ne===void 0&&(b==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),b==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor)),Y===void 0||Y.attribute!==ne||ne&&Y.data!==ne.data)return!0;I++}return s.attributesNum!==I||s.index!==W}function _(y,P,V,W){const q={},K=P.attributes;let I=0;const F=V.getAttributes();for(const b in F)if(F[b].location>=0){let Y=K[b];Y===void 0&&(b==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),b==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor));const ne={};ne.attribute=Y,Y&&Y.data&&(ne.data=Y.data),q[b]=ne,I++}s.attributes=q,s.attributesNum=I,s.index=W}function x(){const y=s.newAttributes;for(let P=0,V=y.length;P<V;P++)y[P]=0}function p(y){u(y,0)}function u(y,P){const V=s.newAttributes,W=s.enabledAttributes,q=s.attributeDivisors;V[y]=1,W[y]===0&&(t.enableVertexAttribArray(y),W[y]=1),q[y]!==P&&(t.vertexAttribDivisor(y,P),q[y]=P)}function g(){const y=s.newAttributes,P=s.enabledAttributes;for(let V=0,W=P.length;V<W;V++)P[V]!==y[V]&&(t.disableVertexAttribArray(V),P[V]=0)}function v(y,P,V,W,q,K,I){I===!0?t.vertexAttribIPointer(y,P,V,q,K):t.vertexAttribPointer(y,P,V,W,q,K)}function E(y,P,V,W){x();const q=W.attributes,K=V.getAttributes(),I=P.defaultAttributeValues;for(const F in K){const b=K[F];if(b.location>=0){let B=q[F];if(B===void 0&&(F==="instanceMatrix"&&y.instanceMatrix&&(B=y.instanceMatrix),F==="instanceColor"&&y.instanceColor&&(B=y.instanceColor)),B!==void 0){const Y=B.normalized,ne=B.itemSize,ye=e.get(B);if(ye===void 0)continue;const Re=ye.buffer,$=ye.type,re=ye.bytesPerElement,pe=$===t.INT||$===t.UNSIGNED_INT||B.gpuType===rh;if(B.isInterleavedBufferAttribute){const fe=B.data,De=fe.stride,ke=B.offset;if(fe.isInstancedInterleavedBuffer){for(let Be=0;Be<b.locationSize;Be++)u(b.location+Be,fe.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Be=0;Be<b.locationSize;Be++)p(b.location+Be);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let Be=0;Be<b.locationSize;Be++)v(b.location+Be,ne/b.locationSize,$,Y,De*re,(ke+ne/b.locationSize*Be)*re,pe)}else{if(B.isInstancedBufferAttribute){for(let fe=0;fe<b.locationSize;fe++)u(b.location+fe,B.meshPerAttribute);y.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let fe=0;fe<b.locationSize;fe++)p(b.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let fe=0;fe<b.locationSize;fe++)v(b.location+fe,ne/b.locationSize,$,Y,ne*re,ne/b.locationSize*fe*re,pe)}}else if(I!==void 0){const Y=I[F];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(b.location,Y);break;case 3:t.vertexAttrib3fv(b.location,Y);break;case 4:t.vertexAttrib4fv(b.location,Y);break;default:t.vertexAttrib1fv(b.location,Y)}}}}g()}function L(){N();for(const y in i){const P=i[y];for(const V in P){const W=P[V];for(const q in W)d(W[q].object),delete W[q];delete P[V]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const P=i[y.id];for(const V in P){const W=P[V];for(const q in W)d(W[q].object),delete W[q];delete P[V]}delete i[y.id]}function A(y){for(const P in i){const V=i[P];if(V[y.id]===void 0)continue;const W=V[y.id];for(const q in W)d(W[q].object),delete W[q];delete V[y.id]}}function N(){T(),a=!0,s!==r&&(s=r,c(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:T,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:g}}function qT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];n.update(m,i,1)}function l(c,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x];for(let x=0;x<f.length;x++)n.update(_,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function KT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==zn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const A=C===Ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==yi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==hi&&!A)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=m>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:u,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:E,maxSamples:L}}function ZT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new fr,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const g=s?0:i,v=g*4;let E=u.clippingState||null;l.value=E,E=d(_,f,v,m);for(let L=0;L!==v;++L)E[L]=n[L];u.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,E=m;v!==x;++v,E+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function QT(t){let e=new WeakMap;function n(a,o){return o===Cd?a.mapping=Ds:o===Rd&&(a.mapping=Is),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Cd||o===Rd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new c1(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class m_ extends f_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ps=4,Sm=[.125,.215,.35,.446,.526,.582],mr=20,gu=new m_,Mm=new Ye;let vu=null,_u=0,xu=0,yu=!1;const hr=(1+Math.sqrt(5))/2,ts=1/hr,Em=[new G(-hr,ts,0),new G(hr,ts,0),new G(-ts,0,hr),new G(ts,0,hr),new G(0,hr,-ts),new G(0,hr,ts),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){vu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vu,_u,xu),this._renderer.xr.enabled=yu,e.scissorTest=!1,Go(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ds||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vu=this._renderer.getRenderTarget(),_u=this._renderer.getActiveCubeFace(),xu=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Ka,format:zn,colorSpace:tr,depthBuffer:!1},r=Tm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JT(s)),this._blurMaterial=eA(s,e,n)}return r}_compileMaterial(e){const n=new nn(this._lodPlanes[0],e);this._renderer.compile(n,gu)}_sceneToCubeUV(e,n,i,r){const o=new pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Mm),d.toneMapping=Yi,d.autoClear=!1;const m=new hh({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new nn(new Fr,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Mm),x=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;Go(r,g*v,u>2?v:0,v,v),d.setRenderTarget(r),x&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ds||e.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new nn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Go(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,gu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Em[(r-s-1)%Em.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new nn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*mr-1),x=s/_,p=isFinite(s)?1+Math.floor(d*x):mr;p>mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${mr}`);const u=[];let g=0;for(let A=0;A<mr;++A){const N=A/x,T=Math.exp(-N*N/2);u.push(T),A===0?g+=T:A<p&&(g+=2*T)}for(let A=0;A<u.length;A++)u[A]=u[A]/g;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const E=this._sizeLods[r],L=3*E*(r>v-ps?r-v+ps:0),C=4*(this._cubeSize-E);Go(n,L,C,3*E,2*E),l.setRenderTarget(n),l.render(h,gu)}}function JT(t){const e=[],n=[],i=[];let r=t;const s=t-ps+1+Sm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ps?l=Sm[a-t+ps-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,x=3,p=2,u=1,g=new Float32Array(x*_*m),v=new Float32Array(p*_*m),E=new Float32Array(u*_*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,N=C>2?0:-1,T=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];g.set(T,x*_*C),v.set(f,p*_*C);const y=[C,C,C,C,C,C];E.set(y,u*_*C)}const L=new Gn;L.setAttribute("position",new Jn(g,x)),L.setAttribute("uv",new Jn(v,p)),L.setAttribute("faceIndex",new Jn(E,u)),e.push(L),r>ps&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Tm(t,e,n){const i=new Pr(t,e,n);return i.texture.mapping=uc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Go(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function eA(t,e,n){const i=new Float32Array(mr),r=new G(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Am(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mh(),fragmentShader:`

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
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Cm(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function mh(){return`

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
	`}function tA(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Cd||l===Rd,d=l===Ds||l===Is;if(c||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new wm(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new wm(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function nA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Sa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function iA(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let v=0,E=g.length;v<E;v+=3){const L=g[v+0],C=g[v+1],A=g[v+2];f.push(L,C,C,A,A,L)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,E=g.length/3-1;v<E;v+=3){const L=v+0,C=v+1,A=v+2;f.push(L,C,C,A,A,L)}}else return;const p=new(s_(f)?u_:c_)(f,1);p.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function rA(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function c(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,f*a,_),n.update(m,i,_))}function d(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];n.update(p,i,1)}function h(f,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,x,0,_);let u=0;for(let g=0;g<_;g++)u+=m[g];for(let g=0;g<x.length;g++)n.update(u,i,x[g])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function sA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function aA(t,e,n){const i=new WeakMap,r=new Tt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let y=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),p===!0&&(E=3);let L=o.attributes.position.count*E,C=1;L>e.maxTextureSize&&(C=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const A=new Float32Array(L*C*4*h),N=new o_(A,L,C,h);N.type=hi,N.needsUpdate=!0;const T=E*4;for(let P=0;P<h;P++){const V=u[P],W=g[P],q=v[P],K=L*C*4*P;for(let I=0;I<V.count;I++){const F=I*T;_===!0&&(r.fromBufferAttribute(V,I),A[K+F+0]=r.x,A[K+F+1]=r.y,A[K+F+2]=r.z,A[K+F+3]=0),x===!0&&(r.fromBufferAttribute(W,I),A[K+F+4]=r.x,A[K+F+5]=r.y,A[K+F+6]=r.z,A[K+F+7]=0),p===!0&&(r.fromBufferAttribute(q,I),A[K+F+8]=r.x,A[K+F+9]=r.y,A[K+F+10]=r.z,A[K+F+11]=q.itemSize===4?r.w:1)}}f={count:h,texture:N,size:new je(L,C)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function oA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class g_ extends ln{constructor(e,n,i,r,s,a,o,l,c,d=Es){if(d!==Es&&d!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Es&&(i=br),i===void 0&&d===Fs&&(i=Us),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:An,this.minFilter=l!==void 0?l:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const v_=new ln,Rm=new g_(1,1),__=new o_,x_=new YE,y_=new h_,bm=[],Pm=[],Lm=new Float32Array(16),Nm=new Float32Array(9),Dm=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=bm[r];if(s===void 0&&(s=new Float32Array(r),bm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function hc(t,e){let n=Pm[e];n===void 0&&(n=new Int32Array(e),Pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function lA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function cA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function uA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function dA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function fA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Dm.set(i),t.uniformMatrix2fv(this.addr,!1,Dm),Rt(n,i)}}function hA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Nm.set(i),t.uniformMatrix3fv(this.addr,!1,Nm),Rt(n,i)}}function pA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Lm.set(i),t.uniformMatrix4fv(this.addr,!1,Lm),Rt(n,i)}}function mA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function gA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function vA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function _A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function xA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function yA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function SA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function MA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function EA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Rm.compareFunction=r_,s=Rm):s=v_,n.setTexture2D(e||s,r)}function wA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||x_,r)}function TA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||y_,r)}function AA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||__,r)}function CA(t){switch(t){case 5126:return lA;case 35664:return cA;case 35665:return uA;case 35666:return dA;case 35674:return fA;case 35675:return hA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return gA;case 35668:case 35672:return vA;case 35669:case 35673:return _A;case 5125:return xA;case 36294:return yA;case 36295:return SA;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return wA;case 35680:case 36300:case 36308:case 36293:return TA;case 36289:case 36303:case 36311:case 36292:return AA}}function RA(t,e){t.uniform1fv(this.addr,e)}function bA(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function PA(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function LA(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function NA(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function DA(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function IA(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function UA(t,e){t.uniform1iv(this.addr,e)}function FA(t,e){t.uniform2iv(this.addr,e)}function OA(t,e){t.uniform3iv(this.addr,e)}function kA(t,e){t.uniform4iv(this.addr,e)}function zA(t,e){t.uniform1uiv(this.addr,e)}function BA(t,e){t.uniform2uiv(this.addr,e)}function VA(t,e){t.uniform3uiv(this.addr,e)}function HA(t,e){t.uniform4uiv(this.addr,e)}function GA(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||v_,s[a])}function WA(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||x_,s[a])}function jA(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||y_,s[a])}function XA(t,e,n){const i=this.cache,r=e.length,s=hc(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||__,s[a])}function YA(t){switch(t){case 5126:return RA;case 35664:return bA;case 35665:return PA;case 35666:return LA;case 35674:return NA;case 35675:return DA;case 35676:return IA;case 5124:case 35670:return UA;case 35667:case 35671:return FA;case 35668:case 35672:return OA;case 35669:case 35673:return kA;case 5125:return zA;case 36294:return BA;case 36295:return VA;case 36296:return HA;case 35678:case 36198:case 36298:case 36306:case 35682:return GA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return jA;case 36289:case 36303:case 36311:case 36292:return XA}}class $A{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=CA(n.type)}}class qA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=YA(n.type)}}class KA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Su=/(\w+)(\])?(\[|\.)?/g;function Im(t,e){t.seq.push(e),t.map[e.id]=e}function ZA(t,e,n){const i=t.name,r=i.length;for(Su.lastIndex=0;;){const s=Su.exec(i),a=Su.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Im(n,c===void 0?new $A(o,t,e):new qA(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new KA(o),Im(n,h)),n=h}}}class ul{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);ZA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Um(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const QA=37297;let JA=0;function eC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function tC(t){const e=tt.getPrimaries(tt.workingColorSpace),n=tt.getPrimaries(t);let i;switch(e===n?i="":e===zl&&n===kl?i="LinearDisplayP3ToLinearSRGB":e===kl&&n===zl&&(i="LinearSRGBToLinearDisplayP3"),t){case tr:case dc:return[i,"LinearTransferOETF"];case Mn:case uh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Fm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+eC(t.getShaderSource(e),a)}else return r}function nC(t,e){const n=tC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function iC(t,e){let n;switch(e){case SE:n="Linear";break;case ME:n="Reinhard";break;case EE:n="OptimizedCineon";break;case wE:n="ACESFilmic";break;case AE:n="AgX";break;case CE:n="Neutral";break;case TE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Wo=new G;function rC(){tt.getLuminanceCoefficients(Wo);const t=Wo.x.toFixed(4),e=Wo.y.toFixed(4),n=Wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function aC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function da(t){return t!==""}function Om(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function km(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lC=/^[ \t]*#include +<([\w\d./]+)>/gm;function sf(t){return t.replace(lC,uC)}const cC=new Map;function uC(t,e){let n=He[e];if(n===void 0){const i=cC.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sf(n)}const dC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zm(t){return t.replace(dC,fC)}function fC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Gv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Wv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===li&&(e="SHADOWMAP_TYPE_VSM"),e}function pC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ds:case Is:e="ENVMAP_TYPE_CUBE";break;case uc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function gC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case jv:e="ENVMAP_BLENDING_MULTIPLY";break;case xE:e="ENVMAP_BLENDING_MIX";break;case yE:e="ENVMAP_BLENDING_ADD";break}return e}function vC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function _C(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=hC(n),c=pC(n),d=mC(n),h=gC(n),f=vC(n),m=sC(n),_=aC(s),x=r.createProgram();let p,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(da).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(da).join(`
`),u.length>0&&(u+=`
`)):(p=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),u=[Bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Yi?"#define TONE_MAPPING":"",n.toneMapping!==Yi?He.tonemapping_pars_fragment:"",n.toneMapping!==Yi?iC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,nC("linearToOutputTexel",n.outputColorSpace),rC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),a=sf(a),a=Om(a,n),a=km(a,n),o=sf(o),o=Om(o,n),o=km(o,n),a=zm(a),o=zm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+p+a,E=g+u+o,L=Um(r,r.VERTEX_SHADER,v),C=Um(r,r.FRAGMENT_SHADER,E);r.attachShader(x,L),r.attachShader(x,C),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function A(P){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(x).trim(),W=r.getShaderInfoLog(L).trim(),q=r.getShaderInfoLog(C).trim();let K=!0,I=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,L,C);else{const F=Fm(r,L,"vertex"),b=Fm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+V+`
`+F+`
`+b)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(W===""||q==="")&&(I=!1);I&&(P.diagnostics={runnable:K,programLog:V,vertexShader:{log:W,prefix:p},fragmentShader:{log:q,prefix:u}})}r.deleteShader(L),r.deleteShader(C),N=new ul(r,x),T=oC(r,x)}let N;this.getUniforms=function(){return N===void 0&&A(this),N};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,QA)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JA++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=C,this}let xC=0;class yC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new SC(e),n.set(e,i)),i}}class SC{constructor(e){this.id=xC++,this.code=e,this.usedTimes=0}}function MC(t,e,n,i,r,s,a){const o=new fh,l=new yC,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,y,P,V,W){const q=V.fog,K=W.geometry,I=T.isMeshStandardMaterial?V.environment:null,F=(T.isMeshStandardMaterial?n:e).get(T.envMap||I),b=F&&F.mapping===uc?F.image.height:null,B=_[T.type];T.precision!==null&&(m=r.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const Y=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ne=Y!==void 0?Y.length:0;let ye=0;K.morphAttributes.position!==void 0&&(ye=1),K.morphAttributes.normal!==void 0&&(ye=2),K.morphAttributes.color!==void 0&&(ye=3);let Re,$,re,pe;if(B){const Ze=Yn[B];Re=Ze.vertexShader,$=Ze.fragmentShader}else Re=T.vertexShader,$=T.fragmentShader,l.update(T),re=l.getVertexShaderID(T),pe=l.getFragmentShaderID(T);const fe=t.getRenderTarget(),De=W.isInstancedMesh===!0,ke=W.isBatchedMesh===!0,Be=!!T.map,rt=!!T.matcap,D=!!F,ee=!!T.aoMap,oe=!!T.lightMap,_e=!!T.bumpMap,te=!!T.normalMap,Ae=!!T.displacementMap,Te=!!T.emissiveMap,Ne=!!T.metalnessMap,R=!!T.roughnessMap,S=T.anisotropy>0,H=T.clearcoat>0,Q=T.dispersion>0,se=T.iridescence>0,ie=T.sheen>0,be=T.transmission>0,me=S&&!!T.anisotropyMap,Se=H&&!!T.clearcoatMap,Ve=H&&!!T.clearcoatNormalMap,le=H&&!!T.clearcoatRoughnessMap,xe=se&&!!T.iridescenceMap,$e=se&&!!T.iridescenceThicknessMap,Oe=ie&&!!T.sheenColorMap,Me=ie&&!!T.sheenRoughnessMap,ze=!!T.specularMap,We=!!T.specularColorMap,dt=!!T.specularIntensityMap,U=be&&!!T.transmissionMap,ce=be&&!!T.thicknessMap,Z=!!T.gradientMap,J=!!T.alphaMap,de=T.alphaTest>0,Ie=!!T.alphaHash,qe=!!T.extensions;let xt=Yi;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(xt=t.toneMapping);const Nt={shaderID:B,shaderType:T.type,shaderName:T.name,vertexShader:Re,fragmentShader:$,defines:T.defines,customVertexShaderID:re,customFragmentShaderID:pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:ke,batchingColor:ke&&W._colorsTexture!==null,instancing:De,instancingColor:De&&W.instanceColor!==null,instancingMorph:De&&W.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:tr,alphaToCoverage:!!T.alphaToCoverage,map:Be,matcap:rt,envMap:D,envMapMode:D&&F.mapping,envMapCubeUVHeight:b,aoMap:ee,lightMap:oe,bumpMap:_e,normalMap:te,displacementMap:f&&Ae,emissiveMap:Te,normalMapObjectSpace:te&&T.normalMapType===LE,normalMapTangentSpace:te&&T.normalMapType===i_,metalnessMap:Ne,roughnessMap:R,anisotropy:S,anisotropyMap:me,clearcoat:H,clearcoatMap:Se,clearcoatNormalMap:Ve,clearcoatRoughnessMap:le,dispersion:Q,iridescence:se,iridescenceMap:xe,iridescenceThicknessMap:$e,sheen:ie,sheenColorMap:Oe,sheenRoughnessMap:Me,specularMap:ze,specularColorMap:We,specularIntensityMap:dt,transmission:be,transmissionMap:U,thicknessMap:ce,gradientMap:Z,opaque:T.transparent===!1&&T.blending===Ms&&T.alphaToCoverage===!1,alphaMap:J,alphaTest:de,alphaHash:Ie,combine:T.combine,mapUv:Be&&x(T.map.channel),aoMapUv:ee&&x(T.aoMap.channel),lightMapUv:oe&&x(T.lightMap.channel),bumpMapUv:_e&&x(T.bumpMap.channel),normalMapUv:te&&x(T.normalMap.channel),displacementMapUv:Ae&&x(T.displacementMap.channel),emissiveMapUv:Te&&x(T.emissiveMap.channel),metalnessMapUv:Ne&&x(T.metalnessMap.channel),roughnessMapUv:R&&x(T.roughnessMap.channel),anisotropyMapUv:me&&x(T.anisotropyMap.channel),clearcoatMapUv:Se&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:Me&&x(T.sheenRoughnessMap.channel),specularMapUv:ze&&x(T.specularMap.channel),specularColorMapUv:We&&x(T.specularColorMap.channel),specularIntensityMapUv:dt&&x(T.specularIntensityMap.channel),transmissionMapUv:U&&x(T.transmissionMap.channel),thicknessMapUv:ce&&x(T.thicknessMap.channel),alphaMapUv:J&&x(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(te||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!K.attributes.uv&&(Be||J),fog:!!q,useFog:T.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:W.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ye,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:xt,decodeVideoTexture:Be&&T.map.isVideoTexture===!0&&tt.getTransfer(T.map.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qn,flipSided:T.side===on,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:qe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&T.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function u(T){const y=[];if(T.shaderID?y.push(T.shaderID):(y.push(T.customVertexShaderID),y.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)y.push(P),y.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(g(y,T),v(y,T),y.push(t.outputColorSpace)),y.push(T.customProgramCacheKey),y.join()}function g(T,y){T.push(y.precision),T.push(y.outputColorSpace),T.push(y.envMapMode),T.push(y.envMapCubeUVHeight),T.push(y.mapUv),T.push(y.alphaMapUv),T.push(y.lightMapUv),T.push(y.aoMapUv),T.push(y.bumpMapUv),T.push(y.normalMapUv),T.push(y.displacementMapUv),T.push(y.emissiveMapUv),T.push(y.metalnessMapUv),T.push(y.roughnessMapUv),T.push(y.anisotropyMapUv),T.push(y.clearcoatMapUv),T.push(y.clearcoatNormalMapUv),T.push(y.clearcoatRoughnessMapUv),T.push(y.iridescenceMapUv),T.push(y.iridescenceThicknessMapUv),T.push(y.sheenColorMapUv),T.push(y.sheenRoughnessMapUv),T.push(y.specularMapUv),T.push(y.specularColorMapUv),T.push(y.specularIntensityMapUv),T.push(y.transmissionMapUv),T.push(y.thicknessMapUv),T.push(y.combine),T.push(y.fogExp2),T.push(y.sizeAttenuation),T.push(y.morphTargetsCount),T.push(y.morphAttributeCount),T.push(y.numDirLights),T.push(y.numPointLights),T.push(y.numSpotLights),T.push(y.numSpotLightMaps),T.push(y.numHemiLights),T.push(y.numRectAreaLights),T.push(y.numDirLightShadows),T.push(y.numPointLightShadows),T.push(y.numSpotLightShadows),T.push(y.numSpotLightShadowsWithMaps),T.push(y.numLightProbes),T.push(y.shadowMapType),T.push(y.toneMapping),T.push(y.numClippingPlanes),T.push(y.numClipIntersection),T.push(y.depthPacking)}function v(T,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),T.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),T.push(o.mask)}function E(T){const y=_[T.type];let P;if(y){const V=Yn[y];P=s1.clone(V.uniforms)}else P=T.uniforms;return P}function L(T,y){let P;for(let V=0,W=d.length;V<W;V++){const q=d[V];if(q.cacheKey===y){P=q,++P.usedTimes;break}}return P===void 0&&(P=new _C(t,y,T,s),d.push(P)),P}function C(T){if(--T.usedTimes===0){const y=d.indexOf(T);d[y]=d[d.length-1],d.pop(),T.destroy()}}function A(T){l.remove(T)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:E,acquireProgram:L,releaseProgram:C,releaseShaderCache:A,programs:d,dispose:N}}function EC(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function wC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Vm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,m,_,x,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:x,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=x,u.group=p),e++,u}function o(h,f,m,_,x,p){const u=a(h,f,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,_,x,p){const u=a(h,f,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||wC),i.length>1&&i.sort(f||Vm),r.length>1&&r.sort(f||Vm)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function TC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Hm,t.set(i,[a])):r>=s.length?(a=new Hm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function AC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new Ye};break;case"SpotLight":n={position:new G,direction:new G,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function CC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let RC=0;function bC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function PC(t){const e=new AC,n=CC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new ut,a=new ut;function o(c){let d=0,h=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,_=0,x=0,p=0,u=0,g=0,v=0,E=0,L=0,C=0,A=0;c.sort(bC);for(let T=0,y=c.length;T<y;T++){const P=c[T],V=P.color,W=P.intensity,q=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=V.r*W,h+=V.g*W,f+=V.b*W;else if(P.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(P.sh.coefficients[I],W);A++}else if(P.isDirectionalLight){const I=e.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const F=P.shadow,b=n.get(P);b.shadowIntensity=F.intensity,b.shadowBias=F.bias,b.shadowNormalBias=F.normalBias,b.shadowRadius=F.radius,b.shadowMapSize=F.mapSize,i.directionalShadow[m]=b,i.directionalShadowMap[m]=K,i.directionalShadowMatrix[m]=P.shadow.matrix,g++}i.directional[m]=I,m++}else if(P.isSpotLight){const I=e.get(P);I.position.setFromMatrixPosition(P.matrixWorld),I.color.copy(V).multiplyScalar(W),I.distance=q,I.coneCos=Math.cos(P.angle),I.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),I.decay=P.decay,i.spot[x]=I;const F=P.shadow;if(P.map&&(i.spotLightMap[L]=P.map,L++,F.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[x]=F.matrix,P.castShadow){const b=n.get(P);b.shadowIntensity=F.intensity,b.shadowBias=F.bias,b.shadowNormalBias=F.normalBias,b.shadowRadius=F.radius,b.shadowMapSize=F.mapSize,i.spotShadow[x]=b,i.spotShadowMap[x]=K,E++}x++}else if(P.isRectAreaLight){const I=e.get(P);I.color.copy(V).multiplyScalar(W),I.halfWidth.set(P.width*.5,0,0),I.halfHeight.set(0,P.height*.5,0),i.rectArea[p]=I,p++}else if(P.isPointLight){const I=e.get(P);if(I.color.copy(P.color).multiplyScalar(P.intensity),I.distance=P.distance,I.decay=P.decay,P.castShadow){const F=P.shadow,b=n.get(P);b.shadowIntensity=F.intensity,b.shadowBias=F.bias,b.shadowNormalBias=F.normalBias,b.shadowRadius=F.radius,b.shadowMapSize=F.mapSize,b.shadowCameraNear=F.camera.near,b.shadowCameraFar=F.camera.far,i.pointShadow[_]=b,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=I,_++}else if(P.isHemisphereLight){const I=e.get(P);I.skyColor.copy(P.color).multiplyScalar(W),I.groundColor.copy(P.groundColor).multiplyScalar(W),i.hemi[u]=I,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const N=i.hash;(N.directionalLength!==m||N.pointLength!==_||N.spotLength!==x||N.rectAreaLength!==p||N.hemiLength!==u||N.numDirectionalShadows!==g||N.numPointShadows!==v||N.numSpotShadows!==E||N.numSpotMaps!==L||N.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=E+L-C,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,N.directionalLength=m,N.pointLength=_,N.spotLength=x,N.rectAreaLength=p,N.hemiLength=u,N.numDirectionalShadows=g,N.numPointShadows=v,N.numSpotShadows=E,N.numSpotMaps=L,N.numLightProbes=A,i.version=RC++)}function l(c,d){let h=0,f=0,m=0,_=0,x=0;const p=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const E=i.directional[h];E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),h++}else if(v.isSpotLight){const E=i.spot[m];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const E=i.rectArea[_];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const E=i.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const E=i.hemi[x];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:i}}function Gm(t){const e=new PC(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function LC(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Gm(t),e.set(r,[o])):s>=a.length?(o=new Gm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class NC extends Ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class DC extends Ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const IC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,UC=`uniform sampler2D shadow_pass;
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
}`;function FC(t,e,n){let i=new ph;const r=new je,s=new je,a=new Tt,o=new NC({depthPacking:PE}),l=new DC,c={},d=n.maxTextureSize,h={[Ki]:on,[on]:Ki,[qn]:qn},f=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:IC,fragmentShader:UC}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Gn;_.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new nn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gv;let u=this.type;this.render=function(C,A,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),y=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Xi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=u!==li&&this.type===li,q=u===li&&this.type!==li;for(let K=0,I=C.length;K<I;K++){const F=C[K],b=F.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;r.copy(b.mapSize);const B=b.getFrameExtents();if(r.multiply(B),s.copy(b.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/B.x),r.x=s.x*B.x,b.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/B.y),r.y=s.y*B.y,b.mapSize.y=s.y)),b.map===null||W===!0||q===!0){const ne=this.type!==li?{minFilter:An,magFilter:An}:{};b.map!==null&&b.map.dispose(),b.map=new Pr(r.x,r.y,ne),b.map.texture.name=F.name+".shadowMap",b.camera.updateProjectionMatrix()}t.setRenderTarget(b.map),t.clear();const Y=b.getViewportCount();for(let ne=0;ne<Y;ne++){const ye=b.getViewport(ne);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),V.viewport(a),b.updateMatrices(F,ne),i=b.getFrustum(),E(A,N,b.camera,F,this.type)}b.isPointLightShadow!==!0&&this.type===li&&g(b,N),b.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(T,y,P)};function g(C,A){const N=e.update(x);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Pr(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(A,null,N,f,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(A,null,N,m,x,null)}function v(C,A,N,T){let y=null;const P=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)y=P;else if(y=N.isPointLight===!0?l:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=y.uuid,W=A.uuid;let q=c[V];q===void 0&&(q={},c[V]=q);let K=q[W];K===void 0&&(K=y.clone(),q[W]=K,A.addEventListener("dispose",L)),y=K}if(y.visible=A.visible,y.wireframe=A.wireframe,T===li?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:h[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,N.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const V=t.properties.get(y);V.light=N}return y}function E(C,A,N,T,y){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===li)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const W=e.update(C),q=C.material;if(Array.isArray(q)){const K=W.groups;for(let I=0,F=K.length;I<F;I++){const b=K[I],B=q[b.materialIndex];if(B&&B.visible){const Y=v(C,B,T,y);C.onBeforeShadow(t,C,A,N,W,Y,b),t.renderBufferDirect(N,null,W,Y,C,b),C.onAfterShadow(t,C,A,N,W,Y,b)}}}else if(q.visible){const K=v(C,q,T,y);C.onBeforeShadow(t,C,A,N,W,K,null),t.renderBufferDirect(N,null,W,K,C,null),C.onAfterShadow(t,C,A,N,W,K,null)}}const V=C.children;for(let W=0,q=V.length;W<q;W++)E(V[W],A,N,T,y)}function L(C){C.target.removeEventListener("dispose",L);for(const N in c){const T=c[N],y=C.target.uuid;y in T&&(T[y].dispose(),delete T[y])}}}function OC(t){function e(){let U=!1;const ce=new Tt;let Z=null;const J=new Tt(0,0,0,0);return{setMask:function(de){Z!==de&&!U&&(t.colorMask(de,de,de,de),Z=de)},setLocked:function(de){U=de},setClear:function(de,Ie,qe,xt,Nt){Nt===!0&&(de*=xt,Ie*=xt,qe*=xt),ce.set(de,Ie,qe,xt),J.equals(ce)===!1&&(t.clearColor(de,Ie,qe,xt),J.copy(ce))},reset:function(){U=!1,Z=null,J.set(-1,0,0,0)}}}function n(){let U=!1,ce=null,Z=null,J=null;return{setTest:function(de){de?pe(t.DEPTH_TEST):fe(t.DEPTH_TEST)},setMask:function(de){ce!==de&&!U&&(t.depthMask(de),ce=de)},setFunc:function(de){if(Z!==de){switch(de){case fE:t.depthFunc(t.NEVER);break;case hE:t.depthFunc(t.ALWAYS);break;case pE:t.depthFunc(t.LESS);break;case Fl:t.depthFunc(t.LEQUAL);break;case mE:t.depthFunc(t.EQUAL);break;case gE:t.depthFunc(t.GEQUAL);break;case vE:t.depthFunc(t.GREATER);break;case _E:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=de}},setLocked:function(de){U=de},setClear:function(de){J!==de&&(t.clearDepth(de),J=de)},reset:function(){U=!1,ce=null,Z=null,J=null}}}function i(){let U=!1,ce=null,Z=null,J=null,de=null,Ie=null,qe=null,xt=null,Nt=null;return{setTest:function(Ze){U||(Ze?pe(t.STENCIL_TEST):fe(t.STENCIL_TEST))},setMask:function(Ze){ce!==Ze&&!U&&(t.stencilMask(Ze),ce=Ze)},setFunc:function(Ze,ti,Wn){(Z!==Ze||J!==ti||de!==Wn)&&(t.stencilFunc(Ze,ti,Wn),Z=Ze,J=ti,de=Wn)},setOp:function(Ze,ti,Wn){(Ie!==Ze||qe!==ti||xt!==Wn)&&(t.stencilOp(Ze,ti,Wn),Ie=Ze,qe=ti,xt=Wn)},setLocked:function(Ze){U=Ze},setClear:function(Ze){Nt!==Ze&&(t.clearStencil(Ze),Nt=Ze)},reset:function(){U=!1,ce=null,Z=null,J=null,de=null,Ie=null,qe=null,xt=null,Nt=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],m=null,_=!1,x=null,p=null,u=null,g=null,v=null,E=null,L=null,C=new Ye(0,0,0),A=0,N=!1,T=null,y=null,P=null,V=null,W=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,I=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(F)[1]),K=I>=1):F.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),K=I>=2);let b=null,B={};const Y=t.getParameter(t.SCISSOR_BOX),ne=t.getParameter(t.VIEWPORT),ye=new Tt().fromArray(Y),Re=new Tt().fromArray(ne);function $(U,ce,Z,J){const de=new Uint8Array(4),Ie=t.createTexture();t.bindTexture(U,Ie),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<Z;qe++)U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?t.texImage3D(ce,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(ce+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return Ie}const re={};re[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),pe(t.DEPTH_TEST),s.setFunc(Fl),_e(!1),te(qp),pe(t.CULL_FACE),ee(Xi);function pe(U){c[U]!==!0&&(t.enable(U),c[U]=!0)}function fe(U){c[U]!==!1&&(t.disable(U),c[U]=!1)}function De(U,ce){return d[U]!==ce?(t.bindFramebuffer(U,ce),d[U]=ce,U===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ce),U===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ce),!0):!1}function ke(U,ce){let Z=f,J=!1;if(U){Z=h.get(ce),Z===void 0&&(Z=[],h.set(ce,Z));const de=U.textures;if(Z.length!==de.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let Ie=0,qe=de.length;Ie<qe;Ie++)Z[Ie]=t.COLOR_ATTACHMENT0+Ie;Z.length=de.length,J=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,J=!0);J&&t.drawBuffers(Z)}function Be(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const rt={[pr]:t.FUNC_ADD,[qM]:t.FUNC_SUBTRACT,[KM]:t.FUNC_REVERSE_SUBTRACT};rt[ZM]=t.MIN,rt[QM]=t.MAX;const D={[JM]:t.ZERO,[eE]:t.ONE,[tE]:t.SRC_COLOR,[Td]:t.SRC_ALPHA,[oE]:t.SRC_ALPHA_SATURATE,[sE]:t.DST_COLOR,[iE]:t.DST_ALPHA,[nE]:t.ONE_MINUS_SRC_COLOR,[Ad]:t.ONE_MINUS_SRC_ALPHA,[aE]:t.ONE_MINUS_DST_COLOR,[rE]:t.ONE_MINUS_DST_ALPHA,[lE]:t.CONSTANT_COLOR,[cE]:t.ONE_MINUS_CONSTANT_COLOR,[uE]:t.CONSTANT_ALPHA,[dE]:t.ONE_MINUS_CONSTANT_ALPHA};function ee(U,ce,Z,J,de,Ie,qe,xt,Nt,Ze){if(U===Xi){_===!0&&(fe(t.BLEND),_=!1);return}if(_===!1&&(pe(t.BLEND),_=!0),U!==$M){if(U!==x||Ze!==N){if((p!==pr||v!==pr)&&(t.blendEquation(t.FUNC_ADD),p=pr,v=pr),Ze)switch(U){case Ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kp:t.blendFunc(t.ONE,t.ONE);break;case Zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Kp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Zp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}u=null,g=null,E=null,L=null,C.set(0,0,0),A=0,x=U,N=Ze}return}de=de||ce,Ie=Ie||Z,qe=qe||J,(ce!==p||de!==v)&&(t.blendEquationSeparate(rt[ce],rt[de]),p=ce,v=de),(Z!==u||J!==g||Ie!==E||qe!==L)&&(t.blendFuncSeparate(D[Z],D[J],D[Ie],D[qe]),u=Z,g=J,E=Ie,L=qe),(xt.equals(C)===!1||Nt!==A)&&(t.blendColor(xt.r,xt.g,xt.b,Nt),C.copy(xt),A=Nt),x=U,N=!1}function oe(U,ce){U.side===qn?fe(t.CULL_FACE):pe(t.CULL_FACE);let Z=U.side===on;ce&&(Z=!Z),_e(Z),U.blending===Ms&&U.transparent===!1?ee(Xi):ee(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const J=U.stencilWrite;a.setTest(J),J&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Te(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function _e(U){T!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),T=U)}function te(U){U!==XM?(pe(t.CULL_FACE),U!==y&&(U===qp?t.cullFace(t.BACK):U===YM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):fe(t.CULL_FACE),y=U}function Ae(U){U!==P&&(K&&t.lineWidth(U),P=U)}function Te(U,ce,Z){U?(pe(t.POLYGON_OFFSET_FILL),(V!==ce||W!==Z)&&(t.polygonOffset(ce,Z),V=ce,W=Z)):fe(t.POLYGON_OFFSET_FILL)}function Ne(U){U?pe(t.SCISSOR_TEST):fe(t.SCISSOR_TEST)}function R(U){U===void 0&&(U=t.TEXTURE0+q-1),b!==U&&(t.activeTexture(U),b=U)}function S(U,ce,Z){Z===void 0&&(b===null?Z=t.TEXTURE0+q-1:Z=b);let J=B[Z];J===void 0&&(J={type:void 0,texture:void 0},B[Z]=J),(J.type!==U||J.texture!==ce)&&(b!==Z&&(t.activeTexture(Z),b=Z),t.bindTexture(U,ce||re[U]),J.type=U,J.texture=ce)}function H(){const U=B[b];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function me(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $e(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Oe(U){ye.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),ye.copy(U))}function Me(U){Re.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Re.copy(U))}function ze(U,ce){let Z=l.get(ce);Z===void 0&&(Z=new WeakMap,l.set(ce,Z));let J=Z.get(U);J===void 0&&(J=t.getUniformBlockIndex(ce,U.name),Z.set(U,J))}function We(U,ce){const J=l.get(ce).get(U);o.get(ce)!==J&&(t.uniformBlockBinding(ce,J,U.__bindingPointIndex),o.set(ce,J))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},b=null,B={},d={},h=new WeakMap,f=[],m=null,_=!1,x=null,p=null,u=null,g=null,v=null,E=null,L=null,C=new Ye(0,0,0),A=0,N=!1,T=null,y=null,P=null,V=null,W=null,ye.set(0,0,t.canvas.width,t.canvas.height),Re.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:pe,disable:fe,bindFramebuffer:De,drawBuffers:ke,useProgram:Be,setBlending:ee,setMaterial:oe,setFlipSided:_e,setCullFace:te,setLineWidth:Ae,setPolygonOffset:Te,setScissorTest:Ne,activeTexture:R,bindTexture:S,unbindTexture:H,compressedTexImage2D:Q,compressedTexImage3D:se,texImage2D:xe,texImage3D:$e,updateUBOMapping:ze,uniformBlockBinding:We,texStorage2D:Ve,texStorage3D:le,texSubImage2D:ie,texSubImage3D:be,compressedTexSubImage2D:me,compressedTexSubImage3D:Se,scissor:Oe,viewport:Me,reset:dt}}function Wm(t,e,n,i){const r=kC(i);switch(n){case Kv:return t*e;case Qv:return t*e;case Jv:return t*e*2;case e_:return t*e/r.components*r.byteLength;case oh:return t*e/r.components*r.byteLength;case t_:return t*e*2/r.components*r.byteLength;case lh:return t*e*2/r.components*r.byteLength;case Zv:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case ch:return t*e*4/r.components*r.byteLength;case sl:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ol:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nd:case Id:return Math.max(t,16)*Math.max(e,8)/4;case Ld:case Dd:return Math.max(t,8)*Math.max(e,8)/2;case Ud:case Fd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Od:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case jd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Xd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case qd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Kd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case cl:case Qd:case Jd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case n_:case ef:return Math.ceil(t/4)*Math.ceil(e/4)*8;case tf:case nf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kC(t){switch(t){case yi:case Yv:return{byteLength:1,components:1};case Ha:case $v:case Ka:return{byteLength:2,components:1};case sh:case ah:return{byteLength:2,components:4};case br:case rh:case hi:return{byteLength:4,components:1};case qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function zC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return m?new OffscreenCanvas(R,S):Vl("canvas")}function x(R,S,H){let Q=1;const se=Ne(R);if((se.width>H||se.height>H)&&(Q=H/Math.max(se.width,se.height)),Q<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ie=Math.floor(Q*se.width),be=Math.floor(Q*se.height);h===void 0&&(h=_(ie,be));const me=S?_(ie,be):h;return me.width=ie,me.height=be,me.getContext("2d").drawImage(R,0,0,ie,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+ie+"x"+be+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==An&&R.minFilter!==kn}function u(R){t.generateMipmap(R)}function g(R,S,H,Q,se=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=S;if(S===t.RED&&(H===t.FLOAT&&(ie=t.R32F),H===t.HALF_FLOAT&&(ie=t.R16F),H===t.UNSIGNED_BYTE&&(ie=t.R8)),S===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ie=t.R8UI),H===t.UNSIGNED_SHORT&&(ie=t.R16UI),H===t.UNSIGNED_INT&&(ie=t.R32UI),H===t.BYTE&&(ie=t.R8I),H===t.SHORT&&(ie=t.R16I),H===t.INT&&(ie=t.R32I)),S===t.RG&&(H===t.FLOAT&&(ie=t.RG32F),H===t.HALF_FLOAT&&(ie=t.RG16F),H===t.UNSIGNED_BYTE&&(ie=t.RG8)),S===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ie=t.RG8UI),H===t.UNSIGNED_SHORT&&(ie=t.RG16UI),H===t.UNSIGNED_INT&&(ie=t.RG32UI),H===t.BYTE&&(ie=t.RG8I),H===t.SHORT&&(ie=t.RG16I),H===t.INT&&(ie=t.RG32I)),S===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),S===t.RGBA){const be=se?Ol:tt.getTransfer(Q);H===t.FLOAT&&(ie=t.RGBA32F),H===t.HALF_FLOAT&&(ie=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ie=be===ot?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(R,S){let H;return R?S===null||S===br||S===Us?H=t.DEPTH24_STENCIL8:S===hi?H=t.DEPTH32F_STENCIL8:S===Ha&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===br||S===Us?H=t.DEPTH_COMPONENT24:S===hi?H=t.DEPTH_COMPONENT32F:S===Ha&&(H=t.DEPTH_COMPONENT16),H}function E(R,S){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==An&&R.minFilter!==kn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function L(R){const S=R.target;S.removeEventListener("dispose",L),A(S),S.isVideoTexture&&d.delete(S)}function C(R){const S=R.target;S.removeEventListener("dispose",C),T(S)}function A(R){const S=i.get(R);if(S.__webglInit===void 0)return;const H=R.source,Q=f.get(H);if(Q){const se=Q[S.__cacheKey];se.usedTimes--,se.usedTimes===0&&N(R),Object.keys(Q).length===0&&f.delete(H)}i.remove(R)}function N(R){const S=i.get(R);t.deleteTexture(S.__webglTexture);const H=R.source,Q=f.get(H);delete Q[S.__cacheKey],a.memory.textures--}function T(R){const S=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(S.__webglFramebuffer[Q]))for(let se=0;se<S.__webglFramebuffer[Q].length;se++)t.deleteFramebuffer(S.__webglFramebuffer[Q][se]);else t.deleteFramebuffer(S.__webglFramebuffer[Q]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[Q])}else{if(Array.isArray(S.__webglFramebuffer))for(let Q=0;Q<S.__webglFramebuffer.length;Q++)t.deleteFramebuffer(S.__webglFramebuffer[Q]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=R.textures;for(let Q=0,se=H.length;Q<se;Q++){const ie=i.get(H[Q]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(H[Q])}i.remove(R)}let y=0;function P(){y=0}function V(){const R=y;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),y+=1,R}function W(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function q(R,S){const H=i.get(R);if(R.isVideoTexture&&Ae(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const Q=R.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(H,R,S);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+S)}function K(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Re(H,R,S);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+S)}function I(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){Re(H,R,S);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+S)}function F(R,S){const H=i.get(R);if(R.version>0&&H.__version!==R.version){$(H,R,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+S)}const b={[bd]:t.REPEAT,[xr]:t.CLAMP_TO_EDGE,[Pd]:t.MIRRORED_REPEAT},B={[An]:t.NEAREST,[RE]:t.NEAREST_MIPMAP_NEAREST,[Eo]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[qc]:t.LINEAR_MIPMAP_NEAREST,[yr]:t.LINEAR_MIPMAP_LINEAR},Y={[NE]:t.NEVER,[kE]:t.ALWAYS,[DE]:t.LESS,[r_]:t.LEQUAL,[IE]:t.EQUAL,[OE]:t.GEQUAL,[UE]:t.GREATER,[FE]:t.NOTEQUAL};function ne(R,S){if(S.type===hi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===kn||S.magFilter===qc||S.magFilter===Eo||S.magFilter===yr||S.minFilter===kn||S.minFilter===qc||S.minFilter===Eo||S.minFilter===yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,b[S.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,b[S.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,b[S.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,B[S.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,B[S.minFilter]),S.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Y[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===An||S.minFilter!==Eo&&S.minFilter!==yr||S.type===hi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function ye(R,S){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L));const Q=S.source;let se=f.get(Q);se===void 0&&(se={},f.set(Q,se));const ie=W(S);if(ie!==R.__cacheKey){se[ie]===void 0&&(se[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,H=!0),se[ie].usedTimes++;const be=se[R.__cacheKey];be!==void 0&&(se[R.__cacheKey].usedTimes--,be.usedTimes===0&&N(S)),R.__cacheKey=ie,R.__webglTexture=se[ie].texture}return H}function Re(R,S,H){let Q=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Q=t.TEXTURE_3D);const se=ye(R,S),ie=S.source;n.bindTexture(Q,R.__webglTexture,t.TEXTURE0+H);const be=i.get(ie);if(ie.version!==be.__version||se===!0){n.activeTexture(t.TEXTURE0+H);const me=tt.getPrimaries(tt.workingColorSpace),Se=S.colorSpace===Ii?null:tt.getPrimaries(S.colorSpace),Ve=S.colorSpace===Ii||me===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let le=x(S.image,!1,r.maxTextureSize);le=Te(S,le);const xe=s.convert(S.format,S.colorSpace),$e=s.convert(S.type);let Oe=g(S.internalFormat,xe,$e,S.colorSpace,S.isVideoTexture);ne(Q,S);let Me;const ze=S.mipmaps,We=S.isVideoTexture!==!0,dt=be.__version===void 0||se===!0,U=ie.dataReady,ce=E(S,le);if(S.isDepthTexture)Oe=v(S.format===Fs,S.type),dt&&(We?n.texStorage2D(t.TEXTURE_2D,1,Oe,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Oe,le.width,le.height,0,xe,$e,null));else if(S.isDataTexture)if(ze.length>0){We&&dt&&n.texStorage2D(t.TEXTURE_2D,ce,Oe,ze[0].width,ze[0].height);for(let Z=0,J=ze.length;Z<J;Z++)Me=ze[Z],We?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Me.width,Me.height,xe,$e,Me.data):n.texImage2D(t.TEXTURE_2D,Z,Oe,Me.width,Me.height,0,xe,$e,Me.data);S.generateMipmaps=!1}else We?(dt&&n.texStorage2D(t.TEXTURE_2D,ce,Oe,le.width,le.height),U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,xe,$e,le.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,le.width,le.height,0,xe,$e,le.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Oe,ze[0].width,ze[0].height,le.depth);for(let Z=0,J=ze.length;Z<J;Z++)if(Me=ze[Z],S.format!==zn)if(xe!==null)if(We){if(U)if(S.layerUpdates.size>0){const de=Wm(Me.width,Me.height,S.format,S.type);for(const Ie of S.layerUpdates){const qe=Me.data.subarray(Ie*de/Me.data.BYTES_PER_ELEMENT,(Ie+1)*de/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,Ie,Me.width,Me.height,1,xe,qe,0,0)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,le.depth,xe,Me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Z,Oe,Me.width,Me.height,le.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?U&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Z,0,0,0,Me.width,Me.height,le.depth,xe,$e,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Z,Oe,Me.width,Me.height,le.depth,0,xe,$e,Me.data)}else{We&&dt&&n.texStorage2D(t.TEXTURE_2D,ce,Oe,ze[0].width,ze[0].height);for(let Z=0,J=ze.length;Z<J;Z++)Me=ze[Z],S.format!==zn?xe!==null?We?U&&n.compressedTexSubImage2D(t.TEXTURE_2D,Z,0,0,Me.width,Me.height,xe,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,Z,Oe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,Me.width,Me.height,xe,$e,Me.data):n.texImage2D(t.TEXTURE_2D,Z,Oe,Me.width,Me.height,0,xe,$e,Me.data)}else if(S.isDataArrayTexture)if(We){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,Oe,le.width,le.height,le.depth),U)if(S.layerUpdates.size>0){const Z=Wm(le.width,le.height,S.format,S.type);for(const J of S.layerUpdates){const de=le.data.subarray(J*Z/le.data.BYTES_PER_ELEMENT,(J+1)*Z/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,le.width,le.height,1,xe,$e,de)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,xe,$e,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,le.width,le.height,le.depth,0,xe,$e,le.data);else if(S.isData3DTexture)We?(dt&&n.texStorage3D(t.TEXTURE_3D,ce,Oe,le.width,le.height,le.depth),U&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,xe,$e,le.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,le.width,le.height,le.depth,0,xe,$e,le.data);else if(S.isFramebufferTexture){if(dt)if(We)n.texStorage2D(t.TEXTURE_2D,ce,Oe,le.width,le.height);else{let Z=le.width,J=le.height;for(let de=0;de<ce;de++)n.texImage2D(t.TEXTURE_2D,de,Oe,Z,J,0,xe,$e,null),Z>>=1,J>>=1}}else if(ze.length>0){if(We&&dt){const Z=Ne(ze[0]);n.texStorage2D(t.TEXTURE_2D,ce,Oe,Z.width,Z.height)}for(let Z=0,J=ze.length;Z<J;Z++)Me=ze[Z],We?U&&n.texSubImage2D(t.TEXTURE_2D,Z,0,0,xe,$e,Me):n.texImage2D(t.TEXTURE_2D,Z,Oe,xe,$e,Me);S.generateMipmaps=!1}else if(We){if(dt){const Z=Ne(le);n.texStorage2D(t.TEXTURE_2D,ce,Oe,Z.width,Z.height)}U&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,$e,le)}else n.texImage2D(t.TEXTURE_2D,0,Oe,xe,$e,le);p(S)&&u(Q),be.__version=ie.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function $(R,S,H){if(S.image.length!==6)return;const Q=ye(R,S),se=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+H);const ie=i.get(se);if(se.version!==ie.__version||Q===!0){n.activeTexture(t.TEXTURE0+H);const be=tt.getPrimaries(tt.workingColorSpace),me=S.colorSpace===Ii?null:tt.getPrimaries(S.colorSpace),Se=S.colorSpace===Ii||be===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ve=S.isCompressedTexture||S.image[0].isCompressedTexture,le=S.image[0]&&S.image[0].isDataTexture,xe=[];for(let J=0;J<6;J++)!Ve&&!le?xe[J]=x(S.image[J],!0,r.maxCubemapSize):xe[J]=le?S.image[J].image:S.image[J],xe[J]=Te(S,xe[J]);const $e=xe[0],Oe=s.convert(S.format,S.colorSpace),Me=s.convert(S.type),ze=g(S.internalFormat,Oe,Me,S.colorSpace),We=S.isVideoTexture!==!0,dt=ie.__version===void 0||Q===!0,U=se.dataReady;let ce=E(S,$e);ne(t.TEXTURE_CUBE_MAP,S);let Z;if(Ve){We&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,$e.width,$e.height);for(let J=0;J<6;J++){Z=xe[J].mipmaps;for(let de=0;de<Z.length;de++){const Ie=Z[de];S.format!==zn?Oe!==null?We?U&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,Ie.width,Ie.height,Oe,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,ze,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,Ie.width,Ie.height,Oe,Me,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,ze,Ie.width,Ie.height,0,Oe,Me,Ie.data)}}}else{if(Z=S.mipmaps,We&&dt){Z.length>0&&ce++;const J=Ne(xe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ce,ze,J.width,J.height)}for(let J=0;J<6;J++)if(le){We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xe[J].width,xe[J].height,Oe,Me,xe[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,xe[J].width,xe[J].height,0,Oe,Me,xe[J].data);for(let de=0;de<Z.length;de++){const qe=Z[de].image[J].image;We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,qe.width,qe.height,Oe,Me,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,ze,qe.width,qe.height,0,Oe,Me,qe.data)}}else{We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Oe,Me,xe[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,ze,Oe,Me,xe[J]);for(let de=0;de<Z.length;de++){const Ie=Z[de];We?U&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,Oe,Me,Ie.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,ze,Oe,Me,Ie.image[J])}}}p(S)&&u(t.TEXTURE_CUBE_MAP),ie.__version=se.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function re(R,S,H,Q,se,ie){const be=s.convert(H.format,H.colorSpace),me=s.convert(H.type),Se=g(H.internalFormat,be,me,H.colorSpace);if(!i.get(S).__hasExternalTextures){const le=Math.max(1,S.width>>ie),xe=Math.max(1,S.height>>ie);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,ie,Se,le,xe,S.depth,0,be,me,null):n.texImage2D(se,ie,Se,le,xe,0,be,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),te(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,se,i.get(H).__webglTexture,0,_e(S)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,se,i.get(H).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function pe(R,S,H){if(t.bindRenderbuffer(t.RENDERBUFFER,R),S.depthBuffer){const Q=S.depthTexture,se=Q&&Q.isDepthTexture?Q.type:null,ie=v(S.stencilBuffer,se),be=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=_e(S);te(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,ie,S.width,S.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,ie,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,be,t.RENDERBUFFER,R)}else{const Q=S.textures;for(let se=0;se<Q.length;se++){const ie=Q[se],be=s.convert(ie.format,ie.colorSpace),me=s.convert(ie.type),Se=g(ie.internalFormat,be,me,ie.colorSpace),Ve=_e(S);H&&te(S)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Se,S.width,S.height):te(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ve,Se,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Se,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q(S.depthTexture,0);const Q=i.get(S.depthTexture).__webglTexture,se=_e(S);if(S.depthTexture.format===Es)te(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(S.depthTexture.format===Fs)te(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,se):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function De(R){const S=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");fe(S.__webglFramebuffer,R)}else if(H){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=t.createRenderbuffer(),pe(S.__webglDepthbuffer[Q],R,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=t.createRenderbuffer(),pe(S.__webglDepthbuffer,R,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(R,S,H){const Q=i.get(R);S!==void 0&&re(Q.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&De(R)}function Be(R){const S=R.texture,H=i.get(R),Q=i.get(S);R.addEventListener("dispose",C);const se=R.textures,ie=R.isWebGLCubeRenderTarget===!0,be=se.length>1;if(be||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=S.version,a.memory.textures++),ie){H.__webglFramebuffer=[];for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[me]=[];for(let Se=0;Se<S.mipmaps.length;Se++)H.__webglFramebuffer[me][Se]=t.createFramebuffer()}else H.__webglFramebuffer[me]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)H.__webglFramebuffer[me]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(be)for(let me=0,Se=se.length;me<Se;me++){const Ve=i.get(se[me]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&te(R)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let me=0;me<se.length;me++){const Se=se[me];H.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[me]);const Ve=s.convert(Se.format,Se.colorSpace),le=s.convert(Se.type),xe=g(Se.internalFormat,Ve,le,Se.colorSpace,R.isXRRenderTarget===!0),$e=_e(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,xe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,H.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),pe(H.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ne(t.TEXTURE_CUBE_MAP,S);for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)re(H.__webglFramebuffer[me][Se],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Se);else re(H.__webglFramebuffer[me],R,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);p(S)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(be){for(let me=0,Se=se.length;me<Se;me++){const Ve=se[me],le=i.get(Ve);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),ne(t.TEXTURE_2D,Ve),re(H.__webglFramebuffer,R,Ve,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,0),p(Ve)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Q.__webglTexture),ne(me,S),S.mipmaps&&S.mipmaps.length>0)for(let Se=0;Se<S.mipmaps.length;Se++)re(H.__webglFramebuffer[Se],R,S,t.COLOR_ATTACHMENT0,me,Se);else re(H.__webglFramebuffer,R,S,t.COLOR_ATTACHMENT0,me,0);p(S)&&u(me),n.unbindTexture()}R.depthBuffer&&De(R)}function rt(R){const S=R.textures;for(let H=0,Q=S.length;H<Q;H++){const se=S[H];if(p(se)){const ie=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,be=i.get(se).__webglTexture;n.bindTexture(ie,be),u(ie),n.unbindTexture()}}}const D=[],ee=[];function oe(R){if(R.samples>0){if(te(R)===!1){const S=R.textures,H=R.width,Q=R.height;let se=t.COLOR_BUFFER_BIT;const ie=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,be=i.get(R),me=S.length>1;if(me)for(let Se=0;Se<S.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);const Ve=i.get(S[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ve,0)}t.blitFramebuffer(0,0,H,Q,0,0,H,Q,se,t.NEAREST),l===!0&&(D.length=0,ee.length=0,D.push(t.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(D.push(ie),ee.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ee)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Se=0;Se<S.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);const Ve=i.get(S[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function _e(R){return Math.min(r.maxSamples,R.samples)}function te(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ae(R){const S=a.render.frame;d.get(R)!==S&&(d.set(R,S),R.update())}function Te(R,S){const H=R.colorSpace,Q=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==tr&&H!==Ii&&(tt.getTransfer(H)===ot?(Q!==zn||se!==yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Ne(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=I,this.setTextureCube=F,this.rebindTextures=ke,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=oe,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=re,this.useMultisampledRTT=te}function BC(t,e){function n(i,r=Ii){let s;const a=tt.getTransfer(r);if(i===yi)return t.UNSIGNED_BYTE;if(i===sh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ah)return t.UNSIGNED_SHORT_5_5_5_1;if(i===qv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Yv)return t.BYTE;if(i===$v)return t.SHORT;if(i===Ha)return t.UNSIGNED_SHORT;if(i===rh)return t.INT;if(i===br)return t.UNSIGNED_INT;if(i===hi)return t.FLOAT;if(i===Ka)return t.HALF_FLOAT;if(i===Kv)return t.ALPHA;if(i===Zv)return t.RGB;if(i===zn)return t.RGBA;if(i===Qv)return t.LUMINANCE;if(i===Jv)return t.LUMINANCE_ALPHA;if(i===Es)return t.DEPTH_COMPONENT;if(i===Fs)return t.DEPTH_STENCIL;if(i===e_)return t.RED;if(i===oh)return t.RED_INTEGER;if(i===t_)return t.RG;if(i===lh)return t.RG_INTEGER;if(i===ch)return t.RGBA_INTEGER;if(i===sl||i===al||i===ol||i===ll)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ld||i===Nd||i===Dd||i===Id)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ld)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Id)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ud||i===Fd||i===Od)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ud||i===Fd)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Od)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===kd||i===zd||i===Bd||i===Vd||i===Hd||i===Gd||i===Wd||i===jd||i===Xd||i===Yd||i===$d||i===qd||i===Kd||i===Zd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===kd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===zd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Hd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Wd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===jd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$d)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===qd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Kd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zd)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cl||i===Qd||i===Jd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cl)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===n_||i===ef||i===tf||i===nf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===cl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ef)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===tf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===nf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class VC extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ft extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HC={type:"move"};class Mu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ft,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ft,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ft,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(HC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ft;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const GC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new ln,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Zi({vertexShader:GC,fragmentShader:WC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new nn(new eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XC extends Hs{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const x=new jC,p=n.getContextAttributes();let u=null,g=null;const v=[],E=[],L=new je;let C=null;const A=new pn;A.layers.enable(1),A.viewport=new Tt;const N=new pn;N.layers.enable(2),N.viewport=new Tt;const T=[A,N],y=new VC;y.layers.enable(1),y.layers.enable(2);let P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let re=v[$];return re===void 0&&(re=new Mu,v[$]=re),re.getTargetRaySpace()},this.getControllerGrip=function($){let re=v[$];return re===void 0&&(re=new Mu,v[$]=re),re.getGripSpace()},this.getHand=function($){let re=v[$];return re===void 0&&(re=new Mu,v[$]=re),re.getHandSpace()};function W($){const re=E.indexOf($.inputSource);if(re===-1)return;const pe=v[re];pe!==void 0&&(pe.update($.inputSource,$.frame,c||a),pe.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",K);for(let $=0;$<v.length;$++){const re=E[$];re!==null&&(E[$]=null,v[$].disconnect(re))}P=null,V=null,x.reset(),e.setRenderTarget(u),m=null,f=null,h=null,r=null,g=null,Re.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",q),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new Pr(m.framebufferWidth,m.framebufferHeight,{format:zn,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let re=null,pe=null,fe=null;p.depth&&(fe=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=p.stencil?Fs:Es,pe=p.stencil?Us:br);const De={colorFormat:n.RGBA8,depthFormat:fe,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(De),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new Pr(f.textureWidth,f.textureHeight,{format:zn,type:yi,depthTexture:new g_(f.textureWidth,f.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Re.setContext(r),Re.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K($){for(let re=0;re<$.removed.length;re++){const pe=$.removed[re],fe=E.indexOf(pe);fe>=0&&(E[fe]=null,v[fe].disconnect(pe))}for(let re=0;re<$.added.length;re++){const pe=$.added[re];let fe=E.indexOf(pe);if(fe===-1){for(let ke=0;ke<v.length;ke++)if(ke>=E.length){E.push(pe),fe=ke;break}else if(E[ke]===null){E[ke]=pe,fe=ke;break}if(fe===-1)break}const De=v[fe];De&&De.connect(pe)}}const I=new G,F=new G;function b($,re,pe){I.setFromMatrixPosition(re.matrixWorld),F.setFromMatrixPosition(pe.matrixWorld);const fe=I.distanceTo(F),De=re.projectionMatrix.elements,ke=pe.projectionMatrix.elements,Be=De[14]/(De[10]-1),rt=De[14]/(De[10]+1),D=(De[9]+1)/De[5],ee=(De[9]-1)/De[5],oe=(De[8]-1)/De[0],_e=(ke[8]+1)/ke[0],te=Be*oe,Ae=Be*_e,Te=fe/(-oe+_e),Ne=Te*-oe;re.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Ne),$.translateZ(Te),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const R=Be+Te,S=rt+Te,H=te-Ne,Q=Ae+(fe-Ne),se=D*rt/S*R,ie=ee*rt/S*R;$.projectionMatrix.makePerspective(H,Q,se,ie,R,S),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function B($,re){re===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(re.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;x.texture!==null&&($.near=x.depthNear,$.far=x.depthFar),y.near=N.near=A.near=$.near,y.far=N.far=A.far=$.far,(P!==y.near||V!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,V=y.far,A.near=P,A.far=V,N.near=P,N.far=V,A.updateProjectionMatrix(),N.updateProjectionMatrix(),$.updateProjectionMatrix());const re=$.parent,pe=y.cameras;B(y,re);for(let fe=0;fe<pe.length;fe++)B(pe[fe],re);pe.length===2?b(y,A,N):y.projectionMatrix.copy(A.projectionMatrix),Y($,y,re)};function Y($,re,pe){pe===null?$.matrix.copy(re.matrixWorld):($.matrix.copy(pe.matrixWorld),$.matrix.invert(),$.matrix.multiply(re.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(re.projectionMatrix),$.projectionMatrixInverse.copy(re.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=rf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ne=null;function ye($,re){if(d=re.getViewerPose(c||a),_=re,d!==null){const pe=d.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let fe=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,fe=!0);for(let ke=0;ke<pe.length;ke++){const Be=pe[ke];let rt=null;if(m!==null)rt=m.getViewport(Be);else{const ee=h.getViewSubImage(f,Be);rt=ee.viewport,ke===0&&(e.setRenderTargetTextures(g,ee.colorTexture,f.ignoreDepthValues?void 0:ee.depthStencilTexture),e.setRenderTarget(g))}let D=T[ke];D===void 0&&(D=new pn,D.layers.enable(ke),D.viewport=new Tt,T[ke]=D),D.matrix.fromArray(Be.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Be.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(rt.x,rt.y,rt.width,rt.height),ke===0&&(y.matrix.copy(D.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),fe===!0&&y.cameras.push(D)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")){const ke=h.getDepthInformation(pe[0]);ke&&ke.isValid&&ke.texture&&x.init(e,ke,r.renderState)}}for(let pe=0;pe<v.length;pe++){const fe=E[pe],De=v[pe];fe!==null&&De!==void 0&&De.update(fe,re,c||a)}ne&&ne($,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),_=null}const Re=new p_;Re.setAnimationLoop(ye),this.setAnimationLoop=function($){ne=$},this.dispose=function(){}}}const cr=new ei,YC=new ut;function $C(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,d_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===on&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===on&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,E=g.envMapRotation;v&&(p.envMap.value=v,cr.copy(E),cr.x*=-1,cr.y*=-1,cr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),p.envMapRotation.value.setFromMatrix4(YC.makeRotationFromEuler(cr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===on&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function qC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const E=v.program;i.uniformBlockBinding(g,E)}function c(g,v){let E=r[g.id];E===void 0&&(_(g),E=d(g),r[g.id]=E,g.addEventListener("dispose",p));const L=v.program;i.updateUBOMapping(g,L);const C=e.render.frame;s[g.id]!==C&&(f(g),s[g.id]=C)}function d(g){const v=h();g.__bindingPointIndex=v;const E=t.createBuffer(),L=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,L,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,E),E}function h(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=r[g.id],E=g.uniforms,L=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,A=E.length;C<A;C++){const N=Array.isArray(E[C])?E[C]:[E[C]];for(let T=0,y=N.length;T<y;T++){const P=N[T];if(m(P,C,T,L)===!0){const V=P.__offset,W=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let K=0;K<W.length;K++){const I=W[K],F=x(I);typeof I=="number"||typeof I=="boolean"?(P.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,V+q,P.__data)):I.isMatrix3?(P.__data[0]=I.elements[0],P.__data[1]=I.elements[1],P.__data[2]=I.elements[2],P.__data[3]=0,P.__data[4]=I.elements[3],P.__data[5]=I.elements[4],P.__data[6]=I.elements[5],P.__data[7]=0,P.__data[8]=I.elements[6],P.__data[9]=I.elements[7],P.__data[10]=I.elements[8],P.__data[11]=0):(I.toArray(P.__data,q),q+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,E,L){const C=g.value,A=v+"_"+E;if(L[A]===void 0)return typeof C=="number"||typeof C=="boolean"?L[A]=C:L[A]=C.clone(),!0;{const N=L[A];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return L[A]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function _(g){const v=g.uniforms;let E=0;const L=16;for(let A=0,N=v.length;A<N;A++){const T=Array.isArray(v[A])?v[A]:[v[A]];for(let y=0,P=T.length;y<P;y++){const V=T[y],W=Array.isArray(V.value)?V.value:[V.value];for(let q=0,K=W.length;q<K;q++){const I=W[q],F=x(I),b=E%L,B=b%F.boundary,Y=b+B;E+=B,Y!==0&&L-Y<F.storage&&(E+=L-Y),V.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=F.storage}}}const C=E%L;return C>0&&(E+=L-C),g.__size=E,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const E=a.indexOf(v.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class S_{constructor(e={}){const{canvas:n=BE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Mn,this.toneMapping=Yi,this.toneMappingExposure=1;const v=this;let E=!1,L=0,C=0,A=null,N=-1,T=null;const y=new Tt,P=new Tt;let V=null;const W=new Ye(0);let q=0,K=n.width,I=n.height,F=1,b=null,B=null;const Y=new Tt(0,0,K,I),ne=new Tt(0,0,K,I);let ye=!1;const Re=new ph;let $=!1,re=!1;const pe=new ut,fe=new G,De=new Tt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function rt(){return A===null?F:1}let D=i;function ee(w,k){return n.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ih}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",J,!1),n.addEventListener("webglcontextcreationerror",de,!1),D===null){const k="webgl2";if(D=ee(k,w),D===null)throw ee(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let oe,_e,te,Ae,Te,Ne,R,S,H,Q,se,ie,be,me,Se,Ve,le,xe,$e,Oe,Me,ze,We,dt;function U(){oe=new nA(D),oe.init(),ze=new BC(D,oe),_e=new KT(D,oe,e,ze),te=new OC(D),Ae=new sA(D),Te=new EC,Ne=new zC(D,oe,te,Te,_e,ze,Ae),R=new QT(v),S=new tA(v),H=new f1(D),We=new $T(D,H),Q=new iA(D,H,Ae,We),se=new oA(D,Q,H,Ae),$e=new aA(D,_e,Ne),Ve=new ZT(Te),ie=new MC(v,R,S,oe,_e,We,Ve),be=new $C(v,Te),me=new TC,Se=new LC(oe),xe=new YT(v,R,S,te,se,f,l),le=new FC(v,se,_e),dt=new qC(D,Ae,_e,te),Oe=new qT(D,oe,Ae),Me=new rA(D,oe,Ae),Ae.programs=ie.programs,v.capabilities=_e,v.extensions=oe,v.properties=Te,v.renderLists=me,v.shadowMap=le,v.state=te,v.info=Ae}U();const ce=new XC(v,D);this.xr=ce,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=oe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=oe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(K,I,!1))},this.getSize=function(w){return w.set(K,I)},this.setSize=function(w,k,j=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,I=k,n.width=Math.floor(w*F),n.height=Math.floor(k*F),j===!0&&(n.style.width=w+"px",n.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(K*F,I*F).floor()},this.setDrawingBufferSize=function(w,k,j){K=w,I=k,F=j,n.width=Math.floor(w*j),n.height=Math.floor(k*j),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(Y)},this.setViewport=function(w,k,j,X){w.isVector4?Y.set(w.x,w.y,w.z,w.w):Y.set(w,k,j,X),te.viewport(y.copy(Y).multiplyScalar(F).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,k,j,X){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,k,j,X),te.scissor(P.copy(ne).multiplyScalar(F).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(w){te.setScissorTest(ye=w)},this.setOpaqueSort=function(w){b=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor.apply(xe,arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha.apply(xe,arguments)},this.clear=function(w=!0,k=!0,j=!0){let X=0;if(w){let z=!1;if(A!==null){const ue=A.texture.format;z=ue===ch||ue===lh||ue===oh}if(z){const ue=A.texture.type,ge=ue===yi||ue===br||ue===Ha||ue===Us||ue===sh||ue===ah,Ee=xe.getClearColor(),we=xe.getClearAlpha(),Ue=Ee.r,Fe=Ee.g,Pe=Ee.b;ge?(m[0]=Ue,m[1]=Fe,m[2]=Pe,m[3]=we,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Ue,_[1]=Fe,_[2]=Pe,_[3]=we,D.clearBufferiv(D.COLOR,0,_))}else X|=D.COLOR_BUFFER_BIT}k&&(X|=D.DEPTH_BUFFER_BIT),j&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",J,!1),n.removeEventListener("webglcontextcreationerror",de,!1),me.dispose(),Se.dispose(),Te.dispose(),R.dispose(),S.dispose(),se.dispose(),We.dispose(),dt.dispose(),ie.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Wn),ce.removeEventListener("sessionend",_h),ir.stop()};function Z(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function J(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=Ae.autoReset,k=le.enabled,j=le.autoUpdate,X=le.needsUpdate,z=le.type;U(),Ae.autoReset=w,le.enabled=k,le.autoUpdate=j,le.needsUpdate=X,le.type=z}function de(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ie(w){const k=w.target;k.removeEventListener("dispose",Ie),qe(k)}function qe(w){xt(w),Te.remove(w)}function xt(w){const k=Te.get(w).programs;k!==void 0&&(k.forEach(function(j){ie.releaseProgram(j)}),w.isShaderMaterial&&ie.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,j,X,z,ue){k===null&&(k=ke);const ge=z.isMesh&&z.matrixWorld.determinant()<0,Ee=L_(w,k,j,X,z);te.setMaterial(X,ge);let we=j.index,Ue=1;if(X.wireframe===!0){if(we=Q.getWireframeAttribute(j),we===void 0)return;Ue=2}const Fe=j.drawRange,Pe=j.attributes.position;let Qe=Fe.start*Ue,mt=(Fe.start+Fe.count)*Ue;ue!==null&&(Qe=Math.max(Qe,ue.start*Ue),mt=Math.min(mt,(ue.start+ue.count)*Ue)),we!==null?(Qe=Math.max(Qe,0),mt=Math.min(mt,we.count)):Pe!=null&&(Qe=Math.max(Qe,0),mt=Math.min(mt,Pe.count));const gt=mt-Qe;if(gt<0||gt===1/0)return;We.setup(z,X,Ee,j,we);let cn,Je=Oe;if(we!==null&&(cn=H.get(we),Je=Me,Je.setIndex(cn)),z.isMesh)X.wireframe===!0?(te.setLineWidth(X.wireframeLinewidth*rt()),Je.setMode(D.LINES)):Je.setMode(D.TRIANGLES);else if(z.isLine){let Ce=X.linewidth;Ce===void 0&&(Ce=1),te.setLineWidth(Ce*rt()),z.isLineSegments?Je.setMode(D.LINES):z.isLineLoop?Je.setMode(D.LINE_LOOP):Je.setMode(D.LINE_STRIP)}else z.isPoints?Je.setMode(D.POINTS):z.isSprite&&Je.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)Je.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(oe.get("WEBGL_multi_draw"))Je.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ce=z._multiDrawStarts,Dt=z._multiDrawCounts,et=z._multiDrawCount,Pn=we?H.get(we).bytesPerElement:1,Or=Te.get(X).currentProgram.getUniforms();for(let un=0;un<et;un++)Or.setValue(D,"_gl_DrawID",un),Je.render(Ce[un]/Pn,Dt[un])}else if(z.isInstancedMesh)Je.renderInstances(Qe,gt,z.count);else if(j.isInstancedBufferGeometry){const Ce=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Dt=Math.min(j.instanceCount,Ce);Je.renderInstances(Qe,gt,Dt)}else Je.render(Qe,gt)};function Nt(w,k,j){w.transparent===!0&&w.side===qn&&w.forceSinglePass===!1?(w.side=on,w.needsUpdate=!0,no(w,k,j),w.side=Ki,w.needsUpdate=!0,no(w,k,j),w.side=qn):no(w,k,j)}this.compile=function(w,k,j=null){j===null&&(j=w),p=Se.get(j),p.init(k),g.push(p),j.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),w!==j&&w.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return w.traverse(function(z){const ue=z.material;if(ue)if(Array.isArray(ue))for(let ge=0;ge<ue.length;ge++){const Ee=ue[ge];Nt(Ee,j,z),X.add(Ee)}else Nt(ue,j,z),X.add(ue)}),g.pop(),p=null,X},this.compileAsync=function(w,k,j=null){const X=this.compile(w,k,j);return new Promise(z=>{function ue(){if(X.forEach(function(ge){Te.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){z(w);return}setTimeout(ue,10)}oe.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ze=null;function ti(w){Ze&&Ze(w)}function Wn(){ir.stop()}function _h(){ir.start()}const ir=new p_;ir.setAnimationLoop(ti),typeof self<"u"&&ir.setContext(self),this.setAnimationLoop=function(w){Ze=w,ce.setAnimationLoop(w),w===null?ir.stop():ir.start()},ce.addEventListener("sessionstart",Wn),ce.addEventListener("sessionend",_h),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,k,A),p=Se.get(w,g.length),p.init(k),g.push(p),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Re.setFromProjectionMatrix(pe),re=this.localClippingEnabled,$=Ve.init(this.clippingPlanes,re),x=me.get(w,u.length),x.init(),u.push(x),ce.enabled===!0&&ce.isPresenting===!0){const ue=v.xr.getDepthSensingMesh();ue!==null&&mc(ue,k,-1/0,v.sortObjects)}mc(w,k,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(b,B),Be=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Be&&xe.addToRenderList(x,w),this.info.render.frame++,$===!0&&Ve.beginShadows();const j=p.state.shadowsArray;le.render(j,w,k),$===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=x.opaque,z=x.transmissive;if(p.setupLights(),k.isArrayCamera){const ue=k.cameras;if(z.length>0)for(let ge=0,Ee=ue.length;ge<Ee;ge++){const we=ue[ge];yh(X,z,w,we)}Be&&xe.render(w);for(let ge=0,Ee=ue.length;ge<Ee;ge++){const we=ue[ge];xh(x,w,we,we.viewport)}}else z.length>0&&yh(X,z,w,k),Be&&xe.render(w),xh(x,w,k);A!==null&&(Ne.updateMultisampleRenderTarget(A),Ne.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(v,w,k),We.resetDefaultState(),N=-1,T=null,g.pop(),g.length>0?(p=g[g.length-1],$===!0&&Ve.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function mc(w,k,j,X){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Re.intersectsSprite(w)){X&&De.setFromMatrixPosition(w.matrixWorld).applyMatrix4(pe);const ge=se.update(w),Ee=w.material;Ee.visible&&x.push(w,ge,Ee,j,De.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Re.intersectsObject(w))){const ge=se.update(w),Ee=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),De.copy(w.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),De.copy(ge.boundingSphere.center)),De.applyMatrix4(w.matrixWorld).applyMatrix4(pe)),Array.isArray(Ee)){const we=ge.groups;for(let Ue=0,Fe=we.length;Ue<Fe;Ue++){const Pe=we[Ue],Qe=Ee[Pe.materialIndex];Qe&&Qe.visible&&x.push(w,ge,Qe,j,De.z,Pe)}}else Ee.visible&&x.push(w,ge,Ee,j,De.z,null)}}const ue=w.children;for(let ge=0,Ee=ue.length;ge<Ee;ge++)mc(ue[ge],k,j,X)}function xh(w,k,j,X){const z=w.opaque,ue=w.transmissive,ge=w.transparent;p.setupLightsView(j),$===!0&&Ve.setGlobalState(v.clippingPlanes,j),X&&te.viewport(y.copy(X)),z.length>0&&to(z,k,j),ue.length>0&&to(ue,k,j),ge.length>0&&to(ge,k,j),te.buffers.depth.setTest(!0),te.buffers.depth.setMask(!0),te.buffers.color.setMask(!0),te.setPolygonOffset(!1)}function yh(w,k,j,X){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Pr(1,1,{generateMipmaps:!0,type:oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float")?Ka:yi,minFilter:yr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ue=p.state.transmissionRenderTarget[X.id],ge=X.viewport||y;ue.setSize(ge.z,ge.w);const Ee=v.getRenderTarget();v.setRenderTarget(ue),v.getClearColor(W),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Be&&xe.render(j);const we=v.toneMapping;v.toneMapping=Yi;const Ue=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),$===!0&&Ve.setGlobalState(v.clippingPlanes,X),to(w,j,X),Ne.updateMultisampleRenderTarget(ue),Ne.updateRenderTargetMipmap(ue),oe.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Pe=0,Qe=k.length;Pe<Qe;Pe++){const mt=k[Pe],gt=mt.object,cn=mt.geometry,Je=mt.material,Ce=mt.group;if(Je.side===qn&&gt.layers.test(X.layers)){const Dt=Je.side;Je.side=on,Je.needsUpdate=!0,Sh(gt,j,X,cn,Je,Ce),Je.side=Dt,Je.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ne.updateMultisampleRenderTarget(ue),Ne.updateRenderTargetMipmap(ue))}v.setRenderTarget(Ee),v.setClearColor(W,q),Ue!==void 0&&(X.viewport=Ue),v.toneMapping=we}function to(w,k,j){const X=k.isScene===!0?k.overrideMaterial:null;for(let z=0,ue=w.length;z<ue;z++){const ge=w[z],Ee=ge.object,we=ge.geometry,Ue=X===null?ge.material:X,Fe=ge.group;Ee.layers.test(j.layers)&&Sh(Ee,k,j,we,Ue,Fe)}}function Sh(w,k,j,X,z,ue){w.onBeforeRender(v,k,j,X,z,ue),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.transparent===!0&&z.side===qn&&z.forceSinglePass===!1?(z.side=on,z.needsUpdate=!0,v.renderBufferDirect(j,k,X,z,w,ue),z.side=Ki,z.needsUpdate=!0,v.renderBufferDirect(j,k,X,z,w,ue),z.side=qn):v.renderBufferDirect(j,k,X,z,w,ue),w.onAfterRender(v,k,j,X,z,ue)}function no(w,k,j){k.isScene!==!0&&(k=ke);const X=Te.get(w),z=p.state.lights,ue=p.state.shadowsArray,ge=z.state.version,Ee=ie.getParameters(w,z.state,ue,k,j),we=ie.getProgramCacheKey(Ee);let Ue=X.programs;X.environment=w.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(w.isMeshStandardMaterial?S:R).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Ie),Ue=new Map,X.programs=Ue);let Fe=Ue.get(we);if(Fe!==void 0){if(X.currentProgram===Fe&&X.lightsStateVersion===ge)return Eh(w,Ee),Fe}else Ee.uniforms=ie.getUniforms(w),w.onBeforeCompile(Ee,v),Fe=ie.acquireProgram(Ee,we),Ue.set(we,Fe),X.uniforms=Ee.uniforms;const Pe=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=Ve.uniform),Eh(w,Ee),X.needsLights=D_(w),X.lightsStateVersion=ge,X.needsLights&&(Pe.ambientLightColor.value=z.state.ambient,Pe.lightProbe.value=z.state.probe,Pe.directionalLights.value=z.state.directional,Pe.directionalLightShadows.value=z.state.directionalShadow,Pe.spotLights.value=z.state.spot,Pe.spotLightShadows.value=z.state.spotShadow,Pe.rectAreaLights.value=z.state.rectArea,Pe.ltc_1.value=z.state.rectAreaLTC1,Pe.ltc_2.value=z.state.rectAreaLTC2,Pe.pointLights.value=z.state.point,Pe.pointLightShadows.value=z.state.pointShadow,Pe.hemisphereLights.value=z.state.hemi,Pe.directionalShadowMap.value=z.state.directionalShadowMap,Pe.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pe.spotShadowMap.value=z.state.spotShadowMap,Pe.spotLightMatrix.value=z.state.spotLightMatrix,Pe.spotLightMap.value=z.state.spotLightMap,Pe.pointShadowMap.value=z.state.pointShadowMap,Pe.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=Fe,X.uniformsList=null,Fe}function Mh(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=ul.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function Eh(w,k){const j=Te.get(w);j.outputColorSpace=k.outputColorSpace,j.batching=k.batching,j.batchingColor=k.batchingColor,j.instancing=k.instancing,j.instancingColor=k.instancingColor,j.instancingMorph=k.instancingMorph,j.skinning=k.skinning,j.morphTargets=k.morphTargets,j.morphNormals=k.morphNormals,j.morphColors=k.morphColors,j.morphTargetsCount=k.morphTargetsCount,j.numClippingPlanes=k.numClippingPlanes,j.numIntersection=k.numClipIntersection,j.vertexAlphas=k.vertexAlphas,j.vertexTangents=k.vertexTangents,j.toneMapping=k.toneMapping}function L_(w,k,j,X,z){k.isScene!==!0&&(k=ke),Ne.resetTextureUnits();const ue=k.fog,ge=X.isMeshStandardMaterial?k.environment:null,Ee=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:tr,we=(X.isMeshStandardMaterial?S:R).get(X.envMap||ge),Ue=X.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Fe=!!j.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Pe=!!j.morphAttributes.position,Qe=!!j.morphAttributes.normal,mt=!!j.morphAttributes.color;let gt=Yi;X.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=v.toneMapping);const cn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Je=cn!==void 0?cn.length:0,Ce=Te.get(X),Dt=p.state.lights;if($===!0&&(re===!0||w!==T)){const yn=w===T&&X.id===N;Ve.setState(X,w,yn)}let et=!1;X.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Dt.state.version||Ce.outputColorSpace!==Ee||z.isBatchedMesh&&Ce.batching===!1||!z.isBatchedMesh&&Ce.batching===!0||z.isBatchedMesh&&Ce.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ce.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ce.instancing===!1||!z.isInstancedMesh&&Ce.instancing===!0||z.isSkinnedMesh&&Ce.skinning===!1||!z.isSkinnedMesh&&Ce.skinning===!0||z.isInstancedMesh&&Ce.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ce.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ce.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ce.instancingMorph===!1&&z.morphTexture!==null||Ce.envMap!==we||X.fog===!0&&Ce.fog!==ue||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Ve.numPlanes||Ce.numIntersection!==Ve.numIntersection)||Ce.vertexAlphas!==Ue||Ce.vertexTangents!==Fe||Ce.morphTargets!==Pe||Ce.morphNormals!==Qe||Ce.morphColors!==mt||Ce.toneMapping!==gt||Ce.morphTargetsCount!==Je)&&(et=!0):(et=!0,Ce.__version=X.version);let Pn=Ce.currentProgram;et===!0&&(Pn=no(X,k,z));let Or=!1,un=!1,gc=!1;const yt=Pn.getUniforms(),Mi=Ce.uniforms;if(te.useProgram(Pn.program)&&(Or=!0,un=!0,gc=!0),X.id!==N&&(N=X.id,un=!0),Or||T!==w){yt.setValue(D,"projectionMatrix",w.projectionMatrix),yt.setValue(D,"viewMatrix",w.matrixWorldInverse);const yn=yt.map.cameraPosition;yn!==void 0&&yn.setValue(D,fe.setFromMatrixPosition(w.matrixWorld)),_e.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&yt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,un=!0,gc=!0)}if(z.isSkinnedMesh){yt.setOptional(D,z,"bindMatrix"),yt.setOptional(D,z,"bindMatrixInverse");const yn=z.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),yt.setValue(D,"boneTexture",yn.boneTexture,Ne))}z.isBatchedMesh&&(yt.setOptional(D,z,"batchingTexture"),yt.setValue(D,"batchingTexture",z._matricesTexture,Ne),yt.setOptional(D,z,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",z._indirectTexture,Ne),yt.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",z._colorsTexture,Ne));const vc=j.morphAttributes;if((vc.position!==void 0||vc.normal!==void 0||vc.color!==void 0)&&$e.update(z,j,Pn),(un||Ce.receiveShadow!==z.receiveShadow)&&(Ce.receiveShadow=z.receiveShadow,yt.setValue(D,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Mi.envMap.value=we,Mi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(Mi.envMapIntensity.value=k.environmentIntensity),un&&(yt.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&N_(Mi,gc),ue&&X.fog===!0&&be.refreshFogUniforms(Mi,ue),be.refreshMaterialUniforms(Mi,X,F,I,p.state.transmissionRenderTarget[w.id]),ul.upload(D,Mh(Ce),Mi,Ne)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(ul.upload(D,Mh(Ce),Mi,Ne),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&yt.setValue(D,"center",z.center),yt.setValue(D,"modelViewMatrix",z.modelViewMatrix),yt.setValue(D,"normalMatrix",z.normalMatrix),yt.setValue(D,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const yn=X.uniformsGroups;for(let _c=0,I_=yn.length;_c<I_;_c++){const wh=yn[_c];dt.update(wh,Pn),dt.bind(wh,Pn)}}return Pn}function N_(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function D_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,k,j){Te.get(w.texture).__webglTexture=k,Te.get(w.depthTexture).__webglTexture=j;const X=Te.get(w);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=j===void 0,X.__autoAllocateDepthBuffer||oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const j=Te.get(w);j.__webglFramebuffer=k,j.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,j=0){A=w,L=k,C=j;let X=!0,z=null,ue=!1,ge=!1;if(w){const we=Te.get(w);we.__useDefaultFramebuffer!==void 0?(te.bindFramebuffer(D.FRAMEBUFFER,null),X=!1):we.__webglFramebuffer===void 0?Ne.setupRenderTarget(w):we.__hasExternalTextures&&Ne.rebindTextures(w,Te.get(w.texture).__webglTexture,Te.get(w.depthTexture).__webglTexture);const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(ge=!0);const Fe=Te.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[k])?z=Fe[k][j]:z=Fe[k],ue=!0):w.samples>0&&Ne.useMultisampledRTT(w)===!1?z=Te.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?z=Fe[j]:z=Fe,y.copy(w.viewport),P.copy(w.scissor),V=w.scissorTest}else y.copy(Y).multiplyScalar(F).floor(),P.copy(ne).multiplyScalar(F).floor(),V=ye;if(te.bindFramebuffer(D.FRAMEBUFFER,z)&&X&&te.drawBuffers(w,z),te.viewport(y),te.scissor(P),te.setScissorTest(V),ue){const we=Te.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,we.__webglTexture,j)}else if(ge){const we=Te.get(w.texture),Ue=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,we.__webglTexture,j||0,Ue)}N=-1},this.readRenderTargetPixels=function(w,k,j,X,z,ue,ge){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){te.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const we=w.texture,Ue=we.format,Fe=we.type;if(!_e.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-X&&j>=0&&j<=w.height-z&&D.readPixels(k,j,X,z,ze.convert(Ue),ze.convert(Fe),ue)}finally{const we=A!==null?Te.get(A).__webglFramebuffer:null;te.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,k,j,X,z,ue,ge){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Te.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){te.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const we=w.texture,Ue=we.format,Fe=we.type;if(!_e.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-X&&j>=0&&j<=w.height-z){const Pe=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(k,j,X,z,ze.convert(Ue),ze.convert(Fe),0),D.flush();const Qe=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await VE(D,Qe,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Pe),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue)}finally{D.deleteBuffer(Pe),D.deleteSync(Qe)}return ue}}finally{const we=A!==null?Te.get(A).__webglFramebuffer:null;te.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(w,k=null,j=0){w.isTexture!==!0&&(Sa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const X=Math.pow(2,-j),z=Math.floor(w.image.width*X),ue=Math.floor(w.image.height*X),ge=k!==null?k.x:0,Ee=k!==null?k.y:0;Ne.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,ge,Ee,z,ue),te.unbindTexture()},this.copyTextureToTexture=function(w,k,j=null,X=null,z=0){w.isTexture!==!0&&(Sa("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,w=arguments[1],k=arguments[2],z=arguments[3]||0,j=null);let ue,ge,Ee,we,Ue,Fe;j!==null?(ue=j.max.x-j.min.x,ge=j.max.y-j.min.y,Ee=j.min.x,we=j.min.y):(ue=w.image.width,ge=w.image.height,Ee=0,we=0),X!==null?(Ue=X.x,Fe=X.y):(Ue=0,Fe=0);const Pe=ze.convert(k.format),Qe=ze.convert(k.type);Ne.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const mt=D.getParameter(D.UNPACK_ROW_LENGTH),gt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),cn=D.getParameter(D.UNPACK_SKIP_PIXELS),Je=D.getParameter(D.UNPACK_SKIP_ROWS),Ce=D.getParameter(D.UNPACK_SKIP_IMAGES),Dt=w.isCompressedTexture?w.mipmaps[z]:w.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,we),w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,z,Ue,Fe,ue,ge,Pe,Qe,Dt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,z,Ue,Fe,Dt.width,Dt.height,Pe,Dt.data):D.texSubImage2D(D.TEXTURE_2D,z,Ue,Fe,ue,ge,Pe,Qe,Dt),D.pixelStorei(D.UNPACK_ROW_LENGTH,mt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,cn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Je),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ce),z===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),te.unbindTexture()},this.copyTextureToTexture3D=function(w,k,j=null,X=null,z=0){w.isTexture!==!0&&(Sa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,X=arguments[1]||null,w=arguments[2],k=arguments[3],z=arguments[4]||0);let ue,ge,Ee,we,Ue,Fe,Pe,Qe,mt;const gt=w.isCompressedTexture?w.mipmaps[z]:w.image;j!==null?(ue=j.max.x-j.min.x,ge=j.max.y-j.min.y,Ee=j.max.z-j.min.z,we=j.min.x,Ue=j.min.y,Fe=j.min.z):(ue=gt.width,ge=gt.height,Ee=gt.depth,we=0,Ue=0,Fe=0),X!==null?(Pe=X.x,Qe=X.y,mt=X.z):(Pe=0,Qe=0,mt=0);const cn=ze.convert(k.format),Je=ze.convert(k.type);let Ce;if(k.isData3DTexture)Ne.setTexture3D(k,0),Ce=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)Ne.setTexture2DArray(k,0),Ce=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Dt=D.getParameter(D.UNPACK_ROW_LENGTH),et=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Pn=D.getParameter(D.UNPACK_SKIP_PIXELS),Or=D.getParameter(D.UNPACK_SKIP_ROWS),un=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,we),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fe),w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Ce,z,Pe,Qe,mt,ue,ge,Ee,cn,Je,gt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,z,Pe,Qe,mt,ue,ge,Ee,cn,gt.data):D.texSubImage3D(Ce,z,Pe,Qe,mt,ue,ge,Ee,cn,Je,gt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Dt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,et),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Pn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Or),D.pixelStorei(D.UNPACK_SKIP_IMAGES,un),z===0&&k.generateMipmaps&&D.generateMipmap(Ce),te.unbindTexture()},this.initRenderTarget=function(w){Te.get(w).__webglFramebuffer===void 0&&Ne.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ne.setTextureCube(w,0):w.isData3DTexture?Ne.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ne.setTexture2DArray(w,0):Ne.setTexture2D(w,0),te.unbindTexture()},this.resetState=function(){L=0,C=0,A=null,te.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===uh?"display-p3":"srgb",n.unpackColorSpace=tt.workingColorSpace===dc?"display-p3":"srgb"}}class M_ extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class E_ extends Ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hl=new G,Gl=new G,jm=new ut,sa=new dh,jo=new fc,Eu=new G,Xm=new G;class KC extends kt{constructor(e=new Gn,n=new E_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Hl.fromBufferAttribute(n,r-1),Gl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Hl.distanceTo(Gl);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jo.copy(i.boundingSphere),jo.applyMatrix4(r),jo.radius+=s,e.ray.intersectsSphere(jo)===!1)return;jm.copy(r).invert(),sa.copy(e.ray).applyMatrix4(jm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=m,p=_-1;x<p;x+=c){const u=d.getX(x),g=d.getX(x+1),v=Xo(this,e,sa,l,u,g);v&&n.push(v)}if(this.isLineLoop){const x=d.getX(_-1),p=d.getX(m),u=Xo(this,e,sa,l,x,p);u&&n.push(u)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let x=m,p=_-1;x<p;x+=c){const u=Xo(this,e,sa,l,x,x+1);u&&n.push(u)}if(this.isLineLoop){const x=Xo(this,e,sa,l,_-1,m);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Xo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Hl.fromBufferAttribute(a,r),Gl.fromBufferAttribute(a,s),n.distanceSqToSegment(Hl,Gl,Eu,Xm)>i)return;Eu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Eu);if(!(l<e.near||l>e.far))return{distance:l,point:Xm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const Ym=new G,$m=new G;class ZC extends KC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Ym.fromBufferAttribute(n,r),$m.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ym.distanceTo($m);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gh extends Gn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],m=[];let _=0;const x=[],p=i/2;let u=0;g(),a===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new zt(h,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(m,2));function g(){const E=new G,L=new G;let C=0;const A=(n-e)/i;for(let N=0;N<=s;N++){const T=[],y=N/s,P=y*(n-e)+e;for(let V=0;V<=r;V++){const W=V/r,q=W*l+o,K=Math.sin(q),I=Math.cos(q);L.x=P*K,L.y=-y*i+p,L.z=P*I,h.push(L.x,L.y,L.z),E.set(K,A,I).normalize(),f.push(E.x,E.y,E.z),m.push(W,1-y),T.push(_++)}x.push(T)}for(let N=0;N<r;N++)for(let T=0;T<s;T++){const y=x[T][N],P=x[T+1][N],V=x[T+1][N+1],W=x[T][N+1];d.push(y,P,W),d.push(P,V,W),C+=6}c.addGroup(u,C,0),u+=C}function v(E){const L=_,C=new je,A=new G;let N=0;const T=E===!0?e:n,y=E===!0?1:-1;for(let V=1;V<=r;V++)h.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),_++;const P=_;for(let V=0;V<=r;V++){const q=V/r*l+o,K=Math.cos(q),I=Math.sin(q);A.x=T*I,A.y=p*y,A.z=T*K,h.push(A.x,A.y,A.z),f.push(0,y,0),C.x=K*.5+.5,C.y=I*.5*y+.5,m.push(C.x,C.y),_++}for(let V=0;V<r;V++){const W=L+V,q=P+V;E===!0?d.push(q,q+1,W):d.push(q+1,q,W),N+=3}c.addGroup(u,N,E===!0?1:2),u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vh extends Gn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let h=e;const f=(n-e)/r,m=new G,_=new je;for(let x=0;x<=r;x++){for(let p=0;p<=i;p++){const u=s+p/i*a;m.x=h*Math.cos(u),m.y=h*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/n+1)/2,_.y=(m.y/n+1)/2,d.push(_.x,_.y)}h+=f}for(let x=0;x<r;x++){const p=x*(i+1);for(let u=0;u<i;u++){const g=u+p,v=g,E=g+i+1,L=g+i+2,C=g+1;o.push(v,E,C),o.push(E,L,C)}}this.setIndex(o),this.setAttribute("position",new zt(l,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class QC extends Ur{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class w_ extends Ur{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=i_,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class T_ extends kt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const wu=new ut,qm=new G,Km=new G;class JC{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ph,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;qm.setFromMatrixPosition(e.matrixWorld),n.position.copy(qm),Km.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Km),n.updateMatrixWorld(),wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(wu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class e2 extends JC{constructor(){super(new m_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wl extends T_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new e2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class A_ extends T_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Zm=new ut;class C_{constructor(e,n,i=0,r=1/0){this.ray=new dh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Zm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Zm),this}intersectObject(e,n=!0,i=[]){return af(e,this,i,n),i.sort(Qm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)af(e[r],this,i,n);return i.sort(Qm),i}}function Qm(t,e){return t.distance-e.distance}function af(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)af(s[a],e,n,!0)}}class t2 extends ZC{constructor(e=10,n=10,i=4473924,r=8947848){i=new Ye(i),r=new Ye(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let f=0,m=0,_=-o;f<=n;f++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const x=f===s?i:r;x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3}const d=new Gn;d.setAttribute("position",new zt(l,3)),d.setAttribute("color",new zt(c,3));const h=new E_({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ih);function R_(t,e={}){return new w_({color:t,roughness:e.roughness??.75,metalness:e.metalness??.05,...e})}function Le(t,e,n,i,r=!0){const s=new Fr(t,e,n),a=new nn(s,R_(i));return a.castShadow=!0,a.receiveShadow=!0,a.userData.colorable=r,a}function pc(t,e,n,i,r=!1,s=8){const a=new gh(t,e,n,s),o=new nn(a,R_(i));return o.castShadow=!0,o.userData.colorable=r,o}function nr(t,e,n,i,r,s,a=.07){[[e/2-a,r,n/2-a],[-e/2+a,r,n/2-a],[e/2-a,r,-n/2+a],[-e/2+a,r,-n/2+a]].forEach(([l,c,d])=>{const h=pc(.03,.025,i,s,!1);h.position.set(l,c,d),t.add(h)})}function n2(t=9133628){const e=new Ft;e.userData.isFurniture=!0;const n=1.8,i=.85,r=Le(n,.1,i,2763306,!1);r.position.y=.05,e.add(r);const s=Le(n-.04,.22,i-.2,t);s.position.set(0,.27,.04),e.add(s);const a=Le(n-.04,.55,.14,t);a.position.set(0,.615,-.32499999999999996),e.add(a);const o=Le(.14,.42,i,t);o.position.set(-n/2+.07,.31,0),e.add(o);const l=o.clone();l.position.set(n/2-.07,.31,0),e.add(l);for(let c=-1;c<=1;c++){const d=Le(.52,.1,.58,t);d.position.set(c*.55,.44,.05),d.scale.set(1,1,1),e.add(d)}for(let c=-1;c<=1;c++){const d=Le(.52,.38,.1,t);d.position.set(c*.55,.62,-.22499999999999998),e.add(d)}return nr(e,n-.04,i-.04,.1,.05,1710618),e}function i2(t=13940886){const e=new Ft;e.userData.isFurniture=!0;const n=1.3,i=.82,r=Le(n,.1,i,2763306,!1);r.position.y=.05,e.add(r);const s=Le(n-.04,.22,i-.2,t);s.position.set(0,.27,.04),e.add(s);const a=Le(n-.04,.55,.14,t);a.position.set(0,.615,-.30999999999999994),e.add(a);const o=Le(.14,.42,i,t);o.position.set(-n/2+.07,.31,0),e.add(o);const l=o.clone();l.position.set(n/2-.07,.31,0),e.add(l);for(let c=-.5;c<=.5;c++){const d=Le(.55,.1,.58,t);d.position.set(c*1.1*.5,.44,.05),e.add(d);const h=Le(.55,.38,.1,t);h.position.set(c*1.1*.5,.62,-.20999999999999996),e.add(h)}return nr(e,n,i,.1,.05,1710618),e}function r2(t=4860938){const e=new Ft;e.userData.isFurniture=!0;const n=.75,i=.8,r=Le(n,.08,i,2763306,!1);r.position.y=.04,e.add(r);const s=Le(n-.04,.2,i-.22,t);s.position.set(0,.24,.04),e.add(s);const a=Le(n-.04,.55,.12,t);a.position.set(0,.59,-.30000000000000004),e.add(a);const o=Le(.12,.35,i,t);o.position.set(-n/2+.06,.27,0),e.add(o);const l=o.clone();l.position.set(n/2-.06,.27,0),e.add(l);const c=Le(n-.26,.08,.5,t);return c.position.set(0,.38,.06),e.add(c),nr(e,n,i,.08,.04,1710618),e}function s2(t=9133628){const e=new Ft;e.userData.isFurniture=!0;const n=1.1,i=.42,r=.55,s=Le(n,.04,r,t);s.position.y=i-.02,e.add(s);const a=Le(n-.06,.025,r-.06,t);a.position.y=i*.35,e.add(a);const o=i-.04;return nr(e,n-.06,r-.06,o,i*.5-.01,t,.04),e}function a2(t=9133628){const e=new Ft;e.userData.isFurniture=!0;const n=1.8,i=.76,r=.9,s=Le(n,.05,r,t);s.position.y=i-.025,e.add(s);const a=i-.05;nr(e,n-.12,r-.12,a,a/2,t,.08);const o=Le(n-.25,.04,.04,t);return o.position.set(0,a*.3,0),e.add(o),e}function o2(t=4860938){const e=new Ft;e.userData.isFurniture=!0;const n=.45,i=.48,r=.46,s=Le(n,.06,i,t);s.position.y=r,e.add(s);const a=Le(n-.04,.05,i-.04,t);a.position.y=r+.055,e.add(a);const o=Le(n,.36,.04,t);o.position.set(0,r+.38,-.22),e.add(o);const l=Le(n,.06,.04,t);l.position.set(0,r+.6,-.22),e.add(l);const c=r;return nr(e,n-.04,i-.04,c,c/2,t,.04),e}function l2(t=4860938){const e=new Ft;e.userData.isFurniture=!0;const n=1.6,i=2.1,r=Le(n,.14,i,t);r.position.y=.07,e.add(r);const s=Le(n-.06,.22,i-.1,15658734);s.userData.colorable=!1,s.position.y=.25,e.add(s);const a=Le(n,.65,.1,t);a.position.set(0,.47,-.99),e.add(a);const o=Le(n,.28,.08,t);o.position.set(0,.28,i/2-.05),e.add(o);for(let l=-.5;l<=.5;l+=1){const c=Le(.65,.1,.38,16447474);c.userData.colorable=!1,c.position.set(l*.68,.39,-.5),e.add(c)}return nr(e,n,i,.1,.05,1710618),e}function c2(t=16117995){const e=new Ft;e.userData.isFurniture=!0;const n=1.5,i=2,r=.55,s=Le(n,i,r,t);s.position.y=i/2,e.add(s);const a=n/3-.02;for(let c=-1;c<=1;c++){const d=Le(a,i-.06,.02,t);d.position.set(c*(n/3),i/2,r/2+.01),e.add(d);const h=pc(.01,.01,.12,11184810,!1);h.rotation.z=Math.PI/2,h.userData.colorable=!1,h.position.set(c*(n/3)+(c>=0?-a/2+.05:a/2-.05),i/2,r/2+.03),e.add(h)}const o=Le(n,.08,r,2236962,!1);o.position.y=.04,e.add(o);const l=Le(n,.04,r,t);return l.position.y=i+.02,e.add(l),e}function u2(t=9133628){const e=new Ft;e.userData.isFurniture=!0;const n=.8,i=1.8,r=.3,s=5,a=Le(.03,i,r,t);a.position.set(-n/2+.015,i/2,0),e.add(a);const o=a.clone();o.position.set(n/2-.015,i/2,0),e.add(o);const l=Le(n,.03,r,t);l.position.y=i-.015,e.add(l);const c=l.clone();c.position.y=.015,e.add(c);const d=i/(s+1);for(let h=1;h<=s-1;h++){const f=Le(n-.06,.025,r-.02,t);f.position.y=d*h,e.add(f);const m=[12868646,2908042,4685902,9059210,12092939];let _=-n/2+.06;for(let x=0;x<4;x++){const p=.04+Math.random()*.04,u=.12+Math.random()*.06,g=Le(p,u,r-.04,m[x%m.length],!1);g.position.set(_+p/2,d*h+.025+u/2,0),e.add(g),_+=p+.005}}return e}function d2(t=16117995){const e=new Ft;e.userData.isFurniture=!0;const n=1.4,i=.75,r=.7,s=Le(n,.04,r,t);s.position.y=i-.02,e.add(s);const a=Le(.45,i-.04,r,t);a.position.set(-n/2+.225,(i-.04)/2,0),e.add(a);for(let l=0;l<3;l++){const c=Le(.41,.14,.02,t);c.position.set(-n/2+.225,.1+l*.18,r/2+.01),e.add(c);const d=Le(.12,.015,.015,11184810,!1);d.userData.colorable=!1,d.position.set(-n/2+.225,.1+l*.18,r/2+.025),e.add(d)}const o=Le(.04,i-.04,r,t);return o.position.set(n/2-.02,(i-.04)/2,0),e.add(o),e}function f2(t=4860938){const e=new Ft;e.userData.isFurniture=!0;const n=1.5,i=.5,r=.4,s=Le(n,i,r,t);s.position.y=i/2,e.add(s);const a=n/2-.04;for(let d=-1;d<=1;d+=2){const h=Le(a,i-.06,.02,t);h.position.set(d*(n/4),i/2,r/2+.01),e.add(h);const f=pc(.008,.008,.1,11184810,!1);f.rotation.z=Math.PI/2,f.userData.colorable=!1,f.position.set(d*(n/4)-d*.1,i/2,r/2+.025),e.add(f)}const o=Le(.02,i-.06,r,t);o.position.set(-.02,i/2,0),e.add(o);const l=o.clone();l.position.set(.02,i/2,0),e.add(l);const c=Le(n-.1,.04,r-.06,1710618,!1);return c.position.y=.02,e.add(c),e}function h2(t=9133628){const e=new Ft;e.userData.isFurniture=!0;const n=.45,i=.58,r=.45,s=Le(n,.035,r,t);s.position.y=i-.018,e.add(s);const a=Le(n,.2,r,t);a.position.y=i-.22,e.add(a);const o=Le(n-.04,.16,.02,t);o.position.set(0,i-.22,r/2+.01),e.add(o);const l=pc(.008,.008,.08,11184810,!1);l.rotation.z=Math.PI/2,l.userData.colorable=!1,l.position.set(0,i-.22,r/2+.025),e.add(l);const c=i-.24;return nr(e,n-.06,r-.06,c,c/2+.02,t,.04),e}function b_(t,e){const i={sofa_3seater:n2,loveseat:i2,armchair:r2,coffee_table:s2,dining_table:a2,dining_chair:o2,bed_queen:l2,wardrobe:c2,bookshelf:u2,office_desk:d2,tv_stand:f2,side_table:h2}[t];if(!i){console.warn(`No builder for ${t}, using fallback box`);const r=new Ft;r.userData.isFurniture=!0;const s=new nn(new Fr(1,1,1),new w_({color:e??9133628}));return s.position.y=.5,r.add(s),r}return i(e)}function P_(t,e){t.traverse(n=>{n.isMesh&&n.userData.colorable!==!1&&(n.material=n.material.clone(),n.material.color.setHex(e))})}function Ma(t,e){t.traverse(n=>{n.isMesh&&(n.material._originalEmissive||(n.material._originalEmissive=n.material.emissive.getHex()),n.material.emissive.setHex(e?3355426:n.material._originalEmissive??0))})}function p2(t){return new Promise((e,n)=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>e(i),i.onerror=n,i.src=t})}function m2(t,e,n,i){const r=e.width/e.height,s=n/i;let a=0,o=0,l=e.width,c=e.height;r>s?(l=e.height*s,a=(e.width-l)/2):(c=e.width/s,o=(e.height-c)/2),t.drawImage(e,a,o,l,c,0,0,n,i)}function Jm(){const t=O.useRef(null),e=O.useRef(null),n=O.useRef(null),i=O.useRef(null),r=O.useRef(null),s=O.useRef(null),a=O.useRef({}),o=O.useRef(null),l=O.useRef(!1),c=O.useRef(new G),d=O.useRef(new C_),h=O.useRef(new je),f=O.useRef(null),{objects:m,selectedId:_,roomImage:x,selectObject:p,removeObject:u,updateTransform:g}=Ir();O.useEffect(()=>{const I=t.current;if(!I)return;const F=I.clientWidth,b=I.clientHeight,B=new S_({canvas:e.current,alpha:!0,antialias:!0,preserveDrawingBuffer:!0});B.setSize(F,b),B.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.shadowMap.enabled=!0,B.shadowMap.type=Wv,B.outputColorSpace=Mn;const Y=new M_,ne=new pn(40,F/b,.01,100);ne.position.set(0,4.5,7),ne.lookAt(0,0,0);const ye=new A_(16775408,.7);Y.add(ye);const Re=new Wl(16777215,1);Re.position.set(5,10,7),Re.castShadow=!0,Re.shadow.mapSize.width=2048,Re.shadow.mapSize.height=2048,Re.shadow.camera.near=.1,Re.shadow.camera.far=50,Re.shadow.camera.left=-10,Re.shadow.camera.right=10,Re.shadow.camera.top=10,Re.shadow.camera.bottom=-10,Y.add(Re);const $=new Wl(13162751,.4);$.position.set(-5,3,-5),Y.add($);const re=new eo(30,30),pe=new QC({opacity:.25}),fe=new nn(re,pe);fe.rotation.x=-Math.PI/2,fe.receiveShadow=!0,fe.name="ground",Y.add(fe),s.current=fe;const De=new t2(20,40,4473941,2763322);De.material.opacity=.25,De.material.transparent=!0,Y.add(De),i.current=Y,n.current=B,r.current=ne;const ke=()=>{f.current=requestAnimationFrame(ke),B.render(Y,ne)};ke();const Be=()=>{const rt=I.clientWidth,D=I.clientHeight;ne.aspect=rt/D,ne.updateProjectionMatrix(),B.setSize(rt,D)};return window.addEventListener("resize",Be),()=>{cancelAnimationFrame(f.current),B.dispose(),window.removeEventListener("resize",Be)}},[]),O.useEffect(()=>{const I=i.current,F=a.current;if(!I)return;m.forEach(B=>{if(!F[B.id]){const Y=b_(B.furnitureId,B.colorHex);Y.userData.sceneObjId=B.id,Y.userData.isFurniture=!0,Y.position.set((Math.random()-.5)*2,0,(Math.random()-.5)*2),I.add(Y),F[B.id]=Y}});const b=new Set(m.map(B=>B.id));Object.keys(F).forEach(B=>{b.has(B)||(I.remove(F[B]),delete F[B])}),Object.entries(F).forEach(([B,Y])=>{Ma(Y,B===_)})},[m,_]),O.useEffect(()=>{m.forEach(I=>{const F=a.current[I.id];F&&(P_(F,I.colorHex),Ma(F,I.id===_))})},[m.map(I=>`${I.id}:${I.colorHex}`).join(",")]);const v=O.useCallback(I=>{const F=e.current.getBoundingClientRect();h.current.x=(I.clientX-F.left)/F.width*2-1,h.current.y=-((I.clientY-F.top)/F.height)*2+1},[]),E=O.useCallback(I=>{v(I),d.current.setFromCamera(h.current,r.current);const F=d.current.intersectObject(s.current);return F.length>0?F[0].point:null},[v]),L=O.useCallback(I=>{v(I),d.current.setFromCamera(h.current,r.current);const F=Object.values(a.current),b=d.current.intersectObjects(F,!0);if(b.length===0)return null;let B=b[0].object;for(;B.parent&&!B.userData.isFurniture;)B=B.parent;return B.userData.isFurniture?B:null},[v]),C=O.useCallback(I=>{if(I.button!==0)return;const F=L(I);if(F){const b=F.userData.sceneObjId;p(b),o.current=b,l.current=!0,e.current.classList.add("dragging");const B=E(I);B&&(c.current.copy(F.position).sub(B),c.current.y=0)}else p(null),o.current=null},[L,E,p]),A=O.useCallback(I=>{if(!l.current||!o.current)return;const F=E(I);if(!F)return;const b=a.current[o.current];b&&b.position.set(F.x+c.current.x,b.position.y,F.z+c.current.z)},[E]),N=O.useCallback(()=>{var I;l.current=!1,(I=e.current)==null||I.classList.remove("dragging")},[]),T=O.useCallback(I=>{if(I.preventDefault(),!o.current)return;const F=a.current[o.current];if(!F)return;const b=I.deltaY>0?.95:1.05;F.scale.multiplyScalar(b);const B=Math.max(.1,Math.min(5,F.scale.x));F.scale.set(B,B,B)},[]);O.useEffect(()=>{const I=F=>{if(!o.current)return;const b=a.current[o.current];if(!b)return;const B=Math.PI/12;(F.key==="r"||F.key==="R")&&(b.rotation.y+=B),F.key==="ArrowLeft"&&(F.preventDefault(),b.rotation.y-=B),F.key==="ArrowRight"&&(F.preventDefault(),b.rotation.y+=B),(F.key==="Delete"||F.key==="Backspace")&&(F.preventDefault(),u(o.current),o.current=null)};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[u]);const y=O.useRef({x:0,y:0}),P=O.useRef("none"),V=O.useRef(0),W=O.useCallback(I=>{if(I.touches.length===1){const F=I.touches[0],b={clientX:F.clientX,clientY:F.clientY,button:0};C(b),y.current={x:F.clientX,y:F.clientY},P.current="drag"}else if(I.touches.length===2){P.current="pinch";const F=I.touches[0].clientX-I.touches[1].clientX,b=I.touches[0].clientY-I.touches[1].clientY;V.current=Math.hypot(F,b)}},[C]),q=O.useCallback(I=>{if(I.preventDefault(),P.current==="drag"&&I.touches.length===1){const F=I.touches[0];A({clientX:F.clientX,clientY:F.clientY})}else if(P.current==="pinch"&&I.touches.length===2){if(!o.current)return;const F=I.touches[0].clientX-I.touches[1].clientX,b=I.touches[0].clientY-I.touches[1].clientY,B=Math.hypot(F,b),Y=B/V.current;V.current=B;const ne=a.current[o.current];if(ne){const ye=Math.max(.1,Math.min(5,ne.scale.x*Y));ne.scale.set(ye,ye,ye)}}},[A]),K=O.useCallback(()=>{N(),P.current="none"},[N]);return O.useEffect(()=>(window.__arRotate=I=>{if(!o.current)return;const F=a.current[o.current];F&&(F.rotation.y+=I*Math.PI/180)},window.__arScale=I=>{if(!o.current)return;const F=a.current[o.current];if(F){const b=Math.max(.1,Math.min(5,F.scale.x*I));F.scale.set(b,b,b)}},window.__saveLayoutPicture=async()=>{const I=n.current,F=i.current,b=r.current,B=e.current;if(!I||!F||!b||!B)throw new Error("Viewer is not ready yet.");I.render(F,b);const Y=document.createElement("canvas");Y.width=B.width,Y.height=B.height;const ne=Y.getContext("2d");if(!ne)throw new Error("Could not prepare image export.");if(x){const $=await p2(x);m2(ne,$,Y.width,Y.height)}else{const $=ne.createLinearGradient(0,0,0,Y.height);$.addColorStop(0,"#1a1a28"),$.addColorStop(.6,"#22222e"),$.addColorStop(1,"#2a2a3a"),ne.fillStyle=$,ne.fillRect(0,0,Y.width,Y.height)}ne.drawImage(B,0,0,Y.width,Y.height);const ye=Y.toDataURL("image/png"),Re=document.createElement("a");Re.href=ye,Re.download=`ar-layout-${Date.now()}.png`,Re.click()},()=>{delete window.__arRotate,delete window.__arScale,delete window.__saveLayoutPicture}),[x]),M.jsxs("div",{ref:t,className:"relative w-full h-full overflow-hidden rounded-2xl",children:[x?M.jsx("img",{src:x,alt:"Room",className:"absolute inset-0 w-full h-full object-cover",style:{filter:"brightness(0.88) saturate(0.9)"}}):M.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg, #1a1a28 0%, #22222e 60%, #2a2a3a 100%)",backgroundImage:`
              linear-gradient(rgba(212,165,116,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,165,116,0.04) 1px, transparent 1px)
            `,backgroundSize:"80px 80px"}}),M.jsx("canvas",{id:"ar-canvas",ref:e,className:"absolute inset-0 w-full h-full",onMouseDown:C,onMouseMove:A,onMouseUp:N,onMouseLeave:N,onWheel:T,onTouchStart:W,onTouchMove:q,onTouchEnd:K,style:{touchAction:"none"}}),m.length===0&&M.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:M.jsxs("div",{className:"glass-card px-8 py-6 text-center max-w-sm",children:[M.jsx("div",{className:"text-5xl mb-3 animate-float",children:"🛋️"}),M.jsx("p",{className:"text-text-primary font-display text-lg mb-1",children:"Your Room, Your Style"}),M.jsxs("p",{className:"text-text-secondary text-sm",children:["Select furniture from the sidebar, then click ",M.jsx("span",{className:"text-accent",children:'"Add to Scene"'})]})]})}),m.length>0&&M.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none",children:M.jsxs("div",{className:"bg-black/70 backdrop-blur-sm text-text-secondary text-xs px-4 py-2 rounded-full flex gap-4",children:[M.jsx("span",{children:"🖱️ Drag to move"}),M.jsx("span",{children:"🖱️ Scroll to scale"}),M.jsx("span",{children:"⌨️ R / ← / → to rotate"}),M.jsx("span",{children:"⌨️ Del to remove"})]})})]})}function g2(){const t=new vh(.12,.15,32);t.applyMatrix4(new ut().makeRotationX(-Math.PI/2));const e=new hh({color:13935988,side:qn}),n=new nn(t,e);return n.visible=!1,n.matrixAutoUpdate=!1,n}function eg(){const[t,e]=O.useState(null),[n,i]=O.useState("idle"),[r,s]=O.useState(""),a=O.useRef(null),o=O.useRef(null),l=O.useRef(null),c=O.useRef(null),d=O.useRef(null),h=O.useRef(null),f=O.useRef(null),m=O.useRef(null),_=O.useRef(null),x=O.useRef(null),p=O.useRef(null),u=O.useRef(null),g=O.useRef({}),v=O.useRef(null),E=O.useRef(null),L=O.useRef(null),C=O.useRef(new C_),A=O.useRef(new je),N=O.useRef(null),{objects:T,selectedId:y,selectObject:P,removeObject:V,setRoomImage:W,setARMode:q}=Ir();O.useEffect(()=>{N.current=y},[y]),O.useEffect(()=>{if(!navigator.xr){e(!1);return}navigator.xr.isSessionSupported("immersive-ar").then(ee=>e(ee)).catch(()=>e(!1))},[]);const K=O.useCallback(()=>{f.current&&(f.current.setAnimationLoop(null),f.current.dispose(),f.current=null),L.current&&(window.removeEventListener("resize",L.current),L.current=null),cancelAnimationFrame(E.current),E.current=null,m.current=null,_.current=null,u.current=null,p.current=null,g.current={}},[]),I=O.useCallback(()=>{var ee;(ee=v.current)==null||ee.getTracks().forEach(oe=>oe.stop()),v.current=null,l.current&&(l.current.pause(),l.current.srcObject=null)},[]),F=O.useCallback(async()=>{const ee=x.current;if(x.current=null,ee)try{await ee.end()}catch{}I(),K(),i("idle")},[K,I]);O.useEffect(()=>()=>{F()},[F]);const b=O.useCallback(({enableXR:ee=!1}={})=>{const oe=o.current,_e=a.current;if(!oe||!_e)throw new Error("Camera surface is not ready yet.");K();const te=new S_({canvas:oe,alpha:!0,antialias:!0,preserveDrawingBuffer:!0});te.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),te.outputColorSpace=Mn,te.shadowMap.enabled=!0,te.xr.enabled=ee;const Ae=new M_;Ae.add(new A_(16777215,1.2));const Te=new Wl(16777215,1.2);Te.position.set(1.5,3,2),Te.castShadow=!0,Ae.add(Te);const Ne=new Wl(14017791,.4);Ne.position.set(-2,1,.5),Ae.add(Ne);const R=new pn(60,1,.01,30);R.position.set(0,0,0),R.lookAt(0,0,-1);const S=()=>{const H=_e.clientWidth||window.innerWidth,Q=_e.clientHeight||window.innerHeight;!H||!Q||(te.setSize(H,Q,!1),R.aspect=H/Q,R.updateProjectionMatrix())};return S(),window.addEventListener("resize",S),L.current=S,m.current=Ae,_.current=R,f.current=te,{renderer:te,scene:Ae,camera:R}},[K]),B=O.useCallback(ee=>{const oe=g.current;T.forEach(te=>{if(!oe[te.id]){const Ae=b_(te.furnitureId,te.colorHex);Ae.userData.sceneObjId=te.id,Ae.userData.isFurniture=!0,Ae.visible=!1,ee.add(Ae),oe[te.id]=Ae}});const _e=new Set(T.map(te=>te.id));Object.keys(oe).forEach(te=>{_e.has(te)||(ee==null||ee.remove(oe[te]),delete oe[te])})},[T]);O.useEffect(()=>{const ee=m.current;ee&&B(ee)},[B]),O.useEffect(()=>{T.forEach(ee=>{const oe=g.current[ee.id];oe&&(P_(oe,ee.colorHex),Ma(oe,ee.id===y))})},[T,y]);const Y=O.useCallback(()=>{var oe;const ee=N.current||((oe=T[0])==null?void 0:oe.id)||null;return ee?{id:ee,mesh:g.current[ee]||null}:null},[T]),ne=O.useCallback((ee,oe)=>{var te;const _e=(te=o.current)==null?void 0:te.getBoundingClientRect();return _e?(A.current.x=(ee-_e.left)/_e.width*2-1,A.current.y=-((oe-_e.top)/_e.height)*2+1,!0):!1},[]),ye=O.useCallback((ee,oe)=>{if(!ne(ee,oe)||!_.current)return null;C.current.setFromCamera(A.current,_.current);const _e=Object.values(g.current).filter(Te=>Te.visible),te=C.current.intersectObjects(_e,!0);if(!te.length)return null;let Ae=te[0].object;for(;Ae.parent&&!Ae.userData.isFurniture;)Ae=Ae.parent;return Ae.userData.isFurniture?Ae:null},[ne]),Re=O.useCallback((ee,oe,_e=2.4)=>{if(!ne(ee,oe)||!_.current)return null;const te=_.current,Te=new G(A.current.x,A.current.y,.5).unproject(te).sub(te.position).normalize();if(Math.abs(Te.z)<1e-4)return null;const R=(-_e-te.position.z)/Te.z;return te.position.clone().add(Te.multiplyScalar(R))},[ne]),$=O.useCallback((ee,oe)=>{const _e=Y();if(!(_e!=null&&_e.mesh))return;const te=_e.mesh,Ae=Re(ee,oe);Ae&&(te.visible=!0,te.position.copy(Ae),te.rotation.x=0,te.rotation.z=0,te.scale.setScalar(Math.max(te.scale.x||1,1)),P(_e.id),Ma(te,!0))},[Y,Re,P]),re=O.useCallback(ee=>{var Ae,Te;if(n!=="live")return;const oe="touches"in ee?(Ae=ee.touches[0])==null?void 0:Ae.clientX:ee.clientX,_e="touches"in ee?(Te=ee.touches[0])==null?void 0:Te.clientY:ee.clientY;if(typeof oe!="number"||typeof _e!="number")return;const te=ye(oe,_e);if(te){const Ne=te.userData.sceneObjId;P(Ne);return}$(oe,_e)},[ye,n,$,P]),pe=O.useCallback(async()=>{s(""),i("starting-live");try{const ee=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"},width:{ideal:1920},height:{ideal:1080}}});if(v.current=ee,!l.current)throw new Error("Video preview is not ready yet.");l.current.srcObject=ee,await l.current.play();const{renderer:oe,scene:_e,camera:te}=b();B(_e);const Ae=()=>{E.current=requestAnimationFrame(Ae),oe.render(_e,te)};Ae(),i("live")}catch(ee){I(),K(),i("error"),s((ee==null?void 0:ee.message)||"Could not start the live camera.")}},[K,b,I]),fe=O.useCallback(async()=>{if(!t){i("error"),s("Surface AR is not supported on this phone/browser.");return}s(""),i("starting-webxr");try{const{renderer:ee,scene:oe,camera:_e}=b({enableXR:!0});B(oe);const te=g2();oe.add(te),u.current=te;const Ae=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","light-estimation"],domOverlay:c.current?{root:c.current}:void 0});x.current=Ae,ee.xr.setReferenceSpaceType("local"),await ee.xr.setSession(Ae);const Te=await Ae.requestReferenceSpace("local"),Ne=await Ae.requestReferenceSpace("viewer"),R=await Ae.requestHitTestSource({space:Ne});p.current=R,Ae.addEventListener("select",()=>{const S=Y(),H=S==null?void 0:S.mesh,Q=u.current;!H||!(Q!=null&&Q.visible)||(H.visible=!0,H.position.setFromMatrixPosition(Q.matrix),H.quaternion.setFromRotationMatrix(Q.matrix),H.rotation.x=0,H.rotation.z=0,P(S.id),Ma(H,!0))}),Ae.addEventListener("end",()=>{x.current=null,K(),i("idle")}),ee.setAnimationLoop((S,H)=>{if(!H)return;const Q=H.getHitTestResults(R);if(Q.length>0){const se=Q[0].getPose(Te);se&&u.current&&(u.current.visible=!0,u.current.matrix.fromArray(se.transform.matrix))}else u.current&&(u.current.visible=!1);ee.render(oe,ee.xr.getCamera(_e))}),i("webxr")}catch(ee){K(),i("error"),s((ee==null?void 0:ee.message)||"Could not start surface AR.")}},[t,K,Y,P,b]),De=O.useCallback(ee=>{const oe=Y();oe!=null&&oe.mesh&&(oe.mesh.rotation.y+=ee*Math.PI/180)},[Y]),ke=O.useCallback(ee=>{const oe=Y();if(!(oe!=null&&oe.mesh))return;const _e=Math.max(.15,Math.min(4,oe.mesh.scale.x*ee));oe.mesh.scale.setScalar(_e)},[Y]),Be=O.useCallback(()=>{const ee=N.current;ee&&(V(ee),P(null))},[V,P]),rt=O.useCallback(ee=>{if(!ee)return;const oe=new FileReader;oe.onload=_e=>{var te;W(((te=_e.target)==null?void 0:te.result)||null),q(!1)},oe.readAsDataURL(ee)},[q,W]),D=n==="live"||n==="webxr";return M.jsxs("div",{ref:a,className:"relative h-full w-full overflow-hidden bg-bg-primary",children:[M.jsx("video",{ref:l,className:`absolute inset-0 h-full w-full object-cover ${n==="live"?"block":"hidden"}`,autoPlay:!0,muted:!0,playsInline:!0}),M.jsx("canvas",{ref:o,className:`absolute inset-0 h-full w-full ${D?"block":"hidden"}`,onClick:re,onTouchStart:re,style:{touchAction:"none"}}),M.jsx("input",{ref:d,type:"file",accept:"image/*",className:"hidden",onChange:ee=>{var oe;return rt((oe=ee.target.files)==null?void 0:oe[0])}}),M.jsx("input",{ref:h,type:"file",accept:"image/*",capture:"environment",className:"hidden",onChange:ee=>{var oe;return rt((oe=ee.target.files)==null?void 0:oe[0])}}),!D&&M.jsx("div",{className:"absolute inset-0 overflow-y-auto custom-scroll",children:M.jsxs("div",{className:"flex min-h-full flex-col items-center justify-center gap-5 px-4 py-6 text-center sm:px-8",children:[M.jsx("div",{className:"text-5xl animate-float",children:"📱"}),M.jsxs("div",{className:"max-w-sm space-y-2",children:[M.jsx("h3",{className:"font-display text-2xl text-text-primary",children:"Mobile AR Tools"}),M.jsx("p",{className:"text-sm text-text-secondary",children:"Use live camera mode for quick placement, or launch surface AR on supported phones for real-world hit testing."})]}),M.jsxs("div",{className:"grid w-full max-w-sm gap-3",children:[M.jsxs("button",{onClick:pe,disabled:n==="starting-live",className:"btn-primary flex items-center justify-center gap-2 px-5 py-4 text-base",children:[M.jsx(SM,{size:18}),n==="starting-live"?"Starting Live Camera…":"Start Live Camera"]}),M.jsxs("button",{onClick:fe,disabled:!t||n==="starting-webxr",className:"btn-secondary flex items-center justify-center gap-2 px-5 py-4 text-base disabled:opacity-50",children:[M.jsx(UM,{size:18}),n==="starting-webxr"?"Starting Surface AR…":t?"Launch Surface AR":"Surface AR Not Supported"]})]}),M.jsxs("div",{className:"grid w-full max-w-sm grid-cols-1 gap-3 sm:grid-cols-2",children:[M.jsxs("button",{onClick:()=>{var ee;return(ee=h.current)==null?void 0:ee.click()},className:"btn-secondary flex items-center justify-center gap-2 px-4 py-3 text-sm",children:[M.jsx(bM,{size:16}),"Take Room Photo"]}),M.jsxs("button",{onClick:()=>{var ee;return(ee=d.current)==null?void 0:ee.click()},className:"btn-secondary flex items-center justify-center gap-2 px-4 py-3 text-sm",children:[M.jsx(kM,{size:16}),"Upload From Device"]})]}),M.jsxs("div",{className:"glass-card w-full max-w-sm px-4 py-3 text-left",children:[M.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-accent",children:"How to use"}),M.jsx("p",{className:"mt-2 text-sm text-text-secondary",children:"1. Add furniture from the catalog below."}),M.jsx("p",{className:"text-sm text-text-secondary",children:"2. Select an item, then start live camera or surface AR."}),M.jsx("p",{className:"text-sm text-text-secondary",children:"3. Tap on the screen to place or reposition the selected item."})]}),n==="error"&&M.jsx("p",{className:"max-w-sm text-sm text-error",children:r})]})}),M.jsxs("div",{ref:c,className:`ar-overlay ${D?"":"hidden"}`,children:[M.jsxs("div",{className:"absolute left-0 right-0 top-0 flex items-start justify-between gap-3 p-3 sm:p-4",children:[M.jsxs("div",{className:"max-w-[70%] rounded-2xl bg-black/65 px-4 py-2 backdrop-blur-sm",children:[M.jsx("p",{className:"text-xs uppercase tracking-[0.2em] text-white/50",children:n==="webxr"?"Surface AR":"Live Camera"}),M.jsx("p",{className:"text-sm text-white",children:T.length===0?"Add furniture from the catalog below first.":"Tap anywhere to place the selected furniture."})]}),M.jsx("button",{onClick:F,className:"rounded-2xl bg-black/65 p-3 text-white backdrop-blur-sm hover:bg-black/80",children:M.jsx(zM,{size:18})})]}),T.length>0&&M.jsx("div",{className:"absolute bottom-24 left-3 right-3 sm:left-4 sm:right-4",children:M.jsxs("div",{className:"rounded-2xl bg-black/70 p-3 backdrop-blur-sm",children:[M.jsx("p",{className:"mb-2 px-1 text-xs text-white/60",children:"Selected furniture"}),M.jsx("div",{className:"flex gap-2 overflow-x-auto pb-1 custom-scroll",children:T.map(ee=>{const oe=Ns.find(te=>te.id===ee.furnitureId),_e=y===ee.id;return M.jsxs("button",{onClick:()=>P(ee.id),className:`flex min-w-[92px] flex-shrink-0 flex-col items-center gap-1 rounded-xl border px-3 py-2 transition-all ${_e?"border-accent bg-accent/25 text-white":"border-white/20 text-white/70"}`,children:[M.jsx("span",{className:"text-xl",children:(oe==null?void 0:oe.emoji)||ee.emoji}),M.jsx("span",{className:"text-xs",children:(oe==null?void 0:oe.name)||ee.name})]},ee.id)})})]})}),y&&M.jsx("div",{className:"absolute bottom-4 left-3 right-3 sm:left-4 sm:right-4",children:M.jsxs("div",{className:"flex items-center justify-center gap-3",children:[M.jsx("button",{onClick:()=>De(-45),className:"rounded-xl border border-white/20 bg-black/70 p-3 text-white hover:bg-black/90",children:M.jsx(Md,{size:18})}),M.jsx("button",{onClick:()=>ke(.9),className:"rounded-xl border border-white/20 bg-black/70 p-3 text-white hover:bg-black/90",children:M.jsx(Sd,{size:18})}),M.jsx("button",{onClick:()=>ke(1.1),className:"rounded-xl border border-white/20 bg-black/70 p-3 text-white hover:bg-black/90",children:M.jsx(Ul,{size:18})}),M.jsx("button",{onClick:()=>De(45),className:"rounded-xl border border-white/20 bg-black/70 p-3 text-white hover:bg-black/90",children:M.jsx(Ed,{size:18})}),M.jsx("button",{onClick:Be,className:"rounded-xl border border-error/30 bg-error/20 p-3 text-error hover:bg-error/30",children:M.jsx(wd,{size:18})})]})})]})]})}function oi({icon:t,label:e,onClick:n,variant:i="default",small:r}){const s=`flex items-center justify-center rounded-lg transition-all duration-200 active:scale-90 ${r?"w-8 h-8":"w-9 h-9"}`,a={default:"bg-bg-elevated hover:bg-border text-text-secondary hover:text-text-primary border border-border",accent:"bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20",danger:"bg-error/10 hover:bg-error/20 text-error border border-error/20"};return M.jsx("button",{title:e,onClick:n,className:`${s} ${a[i]}`,children:M.jsx(t,{size:r?13:15})})}function tg(){const[t,e]=O.useState(!1),{objects:n,selectedId:i,selectedObject:r,selectObject:s,removeObject:a,resetScene:o,isARMode:l}=Ir(),c=f=>{typeof window.__arRotate=="function"&&window.__arRotate(f)},d=f=>{typeof window.__arScale=="function"&&window.__arScale(f)},h=async()=>{if(typeof window.__saveLayoutPicture=="function"){e(!0);try{await window.__saveLayoutPicture()}catch(f){window.alert((f==null?void 0:f.message)||"Could not save the layout picture.")}finally{e(!1)}}};return M.jsxs("aside",{className:"w-full lg:w-56 flex-shrink-0 flex flex-col h-full bg-bg-secondary lg:border-l border-border min-w-0",children:[M.jsx("div",{className:"px-4 pt-4 pb-3 border-b border-border",children:M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(PM,{size:15,className:"text-accent"}),M.jsx("h2",{className:"font-display text-base text-text-primary",children:"Scene"})]}),M.jsx("span",{className:"badge badge-accent text-[10px]",children:n.length})]})}),M.jsx("div",{className:"flex-1 overflow-y-auto custom-scroll p-3 space-y-1.5",children:n.length===0?M.jsxs("div",{className:"text-center py-8",children:[M.jsx("div",{className:"text-2xl mb-2",children:"🏠"}),M.jsx("p",{className:"text-text-muted text-xs",children:"No furniture added yet"}),M.jsx("p",{className:"text-text-muted text-xs",children:'Click "Add to Scene" from the catalog'})]}):n.map((f,m)=>{const _=Ns.find(p=>p.id===f.furnitureId),x=i===f.id;return M.jsxs("div",{className:`scene-item ${x?"selected":""}`,onClick:()=>s(f.id),children:[M.jsx("span",{className:"text-lg flex-shrink-0",children:f.emoji||(_==null?void 0:_.emoji)||"📦"}),M.jsxs("div",{className:"flex-1 min-w-0",children:[M.jsx("p",{className:"text-text-primary text-xs font-medium truncate",children:f.name}),M.jsxs("p",{className:"text-text-muted text-[10px]",children:["Item ",m+1]})]}),M.jsx("button",{onClick:p=>{p.stopPropagation(),a(f.id)},className:"text-text-muted hover:text-error transition-colors p-1 rounded",children:M.jsx(wd,{size:12})})]},f.id)})}),r&&M.jsxs("div",{className:"border-t border-border p-3 space-y-3",children:[M.jsxs("p",{className:"text-text-muted text-xs font-medium",children:["Transform: ",r.name]}),M.jsxs("div",{children:[M.jsx("p",{className:"text-text-muted text-[10px] mb-1.5",children:"Rotate"}),M.jsxs("div",{className:"flex gap-1.5",children:[M.jsx(oi,{icon:Md,label:"Rotate -45°",onClick:()=>c(-45),small:!0}),M.jsx(oi,{icon:Md,label:"Rotate -90°",onClick:()=>c(-90),small:!0}),M.jsx(oi,{icon:Ed,label:"Rotate +90°",onClick:()=>c(90),small:!0}),M.jsx(oi,{icon:Ed,label:"Rotate +45°",onClick:()=>c(45),small:!0})]})]}),M.jsxs("div",{children:[M.jsx("p",{className:"text-text-muted text-[10px] mb-1.5",children:"Scale"}),M.jsxs("div",{className:"flex gap-1.5",children:[M.jsx(oi,{icon:Sd,label:"Shrink",onClick:()=>d(.9),small:!0}),M.jsx(oi,{icon:Sd,label:"Shrink more",onClick:()=>d(.75),small:!0}),M.jsx(oi,{icon:Ul,label:"Grow",onClick:()=>d(1.1),small:!0}),M.jsx(oi,{icon:Ul,label:"Grow more",onClick:()=>d(1.25),small:!0})]})]}),M.jsx(oi,{icon:wd,label:"Delete",variant:"danger",onClick:()=>a(i)})]}),n.length>0&&M.jsxs("div",{className:"px-3 pb-3 border-t border-border pt-2",children:[!l&&M.jsxs("button",{onClick:h,disabled:t,className:"w-full mb-2 flex items-center justify-center gap-2 text-text-primary text-xs py-2 rounded-xl bg-accent/10 hover:bg-accent/20 border border-accent/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed",children:[M.jsx(AM,{size:12}),t?"Saving picture…":"Save Layout Picture"]}),M.jsxs("button",{onClick:()=>{window.confirm("Clear all furniture from the scene?")&&o()},className:"w-full flex items-center justify-center gap-2 text-text-muted hover:text-error text-xs py-2 rounded-xl hover:bg-error/5 transition-all border border-transparent hover:border-error/20",children:[M.jsx(IM,{size:12}),"Reset Scene"]})]})]})}function v2(){var s;const{selectedObject:t,selectedId:e,updateColor:n}=Ir();if(!t)return M.jsxs("div",{className:"flex items-center gap-2 text-text-muted text-sm px-4 py-3",children:[M.jsx(Xp,{size:15}),M.jsx("span",{children:"Select a furniture item to change colors"})]});const i=Ns.find(a=>a.id===t.furnitureId),r=(i==null?void 0:i.colors)||Object.keys(Ss);return M.jsxs("div",{className:"flex items-center gap-3 px-4 py-2",children:[M.jsxs("div",{className:"flex items-center gap-1.5 text-text-secondary text-xs flex-shrink-0",children:[M.jsx(Xp,{size:14}),M.jsx("span",{children:"Color:"})]}),M.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:r.map(a=>{const o=Ss[a];return o?M.jsx("button",{title:o.label,onClick:()=>n(e,a),className:`color-swatch ${t.colorKey===a?"active":""}`,style:{backgroundColor:o.hex}},a):null})}),M.jsx("span",{className:"text-text-muted text-xs ml-1",children:((s=Ss[t.colorKey])==null?void 0:s.label)||""})]})}function _2(){var d;const{user:t,logout:e}=cc(),{isARMode:n,setARMode:i,setRoomImage:r}=Ir(),s=lc(),[a,o]=O.useState(!1),l=()=>{e(),s("/")},c=h=>{var _;const f=(_=h.target.files)==null?void 0:_[0];if(!f)return;const m=new FileReader;m.onload=x=>r(x.target.result),m.readAsDataURL(f),i(!1)};return M.jsxs("header",{className:"flex-shrink-0 flex flex-wrap items-center justify-between gap-3 px-3 py-3 sm:px-4 bg-bg-secondary border-b border-border z-20",children:[M.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[M.jsx("span",{className:"text-2xl",children:"🛋️"}),M.jsxs("div",{children:[M.jsx("h1",{className:"font-display text-base text-text-primary leading-none",children:"AR Visualizer"}),M.jsx("p",{className:"text-text-muted text-[10px]",children:"Furniture in Your Space"})]})]}),M.jsxs("div",{className:"order-3 w-full sm:order-none sm:w-auto flex items-center gap-1 bg-bg-elevated rounded-xl p-1 border border-border overflow-x-auto custom-scroll",children:[M.jsxs("button",{onClick:()=>i(!1),className:`flex-1 sm:flex-none items-center justify-center flex gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${n?"text-text-secondary hover:text-text-primary":"bg-accent text-bg-primary"}`,children:[M.jsx(DM,{size:13}),"Desktop"]}),M.jsxs("button",{onClick:()=>i(!0),className:`flex-1 sm:flex-none items-center justify-center flex gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${n?"bg-accent text-bg-primary":"text-text-secondary hover:text-text-primary"}`,children:[M.jsx(OM,{size:13}),"Mobile AR"]})]}),M.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[!n&&M.jsxs("label",{className:"btn-secondary text-xs px-3 py-1.5 cursor-pointer whitespace-nowrap",children:["📷 Upload Room Photo",M.jsx("input",{type:"file",accept:"image/*",onChange:c,className:"hidden"})]}),M.jsxs("div",{className:"relative",children:[M.jsxs("button",{onClick:()=>o(h=>!h),className:"flex items-center gap-2 bg-bg-elevated hover:bg-border border border-border rounded-xl px-3 py-1.5 transition-all",children:[M.jsx("div",{className:"w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center",children:M.jsx(Hv,{size:13,className:"text-accent"})}),M.jsx("span",{className:"text-text-primary text-xs font-medium hidden sm:block",children:(t==null?void 0:t.name)||((d=t==null?void 0:t.email)==null?void 0:d.split("@")[0])||"User"}),M.jsx(EM,{size:12,className:"text-text-muted"})]}),a&&M.jsxs("div",{className:"absolute right-0 top-full mt-2 w-48 glass-card shadow-card py-1 z-50",children:[M.jsxs("div",{className:"px-4 py-2 border-b border-border",children:[M.jsx("p",{className:"text-text-primary text-sm font-medium",children:(t==null?void 0:t.name)||"User"}),M.jsx("p",{className:"text-text-muted text-xs truncate",children:t==null?void 0:t.email})]}),M.jsxs("button",{onClick:l,className:"w-full flex items-center gap-2 px-4 py-2.5 text-sm text-text-secondary hover:text-error hover:bg-error/5 transition-all",children:[M.jsx(LM,{size:14}),"Sign Out"]})]})]})]})]})}function x2(){const{isARMode:t}=Ir(),[e,n]=O.useState("catalog");return M.jsxs("div",{className:"h-[100dvh] w-screen flex flex-col bg-bg-primary overflow-hidden page-enter",children:[M.jsx(_2,{}),M.jsx("div",{className:"flex-shrink-0 overflow-x-auto bg-bg-secondary border-b border-border custom-scroll",children:M.jsx(v2,{})}),M.jsxs("div",{className:"hidden lg:flex flex-1 overflow-hidden min-h-0",children:[M.jsx($p,{}),M.jsx("main",{className:"flex-1 flex flex-col overflow-hidden min-w-0",children:M.jsx("div",{className:"flex-1 p-3 overflow-hidden",children:t?M.jsx("div",{className:"w-full h-full rounded-2xl overflow-hidden border border-border bg-bg-secondary",children:M.jsx(eg,{})}):M.jsx(Jm,{})})}),M.jsx(tg,{})]}),M.jsxs("div",{className:"lg:hidden flex-1 min-h-0 flex flex-col overflow-hidden",children:[M.jsx("main",{className:"flex-1 min-h-[18rem] p-2 sm:p-3 overflow-hidden",children:M.jsx("div",{className:"w-full h-full rounded-2xl overflow-hidden border border-border bg-bg-secondary",children:t?M.jsx(eg,{}):M.jsx(Jm,{})})}),M.jsxs("section",{className:"flex-shrink-0 border-t border-border bg-bg-secondary min-h-0",children:[M.jsx("div",{className:"px-3 pt-3",children:M.jsxs("div",{className:"grid grid-cols-2 gap-2 rounded-2xl bg-bg-elevated p-1 border border-border",children:[M.jsx("button",{onClick:()=>n("catalog"),className:`rounded-xl px-4 py-2 text-sm font-medium transition-all ${e==="catalog"?"bg-accent text-bg-primary":"text-text-secondary hover:text-text-primary"}`,children:"Catalog"}),M.jsx("button",{onClick:()=>n("scene"),className:`rounded-xl px-4 py-2 text-sm font-medium transition-all ${e==="scene"?"bg-accent text-bg-primary":"text-text-secondary hover:text-text-primary"}`,children:"Scene"})]})}),M.jsx("div",{className:"max-h-[38dvh] min-h-[15rem] overflow-hidden",children:e==="catalog"?M.jsx($p,{}):M.jsx(tg,{})})]})]})]})}function y2(){return M.jsx(aM,{children:M.jsx(gM,{children:M.jsxs(QS,{children:[M.jsx(ua,{path:"/",element:M.jsx(HM,{})}),M.jsx(ua,{path:"/tutorial",element:M.jsx(Wp,{children:M.jsx(GM,{})})}),M.jsx(ua,{path:"/app",element:M.jsx(Wp,{children:M.jsx(x2,{})})}),M.jsx(ua,{path:"*",element:M.jsx(bv,{to:"/",replace:!0})})]})})})}Tu.createRoot(document.getElementById("root")).render(M.jsx(hg.StrictMode,{children:M.jsx(tM,{children:M.jsx(y2,{})})}));
