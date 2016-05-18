!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){(function(e){"use strict";n(7),e.mount("qlock")}).call(t,n(6))},function(e,t){function n(){c&&u&&(c=!1,u.length?s=u.concat(s):f=-1,s.length&&r())}function r(){if(!c){var e=setTimeout(n);c=!0;for(var t=s.length;t;){for(u=s,s=[];++f<t;)u&&u[f].run();f=-1,t=s.length}u=null,c=!1,clearTimeout(e)}}function o(e,t){this.fun=e,this.array=t}function i(){}var u,a=e.exports={},s=[],c=!1,f=-1;a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new o(e,t)),1!==s.length||c||setTimeout(r,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=i,a.addListener=i,a.once=i,a.off=i,a.removeListener=i,a.removeAllListeners=i,a.emit=i,a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t){"use strict";function n(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];if(0===t.length)return function(e){return e};var r=function(){var e=t[t.length-1],n=t.slice(0,-1);return{v:function(){return n.reduceRight(function(e,t){return t(e)},e.apply(void 0,arguments))}}}();return"object"==typeof r?r.v:void 0}t.__esModule=!0,t["default"]=n},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t,n){function r(){m===g&&(m=g.slice())}function i(){return v}function a(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var t=!0;return r(),m.push(e),function(){if(t){t=!1,r();var n=m.indexOf(e);m.splice(n,1)}}}function f(e){if(!(0,u["default"])(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if("undefined"==typeof e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(y)throw new Error("Reducers may not dispatch actions.");try{y=!0,v=h(v,e)}finally{y=!1}for(var t=g=m,n=0;n<t.length;n++)t[n]();return e}function l(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");h=e,f({type:c.INIT})}function p(){var e,t=a;return e={subscribe:function(e){function n(){e.next&&e.next(i())}if("object"!=typeof e)throw new TypeError("Expected the observer to be an object.");n();var r=t(n);return{unsubscribe:r}}},e[s["default"]]=function(){return this},e}var d;if("function"==typeof t&&"undefined"==typeof n&&(n=t,t=void 0),"undefined"!=typeof n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var h=e,v=t,g=[],m=g,y=!1;return f({type:c.INIT}),d={dispatch:f,subscribe:a,getState:i,replaceReducer:l},d[s["default"]]=p,d}t.__esModule=!0,t.ActionTypes=void 0,t["default"]=o;var i=n(5),u=r(i),a=n(16),s=r(a),c=t.ActionTypes={INIT:"@@redux/INIT"}},function(e,t){"use strict";function n(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}t.__esModule=!0,t["default"]=n},function(e,t,n){function r(e){if(!u(e)||p.call(e)!=a||i(e))return!1;var t=o(e);if(null===t)return!0;var n=f.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==l}var o=n(13),i=n(14),u=n(15),a="[object Object]",s=Object.prototype,c=Function.prototype.toString,f=s.hasOwnProperty,l=c.call(Object),p=s.toString;e.exports=r},function(e,t,n){var r;!function(o,i){"use strict";function u(e,t,n){var r={};return r[e.key]=t,e.pos&&(r[e.pos]=n),r}function a(e,t){for(var n,r=t.length,o=e.length;r>o;)n=t[--r],t.splice(r,1),n.unmount()}function s(e,t){Object.keys(e.tags).forEach(function(n){var r=e.tags[n];H(r)?y(r,function(e){j(e,n,t)}):j(r,n,t)})}function c(e,t,n){var r,o=e._root;for(e._virts=[];o;)r=o.nextSibling,n?t.insertBefore(o,n._root):t.appendChild(o),e._virts.push(o),o=r}function f(e,t,n,r){for(var o,i=e._root,u=0;r>u;u++)o=i.nextSibling,t.insertBefore(i,n._root),i=o}function l(e,t,n){T(e,"each");var r,o=typeof M(e,"no-reorder")!==ie||T(e,"no-reorder"),i=k(e),l=ee[i]||{tmpl:w(e)},p=ce.test(i),d=e.parentNode,v=document.createTextNode(""),g=C(e),m="option"===i.toLowerCase(),y=[],b=[],x="VIRTUAL"==e.tagName;n=ve.loopKeys(n),d.insertBefore(v,e),t.one("before-mount",function(){e.parentNode.removeChild(e),d.stub&&(d=t.root)}).on("update",function(){var w=ve(n.val,t),_=document.createDocumentFragment();H(w)||(r=w||!1,w=r?Object.keys(w).map(function(e){return u(n,e,w[e])}):[]);for(var E=0,T=w.length;T>E;E++){var N=w[E],M=o&&N instanceof Object&&!r,O=b.indexOf(N),C=~O&&M?O:E,S=y[C];N=!r&&n.key?u(n,N,E):N,!M&&!S||M&&!~O||!S?(S=new h(l,{parent:t,isLoop:!0,hasImpl:!!ee[i],root:p?d:e.cloneNode(),item:N},e.innerHTML),S.mount(),x&&(S._root=S.root.firstChild),E!=y.length&&y[E]?(x?c(S,d,y[E]):d.insertBefore(S.root,y[E].root),b.splice(E,0,N)):x?c(S,_):_.appendChild(S.root),y.splice(E,0,S),C=E):S.update(N,!0),C!==E&&M&&y[E]&&(x?f(S,d,y[E],e.childNodes.length):d.insertBefore(S.root,y[E].root),n.pos&&(S[n.pos]=E),y.splice(E,0,y.splice(C,1)[0]),b.splice(E,0,b.splice(C,1)[0]),!g&&S.tags&&s(S,E)),S._item=N,I(S,"_parent",t)}if(a(w,y),m){if(d.appendChild(_),de&&!d.multiple)for(var j=0;j<d.length;j++)if(d[j].__riot1374){d.selectedIndex=j,delete d[j].__riot1374;break}}else d.insertBefore(_,v);g&&(t.tags[i]=y),b=w.slice()})}function p(e,t,n,r){F(e,function(e){if(1==e.nodeType){if(e.isLoop=e.isLoop||e.parentNode&&e.parentNode.isLoop||M(e,"each")?1:0,n){var o=C(e);o&&!e.isLoop&&n.push(L(o,{root:e,parent:t},e.innerHTML,t))}e.isLoop&&!r||W(e,t,[])}})}function d(e,t,n){function r(e,t,r){ve.hasExpr(t)&&n.push(R({dom:e,expr:t},r))}F(e,function(e){var n,o=e.nodeType;return 3==o&&"STYLE"!=e.parentNode.tagName&&r(e,e.nodeValue),1==o?(n=M(e,"each"))?(l(e,t,n),!1):(y(e.attributes,function(t){var n=t.name,o=n.split("__")[1];return r(e,t.value,{attr:o||n,bool:o}),o?(T(e,n),!1):void 0}),C(e)?!1:void 0):void 0})}function h(e,t,n){function r(){var e=g&&v?f:h||f;y(M.attributes,function(t){var n=t.value;l[N(t.name)]=ve.hasExpr(n)?ve(n,e):n}),y(Object.keys(S),function(t){l[N(t)]=ve(S[t],e)})}function o(e){for(var t in w)typeof f[t]!==ae&&$(f,t)&&(f[t]=e[t])}function u(){f.parent&&v&&y(Object.keys(f.parent),function(e){var t=!fe.test(e)&&P(j,e);(typeof f[e]===ae||t)&&(t||j.push(e),f[e]=f.parent[e])})}function a(e){f.update(e,!0)}function s(e){if(y(_,function(t){t[e?"mount":"unmount"]()}),h){var t=e?"on":"off";v?h[t]("unmount",f.unmount):h[t]("update",a)[t]("unmount",f.unmount)}}var c,f=Q.observable(this),l=z(t.opts)||{},h=t.parent,v=t.isLoop,g=t.hasImpl,w=D(t.item),x=[],_=[],M=t.root,C=M.tagName.toLowerCase(),S={},j=[];e.name&&M._tag&&M._tag.unmount(!0),this.isMounted=!1,M.isLoop=v,M._tag=this,I(this,"_riot_id",++X),R(this,{parent:h,root:M,opts:l,tags:{}},w),y(M.attributes,function(e){var t=e.value;ve.hasExpr(t)&&(S[e.name]=t)}),c=ge(e.tmpl,n),I(this,"update",function(e,t){return e=D(e),u(),e&&E(w)&&(o(e),w=e),R(f,e),r(),f.trigger("update",e),m(x,f),t&&f.parent?f.parent.one("updated",function(){f.trigger("updated")}):ye(function(){f.trigger("updated")}),this}),I(this,"mixin",function(){return y(arguments,function(e){var t;e=typeof e===ie?Q.mixin(e):e,b(e)?(t=new e,e=e.prototype):t=e,y(Object.getOwnPropertyNames(e),function(e){"init"!=e&&(f[e]=b(t[e])?t[e].bind(f):t[e])}),t.init&&t.init.bind(f)()}),this}),I(this,"mount",function(){r();var t=Q.mixin(te);if(t)for(var n in t)t.hasOwnProperty(n)&&f.mixin(t[n]);if(e.fn&&e.fn.call(f,l),d(c,f,x),s(!0),e.attrs&&B(e.attrs,function(e,t){O(M,e,t)}),(e.attrs||g)&&d(f.root,f,x),f.parent&&!v||f.update(w),f.trigger("before-mount"),v&&!g)M=c.firstChild;else{for(;c.firstChild;)M.appendChild(c.firstChild);M.stub&&(M=h.root)}I(f,"root",M),v&&p(f.root,f.parent,null,!0),!f.parent||f.parent.isMounted?(f.isMounted=!0,f.trigger("mount")):f.parent.one("mount",function(){K(f.root)||(f.parent.isMounted=f.isMounted=!0,f.trigger("mount"))})}),I(this,"unmount",function(e){var t,n=M,r=n.parentNode,o=J.indexOf(f);if(f.trigger("before-unmount"),~o&&J.splice(o,1),r){if(h)t=A(h),H(t.tags[C])?y(t.tags[C],function(e,n){e._riot_id==f._riot_id&&t.tags[C].splice(n,1)}):t.tags[C]=i;else for(;n.firstChild;)n.removeChild(n.firstChild);e?(T(r,oe),T(r,re)):r.removeChild(n)}this._virts&&y(this._virts,function(e){e.parentNode&&e.parentNode.removeChild(e)}),f.trigger("unmount"),s(),f.off("*"),f.isMounted=!1,delete M._tag}),p(c,this,_)}function v(e,t,n,r){n[e]=function(e){var i,u=r._parent,a=r._item;if(!a)for(;u&&!a;)a=u._item,u=u._parent;e=e||o.event,$(e,"currentTarget")&&(e.currentTarget=n),$(e,"target")&&(e.target=e.srcElement),$(e,"which")&&(e.which=e.charCode||e.keyCode),e.item=a,t.call(r,e)===!0||/radio|check/.test(n.type)||(e.preventDefault&&e.preventDefault(),e.returnValue=!1),e.preventUpdate||(i=a?A(u):r,i.update())}}function g(e,t,n){e&&(e.insertBefore(n,t),e.removeChild(t))}function m(e,t){y(e,function(e,n){var r=e.dom,o=e.attr,i=ve(e.expr,t),u=e.dom.parentNode;if(e.bool?i=!!i:null==i&&(i=""),e.value!==i){if(e.value=i,!o)return i+="",void(u&&("TEXTAREA"===u.tagName?(u.value=i,pe||(r.nodeValue=i)):r.nodeValue=i));if("value"===o)return void(r.value=i);if(T(r,o),b(i))v(o,i,r,t);else if("if"==o){var a=e.stub,s=function(){g(a.parentNode,a,r)},c=function(){g(r.parentNode,r,a)};i?a&&(s(),r.inStub=!1,K(r)||F(r,function(e){e._tag&&!e._tag.isMounted&&(e._tag.isMounted=!!e._tag.trigger("mount"))})):(a=e.stub=a||document.createTextNode(""),r.parentNode?c():(t.parent||t).one("updated",c),r.inStub=!0)}else"show"===o?r.style.display=i?"":"none":"hide"===o?r.style.display=i?"none":"":e.bool?(r[o]=i,i&&O(r,o,o),de&&"selected"===o&&"OPTION"===r.tagName&&(r.__riot1374=i)):(0===i||i&&typeof i!==ue)&&(Y(o,ne)&&o!=re&&(o=o.slice(ne.length)),O(r,o,i))}})}function y(e,t){for(var n,r=e?e.length:0,o=0;r>o;o++)n=e[o],null!=n&&t(n,o)===!1&&o--;return e}function b(e){return typeof e===se||!1}function w(e){if(e.outerHTML)return e.outerHTML;var t=V("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}function x(e,t){if(typeof e.innerHTML!=ae)e.innerHTML=t;else{var n=(new DOMParser).parseFromString(t,"application/xml");e.appendChild(e.ownerDocument.importNode(n.documentElement,!0))}}function _(e){return~le.indexOf(e)}function E(e){return e&&typeof e===ue}function T(e,t){e.removeAttribute(t)}function N(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})}function M(e,t){return e.getAttribute(t)}function O(e,t,n){e.setAttribute(t,n)}function C(e){return e.tagName&&ee[M(e,oe)||M(e,re)||e.tagName.toLowerCase()]}function S(e,t,n){var r=n.tags[t];r?(H(r)||r!==e&&(n.tags[t]=[r]),P(n.tags[t],e)||n.tags[t].push(e)):n.tags[t]=e}function j(e,t,n){var r,o=e.parent;o&&(r=o.tags[t],H(r)?r.splice(n,0,r.splice(r.indexOf(e),1)[0]):S(e,t,o))}function L(e,t,n,r){var o=new h(e,t,n),i=k(t.root),u=A(r);return o.parent=u,o._parent=r,S(o,i,u),u!==r&&S(o,i,r),t.root.innerHTML="",o}function A(e){for(var t=e;!C(t.root)&&t.parent;)t=t.parent;return t}function I(e,t,n,r){return Object.defineProperty(e,t,R({value:n,enumerable:!1,writable:!1,configurable:!0},r)),e}function k(e){var t=C(e),n=M(e,"name"),r=n&&!ve.hasExpr(n)?n:t?t.name:e.tagName.toLowerCase();return r}function R(e){for(var t,n=arguments,r=1;r<n.length;++r)if(t=n[r])for(var o in t)$(e,o)&&(e[o]=t[o]);return e}function P(e,t){return~e.indexOf(t)}function H(e){return Array.isArray(e)||e instanceof Array}function $(e,t){var n=Object.getOwnPropertyDescriptor(e,t);return typeof e[t]===ae||n&&n.writable}function D(e){if(!(e instanceof h||e&&typeof e.trigger==se))return e;var t={};for(var n in e)fe.test(n)||(t[n]=e[n]);return t}function F(e,t){if(e){if(t(e)===!1)return;for(e=e.firstChild;e;)F(e,t),e=e.nextSibling}}function B(e,t){for(var n,r=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;n=r.exec(e);)t(n[1].toLowerCase(),n[2]||n[3]||n[4])}function K(e){for(;e;){if(e.inStub)return!0;e=e.parentNode}return!1}function V(e,t){return t?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(e)}function q(e,t){return(t||document).querySelectorAll(e)}function U(e,t){return(t||document).querySelector(e)}function z(e){function t(){}return t.prototype=e,new t}function G(e){return M(e,"id")||M(e,"name")}function W(e,t,n){var r,o=G(e),i=function(i){P(n,o)||(r=H(i),i?(!r||r&&!P(i,e))&&(r?i.push(e):t[o]=[i,e]):t[o]=e)};o&&(ve.hasExpr(o)?t.one("mount",function(){o=G(e),i(t[o])}):i(t[o]))}function Y(e,t){return e.slice(0,t.length)===t}function Z(e,t,n){var r=ee[t],o=e._innerHTML=e._innerHTML||e.innerHTML;return e.innerHTML="",r&&e&&(r=new h(r,{root:e,opts:n},o)),r&&r.mount&&(r.mount(),P(J,r)||J.push(r)),r}var Q={version:"v2.4.0",settings:{}},X=0,J=[],ee={},te="__global_mixin",ne="riot-",re=ne+"tag",oe="data-is",ie="string",ue="object",ae="undefined",se="function",ce=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,fe=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,le=["altGlyph","animate","animateColor","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feFlood","feGaussianBlur","feImage","feMerge","feMorphology","feOffset","feSpecularLighting","feTile","feTurbulence","filter","font","foreignObject","g","glyph","glyphRef","image","line","linearGradient","marker","mask","missing-glyph","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tref","tspan","use"],pe=0|(o&&o.document||{}).documentMode,de=o&&!!o.InstallTrigger;Q.observable=function(e){function t(e,t){for(var n,r,o=e.split(" "),i=o.length,u=0;i>u;u++)n=o[u],r=n.indexOf("."),n&&t(~r?n.substring(0,r):n,u,~r?n.slice(r+1):null)}e=e||{};var n={},r=Array.prototype.slice;return Object.defineProperties(e,{on:{value:function(r,o){return"function"!=typeof o?e:(t(r,function(e,t,r){(n[e]=n[e]||[]).push(o),o.typed=t>0,o.ns=r}),e)},enumerable:!1,writable:!1,configurable:!1},off:{value:function(r,o){return"*"!=r||o?t(r,function(e,t,r){if(o||r)for(var i,u=n[e],a=0;i=u&&u[a];++a)(i==o||r&&i.ns==r)&&u.splice(a--,1);else delete n[e]}):n={},e},enumerable:!1,writable:!1,configurable:!1},one:{value:function(t,n){function r(){e.off(t,r),n.apply(e,arguments)}return e.on(t,r)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(o){for(var i,u=arguments.length-1,a=new Array(u),s=0;u>s;s++)a[s]=arguments[s+1];return t(o,function(t,o,u){i=r.call(n[t]||[],0);for(var s,c=0;s=i[c];++c)s.busy||(s.busy=1,u&&s.ns!=u||s.apply(e,s.typed?[t].concat(a):a),i[c]!==s&&c--,s.busy=0);n["*"]&&"*"!=t&&e.trigger.apply(e,["*",t].concat(a))}),e},enumerable:!1,writable:!1,configurable:!1}}),e},function(e){function t(e){return e.split(/[\/?#]/)}function n(e,t){var n=new RegExp("^"+t[T](/\*/g,"([^/?#]+?)")[T](/\.\./,".*")+"$"),r=e.match(n);return r?r.slice(1):void 0}function r(e,t){var n;return function(){clearTimeout(n),n=setTimeout(e,t)}}function i(e){h=r(l,1),S[_](N,h),S[_](M,h),j[_](k,p),e&&l(!0)}function u(){this.$=[],e.observable(this),P.on("stop",this.s.bind(this)),P.on("emit",this.e.bind(this))}function a(e){return e[T](/^\/|\/$/,"")}function s(e){return"string"==typeof e}function c(e){return(e||A.href)[T](b,"")}function f(e){return"#"==v[0]?(e||A.href||"").split(v)[1]||"":(A?c(e):e||"")[T](v,"")}function l(e){var t=0==D;if(!(D>=C)&&(D++,$.push(function(){var t=f();(e||t!=g)&&(P[O]("emit",t),g=t)}),t)){for(;$.length;)$[0](),$.shift();D=0}}function p(e){if(!(1!=e.which||e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){for(var t=e.target;t&&"A"!=t.nodeName;)t=t.parentNode;!t||"A"!=t.nodeName||t[E]("download")||!t[E]("href")||t.target&&"_self"!=t.target||-1==t.href.indexOf(A.href.match(b)[0])||(t.href==A.href||t.href.split("#")[0]!=A.href.split("#")[0]&&("#"==v||0===c(t.href).indexOf(v))&&d(f(t.href),t.title||j.title))&&e.preventDefault()}}function d(e,t,n){return L?(e=v+a(e),t=t||j.title,n?L.replaceState(null,t,e):L.pushState(null,t,e),j.title=t,H=!1,l(),H):P[O]("emit",f(e))}var h,v,g,m,y,b=/^.+?\/\/+[^\/]+/,w="EventListener",x="remove"+w,_="add"+w,E="hasAttribute",T="replace",N="popstate",M="hashchange",O="trigger",C=3,S="undefined"!=typeof o&&o,j="undefined"!=typeof document&&document,L=S&&history,A=S&&(L.location||S.location),I=u.prototype,k=j&&j.ontouchstart?"touchstart":"click",R=!1,P=e.observable(),H=!1,$=[],D=0;I.m=function(e,t,n){!s(e)||t&&!s(t)?t?this.r(e,t):this.r("@",e):d(e,t,n||!1)},I.s=function(){this.off("*"),this.$=[]},I.e=function(e){this.$.concat("@").some(function(t){var n=("@"==t?m:y)(a(e),a(t));return"undefined"!=typeof n?(this[O].apply(null,[t].concat(n)),H=!0):void 0},this)},I.r=function(e,t){"@"!=e&&(e="/"+a(e),this.$.push(e)),this.on(e,t)};var F=new u,B=F.m.bind(F);B.create=function(){var e=new u,t=e.m.bind(e);return t.stop=e.s.bind(e),t},B.base=function(e){v=e||"#",g=f()},B.exec=function(){l(!0)},B.parser=function(e,r){e||r||(m=t,y=n),e&&(m=e),r&&(y=r)},B.query=function(){var e={},t=A.href||g;return t[T](/[?&](.+?)=([^&]*)/g,function(t,n,r){e[n]=r}),e},B.stop=function(){R&&(S&&(S[x](N,h),S[x](M,h),j[x](k,p)),P[O]("stop"),R=!1)},B.start=function(e){R||(S&&("complete"==document.readyState?i(e):S[_]("load",function(){setTimeout(function(){i(e)},1)})),R=!0)},B.base(),B.parser(),e.route=B}(Q);var he=function(e){function t(e){return e}function n(e,t){return t||(t=m),new RegExp(e.source.replace(/{/g,t[2]).replace(/}/g,t[3]),e.global?c:"")}function r(e){if(e===h)return v;var t=e.split(" ");if(2!==t.length||/[\x00-\x1F<>a-zA-Z0-9'",;\\]/.test(e))throw new Error('Unsupported brackets "'+e+'"');return t=t.concat(e.replace(/(?=[[\]()*+?.^$|])/g,"\\").split(" ")),t[4]=n(t[1].length>1?/{[\S\s]*?}/:v[4],t),t[5]=n(e.length>3?/\\({|})/g:v[5],t),t[6]=n(v[6],t),t[7]=RegExp("\\\\("+t[3]+")|([[({])|("+t[3]+")|"+p,c),t[8]=e,t}function o(e){return e instanceof RegExp?a(e):m[e]}function i(e){(e||(e=h))!==m[8]&&(m=r(e),a=e===h?t:n,m[9]=a(v[9])),g=e}function u(e){var t;e=e||{},t=e.brackets,Object.defineProperty(e,"brackets",{set:i,get:function(){return g},enumerable:!0}),s=e,i(t)}var a,s,c="g",f=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,l=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,p=l.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,d={"(":RegExp("([()])|"+p,c),"[":RegExp("([[\\]])|"+p,c),"{":RegExp("([{}])|"+p,c)},h="{ }",v=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+p,c),h,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],g=e,m=[];return o.split=function(e,t,n){function r(e){t||u?c.push(e&&e.replace(n[5],"$1")):c.push(e)}function o(e,t,n){var r,o=d[t];for(o.lastIndex=n,n=1;(r=o.exec(e))&&(!r[1]||(r[1]===t?++n:--n)););return n?e.length:o.lastIndex}n||(n=m);var i,u,a,s,c=[],f=n[6];for(u=a=f.lastIndex=0;i=f.exec(e);){if(s=i.index,u){if(i[2]){f.lastIndex=o(e,i[2],f.lastIndex);continue}if(!i[3])continue}i[1]||(r(e.slice(a,s)),a=f.lastIndex,f=n[6+(u^=1)],f.lastIndex=a)}return e&&a<e.length&&r(e.slice(a)),c},o.hasExpr=function(e){return m[4].test(e)},o.loopKeys=function(e){var t=e.match(m[9]);return t?{key:t[1],pos:t[2],val:m[0]+t[3].trim()+m[1]}:{val:e.trim()}},o.array=function(e){return e?r(e):m},Object.defineProperty(o,"settings",{set:u,get:function(){return s}}),o.settings="undefined"!=typeof Q&&Q.settings||{},o.set=i,o.R_STRINGS=l,o.R_MLCOMMS=f,o.S_QBLOCKS=p,o}(),ve=function(){function e(e,r){return e?(a[e]||(a[e]=n(e))).call(r,t):e}function t(t,n){e.errorHandler&&(t.riotData={tagName:n&&n.root&&n.root.tagName,_riot_id:n&&n._riot_id},e.errorHandler(t))}function n(e){var t=r(e);return"try{return "!==t.slice(0,11)&&(t="return "+t),new Function("E",t+";")}function r(e){var t,n=[],r=he.split(e.replace(l,'"'),1);if(r.length>2||r[0]){var o,u,a=[];for(o=u=0;o<r.length;++o)t=r[o],t&&(t=1&o?i(t,1,n):'"'+t.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(a[u++]=t);t=2>u?a[0]:"["+a.join(",")+'].join("")'}else t=i(r[1],0,n);return n[0]&&(t=t.replace(p,function(e,t){return n[t].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),t}function i(e,t,n){function r(t,n){var r,o=1,i=d[t];for(i.lastIndex=n.lastIndex;r=i.exec(e);)if(r[0]===t)++o;else if(!--o)break;n.lastIndex=o?e.length:i.lastIndex}if(e=e.replace(f,function(e,t){return e.length>2&&!t?s+(n.push(e)-1)+"~":e}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var o,i=[],a=0;e&&(o=e.match(c))&&!o.index;){var l,p,h=/,|([[{(])|$/g;for(e=RegExp.rightContext,l=o[2]?n[o[2]].slice(1,-1).trim().replace(/\s+/g," "):o[1];p=(o=h.exec(e))[1];)r(p,h);p=e.slice(0,o.index),e=RegExp.rightContext,i[a++]=u(p,1,l)}e=a?a>1?"["+i.join(",")+'].join(" ").trim()':i[0]:u(e,t)}return e}function u(e,t,n){var r;return e=e.replace(v,function(e,t,n,o,i){return n&&(o=r?0:o+e.length,"this"!==n&&"global"!==n&&"window"!==n?(e=t+'("'+n+h+n,o&&(r="."===(i=i[o])||"("===i||"["===i)):o&&(r=!g.test(i.slice(o)))),e}),r&&(e="try{return "+e+"}catch(e){E(e,this)}"),n?e=(r?"function(){"+e+"}.call(this)":"("+e+")")+'?"'+n+'":""':t&&(e="function(v){"+(r?e.replace("return ","v="):"v=("+e+")")+';return v||v===0?v:""}.call(this)'),e}var a={};e.haveRaw=he.hasRaw,e.hasExpr=he.hasExpr,e.loopKeys=he.loopKeys,e.errorHandler=null;var s="⁗",c=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,f=RegExp(he.S_QBLOCKS,"g"),l=/\u2057/g,p=/\u2057(\d+)~/g,d={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},h='"in this?this:'+("object"!=typeof o?"global":"window")+").",v=/[,{][$\w]+:|(^ *|[^$\w\.])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,g=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return e.parse=function(e){return e},e.version=he.version="v2.4.0",e}(),ge=function be(){function be(n,r){var o=n&&n.match(/^\s*<([-\w]+)/),i=o&&o[1].toLowerCase(),u=V("div",_(i));return n=t(n,r),a.test(i)?u=e(u,n,i):x(u,n),u.stub=!0,u}function e(e,t,n){var r="o"===n[0],o=r?"select>":"table>";if(e.innerHTML="<"+o+t.trim()+"</"+o,o=e.firstChild,r)o.selectedIndex=-1;else{var i=u[n];i&&1===o.childElementCount&&(o=U(i,o))}return o}function t(e,t){if(!n.test(e))return e;var u={};return t=t&&t.replace(o,function(e,t,n){return u[t]=u[t]||n,""}).trim(),e.replace(i,function(e,t,n){return u[t]||n||""}).replace(r,function(e,n){return t||n||""})}var n=/<yield\b/i,r=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,o=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,i=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,u={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},a=pe&&10>pe?ce:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;return be}(),me=function(e){if(!o)return{add:function(){},inject:function(){}};var t=function(){var e=V("style");O(e,"type","text/css");var t=U("style[type=riot]");return t?(t.id&&(e.id=t.id),t.parentNode.replaceChild(e,t)):document.getElementsByTagName("head")[0].appendChild(e),e}(),n=t.styleSheet,r="";return Object.defineProperty(e,"styleNode",{value:t,writable:!0}),{add:function(e){r+=e},inject:function(){r&&(n?n.cssText+=r:t.innerHTML+=r,r="")}}}(Q),ye=function(e){var t=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame;if(!t||/iP(ad|hone|od).*OS 6/.test(e.navigator.userAgent)){var n=0;t=function(e){var t=Date.now(),r=Math.max(16-(t-n),0);setTimeout(function(){e(n=t+r)},r)}}return t}(o||{});Q.util={brackets:he,tmpl:ve},Q.mixin=function(){var e={},t=e[te]={},n=0;return function(r,o,i){if(E(r))return void Q.mixin("__unnamed_"+n++,r,!0);var u=i?t:e;return o?void(u[r]=R(u[r]||{},o)):u[r]}}(),Q.tag=function(e,t,n,r,o){return b(r)&&(o=r,/^[\w\-]+\s?=/.test(n)?(r=n,n=""):r=""),n&&(b(n)?o=n:me.add(n)),e=e.toLowerCase(),ee[e]={name:e,tmpl:t,attrs:r,fn:o},e},Q.tag2=function(e,t,n,r,o){return n&&me.add(n),ee[e]={name:e,tmpl:t,attrs:r,fn:o},e},Q.mount=function(e,t,n){function r(e){var t="";return y(e,function(e){/[^-\w]/.test(e)||(e=e.trim().toLowerCase(),t+=",["+oe+'="'+e+'"],['+re+'="'+e+'"]')}),t}function o(){var e=Object.keys(ee);return e+r(e)}function i(e){if(e.tagName){var r=M(e,oe)||M(e,re);t&&r!==t&&(r=t,O(e,oe,t),O(e,re,t));var o=Z(e,r||e.tagName.toLowerCase(),n);o&&s.push(o)}else e.length&&y(e,i)}var u,a,s=[];if(me.inject(),E(t)&&(n=t,t=0),typeof e===ie?("*"===e?e=a=o():e+=r(e.split(/, */)),u=e?q(e):[]):u=e,"*"===t){if(t=a||o(),u.tagName)u=q(t,u);else{var c=[];y(u,function(e){c.push(q(t,e))}),u=c}t=0}return i(u),s},Q.update=function(){return y(J,function(e){e.update()})},Q.vdom=J,Q.Tag=h,typeof t===ue?e.exports=Q:"function"===se&&typeof n(18)!==ae?(r=function(){return Q}.call(t,n,t,e),!(r!==i&&(e.exports=r))):o.riot=Q}("undefined"!=typeof window?window:void 0)},function(e,t,n){(function(e){"use strict";function t(e){return e&&e.__esModule?e:{"default":e}}var r=n(12),o=n(8),i=t(o);e.tag2("qlock",'<pre>\n<span class="on">IT</span>L<span class="on">IS</span>BFAMPM\n<span class="{on: time.quarter}">A</span>C<span class="{on: time.quarter}">QUARTER</span>DC\n<span class="{on: time.twentyMinutes}">TWENTY</span><span class="{on: time.fiveMinutes}">FIVE</span>X\n<span class="{on: time.half}">HALF</span>B<span class="{on: time.tenMinutes}">TEN</span>F<span class="{on: time.to}">TO</span>\n<span class="{on: time.past}">PAST</span>ERU<span class="{on: time.h == 9}">NINE</span>\n<span class="{on: time.h == 1}">ONE</span><span class="{on: time.h == 6}">SIX</span><span class="{on: time.h == 3}">THREE</span>\n<span class="{on: time.h == 4}">FOUR</span><span class="{on: time.h == 5}">FIVE</span><span class="{on: time.h == 2}">TWO</span>\n<span class="{on: time.h == 8}">EIGHT</span><span class="{on: time.h == 11}">ELEVEN</span>\n<span class="{on: time.h == 7}">SEVEN</span><span class="{on: time.h == 0}">TWELVE</span>\n<span class="{on: time.h == 10}">TEN</span>SE<span class="{on: time.oclock}">OCLOCK</span>\n<span>{time.oneMinute ? \'&bull;\' : \' \'}</span>  <span>{time.twoMinutes ? \'&bull;\' : \' \'}</span>  <span>{time.threeMinutes ? \'&bull;\' : \' \'}</span>  <span>{time.fourMinutes ? \'&bull;\' : \' \'}</span>\n</pre>',"pre { display: inline-block; letter-spacing: 0.46em; } pre span { transition: font-weight 1s ease; } pre .on { font-weight: bold; }","",function(e){var t=this,n=(0,r.createStore)(i["default"]),o=function(){t.time=n.getState(),t.update()};n.subscribe(o),setInterval(function(){n.dispatch({type:"TICK",now:new Date})},3e3)})}).call(t,n(6))},function(e,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?r:arguments[0],t=arguments[1];switch(t.type){case"TICK":var n=t.now,o=n.getMinutes();return{m:o,h:(n.getHours()+(o>=40?1:0))%12,past:o>=5&&35>o,to:o>=35,oclock:o>=0&&5>o,oneMinute:o%5>=1,twoMinutes:o%5>=2,threeMinutes:o%5>=3,fourMinutes:o%5>=4,fiveMinutes:o>=5&&10>o||o>=55||o>=25&&30>o||o>=35&&40>o,tenMinutes:o>=10&&15>o||o>=50&&55>o,quarter:o>=15&&20>o||o>=45&&50>o,twentyMinutes:o>=20&&30>o||o>=35&&45>o,half:o>=30&&35>o};default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var r=new Date},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return function(e){return function(n,r,o){var u=e(n,r,o),s=u.dispatch,c=[],f={getState:u.getState,dispatch:function(e){return s(e)}};return c=t.map(function(e){return e(f)}),s=a["default"].apply(void 0,c)(u.dispatch),i({},u,{dispatch:s})}}}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t["default"]=o;var u=n(2),a=r(u)},function(e,t){"use strict";function n(e,t){return function(){return t(e.apply(void 0,arguments))}}function r(e,t){if("function"==typeof e)return n(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var r=Object.keys(e),o={},i=0;i<r.length;i++){var u=r[i],a=e[u];"function"==typeof a&&(o[u]=n(a,t))}return o}t.__esModule=!0,t["default"]=r},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){var n=t&&t.type,r=n&&'"'+n.toString()+'"'||"an action";return"Given action "+r+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}function i(e,t,n){var r=Object.keys(t),o=n&&n.type===s.ActionTypes.INIT?"initialState argument passed to createStore":"previous state received by the reducer";if(0===r.length)return"Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";if(!(0,f["default"])(e))return"The "+o+' has unexpected type of "'+{}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1]+'". Expected argument to be an object with the following '+('keys: "'+r.join('", "')+'"');var i=Object.keys(e).filter(function(e){return!t.hasOwnProperty(e)});return i.length>0?"Unexpected "+(i.length>1?"keys":"key")+" "+('"'+i.join('", "')+'" found in '+o+". ")+"Expected to find one of the known reducer keys instead: "+('"'+r.join('", "')+'". Unexpected keys will be ignored.'):void 0}function u(e){Object.keys(e).forEach(function(t){var n=e[t],r=n(void 0,{type:s.ActionTypes.INIT});if("undefined"==typeof r)throw new Error('Reducer "'+t+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');var o="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");if("undefined"==typeof n(void 0,{type:o}))throw new Error('Reducer "'+t+'" returned undefined when probed with a random type. '+("Don't try to handle "+s.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")})}function a(t){for(var n=Object.keys(t),r={},a=0;a<n.length;a++){var s=n[a];"function"==typeof t[s]&&(r[s]=t[s])}var c,f=Object.keys(r);try{u(r)}catch(l){c=l}return function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments[1];if(c)throw c;if("production"!==e.env.NODE_ENV){var u=i(t,r,n);u&&(0,p["default"])(u)}for(var a=!1,s={},l=0;l<f.length;l++){var d=f[l],h=r[d],v=t[d],g=h(v,n);if("undefined"==typeof g){var m=o(d,n);throw new Error(m)}s[d]=g,a=a||g!==v}return a?s:t}}t.__esModule=!0,t["default"]=a;var s=n(3),c=n(5),f=r(c),l=n(4),p=r(l)}).call(t,n(1))},function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){}t.__esModule=!0,t.compose=t.applyMiddleware=t.bindActionCreators=t.combineReducers=t.createStore=void 0;var i=n(3),u=r(i),a=n(11),s=r(a),c=n(10),f=r(c),l=n(9),p=r(l),d=n(2),h=r(d),v=n(4),g=r(v);"production"!==e.env.NODE_ENV&&"string"==typeof o.name&&"isCrushed"!==o.name&&(0,g["default"])("You are currently using minified code outside of NODE_ENV === 'production'. This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) to ensure you have the correct code for your production build."),t.createStore=u["default"],t.combineReducers=s["default"],t.bindActionCreators=f["default"],t.applyMiddleware=p["default"],
t.compose=h["default"]}).call(t,n(1))},function(e,t){function n(e){return r(Object(e))}var r=Object.getPrototypeOf;e.exports=n},function(e,t){function n(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(n){}return t}e.exports=n},function(e,t){function n(e){return!!e&&"object"==typeof e}e.exports=n},function(e,t,n){(function(t){"use strict";e.exports=n(17)(t||window||this)}).call(t,function(){return this}())},function(e,t){"use strict";e.exports=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}},function(e,t){(function(t){e.exports=t}).call(t,{})}]);
