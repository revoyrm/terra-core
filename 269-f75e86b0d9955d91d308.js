(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{1230:function(e,t,n){e.exports={"tag-wrapper":"TagTestCommon-module__tag-wrapper___11mtt"}},2808:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(0)),o=a(n(5)),u=a(n(928)),i=a(n(1230));function a(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(i.default),l=function(){return r.default.createElement("div",{className:c("tag-wrapper")},r.default.createElement(u.default,{id:"on-click",text:"Clickable Tag",onClick:function(){return window.alert("Tag has been clicked!")}}))};t.default=l},928:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(0)),o=l(n(3)),u=l(n(5)),i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==f(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n(19)),a=l(n(936));function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function l(e){return e&&e.__esModule?e:{default:e}}function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=v(e);if(t){var o=v(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?_(e):t}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var O=u.default.bind(a.default),m={href:o.default.string,icon:o.default.element,onClick:o.default.func,onBlur:o.default.func,onFocus:o.default.func,onKeyUp:o.default.func,text:o.default.string.isRequired},g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(a,e);var t,n,o,u=b(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=u.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(_(t)),t.handleOnBlur=t.handleOnBlur.bind(_(t)),t}return t=a,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===i.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,o=e.href,u=e.onClick,i=(e.onBlur,e.onFocus),a=(e.onKeyUp,p(e,["icon","text","href","onClick","onBlur","onFocus","onKeyUp"])),c=O(["tag",{"is-focused":this.state.focused},{"is-interactive":o||u},a.className]),l=O("icon"),f=t?r.default.createElement("span",{className:l},t):null,d=o||u?o?"a":"button":"span";return r.default.createElement(d,s({},a,{className:c,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:u,onFocus:i,href:o}),f,n)}}])&&d(t.prototype,n),o&&d(t,o),a}(r.default.Component);g.propTypes=m;var w=g;t.default=w},936:function(e,t,n){e.exports={tag:"Tag-module__tag___2dKaH","is-interactive":"Tag-module__is-interactive___NGCCj","is-focused":"Tag-module__is-focused___mOKiO",icon:"Tag-module__icon___2MbIr"}}}]);
//# sourceMappingURL=269-f75e86b0d9955d91d308.js.map