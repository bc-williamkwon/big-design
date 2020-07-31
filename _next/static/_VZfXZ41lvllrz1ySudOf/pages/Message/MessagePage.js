(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{Ggzw:function(e,n,t){"use strict";t.d(n,"d",(function(){return u})),t.d(n,"c",(function(){return f})),t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t("cxan"),a=t("ERkP"),i=t.n(a),s=t("R5dR"),o=t("lIm4"),l=t("nFRM"),c=i.a.createElement,u=[{name:"header",types:"string",description:"Optional header to display in message."},{name:"messages",types:c(s.a,{href:"#message-item-prop-table"},"MessageItem"),description:c(i.a.Fragment,null,"See ",c(s.a,{href:"#message-item-prop-table"},"below")," for usage."),required:!0},{name:"type",types:["success","error","warning","info"],description:"Determines the style of message to display.",defaultValue:"success"},{name:"onClose",types:"() => void",description:"Function that will be called on close events."}],p=[{name:"text",types:"string",description:"Message to be displayed.",required:!0},{name:"link",types:c(s.a,{href:"#message-link-item-prop-table"},"MessageLinkItem"),description:c(i.a.Fragment,null,"See ",c(s.a,{href:"#message-link-item-prop-table"},"below")," for usage.")}],f=[{name:"external",types:"boolean",description:c(i.a.Fragment,null,"Shows an external icons when the ",c(o.a,{primary:!0},"external"),' flag is set and target="_blank".')},{name:"href",types:"string",description:"Same as a HTML anchor href attribute."},{name:"text",types:"string",description:"Link text to display."},{name:"target",types:"string",description:"Same as a HTML anchor target attribute."}],d=function(e){return c(l.a,Object(r.a)({title:"",propList:p},e,{id:"message-item-prop-table"}))},g=function(e){return c(l.a,Object(r.a)({title:"",propList:f},e,{id:"message-link-item-prop-table"}))}},KeDb:function(e,n,t){"use strict";var r=t("zQIG"),a=t("8mBC"),i=t("I/kN"),s=t("cMav"),o=t("pSQP");function l(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=o(e);if(n){var a=o(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return s(this,t)}}var c=t("Y3ZS"),u=t("pONU");n.__esModule=!0,n.default=void 0;var p,f=u(t("ERkP")),d=t("cRaD"),g=t("fvxO"),m=c(t("7xIC")),h=t("L9lV");function y(e){return e&&"object"===typeof e?(0,g.formatWithValidation)(e):e}var v=new Map,b=window.IntersectionObserver,M={};function k(){return p||(b?p=new b((function(e){e.forEach((function(e){if(v.has(e.target)){var n=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),v.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0)}var x=function(e){i(t,e);var n=l(t);function t(e){var a;return r(this,t),(a=n.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var n=null,t=null,r=null;return function(a,i){if(r&&a===n&&i===t)return r;var s=e(a,i);return n=a,t=i,r=s,s}}((function(e,n){return{href:(0,h.addBasePath)(y(e)),as:n?(0,h.addBasePath)(y(n)):n}})),a.linkClicked=function(e){var n=e.currentTarget,t=n.nodeName,r=n.target;if("A"!==t||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=a.formatUrls(a.props.href,a.props.as),s=i.href,o=i.as;if(function(e){var n=(0,d.parse)(e,!1,!0),t=(0,d.parse)((0,g.getLocationOrigin)(),!1,!0);return!n.host||n.protocol===t.protocol&&n.host===t.host}(s)){var l=window.location.pathname;s=(0,d.resolve)(l,s),o=o?(0,d.resolve)(l,o):s,e.preventDefault();var c=a.props.scroll;null==c&&(c=o.indexOf("#")<0),m.default[a.props.replace?"replace":"push"](s,o,{shallow:a.props.shallow}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())}))}}},a.p=!1!==e.prefetch,a}return a(t,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,n=this.formatUrls(this.props.href,this.props.as),t=n.href,r=n.as,a=(0,d.resolve)(e,t);return[a,r?(0,d.resolve)(e,r):a]}},{key:"handleRef",value:function(e){var n=this;this.p&&b&&e&&e.tagName&&(this.cleanUpListeners(),M[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,n){var t=k();return t?(t.observe(e),v.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}v.delete(e)}):function(){}}(e,(function(){n.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var n=this.getPaths();m.default.prefetch(n[0],n[1],e).catch((function(e){0})),M[n.join("%")]=!0}}},{key:"render",value:function(){var e=this,n=this.props.children,t=this.formatUrls(this.props.href,this.props.as),r=t.href,a=t.as;"string"===typeof n&&(n=f.default.createElement("a",null,n));var i=f.Children.only(n),s={ref:function(n){e.handleRef(n),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(n):"object"===typeof i.ref&&(i.ref.current=n))},onMouseEnter:function(n){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(n),e.prefetch({priority:!0})},onClick:function(n){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(n),n.defaultPrevented||e.linkClicked(n)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=a||r),f.default.cloneElement(i,s)}}]),t}(f.Component);n.default=x},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),a=t("jvFD"),i=t.n(a),s=t("ERkP"),o=t.n(s).a.createElement;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){return"/big-design"+e}}var c=function(e){var n=e.as,t=e.children,a=e.href;return o(i.a,{href:a,as:l(n),passHref:!0},"string"===typeof t?o(r.Link,null,t):t)}},akZe:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("cxan"),a=t("ERkP"),i=t.n(a),s=t("R5dR"),o=t("nFRM"),l=i.a.createElement,c=[{name:"margin",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:l(s.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],u=function(e){return l(o.a,Object(r.a)({title:"Margin",propList:c},e))}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("d2TB"),a=t("XPf/"),i=t("BtTX"),s=t("ERkP"),o=t.n(s),l=t("j/s1"),c=Object(l.e)(r.Flex).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),u=o.a.createElement,p=function(e){var n=e.children,t=e.title,o=Object(s.useState)(!0),l=o[0],p=o[1],f=function(){return p(!l)};return u("div",null,u(c,{marginBottom:"xLarge",alignItems:"center",onClick:f,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||f()},tabIndex:0},l?u(a.a,{title:"Expand"}):u(i.a,{title:"Collapse"}),u(r.Text,null,t)),!l&&n)}},cqvs:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Message/MessagePage",function(){return t("pkIY")}])},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("ERkP"),a=t.n(r),i=t("j/s1"),s=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(i.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(i.d)(["color:",";"],t.colors.primary70)})),o=a.a.createElement,l=function(e){return o(s,e)};l.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("d2TB"),a=t("ERkP"),i=t.n(a),s=t("lIm4"),o=t("c2K2"),l=i.a.createElement,c=function(e){var n=e.collapsible,t=e.id,a=e.propList,c=e.title,p=function(){return l(r.TableFigure,{marginBottom:"xLarge"},l(r.Table,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return l(i.a.Fragment,null,l(s.a,{primary:!0},n),t?l("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return l(u,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return l(s.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return l(r.Text,null,n)}}],items:a}),l(r.Small,{marginTop:"xSmall"},"Props ending with * are required"))};return n?l(o.a,{title:"".concat(c," Props")},p()):l(i.a.Fragment,null,l(r.H2,{id:t},c),p())},u=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return l(i.a.Fragment,{key:e},e.type===r.Link?l(s.a,{highlight:!1},e):l(s.a,null,e),t<n.length-1?" | ":null)})):n.type===r.Link?l(s.a,{highlight:!1},n):l(s.a,null,n)}},pkIY:function(e,n,t){"use strict";t.r(n);var r=t("d2TB"),a=t("ERkP"),i=t.n(a),s=t("GsAr"),o=t("c2K2"),l=t("lIm4"),c=t("akZe"),u=t("cxan"),p=t("nFRM"),f=t("Ggzw"),d=i.a.createElement,g=function(e){return d(p.a,Object(u.a)({title:"Message",propList:f.d},e))},m=i.a.createElement;n.default=function(){return m(i.a.Fragment,null,m(r.H0,null,"Messages"),m(r.Text,null,"A message primarily used for displaying page/table messaging, feature/discover/system level messages, or even non-critical messaging."),m(s.a,null,"<Message\n  header=\"Header\"\n  messages={[\n    {\n      text: 'Required description copy.',\n      link: {\n        text: 'Optional Link',\n        href: '#',\n      },\n    },\n  ]}\n  onClose={() => null}\n/>"),m(r.H1,null,"API"),m(g,null),m(f.a,{title:"Message[MessageItem]"}),m(f.b,{title:"Message[MessageLinkItem]"}),m(r.H2,null,"Inherited Props"),m(o.a,{title:"Inherited Props"},m(c.a,null)),m(r.H1,null,"Examples"),m(r.H2,null,"Types"),m(r.Text,null,"There are four types of ",m(l.a,{primary:!0},"Messages")," based on the level of message you want to display."),m(s.a,null,'<>\n  <Message type="error" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <Message type="success" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <Message type="warning" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <Message type="info" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n</>'),m(r.H2,null,"Header"),m(r.Text,null,m(l.a,{primary:!0},"Message"),"'s allow you to pass an optional ",m(l.a,{primary:!0},"header")," prop."),m(s.a,null,'<>\n  <Message type="success" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <Message\n    header="Header"\n    type="success"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n</>'),m(r.H2,null,"onClose"),m(r.Text,null,"Toggles the visibility of the close button, and provides an on click callback."),m(s.a,null,'<>\n  <Message type="info" messages={[{ text: \'Required description copy.\' }]} marginVertical="medium" />\n  <Message\n    onClose={() => null}\n    type="info"\n    messages={[{ text: \'Required description copy.\' }]}\n    marginVertical="medium"\n  />\n</>'))}}},[["cqvs",1,2,4,6,9,7,0,3,5,8,10]]]);