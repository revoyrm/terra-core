(window.webpackJsonp=window.webpackJsonp||[]).push([[479],{1204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(0)),r=m(n(3)),o=m(n(5)),i=n(8),l=m(n(877)),u=m(n(138)),s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==g(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(19)),c=m(n(967)),p=n(981),d=m(n(982));function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function m(e){return e&&e.__esModule?e:{default:e}}function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=x(e);if(t){var r=x(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return P(this,n)}}function P(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?v(e):t}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=o.default.bind(c.default),O={onPageChange:r.default.func.isRequired,selectedPage:r.default.number.isRequired,totalCount:r.default.number.isRequired,itemCountPerPage:r.default.number.isRequired,intl:i.intlShape.isRequired},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(i,e);var t,n,r,o=y(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).handlePageChange=t.handlePageChange.bind(v(t)),t.hasNavContext=t.hasNavContext.bind(v(t)),t.buildPageButtons=t.buildPageButtons.bind(v(t)),t.reducedPaginator=t.reducedPaginator.bind(v(t)),t.setPaginator=t.setPaginator.bind(v(t)),t.state={showReducedPaginator:!1},t}return t=i,(n=[{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"handlePageChange",value:function(e){var t=this;return function(n){return n.nativeEvent.keyCode!==s.KEY_RETURN&&n.nativeEvent.keyCode!==s.KEY_SPACE||n.preventDefault(),Number.isNaN(Number(e))?(t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1):(t.props.onPageChange(e),!1)}}},{key:"buildPageButtons",value:function(e,t){var n=this.props,r=n.totalCount,o=n.itemCountPerPage,i=n.selectedPage,l=n.intl,u=(0,p.pageSet)(i,(0,p.calculatePages)(r,o)),s=[];return u.forEach((function(n){var r=C(["nav-link",n===i?"is-selected":null]);n>e||s.push(a.default.createElement(d.default,{ariaLabel:l.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:n}),ariaCurrent:n===i,className:r,key:"pageButton_".concat(n),onClick:t(n),onKeyDown:t(n),tabIndex:n===i?"-1":"0"},n))})),s}},{key:"hasNavContext",value:function(){return this.props.totalCount&&this.props.itemCountPerPage}},{key:"defaultPaginator",value:function(){var e=(0,p.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),t=this.props,n=t.selectedPage,r=t.intl,o=1===n?1:n-1,i=n===e?e:n+1;return a.default.createElement("div",{className:C(["paginator",!this.hasNavContext()&&"pageless"])},this.hasNavContext()&&a.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:r.formatMessage({id:"Terra.paginator.first"}),className:C(["nav-link","left-controls",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},r.formatMessage({id:"Terra.paginator.first"})),a.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:r.formatMessage({id:"Terra.paginator.previous"}),className:C(["nav-link","left-controls","previous",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},a.default.createElement("span",{className:C("icon")}),r.formatMessage({id:"Terra.paginator.previous"})),this.hasNavContext()&&this.buildPageButtons(e,this.handlePageChange),a.default.createElement(d.default,{ariaDisabled:n===e,ariaLabel:r.formatMessage({id:"Terra.paginator.next"}),className:C(["nav-link","right-controls","next",n===e&&"is-disabled"]),disabled:n===e,onClick:this.handlePageChange(i),onKeyDown:this.handlePageChange(i)},r.formatMessage({id:"Terra.paginator.next"}),a.default.createElement("span",{className:C("icon")})),this.hasNavContext()&&a.default.createElement(d.default,{ariaDisabled:n===e,ariaLabel:r.formatMessage({id:"Terra.paginator.last"}),className:C(["nav-link","right-controls",n===e&&"is-disabled"]),disabled:n===e,onClick:this.handlePageChange(e),onKeyDown:this.handlePageChange(e)},r.formatMessage({id:"Terra.paginator.last"})))}},{key:"reducedPaginator",value:function(){var e=(0,p.calculatePages)(this.props.totalCount,this.props.itemCountPerPage),t=this.props,n=t.selectedPage,r=t.intl,o=1===n?1:n-1,i=n===e?e:n+1;return a.default.createElement("div",{className:C(["paginator",!this.hasNavContext()&&"pageless"]),role:"navigation","aria-label":"pagination"},this.hasNavContext()&&a.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:r.formatMessage({id:"Terra.paginator.first"}),className:C(["nav-link","left-controls",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},r.formatMessage({id:"Terra.paginator.first"})),a.default.createElement(d.default,{ariaDisabled:1===n,ariaLabel:r.formatMessage({id:"Terra.paginator.previous"}),className:C(["nav-link","left-controls","previous",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(o),onKeyDown:this.handlePageChange(o)},a.default.createElement("span",{className:C("icon")}),r.formatMessage({id:"Terra.paginator.previous"})),this.hasNavContext()&&r.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:n}),a.default.createElement(d.default,{ariaDisabled:n===e,ariaLabel:r.formatMessage({id:"Terra.paginator.next"}),className:C(["nav-link","right-controls","next","icon-only",n===e&&"is-disabled"]),disabled:n===e,onClick:this.handlePageChange(i),onKeyDown:this.handlePageChange(i)},a.default.createElement(u.default,{text:r.formatMessage({id:"Terra.paginator.next"})}),a.default.createElement("span",{className:C("icon")})),this.hasNavContext()&&a.default.createElement(d.default,{ariaDisabled:n===e,ariaLabel:r.formatMessage({id:"Terra.paginator.last"}),className:C(["nav-link","right-controls",n===e&&"is-disabled"]),disabled:n===e,onClick:this.handlePageChange(e),onKeyDown:this.handlePageChange(e)},r.formatMessage({id:"Terra.paginator.last"})))}},{key:"render",value:function(){return a.default.createElement(l.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedPaginator():this.defaultPaginator())}}])&&h(t.prototype,n),r&&h(t,r),i}(a.default.Component);j.propTypes=O;var w=(0,i.injectIntl)(j);t.default=w},2153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(0)),r=s(n(939)),o=s(n(53)),i=s(n(1204)),l=s(n(5)),u=s(n(1556));function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?g(e):t}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=l.default.bind(u.default),y=function(){return function(e,t){for(var n=[],r=0;r<t;r+=1)n.push(a.default.createElement("p",{key:Math.floor(Math.random()*Math.floor(1e5))},e));return n}("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. Aliquam eget maximus dui, ut rhoncus augue.",10)},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(s,e);var t,n,l,u=f(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=u.call(this,e)).state={content:y(),currentPage:1},t.changePages=t.changePages.bind(g(t)),t}return t=s,(n=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){var e=this;return a.default.createElement("div",{className:b("paginator-wrapper")},a.default.createElement(r.default,{header:a.default.createElement("h1",null,"Page",this.state.currentPage),footer:a.default.createElement(i.default,{onPageChange:this.changePages,selectedPage:this.state.currentPage,totalCount:450,itemCountPerPage:10})},a.default.createElement("div",null,a.default.createElement(o.default,{text:"Set Page to 9",onClick:function(){e.setState({currentPage:9})}}),a.default.createElement(o.default,{text:"Set Page to 15",onClick:function(){e.setState({currentPage:15})}}),a.default.createElement(o.default,{text:"Set Page to 45",onClick:function(){e.setState({currentPage:45})}})),this.state.content))}}])&&p(t.prototype,n),l&&p(t,l),s}(a.default.Component);t.default=P},2926:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return j}));var a=n(0),r=n.n(a),o=n(278),i=n(980),l=n(2153),u=n.n(l);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function d(e){var t=e.components,n=c(e,["components"]);return Object(o.mdx)("wrapper",s({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("pre",null,Object(o.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\nimport ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\nimport classNames from 'classnames/bind';\nimport styles from './ControlledPaginatorCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst totalCount = 450;\n\nconst fillArray = (value, len) => {\n  const arr = [];\n  for (let i = 0; i < len; i += 1) {\n    arr.push(<p key={Math.floor(Math.random() * Math.floor(100000))}>{value}</p>);\n  }\n  return arr;\n};\n\nconst buildPage = () => {\n  let fullContent = [];\n  const content = ('Lorem ipsum dolor sit amet, consectetur adipiscing elit. '\n    + 'Fusce porttitor ullamcorper nisi, vel tincidunt dui pharetra vel. '\n    + 'Morbi eu rutrum nibh, sit amet placerat libero. Integer vel dapibus nibh. '\n    + 'Donec tempor mi vitae lorem congue, ut ultrices metus feugiat. Sed non commodo felis. '\n    + 'Aliquam eget maximus dui, ut rhoncus augue.');\n\n  fullContent = fillArray(content, 10);\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\nPage\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<ControlledPaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          <div>\n            <Button text=\"Set Page to 9\" onClick={() => { this.setState({ currentPage: 9 }); }} />\n            <Button text=\"Set Page to 15\" onClick={() => { this.setState({ currentPage: 15 }); }} />\n            <Button text=\"Set Page to 45\" onClick={() => { this.setState({ currentPage: 45 }); }} />\n          </div>\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorExample;\n\n")))}d.isMDXComponent=!0;var f=n(850),m=n.n(f),g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(m.a,{title:t||"Controlled Paginator Example",description:n,example:r.a.createElement(u.a,null),exampleSrc:r.a.createElement(d,null),isExpanded:a})},h=n(853),b=n.n(h);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function P(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v=function(){return Object(o.mdx)(b.a,{rows:[{name:"onPageChange",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Function to be executed when a navigation element is selected."))}return t.isMDXComponent=!0,t({})}},{name:"selectedPage",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"The active/selected page. Used to set the default selected page or maintain selection across renders.\nRequired when using totalCount and itemCountPerPage."))}return t.isMDXComponent=!0,t({})}},{name:"totalCount",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of all items being paginated.\nRequired when using itemCountPerPage and selectedPage."))}return t.isMDXComponent=!0,t({})}},{name:"itemCountPerPage",type:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"number"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=P(t,["components"]);return Object(o.mdx)("wrapper",y({},e,a,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("p",null,"Total number of items per page.\nRequired when using selectedPage and totalCount."))}return t.isMDXComponent=!0,t({})}}]})};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O={};function j(e){var t=e.components,n=C(e,["components"]);return Object(o.mdx)("wrapper",x({},O,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)(i.a,{mdxType:"Badge"}),Object(o.mdx)("h1",{id:"terra-controlled-paginator"},"Terra Controlled Paginator"),Object(o.mdx)("p",null,"Controlled version of the ",Object(o.mdx)("a",x({parentName:"p"},{href:"https://engineering.cerner.com/terra-core/components/terra-paginator/paginator/paginator"}),"Paginator")," for when the pagination state needs to be managed by a parent component. To use this component, the selectedPage must be managed through the state of a parent component, and passed into this paginator through props."),Object(o.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},"Install with ",Object(o.mdx)("a",x({parentName:"li"},{href:"https://www.npmjs.com/"}),"npmjs"),":",Object(o.mdx)("ul",{parentName:"li"},Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),Object(o.mdx)("h2",{id:"usage"},"Usage"),Object(o.mdx)("pre",null,Object(o.mdx)("code",x({parentName:"pre"},{className:"language-jsx"}),"import ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\n")),Object(o.mdx)("h2",{id:"component-features"},"Component Features"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",x({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#cross-browser-support"}),"Cross-Browser Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",x({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#responsive-support"}),"Responsive Support")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("a",x({parentName:"li"},{href:"https://engineering.cerner.com/terra-ui/contributing/terra-ui/component-standards#mobile-support"}),"Mobile Support"))),Object(o.mdx)("h2",{id:"examples"},"Examples"),Object(o.mdx)(g,{mdxType:"ControlledPaginatorExample"}),Object(o.mdx)("h2",{id:"controlled-paginator-props"},"Controlled Paginator Props"),Object(o.mdx)(v,{mdxType:"ControlledPaginatorPropsTable"}))}j.isMDXComponent=!0}}]);
//# sourceMappingURL=479-5f023575b43cc14acb20.js.map