(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"84bF":function(e,t,n){"use strict";n("OGtf")("small",(function(e){return function(){return e(this,"small","","")}}))},BJfS:function(e,t,n){n("pIFo");e.exports=function(e){return e.replace(/[A-Z]/g,(function(e){return"-"+e.toLowerCase()})).toLowerCase()}},CnBM:function(e,t,n){"use strict";n("91GP"),n("VRzm"),n("XfO3"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("LK8F"),n("/SS/"),n("hHhE"),n("rE2o"),n("ioFf");var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=n("q1tI"),c=n("17x9"),s=[],u=[];function d(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function f(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var a=d(e[r]);a.loading?t.loading=!0:(t.loaded[r]=a.loaded,t.error=a.error),n.push(a.promise),a.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function p(e,t){return l.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function m(e,t){var d,f;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var m=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:p,webpack:null,modules:null},t),h=null;function y(){return h||(h=e(m.loader)),h.promise}return s.push(y),"function"==typeof m.webpack&&u.push((function(){if(e=m.webpack,"object"===r(n.m)&&e().every((function(e){return void 0!==e&&void 0!==n.m[e]})))return y();var e})),f=d=function(t){function n(r){a(this,n);var i=o(this,t.call(this,r));return i.retry=function(){i.setState({error:null,loading:!0,timedOut:!1}),h=e(m.loader),i._loadModule()},y(),i.state={error:h.error,pastDelay:!1,timedOut:!1,loading:h.loading,loaded:h.loaded},i}return i(n,t),n.preload=function(){return y()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(m.modules)&&m.modules.forEach((function(t){e.context.loadable.report(t)})),h.loading){"number"==typeof m.delay&&(0===m.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){e.setState({pastDelay:!0})}),m.delay)),"number"==typeof m.timeout&&(this._timeout=setTimeout((function(){e.setState({timedOut:!0})}),m.timeout));var t=function(){e._mounted&&(e.setState({error:h.error,loaded:h.loaded,loading:h.loading}),e._clearTimeouts())};h.promise.then((function(){t()})).catch((function(e){t()}))}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?l.createElement(m.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?m.render(this.state.loaded,this.props):null},n}(l.Component),d.contextTypes={loadable:c.shape({report:c.func.isRequired})},f}function h(e){return m(d,e)}h.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return m(f,e)};var y=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return i(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return l.Children.only(this.props.children)},t}(l.Component);function b(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then((function(){if(e.length)return b(e)}))}y.propTypes={report:c.func.isRequired},y.childContextTypes={loadable:c.shape({report:c.func.isRequired}).isRequired},h.Capture=y,h.preloadAll=function(){return new Promise((function(e,t){b(s).then(e,t)}))},h.preloadReady=function(){return new Promise((function(e,t){b(u).then(e,e)}))},e.exports=h},JX7q:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",(function(){return r}))},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return R}));n("0mN4"),n("84bF");var r=n("q1tI"),a=n.n(r),o=n("Wbzz"),i=n("Bl7J"),l=n("9eSz"),c=n.n(l),s=n("vrFN"),u=n("vOnD"),d=(n("fnl6"),n("CnBM")),f=n.n(d),p=(n("LK8F"),n("dZ+Y"),n("8+KV"),n("bWfx"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("f3/d"),n("DNiP"),n("wx14"));var m=n("JX7q"),h=n("rePB"),y=n("17x9"),b=n.n(y),g=n("QLaP"),v=n.n(g),E=n("pIsd"),w=n.n(E),_=function(){function e(e,t,n){var r=this;this.nativeMediaQueryList=e.matchMedia(t),this.active=!0,this.cancellableListener=function(){r.matches=r.nativeMediaQueryList.matches,r.active&&n.apply(void 0,arguments)},this.nativeMediaQueryList.addListener(this.cancellableListener),this.matches=this.nativeMediaQueryList.matches}return e.prototype.cancel=function(){this.active=!1,this.nativeMediaQueryList.removeListener(this.cancellableListener)},e}(),O=b.a.oneOfType([b.a.string,b.a.object,b.a.arrayOf(b.a.object.isRequired)]),j=function(e){var t,n;function r(t){var n,r;return n=e.call(this,t)||this,Object(h.a)(Object(m.a)(Object(m.a)(n)),"queries",[]),Object(h.a)(Object(m.a)(Object(m.a)(n)),"getMatches",(function(){return function(e){var t=Object.keys(e);if(1===t.length&&"__DEFAULT__"===t[0])return e.__DEFAULT__;return e}(n.queries.reduce((function(e,t){var n,r=t.name,a=t.mqListener;return Object(p.a)({},e,((n={})[r]=a.matches,n))}),{}))})),Object(h.a)(Object(m.a)(Object(m.a)(n)),"updateMatches",(function(){var e=n.getMatches();n.setState((function(){return{matches:e}}),n.onChange)})),t.query||t.queries||t.query&&t.queries||v()(!1),void 0!==t.defaultMatches&&t.query&&"boolean"!=typeof t.defaultMatches&&v()(!1),void 0!==t.defaultMatches&&t.queries&&"object"!=typeof t.defaultMatches&&v()(!1),"object"!=typeof window?(r=void 0!==t.defaultMatches?t.defaultMatches:!!t.query||Object.keys(n.props.queries).reduce((function(e,t){var n;return Object(p.a)({},e,((n={})[t]=!0,n))}),{}),n.state={matches:r},Object(m.a)(n)):(n.initialize(),n.state={matches:void 0!==n.props.defaultMatches?n.props.defaultMatches:n.getMatches()},n.onChange(),n)}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.initialize=function(){var e=this,t=this.props.targetWindow||window;"function"!=typeof t.matchMedia&&v()(!1);var n=this.props.queries||{__DEFAULT__:this.props.query};this.queries=Object.keys(n).map((function(r){var a=n[r],o="string"!=typeof a?w()(a):a;return{name:r,mqListener:new _(t,o,e.updateMatches)}}))},o.componentDidMount=function(){this.initialize(),void 0!==this.props.defaultMatches&&this.updateMatches()},o.onChange=function(){var e=this.props.onChange;e&&e(this.state.matches)},o.componentWillUnmount=function(){this.queries.forEach((function(e){return e.mqListener.cancel()}))},o.render=function(){var e=this.props,t=e.children,n=e.render,r=this.state.matches,o="object"==typeof r?Object.keys(r).some((function(e){return r[e]})):r;return n?o?n(r):null:t?"function"==typeof t?t(r):(!Array.isArray(t)||t.length)&&o?a.a.Children.only(t)&&"string"==typeof a.a.Children.only(t).type?a.a.Children.only(t):a.a.cloneElement(a.a.Children.only(t),{matches:r}):null:null},r}(a.a.Component);Object(h.a)(j,"propTypes",{defaultMatches:b.a.oneOfType([b.a.bool,b.a.objectOf(b.a.bool)]),query:O,queries:b.a.objectOf(O),render:b.a.func,children:b.a.oneOfType([b.a.node,b.a.func]),targetWindow:b.a.object,onChange:b.a.func});var C=j;function M(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    @import url('https://fonts.googleapis.com/css2?family=Alata&family=Alatsi&family=Roboto:wght@400;700&display=swap');\n    :root{\n        --red: #E3001C;\n        --yellow: #FDC403;\n        --blue: #02519E;\n        --ligth-blue: #8FA4B9;\n        --pink:#DC4596;\n        --orange:#F05632;\n    }\n\n"]);return M=function(){return e},e}var S=f()({loader:function(){return Promise.all([n.e(4),n.e(5)]).then(n.bind(null,"0vpp"))},loading:function(){return a.a.createElement("div",null,"Loading threejs...")}}),x=Object(u.a)(M()),L=Object(u.b)(o.Link).withConfig({displayName:"pages__StyledLink",componentId:"sc-1bygtfm-0"})(["color:var(--blue);text-align:center;font-size:4rem;font-family:'Alata',sans-serif;text-transform:uppercase;"]),q=u.b.section.withConfig({displayName:"pages__SiteDescriptionSection",componentId:"sc-1bygtfm-1"})(["font-family:'Alata',sans-serif;font-size:1.25rem;color:var(--orange);text-align:center;padding:1rem;margin:2rem 1rem;"]),T=u.b.div.withConfig({displayName:"pages__FlexContainerColumnCenter",componentId:"sc-1bygtfm-2"})(["display:flex;justify-content:center;align-items:center;margin:3.5rem 0;div{margin:0 2rem;text-align:center;}h1{font-size:1.75rem;}h2{font-size:1.25rem;font-family:'Roboto';background-color:var(--yellow);}"]),N=u.b.div.withConfig({displayName:"pages__CuadradosStyled",componentId:"sc-1bygtfm-3"})(["width:auto;height:90vh;overflow:auto;margin-left:3.15rem;"]),P=u.b.div.withConfig({displayName:"pages__Main",componentId:"sc-1bygtfm-4"})(["position:relative;width:100%;height:100%;overflow:hidden;"]),A=u.b.div.withConfig({displayName:"pages__Text",componentId:"sc-1bygtfm-5"})(["position:absolute;display:inline-block;top:50%;transform:translate3d(0,-50%,0);left:30%;z-index:200;"]),I=(u.b.div.withConfig({displayName:"pages__Center",componentId:"sc-1bygtfm-6"})(["text-align:center;"]),u.b.div.withConfig({displayName:"pages__StyledCuadrados",componentId:"sc-1bygtfm-7"})(["width:100%;height:100vh;margin:0;padding:0;overflow:auto;"]),function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(C,{queries:{small:{maxWidth:599}}},(function(e){return e.small?a.a.createElement("h1",{className:"portfolio"},"Portfolio ",a.a.createElement("br",null)):a.a.createElement("h1",{className:"portfolio"},"Portfolio ",a.a.createElement("br",null),"Portfolio ",a.a.createElement("br",null)," Portfolio ",a.a.createElement("br",null))})))},r}(a.a.Component)),k=(f()({loader:function(){return a.a.createElement(I,null)},loading:function(){return a.a.createElement("h1",{className:"portfolio"},"Portfolio")}}),function(e){return a.a.createElement("div",null,a.a.createElement("h1",null,e.title),a.a.createElement("h2",null,e.tecn))}),F=function(){var e="undefined"!=typeof window;return a.a.createElement("section",{id:"me",class:"grid-container"},a.a.createElement("h1",{className:"name1"}," NATALI ")," ",a.a.createElement("br",null),a.a.createElement("h1",{className:"name2"},"PALACIO"),a.a.createElement("h1",{className:"name3"},"PASTOR"),a.a.createElement("div",{className:"red-line"}),a.a.createElement("div",{className:"blue-line"}),a.a.createElement("div",{className:"yellow-line"}),e&&a.a.createElement(I,null),a.a.createElement("section",{className:"me-description"},a.a.createElement("p",null,"Hi! I’m a ",a.a.createElement("span",{class:"bold"},"Javascript")," developer from Argentina, and I can help you build AWESOME web solutions. "),a.a.createElement("p",null,"I search to balance function and form"),a.a.createElement("p",null,"The technologies that I use are ",a.a.createElement("span",{className:"bold"},"HTML, CSS, Javascript, React")," and ",a.a.createElement("span",{className:"bold"},"Node.")),a.a.createElement("p",null,"Here you can see what i’ve built. If you are interested, ",a.a.createElement(o.Link,{to:"contact"},a.a.createElement("span",{className:"bold bold-blue"},"let’s talk!")))))},R=(t.default=function(e){var t="undefined"!=typeof window;return a.a.createElement(i.a,null,a.a.createElement(x,null),a.a.createElement(s.a,{title:"Portfolio Natalí Palacio Pastor - Home"}),a.a.createElement(F,null),a.a.createElement("section",null,a.a.createElement("h1",null,"Some proyects"),a.a.createElement(o.Link,{to:"projects/asistocovid"},a.a.createElement(T,null,a.a.createElement(k,{title:"Asistocovid",tecn:"React, Angular, JS, CSS, HTML, Figma"}),a.a.createElement(c.a,{fixed:e.data.imageOne.childImageSharp.fixed,objectFit:"cover",objectPosition:"50% 50%"}))),a.a.createElement(o.Link,{to:"projects/animated-city-landing"},a.a.createElement(T,null,a.a.createElement(c.a,{fixed:e.data.imageTwo.childImageSharp.fixed,objectFit:"cover",objectPosition:"50% 50%"}),a.a.createElement(k,{title:"Animated City Landing",tecn:"JS, GSAP, CSS, HTML, Figma"}))),a.a.createElement(o.Link,{to:"projects/mern-excercise-tracker"},a.a.createElement(T,null,a.a.createElement(k,{title:"MERN Excercise Tracker",tecn:"MongoDB, Node, Express, React, Material-UI"}),a.a.createElement(c.a,{fixed:e.data.imageThree.childImageSharp.fixed,objectFit:"cover",objectPosition:"50% 50%"}))),a.a.createElement(P,null,a.a.createElement(A,null,a.a.createElement(L,{to:"projects"},"Click here to see all my proyects")),t&&a.a.createElement(N,null,a.a.createElement(S,null)))),a.a.createElement(q,null,a.a.createElement("h6",null,"This site was built with GatsbyJS, React, ThreeJS, CSS Grids and Flexbox!"),a.a.createElement("h6",null,"It's fully responsive and mobile-friendly")))},"404839263")},pIsd:function(e,t,n){n("8+KV"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");var r=n("BJfS"),a=function(e){var t="",n=Object.keys(e);return n.forEach((function(a,o){var i=e[a];(function(e){return/[height|width]$/.test(e)})(a=r(a))&&"number"==typeof i&&(i+="px"),t+=!0===i?a:!1===i?"not "+a:"("+a+": "+i+")",o<n.length-1&&(t+=" and ")})),t};e.exports=function(e){var t="";return"string"==typeof e?e:e instanceof Array?(e.forEach((function(n,r){t+=a(n),r<e.length-1&&(t+=", ")})),t):a(e)}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=component---src-pages-index-js-9b30c1621bae267fbeff.js.map