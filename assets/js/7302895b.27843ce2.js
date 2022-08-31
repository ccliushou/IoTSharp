"use strict";(self.webpackChunkiotsharp=self.webpackChunkiotsharp||[]).push([[934],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7539:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:8},s="\u9065\u6d4b\u6570\u636e\u805a\u5408",l={unversionedId:"tutorial-basics/aggregate",id:"tutorial-basics/aggregate",title:"\u9065\u6d4b\u6570\u636e\u805a\u5408",description:"\u5bf9\u4e8e\u7269\u8054\u7f51\u5e73\u53f0\u6765\u8bf4\uff0c \u805a\u5408\u662f\u975e\u5e38\u91cd\u8981\u7684\u6570\u636e\u67e5\u8be2\u65b9\u5f0f\uff0c IoTSharp\u652f\u6301\u6307\u5b9a\u65f6\u95f4\u6bb5\u3001\u9065\u6d4b\u3001\u805a\u5408\u65ad\u9762\u3001\u805a\u5408\u65b9\u5f0f\u7b49\uff0c IoTSharp\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u63a5\u53e3 /api/Devices/id/TelemetryData \u6765\u5b8c\u6210\u8fd9\u4e00\u70b9\u3002",source:"@site/docs/tutorial-basics/aggregate.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/aggregate",permalink:"/docs/tutorial-basics/aggregate",editUrl:"https://github.com/IoTSharp/IoTSharp/edit/master/docs/docs/tutorial-basics/aggregate.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"webapi\u67e5\u8be2\u9065\u6d4b",permalink:"/docs/tutorial-basics/webapi"},next:{title:"MQTT\u534f\u8bae",permalink:"/docs/tutorial-extras/mqtt"}},p={},u=[{value:"\u652f\u6301\u60c5\u51b5",id:"\u652f\u6301\u60c5\u51b5",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u9065\u6d4b\u6570\u636e\u805a\u5408"},"\u9065\u6d4b\u6570\u636e\u805a\u5408"),(0,o.kt)("p",null,"\u5bf9\u4e8e\u7269\u8054\u7f51\u5e73\u53f0\u6765\u8bf4\uff0c \u805a\u5408\u662f\u975e\u5e38\u91cd\u8981\u7684\u6570\u636e\u67e5\u8be2\u65b9\u5f0f\uff0c IoTSharp\u652f\u6301\u6307\u5b9a\u65f6\u95f4\u6bb5\u3001\u9065\u6d4b\u3001\u805a\u5408\u65ad\u9762\u3001\u805a\u5408\u65b9\u5f0f\u7b49\uff0c IoTSharp\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u63a5\u53e3 /api/Devices/id/TelemetryData \u6765\u5b8c\u6210\u8fd9\u4e00\u70b9\u3002 "),(0,o.kt)("p",null,"\u53c2\u6570\u793a\u4f8b\u5982\u4e0b:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'\n { "keys": "", "begin": "2022-03-23T11:44:56.488Z", "every": "1.03:14:56:166", "aggregate": "Mean" }\n')),(0,o.kt)("p",null,"keys  \u6307\u5b9a\u4e86\u8981\u67e5\u8be2\u90a3\u4e9b\u9065\u6d4b\uff0c begin \u548c end\u51b3\u5b9a\u4e86\u65f6\u95f4\u8303\u56f4\uff0c end\u53ef\u4ee5\u5ffd\u7565\uff0c \u4f46\u662fbegin\u5fc5\u987b\u5b58\u5728\uff0c every \u51b3\u5b9a\u4e86\u8fd4\u56de\u7684\u6570\u636e\u4e0e\u6570\u636e\u4e4b\u95f4\u7684\u65f6\u95f4\u95f4\u9694\uff0c \u6bd4\u5982\u6bcf\u4e94\u5206\u949f\u4e00\u6761\u6570\u636e\uff0c \u6216\u8005\u6bcf1\u79d2\u949f\u4e00\u6761\u6570\u636e\uff0c aggregate\u51b3\u5b9a\u4e86\u662f\u53d6\u6700\u5927\u503c\uff1f\u4e2d\u503c \uff1f\u6216\u8005\u5176\u4ed6\u3002 "),(0,o.kt)("h2",{id:"\u652f\u6301\u60c5\u51b5"},"\u652f\u6301\u60c5\u51b5"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"` \u76ee\u524d\u53ea\u652f\u6301\u4e86InfluxDB \u548cIoTDB  \u5176\u4ed6\u6570\u636e\u5e93\u6839\u636e\u6211\u4eec\u5185\u90e8\u6216\u8005\u5176\u4ed6\u8d21\u732e\u8005\u7684\u9879\u76ee\u9700\u6c42\u800c\u5b9a\u3002 "))))}m.isMDXComponent=!0}}]);