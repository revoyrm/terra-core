(window.webpackJsonp=window.webpackJsonp||[]).push([[702],{2550:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(0)),o=i(n(874)),a=i(n(999));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?d(e):t}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,e);var t,n,i,u=f(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=u.call(this,e)).state={},t.handleOnChange=t.handleOnChange.bind(d(t)),t}return t=s,(n=[{key:"handleOnChange",value:function(e){this.setState({selectedAnswer:e.currentTarget.value})}},{key:"render",value:function(){return r.default.createElement(a.default,{id:"testing-radio-field",legend:"Which Department do you work for?",help:"Your work falls inline with one of these departments",isInvalid:void 0===this.state.selectedAnswer,error:"One must be selected",hideRequired:!0,isInline:!0,required:!0},r.default.createElement(o.default,{id:"ux-dept",name:"dept",labelText:"UX/Interaction Design",onChange:this.handleOnChange,value:"ux"}),r.default.createElement(o.default,{id:"magazine-dept",name:"dept",labelText:"Magazine Advertisements",onChange:this.handleOnChange,value:"magazine"}),r.default.createElement(o.default,{id:"website-dept",name:"dept",labelText:"Website Advertisements",onChange:this.handleOnChange,value:"website"}),r.default.createElement(o.default,{id:"events-dept",name:"dept",labelText:"Event Promotions",onChange:this.handleOnChange,value:"events"}))}}])&&l(t.prototype,n),i&&l(t,i),s}(r.default.Component);t.default=h}}]);
//# sourceMappingURL=702-3f896ce607e9d39bce5f.js.map