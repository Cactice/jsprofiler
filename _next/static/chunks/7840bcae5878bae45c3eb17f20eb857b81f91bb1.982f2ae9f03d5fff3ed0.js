(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3niX":function(e,t,s){"use strict";t.__esModule=!0,t.flush=function(){var e=i.cssRules();return i.flush(),e},t.default=void 0;var r,n=s("q1tI");var i=new(((r=s("SevZ"))&&r.__esModule?r:{default:r}).default),o=function(e){var t,s;function r(t){var s;return(s=e.call(this,t)||this).prevProps={},s}s=e,(t=r).prototype=Object.create(s.prototype),t.prototype.constructor=t,t.__proto__=s,r.dynamic=function(e){return e.map((function(e){var t=e[0],s=e[1];return i.computeId(t,s)})).join(" ")};var n=r.prototype;return n.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},n.componentWillUnmount=function(){i.remove(this.props)},n.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&i.remove(this.prevProps),i.add(this.props),this.prevProps=this.props),null},r}(n.Component);t.default=o},"8oxB":function(e,t){var s,r,n=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(s===setTimeout)return setTimeout(e,0);if((s===i||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}!function(){try{s="function"===typeof setTimeout?setTimeout:i}catch(e){s=i}try{r="function"===typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c,u=[],h=!1,l=-1;function d(){h&&c&&(h=!1,c.length?u=c.concat(u):l=-1,u.length&&p())}function p(){if(!h){var e=a(d);h=!0;for(var t=u.length;t;){for(c=u,u=[];++l<t;)c&&c[l].run();l=-1,t=u.length}c=null,h=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function _(){}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var s=1;s<arguments.length;s++)t[s-1]=arguments[s];u.push(new m(e,t)),1!==u.length||h||a(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={},n.on=_,n.addListener=_,n.once=_,n.off=_,n.removeListener=_,n.removeAllListeners=_,n.emit=_,n.prependListener=_,n.prependOnceListener=_,n.listeners=function(e){return[]},n.binding=function(e){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(e){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},"9kyW":function(e,t,s){"use strict";e.exports=function(e){for(var t=5381,s=e.length;s;)t=33*t^e.charCodeAt(--s);return t>>>0}},E6PJ:function(e,t,s){"use strict";s.r(t),s.d(t,"Navbar",(function(){return h}));var r=s("MX0m"),n=s.n(r),i=s("q1tI"),o=s.n(i),a=s("WOJ4"),c=s.n(a),u=o.a.createElement,h=function(){return u("nav",{role:"navigation","aria-label":"main navigation",className:"jsx-".concat(c.a.__hash)+" navbar"},u("div",{className:"jsx-".concat(c.a.__hash)+" navbar-brand"},u("a",{href:"https://www.cactice.com",className:"jsx-".concat(c.a.__hash)+" navbar-item"},u("img",{src:"logos/logo_best.png",width:"28",height:"28",className:"jsx-".concat(c.a.__hash)})),u("a",{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",className:"jsx-".concat(c.a.__hash)+" navbar-burger burger"},u("span",{"aria-hidden":"true",className:"jsx-".concat(c.a.__hash)}),u("span",{"aria-hidden":"true",className:"jsx-".concat(c.a.__hash)}),u("span",{"aria-hidden":"true",className:"jsx-".concat(c.a.__hash)}))),u("div",{id:"navbarBasicExample",className:"jsx-".concat(c.a.__hash)+" navbar-menu"},u("div",{className:"jsx-".concat(c.a.__hash)+" navbar-start"},u("a",{className:"jsx-".concat(c.a.__hash)+" navbar-item"},"Home"),u("a",{className:"jsx-".concat(c.a.__hash)+" navbar-item"},"Documentation"),u("div",{className:"jsx-".concat(c.a.__hash)+" navbar-item has-dropdown is-hoverable"},u("a",{className:"jsx-".concat(c.a.__hash)+" navbar-link"},"More"),u("div",{className:"jsx-".concat(c.a.__hash)+" navbar-dropdown"},u("a",{className:"jsx-".concat(c.a.__hash)+" navbar-item"},"About"),u("a",{className:"jsx-".concat(c.a.__hash)+" navbar-item"},"Jobs"),u("a",{className:"jsx-".concat(c.a.__hash)+" navbar-item"},"Contact"),u("a",{className:"jsx-".concat(c.a.__hash)+" navbar-item"},"Report an issue")))),u("div",{className:"jsx-".concat(c.a.__hash)+" navbar-end"},u("div",{className:"jsx-".concat(c.a.__hash)+" navbar-item"},u("div",{className:"jsx-".concat(c.a.__hash)+" buttons"},u("a",{className:"jsx-".concat(c.a.__hash)+" button is-primary"},u("strong",{className:"jsx-".concat(c.a.__hash)},"Sign up")),u("a",{className:"jsx-".concat(c.a.__hash)+" button is-light"},"Log in"))))),u(n.a,{id:c.a.__hash},c.a))};t.default=h},MX0m:function(e,t,s){e.exports=s("3niX")},Qetd:function(e,t,s){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},SevZ:function(e,t,s){"use strict";t.__esModule=!0,t.default=void 0;var r=i(s("9kyW")),n=i(s("bVZc"));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,s=t.styleSheet,r=void 0===s?null:s,i=t.optimizeForSpeed,o=void 0!==i&&i,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new n.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var s=this.getIdAndRules(e),r=s.styleId,n=s.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var i=n.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=i,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,s=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(s in this._instancesCounts,"styleId: `"+s+"` not found"),this._instancesCounts[s]-=1,this._instancesCounts[s]<1){var r=this._fromServer&&this._fromServer[s];r?(r.parentNode.removeChild(r),delete this._fromServer[s]):(this._indices[s].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[s]),delete this._instancesCounts[s]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],s=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return s[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,s){if(!s)return"jsx-"+t;var n=String(s),i=t+n;return e[i]||(e[i]="jsx-"+(0,r.default)(t+"-"+n)),e[i]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(s,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var n=s+r;return t[n]||(t[n]=r.replace(e,s)),t[n]}},t.getIdAndRules=function(e){var t=this,s=e.children,r=e.dynamic,n=e.id;if(r){var i=this.computeId(n,r);return{styleId:i,rules:Array.isArray(s)?s.map((function(e){return t.computeSelector(i,e)})):[this.computeSelector(i,s)]}}return{styleId:this.computeId(n),rules:Array.isArray(s)?s:[s]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},WOJ4:function(e,t,s){},bVZc:function(e,t,s){"use strict";(function(e){function s(e,t){for(var s=0;s<t.length;s++){var r=t[s];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,n=function(e){return"[object String]"===Object.prototype.toString.call(e)},i=function(){function e(e){var t=void 0===e?{}:e,s=t.name,i=void 0===s?"stylesheet":s,a=t.optimizeForSpeed,c=void 0===a?r:a,u=t.isBrowser,h=void 0===u?"undefined"!==typeof window:u;o(n(i),"`name` must be a string"),this._name=i,this._deletedRulePlaceholder="#"+i+"-deleted-rule____{}",o("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=h,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var l=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=l?l.getAttribute("content"):null}var t,i,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,s){return"number"===typeof s?e._serverSheet.cssRules[s]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),s},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(o(n(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var s=this.getSheet();"number"!==typeof t&&(t=s.cssRules.length);try{s.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var i=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,i))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var s=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!s.cssRules[e])return e;s.deleteRule(e);try{s.insertRule(t,e)}catch(i){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),s.insertRule(this._deletedRulePlaceholder,e)}}else{var n=this._tags[e];o(n,"old rule at index `"+e+"` not found"),n.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,s){return s?t=t.concat(Array.prototype.map.call(e.getSheetForTag(s).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,s){t&&o(n(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return s?i.insertBefore(r,s):i.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&s(t.prototype,i),a&&s(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=i}).call(this,s("8oxB"))}}]);