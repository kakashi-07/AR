function U_(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function F_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rg={exports:{}},Kl={},sg={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Za=Symbol.for("react.element"),O_=Symbol.for("react.portal"),k_=Symbol.for("react.fragment"),z_=Symbol.for("react.strict_mode"),B_=Symbol.for("react.profiler"),V_=Symbol.for("react.provider"),H_=Symbol.for("react.context"),G_=Symbol.for("react.forward_ref"),W_=Symbol.for("react.suspense"),j_=Symbol.for("react.memo"),X_=Symbol.for("react.lazy"),Ah=Symbol.iterator;function Y_(t){return t===null||typeof t!="object"?null:(t=Ah&&t[Ah]||t["@@iterator"],typeof t=="function"?t:null)}var ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},og=Object.assign,lg={};function Ys(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||ag}Ys.prototype.isReactComponent={};Ys.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ys.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cg(){}cg.prototype=Ys.prototype;function df(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||ag}var ff=df.prototype=new cg;ff.constructor=df;og(ff,Ys.prototype);ff.isPureReactComponent=!0;var Ch=Array.isArray,ug=Object.prototype.hasOwnProperty,hf={current:null},dg={key:!0,ref:!0,__self:!0,__source:!0};function fg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)ug.call(e,i)&&!dg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Za,type:t,key:s,ref:a,props:r,_owner:hf.current}}function $_(t,e){return{$$typeof:Za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function pf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Za}function q_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bh=/\/+/g;function Ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?q_(""+t.key):e.toString(36)}function Qo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Za:case O_:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ec(a,0):i,Ch(r)?(n="",t!=null&&(n=t.replace(bh,"$&/")+"/"),Qo(r,e,n,"",function(c){return c})):r!=null&&(pf(r)&&(r=$_(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(bh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ch(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Ec(s,o);a+=Qo(s,e,n,l,r)}else if(l=Y_(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Ec(s,o++),a+=Qo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function lo(t,e,n){if(t==null)return t;var i=[],r=0;return Qo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function K_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},Jo={transition:null},Z_={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:hf};function hg(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:lo,forEach:function(t,e,n){lo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return lo(t,function(){e++}),e},toArray:function(t){return lo(t,function(e){return e})||[]},only:function(t){if(!pf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Ys;Xe.Fragment=k_;Xe.Profiler=B_;Xe.PureComponent=df;Xe.StrictMode=z_;Xe.Suspense=W_;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_;Xe.act=hg;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=og({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=hf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)ug.call(e,l)&&!dg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:Za,type:t.type,key:r,ref:s,props:i,_owner:a}};Xe.createContext=function(t){return t={$$typeof:H_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:V_,_context:t},t.Consumer=t};Xe.createElement=fg;Xe.createFactory=function(t){var e=fg.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:G_,render:t}};Xe.isValidElement=pf;Xe.lazy=function(t){return{$$typeof:X_,_payload:{_status:-1,_result:t},_init:K_}};Xe.memo=function(t,e){return{$$typeof:j_,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Jo.transition;Jo.transition={};try{t()}finally{Jo.transition=e}};Xe.unstable_act=hg;Xe.useCallback=function(t,e){return tn.current.useCallback(t,e)};Xe.useContext=function(t){return tn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return tn.current.useEffect(t,e)};Xe.useId=function(){return tn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return tn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};Xe.useRef=function(t){return tn.current.useRef(t)};Xe.useState=function(t){return tn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return tn.current.useTransition()};Xe.version="18.3.1";sg.exports=Xe;var F=sg.exports;const pg=F_(F),Q_=U_({__proto__:null,default:pg},[F]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J_=F,ex=Symbol.for("react.element"),tx=Symbol.for("react.fragment"),nx=Object.prototype.hasOwnProperty,ix=J_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rx={key:!0,ref:!0,__self:!0,__source:!0};function mg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)nx.call(e,i)&&!rx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ex,type:t,key:s,ref:a,props:r,_owner:ix.current}}Kl.Fragment=tx;Kl.jsx=mg;Kl.jsxs=mg;rg.exports=Kl;var S=rg.exports,Ru={},gg={exports:{}},Tn={},vg={exports:{}},_g={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,Y){var W=b.length;b.push(Y);e:for(;0<W;){var ee=W-1>>>1,ue=b[ee];if(0<r(ue,Y))b[ee]=Y,b[W]=ue,W=ee;else break e}}function n(b){return b.length===0?null:b[0]}function i(b){if(b.length===0)return null;var Y=b[0],W=b.pop();if(W!==Y){b[0]=W;e:for(var ee=0,ue=b.length,Oe=ue>>>1;ee<Oe;){var j=2*(ee+1)-1,ne=b[j],fe=j+1,he=b[fe];if(0>r(ne,W))fe<ue&&0>r(he,ne)?(b[ee]=he,b[fe]=W,ee=fe):(b[ee]=ne,b[j]=W,ee=j);else if(fe<ue&&0>r(he,W))b[ee]=he,b[fe]=W,ee=fe;else break e}}return Y}function r(b,Y){var W=b.sortIndex-Y.sortIndex;return W!==0?W:b.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,f=3,m=!1,_=!1,x=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var Y=n(c);Y!==null;){if(Y.callback===null)i(c);else if(Y.startTime<=b)i(c),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(c)}}function M(b){if(x=!1,v(b),!_)if(n(l)!==null)_=!0,Q(N);else{var Y=n(c);Y!==null&&z(M,Y.startTime-b)}}function N(b,Y){_=!1,x&&(x=!1,u(L),L=-1),m=!0;var W=f;try{for(v(Y),h=n(l);h!==null&&(!(h.expirationTime>Y)||b&&!I());){var ee=h.callback;if(typeof ee=="function"){h.callback=null,f=h.priorityLevel;var ue=ee(h.expirationTime<=Y);Y=t.unstable_now(),typeof ue=="function"?h.callback=ue:h===n(l)&&i(l),v(Y)}else i(l);h=n(l)}if(h!==null)var Oe=!0;else{var j=n(c);j!==null&&z(M,j.startTime-Y),Oe=!1}return Oe}finally{h=null,f=W,m=!1}}var R=!1,C=null,L=-1,A=5,y=-1;function I(){return!(t.unstable_now()-y<A)}function H(){if(C!==null){var b=t.unstable_now();y=b;var Y=!0;try{Y=C(!0,b)}finally{Y?X():(R=!1,C=null)}}else R=!1}var X;if(typeof g=="function")X=function(){g(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,te=J.port2;J.port1.onmessage=H,X=function(){te.postMessage(null)}}else X=function(){p(H,0)};function Q(b){C=b,R||(R=!0,X())}function z(b,Y){L=p(function(){b(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,Q(N))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var W=f;f=Y;try{return b()}finally{f=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,Y){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var W=f;f=b;try{return Y()}finally{f=W}},t.unstable_scheduleCallback=function(b,Y,W){var ee=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ee+W:ee):W=ee,b){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=W+ue,b={id:d++,callback:Y,priorityLevel:b,startTime:W,expirationTime:ue,sortIndex:-1},W>ee?(b.sortIndex=W,e(c,b),n(l)===null&&b===n(c)&&(x?(u(L),L=-1):x=!0,z(M,W-ee))):(b.sortIndex=ue,e(l,b),_||m||(_=!0,Q(N))),b},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(b){var Y=f;return function(){var W=f;f=Y;try{return b.apply(this,arguments)}finally{f=W}}}})(_g);vg.exports=_g;var sx=vg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=F,wn=sx;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xg=new Set,La={};function Br(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(La[t]=e,t=0;t<e.length;t++)xg.add(e[t])}var Si=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=Object.prototype.hasOwnProperty,ox=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rh={},Ph={};function lx(t){return Pu.call(Ph,t)?!0:Pu.call(Rh,t)?!1:ox.test(t)?Ph[t]=!0:(Rh[t]=!0,!1)}function cx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ux(t,e,n,i){if(e===null||typeof e>"u"||cx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Wt[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Wt[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Wt[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Wt[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Wt[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Wt[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Wt[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Wt[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Wt[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var mf=/[\-:]([a-z])/g;function gf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mf,gf);Wt[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mf,gf);Wt[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mf,gf);Wt[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Wt[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Wt[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function vf(t,e,n,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ux(e,n,r,i)&&(n=null),i||r===null?lx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,co=Symbol.for("react.element"),fs=Symbol.for("react.portal"),hs=Symbol.for("react.fragment"),_f=Symbol.for("react.strict_mode"),Lu=Symbol.for("react.profiler"),yg=Symbol.for("react.provider"),Sg=Symbol.for("react.context"),xf=Symbol.for("react.forward_ref"),Nu=Symbol.for("react.suspense"),Du=Symbol.for("react.suspense_list"),yf=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),Mg=Symbol.for("react.offscreen"),Lh=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,wc;function pa(t){if(wc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);wc=e&&e[1]||""}return`
`+wc+t}var Tc=!1;function Ac(t,e){if(!t||Tc)return"";Tc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{Tc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?pa(t):""}function dx(t){switch(t.tag){case 5:return pa(t.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return t=Ac(t.type,!1),t;case 11:return t=Ac(t.type.render,!1),t;case 1:return t=Ac(t.type,!0),t;default:return""}}function Iu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hs:return"Fragment";case fs:return"Portal";case Lu:return"Profiler";case _f:return"StrictMode";case Nu:return"Suspense";case Du:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sg:return(t.displayName||"Context")+".Consumer";case yg:return(t._context.displayName||"Context")+".Provider";case xf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case yf:return e=t.displayName||null,e!==null?e:Iu(t.type)||"Memo";case Fi:e=t._payload,t=t._init;try{return Iu(t(e))}catch{}}return null}function fx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Iu(e);case 8:return e===_f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Eg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hx(t){var e=Eg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function uo(t){t._valueTracker||(t._valueTracker=hx(t))}function wg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Eg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function gl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uu(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tg(t,e){e=e.checked,e!=null&&vf(t,"checked",e,!1)}function Fu(t,e){Tg(t,e);var n=tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ou(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ou(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ou(t,e,n){(e!=="number"||gl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ma=Array.isArray;function Ts(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ku(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ih(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(ma(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function Ag(t,e){var n=tr(e.value),i=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Uh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fo,bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fo=fo||document.createElement("div"),fo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},px=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(t){px.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ya[e]=ya[t]})});function Rg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ya.hasOwnProperty(t)&&ya[t]?(""+e).trim():e+"px"}function Pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Rg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var mx=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Bu(t,e){if(e){if(mx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Vu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hu=null;function Sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gu=null,As=null,Cs=null;function Fh(t){if(t=eo(t)){if(typeof Gu!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=tc(e),Gu(t.stateNode,t.type,e))}}function Lg(t){As?Cs?Cs.push(t):Cs=[t]:As=t}function Ng(){if(As){var t=As,e=Cs;if(Cs=As=null,Fh(t),e)for(t=0;t<e.length;t++)Fh(e[t])}}function Dg(t,e){return t(e)}function Ig(){}var Cc=!1;function Ug(t,e,n){if(Cc)return t(e,n);Cc=!0;try{return Dg(t,e,n)}finally{Cc=!1,(As!==null||Cs!==null)&&(Ig(),Ng())}}function Da(t,e){var n=t.stateNode;if(n===null)return null;var i=tc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Wu=!1;if(Si)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Wu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Wu=!1}function gx(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Sa=!1,vl=null,_l=!1,ju=null,vx={onError:function(t){Sa=!0,vl=t}};function _x(t,e,n,i,r,s,a,o,l){Sa=!1,vl=null,gx.apply(vx,arguments)}function xx(t,e,n,i,r,s,a,o,l){if(_x.apply(this,arguments),Sa){if(Sa){var c=vl;Sa=!1,vl=null}else throw Error(ae(198));_l||(_l=!0,ju=c)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Oh(t){if(Vr(t)!==t)throw Error(ae(188))}function yx(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Oh(r),t;if(s===i)return Oh(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function Og(t){return t=yx(t),t!==null?kg(t):null}function kg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=kg(t);if(e!==null)return e;t=t.sibling}return null}var zg=wn.unstable_scheduleCallback,kh=wn.unstable_cancelCallback,Sx=wn.unstable_shouldYield,Mx=wn.unstable_requestPaint,Mt=wn.unstable_now,Ex=wn.unstable_getCurrentPriorityLevel,Mf=wn.unstable_ImmediatePriority,Bg=wn.unstable_UserBlockingPriority,xl=wn.unstable_NormalPriority,wx=wn.unstable_LowPriority,Vg=wn.unstable_IdlePriority,Zl=null,ri=null;function Tx(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(Zl,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:bx,Ax=Math.log,Cx=Math.LN2;function bx(t){return t>>>=0,t===0?32:31-(Ax(t)/Cx|0)|0}var ho=64,po=4194304;function ga(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ga(o):(s&=a,s!==0&&(i=ga(s)))}else a=n&~r,a!==0?i=ga(a):s!==0&&(i=ga(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function Rx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Px(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-$n(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Rx(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Xu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hg(){var t=ho;return ho<<=1,!(ho&4194240)&&(ho=64),t}function bc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function Lx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ef(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var rt=0;function Gg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Wg,wf,jg,Xg,Yg,Yu=!1,mo=[],Wi=null,ji=null,Xi=null,Ia=new Map,Ua=new Map,ki=[],Nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zh(t,e){switch(t){case"focusin":case"focusout":Wi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":Ia.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(e.pointerId)}}function ea(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=eo(e),e!==null&&wf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Dx(t,e,n,i,r){switch(e){case"focusin":return Wi=ea(Wi,t,e,n,i,r),!0;case"dragenter":return ji=ea(ji,t,e,n,i,r),!0;case"mouseover":return Xi=ea(Xi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ia.set(s,ea(Ia.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ua.set(s,ea(Ua.get(s)||null,t,e,n,i,r)),!0}return!1}function $g(t){var e=Er(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=Fg(n),e!==null){t.blockedOn=e,Yg(t.priority,function(){jg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function el(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$u(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Hu=i,n.target.dispatchEvent(i),Hu=null}else return e=eo(n),e!==null&&wf(e),t.blockedOn=n,!1;e.shift()}return!0}function Bh(t,e,n){el(t)&&n.delete(e)}function Ix(){Yu=!1,Wi!==null&&el(Wi)&&(Wi=null),ji!==null&&el(ji)&&(ji=null),Xi!==null&&el(Xi)&&(Xi=null),Ia.forEach(Bh),Ua.forEach(Bh)}function ta(t,e){t.blockedOn===e&&(t.blockedOn=null,Yu||(Yu=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,Ix)))}function Fa(t){function e(r){return ta(r,t)}if(0<mo.length){ta(mo[0],t);for(var n=1;n<mo.length;n++){var i=mo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Wi!==null&&ta(Wi,t),ji!==null&&ta(ji,t),Xi!==null&&ta(Xi,t),Ia.forEach(e),Ua.forEach(e),n=0;n<ki.length;n++)i=ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)$g(n),n.blockedOn===null&&ki.shift()}var bs=Ai.ReactCurrentBatchConfig,Sl=!0;function Ux(t,e,n,i){var r=rt,s=bs.transition;bs.transition=null;try{rt=1,Tf(t,e,n,i)}finally{rt=r,bs.transition=s}}function Fx(t,e,n,i){var r=rt,s=bs.transition;bs.transition=null;try{rt=4,Tf(t,e,n,i)}finally{rt=r,bs.transition=s}}function Tf(t,e,n,i){if(Sl){var r=$u(t,e,n,i);if(r===null)kc(t,e,i,Ml,n),zh(t,i);else if(Dx(r,t,e,n,i))i.stopPropagation();else if(zh(t,i),e&4&&-1<Nx.indexOf(t)){for(;r!==null;){var s=eo(r);if(s!==null&&Wg(s),s=$u(t,e,n,i),s===null&&kc(t,e,i,Ml,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else kc(t,e,i,null,n)}}var Ml=null;function $u(t,e,n,i){if(Ml=null,t=Sf(i),t=Er(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ml=t,null}function qg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ex()){case Mf:return 1;case Bg:return 4;case xl:case wx:return 16;case Vg:return 536870912;default:return 16}default:return 16}}var Vi=null,Af=null,tl=null;function Kg(){if(tl)return tl;var t,e=Af,n=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return tl=r.slice(t,1<i?1-i:void 0)}function nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function go(){return!0}function Vh(){return!1}function An(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?go:Vh,this.isPropagationStopped=Vh,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=go)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=go)},persist:function(){},isPersistent:go}),e}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cf=An($s),Ja=vt({},$s,{view:0,detail:0}),Ox=An(Ja),Rc,Pc,na,Ql=vt({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==na&&(na&&t.type==="mousemove"?(Rc=t.screenX-na.screenX,Pc=t.screenY-na.screenY):Pc=Rc=0,na=t),Rc)},movementY:function(t){return"movementY"in t?t.movementY:Pc}}),Hh=An(Ql),kx=vt({},Ql,{dataTransfer:0}),zx=An(kx),Bx=vt({},Ja,{relatedTarget:0}),Lc=An(Bx),Vx=vt({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=An(Vx),Gx=vt({},$s,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wx=An(Gx),jx=vt({},$s,{data:0}),Gh=An(jx),Xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=$x[t])?!!e[t]:!1}function bf(){return qx}var Kx=vt({},Ja,{key:function(t){if(t.key){var e=Xx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Yx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zx=An(Kx),Qx=vt({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wh=An(Qx),Jx=vt({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),ey=An(Jx),ty=vt({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),ny=An(ty),iy=vt({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ry=An(iy),sy=[9,13,27,32],Rf=Si&&"CompositionEvent"in window,Ma=null;Si&&"documentMode"in document&&(Ma=document.documentMode);var ay=Si&&"TextEvent"in window&&!Ma,Zg=Si&&(!Rf||Ma&&8<Ma&&11>=Ma),jh=" ",Xh=!1;function Qg(t,e){switch(t){case"keyup":return sy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function oy(t,e){switch(t){case"compositionend":return Jg(e);case"keypress":return e.which!==32?null:(Xh=!0,jh);case"textInput":return t=e.data,t===jh&&Xh?null:t;default:return null}}function ly(t,e){if(ps)return t==="compositionend"||!Rf&&Qg(t,e)?(t=Kg(),tl=Af=Vi=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zg&&e.locale!=="ko"?null:e.data;default:return null}}var cy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!cy[t.type]:e==="textarea"}function e0(t,e,n,i){Lg(i),e=El(e,"onChange"),0<e.length&&(n=new Cf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ea=null,Oa=null;function uy(t){d0(t,0)}function Jl(t){var e=vs(t);if(wg(e))return t}function dy(t,e){if(t==="change")return e}var t0=!1;if(Si){var Nc;if(Si){var Dc="oninput"in document;if(!Dc){var $h=document.createElement("div");$h.setAttribute("oninput","return;"),Dc=typeof $h.oninput=="function"}Nc=Dc}else Nc=!1;t0=Nc&&(!document.documentMode||9<document.documentMode)}function qh(){Ea&&(Ea.detachEvent("onpropertychange",n0),Oa=Ea=null)}function n0(t){if(t.propertyName==="value"&&Jl(Oa)){var e=[];e0(e,Oa,t,Sf(t)),Ug(uy,e)}}function fy(t,e,n){t==="focusin"?(qh(),Ea=e,Oa=n,Ea.attachEvent("onpropertychange",n0)):t==="focusout"&&qh()}function hy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(Oa)}function py(t,e){if(t==="click")return Jl(e)}function my(t,e){if(t==="input"||t==="change")return Jl(e)}function gy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:gy;function ka(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Pu.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Kh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zh(t,e){var n=Kh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kh(n)}}function i0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?i0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function r0(){for(var t=window,e=gl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=gl(t.document)}return e}function Pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function vy(t){var e=r0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&i0(n.ownerDocument.documentElement,n)){if(i!==null&&Pf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Zh(n,s);var a=Zh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _y=Si&&"documentMode"in document&&11>=document.documentMode,ms=null,qu=null,wa=null,Ku=!1;function Qh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ku||ms==null||ms!==gl(i)||(i=ms,"selectionStart"in i&&Pf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wa&&ka(wa,i)||(wa=i,i=El(qu,"onSelect"),0<i.length&&(e=new Cf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:vo("Animation","AnimationEnd"),animationiteration:vo("Animation","AnimationIteration"),animationstart:vo("Animation","AnimationStart"),transitionend:vo("Transition","TransitionEnd")},Ic={},s0={};Si&&(s0=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function ec(t){if(Ic[t])return Ic[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in s0)return Ic[t]=e[n];return t}var a0=ec("animationend"),o0=ec("animationiteration"),l0=ec("animationstart"),c0=ec("transitionend"),u0=new Map,Jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){u0.set(t,e),Br(e,[t])}for(var Uc=0;Uc<Jh.length;Uc++){var Fc=Jh[Uc],xy=Fc.toLowerCase(),yy=Fc[0].toUpperCase()+Fc.slice(1);sr(xy,"on"+yy)}sr(a0,"onAnimationEnd");sr(o0,"onAnimationIteration");sr(l0,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(c0,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var va="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("cancel close invalid load scroll toggle".split(" ").concat(va));function ep(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,xx(i,e,void 0,t),t.currentTarget=null}function d0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;ep(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;ep(r,o,c),s=l}}}if(_l)throw t=ju,_l=!1,ju=null,t}function ut(t,e){var n=e[td];n===void 0&&(n=e[td]=new Set);var i=t+"__bubble";n.has(i)||(f0(e,t,2,!1),n.add(i))}function Oc(t,e,n){var i=0;e&&(i|=4),f0(n,t,i,e)}var _o="_reactListening"+Math.random().toString(36).slice(2);function za(t){if(!t[_o]){t[_o]=!0,xg.forEach(function(n){n!=="selectionchange"&&(Sy.has(n)||Oc(n,!1,t),Oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[_o]||(e[_o]=!0,Oc("selectionchange",!1,e))}}function f0(t,e,n,i){switch(qg(e)){case 1:var r=Ux;break;case 4:r=Fx;break;default:r=Tf}n=r.bind(null,e,n,t),r=void 0,!Wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function kc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Er(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Ug(function(){var c=s,d=Sf(n),h=[];e:{var f=u0.get(t);if(f!==void 0){var m=Cf,_=t;switch(t){case"keypress":if(nl(n)===0)break e;case"keydown":case"keyup":m=Zx;break;case"focusin":_="focus",m=Lc;break;case"focusout":_="blur",m=Lc;break;case"beforeblur":case"afterblur":m=Lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Hh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ey;break;case a0:case o0:case l0:m=Hx;break;case c0:m=ny;break;case"scroll":m=Ox;break;case"wheel":m=ry;break;case"copy":case"cut":case"paste":m=Wx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Wh}var x=(e&4)!==0,p=!x&&t==="scroll",u=x?f!==null?f+"Capture":null:f;x=[];for(var g=c,v;g!==null;){v=g;var M=v.stateNode;if(v.tag===5&&M!==null&&(v=M,u!==null&&(M=Da(g,u),M!=null&&x.push(Ba(g,M,v)))),p)break;g=g.return}0<x.length&&(f=new m(f,_,null,n,d),h.push({event:f,listeners:x}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Hu&&(_=n.relatedTarget||n.fromElement)&&(Er(_)||_[Mi]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Er(_):null,_!==null&&(p=Vr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(x=Hh,M="onMouseLeave",u="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(x=Wh,M="onPointerLeave",u="onPointerEnter",g="pointer"),p=m==null?f:vs(m),v=_==null?f:vs(_),f=new x(M,g+"leave",m,n,d),f.target=p,f.relatedTarget=v,M=null,Er(d)===c&&(x=new x(u,g+"enter",_,n,d),x.target=v,x.relatedTarget=p,M=x),p=M,m&&_)t:{for(x=m,u=_,g=0,v=x;v;v=$r(v))g++;for(v=0,M=u;M;M=$r(M))v++;for(;0<g-v;)x=$r(x),g--;for(;0<v-g;)u=$r(u),v--;for(;g--;){if(x===u||u!==null&&x===u.alternate)break t;x=$r(x),u=$r(u)}x=null}else x=null;m!==null&&tp(h,f,m,x,!1),_!==null&&p!==null&&tp(h,p,_,x,!0)}}e:{if(f=c?vs(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var N=dy;else if(Yh(f))if(t0)N=my;else{N=hy;var R=fy}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=py);if(N&&(N=N(t,c))){e0(h,N,n,d);break e}R&&R(t,f,c),t==="focusout"&&(R=f._wrapperState)&&R.controlled&&f.type==="number"&&Ou(f,"number",f.value)}switch(R=c?vs(c):window,t){case"focusin":(Yh(R)||R.contentEditable==="true")&&(ms=R,qu=c,wa=null);break;case"focusout":wa=qu=ms=null;break;case"mousedown":Ku=!0;break;case"contextmenu":case"mouseup":case"dragend":Ku=!1,Qh(h,n,d);break;case"selectionchange":if(_y)break;case"keydown":case"keyup":Qh(h,n,d)}var C;if(Rf)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else ps?Qg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Zg&&n.locale!=="ko"&&(ps||L!=="onCompositionStart"?L==="onCompositionEnd"&&ps&&(C=Kg()):(Vi=d,Af="value"in Vi?Vi.value:Vi.textContent,ps=!0)),R=El(c,L),0<R.length&&(L=new Gh(L,t,null,n,d),h.push({event:L,listeners:R}),C?L.data=C:(C=Jg(n),C!==null&&(L.data=C)))),(C=ay?oy(t,n):ly(t,n))&&(c=El(c,"onBeforeInput"),0<c.length&&(d=new Gh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=C))}d0(h,e)})}function Ba(t,e,n){return{instance:t,listener:e,currentTarget:n}}function El(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Da(t,n),s!=null&&i.unshift(Ba(t,s,r)),s=Da(t,e),s!=null&&i.push(Ba(t,s,r))),t=t.return}return i}function $r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function tp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Da(n,s),l!=null&&a.unshift(Ba(n,l,o))):r||(l=Da(n,s),l!=null&&a.push(Ba(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var My=/\r\n?/g,Ey=/\u0000|\uFFFD/g;function np(t){return(typeof t=="string"?t:""+t).replace(My,`
`).replace(Ey,"")}function xo(t,e,n){if(e=np(e),np(t)!==e&&n)throw Error(ae(425))}function wl(){}var Zu=null,Qu=null;function Ju(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ed=typeof setTimeout=="function"?setTimeout:void 0,wy=typeof clearTimeout=="function"?clearTimeout:void 0,ip=typeof Promise=="function"?Promise:void 0,Ty=typeof queueMicrotask=="function"?queueMicrotask:typeof ip<"u"?function(t){return ip.resolve(null).then(t).catch(Ay)}:ed;function Ay(t){setTimeout(function(){throw t})}function zc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Fa(e)}function Yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var qs=Math.random().toString(36).slice(2),ti="__reactFiber$"+qs,Va="__reactProps$"+qs,Mi="__reactContainer$"+qs,td="__reactEvents$"+qs,Cy="__reactListeners$"+qs,by="__reactHandles$"+qs;function Er(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mi]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rp(t);t!==null;){if(n=t[ti])return n;t=rp(t)}return e}t=n,n=t.parentNode}return null}function eo(t){return t=t[ti]||t[Mi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function tc(t){return t[Va]||null}var nd=[],_s=-1;function ar(t){return{current:t}}function ft(t){0>_s||(t.current=nd[_s],nd[_s]=null,_s--)}function lt(t,e){_s++,nd[_s]=t.current,t.current=e}var nr={},Zt=ar(nr),cn=ar(!1),Lr=nr;function Fs(t,e){var n=t.type.contextTypes;if(!n)return nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function Tl(){ft(cn),ft(Zt)}function sp(t,e,n){if(Zt.current!==nr)throw Error(ae(168));lt(Zt,e),lt(cn,n)}function h0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,fx(t)||"Unknown",r));return vt({},n,i)}function Al(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Lr=Zt.current,lt(Zt,t),lt(cn,cn.current),!0}function ap(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=h0(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,ft(cn),ft(Zt),lt(Zt,t)):ft(cn),lt(cn,n)}var mi=null,nc=!1,Bc=!1;function p0(t){mi===null?mi=[t]:mi.push(t)}function Ry(t){nc=!0,p0(t)}function or(){if(!Bc&&mi!==null){Bc=!0;var t=0,e=rt;try{var n=mi;for(rt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}mi=null,nc=!1}catch(r){throw mi!==null&&(mi=mi.slice(t+1)),zg(Mf,or),r}finally{rt=e,Bc=!1}}return null}var xs=[],ys=0,Cl=null,bl=0,Pn=[],Ln=0,Nr=null,gi=1,vi="";function vr(t,e){xs[ys++]=bl,xs[ys++]=Cl,Cl=t,bl=e}function m0(t,e,n){Pn[Ln++]=gi,Pn[Ln++]=vi,Pn[Ln++]=Nr,Nr=t;var i=gi;t=vi;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,gi=1<<32-$n(e)+r|n<<r|i,vi=s+t}else gi=1<<s|n<<r|i,vi=t}function Lf(t){t.return!==null&&(vr(t,1),m0(t,1,0))}function Nf(t){for(;t===Cl;)Cl=xs[--ys],xs[ys]=null,bl=xs[--ys],xs[ys]=null;for(;t===Nr;)Nr=Pn[--Ln],Pn[Ln]=null,vi=Pn[--Ln],Pn[Ln]=null,gi=Pn[--Ln],Pn[Ln]=null}var En=null,Mn=null,ht=!1,jn=null;function g0(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function op(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=Yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:gi,overflow:vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function id(t){return(t.mode&1)!==0&&(t.flags&128)===0}function rd(t){if(ht){var e=Mn;if(e){var n=e;if(!op(t,e)){if(id(t))throw Error(ae(418));e=Yi(n.nextSibling);var i=En;e&&op(t,e)?g0(i,n):(t.flags=t.flags&-4097|2,ht=!1,En=t)}}else{if(id(t))throw Error(ae(418));t.flags=t.flags&-4097|2,ht=!1,En=t}}}function lp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function yo(t){if(t!==En)return!1;if(!ht)return lp(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ju(t.type,t.memoizedProps)),e&&(e=Mn)){if(id(t))throw v0(),Error(ae(418));for(;e;)g0(t,e),e=Yi(e.nextSibling)}if(lp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=Yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?Yi(t.stateNode.nextSibling):null;return!0}function v0(){for(var t=Mn;t;)t=Yi(t.nextSibling)}function Os(){Mn=En=null,ht=!1}function Df(t){jn===null?jn=[t]:jn.push(t)}var Py=Ai.ReactCurrentBatchConfig;function ia(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function So(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function cp(t){var e=t._init;return e(t._payload)}function _0(t){function e(u,g){if(t){var v=u.deletions;v===null?(u.deletions=[g],u.flags|=16):v.push(g)}}function n(u,g){if(!t)return null;for(;g!==null;)e(u,g),g=g.sibling;return null}function i(u,g){for(u=new Map;g!==null;)g.key!==null?u.set(g.key,g):u.set(g.index,g),g=g.sibling;return u}function r(u,g){return u=Zi(u,g),u.index=0,u.sibling=null,u}function s(u,g,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<g?(u.flags|=2,g):v):(u.flags|=2,g)):(u.flags|=1048576,g)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,g,v,M){return g===null||g.tag!==6?(g=Yc(v,u.mode,M),g.return=u,g):(g=r(g,v),g.return=u,g)}function l(u,g,v,M){var N=v.type;return N===hs?d(u,g,v.props.children,M,v.key):g!==null&&(g.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Fi&&cp(N)===g.type)?(M=r(g,v.props),M.ref=ia(u,g,v),M.return=u,M):(M=cl(v.type,v.key,v.props,null,u.mode,M),M.ref=ia(u,g,v),M.return=u,M)}function c(u,g,v,M){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=$c(v,u.mode,M),g.return=u,g):(g=r(g,v.children||[]),g.return=u,g)}function d(u,g,v,M,N){return g===null||g.tag!==7?(g=Rr(v,u.mode,M,N),g.return=u,g):(g=r(g,v),g.return=u,g)}function h(u,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Yc(""+g,u.mode,v),g.return=u,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case co:return v=cl(g.type,g.key,g.props,null,u.mode,v),v.ref=ia(u,null,g),v.return=u,v;case fs:return g=$c(g,u.mode,v),g.return=u,g;case Fi:var M=g._init;return h(u,M(g._payload),v)}if(ma(g)||Qs(g))return g=Rr(g,u.mode,v,null),g.return=u,g;So(u,g)}return null}function f(u,g,v,M){var N=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return N!==null?null:o(u,g,""+v,M);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case co:return v.key===N?l(u,g,v,M):null;case fs:return v.key===N?c(u,g,v,M):null;case Fi:return N=v._init,f(u,g,N(v._payload),M)}if(ma(v)||Qs(v))return N!==null?null:d(u,g,v,M,null);So(u,v)}return null}function m(u,g,v,M,N){if(typeof M=="string"&&M!==""||typeof M=="number")return u=u.get(v)||null,o(g,u,""+M,N);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case co:return u=u.get(M.key===null?v:M.key)||null,l(g,u,M,N);case fs:return u=u.get(M.key===null?v:M.key)||null,c(g,u,M,N);case Fi:var R=M._init;return m(u,g,v,R(M._payload),N)}if(ma(M)||Qs(M))return u=u.get(v)||null,d(g,u,M,N,null);So(g,M)}return null}function _(u,g,v,M){for(var N=null,R=null,C=g,L=g=0,A=null;C!==null&&L<v.length;L++){C.index>L?(A=C,C=null):A=C.sibling;var y=f(u,C,v[L],M);if(y===null){C===null&&(C=A);break}t&&C&&y.alternate===null&&e(u,C),g=s(y,g,L),R===null?N=y:R.sibling=y,R=y,C=A}if(L===v.length)return n(u,C),ht&&vr(u,L),N;if(C===null){for(;L<v.length;L++)C=h(u,v[L],M),C!==null&&(g=s(C,g,L),R===null?N=C:R.sibling=C,R=C);return ht&&vr(u,L),N}for(C=i(u,C);L<v.length;L++)A=m(C,u,L,v[L],M),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?L:A.key),g=s(A,g,L),R===null?N=A:R.sibling=A,R=A);return t&&C.forEach(function(I){return e(u,I)}),ht&&vr(u,L),N}function x(u,g,v,M){var N=Qs(v);if(typeof N!="function")throw Error(ae(150));if(v=N.call(v),v==null)throw Error(ae(151));for(var R=N=null,C=g,L=g=0,A=null,y=v.next();C!==null&&!y.done;L++,y=v.next()){C.index>L?(A=C,C=null):A=C.sibling;var I=f(u,C,y.value,M);if(I===null){C===null&&(C=A);break}t&&C&&I.alternate===null&&e(u,C),g=s(I,g,L),R===null?N=I:R.sibling=I,R=I,C=A}if(y.done)return n(u,C),ht&&vr(u,L),N;if(C===null){for(;!y.done;L++,y=v.next())y=h(u,y.value,M),y!==null&&(g=s(y,g,L),R===null?N=y:R.sibling=y,R=y);return ht&&vr(u,L),N}for(C=i(u,C);!y.done;L++,y=v.next())y=m(C,u,L,y.value,M),y!==null&&(t&&y.alternate!==null&&C.delete(y.key===null?L:y.key),g=s(y,g,L),R===null?N=y:R.sibling=y,R=y);return t&&C.forEach(function(H){return e(u,H)}),ht&&vr(u,L),N}function p(u,g,v,M){if(typeof v=="object"&&v!==null&&v.type===hs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case co:e:{for(var N=v.key,R=g;R!==null;){if(R.key===N){if(N=v.type,N===hs){if(R.tag===7){n(u,R.sibling),g=r(R,v.props.children),g.return=u,u=g;break e}}else if(R.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Fi&&cp(N)===R.type){n(u,R.sibling),g=r(R,v.props),g.ref=ia(u,R,v),g.return=u,u=g;break e}n(u,R);break}else e(u,R);R=R.sibling}v.type===hs?(g=Rr(v.props.children,u.mode,M,v.key),g.return=u,u=g):(M=cl(v.type,v.key,v.props,null,u.mode,M),M.ref=ia(u,g,v),M.return=u,u=M)}return a(u);case fs:e:{for(R=v.key;g!==null;){if(g.key===R)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(u,g.sibling),g=r(g,v.children||[]),g.return=u,u=g;break e}else{n(u,g);break}else e(u,g);g=g.sibling}g=$c(v,u.mode,M),g.return=u,u=g}return a(u);case Fi:return R=v._init,p(u,g,R(v._payload),M)}if(ma(v))return _(u,g,v,M);if(Qs(v))return x(u,g,v,M);So(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(u,g.sibling),g=r(g,v),g.return=u,u=g):(n(u,g),g=Yc(v,u.mode,M),g.return=u,u=g),a(u)):n(u,g)}return p}var ks=_0(!0),x0=_0(!1),Rl=ar(null),Pl=null,Ss=null,If=null;function Uf(){If=Ss=Pl=null}function Ff(t){var e=Rl.current;ft(Rl),t._currentValue=e}function sd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Rs(t,e){Pl=t,If=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(on=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(If!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Pl===null)throw Error(ae(308));Ss=t,Pl.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var wr=null;function Of(t){wr===null?wr=[t]:wr.push(t)}function y0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Of(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ei(t,i)}function Ei(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function kf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function S0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ei(t,n)}return r=i.interleaved,r===null?(e.next=e,Of(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ei(t,n)}function il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ef(t,n)}}function up(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ll(t,e,n,i){var r=t.updateQueue;Oi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,x=o;switch(f=e,m=n,x.tag){case 1:if(_=x.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=x.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=vt({},h,f);break e;case 2:Oi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=a,t.lanes=a,t.memoizedState=h}}function dp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var to={},si=ar(to),Ha=ar(to),Ga=ar(to);function Tr(t){if(t===to)throw Error(ae(174));return t}function zf(t,e){switch(lt(Ga,e),lt(Ha,t),lt(si,to),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:zu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=zu(e,t)}ft(si),lt(si,e)}function zs(){ft(si),ft(Ha),ft(Ga)}function M0(t){Tr(Ga.current);var e=Tr(si.current),n=zu(e,t.type);e!==n&&(lt(Ha,t),lt(si,n))}function Bf(t){Ha.current===t&&(ft(si),ft(Ha))}var mt=ar(0);function Nl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vc=[];function Vf(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var rl=Ai.ReactCurrentDispatcher,Hc=Ai.ReactCurrentBatchConfig,Dr=0,gt=null,Ct=null,Ut=null,Dl=!1,Ta=!1,Wa=0,Ly=0;function Xt(){throw Error(ae(321))}function Hf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Gf(t,e,n,i,r,s){if(Dr=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rl.current=t===null||t.memoizedState===null?Uy:Fy,t=n(i,r),Ta){s=0;do{if(Ta=!1,Wa=0,25<=s)throw Error(ae(301));s+=1,Ut=Ct=null,e.updateQueue=null,rl.current=Oy,t=n(i,r)}while(Ta)}if(rl.current=Il,e=Ct!==null&&Ct.next!==null,Dr=0,Ut=Ct=gt=null,Dl=!1,e)throw Error(ae(300));return t}function Wf(){var t=Wa!==0;return Wa=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?gt.memoizedState=Ut=t:Ut=Ut.next=t,Ut}function Fn(){if(Ct===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Ct.next;var e=Ut===null?gt.memoizedState:Ut.next;if(e!==null)Ut=e,Ct=t;else{if(t===null)throw Error(ae(310));Ct=t,t={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},Ut===null?gt.memoizedState=Ut=t:Ut=Ut.next=t}return Ut}function ja(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Ct,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Dr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,gt.lanes|=d,Ir|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Kn(i,e.memoizedState)||(on=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,gt.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wc(t){var e=Fn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Kn(s,e.memoizedState)||(on=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function E0(){}function w0(t,e){var n=gt,i=Fn(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,on=!0),i=i.queue,jf(C0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(n.flags|=2048,Xa(9,A0.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(ae(349));Dr&30||T0(n,e,r)}return r}function T0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function A0(t,e,n,i){e.value=n,e.getSnapshot=i,b0(e)&&R0(t)}function C0(t,e,n){return n(function(){b0(e)&&R0(t)})}function b0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function R0(t){var e=Ei(t,1);e!==null&&qn(e,t,1,-1)}function fp(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ja,lastRenderedState:t},e.queue=t,t=t.dispatch=Iy.bind(null,gt,t),[e.memoizedState,t]}function Xa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function P0(){return Fn().memoizedState}function sl(t,e,n,i){var r=Jn();gt.flags|=t,r.memoizedState=Xa(1|e,n,void 0,i===void 0?null:i)}function ic(t,e,n,i){var r=Fn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var a=Ct.memoizedState;if(s=a.destroy,i!==null&&Hf(i,a.deps)){r.memoizedState=Xa(e,n,s,i);return}}gt.flags|=t,r.memoizedState=Xa(1|e,n,s,i)}function hp(t,e){return sl(8390656,8,t,e)}function jf(t,e){return ic(2048,8,t,e)}function L0(t,e){return ic(4,2,t,e)}function N0(t,e){return ic(4,4,t,e)}function D0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function I0(t,e,n){return n=n!=null?n.concat([t]):null,ic(4,4,D0.bind(null,e,t),n)}function Xf(){}function U0(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function F0(t,e){var n=Fn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Hf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function O0(t,e,n){return Dr&21?(Kn(n,e)||(n=Hg(),gt.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,on=!0),t.memoizedState=n)}function Ny(t,e){var n=rt;rt=n!==0&&4>n?n:4,t(!0);var i=Hc.transition;Hc.transition={};try{t(!1),e()}finally{rt=n,Hc.transition=i}}function k0(){return Fn().memoizedState}function Dy(t,e,n){var i=Ki(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},z0(t))B0(e,n);else if(n=y0(t,e,n,i),n!==null){var r=en();qn(n,t,i,r),V0(n,e,i)}}function Iy(t,e,n){var i=Ki(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(z0(t))B0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Kn(o,a)){var l=e.interleaved;l===null?(r.next=r,Of(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=y0(t,e,r,i),n!==null&&(r=en(),qn(n,t,i,r),V0(n,e,i))}}function z0(t){var e=t.alternate;return t===gt||e!==null&&e===gt}function B0(t,e){Ta=Dl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function V0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ef(t,n)}}var Il={readContext:Un,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},Uy={readContext:Un,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:hp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sl(4194308,4,D0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return sl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Dy.bind(null,gt,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:fp,useDebugValue:Xf,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=fp(!1),e=t[0];return t=Ny.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=gt,r=Jn();if(ht){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Ft===null)throw Error(ae(349));Dr&30||T0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,hp(C0.bind(null,i,s,t),[t]),i.flags|=2048,Xa(9,A0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Ft.identifierPrefix;if(ht){var n=vi,i=gi;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ly++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Fy={readContext:Un,useCallback:U0,useContext:Un,useEffect:jf,useImperativeHandle:I0,useInsertionEffect:L0,useLayoutEffect:N0,useMemo:F0,useReducer:Gc,useRef:P0,useState:function(){return Gc(ja)},useDebugValue:Xf,useDeferredValue:function(t){var e=Fn();return O0(e,Ct.memoizedState,t)},useTransition:function(){var t=Gc(ja)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:E0,useSyncExternalStore:w0,useId:k0,unstable_isNewReconciler:!1},Oy={readContext:Un,useCallback:U0,useContext:Un,useEffect:jf,useImperativeHandle:I0,useInsertionEffect:L0,useLayoutEffect:N0,useMemo:F0,useReducer:Wc,useRef:P0,useState:function(){return Wc(ja)},useDebugValue:Xf,useDeferredValue:function(t){var e=Fn();return Ct===null?e.memoizedState=t:O0(e,Ct.memoizedState,t)},useTransition:function(){var t=Wc(ja)[0],e=Fn().memoizedState;return[t,e]},useMutableSource:E0,useSyncExternalStore:w0,useId:k0,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ad(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var rc={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=Ki(t),s=yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(qn(e,t,r,i),il(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=Ki(t),s=yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(qn(e,t,r,i),il(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=Ki(t),r=yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=$i(t,r,i),e!==null&&(qn(e,t,i,n),il(e,t,i))}};function pp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ka(n,i)||!ka(r,s):!0}function H0(t,e,n){var i=!1,r=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=un(e)?Lr:Zt.current,i=e.contextTypes,s=(i=i!=null)?Fs(t,r):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=rc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function mp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&rc.enqueueReplaceState(e,e.state,null)}function od(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},kf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=un(e)?Lr:Zt.current,r.context=Fs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ad(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&rc.enqueueReplaceState(r,r.state,null),Ll(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Bs(t,e){try{var n="",i=e;do n+=dx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ld(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ky=typeof WeakMap=="function"?WeakMap:Map;function G0(t,e,n){n=yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Fl||(Fl=!0,_d=i),ld(t,e)},n}function W0(t,e,n){n=yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ld(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ld(t,e),typeof i!="function"&&(qi===null?qi=new Set([this]):qi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function gp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ky;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Qy.bind(null,t,e,n),e.then(t,t))}function vp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _p(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=yi(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var zy=Ai.ReactCurrentOwner,on=!1;function Jt(t,e,n,i){e.child=t===null?x0(e,null,n,i):ks(e,t.child,n,i)}function xp(t,e,n,i,r){n=n.render;var s=e.ref;return Rs(e,r),i=Gf(t,e,n,i,s,r),n=Wf(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ht&&n&&Lf(e),e.flags|=1,Jt(t,e,i,r),e.child)}function yp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!eh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,j0(t,e,s,i,r)):(t=cl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ka,n(a,i)&&t.ref===e.ref)return wi(t,e,r)}return e.flags|=1,t=Zi(s,i),t.ref=e.ref,t.return=e,e.child=t}function j0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ka(s,i)&&t.ref===e.ref)if(on=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(on=!0);else return e.lanes=t.lanes,wi(t,e,r)}return cd(t,e,n,i,r)}function X0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Es,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Es,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(Es,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(Es,yn),yn|=i;return Jt(t,e,r,n),e.child}function Y0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cd(t,e,n,i,r){var s=un(n)?Lr:Zt.current;return s=Fs(e,s),Rs(e,r),n=Gf(t,e,n,i,s,r),i=Wf(),t!==null&&!on?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,wi(t,e,r)):(ht&&i&&Lf(e),e.flags|=1,Jt(t,e,n,r),e.child)}function Sp(t,e,n,i,r){if(un(n)){var s=!0;Al(e)}else s=!1;if(Rs(e,r),e.stateNode===null)al(t,e),H0(e,n,i),od(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=un(n)?Lr:Zt.current,c=Fs(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&mp(e,a,i,c),Oi=!1;var f=e.memoizedState;a.state=f,Ll(e,i,a,r),l=e.memoizedState,o!==i||f!==l||cn.current||Oi?(typeof d=="function"&&(ad(e,n,d,i),l=e.memoizedState),(o=Oi||pp(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,S0(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Gn(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=un(n)?Lr:Zt.current,l=Fs(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&mp(e,a,i,l),Oi=!1,f=e.memoizedState,a.state=f,Ll(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||cn.current||Oi?(typeof m=="function"&&(ad(e,n,m,i),_=e.memoizedState),(c=Oi||pp(e,n,c,i,f,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return ud(t,e,n,i,s,r)}function ud(t,e,n,i,r,s){Y0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&ap(e,n,!1),wi(t,e,s);i=e.stateNode,zy.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ks(e,t.child,null,s),e.child=ks(e,null,o,s)):Jt(t,e,o,s),e.memoizedState=i.state,r&&ap(e,n,!0),e.child}function $0(t){var e=t.stateNode;e.pendingContext?sp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&sp(t,e.context,!1),zf(t,e.containerInfo)}function Mp(t,e,n,i,r){return Os(),Df(r),e.flags|=256,Jt(t,e,n,i),e.child}var dd={dehydrated:null,treeContext:null,retryLane:0};function fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function q0(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(mt,r&1),t===null)return rd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=oc(a,i,0,null),t=Rr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fd(n),e.memoizedState=dd,t):Yf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return By(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Zi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Zi(o,s):(s=Rr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?fd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=dd,i}return s=t.child,t=s.sibling,i=Zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Yf(t,e){return e=oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Mo(t,e,n,i){return i!==null&&Df(i),ks(e,t.child,null,n),t=Yf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function By(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=jc(Error(ae(422))),Mo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=oc({mode:"visible",children:i.children},r,0,null),s=Rr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ks(e,t.child,null,a),e.child.memoizedState=fd(a),e.memoizedState=dd,s);if(!(e.mode&1))return Mo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ae(419)),i=jc(s,i,void 0),Mo(t,e,a,i)}if(o=(a&t.childLanes)!==0,on||o){if(i=Ft,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ei(t,r),qn(i,t,r,-1))}return Jf(),i=jc(Error(ae(421))),Mo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Jy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=Yi(r.nextSibling),En=e,ht=!0,jn=null,t!==null&&(Pn[Ln++]=gi,Pn[Ln++]=vi,Pn[Ln++]=Nr,gi=t.id,vi=t.overflow,Nr=e),e=Yf(e,i.children),e.flags|=4096,e)}function Ep(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),sd(t.return,e,n)}function Xc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function K0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ep(t,n,e);else if(t.tag===19)Ep(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Nl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Nl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xc(e,!0,n,null,s);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function al(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function wi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=Zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Vy(t,e,n){switch(e.tag){case 3:$0(e),Os();break;case 5:M0(e);break;case 1:un(e.type)&&Al(e);break;case 4:zf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Rl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?q0(t,e,n):(lt(mt,mt.current&1),t=wi(t,e,n),t!==null?t.sibling:null);lt(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return K0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,X0(t,e,n)}return wi(t,e,n)}var Z0,hd,Q0,J0;Z0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hd=function(){};Q0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(si.current);var s=null;switch(n){case"input":r=Uu(t,r),i=Uu(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=ku(t,r),i=ku(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=wl)}Bu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(La.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(La.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};J0=function(t,e,n,i){n!==i&&(e.flags|=4)};function ra(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Hy(t,e,n){var i=e.pendingProps;switch(Nf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return un(e.type)&&Tl(),Yt(e),null;case 3:return i=e.stateNode,zs(),ft(cn),ft(Zt),Vf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(yo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(Sd(jn),jn=null))),hd(t,e),Yt(e),null;case 5:Bf(e);var r=Tr(Ga.current);if(n=e.type,t!==null&&e.stateNode!=null)Q0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Yt(e),null}if(t=Tr(si.current),yo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ti]=e,i[Va]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<va.length;r++)ut(va[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Nh(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Ih(i,s),ut("invalid",i)}Bu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&xo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&xo(i.textContent,o,t),r=["children",""+o]):La.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":uo(i),Dh(i,s,!0);break;case"textarea":uo(i),Uh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=wl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[ti]=e,t[Va]=i,Z0(t,e,!1,!1),e.stateNode=t;e:{switch(a=Vu(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<va.length;r++)ut(va[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Nh(t,i),r=Uu(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Ih(t,i),r=ku(t,i),ut("invalid",t);break;default:r=i}Bu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Pg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Na(t,l):typeof l=="number"&&Na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(La.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&vf(t,s,l,a))}switch(n){case"input":uo(t),Dh(t,i,!1);break;case"textarea":uo(t),Uh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ts(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ts(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=wl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)J0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Tr(Ga.current),Tr(si.current),yo(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:xo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Yt(e),null;case 13:if(ft(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&Mn!==null&&e.mode&1&&!(e.flags&128))v0(),Os(),e.flags|=98560,s=!1;else if(s=yo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[ti]=e}else Os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else jn!==null&&(Sd(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Rt===0&&(Rt=3):Jf())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return zs(),hd(t,e),t===null&&za(e.stateNode.containerInfo),Yt(e),null;case 10:return Ff(e.type._context),Yt(e),null;case 17:return un(e.type)&&Tl(),Yt(e),null;case 19:if(ft(mt),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ra(s,!1);else{if(Rt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Nl(t),a!==null){for(e.flags|=128,ra(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Vs&&(e.flags|=128,i=!0,ra(s,!1),e.lanes=4194304)}else{if(!i)if(t=Nl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ra(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ht)return Yt(e),null}else 2*Mt()-s.renderingStartTime>Vs&&n!==1073741824&&(e.flags|=128,i=!0,ra(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=mt.current,lt(mt,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return Qf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function Gy(t,e){switch(Nf(e),e.tag){case 1:return un(e.type)&&Tl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zs(),ft(cn),ft(Zt),Vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Bf(e),null;case 13:if(ft(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));Os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(mt),null;case 4:return zs(),null;case 10:return Ff(e.type._context),null;case 22:case 23:return Qf(),null;case 24:return null;default:return null}}var Eo=!1,Kt=!1,Wy=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function pd(t,e,n){try{n()}catch(i){St(t,e,i)}}var wp=!1;function jy(t,e){if(Zu=Sl,t=r0(),Pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Qu={focusedElem:t,selectionRange:n},Sl=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var x=_.memoizedProps,p=_.memoizedState,u=e.stateNode,g=u.getSnapshotBeforeUpdate(e.elementType===e.type?x:Gn(e.type,x),p);u.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(M){St(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return _=wp,wp=!1,_}function Aa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&pd(e,n,s)}r=r.next}while(r!==i)}}function sc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ev(t){var e=t.alternate;e!==null&&(t.alternate=null,ev(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[Va],delete e[td],delete e[Cy],delete e[by])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function tv(t){return t.tag===5||t.tag===3||t.tag===4}function Tp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||tv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=wl));else if(i!==4&&(t=t.child,t!==null))for(gd(t,e,n),t=t.sibling;t!==null;)gd(t,e,n),t=t.sibling}function vd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(vd(t,e,n),t=t.sibling;t!==null;)vd(t,e,n),t=t.sibling}var zt=null,Wn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)nv(t,e,n),n=n.sibling}function nv(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 5:Kt||Ms(n,e);case 6:var i=zt,r=Wn;zt=null,Ri(t,e,n),zt=i,Wn=r,zt!==null&&(Wn?(t=zt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):zt.removeChild(n.stateNode));break;case 18:zt!==null&&(Wn?(t=zt,n=n.stateNode,t.nodeType===8?zc(t.parentNode,n):t.nodeType===1&&zc(t,n),Fa(t)):zc(zt,n.stateNode));break;case 4:i=zt,r=Wn,zt=n.stateNode.containerInfo,Wn=!0,Ri(t,e,n),zt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&pd(n,e,a),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Kt&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){St(n,e,o)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Ri(t,e,n),Kt=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function Ap(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Wy),e.forEach(function(i){var r=eS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:zt=o.stateNode,Wn=!1;break e;case 3:zt=o.stateNode.containerInfo,Wn=!0;break e;case 4:zt=o.stateNode.containerInfo,Wn=!0;break e}o=o.return}if(zt===null)throw Error(ae(160));nv(s,a,r),zt=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)iv(e,t),e=e.sibling}function iv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),Qn(t),i&4){try{Aa(3,t,t.return),sc(3,t)}catch(x){St(t,t.return,x)}try{Aa(5,t,t.return)}catch(x){St(t,t.return,x)}}break;case 1:zn(e,t),Qn(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(zn(e,t),Qn(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{Na(r,"")}catch(x){St(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Tg(r,s),Vu(o,a);var c=Vu(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?Pg(r,h):d==="dangerouslySetInnerHTML"?bg(r,h):d==="children"?Na(r,h):vf(r,d,h,c)}switch(o){case"input":Fu(r,s);break;case"textarea":Ag(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ts(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ts(r,!!s.multiple,s.defaultValue,!0):Ts(r,!!s.multiple,s.multiple?[]:"",!1))}r[Va]=s}catch(x){St(t,t.return,x)}}break;case 6:if(zn(e,t),Qn(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){St(t,t.return,x)}}break;case 3:if(zn(e,t),Qn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(x){St(t,t.return,x)}break;case 4:zn(e,t),Qn(t);break;case 13:zn(e,t),Qn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Kf=Mt())),i&4&&Ap(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||d,zn(e,t),Kt=c):zn(e,t),Qn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(xe=t,d=t.child;d!==null;){for(h=xe=d;xe!==null;){switch(f=xe,m=f.child,f.tag){case 0:case 11:case 14:case 15:Aa(4,f,f.return);break;case 1:Ms(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(x){St(i,n,x)}}break;case 5:Ms(f,f.return);break;case 22:if(f.memoizedState!==null){bp(h);continue}}m!==null?(m.return=f,xe=m):bp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=Rg("display",a))}catch(x){St(t,t.return,x)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(x){St(t,t.return,x)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:zn(e,t),Qn(t),i&4&&Ap(t);break;case 21:break;default:zn(e,t),Qn(t)}}function Qn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(tv(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Na(r,""),i.flags&=-33);var s=Tp(t);vd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Tp(t);gd(t,o,a);break;default:throw Error(ae(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Xy(t,e,n){xe=t,rv(t)}function rv(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Eo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Kt;o=Eo;var c=Kt;if(Eo=a,(Kt=l)&&!c)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?Rp(r):l!==null?(l.return=a,xe=l):Rp(r);for(;s!==null;)xe=s,rv(s),s=s.sibling;xe=r,Eo=o,Kt=c}Cp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):Cp(t)}}function Cp(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||sc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Fa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}Kt||e.flags&512&&md(e)}catch(f){St(e,e.return,f)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function bp(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Rp(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{sc(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{md(e)}catch(l){St(e,s,l)}break;case 5:var a=e.return;try{md(e)}catch(l){St(e,a,l)}}}catch(l){St(e,e.return,l)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var Yy=Math.ceil,Ul=Ai.ReactCurrentDispatcher,$f=Ai.ReactCurrentOwner,In=Ai.ReactCurrentBatchConfig,Ze=0,Ft=null,Tt=null,Vt=0,yn=0,Es=ar(0),Rt=0,Ya=null,Ir=0,ac=0,qf=0,Ca=null,sn=null,Kf=0,Vs=1/0,pi=null,Fl=!1,_d=null,qi=null,wo=!1,Hi=null,Ol=0,ba=0,xd=null,ol=-1,ll=0;function en(){return Ze&6?Mt():ol!==-1?ol:ol=Mt()}function Ki(t){return t.mode&1?Ze&2&&Vt!==0?Vt&-Vt:Py.transition!==null?(ll===0&&(ll=Hg()),ll):(t=rt,t!==0||(t=window.event,t=t===void 0?16:qg(t.type)),t):1}function qn(t,e,n,i){if(50<ba)throw ba=0,xd=null,Error(ae(185));Qa(t,n,i),(!(Ze&2)||t!==Ft)&&(t===Ft&&(!(Ze&2)&&(ac|=n),Rt===4&&zi(t,Vt)),dn(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Vs=Mt()+500,nc&&or()))}function dn(t,e){var n=t.callbackNode;Px(t,e);var i=yl(t,t===Ft?Vt:0);if(i===0)n!==null&&kh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&kh(n),e===1)t.tag===0?Ry(Pp.bind(null,t)):p0(Pp.bind(null,t)),Ty(function(){!(Ze&6)&&or()}),n=null;else{switch(Gg(i)){case 1:n=Mf;break;case 4:n=Bg;break;case 16:n=xl;break;case 536870912:n=Vg;break;default:n=xl}n=fv(n,sv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function sv(t,e){if(ol=-1,ll=0,Ze&6)throw Error(ae(327));var n=t.callbackNode;if(Ps()&&t.callbackNode!==n)return null;var i=yl(t,t===Ft?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=kl(t,i);else{e=i;var r=Ze;Ze|=2;var s=ov();(Ft!==t||Vt!==e)&&(pi=null,Vs=Mt()+500,br(t,e));do try{Ky();break}catch(o){av(t,o)}while(!0);Uf(),Ul.current=s,Ze=r,Tt!==null?e=0:(Ft=null,Vt=0,e=Rt)}if(e!==0){if(e===2&&(r=Xu(t),r!==0&&(i=r,e=yd(t,r))),e===1)throw n=Ya,br(t,0),zi(t,i),dn(t,Mt()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!$y(r)&&(e=kl(t,i),e===2&&(s=Xu(t),s!==0&&(i=s,e=yd(t,s))),e===1))throw n=Ya,br(t,0),zi(t,i),dn(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:_r(t,sn,pi);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=Kf+500-Mt(),10<e)){if(yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ed(_r.bind(null,t,sn,pi),e);break}_r(t,sn,pi);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-$n(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Yy(i/1960))-i,10<i){t.timeoutHandle=ed(_r.bind(null,t,sn,pi),i);break}_r(t,sn,pi);break;case 5:_r(t,sn,pi);break;default:throw Error(ae(329))}}}return dn(t,Mt()),t.callbackNode===n?sv.bind(null,t):null}function yd(t,e){var n=Ca;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=kl(t,e),t!==2&&(e=sn,sn=n,e!==null&&Sd(e)),t}function Sd(t){sn===null?sn=t:sn.push.apply(sn,t)}function $y(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~qf,e&=~ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function Pp(t){if(Ze&6)throw Error(ae(327));Ps();var e=yl(t,0);if(!(e&1))return dn(t,Mt()),null;var n=kl(t,e);if(t.tag!==0&&n===2){var i=Xu(t);i!==0&&(e=i,n=yd(t,i))}if(n===1)throw n=Ya,br(t,0),zi(t,e),dn(t,Mt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,sn,pi),dn(t,Mt()),null}function Zf(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Vs=Mt()+500,nc&&or())}}function Ur(t){Hi!==null&&Hi.tag===0&&!(Ze&6)&&Ps();var e=Ze;Ze|=1;var n=In.transition,i=rt;try{if(In.transition=null,rt=1,t)return t()}finally{rt=i,In.transition=n,Ze=e,!(Ze&6)&&or()}}function Qf(){yn=Es.current,ft(Es)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,wy(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(Nf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Tl();break;case 3:zs(),ft(cn),ft(Zt),Vf();break;case 5:Bf(i);break;case 4:zs();break;case 13:ft(mt);break;case 19:ft(mt);break;case 10:Ff(i.type._context);break;case 22:case 23:Qf()}n=n.return}if(Ft=t,Tt=t=Zi(t.current,null),Vt=yn=e,Rt=0,Ya=null,qf=ac=Ir=0,sn=Ca=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}wr=null}return t}function av(t,e){do{var n=Tt;try{if(Uf(),rl.current=Il,Dl){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Dl=!1}if(Dr=0,Ut=Ct=gt=null,Ta=!1,Wa=0,$f.current=null,n===null||n.return===null){Rt=1,Ya=e,Tt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Vt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=vp(a);if(m!==null){m.flags&=-257,_p(m,a,o,s,e),m.mode&1&&gp(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var x=new Set;x.add(l),e.updateQueue=x}else _.add(l);break e}else{if(!(e&1)){gp(s,c,e),Jf();break e}l=Error(ae(426))}}else if(ht&&o.mode&1){var p=vp(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),_p(p,a,o,s,e),Df(Bs(l,o));break e}}s=l=Bs(l,o),Rt!==4&&(Rt=2),Ca===null?Ca=[s]:Ca.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=G0(s,l,e);up(s,u);break e;case 1:o=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(qi===null||!qi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=W0(s,o,e);up(s,M);break e}}s=s.return}while(s!==null)}cv(n)}catch(N){e=N,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function ov(){var t=Ul.current;return Ul.current=Il,t===null?Il:t}function Jf(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ft===null||!(Ir&268435455)&&!(ac&268435455)||zi(Ft,Vt)}function kl(t,e){var n=Ze;Ze|=2;var i=ov();(Ft!==t||Vt!==e)&&(pi=null,br(t,e));do try{qy();break}catch(r){av(t,r)}while(!0);if(Uf(),Ze=n,Ul.current=i,Tt!==null)throw Error(ae(261));return Ft=null,Vt=0,Rt}function qy(){for(;Tt!==null;)lv(Tt)}function Ky(){for(;Tt!==null&&!Sx();)lv(Tt)}function lv(t){var e=dv(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?cv(t):Tt=e,$f.current=null}function cv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Gy(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Rt=6,Tt=null;return}}else if(n=Hy(n,e,yn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Rt===0&&(Rt=5)}function _r(t,e,n){var i=rt,r=In.transition;try{In.transition=null,rt=1,Zy(t,e,n,i)}finally{In.transition=r,rt=i}return null}function Zy(t,e,n,i){do Ps();while(Hi!==null);if(Ze&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Lx(t,s),t===Ft&&(Tt=Ft=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,fv(xl,function(){return Ps(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var a=rt;rt=1;var o=Ze;Ze|=4,$f.current=null,jy(t,n),iv(n,t),vy(Qu),Sl=!!Zu,Qu=Zu=null,t.current=n,Xy(n),Mx(),Ze=o,rt=a,In.transition=s}else t.current=n;if(wo&&(wo=!1,Hi=t,Ol=r),s=t.pendingLanes,s===0&&(qi=null),Tx(n.stateNode),dn(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Fl)throw Fl=!1,t=_d,_d=null,t;return Ol&1&&t.tag!==0&&Ps(),s=t.pendingLanes,s&1?t===xd?ba++:(ba=0,xd=t):ba=0,or(),null}function Ps(){if(Hi!==null){var t=Gg(Ol),e=In.transition,n=rt;try{if(In.transition=null,rt=16>t?16:t,Hi===null)var i=!1;else{if(t=Hi,Hi=null,Ol=0,Ze&6)throw Error(ae(331));var r=Ze;for(Ze|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(xe=c;xe!==null;){var d=xe;switch(d.tag){case 0:case 11:case 15:Aa(8,d,s)}var h=d.child;if(h!==null)h.return=d,xe=h;else for(;xe!==null;){d=xe;var f=d.sibling,m=d.return;if(ev(d),d===c){xe=null;break}if(f!==null){f.return=m,xe=f;break}xe=m}}}var _=s.alternate;if(_!==null){var x=_.child;if(x!==null){_.child=null;do{var p=x.sibling;x.sibling=null,x=p}while(x!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Aa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,xe=u;break e}xe=s.return}}var g=t.current;for(xe=g;xe!==null;){a=xe;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,xe=v;else e:for(a=g;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:sc(9,o)}}catch(N){St(o,o.return,N)}if(o===a){xe=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,xe=M;break e}xe=o.return}}if(Ze=r,or(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(Zl,t)}catch{}i=!0}return i}finally{rt=n,In.transition=e}}return!1}function Lp(t,e,n){e=Bs(n,e),e=G0(t,e,1),t=$i(t,e,1),e=en(),t!==null&&(Qa(t,1,e),dn(t,e))}function St(t,e,n){if(t.tag===3)Lp(t,t,n);else for(;e!==null;){if(e.tag===3){Lp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(qi===null||!qi.has(i))){t=Bs(n,t),t=W0(e,t,1),e=$i(e,t,1),t=en(),e!==null&&(Qa(e,1,t),dn(e,t));break}}e=e.return}}function Qy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Vt&n)===n&&(Rt===4||Rt===3&&(Vt&130023424)===Vt&&500>Mt()-Kf?br(t,0):qf|=n),dn(t,e)}function uv(t,e){e===0&&(t.mode&1?(e=po,po<<=1,!(po&130023424)&&(po=4194304)):e=1);var n=en();t=Ei(t,e),t!==null&&(Qa(t,e,n),dn(t,n))}function Jy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),uv(t,n)}function eS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),uv(t,n)}var dv;dv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)on=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return on=!1,Vy(t,e,n);on=!!(t.flags&131072)}else on=!1,ht&&e.flags&1048576&&m0(e,bl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;al(t,e),t=e.pendingProps;var r=Fs(e,Zt.current);Rs(e,n),r=Gf(null,e,i,t,r,n);var s=Wf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Al(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,kf(e),r.updater=rc,e.stateNode=r,r._reactInternals=e,od(e,i,t,n),e=ud(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&Lf(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(al(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nS(i),t=Gn(i,t),r){case 0:e=cd(null,e,i,t,n);break e;case 1:e=Sp(null,e,i,t,n);break e;case 11:e=xp(null,e,i,t,n);break e;case 14:e=yp(null,e,i,Gn(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),cd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Sp(t,e,i,r,n);case 3:e:{if($0(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,S0(t,e),Ll(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Bs(Error(ae(423)),e),e=Mp(t,e,i,n,r);break e}else if(i!==r){r=Bs(Error(ae(424)),e),e=Mp(t,e,i,n,r);break e}else for(Mn=Yi(e.stateNode.containerInfo.firstChild),En=e,ht=!0,jn=null,n=x0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Os(),i===r){e=wi(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return M0(e),t===null&&rd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Ju(i,r)?a=null:s!==null&&Ju(i,s)&&(e.flags|=32),Y0(t,e),Jt(t,e,a,n),e.child;case 6:return t===null&&rd(e),null;case 13:return q0(t,e,n);case 4:return zf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ks(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),xp(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,lt(Rl,i._currentValue),i._currentValue=a,s!==null)if(Kn(s.value,a)){if(s.children===r.children&&!cn.current){e=wi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),sd(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ae(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),sd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Rs(e,n),r=Un(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),yp(t,e,i,r,n);case 15:return j0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),al(t,e),e.tag=1,un(i)?(t=!0,Al(e)):t=!1,Rs(e,n),H0(e,i,r),od(e,i,r,n),ud(null,e,i,!0,t,n);case 19:return K0(t,e,n);case 22:return X0(t,e,n)}throw Error(ae(156,e.tag))};function fv(t,e){return zg(t,e)}function tS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new tS(t,e,n,i)}function eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nS(t){if(typeof t=="function")return eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xf)return 11;if(t===yf)return 14}return 2}function Zi(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")eh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case hs:return Rr(n.children,r,s,e);case _f:a=8,r|=8;break;case Lu:return t=Nn(12,n,e,r|2),t.elementType=Lu,t.lanes=s,t;case Nu:return t=Nn(13,n,e,r),t.elementType=Nu,t.lanes=s,t;case Du:return t=Nn(19,n,e,r),t.elementType=Du,t.lanes=s,t;case Mg:return oc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yg:a=10;break e;case Sg:a=9;break e;case xf:a=11;break e;case yf:a=14;break e;case Fi:a=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Nn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Rr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function oc(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=Mg,t.lanes=n,t.stateNode={isHidden:!1},t}function Yc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function $c(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function th(t,e,n,i,r,s,a,o,l){return t=new iS(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},kf(s),t}function rS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function hv(t){if(!t)return nr;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(un(n))return h0(t,n,e)}return e}function pv(t,e,n,i,r,s,a,o,l){return t=th(n,i,!0,t,r,s,a,o,l),t.context=hv(null),n=t.current,i=en(),r=Ki(n),s=yi(i,r),s.callback=e??null,$i(n,s,r),t.current.lanes=r,Qa(t,r,i),dn(t,i),t}function lc(t,e,n,i){var r=e.current,s=en(),a=Ki(r);return n=hv(n),e.context===null?e.context=n:e.pendingContext=n,e=yi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$i(r,e,a),t!==null&&(qn(t,r,a,s),il(t,r,a)),a}function zl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nh(t,e){Np(t,e),(t=t.alternate)&&Np(t,e)}function sS(){return null}var mv=typeof reportError=="function"?reportError:function(t){console.error(t)};function ih(t){this._internalRoot=t}cc.prototype.render=ih.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));lc(t,e,null,null)};cc.prototype.unmount=ih.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){lc(null,t,null,null)}),e[Mi]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Xg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ki.length&&e!==0&&e<ki[n].priority;n++);ki.splice(n,0,t),n===0&&$g(t)}};function rh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function uc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dp(){}function aS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=zl(a);s.call(c)}}var a=pv(e,i,t,0,null,!1,!1,"",Dp);return t._reactRootContainer=a,t[Mi]=a.current,za(t.nodeType===8?t.parentNode:t),Ur(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=zl(l);o.call(c)}}var l=th(t,0,!1,null,null,!1,!1,"",Dp);return t._reactRootContainer=l,t[Mi]=l.current,za(t.nodeType===8?t.parentNode:t),Ur(function(){lc(e,l,n,i)}),l}function dc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=zl(a);o.call(l)}}lc(e,a,t,r)}else a=aS(n,e,t,r,i);return zl(a)}Wg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ga(e.pendingLanes);n!==0&&(Ef(e,n|1),dn(e,Mt()),!(Ze&6)&&(Vs=Mt()+500,or()))}break;case 13:Ur(function(){var i=Ei(t,1);if(i!==null){var r=en();qn(i,t,1,r)}}),nh(t,1)}};wf=function(t){if(t.tag===13){var e=Ei(t,134217728);if(e!==null){var n=en();qn(e,t,134217728,n)}nh(t,134217728)}};jg=function(t){if(t.tag===13){var e=Ki(t),n=Ei(t,e);if(n!==null){var i=en();qn(n,t,e,i)}nh(t,e)}};Xg=function(){return rt};Yg=function(t,e){var n=rt;try{return rt=t,e()}finally{rt=n}};Gu=function(t,e,n){switch(e){case"input":if(Fu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=tc(i);if(!r)throw Error(ae(90));wg(i),Fu(i,r)}}}break;case"textarea":Ag(t,n);break;case"select":e=n.value,e!=null&&Ts(t,!!n.multiple,e,!1)}};Dg=Zf;Ig=Ur;var oS={usingClientEntryPoint:!1,Events:[eo,vs,tc,Lg,Ng,Zf]},sa={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lS={bundleType:sa.bundleType,version:sa.version,rendererPackageName:sa.rendererPackageName,rendererConfig:sa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Og(t),t===null?null:t.stateNode},findFiberByHostInstance:sa.findFiberByHostInstance||sS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var To=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!To.isDisabled&&To.supportsFiber)try{Zl=To.inject(lS),ri=To}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rh(e))throw Error(ae(200));return rS(t,e,null,n)};Tn.createRoot=function(t,e){if(!rh(t))throw Error(ae(299));var n=!1,i="",r=mv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=th(t,1,!1,null,null,n,!1,i,r),t[Mi]=e.current,za(t.nodeType===8?t.parentNode:t),new ih(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=Og(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Ur(t)};Tn.hydrate=function(t,e,n){if(!uc(e))throw Error(ae(200));return dc(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!rh(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=mv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=pv(e,null,t,1,n??null,r,!1,s,a),t[Mi]=e.current,za(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new cc(e)};Tn.render=function(t,e,n){if(!uc(e))throw Error(ae(200));return dc(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!uc(t))throw Error(ae(40));return t._reactRootContainer?(Ur(function(){dc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mi]=null})}),!0):!1};Tn.unstable_batchedUpdates=Zf;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!uc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return dc(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gv)}catch(t){console.error(t)}}gv(),gg.exports=Tn;var cS=gg.exports,Ip=cS;Ru.createRoot=Ip.createRoot,Ru.hydrateRoot=Ip.hydrateRoot;/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $a(){return $a=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},$a.apply(this,arguments)}var Gi;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gi||(Gi={}));const Up="popstate";function uS(t){t===void 0&&(t={});function e(r,s){let{pathname:a="/",search:o="",hash:l=""}=Hr(r.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Md("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){let a=r.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let l=r.location.href,c=l.indexOf("#");o=c===-1?l:l.slice(0,c)}return o+"#"+(typeof s=="string"?s:vv(s))}function i(r,s){sh(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return fS(e,n,i,t)}function At(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function sh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function dS(){return Math.random().toString(36).substr(2,8)}function Fp(t,e){return{usr:t.state,key:t.key,idx:e}}function Md(t,e,n,i){return n===void 0&&(n=null),$a({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Hr(e):e,{state:n,key:e&&e.key||i||dS()})}function vv(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Hr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function fS(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,a=r.history,o=Gi.Pop,l=null,c=d();c==null&&(c=0,a.replaceState($a({},a.state,{idx:c}),""));function d(){return(a.state||{idx:null}).idx}function h(){o=Gi.Pop;let p=d(),u=p==null?null:p-c;c=p,l&&l({action:o,location:x.location,delta:u})}function f(p,u){o=Gi.Push;let g=Md(x.location,p,u);n&&n(g,p),c=d()+1;let v=Fp(g,c),M=x.createHref(g);try{a.pushState(v,"",M)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;r.location.assign(M)}s&&l&&l({action:o,location:x.location,delta:1})}function m(p,u){o=Gi.Replace;let g=Md(x.location,p,u);n&&n(g,p),c=d();let v=Fp(g,c),M=x.createHref(g);a.replaceState(v,"",M),s&&l&&l({action:o,location:x.location,delta:0})}function _(p){let u=r.location.origin!=="null"?r.location.origin:r.location.href,g=typeof p=="string"?p:vv(p);return g=g.replace(/ $/,"%20"),At(u,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,u)}let x={get action(){return o},get location(){return t(r,a)},listen(p){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Up,h),l=p,()=>{r.removeEventListener(Up,h),l=null}},createHref(p){return e(r,p)},createURL:_,encodeLocation(p){let u=_(p);return{pathname:u.pathname,search:u.search,hash:u.hash}},push:f,replace:m,go(p){return a.go(p)}};return x}var Op;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Op||(Op={}));function hS(t,e,n){return n===void 0&&(n="/"),pS(t,e,n)}function pS(t,e,n,i){let r=typeof e=="string"?Hr(e):e,s=yv(r.pathname||"/",n);if(s==null)return null;let a=_v(t);mS(a);let o=null;for(let l=0;o==null&&l<a.length;++l){let c=CS(s);o=wS(a[l],c)}return o}function _v(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(At(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let c=Pr([i,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(At(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),_v(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:MS(c,s.index),routesMeta:d})};return t.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))r(s,a);else for(let l of xv(s.path))r(s,a,l)}),e}function xv(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),s=n.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let a=xv(i.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),r&&o.push(...a),o.map(l=>t.startsWith("/")&&l===""?"/":l)}function mS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ES(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const gS=/^:[\w-]+$/,vS=3,_S=2,xS=1,yS=10,SS=-2,kp=t=>t==="*";function MS(t,e){let n=t.split("/"),i=n.length;return n.some(kp)&&(i+=SS),e&&(i+=_S),n.filter(r=>!kp(r)).reduce((r,s)=>r+(gS.test(s)?vS:s===""?xS:yS),i)}function ES(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function wS(t,e,n){let{routesMeta:i}=t,r={},s="/",a=[];for(let o=0;o<i.length;++o){let l=i[o],c=o===i.length-1,d=s==="/"?e:e.slice(s.length)||"/",h=TS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!h)return null;Object.assign(r,h.params),a.push({params:r,pathname:Pr([s,h.pathname]),pathnameBase:LS(Pr([s,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(s=Pr([s,h.pathnameBase]))}return a}function TS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=AS(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let s=r[0],a=s.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:i.reduce((c,d,h)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let x=o[h]||"";a=s.slice(0,s.length-x.length).replace(/(.)\/+$/,"$1")}const _=o[h];return m&&!_?c[f]=void 0:c[f]=(_||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:a,pattern:t}}function AS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),sh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(i.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function CS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return sh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function yv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function bS(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:r=""}=typeof t=="string"?Hr(t):t;return{pathname:n?n.startsWith("/")?n:RS(n,e):e,search:NS(i),hash:DS(r)}}function RS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function qc(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function PS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Sv(t,e){let n=PS(t);return e?n.map((i,r)=>r===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Mv(t,e,n,i){i===void 0&&(i=!1);let r;typeof t=="string"?r=Hr(t):(r=$a({},t),At(!r.pathname||!r.pathname.includes("?"),qc("?","pathname","search",r)),At(!r.pathname||!r.pathname.includes("#"),qc("#","pathname","hash",r)),At(!r.search||!r.search.includes("#"),qc("#","search","hash",r)));let s=t===""||r.pathname==="",a=s?"/":r.pathname,o;if(a==null)o=n;else{let h=e.length-1;if(!i&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),h-=1;r.pathname=f.join("/")}o=h>=0?e[h]:"/"}let l=bS(r,o),c=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Pr=t=>t.join("/").replace(/\/\/+/g,"/"),LS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),NS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,DS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function IS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ev=["post","put","patch","delete"];new Set(Ev);const US=["get",...Ev];new Set(US);/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},qa.apply(this,arguments)}const ah=F.createContext(null),FS=F.createContext(null),no=F.createContext(null),fc=F.createContext(null),Gr=F.createContext({outlet:null,matches:[],isDataRoute:!1}),wv=F.createContext(null);function io(){return F.useContext(fc)!=null}function oh(){return io()||At(!1),F.useContext(fc).location}function Tv(t){F.useContext(no).static||F.useLayoutEffect(t)}function hc(){let{isDataRoute:t}=F.useContext(Gr);return t?qS():OS()}function OS(){io()||At(!1);let t=F.useContext(ah),{basename:e,future:n,navigator:i}=F.useContext(no),{matches:r}=F.useContext(Gr),{pathname:s}=oh(),a=JSON.stringify(Sv(r,n.v7_relativeSplatPath)),o=F.useRef(!1);return Tv(()=>{o.current=!0}),F.useCallback(function(c,d){if(d===void 0&&(d={}),!o.current)return;if(typeof c=="number"){i.go(c);return}let h=Mv(c,JSON.parse(a),s,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Pr([e,h.pathname])),(d.replace?i.replace:i.push)(h,d.state,d)},[e,i,a,s,t])}function kS(t,e){return zS(t,e)}function zS(t,e,n,i){io()||At(!1);let{navigator:r}=F.useContext(no),{matches:s}=F.useContext(Gr),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let c=oh(),d;if(e){var h;let p=typeof e=="string"?Hr(e):e;l==="/"||(h=p.pathname)!=null&&h.startsWith(l)||At(!1),d=p}else d=c;let f=d.pathname||"/",m=f;if(l!=="/"){let p=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(p.length).join("/")}let _=hS(t,{pathname:m}),x=WS(_&&_.map(p=>Object.assign({},p,{params:Object.assign({},o,p.params),pathname:Pr([l,r.encodeLocation?r.encodeLocation(p.pathname).pathname:p.pathname]),pathnameBase:p.pathnameBase==="/"?l:Pr([l,r.encodeLocation?r.encodeLocation(p.pathnameBase).pathname:p.pathnameBase])})),s,n,i);return e&&x?F.createElement(fc.Provider,{value:{location:qa({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Gi.Pop}},x):x}function BS(){let t=$S(),e=IS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),n?F.createElement("pre",{style:r},n):null,null)}const VS=F.createElement(BS,null);class HS extends F.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?F.createElement(Gr.Provider,{value:this.props.routeContext},F.createElement(wv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GS(t){let{routeContext:e,match:n,children:i}=t,r=F.useContext(ah);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),F.createElement(Gr.Provider,{value:e},i)}function WS(t,e,n,i){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let a=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let d=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);d>=0||At(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,c=-1;if(n&&i&&i.v7_partialHydration)for(let d=0;d<a.length;d++){let h=a[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:f,errors:m}=n,_=h.route.loader&&f[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||_){l=!0,c>=0?a=a.slice(0,c+1):a=[a[0]];break}}}return a.reduceRight((d,h,f)=>{let m,_=!1,x=null,p=null;n&&(m=o&&h.route.id?o[h.route.id]:void 0,x=h.route.errorElement||VS,l&&(c<0&&f===0?(KS("route-fallback"),_=!0,p=null):c===f&&(_=!0,p=h.route.hydrateFallbackElement||null)));let u=e.concat(a.slice(0,f+1)),g=()=>{let v;return m?v=x:_?v=p:h.route.Component?v=F.createElement(h.route.Component,null):h.route.element?v=h.route.element:v=d,F.createElement(GS,{match:h,routeContext:{outlet:d,matches:u,isDataRoute:n!=null},children:v})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?F.createElement(HS,{location:n.location,revalidation:n.revalidation,component:x,error:m,children:g(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):g()},null)}var Av=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Av||{}),Cv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Cv||{});function jS(t){let e=F.useContext(ah);return e||At(!1),e}function XS(t){let e=F.useContext(FS);return e||At(!1),e}function YS(t){let e=F.useContext(Gr);return e||At(!1),e}function bv(t){let e=YS(),n=e.matches[e.matches.length-1];return n.route.id||At(!1),n.route.id}function $S(){var t;let e=F.useContext(wv),n=XS(),i=bv();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function qS(){let{router:t}=jS(Av.UseNavigateStable),e=bv(Cv.UseNavigateStable),n=F.useRef(!1);return Tv(()=>{n.current=!0}),F.useCallback(function(r,s){s===void 0&&(s={}),n.current&&(typeof r=="number"?t.navigate(r):t.navigate(r,qa({fromRouteId:e},s)))},[t,e])}const zp={};function KS(t,e,n){zp[t]||(zp[t]=!0)}function Rv(t){let{to:e,replace:n,state:i,relative:r}=t;io()||At(!1);let{future:s,static:a}=F.useContext(no),{matches:o}=F.useContext(Gr),{pathname:l}=oh(),c=hc(),d=Mv(e,Sv(o,s.v7_relativeSplatPath),l,r==="path"),h=JSON.stringify(d);return F.useEffect(()=>c(JSON.parse(h),{replace:n,state:i,relative:r}),[c,h,r,n,i]),null}function _a(t){At(!1)}function ZS(t){let{basename:e="/",children:n=null,location:i,navigationType:r=Gi.Pop,navigator:s,static:a=!1,future:o}=t;io()&&At(!1);let l=e.replace(/^\/*/,"/"),c=F.useMemo(()=>({basename:l,navigator:s,static:a,future:qa({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof i=="string"&&(i=Hr(i));let{pathname:d="/",search:h="",hash:f="",state:m=null,key:_="default"}=i,x=F.useMemo(()=>{let p=yv(d,l);return p==null?null:{location:{pathname:p,search:h,hash:f,state:m,key:_},navigationType:r}},[l,d,h,f,m,_,r]);return x==null?null:F.createElement(no.Provider,{value:c},F.createElement(fc.Provider,{children:n,value:x}))}function QS(t){let{children:e,location:n}=t;return kS(Ed(e),n)}new Promise(()=>{});function Ed(t,e){e===void 0&&(e=[]);let n=[];return F.Children.forEach(t,(i,r)=>{if(!F.isValidElement(i))return;let s=[...e,r];if(i.type===F.Fragment){n.push.apply(n,Ed(i.props.children,s));return}i.type!==_a&&At(!1),!i.props.index||!i.props.children||At(!1);let a={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(a.children=Ed(i.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const JS="6";try{window.__reactRouterVersion=JS}catch{}const eM="startTransition",Bp=Q_[eM];function tM(t){let{basename:e,children:n,future:i,window:r}=t,s=F.useRef();s.current==null&&(s.current=uS({window:r,v5Compat:!0}));let a=s.current,[o,l]=F.useState({action:a.action,location:a.location}),{v7_startTransition:c}=i||{},d=F.useCallback(h=>{c&&Bp?Bp(()=>l(h)):l(h)},[l,c]);return F.useLayoutEffect(()=>a.listen(d),[a,d]),F.createElement(ZS,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a,future:i})}var Vp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Vp||(Vp={}));var Hp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hp||(Hp={}));var nM={},ig;const Pv=(ig=nM.VITE_API_BASE_URL)==null?void 0:ig.trim(),iM=`${window.location.origin}/api`,rM=(Pv||iM).replace(/\/+$/,"");Pv||console.warn("VITE_API_BASE_URL is not set. Falling back to same-origin /api. If frontend and backend are deployed as separate Render services, set VITE_API_BASE_URL.");function sM(t={}){const e=localStorage.getItem("ar_token");return e?{...t,Authorization:`Bearer ${e}`}:t}async function Kc(t,e={}){const n=await fetch(`${rM}${t}`,{...e,headers:sM(e.headers)}),i=await n.json().catch(()=>({}));if(!n.ok)throw{response:{status:n.status,data:i}};return{data:i}}const Zc={get(t){return Kc(t)},post(t,e){return Kc(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},delete(t){return Kc(t,{method:"DELETE"})}},Lv=F.createContext(null);function aM({children:t}){const[e,n]=F.useState(null),[i,r]=F.useState(!0),[s,a]=F.useState(null);F.useEffect(()=>{localStorage.getItem("ar_token")?Zc.get("/auth/me").then(f=>n(f.data)).catch(()=>{localStorage.removeItem("ar_token"),n(null)}).finally(()=>r(!1)):r(!1)},[]);const o=F.useCallback(async(h,f)=>{var m,_;a(null);try{const x=await Zc.post("/auth/login",{email:h,password:f});return localStorage.setItem("ar_token",x.data.token),n(x.data.user),{success:!0}}catch(x){const p=((_=(m=x.response)==null?void 0:m.data)==null?void 0:_.detail)||"Incorrect email or password.";return a(p),{success:!1,error:p}}},[]),l=F.useCallback(async(h,f,m)=>{var _,x;a(null);try{const p=await Zc.post("/auth/register",{name:h,email:f,password:m});return localStorage.setItem("ar_token",p.data.token),n(p.data.user),{success:!0}}catch(p){const u=((x=(_=p.response)==null?void 0:_.data)==null?void 0:x.detail)||"Registration failed. Please try again.";return a(u),{success:!1,error:u}}},[]),c=F.useCallback(()=>{localStorage.removeItem("ar_token"),n(null)},[]),d=F.useCallback(()=>a(null),[]);return S.jsx(Lv.Provider,{value:{user:e,loading:i,error:s,login:o,signup:l,logout:c,clearError:d},children:t})}const pc=()=>{const t=F.useContext(Lv);if(!t)throw new Error("useAuth must be used inside <AuthProvider>");return t};var kt=[];for(var Qc=0;Qc<256;++Qc)kt.push((Qc+256).toString(16).slice(1));function oM(t,e=0){return(kt[t[e+0]]+kt[t[e+1]]+kt[t[e+2]]+kt[t[e+3]]+"-"+kt[t[e+4]]+kt[t[e+5]]+"-"+kt[t[e+6]]+kt[t[e+7]]+"-"+kt[t[e+8]]+kt[t[e+9]]+"-"+kt[t[e+10]]+kt[t[e+11]]+kt[t[e+12]]+kt[t[e+13]]+kt[t[e+14]]+kt[t[e+15]]).toLowerCase()}var Ao,lM=new Uint8Array(16);function cM(){if(!Ao&&(Ao=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ao))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ao(lM)}var uM=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Gp={randomUUID:uM};function dM(t,e,n){if(Gp.randomUUID&&!t)return Gp.randomUUID();t=t||{};var i=t.random||(t.rng||cM)();return i[6]=i[6]&15|64,i[8]=i[8]&63|128,oM(i)}const Ls={wood:{hex:"#8B5E3C",label:"Oak Wood",three:9133628},walnut:{hex:"#4A2C0A",label:"Walnut",three:4860938},white:{hex:"#F5F0EB",label:"White",three:16117995},black:{hex:"#1A1A1A",label:"Matte Black",three:1710618},gray:{hex:"#6B7280",label:"Ash Gray",three:7041664},beige:{hex:"#D4B896",label:"Linen",three:13940886},navy:{hex:"#1E3A5F",label:"Navy Blue",three:1981023},sage:{hex:"#7A9E7E",label:"Sage Green",three:8035966}},fM=[{id:"all",label:"All",emoji:"🏠"},{id:"seating",label:"Seating",emoji:"🛋️"},{id:"tables",label:"Tables",emoji:"🪑"},{id:"storage",label:"Storage",emoji:"🗄️"},{id:"bedroom",label:"Bedroom",emoji:"🛏️"},{id:"work",label:"Work",emoji:"💼"}],Fr=[{id:"sofa_3seater",name:"3-Seater Sofa",category:"seating",emoji:"🛋️",description:"Classic 3-seat sofa with deep cushions and solid wooden legs.",colors:["wood","gray","navy","beige","black"],defaultColor:"gray",dimensions:{w:1.8,h:.85,d:.85},price:"₹45,000",popular:!0},{id:"loveseat",name:"Loveseat",category:"seating",emoji:"💑",description:"Compact 2-seater sofa, perfect for cozy corners.",colors:["wood","gray","beige","navy","sage"],defaultColor:"beige",dimensions:{w:1.3,h:.85,d:.82},price:"₹28,000",popular:!1},{id:"armchair",name:"Armchair",category:"seating",emoji:"🪑",description:"Elegant single-seat armchair with padded arms.",colors:["wood","gray","walnut","navy","black"],defaultColor:"walnut",dimensions:{w:.75,h:.9,d:.8},price:"₹15,000",popular:!1},{id:"coffee_table",name:"Coffee Table",category:"tables",emoji:"🧋",description:"Low profile rectangular table with shelf underneath.",colors:["wood","walnut","white","black"],defaultColor:"wood",dimensions:{w:1.1,h:.42,d:.55},price:"₹8,500",popular:!0},{id:"dining_table",name:"Dining Table",category:"tables",emoji:"🍽️",description:"6-person solid wood dining table with tapered legs.",colors:["wood","walnut","white","black"],defaultColor:"wood",dimensions:{w:1.8,h:.76,d:.9},price:"₹32,000",popular:!0},{id:"dining_chair",name:"Dining Chair",category:"seating",emoji:"🪑",description:"Modern dining chair with upholstered seat pad.",colors:["wood","walnut","white","black","gray"],defaultColor:"walnut",dimensions:{w:.45,h:.9,d:.48},price:"₹4,500",popular:!1},{id:"bed_queen",name:"Queen Bed",category:"bedroom",emoji:"🛏️",description:"Queen-size platform bed with upholstered headboard.",colors:["wood","walnut","gray","beige","black"],defaultColor:"walnut",dimensions:{w:1.6,h:.9,d:2.1},price:"₹55,000",popular:!0},{id:"wardrobe",name:"Wardrobe",category:"storage",emoji:"🚪",description:"3-door wardrobe with mirror panel and internal shelving.",colors:["wood","walnut","white","black"],defaultColor:"white",dimensions:{w:1.5,h:2,d:.55},price:"₹38,000",popular:!1},{id:"bookshelf",name:"Bookshelf",category:"storage",emoji:"📚",description:"5-tier open bookshelf, perfect for books and decor.",colors:["wood","walnut","white","black"],defaultColor:"wood",dimensions:{w:.8,h:1.8,d:.3},price:"₹12,000",popular:!1},{id:"office_desk",name:"Office Desk",category:"work",emoji:"💻",description:"Spacious L-shaped desk with cable management.",colors:["wood","walnut","white","black"],defaultColor:"white",dimensions:{w:1.4,h:.75,d:.7},price:"₹18,000",popular:!0},{id:"tv_stand",name:"TV Stand",category:"storage",emoji:"📺",description:"Modern low-profile media console with two door cabinets.",colors:["wood","walnut","white","black"],defaultColor:"walnut",dimensions:{w:1.5,h:.5,d:.4},price:"₹14,000",popular:!1},{id:"side_table",name:"Side Table",category:"tables",emoji:"🕯️",description:"Round bedside table with single drawer storage.",colors:["wood","walnut","white","black"],defaultColor:"wood",dimensions:{w:.45,h:.58,d:.45},price:"₹3,800",popular:!1}],Wp=t=>{var e;return((e=Ls[t])==null?void 0:e.three)||9133628},hM=t=>Fr.find(e=>e.id===t),Nv="ADD_OBJECT",Dv="REMOVE_OBJECT",Iv="SELECT_OBJECT",Uv="UPDATE_COLOR",Fv="UPDATE_TRANSFORM",Ov="RESET_SCENE",kv="SET_AR_MODE",zv="SET_ROOM_IMAGE",pM={objects:[],selectedId:null,isARMode:!1,roomImage:null};function mM(t,e){switch(e.type){case Nv:{const n=hM(e.furnitureId);if(!n)return t;const i={id:dM(),furnitureId:n.id,name:n.name,emoji:n.emoji,colorKey:n.defaultColor,colorHex:Wp(n.defaultColor),scale:1,rotationY:0,addedAt:Date.now()};return{...t,objects:[...t.objects,i],selectedId:i.id}}case Dv:return{...t,objects:t.objects.filter(n=>n.id!==e.id),selectedId:t.selectedId===e.id?null:t.selectedId};case Iv:return{...t,selectedId:e.id};case Uv:{const n=Wp(e.colorKey);return{...t,objects:t.objects.map(i=>i.id===e.id?{...i,colorKey:e.colorKey,colorHex:n}:i)}}case Fv:return{...t,objects:t.objects.map(n=>n.id===e.id?{...n,...e.transform}:n)};case Ov:return{...t,objects:[],selectedId:null};case kv:return{...t,isARMode:e.value};case zv:return{...t,roomImage:e.url};default:return t}}const Bv=F.createContext(null);function gM({children:t}){const[e,n]=F.useReducer(mM,pM),i=F.useCallback(f=>{n({type:Nv,furnitureId:f})},[]),r=F.useCallback(f=>{n({type:Dv,id:f})},[]),s=F.useCallback(f=>{n({type:Iv,id:f})},[]),a=F.useCallback((f,m)=>{n({type:Uv,id:f,colorKey:m})},[]),o=F.useCallback((f,m)=>{n({type:Fv,id:f,transform:m})},[]),l=F.useCallback(()=>{n({type:Ov})},[]),c=F.useCallback(f=>{n({type:kv,value:f})},[]),d=F.useCallback(f=>{n({type:zv,url:f})},[]),h=e.objects.find(f=>f.id===e.selectedId)||null;return S.jsx(Bv.Provider,{value:{objects:e.objects,selectedId:e.selectedId,selectedObject:h,isARMode:e.isARMode,roomImage:e.roomImage,addObject:i,removeObject:r,selectObject:s,updateColor:a,updateTransform:o,resetScene:l,setARMode:c,setRoomImage:d},children:t})}const Wr=()=>{const t=F.useContext(Bv);if(!t)throw new Error("useScene must be used within SceneProvider");return t};function jp({children:t}){const{user:e,loading:n}=pc();return n?S.jsx("div",{className:"min-h-screen bg-bg-primary flex items-center justify-center",children:S.jsxs("div",{className:"flex flex-col items-center gap-4",children:[S.jsx("div",{className:"text-4xl animate-float",children:"🛋️"}),S.jsx("div",{className:"w-8 h-8 border-2 border-border border-t-accent rounded-full animate-spin"}),S.jsx("p",{className:"text-text-muted text-sm",children:"Loading your space…"})]})}):e?t:S.jsx(Rv,{to:"/",replace:!0})}/**
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
 */const xM=F.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},l)=>F.createElement("svg",{ref:l,..._M,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Vv("lucide",r),...o},[...a.map(([c,d])=>F.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=(t,e)=>{const n=F.forwardRef(({className:i,...r},s)=>F.createElement(xM,{ref:s,iconNode:e,className:Vv(`lucide-${vM(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=Je("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=Je("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=Je("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=Je("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=Je("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=Je("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=Je("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=Je("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=Je("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=Je("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=Je("ImagePlus",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=Je("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=Je("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=Je("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=Je("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=Je("Maximize2",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=Je("Minimize2",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=Je("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=Je("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=Je("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=Je("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=Je("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=Je("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=Je("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=Je("ScanLine",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=Je("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=Je("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=Je("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=Je("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=Je("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.400.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=Je("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$p=["🛋️","🪑","🛏️","🗄️","💡","🪴","🖼️","🛁","🪞","📚"],HM=Array.from({length:18},(t,e)=>({emoji:$p[e%$p.length],x:`${5+Math.random()*90}%`,delay:`${Math.random()*6}s`,dur:`${6+Math.random()*6}s`,size:`${1.4+Math.random()*1.4}rem`,top:`${Math.random()*100}%`}));function GM(){return S.jsxs("div",{className:"absolute inset-0 overflow-hidden pointer-events-none",children:[S.jsx("div",{className:"absolute w-[600px] h-[600px] rounded-full opacity-[0.07] blur-3xl",style:{background:"radial-gradient(circle, #D4A574, transparent)",top:"-20%",left:"-10%"}}),S.jsx("div",{className:"absolute w-[500px] h-[500px] rounded-full opacity-[0.05] blur-3xl",style:{background:"radial-gradient(circle, #E8C49A, transparent)",bottom:"-15%",right:"-5%"}}),HM.map((t,e)=>S.jsx("div",{className:"absolute",style:{left:t.x,top:t.top,fontSize:t.size,opacity:.07,animation:`float ${t.dur} ${t.delay} ease-in-out infinite`,filter:"grayscale(0.3)"},children:t.emoji},e)),S.jsx("div",{className:"absolute inset-0",style:{backgroundImage:`
            linear-gradient(rgba(212,165,116,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,165,116,0.03) 1px, transparent 1px)
          `,backgroundSize:"60px 60px"}})]})}function Co({icon:t,type:e,placeholder:n,value:i,onChange:r,rightSlot:s}){return S.jsxs("div",{className:"relative",children:[S.jsx(t,{size:16,className:"absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted"}),S.jsx("input",{type:e,placeholder:n,value:i,onChange:r,className:"input-field pl-10 pr-10",autoComplete:"off"}),s&&S.jsx("div",{className:"absolute right-3.5 top-1/2 -translate-y-1/2",children:s})]})}function WM(){const[t,e]=F.useState("login"),[n,i]=F.useState(""),[r,s]=F.useState(""),[a,o]=F.useState(""),[l,c]=F.useState(""),[d,h]=F.useState(!1),[f,m]=F.useState(!1),[_,x]=F.useState(""),[p,u]=F.useState(!1),{login:g,signup:v,error:M,clearError:N,user:R}=pc(),C=hc();F.useEffect(()=>{R&&C("/tutorial")},[R,C]);const L=H=>{u(!0),setTimeout(()=>{e(H),x(""),N(),u(!1)},200)},A=()=>t==="signup"&&!n.trim()?"Please enter your name.":r.includes("@")?a.length<6?"Password must be at least 6 characters.":t==="signup"&&a!==l?"Passwords do not match.":"":"Please enter a valid email address.",y=async H=>{H.preventDefault(),x(""),N();const X=A();if(X){x(X);return}m(!0);const J=t==="login"?await g(r,a):await v(n,r,a);m(!1),J.success&&C("/tutorial")},I=_||M;return S.jsxs("div",{className:"min-h-screen bg-bg-primary flex relative overflow-hidden",children:[S.jsx(GM,{}),S.jsxs("div",{className:"hidden md:flex flex-col justify-between w-1/2 p-12 relative z-10",children:[S.jsxs("div",{className:"flex items-center gap-3",children:[S.jsx("span",{className:"text-3xl",children:"🛋️"}),S.jsxs("div",{children:[S.jsx("h1",{className:"font-display text-xl text-text-primary",children:"AR Furniture"}),S.jsx("p",{className:"text-text-muted text-xs",children:"Visualizer"})]})]}),S.jsxs("div",{className:"space-y-8",children:[S.jsxs("div",{children:[S.jsxs("h2",{className:"font-display text-4xl text-text-primary leading-tight mb-4",children:["See your furniture",S.jsx("br",{}),S.jsx("span",{className:"text-accent italic",children:"before you buy."})]}),S.jsx("p",{className:"text-text-secondary text-lg max-w-md leading-relaxed",children:"Place 3D furniture in your actual room using your phone camera or upload a room photo. No guessing. No returns."})]}),S.jsx("div",{className:"space-y-4",children:[{icon:"📱",title:"Live AR Camera",desc:"Point & place on any flat surface"},{icon:"🖼️",title:"Photo Mode",desc:"Upload a room photo on desktop"},{icon:"🛋️",title:"12+ Furniture",desc:"Sofas, beds, tables, storage & more"},{icon:"🎨",title:"Color Variants",desc:"8 finishes: wood, black, white, sage…"}].map(H=>S.jsxs("div",{className:"flex items-start gap-3",children:[S.jsx("span",{className:"text-xl mt-0.5",children:H.icon}),S.jsxs("div",{children:[S.jsx("p",{className:"text-text-primary font-semibold text-sm",children:H.title}),S.jsx("p",{className:"text-text-muted text-xs",children:H.desc})]})]},H.title))})]}),S.jsx("p",{className:"text-text-muted text-xs",children:"© 2025 AR Furniture Visualizer · Built with React + Three.js + WebXR"})]}),S.jsx("div",{className:"flex-1 flex items-center justify-center p-6 relative z-10",children:S.jsxs("div",{className:"glass-card w-full max-w-md p-8 shadow-card",style:{opacity:p?0:1,transform:p?"translateY(8px)":"translateY(0)",transition:"all 0.2s ease"},children:[S.jsxs("div",{className:"md:hidden flex items-center gap-2 mb-6",children:[S.jsx("span",{className:"text-2xl",children:"🛋️"}),S.jsx("span",{className:"font-display text-lg text-text-primary",children:"AR Furniture Visualizer"})]}),S.jsxs("div",{className:"mb-8",children:[S.jsx("h2",{className:"font-display text-2xl text-text-primary mb-1",children:t==="login"?"Welcome back":"Create account"}),S.jsx("p",{className:"text-text-secondary text-sm",children:t==="login"?"Sign in to continue your AR experience":"Start visualizing furniture in your space"})]}),S.jsxs("form",{onSubmit:y,className:"space-y-4",children:[t==="signup"&&S.jsx(Co,{icon:Hv,type:"text",placeholder:"Full name",value:n,onChange:H=>i(H.target.value)}),S.jsx(Co,{icon:NM,type:"email",placeholder:"Email address",value:r,onChange:H=>s(H.target.value)}),S.jsx(Co,{icon:Xp,type:d?"text":"password",placeholder:"Password",value:a,onChange:H=>o(H.target.value),rightSlot:S.jsx("button",{type:"button",onClick:()=>h(H=>!H),className:"text-text-muted hover:text-text-secondary transition-colors",children:d?S.jsx(CM,{size:15}):S.jsx(bM,{size:15})})}),t==="signup"&&S.jsx(Co,{icon:Xp,type:d?"text":"password",placeholder:"Confirm password",value:l,onChange:H=>c(H.target.value)}),I&&S.jsxs("div",{className:"flex items-start gap-2 bg-error/10 border border-error/20 rounded-xl px-4 py-3",children:[S.jsx(wM,{size:15,className:"text-error flex-shrink-0 mt-0.5"}),S.jsx("p",{className:"text-error text-sm",children:I})]}),S.jsx("button",{type:"submit",disabled:f,className:"btn-primary w-full flex items-center justify-center gap-2 mt-2",children:f?S.jsx("div",{className:"w-5 h-5 border-2 border-bg-primary/40 border-t-bg-primary rounded-full animate-spin"}):S.jsxs(S.Fragment,{children:[t==="login"?"Sign In":"Create Account",S.jsx(wd,{size:16})]})})]}),S.jsxs("div",{className:"flex items-center gap-3 my-6",children:[S.jsx("div",{className:"flex-1 h-px bg-border"}),S.jsx("span",{className:"text-text-muted text-xs",children:"or"}),S.jsx("div",{className:"flex-1 h-px bg-border"})]}),S.jsx("button",{onClick:()=>{s("demo@arfurniture.com"),o("demo123")},className:"btn-secondary w-full text-sm mb-4",children:"🎯 Use Demo Account"}),S.jsxs("p",{className:"text-center text-text-muted text-sm",children:[t==="login"?"Don't have an account?":"Already have an account?"," ",S.jsx("button",{onClick:()=>L(t==="login"?"signup":"login"),className:"text-accent hover:text-accent-light font-semibold transition-colors",children:t==="login"?"Sign up free":"Sign in"})]})]})})]})}const aa=[{emoji:"🔐",step:"01",title:"Sign In & Get Started",subtitle:"Your personal AR session",desc:"Create your account to save your room layouts, furniture preferences, and AR sessions across devices.",tips:["Your data is private and secure","Works on mobile and desktop","Sync sessions across devices"],color:"from-amber-900/30 to-amber-800/10"},{emoji:"📷",step:"02",title:"Set Up Your Room",subtitle:"Desktop or Mobile camera",desc:"On desktop, upload a photo of your room. On mobile, point your camera at the floor and let AR detect the surface automatically.",tips:["Good lighting helps surface detection","Point camera at a flat floor","Upload JPG/PNG for desktop mode"],color:"from-blue-900/30 to-blue-800/10"},{emoji:"🛋️",step:"03",title:"Browse the Catalog",subtitle:"12+ furniture pieces",desc:"Choose from sofas, tables, beds, wardrobes, desks and more in the left sidebar. Filter by category or search by name.",tips:['Tap "Add to Scene" to queue it',"Multiple items can be added","See real dimensions & price"],color:"from-emerald-900/30 to-emerald-800/10"},{emoji:"🪄",step:"04",title:"Place & Interact",subtitle:"Move · Rotate · Scale",desc:"On mobile, tap any flat surface to place furniture. On desktop, drag it anywhere. Use the panel controls to rotate and resize.",tips:["Drag to reposition","Scroll wheel or pinch to scale","Press R or use buttons to rotate"],color:"from-purple-900/30 to-purple-800/10"},{emoji:"🎨",step:"05",title:"Change Colors",subtitle:"8 material finishes",desc:"Select any placed furniture and switch between Oak Wood, Walnut, White, Matte Black, Gray, Linen, Navy Blue, and Sage Green.",tips:["Click a color swatch to apply","Each item has unique color options","Mix & match for your style"],color:"from-rose-900/30 to-rose-800/10"},{emoji:"✅",step:"06",title:"Design Your Dream Room",subtitle:"Multi-object AR scene",desc:"Add as many furniture pieces as you need. Build the entire room layout virtually before making any purchase decision.",tips:["No purchase needed to try","Reset and start over anytime","Screenshot the final look"],color:"from-accent/20 to-accent/5"}];function jM(){var a;const[t,e]=F.useState(0),n=hc(),{user:i}=pc(),r=aa[t],s=t===aa.length-1;return S.jsxs("div",{className:"min-h-screen bg-bg-primary flex flex-col relative overflow-hidden",children:[S.jsx("div",{className:"absolute inset-0 pointer-events-none",style:{background:"radial-gradient(ellipse at 50% -10%, rgba(212,165,116,0.08) 0%, transparent 60%)",backgroundImage:`
            linear-gradient(rgba(212,165,116,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,165,116,0.02) 1px, transparent 1px)
          `,backgroundSize:"80px 80px"}}),S.jsxs("header",{className:"relative z-10 flex items-center justify-between px-6 py-4 border-b border-border bg-bg-secondary/60 backdrop-blur-sm",children:[S.jsxs("div",{className:"flex items-center gap-2.5",children:[S.jsx("span",{className:"text-2xl",children:"🛋️"}),S.jsxs("div",{children:[S.jsx("h1",{className:"font-display text-base text-text-primary leading-none",children:"AR Furniture Visualizer"}),S.jsx("p",{className:"text-text-muted text-[10px]",children:"Quick Start Guide"})]})]}),S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsxs("span",{className:"text-text-muted text-sm",children:["Hello, ",((a=i==null?void 0:i.name)==null?void 0:a.split(" ")[0])||"there"," 👋"]}),S.jsx("button",{onClick:()=>n("/app"),className:"text-text-muted hover:text-text-secondary text-xs underline underline-offset-2 transition-colors",children:"Skip tutorial"})]})]}),S.jsx("main",{className:"flex-1 flex items-center justify-center p-6 relative z-10",children:S.jsxs("div",{className:"w-full max-w-4xl",children:[S.jsx("div",{className:"flex items-center justify-center gap-2 mb-8",children:aa.map((o,l)=>S.jsx("button",{onClick:()=>e(l),className:`transition-all duration-300 rounded-full ${l===t?"w-8 h-2.5 bg-accent":l<t?"w-2.5 h-2.5 bg-accent/40":"w-2.5 h-2.5 bg-border"}`},l))}),S.jsx("div",{className:"glass-card overflow-hidden shadow-card",style:{animation:"slideUp 0.35s ease forwards"},children:S.jsxs("div",{className:"md:flex",children:[S.jsxs("div",{className:`md:w-5/12 bg-gradient-to-br ${r.color} flex flex-col items-center justify-center p-12`,children:[S.jsx("div",{className:"text-8xl mb-4",style:{animation:"float 3s ease-in-out infinite"},children:r.emoji}),S.jsxs("span",{className:"text-text-muted text-sm font-mono",children:["STEP ",r.step]}),S.jsx("div",{className:"mt-6 space-y-2 w-full max-w-xs",children:r.tips.map((o,l)=>S.jsxs("div",{className:"flex items-center gap-2",style:{animation:`slideUp 0.3s ${l*.08}s ease forwards`,opacity:0},children:[S.jsx(TM,{size:13,className:"text-accent flex-shrink-0"}),S.jsx("span",{className:"text-text-secondary text-xs",children:o})]},l))})]}),S.jsxs("div",{className:"md:w-7/12 p-8 md:p-12 flex flex-col justify-center",children:[S.jsx("p",{className:"text-accent text-xs font-semibold tracking-widest uppercase mb-2",children:r.subtitle}),S.jsx("h2",{className:"font-display text-3xl md:text-4xl text-text-primary mb-4 leading-tight",children:r.title}),S.jsx("p",{className:"text-text-secondary text-base leading-relaxed mb-8",children:r.desc}),S.jsxs("div",{className:"flex items-center gap-3",children:[t>0&&S.jsxs("button",{onClick:()=>e(o=>o-1),className:"btn-secondary flex items-center gap-2",children:[S.jsx(yM,{size:16}),"Back"]}),s?S.jsxs("button",{onClick:()=>n("/app"),className:"btn-primary flex items-center gap-2 text-base px-8 py-3",children:["Start AR Experience",S.jsx(wd,{size:18})]}):S.jsxs("button",{onClick:()=>e(o=>o+1),className:"btn-primary flex items-center gap-2",children:["Next",S.jsx(wd,{size:16})]}),S.jsxs("span",{className:"text-text-muted text-xs ml-auto",children:[t+1," / ",aa.length]})]})]})]})},t),S.jsx("div",{className:"mt-6 grid grid-cols-3 md:grid-cols-6 gap-2",children:aa.map((o,l)=>S.jsxs("button",{onClick:()=>e(l),className:`p-3 rounded-xl border text-center transition-all duration-200 ${l===t?"border-accent bg-accent/5":"border-border bg-bg-card hover:border-accent/30"}`,children:[S.jsx("div",{className:"text-xl mb-0.5",children:o.emoji}),S.jsx("p",{className:`text-[10px] font-medium ${l===t?"text-accent":"text-text-muted"}`,children:o.step})]},l))})]})})]})}function XM({item:t}){const n={seating:"from-amber-900/40 to-amber-800/20",tables:"from-stone-800/40 to-stone-700/20",storage:"from-slate-800/40 to-slate-700/20",bedroom:"from-indigo-900/40 to-indigo-800/20",work:"from-emerald-900/40 to-emerald-800/20"}[t.category]||"from-gray-800/40 to-gray-700/20";return S.jsxs("div",{className:`h-28 bg-gradient-to-br ${n} flex items-center justify-center relative overflow-hidden`,children:[S.jsx("div",{className:"absolute inset-0 opacity-10",style:{backgroundImage:"radial-gradient(circle at 50% 50%, rgba(212,165,116,0.3) 0%, transparent 70%)"}}),S.jsx("span",{className:"text-5xl filter drop-shadow-lg",role:"img","aria-label":t.name,children:t.emoji}),t.popular&&S.jsx("span",{className:"absolute top-2 right-2 badge badge-accent text-[10px]",children:"Popular"})]})}function YM({item:t}){const[e,n]=F.useState(!1),{addObject:i,objects:r,selectObject:s}=Wr(),a=r.filter(l=>l.furnitureId===t.id).length,o=()=>{i(t.id),n(!0),setTimeout(()=>n(!1),1500)};return S.jsxs("div",{className:"furniture-card group",children:[S.jsx(XM,{item:t}),S.jsxs("div",{className:"p-3",children:[S.jsxs("div",{className:"flex items-start justify-between gap-1 mb-1",children:[S.jsx("h3",{className:"text-text-primary font-semibold text-sm leading-tight line-clamp-1",children:t.name}),S.jsx("span",{className:"text-accent text-xs font-medium whitespace-nowrap flex-shrink-0",children:t.price})]}),S.jsx("p",{className:"text-text-muted text-xs line-clamp-2 mb-3 leading-relaxed",children:t.description}),S.jsxs("div",{className:"flex items-center gap-1 mb-3",children:[t.colors.slice(0,5).map(l=>{var c,d;return S.jsx("div",{title:(c=Ls[l])==null?void 0:c.label,className:"w-3.5 h-3.5 rounded-full border border-white/10 flex-shrink-0",style:{backgroundColor:(d=Ls[l])==null?void 0:d.hex}},l)}),t.colors.length>5&&S.jsxs("span",{className:"text-text-muted text-[10px]",children:["+",t.colors.length-5]})]}),a>0&&S.jsx("div",{className:"flex items-center gap-1 mb-2",children:S.jsxs("span",{className:"badge badge-success text-[10px]",children:["✓ ",a," in scene"]})}),S.jsx("button",{onClick:o,className:`w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${e?"bg-success/20 text-success border border-success/30":"bg-accent/10 hover:bg-accent text-accent hover:text-bg-primary border border-accent/30 hover:border-accent"}`,children:e?S.jsxs(S.Fragment,{children:[S.jsx(MM,{size:14})," Added!"]}):S.jsxs(S.Fragment,{children:[S.jsx(Bl,{size:14})," Add to Scene"]})})]})]})}function qp(){const[t,e]=F.useState("all"),[n,i]=F.useState(""),r=F.useMemo(()=>Fr.filter(s=>{const a=t==="all"||s.category===t,o=s.name.toLowerCase().includes(n.toLowerCase())||s.description.toLowerCase().includes(n.toLowerCase());return a&&o}),[t,n]);return S.jsxs("aside",{className:"w-full lg:w-64 flex-shrink-0 flex flex-col h-auto lg:h-full bg-bg-secondary lg:border-r border-border min-w-0",children:[S.jsxs("div",{className:"px-4 pt-4 pb-3 border-b border-border",children:[S.jsxs("div",{className:"flex items-center justify-between mb-3",children:[S.jsx("h2",{className:"font-display text-lg text-text-primary",children:"Catalog"}),S.jsxs("span",{className:"badge badge-accent",children:[Fr.length," items"]})]}),S.jsxs("div",{className:"relative",children:[S.jsx(kM,{size:14,className:"absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"}),S.jsx("input",{type:"text",placeholder:"Search furniture…",value:n,onChange:s=>i(s.target.value),className:"input-field text-sm pl-9 py-2"})]})]}),S.jsx("div",{className:"px-3 py-2 border-b border-border flex gap-1 overflow-x-auto custom-scroll",children:fM.map(s=>S.jsxs("button",{onClick:()=>e(s.id),className:`flex-shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${t===s.id?"bg-accent text-bg-primary":"text-text-secondary hover:text-text-primary hover:bg-bg-elevated"}`,children:[S.jsx("span",{children:s.emoji}),S.jsx("span",{children:s.label})]},s.id))}),S.jsx("div",{className:"p-3 lg:flex-1 lg:overflow-y-auto custom-scroll",children:r.length===0?S.jsxs("div",{className:"text-center py-12",children:[S.jsx("div",{className:"text-3xl mb-2",children:"🔍"}),S.jsx("p",{className:"text-text-muted text-sm",children:"No furniture found"})]}):S.jsx("div",{className:"grid grid-cols-1 gap-3",children:r.map(s=>S.jsx(YM,{item:s},s.id))})})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="167",$M=0,Kp=1,qM=2,Gv=1,Wv=2,hi=3,ir=0,fn=1,ni=2,Qi=0,Ns=1,Zp=2,Qp=3,Jp=4,KM=5,Sr=100,ZM=101,QM=102,JM=103,eE=104,tE=200,nE=201,iE=202,rE=203,Rd=204,Pd=205,sE=206,aE=207,oE=208,lE=209,cE=210,uE=211,dE=212,fE=213,hE=214,pE=0,mE=1,gE=2,Vl=3,vE=4,_E=5,xE=6,yE=7,jv=0,SE=1,ME=2,Ji=0,EE=1,wE=2,TE=3,AE=4,CE=5,bE=6,RE=7,Xv=300,Hs=301,Gs=302,Ld=303,Nd=304,mc=306,Dd=1e3,Ar=1001,Id=1002,Dn=1003,PE=1004,bo=1005,Xn=1006,Jc=1007,Cr=1008,Ti=1009,Yv=1010,$v=1011,Ka=1012,ch=1013,Or=1014,_i=1015,ro=1016,uh=1017,dh=1018,Ws=1020,qv=35902,Kv=1021,Zv=1022,Yn=1023,Qv=1024,Jv=1025,Ds=1026,js=1027,e_=1028,fh=1029,t_=1030,hh=1031,ph=1033,ul=33776,dl=33777,fl=33778,hl=33779,Ud=35840,Fd=35841,Od=35842,kd=35843,zd=36196,Bd=37492,Vd=37496,Hd=37808,Gd=37809,Wd=37810,jd=37811,Xd=37812,Yd=37813,$d=37814,qd=37815,Kd=37816,Zd=37817,Qd=37818,Jd=37819,ef=37820,tf=37821,pl=36492,nf=36494,rf=36495,n_=36283,sf=36284,af=36285,of=36286,LE=3200,NE=3201,i_=0,DE=1,Bi="",Rn="srgb",lr="srgb-linear",mh="display-p3",gc="display-p3-linear",Hl="linear",dt="srgb",Gl="rec709",Wl="p3",qr=7680,em=519,IE=512,UE=513,FE=514,r_=515,OE=516,kE=517,zE=518,BE=519,tm=35044,nm="300 es",xi=2e3,jl=2001;class Ks{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=Math.PI/180,lf=180/Math.PI;function so(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function an(t,e,n){return Math.max(e,Math.min(n,t))}function VE(t,e){return(t%e+e)%e}function tu(t,e,n){return(1-n)*t+n*e}function oa(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,n=0){je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],x=r[0],p=r[3],u=r[6],g=r[1],v=r[4],M=r[7],N=r[2],R=r[5],C=r[8];return s[0]=a*x+o*g+l*N,s[3]=a*p+o*v+l*R,s[6]=a*u+o*M+l*C,s[1]=c*x+d*g+h*N,s[4]=c*p+d*v+h*R,s[7]=c*u+d*M+h*C,s[2]=f*x+m*g+_*N,s[5]=f*p+m*v+_*R,s[8]=f*u+m*M+_*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*s,m=c*s-a*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*c-d*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(d*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=m*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(nu.makeScale(e,n)),this}rotate(e){return this.premultiply(nu.makeRotation(-e)),this}translate(e,n){return this.premultiply(nu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nu=new Ge;function s_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Xl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function HE(){const t=Xl("canvas");return t.style.display="block",t}const im={};function Ra(t){t in im||(im[t]=!0,console.warn(t))}function GE(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const rm=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sm=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),la={[lr]:{transfer:Hl,primaries:Gl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Rn]:{transfer:dt,primaries:Gl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[gc]:{transfer:Hl,primaries:Wl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(sm),fromReference:t=>t.applyMatrix3(rm)},[mh]:{transfer:dt,primaries:Wl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(sm),fromReference:t=>t.applyMatrix3(rm).convertLinearToSRGB()}},WE=new Set([lr,gc]),it={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!WE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=la[e].toReference,r=la[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return la[t].primaries},getTransfer:function(t){return t===Bi?Hl:la[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(la[e].luminanceCoefficients)}};function Is(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function iu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Kr;class jE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Kr===void 0&&(Kr=Xl("canvas")),Kr.width=e.width,Kr.height=e.height;const i=Kr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Kr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Xl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Is(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Is(n[i]/255)*255):n[i]=Is(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let XE=0;class a_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=so(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ru(r[a].image)):s.push(ru(r[a]))}else s=ru(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ru(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?jE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YE=0;class hn extends Ks{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Ar,r=Ar,s=Xn,a=Cr,o=Yn,l=Ti,c=hn.DEFAULT_ANISOTROPY,d=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=so(),this.name="",this.source=new a_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dd:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case Id:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dd:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case Id:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Xv;hn.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,n=0,i=0,r=1){bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,M=(m+1)/2,N=(u+1)/2,R=(d+f)/4,C=(h+x)/4,L=(_+p)/4;return v>M&&v>N?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=R/i,s=C/i):M>N?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=R/r,s=L/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=C/s,r=L/s),this.set(i,r,s,n),this}let g=Math.sqrt((p-_)*(p-_)+(h-x)*(h-x)+(f-d)*(f-d));return Math.abs(g)<.001&&(g=1),this.x=(p-_)/g,this.y=(h-x)/g,this.z=(f-d)/g,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $E extends Ks{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new bt(0,0,e,n),this.scissorTest=!1,this.viewport=new bt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new hn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new a_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends $E{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class o_ extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class qE extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=x;return}if(h!==x||l!==f||c!==m||d!==_){let p=1-o;const u=l*f+c*m+d*_+h*x,g=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){const N=Math.sqrt(v),R=Math.atan2(N,u*g);p=Math.sin(p*R)/N,o=Math.sin(o*R)/N}const M=o*g;if(l=l*p+f*M,c=c*p+m*M,d=d*p+_*M,h=h*p+x*M,p===1-o){const N=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=N,c*=N,d*=N,h*=N}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*h+l*m-c*f,e[n+1]=l*_+d*f+c*h-o*m,e[n+2]=c*_+d*m+o*f-l*h,e[n+3]=d*_-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(an(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(am.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(am.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return su.copy(this).projectOnVector(e),this.sub(su)}reflect(e){return this.sub(su.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(an(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const su=new G,am=new zr;class er{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(s,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),Po.subVectors(this.max,ca),Zr.subVectors(e.a,ca),Qr.subVectors(e.b,ca),Jr.subVectors(e.c,ca),Pi.subVectors(Qr,Zr),Li.subVectors(Jr,Qr),dr.subVectors(Zr,Jr);let n=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-dr.z,dr.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,dr.z,0,-dr.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-dr.y,dr.x,0];return!au(n,Zr,Qr,Jr,Po)||(n=[1,0,0,0,1,0,0,0,1],!au(n,Zr,Qr,Jr,Po))?!1:(Lo.crossVectors(Pi,Li),n=[Lo.x,Lo.y,Lo.z],au(n,Zr,Qr,Jr,Po))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new G,new G,new G,new G,new G,new G,new G,new G],Bn=new G,Ro=new er,Zr=new G,Qr=new G,Jr=new G,Pi=new G,Li=new G,dr=new G,ca=new G,Po=new G,Lo=new G,fr=new G;function au(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){fr.fromArray(t,s);const o=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),c=n.dot(fr),d=i.dot(fr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const KE=new er,ua=new G,ou=new G;class vc{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):KE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const n=ua.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ua,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(ou)),this.expandByPoint(ua.copy(e.center).sub(ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const li=new G,lu=new G,No=new G,Ni=new G,cu=new G,Do=new G,uu=new G;class gh{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=li.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,n),li.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){lu.copy(e).add(n).multiplyScalar(.5),No.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(lu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(No),o=Ni.dot(this.direction),l=-Ni.dot(No),c=Ni.lengthSq(),d=Math.abs(1-a*a);let h,f,m,_;if(d>0)if(h=a*l-o,f=a*o-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const x=1/d;h*=x,f*=x,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(lu).addScaledVector(No,f),m}intersectSphere(e,n){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,n,i,r,s){cu.subVectors(n,e),Do.subVectors(i,e),uu.crossVectors(cu,Do);let a=this.direction.dot(uu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ni.subVectors(this.origin,e);const l=o*this.direction.dot(Do.crossVectors(Ni,Do));if(l<0)return null;const c=o*this.direction.dot(cu.cross(Ni));if(c<0||l+c>a)return null;const d=-o*Ni.dot(uu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pt{constructor(e,n,i,r,s,a,o,l,c,d,h,f,m,_,x,p){pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,f,m,_,x,p)}set(e,n,i,r,s,a,o,l,c,d,h,f,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/es.setFromMatrixColumn(e,0).length(),s=1/es.setFromMatrixColumn(e,1).length(),a=1/es.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*h,_=o*d,x=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=f-x*c,n[9]=-o*l,n[2]=x-f*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=c*d,x=c*h;n[0]=f+x*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=x+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=c*d,x=c*h;n[0]=f-x*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=x-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*h,_=o*d,x=o*h;n[0]=l*d,n[4]=_*c-m,n[8]=f*c+x,n[1]=l*h,n[5]=x*c+f,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,x=o*c;n[0]=l*d,n[4]=x-f*h,n[8]=_*h+m,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*h+_,n[10]=f-x*h}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,x=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+x,n[5]=a*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*d,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ZE,e,QE)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Di.crossVectors(i,_n),Di.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Di.crossVectors(i,_n)),Di.normalize(),Io.crossVectors(_n,Di),r[0]=Di.x,r[4]=Io.x,r[8]=_n.x,r[1]=Di.y,r[5]=Io.y,r[9]=_n.y,r[2]=Di.z,r[6]=Io.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],x=i[6],p=i[10],u=i[14],g=i[3],v=i[7],M=i[11],N=i[15],R=r[0],C=r[4],L=r[8],A=r[12],y=r[1],I=r[5],H=r[9],X=r[13],J=r[2],te=r[6],Q=r[10],z=r[14],b=r[3],Y=r[7],W=r[11],ee=r[15];return s[0]=a*R+o*y+l*J+c*b,s[4]=a*C+o*I+l*te+c*Y,s[8]=a*L+o*H+l*Q+c*W,s[12]=a*A+o*X+l*z+c*ee,s[1]=d*R+h*y+f*J+m*b,s[5]=d*C+h*I+f*te+m*Y,s[9]=d*L+h*H+f*Q+m*W,s[13]=d*A+h*X+f*z+m*ee,s[2]=_*R+x*y+p*J+u*b,s[6]=_*C+x*I+p*te+u*Y,s[10]=_*L+x*H+p*Q+u*W,s[14]=_*A+x*X+p*z+u*ee,s[3]=g*R+v*y+M*J+N*b,s[7]=g*C+v*I+M*te+N*Y,s[11]=g*L+v*H+M*Q+N*W,s[15]=g*A+v*X+M*z+N*ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*m-i*l*m)+x*(+n*l*m-n*c*f+s*a*f-r*a*m+r*c*d-s*l*d)+p*(+n*c*h-n*o*m-s*a*h+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*h+n*o*f+r*a*h-i*a*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],g=h*p*c-x*f*c+x*l*m-o*p*m-h*l*u+o*f*u,v=_*f*c-d*p*c-_*l*m+a*p*m+d*l*u-a*f*u,M=d*x*c-_*h*c+_*o*m-a*x*m-d*o*u+a*h*u,N=_*h*l-d*x*l-_*o*f+a*x*f+d*o*p-a*h*p,R=n*g+i*v+r*M+s*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=g*C,e[1]=(x*f*s-h*p*s-x*r*m+i*p*m+h*r*u-i*f*u)*C,e[2]=(o*p*s-x*l*s+x*r*c-i*p*c-o*r*u+i*l*u)*C,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*m-i*l*m)*C,e[4]=v*C,e[5]=(d*p*s-_*f*s+_*r*m-n*p*m-d*r*u+n*f*u)*C,e[6]=(_*l*s-a*p*s-_*r*c+n*p*c+a*r*u-n*l*u)*C,e[7]=(a*f*s-d*l*s+d*r*c-n*f*c-a*r*m+n*l*m)*C,e[8]=M*C,e[9]=(_*h*s-d*x*s-_*i*m+n*x*m+d*i*u-n*h*u)*C,e[10]=(a*x*s-_*o*s+_*i*c-n*x*c-a*i*u+n*o*u)*C,e[11]=(d*o*s-a*h*s-d*i*c+n*h*c+a*i*m-n*o*m)*C,e[12]=N*C,e[13]=(d*x*r-_*h*r+_*i*f-n*x*f-d*i*p+n*h*p)*C,e[14]=(_*o*r-a*x*r-_*i*l+n*x*l+a*i*p-n*o*p)*C,e[15]=(a*h*r-d*o*r+d*i*l-n*h*l-a*i*f+n*o*f)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,f=s*c,m=s*d,_=s*h,x=a*d,p=a*h,u=o*h,g=l*c,v=l*d,M=l*h,N=i.x,R=i.y,C=i.z;return r[0]=(1-(x+u))*N,r[1]=(m+M)*N,r[2]=(_-v)*N,r[3]=0,r[4]=(m-M)*R,r[5]=(1-(f+u))*R,r[6]=(p+g)*R,r[7]=0,r[8]=(_+v)*C,r[9]=(p-g)*C,r[10]=(1-(f+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=es.set(r[0],r[1],r[2]).length();const a=es.set(r[4],r[5],r[6]).length(),o=es.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vn.copy(this);const c=1/s,d=1/a,h=1/o;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=d,Vn.elements[5]*=d,Vn.elements[6]*=d,Vn.elements[8]*=h,Vn.elements[9]*=h,Vn.elements[10]*=h,n.setFromRotationMatrix(Vn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=xi){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(o===xi)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===jl)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=xi){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(a-s),f=(n+e)*c,m=(i+r)*d;let _,x;if(o===xi)_=(a+s)*h,x=-2*h;else if(o===jl)_=s*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const es=new G,Vn=new pt,ZE=new G(0,0,0),QE=new G(1,1,1),Di=new G,Io=new G,_n=new G,om=new pt,lm=new zr;class On{constructor(e=0,n=0,i=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(an(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-an(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(an(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-an(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(an(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-an(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(om,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return lm.setFromEuler(this),this.setFromQuaternion(lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class vh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JE=0;const cm=new G,ts=new zr,ci=new pt,Uo=new G,da=new G,e1=new G,t1=new zr,um=new G(1,0,0),dm=new G(0,1,0),fm=new G(0,0,1),hm={type:"added"},n1={type:"removed"},ns={type:"childadded",child:null},du={type:"childremoved",child:null};class Ht extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=so(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new G,n=new On,i=new zr,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ge}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.multiply(ts),this}rotateOnWorldAxis(e,n){return ts.setFromAxisAngle(e,n),this.quaternion.premultiply(ts),this}rotateX(e){return this.rotateOnAxis(um,e)}rotateY(e){return this.rotateOnAxis(dm,e)}rotateZ(e){return this.rotateOnAxis(fm,e)}translateOnAxis(e,n){return cm.copy(e).applyQuaternion(this.quaternion),this.position.add(cm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(um,e)}translateY(e){return this.translateOnAxis(dm,e)}translateZ(e){return this.translateOnAxis(fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Uo.copy(e):Uo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),da.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(da,Uo,this.up):ci.lookAt(Uo,da,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),ts.setFromRotationMatrix(ci),this.quaternion.premultiply(ts.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hm),ns.child=e,this.dispatchEvent(ns),ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(n1),du.child=e,this.dispatchEvent(du),du.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hm),ns.child=e,this.dispatchEvent(ns),ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,e,e1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(da,t1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new G(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new G,ui=new G,fu=new G,di=new G,is=new G,rs=new G,pm=new G,hu=new G,pu=new G,mu=new G;class ii{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),ui.subVectors(i,n),fu.subVectors(e,n);const a=Hn.dot(Hn),o=Hn.dot(ui),l=Hn.dot(fu),c=ui.dot(ui),d=ui.dot(fu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,_=(a*d-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),ui.subVectors(e,n),Hn.cross(ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Hn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;is.subVectors(r,i),rs.subVectors(s,i),hu.subVectors(e,i);const l=is.dot(hu),c=rs.dot(hu);if(l<=0&&c<=0)return n.copy(i);pu.subVectors(e,r);const d=is.dot(pu),h=rs.dot(pu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(is,a);mu.subVectors(e,s);const m=is.dot(mu),_=rs.dot(mu);if(_>=0&&m<=_)return n.copy(s);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(rs,o);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return pm.subVectors(s,r),o=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(pm,o);const u=1/(p+x+f);return a=x*u,o=f*u,n.copy(i).addScaledVector(is,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const l_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=VE(e,1),n=an(n,0,1),i=an(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=gu(a,s,e+1/3),this.g=gu(a,s,e),this.b=gu(a,s,e-1/3)}return it.toWorkingColorSpace(this,r),this}setStyle(e,n=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){const i=l_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}copyLinearToSRGB(e){return this.r=iu(e.r),this.g=iu(e.g),this.b=iu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return it.fromWorkingColorSpace(qt.copy(this),e),Math.round(an(qt.r*255,0,255))*65536+Math.round(an(qt.g*255,0,255))*256+Math.round(an(qt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=it.workingColorSpace){return it.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Rn){it.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+n,Ii.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ii),e.getHSL(Fo);const i=tu(Ii.h,Fo.h,n),r=tu(Ii.s,Fo.s,n),s=tu(Ii.l,Fo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new qe;qe.NAMES=l_;let i1=0;class jr extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=so(),this.name="",this.type="Material",this.blending=Ns,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Pd,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rd&&(i.blendSrc=this.blendSrc),this.blendDst!==Pd&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==em&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class _h extends jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=jv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new G,Oo=new je;class ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=tm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ra("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oo.fromBufferAttribute(this,n),Oo.applyMatrix3(e),this.setXY(n,Oo.x,Oo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix3(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyMatrix4(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.applyNormalMatrix(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)wt.fromBufferAttribute(this,n),wt.transformDirection(e),this.setXYZ(n,wt.x,wt.y,wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=oa(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=oa(n,this.array)),n}setX(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=oa(n,this.array)),n}setY(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=oa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=oa(n,this.array)),n}setW(e,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=rn(n,this.array),i=rn(i,this.array),r=rn(r,this.array),s=rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tm&&(e.usage=this.usage),e}}class c_ extends ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class u_ extends ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gt extends ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let r1=0;const bn=new pt,vu=new Ht,ss=new G,xn=new er,fa=new er,It=new G;class Zn extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=so(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s_(e)?u_:c_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return vu.lookAt(e),vu.updateMatrix(),this.applyMatrix4(vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Gt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];fa.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(xn.min,fa.min),xn.expandByPoint(It),It.addVectors(xn.max,fa.max),xn.expandByPoint(It)):(xn.expandByPoint(fa.min),xn.expandByPoint(fa.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)It.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(e,c),It.add(ss)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new G,l[L]=new G;const c=new G,d=new G,h=new G,f=new je,m=new je,_=new je,x=new G,p=new G;function u(L,A,y){c.fromBufferAttribute(i,L),d.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,L),m.fromBufferAttribute(s,A),_.fromBufferAttribute(s,y),d.sub(c),h.sub(c),m.sub(f),_.sub(f);const I=1/(m.x*_.y-_.x*m.y);isFinite(I)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(I),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(I),o[L].add(x),o[A].add(x),o[y].add(x),l[L].add(p),l[A].add(p),l[y].add(p))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let L=0,A=g.length;L<A;++L){const y=g[L],I=y.start,H=y.count;for(let X=I,J=I+H;X<J;X+=3)u(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const v=new G,M=new G,N=new G,R=new G;function C(L){N.fromBufferAttribute(r,L),R.copy(N);const A=o[L];v.copy(A),v.sub(N.multiplyScalar(N.dot(A))).normalize(),M.crossVectors(R,A);const I=M.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,I)}for(let L=0,A=g.length;L<A;++L){const y=g[L],I=y.start,H=y.count;for(let X=I,J=I+H;X<J;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,d=new G,h=new G;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,p),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new ai(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const mm=new pt,hr=new gh,ko=new vc,gm=new G,as=new G,os=new G,ls=new G,_u=new G,zo=new G,Bo=new je,Vo=new je,Ho=new je,vm=new G,_m=new G,xm=new G,Go=new G,Wo=new G;class ln extends Ht{constructor(e=new Zn,n=new _h){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(_u.fromBufferAttribute(h,e),a?zo.addScaledVector(_u,d):zo.addScaledVector(_u.sub(n),d))}n.add(zo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ko.copy(i.boundingSphere),ko.applyMatrix4(s),hr.copy(e.ray).recast(e.near),!(ko.containsPoint(hr.origin)===!1&&(hr.intersectSphere(ko,gm)===null||hr.origin.distanceToSquared(gm)>(e.far-e.near)**2))&&(mm.copy(s).invert(),hr.copy(e.ray).applyMatrix4(mm),!(i.boundingBox!==null&&hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const p=f[_],u=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,N=v;M<N;M+=3){const R=o.getX(M),C=o.getX(M+1),L=o.getX(M+2);r=jo(this,u,e,i,c,d,h,R,C,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const g=o.getX(p),v=o.getX(p+1),M=o.getX(p+2);r=jo(this,a,e,i,c,d,h,g,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=f.length;_<x;_++){const p=f[_],u=a[p.materialIndex],g=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let M=g,N=v;M<N;M+=3){const R=M,C=M+1,L=M+2;r=jo(this,u,e,i,c,d,h,R,C,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const g=p,v=p+1,M=p+2;r=jo(this,a,e,i,c,d,h,g,v,M),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function s1(t,e,n,i,r,s,a,o){let l;if(e.side===fn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ir,o),l===null)return null;Wo.copy(o),Wo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Wo);return c<n.near||c>n.far?null:{distance:c,point:Wo.clone(),object:t}}function jo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,as),t.getVertexPosition(l,os),t.getVertexPosition(c,ls);const d=s1(t,e,n,i,as,os,ls,Go);if(d){r&&(Bo.fromBufferAttribute(r,o),Vo.fromBufferAttribute(r,l),Ho.fromBufferAttribute(r,c),d.uv=ii.getInterpolation(Go,as,os,ls,Bo,Vo,Ho,new je)),s&&(Bo.fromBufferAttribute(s,o),Vo.fromBufferAttribute(s,l),Ho.fromBufferAttribute(s,c),d.uv1=ii.getInterpolation(Go,as,os,ls,Bo,Vo,Ho,new je)),a&&(vm.fromBufferAttribute(a,o),_m.fromBufferAttribute(a,l),xm.fromBufferAttribute(a,c),d.normal=ii.getInterpolation(Go,as,os,ls,vm,_m,xm,new G),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new G,materialIndex:0};ii.getNormal(as,os,ls,h.normal),d.face=h}return d}class Xr extends Zn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(h,2));function _(x,p,u,g,v,M,N,R,C,L,A){const y=M/C,I=N/L,H=M/2,X=N/2,J=R/2,te=C+1,Q=L+1;let z=0,b=0;const Y=new G;for(let W=0;W<Q;W++){const ee=W*I-X;for(let ue=0;ue<te;ue++){const Oe=ue*y-H;Y[x]=Oe*g,Y[p]=ee*v,Y[u]=J,c.push(Y.x,Y.y,Y.z),Y[x]=0,Y[p]=0,Y[u]=R>0?1:-1,d.push(Y.x,Y.y,Y.z),h.push(ue/C),h.push(1-W/L),z+=1}}for(let W=0;W<L;W++)for(let ee=0;ee<C;ee++){const ue=f+ee+te*W,Oe=f+ee+te*(W+1),j=f+(ee+1)+te*(W+1),ne=f+(ee+1)+te*W;l.push(ue,Oe,ne),l.push(Oe,j,ne),b+=6}o.addGroup(m,b,A),m+=b,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Xs(t[n]);for(const r in i)e[r]=i[r]}return e}function a1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function d_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const o1={clone:Xs,merge:Qt};var l1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l1,this.fragmentShader=c1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xs(e.uniforms),this.uniformsGroups=a1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class f_ extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=xi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ui=new G,ym=new je,Sm=new je;class Sn extends f_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=lf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lf*2*Math.atan(Math.tan(eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z),Ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ui.x,Ui.y).multiplyScalar(-e/Ui.z)}getViewSize(e,n){return this.getViewBounds(e,ym,Sm),n.subVectors(Sm,ym)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(eu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class u1 extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Sn(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new Sn(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new Sn(cs,us,e,n);a.layers=this.layers,this.add(a);const o=new Sn(cs,us,e,n);o.layers=this.layers,this.add(o);const l=new Sn(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new Sn(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class h_ extends hn{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Hs,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class d1 extends kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new h_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Xn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xr(5,5,5),s=new rr({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Qi});s.uniforms.tEquirect.value=n;const a=new ln(r,s),o=n.minFilter;return n.minFilter===Cr&&(n.minFilter=Xn),new u1(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const xu=new G,f1=new G,h1=new Ge;class xr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xu.subVectors(i,n).cross(f1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||h1.getNormalMatrix(e),r=this.coplanarPoint(xu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pr=new vc,Xo=new G;class xh{constructor(e=new xr,n=new xr,i=new xr,r=new xr,s=new xr,a=new xr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=xi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],x=r[10],p=r[11],u=r[12],g=r[13],v=r[14],M=r[15];if(i[0].setComponents(l-s,f-c,p-m,M-u).normalize(),i[1].setComponents(l+s,f+c,p+m,M+u).normalize(),i[2].setComponents(l+a,f+d,p+_,M+g).normalize(),i[3].setComponents(l-a,f-d,p-_,M-g).normalize(),i[4].setComponents(l-o,f-h,p-x,M-v).normalize(),n===xi)i[5].setComponents(l+o,f+h,p+x,M+v).normalize();else if(n===jl)i[5].setComponents(o,h,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pr)}intersectsSprite(e){return pr.center.set(0,0,0),pr.radius=.7071067811865476,pr.applyMatrix4(e.matrixWorld),this.intersectsSphere(pr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xo.x=r.normal.x>0?e.max.x:e.min.x,Xo.y=r.normal.y>0?e.max.y:e.min.y,Xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function p_(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function p1(t){const e=new WeakMap;function n(o,l){const c=o.array,d=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const d=l.array,h=l._updateRange,f=l.updateRanges;if(t.bindBuffer(c,o),h.count===-1&&f.length===0&&t.bufferSubData(c,0,d),f.length!==0){for(let m=0,_=f.length;m<_;m++){const x=f[m];t.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(c,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class ao extends Zn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,f=n/l,m=[],_=[],x=[],p=[];for(let u=0;u<d;u++){const g=u*f-a;for(let v=0;v<c;v++){const M=v*h-s;_.push(M,-g,0),x.push(0,0,1),p.push(v/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let g=0;g<o;g++){const v=g+c*u,M=g+c*(u+1),N=g+1+c*(u+1),R=g+1+c*u;m.push(v,M,R),m.push(M,N,R)}this.setIndex(m),this.setAttribute("position",new Gt(_,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.width,e.height,e.widthSegments,e.heightSegments)}}var m1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,g1=`#ifdef USE_ALPHAHASH
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
#endif`,v1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,x1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,y1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,S1=`#ifdef USE_AOMAP
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
#endif`,M1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,E1=`#ifdef USE_BATCHING
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
#endif`,w1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,T1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,A1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,C1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b1=`#ifdef USE_IRIDESCENCE
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
#endif`,R1=`#ifdef USE_BUMPMAP
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
#endif`,P1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,L1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,D1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,U1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,F1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,O1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,k1=`#define PI 3.141592653589793
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
} // validated`,z1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B1=`vec3 transformedNormal = objectNormal;
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
#endif`,V1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,W1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,j1="gl_FragColor = linearToOutputTexel( gl_FragColor );",X1=`
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
}`,Y1=`#ifdef USE_ENVMAP
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
#endif`,$1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q1=`#ifdef USE_ENVMAP
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
#endif`,K1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Z1=`#ifdef USE_ENVMAP
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
#endif`,Q1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,J1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ew=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nw=`#ifdef USE_GRADIENTMAP
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
}`,iw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aw=`uniform bool receiveShadow;
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
#endif`,ow=`#ifdef USE_ENVMAP
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
#endif`,lw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fw=`PhysicalMaterial material;
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
#endif`,hw=`struct PhysicalMaterial {
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
}`,pw=`
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
#endif`,mw=`#if defined( RE_IndirectDiffuse )
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
#endif`,gw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_w=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ew=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ww=`#if defined( USE_POINTS_UV )
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
#endif`,Tw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Aw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pw=`#ifdef USE_MORPHTARGETS
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
#endif`,Lw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Dw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ow=`#ifdef USE_NORMALMAP
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
#endif`,kw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ww=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Yw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$w=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jw=`float getShadowMask() {
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
}`,eT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tT=`#ifdef USE_SKINNING
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
#endif`,nT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iT=`#ifdef USE_SKINNING
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
#endif`,rT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,aT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lT=`#ifdef USE_TRANSMISSION
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
#endif`,cT=`#ifdef USE_TRANSMISSION
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
#endif`,uT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mT=`uniform sampler2D t2D;
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
}`,gT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_T=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yT=`#include <common>
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
}`,ST=`#if DEPTH_PACKING == 3200
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
}`,MT=`#define DISTANCE
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
}`,ET=`#define DISTANCE
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
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AT=`uniform float scale;
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
}`,CT=`uniform vec3 diffuse;
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
}`,bT=`#include <common>
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
}`,RT=`uniform vec3 diffuse;
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
}`,PT=`#define LAMBERT
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
}`,LT=`#define LAMBERT
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
}`,NT=`#define MATCAP
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
}`,DT=`#define MATCAP
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
}`,IT=`#define NORMAL
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
}`,UT=`#define NORMAL
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
}`,FT=`#define PHONG
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
}`,OT=`#define PHONG
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
}`,kT=`#define STANDARD
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
}`,zT=`#define STANDARD
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
}`,BT=`#define TOON
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
}`,VT=`#define TOON
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
}`,HT=`uniform float size;
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
}`,GT=`uniform vec3 diffuse;
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
}`,WT=`#include <common>
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
}`,jT=`uniform vec3 color;
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
}`,XT=`uniform float rotation;
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
}`,YT=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:m1,alphahash_pars_fragment:g1,alphamap_fragment:v1,alphamap_pars_fragment:_1,alphatest_fragment:x1,alphatest_pars_fragment:y1,aomap_fragment:S1,aomap_pars_fragment:M1,batching_pars_vertex:E1,batching_vertex:w1,begin_vertex:T1,beginnormal_vertex:A1,bsdfs:C1,iridescence_fragment:b1,bumpmap_pars_fragment:R1,clipping_planes_fragment:P1,clipping_planes_pars_fragment:L1,clipping_planes_pars_vertex:N1,clipping_planes_vertex:D1,color_fragment:I1,color_pars_fragment:U1,color_pars_vertex:F1,color_vertex:O1,common:k1,cube_uv_reflection_fragment:z1,defaultnormal_vertex:B1,displacementmap_pars_vertex:V1,displacementmap_vertex:H1,emissivemap_fragment:G1,emissivemap_pars_fragment:W1,colorspace_fragment:j1,colorspace_pars_fragment:X1,envmap_fragment:Y1,envmap_common_pars_fragment:$1,envmap_pars_fragment:q1,envmap_pars_vertex:K1,envmap_physical_pars_fragment:ow,envmap_vertex:Z1,fog_vertex:Q1,fog_pars_vertex:J1,fog_fragment:ew,fog_pars_fragment:tw,gradientmap_pars_fragment:nw,lightmap_pars_fragment:iw,lights_lambert_fragment:rw,lights_lambert_pars_fragment:sw,lights_pars_begin:aw,lights_toon_fragment:lw,lights_toon_pars_fragment:cw,lights_phong_fragment:uw,lights_phong_pars_fragment:dw,lights_physical_fragment:fw,lights_physical_pars_fragment:hw,lights_fragment_begin:pw,lights_fragment_maps:mw,lights_fragment_end:gw,logdepthbuf_fragment:vw,logdepthbuf_pars_fragment:_w,logdepthbuf_pars_vertex:xw,logdepthbuf_vertex:yw,map_fragment:Sw,map_pars_fragment:Mw,map_particle_fragment:Ew,map_particle_pars_fragment:ww,metalnessmap_fragment:Tw,metalnessmap_pars_fragment:Aw,morphinstance_vertex:Cw,morphcolor_vertex:bw,morphnormal_vertex:Rw,morphtarget_pars_vertex:Pw,morphtarget_vertex:Lw,normal_fragment_begin:Nw,normal_fragment_maps:Dw,normal_pars_fragment:Iw,normal_pars_vertex:Uw,normal_vertex:Fw,normalmap_pars_fragment:Ow,clearcoat_normal_fragment_begin:kw,clearcoat_normal_fragment_maps:zw,clearcoat_pars_fragment:Bw,iridescence_pars_fragment:Vw,opaque_fragment:Hw,packing:Gw,premultiplied_alpha_fragment:Ww,project_vertex:jw,dithering_fragment:Xw,dithering_pars_fragment:Yw,roughnessmap_fragment:$w,roughnessmap_pars_fragment:qw,shadowmap_pars_fragment:Kw,shadowmap_pars_vertex:Zw,shadowmap_vertex:Qw,shadowmask_pars_fragment:Jw,skinbase_vertex:eT,skinning_pars_vertex:tT,skinning_vertex:nT,skinnormal_vertex:iT,specularmap_fragment:rT,specularmap_pars_fragment:sT,tonemapping_fragment:aT,tonemapping_pars_fragment:oT,transmission_fragment:lT,transmission_pars_fragment:cT,uv_pars_fragment:uT,uv_pars_vertex:dT,uv_vertex:fT,worldpos_vertex:hT,background_vert:pT,background_frag:mT,backgroundCube_vert:gT,backgroundCube_frag:vT,cube_vert:_T,cube_frag:xT,depth_vert:yT,depth_frag:ST,distanceRGBA_vert:MT,distanceRGBA_frag:ET,equirect_vert:wT,equirect_frag:TT,linedashed_vert:AT,linedashed_frag:CT,meshbasic_vert:bT,meshbasic_frag:RT,meshlambert_vert:PT,meshlambert_frag:LT,meshmatcap_vert:NT,meshmatcap_frag:DT,meshnormal_vert:IT,meshnormal_frag:UT,meshphong_vert:FT,meshphong_frag:OT,meshphysical_vert:kT,meshphysical_frag:zT,meshtoon_vert:BT,meshtoon_frag:VT,points_vert:HT,points_frag:GT,shadow_vert:WT,shadow_frag:jT,sprite_vert:XT,sprite_frag:YT},de={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ei={basic:{uniforms:Qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Qt([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Qt([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Qt([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new qe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Qt([de.points,de.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Qt([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Qt([de.common,de.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Qt([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Qt([de.sprite,de.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Qt([de.common,de.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Qt([de.lights,de.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};ei.physical={uniforms:Qt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Yo={r:0,b:0,g:0},mr=new On,$T=new pt;function qT(t,e,n,i,r,s,a){const o=new qe(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function x(g){let v=!1;const M=_(g);M===null?u(o,l):M&&M.isColor&&(u(M,1),v=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(g,v){const M=_(v);M&&(M.isCubeTexture||M.mapping===mc)?(d===void 0&&(d=new ln(new Xr(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Xs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(N,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),mr.copy(v.backgroundRotation),mr.x*=-1,mr.y*=-1,mr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),d.material.uniforms.envMap.value=M,d.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4($T.makeRotationFromEuler(mr)),d.material.toneMapped=it.getTransfer(M.colorSpace)!==dt,(h!==M||f!==M.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=M,f=M.version,m=t.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ln(new ao(2,2),new rr({name:"BackgroundMaterial",uniforms:Xs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=it.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,m=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function u(g,v){g.getRGB(Yo,d_(t)),i.buffers.color.setClear(Yo.r,Yo.g,Yo.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(g,v=1){o.set(g),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,u(o,l)},render:x,addToRenderList:p}}function KT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,I,H,X,J){let te=!1;const Q=h(X,H,I);s!==Q&&(s=Q,c(s.object)),te=m(y,X,H,J),te&&_(y,X,H,J),J!==null&&e.update(J,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,M(y,I,H,X),J!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function h(y,I,H){const X=H.wireframe===!0;let J=i[y.id];J===void 0&&(J={},i[y.id]=J);let te=J[I.id];te===void 0&&(te={},J[I.id]=te);let Q=te[X];return Q===void 0&&(Q=f(l()),te[X]=Q),Q}function f(y){const I=[],H=[],X=[];for(let J=0;J<n;J++)I[J]=0,H[J]=0,X[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:H,attributeDivisors:X,object:y,attributes:{},index:null}}function m(y,I,H,X){const J=s.attributes,te=I.attributes;let Q=0;const z=H.getAttributes();for(const b in z)if(z[b].location>=0){const W=J[b];let ee=te[b];if(ee===void 0&&(b==="instanceMatrix"&&y.instanceMatrix&&(ee=y.instanceMatrix),b==="instanceColor"&&y.instanceColor&&(ee=y.instanceColor)),W===void 0||W.attribute!==ee||ee&&W.data!==ee.data)return!0;Q++}return s.attributesNum!==Q||s.index!==X}function _(y,I,H,X){const J={},te=I.attributes;let Q=0;const z=H.getAttributes();for(const b in z)if(z[b].location>=0){let W=te[b];W===void 0&&(b==="instanceMatrix"&&y.instanceMatrix&&(W=y.instanceMatrix),b==="instanceColor"&&y.instanceColor&&(W=y.instanceColor));const ee={};ee.attribute=W,W&&W.data&&(ee.data=W.data),J[b]=ee,Q++}s.attributes=J,s.attributesNum=Q,s.index=X}function x(){const y=s.newAttributes;for(let I=0,H=y.length;I<H;I++)y[I]=0}function p(y){u(y,0)}function u(y,I){const H=s.newAttributes,X=s.enabledAttributes,J=s.attributeDivisors;H[y]=1,X[y]===0&&(t.enableVertexAttribArray(y),X[y]=1),J[y]!==I&&(t.vertexAttribDivisor(y,I),J[y]=I)}function g(){const y=s.newAttributes,I=s.enabledAttributes;for(let H=0,X=I.length;H<X;H++)I[H]!==y[H]&&(t.disableVertexAttribArray(H),I[H]=0)}function v(y,I,H,X,J,te,Q){Q===!0?t.vertexAttribIPointer(y,I,H,J,te):t.vertexAttribPointer(y,I,H,X,J,te)}function M(y,I,H,X){x();const J=X.attributes,te=H.getAttributes(),Q=I.defaultAttributeValues;for(const z in te){const b=te[z];if(b.location>=0){let Y=J[z];if(Y===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&(Y=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&(Y=y.instanceColor)),Y!==void 0){const W=Y.normalized,ee=Y.itemSize,ue=e.get(Y);if(ue===void 0)continue;const Oe=ue.buffer,j=ue.type,ne=ue.bytesPerElement,fe=j===t.INT||j===t.UNSIGNED_INT||Y.gpuType===ch;if(Y.isInterleavedBufferAttribute){const he=Y.data,Ae=he.stride,ke=Y.offset;if(he.isInstancedInterleavedBuffer){for(let De=0;De<b.locationSize;De++)u(b.location+De,he.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let De=0;De<b.locationSize;De++)p(b.location+De);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let De=0;De<b.locationSize;De++)v(b.location+De,ee/b.locationSize,j,W,Ae*ne,(ke+ee/b.locationSize*De)*ne,fe)}else{if(Y.isInstancedBufferAttribute){for(let he=0;he<b.locationSize;he++)u(b.location+he,Y.meshPerAttribute);y.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let he=0;he<b.locationSize;he++)p(b.location+he);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let he=0;he<b.locationSize;he++)v(b.location+he,ee/b.locationSize,j,W,ee*ne,ee/b.locationSize*he*ne,fe)}}else if(Q!==void 0){const W=Q[z];if(W!==void 0)switch(W.length){case 2:t.vertexAttrib2fv(b.location,W);break;case 3:t.vertexAttrib3fv(b.location,W);break;case 4:t.vertexAttrib4fv(b.location,W);break;default:t.vertexAttrib1fv(b.location,W)}}}}g()}function N(){L();for(const y in i){const I=i[y];for(const H in I){const X=I[H];for(const J in X)d(X[J].object),delete X[J];delete I[H]}delete i[y]}}function R(y){if(i[y.id]===void 0)return;const I=i[y.id];for(const H in I){const X=I[H];for(const J in X)d(X[J].object),delete X[J];delete I[H]}delete i[y.id]}function C(y){for(const I in i){const H=i[I];if(H[y.id]===void 0)continue;const X=H[y.id];for(const J in X)d(X[J].object),delete X[J];delete H[y.id]}}function L(){A(),a=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:A,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:g}}function ZT(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function a(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function o(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=d[_];n.update(m,i,1)}function l(c,d,h,f){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],d[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let _=0;for(let x=0;x<h;x++)_+=d[x];for(let x=0;x<f.length;x++)n.update(_,i,f[x])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function QT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Yn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const C=R===ro&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Ti&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==_i&&!C)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),u=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=m>0,N=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:u,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:M,maxSamples:N}}function JT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new xr,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const g=s?0:i,v=g*4;let M=u.clippingState||null;l.value=M,M=d(_,f,v,m);for(let N=0;N!==v;++N)M[N]=n[N];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(p===null||p.length<u)&&(p=new Float32Array(u));for(let v=0,M=m;v!==x;++v,M+=4)a.copy(h[v]).applyMatrix4(g,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function eA(t){let e=new WeakMap;function n(a,o){return o===Ld?a.mapping=Hs:o===Nd&&(a.mapping=Gs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ld||o===Nd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new d1(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class m_ extends f_{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ws=4,Mm=[.125,.215,.35,.446,.526,.582],Mr=20,yu=new m_,Em=new qe;let Su=null,Mu=0,Eu=0,wu=!1;const yr=(1+Math.sqrt(5))/2,ds=1/yr,wm=[new G(-yr,ds,0),new G(yr,ds,0),new G(-ds,0,yr),new G(ds,0,yr),new G(0,yr,-ds),new G(0,yr,ds),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)];class Tm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Su=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Su,Mu,Eu),this._renderer.xr.enabled=wu,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Hs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Su=this._renderer.getRenderTarget(),Mu=this._renderer.getActiveCubeFace(),Eu=this._renderer.getActiveMipmapLevel(),wu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:ro,format:Yn,colorSpace:lr,depthBuffer:!1},r=Am(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Am(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tA(s)),this._blurMaterial=nA(s,e,n)}return r}_compileMaterial(e){const n=new ln(this._lodPlanes[0],e);this._renderer.compile(n,yu)}_sceneToCubeUV(e,n,i,r){const o=new Sn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Em),d.toneMapping=Ji,d.autoClear=!1;const m=new _h({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),_=new ln(new Xr,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(Em),x=!0);for(let u=0;u<6;u++){const g=u%3;g===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):g===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const v=this._cubeSize;$o(r,g*v,u>2?v:0,v,v),d.setRenderTarget(r),x&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Hs||e.mapping===Gs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ln(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$o(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,yu)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=wm[(r-s-1)%wm.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ln(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Mr-1),x=s/_,p=isFinite(s)?1+Math.floor(d*x):Mr;p>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mr}`);const u=[];let g=0;for(let C=0;C<Mr;++C){const L=C/x,A=Math.exp(-L*L/2);u.push(A),C===0?g+=A:C<p&&(g+=2*A)}for(let C=0;C<u.length;C++)u[C]=u[C]/g;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const M=this._sizeLods[r],N=3*M*(r>v-ws?r-v+ws:0),R=4*(this._cubeSize-M);$o(n,N,R,3*M,2*M),l.setRenderTarget(n),l.render(h,yu)}}function tA(t){const e=[],n=[],i=[];let r=t;const s=t-ws+1+Mm.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-ws?l=Mm[a-t+ws-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,x=3,p=2,u=1,g=new Float32Array(x*_*m),v=new Float32Array(p*_*m),M=new Float32Array(u*_*m);for(let R=0;R<m;R++){const C=R%3*2/3-1,L=R>2?0:-1,A=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];g.set(A,x*_*R),v.set(f,p*_*R);const y=[R,R,R,R,R,R];M.set(y,u*_*R)}const N=new Zn;N.setAttribute("position",new ai(g,x)),N.setAttribute("uv",new ai(v,p)),N.setAttribute("faceIndex",new ai(M,u)),e.push(N),r>ws&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Am(t,e,n){const i=new kr(t,e,n);return i.texture.mapping=mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $o(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function nA(t,e,n){const i=new Float32Array(Mr),r=new G(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Cm(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yh(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function bm(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function yh(){return`

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
	`}function iA(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ld||l===Nd,d=l===Hs||l===Gs;if(c||d){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new Tm(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&r(m)?(n===null&&(n=new Tm(t)),h=c?n.fromEquirectangular(o):n.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function rA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ra("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function sA(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const x=f.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let x=0;if(m!==null){const g=m.array;x=m.version;for(let v=0,M=g.length;v<M;v+=3){const N=g[v+0],R=g[v+1],C=g[v+2];f.push(N,R,R,C,C,N)}}else if(_!==void 0){const g=_.array;x=_.version;for(let v=0,M=g.length/3-1;v<M;v+=3){const N=v+0,R=v+1,C=v+2;f.push(N,R,R,C,C,N)}}else return;const p=new(s_(f)?u_:c_)(f,1);p.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function aA(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){t.drawElements(i,m,s,f*a),n.update(m,i,1)}function c(f,m,_){_!==0&&(t.drawElementsInstanced(i,m,s,f*a,_),n.update(m,i,_))}function d(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];n.update(p,i,1)}function h(f,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<f.length;u++)c(f[u]/a,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,x,0,_);let u=0;for(let g=0;g<_;g++)u+=m[g];for(let g=0;g<x.length;g++)n.update(u,i,x[g])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function oA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function lA(t,e,n){const i=new WeakMap,r=new bt;function s(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let y=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let M=0;_===!0&&(M=1),x===!0&&(M=2),p===!0&&(M=3);let N=o.attributes.position.count*M,R=1;N>e.maxTextureSize&&(R=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const C=new Float32Array(N*R*4*h),L=new o_(C,N,R,h);L.type=_i,L.needsUpdate=!0;const A=M*4;for(let I=0;I<h;I++){const H=u[I],X=g[I],J=v[I],te=N*R*4*I;for(let Q=0;Q<H.count;Q++){const z=Q*A;_===!0&&(r.fromBufferAttribute(H,Q),C[te+z+0]=r.x,C[te+z+1]=r.y,C[te+z+2]=r.z,C[te+z+3]=0),x===!0&&(r.fromBufferAttribute(X,Q),C[te+z+4]=r.x,C[te+z+5]=r.y,C[te+z+6]=r.z,C[te+z+7]=0),p===!0&&(r.fromBufferAttribute(J,Q),C[te+z+8]=r.x,C[te+z+9]=r.y,C[te+z+10]=r.z,C[te+z+11]=J.itemSize===4?r.w:1)}}f={count:h,texture:L,size:new je(N,R)},i.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function cA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class g_ extends hn{constructor(e,n,i,r,s,a,o,l,c,d=Ds){if(d!==Ds&&d!==js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ds&&(i=Or),i===void 0&&d===js&&(i=Ws),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const v_=new hn,Rm=new g_(1,1),__=new o_,x_=new qE,y_=new h_,Pm=[],Lm=[],Nm=new Float32Array(16),Dm=new Float32Array(9),Im=new Float32Array(4);function Zs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Pm[r];if(s===void 0&&(s=new Float32Array(r),Pm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Pt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Lt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function _c(t,e){let n=Lm[e];n===void 0&&(n=new Int32Array(e),Lm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function uA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2fv(this.addr,e),Lt(n,e)}}function fA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Pt(n,e))return;t.uniform3fv(this.addr,e),Lt(n,e)}}function hA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4fv(this.addr,e),Lt(n,e)}}function pA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Im.set(i),t.uniformMatrix2fv(this.addr,!1,Im),Lt(n,i)}}function mA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Dm.set(i),t.uniformMatrix3fv(this.addr,!1,Dm),Lt(n,i)}}function gA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Pt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Lt(n,e)}else{if(Pt(n,i))return;Nm.set(i),t.uniformMatrix4fv(this.addr,!1,Nm),Lt(n,i)}}function vA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function _A(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2iv(this.addr,e),Lt(n,e)}}function xA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3iv(this.addr,e),Lt(n,e)}}function yA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4iv(this.addr,e),Lt(n,e)}}function SA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function MA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Pt(n,e))return;t.uniform2uiv(this.addr,e),Lt(n,e)}}function EA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Pt(n,e))return;t.uniform3uiv(this.addr,e),Lt(n,e)}}function wA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Pt(n,e))return;t.uniform4uiv(this.addr,e),Lt(n,e)}}function TA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Rm.compareFunction=r_,s=Rm):s=v_,n.setTexture2D(e||s,r)}function AA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||x_,r)}function CA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||y_,r)}function bA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||__,r)}function RA(t){switch(t){case 5126:return uA;case 35664:return dA;case 35665:return fA;case 35666:return hA;case 35674:return pA;case 35675:return mA;case 35676:return gA;case 5124:case 35670:return vA;case 35667:case 35671:return _A;case 35668:case 35672:return xA;case 35669:case 35673:return yA;case 5125:return SA;case 36294:return MA;case 36295:return EA;case 36296:return wA;case 35678:case 36198:case 36298:case 36306:case 35682:return TA;case 35679:case 36299:case 36307:return AA;case 35680:case 36300:case 36308:case 36293:return CA;case 36289:case 36303:case 36311:case 36292:return bA}}function PA(t,e){t.uniform1fv(this.addr,e)}function LA(t,e){const n=Zs(e,this.size,2);t.uniform2fv(this.addr,n)}function NA(t,e){const n=Zs(e,this.size,3);t.uniform3fv(this.addr,n)}function DA(t,e){const n=Zs(e,this.size,4);t.uniform4fv(this.addr,n)}function IA(t,e){const n=Zs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function UA(t,e){const n=Zs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function FA(t,e){const n=Zs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function OA(t,e){t.uniform1iv(this.addr,e)}function kA(t,e){t.uniform2iv(this.addr,e)}function zA(t,e){t.uniform3iv(this.addr,e)}function BA(t,e){t.uniform4iv(this.addr,e)}function VA(t,e){t.uniform1uiv(this.addr,e)}function HA(t,e){t.uniform2uiv(this.addr,e)}function GA(t,e){t.uniform3uiv(this.addr,e)}function WA(t,e){t.uniform4uiv(this.addr,e)}function jA(t,e,n){const i=this.cache,r=e.length,s=_c(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||v_,s[a])}function XA(t,e,n){const i=this.cache,r=e.length,s=_c(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||x_,s[a])}function YA(t,e,n){const i=this.cache,r=e.length,s=_c(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||y_,s[a])}function $A(t,e,n){const i=this.cache,r=e.length,s=_c(n,r);Pt(i,s)||(t.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||__,s[a])}function qA(t){switch(t){case 5126:return PA;case 35664:return LA;case 35665:return NA;case 35666:return DA;case 35674:return IA;case 35675:return UA;case 35676:return FA;case 5124:case 35670:return OA;case 35667:case 35671:return kA;case 35668:case 35672:return zA;case 35669:case 35673:return BA;case 5125:return VA;case 36294:return HA;case 36295:return GA;case 36296:return WA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return YA;case 36289:case 36303:case 36311:case 36292:return $A}}class KA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=RA(n.type)}}class ZA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qA(n.type)}}class QA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Tu=/(\w+)(\])?(\[|\.)?/g;function Um(t,e){t.seq.push(e),t.map[e.id]=e}function JA(t,e,n){const i=t.name,r=i.length;for(Tu.lastIndex=0;;){const s=Tu.exec(i),a=Tu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Um(n,c===void 0?new KA(o,t,e):new ZA(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new QA(o),Um(n,h)),n=h}}}class ml{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);JA(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Fm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const eC=37297;let tC=0;function nC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function iC(t){const e=it.getPrimaries(it.workingColorSpace),n=it.getPrimaries(t);let i;switch(e===n?i="":e===Wl&&n===Gl?i="LinearDisplayP3ToLinearSRGB":e===Gl&&n===Wl&&(i="LinearSRGBToLinearDisplayP3"),t){case lr:case gc:return[i,"LinearTransferOETF"];case Rn:case mh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Om(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+nC(t.getShaderSource(e),a)}else return r}function rC(t,e){const n=iC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function sC(t,e){let n;switch(e){case EE:n="Linear";break;case wE:n="Reinhard";break;case TE:n="OptimizedCineon";break;case AE:n="ACESFilmic";break;case bE:n="AgX";break;case RE:n="Neutral";break;case CE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const qo=new G;function aC(){it.getLuminanceCoefficients(qo);const t=qo.x.toFixed(4),e=qo.y.toFixed(4),n=qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function lC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function cC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function xa(t){return t!==""}function km(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uC=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(t){return t.replace(uC,fC)}const dC=new Map;function fC(t,e){let n=He[e];if(n===void 0){const i=dC.get(e);if(i!==void 0)n=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cf(n)}const hC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(t){return t.replace(hC,pC)}function pC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function mC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Gv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Wv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function gC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Hs:case Gs:e="ENVMAP_TYPE_CUBE";break;case mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function vC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function _C(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case jv:e="ENVMAP_BLENDING_MULTIPLY";break;case SE:e="ENVMAP_BLENDING_MIX";break;case ME:e="ENVMAP_BLENDING_ADD";break}return e}function xC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function yC(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=mC(n),c=gC(n),d=vC(n),h=_C(n),f=xC(n),m=oC(n),_=lC(s),x=r.createProgram();let p,u,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(xa).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(xa).join(`
`),u.length>0&&(u+=`
`)):(p=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),u=[Vm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ji?"#define TONE_MAPPING":"",n.toneMapping!==Ji?He.tonemapping_pars_fragment:"",n.toneMapping!==Ji?sC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,rC("linearToOutputTexel",n.outputColorSpace),aC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(xa).join(`
`)),a=cf(a),a=km(a,n),a=zm(a,n),o=cf(o),o=km(o,n),o=zm(o,n),a=Bm(a),o=Bm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===nm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===nm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=g+p+a,M=g+u+o,N=Fm(r,r.VERTEX_SHADER,v),R=Fm(r,r.FRAGMENT_SHADER,M);r.attachShader(x,N),r.attachShader(x,R),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(I){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(x).trim(),X=r.getShaderInfoLog(N).trim(),J=r.getShaderInfoLog(R).trim();let te=!0,Q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,N,R);else{const z=Om(r,N,"vertex"),b=Om(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+z+`
`+b)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(X===""||J==="")&&(Q=!1);Q&&(I.diagnostics={runnable:te,programLog:H,vertexShader:{log:X,prefix:p},fragmentShader:{log:J,prefix:u}})}r.deleteShader(N),r.deleteShader(R),L=new ml(r,x),A=cC(r,x)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,eC)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tC++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=N,this.fragmentShader=R,this}let SC=0;class MC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new EC(e),n.set(e,i)),i}}class EC{constructor(e){this.id=SC++,this.code=e,this.usedTimes=0}}function wC(t,e,n,i,r,s,a){const o=new vh,l=new MC,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(A){return c.add(A),A===0?"uv":`uv${A}`}function p(A,y,I,H,X){const J=H.fog,te=X.geometry,Q=A.isMeshStandardMaterial?H.environment:null,z=(A.isMeshStandardMaterial?n:e).get(A.envMap||Q),b=z&&z.mapping===mc?z.image.height:null,Y=_[A.type];A.precision!==null&&(m=r.getMaxPrecision(A.precision),m!==A.precision&&console.warn("THREE.WebGLProgram.getParameters:",A.precision,"not supported, using",m,"instead."));const W=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,ee=W!==void 0?W.length:0;let ue=0;te.morphAttributes.position!==void 0&&(ue=1),te.morphAttributes.normal!==void 0&&(ue=2),te.morphAttributes.color!==void 0&&(ue=3);let Oe,j,ne,fe;if(Y){const Ve=ei[Y];Oe=Ve.vertexShader,j=Ve.fragmentShader}else Oe=A.vertexShader,j=A.fragmentShader,l.update(A),ne=l.getVertexShaderID(A),fe=l.getFragmentShaderID(A);const he=t.getRenderTarget(),Ae=X.isInstancedMesh===!0,ke=X.isBatchedMesh===!0,De=!!A.map,Ye=!!A.matcap,D=!!z,st=!!A.aoMap,Ke=!!A.lightMap,$e=!!A.bumpMap,ve=!!A.normalMap,ct=!!A.displacementMap,Ie=!!A.emissiveMap,Le=!!A.metalnessMap,P=!!A.roughnessMap,E=A.anisotropy>0,K=A.clearcoat>0,re=A.dispersion>0,oe=A.iridescence>0,ie=A.sheen>0,Te=A.transmission>0,pe=E&&!!A.anisotropyMap,_e=K&&!!A.clearcoatMap,ze=K&&!!A.clearcoatNormalMap,le=K&&!!A.clearcoatRoughnessMap,ge=oe&&!!A.iridescenceMap,We=oe&&!!A.iridescenceThicknessMap,Ce=ie&&!!A.sheenColorMap,ye=ie&&!!A.sheenRoughnessMap,Ue=!!A.specularMap,Be=!!A.specularColorMap,at=!!A.specularIntensityMap,w=Te&&!!A.transmissionMap,U=Te&&!!A.thicknessMap,O=!!A.gradientMap,k=!!A.alphaMap,$=A.alphaTest>0,se=!!A.alphaHash,Ee=!!A.extensions;let Pe=Ji;A.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Pe=t.toneMapping);const Qe={shaderID:Y,shaderType:A.type,shaderName:A.name,vertexShader:Oe,fragmentShader:j,defines:A.defines,customVertexShaderID:ne,customFragmentShaderID:fe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:m,batching:ke,batchingColor:ke&&X._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&X.instanceColor!==null,instancingMorph:Ae&&X.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:lr,alphaToCoverage:!!A.alphaToCoverage,map:De,matcap:Ye,envMap:D,envMapMode:D&&z.mapping,envMapCubeUVHeight:b,aoMap:st,lightMap:Ke,bumpMap:$e,normalMap:ve,displacementMap:f&&ct,emissiveMap:Ie,normalMapObjectSpace:ve&&A.normalMapType===DE,normalMapTangentSpace:ve&&A.normalMapType===i_,metalnessMap:Le,roughnessMap:P,anisotropy:E,anisotropyMap:pe,clearcoat:K,clearcoatMap:_e,clearcoatNormalMap:ze,clearcoatRoughnessMap:le,dispersion:re,iridescence:oe,iridescenceMap:ge,iridescenceThicknessMap:We,sheen:ie,sheenColorMap:Ce,sheenRoughnessMap:ye,specularMap:Ue,specularColorMap:Be,specularIntensityMap:at,transmission:Te,transmissionMap:w,thicknessMap:U,gradientMap:O,opaque:A.transparent===!1&&A.blending===Ns&&A.alphaToCoverage===!1,alphaMap:k,alphaTest:$,alphaHash:se,combine:A.combine,mapUv:De&&x(A.map.channel),aoMapUv:st&&x(A.aoMap.channel),lightMapUv:Ke&&x(A.lightMap.channel),bumpMapUv:$e&&x(A.bumpMap.channel),normalMapUv:ve&&x(A.normalMap.channel),displacementMapUv:ct&&x(A.displacementMap.channel),emissiveMapUv:Ie&&x(A.emissiveMap.channel),metalnessMapUv:Le&&x(A.metalnessMap.channel),roughnessMapUv:P&&x(A.roughnessMap.channel),anisotropyMapUv:pe&&x(A.anisotropyMap.channel),clearcoatMapUv:_e&&x(A.clearcoatMap.channel),clearcoatNormalMapUv:ze&&x(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&x(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(A.iridescenceMap.channel),iridescenceThicknessMapUv:We&&x(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(A.sheenColorMap.channel),sheenRoughnessMapUv:ye&&x(A.sheenRoughnessMap.channel),specularMapUv:Ue&&x(A.specularMap.channel),specularColorMapUv:Be&&x(A.specularColorMap.channel),specularIntensityMapUv:at&&x(A.specularIntensityMap.channel),transmissionMapUv:w&&x(A.transmissionMap.channel),thicknessMapUv:U&&x(A.thicknessMap.channel),alphaMapUv:k&&x(A.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(ve||E),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!te.attributes.uv&&(De||k),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.flatShading===!0,sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Pe,decodeVideoTexture:De&&A.map.isVideoTexture===!0&&it.getTransfer(A.map.colorSpace)===dt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ni,flipSided:A.side===fn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Ee&&A.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&A.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Qe.vertexUv1s=c.has(1),Qe.vertexUv2s=c.has(2),Qe.vertexUv3s=c.has(3),c.clear(),Qe}function u(A){const y=[];if(A.shaderID?y.push(A.shaderID):(y.push(A.customVertexShaderID),y.push(A.customFragmentShaderID)),A.defines!==void 0)for(const I in A.defines)y.push(I),y.push(A.defines[I]);return A.isRawShaderMaterial===!1&&(g(y,A),v(y,A),y.push(t.outputColorSpace)),y.push(A.customProgramCacheKey),y.join()}function g(A,y){A.push(y.precision),A.push(y.outputColorSpace),A.push(y.envMapMode),A.push(y.envMapCubeUVHeight),A.push(y.mapUv),A.push(y.alphaMapUv),A.push(y.lightMapUv),A.push(y.aoMapUv),A.push(y.bumpMapUv),A.push(y.normalMapUv),A.push(y.displacementMapUv),A.push(y.emissiveMapUv),A.push(y.metalnessMapUv),A.push(y.roughnessMapUv),A.push(y.anisotropyMapUv),A.push(y.clearcoatMapUv),A.push(y.clearcoatNormalMapUv),A.push(y.clearcoatRoughnessMapUv),A.push(y.iridescenceMapUv),A.push(y.iridescenceThicknessMapUv),A.push(y.sheenColorMapUv),A.push(y.sheenRoughnessMapUv),A.push(y.specularMapUv),A.push(y.specularColorMapUv),A.push(y.specularIntensityMapUv),A.push(y.transmissionMapUv),A.push(y.thicknessMapUv),A.push(y.combine),A.push(y.fogExp2),A.push(y.sizeAttenuation),A.push(y.morphTargetsCount),A.push(y.morphAttributeCount),A.push(y.numDirLights),A.push(y.numPointLights),A.push(y.numSpotLights),A.push(y.numSpotLightMaps),A.push(y.numHemiLights),A.push(y.numRectAreaLights),A.push(y.numDirLightShadows),A.push(y.numPointLightShadows),A.push(y.numSpotLightShadows),A.push(y.numSpotLightShadowsWithMaps),A.push(y.numLightProbes),A.push(y.shadowMapType),A.push(y.toneMapping),A.push(y.numClippingPlanes),A.push(y.numClipIntersection),A.push(y.depthPacking)}function v(A,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),A.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.doubleSided&&o.enable(10),y.flipSided&&o.enable(11),y.useDepthPacking&&o.enable(12),y.dithering&&o.enable(13),y.transmission&&o.enable(14),y.sheen&&o.enable(15),y.opaque&&o.enable(16),y.pointsUvs&&o.enable(17),y.decodeVideoTexture&&o.enable(18),y.alphaToCoverage&&o.enable(19),A.push(o.mask)}function M(A){const y=_[A.type];let I;if(y){const H=ei[y];I=o1.clone(H.uniforms)}else I=A.uniforms;return I}function N(A,y){let I;for(let H=0,X=d.length;H<X;H++){const J=d[H];if(J.cacheKey===y){I=J,++I.usedTimes;break}}return I===void 0&&(I=new yC(t,y,A,s),d.push(I)),I}function R(A){if(--A.usedTimes===0){const y=d.indexOf(A);d[y]=d[d.length-1],d.pop(),A.destroy()}}function C(A){l.remove(A)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:M,acquireProgram:N,releaseProgram:R,releaseShaderCache:C,programs:d,dispose:L}}function TC(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function AC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Hm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Gm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,m,_,x,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:x,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=x,u.group=p),e++,u}function o(h,f,m,_,x,p){const u=a(h,f,m,_,x,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,_,x,p){const u=a(h,f,m,_,x,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||AC),i.length>1&&i.sort(f||Hm),r.length>1&&r.sort(f||Hm)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function CC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Gm,t.set(i,[a])):r>=s.length?(a=new Gm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function bC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new qe};break;case"SpotLight":n={position:new G,direction:new G,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function RC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let PC=0;function LC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NC(t){const e=new bC,n=RC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new pt,a=new pt;function o(c){let d=0,h=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let m=0,_=0,x=0,p=0,u=0,g=0,v=0,M=0,N=0,R=0,C=0;c.sort(LC);for(let A=0,y=c.length;A<y;A++){const I=c[A],H=I.color,X=I.intensity,J=I.distance,te=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=H.r*X,h+=H.g*X,f+=H.b*X;else if(I.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(I.sh.coefficients[Q],X);C++}else if(I.isDirectionalLight){const Q=e.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,b=n.get(I);b.shadowIntensity=z.intensity,b.shadowBias=z.bias,b.shadowNormalBias=z.normalBias,b.shadowRadius=z.radius,b.shadowMapSize=z.mapSize,i.directionalShadow[m]=b,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=I.shadow.matrix,g++}i.directional[m]=Q,m++}else if(I.isSpotLight){const Q=e.get(I);Q.position.setFromMatrixPosition(I.matrixWorld),Q.color.copy(H).multiplyScalar(X),Q.distance=J,Q.coneCos=Math.cos(I.angle),Q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Q.decay=I.decay,i.spot[x]=Q;const z=I.shadow;if(I.map&&(i.spotLightMap[N]=I.map,N++,z.updateMatrices(I),I.castShadow&&R++),i.spotLightMatrix[x]=z.matrix,I.castShadow){const b=n.get(I);b.shadowIntensity=z.intensity,b.shadowBias=z.bias,b.shadowNormalBias=z.normalBias,b.shadowRadius=z.radius,b.shadowMapSize=z.mapSize,i.spotShadow[x]=b,i.spotShadowMap[x]=te,M++}x++}else if(I.isRectAreaLight){const Q=e.get(I);Q.color.copy(H).multiplyScalar(X),Q.halfWidth.set(I.width*.5,0,0),Q.halfHeight.set(0,I.height*.5,0),i.rectArea[p]=Q,p++}else if(I.isPointLight){const Q=e.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),Q.distance=I.distance,Q.decay=I.decay,I.castShadow){const z=I.shadow,b=n.get(I);b.shadowIntensity=z.intensity,b.shadowBias=z.bias,b.shadowNormalBias=z.normalBias,b.shadowRadius=z.radius,b.shadowMapSize=z.mapSize,b.shadowCameraNear=z.camera.near,b.shadowCameraFar=z.camera.far,i.pointShadow[_]=b,i.pointShadowMap[_]=te,i.pointShadowMatrix[_]=I.shadow.matrix,v++}i.point[_]=Q,_++}else if(I.isHemisphereLight){const Q=e.get(I);Q.skyColor.copy(I.color).multiplyScalar(X),Q.groundColor.copy(I.groundColor).multiplyScalar(X),i.hemi[u]=Q,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=de.LTC_FLOAT_1,i.rectAreaLTC2=de.LTC_FLOAT_2):(i.rectAreaLTC1=de.LTC_HALF_1,i.rectAreaLTC2=de.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const L=i.hash;(L.directionalLength!==m||L.pointLength!==_||L.spotLength!==x||L.rectAreaLength!==p||L.hemiLength!==u||L.numDirectionalShadows!==g||L.numPointShadows!==v||L.numSpotShadows!==M||L.numSpotMaps!==N||L.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=p,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=M+N-R,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,L.directionalLength=m,L.pointLength=_,L.spotLength=x,L.rectAreaLength=p,L.hemiLength=u,L.numDirectionalShadows=g,L.numPointShadows=v,L.numSpotShadows=M,L.numSpotMaps=N,L.numLightProbes=C,i.version=PC++)}function l(c,d){let h=0,f=0,m=0,_=0,x=0;const p=d.matrixWorldInverse;for(let u=0,g=c.length;u<g;u++){const v=c[u];if(v.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(v.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),m++}else if(v.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:i}}function Wm(t){const e=new NC(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function a(d){i.push(d)}function o(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function DC(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Wm(t),e.set(r,[o])):s>=a.length?(o=new Wm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class IC extends jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class UC extends jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const FC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OC=`uniform sampler2D shadow_pass;
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
}`;function kC(t,e,n){let i=new xh;const r=new je,s=new je,a=new bt,o=new IC({depthPacking:NE}),l=new UC,c={},d=n.maxTextureSize,h={[ir]:fn,[fn]:ir,[ni]:ni},f=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:FC,fragmentShader:OC}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Zn;_.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ln(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gv;let u=this.type;this.render=function(R,C,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const A=t.getRenderTarget(),y=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Qi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const X=u!==hi&&this.type===hi,J=u===hi&&this.type!==hi;for(let te=0,Q=R.length;te<Q;te++){const z=R[te],b=z.shadow;if(b===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(b.autoUpdate===!1&&b.needsUpdate===!1)continue;r.copy(b.mapSize);const Y=b.getFrameExtents();if(r.multiply(Y),s.copy(b.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/Y.x),r.x=s.x*Y.x,b.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/Y.y),r.y=s.y*Y.y,b.mapSize.y=s.y)),b.map===null||X===!0||J===!0){const ee=this.type!==hi?{minFilter:Dn,magFilter:Dn}:{};b.map!==null&&b.map.dispose(),b.map=new kr(r.x,r.y,ee),b.map.texture.name=z.name+".shadowMap",b.camera.updateProjectionMatrix()}t.setRenderTarget(b.map),t.clear();const W=b.getViewportCount();for(let ee=0;ee<W;ee++){const ue=b.getViewport(ee);a.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),H.viewport(a),b.updateMatrices(z,ee),i=b.getFrustum(),M(C,L,b.camera,z,this.type)}b.isPointLightShadow!==!0&&this.type===hi&&g(b,L),b.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(A,y,I)};function g(R,C){const L=e.update(x);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new kr(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(C,null,L,f,x,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(C,null,L,m,x,null)}function v(R,C,L,A){let y=null;const I=L.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(I!==void 0)y=I;else if(y=L.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=y.uuid,X=C.uuid;let J=c[H];J===void 0&&(J={},c[H]=J);let te=J[X];te===void 0&&(te=y.clone(),J[X]=te,C.addEventListener("dispose",N)),y=te}if(y.visible=C.visible,y.wireframe=C.wireframe,A===hi?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:h[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const H=t.properties.get(y);H.light=L}return y}function M(R,C,L,A,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===hi)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,R.matrixWorld);const X=e.update(R),J=R.material;if(Array.isArray(J)){const te=X.groups;for(let Q=0,z=te.length;Q<z;Q++){const b=te[Q],Y=J[b.materialIndex];if(Y&&Y.visible){const W=v(R,Y,A,y);R.onBeforeShadow(t,R,C,L,X,W,b),t.renderBufferDirect(L,null,X,W,R,b),R.onAfterShadow(t,R,C,L,X,W,b)}}}else if(J.visible){const te=v(R,J,A,y);R.onBeforeShadow(t,R,C,L,X,te,null),t.renderBufferDirect(L,null,X,te,R,null),R.onAfterShadow(t,R,C,L,X,te,null)}}const H=R.children;for(let X=0,J=H.length;X<J;X++)M(H[X],C,L,A,y)}function N(R){R.target.removeEventListener("dispose",N);for(const L in c){const A=c[L],y=R.target.uuid;y in A&&(A[y].dispose(),delete A[y])}}}function zC(t){function e(){let w=!1;const U=new bt;let O=null;const k=new bt(0,0,0,0);return{setMask:function($){O!==$&&!w&&(t.colorMask($,$,$,$),O=$)},setLocked:function($){w=$},setClear:function($,se,Ee,Pe,Qe){Qe===!0&&($*=Pe,se*=Pe,Ee*=Pe),U.set($,se,Ee,Pe),k.equals(U)===!1&&(t.clearColor($,se,Ee,Pe),k.copy(U))},reset:function(){w=!1,O=null,k.set(-1,0,0,0)}}}function n(){let w=!1,U=null,O=null,k=null;return{setTest:function($){$?fe(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function($){U!==$&&!w&&(t.depthMask($),U=$)},setFunc:function($){if(O!==$){switch($){case pE:t.depthFunc(t.NEVER);break;case mE:t.depthFunc(t.ALWAYS);break;case gE:t.depthFunc(t.LESS);break;case Vl:t.depthFunc(t.LEQUAL);break;case vE:t.depthFunc(t.EQUAL);break;case _E:t.depthFunc(t.GEQUAL);break;case xE:t.depthFunc(t.GREATER);break;case yE:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}O=$}},setLocked:function($){w=$},setClear:function($){k!==$&&(t.clearDepth($),k=$)},reset:function(){w=!1,U=null,O=null,k=null}}}function i(){let w=!1,U=null,O=null,k=null,$=null,se=null,Ee=null,Pe=null,Qe=null;return{setTest:function(Ve){w||(Ve?fe(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(Ve){U!==Ve&&!w&&(t.stencilMask(Ve),U=Ve)},setFunc:function(Ve,_t,ot){(O!==Ve||k!==_t||$!==ot)&&(t.stencilFunc(Ve,_t,ot),O=Ve,k=_t,$=ot)},setOp:function(Ve,_t,ot){(se!==Ve||Ee!==_t||Pe!==ot)&&(t.stencilOp(Ve,_t,ot),se=Ve,Ee=_t,Pe=ot)},setLocked:function(Ve){w=Ve},setClear:function(Ve){Qe!==Ve&&(t.clearStencil(Ve),Qe=Ve)},reset:function(){w=!1,U=null,O=null,k=null,$=null,se=null,Ee=null,Pe=null,Qe=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],m=null,_=!1,x=null,p=null,u=null,g=null,v=null,M=null,N=null,R=new qe(0,0,0),C=0,L=!1,A=null,y=null,I=null,H=null,X=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,Q=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(z)[1]),te=Q>=1):z.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),te=Q>=2);let b=null,Y={};const W=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),ue=new bt().fromArray(W),Oe=new bt().fromArray(ee);function j(w,U,O,k){const $=new Uint8Array(4),se=t.createTexture();t.bindTexture(w,se),t.texParameteri(w,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(w,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<O;Ee++)w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY?t.texImage3D(U,0,t.RGBA,1,1,k,0,t.RGBA,t.UNSIGNED_BYTE,$):t.texImage2D(U+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,$);return se}const ne={};ne[t.TEXTURE_2D]=j(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=j(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=j(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=j(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),fe(t.DEPTH_TEST),s.setFunc(Vl),$e(!1),ve(Kp),fe(t.CULL_FACE),st(Qi);function fe(w){c[w]!==!0&&(t.enable(w),c[w]=!0)}function he(w){c[w]!==!1&&(t.disable(w),c[w]=!1)}function Ae(w,U){return d[w]!==U?(t.bindFramebuffer(w,U),d[w]=U,w===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=U),w===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=U),!0):!1}function ke(w,U){let O=f,k=!1;if(w){O=h.get(U),O===void 0&&(O=[],h.set(U,O));const $=w.textures;if(O.length!==$.length||O[0]!==t.COLOR_ATTACHMENT0){for(let se=0,Ee=$.length;se<Ee;se++)O[se]=t.COLOR_ATTACHMENT0+se;O.length=$.length,k=!0}}else O[0]!==t.BACK&&(O[0]=t.BACK,k=!0);k&&t.drawBuffers(O)}function De(w){return m!==w?(t.useProgram(w),m=w,!0):!1}const Ye={[Sr]:t.FUNC_ADD,[ZM]:t.FUNC_SUBTRACT,[QM]:t.FUNC_REVERSE_SUBTRACT};Ye[JM]=t.MIN,Ye[eE]=t.MAX;const D={[tE]:t.ZERO,[nE]:t.ONE,[iE]:t.SRC_COLOR,[Rd]:t.SRC_ALPHA,[cE]:t.SRC_ALPHA_SATURATE,[oE]:t.DST_COLOR,[sE]:t.DST_ALPHA,[rE]:t.ONE_MINUS_SRC_COLOR,[Pd]:t.ONE_MINUS_SRC_ALPHA,[lE]:t.ONE_MINUS_DST_COLOR,[aE]:t.ONE_MINUS_DST_ALPHA,[uE]:t.CONSTANT_COLOR,[dE]:t.ONE_MINUS_CONSTANT_COLOR,[fE]:t.CONSTANT_ALPHA,[hE]:t.ONE_MINUS_CONSTANT_ALPHA};function st(w,U,O,k,$,se,Ee,Pe,Qe,Ve){if(w===Qi){_===!0&&(he(t.BLEND),_=!1);return}if(_===!1&&(fe(t.BLEND),_=!0),w!==KM){if(w!==x||Ve!==L){if((p!==Sr||v!==Sr)&&(t.blendEquation(t.FUNC_ADD),p=Sr,v=Sr),Ve)switch(w){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zp:t.blendFunc(t.ONE,t.ONE);break;case Qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Zp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Qp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Jp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}u=null,g=null,M=null,N=null,R.set(0,0,0),C=0,x=w,L=Ve}return}$=$||U,se=se||O,Ee=Ee||k,(U!==p||$!==v)&&(t.blendEquationSeparate(Ye[U],Ye[$]),p=U,v=$),(O!==u||k!==g||se!==M||Ee!==N)&&(t.blendFuncSeparate(D[O],D[k],D[se],D[Ee]),u=O,g=k,M=se,N=Ee),(Pe.equals(R)===!1||Qe!==C)&&(t.blendColor(Pe.r,Pe.g,Pe.b,Qe),R.copy(Pe),C=Qe),x=w,L=!1}function Ke(w,U){w.side===ni?he(t.CULL_FACE):fe(t.CULL_FACE);let O=w.side===fn;U&&(O=!O),$e(O),w.blending===Ns&&w.transparent===!1?st(Qi):st(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),s.setFunc(w.depthFunc),s.setTest(w.depthTest),s.setMask(w.depthWrite),r.setMask(w.colorWrite);const k=w.stencilWrite;a.setTest(k),k&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Ie(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function $e(w){A!==w&&(w?t.frontFace(t.CW):t.frontFace(t.CCW),A=w)}function ve(w){w!==$M?(fe(t.CULL_FACE),w!==y&&(w===Kp?t.cullFace(t.BACK):w===qM?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),y=w}function ct(w){w!==I&&(te&&t.lineWidth(w),I=w)}function Ie(w,U,O){w?(fe(t.POLYGON_OFFSET_FILL),(H!==U||X!==O)&&(t.polygonOffset(U,O),H=U,X=O)):he(t.POLYGON_OFFSET_FILL)}function Le(w){w?fe(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function P(w){w===void 0&&(w=t.TEXTURE0+J-1),b!==w&&(t.activeTexture(w),b=w)}function E(w,U,O){O===void 0&&(b===null?O=t.TEXTURE0+J-1:O=b);let k=Y[O];k===void 0&&(k={type:void 0,texture:void 0},Y[O]=k),(k.type!==w||k.texture!==U)&&(b!==O&&(t.activeTexture(O),b=O),t.bindTexture(w,U||ne[w]),k.type=w,k.texture=U)}function K(){const w=Y[b];w!==void 0&&w.type!==void 0&&(t.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function re(){try{t.compressedTexImage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ie(){try{t.texSubImage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ze(){try{t.texStorage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function le(){try{t.texStorage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function We(){try{t.texImage3D.apply(t,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ce(w){ue.equals(w)===!1&&(t.scissor(w.x,w.y,w.z,w.w),ue.copy(w))}function ye(w){Oe.equals(w)===!1&&(t.viewport(w.x,w.y,w.z,w.w),Oe.copy(w))}function Ue(w,U){let O=l.get(U);O===void 0&&(O=new WeakMap,l.set(U,O));let k=O.get(w);k===void 0&&(k=t.getUniformBlockIndex(U,w.name),O.set(w,k))}function Be(w,U){const k=l.get(U).get(w);o.get(U)!==k&&(t.uniformBlockBinding(U,k,w.__bindingPointIndex),o.set(U,k))}function at(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},b=null,Y={},d={},h=new WeakMap,f=[],m=null,_=!1,x=null,p=null,u=null,g=null,v=null,M=null,N=null,R=new qe(0,0,0),C=0,L=!1,A=null,y=null,I=null,H=null,X=null,ue.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:fe,disable:he,bindFramebuffer:Ae,drawBuffers:ke,useProgram:De,setBlending:st,setMaterial:Ke,setFlipSided:$e,setCullFace:ve,setLineWidth:ct,setPolygonOffset:Ie,setScissorTest:Le,activeTexture:P,bindTexture:E,unbindTexture:K,compressedTexImage2D:re,compressedTexImage3D:oe,texImage2D:ge,texImage3D:We,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:ze,texStorage3D:le,texSubImage2D:ie,texSubImage3D:Te,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:Ce,viewport:ye,reset:at}}function jm(t,e,n,i){const r=BC(i);switch(n){case Kv:return t*e;case Qv:return t*e;case Jv:return t*e*2;case e_:return t*e/r.components*r.byteLength;case fh:return t*e/r.components*r.byteLength;case t_:return t*e*2/r.components*r.byteLength;case hh:return t*e*2/r.components*r.byteLength;case Zv:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case ph:return t*e*4/r.components*r.byteLength;case ul:case dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fl:case hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fd:case kd:return Math.max(t,16)*Math.max(e,8)/4;case Ud:case Od:return Math.max(t,8)*Math.max(e,8)/2;case zd:case Bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case jd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case $d:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Kd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Qd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ef:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case tf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case pl:case nf:case rf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case n_:case sf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case af:case of:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function BC(t){switch(t){case Ti:case Yv:return{byteLength:1,components:1};case Ka:case $v:case ro:return{byteLength:2,components:1};case uh:case dh:return{byteLength:2,components:4};case Or:case ch:case _i:return{byteLength:4,components:1};case qv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function VC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new je,d=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,E){return m?new OffscreenCanvas(P,E):Xl("canvas")}function x(P,E,K){let re=1;const oe=Le(P);if((oe.width>K||oe.height>K)&&(re=K/Math.max(oe.width,oe.height)),re<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ie=Math.floor(re*oe.width),Te=Math.floor(re*oe.height);h===void 0&&(h=_(ie,Te));const pe=E?_(ie,Te):h;return pe.width=ie,pe.height=Te,pe.getContext("2d").drawImage(P,0,0,ie,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ie+"x"+Te+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function p(P){return P.generateMipmaps&&P.minFilter!==Dn&&P.minFilter!==Xn}function u(P){t.generateMipmap(P)}function g(P,E,K,re,oe=!1){if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ie=E;if(E===t.RED&&(K===t.FLOAT&&(ie=t.R32F),K===t.HALF_FLOAT&&(ie=t.R16F),K===t.UNSIGNED_BYTE&&(ie=t.R8)),E===t.RED_INTEGER&&(K===t.UNSIGNED_BYTE&&(ie=t.R8UI),K===t.UNSIGNED_SHORT&&(ie=t.R16UI),K===t.UNSIGNED_INT&&(ie=t.R32UI),K===t.BYTE&&(ie=t.R8I),K===t.SHORT&&(ie=t.R16I),K===t.INT&&(ie=t.R32I)),E===t.RG&&(K===t.FLOAT&&(ie=t.RG32F),K===t.HALF_FLOAT&&(ie=t.RG16F),K===t.UNSIGNED_BYTE&&(ie=t.RG8)),E===t.RG_INTEGER&&(K===t.UNSIGNED_BYTE&&(ie=t.RG8UI),K===t.UNSIGNED_SHORT&&(ie=t.RG16UI),K===t.UNSIGNED_INT&&(ie=t.RG32UI),K===t.BYTE&&(ie=t.RG8I),K===t.SHORT&&(ie=t.RG16I),K===t.INT&&(ie=t.RG32I)),E===t.RGB&&K===t.UNSIGNED_INT_5_9_9_9_REV&&(ie=t.RGB9_E5),E===t.RGBA){const Te=oe?Hl:it.getTransfer(re);K===t.FLOAT&&(ie=t.RGBA32F),K===t.HALF_FLOAT&&(ie=t.RGBA16F),K===t.UNSIGNED_BYTE&&(ie=Te===dt?t.SRGB8_ALPHA8:t.RGBA8),K===t.UNSIGNED_SHORT_4_4_4_4&&(ie=t.RGBA4),K===t.UNSIGNED_SHORT_5_5_5_1&&(ie=t.RGB5_A1)}return(ie===t.R16F||ie===t.R32F||ie===t.RG16F||ie===t.RG32F||ie===t.RGBA16F||ie===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function v(P,E){let K;return P?E===null||E===Or||E===Ws?K=t.DEPTH24_STENCIL8:E===_i?K=t.DEPTH32F_STENCIL8:E===Ka&&(K=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Or||E===Ws?K=t.DEPTH_COMPONENT24:E===_i?K=t.DEPTH_COMPONENT32F:E===Ka&&(K=t.DEPTH_COMPONENT16),K}function M(P,E){return p(P)===!0||P.isFramebufferTexture&&P.minFilter!==Dn&&P.minFilter!==Xn?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function N(P){const E=P.target;E.removeEventListener("dispose",N),C(E),E.isVideoTexture&&d.delete(E)}function R(P){const E=P.target;E.removeEventListener("dispose",R),A(E)}function C(P){const E=i.get(P);if(E.__webglInit===void 0)return;const K=P.source,re=f.get(K);if(re){const oe=re[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&L(P),Object.keys(re).length===0&&f.delete(K)}i.remove(P)}function L(P){const E=i.get(P);t.deleteTexture(E.__webglTexture);const K=P.source,re=f.get(K);delete re[E.__cacheKey],a.memory.textures--}function A(P){const E=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(E.__webglFramebuffer[re]))for(let oe=0;oe<E.__webglFramebuffer[re].length;oe++)t.deleteFramebuffer(E.__webglFramebuffer[re][oe]);else t.deleteFramebuffer(E.__webglFramebuffer[re]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[re])}else{if(Array.isArray(E.__webglFramebuffer))for(let re=0;re<E.__webglFramebuffer.length;re++)t.deleteFramebuffer(E.__webglFramebuffer[re]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let re=0;re<E.__webglColorRenderbuffer.length;re++)E.__webglColorRenderbuffer[re]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[re]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const K=P.textures;for(let re=0,oe=K.length;re<oe;re++){const ie=i.get(K[re]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(K[re])}i.remove(P)}let y=0;function I(){y=0}function H(){const P=y;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),y+=1,P}function X(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function J(P,E){const K=i.get(P);if(P.isVideoTexture&&ct(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const re=P.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(K,P,E);return}}n.bindTexture(t.TEXTURE_2D,K.__webglTexture,t.TEXTURE0+E)}function te(P,E){const K=i.get(P);if(P.version>0&&K.__version!==P.version){Oe(K,P,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,K.__webglTexture,t.TEXTURE0+E)}function Q(P,E){const K=i.get(P);if(P.version>0&&K.__version!==P.version){Oe(K,P,E);return}n.bindTexture(t.TEXTURE_3D,K.__webglTexture,t.TEXTURE0+E)}function z(P,E){const K=i.get(P);if(P.version>0&&K.__version!==P.version){j(K,P,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture,t.TEXTURE0+E)}const b={[Dd]:t.REPEAT,[Ar]:t.CLAMP_TO_EDGE,[Id]:t.MIRRORED_REPEAT},Y={[Dn]:t.NEAREST,[PE]:t.NEAREST_MIPMAP_NEAREST,[bo]:t.NEAREST_MIPMAP_LINEAR,[Xn]:t.LINEAR,[Jc]:t.LINEAR_MIPMAP_NEAREST,[Cr]:t.LINEAR_MIPMAP_LINEAR},W={[IE]:t.NEVER,[BE]:t.ALWAYS,[UE]:t.LESS,[r_]:t.LEQUAL,[FE]:t.EQUAL,[zE]:t.GEQUAL,[OE]:t.GREATER,[kE]:t.NOTEQUAL};function ee(P,E){if(E.type===_i&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Xn||E.magFilter===Jc||E.magFilter===bo||E.magFilter===Cr||E.minFilter===Xn||E.minFilter===Jc||E.minFilter===bo||E.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,b[E.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,b[E.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,b[E.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Y[E.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Y[E.minFilter]),E.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,W[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Dn||E.minFilter!==bo&&E.minFilter!==Cr||E.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ue(P,E){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",N));const re=E.source;let oe=f.get(re);oe===void 0&&(oe={},f.set(re,oe));const ie=X(E);if(ie!==P.__cacheKey){oe[ie]===void 0&&(oe[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,K=!0),oe[ie].usedTimes++;const Te=oe[P.__cacheKey];Te!==void 0&&(oe[P.__cacheKey].usedTimes--,Te.usedTimes===0&&L(E)),P.__cacheKey=ie,P.__webglTexture=oe[ie].texture}return K}function Oe(P,E,K){let re=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(re=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(re=t.TEXTURE_3D);const oe=ue(P,E),ie=E.source;n.bindTexture(re,P.__webglTexture,t.TEXTURE0+K);const Te=i.get(ie);if(ie.version!==Te.__version||oe===!0){n.activeTexture(t.TEXTURE0+K);const pe=it.getPrimaries(it.workingColorSpace),_e=E.colorSpace===Bi?null:it.getPrimaries(E.colorSpace),ze=E.colorSpace===Bi||pe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);let le=x(E.image,!1,r.maxTextureSize);le=Ie(E,le);const ge=s.convert(E.format,E.colorSpace),We=s.convert(E.type);let Ce=g(E.internalFormat,ge,We,E.colorSpace,E.isVideoTexture);ee(re,E);let ye;const Ue=E.mipmaps,Be=E.isVideoTexture!==!0,at=Te.__version===void 0||oe===!0,w=ie.dataReady,U=M(E,le);if(E.isDepthTexture)Ce=v(E.format===js,E.type),at&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Ce,le.width,le.height):n.texImage2D(t.TEXTURE_2D,0,Ce,le.width,le.height,0,ge,We,null));else if(E.isDataTexture)if(Ue.length>0){Be&&at&&n.texStorage2D(t.TEXTURE_2D,U,Ce,Ue[0].width,Ue[0].height);for(let O=0,k=Ue.length;O<k;O++)ye=Ue[O],Be?w&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,ye.width,ye.height,ge,We,ye.data):n.texImage2D(t.TEXTURE_2D,O,Ce,ye.width,ye.height,0,ge,We,ye.data);E.generateMipmaps=!1}else Be?(at&&n.texStorage2D(t.TEXTURE_2D,U,Ce,le.width,le.height),w&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le.width,le.height,ge,We,le.data)):n.texImage2D(t.TEXTURE_2D,0,Ce,le.width,le.height,0,ge,We,le.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,U,Ce,Ue[0].width,Ue[0].height,le.depth);for(let O=0,k=Ue.length;O<k;O++)if(ye=Ue[O],E.format!==Yn)if(ge!==null)if(Be){if(w)if(E.layerUpdates.size>0){const $=jm(ye.width,ye.height,E.format,E.type);for(const se of E.layerUpdates){const Ee=ye.data.subarray(se*$/ye.data.BYTES_PER_ELEMENT,(se+1)*$/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,se,ye.width,ye.height,1,ge,Ee,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,0,ye.width,ye.height,le.depth,ge,ye.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,O,Ce,ye.width,ye.height,le.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?w&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,0,ye.width,ye.height,le.depth,ge,We,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,O,Ce,ye.width,ye.height,le.depth,0,ge,We,ye.data)}else{Be&&at&&n.texStorage2D(t.TEXTURE_2D,U,Ce,Ue[0].width,Ue[0].height);for(let O=0,k=Ue.length;O<k;O++)ye=Ue[O],E.format!==Yn?ge!==null?Be?w&&n.compressedTexSubImage2D(t.TEXTURE_2D,O,0,0,ye.width,ye.height,ge,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,O,Ce,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?w&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,ye.width,ye.height,ge,We,ye.data):n.texImage2D(t.TEXTURE_2D,O,Ce,ye.width,ye.height,0,ge,We,ye.data)}else if(E.isDataArrayTexture)if(Be){if(at&&n.texStorage3D(t.TEXTURE_2D_ARRAY,U,Ce,le.width,le.height,le.depth),w)if(E.layerUpdates.size>0){const O=jm(le.width,le.height,E.format,E.type);for(const k of E.layerUpdates){const $=le.data.subarray(k*O/le.data.BYTES_PER_ELEMENT,(k+1)*O/le.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,k,le.width,le.height,1,ge,We,$)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,ge,We,le.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,le.width,le.height,le.depth,0,ge,We,le.data);else if(E.isData3DTexture)Be?(at&&n.texStorage3D(t.TEXTURE_3D,U,Ce,le.width,le.height,le.depth),w&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,ge,We,le.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,le.width,le.height,le.depth,0,ge,We,le.data);else if(E.isFramebufferTexture){if(at)if(Be)n.texStorage2D(t.TEXTURE_2D,U,Ce,le.width,le.height);else{let O=le.width,k=le.height;for(let $=0;$<U;$++)n.texImage2D(t.TEXTURE_2D,$,Ce,O,k,0,ge,We,null),O>>=1,k>>=1}}else if(Ue.length>0){if(Be&&at){const O=Le(Ue[0]);n.texStorage2D(t.TEXTURE_2D,U,Ce,O.width,O.height)}for(let O=0,k=Ue.length;O<k;O++)ye=Ue[O],Be?w&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,ge,We,ye):n.texImage2D(t.TEXTURE_2D,O,Ce,ge,We,ye);E.generateMipmaps=!1}else if(Be){if(at){const O=Le(le);n.texStorage2D(t.TEXTURE_2D,U,Ce,O.width,O.height)}w&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,We,le)}else n.texImage2D(t.TEXTURE_2D,0,Ce,ge,We,le);p(E)&&u(re),Te.__version=ie.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function j(P,E,K){if(E.image.length!==6)return;const re=ue(P,E),oe=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+K);const ie=i.get(oe);if(oe.version!==ie.__version||re===!0){n.activeTexture(t.TEXTURE0+K);const Te=it.getPrimaries(it.workingColorSpace),pe=E.colorSpace===Bi?null:it.getPrimaries(E.colorSpace),_e=E.colorSpace===Bi||Te===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ze=E.isCompressedTexture||E.image[0].isCompressedTexture,le=E.image[0]&&E.image[0].isDataTexture,ge=[];for(let k=0;k<6;k++)!ze&&!le?ge[k]=x(E.image[k],!0,r.maxCubemapSize):ge[k]=le?E.image[k].image:E.image[k],ge[k]=Ie(E,ge[k]);const We=ge[0],Ce=s.convert(E.format,E.colorSpace),ye=s.convert(E.type),Ue=g(E.internalFormat,Ce,ye,E.colorSpace),Be=E.isVideoTexture!==!0,at=ie.__version===void 0||re===!0,w=oe.dataReady;let U=M(E,We);ee(t.TEXTURE_CUBE_MAP,E);let O;if(ze){Be&&at&&n.texStorage2D(t.TEXTURE_CUBE_MAP,U,Ue,We.width,We.height);for(let k=0;k<6;k++){O=ge[k].mipmaps;for(let $=0;$<O.length;$++){const se=O[$];E.format!==Yn?Ce!==null?Be?w&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$,0,0,se.width,se.height,Ce,se.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$,Ue,se.width,se.height,0,se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$,0,0,se.width,se.height,Ce,ye,se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$,Ue,se.width,se.height,0,Ce,ye,se.data)}}}else{if(O=E.mipmaps,Be&&at){O.length>0&&U++;const k=Le(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,U,Ue,k.width,k.height)}for(let k=0;k<6;k++)if(le){Be?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,ge[k].width,ge[k].height,Ce,ye,ge[k].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ue,ge[k].width,ge[k].height,0,Ce,ye,ge[k].data);for(let $=0;$<O.length;$++){const Ee=O[$].image[k].image;Be?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$+1,0,0,Ee.width,Ee.height,Ce,ye,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$+1,Ue,Ee.width,Ee.height,0,Ce,ye,Ee.data)}}else{Be?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,0,0,Ce,ye,ge[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0,Ue,Ce,ye,ge[k]);for(let $=0;$<O.length;$++){const se=O[$];Be?w&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$+1,0,0,Ce,ye,se.image[k]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+k,$+1,Ue,Ce,ye,se.image[k])}}}p(E)&&u(t.TEXTURE_CUBE_MAP),ie.__version=oe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ne(P,E,K,re,oe,ie){const Te=s.convert(K.format,K.colorSpace),pe=s.convert(K.type),_e=g(K.internalFormat,Te,pe,K.colorSpace);if(!i.get(E).__hasExternalTextures){const le=Math.max(1,E.width>>ie),ge=Math.max(1,E.height>>ie);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ie,_e,le,ge,E.depth,0,Te,pe,null):n.texImage2D(oe,ie,_e,le,ge,0,Te,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),ve(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,re,oe,i.get(K).__webglTexture,0,$e(E)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,re,oe,i.get(K).__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(P,E,K){if(t.bindRenderbuffer(t.RENDERBUFFER,P),E.depthBuffer){const re=E.depthTexture,oe=re&&re.isDepthTexture?re.type:null,ie=v(E.stencilBuffer,oe),Te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=$e(E);ve(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,ie,E.width,E.height):K?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,ie,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ie,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,P)}else{const re=E.textures;for(let oe=0;oe<re.length;oe++){const ie=re[oe],Te=s.convert(ie.format,ie.colorSpace),pe=s.convert(ie.type),_e=g(ie.internalFormat,Te,pe,ie.colorSpace),ze=$e(E);K&&ve(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ze,_e,E.width,E.height):ve(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ze,_e,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,_e,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),J(E.depthTexture,0);const re=i.get(E.depthTexture).__webglTexture,oe=$e(E);if(E.depthTexture.format===Ds)ve(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,re,0);else if(E.depthTexture.format===js)ve(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ae(P){const E=i.get(P),K=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");he(E.__webglFramebuffer,P)}else if(K){E.__webglDepthbuffer=[];for(let re=0;re<6;re++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[re]),E.__webglDepthbuffer[re]=t.createRenderbuffer(),fe(E.__webglDepthbuffer[re],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),fe(E.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(P,E,K){const re=i.get(P);E!==void 0&&ne(re.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),K!==void 0&&Ae(P)}function De(P){const E=P.texture,K=i.get(P),re=i.get(E);P.addEventListener("dispose",R);const oe=P.textures,ie=P.isWebGLCubeRenderTarget===!0,Te=oe.length>1;if(Te||(re.__webglTexture===void 0&&(re.__webglTexture=t.createTexture()),re.__version=E.version,a.memory.textures++),ie){K.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer[pe]=[];for(let _e=0;_e<E.mipmaps.length;_e++)K.__webglFramebuffer[pe][_e]=t.createFramebuffer()}else K.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){K.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)K.__webglFramebuffer[pe]=t.createFramebuffer()}else K.__webglFramebuffer=t.createFramebuffer();if(Te)for(let pe=0,_e=oe.length;pe<_e;pe++){const ze=i.get(oe[pe]);ze.__webglTexture===void 0&&(ze.__webglTexture=t.createTexture(),a.memory.textures++)}if(P.samples>0&&ve(P)===!1){K.__webglMultisampledFramebuffer=t.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let pe=0;pe<oe.length;pe++){const _e=oe[pe];K.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,K.__webglColorRenderbuffer[pe]);const ze=s.convert(_e.format,_e.colorSpace),le=s.convert(_e.type),ge=g(_e.internalFormat,ze,le,_e.colorSpace,P.isXRRenderTarget===!0),We=$e(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,We,ge,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,K.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(K.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,re.__webglTexture),ee(t.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)ne(K.__webglFramebuffer[pe][_e],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else ne(K.__webglFramebuffer[pe],P,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let pe=0,_e=oe.length;pe<_e;pe++){const ze=oe[pe],le=i.get(ze);n.bindTexture(t.TEXTURE_2D,le.__webglTexture),ee(t.TEXTURE_2D,ze),ne(K.__webglFramebuffer,P,ze,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),p(ze)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,re.__webglTexture),ee(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)ne(K.__webglFramebuffer[_e],P,E,t.COLOR_ATTACHMENT0,pe,_e);else ne(K.__webglFramebuffer,P,E,t.COLOR_ATTACHMENT0,pe,0);p(E)&&u(pe),n.unbindTexture()}P.depthBuffer&&Ae(P)}function Ye(P){const E=P.textures;for(let K=0,re=E.length;K<re;K++){const oe=E[K];if(p(oe)){const ie=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(oe).__webglTexture;n.bindTexture(ie,Te),u(ie),n.unbindTexture()}}}const D=[],st=[];function Ke(P){if(P.samples>0){if(ve(P)===!1){const E=P.textures,K=P.width,re=P.height;let oe=t.COLOR_BUFFER_BIT;const ie=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(P),pe=E.length>1;if(pe)for(let _e=0;_e<E.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let _e=0;_e<E.length;_e++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const ze=i.get(E[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ze,0)}t.blitFramebuffer(0,0,K,re,0,0,K,re,oe,t.NEAREST),l===!0&&(D.length=0,st.length=0,D.push(t.COLOR_ATTACHMENT0+_e),P.depthBuffer&&P.resolveDepthBuffer===!1&&(D.push(ie),st.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,st)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<E.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Te.__webglColorRenderbuffer[_e]);const ze=i.get(E[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,ze,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const E=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function $e(P){return Math.min(r.maxSamples,P.samples)}function ve(P){const E=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ct(P){const E=a.render.frame;d.get(P)!==E&&(d.set(P,E),P.update())}function Ie(P,E){const K=P.colorSpace,re=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||K!==lr&&K!==Bi&&(it.getTransfer(K)===dt?(re!==Yn||oe!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),E}function Le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=I,this.setTexture2D=J,this.setTexture2DArray=te,this.setTexture3D=Q,this.setTextureCube=z,this.rebindTextures=ke,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ve}function HC(t,e){function n(i,r=Bi){let s;const a=it.getTransfer(r);if(i===Ti)return t.UNSIGNED_BYTE;if(i===uh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===dh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===qv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Yv)return t.BYTE;if(i===$v)return t.SHORT;if(i===Ka)return t.UNSIGNED_SHORT;if(i===ch)return t.INT;if(i===Or)return t.UNSIGNED_INT;if(i===_i)return t.FLOAT;if(i===ro)return t.HALF_FLOAT;if(i===Kv)return t.ALPHA;if(i===Zv)return t.RGB;if(i===Yn)return t.RGBA;if(i===Qv)return t.LUMINANCE;if(i===Jv)return t.LUMINANCE_ALPHA;if(i===Ds)return t.DEPTH_COMPONENT;if(i===js)return t.DEPTH_STENCIL;if(i===e_)return t.RED;if(i===fh)return t.RED_INTEGER;if(i===t_)return t.RG;if(i===hh)return t.RG_INTEGER;if(i===ph)return t.RGBA_INTEGER;if(i===ul||i===dl||i===fl||i===hl)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ul)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ul)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ud||i===Fd||i===Od||i===kd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ud)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zd||i===Bd||i===Vd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===zd||i===Bd)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Vd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Hd||i===Gd||i===Wd||i===jd||i===Xd||i===Yd||i===$d||i===qd||i===Kd||i===Zd||i===Qd||i===Jd||i===ef||i===tf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Hd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Xd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$d)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jd)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ef)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===tf)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pl||i===nf||i===rf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===pl)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===n_||i===sf||i===af||i===of)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===pl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===af)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===of)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ws?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class GC extends Sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bt extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const WC={type:"move"};class Au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(WC)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const jC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XC=`
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

}`;class YC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new hn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new rr({vertexShader:jC,fragmentShader:XC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ln(new ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $C extends Ks{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const x=new YC,p=n.getContextAttributes();let u=null,g=null;const v=[],M=[],N=new je;let R=null;const C=new Sn;C.layers.enable(1),C.viewport=new bt;const L=new Sn;L.layers.enable(2),L.viewport=new bt;const A=[C,L],y=new GC;y.layers.enable(1),y.layers.enable(2);let I=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=v[j];return ne===void 0&&(ne=new Au,v[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=v[j];return ne===void 0&&(ne=new Au,v[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=v[j];return ne===void 0&&(ne=new Au,v[j]=ne),ne.getHandSpace()};function X(j){const ne=M.indexOf(j.inputSource);if(ne===-1)return;const fe=v[ne];fe!==void 0&&(fe.update(j.inputSource,j.frame,c||a),fe.dispatchEvent({type:j.type,data:j.inputSource}))}function J(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",te);for(let j=0;j<v.length;j++){const ne=M[j];ne!==null&&(M[j]=null,v[j].disconnect(ne))}I=null,H=null,x.reset(),e.setRenderTarget(u),m=null,f=null,h=null,r=null,g=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",J),r.addEventListener("inputsourceschange",te),p.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),g=new kr(m.framebufferWidth,m.framebufferHeight,{format:Yn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,fe=null,he=null;p.depth&&(he=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=p.stencil?js:Ds,fe=p.stencil?Ws:Or);const Ae={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Ae),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),g=new kr(f.textureWidth,f.textureHeight,{format:Yn,type:Ti,depthTexture:new g_(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function te(j){for(let ne=0;ne<j.removed.length;ne++){const fe=j.removed[ne],he=M.indexOf(fe);he>=0&&(M[he]=null,v[he].disconnect(fe))}for(let ne=0;ne<j.added.length;ne++){const fe=j.added[ne];let he=M.indexOf(fe);if(he===-1){for(let ke=0;ke<v.length;ke++)if(ke>=M.length){M.push(fe),he=ke;break}else if(M[ke]===null){M[ke]=fe,he=ke;break}if(he===-1)break}const Ae=v[he];Ae&&Ae.connect(fe)}}const Q=new G,z=new G;function b(j,ne,fe){Q.setFromMatrixPosition(ne.matrixWorld),z.setFromMatrixPosition(fe.matrixWorld);const he=Q.distanceTo(z),Ae=ne.projectionMatrix.elements,ke=fe.projectionMatrix.elements,De=Ae[14]/(Ae[10]-1),Ye=Ae[14]/(Ae[10]+1),D=(Ae[9]+1)/Ae[5],st=(Ae[9]-1)/Ae[5],Ke=(Ae[8]-1)/Ae[0],$e=(ke[8]+1)/ke[0],ve=De*Ke,ct=De*$e,Ie=he/(-Ke+$e),Le=Ie*-Ke;ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Le),j.translateZ(Ie),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const P=De+Ie,E=Ye+Ie,K=ve-Le,re=ct+(he-Le),oe=D*Ye/E*P,ie=st*Ye/E*P;j.projectionMatrix.makePerspective(K,re,oe,ie,P,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function Y(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;x.texture!==null&&(j.near=x.depthNear,j.far=x.depthFar),y.near=L.near=C.near=j.near,y.far=L.far=C.far=j.far,(I!==y.near||H!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),I=y.near,H=y.far,C.near=I,C.far=H,L.near=I,L.far=H,C.updateProjectionMatrix(),L.updateProjectionMatrix(),j.updateProjectionMatrix());const ne=j.parent,fe=y.cameras;Y(y,ne);for(let he=0;he<fe.length;he++)Y(fe[he],ne);fe.length===2?b(y,C,L):y.projectionMatrix.copy(C.projectionMatrix),W(j,y,ne)};function W(j,ne,fe){fe===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(fe.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=lf*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let ee=null;function ue(j,ne){if(d=ne.getViewerPose(c||a),_=ne,d!==null){const fe=d.views;m!==null&&(e.setRenderTargetFramebuffer(g,m.framebuffer),e.setRenderTarget(g));let he=!1;fe.length!==y.cameras.length&&(y.cameras.length=0,he=!0);for(let ke=0;ke<fe.length;ke++){const De=fe[ke];let Ye=null;if(m!==null)Ye=m.getViewport(De);else{const st=h.getViewSubImage(f,De);Ye=st.viewport,ke===0&&(e.setRenderTargetTextures(g,st.colorTexture,f.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(g))}let D=A[ke];D===void 0&&(D=new Sn,D.layers.enable(ke),D.viewport=new bt,A[ke]=D),D.matrix.fromArray(De.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(De.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),ke===0&&(y.matrix.copy(D.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),he===!0&&y.cameras.push(D)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const ke=h.getDepthInformation(fe[0]);ke&&ke.isValid&&ke.texture&&x.init(e,ke,r.renderState)}}for(let fe=0;fe<v.length;fe++){const he=M[fe],Ae=v[fe];he!==null&&Ae!==void 0&&Ae.update(he,ne,c||a)}ee&&ee(j,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Oe=new p_;Oe.setAnimationLoop(ue),this.setAnimationLoop=function(j){ee=j},this.dispose=function(){}}}const gr=new On,qC=new pt;function KC(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,d_(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,g,v,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,M)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),x(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,g,v):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===fn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===fn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const g=e.get(u),v=g.envMap,M=g.envMapRotation;v&&(p.envMap.value=v,gr.copy(M),gr.x*=-1,gr.y*=-1,gr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),p.envMapRotation.value.setFromMatrix4(qC.makeRotationFromEuler(gr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,g,v){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*g,p.scale.value=v*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,g){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===fn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=g.texture,p.transmissionSamplerSize.value.set(g.width,g.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const g=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(g.matrixWorld),p.nearDistance.value=g.shadow.camera.near,p.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const M=v.program;i.uniformBlockBinding(g,M)}function c(g,v){let M=r[g.id];M===void 0&&(_(g),M=d(g),r[g.id]=M,g.addEventListener("dispose",p));const N=v.program;i.updateUBOMapping(g,N);const R=e.render.frame;s[g.id]!==R&&(f(g),s[g.id]=R)}function d(g){const v=h();g.__bindingPointIndex=v;const M=t.createBuffer(),N=g.__size,R=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,N,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,M),M}function h(){for(let g=0;g<o;g++)if(a.indexOf(g)===-1)return a.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(g){const v=r[g.id],M=g.uniforms,N=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let R=0,C=M.length;R<C;R++){const L=Array.isArray(M[R])?M[R]:[M[R]];for(let A=0,y=L.length;A<y;A++){const I=L[A];if(m(I,R,A,N)===!0){const H=I.__offset,X=Array.isArray(I.value)?I.value:[I.value];let J=0;for(let te=0;te<X.length;te++){const Q=X[te],z=x(Q);typeof Q=="number"||typeof Q=="boolean"?(I.__data[0]=Q,t.bufferSubData(t.UNIFORM_BUFFER,H+J,I.__data)):Q.isMatrix3?(I.__data[0]=Q.elements[0],I.__data[1]=Q.elements[1],I.__data[2]=Q.elements[2],I.__data[3]=0,I.__data[4]=Q.elements[3],I.__data[5]=Q.elements[4],I.__data[6]=Q.elements[5],I.__data[7]=0,I.__data[8]=Q.elements[6],I.__data[9]=Q.elements[7],I.__data[10]=Q.elements[8],I.__data[11]=0):(Q.toArray(I.__data,J),J+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(g,v,M,N){const R=g.value,C=v+"_"+M;if(N[C]===void 0)return typeof R=="number"||typeof R=="boolean"?N[C]=R:N[C]=R.clone(),!0;{const L=N[C];if(typeof R=="number"||typeof R=="boolean"){if(L!==R)return N[C]=R,!0}else if(L.equals(R)===!1)return L.copy(R),!0}return!1}function _(g){const v=g.uniforms;let M=0;const N=16;for(let C=0,L=v.length;C<L;C++){const A=Array.isArray(v[C])?v[C]:[v[C]];for(let y=0,I=A.length;y<I;y++){const H=A[y],X=Array.isArray(H.value)?H.value:[H.value];for(let J=0,te=X.length;J<te;J++){const Q=X[J],z=x(Q),b=M%N,Y=b%z.boundary,W=b+Y;M+=Y,W!==0&&N-W<z.storage&&(M+=N-W),H.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=z.storage}}}const R=M%N;return R>0&&(M+=N-R),g.__size=M,g.__cache={},this}function x(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function p(g){const v=g.target;v.removeEventListener("dispose",p);const M=a.indexOf(v.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const g in r)t.deleteBuffer(r[g]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class S_{constructor(e={}){const{canvas:n=HE(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,p=null;const u=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=Ji,this.toneMappingExposure=1;const v=this;let M=!1,N=0,R=0,C=null,L=-1,A=null;const y=new bt,I=new bt;let H=null;const X=new qe(0);let J=0,te=n.width,Q=n.height,z=1,b=null,Y=null;const W=new bt(0,0,te,Q),ee=new bt(0,0,te,Q);let ue=!1;const Oe=new xh;let j=!1,ne=!1;const fe=new pt,he=new G,Ae=new bt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function Ye(){return C===null?z:1}let D=i;function st(T,B){return n.getContext(T,B)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${lh}`),n.addEventListener("webglcontextlost",O,!1),n.addEventListener("webglcontextrestored",k,!1),n.addEventListener("webglcontextcreationerror",$,!1),D===null){const B="webgl2";if(D=st(B,T),D===null)throw st(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Ke,$e,ve,ct,Ie,Le,P,E,K,re,oe,ie,Te,pe,_e,ze,le,ge,We,Ce,ye,Ue,Be,at;function w(){Ke=new rA(D),Ke.init(),Ue=new HC(D,Ke),$e=new QT(D,Ke,e,Ue),ve=new zC(D),ct=new oA(D),Ie=new TC,Le=new VC(D,Ke,ve,Ie,$e,Ue,ct),P=new eA(v),E=new iA(v),K=new p1(D),Be=new KT(D,K),re=new sA(D,K,ct,Be),oe=new cA(D,re,K,ct),We=new lA(D,$e,Le),ze=new JT(Ie),ie=new wC(v,P,E,Ke,$e,Be,ze),Te=new KC(v,Ie),pe=new CC,_e=new DC(Ke),ge=new qT(v,P,E,ve,oe,f,l),le=new kC(v,oe,$e),at=new ZC(D,ct,$e,ve),Ce=new ZT(D,Ke,ct),ye=new aA(D,Ke,ct),ct.programs=ie.programs,v.capabilities=$e,v.extensions=Ke,v.properties=Ie,v.renderLists=pe,v.shadowMap=le,v.state=ve,v.info=ct}w();const U=new $C(v,D);this.xr=U,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const T=Ke.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Ke.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(te,Q,!1))},this.getSize=function(T){return T.set(te,Q)},this.setSize=function(T,B,q=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,Q=B,n.width=Math.floor(T*z),n.height=Math.floor(B*z),q===!0&&(n.style.width=T+"px",n.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(te*z,Q*z).floor()},this.setDrawingBufferSize=function(T,B,q){te=T,Q=B,z=q,n.width=Math.floor(T*q),n.height=Math.floor(B*q),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(W)},this.setViewport=function(T,B,q,Z){T.isVector4?W.set(T.x,T.y,T.z,T.w):W.set(T,B,q,Z),ve.viewport(y.copy(W).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(ee)},this.setScissor=function(T,B,q,Z){T.isVector4?ee.set(T.x,T.y,T.z,T.w):ee.set(T,B,q,Z),ve.scissor(I.copy(ee).multiplyScalar(z).round())},this.getScissorTest=function(){return ue},this.setScissorTest=function(T){ve.setScissorTest(ue=T)},this.setOpaqueSort=function(T){b=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor.apply(ge,arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha.apply(ge,arguments)},this.clear=function(T=!0,B=!0,q=!0){let Z=0;if(T){let V=!1;if(C!==null){const ce=C.texture.format;V=ce===ph||ce===hh||ce===fh}if(V){const ce=C.texture.type,me=ce===Ti||ce===Or||ce===Ka||ce===Ws||ce===uh||ce===dh,Se=ge.getClearColor(),Me=ge.getClearAlpha(),Ne=Se.r,Fe=Se.g,be=Se.b;me?(m[0]=Ne,m[1]=Fe,m[2]=be,m[3]=Me,D.clearBufferuiv(D.COLOR,0,m)):(_[0]=Ne,_[1]=Fe,_[2]=be,_[3]=Me,D.clearBufferiv(D.COLOR,0,_))}else Z|=D.COLOR_BUFFER_BIT}B&&(Z|=D.DEPTH_BUFFER_BIT),q&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",O,!1),n.removeEventListener("webglcontextrestored",k,!1),n.removeEventListener("webglcontextcreationerror",$,!1),pe.dispose(),_e.dispose(),Ie.dispose(),P.dispose(),E.dispose(),oe.dispose(),Be.dispose(),at.dispose(),ie.dispose(),U.dispose(),U.removeEventListener("sessionstart",ot),U.removeEventListener("sessionend",pn),jt.stop()};function O(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function k(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const T=ct.autoReset,B=le.enabled,q=le.autoUpdate,Z=le.needsUpdate,V=le.type;w(),ct.autoReset=T,le.enabled=B,le.autoUpdate=q,le.needsUpdate=Z,le.type=V}function $(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function se(T){const B=T.target;B.removeEventListener("dispose",se),Ee(B)}function Ee(T){Pe(T),Ie.remove(T)}function Pe(T){const B=Ie.get(T).programs;B!==void 0&&(B.forEach(function(q){ie.releaseProgram(q)}),T.isShaderMaterial&&ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,q,Z,V,ce){B===null&&(B=ke);const me=V.isMesh&&V.matrixWorld.determinant()<0,Se=L_(T,B,q,Z,V);ve.setMaterial(Z,me);let Me=q.index,Ne=1;if(Z.wireframe===!0){if(Me=re.getWireframeAttribute(q),Me===void 0)return;Ne=2}const Fe=q.drawRange,be=q.attributes.position;let et=Fe.start*Ne,xt=(Fe.start+Fe.count)*Ne;ce!==null&&(et=Math.max(et,ce.start*Ne),xt=Math.min(xt,(ce.start+ce.count)*Ne)),Me!==null?(et=Math.max(et,0),xt=Math.min(xt,Me.count)):be!=null&&(et=Math.max(et,0),xt=Math.min(xt,be.count));const yt=xt-et;if(yt<0||yt===1/0)return;Be.setup(V,Z,Se,q,Me);let gn,tt=Ce;if(Me!==null&&(gn=K.get(Me),tt=ye,tt.setIndex(gn)),V.isMesh)Z.wireframe===!0?(ve.setLineWidth(Z.wireframeLinewidth*Ye()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(V.isLine){let we=Z.linewidth;we===void 0&&(we=1),ve.setLineWidth(we*Ye()),V.isLineSegments?tt.setMode(D.LINES):V.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else V.isPoints?tt.setMode(D.POINTS):V.isSprite&&tt.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)tt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const we=V._multiDrawStarts,Ot=V._multiDrawCounts,nt=V._multiDrawCount,kn=Me?K.get(Me).bytesPerElement:1,Yr=Ie.get(Z).currentProgram.getUniforms();for(let vn=0;vn<nt;vn++)Yr.setValue(D,"_gl_DrawID",vn),tt.render(we[vn]/kn,Ot[vn])}else if(V.isInstancedMesh)tt.renderInstances(et,yt,V.count);else if(q.isInstancedBufferGeometry){const we=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ot=Math.min(q.instanceCount,we);tt.renderInstances(et,yt,Ot)}else tt.render(et,yt)};function Qe(T,B,q){T.transparent===!0&&T.side===ni&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,ur(T,B,q),T.side=ir,T.needsUpdate=!0,ur(T,B,q),T.side=ni):ur(T,B,q)}this.compile=function(T,B,q=null){q===null&&(q=T),p=_e.get(q),p.init(B),g.push(p),q.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==q&&T.traverseVisible(function(V){V.isLight&&V.layers.test(B.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Z=new Set;return T.traverse(function(V){const ce=V.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const Se=ce[me];Qe(Se,q,V),Z.add(Se)}else Qe(ce,q,V),Z.add(ce)}),g.pop(),p=null,Z},this.compileAsync=function(T,B,q=null){const Z=this.compile(T,B,q);return new Promise(V=>{function ce(){if(Z.forEach(function(me){Ie.get(me).currentProgram.isReady()&&Z.delete(me)}),Z.size===0){V(T);return}setTimeout(ce,10)}Ke.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Ve=null;function _t(T){Ve&&Ve(T)}function ot(){jt.stop()}function pn(){jt.start()}const jt=new p_;jt.setAnimationLoop(_t),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(T){Ve=T,U.setAnimationLoop(T),T===null?jt.stop():jt.start()},U.addEventListener("sessionstart",ot),U.addEventListener("sessionend",pn),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(U.cameraAutoUpdate===!0&&U.updateCamera(B),B=U.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,C),p=_e.get(T,g.length),p.init(B),g.push(p),fe.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Oe.setFromProjectionMatrix(fe),ne=this.localClippingEnabled,j=ze.init(this.clippingPlanes,ne),x=pe.get(T,u.length),x.init(),u.push(x),U.enabled===!0&&U.isPresenting===!0){const ce=v.xr.getDepthSensingMesh();ce!==null&&Nt(ce,B,-1/0,v.sortObjects)}Nt(T,B,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(b,Y),De=U.enabled===!1||U.isPresenting===!1||U.hasDepthSensing()===!1,De&&ge.addToRenderList(x,T),this.info.render.frame++,j===!0&&ze.beginShadows();const q=p.state.shadowsArray;le.render(q,T,B),j===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=x.opaque,V=x.transmissive;if(p.setupLights(),B.isArrayCamera){const ce=B.cameras;if(V.length>0)for(let me=0,Se=ce.length;me<Se;me++){const Me=ce[me];Ci(Z,V,T,Me)}De&&ge.render(T);for(let me=0,Se=ce.length;me<Se;me++){const Me=ce[me];mn(x,T,Me,Me.viewport)}}else V.length>0&&Ci(Z,V,T,B),De&&ge.render(T),mn(x,T,B);C!==null&&(Le.updateMultisampleRenderTarget(C),Le.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,B),Be.resetDefaultState(),L=-1,A=null,g.pop(),g.length>0?(p=g[g.length-1],j===!0&&ze.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Nt(T,B,q,Z){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Oe.intersectsSprite(T)){Z&&Ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(fe);const me=oe.update(T),Se=T.material;Se.visible&&x.push(T,me,Se,q,Ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Oe.intersectsObject(T))){const me=oe.update(T),Se=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ae.copy(T.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),Ae.copy(me.boundingSphere.center)),Ae.applyMatrix4(T.matrixWorld).applyMatrix4(fe)),Array.isArray(Se)){const Me=me.groups;for(let Ne=0,Fe=Me.length;Ne<Fe;Ne++){const be=Me[Ne],et=Se[be.materialIndex];et&&et.visible&&x.push(T,me,et,q,Ae.z,be)}}else Se.visible&&x.push(T,me,Se,q,Ae.z,null)}}const ce=T.children;for(let me=0,Se=ce.length;me<Se;me++)Nt(ce[me],B,q,Z)}function mn(T,B,q,Z){const V=T.opaque,ce=T.transmissive,me=T.transparent;p.setupLightsView(q),j===!0&&ze.setGlobalState(v.clippingPlanes,q),Z&&ve.viewport(y.copy(Z)),V.length>0&&Dt(V,B,q),ce.length>0&&Dt(ce,B,q),me.length>0&&Dt(me,B,q),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ci(T,B,q,Z){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new kr(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?ro:Ti,minFilter:Cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ce=p.state.transmissionRenderTarget[Z.id],me=Z.viewport||y;ce.setSize(me.z,me.w);const Se=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(X),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),De&&ge.render(q);const Me=v.toneMapping;v.toneMapping=Ji;const Ne=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),j===!0&&ze.setGlobalState(v.clippingPlanes,Z),Dt(T,q,Z),Le.updateMultisampleRenderTarget(ce),Le.updateRenderTargetMipmap(ce),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let be=0,et=B.length;be<et;be++){const xt=B[be],yt=xt.object,gn=xt.geometry,tt=xt.material,we=xt.group;if(tt.side===ni&&yt.layers.test(Z.layers)){const Ot=tt.side;tt.side=fn,tt.needsUpdate=!0,oo(yt,q,Z,gn,tt,we),tt.side=Ot,tt.needsUpdate=!0,Fe=!0}}Fe===!0&&(Le.updateMultisampleRenderTarget(ce),Le.updateRenderTargetMipmap(ce))}v.setRenderTarget(Se),v.setClearColor(X,J),Ne!==void 0&&(Z.viewport=Ne),v.toneMapping=Me}function Dt(T,B,q){const Z=B.isScene===!0?B.overrideMaterial:null;for(let V=0,ce=T.length;V<ce;V++){const me=T[V],Se=me.object,Me=me.geometry,Ne=Z===null?me.material:Z,Fe=me.group;Se.layers.test(q.layers)&&oo(Se,B,q,Me,Ne,Fe)}}function oo(T,B,q,Z,V,ce){T.onBeforeRender(v,B,q,Z,V,ce),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.transparent===!0&&V.side===ni&&V.forceSinglePass===!1?(V.side=fn,V.needsUpdate=!0,v.renderBufferDirect(q,B,Z,V,T,ce),V.side=ir,V.needsUpdate=!0,v.renderBufferDirect(q,B,Z,V,T,ce),V.side=ni):v.renderBufferDirect(q,B,Z,V,T,ce),T.onAfterRender(v,B,q,Z,V,ce)}function ur(T,B,q){B.isScene!==!0&&(B=ke);const Z=Ie.get(T),V=p.state.lights,ce=p.state.shadowsArray,me=V.state.version,Se=ie.getParameters(T,V.state,ce,B,q),Me=ie.getProgramCacheKey(Se);let Ne=Z.programs;Z.environment=T.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(T.isMeshStandardMaterial?E:P).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",se),Ne=new Map,Z.programs=Ne);let Fe=Ne.get(Me);if(Fe!==void 0){if(Z.currentProgram===Fe&&Z.lightsStateVersion===me)return wh(T,Se),Fe}else Se.uniforms=ie.getUniforms(T),T.onBeforeCompile(Se,v),Fe=ie.acquireProgram(Se,Me),Ne.set(Me,Fe),Z.uniforms=Se.uniforms;const be=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=ze.uniform),wh(T,Se),Z.needsLights=D_(T),Z.lightsStateVersion=me,Z.needsLights&&(be.ambientLightColor.value=V.state.ambient,be.lightProbe.value=V.state.probe,be.directionalLights.value=V.state.directional,be.directionalLightShadows.value=V.state.directionalShadow,be.spotLights.value=V.state.spot,be.spotLightShadows.value=V.state.spotShadow,be.rectAreaLights.value=V.state.rectArea,be.ltc_1.value=V.state.rectAreaLTC1,be.ltc_2.value=V.state.rectAreaLTC2,be.pointLights.value=V.state.point,be.pointLightShadows.value=V.state.pointShadow,be.hemisphereLights.value=V.state.hemi,be.directionalShadowMap.value=V.state.directionalShadowMap,be.directionalShadowMatrix.value=V.state.directionalShadowMatrix,be.spotShadowMap.value=V.state.spotShadowMap,be.spotLightMatrix.value=V.state.spotLightMatrix,be.spotLightMap.value=V.state.spotLightMap,be.pointShadowMap.value=V.state.pointShadowMap,be.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=Fe,Z.uniformsList=null,Fe}function Eh(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=ml.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function wh(T,B){const q=Ie.get(T);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function L_(T,B,q,Z,V){B.isScene!==!0&&(B=ke),Le.resetTextureUnits();const ce=B.fog,me=Z.isMeshStandardMaterial?B.environment:null,Se=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:lr,Me=(Z.isMeshStandardMaterial?E:P).get(Z.envMap||me),Ne=Z.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Fe=!!q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),be=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,xt=!!q.morphAttributes.color;let yt=Ji;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(yt=v.toneMapping);const gn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,tt=gn!==void 0?gn.length:0,we=Ie.get(Z),Ot=p.state.lights;if(j===!0&&(ne===!0||T!==A)){const Cn=T===A&&Z.id===L;ze.setState(Z,T,Cn)}let nt=!1;Z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Ot.state.version||we.outputColorSpace!==Se||V.isBatchedMesh&&we.batching===!1||!V.isBatchedMesh&&we.batching===!0||V.isBatchedMesh&&we.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&we.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&we.instancing===!1||!V.isInstancedMesh&&we.instancing===!0||V.isSkinnedMesh&&we.skinning===!1||!V.isSkinnedMesh&&we.skinning===!0||V.isInstancedMesh&&we.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&we.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&we.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&we.instancingMorph===!1&&V.morphTexture!==null||we.envMap!==Me||Z.fog===!0&&we.fog!==ce||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ze.numPlanes||we.numIntersection!==ze.numIntersection)||we.vertexAlphas!==Ne||we.vertexTangents!==Fe||we.morphTargets!==be||we.morphNormals!==et||we.morphColors!==xt||we.toneMapping!==yt||we.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,we.__version=Z.version);let kn=we.currentProgram;nt===!0&&(kn=ur(Z,B,V));let Yr=!1,vn=!1,yc=!1;const Et=kn.getUniforms(),bi=we.uniforms;if(ve.useProgram(kn.program)&&(Yr=!0,vn=!0,yc=!0),Z.id!==L&&(L=Z.id,vn=!0),Yr||A!==T){Et.setValue(D,"projectionMatrix",T.projectionMatrix),Et.setValue(D,"viewMatrix",T.matrixWorldInverse);const Cn=Et.map.cameraPosition;Cn!==void 0&&Cn.setValue(D,he.setFromMatrixPosition(T.matrixWorld)),$e.logarithmicDepthBuffer&&Et.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Et.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),A!==T&&(A=T,vn=!0,yc=!0)}if(V.isSkinnedMesh){Et.setOptional(D,V,"bindMatrix"),Et.setOptional(D,V,"bindMatrixInverse");const Cn=V.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Et.setValue(D,"boneTexture",Cn.boneTexture,Le))}V.isBatchedMesh&&(Et.setOptional(D,V,"batchingTexture"),Et.setValue(D,"batchingTexture",V._matricesTexture,Le),Et.setOptional(D,V,"batchingIdTexture"),Et.setValue(D,"batchingIdTexture",V._indirectTexture,Le),Et.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&Et.setValue(D,"batchingColorTexture",V._colorsTexture,Le));const Sc=q.morphAttributes;if((Sc.position!==void 0||Sc.normal!==void 0||Sc.color!==void 0)&&We.update(V,q,kn),(vn||we.receiveShadow!==V.receiveShadow)&&(we.receiveShadow=V.receiveShadow,Et.setValue(D,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(bi.envMap.value=Me,bi.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(bi.envMapIntensity.value=B.environmentIntensity),vn&&(Et.setValue(D,"toneMappingExposure",v.toneMappingExposure),we.needsLights&&N_(bi,yc),ce&&Z.fog===!0&&Te.refreshFogUniforms(bi,ce),Te.refreshMaterialUniforms(bi,Z,z,Q,p.state.transmissionRenderTarget[T.id]),ml.upload(D,Eh(we),bi,Le)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ml.upload(D,Eh(we),bi,Le),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Et.setValue(D,"center",V.center),Et.setValue(D,"modelViewMatrix",V.modelViewMatrix),Et.setValue(D,"normalMatrix",V.normalMatrix),Et.setValue(D,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Cn=Z.uniformsGroups;for(let Mc=0,I_=Cn.length;Mc<I_;Mc++){const Th=Cn[Mc];at.update(Th,kn),at.bind(Th,kn)}}return kn}function N_(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function D_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,B,q){Ie.get(T.texture).__webglTexture=B,Ie.get(T.depthTexture).__webglTexture=q;const Z=Ie.get(T);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=q===void 0,Z.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,B){const q=Ie.get(T);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,q=0){C=T,N=B,R=q;let Z=!0,V=null,ce=!1,me=!1;if(T){const Me=Ie.get(T);Me.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(D.FRAMEBUFFER,null),Z=!1):Me.__webglFramebuffer===void 0?Le.setupRenderTarget(T):Me.__hasExternalTextures&&Le.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(me=!0);const Fe=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?V=Fe[B][q]:V=Fe[B],ce=!0):T.samples>0&&Le.useMultisampledRTT(T)===!1?V=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?V=Fe[q]:V=Fe,y.copy(T.viewport),I.copy(T.scissor),H=T.scissorTest}else y.copy(W).multiplyScalar(z).floor(),I.copy(ee).multiplyScalar(z).floor(),H=ue;if(ve.bindFramebuffer(D.FRAMEBUFFER,V)&&Z&&ve.drawBuffers(T,V),ve.viewport(y),ve.scissor(I),ve.setScissorTest(H),ce){const Me=Ie.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me.__webglTexture,q)}else if(me){const Me=Ie.get(T.texture),Ne=B||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Me.__webglTexture,q||0,Ne)}L=-1},this.readRenderTargetPixels=function(T,B,q,Z,V,ce,me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){ve.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Me=T.texture,Ne=Me.format,Fe=Me.type;if(!$e.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-Z&&q>=0&&q<=T.height-V&&D.readPixels(B,q,Z,V,Ue.convert(Ne),Ue.convert(Fe),ce)}finally{const Me=C!==null?Ie.get(C).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(T,B,q,Z,V,ce,me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&me!==void 0&&(Se=Se[me]),Se){ve.bindFramebuffer(D.FRAMEBUFFER,Se);try{const Me=T.texture,Ne=Me.format,Fe=Me.type;if(!$e.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=T.width-Z&&q>=0&&q<=T.height-V){const be=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),D.readPixels(B,q,Z,V,Ue.convert(Ne),Ue.convert(Fe),0),D.flush();const et=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await GE(D,et,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,be),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce)}finally{D.deleteBuffer(be),D.deleteSync(et)}return ce}}finally{const Me=C!==null?Ie.get(C).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(T,B=null,q=0){T.isTexture!==!0&&(Ra("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,T=arguments[1]);const Z=Math.pow(2,-q),V=Math.floor(T.image.width*Z),ce=Math.floor(T.image.height*Z),me=B!==null?B.x:0,Se=B!==null?B.y:0;Le.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,me,Se,V,ce),ve.unbindTexture()},this.copyTextureToTexture=function(T,B,q=null,Z=null,V=0){T.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,T=arguments[1],B=arguments[2],V=arguments[3]||0,q=null);let ce,me,Se,Me,Ne,Fe;q!==null?(ce=q.max.x-q.min.x,me=q.max.y-q.min.y,Se=q.min.x,Me=q.min.y):(ce=T.image.width,me=T.image.height,Se=0,Me=0),Z!==null?(Ne=Z.x,Fe=Z.y):(Ne=0,Fe=0);const be=Ue.convert(B.format),et=Ue.convert(B.type);Le.setTexture2D(B,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const xt=D.getParameter(D.UNPACK_ROW_LENGTH),yt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),gn=D.getParameter(D.UNPACK_SKIP_PIXELS),tt=D.getParameter(D.UNPACK_SKIP_ROWS),we=D.getParameter(D.UNPACK_SKIP_IMAGES),Ot=T.isCompressedTexture?T.mipmaps[V]:T.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ot.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ot.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Se),D.pixelStorei(D.UNPACK_SKIP_ROWS,Me),T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,V,Ne,Fe,ce,me,be,et,Ot.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,V,Ne,Fe,Ot.width,Ot.height,be,Ot.data):D.texSubImage2D(D.TEXTURE_2D,V,Ne,Fe,ce,me,be,et,Ot),D.pixelStorei(D.UNPACK_ROW_LENGTH,xt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,gn),D.pixelStorei(D.UNPACK_SKIP_ROWS,tt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,we),V===0&&B.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ve.unbindTexture()},this.copyTextureToTexture3D=function(T,B,q=null,Z=null,V=0){T.isTexture!==!0&&(Ra("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Z=arguments[1]||null,T=arguments[2],B=arguments[3],V=arguments[4]||0);let ce,me,Se,Me,Ne,Fe,be,et,xt;const yt=T.isCompressedTexture?T.mipmaps[V]:T.image;q!==null?(ce=q.max.x-q.min.x,me=q.max.y-q.min.y,Se=q.max.z-q.min.z,Me=q.min.x,Ne=q.min.y,Fe=q.min.z):(ce=yt.width,me=yt.height,Se=yt.depth,Me=0,Ne=0,Fe=0),Z!==null?(be=Z.x,et=Z.y,xt=Z.z):(be=0,et=0,xt=0);const gn=Ue.convert(B.format),tt=Ue.convert(B.type);let we;if(B.isData3DTexture)Le.setTexture3D(B,0),we=D.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Le.setTexture2DArray(B,0),we=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const Ot=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),kn=D.getParameter(D.UNPACK_SKIP_PIXELS),Yr=D.getParameter(D.UNPACK_SKIP_ROWS),vn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,yt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,yt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Me),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fe),T.isDataTexture||T.isData3DTexture?D.texSubImage3D(we,V,be,et,xt,ce,me,Se,gn,tt,yt.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(we,V,be,et,xt,ce,me,Se,gn,yt.data):D.texSubImage3D(we,V,be,et,xt,ce,me,Se,gn,tt,yt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ot),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Yr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,vn),V===0&&B.generateMipmaps&&D.generateMipmap(we),ve.unbindTexture()},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&Le.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Le.setTextureCube(T,0):T.isData3DTexture?Le.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Le.setTexture2DArray(T,0):Le.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){N=0,R=0,C=null,ve.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===mh?"display-p3":"srgb",n.unpackColorSpace=it.workingColorSpace===gc?"display-p3":"srgb"}}class M_ extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class E_ extends jr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yl=new G,$l=new G,Xm=new pt,ha=new gh,Ko=new vc,Cu=new G,Ym=new G;class QC extends Ht{constructor(e=new Zn,n=new E_){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Yl.fromBufferAttribute(n,r-1),$l.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Yl.distanceTo($l);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ko.copy(i.boundingSphere),Ko.applyMatrix4(r),Ko.radius+=s,e.ray.intersectsSphere(Ko)===!1)return;Xm.copy(r).invert(),ha.copy(e.ray).applyMatrix4(Xm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,d=i.index,f=i.attributes.position;if(d!==null){const m=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=m,p=_-1;x<p;x+=c){const u=d.getX(x),g=d.getX(x+1),v=Zo(this,e,ha,l,u,g);v&&n.push(v)}if(this.isLineLoop){const x=d.getX(_-1),p=d.getX(m),u=Zo(this,e,ha,l,x,p);u&&n.push(u)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let x=m,p=_-1;x<p;x+=c){const u=Zo(this,e,ha,l,x,x+1);u&&n.push(u)}if(this.isLineLoop){const x=Zo(this,e,ha,l,_-1,m);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zo(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(Yl.fromBufferAttribute(a,r),$l.fromBufferAttribute(a,s),n.distanceSqToSegment(Yl,$l,Cu,Ym)>i)return;Cu.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Cu);if(!(l<e.near||l>e.far))return{distance:l,point:Ym.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}const $m=new G,qm=new G;class JC extends QC{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)$m.fromBufferAttribute(n,r),qm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+$m.distanceTo(qm);e.setAttribute("lineDistance",new Gt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sh extends Zn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],m=[];let _=0;const x=[],p=i/2;let u=0;g(),a===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(m,2));function g(){const M=new G,N=new G;let R=0;const C=(n-e)/i;for(let L=0;L<=s;L++){const A=[],y=L/s,I=y*(n-e)+e;for(let H=0;H<=r;H++){const X=H/r,J=X*l+o,te=Math.sin(J),Q=Math.cos(J);N.x=I*te,N.y=-y*i+p,N.z=I*Q,h.push(N.x,N.y,N.z),M.set(te,C,Q).normalize(),f.push(M.x,M.y,M.z),m.push(X,1-y),A.push(_++)}x.push(A)}for(let L=0;L<r;L++)for(let A=0;A<s;A++){const y=x[A][L],I=x[A+1][L],H=x[A+1][L+1],X=x[A][L+1];d.push(y,I,X),d.push(I,H,X),R+=6}c.addGroup(u,R,0),u+=R}function v(M){const N=_,R=new je,C=new G;let L=0;const A=M===!0?e:n,y=M===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,p*y,0),f.push(0,y,0),m.push(.5,.5),_++;const I=_;for(let H=0;H<=r;H++){const J=H/r*l+o,te=Math.cos(J),Q=Math.sin(J);C.x=A*Q,C.y=p*y,C.z=A*te,h.push(C.x,C.y,C.z),f.push(0,y,0),R.x=te*.5+.5,R.y=Q*.5*y+.5,m.push(R.x,R.y),_++}for(let H=0;H<r;H++){const X=N+H,J=I+H;M===!0?d.push(J,J+1,X):d.push(J+1,J,X),L+=3}c.addGroup(u,L,M===!0?1:2),u+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Mh extends Zn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],d=[];let h=e;const f=(n-e)/r,m=new G,_=new je;for(let x=0;x<=r;x++){for(let p=0;p<=i;p++){const u=s+p/i*a;m.x=h*Math.cos(u),m.y=h*Math.sin(u),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/n+1)/2,_.y=(m.y/n+1)/2,d.push(_.x,_.y)}h+=f}for(let x=0;x<r;x++){const p=x*(i+1);for(let u=0;u<i;u++){const g=u+p,v=g,M=g+i+1,N=g+i+2,R=g+1;o.push(v,M,R),o.push(M,N,R)}}this.setIndex(o),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class e2 extends jr{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new qe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class w_ extends jr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=i_,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class T_ extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const bu=new pt,Km=new G,Zm=new G;class t2{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xh,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),n.position.copy(Km),Zm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Zm),n.updateMatrixWorld(),bu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(bu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(bu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class n2 extends t2{constructor(){super(new m_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ql extends T_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new n2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class A_ extends T_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Qm=new pt;class C_{constructor(e,n,i=0,r=1/0){this.ray=new gh(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new vh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Qm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qm),this}intersectObject(e,n=!0,i=[]){return uf(e,this,i,n),i.sort(Jm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)uf(e[r],this,i,n);return i.sort(Jm),i}}function Jm(t,e){return t.distance-e.distance}function uf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)uf(s[a],e,n,!0)}}class i2 extends JC{constructor(e=10,n=10,i=4473924,r=8947848){i=new qe(i),r=new qe(r);const s=n/2,a=e/n,o=e/2,l=[],c=[];for(let f=0,m=0,_=-o;f<=n;f++,_+=a){l.push(-o,0,_,o,0,_),l.push(_,0,-o,_,0,o);const x=f===s?i:r;x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3}const d=new Zn;d.setAttribute("position",new Gt(l,3)),d.setAttribute("color",new Gt(c,3));const h=new E_({vertexColors:!0,toneMapped:!1});super(d,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);function b_(t,e={}){return new w_({color:t,roughness:e.roughness??.75,metalness:e.metalness??.05,...e})}function Re(t,e,n,i,r=!0){const s=new Xr(t,e,n),a=new ln(s,b_(i));return a.castShadow=!0,a.receiveShadow=!0,a.userData.colorable=r,a}function xc(t,e,n,i,r=!1,s=8){const a=new Sh(t,e,n,s),o=new ln(a,b_(i));return o.castShadow=!0,o.userData.colorable=r,o}function cr(t,e,n,i,r,s,a=.07){[[e/2-a,r,n/2-a],[-e/2+a,r,n/2-a],[e/2-a,r,-n/2+a],[-e/2+a,r,-n/2+a]].forEach(([l,c,d])=>{const h=xc(.03,.025,i,s,!1);h.position.set(l,c,d),t.add(h)})}function r2(t=9133628){const e=new Bt;e.userData.isFurniture=!0;const n=1.8,i=.85,r=Re(n,.1,i,2763306,!1);r.position.y=.05,e.add(r);const s=Re(n-.04,.22,i-.2,t);s.position.set(0,.27,.04),e.add(s);const a=Re(n-.04,.55,.14,t);a.position.set(0,.615,-.32499999999999996),e.add(a);const o=Re(.14,.42,i,t);o.position.set(-n/2+.07,.31,0),e.add(o);const l=o.clone();l.position.set(n/2-.07,.31,0),e.add(l);for(let c=-1;c<=1;c++){const d=Re(.52,.1,.58,t);d.position.set(c*.55,.44,.05),d.scale.set(1,1,1),e.add(d)}for(let c=-1;c<=1;c++){const d=Re(.52,.38,.1,t);d.position.set(c*.55,.62,-.22499999999999998),e.add(d)}return cr(e,n-.04,i-.04,.1,.05,1710618),e}function s2(t=13940886){const e=new Bt;e.userData.isFurniture=!0;const n=1.3,i=.82,r=Re(n,.1,i,2763306,!1);r.position.y=.05,e.add(r);const s=Re(n-.04,.22,i-.2,t);s.position.set(0,.27,.04),e.add(s);const a=Re(n-.04,.55,.14,t);a.position.set(0,.615,-.30999999999999994),e.add(a);const o=Re(.14,.42,i,t);o.position.set(-n/2+.07,.31,0),e.add(o);const l=o.clone();l.position.set(n/2-.07,.31,0),e.add(l);for(let c=-.5;c<=.5;c++){const d=Re(.55,.1,.58,t);d.position.set(c*1.1*.5,.44,.05),e.add(d);const h=Re(.55,.38,.1,t);h.position.set(c*1.1*.5,.62,-.20999999999999996),e.add(h)}return cr(e,n,i,.1,.05,1710618),e}function a2(t=4860938){const e=new Bt;e.userData.isFurniture=!0;const n=.75,i=.8,r=Re(n,.08,i,2763306,!1);r.position.y=.04,e.add(r);const s=Re(n-.04,.2,i-.22,t);s.position.set(0,.24,.04),e.add(s);const a=Re(n-.04,.55,.12,t);a.position.set(0,.59,-.30000000000000004),e.add(a);const o=Re(.12,.35,i,t);o.position.set(-n/2+.06,.27,0),e.add(o);const l=o.clone();l.position.set(n/2-.06,.27,0),e.add(l);const c=Re(n-.26,.08,.5,t);return c.position.set(0,.38,.06),e.add(c),cr(e,n,i,.08,.04,1710618),e}function o2(t=9133628){const e=new Bt;e.userData.isFurniture=!0;const n=1.1,i=.42,r=.55,s=Re(n,.04,r,t);s.position.y=i-.02,e.add(s);const a=Re(n-.06,.025,r-.06,t);a.position.y=i*.35,e.add(a);const o=i-.04;return cr(e,n-.06,r-.06,o,i*.5-.01,t,.04),e}function l2(t=9133628){const e=new Bt;e.userData.isFurniture=!0;const n=1.8,i=.76,r=.9,s=Re(n,.05,r,t);s.position.y=i-.025,e.add(s);const a=i-.05;cr(e,n-.12,r-.12,a,a/2,t,.08);const o=Re(n-.25,.04,.04,t);return o.position.set(0,a*.3,0),e.add(o),e}function c2(t=4860938){const e=new Bt;e.userData.isFurniture=!0;const n=.45,i=.48,r=.46,s=Re(n,.06,i,t);s.position.y=r,e.add(s);const a=Re(n-.04,.05,i-.04,t);a.position.y=r+.055,e.add(a);const o=Re(n,.36,.04,t);o.position.set(0,r+.38,-.22),e.add(o);const l=Re(n,.06,.04,t);l.position.set(0,r+.6,-.22),e.add(l);const c=r;return cr(e,n-.04,i-.04,c,c/2,t,.04),e}function u2(t=4860938){const e=new Bt;e.userData.isFurniture=!0;const n=1.6,i=2.1,r=Re(n,.14,i,t);r.position.y=.07,e.add(r);const s=Re(n-.06,.22,i-.1,15658734);s.userData.colorable=!1,s.position.y=.25,e.add(s);const a=Re(n,.65,.1,t);a.position.set(0,.47,-.99),e.add(a);const o=Re(n,.28,.08,t);o.position.set(0,.28,i/2-.05),e.add(o);for(let l=-.5;l<=.5;l+=1){const c=Re(.65,.1,.38,16447474);c.userData.colorable=!1,c.position.set(l*.68,.39,-.5),e.add(c)}return cr(e,n,i,.1,.05,1710618),e}function d2(t=16117995){const e=new Bt;e.userData.isFurniture=!0;const n=1.5,i=2,r=.55,s=Re(n,i,r,t);s.position.y=i/2,e.add(s);const a=n/3-.02;for(let c=-1;c<=1;c++){const d=Re(a,i-.06,.02,t);d.position.set(c*(n/3),i/2,r/2+.01),e.add(d);const h=xc(.01,.01,.12,11184810,!1);h.rotation.z=Math.PI/2,h.userData.colorable=!1,h.position.set(c*(n/3)+(c>=0?-a/2+.05:a/2-.05),i/2,r/2+.03),e.add(h)}const o=Re(n,.08,r,2236962,!1);o.position.y=.04,e.add(o);const l=Re(n,.04,r,t);return l.position.y=i+.02,e.add(l),e}function f2(t=9133628){const e=new Bt;e.userData.isFurniture=!0;const n=.8,i=1.8,r=.3,s=5,a=Re(.03,i,r,t);a.position.set(-n/2+.015,i/2,0),e.add(a);const o=a.clone();o.position.set(n/2-.015,i/2,0),e.add(o);const l=Re(n,.03,r,t);l.position.y=i-.015,e.add(l);const c=l.clone();c.position.y=.015,e.add(c);const d=i/(s+1);for(let h=1;h<=s-1;h++){const f=Re(n-.06,.025,r-.02,t);f.position.y=d*h,e.add(f);const m=[12868646,2908042,4685902,9059210,12092939];let _=-n/2+.06;for(let x=0;x<4;x++){const p=.04+Math.random()*.04,u=.12+Math.random()*.06,g=Re(p,u,r-.04,m[x%m.length],!1);g.position.set(_+p/2,d*h+.025+u/2,0),e.add(g),_+=p+.005}}return e}function h2(t=16117995){const e=new Bt;e.userData.isFurniture=!0;const n=1.4,i=.75,r=.7,s=Re(n,.04,r,t);s.position.y=i-.02,e.add(s);const a=Re(.45,i-.04,r,t);a.position.set(-n/2+.225,(i-.04)/2,0),e.add(a);for(let l=0;l<3;l++){const c=Re(.41,.14,.02,t);c.position.set(-n/2+.225,.1+l*.18,r/2+.01),e.add(c);const d=Re(.12,.015,.015,11184810,!1);d.userData.colorable=!1,d.position.set(-n/2+.225,.1+l*.18,r/2+.025),e.add(d)}const o=Re(.04,i-.04,r,t);return o.position.set(n/2-.02,(i-.04)/2,0),e.add(o),e}function p2(t=4860938){const e=new Bt;e.userData.isFurniture=!0;const n=1.5,i=.5,r=.4,s=Re(n,i,r,t);s.position.y=i/2,e.add(s);const a=n/2-.04;for(let d=-1;d<=1;d+=2){const h=Re(a,i-.06,.02,t);h.position.set(d*(n/4),i/2,r/2+.01),e.add(h);const f=xc(.008,.008,.1,11184810,!1);f.rotation.z=Math.PI/2,f.userData.colorable=!1,f.position.set(d*(n/4)-d*.1,i/2,r/2+.025),e.add(f)}const o=Re(.02,i-.06,r,t);o.position.set(-.02,i/2,0),e.add(o);const l=o.clone();l.position.set(.02,i/2,0),e.add(l);const c=Re(n-.1,.04,r-.06,1710618,!1);return c.position.y=.02,e.add(c),e}function m2(t=9133628){const e=new Bt;e.userData.isFurniture=!0;const n=.45,i=.58,r=.45,s=Re(n,.035,r,t);s.position.y=i-.018,e.add(s);const a=Re(n,.2,r,t);a.position.y=i-.22,e.add(a);const o=Re(n-.04,.16,.02,t);o.position.set(0,i-.22,r/2+.01),e.add(o);const l=xc(.008,.008,.08,11184810,!1);l.rotation.z=Math.PI/2,l.userData.colorable=!1,l.position.set(0,i-.22,r/2+.025),e.add(l);const c=i-.24;return cr(e,n-.06,r-.06,c,c/2+.02,t,.04),e}function R_(t,e){const i={sofa_3seater:r2,loveseat:s2,armchair:a2,coffee_table:o2,dining_table:l2,dining_chair:c2,bed_queen:u2,wardrobe:d2,bookshelf:f2,office_desk:h2,tv_stand:p2,side_table:m2}[t];if(!i){console.warn(`No builder for ${t}, using fallback box`);const r=new Bt;r.userData.isFurniture=!0;const s=new ln(new Xr(1,1,1),new w_({color:e??9133628}));return s.position.y=.5,r.add(s),r}return i(e)}function P_(t,e){t.traverse(n=>{n.isMesh&&n.userData.colorable!==!1&&(n.material=n.material.clone(),n.material.color.setHex(e))})}function Pa(t,e){t.traverse(n=>{n.isMesh&&(n.material._originalEmissive||(n.material._originalEmissive=n.material.emissive.getHex()),n.material.emissive.setHex(e?3355426:n.material._originalEmissive??0))})}function g2(t){return new Promise((e,n)=>{const i=new Image;i.crossOrigin="anonymous",i.onload=()=>e(i),i.onerror=n,i.src=t})}function v2(t,e,n,i){const r=e.width/e.height,s=n/i;let a=0,o=0,l=e.width,c=e.height;r>s?(l=e.height*s,a=(e.width-l)/2):(c=e.width/s,o=(e.height-c)/2),t.drawImage(e,a,o,l,c,0,0,n,i)}function eg(){const t=F.useRef(null),e=F.useRef(null),n=F.useRef(null),i=F.useRef(null),r=F.useRef(null),s=F.useRef(null),a=F.useRef({}),o=F.useRef(null),l=F.useRef(!1),c=F.useRef(new G),d=F.useRef(new C_),h=F.useRef(new je),f=F.useRef(null),{objects:m,selectedId:_,roomImage:x,selectObject:p,removeObject:u,updateTransform:g}=Wr();F.useEffect(()=>{o.current=_},[_]);const v=F.useCallback(z=>{if(!z)return;const b=a.current[z];b&&g(z,{scale:b.scale.x,rotationY:b.rotation.y,position:{x:b.position.x,y:b.position.y,z:b.position.z}})},[g]);F.useEffect(()=>{const z=t.current;if(!z)return;const b=z.clientWidth,Y=z.clientHeight,W=new S_({canvas:e.current,alpha:!0,antialias:!0,preserveDrawingBuffer:!0});W.setSize(b,Y),W.setPixelRatio(Math.min(window.devicePixelRatio,2)),W.shadowMap.enabled=!0,W.shadowMap.type=Wv,W.outputColorSpace=Rn;const ee=new M_,ue=new Sn(40,b/Y,.01,100);ue.position.set(0,4.5,7),ue.lookAt(0,0,0);const Oe=new A_(16775408,.7);ee.add(Oe);const j=new ql(16777215,1);j.position.set(5,10,7),j.castShadow=!0,j.shadow.mapSize.width=2048,j.shadow.mapSize.height=2048,j.shadow.camera.near=.1,j.shadow.camera.far=50,j.shadow.camera.left=-10,j.shadow.camera.right=10,j.shadow.camera.top=10,j.shadow.camera.bottom=-10,ee.add(j);const ne=new ql(13162751,.4);ne.position.set(-5,3,-5),ee.add(ne);const fe=new ao(30,30),he=new e2({opacity:.25}),Ae=new ln(fe,he);Ae.rotation.x=-Math.PI/2,Ae.receiveShadow=!0,Ae.name="ground",ee.add(Ae),s.current=Ae;const ke=new i2(20,40,4473941,2763322);ke.material.opacity=.25,ke.material.transparent=!0,ee.add(ke),i.current=ee,n.current=W,r.current=ue;const De=()=>{f.current=requestAnimationFrame(De),W.render(ee,ue)};De();const Ye=()=>{const D=z.clientWidth,st=z.clientHeight;ue.aspect=D/st,ue.updateProjectionMatrix(),W.setSize(D,st)};return window.addEventListener("resize",Ye),()=>{cancelAnimationFrame(f.current),W.dispose(),window.removeEventListener("resize",Ye)}},[]),F.useEffect(()=>{const z=i.current,b=a.current;if(!z)return;m.forEach(W=>{if(!b[W.id]){const ee=R_(W.furnitureId,W.colorHex);ee.userData.sceneObjId=W.id,ee.userData.isFurniture=!0,ee.position.set((Math.random()-.5)*2,0,(Math.random()-.5)*2),z.add(ee),b[W.id]=ee}});const Y=new Set(m.map(W=>W.id));Object.keys(b).forEach(W=>{Y.has(W)||(z.remove(b[W]),delete b[W])}),Object.entries(b).forEach(([W,ee])=>{Pa(ee,W===_)})},[m,_]),F.useEffect(()=>{m.forEach(z=>{const b=a.current[z.id];b&&(P_(b,z.colorHex),Pa(b,z.id===_))})},[m.map(z=>`${z.id}:${z.colorHex}`).join(",")]);const M=F.useCallback(z=>{const b=e.current.getBoundingClientRect();h.current.x=(z.clientX-b.left)/b.width*2-1,h.current.y=-((z.clientY-b.top)/b.height)*2+1},[]),N=F.useCallback(z=>{M(z),d.current.setFromCamera(h.current,r.current);const b=d.current.intersectObject(s.current);return b.length>0?b[0].point:null},[M]),R=F.useCallback(z=>{M(z),d.current.setFromCamera(h.current,r.current);const b=Object.values(a.current),Y=d.current.intersectObjects(b,!0);if(Y.length===0)return null;let W=Y[0].object;for(;W.parent&&!W.userData.isFurniture;)W=W.parent;return W.userData.isFurniture?W:null},[M]),C=F.useCallback(z=>{if(z.button!==0)return;const b=R(z);if(b){const Y=b.userData.sceneObjId;p(Y),o.current=Y,l.current=!0,e.current.classList.add("dragging");const W=N(z);W&&(c.current.copy(b.position).sub(W),c.current.y=0)}else p(null),o.current=null},[R,N,p]),L=F.useCallback(z=>{if(!l.current||!o.current)return;const b=N(z);if(!b)return;const Y=a.current[o.current];Y&&Y.position.set(b.x+c.current.x,Y.position.y,b.z+c.current.z)},[N]),A=F.useCallback(()=>{var z;o.current&&v(o.current),l.current=!1,(z=e.current)==null||z.classList.remove("dragging")},[v]),y=F.useCallback(z=>{if(z.preventDefault(),!o.current)return;const b=a.current[o.current];if(!b)return;const Y=z.deltaY>0?.95:1.05;b.scale.multiplyScalar(Y);const W=Math.max(.1,Math.min(5,b.scale.x));b.scale.set(W,W,W),v(o.current)},[v]);F.useEffect(()=>{const z=b=>{if(!o.current)return;const Y=a.current[o.current];if(!Y)return;const W=Math.PI/12;(b.key==="r"||b.key==="R")&&(Y.rotation.y+=W,v(o.current)),b.key==="ArrowLeft"&&(b.preventDefault(),Y.rotation.y-=W,v(o.current)),b.key==="ArrowRight"&&(b.preventDefault(),Y.rotation.y+=W,v(o.current)),(b.key==="Delete"||b.key==="Backspace")&&(b.preventDefault(),u(o.current),o.current=null)};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[u]);const I=F.useRef({x:0,y:0}),H=F.useRef("none"),X=F.useRef(0),J=F.useCallback(z=>{if(z.touches.length===1){const b=z.touches[0],Y={clientX:b.clientX,clientY:b.clientY,button:0};C(Y),I.current={x:b.clientX,y:b.clientY},H.current="drag"}else if(z.touches.length===2){H.current="pinch";const b=z.touches[0].clientX-z.touches[1].clientX,Y=z.touches[0].clientY-z.touches[1].clientY;X.current=Math.hypot(b,Y)}},[C]),te=F.useCallback(z=>{if(z.preventDefault(),H.current==="drag"&&z.touches.length===1){const b=z.touches[0];L({clientX:b.clientX,clientY:b.clientY})}else if(H.current==="pinch"&&z.touches.length===2){if(!o.current)return;const b=z.touches[0].clientX-z.touches[1].clientX,Y=z.touches[0].clientY-z.touches[1].clientY,W=Math.hypot(b,Y),ee=W/X.current;X.current=W;const ue=a.current[o.current];if(ue){const Oe=Math.max(.1,Math.min(5,ue.scale.x*ee));ue.scale.set(Oe,Oe,Oe)}}},[L]),Q=F.useCallback(()=>{A(),H.current="none"},[A]);return F.useEffect(()=>(window.__arRotate=z=>{if(!o.current)return;const b=a.current[o.current];b&&(b.rotation.y+=z*Math.PI/180,v(o.current))},window.__arScale=z=>{if(!o.current)return;const b=a.current[o.current];if(b){const Y=Math.max(.1,Math.min(5,b.scale.x*z));b.scale.set(Y,Y,Y),v(o.current)}},window.__saveLayoutPicture=async()=>{const z=n.current,b=i.current,Y=r.current,W=e.current;if(!z||!b||!Y||!W)throw new Error("Viewer is not ready yet.");z.render(b,Y);const ee=document.createElement("canvas");ee.width=W.width,ee.height=W.height;const ue=ee.getContext("2d");if(!ue)throw new Error("Could not prepare image export.");if(x){const ne=await g2(x);v2(ue,ne,ee.width,ee.height)}else{const ne=ue.createLinearGradient(0,0,0,ee.height);ne.addColorStop(0,"#1a1a28"),ne.addColorStop(.6,"#22222e"),ne.addColorStop(1,"#2a2a3a"),ue.fillStyle=ne,ue.fillRect(0,0,ee.width,ee.height)}ue.drawImage(W,0,0,ee.width,ee.height);const Oe=ee.toDataURL("image/png"),j=document.createElement("a");j.href=Oe,j.download=`ar-layout-${Date.now()}.png`,j.click()},()=>{delete window.__arRotate,delete window.__arScale,delete window.__saveLayoutPicture}),[v,x]),S.jsxs("div",{ref:t,className:"relative w-full h-full overflow-hidden rounded-2xl",children:[x?S.jsx("img",{src:x,alt:"Room",className:"absolute inset-0 w-full h-full object-cover",style:{filter:"brightness(0.88) saturate(0.9)"}}):S.jsx("div",{className:"absolute inset-0",style:{background:"linear-gradient(180deg, #1a1a28 0%, #22222e 60%, #2a2a3a 100%)",backgroundImage:`
              linear-gradient(rgba(212,165,116,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,165,116,0.04) 1px, transparent 1px)
            `,backgroundSize:"80px 80px"}}),S.jsx("canvas",{id:"ar-canvas",ref:e,className:"absolute inset-0 w-full h-full",onMouseDown:C,onMouseMove:L,onMouseUp:A,onMouseLeave:A,onWheel:y,onTouchStart:J,onTouchMove:te,onTouchEnd:Q,style:{touchAction:"none"}}),m.length===0&&S.jsx("div",{className:"absolute inset-0 flex flex-col items-center justify-center pointer-events-none",children:S.jsxs("div",{className:"glass-card px-8 py-6 text-center max-w-sm",children:[S.jsx("div",{className:"text-5xl mb-3 animate-float",children:"🛋️"}),S.jsx("p",{className:"text-text-primary font-display text-lg mb-1",children:"Your Room, Your Style"}),S.jsxs("p",{className:"text-text-secondary text-sm",children:["Select furniture from the sidebar, then click ",S.jsx("span",{className:"text-accent",children:'"Add to Scene"'})]})]})}),m.length>0&&S.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 pointer-events-none",children:S.jsxs("div",{className:"bg-black/70 backdrop-blur-sm text-text-secondary text-xs px-4 py-2 rounded-full flex gap-4",children:[S.jsx("span",{children:"🖱️ Drag to move"}),S.jsx("span",{children:"🖱️ Scroll to scale"}),S.jsx("span",{children:"⌨️ R / ← / → to rotate"}),S.jsx("span",{children:"⌨️ Del to remove"})]})})]})}function _2(){const t=new Mh(.12,.15,32);t.applyMatrix4(new pt().makeRotationX(-Math.PI/2));const e=new _h({color:13935988,side:ni}),n=new ln(t,e);return n.visible=!1,n.matrixAutoUpdate=!1,n}function tg(){const[t,e]=F.useState(null),[n,i]=F.useState("idle"),[r,s]=F.useState(""),[a,o]=F.useState("none"),[l,c]=F.useState("Move your phone to find a flat surface."),d=F.useRef(null),h=F.useRef(null),f=F.useRef(null),m=F.useRef(null),_=F.useRef(null),x=F.useRef(null),p=F.useRef(null),u=F.useRef(null),g=F.useRef(null),v=F.useRef(null),M=F.useRef(null),N=F.useRef(null),R=F.useRef(null),C=F.useRef(null),L=F.useRef({}),A=F.useRef({}),y=F.useRef(null),I=F.useRef(null),H=F.useRef(null),X=F.useRef(new C_),J=F.useRef(new je),te=F.useRef(null),Q=F.useRef(new Set),z=F.useRef({active:!1,pointerId:null,objectId:null,offset:new G,mode:"idle"}),b=F.useRef({pinchInProgress:!1}),Y=F.useRef({active:!1,distance:0,startScale:1,lastCenter:null,lastAngle:0,touches:new Map,objectId:null}),W=F.useRef({inProgress:!1}),{objects:ee,selectedId:ue,selectedObject:Oe,selectObject:j,removeObject:ne,setRoomImage:fe,setARMode:he,updateTransform:Ae}=Wr();F.useEffect(()=>{te.current=ue},[ue]),F.useEffect(()=>{Q.current=new Set(ee.map(w=>w.id))},[]),F.useEffect(()=>{if(!navigator.xr){e(!1);return}navigator.xr.isSessionSupported("immersive-ar").then(w=>e(w)).catch(()=>e(!1))},[]);const ke=F.useCallback(()=>{z.current={active:!1,pointerId:null,objectId:null,offset:new G,mode:"idle"},Y.current={active:!1,distance:0,startScale:1,lastCenter:null,lastAngle:0,touches:new Map,objectId:null},b.current.pinchInProgress=!1,W.current.inProgress=!1},[]),De=F.useCallback((w,U)=>{!w||!U||Ae(w,{scale:U.scale.x,rotationY:U.rotation.y,position:{x:U.position.x,y:U.position.y,z:U.position.z}})},[Ae]),Ye=F.useCallback(()=>{var w,U;p.current&&(p.current.setAnimationLoop(null),p.current.dispose(),p.current=null),H.current&&(window.removeEventListener("resize",H.current),H.current=null),cancelAnimationFrame(I.current),I.current=null,u.current=null,g.current=null,C.current=null,(U=(w=M.current)==null?void 0:w.cancel)==null||U.call(w),M.current=null,N.current=null,R.current=null,Object.values(A.current).forEach(O=>{var k;(k=O==null?void 0:O.delete)==null||k.call(O)}),A.current={},L.current={},ke()},[ke]),D=F.useCallback(()=>{var w;(w=y.current)==null||w.getTracks().forEach(U=>U.stop()),y.current=null,f.current&&(f.current.pause(),f.current.srcObject=null)},[]),st=F.useCallback(async()=>{const w=v.current;if(v.current=null,w)try{await w.end()}catch{}D(),Ye(),c("Move your phone to find a flat surface."),i("idle")},[Ye,D]);F.useEffect(()=>()=>{st()},[st]);const Ke=F.useCallback(({enableXR:w=!1}={})=>{const U=h.current,O=d.current;if(!U||!O)throw new Error("Camera surface is not ready yet.");Ye();const k=new S_({canvas:U,alpha:!0,antialias:!0,preserveDrawingBuffer:!0});k.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),k.outputColorSpace=Rn,k.shadowMap.enabled=!0,k.xr.enabled=w;const $=new M_;$.add(new A_(16777215,1.2));const se=new ql(16777215,1.2);se.position.set(1.5,3,2),se.castShadow=!0,$.add(se);const Ee=new ql(14017791,.4);Ee.position.set(-2,1,.5),$.add(Ee);const Pe=new Sn(60,1,.01,30);Pe.position.set(0,0,0),Pe.lookAt(0,0,-1);const Qe=()=>{const Ve=O.clientWidth||window.innerWidth,_t=O.clientHeight||window.innerHeight;!Ve||!_t||(k.setSize(Ve,_t,!1),Pe.aspect=Ve/_t,Pe.updateProjectionMatrix())};return Qe(),window.addEventListener("resize",Qe),H.current=Qe,u.current=$,g.current=Pe,p.current=k,{renderer:k,scene:$,camera:Pe}},[Ye]),$e=F.useCallback(w=>{const U=L.current;ee.forEach(k=>{if(!U[k.id]){const $=R_(k.furnitureId,k.colorHex);$.userData.sceneObjId=k.id,$.userData.isFurniture=!0,$.rotation.y=k.rotationY||0,k.scale&&$.scale.setScalar(k.scale),k.position&&$.position.set(k.position.x||0,k.position.y||0,k.position.z||0),$.visible=!1,w.add($),U[k.id]=$}});const O=new Set(ee.map(k=>k.id));Object.keys(U).forEach(k=>{var $,se;O.has(k)||((se=($=A.current[k])==null?void 0:$.delete)==null||se.call($),delete A.current[k],w==null||w.remove(U[k]),delete U[k])})},[ee]);F.useEffect(()=>{const w=u.current;w&&$e(w)},[$e]),F.useEffect(()=>{ee.forEach(w=>{const U=L.current[w.id];U&&(P_(U,w.colorHex),Pa(U,w.id===ue))})},[ee,ue]);const ve=F.useCallback(()=>{var U;const w=te.current||((U=ee[0])==null?void 0:U.id)||null;return w?{id:w,mesh:L.current[w]||null}:null},[ee]),ct=F.useCallback((w,U)=>{var k;const O=(k=h.current)==null?void 0:k.getBoundingClientRect();return O?(J.current.x=(w-O.left)/O.width*2-1,J.current.y=-((U-O.top)/O.height)*2+1,!0):!1},[]),Ie=F.useCallback((w,U)=>{if(!ct(w,U)||!g.current)return null;X.current.setFromCamera(J.current,g.current);const O=Object.values(L.current).filter(se=>se.visible),k=X.current.intersectObjects(O,!0);if(!k.length)return null;let $=k[0].object;for(;$.parent&&!$.userData.isFurniture;)$=$.parent;return $.userData.isFurniture?$:null},[ct]),Le=F.useCallback((w,U,O=2.4)=>{if(!ct(w,U)||!g.current)return null;const k=g.current,se=new G(J.current.x,J.current.y,.5).unproject(k).sub(k.position).normalize();if(Math.abs(se.z)<1e-4)return null;const Pe=(-O-k.position.z)/se.z;return k.position.clone().add(se.multiplyScalar(Pe))},[ct]),P=F.useCallback((w,U)=>{const O=ve();if(!(O!=null&&O.mesh))return;const k=O.mesh,$=Le(w,U);if(!$)return;const se=new er().setFromObject(k),Ee=Number.isFinite(se.min.y)?-se.min.y:0;k.visible=!0,k.position.set($.x,$.y+Ee,$.z),k.rotation.x=0,k.rotation.z=0,j(O.id),Pa(k,!0)},[ve,Le,j]),E=F.useCallback((w,U,O,k=new G)=>{const $=L.current[w];if(!$)return;const se=Le(U,O,Math.abs($.position.z)||2.4);se&&$.position.set(se.x+k.x,se.y+k.y,se.z+k.z)},[Le]),K=F.useCallback((w,U=0)=>{if(!w)return;const O=[-.6,0,.6,-1.1,1.1],k=new er().setFromObject(w),$=Number.isFinite(k.min.y)?-k.min.y:0;w.visible=!0,w.position.set(O[U]??0,-.45+$,-2.2),w.scale.x===1&&w.scale.y===1&&w.scale.z===1&&w.scale.setScalar(.9)},[]),re=F.useCallback((w,U)=>{if(!w||!U)return!1;const O=new G,k=new zr,$=new G,se=new On(0,0,0,"YXZ"),Ee=new er().setFromObject(w),Pe=Number.isFinite(Ee.min.y)?-Ee.min.y:0;return U.decompose(O,k,$),se.setFromQuaternion(k),w.visible=!0,w.position.set(O.x,O.y+Pe,O.z),w.rotation.set(0,se.y,0),!0},[]);F.useEffect(()=>{if(n!=="live")return;const w=Q.current;ee.filter(O=>!w.has(O.id)).forEach((O,k)=>{const $=L.current[O.id];$&&(K($,k),j(O.id))}),Q.current=new Set(ee.map(O=>O.id))},[n,ee,K,j]),F.useEffect(()=>{if(n!=="webxr")return;const w=Q.current,U=ee.filter(O=>!w.has(O.id));U.length>0&&j(U[U.length-1].id),Q.current=new Set(ee.map(O=>O.id))},[n,ee,j]);const oe=F.useCallback(w=>{var $,se;if(n!=="live"||w.pointerType==="touch"&&b.current.pinchInProgress||w.isPrimary===!1)return;const U=w.clientX,O=w.clientY,k=Ie(U,O);if(k){const Ee=k.userData.sceneObjId,Pe=L.current[Ee],Qe=Le(U,O,Math.abs(Pe==null?void 0:Pe.position.z)||2.4);j(Ee),Pe&&Qe&&(z.current={active:!0,pointerId:w.pointerId,objectId:Ee,offset:Pe.position.clone().sub(Qe),mode:"drag"},(se=($=h.current)==null?void 0:$.setPointerCapture)==null||se.call($,w.pointerId));return}z.current={active:!1,pointerId:null,objectId:null,offset:new G,mode:"place"},P(U,O)},[Ie,n,P,Le,j]),ie=F.useCallback(w=>{if(n!=="live"||w.pointerType==="touch"&&b.current.pinchInProgress)return;const U=z.current;!U.active||U.pointerId!==w.pointerId||!U.objectId||E(U.objectId,w.clientX,w.clientY,U.offset)},[n,E]),Te=F.useCallback(w=>{var O,k;z.current.pointerId===w.pointerId&&(z.current={active:!1,pointerId:null,objectId:null,offset:new G,mode:"idle"},(k=(O=h.current)==null?void 0:O.hasPointerCapture)!=null&&k.call(O,w.pointerId)&&h.current.releasePointerCapture(w.pointerId))},[]),pe=F.useCallback(w=>{var O,k;if(n!=="live")return;const U=Y.current;if(Array.from(w.changedTouches).forEach($=>{U.touches.set($.identifier,{x:$.clientX,y:$.clientY})}),w.touches.length===2&&te.current){const[$,se]=Array.from(w.touches),Ee=Math.hypot($.clientX-se.clientX,$.clientY-se.clientY),Pe={x:($.clientX+se.clientX)/2,y:($.clientY+se.clientY)/2},Qe=Math.atan2(se.clientY-$.clientY,se.clientX-$.clientX),Ve=L.current[te.current];if(!Ve)return;U.active=!0,U.distance=Ee,U.startScale=Ve.scale.x,U.lastCenter=Pe,U.lastAngle=Qe,U.objectId=te.current,b.current.pinchInProgress=!0;const _t=z.current.pointerId;z.current.active&&_t!==null&&(k=(O=h.current)==null?void 0:O.hasPointerCapture)!=null&&k.call(O,_t)&&h.current.releasePointerCapture(_t),z.current={active:!1,pointerId:null,objectId:null,offset:new G,mode:"idle"}}},[n]),_e=F.useCallback(w=>{if(n!=="live")return;const U=Y.current;if(Array.from(w.changedTouches).forEach(O=>{U.touches.has(O.identifier)&&U.touches.set(O.identifier,{x:O.clientX,y:O.clientY})}),w.touches.length===2&&U.active&&U.objectId){w.preventDefault();const[O,k]=Array.from(w.touches),$=Math.hypot(O.clientX-k.clientX,O.clientY-k.clientY),se={x:(O.clientX+k.clientX)/2,y:(O.clientY+k.clientY)/2},Ee=Math.atan2(k.clientY-O.clientY,k.clientX-O.clientX),Pe=L.current[U.objectId];if(!Pe||!U.distance)return;const Qe=Math.max(.15,Math.min(4,U.startScale*($/U.distance)));if(Pe.scale.setScalar(Qe),U.lastCenter){const _t=se.x-U.lastCenter.x,ot=se.y-U.lastCenter.y;Pe.rotation.y+=_t*.01,Pe.rotation.x=Math.max(-Math.PI/2,Math.min(Math.PI/2,Pe.rotation.x+ot*.01))}const Ve=Ee-U.lastAngle;Pe.rotation.z+=Ve,U.lastCenter=se,U.lastAngle=Ee}},[n]),ze=F.useCallback(w=>{const U=Y.current;Array.from(w.changedTouches).forEach(O=>{U.touches.delete(O.identifier)}),w.touches.length<2&&(U.active=!1,U.distance=0,U.lastCenter=null,U.lastAngle=0,U.objectId=null,b.current.pinchInProgress=!1)},[]),le=F.useCallback(async()=>{s(""),i("starting-live");try{const w=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:{ideal:"environment"},width:{ideal:1920},height:{ideal:1080}}});if(y.current=w,!f.current)throw new Error("Video preview is not ready yet.");f.current.srcObject=w,await f.current.play();const{renderer:U,scene:O,camera:k}=Ke();$e(O);const $=ve();$!=null&&$.mesh&&K($.mesh,1);const se=()=>{I.current=requestAnimationFrame(se),U.render(O,k)};se(),i("live")}catch(w){D(),Ye(),i("error"),s((w==null?void 0:w.message)||"Could not start the live camera.")}},[Ye,ve,K,Ke,D,$e]),ge=F.useCallback(async()=>{if(!t){i("error"),s("Surface AR is not supported on this phone/browser.");return}s(""),c("Move your phone to find a flat surface."),i("starting-webxr");try{const{renderer:w,scene:U,camera:O}=Ke({enableXR:!0});$e(U);const k=_2();U.add(k),C.current=k;const $=[{label:"anchors",options:{requiredFeatures:["hit-test"],optionalFeatures:["light-estimation","anchors","dom-overlay"],domOverlay:m.current?{root:m.current}:void 0}},{label:"dom-overlay",options:{requiredFeatures:["hit-test"],optionalFeatures:["light-estimation","dom-overlay"],domOverlay:m.current?{root:m.current}:void 0}},{label:"hit-test",options:{requiredFeatures:["hit-test"],optionalFeatures:["light-estimation"]}}];let se=null,Ee="none",Pe=null;for(const ot of $)try{se=await navigator.xr.requestSession("immersive-ar",ot.options),Ee=ot.label;break}catch(pn){Pe=pn}if(!se)throw Pe||new Error("This phone/browser could not start a supported AR session.");v.current=se,o(Ee),w.xr.setReferenceSpaceType("local"),await w.xr.setSession(se);const Qe=await se.requestReferenceSpace("local");N.current=Qe;const Ve=await se.requestReferenceSpace("viewer"),_t=await se.requestHitTestSource({space:Ve});M.current=_t,se.addEventListener("select",async()=>{var Nt,mn;const ot=ve(),pn=ot==null?void 0:ot.mesh,jt=C.current;if(!(!pn||!(jt!=null&&jt.visible)||W.current.inProgress)){W.current.inProgress=!0,c(`Placing ${ot.name||"selected item"}…`);try{if(!re(pn,jt.matrix))return;j(ot.id),Pa(pn,!0),De(ot.id,pn),c(`Placed ${ot.name||"item"}. Tap again to reposition it.`);const Dt=R.current;if(Ee==="anchors"&&(Dt!=null&&Dt.createAnchor))try{(mn=(Nt=A.current[ot.id])==null?void 0:Nt.delete)==null||mn.call(Nt),A.current[ot.id]=await Dt.createAnchor()}catch{}}finally{W.current.inProgress=!1}}}),se.addEventListener("end",()=>{v.current=null,Ye(),o("none"),c("Move your phone to find a flat surface."),i("idle")}),w.setAnimationLoop((ot,pn)=>{if(!pn)return;const jt=pn.getHitTestResults(_t);if(jt.length>0){R.current=jt[0];const Nt=jt[0].getPose(Qe);if(Nt&&C.current){C.current.visible=!0,C.current.matrix.fromArray(Nt.transform.matrix);const mn=ve();c(mn!=null&&mn.id?`Surface ready. Tap to place or move ${mn.name||"selected item"}.`:"Surface ready. Add or select a furniture item to place it.")}}else if(C.current){R.current=null,C.current.visible=!1;const Nt=ve();c(Nt!=null&&Nt.id?`Scanning for a flat surface for ${Nt.name||"selected item"}…`:"Scanning for a flat surface…")}Ee==="anchors"&&Object.entries(A.current).forEach(([Nt,mn])=>{const Ci=L.current[Nt];if(!Ci||!mn)return;const Dt=pn.getPose(mn.anchorSpace,Qe);if(!Dt)return;Ci.visible=!0,Ci.position.set(Dt.transform.position.x,Dt.transform.position.y,Dt.transform.position.z);const oo=new zr(Dt.transform.orientation.x,Dt.transform.orientation.y,Dt.transform.orientation.z,Dt.transform.orientation.w),ur=new On(0,0,0,"YXZ");ur.setFromQuaternion(oo),Ci.rotation.set(0,ur.y,0)}),w.render(U,w.xr.getCamera(O))}),i("webxr")}catch(w){Ye(),o("none"),i("error"),s((w==null?void 0:w.message)||"Could not start surface AR."),c("Move your phone to find a flat surface.")}},[t,Ye,ve,De,re,j,Ke,$e]),We=F.useCallback(w=>{const U=ve();U!=null&&U.mesh&&(U.mesh.rotation.y+=w*Math.PI/180,j(U.id),De(U.id,U.mesh))},[ve,De,j]),Ce=F.useCallback(w=>{const U=ve();if(!(U!=null&&U.mesh))return;const O=Math.max(.15,Math.min(4,U.mesh.scale.x*w));U.mesh.scale.setScalar(O),j(U.id),De(U.id,U.mesh)},[ve,De,j]),ye=F.useCallback(()=>{const w=te.current;w&&(ne(w),j(null))},[ne,j]),Ue=F.useCallback(w=>{if(!w)return;const U=new FileReader;U.onload=O=>{var k;fe(((k=O.target)==null?void 0:k.result)||null),he(!1)},U.readAsDataURL(w)},[he,fe]);F.useEffect(()=>(window.__arRotate=w=>{We(w)},window.__arScale=w=>{Ce(w)},()=>{delete window.__arRotate,delete window.__arScale}),[We,Ce]);const Be=n==="live"||n==="webxr",at=Oe?Fr.find(w=>w.id===Oe.furnitureId)||Oe:null;return S.jsxs("div",{ref:d,className:"relative h-full w-full overflow-hidden bg-bg-primary",children:[S.jsx("video",{ref:f,className:`absolute inset-0 h-full w-full object-cover ${n==="live"?"block":"hidden"}`,autoPlay:!0,muted:!0,playsInline:!0}),S.jsx("canvas",{ref:h,className:`absolute inset-0 h-full w-full ${Be?"block":"hidden"}`,onPointerDown:oe,onPointerMove:ie,onPointerUp:Te,onPointerCancel:Te,onTouchStart:pe,onTouchMove:_e,onTouchEnd:ze,onTouchCancel:ze,style:{touchAction:"none"}}),S.jsx("input",{ref:_,type:"file",accept:"image/*",className:"hidden",onChange:w=>{var U;return Ue((U=w.target.files)==null?void 0:U[0])}}),S.jsx("input",{ref:x,type:"file",accept:"image/*",capture:"environment",className:"hidden",onChange:w=>{var U;return Ue((U=w.target.files)==null?void 0:U[0])}}),!Be&&S.jsx("div",{className:"absolute inset-0 overflow-y-auto custom-scroll",children:S.jsxs("div",{className:"flex min-h-full flex-col items-center justify-center gap-5 px-4 py-6 text-center sm:px-8",children:[S.jsx("div",{className:"text-5xl animate-float",children:"📱"}),S.jsxs("div",{className:"max-w-sm space-y-2",children:[S.jsx("h3",{className:"font-display text-2xl text-text-primary",children:"Mobile AR Tools"}),S.jsx("p",{className:"text-sm text-text-secondary",children:"Use live camera mode for quick placement, or launch surface AR on supported phones for real-world hit testing."})]}),S.jsxs("div",{className:"grid w-full max-w-sm gap-3",children:[S.jsxs("button",{onClick:le,disabled:n==="starting-live",className:"btn-primary flex items-center justify-center gap-2 px-5 py-4 text-base",children:[S.jsx(SM,{size:18}),n==="starting-live"?"Starting Live Camera…":"Start Live Camera"]}),S.jsxs("button",{onClick:ge,disabled:!t||n==="starting-webxr",className:"btn-secondary flex items-center justify-center gap-2 px-5 py-4 text-base disabled:opacity-50",children:[S.jsx(OM,{size:18}),n==="starting-webxr"?"Starting Surface AR…":t?"Launch Surface AR":"Surface AR Not Supported"]})]}),S.jsxs("div",{className:"grid w-full max-w-sm grid-cols-1 gap-3 sm:grid-cols-2",children:[S.jsxs("button",{onClick:()=>{var w;return(w=x.current)==null?void 0:w.click()},className:"btn-secondary flex items-center justify-center gap-2 px-4 py-3 text-sm",children:[S.jsx(RM,{size:16}),"Take Room Photo"]}),S.jsxs("button",{onClick:()=>{var w;return(w=_.current)==null?void 0:w.click()},className:"btn-secondary flex items-center justify-center gap-2 px-4 py-3 text-sm",children:[S.jsx(BM,{size:16}),"Upload From Device"]})]}),S.jsxs("div",{className:"glass-card w-full max-w-sm px-4 py-3 text-left",children:[S.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.2em] text-accent",children:"How to use"}),S.jsx("p",{className:"mt-2 text-sm text-text-secondary",children:"1. Add furniture from the catalog below."}),S.jsx("p",{className:"text-sm text-text-secondary",children:"2. Select an item, then start live camera or surface AR."}),S.jsx("p",{className:"text-sm text-text-secondary",children:"3. Tap on the screen to place or reposition the selected item."})]}),n==="error"&&S.jsx("p",{className:"max-w-sm text-sm text-error",children:r})]})}),S.jsxs("div",{ref:m,className:`ar-overlay ${Be?"":"hidden"}`,children:[S.jsx("div",{className:"absolute left-0 right-0 top-0 flex items-start justify-end gap-3 p-3 sm:p-4",children:S.jsx("button",{onClick:st,className:"rounded-2xl bg-black/65 p-3 text-white backdrop-blur-sm hover:bg-black/80",children:S.jsx(VM,{size:18})})}),ee.length>0&&n==="webxr"&&S.jsxs("div",{className:"absolute bottom-24 left-3 right-3 space-y-3 sm:left-4 sm:right-4",children:[S.jsx("div",{className:"rounded-2xl bg-black/70 p-3 backdrop-blur-sm",children:S.jsxs("div",{className:"flex items-start justify-between gap-3",children:[S.jsxs("div",{children:[S.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55",children:"Surface AR"}),S.jsx("p",{className:"mt-1 text-sm text-white/90",children:l})]}),S.jsx("span",{className:"rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-white/70",children:a==="anchors"?"Anchors":a==="dom-overlay"?"Overlay":"Hit Test"})]})}),S.jsxs("div",{className:"rounded-2xl bg-black/70 p-3 backdrop-blur-sm",children:[S.jsx("p",{className:"mb-2 px-1 text-xs text-white/60",children:"Selected furniture"}),S.jsx("div",{className:"flex gap-2 overflow-x-auto pb-1 custom-scroll",children:ee.map(w=>{const U=Fr.find(k=>k.id===w.furnitureId),O=ue===w.id;return S.jsxs("button",{onClick:()=>j(w.id),className:`flex min-w-[92px] flex-shrink-0 flex-col items-center gap-1 rounded-xl border px-3 py-2 transition-all ${O?"border-accent bg-accent/25 text-white":"border-white/20 text-white/70"}`,children:[S.jsx("span",{className:"text-xl",children:(U==null?void 0:U.emoji)||w.emoji}),S.jsx("span",{className:"text-xs",children:(U==null?void 0:U.name)||w.name})]},w.id)})})]})]}),n==="webxr"&&at&&S.jsx("div",{className:"absolute left-3 right-3 top-16 sm:left-4 sm:right-4 sm:top-20",children:S.jsxs("div",{className:"mx-auto max-w-sm rounded-2xl bg-black/60 px-4 py-3 text-center backdrop-blur-sm",children:[S.jsx("p",{className:"text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55",children:"Active Item"}),S.jsxs("p",{className:"mt-1 text-sm text-white",children:[at.emoji||"🛋️"," ",at.name||"Selected furniture"]}),S.jsx("p",{className:"mt-1 text-xs text-white/65",children:"Move the phone until the reticle appears, then tap the surface to place or reposition it."})]})}),ue&&S.jsx("div",{className:"absolute bottom-4 left-3 right-3 sm:left-4 sm:right-4",children:S.jsxs("div",{className:"flex items-center justify-center gap-3",children:[S.jsx("button",{onClick:()=>We(-45),className:"rounded-xl border border-white/20 bg-black/70 p-3 text-white hover:bg-black/90",children:S.jsx(Ad,{size:18})}),S.jsx("button",{onClick:()=>Ce(.9),className:"rounded-xl border border-white/20 bg-black/70 p-3 text-white hover:bg-black/90",children:S.jsx(Td,{size:18})}),S.jsx("button",{onClick:()=>Ce(1.1),className:"rounded-xl border border-white/20 bg-black/70 p-3 text-white hover:bg-black/90",children:S.jsx(Bl,{size:18})}),S.jsx("button",{onClick:()=>We(45),className:"rounded-xl border border-white/20 bg-black/70 p-3 text-white hover:bg-black/90",children:S.jsx(Cd,{size:18})}),S.jsx("button",{onClick:ye,className:"rounded-xl border border-error/30 bg-error/20 p-3 text-error hover:bg-error/30",children:S.jsx(bd,{size:18})})]})})]})]})}function fi({icon:t,label:e,onClick:n,variant:i="default",small:r}){const s=`flex items-center justify-center rounded-lg transition-all duration-200 active:scale-90 ${r?"w-8 h-8":"w-9 h-9"}`,a={default:"bg-bg-elevated hover:bg-border text-text-secondary hover:text-text-primary border border-border",accent:"bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20",danger:"bg-error/10 hover:bg-error/20 text-error border border-error/20"};return S.jsx("button",{title:e,onClick:n,className:`${s} ${a[i]}`,children:S.jsx(t,{size:r?13:15})})}function ng(){const[t,e]=F.useState(!1),{objects:n,selectedId:i,selectedObject:r,selectObject:s,removeObject:a,resetScene:o,isARMode:l}=Wr(),c=f=>{typeof window.__arRotate=="function"&&window.__arRotate(f)},d=f=>{typeof window.__arScale=="function"&&window.__arScale(f)},h=async()=>{if(typeof window.__saveLayoutPicture=="function"){e(!0);try{await window.__saveLayoutPicture()}catch(f){window.alert((f==null?void 0:f.message)||"Could not save the layout picture.")}finally{e(!1)}}};return S.jsxs("aside",{className:"w-full lg:w-52 flex-shrink-0 flex flex-col h-auto lg:h-full bg-bg-secondary lg:border-l border-border min-w-0",children:[S.jsx("div",{className:"px-4 pt-4 pb-3 border-b border-border",children:S.jsxs("div",{className:"flex items-center justify-between",children:[S.jsxs("div",{className:"flex items-center gap-2",children:[S.jsx(PM,{size:15,className:"text-accent"}),S.jsx("h2",{className:"font-display text-base text-text-primary",children:"Scene"})]}),S.jsx("span",{className:"badge badge-accent text-[10px]",children:n.length})]})}),S.jsx("div",{className:"p-3 space-y-1.5 lg:flex-1 lg:overflow-y-auto custom-scroll",children:n.length===0?S.jsxs("div",{className:"text-center py-8",children:[S.jsx("div",{className:"text-2xl mb-2",children:"🏠"}),S.jsx("p",{className:"text-text-muted text-xs",children:"No furniture added yet"}),S.jsx("p",{className:"text-text-muted text-xs",children:'Click "Add to Scene" from the catalog'})]}):n.map((f,m)=>{const _=Fr.find(p=>p.id===f.furnitureId),x=i===f.id;return S.jsxs("div",{className:`scene-item ${x?"selected":""}`,onClick:()=>s(f.id),children:[S.jsx("span",{className:"text-lg flex-shrink-0",children:f.emoji||(_==null?void 0:_.emoji)||"📦"}),S.jsxs("div",{className:"flex-1 min-w-0",children:[S.jsx("p",{className:"text-text-primary text-xs font-medium truncate",children:f.name}),S.jsxs("p",{className:"text-text-muted text-[10px]",children:["Item ",m+1]})]}),S.jsx("button",{onClick:p=>{p.stopPropagation(),a(f.id)},className:"text-text-muted hover:text-error transition-colors p-1 rounded",children:S.jsx(bd,{size:12})})]},f.id)})}),r&&S.jsxs("div",{className:"border-t border-border p-3 space-y-3",children:[S.jsxs("p",{className:"text-text-muted text-xs font-medium",children:["Transform: ",r.name]}),S.jsxs("div",{children:[S.jsx("p",{className:"text-text-muted text-[10px] mb-1.5",children:"Rotate"}),S.jsxs("div",{className:"flex gap-1.5",children:[S.jsx(fi,{icon:Ad,label:"Rotate -45°",onClick:()=>c(-45),small:!0}),S.jsx(fi,{icon:Ad,label:"Rotate -90°",onClick:()=>c(-90),small:!0}),S.jsx(fi,{icon:Cd,label:"Rotate +90°",onClick:()=>c(90),small:!0}),S.jsx(fi,{icon:Cd,label:"Rotate +45°",onClick:()=>c(45),small:!0})]})]}),S.jsxs("div",{children:[S.jsx("p",{className:"text-text-muted text-[10px] mb-1.5",children:"Scale"}),S.jsxs("div",{className:"flex gap-1.5",children:[S.jsx(fi,{icon:Td,label:"Shrink",onClick:()=>d(.9),small:!0}),S.jsx(fi,{icon:Td,label:"Shrink more",onClick:()=>d(.75),small:!0}),S.jsx(fi,{icon:Bl,label:"Grow",onClick:()=>d(1.1),small:!0}),S.jsx(fi,{icon:Bl,label:"Grow more",onClick:()=>d(1.25),small:!0})]})]}),S.jsx(fi,{icon:bd,label:"Delete",variant:"danger",onClick:()=>a(i)})]}),n.length>0&&S.jsxs("div",{className:"px-3 pb-3 border-t border-border pt-2",children:[!l&&S.jsxs("button",{onClick:h,disabled:t,className:"w-full mb-2 flex items-center justify-center gap-2 text-text-primary text-xs py-2 rounded-xl bg-accent/10 hover:bg-accent/20 border border-accent/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed",children:[S.jsx(AM,{size:12}),t?"Saving picture…":"Save Layout Picture"]}),S.jsxs("button",{onClick:()=>{window.confirm("Clear all furniture from the scene?")&&o()},className:"w-full flex items-center justify-center gap-2 text-text-muted hover:text-error text-xs py-2 rounded-xl hover:bg-error/5 transition-all border border-transparent hover:border-error/20",children:[S.jsx(FM,{size:12}),"Reset Scene"]})]})]})}function x2(){var s;const{selectedObject:t,selectedId:e,updateColor:n}=Wr();if(!t)return S.jsxs("div",{className:"flex items-center gap-2 text-text-muted text-sm px-4 py-3",children:[S.jsx(Yp,{size:15}),S.jsx("span",{children:"Select a furniture item to change colors"})]});const i=Fr.find(a=>a.id===t.furnitureId),r=(i==null?void 0:i.colors)||Object.keys(Ls);return S.jsxs("div",{className:"flex items-center gap-3 px-4 py-2",children:[S.jsxs("div",{className:"flex items-center gap-1.5 text-text-secondary text-xs flex-shrink-0",children:[S.jsx(Yp,{size:14}),S.jsx("span",{children:"Color:"})]}),S.jsx("div",{className:"flex items-center gap-2 flex-wrap",children:r.map(a=>{const o=Ls[a];return o?S.jsx("button",{title:o.label,onClick:()=>n(e,a),className:`color-swatch ${t.colorKey===a?"active":""}`,style:{backgroundColor:o.hex}},a):null})}),S.jsx("span",{className:"text-text-muted text-xs ml-1",children:((s=Ls[t.colorKey])==null?void 0:s.label)||""})]})}function y2(){var d;const{user:t,logout:e}=pc(),{isARMode:n,setARMode:i,setRoomImage:r}=Wr(),s=hc(),[a,o]=F.useState(!1),l=()=>{e(),s("/")},c=h=>{var _;const f=(_=h.target.files)==null?void 0:_[0];if(!f)return;const m=new FileReader;m.onload=x=>r(x.target.result),m.readAsDataURL(f),i(!1)};return S.jsxs("header",{className:"flex-shrink-0 flex flex-wrap items-center justify-between gap-3 px-3 py-3 sm:px-4 bg-bg-secondary border-b border-border z-20",children:[S.jsxs("div",{className:"flex items-center gap-2.5 min-w-0",children:[S.jsx("span",{className:"text-2xl",children:"🛋️"}),S.jsxs("div",{children:[S.jsx("h1",{className:"font-display text-base text-text-primary leading-none",children:"AR Visualizer"}),S.jsx("p",{className:"text-text-muted text-[10px]",children:"Furniture in Your Space"})]})]}),S.jsxs("div",{className:"order-3 w-full sm:order-none sm:w-auto flex items-center gap-1 bg-bg-elevated rounded-xl p-1 border border-border overflow-x-auto custom-scroll",children:[S.jsxs("button",{onClick:()=>i(!1),className:`flex-1 sm:flex-none items-center justify-center flex gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${n?"text-text-secondary hover:text-text-primary":"bg-accent text-bg-primary"}`,children:[S.jsx(UM,{size:13}),"Desktop"]}),S.jsxs("button",{onClick:()=>i(!0),className:`flex-1 sm:flex-none items-center justify-center flex gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${n?"bg-accent text-bg-primary":"text-text-secondary hover:text-text-primary"}`,children:[S.jsx(zM,{size:13}),"Mobile AR"]})]}),S.jsxs("div",{className:"flex items-center gap-2 ml-auto",children:[!n&&S.jsxs("label",{className:"btn-secondary text-xs px-3 py-1.5 cursor-pointer whitespace-nowrap",children:["📷 Upload Room Photo",S.jsx("input",{type:"file",accept:"image/*",onChange:c,className:"hidden"})]}),S.jsxs("div",{className:"relative",children:[S.jsxs("button",{onClick:()=>o(h=>!h),className:"flex items-center gap-2 bg-bg-elevated hover:bg-border border border-border rounded-xl px-3 py-1.5 transition-all",children:[S.jsx("div",{className:"w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center",children:S.jsx(Hv,{size:13,className:"text-accent"})}),S.jsx("span",{className:"text-text-primary text-xs font-medium hidden sm:block",children:(t==null?void 0:t.name)||((d=t==null?void 0:t.email)==null?void 0:d.split("@")[0])||"User"}),S.jsx(EM,{size:12,className:"text-text-muted"})]}),a&&S.jsxs("div",{className:"absolute right-0 top-full mt-2 w-48 glass-card shadow-card py-1 z-50",children:[S.jsxs("div",{className:"px-4 py-2 border-b border-border",children:[S.jsx("p",{className:"text-text-primary text-sm font-medium",children:(t==null?void 0:t.name)||"User"}),S.jsx("p",{className:"text-text-muted text-xs truncate",children:t==null?void 0:t.email})]}),S.jsxs("button",{onClick:l,className:"w-full flex items-center gap-2 px-4 py-2.5 text-sm text-text-secondary hover:text-error hover:bg-error/5 transition-all",children:[S.jsx(LM,{size:14}),"Sign Out"]})]})]})]})]})}function S2(){const{isARMode:t}=Wr(),[e,n]=F.useState("catalog"),[i,r]=F.useState(!1),[s,a]=F.useState(()=>typeof window>"u"?!0:window.innerWidth>=1024);return F.useEffect(()=>{const o=()=>{a(window.innerWidth>=1024)};return o(),window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),S.jsxs("div",{className:"h-[100dvh] w-screen flex flex-col bg-bg-primary overflow-hidden page-enter",children:[S.jsx(y2,{}),S.jsx("div",{className:"flex-shrink-0 overflow-x-auto bg-bg-secondary border-b border-border custom-scroll",children:S.jsx(x2,{})}),s?S.jsxs("div",{className:"flex flex-1 overflow-hidden min-h-0",children:[S.jsx(qp,{}),S.jsx("main",{className:"flex-1 flex flex-col overflow-hidden min-w-0",children:S.jsx("div",{className:"flex-1 p-3 overflow-hidden",children:t?S.jsx("div",{className:"w-full h-full rounded-2xl overflow-hidden border border-border bg-bg-secondary",children:S.jsx(tg,{})}):S.jsx(eg,{})})}),S.jsx(ng,{})]}):S.jsxs("div",{className:"flex-1 min-h-0 flex flex-col overflow-y-auto custom-scroll",children:[S.jsxs("main",{className:`relative flex-shrink-0 p-2 sm:p-3 overflow-hidden transition-all duration-300 ${i?"h-[72dvh] min-h-[28rem] max-h-[80dvh]":"h-[40dvh] min-h-[16rem] max-h-[24rem]"}`,children:[S.jsx("button",{onClick:()=>r(o=>!o),className:"absolute right-5 top-5 z-20 rounded-xl border border-border bg-bg-secondary/90 p-2 text-text-primary shadow-card backdrop-blur-sm",title:i?"Restore viewer size":"Expand viewer",children:i?S.jsx(IM,{size:16}):S.jsx(DM,{size:16})}),S.jsx("div",{className:"w-full h-full rounded-2xl overflow-hidden border border-border bg-bg-secondary",children:t?S.jsx(tg,{}):S.jsx(eg,{})})]}),S.jsxs("section",{className:"flex flex-col border-t border-border bg-bg-secondary",children:[S.jsx("div",{className:"px-3 pt-3",children:S.jsxs("div",{className:"grid grid-cols-2 gap-2 rounded-2xl bg-bg-elevated p-1 border border-border",children:[S.jsx("button",{onClick:()=>n("catalog"),className:`rounded-xl px-4 py-2 text-sm font-medium transition-all ${e==="catalog"?"bg-accent text-bg-primary":"text-text-secondary hover:text-text-primary"}`,children:"Catalog"}),S.jsx("button",{onClick:()=>n("scene"),className:`rounded-xl px-4 py-2 text-sm font-medium transition-all ${e==="scene"?"bg-accent text-bg-primary":"text-text-secondary hover:text-text-primary"}`,children:"Scene"})]})}),S.jsx("div",{className:`${i?"hidden":"block"} pb-3`,children:e==="catalog"?S.jsx(qp,{}):S.jsx(ng,{})})]})]})]})}function M2(){return S.jsx(aM,{children:S.jsx(gM,{children:S.jsxs(QS,{children:[S.jsx(_a,{path:"/",element:S.jsx(WM,{})}),S.jsx(_a,{path:"/tutorial",element:S.jsx(jp,{children:S.jsx(jM,{})})}),S.jsx(_a,{path:"/app",element:S.jsx(jp,{children:S.jsx(S2,{})})}),S.jsx(_a,{path:"*",element:S.jsx(Rv,{to:"/",replace:!0})})]})})})}Ru.createRoot(document.getElementById("root")).render(S.jsx(pg.StrictMode,{children:S.jsx(tM,{children:S.jsx(M2,{})})}));
