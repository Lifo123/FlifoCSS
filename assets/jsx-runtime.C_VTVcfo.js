import{r as _}from"./index.B52nOzfP.js";let n=[],u=0;const s=4;let c=f=>{let e=[],r={get(){return r.lc||r.listen(()=>{})(),r.value},lc:0,listen(t){return r.lc=e.push(t),()=>{for(let o=u+s;o<n.length;)n[o]===t?n.splice(o,s):o+=s;let l=e.indexOf(t);~l&&(e.splice(l,1),--r.lc||r.off())}},notify(t,l){let o=!n.length;for(let i of e)n.push(i,r.value,t,l);if(o){for(u=0;u<n.length;u+=s)n[u](n[u+1],n[u+2],n[u+3]);n.length=0}},off(){},set(t){let l=r.value;l!==t&&(r.value=t,r.notify(l))},subscribe(t){let l=r.listen(t);return t(r.value),l},value:f};return r},O=(f={})=>{let e=c(f);return e.setKey=function(r,t){let l=e.value;typeof t>"u"&&r in e.value?(e.value={...e.value},delete e.value[r],e.notify(l,r)):e.value[r]!==t&&(e.value={...e.value,[r]:t},e.notify(l,r))},e};var p={exports:{}},a={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d=_,m=Symbol.for("react.element"),x=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,y=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function v(f,e,r){var t,l={},o=null,i=null;r!==void 0&&(o=""+r),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(i=e.ref);for(t in e)E.call(e,t)&&!R.hasOwnProperty(t)&&(l[t]=e[t]);if(f&&f.defaultProps)for(t in e=f.defaultProps,e)l[t]===void 0&&(l[t]=e[t]);return{$$typeof:m,type:f,key:o,ref:i,props:l,_owner:y.current}}a.Fragment=x;a.jsx=v;a.jsxs=v;p.exports=a;var b=p.exports;export{c as a,b as j,O as m};
