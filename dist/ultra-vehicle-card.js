/*! For license information please see ultra-vehicle-card.js.LICENSE.txt */
(()=>{"use strict";var e,t,i={},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return i[e](o,o.exports,a),o.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(i,n){if(1&n&&(i=this(i)),8&n)return i;if("object"==typeof i&&i){if(4&n&&i.__esModule)return i;if(16&n&&"function"==typeof i.then)return i}var o=Object.create(null);a.r(o);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&i;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>r[e]=()=>i[e]));return r.default=()=>i,a.d(o,r),o},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};const o=globalThis,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),l=new WeakMap;class c{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(r&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=l.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(t,e))}return e}toString(){return this.cssText}}const d=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1]),e[0]);return new c(i,e,s)},p=(e,t)=>{if(r)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),n=o.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=i.cssText,e.appendChild(t)}},g=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new c("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:h,defineProperty:u,getOwnPropertyDescriptor:_,getOwnPropertyNames:m,getOwnPropertySymbols:v,getPrototypeOf:b}=Object,f=globalThis,y=f.trustedTypes,k=y?y.emptyScript:"",w=f.reactiveElementPolyfillSupport,x=(e,t)=>e,S={toAttribute(e,t){switch(t){case Boolean:e=e?k:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},$=(e,t)=>!h(e,t),I={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=I){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&u(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:a}=_(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const o=n?.call(this);a.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??I}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=b(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...m(e),...v(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(g(e))}else void 0!==e&&t.push(g(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return p(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:S).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:S;this._$Em=n,this[n]=a.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??$)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[x("elementProperties")]=new Map,A[x("finalized")]=new Map,w?.({ReactiveElement:A}),(f.reactiveElementVersions??=[]).push("2.0.4");const C=globalThis,z=C.trustedTypes,E=z?z.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,L="?"+j,R=`<${L}>`,D=document,B=()=>D.createComment(""),V=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,U=e=>O(e)||"function"==typeof e?.[Symbol.iterator],N="[ \t\n\f\r]",P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,F=/>/g,q=RegExp(`>|${N}(?:([^\\s"'>=/]+)(${N}*=${N}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,G=/"/g,H=/^(?:script|style|textarea|title)$/i,K=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),J=K(1),Z=(K(2),K(3),Symbol.for("lit-noChange")),Y=Symbol.for("lit-nothing"),Q=new WeakMap,X=D.createTreeWalker(D,129);function ee(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const te=(e,t)=>{const i=e.length-1,n=[];let a,o=2===t?"<svg>":3===t?"<math>":"",r=P;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===P?"!--"===l[1]?r=M:void 0!==l[1]?r=F:void 0!==l[2]?(H.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=q):void 0!==l[3]&&(r=q):r===q?">"===l[0]?(r=a??P,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?q:'"'===l[3]?G:W):r===G||r===W?r=q:r===M||r===F?r=P:(r=q,a=void 0);const p=r===q&&e[t+1].startsWith("/>")?" ":"";o+=r===P?i+R:c>=0?(n.push(s),i.slice(0,c)+T+i.slice(c)+j+p):i+j+(-2===c?t:p)}return[ee(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class ie{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let a=0,o=0;const r=e.length-1,s=this.parts,[l,c]=te(e,t);if(this.el=ie.createElement(l,i),X.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=X.nextNode())&&s.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(T)){const t=c[o++],i=n.getAttribute(e).split(j),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?se:"?"===r[1]?le:"@"===r[1]?ce:re}),n.removeAttribute(e)}else e.startsWith(j)&&(s.push({type:6,index:a}),n.removeAttribute(e));if(H.test(n.tagName)){const e=n.textContent.split(j),t=e.length-1;if(t>0){n.textContent=z?z.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],B()),X.nextNode(),s.push({type:2,index:++a});n.append(e[t],B())}}}else if(8===n.nodeType)if(n.data===L)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(j,e+1));)s.push({type:7,index:a}),e+=j.length-1}a++}}static createElement(e,t){const i=D.createElement("template");return i.innerHTML=e,i}}function ne(e,t,i=e,n){if(t===Z)return t;let a=void 0!==n?i._$Co?.[n]:i._$Cl;const o=V(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(e),a._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=a:i._$Cl=a),void 0!==a&&(t=ne(e,a._$AS(e,t.values),a,n)),t}class ae{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??D).importNode(t,!0);X.currentNode=n;let a=X.nextNode(),o=0,r=0,s=i[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new oe(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new de(a,this,e)),this._$AV.push(t),s=i[++r]}o!==s?.index&&(a=X.nextNode(),o++)}return X.currentNode=D,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class oe{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ne(this,e,t),V(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==Z&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):U(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&V(this._$AH)?this._$AA.nextSibling.data=e:this.T(D.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=ie.createElement(ee(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new ae(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Q.get(e.strings);return void 0===t&&Q.set(e.strings,t=new ie(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const a of e)n===t.length?t.push(i=new oe(this.O(B()),this.O(B()),this,this.options)):i=t[n],i._$AI(a),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class re{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,a){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(e,t=this,i,n){const a=this.strings;let o=!1;if(void 0===a)e=ne(this,e,t,0),o=!V(e)||e!==this._$AH&&e!==Z,o&&(this._$AH=e);else{const n=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=ne(this,n[i+r],t,r),s===Z&&(s=this._$AH[r]),o||=!V(s)||s!==this._$AH[r],s===Y?e=Y:e!==Y&&(e+=(s??"")+a[r+1]),this._$AH[r]=s}o&&!n&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class se extends re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class le extends re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class ce extends re{constructor(e,t,i,n,a){super(e,t,i,n,a),this.type=5}_$AI(e,t=this){if((e=ne(this,e,t,0)??Y)===Z)return;const i=this._$AH,n=e===Y&&i!==Y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==Y&&(i===Y||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class de{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ne(this,e)}}const pe={M:T,P:j,A:L,C:1,L:te,R:ae,D:U,V:ne,I:oe,H:re,N:le,U:ce,B:se,F:de},ge=C.litHtmlPolyfillSupport;ge?.(ie,oe),(C.litHtmlVersions??=[]).push("3.2.1");class he extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const n=i?.renderBefore??t;let a=n._$litPart$;if(void 0===a){const e=i?.renderBefore??null;n._$litPart$=a=new oe(t.insertBefore(B(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}}he._$litElement$=!0,he.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:he});const ue=globalThis.litElementPolyfillSupport;ue?.({LitElement:he}),(globalThis.litElementVersions??=[]).push("4.1.1");const _e=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},me={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:$},ve=(e=me,t,i)=>{const{kind:n,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),o.set(i.name,e),"accessor"===n){const{name:n}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,a,e)},init(t){return void 0!==t&&this.P(n,void 0,e),t}}}if("setter"===n){const{name:n}=i;return function(i){const a=this[n];t.call(this,i),this.requestUpdate(n,a,e)}}throw Error("Unsupported decorator location: "+n)};function be(e){return(t,i)=>"object"==typeof i?ve(e,t,i):((e,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function fe(e){return be({...e,state:!0,attribute:!1})}const ye="/hacsfiles/Ultra-Vehicle-Card/assets/default-car.png";function ke(e,t){if(!t)return"";if(t.startsWith("http"))return t;if(t.startsWith("data:image/"))return t;if(t.includes("/api/image/serve/")){const i=t.match(/\/api\/image\/serve\/([^\/]+)/);if(i&&i[1]){const n=i[1];try{return`${(e.hassUrl?e.hassUrl():"").replace(/\/$/,"")}/api/image/serve/${n}/original`}catch(e){return t}}return t}if(t.startsWith("local/")||t.includes("/local/")||t.startsWith("media-source://")){const i=t.replace(/^local\//,"").replace(/^media-source:\/\/media_source\/local\//,"");return`${(e.hassUrl?e.hassUrl():"").replace(/\/$/,"")}/local/${i}`}return t}var we=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};function xe(e,t="to right"){const i=function(e){if(!e||!Array.isArray(e)||0===e.length)return"";const t=e.filter((e=>e&&"string"==typeof e.color&&""!==e.color.trim()&&"number"==typeof e.position&&e.position>=0&&e.position<=100));if(0===t.length)return"";const i=[...t].sort(((e,t)=>e.position-t.position));return i.map((e=>`${e.color} ${e.position}%`)).join(", ")}(e);return i?`linear-gradient(${t}, ${i})`:""}function Se(e,t){if(!e||!Array.isArray(e)||e.length<2)return"#ffffff";t=Math.max(0,Math.min(100,t));const i=[...e].sort(((e,t)=>e.position-t.position));let n=null,a=null;for(let e=0;e<i.length-1;e++)if(t>=i[e].position&&t<=i[e+1].position){n=i[e],a=i[e+1];break}if(!n||!a)return 0===i.length?"#ffffff":t<=i[0].position?i[0].color||"#ffffff":i[i.length-1].color||"#ffffff";const o=a.position-n.position,r=0===o?0:(t-n.position)/o,s=$e(n.color),l=$e(a.color);return s&&l?`rgb(${Math.round(s.r+r*(l.r-s.r))}, ${Math.round(s.g+r*(l.g-s.g))}, ${Math.round(s.b+r*(l.b-s.b))})`:n.color||"#ffffff"}function $e(e){const t=e.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);if(t)return{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)};const i=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10)}:null}let Ie=class extends he{constructor(){super(...arguments),this.stops=[],this.key=0,this._draggedStopId=null,this._dropTargetId=null,this._dropTargetPosition=null,this.MAX_STOPS=7}disconnectedCallback(){super.disconnectedCallback()}updated(e){super.updated(e),e.has("key")&&console.log(`[GradientEditor] updated: Key changed to ${this.key}`),console.log("[GradientEditor] updated: Component updated.")}_getStopsSortedByPosition(){const e=[...(this.stops||[]).filter((e=>e&&"string"==typeof e.id&&"number"==typeof e.position&&e.position>=0&&e.position<=100&&"string"==typeof e.color))].sort(((e,t)=>e.position-t.position));return e.length<2?[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}]:e}_generatePreviewGradient(e){const t=this._getStopsSortedByPosition();return!t||t.length<2?"linear-gradient(to right, #ccc, #ccc)":`linear-gradient(to right, ${t.map((e=>`${e.color} ${e.position}%`)).join(", ")})`}_handleColorChange(e,t){e.stopPropagation();const i=e.target.value,n=this.stops.find((e=>e.id===t));n&&this.dispatchEvent(new CustomEvent("stop-changed",{detail:Object.assign(Object.assign({},n),{color:i}),bubbles:!0,composed:!0}))}_handlePositionInput(e,t){e.stopPropagation();const i=e.target;let n=parseInt(i.value,10);n=Math.max(0,Math.min(100,n)),isNaN(n)&&(n=0);const a=this.stops.find((e=>e.id===t));a&&a.position!==n&&this.dispatchEvent(new CustomEvent("stop-changed",{detail:Object.assign(Object.assign({},a),{position:n}),bubbles:!0,composed:!0}))}_handleDuplicateClick(e,t){e.stopPropagation(),this.stops.length<this.MAX_STOPS&&this.dispatchEvent(new CustomEvent("stop-duplicated",{detail:{id:t},bubbles:!0,composed:!0}))}_handleDeleteClick(e,t){e.stopPropagation(),this.stops&&this.stops.length>2&&this.dispatchEvent(new CustomEvent("stop-removed",{detail:{id:t},bubbles:!0,composed:!0}))}_handleDragStart(e,t){const i=this.stops.find((e=>e.id===t));if(!i||0===i.position||100===i.position)return void e.preventDefault();console.log(`[GradientEditor] Drag Start: ID=${t}`),this._draggedStopId=t;const n=e.currentTarget;if(e.dataTransfer){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t);try{const t=n.getBoundingClientRect(),i=n.cloneNode(!0);i.style.width=`${t.width}px`,i.style.height=`${t.height}px`,i.style.opacity="0.7",i.style.position="absolute",i.style.top="-1000px",i.style.pointerEvents="none",i.style.border="1px dashed var(--primary-color)",document.body.appendChild(i),e.dataTransfer.setDragImage(i,e.offsetX,e.offsetY),setTimeout((()=>{document.body.contains(i)&&document.body.removeChild(i)}),50)}catch(e){console.error("Error creating drag image:",e)}}setTimeout((()=>{null==n||n.classList.add("dragging")}),0)}_handleDragOver(e,t){if(e.preventDefault(),t===this._draggedStopId)return;const i=this.stops.find((e=>e.id===t));if(!i||0===i.position||100===i.position)return this._clearDropTargetStyles(),this._dropTargetId=null,void(e.dataTransfer.dropEffect="none");this._dropTargetId!==t&&(console.log(`[GradientEditor] Drag Over: Setting target to ${t}`),this._clearDropTargetStyles(),this._dropTargetId=t,e.currentTarget.classList.add("drop-target")),e.dataTransfer.dropEffect="move"}_handleDragLeave(e){var t;e.currentTarget.classList.remove("drop-target");const i=e.relatedTarget;(null===(t=this.shadowRoot)||void 0===t?void 0:t.contains(i))||(console.log("[GradientEditor] Drag Leave: Left component, clearing target."),this._dropTargetId=null)}_handleDrop(e){if(e.preventDefault(),e.currentTarget.classList.remove("drop-target"),console.log(`[GradientEditor] Drop: DraggedID=${this._draggedStopId}, TargetID=${this._dropTargetId}`),!this._draggedStopId||!this._dropTargetId||this._draggedStopId===this._dropTargetId)return console.log("[GradientEditor] Drop: Invalid state, cleaning up."),void this._cleanupDragState();const t=this._draggedStopId,i=this._dropTargetId;this._cleanupDragState();const n=[...this.stops||[]],a=n.findIndex((e=>e.id===t)),o=n.findIndex((e=>e.id===i));if(console.log(`[GradientEditor] Drop: DraggedIndex=${a}, TargetIndex=${o} (using current this.stops)`),-1===a||-1===o)return void console.warn("[GradientEditor] Drop: Could not find dragged or target stop in this.stops.");const r=n[o];if(!r||0===r.position||100===r.position)return void console.warn("[GradientEditor] Drop: Target is a boundary stop.");const s=[...n],l=s[a],c=s[o],d=Object.assign(Object.assign({},l),{position:c.position}),p=Object.assign(Object.assign({},c),{position:l.position});s[o]=d,s[a]=p,console.log("[GradientEditor] Drop: Reordered stops (swapped list & positions):",JSON.stringify(s)),setTimeout((()=>{this.dispatchEvent(new CustomEvent("stops-rearranged",{detail:{stops:s},bubbles:!0,composed:!0})),console.log("[GradientEditor] Drop: Dispatched stops-rearranged event (after timeout).")}),0)}_handleDragEnd(e){console.log("[GradientEditor] Drag End"),this._cleanupDragState()}_clearDropTargetStyles(){var e;if(this._dropTargetId){const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`.stop-item[data-stop-id="${this._dropTargetId}"]`);null==t||t.classList.remove("drop-target")}}_cleanupDragState(){var e;if(this._draggedStopId){const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`.stop-item[data-stop-id="${this._draggedStopId}"]`);null==t||t.classList.remove("dragging")}this._clearDropTargetStyles(),this._draggedStopId=null,this._dropTargetId=null}render(){const e=(this.stops||[]).filter((e=>e&&"string"==typeof e.id&&"number"==typeof e.position&&e.position>=0&&e.position<=100&&"string"==typeof e.color)),t=e.length>=2?e:this._getStopsSortedByPosition();console.log("[GradientEditor] render: Rendering with stops:",JSON.stringify(t));const i=t.length>2,n=t.length<this.MAX_STOPS;return J`
      <div
        class="gradient-preview"
        style="background: ${this._generatePreviewGradient(t)}"
      ></div>

      <div class="stop-list">
        ${t.map((e=>{const t="1"===e.id||"2"===e.id,a=!t;return J`
            <div
              class="stop-item ${t?"is-boundary":""}" // Style based on true boundary
              data-stop-id="${e.id}"
              draggable="${a}" 
              @dragstart=${t=>this._handleDragStart(t,e.id)}
              @dragover=${t=>this._handleDragOver(t,e.id)}
              @dragleave=${this._handleDragLeave}
              @drop=${this._handleDrop}
              @dragend=${this._handleDragEnd}
            >
              <ha-icon 
                class="drag-handle" 
                icon="mdi:drag-vertical" 
                title=${t?"Boundary stops cannot be moved":"Drag to reorder"}
               ></ha-icon>

              <label class="color-swatch" style="background-color: ${e.color};">
                <input
                  type="color"
                  class="native-color-input"
                  .value=${e.color}
                  @input=${t=>this._handleColorChange(t,e.id)}
                />
              </label>

              <ha-textfield
                class="position-input"
                type="number"
                .value=${String(e.position)} 
                min="0"
                max="100"
                step="1"
                ?disabled=${t} /* Disable position input only for true boundary */
                @input=${t=>this._handlePositionInput(t,e.id)}
                suffix="%"
              ></ha-textfield>

              <div class="item-actions">
                 <!-- Use isTrueBoundary for conditional rendering -->
                 ${t?Y:J`
                         <ha-icon-button
                           title="Duplicate Stop"
                           ?disabled=${!n}
                           @click=${t=>this._handleDuplicateClick(t,e.id)}
                         >
                           <ha-icon icon="mdi:content-copy"></ha-icon>
                         </ha-icon-button>
                       `}
                 ${t?Y:J`
                   <ha-icon-button
                      title="Delete Stop"
                      ?disabled=${!i} /* Only disable delete based on total count now */
                      @click=${t=>this._handleDeleteClick(t,e.id)}
                   >
                      <ha-icon icon="mdi:delete"></ha-icon>
                   </ha-icon-button>
                 `}
              </div>
            </div>
          `}))}
      </div>
    `}};Ie.styles=d`
    :host {
      display: block;
      width: 100%;
    }

    .gradient-preview {
      height: 32px;
      border-radius: 4px;
      margin-bottom: 16px;
    }

    .stop-list {
      display: flex;
      flex-direction: column;
      gap: 8px; /* Slightly reduced gap */
      padding-left: 0;
      list-style: none;
    }

    .stop-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 6px 10px; /* Slightly reduced padding */
      background-color: var(--secondary-background-color);
      border-radius: 4px;
      border: 1px solid var(--divider-color);
      border-top: 2px solid transparent; /* For drop indicator */
      border-bottom: 2px solid transparent; /* For drop indicator */
      transition:
        border-color 0.2s ease-out,
        opacity 0.2s ease-out; /* Smooth transitions */
    }

    .stop-item.is-boundary {
      /* Maybe slightly different background for boundary stops */
      /* background-color: var(--primary-background-color); */
    }

    /* Dragging State */
    .stop-item.dragging {
      opacity: 0.5;
      /* Use dashed border consistent with ghost image */
      border: 1px dashed var(--primary-color);
      background-color: transparent; /* Make background transparent while dragging */
    }

    /* Drop Target State */
    .stop-item.drop-target {
      /* Highlight the whole item */
      border: 2px dashed var(--primary-color);
      background-color: rgba(var(--rgb-primary-color), 0.1);
    }

    .drag-handle {
      cursor: grab;
      color: var(--secondary-text-color);
    }
    .drag-handle:active {
      cursor: grabbing;
    }
    .stop-item.is-boundary .drag-handle {
      cursor: not-allowed;
      opacity: 0.5;
    }

    .color-swatch {
      width: 28px;
      height: 28px;
      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .native-color-input {
      position: absolute;
      top: -10px;
      left: -10px;
      width: 50px;
      height: 50px;
      opacity: 0;
      cursor: pointer;
    }

    .position-input {
      width: 100px; /* Increased width */
    }
    .position-input ha-textfield {
      text-align: right;
    }

    .position-label {
      width: 50px;
      text-align: right;
      font-size: 0.9em;
      color: var(--secondary-text-color);
    }

    .item-actions {
      margin-left: auto;
      display: flex;
      gap: 4px;
    }

    .item-actions ha-icon-button {
      --mdc-icon-button-size: 36px;
      color: var(--secondary-text-color);
    }
    .item-actions ha-icon-button:hover {
      color: var(--primary-text-color);
    }
    .item-actions ha-icon-button[disabled] {
      color: var(--disabled-text-color);
      pointer-events: none;
    }

    .stop-item.is-boundary .position-input {
      /* Already handled by ?disabled attribute */
    }
    .stop-item.is-boundary ha-icon-button[title='Delete Stop']:not([disabled]) {
      /* Keep enabled unless canDelete is false */
    }
  `,we([be({type:Array})],Ie.prototype,"stops",void 0),we([be({type:Number})],Ie.prototype,"key",void 0),we([fe()],Ie.prototype,"_draggedStopId",void 0),we([fe()],Ie.prototype,"_dropTargetId",void 0),we([fe()],Ie.prototype,"_dropTargetPosition",void 0),Ie=we([_e("gradient-editor")],Ie);let Ae=class extends Ie{};Ae=we([_e("ultra-vehicle-gradient-editor")],Ae);const Ce="2.5-beta3",{I:ze}=pe;class Ee{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Te=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),Te(e,t);return!0},je=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},Le=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),Be(t)}};function Re(e){void 0!==this._$AN?(je(this),this._$AM=e,Le(this)):this._$AM=e}function De(e,t=!1,i=0){const n=this._$AH,a=this._$AN;if(void 0!==a&&0!==a.size)if(t)if(Array.isArray(n))for(let e=i;e<n.length;e++)Te(n[e],!1),je(n[e]);else null!=n&&(Te(n,!1),je(n));else Te(this,e)}const Be=e=>{2==e.type&&(e._$AP??=De,e._$AQ??=Re)};class Ve extends Ee{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Le(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Te(this,e),je(this))}setValue(e){if((()=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class Oe{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class Ue{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((e=>this.q=e))}resume(){this.q?.(),this.Z=this.q=void 0}}const Ne=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,Pe=1073741823,Me=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends Ve{constructor(){super(...arguments),this._$Cwt=Pe,this._$Cbt=[],this._$CK=new Oe(this),this._$CX=new Ue}render(...e){return e.find((e=>!Ne(e)))??Z}update(e,t){const i=this._$Cbt;let n=i.length;this._$Cbt=t;const a=this._$CK,o=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const r=t[e];if(!Ne(r))return this._$Cwt=e,r;e<n&&r===i[e]||(this._$Cwt=Pe,n=0,Promise.resolve(r).then((async e=>{for(;o.get();)await o.get();const t=a.deref();if(void 0!==t){const i=t._$Cbt.indexOf(r);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}})))}return Z}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});var Fe=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let qe=class extends he{constructor(){super(...arguments),this._lastRenderTime=0,this._lastImageUrl=null,this._mapPopupData=null,this._iconActiveStates=new Map,this._templateSubscriptions=new Map,this._templateResults=new Map,this._entityStates=new Map,this._entityImageUrls=new Map}static getConfigElement(){return document.createElement("ultra-vehicle-card-editor")}static getStubConfig(){return{title:"Vehicle Title",title_alignment:"center",title_size:24,formatted_entities:!0,vehicle_image_type:"default"}}static get properties(){return{hass:{},config:{}}}static get styles(){return d`
      :host {
        --bar-height: 10px;
        --bar-thickness: var(--bar-height, 10px);
        --bar-radius: 2px;
        --card-padding: 16px;
      }

      ha-card {
        overflow: hidden;
      }

      .card-content {
        padding: 0 var(--card-padding); /* Apply padding only to left and right */
        position: relative; /* Create stacking context */
        z-index: 1; /* Base z-index for card content */
      }

      .card-title {
        color: var(--primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        letter-spacing: -0.012em;
        line-height: 1.2;
        display: block;
        width: 100%;
        margin-top: 16px;
        margin-bottom: 16px;
        position: relative; /* Create stacking context */
        z-index: 2; /* Above vehicle image */
        /* font-size is set via inline style from config */
      }

      .two-column-layout {
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        gap: 16px;
        height: 100%;
      }

      .column {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      /* Vehicle Info styles */
      .vehicle-info-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 16px;
        position: relative; /* Create stacking context */
        z-index: 2; /* Above vehicle image */
      }

      .vehicle-info-top {
        display: flex;
        justify-content: center;
        gap: 24px;
        margin-bottom: 8px;
      }

      .info-item-with-icon {
        display: flex;
        align-items: center;
        font-size: 0.85em;
        color: var(--primary-text-color);
        cursor: pointer;
        position: relative; /* Ensure proper stacking */
      }

      .info-item-with-icon ha-icon {
        margin-right: 8px;
        color: var(--secondary-text-color);
        --mdc-icon-size: 20px;
      }

      .info-item-status {
        font-size: 0.85em;
        font-weight: 500;
        color: var(--primary-text-color);
      }

      .info-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 8px;
      }

      .info-item.info-empty {
        justify-content: center;
        padding: 12px;
        font-style: italic;
        color: var(--secondary-text-color);
      }

      .info-label {
        font-weight: 500;
        color: var(--secondary-text-color);
        margin-right: 8px;
      }

      .info-value {
        font-weight: 400;
        color: var(--primary-text-color);
      }

      /* Vertical centering for two-column layout */
      .two-column-layout .column {
        justify-content: center;
        min-height: 200px;
      }

      /* Ensure images in two-column layout don't overflow their columns */
      .column .vehicle-image-container,
      .column .action-image-container {
        max-width: 100%;
      }

      /* Ensure nested elements in columns maintain their styles */
      .column .bars-container,
      .column .icon-rows {
        width: 100%;
        margin: 0 auto;
      }

      /* Center content within columns */
      .column .card-title,
      .column .vehicle-image-container,
      .column .bars-container,
      .column .icon-rows-container {
        align-self: center;
        width: 100%;
      }

      /* Vehicle image */
      .vehicle-image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative; /* Create stacking context */
        z-index: 1; /* Ensure vehicle image stays below interactive elements */
      }

      .vehicle-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition:
          transform 0.2s ease,
          opacity 0.2s ease;
      }

      .vehicle-image.image-error {
        opacity: 0.2;
      }

      .vehicle-image.action-image-active {
        /* Add specific styling for action image when active */
      }

      /* Clickable image styles */
      .vehicle-image.clickable {
        cursor: pointer;
        pointer-events: auto; /* Enable clicks */
      }

      .vehicle-image.clickable:hover {
        transform: scale(1.02);
      }

      /* Icon styling */
      .icon-rows-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        width: 100%;
        position: relative; /* Create stacking context */
        z-index: 2; /* Above vehicle image */
      }

      /* Icon Row with alignment classes */
      .icon-row {
        display: flex;
        flex-direction: row;
        width: 100%;
        padding: 4px 0;
      }

      /* Alignment classes */
      .align-flex-start {
        justify-content: flex-start;
      }

      .align-center {
        justify-content: center;
      }

      .align-flex-end {
        justify-content: flex-end;
      }

      .align-space-between {
        justify-content: space-between;
      }

      .align-space-around {
        justify-content: space-around;
      }

      .align-space-evenly {
        justify-content: space-evenly;
      }

      /* Icon container */
      .icon-outer-container {
        /* Change to flex and stretch children */
        display: flex;
        align-items: stretch; /* Make children fill height */
      }

      .icon-container {
        display: flex;
        /* flex-direction and align-items set dynamically */
        /* Add width, height, padding, gap, and box-sizing */
        width: 100%;
        height: 100%;
        padding: 8px;
        gap: 0px; /* Consistent gap for both directions initially */
        box-sizing: border-box;
        cursor: pointer;
        position: relative; /* Create stacking context */
        z-index: 2; /* Ensure clickability */
        justify-content: center; /* Default centering for vertical */
      }

      /* Special styling for horizontal (left/right) layout */
      /* REMOVE specific padding here */
      .icon-container[style*='flex-direction: row'],
      .icon-container[style*='flex-direction: row-reverse'] {
        justify-content: space-between; /* Push icon and text apart */
        gap: 8px; /* Add gap for horizontal layouts */
      }

      .icon-container.draggable {
        cursor: pointer;
        user-select: none;
        -webkit-user-select: none;
      }

      .icon-container:hover {
        background: rgba(var(--rgb-primary-color), 0.1);
      }

      .icon-background {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
        padding: 8px;
        box-sizing: border-box;
      }

      /* Adjust icon background margin for horizontal layouts */
      /* REMOVE these specific margin adjustments */
      /* .icon-container[style*='flex-direction: row'] .icon-background,
      .icon-container[style*='flex-direction: row-reverse'] .icon-background {
        margin-bottom: 0;
        margin-right: 0;
        margin-left: 0;
      } */

      .icon-container ha-icon {
        font-size: 24px;
      }

      .icon-label {
        font-size: 0.85em;
        margin-top: 4px;
        text-align: center;
        width: 100%;
        overflow: visible !important;
        text-overflow: clip !important;
        white-space: normal !important;
        word-break: break-word;
        line-height: 1.2;
      }

      /* Horizontal layout specific styles for icon labels */
      /* REMOVE these specific margin adjustments */
      /* .icon-container[style*='flex-direction: row'] .icon-label,
      .icon-container[style*='flex-direction: row-reverse'] .icon-label {
        margin-top: 0;
        text-align: left;
        align-self: center;
      } */

      .icon-state {
        font-size: 0.75em;
        color: var(--secondary-text-color);
        text-align: center;
        white-space: normal !important;
        overflow: visible !important;
        text-overflow: clip !important;
        width: 100%;
      }

      /* Horizontal layout specific styles for icon states */
      /* REMOVE these specific margin adjustments */
      /* .icon-container[style*='flex-direction: row'] .icon-state,
      .icon-container[style*='flex-direction: row-reverse'] .icon-state {
        text-align: left;
        align-self: center;
      } */

      .card-header {
        padding: 8px 16px 16px;
        display: flex;
        width: 100%;
      }

      .card-header.left {
        justify-content: flex-start;
      }

      .card-header.center {
        justify-content: center;
      }

      .card-header.right {
        justify-content: flex-end;
      }

      .card-title.left {
        text-align: left;
      }

      .card-title.center {
        text-align: center;
      }

      .card-title.right {
        text-align: right;
      }

      /* Map Popup Styles */
      .map-popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: var(--dialog-z-index, 7); /* Just below HA's dialog z-index */
        backdrop-filter: blur(2px);
      }

      .map-popup-content {
        background-color: var(--ha-card-background, var(--card-background-color, white));
        padding: 0; /* Remove padding, header/map handle spacing */
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        width: 90%;
        max-width: 600px;
        overflow: hidden; /* Contain the map */
        position: relative; /* Ensure proper stacking context */
      }

      .map-popup-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        border-bottom: 1px solid var(--divider-color);
        background-color: var(--secondary-background-color);
      }

      .map-popup-title {
        display: flex;
        flex-direction: column;
      }

      .map-popup-header h3 {
        margin: 0;
        font-size: 1.2em;
        color: var(--primary-text-color);
      }

      .map-popup-address {
        font-size: 0.9em;
        color: var(--secondary-text-color);
        margin-top: 4px;
        font-weight: normal;
      }

      .map-popup-header ha-icon-button {
        color: var(--secondary-text-color);
      }

      .map-popup-footer {
        padding: 8px 16px;
        border-top: 1px solid var(--divider-color);
        text-align: center;
      }

      .map-popup-footer a {
        color: var(--primary-color);
        text-decoration: none;
        font-size: 0.9em;
      }

      .map-popup-footer a:hover {
        text-decoration: underline;
      }

      /* Progress bar container styles */
      .bars-container {
        display: flex;
        flex-direction: row; /* Changed from column to row */
        flex-wrap: wrap; /* Allow wrapping */
        gap: 8px; /* Add spacing between bars */
        width: 100%;
        position: relative; /* Create stacking context */
        z-index: 2; /* Above vehicle image */
        margin-top: 16px;
        margin-bottom: 16px;
      }

      .progress-bar-wrapper {
        /* New wrapper class */
        display: flex;
        flex-direction: column;
        flex-shrink: 0; /* Prevent shrinking */
        /* width is set via inline style */
      }

      .progress-bar-container {
        margin-bottom: 8px;
      }

      .progress-bar {
        position: relative;
        height: 16px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        overflow: hidden;
        width: 100%;
      }

      /* Bar width classes */
      .progress-bar.width-25 {
        width: 25%;
      }

      .progress-bar.width-50 {
        width: 50%;
      }

      .progress-bar.width-75 {
        width: 75%;
      }

      .progress-bar.width-100 {
        width: 100%;
      }

      .progress-bar.bar-size-thin {
        height: 8px;
        border-radius: 4px;
      }

      .progress-bar.bar-size-regular {
        height: 16px;
        border-radius: 8px;
      }

      .progress-bar.bar-size-thick {
        height: 24px;
        border-radius: 12px;
      }

      .progress-bar.bar-size-thiccc {
        height: 32px;
        border-radius: 16px;
      }

      .progress-bar-fill {
        position: relative;
        height: 100%;
        width: 0;
        transition:
          width 1s ease,
          background-color 1s ease;
        border-radius: inherit;
      }

      /* Gradient styles */
      .progress-bar-fill[has-gradient='true'] {
        z-index: 2;
      }

      /* Value-based mode */
      .progress-bar-fill[has-gradient='true'][data-mode='value_based'] {
        background-image: none !important;
      }

      /* Full gradient mode */
      .progress-bar-fill[has-gradient='true'][data-mode='full'] {
        background-color: transparent !important;
        background-size: 100% 100% !important;
        background-position: 0% 0% !important;
        background-repeat: no-repeat !important;
      }

      /* Animations for progress bars */
      @keyframes charging-lines {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 50px 0;
        } /* Only move horizontally */
      }

      @keyframes pulse {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes blinking {
        0% {
          opacity: 1;
        }
        49% {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
        99% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes bouncing {
        0% {
          transform: scaleY(1);
        }
        50% {
          transform: scaleY(0.8);
        }
        100% {
          transform: scaleY(1);
        }
      }

      @keyframes glow {
        0% {
          box-shadow:
            0 0 10px 3px
              rgba(var(--glow-color-r, 52), var(--glow-color-g, 152), var(--glow-color-b, 219), 0.7),
            0 0 20px 6px
              rgba(var(--glow-color-r, 52), var(--glow-color-g, 152), var(--glow-color-b, 219), 0.4);
          opacity: 0.7;
        }
        50% {
          box-shadow:
            0 0 20px 5px
              rgba(var(--glow-color-r, 52), var(--glow-color-g, 152), var(--glow-color-b, 219), 0.9),
            0 0 40px 10px
              rgba(var(--glow-color-r, 52), var(--glow-color-g, 152), var(--glow-color-b, 219), 0.6);
          opacity: 0.9;
        }
        100% {
          box-shadow:
            0 0 10px 3px
              rgba(var(--glow-color-r, 52), var(--glow-color-g, 152), var(--glow-color-b, 219), 0.7),
            0 0 20px 6px
              rgba(var(--glow-color-r, 52), var(--glow-color-g, 152), var(--glow-color-b, 219), 0.4);
          opacity: 0.7;
        }
      }

      @keyframes rainbow {
        0% {
          filter: hue-rotate(0deg);
        }
        100% {
          filter: hue-rotate(360deg);
        }
      }

      /* MODIFIED: Keyframes for Fill (changed from fill-pulse) */
      @keyframes fill-grow {
        0% {
          transform: scaleX(0);
        }
        50% {
          transform: scaleX(1);
        } /* Grow full */
        100% {
          transform: scaleX(0);
        } /* Shrink back to loop */
      }

      /* NEW: Keyframes for new animations */
      @keyframes ripple {
        0%,
        100% {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 0%);
        }
        20% {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 10%, transparent 20%);
        }
        40% {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 20%, transparent 40%);
        }
        60% {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 30%, transparent 60%);
        }
        80% {
          background-image: radial-gradient(circle, rgba(255, 255, 255, 0.3) 40%, transparent 80%);
        }
      }

      @keyframes wave {
        0% {
          clip-path: path('M0,50 Q25,45 50,50 Q75,55 100,50 V100 H0 Z');
        }
        25% {
          clip-path: path('M0,50 Q25,55 50,50 Q75,45 100,50 V100 H0 Z');
        }
        50% {
          clip-path: path('M0,50 Q25,55 50,60 Q75,55 100,50 V100 H0 Z');
        }
        75% {
          clip-path: path('M0,50 Q25,45 50,50 Q75,55 100,50 V100 H0 Z');
        }
        100% {
          clip-path: path('M0,50 Q25,45 50,50 Q75,55 100,50 V100 H0 Z');
        }
      }

      @keyframes traffic {
        0% {
          background-position: 0 0;
        }
        100% {
          background-position: 30px 0;
        }
      }

      @keyframes heartbeat {
        0%,
        100% {
          transform: scale(1);
        }
        15% {
          transform: scale(1.1);
        }
        30% {
          transform: scale(1);
        }
        45% {
          transform: scale(1.15);
        }
        60% {
          transform: scale(1);
        }
      }

      @keyframes slide-in {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0);
        }
      }

      @keyframes flicker {
        0%,
        100% {
          opacity: 1;
        }
        41%,
        45% {
          opacity: 0.75;
        }
        48%,
        52% {
          opacity: 0.9;
        }
        53%,
        58% {
          opacity: 0.78;
        }
        62%,
        69% {
          opacity: 0.92;
        }
        74%,
        78% {
          opacity: 0.85;
        }
        83%,
        89% {
          opacity: 0.95;
        }
      }

      @keyframes progress-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes shimmer {
        0% {
          filter: brightness(1);
        }
        25% {
          filter: brightness(1.3);
        }
        50% {
          filter: brightness(1);
        }
        75% {
          filter: brightness(1.3);
        }
        100% {
          filter: brightness(1);
        }
      }

      @keyframes vibrate {
        0%,
        100% {
          transform: translateX(0);
        }
        10%,
        30%,
        50%,
        70%,
        90% {
          transform: translateX(-2px);
        }
        20%,
        40%,
        60%,
        80% {
          transform: translateX(2px);
        }
      }

      /* Animation classes */
      /* MODIFIED: Added background-color and opacity (KEEPING THESE) */
      .progress-bar-fill.animate-charging-lines::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: transparent;
        background-image: linear-gradient(
          -45deg,
          rgba(255, 255, 255, 0.3) 25%,
          transparent 25%,
          transparent 50%,
          rgba(255, 255, 255, 0.3) 50%,
          rgba(255, 255, 255, 0.3) 75%,
          transparent 75%,
          transparent
        );
        background-size: 50px 50px;
        animation: charging-lines 1.5s linear infinite; /* Adjusted speed slightly */
        pointer-events: none;
        z-index: 3;
        opacity: 1;
      }

      .progress-bar-fill.animate-pulse {
        animation: pulse 1.5s ease-in-out infinite;
      }

      .progress-bar-fill.animate-blinking {
        animation: blinking 1s step-end infinite;
      }

      .progress-bar-fill.animate-bouncing {
        animation: bouncing 0.8s ease-in-out infinite;
        transform-origin: center;
      }

      .progress-bar-fill.animate-glow::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        animation: glow 2s ease-in-out infinite;
        z-index: 3;
      }

      .progress-bar-fill.animate-rainbow::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
          to right,
          rgba(255, 0, 0, 0.5),
          rgba(255, 165, 0, 0.5),
          rgba(255, 255, 0, 0.5),
          rgba(0, 128, 0, 0.5),
          rgba(0, 0, 255, 0.5),
          rgba(75, 0, 130, 0.5),
          rgba(238, 130, 238, 0.5)
        );
        mix-blend-mode: overlay;
        animation: rainbow 3s linear infinite;
        pointer-events: none;
        z-index: 3;
      }

      /* MODIFIED: Use fill-grow animation for .animate-fill */
      .progress-bar-fill.animate-fill {
        animation: fill-grow 2s ease-in-out infinite; /* Use new animation */
        transform-origin: left; /* Ensure growth starts from the left */
      }

      /* NEW: Animation classes for the new types */
      .progress-bar-fill.animate-ripple::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        animation: ripple 1.5s ease-out infinite; /* Keep faster duration */
        background-size: 200% 100%; /* Restore original background size */
        background-position: center;
        pointer-events: none;
        z-index: 3;
      }

      .progress-bar-fill.animate-wave::before {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background: white; /* whatever wave color you want */
        animation: wave 3s ease-in-out infinite;
        clip-path: path('M0,50 Q25,45 50,50 Q75,55 100,50 V100 H0 Z');
        will-change: clip-path;
      }

      .progress-bar-fill.animate-traffic::before {
        content: '';
        position: absolute;
        inset: 0px;
        background-image: repeating-linear-gradient(
          90deg,
          transparent 0px,
          transparent 5px,
          rgba(255, 255, 255, 0.3) 10px,
          rgba(255, 255, 255, 0.3) 15px
        );
        background-size: 30px 100%;
        animation: traffic 0.5s linear infinite;
        will-change: background-position;
        pointer-events: none;
        z-index: 3;
      }

      .progress-bar-fill.animate-heartbeat {
        animation: heartbeat 1.5s ease-in-out infinite;
        transform-origin: center;
      }

      .progress-bar-fill.animate-slide-in {
        animation: slide-in 0.8s ease-out;
        animation-fill-mode: both;
      }

      .progress-bar-fill.animate-flicker {
        animation: flicker 3s linear infinite;
      }

      .progress-bar-fill.animate-progress-spinner::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top: 2px solid white;
        border-radius: 50%;
        animation: progress-spinner 1s linear infinite;
        z-index: 3;
      }

      .progress-bar-fill.animate-shimmer {
        animation: shimmer 2.5s ease-in-out infinite;
        position: relative;
      }

      .progress-bar-fill.animate-shimmer::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 50%;
        height: 100%;
        background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
        transform: skewX(-25deg);
        animation: shimmer 2.5s ease-in-out infinite;
      }

      .progress-bar-fill.animate-vibrate {
        animation: vibrate 0.5s linear infinite;
      }

      /* Bubble animation */
      @keyframes bubble-float {
        0% {
          transform: translateY(100%) scale(0.8);
          opacity: 0.6;
        }
        100% {
          transform: translateY(-100%) scale(1.2);
          opacity: 0;
        }
      }

      .progress-bar-fill.animate-bubbles {
        position: relative;
        overflow: hidden;
      }

      .progress-bar-fill.animate-bubbles::before,
      .progress-bar-fill.animate-bubbles::after,
      .progress-bar-fill.animate-bubbles span::before,
      .progress-bar-fill.animate-bubbles span::after {
        content: '';
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        animation: bubble-float 2.5s infinite linear;
      }

      .progress-bar-fill.animate-bubbles::before {
        width: 15px;
        height: 15px;
        left: 10%;
        animation-delay: 0s;
      }

      .progress-bar-fill.animate-bubbles::after {
        width: 12px;
        height: 12px;
        left: 40%;
        animation-delay: 0.5s;
      }

      .progress-bar-fill.animate-bubbles span {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .progress-bar-fill.animate-bubbles span::before {
        width: 8px;
        height: 8px;
        left: 60%;
        animation-delay: 1s;
      }

      .progress-bar-fill.animate-bubbles span::after {
        width: 10px;
        height: 10px;
        left: 80%;
        animation-delay: 1.5s;
      }

      /* Limit indicator */
      .limit-indicator {
        position: absolute;
        top: 0;
        height: 100%;
        width: 2px;
        background-color: #ff0000;
        z-index: 3; /* Reduced from 10 to stay below dialog-z-index (8) but above bar elements */
      }

      .bar-labels {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        width: 100%;
      }

      .bar-label {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 2px; /* Reduced from 10px to create tighter grouping */
        cursor: pointer;
        padding: 4px 0; /* Keep vertical padding */
      }

      .bar-label.left {
        justify-content: flex-start;
        padding-right: 8px;
      }

      .bar-label.right {
        justify-content: flex-end;
        padding-left: 8px;
      }

      .label-title {
        font-size: 0.85em;
        opacity: 0.9;
        color: var(--secondary-text-color);
        padding-right: 0; /* Remove padding, we'll use gap */
      }

      .label-value {
        font-size: 1em;
        font-weight: 500;
        color: var(--secondary-text-color);
        padding-left: 0; /* Remove padding, we'll use gap */
      }

      .label-separator {
        color: var(--secondary-text-color);
        opacity: 0.8;
        margin: 0; /* Remove margin, rely on parent gap */
      }

      /* Layout styles */
      .content {
        display: flex;
        flex-direction: column;
        padding: 16px 0;
        width: 100%;
      }

      .content.single {
        /* Single column layout - default */
      }

      .content.double {
        flex-direction: row;
        flex-wrap: wrap;
      }

      .content.double > * {
        width: 50%;
        box-sizing: border-box;
        padding: 0 8px;
        padding-right: 16px;
      }

      /* Add style for pending state if needed */
      .icon-container.pending-state {
        /* Optional: slightly dim or add other visual cue while pending */
        /* opacity: 0.8; */
      }

      /* Add style for the percentage text */
      .percentage-text {
        position: absolute;
        right: 5px;
        top: 50%;
        transform: translateY(-50%);
        font-weight: 500;
        text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.8);
        padding: 0 2px;
        user-select: none;
        white-space: nowrap;
      }
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");const t=this.config;JSON.stringify(null==t?void 0:t.icon_rows)!==JSON.stringify(null==e?void 0:e.icon_rows)&&this._iconActiveStates.clear(),this.config=Object.assign({},e),this._lastRenderTime=Date.now(),this.requestUpdate(),t&&this._checkForGradientOrAnimationChanges(t,this.config)&&this._forceFullRender()}_checkForGradientOrAnimationChanges(e,t){if(!e.bars||!t.bars)return!0;for(let i=0;i<Math.max(e.bars.length,t.bars.length);i++){const n=e.bars[i],a=t.bars[i];if(!n||!a)return!0;if(n.use_gradient!==a.use_gradient)return!0;if(n.gradient_display_mode!==a.gradient_display_mode)return!0;if(n.limit_entity!==a.limit_entity)return!0;if(n.limit_indicator_color!==a.limit_indicator_color)return!0;if(JSON.stringify(n.gradient_stops)!==JSON.stringify(a.gradient_stops))return!0;if(n.animation_type!==a.animation_type)return!0;if(n.animation_entity!==a.animation_entity)return!0;if(n.animation_state!==a.animation_state)return!0;if(n.action_animation!==a.action_animation)return!0;if(n.action_animation_entity!==a.action_animation_entity)return!0;if(n.action_animation_state!==a.action_animation_state)return!0}return!1}_forceFullRender(){this._lastRenderTime=Date.now(),this.requestUpdate(),setTimeout((()=>{this.shadowRoot&&this.shadowRoot.querySelectorAll(".progress-bar-fill").forEach((e=>{if(e instanceof HTMLElement){e.offsetHeight;const t=e.getAttribute("has-gradient"),i=e.getAttribute("data-mode");if("true"===t)if("full"===i)e.style.backgroundSize="100% 100%",e.style.backgroundPosition="0% 0%";else if("value_based"===i){const t=e.style.width;e.style.backgroundSize=`${t} 100%`}e.setAttribute("data-refreshed",String(this._lastRenderTime))}}))}),50)}render(){if(!this.config||!this.hass)return J``;const e=this.config.sections_order||["title","image","info","bars","icons"],t=this.config.layout_type||"single",i=this.config.sections_columns||{},n=this.config.section_styles||{},a=this.config.hidden_sections||[],o=e.filter((e=>!a.includes(e))),r=e=>{var t,i;const a=[],o=e.some((e=>e.startsWith("bar_")));let r=0;for(;r<e.length;){const s=e[r],l=n[s]||{};let c="";if(l.marginTop&&(c+=`margin-top: ${l.marginTop}px;`),l.marginBottom&&(c+=` margin-bottom: ${l.marginBottom}px;`),c=c.trim(),s.startsWith("bar_")){const t=[];let i=c;for(;r<e.length&&e[r].startsWith("bar_");){const a=e[r],o=parseInt(a.substring(4)),s=n[a]||{};let l="";s.marginTop&&(l+=`margin-top: ${s.marginTop}px;`),s.marginBottom&&(l+=` margin-bottom: ${s.marginBottom}px;`),l=l.trim(),!isNaN(o)&&this.config.bars&&this.config.bars[o]&&(t.push(o),1===t.length&&(i=l)),r++}t.length>0&&a.push(J`<div class="bars-container" style="${i}">
                ${t.map((e=>this._renderBar(this.config.bars[e])))}
              </div>`),r--}else if("bars"===s&&!o&&(null===(t=this.config.bars)||void 0===t?void 0:t.length))a.push(J`<div class="bars-container" style="${c}">
              ${this.config.bars.map((e=>this._renderBar(e)))}
            </div>`);else if("bars"!==s||!o)switch(s){case"title":const e=this.config.title_size||24;a.push(this.config.title?J`<h1
                      class="card-title ${this.config.title_alignment||"center"}"
                      style="font-size: ${e}px !important; line-height: 1.2; 
                      ${this.config.title_color?`color: ${this.config.title_color};`:""} 
                      ${c}"
                    >
                      ${this.config.title}
                    </h1>`:J``);break;case"image":a.push(this._renderImage(c));break;case"info":a.push(this._renderVehicleInfo(c));break;case"icons":a.push(this._renderIconRows(c));break;default:if(s.startsWith("icon_row_")){const e=s.substring(9),t=null===(i=this.config.icon_rows)||void 0===i?void 0:i.find((t=>t.id===e));t&&a.push(J`<div class="icon-rows-container" style="${c}">
                      ${this._renderIconRow(t)}
                    </div>`)}}r++}return a};if("double"===t){const e=o.filter((e=>"right"!==i[e])),t=o.filter((e=>"right"===i[e]));return J`
        <ha-card>
          ${this.config.global_css?J`<style>
                :host { ${this.config.global_css} }
              </style>`:""}
          <div
            class="card-content two-column-layout"
            style="${this.config.card_background?`background-color: ${this.config.card_background};`:""}"
          >
            <div class="column left-column">${r(e)}</div>
            <div class="column right-column">${r(t)}</div>
          </div>
          ${this._renderMapPopup()}
        </ha-card>
      `}return J`
      <ha-card>
        ${this.config.global_css?J`<style>
              :host { ${this.config.global_css} }
            </style>`:""}
        <div
          class="card-content"
          style="${this.config.card_background?`background-color: ${this.config.card_background};`:""}"
        >
          ${r(o)}
        </div>
        ${this._renderMapPopup()}
      </ha-card>
    `}_renderImage(e=""){var t,i,n;let a="",o="",r=!1,s="",l=null;const c=this.config.action_image_priority||"newest";if(this.config.action_images&&this.config.action_images.length>0)for(const e of this.config.action_images)if(e.entity&&e.state){const i=null===(t=this.hass.states[e.entity])||void 0===t?void 0:t.state;if(void 0!==i&&i.trim().toLowerCase()===e.state.trim().toLowerCase()&&(l=e,"priority"===c))break}if(l){const e=l.image_type;let t="";if(s=l.entity,"upload"===e&&l.image)t=ke(this.hass,l.image);else if("url"===e)t=l.image||"";else if("entity"===e&&l.image_entity){const e=l.image_entity;s=e;const n=this.hass.states[e];(null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.entity_picture)?this._entityImageUrls.has(e)?t=this._entityImageUrls.get(e)||"":(t=n.attributes.entity_picture,t.startsWith("/")&&(t=`${this.hass.hassUrl?this.hass.hassUrl():""}${t.startsWith("/")?t.substring(1):t}`)):t=(null==n?void 0:n.state)||""}t&&(a=t,o=this._computeImageStyle(this.config.action_image_width,l.image_crop),r=!0)}if(!r){const e=this.config.vehicle_image_type,t=this.config.vehicle_image||"";if(this.config.location_entity?s=this.config.location_entity:this.config.mileage_entity?s=this.config.mileage_entity:this.config.car_state_entity&&(s=this.config.car_state_entity),t&&(t.startsWith("http")||t.startsWith("/")||t.startsWith("data:")))a=t.includes("/api/image/serve/")&&!t.endsWith("/original")?`${t}/original`:t;else if("entity"===e&&this.config.vehicle_image_entity){const e=this.config.vehicle_image_entity;s=e;const t=this.hass.states[e];(null===(n=null==t?void 0:t.attributes)||void 0===n?void 0:n.entity_picture)?this._entityImageUrls.has(e)?a=this._entityImageUrls.get(e)||"":(a=t.attributes.entity_picture,a.startsWith("/")&&(a=`${this.hass.hassUrl?this.hass.hassUrl():""}${a.startsWith("/")?a.substring(1):a}`)):a=(null==t?void 0:t.state)&&(t.state.startsWith("http")||t.state.startsWith("/")||t.state.startsWith("data:"))?t.state:""}else"default"===e&&(a=ye);a||"none"===e||(a=ye),o=this._computeImageStyle(this.config.vehicle_image_width,this.config.vehicle_image_crop)}if(a&&a!==ye&&(this._lastImageUrl=a),!a)return"";const d=s?()=>this._showMoreInfo(s):void 0,p=!!s;return J`
      <div class="vehicle-image-container" style="${e}">
        <img
          class="vehicle-image ${r?"action-image-active":""} ${p?"clickable":""}"
          src="${a}"
          style="${o}"
          @error=${this._handleImageError}
          @click=${d}
          ?title=${p?`Click to view details for ${this._getFriendlyName(s)}`:void 0}
        />
      </div>
    `}_getFriendlyName(e){const t=this.hass.states[e];return t&&(t.attributes.friendly_name||e.split(".").pop())||e}_formatValue(e,t){var i,n,a,o,r;if(!t||!this.hass.states[t])return e;const s=this.hass.states[t];if(!this.config.formatted_entities)return this.hass.formatEntityState(s);if(t===this.config.location_entity){const e=Object.keys(this.hass.states).filter((e=>e.startsWith("zone.")));for(const t of e){const e=this.hass.states[t];if((null===(i=null==e?void 0:e.attributes)||void 0===i?void 0:i.latitude)&&(null===(n=null==e?void 0:e.attributes)||void 0===n?void 0:n.longitude)&&(null===(a=null==s?void 0:s.attributes)||void 0===a?void 0:a.latitude)&&(null===(o=null==s?void 0:s.attributes)||void 0===o?void 0:o.longitude)&&Math.abs(e.attributes.latitude-s.attributes.latitude)<1e-4&&Math.abs(e.attributes.longitude-s.attributes.longitude)<1e-4)return e.attributes.friendly_name||e.attributes.name||t.split(".")[1]}if(null===(r=null==s?void 0:s.attributes)||void 0===r?void 0:r.formatted_address)return s.attributes.formatted_address}return this.hass.formatEntityState(s)}_handleImageError(e){const t=e.target;t.classList.add("image-error"),this._lastImageUrl&&t.src!==this._lastImageUrl?t.src=this._lastImageUrl:t.src=""}_renderBar(e){if(!e.entity)return J``;const t=this.hass.states[e.entity];if(!t)return J``;const i=parseFloat(t.state),n=isNaN(i)||"unavailable"===t.state||"unknown"===t.state?0:Math.max(0,Math.min(100,i)),a=e=>e?(e.startsWith("var(--"),e):"";let o=null,r="";if(e.limit_entity){const t=this.hass.states[e.limit_entity];t&&!isNaN(parseFloat(t.state))&&(o=parseFloat(t.state),r=a(e.limit_indicator_color||"#ff0000"))}const s=`bar-size-${e.bar_size||"regular"}`,l=(e.width,this._getBarAnimationClass(e)),c=e.gradient_stops||[],d=!0===e.use_gradient&&c.length>=2,p=d&&e.gradient_display_mode?e.gradient_display_mode:"value_based";let g="",h="";switch(e.bar_radius){case"square":g="border-radius: 0;",h="border-radius: 0;";break;case"rounded-square":g="border-radius: 4px;",h="border-radius: 4px 0 0 4px;";break;default:g="border-radius: 1000px;",h="border-radius: 1000px 0 0 1000px;"}let u,_="";if("animate-glow"===l&&(_=`--glow-color: ${d?Se(c,"value_based"===p?n:100):e.bar_color||"var(--primary-color)"};`),d){if("value_based"===p){const t=Se(c,n);u=J`
          <div
            class="progress-bar-fill ${l}"
            data-use-gradient="true"
            has-gradient="true"
            data-mode="value_based"
            data-percentage="${n}"
            style="
              width: ${n}%;
              background-color: ${t};
              ${h}
              ${_} /* Add glow variables */
            "
          >
            ${"animate-bubbles"===l?J`<span></span>`:""}
            ${e.show_percentage?this._renderPercentageText(e,n):""}
          </div>
        `}else if("full"===p){const t=xe(c);u=J`
          <div
            class="progress-bar-fill ${l}"
            data-use-gradient="true"
            has-gradient="true"
            data-mode="full"
            data-percentage="${n}"
            style="
              width: ${n}%;
              background-image: ${t};
              background-color: transparent;
              background-size: 100% 100%;
              background-position: 0% 0%;
              background-repeat: no-repeat;
              ${h}
              ${_} /* Add glow variables */
            "
          >
            ${"animate-bubbles"===l?J`<span></span>`:""}
            ${e.show_percentage?this._renderPercentageText(e,n):""}
          </div>
        `}else if("cropped"===p){const t=xe(c);u=J`
          <div
            class="progress-bar-fill ${l}"
            data-use-gradient="true"
            has-gradient="true"
            data-mode="cropped"
            data-percentage="${n}"
            style="
              width: ${n}%;
              background-image: ${t};
              background-color: transparent;
              background-size: ${100/n*100}% 100%;
              background-position: 0% 0%;
              background-repeat: no-repeat;
              ${h}
              ${_} /* Add glow variables */
            "
          >
            ${"animate-bubbles"===l?J`<span></span>`:""}
            ${e.show_percentage?this._renderPercentageText(e,n):""}
          </div>
        `}}else{const t=a(e.bar_color||"var(--primary-color)");u=J`
        <div
          class="progress-bar-fill ${l}"
          data-percentage="${n}"
          style="
            width: ${n}%;
            background-color: ${t};
            ${h}
            ${_} /* Add glow variables */
          "
        >
          ${"animate-bubbles"===l?J`<span></span>`:""}
          ${e.show_percentage?this._renderPercentageText(e,n):""}
        </div>
      `}let m="";if(e.width&&"100"!==e.width){const t=parseInt(e.width);let i=0;50===t?i=4:25===t?i=6:75===t&&(i=2),m=`calc(${e.width}% - ${i}px)`}else m="100%";return J`
      <div
        class="progress-bar-wrapper"
        style="width: ${m};" /* Apply calculated width to wrapper */
      >
        <div
          class="progress-bar ${s}" /* Removed width class */
          style="background: ${e.background_color||"#121212"}; border-color: ${e.border_color||"#686868"}; width: 100%; ${g}" /* Bar takes full width of wrapper */
          @click=${()=>this._showMoreInfo(e.entity)}
        >
          ${u}
          ${null!==o?J`<div
                  class="limit-indicator"
                  style="left: ${o}%;
                       background-color: ${r};
                       box-shadow: 0 0 2px ${r};"
                ></div>`:""}
        </div>
        ${this._renderBarLabels(e)}
      </div>
    `}_renderPercentageText(e,t){const i=e.percentage_text_size?`${e.percentage_text_size}px`:"14px",n=e.percentage_text_color||"#ffffff";return J`
      <div
        class="percentage-text"
        style="
        font-size: ${i};
        color: ${n};
      "
      >
        ${Math.round(t)}%
      </div>
    `}_getBarAnimationClass(e){let t="";const i=this._getEntityState(e.animation_entity),n=this._getEntityState(e.action_animation_entity);return e.animation_type&&(!e.animation_entity&&!e.animation_state||e.animation_entity&&e.animation_state&&i===e.animation_state)&&(t=`animate-${e.animation_type}`),e.action_animation&&e.action_animation_entity&&e.action_animation_state&&n===e.action_animation_state&&(t=`animate-${e.action_animation}`),t}_getEntityState(e){var t;if(e&&this.hass.states[e])return null===(t=this.hass.states[e])||void 0===t?void 0:t.state}_renderIconRows(e=""){const{icon_rows:t=[]}=this.config;return t&&0!==t.length?J`
      <div class="icon-rows-container" style="${e}">
        ${t.map((e=>this._renderIconRow(e)))}
      </div>
    `:J``}_renderIconRow(e){if(!e.icons||!e.icons.length)return J``;const t=e.width||"100",i=e.alignment||"space-between",n=e.spacing||"medium";return J`
      <div class="icon-row ${`align-${i}`}" style="width: ${t}%; gap: ${{none:"0",small:"8px",medium:"16px",large:"24px"}[n]||"16px"};">
        ${e.icons.map((e=>this._renderCardIcon(e)))}
      </div>
    `}_renderCardIcon(e){var t;if(!e.entity)return J``;const i=this.hass.states[e.entity];if(!i)return J``;const n=`${e.entity}_${e.active_template_mode?e.active_template:""}_${e.inactive_template_mode?e.inactive_template:""}_${e.active_state||""}_${e.inactive_state||""}`,a=(t,n=!1)=>{const a=i.attributes.icon||null,o=t&&e.icon_active?e.icon_active:!t&&e.icon_inactive?e.icon_inactive:a||"mdi:help-circle-outline",r=t&&e.color_active?e.color_active:e.color_inactive,s=e.name||i.attributes.friendly_name||"";let l=i.state;i.attributes.unit_of_measurement;const c=t?e.active_state_text:e.inactive_state_text;null!=c&&""!==c?l=c:this.config.formatted_entities&&i.state&&(l=this._formatValue(i.state,e.entity));const d=e.icon_size?isNaN(Number(e.icon_size))&&"string"==typeof e.icon_size&&(e.icon_size.endsWith("px")||e.icon_size.endsWith("em")||e.icon_size.endsWith("%"))?e.icon_size:`${e.icon_size}px`:"24px",p=e.text_size?isNaN(Number(e.text_size))&&"string"==typeof e.text_size&&(e.text_size.endsWith("px")||e.text_size.endsWith("em")||e.text_size.endsWith("%"))?e.text_size:`${e.text_size}px`:"14px",g=(()=>{if(!e.icon_background||"none"===e.icon_background)return"";let t=24;if("string"==typeof d){const e=d.match(/^(\d+)/);e&&(t=parseInt(e[1],10))}else"number"==typeof d&&(t=d);const i=t+16;let n=`background-color: ${e.icon_background_color||"var(--secondary-background-color)"}; display: flex; align-items: center; justify-content: center; width: ${i}px; height: ${i}px;`;switch(e.icon_background){case"circle":n+="border-radius: 50%;";break;case"square":n+="border-radius: 0;";break;case"rounded-square":n+=`border-radius: ${Math.max(4,.15*i)}px;`}return n})(),h=e.text_position||"bottom",u={bottom:"column",top:"column-reverse",left:"row-reverse",right:"row"}[h]||"column",_={"flex-start":"flex-start",center:"center","flex-end":"flex-end"}[e.vertical_alignment||"center"]||"center",m=e.text_alignment||"center",v="left"===m?"flex-start":"right"===m?"flex-end":"center",b=(()=>{if(!e.container_background||"none"===e.container_background)return"";let t=`background-color: ${e.container_background_color||"var(--secondary-background-color)"}; padding: ${"left"===h||"right"===h?"4px 12px":"8px"}; display: inline-flex; align-items: ${_}; justify-content: center;`;switch(e.container_background){case"circle":t+="border-radius: 50%;";break;case"square":t+="border-radius: 0;";break;case"rounded-square":t+="border-radius: 8px;"}return t})(),f=t&&!1!==e.show_icon_active||!t&&!1!==e.show_icon_inactive,y=t?void 0===e.show_name_active?!1!==e.show_name:e.show_name_active:void 0===e.show_name_inactive?!1!==e.show_name:e.show_name_inactive,k=t?void 0===e.show_state_active?!1!==e.show_state:e.show_state_active:void 0===e.show_state_inactive?!1!==e.show_state:e.show_state_inactive,w=t?e.name_color_active||"var(--primary-text-color)":e.name_color_inactive||"var(--primary-text-color)",x=t?e.state_color_active||"var(--primary-text-color)":e.state_color_inactive||"var(--secondary-text-color)";return J`
        <div
          class="icon-outer-container"
          style="${b}${e.container_width?`width: ${e.container_width}%;`:""}"
          @click=${()=>{this._handleIconClick(e)}}
        >
          <div
            class="icon-container ${"draggable"} ${n?"pending-state":""}"
            style="flex-direction: ${u}; align-items: ${_};"
            draggable="${!0}"
            @dragstart=${this._handleDragStart}
            @dragend=${this._handleDragEnd}
          >
            ${e.icon_background&&"none"!==e.icon_background?J`
                    ${f?J`<div class="icon-background" style="${g}">
                          <ha-icon
                            .icon="${o}"
                            style="color: ${r||"var(--primary-text-color)"}; font-size: ${d}; --mdc-icon-size: ${d};"
                          ></ha-icon>
                        </div>`:""}
                  `:J`
                    ${f?J`<ha-icon
                          .icon="${o}"
                          style="color: ${r||"var(--primary-text-color)"}; font-size: ${d}; --mdc-icon-size: ${d};"
                        ></ha-icon>`:""}
                  `}
            <div
              style="display: flex; flex-direction: column; align-items: ${v}; width: 100%; gap: 2px;"
            >
              ${y?J`<div
                    class="icon-label"
                    style="font-size: ${p}; text-align: ${m}; color: ${w};"
                  >
                    ${s}
                  </div>`:""}
              ${k?J`<div
                    class="icon-state"
                    style="font-size: ${p}; text-align: ${m}; color: ${x};"
                  >
                    ${l}
                  </div>`:""}
            </div>
          </div>
        </div>
      `},o=null!==(t=this._iconActiveStates.get(n))&&void 0!==t&&t;return J`${Me((async()=>{let t=!1,n=!1;if(e.active_template_mode&&e.active_template){n=!0;const i=`active_${e.entity}_${e.active_template}`,a=this._templateResults.get(i);t=null!=a&&a,this._templateSubscriptions.has(i)||this._subscribeToTemplate(e.active_template,i),n=!0}else if(e.inactive_template_mode&&e.inactive_template){n=!0;const i=`inactive_${e.entity}_${e.inactive_template}`,a=this._templateResults.get(i);t=!(null!=a&&a),this._templateSubscriptions.has(i)||this._subscribeToTemplate(e.inactive_template,i),n=!0}if(!n){const n=i.state;t="unknown"!==n&&"unavailable"!==n&&(!(!e.active_state||n!==e.active_state)||(!e.inactive_state||n!==e.inactive_state)&&(e.inactive_state?n!==e.inactive_state:"on"===n||"true"===n||Number(n)>0))}return t})().then((e=>(this._iconActiveStates.get(n)!==e&&(this._iconActiveStates.set(n,e),this.requestUpdate()),a(e,!1)))),a(o,!0))}`}_handleIconClick(e){var t;if(e.entity&&e.on_click_action)switch(e.on_click_action){case"toggle":const i=e.entity.split(".")[0];this.hass.callService(i,"toggle",{entity_id:e.entity});break;case"more-info":const n=new CustomEvent("hass-more-info",{detail:{entityId:e.entity},bubbles:!0,composed:!0});this.dispatchEvent(n);break;case"navigate":if(e.navigation_path){const t=new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0});window.history.pushState(null,"",e.navigation_path),this.dispatchEvent(t)}break;case"show-location-map":this._openLocationMap(e.entity);break;case"trigger":const a=e.entity;if(a){const e=a.split(".")[0],i=null===(t=this.hass.states[a])||void 0===t?void 0:t.state;let n=null,o=e;switch(e){case"automation":n="trigger";break;case"script":n="turn_on";break;case"button":case"input_button":n="press";break;case"lock":n="locked"===i?"unlock":"lock";break;default:console.warn(`[UltraVehicleCard] Trigger action used on unsupported domain '${e}' for entity ${a}. No action performed.`)}n&&o?this.hass.callService(o,n,{entity_id:a}):n||console.warn(`[UltraVehicleCard] No suitable service found for trigger action on ${a}`)}else console.warn("[UltraVehicleCard] Trigger action called, but no entity defined for icon:",e)}}_openLocationMap(e){const t=this.hass.states[e];if(!t)return void this._showMoreInfo(e);const i=t.attributes;let n,a;if(void 0!==i.latitude&&void 0!==i.longitude)n=i.latitude,a=i.longitude;else if(void 0!==i.Location)if(Array.isArray(i.Location)){if(i.Location.length>=2){const e=parseFloat(i.Location[0]),t=parseFloat(i.Location[1]);isNaN(e)||isNaN(t)||(n=e,a=t)}}else if("string"==typeof i.Location){const e=i.Location.split(",").map((e=>parseFloat(e.trim())));2!==e.length||isNaN(e[0])||isNaN(e[1])||(n=e[0],a=e[1])}void 0!==n&&void 0!==a?this._mapPopupData={latitude:n,longitude:a,title:i.friendly_name||e}:this._showMoreInfo(e)}_handleDragStart(e){e.dataTransfer&&(e.dataTransfer.setData("text/plain","dragging-icon"),e.target instanceof HTMLElement&&(e.target.style.opacity="0.5"))}_handleDragEnd(e){e.target instanceof HTMLElement&&(e.target.style.opacity="1")}_hexToRgb(e){const t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;if(t.test(e)){const i=t.exec(e);if(i)return{r:parseInt(i[1]+i[1],16),g:parseInt(i[2]+i[2],16),b:parseInt(i[3]+i[3],16)}}const i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(i)return{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)};const n=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d\.]+)?\)$/i.exec(e);return n?{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)}:null}_renderVehicleInfo(e=""){const t=!1!==this.config.show_location&&this.config.location_entity&&void 0!==this.hass.states[this.config.location_entity],i=!1!==this.config.show_mileage&&this.config.mileage_entity&&void 0!==this.hass.states[this.config.mileage_entity],n=!1!==this.config.show_car_state&&this.config.car_state_entity&&void 0!==this.hass.states[this.config.car_state_entity];if(!t&&!i&&!n)return J``;const a=t?this._formatValue(this.hass.states[this.config.location_entity].state,this.config.location_entity):"",o=i?this._formatValue(this.hass.states[this.config.mileage_entity].state,this.config.mileage_entity):"",r=n?this._formatValue(this.hass.states[this.config.car_state_entity].state,this.config.car_state_entity):"";return J`
      <div class="vehicle-info-container" style="${e}">
        <div class="vehicle-info-top">
          ${t?J`
                <div
                  class="info-item-with-icon"
                  @click=${()=>this._showMoreInfo(this.config.location_entity)}
                >
                  <ha-icon
                    icon="mdi:map-marker"
                    style="${this.config.location_icon_color?`color: ${this.config.location_icon_color};`:""}"
                  ></ha-icon>
                  <span
                    style="${this.config.location_text_color?`color: ${this.config.location_text_color};`:""}"
                    >${a}</span
                  >
                </div>
              `:""}
          ${i?J`
                <div
                  class="info-item-with-icon"
                  @click=${()=>this._showMoreInfo(this.config.mileage_entity)}
                >
                  <ha-icon
                    icon="mdi:speedometer"
                    style="${this.config.mileage_icon_color?`color: ${this.config.mileage_icon_color};`:""}"
                  ></ha-icon>
                  <span
                    style="${this.config.mileage_text_color?`color: ${this.config.mileage_text_color};`:""}"
                    >${o}</span
                  >
                </div>
              `:""}
        </div>

        ${n?J`
              <div
                class="info-item-status"
                @click=${()=>this._showMoreInfo(this.config.car_state_entity)}
                style="cursor: pointer; ${this.config.car_state_text_color?`color: ${this.config.car_state_text_color};`:""}"
              >
                <span>${r}</span>
              </div>
            `:""}
      </div>
    `}_computeImageStyle(e,t){let i="";return void 0!==e&&(i+=`width: ${e}%; height: auto;`),t&&(i+=`\n        margin-top: ${t.top}px;\n        margin-right: ${t.right}px;\n        margin-bottom: ${t.bottom}px;\n        margin-left: ${t.left}px;\n        overflow: hidden;\n      `),i}_normalizeState(e){return e?e.toLowerCase().replace(/\s+/g,"_"):""}_renderBarLabels(e){var t,i;const n=!1!==e.show_left&&e.left_entity?this._formatValue(null===(t=this.hass.states[e.left_entity])||void 0===t?void 0:t.state,e.left_entity):"",a=!1!==e.show_right&&e.right_entity?this._formatValue(null===(i=this.hass.states[e.right_entity])||void 0===i?void 0:i.state,e.right_entity):"",o=e=>{var t,i;return e&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""},r=(e,t=15)=>e?e.length<=t?e:e.substring(0,t)+"...":"",s=e.left_title||(!1!==e.show_left&&e.left_entity?o(e.left_entity):""),l=e.right_title||(!1!==e.show_right&&e.right_entity?o(e.right_entity):""),c=e.alignment||"space-between",d=e.left_text_color||"var(--secondary-text-color)",p=e.right_text_color||"var(--secondary-text-color)",g=e.left_title_color||"var(--secondary-text-color)",h=e.right_title_color||"var(--secondary-text-color)",u=e.left_title_size?`${e.left_title_size}px`:"inherit",_=e.left_text_size?`${e.left_text_size}px`:"inherit",m=e.right_title_size?`${e.right_title_size}px`:"inherit",v=e.right_text_size?`${e.right_text_size}px`:"inherit";return J`
      <div class="bar-labels" style="justify-content: ${c};">
        ${!1!==e.show_left?J`
              <div
                class="bar-label left"
                @click=${()=>e.left_entity&&this._showMoreInfo(e.left_entity)}
              >
                ${s?J`<span
                      class="label-title"
                      style="color: ${g}; font-size: ${u};"
                      >${r(s)}</span
                    >`:""}
                ${s&&n?J`<span class="label-separator">:</span>`:""}
                ${n?J`<span
                      class="label-value"
                      style="color: ${d}; font-size: ${_};"
                      >${n}</span
                    >`:""}
              </div>
            `:""}
        ${!1!==e.show_right?J`
              <div
                class="bar-label right"
                @click=${()=>e.right_entity&&this._showMoreInfo(e.right_entity)}
              >
                ${l?J`<span
                      class="label-title"
                      style="color: ${h}; font-size: ${m};"
                      >${r(l)}</span
                    >`:""}
                ${l&&a?J`<span class="label-separator">:</span>`:""}
                ${a?J`<span
                      class="label-value"
                      style="color: ${p}; font-size: ${v};"
                      >${a}</span
                    >`:""}
              </div>
            `:""}
      </div>
    `}_showMoreInfo(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}connectedCallback(){super.connectedCallback(),this._setupRefreshInterval(),this.addEventListener("force-gradient-refresh",this._handleForceGradientRefresh),setTimeout((()=>{var e,t;(null===(t=null===(e=this.config)||void 0===e?void 0:e.bars)||void 0===t?void 0:t.some((e=>e.use_gradient)))&&this._forceFullRender()}),100),setTimeout((()=>{var e,t;(null===(t=null===(e=this.config)||void 0===e?void 0:e.bars)||void 0===t?void 0:t.some((e=>e.use_gradient)))&&this._forceFullRender()}),1e3)}disconnectedCallback(){super.disconnectedCallback(),this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=void 0),this._unsubscribeAllTemplates(),this.removeEventListener("force-gradient-refresh",this._handleForceGradientRefresh)}_handleForceGradientRefresh(e){var t;const i=e;this._lastRenderTime=(null===(t=i.detail)||void 0===t?void 0:t.timestamp)||Date.now(),this._forceFullRender(),[10,25,50,100,500].forEach((e=>{setTimeout((()=>{this._lastRenderTime=Date.now(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("gradient-update-complete",{bubbles:!0,composed:!0,detail:{timestamp:this._lastRenderTime,config:this.config}}))}),e)}))}_setupRefreshInterval(){this._refreshInterval&&clearInterval(this._refreshInterval),this._refreshInterval=window.setInterval((()=>{var e;(null===(e=this.config.bars)||void 0===e?void 0:e.some((e=>{const t=e.animation_entity||e.action_animation_entity,i=e.animation_state||e.action_animation_state,n=e.animation_type||e.action_animation;if(t&&i&&n&&"none"!==n){const e=this.hass.states[t];return e&&e.state===i}return!1})))&&(this._lastRenderTime=Date.now(),this.requestUpdate())}),1e3)}updated(e){var t,i,n,a,o,r,s,l,c;if(super.updated(e),e.has("config")||e.has("hass")){if(this._lastRenderTime=Date.now(),e.has("hass")){const d=e.get("hass");let p=!1;if("entity"===this.config.vehicle_image_type&&this.config.vehicle_image_entity){const e=this.config.vehicle_image_entity,o=null===(t=null==d?void 0:d.states[e])||void 0===t?void 0:t.state,r=null===(i=this.hass.states[e])||void 0===i?void 0:i.state;if(o!==r){if(this._entityStates.set(e,r||""),null===(a=null===(n=this.hass.states[e])||void 0===n?void 0:n.attributes)||void 0===a?void 0:a.entity_picture){let t=this.hass.states[e].attributes.entity_picture;t.startsWith("/")&&(t=`${this.hass.hassUrl?this.hass.hassUrl():""}${t.startsWith("/")?t.substring(1):t}`),this._entityImageUrls.set(e,`${t}${t.includes("?")?"&":"?"}state=${Date.now()}`)}p=!0}}if(this.config.action_entity&&this.config.action_state){const e=this.config.action_entity;if((null===(o=null==d?void 0:d.states[e])||void 0===o?void 0:o.state)!==(null===(r=this.hass.states[e])||void 0===r?void 0:r.state)&&"entity"===this.config.action_image_type&&this.config.action_image_entity){const e=this.config.action_image_entity;if(this._entityStates.set(e,(null===(s=this.hass.states[e])||void 0===s?void 0:s.state)||""),null===(c=null===(l=this.hass.states[e])||void 0===l?void 0:l.attributes)||void 0===c?void 0:c.entity_picture){let t=this.hass.states[e].attributes.entity_picture;t.startsWith("/")&&(t=`${this.hass.hassUrl?this.hass.hassUrl():""}${t.startsWith("/")?t.substring(1):t}`),this._entityImageUrls.set(e,`${t}${t.includes("?")?"&":"?"}state=${Date.now()}`)}p=!0}}p&&this.requestUpdate()}this.shadowRoot&&setTimeout((()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll(".progress-bar-fill");t&&t.length>0&&t.forEach((e=>{if(e instanceof HTMLElement){e.offsetHeight;const t=e.getAttribute("has-gradient"),i=e.getAttribute("data-mode");"true"===t&&("full"===i?(e.style.backgroundSize="100% 100%",e.style.backgroundPosition="0% 0%",e.style.backgroundRepeat="no-repeat"):"value_based"===i&&(e.style.backgroundImage="none"))}}))}),0)}}async _evaluateTemplate(e){var t;if(!e||!this.hass)return!1;const i=e.trim();if(!i)return!1;try{const e=await this.hass.callApi("POST","template",{template:i}),t=e.toLowerCase().trim();if(["true","on","yes","1"].includes(t))return!0;if(["false","off","no","0","unavailable","unknown","none",""].includes(t))return!1;const n=parseFloat(t);return isNaN(n)?(console.warn(`[UltraVehicleCard] Template evaluated to ambiguous string '${e}', interpreting as false.`),!1):0!==n}catch(e){const n=(null===(t=e.error)||void 0===t?void 0:t.message)||e.message||String(e);return console.error(`[UltraVehicleCard] Error evaluating template via API: ${i}. Error: ${n}`),!1}}async _subscribeToTemplate(e,t){if(e&&this.hass)try{const i=this.hass.connection.subscribeMessage((e=>{var i,n;const a=null!==(n=null===(i=null==e?void 0:e.event)||void 0===i?void 0:i.result)&&void 0!==n?n:null==e?void 0:e.result,o=this._parseTemplateResult(a);this._templateResults.get(t)!==o&&(this._templateResults.set(t,o),this.requestUpdate())}),{type:"render_template",template:e,variables:{},strict:!1});this._templateSubscriptions.set(t,i)}catch(t){console.error(`[UltraVehicleCard] Failed to subscribe to template: ${e}`,t)}}_parseTemplateResult(e){if("boolean"==typeof e)return e;if("number"==typeof e)return 0!==e;if("string"!=typeof e)return!1;const t=e.toLowerCase().trim();if(["true","on","yes","1"].includes(t))return!0;if(["false","off","no","0","unavailable","unknown","none",""].includes(t))return!1;const i=parseFloat(t);return isNaN(i)?(console.warn(`[UltraVehicleCard] Template evaluated to ambiguous string '${e}', interpreting as false.`),!1):0!==i}async _unsubscribeAllTemplates(){for(const[e,t]of this._templateSubscriptions.entries())try{const e=await t;await e()}catch(t){console.error(`[UltraVehicleCard] Error unsubscribing from template ${e}:`,t)}this._templateSubscriptions.clear()}_renderMapPopup(){if(!this._mapPopupData)return J``;const{latitude:e,longitude:t,title:i}=this._mapPopupData,n=this._getEntityForCoordinates(e,t);let a="",o="";if(o=this._formatCoordinates(e,t),n&&this.hass.states[n]){const e=this.hass.states[n],t=e.attributes;if(e.state&&!e.state.match(/^\d+\.\d+,\s*-?\d+\.\d+$/)&&e.state.length>5&&!e.state.match(/^(unavailable|unknown|none)$/i))a=e.state;else if(t.formatted_address)a=t.formatted_address;else{const e=[];t.Name&&e.push(String(t.Name)),t.Thoroughfare&&e.push(String(t.Thoroughfare)),t.Locality&&e.push(String(t.Locality)),t.Administrative_Area&&e.push(String(t.Administrative_Area)),t.Postal_Code&&e.push(String(t.Postal_Code)),t.Country&&e.push(String(t.Country)),e.length>0&&(a=e.join(", "))}}a||(a=o);const r=`https://www.google.com/maps?q=${e},${t}&z=15&output=embed`;return J`
      <div class="map-popup-overlay" @click=${this._closeMapPopup}>
        <div class="map-popup-content" @click=${e=>e.stopPropagation()}>
          <div class="map-popup-header">
            <div class="map-popup-title">
              <h3>${i}</h3>
              <div class="map-popup-address">${a}</div>
            </div>
            <ha-icon-button @click=${this._closeMapPopup}>
              <ha-icon icon="mdi:close"></ha-icon>
            </ha-icon-button>
          </div>

          <div style="height: 450px; width: 100%; position: relative;">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              style="border:0; position: relative; z-index: 1;"
              src="${r}"
              allowfullscreen
            ></iframe>
          </div>
          <div class="map-popup-footer">
            <a
              href="https://www.google.com/maps?q=${e},${t}"
              target="_blank"
              rel="noopener noreferrer"
            >
              View larger map
            </a>
          </div>
        </div>
      </div>
    `}_formatCoordinates(e,t){return`${Math.abs(e).toFixed(6)}° ${e>=0?"N":"S"}, ${Math.abs(t).toFixed(6)}° ${t>=0?"E":"W"}`}_getEntityForCoordinates(e,t){for(const i in this.hass.states){const n=this.hass.states[i].attributes;if(n.latitude===e&&n.longitude===t)return i;if(Array.isArray(n.Location)&&n.Location.length>=2&&Math.abs(parseFloat(n.Location[0])-e)<1e-4&&Math.abs(parseFloat(n.Location[1])-t)<1e-4)return i}return null}_isDarkMode(){if(this.shadowRoot){const e=getComputedStyle(document.documentElement).getPropertyValue("--card-background-color").trim();if(e){const t=this._hexToRgb(e);if(t)return.299*t.r+.587*t.g+.114*t.b<128}}return!1}_closeMapPopup(){this._mapPopupData=null}};var We,Ge,He;Fe([be({attribute:!1})],qe.prototype,"hass",void 0),Fe([be()],qe.prototype,"config",void 0),Fe([fe()],qe.prototype,"_mapPopupData",void 0),Fe([fe()],qe.prototype,"_iconActiveStates",void 0),Fe([fe()],qe.prototype,"_templateSubscriptions",void 0),Fe([fe()],qe.prototype,"_templateResults",void 0),qe=Fe([_e("ultra-vehicle-card")],qe),console.info(`%c Ultra Vehicle Card%c  ${Ce} `,"background-color: #4299D9;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #4299D9;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)"),(He=We||(We={})).language="language",He.system="system",He.comma_decimal="comma_decimal",He.decimal_comma="decimal_comma",He.space_comma="space_comma",He.none="none",function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ge||(Ge={})),new Set(["fan","input_boolean","light","switch","group","automation"]);var Ke=function(e,t,i,n){n=n||{},i=null==i?{}:i;var a=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return a.detail=i,e.dispatchEvent(a),a};new Set(["call-service","divider","section","weblink","cast","select"]);var Je=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let Ze=class extends he{static get styles(){return d`
      ha-entity-picker {
        width: 100%;
        display: block;
      }
    `}render(){return J`
      <ha-entity-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value||""}
        .entityFilter=${this.entityFilter}
        @value-changed=${this._valueChanged}
        allow-custom-entity
      ></ha-entity-picker>
    `}_valueChanged(e){const t=e.detail.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}};Je([be({attribute:!1})],Ze.prototype,"hass",void 0),Je([be()],Ze.prototype,"label",void 0),Je([be()],Ze.prototype,"value",void 0),Je([be()],Ze.prototype,"entityFilter",void 0),Ze=Je([_e("ultra-entity-picker")],Ze);var Ye=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let Qe=class extends he{constructor(){super(...arguments),this.showResetButton=!0}_getDisplayColor(e){var t;let i="string"==typeof e?e:void 0;if("object"==typeof e&&null!==e){const t=Object.keys(e);1===t.length&&"string"==typeof e[t[0]]?(i=e[t[0]],console.warn("ColorPicker received object, extracting value:",i)):(console.warn("ColorPicker received unexpected object:",e),i=void 0)}if(!i)return"#CCCCCC";if(i.startsWith("var(--"))try{const e=document.createElement("div");e.style.display="none",e.style.color=i,document.body.appendChild(e);const t=getComputedStyle(e).color;if(document.body.removeChild(e),t&&t.startsWith("rgb")){const e=t.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);if(e){const[t,i,n,a]=e;return this._rgbToHex(parseInt(i),parseInt(n),parseInt(a))}}return t||"#CCCCCC"}catch(e){console.warn("Error computing color from variable:",e);const n=null===(t=i.match(/var\(([^,)]+)/))||void 0===t?void 0:t[1];if(n){if(n.includes("--primary-text-color"))return"#FFFFFF";if(n.includes("--secondary-text-color"))return"#A0A0A0";if(n.includes("--primary-color"))return"#03A9F4";if(n.includes("--card-background-color"))return"#1C1C1C"}return"#CCCCCC"}return i}_rgbToHex(e,t,i){return"#"+[e,t,i].map((e=>{const t=e.toString(16);return 1===t.length?"0"+t:t})).join("")}_onColorChanged(e){let t=e.target.value;t||(t="#CCCCCC"),t!==this.value&&(this.value=t,this._fireChangeEvent())}_fireChangeEvent(){this.configValue?this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:{[this.configValue]:this.value}},bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this.value},bubbles:!0,composed:!0}))}_resetColor(){this.configValue&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:{[this.configValue]:void 0}},bubbles:!0,composed:!0}))}render(){const e=this._getDisplayColor(this.value);return J`
      ${this.label?J`<div class="color-picker-label">${this.label}</div>`:""}
      <div class="color-picker-row">
        <input
          type="color"
          .value=${e}
          @change=${this._onColorChanged}
          class="color-input"
          aria-label=${this.label||"Color picker"}
        />
        ${this.showResetButton?J`
              <ha-icon-button
                class="reset-button"
                @click=${this._resetColor}
                title="Reset to default color"
              >
                <ha-icon icon="mdi:refresh"></ha-icon>
              </ha-icon-button>
            `:""}
      </div>
    `}static get styles(){return d`
      :host {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .color-picker-label {
        font-weight: 500;
        margin-bottom: 8px;
        font-size: 14px;
      }

      .color-picker-row {
        display: flex;
        align-items: center;
        width: 100%;
        height: 40px;
        gap: 8px;
      }

      .color-input {
        flex: 1;
        height: 40px;
        border: 1px solid var(--divider-color);
        border-radius: 6px;
        background: none;
        cursor: pointer;
        padding: 0;
      }

      .reset-button {
        --mdc-icon-button-size: 36px;
        color: var(--secondary-text-color);
        opacity: 0.8;
        flex-shrink: 0;
      }

      .reset-button:hover {
        opacity: 1;
        color: var(--primary-color);
      }

      /* Special handling for Webkit browsers */
      .color-input::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      .color-input::-webkit-color-swatch {
        border: none;
        border-radius: 4px;
      }
    `}};Ye([be()],Qe.prototype,"value",void 0),Ye([be()],Qe.prototype,"label",void 0),Ye([be()],Qe.prototype,"configValue",void 0),Ye([be({type:Boolean})],Qe.prototype,"showResetButton",void 0),Qe=Ye([_e("color-picker")],Qe);const Xe=JSON.parse('{"editor":{"tabs":{"settings":"Settings","bars":"Bars","icons":"Icons","customize":"Customize","about":"About"},"settings_subtabs":{"general":"General","action_images":"Action Images"},"action_images":{"title":"Action Images Settings","description":"Configure images that will be displayed when specific entity states are met.","add_image":"Add Action Image","no_images":"No action images configured yet. Add one to get started.","entity_settings":"Entity Settings","entity_placeholder":"Select an entity","state_placeholder":"Enter state value","image_settings":"Image Settings","image_type":{"title":"Image Type","description":"Choose how to provide the image","upload":"Upload Image","url":"Image URL","entity":"Entity Image","none":"None"},"delete_confirm":"Are you sure you want to delete this action image?","actions":{"duplicate":"Duplicate","delete":"Delete","expand":"Expand","collapse":"Collapse","drag":"Drag to reorder"},"preview":{"no_entity":"No entity selected","any_state":"Any state","no_image":"No image"}},"card_settings":{"title":"Card Title","title_alignment":"Title Alignment","title_size":"Title Size","title_description":"Title displayed at the top of the card (optional)","title_alignment_description":"How to align the card title","title_size_description":"Size of the card title in pixels","format_entities":"Format Entity Values","format_entities_description":"Enable additional formatting of entity values (add commas, convert units, etc.)","show_units":"Show Units","show_units_description":"Display units of measurement alongside values"},"vehicle_info":{"title":"Vehicle Information","location":{"title":"Location Entity","description":"Select the entity that provides the current location of your vehicle.","show":"Show Location","show_description":"Display the vehicle location"},"mileage":{"title":"Mileage Entity","description":"Select the entity that represents the total mileage or odometer reading of your vehicle.","show":"Show Mileage","show_description":"Display the vehicle mileage"},"car_state":{"title":"Car State Entity","description":"Select the entity that represents the current state of your vehicle (e.g., parked, driving, charging).","show":"Show Car State","show_description":"Display the vehicle state"}},"images":{"common":{"url_description":"Enter the URL of the image"},"vehicle":{"title":"Vehicle Image","description":"Configure the primary image displayed for the vehicle.","type":"Vehicle Image Type","width":"Image Width","crop":"Image Crop","entity":"Image Entity","entity_description":"Entity that provides the image URL"}},"crop":{"title":"Image Crop","top":"Top","right":"Right","bottom":"Bottom","left":"Left","pixels":"px","help":"Enter pixel values (positive or negative) to adjust cropping and padding"},"alignment":{"left":"Left","center":"Center","right":"Right"},"common":{"choose_file":"Choose File","no_file_chosen":"No file chosen","entity":"Entity","width":"Width","width_description":"Width as percentage of the card","none":"None","default":"Default","upload":"Upload","url":"URL","url_description":"URL pointing to the image","reset":"Reset"},"bars":{"title":"Percentage Bars","description":"Add percentage bars to display values like fuel level, battery charge, or range. Each bar can display a main percentage value with optional left and right labels.","add":"Add New Bar","duplicate":"Duplicate Bar","delete":"Delete Bar","expand":"Expand Bar","collapse":"Collapse Bar","bar_prefix":"Bar","no_entity":"No entity selected","tabs":{"config":"Configuration","colors":"Colors","animation":"Animation"},"settings":{"header":"Bar Configuration","entity":"Main Entity","entity_description":"Entity that provides the primary value (0-100) for the progress bar","limit_entity":"Limit Entity","limit_entity_description":"Entity that shows a limit marker on the bar (e.g., charge limit)","limit_color":"Limit Indicator Color","limit_color_description":"Color of the limit indicator line","alignment":"Label Alignment","alignment_description":"How to align the labels on the progress bar","bar_size":"Bar Thickness","bar_size_description":"Size/thickness of the progress bar","bar_radius":"Bar Radius","bar_radius_description":"Shape of the progress bar corners","width":"Bar Width","width_description":"Width of the progress bar as a percentage of the available space. Use this to place multiple bars side by side."},"left_side":{"header":"Left Side","toggle_description":"Show or hide the left side label of the bar","title":"Left Title","title_description":"Optional label to display on the left side below the bar.","entity":"Left Entity","entity_description":"Entity whose value will be displayed on the left side of the bar.","alignment_description":"Controls how this label is aligned under the bar.","title_size":"Title Size","value_size":"Value Size","hidden_message":"Left side is hidden"},"right_side":{"header":"Right Side","toggle_description":"Show or hide the right side label of the bar","title":"Right Title","title_description":"Optional label to display on the right side below the bar.","entity":"Right Entity","entity_description":"Entity whose value will be displayed on the right side of the bar.","alignment_description":"Controls how this label is aligned under the bar.","title_size":"Title Size","value_size":"Value Size","hidden_message":"Right side is hidden"},"colors":{"header":"Colors","bar_color":"Bar Color","background_color":"Background Color","border_color":"Border Color","limit_indicator_color":"Limit Indicator Color","left_title_color":"Left Title Color","left_value_color":"Left Value Color","right_title_color":"Right Title Color","right_value_color":"Right Value Color","percentage_text_color":"Percentage Text Color","reset_color":"Reset to default color"},"gradient":{"header":"Gradient Mode","toggle":"Use Gradient","toggle_description":"Use a gradient for the progress bar instead of a solid color","display_mode":"Gradient Display Mode","display_mode_full":"Full","display_mode_value_based":"Value Based","display_mode_description":"Full: Show entire gradient. Value Based: Show gradient up to current value.","editor_header":"Gradient Editor","add_stop":"Add Stop","display_mode_cropped":"Cropped"},"animation":{"header":"Action Animation","description":"Add animations to the bar when a specific entity reaches a certain state. Perfect for showing charging status, alerting conditions, and more.","pro_tip":"Pro Tip: For \\"always on\\" animations, select an animation type but leave the entity and state fields empty. Try the \\"Bubbles\\" and \\"Fill\\" animations!","entity":"Animation Entity","entity_description":"Entity that triggers the animation when it matches the specified state","state":"Entity State","state_description":"When the entity state equals this value, the animation will be triggered","type":"Animation Type","type_description":"The animation effect to display when the entity state matches","select_entity_prompt":"Select an Entity and type in the state you would like to trigger the animation with (examples: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Thin","regular":"Regular","thick":"Thick","thiccc":"Extra Thick"},"bar_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"bar_alignments":{"space-between":"Space Between","flex-start":"Left","center":"Center","flex-end":"Right"},"bar_radius":{"round":"Round","square":"Square","rounded-square":"Rounded Square"},"animation_types":{"none":"None","charging-lines":"Charging (Diagonal Lines)","pulse":"Pulse","blinking":"Blinking","bouncing":"Bouncing","glow":"Glow","rainbow":"Rainbow","bubbles":"Bubbles","fill":"Fill"},"custom_bar_settings":{"title":"Custom Bar Settings","description":"Define custom configurations for individual bars.","name":"Bar Name","entity":"Entity","unit":"Unit","min":"Min Value","max":"Max Value","thresholds":"Thresholds","severity":"Severity Map"}},"icons":{"title":"Card Icons","description":"Add icon rows to display multiple icons in your card. Each row can be configured with different settings. Note: Icon rows and section order can be rearranged in the Customize tab.","add_row":"Add Icon Row","duplicate_row":"Duplicate Row","delete_row":"Delete Row","expand_row":"Expand Row","collapse_row":"Collapse Row","no_row":"No icon rows added","row_prefix":"Row","icon_prefix":"Icon","row_settings":{"header":"Row Settings","width":"Row Width","width_description":"Width of the row as a percentage of card width","alignment":"Row Alignment","alignment_description":"How to align the icons within this row","spacing":"Icon Spacing","spacing_description":"Amount of space between icons in this row"},"add_icon":"Add Icon","duplicate_icon":"Duplicate Icon","delete_icon":"Delete Icon","expand_icon":"Expand Icon","collapse_icon":"Collapse Icon","no_icon":"No icon selected","icon_settings":{"header":"Icon Settings","entity":"Entity","entity_description":"Entity to display with this icon","icon":"Icon","icon_description":"Select an icon or enter a custom one","name":"Name","name_description":"Custom name to display below the icon (defaults to entity name if not set)","show_name":"Show Name","show_name_description":"Display the name text below the icon","show_state":"Show State","show_state_description":"Display the entity state below the icon","show_units":"Show Units","show_units_description":"Include units when displaying the state","text_position":"Text Position","text_position_description":"Where to place the name and state text relative to the icon","click_action":"Click Action","service":"Service","service_description":"Service to call (e.g., light.turn_on)","service_data":"Service Data (JSON)","service_data_description":"JSON data to send with the service call","action":"Action (JSON/Service)","action_description":"Advanced action configuration (see docs)","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to (e.g., /lovelace/dashboard)","url":"URL","url_description":"URL to open in a new tab","automation_entity":"Automation Entity","automation_entity_description":"Automation to trigger when clicked"},"icon_appearance":{"header":"Icon Appearance","icon":"Icon Specific","general":"General Appearance","active":"Active State","inactive":"Inactive State","state_conditions":"State Conditions","advanced":"Advanced Settings","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Text Size","text_size_description":"Size of the name/state text in pixels","text_alignment":"Text Alignment","text_alignment_description":"How to align the text beneath the icon","icon_background":"Icon Background","icon_background_description":"Add a background shape behind the icon","text_appearance":"Text Appearance","container":{"header":"Container Appearance","vertical_alignment":"Vertical Alignment","vertical_alignment_description":"Align the icon and text vertically within the container.","width":"Container Width","width_description":"Set the width of the icon\'s container relative to the row.","background":"Container Background Shape","background_description":"Choose a background shape for the entire icon container.","container_background_color":"Container Background Color"},"show_when_active":"Show Icon When Active","show_when_active_description":"Only show this icon when it\'s in an active state","template_mode":"Template Mode","template_mode_description":"Use a template to determine the active/inactive state.","active_state":"Active State","active_state_description":"State string representing \\"active\\".","active_state_text":"Custom Active State Text","active_state_text_description":"Overrides the displayed text when the icon is active. Leave empty to use the actual state.","inactive_state":"Inactive State","inactive_state_description":"State string representing \\"inactive\\".","inactive_state_text":"Custom Inactive State Text","inactive_state_text_description":"Overrides the displayed text when the icon is inactive. Leave empty to use the actual state.","active_icon":"Active Icon","inactive_icon":"Inactive Icon","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","active_icon_color":"Active Icon Color","inactive_icon_color":"Inactive Icon Color","active_name_color":"Active Name Color","inactive_name_color":"Inactive Name Color","active_state_color":"Active State Color","inactive_state_color":"Inactive State Color","show_icon_active":"Show Icon When Active","show_icon_active_description":"Display the icon when the state is active.","show_icon_inactive":"Show Icon When Inactive","show_icon_inactive_description":"Display the icon when the state is inactive.","custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","action_description":"Action to perform when the icon is clicked.","show_name_active":"Show Name When Active","show_name_active_description":"Display the name when the state is active.","show_name_inactive":"Show Name When Inactive","show_name_inactive_description":"Display the name when the state is inactive.","show_state_active":"Show State When Active","show_state_active_description":"Display the state when the state is active.","show_state_inactive":"Show State When Inactive","show_state_inactive_description":"Display the state when the state is inactive."},"tabs":{"general":"General","appearance":"Appearance","states":"States","active_state":"Active State","inactive_state":"Inactive State"},"alignments":{"flex-start":"Left","center":"Center","flex-end":"Right","space-between":"Space Between","space-around":"Space Around","space-evenly":"Space Evenly"},"vertical_alignments":{"flex-start":"Top","center":"Middle","flex-end":"Bottom"},"spacing":{"none":"None","small":"Small","medium":"Medium","large":"Large"},"text_positions":{"below":"Below Icon","beside":"Beside Icon","none":"No Text","top":"Top","left":"Left","right":"Right"},"reset":{"size":"Reset to default size","color":"Reset to default color","all":"Reset to defaults"},"click_actions":{"toggle":"Toggle Entity","more-info":"Show More Info","navigate":"Navigate Path","url":"Open URL","call-service":"Call Service","perform-action":"Perform Action","location-map":"Show Location Map","assist":"Voice Assistant","trigger":"Trigger","none":"No Action","descriptions":{"toggle":"Toggles the state of the entity.","more-info":"Opens the entity\'s more-info dialog.","navigate":"Navigates to the specified Lovelace path.","url":"Opens the specified URL in a new tab.","call-service":"Calls the specified Home Assistant service.","perform-action":"Executes a custom action (see documentation).","location-map":"Shows the entity\'s location on a map.","assist":"Opens the Home Assistant voice assistant.","none":"No action will be performed.","trigger":"Triggers or toggles the entity (automation, script, button, lock, etc.)."}},"backgrounds":{"none":"None","circle":"Circle","square":"Square","rounded_square":"Rounded Square"},"container_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"row_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"}},"customize":{"layout":{"title":"Layout Style","description":"Choose between single column or two-column layout for the card","header":"Layout Settings"},"layout_types":{"single":"Single Column","double":"Two Columns"},"sections":{"header":"Card Sections","arrangement_header":"Section Arrangement","arrangement_desc_base":"Drag and drop sections to arrange their order on the card.","arrangement_desc_single_extra":"All sections will display in a single column.","arrangement_desc_double_extra":"In two-column layout, you can place all sections in either column."},"section_labels":{"title":"Title","image":"Vehicle Image","info":"Vehicle Info"},"actions":{"collapse_margins":"Collapse Margins","expand_margins":"Expand Margins"},"margins":{"top":"Top Margin","bottom":"Bottom Margin"},"columns":{"left":"Left Column","right":"Right Column","empty":"Drop sections here"},"css":{"header":"Global CSS","description":"Enter custom CSS rules here to override the default card styles. These rules will be applied directly to the card. Use with caution.","label":"Custom CSS","input_description":"Enter your custom CSS rules here."}},"backgrounds":{"none":"None","circle":"Circle","square":"Square","rounded_square":"Rounded Square"},"container_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"row_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Developed by","discord_button":"Join Our Discord","github_button":"Check Out Our Github","docs_button":"Visit Our Documentation","support_title":"Support Ultra Vehicle Card","support_para":"Your generous tips fuel the development of amazing features for this card! Without support from users like you, continued innovation wouldn\'t be possible.","donate_button":"LEAVE A TIP (PAYPAL)"},"custom_icons":{"title":"Custom Icons","description":"Define custom icons for different states.","icon_entity":"Icon Entity","default_icon":"Default Icon","state_icons":"State Icons","state":"State","icon":"Icon"},"custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","image_settings":{"title":"Image Settings","description":"Configure the main image appearance.","type":"Image Type","width":"Image Width","crop":"Image Crop","entity":"Image Entity","entity_description":"Entity that provides the image URL"}}');var et=a.t(Xe,2);const tt=JSON.parse('{"editor":{"tabs":{"settings":"Einstellungen","bars":"Balken","icons":"Symbole","customize":"Anpassen","about":"Über"},"settings_subtabs":{"general":"Allgemein","action_images":"Aktionsbilder"},"action_images":{"title":"Aktionsbilder Einstellungen","description":"Konfiguriere Bilder, die angezeigt werden, wenn bestimmte Entitätszustände erfüllt sind.","add_image":"Aktionsbild hinzufügen","no_images":"Noch keine Aktionsbilder konfiguriert. Füge eines hinzu, um zu beginnen.","entity_settings":"Entitätseinstellungen","entity_placeholder":"Wähle eine Entität","state_placeholder":"Zustandswert eingeben","image_settings":"Bildeinstellungen","image_type":{"title":"Bildtyp","description":"Wähle, wie das Bild bereitgestellt werden soll","upload":"Bild hochladen","url":"Bild-URL","entity":"Entitätsbild","none":"Keines"},"delete_confirm":"Möchtest du dieses Aktionsbild wirklich löschen?","actions":{"duplicate":"Duplizieren","delete":"Löschen","expand":"Erweitern","collapse":"Einklappen","drag":"Ziehen zum Neuordnen"},"preview":{"no_entity":"Keine Entität ausgewählt","any_state":"Beliebiger Zustand","no_image":"Kein Bild"}},"card_settings":{"title":"Kartentitel","title_alignment":"Titelausrichtung","title_size":"Titelgröße","title_description":"Titel, der oben auf der Karte angezeigt wird (optional)","title_alignment_description":"Wie der Kartentitel ausgerichtet werden soll","title_size_description":"Größe des Kartentitels in Pixeln","format_entities":"Entitätswerte formatieren","format_entities_description":"Aktivieren Sie zusätzliche Formatierung von Entitätswerten (Kommas hinzufügen, Einheiten konvertieren, etc.)","show_units":"Einheiten anzeigen","show_units_description":"Maßeinheiten neben den Werten anzeigen"},"vehicle_info":{"title":"Fahrzeuginformationen","location":{"title":"Standort-Entität","description":"Wählen Sie die Entität, die den aktuellen Standort Ihres Fahrzeugs angibt.","show":"Standort anzeigen","show_description":"Fahrzeugstandort anzeigen"},"mileage":{"title":"Kilometerstand-Entität","description":"Wählen Sie die Entität, die den Gesamtkilometerstand oder Tachostand Ihres Fahrzeugs anzeigt.","show":"Kilometerstand anzeigen","show_description":"Fahrzeugkilometerstand anzeigen"},"car_state":{"title":"Fahrzeugstatus-Entität","description":"Wählen Sie die Entität, die den aktuellen Status Ihres Fahrzeugs anzeigt (z.B. geparkt, fahrend, ladend).","show":"Fahrzeugstatus anzeigen","show_description":"Fahrzeugstatus anzeigen"}},"images":{"common":{"url_description":"Geben Sie die URL des Bildes ein"},"vehicle":{"title":"Fahrzeugbild","description":"Konfigurieren Sie das primäre Bild für das Fahrzeug.","type":"Fahrzeugbildtyp","width":"Bildbreite","crop":"Bildzuschnitt","entity":"Bild-Entität","entity_description":"Entität, die die Bild-URL bereitstellt"},"action":{"title":"Aktionsbild","description":"Optional können Sie ein anderes Bild anzeigen, wenn eine bestimmte Entität einen bestimmten Status erreicht (z.B. Ladebild anzeigen, wenn das Auto eingesteckt ist).","type":"Aktionsbildtyp","width":"Bildbreite","crop":"Bildzuschnitt","entity":"Aktions-Entität","entity_description":"Entität, die das Aktionsbild auslöst","state":"Aktionsstatus","state_description":"Statuswert, der das Aktionsbild auslöst"},"action_images":{"title":"Action Image","description":"Optionally, display a different image when a specific entity reaches a certain state (e.g., show a charging image when the car is plugged in).","type":"Action Image Type","width":"Image Width","crop":"Image Crop","entity":"Action Entity","entity_description":"Entity that triggers the action image","state":"Action State","state_description":"State value that triggers the action image","image_type":{"title":"Image Type","description":"Select the type of image to display","upload":"Upload","url":"URL","entity":"Entity","file":"File"},"image_url":{"title":"Image URL","description":"Enter the URL of the image to display","url":"URL","url_description":"URL pointing to the image","reset":"Reset"},"automation_entity":"Automation Entität","automation_entity_description":"Automation, die beim Klicken ausgelöst werden soll"}},"crop":{"title":"Bildzuschnitt","top":"Oben","right":"Rechts","bottom":"Unten","left":"Links","pixels":"px","help":"Geben Sie Pixelwerte (positiv oder negativ) ein, um den Zuschnitt und die Polsterung anzupassen"},"bars":{"title":"Prozentbalken","description":"Fügen Sie Prozentbalken hinzu, um Werte wie Kraftstoffstand, Batterieladung oder Reichweite anzuzeigen. Jeder Balken kann einen Hauptprozentwert mit optionalen linken und rechten Beschriftungen anzeigen.","add":"Neuen Balken hinzufügen","duplicate":"Balken duplizieren","delete":"Balken löschen","expand":"Balken erweitern","collapse":"Balken einklappen","bar_prefix":"Balken","no_entity":"Keine Entität ausgewählt","tabs":{"config":"Konfiguration","colors":"Farben","animation":"Animation"},"settings":{"header":"Balkenkonfiguration","entity":"Balken-Prozent-Entität","entity_description":"Wählen Sie eine Entität, die einen Prozentwert (0-100) zurückgibt. Dies steuert die Füllung des Balkens.","limit_entity":"Limit-Entität (optional)","limit_entity_description":"Optional: Fügen Sie eine vertikale Indikatorlinie auf dem Balken hinzu (z.B. Ladelimit für EV-Batterie).","limit_color":"Limit-Indikator Farbe","limit_color_description":"Farbe der vertikalen Linie, die die Limitposition auf dem Balken anzeigt. Änderungen hier erzwingen eine Aktualisierung der Karte.","bar_size":"Balkengröße","bar_size_description":"Legen Sie die Dicke/Höhe des Fortschrittsbalkens fest.","width":"Balkenbreite","width_description":"Legen Sie die Breite des Balkens als Prozentsatz der Kartenbreite fest.","alignment":"Beschriftungsausrichtung","alignment_description":"Wie die linken und rechten Beschriftungen zueinander ausgerichtet werden.","bar_radius":"Balkenradius","bar_radius_description":"Form der Ecken des Fortschrittsbalkens"},"left_side":{"header":"Linke Seite","toggle_description":"Linke Seite der Balkenbeschriftung ein-/ausblenden","title":"Linker Titel","title_description":"Optionale Beschriftung, die auf der linken Seite unter dem Balken angezeigt wird.","entity":"Linke Entität","entity_description":"Entität, deren Wert auf der linken Seite des Balkens angezeigt wird.","alignment_description":"Steuert, wie diese Beschriftung unter dem Balken ausgerichtet wird.","title_size":"Titelgröße","value_size":"Wertgröße","hidden_message":"Linke Seite ist ausgeblendet"},"right_side":{"header":"Rechte Seite","toggle_description":"Rechte Seite der Balkenbeschriftung ein-/ausblenden","title":"Rechter Titel","title_description":"Optionale Beschriftung, die auf der rechten Seite unter dem Balken angezeigt wird.","entity":"Rechte Entität","entity_description":"Entität, deren Wert auf der rechten Seite des Balkens angezeigt wird.","alignment_description":"Steuert, wie diese Beschriftung unter dem Balken ausgerichtet wird.","title_size":"Titelgröße","value_size":"Wertgröße","hidden_message":"Rechte Seite ist ausgeblendet"},"colors":{"header":"Farben","bar_color":"Balkenfarbe","background_color":"Hintergrundfarbe","border_color":"Randfarbe","limit_indicator_color":"Limit-Indikator Farbe","left_title_color":"Linker Titel Farbe","left_value_color":"Linker Wert Farbe","right_title_color":"Rechter Titel Farbe","right_value_color":"Rechter Wert Farbe","percentage_text_color":"Prozenttext Farbe","reset_color":"Auf Standardfarbe zurücksetzen"},"gradient":{"header":"Farbverlauf Modus","toggle":"Farbverlauf verwenden","toggle_description":"Verwenden Sie einen Farbverlauf für den Fortschrittsbalken anstelle einer Vollfarbe","display_mode":"Farbverlauf Anzeigemodus","display_mode_full":"Voll","display_mode_value_based":"Wertbasiert","display_mode_description":"Voll: Zeigt den gesamten Farbverlauf. Wertbasiert: Zeigt den Farbverlauf bis zum aktuellen Wert.","editor_header":"Farbverlauf Editor","add_stop":"Stopp hinzufügen","display_mode_cropped":"Gekürzt"},"animation":{"header":"Aktionsanimation","description":"Fügen Sie Animationen zum Balken hinzu, wenn eine bestimmte Entität einen bestimmten Zustand erreicht. Perfekt zur Anzeige des Ladestatus, von Warnbedingungen und mehr.","pro_tip":"Profi-Tipp: Für \\"immer aktive\\" Animationen wählen Sie einen Animationstyp, lassen aber die Entitäts- und Zustandsfelder leer. Probieren Sie die Animationen \\"Bubbles\\" und \\"Fill\\" aus!","entity":"Animations-Entität","entity_description":"Entität, die die Animation auslöst, wenn sie dem angegebenen Zustand entspricht","state":"Entitätszustand","state_description":"Wenn der Entitätszustand diesem Wert entspricht, wird die Animation ausgelöst","type":"Animationstyp","type_description":"Der Animationseffekt, der angezeigt wird, wenn der Entitätszustand übereinstimmt","select_entity_prompt":"Wählen Sie eine Entität aus und geben Sie den Zustand ein, der die Animation auslösen soll (Beispiele: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Dünn","regular":"Normal","thick":"Dick","thiccc":"Extra Dick"},"bar_widths":{"25":"25% Breite","50":"50% Breite","75":"75% Breite","100":"100% (Volle Breite)"},"bar_alignments":{"space-between":"Gleichmäßig verteilt","flex-start":"Links","center":"Zentriert","flex-end":"Rechts"},"animation_types":{"none":"Keine","charging-lines":"Laden (Diagonale Linien)","pulse":"Pulsieren","blinking":"Blinken","bouncing":"Hüpfen","glow":"Leuchten","rainbow":"Regenbogen","bubbles":"Blasen","fill":"Füllen"},"bar_radius":{"round":"Rund","square":"Quadratisch","rounded-square":"Abgerundetes Quadrat"},"custom_bar_settings":{"title":"Benutzerdefinierte Balkeneinstellungen","description":"Definieren Sie benutzerdefinierte Konfigurationen für einzelne Balken.","name":"Balkenname","entity":"Entität","unit":"Einheit","min":"Minimaler Wert","max":"Maximaler Wert","thresholds":"Schwellenwerte","severity":"Schweregrade"}},"icons":{"title":"Kartensymbole","description":"Fügen Sie Symbolzeilen hinzu, um mehrere Symbole in Ihrer Karte anzuzeigen. Jede Zeile kann mit verschiedenen Einstellungen konfiguriert werden. Hinweis: Symbolzeilen und Abschnittsreihenfolge können im Tab Anpassen neu angeordnet werden.","add_row":"Symbolzeile hinzufügen","duplicate_row":"Zeile duplizieren","delete_row":"Zeile löschen","expand_row":"Zeile erweitern","collapse_row":"Zeile einklappen","no_row":"Keine Symbolzeilen hinzugefügt","row_prefix":"Zeile","icon_prefix":"Symbol","row_settings":{"header":"Zeileneinstellungen","width":"Zeilenbreite","width_description":"Breite der Zeile als Prozentsatz der Kartenbreite","alignment":"Zeilenausrichtung","alignment_description":"Wie die Symbole innerhalb dieser Zeile ausgerichtet werden","spacing":"Symbolabstand","spacing_description":"Abstand zwischen den Symbolen in dieser Zeile"},"add_icon":"Symbol hinzufügen","duplicate_icon":"Symbol duplizieren","delete_icon":"Symbol löschen","expand_icon":"Symbol erweitern","collapse_icon":"Symbol einklappen","no_icon":"Kein Symbol ausgewählt","icon_settings":{"header":"Symboleinstellungen","entity":"Entität","entity_description":"Entität, die mit diesem Symbol angezeigt wird","icon":"Symbol","icon_description":"Wählen Sie ein Symbol aus oder geben Sie ein benutzerdefiniertes ein","name":"Name","name_description":"Benutzerdefinierter Name, der unter dem Symbol angezeigt wird (standardmäßig der Entitätsname, wenn nicht festgelegt)","show_name":"Namen anzeigen","show_name_description":"Den Namenstext unter dem Symbol anzeigen","show_state":"Status anzeigen","show_state_description":"Den Entitätsstatus unter dem Symbol anzeigen","show_units":"Einheiten anzeigen","show_units_description":"Einheiten bei der Anzeige des Status einbeziehen","text_position":"Text Position","text_position_description":"Wo der Name und Statustext relativ zum Symbol platziert werden soll","click_action":"Klickaktion","service":"Dienst","service_description":"Aufzurufender Dienst (z.B. light.turn_on)","service_data":"Dienstdaten (JSON)","service_data_description":"JSON-Daten, die mit dem Dienstaufruf gesendet werden","action":"Aktion (JSON/Dienst)","action_description":"Erweiterte Aktionskonfiguration (siehe Doku)","navigation_path":"Navigationspfad","navigation_path_description":"Pfad, zu dem navigiert werden soll (z.B. /lovelace/dashboard)","url":"URL","url_description":"URL, die in einem neuen Tab geöffnet werden soll","automation_entity":"Automatisierungs-Entität","automation_entity_description":"Automatisierung, die beim Klicken ausgelöst werden soll"},"icon_appearance":{"header":"Symbol-Erscheinungsbild","icon":"Symbolspezifisch","general":"Allgemeines Erscheinungsbild","active":"Aktiver Zustand","inactive":"Inaktiver Zustand","state_conditions":"Statusbedingungen","advanced":"Erweiterte Einstellungen","icon_size":"Symbolgröße","icon_size_description":"Größe des Symbols in Pixeln","text_size":"Textgröße","text_size_description":"Größe des Namens-/Statustexts in Pixeln","text_alignment":"Textausrichtung","text_alignment_description":"Wie der Text unter dem Symbol ausgerichtet werden soll","icon_background":"Symbol-Hintergrund","icon_background_description":"Fügt eine Hintergrundform hinter dem Symbol hinzu","text_appearance":"Text-Erscheinungsbild","container":{"header":"Container-Erscheinungsbild","vertical_alignment":"Vertikale Ausrichtung","vertical_alignment_description":"Richtet das Symbol und den Text vertikal im Container aus.","width":"Containerbreite","width_description":"Legt die Breite des Symbolcontainers relativ zur Zeile fest.","background":"Container-Hintergrundform","background_description":"Wählt eine Hintergrundform für den gesamten Symbolcontainer.","container_background_color":"Container-Hintergrundfarbe"},"show_when_active":"Symbol nur anzeigen, wenn aktiv","show_when_active_description":"Dieses Symbol nur anzeigen, wenn es sich in einem aktiven Zustand befindet","template_mode":"Vorlagenmodus","template_mode_description":"Verwende eine Vorlage, um den aktiven/inaktiven Zustand zu bestimmen.","active_template":"Aktive Vorlage","active_template_description":"Vorlage, die als wahr ausgewertet wird, wenn das Symbol aktiv sein soll.","active_state":"Aktiver Zustand","active_state_description":"Zustandszeichenfolge, die \\"aktiv\\" darstellt.","active_state_text":"Benutzerdefinierter Text für aktiven Zustand","active_state_text_description":"Überschreibt den angezeigten Text, wenn das Symbol aktiv ist. Leer lassen, um den tatsächlichen Zustand zu verwenden.","inactive_template":"Inaktive Vorlage","inactive_template_description":"Vorlage, die als wahr ausgewertet wird, wenn das Symbol inaktiv sein soll.","inactive_state":"Inaktiver Zustand","inactive_state_description":"Zustandszeichenfolge, die \\"inaktiv\\" darstellt.","inactive_state_text":"Benutzerdefinierter Text für inaktiven Zustand","inactive_state_text_description":"Überschreibt den angezeigten Text, wenn das Symbol inaktiv ist. Leer lassen, um den tatsächlichen Zustand zu verwenden.","active_icon":"Aktives Icon","inactive_icon":"Inaktives Icon","active_icon_color":"Farbe des aktiven Icons","inactive_icon_color":"Farbe des inaktiven Icons","active_name_color":"Farbe des aktiven Namens","inactive_name_color":"Farbe des inaktiven Namens","active_state_color":"Farbe des aktiven Zustands","inactive_state_color":"Farbe des inaktiven Zustands","show_icon_active":"Icon anzeigen, wenn aktiv","show_icon_active_description":"Zeigt das Symbol an, wenn der Zustand aktiv ist.","show_icon_inactive":"Symbol bei Inaktivität anzeigen","show_icon_inactive_description":"Zeigt das Symbol an, wenn der Zustand inaktiv ist.","custom_active_state_text":"Benutzerdefinierter Aktiver Zustandstext","custom_inactive_state_text":"Benutzerdefinierter Inaktiver Zustandstext","action_description":"Aktion, die ausgeführt wird, wenn auf das Symbol geklickt wird.","show_name_active":"Namen anzeigen, wenn aktiv","show_name_active_description":"Zeigt den Namen an, wenn der Zustand aktiv ist.","show_name_inactive":"Namen anzeigen, wenn inaktiv","show_name_inactive_description":"Zeigt den Namen an, wenn der Zustand inaktiv ist.","show_state_active":"Zustand anzeigen, wenn aktiv","show_state_active_description":"Zeigt den Zustand an, wenn der Zustand aktiv ist.","show_state_inactive":"Zustand anzeigen, wenn inaktiv","show_state_inactive_description":"Zeigt den Zustand an, wenn der Zustand inaktiv ist."},"tabs":{"general":"Allgemein","appearance":"Erscheinungsbild","states":"Zustände","active_state":"Aktiver Zustand","inactive_state":"Inaktiver Zustand"},"alignments":{"flex-start":"Links","center":"Zentriert","flex-end":"Rechts","space-between":"Gleichmäßig verteilt","space-around":"Rundherum verteilt","space-evenly":"Gleichmäßig verteilt (Gleichmäßig)"},"vertical_alignments":{"flex-start":"Oben","center":"Mitte","flex-end":"Unten"},"spacing":{"none":"Kein","small":"Klein","medium":"Mittel","large":"Groß"},"text_positions":{"below":"Unter dem Symbol","beside":"Neben dem Symbol","none":"Kein Text","top":"Oben","left":"Links","right":"Rechts"},"reset":{"size":"Auf Standardgröße zurücksetzen","color":"Auf Standardfarbe zurücksetzen","all":"Auf Standardwerte zurücksetzen"},"click_actions":{"toggle":"Entität umschalten","more-info":"Mehr Informationen anzeigen","navigate":"Navigiere zu Pfad","url":"URL öffnen","call-service":"Dienst aufrufen","perform-action":"Aktion ausführen","location-map":"Standortkarte anzeigen","assist":"Sprachassistent","trigger":"Auslösen","none":"Keine Aktion","descriptions":{"toggle":"Schaltet den Zustand der Entität um.","more-info":"Öffnet den Mehr-Info-Dialog der Entität.","navigate":"Navigiert zum angegebenen Lovelace-Pfad.","url":"Öffnet die angegebene URL in einem neuen Tab.","call-service":"Ruft den angegebenen Home Assistant-Dienst auf.","perform-action":"Führt eine benutzerdefinierte Aktion aus (siehe Dokumentation).","location-map":"Zeigt den Standort der Entität auf einer Karte an.","assist":"Öffnet den Home Assistant Sprachassistenten.","trigger":"Löst die Entität aus (Automation, Skript, Button, etc.).","none":"Es wird keine Aktion ausgeführt."}},"backgrounds":{"none":"Keine","circle":"Kreis","square":"Quadrat","rounded_square":"Abgerundetes Quadrat"},"container_widths":{"25":"25% Breite","50":"50% Breite","75":"75% Breite","100":"100% (Volle Breite)"},"row_widths":{"25":"25% Breite","50":"50% Breite","75":"75% Breite","100":"100% (Volle Breite)"}},"customize":{"layout":{"title":"Layout-Stil","description":"Wählen Sie zwischen einspaltigen oder zweispaltigen Layout für die Karte","header":"Layout-Einstellungen"},"layout_types":{"single":"Einzelne Spalte","double":"Zwei Spalten"},"sections":{"header":"Kartenabschnitte","arrangement_header":"Abschnittsanordnung","arrangement_desc_base":"Ziehen Sie Abschnitte per Drag & Drop, um ihre Reihenfolge auf der Karte anzuordnen.","arrangement_desc_single_extra":"Alle Abschnitte werden in einer einzigen Spalte angezeigt.","arrangement_desc_double_extra":"Im zweispaltigen Layout können Sie alle Abschnitte in jeder Spalte platzieren."},"section_labels":{"title":"Titel","image":"Fahrzeugbild","info":"Fahrzeuginfo"},"actions":{"collapse_margins":"Abstände einklappen","expand_margins":"Abstände erweitern"},"margins":{"top":"Oberer Abstand","bottom":"Unterer Abstand"},"columns":{"left":"Linke Spalte","right":"Rechte Spalte","empty":"Abschnitte hier ablegen"},"css":{"header":"Globales CSS","description":"Geben Sie hier benutzerdefinierte CSS-Regeln ein, um die Standardkartenstile zu überschreiben. Diese Regeln werden direkt auf die Karte angewendet. Mit Vorsicht verwenden.","label":"Benutzerdefiniertes CSS","input_description":"Geben Sie hier Ihre benutzerdefinierten CSS-Regeln ein."}},"alignment":{"left":"Links","center":"Zentriert","right":"Rechts"},"common":{"choose_file":"Datei auswählen","no_file_chosen":"Keine Datei ausgewählt","entity":"Entität","width":"Breite","width_description":"Breite als Prozentsatz der Karte","none":"Keine","default":"Standard","upload":"Hochladen","url":"URL","url_description":"URL, die auf das Bild verweist","reset":"Zurücksetzen"},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Entwickelt von","discord_button":"Tritt unserem Discord bei","github_button":"Schau dir unser Github an","docs_button":"Besuche unsere Dokumentation","support_title":"Unterstütze Ultra Vehicle Card","support_para":"Deine großzügigen Trinkgelder fördern die Entwicklung großartiger Funktionen für diese Karte! Ohne Unterstützung von Benutzern wie dir wäre kontinuierliche Innovation nicht möglich.","donate_button":"TRINKGELD GEBEN (PAYPAL)"},"backgrounds":{"none":"Keine","circle":"Kreis","square":"Quadrat","rounded_square":"Abgerundetes Quadrat"},"container_widths":{"25":"25% Breite","50":"50% Breite","75":"75% Breite","100":"100% (Volle Breite)"},"row_widths":{"25":"25% Breite","50":"50% Breite","75":"75% Breite","100":"100% (Volle Breite)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Entwickelt von","discord_button":"Tritt unserem Discord bei","github_button":"Schau dir unser Github an","docs_button":"Besuche unsere Dokumentation","support_title":"Unterstütze Ultra Vehicle Card","support_para":"Deine großzügigen Trinkgelder fördern die Entwicklung großartiger Funktionen für diese Karte! Ohne Unterstützung von Benutzern wie dir wäre kontinuierliche Innovation nicht möglich.","donate_button":"TRINKGELD GEBEN (PAYPAL)"},"custom_icons":{"title":"Benutzerdefinierte Icons","description":"Definiere benutzerdefinierte Icons für verschiedene Zustände.","icon_entity":"Icon-Entität","default_icon":"Standard-Icon","state_icons":"Zustands-Icons","state":"Zustand","icon":"Icon"},"custom_active_state_text":"Benutzerdefinierter Aktiver Zustandstext","custom_inactive_state_text":"Benutzerdefinierter Inaktiver Zustandstext","image_settings":{"title":"Bildeinstellungen","description":"Konfigurieren Sie das Erscheinungsbild des Hauptbildes.","type":"Bildtyp","width":"Bildbreite","crop":"Bildschnitt","entity":"Bild-Entität","entity_description":"Entität, die die Bild-URL bereitstellt"}}');var it=a.t(tt,2);const nt=JSON.parse('{"editor":{"tabs":{"settings":"Configuración","bars":"Barras","icons":"Iconos","customize":"Personalizar","about":"Acerca de"},"settings_subtabs":{"general":"General","action_images":"Imágenes de Acción"},"action_images":{"title":"Configuración de Imágenes de Acción","description":"Configura imágenes que se mostrarán cuando se cumplan estados específicos de entidades.","add_image":"Añadir Imagen de Acción","no_images":"Aún no hay imágenes de acción configuradas. Añade una para comenzar.","entity_settings":"Configuración de Entidad","entity_placeholder":"Selecciona una entidad","state_placeholder":"Ingresa el valor del estado","image_settings":"Configuración de Imagen","image_type":{"title":"Tipo de Imagen","description":"Elige cómo proporcionar la imagen","upload":"Subir Imagen","url":"URL de Imagen","entity":"Imagen de Entidad","none":"Ninguna"},"delete_confirm":"¿Estás seguro de que deseas eliminar esta imagen de acción?","actions":{"duplicate":"Duplicar","delete":"Eliminar","expand":"Expandir","collapse":"Colapsar","drag":"Arrastrar para reordenar"},"preview":{"no_entity":"Ninguna entidad seleccionada","any_state":"Cualquier estado","no_image":"Sin imagen"}},"card_settings":{"title":"Título de la Tarjeta","title_alignment":"Alineación del Título","title_size":"Tamaño del Título","title_description":"Título mostrado en la parte superior de la tarjeta (opcional)","title_alignment_description":"Cómo se alinea el título de la tarjeta","title_size_description":"Tamaño del título de la tarjeta en píxeles","format_entities":"Formatear Valores de Entidades","format_entities_description":"Activa el formateo adicional de valores de entidades (añade comas, convierte unidades, etc.)","show_units":"Mostrar Unidades","show_units_description":"Muestra las unidades junto a los valores"},"vehicle_info":{"title":"Información del Vehículo","location":{"title":"Entidad de Ubicación","description":"Selecciona la entidad que muestra la ubicación actual del vehículo.","show":"Mostrar Ubicación","show_description":"Muestra la ubicación del vehículo"},"mileage":{"title":"Entidad de Kilometraje","description":"Selecciona la entidad que representa el kilometraje total o el cuentakilómetros del vehículo.","show":"Mostrar Kilometraje","show_description":"Muestra el kilometraje del vehículo"},"car_state":{"title":"Entidad de Estado del Vehículo","description":"Selecciona la entidad que representa el estado actual del vehículo (ej. estacionado, en movimiento, cargando).","show":"Mostrar Estado del Vehículo","show_description":"Muestra el estado del vehículo"}},"images":{"common":{"url_description":"Introduce la URL de la imagen"},"vehicle":{"title":"Imagen del Vehículo","description":"Configura la imagen principal que se muestra para el vehículo.","type":"Tipo de Imagen del Vehículo","width":"Ancho de la Imagen","crop":"Recortar Imagen","entity":"Entidad de Imagen","entity_description":"Entidad que proporciona la URL de la imagen"}},"crop":{"title":"Recorte de Imagen","top":"Superior","right":"Derecho","bottom":"Inferior","left":"Izquierdo","pixels":"px","help":"Ingresa valores en píxeles (positivos o negativos) para ajustar el recorte y el relleno"},"alignment":{"left":"Izquierda","center":"Centro","right":"Derecha"},"common":{"choose_file":"Elegir Archivo","no_file_chosen":"Ningún archivo seleccionado","entity":"Entidad","width":"Ancho","width_description":"Ancho en porcentaje de la tarjeta","none":"Ninguno","default":"Predeterminado","upload":"Subir","url":"URL","url_description":"URL que apunta a la imagen","reset":"Restablecer"},"bars":{"title":"Barras de Porcentaje","description":"Añade barras de porcentaje para mostrar valores como nivel de combustible, carga de batería o autonomía. Cada barra puede mostrar un valor porcentual principal con etiquetas opcionales a la izquierda y derecha.","add":"Añadir Nueva Barra","duplicate":"Duplicar Barra","delete":"Eliminar Barra","expand":"Expandir Barra","collapse":"Colapsar Barra","bar_prefix":"Barra","no_entity":"Ninguna entidad seleccionada","tabs":{"config":"Configuración","colors":"Colores","animation":"Animación"},"settings":{"header":"Configuración de Barra","entity":"Entidad de Porcentaje de Barra","entity_description":"Selecciona una entidad que devuelva un valor porcentual (0-100). Esto controla el nivel de llenado de la barra.","limit_entity":"Entidad de Valor Límite (opcional)","limit_entity_description":"Opcional: Añade una línea indicadora vertical en la barra (ej. límite de carga para batería de VE).","limit_color":"Color de Indicador de Límite","limit_color_description":"Color de la línea vertical que indica la posición del límite en la barra. Los cambios forzarán una actualización de la tarjeta.","bar_size":"Tamaño de Barra","bar_size_description":"Define el grosor/altura de la barra de progreso.","width":"Ancho de Barra","width_description":"Define el ancho de la barra en porcentaje del ancho de la tarjeta.","alignment":"Alineación de Etiqueta","alignment_description":"Cómo se alinean las etiquetas izquierda y derecha entre sí.","bar_radius":"Radio de Barra","bar_radius_description":"Forma de las esquinas de la barra de progreso"},"left_side":{"header":"Lado Izquierdo","toggle_description":"Mostrar u ocultar el lado izquierdo de la etiqueta de barra","title":"Título Izquierdo","title_description":"Etiqueta opcional mostrada en el lado izquierdo debajo de la barra.","entity":"Entidad Izquierda","entity_description":"Entidad cuyo valor se muestra en el lado izquierdo de la barra.","alignment_description":"Controla cómo se alinea esta etiqueta debajo de la barra.","title_size":"Tamaño del Título","value_size":"Tamaño del Valor","hidden_message":"El lado izquierdo está oculto"},"right_side":{"header":"Lado Derecho","toggle_description":"Mostrar u ocultar el lado derecho de la etiqueta de barra","title":"Título Derecho","title_description":"Etiqueta opcional mostrada en el lado derecho debajo de la barra.","entity":"Entidad Derecha","entity_description":"Entidad cuyo valor se muestra en el lado derecho de la barra.","alignment_description":"Controla cómo se alinea esta etiqueta debajo de la barra.","title_size":"Tamaño del Título","value_size":"Tamaño del Valor","hidden_message":"El lado derecho está oculto"},"colors":{"header":"Colores","bar_color":"Color de Barra","background_color":"Color de Fondo","border_color":"Color de Borde","limit_indicator_color":"Color de Indicador de Límite","left_title_color":"Color de Título Izquierdo","left_value_color":"Color de Valor Izquierdo","right_title_color":"Color de Título Derecho","right_value_color":"Color de Valor Derecho","percentage_text_color":"Color de Texto de Porcentaje","reset_color":"Restablecer color predeterminado"},"gradient":{"header":"Modo Degradado","toggle":"Usar Degradado","toggle_description":"Usar un degradado para la barra de progreso en lugar de un color sólido","display_mode":"Modo de Visualización del Degradado","display_mode_full":"Completo","display_mode_value_based":"Basado en Valor","display_mode_description":"Completo: Mostrar degradado completo. Basado en Valor: Mostrar degradado hasta el valor actual.","editor_header":"Editor de Degradado","add_stop":"Añadir Parada","display_mode_cropped":"Recortado"},"animation":{"header":"Animación de Acción","description":"Añade animaciones a la barra cuando una entidad específica alcanza un estado específico. Perfecto para mostrar estados de carga, estados de alarma y más.","pro_tip":"Consejo Pro: Para animaciones \'siempre activas\', selecciona un tipo de animación pero deja vacíos los campos de entidad y estado. ¡Prueba las animaciones \'Burbujas\' y \'Rellenar\'!","entity":"Entidad de Animación","entity_description":"Entidad que activa la animación cuando coincide con el estado especificado","state":"Estado de Entidad","state_description":"Cuando el estado de la entidad coincide con este valor, se activará la animación","type":"Tipo de Animación","type_description":"El efecto de animación que se mostrará cuando el estado de la entidad coincida","select_entity_prompt":"Seleccione una Entidad y escriba el estado que desea para activar la animación (ejemplos: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Delgada","regular":"Normal","thick":"Gruesa","thiccc":"Muy Gruesa"},"bar_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"},"bar_alignments":{"space-between":"Espacio Entre","flex-start":"Izquierda","center":"Centro","flex-end":"Derecha"},"animation_types":{"none":"Ninguna","charging-lines":"Carga (Líneas Diagonales)","pulse":"Pulso","blinking":"Parpadeo","bouncing":"Rebote","glow":"Brillo","rainbow":"Arcoíris","bubbles":"Burbujas","fill":"Rellenar"},"bar_radius":{"round":"Redondo","square":"Cuadrado","rounded-square":"Cuadrado Redondeado"},"custom_bar_settings":{"title":"Configuración de Barra Personalizada","description":"Define configuraciones personalizadas para barras individuales.","name":"Nombre de la Barra","entity":"Entidad","unit":"Unidad","min":"Valor Mínimo","max":"Valor Máximo","thresholds":"Umbrales","severity":"Mapa de Severidad"}},"icons":{"title":"Iconos de la Tarjeta","description":"Añade filas de iconos para mostrar múltiples iconos en tu tarjeta. Cada fila puede configurarse con diferentes ajustes. Nota: Las filas de iconos y el orden de secciones pueden reorganizarse en la pestaña Personalizar.","add_row":"Añadir Fila de Iconos","duplicate_row":"Duplicar Fila","delete_row":"Eliminar Fila","expand_row":"Expandir Fila","collapse_row":"Colapsar Fila","no_row":"No se ha añadido ninguna fila de iconos","row_prefix":"Fila","icon_prefix":"Icono","row_settings":{"header":"Configuración de Fila","width":"Ancho de Fila","width_description":"Ancho de la fila en porcentaje del ancho de la tarjeta","alignment":"Alineación de Fila","alignment_description":"Cómo se alinean los iconos en esta fila","spacing":"Espaciado de Iconos","spacing_description":"Cantidad de espacio entre los iconos en esta fila"},"add_icon":"Añadir Icono","duplicate_icon":"Duplicar Icono","delete_icon":"Eliminar Icono","expand_icon":"Expandir Icono","collapse_icon":"Colapsar Icono","no_icon":"Ningún icono seleccionado","icon_settings":{"header":"Configuración de Icono","entity":"Entidad","entity_description":"Entidad mostrada con este icono","icon":"Icono","icon_description":"Selecciona un icono o ingresa un icono personalizado","name":"Nombre","name_description":"Nombre personalizado mostrado debajo del icono (usa el nombre de la entidad por defecto si no se especifica)","show_name":"Mostrar Nombre","show_name_description":"Muestra el texto del nombre debajo del icono","show_state":"Mostrar Estado","show_state_description":"Muestra el estado de la entidad debajo del icono","show_units":"Mostrar Unidades","show_units_description":"Incluye las unidades al mostrar el estado","text_position":"Posición del Texto","text_position_description":"Dónde se posiciona el texto del nombre y estado respecto al icono","click_action":"Acción al Hacer Clic","service":"Servicio","service_description":"Servicio a llamar (ej. light.turn_on)","service_data":"Datos del Servicio (JSON)","service_data_description":"Datos JSON enviados con la llamada al servicio","action":"Acción (JSON/Servicio)","action_description":"Configuración avanzada de acción (ver documentación)","navigation_path":"Ruta de Navegación","navigation_path_description":"Ruta a la que navegar (ej. /lovelace/dashboard)","url":"URL","url_description":"URL para abrir en una nueva pestaña","automation_entity":"Entidad de Automatización","automation_entity_description":"Automatización a activar cuando se hace clic"},"icon_appearance":{"header":"Apariencia del Icono","icon":"Icono Específico","general":"Apariencia General","active":"Estado Activo","inactive":"Estado Inactivo","state_conditions":"Condiciones de Estado","advanced":"Configuración Avanzada","icon_size":"Tamaño del Icono","icon_size_description":"Tamaño del icono en píxeles","text_size":"Tamaño del Texto","text_size_description":"Tamaño del texto de nombre/estado en píxeles","text_alignment":"Alineación del Texto","text_alignment_description":"Cómo se alinea el texto debajo del icono","icon_background":"Fondo del Icono","icon_background_description":"Añade una forma de fondo detrás del icono","text_appearance":"Apariencia del Texto","container":{"header":"Apariencia del Contenedor","vertical_alignment":"Alineación Vertical","vertical_alignment_description":"Alinear el icono y el texto verticalmente dentro del contenedor.","width":"Ancho del Contenedor","width_description":"Establecer el ancho del contenedor del icono relativo a la fila.","background":"Forma del Fondo del Contenedor","background_description":"Elegir una forma de fondo para todo el contenedor del icono.","container_background_color":"Color de Fondo del Contenedor"},"show_when_active":"Mostrar Icono Cuando Activo","show_when_active_description":"Mostrar este icono solo cuando está en un estado activo","template_mode":"Modo Plantilla","template_mode_description":"Usar una plantilla para determinar el estado activo/inactivo.","active_state":"Estado Activo","active_state_description":"Cadena de estado que representa \\"activo\\".","active_state_text":"Texto Personalizado para Estado Activo","active_state_text_description":"Sobrescribe el texto mostrado cuando el icono está activo. Dejar vacío para usar el estado real.","inactive_state":"Estado Inactivo","inactive_state_description":"Cadena de estado que representa \\"inactivo\\".","inactive_state_text":"Texto Personalizado para Estado Inactivo","inactive_state_text_description":"Sobrescribe el texto mostrado cuando el icono está inactivo. Dejar vacío para usar el estado real.","active_icon":"Icono Activo","inactive_icon":"Icono Inactivo","active_template":"Plantilla Activa","active_template_description":"Plantilla que evalúa a verdadero cuando el icono debe estar activo.","inactive_template":"Plantilla Inactiva","inactive_template_description":"Plantilla que evalúa a verdadero cuando el icono debe estar inactivo.","active_icon_color":"Color del Icono Activo","inactive_icon_color":"Color del Icono Inactivo","active_name_color":"Color del Nombre Activo","inactive_name_color":"Color del Nombre Inactivo","active_state_color":"Color del Estado Activo","inactive_state_color":"Color del Estado Inactivo","show_icon_active":"Mostrar Icono Cuando Activo","show_icon_active_description":"Mostrar el icono cuando el estado es activo.","show_icon_inactive":"Mostrar Icono Cuando Inactivo","show_icon_inactive_description":"Mostrar el icono cuando el estado está inactivo.","custom_active_state_text":"Texto Personalizado de Estado Activo","custom_inactive_state_text":"Texto Personalizado de Estado Inactivo","action_description":"Acción a realizar cuando se hace clic en el icono.","show_name_active":"Mostrar Nombre Cuando Activo","show_name_active_description":"Mostrar el nombre cuando el estado es activo.","show_name_inactive":"Mostrar Nombre Cuando Inactivo","show_name_inactive_description":"Mostrar el nombre cuando el estado es inactivo.","show_state_active":"Mostrar Estado Cuando Activo","show_state_active_description":"Mostrar el estado cuando el estado es activo.","show_state_inactive":"Mostrar Estado Cuando Inactivo","show_state_inactive_description":"Mostrar el estado cuando el estado es inactivo."},"tabs":{"general":"General","appearance":"Apariencia","states":"Estados","active_state":"Estado Activo","inactive_state":"Estado Inactivo"},"alignments":{"flex-start":"Izquierda","center":"Centro","flex-end":"Derecha","space-between":"Espacio Entre","space-around":"Espacio Alrededor","space-evenly":"Espacio Uniforme"},"vertical_alignments":{"flex-start":"Superior","center":"Medio","flex-end":"Inferior"},"spacing":{"none":"Ninguno","small":"Pequeño","medium":"Mediano","large":"Grande"},"text_positions":{"below":"Debajo del Icono","beside":"Junto al Icono","none":"Sin Texto","top":"Arriba","left":"Izquierda","right":"Derecha"},"reset":{"size":"Restablecer tamaño predeterminado","color":"Restablecer Color","all":"Restablecer valores predeterminados"},"click_actions":{"toggle":"Alternar Entidad","more-info":"Mostrar Más Información","navigate":"Navegar a Ruta","url":"Abrir URL","call-service":"Llamar a Servicio","perform-action":"Realizar Acción","location-map":"Mostrar Mapa de Ubicación","assist":"Asistente de Voz","trigger":"Activar","none":"Sin Acción","descriptions":{"toggle":"Alterna el estado de la entidad.","more-info":"Abre el diálogo de más información de la entidad.","navigate":"Navega a la ruta de Lovelace especificada.","url":"Abre la URL especificada en una nueva pestaña.","call-service":"Llama al servicio de Home Assistant especificado.","perform-action":"Ejecuta una acción personalizada (ver documentación).","location-map":"Muestra la ubicación de la entidad en un mapa.","assist":"Abre el asistente de voz de Home Assistant.","none":"No se realizará ninguna acción.","trigger":"Activa la entidad (automatización, script, botón, etc.)."}},"backgrounds":{"none":"Ninguno","circle":"Círculo","square":"Cuadrado","rounded_square":"Cuadrado Redondeado"},"container_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"},"row_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"}},"customize":{"layout":{"title":"Estilo de Diseño","description":"Elige entre un diseño de columna única o doble para la tarjeta","header":"Configuración de Diseño"},"layout_types":{"single":"Columna Única","double":"Columna Doble"},"sections":{"header":"Secciones de Tarjeta","arrangement_header":"Disposición de Secciones","arrangement_desc_base":"Arrastra y suelta las secciones para organizar su orden en la tarjeta.","arrangement_desc_single_extra":"Todas las secciones se mostrarán en una columna única.","arrangement_desc_double_extra":"En un diseño de doble columna, puedes colocar cualquier sección en la columna izquierda o derecha."},"section_labels":{"title":"Título","image":"Imagen del Vehículo","info":"Información del Vehículo"},"actions":{"collapse_margins":"Reducir Márgenes","expand_margins":"Expandir Márgenes"},"margins":{"top":"Margen Superior","bottom":"Margen Inferior"},"columns":{"left":"Columna Izquierda","right":"Columna Derecha","empty":"Suelta secciones aquí"},"css":{"header":"CSS Global","description":"Ingresa reglas CSS personalizadas aquí para anular el estilo predeterminado de la tarjeta. Estas reglas se aplicarán directamente a la tarjeta. Usa con precaución.","label":"CSS Personalizado","input_description":"Ingresa tus reglas CSS personalizadas aquí."}},"backgrounds":{"none":"Ninguno","circle":"Círculo","square":"Cuadrado","rounded_square":"Cuadrado Redondeado"},"container_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"},"row_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Desarrollado por","discord_button":"Únete a Nuestro Discord","github_button":"Visita Nuestro Github","docs_button":"Ver Nuestra Documentación","support_title":"Apoya Ultra Vehicle Card","support_para":"¡Tus generosas donaciones impulsan el desarrollo de increíbles funcionalidades para esta tarjeta! Sin el apoyo de usuarios como tú, la innovación continua no sería posible.","donate_button":"DONAR (PAYPAL)"},"custom_icons":{"title":"Iconos Personalizados","description":"Define iconos personalizados para diferentes estados.","icon_entity":"Entidad del Icono","default_icon":"Icono Predeterminado","state_icons":"Iconos de Estado","state":"Estado","icon":"Icono"},"custom_active_state_text":"Texto Personalizado de Estado Activo","custom_inactive_state_text":"Texto Personalizado de Estado Inactivo","image_settings":{"title":"Configuración de Imagen","description":"Configura la apariencia de la imagen principal.","type":"Tipo de Imagen","width":"Ancho de Imagen","crop":"Recortar Imagen","entity":"Entidad de Imagen","entity_description":"Entidad que proporciona la URL de la imagen"}}');var at=a.t(nt,2);const ot=JSON.parse('{"editor":{"tabs":{"settings":"Paramètres","bars":"Barres","icons":"Icônes","customize":"Personnaliser","about":"À propos"},"settings_subtabs":{"general":"Général","action_images":"Images d\'Action"},"action_images":{"title":"Paramètres des Images d\'Action","description":"Configurez les images à afficher lorsque des états d\'entités spécifiques sont atteints.","add_image":"Ajouter une Image d\'Action","no_images":"Aucune image d\'action configurée pour l\'instant. Ajoutez-en une pour commencer.","entity_settings":"Paramètres de l\'Entité","entity_placeholder":"Sélectionnez une entité","state_placeholder":"Entrez la valeur d\'état","image_settings":"Paramètres de l\'Image","image_type":{"title":"Type d\'Image","description":"Choisissez comment fournir l\'image","upload":"Télécharger l\'Image","url":"URL de l\'Image","entity":"Image de l\'Entité","none":"Aucune"},"delete_confirm":"Êtes-vous sûr de vouloir supprimer cette image d\'action ?","actions":{"duplicate":"Dupliquer","delete":"Supprimer","expand":"Développer","collapse":"Réduire","drag":"Glisser pour réorganiser"},"preview":{"no_entity":"Aucune entité sélectionnée","any_state":"N\'importe quel état","no_image":"Pas d\'image"}},"card_settings":{"title":"Titre de la Carte","title_alignment":"Alignement du Titre","title_size":"Taille du Titre","title_description":"Titre affiché en haut de la carte (optionnel)","title_alignment_description":"Comment le titre de la carte est aligné","title_size_description":"Taille du titre de la carte en pixels","format_entities":"Formater les Valeurs des Entités","format_entities_description":"Active le formatage supplémentaire des valeurs d\'entités (ajoute des virgules, convertit les unités, etc.)","show_units":"Afficher les Unités","show_units_description":"Affiche les unités à côté des valeurs"},"vehicle_info":{"title":"Informations du Véhicule","location":{"title":"Entité de Localisation","description":"Sélectionne l\'entité qui affiche l\'emplacement actuel du véhicule.","show":"Afficher la Localisation","show_description":"Affiche l\'emplacement du véhicule"},"mileage":{"title":"Entité de Kilométrage","description":"Sélectionne l\'entité qui représente le kilométrage total ou l\'odomètre du véhicule.","show":"Afficher le Kilométrage","show_description":"Affiche le kilométrage du véhicule"},"car_state":{"title":"Entité d\'État du Véhicule","description":"Sélectionne l\'entité qui représente l\'état actuel du véhicule (ex. garé, en mouvement, en charge).","show":"Afficher l\'État du Véhicule","show_description":"Affiche l\'état du véhicule"}},"images":{"common":{"url_description":"Entrez l\'URL de l\'image"},"vehicle":{"title":"Image du Véhicule","description":"Configure l\'image principale affichée pour le véhicule.","type":"Type d\'Image du Véhicule","width":"Largeur de l\'Image","crop":"Recadrer l\'Image","entity":"Entité d\'Image","entity_description":"Entité qui fournit l\'URL de l\'image"},"action":{"title":"Image d\'Action","description":"Affiche optionnellement une image différente lorsqu\'une entité atteint un état spécifique (ex. affiche une image de charge lorsque la voiture est branchée).","type":"Type d\'Image d\'Action","width":"Largeur de l\'Image","crop":"Recadrer l\'Image","entity":"Entité d\'Action","entity_description":"Entité qui déclenche l\'image d\'action","state":"État d\'Action","state_description":"Valeur d\'état qui déclenche l\'image d\'action"},"action_images":{"title":"Action Image","description":"Optionally, display a different image when a specific entity reaches a certain state (e.g., show a charging image when the car is plugged in).","type":"Action Image Type","width":"Image Width","crop":"Image Crop","entity":"Action Entity","entity_description":"Entity that triggers the action image","state":"Action State","state_description":"State value that triggers the action image","image_type":{"title":"Image Type","description":"Select the type of image to display","upload":"Upload","url":"URL","entity":"Entity","file":"File"},"image_url":{"title":"Image URL","description":"Enter the URL of the image to display","url":"URL","url_description":"URL pointing to the image","reset":"Reset"}}},"crop":{"title":"Recadrage d\'Image","top":"Haut","right":"Droit","bottom":"Bas","left":"Gauche","pixels":"px","help":"Entrez des valeurs en pixels (positives ou négatives) pour ajuster le recadrage et le remplissage"},"alignment":{"left":"Gauche","center":"Centre","right":"Droite"},"common":{"choose_file":"Choisir un Fichier","no_file_chosen":"Aucun fichier sélectionné","entity":"Entité","width":"Largeur","width_description":"Largeur en pourcentage de la carte","none":"Aucun","default":"Par défaut","upload":"Télécharger","url":"URL","url_description":"URL pointant vers l\'image","reset":"Réinitialiser"},"bars":{"title":"Barres de Pourcentage","description":"Ajoute des barres de pourcentage pour afficher des valeurs comme le niveau de carburant, la charge de la batterie ou l\'autonomie. Chaque barre peut afficher une valeur de pourcentage principale avec des étiquettes optionnelles à gauche et à droite.","add":"Ajouter une Nouvelle Barre","duplicate":"Dupliquer la Barre","delete":"Supprimer la Barre","expand":"Développer la Barre","collapse":"Réduire la Barre","bar_prefix":"Barre","no_entity":"Aucune entité sélectionnée","tabs":{"config":"Configuration","colors":"Couleurs","animation":"Animation"},"settings":{"header":"Configuration de la Barre","entity":"Entité de Pourcentage de la Barre","entity_description":"Sélectionne une entité qui renvoie une valeur de pourcentage (0-100). Cela contrôle le niveau de remplissage de la barre.","limit_entity":"Entité de Valeur Limite (optionnel)","limit_entity_description":"Optionnel: Ajoute une ligne indicatrice verticale sur la barre (ex. limite de charge pour batterie de VE).","limit_color":"Couleur de l\'Indicateur de Limite","limit_color_description":"Couleur de la ligne verticale indiquant la position de la limite sur la barre. Les modifications forceront une mise à jour de la carte.","bar_size":"Taille de la Barre","bar_size_description":"Définit l\'épaisseur/hauteur de la barre de progression.","width":"Largeur de la Barre","width_description":"Définit la largeur de la barre en pourcentage de la largeur de la carte.","alignment":"Alignement de l\'Étiquette","alignment_description":"Comment les étiquettes gauche et droite s\'alignent entre elles.","bar_radius":"Rayon de la Barre","bar_radius_description":"Forme des coins de la barre de progression"},"left_side":{"header":"Côté Gauche","toggle_description":"Afficher ou masquer le côté gauche de l\'étiquette de la barre","title":"Titre Gauche","title_description":"Étiquette optionnelle affichée sur le côté gauche sous la barre.","entity":"Entité Gauche","entity_description":"Entité dont la valeur est affichée du côté gauche de la barre.","alignment_description":"Contrôle comment cette étiquette s\'aligne sous la barre.","title_size":"Taille du Titre","value_size":"Taille de la Valeur","hidden_message":"Le côté gauche est masqué"},"right_side":{"header":"Côté Droit","toggle_description":"Afficher ou masquer le côté droit de l\'étiquette de la barre","title":"Titre Droit","title_description":"Étiquette optionnelle affichée sur le côté droit sous la barre.","entity":"Entité Droite","entity_description":"Entité dont la valeur est affichée du côté droit de la barre.","alignment_description":"Contrôle comment cette étiquette s\'aligne sous la barre.","title_size":"Taille du Titre","value_size":"Taille de la Valeur","hidden_message":"Le côté droit est masqué"},"colors":{"header":"Couleurs","bar_color":"Couleur de la Barre","background_color":"Couleur d\'Arrière-plan","border_color":"Couleur de Bordure","limit_indicator_color":"Couleur de l\'Indicateur de Limite","left_title_color":"Couleur du Titre Gauche","left_value_color":"Couleur de la Valeur Gauche","right_title_color":"Couleur du Titre Droit","right_value_color":"Couleur de la Valeur Droite","percentage_text_color":"Couleur du Texte de Pourcentage","reset_color":"Réinitialiser la couleur par défaut"},"gradient":{"header":"Mode Dégradé","toggle":"Utiliser le Dégradé","toggle_description":"Utiliser un dégradé pour la barre de progression au lieu d\'une couleur unie","display_mode":"Mode d\'Affichage du Dégradé","display_mode_full":"Complet","display_mode_value_based":"Basé sur la Valeur","display_mode_description":"Complet : Afficher tout le dégradé. Basé sur la valeur : Afficher le dégradé jusqu\'à la valeur actuelle.","editor_header":"Éditeur de Dégradé","add_stop":"Ajouter un Arrêt","display_mode_cropped":"Recadré"},"animation":{"header":"Animation d\'Action","description":"Ajoute des animations à la barre lorsqu\'une entité spécifique atteint un état spécifique. Parfait pour afficher les états de charge, les états d\'alarme et plus encore.","pro_tip":"Astuce Pro: Pour des animations \'toujours actives\', sélectionne un type d\'animation mais laisse les champs d\'entité et d\'état vides. Essaie les animations \'Bulles\' et \'Remplissage\'!","entity":"Entité d\'Animation","entity_description":"Entité qui déclenche l\'animation lorsqu\'elle correspond à l\'état spécifié","state":"État de l\'Entité","state_description":"Lorsque l\'état de l\'entité correspond à cette valeur, l\'animation sera déclenchée","type":"Type d\'Animation","type_description":"L\'effet d\'animation à afficher lorsque l\'état de l\'entité correspond","select_entity_prompt":"Sélectionnez une Entité et saisissez l\'état qui déclenchera l\'animation (exemples : \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Fine","regular":"Normale","thick":"Épaisse","thiccc":"Très Épaisse"},"bar_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"},"bar_alignments":{"space-between":"Espace Entre","flex-start":"Gauche","center":"Centre","flex-end":"Droite"},"animation_types":{"none":"Aucune","charging-lines":"Charge (Lignes Diagonales)","pulse":"Pulsation","blinking":"Clignotement","bouncing":"Rebond","glow":"Lueur","rainbow":"Arc-en-ciel","bubbles":"Bulles","fill":"Remplissage"},"bar_radius":{"round":"Arrondi","square":"Carré","rounded-square":"Carré Arrondi"},"custom_bar_settings":{"title":"Paramètres de Barre Personnalisés","description":"Définissez des configurations personnalisées pour des barres individuelles.","name":"Nom de la Barre","entity":"Entité","unit":"Unité","min":"Valeur Minimale","max":"Valeur Maximale","thresholds":"Seuils","severity":"Carte de Sévérité"}},"icons":{"title":"Icônes de Carte","description":"Ajoutez des lignes d\'icônes pour afficher plusieurs icônes dans votre carte. Chaque ligne peut être configurée avec différents paramètres. Note : Les lignes d\'icônes et l\'ordre des sections peuvent être réorganisés dans l\'onglet Personnaliser.","add_row":"Ajouter une Ligne d\'Icônes","duplicate_row":"Dupliquer la Ligne","delete_row":"Supprimer la Ligne","expand_row":"Développer la Ligne","collapse_row":"Réduire la Ligne","no_row":"Aucune ligne d\'icônes ajoutée","row_prefix":"Ligne","icon_prefix":"Icône","row_settings":{"header":"Paramètres de Ligne","width":"Largeur de Ligne","width_description":"Largeur de la ligne en pourcentage de la largeur de la carte","alignment":"Alignement de la Ligne","alignment_description":"Comment aligner les icônes dans cette ligne","spacing":"Espacement des Icônes","spacing_description":"Quantité d\'espace entre les icônes dans cette ligne"},"add_icon":"Ajouter une Icône","duplicate_icon":"Dupliquer l\'Icône","delete_icon":"Supprimer l\'Icône","expand_icon":"Développer l\'Icône","collapse_icon":"Réduire l\'Icône","no_icon":"Aucune icône sélectionnée","icon_settings":{"header":"Paramètres d\'Icône","entity":"Entité","entity_description":"Entité à afficher avec cette icône","icon":"Icône","icon_description":"Sélectionnez une icône ou entrez une personnalisée","name":"Nom","name_description":"Nom personnalisé à afficher sous l\'icône (utilise le nom de l\'entité par défaut si non défini)","show_name":"Afficher le Nom","show_name_description":"Afficher le texte du nom sous l\'icône","show_state":"Afficher l\'État","show_state_description":"Afficher l\'état de l\'entité sous l\'icône","show_units":"Afficher les Unités","show_units_description":"Inclure les unités lors de l\'affichage de l\'état","text_position":"Position du Texte","text_position_description":"Où placer le texte du nom et de l\'état par rapport à l\'icône","click_action":"Action au Clic","service":"Service","service_description":"Service à appeler (ex. light.turn_on)","service_data":"Données du Service (JSON)","service_data_description":"Données JSON à envoyer avec l\'appel de service","action":"Action (JSON/Service)","action_description":"Configuration d\'action avancée (voir docs)","navigation_path":"Chemin de Navigation","navigation_path_description":"Chemin vers lequel naviguer (ex. /lovelace/dashboard)","url":"URL","url_description":"URL à ouvrir dans un nouvel onglet","automation_entity":"Entité d\'Automatisation","automation_entity_description":"Automatisation à déclencher lors du clic"},"icon_appearance":{"header":"Apparence de l\'Icône","icon":"Spécifique à l\'Icône","general":"Apparence Générale","active":"État Actif","inactive":"État Inactif","state_conditions":"Conditions d\'État","advanced":"Paramètres Avancés","icon_size":"Taille de l\'Icône","icon_size_description":"Taille de l\'icône en pixels","text_size":"Taille du Texte","text_size_description":"Taille du texte du nom/état en pixels","text_alignment":"Alignement du Texte","text_alignment_description":"Comment aligner le texte sous l\'icône","icon_background":"Arrière-plan de l\'Icône","icon_background_description":"Ajouter une forme d\'arrière-plan derrière l\'icône","text_appearance":"Apparence du Texte","container":{"header":"Apparence du Conteneur","vertical_alignment":"Alignement Vertical","vertical_alignment_description":"Aligner l\'icône et le texte verticalement dans le conteneur.","width":"Largeur du Conteneur","width_description":"Définir la largeur du conteneur de l\'icône par rapport à la ligne.","background":"Forme d\'Arrière-plan du Conteneur","background_description":"Choisir une forme d\'arrière-plan pour l\'ensemble du conteneur d\'icône.","container_background_color":"Couleur d\'Arrière-plan du Conteneur"},"show_when_active":"Afficher l\'Icône Lorsqu\'Active","show_when_active_description":"Afficher cette icône uniquement lorsqu\'elle est dans un état actif","template_mode":"Mode Template","template_mode_description":"Utiliser un template pour déterminer l\'état actif/inactif.","active_state":"État Actif","active_state_description":"Chaîne d\'état représentant \\"actif\\".","active_state_text":"Texte d\'État Actif Personnalisé","active_state_text_description":"Remplace le texte affiché lorsque l\'icône est active. Laissez vide pour utiliser l\'état réel.","inactive_state":"État Inactif","inactive_state_description":"Chaîne d\'état représentant \\"inactif\\".","inactive_state_text":"Texte d\'État Inactif Personnalisé","inactive_state_text_description":"Remplace le texte affiché lorsque l\'icône est inactive. Laissez vide pour utiliser l\'état réel.","active_icon":"Icône Active","inactive_icon":"Icône Inactive","active_template":"Template Actif","active_template_description":"Template qui évalue à vrai lorsque l\'icône doit être active.","inactive_template":"Template Inactif","inactive_template_description":"Template qui évalue à vrai lorsque l\'icône doit être inactive.","active_icon_color":"Couleur de l\'Icône Active","inactive_icon_color":"Couleur de l\'Icône Inactive","active_name_color":"Couleur du Nom Actif","inactive_name_color":"Couleur du Nom Inactif","active_state_color":"Couleur de l\'État Actif","inactive_state_color":"Couleur de l\'État Inactif","show_icon_active":"Afficher l\'Icône Lorsqu\'Active","show_icon_active_description":"Afficher l\'icône lorsque l\'état est actif.","show_icon_inactive":"Afficher l\'Icône Lorsqu\'Inactive","show_icon_inactive_description":"Afficher l\'icône lorsque l\'état est inactif.","custom_active_state_text":"Texte d\'État Actif Personnalisé","custom_inactive_state_text":"Texte d\'État Inactif Personnalisé","action_description":"Action à effectuer lorsque l\'icône est cliquée.","show_name_active":"Afficher le Nom Lorsqu\'Actif","show_name_active_description":"Afficher le nom lorsque l\'état est actif.","show_name_inactive":"Afficher le Nom Lorsqu\'Inactif","show_name_inactive_description":"Afficher le nom lorsque l\'état est inactif.","show_state_active":"Afficher l\'État Lorsqu\'Actif","show_state_active_description":"Afficher l\'état lorsque l\'état est actif.","show_state_inactive":"Afficher l\'État Lorsqu\'Inactif","show_state_inactive_description":"Afficher l\'état lorsque l\'état est inactif."},"tabs":{"general":"Général","appearance":"Apparence","states":"États","active_state":"État Actif","inactive_state":"État Inactif"},"alignments":{"flex-start":"Gauche","center":"Centre","flex-end":"Droite","space-between":"Espace Entre","space-around":"Espace Autour","space-evenly":"Espacement Égal"},"vertical_alignments":{"flex-start":"Haut","center":"Milieu","flex-end":"Bas"},"spacing":{"none":"Aucun","small":"Petit","medium":"Moyen","large":"Grand"},"text_positions":{"below":"Sous l\'Icône","beside":"À Côté de l\'Icône","none":"Pas de Texte","top":"En Haut","left":"À Gauche","right":"À Droite"},"reset":{"size":"Réinitialiser à la taille par défaut","color":"Réinitialiser à la couleur par défaut","all":"Réinitialiser aux valeurs par défaut"},"click_actions":{"toggle":"Basculer l\'Entité","more-info":"Afficher Plus d\'Informations","navigate":"Naviguer vers un Chemin","url":"Ouvrir une URL","call-service":"Appeler un Service","perform-action":"Exécuter une Action","location-map":"Afficher la Carte de Localisation","assist":"Assistant Vocal","trigger":"Déclencher","none":"Aucune Action","descriptions":{"toggle":"Bascule l\'état de l\'entité.","more-info":"Ouvre la boîte de dialogue d\'informations de l\'entité.","navigate":"Navigue vers le chemin Lovelace spécifié.","url":"Ouvre l\'URL spécifiée dans un nouvel onglet.","call-service":"Appelle le service Home Assistant spécifié.","perform-action":"Exécute une action personnalisée (voir documentation).","location-map":"Affiche la localisation de l\'entité sur une carte.","assist":"Ouvre l\'assistant vocal Home Assistant.","none":"Aucune action ne sera effectuée.","trigger":"Déclenche ou bascule l\'entité (automatisation, script, bouton, verrou, etc.)."}},"backgrounds":{"none":"Aucun","circle":"Cercle","square":"Carré","rounded_square":"Carré Arrondi"},"container_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"},"row_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"}},"customize":{"title":"Personnaliser la Disposition","description":"Personnalisez la disposition et le style de la carte.","layout":{"title":"Style de Disposition","description":"Choisissez entre disposition à une colonne ou deux colonnes pour la carte","header":"Paramètres de Disposition"},"layout_types":{"single":"Une Colonne","double":"Deux Colonnes"},"sections":{"header":"Sections de la Carte","arrangement_header":"Arrangement des Sections","arrangement_desc_base":"Glissez et déposez les sections pour organiser leur ordre sur la carte.","arrangement_desc_single_extra":"Toutes les sections s\'afficheront dans une seule colonne.","arrangement_desc_double_extra":"Dans la disposition à deux colonnes, vous pouvez placer toutes les sections dans l\'une ou l\'autre colonne."},"section_labels":{"title":"Titre","image":"Image du Véhicule","info":"Informations du Véhicule"},"actions":{"collapse_margins":"Réduire les Marges","expand_margins":"Étendre les Marges"},"margins":{"top":"Marge Supérieure","bottom":"Marge Inférieure"},"columns":{"left":"Colonne Gauche","right":"Colonne Droite","empty":"Déposez les sections ici"},"css":{"header":"CSS Global","description":"Entrez des règles CSS personnalisées ici pour remplacer les styles par défaut de la carte. Ces règles seront appliquées directement à la carte. Utilisez avec précaution.","label":"CSS Personnalisé","input_description":"Entrez vos règles CSS personnalisées ici."}},"backgrounds":{"none":"Aucun","circle":"Cercle","square":"Carré","rounded_square":"Carré Arrondi"},"container_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"},"row_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Développé par","discord_button":"Rejoindre Notre Discord","github_button":"Consulter Notre Github","docs_button":"Visiter Notre Documentation","support_title":"Soutenez Ultra Vehicle Card","support_para":"Vos généreux pourboires alimentent le développement de fonctionnalités incroyables pour cette carte ! Sans le soutien d\'utilisateurs comme vous, l\'innovation continue ne serait pas possible.","donate_button":"LAISSER UN POURBOIRE (PAYPAL)"},"custom_icons":{"title":"Icônes Personnalisées","description":"Définissez des icônes personnalisées pour différents états.","icon_entity":"Entité d\'Icône","default_icon":"Icône par Défaut","state_icons":"Icônes d\'État","state":"État","icon":"Icône"},"custom_active_state_text":"Texte d\'État Actif Personnalisé","custom_inactive_state_text":"Texte d\'État Inactif Personnalisé","image_settings":{"title":"Paramètres d\'Image","description":"Configurez l\'apparence de l\'image principale.","type":"Type d\'Image","width":"Largeur d\'Image","crop":"Recadrer l\'Image","entity":"Entité d\'Image","entity_description":"Entité qui fournit l\'URL de l\'image"}}');var rt=a.t(ot,2);const st=JSON.parse('{"editor":{"tabs":{"settings":"Impostazioni","bars":"Barre","icons":"Icone","customize":"Personalizza","about":"Informazioni"},"card_settings":{"title":"Titolo della Scheda","title_alignment":"Allineamento del Titolo","title_size":"Dimensione del Titolo","title_description":"Titolo visualizzato nella parte superiore della scheda (opzionale)","title_alignment_description":"Come viene allineato il titolo della scheda","title_size_description":"Dimensione del titolo della scheda in pixel","format_entities":"Formatta i Valori delle Entità","format_entities_description":"Attiva la formattazione aggiuntiva dei valori delle entità (aggiunge virgole, converte unità, ecc.)","show_units":"Mostra Unità","show_units_description":"Mostra le unità di misura accanto ai valori"},"vehicle_info":{"title":"Informazioni sul Veicolo","location":{"title":"Entità Posizione","description":"Seleziona l\'entità che mostra la posizione attuale del veicolo.","show":"Mostra Posizione","show_description":"Mostra la posizione del veicolo"},"mileage":{"title":"Entità Chilometraggio","description":"Seleziona l\'entità che rappresenta il chilometraggio totale o il contachilometri del veicolo.","show":"Mostra Chilometraggio","show_description":"Mostra il chilometraggio del veicolo"},"car_state":{"title":"Entità Stato del Veicolo","description":"Seleziona l\'entità che rappresenta lo stato attuale del veicolo (es. parcheggiato, in movimento, in carica).","show":"Mostra Stato del Veicolo","show_description":"Mostra lo stato del veicolo"}},"images":{"vehicle":{"title":"Immagine del Veicolo","description":"Configura l\'immagine principale visualizzata per il veicolo.","type":"Tipo di Immagine del Veicolo","width":"Larghezza dell\'Immagine","crop":"Ritaglia Immagine","entity":"Entità Immagine","entity_description":"Entità che fornisce l\'URL dell\'immagine"},"action":{"title":"Immagine di Azione","description":"Mostra opzionalmente un\'immagine diversa quando un\'entità raggiunge un determinato stato (es. mostra un\'immagine di ricarica quando l\'auto è collegata).","type":"Tipo di Immagine di Azione","width":"Larghezza dell\'Immagine","crop":"Ritaglia Immagine","entity":"Entità di Azione","entity_description":"Entità che attiva l\'immagine di azione","state":"Stato di Azione","state_description":"Valore dello stato che attiva l\'immagine di azione"},"common":{"url_description":"Enter the URL of the image"},"action_images":{"title":"Action Image","description":"Optionally, display a different image when a specific entity reaches a certain state (e.g., show a charging image when the car is plugged in).","type":"Action Image Type","width":"Image Width","crop":"Image Crop","entity":"Action Entity","entity_description":"Entity that triggers the action image","state":"Action State","state_description":"State value that triggers the action image","image_type":{"title":"Image Type","description":"Select the type of image to display","upload":"Upload","url":"URL","entity":"Entity","file":"File"},"image_url":{"title":"Image URL","description":"Enter the URL of the image to display","url":"URL","url_description":"URL pointing to the image","reset":"Reset"}}},"crop":{"title":"Ritaglio Immagine","top":"Alto","right":"Destra","bottom":"Basso","left":"Sinistra","pixels":"px","help":"Inserisci valori in pixel (positivi o negativi) per regolare il ritaglio e il riempimento"},"alignment":{"left":"Sinistra","center":"Centro","right":"Destra"},"common":{"choose_file":"Scegli File","no_file_chosen":"Nessun file selezionato","entity":"Entità","width":"Larghezza","width_description":"Larghezza in percentuale della scheda","none":"Nessuno","default":"Predefinito","upload":"Carica","url":"URL","url_description":"URL che punta all\'immagine","reset":"Ripristina"},"bars":{"title":"Barre Percentuali","description":"Aggiungi barre percentuali per visualizzare valori come livello carburante, carica della batteria o autonomia. Ogni barra può mostrare un valore percentuale principale con etichette opzionali a sinistra e destra.","add":"Aggiungi Nuova Barra","duplicate":"Duplica Barra","delete":"Elimina Barra","expand":"Espandi Barra","collapse":"Comprimi Barra","bar_prefix":"Barra","no_entity":"Nessuna entità selezionata","tabs":{"config":"Configurazione","colors":"Colori","animation":"Animazione"},"settings":{"header":"Impostazioni Barra","entity":"Entità Percentuale Barra","entity_description":"Seleziona un\'entità che restituisce un valore percentuale (0-100). Questo controlla il livello di riempimento della barra.","limit_entity":"Entità Valore Limite (opzionale)","limit_entity_description":"Opzionale: Aggiungi una linea indicatrice verticale sulla barra (es. limite di ricarica per batteria VE).","limit_color":"Colore Indicatore Limite","limit_color_description":"Colore della linea verticale che indica la posizione del limite sulla barra. Le modifiche forzeranno un aggiornamento della scheda.","bar_size":"Dimensione Barra","bar_size_description":"Definisce lo spessore/altezza della barra di avanzamento.","width":"Larghezza Barra","width_description":"Definisce la larghezza della barra in percentuale della larghezza della scheda.","alignment":"Allineamento Etichetta","alignment_description":"Come le etichette sinistra e destra si allineano tra loro.","bar_radius":"Raggio della Barra","bar_radius_description":"Forma degli angoli della barra di avanzamento"},"left_side":{"header":"Lato Sinistro","toggle_description":"Mostra o nascondi il lato sinistro dell\'etichetta della barra","title":"Titolo Sinistro","title_description":"Etichetta opzionale visualizzata sul lato sinistro sotto la barra.","entity":"Entità Sinistra","entity_description":"Entità il cui valore viene visualizzato sul lato sinistro della barra.","alignment_description":"Controlla come questa etichetta è allineata sotto la barra.","title_size":"Dimensione Titolo","value_size":"Dimensione Valore","hidden_message":"Il lato sinistro è nascosto"},"right_side":{"header":"Lato Destro","toggle_description":"Mostra o nascondi il lato destro dell\'etichetta della barra","title":"Titolo Destro","title_description":"Etichetta opzionale visualizzata sul lato destro sotto la barra.","entity":"Entità Destra","entity_description":"Entità il cui valore viene visualizzato sul lato destro della barra.","alignment_description":"Controlla come questa etichetta è allineata sotto la barra.","title_size":"Dimensione Titolo","value_size":"Dimensione Valore","hidden_message":"Il lato destro è nascosto"},"colors":{"header":"Colori","bar_color":"Colore Barra","background_color":"Colore Sfondo","border_color":"Colore Bordo","limit_indicator_color":"Colore Indicatore Limite","left_title_color":"Colore Titolo Sinistro","left_value_color":"Colore Valore Sinistro","right_title_color":"Colore Titolo Destro","right_value_color":"Colore Valore Destro","reset_color":"Ripristina colore predefinito","percentage_text_color":"Percentage Text Color"},"gradient":{"header":"Modalità Gradiente","toggle":"Usa Gradiente","toggle_description":"Usa un gradiente per la barra di avanzamento invece di un colore solido","display_mode":"Modalità di Visualizzazione del Gradiente","display_mode_full":"Completo","display_mode_value_based":"Basato sul Valore","display_mode_description":"Completo: Mostra l\'intero gradiente. Basato sul Valore: Mostra il gradiente fino al valore corrente.","editor_header":"Editor Gradiente","add_stop":"Aggiungi Stop","display_mode_cropped":"[NEEDS TRANSLATION] Cropped"},"animation":{"header":"Animazione di Azione","description":"Aggiungi animazioni alla barra quando un\'entità specifica raggiunge uno stato specifico. Perfetto per mostrare stati di ricarica, stati di allarme e altro ancora.","pro_tip":"Suggerimento Pro: Per animazioni \'sempre attive\', seleziona un tipo di animazione ma lascia vuoti i campi entità e stato. Prova le animazioni \'Bolle\' e \'Riempimento\'!","entity":"Entità Animazione","entity_description":"Entità che attiva l\'animazione quando corrisponde allo stato specificato","state":"Stato Entità","state_description":"Quando lo stato dell\'entità corrisponde a questo valore, l\'animazione verrà attivata","type":"Tipo di Animazione","type_description":"L\'effetto di animazione da visualizzare quando lo stato dell\'entità corrisponde","select_entity_prompt":"Seleziona un\'Entità e inserisci lo stato che vuoi per attivare l\'animazione (esempi: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Sottile","regular":"Normale","thick":"Spessa","thiccc":"Molto Spessa"},"bar_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"},"bar_alignments":{"space-between":"Spazio Tra","flex-start":"Sinistra","center":"Centro","flex-end":"Destra"},"animation_types":{"none":"Nessuna","charging-lines":"Ricarica (Linee Diagonali)","pulse":"Pulsazione","blinking":"Lampeggiamento","bouncing":"Rimbalzo","glow":"Bagliore","rainbow":"Arcobaleno","bubbles":"Bolle","fill":"Riempimento"},"bar_radius":{"round":"Rotondo","square":"Quadrato","rounded-square":"Quadrato Arrotondato"},"custom_bar_settings":{"title":"Custom Bar Settings","description":"Define custom configurations for individual bars.","name":"Bar Name","entity":"Entity","unit":"Unit","min":"Min Value","max":"Max Value","thresholds":"Thresholds","severity":"Severity Map"}},"icons":{"title":"Icone della Scheda","description":"Aggiungi righe di icone per visualizzare più icone sulla tua scheda. Ogni riga può essere configurata con impostazioni diverse. Nota: Le righe di icone e l\'ordine delle sezioni possono essere riorganizzati nella scheda Personalizza.","add_row":"Aggiungi Riga di Icone","duplicate_row":"Duplica Riga","delete_row":"Elimina Riga","expand_row":"Espandi Riga","collapse_row":"Comprimi Riga","no_row":"Nessuna riga di icone è stata aggiunta","row_prefix":"Riga","icon_prefix":"Icona","row_settings":{"header":"Impostazioni Riga","width":"Larghezza Riga","width_description":"Larghezza della riga in percentuale della larghezza della scheda","alignment":"Allineamento Riga","alignment_description":"Come le icone sono allineate in questa riga","spacing":"Spaziatura Icone","spacing_description":"Quantità di spazio tra le icone in questa riga"},"add_icon":"Aggiungi Icona","duplicate_icon":"Duplica Icona","delete_icon":"Elimina Icona","expand_icon":"Espandi Icona","collapse_icon":"Comprimi Icona","no_icon":"Nessuna icona selezionata","icon_settings":{"header":"Impostazioni Icona","entity":"Entità","entity_description":"Entità visualizzata con questa icona","icon":"Icona","icon_description":"Seleziona un\'icona o inserisci un\'icona personalizzata","name":"Nome","name_description":"Nome personalizzato visualizzato sotto l\'icona (usa il nome dell\'entità di default se non specificato)","show_name":"Mostra Nome","show_name_description":"Mostra il testo del nome sotto l\'icona","show_state":"Mostra Stato","show_state_description":"Mostra lo stato dell\'entità sotto l\'icona","show_units":"Mostra Unità","show_units_description":"Includi le unità quando mostri lo stato","text_position":"Posizione Testo","text_position_description":"Dove il testo del nome e dello stato è posizionato rispetto all\'icona","click_action":"Azione al Click","service":"Servizio","service_description":"Servizio da chiamare (es. light.turn_on)","service_data":"Dati Servizio (JSON)","service_data_description":"Dati JSON inviati con la chiamata al servizio","action":"Azione (JSON/Servizio)","action_description":"Configurazione avanzata azione (vedi documentazione)","navigation_path":"Percorso di Navigazione","navigation_path_description":"Percorso verso cui navigare (es. /lovelace/dashboard)","url":"URL","url_description":"URL da aprire in una nuova scheda","automation_entity":"Automation Entity","automation_entity_description":"Automation to trigger when clicked"},"icon_appearance":{"header":"Aspetto Icona","icon":"Icona Specifica","general":"Aspetto Generale","active":"Stato Attivo","inactive":"Stato Inattivo","state_conditions":"Condizioni di Stato","advanced":"Impostazioni Avanzate","icon_size":"Dimensione Icona","icon_size_description":"Dimensione dell\'icona in pixel","text_size":"Dimensione Testo","text_size_description":"Dimensione del testo nome/stato in pixel","text_alignment":"Allineamento Testo","text_alignment_description":"Come il testo è allineato sotto l\'icona","icon_background":"Sfondo Icona","icon_background_description":"Aggiungi una forma di sfondo dietro l\'icona","text_appearance":"Aspetto Testo","container":{"header":"Aspetto Contenitore","width":"Larghezza Contenitore","width_description":"Imposta la larghezza del contenitore dell\'icona rispetto alla riga.","background":"Forma Sfondo Contenitore","background_description":"Scegli una forma di sfondo per l\'intero contenitore dell\'icona.","container_background_color":"Colore Sfondo Contenitore","vertical_alignment":"Vertical Alignment","vertical_alignment_description":"Align the icon and text vertically within the container."},"show_when_active":"Mostra Icona Quando Attiva","show_when_active_description":"Mostra questa icona solo quando è in uno stato attivo","template_mode":"Modalità Template","template_mode_description":"Usa un template per determinare lo stato attivo/inattivo.","active_state":"Stato attivo","active_state_description":"Stringa di stato che rappresenta \\"attivo\\".","active_state_text":"Testo Personalizzato per Stato Attivo","active_state_text_description":"Sovrascrive il testo visualizzato quando l\'icona è attiva. Lascia vuoto per usare lo stato effettivo.","inactive_state":"Stato inattivo","inactive_state_description":"Stringa di stato che rappresenta \\"inattivo\\".","inactive_state_text":"Testo Personalizzato per Stato Inattivo","inactive_state_text_description":"Sovrascrive il testo visualizzato quando l\'icona è inattiva. Lascia vuoto per usare lo stato effettivo.","active_icon":"Icona attiva","inactive_icon":"Icona inattiva","active_template":"Template Attivo","active_template_description":"Template che restituisce vero quando l\'icona dovrebbe essere attiva.","inactive_template":"Template Inattivo","inactive_template_description":"Template che restituisce vero quando l\'icona dovrebbe essere inattiva.","active_icon_color":"Active Icon Color","inactive_icon_color":"Inactive Icon Color","active_name_color":"Active Name Color","inactive_name_color":"Inactive Name Color","active_state_color":"Active State Color","inactive_state_color":"Inactive State Color","show_icon_active":"Mostra icona quando attivo","show_icon_active_description":"Display the icon when the state is active.","show_icon_inactive":"Mostra Icona Quando Inattiva","show_icon_inactive_description":"Mostra l\'icona quando lo stato è inattivo.","custom_active_state_text":"Testo Personalizzato Stato Attivo","custom_inactive_state_text":"Testo Personalizzato Stato Inattivo","action_description":"Azione da eseguire quando si clicca sull\'icona.","show_name_active":"Show Name When Active","show_name_active_description":"Display the name when the state is active.","show_name_inactive":"Show Name When Inactive","show_name_inactive_description":"Display the name when the state is inactive.","show_state_active":"Show State When Active","show_state_active_description":"Display the state when the state is active.","show_state_inactive":"Show State When Inactive","show_state_inactive_description":"Display the state when the state is inactive."},"tabs":{"general":"Generale","appearance":"Aspetto","states":"Stati","active_state":"Stato Attivo","inactive_state":"Stato Inattivo"},"alignments":{"flex-start":"Sinistra","center":"Centro","flex-end":"Destra","space-between":"Spazio Tra","space-around":"Spazio Attorno","space-evenly":"Spazio Uniforme"},"vertical_alignments":{"flex-start":"Alto","center":"Medio","flex-end":"Basso"},"spacing":{"none":"Nessuno","small":"Piccolo","medium":"Medio","large":"Grande"},"text_positions":{"below":"Sotto l\'Icona","beside":"Accanto all\'Icona","none":"Nessun Testo","top":"In Alto","left":"A Sinistra","right":"A Destra"},"reset":{"size":"Ripristina dimensione predefinita","color":"Ripristina colore predefinito","all":"Ripristina valori predefiniti"},"click_actions":{"toggle":"Attiva/Disattiva","more-info":"Mostra Dettagli","navigate":"Naviga al Percorso","url":"Apri URL","call-service":"Chiama Servizio","perform-action":"Esegui Azione","location-map":"Mostra Mappa","assist":"Assistente Vocale","trigger":"Attiva","none":"Nessuna Azione","descriptions":{"toggle":"Attiva o disattiva lo stato dell\'entità.","more-info":"Apre la finestra con maggiori informazioni sull\'entità.","navigate":"Naviga al percorso Lovelace specificato.","url":"Apre l\'URL specificato in una nuova scheda.","call-service":"Chiama il servizio Home Assistant specificato.","perform-action":"Esegue un\'azione personalizzata (vedi documentazione).","location-map":"Mostra la posizione dell\'entità su una mappa.","assist":"Apre l\'assistente vocale di Home Assistant.","trigger":"Attiva l\'entità (automazione, script, pulsante, ecc.).","none":"Non verrà eseguita alcuna azione."}},"backgrounds":{"none":"Nessuno","circle":"Cerchio","square":"Quadrato","rounded_square":"Quadrato Arrotondato"},"container_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"},"row_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"}},"customize":{"layout":{"title":"Stile Layout","description":"Scegli tra un layout a colonna singola o doppia per la scheda","header":"Impostazioni Layout"},"layout_types":{"single":"Colonna Singola","double":"Colonna Doppia"},"sections":{"header":"Sezioni Scheda","arrangement_header":"Disposizione Sezioni","arrangement_desc_base":"Trascina e rilascia le sezioni per organizzare il loro ordine nella scheda.","arrangement_desc_single_extra":"Tutte le sezioni verranno visualizzate in una colonna singola.","arrangement_desc_double_extra":"In un layout a doppia colonna, puoi posizionare qualsiasi sezione nella colonna sinistra o destra."},"section_labels":{"title":"Titolo","image":"Immagine Veicolo","info":"Informazioni sul Veicolo"},"actions":{"collapse_margins":"Riduci Margini","expand_margins":"Espandi Margini"},"margins":{"top":"Margine Superiore","bottom":"Margine Inferiore"},"columns":{"left":"Colonna Sinistra","right":"Colonna Destra","empty":"Rilascia le sezioni qui"},"css":{"header":"CSS Globale","description":"Inserisci regole CSS personalizzate qui per sovrascrivere lo stile predefinito della scheda. Queste regole verranno applicate direttamente alla scheda. Usa con cautela.","label":"CSS Personalizzato","input_description":"Inserisci le tue regole CSS personalizzate qui."}},"backgrounds":{"none":"Nessuno","circle":"Cerchio","square":"Quadrato","rounded_square":"Quadrato Arrotondato"},"container_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"},"row_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"},"settings_subtabs":{"general":"Generale","action_images":"Immagini di Azione"},"action_images":{"title":"Impostazioni Immagini di Azione","description":"Configura le immagini che verranno visualizzate quando vengono soddisfatti specifici stati delle entità.","add_image":"Aggiungi Immagine di Azione","no_images":"Nessuna immagine di azione configurata ancora. Aggiungine una per iniziare.","entity_settings":"Impostazioni Entità","entity_placeholder":"Seleziona un\'entità","state_placeholder":"Inserisci valore dello stato","image_settings":"Impostazioni Immagine","image_type":{"title":"Tipo di Immagine","description":"Scegli come fornire l\'immagine","upload":"Carica Immagine","url":"URL Immagine","entity":"Immagine Entità","none":"Nessuna"},"delete_confirm":"Sei sicuro di voler eliminare questa immagine di azione?","actions":{"duplicate":"Duplica","delete":"Elimina","expand":"Espandi","collapse":"Comprimi","drag":"Trascina per riordinare"},"preview":{"no_entity":"Nessuna entità selezionata","any_state":"Qualsiasi stato","no_image":"Nessuna immagine"}}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Sviluppato da","discord_button":"Unisciti al Nostro Discord","github_button":"Visita il Nostro Github","docs_button":"Visualizza la Nostra Documentazione","support_title":"Supporta Ultra Vehicle Card","support_para":"Le tue generose donazioni alimentano lo sviluppo di funzionalità incredibili per questa scheda! Senza il supporto di utenti come te, l\'innovazione continua non sarebbe possibile.","donate_button":"DONA (PAYPAL)"},"custom_icons":{"title":"Custom Icons","description":"Define custom icons for different states.","icon_entity":"Icon Entity","default_icon":"Default Icon","state_icons":"State Icons","state":"State","icon":"Icon"},"custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","image_settings":{"title":"Image Settings","description":"Configure the main image appearance.","type":"Image Type","width":"Image Width","crop":"Image Crop","entity":"Image Entity","entity_description":"Entity that provides the image URL"},"action_images":{"title":"Action Images","description":"Define images to display based on entity states. The first matching image in the list (based on priority) will override the main vehicle image.","add":"Add Action Image","duplicate":"Duplicate Action Image","delete":"Delete Action Image","expand":"Expand Settings","collapse":"Collapse Settings","image_prefix":"Image","no_images":"No action images configured.","priority_info":"Drag handles to reorder priority (top = highest).","trigger":"Trigger","entity":"Trigger Entity","entity_description":"Entity whose state will trigger this image.","state":"Trigger State","state_description":"State value that triggers this image.","image_settings":"Image Settings","image_type":"Image Type","image_url":"Image URL","image_entity":"Image Entity","image_width":"Image Width (%)","image_crop":"Image Crop"},"settings_subtabs":{"general":"General","action_images":"Action Images"}}');var lt=a.t(st,2);const ct=JSON.parse('{"editor":{"tabs":{"settings":"Indstillinger","bars":"Bjælker","icons":"Ikoner","customize":"Tilpas","about":"Om"},"card_settings":{"title":"Korttitel","title_alignment":"Titeljustering","title_size":"Titelstørrelse","title_description":"Titel der vises øverst på kortet (valgfrit)","title_alignment_description":"Hvordan korttitlen justeres","title_size_description":"Størrelsen på korttitlen i pixels","format_entities":"Formater Enhedsværdier","format_entities_description":"Aktivér yderligere formatering af enhedsværdier (tilføj kommaer, konverter enheder osv.)","show_units":"Vis Enheder","show_units_description":"Vis måleenheder ved siden af værdier"},"vehicle_info":{"title":"Køretøjsinformation","location":{"title":"Placeringsenhed","description":"Vælg den enhed, der viser køretøjets aktuelle placering.","show":"Vis Placering","show_description":"Vis køretøjets placering"},"mileage":{"title":"Kilometerenhed","description":"Vælg den enhed, der repræsenterer køretøjets samlede kilometer eller kilometertæller.","show":"Vis Kilometertal","show_description":"Vis køretøjets kilometertal"},"car_state":{"title":"Køretøjstilstandsenhed","description":"Vælg den enhed, der repræsenterer køretøjets aktuelle tilstand (f.eks. parkeret, kørende, opladning).","show":"Vis Køretøjstilstand","show_description":"Vis køretøjets tilstand"}},"images":{"vehicle":{"title":"Køretøjsbillede","description":"Konfigurer det primære billede, der vises for køretøjet.","type":"Køretøjsbilledetype","width":"Billedbredde","crop":"Beskær Billede","entity":"Billedenhed","entity_description":"Enhed, der leverer billed-URL\'en"},"action":{"title":"Handlingsbillede","description":"Viser valgfrit et andet billede, når en enhed når en bestemt tilstand (f.eks. vis et opladningsbillede, når bilen er tilsluttet).","type":"Handlingsbilledetype","width":"Billedbredde","crop":"Beskær Billede","entity":"Handlingsenhed","entity_description":"Enhed, der udløser handlingsbilledet","state":"Handlingstilstand","state_description":"Tilstandsværdi, der udløser handlingsbilledet"},"common":{"url_description":"Enter the URL of the image"},"action_images":{"title":"Action Image","description":"Optionally, display a different image when a specific entity reaches a certain state (e.g., show a charging image when the car is plugged in).","type":"Action Image Type","width":"Image Width","crop":"Image Crop","entity":"Action Entity","entity_description":"Entity that triggers the action image","state":"Action State","state_description":"State value that triggers the action image","image_type":{"title":"Image Type","description":"Select the type of image to display","upload":"Upload","url":"URL","entity":"Entity","file":"File"},"image_url":{"title":"Image URL","description":"Enter the URL of the image to display","url":"URL","url_description":"URL pointing to the image","reset":"Reset"},"automation_entity":"Automation Entity","automation_entity_description":"Automation to trigger when clicked"}},"crop":{"title":"Billedbeskæring","top":"Top","right":"Højre","bottom":"Bund","left":"Venstre","pixels":"px","help":"Indtast værdier i pixels (positive eller negative) for at justere beskæring og udfyldning"},"alignment":{"left":"Venstre","center":"Center","right":"Højre"},"common":{"choose_file":"Vælg Fil","no_file_chosen":"Ingen fil valgt","entity":"Enhed","width":"Bredde","width_description":"Bredde i procent af kortet","none":"Ingen","default":"Standard","upload":"Upload","url":"URL","url_description":"URL, der peger på billedet","reset":"Nulstil"},"bars":{"title":"Procentbjælker","description":"Tilføj procentbjælker for at vise værdier som brændstofniveau, batteriopladning eller rækkevidde. Hver bjælke kan vise en primær procentværdi med valgfrie etiketter til venstre og højre.","add":"Tilføj Ny Bjælke","duplicate":"Dupliker Bjælke","delete":"Slet Bjælke","expand":"Udvid Bjælke","collapse":"Sammenklap Bjælke","bar_prefix":"Bjælke","no_entity":"Ingen enhed valgt","tabs":{"config":"Konfiguration","colors":"Farver","animation":"Animation"},"settings":{"header":"Bjælkeindstillinger","entity":"Bjælkeprocentenhed","entity_description":"Vælg en enhed, der returnerer en procentværdi (0-100). Dette styrer bjælkens fyldningsniveau.","limit_entity":"Grænseenhed (valgfrit)","limit_entity_description":"Valgfrit: Tilføj en lodret indikatorlinje på bjælken (f.eks. opladningsgrænse for elbilbatteri).","limit_color":"Grænseindikatorfarve","limit_color_description":"Farven på den lodrette linje, der indikerer grænsepositionen på bjælken. Ændringer vil tvinge en kortopdatering.","bar_size":"Bjælkestørrelse","bar_size_description":"Indstil tykkelsen/højden af fremskridtsbjælken.","width":"Bjælkebredde","width_description":"Indstil bjælkens bredde som procent af kortets bredde.","alignment":"Etiketjustering","alignment_description":"Hvordan venstre og højre etiketter justeres i forhold til hinanden.","bar_radius":"Bjælkeradius","bar_radius_description":"Form på hjørnerne af fremskridtsbjælken"},"left_side":{"header":"Venstre Side","toggle_description":"Vis eller skjul den venstre side af bjælkeetiketten","title":"Venstre Titel","title_description":"Valgfri etiket, der vises på venstre side under bjælken.","entity":"Venstre Enhed","entity_description":"Enhed, hvis værdi vises på venstre side af bjælken.","alignment_description":"Styrer, hvordan denne etiket justeres under bjælken.","title_size":"Titelstørrelse","value_size":"Værdistørrelse","hidden_message":"Venstre side er skjult"},"right_side":{"header":"Højre Side","toggle_description":"Vis eller skjul den højre side af bjælkeetiketten","title":"Højre Titel","title_description":"Valgfri etiket, der vises på højre side under bjælken.","entity":"Højre Enhed","entity_description":"Enhed, hvis værdi vises på højre side af bjælken.","alignment_description":"Styrer, hvordan denne etiket justeres under bjælken.","title_size":"Titelstørrelse","value_size":"Værdistørrelse","hidden_message":"Højre side er skjult"},"colors":{"header":"Farver","bar_color":"Bjælkefarve","background_color":"Baggrundsfarve","border_color":"Kantfarve","limit_indicator_color":"Grænseindikatorfarve","left_title_color":"Venstre Titelfarve","left_value_color":"Venstre Værdifarve","right_title_color":"Højre Titelfarve","right_value_color":"Højre Værdifarve","reset_color":"Nulstil til standardfarve","percentage_text_color":"Percentage Text Color"},"gradient":{"header":"Gradienttilstand","toggle":"Brug gradient","toggle_description":"Brug en gradient til statuslinjen i stedet for en solid farve","display_mode":"Gradientvisningstilstand","display_mode_full":"Fuld","display_mode_value_based":"Værdibaseret","display_mode_description":"Fuld: Vis hele gradienten. Værdibaseret: Vis gradient op til den aktuelle værdi.","editor_header":"Gradienteditor","add_stop":"Tilføj stop","display_mode_cropped":"[NEEDS TRANSLATION] Cropped"},"animation":{"header":"Handlingsanimation","description":"Tilføj animationer til bjælken, når en specifik enhed når en specifik tilstand. Perfekt til at vise opladningstilstand, alarmtilstande og mere.","pro_tip":"Pro-tip: For \'altid aktive\' animationer, skal du vælge en animationstype, men lade enheds- og tilstandsfelterne være tomme. Prøv \'Bobler\' og \'Fyld\' animationer!","entity":"Animationsenhed","entity_description":"Enhed, der udløser animation, når den matcher den angivne tilstand","state":"Enhedstilstand","state_description":"Når enhedstilstanden matcher denne værdi, vil animationen blive udløst","type":"Animationstype","type_description":"Animationseffekten, der vises, når enhedens tilstand matcher","select_entity_prompt":"Vælg en Enhed og indtast den tilstand, du vil bruge til at udløse animationen (eksempler: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Tynd","regular":"Normal","thick":"Tyk","thiccc":"Meget Tyk"},"bar_widths":{"25":"25% Bredde","50":"50% Bredde","75":"75% Bredde","100":"100% (Fuld Bredde)"},"bar_alignments":{"space-between":"Mellemrum Imellem","flex-start":"Venstre","center":"Center","flex-end":"Højre"},"animation_types":{"none":"Ingen","charging-lines":"Opladning (Diagonale Linjer)","pulse":"Pulserende","blinking":"Blinkende","bouncing":"Hoppende","glow":"Glødende","rainbow":"Regnbue","bubbles":"Bobler","fill":"Fyld"},"bar_radius":{"round":"Rund","square":"Firkantet","rounded-square":"Afrundet Firkant"},"custom_bar_settings":{"title":"Custom Bar Settings","description":"Define custom configurations for individual bars.","name":"Bar Name","entity":"Entity","unit":"Unit","min":"Min Value","max":"Max Value","thresholds":"Thresholds","severity":"Severity Map"}},"icons":{"title":"Kortikoner","description":"Tilføj ikonrækker for at vise flere ikoner på dit kort. Hver række kan konfigureres med forskellige indstillinger. Bemærk: Ikonrækker og sektionsrækkefølge kan omarrangeres under Tilpas-fanen.","add_row":"Tilføj Ikonrække","duplicate_row":"Dupliker Række","delete_row":"Slet Række","expand_row":"Udvid Række","collapse_row":"Sammenklap Række","no_row":"Ingen ikonrækker tilføjet","row_prefix":"Række","icon_prefix":"Ikon","row_settings":{"header":"Rækkeindstillinger","width":"Rækkebredde","width_description":"Rækkens bredde i procent af kortets bredde","alignment":"Rækkejustering","alignment_description":"Hvordan ikoner justeres i denne række","spacing":"Ikonafstand","spacing_description":"Mængden af plads mellem ikoner i denne række"},"add_icon":"Tilføj Ikon","duplicate_icon":"Dupliker Ikon","delete_icon":"Slet Ikon","expand_icon":"Udvid Ikon","collapse_icon":"Sammenklap Ikon","no_icon":"Ingen ikon valgt","icon_settings":{"header":"Ikonindstillinger","entity":"Enhed","entity_description":"Enhed vist med dette ikon","icon":"Ikon","icon_description":"Vælg et ikon eller indtast et tilpasset","name":"Navn","name_description":"Tilpasset navn, der vises under ikonet (bruger som standard enhedsnavnet, hvis ikke angivet)","show_name":"Vis Navn","show_name_description":"Vis navnetekst under ikonet","show_state":"Vis Tilstand","show_state_description":"Vis enhedens tilstand under ikonet","show_units":"Vis Enheder","show_units_description":"Inkluder enheder, når tilstanden vises","text_position":"Tekstplacering","text_position_description":"Hvor navn og tilstandstekst placeres i forhold til ikonet","click_action":"Klikhandling","service":"Service","service_description":"Service, der skal kaldes (f.eks. light.turn_on)","service_data":"Servicedata (JSON)","service_data_description":"JSON-data sendt med servicekaldet","action":"Handling (JSON/Service)","action_description":"Avanceret handlingskonfiguration (se dokumentation)","navigation_path":"Navigationssti","navigation_path_description":"Sti at navigere til (f.eks. /lovelace/dashboard)","url":"URL","url_description":"URL at åbne i en ny fane","automation_entity":"Automation Entity","automation_entity_description":"Automation to trigger when clicked"},"icon_appearance":{"header":"Ikonudseende","icon":"Specifikt ikon","general":"Generel Udseende","active":"Aktiv Tilstand","inactive":"Inaktiv Tilstand","state_conditions":"Tilstandsbetingelser","advanced":"Avancerede Indstillinger","icon_size":"Ikonstørrelse","icon_size_description":"Størrelsen på ikonet i pixels","text_size":"Tekststørrelse","text_size_description":"Størrelsen på navn/tilstandstekst i pixels","text_alignment":"Tekstjustering","text_alignment_description":"Hvordan tekst justeres under ikonet","icon_background":"Ikonbaggrund","icon_background_description":"Tilføj en baggrundsform bag ikonet","text_appearance":"Tekstudseende","container":{"header":"Containerudseende","width":"Beholder Bredde","width_description":"Indstil bredden af ikonbeholderen relativt til rækken.","background":"Beholder Baggrundsform","background_description":"Vælg en baggrundsform for hele ikonbeholderen.","vertical_alignment":"Lodret Justering","vertical_alignment_description":"Juster ikon og tekst lodret inden i beholderen.","container_background_color":"Beholder Baggrundsfarve"},"show_when_active":"Vis Ikon Når Aktivt","show_when_active_description":"Vis kun dette ikon, når det er i en aktiv tilstand","template_mode":"Skabelon Tilstand","template_mode_description":"Brug en skabelon til at bestemme aktiv/inaktiv tilstand.","active_template":"Aktiv Skabelon","active_template_description":"Skabelon der evalueres til sand, når ikonet skal være aktivt.","active_state":"Aktiv tilstand","active_state_description":"Tilstandsstreng, der repræsenterer \\"aktiv\\".","active_state_text":"Brugerdefineret Tekst for Aktiv Tilstand","active_state_text_description":"Overskriver den viste tekst, når ikonet er aktivt. Lad stå tomt for at bruge den faktiske tilstand.","inactive_template":"Inaktiv Skabelon","inactive_template_description":"Skabelon der evalueres til sand, når ikonet skal være inaktivt.","inactive_state":"Inaktiv tilstand","inactive_state_description":"Tilstandsstreng, der repræsenterer \\"inaktiv\\".","inactive_state_text":"Brugerdefineret Tekst for Inaktiv Tilstand","inactive_state_text_description":"Overskriver den viste tekst, når ikonet er inaktivt. Lad stå tomt for at bruge den faktiske tilstand.","active_icon":"Aktivt ikon","inactive_icon":"Inaktivt ikon","show_icon_active":"Vis ikon når aktiv","show_icon_active_description":"Vis ikonet, når tilstanden er aktiv.","show_icon_inactive":"Vis ikon ved inaktivitet","show_icon_inactive_description":"Vis ikonet, når tilstanden er inaktiv.","custom_active_state_text":"Brugerdefineret Aktiv Tilstandstekst","custom_inactive_state_text":"Brugerdefineret Inaktiv Tilstandstekst","action_description":"Handling der skal udføres, når ikonet klikkes på.","active_icon_color":"Active Icon Color","inactive_icon_color":"Inactive Icon Color","active_name_color":"Active Name Color","inactive_name_color":"Inactive Name Color","active_state_color":"Active State Color","inactive_state_color":"Inactive State Color","show_name_active":"Show Name When Active","show_name_active_description":"Display the name when the state is active.","show_name_inactive":"Show Name When Inactive","show_name_inactive_description":"Display the name when the state is inactive.","show_state_active":"Show State When Active","show_state_active_description":"Display the state when the state is active.","show_state_inactive":"Show State When Inactive","show_state_inactive_description":"Display the state when the state is inactive."},"tabs":{"general":"Generelt","appearance":"Udseende","states":"Tilstande","active_state":"Aktiv Tilstand","inactive_state":"Inaktiv Tilstand"},"alignments":{"flex-start":"Venstre","center":"Center","flex-end":"Højre","space-between":"Mellemrum Imellem","space-around":"Mellemrum Omkring","space-evenly":"Lige Mellemrum"},"vertical_alignments":{"flex-start":"Top","center":"Midt","flex-end":"Bund"},"spacing":{"none":"Ingen","small":"Lille","medium":"Medium","large":"Stor"},"text_positions":{"below":"Under Ikonet","beside":"Ved Siden af Ikonet","none":"Ingen Tekst","top":"Top","left":"Venstre","right":"Højre"},"reset":{"size":"Nulstil til standardstørrelse","color":"Nulstil til standardfarve","all":"Nulstil til standardværdier"},"click_actions":{"toggle":"Skift Entitet","more-info":"Vis Mere Info","navigate":"Naviger til Sti","url":"Åbn URL","call-service":"Kald Service","perform-action":"Udfør Handling","location-map":"Vis Placeringskort","assist":"Stemmeassistent","trigger":"Trigger","none":"Ingen Handling","descriptions":{"toggle":"Skifter enhedens tilstand.","more-info":"Åbner mere-info dialogen for enheden.","navigate":"Navigerer til den angivne Lovelace-sti.","url":"Åbner den angivne URL i en ny fane.","call-service":"Kalder den angivne Home Assistant-service.","perform-action":"Udfører en brugerdefineret handling (se dokumentation).","location-map":"Viser enhedens placering på et kort.","assist":"Åbner Home Assistant stemmeassistenten.","trigger":"Triggers the entity (automation, script, button, etc.).","none":"Ingen handling vil blive udført."}},"backgrounds":{"none":"Ingen","circle":"Cirkel","square":"Kvadrat","rounded_square":"Afrundet Kvadrat"},"container_widths":{"25":"25% Bredde","50":"50% Bredde","75":"75% Bredde","100":"100% (Fuld Bredde)"},"row_widths":{"25":"25% Bredde","50":"50% Bredde","75":"75% Bredde","100":"100% (Fuld Bredde)"}},"customize":{"layout":{"title":"Layoutstil","description":"Vælg mellem enkelt- eller dobbeltkolonnelayout for kortet","header":"Layoutindstillinger"},"layout_types":{"single":"Enkelt Kolonne","double":"Dobbelt Kolonne"},"sections":{"header":"Kortsektioner","arrangement_header":"Sektionsarrangement","arrangement_desc_base":"Træk og slip sektioner for at arrangere deres rækkefølge på kortet.","arrangement_desc_single_extra":"Alle sektioner vil blive vist i en enkelt kolonne.","arrangement_desc_double_extra":"I dobbeltkolonnelayoutet kan du placere enhver sektion i enten venstre eller højre kolonne."},"section_labels":{"title":"Titel","image":"Køretøjsbillede","info":"Køretøjsinfo"},"actions":{"collapse_margins":"Sammenfold Margener","expand_margins":"Udvid Margener"},"margins":{"top":"Topmargen","bottom":"Bundmargen"},"columns":{"left":"Venstre Kolonne","right":"Højre Kolonne","empty":"Slip sektioner her"},"css":{"header":"Global CSS","description":"Indtast tilpassede CSS-regler her for at overskrive kortets standardstil. Disse regler vil blive anvendt direkte på kortet. Brug med forsigtighed.","label":"Tilpasset CSS","input_description":"Indtast dine tilpassede CSS-regler her."}},"backgrounds":{"none":"Ingen","circle":"Cirkel","square":"Kvadrat","rounded_square":"Afrundet Kvadrat"},"container_widths":{"25":"25% Bredde","50":"50% Bredde","75":"75% Bredde","100":"100% (Fuld Bredde)"},"row_widths":{"25":"25% Bredde","50":"50% Bredde","75":"75% Bredde","100":"100% (Fuld Bredde)"},"settings_subtabs":{"general":"Generelt","action_images":"Handlingsbilleder"},"action_images":{"title":"Indstillinger for Handlingsbilleder","description":"Konfigurer billeder, der vil blive vist, når bestemte entitetstilstande er opfyldt.","add_image":"Tilføj Handlingsbillede","no_images":"Ingen handlingsbilleder konfigureret endnu. Tilføj et for at komme i gang.","entity_settings":"Entitetsindstillinger","entity_placeholder":"Vælg en entitet","state_placeholder":"Angiv tilstandsværdi","image_settings":"Billedindstillinger","image_type":{"title":"Billedtype","description":"Vælg, hvordan du vil levere billedet","upload":"Upload Billede","url":"Billede-URL","entity":"Entitetsbillede","none":"Ingen"},"delete_confirm":"Er du sikker på, at du vil slette dette handlingsbillede?","actions":{"duplicate":"Duplikér","delete":"Slet","expand":"Udvid","collapse":"Skjul","drag":"Træk for at ændre rækkefølge"},"preview":{"no_entity":"Ingen entitet valgt","any_state":"Enhver tilstand","no_image":"Intet billede"}}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Udviklet af","discord_button":"Deltag i Vores Discord","github_button":"Besøg Vores Github","docs_button":"Se Vores Dokumentation","support_title":"Støt Ultra Vehicle Card","support_para":"Dine generøse donationer driver udviklingen af fantastiske funktioner til dette kort! Uden støtte fra brugere som dig ville fortsat innovation ikke være mulig.","donate_button":"DONÉR (PAYPAL)"},"custom_icons":{"title":"Custom Icons","description":"Define custom icons for different states.","icon_entity":"Icon Entity","default_icon":"Default Icon","state_icons":"State Icons","state":"State","icon":"Icon"},"custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","image_settings":{"title":"Image Settings","description":"Configure the main image appearance.","type":"Image Type","width":"Image Width","crop":"Image Crop","entity":"Image Entity","entity_description":"Entity that provides the image URL"},"action_images":{"title":"Action Images","description":"Define images to display based on entity states. The first matching image in the list (based on priority) will override the main vehicle image.","add":"Add Action Image","duplicate":"Duplicate Action Image","delete":"Delete Action Image","expand":"Expand Settings","collapse":"Collapse Settings","image_prefix":"Image","no_images":"No action images configured.","priority_info":"Drag handles to reorder priority (top = highest).","trigger":"Trigger","entity":"Trigger Entity","entity_description":"Entity whose state will trigger this image.","state":"Trigger State","state_description":"State value that triggers this image.","image_settings":"Image Settings","image_type":"Image Type","image_url":"Image URL","image_entity":"Image Entity","image_width":"Image Width (%)","image_crop":"Image Crop"},"settings_subtabs":{"general":"General","action_images":"Action Images"}}');var dt=a.t(ct,2);const pt=JSON.parse('{"editor":{"tabs":{"settings":"Settings","bars":"Bars","icons":"Icons","customize":"Customise","about":"About"},"card_settings":{"title":"Card Title","title_alignment":"Title Alignment","title_size":"Title Size","title_description":"Title displayed at the top of the card (optional)","title_alignment_description":"How the card title is aligned","title_size_description":"Size of the card title in pixels","format_entities":"Format Entity Values","format_entities_description":"Enable extra formatting of entity values (add commas, convert units, etc)","show_units":"Show Units","show_units_description":"Show measurement units next to values"},"vehicle_info":{"title":"Vehicle Information","location":{"title":"Location Entity","description":"Select the entity that shows the vehicle\'s current location.","show":"Show Location","show_description":"Show the vehicle\'s location"},"mileage":{"title":"Mileage Entity","description":"Select the entity that represents the vehicle\'s total mileage or odometer.","show":"Show Mileage","show_description":"Show the vehicle\'s mileage"},"car_state":{"title":"Vehicle State Entity","description":"Select the entity that represents the vehicle\'s current state (e.g. parked, driving, charging).","show":"Show Vehicle State","show_description":"Show the vehicle\'s state"}},"images":{"vehicle":{"title":"Vehicle Image","description":"Configure the primary image shown for the vehicle.","type":"Vehicle Image Type","width":"Image Width","crop":"Crop Image","entity":"Image Entity","entity_description":"Entity that provides the image URL"},"action":{"title":"Action Image","description":"Optionally display a different image when an entity reaches a certain state (e.g. show a charging image when the car is plugged in).","type":"Action Image Type","width":"Image Width","crop":"Crop Image","entity":"Action Entity","entity_description":"Entity that triggers the action image","state":"Action State","state_description":"State value that triggers the action image"},"common":{"url_description":"Enter the URL of the image"},"action_images":{"title":"Action Image","description":"Optionally, display a different image when a specific entity reaches a certain state (e.g., show a charging image when the car is plugged in).","type":"Action Image Type","width":"Image Width","crop":"Image Crop","entity":"Action Entity","entity_description":"Entity that triggers the action image","state":"Action State","state_description":"State value that triggers the action image","image_type":{"title":"Image Type","description":"Select the type of image to display","upload":"Upload","url":"URL","entity":"Entity","file":"File"},"image_url":{"title":"Image URL","description":"Enter the URL of the image to display","url":"URL","url_description":"URL pointing to the image","reset":"Reset"}}},"crop":{"title":"Image Cropping","top":"Top","right":"Right","bottom":"Bottom","left":"Left","pixels":"px","help":"Enter values in pixels (positive or negative) to adjust cropping and padding"},"alignment":{"left":"Left","center":"Centre","right":"Right"},"common":{"choose_file":"Choose File","no_file_chosen":"No file chosen","entity":"Entity","width":"Width","width_description":"Width as a percentage of the card","none":"None","default":"Default","upload":"Upload","url":"URL","url_description":"URL pointing to the image","reset":"Reset"},"bars":{"title":"Percentage Bars","description":"Add percentage bars to display values like fuel level, battery charge, or range. Each bar can show a primary percentage value with optional labels on the left and right.","add":"Add New Bar","duplicate":"Duplicate Bar","delete":"Delete Bar","expand":"Expand Bar","collapse":"Collapse Bar","bar_prefix":"Bar","no_entity":"No entity selected","tabs":{"config":"Configuration","colors":"Colours","animation":"Animation"},"settings":{"header":"Bar Settings","entity":"Main Entity","entity_description":"Entity that provides the primary value (0-100) for the progress bar","limit_entity":"Limit Entity","limit_entity_description":"Entity that shows a limit marker on the bar (e.g., charge limit)","limit_color":"Limit Indicator Colour","limit_color_description":"Colour of the limit indicator line","alignment":"Label Alignment","alignment_description":"How to align the labels on the progress bar","bar_size":"Bar Thickness","bar_size_description":"Size/thickness of the progress bar","bar_radius":"Bar Radius","bar_radius_description":"Shape of the progress bar corners","width":"Bar Width","width_description":"Width of the progress bar as a percentage of the available space. Use this to place multiple bars side by side."},"left_side":{"header":"Left Side","toggle_description":"Show or hide the left side of the bar label","title":"Left Title","title_description":"Optional label displayed on the left side below the bar.","entity":"Left Entity","entity_description":"Entity whose value is displayed on the left side of the bar.","alignment_description":"Controls how this label is aligned under the bar.","title_size":"Title Size","value_size":"Value Size","hidden_message":"Left side is hidden"},"right_side":{"header":"Right Side","toggle_description":"Show or hide the right side of the bar label","title":"Right Title","title_description":"Optional label displayed on the right side below the bar.","entity":"Right Entity","entity_description":"Entity whose value is displayed on the right side of the bar.","alignment_description":"Controls how this label is aligned under the bar.","title_size":"Title Size","value_size":"Value Size","hidden_message":"Right side is hidden"},"colors":{"header":"Colours","bar_color":"Bar Colour","background_color":"Background Colour","border_color":"Border Colour","limit_indicator_color":"Limit Indicator Colour","left_title_color":"Left Title Colour","left_value_color":"Left Value Colour","right_title_color":"Right Title Colour","right_value_color":"Right Value Colour","reset_color":"Reset to default colour","percentage_text_color":"Percentage Text Color"},"gradient":{"header":"Gradient Mode","toggle":"Use Gradient","toggle_description":"Use a gradient for the progress bar instead of a solid colour","display_mode":"Gradient Display Mode","display_mode_full":"Full","display_mode_value_based":"Value Based","display_mode_description":"Full: Show entire gradient. Value Based: Show gradient up to current value.","editor_header":"Gradient Editor","add_stop":"Add Stop","display_mode_cropped":"Cropped"},"animation":{"header":"Action Animation","description":"Add animations to the bar when a specific entity reaches a specific state. Perfect for showing charging status, alarm states, and more.","pro_tip":"Pro Tip: For \'always-active\' animations, select an animation type but leave the entity and state fields empty. Try the \'Bubbles\' and \'Fill\' animations!","entity":"Animation Entity","entity_description":"Entity that triggers the animation when it matches the specified state","state":"Entity State","state_description":"When the entity\'s state matches this value, the animation will be triggered","type":"Animation Type","type_description":"The animation effect to display when the entity state matches","select_entity_prompt":"Select an Entity and type in the state you would like to trigger the animation with (examples: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Thin","regular":"Regular","thick":"Thick","thiccc":"Very Thick"},"bar_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"bar_alignments":{"space-between":"Space Between","flex-start":"Left","center":"Centre","flex-end":"Right"},"bar_radius":{"round":"Round","square":"Square","rounded-square":"Rounded Square"},"animation_types":{"none":"None","charging-lines":"Charging (Diagonal Lines)","pulse":"Pulsing","blinking":"Blinking","bouncing":"Bouncing","glow":"Glowing","rainbow":"Rainbow","bubbles":"Bubbles","fill":"Fill"},"custom_bar_settings":{"title":"Custom Bar Settings","description":"Define custom configurations for individual bars.","name":"Bar Name","entity":"Entity","unit":"Unit","min":"Min Value","max":"Max Value","thresholds":"Thresholds","severity":"Severity Map"}},"icons":{"title":"Card Icons","description":"Add icon rows to display multiple icons on your card. Each row can be configured with different settings. Note: Icon rows and section order can be rearranged in the Customise tab.","add_row":"Add Icon Row","duplicate_row":"Duplicate Row","delete_row":"Delete Row","expand_row":"Expand Row","collapse_row":"Collapse Row","no_row":"No icon rows added","row_prefix":"Row","icon_prefix":"Icon","row_settings":{"header":"Row Settings","width":"Row Width","width_description":"Width of the row as a percentage of the card\'s width","alignment":"Row Alignment","alignment_description":"How icons are aligned in this row","spacing":"Icon Spacing","spacing_description":"Amount of space between icons in this row"},"add_icon":"Add Icon","duplicate_icon":"Duplicate Icon","delete_icon":"Delete Icon","expand_icon":"Expand Icon","collapse_icon":"Collapse Icon","no_icon":"No icon selected","icon_settings":{"header":"Icon Settings","entity":"Entity","entity_description":"Entity displayed with this icon","icon":"Icon","icon_description":"Select an icon or enter a custom icon","name":"Name","name_description":"Custom name displayed below the icon (uses entity name by default if not specified)","show_name":"Show Name","show_name_description":"Display the name text below the icon","show_state":"Show State","show_state_description":"Display the entity\'s state below the icon","show_units":"Show Units","show_units_description":"Include units when displaying the state","text_position":"Text Position","text_position_description":"Where the name and state text is positioned relative to the icon","click_action":"Click Action","service":"Service","service_description":"Service to be called (e.g. light.turn_on)","service_data":"Service Data (JSON)","service_data_description":"JSON data sent with the service call","action":"Action (JSON/Service)","action_description":"Advanced action configuration (see documentation)","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to (e.g. /lovelace/dashboard)","url":"URL","url_description":"URL to open in a new tab","automation_entity":"Automation Entity","automation_entity_description":"Automation to trigger when clicked"},"icon_appearance":{"header":"Icon Appearance","icon":"Icon Specific","general":"General Appearance","active":"Active State","inactive":"Inactive State","state_conditions":"State Conditions","advanced":"Advanced Settings","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Text Size","text_size_description":"Size of name/state text in pixels","text_alignment":"Text Alignment","text_alignment_description":"How the text is aligned beneath the icon","icon_background":"Icon Background","icon_background_description":"Add a background shape behind the icon","text_appearance":"Text Appearance","container":{"header":"Container Appearance","width":"Container Width","width_description":"Set the width of the icon\'s container relative to the row.","background":"Container Background Shape","background_description":"Choose a background shape for the entire icon container.","vertical_alignment":"Vertical Alignment","vertical_alignment_description":"Align the icon and text vertically within the container.","container_background_color":"Container Background Colour"},"show_when_active":"Show Icon When Active","show_when_active_description":"Only show this icon when it\'s in an active state","template_mode":"Template Mode","template_mode_description":"Use a template to determine the active/inactive state.","active_state":"Active State","active_state_description":"State string representing \\"active\\".","active_state_text":"Custom Active State Text","active_state_text_description":"Overrides the displayed text when the icon is active. Leave empty to use the actual state.","inactive_state":"Inactive State","inactive_state_description":"State string representing \\"inactive\\".","inactive_state_text":"Custom Inactive State Text","inactive_state_text_description":"Overrides the displayed text when the icon is inactive. Leave empty to use the actual state.","active_icon":"Active Icon","inactive_icon":"Inactive Icon","show_icon_active":"Show Icon When Active","show_icon_active_description":"Display the icon when the state is active.","show_icon_inactive":"Show Icon When Inactive","show_icon_inactive_description":"Display the icon when the state is inactive.","custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","action_description":"Action to perform when the icon is clicked.","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","active_icon_color":"Active Icon Color","inactive_icon_color":"Inactive Icon Color","active_name_color":"Active Name Color","inactive_name_color":"Inactive Name Color","active_state_color":"Active State Color","inactive_state_color":"Inactive State Color","show_name_active":"Show Name When Active","show_name_active_description":"Display the name when the state is active.","show_name_inactive":"Show Name When Inactive","show_name_inactive_description":"Display the name when the state is inactive.","show_state_active":"Show State When Active","show_state_active_description":"Display the state when the state is active.","show_state_inactive":"Show State When Inactive","show_state_inactive_description":"Display the state when the state is inactive."},"tabs":{"general":"General","appearance":"Appearance","states":"States","active_state":"Active State","inactive_state":"Inactive State"},"alignments":{"flex-start":"Left","center":"Centre","flex-end":"Right","space-between":"Space Between","space-around":"Space Around","space-evenly":"Space Evenly"},"vertical_alignments":{"flex-start":"Top","center":"Middle","flex-end":"Bottom"},"spacing":{"none":"None","small":"Small","medium":"Medium","large":"Large"},"text_positions":{"below":"Below Icon","beside":"Beside Icon","none":"No Text","top":"Top","left":"Left","right":"Right"},"reset":{"size":"Reset to default size","color":"Reset to default colour","all":"Reset to default values"},"click_actions":{"toggle":"Toggle Entity","more-info":"Show More Info","navigate":"Navigate Path","url":"Open URL","call-service":"Call Service","perform-action":"Perform Action","location-map":"Show Location Map","assist":"Voice Assistant","trigger":"Trigger","none":"No Action","descriptions":{"toggle":"Toggles the state of the entity.","more-info":"Opens the entity\'s more-info dialog.","navigate":"Navigates to the specified Lovelace path.","url":"Opens the specified URL in a new tab.","call-service":"Calls the specified Home Assistant service.","perform-action":"Executes a custom action (see documentation).","location-map":"Shows the entity\'s location on a map.","assist":"Opens the Home Assistant voice assistant.","trigger":"Triggers the entity (automation, script, button, etc.).","none":"No action will be performed."}},"backgrounds":{"none":"None","circle":"Circle","square":"Square","rounded_square":"Rounded Square"},"container_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"row_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"}},"customize":{"layout":{"title":"Layout Style","description":"Choose between a single or double column layout for the card","header":"Layout Settings"},"layout_types":{"single":"Single Column","double":"Double Column"},"sections":{"header":"Card Sections","arrangement_header":"Section Arrangement","arrangement_desc_base":"Drag and drop sections to organise their order on the card.","arrangement_desc_single_extra":"All sections will be displayed in a single column.","arrangement_desc_double_extra":"In a double column layout, you can place any section in the left or right column."},"section_labels":{"title":"Title","image":"Vehicle Image","info":"Vehicle Information"},"actions":{"collapse_margins":"Collapse Margins","expand_margins":"Expand Margins"},"margins":{"top":"Top Margin","bottom":"Bottom Margin"},"columns":{"left":"Left Column","right":"Right Column","empty":"Drop sections here"},"css":{"header":"Global CSS","description":"Enter custom CSS rules here to override the card\'s default styling. These rules will be applied directly to the card. Use with caution.","label":"Custom CSS","input_description":"Enter your custom CSS rules here."}},"backgrounds":{"none":"None","circle":"Circle","square":"Square","rounded_square":"Rounded Square"},"container_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"row_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"settings_subtabs":{"general":"General","action_images":"Action Images"},"action_images":{"title":"Action Images Settings","description":"Configure images that will be displayed when specific entity states are met.","add_image":"Add Action Image","no_images":"No action images configured yet. Add one to get started.","entity_settings":"Entity Settings","entity_placeholder":"Select an entity","state_placeholder":"Enter state value","image_settings":"Image Settings","image_type":{"title":"Image Type","description":"Choose how to provide the image","upload":"Upload Image","url":"Image URL","entity":"Entity Image","none":"None"},"delete_confirm":"Are you sure you want to delete this action image?","actions":{"duplicate":"Duplicate","delete":"Delete","expand":"Expand","collapse":"Collapse","drag":"Drag to reorder"},"preview":{"no_entity":"No entity selected","any_state":"Any state","no_image":"No image"}}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Developed by","discord_button":"Join Our Discord","github_button":"Visit Our Github","docs_button":"View Our Documentation","support_title":"Support Ultra Vehicle Card","support_para":"Your generous donations fuel the development of amazing features for this card! Without support from users like you, continued innovation would not be possible.","donate_button":"DONATE (PAYPAL)"},"custom_icons":{"title":"Custom Icons","description":"Define custom icons for different states.","icon_entity":"Icon Entity","default_icon":"Default Icon","state_icons":"State Icons","state":"State","icon":"Icon"},"custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","image_settings":{"title":"Image Settings","description":"Configure the main image appearance.","type":"Image Type","width":"Image Width","crop":"Image Crop","entity":"Image Entity","entity_description":"Entity that provides the image URL"},"action_images":{"title":"Action Images","description":"Define images to display based on entity states. The first matching image in the list (based on priority) will override the main vehicle image.","add":"Add Action Image","duplicate":"Duplicate Action Image","delete":"Delete Action Image","expand":"Expand Settings","collapse":"Collapse Settings","image_prefix":"Image","no_images":"No action images configured.","priority_info":"Drag handles to reorder priority (top = highest).","trigger":"Trigger","entity":"Trigger Entity","entity_description":"Entity whose state will trigger this image.","state":"Trigger State","state_description":"State value that triggers this image.","image_settings":"Image Settings","image_type":"Image Type","image_url":"Image URL","image_entity":"Image Entity","image_width":"Image Width (%)","image_crop":"Image Crop"},"settings_subtabs":{"general":"General","action_images":"Action Images"}}');var gt=a.t(pt,2);const ht=JSON.parse('{"editor":{"tabs":{"settings":"Instellingen","bars":"Balken","icons":"Pictogrammen","customize":"Aanpassen","about":"Over"},"card_settings":{"title":"Kaarttitel","title_alignment":"Titeluitlijning","title_size":"Titelgrootte","title_description":"Titel weergegeven bovenaan de kaart (optioneel)","title_alignment_description":"Hoe de kaarttitel wordt uitgelijnd","title_size_description":"Grootte van de kaarttitel in pixels","format_entities":"Entiteitswaarden formatteren","format_entities_description":"Schakel extra formattering van entiteitswaarden in (komma\'s toevoegen, eenheden converteren, enz.)","show_units":"Toon eenheden","show_units_description":"Toon meeteenheden naast waarden"},"vehicle_info":{"title":"Voertuiginformatie","location":{"title":"Locatie-entiteit","description":"Selecteer de entiteit die de huidige locatie van het voertuig weergeeft.","show":"Toon locatie","show_description":"Toon de locatie van het voertuig"},"mileage":{"title":"Kilometerstand-entiteit","description":"Selecteer de entiteit die de totale kilometerstand of de kilometerteller van het voertuig weergeeft.","show":"Toon kilometerstand","show_description":"Toon de kilometerstand van het voertuig"},"car_state":{"title":"Voertuigstatus-entiteit","description":"Selecteer de entiteit die de huidige status van het voertuig weergeeft (bijv. geparkeerd, rijdend, aan het opladen).","show":"Toon voertuigstatus","show_description":"Toon de status van het voertuig"}},"images":{"vehicle":{"title":"Voertuigafbeelding","description":"Configureer de primaire afbeelding die wordt weergegeven voor het voertuig.","type":"Type voertuigafbeelding","width":"Afbeeldingsbreedte","crop":"Afbeelding bijsnijden","entity":"Afbeeldingsentiteit","entity_description":"Entiteit die de afbeeldings-URL levert"},"action":{"title":"Actieafbeelding","description":"Toon optioneel een andere afbeelding wanneer een entiteit een bepaalde status bereikt (bijv. toon een oplaadafbeelding wanneer de auto is aangesloten).","type":"Type actieafbeelding","width":"Afbeeldingsbreedte","crop":"Afbeelding bijsnijden","entity":"Actie-entiteit","entity_description":"Entiteit die de actieafbeelding activeert","state":"Actiestatus","state_description":"Statuswaarde die de actieafbeelding activeert"},"common":{"url_description":"Enter the URL of the image"},"action_images":{"title":"Action Image","description":"Optionally, display a different image when a specific entity reaches a certain state (e.g., show a charging image when the car is plugged in).","type":"Action Image Type","width":"Image Width","crop":"Image Crop","entity":"Action Entity","entity_description":"Entity that triggers the action image","state":"Action State","state_description":"State value that triggers the action image","image_type":{"title":"Image Type","description":"Select the type of image to display","upload":"Upload","url":"URL","entity":"Entity","file":"File"},"image_url":{"title":"Image URL","description":"Enter the URL of the image to display","url":"URL","url_description":"URL pointing to the image","reset":"Reset"}}},"crop":{"title":"Afbeelding bijsnijden","top":"Boven","right":"Rechts","bottom":"Onder","left":"Links","pixels":"px","help":"Voer pixelwaarden in (positief of negatief) om bijsnijden en opvulling aan te passen"},"alignment":{"left":"Links","center":"Midden","right":"Rechts"},"common":{"choose_file":"Kies bestand","no_file_chosen":"Geen bestand gekozen","entity":"Entiteit","width":"Breedte","width_description":"Breedte als percentage van de kaart","none":"Geen","default":"Standaard","upload":"Uploaden","url":"URL","url_description":"URL die naar de afbeelding verwijst","reset":"Reset"},"bars":{"title":"Percentagebalken","description":"Voeg percentagebalken toe om waarden zoals brandstofniveau, batterijlading of bereik weer te geven. Elke balk kan een primaire percentagewaarde weergeven met optionele labels links en rechts.","add":"Nieuwe balk toevoegen","duplicate":"Balk dupliceren","delete":"Balk verwijderen","expand":"Balk uitvouwen","collapse":"Balk samenvouwen","bar_prefix":"Balk","no_entity":"Geen entiteit geselecteerd","tabs":{"config":"Configuratie","colors":"Kleuren","animation":"Animatie"},"settings":{"header":"Balkconfiguratie","entity":"Balkpercentage-entiteit","entity_description":"Selecteer een entiteit die een percentagewaarde (0-100) teruggeeft. Dit bepaalt het vulniveau van de balk.","limit_entity":"Limietentiteit (optioneel)","limit_entity_description":"Optioneel: Voeg een verticale indicatorlijn toe op de balk (bijv. oplaadlimiet voor EV-batterij).","limit_color":"Limietindicatorkleur","limit_color_description":"Kleur van de verticale lijn die de limietpositie op de balk aangeeft. Wijzigingen forceren een vernieuwing van de kaart.","bar_size":"Balkgrootte","bar_size_description":"Stel de dikte/hoogte van de voortgangsbalk in.","width":"Balkbreedte","width_description":"Stel de breedte van de balk in als percentage van de kaartbreedte.","alignment":"Labeluitlijning","alignment_description":"Hoe de linker- en rechterlabels ten opzichte van elkaar worden uitgelijnd.","bar_radius":"Balkstraal","bar_radius_description":"Vorm van de hoeken van de voortgangsbalk"},"left_side":{"header":"Linkerkant","toggle_description":"Toon of verberg de linkerkant van het balklabel","title":"Linkertitel","title_description":"Optioneel label dat aan de linkerkant onder de balk wordt weergegeven.","entity":"Linkerentiteit","entity_description":"Entiteit waarvan de waarde aan de linkerkant van de balk wordt weergegeven.","alignment_description":"Bepaalt hoe dit label onder de balk wordt uitgelijnd.","title_size":"Titelgrootte","value_size":"Waardegrootte","hidden_message":"Linkerkant is verborgen"},"right_side":{"header":"Rechterkant","toggle_description":"Toon of verberg de rechterkant van het balklabel","title":"Rechtertitel","title_description":"Optioneel label dat aan de rechterkant onder de balk wordt weergegeven.","entity":"Rechterentiteit","entity_description":"Entiteit waarvan de waarde aan de rechterkant van de balk wordt weergegeven.","alignment_description":"Bepaalt hoe dit label onder de balk wordt uitgelijnd.","title_size":"Titelgrootte","value_size":"Waardegrootte","hidden_message":"Rechterkant is verborgen"},"colors":{"header":"Kleuren","bar_color":"Balkkleur","background_color":"Achtergrondkleur","border_color":"Randkleur","limit_indicator_color":"Limietindicatorkleur","left_title_color":"Linkertitelkleur","left_value_color":"Linkerwaardenkleur","right_title_color":"Rechtertitelkleur","right_value_color":"Rechterwaardenkleur","reset_color":"Reset naar standaardkleur","percentage_text_color":"Percentage Text Color"},"gradient":{"header":"Verloopmodus","toggle":"Gebruik verloop","toggle_description":"Gebruik een verloop voor de voortgangsbalk in plaats van een effen kleur","display_mode":"Verloop Weergavemodus","display_mode_full":"Volledig","display_mode_value_based":"Waarde Gebaseerd","display_mode_description":"Volledig: Toon volledig verloop. Waarde Gebaseerd: Toon verloop tot huidige waarde.","editor_header":"Verloop Editor","add_stop":"Stop toevoegen","display_mode_cropped":"[NEEDS TRANSLATION] Cropped"},"animation":{"header":"Actieanimatie","description":"Voeg animaties toe aan de balk wanneer een specifieke entiteit een bepaalde status bereikt. Perfect voor het tonen van oplaadstatus, alarmtoestanden en meer.","pro_tip":"Pro-tip: Voor \'altijd actieve\' animaties, selecteer een animatietype maar laat de entiteit- en statusvelden leeg. Probeer de \'Bubbels\' en \'Vullen\' animaties!","entity":"Animatie-entiteit","entity_description":"Entiteit die de animatie activeert wanneer deze overeenkomt met de opgegeven status","state":"Entiteitsstatus","state_description":"Wanneer de entiteitsstatus overeenkomt met deze waarde, wordt de animatie geactiveerd","type":"Animatietype","type_description":"Het animatie-effect dat wordt weergegeven wanneer de entiteitsstatus overeenkomt","select_entity_prompt":"Selecteer een Entiteit en typ de status waarmee u de animatie wilt activeren (voorbeelden: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Dun","regular":"Normaal","thick":"Dik","thiccc":"Zeer dik"},"bar_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"},"bar_alignments":{"space-between":"Ruimte tussen","flex-start":"Links","center":"Midden","flex-end":"Rechts"},"animation_types":{"none":"Geen","charging-lines":"Opladen (Diagonale lijnen)","pulse":"Pulseren","blinking":"Knipperen","bouncing":"Stuiteren","glow":"Gloeien","rainbow":"Regenboog","bubbles":"Bubbels","fill":"Vullen"},"bar_radius":{"round":"Rond","square":"Vierkant","rounded-square":"Afgerond Vierkant"},"custom_bar_settings":{"title":"Custom Bar Settings","description":"Define custom configurations for individual bars.","name":"Bar Name","entity":"Entity","unit":"Unit","min":"Min Value","max":"Max Value","thresholds":"Thresholds","severity":"Severity Map"}},"icons":{"title":"Kaartpictogrammen","description":"Voeg pictogramrijen toe om meerdere pictogrammen in je kaart weer te geven. Elke rij kan met verschillende instellingen worden geconfigureerd. Opmerking: Pictogramrijen en sectievolgorde kunnen worden herschikt in het tabblad Aanpassen.","add_row":"Pictogramrij toevoegen","duplicate_row":"Rij dupliceren","delete_row":"Rij verwijderen","expand_row":"Rij uitvouwen","collapse_row":"Rij samenvouwen","no_row":"Geen pictogramrijen toegevoegd","row_prefix":"Rij","icon_prefix":"Pictogram","row_settings":{"header":"Rij-instellingen","width":"Rijbreedte","width_description":"Breedte van de rij als percentage van de kaartbreedte","alignment":"Rijuitlijning","alignment_description":"Hoe pictogrammen in deze rij worden uitgelijnd","spacing":"Pictogramafstand","spacing_description":"Hoeveelheid ruimte tussen pictogrammen in deze rij"},"add_icon":"Pictogram toevoegen","duplicate_icon":"Pictogram dupliceren","delete_icon":"Pictogram verwijderen","expand_icon":"Pictogram uitvouwen","collapse_icon":"Pictogram samenvouwen","no_icon":"Geen pictogram geselecteerd","icon_settings":{"header":"Pictograminstellingen","entity":"Entiteit","entity_description":"Entiteit om weer te geven met dit pictogram","icon":"Pictogram","icon_description":"Selecteer een pictogram of voer een aangepast pictogram in","name":"Naam","name_description":"Aangepaste naam die onder het pictogram wordt weergegeven (gebruikt standaard de entiteitsnaam als niet ingesteld)","show_name":"Toon naam","show_name_description":"Toon de naamtekst onder het pictogram","show_state":"Toon status","show_state_description":"Toon de entiteitsstatus onder het pictogram","show_units":"Toon eenheden","show_units_description":"Voeg eenheden toe bij het weergeven van de status","text_position":"Tekstpositie","text_position_description":"Waar de naam- en statustekst wordt geplaatst ten opzichte van het pictogram","click_action":"Klikactie","service":"Service","service_description":"Service om aan te roepen (bijv. light.turn_on)","service_data":"Servicegegevens (JSON)","service_data_description":"JSON-gegevens die met de serviceaanroep worden verzonden","action":"Actie (JSON/Service)","action_description":"Geavanceerde actieconfiguratie (zie documentatie)","navigation_path":"Navigatiepad","navigation_path_description":"Pad om naartoe te navigeren (bijv. /lovelace/dashboard)","url":"URL","url_description":"URL om te openen in een nieuw tabblad","automation_entity":"Automation Entity","automation_entity_description":"Automation to trigger when clicked"},"icon_appearance":{"header":"Icoon Uiterlijk","icon":"Icoon Specifiek","general":"Algemeen uiterlijk","active":"Actieve status","inactive":"Inactieve status","state_conditions":"Statusvoorwaarden","advanced":"Geavanceerde instellingen","icon_size":"Icoongrootte","icon_size_description":"Grootte van het icoon in pixels","text_size":"Tekstgrootte","text_size_description":"Grootte van de naam/statustekst in pixels","text_alignment":"Tekstuitlijning","text_alignment_description":"Hoe de tekst onder het icoon wordt uitgelijnd","icon_background":"Icoonachtergrond","icon_background_description":"Voeg een achtergrondvorm toe achter het icoon","text_appearance":"Tekstuiterlijk","container":{"header":"Container-uiterlijk","width":"Containerbreedte","width_description":"Stel de breedte van de icooncontainer in ten opzichte van de rij.","background":"Container Achtergrondvorm","background_description":"Kies een achtergrondvorm voor de gehele icooncontainer.","vertical_alignment":"Verticale uitlijning","vertical_alignment_description":"Lijn het icoon en de tekst verticaal uit binnen de container.","container_background_color":"Container Achtergrondkleur"},"show_when_active":"Toon icoon wanneer actief","show_when_active_description":"Toon dit icoon alleen wanneer het in een actieve status is","template_mode":"Template Modus","template_mode_description":"Gebruik een sjabloon om de actieve/inactieve status te bepalen.","active_state":"Actieve status","active_state_description":"Statusstring die \\"actief\\" voorstelt.","active_state_text":"Aangepaste Tekst voor Actieve Status","active_state_text_description":"Overschrijft de weergegeven tekst wanneer het pictogram actief is. Laat leeg om de daadwerkelijke status te gebruiken.","inactive_state":"Inactieve status","inactive_state_description":"Statusstring die \\"inactief\\" voorstelt.","inactive_state_text":"Aangepaste Tekst voor Inactieve Status","inactive_state_text_description":"Overschrijft de weergegeven tekst wanneer het pictogram inactief is. Laat leeg om de daadwerkelijke status te gebruiken.","active_icon":"Actief pictogram","inactive_icon":"Inactief pictogram","active_template":"Actief Sjabloon","active_template_description":"Sjabloon dat evalueert naar waar wanneer het pictogram actief moet zijn.","inactive_template":"Inactief Sjabloon","inactive_template_description":"Sjabloon dat evalueert naar waar wanneer het pictogram inactief moet zijn.","active_icon_color":"Actieve Icoonkleur","inactive_icon_color":"Inactieve Icoonkleur","active_name_color":"Actieve Naamkleur","inactive_name_color":"Inactieve Naamkleur","active_state_color":"Actieve Statuskleur","inactive_state_color":"Inactieve Statuskleur","show_icon_active":"Pictogram tonen bij actief","show_icon_active_description":"Toon het icoon wanneer de status actief is.","show_icon_inactive":"Toon Icoon Indien Inactief","show_icon_inactive_description":"Toon het icoon wanneer de status inactief is.","custom_active_state_text":"Aangepaste Actieve Statustekst","custom_inactive_state_text":"Aangepaste Inactieve Statustekst","action_description":"Actie die wordt uitgevoerd wanneer op het pictogram wordt geklikt.","show_name_active":"Show Name When Active","show_name_active_description":"Display the name when the state is active.","show_name_inactive":"Show Name When Inactive","show_name_inactive_description":"Display the name when the state is inactive.","show_state_active":"Show State When Active","show_state_active_description":"Display the state when the state is active.","show_state_inactive":"Show State When Inactive","show_state_inactive_description":"Display the state when the state is inactive."},"tabs":{"general":"Algemeen","appearance":"Uiterlijk","states":"Statussen","active_state":"Actieve status","inactive_state":"Inactieve status"},"alignments":{"flex-start":"Links","center":"Midden","flex-end":"Rechts","space-between":"Ruimte tussen","space-around":"Ruimte rondom","space-evenly":"Gelijkmatige ruimte"},"vertical_alignments":{"flex-start":"Boven","center":"Midden","flex-end":"Onder"},"spacing":{"none":"Geen","small":"Klein","medium":"Gemiddeld","large":"Groot"},"text_positions":{"below":"Onder icoon","beside":"Naast icoon","none":"Geen tekst","top":"Boven","left":"Links","right":"Rechts"},"reset":{"size":"Reset naar standaardgrootte","color":"Reset naar standaardkleur","all":"Reset naar standaardwaarden"},"click_actions":{"toggle":"Entiteit omschakelen","more-info":"Meer informatie tonen","navigate":"Navigeren naar pad","url":"URL openen","call-service":"Service aanroepen","perform-action":"Actie uitvoeren","location-map":"Locatiekaart tonen","assist":"Spraakassistent","trigger":"Activeren","none":"Geen actie","descriptions":{"toggle":"Schakelt de status van de entiteit om.","more-info":"Opent het meer-info dialoogvenster voor de entiteit.","navigate":"Navigeert naar het opgegeven Lovelace-pad.","url":"Opent de opgegeven URL in een nieuw tabblad.","call-service":"Roept de opgegeven Home Assistant-service aan.","perform-action":"Voert een aangepaste actie uit (zie documentatie).","location-map":"Toont de entiteit op een kaart.","assist":"Opent de Home Assistant-spraakassistent.","trigger":"Activeert de entiteit (automatisering, script, knop, etc.).","none":"Er wordt geen actie uitgevoerd."}},"backgrounds":{"none":"Geen","circle":"Cirkel","square":"Vierkant","rounded_square":"Afgerond vierkant"},"container_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"},"row_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"}},"customize":{"layout":{"title":"Layoutstijl","description":"Kies tussen een enkele of dubbele kolomindeling voor de kaart","header":"Layoutinstellingen"},"layout_types":{"single":"Enkele kolom","double":"Dubbele kolom"},"sections":{"header":"Kaartsecties","arrangement_header":"Sectie-indeling","arrangement_desc_base":"Sleep secties om hun volgorde op de kaart te wijzigen.","arrangement_desc_single_extra":"Alle secties worden weergegeven in een enkele kolom.","arrangement_desc_double_extra":"In een dubbele kolomindeling kun je elke sectie in de linker- of rechterkolom plaatsen."},"section_labels":{"title":"Titel","image":"Voertuigafbeelding","info":"Voertuiginformatie"},"actions":{"collapse_margins":"Marges samenvouwen","expand_margins":"Marges uitvouwen"},"margins":{"top":"Bovenmarge","bottom":"Ondermarge"},"columns":{"left":"Linkerkolom","right":"Rechterkolom","empty":"Sleep secties hierheen"},"css":{"header":"Globale CSS","description":"Voer hier aangepaste CSS-regels in om de standaardstijl van de kaart te overschrijven. Deze regels worden direct toegepast op de kaart. Gebruik met voorzichtigheid.","label":"Aangepaste CSS","input_description":"Voer hier je aangepaste CSS-regels in."}},"backgrounds":{"none":"Geen","circle":"Cirkel","square":"Vierkant","rounded_square":"Afgerond vierkant"},"container_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"},"row_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"},"settings_subtabs":{"general":"Algemeen","action_images":"Actie Afbeeldingen"},"action_images":{"title":"Actie Afbeeldingen Instellingen","description":"Configureer afbeeldingen die worden weergegeven wanneer aan specifieke entiteitstatus wordt voldaan.","add_image":"Actie Afbeelding Toevoegen","no_images":"Er zijn nog geen actie afbeeldingen geconfigureerd. Voeg er een toe om te beginnen.","entity_settings":"Entiteitsinstellingen","entity_placeholder":"Selecteer een entiteit","state_placeholder":"Voer statuswaarde in","image_settings":"Afbeeldingsinstellingen","image_type":{"title":"Afbeeldingstype","description":"Kies hoe de afbeelding wordt aangeleverd","upload":"Afbeelding Uploaden","url":"Afbeelding URL","entity":"Entiteit Afbeelding","none":"Geen"},"delete_confirm":"Weet je zeker dat je deze actie afbeelding wilt verwijderen?","actions":{"duplicate":"Dupliceren","delete":"Verwijderen","expand":"Uitklappen","collapse":"Inklappen","drag":"Slepen om te herordenen"},"preview":{"no_entity":"Geen entiteit geselecteerd","any_state":"Elke status","no_image":"Geen afbeelding"}}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Ontwikkeld door","discord_button":"Word lid van onze Discord","github_button":"Bezoek onze Github","docs_button":"Bekijk onze documentatie","support_title":"Ondersteun Ultra Vehicle Card","support_para":"Je gulle donaties stimuleren de ontwikkeling van geweldige functies voor deze kaart! Zonder de steun van gebruikers zoals jij zou voortdurende innovatie niet mogelijk zijn.","donate_button":"DONEREN (PAYPAL)"},"custom_icons":{"title":"Custom Icons","description":"Define custom icons for different states.","icon_entity":"Icon Entity","default_icon":"Default Icon","state_icons":"State Icons","state":"State","icon":"Icon"},"custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","image_settings":{"title":"Image Settings","description":"Configure the main image appearance.","type":"Image Type","width":"Image Width","crop":"Image Crop","entity":"Image Entity","entity_description":"Entity that provides the image URL"},"action_images":{"title":"Action Images","description":"Define images to display based on entity states. The first matching image in the list (based on priority) will override the main vehicle image.","add":"Add Action Image","duplicate":"Duplicate Action Image","delete":"Delete Action Image","expand":"Expand Settings","collapse":"Collapse Settings","image_prefix":"Image","no_images":"No action images configured.","priority_info":"Drag handles to reorder priority (top = highest).","trigger":"Trigger","entity":"Trigger Entity","entity_description":"Entity whose state will trigger this image.","state":"Trigger State","state_description":"State value that triggers this image.","image_settings":"Image Settings","image_type":"Image Type","image_url":"Image URL","image_entity":"Image Entity","image_width":"Image Width (%)","image_crop":"Image Crop"},"settings_subtabs":{"general":"General","action_images":"Action Images"}}');var ut=a.t(ht,2);const _t=JSON.parse('{"editor":{"tabs":{"settings":"Innstillinger","bars":"Stolper","icons":"Ikoner","customize":"Tilpasse","about":"Om"},"card_settings":{"title":"Korttittel","title_alignment":"Titteljustering","title_size":"Tittelstørrelse","title_description":"Tittel som vises øverst på kortet (valgfritt)","title_alignment_description":"Hvordan korttittelen justeres","title_size_description":"Størrelsen på korttittelen i piksler","format_entities":"Formater Enhetsverdier","format_entities_description":"Aktiver ytterligere formatering av enhetsverdier (legg til kommaer, konverter enheter, osv.)","show_units":"Vis Enheter","show_units_description":"Vis måleenheter ved siden av verdier"},"vehicle_info":{"title":"Kjøretøyinformasjon","location":{"title":"Plasseringsenhet","description":"Velg enheten som viser kjøretøyets nåværende plassering.","show":"Vis Plassering","show_description":"Vis kjøretøyets plassering"},"mileage":{"title":"Kilometerenhet","description":"Velg enheten som representerer kjøretøyets totale kilometerstand eller kilometerteller.","show":"Vis Kilometerstand","show_description":"Vis kjøretøyets kilometerstand"},"car_state":{"title":"Kjøretøytilstandsenhet","description":"Velg enheten som representerer kjøretøyets nåværende tilstand (f.eks. parkert, kjørende, lader).","show":"Vis Kjøretøytilstand","show_description":"Vis kjøretøyets tilstand"}},"images":{"vehicle":{"title":"Kjøretøybilde","description":"Konfigurer hovedbildet som vises for kjøretøyet.","type":"Kjøretøybildetype","width":"Bildebredde","crop":"Beskjær bilde","entity":"Bildeenhet","entity_description":"Enhet som gir bilde-URL"},"action":{"title":"Handlingsbilde","description":"Viser valgfritt et annet bilde når en enhet når en bestemt tilstand (f.eks. vis et ladebilde når bilen er koblet til).","type":"Handlingsbildetype","width":"Bildebredde","crop":"Beskjær bilde","entity":"Handlingsenhet","entity_description":"Enhet som utløser handlingsbildet","state":"Handlingstilstand","state_description":"Tilstandsverdi som utløser handlingsbildet"},"common":{"url_description":"Enter the URL of the image"},"action_images":{"title":"Action Image","description":"Optionally, display a different image when a specific entity reaches a certain state (e.g., show a charging image when the car is plugged in).","type":"Action Image Type","width":"Image Width","crop":"Image Crop","entity":"Action Entity","entity_description":"Entity that triggers the action image","state":"Action State","state_description":"State value that triggers the action image","image_type":{"title":"Image Type","description":"Select the type of image to display","upload":"Upload","url":"URL","entity":"Entity","file":"File"},"image_url":{"title":"Image URL","description":"Enter the URL of the image to display","url":"URL","url_description":"URL pointing to the image","reset":"Reset"}}},"crop":{"title":"Bildebeskjæring","top":"Topp","right":"Høyre","bottom":"Bunn","left":"Venstre","pixels":"px","help":"Angi verdier i piksler (positive eller negative) for å justere beskjæring og utfylling"},"alignment":{"left":"Venstre","center":"Senter","right":"Høyre"},"common":{"choose_file":"Velg fil","no_file_chosen":"Ingen fil valgt","entity":"Enhet","width":"Bredde","width_description":"Bredde som prosent av kortet","none":"Ingen","default":"Standard","upload":"Last opp","url":"URL","url_description":"URL som peker til bildet","reset":"Tilbakestill"},"bars":{"title":"Prosentstolper","description":"Legg til prosentstolper for å vise verdier som drivstoffnivå, batterilading eller rekkevidde. Hver stolpe kan vise en primær prosentverdi med valgfrie etiketter til venstre og høyre.","add":"Legg til ny stolpe","duplicate":"Dupliser stolpe","delete":"Slett stolpe","expand":"Utvid stolpe","collapse":"Skjul stolpe","bar_prefix":"Stolpe","no_entity":"Ingen enhet valgt","tabs":{"config":"Konfigurasjon","colors":"Farger","animation":"Animasjon"},"settings":{"header":"Stolpekonfigurasjon","entity":"Stolpeprosententitet","entity_description":"Velg en enhet som returnerer en prosentverdi (0-100). Dette kontrollerer fyllnivået på stolpen.","limit_entity":"Grenseenhet (valgfritt)","limit_entity_description":"Valgfritt: Legg til en vertikal indikatorlinje på stolpen (f.eks. ladegrense for EV-batteri).","limit_color":"Grenseindikatorfarve","limit_color_description":"Fargen på den vertikale linjen som angir grenseposisjonen på stolpen. Endringer vil tvinge en oppdatering av kortet.","bar_size":"Stolpestørrelse","bar_size_description":"Sett tykkelse/høyde på fremgangsstolpen.","width":"Stolpebredde","width_description":"Setter bredden på stolpen som prosent av kortbredden.","alignment":"Etikettjustering","alignment_description":"Hvordan venstre og høyre etiketter justeres i forhold til hverandre.","bar_radius":"Stolperadius","bar_radius_description":"Form på hjørnene til fremdriftssøylen"},"left_side":{"header":"Venstre Side","toggle_description":"Vis eller skjul venstre side av stolpeetiketten","title":"Venstre Tittel","title_description":"Valgfri etikett som vises på venstre side under stolpen.","entity":"Venstre Enhet","entity_description":"Enhet hvis verdi vises på venstre side av stolpen.","alignment_description":"Kontrollerer hvordan denne etiketten justeres under stolpen.","title_size":"Tittelstørrelse","value_size":"Verdistørrelse","hidden_message":"Venstre side er skjult"},"right_side":{"header":"Høyre Side","toggle_description":"Vis eller skjul høyre side av stolpeetiketten","title":"Høyre Tittel","title_description":"Valgfri etikett som vises på høyre side under stolpen.","entity":"Høyre Enhet","entity_description":"Enhet hvis verdi vises på høyre side av stolpen.","alignment_description":"Kontrollerer hvordan denne etiketten justeres under stolpen.","title_size":"Tittelstørrelse","value_size":"Verdistørrelse","hidden_message":"Høyre side er skjult"},"colors":{"header":"Farger","bar_color":"Stolpefarge","background_color":"Bakgrunnsfarge","border_color":"Kantfarge","limit_indicator_color":"Grenseindikatorfarve","left_title_color":"Venstre Tittelfarge","left_value_color":"Venstre Verdifarge","right_title_color":"Høyre Tittelfarge","right_value_color":"Høyre Verdifarge","reset_color":"Tilbakestill til standardfarge","percentage_text_color":"Percentage Text Color"},"gradient":{"header":"Gradientmodus","toggle":"Bruk gradient","toggle_description":"Bruk en gradient for fremdriftslinjen i stedet for en ensfarget farge","display_mode":"Gradientvisningsmodus","display_mode_full":"Full","display_mode_value_based":"Verdibasert","display_mode_description":"Full: Vis hele gradienten. Verdibasert: Vis gradient opp til gjeldende verdi.","editor_header":"Gradienteditor","add_stop":"Legg til stopp","display_mode_cropped":"[NEEDS TRANSLATION] Cropped"},"animation":{"header":"Handlingsanimasjon","description":"Legg til animasjoner på stolpen når en spesifikk enhet når en bestemt tilstand. Perfekt for å vise ladestatus, alarmtilstander og mer.","pro_tip":"Pro-tips: For \'alltid aktive\' animasjoner, velg en animasjonstype men la enhets- og tilstandsfeltene være tomme. Prøv \'Bobler\' og \'Fyll\' animasjonene!","entity":"Animasjonsenhet","entity_description":"Enhet som utløser animasjonen når den matcher den angitte tilstanden","state":"Enhetstilstand","state_description":"Når enhetstilstanden matcher denne verdien, vil animasjonen bli utløst","type":"Animasjonstype","type_description":"Animasjonseffekten som vises når enhetstilstanden samsvarer","select_entity_prompt":"Velg en Enhet og skriv inn tilstanden du ønsker å utløse animasjonen med (eksempler: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Tynn","regular":"Normal","thick":"Tykk","thiccc":"Ekstra tykk"},"bar_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"},"bar_alignments":{"space-between":"Mellomrom mellom","flex-start":"Venstre","center":"Senter","flex-end":"Høyre"},"animation_types":{"none":"Ingen","charging-lines":"Lading (Diagonale linjer)","pulse":"Pulserende","blinking":"Blinkende","bouncing":"Hoppende","glow":"Glødende","rainbow":"Regnbue","bubbles":"Bobler","fill":"Fyll"},"bar_radius":{"round":"Rund","square":"Firkantet","rounded-square":"Avrundet Firkant"},"custom_bar_settings":{"title":"Custom Bar Settings","description":"Define custom configurations for individual bars.","name":"Bar Name","entity":"Entity","unit":"Unit","min":"Min Value","max":"Max Value","thresholds":"Thresholds","severity":"Severity Map"}},"icons":{"title":"Kortikoner","description":"Legg til ikonrader for å vise flere ikoner på kortet ditt. Hver rad kan konfigureres med forskjellige innstillinger. Merk: Ikonrader og seksjonsrekkefølge kan omorganiseres i Tilpasse-fanen.","add_row":"Legg til ikonrad","duplicate_row":"Dupliser rad","delete_row":"Slett rad","expand_row":"Utvid rad","collapse_row":"Skjul rad","no_row":"Ingen ikonrader er lagt til","row_prefix":"Rad","icon_prefix":"Ikon","row_settings":{"header":"Radinnstillinger","width":"Radbredde","width_description":"Bredde på raden som prosent av kortbredden","alignment":"Radjustering","alignment_description":"Hvordan ikoner justeres i denne raden","spacing":"Ikonavstand","spacing_description":"Mengde mellomrom mellom ikoner i denne raden"},"add_icon":"Legg til ikon","duplicate_icon":"Dupliser ikon","delete_icon":"Slett ikon","expand_icon":"Utvid ikon","collapse_icon":"Skjul ikon","no_icon":"Ingen ikon valgt","icon_settings":{"header":"Ikoninnstillinger","entity":"Enhet","entity_description":"Enhet som vises med dette ikonet","icon":"Ikon","icon_description":"Velg et ikon eller skriv inn et egendefinert ikon","name":"Navn","name_description":"Tilpasset navn som vises under ikonet (bruker enhetsnavn som standard hvis ikke angitt)","show_name":"Vis Navn","show_name_description":"Vis navneteksten under ikonet","show_state":"Vis Tilstand","show_state_description":"Vis enhetens tilstand under ikonet","show_units":"Vis Enheter","show_units_description":"Inkluder enheter når tilstanden vises","text_position":"Tekstposisjon","text_position_description":"Hvor navn- og tilstandsteksten plasseres i forhold til ikonet","click_action":"Klikkehandling","service":"Tjeneste","service_description":"Tjeneste som skal kalles (f.eks. light.turn_on)","service_data":"Tjenestedata (JSON)","service_data_description":"JSON-data sendt med tjenesteanropet","action":"Handling (JSON/Tjeneste)","action_description":"Avansert handlingskonfigurasjon (se dokumentasjon)","navigation_path":"Navigasjonssti","navigation_path_description":"Sti å navigere til (f.eks. /lovelace/dashboard)","url":"URL","url_description":"URL å åpne i ny fane","automation_entity":"Automation Entity","automation_entity_description":"Automation to trigger when clicked"},"icon_appearance":{"header":"Ikonutseende","icon":"Ikonspesifikt","general":"Generelt Utseende","active":"Aktiv Tilstand","inactive":"Inaktiv Tilstand","state_conditions":"Tilstandsbetingelser","advanced":"Avanserte Innstillinger","icon_size":"Ikonstørrelse","icon_size_description":"Størrelse på ikonet i piksler","text_size":"Tekststørrelse","text_size_description":"Størrelse på navn/tilstandstekst i piksler","text_alignment":"Tekstjustering","text_alignment_description":"Hvordan teksten justeres under ikonet","icon_background":"Ikonbakgrunn","icon_background_description":"Legg til en bakgrunnsform bak ikonet","text_appearance":"Tekstutseende","container":{"header":"Containerutseende","width":"Beholderbredde","width_description":"Angi bredden på ikonbeholderen i forhold til raden.","background":"Form på beholderbakgrunn","background_description":"Velg en bakgrunnsform for hele ikonbeholderen.","vertical_alignment":"Vertikal Justering","vertical_alignment_description":"Juster ikonet og teksten vertikalt i beholderen.","container_background_color":"Farge på beholderbakgrunn"},"show_when_active":"Vis ikon når aktivt","show_when_active_description":"Vis dette ikonet kun når det er i en aktiv tilstand","template_mode":"Malmodus","template_mode_description":"Bruk en mal for å bestemme aktiv/inaktiv tilstand.","active_state":"Aktiv tilstand","active_state_description":"Tilstandsstreng som representerer \\"aktiv\\".","active_state_text":"Egendefinert Tekst for Aktiv Tilstand","active_state_text_description":"Overskriver den viste teksten når ikonet er aktivt. La stå tomt for å bruke den faktiske tilstanden.","inactive_state":"Inaktiv tilstand","inactive_state_description":"Tilstandsstreng som representerer \\"inaktiv\\".","inactive_state_text":"Egendefinert Tekst for Inaktiv Tilstand","inactive_state_text_description":"Overskriver den viste teksten når ikonet er inaktivt. La stå tomt for å bruke den faktiske tilstanden.","active_icon":"Aktivt ikon","inactive_icon":"Inaktivt ikon","active_template":"Aktiv Mal","active_template_description":"Mal som evalueres til sann når ikonet skal være aktivt.","inactive_template":"Inaktiv Mal","inactive_template_description":"Mal som evalueres til sann når ikonet skal være inaktivt.","active_icon_color":"Farge på aktivt ikon","inactive_icon_color":"Farge på inaktivt ikon","active_name_color":"Farge på aktivt navn","inactive_name_color":"Farge på inaktivt navn","active_state_color":"Farge på aktiv tilstand","inactive_state_color":"Farge på inaktiv tilstand","show_icon_active":"Vis ikon når aktivt","show_icon_active_description":"Vis ikonet når tilstanden er aktiv.","show_icon_inactive":"Vis ikon når inaktivt","show_icon_inactive_description":"Vis ikonet når tilstanden er inaktiv.","custom_active_state_text":"Egendefinert Aktiv Tilstandstekst","custom_inactive_state_text":"Egendefinert Inaktiv Tilstandstekst","action_description":"Handling som skal utføres når ikonet klikkes på.","show_name_active":"Show Name When Active","show_name_active_description":"Display the name when the state is active.","show_name_inactive":"Show Name When Inactive","show_name_inactive_description":"Display the name when the state is inactive.","show_state_active":"Show State When Active","show_state_active_description":"Display the state when the state is active.","show_state_inactive":"Show State When Inactive","show_state_inactive_description":"Display the state when the state is inactive."},"tabs":{"general":"Generelt","appearance":"Utseende","states":"Tilstander","active_state":"Aktiv Tilstand","inactive_state":"Inaktiv Tilstand"},"alignments":{"flex-start":"Venstre","center":"Senter","flex-end":"Høyre","space-between":"Mellomrom mellom","space-around":"Mellomrom rundt","space-evenly":"Jevnt mellomrom"},"vertical_alignments":{"flex-start":"Topp","center":"Midten","flex-end":"Bunn"},"spacing":{"none":"Ingen","small":"Liten","medium":"Medium","large":"Stor"},"text_positions":{"below":"Under ikonet","beside":"Ved siden av ikonet","none":"Ingen tekst","top":"Topp","left":"Venstre","right":"Høyre"},"reset":{"size":"Tilbakestill til standardstørrelse","color":"Tilbakestill til standardfarge","all":"Tilbakestill til standardverdier"},"click_actions":{"toggle":"Veksle Enhet","more-info":"Vis Mer Informasjon","navigate":"Naviger til Sti","url":"Åpne URL","call-service":"Kall Tjeneste","perform-action":"Utfør Handling","location-map":"Vis Plasseringskart","assist":"Stemmeassistent","trigger":"Trigger","none":"Ingen Handling","descriptions":{"toggle":"Veksler tilstanden til enheten.","more-info":"Åpner mer-info dialogen for enheten.","navigate":"Navigerer til den angitte Lovelace-stien.","url":"Åpner den angitte URL-en i en ny fane.","call-service":"Kaller den angitte Home Assistant-tjenesten.","perform-action":"Utfører en egendefinert handling (se dokumentasjon).","location-map":"Viser enheten på et kart.","assist":"Åpner Home Assistant stemmeassistenten.","trigger":"Triggers the entity (automation, script, button, etc.).","none":"Ingen handling vil bli utført."}},"backgrounds":{"none":"Ingen","circle":"Sirkel","square":"Kvadrat","rounded_square":"Avrundet kvadrat"},"container_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"},"row_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"}},"customize":{"layout":{"title":"Layoutstil","description":"Velg mellom enkelt-kolonne eller dobbelt-kolonne layout for kortet","header":"Layoutinnstillinger"},"layout_types":{"single":"Enkelt kolonne","double":"Dobbelt kolonne"},"sections":{"header":"Kortseksjoner","arrangement_header":"Seksjonsarrangement","arrangement_desc_base":"Dra og slipp seksjoner for å arrangere rekkefølgen på kortet.","arrangement_desc_single_extra":"Alle seksjoner vil vises i en enkelt kolonne.","arrangement_desc_double_extra":"I en dobbelt-kolonne layout kan du plassere alle seksjoner i enten venstre eller høyre kolonne."},"section_labels":{"title":"Tittel","image":"Kjøretøybilde","info":"Kjøretøyinfo"},"actions":{"collapse_margins":"Skjul marginer","expand_margins":"Utvid marginer"},"margins":{"top":"Toppmargin","bottom":"Bunnmargin"},"columns":{"left":"Venstre kolonne","right":"Høyre kolonne","empty":"Slipp seksjoner her"},"css":{"header":"Global CSS","description":"Skriv inn egendefinerte CSS-regler her for å overstyre kortets standardstil. Disse reglene vil bli brukt direkte på kortet. Bruk med forsiktighet.","label":"Egendefinert CSS","input_description":"Skriv inn dine egendefinerte CSS-regler her."}},"backgrounds":{"none":"Ingen","circle":"Sirkel","square":"Kvadrat","rounded_square":"Avrundet kvadrat"},"container_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"},"row_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"},"settings_subtabs":{"general":"Generelt","action_images":"Handlingsbilder"},"action_images":{"title":"Innstillinger for Handlingsbilder","description":"Konfigurer bilder som vil vises når spesifikke entitetstilstander er oppfylt.","add_image":"Legg til Handlingsbilde","no_images":"Ingen handlingsbilder konfigurert ennå. Legg til ett for å komme i gang.","entity_settings":"Entitetsinnstillinger","entity_placeholder":"Velg en entitet","state_placeholder":"Angi tilstandsverdi","image_settings":"Bildeinnstillinger","image_type":{"title":"Bildetype","description":"Velg hvordan du vil levere bildet","upload":"Last opp bilde","url":"Bilde-URL","entity":"Entitetsbilde","none":"Ingen"},"delete_confirm":"Er du sikker på at du vil slette dette handlingsbildet?","actions":{"duplicate":"Dupliser","delete":"Slett","expand":"Utvid","collapse":"Skjul","drag":"Dra for å endre rekkefølge"},"preview":{"no_entity":"Ingen entitet valgt","any_state":"Enhver tilstand","no_image":"Ingen bilde"}}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Utviklet av","discord_button":"Bli med i vår Discord","github_button":"Besøk vår Github","docs_button":"Se vår dokumentasjon","support_title":"Støtt Ultra Vehicle Card","support_para":"Dine generøse donasjoner driver utviklingen av fantastiske funksjoner for dette kortet! Uten støtte fra brukere som deg ville kontinuerlig innovasjon ikke vært mulig.","donate_button":"DONÉR (PAYPAL)"},"custom_icons":{"title":"Custom Icons","description":"Define custom icons for different states.","icon_entity":"Icon Entity","default_icon":"Default Icon","state_icons":"State Icons","state":"State","icon":"Icon"},"custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","image_settings":{"title":"Image Settings","description":"Configure the main image appearance.","type":"Image Type","width":"Image Width","crop":"Image Crop","entity":"Image Entity","entity_description":"Entity that provides the image URL"},"action_images":{"title":"Action Images","description":"Define images to display based on entity states. The first matching image in the list (based on priority) will override the main vehicle image.","add":"Add Action Image","duplicate":"Duplicate Action Image","delete":"Delete Action Image","expand":"Expand Settings","collapse":"Collapse Settings","image_prefix":"Image","no_images":"No action images configured.","priority_info":"Drag handles to reorder priority (top = highest).","trigger":"Trigger","entity":"Trigger Entity","entity_description":"Entity whose state will trigger this image.","state":"Trigger State","state_description":"State value that triggers this image.","image_settings":"Image Settings","image_type":"Image Type","image_url":"Image URL","image_entity":"Image Entity","image_width":"Image Width (%)","image_crop":"Image Crop"},"settings_subtabs":{"general":"General","action_images":"Action Images"}}');var mt=a.t(_t,2);const vt=JSON.parse('{"editor":{"tabs":{"settings":"Innstillingar","bars":"Søyler","icons":"Ikon","customize":"Tilpassa","about":"Om"},"card_settings":{"title":"Korttittel","title_alignment":"Titteljustering","title_size":"Tittelstorleik","title_description":"Tittel som vert vist øvst på kortet (valfritt)","title_alignment_description":"Korleis korttittelen vert justert","title_size_description":"Storleiken på korttittelen i pikslar","format_entities":"Formater Einingsverdi","format_entities_description":"Aktiver ytterlegare formatering av einingsverdi (legg til komma, konverter einingar, osv.)","show_units":"Vis Einingar","show_units_description":"Vis måleeiningar ved sida av verdiar"},"vehicle_info":{"title":"Køyretøyinformasjon","location":{"title":"Plasseringseining","description":"Vel eininga som viser køyretøyet si noverande plassering.","show":"Vis Plassering","show_description":"Vis køyretøyet si plassering"},"mileage":{"title":"Kilometereining","description":"Vel eininga som representerer køyretøyet sin totale kilometerstand eller kilometerteller.","show":"Vis Kilometerstand","show_description":"Vis køyretøyet sin kilometerstand"},"car_state":{"title":"Køyretøytilstandseining","description":"Vel eininga som representerer køyretøyet sin noverande tilstand (t.d. parkert, køyrande, ladar).","show":"Vis Køyretøytilstand","show_description":"Vis køyretøyet sin tilstand"}},"images":{"vehicle":{"title":"Køyretøybilete","description":"Konfigurer hovudbiletet som vert vist for køyretøyet.","type":"Køyretøybiletetype","width":"Biletebreidd","crop":"Skjer biletet","entity":"Bileteeining","entity_description":"Eining som gir bilete-URL"},"action":{"title":"Handlingsbilete","description":"Viser valfritt eit anna bilete når ei eining når ein bestemt tilstand (t.d. vis eit ladebilete når bilen er kopla til).","type":"Handlingsbiletetype","width":"Biletebreidd","crop":"Skjer biletet","entity":"Handlingseining","entity_description":"Eining som utløyser handlingsbiletet","state":"Handlingstilstand","state_description":"Tilstandsverdi som utløyser handlingsbiletet"},"common":{"url_description":"Enter the URL of the image"},"action_images":{"title":"Action Image","description":"Optionally, display a different image when a specific entity reaches a certain state (e.g., show a charging image when the car is plugged in).","type":"Action Image Type","width":"Image Width","crop":"Image Crop","entity":"Action Entity","entity_description":"Entity that triggers the action image","state":"Action State","state_description":"State value that triggers the action image","image_type":{"title":"Image Type","description":"Select the type of image to display","upload":"Upload","url":"URL","entity":"Entity","file":"File"},"image_url":{"title":"Image URL","description":"Enter the URL of the image to display","url":"URL","url_description":"URL pointing to the image","reset":"Reset"}}},"crop":{"title":"Bileteskjering","top":"Topp","right":"Høgre","bottom":"Botn","left":"Venstre","pixels":"px","help":"Angi verdiar i pikslar (positive eller negative) for å justere skjering og utfylling"},"alignment":{"left":"Venstre","center":"Senter","right":"Høgre"},"common":{"choose_file":"Vel fil","no_file_chosen":"Ingen fil vald","entity":"Eining","width":"Breidd","width_description":"Breidd som prosent av kortet","none":"Ingen","default":"Standard","upload":"Last opp","url":"URL","url_description":"URL som peiker til biletet","reset":"Tilbakestill"},"bars":{"title":"Prosentsøyler","description":"Legg til prosentsøyler for å vise verdiar som drivstoffnivå, batterilading eller rekkevidde. Kvar søyle kan vise ein primær prosentverdi med valfrie etikettar til venstre og høgre.","add":"Legg til ny søyle","duplicate":"Dupliser søyle","delete":"Slett søyle","expand":"Utvid søyle","collapse":"Skjul søyle","bar_prefix":"Søyle","no_entity":"Ingen eining vald","tabs":{"config":"Konfigurasjon","colors":"Fargar","animation":"Animasjon"},"settings":{"header":"Søylekonfigurasjon","entity":"Søyleprosenteining","entity_description":"Vel ei eining som returnerer ein prosentverdi (0-100). Dette kontrollerer fyllnivået på søylen.","limit_entity":"Grenseeining (valfritt)","limit_entity_description":"Valfritt: Legg til ei vertikal indikatorlinje på søylen (t.d. ladegrense for EV-batteri).","limit_color":"Grenseindikatorfarve","limit_color_description":"Fargen på den vertikale linja som angir grenseposisjonen på søylen. Endringar vil tvinge ei oppdatering av kortet.","bar_size":"Søylestorleik","bar_size_description":"Set tjuknad/høgde på framgangssøylen.","width":"Søylebreidd","width_description":"Set breidda på søylen som prosent av kortbreidda.","alignment":"Etikettjustering","alignment_description":"Korleis venstre og høgre etikettar vert justert i forhold til kvarandre.","bar_radius":"Stolperadius","bar_radius_description":"Form på hjørna til framgangssøyla"},"left_side":{"header":"Venstre Side","toggle_description":"Vis eller skjul venstre side av søyleetiketten","title":"Venstre Tittel","title_description":"Valfri etikett som vert vist på venstre side under søylen.","entity":"Venstre Eining","entity_description":"Eining som får verdien vist på venstre side av søylen.","alignment_description":"Kontrollerer korleis denne etiketten vert justert under søylen.","title_size":"Tittelstorleik","value_size":"Verdistorleik","hidden_message":"Venstre side er skjult"},"right_side":{"header":"Høgre Side","toggle_description":"Vis eller skjul høgre side av søyleetiketten","title":"Høgre Tittel","title_description":"Valfri etikett som vert vist på høgre side under søylen.","entity":"Høgre Eining","entity_description":"Eining som får verdien vist på høgre side av søylen.","alignment_description":"Kontrollerer korleis denne etiketten vert justert under søylen.","title_size":"Tittelstorleik","value_size":"Verdistorleik","hidden_message":"Høgre side er skjult"},"colors":{"header":"Fargar","bar_color":"Søylefarge","background_color":"Bakgrunnsfarge","border_color":"Kantfarge","limit_indicator_color":"Grenseindikatorfarve","left_title_color":"Venstre Tittelfarge","left_value_color":"Venstre Verdifarge","right_title_color":"Høgre Tittelfarge","right_value_color":"Høgre Verdifarge","reset_color":"Tilbakestill til standardfarge","percentage_text_color":"Percentage Text Color"},"gradient":{"header":"Gradientmodus","toggle":"Bruk gradient","toggle_description":"Bruk ein gradient for framdriftslinja i staden for ein einsfarga farge","display_mode":"Gradientvisningsmodus","display_mode_full":"Full","display_mode_value_based":"Verdibasert","display_mode_description":"Full: Vis heile gradienten. Verdibasert: Vis gradient opp til gjeldande verdi.","editor_header":"Gradientredigerar","add_stop":"Legg til stopp","display_mode_cropped":"[NEEDS TRANSLATION] Cropped"},"animation":{"header":"Handlingsanimasjon","description":"Legg til animasjonar på søylen når ei spesifikk eining når ein bestemt tilstand. Perfekt for å vise ladestatus, alarmtilstandar og meir.","pro_tip":"Pro-tips: For \'alltid aktive\' animasjonar, vel ein animasjonstype men la einings- og tilstandsfelta vere tomme. Prøv \'Bobler\' og \'Fyll\' animasjonane!","entity":"Animasjonseining","entity_description":"Eining som utløyser animasjonen når den matchar den angitte tilstanden","state":"Einingstilstand","state_description":"Når einingstilstanden matchar denne verdien, vil animasjonen bli utløyst","type":"Animasjonstype","type_description":"Animasjonseffekten som vert vist når einingstilstanden samsvarar","select_entity_prompt":"Vel ei Eining og skriv inn tilstanden du ønskjer å utløyse animasjonen med (døme: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Tynn","regular":"Normal","thick":"Tjukk","thiccc":"Ekstra tjukk"},"bar_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"},"bar_alignments":{"space-between":"Mellomrom mellom","flex-start":"Venstre","center":"Senter","flex-end":"Høgre"},"animation_types":{"none":"Ingen","charging-lines":"Lading (Diagonale linjer)","pulse":"Pulserande","blinking":"Blinkande","bouncing":"Hoppande","glow":"Glødande","rainbow":"Regnboge","bubbles":"Bobler","fill":"Fyll"},"bar_radius":{"round":"Rund","square":"Firkantet","rounded-square":"Avrunda Firkant"},"custom_bar_settings":{"title":"Custom Bar Settings","description":"Define custom configurations for individual bars.","name":"Bar Name","entity":"Entity","unit":"Unit","min":"Min Value","max":"Max Value","thresholds":"Thresholds","severity":"Severity Map"}},"icons":{"title":"Kortikon","description":"Legg til ikonrader for å vise fleire ikon på kortet ditt. Kvar rad kan konfigurerast med forskjellige innstillingar. Merk: Ikonrader og seksjonsrekkjefølgje kan omorganiserast i Tilpassa-fanen.","add_row":"Legg til ikonrad","duplicate_row":"Dupliser rad","delete_row":"Slett rad","expand_row":"Utvid rad","collapse_row":"Skjul rad","no_row":"Ingen ikonrader er lagt til","row_prefix":"Rad","icon_prefix":"Ikon","row_settings":{"header":"Radinnstillingar","width":"Radbreidd","width_description":"Breidd på raden som prosent av kortbreidda","alignment":"Radjustering","alignment_description":"Korleis ikon vert justert i denne raden","spacing":"Ikonavstand","spacing_description":"Mengde mellomrom mellom ikon i denne raden"},"add_icon":"Legg til ikon","duplicate_icon":"Dupliser ikon","delete_icon":"Slett ikon","expand_icon":"Utvid ikon","collapse_icon":"Skjul ikon","no_icon":"Ingen ikon vald","icon_settings":{"header":"Ikoninnstillingar","entity":"Eining","entity_description":"Eining som vert vist med dette ikonet","icon":"Ikon","icon_description":"Vel eit ikon eller skriv inn eit eigendefinert ikon","name":"Namn","name_description":"Tilpassa namn som vert vist under ikonet (brukar einingsnamn som standard viss ikkje spesifisert)","show_name":"Vis Namn","show_name_description":"Vis namneteksten under ikonet","show_state":"Vis Tilstand","show_state_description":"Vis eininga sin tilstand under ikonet","show_units":"Vis Einingar","show_units_description":"Inkluder einingar når tilstanden vert vist","text_position":"Tekstposisjon","text_position_description":"Kor namn- og tilstandsteksten vert plassert i forhold til ikonet","click_action":"Klikkehandling","service":"Teneste","service_description":"Teneste som skal kallast (t.d. light.turn_on)","service_data":"Tenestedata (JSON)","service_data_description":"JSON-data sendt med tenesteoppkallet","action":"Handling (JSON/Teneste)","action_description":"Avansert handlingskonfigurasjon (sjå dokumentasjon)","navigation_path":"Navigasjonssti","navigation_path_description":"Sti å navigere til (f.eks. /lovelace/dashboard)","url":"URL","url_description":"URL å åpne i ny fane","automation_entity":"Automation Entity","automation_entity_description":"Automation to trigger when clicked"},"icon_appearance":{"header":"Ikonutforming","icon":"Ikonspesifikt","general":"Generell Utsjånad","active":"Aktiv Tilstand","inactive":"Inaktiv Tilstand","state_conditions":"Tilstandsbetingelsar","advanced":"Avanserte Innstillingar","icon_size":"Ikonstorleik","icon_size_description":"Storleik på ikonet i pikslar","text_size":"Tekststorleik","text_size_description":"Storleik på namn/tilstandstekst i pikslar","text_alignment":"Tekstjustering","text_alignment_description":"Korleis teksten vert justert under ikonet","icon_background":"Ikonbakgrunn","icon_background_description":"Legg til ei bakgrunnsform bak ikonet","text_appearance":"Tekstutforming","container":{"header":"Containerutsjånad","width":"Behaldar Breidde","width_description":"Angi breidda på ikonbehaldaren i høve til rada.","background":"Form på behaldarbakgrunn","background_description":"Vel ein bakgrunnsform for heile ikonbehaldaren.","container_background_color":"Farge på behaldarbakgrunn","vertical_alignment":"Vertikal Justering","vertical_alignment_description":"Juster ikon og tekst vertikalt inne i behaldaren."},"show_when_active":"Vis ikon når aktivt","show_when_active_description":"Vis dette ikonet berre når det er i ein aktiv tilstand","template_mode":"Malmodus","template_mode_description":"Bruk ein mal for å avgjera aktiv/inaktiv tilstand.","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","active_state":"Aktiv tilstand","active_state_description":"Tilstandsstreng som representerer \\"aktiv\\".","active_state_text":"Eigendefinert Tekst for Aktiv Tilstand","active_state_text_description":"Overskriv den viste teksten når ikonet er aktivt. Lat vere tomt for å bruke den faktiske tilstanden.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","inactive_state":"Inaktiv tilstand","inactive_state_description":"Tilstandsstreng som representerer \\"inaktiv\\".","inactive_state_text":"Eigendefinert Tekst for Inaktiv Tilstand","inactive_state_text_description":"Overskriv den viste teksten når ikonet er inaktivt. Lat vere tomt for å bruke den faktiske tilstanden.","active_icon":"Aktivt ikon","inactive_icon":"Inaktivt ikon","show_icon_active":"Vis ikon når aktiv","show_icon_active_description":"Vis ikonet når tilstanden er aktiv.","show_icon_inactive":"Vis ikon når inaktivt","show_icon_inactive_description":"Vis ikonet når tilstanden er inaktiv.","custom_active_state_text":"Eigendefinert Aktiv Tilstandstekst","custom_inactive_state_text":"Eigendefinert Inaktiv Tilstandstekst","action_description":"Handling som skal utførast når ikonet vert klikka på.","active_icon_color":"Active Icon Color","inactive_icon_color":"Inactive Icon Color","active_name_color":"Active Name Color","inactive_name_color":"Inactive Name Color","active_state_color":"Active State Color","inactive_state_color":"Inactive State Color","show_name_active":"Show Name When Active","show_name_active_description":"Display the name when the state is active.","show_name_inactive":"Show Name When Inactive","show_name_inactive_description":"Display the name when the state is inactive.","show_state_active":"Show State When Active","show_state_active_description":"Display the state when the state is active.","show_state_inactive":"Show State When Inactive","show_state_inactive_description":"Display the state when the state is inactive."},"tabs":{"general":"Generelt","appearance":"Utsjånad","states":"Tilstandar","active_state":"Aktiv Tilstand","inactive_state":"Inaktiv Tilstand"},"alignments":{"flex-start":"Venstre","center":"Senter","flex-end":"Høgre","space-between":"Mellomrom mellom","space-around":"Mellomrom rundt","space-evenly":"Jamnt mellomrom"},"vertical_alignments":{"flex-start":"Topp","center":"Midten","flex-end":"Botn"},"spacing":{"none":"Ingen","small":"Liten","medium":"Medium","large":"Stor"},"text_positions":{"below":"Under ikonet","beside":"Ved sida av ikonet","none":"Ingen tekst","top":"Topp","left":"Venstre","right":"Høgre"},"reset":{"size":"Tilbakestill til standardstorleik","color":"Tilbakestill til standardfarge","all":"Tilbakestill til standardverdiar"},"click_actions":{"toggle":"Slå på/av eining","more-info":"Vis meir informasjon","navigate":"Naviger til sti","url":"Opne URL","call-service":"Kall teneste","perform-action":"Utfør handling","location-map":"Vis plasseringskart","assist":"Stemmeassistent","trigger":"Trigger","none":"Inga handling","descriptions":{"toggle":"Veksler tilstanden til eininga.","more-info":"Opnar meir-info dialogen for eininga.","navigate":"Navigerer til den spesifiserte Lovelace-stien.","url":"Opnar den spesifiserte URL-en i ein ny fane.","call-service":"Kallar den spesifiserte Home Assistant-tenesta.","perform-action":"Utfører ei tilpassa handling (sjå dokumentasjon).","location-map":"Viser eininga på eit kart.","assist":"Opnar Home Assistant stemmeassistenten.","trigger":"Triggers the entity (automation, script, button, etc.).","none":"Inga handling vil bli utført."}},"backgrounds":{"none":"Ingen","circle":"Sirkel","square":"Kvadrat","rounded_square":"Avrunda kvadrat"},"container_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"},"row_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"}},"customize":{"layout":{"title":"Layoutstil","description":"Vel mellom enkelt-kolonne eller dobbelt-kolonne layout for kortet","header":"Layoutinnstillingar"},"layout_types":{"single":"Enkelt kolonne","double":"Dobbelt kolonne"},"sections":{"header":"Kortseksjonar","arrangement_header":"Seksjonsarrangement","arrangement_desc_base":"Dra og slepp seksjonar for å arrangere rekkjefølgja på kortet.","arrangement_desc_single_extra":"Alle seksjonar vil bli vist i ei enkelt kolonne.","arrangement_desc_double_extra":"I ein dobbelt-kolonne layout kan du plassere alle seksjonar i anten venstre eller høgre kolonne."},"section_labels":{"title":"Tittel","image":"Køyretøybilete","info":"Køyretøyinfo"},"actions":{"collapse_margins":"Skjul marginar","expand_margins":"Utvid marginar"},"margins":{"top":"Toppmargine","bottom":"Botnmargine"},"columns":{"left":"Venstre kolonne","right":"Høgre kolonne","empty":"Slepp seksjonar her"},"css":{"header":"Global CSS","description":"Skriv inn eigendefinerte CSS-reglar her for å overstyre kortet sin standardstil. Desse reglane vil bli brukt direkte på kortet. Bruk med varsemd.","label":"Eigendefinert CSS","input_description":"Skriv inn dine eigendefinerte CSS-reglar her."}},"backgrounds":{"none":"Ingen","circle":"Sirkel","square":"Kvadrat","rounded_square":"Avrunda kvadrat"},"container_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"},"row_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"},"settings_subtabs":{"general":"Generelt","action_images":"Handlingsbilete"},"action_images":{"title":"Innstillingar for Handlingsbilete","description":"Konfigurer bilete som vil visast når spesifikke entitetstilstandar er oppfylte.","add_image":"Legg til Handlingsbilete","no_images":"Ingen handlingsbilete konfigurert enno. Legg til eitt for å kome i gang.","entity_settings":"Entitetsinnstillingar","entity_placeholder":"Vel ein entitet","state_placeholder":"Angi tilstandsverdi","image_settings":"Bileteinnstillingar","image_type":{"title":"Biletetype","description":"Vel korleis du vil levere biletet","upload":"Last opp bilete","url":"Bilete-URL","entity":"Entitetsbilete","none":"Ingen"},"delete_confirm":"Er du sikker på at du vil slette dette handlingsbiletet?","actions":{"duplicate":"Dupliser","delete":"Slett","expand":"Utvid","collapse":"Skjul","drag":"Dra for å endre rekkefølgje"},"preview":{"no_entity":"Ingen entitet vald","any_state":"Einkvar tilstand","no_image":"Ingen bilete"}}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Utvikla av","discord_button":"Bli med i vår Discord","github_button":"Besøk vår Github","docs_button":"Sjå vår dokumentasjon","support_title":"Støtt Ultra Vehicle Card","support_para":"Dine generøse donasjonar driv utviklinga av fantastiske funksjonar for dette kortet! Utan støtte frå brukarar som deg ville kontinuerleg innovasjon ikkje vore mogleg.","donate_button":"DONÉR (PAYPAL)"},"custom_icons":{"title":"Custom Icons","description":"Define custom icons for different states.","icon_entity":"Icon Entity","default_icon":"Default Icon","state_icons":"State Icons","state":"State","icon":"Icon"},"custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","image_settings":{"title":"Image Settings","description":"Configure the main image appearance.","type":"Image Type","width":"Image Width","crop":"Image Crop","entity":"Image Entity","entity_description":"Entity that provides the image URL"},"action_images":{"title":"Action Images","description":"Define images to display based on entity states. The first matching image in the list (based on priority) will override the main vehicle image.","add":"Add Action Image","duplicate":"Duplicate Action Image","delete":"Delete Action Image","expand":"Expand Settings","collapse":"Collapse Settings","image_prefix":"Image","no_images":"No action images configured.","priority_info":"Drag handles to reorder priority (top = highest).","trigger":"Trigger","entity":"Trigger Entity","entity_description":"Entity whose state will trigger this image.","state":"Trigger State","state_description":"State value that triggers this image.","image_settings":"Image Settings","image_type":"Image Type","image_url":"Image URL","image_entity":"Image Entity","image_width":"Image Width (%)","image_crop":"Image Crop"},"settings_subtabs":{"general":"General","action_images":"Action Images"}}');var bt=a.t(vt,2);const ft=JSON.parse('{"editor":{"tabs":{"settings":"Inställningar","bars":"Staplar","icons":"Ikoner","customize":"Anpassa","about":"Om"},"card_settings":{"title":"Korttitel","title_alignment":"Titeljustering","title_size":"Titelstorlek","title_description":"Titel som visas överst på kortet (valfritt)","title_alignment_description":"Hur korttiteln justeras","title_size_description":"Storlek på korttiteln i pixlar","format_entities":"Formatera Entitetsvärden","format_entities_description":"Aktivera ytterligare formatering av entitetsvärden (lägg till kommatecken, konvertera enheter, etc.)","show_units":"Visa Enheter","show_units_description":"Visa måttenheter bredvid värden"},"vehicle_info":{"title":"Fordonsinformation","location":{"title":"Platsentitet","description":"Välj entiteten som visar fordonets nuvarande plats.","show":"Visa Plats","show_description":"Visa fordonets plats"},"mileage":{"title":"Milentitet","description":"Välj entiteten som representerar fordonets totala körsträcka eller vägmätare.","show":"Visa Körsträcka","show_description":"Visa fordonets körsträcka"},"car_state":{"title":"Fordonstillståndsentitet","description":"Välj entiteten som representerar fordonets nuvarande tillstånd (t.ex. parkerad, körning, laddning).","show":"Visa Fordonstillstånd","show_description":"Visa fordonets tillstånd"}},"images":{"vehicle":{"title":"Fordonsbild","description":"Konfigurera huvudbilden som visas för fordonet.","type":"Fordonsbildtyp","width":"Bildbredd","crop":"Beskär Bild","entity":"Bildentitet","entity_description":"Entitet som tillhandahåller bild-URL"},"action":{"title":"Åtgärdsbild","description":"Visa valfritt en annan bild när en entitet når ett visst tillstånd (t.ex. visa en laddningsbild när bilen är inkopplad).","type":"Åtgärdsbildtyp","width":"Bildbredd","crop":"Beskär Bild","entity":"Åtgärdsentitet","entity_description":"Entitet som utlöser åtgärdsbilden","state":"Åtgärdstillstånd","state_description":"Tillståndsvärde som utlöser åtgärdsbilden"},"common":{"url_description":"Enter the URL of the image"},"action_images":{"title":"Action Image","description":"Optionally, display a different image when a specific entity reaches a certain state (e.g., show a charging image when the car is plugged in).","type":"Action Image Type","width":"Image Width","crop":"Image Crop","entity":"Action Entity","entity_description":"Entity that triggers the action image","state":"Action State","state_description":"State value that triggers the action image","image_type":{"title":"Image Type","description":"Select the type of image to display","upload":"Upload","url":"URL","entity":"Entity","file":"File"},"image_url":{"title":"Image URL","description":"Enter the URL of the image to display","url":"URL","url_description":"URL pointing to the image","reset":"Reset"},"automation_entity":"Automation Entity","automation_entity_description":"Automation to trigger when clicked"}},"crop":{"title":"Bildbeskärning","top":"Övre","right":"Höger","bottom":"Nedre","left":"Vänster","pixels":"px","help":"Ange värden i pixlar (positiva eller negativa) för att justera beskärning och utfyllnad"},"alignment":{"left":"Vänster","center":"Centrera","right":"Höger"},"common":{"choose_file":"Välj Fil","no_file_chosen":"Ingen fil vald","entity":"Entitet","width":"Bredd","width_description":"Bredd som procent av kortet","none":"Ingen","default":"Standard","upload":"Ladda upp","url":"URL","url_description":"URL som pekar på bilden","reset":"Återställ"},"bars":{"title":"Procentstaplar","description":"Lägg till procentstaplar för att visa värden som bränslenivå, batteriladdning eller räckvidd. Varje stapel kan visa ett primärt procentvärde med valfria etiketter till vänster och höger.","add":"Lägg till ny stapel","duplicate":"Duplicera stapel","delete":"Ta bort stapel","expand":"Expandera stapel","collapse":"Fäll ihop stapel","bar_prefix":"Stapel","no_entity":"Ingen entitet vald","tabs":{"config":"Konfiguration","colors":"Färger","animation":"Animation"},"settings":{"header":"Stapelkonfiguration","entity":"Stapelprocentsentitet","entity_description":"Välj en entitet som returnerar ett procentvärde (0-100). Detta styr fyllnadsnivån på stapeln.","limit_entity":"Gränsentitet (valfritt)","limit_entity_description":"Valfritt: Lägg till en vertikal indikatorlinje på stapeln (t.ex. laddningsgräns för elbilsbatteri).","limit_color":"Gränsindikatorsfärg","limit_color_description":"Färg på den vertikala linjen som indikerar gränspositionen på stapeln. Ändringar tvingar en uppdatering av kortet.","bar_size":"Stapelstorlek","bar_size_description":"Ställer in tjocklek/höjd på förloppsstapeln.","width":"Stapelbredd","width_description":"Ställer in bredden på stapeln som procent av kortbredden.","alignment":"Etikettjustering","alignment_description":"Hur vänster- och högeretiketter justeras i förhållande till varandra.","bar_radius":"Hörn på stapel","bar_radius_description":"Form på hörnen av förloppsstapeln"},"left_side":{"header":"Vänster Sida","toggle_description":"Visa eller dölj vänster sida av stapeletiketten","title":"Vänster Titel","title_description":"Valfri etikett som visas på vänster sida under stapeln.","entity":"Vänster Entitet","entity_description":"Entitet vars värde visas på vänster sida av stapeln.","alignment_description":"Kontrollerar hur denna etikett justeras under stapeln.","title_size":"Titelstorlek","value_size":"Värdestorlek","hidden_message":"Vänster sida är dold"},"right_side":{"header":"Höger Sida","toggle_description":"Visa eller dölj höger sida av stapeletiketten","title":"Höger Titel","title_description":"Valfri etikett som visas på höger sida under stapeln.","entity":"Höger Entitet","entity_description":"Entitet vars värde visas på höger sida av stapeln.","alignment_description":"Kontrollerar hur denna etikett justeras under stapeln.","title_size":"Titelstorlek","value_size":"Värdestorlek","hidden_message":"Höger sida är dold"},"colors":{"header":"Färger","bar_color":"Stapelfärg","background_color":"Bakgrundsfärg","border_color":"Kantfärg","limit_indicator_color":"Gränsindikatorsfärg","left_title_color":"Vänster Titelfärg","left_value_color":"Vänster Värdefärg","right_title_color":"Höger Titelfärg","right_value_color":"Höger Värdefärg","reset_color":"Återställ till standardfärg","percentage_text_color":"Percentage Text Color"},"gradient":{"header":"Gradientläge","toggle":"Använd gradient","toggle_description":"Använd en gradient för förloppsindikatorn istället för en enfärgad färg","display_mode":"Gradientvisningsläge","display_mode_full":"Fullständig","display_mode_value_based":"Värdebaserad","display_mode_description":"Fullständig: Visa hela gradienten. Värdebaserad: Visa gradient upp till aktuellt värde.","editor_header":"Gradientredigerare","add_stop":"Lägg till stopp","display_mode_cropped":"[NEEDS TRANSLATION] Cropped"},"animation":{"header":"Åtgärdsanimation","description":"Lägg till animationer på stapeln när en specifik entitet når ett visst tillstånd. Perfekt för att visa laddningsstatus, larmtillstånd och mer.","pro_tip":"Proffstips: För \'alltid aktiva\' animationer, välj en animationstyp men lämna entitets- och tillståndsfälten tomma. Prova \'Bubblor\' och \'Fyll\' animationerna!","entity":"Animationsentitet","entity_description":"Entitet som utlöser animationen när den matchar det angivna tillståndet","state":"Entitetstillstånd","state_description":"När entitetens tillstånd matchar detta värde kommer animationen att utlösas","type":"Animationstyp","type_description":"Animationseffekten som visas när entitetens tillstånd matchar","select_entity_prompt":"Välj en Entitet och ange tillståndet du vill utlösa animationen med (exempel: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Tunn","regular":"Normal","thick":"Tjock","thiccc":"Extra tjock"},"bar_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (Full bredd)"},"bar_alignments":{"space-between":"Utrymme mellan","flex-start":"Vänster","center":"Centrera","flex-end":"Höger"},"animation_types":{"none":"Ingen","charging-lines":"Laddning (Diagonala linjer)","pulse":"Puls","blinking":"Blinkande","bouncing":"Studsande","glow":"Glödande","rainbow":"Regnbåge","bubbles":"Bubblor","fill":"Fyll"},"bar_radius":{"round":"Rund","square":"Fyrkantig","rounded-square":"Rundad Fyrkant"},"custom_bar_settings":{"title":"Custom Bar Settings","description":"Define custom configurations for individual bars.","name":"Bar Name","entity":"Entity","unit":"Unit","min":"Min Value","max":"Max Value","thresholds":"Thresholds","severity":"Severity Map"}},"icons":{"title":"Kortikoner","description":"Lägg till ikonrader för att visa flera ikoner på ditt kort. Varje rad kan konfigureras med olika inställningar. Obs: Ikonrader och sektionsordning kan omorganiseras i fliken Anpassa.","add_row":"Lägg till ikonrad","duplicate_row":"Duplicera rad","delete_row":"Ta bort rad","expand_row":"Expandera rad","collapse_row":"Fäll ihop rad","no_row":"Inga ikonrader har lagts till","row_prefix":"Rad","icon_prefix":"Ikon","row_settings":{"header":"Radinställningar","width":"Radbredd","width_description":"Bredd på raden som procent av kortbredden","alignment":"Radjustering","alignment_description":"Hur ikoner justeras i denna rad","spacing":"Ikonavstånd","spacing_description":"Mängd utrymme mellan ikoner i denna rad"},"add_icon":"Lägg till ikon","duplicate_icon":"Duplicera ikon","delete_icon":"Ta bort ikon","expand_icon":"Expandera ikon","collapse_icon":"Fäll ihop ikon","no_icon":"Ingen ikon vald","icon_settings":{"header":"Ikoninställningar","entity":"Entitet","entity_description":"Entitet som visas med denna ikon","icon":"Ikon","icon_description":"Välj en ikon eller ange en anpassad ikon","name":"Namn","name_description":"Anpassat namn som visas under ikonen (använder entitetsnamn som standard om inte angivet)","show_name":"Visa Namn","show_name_description":"Visa namntexten under ikonen","show_state":"Visa Tillstånd","show_state_description":"Visa entitetens tillstånd under ikonen","show_units":"Visa Enheter","show_units_description":"Inkludera enheter när tillståndet visas","text_position":"Textposition","text_position_description":"Var namn- och tillståndstexten placeras i förhållande till ikonen","click_action":"Klickåtgärd","service":"Tjänst","service_description":"Tjänst att anropa (t.ex. light.turn_on)","service_data":"Tjänstdata (JSON)","service_data_description":"JSON-data som skickas med tjänstanropet","action":"Åtgärd (JSON/Tjänst)","action_description":"Avancerad åtgärdskonfiguration (se dokumentation)","navigation_path":"Navigationssökväg","navigation_path_description":"Sökväg att navigera till (t.ex. /lovelace/dashboard)","url":"URL","url_description":"URL att öppna i en ny flik","automation_entity":"Automation Entity","automation_entity_description":"Automation to trigger when clicked"},"icon_appearance":{"header":"Ikonutseende","icon":"Ikonspecifikt","general":"Allmänt Utseende","active":"Aktivt Tillstånd","inactive":"Inaktivt Tillstånd","state_conditions":"Tillståndsvillkor","advanced":"Avancerade Inställningar","icon_size":"Ikonstorlek","icon_size_description":"Storlek på ikonen i pixlar","text_size":"Textstorlek","text_size_description":"Storlek på namn/tillståndstext i pixlar","text_alignment":"Textjustering","text_alignment_description":"Hur texten justeras under ikonen","icon_background":"Ikonbakgrund","icon_background_description":"Lägg till en bakgrundsform bakom ikonen","text_appearance":"Textutseende","container":{"header":"Containerutseende","width":"Behållarbredd","width_description":"Ange bredden på ikonbehållaren i förhållande till raden.","background":"Behållarens bakgrundsform","background_description":"Välj en bakgrundsform för hela ikonbehållaren.","vertical_alignment":"Vertikal Justering","vertical_alignment_description":"Justera ikonen och texten vertikalt inom behållaren.","container_background_color":"Behållarens bakgrundsfärg"},"show_when_active":"Visa ikon när aktiv","show_when_active_description":"Visa denna ikon endast när den är i ett aktivt tillstånd","template_mode":"Mallläge","template_mode_description":"Använd en mall för att bestämma aktivt/inaktivt tillstånd.","active_state":"Aktivt tillstånd","active_state_description":"Tillståndssträng som representerar \\"aktiv\\".","active_state_text":"Anpassad Text för Aktivt Tillstånd","active_state_text_description":"Åsidosätter den visade texten när ikonen är aktiv. Lämna tomt för att använda det faktiska tillståndet.","inactive_state":"Inaktivt tillstånd","inactive_state_description":"Tillståndssträng som representerar \\"inaktiv\\".","inactive_state_text":"Anpassad Text för Inaktivt Tillstånd","inactive_state_text_description":"Åsidosätter den visade texten när ikonen är inaktiv. Lämna tomt för att använda det faktiska tillståndet.","active_icon":"Aktiv ikon","inactive_icon":"Inaktiv ikon","active_template":"Aktiv Mall","active_template_description":"Mall som evalueras till sant när ikonen ska vara aktiv.","inactive_template":"Inaktiv Mall","inactive_template_description":"Mall som evalueras till sant när ikonen ska vara inaktiv.","active_icon_color":"Färg på aktiv ikon","inactive_icon_color":"Färg på inaktiv ikon","active_name_color":"Färg på aktivt namn","inactive_name_color":"Färg på inaktivt namn","active_state_color":"Färg på aktivt tillstånd","inactive_state_color":"Färg på inaktivt tillstånd","show_icon_active":"Visa ikon när aktiv","show_icon_active_description":"Visa ikonen när tillståndet är aktivt.","show_icon_inactive":"Visa ikon när inaktiv","show_icon_inactive_description":"Visa ikonen när tillståndet är inaktivt.","custom_active_state_text":"Anpassad Aktiv Statustext","custom_inactive_state_text":"Anpassad Inaktiv Statustext","action_description":"Åtgärd som ska utföras när ikonen klickas på.","show_name_active":"Show Name When Active","show_name_active_description":"Display the name when the state is active.","show_name_inactive":"Show Name When Inactive","show_name_inactive_description":"Display the name when the state is inactive.","show_state_active":"Show State When Active","show_state_active_description":"Display the state when the state is active.","show_state_inactive":"Show State When Inactive","show_state_inactive_description":"Display the state when the state is inactive."},"tabs":{"general":"Allmänt","appearance":"Utseende","states":"Tillstånd","active_state":"Aktivt Tillstånd","inactive_state":"Inaktivt Tillstånd"},"alignments":{"flex-start":"Vänster","center":"Centrera","flex-end":"Höger","space-between":"Utrymme mellan","space-around":"Utrymme runt","space-evenly":"Jämnt utrymme"},"vertical_alignments":{"flex-start":"Övre","center":"Mitten","flex-end":"Nedre"},"spacing":{"none":"Inget","small":"Litet","medium":"Medium","large":"Stort"},"text_positions":{"below":"Under ikonen","beside":"Bredvid ikonen","none":"Ingen text","top":"Övre","left":"Vänster","right":"Höger"},"reset":{"size":"Återställ till standardstorlek","color":"Återställ till standardfärg","all":"Återställ till standardvärden"},"click_actions":{"toggle":"Växla entitet","more-info":"Visa mer information","navigate":"Navigera till sökväg","url":"Öppna URL","call-service":"Anropa tjänst","perform-action":"Utför åtgärd","location-map":"Visa platskarta","assist":"Röstassistent","trigger":"Trigger","none":"Ingen åtgärd","descriptions":{"toggle":"Växlar entitetens tillstånd.","more-info":"Öppnar mer information-dialogen för entiteten.","navigate":"Navigerar till den angivna Lovelace-sökvägen.","url":"Öppnar den angivna URL:en i en ny flik.","call-service":"Anropar den angivna Home Assistant-tjänsten.","perform-action":"Utför en anpassad åtgärd (se dokumentation).","location-map":"Visar enheten på en karta.","assist":"Öppnar Home Assistant röstassistenten.","trigger":"Triggers the entity (automation, script, button, etc.).","none":"Ingen åtgärd kommer att utföras."}},"backgrounds":{"none":"Ingen","circle":"Cirkel","square":"Kvadrat","rounded_square":"Rundad kvadrat"},"container_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (Full bredd)"},"row_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (Full bredd)"}},"customize":{"layout":{"title":"Layoutstil","description":"Välj mellan enkel- eller dubbelkolumnlayout för kortet","header":"Layoutinställningar"},"layout_types":{"single":"Enkel kolumn","double":"Dubbel kolumn"},"sections":{"header":"Kortsektioner","arrangement_header":"Sektionsarrangemang","arrangement_desc_base":"Dra och släpp sektioner för att arrangera deras ordning på kortet.","arrangement_desc_single_extra":"Alla sektioner kommer att visas i en enkel kolumn.","arrangement_desc_double_extra":"I en dubbelkolumnlayout kan du placera alla sektioner i antingen vänster eller höger kolumn."},"section_labels":{"title":"Titel","image":"Fordonsbild","info":"Fordonsinfo"},"actions":{"collapse_margins":"Fäll ihop marginaler","expand_margins":"Expandera marginaler"},"margins":{"top":"Övre marginal","bottom":"Nedre marginal"},"columns":{"left":"Vänster kolumn","right":"Höger kolumn","empty":"Släpp sektioner här"},"css":{"header":"Global CSS","description":"Ange anpassade CSS-regler här för att åsidosätta kortets standardstil. Dessa regler kommer att tillämpas direkt på kortet. Använd med försiktighet.","label":"Anpassad CSS","input_description":"Ange dina anpassade CSS-regler här."}},"backgrounds":{"none":"Ingen","circle":"Cirkel","square":"Kvadrat","rounded_square":"Rundad kvadrat"},"container_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (Full bredd)"},"row_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (Full bredd)"},"settings_subtabs":{"general":"Allmänt","action_images":"Åtgärdsbilder"},"action_images":{"title":"Inställningar för Åtgärdsbilder","description":"Konfigurera bilder som kommer att visas när specifika entitetstillstånd uppfylls.","add_image":"Lägg till Åtgärdsbild","no_images":"Inga åtgärdsbilder konfigurerade ännu. Lägg till en för att komma igång.","entity_settings":"Entitetsinställningar","entity_placeholder":"Välj en entitet","state_placeholder":"Ange tillståndsvärde","image_settings":"Bildinställningar","image_type":{"title":"Bildtyp","description":"Välj hur du vill tillhandahålla bilden","upload":"Ladda upp Bild","url":"Bild-URL","entity":"Entitetsbild","none":"Ingen"},"delete_confirm":"Är du säker på att du vill ta bort denna åtgärdsbild?","actions":{"duplicate":"Duplicera","delete":"Ta bort","expand":"Expandera","collapse":"Komprimera","drag":"Dra för att ändra ordning"},"preview":{"no_entity":"Ingen entitet vald","any_state":"Valfritt tillstånd","no_image":"Ingen bild"}}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Utvecklad av","discord_button":"Gå med i vår Discord","github_button":"Besök vår Github","docs_button":"Se vår dokumentation","support_title":"Stöd Ultra Vehicle Card","support_para":"Dina generösa donationer driver utvecklingen av fantastiska funktioner för detta kort! Utan stöd från användare som dig skulle fortsatt innovation inte vara möjlig.","donate_button":"DONERA (PAYPAL)"},"custom_icons":{"title":"Custom Icons","description":"Define custom icons for different states.","icon_entity":"Icon Entity","default_icon":"Default Icon","state_icons":"State Icons","state":"State","icon":"Icon"},"custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","image_settings":{"title":"Image Settings","description":"Configure the main image appearance.","type":"Image Type","width":"Image Width","crop":"Image Crop","entity":"Image Entity","entity_description":"Entity that provides the image URL"},"action_images":{"title":"Action Images","description":"Define images to display based on entity states. The first matching image in the list (based on priority) will override the main vehicle image.","add":"Add Action Image","duplicate":"Duplicate Action Image","delete":"Delete Action Image","expand":"Expand Settings","collapse":"Collapse Settings","image_prefix":"Image","no_images":"No action images configured.","priority_info":"Drag handles to reorder priority (top = highest).","trigger":"Trigger","entity":"Trigger Entity","entity_description":"Entity whose state will trigger this image.","state":"Trigger State","state_description":"State value that triggers this image.","image_settings":"Image Settings","image_type":"Image Type","image_url":"Image URL","image_entity":"Image Entity","image_width":"Image Width (%)","image_crop":"Image Crop"},"settings_subtabs":{"general":"General","action_images":"Action Images"}}'),yt={en:et,de:it,es:at,fr:rt,it:lt,da:dt,"en-GB":gt,nl:ut,nb:mt,nn:bt,sv:a.t(ft,2)};function kt(e,t){try{if(!yt[t])return void Object.keys(yt);const i=yt[t];if(["editor.action_images.title","editor.action_images.description","editor.action_images.add_image","editor.action_images.entity_placeholder"].includes(e)){const t=e.split(".");let n=i,a="";for(const e of t){if(a=a?`${a}.${e}`:e,null==n)return;if("object"!=typeof n)return;if(!(e in n))return void Object.keys(n);n=n[e]}return"string"!=typeof n?void 0:n}return e.split(".").reduce(((e,t)=>null==e?void 0:e[t]),i)}catch(e){return}}function wt(e,t,i){const n=kt(e,t);if(n)return n;if("en"!==t){const t=kt(e,"en");if(t)return t}return e.startsWith("editor.action_images"),i||e}var xt=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let St=class extends he{constructor(){super(...arguments),this.expanded=!1}render(){var e,t,i,n;const a=this.lang||(null===(t=null===(e=this.hass)||void 0===e?void 0:e.locale)||void 0===t?void 0:t.language)||"en";return J`
      <div class="action-image-row">
        <div class="row-header">
          <div
            class="drag-handle"
            title=${wt("editor.action_images.actions.drag",a)}
            draggable="true"
            @dragstart=${this._handleDragStart}
          >
            <ha-icon icon="mdi:drag"></ha-icon>
          </div>

          <div class="preview">${this._renderPreview(a)}</div>

          <div class="entity-info">
            <div class="entity-name">
              ${(null===(n=null===(i=this.hass.states[this.config.entity])||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.friendly_name)||this.config.entity||wt("editor.action_images.preview.no_entity",a)}
            </div>
            <div class="entity-state">
              State:
              ${this.config.state||wt("editor.action_images.preview.any_state",a)}
            </div>
            <div class="image-type-info">
              Type: ${this._getImageTypeName(this.config.image_type,a)}
            </div>
          </div>

          <div class="actions">
            <ha-icon-button
              @click=${this._handleDuplicate}
              title=${wt("editor.action_images.actions.duplicate",a)}
            >
              <ha-icon icon="mdi:content-copy"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              @click=${this._handleDelete}
              title=${wt("editor.action_images.actions.delete",a)}
            >
              <ha-icon icon="mdi:delete"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              @click=${this._toggleExpand}
              title=${wt(this.expanded?"editor.action_images.actions.collapse":"editor.action_images.actions.expand",a)}
            >
              <ha-icon icon=${this.expanded?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        ${this.expanded?J`
              <div class="row-content">
                <div class="settings-section">
                  <h3>${wt("editor.action_images.entity_settings",a)}</h3>
                  <div class="settings-row">
                    <ha-entity-picker
                      .hass=${this.hass}
                      .value=${this.config.entity}
                      .label=${wt("editor.action_images.entity_placeholder",a)}
                      @value-changed=${this._handleEntityChange}
                    ></ha-entity-picker>
                  </div>
                  <div class="settings-row">
                    <ha-textfield
                      .value=${this.config.state||""}
                      .label=${wt("editor.action_images.state_placeholder",a)}
                      @input=${this._handleStateChange}
                    ></ha-textfield>
                  </div>
                </div>

                <div class="settings-section">
                  <h3>${wt("editor.action_images.image_settings",a)}</h3>
                  <div class="settings-row">
                    <ha-select
                      .label=${wt("editor.action_images.image_type.title",a)}
                      .value=${this.config.image_type}
                      @selected=${this._handleImageTypeChange}
                      @closed=${e=>e.stopPropagation()}
                      fixedMenuPosition
                      naturalMenuWidth
                    >
                      <ha-list-item value="upload">
                        ${wt("editor.action_images.image_type.upload",a)}
                      </ha-list-item>
                      <ha-list-item value="url">
                        ${wt("editor.action_images.image_type.url",a)}
                      </ha-list-item>
                      <ha-list-item value="entity">
                        ${wt("editor.action_images.image_type.entity",a)}
                      </ha-list-item>
                      <ha-list-item value="none">
                        ${wt("editor.action_images.image_type.none",a)}
                      </ha-list-item>
                    </ha-select>
                  </div>

                  ${this._renderImageInput(a)}
                </div>
              </div>
            `:""}
      </div>
    `}_renderPreview(e){var t;if("entity"===this.config.image_type&&this.config.image_entity){const e=this.hass.states[this.config.image_entity];if(null===(t=null==e?void 0:e.attributes)||void 0===t?void 0:t.entity_picture)return J`<img src=${e.attributes.entity_picture} alt="Preview" />`}if(this.config.image){const e=ke(this.hass,this.config.image),t=this.config.image.startsWith("data:image")?"Uploaded Preview":"Preview";return J`<img src=${e} alt=${t} />`}return J`
      <ha-icon
        icon="mdi:image-off"
        title=${wt("editor.action_images.preview.no_image",e)}
      ></ha-icon>
    `}_renderImageInput(e){switch(this.config.image_type){case"upload":return J`
          <div class="settings-row file-upload">
            <label class="file-upload-button" @click=${e=>e.stopPropagation()}>
              <ha-icon icon="mdi:upload"></ha-icon>
              ${wt("editor.common.choose_file",e)}
              <input
                type="file"
                accept="image/*"
                @change=${this._handleFileUpload}
                style="display: none"
              />
            </label>
            <span class="file-name">
              ${this.config.image?this._getFileName(this.config.image):wt("editor.common.no_file_chosen",e)}
            </span>
          </div>
        `;case"url":return J`
          <div class="settings-row">
            <ha-textfield
              .value=${this.config.image||""}
              .label=${wt("editor.images.common.url_description",e)}
              @input=${this._handleImageUrlChange}
            ></ha-textfield>
          </div>
        `;case"entity":return J`
          <div class="settings-row">
            <ha-entity-picker
              .hass=${this.hass}
              .value=${this.config.image_entity||""}
              .label=${wt("editor.action_images.entity_placeholder",e)}
              @value-changed=${this._handleImageEntityChange}
            ></ha-entity-picker>
          </div>
        `;default:return""}}_toggleExpand(e){e.stopPropagation(),this.expanded=!this.expanded}_handleDelete(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("delete"))}_handleDuplicate(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("duplicate"))}_handleEntityChange(e){e.stopPropagation(),this._handleConfigChange({entity:e.detail.value})}_handleStateChange(e){const t=e.target;this._handleConfigChange({state:t.value})}_handleImageTypeChange(e){const t=e.target.value;t!==this.config.image_type&&this._handleConfigChange({image_type:t,image:void 0,image_entity:void 0})}_handleImageUrlChange(e){const t=e.target;this._handleConfigChange({image:t.value})}_handleImageEntityChange(e){e.stopPropagation(),this._handleConfigChange({image_entity:e.detail.value})}_handleFileUpload(e){var t;const i=e.target,n=null===(t=i.files)||void 0===t?void 0:t[0];n&&(this.dispatchEvent(new CustomEvent("file-upload",{detail:{file:n,id:this.config.id},bubbles:!0,composed:!0})),i.value="")}_handleConfigChange(e){const t=Object.assign(Object.assign({},this.config),e);this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_getImageTypeName(e,t){switch(e){case"upload":return wt("editor.common.upload",t);case"url":return wt("editor.common.url",t);case"entity":return wt("editor.common.entity",t);case"none":return wt("editor.common.none",t);default:return String(null!=e?e:"")}}_getFileName(e){if(!e)return"";if(e.startsWith("data:image/")){const t=e.match(/name=([^;]+)/);if(t&&t[1])try{return decodeURIComponent(t[1])}catch(e){return"Uploaded image (decoded name error)"}const i=e.match(/^data:(image\/[^;]+);/);return`Uploaded ${i?i[1]:"image"}`}if(e.startsWith("/api/image/serve/")){const t=e.split("/");return`Uploaded Image (${t[t.length-1]})`}try{const t=new URL(e).pathname.split("/");return t[t.length-1]||e}catch(t){const i=e.split("/");return i[i.length-1]||e}}_handleDragStart(e){var t;if(e.dataTransfer){const i=e.target,n=null===(t=i.closest(".action-image-row"))||void 0===t?void 0:t.querySelector(".row-header");if(!n)return;e.dataTransfer.setData("text/plain",this.config.id),e.dataTransfer.effectAllowed="move";try{const t=n.getBoundingClientRect(),i=n.cloneNode(!0);i.style.width=`${t.width}px`,i.style.height=`${t.height}px`,i.style.position="absolute",i.style.top="-1000px",i.style.left="-1000px",i.style.pointerEvents="none",i.style.opacity="0.85",i.style.zIndex="9999",i.style.display="flex",i.style.alignItems="center",i.style.padding=getComputedStyle(n).padding,i.style.gap=getComputedStyle(n).gap,i.style.backgroundColor="var(--card-background-color)",i.style.border="1px solid var(--divider-color)",i.style.borderRadius="var(--ha-card-border-radius, 8px)",i.style.boxShadow="0 3px 8px rgba(0,0,0,0.25)",i.style.boxSizing="border-box",i.classList.add("dragging-ghost");const a=i.querySelector(".preview"),o=n.querySelector(".preview");if(a&&o){const e=getComputedStyle(o);a.style.width=e.width,a.style.height=e.height,a.style.minWidth=e.width,a.style.maxWidth=e.width,a.style.minHeight=e.height,a.style.borderRadius=e.borderRadius,a.style.overflow="hidden",a.style.display="flex",a.style.alignItems="center",a.style.justifyContent="center",a.style.background=e.background,a.style.border=e.border,a.style.flexShrink="0";const t=a.querySelector("img");t&&(t.style.width="100%",t.style.height="100%",t.style.objectFit="cover",t.style.display="block");const i=a.querySelector("ha-icon");i&&(i.style.color="var(--secondary-text-color)")}document.body.appendChild(i),e.dataTransfer.setDragImage(i,e.offsetX,e.offsetY),setTimeout((()=>{document.body.contains(i)&&document.body.removeChild(i)}),50)}catch(e){console.error("Error creating drag image:",e)}setTimeout((()=>{var e;null===(e=i.closest(".action-image-row"))||void 0===e||e.classList.add("dragging")}),0)}}_handleDragEnd(e){var t;null===(t=e.target.closest(".action-image-row"))||void 0===t||t.classList.remove("dragging")}};St.styles=d`
    :host {
      display: block;
    }

    .action-image-row {
      border: 1px solid var(--divider-color);
      border-radius: var(--ha-card-border-radius, 8px);
      background: var(--card-background-color);
      overflow: hidden;
      transition: box-shadow 0.2s ease-in-out;
    }
    :host([expanded]) .action-image-row {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .row-header {
      display: flex;
      align-items: center;
      padding: 12px;
      gap: 12px;
      border-bottom: var(--ha-card-border-width, 1px) solid transparent;
      transition: background-color 0.2s ease;
    }
    :host([expanded]) .row-header {
      border-bottom-color: var(--divider-color);
      background-color: rgba(var(--rgb-primary-text-color), 0.03);
    }

    .drag-handle {
      color: var(--secondary-text-color);
      cursor: move;
      padding: 4px;
    }
    .drag-handle:hover {
      color: var(--primary-text-color);
    }

    .preview {
      width: 48px;
      height: 48px;
      border-radius: 4px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--secondary-background-color);
      flex-shrink: 0;
      border: 1px solid var(--divider-color);
    }

    .preview img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .preview ha-icon {
      --mdc-icon-size: 24px;
      color: var(--secondary-text-color);
    }

    .entity-info {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2px;
    }

    .entity-name {
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.3;
    }

    .entity-state,
    .image-type-info {
      font-size: 0.9em;
      color: var(--secondary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.3;
    }

    .image-type-info {
      font-size: 0.85em;
    }

    .actions {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .row-content {
      padding: 16px;
      background-color: var(--secondary-background-color);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 24px;
    }

    .settings-section {
      margin-top: 0;
      margin-bottom: 16px;
    }

    .settings-section h3 {
      font-size: 1em;
      font-weight: 500;
      margin: 0 0 12px;
      color: var(--primary-text-color);
      border-bottom: 1px solid var(--divider-color);
      padding-bottom: 8px;
    }

    .settings-row {
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .settings-row:last-child {
      margin-bottom: 0;
    }

    .file-upload {
    }

    .file-upload-button {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 12px;
      background: var(--primary-color);
      color: var(--text-primary-color);
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      white-space: nowrap;
    }
    .file-upload-button:hover {
      background-color: var(--state-icon-active-color);
    }

    .file-name {
      color: var(--secondary-text-color);
      font-size: 14px;
      flex: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      background: var(--input-fill-color);
      padding: 8px;
      border-radius: 4px;
      border: 1px solid var(--input-ink-color);
    }

    ha-textfield,
    ha-select,
    ha-entity-picker {
      width: 100%;
      display: block;
    }

    ha-select,
    ha-textfield {
      --mdc-text-field-idle-line-color: var(--divider-color);
      --mdc-text-field-hover-line-color: var(--primary-text-color);
    }

    ha-icon-button {
      color: var(--secondary-text-color);
    }

    ha-icon-button:hover {
      color: var(--primary-text-color);
    }

    ha-icon-button[title*='Duplicate'] ha-icon {
      transform: translateY(-4px);
    }

    .icon-container.draggable {
      cursor: pointer;
      user-select: none;
    }

    .action-image-row.dragging {
      transform: scale(0.98);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      border: 1px dashed var(--primary-color);
      z-index: 10;
    }

    .dragging-ghost {
      color: var(--primary-text-color);
    }
    .dragging-ghost .drag-handle {
      color: var(--secondary-text-color);
    }
    .dragging-ghost .bar-icon-preview ha-icon {
      color: var(--secondary-text-color);
    }
    .dragging-ghost .bar-actions ha-icon-button {
      color: var(--secondary-text-color);
    }
  `,xt([be({attribute:!1})],St.prototype,"hass",void 0),xt([be({attribute:!1})],St.prototype,"config",void 0),xt([be({type:String})],St.prototype,"lang",void 0),xt([be({type:Boolean,reflect:!0})],St.prototype,"expanded",void 0),St=xt([_e("action-image-row")],St);var $t=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let It=class extends he{constructor(){super(...arguments),this._dragOverIndex=null}render(){var e;const t=(null===(e=this.hass.locale)||void 0===e?void 0:e.language)||"en";return J`
      <div class="action-images">
        <div class="header">
          <h3>${wt("editor.action_images.title",t,"Action Images")}</h3>
          <p class="description">
            ${wt("editor.action_images.description",t,"Configure images that will be displayed when specific entity states are met.")}
          </p>
        </div>

        <!-- ADD Priority Dropdown -->
        <div class="priority-selector">
          <ha-select
            .label=${this._t("editor.action_images.priority.label","Display Priority")}
            .value=${this.config.action_image_priority||"newest"} /* Default to newest */
            @selected=${this._handlePriorityChange}
            @closed=${e=>e.stopPropagation()}
            fixedMenuPosition
            naturalMenuWidth
          >
            <ha-list-item value="priority">
              ${this._t("editor.action_images.priority.options.priority","Priority Based")}
            </ha-list-item>
            <ha-list-item value="newest">
              ${this._t("editor.action_images.priority.options.newest","Newest Matching")}
            </ha-list-item>
          </ha-select>
          <p class="helper-text">
            ${this._t("editor.action_images.priority.description","Priority Based uses the first match from top to bottom. Newest Matching uses the last match found in the list.")}
          </p>
        </div>
        <!-- END Priority Dropdown -->

        <div
          class="action-images-list"
          @dragover=${this._handleDragOver}
          @dragleave=${this._handleDragLeave}
          @drop=${this._handleDrop}
        >
          ${0===(this.config.action_images||[]).length?J`<div class="no-images">
                  ${wt("editor.action_images.no_images",t,"No action images configured yet. Add one to get started.")}
                </div>`:""}
          ${(this.config.action_images||[]).map(((e,i)=>J`
              <action-image-row
                .hass=${this.hass}
                .config=${e}
                data-row-id=${e.id}
                @config-changed=${e=>this._handleImageConfigChange(i,e)}
                @delete=${()=>this._deleteActionImage(i)}
                @duplicate=${()=>this._duplicateActionImage(i)}
                @dragover=${e=>this._handleRowDragOver(e,i)}
                class=${this._dragOverIndex===i?"drop-target":""}
                .lang=${t}
              ></action-image-row>
            `))}
        </div>

        <div class="add-button">
          <mwc-button
            raised
            @click=${this._addActionImage}
            .label=${wt("editor.action_images.add_image",t,"Add Action Image")}
          >
            <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
          </mwc-button>
        </div>
      </div>
    `}_handleImageConfigChange(e,t){t.stopPropagation();const i=[...this.config.action_images||[]];i[e]=t.detail.config,this._updateConfig({action_images:i})}_addActionImage(){const e=[...this.config.action_images||[]],t={id:`image_${Date.now()}`,entity:"",state:"",image_type:"url",priority:0};e.push(t),this._updateConfig({action_images:e})}_duplicateActionImage(e){const t=[...this.config.action_images||[]];if(e<0||e>=t.length)return;const i=t[e],n=`${i.id}_copy_${Date.now()}`,a=Object.assign(Object.assign({},i),{id:n,image_crop:i.image_crop?Object.assign({},i.image_crop):void 0});t.splice(e+1,0,a),this._updateConfig({action_images:t})}_deleteActionImage(e){var t;const i=(null===(t=this.hass.locale)||void 0===t?void 0:t.language)||"en";if(!confirm(wt("editor.action_images.delete_confirm",i,"Are you sure you want to delete this action image?")))return;const n=[...this.config.action_images||[]];e<0||e>=n.length||(n.splice(e,1),this._updateConfig({action_images:n}))}_updateConfig(e){const t=Object.assign(Object.assign({},this.config),e);this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_handleRowDragOver(e,t){e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._dragOverIndex!==t&&(this._dragOverIndex=t)}_handleDragOver(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move")}_handleDragLeave(){this._dragOverIndex=null}async _handleDrop(e){var t,i;e.preventDefault();const n=null===(t=e.dataTransfer)||void 0===t?void 0:t.getData("text/plain"),a=this._dragOverIndex;if(this._dragOverIndex=null,null==n||null===a)return void console.warn("Drag/Drop failed: Missing dragged ID or target index.");const o=[...this.config.action_images||[]],r=o.findIndex((e=>e.id===n));if(-1===r)return void console.warn(`Drag/Drop failed: Could not find action image with ID: ${n}`);if(r===a)return;const[s]=o.splice(r,1),l=r<a?a-1:a;o.splice(l,0,s),this._updateConfig({action_images:o}),this.requestUpdate(),await this.updateComplete;try{const e=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelectorAll("action-image-row[data-row-id]"),t=this.config.action_images||[],n=new Map;null==e||e.forEach((e=>{const t=e.dataset.rowId;t&&n.set(t,e)})),t.forEach((e=>{const t=n.get(e.id);t?(console.log(`[ActionImageRow Re-Assign] Manually setting config for ID ${e.id}`,e),t.config=e):console.warn(`[ActionImageRow Re-Assign] Could not find element for ID ${e.id}`)}))}catch(e){console.error("[ActionImageRow Re-Assign] Error manually updating row configs:",e)}}_handlePriorityChange(e){const t=e.target;this._updateConfig({action_image_priority:t.value})}_t(e,t){var i,n;return wt(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}};It.styles=d`
    .action-images {
      padding: 16px;
    }

    .header {
      margin-bottom: 24px;
    }

    .header h3 {
      margin: 0;
      margin-bottom: 8px;
      color: var(--primary-text-color);
      font-size: 18px;
    }

    .description {
      margin: 0;
      color: var(--secondary-text-color);
      font-size: 14px;
    }

    .action-images-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 24px;
    }

    /* Update styles for drop target indication */
    action-image-row.drop-target {
      border: 2px dashed var(--primary-color);
      background-color: rgba(var(--rgb-primary-color), 0.1);
      /* Make the border more prominent */
      margin: -1px; /* Adjust margin to fit border without shifting */
      border-radius: 10px; /* Slightly larger radius to contain original */
    }

    .no-images {
      padding: 24px;
      text-align: center;
      color: var(--secondary-text-color);
      background: var(--secondary-background-color);
      border-radius: 8px;
      border: 1px dashed var(--divider-color);
    }

    .add-button {
      display: flex;
      justify-content: center;
    }

    mwc-button {
      --mdc-theme-primary: var(--primary-color);
      --mdc-theme-on-primary: var(--text-primary-color);
    }

    mwc-button ha-icon {
      margin-right: 8px;
    }

    :host {
      display: block;
      --mdc-theme-primary: var(--primary-color);
    }

    /* Styles for Priority Selector */
    .priority-selector {
      padding: 8px 16px;
      margin-bottom: 16px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      background-color: var(--secondary-background-color);
    }
    .priority-selector ha-select {
      width: 100%;
    }
    .priority-selector .helper-text {
      font-size: 0.9em;
      color: var(--secondary-text-color);
      margin-top: 8px;
      margin-bottom: 0;
      padding: 0;
    }
  `,$t([be({attribute:!1})],It.prototype,"hass",void 0),$t([be({attribute:!1})],It.prototype,"config",void 0),$t([fe()],It.prototype,"_dragOverIndex",void 0),It=$t([_e("action-images-tab")],It);var At=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let Ct=class extends he{constructor(){super(...arguments),this._vehicleCropExpanded=!1,this._activeSubTab="general"}set config(e){e&&this._internalConfig!==e&&(this._internalConfig=e)}get config(){return this._internalConfig}get _config(){return this._internalConfig}_formatFieldName(e){return e?e.replace(/^./,(e=>e.toUpperCase())).replace(/_/g," "):""}_truncatePath(e,t=40){if(!e||e.length<=t)return e;const i=Math.floor(t/2)-1,n=t-i-3;return i<0||n<0?e:`${e.substring(0,i)}...${e.substring(e.length-n)}`}_valueChanged(e){if(e.stopPropagation(),!this._config)return;const t=e.detail.value,i=Object.assign(Object.assign({},this._config),t);if(void 0!==t.vehicle_image_type){const e=t.vehicle_image_type;"entity"===e?i.vehicle_image=void 0:"url"===e||"upload"===e?i.vehicle_image_entity=void 0:"none"!==e&&"default"!==e||(i.vehicle_image=void 0,i.vehicle_image_entity=void 0)}this.config=i,Ke(this,"config-changed",{config:i})}_getImageSchema(e){const t=[{name:"vehicle_image_type",selector:{select:{options:[{value:"none",label:wt("editor.common.none",e)},{value:"default",label:wt("editor.common.default",e)},{value:"upload",label:wt("editor.common.upload",e)},{value:"url",label:wt("editor.common.url",e)},{value:"entity",label:wt("editor.common.entity",e)}],mode:"dropdown"}},label:wt("editor.images.vehicle.type",e),description:wt("editor.images.vehicle.type_description",e)}],i=this._config.vehicle_image_type;return"url"===i?t.push({name:"vehicle_image",selector:{text:{}},label:wt("editor.common.url",e),description:wt("editor.images.common.url_description",e)}):"entity"===i&&t.push({name:"vehicle_image_entity",selector:{entity:{}},label:wt("editor.images.vehicle.entity",e),description:wt("editor.images.vehicle.entity_description",e)}),i&&"none"!==i&&t.push({name:"vehicle_image_width",selector:{number:{min:0,max:100,step:1,mode:"box",suffix:"%"}},label:wt("editor.images.vehicle.width",e),description:wt("editor.common.width_description",e)}),t}_dispatchFileUpload(e,t){var i;const n=e.target,a=null===(i=n.files)||void 0===i?void 0:i[0];a&&(this.dispatchEvent(new CustomEvent("file-upload",{detail:{file:a,configKey:t},bubbles:!0,composed:!0})),n.value="")}_resetTitleSize(){const e=Object.assign(Object.assign({},this._config),{title_size:void 0});this.config=e,Ke(this,"config-changed",{config:e})}_createDefaultCropSettings(){return{top:0,right:0,bottom:0,left:0}}_renderCropSliders(e,t){const i=this._config[e]||this._createDefaultCropSettings();return J`
      <div class="crop-input-row">
        <div class="crop-input-field">
          <span class="crop-label">${wt("editor.crop.top",t,"Top")}</span>
          <ha-textfield
            type="number"
            .value=${String(i.top||0)}
            @input=${t=>this._updateImageCrop(e,"top",parseInt(t.target.value)||0)}
          ></ha-textfield>
          <span class="crop-unit">${wt("editor.crop.pixels",t,"px")}</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">${wt("editor.crop.right",t,"Right")}</span>
          <ha-textfield
            type="number"
            .value=${String(i.right||0)}
            @input=${t=>this._updateImageCrop(e,"right",parseInt(t.target.value)||0)}
          ></ha-textfield>
          <span class="crop-unit">${wt("editor.crop.pixels",t,"px")}</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">${wt("editor.crop.bottom",t,"Bottom")}</span>
          <ha-textfield
            type="number"
            .value=${String(i.bottom||0)}
            @input=${t=>this._updateImageCrop(e,"bottom",parseInt(t.target.value)||0)}
          ></ha-textfield>
          <span class="crop-unit">${wt("editor.crop.pixels",t,"px")}</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">${wt("editor.crop.left",t,"Left")}</span>
          <ha-textfield
            type="number"
            .value=${String(i.left||0)}
            @input=${t=>this._updateImageCrop(e,"left",parseInt(t.target.value)||0)}
          ></ha-textfield>
          <span class="crop-unit">${wt("editor.crop.pixels",t,"px")}</span>
        </div>
      </div>

      <div class="crop-explanation">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <span
          >${wt("editor.crop.help",t,"Enter pixel values (positive or negative) to adjust cropping and padding")}</span
        >
      </div>
    `}_updateImageCrop(e,t,i){const n=this._config[e]||this._createDefaultCropSettings(),a=Number.isFinite(i)?i:0,o=Object.assign(Object.assign({},n),{[t]:a});if(0===o.top&&0===o.right&&0===o.bottom&&0===o.left){const t=Object.assign({},this._config);delete t[e],this.config=t,Ke(this,"config-changed",{config:t})}else{const t=Object.assign(Object.assign({},this._config),{[e]:o});this.config=t,Ke(this,"config-changed",{config:t})}}_renderGeneralTab(){var e;const t=(null===(e=this.hass.locale)||void 0===e?void 0:e.language)||"en";return J`
      <!-- Card Title Section -->
      <div class="settings-section">
        <div class="section-header">${wt("editor.card_settings.title",t)}</div>
        <div class="settings-content">
          <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${[{name:"title",selector:{text:{}},label:wt("editor.card_settings.title",t)},{name:"title_alignment",selector:{select:{options:[{value:"left",label:wt("editor.alignment.left",t)},{value:"center",label:wt("editor.alignment.center",t)},{value:"right",label:wt("editor.alignment.right",t)}],mode:"dropdown"}},label:wt("editor.card_settings.title_alignment",t)}]}
            .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
            .computeDescription=${e=>e.description}
            @value-changed=${this._valueChanged}
          ></ha-form>

          <!-- Title Size with reset button -->
          <div class="size-fields-container" style="margin-top: 8px;">
            <div class="size-field">
              <ha-form
                .hass=${this.hass}
                .data=${this._config}
                .schema=${[{name:"title_size",selector:{number:{mode:"box",unit:"px"}},label:wt("editor.card_settings.title_size",t)}]}
                .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
                .computeDescription=${e=>e.description}
                @value-changed=${this._valueChanged}
              ></ha-form>
              <ha-icon-button
                class="inline-reset-button"
                @click=${this._resetTitleSize}
                title=${wt("editor.common.reset",t)}
              >
                <ha-icon icon="mdi:refresh"></ha-icon>
              </ha-icon-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Vehicle Information Section -->
      <div class="settings-section">
        <div class="section-header">${wt("editor.vehicle_info.title",t)}</div>
        <div class="settings-content">
          ${[[{name:"location_entity",selector:{entity:{}},label:wt("editor.vehicle_info.location.title",t),description:wt("editor.vehicle_info.location.description",t)},{name:"show_location",selector:{boolean:{}},label:wt("editor.vehicle_info.location.show",t),description:wt("editor.vehicle_info.location.show_description",t)}],[{name:"mileage_entity",selector:{entity:{}},label:wt("editor.vehicle_info.mileage.title",t),description:wt("editor.vehicle_info.mileage.description",t)},{name:"show_mileage",selector:{boolean:{}},label:wt("editor.vehicle_info.mileage.show",t),description:wt("editor.vehicle_info.mileage.show_description",t)}],[{name:"car_state_entity",selector:{entity:{}},label:wt("editor.vehicle_info.car_state.title",t),description:wt("editor.vehicle_info.car_state.description",t)},{name:"show_car_state",selector:{boolean:{}},label:wt("editor.vehicle_info.car_state.show",t),description:wt("editor.vehicle_info.car_state.show_description",t)}]].map((e=>J`
              <div class="vehicle-info-card">
                <div class="vehicle-info-title">${e[0].label}</div>
                <div class="vehicle-info-description">${e[0].description}</div>
                <div class="vehicle-info-controls">
                  <div class="vehicle-info-entity">
                    <ha-form
                      .hass=${this.hass}
                      .data=${this._config}
                      .schema=${[e[0]]}
                      .computeLabel=${()=>""}
                      @value-changed=${this._valueChanged}
                    ></ha-form>
                  </div>
                  <div class="vehicle-info-toggle">
                    <ha-form
                      .hass=${this.hass}
                      .data=${this._config}
                      .schema=${[e[1]]}
                      .computeLabel=${()=>""}
                      @value-changed=${this._valueChanged}
                    ></ha-form>
                  </div>
                </div>
              </div>
            `))}
        </div>
      </div>

      <!-- Vehicle Image Section -->
      <div class="settings-section">
        <div class="section-header">${wt("editor.images.vehicle.title",t)}</div>
        <div class="image-description">${wt("editor.images.vehicle.description",t)}</div>
        <div class="settings-content">
          <ha-form
            class="config-form"
            .hass=${this.hass}
            .data=${this._config}
            .schema=${this._getImageSchema(t)}
            .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
            .computeDescription=${e=>e.description}
            @value-changed=${this._valueChanged}
          ></ha-form>

          ${"upload"===this._config.vehicle_image_type?J`
                <div class="upload-container" style="margin: 16px 0;">
                  <div class="file-upload-row">
                    <label class="file-upload-button">
                      <div class="button-content">
                        <span class="button-label"
                          >${wt("editor.common.choose_file",t)}</span
                        >
                        <input
                          type="file"
                          accept="image/*"
                          @change=${e=>this._dispatchFileUpload(e,"vehicle_image")}
                          id="vehicle-image-upload"
                          style="display: none;"
                        />
                      </div>
                    </label>

                    <div class="path-display">
                      ${this._config.vehicle_image?J`<span class="uploaded-path" title="${this._config.vehicle_image}">
                            ${this._truncatePath(this._config.vehicle_image)}
                          </span>`:J`<span class="no-file"
                            >${wt("editor.common.no_file_chosen",t)}</span
                          >`}
                    </div>
                  </div>
                </div>
              `:""}
          ${this._config.vehicle_image_type&&"none"!==this._config.vehicle_image_type?J`
                <div class="crop-accordion" style="margin-top: 16px;">
                  <div
                    class="crop-accordion-header"
                    @click=${()=>{this._vehicleCropExpanded=!this._vehicleCropExpanded}}
                  >
                    <span>${wt("editor.images.vehicle.crop",t)}</span>
                    <ha-icon
                      icon="${this._vehicleCropExpanded?"mdi:chevron-up":"mdi:chevron-down"}"
                    ></ha-icon>
                  </div>
                  ${this._vehicleCropExpanded?J`
                        <div class="crop-controls">
                          ${this._renderCropSliders("vehicle_image_crop",t)}
                        </div>
                      `:""}
                </div>
              `:""}
        </div>
      </div>

      <!-- Colors Section -->
      <div class="settings-section">
        <div class="section-header">${wt("editor.card_settings.colors",t,"Colors")}</div>
        <div class="settings-content">
          <div class="vehicle-info-card">
            <div class="vehicle-info-title">
              ${wt("editor.card_settings.title_color",t,"Title Color")}
            </div>
            <div class="vehicle-info-description">
              ${wt("editor.card_settings.title_color_description",t,"Set the color of the card title")}
            </div>
            <div class="settings-content">
              <color-picker
                .label=${wt("editor.card_settings.title_color",t,"Title Color")}
                .value=${this._config.title_color||"var(--primary-text-color)"}
                .configValue=${"title_color"}
                @value-changed=${this._valueChanged}
              ></color-picker>
            </div>
          </div>

          <div class="vehicle-info-card">
            <div class="vehicle-info-title">
              ${wt("editor.card_settings.card_background",t,"Card Background")}
            </div>
            <div class="vehicle-info-description">
              ${wt("editor.card_settings.card_background_description",t,"Set the background color of the card")}
            </div>
            <div class="settings-content">
              <color-picker
                .label=${wt("editor.card_settings.card_background",t,"Card Background")}
                .value=${this._config.card_background||"var(--card-background-color)"}
                .configValue=${"card_background"}
                @value-changed=${this._valueChanged}
              ></color-picker>
            </div>
          </div>

          <!-- Vehicle Info Colors -->
          <div class="vehicle-info-card">
            <div class="vehicle-info-title">
              ${wt("editor.vehicle_info.colors.title",t,"Vehicle Info Colors")}
            </div>
            <div class="vehicle-info-description">
              ${wt("editor.vehicle_info.colors.description",t,"Customize colors for the vehicle information section")}
            </div>

            <div class="vehicle-info-colors-grid">
              <!-- Location Colors -->
              <div class="color-picker-container">
                <div class="color-picker-label">
                  ${wt("editor.vehicle_info.colors.location_icon",t,"Location Icon")}
                </div>
                <color-picker
                  .value=${this._config.location_icon_color||"var(--secondary-text-color)"}
                  .configValue=${"location_icon_color"}
                  @value-changed=${this._valueChanged}
                ></color-picker>
              </div>

              <div class="color-picker-container">
                <div class="color-picker-label">
                  ${wt("editor.vehicle_info.colors.location_text",t,"Location Text")}
                </div>
                <color-picker
                  .value=${this._config.location_text_color||"var(--primary-text-color)"}
                  .configValue=${"location_text_color"}
                  @value-changed=${this._valueChanged}
                ></color-picker>
              </div>

              <!-- Mileage Colors -->
              <div class="color-picker-container">
                <div class="color-picker-label">
                  ${wt("editor.vehicle_info.colors.mileage_icon",t,"Mileage Icon")}
                </div>
                <color-picker
                  .value=${this._config.mileage_icon_color||"var(--secondary-text-color)"}
                  .configValue=${"mileage_icon_color"}
                  @value-changed=${this._valueChanged}
                ></color-picker>
              </div>

              <div class="color-picker-container">
                <div class="color-picker-label">
                  ${wt("editor.vehicle_info.colors.mileage_text",t,"Mileage Text")}
                </div>
                <color-picker
                  .value=${this._config.mileage_text_color||"var(--primary-text-color)"}
                  .configValue=${"mileage_text_color"}
                  @value-changed=${this._valueChanged}
                ></color-picker>
              </div>

              <!-- Car State Text Color -->
              <div class="color-picker-container">
                <div class="color-picker-label">
                  ${wt("editor.vehicle_info.colors.car_state_text",t,"Car State Text")}
                </div>
                <color-picker
                  .value=${this._config.car_state_text_color||"var(--primary-text-color)"}
                  .configValue=${"car_state_text_color"}
                  @value-changed=${this._valueChanged}
                ></color-picker>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Card Settings Section -->
      <div class="settings-section">
        <div class="section-header">${wt("editor.card_settings.title",t)}</div>
        <div class="settings-content">
          ${[{name:"formatted_entities",selector:{boolean:{}},label:wt("editor.card_settings.format_entities",t),description:wt("editor.card_settings.format_entities_description",t)},{name:"show_units",selector:{boolean:{}},label:wt("editor.card_settings.show_units",t),description:wt("editor.card_settings.show_units_description",t)}].map((e=>{const t=e.selector&&"boolean"in e.selector;return J`
              <div class="vehicle-info-card">
                <div class="vehicle-info-title">${e.label}</div>
                ${e.description?J`<div class="vehicle-info-description">${e.description}</div>`:""}
                <div class="${t?"toggle-form-container":"settings-content"}">
                  <ha-form
                    .hass=${this.hass}
                    .data=${this._config}
                    .schema=${[e]}
                    .computeLabel=${()=>""}
                    @value-changed=${this._valueChanged}
                  ></ha-form>
                </div>
              </div>
            `}))}
        </div>
      </div>
    `}render(){var e;if(!this.hass||!this._config)return J``;const t=(null===(e=this.hass.locale)||void 0===e?void 0:e.language)||"en";return J`
      <div class="subtabs-container">
        <div class="subtabs">
          <mwc-button
            class="${"general"===this._activeSubTab?"active":""}"
            @click=${()=>this._activeSubTab="general"}
            .label=${wt("editor.settings_subtabs.general",t,"General")}
          >
          </mwc-button>
          <mwc-button
            class="${"action_images"===this._activeSubTab?"active":""}"
            @click=${()=>this._activeSubTab="action_images"}
            .label=${wt("editor.settings_subtabs.action_images",t,"Action Images")}
          >
          </mwc-button>
        </div>

        <div class="subtab-content">
          ${"general"===this._activeSubTab?this._renderGeneralTab():J`<action-images-tab
                .hass=${this.hass}
                .config=${this._config}
                @config-changed=${this._handleConfigChangedFromActionImages}
                @file-upload=${this._handleFileUploadEvent}
              ></action-images-tab>`}
        </div>
      </div>
    `}_handleConfigChangedFromActionImages(e){e.stopPropagation(),Ke(this,"config-changed",{config:e.detail.config})}_handleFileUploadEvent(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("file-upload",{detail:e.detail,bubbles:!0,composed:!0}))}};Ct.styles=d`
    .subtabs-container {
      display: flex;
      flex-direction: column;
    }

    .subtabs {
      display: flex;
      justify-content: space-around;
      gap: 8px;
      padding: 16px 16px 0;
      border-bottom: 1px solid var(--divider-color);
      margin-bottom: 16px;
    }

    .subtabs mwc-button {
      --mdc-theme-primary: var(--secondary-text-color);
      border-radius: 4px 4px 0 0;
      margin-bottom: -1px;
    }

    .subtabs mwc-button.active {
      --mdc-theme-primary: var(--primary-color);
      border-bottom: 2px solid var(--primary-color);
    }

    .subtab-content {
      flex: 1;
      overflow: auto;
    }

    .settings-section {
      margin-bottom: 8px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
      background-color: var(--card-background-color, #212121);
    }

    .section-header {
      font-size: 1.1em;
      font-weight: 500;
      padding: 12px 16px;
      background-color: var(--primary-color);
      color: var(--text-primary-color);
      margin-bottom: 0;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom: 1px solid var(--divider-color);
    }

    .settings-content {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      background-color: var(--primary-background-color);
    }

    ha-form {
      padding: 0;
      margin-bottom: 0;
    }

    ha-form > * {
      margin-bottom: 16px;
    }
    ha-form > *:last-child {
      margin-bottom: 0;
    }

    .size-fields-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 8px;
    }

    .size-field {
      display: flex;
      align-items: center;
      position: relative;
      gap: 8px;
    }

    .size-field ha-form {
      flex: 1;
      margin-bottom: 0;
    }

    .inline-reset-button {
      --mdc-icon-button-size: 36px;
      color: var(--secondary-text-color);
      opacity: 0.8;
      flex-shrink: 0;
    }

    .inline-reset-button:hover {
      opacity: 1;
      color: var(--primary-color);
    }

    .vehicle-info-card {
      margin-bottom: 0;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      background-color: var(--primary-background-color);
      overflow: hidden;
      padding: 0;
    }

    .vehicle-info-title {
      font-weight: 500;
      padding: 12px 16px 4px;
      color: var(--primary-text-color);
    }

    .vehicle-info-description {
      font-size: 0.9em;
      padding: 0 16px 8px;
      color: var(--secondary-text-color);
    }

    .vehicle-info-controls {
      display: flex;
      padding: 8px 16px 16px;
      justify-content: space-between;
      align-items: center;
    }

    .vehicle-info-entity {
      flex-grow: 1;
      margin-right: 16px;
    }

    .vehicle-info-toggle {
      flex-shrink: 0;
      width: 68px;
    }

    .vehicle-info-controls ha-form {
      margin-bottom: 0;
    }

    .upload-container {
      margin: 0;
    }

    .file-upload-row {
      display: flex;
      align-items: center;
      gap: 8px;
      width: 100%;
    }

    .file-upload-button {
      display: inline-block;
      padding: 6px 12px;
      cursor: pointer;
      background-color: var(--secondary-background-color);
      color: var(--primary-text-color);
      border-radius: 4px;
      border: 1px solid var(--divider-color);
      font-size: 14px;
      text-align: center;
      min-width: 120px;
      white-space: nowrap;
    }

    .file-upload-button:hover {
      background-color: var(--primary-color);
      color: var(--text-primary-color);
    }

    .path-display {
      flex: 1;
      overflow: hidden;
      padding: 4px 8px;
      background: var(--secondary-background-color);
      border-radius: 4px;
    }

    .uploaded-path {
      display: block;
      font-size: 0.9em;
      color: var(--secondary-text-color);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .no-file {
      color: var(--disabled-text-color);
      font-style: italic;
    }

    .image-description {
      padding: 16px;
      color: var(--secondary-text-color);
      font-size: 0.9em;
      line-height: 1.4;
      margin-top: -8px;
      background: var(--primary-background-color);
      border-top: 1px solid var(--divider-color);
    }

    .crop-accordion {
      margin-top: 16px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
    }

    .crop-accordion-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      background-color: var(--card-background-color, rgba(0, 0, 0, 0.05));
      cursor: pointer;
      font-weight: 500;
    }

    .crop-controls {
      padding: 16px;
      background-color: var(--primary-background-color);
    }

    .crop-input-row {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;
      margin-bottom: 16px;
    }

    @media (max-width: 768px) {
      .crop-input-row {
        grid-template-columns: repeat(2, 1fr);
        gap: 12px;
      }
    }

    @media (max-width: 480px) {
      .crop-input-row {
        grid-template-columns: 1fr;
        gap: 12px;
      }
    }

    .crop-input-field {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .crop-label {
      min-width: 50px;
      margin-bottom: 4px;
      font-weight: 500;
    }

    .crop-input-field ha-textfield {
      width: 100%;
      min-width: 60px;
    }

    .crop-unit {
      margin-top: 4px;
      font-size: 0.9em;
      color: var(--secondary-text-color);
    }

    .crop-explanation {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 12px;
      color: var(--secondary-text-color);
      font-size: 0.9em;
      padding: 8px;
      background: rgba(var(--rgb-primary-color), 0.05);
      border-radius: 4px;
    }

    .crop-explanation ha-icon {
      color: var(--primary-color);
    }

    .toggle-form-container {
      padding: 0 16px 0;
    }

    .vehicle-info-card .toggle-form-container ha-form > * {
      margin-bottom: 0;
    }

    /* CSS for the vehicle info colors grid layout */
    .vehicle-info-colors-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
      padding: 16px;
    }

    @media (max-width: 600px) {
      .vehicle-info-colors-grid {
        grid-template-columns: 1fr;
      }
    }

    .color-picker-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .color-picker-label {
      font-size: 0.9em;
      color: var(--secondary-text-color);
      margin-bottom: 4px;
    }
  `,At([be({attribute:!1})],Ct.prototype,"hass",void 0),At([fe()],Ct.prototype,"_internalConfig",void 0),At([be({attribute:!1})],Ct.prototype,"config",null),At([fe()],Ct.prototype,"_vehicleCropExpanded",void 0),At([fe()],Ct.prototype,"_activeSubTab",void 0),Ct=At([_e("settings-tab")],Ct);var zt=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};const Et={bar_color:"var(--primary-color, #3498db)",background_color:"var(--card-background-color, #121212)",border_color:"var(--divider-color, #555555)",left_title_color:"var(--secondary-text-color, #999999)",left_text_color:"var(--primary-text-color, #ffffff)",right_title_color:"var(--secondary-text-color, #999999)",right_text_color:"var(--primary-text-color, #ffffff)",limit_indicator_color:"var(--error-color, #ff0000)",percentage_text_color:"#ffffff"},Tt={left_title:"",left_entity:"",right_title:"",right_entity:"",bar_color:Et.bar_color,background_color:Et.background_color,border_color:Et.border_color,left_title_color:Et.left_title_color,left_text_color:Et.left_text_color,right_title_color:Et.right_title_color,right_text_color:Et.right_text_color,limit_indicator_color:Et.limit_indicator_color,percentage_text_color:Et.percentage_text_color,left_title_size:14,left_text_size:14,right_title_size:14,right_text_size:14,percentage_text_size:14,bar_size:"regular",bar_radius:"round",show_left:!1,show_right:!1,show_percentage:!1,alignment:"space-between",width:"100",use_gradient:!1,gradient_display_mode:"value_based",gradient_stops:[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}],animation_entity:"",animation_state:"",animation_type:"none",action_animation_entity:"",action_animation_state:"",action_animation:"none"};let jt=class extends he{constructor(){super(...arguments),this._expandedBar=null,this._preventExpandCollapse=!1,this._activeBarTabs={},this._gradientEditorKeys={},this._updateStopDebounceTimer=null,this._removeStopDebounceTimer=null,this._updateOrderDebounceTimer=null,this.DEBOUNCE_DELAY=50,this.MAX_STOPS=7}_t(e,t){var i,n;return wt(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}_generateUniqueId(){return Math.random().toString(36).substring(2,9)}_getFriendlyName(e){var t,i;return e&&this.hass&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""}_truncateText(e,t=15){return e?e.length<=t?e:e.substring(0,t)+"...":""}_fireConfigChanged(e){Ke(this,"config-changed",{config:e})}_fireForceRefreshEvent(){this.dispatchEvent(new CustomEvent("force-refresh",{bubbles:!0,composed:!0,detail:{timestamp:Date.now()}}))}_fireForceGradientRefreshEvent(){this.dispatchEvent(new CustomEvent("force-gradient-refresh",{bubbles:!0,composed:!0,detail:{timestamp:Date.now()}})),this._fireForceRefreshEvent()}_toggleBarExpand(e){this._preventExpandCollapse?this._preventExpandCollapse=!1:this._expandedBar=this._expandedBar===e?null:e}_addBar(){const e=[...this.config.bars||[]],t=0===e.length,i=JSON.parse(JSON.stringify(Tt));Object.keys(Et).forEach((e=>{i[e]||(i[e]=Et[e])})),i.entity="",i.gradient_stops=[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}],e.push(i);const n=Object.assign(Object.assign({},this.config),{bars:e});if(t){let e=[...n.sections_order||[]];if(!e.includes("bars")){const t=e.indexOf("info"),i=e.indexOf("icons");-1!==t?e.splice(t+1,0,"bars"):-1!==i?e.splice(i,0,"bars"):e.push("bars"),n.sections_order=e}}this._fireConfigChanged(n),this._expandedBar=e.length-1,setTimeout((()=>{this.requestUpdate(),this._fireForceGradientRefreshEvent()}),10)}_duplicateBar(e){if(!this.config||!this.config.bars||e<0||e>=this.config.bars.length)return void console.warn("[BarsTab] Cannot duplicate bar: Invalid index or missing config.");const t=this.config.bars[e],i=JSON.parse(JSON.stringify(t));Object.keys(Et).forEach((e=>{i[e]||(i[e]=Et[e])})),i.use_gradient&&Array.isArray(i.gradient_stops)&&(i.gradient_stops=i.gradient_stops.map((e=>Object.assign(Object.assign({},e),{id:this._generateUniqueId()}))),this._ensureGradientStops(i));const n=[...this.config.bars];n.splice(e+1,0,i),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:n})),this._expandedBar=e+1,setTimeout((()=>{this.requestUpdate(),this._fireForceGradientRefreshEvent()}),10)}_removeBar(e){const t=[...this.config.bars||[]];t.splice(e,1);let i=[...this.config.sections_order||[]];const n=`bar_${e}`;i=i.filter((e=>e!==n));let a=i.map((t=>{if(t.startsWith("bar_")){const i=parseInt(t.substring(4));if(i>e)return"bar_"+(i-1)}return t})),o=Object.assign({},this.config.sections_columns||{});delete o[n];let r={};Object.entries(o).forEach((([t,i])=>{if(t.startsWith("bar_")){const n=parseInt(t.substring(4));n>e?r["bar_"+(n-1)]=i:r[t]=i}else r[t]=i})),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:t,sections_order:a,sections_columns:Object.keys(r).length>0?r:void 0})),this._expandedBar===e?this._expandedBar=null:null!==this._expandedBar&&this._expandedBar>e&&(this._expandedBar=this._expandedBar-1)}_barValueChanged(e,t){var i,n;if(e.stopPropagation(),!this.config.bars||!this.config.bars[t])return;const a=JSON.parse(JSON.stringify(this.config)),o=e.detail.value;let r=!1,s=!1,l=!1;const c=`bars.${t}.`;Object.entries(o).forEach((([e,i])=>{if(!e.startsWith(c))return;const n=e.substring(c.length),o=i;"percentage_text_color"===n?String(o)===Et.percentage_text_color?(console.log("[BarsTab] Percentage color matches default var string, removing from config."),delete a.bars[t][n]):(console.log(`[BarsTab] Setting ${n} to specific value: ${o}`),this._setNestedBarValue(a,t,n,o)):(this._setNestedBarValue(a,t,n,o),"use_gradient"===n?(r=!0,s=!0,l=!0,!0===o&&(this._ensureGradientStops(a.bars[t]),a.bars[t].gradient_display_mode||(a.bars[t].gradient_display_mode="value_based"))):n.includes("gradient")&&(s=!0))}));const d=this.config.bars[t];(null==d?void 0:d.use_gradient)&&!l&&(a.bars[t].use_gradient=!0,d.gradient_display_mode&&(a.bars[t].gradient_display_mode=d.gradient_display_mode),d.gradient_stops&&d.gradient_stops.length>=2&&(a.bars[t].gradient_stops=d.gradient_stops)),this._fireConfigChanged(a),(s||(null===(i=a.bars[t])||void 0===i?void 0:i.use_gradient))&&this._fireForceGradientRefreshEvent(),r&&(null===(n=a.bars[t])||void 0===n?void 0:n.use_gradient)&&(this._expandedBar=t,setTimeout((()=>{this.requestUpdate()}),0))}_handleColorChange(e,t,i){console.log(`Color change: Bar ${e} ${t} to:`,i),this._updateBarProperty(e,t,i),[50,150,300].forEach((e=>{setTimeout((()=>{this._fireForceGradientRefreshEvent(),this.requestUpdate()}),e)}))}_setNestedBarValue(e,t,i,n){e.bars&&e.bars[t]&&(i.includes("color")?Array.isArray(n)?e.bars[t][i]=`rgb(${n.join(", ")})`:e.bars[t][i]="object"==typeof n&&null!==n&&"r"in n&&"g"in n&&"b"in n?`rgb(${n.r}, ${n.g}, ${n.b})`:n:e.bars[t][i]=n)}_setActiveBarTab(e,t,i){e.stopPropagation(),this._activeBarTabs=Object.assign(Object.assign({},this._activeBarTabs),{[t]:i})}async _updateBarProperty(e,t,i){const n=JSON.parse(JSON.stringify(this.config));if(!n.bars||!n.bars[e])return;const a=n.bars[e].use_gradient,o=n.bars[e].gradient_display_mode,r=n.bars[e].gradient_stops;t.includes("color")?(n.bars[e][t]=String(i),console.log(`Updating bar ${e} ${t} to string:`,String(i))):n.bars[e][t]=i,"gradient_display_mode"===t?n.bars[e].use_gradient=!0:"use_gradient"===t&&!0===i?this._ensureGradientStops(n.bars[e]):"use_gradient"!==t&&a&&(n.bars[e].use_gradient=!0,o&&(n.bars[e].gradient_display_mode=o),r&&r.length>=2&&(n.bars[e].gradient_stops=r)),"gradient_stops"===t&&Array.isArray(i)&&(n.bars[e].gradient_stops=[...i].sort(((e,t)=>e.position-t.position)),n.bars[e].use_gradient=!0,this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1})),this._fireConfigChanged(n),this.requestUpdate(),("use_gradient"===t||"gradient_display_mode"===t||"gradient_stops"===t||t.includes("color")||a)&&[10,50,200].forEach((e=>{setTimeout((()=>{this._fireForceGradientRefreshEvent(),this.requestUpdate()}),e)}))}_resetBarColor(e,t,i){const n=[...this.config.bars||[]];if(n[e]){const i=Object.assign({},n[e]);delete i[t],console.log(`[BarsTab] Resetting bar ${e} ${t} by removing property.`),n[e]=i;const a=Object.assign(Object.assign({},this.config),{bars:n});this._fireConfigChanged(a),this.requestUpdate();const o=t.includes("gradient")||"bar_color"===t;[10,50,200].forEach((e=>{setTimeout((()=>{o&&this._fireForceGradientRefreshEvent(),this.requestUpdate()}),e)}))}}_resetBarSize(e,t){const i=[...this.config.bars||[]];if(i[e]){const n=Object.assign({},i[e]);delete n[t],i[e]=n,this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:i})),this.requestUpdate()}}_ensureGradientStops(e){(!e.gradient_stops||!Array.isArray(e.gradient_stops)||e.gradient_stops.length<2)&&(e.gradient_stops=[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}])}_addGradientStop(e){if(!this.config.bars)return;const t=this.config.bars[e];if(!t)return;const i=Array.isArray(t.gradient_stops)&&t.gradient_stops.length>=2?[...t.gradient_stops]:[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}];if(i.length>=this.MAX_STOPS)return void console.warn("[BarsTab] Max gradient stops reached.");const n=function(e){const t=[...e].sort(((e,t)=>e.position-t.position));if(t.length>=7)return null;const i=new Set(t.map((e=>e.id)));let n=-1;for(let e=3;e<=7;e++)if(!i.has(String(e))){n=e;break}if(-1===n)return null;let a=0,o=50,r=0;for(let e=0;e<t.length-1;e++){const i=t[e+1].position-t[e].position;i>a&&(a=i,o=t[e].position+i/2,r=e)}const s=$e(t[r].color)||{r:255,g:255,b:0},l=$e(t[r+1].color)||{r:0,g:255,b:0},c=Math.round(s.r+.5*(l.r-s.r)),d=Math.round(s.g+.5*(l.g-s.g)),p=Math.round(s.b+.5*(l.b-s.b)),g=`#${c.toString(16).padStart(2,"0")}${d.toString(16).padStart(2,"0")}${p.toString(16).padStart(2,"0")}`;return{id:String(n),position:Math.max(1,Math.min(99,Math.round(o))),color:g}}(i);if(!n)return;const a=[...i,n].sort(((e,t)=>e.position-t.position)),o=this.config.bars.map(((t,i)=>i===e?Object.assign(Object.assign({},t),{gradient_stops:a,use_gradient:!0}):t));this.config=Object.assign(Object.assign({},this.config),{bars:o}),this._fireConfigChanged(this.config),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}),this.requestUpdate()}_updateGradientStop(e,t){this._updateStopDebounceTimer&&clearTimeout(this._updateStopDebounceTimer),this._updateStopDebounceTimer=setTimeout((()=>{var i;if(!this.config.bars||!(null===(i=this.config.bars[e])||void 0===i?void 0:i.gradient_stops))return;let n=!1;const a=this.config.bars.map(((i,a)=>{if(a===e){let e=i.gradient_stops;const a=e.findIndex((e=>e.id===t.id));return-1===a?i:(e[a].position!==t.position&&(n=!0),e=e.map((e=>e.id===t.id?t:e)),n&&(e=e.sort(((e,t)=>e.position-t.position))),Object.assign(Object.assign({},i),{gradient_stops:e}))}return i}));this.config=Object.assign(Object.assign({},this.config),{bars:a}),this._fireConfigChanged(this.config),n&&(this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1})),this.requestUpdate()}),this.DEBOUNCE_DELAY)}_removeGradientStop(e,t){var i;if(!this.config.bars||!(null===(i=this.config.bars[e])||void 0===i?void 0:i.gradient_stops)||this.config.bars[e].gradient_stops.length<=2)return;const n=this.config.bars.map(((i,n)=>{if(n===e){const e=i.gradient_stops.filter((e=>e.id!==t));return e.sort(((e,t)=>e.position-t.position)),Object.assign(Object.assign({},i),{gradient_stops:e})}return i}));this.config=Object.assign(Object.assign({},this.config),{bars:n}),this._fireConfigChanged(this.config),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}),this.requestUpdate()}_handleDuplicateStop(e,t){var i;if(!this.config.bars||!(null===(i=this.config.bars[e])||void 0===i?void 0:i.gradient_stops))return;const n=this.config.bars[e].gradient_stops;if(n.length>=this.MAX_STOPS)return void console.warn("[BarsTab] Cannot duplicate stop: Max stops reached.");const a=n.find((e=>e.id===t));if(!a)return;const o=Object.assign(Object.assign({},a),{id:this._generateUniqueId(),position:Math.max(1,Math.min(99,a.position+5))}),r=[...n,o].sort(((e,t)=>e.position-t.position)),s=this.config.bars.map(((t,i)=>i===e?Object.assign(Object.assign({},t),{gradient_stops:r}):t));this.config=Object.assign(Object.assign({},this.config),{bars:s}),this._fireConfigChanged(this.config),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}),this.requestUpdate()}render(){var e;return this.hass&&this.config?J`
      <div class="tab-content">
        <div class="section-header">${this._t("editor.bars.title")}</div>
        <div class="description">${this._t("editor.bars.description")}</div>
        <div class="bars-container">
          ${(null===(e=this.config.bars)||void 0===e?void 0:e.map(((e,t)=>this._renderBar(e,t))))||""}
          <div class="add-bar-container">
            <ha-button class="add-bar-button" @click=${this._addBar}>
              <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
              ${this._t("editor.bars.add")}
            </ha-button>
          </div>
        </div>
      </div>
    `:Y}_renderBar(e,t){const i=this._expandedBar===t,n=this._getFriendlyName(e.entity),a=this._truncateText(n,20),o=this._activeBarTabs[t]||"config";return J`
      <div class="bar ${i?"expanded":""}">
        <div class="bar-header" @click=${()=>this._toggleBarExpand(t)}>
          <div class="bar-title">
            ${this._t("editor.bars.bar_prefix","Bar")} ${t+1}
            <span class="bar-entity">${a||this._t("editor.bars.no_entity")}</span>
          </div>
          <div class="bar-actions">
            <ha-icon-button
              title="${this._t("editor.bars.duplicate")}"
              @click=${e=>{e.stopPropagation(),this._duplicateBar(t)}}
            >
              <ha-icon icon="mdi:content-copy"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
              title="${this._t("editor.bars.delete")}"
              @click=${e=>{e.stopPropagation(),this._removeBar(t)}}
            >
            </ha-icon-button>
            <ha-icon-button
              title="${i?this._t("editor.bars.collapse"):this._t("editor.bars.expand")}"
              .path=${i?"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z":"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}
              @click=${e=>{e.stopPropagation(),this._toggleBarExpand(t)}}
            >
            </ha-icon-button>
          </div>
        </div>

        ${i?this._renderBarContent(e,t,o):""}
      </div>
    `}_renderBarContent(e,t,i){return J`
      <div class="bar-content">
        <div class="bar-settings-tabs">
          <div
            class="bar-settings-tab ${"config"===i?"active":""}"
            @click=${e=>this._setActiveBarTab(e,t,"config")}
          >
            ${this._t("editor.bars.tabs.config")}
          </div>
          <div
            class="bar-settings-tab ${"colors"===i?"active":""}"
            @click=${e=>this._setActiveBarTab(e,t,"colors")}
          >
            ${this._t("editor.bars.tabs.colors")}
          </div>
          <div
            class="bar-settings-tab ${"animation"===i?"active":""}"
            @click=${e=>this._setActiveBarTab(e,t,"animation")}
          >
            ${this._t("editor.bars.tabs.animation")}
          </div>
        </div>
        <div class="bar-settings-content">
          ${"config"===i?this._renderBarConfigurationTab(e,t):""}
          ${"colors"===i?this._renderBarColorsTab(e,t):""}
          ${"animation"===i?this._renderBarAnimationTab(e,t):""}
        </div>
      </div>
    `}_renderBarConfigurationTab(e,t){const i=this._prepareBarData(e,t),n=this._getMainBarSchema(t);return J`
      <div class="section-group main-bar-settings">
        <div class="subsection-header">
          <span>${this._t("editor.bars.settings.header")}</span>
        </div>

        <!-- Render Entity, Limit Entity, Limit Color first -->
        <ha-form
          .hass=${this.hass}
          .data=${i}
          .schema=${n.slice(0,3)} // Only first 3 items
          .computeLabel=${e=>this._t(e.label||e.name)}
          .computeDescription=${e=>this._t(e.description||"")}
          @value-changed=${e=>this._barValueChanged(e,t)}
        ></ha-form>

        <!-- Render Show Percentage Toggle Separately -->
        <ha-form
          .hass=${this.hass}
          .data=${i}
          .schema=${[{name:`bars.${t}.show_percentage`,selector:{boolean:{}},label:this._t("editor.bars.settings.show_percentage","Show Percentage"),description:this._t("editor.bars.settings.show_percentage_description","Show the percentage value inside the bar")}]}
          .computeLabel=${e=>this._t(e.label||e.name)}
          .computeDescription=${e=>this._t(e.description||"")}
          @value-changed=${e=>this._barValueChanged(e,t)}
        ></ha-form>

        <!-- Conditionally render Percentage Text Settings -->
        ${e.show_percentage?J`
                <div class="percentage-settings-container" style="padding: 0 16px;">
                  <div
                    class="divider"
                    style="margin: 16px 0 8px; height: 1px; background: var(--divider-color);"
                  ></div>
                  ${this._renderPercentageTextSize(e,t)}
                </div>
              `:""}

          <!-- Render the rest of the main settings -->
          <ha-form
            .hass=${this.hass}
            .data=${i}
            .schema=${n.slice(3)} // Rest of the items (Thickness, Width, Radius, Alignment)
            .computeLabel=${e=>this._t(e.label||e.name)}
            .computeDescription=${e=>this._t(e.description||"")}
            @value-changed=${e=>this._barValueChanged(e,t)}
          ></ha-form>

      </div>

      <!-- Left Side Settings (completely separated) -->
      <div class="section-group left-side-settings">
        <div class="subsection-header">
          <span>${this._t("editor.bars.left_side.header")}</span>
          <ha-switch
            .checked=${!1!==e.show_left}
            @change=${e=>{this._updateBarProperty(t,"show_left",e.target.checked),this.requestUpdate()}}
            title="${this._t("editor.bars.left_side.toggle_description")}"
          ></ha-switch>
        </div>

        ${!1!==e.show_left?J`
                <div class="side-fields-container">
                  <ha-form
                    .hass=${this.hass}
                    .data=${i}
                    .schema=${this._getLeftSideSchema(t)}
                    .computeLabel=${e=>this._t(e.label||e.name)}
                    .computeDescription=${e=>this._t(e.description||"")}
                    @value-changed=${e=>this._barValueChanged(e,t)}
                  ></ha-form>

                  ${!1===e.show_right?J`
                        <div class="alignment-control-wrapper">
                          <div class="divider"></div>
                          <div class="left-side-alignment">
                            ${this._renderAlignmentControl(t,e.alignment||"flex-start","editor.bars.left_side.alignment_description")}
                          </div>
                        </div>
                      `:""}

                  <div class="divider"></div>
                  <div class="size-fields-wrapper left-size-fields">
                    <div class="size-field">
                      <ha-form
                        .hass=${this.hass}
                        .data=${i}
                        .schema=${this._getLeftTitleSizeSchema(t)}
                        .computeLabel=${e=>this._t(e.label||e.name)}
                        @value-changed=${e=>this._barValueChanged(e,t)}
                      ></ha-form>
                    </div>
                    <div class="size-field">
                      <ha-form
                        .hass=${this.hass}
                        .data=${i}
                        .schema=${this._getLeftTextSizeSchema(t)}
                        .computeLabel=${e=>this._t(e.label||e.name)}
                        @value-changed=${e=>this._barValueChanged(e,t)}
                      ></ha-form>
                    </div>
                  </div>
                </div>
              `:J`<div class="side-disabled">
                ${this._t("editor.bars.left_side.hidden_message")}
              </div>`}
      </div>

      <!-- Right Side Settings (completely separated) -->
      <div class="section-group right-side-settings">
        <div class="subsection-header">
          <span>${this._t("editor.bars.right_side.header")}</span>
          <ha-switch
            .checked=${!1!==e.show_right}
            @change=${e=>{this._updateBarProperty(t,"show_right",e.target.checked),this.requestUpdate()}}
            title="${this._t("editor.bars.right_side.toggle_description")}"
          ></ha-switch>
        </div>

        ${!1!==e.show_right?J`
                <div class="side-fields-container">
                  <ha-form
                    .hass=${this.hass}
                    .data=${i}
                    .schema=${this._getRightSideSchema(t)}
                    .computeLabel=${e=>this._t(e.label||e.name)}
                    .computeDescription=${e=>this._t(e.description||"")}
                    @value-changed=${e=>this._barValueChanged(e,t)}
                  ></ha-form>

                  ${!1===e.show_left?J`
                        <div class="alignment-control-wrapper">
                          <div class="divider"></div>
                          <div class="right-side-alignment">
                            ${this._renderAlignmentControl(t,e.alignment||"flex-end","editor.bars.right_side.alignment_description")}
                          </div>
                        </div>
                      `:""}

                  <div class="divider"></div>
                  <div class="size-fields-wrapper right-size-fields">
                    <div class="size-field">
                      <ha-form
                        .hass=${this.hass}
                        .data=${i}
                        .schema=${this._getRightTitleSizeSchema(t)}
                        .computeLabel=${e=>this._t(e.label||e.name)}
                        @value-changed=${e=>this._barValueChanged(e,t)}
                      ></ha-form>
                    </div>
                    <div class="size-field">
                      <ha-form
                        .hass=${this.hass}
                        .data=${i}
                        .schema=${this._getRightTextSizeSchema(t)}
                        .computeLabel=${e=>this._t(e.label||e.name)}
                        @value-changed=${e=>this._barValueChanged(e,t)}
                      ></ha-form>
                    </div>
                  </div>
                </div>
              `:J`<div class="side-disabled">
                ${this._t("editor.bars.right_side.hidden_message")}
              </div>`}
      </div>
    `}_renderAlignmentControl(e,t,i){const n=[{value:"flex-start",label:this._t("editor.alignment.left")},{value:"center",label:this._t("editor.alignment.center")},{value:"flex-end",label:this._t("editor.alignment.right")}];return J`
      <ha-form
        .hass=${this.hass}
        .data=${{alignment:t}}
        .schema=${[{name:"alignment",selector:{select:{options:n,mode:"dropdown"}},label:this._t("editor.bars.settings.alignment")}]}
        .computeLabel=${e=>this._t(e.label||e.name)}
        @value-changed=${t=>{t.stopPropagation(),this._updateBarProperty(e,"alignment",t.detail.value.alignment)}}
      ></ha-form>
      <div class="helper-text">${this._t(i)}</div>
    `}_renderBarColorsTab(e,t){return J`
      <div class="section-group">${this._renderColorPickersGrid(e,t)}</div>
      <div class="section-group" @click=${e=>e.stopPropagation()}>
        <div class="subsection-header">
          <span>${this._t("editor.bars.gradient.header")}</span>
        </div>
        <div style="padding: 16px;">
          <!-- Create a specific data object for this form -->
          ${(()=>{var i;const n=Object.assign({use_gradient:null!==(i=e.use_gradient)&&void 0!==i&&i},e.use_gradient&&{gradient_display_mode:e.gradient_display_mode||"value_based"}),a=[{name:"use_gradient",selector:{boolean:{}},label:this._t("editor.bars.gradient.toggle"),description:this._t("editor.bars.gradient.toggle_description")},...e.use_gradient?[{name:"gradient_display_mode",selector:{select:{options:[{value:"full",label:this._t("editor.bars.gradient.display_mode_full")},{value:"value_based",label:this._t("editor.bars.gradient.display_mode_value_based")},{value:"cropped",label:this._t("editor.bars.gradient.display_mode_cropped")}],mode:"dropdown"}},label:this._t("editor.bars.gradient.display_mode"),description:this._t("editor.bars.gradient.display_mode_description")}]:[]];return J`
              <ha-form
                .hass=${this.hass}
                .data=${n}
                .schema=${a}
                .computeLabel=${e=>this._t(e.label||e.name)}
                .computeDescription=${e=>this._t(e.description||"")}
                @value-changed=${e=>this._handleGradientFormChange(e,t)}
              ></ha-form>
            `})()}
        </div>
      </div>
      ${e.use_gradient?this._renderGradientEditor(e,t):""}
    `}_handleGradientFormChange(e,t){if(e.stopPropagation(),!this.config.bars||!this.config.bars[t])return;const i=e.detail.value,n=JSON.parse(JSON.stringify(this.config));let a=!1;void 0!==i.use_gradient&&n.bars[t].use_gradient!==i.use_gradient&&(n.bars[t].use_gradient=i.use_gradient,a=!0,i.use_gradient&&(this._ensureGradientStops(n.bars[t]),n.bars[t].gradient_display_mode||(n.bars[t].gradient_display_mode="value_based"))),void 0!==i.gradient_display_mode&&n.bars[t].gradient_display_mode!==i.gradient_display_mode&&(n.bars[t].gradient_display_mode=i.gradient_display_mode,a=!0),a&&(this._fireConfigChanged(n),this.requestUpdate())}_renderBarAnimationTab(e,t){const i=this._prepareBarData(e,t);return J`
      <div class="section-group">
        <div class="subsection-header">
          <span>${this._t("editor.bars.animation.header")}</span>
        </div>
        <div
          class="action-animation-description"
          style="padding: 8px 16px; margin-bottom: 8px; color: var(--secondary-text-color);"
        >
          ${this._t("editor.bars.animation.description")}
        </div>
        <div
          style="background: rgba(0,0,0,0.05); padding: 8px 16px; margin: 0 16px 16px; border-radius: 4px; color: var(--primary-text-color);"
        >
          ${this._t("editor.bars.animation.pro_tip")}
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${i}
          .schema=${[{name:`bars.${t}.animation_entity`,selector:{entity:{}},label:this._t("editor.bars.animation.entity"),description:this._t("editor.bars.animation.entity_description")}]}
          .computeLabel=${e=>this._t(e.label||e.name)}
          .computeDescription=${e=>this._t(e.description||"")}
          @value-changed=${e=>{this._barValueChanged(e,t),this.requestUpdate()}}
        ></ha-form>
        ${e.animation_entity?J`
              <ha-form
                .hass=${this.hass}
                .data=${i}
                .schema=${[{name:`bars.${t}.animation_state`,selector:{text:{}},label:this._t("editor.bars.animation.state"),description:this._t("editor.bars.animation.state_description")}]}
                .computeLabel=${e=>this._t(e.label||e.name)}
                .computeDescription=${e=>this._t(e.description||"")}
                @value-changed=${e=>this._barValueChanged(e,t)}
              ></ha-form>
            `:J`<div
              style="padding: 0 16px 16px; color: var(--secondary-text-color); margin-top: 8px;"
            >
              ${this._t("editor.bars.animation.select_entity_prompt",'Select an Entity and type in the state you would like to trigger the animation with (examples: "charging", "on", "idle")')}
            </div>`}
        <ha-form
          .hass=${this.hass}
          .data=${i}
          .schema=${[{name:`bars.${t}.animation_type`,selector:{select:{options:[{value:"none",label:this._t("editor.bars.animation_types.none")},{value:"charging-lines",label:this._t("editor.bars.animation_types.charging-lines")},{value:"pulse",label:this._t("editor.bars.animation_types.pulse")},{value:"blinking",label:this._t("editor.bars.animation_types.blinking")},{value:"bouncing",label:this._t("editor.bars.animation_types.bouncing")},{value:"glow",label:this._t("editor.bars.animation_types.glow")},{value:"rainbow",label:this._t("editor.bars.animation_types.rainbow")},{value:"bubbles",label:this._t("editor.bars.animation_types.bubbles")},{value:"fill",label:this._t("editor.bars.animation_types.fill")},{value:"ripple",label:this._t("editor.bars.animation_types.ripple","Ripple")},{value:"traffic",label:this._t("editor.bars.animation_types.traffic","Traffic")},{value:"heartbeat",label:this._t("editor.bars.animation_types.heartbeat","Heartbeat")},{value:"flicker",label:this._t("editor.bars.animation_types.flicker","Flicker")},{value:"shimmer",label:this._t("editor.bars.animation_types.shimmer","Shimmer")},{value:"vibrate",label:this._t("editor.bars.animation_types.vibrate","Vibrate")}],mode:"dropdown"}},label:this._t("editor.bars.animation.type"),description:this._t("editor.bars.animation.type_description")}]}
          .computeLabel=${e=>this._t(e.label||e.name)}
          .computeDescription=${e=>this._t(e.description||"")}
          @value-changed=${e=>this._barValueChanged(e,t)}
        ></ha-form>
      </div>

      <!-- Action Animation Override Section -->
      <div class="section-group" style="margin-top: 20px;">
        <div class="subsection-header">
          <span
            >${this._t("editor.bars.animation.action_header","Action Animation Override")}</span
          >
        </div>
        <div style="padding: 8px 16px; margin-bottom: 8px; color: var(--secondary-text-color);">
          ${this._t("editor.bars.animation.action_description","This animation will override the regular animation when the specified entity is in a specific state.")}
        </div>

        <ha-form
          .hass=${this.hass}
          .data=${i}
          .schema=${[{name:`bars.${t}.action_animation_entity`,selector:{entity:{}},label:this._t("editor.bars.animation.action_entity","Action Entity"),description:this._t("editor.bars.animation.action_entity_description","Entity that triggers the action animation")}]}
          .computeLabel=${e=>this._t(e.label||e.name)}
          .computeDescription=${e=>this._t(e.description||"")}
          @value-changed=${e=>{this._barValueChanged(e,t),this.requestUpdate()}}
        ></ha-form>

        ${e.action_animation_entity?J`
              <ha-form
                .hass=${this.hass}
                .data=${i}
                .schema=${[{name:`bars.${t}.action_animation_state`,selector:{text:{}},label:this._t("editor.bars.animation.action_state","Trigger State"),description:this._t("editor.bars.animation.action_state_description","State that triggers the action animation")}]}
                .computeLabel=${e=>this._t(e.label||e.name)}
                .computeDescription=${e=>this._t(e.description||"")}
                @value-changed=${e=>this._barValueChanged(e,t)}
              ></ha-form>
            `:J`<div
              style="padding: 0 16px 16px; color: var(--secondary-text-color); margin-top: 8px;"
            >
              ${this._t("editor.bars.animation.action_select_prompt","Select an Action Entity and state to define when this animation should override the regular animation")}
            </div>`}
        ${e.action_animation_entity?J`
              <ha-form
                .hass=${this.hass}
                .data=${i}
                .schema=${[{name:`bars.${t}.action_animation`,selector:{select:{options:[{value:"none",label:this._t("editor.bars.animation_types.none")},{value:"charging-lines",label:this._t("editor.bars.animation_types.charging-lines")},{value:"pulse",label:this._t("editor.bars.animation_types.pulse")},{value:"blinking",label:this._t("editor.bars.animation_types.blinking")},{value:"bouncing",label:this._t("editor.bars.animation_types.bouncing")},{value:"glow",label:this._t("editor.bars.animation_types.glow")},{value:"rainbow",label:this._t("editor.bars.animation_types.rainbow")},{value:"bubbles",label:this._t("editor.bars.animation_types.bubbles")},{value:"fill",label:this._t("editor.bars.animation_types.fill")},{value:"ripple",label:this._t("editor.bars.animation_types.ripple","Ripple")},{value:"traffic",label:this._t("editor.bars.animation_types.traffic","Traffic")},{value:"heartbeat",label:this._t("editor.bars.animation_types.heartbeat","Heartbeat")},{value:"flicker",label:this._t("editor.bars.animation_types.flicker","Flicker")},{value:"shimmer",label:this._t("editor.bars.animation_types.shimmer","Shimmer")},{value:"vibrate",label:this._t("editor.bars.animation_types.vibrate","Vibrate")}],mode:"dropdown"}},label:this._t("editor.bars.animation.action_type","Action Animation"),description:this._t("editor.bars.animation.action_type_description","Animation to show when action condition is met")}]}
                .computeLabel=${e=>this._t(e.label||e.name)}
                .computeDescription=${e=>this._t(e.description||"")}
                @value-changed=${e=>this._barValueChanged(e,t)}
              ></ha-form>
            `:""}
      </div>
    `}_renderPercentageTextSize(e,t){return J`
      <div class="percentage-settings">
        <div class="percentage-text-header">
          ${this._t("editor.bars.percentage.header","Percentage Text")}
        </div>
        <div class="size-fields-wrapper" style="display: flex; gap: 16px; margin-top: 8px;">
          <div class="size-field" style="flex: 1;">
            <ha-form
              .hass=${this.hass}
              .data=${this._prepareBarData(e,t)}
              .schema=${[{name:`bars.${t}.percentage_text_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.percentage.text_size","Text Size")}]}
              .computeLabel=${e=>this._t(e.label||e.name)}
              @value-changed=${e=>this._barValueChanged(e,t)}
            ></ha-form>
          </div>

          <!-- Remove the color picker from here -->
          <!--
          <div class="size-field" style="flex: 1;">
            <ha-form
              .hass=${this.hass}
              .data=${this._prepareBarData(e,t)}
              .schema=${[{name:`bars.${t}.percentage_text_color`,selector:{color:{type:"hex"}},label:this._t("editor.bars.colors.percentage_text_color","Text Color")}]}
              .computeLabel=${e=>this._t(e.label||e.name)}
              @value-changed=${e=>this._barValueChanged(e,t)}
            ></ha-form>
          </div>
          -->
        </div>
      </div>
    `}_renderColorPickersGrid(e,t){const i=[{name:"bar_color",labelKey:"editor.bars.colors.bar_color",default:Et.bar_color},{name:"background_color",labelKey:"editor.bars.colors.background_color",default:Et.background_color},{name:"border_color",labelKey:"editor.bars.colors.border_color",default:Et.border_color},{name:"limit_indicator_color",labelKey:"editor.bars.colors.limit_indicator_color",default:Et.limit_indicator_color},{name:"left_title_color",labelKey:"editor.bars.colors.left_title_color",default:Et.left_title_color},{name:"left_text_color",labelKey:"editor.bars.colors.left_value_color",default:Et.left_text_color},{name:"right_title_color",labelKey:"editor.bars.colors.right_title_color",default:Et.right_title_color},{name:"right_text_color",labelKey:"editor.bars.colors.right_value_color",default:Et.right_text_color},{name:"percentage_text_color",labelKey:"editor.bars.colors.percentage_text_color",default:Et.percentage_text_color}];return J`
      <div class="subsection-header">${this._t("editor.bars.colors.header")}</div>
      <div class="color-pickers-grid">
        ${i.map((i=>{const n=e[i.name],a=i.default,o=n||a;return J`
            <div class="color-picker-item">
              <div class="color-picker-label">
                ${this._t(i.labelKey,i.labelKey.split(".").pop()||"")}
              </div>
              <div class="color-picker-control">
                <color-picker
                  .value=${o}
                  .configValue=${i.name}
                  .showResetButton=${!1}
                  @value-changed=${e=>{e.stopPropagation();const n=e.detail.value[i.name];this._handleColorChange(t,i.name,n)}}
                ></color-picker>
                <ha-icon-button
                  class="reset-button"
                  @click=${()=>this._resetBarColor(t,i.name,i.default)}
                  title="${this._t("editor.bars.colors.reset_color")}"
                >
                  <ha-icon icon="mdi:refresh"></ha-icon>
                </ha-icon-button>
              </div>
            </div>
          `}))}
      </div>
    `}_renderGradientEditor(e,t){this._ensureGradientStops(e);const i=e.gradient_stops||[],n=this._gradientEditorKeys[t]||0;return J`
      <div class="gradient-editor-section">
        <div class="gradient-header">
          <span>${this._t("editor.bars.gradient.editor_header")}</span>
          <ha-button
            @click=${()=>this._addGradientStop(t)}
            class="add-stop-button"
            ?disabled=${i.length>=this.MAX_STOPS}
            title=${i.length>=this.MAX_STOPS?"Maximum stops reached":"Add Stop"}
          >
            <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
            ${this._t("editor.bars.gradient.add_stop")}
          </ha-button>
        </div>
        <!-- Remove the preview div rendered by bars-tab -->

        <ultra-vehicle-gradient-editor
          .key=${n}
          .stops=${i}
          @stop-changed=${e=>this._updateGradientStop(t,e.detail)}
          @stop-removed=${e=>this._removeGradientStop(t,e.detail.id)}
          @stop-duplicated=${e=>this._handleDuplicateStop(t,e.detail.id)}
          @stops-rearranged=${e=>this._updateGradientStopsOrder(t,e.detail.stops)}
          <!-- @stops-rearranged=${""} -->
          <!-- Comment out stops-rearranged until drag/drop is added -->
        ></ultra-vehicle-gradient-editor>
      </div>
    `}_getMainBarSchema(e){return[{name:`bars.${e}.entity`,selector:{entity:{}},label:this._t("editor.bars.settings.entity"),description:this._t("editor.bars.settings.entity_description")},{name:`bars.${e}.limit_entity`,selector:{entity:{}},label:this._t("editor.bars.settings.limit_entity"),description:this._t("editor.bars.settings.limit_entity_description")},{name:`bars.${e}.limit_indicator_color`,selector:{color:{type:"hex"}},label:this._t("editor.bars.settings.limit_color"),description:this._t("editor.bars.settings.limit_color_description")},{name:`bars.${e}.bar_size`,selector:{select:{options:[{value:"thin",label:this._t("editor.bars.bar_sizes.thin")},{value:"regular",label:this._t("editor.bars.bar_sizes.regular")},{value:"thick",label:this._t("editor.bars.bar_sizes.thick")},{value:"thiccc",label:this._t("editor.bars.bar_sizes.thiccc")}],mode:"dropdown"}},label:this._t("editor.bars.settings.bar_size"),description:this._t("editor.bars.settings.bar_size_description")},{name:`bars.${e}.width`,selector:{select:{options:[{value:"100",label:this._t("editor.bars.bar_widths.100")},{value:"75",label:this._t("editor.bars.bar_widths.75")},{value:"50",label:this._t("editor.bars.bar_widths.50")},{value:"25",label:this._t("editor.bars.bar_widths.25")}],mode:"dropdown"}},label:this._t("editor.bars.settings.width"),description:this._t("editor.bars.settings.width_description")},{name:`bars.${e}.bar_radius`,selector:{select:{options:[{value:"round",label:this._t("editor.bars.bar_radius.round","Round")},{value:"square",label:this._t("editor.bars.bar_radius.square","Square")},{value:"rounded-square",label:this._t("editor.bars.bar_radius.rounded-square","Rounded Square")}],mode:"dropdown"}},label:this._t("editor.bars.settings.bar_radius","Bar Radius"),description:this._t("editor.bars.settings.bar_radius_description","Choose the shape of the bar corners")},{name:`bars.${e}.alignment`,selector:{select:{options:[{value:"space-between",label:this._t("editor.bars.bar_alignments.space-between")},{value:"flex-start",label:this._t("editor.bars.bar_alignments.flex-start")},{value:"center",label:this._t("editor.bars.bar_alignments.center")},{value:"flex-end",label:this._t("editor.bars.bar_alignments.flex-end")}],mode:"dropdown"}},label:this._t("editor.bars.settings.alignment"),description:this._t("editor.bars.settings.alignment_description")}]}_getLeftSideSchema(e){return[{name:`bars.${e}.left_title`,selector:{text:{}},label:this._t("editor.bars.left_side.title"),description:this._t("editor.bars.left_side.title_description")},{name:`bars.${e}.left_entity`,selector:{entity:{}},label:this._t("editor.bars.left_side.entity"),description:this._t("editor.bars.left_side.entity_description")}]}_getRightSideSchema(e){return[{name:`bars.${e}.right_title`,selector:{text:{}},label:this._t("editor.bars.right_side.title"),description:this._t("editor.bars.right_side.title_description")},{name:`bars.${e}.right_entity`,selector:{entity:{}},label:this._t("editor.bars.right_side.entity"),description:this._t("editor.bars.right_side.entity_description")}]}_getLeftTitleSizeSchema(e){return[{name:`bars.${e}.left_title_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.left_side.title_size","Title Size")}]}_getLeftTextSizeSchema(e){return[{name:`bars.${e}.left_text_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.left_side.value_size","Value Size")}]}_getRightTitleSizeSchema(e){return[{name:`bars.${e}.right_title_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.right_side.title_size","Title Size")}]}_getRightTextSizeSchema(e){return[{name:`bars.${e}.right_text_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.right_side.value_size","Value Size")}]}_getGradientToggleSchema(e){var t,i;return[{name:`bars.${e}.use_gradient`,selector:{boolean:{}},label:this._t("editor.bars.gradient.toggle"),description:this._t("editor.bars.gradient.toggle_description")},...(null===(i=null===(t=this.config.bars)||void 0===t?void 0:t[e])||void 0===i?void 0:i.use_gradient)?[{name:`bars.${e}.gradient_display_mode`,selector:{select:{options:[{value:"full",label:this._t("editor.bars.gradient.display_mode_full")},{value:"value_based",label:this._t("editor.bars.gradient.display_mode_value_based")},{value:"cropped",label:this._t("editor.bars.gradient.display_mode_cropped")}],mode:"dropdown"}},label:this._t("editor.bars.gradient.display_mode"),description:this._t("editor.bars.gradient.display_mode_description")}]:[]]}_prepareBarData(e,t){var i,n,a,o;const r={};return Object.entries(e).forEach((([e,i])=>{r[`bars.${t}.${e}`]=i})),r[`bars.${t}.use_gradient`]=null!==(i=e.use_gradient)&&void 0!==i&&i,r[`bars.${t}.show_left`]=null===(n=e.show_left)||void 0===n||n,r[`bars.${t}.show_right`]=null===(a=e.show_right)||void 0===a||a,r[`bars.${t}.show_percentage`]=null!==(o=e.show_percentage)&&void 0!==o&&o,r}_generateGradientPreview(e){if(!e||e.length<2)return"linear-gradient(to right, #ccc, #ccc)";const t=[...e].sort(((e,t)=>e.position-t.position));return`linear-gradient(to right, ${t.map((e=>`${e.color} ${e.position}%`)).join(", ")})`}_updateGradientStopsOrder(e,t){if(console.log(`[BarsTab] Received stops-rearranged event for bar ${e}. Input stops:`,JSON.stringify(t)),!this.config.bars||!this.config.bars[e])return;const i=[...t].sort(((e,t)=>e.position-t.position));console.log("[BarsTab] Received user-ordered stops:",JSON.stringify(t)),console.log("[BarsTab] Re-sorted stops by position for saving:",JSON.stringify(i));const n=this.config.bars.map(((t,n)=>n===e?Object.assign(Object.assign({},t),{gradient_stops:i}):t));this.config=Object.assign(Object.assign({},this.config),{bars:n}),this._fireConfigChanged(this.config),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}),this.requestUpdate()}};jt.styles=d`
    .tab-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .section-header {
      font-size: 1.1em;
      font-weight: 500;
      padding: 12px 16px;
      background-color: var(--primary-color);
      color: var(--text-primary-color);
      margin-bottom: 0;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom: 1px solid var(--divider-color);
    }
    .description {
      font-size: 14px;
      color: var(--secondary-text-color);
      margin-bottom: 8px;
      padding: 0 16px; /* Add padding */
    }
    .bars-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 0 16px; /* Add padding */
      margin-top: 8px;
    }
    .bar {
      margin-bottom: 8px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      background-color: var(--secondary-background-color);
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .bar.expanded {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      border-color: var(--primary-color);
    }
    .bar-header {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      cursor: pointer;
      background-color: var(--card-background-color, rgba(0, 0, 0, 0.05));
    }
    .bar-content {
      padding: 16px;
      background-color: var(--primary-background-color);
    }
    .bar-title {
      flex-grow: 1;
      font-weight: 500;
      display: flex;
      align-items: center;
      overflow: hidden;
    }
    .bar-entity {
      display: block;
      margin-left: 24px;
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      opacity: 0.7;
      font-size: 0.9em;
    }
    .bar-actions {
      display: flex;
      gap: 8px;
      flex-shrink: 0;
    }
    .bar-actions ha-icon-button[title='Duplicate Bar'] ha-icon {
      transform: translateY(-4px);
    }
    .add-bar-container {
      display: flex;
      justify-content: center;
      margin: 16px 0;
    }
    .add-bar-button {
      --mdc-theme-primary: var(--primary-color);
      width: 100%;
    }
    .add-icon {
      margin-right: 8px;
      --mdc-icon-color: var(--text-primary-color);
    }
    .bar-settings-tabs {
      display: flex;
      width: 100%;
      border-bottom: 1px solid var(--divider-color);
      margin-bottom: 16px;
    }
    .bar-settings-tab {
      padding: 8px 12px;
      font-size: 0.9em;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      margin-bottom: -1px;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
      text-align: center;
      flex: 1;
    }
    .bar-settings-tab:hover {
      background-color: rgba(var(--rgb-primary-color), 0.1);
      color: var(--primary-text-color);
    }
    .bar-settings-tab.active {
      border-bottom: 2px solid var(--primary-color);
      color: var(--primary-color);
      font-weight: 500;
    }
    .bar-settings-content {
      padding: 0 4px;
    }
    .section-group {
      margin-bottom: 20px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
      background-color: var(--card-background-color, #1c1c1c);
      padding: 16px;
      position: relative;
    }

    /* Distinct styling for each settings group */
    .section-group.main-bar-settings {
      border-left: 3px solid var(--primary-color);
    }

    .section-group.left-side-settings {
      border-left: 3px solid var(--primary-color);
    }

    .section-group.right-side-settings {
      border-left: 3px solid var(--primary-color);
    }

    .subsection-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 16px;
      font-weight: 500;
      border-bottom: 1px solid var(--divider-color);
      margin-bottom: 16px;
    }

    .side-fields-container {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .divider {
      height: 1px;
      background-color: var(--divider-color);
      margin: 16px 0;
      width: 100%;
    }

    .alignment-control-wrapper {
      padding: 0;
      margin-top: 16px;
    }

    .left-side-alignment,
    .right-side-alignment {
      padding: 16px;
      border-radius: 8px;
      margin-top: 8px;
      background: rgba(var(--rgb-primary-color), 0.05);
      border-left: 3px solid var(--primary-color);
    }

    .left-side-alignment {
      border-color: var(--primary-color);
    }

    .right-side-alignment {
      border-color: var(--primary-color);
    }

    .size-fields-wrapper {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 8px 0;
    }

    .left-size-fields,
    .right-size-fields {
      padding: 16px;
      border-radius: 8px;
      background: rgba(var(--rgb-primary-color), 0.05);
    }

    .left-size-fields {
      border-left: 3px solid var(--primary-color);
    }

    .right-size-fields {
      border-left: 3px solid var(--primary-color);
    }

    .side-disabled {
      padding: 16px;
      color: var(--secondary-text-color);
      font-style: italic;
      text-align: center;
      background: rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      margin-top: 8px;
    }

    .helper-text {
      color: var(--secondary-text-color);
      font-size: 0.8em;
      padding: 4px 0 0;
      opacity: 0.8;
    }

    .size-field {
      display: flex;
      align-items: center;
      position: relative;
    }

    .size-field ha-form {
      flex: 1;
      margin-bottom: 0;
    }

    .inline-reset-button {
      --mdc-icon-button-size: 36px;
      margin-left: 8px;
      color: var(--secondary-text-color);
      opacity: 0.8;
    }

    .inline-reset-button:hover {
      opacity: 1;
      color: var(--primary-color);
    }

    .color-pickers-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 20px;
      margin: 0;
      padding: 16px;
    }

    .color-picker-item {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 8px;
      width: 100%;
    }

    .color-picker-label {
      font-weight: 500;
      font-size: 0.9em;
      color: var(--primary-text-color);
    }

    .color-picker-control {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .color-picker-item color-picker {
      flex-grow: 1;
      min-width: 0;
    }

    .reset-button {
      --mdc-icon-button-size: 36px;
      color: var(--secondary-text-color);
      opacity: 0.8;
      flex-shrink: 0;
    }

    .reset-button:hover {
      opacity: 1;
      color: var(--primary-color);
    }

    .action-animation-description {
      padding: 8px 16px;
      margin-bottom: 8px;
      color: var(--secondary-text-color);
    }

    .gradient-editor-section {
      margin-top: 16px;
      padding: 16px;
      background-color: var(--card-background-color, #303030);
      border-radius: 8px;
      border: 1px solid var(--divider-color);
    }

    .gradient-header {
      font-size: 1.1em;
      font-weight: 500;
      padding: 0 0 12px 0;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--divider-color);
    }

    .gradient-preview {
      height: 32px;
      border-radius: 16px;
      margin: 16px 0 24px;
      border: 1px solid var(--divider-color);
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      border: 1px solid var(--primary-background-color);
    }
  `,zt([be({attribute:!1})],jt.prototype,"hass",void 0),zt([be({attribute:!1})],jt.prototype,"config",void 0),zt([fe()],jt.prototype,"_expandedBar",void 0),zt([fe()],jt.prototype,"_preventExpandCollapse",void 0),zt([fe()],jt.prototype,"_activeBarTabs",void 0),zt([fe()],jt.prototype,"_gradientEditorKeys",void 0),jt=zt([_e("bars-tab")],jt);var Lt=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};const Rt="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",Dt="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",Bt="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",Vt=[{value:"100",key:"editor.icons.row_widths.100"},{value:"75",key:"editor.icons.row_widths.75"},{value:"50",key:"editor.icons.row_widths.50"},{value:"25",key:"editor.icons.row_widths.25"}],Ot=[{value:"flex-start",key:"editor.icons.alignments.flex-start"},{value:"center",key:"editor.icons.alignments.center"},{value:"flex-end",key:"editor.icons.alignments.flex-end"},{value:"space-between",key:"editor.icons.alignments.space-between"},{value:"space-around",key:"editor.icons.alignments.space-around"},{value:"space-evenly",key:"editor.icons.alignments.space-evenly"}],Ut=[{value:"none",key:"editor.icons.spacing.none"},{value:"small",key:"editor.icons.spacing.small"},{value:"medium",key:"editor.icons.spacing.medium"},{value:"large",key:"editor.icons.spacing.large"}],Nt=[{value:"toggle",key:"editor.icons.click_actions.toggle"},{value:"more-info",key:"editor.icons.click_actions.more-info"},{value:"navigate",key:"editor.icons.click_actions.navigate"},{value:"url",key:"editor.icons.click_actions.url"},{value:"call-service",key:"editor.icons.click_actions.call-service"},{value:"perform-action",key:"editor.icons.click_actions.perform-action"},{value:"location-map",key:"editor.icons.click_actions.location-map"},{value:"assist",key:"editor.icons.click_actions.assist"},{value:"trigger",key:"editor.icons.click_actions.trigger"},{value:"none",key:"editor.icons.click_actions.none"}],Pt=[{value:"bottom",key:"editor.icons.text_positions.below"},{value:"top",key:"editor.icons.text_positions.top"},{value:"left",key:"editor.icons.text_positions.left"},{value:"right",key:"editor.icons.text_positions.right"}],Mt=[{value:"flex-start",key:"editor.icons.vertical_alignments.flex-start"},{value:"center",key:"editor.icons.alignments.center"},{value:"flex-end",key:"editor.icons.vertical_alignments.flex-end"}],Ft=[{value:"none",key:"editor.icons.backgrounds.none"},{value:"circle",key:"editor.icons.backgrounds.circle"},{value:"square",key:"editor.icons.backgrounds.square"},{value:"rounded-square",key:"editor.icons.backgrounds.rounded_square"}],qt=[{value:"100",key:"editor.icons.container_widths.100"},{value:"75",key:"editor.icons.container_widths.75"},{value:"50",key:"editor.icons.container_widths.50"},{value:"25",key:"editor.icons.container_widths.25"}];let Wt=class extends he{constructor(){super(...arguments),this._expandedIconRow=null,this._expandedIcon=null,this._draggedIconRow=null,this._draggedIcon=null,this._dropTargetRow=null,this._dropTargetIcon=null,this._activeIconTabs={}}_t(e,t){var i,n;return wt(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}_generateUniqueId(){return Math.random().toString(36).substring(2,9)}_getFriendlyName(e){var t,i;return e&&this.hass&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""}_truncateText(e,t=15){return e?e.length<=t?e:e.substring(0,t)+"...":""}_formatFieldName(e){return e?e.replace(/^./,(e=>e.toUpperCase())).replace(/_/g," "):""}_fireConfigChanged(e){Ke(this,"config-changed",{config:e})}_addIconRow(){const e=[...this.config.icon_rows||[]],t=this._createDefaultIconRow();e.push(t);let i=[...this.config.sections_order||[]];if(i.some((e=>e.startsWith("icon_row_")))){const e=`icon_row_${t.id}`,n=i.filter((e=>e.startsWith("icon_row_")));if(n.length>0){const t=i.lastIndexOf(n[n.length-1]);i.splice(t+1,0,e)}else{const t=i.indexOf("image"),n=i.indexOf("info"),a=i.indexOf("bars");-1!==t?i.splice(t+1,0,e):-1!==n?i.splice(n+1,0,e):-1!==a?i.splice(a,0,e):i.push(e)}}else if(!i.includes("icons")){const e=i.indexOf("image"),t=i.indexOf("info"),n=i.indexOf("bars");-1!==e?i.splice(e+1,0,"icons"):-1!==t?i.splice(t+1,0,"icons"):-1!==n?i.splice(n,0,"icons"):i.push("icons")}this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:e,sections_order:i})),this._expandedIconRow=t.id}_removeIconRow(e){const t=(this.config.icon_rows||[]).filter((t=>t.id!==e));let i=[...this.config.sections_order||[]];const n=`icon_row_${e}`;if(i=i.filter((e=>e!==n)),0===t.length&&i.includes("icons")){const e=i.indexOf("icons");-1!==e&&i.splice(e,1)}let a=Object.assign({},this.config.sections_columns||{});delete a[n],this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:t,sections_order:i,sections_columns:Object.keys(a).length>0?a:void 0})),this._expandedIconRow===e&&(this._expandedIconRow=null),this._expandedIcon&&this._expandedIcon.rowId===e&&(this._expandedIcon=null)}_duplicateIconRow(e){const t=this.config.icon_rows||[],i=t.findIndex((t=>t.id===e));if(-1===i)return void console.warn(`[IconsTab] Could not find row with id ${e} to duplicate.`);const n=t[i],a=JSON.parse(JSON.stringify(n));a.id=this._generateUniqueId();const o=[...t.slice(0,i+1),a,...t.slice(i+1)];let r=[...this.config.sections_order||[]];const s=`icon_row_${a.id}`,l=`icon_row_${e}`,c=r.indexOf(l);if(-1!==c)r.splice(c+1,0,s);else if(!r.includes("icons")){const e=r.indexOf("image"),t=r.indexOf("info"),i=r.indexOf("bars");-1!==e?r.splice(e+1,0,"icons"):-1!==t?r.splice(t+1,0,"icons"):-1!==i?r.splice(i,0,"icons"):r.push("icons")}const d=Object.assign(Object.assign({},this.config),{icon_rows:o,sections_order:r});this._fireConfigChanged(d),this._expandedIconRow=a.id}_duplicateIcon(e,t){if(!this.config||!this.config.icon_rows)return;const i=this.config.icon_rows.findIndex((t=>t.id===e));if(-1===i)return;const n=this.config.icon_rows[i];if(!n.icons||t<0||t>=n.icons.length)return;const a=n.icons[t],o=JSON.parse(JSON.stringify(a)),r=[...this.config.icon_rows],s=[...n.icons];s.splice(t+1,0,o),r[i]=Object.assign(Object.assign({},n),{icons:s}),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:r}))}_toggleIconRowExpand(e){this._expandedIconRow=this._expandedIconRow===e?null:e,this._expandedIcon&&this._expandedIcon.rowId===e&&null===this._expandedIconRow&&(this._expandedIcon=null)}_updateIconRowConfig(e,t){const i=(this.config.icon_rows||[]).map((i=>i.id===e?Object.assign(Object.assign({},i),t):i));this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:i}))}_addIcon(e){const t=JSON.parse(JSON.stringify(this.config));t.icon_rows||(t.icon_rows=[]);const i=t.icon_rows.findIndex((t=>t.id===e));if(i>=0){t.icon_rows[i].icons||(t.icon_rows[i].icons=[]);const n=this._createDefaultIcon();t.icon_rows[i].icons.push(n);const a=t.icon_rows[i].icons.length-1;this._fireConfigChanged(t),setTimeout((()=>{this._expandedIcon={rowId:e,iconIndex:a}}),50)}}_removeIcon(e,t){var i;const n=JSON.parse(JSON.stringify(this.config));if(!n.icon_rows)return;const a=n.icon_rows.findIndex((t=>t.id===e));-1===a||!n.icon_rows[a].icons||t<0||t>=n.icon_rows[a].icons.length?console.warn("[IconsTab] Invalid row or icon index for removal."):(n.icon_rows[a].icons.splice(t,1),this._fireConfigChanged(n),(null===(i=this._expandedIcon)||void 0===i?void 0:i.rowId)===e&&(this._expandedIcon.iconIndex===t?this._expandedIcon=null:this._expandedIcon.iconIndex>t&&(this._expandedIcon=Object.assign(Object.assign({},this._expandedIcon),{iconIndex:this._expandedIcon.iconIndex-1}))))}_toggleIconEdit(e,t){var i,n;if((null===(i=this._expandedIcon)||void 0===i?void 0:i.rowId)===e&&(null===(n=this._expandedIcon)||void 0===n?void 0:n.iconIndex)===t)this._expandedIcon=null;else{this._expandedIcon={rowId:e,iconIndex:t};const i=`${e}_${t}`;this._activeIconTabs=Object.assign(Object.assign({},this._activeIconTabs),{[i]:"general"})}}_updateIconConfig(e,t,i){var n,a,o;void 0!==i.active_template||i.inactive_template;const r=JSON.parse(JSON.stringify(this.config));if(!r.icon_rows)return;const s=r.icon_rows.findIndex((t=>t.id===e));if(s>=0&&t>=0&&t<r.icon_rows[s].icons.length){const e=null===(o=null===(a=null===(n=this.config.icon_rows)||void 0===n?void 0:n[s])||void 0===a?void 0:a.icons)||void 0===o?void 0:o[t];if(!e)return void console.error("[IconsTab] Could not retrieve actual current icon config.");const l=Object.assign({},i),c=Object.keys(i);let d=!1;if(void 0!==i.entity&&i.entity!==e.entity){d=!0;for(const t of c)if("entity"!==t&&i[t]!==e[t]){d=!1;break}}if(d){const t=i.entity;if(t){const i=this._getEntityIcon(t);i?(l.icon_inactive=i,l.icon_active=i):(l.icon_inactive=e.icon_inactive,l.icon_active=e.icon_active)}else l.icon_inactive="mdi:help-circle-outline",l.icon_active="mdi:help-circle"}if(void 0!==l.service_data&&"string"==typeof l.service_data)try{l.service_data=JSON.parse(l.service_data||"{}")}catch(e){}if(void 0!==l.action&&"string"==typeof l.action)try{l.action=JSON.parse(l.action)}catch(e){}const p=Object.assign({},r.icon_rows[s].icons[t]);r.icon_rows[s].icons[t]=Object.assign(Object.assign({},e),l),void 0!==l.active_template||l.inactive_template,this._fireConfigChanged(r),["color_active","color_inactive","name_color_active","name_color_inactive","state_color_active","state_color_inactive","icon_background_color","container_background_color"].some((e=>void 0!==l[e]&&p[e]!==l[e]))&&this.requestUpdate()}else console.warn("[IconsTab] Invalid row or icon index for update, or could not retrieve actual config.")}_handleIconDragStart(e,t,i){if(e.stopPropagation(),this._draggedIcon={rowId:t,iconIndex:i},e.dataTransfer){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("application/ultra-vehicle-icon",JSON.stringify({rowId:t,iconIndex:i}));const n=e.currentTarget;if(n){const t=n.getBoundingClientRect(),i=n.cloneNode(!0);i.style.width=`${t.width}px`,i.style.height=`${t.height}px`,i.style.opacity="0.85",i.style.position="absolute",i.style.top="-1000px",i.style.borderRadius="8px",i.style.backgroundColor="var(--card-background-color, #303030)",i.style.border="2px dashed var(--primary-color)",i.style.boxShadow="0 4px 8px rgba(0,0,0,0.2)",i.style.zIndex="9999",i.style.whiteSpace="nowrap",i.style.overflow="hidden";const a=i.querySelector(".mini-bar-header");a&&a instanceof HTMLElement&&(a.style.flexShrink="0",a.style.whiteSpace="nowrap",a.style.overflow="hidden",a.style.display="flex",a.style.alignItems="center"),document.body.appendChild(i),e.dataTransfer.setDragImage(i,20,20),setTimeout((()=>{document.body.contains(i)&&document.body.removeChild(i)}),300)}}}_handleIconDragEnd(e){var t;e.stopPropagation(),this._draggedIcon=null,this._dropTargetIcon=null,null===(t=this.shadowRoot)||void 0===t||t.querySelectorAll(".mini-bar.drop-target").forEach((e=>e.classList.remove("drop-target")))}_handleIconDragOver(e,t,i){var n;if(e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._draggedIcon&&(this._draggedIcon.rowId!==t||this._draggedIcon.iconIndex!==i)){this._dropTargetIcon={rowId:t,iconIndex:i};const a=e.currentTarget;null===(n=this.shadowRoot)||void 0===n||n.querySelectorAll(".mini-bar.drop-target").forEach((e=>e.classList.remove("drop-target"))),a.classList.add("drop-target")}}_handleIconDragLeave(e){e.stopPropagation(),this._dropTargetIcon=null,e.currentTarget.classList.remove("drop-target")}_handleIconDrop(e,t,i){var n;e.preventDefault(),e.stopPropagation();try{const a=null===(n=e.dataTransfer)||void 0===n?void 0:n.getData("application/ultra-vehicle-icon");if(a&&this._draggedIcon){const{rowId:e,iconIndex:n}=JSON.parse(a);if(e===t&&n===i)return;this._rearrangeIcons(e,n,t,i)}}catch(e){console.error("Error in icon drop handler:",e)}this._handleIconDragEnd(e)}_rearrangeIcons(e,t,i,n){const a=JSON.parse(JSON.stringify(this.config.icon_rows||[])),o=a.findIndex((t=>t.id===e)),r=a.findIndex((e=>e.id===i));if(-1===o||-1===r)return;const s=a[o],l=s.icons[t];if(l){if(e===i)s.icons.splice(t,1),s.icons.splice(n,0,l);else{s.icons.splice(t,1);const e=a[r];e.icons||(e.icons=[]),e.icons.splice(n,0,l)}if(this._expandedIcon){const a=Object.assign({},this._expandedIcon);let o=a.iconIndex,r=a.rowId;e===i&&e===a.rowId?t===a.iconIndex?o=n:t<a.iconIndex&&n>=a.iconIndex?o--:t>a.iconIndex&&n<=a.iconIndex&&o++:e===a.rowId&&i!==a.rowId?t<a.iconIndex&&o--:e!==a.rowId&&i===a.rowId&&n<=a.iconIndex&&o++,this._draggedIcon&&this._draggedIcon.rowId===a.rowId&&this._draggedIcon.iconIndex===a.iconIndex&&e!==i&&(r=i,o=n),this._expandedIcon={rowId:r,iconIndex:o}}this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:a}))}}_createDefaultIconRow(){return{id:this._generateUniqueId(),width:"100",alignment:"center",spacing:"none",icons:[]}}_createDefaultIcon(){return{entity:"",icon_inactive:"mdi:help-circle-outline",icon_active:"mdi:help-circle",color_inactive:"var(--secondary-text-color)",color_active:"var(--primary-color)",name_color_inactive:"var(--primary-text-color)",name_color_active:"var(--primary-text-color)",state_color_inactive:"var(--secondary-text-color)",state_color_active:"var(--primary-text-color)",inactive_state:"off",active_state:"on",inactive_template_mode:!1,active_template_mode:!1,inactive_template:"",active_template:"",active_state_text:"",inactive_state_text:"",show_state:!0,show_name:!1,show_name_active:!1,show_name_inactive:!1,show_state_active:!0,show_state_inactive:!0,show_units:!0,show_icon_active:!0,show_icon_inactive:!0,name:"",on_click_action:"more-info",text_position:"bottom",vertical_alignment:"center",text_alignment:"center",icon_size:24,text_size:14,icon_background:"none",icon_background_color:"var(--secondary-background-color)",container_background:"none",container_background_color:"var(--secondary-background-color)",draggable:!0}}_resetIconColor(e,t,i){const n="active"===i?"var(--primary-color)":"var(--secondary-text-color)",a="active"===i?"color_active":"color_inactive";this._updateIconConfig(e,t,{[a]:n})}_resetIconNameColor(e,t,i){const n="active"===i?"name_color_active":"name_color_inactive";this._updateIconConfig(e,t,{[n]:"var(--primary-text-color)"})}_resetIconStateColor(e,t,i){const n="active"===i?"var(--primary-text-color)":"var(--secondary-text-color)",a="active"===i?"state_color_active":"state_color_inactive";this._updateIconConfig(e,t,{[a]:n})}_resetIconAppearanceColor(e,t,i){this._updateIconConfig(e,t,{[i]:"var(--secondary-background-color)"})}_resetIconSize(e,t,i){const n="icon_size"===i?24:14;this._updateIconConfig(e,t,{[i]:n})}_getEntityIcon(e){var t;if(!e||!(null===(t=this.hass)||void 0===t?void 0:t.states[e]))return;const i=this.hass.states[e];if(i.attributes.icon)return i.attributes.icon;const n=e.split(".")[0],a=i.attributes.device_class;switch(n){case"binary_sensor":switch(a){case"door":return"mdi:door";case"garage_door":return"mdi:garage";case"window":return"mdi:window-closed";case"motion":return"mdi:motion-sensor";case"gas":case"heat":return"mdi:fire";case"smoke":return"mdi:smoke";case"moisture":return"mdi:water";case"light":return"mdi:brightness-5";case"power":case"plug":return"mdi:power-plug";case"lock":return"mdi:lock";case"problem":return"mdi:alert-circle-outline";case"safety":return"mdi:shield-check-outline";case"battery_charging":return"mdi:battery-charging";case"carbon_monoxide":return"mdi:molecule-co";case"cold":return"mdi:snowflake";case"connectivity":return"mdi:check-network-outline";case"moving":return"mdi:arrow-right-bold-box-outline";case"occupancy":return"mdi:home-account";case"opening":return"mdi:square-outline";case"presence":return"mdi:home-outline";case"running":return"mdi:run";case"sound":return"mdi:volume-high";case"tamper":return"mdi:alert";case"update":return"mdi:package-up";case"vibration":return"mdi:vibrate";default:return"mdi:checkbox-marked-circle"}case"light":return"mdi:lightbulb";case"media_player":switch(a){case"tv":return"mdi:television";case"speaker":return"mdi:speaker";case"receiver":return"mdi:audio-video";default:return"mdi:cast"}case"update":return"mdi:package-up";case"sensor":switch(a){case"temperature":return"mdi:thermometer";case"humidity":return"mdi:water-percent";case"pressure":default:return"mdi:gauge";case"illuminance":return"mdi:brightness-5";case"power":case"apparent_power":case"reactive_power":case"power_factor":return"mdi:flash";case"energy":return"mdi:lightning-bolt";case"gas":return"mdi:meter-gas";case"water":return"mdi:water";case"battery":return"mdi:battery";case"signal_strength":return"mdi:signal";case"voltage":case"frequency":return"mdi:sine-wave";case"current":return"mdi:current-ac";case"carbon_dioxide":return"mdi:molecule-co2";case"carbon_monoxide":return"mdi:molecule-co";case"nitrogen_dioxide":case"ozone":case"volatile_organic_compounds":return"mdi:molecule";case"pm1":case"pm10":case"pm25":return"mdi:blur";case"aqi":return"mdi:air-filter";case"precipitation":return"mdi:weather-rainy";case"wind_speed":return"mdi:weather-windy";case"timestamp":return"mdi:clock-outline";case"date":return"mdi:calendar";case"duration":return"mdi:timer-sand"}case"switch":switch(a){case"outlet":return"mdi:power-socket-us";case"switch":return"mdi:toggle-switch-variant";default:return"mdi:toggle-switch-outline"}case"person":return"mdi:account";case"weather":return"mdi:weather-cloudy";case"tts":return"mdi:text-to-speech";case"camera":return"mdi:camera";case"climate":return"mdi:thermostat";case"cover":switch(a){case"garage":return"mdi:garage";case"gate":return"mdi:gate";case"door":return"mdi:door-closed";case"window":default:return"mdi:window-shutter";case"shutter":case"blind":return"mdi:blinds";case"curtain":return"mdi:curtains";case"damper":return"mdi:valve"}case"fan":return"mdi:fan";case"lock":return"mdi:lock";case"alarm_control_panel":return"mdi:shield-home";case"input_boolean":return"mdi:toggle-switch-outline";case"input_number":return"mdi:ray-vertex";case"input_select":return"mdi:format-list-bulleted";case"input_text":return"mdi:form-textbox";case"input_datetime":return"mdi:calendar-clock";case"automation":return"mdi:robot";case"script":return"mdi:script-text-outline";case"scene":return"mdi:palette";case"zone":return"mdi:map-marker-radius";case"sun":return"mdi:white-balance-sunny";case"device_tracker":return"mdi:radar";case"remote":return"mdi:remote";case"button":return"mdi:gesture-tap-button";case"number":return"mdi:ray-vertex";case"select":return"mdi:format-list-bulleted";case"text":return"mdi:form-textbox";case"vacuum":return"mdi:robot-vacuum";case"water_heater":return"mdi:water-boiler"}}render(){if(!this.hass||!this.config)return Y;const e=this.config.icon_rows||[],t=this.config.sections_order||[],i=new Map(e.map((e=>[e.id,e]))),n=t.map((e=>e.startsWith("icon_row_")?e.substring(9):null)).filter((e=>null!==e));let a;return a=n.length>0?n.map((e=>i.get(e))).filter((e=>void 0!==e)):(t.includes("icons"),e),J`
      <div class="tab-content">
        <div class="section-header">${this._t("editor.icons.title")}</div>
        <div class="description">${this._t("editor.icons.description")}</div>
        <div class="bar-list">
          ${a.map((t=>{const i=e.findIndex((e=>e.id===t.id));return J` <div key=${t.id}>${this._renderIconRow(t,i)}</div> `}))}
          <div class="add-bar-container">
            <ha-button class="add-bar-button" @click=${this._addIconRow}>
              <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
              ${this._t("editor.icons.add_row")}
            </ha-button>
          </div>
        </div>
      </div>
    `}_renderIconRow(e,t){const i=this._expandedIconRow===e.id;return J`
      <div class="bar ${i?"expanded":""}">
        <div class="bar-header" @click=${()=>this._toggleIconRowExpand(e.id)}>
          <div class="bar-title">
            ${this._t("editor.icons.row_prefix","Row")} ${t+1}
          </div>
          <div class="bar-actions">
            <ha-icon-button
              title="${this._t("editor.icons.duplicate_row")}"
              @click=${t=>{t.stopPropagation(),this._duplicateIconRow(e.id)}}
            >
              <ha-icon icon="mdi:content-copy"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              title="${this._t("editor.icons.delete_row")}"
              .path=${Bt}
              @click=${t=>{t.stopPropagation(),this._removeIconRow(e.id)}}
            >
            </ha-icon-button>
            <ha-icon-button
              title="${i?this._t("editor.icons.collapse_row"):this._t("editor.icons.expand_row")}"
              @click=${t=>{t.stopPropagation(),this._toggleIconRowExpand(e.id)}}
              .path=${i?Dt:Rt}
            >
            </ha-icon-button>
          </div>
        </div>

        ${i?this._renderIconRowContent(e):""}
      </div>
    `}_renderIconRowContent(e){return J`
      <div class="bar-content">
        <div class="settings-section">
          <div class="section-header">${this._t("editor.icons.row_settings.header")}</div>
          <div class="settings-content">
            <ha-form
              .hass=${this.hass}
              .data=${{width:e.width,alignment:e.alignment,spacing:e.spacing}}
              .schema=${[{name:"width",selector:{select:{options:Vt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.row_settings.width"),description:this._t("editor.icons.row_settings.width_description")},{name:"alignment",selector:{select:{options:Ot.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.row_settings.alignment"),description:this._t("editor.icons.row_settings.alignment_description")},{name:"spacing",selector:{select:{options:Ut.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.row_settings.spacing"),description:this._t("editor.icons.row_settings.spacing_description")}]}
              .computeLabel=${e=>this._t(e.label||e.name)}
              .computeDescription=${e=>this._t(e.description||"")}
              @value-changed=${t=>this._updateIconRowConfig(e.id,t.detail.value)}
            ></ha-form>
          </div>
        </div>

        <div class="settings-section">
          <div class="section-header">${this._t("editor.icons.icon_settings.header")}</div>
          <div class="settings-content">
            <div class="bar-list mini-bar-list">
              ${(e.icons||[]).map(((t,i)=>this._renderIcon(e.id,t,i)))}
            </div>
            <div class="add-bar-container">
              <ha-button class="add-icon-button" @click=${()=>this._addIcon(e.id)}>
                <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
                ${this._t("editor.icons.add_icon")}
              </ha-button>
            </div>
          </div>
        </div>
      </div>
    `}_renderIcon(e,t,i){var n,a;const o=(null===(n=this._expandedIcon)||void 0===n?void 0:n.rowId)===e&&(null===(a=this._expandedIcon)||void 0===a?void 0:a.iconIndex)===i,r=t.entity?this._getFriendlyName(t.entity):"",s=t.name||r||`${this._t("editor.icons.icon_prefix","Icon")} ${i+1}`,l=this._truncateText(s,15);let c=t.icon_inactive||"mdi:help-circle-outline",d=t.color_inactive||"var(--secondary-text-color)";const p=t.entity;if(p&&this.hass.states[p]){const e=this.hass.states[p],i=void 0!==t.active_state&&null!==t.active_state?String(t.active_state):"on";String(e.state)===i&&(c=t.icon_active||"mdi:help-circle",d=t.color_active||"var(--primary-color)")}const g=`${e}_${i}`,h=this._activeIconTabs[g]||"general";return J`
      <div
        class="mini-bar ${o?"expanded":""}"
        draggable="true"
        @dragstart=${t=>this._handleIconDragStart(t,e,i)}
        @dragover=${t=>this._handleIconDragOver(t,e,i)}
        @dragleave=${this._handleIconDragLeave}
        @drop=${t=>this._handleIconDrop(t,e,i)}
        @dragend=${this._handleIconDragEnd}
      >
        <div class="mini-bar-header" @click=${()=>this._toggleIconEdit(e,i)}>
          <div class="drag-handle">
            <ha-icon icon="mdi:drag"></ha-icon>
          </div>
          <div class="bar-icon-preview">
            <ha-icon icon="${c}" style="color: ${d};"></ha-icon>
          </div>
          <div class="bar-title">${l}</div>
          <div class="bar-actions">
            <ha-icon-button
              title=${this._t("editor.icons.duplicate_icon")}
              @click=${t=>{t.stopPropagation(),this._duplicateIcon(e,i)}}
            >
              <ha-icon icon="mdi:content-copy"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              title=${this._t("editor.icons.delete_icon")}
              .path=${Bt}
              @click=${t=>{t.stopPropagation(),this._removeIcon(e,i)}}
            >
            </ha-icon-button>
            <ha-icon-button
              title=${o?this._t("editor.icons.collapse_icon"):this._t("editor.icons.expand_icon")}
              .path=${o?Dt:Rt}
              @click=${t=>{t.stopPropagation(),this._toggleIconEdit(e,i)}}
            >
            </ha-icon-button>
          </div>
        </div>

        ${o?this._renderIconContent(e,t,i,h):""}
      </div>
    `}_renderIconContent(e,t,i,n){const a=`${e}_${i}`;return J`
      <div class="mini-bar-content">
        <div class="icon-settings-tabs">
          <div
            class="icon-settings-tab ${"general"===n?"active":""}"
            @click=${e=>{e.stopPropagation(),this._activeIconTabs=Object.assign(Object.assign({},this._activeIconTabs),{[a]:"general"}),this.requestUpdate()}}
          >
            ${this._t("editor.icons.tabs.general")}
          </div>
          <div
            class="icon-settings-tab ${"appearance"===n?"active":""}"
            @click=${e=>{e.stopPropagation(),this._activeIconTabs=Object.assign(Object.assign({},this._activeIconTabs),{[a]:"appearance"}),this.requestUpdate()}}
          >
            ${this._t("editor.icons.tabs.appearance")}
          </div>
          <div
            class="icon-settings-tab ${"states"===n?"active":""}"
            @click=${e=>{e.stopPropagation(),this._activeIconTabs=Object.assign(Object.assign({},this._activeIconTabs),{[a]:"states"}),this.requestUpdate()}}
          >
            ${this._t("editor.icons.tabs.states")}
          </div>
        </div>
        <div class="icon-settings-content">
          ${"general"===n?this._renderIconGeneralTab(e,t,i):""}
          ${"appearance"===n?this._renderIconAppearanceTab(e,t,i):""}
          ${"states"===n?this._renderIconStatesTab(e,t,i):""}
        </div>
      </div>
    `}_renderIconGeneralTab(e,t,i){return J`
      <div class="icon-settings-section">
        <ha-form
          .hass=${this.hass}
          .data=${t}
          .schema=${this._getIconGeneralSchema(t)}
          .computeLabel=${e=>this._t(e.label||e.name)}
          .computeDescription=${e=>this._t(e.description||"")}
          @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
        ></ha-form>
        ${t.on_click_action&&"no-action"!==t.on_click_action?J`<div class="click-action-description">
              ${this._getClickActionDescription(t.on_click_action)}
            </div>`:""}
      </div>
    `}_getIconGeneralSchema(e){return[{name:"entity",selector:{entity:{}},label:this._t("editor.common.entity"),description:this._t("editor.icons.icon_settings.entity_description")},{name:"name",selector:{text:{}},label:this._t("editor.icons.icon_settings.name"),description:this._t("editor.icons.icon_settings.name_description")},{name:"on_click_action",selector:{select:{options:Nt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_settings.click_action"),description:this._t("editor.icons.icon_appearance.action_description")},..."call-service"===e.on_click_action?[{name:"service",selector:{text:{}},label:this._t("editor.icons.icon_settings.service"),description:this._t("editor.icons.icon_settings.service_description")},{name:"service_data",selector:{text:{multiline:!0}},label:this._t("editor.icons.icon_settings.service_data"),description:this._t("editor.icons.icon_settings.service_data_description")}]:[],..."perform-action"===e.on_click_action?[{name:"action",selector:{text:{multiline:!0}},label:this._t("editor.icons.icon_settings.action"),description:this._t("editor.icons.icon_settings.action_description")}]:[],..."navigate"===e.on_click_action?[{name:"navigation_path",selector:{text:{}},label:this._t("editor.icons.icon_settings.navigation_path"),description:this._t("editor.icons.icon_settings.navigation_path_description")}]:[],..."url"===e.on_click_action?[{name:"url",selector:{text:{}},label:this._t("editor.icons.icon_settings.url"),description:this._t("editor.icons.icon_settings.url_description")}]:[]]}_getClickActionDescription(e){switch(e){case"toggle":return J`<p>${this._t("editor.icons.click_actions.descriptions.toggle")}</p>`;case"more-info":return J`<p>${this._t("editor.icons.click_actions.descriptions.more-info")}</p>`;case"navigate":return J`<p>${this._t("editor.icons.click_actions.descriptions.navigate")}</p>`;case"url":return J`<p>${this._t("editor.icons.click_actions.descriptions.url")}</p>`;case"call-service":return J`<p>${this._t("editor.icons.click_actions.descriptions.call-service")}</p>`;case"perform-action":return J`<p>${this._t("editor.icons.click_actions.descriptions.perform-action")}</p>`;case"location-map":return J`<p>${this._t("editor.icons.click_actions.descriptions.location-map")}</p>`;case"assist":return J`<p>${this._t("editor.icons.click_actions.descriptions.assist")}</p>`;case"none":return J`<p>${this._t("editor.icons.click_actions.descriptions.none")}</p>`;case"trigger":return J`<p>${this._t("editor.icons.click_actions.descriptions.trigger")}</p>`;default:return""}}_renderIconAppearanceTab(e,t,i){return J`
      <div class="icon-settings-section">
        <!-- General Appearance -->
        <div class="settings-section">
          <div class="subsection-header">${this._t("editor.icons.icon_appearance.general")}</div>
          <div class="settings-content">
            <ha-form
              .hass=${this.hass}
              .data=${t}
              .schema=${this._getIconAppearanceGeneralSchema(t)}
              .computeLabel=${e=>this._t(e.label||e.name)}
              .computeDescription=${e=>this._t(e.description||"")}
              @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
            ></ha-form>
          </div>
        </div>

        <!-- Icon Specific -->
        <div class="settings-section">
          <div class="subsection-header">${this._t("editor.icons.icon_appearance.icon")}</div>
          <div class="settings-content">
            <ha-form
              .hass=${this.hass}
              .data=${t}
              .schema=${this._getIconAppearanceIconSchema()}
              .computeLabel=${e=>this._t(e.label||e.name)}
              .computeDescription=${e=>this._t(e.description||"")}
              @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
            ></ha-form>
            ${t.icon_background&&"none"!==t.icon_background?this._renderColorPicker(e,i,"icon_background_color",this._t("editor.icons.icon_appearance.icon_background_color"),"var(--secondary-background-color)"):""}
          </div>
        </div>

        <!-- Container Specific -->
        <div class="settings-section">
          <div class="subsection-header">
            ${this._t("editor.icons.icon_appearance.container.header")}
          </div>
          <div class="settings-content">
            <ha-form
              .hass=${this.hass}
              .data=${t}
              .schema=${this._getIconAppearanceContainerSchema()}
              .computeLabel=${e=>this._t(e.label||e.name)}
              .computeDescription=${e=>this._t(e.description||"")}
              @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
            ></ha-form>
            ${t.container_background&&"none"!==t.container_background?this._renderColorPicker(e,i,"container_background_color",this._t("editor.icons.icon_appearance.container_background_color"),"var(--secondary-background-color)"):""}
          </div>
        </div>

        <!-- Text Specific -->
        ${t.show_name_active||t.show_name_inactive||t.show_state_active||t.show_state_inactive?J`
              <div class="settings-section">
                <div class="subsection-header">
                  ${this._t("editor.icons.icon_appearance.text_appearance")}
                </div>
                <div class="settings-content">
                  <div class="size-fields-container">
                    <div class="size-field">
                      <ha-form
                        .hass=${this.hass}
                        .data=${t}
                        .schema=${this._getIconAppearanceTextSizeSchema()}
                        .computeLabel=${e=>this._t(e.label||e.name)}
                        .computeDescription=${e=>this._t(e.description||"")}
                        @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
                      ></ha-form>
                      <ha-icon-button
                        class="inline-reset-button"
                        @click=${()=>this._resetIconSize(e,i,"text_size")}
                        title=${this._t("editor.icons.reset.size","Reset")}
                      >
                        <ha-icon icon="mdi:refresh"></ha-icon>
                      </ha-icon-button>
                    </div>
                  </div>
                  <ha-form
                    .hass=${this.hass}
                    .data=${t}
                    .schema=${this._getIconAppearanceTextAlignmentSchema()}
                    .computeLabel=${e=>this._t(e.label||e.name)}
                    .computeDescription=${e=>this._t(e.description||"")}
                    @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
                  ></ha-form>
                </div>
              </div>
            `:""}
      </div>
    `}_getIconAppearanceGeneralSchema(e){return[{name:"show_units",selector:{boolean:{}},label:this._t("editor.icons.icon_settings.show_units"),description:this._t("editor.icons.icon_settings.show_units_description")},...e.show_name_active||e.show_name_inactive||e.show_state_active||e.show_state_inactive?[{name:"text_position",selector:{select:{options:Pt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_settings.text_position"),description:this._t("editor.icons.icon_settings.text_position_description")}]:[]]}_getIconAppearanceIconSchema(){return[{name:"icon_size",selector:{number:{mode:"box",unit:"px"}},label:this._t("editor.icons.icon_appearance.icon_size"),description:this._t("editor.icons.icon_appearance.icon_size_description")},{name:"icon_background",selector:{select:{options:Ft.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.icon_background"),description:this._t("editor.icons.icon_appearance.icon_background_description")}]}_getIconAppearanceContainerSchema(){return[{name:"vertical_alignment",selector:{select:{options:Mt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.container.vertical_alignment"),description:this._t("editor.icons.icon_appearance.container.vertical_alignment_description")},{name:"container_width",selector:{select:{options:qt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.container.width"),description:this._t("editor.icons.icon_appearance.container.width_description")},{name:"container_background",selector:{select:{options:Ft.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.container.background"),description:this._t("editor.icons.icon_appearance.container.background_description")}]}_getIconAppearanceTextSizeSchema(){return[{name:"text_size",selector:{number:{mode:"box",unit:"px"}},label:this._t("editor.icons.icon_appearance.text_size"),description:this._t("editor.icons.icon_appearance.text_size_description")}]}_getIconAppearanceTextAlignmentSchema(){return[{name:"text_alignment",selector:{select:{options:[{value:"left",key:"editor.icons.alignments.flex-start"},{value:"center",key:"editor.icons.alignments.center"},{value:"right",key:"editor.icons.alignments.flex-end"}].map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.text_alignment"),description:this._t("editor.icons.icon_appearance.text_alignment_description")}]}_renderIconStatesTab(e,t,i){return J`
      <div class="icon-settings-section">
        <!-- Active State -->
        <div class="state-settings-group">
          <div class="subsection-header">
            <span>${this._t("editor.icons.tabs.active_state")}</span>
          </div>
          <div class="state-settings-content-wrapper">
            <ha-form
              .hass=${this.hass}
              .data=${t}
              .schema=${this._getIconStateSchema(t,"active")}
              .computeLabel=${e=>e.label?this._t(e.label):e.name}
              @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
            ></ha-form>
            <div class="color-pickers-grid state-colors">
              ${this._renderColorPicker(e,i,"color_active",this._t("editor.icons.icon_appearance.active_icon_color"),"var(--primary-color)")}
              ${!1!==t.show_name_active?this._renderColorPicker(e,i,"name_color_active",this._t("editor.icons.icon_appearance.active_name_color"),"var(--primary-text-color)"):""}
              ${!1!==t.show_state_active?this._renderColorPicker(e,i,"state_color_active",this._t("editor.icons.icon_appearance.active_state_color"),"var(--primary-text-color)"):""}
            </div>
          </div>
        </div>
        <!-- Inactive State -->
        <div class="state-settings-group">
          <div class="subsection-header">
            <span>${this._t("editor.icons.tabs.inactive_state")}</span>
          </div>
          <div class="state-settings-content-wrapper">
            <ha-form
              .hass=${this.hass}
              .data=${t}
              .schema=${this._getIconStateSchema(t,"inactive")}
              .computeLabel=${e=>e.label?this._t(e.label):e.name}
              @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
            ></ha-form>
            <div class="color-pickers-grid state-colors">
              ${this._renderColorPicker(e,i,"color_inactive",this._t("editor.icons.icon_appearance.inactive_icon_color"),"var(--secondary-text-color)")}
              ${!1!==t.show_name_inactive?this._renderColorPicker(e,i,"name_color_inactive",this._t("editor.icons.icon_appearance.inactive_name_color"),"var(--primary-text-color)"):""}
              ${!1!==t.show_state_inactive?this._renderColorPicker(e,i,"state_color_inactive",this._t("editor.icons.icon_appearance.inactive_state_color"),"var(--secondary-text-color)"):""}
            </div>
          </div>
        </div>
      </div>
    `}_getIconStateSchema(e,t){const i=t;return[{name:`show_name_${i}`,selector:{boolean:{}},label:`editor.icons.icon_appearance.show_name_${i}`,description:`editor.icons.icon_appearance.show_name_${i}_description`},{name:`show_state_${i}`,selector:{boolean:{}},label:`editor.icons.icon_appearance.show_state_${i}`,description:`editor.icons.icon_appearance.show_state_${i}_description`},{name:`show_icon_${i}`,selector:{boolean:{}},label:this._t(`editor.icons.icon_appearance.show_icon_${i}`),description:this._t(`editor.icons.icon_appearance.show_icon_${i}_description`)},{name:`${i}_template_mode`,selector:{boolean:{}},label:this._t("editor.icons.icon_appearance.template_mode"),description:this._t("editor.icons.icon_appearance.template_mode_description")},...e[`${i}_template_mode`]?[{name:`${i}_template`,selector:{text:{multiline:!0}},label:this._t(`editor.icons.icon_appearance.${i}_template`),description:this._t(`editor.icons.icon_appearance.${i}_template_description`)}]:[{name:`${i}_state`,selector:{text:{}},label:this._t(`editor.icons.icon_appearance.${i}_state`),description:this._t(`editor.icons.icon_appearance.${i}_state_description`)}],{name:`${i}_state_text`,selector:{text:{}},label:this._t(`editor.icons.icon_appearance.${i}_state_text`),description:this._t(`editor.icons.icon_appearance.${i}_state_text_description`)},{name:`icon_${i}`,selector:{icon:{}},label:this._t(`editor.icons.icon_appearance.${i}_icon`)}]}_renderColorPicker(e,t,i,n,a){var o,r;const s=null===(r=null===(o=this.config.icon_rows)||void 0===o?void 0:o.find((t=>t.id===e)))||void 0===r?void 0:r.icons[t];return J`
      <div class="color-picker-container">
        <label class="color-picker-label">${n}</label>
        <div class="picker-button-row">
          <color-picker
            .value=${(null==s?void 0:s[i])||a}
            .configValue=${i}
            .showResetButton=${!1}
            @value-changed=${n=>{n.stopPropagation();const a=n.detail.value;let o;o=a&&"object"==typeof a&&void 0!==a[i]?String(a[i]):"string"==typeof a?a:String(a),this._updateIconConfig(e,t,{[i]:o})}}
          ></color-picker>
          <ha-icon-button
            class="reset-button"
            @click=${()=>{i.startsWith("color_")?this._resetIconColor(e,t,i.substring(6)):i.startsWith("name_color_")?this._resetIconNameColor(e,t,i.substring(11)):i.startsWith("state_color_")?this._resetIconStateColor(e,t,i.substring(12)):this._resetIconAppearanceColor(e,t,i)}}
            title="${this._t("editor.icons.reset.color")}"
          >
            <ha-icon icon="mdi:refresh"></ha-icon>
          </ha-icon-button>
        </div>
      </div>
    `}};Wt.styles=d`
    .tab-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .section-header {
      font-size: 1.1em;
      font-weight: 500;
      padding: 12px 16px;
      background-color: var(--primary-color);
      color: var(--text-primary-color);
      margin-bottom: 0;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom: 1px solid var(--divider-color);
    }
    .description {
      font-size: 14px;
      color: var(--secondary-text-color);
      margin-bottom: 8px;
      padding: 0 16px;
    }
    .bar-list {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 0 16px;
    }
    .mini-bar-list {
      margin-top: 8px;
      padding: 0;
    }
    .bar {
      margin-bottom: 8px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      background-color: var(--secondary-background-color);
      overflow: hidden;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    .mini-bar {
      margin-bottom: 8px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      background-color: var(--primary-background-color);
      overflow: hidden;
    }
    .bar.expanded,
    .mini-bar.expanded {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
      border-color: var(--primary-color);
    }
    .bar-header,
    .mini-bar-header {
      display: flex;
      align-items: center;
      padding: 12px 16px;
      cursor: pointer;
      background-color: var(--card-background-color, rgba(0, 0, 0, 0.05));
    }
    .mini-bar-header {
      padding: 0px 12px;
      min-height: 48px;
    }
    .bar-content,
    .mini-bar-content {
      padding: 16px;
      background-color: var(--primary-background-color);
    }
    .mini-bar-content {
      padding: 16px;
    }
    .bar-title {
      flex-grow: 1;
      font-weight: 500;
      display: flex;
      align-items: center;
      overflow: hidden;
      white-space: nowrap;
    }
    .bar-details {
      display: block;
      margin-left: 8px;
      opacity: 0.7;
      font-size: 0.9em;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 150px;
    }
    .bar-actions {
      display: flex;
      gap: 8px;
      flex-shrink: 0;
      align-items: center;
    }
    .bar-actions ha-icon-button[title='Duplicate Row'] ha-icon,
    .mini-bar-header .bar-actions ha-icon-button[title='Duplicate Icon'] ha-icon {
      transform: translateY(-4px);
    }
    .drag-handle {
      color: var(--secondary-text-color);
      margin-right: 8px;
      cursor: grab;
      display: flex;
      align-items: center;
      opacity: 0.7;
    }
    .drag-handle:hover {
      opacity: 1;
      color: var(--primary-color);
    }
    .bar-icon-preview {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
      min-width: 28px;
      height: 28px;
    }
    .add-bar-container {
      display: flex;
      justify-content: center;
      margin: 16px 0;
      padding: 0 16px;
    }
    .add-bar-button,
    .add-icon-button {
      --mdc-theme-primary: var(--primary-color);
      width: 100%;
    }
    .add-icon-button {
      margin-top: 8px;
    }
    .add-icon {
      margin-right: 8px;
      --mdc-icon-color: var(--text-primary-color);
    }
    .settings-section {
      margin-bottom: 16px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
      background-color: var(--card-background-color, #1c1c1c);
    }
    .settings-content {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      background-color: var(--primary-background-color);
    }
    .settings-section .section-header {
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom: 1px solid var(--divider-color);
    }
    ha-form {
      padding: 0;
      margin-bottom: 0;
    }
    ha-form > * {
      margin-bottom: 16px;
    }
    ha-form > *:last-child {
      margin-bottom: 0;
    }
    .icon-settings-tabs {
      display: flex;
      width: 100%;
      border-bottom: 1px solid var(--divider-color);
      margin-bottom: 16px;
    }
    .icon-settings-tab {
      padding: 8px 12px;
      font-size: 0.9em;
      cursor: pointer;
      border-bottom: 2px solid transparent;
      margin-bottom: -1px;
      color: var(--secondary-text-color);
      transition: all 0.2s ease;
      text-align: center;
      flex: 1;
    }
    .icon-settings-tab:hover {
      background-color: rgba(var(--rgb-primary-color), 0.1);
      color: var(--primary-text-color);
    }
    .icon-settings-tab.active {
      border-bottom: 2px solid var(--primary-color);
      color: var(--primary-color);
      font-weight: 500;
    }
    .icon-settings-content {
      padding: 0 4px;
    }
    .icon-settings-section {
      padding-bottom: 8px;
    }
    .subsection-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 16px;
      background-color: var(--secondary-background-color);
      font-weight: 500;
      border-bottom: 1px solid var(--divider-color);
    }
    .state-settings-group {
      margin-bottom: 20px;
      border-radius: 4px;
      background: rgba(var(--rgb-primary-background-color), 0.5);
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
    }

    .state-settings-group .subsection-header {
      border-bottom: none; /* Remove bottom border for state group headers */
      padding-bottom: 8px;
      margin-bottom: 8px;
    }
    .state-settings-group ha-form {
      /* padding: 0 8px 8px; */ /* Removed padding */
      /* Keep other styles if needed, or remove if empty */
      padding: 0; /* Explicitly remove padding */
    }
    .color-picker-container {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      /* width: 100%; Let flexbox handle width */
      margin-bottom: 16px; /* Add spacing between items */
    }
    .color-picker-label {
      font-weight: 500;
      margin-bottom: 6px;
      color: var(--primary-text-color);
      font-size: 0.9em;
    }
    .picker-button-row {
      display: flex;
      align-items: center;
      gap: 8px; /* Space between picker and reset button */
    }
    .picker-button-row color-picker {
      flex-grow: 1; /* Allow picker to take available space */
    }
    .reset-button {
      flex-shrink: 0; /* Prevent button from shrinking */
    }
    .size-fields-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 8px;
      padding: 0 16px 16px;
    }
    .size-field {
      display: flex;
      align-items: center;
      position: relative;
    }
    .size-field ha-form {
      flex: 1;
      margin-bottom: 0;
      padding: 0;
    }
    .inline-reset-button {
      --mdc-icon-button-size: 36px;
      margin-left: 8px;
      color: var(--secondary-text-color);
      opacity: 0.8;
    }
    .inline-reset-button:hover {
      opacity: 1;
      color: var(--primary-color);
    }
    .click-action-description {
      background-color: var(--secondary-background-color);
      border-left: 4px solid var(--primary-color);
      padding: 8px 12px;
      margin: 8px 0 16px 0;
      border-radius: 4px;
      font-size: 14px;
      color: var(--primary-text-color);
    }
    .click-action-description p {
      margin: 0;
      line-height: 1.4;
    }
    .mini-bar.dragging {
      opacity: 0.5;
      transform: scale(0.98);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      border: 1px dashed var(--primary-color);
      z-index: 10;
      background-color: var(--card-background-color, #fff);
    }
    .mini-bar.drop-target {
      border: 2px dashed var(--primary-color);
      background-color: rgba(var(--rgb-primary-color), 0.1);
      transform: translateY(-2px);
    }

    /* New: Grid layout for state color pickers */
    .color-pickers-grid.state-colors {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Responsive columns */
      gap: 16px; /* Spacing between pickers */
      /* padding: 0 8px; */ /* Removed padding */
      margin-top: 16px;
    }

    /* New: Wrapper for state settings content */
    .state-settings-content-wrapper {
      padding: 8px 8px 8px; /* Add padding: top left/right bottom */
    }
  `,Lt([be({attribute:!1})],Wt.prototype,"hass",void 0),Lt([be({attribute:!1})],Wt.prototype,"config",void 0),Lt([fe()],Wt.prototype,"_expandedIconRow",void 0),Lt([fe()],Wt.prototype,"_expandedIcon",void 0),Lt([fe()],Wt.prototype,"_draggedIconRow",void 0),Lt([fe()],Wt.prototype,"_draggedIcon",void 0),Lt([fe()],Wt.prototype,"_dropTargetRow",void 0),Lt([fe()],Wt.prototype,"_dropTargetIcon",void 0),Lt([fe()],Wt.prototype,"_activeIconTabs",void 0),Wt=Lt([_e("icons-tab")],Wt);var Gt=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};const Ht=[{value:"single",key:"editor.customize.layout_types.single"},{value:"double",key:"editor.customize.layout_types.double"}];let Kt=class extends he{constructor(){super(...arguments),this._draggedSection=null,this._expandedSectionId=null,this._dropTargetSection=null,this._dropTargetColumn=null}_t(e,t){var i,n;return wt(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}_fireConfigChanged(e){Ke(this,"config-changed",{config:e})}_getFriendlyName(e){var t,i;return e&&this.hass&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""}_truncateText(e,t=15){return e?e.length<=t?e:e.substring(0,t)+"...":""}_valueChanged(e){if(e.stopPropagation(),!this.config)return;const t=Object.assign(Object.assign({},this.config),e.detail.value);this._fireConfigChanged(t)}_handleSectionDragStart(e,t){if(this._draggedSection=t,e.dataTransfer){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.toString());const i=e.target;if(i&&e.dataTransfer){const t=i.getBoundingClientRect(),n=i.cloneNode(!0);n.style.width=`${t.width}px`,n.style.opacity="0.7",n.style.position="absolute",n.style.top="-1000px",n.style.border="1px dashed var(--primary-color)",document.body.appendChild(n),e.dataTransfer.setDragImage(n,e.offsetX,e.offsetY),setTimeout((()=>{document.body.contains(n)&&document.body.removeChild(n)}),0)}}}_handleSectionDragEnd(){var e;this._draggedSection=null,this._dropTargetSection=null,this._dropTargetColumn=null,null===(e=this.shadowRoot)||void 0===e||e.querySelectorAll(".draggable-section.drop-target, .column-container.column-drag-over").forEach((e=>{e.classList.remove("drop-target"),e.classList.remove("column-drag-over")}))}_handleSectionDragOver(e,t){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),null!==this._draggedSection&&this._draggedSection!==t?this._dropTargetSection=t:this._dropTargetSection=null}_handleSectionDragLeave(){this._dropTargetSection=null}_handleSectionDrop(e,t){e.preventDefault(),null!==this._draggedSection&&this._draggedSection!==t&&this._rearrangeSections(this._draggedSection,t),this._handleSectionDragEnd()}_handleColumnDragOver(e,t){e.preventDefault(),null!==this._draggedSection&&(this._dropTargetColumn=t,e.dataTransfer&&(e.dataTransfer.dropEffect="move"))}_handleColumnDragLeave(){this._dropTargetColumn=null}_getDisplaySections(){const e=this.config.sections_order||[],t=[];return e.forEach((e=>{var i;if("bars"===e){const e=(null===(i=this.config.bars)||void 0===i?void 0:i.length)||0;for(let i=0;i<e;i++)t.push(`bar_${i}`)}else"icons"===e?(this.config.icon_rows||[]).forEach((e=>{e.id&&t.push(`icon_row_${e.id}`)})):t.push(e)})),t}_getExpandedConfigSections(e=!1){var t,i;let n=[...this.config.sections_order||[]];const a=n.includes("bars")&&(e||(null===(t=this.config.bars)||void 0===t?void 0:t.length)>0),o=n.includes("icons")&&(e||(null===(i=this.config.icon_rows)||void 0===i?void 0:i.length)>0);if(!a&&!o)return n;const r=[];return n.forEach((e=>{var t;if("bars"===e&&a){const e=(null===(t=this.config.bars)||void 0===t?void 0:t.length)||0;for(let t=0;t<e;t++)r.push(`bar_${t}`)}else"icons"===e&&o?(this.config.icon_rows||[]).forEach((e=>{e.id&&r.push(`icon_row_${e.id}`)})):r.push(e)})),r}_handleColumnDrop(e,t){if(e.preventDefault(),null!==this._draggedSection&&this._dropTargetColumn===t){const e=this._getDisplaySections(),i=this._draggedSection;if(i>=e.length)return void this._handleSectionDragEnd();const n=e[i];let a=[...this.config.sections_order||[]],o=Object.assign({},this.config.sections_columns||{}),r=!1;(n.startsWith("bar_")&&a.includes("bars")||n.startsWith("icon_row_")&&a.includes("icons"))&&(a=this._getExpandedConfigSections(!0),r=!0),"right"===t?o[n]="right":delete o[n];const s={sections_columns:Object.keys(o).length>0?o:void 0};if(r&&(s.sections_order=a),n.startsWith("bar_")){const e=parseInt(n.substring(4));!isNaN(e)&&e>=0&&e<(this.config.bars||[]).length&&(s.bars=[...this.config.bars||[]])}this._fireConfigChanged(Object.assign(Object.assign({},this.config),s))}this._handleSectionDragEnd()}_rearrangeSections(e,t){const i=this._getDisplaySections();if(e>=i.length||t>=i.length)return;const n=i[e];let a=[...this.config.sections_order||[]];(n.startsWith("bar_")&&a.includes("bars")||n.startsWith("icon_row_")&&a.includes("icons"))&&(a=this._getExpandedConfigSections(!0));const o=a.findIndex((t=>t===i[e])),r=a.findIndex((e=>e===i[t]));if(-1===o||-1===r)return void console.error("Could not find dragged/target sections in configSections");const[s]=a.splice(o,1),l=o<r?r-1:r;a.splice(l,0,s);let c=[];const d=new Map;(this.config.bars||[]).forEach(((e,t)=>{d.set(t,e)})),a.forEach((e=>{if(e.startsWith("bar_")){const t=parseInt(e.substring(4)),i=d.get(t);i?c.push(i):console.warn(`[CustomizeTab] Could not find original bar config for index ${t} during reorder.`)}})),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{sections_order:a,bars:c.length>0?c:(this.config.bars||[]).length>0?[]:void 0}))}_toggleSectionExpand(e){this._expandedSectionId=this._expandedSectionId===e?null:e}_updateSectionMargin(e){const t=e.target,i=t.dataset.sectionId,n=t.dataset.marginType,a=parseInt(t.value||"0");if(!i||!n)return;const o=JSON.parse(JSON.stringify(this.config.section_styles||{}));o[i]?o[i]=Object.assign({},o[i]):o[i]={marginTop:0,marginBottom:0},0===a?(delete o[i][n],0===Object.keys(o[i]).length&&delete o[i]):o[i][n]=a;const r={};Object.keys(o).length>0?r.section_styles=o:r.section_styles=void 0,this._fireConfigChanged(Object.assign(Object.assign({},this.config),r))}render(){return this.hass&&this.config?this._renderCustomizeTab():Y}_renderCustomizeTab(){const e=[{name:"layout_type",selector:{select:{options:Ht.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.customize.layout.title"),description:this._t("editor.customize.layout.description")}],t=`${this._t("editor.customize.sections.arrangement_desc_base")} ${"double"===this.config.layout_type?this._t("editor.customize.sections.arrangement_desc_double_extra"):this._t("editor.customize.sections.arrangement_desc_single_extra")}`;return J`
      <div class="tab-content">
        <div class="settings-section">
          <div class="section-header">${this._t("editor.customize.layout.header")}</div>
          <div class="settings-content">
            <ha-form
              class="config-form layout-form"
              .hass=${this.hass}
              .data=${this.config}
              .schema=${e}
              .computeLabel=${e=>this._t(e.label||e.name)}
              .computeDescription=${e=>this._t(e.description||"")}
              @value-changed=${this._valueChanged}
            ></ha-form>
          </div>
        </div>

        <div class="settings-section">
          <div class="section-header">${this._t("editor.customize.sections.header")}</div>
          <div class="settings-content">
            <p class="description section-description">${t}</p>
            <div class="sections-container">${this._renderDraggableSections()}</div>
          </div>
        </div>

        ${this._renderGlobalCssSection()}
      </div>
    `}_renderDraggableSections(){const e=this._getDisplaySections(),t=this.config.layout_type||"single",i=this.config.section_styles||{},n={title:{label:this._t("editor.customize.section_labels.title"),icon:"mdi:format-title"},image:{label:this._t("editor.customize.section_labels.image"),icon:"mdi:image"},info:{label:this._t("editor.customize.section_labels.info"),icon:"mdi:information-outline"},bars:{label:"All Bars",icon:"mdi:chart-bar"},icons:{label:"All Icon Rows",icon:"mdi:view-grid-outline"}},a=e=>{var t,i;if(e.startsWith("bar_")){const i=parseInt(e.substring(4)),n=null===(t=this.config.bars)||void 0===t?void 0:t[i],a=(null==n?void 0:n.entity)?this._getFriendlyName(n.entity):`${this._t("editor.bars.bar_prefix")} ${i+1}`;return this._truncateText(a,20)}if(e.startsWith("icon_row_")){const t=e.substring(9),i=(this.config.icon_rows||[]).findIndex((e=>e.id===t));return-1!==i?`${this._t("editor.icons.row_prefix")} ${i+1}`:this._t("editor.icons.row_prefix")}return(null===(i=n[e])||void 0===i?void 0:i.label)||e},o=(e,t)=>{const o=this._draggedSection===t,r=this._dropTargetSection===t,s=i[e]||{marginTop:0,marginBottom:0},l=this._expandedSectionId===e;return J`
        <div class="draggable-section-wrapper ${l?"expanded":""}">
          <div
            class="draggable-section ${o?"dragging":""} ${r?"drop-target":""}"
            draggable="true"
            data-section-id="${e}"
            data-index="${t}"
            @dragstart=${e=>this._handleSectionDragStart(e,t)}
            @dragend=${this._handleSectionDragEnd}
            @dragover=${e=>this._handleSectionDragOver(e,t)}
            @dragleave=${this._handleSectionDragLeave}
            @drop=${e=>this._handleSectionDrop(e,t)}
          >
            <div class="drag-handle">
              <ha-icon icon="mdi:drag"></ha-icon>
            </div>
            <div class="section-info" @click=${()=>this._toggleSectionExpand(e)}>
              <ha-icon icon="${(e=>{var t;return e.startsWith("bar_")?"mdi:chart-bar":e.startsWith("icon_row_")?"mdi:view-grid-outline":(null===(t=n[e])||void 0===t?void 0:t.icon)||"mdi:help-circle"})(e)}"></ha-icon>
              <span>${a(e)}</span>
            </div>
            <div class="section-actions">
              <ha-icon-button
                .path=${l?"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z":"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}
                @click=${()=>this._toggleSectionExpand(e)}
                title="${l?this._t("editor.customize.actions.collapse_margins"):this._t("editor.customize.actions.expand_margins")}"
              >
              </ha-icon-button>
            </div>
          </div>
          ${l?J`
                <div class="section-margin-controls">
                  <div class="margin-control">
                    <ha-icon
                      .icon=${"mdi:format-vertical-align-top"}
                      title="${this._t("editor.customize.margins.top")}"
                    ></ha-icon>
                    <ha-textfield
                      type="number"
                      .value=${String(s.marginTop||"")}
                      data-section-id=${e}
                      data-margin-type="marginTop"
                      @input=${this._updateSectionMargin}
                      min="0"
                      step="1"
                      suffix="px"
                    ></ha-textfield>
                  </div>
                  <div class="margin-control">
                    <ha-icon
                      .icon=${"mdi:format-vertical-align-bottom"}
                      title="${this._t("editor.customize.margins.bottom")}"
                    ></ha-icon>
                    <ha-textfield
                      type="number"
                      .value=${String(s.marginBottom||"")}
                      data-section-id=${e}
                      data-margin-type="marginBottom"
                      @input=${this._updateSectionMargin}
                      min="0"
                      step="1"
                      suffix="px"
                    ></ha-textfield>
                  </div>
                </div>
              `:""}
        </div>
      `};if("double"===t){const t=e.filter((e=>"right"!==(this.config.sections_columns||{})[e])),i=e.filter((e=>"right"===(this.config.sections_columns||{})[e]));return J`
        <div class="columns-wrapper stacked-columns">
          <div class="column-header">${this._t("editor.customize.columns.left")}</div>
          <div
            class="column-container left-column ${"left"===this._dropTargetColumn?"column-drag-over":""}"
            @dragover=${e=>this._handleColumnDragOver(e,"left")}
            @dragleave=${this._handleColumnDragLeave}
            @drop=${e=>this._handleColumnDrop(e,"left")}
          >
            ${t.map((t=>o(t,e.indexOf(t))))}
            ${0===t.length?J`<div class="empty-column-message">
                  ${this._t("editor.customize.columns.empty")}
                </div>`:""}
          </div>

          <div class="column-header">${this._t("editor.customize.columns.right")}</div>
          <div
            class="column-container right-column ${"right"===this._dropTargetColumn?"column-drag-over":""}"
            @dragover=${e=>this._handleColumnDragOver(e,"right")}
            @dragleave=${this._handleColumnDragLeave}
            @drop=${e=>this._handleColumnDrop(e,"right")}
          >
            ${i.map((t=>o(t,e.indexOf(t))))}
            ${0===i.length?J`<div class="empty-column-message">
                  ${this._t("editor.customize.columns.empty")}
                </div>`:""}
          </div>
        </div>
      `}return J`
      <div class="draggable-sections single-column">
        ${e.map(((e,t)=>o(e,t)))}
      </div>
    `}_renderGlobalCssSection(){return J`
      <div class="settings-section">
        <div class="section-header">${this._t("editor.customize.css.header")}</div>
        <div class="settings-content">
          <p class="description">${this._t("editor.customize.css.description")}</p>
          <ha-form
            .hass=${this.hass}
            .data=${this.config}
            .schema=${[{name:"global_css",selector:{text:{multiline:!0,code_editor:"css"}},label:this._t("editor.customize.css.label"),description:this._t("editor.customize.css.input_description")}]}
            .computeLabel=${e=>this._t(e.label||"")}
            .computeDescription=${e=>this._t(e.description||"")}
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
      </div>
    `}};Kt.styles=d`
    .tab-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .settings-section {
      margin-bottom: 0; /* Gap handled by tab-content */
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
      background-color: var(--card-background-color, #212121);
    }
    .section-header {
      font-size: 1.1em;
      font-weight: 500;
      padding: 12px 16px;
      background-color: var(--primary-color);
      color: var(--text-primary-color);
      margin-bottom: 0;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      border-bottom: 1px solid var(--divider-color);
    }
    .settings-content {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      background-color: var(--primary-background-color);
    }
    .description {
      font-size: 14px;
      color: var(--secondary-text-color);
      margin-bottom: 8px;
    }
    .section-description {
      margin-top: 0;
      padding-top: 0;
    }
    ha-form {
      padding: 0;
      margin-bottom: 0;
    }
    /* Draggable section styles */
    .sections-container {
      /* Container for draggable sections */
    }
    .draggable-section-wrapper {
      margin-bottom: 8px; /* Add space between sections */
      border: 1px solid transparent; /* Add transparent border to reserve space for expanded controls */
      border-radius: 8px; /* Match draggable section */
      transition: border-color 0.2s ease;
    }
    .draggable-section-wrapper.expanded {
      border-color: var(--divider-color); /* Show border when expanded */
      background-color: var(--secondary-background-color);
    }
    .draggable-section {
      border: 1px solid var(--divider-color);
      background-color: var(--card-background-color, #fff);
      border-radius: 6px;
      padding: 10px 12px;
      cursor: grab;
      transition:
        background-color 0.2s ease,
        transform 0.2s ease,
        box-shadow 0.2s ease;
      display: flex;
      align-items: center;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      position: relative;
      z-index: 1;
    }
    .draggable-section:hover {
      background-color: var(--secondary-background-color);
      transform: translateY(-2px);
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
      z-index: 2;
    }
    .draggable-section:active {
      cursor: grabbing;
    }
    .drag-handle {
      color: var(--secondary-text-color);
      margin-right: 8px;
      cursor: grab;
      display: flex;
      align-items: center;
      opacity: 0.7;
    }
    .drag-handle:hover {
      opacity: 1;
      color: var(--primary-color);
    }
    .section-info {
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
      white-space: nowrap;
      flex-grow: 1;
      overflow: hidden;
      cursor: pointer; /* Make clickable for expand */
    }
    .section-info ha-icon {
      color: var(--primary-color);
    }
    .section-actions {
      margin-left: auto; /* Push button to the right */
      flex-shrink: 0;
    }
    /* Drag feedback */
    .draggable-section.dragging {
      opacity: 0.5;
      transform: scale(0.98);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      border: 1px dashed var(--primary-color);
      z-index: 10;
    }
    .draggable-section.drop-target {
      border: 2px dashed var(--primary-color);
      background-color: rgba(var(--rgb-primary-color), 0.1);
    }
    /* Column Styles */
    .columns-wrapper {
      display: flex;
      gap: 16px;
      width: 100%;
    }
    .columns-wrapper.stacked-columns {
      flex-direction: column; /* Stack columns vertically */
      gap: 24px;
    }
    .column-header {
      flex: 1;
      text-align: center;
      font-weight: 500;
      color: var(--primary-color);
      padding: 8px;
      background-color: var(--secondary-background-color);
      border-radius: 8px 8px 0 0;
      border: 1px solid var(--divider-color);
      border-bottom: none;
      margin-bottom: -1px; /* Overlap border */
    }
    .column-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 8px;
      min-height: 120px;
      padding: 8px;
      border: 1px solid var(--divider-color);
      border-radius: 8px; /* Rounded corners for columns */
      background-color: var(--card-background-color, rgba(0, 0, 0, 0.05));
      transition: all 0.2s ease;
      position: relative;
      /* Removed negative margin-top */
    }
    .columns-wrapper.stacked-columns .column-header {
      border-radius: 8px 8px 0 0; /* Ensure header radius */
      margin-bottom: -1px;
    }
    .columns-wrapper.stacked-columns .column-container {
      border-radius: 0 0 8px 8px; /* Bottom radius for stacked columns */
    }
    .empty-column-message {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--secondary-text-color);
      opacity: 0.7;
      font-style: italic;
      pointer-events: none;
    }
    .column-container.column-drag-over {
      border: 2px dashed var(--primary-color);
      background-color: rgba(var(--rgb-primary-color), 0.1);
      padding: 7px;
      transform: scale(1.01); /* Slight scale feedback */
      box-shadow: 0 0 8px rgba(var(--rgb-primary-color), 0.2);
    }
    /* Margin Controls */
    .section-margin-controls {
      display: flex;
      flex-direction: row;
      gap: 16px;
      padding: 8px 16px 16px; /* Add padding */
      background-color: var(--secondary-background-color); /* Match wrapper */
      border-top: 1px solid var(--divider-color);
    }
    .margin-control {
      display: flex;
      align-items: center;
      gap: 8px;
      flex: 1;
    }
    .margin-control ha-svg-icon,
    .margin-control ha-icon {
      color: var(--secondary-text-color);
      width: 18px;
      height: 18px;
    }
    .margin-control ha-textfield {
      flex: 1;
    }
    /* Global CSS Textarea */
    ha-form[name='global_css'] {
      /* No padding needed as settings-content has padding */
    }
    ha-form[name='global_css'] ha-textfield {
      width: 100%;
    }
    ha-form [name='global_css'] textarea {
      min-height: 150px; /* Adjust height */
      font-family: monospace;
      resize: vertical;
    }
  `,Gt([be({attribute:!1})],Kt.prototype,"hass",void 0),Gt([be({attribute:!1})],Kt.prototype,"config",void 0),Gt([fe()],Kt.prototype,"_draggedSection",void 0),Gt([fe()],Kt.prototype,"_expandedSectionId",void 0),Gt([fe()],Kt.prototype,"_dropTargetSection",void 0),Gt([fe()],Kt.prototype,"_dropTargetColumn",void 0),Kt=Gt([_e("customize-tab")],Kt);var Jt=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let Zt=class extends he{_t(e,t){var i,n;return wt(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}render(){return J`
      <div class="about-tab">
        <div class="about-logo-container">
          <a href="https://ultravehiclecard.com/" target="_blank" rel="noopener">
            <img
              src="/hacsfiles/Ultra-Vehicle-Card/assets/uvc-logo.png"
              alt="${this._t("editor.about.logo_alt","Ultra Vehicle Card")}"
              class="about-logo"
            />
          </a>
        </div>

        <div class="about-developed-by">
          ${this._t("editor.about.developed_by","Developed by")}
          <a href="https://wjddesigns.com" target="_blank" rel="noopener">WJD Designs</a>
        </div>

        <div class="about-buttons">
          <a
            href="https://discord.com/invite/5SkUf6Ch"
            target="_blank"
            rel="noopener"
            class="about-button discord"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" class="about-button-icon">
              <path
                fill="currentColor"
                d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3847-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"
              />
            </svg>
            ${this._t("editor.about.discord_button","Join Our Discord")}
          </a>

          <a
            href="https://github.com/WJDDesigns/Ultra-Vehicle-Card"
            target="_blank"
            rel="noopener"
            class="about-button github"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" class="about-button-icon">
              <path
                fill="currentColor"
                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
              />
            </svg>
            ${this._t("editor.about.github_button","Check Out Our Github")}
          </a>

          <a
            href="https://ultravehiclecard.com/documentation/"
            target="_blank"
            rel="noopener"
            class="about-button docs"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" class="about-button-icon">
              <path
                fill="currentColor"
                d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
              />
            </svg>
            ${this._t("editor.about.docs_button","Visit Our Documentation")}
          </a>
        </div>

        <div class="support-section">
          <h2>${this._t("editor.about.support_title","Support Ultra Vehicle Card")}</h2>

          <p>
            ${this._t("editor.about.support_para","Your generous tips fuel the development of amazing features for this card! Without support from users like you, continued innovation wouldn't be possible.")}
          </p>

          <a
            href="https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=4JVCZ46FZPUTG&clickref=1101lAycwnhU&gad_source=7&pid=328130457&dclid=CjgKEAjwh_i_BhCRhu7RxN_14hYSJACbYkcgx98-Vsb49UI4imjGhPA2lwk73DpbbgCri-G8TCTB9PD_BwE&ssrt=1744735247042"
            target="_blank"
            rel="noopener"
            class="about-button donate"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" class="about-button-icon">
              <path
                fill="currentColor"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>
            ${this._t("editor.about.donate_button","LEAVE A TIP (PAYPAL)")}
          </a>
        </div>
      </div>
    `}};Zt.styles=d`
    .about-tab {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px;
      max-width: 800px;
      margin: 0 auto;
      color: var(--primary-text-color);
    }
    .about-logo-container {
      margin-bottom: 20px;
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .about-logo {
      max-width: 250px;
      height: auto;
      cursor: pointer;
      transition: transform 0.3s ease;
      background: var(--primary-color);
      padding: 6px;
      border-radius: 8px; /* Added border-radius */
    }
    .about-logo:hover {
      transform: scale(1.05);
    }
    .about-developed-by {
      font-size: 1.2em;
      margin-bottom: 30px;
      color: var(--secondary-text-color);
    }
    .about-developed-by a {
      color: var(--primary-color);
      text-decoration: none;
      font-weight: bold;
    }
    .about-developed-by a:hover {
      text-decoration: underline;
    }
    .about-buttons {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      margin-bottom: 40px;
      width: 100%;
    }
    .about-button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px 20px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 500;
      transition: all 0.2s ease;
      min-width: 200px;
      color: white; /* Ensure text is white */
      border: none; /* Remove border */
    }
    .about-button ha-icon,
    .about-button svg {
      margin-right: 8px;
      fill: currentColor; /* Ensure icons inherit color */
    }
    .about-button.discord {
      background-color: #5865f2;
    }
    .about-button.github {
      background-color: #24292e;
    }
    .about-button.docs {
      background-color: #4caf50;
    }
    .about-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    .support-section {
      background-color: rgba(var(--rgb-primary-color), 0.1);
      border-radius: 12px;
      padding: 24px;
      margin-top: 20px;
      text-align: center;
      width: 100%;
      max-width: 600px;
    }
    .support-section h2 {
      color: var(--primary-color);
      margin-top: 0;
      margin-bottom: 16px;
    }
    .support-section p {
      margin-bottom: 24px;
      line-height: 1.5;
      color: var(--primary-text-color); /* Ensure text color */
    }
    .about-button.donate {
      background-color: #179bd7;
      padding: 14px 24px;
      font-weight: bold;
      letter-spacing: 0.5px;
      margin: 0 auto; /* Center donate button */
    }
    .about-button.donate:hover {
      background-color: #1486ba;
    }

    @media (max-width: 600px) {
      .about-buttons {
        flex-direction: column;
        align-items: center;
      }
      .about-button {
        width: 80%;
      }
    }
  `,Jt([be({attribute:!1})],Zt.prototype,"hass",void 0),Zt=Jt([_e("about-tab")],Zt);var Yt=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let Qt=class extends he{constructor(){super(...arguments),this.activeTab="settings",this._cropperActive=!1,this._cropperImage="",this._cropperTargetField="",this._vehicleCropExpanded=!1,this._actionCropExpanded=!1,this._showEntityList=!1,this._activeField="",this._entityFilter="",this._entities=[],this._editorVersion="1.2.0-debug"}setConfig(e){if(!e)throw new Error("Invalid configuration");if(this.config=Object.assign({vehicle_image_type:"default",status_image_type:"none",layout_type:"single",formatted_entities:!1,show_location:!0,show_mileage:!0,show_car_state:!0,sections_order:["title","info","image"],bars:[],icon_rows:[]},e),this.config.sections_order&&!this.config.sections_order.includes("info")){const e=[...this.config.sections_order],t=e.indexOf("image");-1!==t?e.splice(t+1,0,"info"):e.unshift("info"),this.config.sections_order=e}this.config.section_styles||(this.config.section_styles={}),void 0===this.config.vehicle_image_width&&(this.config.vehicle_image_width=100),void 0===this.config.action_image_width&&(this.config.action_image_width=100),this._migrateToIndividualSections()}_migrateToIndividualSections(){if(!this.config.sections_order)return;let e=[...this.config.sections_order],t=!1;const i=e.indexOf("icons");if(-1!==i&&this.config.icon_rows&&this.config.icon_rows.length>0&&!e.some((e=>e.startsWith("icon_row_")))){const n=this.config.icon_rows.map((e=>`icon_row_${e.id}`));e.splice(i,1,...n),t=!0}t&&(this.config.sections_order=e)}async _handleFileUploadEvent(e){const{file:t,id:i,configKey:n}=e.detail;if(t)if(this.hass&&this.hass.auth&&this.hass.auth.data&&this.hass.auth.data.access_token)try{const a=await async function(e,t){var i;if(!t)throw console.error("[UPLOAD] Missing file."),new Error("No file provided for upload.");if(!(e&&e.auth&&e.auth.data&&e.auth.data.access_token))throw console.error("[UPLOAD] Missing Home Assistant authentication details."),new Error("Authentication details are missing.");const n=new FormData;n.append("file",t);let a="";a=e.connection&&"string"==typeof(null===(i=e.connection.options)||void 0===i?void 0:i.url)?e.connection.options.url.replace(/^ws/,"http"):"function"==typeof e.hassUrl?e.hassUrl():`${window.location.protocol}//${window.location.host}`;const o=`${a.replace(/\/$/,"")}/api/image/upload`;try{const t=await fetch(o,{method:"POST",headers:{Authorization:`Bearer ${e.auth.data.access_token}`},body:n});if(!t.ok){const e=await t.text();throw console.error(`[UPLOAD] Failed to upload image via ${o}: ${t.status} ${t.statusText}`,e),new Error(`Failed to upload image via ${o}: ${t.statusText}`)}const i=await t.json();if(!i||!i.id)throw console.error(`[UPLOAD] Invalid response from ${o}: missing id`,i),new Error(`Invalid response from ${o}: missing id`);return`/api/image/serve/${i.id}`}catch(e){throw console.error(`[UPLOAD] Error during fetch to ${o}:`,e),new Error(`Upload via ${o} failed: ${e instanceof Error?e.message:"Unknown network error"}`)}}(this.hass,t);if(i&&this.config.action_images){const e=this.config.action_images.findIndex((e=>e.id===i));if(-1!==e){const t=[...this.config.action_images.slice(0,e),Object.assign(Object.assign({},this.config.action_images[e]),{image:a}),...this.config.action_images.slice(e+1)];this._updateConfig({action_images:t})}else console.warn(`[UPLOAD EVENT] Action image with ID "${i}" not found.`),n&&this._updateConfig({[n]:a})}else n?this._updateConfig({[n]:a}):console.error("[UPLOAD EVENT] Event detail missing required ID or configKey.",e.detail)}catch(e){console.error("[UPLOAD EVENT] Upload failed:",e)}else console.error("[UPLOAD EVENT] Hass object appears invalid or missing auth!");else console.error("[UPLOAD EVENT] Missing file in event detail.",e.detail)}_getCleanConfig(){const e=Object.assign({},this.config);return e.section_styles&&(Object.keys(e.section_styles).forEach((t=>{const i=e.section_styles[t],n=i.marginTop||0,a=i.marginBottom||0;0===n&&0===a?delete e.section_styles[t]:(0===n&&delete i.marginTop,0===a&&delete i.marginBottom)})),0===Object.keys(e.section_styles).length&&delete e.section_styles),e.sections_columns&&0===Object.keys(e.sections_columns).length&&delete e.sections_columns,e}_updateConfig(e){this.config&&e&&(this.config=Object.assign(Object.assign({},this.config),e),this._fireConfigChanged())}_updateConfigFromEvent(e){e.stopPropagation();const t=e.detail.config;t&&this._updateConfig(t)}_fireConfigChanged(){this._configChangedTimeout&&clearTimeout(this._configChangedTimeout),this._configChangedTimeout=window.setTimeout((()=>{const e=this._getCleanConfig();Ke(this,"config-changed",{config:e})}),50)}_getFriendlyName(e){}_truncateText(e,t=15){}_generateUniqueId(){}_formatFieldName(e){}_getImageSchema(e){}_renderCropSliders(e){}_updateImageCrop(e,t,i){}_resetTitleSize(){}_t(e,t){}_fireForceGradientRefreshEvent(){this.dispatchEvent(new CustomEvent("force-gradient-refresh",{bubbles:!0,composed:!0,detail:{timestamp:Date.now()}})),document.dispatchEvent(new CustomEvent("force-card-update",{bubbles:!0,composed:!0}))}render(){var e;if(!this.config||!this.hass)return Y;const t=(null===(e=this.hass.locale)||void 0===e?void 0:e.language)||"en";return J`
      <div class="card-config">
        <div class="tabs">
          <div
            class="tab ${"settings"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="settings"}"
          >
            ${wt("editor.tabs.settings",t,"Settings")}
          </div>
          <div
            class="tab ${"bars"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="bars"}"
          >
            ${wt("editor.tabs.bars",t,"Bars")}
          </div>
          <div
            class="tab ${"icons"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="icons"}"
          >
            ${wt("editor.tabs.icons",t,"Icons")}
          </div>
          <div
            class="tab ${"customize"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="customize"}"
          >
            ${wt("editor.tabs.customize",t,"Customize")}
          </div>
          <div
            class="tab ${"about"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="about"}"
          >
            ${wt("editor.tabs.about",t,"About")}
          </div>
        </div>

        ${"settings"===this.activeTab?J`
              <settings-tab
                .hass=${this.hass}
                .config=${this.config}
                @config-changed=${this._updateConfigFromEvent}
                @file-upload=${this._handleFileUploadEvent}
              ></settings-tab>
            `:""}
        ${"bars"===this.activeTab?J`
              <bars-tab
                .hass=${this.hass}
                .config=${this.config}
                @config-changed=${this._updateConfigFromEvent}
                @force-gradient-refresh=${this._fireForceGradientRefreshEvent}
              ></bars-tab>
            `:""}
        ${"icons"===this.activeTab?J`
              <icons-tab
                .hass=${this.hass}
                .config=${this.config}
                @config-changed=${this._updateConfigFromEvent}
              ></icons-tab>
            `:""}
        ${"customize"===this.activeTab?J`
              <customize-tab
                .hass=${this.hass}
                .config=${this.config}
                @config-changed=${this._updateConfigFromEvent}
              ></customize-tab>
            `:""}
        ${"about"===this.activeTab?J` <about-tab .hass=${this.hass}></about-tab> `:""}
      </div>
    `}static get styles(){return d`
      /* Base layout */
      .card-config {
        display: flex;
        flex-direction: column;
      }

      /* Tab navigation */
      .tabs {
        display: flex;
        width: 100%;
        margin-bottom: 16px;
        border-bottom: 1px solid var(--divider-color);
      }
      .tab {
        flex: 1;
        padding: 8px 16px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        margin-bottom: -1px;
        color: var(--secondary-text-color);
        transition: all 0.2s ease;
        text-align: center;
      }
      .tab:hover {
        background-color: rgba(var(--rgb-primary-color), 0.1);
        color: var(--primary-text-color);
      }
      .tab.active {
        border-bottom: 2px solid var(--primary-color);
        color: var(--primary-color);
        font-weight: 500;
      }

      /* REMOVE Styles for content sections previously in this file */
      /* e.g., .settings-section, .bar, .mini-bar, .section-group, etc. */
      /* Keep styles for potential globally used elements if any */

      /* Keep Cropper styles if cropper overlay is rendered here */
      .cropper-overlay {
        /* ... */
      }
      .cropper-container {
        /* ... */
      }
      /* ... other cropper styles ... */
    `}firstUpdated(){this._refreshEntityList(),document.addEventListener("click",(e=>{var t;(null===(t=this.shadowRoot)||void 0===t?void 0:t.contains(e.target))||(this._showEntityList=!1)})),this._loadCropperJS()}_refreshEntityList(){}_onEntityInputChange(e){}_onEntityFocus(e,t){}_getFilteredEntities(){}_selectEntity(e,t){}async _loadCropperJS(){}_renderImageCropper(){}_applyCrop(){}updated(e){}};Yt([be({attribute:!1})],Qt.prototype,"hass",void 0),Yt([be()],Qt.prototype,"config",void 0),Yt([fe()],Qt.prototype,"activeTab",void 0),Yt([fe()],Qt.prototype,"_cropperActive",void 0),Yt([fe()],Qt.prototype,"_cropperImage",void 0),Yt([fe()],Qt.prototype,"_cropperTargetField",void 0),Yt([fe()],Qt.prototype,"_vehicleCropExpanded",void 0),Yt([fe()],Qt.prototype,"_actionCropExpanded",void 0),Yt([fe()],Qt.prototype,"_showEntityList",void 0),Yt([fe()],Qt.prototype,"_activeField",void 0),Yt([fe()],Qt.prototype,"_entityFilter",void 0),Yt([fe()],Qt.prototype,"_entities",void 0),Qt=Yt([_e("ultra-vehicle-card-editor")],Qt),window.customCards=window.customCards||[],window.customCards.push({type:"ultra-vehicle-card",name:"Ultra Vehicle Card",description:"A card that displays vehicle information with fuel/charge level, range, location, mileage, and a customizable icon grid.",preview:!0,documentationURL:"https://github.com/WJDDesigns/Ultra-Vehicle-Card",version:Ce})})();