(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),s=a(148),n=a(160),o=a(141),c=a(161),d=a.n(c),l=function(){return r.a.createElement(o.StaticQuery,{query:"959023867",render:function(e){return r.a.createElement(d.a,{style:{position:"absolute",top:0,left:0,right:0,zIndex:-1,height:"100%"},fluid:e.placeholderImage.childImageSharp.fluid})},data:n})},u=a(146);t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(u.a,{title:"Home",keywords:["hbspirits","wine","vodka","liquor","spirits"]}),r.a.createElement("h1",{style:{margin:"auto",textAlign:"center",marginTop:"15vh",fontSize:60}},"HB Spirits"),r.a.createElement(l,null))}},141:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return A}),a.d(t,"StaticQuery",function(){return f});var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(140),c=a.n(o);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var d=a(142),l=a.n(d);a.d(t,"PageRenderer",function(){return l.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var A=r.a.createContext({}),f=function(e){return r.a.createElement(A.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:n.a.object,query:n.a.string.isRequired,render:n.a.func,children:n.a.func}},142:function(e,t,a){var i;e.exports=(i=a(144))&&i.default||i},143:function(e){e.exports={data:{site:{siteMetadata:{title:"HB Spirits"}}}}},144:function(e,t,a){"use strict";a.r(t);a(32);var i=a(0),r=a.n(i),s=a(4),n=a.n(s),o=a(54),c=a(2),d=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:n.a.shape({pathname:n.a.string.isRequired}).isRequired},t.default=d},145:function(e,t,a){},146:function(e,t,a){"use strict";var i=a(147),r=a(0),s=a.n(r),n=a(4),o=a.n(n),c=a(151),d=a.n(c),l=a(141);function u(e){var t=e.description,a=e.lang,r=e.meta,n=e.keywords,o=e.title;return s.a.createElement(l.StaticQuery,{query:A,render:function(e){var i=t||e.site.siteMetadata.description;return s.a.createElement(d.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"}].concat(n.length>0?{name:"keywords",content:n.join(", ")}:[]).concat(r)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var A="1025518380"},147:function(e){e.exports={data:{site:{siteMetadata:{title:"HB Spirits",description:"A Spirit and Wine Importing company.",author:"Alex Thomsen"}}}}},148:function(e,t,a){"use strict";var i=a(143),r=a(0),s=a.n(r),n=a(4),o=a.n(n),c=a(141),d=function(e){var t=e.siteTitle;return s.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},s.a.createElement("h1",{style:{margin:0}},s.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},t))))};d.propTypes={siteTitle:o.a.string},d.defaultProps={siteTitle:""};a(145);var l=function(e){var t=e.children;return s.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))},data:i})};l.propTypes={children:o.a.node.isRequired};t.a=l},160:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFA//EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABtp4ow+Sxz//EABoQAAIDAQEAAAAAAAAAAAAAAAABAgMSESH/2gAIAQEAAQUCbJy90h3vkrnp3M//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwFn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFhABAQEAAAAAAAAAAAAAAAAAEDEA/9oACAEBAAY/AmE3/8QAGhAAAgIDAAAAAAAAAAAAAAAAAAERIRAxYf/aAAgBAQABPyGgUk128c1CDKUiQP/aAAwDAQACAAMAAAAQkO//xAAXEQEBAQEAAAAAAAAAAAAAAAABABFR/9oACAEDAQE/EEWnL//EABYRAQEBAAAAAAAAAAAAAAAAAAEAIf/aAAgBAgEBPxAG2//EAB0QAQEBAAEFAQAAAAAAAAAAAAERACExQWFxgZH/2gAIAQEAAT8QEVH93YlWHlPGa9Q+muBNnLc2JTClK+9//9k=",aspectRatio:1.5,src:"/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/f4589/wideHBspirits.jpg",srcSet:"/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/5911c/wideHBspirits.jpg 500w,\n/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/a2da7/wideHBspirits.jpg 1000w,\n/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/f4589/wideHBspirits.jpg 2000w,\n/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/e439e/wideHBspirits.jpg 3000w,\n/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/42d02/wideHBspirits.jpg 4000w,\n/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/c806b/wideHBspirits.jpg 5472w",srcWebp:"/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/b83ce/wideHBspirits.webp",srcSetWebp:"/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/419ff/wideHBspirits.webp 500w,\n/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/907fd/wideHBspirits.webp 1000w,\n/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/b83ce/wideHBspirits.webp 2000w,\n/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/84b88/wideHBspirits.webp 3000w,\n/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/5e0e3/wideHBspirits.webp 4000w,\n/hbspirits/static/70e3e7cf57a437855c1086b86fcebc52/22517/wideHBspirits.webp 5472w",sizes:"(max-width: 2000px) 100vw, 2000px"}}}}}},161:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,s=i(a(7)),n=i(a(51)),o=i(a(149)),c=i(a(150)),d=i(a(0)),l=i(a(4)),u=function(e){var t=(0,c.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",s=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",c=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+o+c+t+n+s+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=d.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,s=(0,o.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,c.default)({},s,{onLoad:i,onError:r,ref:t,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:l.default.object,onError:l.default.func,onLoad:l.default.func};var m=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,s=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var c=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:s,hasNoScript:c,seenBefore:o},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)((0,n.default)(a))),a.handleRef=a.handleRef.bind((0,n.default)((0,n.default)(a))),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,s=void 0===r?{}:r,n=e.imgStyle,o=void 0===n?{}:n,l=e.placeholderStyle,A=void 0===l?{}:l,f=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,y=e.Tag,w="boolean"==typeof m?"lightgray":m,E=(0,c.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,A),S=(0,c.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),v={title:t,alt:this.state.isVisible?"":a,style:E,className:f};if(p){var B=p;return d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},s),ref:this.handleRef,key:"fluid-"+JSON.stringify(B.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/B.aspectRatio+"%"}}),B.base64&&d.default.createElement(b,(0,c.default)({src:B.base64},v)),B.tracedSVG&&d.default.createElement(b,(0,c.default)({src:B.tracedSVG},v)),w&&d.default.createElement(y,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,B.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),d.default.createElement("source",{srcSet:B.srcSet,sizes:B.sizes}),d.default.createElement(b,{alt:a,title:t,src:B.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,c.default)({alt:a,title:t},B))}}))}if(h){var R=h,j=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},s);return"inherit"===s.display&&delete j.display,d.default.createElement(y,{className:(i||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&d.default.createElement(b,(0,c.default)({src:R.base64},v)),R.tracedSVG&&d.default.createElement(b,(0,c.default)({src:R.tracedSVG},v)),w&&d.default.createElement(y,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(b,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,c.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(d.default.Component);m.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var y=l.default.shape({width:l.default.number.isRequired,height:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string}),w=l.default.shape({aspectRatio:l.default.number.isRequired,src:l.default.string.isRequired,srcSet:l.default.string.isRequired,sizes:l.default.string.isRequired,base64:l.default.string,tracedSVG:l.default.string,srcWebp:l.default.string,srcSetWebp:l.default.string});m.propTypes={resolutions:y,sizes:w,fixed:y,fluid:w,fadeIn:l.default.bool,title:l.default.string,alt:l.default.string,className:l.default.oneOfType([l.default.string,l.default.object]),critical:l.default.bool,style:l.default.object,imgStyle:l.default.object,placeholderStyle:l.default.object,placeholderClassName:l.default.string,backgroundColor:l.default.oneOfType([l.default.string,l.default.bool]),onLoad:l.default.func,onError:l.default.func,onStartLoad:l.default.func,Tag:l.default.string};var E=m;t.default=E}}]);
//# sourceMappingURL=component---src-pages-index-js-eec68ef35669d2e98ccd.js.map