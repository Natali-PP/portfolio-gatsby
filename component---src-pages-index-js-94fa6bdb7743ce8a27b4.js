(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{CnBM:function(e,t,n){"use strict";n("91GP"),n("VRzm"),n("XfO3"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("LK8F"),n("/SS/"),n("hHhE"),n("rE2o"),n("ioFf");var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n("q1tI"),c=n("17x9"),s=[],u=[];function d(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function m(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(a){var o=d(e[a]);o.loading?t.loading=!0:(t.loaded[a]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[a]=e})).catch((function(e){t.error=e}))}))}catch(a){t.error=a}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function p(e,t){return i.createElement((n=e)&&n.__esModule?n.default:n,t);var n}function f(e,t){var d,m;if(!t.loading)throw new Error("react-loadable requires a `loading` component");var f=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:p,webpack:null,modules:null},t),h=null;function y(){return h||(h=e(f.loader)),h.promise}return s.push(y),"function"==typeof f.webpack&&u.push((function(){if(e=f.webpack,"object"===a(n.m)&&e().every((function(e){return void 0!==e&&void 0!==n.m[e]})))return y();var e})),m=d=function(t){function n(a){o(this,n);var l=r(this,t.call(this,a));return l.retry=function(){l.setState({error:null,loading:!0,timedOut:!1}),h=e(f.loader),l._loadModule()},y(),l.state={error:h.error,pastDelay:!1,timedOut:!1,loading:h.loading,loaded:h.loaded},l}return l(n,t),n.preload=function(){return y()},n.prototype.componentWillMount=function(){this._mounted=!0,this._loadModule()},n.prototype._loadModule=function(){var e=this;if(this.context.loadable&&Array.isArray(f.modules)&&f.modules.forEach((function(t){e.context.loadable.report(t)})),h.loading){"number"==typeof f.delay&&(0===f.delay?this.setState({pastDelay:!0}):this._delay=setTimeout((function(){e.setState({pastDelay:!0})}),f.delay)),"number"==typeof f.timeout&&(this._timeout=setTimeout((function(){e.setState({timedOut:!0})}),f.timeout));var t=function(){e._mounted&&(e.setState({error:h.error,loaded:h.loaded,loading:h.loading}),e._clearTimeouts())};h.promise.then((function(){t()})).catch((function(e){t()}))}},n.prototype.componentWillUnmount=function(){this._mounted=!1,this._clearTimeouts()},n.prototype._clearTimeouts=function(){clearTimeout(this._delay),clearTimeout(this._timeout)},n.prototype.render=function(){return this.state.loading||this.state.error?i.createElement(f.loading,{isLoading:this.state.loading,pastDelay:this.state.pastDelay,timedOut:this.state.timedOut,error:this.state.error,retry:this.retry}):this.state.loaded?f.render(this.state.loaded,this.props):null},n}(i.Component),d.contextTypes={loadable:c.shape({report:c.func.isRequired})},m}function h(e){return f(d,e)}h.Map=function(e){if("function"!=typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return f(m,e)};var y=function(e){function t(){return o(this,t),r(this,e.apply(this,arguments))}return l(t,e),t.prototype.getChildContext=function(){return{loadable:{report:this.props.report}}},t.prototype.render=function(){return i.Children.only(this.props.children)},t}(i.Component);function g(e){for(var t=[];e.length;){var n=e.pop();t.push(n())}return Promise.all(t).then((function(){if(e.length)return g(e)}))}y.propTypes={report:c.func.isRequired},y.childContextTypes={loadable:c.shape({report:c.func.isRequired}).isRequired},h.Capture=y,h.preloadAll=function(){return new Promise((function(e,t){g(s).then(e,t)}))},h.preloadReady=function(){return new Promise((function(e,t){g(u).then(e,e)}))},e.exports=h},RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return C}));n("0mN4");var a=n("q1tI"),o=n.n(a),r=n("Wbzz"),l=n("Bl7J"),i=n("9eSz"),c=n.n(i),s=n("vrFN"),u=n("vOnD"),d=(n("fnl6"),n("CnBM"));function m(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    @import url('https://fonts.googleapis.com/css2?family=Alata&family=Alatsi&family=Roboto:wght@400;700&display=swap');\n    :root{\n        --red: #E3001C;\n        --yellow: #FDC403;\n        --blue: #02519E;\n        --ligth-blue: #8FA4B9;\n        --pink:#DC4596;\n        --orange:#F05632;\n    }\n\n"]);return m=function(){return e},e}var p=n.n(d)()({loader:function(){return Promise.all([n.e(4),n.e(5)]).then(n.bind(null,"0vpp"))},loading:function(){return o.a.createElement("div",null,"Loading threejs...")}}),f=Object(u.a)(m()),h=Object(u.b)(r.Link).withConfig({displayName:"pages__StyledLink",componentId:"sc-6kvjaa-0"})(["color:var(--blue);text-align:center;font-size:4rem;font-family:'Alata',sans-serif;text-transform:uppercase;"]),y=u.b.section.withConfig({displayName:"pages__SiteDescriptionSection",componentId:"sc-6kvjaa-1"})(["font-family:'Alata',sans-serif;font-size:1.25rem;color:var(--orange);text-align:center;padding:1rem;margin:2rem 1rem;"]),g=u.b.div.withConfig({displayName:"pages__FlexContainerColumnCenter",componentId:"sc-6kvjaa-2"})(["display:flex;justify-content:center;align-items:center;margin:3.5rem 0;div{margin:0 2rem;text-align:center;}h1{font-size:1.75rem;}h2{font-size:1.25rem;font-family:'Roboto';background-color:var(--yellow);}"]),b=u.b.div.withConfig({displayName:"pages__CuadradosStyled",componentId:"sc-6kvjaa-3"})(["width:auto;height:80vh;overflow:auto;margin-left:3rem;"]),E=u.b.div.withConfig({displayName:"pages__Main",componentId:"sc-6kvjaa-4"})(["position:relative;width:100%;height:100%;overflow:hidden;"]),v=u.b.div.withConfig({displayName:"pages__Text",componentId:"sc-6kvjaa-5"})(["position:absolute;display:inline-block;top:50%;transform:translate3d(0,-50%,0);left:30%;line-height:1em;z-index:200;"]),w=(u.b.div.withConfig({displayName:"pages__Center",componentId:"sc-6kvjaa-6"})(["text-align:center;"]),u.b.div.withConfig({displayName:"pages__StyledCuadrados",componentId:"sc-6kvjaa-7"})(["width:100%;height:100vh;margin:0;padding:0;overflow:auto;"]),function(e){return e.innerwidth>=600?o.a.createElement("h1",{className:"portfolio"},"Portfolio ",o.a.createElement("br",null),"Portfolio ",o.a.createElement("br",null)," Portfolio ",o.a.createElement("br",null)):o.a.createElement("h1",{className:"portfolio"},"Portfolio ",o.a.createElement("br",null))}),S=function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,e.title),o.a.createElement("h2",null,e.tecn))},_=function(){return o.a.createElement("section",{id:"me",class:"grid-container"},o.a.createElement("h1",{className:"name1"}," NATALI ")," ",o.a.createElement("br",null),o.a.createElement("h1",{className:"name2"},"PALACIO"),o.a.createElement("h1",{className:"name3"},"PASTOR"),o.a.createElement("div",{className:"red-line"}),o.a.createElement("div",{className:"blue-line"}),o.a.createElement("div",{className:"yellow-line"}),o.a.createElement("h1",{className:"portfolio"},"Portfolio ",o.a.createElement("br",null)),o.a.createElement(w,{innerwidth:window.innerWidth}),o.a.createElement("section",{className:"me-description"},o.a.createElement("p",null,"Hi! I’m a ",o.a.createElement("span",{class:"bold"},"Javascript")," developer from Argentina, and I can help you build AWESOME web solutions. "),o.a.createElement("p",null,"I search to balance function and form"),o.a.createElement("p",null,"The technologies that I use are ",o.a.createElement("span",{className:"bold"},"HTML, CSS, Javascript, React")," and ",o.a.createElement("span",{className:"bold"},"Node.")),o.a.createElement("p",null,"Here you can see what i’ve built. If you are interested, ",o.a.createElement(r.Link,{to:"contact"},o.a.createElement("span",{className:"bold bold-blue"},"let’s talk!")))))};t.default=function(e){var t="undefined"!=typeof window;return o.a.createElement(l.a,null,o.a.createElement(f,null),o.a.createElement(s.a,{title:"Portfolio Natalí Palacio Pastor - Home"}),o.a.createElement(_,null),o.a.createElement("section",null,o.a.createElement("h1",null,"Some proyects"),o.a.createElement(r.Link,{to:"projects/asistocovid"},o.a.createElement(g,null,o.a.createElement(S,{title:"Asistocovid",tecn:"React, Angular, JS, CSS, HTML, Figma"}),o.a.createElement(c.a,{fixed:e.data.imageOne.childImageSharp.fixed,objectFit:"cover",objectPosition:"50% 50%"}))),o.a.createElement(r.Link,{to:"projects/animated-city-landing"},o.a.createElement(g,null,o.a.createElement(c.a,{fixed:e.data.imageTwo.childImageSharp.fixed,objectFit:"cover",objectPosition:"50% 50%"}),o.a.createElement(S,{title:"Animated City Landing",tecn:"JS, GSAP, CSS, HTML, Figma"}))),o.a.createElement(r.Link,{to:"projects/mern-excercise-tracker"},o.a.createElement(g,null,o.a.createElement(S,{title:"MERN Excercise Tracker",tecn:"MongoDB, Node, Express, React, Material-UI"}),o.a.createElement(c.a,{fixed:e.data.imageThree.childImageSharp.fixed,objectFit:"cover",objectPosition:"50% 50%"}))),o.a.createElement(E,null,o.a.createElement(v,null,o.a.createElement(h,{to:"projects"},"See all my proyects")),t&&o.a.createElement(b,null,o.a.createElement(p,null)))),o.a.createElement(y,null,o.a.createElement("h6",null,"This site was built with GatsbyJS, React, ThreeJS, CSS Grids and Flexbox!"),o.a.createElement("h6",null,"It's fully responsive and mobile-friendly")))};var C="404839263"}}]);
//# sourceMappingURL=component---src-pages-index-js-94fa6bdb7743ce8a27b4.js.map