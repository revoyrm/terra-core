(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{2615:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(r(0)),n=u(r(5)),i=u(r(861)),a=u(r(863));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=h(e);if(t){var n=h(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return p(this,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=n.default.bind(a.default),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(u,e);var t,r,n,a=f(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),e=a.call(this),window.DocumentTouch||(e.resetDocumentTouch=!0,window.DocumentTouch=function(){},window.DocumentTouch.prototype=Document.prototype),e}return t=u,(r=[{key:"componentDidUpdate",value:function(){window.DocumentTouch||(this.resetDocumentTouch=!0,window.DocumentTouch=function(){},window.DocumentTouch.prototype=Document.prototype)}},{key:"componentWillUnmount",value:function(){this.resetDocumentTouch&&delete window.DocumentTouch}},{key:"render",value:function(){return o.default.createElement("div",{className:d("content-wrapper")},o.default.createElement(i.default,{id:"auto-resizable",cols:"2",isAutoResizable:!0,defaultValue:"Default Value",ariaLabel:"label"}))}}])&&c(t.prototype,r),n&&c(t,n),u}(o.default.Component);t.default=b},861:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextareaSize=t.default=void 0;var o=u(r(0)),n=u(r(3)),i=u(r(5)),a=u(r(862));function u(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function h(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,o=v(e);if(t){var n=v(this).constructor;r=Reflect.construct(o,arguments,n)}else r=o.apply(this,arguments);return y(this,r)}}function y(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?m(e):t}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=i.default.bind(a.default);t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"};var g={small:2,medium:5,large:10},_={ariaLabel:n.default.string,defaultValue:n.default.string,disabled:n.default.bool,isAutoResizable:n.default.bool,isIncomplete:n.default.bool,isInvalid:n.default.bool,name:n.default.string,onChange:n.default.func,onFocus:n.default.func,placeholder:n.default.string,required:n.default.bool,rows:n.default.number,size:n.default.oneOf(["small","medium","large","full"]),value:n.default.string,refCallback:n.default.func,disableResize:n.default.bool},O={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,placeholder:void 0,required:!1,rows:null,size:"small",value:void 0,refCallback:void 0,disableResize:!1},x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(a,e);var t,r,n,i=b(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),t.onChange=t.onChange.bind(m(t)),t.onFocus=t.onFocus.bind(m(t)),t}return t=a,(r=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,0));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||g[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,r=this.props,n=r.name,i=r.required,a=(r.onChange,r.onFocus,r.placeholder),u=r.isAutoResizable,l=r.isIncomplete,h=r.isInvalid,d=r.value,b=r.defaultValue,y=r.rows,m=r.size,v=r.ariaLabel,_=r.refCallback,O=r.disableResize,x=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},p(r,["name","required","onChange","onFocus","placeholder","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"])),j=w(["textarea",{"form-error":h},{"form-incomplete":l&&i&&!h},{"full-size":"full"===m},{resizable:u&&!this.isMobileDevice},{"no-resize":O},x.className]);x&&Object.prototype.hasOwnProperty.call(x,"aria-label")?e=v||x["aria-label"]:v&&(e=v),x["aria-label"]=e,i&&(x["aria-required"]="true");var z=y||g[m];return void 0!==d?x.value=d:x.defaultValue=b,o.default.createElement("textarea",c({},x,{ref:function(e){t.textarea=e,_&&_(e)},name:n,onFocus:this.onFocus,onChange:this.onChange,placeholder:a,required:i,rows:z,className:j}))}}])&&h(t.prototype,r),n&&h(t,n),a}(o.default.Component);x.propTypes=_,x.defaultProps=O,x.isTextarea=!0;var j=x;t.default=j},862:function(e,t,r){e.exports={textarea:"Textarea-module__textarea___2LAQp","full-size":"Textarea-module__full-size___oV5Sf","no-resize":"Textarea-module__no-resize___1iAys",resizable:"Textarea-module__resizable___MaiV4","form-error":"Textarea-module__form-error___3YkPI","form-incomplete":"Textarea-module__form-incomplete___30YTC"}},863:function(e,t,r){e.exports={"content-wrapper":"Textarea-test-module__content-wrapper___2IpaV"}}}]);
//# sourceMappingURL=237-569808913960eb076112.js.map