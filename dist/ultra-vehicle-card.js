/*! For license information please see ultra-vehicle-card.js.LICENSE.txt */
(()=>{"use strict";var e,t,i={},n={};function a(e){var t=n[e];if(void 0!==t)return t.exports;var o=n[e]={exports:{}};return i[e](o,o.exports,a),o.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,a.t=function(i,n){if(1&n&&(i=this(i)),8&n)return i;if("object"==typeof i&&i){if(4&n&&i.__esModule)return i;if(16&n&&"function"==typeof i.then)return i}var o=Object.create(null);a.r(o);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&i;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>r[e]=()=>i[e]));return r.default=()=>i,a.d(o,r),o},a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};const o=globalThis,r=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),l=new WeakMap;class d{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(r&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=l.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(t,e))}return e}toString(){return this.cssText}}const c=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1]),e[0]);return new d(i,e,s)},p=(e,t)=>{if(r)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),n=o.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=i.cssText,e.appendChild(t)}},g=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new d("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:h,defineProperty:u,getOwnPropertyDescriptor:_,getOwnPropertyNames:m,getOwnPropertySymbols:v,getPrototypeOf:b}=Object,f=globalThis,y=f.trustedTypes,k=y?y.emptyScript:"",w=f.reactiveElementPolyfillSupport,x=(e,t)=>e,S={toAttribute(e,t){switch(t){case Boolean:e=e?k:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},$=(e,t)=>!h(e,t),z={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),f.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=z){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&u(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:a}=_(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const o=n?.call(this);a.call(this,t),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??z}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=b(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...m(e),...v(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(g(e))}else void 0!==e&&t.push(g(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return p(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:S).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(n):this.setAttribute(n,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:S;this._$Em=n,this[n]=a.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??$)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[x("elementProperties")]=new Map,A[x("finalized")]=new Map,w?.({ReactiveElement:A}),(f.reactiveElementVersions??=[]).push("2.0.4");const I=globalThis,C=I.trustedTypes,E=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,L="?"+j,R=`<${L}>`,V=document,B=()=>V.createComment(""),D=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,P="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,M=/>/g,F=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,H=/"/g,G=/^(?:script|style|textarea|title)$/i,K=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),W=K(1),J=(K(2),K(3),Symbol.for("lit-noChange")),Z=Symbol.for("lit-nothing"),Y=new WeakMap,Q=V.createTreeWalker(V,129);function X(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const ee=(e,t)=>{const i=e.length-1,n=[];let a,o=2===t?"<svg>":3===t?"<math>":"",r=N;for(let t=0;t<i;t++){const i=e[t];let s,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===N?"!--"===l[1]?r=U:void 0!==l[1]?r=M:void 0!==l[2]?(G.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=F):void 0!==l[3]&&(r=F):r===F?">"===l[0]?(r=a??N,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?F:'"'===l[3]?H:q):r===H||r===q?r=F:r===U||r===M?r=N:(r=F,a=void 0);const p=r===F&&e[t+1].startsWith("/>")?" ":"";o+=r===N?i+R:d>=0?(n.push(s),i.slice(0,d)+T+i.slice(d)+j+p):i+j+(-2===d?t:p)}return[X(e,o+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class te{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let a=0,o=0;const r=e.length-1,s=this.parts,[l,d]=ee(e,t);if(this.el=te.createElement(l,i),Q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Q.nextNode())&&s.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(T)){const t=d[o++],i=n.getAttribute(e).split(j),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?re:"?"===r[1]?se:"@"===r[1]?le:oe}),n.removeAttribute(e)}else e.startsWith(j)&&(s.push({type:6,index:a}),n.removeAttribute(e));if(G.test(n.tagName)){const e=n.textContent.split(j),t=e.length-1;if(t>0){n.textContent=C?C.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],B()),Q.nextNode(),s.push({type:2,index:++a});n.append(e[t],B())}}}else if(8===n.nodeType)if(n.data===L)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(j,e+1));)s.push({type:7,index:a}),e+=j.length-1}a++}}static createElement(e,t){const i=V.createElement("template");return i.innerHTML=e,i}}function ie(e,t,i=e,n){if(t===J)return t;let a=void 0!==n?i._$Co?.[n]:i._$Cl;const o=D(t)?void 0:t._$litDirective$;return a?.constructor!==o&&(a?._$AO?.(!1),void 0===o?a=void 0:(a=new o(e),a._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=a:i._$Cl=a),void 0!==a&&(t=ie(e,a._$AS(e,t.values),a,n)),t}class ne{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??V).importNode(t,!0);Q.currentNode=n;let a=Q.nextNode(),o=0,r=0,s=i[0];for(;void 0!==s;){if(o===s.index){let t;2===s.type?t=new ae(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new de(a,this,e)),this._$AV.push(t),s=i[++r]}o!==s?.index&&(a=Q.nextNode(),o++)}return Q.currentNode=V,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ae{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ie(this,e,t),D(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==J&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Z&&D(this._$AH)?this._$AA.nextSibling.data=e:this.T(V.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=te.createElement(X(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new ne(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=Y.get(e.strings);return void 0===t&&Y.set(e.strings,t=new te(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const a of e)n===t.length?t.push(i=new ae(this.O(B()),this.O(B()),this,this.options)):i=t[n],i._$AI(a),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class oe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,a){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(e,t=this,i,n){const a=this.strings;let o=!1;if(void 0===a)e=ie(this,e,t,0),o=!D(e)||e!==this._$AH&&e!==J,o&&(this._$AH=e);else{const n=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=ie(this,n[i+r],t,r),s===J&&(s=this._$AH[r]),o||=!D(s)||s!==this._$AH[r],s===Z?e=Z:e!==Z&&(e+=(s??"")+a[r+1]),this._$AH[r]=s}o&&!n&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class re extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}class se extends oe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class le extends oe{constructor(e,t,i,n,a){super(e,t,i,n,a),this.type=5}_$AI(e,t=this){if((e=ie(this,e,t,0)??Z)===J)return;const i=this._$AH,n=e===Z&&i!==Z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==Z&&(i===Z||n);n&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class de{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ie(this,e)}}const ce=I.litHtmlPolyfillSupport;ce?.(te,ae),(I.litHtmlVersions??=[]).push("3.2.1");class pe extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const n=i?.renderBefore??t;let a=n._$litPart$;if(void 0===a){const e=i?.renderBefore??null;n._$litPart$=a=new ae(t.insertBefore(B(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return J}}pe._$litElement$=!0,pe.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:pe});const ge=globalThis.litElementPolyfillSupport;ge?.({LitElement:pe}),(globalThis.litElementVersions??=[]).push("4.1.1");const he=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},ue={attribute:!0,type:String,converter:S,reflect:!1,hasChanged:$},_e=(e=ue,t,i)=>{const{kind:n,metadata:a}=i;let o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),o.set(i.name,e),"accessor"===n){const{name:n}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,a,e)},init(t){return void 0!==t&&this.P(n,void 0,e),t}}}if("setter"===n){const{name:n}=i;return function(i){const a=this[n];t.call(this,i),this.requestUpdate(n,a,e)}}throw Error("Unsupported decorator location: "+n)};function me(e){return(t,i)=>"object"==typeof i?_e(e,t,i):((e,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function ve(e){return me({...e,state:!0,attribute:!1})}const be="/hacsfiles/Ultra-Vehicle-Card/assets/default-car.png";var fe=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};function ye(e){if(!e||!Array.isArray(e)||0===e.length)return"";const t=e.filter((e=>e&&"string"==typeof e.color&&""!==e.color.trim()&&"number"==typeof e.position&&e.position>=0&&e.position<=100));if(0===t.length)return"";const i=[...t].sort(((e,t)=>e.position-t.position));return i.map((e=>`${e.color} ${e.position}%`)).join(", ")}function ke(e){const t=e.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);if(t)return{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)};const i=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10)}:null}let we=class extends pe{constructor(){super(...arguments),this.stops=[],this.key=0,this._isDragging=!1,this._draggedStopId=null,this._lastRenderTime=0,this._boundPointerMove=this._handlePointerMove.bind(this),this._boundPointerUp=this._handlePointerUp.bind(this)}disconnectedCallback(){this.removeEventListener("pointermove",this._boundPointerMove),this.removeEventListener("pointerup",this._boundPointerUp),document.removeEventListener("pointermove",this._boundPointerMove),document.removeEventListener("pointerup",this._boundPointerUp),document.removeEventListener("pointercancel",this._boundPointerUp),super.disconnectedCallback()}_getProcessedStops(){const e=[...(this.stops||[]).filter((e=>e&&"string"==typeof e.id&&"number"==typeof e.position&&"string"==typeof e.color))].sort(((e,t)=>e.position-t.position));return e.length<2?[{id:"default-start",position:0,color:"#ff0000"},{id:"default-end",position:100,color:"#00ff00"}]:e}updated(e){if(super.updated(e),e.has("stops")||e.has("key")){const e=Date.now();this._lastRenderTime=e,this._updateGradientPreview()}}_updateGradientPreview(){var e;try{const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".gradient-preview");if(t){const e=ye(this._getProcessedStops());t.style.background=`linear-gradient(to right, ${e})`}}catch(e){console.error("[GradientEditor] Error updating gradient preview:",e)}}static get styles(){return c`
      :host {
        display: block;
        position: relative;
        width: 100%;
        --gradient-height: 32px;
        --handle-size: 20px;
        --handle-border-width: 2px;
      }

      /* Style for the hidden color input */
      .native-color-input {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
        opacity: 0;
      }

      .gradient-container {
        position: relative;
        width: 100%;
        height: var(--gradient-height);
        border-radius: 4px;
        margin-top: 30px;
        margin-bottom: 80px; /* Increase to make room for controls */
        border: 1px solid var(--primary-background-color);
        overflow: visible;
      }

      .gradient-preview {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 1px solid var(--primary-background-color);
      }

      .stop-container {
        position: absolute;
        top: 0;
        height: 100%;
        width: var(--handle-size);
        margin-left: calc(var(--handle-size) / -2);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 5; /* Increase base z-index */
      }

      /* Apply higher z-index when being dragged */
      .stop-container.dragging {
        z-index: 15; /* Increase dragging z-index */
      }

      .drag-line {
        position: absolute;
        top: -2px;
        bottom: 0px;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 13px;
        background-color: rgb(0 0 0 / 55%);
        cursor: grab;
        z-index: 10;
        transition: background-color 0.2s;
        border-radius: 10%;
        border: solid white 2px;
      }
      .drag-line:hover {
        background-color: var(--primary-color);
      }
      .drag-line:active {
        cursor: grabbing;
        background-color: var(--primary-color);
      }

      .color-stop-circle {
        position: absolute;
        top: calc(var(--gradient-height) + 10px);
        left: 50%;
        transform: translateX(-50%);
        width: var(--handle-size);
        height: var(--handle-size);
        border-radius: 50%;
        cursor: pointer;
        border: var(--handle-border-width) solid white;
        box-shadow:
          0 0 0 1px rgba(0, 0, 0, 0.3),
          0 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 11;
      }
      .color-stop-circle.active {
        box-shadow:
          0 0 0 2px var(--primary-color),
          0 4px 8px rgba(0, 0, 0, 0.3);
      }

      .handle-position {
        position: absolute;
        top: calc(var(--gradient-height) + 10px + var(--handle-size) + 5px);
        left: 50%;
        transform: translateX(-50%);
        font-size: 12px;
        white-space: nowrap;
        color: var(--primary-text-color);
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
        pointer-events: none;
        z-index: 12;
        background-color: rgba(0, 0, 0, 0.5);
        padding: 2px 4px;
        border-radius: 4px;
      }

      .delete-button {
        position: absolute;
        /* Explicitly position from the top, 20px above the gradient bar */
        top: -20px;
        left: 50%;
        transform: translateX(-50%);
        width: 16px;
        height: 16px;
        background-color: var(--error-color, #ff0000);
        color: white;
        border-radius: 50%;
        font-size: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        z-index: 12;
        opacity: 0; /* Default hidden */
        pointer-events: none; /* Default no interaction */
      }

      /* Add hover effect for delete button */
      .stop-container:hover .delete-button {
        opacity: 1; /* Always show delete button on hover */
        pointer-events: auto; /* Always enable pointer events on hover */
      }

      .stop-actions {
        display: flex;
        justify-content: center;
        margin-top: 16px;
        gap: 8px;
      }

      .gradient-info {
        display: flex;
        justify-content: center;
        font-size: 14px;
        margin-top: 16px;
        color: var(--secondary-text-color);
      }

      .gradient-buttons {
        display: flex;
        justify-content: center;
        gap: 16px;
        margin-top: 24px;
        padding: 0 16px;
        flex-wrap: wrap;
      }
    `}render(){try{const e=this._getProcessedStops(),t=ye(e),i=new Map;e.forEach((e=>{e&&"number"==typeof e.position&&i.set(e.id,e.position)}));const n=new Set,a=[...e].sort(((e,t)=>e.position-t.position));for(let e=0;e<a.length-1;e++){const t=a[e],i=a[e+1];i.position-t.position<10&&(n.add(t.id),n.add(i.id))}return W`
        <div class="gradient-container">
          <div
            class="gradient-preview"
            style="background: linear-gradient(to right, ${t})"
          ></div>
          ${e.map(((t,i)=>{if(!t||"number"!=typeof t.position||!t.id||"string"!=typeof t.color||""===t.color.trim())return W``;const a=0===t.position||100===t.position,o=this._isDragging&&this._draggedStopId===t.id,r=n.has(t.id)&&i%2==1?"calc(var(--gradient-height) + 10px + var(--handle-size) + 25px)":"calc(var(--gradient-height) + 10px + var(--handle-size) + 5px)",s=o?100:10+i;return W`
              <div
                class="stop-container ${o?"dragging":""}"
                style="left: ${t.position}%; z-index: ${s};"
                data-stop-id="${t.id}"
              >
                <div
                  class="delete-button"
                  style="opacity: ${!a&&e.length>2?1:0}; pointer-events: ${!a&&e.length>2?"auto":"none"}"
                  @click=${e=>this._handleDeleteClick(e,t)}
                  title="Delete Stop"
                >
                  ✕
                </div>
                <div
                  class="drag-line"
                  @pointerdown=${e=>this._handlePointerDown(e,t)}
                  title="${a?"Fixed position stop":"Drag to move"}"
                  style="${a?"cursor: not-allowed;":""}${o?"cursor: grabbing;":""}"
                  data-stop-id="${t.id}"
                ></div>
                <label
                  class="color-stop-circle"
                  style="background-color: ${t.color};"
                  for="color-input-${t.id}"
                >
                  <input
                    type="color"
                    id="color-input-${t.id}"
                    class="native-color-input"
                    .value=${t.color}
                    @input=${e=>this._handleNativeColorChange(e,t)}
                  />
                </label>
                <div class="handle-position" style="top: ${r};">${t.position}%</div>
              </div>
            `}))}
        </div>
        <div class="gradient-info">
          Click on a color stop to change its color. Drag the intermediate stops to adjust position.
        </div>
      `}catch(e){return console.error("[GradientEditor] Error in render:",e),W`
        <div class="gradient-container">
          <div
            class="gradient-preview"
            style="background: linear-gradient(to right, #ff0000, #00ff00)"
          ></div>
        </div>
        <div class="gradient-info">Error rendering gradient editor. Try resetting.</div>
      `}}_handleNativeColorChange(e,t){try{if(!(e&&e.target&&t&&t.id))return;e.stopPropagation();const i=e.target.value,n=this.stops.find((e=>e.id===t.id));if(!n)return;const a=Object.assign(Object.assign({},n),{color:i}),o=new CustomEvent("stop-changed",{detail:a,bubbles:!0,composed:!0});this.dispatchEvent(o)}catch(e){console.error("[GradientEditor] Error in color change handler:",e)}}_handlePointerDown(e,t){var i;try{if(0===t.position||100===t.position)return;e.preventDefault();const n=null===(i=this.stops)||void 0===i?void 0:i.some((e=>(null==e?void 0:e.id)===(null==t?void 0:t.id)));if(!n)return;const a=e.currentTarget;if(!a||!a.isConnected)return;if(!this.shadowRoot)return;try{a.setPointerCapture(e.pointerId)}catch(e){}this._isDragging=!0,this._draggedStopId=t.id;try{a.addEventListener("pointermove",this._boundPointerMove),a.addEventListener("pointerup",this._boundPointerUp,{once:!0}),a.addEventListener("pointercancel",this._boundPointerUp,{once:!0})}catch(e){}document.addEventListener("pointermove",this._boundPointerMove),document.addEventListener("pointerup",this._boundPointerUp,{once:!0}),document.addEventListener("pointercancel",this._boundPointerUp,{once:!0})}catch(t){console.error("[GradientEditor] Error in pointer down handler:",t),this._endDrag(e)}}_handlePointerMove(e){var t;try{if(!this._isDragging||!this._draggedStopId||!this.shadowRoot)return;e.preventDefault();const i=null===(t=this.stops)||void 0===t?void 0:t.find((e=>(null==e?void 0:e.id)===this._draggedStopId));if(!i)return void this._endDrag(e);let n=this.shadowRoot.querySelector(".gradient-container"),a=null;if(n&&(a=Array.from(n.querySelectorAll(".stop-container")).find((e=>{var t;return(null===(t=null==e?void 0:e.dataset)||void 0===t?void 0:t.stopId)===this._draggedStopId}))||null),!n||!a||!a.isConnected)return void this._endDrag(e);const o=n.getBoundingClientRect(),r=Math.min(99,Math.max(1,(e.clientX-o.left)/o.width*100)),s=Math.round(r);if(a.isConnected){const e=a;e.style.left=`${s}%`;const t=e.querySelector(".handle-position");t&&(t.textContent=`${s}%`)}this._updateDraggedStop(this._draggedStopId,s)}catch(t){console.error("[GradientEditor] Error in pointer move handler:",t),this._endDrag(e)}}_handlePointerUp(e){var t,i,n;try{if(!this._isDragging||!this._draggedStopId)return;e.preventDefault();const a=this._draggedStopId,o=null===(t=this.stops)||void 0===t?void 0:t.find((e=>(null==e?void 0:e.id)===a)),r=this._isDragging;if(this._endDrag(e),!o)return;if(!r)return;let s=0,l=!1;if(this.shadowRoot){const t=this.shadowRoot.querySelector(".gradient-container");if(t){const i=t.getBoundingClientRect();i.width>0&&(s=Math.min(99,Math.max(1,Math.round((e.clientX-i.left)/i.width*100))),l=!0)}}if(!l&&this.shadowRoot){const e=Array.from(this.shadowRoot.querySelectorAll(".stop-container")).find((e=>{var t;return(null===(t=null==e?void 0:e.dataset)||void 0===t?void 0:t.stopId)===a}));if(e&&e.isConnected){const t=e.style.left;if(t){const e=parseFloat(t);isNaN(e)||(s=Math.round(e),l=!0)}}}if(!l){const e=null===(i=this.stops)||void 0===i?void 0:i.find((e=>(null==e?void 0:e.id)===a));e&&"number"==typeof e.position&&(s=e.position,l=!0)}s=Math.min(99,Math.max(1,s));const d=null===(n=this.stops)||void 0===n?void 0:n.map((e=>(null==e?void 0:e.id)===a?Object.assign(Object.assign({},e),{position:s}):Object.assign({},e)));if(!d||!Array.isArray(d))return;const c=[...d].sort(((e,t)=>{var i,n;return(null!==(i=null==e?void 0:e.position)&&void 0!==i?i:0)-(null!==(n=null==t?void 0:t.position)&&void 0!==n?n:0)}));try{this.dispatchEvent(new CustomEvent("stops-rearranged",{detail:{stops:c},bubbles:!0,composed:!0}))}catch(e){console.error("[GradientEditor] Error dispatching stops-rearranged event:",e)}}catch(t){console.error("[GradientEditor] Error in pointer up handler:",t),this._endDrag(e)}}_endDrag(e){try{if(!this._isDragging&&!this._draggedStopId)return;if(this._isDragging,this._draggedStopId,this._isDragging=!1,this._draggedStopId=null,(null==e?void 0:e.currentTarget)&&void 0!==e.currentTarget.isConnected){const t=e.currentTarget;if(t.isConnected){try{e.pointerId&&t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId)}catch(e){console.warn("[GradientEditor] Error releasing pointer capture:",e)}try{t.removeEventListener("pointermove",this._boundPointerMove),t.removeEventListener("pointerup",this._boundPointerUp),t.removeEventListener("pointercancel",this._boundPointerUp)}catch(e){console.warn("[GradientEditor] Error removing element listeners:",e)}}}try{document.removeEventListener("pointermove",this._boundPointerMove),document.removeEventListener("pointerup",this._boundPointerUp),document.removeEventListener("pointercancel",this._boundPointerUp)}catch(e){console.warn("[GradientEditor] Error removing document listeners:",e)}requestAnimationFrame((()=>{this.isConnected&&this.requestUpdate()}))}catch(t){console.error("[GradientEditor] Error in _endDrag:",t);try{document.removeEventListener("pointermove",this._boundPointerMove),document.removeEventListener("pointerup",this._boundPointerUp),document.removeEventListener("pointercancel",this._boundPointerUp)}catch(e){console.warn("[GradientEditor] Error during fallback document listener removal in _endDrag catch block:",e)}this._isDragging=!1,this._draggedStopId=null}}_handleDeleteClick(e,t){e.stopPropagation(),t&&t.id&&0!==t.position&&100!==t.position&&(!this.stops||this.stops.length<=2||(this._isDragging&&this._draggedStopId===t.id&&this._endDrag(null),this.dispatchEvent(new CustomEvent("stop-removed",{detail:{id:t.id},bubbles:!0,composed:!0}))))}_updateDraggedStop(e,t){var i;try{if(!e||"number"!=typeof t)return;const n=this.stops.map((i=>i.id===e?Object.assign(Object.assign({},i),{position:t}):i)),a=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".gradient-preview");if(a){const e=[...n].sort(((e,t)=>e.position-t.position)),t=ye(e);t&&(a.style.background=`linear-gradient(to right, ${t})`)}}catch(e){console.error("[GradientEditor] Error updating dragged stop:",e)}}};fe([me({type:Array})],we.prototype,"stops",void 0),fe([me({type:Number})],we.prototype,"key",void 0),fe([ve()],we.prototype,"_isDragging",void 0),fe([ve()],we.prototype,"_draggedStopId",void 0),we=fe([he("gradient-editor")],we);let xe=class extends we{constructor(){super()}updated(e){super.updated(e),setTimeout((()=>{this.shadowRoot&&0===this.shadowRoot.querySelectorAll(".stop-container").length&&console.warn("[UltraVehicleGradientEditor] No stop containers found in DOM after render!")}),100)}render(){return super.render()}};xe=fe([he("ultra-vehicle-gradient-editor")],xe);var Se=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let $e=class extends pe{constructor(){super(...arguments),this._lastRenderTime=0,this._lastImageUrl=null,this._mapPopupData=null,this._entityStates=new Map,this._entityImageUrls=new Map}static getConfigElement(){return document.createElement("ultra-vehicle-card-editor")}static getStubConfig(){return{title:"Vehicle Title",title_alignment:"center",title_size:24,formatted_entities:!0,vehicle_image_type:"default"}}static get properties(){return{hass:{},config:{}}}static get styles(){return c`
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
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: width 0.5s ease;
        z-index: 1;
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
            0 0 10px 3px rgba(var(--glow-color-r, 52), var(--glow-color-g, 152), var(--glow-color-b, 219), 0.7),
            0 0 20px 6px rgba(var(--glow-color-r, 52), var(--glow-color-g, 152), var(--glow-color-b, 219), 0.4);
          opacity: 0.7;
        }
        50% {
          box-shadow:
            0 0 20px 5px rgba(var(--glow-color-r, 52), var(--glow-color-g, 152), var(--glow-color-b, 219), 0.9),
            0 0 40px 10px rgba(var(--glow-color-r, 52), var(--glow-color-g, 152), var(--glow-color-b, 219), 0.6);
          opacity: 0.9;
        }
        100% {
          box-shadow:
            0 0 10px 3px rgba(var(--glow-color-r, 52), var(--glow-color-g, 152), var(--glow-color-b, 219), 0.7),
            0 0 20px 6px rgba(var(--glow-color-r, 52), var(--glow-color-g, 152), var(--glow-color-b, 219), 0.4);
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

      
      }
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");const t=this.config;this.config=Object.assign({},e),this._lastRenderTime=Date.now(),this.requestUpdate(),t&&this._checkForGradientOrAnimationChanges(t,this.config)&&this._forceFullRender()}_checkForGradientOrAnimationChanges(e,t){if(!e.bars||!t.bars)return!0;for(let i=0;i<Math.max(e.bars.length,t.bars.length);i++){const n=e.bars[i],a=t.bars[i];if(!n||!a)return!0;if(n.use_gradient!==a.use_gradient)return!0;if(n.gradient_display_mode!==a.gradient_display_mode)return!0;if(n.limit_entity!==a.limit_entity)return!0;if(n.limit_indicator_color!==a.limit_indicator_color)return!0;if(JSON.stringify(n.gradient_stops)!==JSON.stringify(a.gradient_stops))return!0;if(n.animation_type!==a.animation_type)return!0;if(n.animation_entity!==a.animation_entity)return!0;if(n.animation_state!==a.animation_state)return!0;if(n.action_animation!==a.action_animation)return!0;if(n.action_animation_entity!==a.action_animation_entity)return!0;if(n.action_animation_state!==a.action_animation_state)return!0}return!1}_forceFullRender(){this._lastRenderTime=Date.now(),this.requestUpdate(),setTimeout((()=>{this.shadowRoot&&this.shadowRoot.querySelectorAll(".progress-bar-fill").forEach((e=>{if(e instanceof HTMLElement){e.offsetHeight;const t=e.getAttribute("has-gradient"),i=e.getAttribute("data-mode");if("true"===t)if("full"===i)e.style.backgroundSize="100% 100%",e.style.backgroundPosition="0% 0%";else if("value_based"===i){const t=e.style.width;e.style.backgroundSize=`${t} 100%`}e.setAttribute("data-refreshed",String(this._lastRenderTime))}}))}),50)}render(){if(!this.config||!this.hass)return W``;const e=this.config.sections_order||["title","image","info","bars","icons"],t=this.config.layout_type||"single",i=this.config.sections_columns||{},n=this.config.section_styles||{},a=this.config.hidden_sections||[],o=e.filter((e=>!a.includes(e))),r=e=>{var t,i;const a=[],o=e.some((e=>e.startsWith("bar_")));let r=0;for(;r<e.length;){const s=e[r],l=n[s]||{};let d="";if(l.marginTop&&(d+=`margin-top: ${l.marginTop}px;`),l.marginBottom&&(d+=` margin-bottom: ${l.marginBottom}px;`),d=d.trim(),s.startsWith("bar_")){const t=[];let i=d;for(;r<e.length&&e[r].startsWith("bar_");){const a=e[r],o=parseInt(a.substring(4)),s=n[a]||{};let l="";s.marginTop&&(l+=`margin-top: ${s.marginTop}px;`),s.marginBottom&&(l+=` margin-bottom: ${s.marginBottom}px;`),l=l.trim(),!isNaN(o)&&this.config.bars&&this.config.bars[o]&&(t.push(o),1===t.length&&(i=l)),r++}t.length>0&&a.push(W`<div class="bars-container" style="${i}">
                ${t.map((e=>this._renderBar(this.config.bars[e])))}
              </div>`),r--}else if("bars"===s&&!o&&(null===(t=this.config.bars)||void 0===t?void 0:t.length))a.push(W`<div class="bars-container" style="${d}">
              ${this.config.bars.map((e=>this._renderBar(e)))}
            </div>`);else if("bars"!==s||!o)switch(s){case"title":const e=this.config.title_size||24;a.push(this.config.title?W`<h1
                      class="card-title ${this.config.title_alignment||"center"}"
                      style="font-size: ${e}px !important; line-height: 1.2; ${d}"
                    >
                      ${this.config.title}
                    </h1>`:W``);break;case"image":a.push(this._renderImage(d));break;case"info":a.push(this._renderVehicleInfo(d));break;case"icons":a.push(this._renderIconRows(d));break;default:if(s.startsWith("icon_row_")){const e=s.substring(9),t=null===(i=this.config.icon_rows)||void 0===i?void 0:i.find((t=>t.id===e));t&&a.push(W`<div class="icon-rows-container" style="${d}">
                      ${this._renderIconRow(t)}
                    </div>`)}}r++}return a};if("double"===t){const e=o.filter((e=>"right"!==i[e])),t=o.filter((e=>"right"===i[e]));return W`
        <ha-card>
          ${this.config.global_css?W`<style>
                :host { ${this.config.global_css} }
              </style>`:""}
          <div class="card-content two-column-layout">
            <div class="column left-column">${r(e)}</div>
            <div class="column right-column">${r(t)}</div>
          </div>
          ${this._renderMapPopup()}
        </ha-card>
      `}return W`
      <ha-card>
        ${this.config.global_css?W`<style>
              :host { ${this.config.global_css} }
            </style>`:""}
        <div class="card-content">${r(o)}</div>
        ${this._renderMapPopup()}
      </ha-card>
    `}_renderImage(e=""){var t,i,n;let a="",o="",r=!1,s="";if(this.config.action_entity&&this.config.action_state&&(null===(t=this.hass.states[this.config.action_entity])||void 0===t?void 0:t.state)===this.config.action_state){const e=this.config.action_image_type;let t="";if(s=this.config.action_entity,"upload"===e&&this.config.action_image)t=function(e,t){if(!t)return"";if(t.startsWith("http"))return t;if(t.startsWith("data:image/"))return t;if(t.includes("/api/image/serve/")){const i=t.match(/\/api\/image\/serve\/([^\/]+)/);if(i&&i[1]){const n=i[1];try{return`${(e.hassUrl?e.hassUrl():"").replace(/\/$/,"")}/api/image/serve/${n}/original`}catch(e){return t}}return t}if(t.startsWith("local/")||t.includes("/local/")||t.startsWith("media-source://")){const i=t.replace(/^local\//,"").replace(/^media-source:\/\/media_source\/local\//,"");return`${(e.hassUrl?e.hassUrl():"").replace(/\/$/,"")}/local/${i}`}return t}(this.hass,this.config.action_image);else if("url"===e)t=this.config.action_image||"";else if("entity"===e&&this.config.action_image_entity){const e=this.config.action_image_entity;s=e;const n=this.hass.states[e];(null===(i=null==n?void 0:n.attributes)||void 0===i?void 0:i.entity_picture)?this._entityImageUrls.has(e)?t=this._entityImageUrls.get(e)||"":(t=n.attributes.entity_picture,t.startsWith("/")&&(t=`${this.hass.hassUrl?this.hass.hassUrl():""}${t.startsWith("/")?t.substring(1):t}`)):t=(null==n?void 0:n.state)||""}else"default"===e&&(t=be);t&&(a=t,o=this._computeImageStyle(this.config.action_image_width,this.config.action_image_crop),r=!0)}if(!r){const e=this.config.vehicle_image_type,t=this.config.vehicle_image||"";if(this.config.location_entity?s=this.config.location_entity:this.config.mileage_entity?s=this.config.mileage_entity:this.config.car_state_entity&&(s=this.config.car_state_entity),t&&(t.startsWith("http")||t.startsWith("/")||t.startsWith("data:")))a=t.includes("/api/image/serve/")&&!t.endsWith("/original")?`${t}/original`:t;else if("entity"===e&&this.config.vehicle_image_entity){const e=this.config.vehicle_image_entity;s=e;const t=this.hass.states[e];(null===(n=null==t?void 0:t.attributes)||void 0===n?void 0:n.entity_picture)?this._entityImageUrls.has(e)?a=this._entityImageUrls.get(e)||"":(a=t.attributes.entity_picture,a.startsWith("/")&&(a=`${this.hass.hassUrl?this.hass.hassUrl():""}${a.startsWith("/")?a.substring(1):a}`)):a=(null==t?void 0:t.state)||""}else"default"===e&&(a=be);a||"none"===e||(a=be),o=this._computeImageStyle(this.config.vehicle_image_width,this.config.vehicle_image_crop)}if(a&&a!==be&&(this._lastImageUrl=a),!a)return"";const l=s?()=>this._showMoreInfo(s):void 0,d=!!s;return W`
      <div class="vehicle-image-container" style="${e}">
        <img
          class="vehicle-image ${r?"action-image-active":""} ${d?"clickable":""}"
          src="${a}"
          style="${o}"
          @error=${this._handleImageError}
          @click=${l}
          ?title=${d?`Click to view details for ${this._getFriendlyName(s)}`:void 0}
        />
      </div>
    `}_getFriendlyName(e){const t=this.hass.states[e];return t&&(t.attributes.friendly_name||e.split(".").pop())||e}_formatValue(e,t){var i,n,a,o,r,s;if(!this.config.formatted_entities||!t||!this.hass.states[t])return e;if(t===this.config.mileage_entity){const a=parseFloat(e);if(!isNaN(a)){const e=Math.round(a),o=(null===(n=null===(i=this.hass.states[t])||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.unit_of_measurement)||"";return`${e.toLocaleString()}${o?" "+o:""}`}}if(t===this.config.location_entity){const e=Object.keys(this.hass.states).filter((e=>e.startsWith("zone.")));for(const i of e){const e=this.hass.states[i],n=this.hass.states[t];if(e&&n&&e.attributes.latitude&&e.attributes.longitude&&n.attributes&&n.attributes.latitude&&n.attributes.longitude&&Math.abs(e.attributes.latitude-n.attributes.latitude)<1e-4&&Math.abs(e.attributes.longitude-n.attributes.longitude)<1e-4)return e.attributes.friendly_name||e.attributes.name||i.split(".")[1]}if(null===(o=null===(a=this.hass.states[t])||void 0===a?void 0:a.attributes)||void 0===o?void 0:o.formatted_address)return this.hass.states[t].attributes.formatted_address}const l=parseFloat(e);if(!isNaN(l)){const e=Math.round(l),i=(null===(s=null===(r=this.hass.states[t])||void 0===r?void 0:r.attributes)||void 0===s?void 0:s.unit_of_measurement)||"";return`${e.toLocaleString()}${i?" "+i:""}`}return e.replace(/_/g," ").replace(/\b\w/g,(e=>e.toUpperCase())).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}_handleImageError(e){const t=e.target;t.classList.add("image-error"),this._lastImageUrl&&t.src!==this._lastImageUrl?t.src=this._lastImageUrl:t.src=""}_renderBar(e){if(!e.entity)return W``;const t=this.hass.states[e.entity];if(!t)return W``;const i=parseFloat(t.state),n=isNaN(i)||"unavailable"===t.state||"unknown"===t.state?0:Math.max(0,Math.min(100,i));let a=null,o="";if(e.limit_entity){const t=this.hass.states[e.limit_entity];t&&!isNaN(parseFloat(t.state))&&(a=parseFloat(t.state),o=(r=e.limit_indicator_color||"#ff0000")?(r.startsWith("var(--"),r):"")}var r;const s=`bar-size-${e.bar_size||"regular"}`,l=(e.width,this._getBarAnimationClass(e)),d=e.gradient_stops||[],c=!0===e.use_gradient&&d.length>=2,p=c&&e.gradient_display_mode?e.gradient_display_mode:"value_based";let g,h="",u="";switch(e.bar_radius){case"square":h="border-radius: 0;",u="border-radius: 0;";break;case"rounded-square":h="border-radius: 4px;",u="border-radius: 2px;"}let _="";if(l.includes("animate-glow")){const t=e.bar_color||"#3498db",i=this._hexToRgb(t);i&&(_=`--glow-color-r: ${i.r}; --glow-color-g: ${i.g}; --glow-color-b: ${i.b};`)}if(c){if("value_based"===p){const e=function(e,t){if(!e||!Array.isArray(e)||e.length<2)return"#ffffff";t=Math.max(0,Math.min(100,t));const i=[...e].sort(((e,t)=>e.position-t.position));let n=null,a=null;for(let e=0;e<i.length-1;e++)if(t>=i[e].position&&t<=i[e+1].position){n=i[e],a=i[e+1];break}if(!n||!a)return 0===i.length?"#ffffff":t<=i[0].position?i[0].color||"#ffffff":i[i.length-1].color||"#ffffff";const o=a.position-n.position,r=0===o?0:(t-n.position)/o,s=ke(n.color),l=ke(a.color);return s&&l?`rgb(${Math.round(s.r+r*(l.r-s.r))}, ${Math.round(s.g+r*(l.g-s.g))}, ${Math.round(s.b+r*(l.b-s.b))})`:n.color||"#ffffff"}(d,n);g=W`
          <div
            class="progress-bar-fill ${l}"
            data-use-gradient="true"
            has-gradient="true"
            data-mode="value_based"
            data-percentage="${n}"
            style="
              width: ${n}%;
              background-color: ${e};
              ${u}
              ${_} /* Add glow variables */
            "
          >
            ${"animate-bubbles"===l?W`<span></span>`:""}
          </div>
        `}else if("full"===p){const e=function(e,t="to right"){const i=ye(e);return i?`linear-gradient(${t}, ${i})`:""}(d);g=W`
          <div
            class="progress-bar-fill ${l}"
            data-use-gradient="true"
            has-gradient="true"
            data-mode="full"
            data-percentage="${n}"
            style="
              width: ${n}%;
              background-image: ${e};
              background-color: transparent;
              background-size: 100% 100%;
              background-position: 0% 0%;
              background-repeat: no-repeat;
              ${u}
              ${_} /* Add glow variables */
            "
          >
            ${"animate-bubbles"===l?W`<span></span>`:""}
          </div>
        `}}else g=W`
        <div
          class="progress-bar-fill ${l}"
          data-gradient="disabled"
          has-gradient="false"
          data-percentage="${n}"
          style="background-color: ${e.bar_color||"#3498db"}; width: ${n}%; ${u} ${_} /* Add glow variables */"
        >
          ${"animate-bubbles"===l?W`<span></span>`:""}
        </div>
      `;let m="100%";if(e.width&&"100"!==e.width){const t=parseInt(e.width);let i=0;50===t?i=4:25===t?i=6:75===t&&(i=2),m=`calc(${e.width}% - ${i}px)`}else m="100%";return W`
      <div
        class="progress-bar-wrapper"
        style="width: ${m};" /* Apply calculated width to wrapper */
      >
        <div
          class="progress-bar ${s}" /* Removed width class */
          style="background: ${e.background_color||"#121212"}; border-color: ${e.border_color||"#686868"}; width: 100%; ${h}" /* Bar takes full width of wrapper */
          @click=${()=>this._showMoreInfo(e.entity)}
        >
          ${g}
          ${null!==a?W`<div
                  class="limit-indicator"
                  style="left: ${a}%;
                       background-color: ${o};
                       box-shadow: 0 0 2px ${o};"
                ></div>`:""}
        </div>
        ${this._renderBarLabels(e)}
      </div>
    `}_getBarAnimationClass(e){let t="";const i=this._getEntityState(e.animation_entity),n=this._getEntityState(e.action_animation_entity);return e.animation_type&&(!e.animation_entity&&!e.animation_state||e.animation_entity&&e.animation_state&&i===e.animation_state)&&(t=`animate-${e.animation_type}`),e.action_animation&&e.action_animation_entity&&e.action_animation_state&&n===e.action_animation_state&&(t=`animate-${e.action_animation}`),t}_getEntityState(e){var t;if(e&&this.hass.states[e])return null===(t=this.hass.states[e])||void 0===t?void 0:t.state}_renderIconRows(e=""){const{icon_rows:t=[]}=this.config;return t&&0!==t.length?W`
      <div class="icon-rows-container" style="${e}">
        ${t.map((e=>this._renderIconRow(e)))}
      </div>
    `:W``}_renderIconRow(e){if(!e.icons||!e.icons.length)return W``;const t=e.width||"100",i=e.alignment||"space-between",n=e.spacing||"medium";return W`
      <div class="icon-row ${`align-${i}`}" style="width: ${t}%; gap: ${{none:"0",small:"8px",medium:"16px",large:"24px"}[n]||"16px"};">
        ${e.icons.map((e=>this._renderCardIcon(e)))}
      </div>
    `}_renderCardIcon(e){if(!e.entity)return W``;const t=this.hass.states[e.entity];if(!t)return W``;let i=!1,n=!1,a="",o="";if(e.active_template_mode&&e.active_template){i=this._evaluateTemplate(e.active_template),n=!0;const t=e.active_template.match(/{{[\s]*is_state\(['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)[\s]*}}/i);t&&i&&(a=t[1],o=t[2]);const r=e.active_template.match(/{{[\s]*states\(['"]([^'"]+)['"]\)[\s]*==[\s]*['"]([^'"]+)['"]\s*}}/i);r&&i&&(a=r[1],o=r[2])}else if(e.inactive_template_mode&&e.inactive_template){i=!this._evaluateTemplate(e.inactive_template),n=!0;const t=e.inactive_template.match(/{{[\s]*is_state\(['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)[\s]*}}/i);t&&!i&&(a=t[1],o=t[2]);const r=e.inactive_template.match(/{{[\s]*states\(['"]([^'"]+)['"]\)[\s]*==[\s]*['"]([^'"]+)['"]\s*}}/i);r&&!i&&(a=r[1],o=r[2])}else i=!(!e.active_state||t.state!==e.active_state)||(!e.inactive_state||t.state!==e.inactive_state)&&(e.inactive_state?t.state!==e.inactive_state:"on"===t.state||"true"===t.state||Number(t.state)>0);const r=t.attributes.icon||null,s=i&&e.icon_active?e.icon_active:!i&&e.icon_inactive?e.icon_inactive:r||"mdi:help-circle-outline",l=i&&e.color_active?e.color_active:e.color_inactive,d=e.name||t.attributes.friendly_name||"";let c=t.state;const p=t.attributes.unit_of_measurement;if(n&&o&&(c=o,a&&a!==e.entity&&this.hass.states[a])&&this.hass.states[a].state===o&&(c=o),this.config.formatted_entities&&c)if(isNaN(Number(c)))c=c.replace(/_/g," ").replace(/\b\w/g,(e=>e.toUpperCase()));else{const e=Number(c);(Math.abs(e)>=1e3||e%1!=0)&&(c=e.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:0}))}if(c&&e.show_state){const i=t.attributes.prefix||"",n=t.attributes.suffix||"";p&&e.show_units&&(c=`${c} ${p}`),c=`${i}${c}${n}`}const g=e.icon_size?isNaN(Number(e.icon_size))&&"string"==typeof e.icon_size&&(e.icon_size.endsWith("px")||e.icon_size.endsWith("em")||e.icon_size.endsWith("%"))?e.icon_size:`${e.icon_size}px`:"24px",h=e.text_size?isNaN(Number(e.text_size))&&"string"==typeof e.text_size&&(e.text_size.endsWith("px")||e.text_size.endsWith("em")||e.text_size.endsWith("%"))?e.text_size:`${e.text_size}px`:"14px",u=(()=>{if(!e.icon_background||"none"===e.icon_background)return"";let t=24;if("string"==typeof g){const e=g.match(/^(\d+)/);e&&(t=parseInt(e[1],10))}else"number"==typeof g&&(t=g);const i=t+16;let n=`\n        background-color: ${e.icon_background_color||"var(--secondary-background-color)"};\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: ${i}px;\n        height: ${i}px;\n      `;switch(e.icon_background){case"circle":n+="border-radius: 50%;";break;case"square":n+="border-radius: 0;";break;case"rounded-square":n+=`border-radius: ${Math.max(4,.15*i)}px;`}return n})(),_=i&&!1!==e.show_icon_active||!i&&!1!==e.show_icon_inactive,m=e.text_position||"bottom",v={bottom:"column",top:"column-reverse",left:"row-reverse",right:"row"}[m]||"column",b={"flex-start":"flex-start",center:"center","flex-end":"flex-end"}[e.vertical_alignment||"center"]||"center",f=e.text_alignment||"center",y="left"===f?"flex-start":"right"===f?"flex-end":"center",k=(()=>{if(!e.container_background||"none"===e.container_background)return"";let t=`\n        background-color: ${e.container_background_color||"var(--secondary-background-color)"};\n        padding: ${"left"===m||"right"===m?"4px 12px":"8px"}; /* Adjusted padding based on layout direction */\n        display: inline-flex; /* Ensure container wraps content */\n        align-items: ${b};\n        justify-content: center;\n      `;switch(e.container_background){case"circle":t+="border-radius: 50%;";break;case"square":t+="border-radius: 0;";break;case"rounded-square":t+="border-radius: 8px;"}return t})();return W`
      <div
        class="icon-outer-container" /* New outer container for background */
        style="${k}${e.container_width?`width: ${e.container_width}%;`:""}"
        @click=${()=>{this._handleIconClick(e)}}
      >
        <div
          class="icon-container ${"draggable"}"
          style="flex-direction: ${v}; align-items: ${b};"
          draggable="${!0}"
          @dragstart=${this._handleDragStart}
          @dragend=${this._handleDragEnd}
        >
          ${e.icon_background&&"none"!==e.icon_background?W`
                  ${_?W`<div class="icon-background" style="${u}">
                        <ha-icon
                          .icon="${s}"
                          style="color: ${l||"var(--primary-text-color)"}; font-size: ${g}; --mdc-icon-size: ${g};"
                        ></ha-icon>
                      </div>`:""}
                `:W`
                  ${_?W`<ha-icon
                        .icon="${s}"
                        style="color: ${l||"var(--primary-text-color)"}; font-size: ${g}; --mdc-icon-size: ${g};"
                      ></ha-icon>`:""}
                `}
          <div style="display: flex; flex-direction: column; align-items: ${y}; width: 100%;">
            ${!1!==e.show_name?W`<div
                    class="icon-label"
                    style="font-size: ${h}; text-align: ${f}; /* REMOVE MARGIN */ color: ${i?e.name_color_active||"var(--primary-text-color)":e.name_color_inactive||"var(--primary-text-color)"};"
                  >
                    ${d}
                  </div>`:""}
            ${e.show_state?W`<div
                    class="icon-state"
                    style="font-size: ${h}; text-align: ${f}; /* REMOVE MARGIN */ color: ${i?e.state_color_active||"var(--primary-text-color)":e.state_color_inactive||"var(--secondary-text-color)"};"
                  >
                    ${c}
                  </div>`:""}
          </div>
        </div>
      </div>
    `}_handleIconClick(e){if(e.entity&&e.on_click_action)switch(e.on_click_action){case"toggle":const t=e.entity.split(".")[0];this.hass.callService(t,"toggle",{entity_id:e.entity});break;case"more-info":const i=new CustomEvent("hass-more-info",{detail:{entityId:e.entity},bubbles:!0,composed:!0});this.dispatchEvent(i);break;case"navigate":if(e.navigation_path){const t=new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0});window.history.pushState(null,"",e.navigation_path),this.dispatchEvent(t)}break;case"show-map":case"location-map":this._openLocationMap(e.entity)}}_openLocationMap(e){const t=this.hass.states[e];if(!t)return void this._showMoreInfo(e);const i=t.attributes;let n,a;if(void 0!==i.latitude&&void 0!==i.longitude)n=i.latitude,a=i.longitude;else if(void 0!==i.Location)if(Array.isArray(i.Location)){if(i.Location.length>=2){const e=parseFloat(i.Location[0]),t=parseFloat(i.Location[1]);isNaN(e)||isNaN(t)||(n=e,a=t)}}else if("string"==typeof i.Location){const e=i.Location.split(",").map((e=>parseFloat(e.trim())));2!==e.length||isNaN(e[0])||isNaN(e[1])||(n=e[0],a=e[1])}void 0!==n&&void 0!==a?this._mapPopupData={latitude:n,longitude:a,title:i.friendly_name||e}:this._showMoreInfo(e)}_handleDragStart(e){e.dataTransfer&&(e.dataTransfer.setData("text/plain","dragging-icon"),e.target instanceof HTMLElement&&(e.target.style.opacity="0.5"))}_handleDragEnd(e){e.target instanceof HTMLElement&&(e.target.style.opacity="1")}_hexToRgb(e){const t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;if(t.test(e)){const i=t.exec(e);if(i)return{r:parseInt(i[1]+i[1],16),g:parseInt(i[2]+i[2],16),b:parseInt(i[3]+i[3],16)}}const i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(i)return{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)};const n=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d\.]+)?\)$/i.exec(e);return n?{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)}:null}_renderVehicleInfo(e=""){const t=!1!==this.config.show_location&&this.config.location_entity&&void 0!==this.hass.states[this.config.location_entity],i=!1!==this.config.show_mileage&&this.config.mileage_entity&&void 0!==this.hass.states[this.config.mileage_entity],n=!1!==this.config.show_car_state&&this.config.car_state_entity&&void 0!==this.hass.states[this.config.car_state_entity];if(!t&&!i&&!n)return W``;const a=t?this._formatValue(this.hass.states[this.config.location_entity].state,this.config.location_entity):"",o=i?this._formatValue(this.hass.states[this.config.mileage_entity].state,this.config.mileage_entity):"",r=n?this._formatValue(this.hass.states[this.config.car_state_entity].state,this.config.car_state_entity):"";return W`
      <div class="vehicle-info-container" style="${e}">
        <div class="vehicle-info-top">
          ${t?W`
                <div
                  class="info-item-with-icon"
                  @click=${()=>this._showMoreInfo(this.config.location_entity)}
                >
                  <ha-icon icon="mdi:map-marker"></ha-icon>
                  <span>${a}</span>
                </div>
              `:""}
          ${i?W`
                <div
                  class="info-item-with-icon"
                  @click=${()=>this._showMoreInfo(this.config.mileage_entity)}
                >
                  <ha-icon icon="mdi:speedometer"></ha-icon>
                  <span>${o}</span>
                </div>
              `:""}
        </div>

        ${n?W`
              <div
                class="info-item-status"
                @click=${()=>this._showMoreInfo(this.config.car_state_entity)}
                style="cursor: pointer;"
              >
                <span>${r}</span>
              </div>
            `:""}
      </div>
    `}_computeImageStyle(e,t){let i="";return void 0!==e&&(i+=`width: ${e}%; height: auto;`),t&&(i+=`\n        margin-top: ${t.top}px;\n        margin-right: ${t.right}px;\n        margin-bottom: ${t.bottom}px;\n        margin-left: ${t.left}px;\n        overflow: hidden;\n      `),i}_normalizeState(e){return e?e.toLowerCase().replace(/\s+/g,"_"):""}_renderBarLabels(e){var t,i;const n=!1!==e.show_left&&e.left_entity?this._formatValue(null===(t=this.hass.states[e.left_entity])||void 0===t?void 0:t.state,e.left_entity):"",a=!1!==e.show_right&&e.right_entity?this._formatValue(null===(i=this.hass.states[e.right_entity])||void 0===i?void 0:i.state,e.right_entity):"",o=e=>{var t,i;return e&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""},r=(e,t=15)=>e?e.length<=t?e:e.substring(0,t)+"...":"",s=e.left_title||(!1!==e.show_left&&e.left_entity?o(e.left_entity):""),l=e.right_title||(!1!==e.show_right&&e.right_entity?o(e.right_entity):""),d=e.alignment||"space-between",c=e.left_text_color||"var(--secondary-text-color)",p=e.right_text_color||"var(--secondary-text-color)",g=e.left_title_color||"var(--secondary-text-color)",h=e.right_title_color||"var(--secondary-text-color)",u=e.left_title_size?`${e.left_title_size}px`:"inherit",_=e.left_text_size?`${e.left_text_size}px`:"inherit",m=e.right_title_size?`${e.right_title_size}px`:"inherit",v=e.right_text_size?`${e.right_text_size}px`:"inherit";return W`
      <div class="bar-labels" style="justify-content: ${d};">
        ${!1!==e.show_left?W`
              <div
                class="bar-label left"
                @click=${()=>e.left_entity&&this._showMoreInfo(e.left_entity)}
              >
                ${s?W`<span
                      class="label-title"
                      style="color: ${g}; font-size: ${u};"
                      >${r(s)}</span
                    >`:""}
                ${s&&n?W`<span class="label-separator">:</span>`:""}
                ${n?W`<span
                      class="label-value"
                      style="color: ${c}; font-size: ${_};"
                      >${n}</span
                    >`:""}
              </div>
            `:""}
        ${!1!==e.show_right?W`
              <div
                class="bar-label right"
                @click=${()=>e.right_entity&&this._showMoreInfo(e.right_entity)}
              >
                ${l?W`<span
                      class="label-title"
                      style="color: ${h}; font-size: ${m};"
                      >${r(l)}</span
                    >`:""}
                ${l&&a?W`<span class="label-separator">:</span>`:""}
                ${a?W`<span
                      class="label-value"
                      style="color: ${p}; font-size: ${v};"
                      >${a}</span
                    >`:""}
              </div>
            `:""}
      </div>
    `}_showMoreInfo(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}connectedCallback(){super.connectedCallback(),this._setupRefreshInterval(),this.addEventListener("force-gradient-refresh",this._handleForceGradientRefresh),setTimeout((()=>{var e,t;(null===(t=null===(e=this.config)||void 0===e?void 0:e.bars)||void 0===t?void 0:t.some((e=>e.use_gradient)))&&this._forceFullRender()}),100),setTimeout((()=>{var e,t;(null===(t=null===(e=this.config)||void 0===e?void 0:e.bars)||void 0===t?void 0:t.some((e=>e.use_gradient)))&&this._forceFullRender()}),1e3)}disconnectedCallback(){super.disconnectedCallback(),this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=void 0),this.removeEventListener("force-gradient-refresh",this._handleForceGradientRefresh)}_handleForceGradientRefresh(e){var t;const i=e;this._lastRenderTime=(null===(t=i.detail)||void 0===t?void 0:t.timestamp)||Date.now(),this._forceFullRender(),[10,25,50,100,500].forEach((e=>{setTimeout((()=>{this._lastRenderTime=Date.now(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("gradient-update-complete",{bubbles:!0,composed:!0,detail:{timestamp:this._lastRenderTime,config:this.config}}))}),e)}))}_setupRefreshInterval(){this._refreshInterval&&clearInterval(this._refreshInterval),this._refreshInterval=window.setInterval((()=>{var e;(null===(e=this.config.bars)||void 0===e?void 0:e.some((e=>{const t=e.animation_entity||e.action_animation_entity,i=e.animation_state||e.action_animation_state,n=e.animation_type||e.action_animation;if(t&&i&&n&&"none"!==n){const e=this.hass.states[t];return e&&e.state===i}return!1})))&&(this._lastRenderTime=Date.now(),this.requestUpdate())}),1e3)}updated(e){var t,i,n,a,o,r,s,l,d;if(super.updated(e),e.has("config")||e.has("hass")){if(this._lastRenderTime=Date.now(),e.has("hass")){const c=e.get("hass");let p=!1;if("entity"===this.config.vehicle_image_type&&this.config.vehicle_image_entity){const e=this.config.vehicle_image_entity,o=null===(t=null==c?void 0:c.states[e])||void 0===t?void 0:t.state,r=null===(i=this.hass.states[e])||void 0===i?void 0:i.state;if(o!==r){if(this._entityStates.set(e,r||""),null===(a=null===(n=this.hass.states[e])||void 0===n?void 0:n.attributes)||void 0===a?void 0:a.entity_picture){let t=this.hass.states[e].attributes.entity_picture;t.startsWith("/")&&(t=`${this.hass.hassUrl?this.hass.hassUrl():""}${t.startsWith("/")?t.substring(1):t}`),this._entityImageUrls.set(e,`${t}${t.includes("?")?"&":"?"}state=${Date.now()}`)}p=!0}}if(this.config.action_entity&&this.config.action_state){const e=this.config.action_entity;if((null===(o=null==c?void 0:c.states[e])||void 0===o?void 0:o.state)!==(null===(r=this.hass.states[e])||void 0===r?void 0:r.state)&&"entity"===this.config.action_image_type&&this.config.action_image_entity){const e=this.config.action_image_entity;if(this._entityStates.set(e,(null===(s=this.hass.states[e])||void 0===s?void 0:s.state)||""),null===(d=null===(l=this.hass.states[e])||void 0===l?void 0:l.attributes)||void 0===d?void 0:d.entity_picture){let t=this.hass.states[e].attributes.entity_picture;t.startsWith("/")&&(t=`${this.hass.hassUrl?this.hass.hassUrl():""}${t.startsWith("/")?t.substring(1):t}`),this._entityImageUrls.set(e,`${t}${t.includes("?")?"&":"?"}state=${Date.now()}`)}p=!0}}p&&this.requestUpdate()}this.shadowRoot&&setTimeout((()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll(".progress-bar-fill");t&&t.length>0&&t.forEach((e=>{if(e instanceof HTMLElement){e.offsetHeight;const t=e.getAttribute("has-gradient"),i=e.getAttribute("data-mode");"true"===t&&("full"===i?(e.style.backgroundSize="100% 100%",e.style.backgroundPosition="0% 0%",e.style.backgroundRepeat="no-repeat"):"value_based"===i&&(e.style.backgroundImage="none"))}}))}),0)}}_evaluateTemplate(e){var t;if(!e)return!1;if(!this.hass)return!1;const i=e.trim(),n=i.match(/^{{\s*(true|false)\s*}}$/i);if(n)return"true"===n[1].toLowerCase();try{const n=i.match(/{{[\s]*is_state\(['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)[\s]*}}/i);if(n){const[e,t,i]=n,a=this.hass.states[t];return(null==a?void 0:a.state.toLowerCase())===i.toLowerCase()}const a=i.match(/{{[\s]*states\(['"]([^'"]+)['"]\)[\s]*([!=]=)[\s]*['"]([^'"]+)['"]\s*}}/i);if(a){const[e,t,i,n]=a,o=this.hass.states[t];if(!o)return!1;const r=o.state.toLowerCase(),s=n.toLowerCase();return"=="===i?r===s:r!==s}const o=i.match(/{{[\s]*states\(['"]([^'"]+)['"]\)\s*(?:\|\s*(?:float|int))?\s*([<>!=]=?)\s*([\d.-]+)\s*}}/i);if(o){const[e,t,i,n]=o,a=this.hass.states[t];if(!a||"unavailable"===a.state||"unknown"===a.state)return!1;const r=parseFloat(a.state),s=parseFloat(n);if(isNaN(r)||isNaN(s))return!1;switch(i){case"<":return r<s;case"<=":return r<=s;case">":return r>s;case">=":return r>=s;case"==":return r===s;case"!=":return r!==s;default:return!1}}const r=i.match(/^{{[\s]*states\(['"]([\w_.]+)['"]\)[\s]*}}$/i);if(r){const[e,i]=r,n=null===(t=this.hass.states[i])||void 0===t?void 0:t.state.toLowerCase();if(["true","on","yes","1"].includes(n||""))return!0;if(["false","off","no","0","unavailable","unknown","none",""].includes(n||""))return!1;const a=parseFloat(n||"");return!isNaN(a)&&0!==a}const s=i.match(/^{{\s*['"]([^'"]+)['"]\s*}}$/);if(s){const e=s[1].toLowerCase();return!!["true","on","yes","1"].includes(e)||(["false","off","no","0","unavailable","unknown","none",""].includes(e)||console.warn(`[UltraVehicleCard] Simple template output '${e}' evaluated as false.`),!1)}return console.warn(`[UltraVehicleCard] Could not evaluate template with known patterns: ${e}`),!1}catch(t){return console.error(`[UltraVehicleCard] Error evaluating template: ${e}`,t),!1}}_renderMapPopup(){if(!this._mapPopupData)return W``;const{latitude:e,longitude:t,title:i}=this._mapPopupData,n=this._getEntityForCoordinates(e,t);let a="",o="";if(o=this._formatCoordinates(e,t),n&&this.hass.states[n]){const e=this.hass.states[n],t=e.attributes;if(e.state&&!e.state.match(/^\d+\.\d+,\s*-?\d+\.\d+$/)&&e.state.length>5&&!e.state.match(/^(unavailable|unknown|none)$/i))a=e.state;else if(t.formatted_address)a=t.formatted_address;else{const e=[];t.Name&&e.push(String(t.Name)),t.Thoroughfare&&e.push(String(t.Thoroughfare)),t.Locality&&e.push(String(t.Locality)),t.Administrative_Area&&e.push(String(t.Administrative_Area)),t.Postal_Code&&e.push(String(t.Postal_Code)),t.Country&&e.push(String(t.Country)),e.length>0&&(a=e.join(", "))}}a||(a=o);const r=`https://www.google.com/maps?q=${e},${t}&z=15&output=embed`;return W`
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
    `}_formatCoordinates(e,t){return`${Math.abs(e).toFixed(6)}° ${e>=0?"N":"S"}, ${Math.abs(t).toFixed(6)}° ${t>=0?"E":"W"}`}_getEntityForCoordinates(e,t){for(const i in this.hass.states){const n=this.hass.states[i].attributes;if(n.latitude===e&&n.longitude===t)return i;if(Array.isArray(n.Location)&&n.Location.length>=2&&Math.abs(parseFloat(n.Location[0])-e)<1e-4&&Math.abs(parseFloat(n.Location[1])-t)<1e-4)return i}return null}_isDarkMode(){if(this.shadowRoot){const e=getComputedStyle(document.documentElement).getPropertyValue("--card-background-color").trim();if(e){const t=this._hexToRgb(e);if(t)return.299*t.r+.587*t.g+.114*t.b<128}}return!1}_closeMapPopup(){this._mapPopupData=null}};var ze,Ae,Ie;Se([me({attribute:!1})],$e.prototype,"hass",void 0),Se([me()],$e.prototype,"config",void 0),Se([ve()],$e.prototype,"_mapPopupData",void 0),$e=Se([he("ultra-vehicle-card")],$e),console.info("%c Ultra Vehicle Card%c  2.0 ","background-color: #4299D9;color: #fff;padding: 3px 2px 3px 3px;border-radius: 14px 0 0 14px;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)","background-color: #4299D9;color: #fff;padding: 3px 3px 3px 2px;border-radius: 0 14px 14px 0;font-family: DejaVu Sans,Verdana,Geneva,sans-serif;text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)"),(Ie=ze||(ze={})).language="language",Ie.system="system",Ie.comma_decimal="comma_decimal",Ie.decimal_comma="decimal_comma",Ie.space_comma="space_comma",Ie.none="none",function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ae||(Ae={})),new Set(["fan","input_boolean","light","switch","group","automation"]);var Ce=function(e,t,i,n){n=n||{},i=null==i?{}:i;var a=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return a.detail=i,e.dispatchEvent(a),a};new Set(["call-service","divider","section","weblink","cast","select"]);var Ee=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let Te=class extends pe{static get styles(){return c`
      ha-entity-picker {
        width: 100%;
        display: block;
      }
    `}render(){return W`
      <ha-entity-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value||""}
        .entityFilter=${this.entityFilter}
        @value-changed=${this._valueChanged}
        allow-custom-entity
      ></ha-entity-picker>
    `}_valueChanged(e){const t=e.detail.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}};Ee([me({attribute:!1})],Te.prototype,"hass",void 0),Ee([me()],Te.prototype,"label",void 0),Ee([me()],Te.prototype,"value",void 0),Ee([me()],Te.prototype,"entityFilter",void 0),Te=Ee([he("ultra-entity-picker")],Te);var je=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let Le=class extends pe{_getDisplayColor(e){var t;if(!e)return"#000000";if(e.startsWith("var(--")){const i=null===(t=e.match(/var\(([^,)]+)/))||void 0===t?void 0:t[1],n=e.match(/var\(--[\w-]+,\s*([^)]+)\)/);if(n&&n[1])return n[1].trim();if(i){if(i.includes("--text-primary-color"))return"#FFFFFF";if(i.includes("--primary-color"))return"#03A9F4";if(i.includes("--accent-color"))return"#FF9800";if(i.includes("--dark"))return"#121212";if(i.includes("--secondary-background-color"))return"#303030"}return"#FFFFFF"}return e}_onColorChanged(e){let t=e.target.value;t||(t="#000000"),t!==this.value&&(this.value=t,this._fireChangeEvent())}_fireChangeEvent(){this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){const e=this._getDisplayColor(this.value);return W`
      ${this.label?W`<div class="color-picker-label">${this.label}</div>`:""}
      <div class="color-picker-row">
        <input
          type="color"
          .value=${e}
          @change=${this._onColorChanged}
          class="color-input"
          aria-label=${this.label||"Color picker"}
        />
      </div>
    `}static get styles(){return c`
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
      }

      .color-input {
        width: 100%;
        height: 40px;
        border: none;
        border-radius: 4px;
        background: none;
        cursor: pointer;
        padding: 0;
      }

      /* Special handling for Webkit browsers */
      .color-input::-webkit-color-swatch-wrapper {
        padding: 0;
      }

      .color-input::-webkit-color-swatch {
        border: none;
        border-radius: 4px;
      }
    `}};je([me()],Le.prototype,"value",void 0),je([me()],Le.prototype,"label",void 0),Le=je([he("ultra-vehicle-color-picker")],Le);const Re=JSON.parse('{"editor":{"tabs":{"settings":"Settings","bars":"Bars","icons":"Icons","customize":"Customize","about":"About"},"card_settings":{"title":"Card Title","title_alignment":"Title Alignment","title_size":"Title Size","title_description":"Title displayed at the top of the card (optional)","title_alignment_description":"How to align the card title","title_size_description":"Size of the card title in pixels","format_entities":"Format Entity Values","format_entities_description":"Enable additional formatting of entity values (add commas, convert units, etc.)","show_units":"Show Units","show_units_description":"Display units of measurement alongside values"},"vehicle_info":{"title":"Vehicle Information","location":{"title":"Location Entity","description":"Select the entity that provides the current location of your vehicle.","show":"Show Location","show_description":"Display the vehicle location"},"mileage":{"title":"Mileage Entity","description":"Select the entity that represents the total mileage or odometer reading of your vehicle.","show":"Show Mileage","show_description":"Display the vehicle mileage"},"car_state":{"title":"Car State Entity","description":"Select the entity that represents the current state of your vehicle (e.g., parked, driving, charging).","show":"Show Car State","show_description":"Display the vehicle state"}},"images":{"vehicle":{"title":"Vehicle Image","description":"Configure the primary image displayed for the vehicle.","type":"Vehicle Image Type","width":"Image Width","crop":"Image Crop","entity":"Image Entity","entity_description":"Entity that provides the image URL"},"action":{"title":"Action Image","description":"Optionally, display a different image when a specific entity reaches a certain state (e.g., show a charging image when the car is plugged in).","type":"Action Image Type","width":"Image Width","crop":"Image Crop","entity":"Action Entity","entity_description":"Entity that triggers the action image","state":"Action State","state_description":"State value that triggers the action image"}},"crop":{"title":"Image Crop","top":"Top","right":"Right","bottom":"Bottom","left":"Left","pixels":"px","help":"Enter pixel values (positive or negative) to adjust cropping and padding"},"alignment":{"left":"Left","center":"Center","right":"Right"},"common":{"choose_file":"Choose File","no_file_chosen":"No file chosen","entity":"Entity","width":"Width","width_description":"Width as percentage of the card","none":"None","default":"Default","upload":"Upload","url":"URL","url_description":"URL pointing to the image","reset":"Reset"},"bars":{"title":"Percentage Bars","description":"Add percentage bars to display values like fuel level, battery charge, or range. Each bar can display a main percentage value with optional left and right labels.","add":"Add New Bar","duplicate":"Duplicate Bar","delete":"Delete Bar","expand":"Expand Bar","collapse":"Collapse Bar","bar_prefix":"Bar","no_entity":"No entity selected","tabs":{"config":"Configuration","colors":"Colors","animation":"Animation"},"settings":{"header":"Bar Configuration","entity":"Main Entity","entity_description":"Entity that provides the primary value (0-100) for the progress bar","limit_entity":"Limit Entity","limit_entity_description":"Entity that shows a limit marker on the bar (e.g., charge limit)","limit_color":"Limit Indicator Color","limit_color_description":"Color of the limit indicator line","alignment":"Label Alignment","alignment_description":"How to align the labels on the progress bar","bar_size":"Bar Thickness","bar_size_description":"Size/thickness of the progress bar","bar_radius":"Bar Radius","bar_radius_description":"Shape of the progress bar corners","width":"Bar Width","width_description":"Width of the progress bar as a percentage of the available space. Use this to place multiple bars side by side."},"left_side":{"header":"Left Side","toggle_description":"Show or hide the left side label of the bar","title":"Left Title","title_description":"Optional label to display on the left side below the bar.","entity":"Left Entity","entity_description":"Entity whose value will be displayed on the left side of the bar.","alignment_description":"Controls how this label is aligned under the bar.","title_size":"Title Size","value_size":"Value Size","hidden_message":"Left side is hidden"},"right_side":{"header":"Right Side","toggle_description":"Show or hide the right side label of the bar","title":"Right Title","title_description":"Optional label to display on the right side below the bar.","entity":"Right Entity","entity_description":"Entity whose value will be displayed on the right side of the bar.","alignment_description":"Controls how this label is aligned under the bar.","title_size":"Title Size","value_size":"Value Size","hidden_message":"Right side is hidden"},"colors":{"header":"Colors","bar_color":"Bar Color","background_color":"Background Color","border_color":"Border Color","limit_indicator_color":"Limit Indicator Color","left_title_color":"Left Title Color","left_value_color":"Left Value Color","right_title_color":"Right Title Color","right_value_color":"Right Value Color","reset_color":"Reset to default color"},"gradient":{"header":"Gradient Mode","toggle":"Use Gradient","toggle_description":"Use a gradient for the progress bar instead of a solid color","display_mode":"Gradient Display Mode","display_mode_full":"Full","display_mode_value_based":"Value Based","display_mode_description":"Full: Show entire gradient. Value Based: Show gradient up to current value.","editor_header":"Gradient Editor","add_stop":"Add Stop"},"animation":{"header":"Action Animation","description":"Add animations to the bar when a specific entity reaches a certain state. Perfect for showing charging status, alerting conditions, and more.","pro_tip":"Pro Tip: For \\"always on\\" animations, select an animation type but leave the entity and state fields empty. Try the \\"Bubbles\\" and \\"Fill\\" animations!","entity":"Animation Entity","entity_description":"Entity that triggers the animation when it matches the specified state","state":"Entity State","state_description":"When the entity state equals this value, the animation will be triggered","type":"Animation Type","type_description":"The animation effect to display when the entity state matches","select_entity_prompt":"Select an Entity and type in the state you would like to trigger the animation with (examples: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Thin","regular":"Regular","thick":"Thick","thiccc":"Extra Thick"},"bar_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"bar_alignments":{"space-between":"Space Between","flex-start":"Left","center":"Center","flex-end":"Right"},"bar_radius":{"round":"Round","square":"Square","rounded-square":"Rounded Square"},"animation_types":{"none":"None","charging-lines":"Charging (Diagonal Lines)","pulse":"Pulse","blinking":"Blinking","bouncing":"Bouncing","glow":"Glow","rainbow":"Rainbow","bubbles":"Bubbles","fill":"Fill"}},"icons":{"title":"Card Icons","description":"Add icon rows to display multiple icons in your card. Each row can be configured with different settings. Note: Icon rows and section order can be rearranged in the Customize tab.","add_row":"Add Icon Row","duplicate_row":"Duplicate Row","delete_row":"Delete Row","expand_row":"Expand Row","collapse_row":"Collapse Row","no_row":"No icon rows added","row_prefix":"Row","icon_prefix":"Icon","row_settings":{"header":"Row Settings","width":"Row Width","width_description":"Width of the row as a percentage of card width","alignment":"Row Alignment","alignment_description":"How to align the icons within this row","spacing":"Icon Spacing","spacing_description":"Amount of space between icons in this row"},"add_icon":"Add Icon","duplicate_icon":"Duplicate Icon","delete_icon":"Delete Icon","expand_icon":"Expand Icon","collapse_icon":"Collapse Icon","no_icon":"No icon selected","icon_settings":{"header":"Icon Settings","entity":"Entity","entity_description":"Entity to display with this icon","icon":"Icon","icon_description":"Select an icon or enter a custom one","name":"Name","name_description":"Custom name to display below the icon (defaults to entity name if not set)","show_name":"Show Name","show_name_description":"Display the name text below the icon","show_state":"Show State","show_state_description":"Display the entity state below the icon","show_units":"Show Units","show_units_description":"Include units when displaying the state","text_position":"Text Position","text_position_description":"Where to place the name and state text relative to the icon","click_action":"Click Action","service":"Service","service_description":"Service to call (e.g., light.turn_on)","service_data":"Service Data (JSON)","service_data_description":"JSON data to send with the service call","action":"Action (JSON/Service)","action_description":"Advanced action configuration (see docs)","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to (e.g., /lovelace/dashboard)","url":"URL","url_description":"URL to open in a new tab"},"icon_appearance":{"header":"Icon Appearance","icon":"Icon Specific","general":"General Appearance","active":"Active State","inactive":"Inactive State","state_conditions":"State Conditions","advanced":"Advanced Settings","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Text Size","text_size_description":"Size of the name/state text in pixels","text_alignment":"Text Alignment","text_alignment_description":"How to align the text beneath the icon","icon_background":"Icon Background","icon_background_description":"Add a background shape behind the icon","text_appearance":"Text Appearance","container":{"header":"Container Appearance","vertical_alignment":"Vertical Alignment","vertical_alignment_description":"Align the icon and text vertically within the container.","width":"Container Width","width_description":"Set the width of the icon\'s container relative to the row.","background":"Container Background Shape","background_description":"Choose a background shape for the entire icon container.","container_background_color":"Container Background Color"},"show_when_active":"Show Icon When Active","show_when_active_description":"Only show this icon when it\'s in an active state","template_mode":"Template Mode","template_mode_description":"Use a template to determine the active/inactive state.","active_state":"Active State","active_state_description":"State string that represents \'active\'.","inactive_state":"Inactive State","inactive_state_description":"State string that represents \'inactive\'.","active_icon":"Active Icon","inactive_icon":"Inactive Icon","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","active_icon_color":"Active Icon Color","inactive_icon_color":"Inactive Icon Color","active_name_color":"Active Name Color","inactive_name_color":"Inactive Name Color","active_state_color":"Active State Color","inactive_state_color":"Inactive State Color","show_icon_active":"Show Icon When Active","show_icon_active_description":"Display the icon when the state is active.","show_icon_inactive":"Show Icon When Inactive","show_icon_inactive_description":"Display the icon when the state is inactive."},"tabs":{"general":"General","appearance":"Appearance","states":"States","active_state":"Active State","inactive_state":"Inactive State"},"alignments":{"flex-start":"Left","center":"Center","flex-end":"Right","space-between":"Space Between","space-around":"Space Around","space-evenly":"Space Evenly"},"vertical_alignments":{"flex-start":"Top","center":"Middle","flex-end":"Bottom"},"spacing":{"none":"None","small":"Small","medium":"Medium","large":"Large"},"text_positions":{"below":"Below Icon","beside":"Beside Icon","none":"No Text","top":"Top","left":"Left","right":"Right"},"reset":{"size":"Reset to default size","color":"Reset to default color","all":"Reset to defaults"},"click_actions":{"toggle":"Toggle Entity","more-info":"Show More Info","navigate":"Navigate Path","url":"Open URL","call-service":"Call Service","perform-action":"Perform Action","location-map":"Show Location Map","assist":"Voice Assistant","none":"No Action","descriptions":{"toggle":"Toggles the state of the entity.","more-info":"Opens the entity\'s more-info dialog.","navigate":"Navigates to the specified Lovelace path.","url":"Opens the specified URL in a new tab.","call-service":"Calls the specified Home Assistant service.","perform-action":"Executes a custom action (see documentation).","location-map":"Shows the entity\'s location on a map.","assist":"Opens the Home Assistant voice assistant.","none":"No action will be performed."}},"backgrounds":{"none":"None","circle":"Circle","square":"Square","rounded_square":"Rounded Square"},"container_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"row_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"}},"customize":{"layout":{"title":"Layout Style","description":"Choose between single column or two-column layout for the card","header":"Layout Settings"},"layout_types":{"single":"Single Column","double":"Two Columns"},"sections":{"header":"Card Sections","arrangement_header":"Section Arrangement","arrangement_desc_base":"Drag and drop sections to arrange their order on the card.","arrangement_desc_single_extra":"All sections will display in a single column.","arrangement_desc_double_extra":"In two-column layout, you can place all sections in either column."},"section_labels":{"title":"Title","image":"Vehicle Image","info":"Vehicle Info"},"actions":{"collapse_margins":"Collapse Margins","expand_margins":"Expand Margins"},"margins":{"top":"Top Margin","bottom":"Bottom Margin"},"columns":{"left":"Left Column","right":"Right Column","empty":"Drop sections here"},"css":{"header":"Global CSS","description":"Enter custom CSS rules here to override the default card styles. These rules will be applied directly to the card. Use with caution.","label":"Custom CSS","input_description":"Enter your custom CSS rules here."}},"backgrounds":{"none":"None","circle":"Circle","square":"Square","rounded_square":"Rounded Square"},"container_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"row_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Developed by","discord_button":"Join Our Discord","github_button":"Check Out Our Github","docs_button":"Visit Our Documentation","support_title":"Support Ultra Vehicle Card","support_para":"Your generous tips fuel the development of amazing features for this card! Without support from users like you, continued innovation wouldn\'t be possible.","donate_button":"LEAVE A TIP (PAYPAL)"}}');var Ve=a.t(Re,2);const Be=JSON.parse('{"editor":{"tabs":{"settings":"Einstellungen","bars":"Balken","icons":"Symbole","customize":"Anpassen","about":"Über"},"card_settings":{"title":"Kartentitel","title_alignment":"Titelausrichtung","title_size":"Titelgröße","title_description":"Titel, der oben auf der Karte angezeigt wird (optional)","title_alignment_description":"Wie der Kartentitel ausgerichtet werden soll","title_size_description":"Größe des Kartentitels in Pixeln","format_entities":"Entitätswerte formatieren","format_entities_description":"Aktivieren Sie zusätzliche Formatierung von Entitätswerten (Kommas hinzufügen, Einheiten konvertieren, etc.)","show_units":"Einheiten anzeigen","show_units_description":"Maßeinheiten neben den Werten anzeigen"},"vehicle_info":{"title":"Fahrzeuginformationen","location":{"title":"Standort-Entität","description":"Wählen Sie die Entität, die den aktuellen Standort Ihres Fahrzeugs angibt.","show":"Standort anzeigen","show_description":"Fahrzeugstandort anzeigen"},"mileage":{"title":"Kilometerstand-Entität","description":"Wählen Sie die Entität, die den Gesamtkilometerstand oder Tachostand Ihres Fahrzeugs anzeigt.","show":"Kilometerstand anzeigen","show_description":"Fahrzeugkilometerstand anzeigen"},"car_state":{"title":"Fahrzeugstatus-Entität","description":"Wählen Sie die Entität, die den aktuellen Status Ihres Fahrzeugs anzeigt (z.B. geparkt, fahrend, ladend).","show":"Fahrzeugstatus anzeigen","show_description":"Fahrzeugstatus anzeigen"}},"images":{"vehicle":{"title":"Fahrzeugbild","description":"Konfigurieren Sie das primäre Bild für das Fahrzeug.","type":"Fahrzeugbildtyp","width":"Bildbreite","crop":"Bildzuschnitt","entity":"Bild-Entität","entity_description":"Entität, die die Bild-URL bereitstellt"},"action":{"title":"Aktionsbild","description":"Optional können Sie ein anderes Bild anzeigen, wenn eine bestimmte Entität einen bestimmten Status erreicht (z.B. Ladebild anzeigen, wenn das Auto eingesteckt ist).","type":"Aktionsbildtyp","width":"Bildbreite","crop":"Bildzuschnitt","entity":"Aktions-Entität","entity_description":"Entität, die das Aktionsbild auslöst","state":"Aktionsstatus","state_description":"Statuswert, der das Aktionsbild auslöst"}},"crop":{"title":"Bildzuschnitt","top":"Oben","right":"Rechts","bottom":"Unten","left":"Links","pixels":"px","help":"Geben Sie Pixelwerte (positiv oder negativ) ein, um den Zuschnitt und die Polsterung anzupassen"},"bars":{"title":"Prozentbalken","description":"Fügen Sie Prozentbalken hinzu, um Werte wie Kraftstoffstand, Batterieladung oder Reichweite anzuzeigen. Jeder Balken kann einen Hauptprozentwert mit optionalen linken und rechten Beschriftungen anzeigen.","add":"Neuen Balken hinzufügen","duplicate":"Balken duplizieren","delete":"Balken löschen","expand":"Balken erweitern","collapse":"Balken einklappen","bar_prefix":"Balken","no_entity":"Keine Entität ausgewählt","tabs":{"config":"Konfiguration","colors":"Farben","animation":"Animation"},"settings":{"header":"Balkenkonfiguration","entity":"Balken-Prozent-Entität","entity_description":"Wählen Sie eine Entität, die einen Prozentwert (0-100) zurückgibt. Dies steuert die Füllung des Balkens.","limit_entity":"Limit-Entität (optional)","limit_entity_description":"Optional: Fügen Sie eine vertikale Indikatorlinie auf dem Balken hinzu (z.B. Ladelimit für EV-Batterie).","limit_color":"Limit-Indikator Farbe","limit_color_description":"Farbe der vertikalen Linie, die die Limitposition auf dem Balken anzeigt. Änderungen hier erzwingen eine Aktualisierung der Karte.","bar_size":"Balkengröße","bar_size_description":"Legen Sie die Dicke/Höhe des Fortschrittsbalkens fest.","width":"Balkenbreite","width_description":"Legen Sie die Breite des Balkens als Prozentsatz der Kartenbreite fest.","alignment":"Beschriftungsausrichtung","alignment_description":"Wie die linken und rechten Beschriftungen zueinander ausgerichtet werden.","bar_radius":"Balkenradius","bar_radius_description":"Form der Ecken des Fortschrittsbalkens"},"left_side":{"header":"Linke Seite","toggle_description":"Linke Seite der Balkenbeschriftung ein-/ausblenden","title":"Linker Titel","title_description":"Optionale Beschriftung, die auf der linken Seite unter dem Balken angezeigt wird.","entity":"Linke Entität","entity_description":"Entität, deren Wert auf der linken Seite des Balkens angezeigt wird.","alignment_description":"Steuert, wie diese Beschriftung unter dem Balken ausgerichtet wird.","title_size":"Titelgröße","value_size":"Wertgröße","hidden_message":"Linke Seite ist ausgeblendet"},"right_side":{"header":"Rechte Seite","toggle_description":"Rechte Seite der Balkenbeschriftung ein-/ausblenden","title":"Rechter Titel","title_description":"Optionale Beschriftung, die auf der rechten Seite unter dem Balken angezeigt wird.","entity":"Rechte Entität","entity_description":"Entität, deren Wert auf der rechten Seite des Balkens angezeigt wird.","alignment_description":"Steuert, wie diese Beschriftung unter dem Balken ausgerichtet wird.","title_size":"Titelgröße","value_size":"Wertgröße","hidden_message":"Rechte Seite ist ausgeblendet"},"colors":{"header":"Farben","bar_color":"Balkenfarbe","background_color":"Hintergrundfarbe","border_color":"Randfarbe","limit_indicator_color":"Limit-Indikator Farbe","left_title_color":"Linker Titel Farbe","left_value_color":"Linker Wert Farbe","right_title_color":"Rechter Titel Farbe","right_value_color":"Rechter Wert Farbe","reset_color":"Auf Standardfarbe zurücksetzen"},"gradient":{"header":"Farbverlauf Modus","toggle":"Farbverlauf verwenden","toggle_description":"Verwenden Sie einen Farbverlauf für den Fortschrittsbalken anstelle einer Vollfarbe","display_mode":"Farbverlauf Anzeigemodus","display_mode_full":"Voll","display_mode_value_based":"Wertbasiert","display_mode_description":"Voll: Zeigt den gesamten Farbverlauf. Wertbasiert: Zeigt den Farbverlauf bis zum aktuellen Wert.","editor_header":"Farbverlauf Editor","add_stop":"Stopp hinzufügen"},"animation":{"header":"Aktionsanimation","description":"Fügen Sie Animationen zum Balken hinzu, wenn eine bestimmte Entität einen bestimmten Zustand erreicht. Perfekt zur Anzeige des Ladestatus, von Warnbedingungen und mehr.","pro_tip":"Profi-Tipp: Für \\"immer aktive\\" Animationen wählen Sie einen Animationstyp, lassen aber die Entitäts- und Zustandsfelder leer. Probieren Sie die Animationen \\"Bubbles\\" und \\"Fill\\" aus!","entity":"Animations-Entität","entity_description":"Entität, die die Animation auslöst, wenn sie dem angegebenen Zustand entspricht","state":"Entitätszustand","state_description":"Wenn der Entitätszustand diesem Wert entspricht, wird die Animation ausgelöst","type":"Animationstyp","type_description":"Der Animationseffekt, der angezeigt wird, wenn der Entitätszustand übereinstimmt","select_entity_prompt":"Wählen Sie eine Entität aus und geben Sie den Zustand ein, der die Animation auslösen soll (Beispiele: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Dünn","regular":"Normal","thick":"Dick","thiccc":"Extra Dick"},"bar_widths":{"25":"25% Breite","50":"50% Breite","75":"75% Breite","100":"100% (Volle Breite)"},"bar_alignments":{"space-between":"Gleichmäßig verteilt","flex-start":"Links","center":"Zentriert","flex-end":"Rechts"},"animation_types":{"none":"Keine","charging-lines":"Laden (Diagonale Linien)","pulse":"Pulsieren","blinking":"Blinken","bouncing":"Hüpfen","glow":"Leuchten","rainbow":"Regenbogen","bubbles":"Blasen","fill":"Füllen"},"bar_radius":{"round":"Rund","square":"Quadratisch","rounded-square":"Abgerundetes Quadrat"}},"icons":{"title":"Kartensymbole","description":"Fügen Sie Symbolzeilen hinzu, um mehrere Symbole in Ihrer Karte anzuzeigen. Jede Zeile kann mit verschiedenen Einstellungen konfiguriert werden. Hinweis: Symbolzeilen und Abschnittsreihenfolge können im Tab Anpassen neu angeordnet werden.","add_row":"Symbolzeile hinzufügen","duplicate_row":"Zeile duplizieren","delete_row":"Zeile löschen","expand_row":"Zeile erweitern","collapse_row":"Zeile einklappen","no_row":"Keine Symbolzeilen hinzugefügt","row_prefix":"Zeile","icon_prefix":"Symbol","row_settings":{"header":"Zeileneinstellungen","width":"Zeilenbreite","width_description":"Breite der Zeile als Prozentsatz der Kartenbreite","alignment":"Zeilenausrichtung","alignment_description":"Wie die Symbole innerhalb dieser Zeile ausgerichtet werden","spacing":"Symbolabstand","spacing_description":"Abstand zwischen den Symbolen in dieser Zeile"},"add_icon":"Symbol hinzufügen","duplicate_icon":"Symbol duplizieren","delete_icon":"Symbol löschen","expand_icon":"Symbol erweitern","collapse_icon":"Symbol einklappen","no_icon":"Kein Symbol ausgewählt","icon_settings":{"header":"Symboleinstellungen","entity":"Entität","entity_description":"Entität, die mit diesem Symbol angezeigt wird","icon":"Symbol","icon_description":"Wählen Sie ein Symbol aus oder geben Sie ein benutzerdefiniertes ein","name":"Name","name_description":"Benutzerdefinierter Name, der unter dem Symbol angezeigt wird (standardmäßig der Entitätsname, wenn nicht festgelegt)","show_name":"Namen anzeigen","show_name_description":"Den Namenstext unter dem Symbol anzeigen","show_state":"Status anzeigen","show_state_description":"Den Entitätsstatus unter dem Symbol anzeigen","show_units":"Einheiten anzeigen","show_units_description":"Einheiten bei der Anzeige des Status einbeziehen","text_position":"Text Position","text_position_description":"Wo der Name und Statustext relativ zum Symbol platziert werden soll","click_action":"Klickaktion","service":"Dienst","service_description":"Aufzurufender Dienst (z.B. light.turn_on)","service_data":"Dienstdaten (JSON)","service_data_description":"JSON-Daten, die mit dem Dienstaufruf gesendet werden","action":"Aktion (JSON/Dienst)","action_description":"Erweiterte Aktionskonfiguration (siehe Doku)","navigation_path":"Navigationspfad","navigation_path_description":"Pfad, zu dem navigiert werden soll (z.B. /lovelace/dashboard)","url":"URL","url_description":"URL, die in einem neuen Tab geöffnet werden soll"},"icon_appearance":{"header":"Symbol-Erscheinungsbild","icon":"Symbolspezifisch","general":"Allgemeines Erscheinungsbild","active":"Aktiver Zustand","inactive":"Inaktiver Zustand","state_conditions":"Statusbedingungen","advanced":"Erweiterte Einstellungen","icon_size":"Symbolgröße","icon_size_description":"Größe des Symbols in Pixeln","text_size":"Textgröße","text_size_description":"Größe des Namens-/Statustexts in Pixeln","text_alignment":"Textausrichtung","text_alignment_description":"Wie der Text unter dem Symbol ausgerichtet werden soll","icon_background":"Symbol-Hintergrund","icon_background_description":"Fügt eine Hintergrundform hinter dem Symbol hinzu","text_appearance":"Text-Erscheinungsbild","container":{"header":"Container-Erscheinungsbild","width":"Containerbreite","width_description":"Legt die Breite des Symbolcontainers relativ zur Zeile fest.","background":"Container-Hintergrundform","background_description":"Wählt eine Hintergrundform für den gesamten Symbolcontainer.","vertical_alignment":"Vertikale Ausrichtung","vertical_alignment_description":"Richtet das Symbol und den Text vertikal im Container aus.","container_background_color":"Container-Hintergrundfarbe"},"show_when_active":"Symbol nur anzeigen, wenn aktiv","show_when_active_description":"Dieses Symbol nur anzeigen, wenn es sich in einem aktiven Zustand befindet","template_mode":"Vorlagenmodus","template_mode_description":"Verwendet eine Vorlage zur Bestimmung des aktiven/inaktiven Zustands.","active_state":"Aktiver Zustand","active_state_description":"Zustandszeichenfolge, die \\"aktiv\\" darstellt.","inactive_state":"Inaktiver Zustand","inactive_state_description":"Zustandszeichenfolge, die \\"inaktiv\\" darstellt.","active_icon":"Aktives Symbol","inactive_icon":"Inaktives Symbol","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","active_icon_color":"Aktive Symbolfarbe","inactive_icon_color":"Inaktive Symbolfarbe","active_name_color":"Aktive Namensfarbe","inactive_name_color":"Inaktive Namensfarbe","active_state_color":"Aktive Zustandsfarbe","inactive_state_color":"Inaktive Zustandsfarbe","show_icon_active":"Symbol bei Aktivität anzeigen","show_icon_active_description":"Zeigt das Symbol an, wenn der Zustand aktiv ist.","show_icon_inactive":"Symbol bei Inaktivität anzeigen","show_icon_inactive_description":"Zeigt das Symbol an, wenn der Zustand inaktiv ist."},"tabs":{"general":"Allgemein","appearance":"Erscheinungsbild","states":"Zustände","active_state":"Aktiver Zustand","inactive_state":"Inaktiver Zustand"},"alignments":{"flex-start":"Links","center":"Zentriert","flex-end":"Rechts","space-between":"Gleichmäßig verteilt","space-around":"Rundherum verteilt","space-evenly":"Gleichmäßig verteilt (Gleichmäßig)"},"vertical_alignments":{"flex-start":"Oben","center":"Mitte","flex-end":"Unten"},"spacing":{"none":"Kein","small":"Klein","medium":"Mittel","large":"Groß"},"text_positions":{"below":"Unter dem Symbol","beside":"Neben dem Symbol","none":"Kein Text","top":"Oben","left":"Links","right":"Rechts"},"reset":{"size":"Auf Standardgröße zurücksetzen","color":"Auf Standardfarbe zurücksetzen","all":"Auf Standardwerte zurücksetzen"},"click_actions":{"toggle":"Entität umschalten","more-info":"Mehr Informationen anzeigen","navigate":"Navigiere zu Pfad","url":"URL öffnen","call-service":"Dienst aufrufen","perform-action":"Aktion ausführen","location-map":"Standortkarte anzeigen","assist":"Sprachassistent","none":"Keine Aktion","descriptions":{"toggle":"Schaltet den Zustand der Entität um.","more-info":"Öffnet den Mehr-Info-Dialog der Entität.","navigate":"Navigiert zum angegebenen Lovelace-Pfad.","url":"Öffnet die angegebene URL in einem neuen Tab.","call-service":"Ruft den angegebenen Home Assistant-Dienst auf.","perform-action":"Führt eine benutzerdefinierte Aktion aus (siehe Dokumentation).","location-map":"Zeigt den Standort der Entität auf einer Karte an.","assist":"Öffnet den Home Assistant Sprachassistenten.","none":"Es wird keine Aktion ausgeführt."}},"backgrounds":{"none":"Keine","circle":"Kreis","square":"Quadrat","rounded_square":"Abgerundetes Quadrat"},"container_widths":{"25":"25% Breite","50":"50% Breite","75":"75% Breite","100":"100% (Volle Breite)"},"row_widths":{"25":"25% Breite","50":"50% Breite","75":"75% Breite","100":"100% (Volle Breite)"}},"customize":{"layout":{"title":"Layout-Stil","description":"Wählen Sie zwischen einspaltigen oder zweispaltigen Layout für die Karte","header":"Layout-Einstellungen"},"layout_types":{"single":"Einzelne Spalte","double":"Zwei Spalten"},"sections":{"header":"Kartenabschnitte","arrangement_header":"Abschnittsanordnung","arrangement_desc_base":"Ziehen Sie Abschnitte per Drag & Drop, um ihre Reihenfolge auf der Karte anzuordnen.","arrangement_desc_single_extra":"Alle Abschnitte werden in einer einzigen Spalte angezeigt.","arrangement_desc_double_extra":"Im zweispaltigen Layout können Sie alle Abschnitte in jeder Spalte platzieren."},"section_labels":{"title":"Titel","image":"Fahrzeugbild","info":"Fahrzeuginfo"},"actions":{"collapse_margins":"Abstände einklappen","expand_margins":"Abstände erweitern"},"margins":{"top":"Oberer Abstand","bottom":"Unterer Abstand"},"columns":{"left":"Linke Spalte","right":"Rechte Spalte","empty":"Abschnitte hier ablegen"},"css":{"header":"Globales CSS","description":"Geben Sie hier benutzerdefinierte CSS-Regeln ein, um die Standardkartenstile zu überschreiben. Diese Regeln werden direkt auf die Karte angewendet. Mit Vorsicht verwenden.","label":"Benutzerdefiniertes CSS","input_description":"Geben Sie hier Ihre benutzerdefinierten CSS-Regeln ein."}},"alignment":{"left":"Links","center":"Zentriert","right":"Rechts"},"common":{"choose_file":"Datei auswählen","no_file_chosen":"Keine Datei ausgewählt","entity":"Entität","width":"Breite","width_description":"Breite als Prozentsatz der Karte","none":"Keine","default":"Standard","upload":"Hochladen","url":"URL","url_description":"URL, die auf das Bild verweist","reset":"Zurücksetzen"},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Entwickelt von","discord_button":"Tritt unserem Discord bei","github_button":"Schau dir unser Github an","docs_button":"Besuche unsere Dokumentation","support_title":"Unterstütze Ultra Vehicle Card","support_para":"Deine großzügigen Trinkgelder fördern die Entwicklung großartiger Funktionen für diese Karte! Ohne Unterstützung von Benutzern wie dir wäre kontinuierliche Innovation nicht möglich.","donate_button":"TRINKGELD GEBEN (PAYPAL)"},"backgrounds":{"none":"None","circle":"Circle","square":"Square","rounded_square":"Rounded Square"},"container_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"row_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Developed by","discord_button":"Join Our Discord","github_button":"Check Out Our Github","docs_button":"Visit Our Documentation","support_title":"Support Ultra Vehicle Card","support_para":"Your generous tips fuel the development of amazing features for this card! Without support from users like you, continued innovation wouldn\'t be possible.","donate_button":"LEAVE A TIP (PAYPAL)"}}');var De=a.t(Be,2);const Oe=JSON.parse('{"editor":{"tabs":{"settings":"Configuración","bars":"Barras","icons":"Iconos","customize":"Personalizar","about":"Acerca de"},"card_settings":{"title":"Título de la Tarjeta","title_alignment":"Alineación del Título","title_size":"Tamaño del Título","title_description":"Título mostrado en la parte superior de la tarjeta (opcional)","title_alignment_description":"Cómo se alinea el título de la tarjeta","title_size_description":"Tamaño del título de la tarjeta en píxeles","format_entities":"Formatear Valores de Entidades","format_entities_description":"Activa el formateo adicional de valores de entidades (añade comas, convierte unidades, etc.)","show_units":"Mostrar Unidades","show_units_description":"Muestra las unidades junto a los valores"},"vehicle_info":{"title":"Información del Vehículo","location":{"title":"Entidad de Ubicación","description":"Selecciona la entidad que muestra la ubicación actual del vehículo.","show":"Mostrar Ubicación","show_description":"Muestra la ubicación del vehículo"},"mileage":{"title":"Entidad de Kilometraje","description":"Selecciona la entidad que representa el kilometraje total o el cuentakilómetros del vehículo.","show":"Mostrar Kilometraje","show_description":"Muestra el kilometraje del vehículo"},"car_state":{"title":"Entidad de Estado del Vehículo","description":"Selecciona la entidad que representa el estado actual del vehículo (ej. estacionado, en movimiento, cargando).","show":"Mostrar Estado del Vehículo","show_description":"Muestra el estado del vehículo"}},"images":{"vehicle":{"title":"Imagen del Vehículo","description":"Configura la imagen principal que se muestra para el vehículo.","type":"Tipo de Imagen del Vehículo","width":"Ancho de la Imagen","crop":"Recortar Imagen","entity":"Entidad de Imagen","entity_description":"Entidad que proporciona la URL de la imagen"},"action":{"title":"Imagen de Acción","description":"Opcionalmente muestra una imagen diferente cuando una entidad alcanza un estado determinado (ej. muestra una imagen de carga cuando el auto está conectado).","type":"Tipo de Imagen de Acción","width":"Ancho de la Imagen","crop":"Recortar Imagen","entity":"Entidad de Acción","entity_description":"Entidad que activa la imagen de acción","state":"Estado de Acción","state_description":"Valor del estado que activa la imagen de acción"}},"crop":{"title":"Recorte de Imagen","top":"Superior","right":"Derecho","bottom":"Inferior","left":"Izquierdo","pixels":"px","help":"Ingresa valores en píxeles (positivos o negativos) para ajustar el recorte y el relleno"},"alignment":{"left":"Izquierda","center":"Centro","right":"Derecha"},"common":{"choose_file":"Elegir Archivo","no_file_chosen":"Ningún archivo seleccionado","entity":"Entidad","width":"Ancho","width_description":"Ancho en porcentaje de la tarjeta","none":"Ninguno","default":"Predeterminado","upload":"Subir","url":"URL","url_description":"URL que apunta a la imagen","reset":"Restablecer"},"bars":{"title":"Barras de Porcentaje","description":"Añade barras de porcentaje para mostrar valores como nivel de combustible, carga de batería o autonomía. Cada barra puede mostrar un valor porcentual principal con etiquetas opcionales a la izquierda y derecha.","add":"Añadir Nueva Barra","duplicate":"Duplicar Barra","delete":"Eliminar Barra","expand":"Expandir Barra","collapse":"Colapsar Barra","bar_prefix":"Barra","no_entity":"Ninguna entidad seleccionada","tabs":{"config":"Configuración","colors":"Colores","animation":"Animación"},"settings":{"header":"Configuración de Barra","entity":"Entidad de Porcentaje de Barra","entity_description":"Selecciona una entidad que devuelva un valor porcentual (0-100). Esto controla el nivel de llenado de la barra.","limit_entity":"Entidad de Valor Límite (opcional)","limit_entity_description":"Opcional: Añade una línea indicadora vertical en la barra (ej. límite de carga para batería de VE).","limit_color":"Color de Indicador de Límite","limit_color_description":"Color de la línea vertical que indica la posición del límite en la barra. Los cambios forzarán una actualización de la tarjeta.","bar_size":"Tamaño de Barra","bar_size_description":"Define el grosor/altura de la barra de progreso.","width":"Ancho de Barra","width_description":"Define el ancho de la barra en porcentaje del ancho de la tarjeta.","alignment":"Alineación de Etiqueta","alignment_description":"Cómo se alinean las etiquetas izquierda y derecha entre sí.","bar_radius":"Radio de Barra","bar_radius_description":"Forma de las esquinas de la barra de progreso"},"left_side":{"header":"Lado Izquierdo","toggle_description":"Mostrar u ocultar el lado izquierdo de la etiqueta de barra","title":"Título Izquierdo","title_description":"Etiqueta opcional mostrada en el lado izquierdo debajo de la barra.","entity":"Entidad Izquierda","entity_description":"Entidad cuyo valor se muestra en el lado izquierdo de la barra.","alignment_description":"Controla cómo se alinea esta etiqueta debajo de la barra.","title_size":"Tamaño del Título","value_size":"Tamaño del Valor","hidden_message":"El lado izquierdo está oculto"},"right_side":{"header":"Lado Derecho","toggle_description":"Mostrar u ocultar el lado derecho de la etiqueta de barra","title":"Título Derecho","title_description":"Etiqueta opcional mostrada en el lado derecho debajo de la barra.","entity":"Entidad Derecha","entity_description":"Entidad cuyo valor se muestra en el lado derecho de la barra.","alignment_description":"Controla cómo se alinea esta etiqueta debajo de la barra.","title_size":"Tamaño del Título","value_size":"Tamaño del Valor","hidden_message":"El lado derecho está oculto"},"colors":{"header":"Colores","bar_color":"Color de Barra","background_color":"Color de Fondo","border_color":"Color de Borde","limit_indicator_color":"Color de Indicador de Límite","left_title_color":"Color de Título Izquierdo","left_value_color":"Color de Valor Izquierdo","right_title_color":"Color de Título Derecho","right_value_color":"Color de Valor Derecho","reset_color":"Restablecer color predeterminado"},"gradient":{"header":"Modo Degradado","toggle":"Usar Degradado","toggle_description":"Usa un degradado para la barra de progreso en lugar de un color único","display_mode":"Modo de Visualización de Degradado","display_mode_full":"Completo","display_mode_value_based":"Basado en Valor","display_mode_description":"Completo: Muestra todo el degradado. Basado en Valor: Muestra el degradado hasta el valor actual.","editor_header":"Editor de Degradado","add_stop":"Añadir Punto"},"animation":{"header":"Animación de Acción","description":"Añade animaciones a la barra cuando una entidad específica alcanza un estado específico. Perfecto para mostrar estados de carga, estados de alarma y más.","pro_tip":"Consejo Pro: Para animaciones \'siempre activas\', selecciona un tipo de animación pero deja vacíos los campos de entidad y estado. ¡Prueba las animaciones \'Burbujas\' y \'Rellenar\'!","entity":"Entidad de Animación","entity_description":"Entidad que activa la animación cuando coincide con el estado especificado","state":"Estado de Entidad","state_description":"Cuando el estado de la entidad coincide con este valor, se activará la animación","type":"Tipo de Animación","type_description":"El efecto de animación que se mostrará cuando el estado de la entidad coincida","select_entity_prompt":"Seleccione una Entidad y escriba el estado que desea para activar la animación (ejemplos: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Delgada","regular":"Normal","thick":"Gruesa","thiccc":"Muy Gruesa"},"bar_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"},"bar_alignments":{"space-between":"Espacio Entre","flex-start":"Izquierda","center":"Centro","flex-end":"Derecha"},"animation_types":{"none":"Ninguna","charging-lines":"Carga (Líneas Diagonales)","pulse":"Pulso","blinking":"Parpadeo","bouncing":"Rebote","glow":"Brillo","rainbow":"Arcoíris","bubbles":"Burbujas","fill":"Rellenar"},"bar_radius":{"round":"Redondo","square":"Cuadrado","rounded-square":"Cuadrado Redondeado"}},"icons":{"title":"Iconos de la Tarjeta","description":"Añade filas de iconos para mostrar múltiples iconos en tu tarjeta. Cada fila puede configurarse con diferentes ajustes. Nota: Las filas de iconos y el orden de secciones pueden reorganizarse en la pestaña Personalizar.","add_row":"Añadir Fila de Iconos","duplicate_row":"Duplicar Fila","delete_row":"Eliminar Fila","expand_row":"Expandir Fila","collapse_row":"Colapsar Fila","no_row":"No se ha añadido ninguna fila de iconos","row_prefix":"Fila","icon_prefix":"Icono","row_settings":{"header":"Configuración de Fila","width":"Ancho de Fila","width_description":"Ancho de la fila en porcentaje del ancho de la tarjeta","alignment":"Alineación de Fila","alignment_description":"Cómo se alinean los iconos en esta fila","spacing":"Espaciado de Iconos","spacing_description":"Cantidad de espacio entre los iconos en esta fila"},"add_icon":"Añadir Icono","duplicate_icon":"Duplicar Icono","delete_icon":"Eliminar Icono","expand_icon":"Expandir Icono","collapse_icon":"Colapsar Icono","no_icon":"Ningún icono seleccionado","icon_settings":{"header":"Configuración de Icono","entity":"Entidad","entity_description":"Entidad mostrada con este icono","icon":"Icono","icon_description":"Selecciona un icono o ingresa un icono personalizado","name":"Nombre","name_description":"Nombre personalizado mostrado debajo del icono (usa el nombre de la entidad por defecto si no se especifica)","show_name":"Mostrar Nombre","show_name_description":"Muestra el texto del nombre debajo del icono","show_state":"Mostrar Estado","show_state_description":"Muestra el estado de la entidad debajo del icono","show_units":"Mostrar Unidades","show_units_description":"Incluye las unidades al mostrar el estado","text_position":"Posición del Texto","text_position_description":"Dónde se posiciona el texto del nombre y estado respecto al icono","click_action":"Acción al Hacer Clic","service":"Servicio","service_description":"Servicio a llamar (ej. light.turn_on)","service_data":"Datos del Servicio (JSON)","service_data_description":"Datos JSON enviados con la llamada al servicio","action":"Acción (JSON/Servicio)","action_description":"Configuración avanzada de acción (ver documentación)","navigation_path":"Ruta de Navegación","navigation_path_description":"Ruta a la que navegar (ej. /lovelace/dashboard)","url":"URL","url_description":"URL para abrir en una nueva pestaña"},"icon_appearance":{"header":"Apariencia del Icono","icon":"Especificar Icono","general":"Apariencia General","active":"Estado Activo","inactive":"Estado Inactivo","state_conditions":"Condiciones de Estado","advanced":"Configuración Avanzada","icon_size":"Tamaño del Icono","icon_size_description":"Tamaño del icono en píxeles","text_size":"Tamaño del Texto","text_size_description":"Tamaño del texto de nombre/estado en píxeles","text_alignment":"Alineación del Texto","text_alignment_description":"Cómo se alinea el texto debajo del icono","icon_background":"Fondo del Icono","icon_background_description":"Añade una forma de fondo detrás del icono","text_appearance":"Apariencia del Texto","container":{"header":"Apariencia del Contenedor","width":"Ancho del Contenedor","width_description":"Establecer el ancho del contenedor del icono relativo a la fila.","background":"Forma del Fondo del Contenedor","background_description":"Elegir una forma de fondo para todo el contenedor del icono.","vertical_alignment":"Alineación Vertical","vertical_alignment_description":"Alinear el icono y el texto verticalmente dentro del contenedor.","container_background_color":"Color de Fondo del Contenedor"},"show_when_active":"Mostrar Icono Cuando Activo","show_when_active_description":"Mostrar este icono solo cuando está en un estado activo","template_mode":"Modo Plantilla","template_mode_description":"Usar una plantilla para determinar el estado activo/inactivo.","active_state":"Estado Activo","active_state_description":"Cadena de estado que representa \\"activo\\".","inactive_state":"Estado Inactivo","inactive_state_description":"Cadena de estado que representa \\"inactivo\\".","active_icon":"Icono Activo","inactive_icon":"Icono Inactivo","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","active_icon_color":"Color del Icono Activo","inactive_icon_color":"Color del Icono Inactivo","active_name_color":"Color del Nombre Activo","inactive_name_color":"Color del Nombre Inactivo","active_state_color":"Color del Estado Activo","inactive_state_color":"Color del Estado Inactivo","show_icon_active":"Mostrar Icono Cuando Activo","show_icon_active_description":"Mostrar el icono cuando el estado es activo.","show_icon_inactive":"Mostrar Icono Cuando Inactivo","show_icon_inactive_description":"Mostrar el icono cuando el estado es inactivo."},"tabs":{"general":"General","appearance":"Apariencia","states":"Estados","active_state":"Estado Activo","inactive_state":"Estado Inactivo"},"alignments":{"flex-start":"Izquierda","center":"Centro","flex-end":"Derecha","space-between":"Espacio Entre","space-around":"Espacio Alrededor","space-evenly":"Espacio Uniforme"},"vertical_alignments":{"flex-start":"Superior","center":"Medio","flex-end":"Inferior"},"spacing":{"none":"Ninguno","small":"Pequeño","medium":"Mediano","large":"Grande"},"text_positions":{"below":"Debajo del Icono","beside":"Junto al Icono","none":"Sin Texto","top":"Arriba","left":"Izquierda","right":"Derecha"},"reset":{"size":"Restablecer tamaño predeterminado","color":"Restablecer Color","all":"Restablecer valores predeterminados"},"click_actions":{"toggle":"Alternar Entidad","more-info":"Mostrar Más Información","navigate":"Navegar a una Ruta","url":"Abrir URL","call-service":"Llamar Servicio","perform-action":"Realizar Acción","location-map":"Mostrar Mapa de Ubicación","assist":"Asistente de Voz","none":"Ninguna Acción","descriptions":{"toggle":"Alterna el estado de la entidad.","more-info":"Abre el diálogo con información adicional para la entidad.","navigate":"Navega a la ruta de Lovelace especificada.","url":"Abre la URL especificada en una nueva pestaña.","call-service":"Llama al servicio de Home Assistant especificado.","perform-action":"Realiza una acción personalizada (ver documentación).","location-map":"Muestra la entidad en un mapa.","assist":"Abre el asistente de voz de Home Assistant.","none":"No se realizará ninguna acción."}},"backgrounds":{"none":"Ninguno","circle":"Círculo","square":"Cuadrado","rounded_square":"Cuadrado Redondeado"},"container_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"},"row_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"}},"customize":{"layout":{"title":"Estilo de Diseño","description":"Elige entre un diseño de columna única o doble para la tarjeta","header":"Configuración de Diseño"},"layout_types":{"single":"Columna Única","double":"Columna Doble"},"sections":{"header":"Secciones de Tarjeta","arrangement_header":"Disposición de Secciones","arrangement_desc_base":"Arrastra y suelta las secciones para organizar su orden en la tarjeta.","arrangement_desc_single_extra":"Todas las secciones se mostrarán en una columna única.","arrangement_desc_double_extra":"En un diseño de doble columna, puedes colocar cualquier sección en la columna izquierda o derecha."},"section_labels":{"title":"Título","image":"Imagen del Vehículo","info":"Información del Vehículo"},"actions":{"collapse_margins":"Reducir Márgenes","expand_margins":"Expandir Márgenes"},"margins":{"top":"Margen Superior","bottom":"Margen Inferior"},"columns":{"left":"Columna Izquierda","right":"Columna Derecha","empty":"Suelta secciones aquí"},"css":{"header":"CSS Global","description":"Ingresa reglas CSS personalizadas aquí para anular el estilo predeterminado de la tarjeta. Estas reglas se aplicarán directamente a la tarjeta. Usa con precaución.","label":"CSS Personalizado","input_description":"Ingresa tus reglas CSS personalizadas aquí."}},"backgrounds":{"none":"Ninguno","circle":"Círculo","square":"Cuadrado","rounded_square":"Cuadrado Redondeado"},"container_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"},"row_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Desarrollado por","discord_button":"Únete a Nuestro Discord","github_button":"Visita Nuestro Github","docs_button":"Ver Nuestra Documentación","support_title":"Apoya Ultra Vehicle Card","support_para":"¡Tus generosas donaciones impulsan el desarrollo de increíbles funcionalidades para esta tarjeta! Sin el apoyo de usuarios como tú, la innovación continua no sería posible.","donate_button":"DONAR (PAYPAL)"}}');var Pe=a.t(Oe,2);const Ne=JSON.parse('{"editor":{"tabs":{"settings":"Paramètres","bars":"Barres","icons":"Icônes","customize":"Personnaliser","about":"À propos"},"card_settings":{"title":"Titre de la Carte","title_alignment":"Alignement du Titre","title_size":"Taille du Titre","title_description":"Titre affiché en haut de la carte (optionnel)","title_alignment_description":"Comment le titre de la carte est aligné","title_size_description":"Taille du titre de la carte en pixels","format_entities":"Formater les Valeurs des Entités","format_entities_description":"Active le formatage supplémentaire des valeurs d\'entités (ajoute des virgules, convertit les unités, etc.)","show_units":"Afficher les Unités","show_units_description":"Affiche les unités à côté des valeurs"},"vehicle_info":{"title":"Informations du Véhicule","location":{"title":"Entité de Localisation","description":"Sélectionne l\'entité qui affiche l\'emplacement actuel du véhicule.","show":"Afficher la Localisation","show_description":"Affiche l\'emplacement du véhicule"},"mileage":{"title":"Entité de Kilométrage","description":"Sélectionne l\'entité qui représente le kilométrage total ou l\'odomètre du véhicule.","show":"Afficher le Kilométrage","show_description":"Affiche le kilométrage du véhicule"},"car_state":{"title":"Entité d\'État du Véhicule","description":"Sélectionne l\'entité qui représente l\'état actuel du véhicule (ex. garé, en mouvement, en charge).","show":"Afficher l\'État du Véhicule","show_description":"Affiche l\'état du véhicule"}},"images":{"vehicle":{"title":"Image du Véhicule","description":"Configure l\'image principale affichée pour le véhicule.","type":"Type d\'Image du Véhicule","width":"Largeur de l\'Image","crop":"Recadrer l\'Image","entity":"Entité d\'Image","entity_description":"Entité qui fournit l\'URL de l\'image"},"action":{"title":"Image d\'Action","description":"Affiche optionnellement une image différente lorsqu\'une entité atteint un état spécifique (ex. affiche une image de charge lorsque la voiture est branchée).","type":"Type d\'Image d\'Action","width":"Largeur de l\'Image","crop":"Recadrer l\'Image","entity":"Entité d\'Action","entity_description":"Entité qui déclenche l\'image d\'action","state":"État d\'Action","state_description":"Valeur d\'état qui déclenche l\'image d\'action"}},"crop":{"title":"Recadrage d\'Image","top":"Haut","right":"Droit","bottom":"Bas","left":"Gauche","pixels":"px","help":"Entrez des valeurs en pixels (positives ou négatives) pour ajuster le recadrage et le remplissage"},"alignment":{"left":"Gauche","center":"Centre","right":"Droite"},"common":{"choose_file":"Choisir un Fichier","no_file_chosen":"Aucun fichier sélectionné","entity":"Entité","width":"Largeur","width_description":"Largeur en pourcentage de la carte","none":"Aucun","default":"Par défaut","upload":"Télécharger","url":"URL","url_description":"URL pointant vers l\'image","reset":"Réinitialiser"},"bars":{"title":"Barres de Pourcentage","description":"Ajoute des barres de pourcentage pour afficher des valeurs comme le niveau de carburant, la charge de la batterie ou l\'autonomie. Chaque barre peut afficher une valeur de pourcentage principale avec des étiquettes optionnelles à gauche et à droite.","add":"Ajouter une Nouvelle Barre","duplicate":"Dupliquer la Barre","delete":"Supprimer la Barre","expand":"Développer la Barre","collapse":"Réduire la Barre","bar_prefix":"Barre","no_entity":"Aucune entité sélectionnée","tabs":{"config":"Configuration","colors":"Couleurs","animation":"Animation"},"settings":{"header":"Configuration de la Barre","entity":"Entité de Pourcentage de la Barre","entity_description":"Sélectionne une entité qui renvoie une valeur de pourcentage (0-100). Cela contrôle le niveau de remplissage de la barre.","limit_entity":"Entité de Valeur Limite (optionnel)","limit_entity_description":"Optionnel: Ajoute une ligne indicatrice verticale sur la barre (ex. limite de charge pour batterie de VE).","limit_color":"Couleur de l\'Indicateur de Limite","limit_color_description":"Couleur de la ligne verticale indiquant la position de la limite sur la barre. Les modifications forceront une mise à jour de la carte.","bar_size":"Taille de la Barre","bar_size_description":"Définit l\'épaisseur/hauteur de la barre de progression.","width":"Largeur de la Barre","width_description":"Définit la largeur de la barre en pourcentage de la largeur de la carte.","alignment":"Alignement de l\'Étiquette","alignment_description":"Comment les étiquettes gauche et droite s\'alignent entre elles.","bar_radius":"Rayon de la Barre","bar_radius_description":"Forme des coins de la barre de progression"},"left_side":{"header":"Côté Gauche","toggle_description":"Afficher ou masquer le côté gauche de l\'étiquette de la barre","title":"Titre Gauche","title_description":"Étiquette optionnelle affichée sur le côté gauche sous la barre.","entity":"Entité Gauche","entity_description":"Entité dont la valeur est affichée du côté gauche de la barre.","alignment_description":"Contrôle comment cette étiquette s\'aligne sous la barre.","title_size":"Taille du Titre","value_size":"Taille de la Valeur","hidden_message":"Le côté gauche est masqué"},"right_side":{"header":"Côté Droit","toggle_description":"Afficher ou masquer le côté droit de l\'étiquette de la barre","title":"Titre Droit","title_description":"Étiquette optionnelle affichée sur le côté droit sous la barre.","entity":"Entité Droite","entity_description":"Entité dont la valeur est affichée du côté droit de la barre.","alignment_description":"Contrôle comment cette étiquette s\'aligne sous la barre.","title_size":"Taille du Titre","value_size":"Taille de la Valeur","hidden_message":"Le côté droit est masqué"},"colors":{"header":"Couleurs","bar_color":"Couleur de la Barre","background_color":"Couleur d\'Arrière-plan","border_color":"Couleur de Bordure","limit_indicator_color":"Couleur de l\'Indicateur de Limite","left_title_color":"Couleur du Titre Gauche","left_value_color":"Couleur de la Valeur Gauche","right_title_color":"Couleur du Titre Droit","right_value_color":"Couleur de la Valeur Droite","reset_color":"Réinitialiser la couleur par défaut"},"gradient":{"header":"Mode Dégradé","toggle":"Utiliser un Dégradé","toggle_description":"Utilise un dégradé pour la barre de progression au lieu d\'une couleur unique","display_mode":"Mode d\'Affichage du Dégradé","display_mode_full":"Complet","display_mode_value_based":"Basé sur la Valeur","display_mode_description":"Complet: Affiche tout le dégradé. Basé sur la Valeur: Affiche le dégradé jusqu\'à la valeur actuelle.","editor_header":"Éditeur de Dégradé","add_stop":"Ajouter un Point"},"animation":{"header":"Animation d\'Action","description":"Ajoute des animations à la barre lorsqu\'une entité spécifique atteint un état spécifique. Parfait pour afficher les états de charge, les états d\'alarme et plus encore.","pro_tip":"Astuce Pro: Pour des animations \'toujours actives\', sélectionne un type d\'animation mais laisse les champs d\'entité et d\'état vides. Essaie les animations \'Bulles\' et \'Remplissage\'!","entity":"Entité d\'Animation","entity_description":"Entité qui déclenche l\'animation lorsqu\'elle correspond à l\'état spécifié","state":"État de l\'Entité","state_description":"Lorsque l\'état de l\'entité correspond à cette valeur, l\'animation sera déclenchée","type":"Type d\'Animation","type_description":"L\'effet d\'animation à afficher lorsque l\'état de l\'entité correspond","select_entity_prompt":"Sélectionnez une Entité et saisissez l\'état qui déclenchera l\'animation (exemples : \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Fine","regular":"Normale","thick":"Épaisse","thiccc":"Très Épaisse"},"bar_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"},"bar_alignments":{"space-between":"Espace Entre","flex-start":"Gauche","center":"Centre","flex-end":"Droite"},"animation_types":{"none":"Aucune","charging-lines":"Charge (Lignes Diagonales)","pulse":"Pulsation","blinking":"Clignotement","bouncing":"Rebond","glow":"Lueur","rainbow":"Arc-en-ciel","bubbles":"Bulles","fill":"Remplissage"},"bar_radius":{"round":"Arrondi","square":"Carré","rounded-square":"Carré Arrondi"}},"icons":{"title":"Icônes de la Carte","description":"Ajoute des rangées d\'icônes pour afficher plusieurs icônes sur ta carte. Chaque rangée peut être configurée avec différents paramètres. Note: Les rangées d\'icônes et l\'ordre des sections peuvent être réorganisés dans l\'onglet Personnaliser.","add_row":"Ajouter une Rangée d\'Icônes","duplicate_row":"Dupliquer la Rangée","delete_row":"Supprimer la Rangée","expand_row":"Développer la Rangée","collapse_row":"Réduire la Rangée","no_row":"Aucune rangée d\'icônes n\'a été ajoutée","row_prefix":"Rangée","icon_prefix":"Icône","row_settings":{"header":"Configuration de la Rangée","width":"Largeur de la Rangée","width_description":"Largeur de la rangée en pourcentage de la largeur de la carte","alignment":"Alignement de la Rangée","alignment_description":"Comment les icônes sont alignées dans cette rangée","spacing":"Espacement des Icônes","spacing_description":"Quantité d\'espace entre les icônes dans cette rangée"},"add_icon":"Ajouter une Icône","duplicate_icon":"Dupliquer l\'Icône","delete_icon":"Supprimer l\'Icône","expand_icon":"Développer l\'Icône","collapse_icon":"Réduire l\'Icône","no_icon":"Aucune icône sélectionnée","icon_settings":{"header":"Configuration de l\'Icône","entity":"Entité","entity_description":"Entité affichée avec cette icône","icon":"Icône","icon_description":"Sélectionne une icône ou saisis une icône personnalisée","name":"Nom","name_description":"Nom personnalisé affiché sous l\'icône (utilise le nom de l\'entité par défaut si non spécifié)","show_name":"Afficher le Nom","show_name_description":"Affiche le texte du nom sous l\'icône","show_state":"Afficher l\'État","show_state_description":"Affiche l\'état de l\'entité sous l\'icône","show_units":"Afficher les Unités","show_units_description":"Inclut les unités lors de l\'affichage de l\'état","text_position":"Position du Texte","text_position_description":"Où le texte du nom et de l\'état est positionné par rapport à l\'icône","click_action":"Action au Clic","service":"Service","service_description":"Service à appeler (ex. light.turn_on)","service_data":"Données du Service (JSON)","service_data_description":"Données JSON envoyées avec l\'appel de service","action":"Action (JSON/Service)","action_description":"Configuration avancée d\'action (voir documentation)","navigation_path":"Chemin de Navigation","navigation_path_description":"Chemin vers lequel naviguer (ex. /lovelace/dashboard)","url":"URL","url_description":"URL à ouvrir dans un nouvel onglet"},"icon_appearance":{"header":"Apparence de l\'Icône","icon":"Spécifier l\'Icône","general":"Apparence Générale","active":"État Actif","inactive":"État Inactif","state_conditions":"Conditions d\'État","advanced":"Configuration Avancée","icon_size":"Taille de l\'Icône","icon_size_description":"Taille de l\'icône en pixels","text_size":"Taille du Texte","text_size_description":"Taille du texte du nom/état en pixels","text_alignment":"Alignement du Texte","text_alignment_description":"Comment le texte est aligné sous l\'icône","icon_background":"Arrière-plan de l\'Icône","icon_background_description":"Ajoute une forme d\'arrière-plan derrière l\'icône","text_appearance":"Apparence du Texte","container":{"header":"Apparence du Conteneur","width":"Largeur du Conteneur","width_description":"Définir la largeur du conteneur de l\'icône par rapport à la rangée.","background":"Forme d\'arrière-plan du conteneur","background_description":"Choisir une forme d\'arrière-plan pour l\'ensemble du conteneur de l\'icône.","vertical_alignment":"Alignement Vertical","vertical_alignment_description":"Aligner l\'icône et le texte verticalement dans le conteneur.","container_background_color":"Couleur d\'arrière-plan du conteneur"},"show_when_active":"Afficher l\'Icône Quand Active","show_when_active_description":"Afficher cette icône uniquement lorsqu\'elle est dans un état actif","template_mode":"Mode modèle","template_mode_description":"Utiliser un modèle pour déterminer l\'état actif/inactif.","active_state":"État actif","active_state_description":"Chaîne d\'état qui représente \'actif\'.","inactive_state":"État inactif","inactive_state_description":"Chaîne d\'état qui représente \'inactif\'.","active_icon":"Icône active","inactive_icon":"Icône inactive","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","show_icon_active":"Afficher l\'icône si actif","show_icon_active_description":"Afficher l\'icône lorsque l\'état est actif.","show_icon_inactive":"Afficher l\'icône si inactif","show_icon_inactive_description":"Afficher l\'icône lorsque l\'état est inactif.","active_icon_color":"Active Icon Color","inactive_icon_color":"Inactive Icon Color","active_name_color":"Active Name Color","inactive_name_color":"Inactive Name Color","active_state_color":"Active State Color","inactive_state_color":"Inactive State Color"},"tabs":{"general":"Général","appearance":"Apparence","states":"États","active_state":"État Actif","inactive_state":"État Inactif"},"alignments":{"flex-start":"Gauche","center":"Centre","flex-end":"Droite","space-between":"Espace Entre","space-around":"Espace Autour","space-evenly":"Espace Uniforme"},"vertical_alignments":{"flex-start":"Haut","center":"Milieu","flex-end":"Bas"},"spacing":{"none":"Aucun","small":"Petit","medium":"Moyen","large":"Grand"},"text_positions":{"below":"Sous l\'Icône","beside":"À Côté de l\'Icône","none":"Sans Texte","top":"En Haut","left":"À Gauche","right":"À Droite"},"reset":{"size":"Réinitialiser la taille par défaut","color":"Réinitialiser la couleur","all":"Réinitialiser les valeurs par défaut"},"click_actions":{"toggle":"Basculer l\'Entité","more-info":"Afficher Plus d\'Informations","navigate":"Naviguer vers un Chemin","url":"Ouvrir l\'URL","call-service":"Appeler un Service","perform-action":"Effectuer une Action","location-map":"Afficher la Carte de Localisation","assist":"Assistant Vocal","none":"Aucune Action","descriptions":{"toggle":"Bascule l\'état de l\'entité.","more-info":"Ouvre la boîte de dialogue avec des informations supplémentaires pour l\'entité.","navigate":"Navigue vers le chemin Lovelace spécifié.","url":"Ouvre l\'URL spécifiée dans un nouvel onglet.","call-service":"Appelle le service Home Assistant spécifié.","perform-action":"Effectue une action personnalisée (voir documentation).","location-map":"Affiche l\'entité sur une carte.","assist":"Ouvre l\'assistant vocal de Home Assistant.","none":"Aucune action ne sera effectuée."}},"backgrounds":{"none":"Aucun","circle":"Cercle","square":"Carré","rounded_square":"Carré Arrondi"},"container_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"},"row_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"}},"customize":{"layout":{"title":"Style de Mise en Page","description":"Choisis entre une mise en page à colonne unique ou double pour la carte","header":"Configuration de la Mise en Page"},"layout_types":{"single":"Colonne Unique","double":"Colonne Double"},"sections":{"header":"Sections de la Carte","arrangement_header":"Disposition des Sections","arrangement_desc_base":"Glisse et dépose les sections pour organiser leur ordre dans la carte.","arrangement_desc_single_extra":"Toutes les sections seront affichées dans une colonne unique.","arrangement_desc_double_extra":"Dans une mise en page à double colonne, tu peux placer n\'importe quelle section dans la colonne gauche ou droite."},"section_labels":{"title":"Titre","image":"Image du Véhicule","info":"Informations du Véhicule"},"actions":{"collapse_margins":"Réduire les Marges","expand_margins":"Étendre les Marges"},"margins":{"top":"Marge Supérieure","bottom":"Marge Inférieure"},"columns":{"left":"Colonne Gauche","right":"Colonne Droite","empty":"Dépose les sections ici"},"css":{"header":"CSS Global","description":"Entre des règles CSS personnalisées ici pour remplacer le style par défaut de la carte. Ces règles seront appliquées directement à la carte. Utilise avec précaution.","label":"CSS Personnalisé","input_description":"Entre tes règles CSS personnalisées ici."}},"backgrounds":{"none":"Aucun","circle":"Cercle","square":"Carré","rounded_square":"Carré Arrondi"},"container_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"},"row_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Développé par","discord_button":"Rejoins Notre Discord","github_button":"Visite Notre Github","docs_button":"Voir Notre Documentation","support_title":"Soutiens Ultra Vehicle Card","support_para":"Tes dons généreux stimulent le développement de fonctionnalités incroyables pour cette carte ! Sans le soutien d\'utilisateurs comme toi, l\'innovation continue ne serait pas possible.","donate_button":"FAIRE UN DON (PAYPAL)"}}');var Ue=a.t(Ne,2);const Me=JSON.parse('{"editor":{"tabs":{"settings":"Impostazioni","bars":"Barre","icons":"Icone","customize":"Personalizza","about":"Informazioni"},"card_settings":{"title":"Titolo della Scheda","title_alignment":"Allineamento del Titolo","title_size":"Dimensione del Titolo","title_description":"Titolo visualizzato nella parte superiore della scheda (opzionale)","title_alignment_description":"Come viene allineato il titolo della scheda","title_size_description":"Dimensione del titolo della scheda in pixel","format_entities":"Formatta i Valori delle Entità","format_entities_description":"Attiva la formattazione aggiuntiva dei valori delle entità (aggiunge virgole, converte unità, ecc.)","show_units":"Mostra Unità","show_units_description":"Mostra le unità di misura accanto ai valori"},"vehicle_info":{"title":"Informazioni sul Veicolo","location":{"title":"Entità Posizione","description":"Seleziona l\'entità che mostra la posizione attuale del veicolo.","show":"Mostra Posizione","show_description":"Mostra la posizione del veicolo"},"mileage":{"title":"Entità Chilometraggio","description":"Seleziona l\'entità che rappresenta il chilometraggio totale o il contachilometri del veicolo.","show":"Mostra Chilometraggio","show_description":"Mostra il chilometraggio del veicolo"},"car_state":{"title":"Entità Stato del Veicolo","description":"Seleziona l\'entità che rappresenta lo stato attuale del veicolo (es. parcheggiato, in movimento, in carica).","show":"Mostra Stato del Veicolo","show_description":"Mostra lo stato del veicolo"}},"images":{"vehicle":{"title":"Immagine del Veicolo","description":"Configura l\'immagine principale visualizzata per il veicolo.","type":"Tipo di Immagine del Veicolo","width":"Larghezza dell\'Immagine","crop":"Ritaglia Immagine","entity":"Entità Immagine","entity_description":"Entità che fornisce l\'URL dell\'immagine"},"action":{"title":"Immagine di Azione","description":"Mostra opzionalmente un\'immagine diversa quando un\'entità raggiunge un determinato stato (es. mostra un\'immagine di ricarica quando l\'auto è collegata).","type":"Tipo di Immagine di Azione","width":"Larghezza dell\'Immagine","crop":"Ritaglia Immagine","entity":"Entità di Azione","entity_description":"Entità che attiva l\'immagine di azione","state":"Stato di Azione","state_description":"Valore dello stato che attiva l\'immagine di azione"}},"crop":{"title":"Ritaglio Immagine","top":"Alto","right":"Destra","bottom":"Basso","left":"Sinistra","pixels":"px","help":"Inserisci valori in pixel (positivi o negativi) per regolare il ritaglio e il riempimento"},"alignment":{"left":"Sinistra","center":"Centro","right":"Destra"},"common":{"choose_file":"Scegli File","no_file_chosen":"Nessun file selezionato","entity":"Entità","width":"Larghezza","width_description":"Larghezza in percentuale della scheda","none":"Nessuno","default":"Predefinito","upload":"Carica","url":"URL","url_description":"URL che punta all\'immagine","reset":"Ripristina"},"bars":{"title":"Barre Percentuali","description":"Aggiungi barre percentuali per visualizzare valori come livello carburante, carica della batteria o autonomia. Ogni barra può mostrare un valore percentuale principale con etichette opzionali a sinistra e destra.","add":"Aggiungi Nuova Barra","duplicate":"Duplica Barra","delete":"Elimina Barra","expand":"Espandi Barra","collapse":"Comprimi Barra","bar_prefix":"Barra","no_entity":"Nessuna entità selezionata","tabs":{"config":"Configurazione","colors":"Colori","animation":"Animazione"},"settings":{"header":"Impostazioni Barra","entity":"Entità Percentuale Barra","entity_description":"Seleziona un\'entità che restituisce un valore percentuale (0-100). Questo controlla il livello di riempimento della barra.","limit_entity":"Entità Valore Limite (opzionale)","limit_entity_description":"Opzionale: Aggiungi una linea indicatrice verticale sulla barra (es. limite di ricarica per batteria VE).","limit_color":"Colore Indicatore Limite","limit_color_description":"Colore della linea verticale che indica la posizione del limite sulla barra. Le modifiche forceranno un aggiornamento della scheda.","bar_size":"Dimensione Barra","bar_size_description":"Definisce lo spessore/altezza della barra di avanzamento.","width":"Larghezza Barra","width_description":"Definisce la larghezza della barra in percentuale della larghezza della scheda.","alignment":"Allineamento Etichetta","alignment_description":"Come le etichette sinistra e destra si allineano tra loro.","bar_radius":"Raggio della Barra","bar_radius_description":"Forma degli angoli della barra di avanzamento"},"left_side":{"header":"Lato Sinistro","toggle_description":"Mostra o nascondi il lato sinistro dell\'etichetta della barra","title":"Titolo Sinistro","title_description":"Etichetta opzionale visualizzata sul lato sinistro sotto la barra.","entity":"Entità Sinistra","entity_description":"Entità il cui valore viene visualizzato sul lato sinistro della barra.","alignment_description":"Controlla come questa etichetta è allineata sotto la barra.","title_size":"Dimensione Titolo","value_size":"Dimensione Valore","hidden_message":"Il lato sinistro è nascosto"},"right_side":{"header":"Lato Destro","toggle_description":"Mostra o nascondi il lato destro dell\'etichetta della barra","title":"Titolo Destro","title_description":"Etichetta opzionale visualizzata sul lato destro sotto la barra.","entity":"Entità Destra","entity_description":"Entità il cui valore viene visualizzato sul lato destro della barra.","alignment_description":"Controlla come questa etichetta è allineata sotto la barra.","title_size":"Dimensione Titolo","value_size":"Dimensione Valore","hidden_message":"Il lato destro è nascosto"},"colors":{"header":"Colori","bar_color":"Colore Barra","background_color":"Colore Sfondo","border_color":"Colore Bordo","limit_indicator_color":"Colore Indicatore Limite","left_title_color":"Colore Titolo Sinistro","left_value_color":"Colore Valore Sinistro","right_title_color":"Colore Titolo Destro","right_value_color":"Colore Valore Destro","reset_color":"Ripristina colore predefinito"},"gradient":{"header":"Modalità Gradiente","toggle":"Usa Gradiente","toggle_description":"Usa un gradiente per la barra di avanzamento invece di un colore unico","display_mode":"Modalità Visualizzazione Gradiente","display_mode_full":"Completo","display_mode_value_based":"Basato sul Valore","display_mode_description":"Completo: Mostra l\'intero gradiente. Basato sul Valore: Mostra il gradiente fino al valore attuale.","editor_header":"Editor Gradiente","add_stop":"Aggiungi Punto"},"animation":{"header":"Animazione di Azione","description":"Aggiungi animazioni alla barra quando un\'entità specifica raggiunge uno stato specifico. Perfetto per mostrare stati di ricarica, stati di allarme e altro ancora.","pro_tip":"Suggerimento Pro: Per animazioni \'sempre attive\', seleziona un tipo di animazione ma lascia vuoti i campi entità e stato. Prova le animazioni \'Bolle\' e \'Riempimento\'!","entity":"Entità Animazione","entity_description":"Entità che attiva l\'animazione quando corrisponde allo stato specificato","state":"Stato Entità","state_description":"Quando lo stato dell\'entità corrisponde a questo valore, l\'animazione verrà attivata","type":"Tipo di Animazione","type_description":"L\'effetto di animazione da visualizzare quando lo stato dell\'entità corrisponde","select_entity_prompt":"Seleziona un\'Entità e inserisci lo stato che vuoi per attivare l\'animazione (esempi: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Sottile","regular":"Normale","thick":"Spessa","thiccc":"Molto Spessa"},"bar_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"},"bar_alignments":{"space-between":"Spazio Tra","flex-start":"Sinistra","center":"Centro","flex-end":"Destra"},"animation_types":{"none":"Nessuna","charging-lines":"Ricarica (Linee Diagonali)","pulse":"Pulsazione","blinking":"Lampeggiamento","bouncing":"Rimbalzo","glow":"Bagliore","rainbow":"Arcobaleno","bubbles":"Bolle","fill":"Riempimento"},"bar_radius":{"round":"Rotondo","square":"Quadrato","rounded-square":"Quadrato Arrotondato"}},"icons":{"title":"Icone della Scheda","description":"Aggiungi righe di icone per visualizzare più icone sulla tua scheda. Ogni riga può essere configurata con impostazioni diverse. Nota: Le righe di icone e l\'ordine delle sezioni possono essere riorganizzati nella scheda Personalizza.","add_row":"Aggiungi Riga di Icone","duplicate_row":"Duplica Riga","delete_row":"Elimina Riga","expand_row":"Espandi Riga","collapse_row":"Comprimi Riga","no_row":"Nessuna riga di icone è stata aggiunta","row_prefix":"Riga","icon_prefix":"Icona","row_settings":{"header":"Impostazioni Riga","width":"Larghezza Riga","width_description":"Larghezza della riga in percentuale della larghezza della scheda","alignment":"Allineamento Riga","alignment_description":"Come le icone sono allineate in questa riga","spacing":"Spaziatura Icone","spacing_description":"Quantità di spazio tra le icone in questa riga"},"add_icon":"Aggiungi Icona","duplicate_icon":"Duplica Icona","delete_icon":"Elimina Icona","expand_icon":"Espandi Icona","collapse_icon":"Comprimi Icona","no_icon":"Nessuna icona selezionata","icon_settings":{"header":"Impostazioni Icona","entity":"Entità","entity_description":"Entità visualizzata con questa icona","icon":"Icona","icon_description":"Seleziona un\'icona o inserisci un\'icona personalizzata","name":"Nome","name_description":"Nome personalizzato visualizzato sotto l\'icona (usa il nome dell\'entità di default se non specificato)","show_name":"Mostra Nome","show_name_description":"Mostra il testo del nome sotto l\'icona","show_state":"Mostra Stato","show_state_description":"Mostra lo stato dell\'entità sotto l\'icona","show_units":"Mostra Unità","show_units_description":"Includi le unità quando mostri lo stato","text_position":"Posizione Testo","text_position_description":"Dove il testo del nome e dello stato è posizionato rispetto all\'icona","click_action":"Azione al Click","service":"Servizio","service_description":"Servizio da chiamare (es. light.turn_on)","service_data":"Dati Servizio (JSON)","service_data_description":"Dati JSON inviati con la chiamata al servizio","action":"Azione (JSON/Servizio)","action_description":"Configurazione avanzata azione (vedi documentazione)","navigation_path":"Percorso di Navigazione","navigation_path_description":"Percorso verso cui navigare (es. /lovelace/dashboard)","url":"URL","url_description":"URL da aprire in una nuova scheda"},"icon_appearance":{"header":"Aspetto Icona","icon":"Specifica Icona","general":"Aspetto Generale","active":"Stato Attivo","inactive":"Stato Inattivo","state_conditions":"Condizioni di Stato","advanced":"Impostazioni Avanzate","icon_size":"Dimensione Icona","icon_size_description":"Dimensione dell\'icona in pixel","text_size":"Dimensione Testo","text_size_description":"Dimensione del testo nome/stato in pixel","text_alignment":"Allineamento Testo","text_alignment_description":"Come il testo è allineato sotto l\'icona","icon_background":"Sfondo Icona","icon_background_description":"Aggiungi una forma di sfondo dietro l\'icona","text_appearance":"Aspetto Testo","container":{"header":"Aspetto Contenitore","width":"Larghezza Contenitore","width_description":"Imposta la larghezza del contenitore dell\'icona rispetto alla riga.","background":"Forma Sfondo Contenitore","background_description":"Scegli una forma di sfondo per l\'intero contenitore dell\'icona.","container_background_color":"Colore Sfondo Contenitore","vertical_alignment":"Vertical Alignment","vertical_alignment_description":"Align the icon and text vertically within the container."},"show_when_active":"Mostra Icona Quando Attiva","show_when_active_description":"Mostra questa icona solo quando è in uno stato attivo","template_mode":"Modalità Template","template_mode_description":"Usa un template per determinare lo stato attivo/inattivo.","active_state":"Stato Attivo","active_state_description":"Stringa di stato che rappresenta \'attivo\'.","inactive_state":"Stato Inattivo","inactive_state_description":"Stringa di stato che rappresenta \'inattivo\'.","active_icon":"Icona Attiva","inactive_icon":"Icona Inattiva","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","active_icon_color":"Active Icon Color","inactive_icon_color":"Inactive Icon Color","active_name_color":"Active Name Color","inactive_name_color":"Inactive Name Color","active_state_color":"Active State Color","inactive_state_color":"Inactive State Color","show_icon_active":"Show Icon When Active","show_icon_active_description":"Display the icon when the state is active.","show_icon_inactive":"Show Icon When Inactive","show_icon_inactive_description":"Display the icon when the state is inactive."},"tabs":{"general":"Generale","appearance":"Aspetto","states":"Stati","active_state":"Stato Attivo","inactive_state":"Stato Inattivo"},"alignments":{"flex-start":"Sinistra","center":"Centro","flex-end":"Destra","space-between":"Spazio Tra","space-around":"Spazio Attorno","space-evenly":"Spazio Uniforme"},"vertical_alignments":{"flex-start":"Alto","center":"Medio","flex-end":"Basso"},"spacing":{"none":"Nessuno","small":"Piccolo","medium":"Medio","large":"Grande"},"text_positions":{"below":"Sotto l\'Icona","beside":"Accanto all\'Icona","none":"Nessun Testo","top":"In Alto","left":"A Sinistra","right":"A Destra"},"reset":{"size":"Ripristina dimensione predefinita","color":"Ripristina colore predefinito","all":"Ripristina valori predefiniti"},"click_actions":{"toggle":"Attiva/Disattiva Entità","more-info":"Mostra Più Informazioni","navigate":"Naviga a un Percorso","url":"Apri URL","call-service":"Chiama Servizio","perform-action":"Esegui Azione","location-map":"Mostra Mappa Posizione","assist":"Assistente Vocale","none":"Nessuna Azione","descriptions":{"toggle":"Attiva o disattiva lo stato dell\'entità.","more-info":"Apre la finestra di dialogo con informazioni aggiuntive per l\'entità.","navigate":"Naviga al percorso Lovelace specificato.","url":"Apre l\'URL specificato in una nuova scheda.","call-service":"Chiama il servizio Home Assistant specificato.","perform-action":"Esegue un\'azione personalizzata (vedi documentazione).","location-map":"Mostra l\'entità su una mappa.","assist":"Apre l\'assistente vocale di Home Assistant.","none":"Nessuna azione verrà eseguita."}},"backgrounds":{"none":"Nessuno","circle":"Cerchio","square":"Quadrato","rounded_square":"Quadrato Arrotondato"},"container_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"},"row_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"}},"customize":{"layout":{"title":"Stile Layout","description":"Scegli tra un layout a colonna singola o doppia per la scheda","header":"Impostazioni Layout"},"layout_types":{"single":"Colonna Singola","double":"Colonna Doppia"},"sections":{"header":"Sezioni Scheda","arrangement_header":"Disposizione Sezioni","arrangement_desc_base":"Trascina e rilascia le sezioni per organizzare il loro ordine nella scheda.","arrangement_desc_single_extra":"Tutte le sezioni verranno visualizzate in una colonna singola.","arrangement_desc_double_extra":"In un layout a doppia colonna, puoi posizionare qualsiasi sezione nella colonna sinistra o destra."},"section_labels":{"title":"Titolo","image":"Immagine Veicolo","info":"Informazioni sul Veicolo"},"actions":{"collapse_margins":"Riduci Margini","expand_margins":"Espandi Margini"},"margins":{"top":"Margine Superiore","bottom":"Margine Inferiore"},"columns":{"left":"Colonna Sinistra","right":"Colonna Destra","empty":"Rilascia le sezioni qui"},"css":{"header":"CSS Globale","description":"Inserisci regole CSS personalizzate qui per sovrascrivere lo stile predefinito della scheda. Queste regole verranno applicate direttamente alla scheda. Usa con cautela.","label":"CSS Personalizzato","input_description":"Inserisci le tue regole CSS personalizzate qui."}},"backgrounds":{"none":"Nessuno","circle":"Cerchio","square":"Quadrato","rounded_square":"Quadrato Arrotondato"},"container_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"},"row_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Sviluppato da","discord_button":"Unisciti al Nostro Discord","github_button":"Visita il Nostro Github","docs_button":"Visualizza la Nostra Documentazione","support_title":"Supporta Ultra Vehicle Card","support_para":"Le tue generose donazioni alimentano lo sviluppo di funzionalità incredibili per questa scheda! Senza il supporto di utenti come te, l\'innovazione continua non sarebbe possibile.","donate_button":"DONA (PAYPAL)"}}');var Fe=a.t(Me,2);const qe=JSON.parse('{"editor":{"tabs":{"settings":"Indstillinger","bars":"Bjælker","icons":"Ikoner","customize":"Tilpas","about":"Om"},"card_settings":{"title":"Korttitel","title_alignment":"Titeljustering","title_size":"Titelstørrelse","title_description":"Titel der vises øverst på kortet (valgfrit)","title_alignment_description":"Hvordan korttitlen justeres","title_size_description":"Størrelsen på korttitlen i pixels","format_entities":"Formater Enhedsværdier","format_entities_description":"Aktivér yderligere formatering af enhedsværdier (tilføj kommaer, konverter enheder osv.)","show_units":"Vis Enheder","show_units_description":"Vis måleenheder ved siden af værdier"},"vehicle_info":{"title":"Køretøjsinformation","location":{"title":"Placeringsenhed","description":"Vælg den enhed, der viser køretøjets aktuelle placering.","show":"Vis Placering","show_description":"Vis køretøjets placering"},"mileage":{"title":"Kilometerenhed","description":"Vælg den enhed, der repræsenterer køretøjets samlede kilometer eller kilometertæller.","show":"Vis Kilometertal","show_description":"Vis køretøjets kilometertal"},"car_state":{"title":"Køretøjstilstandsenhed","description":"Vælg den enhed, der repræsenterer køretøjets aktuelle tilstand (f.eks. parkeret, kørende, opladning).","show":"Vis Køretøjstilstand","show_description":"Vis køretøjets tilstand"}},"images":{"vehicle":{"title":"Køretøjsbillede","description":"Konfigurer det primære billede, der vises for køretøjet.","type":"Køretøjsbilledetype","width":"Billedbredde","crop":"Beskær Billede","entity":"Billedenhed","entity_description":"Enhed, der leverer billed-URL\'en"},"action":{"title":"Handlingsbillede","description":"Viser valgfrit et andet billede, når en enhed når en bestemt tilstand (f.eks. vis et opladningsbillede, når bilen er tilsluttet).","type":"Handlingsbilledetype","width":"Billedbredde","crop":"Beskær Billede","entity":"Handlingsenhed","entity_description":"Enhed, der udløser handlingsbilledet","state":"Handlingstilstand","state_description":"Tilstandsværdi, der udløser handlingsbilledet"}},"crop":{"title":"Billedbeskæring","top":"Top","right":"Højre","bottom":"Bund","left":"Venstre","pixels":"px","help":"Indtast værdier i pixels (positive eller negative) for at justere beskæring og udfyldning"},"alignment":{"left":"Venstre","center":"Center","right":"Højre"},"common":{"choose_file":"Vælg Fil","no_file_chosen":"Ingen fil valgt","entity":"Enhed","width":"Bredde","width_description":"Bredde i procent af kortet","none":"Ingen","default":"Standard","upload":"Upload","url":"URL","url_description":"URL, der peger på billedet","reset":"Nulstil"},"bars":{"title":"Procentbjælker","description":"Tilføj procentbjælker for at vise værdier som brændstofniveau, batteriopladning eller rækkevidde. Hver bjælke kan vise en primær procentværdi med valgfrie etiketter til venstre og højre.","add":"Tilføj Ny Bjælke","duplicate":"Dupliker Bjælke","delete":"Slet Bjælke","expand":"Udvid Bjælke","collapse":"Sammenklap Bjælke","bar_prefix":"Bjælke","no_entity":"Ingen enhed valgt","tabs":{"config":"Konfiguration","colors":"Farver","animation":"Animation"},"settings":{"header":"Bjælkeindstillinger","entity":"Bjælkeprocentenhed","entity_description":"Vælg en enhed, der returnerer en procentværdi (0-100). Dette styrer bjælkens fyldningsniveau.","limit_entity":"Grænseenhed (valgfrit)","limit_entity_description":"Valgfrit: Tilføj en lodret indikatorlinje på bjælken (f.eks. opladningsgrænse for elbilbatteri).","limit_color":"Grænseindikatorfarve","limit_color_description":"Farven på den lodrette linje, der indikerer grænsepositionen på bjælken. Ændringer vil tvinge en kortopdatering.","bar_size":"Bjælkestørrelse","bar_size_description":"Indstil tykkelsen/højden af fremskridtsbjælken.","width":"Bjælkebredde","width_description":"Indstil bjælkens bredde som procent af kortets bredde.","alignment":"Etiketjustering","alignment_description":"Hvordan venstre og højre etiketter justeres i forhold til hinanden.","bar_radius":"Bjælkeradius","bar_radius_description":"Form på hjørnerne af fremskridtsbjælken"},"left_side":{"header":"Venstre Side","toggle_description":"Vis eller skjul den venstre side af bjælkeetiketten","title":"Venstre Titel","title_description":"Valgfri etiket, der vises på venstre side under bjælken.","entity":"Venstre Enhed","entity_description":"Enhed, hvis værdi vises på venstre side af bjælken.","alignment_description":"Styrer, hvordan denne etiket justeres under bjælken.","title_size":"Titelstørrelse","value_size":"Værdistørrelse","hidden_message":"Venstre side er skjult"},"right_side":{"header":"Højre Side","toggle_description":"Vis eller skjul den højre side af bjælkeetiketten","title":"Højre Titel","title_description":"Valgfri etiket, der vises på højre side under bjælken.","entity":"Højre Enhed","entity_description":"Enhed, hvis værdi vises på højre side af bjælken.","alignment_description":"Styrer, hvordan denne etiket justeres under bjælken.","title_size":"Titelstørrelse","value_size":"Værdistørrelse","hidden_message":"Højre side er skjult"},"colors":{"header":"Farver","bar_color":"Bjælkefarve","background_color":"Baggrundsfarve","border_color":"Kantfarve","limit_indicator_color":"Grænseindikatorfarve","left_title_color":"Venstre Titelfarve","left_value_color":"Venstre Værdifarve","right_title_color":"Højre Titelfarve","right_value_color":"Højre Værdifarve","reset_color":"Nulstil til standardfarve"},"gradient":{"header":"Gradient-tilstand","toggle":"Brug Gradient","toggle_description":"Brug en gradient for fremskridtsbjælken i stedet for en enkelt farve","display_mode":"Gradient Visningstilstand","display_mode_full":"Fuld","display_mode_value_based":"Værdibaseret","display_mode_description":"Fuld: Viser hele gradienten. Værdibaseret: Viser gradienten op til den aktuelle værdi.","editor_header":"Gradient-editor","add_stop":"Tilføj Stop"},"animation":{"header":"Handlingsanimation","description":"Tilføj animationer til bjælken, når en specifik enhed når en specifik tilstand. Perfekt til at vise opladningstilstand, alarmtilstande og mere.","pro_tip":"Pro-tip: For \'altid aktive\' animationer, skal du vælge en animationstype, men lade enheds- og tilstandsfelterne være tomme. Prøv \'Bobler\' og \'Fyld\' animationer!","entity":"Animationsenhed","entity_description":"Enhed, der udløser animation, når den matcher den angivne tilstand","state":"Enhedstilstand","state_description":"Når enhedstilstanden matcher denne værdi, vil animationen blive udløst","type":"Animationstype","type_description":"Animationseffekten, der vises, når enhedens tilstand matcher","select_entity_prompt":"Vælg en Enhed og indtast den tilstand, du vil bruge til at udløse animationen (eksempler: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Tynd","regular":"Normal","thick":"Tyk","thiccc":"Meget Tyk"},"bar_widths":{"25":"25% Bredde","50":"50% Bredde","75":"75% Bredde","100":"100% (Fuld Bredde)"},"bar_alignments":{"space-between":"Mellemrum Imellem","flex-start":"Venstre","center":"Center","flex-end":"Højre"},"animation_types":{"none":"Ingen","charging-lines":"Opladning (Diagonale Linjer)","pulse":"Pulserende","blinking":"Blinkende","bouncing":"Hoppende","glow":"Glødende","rainbow":"Regnbue","bubbles":"Bobler","fill":"Fyld"},"bar_radius":{"round":"Rund","square":"Firkantet","rounded-square":"Afrundet Firkant"}},"icons":{"title":"Kortikoner","description":"Tilføj ikonrækker for at vise flere ikoner på dit kort. Hver række kan konfigureres med forskellige indstillinger. Bemærk: Ikonrækker og sektionsrækkefølge kan omarrangeres under Tilpas-fanen.","add_row":"Tilføj Ikonrække","duplicate_row":"Dupliker Række","delete_row":"Slet Række","expand_row":"Udvid Række","collapse_row":"Sammenklap Række","no_row":"Ingen ikonrækker tilføjet","row_prefix":"Række","icon_prefix":"Ikon","row_settings":{"header":"Rækkeindstillinger","width":"Rækkebredde","width_description":"Rækkens bredde i procent af kortets bredde","alignment":"Rækkejustering","alignment_description":"Hvordan ikoner justeres i denne række","spacing":"Ikonafstand","spacing_description":"Mængden af plads mellem ikoner i denne række"},"add_icon":"Tilføj Ikon","duplicate_icon":"Dupliker Ikon","delete_icon":"Slet Ikon","expand_icon":"Udvid Ikon","collapse_icon":"Sammenklap Ikon","no_icon":"Ingen ikon valgt","icon_settings":{"header":"Ikonindstillinger","entity":"Enhed","entity_description":"Enhed vist med dette ikon","icon":"Ikon","icon_description":"Vælg et ikon eller indtast et tilpasset","name":"Navn","name_description":"Tilpasset navn, der vises under ikonet (bruger som standard enhedsnavnet, hvis ikke angivet)","show_name":"Vis Navn","show_name_description":"Vis navnetekst under ikonet","show_state":"Vis Tilstand","show_state_description":"Vis enhedens tilstand under ikonet","show_units":"Vis Enheder","show_units_description":"Inkluder enheder, når tilstanden vises","text_position":"Tekstplacering","text_position_description":"Hvor navn og tilstandstekst placeres i forhold til ikonet","click_action":"Klikhandling","service":"Service","service_description":"Service, der skal kaldes (f.eks. light.turn_on)","service_data":"Servicedata (JSON)","service_data_description":"JSON-data sendt med servicekaldet","action":"Handling (JSON/Service)","action_description":"Avanceret handlingskonfiguration (se dokumentation)","navigation_path":"Navigationssti","navigation_path_description":"Sti at navigere til (f.eks. /lovelace/dashboard)","url":"URL","url_description":"URL, der åbnes i en ny fane"},"icon_appearance":{"header":"Ikonudseende","icon":"Ikonspecifikt","general":"Generel Udseende","active":"Aktiv Tilstand","inactive":"Inaktiv Tilstand","state_conditions":"Tilstandsbetingelser","advanced":"Avancerede Indstillinger","icon_size":"Ikonstørrelse","icon_size_description":"Størrelsen på ikonet i pixels","text_size":"Tekststørrelse","text_size_description":"Størrelsen på navn/tilstandstekst i pixels","text_alignment":"Tekstjustering","text_alignment_description":"Hvordan tekst justeres under ikonet","icon_background":"Ikonbaggrund","icon_background_description":"Tilføj en baggrundsform bag ikonet","text_appearance":"Tekstudseende","container":{"header":"Containerudseende","width":"Beholder Bredde","width_description":"Indstil bredden af ikonbeholderen relativt til rækken.","background":"Beholder Baggrundsform","background_description":"Vælg en baggrundsform for hele ikonbeholderen.","vertical_alignment":"Lodret Justering","vertical_alignment_description":"Juster ikon og tekst lodret inden i beholderen.","container_background_color":"Beholder Baggrundsfarve"},"show_when_active":"Vis Ikon Når Aktivt","show_when_active_description":"Vis kun dette ikon, når det er i en aktiv tilstand","template_mode":"Skabelon Tilstand","template_mode_description":"Brug en skabelon til at bestemme den aktive/inaktive tilstand.","active_state":"Aktiv Tilstand","active_state_description":"Tilstandsstreng, der repræsenterer \'aktiv\'.","inactive_state":"Inaktiv Tilstand","inactive_state_description":"Tilstandsstreng, der repræsenterer \'inaktiv\'.","active_icon":"Aktivt Ikon","inactive_icon":"Inaktivt Ikon","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","active_icon_color":"Aktiv Ikonfarve","inactive_icon_color":"Inaktiv Ikonfarve","active_name_color":"Aktiv Navnefarve","inactive_name_color":"Inaktiv Navnefarve","active_state_color":"Aktiv Tilstandsfarve","inactive_state_color":"Inaktiv Tilstandsfarve","show_icon_active":"Vis Ikon Når Aktiv","show_icon_active_description":"Vis ikonet, når tilstanden er aktiv.","show_icon_inactive":"Vis Ikon Når Inaktiv","show_icon_inactive_description":"Vis ikonet, når tilstanden er inaktiv."},"tabs":{"general":"Generelt","appearance":"Udseende","states":"Tilstande","active_state":"Aktiv Tilstand","inactive_state":"Inaktiv Tilstand"},"alignments":{"flex-start":"Venstre","center":"Center","flex-end":"Højre","space-between":"Mellemrum Imellem","space-around":"Mellemrum Omkring","space-evenly":"Lige Mellemrum"},"vertical_alignments":{"flex-start":"Top","center":"Midt","flex-end":"Bund"},"spacing":{"none":"Ingen","small":"Lille","medium":"Medium","large":"Stor"},"text_positions":{"below":"Under Ikonet","beside":"Ved Siden af Ikonet","none":"Ingen Tekst","top":"Top","left":"Venstre","right":"Højre"},"reset":{"size":"Nulstil til standardstørrelse","color":"Nulstil til standardfarve","all":"Nulstil til standardværdier"},"click_actions":{"toggle":"Skift Enhedstilstand","more-info":"Vis Mere Info","navigate":"Naviger til Sti","url":"Åbn URL","call-service":"Kald Service","perform-action":"Udfør Handling","location-map":"Vis Placeringskort","assist":"Stemmeassistent","none":"Ingen Handling","descriptions":{"toggle":"Skifter enhedens tilstand.","more-info":"Åbner mere info-dialogen for enheden.","navigate":"Navigerer til den angivne Lovelace-sti.","url":"Åbner den angivne URL i en ny fane.","call-service":"Kalder den angivne Home Assistant-service.","perform-action":"Udfører en tilpasset handling (se dokumentation).","location-map":"Viser enheden på et kort.","assist":"Åbner Home Assistant-stemmeassistenten.","none":"Ingen handling vil blive udført."}},"backgrounds":{"none":"Ingen","circle":"Cirkel","square":"Kvadrat","rounded_square":"Afrundet Kvadrat"},"container_widths":{"25":"25% Bredde","50":"50% Bredde","75":"75% Bredde","100":"100% (Fuld Bredde)"},"row_widths":{"25":"25% Bredde","50":"50% Bredde","75":"75% Bredde","100":"100% (Fuld Bredde)"}},"customize":{"layout":{"title":"Layoutstil","description":"Vælg mellem enkelt- eller dobbeltkolonnelayout for kortet","header":"Layoutindstillinger"},"layout_types":{"single":"Enkelt Kolonne","double":"Dobbelt Kolonne"},"sections":{"header":"Kortsektioner","arrangement_header":"Sektionsarrangement","arrangement_desc_base":"Træk og slip sektioner for at arrangere deres rækkefølge på kortet.","arrangement_desc_single_extra":"Alle sektioner vil blive vist i en enkelt kolonne.","arrangement_desc_double_extra":"I dobbeltkolonnelayoutet kan du placere enhver sektion i enten venstre eller højre kolonne."},"section_labels":{"title":"Titel","image":"Køretøjsbillede","info":"Køretøjsinfo"},"actions":{"collapse_margins":"Sammenfold Margener","expand_margins":"Udvid Margener"},"margins":{"top":"Topmargen","bottom":"Bundmargen"},"columns":{"left":"Venstre Kolonne","right":"Højre Kolonne","empty":"Slip sektioner her"},"css":{"header":"Global CSS","description":"Indtast tilpassede CSS-regler her for at overskrive kortets standardstil. Disse regler vil blive anvendt direkte på kortet. Brug med forsigtighed.","label":"Tilpasset CSS","input_description":"Indtast dine tilpassede CSS-regler her."}},"backgrounds":{"none":"Ingen","circle":"Cirkel","square":"Kvadrat","rounded_square":"Afrundet Kvadrat"},"container_widths":{"25":"25% Bredde","50":"50% Bredde","75":"75% Bredde","100":"100% (Fuld Bredde)"},"row_widths":{"25":"25% Bredde","50":"50% Bredde","75":"75% Bredde","100":"100% (Fuld Bredde)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Udviklet af","discord_button":"Deltag i Vores Discord","github_button":"Besøg Vores Github","docs_button":"Se Vores Dokumentation","support_title":"Støt Ultra Vehicle Card","support_para":"Dine generøse donationer driver udviklingen af fantastiske funktioner til dette kort! Uden støtte fra brugere som dig ville fortsat innovation ikke være mulig.","donate_button":"DONÉR (PAYPAL)"}}');var He=a.t(qe,2);const Ge=JSON.parse('{"editor":{"tabs":{"settings":"Settings","bars":"Bars","icons":"Icons","customize":"Customise","about":"About"},"card_settings":{"title":"Card Title","title_alignment":"Title Alignment","title_size":"Title Size","title_description":"Title displayed at the top of the card (optional)","title_alignment_description":"How the card title is aligned","title_size_description":"Size of the card title in pixels","format_entities":"Format Entity Values","format_entities_description":"Enable extra formatting of entity values (add commas, convert units, etc)","show_units":"Show Units","show_units_description":"Show measurement units next to values"},"vehicle_info":{"title":"Vehicle Information","location":{"title":"Location Entity","description":"Select the entity that shows the vehicle\'s current location.","show":"Show Location","show_description":"Show the vehicle\'s location"},"mileage":{"title":"Mileage Entity","description":"Select the entity that represents the vehicle\'s total mileage or odometer.","show":"Show Mileage","show_description":"Show the vehicle\'s mileage"},"car_state":{"title":"Vehicle State Entity","description":"Select the entity that represents the vehicle\'s current state (e.g. parked, driving, charging).","show":"Show Vehicle State","show_description":"Show the vehicle\'s state"}},"images":{"vehicle":{"title":"Vehicle Image","description":"Configure the primary image shown for the vehicle.","type":"Vehicle Image Type","width":"Image Width","crop":"Crop Image","entity":"Image Entity","entity_description":"Entity that provides the image URL"},"action":{"title":"Action Image","description":"Optionally display a different image when an entity reaches a certain state (e.g. show a charging image when the car is plugged in).","type":"Action Image Type","width":"Image Width","crop":"Crop Image","entity":"Action Entity","entity_description":"Entity that triggers the action image","state":"Action State","state_description":"State value that triggers the action image"}},"crop":{"title":"Image Cropping","top":"Top","right":"Right","bottom":"Bottom","left":"Left","pixels":"px","help":"Enter values in pixels (positive or negative) to adjust cropping and padding"},"alignment":{"left":"Left","center":"Centre","right":"Right"},"common":{"choose_file":"Choose File","no_file_chosen":"No file chosen","entity":"Entity","width":"Width","width_description":"Width as a percentage of the card","none":"None","default":"Default","upload":"Upload","url":"URL","url_description":"URL pointing to the image","reset":"Reset"},"bars":{"title":"Percentage Bars","description":"Add percentage bars to display values like fuel level, battery charge, or range. Each bar can show a primary percentage value with optional labels on the left and right.","add":"Add New Bar","duplicate":"Duplicate Bar","delete":"Delete Bar","expand":"Expand Bar","collapse":"Collapse Bar","bar_prefix":"Bar","no_entity":"No entity selected","tabs":{"config":"Configuration","colors":"Colours","animation":"Animation"},"settings":{"header":"Bar Settings","entity":"Main Entity","entity_description":"Entity that provides the primary value (0-100) for the progress bar","limit_entity":"Limit Entity","limit_entity_description":"Entity that shows a limit marker on the bar (e.g., charge limit)","limit_color":"Limit Indicator Colour","limit_color_description":"Colour of the limit indicator line","alignment":"Label Alignment","alignment_description":"How to align the labels on the progress bar","bar_size":"Bar Thickness","bar_size_description":"Size/thickness of the progress bar","bar_radius":"Bar Radius","bar_radius_description":"Shape of the progress bar corners","width":"Bar Width","width_description":"Width of the progress bar as a percentage of the available space. Use this to place multiple bars side by side."},"left_side":{"header":"Left Side","toggle_description":"Show or hide the left side of the bar label","title":"Left Title","title_description":"Optional label displayed on the left side below the bar.","entity":"Left Entity","entity_description":"Entity whose value is displayed on the left side of the bar.","alignment_description":"Controls how this label is aligned under the bar.","title_size":"Title Size","value_size":"Value Size","hidden_message":"Left side is hidden"},"right_side":{"header":"Right Side","toggle_description":"Show or hide the right side of the bar label","title":"Right Title","title_description":"Optional label displayed on the right side below the bar.","entity":"Right Entity","entity_description":"Entity whose value is displayed on the right side of the bar.","alignment_description":"Controls how this label is aligned under the bar.","title_size":"Title Size","value_size":"Value Size","hidden_message":"Right side is hidden"},"colors":{"header":"Colours","bar_color":"Bar Colour","background_color":"Background Colour","border_color":"Border Colour","limit_indicator_color":"Limit Indicator Colour","left_title_color":"Left Title Colour","left_value_color":"Left Value Colour","right_title_color":"Right Title Colour","right_value_color":"Right Value Colour","reset_color":"Reset to default colour"},"gradient":{"header":"Gradient Mode","toggle":"Use Gradient","toggle_description":"Use a gradient for the progress bar instead of a single colour","display_mode":"Gradient Display Mode","display_mode_full":"Full","display_mode_value_based":"Value-Based","display_mode_description":"Full: Shows the entire gradient. Value-Based: Shows the gradient up to the current value.","editor_header":"Gradient Editor","add_stop":"Add Stop"},"animation":{"header":"Action Animation","description":"Add animations to the bar when a specific entity reaches a specific state. Perfect for showing charging status, alarm states, and more.","pro_tip":"Pro Tip: For \'always-active\' animations, select an animation type but leave the entity and state fields empty. Try the \'Bubbles\' and \'Fill\' animations!","entity":"Animation Entity","entity_description":"Entity that triggers the animation when it matches the specified state","state":"Entity State","state_description":"When the entity\'s state matches this value, the animation will be triggered","type":"Animation Type","type_description":"The animation effect to display when the entity state matches","select_entity_prompt":"Select an Entity and type in the state you would like to trigger the animation with (examples: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Thin","regular":"Regular","thick":"Thick","thiccc":"Very Thick"},"bar_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"bar_alignments":{"space-between":"Space Between","flex-start":"Left","center":"Centre","flex-end":"Right"},"bar_radius":{"round":"Round","square":"Square","rounded-square":"Rounded Square"},"animation_types":{"none":"None","charging-lines":"Charging (Diagonal Lines)","pulse":"Pulsing","blinking":"Blinking","bouncing":"Bouncing","glow":"Glowing","rainbow":"Rainbow","bubbles":"Bubbles","fill":"Fill"}},"icons":{"title":"Card Icons","description":"Add icon rows to display multiple icons on your card. Each row can be configured with different settings. Note: Icon rows and section order can be rearranged in the Customise tab.","add_row":"Add Icon Row","duplicate_row":"Duplicate Row","delete_row":"Delete Row","expand_row":"Expand Row","collapse_row":"Collapse Row","no_row":"No icon rows added","row_prefix":"Row","icon_prefix":"Icon","row_settings":{"header":"Row Settings","width":"Row Width","width_description":"Width of the row as a percentage of the card\'s width","alignment":"Row Alignment","alignment_description":"How icons are aligned in this row","spacing":"Icon Spacing","spacing_description":"Amount of space between icons in this row"},"add_icon":"Add Icon","duplicate_icon":"Duplicate Icon","delete_icon":"Delete Icon","expand_icon":"Expand Icon","collapse_icon":"Collapse Icon","no_icon":"No icon selected","icon_settings":{"header":"Icon Settings","entity":"Entity","entity_description":"Entity displayed with this icon","icon":"Icon","icon_description":"Select an icon or enter a custom icon","name":"Name","name_description":"Custom name displayed below the icon (uses entity name by default if not specified)","show_name":"Show Name","show_name_description":"Display the name text below the icon","show_state":"Show State","show_state_description":"Display the entity\'s state below the icon","show_units":"Show Units","show_units_description":"Include units when displaying the state","text_position":"Text Position","text_position_description":"Where the name and state text is positioned relative to the icon","click_action":"Click Action","service":"Service","service_description":"Service to be called (e.g. light.turn_on)","service_data":"Service Data (JSON)","service_data_description":"JSON data sent with the service call","action":"Action (JSON/Service)","action_description":"Advanced action configuration (see documentation)","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to (e.g. /lovelace/dashboard)","url":"URL","url_description":"URL to open in a new tab"},"icon_appearance":{"header":"Icon Appearance","icon":"Icon-Specific","general":"General Appearance","active":"Active State","inactive":"Inactive State","state_conditions":"State Conditions","advanced":"Advanced Settings","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Text Size","text_size_description":"Size of name/state text in pixels","text_alignment":"Text Alignment","text_alignment_description":"How the text is aligned beneath the icon","icon_background":"Icon Background","icon_background_description":"Add a background shape behind the icon","text_appearance":"Text Appearance","container":{"header":"Container Appearance","width":"Container Width","width_description":"Set the width of the icon\'s container relative to the row.","background":"Container Background Shape","background_description":"Choose a background shape for the entire icon container.","vertical_alignment":"Vertical Alignment","vertical_alignment_description":"Align the icon and text vertically within the container.","container_background_color":"Container Background Colour"},"show_when_active":"Show Icon When Active","show_when_active_description":"Only show this icon when it\'s in an active state","template_mode":"Template Mode","template_mode_description":"Use a template to determine the active/inactive state.","active_state":"Active State","active_state_description":"State string that represents \'active\'.","inactive_state":"Inactive State","inactive_state_description":"State string that represents \'inactive\'.","active_icon":"Active Icon","inactive_icon":"Inactive Icon","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","active_icon_color":"Active Icon Colour","inactive_icon_color":"Inactive Icon Colour","active_name_color":"Active Name Colour","inactive_name_color":"Inactive Name Colour","active_state_color":"Active State Colour","inactive_state_color":"Inactive State Colour","show_icon_active":"Show Icon When Active","show_icon_active_description":"Display the icon when the state is active.","show_icon_inactive":"Show Icon When Inactive","show_icon_inactive_description":"Display the icon when the state is inactive."},"tabs":{"general":"General","appearance":"Appearance","states":"States","active_state":"Active State","inactive_state":"Inactive State"},"alignments":{"flex-start":"Left","center":"Centre","flex-end":"Right","space-between":"Space Between","space-around":"Space Around","space-evenly":"Space Evenly"},"vertical_alignments":{"flex-start":"Top","center":"Middle","flex-end":"Bottom"},"spacing":{"none":"None","small":"Small","medium":"Medium","large":"Large"},"text_positions":{"below":"Below Icon","beside":"Beside Icon","none":"No Text","top":"Top","left":"Left","right":"Right"},"reset":{"size":"Reset to default size","color":"Reset to default colour","all":"Reset to default values"},"click_actions":{"toggle":"Toggle Entity State","more-info":"Show More Information","navigate":"Navigate to Path","url":"Open URL","call-service":"Call a Service","perform-action":"Perform Action","location-map":"Show Location Map","assist":"Voice Assistant","none":"No Action","descriptions":{"toggle":"Toggles the entity\'s state.","more-info":"Opens the more info dialog for the entity.","navigate":"Navigates to the specified Lovelace path.","url":"Opens the specified URL in a new tab.","call-service":"Calls the specified Home Assistant service.","perform-action":"Performs a custom action (see documentation).","location-map":"Shows the entity on a map.","assist":"Opens the Home Assistant voice assistant.","none":"No action will be performed."}},"backgrounds":{"none":"None","circle":"Circle","square":"Square","rounded_square":"Rounded Square"},"container_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"row_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"}},"customize":{"layout":{"title":"Layout Style","description":"Choose between a single or double column layout for the card","header":"Layout Settings"},"layout_types":{"single":"Single Column","double":"Double Column"},"sections":{"header":"Card Sections","arrangement_header":"Section Arrangement","arrangement_desc_base":"Drag and drop sections to organise their order on the card.","arrangement_desc_single_extra":"All sections will be displayed in a single column.","arrangement_desc_double_extra":"In a double column layout, you can place any section in the left or right column."},"section_labels":{"title":"Title","image":"Vehicle Image","info":"Vehicle Information"},"actions":{"collapse_margins":"Collapse Margins","expand_margins":"Expand Margins"},"margins":{"top":"Top Margin","bottom":"Bottom Margin"},"columns":{"left":"Left Column","right":"Right Column","empty":"Drop sections here"},"css":{"header":"Global CSS","description":"Enter custom CSS rules here to override the card\'s default styling. These rules will be applied directly to the card. Use with caution.","label":"Custom CSS","input_description":"Enter your custom CSS rules here."}},"backgrounds":{"none":"None","circle":"Circle","square":"Square","rounded_square":"Rounded Square"},"container_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"row_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Developed by","discord_button":"Join Our Discord","github_button":"Visit Our Github","docs_button":"View Our Documentation","support_title":"Support Ultra Vehicle Card","support_para":"Your generous donations fuel the development of amazing features for this card! Without support from users like you, continued innovation would not be possible.","donate_button":"DONATE (PAYPAL)"}}');var Ke=a.t(Ge,2);const We=JSON.parse('{"editor":{"tabs":{"settings":"Instellingen","bars":"Balken","icons":"Pictogrammen","customize":"Aanpassen","about":"Over"},"card_settings":{"title":"Kaarttitel","title_alignment":"Titeluitlijning","title_size":"Titelgrootte","title_description":"Titel weergegeven bovenaan de kaart (optioneel)","title_alignment_description":"Hoe de kaarttitel wordt uitgelijnd","title_size_description":"Grootte van de kaarttitel in pixels","format_entities":"Entiteitswaarden formatteren","format_entities_description":"Schakel extra formattering van entiteitswaarden in (komma\'s toevoegen, eenheden converteren, enz.)","show_units":"Toon eenheden","show_units_description":"Toon meeteenheden naast waarden"},"vehicle_info":{"title":"Voertuiginformatie","location":{"title":"Locatie-entiteit","description":"Selecteer de entiteit die de huidige locatie van het voertuig weergeeft.","show":"Toon locatie","show_description":"Toon de locatie van het voertuig"},"mileage":{"title":"Kilometerstand-entiteit","description":"Selecteer de entiteit die de totale kilometerstand of de kilometerteller van het voertuig weergeeft.","show":"Toon kilometerstand","show_description":"Toon de kilometerstand van het voertuig"},"car_state":{"title":"Voertuigstatus-entiteit","description":"Selecteer de entiteit die de huidige status van het voertuig weergeeft (bijv. geparkeerd, rijdend, aan het opladen).","show":"Toon voertuigstatus","show_description":"Toon de status van het voertuig"}},"images":{"vehicle":{"title":"Voertuigafbeelding","description":"Configureer de primaire afbeelding die wordt weergegeven voor het voertuig.","type":"Type voertuigafbeelding","width":"Afbeeldingsbreedte","crop":"Afbeelding bijsnijden","entity":"Afbeeldingsentiteit","entity_description":"Entiteit die de afbeeldings-URL levert"},"action":{"title":"Actieafbeelding","description":"Toon optioneel een andere afbeelding wanneer een entiteit een bepaalde status bereikt (bijv. toon een oplaadafbeelding wanneer de auto is aangesloten).","type":"Type actieafbeelding","width":"Afbeeldingsbreedte","crop":"Afbeelding bijsnijden","entity":"Actie-entiteit","entity_description":"Entiteit die de actieafbeelding activeert","state":"Actiestatus","state_description":"Statuswaarde die de actieafbeelding activeert"}},"crop":{"title":"Afbeelding bijsnijden","top":"Boven","right":"Rechts","bottom":"Onder","left":"Links","pixels":"px","help":"Voer pixelwaarden in (positief of negatief) om bijsnijden en opvulling aan te passen"},"alignment":{"left":"Links","center":"Midden","right":"Rechts"},"common":{"choose_file":"Kies bestand","no_file_chosen":"Geen bestand gekozen","entity":"Entiteit","width":"Breedte","width_description":"Breedte als percentage van de kaart","none":"Geen","default":"Standaard","upload":"Uploaden","url":"URL","url_description":"URL die naar de afbeelding verwijst","reset":"Reset"},"bars":{"title":"Percentagebalken","description":"Voeg percentagebalken toe om waarden zoals brandstofniveau, batterijlading of bereik weer te geven. Elke balk kan een primaire percentagewaarde weergeven met optionele labels links en rechts.","add":"Nieuwe balk toevoegen","duplicate":"Balk dupliceren","delete":"Balk verwijderen","expand":"Balk uitvouwen","collapse":"Balk samenvouwen","bar_prefix":"Balk","no_entity":"Geen entiteit geselecteerd","tabs":{"config":"Configuratie","colors":"Kleuren","animation":"Animatie"},"settings":{"header":"Balkconfiguratie","entity":"Balkpercentage-entiteit","entity_description":"Selecteer een entiteit die een percentagewaarde (0-100) teruggeeft. Dit bepaalt het vulniveau van de balk.","limit_entity":"Limietentiteit (optioneel)","limit_entity_description":"Optioneel: Voeg een verticale indicatorlijn toe op de balk (bijv. oplaadlimiet voor EV-batterij).","limit_color":"Limietindicatorkleur","limit_color_description":"Kleur van de verticale lijn die de limietpositie op de balk aangeeft. Wijzigingen forceren een vernieuwing van de kaart.","bar_size":"Balkgrootte","bar_size_description":"Stel de dikte/hoogte van de voortgangsbalk in.","width":"Balkbreedte","width_description":"Stel de breedte van de balk in als percentage van de kaartbreedte.","alignment":"Labeluitlijning","alignment_description":"Hoe de linker- en rechterlabels ten opzichte van elkaar worden uitgelijnd.","bar_radius":"Balkstraal","bar_radius_description":"Vorm van de hoeken van de voortgangsbalk"},"left_side":{"header":"Linkerkant","toggle_description":"Toon of verberg de linkerkant van het balklabel","title":"Linkertitel","title_description":"Optioneel label dat aan de linkerkant onder de balk wordt weergegeven.","entity":"Linkerentiteit","entity_description":"Entiteit waarvan de waarde aan de linkerkant van de balk wordt weergegeven.","alignment_description":"Bepaalt hoe dit label onder de balk wordt uitgelijnd.","title_size":"Titelgrootte","value_size":"Waardegrootte","hidden_message":"Linkerkant is verborgen"},"right_side":{"header":"Rechterkant","toggle_description":"Toon of verberg de rechterkant van het balklabel","title":"Rechtertitel","title_description":"Optioneel label dat aan de rechterkant onder de balk wordt weergegeven.","entity":"Rechterentiteit","entity_description":"Entiteit waarvan de waarde aan de rechterkant van de balk wordt weergegeven.","alignment_description":"Bepaalt hoe dit label onder de balk wordt uitgelijnd.","title_size":"Titelgrootte","value_size":"Waardegrootte","hidden_message":"Rechterkant is verborgen"},"colors":{"header":"Kleuren","bar_color":"Balkkleur","background_color":"Achtergrondkleur","border_color":"Randkleur","limit_indicator_color":"Limietindicatorkleur","left_title_color":"Linkertitelkleur","left_value_color":"Linkerwaardenkleur","right_title_color":"Rechtertitelkleur","right_value_color":"Rechterwaardenkleur","reset_color":"Reset naar standaardkleur"},"gradient":{"header":"Verloopsmodus","toggle":"Gebruik verloop","toggle_description":"Gebruik een verloop voor de voortgangsbalk in plaats van een enkele kleur","display_mode":"Verloopsweergavemodus","display_mode_full":"Volledig","display_mode_value_based":"Waardegebaseerd","display_mode_description":"Volledig: Toont het hele verloop. Waardegebaseerd: Toont het verloop tot aan de huidige waarde.","editor_header":"Verloopseditor","add_stop":"Stop toevoegen"},"animation":{"header":"Actieanimatie","description":"Voeg animaties toe aan de balk wanneer een specifieke entiteit een bepaalde status bereikt. Perfect voor het tonen van oplaadstatus, alarmtoestanden en meer.","pro_tip":"Pro-tip: Voor \'altijd actieve\' animaties, selecteer een animatietype maar laat de entiteit- en statusvelden leeg. Probeer de \'Bubbels\' en \'Vullen\' animaties!","entity":"Animatie-entiteit","entity_description":"Entiteit die de animatie activeert wanneer deze overeenkomt met de opgegeven status","state":"Entiteitsstatus","state_description":"Wanneer de entiteitsstatus overeenkomt met deze waarde, wordt de animatie geactiveerd","type":"Animatietype","type_description":"Het animatie-effect dat wordt weergegeven wanneer de entiteitsstatus overeenkomt","select_entity_prompt":"Selecteer een Entiteit en typ de status waarmee u de animatie wilt activeren (voorbeelden: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Dun","regular":"Normaal","thick":"Dik","thiccc":"Zeer dik"},"bar_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"},"bar_alignments":{"space-between":"Ruimte tussen","flex-start":"Links","center":"Midden","flex-end":"Rechts"},"animation_types":{"none":"Geen","charging-lines":"Opladen (Diagonale lijnen)","pulse":"Pulseren","blinking":"Knipperen","bouncing":"Stuiteren","glow":"Gloeien","rainbow":"Regenboog","bubbles":"Bubbels","fill":"Vullen"},"bar_radius":{"round":"Rond","square":"Vierkant","rounded-square":"Afgerond Vierkant"}},"icons":{"title":"Kaartpictogrammen","description":"Voeg pictogramrijen toe om meerdere pictogrammen in je kaart weer te geven. Elke rij kan met verschillende instellingen worden geconfigureerd. Opmerking: Pictogramrijen en sectievolgorde kunnen worden herschikt in het tabblad Aanpassen.","add_row":"Pictogramrij toevoegen","duplicate_row":"Rij dupliceren","delete_row":"Rij verwijderen","expand_row":"Rij uitvouwen","collapse_row":"Rij samenvouwen","no_row":"Geen pictogramrijen toegevoegd","row_prefix":"Rij","icon_prefix":"Pictogram","row_settings":{"header":"Rij-instellingen","width":"Rijbreedte","width_description":"Breedte van de rij als percentage van de kaartbreedte","alignment":"Rijuitlijning","alignment_description":"Hoe pictogrammen in deze rij worden uitgelijnd","spacing":"Pictogramafstand","spacing_description":"Hoeveelheid ruimte tussen pictogrammen in deze rij"},"add_icon":"Pictogram toevoegen","duplicate_icon":"Pictogram dupliceren","delete_icon":"Pictogram verwijderen","expand_icon":"Pictogram uitvouwen","collapse_icon":"Pictogram samenvouwen","no_icon":"Geen pictogram geselecteerd","icon_settings":{"header":"Pictograminstellingen","entity":"Entiteit","entity_description":"Entiteit om weer te geven met dit pictogram","icon":"Pictogram","icon_description":"Selecteer een pictogram of voer een aangepast pictogram in","name":"Naam","name_description":"Aangepaste naam die onder het pictogram wordt weergegeven (gebruikt standaard de entiteitsnaam als niet ingesteld)","show_name":"Toon naam","show_name_description":"Toon de naamtekst onder het pictogram","show_state":"Toon status","show_state_description":"Toon de entiteitsstatus onder het pictogram","show_units":"Toon eenheden","show_units_description":"Voeg eenheden toe bij het weergeven van de status","text_position":"Tekstpositie","text_position_description":"Waar de naam- en statustekst wordt geplaatst ten opzichte van het pictogram","click_action":"Klikactie","service":"Service","service_description":"Service om aan te roepen (bijv. light.turn_on)","service_data":"Servicegegevens (JSON)","service_data_description":"JSON-gegevens die met de serviceaanroep worden verzonden","action":"Actie (JSON/Service)","action_description":"Geavanceerde actieconfiguratie (zie documentatie)","navigation_path":"Navigatiepad","navigation_path_description":"Pad om naartoe te navigeren (bijv. /lovelace/dashboard)","url":"URL","url_description":"URL om te openen in een nieuw tabblad"},"icon_appearance":{"header":"Pictogramuiterlijk","icon":"Pictogramspecifiek","general":"Algemeen uiterlijk","active":"Actieve status","inactive":"Inactieve status","state_conditions":"Statusvoorwaarden","advanced":"Geavanceerde instellingen","icon_size":"Pictogramgrootte","icon_size_description":"Grootte van het pictogram in pixels","text_size":"Tekstgrootte","text_size_description":"Grootte van de naam/statustekst in pixels","text_alignment":"Tekstuitlijning","text_alignment_description":"Hoe de tekst onder het pictogram wordt uitgelijnd","icon_background":"Pictogramachtergrond","icon_background_description":"Voeg een achtergrondvorm toe achter het pictogram","text_appearance":"Tekstuiterlijk","container":{"header":"Container-uiterlijk","width":"Containerbreedte","width_description":"Stel de breedte van de pictogramcontainer in ten opzichte van de rij.","background":"Container Achtergrondvorm","background_description":"Kies een achtergrondvorm voor de gehele pictogramcontainer.","vertical_alignment":"Verticale uitlijning","vertical_alignment_description":"Lijn het pictogram en de tekst verticaal uit binnen de container.","container_background_color":"Container Achtergrondkleur"},"show_when_active":"Toon pictogram wanneer actief","show_when_active_description":"Toon dit pictogram alleen wanneer het in een actieve status is","template_mode":"Template Modus","template_mode_description":"Gebruik een template om de actieve/inactieve status te bepalen.","active_state":"Actieve Status","active_state_description":"Statustekenreeks die \'actief\' vertegenwoordigt.","inactive_state":"Inactieve Status","inactive_state_description":"Statustekenreeks die \'inactief\' vertegenwoordigt.","active_icon":"Actief Pictogram","inactive_icon":"Inactief Pictogram","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","active_icon_color":"Actieve Pictogramkleur","inactive_icon_color":"Inactieve Pictogramkleur","active_name_color":"Actieve Naamkleur","inactive_name_color":"Inactieve Naamkleur","active_state_color":"Actieve Statuskleur","inactive_state_color":"Inactieve Statuskleur","show_icon_active":"Toon Pictogram Indien Actief","show_icon_active_description":"Toon het pictogram wanneer de status actief is.","show_icon_inactive":"Toon Pictogram Indien Inactief","show_icon_inactive_description":"Toon het pictogram wanneer de status inactief is."},"tabs":{"general":"Algemeen","appearance":"Uiterlijk","states":"Statussen","active_state":"Actieve status","inactive_state":"Inactieve status"},"alignments":{"flex-start":"Links","center":"Midden","flex-end":"Rechts","space-between":"Ruimte tussen","space-around":"Ruimte rondom","space-evenly":"Gelijkmatige ruimte"},"vertical_alignments":{"flex-start":"Boven","center":"Midden","flex-end":"Onder"},"spacing":{"none":"Geen","small":"Klein","medium":"Gemiddeld","large":"Groot"},"text_positions":{"below":"Onder pictogram","beside":"Naast pictogram","none":"Geen tekst","top":"Boven","left":"Links","right":"Rechts"},"reset":{"size":"Reset naar standaardgrootte","color":"Reset naar standaardkleur","all":"Reset naar standaardwaarden"},"click_actions":{"toggle":"Entiteit omschakelen","more-info":"Meer informatie tonen","navigate":"Navigeren naar pad","url":"URL openen","call-service":"Service aanroepen","perform-action":"Actie uitvoeren","location-map":"Locatiekaart tonen","assist":"Spraakassistent","none":"Geen actie","descriptions":{"toggle":"Schakelt de status van de entiteit om.","more-info":"Opent het meer-info dialoogvenster voor de entiteit.","navigate":"Navigeert naar het opgegeven Lovelace-pad.","url":"Opent de opgegeven URL in een nieuw tabblad.","call-service":"Roept de opgegeven Home Assistant-service aan.","perform-action":"Voert een aangepaste actie uit (zie documentatie).","location-map":"Toont de entiteit op een kaart.","assist":"Opent de Home Assistant-spraakassistent.","none":"Er wordt geen actie uitgevoerd."}},"backgrounds":{"none":"Geen","circle":"Cirkel","square":"Vierkant","rounded_square":"Afgerond vierkant"},"container_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"},"row_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"}},"customize":{"layout":{"title":"Layoutstijl","description":"Kies tussen een enkele of dubbele kolomindeling voor de kaart","header":"Layoutinstellingen"},"layout_types":{"single":"Enkele kolom","double":"Dubbele kolom"},"sections":{"header":"Kaartsecties","arrangement_header":"Sectie-indeling","arrangement_desc_base":"Sleep secties om hun volgorde op de kaart te wijzigen.","arrangement_desc_single_extra":"Alle secties worden weergegeven in een enkele kolom.","arrangement_desc_double_extra":"In een dubbele kolomindeling kun je elke sectie in de linker- of rechterkolom plaatsen."},"section_labels":{"title":"Titel","image":"Voertuigafbeelding","info":"Voertuiginformatie"},"actions":{"collapse_margins":"Marges samenvouwen","expand_margins":"Marges uitvouwen"},"margins":{"top":"Bovenmarge","bottom":"Ondermarge"},"columns":{"left":"Linkerkolom","right":"Rechterkolom","empty":"Sleep secties hierheen"},"css":{"header":"Globale CSS","description":"Voer hier aangepaste CSS-regels in om de standaardstijl van de kaart te overschrijven. Deze regels worden direct toegepast op de kaart. Gebruik met voorzichtigheid.","label":"Aangepaste CSS","input_description":"Voer hier je aangepaste CSS-regels in."}},"backgrounds":{"none":"Geen","circle":"Cirkel","square":"Vierkant","rounded_square":"Afgerond vierkant"},"container_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"},"row_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Ontwikkeld door","discord_button":"Word lid van onze Discord","github_button":"Bezoek onze Github","docs_button":"Bekijk onze documentatie","support_title":"Ondersteun Ultra Vehicle Card","support_para":"Je gulle donaties stimuleren de ontwikkeling van geweldige functies voor deze kaart! Zonder de steun van gebruikers zoals jij zou voortdurende innovatie niet mogelijk zijn.","donate_button":"DONEREN (PAYPAL)"}}');var Je=a.t(We,2);const Ze=JSON.parse('{"editor":{"tabs":{"settings":"Innstillinger","bars":"Stolper","icons":"Ikoner","customize":"Tilpasse","about":"Om"},"card_settings":{"title":"Korttittel","title_alignment":"Titteljustering","title_size":"Tittelstørrelse","title_description":"Tittel som vises øverst på kortet (valgfritt)","title_alignment_description":"Hvordan korttittelen justeres","title_size_description":"Størrelsen på korttittelen i piksler","format_entities":"Formater Enhetsverdier","format_entities_description":"Aktiver ytterligere formatering av enhetsverdier (legg til kommaer, konverter enheter, osv.)","show_units":"Vis Enheter","show_units_description":"Vis måleenheter ved siden av verdier"},"vehicle_info":{"title":"Kjøretøyinformasjon","location":{"title":"Plasseringsenhet","description":"Velg enheten som viser kjøretøyets nåværende plassering.","show":"Vis Plassering","show_description":"Vis kjøretøyets plassering"},"mileage":{"title":"Kilometerenhet","description":"Velg enheten som representerer kjøretøyets totale kilometerstand eller kilometerteller.","show":"Vis Kilometerstand","show_description":"Vis kjøretøyets kilometerstand"},"car_state":{"title":"Kjøretøytilstandsenhet","description":"Velg enheten som representerer kjøretøyets nåværende tilstand (f.eks. parkert, kjørende, lader).","show":"Vis Kjøretøytilstand","show_description":"Vis kjøretøyets tilstand"}},"images":{"vehicle":{"title":"Kjøretøybilde","description":"Konfigurer hovedbildet som vises for kjøretøyet.","type":"Kjøretøybildetype","width":"Bildebredde","crop":"Beskjær bilde","entity":"Bildeenhet","entity_description":"Enhet som gir bilde-URL"},"action":{"title":"Handlingsbilde","description":"Viser valgfritt et annet bilde når en enhet når en bestemt tilstand (f.eks. vis et ladebilde når bilen er koblet til).","type":"Handlingsbildetype","width":"Bildebredde","crop":"Beskjær bilde","entity":"Handlingsenhet","entity_description":"Enhet som utløser handlingsbildet","state":"Handlingstilstand","state_description":"Tilstandsverdi som utløser handlingsbildet"}},"crop":{"title":"Bildebeskjæring","top":"Topp","right":"Høyre","bottom":"Bunn","left":"Venstre","pixels":"px","help":"Angi verdier i piksler (positive eller negative) for å justere beskjæring og utfylling"},"alignment":{"left":"Venstre","center":"Senter","right":"Høyre"},"common":{"choose_file":"Velg fil","no_file_chosen":"Ingen fil valgt","entity":"Enhet","width":"Bredde","width_description":"Bredde som prosent av kortet","none":"Ingen","default":"Standard","upload":"Last opp","url":"URL","url_description":"URL som peker til bildet","reset":"Tilbakestill"},"bars":{"title":"Prosentstolper","description":"Legg til prosentstolper for å vise verdier som drivstoffnivå, batterilading eller rekkevidde. Hver stolpe kan vise en primær prosentverdi med valgfrie etiketter til venstre og høyre.","add":"Legg til ny stolpe","duplicate":"Dupliser stolpe","delete":"Slett stolpe","expand":"Utvid stolpe","collapse":"Skjul stolpe","bar_prefix":"Stolpe","no_entity":"Ingen enhet valgt","tabs":{"config":"Konfigurasjon","colors":"Farger","animation":"Animasjon"},"settings":{"header":"Stolpekonfigurasjon","entity":"Stolpeprosententitet","entity_description":"Velg en enhet som returnerer en prosentverdi (0-100). Dette kontrollerer fyllnivået på stolpen.","limit_entity":"Grenseenhet (valgfritt)","limit_entity_description":"Valgfritt: Legg til en vertikal indikatorlinje på stolpen (f.eks. ladegrense for EV-batteri).","limit_color":"Grenseindikatorfarve","limit_color_description":"Fargen på den vertikale linjen som angir grenseposisjonen på stolpen. Endringer vil tvinge en oppdatering av kortet.","bar_size":"Stolpestørrelse","bar_size_description":"Sett tykkelse/høyde på fremgangsstolpen.","width":"Stolpebredde","width_description":"Setter bredden på stolpen som prosent av kortbredden.","alignment":"Etikettjustering","alignment_description":"Hvordan venstre og høyre etiketter justeres i forhold til hverandre.","bar_radius":"Stolperadius","bar_radius_description":"Form på hjørnene til fremdriftssøylen"},"left_side":{"header":"Venstre Side","toggle_description":"Vis eller skjul venstre side av stolpeetiketten","title":"Venstre Tittel","title_description":"Valgfri etikett som vises på venstre side under stolpen.","entity":"Venstre Enhet","entity_description":"Enhet hvis verdi vises på venstre side av stolpen.","alignment_description":"Kontrollerer hvordan denne etiketten justeres under stolpen.","title_size":"Tittelstørrelse","value_size":"Verdistørrelse","hidden_message":"Venstre side er skjult"},"right_side":{"header":"Høyre Side","toggle_description":"Vis eller skjul høyre side av stolpeetiketten","title":"Høyre Tittel","title_description":"Valgfri etikett som vises på høyre side under stolpen.","entity":"Høyre Enhet","entity_description":"Enhet hvis verdi vises på høyre side av stolpen.","alignment_description":"Kontrollerer hvordan denne etiketten justeres under stolpen.","title_size":"Tittelstørrelse","value_size":"Verdistørrelse","hidden_message":"Høyre side er skjult"},"colors":{"header":"Farger","bar_color":"Stolpefarge","background_color":"Bakgrunnsfarge","border_color":"Kantfarge","limit_indicator_color":"Grenseindikatorfarve","left_title_color":"Venstre Tittelfarge","left_value_color":"Venstre Verdifarge","right_title_color":"Høyre Tittelfarge","right_value_color":"Høyre Verdifarge","reset_color":"Tilbakestill til standardfarge"},"gradient":{"header":"Gradientmodus","toggle":"Bruk Gradient","toggle_description":"Bruk en gradient for fremgangsstolpen i stedet for en enkelt farge","display_mode":"Gradient Visningsmodus","display_mode_full":"Full","display_mode_value_based":"Verdibasert","display_mode_description":"Full: Viser hele gradienten. Verdibasert: Viser gradienten opp til gjeldende verdi.","editor_header":"Gradientredigerer","add_stop":"Legg til stopp"},"animation":{"header":"Handlingsanimasjon","description":"Legg til animasjoner på stolpen når en spesifikk enhet når en bestemt tilstand. Perfekt for å vise ladestatus, alarmtilstander og mer.","pro_tip":"Pro-tips: For \'alltid aktive\' animasjoner, velg en animasjonstype men la enhets- og tilstandsfeltene være tomme. Prøv \'Bobler\' og \'Fyll\' animasjonene!","entity":"Animasjonsenhet","entity_description":"Enhet som utløser animasjonen når den matcher den angitte tilstanden","state":"Enhetstilstand","state_description":"Når enhetstilstanden matcher denne verdien, vil animasjonen bli utløst","type":"Animasjonstype","type_description":"Animasjonseffekten som vises når enhetstilstanden samsvarer","select_entity_prompt":"Velg en Enhet og skriv inn tilstanden du ønsker å utløse animasjonen med (eksempler: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Tynn","regular":"Normal","thick":"Tykk","thiccc":"Ekstra tykk"},"bar_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"},"bar_alignments":{"space-between":"Mellomrom mellom","flex-start":"Venstre","center":"Senter","flex-end":"Høyre"},"animation_types":{"none":"Ingen","charging-lines":"Lading (Diagonale linjer)","pulse":"Pulserende","blinking":"Blinkende","bouncing":"Hoppende","glow":"Glødende","rainbow":"Regnbue","bubbles":"Bobler","fill":"Fyll"},"bar_radius":{"round":"Rund","square":"Firkantet","rounded-square":"Avrundet Firkant"}},"icons":{"title":"Kortikoner","description":"Legg til ikonrader for å vise flere ikoner på kortet ditt. Hver rad kan konfigureres med forskjellige innstillinger. Merk: Ikonrader og seksjonsrekkefølge kan omorganiseres i Tilpasse-fanen.","add_row":"Legg til ikonrad","duplicate_row":"Dupliser rad","delete_row":"Slett rad","expand_row":"Utvid rad","collapse_row":"Skjul rad","no_row":"Ingen ikonrader er lagt til","row_prefix":"Rad","icon_prefix":"Ikon","row_settings":{"header":"Radinnstillinger","width":"Radbredde","width_description":"Bredde på raden som prosent av kortbredden","alignment":"Radjustering","alignment_description":"Hvordan ikoner justeres i denne raden","spacing":"Ikonavstand","spacing_description":"Mengde mellomrom mellom ikoner i denne raden"},"add_icon":"Legg til ikon","duplicate_icon":"Dupliser ikon","delete_icon":"Slett ikon","expand_icon":"Utvid ikon","collapse_icon":"Skjul ikon","no_icon":"Ingen ikon valgt","icon_settings":{"header":"Ikoninnstillinger","entity":"Enhet","entity_description":"Enhet som vises med dette ikonet","icon":"Ikon","icon_description":"Velg et ikon eller skriv inn et egendefinert ikon","name":"Navn","name_description":"Tilpasset navn som vises under ikonet (bruker enhetsnavn som standard hvis ikke angitt)","show_name":"Vis Navn","show_name_description":"Vis navneteksten under ikonet","show_state":"Vis Tilstand","show_state_description":"Vis enhetens tilstand under ikonet","show_units":"Vis Enheter","show_units_description":"Inkluder enheter når tilstanden vises","text_position":"Tekstposisjon","text_position_description":"Hvor navn- og tilstandsteksten plasseres i forhold til ikonet","click_action":"Klikkehandling","service":"Tjeneste","service_description":"Tjeneste som skal kalles (f.eks. light.turn_on)","service_data":"Tjenestedata (JSON)","service_data_description":"JSON-data sendt med tjenesteanropet","action":"Handling (JSON/Tjeneste)","action_description":"Avansert handlingskonfigurasjon (se dokumentasjon)","navigation_path":"Navigasjonssti","navigation_path_description":"Sti å navigere til (f.eks. /lovelace/dashboard)","url":"URL","url_description":"URL som skal åpnes i en ny fane"},"icon_appearance":{"header":"Ikonutseende","icon":"Ikonspesifikt","general":"Generelt Utseende","active":"Aktiv Tilstand","inactive":"Inaktiv Tilstand","state_conditions":"Tilstandsbetingelser","advanced":"Avanserte Innstillinger","icon_size":"Ikonstørrelse","icon_size_description":"Størrelse på ikonet i piksler","text_size":"Tekststørrelse","text_size_description":"Størrelse på navn/tilstandstekst i piksler","text_alignment":"Tekstjustering","text_alignment_description":"Hvordan teksten justeres under ikonet","icon_background":"Ikonbakgrunn","icon_background_description":"Legg til en bakgrunnsform bak ikonet","text_appearance":"Tekstutseende","container":{"header":"Containerutseende","width":"Beholderbredde","width_description":"Angi bredden på ikonbeholderen i forhold til raden.","background":"Form på beholderbakgrunn","background_description":"Velg en bakgrunnsform for hele ikonbeholderen.","vertical_alignment":"Vertikal Justering","vertical_alignment_description":"Juster ikonet og teksten vertikalt i beholderen.","container_background_color":"Farge på beholderbakgrunn"},"show_when_active":"Vis ikon når aktivt","show_when_active_description":"Vis dette ikonet kun når det er i en aktiv tilstand","template_mode":"Malmodus","template_mode_description":"Bruk en mal for å bestemme aktiv/inaktiv tilstand.","active_state":"Aktiv tilstand","active_state_description":"Tilstandsstreng som representerer \\"aktiv\\".","inactive_state":"Inaktiv tilstand","inactive_state_description":"Tilstandsstreng som representerer \\"inaktiv\\".","active_icon":"Aktivt ikon","inactive_icon":"Inaktivt ikon","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","active_icon_color":"Farge på aktivt ikon","inactive_icon_color":"Farge på inaktivt ikon","active_name_color":"Farge på aktivt navn","inactive_name_color":"Farge på inaktivt navn","active_state_color":"Farge på aktiv tilstand","inactive_state_color":"Farge på inaktiv tilstand","show_icon_active":"Vis ikon når aktivt","show_icon_active_description":"Vis ikonet når tilstanden er aktiv.","show_icon_inactive":"Vis ikon når inaktivt","show_icon_inactive_description":"Vis ikonet når tilstanden er inaktiv."},"tabs":{"general":"Generelt","appearance":"Utseende","states":"Tilstander","active_state":"Aktiv Tilstand","inactive_state":"Inaktiv Tilstand"},"alignments":{"flex-start":"Venstre","center":"Senter","flex-end":"Høyre","space-between":"Mellomrom mellom","space-around":"Mellomrom rundt","space-evenly":"Jevnt mellomrom"},"vertical_alignments":{"flex-start":"Topp","center":"Midten","flex-end":"Bunn"},"spacing":{"none":"Ingen","small":"Liten","medium":"Medium","large":"Stor"},"text_positions":{"below":"Under ikonet","beside":"Ved siden av ikonet","none":"Ingen tekst","top":"Topp","left":"Venstre","right":"Høyre"},"reset":{"size":"Tilbakestill til standardstørrelse","color":"Tilbakestill til standardfarge","all":"Tilbakestill til standardverdier"},"click_actions":{"toggle":"Veksle enheten","more-info":"Vis mer informasjon","navigate":"Naviger til sti","url":"Åpne URL","call-service":"Kall tjeneste","perform-action":"Utfør handling","location-map":"Vis posisjonen på kart","assist":"Stemmeassistent","none":"Ingen handling","descriptions":{"toggle":"Veksler tilstanden til enheten.","more-info":"Åpner mer-info dialogen for enheten.","navigate":"Navigerer til den angitte Lovelace-stien.","url":"Åpner den angitte URL-en i en ny fane.","call-service":"Kaller den angitte Home Assistant-tjenesten.","perform-action":"Utfører en egendefinert handling (se dokumentasjon).","location-map":"Viser enheten på et kart.","assist":"Åpner Home Assistant stemmeassistenten.","none":"Ingen handling vil bli utført."}},"backgrounds":{"none":"Ingen","circle":"Sirkel","square":"Kvadrat","rounded_square":"Avrundet kvadrat"},"container_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"},"row_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"}},"customize":{"layout":{"title":"Layoutstil","description":"Velg mellom enkelt-kolonne eller dobbelt-kolonne layout for kortet","header":"Layoutinnstillinger"},"layout_types":{"single":"Enkelt kolonne","double":"Dobbelt kolonne"},"sections":{"header":"Kortseksjoner","arrangement_header":"Seksjonsarrangement","arrangement_desc_base":"Dra og slipp seksjoner for å arrangere rekkefølgen på kortet.","arrangement_desc_single_extra":"Alle seksjoner vil vises i en enkelt kolonne.","arrangement_desc_double_extra":"I en dobbelt-kolonne layout kan du plassere alle seksjoner i enten venstre eller høyre kolonne."},"section_labels":{"title":"Tittel","image":"Kjøretøybilde","info":"Kjøretøyinfo"},"actions":{"collapse_margins":"Skjul marginer","expand_margins":"Utvid marginer"},"margins":{"top":"Toppmargin","bottom":"Bunnmargin"},"columns":{"left":"Venstre kolonne","right":"Høyre kolonne","empty":"Slipp seksjoner her"},"css":{"header":"Global CSS","description":"Skriv inn egendefinerte CSS-regler her for å overstyre kortets standardstil. Disse reglene vil bli brukt direkte på kortet. Bruk med forsiktighet.","label":"Egendefinert CSS","input_description":"Skriv inn dine egendefinerte CSS-regler her."}},"backgrounds":{"none":"Ingen","circle":"Sirkel","square":"Kvadrat","rounded_square":"Avrundet kvadrat"},"container_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"},"row_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Utviklet av","discord_button":"Bli med i vår Discord","github_button":"Besøk vår Github","docs_button":"Se vår dokumentasjon","support_title":"Støtt Ultra Vehicle Card","support_para":"Dine generøse donasjoner driver utviklingen av fantastiske funksjoner for dette kortet! Uten støtte fra brukere som deg ville kontinuerlig innovasjon ikke vært mulig.","donate_button":"DONÉR (PAYPAL)"}}');var Ye=a.t(Ze,2);const Qe=JSON.parse('{"editor":{"tabs":{"settings":"Innstillingar","bars":"Søyler","icons":"Ikon","customize":"Tilpassa","about":"Om"},"card_settings":{"title":"Korttittel","title_alignment":"Titteljustering","title_size":"Tittelstorleik","title_description":"Tittel som vert vist øvst på kortet (valfritt)","title_alignment_description":"Korleis korttittelen vert justert","title_size_description":"Storleiken på korttittelen i pikslar","format_entities":"Formater Einingsverdi","format_entities_description":"Aktiver ytterlegare formatering av einingsverdi (legg til komma, konverter einingar, osv.)","show_units":"Vis Einingar","show_units_description":"Vis måleeiningar ved sida av verdiar"},"vehicle_info":{"title":"Køyretøyinformasjon","location":{"title":"Plasseringseining","description":"Vel eininga som viser køyretøyet si noverande plassering.","show":"Vis Plassering","show_description":"Vis køyretøyet si plassering"},"mileage":{"title":"Kilometereining","description":"Vel eininga som representerer køyretøyet sin totale kilometerstand eller kilometerteller.","show":"Vis Kilometerstand","show_description":"Vis køyretøyet sin kilometerstand"},"car_state":{"title":"Køyretøytilstandseining","description":"Vel eininga som representerer køyretøyet sin noverande tilstand (t.d. parkert, køyrande, ladar).","show":"Vis Køyretøytilstand","show_description":"Vis køyretøyet sin tilstand"}},"images":{"vehicle":{"title":"Køyretøybilete","description":"Konfigurer hovudbiletet som vert vist for køyretøyet.","type":"Køyretøybiletetype","width":"Biletebreidd","crop":"Skjer biletet","entity":"Bileteeining","entity_description":"Eining som gir bilete-URL"},"action":{"title":"Handlingsbilete","description":"Viser valfritt eit anna bilete når ei eining når ein bestemt tilstand (t.d. vis eit ladebilete når bilen er kopla til).","type":"Handlingsbiletetype","width":"Biletebreidd","crop":"Skjer biletet","entity":"Handlingseining","entity_description":"Eining som utløyser handlingsbiletet","state":"Handlingstilstand","state_description":"Tilstandsverdi som utløyser handlingsbiletet"}},"crop":{"title":"Bileteskjering","top":"Topp","right":"Høgre","bottom":"Botn","left":"Venstre","pixels":"px","help":"Angi verdiar i pikslar (positive eller negative) for å justere skjering og utfylling"},"alignment":{"left":"Venstre","center":"Senter","right":"Høgre"},"common":{"choose_file":"Vel fil","no_file_chosen":"Ingen fil vald","entity":"Eining","width":"Breidd","width_description":"Breidd som prosent av kortet","none":"Ingen","default":"Standard","upload":"Last opp","url":"URL","url_description":"URL som peiker til biletet","reset":"Tilbakestill"},"bars":{"title":"Prosentsøyler","description":"Legg til prosentsøyler for å vise verdiar som drivstoffnivå, batterilading eller rekkevidde. Kvar søyle kan vise ein primær prosentverdi med valfrie etikettar til venstre og høgre.","add":"Legg til ny søyle","duplicate":"Dupliser søyle","delete":"Slett søyle","expand":"Utvid søyle","collapse":"Skjul søyle","bar_prefix":"Søyle","no_entity":"Ingen eining vald","tabs":{"config":"Konfigurasjon","colors":"Fargar","animation":"Animasjon"},"settings":{"header":"Søylekonfigurasjon","entity":"Søyleprosenteining","entity_description":"Vel ei eining som returnerer ein prosentverdi (0-100). Dette kontrollerer fyllnivået på søylen.","limit_entity":"Grenseeining (valfritt)","limit_entity_description":"Valfritt: Legg til ei vertikal indikatorlinje på søylen (t.d. ladegrense for EV-batteri).","limit_color":"Grenseindikatorfarve","limit_color_description":"Fargen på den vertikale linja som angir grenseposisjonen på søylen. Endringar vil tvinge ei oppdatering av kortet.","bar_size":"Søylestorleik","bar_size_description":"Set tjuknad/høgde på framgangssøylen.","width":"Søylebreidd","width_description":"Set breidda på søylen som prosent av kortbreidda.","alignment":"Etikettjustering","alignment_description":"Korleis venstre og høgre etikettar vert justert i forhold til kvarandre.","bar_radius":"Stolperadius","bar_radius_description":"Form på hjørna til framgangssøyla"},"left_side":{"header":"Venstre Side","toggle_description":"Vis eller skjul venstre side av søyleetiketten","title":"Venstre Tittel","title_description":"Valfri etikett som vert vist på venstre side under søylen.","entity":"Venstre Eining","entity_description":"Eining som får verdien vist på venstre side av søylen.","alignment_description":"Kontrollerer korleis denne etiketten vert justert under søylen.","title_size":"Tittelstorleik","value_size":"Verdistorleik","hidden_message":"Venstre side er skjult"},"right_side":{"header":"Høgre Side","toggle_description":"Vis eller skjul høgre side av søyleetiketten","title":"Høgre Tittel","title_description":"Valfri etikett som vert vist på høgre side under søylen.","entity":"Høgre Eining","entity_description":"Eining som får verdien vist på høgre side av søylen.","alignment_description":"Kontrollerer korleis denne etiketten vert justert under søylen.","title_size":"Tittelstorleik","value_size":"Verdistorleik","hidden_message":"Høgre side er skjult"},"colors":{"header":"Fargar","bar_color":"Søylefarge","background_color":"Bakgrunnsfarge","border_color":"Kantfarge","limit_indicator_color":"Grenseindikatorfarve","left_title_color":"Venstre Tittelfarge","left_value_color":"Venstre Verdifarge","right_title_color":"Høgre Tittelfarge","right_value_color":"Høgre Verdifarge","reset_color":"Tilbakestill til standardfarge"},"gradient":{"header":"Gradientmodus","toggle":"Bruk Gradient","toggle_description":"Bruk ein gradient for framgangssøylen i staden for ein enkelt farge","display_mode":"Gradient Visningsmodus","display_mode_full":"Full","display_mode_value_based":"Verdibasert","display_mode_description":"Full: Viser heile gradienten. Verdibasert: Viser gradienten opp til gjeldande verdi.","editor_header":"Gradientredigerarar","add_stop":"Legg til stopp"},"animation":{"header":"Handlingsanimasjon","description":"Legg til animasjonar på søylen når ei spesifikk eining når ein bestemt tilstand. Perfekt for å vise ladestatus, alarmtilstandar og meir.","pro_tip":"Pro-tips: For \'alltid aktive\' animasjonar, vel ein animasjonstype men la einings- og tilstandsfelta vere tomme. Prøv \'Bobler\' og \'Fyll\' animasjonane!","entity":"Animasjonseining","entity_description":"Eining som utløyser animasjonen når den matchar den angitte tilstanden","state":"Einingstilstand","state_description":"Når einingstilstanden matchar denne verdien, vil animasjonen bli utløyst","type":"Animasjonstype","type_description":"Animasjonseffekten som vert vist når einingstilstanden samsvarar","select_entity_prompt":"Vel ei Eining og skriv inn tilstanden du ønskjer å utløyse animasjonen med (døme: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Tynn","regular":"Normal","thick":"Tjukk","thiccc":"Ekstra tjukk"},"bar_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"},"bar_alignments":{"space-between":"Mellomrom mellom","flex-start":"Venstre","center":"Senter","flex-end":"Høgre"},"animation_types":{"none":"Ingen","charging-lines":"Lading (Diagonale linjer)","pulse":"Pulserande","blinking":"Blinkande","bouncing":"Hoppande","glow":"Glødande","rainbow":"Regnboge","bubbles":"Bobler","fill":"Fyll"},"bar_radius":{"round":"Rund","square":"Firkantet","rounded-square":"Avrunda Firkant"}},"icons":{"title":"Kortikon","description":"Legg til ikonrader for å vise fleire ikon på kortet ditt. Kvar rad kan konfigurerast med forskjellige innstillingar. Merk: Ikonrader og seksjonsrekkjefølgje kan omorganiserast i Tilpassa-fanen.","add_row":"Legg til ikonrad","duplicate_row":"Dupliser rad","delete_row":"Slett rad","expand_row":"Utvid rad","collapse_row":"Skjul rad","no_row":"Ingen ikonrader er lagt til","row_prefix":"Rad","icon_prefix":"Ikon","row_settings":{"header":"Radinnstillingar","width":"Radbreidd","width_description":"Breidd på raden som prosent av kortbreidda","alignment":"Radjustering","alignment_description":"Korleis ikon vert justert i denne raden","spacing":"Ikonavstand","spacing_description":"Mengde mellomrom mellom ikon i denne raden"},"add_icon":"Legg til ikon","duplicate_icon":"Dupliser ikon","delete_icon":"Slett ikon","expand_icon":"Utvid ikon","collapse_icon":"Skjul ikon","no_icon":"Ingen ikon vald","icon_settings":{"header":"Ikoninnstillingar","entity":"Eining","entity_description":"Eining som vert vist med dette ikonet","icon":"Ikon","icon_description":"Vel eit ikon eller skriv inn eit eigendefinert ikon","name":"Namn","name_description":"Tilpassa namn som vert vist under ikonet (brukar einingsnamn som standard viss ikkje spesifisert)","show_name":"Vis Namn","show_name_description":"Vis namneteksten under ikonet","show_state":"Vis Tilstand","show_state_description":"Vis eininga sin tilstand under ikonet","show_units":"Vis Einingar","show_units_description":"Inkluder einingar når tilstanden vert vist","text_position":"Tekstposisjon","text_position_description":"Kor namn- og tilstandsteksten vert plassert i forhold til ikonet","click_action":"Klikkehandling","service":"Teneste","service_description":"Teneste som skal kallast (t.d. light.turn_on)","service_data":"Tenestedata (JSON)","service_data_description":"JSON-data sendt med tenesteoppkallet","action":"Handling (JSON/Teneste)","action_description":"Avansert handlingskonfigurasjon (sjå dokumentasjon)","navigation_path":"Navigasjonssti","navigation_path_description":"Sti å navigere til (t.d. /lovelace/dashboard)","url":"URL","url_description":"URL som skal opnast i ei ny fane"},"icon_appearance":{"header":"Ikonutsjånad","icon":"Ikonspesifikt","general":"Generell Utsjånad","active":"Aktiv Tilstand","inactive":"Inaktiv Tilstand","state_conditions":"Tilstandsbetingelsar","advanced":"Avanserte Innstillingar","icon_size":"Ikonstorleik","icon_size_description":"Storleik på ikonet i pikslar","text_size":"Tekststorleik","text_size_description":"Storleik på namn/tilstandstekst i pikslar","text_alignment":"Tekstjustering","text_alignment_description":"Korleis teksten vert justert under ikonet","icon_background":"Ikonbakgrunn","icon_background_description":"Legg til ei bakgrunnsform bak ikonet","text_appearance":"Tekstutforming","container":{"header":"Containerutsjånad","width":"Behaldar Breidde","width_description":"Angi breidda på ikonbehaldaren i høve til rada.","background":"Form på behaldarbakgrunn","background_description":"Vel ein bakgrunnsform for heile ikonbehaldaren.","container_background_color":"Farge på behaldarbakgrunn","vertical_alignment":"Vertikal Justering","vertical_alignment_description":"Juster ikon og tekst vertikalt inne i behaldaren."},"show_when_active":"Vis ikon når aktivt","show_when_active_description":"Vis dette ikonet berre når det er i ein aktiv tilstand","template_mode":"Malmodus","template_mode_description":"Bruk ein mal for å avgjere aktiv/inaktiv tilstand.","active_state":"Aktiv tilstand","active_state_description":"Tilstandsstreng som representerer \\"aktiv\\".","inactive_state":"Inaktiv tilstand","inactive_state_description":"Tilstandsstreng som representerer \\"inaktiv\\".","active_icon":"Aktivt ikon","inactive_icon":"Inaktivt ikon","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","active_icon_color":"Farge på aktivt ikon","inactive_icon_color":"Farge på inaktivt ikon","active_name_color":"Farge på aktivt namn","inactive_name_color":"Farge på inaktivt namn","active_state_color":"Farge på aktiv tilstand","inactive_state_color":"Farge på inaktiv tilstand","show_icon_active":"Vis ikon når aktivt","show_icon_active_description":"Vis ikonet når tilstanden er aktiv.","show_icon_inactive":"Vis ikon når inaktivt","show_icon_inactive_description":"Vis ikonet når tilstanden er inaktiv."},"tabs":{"general":"Generelt","appearance":"Utsjånad","states":"Tilstandar","active_state":"Aktiv Tilstand","inactive_state":"Inaktiv Tilstand"},"alignments":{"flex-start":"Venstre","center":"Senter","flex-end":"Høgre","space-between":"Mellomrom mellom","space-around":"Mellomrom rundt","space-evenly":"Jamnt mellomrom"},"vertical_alignments":{"flex-start":"Topp","center":"Midten","flex-end":"Botn"},"spacing":{"none":"Ingen","small":"Liten","medium":"Medium","large":"Stor"},"text_positions":{"below":"Under ikonet","beside":"Ved sida av ikonet","none":"Ingen tekst","top":"Topp","left":"Venstre","right":"Høgre"},"reset":{"size":"Tilbakestill til standardstorleik","color":"Tilbakestill til standardfarge","all":"Tilbakestill til standardverdiar"},"click_actions":{"toggle":"Veksle eininga","more-info":"Vis meir informasjon","navigate":"Naviger til sti","url":"Opne URL","call-service":"Kall teneste","perform-action":"Utfør handling","location-map":"Vis posisjonen på kart","assist":"Stemmeassistent","none":"Inga handling","descriptions":{"toggle":"Vekslar tilstanden til eininga.","more-info":"Opnar meir-info dialogen for eininga.","navigate":"Navigerer til den angitte Lovelace-stien.","url":"Opnar den angitte URL-en i ei ny fane.","call-service":"Kallar den angitte Home Assistant-tenesta.","perform-action":"Utfører ei eigendefinert handling (sjå dokumentasjon).","location-map":"Viser eininga på eit kart.","assist":"Opnar Home Assistant stemmeassistenten.","none":"Inga handling vil bli utført."}},"backgrounds":{"none":"Ingen","circle":"Sirkel","square":"Kvadrat","rounded_square":"Avrunda kvadrat"},"container_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"},"row_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"}},"customize":{"layout":{"title":"Layoutstil","description":"Vel mellom enkelt-kolonne eller dobbelt-kolonne layout for kortet","header":"Layoutinnstillingar"},"layout_types":{"single":"Enkelt kolonne","double":"Dobbelt kolonne"},"sections":{"header":"Kortseksjonar","arrangement_header":"Seksjonsarrangement","arrangement_desc_base":"Dra og slepp seksjonar for å arrangere rekkjefølgja på kortet.","arrangement_desc_single_extra":"Alle seksjonar vil bli vist i ei enkelt kolonne.","arrangement_desc_double_extra":"I ein dobbelt-kolonne layout kan du plassere alle seksjonar i anten venstre eller høgre kolonne."},"section_labels":{"title":"Tittel","image":"Køyretøybilete","info":"Køyretøyinfo"},"actions":{"collapse_margins":"Skjul marginar","expand_margins":"Utvid marginar"},"margins":{"top":"Toppmargine","bottom":"Botnmargine"},"columns":{"left":"Venstre kolonne","right":"Høgre kolonne","empty":"Slepp seksjonar her"},"css":{"header":"Global CSS","description":"Skriv inn eigendefinerte CSS-reglar her for å overstyre kortet sin standardstil. Desse reglane vil bli brukt direkte på kortet. Bruk med varsemd.","label":"Eigendefinert CSS","input_description":"Skriv inn dine eigendefinerte CSS-reglar her."}},"backgrounds":{"none":"Ingen","circle":"Sirkel","square":"Kvadrat","rounded_square":"Avrunda kvadrat"},"container_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"},"row_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Utvikla av","discord_button":"Bli med i vår Discord","github_button":"Besøk vår Github","docs_button":"Sjå vår dokumentasjon","support_title":"Støtt Ultra Vehicle Card","support_para":"Dine generøse donasjonar driv utviklinga av fantastiske funksjonar for dette kortet! Utan støtte frå brukarar som deg ville kontinuerleg innovasjon ikkje vore mogleg.","donate_button":"DONÉR (PAYPAL)"}}');var Xe=a.t(Qe,2);const et=JSON.parse('{"editor":{"tabs":{"settings":"Inställningar","bars":"Staplar","icons":"Ikoner","customize":"Anpassa","about":"Om"},"card_settings":{"title":"Korttitel","title_alignment":"Titeljustering","title_size":"Titelstorlek","title_description":"Titel som visas överst på kortet (valfritt)","title_alignment_description":"Hur korttiteln justeras","title_size_description":"Storlek på korttiteln i pixlar","format_entities":"Formatera Entitetsvärden","format_entities_description":"Aktivera ytterligare formatering av entitetsvärden (lägg till kommatecken, konvertera enheter, etc.)","show_units":"Visa Enheter","show_units_description":"Visa måttenheter bredvid värden"},"vehicle_info":{"title":"Fordonsinformation","location":{"title":"Platsentitet","description":"Välj entiteten som visar fordonets nuvarande plats.","show":"Visa Plats","show_description":"Visa fordonets plats"},"mileage":{"title":"Milentitet","description":"Välj entiteten som representerar fordonets totala körsträcka eller vägmätare.","show":"Visa Körsträcka","show_description":"Visa fordonets körsträcka"},"car_state":{"title":"Fordonstillståndsentitet","description":"Välj entiteten som representerar fordonets nuvarande tillstånd (t.ex. parkerad, körning, laddning).","show":"Visa Fordonstillstånd","show_description":"Visa fordonets tillstånd"}},"images":{"vehicle":{"title":"Fordonsbild","description":"Konfigurera huvudbilden som visas för fordonet.","type":"Fordonsbildtyp","width":"Bildbredd","crop":"Beskär Bild","entity":"Bildentitet","entity_description":"Entitet som tillhandahåller bild-URL"},"action":{"title":"Åtgärdsbild","description":"Visa valfritt en annan bild när en entitet når ett visst tillstånd (t.ex. visa en laddningsbild när bilen är inkopplad).","type":"Åtgärdsbildtyp","width":"Bildbredd","crop":"Beskär Bild","entity":"Åtgärdsentitet","entity_description":"Entitet som utlöser åtgärdsbilden","state":"Åtgärdstillstånd","state_description":"Tillståndsvärde som utlöser åtgärdsbilden"}},"crop":{"title":"Bildbeskärning","top":"Övre","right":"Höger","bottom":"Nedre","left":"Vänster","pixels":"px","help":"Ange värden i pixlar (positiva eller negativa) för att justera beskärning och utfyllnad"},"alignment":{"left":"Vänster","center":"Centrera","right":"Höger"},"common":{"choose_file":"Välj Fil","no_file_chosen":"Ingen fil vald","entity":"Entitet","width":"Bredd","width_description":"Bredd som procent av kortet","none":"Ingen","default":"Standard","upload":"Ladda upp","url":"URL","url_description":"URL som pekar på bilden","reset":"Återställ"},"bars":{"title":"Procentstaplar","description":"Lägg till procentstaplar för att visa värden som bränslenivå, batteriladdning eller räckvidd. Varje stapel kan visa ett primärt procentvärde med valfria etiketter till vänster och höger.","add":"Lägg till ny stapel","duplicate":"Duplicera stapel","delete":"Ta bort stapel","expand":"Expandera stapel","collapse":"Fäll ihop stapel","bar_prefix":"Stapel","no_entity":"Ingen entitet vald","tabs":{"config":"Konfiguration","colors":"Färger","animation":"Animation"},"settings":{"header":"Stapelkonfiguration","entity":"Stapelprocentsentitet","entity_description":"Välj en entitet som returnerar ett procentvärde (0-100). Detta styr fyllnadsnivån på stapeln.","limit_entity":"Gränsentitet (valfritt)","limit_entity_description":"Valfritt: Lägg till en vertikal indikatorlinje på stapeln (t.ex. laddningsgräns för elbilsbatteri).","limit_color":"Gränsindikatorsfärg","limit_color_description":"Färg på den vertikala linjen som indikerar gränspositionen på stapeln. Ändringar tvingar en uppdatering av kortet.","bar_size":"Stapelstorlek","bar_size_description":"Ställer in tjocklek/höjd på förloppsstapeln.","width":"Stapelbredd","width_description":"Ställer in bredden på stapeln som procent av kortbredden.","alignment":"Etikettjustering","alignment_description":"Hur vänster- och högeretiketter justeras i förhållande till varandra.","bar_radius":"Hörn på stapel","bar_radius_description":"Form på hörnen av förloppsstapeln"},"left_side":{"header":"Vänster Sida","toggle_description":"Visa eller dölj vänster sida av stapeletiketten","title":"Vänster Titel","title_description":"Valfri etikett som visas på vänster sida under stapeln.","entity":"Vänster Entitet","entity_description":"Entitet vars värde visas på vänster sida av stapeln.","alignment_description":"Kontrollerar hur denna etikett justeras under stapeln.","title_size":"Titelstorlek","value_size":"Värdestorlek","hidden_message":"Vänster sida är dold"},"right_side":{"header":"Höger Sida","toggle_description":"Visa eller dölj höger sida av stapeletiketten","title":"Höger Titel","title_description":"Valfri etikett som visas på höger sida under stapeln.","entity":"Höger Entitet","entity_description":"Entitet vars värde visas på höger sida av stapeln.","alignment_description":"Kontrollerar hur denna etikett justeras under stapeln.","title_size":"Titelstorlek","value_size":"Värdestorlek","hidden_message":"Höger sida är dold"},"colors":{"header":"Färger","bar_color":"Stapelfärg","background_color":"Bakgrundsfärg","border_color":"Kantfärg","limit_indicator_color":"Gränsindikatorsfärg","left_title_color":"Vänster Titelfärg","left_value_color":"Vänster Värdefärg","right_title_color":"Höger Titelfärg","right_value_color":"Höger Värdefärg","reset_color":"Återställ till standardfärg"},"gradient":{"header":"Gradientläge","toggle":"Använd Gradient","toggle_description":"Använd en gradient för förloppsstapeln istället för en enkel färg","display_mode":"Gradientvisningsläge","display_mode_full":"Full","display_mode_value_based":"Värdebaserad","display_mode_description":"Full: Visar hela gradienten. Värdebaserad: Visar gradienten upp till aktuellt värde.","editor_header":"Gradientredigerare","add_stop":"Lägg till stopp"},"animation":{"header":"Åtgärdsanimation","description":"Lägg till animationer på stapeln när en specifik entitet når ett visst tillstånd. Perfekt för att visa laddningsstatus, larmtillstånd och mer.","pro_tip":"Proffstips: För \'alltid aktiva\' animationer, välj en animationstyp men lämna entitets- och tillståndsfälten tomma. Prova \'Bubblor\' och \'Fyll\' animationerna!","entity":"Animationsentitet","entity_description":"Entitet som utlöser animationen när den matchar det angivna tillståndet","state":"Entitetstillstånd","state_description":"När entitetens tillstånd matchar detta värde kommer animationen att utlösas","type":"Animationstyp","type_description":"Animationseffekten som visas när entitetens tillstånd matchar","select_entity_prompt":"Välj en Entitet och ange tillståndet du vill utlösa animationen med (exempel: \\"charging\\", \\"on\\", \\"idle\\")"},"bar_sizes":{"thin":"Tunn","regular":"Normal","thick":"Tjock","thiccc":"Extra tjock"},"bar_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (Full bredd)"},"bar_alignments":{"space-between":"Utrymme mellan","flex-start":"Vänster","center":"Centrera","flex-end":"Höger"},"animation_types":{"none":"Ingen","charging-lines":"Laddning (Diagonala linjer)","pulse":"Puls","blinking":"Blinkande","bouncing":"Studsande","glow":"Glödande","rainbow":"Regnbåge","bubbles":"Bubblor","fill":"Fyll"},"bar_radius":{"round":"Rund","square":"Fyrkantig","rounded-square":"Rundad Fyrkant"}},"icons":{"title":"Kortikoner","description":"Lägg till ikonrader för att visa flera ikoner på ditt kort. Varje rad kan konfigureras med olika inställningar. Obs: Ikonrader och sektionsordning kan omorganiseras i fliken Anpassa.","add_row":"Lägg till ikonrad","duplicate_row":"Duplicera rad","delete_row":"Ta bort rad","expand_row":"Expandera rad","collapse_row":"Fäll ihop rad","no_row":"Inga ikonrader har lagts till","row_prefix":"Rad","icon_prefix":"Ikon","row_settings":{"header":"Radinställningar","width":"Radbredd","width_description":"Bredd på raden som procent av kortbredden","alignment":"Radjustering","alignment_description":"Hur ikoner justeras i denna rad","spacing":"Ikonavstånd","spacing_description":"Mängd utrymme mellan ikoner i denna rad"},"add_icon":"Lägg till ikon","duplicate_icon":"Duplicera ikon","delete_icon":"Ta bort ikon","expand_icon":"Expandera ikon","collapse_icon":"Fäll ihop ikon","no_icon":"Ingen ikon vald","icon_settings":{"header":"Ikoninställningar","entity":"Entitet","entity_description":"Entitet som visas med denna ikon","icon":"Ikon","icon_description":"Välj en ikon eller ange en anpassad ikon","name":"Namn","name_description":"Anpassat namn som visas under ikonen (använder entitetsnamn som standard om inte angivet)","show_name":"Visa Namn","show_name_description":"Visa namntexten under ikonen","show_state":"Visa Tillstånd","show_state_description":"Visa entitetens tillstånd under ikonen","show_units":"Visa Enheter","show_units_description":"Inkludera enheter när tillståndet visas","text_position":"Textposition","text_position_description":"Var namn- och tillståndstexten placeras i förhållande till ikonen","click_action":"Klickåtgärd","service":"Tjänst","service_description":"Tjänst att anropa (t.ex. light.turn_on)","service_data":"Tjänstdata (JSON)","service_data_description":"JSON-data som skickas med tjänstanropet","action":"Åtgärd (JSON/Tjänst)","action_description":"Avancerad åtgärdskonfiguration (se dokumentation)","navigation_path":"Navigationssökväg","navigation_path_description":"Sökväg att navigera till (t.ex. /lovelace/dashboard)","url":"URL","url_description":"URL att öppna i en ny flik"},"icon_appearance":{"header":"Ikonutseende","icon":"Ikonspecifikt","general":"Allmänt Utseende","active":"Aktivt Tillstånd","inactive":"Inaktivt Tillstånd","state_conditions":"Tillståndsvillkor","advanced":"Avancerade Inställningar","icon_size":"Ikonstorlek","icon_size_description":"Storlek på ikonen i pixlar","text_size":"Textstorlek","text_size_description":"Storlek på namn/tillståndstext i pixlar","text_alignment":"Textjustering","text_alignment_description":"Hur texten justeras under ikonen","icon_background":"Ikonbakgrund","icon_background_description":"Lägg till en bakgrundsform bakom ikonen","text_appearance":"Textutseende","container":{"header":"Containerutseende","width":"Behållarbredd","width_description":"Ange bredden på ikonbehållaren i förhållande till raden.","background":"Behållarens bakgrundsform","background_description":"Välj en bakgrundsform för hela ikonbehållaren.","vertical_alignment":"Vertikal Justering","vertical_alignment_description":"Justera ikonen och texten vertikalt inom behållaren.","container_background_color":"Behållarens bakgrundsfärg"},"show_when_active":"Visa ikon när aktiv","show_when_active_description":"Visa denna ikon endast när den är i ett aktivt tillstånd","template_mode":"Mallläge","template_mode_description":"Använd en mall för att bestämma aktivt/inaktivt tillstånd.","active_state":"Aktivt tillstånd","active_state_description":"Tillståndssträng som representerar \\"aktiv\\".","inactive_state":"Inaktivt tillstånd","inactive_state_description":"Tillståndssträng som representerar \\"inaktiv\\".","active_icon":"Aktiv ikon","inactive_icon":"Inaktiv ikon","active_template":"Active Template","active_template_description":"Template that evaluates to true when the icon should be active.","inactive_template":"Inactive Template","inactive_template_description":"Template that evaluates to true when the icon should be inactive.","active_icon_color":"Färg på aktiv ikon","inactive_icon_color":"Färg på inaktiv ikon","active_name_color":"Färg på aktivt namn","inactive_name_color":"Färg på inaktivt namn","active_state_color":"Färg på aktivt tillstånd","inactive_state_color":"Färg på inaktivt tillstånd","show_icon_active":"Visa ikon när aktiv","show_icon_active_description":"Visa ikonen när tillståndet är aktivt.","show_icon_inactive":"Visa ikon när inaktiv","show_icon_inactive_description":"Visa ikonen när tillståndet är inaktivt."},"tabs":{"general":"Allmänt","appearance":"Utseende","states":"Tillstånd","active_state":"Aktivt Tillstånd","inactive_state":"Inaktivt Tillstånd"},"alignments":{"flex-start":"Vänster","center":"Centrera","flex-end":"Höger","space-between":"Utrymme mellan","space-around":"Utrymme runt","space-evenly":"Jämnt utrymme"},"vertical_alignments":{"flex-start":"Övre","center":"Mitten","flex-end":"Nedre"},"spacing":{"none":"Inget","small":"Litet","medium":"Medium","large":"Stort"},"text_positions":{"below":"Under ikonen","beside":"Bredvid ikonen","none":"Ingen text","top":"Övre","left":"Vänster","right":"Höger"},"reset":{"size":"Återställ till standardstorlek","color":"Återställ till standardfärg","all":"Återställ till standardvärden"},"click_actions":{"toggle":"Växla entitet","more-info":"Visa mer information","navigate":"Navigera till sökväg","url":"Öppna URL","call-service":"Anropa tjänst","perform-action":"Utför åtgärd","location-map":"Visa plats på karta","assist":"Röstassistent","none":"Ingen åtgärd","descriptions":{"toggle":"Växlar entitetens tillstånd.","more-info":"Öppnar mer-info dialogen för entiteten.","navigate":"Navigerar till den angivna Lovelace-sökvägen.","url":"Öppnar den angivna URL:en i en ny flik.","call-service":"Anropar den angivna Home Assistant-tjänsten.","perform-action":"Utför en anpassad åtgärd (se dokumentation).","location-map":"Visar entiteten på en karta.","assist":"Öppnar Home Assistant röstassistenten.","none":"Ingen åtgärd kommer att utföras."}},"backgrounds":{"none":"Ingen","circle":"Cirkel","square":"Kvadrat","rounded_square":"Rundad kvadrat"},"container_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (Full bredd)"},"row_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (Full bredd)"}},"customize":{"layout":{"title":"Layoutstil","description":"Välj mellan enkel- eller dubbelkolumnlayout för kortet","header":"Layoutinställningar"},"layout_types":{"single":"Enkel kolumn","double":"Dubbel kolumn"},"sections":{"header":"Kortsektioner","arrangement_header":"Sektionsarrangemang","arrangement_desc_base":"Dra och släpp sektioner för att arrangera deras ordning på kortet.","arrangement_desc_single_extra":"Alla sektioner kommer att visas i en enkel kolumn.","arrangement_desc_double_extra":"I en dubbelkolumnlayout kan du placera alla sektioner i antingen vänster eller höger kolumn."},"section_labels":{"title":"Titel","image":"Fordonsbild","info":"Fordonsinfo"},"actions":{"collapse_margins":"Fäll ihop marginaler","expand_margins":"Expandera marginaler"},"margins":{"top":"Övre marginal","bottom":"Nedre marginal"},"columns":{"left":"Vänster kolumn","right":"Höger kolumn","empty":"Släpp sektioner här"},"css":{"header":"Global CSS","description":"Ange anpassade CSS-regler här för att åsidosätta kortets standardstil. Dessa regler kommer att tillämpas direkt på kortet. Använd med försiktighet.","label":"Anpassad CSS","input_description":"Ange dina anpassade CSS-regler här."}},"backgrounds":{"none":"Ingen","circle":"Cirkel","square":"Kvadrat","rounded_square":"Rundad kvadrat"},"container_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (Full bredd)"},"row_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (Full bredd)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Utvecklad av","discord_button":"Gå med i vår Discord","github_button":"Besök vår Github","docs_button":"Se vår dokumentation","support_title":"Stöd Ultra Vehicle Card","support_para":"Dina generösa donationer driver utvecklingen av fantastiska funktioner för detta kort! Utan stöd från användare som dig skulle fortsatt innovation inte vara möjlig.","donate_button":"DONERA (PAYPAL)"}}'),tt={en:Ve,de:De,es:Pe,fr:Ue,it:Fe,da:He,"en-GB":Ke,nl:Je,nb:Ye,nn:Xe,sv:a.t(et,2)};function it(e,t){try{const i=tt[t];return e.split(".").reduce(((e,t)=>null==e?void 0:e[t]),i)}catch(e){return}}function nt(e,t,i){const n=it(e,t);if(n)return n;if("en"!==t){const t=it(e,"en");if(t)return t}return i||e}var at=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let ot=class extends pe{constructor(){super(...arguments),this._vehicleCropExpanded=!1,this._actionCropExpanded=!1}set config(e){const t=Object.assign({},e);void 0===t.show_units&&(t.show_units=!0),void 0===t.action_image_type&&(t.action_image_type="none",delete t.action_entity,delete t.action_state),t.show_units===e.show_units&&t.action_image_type===e.action_image_type&&t.action_entity===e.action_entity&&t.action_state===e.action_state||Ce(this,"config-changed",{config:t}),this._config=t}get config(){return this._config}_t(e,t){var i,n;return nt(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}_formatFieldName(e){return e?e.replace(/^./,(e=>e.toUpperCase())).replace(/_/g," "):""}_truncatePath(e,t=40){if(!e||e.length<=t)return e;const i=Math.floor(t/2)-1,n=t-i-3;return i<0||n<0?e:`${e.substring(0,i)}...${e.substring(e.length-n)}`}_valueChanged(e){if(e.stopPropagation(),!this._config)return;const t=Object.assign(Object.assign({},this._config),e.detail.value);void 0===t.show_units&&(t.show_units=!0),"none"===e.detail.value.action_image_type&&(delete t.action_entity,delete t.action_state),Ce(this,"config-changed",{config:t})}_getImageSchema(e){const t=`${e}_image_type`,i=`${e}_image`,n=`${e}_image_entity`,a=`${e}_image_width`,o=[{value:"none",label:this._t("editor.common.none","None")}];"vehicle"===e&&o.push({value:"default",label:this._t("editor.common.default","Default")}),o.push({value:"upload",label:this._t("editor.common.upload","Upload")},{value:"url",label:this._t("editor.common.url","URL")},{value:"entity",label:this._t("editor.common.entity","Entity")});const r=[{name:t,selector:{select:{options:o,mode:"dropdown"}},label:this._t(`editor.images.${e}.type`),description:this._t(`editor.images.${e}.type_description`,`Select how to display the ${e} image`)}],s=this._config[t];return"url"===s?r.push({name:i,selector:{text:{}},label:this._t("editor.common.url","URL"),description:this._t("editor.images.common.url_description","URL pointing to the image to display")}):"entity"===s&&r.push({name:n,selector:{entity:{}},label:this._t(`editor.images.${e}.entity`),description:this._t(`editor.images.${e}.entity_description`)}),s&&"none"!==s&&r.push({name:a,selector:{number:{min:0,max:100,step:1,mode:"box",suffix:"%"}},label:this._t(`editor.images.${e}.width`),description:this._t("editor.common.width_description")}),r}_dispatchFileUpload(e,t){var i;const n=e.target,a=null===(i=n.files)||void 0===i?void 0:i[0];a&&(this.dispatchEvent(new CustomEvent("file-upload",{detail:{file:a,configKey:t},bubbles:!0,composed:!0})),n.value="")}_resetTitleSize(){const e=Object.assign(Object.assign({},this._config),{title_size:void 0});Ce(this,"config-changed",{config:e})}_createDefaultCropSettings(){return{top:0,right:0,bottom:0,left:0}}_renderCropSliders(e){const t=this._config[e]||this._createDefaultCropSettings();return W`
      <div class="crop-input-row">
        <div class="crop-input-field">
          <span class="crop-label">${this._t("editor.crop.top","Top")}</span>
          <ha-textfield
            type="number"
            .value=${String(t.top||0)}
            @input=${t=>this._updateImageCrop(e,"top",parseInt(t.target.value)||0)}
          ></ha-textfield>
          <span class="crop-unit">${this._t("editor.crop.pixels","px")}</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">${this._t("editor.crop.right","Right")}</span>
          <ha-textfield
            type="number"
            .value=${String(t.right||0)}
            @input=${t=>this._updateImageCrop(e,"right",parseInt(t.target.value)||0)}
          ></ha-textfield>
          <span class="crop-unit">${this._t("editor.crop.pixels","px")}</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">${this._t("editor.crop.bottom","Bottom")}</span>
          <ha-textfield
            type="number"
            .value=${String(t.bottom||0)}
            @input=${t=>this._updateImageCrop(e,"bottom",parseInt(t.target.value)||0)}
          ></ha-textfield>
          <span class="crop-unit">${this._t("editor.crop.pixels","px")}</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">${this._t("editor.crop.left","Left")}</span>
          <ha-textfield
            type="number"
            .value=${String(t.left||0)}
            @input=${t=>this._updateImageCrop(e,"left",parseInt(t.target.value)||0)}
          ></ha-textfield>
          <span class="crop-unit">${this._t("editor.crop.pixels","px")}</span>
        </div>
      </div>

      <div class="crop-explanation">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <span
          >${this._t("editor.crop.help","Enter pixel values (positive or negative) to adjust cropping and padding")}</span
        >
      </div>
    `}_updateImageCrop(e,t,i){const n=this._config[e]||this._createDefaultCropSettings(),a=Number.isFinite(i)?i:0,o=Object.assign(Object.assign({},n),{[t]:a});if(0===o.top&&0===o.right&&0===o.bottom&&0===o.left){const t=Object.assign({},this._config);delete t[e],Ce(this,"config-changed",{config:t})}else{const t=Object.assign(Object.assign({},this._config),{[e]:o});Ce(this,"config-changed",{config:t})}}render(){if(!this.hass||!this._config)return W``;const e=[{name:"formatted_entities",selector:{boolean:{}},label:this._t("editor.card_settings.format_entities"),description:this._t("editor.card_settings.format_entities_description","Enable additional formatting of entity values (add commas, convert units, etc.)")},{name:"show_units",selector:{boolean:{}},label:this._t("editor.card_settings.show_units"),description:this._t("editor.card_settings.show_units_description","Display units of measurement alongside values")}];return W`
      <div class="tab-content">
        <!-- Card Title Section -->
        <div class="settings-section">
          <div class="section-header">${this._t("editor.card_settings.title")}</div>
          <div class="settings-content">
            <ha-form
              .hass=${this.hass}
              .data=${this._config}
              .schema=${[{name:"title",selector:{text:{}},label:this._t("editor.card_settings.title"),description:this._t("editor.card_settings.title_description","Title displayed at the top of the card (optional)")},{name:"title_alignment",selector:{select:{options:[{value:"left",label:this._t("editor.alignment.left","Left")},{value:"center",label:this._t("editor.alignment.center","Center")},{value:"right",label:this._t("editor.alignment.right","Right")}],mode:"dropdown"}},label:this._t("editor.card_settings.title_alignment"),description:this._t("editor.card_settings.title_alignment_description","How to align the card title")}]}
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
                  .schema=${[{name:"title_size",selector:{number:{mode:"box",unit:"px"}},label:this._t("editor.card_settings.title_size"),description:this._t("editor.card_settings.title_size_description","Size of the card title in pixels")}]}
                  .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
                  .computeDescription=${e=>e.description}
                  @value-changed=${this._valueChanged}
                ></ha-form>
                <ha-icon-button
                  class="inline-reset-button"
                  @click=${this._resetTitleSize}
                  title=${this._t("editor.common.reset","Reset")}
                >
                  <ha-icon icon="mdi:refresh"></ha-icon>
                </ha-icon-button>
              </div>
            </div>
          </div>
        </div>

        <!-- Vehicle Information Section -->
        <div class="settings-section">
          <div class="section-header">
            ${this._t("editor.vehicle_info.title","Vehicle Information")}
          </div>
          <div class="settings-content">
            ${[[{name:"location_entity",selector:{entity:{}},label:this._t("editor.vehicle_info.location.title"),description:this._t("editor.vehicle_info.location.description")},{name:"show_location",selector:{boolean:{}},label:this._t("editor.vehicle_info.location.show"),description:this._t("editor.vehicle_info.location.show_description","Display the vehicle location")}],[{name:"mileage_entity",selector:{entity:{}},label:this._t("editor.vehicle_info.mileage.title"),description:this._t("editor.vehicle_info.mileage.description")},{name:"show_mileage",selector:{boolean:{}},label:this._t("editor.vehicle_info.mileage.show"),description:this._t("editor.vehicle_info.mileage.show_description","Display the vehicle mileage")}],[{name:"car_state_entity",selector:{entity:{}},label:this._t("editor.vehicle_info.car_state.title"),description:this._t("editor.vehicle_info.car_state.description")},{name:"show_car_state",selector:{boolean:{}},label:this._t("editor.vehicle_info.car_state.show"),description:this._t("editor.vehicle_info.car_state.show_description","Display the vehicle state")}]].map((e=>W`
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
          <div class="section-header">${this._t("editor.images.vehicle.title")}</div>
          <div class="image-description">${this._t("editor.images.vehicle.description")}</div>
          <div class="settings-content">
            <ha-form
              class="config-form"
              .hass=${this.hass}
              .data=${this._config}
              .schema=${this._getImageSchema("vehicle")}
              .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
              .computeDescription=${e=>e.description}
              @value-changed=${this._valueChanged}
            ></ha-form>
            ${"upload"===this._config.vehicle_image_type?W`
                  <div class="upload-container" style="margin: 16px 0;">
                    <div class="file-upload-row">
                      <label class="file-upload-button">
                        <div class="button-content">
                          <span class="button-label"
                            >${this._t("editor.common.choose_file","Choose File")}</span
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
                        ${this._config.vehicle_image?W`<span class="uploaded-path" title="${this._config.vehicle_image}">
                              ${this._truncatePath(this._config.vehicle_image)}
                            </span>`:W`<span class="no-file"
                              >${this._t("editor.common.no_file_chosen","No file chosen")}</span
                            >`}
                      </div>
                    </div>
                  </div>
                `:""}
            ${this._config.vehicle_image_type&&"none"!==this._config.vehicle_image_type?W`
                  <div class="crop-accordion" style="margin-top: 16px;">
                    <div
                      class="crop-accordion-header"
                      @click=${()=>{this._vehicleCropExpanded=!this._vehicleCropExpanded}}
                    >
                      <span>${this._t("editor.images.vehicle.crop")}</span>
                      <ha-icon
                        icon="${this._vehicleCropExpanded?"mdi:chevron-up":"mdi:chevron-down"}"
                      ></ha-icon>
                    </div>
                    ${this._vehicleCropExpanded?W`
                          <div class="crop-controls">
                            ${this._renderCropSliders("vehicle_image_crop")}
                          </div>
                        `:""}
                  </div>
                `:""}
          </div>
        </div>

        <!-- Action Image Section -->
        <div class="settings-section">
          <div class="section-header">${this._t("editor.images.action.title")}</div>
          <div class="image-description">${this._t("editor.images.action.description")}</div>
          <div class="settings-content">
            <!-- Action Image Type selection -->
            <ha-form
              class="config-form"
              .hass=${this.hass}
              .data=${this._config}
              .schema=${this._getImageSchema("action")}
              .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
              .computeDescription=${e=>e.description}
              @value-changed=${this._valueChanged}
            ></ha-form>

            <!-- File upload UI for upload type -->
            ${"upload"===this._config.action_image_type?W`
                  <div class="upload-container" style="margin: 16px 0;">
                    <div class="file-upload-row">
                      <label class="file-upload-button">
                        <div class="button-content">
                          <span class="button-label"
                            >${this._t("editor.common.choose_file","Choose File")}</span
                          >
                          <input
                            type="file"
                            accept="image/*"
                            @change=${e=>this._dispatchFileUpload(e,"action_image")}
                            id="action-image-upload"
                            style="display: none;"
                          />
                        </div>
                      </label>

                      <div class="path-display">
                        ${this._config.action_image?W`<span class="uploaded-path" title="${this._config.action_image}">
                              ${this._truncatePath(this._config.action_image)}
                            </span>`:W`<span class="no-file"
                              >${this._t("editor.common.no_file_chosen","No file chosen")}</span
                            >`}
                      </div>
                    </div>
                  </div>
                `:""}

            <!-- Crop controls for any image type except 'none' -->
            ${this._config.action_image_type&&"none"!==this._config.action_image_type?W`
                  <div class="crop-accordion" style="margin-top: 16px;">
                    <div
                      class="crop-accordion-header"
                      @click=${()=>{this._actionCropExpanded=!this._actionCropExpanded}}
                    >
                      <span>${this._t("editor.images.action.crop")}</span>
                      <ha-icon
                        icon="${this._actionCropExpanded?"mdi:chevron-up":"mdi:chevron-down"}"
                      ></ha-icon>
                    </div>
                    ${this._actionCropExpanded?W`
                          <div class="crop-controls">
                            ${this._renderCropSliders("action_image_crop")}
                          </div>
                        `:""}
                  </div>

                  <!-- Action Entity & State - only shown when action_image_type is not 'none' -->
                  <div class="vehicle-info-card" style="margin-top: 16px;">
                    <div class="vehicle-info-title">${this._t("editor.images.action.entity")}</div>
                    <div class="vehicle-info-description">
                      ${this._t("editor.images.action.entity_description")}
                    </div>
                    <div class="settings-content" style="padding: 8px 16px 16px;">
                      <ha-form
                        .hass=${this.hass}
                        .data=${this._config}
                        .schema=${[{name:"action_entity",selector:{entity:{}}}]}
                        .computeLabel=${()=>""}
                        @value-changed=${this._valueChanged}
                      ></ha-form>
                    </div>
                  </div>

                  <div class="vehicle-info-card" style="margin-top: 16px;">
                    <div class="vehicle-info-title">${this._t("editor.images.action.state")}</div>
                    <div class="vehicle-info-description">
                      ${this._t("editor.images.action.state_description")}
                    </div>
                    <div class="settings-content" style="padding: 8px 16px 16px;">
                      <ha-form
                        .hass=${this.hass}
                        .data=${this._config}
                        .schema=${[{name:"action_state",selector:{text:{}}}]}
                        .computeLabel=${()=>""}
                        @value-changed=${this._valueChanged}
                      ></ha-form>
                    </div>
                  </div>
                `:""}
          </div>
        </div>

        <!-- Card Settings Section -->
        <div class="settings-section">
          <div class="section-header">${this._t("editor.card_settings.title")}</div>
          <div class="settings-content">
            ${e.map((e=>{const t=e.selector&&"boolean"in e.selector;return W`
                <div class="vehicle-info-card">
                  <div class="vehicle-info-title">${e.label}</div>
                  ${e.description?W`<div class="vehicle-info-description">${e.description}</div>`:""}
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
      </div>
    `}connectedCallback(){if(super.connectedCallback(),this._config){const e=Object.assign({},this._config);let t=!1;void 0===e.show_units&&(e.show_units=!0,t=!0),void 0===e.action_image_type&&(e.action_image_type="none",t=!0),t&&Ce(this,"config-changed",{config:e})}}};ot.styles=c`
    /* Add relevant styles from the original editor here */
    /* Base layout */
    .tab-content,
    .section-content {
      display: flex;
      flex-direction: column;
      gap: 16px; /* Consistent gap */
    }

    .settings-section {
      margin-bottom: 0; /* Removed margin, gap handled by parent */
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
      color: var(--text-primary-color); /* Ensure contrast */
      margin-bottom: 0;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      /* Remove bottom border if settings-content follows directly */
      border-bottom: 1px solid var(--divider-color);
    }

    .settings-content {
      padding: 16px;
      display: flex; /* Use flex instead of grid */
      flex-direction: column; /* Stack items vertically */
      gap: 16px; /* Add gap between direct children */
      background-color: var(--primary-background-color);
    }

    /* Forms and inputs */
    ha-form {
      padding: 0;
      margin-bottom: 0; /* Remove bottom margin from ha-form itself */
    }

    /* Ensure ha-form children have spacing */
    ha-form > * {
      margin-bottom: 16px;
    }
    ha-form > *:last-child {
      margin-bottom: 0;
    }

    /* Size field with inline reset button */
    .size-fields-container {
      display: flex;
      flex-direction: column; /* Stack size fields */
      gap: 16px; /* Add gap between size fields */
      margin-top: 8px; /* Keep top margin */
    }

    .size-field {
      display: flex;
      align-items: center;
      position: relative;
      gap: 8px; /* Add gap between ha-form and reset button */
    }

    .size-field ha-form {
      flex: 1;
      margin-bottom: 0; /* Reset margin */
    }

    .inline-reset-button {
      --mdc-icon-button-size: 36px;
      color: var(--secondary-text-color);
      opacity: 0.8;
      flex-shrink: 0; /* Prevent button shrinking */
    }

    .inline-reset-button:hover {
      opacity: 1;
      color: var(--primary-color);
    }

    /* Vehicle information styles */
    .vehicle-info-card {
      margin-bottom: 0; /* Remove bottom margin as gap is handled by parent */
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      background-color: var(--primary-background-color); /* Ensure background color */
      overflow: hidden;
      padding: 0; /* Remove padding */
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
      width: 68px; /* Keep width */
    }

    .vehicle-info-controls ha-form {
      margin-bottom: 0;
    }

    /* File upload */
    .upload-container {
      margin: 0; /* Remove margin */
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

    /* Image description */
    .image-description {
      padding: 16px; /* T R B L padding */
      color: var(--secondary-text-color);
      font-size: 0.9em;
      line-height: 1.4;
      margin-top: -8px; /* Pull description closer to header */
      background: var(--primary-background-color); /* Match settings-content background */
      border-top: 1px solid var(--divider-color); /* Add border if needed */
    }

    /* Crop */
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
      background-color: var(--primary-background-color); /* Match settings-content background */
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

    /* Toggle container */
    .toggle-form-container {
      padding: 0 16px 0; /* Remove top/bottom padding */
    }

    /* Adjust boolean toggle form item */
    .vehicle-info-card .toggle-form-container ha-form > * {
      margin-bottom: 0; /* Remove default margin for boolean toggle */
    }
  `,at([me({attribute:!1})],ot.prototype,"hass",void 0),at([me({attribute:!1})],ot.prototype,"config",null),at([ve()],ot.prototype,"_config",void 0),at([ve()],ot.prototype,"_vehicleCropExpanded",void 0),at([ve()],ot.prototype,"_actionCropExpanded",void 0),ot=at([he("settings-tab")],ot);var rt=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};const st={bar_color:"var(--primary-color, #3498db)",background_color:"var(--card-background-color, #121212)",border_color:"var(--divider-color, #555555)",left_title_color:"var(--secondary-text-color, #999999)",left_text_color:"var(--primary-text-color, #ffffff)",right_title_color:"var(--secondary-text-color, #999999)",right_text_color:"var(--primary-text-color, #ffffff)",limit_indicator_color:"var(--error-color, #ff0000)"},lt={left_title:"",left_entity:"",right_title:"",right_entity:"",bar_color:st.bar_color,background_color:st.background_color,border_color:st.border_color,left_title_color:st.left_title_color,left_text_color:st.left_text_color,right_title_color:st.right_title_color,right_text_color:st.right_text_color,limit_indicator_color:st.limit_indicator_color,left_title_size:14,left_text_size:14,right_title_size:14,right_text_size:14,bar_size:"regular",bar_radius:"round",show_left:!1,show_right:!1,alignment:"space-between",width:"100",use_gradient:!1,gradient_display_mode:"value_based",gradient_stops:[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}],animation_entity:"",animation_state:"",animation_type:"none",action_animation_entity:"",action_animation_state:"",action_animation:"none"};let dt=class extends pe{constructor(){super(...arguments),this._expandedBar=null,this._preventExpandCollapse=!1,this._activeBarTabs={},this._gradientEditorKeys={}}_t(e,t){var i,n;return nt(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}_generateUniqueId(){return Math.random().toString(36).substring(2,9)}_getFriendlyName(e){var t,i;return e&&this.hass&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""}_truncateText(e,t=15){return e?e.length<=t?e:e.substring(0,t)+"...":""}_fireConfigChanged(e){Ce(this,"config-changed",{config:e})}_fireForceGradientRefreshEvent(){this.dispatchEvent(new CustomEvent("force-gradient-refresh",{bubbles:!0,composed:!0,detail:{timestamp:Date.now()}}))}_toggleBarExpand(e){this._preventExpandCollapse?this._preventExpandCollapse=!1:this._expandedBar=this._expandedBar===e?null:e}_addBar(){const e=[...this.config.bars||[]],t=0===e.length,i=JSON.parse(JSON.stringify(lt));Object.keys(st).forEach((e=>{i[e]||(i[e]=st[e])})),i.entity="",i.gradient_stops=[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}],e.push(i);const n=Object.assign(Object.assign({},this.config),{bars:e});if(t){let e=[...n.sections_order||[]];if(!e.includes("bars")){const t=e.indexOf("info"),i=e.indexOf("icons");-1!==t?e.splice(t+1,0,"bars"):-1!==i?e.splice(i,0,"bars"):e.push("bars"),n.sections_order=e}}this._fireConfigChanged(n),this._expandedBar=e.length-1,setTimeout((()=>{this.requestUpdate(),this._fireForceGradientRefreshEvent()}),10)}_duplicateBar(e){if(!this.config||!this.config.bars||e<0||e>=this.config.bars.length)return void console.warn("[BarsTab] Cannot duplicate bar: Invalid index or missing config.");const t=this.config.bars[e],i=JSON.parse(JSON.stringify(t));Object.keys(st).forEach((e=>{i[e]||(i[e]=st[e])})),i.use_gradient&&Array.isArray(i.gradient_stops)&&(i.gradient_stops=i.gradient_stops.map((e=>Object.assign(Object.assign({},e),{id:this._generateUniqueId()}))),this._ensureGradientStops(i));const n=[...this.config.bars];n.splice(e+1,0,i),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:n})),this._expandedBar=e+1,setTimeout((()=>{this.requestUpdate(),this._fireForceGradientRefreshEvent()}),10)}_removeBar(e){const t=[...this.config.bars||[]];t.splice(e,1);let i=[...this.config.sections_order||[]];const n=`bar_${e}`;i=i.filter((e=>e!==n));let a=i.map((t=>{if(t.startsWith("bar_")){const i=parseInt(t.substring(4));if(i>e)return"bar_"+(i-1)}return t})),o=Object.assign({},this.config.sections_columns||{});delete o[n];let r={};Object.entries(o).forEach((([t,i])=>{if(t.startsWith("bar_")){const n=parseInt(t.substring(4));n>e?r["bar_"+(n-1)]=i:r[t]=i}else r[t]=i})),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:t,sections_order:a,sections_columns:Object.keys(r).length>0?r:void 0})),this._expandedBar===e?this._expandedBar=null:null!==this._expandedBar&&this._expandedBar>e&&(this._expandedBar=this._expandedBar-1)}_barValueChanged(e,t){var i,n,a;if(e.stopPropagation(),!this.config.bars||!this.config.bars[t])return;const o=JSON.parse(JSON.stringify(this.config)),r=null===(i=e.detail)||void 0===i?void 0:i.value;let s=!1,l=!1;const d=o.bars[t].use_gradient,c=o.bars[t].gradient_display_mode,p=o.bars[t].gradient_stops;if(r&&"object"==typeof r){const e=`bars.${t}.`;Object.entries(r).forEach((([i,n])=>{if(i.startsWith(e)){const a=i.substring(e.length);"use_gradient"===a&&(s=!0,l=!0,!0===n&&(this._ensureGradientStops(o.bars[t]),o.bars[t].gradient_display_mode||(o.bars[t].gradient_display_mode="value_based"))),("gradient_display_mode"===a||a.startsWith("gradient_"))&&(l=!0),this._setNestedBarValue(o,t,a,n)}}))}else{const i=(null===(n=e.detail)||void 0===n?void 0:n.path)||(null===(a=e.detail)||void 0===a?void 0:a.name);if(i){const e=i.substring(`bars.${t}.`.length);"use_gradient"===e&&(s=!0,l=!0,!0===r&&(this._ensureGradientStops(o.bars[t]),o.bars[t].gradient_display_mode||(o.bars[t].gradient_display_mode="value_based"))),e.includes("gradient")&&(l=!0),this._setNestedBarValue(o,t,e,r)}}d&&!s&&(o.bars[t].use_gradient=!0,c&&(o.bars[t].gradient_display_mode=c),p&&p.length>=2&&(o.bars[t].gradient_stops=p)),this._fireConfigChanged(o),(l||d)&&this._fireForceGradientRefreshEvent(),s&&o.bars[t].use_gradient&&(this._expandedBar=t,setTimeout((()=>{this.requestUpdate()}),0))}_setNestedBarValue(e,t,i,n){e.bars&&e.bars[t]&&(i.includes("color")?Array.isArray(n)?e.bars[t][i]=`rgb(${n.join(", ")})`:e.bars[t][i]="object"==typeof n&&null!==n&&"r"in n&&"g"in n&&"b"in n?`rgb(${n.r}, ${n.g}, ${n.b})`:n:e.bars[t][i]=n)}_setActiveBarTab(e,t,i){e.stopPropagation(),this._activeBarTabs=Object.assign(Object.assign({},this._activeBarTabs),{[t]:i})}async _updateBarProperty(e,t,i){const n=JSON.parse(JSON.stringify(this.config));if(!n.bars||!n.bars[e])return;const a=n.bars[e].use_gradient,o=n.bars[e].gradient_display_mode,r=n.bars[e].gradient_stops;n.bars[e][t]=i,"gradient_display_mode"===t?n.bars[e].use_gradient=!0:"use_gradient"===t&&!0===i?this._ensureGradientStops(n.bars[e]):"use_gradient"!==t&&a&&(n.bars[e].use_gradient=!0,o&&(n.bars[e].gradient_display_mode=o),r&&r.length>=2&&(n.bars[e].gradient_stops=r)),"gradient_stops"===t&&Array.isArray(i)&&(n.bars[e].gradient_stops=[...i].sort(((e,t)=>e.position-t.position)),n.bars[e].use_gradient=!0,this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1})),this._fireConfigChanged(n),await this.updateComplete,("use_gradient"===t||"gradient_display_mode"===t||"gradient_stops"===t||t.includes("color")||a)&&[0,20,100].forEach((e=>{setTimeout((()=>{this._fireForceGradientRefreshEvent()}),e)}))}_resetBarColor(e,t,i){const n=[...this.config.bars||[]];if(n[e]){const a=Object.assign({},n[e]);a[t]=i,n[e]=a,this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:n})),setTimeout((()=>{this.requestUpdate(),this._fireForceGradientRefreshEvent()}),10)}}_resetBarSize(e,t){const i=[...this.config.bars||[]];if(i[e]){const n=Object.assign({},i[e]);delete n[t],i[e]=n,this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:i})),this.requestUpdate()}}_ensureGradientStops(e){(!e.gradient_stops||!Array.isArray(e.gradient_stops)||e.gradient_stops.length<2)&&(e.gradient_stops=[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}])}_addGradientStop(e){const t=JSON.parse(JSON.stringify(this.config.bars||[])),i=t[e];if(!i)return;this._ensureGradientStops(i);const n=function(e){const t=[...e].sort(((e,t)=>e.position-t.position));if(t.length>=7)return null;const i=new Set(t.map((e=>e.id)));let n=-1;for(let e=3;e<=7;e++)if(!i.has(String(e))){n=e;break}if(-1===n)return null;let a=0,o=50,r=0;for(let e=0;e<t.length-1;e++){const i=t[e+1].position-t[e].position;i>a&&(a=i,o=t[e].position+i/2,r=e)}const s=ke(t[r].color)||{r:255,g:255,b:0},l=ke(t[r+1].color)||{r:0,g:255,b:0},d=Math.round(s.r+.5*(l.r-s.r)),c=Math.round(s.g+.5*(l.g-s.g)),p=Math.round(s.b+.5*(l.b-s.b)),g=`#${d.toString(16).padStart(2,"0")}${c.toString(16).padStart(2,"0")}${p.toString(16).padStart(2,"0")}`;return{id:String(n),position:Math.round(o),color:g}}(i.gradient_stops||[]);n&&(i.gradient_stops=[...i.gradient_stops||[],n].sort(((e,t)=>e.position-t.position)),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:t})),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}))}_updateGradientStop(e,t){const i=JSON.parse(JSON.stringify(this.config.bars||[])),n=i[e];n&&n.gradient_stops&&(n.gradient_stops=n.gradient_stops.map((e=>e.id===t.id?Object.assign(Object.assign({},e),t):e)),n.gradient_stops.sort(((e,t)=>e.position-t.position)),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:i})),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}))}_removeGradientStop(e,t){const i=JSON.parse(JSON.stringify(this.config.bars||[])),n=i[e];!n||!n.gradient_stops||n.gradient_stops.length<=2||(n.gradient_stops=n.gradient_stops.filter((e=>e.id!==t)),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:i})),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}))}_updateGradientStopsOrder(e,t){const i=JSON.parse(JSON.stringify(this.config.bars||[])),n=i[e];n&&(n.gradient_stops=t,this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:i})),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}))}_generateGradientPreview(e){if(!e||e.length<2)return"linear-gradient(to right, #ccc, #ccc)";const t=[...e].sort(((e,t)=>e.position-t.position));return`linear-gradient(to right, ${t.map((e=>`${e.color} ${e.position}%`)).join(", ")})`}render(){var e;return this.hass&&this.config?W`
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
    `:Z}_renderBar(e,t){const i=this._expandedBar===t,n=this._getFriendlyName(e.entity),a=this._truncateText(n,20),o=this._activeBarTabs[t]||"config";return W`
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
    `}_renderBarContent(e,t,i){return W`
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
    `}_renderBarConfigurationTab(e,t){const i=this._prepareBarData(e,t);return W`
      <div class="section-group main-bar-settings">
        <div class="subsection-header">
          <span>${this._t("editor.bars.settings.header")}</span>
        </div>
        <ha-form
          .hass=${this.hass}
          .data=${i}
          .schema=${this._getMainBarSchema(t)}
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

        ${!1!==e.show_left?W`
              <div class="side-fields-container">
                <ha-form
                  .hass=${this.hass}
                  .data=${i}
                  .schema=${this._getLeftSideSchema(t)}
                  .computeLabel=${e=>this._t(e.label||e.name)}
                  .computeDescription=${e=>this._t(e.description||"")}
                  @value-changed=${e=>this._barValueChanged(e,t)}
                ></ha-form>

                ${!1===e.show_right?W`
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
                    <ha-icon-button
                      class="inline-reset-button"
                      @click=${()=>this._resetBarSize(t,"left_title_size")}
                      title="${this._t("editor.common.reset","Reset")}"
                    >
                      <ha-icon icon="mdi:refresh"></ha-icon>
                    </ha-icon-button>
                  </div>
                  <div class="size-field">
                    <ha-form
                      .hass=${this.hass}
                      .data=${i}
                      .schema=${this._getLeftTextSizeSchema(t)}
                      .computeLabel=${e=>this._t(e.label||e.name)}
                      @value-changed=${e=>this._barValueChanged(e,t)}
                    ></ha-form>
                    <ha-icon-button
                      class="inline-reset-button"
                      @click=${()=>this._resetBarSize(t,"left_text_size")}
                      title="${this._t("editor.common.reset","Reset")}"
                    >
                      <ha-icon icon="mdi:refresh"></ha-icon>
                    </ha-icon-button>
                  </div>
                </div>
              </div>
            `:W`<div class="side-disabled">
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

        ${!1!==e.show_right?W`
              <div class="side-fields-container">
                <ha-form
                  .hass=${this.hass}
                  .data=${i}
                  .schema=${this._getRightSideSchema(t)}
                  .computeLabel=${e=>this._t(e.label||e.name)}
                  .computeDescription=${e=>this._t(e.description||"")}
                  @value-changed=${e=>this._barValueChanged(e,t)}
                ></ha-form>

                ${!1===e.show_left?W`
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
                    <ha-icon-button
                      class="inline-reset-button"
                      @click=${()=>this._resetBarSize(t,"right_title_size")}
                      title="${this._t("editor.common.reset","Reset")}"
                    >
                      <ha-icon icon="mdi:refresh"></ha-icon>
                    </ha-icon-button>
                  </div>
                  <div class="size-field">
                    <ha-form
                      .hass=${this.hass}
                      .data=${i}
                      .schema=${this._getRightTextSizeSchema(t)}
                      .computeLabel=${e=>this._t(e.label||e.name)}
                      @value-changed=${e=>this._barValueChanged(e,t)}
                    ></ha-form>
                    <ha-icon-button
                      class="inline-reset-button"
                      @click=${()=>this._resetBarSize(t,"right_text_size")}
                      title="${this._t("editor.common.reset","Reset")}"
                    >
                      <ha-icon icon="mdi:refresh"></ha-icon>
                    </ha-icon-button>
                  </div>
                </div>
              </div>
            `:W`<div class="side-disabled">
              ${this._t("editor.bars.right_side.hidden_message")}
            </div>`}
      </div>
    `}_renderAlignmentControl(e,t,i){const n=[{value:"flex-start",label:this._t("editor.alignment.left")},{value:"center",label:this._t("editor.alignment.center")},{value:"flex-end",label:this._t("editor.alignment.right")}];return W`
      <ha-form
        .hass=${this.hass}
        .data=${{alignment:t}}
        .schema=${[{name:"alignment",selector:{select:{options:n,mode:"dropdown"}},label:this._t("editor.bars.settings.alignment")}]}
        .computeLabel=${e=>this._t(e.label||e.name)}
        @value-changed=${t=>{t.stopPropagation(),this._updateBarProperty(e,"alignment",t.detail.value.alignment)}}
      ></ha-form>
      <div class="helper-text">${this._t(i)}</div>
    `}_renderBarColorsTab(e,t){return W`
      <div class="section-group">${this._renderColorPickersGrid(e,t)}</div>
      <div class="section-group" @click=${e=>e.stopPropagation()}>
        <div class="subsection-header">
          <span>${this._t("editor.bars.gradient.header")}</span>
        </div>
        <div style="padding: 16px;">
          <ha-form
            .hass=${this.hass}
            .data=${this._prepareBarData(e,t)}
            .schema=${this._getGradientToggleSchema(t)}
            .computeLabel=${e=>this._t(e.label||e.name)}
            .computeDescription=${e=>this._t(e.description||"")}
            @value-changed=${e=>{e.stopPropagation(),this._barValueChanged(e,t)}}
          ></ha-form>
        </div>
      </div>
      ${e.use_gradient?this._renderGradientEditor(e,t):""}
    `}_renderBarAnimationTab(e,t){const i=this._prepareBarData(e,t);return W`
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
        ${e.animation_entity?W`
              <ha-form
                .hass=${this.hass}
                .data=${i}
                .schema=${[{name:`bars.${t}.animation_state`,selector:{text:{}},label:this._t("editor.bars.animation.state"),description:this._t("editor.bars.animation.state_description")}]}
                .computeLabel=${e=>this._t(e.label||e.name)}
                .computeDescription=${e=>this._t(e.description||"")}
                @value-changed=${e=>this._barValueChanged(e,t)}
              ></ha-form>
            `:W`<div
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

        ${e.action_animation_entity?W`
              <ha-form
                .hass=${this.hass}
                .data=${i}
                .schema=${[{name:`bars.${t}.action_animation_state`,selector:{text:{}},label:this._t("editor.bars.animation.action_state","Trigger State"),description:this._t("editor.bars.animation.action_state_description","State that triggers the action animation")}]}
                .computeLabel=${e=>this._t(e.label||e.name)}
                .computeDescription=${e=>this._t(e.description||"")}
                @value-changed=${e=>this._barValueChanged(e,t)}
              ></ha-form>
            `:W`<div
              style="padding: 0 16px 16px; color: var(--secondary-text-color); margin-top: 8px;"
            >
              ${this._t("editor.bars.animation.action_select_prompt","Select an Action Entity and state to define when this animation should override the regular animation")}
            </div>`}
        ${e.action_animation_entity?W`
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
    `}_renderColorPickersGrid(e,t){const i=[{name:"bar_color",labelKey:"editor.bars.colors.bar_color",default:st.bar_color},{name:"background_color",labelKey:"editor.bars.colors.background_color",default:st.background_color},{name:"border_color",labelKey:"editor.bars.colors.border_color",default:st.border_color},{name:"limit_indicator_color",labelKey:"editor.bars.colors.limit_indicator_color",default:st.limit_indicator_color},{name:"left_title_color",labelKey:"editor.bars.colors.left_title_color",default:st.left_title_color},{name:"left_text_color",labelKey:"editor.bars.colors.left_value_color",default:st.left_text_color},{name:"right_title_color",labelKey:"editor.bars.colors.right_title_color",default:st.right_title_color},{name:"right_text_color",labelKey:"editor.bars.colors.right_value_color",default:st.right_text_color}],n=e=>{if(!e||"string"!=typeof e)return"#ffffff";const t={"var(--primary-text-color, #ffffff)":"#ffffff","var(--secondary-text-color, #999999)":"#999999","var(--divider-color, #555555)":"#555555","var(--card-background-color, #121212)":"#121212","var(--primary-color, #3498db)":"#3498db","var(--error-color, #ff0000)":"#ff0000"};if(t[e])return t[e];if(!e.startsWith("var(--"))return e;const i=e.match(/var\((--[^,)]+)(?:,\s*(.*?))?\)/);if(!i)return e;const a=i[1];let o=i[2]||"";if(o.startsWith('"')&&o.endsWith('"')&&(o=o.slice(1,-1)),"--primary-text-color"===a)return"#ffffff";if("--secondary-text-color"===a)return"#999999";if("--divider-color"===a)return"#555555";try{const e=getComputedStyle(document.documentElement).getPropertyValue(a).trim();return e&&"undefined"!==e&&"null"!==e?e:o&&o.startsWith("var(--")?n(o):a.includes("text")?a.includes("secondary")?"#999999":"#ffffff":a.includes("divider")||a.includes("border")?"#555555":a.includes("background")?"#121212":a.includes("error")?"#ff0000":o||"#ffffff"}catch(t){return console.warn("Error resolving color variable:",t),e.includes("text_color")||e.includes("title_color")?e.includes("title")?"#999999":"#ffffff":e.includes("border")?"#555555":o||"#ffffff"}};return W`
      <div class="subsection-header">${this._t("editor.bars.colors.header")}</div>
      <div class="color-pickers-grid">
        ${i.map((i=>{const a=e[i.name],o=i.default;let r=n(a||o);return"left_text_color"!==i.name&&"right_text_color"!==i.name||(r=a?n(a):"#ffffff"),"left_title_color"!==i.name&&"right_title_color"!==i.name||(r=a?n(a):"#999999"),"border_color"===i.name&&(r=a?n(a):"#555555"),W`
            <div class="color-picker-item">
              <div class="color-picker-label">${this._t(i.labelKey)}</div>
              <div class="color-picker-control">
                <ultra-vehicle-color-picker
                  .value=${r}
                  @value-changed=${e=>{e.stopPropagation(),this._updateBarProperty(t,i.name,e.detail.value)}}
                ></ultra-vehicle-color-picker>
                <ha-icon-button
                  class="color-reset-button"
                  .path=${"M19,8L15,12H18A6,6 0 0,1 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20A8,8 0 0,0 20,12H23L19,8M6,12A6,6 0 0,1 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4A8,8 0 0,0 4,12H1L5,16L9,12H6Z"}
                  @click=${()=>this._resetBarColor(t,i.name,i.default)}
                  title="${this._t("editor.bars.colors.reset_color")}"
                ></ha-icon-button>
              </div>
            </div>
          `}))}
      </div>
    `}_renderGradientEditor(e,t){this._ensureGradientStops(e);const i=e.gradient_stops||[],n=this._gradientEditorKeys[t]||0;return W`
      <div class="gradient-editor-section">
        <div class="gradient-header">
          <span>${this._t("editor.bars.gradient.editor_header")}</span>
          <ha-button @click=${()=>this._addGradientStop(t)} class="add-stop-button">
            <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
            ${this._t("editor.bars.gradient.add_stop")}
          </ha-button>
        </div>
        <div
          class="gradient-preview"
          style="background: ${this._generateGradientPreview(i)};border: 1px solid var(--primary-background-color);
"
        ></div>
        <ultra-vehicle-gradient-editor
          .key=${n}
          .stops=${i}
          @stop-changed=${e=>this._updateGradientStop(t,e.detail)}
          @stop-removed=${e=>this._removeGradientStop(t,e.detail.id)}
          @stops-rearranged=${e=>this._updateGradientStopsOrder(t,e.detail.stops)}
        ></ultra-vehicle-gradient-editor>
      </div>
    `}_getMainBarSchema(e){return[{name:`bars.${e}.entity`,selector:{entity:{}},label:this._t("editor.bars.settings.entity"),description:this._t("editor.bars.settings.entity_description")},{name:`bars.${e}.limit_entity`,selector:{entity:{}},label:this._t("editor.bars.settings.limit_entity"),description:this._t("editor.bars.settings.limit_entity_description")},{name:`bars.${e}.limit_indicator_color`,selector:{color:{type:"hex"}},label:this._t("editor.bars.settings.limit_color"),description:this._t("editor.bars.settings.limit_color_description")},{name:`bars.${e}.bar_size`,selector:{select:{options:[{value:"thin",label:this._t("editor.bars.bar_sizes.thin")},{value:"regular",label:this._t("editor.bars.bar_sizes.regular")},{value:"thick",label:this._t("editor.bars.bar_sizes.thick")},{value:"thiccc",label:this._t("editor.bars.bar_sizes.thiccc")}],mode:"dropdown"}},label:this._t("editor.bars.settings.bar_size"),description:this._t("editor.bars.settings.bar_size_description")},{name:`bars.${e}.width`,selector:{select:{options:[{value:"100",label:this._t("editor.bars.bar_widths.100")},{value:"75",label:this._t("editor.bars.bar_widths.75")},{value:"50",label:this._t("editor.bars.bar_widths.50")},{value:"25",label:this._t("editor.bars.bar_widths.25")}],mode:"dropdown"}},label:this._t("editor.bars.settings.width"),description:this._t("editor.bars.settings.width_description")},{name:`bars.${e}.bar_radius`,selector:{select:{options:[{value:"round",label:this._t("editor.bars.bar_radius.round","Round")},{value:"square",label:this._t("editor.bars.bar_radius.square","Square")},{value:"rounded-square",label:this._t("editor.bars.bar_radius.rounded-square","Rounded Square")}],mode:"dropdown"}},label:this._t("editor.bars.settings.bar_radius","Bar Radius"),description:this._t("editor.bars.settings.bar_radius_description","Choose the shape of the bar corners")},{name:`bars.${e}.alignment`,selector:{select:{options:[{value:"space-between",label:this._t("editor.bars.bar_alignments.space-between")},{value:"flex-start",label:this._t("editor.bars.bar_alignments.flex-start")},{value:"center",label:this._t("editor.bars.bar_alignments.center")},{value:"flex-end",label:this._t("editor.bars.bar_alignments.flex-end")}],mode:"dropdown"}},label:this._t("editor.bars.settings.alignment"),description:this._t("editor.bars.settings.alignment_description")}]}_getLeftSideSchema(e){return[{name:`bars.${e}.left_title`,selector:{text:{}},label:this._t("editor.bars.left_side.title"),description:this._t("editor.bars.left_side.title_description")},{name:`bars.${e}.left_entity`,selector:{entity:{}},label:this._t("editor.bars.left_side.entity"),description:this._t("editor.bars.left_side.entity_description")}]}_getRightSideSchema(e){return[{name:`bars.${e}.right_title`,selector:{text:{}},label:this._t("editor.bars.right_side.title"),description:this._t("editor.bars.right_side.title_description")},{name:`bars.${e}.right_entity`,selector:{entity:{}},label:this._t("editor.bars.right_side.entity"),description:this._t("editor.bars.right_side.entity_description")}]}_getLeftTitleSizeSchema(e){return[{name:`bars.${e}.left_title_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.left_side.title_size","Title Size")}]}_getLeftTextSizeSchema(e){return[{name:`bars.${e}.left_text_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.left_side.value_size","Value Size")}]}_getRightTitleSizeSchema(e){return[{name:`bars.${e}.right_title_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.right_side.title_size","Title Size")}]}_getRightTextSizeSchema(e){return[{name:`bars.${e}.right_text_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.right_side.value_size","Value Size")}]}_getGradientToggleSchema(e){var t,i;return[{name:`bars.${e}.use_gradient`,selector:{boolean:{}},label:this._t("editor.bars.gradient.toggle"),description:this._t("editor.bars.gradient.toggle_description")},...(null===(i=null===(t=this.config.bars)||void 0===t?void 0:t[e])||void 0===i?void 0:i.use_gradient)?[{name:`bars.${e}.gradient_display_mode`,selector:{select:{options:[{value:"full",label:this._t("editor.bars.gradient.display_mode_full")},{value:"value_based",label:this._t("editor.bars.gradient.display_mode_value_based")}],mode:"dropdown"}},label:this._t("editor.bars.gradient.display_mode"),description:this._t("editor.bars.gradient.display_mode_description")}]:[]]}_prepareBarData(e,t){var i,n,a;const o={};return Object.entries(e).forEach((([e,i])=>{o[`bars.${t}.${e}`]=i})),o[`bars.${t}.use_gradient`]=null!==(i=e.use_gradient)&&void 0!==i&&i,o[`bars.${t}.show_left`]=null===(n=e.show_left)||void 0===n||n,o[`bars.${t}.show_right`]=null===(a=e.show_right)||void 0===a||a,o}};dt.styles=c`
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
      grid-template-columns: 1fr 1fr;
      gap: 20px 16px;
      margin-top: 0;
      padding: 16px 8px;
    }

    .color-picker-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      width: 100%;
    }

    .color-picker-label {
      font-weight: 500;
      margin-bottom: 6px;
      color: var(--primary-text-color);
      font-size: 0.9em;
    }

    .color-picker-control {
      display: flex;
      align-items: center;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
      background-color: var(--secondary-background-color);
      padding: 2px 4px;
    }

    .color-picker-item ultra-vehicle-color-picker {
      flex-grow: 1;
      border: none;
      border-radius: 0;
    }

    .color-reset-button {
      margin: 0 4px;
      --mdc-icon-size: 22px;
      --mdc-icon-button-size: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      opacity: 0.8;
      flex-shrink: 0;
    }

    .color-reset-button:hover {
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
  `,rt([me({attribute:!1})],dt.prototype,"hass",void 0),rt([me({attribute:!1})],dt.prototype,"config",void 0),rt([ve()],dt.prototype,"_expandedBar",void 0),rt([ve()],dt.prototype,"_preventExpandCollapse",void 0),rt([ve()],dt.prototype,"_activeBarTabs",void 0),rt([ve()],dt.prototype,"_gradientEditorKeys",void 0),dt=rt([he("bars-tab")],dt);var ct=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};const pt="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",gt="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",ht="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",ut=[{value:"100",key:"editor.icons.row_widths.100"},{value:"75",key:"editor.icons.row_widths.75"},{value:"50",key:"editor.icons.row_widths.50"},{value:"25",key:"editor.icons.row_widths.25"}],_t=[{value:"flex-start",key:"editor.icons.alignments.flex-start"},{value:"center",key:"editor.icons.alignments.center"},{value:"flex-end",key:"editor.icons.alignments.flex-end"},{value:"space-between",key:"editor.icons.alignments.space-between"},{value:"space-around",key:"editor.icons.alignments.space-around"},{value:"space-evenly",key:"editor.icons.alignments.space-evenly"}],mt=[{value:"none",key:"editor.icons.spacing.none"},{value:"small",key:"editor.icons.spacing.small"},{value:"medium",key:"editor.icons.spacing.medium"},{value:"large",key:"editor.icons.spacing.large"}],vt=[{value:"toggle",key:"editor.icons.click_actions.toggle"},{value:"more-info",key:"editor.icons.click_actions.more-info"},{value:"navigate",key:"editor.icons.click_actions.navigate"},{value:"url",key:"editor.icons.click_actions.url"},{value:"call-service",key:"editor.icons.click_actions.call-service"},{value:"perform-action",key:"editor.icons.click_actions.perform-action"},{value:"location-map",key:"editor.icons.click_actions.location-map"},{value:"assist",key:"editor.icons.click_actions.assist"},{value:"none",key:"editor.icons.click_actions.none"}],bt=[{value:"bottom",key:"editor.icons.text_positions.below"},{value:"top",key:"editor.icons.text_positions.top"},{value:"left",key:"editor.icons.text_positions.left"},{value:"right",key:"editor.icons.text_positions.right"}],ft=[{value:"flex-start",key:"editor.icons.vertical_alignments.flex-start"},{value:"center",key:"editor.icons.alignments.center"},{value:"flex-end",key:"editor.icons.vertical_alignments.flex-end"}],yt=[{value:"none",key:"editor.icons.backgrounds.none"},{value:"circle",key:"editor.icons.backgrounds.circle"},{value:"square",key:"editor.icons.backgrounds.square"},{value:"rounded-square",key:"editor.icons.backgrounds.rounded_square"}],kt=[{value:"100",key:"editor.icons.container_widths.100"},{value:"75",key:"editor.icons.container_widths.75"},{value:"50",key:"editor.icons.container_widths.50"},{value:"25",key:"editor.icons.container_widths.25"}];let wt=class extends pe{constructor(){super(...arguments),this._expandedIconRow=null,this._expandedIcon=null,this._draggedIconRow=null,this._draggedIcon=null,this._dropTargetRow=null,this._dropTargetIcon=null,this._activeIconTabs={}}_t(e,t){var i,n;return nt(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}_generateUniqueId(){return Math.random().toString(36).substring(2,9)}_getFriendlyName(e){var t,i;return e&&this.hass&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""}_truncateText(e,t=15){return e?e.length<=t?e:e.substring(0,t)+"...":""}_formatFieldName(e){return e?e.replace(/^./,(e=>e.toUpperCase())).replace(/_/g," "):""}_fireConfigChanged(e){Ce(this,"config-changed",{config:e})}_addIconRow(){const e=[...this.config.icon_rows||[]],t=this._createDefaultIconRow();e.push(t);let i=[...this.config.sections_order||[]];if(!i.includes("icons")){const e=i.indexOf("image"),t=i.indexOf("info"),n=i.indexOf("bars");-1!==e?i.splice(e+1,0,"icons"):-1!==t?i.splice(t+1,0,"icons"):-1!==n?i.splice(n,0,"icons"):i.push("icons")}this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:e,sections_order:i})),this._expandedIconRow=t.id}_removeIconRow(e){const t=(this.config.icon_rows||[]).filter((t=>t.id!==e));let i=[...this.config.sections_order||[]];const n=`icon_row_${e}`;if(i=i.filter((e=>e!==n)),0===t.length&&i.includes("icons")){const e=i.indexOf("icons");-1!==e&&i.splice(e,1)}let a=Object.assign({},this.config.sections_columns||{});delete a[n],this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:t,sections_order:i,sections_columns:Object.keys(a).length>0?a:void 0})),this._expandedIconRow===e&&(this._expandedIconRow=null),this._expandedIcon&&this._expandedIcon.rowId===e&&(this._expandedIcon=null)}_duplicateIconRow(e){const t=this.config.icon_rows||[],i=t.findIndex((t=>t.id===e));if(-1===i)return void console.warn(`[IconsTab] Could not find row with id ${e} to duplicate.`);const n=t[i],a=JSON.parse(JSON.stringify(n));a.id=this._generateUniqueId();const o=[...t.slice(0,i+1),a,...t.slice(i+1)];let r=[...this.config.sections_order||[]];const s=`icon_row_${a.id}`,l=`icon_row_${e}`,d=r.indexOf(l);if(-1!==d)r.splice(d+1,0,s);else if(!r.includes("icons")){const e=r.indexOf("image"),t=r.indexOf("info"),i=r.indexOf("bars");-1!==e?r.splice(e+1,0,"icons"):-1!==t?r.splice(t+1,0,"icons"):-1!==i?r.splice(i,0,"icons"):r.push("icons")}const c=Object.assign(Object.assign({},this.config),{icon_rows:o,sections_order:r});this._fireConfigChanged(c),this._expandedIconRow=a.id}_duplicateIcon(e,t){if(!this.config||!this.config.icon_rows)return;const i=this.config.icon_rows.findIndex((t=>t.id===e));if(-1===i)return;const n=this.config.icon_rows[i];if(!n.icons||t<0||t>=n.icons.length)return;const a=n.icons[t],o=JSON.parse(JSON.stringify(a)),r=[...this.config.icon_rows],s=[...n.icons];s.splice(t+1,0,o),r[i]=Object.assign(Object.assign({},n),{icons:s}),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:r}))}_toggleIconRowExpand(e){this._expandedIconRow=this._expandedIconRow===e?null:e,this._expandedIcon&&this._expandedIcon.rowId===e&&null===this._expandedIconRow&&(this._expandedIcon=null)}_updateIconRowConfig(e,t){const i=(this.config.icon_rows||[]).map((i=>i.id===e?Object.assign(Object.assign({},i),t):i));this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:i}))}_addIcon(e){const t=JSON.parse(JSON.stringify(this.config));t.icon_rows||(t.icon_rows=[]);const i=t.icon_rows.findIndex((t=>t.id===e));if(i>=0){t.icon_rows[i].icons||(t.icon_rows[i].icons=[]);const n=this._createDefaultIcon();t.icon_rows[i].icons.push(n);const a=t.icon_rows[i].icons.length-1;this._fireConfigChanged(t),setTimeout((()=>{this._expandedIcon={rowId:e,iconIndex:a}}),50)}}_removeIcon(e,t){var i;const n=JSON.parse(JSON.stringify(this.config));if(!n.icon_rows)return;const a=n.icon_rows.findIndex((t=>t.id===e));-1===a||!n.icon_rows[a].icons||t<0||t>=n.icon_rows[a].icons.length?console.warn("[IconsTab] Invalid row or icon index for removal."):(n.icon_rows[a].icons.splice(t,1),this._fireConfigChanged(n),(null===(i=this._expandedIcon)||void 0===i?void 0:i.rowId)===e&&(this._expandedIcon.iconIndex===t?this._expandedIcon=null:this._expandedIcon.iconIndex>t&&(this._expandedIcon=Object.assign(Object.assign({},this._expandedIcon),{iconIndex:this._expandedIcon.iconIndex-1}))))}_toggleIconEdit(e,t){var i,n;if((null===(i=this._expandedIcon)||void 0===i?void 0:i.rowId)===e&&(null===(n=this._expandedIcon)||void 0===n?void 0:n.iconIndex)===t)this._expandedIcon=null;else{this._expandedIcon={rowId:e,iconIndex:t};const i=`${e}_${t}`;this._activeIconTabs=Object.assign(Object.assign({},this._activeIconTabs),{[i]:"general"})}}_updateIconConfig(e,t,i){const n=JSON.parse(JSON.stringify(this.config));if(!n.icon_rows)return;const a=n.icon_rows.findIndex((t=>t.id===e));if(a>=0&&t>=0&&t<n.icon_rows[a].icons.length){if(void 0!==i.service_data&&"string"==typeof i.service_data)try{i.service_data=JSON.parse(i.service_data||"{}")}catch(e){}if(void 0!==i.action&&"string"==typeof i.action)try{i.action=JSON.parse(i.action)}catch(e){}n.icon_rows[a].icons[t]=Object.assign(Object.assign({},n.icon_rows[a].icons[t]),i),this._fireConfigChanged(n)}else console.warn("[IconsTab] Invalid row or icon index for update.")}_handleIconDragStart(e,t,i){if(e.stopPropagation(),this._draggedIcon={rowId:t,iconIndex:i},e.dataTransfer){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("application/ultra-vehicle-icon",JSON.stringify({rowId:t,iconIndex:i}));const n=e.currentTarget;if(n){const t=n.getBoundingClientRect(),i=n.cloneNode(!0);i.style.width=`${t.width}px`,i.style.height=`${t.height}px`,i.style.opacity="0.85",i.style.position="absolute",i.style.top="-1000px",i.style.borderRadius="8px",i.style.backgroundColor="var(--card-background-color, #303030)",i.style.border="2px dashed var(--primary-color)",i.style.boxShadow="0 4px 8px rgba(0,0,0,0.2)",i.style.zIndex="9999",i.style.whiteSpace="nowrap",i.style.overflow="hidden";const a=i.querySelector(".mini-bar-header");a&&a instanceof HTMLElement&&(a.style.flexShrink="0",a.style.whiteSpace="nowrap",a.style.overflow="hidden",a.style.display="flex",a.style.alignItems="center"),document.body.appendChild(i),e.dataTransfer.setDragImage(i,20,20),setTimeout((()=>{document.body.contains(i)&&document.body.removeChild(i)}),300)}}}_handleIconDragEnd(e){var t;e.stopPropagation(),this._draggedIcon=null,this._dropTargetIcon=null,null===(t=this.shadowRoot)||void 0===t||t.querySelectorAll(".mini-bar.drop-target").forEach((e=>e.classList.remove("drop-target")))}_handleIconDragOver(e,t,i){var n;if(e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._draggedIcon&&(this._draggedIcon.rowId!==t||this._draggedIcon.iconIndex!==i)){this._dropTargetIcon={rowId:t,iconIndex:i};const a=e.currentTarget;null===(n=this.shadowRoot)||void 0===n||n.querySelectorAll(".mini-bar.drop-target").forEach((e=>e.classList.remove("drop-target"))),a.classList.add("drop-target")}}_handleIconDragLeave(e){e.stopPropagation(),this._dropTargetIcon=null,e.currentTarget.classList.remove("drop-target")}_handleIconDrop(e,t,i){var n;e.preventDefault(),e.stopPropagation();try{const a=null===(n=e.dataTransfer)||void 0===n?void 0:n.getData("application/ultra-vehicle-icon");if(a&&this._draggedIcon){const{rowId:e,iconIndex:n}=JSON.parse(a);if(e===t&&n===i)return;this._rearrangeIcons(e,n,t,i)}}catch(e){console.error("Error in icon drop handler:",e)}this._handleIconDragEnd(e)}_rearrangeIcons(e,t,i,n){const a=JSON.parse(JSON.stringify(this.config.icon_rows||[])),o=a.findIndex((t=>t.id===e)),r=a.findIndex((e=>e.id===i));if(-1===o||-1===r)return;const s=a[o],l=s.icons[t];if(l){if(e===i)s.icons.splice(t,1),s.icons.splice(n,0,l);else{s.icons.splice(t,1);const e=a[r];e.icons||(e.icons=[]),e.icons.splice(n,0,l)}if(this._expandedIcon){const a=Object.assign({},this._expandedIcon);let o=a.iconIndex,r=a.rowId;e===i&&e===a.rowId?t===a.iconIndex?o=n:t<a.iconIndex&&n>=a.iconIndex?o--:t>a.iconIndex&&n<=a.iconIndex&&o++:e===a.rowId&&i!==a.rowId?t<a.iconIndex&&o--:e!==a.rowId&&i===a.rowId&&n<=a.iconIndex&&o++,this._draggedIcon&&this._draggedIcon.rowId===a.rowId&&this._draggedIcon.iconIndex===a.iconIndex&&e!==i&&(r=i,o=n),this._expandedIcon={rowId:r,iconIndex:o}}this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:a}))}}_createDefaultIconRow(){return{id:this._generateUniqueId(),width:"100",alignment:"center",spacing:"none",icons:[]}}_createDefaultIcon(){return{entity:"",icon_inactive:"mdi:help-circle-outline",icon_active:"mdi:help-circle",color_inactive:"var(--secondary-text-color)",color_active:"var(--primary-color)",name_color_inactive:"var(--primary-text-color)",name_color_active:"var(--primary-text-color)",state_color_inactive:"var(--secondary-text-color)",state_color_active:"var(--primary-text-color)",inactive_state:"off",active_state:"on",inactive_template_mode:!1,active_template_mode:!1,inactive_template:"",active_template:"",show_state:!0,show_name:!1,show_units:!0,show_icon_active:!0,show_icon_inactive:!0,name:"",on_click_action:"more-info",text_position:"bottom",vertical_alignment:"center",text_alignment:"center",icon_size:24,text_size:14,icon_background:"none",icon_background_color:"var(--secondary-background-color)",container_background:"none",container_background_color:"var(--secondary-background-color)",draggable:!0}}_resetIconColor(e,t,i){const n="active"===i?"var(--primary-color)":"var(--secondary-text-color)",a="active"===i?"color_active":"color_inactive";this._updateIconConfig(e,t,{[a]:n})}_resetIconNameColor(e,t,i){const n="active"===i?"name_color_active":"name_color_inactive";this._updateIconConfig(e,t,{[n]:"var(--primary-text-color)"})}_resetIconStateColor(e,t,i){const n="active"===i?"var(--primary-text-color)":"var(--secondary-text-color)",a="active"===i?"state_color_active":"state_color_inactive";this._updateIconConfig(e,t,{[a]:n})}_resetIconAppearanceColor(e,t,i){this._updateIconConfig(e,t,{[i]:"var(--secondary-background-color)"})}_resetIconSize(e,t,i){const n="icon_size"===i?24:14;this._updateIconConfig(e,t,{[i]:n})}render(){if(!this.hass||!this.config)return Z;const e=this.config.icon_rows||[],t=this.config.sections_order||[],i=new Map(e.map((e=>[e.id,e]))),n=t.map((e=>e.startsWith("icon_row_")?e.substring(9):null)).filter((e=>null!==e));let a;return a=n.length>0?n.map((e=>i.get(e))).filter((e=>void 0!==e)):(t.includes("icons"),e),W`
      <div class="tab-content">
        <div class="section-header">${this._t("editor.icons.title")}</div>
        <div class="description">${this._t("editor.icons.description")}</div>
        <div class="bar-list">
          ${a.map((t=>{const i=e.findIndex((e=>e.id===t.id));return W` <div key=${t.id}>${this._renderIconRow(t,i)}</div> `}))}
          <div class="add-bar-container">
            <ha-button class="add-bar-button" @click=${this._addIconRow}>
              <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
              ${this._t("editor.icons.add_row")}
            </ha-button>
          </div>
        </div>
      </div>
    `}_renderIconRow(e,t){const i=this._expandedIconRow===e.id;return W`
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
              .path=${ht}
              @click=${t=>{t.stopPropagation(),this._removeIconRow(e.id)}}
            >
            </ha-icon-button>
            <ha-icon-button
              title="${i?this._t("editor.icons.collapse_row"):this._t("editor.icons.expand_row")}"
              @click=${t=>{t.stopPropagation(),this._toggleIconRowExpand(e.id)}}
              .path=${i?gt:pt}
            >
            </ha-icon-button>
          </div>
        </div>

        ${i?this._renderIconRowContent(e):""}
      </div>
    `}_renderIconRowContent(e){return W`
      <div class="bar-content">
        <div class="settings-section">
          <div class="section-header">${this._t("editor.icons.row_settings.header")}</div>
          <div class="settings-content">
            <ha-form
              .hass=${this.hass}
              .data=${{width:e.width,alignment:e.alignment,spacing:e.spacing}}
              .schema=${[{name:"width",selector:{select:{options:ut.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.row_settings.width"),description:this._t("editor.icons.row_settings.width_description")},{name:"alignment",selector:{select:{options:_t.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.row_settings.alignment"),description:this._t("editor.icons.row_settings.alignment_description")},{name:"spacing",selector:{select:{options:mt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.row_settings.spacing"),description:this._t("editor.icons.row_settings.spacing_description")}]}
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
    `}_renderIcon(e,t,i){var n,a;const o=(null===(n=this._expandedIcon)||void 0===n?void 0:n.rowId)===e&&(null===(a=this._expandedIcon)||void 0===a?void 0:a.iconIndex)===i,r=t.entity?this._getFriendlyName(t.entity):"",s=t.name||r||`${this._t("editor.icons.icon_prefix","Icon")} ${i+1}`,l=this._truncateText(s,15),d=t.icon_inactive||"mdi:help-circle-outline",c=t.color_inactive||"var(--secondary-text-color)",p=`${e}_${i}`,g=this._activeIconTabs[p]||"general";return W`
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
            <ha-icon icon="${d}" style="color: ${c};"></ha-icon>
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
              .path=${ht}
              @click=${t=>{t.stopPropagation(),this._removeIcon(e,i)}}
            >
            </ha-icon-button>
            <ha-icon-button
              title=${o?this._t("editor.icons.collapse_icon"):this._t("editor.icons.expand_icon")}
              .path=${o?gt:pt}
              @click=${t=>{t.stopPropagation(),this._toggleIconEdit(e,i)}}
            >
            </ha-icon-button>
          </div>
        </div>

        ${o?this._renderIconContent(e,t,i,g):""}
      </div>
    `}_renderIconContent(e,t,i,n){const a=`${e}_${i}`;return W`
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
    `}_renderIconGeneralTab(e,t,i){return W`
      <div class="icon-settings-section">
        <ha-form
          .hass=${this.hass}
          .data=${t}
          .schema=${this._getIconGeneralSchema(t)}
          .computeLabel=${e=>this._t(e.label||e.name)}
          .computeDescription=${e=>this._t(e.description||"")}
          @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
        ></ha-form>
        ${t.on_click_action&&"none"!==t.on_click_action?W`<div class="click-action-description">
              ${this._getClickActionDescription(t.on_click_action)}
            </div>`:""}
      </div>
    `}_getIconGeneralSchema(e){return[{name:"entity",selector:{entity:{}},label:this._t("editor.common.entity"),description:this._t("editor.icons.icon_settings.entity_description")},{name:"name",selector:{text:{}},label:this._t("editor.icons.icon_settings.name"),description:this._t("editor.icons.icon_settings.name_description")},{name:"on_click_action",selector:{select:{options:vt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_settings.click_action"),description:this._t("editor.icons.icon_appearance.action_description")},..."call-service"===e.on_click_action?[{name:"service",selector:{text:{}},label:this._t("editor.icons.icon_settings.service"),description:this._t("editor.icons.icon_settings.service_description")},{name:"service_data",selector:{text:{multiline:!0}},label:this._t("editor.icons.icon_settings.service_data"),description:this._t("editor.icons.icon_settings.service_data_description")}]:[],..."perform-action"===e.on_click_action?[{name:"action",selector:{text:{multiline:!0}},label:this._t("editor.icons.icon_settings.action"),description:this._t("editor.icons.icon_settings.action_description")}]:[],..."navigate"===e.on_click_action?[{name:"navigation_path",selector:{text:{}},label:this._t("editor.icons.icon_settings.navigation_path"),description:this._t("editor.icons.icon_settings.navigation_path_description")}]:[],..."url"===e.on_click_action?[{name:"url",selector:{text:{}},label:this._t("editor.icons.icon_settings.url"),description:this._t("editor.icons.icon_settings.url_description")}]:[]]}_getClickActionDescription(e){switch(e){case"toggle":return W`<p>${this._t("editor.icons.click_actions.descriptions.toggle")}</p>`;case"more-info":return W`<p>${this._t("editor.icons.click_actions.descriptions.more-info")}</p>`;case"navigate":return W`<p>${this._t("editor.icons.click_actions.descriptions.navigate")}</p>`;case"url":return W`<p>${this._t("editor.icons.click_actions.descriptions.url")}</p>`;case"call-service":return W`<p>${this._t("editor.icons.click_actions.descriptions.call-service")}</p>`;case"perform-action":return W`<p>${this._t("editor.icons.click_actions.descriptions.perform-action")}</p>`;case"location-map":return W`<p>${this._t("editor.icons.click_actions.descriptions.location-map")}</p>`;case"assist":return W`<p>${this._t("editor.icons.click_actions.descriptions.assist")}</p>`;case"none":return W`<p>${this._t("editor.icons.click_actions.descriptions.none")}</p>`;default:return""}}_renderIconAppearanceTab(e,t,i){return W`
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
        ${t.show_name||t.show_state?W`
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
    `}_getIconAppearanceGeneralSchema(e){return[{name:"show_name",selector:{boolean:{}},label:this._t("editor.icons.icon_settings.show_name"),description:this._t("editor.icons.icon_settings.show_name_description")},{name:"show_state",selector:{boolean:{}},label:this._t("editor.icons.icon_settings.show_state"),description:this._t("editor.icons.icon_settings.show_state_description")},{name:"show_units",selector:{boolean:{}},label:this._t("editor.icons.icon_settings.show_units"),description:this._t("editor.icons.icon_settings.show_units_description")},...e.show_name||e.show_state?[{name:"text_position",selector:{select:{options:bt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_settings.text_position"),description:this._t("editor.icons.icon_settings.text_position_description")}]:[]]}_getIconAppearanceIconSchema(){return[{name:"icon_size",selector:{number:{mode:"box",unit:"px"}},label:this._t("editor.icons.icon_appearance.icon_size"),description:this._t("editor.icons.icon_appearance.icon_size_description")},{name:"icon_background",selector:{select:{options:yt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.icon_background"),description:this._t("editor.icons.icon_appearance.icon_background_description")}]}_getIconAppearanceContainerSchema(){return[{name:"vertical_alignment",selector:{select:{options:ft.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.container.vertical_alignment"),description:this._t("editor.icons.icon_appearance.container.vertical_alignment_description")},{name:"container_width",selector:{select:{options:kt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.container.width"),description:this._t("editor.icons.icon_appearance.container.width_description")},{name:"container_background",selector:{select:{options:yt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.container.background"),description:this._t("editor.icons.icon_appearance.container.background_description")}]}_getIconAppearanceTextSizeSchema(){return[{name:"text_size",selector:{number:{mode:"box",unit:"px"}},label:this._t("editor.icons.icon_appearance.text_size"),description:this._t("editor.icons.icon_appearance.text_size_description")}]}_getIconAppearanceTextAlignmentSchema(){return[{name:"text_alignment",selector:{select:{options:[{value:"left",key:"editor.icons.alignments.flex-start"},{value:"center",key:"editor.icons.alignments.center"},{value:"right",key:"editor.icons.alignments.flex-end"}].map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.text_alignment"),description:this._t("editor.icons.icon_appearance.text_alignment_description")}]}_renderIconStatesTab(e,t,i){return W`
      <div class="icon-settings-section">
        <!-- Active State -->
        <div class="state-settings-group">
          <div class="subsection-header">
            <span>${this._t("editor.icons.tabs.active_state")}</span>
          </div>
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${this._getIconStateSchema(t,"active")}
            .computeLabel=${e=>this._t(e.label||e.name)}
            .computeDescription=${e=>this._t(e.description||"")}
            @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
          ></ha-form>
          ${this._renderColorPicker(e,i,"color_active",this._t("editor.icons.icon_appearance.active_icon_color"),"var(--primary-color)")}
          ${!1!==t.show_name?this._renderColorPicker(e,i,"name_color_active",this._t("editor.icons.icon_appearance.active_name_color"),"var(--primary-text-color)"):""}
          ${!1!==t.show_state?this._renderColorPicker(e,i,"state_color_active",this._t("editor.icons.icon_appearance.active_state_color"),"var(--primary-text-color)"):""}
        </div>
        <!-- Inactive State -->
        <div class="state-settings-group">
          <div class="subsection-header">
            <span>${this._t("editor.icons.tabs.inactive_state")}</span>
          </div>
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${this._getIconStateSchema(t,"inactive")}
            .computeLabel=${e=>this._t(e.label||e.name)}
            .computeDescription=${e=>this._t(e.description||"")}
            @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
          ></ha-form>
          ${this._renderColorPicker(e,i,"color_inactive",this._t("editor.icons.icon_appearance.inactive_icon_color"),"var(--secondary-text-color)")}
          ${!1!==t.show_name?this._renderColorPicker(e,i,"name_color_inactive",this._t("editor.icons.icon_appearance.inactive_name_color"),"var(--primary-text-color)"):""}
          ${!1!==t.show_state?this._renderColorPicker(e,i,"state_color_inactive",this._t("editor.icons.icon_appearance.inactive_state_color"),"var(--secondary-text-color)"):""}
        </div>
      </div>
    `}_getIconStateSchema(e,t){const i=t;return[{name:`show_icon_${i}`,selector:{boolean:{}},label:this._t(`editor.icons.icon_appearance.show_icon_${i}`),description:this._t(`editor.icons.icon_appearance.show_icon_${i}_description`)},{name:`${i}_template_mode`,selector:{boolean:{}},label:this._t("editor.icons.icon_appearance.template_mode"),description:this._t("editor.icons.icon_appearance.template_mode_description")},...e[`${i}_template_mode`]?[{name:`${i}_template`,selector:{text:{multiline:!0}},label:this._t(`editor.icons.icon_appearance.${i}_template`),description:this._t(`editor.icons.icon_appearance.${i}_template_description`)}]:[{name:`${i}_state`,selector:{text:{}},label:this._t(`editor.icons.icon_appearance.${i}_state`),description:this._t(`editor.icons.icon_appearance.${i}_state_description`)}],{name:`icon_${i}`,selector:{icon:{}},label:this._t(`editor.icons.icon_appearance.${i}_icon`)}]}_renderColorPicker(e,t,i,n,a){var o,r;const s=null===(r=null===(o=this.config.icon_rows)||void 0===o?void 0:o.find((t=>t.id===e)))||void 0===r?void 0:r.icons[t];return W`
      <div class="color-picker-item">
        <div class="color-picker-label">${n}</div>
        <div class="color-picker-control">
          <ultra-vehicle-color-picker
            .value=${(null==s?void 0:s[i])||a}
            @value-changed=${n=>this._updateIconConfig(e,t,{[i]:n.detail.value})}
          ></ultra-vehicle-color-picker>
          <ha-icon-button
            class="color-reset-button"
            .path=${"M19,8L15,12H18A6,6 0 0,1 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20A8,8 0 0,0 20,12H23L19,8M6,12A6,6 0 0,1 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4A8,8 0 0,0 4,12H1L5,16L9,12H6Z"}
            @click=${()=>{i.startsWith("color_")?this._resetIconColor(e,t,i.substring(6)):i.startsWith("name_color_")?this._resetIconNameColor(e,t,i.substring(11)):i.startsWith("state_color_")?this._resetIconStateColor(e,t,i.substring(12)):this._resetIconAppearanceColor(e,t,i)}}
            title="${this._t("editor.icons.reset.color")}"
          ></ha-icon-button>
        </div>
      </div>
    `}};wt.styles=c`
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
      padding: 8px;
      border-radius: 4px;
      background: rgba(var(--rgb-primary-background-color), 0.5);
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
    }
    .state-settings-group .subsection-header {
      border-bottom: none; /* Remove bottom border for state group headers */
      padding-bottom: 0;
      margin-bottom: 8px;
    }
    .state-settings-group ha-form {
      padding: 0 8px 8px; /* Adjust padding */
    }
    .color-picker-item {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: stretch;
      width: 100%;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .color-picker-label {
      font-weight: 500;
      margin-bottom: 6px;
      color: var(--primary-text-color);
      font-size: 0.9em;
    }
    .color-picker-control {
      display: flex;
      align-items: center;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
      background-color: var(--secondary-background-color);
      padding: 2px 4px;
    }
    .color-picker-item ultra-vehicle-color-picker {
      flex-grow: 1;
      border: none;
      border-radius: 0;
    }
    .color-reset-button {
      margin: 0 4px;
      --mdc-icon-size: 22px;
      --mdc-icon-button-size: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--secondary-text-color);
      opacity: 0.8;
      flex-shrink: 0;
    }
    .color-reset-button:hover {
      opacity: 1;
      color: var(--primary-color);
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
  `,ct([me({attribute:!1})],wt.prototype,"hass",void 0),ct([me({attribute:!1})],wt.prototype,"config",void 0),ct([ve()],wt.prototype,"_expandedIconRow",void 0),ct([ve()],wt.prototype,"_expandedIcon",void 0),ct([ve()],wt.prototype,"_draggedIconRow",void 0),ct([ve()],wt.prototype,"_draggedIcon",void 0),ct([ve()],wt.prototype,"_dropTargetRow",void 0),ct([ve()],wt.prototype,"_dropTargetIcon",void 0),ct([ve()],wt.prototype,"_activeIconTabs",void 0),wt=ct([he("icons-tab")],wt);var xt=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};const St=[{value:"single",key:"editor.customize.layout_types.single"},{value:"double",key:"editor.customize.layout_types.double"}];let $t=class extends pe{constructor(){super(...arguments),this._draggedSection=null,this._expandedSectionId=null,this._dropTargetSection=null,this._dropTargetColumn=null}_t(e,t){var i,n;return nt(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}_fireConfigChanged(e){Ce(this,"config-changed",{config:e})}_getFriendlyName(e){var t,i;return e&&this.hass&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""}_truncateText(e,t=15){return e?e.length<=t?e:e.substring(0,t)+"...":""}_valueChanged(e){if(e.stopPropagation(),!this.config)return;const t=Object.assign(Object.assign({},this.config),e.detail.value);this._fireConfigChanged(t)}_handleSectionDragStart(e,t){if(this._draggedSection=t,e.dataTransfer){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.toString());const i=e.target;if(i&&e.dataTransfer){const t=i.getBoundingClientRect(),n=i.cloneNode(!0);n.style.width=`${t.width}px`,n.style.opacity="0.7",n.style.position="absolute",n.style.top="-1000px",n.style.border="1px dashed var(--primary-color)",document.body.appendChild(n),e.dataTransfer.setDragImage(n,e.offsetX,e.offsetY),setTimeout((()=>{document.body.contains(n)&&document.body.removeChild(n)}),0)}}}_handleSectionDragEnd(){var e;this._draggedSection=null,this._dropTargetSection=null,this._dropTargetColumn=null,null===(e=this.shadowRoot)||void 0===e||e.querySelectorAll(".draggable-section.drop-target, .column-container.column-drag-over").forEach((e=>{e.classList.remove("drop-target"),e.classList.remove("column-drag-over")}))}_handleSectionDragOver(e,t){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),null!==this._draggedSection&&this._draggedSection!==t?this._dropTargetSection=t:this._dropTargetSection=null}_handleSectionDragLeave(){this._dropTargetSection=null}_handleSectionDrop(e,t){e.preventDefault(),null!==this._draggedSection&&this._draggedSection!==t&&this._rearrangeSections(this._draggedSection,t),this._handleSectionDragEnd()}_handleColumnDragOver(e,t){e.preventDefault(),null!==this._draggedSection&&(this._dropTargetColumn=t,e.dataTransfer&&(e.dataTransfer.dropEffect="move"))}_handleColumnDragLeave(){this._dropTargetColumn=null}_getDisplaySections(){const e=this.config.sections_order||[],t=[];return e.forEach((e=>{var i;if("bars"===e){const e=(null===(i=this.config.bars)||void 0===i?void 0:i.length)||0;for(let i=0;i<e;i++)t.push(`bar_${i}`)}else"icons"===e?(this.config.icon_rows||[]).forEach((e=>{e.id&&t.push(`icon_row_${e.id}`)})):t.push(e)})),t}_getExpandedConfigSections(e=!1){var t,i;let n=[...this.config.sections_order||[]];const a=n.includes("bars")&&(e||(null===(t=this.config.bars)||void 0===t?void 0:t.length)>0),o=n.includes("icons")&&(e||(null===(i=this.config.icon_rows)||void 0===i?void 0:i.length)>0);if(!a&&!o)return n;const r=[];return n.forEach((e=>{var t;if("bars"===e&&a){const e=(null===(t=this.config.bars)||void 0===t?void 0:t.length)||0;for(let t=0;t<e;t++)r.push(`bar_${t}`)}else"icons"===e&&o?(this.config.icon_rows||[]).forEach((e=>{e.id&&r.push(`icon_row_${e.id}`)})):r.push(e)})),r}_handleColumnDrop(e,t){if(e.preventDefault(),null!==this._draggedSection&&this._dropTargetColumn===t){const e=this._getDisplaySections(),i=this._draggedSection;if(i>=e.length)return void this._handleSectionDragEnd();const n=e[i];let a=[...this.config.sections_order||[]],o=Object.assign({},this.config.sections_columns||{}),r=!1;(n.startsWith("bar_")&&a.includes("bars")||n.startsWith("icon_row_")&&a.includes("icons"))&&(a=this._getExpandedConfigSections(!0),r=!0),"right"===t?o[n]="right":delete o[n];const s={sections_columns:Object.keys(o).length>0?o:void 0};if(r&&(s.sections_order=a),n.startsWith("bar_")){const e=parseInt(n.substring(4));!isNaN(e)&&e>=0&&e<(this.config.bars||[]).length&&(s.bars=[...this.config.bars||[]])}this._fireConfigChanged(Object.assign(Object.assign({},this.config),s))}this._handleSectionDragEnd()}_rearrangeSections(e,t){const i=this._getDisplaySections();if(e>=i.length||t>=i.length)return;const n=i[e];let a=[...this.config.sections_order||[]];(n.startsWith("bar_")&&a.includes("bars")||n.startsWith("icon_row_")&&a.includes("icons"))&&(a=this._getExpandedConfigSections(!0));const o=a.findIndex((t=>t===i[e])),r=a.findIndex((e=>e===i[t]));if(-1===o||-1===r)return void console.error("Could not find dragged/target sections in configSections");const[s]=a.splice(o,1),l=o<r?r-1:r;a.splice(l,0,s);let d=[];const c=new Map;(this.config.bars||[]).forEach(((e,t)=>{c.set(t,e)})),a.forEach((e=>{if(e.startsWith("bar_")){const t=parseInt(e.substring(4)),i=c.get(t);i?d.push(i):console.warn(`[CustomizeTab] Could not find original bar config for index ${t} during reorder.`)}})),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{sections_order:a,bars:d.length>0?d:(this.config.bars||[]).length>0?[]:void 0}))}_toggleSectionExpand(e){this._expandedSectionId=this._expandedSectionId===e?null:e}_updateSectionMargin(e){const t=e.target,i=t.dataset.sectionId,n=t.dataset.marginType,a=parseInt(t.value||"0");if(!i||!n)return;const o=JSON.parse(JSON.stringify(this.config.section_styles||{}));o[i]?o[i]=Object.assign({},o[i]):o[i]={marginTop:0,marginBottom:0},0===a?(delete o[i][n],0===Object.keys(o[i]).length&&delete o[i]):o[i][n]=a;const r={};Object.keys(o).length>0?r.section_styles=o:r.section_styles=void 0,this._fireConfigChanged(Object.assign(Object.assign({},this.config),r))}render(){return this.hass&&this.config?this._renderCustomizeTab():Z}_renderCustomizeTab(){const e=[{name:"layout_type",selector:{select:{options:St.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.customize.layout.title"),description:this._t("editor.customize.layout.description")}],t=`${this._t("editor.customize.sections.arrangement_desc_base")} ${"double"===this.config.layout_type?this._t("editor.customize.sections.arrangement_desc_double_extra"):this._t("editor.customize.sections.arrangement_desc_single_extra")}`;return W`
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
    `}_renderDraggableSections(){const e=this._getDisplaySections(),t=this.config.layout_type||"single",i=this.config.section_styles||{},n={title:{label:this._t("editor.customize.section_labels.title"),icon:"mdi:format-title"},image:{label:this._t("editor.customize.section_labels.image"),icon:"mdi:image"},info:{label:this._t("editor.customize.section_labels.info"),icon:"mdi:information-outline"},bars:{label:"All Bars",icon:"mdi:chart-bar"},icons:{label:"All Icon Rows",icon:"mdi:view-grid-outline"}},a=e=>{var t,i;if(e.startsWith("bar_")){const i=parseInt(e.substring(4)),n=null===(t=this.config.bars)||void 0===t?void 0:t[i],a=(null==n?void 0:n.entity)?this._getFriendlyName(n.entity):`${this._t("editor.bars.bar_prefix")} ${i+1}`;return this._truncateText(a,20)}if(e.startsWith("icon_row_")){const t=e.substring(9),i=(this.config.icon_rows||[]).findIndex((e=>e.id===t));return-1!==i?`${this._t("editor.icons.row_prefix")} ${i+1}`:this._t("editor.icons.row_prefix")}return(null===(i=n[e])||void 0===i?void 0:i.label)||e},o=(e,t)=>{const o=this._draggedSection===t,r=this._dropTargetSection===t,s=i[e]||{marginTop:0,marginBottom:0},l=this._expandedSectionId===e;return W`
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
          ${l?W`
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
      `};if("double"===t){const t=e.filter((e=>"right"!==(this.config.sections_columns||{})[e])),i=e.filter((e=>"right"===(this.config.sections_columns||{})[e]));return W`
        <div class="columns-wrapper stacked-columns">
          <div class="column-header">${this._t("editor.customize.columns.left")}</div>
          <div
            class="column-container left-column ${"left"===this._dropTargetColumn?"column-drag-over":""}"
            @dragover=${e=>this._handleColumnDragOver(e,"left")}
            @dragleave=${this._handleColumnDragLeave}
            @drop=${e=>this._handleColumnDrop(e,"left")}
          >
            ${t.map((t=>o(t,e.indexOf(t))))}
            ${0===t.length?W`<div class="empty-column-message">
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
            ${0===i.length?W`<div class="empty-column-message">
                  ${this._t("editor.customize.columns.empty")}
                </div>`:""}
          </div>
        </div>
      `}return W`
      <div class="draggable-sections single-column">
        ${e.map(((e,t)=>o(e,t)))}
      </div>
    `}_renderGlobalCssSection(){return W`
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
    `}};$t.styles=c`
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
  `,xt([me({attribute:!1})],$t.prototype,"hass",void 0),xt([me({attribute:!1})],$t.prototype,"config",void 0),xt([ve()],$t.prototype,"_draggedSection",void 0),xt([ve()],$t.prototype,"_expandedSectionId",void 0),xt([ve()],$t.prototype,"_dropTargetSection",void 0),xt([ve()],$t.prototype,"_dropTargetColumn",void 0),$t=xt([he("customize-tab")],$t);var zt=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let At=class extends pe{_t(e,t){var i,n;return nt(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}render(){return W`
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
    `}};At.styles=c`
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
  `,zt([me({attribute:!1})],At.prototype,"hass",void 0),At=zt([he("about-tab")],At);var It=function(e,t,i,n){var a,o=arguments.length,r=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(o<3?a(r):o>3?a(t,i,r):a(t,i))||r);return o>3&&r&&Object.defineProperty(t,i,r),r};let Ct=class extends pe{constructor(){super(...arguments),this.activeTab="settings",this._cropperActive=!1,this._cropperImage="",this._cropperTargetField="",this._vehicleCropExpanded=!1,this._actionCropExpanded=!1,this._showEntityList=!1,this._activeField="",this._entityFilter="",this._entities=[],this._editorVersion="1.2.0-debug"}setConfig(e){if(!e)throw new Error("Invalid configuration");if(this.config=Object.assign({vehicle_image_type:"default",status_image_type:"none",layout_type:"single",formatted_entities:!1,show_location:!0,show_mileage:!0,show_car_state:!0,sections_order:["title","info","image"],bars:[],icon_rows:[]},e),this.config.sections_order&&!this.config.sections_order.includes("info")){const e=[...this.config.sections_order],t=e.indexOf("image");-1!==t?e.splice(t+1,0,"info"):e.unshift("info"),this.config.sections_order=e}this.config.section_styles||(this.config.section_styles={}),void 0===this.config.vehicle_image_width&&(this.config.vehicle_image_width=100),void 0===this.config.action_image_width&&(this.config.action_image_width=100),this._migrateToIndividualSections()}_migrateToIndividualSections(){if(!this.config.sections_order)return;let e=[...this.config.sections_order],t=!1;const i=e.indexOf("icons");if(-1!==i&&this.config.icon_rows&&this.config.icon_rows.length>0&&!e.some((e=>e.startsWith("icon_row_")))){const n=this.config.icon_rows.map((e=>`icon_row_${e.id}`));e.splice(i,1,...n),t=!0}t&&(this.config.sections_order=e)}async _handleFileUploadEvent(e){const{file:t,configKey:i}=e.detail;if(t&&i)if(this.hass&&this.hass.auth&&this.hass.auth.data&&this.hass.auth.data.access_token)try{const e=await async function(e,t){var i;if(!t)throw console.error("[UPLOAD] Missing file."),new Error("No file provided for upload.");if(!(e&&e.auth&&e.auth.data&&e.auth.data.access_token))throw console.error("[UPLOAD] Missing Home Assistant authentication details."),new Error("Authentication details are missing.");const n=new FormData;n.append("file",t);let a="";a=e.connection&&"string"==typeof(null===(i=e.connection.options)||void 0===i?void 0:i.url)?e.connection.options.url.replace(/^ws/,"http"):"function"==typeof e.hassUrl?e.hassUrl():`${window.location.protocol}//${window.location.host}`;const o=`${a.replace(/\/$/,"")}/api/image/upload`;try{const t=await fetch(o,{method:"POST",headers:{Authorization:`Bearer ${e.auth.data.access_token}`},body:n});if(!t.ok){const e=await t.text();throw console.error(`[UPLOAD] Failed to upload image via ${o}: ${t.status} ${t.statusText}`,e),new Error(`Failed to upload image via ${o}: ${t.statusText}`)}const i=await t.json();if(!i||!i.id)throw console.error(`[UPLOAD] Invalid response from ${o}: missing id`,i),new Error(`Invalid response from ${o}: missing id`);return`/api/image/serve/${i.id}`}catch(e){throw console.error(`[UPLOAD] Error during fetch to ${o}:`,e),new Error(`Upload via ${o} failed: ${e instanceof Error?e.message:"Unknown network error"}`)}}(this.hass,t);this._updateConfig({[i]:e})}catch(e){console.error(`[UPLOAD EVENT] Upload failed for config key "${i}":`,e)}else console.error("[UPLOAD EVENT] Hass object appears invalid or missing auth!");else console.error("[UPLOAD EVENT] Missing file or configKey in event detail.",e.detail)}_getCleanConfig(){const e=Object.assign({},this.config);return e.section_styles&&(Object.keys(e.section_styles).forEach((t=>{const i=e.section_styles[t],n=i.marginTop||0,a=i.marginBottom||0;0===n&&0===a?delete e.section_styles[t]:(0===n&&delete i.marginTop,0===a&&delete i.marginBottom)})),0===Object.keys(e.section_styles).length&&delete e.section_styles),e.sections_columns&&0===Object.keys(e.sections_columns).length&&delete e.sections_columns,e}_updateConfig(e){this.config&&e&&(this.config=Object.assign(Object.assign({},this.config),e),this._fireConfigChanged())}_updateConfigFromEvent(e){e.stopPropagation();const t=e.detail.config;t&&this._updateConfig(t)}_fireConfigChanged(){this._configChangedTimeout&&clearTimeout(this._configChangedTimeout),this._configChangedTimeout=window.setTimeout((()=>{const e=this._getCleanConfig();Ce(this,"config-changed",{config:e})}),50)}_getFriendlyName(e){}_truncateText(e,t=15){}_generateUniqueId(){}_formatFieldName(e){}_getImageSchema(e){}_renderCropSliders(e){}_updateImageCrop(e,t,i){}_resetTitleSize(){}_t(e,t){}_fireForceGradientRefreshEvent(){this.dispatchEvent(new CustomEvent("force-gradient-refresh",{bubbles:!0,composed:!0,detail:{timestamp:Date.now()}})),document.dispatchEvent(new CustomEvent("force-card-update",{bubbles:!0,composed:!0}))}render(){var e;if(!this.config||!this.hass)return Z;const t=(null===(e=this.hass.locale)||void 0===e?void 0:e.language)||"en";return W`
      <div class="card-config">
        <div class="tabs">
          <div
            class="tab ${"settings"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="settings"}"
          >
            ${nt("editor.tabs.settings",t,"Settings")}
          </div>
          <div
            class="tab ${"bars"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="bars"}"
          >
            ${nt("editor.tabs.bars",t,"Bars")}
          </div>
          <div
            class="tab ${"icons"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="icons"}"
          >
            ${nt("editor.tabs.icons",t,"Icons")}
          </div>
          <div
            class="tab ${"customize"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="customize"}"
          >
            ${nt("editor.tabs.customize",t,"Customize")}
          </div>
          <div
            class="tab ${"about"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="about"}"
          >
            ${nt("editor.tabs.about",t,"About")}
          </div>
        </div>

        ${"settings"===this.activeTab?W`
              <settings-tab
                .hass=${this.hass}
                .config=${this.config}
                @config-changed=${this._updateConfigFromEvent}
                @file-upload=${this._handleFileUploadEvent}
              ></settings-tab>
            `:""}
        ${"bars"===this.activeTab?W`
              <bars-tab
                .hass=${this.hass}
                .config=${this.config}
                @config-changed=${this._updateConfigFromEvent}
                @force-gradient-refresh=${this._fireForceGradientRefreshEvent}
              ></bars-tab>
            `:""}
        ${"icons"===this.activeTab?W`
              <icons-tab
                .hass=${this.hass}
                .config=${this.config}
                @config-changed=${this._updateConfigFromEvent}
              ></icons-tab>
            `:""}
        ${"customize"===this.activeTab?W`
              <customize-tab
                .hass=${this.hass}
                .config=${this.config}
                @config-changed=${this._updateConfigFromEvent}
              ></customize-tab>
            `:""}
        ${"about"===this.activeTab?W` <about-tab .hass=${this.hass}></about-tab> `:""}
      </div>
    `}static get styles(){return c`
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
    `}firstUpdated(){this._refreshEntityList(),document.addEventListener("click",(e=>{var t;(null===(t=this.shadowRoot)||void 0===t?void 0:t.contains(e.target))||(this._showEntityList=!1)})),this._loadCropperJS()}_refreshEntityList(){}_onEntityInputChange(e){}_onEntityFocus(e,t){}_getFilteredEntities(){}_selectEntity(e,t){}async _loadCropperJS(){}_renderImageCropper(){}_applyCrop(){}updated(e){}};It([me({attribute:!1})],Ct.prototype,"hass",void 0),It([me()],Ct.prototype,"config",void 0),It([ve()],Ct.prototype,"activeTab",void 0),It([ve()],Ct.prototype,"_cropperActive",void 0),It([ve()],Ct.prototype,"_cropperImage",void 0),It([ve()],Ct.prototype,"_cropperTargetField",void 0),It([ve()],Ct.prototype,"_vehicleCropExpanded",void 0),It([ve()],Ct.prototype,"_actionCropExpanded",void 0),It([ve()],Ct.prototype,"_showEntityList",void 0),It([ve()],Ct.prototype,"_activeField",void 0),It([ve()],Ct.prototype,"_entityFilter",void 0),It([ve()],Ct.prototype,"_entities",void 0),Ct=It([he("ultra-vehicle-card-editor")],Ct),window.customCards=window.customCards||[],window.customCards.push({type:"ultra-vehicle-card",name:"Ultra Vehicle Card",description:"A card that displays vehicle information with fuel/charge level, range, location, mileage, and a customizable icon grid.",preview:!0,documentationURL:"https://github.com/WJDDesigns/Ultra-Vehicle-Card",version:"2.0"})})();