module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r);let i={debugReducer:!0,debugContext:!0,disable:!1,disableAutoMode:!1};const u=({id:e,context:t,displayName:n})=>i.disable?null:o.a.createElement(t.Consumer,null,t=>("undefined"!=typeof window&&window._REACT_CONTEXT_DEVTOOL&&window._REACT_CONTEXT_DEVTOOL({id:e,displayName:n,values:t}),null));function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=e[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d={errors:[],pending:[]},y=function(e){var t=s({},e),n=p(Object(r.useReducer)((function(e,t){return t.type?t.payload:e}),d),2),i=n[0],a=n[1];t.stores.map((function(e){return d[e.name]=e.initialState}));var y=function(e){if(!i.pending.find((function(t){return t===e}))){var t=l({},i,{pending:[].concat(c(i.pending),[e])});a({type:"".concat(e,"/pending"),payload:t})}},g=function(e,t){var n=i.pending.filter((function(t){return t!==e})),r=l({},i,{pending:n,errors:[].concat(c(i.errors),[{type:e,message:t.toString()}])});a({type:"".concat(e,"/error"),payload:r})},m=function(e,t,n){var r=i.errors.filter((function(t){return t.type!==e})),o=i.pending.filter((function(t){return t!==e}));a({type:e,payload:l({},i,f({errors:r,pending:o},t.name,n))})},v={errors_clear:function(){var e=[];if(!arguments.length){var t=l({},i,{errors:e});a({type:"clearAllErrors",payload:t})}}};t.stores.map((function(e){if(e.actions)for(var t=function(){var t=p(r[n],2),o=t[0],u=t[1],c="".concat(e.name,"_").concat(o),a=u(i[e.name]);"AsyncFunction"===a().constructor.name?v[c]=function(t){var n,r;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:return y(c),o.prev=1,o.next=4,regeneratorRuntime.awrap(a(t));case 4:return n=o.sent,o.next=7,regeneratorRuntime.awrap(n());case 7:r=o.sent,m(c,e,r),o.next=14;break;case 11:o.prev=11,o.t0=o.catch(1),g(c,o.t0);case 14:case"end":return o.stop()}}),null,null,[[1,11]])}:v[c]=function(t){return m(c,e,a(t))}},n=0,r=Object.entries(e.actions);n<r.length;n++)t()}));for(var O={},j=0,h=Object.entries(d);j<h.length;j++){var w=p(h[j],2),S=w[0];w[1];O[S]=i[S]}return o.a.createElement(b.Provider,{value:l({},v,{},O)},t.component,o.a.createElement(u,{context:b,id:"simpleState",displayName:"Simple State"}))},b=Object(r.createContext)(d);var g=function(){return Object(r.useContext)(b)},m=function(){for(var e=Object(r.useContext)(b),t=e.errors,n=[],o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return i.length?i.map((function(e){e.split("_")[1]?t.map((function(t){t.type!==e||n.includes(t)||n.push(t)})):(console.log(e.split("_")[0]),t.find((function(t){t.type.split("_")[0]!==e.split("_")[0]||n.includes(t)||n.push(t)})))})):t.map((function(e){return n.push(e)})),n.length?n:null},v=function(){for(var e=Object(r.useContext)(b),t=e.pending,n=[],o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return i.length?i.map((function(e){e.split("_")[1]?t.map((function(t){t!==e||n.includes(t)||n.push(t)})):t.find((function(t){t.split("_")[0]!==e.split("_")[0]||n.includes(t)||n.push(t)}))})):t.map((function(e){return n.push(e)})),n.length?n:null};n.d(t,"SimpleProvider",(function(){return y})),n.d(t,"useSimpleState",(function(){return g})),n.d(t,"useSimpleErrors",(function(){return m})),n.d(t,"useSimplePending",(function(){return v}))}]);