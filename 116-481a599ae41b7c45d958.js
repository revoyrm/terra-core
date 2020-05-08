(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1202:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{title:"Item 0",key:"unique-0"},{title:"Item 1",key:"unique-1"},{title:"Item 2",key:"unique-2"},{title:"Item 3",key:"unique-3"},{title:"Item 4",key:"unique-4"}];t.default=a},2140:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(0)),r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(n,r,l):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(79)),l=u(n(865)),o=u(n(5)),i=u(n(1202)),c=u(n(904));function s(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return h(this,n)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var g=o.default.bind(c.default),_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(s,e);var t,n,o,c=f(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,e)).createListItem=t.createListItem.bind(b(t)),t.handleItemSelection=t.handleItemSelection.bind(b(t)),t.state={selectedKey:null},t}return t=s,(n=[{key:"handleItemSelection",value:function(e,t){e.preventDefault(),this.state.selectedKey!==t.key&&this.setState({selectedKey:t.key})}},{key:"createListItem",value:function(e){return a.default.createElement(r.Item,{key:e.key,isSelectable:!0,isSelected:this.state.selectedKey===e.key,metaData:{key:e.key},onSelect:this.handleItemSelection},a.default.createElement(l.default,{title:e.title,className:g("placeholder")}))}},{key:"createListItems",value:function(e){var t=this;return e.map((function(e){return t.createListItem(e)}))}},{key:"render",value:function(){return a.default.createElement(r.default,{dividerStyle:"standard",role:"listbox","aria-label":"SingleSelectList-label"},this.createListItems(i.default))}}])&&m(t.prototype,n),o&&m(t,o),s}(a.default.Component);t.default=_},2938:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a=n(0),r=n.n(a),l=n(278),o=n(884),i=n(2140),c=n.n(i);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={};function m(e){var t=e.components,n=u(e,["components"]);return Object(l.mdx)("wrapper",s({},d,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",s({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport List, { Item } from 'terra-list/lib/index';\nimport Placeholder from 'terra-doc-template/lib/Placeholder';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-select';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SingleSelectList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createListItem = this.createListItem.bind(this);\n    this.handleItemSelection = this.handleItemSelection.bind(this);\n    this.state = { selectedKey: null };\n  }\n\n  handleItemSelection(event, metaData) {\n    event.preventDefault();\n    if (this.state.selectedKey !== metaData.key) {\n      this.setState({ selectedKey: metaData.key });\n    }\n  }\n\n  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable\n        isSelected={this.state.selectedKey === itemData.key}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder title={itemData.title} className={cx('placeholder')} />\n      </Item>\n    );\n  }\n\n  createListItems(data) {\n    return data.map(childItem => this.createListItem(childItem));\n  }\n\n  render() {\n    return (\n      <List dividerStyle=\"standard\" role=\"listbox\" aria-label=\"SingleSelectList-label\">\n        {this.createListItems(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SingleSelectList;\n\n")))}m.isMDXComponent=!0;var p=n(850),f=n.n(p),h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.a.createElement(f.a,{title:t||"Single Select List",description:n,example:r.a.createElement(c.a,null),exampleSrc:r.a.createElement(m,null),isExpanded:a})};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g={};function _(e){var t=e.components,n=y(e,["components"]);return Object(l.mdx)("wrapper",b({},g,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(o.a,{mdxType:"Badge"}),Object(l.mdx)("h1",{id:"terra-list---implementing-a-single-select-list"},"Terra List - Implementing a Single Select List"),Object(l.mdx)("p",null,"The terra-list implementation requires controlled state if selections are required. As a result, selections are applied at child item generation from HOC state. The following guide will show you how to implement that state within a single row selection variant of list."),Object(l.mdx)("h2",{id:"state-management"},"State Management"),Object(l.mdx)("p",null,"The state of selection needs to be managed for the list in a HOC. In this example we are going to be a unique key, but the type of state used is open to the implementor of the HOC."),Object(l.mdx)("p",null," First defaulting our state to a null value in the constructor. "),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+    this.state = { selectedKey: null };\n  }\n  \n  render() {\n    return (\n    );\n  }\n}\n")),Object(l.mdx)("p",null,"Next creating an event handler callback method to pass to the list item's ",Object(l.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",Object(l.mdx)("inlineCode",{parentName:"p"},"onSelect")," will return the metaData prop passed it each listItem."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n+   this.handleItemSelection = this.handleItemSelection.bind(this)\n  }\n  \n+ handleItemSelection(event, metaData) {\n+\n+ }\n  ...\n")),Object(l.mdx)("p",null,"As a precaution we can ",Object(l.mdx)("inlineCode",{parentName:"p"},"preventDefault")," on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  handleItemSelection(event, metaData) {\n+    event.preventDefault();\n  }\n")),Object(l.mdx)("p",null,"A single select list normally doesn't allow deselection, so we'll be using it in our example, but if deselection is desired we could adjust this method. So we compare the key to the current one in state, and if they aren't the same we set this as our state."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  handleItemSelection(event, metaData) {\n    event.preventDefault();\n+    if (this.state.selectedKey !== metaData.key) {\n+      this.setState({ selectedKey: metaData.key });\n+    }\n  }\n")),Object(l.mdx)("p",null,"Setting state will trigger another render. So in the render method we need generate our list items with the updated ",Object(l.mdx)("inlineCode",{parentName:"p"},"isSelected")," and ",Object(l.mdx)("inlineCode",{parentName:"p"},"isSelectable")," props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if they are placed within sections.\n",Object(l.mdx)("a",b({parentName:"p"},{href:"https://reactjs.org/docs/lists-and-keys.html"}),"React List & Key Documentation")),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n+   this.createListItem = this.createListItem.bind(this)\n  }\n  ...\n+  createListItem(itemData) {\n+    return (\n+      <Item\n+        key={itemData.key}\n+      >\n+        <Placeholder />\n+      </Item>\n+    );\n+  }\n")),Object(l.mdx)("p",null,"Next we need to set up our ",Object(l.mdx)("inlineCode",{parentName:"p"},"metaData")," object with our key value, and attach the ",Object(l.mdx)("inlineCode",{parentName:"p"},"onSelect")," to our handler."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       metaData={{ key: itemData.key }}\n+       onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),Object(l.mdx)("p",null,"For the single select list we set ",Object(l.mdx)("inlineCode",{parentName:"p"},"isSelectable")," for all items."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       isSelectable\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),Object(l.mdx)("p",null,"Finally we need to check if the item matches the selectedKey in state to set ",Object(l.mdx)("inlineCode",{parentName:"p"},"isSelected"),"."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable\n+       isSelected={this.state.selectedKey === itemData.key}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),Object(l.mdx)("p",null,"Then we can implement a method to loop through our data and create the list item with our methods and call it from our render method. Making special note to assign the aria role of ",Object(l.mdx)("inlineCode",{parentName:"p"},'"listbox"')," and a string to ",Object(l.mdx)("inlineCode",{parentName:"p"},"aria-label")," for the list, as it is required for accessibility with selectable list options."),Object(l.mdx)("pre",null,Object(l.mdx)("code",b({parentName:"pre"},{className:"language-diff"}),'  render() {\n    return (\n+      <List role="listbox" aria-label="SingleSelectList-label">\n+        {data.map(childItem => this.createListItem(mockData))}\n+      </List>\n    );\n  }\n')),Object(l.mdx)("p",null,"  Using these steps we get the following example."),Object(l.mdx)("h2",{id:"examples"},"Examples"),Object(l.mdx)(h,{mdxType:"SingleSelectList"}))}_.isMDXComponent=!0},850:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(3)),l=i(n(5)),o=i(n(854));function i(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function u(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h(e);if(t){var r=h(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return p(this,n)}}function p(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=l.default.bind(o.default),y={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(n,e);var t=m(n);function n(e){var a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(a=t.call(this,e)).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},a.handleBgToggle=a.handleBgToggle.bind(f(a)),a.handleCodeToggle=a.handleCodeToggle.bind(f(a)),a}return u(n,null,[{key:"renderHeader",value:function(e){return e?a.default.createElement("div",{className:b("header")},a.default.createElement("h2",{className:b("title")},e)):null}},{key:"renderDescription",value:function(e){return e?a.default.createElement("div",{className:b("description")},e):null}}]),u(n,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.example,r=e.exampleSrc,l=e.title,o=e.description,i=this.state,c=i.isExpanded,s=i.isBackgroundTransparent;return a.default.createElement("div",{className:b("template")},n.renderHeader(l),a.default.createElement("div",{className:b("content",{"dynamic-content":s})},n.renderDescription(o),t),r&&a.default.createElement("div",{className:b("footer")},a.default.createElement("div",{className:b("button-container")},a.default.createElement("button",{type:"button",className:b("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),a.default.createElement("button",{type:"button",className:b("code-toggle"),onClick:this.handleCodeToggle},a.default.createElement("span",{className:b("chevron-left")}),a.default.createElement("span",null,"Code"),a.default.createElement("span",{className:b("chevron-right")}))),c&&a.default.createElement("div",{className:b("code")},r)))}}]),n}(a.default.Component);g.propTypes=y,g.defaultProps={isExpanded:!1};var _=g;t.default=_},851:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(3)),l=i(n(5)),o=i(n(852));function i(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(o.default),s={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},u=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:c("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:c("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(l))),i=t?a.default.createElement("a",{className:c("badge"),href:t},a.default.createElement("span",{className:c("badge-name")},"github"),a.default.createElement("span",{className:c("badge-version")},"source")):void 0;return a.default.createElement("div",{className:c("badge-container")},o,i)};u.propTypes=s;var d=u;t.default=d},852:function(e,t,n){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},854:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},865:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(0)),r=i(n(3)),l=i(n(5)),o=i(n(873));function i(e){return e&&e.__esModule?e:{default:e}}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.default.bind(o.default),d={variant:r.default.oneOf(["light","dark"]),title:r.default.string},m=function(e){var t=e.variant,n=e.title,r=s(e,["variant","title"]),l=u(["placeholder",r.className]),o=u(["inner","is-".concat(t)]);return a.default.createElement("div",c({},r,{className:l}),a.default.createElement("div",{className:o},a.default.createElement("h2",null,n)))};m.propTypes=d,m.defaultProps={variant:"dark",title:""};var p=m;t.default=p},873:function(e,t,n){e.exports={placeholder:"Placeholder-module__placeholder___tuGWe",inner:"Placeholder-module__inner___1irlA","is-light":"Placeholder-module__is-light___3LkLU","is-dark":"Placeholder-module__is-dark___5pLAg"}},884:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(0),r=n.n(a),l=n(851),o=n.n(l),i=function(e){var t=e.url;return r.a.createElement(o.a,{src:"https://github.com/cerner/terra-core/tree/master/packages/terra-list",name:"terra-list",version:"4.29.0",url:t})}},904:function(e,t,n){e.exports={placeholder:"ListDocCommon-module__placeholder___cpXI4"}}}]);
//# sourceMappingURL=116-481a599ae41b7c45d958.js.map