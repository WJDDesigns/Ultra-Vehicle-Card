/*! For license information please see ultra-vehicle-card.js.LICENSE.txt */
(()=>{"use strict";var e,t,i={},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return i[e](a,a.exports,o),a.exports}t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(i,n){if(1&n&&(i=this(i)),8&n)return i;if("object"==typeof i&&i){if(4&n&&i.__esModule)return i;if(16&n&&"function"==typeof i.then)return i}var a=Object.create(null);o.r(a);var r={};e=e||[null,t({}),t([]),t(t)];for(var s=2&n&&i;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>r[e]=()=>i[e]));return r.default=()=>i,o.d(a,r),a},o.d=(e,t)=>{for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};const a=globalThis,r=a.ShadowRoot&&(void 0===a.ShadyCSS||a.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),l=new WeakMap;class d{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(r&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=l.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&l.set(t,e))}return e}toString(){return this.cssText}}const c=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[n+1]),e[0]);return new d(i,e,s)},p=(e,t)=>{if(r)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),n=a.litNonce;void 0!==n&&t.setAttribute("nonce",n),t.textContent=i.cssText,e.appendChild(t)}},g=r?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new d("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:h,defineProperty:m,getOwnPropertyDescriptor:u,getOwnPropertyNames:_,getOwnPropertySymbols:f,getPrototypeOf:v}=Object,b=globalThis,y=b.trustedTypes,w=y?y.emptyScript:"",x=b.reactiveElementPolyfillSupport,k=(e,t)=>e,$={toAttribute(e,t){switch(t){case Boolean:e=e?w:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},S=(e,t)=>!h(e,t),z={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:S};Symbol.metadata??=Symbol("metadata"),b.litPropertyMetadata??=new WeakMap;class C extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=z){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),n=this.getPropertyDescriptor(e,i,t);void 0!==n&&m(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){const{get:n,set:o}=u(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){const a=n?.call(this);o.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??z}static _$Ei(){if(this.hasOwnProperty(k("elementProperties")))return;const e=v(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(k("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(k("properties"))){const e=this.properties,t=[..._(e),...f(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(g(e))}else void 0!==e&&t.push(g(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return p(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==i.converter?.toAttribute?i.converter:$).toAttribute(t,i.type);this._$Em=e,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Em=null}}_$AK(e,t){const i=this.constructor,n=i._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=i.getPropertyOptions(n),o="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:$;this._$Em=n,this[n]=o.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??S)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[k("elementProperties")]=new Map,C[k("finalized")]=new Map,x?.({ReactiveElement:C}),(b.reactiveElementVersions??=[]).push("2.0.4");const E=globalThis,I=E.trustedTypes,A=I?I.createPolicy("lit-html",{createHTML:e=>e}):void 0,T="$lit$",j=`lit$${Math.random().toFixed(9).slice(2)}$`,R="?"+j,L=`<${R}>`,V=document,D=()=>V.createComment(""),B=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,M=e=>O(e)||"function"==typeof e?.[Symbol.iterator],P="[ \t\n\f\r]",U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,F=/>/g,H=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,W=/"/g,G=/^(?:script|style|textarea|title)$/i,K=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),J=K(1),Z=(K(2),K(3),Symbol.for("lit-noChange")),Y=Symbol.for("lit-nothing"),X=new WeakMap,Q=V.createTreeWalker(V,129);function ee(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==A?A.createHTML(t):t}const te=(e,t)=>{const i=e.length-1,n=[];let o,a=2===t?"<svg>":3===t?"<math>":"",r=U;for(let t=0;t<i;t++){const i=e[t];let s,l,d=-1,c=0;for(;c<i.length&&(r.lastIndex=c,l=r.exec(i),null!==l);)c=r.lastIndex,r===U?"!--"===l[1]?r=N:void 0!==l[1]?r=F:void 0!==l[2]?(G.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=H):void 0!==l[3]&&(r=H):r===H?">"===l[0]?(r=o??U,d=-1):void 0===l[1]?d=-2:(d=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?H:'"'===l[3]?W:q):r===W||r===q?r=H:r===N||r===F?r=U:(r=H,o=void 0);const p=r===H&&e[t+1].startsWith("/>")?" ":"";a+=r===U?i+L:d>=0?(n.push(s),i.slice(0,d)+T+i.slice(d)+j+p):i+j+(-2===d?t:p)}return[ee(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),n]};class ie{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let o=0,a=0;const r=e.length-1,s=this.parts,[l,d]=te(e,t);if(this.el=ie.createElement(l,i),Q.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=Q.nextNode())&&s.length<r;){if(1===n.nodeType){if(n.hasAttributes())for(const e of n.getAttributeNames())if(e.endsWith(T)){const t=d[a++],i=n.getAttribute(e).split(j),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:o,name:r[2],strings:i,ctor:"."===r[1]?se:"?"===r[1]?le:"@"===r[1]?de:re}),n.removeAttribute(e)}else e.startsWith(j)&&(s.push({type:6,index:o}),n.removeAttribute(e));if(G.test(n.tagName)){const e=n.textContent.split(j),t=e.length-1;if(t>0){n.textContent=I?I.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],D()),Q.nextNode(),s.push({type:2,index:++o});n.append(e[t],D())}}}else if(8===n.nodeType)if(n.data===R)s.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf(j,e+1));)s.push({type:7,index:o}),e+=j.length-1}o++}}static createElement(e,t){const i=V.createElement("template");return i.innerHTML=e,i}}function ne(e,t,i=e,n){if(t===Z)return t;let o=void 0!==n?i._$Co?.[n]:i._$Cl;const a=B(t)?void 0:t._$litDirective$;return o?.constructor!==a&&(o?._$AO?.(!1),void 0===a?o=void 0:(o=new a(e),o._$AT(e,i,n)),void 0!==n?(i._$Co??=[])[n]=o:i._$Cl=o),void 0!==o&&(t=ne(e,o._$AS(e,t.values),o,n)),t}class oe{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,n=(e?.creationScope??V).importNode(t,!0);Q.currentNode=n;let o=Q.nextNode(),a=0,r=0,s=i[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new ae(o,o.nextSibling,this,e):1===s.type?t=new s.ctor(o,s.name,s.strings,this,e):6===s.type&&(t=new ce(o,this,e)),this._$AV.push(t),s=i[++r]}a!==s?.index&&(o=Q.nextNode(),a++)}return Q.currentNode=V,n}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ae{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,n){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ne(this,e,t),B(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==Z&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):M(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(V.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,n="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=ie.createElement(ee(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===n)this._$AH.p(t);else{const e=new oe(n,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=X.get(e.strings);return void 0===t&&X.set(e.strings,t=new ie(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const o of e)n===t.length?t.push(i=new ae(this.O(D()),this.O(D()),this,this.options)):i=t[n],i._$AI(o),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class re{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,n,o){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(e,t=this,i,n){const o=this.strings;let a=!1;if(void 0===o)e=ne(this,e,t,0),a=!B(e)||e!==this._$AH&&e!==Z,a&&(this._$AH=e);else{const n=e;let r,s;for(e=o[0],r=0;r<o.length-1;r++)s=ne(this,n[i+r],t,r),s===Z&&(s=this._$AH[r]),a||=!B(s)||s!==this._$AH[r],s===Y?e=Y:e!==Y&&(e+=(s??"")+o[r+1]),this._$AH[r]=s}a&&!n&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class se extends re{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class le extends re{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class de extends re{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){if((e=ne(this,e,t,0)??Y)===Z)return;const i=this._$AH,n=e===Y&&i!==Y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==Y&&(i===Y||n);n&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ce{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ne(this,e)}}const pe={M:T,P:j,A:R,C:1,L:te,R:oe,D:M,V:ne,I:ae,H:re,N:le,U:de,B:se,F:ce},ge=E.litHtmlPolyfillSupport;ge?.(ie,ae),(E.litHtmlVersions??=[]).push("3.2.1");class he extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const n=i?.renderBefore??t;let o=n._$litPart$;if(void 0===o){const e=i?.renderBefore??null;n._$litPart$=o=new ae(t.insertBefore(D(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Z}}he._$litElement$=!0,he.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:he});const me=globalThis.litElementPolyfillSupport;me?.({LitElement:he}),(globalThis.litElementVersions??=[]).push("4.1.1");const ue=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},_e={attribute:!0,type:String,converter:$,reflect:!1,hasChanged:S},fe=(e=_e,t,i)=>{const{kind:n,metadata:o}=i;let a=globalThis.litPropertyMetadata.get(o);if(void 0===a&&globalThis.litPropertyMetadata.set(o,a=new Map),a.set(i.name,e),"accessor"===n){const{name:n}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(n,o,e)},init(t){return void 0!==t&&this.P(n,void 0,e),t}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];t.call(this,i),this.requestUpdate(n,o,e)}}throw Error("Unsupported decorator location: "+n)};function ve(e){return(t,i)=>"object"==typeof i?fe(e,t,i):((e,t,i)=>{const n=t.hasOwnProperty(i);return t.constructor.createProperty(i,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function be(e){return ve({...e,state:!0,attribute:!1})}const ye="/hacsfiles/Ultra-Vehicle-Card/assets/default-car.png";function we(e,t){if(!t)return"";if(t.startsWith("http"))return t;if(t.startsWith("data:image/"))return t;if(t.includes("/api/image/serve/")){const i=t.match(/\/api\/image\/serve\/([^\/]+)/);if(i&&i[1]){const n=i[1];try{return`${(e.hassUrl?e.hassUrl():"").replace(/\/$/,"")}/api/image/serve/${n}/original`}catch(e){return t}}return t}if(t.startsWith("local/")||t.includes("/local/")||t.startsWith("media-source://")){const i=t.replace(/^local\//,"").replace(/^media-source:\/\/media_source\/local\//,"");return`${(e.hassUrl?e.hassUrl():"").replace(/\/$/,"")}/local/${i}`}return t.startsWith("/")?`${(e.hassUrl?e.hassUrl():"").replace(/\/$/,"")}${t}`:t}var xe=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};function ke(e){if(!e||!Array.isArray(e)||0===e.length)return"";const t=e.filter((e=>e&&"string"==typeof e.color&&""!==e.color.trim()&&"number"==typeof e.position&&e.position>=0&&e.position<=100));if(0===t.length)return"";const i=[...t].sort(((e,t)=>e.position-t.position));return i.map((e=>`${e.color} ${e.position}%`)).join(", ")}function $e(e,t="to right"){const i=ke(e);return i?`linear-gradient(${t}, ${i})`:""}function Se(e,t){if(!e||!Array.isArray(e)||e.length<2)return"#ffffff";t=Math.max(0,Math.min(100,t));const i=[...e].sort(((e,t)=>e.position-t.position));let n=null,o=null;for(let e=0;e<i.length-1;e++)if(t>=i[e].position&&t<=i[e+1].position){n=i[e],o=i[e+1];break}if(!n||!o)return 0===i.length?"#ffffff":t<=i[0].position?i[0].color||"#ffffff":i[i.length-1].color||"#ffffff";const a=o.position-n.position,r=0===a?0:(t-n.position)/a,s=ze(n.color),l=ze(o.color);return s&&l?`rgb(${Math.round(s.r+r*(l.r-s.r))}, ${Math.round(s.g+r*(l.g-s.g))}, ${Math.round(s.b+r*(l.b-s.b))})`:n.color||"#ffffff"}function ze(e){const t=e.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);if(t)return{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)};const i=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10)}:null}let Ce=class extends he{constructor(){super(...arguments),this.stops=[],this.key=0,this._isDragging=!1,this._draggedStopId=null,this._lastRenderTime=0,this._boundPointerMove=this._handlePointerMove.bind(this),this._boundPointerUp=this._handlePointerUp.bind(this)}disconnectedCallback(){this.removeEventListener("pointermove",this._boundPointerMove),this.removeEventListener("pointerup",this._boundPointerUp),document.removeEventListener("pointermove",this._boundPointerMove),document.removeEventListener("pointerup",this._boundPointerUp),document.removeEventListener("pointercancel",this._boundPointerUp),super.disconnectedCallback()}_getProcessedStops(){var e,t;const i=(this.stops||[]).filter((e=>e&&"string"==typeof e.id&&"number"==typeof e.position&&"string"==typeof e.color)),n=[...i].sort(((e,t)=>e.position-t.position));return console.log("[GradientEditor] Processing stops array:",i.length===(null===(e=this.stops)||void 0===e?void 0:e.length)?"All stops are valid":`Found ${i.length} valid stops out of ${(null===(t=this.stops)||void 0===t?void 0:t.length)||0}`),n.length<2?(console.warn("[GradientEditor] Not enough valid stops, showing defaults with just boundary stops"),[{id:"default-start",position:0,color:"#ff0000"},{id:"default-end",position:100,color:"#00ff00"}]):n}updated(e){var t;if(super.updated(e),e.has("stops")||e.has("key")){const e=Date.now(),i=e-this._lastRenderTime;this._lastRenderTime=e,console.log(`[GradientEditor] Updated with ${(null===(t=this.stops)||void 0===t?void 0:t.length)||0} stops, key=${this.key}, time since last render: ${i}ms`),this._updateGradientPreview()}}_updateGradientPreview(){var e;try{const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".gradient-preview");if(t){const e=ke(this._getProcessedStops());t.style.background=`linear-gradient(to right, ${e})`}}catch(e){console.error("[GradientEditor] Error updating gradient preview:",e)}}static get styles(){return c`
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
        margin-bottom: 60px;
        border: 1px solid var(--divider-color, #999);
        overflow: visible;
      }

      .gradient-preview {
        width: 100%;
        height: 100%;
        border-radius: 4px;
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
        z-index: 1; /* Base z-index */
      }

      /* Apply higher z-index when being dragged */
      .stop-container.dragging {
        z-index: 10;
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
        bottom: calc(
          var(--gradient-height) + var(--handle-size) + 15px
        ); /* Position above circle */
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
        /* transition: opacity 0.2s ease-in-out; */ /* REMOVED transition to prevent flashing */
      }

      /* Add hover effect for delete button */
      .stop-container:hover .delete-button {
        /* Opacity is controlled by inline style based on boundary/count */
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
        margin-top: 8px;
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

      ha-button.add-button,
      ha-button.reset-button {
        /* Existing styles */
        --mdc-theme-primary: var(--primary-color);
        --mdc-theme-on-primary: white;
        display: inline-flex; /* Ensure flex layout */
        align-items: center; /* Vertically center flex items */
      }

      ha-button.reset-button {
        --mdc-theme-primary: var(--error-color);
      }

      ha-button ha-icon[slot='icon'] {
        color: var(--mdc-theme-on-primary);
        vertical-align: middle; /* Align icon vertically with text */
      }
    `}render(){try{const e=this._getProcessedStops(),t=ke(e);console.log(`[GradientEditor] Rendering ${e.length} stops with key ${this.key}`);const i=new Map;e.forEach((e=>{e&&"number"==typeof e.position&&i.set(e.id,e.position)}));const n=new Set,o=[...e].sort(((e,t)=>e.position-t.position));for(let e=0;e<o.length-1;e++){const t=o[e],i=o[e+1];i.position-t.position<10&&(n.add(t.id),n.add(i.id))}return J`
        <div class="gradient-container">
          <div
            class="gradient-preview"
            style="background: linear-gradient(to right, ${t})"
          ></div>
          ${e.map(((t,i)=>{if(!t||"number"!=typeof t.position||!t.id||!t.color)return J``;const o=0===t.position||100===t.position,a=this._isDragging&&this._draggedStopId===t.id,r=n.has(t.id)&&i%2==1?"calc(var(--gradient-height) + 10px + var(--handle-size) + 25px)":"calc(var(--gradient-height) + 10px + var(--handle-size) + 5px)",s=a?100:10+i;return J`
              <div
                class="stop-container ${a?"dragging":""}"
                style="left: ${t.position}%; z-index: ${s};"
                data-stop-id="${t.id}"
              >
                <div
                  class="delete-button"
                  style="opacity: ${!o&&e.length>2?1:0}; pointer-events: ${!o&&e.length>2?"auto":"none"}"
                  @click=${e=>this._handleDeleteClick(e,t)}
                  title="Delete Stop"
                >
                  ✕
                </div>
                <div
                  class="drag-line"
                  @pointerdown=${e=>this._handlePointerDown(e,t)}
                  title="${o?"Fixed position stop":"Drag to move"}"
                  style="${o?"cursor: not-allowed;":""}${a?"cursor: grabbing;":""}"
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
        <div class="gradient-buttons">
          <ha-button class="add-button" @click=${this._handleAddStop}>
            <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
            Add Stop
          </ha-button>
          <ha-button class="reset-button" @click=${this._handleResetStops}>
            <ha-icon icon="mdi:refresh" slot="icon"></ha-icon>
            Reset
          </ha-button>
        </div>
      `}catch(e){return console.error("[GradientEditor] Error in render:",e),J`
        <div class="gradient-container">
          <div
            class="gradient-preview"
            style="background: linear-gradient(to right, #ff0000, #00ff00)"
          ></div>
        </div>
        <div class="gradient-info">Error rendering gradient editor. Try resetting.</div>
        <div class="gradient-buttons">
          <ha-button class="reset-button" @click=${this._handleResetStops}>
            <ha-icon icon="mdi:refresh" slot="icon"></ha-icon>
            Reset
          </ha-button>
        </div>
      `}}_handleNativeColorChange(e,t){try{if(!(e&&e.target&&t&&t.id))return void console.warn("[GradientEditor] Invalid color change event or stop",e,t);e.stopPropagation();const i=e.target.value,n=new CustomEvent("stop-color-change",{detail:{stopId:t.id,newColor:i},bubbles:!0,composed:!0});this.dispatchEvent(n)}catch(e){console.error("[GradientEditor] Error in color change handler:",e)}}_handlePointerDown(e,t){var i;try{if(0===t.position||100===t.position)return;e.preventDefault();const n=null===(i=this.stops)||void 0===i?void 0:i.some((e=>(null==e?void 0:e.id)===(null==t?void 0:t.id)));if(!n)return void console.warn(`[GradientEditor] Cannot drag stop ${null==t?void 0:t.id} - it no longer exists in stops array`);const o=e.currentTarget;if(!o||!o.isConnected)return void console.warn("[GradientEditor] Cannot start drag - element is detached from DOM");if(!this.shadowRoot)return void console.warn("[GradientEditor] Cannot start drag - shadowRoot not available");try{o.setPointerCapture(e.pointerId)}catch(e){console.warn("[GradientEditor] Failed to set pointer capture:",e)}this._isDragging=!0,this._draggedStopId=t.id;try{o.addEventListener("pointermove",this._boundPointerMove),o.addEventListener("pointerup",this._boundPointerUp,{once:!0}),o.addEventListener("pointercancel",this._boundPointerUp,{once:!0})}catch(e){console.warn("[GradientEditor] Failed to add element event listeners:",e)}document.addEventListener("pointermove",this._boundPointerMove),document.addEventListener("pointerup",this._boundPointerUp,{once:!0}),document.addEventListener("pointercancel",this._boundPointerUp,{once:!0}),console.log(`[GradientEditor] PointerDown on stop ${t.id}`)}catch(t){console.error("[GradientEditor] Error in pointer down handler:",t),this._endDrag(e)}}_handlePointerMove(e){var t;try{if(!this._isDragging||!this._draggedStopId||!this.shadowRoot)return;e.preventDefault();const i=null===(t=this.stops)||void 0===t?void 0:t.find((e=>(null==e?void 0:e.id)===this._draggedStopId));if(!i)return console.warn(`[GradientEditor] Stop ${this._draggedStopId} no longer exists - canceling drag`),void this._endDrag(e);let n=this.shadowRoot.querySelector(".gradient-container"),o=null;if(n&&(o=Array.from(n.querySelectorAll(".stop-container")).find((e=>{var t;return(null===(t=null==e?void 0:e.dataset)||void 0===t?void 0:t.stopId)===this._draggedStopId}))||null),!n||!o||!o.isConnected)return console.warn("[GradientEditor] Could not find required elements during drag or stop container disconnected - canceling"),void this._endDrag(e);const a=n.getBoundingClientRect(),r=Math.min(99,Math.max(1,(e.clientX-a.left)/a.width*100)),s=Math.round(r);if(o.isConnected){const e=o;e.style.left=`${s}%`;const t=e.querySelector(".handle-position");t&&(t.textContent=`${s}%`)}this._updateDraggedStop(this._draggedStopId,s)}catch(t){console.error("[GradientEditor] Error in pointer move handler:",t),this._endDrag(e)}}_handlePointerUp(e){var t,i,n;try{if(!this._isDragging||!this._draggedStopId)return;e.preventDefault();const o=this._draggedStopId,a=null===(t=this.stops)||void 0===t?void 0:t.find((e=>(null==e?void 0:e.id)===o)),r=this._isDragging;if(this._endDrag(e),!a)return void console.warn(`[GradientEditor] Stop ${o} no longer exists after drag ended`);if(!r)return void console.log("[GradientEditor] Drag already ended, skipping pointer up logic.");let s=0,l=!1;if(this.shadowRoot){const t=this.shadowRoot.querySelector(".gradient-container");if(t){const i=t.getBoundingClientRect();i.width>0?(s=Math.min(99,Math.max(1,Math.round((e.clientX-i.left)/i.width*100))),l=!0,console.log(`[GradientEditor] Calculated final position from event: ${s}`)):console.warn("[GradientEditor] Gradient container has zero width, cannot calculate position from event.")}}if(!l&&this.shadowRoot){const e=Array.from(this.shadowRoot.querySelectorAll(".stop-container")).find((e=>{var t;return(null===(t=null==e?void 0:e.dataset)||void 0===t?void 0:t.stopId)===o}));if(e&&e.isConnected){const t=e.style.left;if(t){const e=parseFloat(t);isNaN(e)||(s=Math.round(e),l=!0,console.log(`[GradientEditor] Got final position from style: ${s}`))}}}if(!l){const e=null===(i=this.stops)||void 0===i?void 0:i.find((e=>(null==e?void 0:e.id)===o));if(!e||"number"!=typeof e.position)return void console.warn(`[GradientEditor] Could not determine final position for stop ${o}. Aborting update.`);s=e.position,console.log(`[GradientEditor] Using last known stop position as fallback: ${s}`),l=!0}s=Math.min(99,Math.max(1,s)),console.log(`[GradientEditor] Finalizing PointerUp for stop ${o}, final position: ${s}`);const d=null===(n=this.stops)||void 0===n?void 0:n.map((e=>(null==e?void 0:e.id)===o?Object.assign(Object.assign({},e),{position:s}):Object.assign({},e)));if(!d||!Array.isArray(d))return void console.error("[GradientEditor] Failed to create new stops array after drag.");const c=[...d].sort(((e,t)=>{var i,n;return(null!==(i=null==e?void 0:e.position)&&void 0!==i?i:0)-(null!==(n=null==t?void 0:t.position)&&void 0!==n?n:0)}));try{this.dispatchEvent(new CustomEvent("gradient-changed",{detail:{stops:c},bubbles:!0,composed:!0})),console.log("[GradientEditor] Dispatched gradient-changed event after pointer up finalized")}catch(e){console.error("[GradientEditor] Error dispatching gradient-changed event:",e)}}catch(t){console.error("[GradientEditor] Error in pointer up handler:",t),this._endDrag(e)}}_endDrag(e){try{if(!this._isDragging&&!this._draggedStopId)return;const t=this._isDragging,i=this._draggedStopId;if(this._isDragging=!1,this._draggedStopId=null,t&&console.log(`[GradientEditor] Ending drag for stop ${i}. Removing listeners.`),(null==e?void 0:e.currentTarget)&&void 0!==e.currentTarget.isConnected){const t=e.currentTarget;if(t.isConnected){try{e.pointerId&&t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId)}catch(e){console.warn("[GradientEditor] Error releasing pointer capture:",e)}try{t.removeEventListener("pointermove",this._boundPointerMove),t.removeEventListener("pointerup",this._boundPointerUp),t.removeEventListener("pointercancel",this._boundPointerUp)}catch(e){console.warn("[GradientEditor] Error removing element listeners:",e)}}}try{document.removeEventListener("pointermove",this._boundPointerMove),document.removeEventListener("pointerup",this._boundPointerUp),document.removeEventListener("pointercancel",this._boundPointerUp)}catch(e){console.warn("[GradientEditor] Error removing document listeners:",e)}requestAnimationFrame((()=>{this.isConnected&&this.requestUpdate()}))}catch(t){console.error("[GradientEditor] Error in _endDrag:",t);try{document.removeEventListener("pointermove",this._boundPointerMove),document.removeEventListener("pointerup",this._boundPointerUp),document.removeEventListener("pointercancel",this._boundPointerUp)}catch(e){console.warn("[GradientEditor] Error during fallback document listener removal in _endDrag catch block:",e)}this._isDragging=!1,this._draggedStopId=null}}_handleDeleteClick(e,t){e.stopPropagation(),t&&t.id?0!==t.position&&100!==t.position?!this.stops||this.stops.length<=2?console.warn("[GradientEditor] Cannot delete stop - minimum 2 stops required"):(this._isDragging&&this._draggedStopId===t.id&&(console.log(`[GradientEditor] Deleting stop ${t.id} which was being dragged. Ending drag first.`),this._endDrag(null)),console.log(`[GradientEditor] Attempting to delete stop with ID: ${t.id}`),console.log("[GradientEditor] Current stops:",JSON.stringify(this.stops)),this.dispatchEvent(new CustomEvent("gradient-stop-delete",{detail:{stopId:t.id},bubbles:!0,composed:!0}))):console.warn("[GradientEditor] Cannot delete boundary stops at 0% or 100%"):console.warn("[GradientEditor] Attempted to delete invalid stop:",t)}_handleAddStop(){this.dispatchEvent(new CustomEvent("gradient-stop-add",{bubbles:!0,composed:!0}))}_handleResetStops(){this.dispatchEvent(new CustomEvent("gradient-stop-reset",{bubbles:!0,composed:!0}))}_updateDraggedStop(e,t){var i;try{if(!e||"number"!=typeof t)return;const n=this.stops.map((i=>i.id===e?Object.assign(Object.assign({},i),{position:t}):i)),o=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".gradient-preview");if(o){const e=[...n].sort(((e,t)=>e.position-t.position)),t=ke(e);t&&(o.style.background=`linear-gradient(to right, ${t})`)}}catch(e){console.error("[GradientEditor] Error updating dragged stop:",e)}}};xe([ve({type:Array})],Ce.prototype,"stops",void 0),xe([ve({type:Number})],Ce.prototype,"key",void 0),xe([be()],Ce.prototype,"_isDragging",void 0),xe([be()],Ce.prototype,"_draggedStopId",void 0),Ce=xe([ue("gradient-editor")],Ce);const Ee="2.9.1-beta1",{I:Ie}=pe;class Ae{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const Te=(e,t)=>{const i=e._$AN;if(void 0===i)return!1;for(const e of i)e._$AO?.(t,!1),Te(e,t);return!0},je=e=>{let t,i;do{if(void 0===(t=e._$AM))break;i=t._$AN,i.delete(e),e=t}while(0===i?.size)},Re=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(void 0===i)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),De(t)}};function Le(e){void 0!==this._$AN?(je(this),this._$AM=e,Re(this)):this._$AM=e}function Ve(e,t=!1,i=0){const n=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(n))for(let e=i;e<n.length;e++)Te(n[e],!1),je(n[e]);else null!=n&&(Te(n,!1),je(n));else Te(this,e)}const De=e=>{2==e.type&&(e._$AP??=Ve,e._$AQ??=Le)};class Be extends Ae{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,i){super._$AT(e,t,i),Re(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Te(this,e),je(this))}setValue(e){if((()=>void 0===this._$Ct.strings)())this._$Ct._$AI(e,this);else{const t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}class Oe{constructor(e){this.Y=e}disconnect(){this.Y=void 0}reconnect(e){this.Y=e}deref(){return this.Y}}class Me{constructor(){this.Z=void 0,this.q=void 0}get(){return this.Z}pause(){this.Z??=new Promise((e=>this.q=e))}resume(){this.q?.(),this.Z=this.q=void 0}}const Pe=e=>!(e=>null===e||"object"!=typeof e&&"function"!=typeof e)(e)&&"function"==typeof e.then,Ue=1073741823,Ne=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends Be{constructor(){super(...arguments),this._$Cwt=Ue,this._$Cbt=[],this._$CK=new Oe(this),this._$CX=new Me}render(...e){return e.find((e=>!Pe(e)))??Z}update(e,t){const i=this._$Cbt;let n=i.length;this._$Cbt=t;const o=this._$CK,a=this._$CX;this.isConnected||this.disconnected();for(let e=0;e<t.length&&!(e>this._$Cwt);e++){const r=t[e];if(!Pe(r))return this._$Cwt=e,r;e<n&&r===i[e]||(this._$Cwt=Ue,n=0,Promise.resolve(r).then((async e=>{for(;a.get();)await a.get();const t=o.deref();if(void 0!==t){const i=t._$Cbt.indexOf(r);i>-1&&i<t._$Cwt&&(t._$Cwt=i,t.setValue(e))}})))}return Z}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}});class Fe{constructor(e){this.hass=e,this._templateSubscriptions=new Map,this._templateResults=new Map,this._evaluationCache=new Map,this.CACHE_TTL=1e3}getTemplateResult(e){const t=this._evaluationCache.get(e);return t&&Date.now()-t.timestamp<this.CACHE_TTL?t.value:this._templateResults.get(e)}hasTemplateSubscription(e){return this._templateSubscriptions.has(e)}getAllTemplateResults(){return this._templateResults}async evaluateTemplate(e){var t;if(!e||!this.hass)return!1;const i=e.trim();if(!i)return!1;const n=`eval_${i}`,o=this._evaluationCache.get(n);if(o&&Date.now()-o.timestamp<this.CACHE_TTL)return o.value;try{const e=await this.hass.callApi("POST","template",{template:i}),t=e.toLowerCase().trim();let o;if(["true","on","yes","1"].includes(t))o=!0;else if(["false","off","no","0","unavailable","unknown","none",""].includes(t))o=!1;else{const i=parseFloat(t);isNaN(i)?(console.warn(`[UltraVehicleCard] Template evaluated to ambiguous string '${e}', interpreting as false.`),o=!1):o=0!==i}return this._evaluationCache.set(n,{value:o,timestamp:Date.now(),stringValue:e}),o}catch(e){const n=(null===(t=e.error)||void 0===t?void 0:t.message)||e.message||String(e);return console.error(`[UltraVehicleCard] Error evaluating template via API: ${i}. Error: ${n}`),!1}}async subscribeToTemplate(e,t,i){if(e&&this.hass){if(this._templateSubscriptions.has(t)){try{const e=this._templateSubscriptions.get(t);if(e){const t=await e;t&&"function"==typeof t&&await t()}}catch(e){}this._templateSubscriptions.delete(t)}try{const n=new Promise(((n,o)=>{n(this.hass.connection.subscribeMessage((e=>{const n=e.result;this.hass.__uvc_template_strings||(this.hass.__uvc_template_strings={}),this.hass.__uvc_template_strings[t]=n;const o=this.parseTemplateResult(n,t);o!==this._templateResults.get(t)&&i&&i(),this._templateResults.set(t,o),this._evaluationCache.set(t,{value:o,timestamp:Date.now(),stringValue:n})}),{type:"render_template",template:e}))}));this._templateSubscriptions.set(t,n)}catch(t){console.error(`[UltraVehicleCard] Failed to subscribe to template: ${e}`,t)}}}parseTemplateResult(e,t){if(t&&t.startsWith("info_entity_"))return!0;if(t&&t.startsWith("state_text_"))return!0;if(null==e)return!1;if("boolean"==typeof e)return e;if("number"==typeof e)return 0!==e;if("string"==typeof e){const t=e.toLowerCase().trim();return"true"===t||"on"===t||"yes"===t||"active"===t||"home"===t||"1"===t||"open"===t||"unlocked"===t||"false"!==t&&"off"!==t&&"no"!==t&&"inactive"!==t&&"not_home"!==t&&"away"!==t&&"0"!==t&&"closed"!==t&&"locked"!==t&&"unavailable"!==t&&"unknown"!==t&&""!==t}return console.warn(`[UltraVehicleCard] Template evaluated to ambiguous type '${typeof e}', interpreting as false.`),!1}async unsubscribeAllTemplates(){for(const[e,t]of this._templateSubscriptions.entries())try{if(t){const e=await Promise.resolve(t).catch((e=>null));if(e&&"function"==typeof e)try{await e()}catch(e){}}}catch(e){}this._templateSubscriptions.clear(),this._templateResults.clear(),this._evaluationCache.clear()}updateHass(e){this.hass=e,this._evaluationCache.clear()}}var He,qe=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let We=He=class extends he{constructor(){super(...arguments),this._lastRenderTime=0,this._lastImageUrl=null,this._mapPopupData=null,this._iconActiveStates=new Map,this._iconsAwaitingConfirmation=new Map,this._templateSubscriptions=new Map,this._templateResults=new Map,this._confirmationCancelListeners=new Map,this._iconStateDebounceTimers=new Map,this._highlightedSections=[],this._entityStates=new Map,this._entityImageUrls=new Map,this._handleHighlightSections=e=>{const t=e;t.detail&&t.detail.sections&&(this._highlightedSections=t.detail.sections)},this._handleClearHighlight=()=>{this._highlightedSections=[],this.requestUpdate()}}static getConfigElement(){return document.createElement("ultra-vehicle-card-editor")}static getStubConfig(){return{title:"Vehicle Title",title_alignment:"center",title_size:24,formatted_entities:!0,show_units:!0,vehicle_image_type:"default",sections_order:["title","image","info","bar_0","icons"]}}static get properties(){return{hass:{},config:{}}}static get styles(){return c`
      :host {
        --bar-height: 10px;
        --bar-thickness: var(--bar-height, 10px);
        --bar-radius: 2px;
        --card-padding: 16px;
        --uvc-icon-size-default: 24px; /* Default icon size */
        --uvc-bar-spacing: 8px; /* Default spacing between bars in a row */

        /* Theme-friendly custom properties */
        --uvc-primary-color: var(--primary-color);
        --uvc-text-primary-color: var(--primary-text-color);
        --uvc-text-secondary-color: var(--secondary-text-color);
        --uvc-icon-active-color: var(--state-icon-active-color, var(--primary-color));
        --uvc-icon-inactive-color: var(--state-icon-color, var(--secondary-text-color));
        --uvc-background-color: var(--card-background-color);
        --uvc-divider-color: var(--divider-color);
      }

      ha-card {
        overflow: hidden;
      }

      .card-content {
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px; /* Gap between sections */
      }

      .card-title {
        color: var(--primary-text-color);
        font-family: var(--ha-card-header-font-family, inherit);
        letter-spacing: -0.012em;
        line-height: 1.2;
        display: block;
        width: 100%;
        margin-top: 8px;
        margin-bottom: 8px;
        position: relative; /* Create stacking context */
        z-index: 2; /* Above vehicle image */
        /* font-size is set via inline style from config */
      }

      .two-column-layout {
        display: grid;
        gap: 16px;
        height: 100%;
      }

      /* Dashboard Layout Styles */
      .dashboard-layout {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 16px;
        max-width: 1200px;
        margin: 0 auto;
      }

      .dashboard-section {
        position: relative;
        z-index: 2; /* Above vehicle image */
      }

      .dashboard-middle {
        display: flex;
        flex-direction: column;
        gap: 16px;
        position: relative;
      }

      .dashboard-center-row {
        display: grid;
        grid-template-columns: minmax(100px, 1fr) minmax(auto, 2fr) minmax(100px, 1fr);
        gap: 0px;
        align-items: center;
        width: 100%;
      }

      .left-middle-section {
        justify-self: start;
        width: 100%;
        max-width: 180px;
        align-self: center;
      }

      .right-middle-section {
        justify-self: end;
        width: 100%;
        max-width: 180px;
        align-self: center;
      }

      /* Vertical icon stacking for side sections */
      .left-middle-section .icon-rows-container,
      .right-middle-section .icon-rows-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      /* Force icon rows to be vertical in side sections */
      .left-middle-section .icon-row,
      .left-middle-section .icon-row-grid,
      .right-middle-section .icon-row,
      .right-middle-section .icon-row-grid {
        display: flex !important;
        flex-direction: column !important;
        width: 100% !important;
        gap: 8px !important;
      }

      /* Make icons in side sections take full width */
      .left-middle-section .icon-outer-container,
      .right-middle-section .icon-outer-container {
        width: 100% !important;
      }

      .dashboard-center-image {
        justify-self: center;
        max-width: 75%;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 150px;
        background-color: rgba(0, 0, 0, 0.05);
        border-radius: 12px;
        padding: 8px;
      }

      /* When the image is displayed, make sure it shows in the center */
      .dashboard-layout .vehicle-image-container {
        max-width: 100%;
        z-index: 1; /* Below section content */
      }

      .dashboard-layout .dashboard-center-image .vehicle-image-container {
        position: relative;
        top: auto;
        left: auto;
        transform: none;
        opacity: 1;
        margin: 0 auto;
        height: 100%;
      }

      .dashboard-layout .dashboard-center-image .vehicle-image {
        max-height: 250px;
        width: auto;
        object-fit: contain;
        filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.2));
      }

      .centered-image {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
      }

      .centered-image img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
      }

      /* Column width variations */
      .two-column-layout.columns-50-50 {
        grid-template-columns: 1fr 1fr;
      }
      .two-column-layout.columns-30-70 {
        grid-template-columns: 3fr 7fr;
      }
      .two-column-layout.columns-70-30 {
        grid-template-columns: 7fr 3fr;
      }
      .two-column-layout.columns-40-60 {
        grid-template-columns: 4fr 6fr;
      }
      .two-column-layout.columns-60-40 {
        grid-template-columns: 6fr 4fr;
      }

      .column {
        display: flex;
        flex-direction: column;
        /* No gap needed as each section already has its own margins */
        min-width: 0; /* Prevent overflow in grid cells */
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

      /* Section highlighting for editor mode */
      .section-highlighted {
        position: relative;
      }

      .section-highlighted::after {
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border: 2px dashed rgba(var(--rgb-primary-color, 52, 152, 219), 0.6);
        border-radius: 8px;
        pointer-events: none;
        z-index: 9999;
        animation: highlight-pulse-once 1s ease-in-out forwards;
      }

      /* Special handling for image sections with crop */
      .section-highlighted.image-section::after {
        /* Use custom properties if available, otherwise use defaults */
        top: var(--image-highlight-top, -2px);
        left: var(--image-highlight-left, -2px);
        right: var(--image-highlight-right, -2px);
        bottom: var(--image-highlight-bottom, -2px);
      }

      @keyframes highlight-pulse-once {
        0% {
          border-color: rgba(var(--rgb-primary-color, 52, 152, 219), 0.8);
          opacity: 1;
        }
        25% {
          border-color: rgba(var(--rgb-primary-color, 52, 152, 219), 1);
          opacity: 1;
        }
        50% {
          border-color: rgba(var(--rgb-primary-color, 52, 152, 219), 0.6);
          opacity: 0.8;
        }
        75% {
          border-color: rgba(var(--rgb-primary-color, 52, 152, 219), 1);
          opacity: 1;
        }
        100% {
          border-color: rgba(var(--rgb-primary-color, 52, 152, 219), 0);
          opacity: 0;
        }
      }

      /* Ensure highlighted sections maintain proper stacking */
      .section-highlighted > * {
        position: relative;
        z-index: 1;
      }

      /* Remove pseudo-element styling for now */
      .section-highlighted::before {
        content: none !important;
      }

      @keyframes highlight-visible {
        /* Keep a keyframe rule to avoid errors if it was referenced elsewhere, but it won't be used with the above style */
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.8;
        }
      }

      /* Fallback content for truly empty sections when highlighted */
      .section-highlighted:empty::after {
        content: 'HIGHLIGHTED (Empty Section)';
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        font-size: 10px;
        color: red;
        font-weight: bold;
        padding: 5px;
        border: 1px dotted red;
        background: rgba(255, 0, 0, 0.1);
      }

      /* Special handling for different section types */
      .section-highlighted .vehicle-image-container,
      .section-highlighted .bars-rows-container,
      .section-highlighted .bars-container,
      .section-highlighted .icon-rows-container,
      .section-highlighted .info-rows-container {
        /* Reset any conflicting styles from child elements */
        position: relative;
        z-index: 1;
      }

      /* Handle edge-to-edge images specially */
      .section-highlighted .vehicle-image-container.edge-to-edge {
        margin-left: calc(-1 * var(--card-padding, 16px) - 8px - 4px);
        margin-right: calc(-1 * var(--card-padding, 16px) - 8px - 4px);
        padding-left: calc(8px + 4px);
        padding-right: calc(8px + 4px);
      }

      /* Add highlighting overlay for better visibility */
      .section-highlighted::before {
        content: '';
        position: absolute;
        top: -4px;
        left: -4px;
        right: -4px;
        bottom: -4px;
        background: rgba(52, 152, 219, 0.05);
        border-radius: 10px;
        pointer-events: none;
        z-index: -1;
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
        margin: 8px 0; /* Add default 8px margin on top and bottom for consistency */
      }

      /* Edge-to-edge image styling for images > 100% width */
      .vehicle-image-container.edge-to-edge {
        width: calc(100% + (var(--card-padding, 16px) * 2)); /* Extend full width plus padding */
        box-sizing: border-box;
        margin-left: calc(-1 * var(--card-padding, 16px));
        margin-right: calc(-1 * var(--card-padding, 16px));
        max-width: none; /* Override max-width limits */
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

      /* New grid layout for evenly distributed columns */
      .icon-row-grid {
        width: 100%;
        padding: 4px 0;
        /* Grid styles are applied inline */
      }

      /* Ensure icons in grid layout fill their cells */
      .icon-row-grid .icon-outer-container {
        width: 100%;
        box-sizing: border-box;
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
        position: relative;
        z-index: 1;
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
        position: relative;
        z-index: 1;
      }

      .icon-label {
        font-size: 0.85em;
        margin-top: 4px;
        text-align: center;
        width: 100%;
        overflow: visible !important;
        text-overflow: clip !important;
        white-space: normal !important;
        word-break: keep-all;
        overflow-wrap: normal;
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
        margin-top: 8px;
        margin-bottom: 8px;
      }

      .progress-bar-wrapper {
        /* New wrapper class */
        display: flex;
        flex-direction: column;
        flex-shrink: 0; /* Prevent shrinking */
        /* width is set via inline style */
        margin-top: 8px;
        margin-bottom: 8px;
      }

      /* Bar wrapper for applying individual section styles */
      .bar-wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center; /* Vertically center the bar within the wrapper */
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
          background-color 1s ease,
          background-image 0.5s ease;
      }

      /* Ensure precise matching of border-radius for progress-bar and fill */
      .progress-bar.bar-radius-rounded-square .progress-bar-fill {
        border-radius: 2px 0 0 2px; /* Left corners always 4px by default */
      }

      /* Special case for outline style with rounded-square - use 2px radius for better appearance */
      .progress-bar.bar-style-outline.bar-radius-rounded-square .progress-bar-fill {
        border-radius: 2px 0 0 2px; /* Left corners always 2px for outline style */
      }

      /* When percentage is 100%, use full border radius */
      .progress-bar.bar-radius-rounded-square .progress-bar-fill[style*='width: 100%'] {
        border-radius: 4px; /* Full rounded corners */
      }

      /* When percentage is 100% with outline style, use full 2px radius */
      .progress-bar.bar-style-outline.bar-radius-rounded-square
        .progress-bar-fill[style*='width: 100%'] {
        border-radius: 2px; /* Full rounded corners with 2px for outline style */
      }

      /* Bar Style Presets */
      /* 1. Flat (Default) - No additional styling */

      /* 2. Glossy - Light reflection effect */
      .progress-bar-fill.bar-style-glossy {
        box-shadow:
          inset 0 2px 0 rgba(255, 255, 255, 0.4),
          inset 0 -2px 0 rgba(0, 0, 0, 0.1);
        background-image: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.25) 0%,
          rgba(255, 255, 255, 0.05) 50%,
          rgba(0, 0, 0, 0.05) 51%,
          rgba(0, 0, 0, 0.1) 100%
        );
      }

      /* 3. Embossed - Raised effect */
      .progress-bar-fill.bar-style-embossed {
        box-shadow:
          inset 0 2px 4px rgba(255, 255, 255, 0.6),
          inset 0 -2px 4px rgba(0, 0, 0, 0.3),
          0 2px 4px rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(0, 0, 0, 0.15);
        margin: -1px;
      }

      /* 7. Outline - Clean bordered design */
      .progress-bar-fill.bar-style-outline {
        height: 100%;
        border-radius: inherit;
        margin-right: 0;
        box-shadow: none;
        position: relative;
      }

      .progress-bar.bar-style-outline {
        border: 2px solid var(--primary-color, rgba(var(--rgb-primary-color, 52, 152, 219), 1));
        background-color: var(--disabled-color, rgba(var(--rgb-primary-color, 52, 152, 219), 0.05));
        overflow: hidden;
        border-radius: inherit;
        padding: 4px;
        box-sizing: border-box;
      }

      /* Special case for square bar with outline style to have a small radius matching the padding */
      .progress-bar.bar-size-thin.bar-style-outline.bar-radius-square {
        border-radius: 4px; /* Match padding for thin bars */
      }

      .progress-bar.bar-size-regular.bar-style-outline.bar-radius-square {
        border-radius: 6px; /* Match padding for regular bars */
      }

      .progress-bar.bar-size-thick.bar-style-outline.bar-radius-square {
        border-radius: 8px; /* Match padding for thick bars */
      }

      .progress-bar.bar-size-thiccc.bar-style-outline.bar-radius-square {
        border-radius: 9px; /* Match padding for extra thick bars */
      }

      /* Adjust the padding for thin bars with outline style */
      .progress-bar.bar-size-thin.bar-style-outline {
        padding: 1px;
        border-width: 1px;
      }

      /* 4. Inset - Recessed effect */
      .progress-bar-fill.bar-style-inset {
        box-shadow:
          inset 1px 1px 2px var(--divider-color, rgba(0, 0, 0, 0.2)),
          inset -1px -1px 1px rgba(255, 255, 255, 0.1);
        overflow: hidden;
      }
      .progress-bar.bar-style-inset {
        box-shadow:
          inset 1px -1px 10px var(--divider-color, rgba(0, 0, 0, 0.1)),
          0 0 10px var(--divider-color, rgba(0, 0, 0, 0.1));
        padding: 3px;
      }

      /* 5. Gradient Overlay - Subtle gradient regardless of fill color */
      .progress-bar-fill.bar-style-gradient {
        background-image: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.5) 0%,
          rgba(255, 255, 255, 0.1) 40%,
          rgba(0, 0, 0, 0.08) 60%,
          rgba(0, 0, 0, 0.1) 100%
        );
      }

      /* 6. Neon Glow - Glowing effect */
      .progress-bar-fill.bar-style-neon {
        box-shadow:
          0 0 7px 2px
            rgba(
              var(--glow-color-r, var(--rgb-primary-color-r, 52)),
              var(--glow-color-g, var(--rgb-primary-color-g, 152)),
              var(--glow-color-b, var(--rgb-primary-color-b, 219)),
              0.7
            ),
          0 0 14px 6px
            rgba(
              var(--glow-color-r, var(--rgb-primary-color-r, 52)),
              var(--glow-color-g, var(--rgb-primary-color-g, 152)),
              var(--glow-color-b, var(--rgb-primary-color-b, 219)),
              0.5
            ),
          0 0 20px 10px
            rgba(
              var(--glow-color-r, var(--rgb-primary-color-r, 52)),
              var(--glow-color-g, var(--rgb-primary-color-g, 152)),
              var(--glow-color-b, var(--rgb-primary-color-b, 219)),
              0.3
            ),
          inset 0 0 10px rgba(255, 255, 255, 0.8);
        border: 1px solid
          rgba(
            var(--glow-color-r, var(--rgb-primary-color-r, 52)),
            var(--glow-color-g, var(--rgb-primary-color-g, 152)),
            var(--glow-color-b, var(--rgb-primary-color-b, 219)),
            0.8
          );
        margin: -1px;
        z-index: 2;
        filter: brightness(1.2);
      }

      /* 7. Material - Material design inspired */
      .progress-bar-fill.bar-style-material {
        transition:
          width 0.5s cubic-bezier(0.4, 0, 0.2, 1),
          background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        height: 100% !important;
        border-radius: inherit !important;
      }
      .progress-bar.bar-style-material {
        height: inherit;
        min-height: 6px;
        overflow: hidden;
        border: none;
        background-color: rgba(var(--rgb-primary-color, 52, 152, 219), 0.15);
        padding: 0;
      }

      /* 8. Glass - Transparent look with blur effect */
      .progress-bar-fill.bar-style-glass {
        background-image: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.25) 0%,
          rgba(255, 255, 255, 0.1) 100%
        );
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
        box-shadow:
          inset 0 0 8px rgba(255, 255, 255, 0.8),
          inset 0 0 16px rgba(255, 255, 255, 0.1);
      }
      .progress-bar.bar-style-glass {
        background: rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.1);
      }

      /* 9. Metallic - Metallic appearance */
      .progress-bar-fill.bar-style-metallic {
        background-image: linear-gradient(
          to bottom,
          rgba(255, 255, 255, 0.4) 0%,
          rgba(255, 255, 255, 0.2) 35%,
          rgba(0, 0, 0, 0.1) 50%,
          rgba(0, 0, 0, 0.2) 51%,
          rgba(0, 0, 0, 0.05) 100%
        );
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.6),
          inset 0 -1px 0 rgba(0, 0, 0, 0.25),
          0 1px 2px rgba(0, 0, 0, 0.2);
      }
      .progress-bar.bar-style-metallic {
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.1) 100%
        );
      }

      /* 10. Neumorphic - Soft UI style */
      .progress-bar-fill.bar-style-neumorphic {
        border-radius: inherit !important;
        box-shadow:
          inset 2px 2px 5px rgba(0, 0, 0, 0.15),
          inset -2px -2px 5px rgba(255, 255, 255, 0.15);
      }
      .progress-bar.bar-style-neumorphic {
        background-color: var(--card-background-color, #f0f0f0);
        border: none;
        box-shadow:
          inset 2px 2px 5px rgba(0, 0, 0, 0.1),
          inset -2px -2px 5px rgba(255, 255, 255, 0.1),
          5px 5px 10px rgba(0, 0, 0, 0.05),
          -5px -5px 10px rgba(255, 255, 255, 0.05);
        padding: 3px;
      }

      /* 11. Dashed - Dashed line effect */
      .progress-bar-fill.bar-style-dashed {
        background-image: repeating-linear-gradient(
          90deg,
          currentColor 0px,
          /* Use currentColor instead of var(--bar-color) */ currentColor 5px,
          /* Length of the dash (5px) */ transparent 5px,
          /* Start of the gap */ transparent 10px
            /* End of the gap (5px dash + 5px gap = 10px total) */
        );
        background-size: 10px 100%; /* Width of one dash + gap cycle (5px + 5px) */
        background-color: transparent; /* No solid background */
        box-shadow: none; /* Remove other shadows */
      }

      /* For full/cropped gradients with dashed style, apply a mask pattern */
      .progress-bar-fill.bar-style-dashed[data-mode='full'],
      .progress-bar-fill.bar-style-dashed[data-mode='cropped'] {
        /* Create a mask effect over the gradient background */
        mask-image: repeating-linear-gradient(
          90deg,
          black 0px,
          black 5px,
          transparent 5px,
          transparent 10px
        );
        -webkit-mask-image: repeating-linear-gradient(
          90deg,
          black 0px,
          black 5px,
          transparent 5px,
          transparent 10px
        );
        mask-size: 10px 100%;
        -webkit-mask-size: 10px 100%;
      }

      /* Optional: Styling for the container when dashed */
      .progress-bar.bar-style-dashed {
        background-color: transparent !important; /* Force transparent background for gaps */
        border: none; /* Remove border if you want only dashes */
        /* padding: 1px;  Add padding if border is removed */
      }

      /* NEW: CSS Mask for dashed gradient (full/cropped modes) */
      .progress-bar-fill[data-mask-style='dashed'] {
        mask-image: repeating-linear-gradient(
          90deg,
          black 0px,
          /* Opaque part for the dash */ black 5px,
          /* End of opaque dash */ transparent 5px,
          /* Start of transparent gap */ transparent 10px /* End of transparent gap */
        );
        mask-size: 10px 100%; /* Size of one cycle */
        mask-repeat: repeat-x; /* Repeat horizontally */
        /* Add -webkit- prefix for compatibility */
        -webkit-mask-image: repeating-linear-gradient(
          90deg,
          black 0px,
          black 5px,
          transparent 5px,
          transparent 10px
        );
        -webkit-mask-size: 10px 100%;
        -webkit-mask-repeat: repeat-x;
        /* Ensure no background color interferes with the masked gradient */
        background-color: transparent !important;
      }

      /* Animation classes fix to follow border radius */
      .progress-bar-fill.animate-charging-lines::before,
      .progress-bar-fill.animate-rainbow::before,
      .progress-bar-fill.animate-ripple::before,
      .progress-bar-fill.animate-wave::before,
      .progress-bar-fill.animate-traffic::before,
      .progress-bar-fill.animate-glow::after,
      .progress-bar-fill.animate-bubbles::before,
      .progress-bar-fill.animate-bubbles::after,
      .progress-bar-fill.animate-bubbles span::before,
      .progress-bar-fill.animate-bubbles span::after,
      .progress-bar-fill.animate-progress-spinner::before,
      .progress-bar-fill.animate-shimmer::before {
        border-radius: inherit;
        overflow: hidden;
      }

      /* Gradient styles */
      .progress-bar-fill[has-gradient='true'] {
        z-index: 2;
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
              rgba(
                var(--glow-color-r, var(--rgb-primary-color-r, 52)),
                var(--glow-color-g, var(--rgb-primary-color-g, 152)),
                var(--glow-color-b, var(--rgb-primary-color-b, 219)),
                0.7
              ),
            0 0 20px 6px
              rgba(
                var(--glow-color-r, var(--rgb-primary-color-r, 52)),
                var(--glow-color-g, var(--rgb-primary-color-g, 152)),
                var(--glow-color-b, var(--rgb-primary-color-b, 219)),
                0.4
              );
          opacity: 0.7;
        }
        50% {
          box-shadow:
            0 0 20px 5px
              rgba(
                var(--glow-color-r, var(--rgb-primary-color-r, 52)),
                var(--glow-color-g, var(--rgb-primary-color-g, 152)),
                var(--glow-color-b, var(--rgb-primary-color-b, 219)),
                0.9
              ),
            0 0 40px 10px
              rgba(
                var(--glow-color-r, var(--rgb-primary-color-r, 52)),
                var(--glow-color-g, var(--rgb-primary-color-g, 152)),
                var(--glow-color-b, var(--rgb-primary-color-b, 219)),
                0.6
              );
          opacity: 0.9;
        }
        100% {
          box-shadow:
            0 0 10px 3px
              rgba(
                var(--glow-color-r, var(--rgb-primary-color-r, 52)),
                var(--glow-color-g, var(--rgb-primary-color-g, 152)),
                var(--glow-color-b, var(--rgb-primary-color-b, 219)),
                0.7
              ),
            0 0 20px 6px
              rgba(
                var(--glow-color-r, var(--rgb-primary-color-r, 52)),
                var(--glow-color-g, var(--rgb-primary-color-g, 152)),
                var(--glow-color-b, var(--rgb-primary-color-b, 219)),
                0.4
              );
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
        margin-top: 0px;
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

      /* Style for icons awaiting confirmation click */
      .icon-container.awaiting-confirmation {
        position: relative;
        border-radius: 8px;
        transform: scale(1.1);
        transition: transform 0.2s ease-out;
      }

      .icon-container.awaiting-confirmation::before {
        content: '';
        position: absolute;
        top: -6px;
        left: -6px;
        right: -6px;
        bottom: -6px;
        border: 4px solid var(--primary-color);
        border-radius: 14px;
        animation: confirmation-pulse 1s infinite;
        pointer-events: none;
        z-index: 10;
        box-shadow: 0 0 20px rgba(var(--rgb-primary-color), 0.6);
      }

      .icon-container.awaiting-confirmation::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(var(--rgb-primary-color), 0.2);
        border-radius: 8px;
        pointer-events: none;
        z-index: 5;
        animation: confirmation-glow 1s infinite;
      }

      @keyframes confirmation-pulse {
        0% {
          opacity: 1;
          transform: scale(1);
          box-shadow:
            0 0 20px rgba(var(--rgb-primary-color), 0.6),
            inset 0 0 20px rgba(var(--rgb-primary-color), 0.3);
        }
        50% {
          opacity: 0.7;
          transform: scale(1.08);
          box-shadow:
            0 0 40px rgba(var(--rgb-primary-color), 0.8),
            inset 0 0 20px rgba(var(--rgb-primary-color), 0.5);
        }
        100% {
          opacity: 1;
          transform: scale(1);
          box-shadow:
            0 0 20px rgba(var(--rgb-primary-color), 0.6),
            inset 0 0 20px rgba(var(--rgb-primary-color), 0.3);
        }
      }

      @keyframes confirmation-glow {
        0%,
        100% {
          opacity: 0.2;
        }
        50% {
          opacity: 0.3;
        }
      }

      /* Disable icon animations when in confirmation mode to avoid visual conflicts */
      .icon-container.awaiting-confirmation ha-icon {
        animation: none !important;
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

      /* Dashboard-specific icon styling */
      .dashboard-icon-row {
        margin-bottom: 8px;
      }

      /* Optimize icon display in side sections */
      .left-middle-section .icon-container,
      .right-middle-section .icon-container {
        padding: 6px 8px;
        border-radius: 8px;
        align-items: center !important;
        /* Allow container to grow with wrapped text */
        min-height: auto;
        height: auto;
      }

      /* Optimize icon spacing for vertical layout */
      .left-middle-section .icon-container[style*='flex-direction: column'],
      .right-middle-section .icon-container[style*='flex-direction: column'] {
        gap: 4px !important;
      }

      /* Adjust icon size in side sections - make text smaller and improve wrapping */
      .left-middle-section .icon-label,
      .right-middle-section .icon-label,
      .left-middle-section .icon-state,
      .right-middle-section .icon-state {
        font-size: 0.8em;
        /* Enhanced text wrapping for constrained side sections - keep words intact */
        white-space: normal !important;
        word-break: keep-all !important;
        overflow-wrap: normal !important;
        hyphens: none;
        line-height: 1.3 !important;
        max-width: 100%;
        /* Allow up to 2 lines before considering truncation */
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }

      /* Set hover effect for dashboard icons */
      .left-middle-section .icon-container:hover,
      .right-middle-section .icon-container:hover {
        background-color: rgba(var(--rgb-primary-color), 0.15);
      }

      /* Ensure text containers in side sections can expand properly */
      .left-middle-section .icon-container > div,
      .right-middle-section .icon-container > div {
        width: 100%;
        min-width: 0;
        flex-shrink: 1;
      }

      /* Animation classes fix to follow border radius */
      .progress-bar-fill.animate-charging-lines::before,
      .progress-bar-fill.animate-rainbow::before,
      .progress-bar-fill.animate-ripple::before,
      .progress-bar-fill.animate-wave::before,
      .progress-bar-fill.animate-traffic::before,
      .progress-bar-fill.animate-glow::after,
      .progress-bar-fill.animate-bubbles::before,
      .progress-bar-fill.animate-bubbles::after,
      .progress-bar-fill.animate-bubbles span::before,
      .progress-bar-fill.animate-bubbles span::after,
      .progress-bar-fill.animate-progress-spinner::before,
      .progress-bar-fill.animate-shimmer::before {
        border-radius: inherit;
        overflow: hidden;
      }

      /* NEW: Section Break Styles */
      .section-break {
        /* width is controlled inline by style attribute */
        /* Center the break horizontally using transform */
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        /* Add padding matching the negative margin to keep *internal* content aligned (if break has content, e.g., text later) */
        /* padding-left: var(--card-padding, 16px); */ /* Commented out for now as breaks are visual only */
        /* padding-right: var(--card-padding, 16px); */
        box-sizing: border-box;
        z-index: 2;

        border-top-style: solid;
        border-top-color: var(--break-color, var(--divider-color));
        border-top-width: var(--break-thickness, 1px); /* UPDATED variable */
      }

      .section-break.break-style-line {
        border-top-style: solid;
        border-top-color: var(--break-color, var(--divider-color));
        border-top-width: var(--break-thickness, 1px); /* UPDATED variable */
      }

      .section-break.break-style-double_line {
        border-top-style: double;
        border-top-color: var(--break-color, var(--divider-color));
        /* Double line needs more width */
        border-top-width: calc(var(--break-thickness, 1px) * 3); /* UPDATED variable */
      }

      .section-break.break-style-dotted {
        border-top-style: dotted;
        border-top-color: var(--break-color, var(--divider-color));
        border-top-width: var(--break-thickness, 1px); /* UPDATED variable */
      }

      .section-break.break-style-double_dotted {
        /* Simulate double dotted with pseudo-element */
        border-top: none;
        height: calc(var(--break-thickness, 1px) * 2 + 2px); /* UPDATED variable */
      }
      .section-break.break-style-double_dotted::before,
      .section-break.break-style-double_dotted::after {
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        height: var(--break-thickness, 1px); /* UPDATED variable */
        background-image: linear-gradient(
          to right,
          var(--break-color, var(--divider-color)) 60%,
          transparent 0%
        );
        background-size: 6px var(--break-thickness, 1px); /* UPDATED variable */
        background-repeat: repeat-x;
      }
      .section-break.break-style-double_dotted::before {
        top: 0;
      }
      .section-break.break-style-double_dotted::after {
        bottom: 0;
      }

      .section-break.break-style-shadow {
        border-top: none;
        height: calc(var(--break-thickness, 1px) * 2); /* UPDATED variable */
        background: linear-gradient(to bottom, var(--break-color, rgba(0, 0, 0, 0.1)), transparent);
      }

      /* ... other cropper styles ... */

      /* NEW: Info Rows Styling */
      .info-rows-container {
        display: flex;
        flex-direction: column;
        gap: 8px; /* Space between rows */
        width: 100%;
        position: relative; /* Create stacking context */
        z-index: 2; /* Above vehicle image */
        margin-top: 8px;
        margin-bottom: 8px;
      }

      /* Info row styles are handled inline */

      .info-row-item {
        /* Styles for individual rows are applied inline via _renderSingleInfoRow */
        /* This class is mostly for targeting if needed */
      }

      .info-entity-item {
        /* Styles for individual entities are applied inline via _renderSingleInfoEntity */
        /* This class is for targeting and ensuring consistent behavior if needed */
        line-height: 1.4; /* Improve readability */
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 8px;
        min-width: 0;
        /* flex property is set inline based on wrap setting */
      }

      .info-entity-item ha-icon {
        margin-right: 8px;
        flex-shrink: 0;
      }

      .info-entity-item > div {
        min-width: 0;
        flex: 1;
      }

      /* Ensure proper spacing when entities wrap to new lines */
      .info-row-item {
        /* Row-level wrapping styles are applied inline */
        line-height: 1.2;
      }

      /* Responsive behavior for narrow containers */
      @media (max-width: 480px) {
        .info-entity-item > div {
          white-space: normal !important;
          word-break: keep-all;
          overflow-wrap: normal;
        }
      }

      /* For very narrow info sections, allow text wrapping */
      .info-rows-container[style*='width: 25%'] .info-entity-item > div,
      .info-rows-container[style*='width: 50%'] .info-entity-item > div,
      .left-middle-section .info-entity-item > div,
      .right-middle-section .info-entity-item > div {
        white-space: normal !important;
        word-break: keep-all;
        overflow-wrap: normal;
      }

      /* Container query support for better responsive behavior */
      @container (max-width: 300px) {
        .info-entity-item > div {
          white-space: normal !important;
          word-break: keep-all;
          overflow-wrap: normal;
        }
      }

      /* NEW LAYOUT STYLES */
      .half-full-layout,
      .full-half-layout {
        display: flex;
        flex-direction: column;
      }

      .half-full-layout .half-full-row1,
      .full-half-layout .full-half-row2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }

      .half-full-layout .half-full-row2,
      .full-half-layout .full-half-row1 {
        /* These rows will take full width by default as direct children of a flex column */
      }

      /* Ensure columns within these layouts behave correctly */
      .half-full-layout .column,
      .full-half-layout .column {
        display: flex;
        flex-direction: column;
        gap: 0; /* Explicitly remove gap for these layouts */
        min-width: 0; /* Prevent overflow */
      }

      .section-title {
        font-size: 1.2em;
        font-weight: bold;
        margin-bottom: 8px;
      }

      .image-container {
        text-align: center;
        position: relative;
        overflow: hidden; /* Ensures image respects border radius if any */
      }

      .vehicle-image {
        max-width: 100%;
        height: auto;
        object-fit: contain;
        border-radius: var(--ha-card-border-radius, 4px);
        transition: transform 0.3s ease-in-out;
      }

      .image-placeholder {
        width: 100%;
        height: 200px; /* Default placeholder height */
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--divider-color);
        color: var(--secondary-text-color);
        border-radius: var(--ha-card-border-radius, 4px);
      }
      /* Old .bars-container, can be removed if no longer used by legacy or other parts */
      /* For now, let's assume it might be used by legacy 'bars' section, adjust if confirmed not needed */
      .bars-container {
        display: flex;
        flex-direction: column;
        gap: 8px; /* Spacing between individual bars if not in rows */
      }

      /* New styles for row-based bar layout */
      .bars-rows-container {
        display: flex;
        flex-direction: column; /* Each .bar-row will be a new line */
        gap: var(--uvc-bar-spacing, 8px); /* Vertical spacing between rows of bars */
        width: 100%; /* Ensure it takes full available width */
      }
      .bar-row {
        display: flex;
        flex-direction: row; /* Bars within a row are horizontal */
        align-items: stretch; /* Make bars in a row same height if desired, or flex-start */
        gap: var(--uvc-bar-spacing, 8px); /* Horizontal spacing between bars in a row */
        width: 100%; /* Ensure it takes full available width */
        /* justify-content is now set dynamically */
      }
      .bar-wrapper {
        /* border: 1px dashed green; */ /* Debugging */
        box-sizing: border-box; /* Important for width + padding */
        display: flex; /* To allow the inner bar to fill this wrapper */
        flex-direction: column; /* Bar itself is a column */
        justify-content: center; /* Vertically center the bar within the wrapper */
      }
      /* Ensure the user-identified 'progress-bar-wrapper' fills the .bar-wrapper */
      .bar-wrapper > .progress-bar-wrapper {
        width: 100% !important; /* Override incorrect inline fractional widths */
        box-sizing: border-box;
      }
      /* Individual bar styling, including animations, colors, etc. */
      .bar {
        position: relative;
        height: 16px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        overflow: hidden;
        width: 100%;
      }

      /* Icon Animation Keyframes for state-based animations */
      @keyframes pulse-icon {
        0% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.7;
          transform: scale(1.1);
        }
        100% {
          opacity: 1;
          transform: scale(1);
        }
      }

      @keyframes vibrate-icon {
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

      @keyframes rotate-left-icon {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(-360deg);
        }
      }

      @keyframes rotate-right-icon {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes hover-icon {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-5px);
        }
      }

      @keyframes fade-icon {
        0%,
        100% {
          opacity: 1;
        }
        50% {
          opacity: 0.4;
        }
      }

      @keyframes scale-icon {
        0%,
        100% {
          transform: scale(1);
        }
        50% {
          transform: scale(0.8);
        }
      }

      @keyframes bounce-icon {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-8px);
        }
        60% {
          transform: translateY(-4px);
        }
      }

      @keyframes shake-icon {
        0%,
        100% {
          transform: translateX(0);
        }
        10%,
        30%,
        50%,
        70%,
        90% {
          transform: translateX(-5px);
        }
        20%,
        40%,
        60%,
        80% {
          transform: translateX(5px);
        }
      }

      @keyframes tada-icon {
        0% {
          transform: scale(1) rotate(0deg);
        }
        10%,
        20% {
          transform: scale(0.9) rotate(-3deg);
        }
        30%,
        50%,
        70%,
        90% {
          transform: scale(1.1) rotate(3deg);
        }
        40%,
        60%,
        80% {
          transform: scale(1.1) rotate(-3deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
        }
      }

      /* Skeleton loader for loading states */
      .skeleton-loader {
        background: linear-gradient(
          90deg,
          var(--card-background-color) 25%,
          var(--divider-color) 50%,
          var(--card-background-color) 75%
        );
        background-size: 200% 100%;
        animation: skeleton-loading 1.5s infinite;
        border-radius: 4px;
        height: 20px;
        width: 100%;
      }

      @keyframes skeleton-loading {
        0% {
          background-position: 200% 0;
        }
        100% {
          background-position: -200% 0;
        }
      }

      /* Animation classes for icons */
      .icon-container ha-icon.animate-pulse {
        animation: pulse-icon 2s ease infinite;
      }

      .icon-container ha-icon.animate-vibrate {
        animation: vibrate-icon 0.5s linear infinite;
      }

      .icon-container ha-icon.animate-rotate-left {
        animation: rotate-left-icon 2s linear infinite;
        transform-origin: center;
      }

      .icon-container ha-icon.animate-rotate-right {
        animation: rotate-right-icon 2s linear infinite;
        transform-origin: center;
      }

      .icon-container ha-icon.animate-hover {
        animation: hover-icon 2s ease-in-out infinite;
      }

      .icon-container ha-icon.animate-fade {
        animation: fade-icon 2s ease-in-out infinite;
      }

      .icon-container ha-icon.animate-scale {
        animation: scale-icon 2s ease-in-out infinite;
      }

      .icon-container ha-icon.animate-bounce {
        animation: bounce-icon 2s ease infinite;
      }

      .icon-container ha-icon.animate-shake {
        animation: shake-icon 0.8s ease-in-out infinite;
      }

      .icon-container ha-icon.animate-tada {
        animation: tada-icon 2s ease infinite;
      }

      /* Ensure highlighted sections maintain proper stacking */
      .section-highlighted > * {
        position: relative;
        z-index: 1;
      }

      /* Special handling for empty title sections */
      .section-highlighted:empty::after {
        content: 'Title section (empty)';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 12px;
        color: rgba(var(--rgb-primary-color, 52, 152, 219), 0.7);
        font-style: italic;
        z-index: 1001;
      }

      /* Special handling for sections that might be empty */
      .section-highlighted[style*='height: 0'],
      .section-highlighted[style*='display: none'] {
        display: block !important;
        height: auto !important;
        min-height: 40px !important;
      }
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");const t=this.config;JSON.stringify(null==t?void 0:t.icon_rows)!==JSON.stringify(null==e?void 0:e.icon_rows)&&this._iconActiveStates.clear();const i={show_units:!0,formatted_entities:!0,show_location:!0,show_mileage:!0,show_car_state:!0,show_info_icons:!0,vehicle_image_width:100};let n=Object.assign({},e);void 0!==n.vehicle_image_width?n=Object.assign(Object.assign({},n),{vehicle_image_width:Number(n.vehicle_image_width)}):n.vehicle_image_width=i.vehicle_image_width,this.config=Object.assign(Object.assign({},i),n),this._migrateBarsToIndividual(),this._cleanupInfoSections(),this._ensureInfoAndIconRowsInSectionsOrder(),this._templateService&&this.hass&&this._templateService.updateHass(this.hass),this._lastRenderTime=Date.now(),this.requestUpdate(),t&&this._checkForGradientOrAnimationChanges(t,this.config)&&this._forceFullRender()}_migrateBarsToIndividual(){var e,t;if(!(null===(e=this.config)||void 0===e?void 0:e.sections_order)||!(null===(t=this.config.bars)||void 0===t?void 0:t.length))return;let i=[...this.config.sections_order],n=!1;const o=i.indexOf("bars"),a=i.filter((e=>e.startsWith("bar_")));if(a.length>0){const e=new Set;a.some((t=>!!e.has(t)||(e.add(t),!1)))&&(i=i.filter((e=>!e.startsWith("bar_"))),n=!0)}if(-1!==o)if(a.length>0){i.splice(o,1);const e=a.map((e=>parseInt(e.substring(4)))).filter((e=>!isNaN(e))),t=Math.max(...a.map((e=>i.indexOf(e))).filter((e=>-1!==e)),-1),r=[];for(let t=0;t<this.config.bars.length;t++)e.includes(t)||r.push(`bar_${t}`);r.length>0&&-1!==t&&(i.splice(t+1,0,...r),n=!0)}else{const e=this.config.bars.map(((e,t)=>`bar_${t}`));i.splice(o,1,...e),n=!0}else if(a.length>0&&a.length<this.config.bars.length){const e=a.map((e=>parseInt(e.substring(4)))).filter((e=>!isNaN(e))).sort(((e,t)=>e-t)),t=i.findIndex((t=>t===`bar_${e[e.length-1]}`)),o=[];for(let t=0;t<this.config.bars.length;t++)e.includes(t)||o.push(`bar_${t}`);o.length>0&&-1!==t&&(i.splice(t+1,0,...o),n=!0)}else if(a.length>0&&a.length!==this.config.bars.length){i=i.filter((e=>!e.startsWith("bar_")));const e=this.config.bars.map(((e,t)=>`bar_${t}`));if(i.includes("info")){const t=i.indexOf("info");i.splice(t+1,0,...e)}else if(i.includes("image")){const t=i.indexOf("image");i.splice(t+1,0,...e)}else i.push(...e);n=!0}n&&(this.config=Object.assign(Object.assign({},this.config),{sections_order:i}),this._saveConfigChanges())}_cleanupInfoSections(){var e,t;if(!(null===(e=this.config)||void 0===e?void 0:e.sections_order)||!(null===(t=this.config.info_rows)||void 0===t?void 0:t.length))return;const i=[...this.config.sections_order],n=i.indexOf("info"),o=i.some((e=>e.startsWith("info_row_")));-1!==n&&o&&(i.splice(n,1),this.config=Object.assign(Object.assign({},this.config),{sections_order:i}),this._saveConfigChanges())}_saveConfigChanges(){const e=new CustomEvent("config-changed",{detail:{config:this.config},bubbles:!0,composed:!0});this.dispatchEvent(e)}_checkForGradientOrAnimationChanges(e,t){if(!e.bars||!t.bars)return!0;for(let i=0;i<Math.max(e.bars.length,t.bars.length);i++){const n=e.bars[i],o=t.bars[i];if(!n||!o)return!0;if(n.use_gradient!==o.use_gradient)return!0;if(n.gradient_display_mode!==o.gradient_display_mode)return!0;if(n.limit_entity!==o.limit_entity)return!0;if(n.limit_indicator_color!==o.limit_indicator_color)return!0;if(JSON.stringify(n.gradient_stops)!==JSON.stringify(o.gradient_stops))return!0;if(n.animation_type!==o.animation_type)return!0;if(n.animation_entity!==o.animation_entity)return!0;if(n.animation_state!==o.animation_state)return!0;if(n.action_animation!==o.action_animation)return!0;if(n.action_animation_entity!==o.action_animation_entity)return!0;if(n.action_animation_state!==o.action_animation_state)return!0}return!1}_forceFullRender(){this._lastRenderTime=Date.now(),this.requestUpdate(),setTimeout((()=>{if(this.shadowRoot){const e=this.shadowRoot.querySelectorAll(".progress-bar-fill, .icon-container"),t=[],i=[];e.forEach((e=>{e instanceof HTMLElement&&(e.classList.contains("progress-bar-fill")?t.push(e):e.classList.contains("icon-container")&&i.push(e))})),t.forEach((e=>{e.offsetHeight;const t=e.getAttribute("has-gradient"),i=e.getAttribute("data-mode");if("true"===t)if("full"===i)e.style.backgroundSize="100% 100%",e.style.backgroundPosition="0% 0%";else if("value_based"===i){const t=e.style.width;e.style.backgroundSize=`${t} 100%`}e.setAttribute("data-refreshed",String(this._lastRenderTime))}))}}),50)}render(){var e;if(!this.config||!this.hass)return J``;null===(e=this.config.bars)||void 0===e||e.map(((e,t)=>`bar_${t}`));const t=(this.config.sections_order,this._getDisplaySections()),i=this.config.layout_type||"single",n=this.config.sections_columns||{},o=(this.config.section_styles,this.config.hidden_sections||[]),a=t.filter((e=>!o.includes(e))),r=e=>{var t,i,n,o,a;const r=[],s=this.config.section_styles||{},l=this.config.section_breaks||[],d=e.some((e=>e.startsWith("info_row_")));for(let c=0;c<e.length;){const p=e[c];let g=!1;if(!this._shouldRenderSection(p)){c++;continue}if("info"===p&&d){c++;continue}const h=s[p]||{};let m="";if(h.marginTop&&(m+=`margin-top: ${h.marginTop}px;`),h.marginBottom&&(m+=` margin-bottom: ${h.marginBottom}px;`),m=m.trim(),p.startsWith("bar_")){const i=[];let n=[],o=0;const a=[];let s=c;for(;s<e.length&&e[s].startsWith("bar_");){const i=e[s],n=parseInt(i.substring(4));this._shouldRenderSection(i)&&(null===(t=this.config.bars)||void 0===t?void 0:t[n])&&a.push(n),s++}for(const e of a){const t=this.config.bars[e],a=parseInt(t.width||"100");o+a>100&&n.length>0&&(i.push(n),n=[],o=0),n.push({index:e,config:t}),o+=a}n.length>0&&i.push(n),c+=a.length>0?a.length:1,a.length>0&&(g=!0),i.length>0&&r.push(J`<div class="bars-rows-container">
                ${i.map((e=>{const t=this.config.bar_row_alignment||"center";return J`
                    <div class="bar-row" style="${`justify-content: ${t};`}">
                      ${e.map((e=>{var t;const i=`bar_${e.index}`,n=(null===(t=this.config.section_styles)||void 0===t?void 0:t[i])||{};let o="";n.marginTop&&(o+=`margin-top: ${n.marginTop}px; `),n.marginBottom&&(o+=`margin-bottom: ${n.marginBottom}px; `);const a=e.config.width||"100";o+=`flex-basis: ${a}%; `,o+=`width: ${a}%; `,o+="flex-shrink: 0; ";const r=this._getHighlightClass(i);return J`
                          <div
                            class="bar-wrapper ${r}"
                            style="${o.trim()}"
                          >
                            ${this._renderBar(e.config)}
                          </div>
                        `}))}
                    </div>
                  `}))}
              </div>`)}else if("bars"===p){const e=[];let t=m;if(this._shouldRenderSection("bars")&&this.config.bars&&this.config.bars.forEach(((t,i)=>{const n=`bar_${i}`;this._shouldRenderSection(n)&&e.push(i)})),e.length>0){const i=this._getHighlightClass("bars");r.push(J`<div
                class="bars-container ${i}"
                style="${t}"
              >
                ${e.map((e=>{const t=s[`bar_${e}`]||{};let i="";return t.marginTop&&(i+=`margin-top: ${t.marginTop}px;`),t.marginBottom&&(i+=`margin-bottom: ${t.marginBottom}px;`),J`
                    <div class="bar-wrapper" style="${i}">
                      ${this._renderBar(this.config.bars[e])}
                    </div>
                  `}))}
              </div>`)}c++,g=!0}else if(p.startsWith("break_")){const e=l.find((e=>e.id===p));if(e){const t=e.break_style||"blank";if("blank"!==t){const i=e.break_thickness||1,n=e.break_width_percent||100,o=e.break_color||"var(--divider-color)";r.push(J`
                <div
                  class="section-break break-style-${t}"
                  style="--break-thickness: ${i}px; --break-color: ${o}; width: ${n}%; ${m}"
                ></div>
              `)}}else console.warn(`[UltraVehicleCard] Render: Could not find config for break ID: ${p}`)}else switch(p){case"title":const e=this.config.title_size||24,t=this._getHighlightClass("title"),s=this._isHighlighted("title");r.push(this.config.title||s?J`<div class="${t}" style="${m}">
                      ${this.config.title?J`<h1
                            class="card-title ${this.config.title_alignment||"center"}"
                            style="font-size: ${e}px !important; line-height: 1.2;
                                 ${this.config.title_color?`color: ${this.config.title_color};`:""}"
                          >
                            ${this.config.title}
                          </h1>`:s?J`<div
                              style="padding: 12px; text-align: center; font-style: italic; color: var(--secondary-text-color); font-size: 14px;"
                            >
                              Title section (no title configured)
                            </div>`:J``}
                    </div>`:J``);break;case"image":const l=this._getHighlightClass("image"),d=this._isHighlighted("image");let c=this.config.vehicle_image_crop;if(this.config.action_images&&this.config.action_images.length>0)for(const e of this.config.action_images)if(e.template_mode&&e.template){const t=`action_image_${e.id}`;if(this._templateService&&this._templateService.hasTemplateSubscription(t)&&null!==(i=this._templateService.getTemplateResult(t))&&void 0!==i&&i&&e.image_crop){c=e.image_crop;break}}else if(e.entity&&e.state){const t=null===(n=this.hass.states[e.entity])||void 0===n?void 0:n.state;if(void 0!==t&&t.trim().toLowerCase()===e.state.trim().toLowerCase()&&e.image_crop){c=e.image_crop;break}}const g=d?this._getImageHighlightStyle(c):"";if(d)r.push(J`<div
                    class="${l}"
                    style="${m}${g?` ${g}`:""}"
                  >
                    ${this._renderImage()||J`<div
                      style="padding: 20px; text-align: center; font-style: italic; color: var(--secondary-text-color); font-size: 14px; min-height: 60px; display: flex; align-items: center; justify-content: center; border: 2px dashed var(--divider-color); border-radius: 8px; margin: 8px 0;"
                    >
                      Image section (no image configured)
                    </div>`}
                  </div>`);else{const e=this._renderImage(m);e&&r.push(J`<div class="${l}">${e}</div>`)}break;case"info":const h=this._getHighlightClass("info");r.push(J`<div class="${h}">
                  ${this._renderVehicleInfo(m)}
                </div>`);break;case"icons":if(this._shouldRenderSection("icons")){const e=this._getHighlightClass("icons");r.push(J`<div class="${e}">
                    ${this._renderIconRows(m)}
                  </div>`)}break;default:if(p.startsWith("icon_row_")){const e=p.substring(9);if(this._shouldRenderSection(p)){const t=null===(o=this.config.icon_rows)||void 0===o?void 0:o.find((t=>t.id===e));if(t){const e=this._getHighlightClass(p);r.push(J`<div
                        class="icon-rows-container ${e}"
                        style="${m}"
                      >
                        ${this._renderIconRow(t)}
                      </div>`)}}}else if(p.startsWith("info_row_")){const e=p.substring(9);if(this._shouldRenderSection(p)){const t=null===(a=this.config.info_rows)||void 0===a?void 0:a.find((t=>t.id===e));if(t){const e=this._getHighlightClass(p);r.push(J`<div
                        class="info-rows-container ${e}"
                        style="${m}"
                      >
                        ${this._renderSingleInfoRow(t)}
                      </div>`)}}}}g||c++}return r};if("double"===i){const e=a.filter((e=>"right"!==n[e])),t=a.filter((e=>"right"===n[e])),i=this.config.column_width?`columns-${this.config.column_width}`:"columns-50-50";return J`
        <ha-card>
          ${this.config.global_css?J`<style>
                :host { ${this.config.global_css} }
              </style>`:""}
          <div
            class="card-content two-column-layout ${i}"
            style="${this.config.card_background?`background-color: ${this.config.card_background};`:""}"
          >
            <div class="column left-column">${r(e)}</div>
            <div class="column right-column">${r(t)}</div>
          </div>
          ${this._renderMapPopup()}
        </ha-card>
      `}if("dashboard"===i){const e=a.filter((e=>"top"===n[e])),t=a.filter((e=>"top_middle"===n[e])),i=a.filter((e=>"left_middle"===n[e])),o=a.filter((e=>"middle"===n[e])),s=a.filter((e=>"right_middle"===n[e])),l=a.filter((e=>"bottom_middle"===n[e])),d=a.filter((e=>"bottom"===n[e])),c=[...a.filter((e=>!n[e]||!["top","top_middle","left_middle","middle","right_middle","bottom_middle","bottom"].includes(n[e]))),...e],p=o.includes("image");let g=a;p&&(g=a.filter((e=>"image"!==e)));const h=void 0!==this.config.top_view_side_margin?this.config.top_view_side_margin:0,m=h>0?`padding-left: ${h}px; padding-right: ${h}px;`:"",u=`gap: ${void 0!==this.config.top_view_middle_spacing?this.config.top_view_middle_spacing:16}px;`,_=`gap: ${void 0!==this.config.top_view_vertical_spacing?this.config.top_view_vertical_spacing:16}px;`;return J`
        <ha-card>
          ${this.config.global_css?J`<style>
                :host { ${this.config.global_css} }
              </style>`:""}
          <div
            class="card-content dashboard-layout"
            style="${this.config.card_background?`background-color: ${this.config.card_background};`:""} ${m}"
          >
            <!-- Top Section -->
            <div class="dashboard-section top-section">${r(c)}</div>

            <!-- Middle Sections -->
            <div class="dashboard-middle" style="${_}">
              <div class="dashboard-section top-middle-section">
                ${r(t)}
              </div>

              <div class="dashboard-center-row" style="${u}">
                <div class="dashboard-section left-middle-section">
                  ${r(i)}
                </div>

                <!-- Vehicle image in the middle -->
                <div class="dashboard-center-image">
                  ${p?this._renderImage("",!0):o.length>0?r(o):Y}
                </div>

                <div class="dashboard-section right-middle-section">
                  ${r(s)}
                </div>
              </div>

              <div class="dashboard-section bottom-middle-section">
                ${r(l)}
              </div>
            </div>

            <!-- Bottom Section -->
            <div class="dashboard-section bottom-section">
              ${r(d)}
            </div>
          </div>
          ${this._renderMapPopup()}
        </ha-card>
      `}if("half_full"===i){const e=a.filter((e=>"half_full_row1_left"===n[e])),t=a.filter((e=>"half_full_row1_right"===n[e])),i=a.filter((i=>"half_full_row2_full"===n[i]||!n[i]&&!e.includes(i)&&!t.includes(i)));return J`
        <ha-card>
          ${this.config.global_css?J`<style>
                :host { ${this.config.global_css} }
              </style>`:""}
          <div
            class="card-content half-full-layout"
            style="${this.config.card_background?`background-color: ${this.config.card_background};`:""}"
          >
            <div class="half-full-row1">
              <div class="column hf-r1-left">${r(e)}</div>
              <div class="column hf-r1-right">
                ${r(t)}
              </div>
            </div>
            <div class="half-full-row2">
              <div class="column hf-r2-full">${r(i)}</div>
            </div>
          </div>
          ${this._renderMapPopup()}
        </ha-card>
      `}if("full_half"===i){const e=a.filter((e=>"full_half_row1_full"===n[e]||!n[e]&&!a.filter((e=>"full_half_row2_left"===n[e])).includes(e)&&!a.filter((e=>"full_half_row2_right"===n[e])).includes(e))),t=a.filter((e=>"full_half_row2_left"===n[e])),i=a.filter((e=>"full_half_row2_right"===n[e]));return J`
        <ha-card>
          ${this.config.global_css?J`<style>
                :host { ${this.config.global_css} }
              </style>`:""}
          <div
            class="card-content full-half-layout"
            style="${this.config.card_background?`background-color: ${this.config.card_background};`:""}"
          >
            <div class="full-half-row1">
              <div class="column fh-r1-full">${r(e)}</div>
            </div>
            <div class="full-half-row2">
              <div class="column fh-r2-left">${r(t)}</div>
              <div class="column fh-r2-right">
                ${r(i)}
              </div>
            </div>
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
          ${r(a)}
        </div>
        ${this._renderMapPopup()}
      </ha-card>
    `}_renderImage(e="",t=!1){var i,n,o,a;let r="",s="",l=e,d=!1,c="",p=null;const g=this.config.action_image_priority||"newest";if(this.config.action_images&&this.config.action_images.length>0)for(const e of this.config.action_images)if(e.template_mode&&e.template){const t=`action_image_${e.id}`;let n=!1;if(this._templateService&&this._templateService.hasTemplateSubscription(t)?n=null!==(i=this._templateService.getTemplateResult(t))&&void 0!==i&&i:this._templateService&&this._templateService.subscribeToTemplate(e.template,t,(()=>{this.requestUpdate()})),n&&(p=e,"priority"===g))break}else if(e.entity&&e.state){const t=null===(n=this.hass.states[e.entity])||void 0===n?void 0:n.state;if(void 0!==t&&t.trim().toLowerCase()===e.state.trim().toLowerCase()&&(p=e,"priority"===g))break}if(p){const e=p.image_type;let t="";if(c=p.entity,"upload"===e&&p.image)t=we(this.hass,p.image);else if("url"===e)t=p.image||"",t.startsWith("/")&&(t=`${this.hass.hassUrl?this.hass.hassUrl():""}${t.substring(1)}`),t.includes("/api/image/serve/")&&!t.endsWith("/original")&&(t=`${t}/original`);else if("entity"===e&&p.image_entity){const e=p.image_entity;c=e;const i=this.hass.states[e];(null===(o=null==i?void 0:i.attributes)||void 0===o?void 0:o.entity_picture)?this._entityImageUrls.has(e)?t=this._entityImageUrls.get(e)||"":(t=i.attributes.entity_picture,t.startsWith("/")&&(t=`${this.hass.hassUrl?this.hass.hassUrl():""}${t.startsWith("/")?t.substring(1):t}`)):t=(null==i?void 0:i.state)||""}t&&(r=t,s=this._computeImageStyle(p.image_width,p.image_crop),d=!0)}if(!d){const e=this.config.vehicle_image_type,t=this.config.vehicle_image||"";if(this.config.location_entity?c=this.config.location_entity:this.config.mileage_entity?c=this.config.mileage_entity:this.config.car_state_entity&&(c=this.config.car_state_entity),t&&(t.startsWith("http")||t.startsWith("/")||t.startsWith("data:")))r=t.includes("/api/image/serve/")&&!t.endsWith("/original")?`${t}/original`:t;else if("entity"===e&&this.config.vehicle_image_entity){const e=this.config.vehicle_image_entity;c=e;const t=this.hass.states[e];(null===(a=null==t?void 0:t.attributes)||void 0===a?void 0:a.entity_picture)?this._entityImageUrls.has(e)?r=this._entityImageUrls.get(e)||"":(r=t.attributes.entity_picture,r.startsWith("/")&&(r=`${this.hass.hassUrl?this.hass.hassUrl():""}${r.startsWith("/")?r.substring(1):r}`)):r=(null==t?void 0:t.state)&&(t.state.startsWith("http")||t.state.startsWith("/")||t.state.startsWith("data:"))?t.state:""}else"default"===e&&(r=ye);r||"none"===e||(r=ye),s=this._computeImageStyle(this.config.vehicle_image_width,this.config.vehicle_image_crop)}if(r&&r!==ye&&(this._lastImageUrl=r),!r)return"";const h=(d?(null==p?void 0:p.image_width)||100:this.config.vehicle_image_width||100)>100;if(h){const e="var(--card-padding, 16px)";l+=` margin-left: calc(-1 * ${e}); margin-right: calc(-1 * ${e});`}l+=" overflow: hidden;";const m=c?()=>this._showMoreInfo(c):void 0,u=!!c,_=t?"vehicle-image-container centered-image":"vehicle-image-container";return J`
      <div class="${h?`${_} edge-to-edge`:_}" style="${l}">
        <img
          class="vehicle-image ${d?"action-image-active":""} ${u?"clickable":""}"
          src="${r}"
          style="${s}"
          @error=${this._handleImageError}
          @click=${m}
          ?title=${u?`Click to view details for ${this._getFriendlyName(c)}`:void 0}
        />
      </div>
    `}_getFriendlyName(e){const t=this.hass.states[e];return t&&(t.attributes.friendly_name||e.split(".").pop())||e}_formatValue(e,t,i){var n,o,a,r,s;if(!t||!this.hass.states[t])return e;const l=this.hass.states[t],d=l.attributes.unit_of_measurement,c=l.attributes.device_class;if("binary_sensor"===t.split(".")[0]&&c){if(this.hass.formatEntityState)return this.hass.formatEntityState(l);if("on"===e.toLowerCase())switch(c){case"battery":return"Low";case"battery_charging":return"Charging";case"cold":return"Cold";case"connectivity":return"Connected";case"door":case"garage_door":case"opening":case"window":return"Open";case"gas":case"light":case"motion":case"smoke":case"sound":case"vibration":return"Detected";case"heat":return"Hot";case"lock":return"Unlocked";case"moisture":return"Wet";case"moving":return"Moving";case"occupancy":return"Occupied";case"plug":return"Plugged In";case"power":return"On";case"presence":return"Home";case"problem":return"Problem";case"running":return"Running";case"safety":return"Unsafe";case"tamper":return"Tampered";case"update":return"Update Available";default:return e}else if("off"===e.toLowerCase())switch(c){case"battery":case"cold":case"heat":return"Normal";case"battery_charging":return"Not Charging";case"connectivity":return"Disconnected";case"door":case"garage_door":case"opening":case"window":return"Closed";case"gas":case"light":case"motion":case"occupancy":case"smoke":case"sound":case"tamper":case"vibration":return"Clear";case"lock":return"Locked";case"moisture":return"Dry";case"moving":case"running":return"Stopped";case"plug":return"Unplugged";case"power":return"Off";case"presence":return"Away";case"problem":return"OK";case"safety":return"Safe";case"update":return"Up to Date";default:return e}}if(!1===this.config.formatted_entities){const t=void 0!==i?i:!1!==this.config.show_units;return d&&t?`${e} ${d}`:e}if(t===this.config.location_entity){const e=l.state.toLowerCase(),t=Object.keys(this.hass.states).filter((e=>e.startsWith("zone.")));for(const i of t){const t=this.hass.states[i],n=(t.attributes.friendly_name||t.attributes.name||"").toLowerCase(),o=i.split(".")[1].toLowerCase();if(e===n||e===o)return t.attributes.friendly_name||t.attributes.name||i.split(".")[1]}for(const e of t){const t=this.hass.states[e];if((null===(n=null==t?void 0:t.attributes)||void 0===n?void 0:n.latitude)&&(null===(o=null==t?void 0:t.attributes)||void 0===o?void 0:o.longitude)&&(null===(a=null==l?void 0:l.attributes)||void 0===a?void 0:a.latitude)&&(null===(r=null==l?void 0:l.attributes)||void 0===r?void 0:r.longitude)&&Math.abs(t.attributes.latitude-l.attributes.latitude)<1e-4&&Math.abs(t.attributes.longitude-l.attributes.longitude)<1e-4)return t.attributes.friendly_name||t.attributes.name||e.split(".")[1]}if(null===(s=null==l?void 0:l.attributes)||void 0===s?void 0:s.formatted_address)return l.attributes.formatted_address}let p=e,g=!1;if(isNaN(Number(e)))p=e.replace(/_/g," "),p.length>0&&(p=p.charAt(0).toUpperCase()+p.slice(1));else{const t=Number(e);if(this.hass.formatEntityState){const e=this.hass.formatEntityState(l);e&&"string"==typeof e&&(p=e,g=!0)}else{let e;void 0!==l.attributes.suggested_display_precision?e=l.attributes.suggested_display_precision:void 0!==l.attributes.display_precision&&(e=l.attributes.display_precision);const i=l.attributes.state_class,n=l.attributes.device_class;void 0===e&&(e="energy"===n||"total"===i||"total_increasing"===i?3:"temperature"===n||"humidity"===n?1:Number.isInteger(t)?0:2);const o=l.attributes.number_format||"en-US";p=t.toLocaleString(o,{maximumFractionDigits:e,minimumFractionDigits:0})}}const h=void 0!==i?i:!1!==this.config.show_units;return!h||!d||g&&"duration"===c?!h&&d&&(p.endsWith(` ${d}`)?p=p.substring(0,p.length-d.length-1):p.endsWith(d)&&(p=p.substring(0,p.length-d.length))):p.endsWith(d)||p.includes(` ${d}`)||(p=`${p} ${d}`),`${l.attributes.prefix||""}${p}${l.attributes.suffix||""}`}_handleImageError(e){const t=e.target;t.classList.add("image-error"),this._lastImageUrl&&t.src!==this._lastImageUrl?t.src=this._lastImageUrl:t.src=""}_renderBar(e){if(!e.entity)return J``;const t=this.hass.states[e.entity];if(!t)return J``;if(e.use_gradient&&e.gradient_stops&&e.gradient_stops.length<2&&console.warn("[UVC] Gradient bars require at least 2 color stops"),e.width){const t=parseInt(e.width);(t<0||t>100)&&console.warn("[UVC] Bar width must be between 0 and 100")}const i=parseFloat(t.state),n=!isNaN(i)&&"unavailable"!==t.state&&"unknown"!==t.state;let o=0;const a=e;if("difference"===a.percentage_type&&a.percentage_amount_entity&&a.percentage_total_entity){const e=this.hass.states[a.percentage_amount_entity],t=this.hass.states[a.percentage_total_entity];if(e&&t){const i=parseFloat(e.state),n=parseFloat(t.state);!isNaN(i)&&!isNaN(n)&&n>0&&(o=Math.max(0,Math.min(100,i/n*100)))}}else if("attribute"===a.percentage_type&&a.percentage_attribute&&t.attributes){const e=t.attributes[a.percentage_attribute];void 0===e||isNaN(parseFloat(e))||(o=Math.max(0,Math.min(100,parseFloat(e))))}else if("template"===a.percentage_type&&a.percentage_template&&this._templateService){const e=this._processPercentageTemplate(a.percentage_template);null!==e&&(o=Math.max(0,Math.min(100,e)))}else o=n?Math.max(0,Math.min(100,i)):0;const r=e=>e?(e.startsWith("var(--"),e):"";let s=null,l="";if(e.limit_entity){const t=this.hass.states[e.limit_entity];t&&!isNaN(parseFloat(t.state))&&(s=parseFloat(t.state),l=r(e.limit_indicator_color||"#ff0000"))}const d=`bar-size-${e.bar_size||"regular"}`,c=(e.width,this._getBarAnimationClass(e)),p=e.gradient_stops||[],g=!0===e.use_gradient&&p.length>=2,h=g&&e.gradient_display_mode?e.gradient_display_mode:"value_based";let m="",u="";switch(e.bar_radius){case"square":m="border-radius: 0;",u="border-radius: 0;";break;case"rounded-square":m="border-radius: 4px;",u="border-radius: 2px 0 0 2px; margin: 0;";break;default:m="border-radius: 1000px;",u="border-radius: 1000px 0 0 1000px;"}if(o>=100)switch(e.bar_radius){case"square":break;case"rounded-square":u="border-radius: 4px; margin: 0;";break;default:u="border-radius: 1000px;"}"flat"===e.bar_style&&"rounded-square"===e.bar_radius&&(u+=" border: none; box-shadow: none;");let _="";"animate-glow"===c&&(_=`--glow-color: ${g?Se(p,"value_based"===h||"cropped"===h?o:100):e.bar_color||"var(--primary-color)"};`);const f="square"===e.bar_radius?"bar-radius-square":"rounded-square"===e.bar_radius?"bar-radius-rounded-square":"bar-radius-round";let v,b="";if("neon"===e.bar_style){const t=e.bar_color||"var(--primary-color)";if("transparent"!==t&&!t.startsWith("var(--")){const e=this._hexToRgb(t);e&&(b=`\n            --glow-color-r: ${e.r};\n            --glow-color-g: ${e.g};\n            --glow-color-b: ${e.b};\n          `)}}if(g){if("dashed"===e.bar_style)if("full"===h||"cropped"===h){const t=$e(p);v=J`
            <div
              class="progress-bar-fill bar-style-dashed ${c}"
              data-use-gradient="true"
              has-gradient="true"
              data-mode="${h}"
              data-percentage="${o}"
              style="
                width: ${o}%;
                background-image: ${t};
                background-size: ${"full"===h?"100% 100%":100/o*100+"% 100%"};
                background-position: 0% 0%;
                background-repeat: no-repeat;
                ${u}
                ${_}
                ${b}
              "
            >
              ${"animate-bubbles"===c?J`<span></span>`:""}
              ${e.show_percentage?this._renderPercentageText(e,o):""}
            </div>
          `}else{const t=Se(p,o);v=J`
            <div
              class="progress-bar-fill" /* No bar-style-dashed class here to avoid conflicts */
              data-use-gradient="true"
              has-gradient="true"
              data-mode="value_based"
              data-percentage="${o}"
              style="
                width: ${o}%;
                background-color: transparent !important;
                position: relative; /* Ensure positioning context for child */
                ${u}
                overflow: hidden; /* Keep dashes within border radius */
              "
            >
              <!-- Add dedicated child element for dashes -->
              <div 
                class="dash-overlay" 
                style="
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  background-image: repeating-linear-gradient(
                    90deg, 
                    ${t}, 
                    ${t} 5px, 
                    transparent 5px, 
                    transparent 10px
                  );
                  background-size: 10px 100%;
                "
              ></div>
              ${"animate-bubbles"===c?J`<span></span>`:""}
              ${e.show_percentage?this._renderPercentageText(e,o):""}
            </div>
          `}else if("value_based"===h){const t=Se(p,o);if("neon"===e.bar_style&&!b){const e=this._hexToRgb(t);e&&(b=`\n                --glow-color-r: ${e.r};\n                --glow-color-g: ${e.g};\n                --glow-color-b: ${e.b};\n              `)}v=J`
            <div
              class="progress-bar-fill ${e.bar_style?`bar-style-${e.bar_style}`:""} ${c}"
              data-use-gradient="true"
              has-gradient="true"
              data-mode="value_based"
              data-percentage="${o}"
              style="
                width: ${o}%;
                background-color: ${t};
                ${u}
                ${_}
                ${b}
              "
            >
              ${"animate-bubbles"===c?J`<span></span>`:""}
              ${e.show_percentage?this._renderPercentageText(e,o):""}
            </div>
          `}else if("full"===h){const t=$e(p);if("neon"===e.bar_style){const e=p[p.length-1];if(e){const t=this._hexToRgb(e.color);t&&(b=`\n                  --glow-color-r: ${t.r};\n                  --glow-color-g: ${t.g};\n                  --glow-color-b: ${t.b};\n                `)}}v=J`
            <div
              class="progress-bar-fill ${e.bar_style?`bar-style-${e.bar_style}`:""} ${c}"
              data-use-gradient="true"
              has-gradient="true"
              data-mode="full"
              data-percentage="${o}"
              style="
                width: ${o}%;
                background-image: ${t};
                background-color: transparent;
                background-size: 100% 100%;
                background-position: 0% 0%;
                background-repeat: no-repeat;
                ${u}
                ${_}
                ${b}
              "
            >
              ${"animate-bubbles"===c?J`<span></span>`:""}
              ${e.show_percentage?this._renderPercentageText(e,o):""}
            </div>
          `}else if("cropped"===h){const t=$e(p);if("neon"===e.bar_style){const e=Se(p,o),t=this._hexToRgb(e);t&&(b=`\n                --glow-color-r: ${t.r};\n                --glow-color-g: ${t.g};\n                --glow-color-b: ${t.b};\n              `)}v=J`
            <div
              class="progress-bar-fill ${e.bar_style?`bar-style-${e.bar_style}`:""} ${c}"
              data-use-gradient="true"
              has-gradient="true"
              data-mode="cropped"
              data-percentage="${o}"
              style="
                width: ${o}%;
                background-image: ${t};
                background-color: transparent;
                background-size: ${100/o*100}% 100%;
                background-position: 0% 0%;
                background-repeat: no-repeat;
                ${u}
                ${_}
                ${b}
              "
            >
              ${"animate-bubbles"===c?J`<span></span>`:""}
              ${e.show_percentage?this._renderPercentageText(e,o):""}
            </div>
          `}}else{const t=r(e.bar_color||"var(--primary-color)");v="dashed"===e.bar_style?J`
          <div
            class="progress-bar-fill" /* No bar-style-dashed class to avoid CSS conflicts */
            data-percentage="${o}"
            style="
              width: ${o}%;
              background-color: transparent !important;
              position: relative; /* Ensure positioning context for child */
              ${u}
              overflow: hidden; /* Keep dashes within border radius */
            "
          >
            <!-- Add dedicated child element for dashes using the bar's color -->
            <div 
              class="dash-overlay" 
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-image: repeating-linear-gradient(
                  90deg, 
                  ${t}, 
                  ${t} 5px, 
                  transparent 5px, 
                  transparent 10px
                );
                background-size: 10px 100%;
              "
            ></div>
            ${"animate-bubbles"===c?J`<span></span>`:""}
            ${e.show_percentage?this._renderPercentageText(e,o):""}
          </div>
        `:J`
          <div
            class="progress-bar-fill ${e.bar_style?`bar-style-${e.bar_style}`:""} ${c}"
            data-percentage="${o}"
            style="
              width: ${o}%;
              background-color: ${t};
              ${u}
              ${_}
              ${b}
            "
          >
            ${"animate-bubbles"===c?J`<span></span>`:""}
            ${e.show_percentage?this._renderPercentageText(e,o):""}
          </div>
        `}let y="";if(e.width&&"100"!==e.width){const t=parseInt(e.width);let i=0;50===t?i=4:25===t?i=6:75===t&&(i=2),y=`calc(${e.width}% - ${i}px)`}else y="100%";const w="dashed"===e.bar_style?"transparent":e.background_color||"#121212";return J`
      <div
        class="progress-bar-wrapper"
        style="width: ${y};" /* Apply calculated width to wrapper */
      >
        <div
          class="progress-bar ${d} ${e.bar_style?`bar-style-${e.bar_style}`:""} ${f}"
          style="background: ${w}; border-color: ${e.border_color||"#686868"}; width: 100%; ${m}" /* Bar takes full width of wrapper */
          @click=${()=>this._showMoreInfo(e.entity)}
        >
          ${v}
          ${null!==s?J`<div
                  class="limit-indicator"
                  style="left: ${s}%;
                       background-color: ${l};
                       box-shadow: 0 0 2px ${l};"
                ></div>`:""}
        </div>
        ${this._renderBarLabels(e)}
      </div>
    `}_renderPercentageText(e,t){const i=e.percentage_text_size?`${e.percentage_text_size}px`:"14px",n=e.percentage_text_color||"#ffffff",o=!1!==this.config.show_units;return J`
      <div
        class="percentage-text"
        style="
        font-size: ${i};
        color: ${n};
      "
      >
        ${Math.round(t)}${o?"%":""}
      </div>
    `}_getBarAnimationClass(e){let t="";const i=this._getEntityState(e.animation_entity),n=this._getEntityState(e.action_animation_entity);return e.animation_type&&(!e.animation_entity&&!e.animation_state||e.animation_entity&&e.animation_state&&i===e.animation_state)&&(t=`animate-${e.animation_type}`),e.action_animation&&e.action_animation_entity&&e.action_animation_state&&n===e.action_animation_state&&(t=`animate-${e.action_animation}`),t}_getEntityState(e){var t;if(e&&this.hass.states[e])return null===(t=this.hass.states[e])||void 0===t?void 0:t.state}_renderIconRows(e=""){const{icon_rows:t=[]}=this.config;return t&&0!==t.length?J`
      <div class="icon-rows-container" style="${e}">
        ${t.map((e=>this._renderIconRow(e)))}
      </div>
    `:J``}_renderIconRow(e){if(!e.icons||!e.icons.length)return J``;const t=e.width||"100",i=e.alignment||"space-between",n=e.spacing||"medium",o=e.columns||0,a=e.vertical_alignment||"center";let r=`width: ${t}%; gap: ${{none:"0",small:"8px",medium:"16px",large:"24px"}[n]||"16px"};`,s=`icon-row align-${i}`;return o&&o>0?(r+=`display: grid; grid-template-columns: repeat(${o}, minmax(0, 1fr));`,s="icon-row-grid"):r+=`align-items: ${a};`,"dashboard"===this.config.layout_type&&(s+=" dashboard-icon-row"),J`
      <div class="${s}" style="${r}">
        ${e.icons.map((e=>this._renderCardIcon(e)))}
      </div>
    `}_renderCardIcon(e){var t,i;if(!e.entity)return J``;const n=this.hass.states[e.entity];if(!n)return J``;const o=`${e.entity}_${e.active_template_mode?e.active_template:""}_${e.inactive_template_mode?e.inactive_template:""}_${e.active_state||""}_${e.inactive_state||""}`;let a,r=!1;if(this.config.icon_rows)for(const i of this.config.icon_rows)if(null===(t=i.icons)||void 0===t?void 0:t.includes(e)){a=i.id,r=!0===i.confirmation_mode;break}const s=a?`${a}_${e.entity}`:e.entity,l=r&&this._iconsAwaitingConfirmation.has(s),d=(t,i=!1)=>{const o=n.attributes.icon||null,a=t&&e.icon_active?e.icon_active:!t&&e.icon_inactive?e.icon_inactive:o||"mdi:help-circle-outline",r=(()=>{var t;if(n.attributes.rgb_color&&Array.isArray(n.attributes.rgb_color))return`rgb(${n.attributes.rgb_color.join(",")})`;if(n.attributes.hs_color&&Array.isArray(n.attributes.hs_color)){const[e,t]=n.attributes.hs_color,i=this._hsToRgb(e,t,n.attributes.brightness||255);return`rgb(${i.r},${i.g},${i.b})`}if(n.attributes.color_rgb&&Array.isArray(n.attributes.color_rgb))return`rgb(${n.attributes.color_rgb.join(",")})`;if(n.attributes.color&&"string"==typeof n.attributes.color)return n.attributes.color;if(n.attributes.color_temp&&"color_temp"===n.attributes.color_mode){const e=n.attributes.color_temp,t=this._colorTempToRgb(e);return`rgb(${t.r},${t.g},${t.b})`}if(e.entity&&e.entity.includes("battery")&&"%"===n.attributes.unit_of_measurement){const e=parseFloat(n.state);if(!isNaN(e))return e>=80?"#4caf50":e>=50?"#ff9800":e>=20?"#ff5722":"#f44336"}if("%"===n.attributes.unit_of_measurement&&!(null===(t=e.entity)||void 0===t?void 0:t.includes("humidity"))){const e=parseFloat(n.state);if(!isNaN(e))return`hsl(${e/100*120}, 70%, 50%)`}return null})(),s=(t&&e.use_entity_color_for_icon_active||!t&&e.use_entity_color_for_icon_inactive||e.use_entity_color_for_icon&&(!t||void 0===e.use_entity_color_for_icon_active)&&(t||void 0===e.use_entity_color_for_icon_inactive))&&r?r:t&&e.color_active?e.color_active:e.color_inactive,d=e.name||n.attributes.friendly_name||"";let c=n.state;n.attributes.unit_of_measurement;const p=t?e.active_state_text:e.inactive_state_text;if(e.active_template_mode&&t||e.inactive_template_mode&&!t){const i=t?"active":"inactive",n=`${i}_${e.entity}_${e[`${i}_template`]}`;this.hass.__uvc_template_strings&&this.hass.__uvc_template_strings[n]&&(c=this.hass.__uvc_template_strings[n])}else null!=p&&""!==p?c=p:this.config.formatted_entities&&n.state&&(c=this._formatValue(n.state,e.entity,e.show_units));const g=e.icon_size?isNaN(Number(e.icon_size))&&"string"==typeof e.icon_size&&(e.icon_size.endsWith("px")||e.icon_size.endsWith("em")||e.icon_size.endsWith("%"))?e.icon_size:`${e.icon_size}px`:"24px",h=e.text_size?isNaN(Number(e.text_size))&&"string"==typeof e.text_size&&(e.text_size.endsWith("px")||e.text_size.endsWith("em")||e.text_size.endsWith("%"))?e.text_size:`${e.text_size}px`:"14px",m=(()=>{if(!e.icon_background||"none"===e.icon_background)return"";let t=24;if("string"==typeof g){const e=g.match(/^(\d+)/);e&&(t=parseInt(e[1],10))}else"number"==typeof g&&(t=g);const i=t+16;let n=`background-color: ${e.use_entity_color_for_icon_background&&r?r:e.icon_background_color||"var(--secondary-background-color)"}; display: flex; align-items: center; justify-content: center; width: ${i}px; height: ${i}px;`;switch(e.icon_background){case"circle":n+="border-radius: 50%;";break;case"square":n+="border-radius: 0;";break;case"rounded-square":n+=`border-radius: ${Math.max(4,.15*i)}px;`}return n})(),u=e.text_position||"bottom",_={bottom:"column",top:"column-reverse",left:"row-reverse",right:"row"}[u]||"column",f={"flex-start":"flex-start",center:"center","flex-end":"flex-end"}[e.vertical_alignment||"center"]||"center",v=e.text_alignment||"center",b="left"===v?"flex-start":"right"===v?"flex-end":"center",y=(()=>{if(!e.container_background||"none"===e.container_background)return"";let t=`background-color: ${e.use_entity_color_for_container_background&&r?r:e.container_background_color||"var(--secondary-background-color)"}; padding: ${"left"===u||"right"===u?"4px 12px":"8px"}; display: inline-flex; align-items: ${f}; justify-content: center;`;switch(e.container_background){case"circle":t+="border-radius: 50%;";break;case"square":t+="border-radius: 0;";break;case"rounded-square":t+="border-radius: 8px;"}return t})(),w=t&&!1!==e.show_icon_active||!t&&!1!==e.show_icon_inactive,x=t?void 0===e.show_name_active?!1!==e.show_name:e.show_name_active:void 0===e.show_name_inactive?!1!==e.show_name:e.show_name_inactive,k=t?void 0===e.show_state_active?!1!==e.show_state:e.show_state_active:void 0===e.show_state_inactive?!1!==e.show_state:e.show_state_inactive,$=t?e.name_color_active||"var(--primary-text-color)":e.name_color_inactive||"var(--primary-text-color)",S=t?e.state_color_active||"var(--primary-text-color)":e.state_color_inactive||"var(--secondary-text-color)";return J`
        <div
          class="icon-outer-container"
          style="${y}${e.container_width?`width: ${e.container_width}%;`:""}"
          @click=${()=>{this._handleIconClick(e)}}
          @keydown=${t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this._handleIconClick(e))}}
          role="button"
          tabindex="0"
          aria-label="${d}"
          aria-pressed="${t?"true":"false"}"
        >
          <div
            class="icon-container ${"draggable"} ${i?"pending-state":""} ${l?"awaiting-confirmation":""}"
            style="flex-direction: ${_}; align-items: ${f};"
            draggable="${!0}"
            @dragstart=${this._handleDragStart}
            @dragend=${this._handleDragEnd}
          >
            ${e.icon_background&&"none"!==e.icon_background?J`
                    ${w?J`<div class="icon-background" style="${m}">
                          <ha-icon
                            .icon="${a}"
                            class="${t&&e.active_animation&&"none"!==e.active_animation?`animate-${e.active_animation}`:!t&&e.inactive_animation&&"none"!==e.inactive_animation?`animate-${e.inactive_animation}`:""}"
                            style="color: ${s||"var(--primary-text-color)"}; font-size: ${g}; --mdc-icon-size: ${g};"
                          ></ha-icon>
                        </div>`:""}
                  `:J`
                    ${w?J`<ha-icon
                          .icon="${a}"
                          class="${t&&e.active_animation&&"none"!==e.active_animation?`animate-${e.active_animation}`:!t&&e.inactive_animation&&"none"!==e.inactive_animation?`animate-${e.inactive_animation}`:""}"
                          style="color: ${s||"var(--primary-text-color)"}; font-size: ${g}; --mdc-icon-size: ${g};"
                        ></ha-icon>`:""}
                  `}
            <div
              style="display: flex; flex-direction: column; align-items: ${b}; width: 100%; gap: 2px;"
            >
              ${x?J`<div
                    class="icon-label"
                    style="font-size: ${h}; text-align: ${v}; color: ${$};"
                  >
                    ${d}
                  </div>`:""}
              ${k?J`<div
                    class="icon-state"
                    style="font-size: ${h}; text-align: ${v}; color: ${S};"
                  >
                    ${c}
                  </div>`:""}
            </div>
          </div>
        </div>
      `},c=null!==(i=this._iconActiveStates.get(o))&&void 0!==i&&i;return J`${Ne((async()=>{var t,i;let o=!1,a=!1;if(e.active_template_mode&&e.active_template){a=!0;const t=`active_${e.entity}_${e.active_template}`;if(this._templateService){const i=this._templateService.getTemplateResult(t);o=null!=i&&i,this.hass.__uvc_template_strings||(this.hass.__uvc_template_strings={}),this._templateService.hasTemplateSubscription(t)||this._templateService.subscribeToTemplate(e.active_template,t,(()=>this.requestUpdate()))}}else if(e.inactive_template_mode&&e.inactive_template){a=!0;const t=`inactive_${e.entity}_${e.inactive_template}`;if(this._templateService){const i=this._templateService.getTemplateResult(t);o=!(null!=i&&i),this.hass.__uvc_template_strings||(this.hass.__uvc_template_strings={}),this._templateService.hasTemplateSubscription(t)||this._templateService.subscribeToTemplate(e.inactive_template,t,(()=>this.requestUpdate()))}}if(!a){const a=n.state,r=null==a?void 0:a.toLowerCase().trim(),s=null===(t=e.active_state)||void 0===t?void 0:t.toLowerCase().trim(),l=null===(i=e.inactive_state)||void 0===i?void 0:i.toLowerCase().trim();o=!("unknown"===a||"unavailable"===a||(!s||r!==s)&&(l&&r===l||(e.active_state||e.inactive_state?e.active_state&&!e.inactive_state||(e.active_state||!e.inactive_state)&&"on"!==r&&"true"!==r&&!(Number(a)>0):!He.DEFAULT_ACTIVE_STATES.some((e=>e===r))&&(He.DEFAULT_INACTIVE_STATES.some((e=>e===r))||!("on"===r||"true"===r||Number(a)>0&&!isNaN(Number(a)))))))}return o})().then((e=>(this._iconActiveStates.get(o)!==e&&(this._iconActiveStates.set(o,e),this._debouncedIconStateUpdate(o,(()=>{this.requestUpdate()}))),d(e,!1)))),d(c,!0))}`}_debouncedIconStateUpdate(e,t){const i=this._iconStateDebounceTimers.get(e);i&&clearTimeout(i);const n=window.setTimeout((()=>{t(),this._iconStateDebounceTimers.delete(e)}),100);this._iconStateDebounceTimers.set(e,n)}_handleIconClick(e){var t,i;if(!e.entity||!e.on_click_action)return;"vibrate"in navigator&&navigator.vibrate(10);let n,o=!1;if(this.config.icon_rows)for(const i of this.config.icon_rows)if(null===(t=i.icons)||void 0===t?void 0:t.includes(e)){o=!0===i.confirmation_mode,n=i.id;break}const a=n?`${n}_${e.entity}`:e.entity;if(o){const t=Date.now(),i=this._iconsAwaitingConfirmation.get(a)||0;if(0===i||t-i>5e3){this._iconsAwaitingConfirmation.set(a,t),this.requestUpdate();const i=e=>{!e.target.closest(".awaiting-confirmation")&&this._cancelConfirmation(a)};return this._confirmationCancelListeners.set(a,i),setTimeout((()=>{document.addEventListener("click",i)}),50),setTimeout((()=>{this._iconsAwaitingConfirmation.has(a)&&this._cancelConfirmation(a,!1)}),5e3),void this._showToast(`Tap again to ${e.on_click_action} ${this._getFriendlyName(e.entity)}, or tap elsewhere to cancel`,"info")}this._cancelConfirmation(a,!1)}switch(e.on_click_action){case"toggle":const t=e.entity.split(".")[0];this.hass.callService(t,"toggle",{entity_id:e.entity});break;case"more-info":const n=new CustomEvent("hass-more-info",{detail:{entityId:e.entity},bubbles:!0,composed:!0});this.dispatchEvent(n);break;case"navigate":if(e.navigation_path){const t=new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0});window.history.pushState(null,"",e.navigation_path),this.dispatchEvent(t)}break;case"url":e.url?(window.open(e.url,"_blank","noopener,noreferrer"),this._showToast(`Opening URL: ${e.url}`,"info")):(this._showToast("No URL specified for url action","error"),console.warn("[UltraVehicleCard] No URL specified for url action on icon:",e));break;case"show-location-map":case"location-map":this._openLocationMap(e.entity);break;case"call-service":if(e.service)try{const[t,i]=e.service.split(".");let n={};if("string"==typeof e.service_data)try{n=JSON.parse(e.service_data)}catch(t){return this._showToast(`Error parsing service data: ${t.message}`,"error"),void console.error(`[UltraVehicleCard] Invalid service_data JSON: ${e.service_data}`,t)}else e.service_data&&"object"==typeof e.service_data&&(n=e.service_data);this.hass.callService(t,i,n).then((()=>{this._showToast(`Service ${e.service} called successfully`,"success")})).catch((t=>{this._showToast(`Error calling service ${e.service}: ${t.message}`,"error"),console.error("[UltraVehicleCard] Error calling service:",t)}))}catch(e){this._showToast(`Failed to call service: ${e.message}`,"error"),console.error("[UltraVehicleCard] Error in call-service action:",e)}else this._showToast("No service specified for call-service action","error"),console.warn("[UltraVehicleCard] No service specified for call-service action on icon:",e);break;case"perform-action":try{let t=e.action;if("string"==typeof t)try{t=JSON.parse(t)}catch(i){const n=t.split(".");return 2===n.length?void this.hass.callService(n[0],n[1],{entity_id:e.entity}).then((()=>{this._showToast(`Service ${t} called successfully`,"success")})).catch((e=>{this._showToast(`Error calling service ${t}: ${e.message}`,"error"),console.error("[UltraVehicleCard] Error calling service:",e)})):(this._showToast(`Invalid action format: ${t}`,"error"),void console.error("[UltraVehicleCard] Invalid action format:",t))}if(t&&"object"==typeof t&&t.service){const[e,i]=t.service.split("."),n=t.data||t.service_data||t.target||{};if(!i)return this._showToast(`Invalid service format in action: ${t.service}`,"error"),void console.error("[UltraVehicleCard] Invalid service format in action:",t);this.hass.callService(e,i,n).then((()=>{this._showToast("Action completed successfully","success")})).catch((e=>{this._showToast(`Error performing action: ${e.message}`,"error"),console.error("[UltraVehicleCard] Error in perform-action:",e)}))}else this._showToast("Invalid action configuration","error"),console.error("[UltraVehicleCard] Invalid action configuration:",t)}catch(e){this._showToast(`Failed to perform action: ${e.message}`,"error"),console.error("[UltraVehicleCard] Error in perform-action:",e)}break;case"trigger":const o=e.entity;if(o){const e=o.split(".")[0],t=null===(i=this.hass.states[o])||void 0===i?void 0:i.state;let n=null,a=e;switch(e){case"automation":n="trigger";break;case"script":n="turn_on";break;case"button":case"input_button":n="press";break;case"lock":n="locked"===t?"unlock":"lock";break;default:console.warn(`[UltraVehicleCard] Trigger action used on unsupported domain '${e}' for entity ${o}. No action performed.`)}n&&a?this.hass.callService(a,n,{entity_id:o}):n||console.warn(`[UltraVehicleCard] No suitable service found for trigger action on ${o}`)}else console.warn("[UltraVehicleCard] Trigger action called, but no entity defined for icon:",e)}}_showToast(e,t="info"){if("error"!==t&&!0!==this.config.show_action_toasts)return;const i=new CustomEvent("hass-notification",{detail:{message:e,dismissable:!0,duration:"error"===t?0:3e3,type:t},bubbles:!0,composed:!0});this.dispatchEvent(i)}_openLocationMap(e){const t=this.hass.states[e];if(!t)return void this._showMoreInfo(e);const i=t.attributes;let n,o;if(void 0!==i.latitude&&void 0!==i.longitude)n=i.latitude,o=i.longitude;else if(void 0!==i.Location)if(Array.isArray(i.Location)){if(i.Location.length>=2){const e=parseFloat(i.Location[0]),t=parseFloat(i.Location[1]);isNaN(e)||isNaN(t)||(n=e,o=t)}}else if("string"==typeof i.Location){const e=i.Location.split(",").map((e=>parseFloat(e.trim())));2!==e.length||isNaN(e[0])||isNaN(e[1])||(n=e[0],o=e[1])}void 0!==n&&void 0!==o?this._mapPopupData={latitude:n,longitude:o,title:i.friendly_name||e}:this._showMoreInfo(e)}_handleDragStart(e){e.dataTransfer&&(e.dataTransfer.setData("text/plain","dragging-icon"),e.target instanceof HTMLElement&&(e.target.style.opacity="0.5"))}_handleDragEnd(e){e.target instanceof HTMLElement&&(e.target.style.opacity="1")}_hexToRgb(e){const t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;if(t.test(e)){const i=t.exec(e);if(i)return{r:parseInt(i[1]+i[1],16),g:parseInt(i[2]+i[2],16),b:parseInt(i[3]+i[3],16)}}const i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(i)return{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)};const n=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d\.]+)?\)$/i.exec(e);return n?{r:parseInt(n[1],10),g:parseInt(n[2],10),b:parseInt(n[3],10)}:null}_hsToRgb(e,t,i=255){const n=e/360,o=i/255,a=o*(t/100),r=a*(1-Math.abs(6*n%2-1)),s=o-a;let l=0,d=0,c=0;return n<1/6?(l=a,d=r,c=0):n<2/6?(l=r,d=a,c=0):n<.5?(l=0,d=a,c=r):n<4/6?(l=0,d=r,c=a):n<5/6?(l=r,d=0,c=a):(l=a,d=0,c=r),{r:Math.round(255*(l+s)),g:Math.round(255*(d+s)),b:Math.round(255*(c+s))}}_colorTempToRgb(e){const t=1e6/e;let i,n,o;return t<6600?i=255:(i=329.698727446*Math.pow(t/100-60,-.1332047592),i=Math.max(0,Math.min(255,i))),n=t<6600?99.4708025861*Math.log(t/100)-161.1195681661:288.1221695283*Math.pow(t/100-60,-.0755148492),n=Math.max(0,Math.min(255,n)),t>=6600?o=255:t<1900?o=0:(o=138.5177312231*Math.log(t/100-10)-305.0447927307,o=Math.max(0,Math.min(255,o))),{r:Math.round(i),g:Math.round(n),b:Math.round(o)}}_getZoneInfo(e){var t,i,n,o;if(!e||!this.hass.states[e])return null;const a=this.hass.states[e];if(!(null===(t=null==a?void 0:a.attributes)||void 0===t?void 0:t.latitude)||!(null===(i=null==a?void 0:a.attributes)||void 0===i?void 0:i.longitude))return null;const r=Object.keys(this.hass.states).filter((e=>e.startsWith("zone.")));for(const e of r){const t=this.hass.states[e];if((null===(n=null==t?void 0:t.attributes)||void 0===n?void 0:n.latitude)&&(null===(o=null==t?void 0:t.attributes)||void 0===o?void 0:o.longitude)&&Math.abs(t.attributes.latitude-a.attributes.latitude)<1e-4&&Math.abs(t.attributes.longitude-a.attributes.longitude)<1e-4){let i=t.attributes.icon||null;return i||"zone.home"!==e||(i="mdi:home"),{zoneName:t.attributes.friendly_name||t.attributes.name||e.split(".")[1],zoneIcon:i}}}return null}_renderVehicleInfo(e=""){if(this.config.info_rows&&this.config.info_rows.length>0)return this._renderInfoRowsFromConfig(e);const t=!1!==this.config.show_location&&this.config.location_entity&&void 0!==this.hass.states[this.config.location_entity],i=!1!==this.config.show_mileage&&this.config.mileage_entity&&void 0!==this.hass.states[this.config.mileage_entity],n=!1!==this.config.show_car_state&&this.config.car_state_entity&&void 0!==this.hass.states[this.config.car_state_entity],o=!1!==this.config.show_info_icons;if(!t&&!i&&!n)return J``;const a=t?this._formatValue(this.hass.states[this.config.location_entity].state,this.config.location_entity):"",r=t?this._getZoneInfo(this.config.location_entity):null,s=(null==r?void 0:r.zoneIcon)||"mdi:map-marker",l=i?this._formatValue(this.hass.states[this.config.mileage_entity].state,this.config.mileage_entity):"",d=n?this._formatValue(this.hass.states[this.config.car_state_entity].state,this.config.car_state_entity):"",c=this.config.location_text_size?`font-size: ${"number"==typeof this.config.location_text_size?`${this.config.location_text_size}px`:this.config.location_text_size};`:"",p=this.config.mileage_text_size?`font-size: ${"number"==typeof this.config.mileage_text_size?`${this.config.mileage_text_size}px`:this.config.mileage_text_size};`:"",g=this.config.car_state_text_size?`font-size: ${"number"==typeof this.config.car_state_text_size?`${this.config.car_state_text_size}px`:this.config.car_state_text_size};`:"";return J`
      <div class="vehicle-info-container" style="${e}">
        <div class="vehicle-info-top" style="${t&&i?"":"justify-content: center;"}">
          ${t?J`
                <div
                  class="info-item-with-icon"
                  @click=${()=>this._showMoreInfo(this.config.location_entity)}
                >
                  ${o?J`
                        <ha-icon
                          icon="${s}"
                          style="${this.config.location_icon_color?`color: ${this.config.location_icon_color};`:""}"
                        ></ha-icon>
                      `:""}
                  <span
                    style="${this.config.location_text_color?`color: ${this.config.location_text_color};`:""}${c}"
                    >${a}</span
                  >
                </div>
              `:""}
          ${i?J`
                <div
                  class="info-item-with-icon"
                  @click=${()=>this._showMoreInfo(this.config.mileage_entity)}
                >
                  ${o?J`
                        <ha-icon
                          icon="mdi:speedometer"
                          style="${this.config.mileage_icon_color?`color: ${this.config.mileage_icon_color};`:""}"
                        ></ha-icon>
                      `:""}
                  <span
                    style="${this.config.mileage_text_color?`color: ${this.config.mileage_text_color};`:""}${p}"
                    >${l}</span
                  >
                </div>
              `:""}
        </div>

        ${n?J`
              <div
                class="info-item-status"
                @click=${()=>this._showMoreInfo(this.config.car_state_entity)}
                style="cursor: pointer; ${this.config.car_state_text_color?`color: ${this.config.car_state_text_color};`:""}${g}"
              >
                <span>${d}</span>
              </div>
            `:""}
      </div>
    `}_computeImageStyle(e,t){const i=[];return void 0!==e&&(i.push(`width: ${e}%;`),i.push("height: auto;"),i.push("max-width: none;"),i.push("object-fit: contain;")),t&&(0!==t.top&&i.push(`margin-top: ${t.top}px;`),0!==t.right&&i.push(`margin-right: ${t.right}px;`),0!==t.bottom&&i.push(`margin-bottom: ${t.bottom}px;`),0!==t.left&&i.push(`margin-left: ${t.left}px;`)),i.join(" ")}_normalizeState(e){return e?e.toLowerCase().replace(/\s+/g,"_"):""}_renderBarLabels(e){var t,i;const n=!1!==e.show_left&&this._checkBarSideCondition(e.left_condition),o=!1!==e.show_right&&this._checkBarSideCondition(e.right_condition);if(!n&&!o)return J``;let a="";n&&(e.left_template_mode&&e.left_template?a=this._processBarTemplate(e,"left"):e.left_entity&&(a=this._formatValue(null===(t=this.hass.states[e.left_entity])||void 0===t?void 0:t.state,e.left_entity)));let r="";o&&(e.right_template_mode&&e.right_template?r=this._processBarTemplate(e,"right"):e.right_entity&&(r=this._formatValue(null===(i=this.hass.states[e.right_entity])||void 0===i?void 0:i.state,e.right_entity)));const s=e=>{var t,i;return e&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""},l=(e,t=15)=>e?e.length<=t?e:e.substring(0,t)+"...":"",d=e.left_title||(n&&e.left_entity?s(e.left_entity):""),c=e.right_title||(o&&e.right_entity?s(e.right_entity):""),p=e.alignment||"space-between",g=e.left_text_color||"var(--secondary-text-color)",h=e.right_text_color||"var(--secondary-text-color)",m=e.left_title_color||"var(--secondary-text-color)",u=e.right_title_color||"var(--secondary-text-color)",_=e.left_title_size?`${e.left_title_size}px`:"inherit",f=e.left_text_size?`${e.left_text_size}px`:"inherit",v=e.right_title_size?`${e.right_title_size}px`:"inherit",b=e.right_text_size?`${e.right_text_size}px`:"inherit";return J`
      <div class="bar-labels" style="justify-content: ${p};">
        ${n?J`
              <div
                class="bar-label left"
                @click=${()=>e.left_entity&&this._showMoreInfo(e.left_entity)}
              >
                ${d?J`<span
                      class="label-title"
                      style="color: ${m}; font-size: ${_};"
                      >${l(d)}${a?":":""}</span
                    >`:""}
                ${a?J`<span
                      class="label-value"
                      style="color: ${g}; font-size: ${f};"
                      >${a}</span
                    >`:""}
              </div>
            `:""}
        ${o?J`
              <div
                class="bar-label right"
                @click=${()=>e.right_entity&&this._showMoreInfo(e.right_entity)}
              >
                ${c?J`<span
                      class="label-title"
                      style="color: ${u}; font-size: ${v};"
                      >${l(c)}${r?":":""}</span
                    >`:""}
                ${r?J`<span
                      class="label-value"
                      style="color: ${h}; font-size: ${b};"
                      >${r}</span
                    >`:""}
              </div>
            `:""}
      </div>
    `}_processBarTemplate(e,t){var i;if(!this._templateService)return"";const n="left"===t?e.left_entity:e.right_entity,o="left"===t?e.left_template:e.right_template;if(!n||!o)return"";const a=`bar_${t}_${n}_${o}`;return this.hass.__uvc_template_strings&&this.hass.__uvc_template_strings[a]?this.hass.__uvc_template_strings[a]:(this._templateService.hasTemplateSubscription(a)||this._templateService.subscribeToTemplate(o,a,(()=>this.requestUpdate())),(null===(i=this.hass.__uvc_template_strings)||void 0===i?void 0:i[a])||"")}_showMoreInfo(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}firstUpdated(){setTimeout((()=>{var e,t;if(this._migrateBarsToIndividual(),this._forceFullRender(),(null===(t=null===(e=this.config)||void 0===e?void 0:e.bars)||void 0===t?void 0:t.length)>0&&this.config.sections_order){const e=this.config.bars.length,t=this.config.sections_order.filter((e=>e.startsWith("bar_"))).length;e>t&&this._migrateBarsToIndividual()}}),100)}connectedCallback(){super.connectedCallback(),document.addEventListener("highlight-sections",this._handleHighlightSections),document.addEventListener("clear-highlight",this._handleClearHighlight),window.__uvcVersionLogged||(console.info(`%c Ultra Vehicle Card %c ${Ee} `,"color: white; background: #03a9f4; font-weight: 700; padding: 3px 2px 3px 3px; border-radius: 14px 0 0 14px;","color: white; background: #555555; font-weight: 700; padding: 3px 2px 3px 3px; border-radius: 0 14px 14px 0;"),window.__uvcVersionLogged=!0),this.hass&&!this._templateService&&(this._templateService=new Fe(this.hass)),this._setupRefreshInterval(),this.addEventListener("force-gradient-refresh",this._handleForceGradientRefresh),setTimeout((()=>{var e,t;(null===(t=null===(e=this.config)||void 0===e?void 0:e.bars)||void 0===t?void 0:t.some((e=>e.use_gradient)))&&this._forceFullRender(),this.requestUpdate()}),100),setTimeout((()=>{var e,t;(null===(t=null===(e=this.config)||void 0===e?void 0:e.bars)||void 0===t?void 0:t.some((e=>e.use_gradient)))&&this._forceFullRender()}),1e3)}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("highlight-sections",this._handleHighlightSections),document.removeEventListener("clear-highlight",this._handleClearHighlight),this._unsubscribeAllTemplates(),this._templateService&&this._templateService.unsubscribeAllTemplates(),this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=void 0),this._iconsAwaitingConfirmation.clear(),this._confirmationCancelListeners.forEach(((e,t)=>{document.removeEventListener("click",e)})),this._confirmationCancelListeners.clear(),this._iconStateDebounceTimers.forEach((e=>{clearTimeout(e)})),this._iconStateDebounceTimers.clear(),this.removeEventListener("force-gradient-refresh",this._handleForceGradientRefresh)}_handleForceGradientRefresh(e){var t;const i=e;this._lastRenderTime=(null===(t=i.detail)||void 0===t?void 0:t.timestamp)||Date.now(),this._forceFullRender(),[10,25,50,100,500].forEach((e=>{setTimeout((()=>{this._lastRenderTime=Date.now(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("gradient-update-complete",{bubbles:!0,composed:!0,detail:{timestamp:this._lastRenderTime,config:this.config}}))}),e)}))}_setupRefreshInterval(){this._refreshInterval&&clearInterval(this._refreshInterval),this._refreshInterval=window.setInterval((()=>{var e;(null===(e=this.config.bars)||void 0===e?void 0:e.some((e=>{const t=e.animation_entity||e.action_animation_entity,i=e.animation_state||e.action_animation_state,n=e.animation_type||e.action_animation;if(t&&i&&n&&"none"!==n){const e=this.hass.states[t];return e&&e.state===i}return!1})))&&(this._lastRenderTime=Date.now(),this.requestUpdate())}),1e3)}updated(e){var t,i,n,o,a,r,s,l,d;if(super.updated(e),e.has("hass")&&(!this._templateService&&this.hass?this._templateService=new Fe(this.hass):this._templateService&&this.hass&&this._templateService.updateHass(this.hass)),e.has("config")||e.has("hass")){if(this._lastRenderTime=Date.now(),e.has("hass")){const c=e.get("hass");let p=!1;if("entity"===this.config.vehicle_image_type&&this.config.vehicle_image_entity){const e=this.config.vehicle_image_entity,a=null===(t=null==c?void 0:c.states[e])||void 0===t?void 0:t.state,r=null===(i=this.hass.states[e])||void 0===i?void 0:i.state;if(a!==r){if(this._entityStates.set(e,r||""),null===(o=null===(n=this.hass.states[e])||void 0===n?void 0:n.attributes)||void 0===o?void 0:o.entity_picture){let t=this.hass.states[e].attributes.entity_picture;t.startsWith("/")&&(t=`${this.hass.hassUrl?this.hass.hassUrl():""}${t.startsWith("/")?t.substring(1):t}`),this._entityImageUrls.set(e,`${t}${t.includes("?")?"&":"?"}state=${Date.now()}`)}p=!0}}if(this.config.action_entity&&this.config.action_state){const e=this.config.action_entity;if((null===(a=null==c?void 0:c.states[e])||void 0===a?void 0:a.state)!==(null===(r=this.hass.states[e])||void 0===r?void 0:r.state)&&"entity"===this.config.action_image_type&&this.config.action_image_entity){const e=this.config.action_image_entity;if(this._entityStates.set(e,(null===(s=this.hass.states[e])||void 0===s?void 0:s.state)||""),null===(d=null===(l=this.hass.states[e])||void 0===l?void 0:l.attributes)||void 0===d?void 0:d.entity_picture){let t=this.hass.states[e].attributes.entity_picture;t.startsWith("/")&&(t=`${this.hass.hassUrl?this.hass.hassUrl():""}${t.startsWith("/")?t.substring(1):t}`),this._entityImageUrls.set(e,`${t}${t.includes("?")?"&":"?"}state=${Date.now()}`)}p=!0}}p&&this.requestUpdate()}this.shadowRoot&&setTimeout((()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll(".progress-bar-fill");t&&t.length>0&&t.forEach((e=>{if(e instanceof HTMLElement){e.offsetHeight;const t=e.getAttribute("has-gradient"),i=e.getAttribute("data-mode");"true"===t&&("full"===i?(e.style.backgroundSize="100% 100%",e.style.backgroundPosition="0% 0%",e.style.backgroundRepeat="no-repeat"):"value_based"===i&&(e.style.backgroundImage="none"))}}))}),0)}}async _evaluateTemplate(e){try{return!!this._templateService&&await this._templateService.evaluateTemplate(e)}catch(e){return console.error("[UVC] Template evaluation error:",e),e instanceof Error&&!e.message.includes("unavailable")&&this._showToast("Template error - check configuration","error"),!1}}async _subscribeToTemplate(e,t){if(this._templateService)return this._templateService.subscribeToTemplate(e,t,(()=>this.requestUpdate()))}_parseTemplateResult(e,t){return!!this._templateService&&this._templateService.parseTemplateResult(e,t)}async _unsubscribeAllTemplates(){if(this._templateService)return this._templateService.unsubscribeAllTemplates()}_renderMapPopup(){if(!this._mapPopupData)return J``;const{latitude:e,longitude:t,title:i}=this._mapPopupData,n=this._getEntityForCoordinates(e,t);let o="",a="";if(a=this._formatCoordinates(e,t),n&&this.hass.states[n]){const e=this.hass.states[n],t=e.attributes;if(e.state&&!e.state.match(/^\d+\.\d+,\s*-?\d+\.\d+$/)&&e.state.length>5&&!e.state.match(/^(unavailable|unknown|none)$/i))o=e.state;else if(t.formatted_address)o=t.formatted_address;else{const e=[];t.Name&&e.push(String(t.Name)),t.Thoroughfare&&e.push(String(t.Thoroughfare)),t.Locality&&e.push(String(t.Locality)),t.Administrative_Area&&e.push(String(t.Administrative_Area)),t.Postal_Code&&e.push(String(t.Postal_Code)),t.Country&&e.push(String(t.Country)),e.length>0&&(o=e.join(", "))}}o||(o=a);const r=`https://www.google.com/maps?q=${e},${t}&z=15&output=embed`;return J`
      <div class="map-popup-overlay" @click=${this._closeMapPopup}>
        <div class="map-popup-content" @click=${e=>e.stopPropagation()}>
          <div class="map-popup-header">
            <div class="map-popup-title">
              <h3>${i}</h3>
              <div class="map-popup-address">${o}</div>
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
    `}_formatCoordinates(e,t){return`${Math.abs(e).toFixed(6)}° ${e>=0?"N":"S"}, ${Math.abs(t).toFixed(6)}° ${t>=0?"E":"W"}`}_getEntityForCoordinates(e,t){for(const i in this.hass.states){const n=this.hass.states[i].attributes;if(n.latitude===e&&n.longitude===t)return i;if(Array.isArray(n.Location)&&n.Location.length>=2&&Math.abs(parseFloat(n.Location[0])-e)<1e-4&&Math.abs(parseFloat(n.Location[1])-t)<1e-4)return i}return null}_isDarkMode(){if(this.shadowRoot){const e=getComputedStyle(document.documentElement).getPropertyValue("--card-background-color").trim();if(e){const t=this._hexToRgb(e);if(t)return.299*t.r+.587*t.g+.114*t.b<128}}return!1}_closeMapPopup(){this._mapPopupData=null}_shouldRenderSection(e){var t,i,n;if(!this.config||!this.hass)return!0;if(e.startsWith("bar_")){const t=parseInt(e.substring(4));if(isNaN(t)||!this.config.bars||t>=this.config.bars.length)return!1}else if(e.startsWith("icon_row_")){const i=e.substring(9);if(!(null===(t=this.config.icon_rows)||void 0===t?void 0:t.some((e=>e.id===i))))return!1}else if(e.startsWith("info_row_")){const t=e.substring(9);if(!(null===(i=this.config.info_rows)||void 0===i?void 0:i.some((e=>e.id===t))))return!1}else if(e.startsWith("break_")){if(!(null===(n=this.config.section_breaks)||void 0===n?void 0:n.some((t=>t.id===e))))return!1}else{if(!("bars"!==e||this.config.bars&&0!==this.config.bars.length))return!1;if(!("icons"!==e||this.config.icon_rows&&0!==this.config.icon_rows.length))return!1;if("info"===e&&(!this.config.info_rows||0===this.config.info_rows.length)&&!1===this.config.show_location&&!1===this.config.show_mileage&&!1===this.config.show_car_state)return!1}const o=this.config.section_conditions;if(!o)return!0;let a,r=!1;e.startsWith("bar_")&&(a=o[e]),!a&&o[e]?a=o[e]:!a&&e.startsWith("bar_")&&o.bars&&(a=o.bars,r=!0);let s=!0;if(a)if(r&&!a.entity)s=!0;else{const t=a.entity,i=a.state,n=a.type||"show";if(t){const o=this._getEntityState(t);let a=!1;if(i.startsWith("/")&&i.endsWith("/"))try{a=new RegExp(i.slice(1,-1)).test(o||"")}catch(t){console.warn(`[UltraVehicleCard] Invalid regex in condition for ${e}: ${i}`,t),a=!1}else{const e=["on","off","true","false","unavailable","unknown","charging","not_charging","discharging","idle","parked"];a=o&&e.includes(i.toLowerCase())&&e.includes(o.toLowerCase())?o.toLowerCase()===i.toLowerCase():o===i}s="show"===n?a:"hide"!==n||!a}else s="show"===n?!i:"hide"!==n||!!i}return s}_cancelConfirmation(e,t=!0){this._iconsAwaitingConfirmation.delete(e),this._confirmationCancelListeners.has(e)&&(document.removeEventListener("click",this._confirmationCancelListeners.get(e)),this._confirmationCancelListeners.delete(e)),this.requestUpdate(),t&&this._showToast("Confirmation cancelled","info")}_checkBarSideCondition(e){var t;if(!e||"none"===e.type||!e.entity)return!0;const i=null===(t=this.hass.states[e.entity])||void 0===t?void 0:t.state;if(void 0===i)return!0;const n=String(e.state).toLowerCase(),o=String(i).toLowerCase()===n;return"show"===e.type?o:"hide"!==e.type||!o}_processPercentageTemplate(e){if(!this._templateService||!e)return null;const t=`percentage_${e}`;if(this._templateService.hasTemplateSubscription(t)){const e=this._templateService.getTemplateResult(t);if(void 0!==e){const t=parseFloat(String(e));if(!isNaN(t))return t}}return this._templateService.subscribeToTemplate(e,t,(()=>{this.requestUpdate()})),null}_renderInfoRowsFromConfig(e=""){return this.config.info_rows&&this.config.info_rows.length?J`
      <div class="info-rows-container" style="${e}">
        ${this.config.info_rows.map((e=>this._renderSingleInfoRow(e)))}
      </div>
    `:J``}_renderSingleInfoRow(e){if(!e.info_entities||0===e.info_entities.length)return J``;const t=e.width||"100",i=e.alignment||"center",n=e.spacing||"medium",o=e.vertical_alignment||"center",a=!0===e.allow_wrap,r=e.columns||0;let s=`width: ${t}%; gap: ${{none:"0",small:"8px",medium:"16px",large:"24px"}[n]||"16px"}; justify-content: ${i}; align-items: ${o};`;s+=r>0?`display: grid; grid-template-columns: repeat(${r}, minmax(0, 1fr));`:`display: flex; flex-wrap: ${a?"wrap":"nowrap"};`;const l=!1!==e.show_row_header&&e.row_header,d=e.row_header_size?`font-size: ${e.row_header_size}px;`:"",c=e.row_header_color?`color: ${e.row_header_color};`:"";return J`
      ${l?J`
            <div class="section-title" style="${d} ${c}">${e.row_header}</div>
          `:""}
      <div class="info-row-item" style="${s}">
        ${e.info_entities.map((e=>this._renderSingleInfoEntity(e,a)))}
      </div>
    `}_renderSingleInfoEntity(e,t=!1){var i;if(!e.entity||!this.hass.states[e.entity])return J``;const n=this.hass.states[e.entity],o=!1!==e.show_icon,a=!1!==e.show_name;let r="";if(e.template_mode&&e.value_template){const t=`info_entity_${e.id}_${e.entity}`,n=(null===(i=this._templateService)||void 0===i||i.hasTemplateSubscription(t),this.hass.__uvc_template_strings&&this.hass.__uvc_template_strings[t]);this._templateService&&this._templateService.subscribeToTemplate(e.value_template,t,(()=>{this.requestUpdate()})),r=n?this.hass.__uvc_template_strings[t]:""}else r=this._formatValue(n.state,e.entity);const s=e.icon_color||"var(--primary-color)",l=e.name_color||"var(--primary-text-color)";let d="var(--primary-text-color)";"primary"===e.text_color?d="var(--primary-color)":"secondary"===e.text_color?d="var(--secondary-text-color)":"accent"===e.text_color?d="var(--accent-color)":"custom"===e.text_color&&e.custom_text_color?d=e.custom_text_color:"string"==typeof e.text_color&&e.text_color.startsWith("#")&&(d=e.text_color);const c=e.icon_size?`${e.icon_size}px`:"24px",p=e.name_size?`${e.name_size}px`:"14px",g=e.text_size?`${e.text_size}px`:"14px";let h="";return h=a&&r?`${e.name||this._getFriendlyName(e.entity)}: ${r}`:a?e.name||this._getFriendlyName(e.entity):r||this._getFriendlyName(e.entity)||"No data",J`
      <div
        class="info-entity-item"
        style="${"\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      padding: 8px;\n      min-width: fit-content;\n      flex: 0 1 auto;\n    "}"
        @click=${()=>this._handleInfoEntityClick(e)}
      >
        ${o&&e.icon?J`
              <ha-icon
                icon="${e.icon}"
                style="color: ${s}; --mdc-icon-size: ${c}; margin-right: 8px; flex-shrink: 0;"
              ></ha-icon>
            `:""}
        <div
          style="
          min-width: 0; 
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1.4;
          word-break: keep-all;
          overflow-wrap: normal;
        "
        >
          ${a&&r?J`
                <span style="font-size: ${p}; color: ${l};">
                  ${e.name||this._getFriendlyName(e.entity)}:
                </span>
                <span style="font-size: ${g}; color: ${d}; margin-left: 4px;">
                  ${r}
                </span>
              `:a?J`
                  <span style="font-size: ${p}; color: ${l};">
                    ${e.name||this._getFriendlyName(e.entity)}
                  </span>
                `:r?J`
                    <span style="font-size: ${g}; color: ${d};">
                      ${r}
                    </span>
                  `:J`
                    <span style="font-size: ${g}; color: ${d};">
                      ${this._getFriendlyName(e.entity)||"No data"}
                    </span>
                  `}
        </div>
      </div>
    `}_handleInfoEntityClick(e){if(e.entity)switch(e.on_click_action){case"more-info":default:this._showMoreInfo(e.entity);break;case"navigate":if(e.navigation_path){const t=new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0});window.history.pushState(null,"",e.navigation_path),this.dispatchEvent(t)}break;case"url":e.url&&window.open(e.url,"_blank","noopener,noreferrer");break;case"call-service":if(e.service)try{const[t,i]=e.service.split(".");let n={};if("string"==typeof e.service_data)try{n=JSON.parse(e.service_data)}catch(t){console.error(`Invalid service_data JSON for entity ${e.entity}:`,t)}else e.service_data&&"object"==typeof e.service_data&&(n=e.service_data);this.hass.callService(t,i,n)}catch(t){console.error(`Error calling service for entity ${e.entity}:`,t)}}}_getDisplaySections(){const e=[...this.config.sections_order||[]],t=this._cleanupSectionsOrder(e),i=[];let n=!1;return t.forEach((e=>{var t,o,a,r;if("bars"===e){const e=(null===(t=this.config.bars)||void 0===t?void 0:t.length)||0;for(let t=0;t<e;t++)i.push(`bar_${t}`)}else if("icons"===e)(this.config.icon_rows||[]).forEach((e=>{e.id&&i.push(`icon_row_${e.id}`)}));else if("info"!==e||n)if(e.startsWith("break_")){const t=e;(null===(o=this.config.section_breaks)||void 0===o?void 0:o.some((e=>e.id===t)))&&i.push(t)}else if(e.startsWith("info_row_")){const t=e.substring(9);(null===(a=this.config.info_rows)||void 0===a?void 0:a.some((e=>e.id===t)))&&(i.push(e),n=!0)}else if(e.startsWith("icon_row_")){const t=e.substring(9);(null===(r=this.config.icon_rows)||void 0===r?void 0:r.some((e=>e.id===t)))&&i.push(e)}else if(e.startsWith("bar_")){const t=parseInt(e.substring(4));!isNaN(t)&&this.config.bars&&t<this.config.bars.length&&i.push(e)}else"info"===e&&n||i.push(e);else{const e=this.config.info_rows||[];e.length>0?(e.forEach((e=>{e.id&&i.push(`info_row_${e.id}`)})),n=!0):i.push("info")}})),i}_cleanupSectionsOrder(e){const t=e.includes("info"),i=e.filter((e=>e.startsWith("info_row_")));return t&&i.length>0?e.filter((e=>"info"!==e)):e}_ensureInfoAndIconRowsInSectionsOrder(){if(!this.config||!this.config.sections_order)return;let e=[...this.config.sections_order],t=!1;if(this.config.icon_rows&&this.config.icon_rows.length>0){const i=e.includes("icons"),n=e.filter((e=>e.startsWith("icon_row_")));if(!i&&0===n.length){if(e.includes("info")){const t=e.indexOf("info");e.splice(t+1,0,"icons")}else if(e.includes("image")){const t=e.indexOf("image");e.splice(t+1,0,"icons")}else e.push("icons");t=!0}}if(this.config.info_rows&&this.config.info_rows.length>0){const i=e.includes("info"),n=e.filter((e=>e.startsWith("info_row_")));if(!i&&0===n.length){if(e.includes("image")){const t=e.indexOf("image");e.splice(t+1,0,"info")}else if(e.includes("title")){const t=e.indexOf("title");e.splice(t+1,0,"info")}else e.unshift("info");t=!0}}t&&(this.config=Object.assign(Object.assign({},this.config),{sections_order:e}))}_isHighlighted(e){return this._highlightedSections.includes(e)}_getHighlightClass(e){return this._isHighlighted(e)?"image"===e?"section-highlighted image-section":"section-highlighted":""}_getImageHighlightStyle(e){if(!e)return"";const t=[];return 0!==e.top&&t.push(`--image-highlight-top: ${-2+e.top}px`),0!==e.left&&t.push(`--image-highlight-left: ${-2+e.left}px`),0!==e.right&&t.push(`--image-highlight-right: ${-2+e.right}px`),0!==e.bottom&&t.push(`--image-highlight-bottom: ${-2+e.bottom}px`),t.length>0?t.join("; ")+";":""}};var Ge,Ke,Je;We.DEFAULT_ACTIVE_STATES=["on","open","unlocked","connected","running","moving","charging","plugged in","enabled","heating","cooling","occupied","engaged","active","cleaning","starting","ready","true","triggered","detected","home","present"],We.DEFAULT_INACTIVE_STATES=["unavailable","unknown","offline","disconnected","not responding","no signal","not ready","fault","idle","inactive","off","standby","sleep","sleeping","paused","closed","locked","parked","not charging","unplugged","disabled","offloading","stopped","false","not_detected","away","empty","vacant"],qe([ve({attribute:!1})],We.prototype,"hass",void 0),qe([ve()],We.prototype,"config",void 0),qe([be()],We.prototype,"_mapPopupData",void 0),qe([be()],We.prototype,"_iconActiveStates",void 0),qe([be()],We.prototype,"_iconsAwaitingConfirmation",void 0),qe([be()],We.prototype,"_templateSubscriptions",void 0),qe([be()],We.prototype,"_templateResults",void 0),qe([be()],We.prototype,"_highlightedSections",void 0),We=He=qe([ue("ultra-vehicle-card")],We),(Je=Ge||(Ge={})).language="language",Je.system="system",Je.comma_decimal="comma_decimal",Je.decimal_comma="decimal_comma",Je.space_comma="space_comma",Je.none="none",function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(Ke||(Ke={})),new Set(["fan","input_boolean","light","switch","group","automation"]);var Ze=function(e,t,i,n){n=n||{},i=null==i?{}:i;var o=new Event(t,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return o.detail=i,e.dispatchEvent(o),o};new Set(["call-service","divider","section","weblink","cast","select"]);var Ye=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Xe=class extends he{static get styles(){return c`
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
    `}_valueChanged(e){const t=e.detail.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}};Ye([ve({attribute:!1})],Xe.prototype,"hass",void 0),Ye([ve()],Xe.prototype,"label",void 0),Ye([ve()],Xe.prototype,"value",void 0),Ye([ve()],Xe.prototype,"entityFilter",void 0),Xe=Ye([ue("ultra-entity-picker")],Xe);var Qe=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let et=class extends he{constructor(){super(...arguments),this.showResetButton=!0}_getDisplayColor(e){var t;let i="string"==typeof e?e:void 0;if("object"==typeof e&&null!==e){const t=Object.keys(e);1===t.length&&"string"==typeof e[t[0]]?(i=e[t[0]],console.warn("ColorPicker received object, extracting value:",i)):(console.warn("ColorPicker received unexpected object:",e),i=void 0)}if(!i)return"#CCCCCC";if(i.startsWith("var(--"))try{const e=document.createElement("div");e.style.display="none",e.style.color=i,document.body.appendChild(e);const t=getComputedStyle(e).color;if(document.body.removeChild(e),t&&t.startsWith("rgb")){const e=t.match(/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/);if(e){const[t,i,n,o]=e;return this._rgbToHex(parseInt(i),parseInt(n),parseInt(o))}}return t||"#CCCCCC"}catch(e){console.warn("Error computing color from variable:",e);const n=null===(t=i.match(/var\(([^,)]+)/))||void 0===t?void 0:t[1];if(n){if(n.includes("--primary-text-color"))return"#FFFFFF";if(n.includes("--secondary-text-color"))return"#A0A0A0";if(n.includes("--primary-color"))return"#03A9F4";if(n.includes("--card-background-color"))return"#1C1C1C"}return"#CCCCCC"}return i}_rgbToHex(e,t,i){return"#"+[e,t,i].map((e=>{const t=e.toString(16);return 1===t.length?"0"+t:t})).join("")}_onColorChanged(e){let t=e.target.value;t||(t="#CCCCCC"),t!==this.value&&(this.value=t,this._fireChangeEvent())}_fireChangeEvent(){this.configValue?this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:{[this.configValue]:this.value}},bubbles:!0,composed:!0})):this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this.value},bubbles:!0,composed:!0}))}_resetColor(){this.configValue&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:{[this.configValue]:void 0}},bubbles:!0,composed:!0}))}render(){const e=this._getDisplayColor(this.value);return J`
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
    `}};Qe([ve()],et.prototype,"value",void 0),Qe([ve()],et.prototype,"label",void 0),Qe([ve()],et.prototype,"configValue",void 0),Qe([ve({type:Boolean})],et.prototype,"showResetButton",void 0),et=Qe([ue("color-picker")],et);const tt=JSON.parse('{"editor":{"tabs":{"settings":"Settings","bars":"Bars","icons":"Icons","customize":"Customize","about":"About","info":"Info"},"info":{"arrange_info_rows":"Arrange Info Rows","title":"Card Information","description":"Configure information rows and entities to display vehicle details like location, mileage, etc. Info items will display on a single line when possible, wrapping to multiple lines in narrow containers.","template_mode":"Template Mode","template_mode_description":"Use a template to format the entity value. Templates allow you to use Home Assistant templating syntax for complex formatting.","template_examples_header":"Common Examples:"},"settings_subtabs":{"general":"General","action_images":"Action Images"},"action_images":{"title":"Action Images Settings","description":"Configure images that will display when specific entity states are met.","add_image":"Add Action Image","no_images":"No action images configured yet. Add one to get started.","entity_settings":"Entity Settings","entity_placeholder":"Select an entity","state_placeholder":"Enter state value","image_settings":"Image Settings","image_type":{"title":"Image Type","description":"Choose how to provide the image","upload":"Upload Image","url":"Image URL","entity":"Entity Image","none":"None"},"delete_confirm":"Are you sure you want to delete this action image?","actions":{"duplicate":"Duplicate","delete":"Delete","expand":"Expand","collapse":"Collapse","drag":"Drag to reorder"},"preview":{"no_entity":"No entity selected","any_state":"Any state","no_image":"No image"},"template_mode":"Template Mode","template_description":"Use a template to determine when this image should be shown. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","template_label":"Display Template","template_help":"Enter a template that returns true/false. This image will be shown when the template evaluates to true. Use Jinja2 syntax: {{ states(...) }}"},"card_settings":{"title":"Card Title","title_alignment":"Title Alignment","title_size":"Title Size","title_description":"Title displayed at the top of the card (optional)","title_alignment_description":"How the card title is aligned","title_size_description":"Size of the card title in pixels","format_entities":"Format Entity Values","format_entities_description":"Enable additional formatting of entity values (adds commas, converts units, etc.)","show_units":"Show Units","show_units_description":"Show units alongside values","help_highlight":"Help Highlight","help_highlight_description":"Show visual highlights when switching between editor tabs to help identify which section you are editing"},"vehicle_info":{"title":"Vehicle Information","location":{"title":"Location Entity","description":"Select the entity that shows the current location of the vehicle.","show":"Show Location","show_description":"Show the vehicle location"},"mileage":{"title":"Mileage Entity","description":"Select the entity that represents the total mileage or odometer of the vehicle.","show":"Show Mileage","show_description":"Show the vehicle mileage"},"car_state":{"title":"Vehicle State Entity","description":"Select the entity that represents the current state of the vehicle (e.g. parked, driving, charging).","show":"Show Vehicle State","show_description":"Show the vehicle state"}},"images":{"common":{"url_description":"Enter the URL of the image","width_description":"Width as a percentage of the card","width_over_100":"Values over 100% can help crop empty space around images"},"vehicle":{"title":"Vehicle Image","description":"Configure the main image displayed for the vehicle.","type":"Vehicle Image Type","width":"Image Width","crop":"Crop Image","entity":"Image Entity","entity_description":"Entity that provides the image URL"}},"crop":{"title":"Image Crop","top":"Top","right":"Right","bottom":"Bottom","left":"Left","pixels":"px","help":"Enter values in pixels (positive or negative) to adjust cropping and padding"},"alignment":{"left":"Left","center":"Center","right":"Right"},"common":{"choose_file":"Choose File","no_file_chosen":"No file chosen","entity":"Entity","width":"Width","width_description":"Width as a percentage of the card","width_over_100":"Values over 100% can help crop empty space around images","none":"None","default":"Default","upload":"Upload","url":"URL","url_description":"URL pointing to the image","reset":"Reset","condition_prompt":"Select \\"Show\\" or \\"Hide\\" to configure entity condition"},"bars":{"title":"Progress Bars","description":"Add customizable progress bars to display various metrics like battery level, range, charging status, and more. Each bar can be individually configured with colors, animations, and labels.","add":"Add Bar","duplicate":"Duplicate Bar","delete":"Delete Bar","expand":"Expand Bar","collapse":"Collapse Bar","no_entity":"No entity selected","bar_prefix":"Bar","template":{"description":"Use a template to format the displayed text, convert units, or display calculated values.","enable":"Enable Template Mode","template_label":"Template","helper_text":"Use Home Assistant templating syntax. Examples:\\n• {{ states(\'sensor.temperature\') | float * 1.8 + 32 }} °F\\n• {{ now().strftime(\\"%b %d, %H:%M\\") }}","examples_header":"Common Examples:","examples":{"temperature":"{{ states(\'sensor.temperature\') | float * 1.8 + 32 }}°F - Convert Celsius to Fahrenheit","datetime":"{{ now().strftime(\\"%b %d, %H:%M\\") }} - Format current date/time","power":"{{ \'Charging at \' + states(\'sensor.ev_power\') + \' kW\' }} - Combine text and sensor value"}},"bar_radius":{"round":"Round","square":"Square","rounded-square":"Rounded Square"},"tabs":{"config":"Configuration","colors":"Colors","animation":"Animation"},"settings":{"header":"Bar Settings","entity":"Bar Percentage Entity","entity_description":"Select an entity that returns a percentage value (0-100). This controls the bar\'s fill level.","limit_entity":"Limit Value Entity (optional)","limit_entity_description":"Optional: Add a vertical indicator line on the bar (e.g. charge limit for EV battery).","limit_color":"Limit Indicator Color","limit_color_description":"Color of the vertical line showing the limit position on the bar. Changes will force a card update.","bar_size":"Bar Size","bar_size_description":"Defines the thickness/height of the progress bar.","bar_radius":"Bar Radius","bar_radius_description":"Shape of the progress bar corners","width":"Bar Width","width_description":"Defines the width of the bar as a percentage of the card width.","alignment":"Label Alignment","alignment_description":"How the left and right labels align with each other.","show_percentage":"Show Percentage","show_percentage_description":"Show the percentage value inside the bar"},"percentage":{"header":"Percentage Text","display_header":"Percentage Text Display","display_description":"Control the visibility and appearance of percentage values shown directly on the bar. These numbers provide a clear visual indicator of the current level.","text_size":"Text Size","calculation_header":"Percentage Calculation","calculation_description":"Configure how the bar\'s percentage fill level is calculated using one of the options below.","type_header":"Percentage Calculation","type_label":"Percentage Type","type_description":"How to calculate the percentage value shown in the bar","type_entity":"Entity (0-100)","type_difference":"Difference (Amount/Total)","amount_entity":"Amount Entity","amount_description":"Entity representing the current amount/value (numerator)","total_entity":"Total Entity","total_description":"Entity representing the total amount/maximum (denominator)"},"left_side":{"header":"Left Side","section_description":"Configure the title and entity value displayed on the left side of the bar. This is useful for showing labels like \'Range\' or \'Battery\' along with their values.","toggle_description":"Show or hide the left side of the bar label","title":"Left Title","title_description":"Optional label displayed on the left side below the bar.","entity":"Left Entity","entity_description":"Entity whose value is displayed on the left side of the bar.","alignment_description":"Controls how this label is aligned under the bar.","title_size":"Title Size","value_size":"Value Size","hidden_message":"Left side is hidden"},"right_side":{"header":"Right Side","section_description":"Configure the title and entity value displayed on the right side of the bar. This is ideal for complementary information like \'Time to Full\' or secondary measurements.","toggle_description":"Show or hide the right side of the bar label","title":"Right Title","title_description":"Optional label displayed on the right side below the bar.","entity":"Right Entity","entity_description":"Entity whose value is displayed on the right side of the bar.","alignment_description":"Controls how this label is aligned under the bar.","title_size":"Title Size","value_size":"Value Size","hidden_message":"Right side is hidden"},"colors":{"header":"Colors","bar_color":"Bar Color","background_color":"Background Color","border_color":"Border Color","limit_indicator_color":"Limit Indicator Color","left_title_color":"Left Title Color","left_value_color":"Left Value Color","right_title_color":"Right Title Color","right_value_color":"Right Value Color","percentage_text_color":"Percentage Text Color","reset_color":"Reset to default color"},"gradient":{"header":"Gradient Mode","description":"Create beautiful color transitions across your progress bars. Ideal for showing battery levels, fuel gauges, or any status indicator requiring visual emphasis.","toggle":"Use Gradient","toggle_description":"Use a gradient for the progress bar instead of a solid color","display_mode":"Gradient Display Mode","display_mode_full":"Full","display_mode_value_based":"Value-Based","display_mode_description":"Full: Show the entire gradient. Value-based: Show the gradient up to the current value.","editor_header":"Gradient Editor","add_stop":"Add Stop","display_mode_cropped":"Cropped"},"animation":{"header":"Action Animation","description":"Add animations to the bar when a specific entity reaches a specific state. Perfect for showing charging states, alarm states, and more.","pro_tip":"Pro Tip: For \'always on\' animations, select an animation type but leave the entity and state fields empty. Try the \'Bubbles\' and \'Fill\' animations!","entity":"Animation Entity","entity_description":"Entity that triggers the animation when it matches the specified state","state":"Entity State","state_description":"When the entity state matches this value, the animation will be triggered","type":"Animation Type","type_description":"The animation effect to display when the entity state matches","select_entity_prompt":"Select an Entity and enter the state you want to trigger the animation (examples: \\"charging\\", \\"on\\", \\"idle\\")","action_entity":"Action Entity","action_state":"Action State","action_description":"This animation will override the regular animation when the specified entity is in a specific state.","action_entity_prompt":"Select an Action Entity and state to define when this animation should override the regular animation"},"bar_sizes":{"thin":"Thin","regular":"Regular","thick":"Thick","thiccc":"Extra Thick"},"bar_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"bar_alignments":{"space-between":"Space Between","flex-start":"Left","center":"Center","flex-end":"Right"},"bar_styles":{"flat":"Flat (Default)","glossy":"Glossy","embossed":"Embossed","inset":"Inset","gradient":"Gradient Overlay","neon":"Neon Glow","outline":"Outline","glass":"Glass","metallic":"Metallic","neumorphic":"Neumorphic"},"animation_types":{"none":"None","charging-lines":"Charging (Diagonal Lines)","pulse":"Pulse","blinking":"Blinking","bouncing":"Bouncing","glow":"Glow","rainbow":"Rainbow","bubbles":"Bubbles","fill":"Fill"},"custom_bar_settings":{"title":"Custom Bar Settings","description":"Define custom configurations for individual bars.","name":"Bar Name","entity":"Entity","unit":"Unit","min":"Min Value","max":"Max Value","thresholds":"Thresholds","severity":"Severity Map"}},"icons":{"title":"Card Icons","description":"Add icon rows to display multiple icons in your card. Each row can be configured with different settings. Note: Icon rows and sections order can be rearranged in the Customize tab.","add_row":"Add Icon Row","duplicate_row":"Duplicate Row","delete_row":"Delete Row","expand_row":"Expand Row","collapse_row":"Collapse Row","no_row":"No icon rows have been added","row_prefix":"Row","icon_prefix":"Icon","add_icon":"Add Icon","duplicate_icon":"Duplicate Icon","delete_icon":"Delete Icon","template_mode":"Template Mode","template_mode_active_description":"Use a template to determine when this icon should be active. Templates allow you to use Home Assistant templating syntax for complex conditions.","template_mode_inactive_description":"Use a template to determine when this icon should be inactive. Templates allow you to use Home Assistant templating syntax for complex conditions.","template_examples_header":"Common Examples:","enable_template_mode":"Enable Template Mode","row_settings":{"header":"Row Settings","width":"Row Width","width_description":"Width of the row as a percentage of card width","alignment":"Row Alignment","alignment_description":"How icons are aligned in this row","spacing":"Icon Spacing","spacing_description":"Amount of space between icons in this row","columns":"Column Count","columns_description":"Number of evenly-sized columns in the row (0 = auto distribution based on content)","confirmation_mode":"Confirmation Mode","confirmation_mode_description":"Require two taps/clicks to activate icons in this row, preventing accidental interactions","layout_info_title":"How Layout Settings Work"},"icon_settings":{"header":"Icon List","entity":"Entity","entity_description":"Entity displayed with this icon","icon":"Icon","icon_description":"Select an icon or enter a custom icon","name":"Name","name_description":"Custom name displayed below the icon (uses entity name by default if not specified)","show_name":"Show Name","show_name_description":"Show the name text below the icon","show_state":"Show State","show_state_description":"Show the entity state below the icon","show_units":"Show Units","show_units_description":"Include units when showing state","text_position":"Text Position","text_position_description":"Where the name and state text is positioned relative to the icon","click_action":"Click Action","service":"Service","service_description":"Service to call (e.g. light.turn_on)","service_data":"Service Data (JSON)","service_data_description":"JSON data sent with the service call","action":"Action (JSON/Service)","action_description":"Advanced action configuration (see documentation)","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to (e.g. /lovelace/dashboard)","url":"URL","url_description":"URL to open in a new tab","automation_entity":"Automation Entity","automation_entity_description":"Automation to trigger when clicked"},"icon_appearance":{"header":"Icon Appearance","icon":"Icon Appearance","general":"General Appearance","active":"Active State","inactive":"Inactive State","state_conditions":"State Conditions","advanced":"Advanced Settings","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Entity Size","text_size_description":"Size of the entity value text in pixels","name_size":"Name Size","name_size_description":"Size of the entity name text in pixels","text_alignment":"Text Alignment","text_alignment_description":"How the text is aligned below the icon","icon_background":"Icon Background","icon_background_description":"Add a background shape behind the icon","icon_background_color":"Icon Background Color","icon_background_color_description":"Color of the background behind the icon","container_background_color":"Container Background Color","container_background_color_description":"Color of the background behind the entire icon container","text_appearance":"Text Appearance","container":{"header":"Container Appearance","vertical_alignment":"Vertical Alignment","vertical_alignment_description":"Align the icon and text vertically within the container.","width":"Container Width","width_description":"Set the width of the icon container relative to the row.","background":"Container Background Shape","background_description":"Choose a background shape for the entire icon container."},"show_when_active":"Show Icon When Active","show_when_active_description":"Only show this icon when it\'s in an active state","template_mode":"Template Mode","template_description":"Use a template to determine active/inactive state. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","active_template":"Active Template","active_template_description":"Template that returns true when the icon should be active.","active_state":"Active state","active_state_description":"State string that represents \\"active\\".","active_state_text":"Custom Active State Text","active_state_text_description":"Overrides the text displayed when the icon is active. Leave empty to use the actual state.","inactive_template":"Inactive Template","inactive_template_description":"Template that returns true when the icon should be inactive.","inactive_state":"Inactive state","inactive_state_description":"State string that represents \\"inactive\\".","inactive_state_text":"Custom Inactive State Text","inactive_state_text_description":"Overrides the text displayed when the icon is inactive. Leave empty to use the actual state.","active_icon":"Active icon","inactive_icon":"Inactive icon","active_icon_color":"Active Icon Color","inactive_icon_color":"Inactive Icon Color","active_name_color":"Active Name Color","inactive_name_color":"Inactive Name Color","active_state_color":"Active State Color","inactive_state_color":"Inactive State Color","show_icon_active":"Show icon when active","show_icon_active_description":"Display the icon when the state is active.","show_icon_inactive":"Show Icon When Inactive","show_icon_inactive_description":"Display the icon when the state is inactive.","custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","action_description":"Action to perform when the icon is clicked.","show_name_active":"Show Name When Active","show_name_active_description":"Display the name when the state is active.","show_name_inactive":"Show Name When Inactive","show_name_inactive_description":"Display the name when the state is inactive.","show_state_active":"Show State When Active","show_state_active_description":"Display the state when the state is active.","show_state_inactive":"Show State When Inactive","show_state_inactive_description":"Display the state when the state is inactive.","use_entity_color_for_icon":"Use Entity Color for Icon","use_entity_color_for_icon_description":"Use this entity\'s color attribute (if available) instead of the configured color","use_entity_color_for_icon_background":"Use Entity Color for Icon Background","use_entity_color_for_icon_background_description":"Use the entity\'s color attribute for the icon background when available","use_entity_color_for_container_background":"Use Entity Color for Container","use_entity_color_for_container_background_description":"Use the entity\'s color attribute for the container background when available"},"tabs":{"general":"General","appearance":"Appearance","states":"States","active_state":"Active State","inactive_state":"Inactive State"},"alignments":{"flex-start":"Left","center":"Center","flex-end":"Right","space-between":"Space Between","space-around":"Space Around","space-evenly":"Space Evenly"},"vertical_alignments":{"flex-start":"Top","center":"Middle","flex-end":"Bottom"},"spacing":{"none":"None","small":"Small","medium":"Medium","large":"Large"},"text_positions":{"below":"Below Icon","beside":"Beside Icon","none":"No Text","top":"On Top","left":"On Left","right":"On Right"},"reset":{"size":"Reset to default size","color":"Reset to default color","all":"Reset to default values"},"click_actions":{"toggle":"Toggle","more-info":"Show More Info","navigate":"Navigate to Path","url":"Open URL","call-service":"Call Service","perform-action":"Perform Action","location-map":"Show Map","assist":"Voice Assistant","trigger":"Trigger","none":"No Action","descriptions":{"toggle":"Toggle the entity\'s state on and off.","more-info":"Opens the more info dialog with additional information about the entity.","navigate":"Navigate to the specified Lovelace path.","url":"Opens the specified URL in a new tab.","call-service":"Call the specified Home Assistant service.","perform-action":"Perform a custom action (see documentation).","location-map":"Show the entity\'s location on a map.","assist":"Open Home Assistant\'s voice assistant.","trigger":"Trigger the entity (automation, script, button, etc).","none":"No action will be performed."}},"backgrounds":{"none":"None","circle":"Circle","square":"Square","rounded_square":"Rounded Square"},"container_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"row_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"}},"customize":{"title":"Customize Layout","description":"Customize layout, order, and add sections to your card","condition_prompt":"Select \\"Show\\" or \\"Hide\\" to configure entity condition","layout":{"title":"Layout Style","description":"Choose between a single or double column layout for the card","header":"Layout Settings"},"layout_types":{"single":"Single Column","double":"Double Column","dashboard":"Top View","half_full":"Half + Full","full_half":"Full + Half"},"sections":{"header":"Card Sections","arrangement_header":"Section Arrangement","arrangement_desc_base":"Drag and drop sections to arrange their order on the card.","arrangement_desc_single_extra":"All sections will be displayed in a single column.","arrangement_desc_double_extra":"In a double column layout, you can place any section in the left or right column.","arrangement_desc_dashboard_extra":"In a Top View layout, you can place sections around your vehicle image."},"section_labels":{"title":"Title","image":"Vehicle Image","info":"Vehicle Information","bars":"All Sensor Bars","icons":"All Icon Rows","section_break":"Section Break"},"actions":{"collapse_margins":"Collapse Margins","expand_margins":"Expand Margins","collapse_options":"Collapse Options","expand_options":"Expand Options","add_break":"Add Section Break","delete_break":"Delete Section Break"},"css":{"header":"Global CSS","description":"Enter custom CSS rules here to override default card styling. These rules will be applied directly to the card. Use with caution.","label":"Custom CSS","input_description":"Enter your custom CSS rules here."},"conditions":{"header":"Conditional Logic","description":"Show or hide this section based on an entity\'s state.","type_label":"Condition Type","entity_label":"Condition Entity","state_label":"Condition State","types":{"none":"None (Always Show)","show":"Show When...","hide":"Hide When..."}},"margins":{"header":"Margins","top":"Top Margin","bottom":"Bottom Margin"},"columns":{"left":"Left Column","right":"Right Column","empty":"Drop sections here"},"column_width":{"title":"Column Width","description":"Configure the width ratio between left and right columns","50_50":"Equal (50/50)","30_70":"Narrow left, wide right (30/70)","70_30":"Wide left, narrow right (70/30)","40_60":"Slightly narrow left (40/60)","60_40":"Slightly wide left (60/40)"},"dashboard":{"top":"Top Section","top_middle":"Top Middle Section","left_middle":"Left Middle Section","middle":"Middle Section","middle_empty":"Vehicle Image Area (Recommended)","right_middle":"Right Middle Section","bottom_middle":"Bottom Middle Section","bottom":"Bottom Section"},"top_view":{"header":"Top View Layout Settings","description":"Configure the spacing and layout settings for top view","side_margin":"Side Margin","side_margin_help":"Margin on the sides of the view in pixels","middle_spacing":"Middle Spacing","middle_spacing_help":"Space between middle columns in pixels","vertical_spacing":"Vertical Spacing","vertical_spacing_help":"Space between rows in pixels"},"break_styles":{"blank":"Blank (No Line)","line":"Solid Line","double_line":"Double Line","dotted":"Dotted Line","double_dotted":"Double Dotted Line","shadow":"Shadow Gradient"},"break_style":{"header":"Break Style","style_label":"Style","thickness_label":"Thickness","width_percent_label":"Width (%)","color_label":"Color"},"half_full":{"row1_col1":"Row 1, Left (50%)","row1_col2":"Row 1, Right (50%)","row2_full":"Row 2, Full Width (100%)"},"full_half":{"row1_full":"Row 1, Full Width (100%)","row2_col1":"Row 2, Left (50%)","row2_col2":"Row 2, Right (50%)"}},"container_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"row_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Developed by","discord_button":"Join Our Discord","docs_button":"Visit Our Documentation","donate_button":"LEAVE A TIP (PAYPAL)","github_button":"Check Out Our Github","support_title":"Support Ultra Vehicle Card","support_description":"Your generous tips fuel the development of amazing features for this card! Without support from users like you, continued innovation wouldn\'t be possible."},"custom_icons":{"title":"Custom Icons","description":"Define custom icons for different states.","icon_entity":"Icon Entity","default_icon":"Default Icon","state_icons":"State Icons","state":"State","icon":"Icon"},"custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","image_settings":{"title":"Image Settings","description":"Configure the main image appearance.","type":"Image Type","width":"Image Width","crop":"Image Crop","entity":"Image Entity","entity_description":"Entity that provides the image URL"},"entity_settings":{"entity":"Entity","entity_description":"Select an entity to display information from","name":"Custom Name","name_description":"Override the entity name (leave blank to use entity\'s friendly name)","show_icon":"Show Icon","icon":"Icon","icon_color":"Icon Color","name_color":"Name Color","entity_color":"Entity Color","text_color":"Text Color","show_name":"Show Name","show_name_description":"Display the entity name before the value","template_mode":"Template Mode","template_mode_description":"Use a template to format the entity value","value_template":"Value Template","template_header":"Value Template","template_examples_header":"Common Examples:","template_basic":"Basic value","template_units":"With units","template_round":"Round to 1 decimal"}}');var it=o.t(tt,2);const nt=JSON.parse('{"editor":{"tabs":{"settings":"Einstellungen","bars":"Balken","icons":"Symbole","customize":"Anpassen","about":"Über","info":"Info"},"settings_subtabs":{"general":"Allgemein","action_images":"Aktionsbilder"},"action_images":{"title":"Aktionsbilder-Einstellungen","description":"Konfigurieren Sie Bilder, die angezeigt werden, wenn bestimmte Entitätszustände erfüllt sind.","add_image":"Aktionsbild hinzufügen","no_images":"Noch keine Aktionsbilder konfiguriert. Fügen Sie eines hinzu, um zu beginnen.","entity_settings":"Entitätseinstellungen","entity_placeholder":"Entität auswählen","state_placeholder":"Zustandswert eingeben","image_settings":"Bildeinstellungen","image_type":{"title":"Bildtyp","description":"Wählen Sie, wie das Bild bereitgestellt wird","upload":"Bild hochladen","url":"Bild-URL","entity":"Entitätsbild","none":"Keins"},"delete_confirm":"Sind Sie sicher, dass Sie dieses Aktionsbild löschen möchten?","actions":{"duplicate":"Duplizieren","delete":"Löschen","expand":"Erweitern","collapse":"Einklappen","drag":"Zum Neuordnen ziehen"},"preview":{"no_entity":"Keine Entität ausgewählt","any_state":"Beliebiger Zustand","no_image":"Kein Bild"},"template_mode":"Template Mode","template_description":"Use a template to determine when this image should be shown. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","template_label":"Vorlage anzeigen","template_help":"Enter a template that returns true/false. This image will be shown when the template evaluates to true. Use Jinja2 syntax: {{ states(...) }}"},"card_settings":{"title":"Kartentitel","title_alignment":"Titelausrichtung","title_size":"Titelgröße","title_description":"Titel, der oben auf der Karte angezeigt wird (optional)","title_alignment_description":"Wie der Kartentitel ausgerichtet wird","title_size_description":"Größe des Kartentitels in Pixeln","format_entities":"Entitätswerte formatieren","format_entities_description":"Aktiviert zusätzliche Formatierung von Entitätswerten (fügt Kommas hinzu, konvertiert Einheiten, etc.)","show_units":"Einheiten anzeigen","show_units_description":"Einheiten neben den Werten anzeigen","help_highlight":"Helfen Sie hervor","help_highlight_description":"Zeigen Sie visuelle Highlights beim Umschalten zwischen den Registerkarten Editors, um zu identifizieren, welcher Abschnitt Sie bearbeiten"},"vehicle_info":{"title":"Fahrzeuginformationen","location":{"title":"Standort-Entität","description":"Wählen Sie die Entität, die den aktuellen Standort des Fahrzeugs anzeigt.","show":"Standort anzeigen","show_description":"Fahrzeugstandort anzeigen"},"mileage":{"title":"Kilometerstand-Entität","description":"Wählen Sie die Entität, die den Gesamtkilometerstand oder Kilometerzähler des Fahrzeugs darstellt.","show":"Kilometerstand anzeigen","show_description":"Fahrzeugkilometerstand anzeigen"},"car_state":{"title":"Fahrzeugzustand-Entität","description":"Wählen Sie die Entität, die den aktuellen Zustand des Fahrzeugs darstellt (z.B. geparkt, fahren, laden).","show":"Fahrzeugzustand anzeigen","show_description":"Fahrzeugzustand anzeigen"}},"images":{"common":{"url_description":"Geben Sie die URL des Bildes ein","width_description":"Breite als Prozentsatz der Karte","width_over_100":"Werte über 100% können dazu beitragen, den leeren Raum um Bilder zu ergreifen"},"vehicle":{"title":"Fahrzeugbild","description":"Konfigurieren Sie das Hauptbild, das für das Fahrzeug angezeigt wird.","type":"Fahrzeugbildtyp","width":"Bildbreite","crop":"Bild zuschneiden","entity":"Bild-Entität","entity_description":"Entität, die die Bild-URL bereitstellt"}},"crop":{"title":"Bild zuschneiden","top":"Oben","right":"Rechts","bottom":"Unten","left":"Links","pixels":"px","help":"Geben Sie Werte in Pixeln (positiv oder negativ) ein, um das Zuschneiden und den Abstand anzupassen"},"alignment":{"left":"Links","center":"Mitte","right":"Rechts"},"common":{"choose_file":"Datei auswählen","no_file_chosen":"Keine Datei ausgewählt","entity":"Entität","width":"Breite","width_description":"Breite als Prozentsatz der Karte","width_over_100":"Werte über 100% können dazu beitragen, den leeren Raum um Bilder zu ergreifen","none":"Keine","default":"Standard","upload":"Hochladen","url":"URL","url_description":"URL, die auf das Bild verweist","reset":"Zurücksetzen","condition_prompt":"Wählen Sie \\"anzeigen\\" oder \\"ausblenden\\", um die Entitätsbedingung zu konfigurieren"},"bars":{"title":"Prozentbalken","description":"Fügen Sie Prozentbalken hinzu, um Werte wie Kraftstoffstand, Batterieladung oder Reichweite anzuzeigen. Jeder Balken kann einen Prozentwert mit optionalen Beschriftungen links und rechts anzeigen.","add":"Neuen Balken hinzufügen","duplicate":"Balken duplizieren","delete":"Balken löschen","expand":"Balken erweitern","collapse":"Balken einklappen","bar_prefix":"Balken","no_entity":"Keine Entität ausgewählt","bar_radius":{"round":"Rund","square":"Quadratisch","rounded-square":"Abgerundetes Quadrat"},"tabs":{"config":"Konfiguration","colors":"Farben","animation":"Animation"},"settings":{"header":"Balkeneinstellungen","entity":"Balken-Prozent-Entität","entity_description":"Wählen Sie eine Entität, die einen Prozentwert (0-100) zurückgibt. Dies steuert den Füllstand des Balkens.","limit_entity":"Grenzwert-Entität (optional)","limit_entity_description":"Optional: Fügen Sie eine vertikale Indikatorlinie auf dem Balken hinzu (z.B. Ladelimit für EV-Batterie).","limit_color":"Grenzindikator-Farbe","limit_color_description":"Farbe der vertikalen Linie, die die Grenzposition auf dem Balken anzeigt. Änderungen erzwingen ein Karten-Update.","bar_size":"Balkengröße","bar_size_description":"Definiert die Dicke/Höhe des Fortschrittsbalkens.","bar_radius":"Balkenradius","bar_radius_description":"Form der Ecken des Fortschrittsbalkens","width":"Balkenbreite","width_description":"Definiert die Breite des Balkens als Prozentsatz der Kartenbreite.","alignment":"Beschriftungsausrichtung","alignment_description":"Wie die linken und rechten Beschriftungen zueinander ausgerichtet sind.","show_percentage":"Prozentsatz anzeigen","show_percentage_description":"Zeigt den Prozentwert innerhalb des Balkens an"},"percentage":{"header":"Prozenttext","display_header":"Prozenttext-Anzeige","display_description":"Steuern Sie die Sichtbarkeit und das Erscheinungsbild von Prozentwerten, die direkt auf dem Balken angezeigt werden. Diese Zahlen bieten einen klaren visuellen Indikator für den aktuellen Stand.","text_size":"Textgröße","calculation_header":"Prozentberechnung","calculation_description":"Konfigurieren Sie, wie der Prozentfüllstand des Balkens mit einer der folgenden Optionen berechnet wird.","type_header":"Prozentberechnung","type_label":"Prozenttyp","type_description":"Wie der im Balken angezeigte Prozentwert berechnet wird","type_entity":"Entität (0-100)","type_difference":"Differenz (Menge/Gesamt)","amount_entity":"Mengen-Entität","amount_description":"Entität, die die aktuelle Menge/den aktuellen Wert darstellt (Zähler)","total_entity":"Gesamt-Entität","total_description":"Entität, die die Gesamtmenge/das Maximum darstellt (Nenner)"},"left_side":{"header":"Linke Seite","section_description":"Konfigurieren Sie den Titel und den Entitätswert, der auf der linken Seite des Balkens angezeigt wird. Dies ist nützlich, um Beschriftungen wie \'Reichweite\' oder \'Batterie\' zusammen mit ihren Werten anzuzeigen.","toggle_description":"Linke Seite der Balkenbeschriftung ein- oder ausblenden","title":"Linker Titel","title_description":"Optionale Beschriftung, die auf der linken Seite unter dem Balken angezeigt wird.","entity":"Linke Entität","entity_description":"Entität, deren Wert auf der linken Seite des Balkens angezeigt wird.","alignment_description":"Steuert, wie diese Beschriftung unter dem Balken ausgerichtet ist.","title_size":"Titelgröße","value_size":"Wertgröße","hidden_message":"Linke Seite ist ausgeblendet"},"right_side":{"header":"Rechte Seite","section_description":"Konfigurieren Sie den Titel und den Entitätswert, der auf der rechten Seite des Balkens angezeigt wird. Dies ist ideal für ergänzende Informationen wie \'Zeit bis voll\' oder sekundäre Messungen.","toggle_description":"Rechte Seite der Balkenbeschriftung ein- oder ausblenden","title":"Rechter Titel","title_description":"Optionale Beschriftung, die auf der rechten Seite unter dem Balken angezeigt wird.","entity":"Rechte Entität","entity_description":"Entität, deren Wert auf der rechten Seite des Balkens angezeigt wird.","alignment_description":"Steuert, wie diese Beschriftung unter dem Balken ausgerichtet ist.","title_size":"Titelgröße","value_size":"Wertgröße","hidden_message":"Rechte Seite ist ausgeblendet"},"colors":{"header":"Farben","bar_color":"Balkenfarbe","background_color":"Hintergrundfarbe","border_color":"Rahmenfarbe","limit_indicator_color":"Grenzindikator-Farbe","left_title_color":"Linke Titelfarbe","left_value_color":"Linke Wertfarbe","right_title_color":"Rechte Titelfarbe","right_value_color":"Rechte Wertfarbe","percentage_text_color":"Prozenttext-Farbe","reset_color":"Auf Standardfarbe zurücksetzen"},"gradient":{"header":"Verlaufsmodus","description":"Erstellen Sie schöne Farbübergänge über Ihre Fortschrittsbalken. Ideal, um Batteriestände, Kraftstoffanzeigen oder andere Statusindikatoren anzuzeigen, die visuelle Betonung erfordern.","toggle":"Verlauf verwenden","toggle_description":"Verwenden Sie einen Farbverlauf für den Fortschrittsbalken anstelle einer Vollfarbe","display_mode":"Verlaufsanzeigemodus","display_mode_full":"Vollständig","display_mode_value_based":"Wertbasiert","display_mode_description":"Vollständig: Zeigt den gesamten Verlauf an. Wertbasiert: Zeigt den Verlauf bis zum aktuellen Wert an.","editor_header":"Verlaufseditor","add_stop":"Haltepunkt hinzufügen","display_mode_cropped":"Beschnitten"},"animation":{"header":"Aktionsanimation","description":"Fügen Sie dem Balken Animationen hinzu, wenn eine bestimmte Entität einen bestimmten Zustand erreicht. Perfekt, um Ladezustände, Alarmzustände und mehr anzuzeigen.","pro_tip":"Profi-Tipp: Für \'ständig eingeschaltete\' Animationen wählen Sie einen Animationstyp, lassen aber die Entitäts- und Zustandsfelder leer. Probieren Sie die Animationen \'Blasen\' und \'Füllen\' aus!","entity":"Animations-Entität","entity_description":"Entität, die die Animation auslöst, wenn sie mit dem angegebenen Zustand übereinstimmt","state":"Entitätszustand","state_description":"Wenn der Entitätszustand mit diesem Wert übereinstimmt, wird die Animation ausgelöst","type":"Animationstyp","type_description":"Der Animationseffekt, der angezeigt wird, wenn der Entitätszustand übereinstimmt","select_entity_prompt":"Wählen Sie eine Entität und geben Sie den Zustand ein, den Sie für die Animation auslösen möchten (Beispiele: \\"charging\\", \\"on\\", \\"idle\\")","action_entity":"Aktionsentität","action_state":"Aktionszustand","action_description":"Diese Animation überschreibt die reguläre Animation, wenn sich die angegebene Entität in einem bestimmten Zustand befindet.","action_entity_prompt":"Wählen Sie eine Aktionsentität und einen Status aus, um zu definieren, wann diese Animation die reguläre Animation überschreiben soll"},"bar_sizes":{"thin":"Dünn","regular":"Normal","thick":"Dick","thiccc":"Extra Dick"},"bar_widths":{"25":"25% Breite","50":"50% Breite","75":"75% Breite","100":"100% (Volle Breite)"},"bar_alignments":{"space-between":"Abstand dazwischen","flex-start":"Links","center":"Mitte","flex-end":"Rechts"},"bar_styles":{"flat":"Flach (Standard)","glossy":"Glänzend","embossed":"Geprägt","inset":"Eingesetzt","gradient":"Verlaufsüberlagerung","neon":"Neon-Glühen","outline":"Umriss","glass":"Glas","metallic":"Metallisch","neumorphic":"Neumorphisch"},"animation_types":{"none":"Keine","charging-lines":"Laden (Diagonale Linien)","pulse":"Pulsieren","blinking":"Blinken","bouncing":"Hüpfen","glow":"Glühen","rainbow":"Regenbogen","bubbles":"Blasen","fill":"Füllen"},"custom_bar_settings":{"title":"Benutzerdefinierte Balkeneinstellungen","description":"Definieren Sie benutzerdefinierte Konfigurationen für einzelne Balken.","name":"Balkenname","entity":"Entität","unit":"Einheit","min":"Minimalwert","max":"Maximalwert","thresholds":"Schwellenwerte","severity":"Schweregradkarte"},"template":{"description":"Verwenden Sie eine Vorlage, um den angezeigten Text zu formatieren, Einheiten zu konvertieren oder berechnete Werte anzuzeigen.","enable":"Aktivieren Sie den Vorlagenmodus","template_label":"Vorlage","helper_text":"Use Home Assistant templating syntax. Examples:\\n• {{ states(\'sensor.temperature\') | float * 1.8 + 32 }} °F\\n• {{ now().strftime(\\"%b %d, %H:%M\\") }}","examples_header":"Häufige Beispiele:","examples":{"temperature":"{{ states(\'sensor.temperature\') | float * 1.8 + 32 }}°F - Convert Celsius to Fahrenheit","datetime":"{{ now().strftime(\\"%b %d, %H:%M\\") }} - Format current date/time","power":"{{ \'Charging at \' + states(\'sensor.ev_power\') + \' kW\' }} - Combine text and sensor value"}}},"icons":{"title":"Kartensymbole","description":"Fügen Sie Symbolzeilen hinzu, um mehrere Symbole auf Ihrer Karte anzuzeigen. Jede Zeile kann mit verschiedenen Einstellungen konfiguriert werden. Hinweis: Symbolzeilen und Abschnittsreihenfolge können auf der Registerkarte \'Anpassen\' neu angeordnet werden.","add_row":"Symbolzeile hinzufügen","duplicate_row":"Zeile duplizieren","delete_row":"Zeile löschen","expand_row":"Zeile erweitern","collapse_row":"Zeile einklappen","no_row":"Es wurden keine Symbolzeilen hinzugefügt","row_prefix":"Zeile","icon_prefix":"Symbol","row_settings":{"header":"Zeileneinstellungen","width":"Zeilenbreite","width_description":"Breite der Zeile als Prozentsatz der Kartenbreite","alignment":"Zeilenausrichtung","alignment_description":"Wie Symbole in dieser Zeile ausgerichtet sind","spacing":"Symbolabstand","spacing_description":"Abstand zwischen Symbolen in dieser Zeile","columns":"Spaltenanzahl","columns_description":"Anzahl der gleichmäßig großen Spalten in der Zeile (0 = automatische Verteilung basierend auf dem Inhalt)","confirmation_mode":"Bestätigungsmodus","confirmation_mode_description":"Erfordert zwei Tipps/Klicks, um Symbole in dieser Zeile zu aktivieren, um versehentliche Interaktionen zu verhindern","layout_info_title":"Wie Layouteinstellungen funktionieren"},"add_icon":"Symbol hinzufügen","duplicate_icon":"Symbol duplizieren","delete_icon":"Symbol löschen","expand_icon":"Symbol erweitern","collapse_icon":"Symbol einklappen","no_icon":"Kein Symbol ausgewählt","icon_settings":{"header":"Symbolliste","entity":"Entität","entity_description":"Mit diesem Symbol angezeigte Entität","icon":"Symbol","icon_description":"Wählen Sie ein Symbol oder geben Sie ein benutzerdefiniertes Symbol ein","name":"Name","name_description":"Benutzerdefinierter Name, der unter dem Symbol angezeigt wird (verwendet standardmäßig den Entitätsnamen, wenn nicht angegeben)","show_name":"Name anzeigen","show_name_description":"Zeigt den Namenstext unter dem Symbol an","show_state":"Zustand anzeigen","show_state_description":"Zeigt den Entitätszustand unter dem Symbol an","show_units":"Einheiten anzeigen","show_units_description":"Einheiten bei der Anzeige des Zustands einbeziehen","text_position":"Textposition","text_position_description":"Wo der Namens- und Zustandstext relativ zum Symbol positioniert ist","click_action":"Klickaktion","service":"Dienst","service_description":"Aufzurufender Dienst (z.B. light.turn_on)","service_data":"Dienstdaten (JSON)","service_data_description":"JSON-Daten, die mit dem Dienstaufruf gesendet werden","action":"Aktion (JSON/Dienst)","action_description":"Erweiterte Aktionskonfiguration (siehe Dokumentation)","navigation_path":"Navigationspfad","navigation_path_description":"Pfad, zu dem navigiert werden soll (z.B. /lovelace/dashboard)","url":"URL","url_description":"URL, die in einem neuen Tab geöffnet wird","automation_entity":"Automatisierungs-Entität","automation_entity_description":"Automatisierung, die beim Klicken ausgelöst wird"},"icon_appearance":{"header":"Symbol-Erscheinungsbild","icon":"Symbol-Erscheinungsbild","general":"Allgemeines Erscheinungsbild","active":"Aktiver Zustand","inactive":"Inaktiver Zustand","state_conditions":"Zustandsbedingungen","advanced":"Erweiterte Einstellungen","icon_size":"Symbolgröße","icon_size_description":"Größe des Symbols in Pixeln","text_size":"Textgröße","text_size_description":"Größe des Namens-/Zustandstextes in Pixeln","text_alignment":"Textausrichtung","text_alignment_description":"Wie der Text unter dem Symbol ausgerichtet ist","icon_background":"Symbolhintergrund","icon_background_description":"Fügen Sie eine Hintergrundform hinter dem Symbol hinzu","icon_background_color":"Symbolhintergrundfarbe","icon_background_color_description":"Farbe des Hintergrunds hinter dem Symbol","container_background_color":"Container-Hintergrundfarbe","container_background_color_description":"Farbe des Hintergrunds hinter dem gesamten Symbolcontainer","text_appearance":"Texterscheinungsbild","container":{"header":"Container-Erscheinungsbild","vertical_alignment":"Vertikale Ausrichtung","vertical_alignment_description":"Richten Sie das Symbol und den Text vertikal innerhalb des Containers aus.","width":"Container-Breite","width_description":"Legen Sie die Breite des Symbolcontainers relativ zur Zeile fest.","background":"Container-Hintergrundform","background_description":"Wählen Sie eine Hintergrundform für den gesamten Symbolcontainer."},"show_when_active":"Symbol anzeigen, wenn aktiv","show_when_active_description":"Dieses Symbol nur anzeigen, wenn es sich in einem aktiven Zustand befindet","template_mode":"Vorlagenmodus","template_description":"Use a template to determine active/inactive state. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","active_template":"Aktive Vorlage","active_template_description":"Vorlage, die true zurückgibt, wenn das Symbol aktiv sein soll.","active_state":"Aktiver Zustand","active_state_description":"Zustandszeichenfolge, die \\"aktiv\\" darstellt.","active_state_text":"Benutzerdefinierter aktiver Zustandstext","active_state_text_description":"Überschreibt den Text, der angezeigt wird, wenn das Symbol aktiv ist. Leer lassen, um den tatsächlichen Zustand zu verwenden.","inactive_template":"Inaktive Vorlage","inactive_template_description":"Vorlage, die true zurückgibt, wenn das Symbol inaktiv sein soll.","inactive_state":"Inaktiver Zustand","inactive_state_description":"Zustandszeichenfolge, die \\"inaktiv\\" darstellt.","inactive_state_text":"Benutzerdefinierter inaktiver Zustandstext","inactive_state_text_description":"Überschreibt den Text, der angezeigt wird, wenn das Symbol inaktiv ist. Leer lassen, um den tatsächlichen Zustand zu verwenden.","active_icon":"Aktives Symbol","inactive_icon":"Inaktives Symbol","active_icon_color":"Aktive Symbolfarbe","inactive_icon_color":"Inaktive Symbolfarbe","active_name_color":"Aktive Namensfarbe","inactive_name_color":"Inaktive Namensfarbe","active_state_color":"Aktive Zustandsfarbe","inactive_state_color":"Inaktive Zustandsfarbe","show_icon_active":"Symbol anzeigen, wenn aktiv","show_icon_active_description":"Symbol anzeigen, wenn der Zustand aktiv ist.","show_icon_inactive":"Symbol anzeigen, wenn inaktiv","show_icon_inactive_description":"Symbol anzeigen, wenn der Zustand inaktiv ist.","custom_active_state_text":"Benutzerdefinierter aktiver Zustandstext","custom_inactive_state_text":"Benutzerdefinierter inaktiver Zustandstext","action_description":"Aktion, die ausgeführt wird, wenn auf das Symbol geklickt wird.","show_name_active":"Name anzeigen, wenn aktiv","show_name_active_description":"Name anzeigen, wenn der Zustand aktiv ist.","show_name_inactive":"Name anzeigen, wenn inaktiv","show_name_inactive_description":"Name anzeigen, wenn der Zustand inaktiv ist.","show_state_active":"Zustand anzeigen, wenn aktiv","show_state_active_description":"Zustand anzeigen, wenn der Zustand aktiv ist.","show_state_inactive":"Zustand anzeigen, wenn inaktiv","show_state_inactive_description":"Zustand anzeigen, wenn der Zustand inaktiv ist.","use_entity_color_for_icon":"Verwenden Sie die Entitätsfarbe für Symbol","use_entity_color_for_icon_description":"Use the entity\'s color attribute for the icon when available","use_entity_color_for_icon_background":"Verwenden Sie Entitätsfarbe für Icon -Hintergrund","use_entity_color_for_icon_background_description":"Verwenden Sie das Farbattribut der Entität für den Icon -Hintergrund, sofern verfügbar","use_entity_color_for_container_background":"Verwenden Sie Entität Farbe für den Behälter","use_entity_color_for_container_background_description":"Verwenden Sie das Farbattribut der Entität für den Containerhintergrund, sofern verfügbar","name_size":"Namensgröße","name_size_description":"Größe des Entitätsnamentextes in Pixel"},"tabs":{"general":"Allgemein","appearance":"Erscheinungsbild","states":"Zustände","active_state":"Aktiver Zustand","inactive_state":"Inaktiver Zustand"},"alignments":{"flex-start":"Links","center":"Mitte","flex-end":"Rechts","space-between":"Abstand dazwischen","space-around":"Abstand rundherum","space-evenly":"Gleichmäßiger Abstand"},"vertical_alignments":{"flex-start":"Oben","center":"Mitte","flex-end":"Unten"},"spacing":{"none":"Keiner","small":"Klein","medium":"Mittel","large":"Groß"},"text_positions":{"below":"Unter Symbol","beside":"Neben Symbol","none":"Kein Text","top":"Oben","left":"Links","right":"Rechts"},"reset":{"size":"Auf Standardgröße zurücksetzen","color":"Auf Standardfarbe zurücksetzen","all":"Auf Standardwerte zurücksetzen"},"click_actions":{"toggle":"Umschalten","more-info":"Mehr Infos anzeigen","navigate":"Zu Pfad navigieren","url":"URL öffnen","call-service":"Dienst aufrufen","perform-action":"Aktion ausführen","location-map":"Karte anzeigen","assist":"Sprachassistent","trigger":"Auslösen","none":"Keine Aktion","descriptions":{"toggle":"Schaltet den Zustand der Entität ein und aus.","more-info":"Öffnet den Dialog mit zusätzlichen Informationen über die Entität.","navigate":"Navigiert zum angegebenen Lovelace-Pfad.","url":"Öffnet die angegebene URL in einem neuen Tab.","call-service":"Ruft den angegebenen Home Assistant-Dienst auf.","perform-action":"Führt eine benutzerdefinierte Aktion aus (siehe Dokumentation).","location-map":"Zeigt den Standort der Entität auf einer Karte an.","assist":"Öffnet den Sprachassistenten von Home Assistant.","trigger":"Löst die Entität aus (Automatisierung, Skript, Taste usw.).","none":"Es wird keine Aktion ausgeführt."}},"backgrounds":{"none":"Keine","circle":"Kreis","square":"Quadrat","rounded_square":"Abgerundetes Quadrat"},"container_widths":{"25":"25% Breite","50":"50% Breite","75":"75% Breite","100":"100% (Volle Breite)"},"row_widths":{"25":"25% Breite","50":"50% Breite","75":"75% Breite","100":"100% (Volle Breite)"},"template_mode":"Vorlagenmodus","template_mode_active_description":"Verwenden Sie eine Vorlage, um zu bestimmen, wann dieses Symbol aktiv sein soll. Mit Vorlagen können Sie Home Assistant Templating -Syntax für komplexe Bedingungen verwenden.","template_mode_inactive_description":"Verwenden Sie eine Vorlage, um zu bestimmen, wann dieses Symbol inaktiv sein soll. Mit Vorlagen können Sie Home Assistant Templating -Syntax für komplexe Bedingungen verwenden.","template_examples_header":"Häufige Beispiele:","enable_template_mode":"Aktivieren Sie den Vorlagenmodus"},"customize":{"layout":{"title":"Layout-Stil","description":"Wählen Sie zwischen Ein- oder Zweispaltiger Ansicht für die Karte","header":"Layout-Einstellungen"},"layout_types":{"single":"Einzelspalte","double":"Doppelspalte","dashboard":"Dashboard","half_full":"Halb + voll","full_half":"Voll + halb"},"sections":{"header":"Kartenabschnitte","arrangement_header":"Abschnittsanordnung","arrangement_desc_base":"Ziehen Sie die Abschnitte, um ihre Reihenfolge auf der Karte zu organisieren.","arrangement_desc_single_extra":"Alle Abschnitte werden in einer einzelnen Spalte angezeigt.","arrangement_desc_double_extra":"In der Zweispaltigen Ansicht können Sie jeden Abschnitt in der linken oder rechten Spalte platzieren.","arrangement_desc_dashboard_extra":"In der Dashboard-Ansicht können Sie die Abschnitte um das Bild Ihres Fahrzeugs herum platzieren."},"section_labels":{"title":"Titel","image":"Fahrzeugbild","info":"Fahrzeuginformationen","bars":"Alle Sensorbalken","icons":"Alle Symbolzeilen","section_break":"Abschnitt Break"},"actions":{"collapse_margins":"Ränder reduzieren","expand_margins":"Ränder erweitern","collapse_options":"Optionen reduzieren","expand_options":"Optionen erweitern","add_break":"Abschnittspause hinzufügen","delete_break":"Abschnittsbruch löschen"},"css":{"header":"Globales CSS","description":"Geben Sie hier benutzerdefinierte CSS-Regeln ein, um den Standardstil der Karte zu überschreiben. Diese Regeln werden direkt auf die Karte angewendet. Mit Vorsicht verwenden.","label":"Benutzerdefiniertes CSS","input_description":"Geben Sie hier Ihre benutzerdefinierten CSS-Regeln ein."},"conditions":{"header":"Bedingte Logik","description":"Zeigen oder verbergen Sie diesen Abschnitt basierend auf dem Zustand einer Entität.","type_label":"Bedingungstyp","entity_label":"Bedingungsentität","state_label":"Bedingungszustand","types":{"none":"Keine (Immer anzeigen)","show":"Anzeigen wenn...","hide":"Verbergen wenn..."}},"margins":{"header":"Ränder","top":"Oberer Rand","bottom":"Unterer Rand"},"columns":{"left":"Linke Spalte","right":"Rechte Spalte","empty":"Abschnitte hier ablegen"},"column_width":{"title":"Spaltenbreite","description":"Konfigurieren Sie das Breitenverhältnis zwischen linker und rechter Spalte","50_50":"Gleich (50/50)","30_70":"Schmal links, breit rechts (30/70)","70_30":"Breit links, schmal rechts (70/30)","40_60":"Etwas schmaler links (40/60)","60_40":"Etwas breiter links (60/40)"},"dashboard":{"top":"Oberer Bereich","top_middle":"Oberer-mittlerer Bereich","left_middle":"Linker-mittlerer Bereich","middle":"Mittlerer Bereich","middle_empty":"Fahrzeugbildbereich (Empfohlen)","right_middle":"Rechter-mittlerer Bereich","bottom_middle":"Unterer-mittlerer Bereich","bottom":"Unterer Bereich"},"top_view":{"header":"Dashboard-Einstellungen","description":"Konfigurieren Sie die Abstands- und Layout-Einstellungen für die Dashboard-Ansicht","side_margin":"Seitenränder","side_margin_help":"Ränder an den Seiten der Ansicht in Pixeln","middle_spacing":"Mittlerer Abstand","middle_spacing_help":"Abstand zwischen mittleren Spalten in Pixeln","vertical_spacing":"Vertikaler Abstand","vertical_spacing_help":"Abstand zwischen Zeilen in Pixeln"},"break_styles":{"blank":"Leer (keine Zeile)","line":"Durchgezogene Linie","double_line":"Doppelzeile","dotted":"Gepunktete Linie","double_dotted":"Doppelte gepunktete Linie","shadow":"Schattengradient"},"break_style":{"header":"Breakstil","style_label":"Stil","thickness_label":"Dicke","width_percent_label":"Breite (%)","color_label":"Farbe"},"half_full":{"row1":"Row 1 (Split)","row1_col1":"Row 1 - Left Column","row1_col2":"Row 1 - Right Column","row2":"Row 2 (Full Width)","row2_full":"Reihe 2, Vollbreite (100%)"},"full_half":{"row1":"Row 1 (Full Width)","row2":"Row 2 (Split)","row2_col1":"Row 2 - Left Column","row2_col2":"Row 2 - Right Column","row1_full":"Reihe 1, Vollbreite (100%)"},"title":"Layout anpassen","description":"Passen Sie Layout an, bestellen Sie und fügen Sie Abschnitte Ihrer Karte hinzu","condition_prompt":"Wählen Sie \\"anzeigen\\" oder \\"ausblenden\\", um die Entitätsbedingung zu konfigurieren"},"container_widths":{"25":"25% Breite","50":"50% Breite","75":"75% Breite","100":"100% (Volle Breite)"},"row_widths":{"25":"25% Breite","50":"50% Breite","75":"75% Breite","100":"100% (Volle Breite)"},"info":{"arrange_info_rows":"Anordnen von Inforeihen","title":"Karteninformationen","description":"Konfigurieren Sie Informationen und Entitäten, um Fahrzeugdetails wie Speicherort, Kilometerleistung usw. anzuzeigen. Informationen werden nach Möglichkeit auf einer einzigen Zeile angezeigt, wobei Sie mehrere Zeilen in schmalen Behältern einwickeln.","template_mode":"Vorlagenmodus","template_mode_description":"Verwenden Sie eine Vorlage, um den Entitätswert zu formatieren. Mit Vorlagen können Sie Home Assistant Templating -Syntax für komplexe Formatierung verwenden.","template_examples_header":"Häufige Beispiele:"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Entwickelt von","discord_button":"Unserem Discord beitreten","github_button":"Unser Github besuchen","docs_button":"Unsere Dokumentation lesen","support_title":"Ultra Vehicle Card unterstützen","support_para":"Ihre großzügigen Spenden ermöglichen die Entwicklung fantastischer Funktionen für diese Karte! Ohne die Unterstützung von Nutzern wie Ihnen wäre kontinuierliche Innovation nicht möglich.","donate_button":"SPENDEN (PAYPAL)","support_description":"Ihre großzügigen Tipps befeuern die Entwicklung erstaunlicher Funktionen für diese Karte! Ohne Unterstützung von Benutzern wie Ihnen wäre eine fortgesetzte Innovation nicht möglich."},"custom_icons":{"title":"Benutzerdefinierte Symbole","description":"Definieren Sie benutzerdefinierte Symbole für verschiedene Zustände.","icon_entity":"Symbol-Entität","default_icon":"Standardsymbol","state_icons":"Zustandssymbole","state":"Zustand","icon":"Symbol"},"custom_active_state_text":"Benutzerdefinierter aktiver Zustandstext","custom_inactive_state_text":"Benutzerdefinierter inaktiver Zustandstext","image_settings":{"title":"Bildeinstellungen","description":"Konfigurieren Sie das Erscheinungsbild des Hauptbildes.","type":"Bildtyp","width":"Bildbreite","crop":"Bild zuschneiden","entity":"Bild-Entität","entity_description":"Entität, die die Bild-URL bereitstellt","text_color":"Entity Color","text_color_description":"Color for the entity value","name_color":"Name Color","name_color_description":"Color for the entity name label","icon_color":"Icon Color"},"entity_settings":{"entity":"Juristische Person","entity_description":"Wählen Sie eine Entität aus, aus der Informationen angezeigt werden","name":"Name","name_description":"Überschreiben Sie den Entitätsnamen (lassen Sie leer, um den freundlichen Namen der Entität zu verwenden).","icon":"Symbol","icon_placeholder":"mdi:power-plug","show_icon":"Ikone zeigen","show_name":"Showname","show_name_description":"Zeigen Sie den Entitätsnamen vor dem Wert an","click_action":"Click Action","more_info":"More Info","navigate":"Navigate","url":"URL (External)","url_path":"URL","call_service":"Call Service","none":"None","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to when clicked (e.g., /lovelace/0)","url_description":"URL to open when clicked","service":"Service","service_description":"Service to call (e.g., light.turn_on)","service_data":"Service Data (JSON)","template_mode":"Use Template for Value","template_mode_description":"Verwenden Sie eine Vorlage, um den Entitätswert zu formatieren","value_template":"Wertvorlage","template_header":"Wertvorlage","template_examples_header":"Template Examples","template_basic":"Grundwert","template_units":"Mit Einheiten","template_round":"Rund auf 1 Dezimalheit","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Entity Size","text_size_description":"Size of the entity value text in pixels","name_size":"Name Size","name_size_description":"Size of the entity name text in pixels","icon_color":"Symbolfarbe","name_color":"Nennen Sie Farbe","text_color":"Entity Color","size_settings":"Size Settings","color_settings":"Color Settings","entity_color":"Entität Farbe"}}');var ot=o.t(nt,2);const at=JSON.parse('{"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Desarrollado por","discord_button":"Únete a nuestro Discord","docs_button":"Visita nuestra documentación","donate_button":"DEJAR UNA PROPINA (PAYPAL)","github_button":"Visita nuestro Github","support_title":"Apoya Ultra Vehicle Card","support_description":"¡Tus generosas propinas impulsan el desarrollo de características increíbles para esta tarjeta! Sin el apoyo de usuarios como tú, la innovación continua no sería posible."},"editor":{"tabs":{"settings":"Ajustes","bars":"Barras","icons":"Iconos","customize":"Personalizar","about":"Acerca de","info":"Información"},"info":{"add_entity":"Agregar entidad de información","add_row":"Agregar fila de información","collapse_entity":"Contraer entidad","collapse_row":"Contraer fila","delete_entity":"Eliminar entidad","delete_row":"Eliminar fila","duplicate_entity":"Duplicar entidad","duplicate_row":"Duplicar fila","entity_prefix":"Entidad","entity_settings":{"click_action":"Acción de clic","entity_color":"Color de entidad","header":"Elementos de información","icon":"Icono","icon_color":"Color del icono","icon_size":"Tamaño del icono","name":"Nombre personalizado","name_color":"Color del nombre","name_size":"Tamaño del nombre","service":"Servicio","show_icon":"Mostrar icono","show_name":"Mostrar nombre","size_settings":"Configuración de tamaño","url":"URL","value_size":"Tamaño del valor"},"expand_entity":"Expandir entidad","expand_row":"Expandir fila","row_prefix":"Fila de información","row_settings":{"alignment":"Alineación","allow_wrap":"Permitir ajuste de elementos","header":"Configuración de fila","spacing":"Espaciado","vertical_alignment":"Alineación vertical"},"title":"Información de la tarjeta","description":"Configurar filas de información y entidades para mostrar detalles del vehículo como ubicación, kilometraje, etc. Los elementos de información se mostrarán en una sola línea cuando sea posible, ajustándose a múltiples líneas en contenedores estrechos.","template_mode":"Modo de plantilla","template_mode_description":"Utilice una plantilla para formatear el valor de la entidad. Las plantillas le permiten usar la sintaxis de plantillas de Home Assistant para formateo complejo.","template_examples_header":"Ejemplos comunes:","arrange_info_rows":"Organizar filas de información"},"settings_subtabs":{"general":"General","action_images":"Imágenes de acción"},"action_images":{"title":"Configuración de Imágenes de Acción","description":"Configura imágenes que se mostrarán cuando se cumplan estados específicos de entidades.","add_image":"Añadir Imagen de Acción","no_images":"Aún no hay imágenes de acción configuradas. Añade una para comenzar.","entity_settings":"Configuración de Entidad","entity_placeholder":"Selecciona una entidad","state_placeholder":"Ingresa el valor del estado","image_settings":"Configuración de Imagen","image_type":{"title":"Tipo de Imagen","description":"Elige cómo proporcionar la imagen","upload":"Subir Imagen","url":"URL de Imagen","entity":"Imagen de Entidad","none":"Ninguna"},"delete_confirm":"¿Estás seguro de que deseas eliminar esta imagen de acción?","actions":{"duplicate":"Duplicar","delete":"Eliminar","expand":"Expandir","collapse":"Colapsar","drag":"Arrastrar para reordenar"},"preview":{"no_entity":"Ninguna entidad seleccionada","any_state":"Cualquier estado","no_image":"Sin imagen"},"template_mode":"Template Mode","template_description":"Use a template to determine when this image should be shown. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","template_label":"Plantilla de visualización","template_help":"Enter a template that returns true/false. This image will be shown when the template evaluates to true. Use Jinja2 syntax: {{ states(...) }}","priority":{"description":"Basado en prioridad usa la primera coincidencia de arriba a abajo. Coincidencia más nueva usa la última coincidencia encontrada en la lista.","label":"Prioridad de visualización","options":{"newest":"Coincidencia más nueva","priority":"Basado en prioridad"}}},"card_settings":{"title":"Título de la tarjeta","title_alignment":"Alineación del título","title_size":"Tamaño del título","title_description":"Título mostrado en la parte superior de la tarjeta (opcional)","title_alignment_description":"Cómo se alinea el título de la tarjeta","title_size_description":"Tamaño del título de la tarjeta en píxeles","format_entities":"Formatear valores de entidades","format_entities_description":"Habilita el formateo adicional de valores de entidades (agrega comas, convierte unidades, etc.)","show_units":"Mostrar unidades","show_units_description":"Mostrar unidades junto a los valores","help_highlight":"Ayuda para resaltar","help_highlight_description":"Mostrar aspectos destacados visuales al cambiar entre las pestañas del editor para ayudar a identificar qué sección está editando","colors":"Colores","title_color":"Color del título","card_background":"Fondo de la tarjeta","general":"General"},"vehicle_info":{"title":"Información del Vehículo","location":{"title":"Entidad de Ubicación","description":"Selecciona la entidad que muestra la ubicación actual del vehículo.","show":"Mostrar Ubicación","show_description":"Muestra la ubicación del vehículo"},"mileage":{"title":"Entidad de Kilometraje","description":"Selecciona la entidad que representa el kilometraje total o el cuentakilómetros del vehículo.","show":"Mostrar Kilometraje","show_description":"Muestra el kilometraje del vehículo"},"car_state":{"title":"Entidad de Estado del Vehículo","description":"Selecciona la entidad que representa el estado actual del vehículo (ej. estacionado, en movimiento, cargando).","show":"Mostrar Estado del Vehículo","show_description":"Muestra el estado del vehículo"},"colors":{"title":"Colores de información del vehículo","description":"Personaliza los colores para la sección de información del vehículo","location_icon":"Icono de ubicación","location_text":"Texto de ubicación","mileage_icon":"Icono de kilometraje","mileage_text":"Texto de kilometraje","car_state_text":"Texto del estado del vehículo"}},"images":{"common":{"url_description":"Introduce la URL de la imagen","width_description":"Ancho como porcentaje de la tarjeta","width_over_100":"Los valores superiores al 100% pueden ayudar a recortar el espacio vacío alrededor de las imágenes"},"vehicle":{"title":"Imagen del Vehículo","description":"Configura la imagen principal que se muestra para el vehículo.","type":"Tipo de Imagen del Vehículo","width":"Ancho de la Imagen","crop":"Recortar Imagen","entity":"Entidad de Imagen","entity_description":"Entidad que proporciona la URL de la imagen"}},"crop":{"title":"Recorte de Imagen","top":"Superior","right":"Derecho","bottom":"Inferior","left":"Izquierdo","pixels":"px","help":"Ingresa valores en píxeles (positivos o negativos) para ajustar el recorte y el relleno"},"alignment":{"left":"Izquierda","center":"Centro","right":"Derecha"},"common":{"choose_file":"Elegir Archivo","no_file_chosen":"Ningún archivo seleccionado","entity":"Entidad","width":"Ancho","width_description":"Ancho en porcentaje de la tarjeta","width_over_100":"Los valores superiores al 100% pueden ayudar a recortar el espacio vacío alrededor de las imágenes","none":"Ninguno","default":"Predeterminado","upload":"Subir","url":"URL","url_description":"URL que apunta a la imagen","reset":"Restablecer","condition_prompt":"Selecciona \\"Mostrar\\" u \\"Ocultar\\" para configurar la condición de entidad"},"bars":{"title":"Barras de progreso","description":"Agregue barras de progreso personalizables para mostrar varias métricas como nivel de batería, alcance, estado de carga y más. Cada barra se puede configurar individualmente con colores, animaciones y etiquetas.","add":"Agregar barra","duplicate":"Duplicar barra","delete":"Eliminar barra","expand":"Expandir barra","collapse":"Contraer barra","no_entity":"Ninguna entidad seleccionada","bar_prefix":"Barra","template":{"description":"Utilice una plantilla para formatear el texto mostrado, convertir unidades o mostrar valores calculados.","enable":"Habilitar modo de plantilla","template_label":"Plantilla","helper_text":"Use la sintaxis de plantillas de Home Assistant. Ejemplos:\\n• {{ states(\'sensor.temperature\') | float * 1.8 + 32 }} °F\\n• {{ now().strftime(\\"%b %d, %H:%M\\") }}","examples_header":"Ejemplos comunes:","examples":{"temperature":"Convertir Celsius a Fahrenheit","datetime":"Formatear fecha/hora actual","power":"Combinar texto y valor del sensor"}},"bar_radius":{"round":"Redondo","square":"Cuadrado","rounded-square":"Cuadrado Redondeado"},"tabs":{"config":"Configuración","colors":"Colores","animation":"Animación"},"settings":{"header":"Configuración de Barra","entity":"Entidad de Porcentaje de Barra","entity_description":"Selecciona una entidad que devuelva un valor porcentual (0-100). Esto controla el nivel de llenado de la barra.","limit_entity":"Entidad de Valor Límite (opcional)","limit_entity_description":"Opcional: Añade una línea indicadora vertical en la barra (ej. límite de carga para batería de VE).","limit_color":"Color de Indicador de Límite","limit_color_description":"Color de la línea vertical que indica la posición del límite en la barra. Los cambios forzarán una actualización de la tarjeta.","bar_size":"Tamaño de Barra","bar_size_description":"Define el grosor/altura de la barra de progreso.","bar_radius":"Radio de Barra","bar_radius_description":"Forma de las esquinas de la barra de progreso","width":"Ancho de Barra","width_description":"Define el ancho de la barra en porcentaje del ancho de la tarjeta.","alignment":"Alineación de Etiqueta","alignment_description":"Cómo se alinean las etiquetas izquierda y derecha entre sí.","show_percentage":"Mostrar Porcentaje","show_percentage_description":"Mostrar el valor de porcentaje dentro de la barra","bar_style":"Estilo de barra"},"percentage":{"header":"Texto de Porcentaje","display_header":"Visualización de Texto de Porcentaje","display_description":"Controla la visibilidad y apariencia de los valores porcentuales mostrados directamente en la barra. Estos números proporcionan un indicador visual claro del nivel actual.","text_size":"Tamaño de Texto","calculation_header":"Cálculo de Porcentaje","calculation_description":"Configura cómo se calcula el nivel de llenado porcentual de la barra utilizando una de las siguientes opciones.","type_header":"Cálculo de Porcentaje","type_label":"Tipo de Porcentaje","type_description":"Cómo calcular el valor de porcentaje mostrado en la barra","type_entity":"Entidad (0-100)","type_difference":"Diferencia (Cantidad/Total)","amount_entity":"Entidad de Cantidad","amount_description":"Entidad que representa la cantidad actual/valor (numerador)","total_entity":"Entidad de Total","total_description":"Entidad que representa la cantidad/máximo total (denominador)","attribute":"Nombre del atributo","toggle_description":"Alternar visualización de porcentaje","type_attribute":"Atributo de entidad","type_template":"Modo de plantilla"},"left_side":{"header":"Lado Izquierdo","section_description":"Configura el título y el valor de entidad mostrados en el lado izquierdo de la barra. Esto es útil para mostrar etiquetas como \'Autonomía\' o \'Batería\' junto con sus valores.","toggle_description":"Mostrar u ocultar el lado izquierdo de la etiqueta de barra","title":"Título Izquierdo","title_description":"Etiqueta opcional mostrada en el lado izquierdo debajo de la barra.","entity":"Entidad Izquierda","entity_description":"Entidad cuyo valor se muestra en el lado izquierdo de la barra.","alignment_description":"Controla cómo se alinea esta etiqueta debajo de la barra.","title_size":"Tamaño del Título","value_size":"Tamaño del Valor","hidden_message":"El lado izquierdo está oculto"},"right_side":{"header":"Lado Derecho","section_description":"Configura el título y el valor de entidad mostrados en el lado derecho de la barra. Esto es ideal para información complementaria como \'Tiempo hasta Carga Completa\' o mediciones secundarias.","toggle_description":"Mostrar u ocultar el lado derecho de la etiqueta de barra","title":"Título Derecho","title_description":"Etiqueta opcional mostrada en el lado derecho debajo de la barra.","entity":"Entidad Derecha","entity_description":"Entidad cuyo valor se muestra en el lado derecho de la barra.","alignment_description":"Controla cómo se alinea esta etiqueta debajo de la barra.","title_size":"Tamaño del Título","value_size":"Tamaño del Valor","hidden_message":"El lado derecho está oculto"},"colors":{"header":"Colores","bar_color":"Color de Barra","background_color":"Color de Fondo","border_color":"Color de Borde","limit_indicator_color":"Color de Indicador de Límite","left_title_color":"Color de Título Izquierdo","left_value_color":"Color de Valor Izquierdo","right_title_color":"Color de Título Derecho","right_value_color":"Color de Valor Derecho","percentage_text_color":"Color de Texto de Porcentaje","reset_color":"Restablecer color predeterminado"},"gradient":{"header":"Modo Degradado","description":"Crea hermosas transiciones de color en tus barras de progreso. Ideal para mostrar niveles de batería, indicadores de combustible o cualquier indicador de estado que requiera énfasis visual.","toggle":"Usar Degradado","toggle_description":"Usar un degradado para la barra de progreso en lugar de un color sólido","display_mode":"Modo de Visualización del Degradado","display_mode_full":"Completo","display_mode_value_based":"Basado en Valor","display_mode_description":"Completo: Mostrar degradado completo. Basado en Valor: Mostrar degradado hasta el valor actual.","editor_header":"Editor de Degradado","add_stop":"Añadir Parada","display_mode_cropped":"Recortado"},"animation":{"header":"Animación de Acción","description":"Añade animaciones a la barra cuando una entidad específica alcanza un estado específico. Perfecto para mostrar estados de carga, estados de alarma y más.","pro_tip":"Consejo Pro: Para animaciones \'siempre activas\', selecciona un tipo de animación pero deja vacíos los campos de entidad y estado. ¡Prueba las animaciones \'Burbujas\' y \'Rellenar\'!","entity":"Entidad de Animación","entity_description":"Entidad que activa la animación cuando coincide con el estado especificado","state":"Estado de Entidad","state_description":"Cuando el estado de la entidad coincide con este valor, se activará la animación","type":"Tipo de Animación","type_description":"El efecto de animación que se mostrará cuando el estado de la entidad coincida","select_entity_prompt":"Seleccione una Entidad y escriba el estado que desea para activar la animación (ejemplos: \\"charging\\", \\"on\\", \\"idle\\")","action_entity":"Entidad de Acción","action_header":"Anulación de animación de acción","action_state":"Estado de Acción","action_type":"Animación de acción","action_description":"Esta animación anulará la animación regular cuando la entidad especificada esté en un estado específico.","action_entity_prompt":"Selecciona una Entidad de Acción y estado para definir cuándo esta animación debe anular la animación regular"},"bar_sizes":{"thin":"Delgada","regular":"Normal","thick":"Gruesa","thiccc":"Muy Gruesa"},"bar_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"},"bar_alignments":{"space-between":"Espacio Entre","flex-start":"Izquierda","center":"Centro","flex-end":"Derecha"},"bar_styles":{"flat":"Plano (Predeterminado)","glossy":"Brillante","embossed":"Relieve","inset":"Insertado","gradient":"Superposición de Degradado","neon":"Brillo Neón","outline":"Contorno","glass":"Cristal","metallic":"Metálico","neumorphic":"Neumórfico","dashed":"Discontinua"},"animation_types":{"none":"Ninguna","charging-lines":"Carga (Líneas Diagonales)","pulse":"Pulso","blinking":"Parpadeo","bouncing":"Rebote","glow":"Brillo","rainbow":"Arcoíris","bubbles":"Burbujas","fill":"Rellenar","flicker":"Parpadeo","heartbeat":"Latido del corazón","ripple":"Ondulación","shimmer":"Brillo","traffic":"Tráfico","vibrate":"Vibrar"},"custom_bar_settings":{"title":"Configuración de Barra Personalizada","description":"Define configuraciones personalizadas para barras individuales.","name":"Nombre de la Barra","entity":"Entidad","unit":"Unidad","min":"Valor Mínimo","max":"Valor Máximo","thresholds":"Umbrales","severity":"Mapa de Severidad"},"reset_size":"Restablecer al tamaño predeterminado","row_alignment":{"header":"Alineación global de filas de barras","label":"Alineación de fila de barra","description":"Controla la alineación horizontal de las barras dentro de cada fila si no llenan todo el ancho."}},"icons":{"title":"Iconos de la tarjeta","description":"Agrega filas de iconos para mostrar múltiples iconos en tu tarjeta. Cada fila se puede configurar con diferentes ajustes. Nota: Las filas de iconos y el orden de las secciones se pueden reorganizar en la pestaña Personalizar.","add_row":"Agregar fila de iconos","duplicate_row":"Duplicar fila","delete_row":"Eliminar fila","expand_row":"Expandir fila","collapse_row":"Contraer fila","no_row":"No se han agregado filas de iconos","row_prefix":"Fila","icon_prefix":"Icono","add_icon":"Agregar icono","duplicate_icon":"Duplicar icono","delete_icon":"Eliminar icono","expand_icon":"Expandir icono","collapse_icon":"Contraer icono","no_icon":"No se ha seleccionado icono","tabs":{"general":"General","appearance":"Apariencia","states":"Estados","active_state":"Estado activo","inactive_state":"Estado inactivo"},"alignments":{"flex-start":"Izquierda","center":"Centro","flex-end":"Derecha","space-between":"Espaciado entre","space-around":"Espaciado alrededor","space-evenly":"Espaciado uniforme"},"row_settings":{"header":"Configuración de Fila","width":"Ancho de Fila","width_description":"Ancho de la fila en porcentaje del ancho de la tarjeta","alignment":"Alineación de Fila","alignment_description":"Cómo se alinean los iconos en esta fila","spacing":"Espaciado de Iconos","spacing_description":"Cantidad de espacio entre los iconos en esta fila","columns":"Número de Columnas","columns_description":"Número de columnas de tamaño uniforme en la fila (0 = distribución automática basada en el contenido)","confirmation_mode":"Modo de Confirmación","confirmation_mode_description":"Requiere dos toques/clics para activar los iconos en esta fila, evitando interacciones accidentales","layout_info_title":"Cómo funcionan la configuración de diseño","vertical_alignment":"Alineación vertical"},"icon_settings":{"header":"Configuración de Icono","entity":"Entidad","entity_description":"Entidad mostrada con este icono","icon":"Icono","icon_description":"Selecciona un icono o ingresa un icono personalizado","name":"Nombre","name_description":"Nombre personalizado mostrado debajo del icono (usa el nombre de la entidad por defecto si no se especifica)","show_name":"Mostrar Nombre","show_name_description":"Muestra el texto del nombre debajo del icono","show_state":"Mostrar Estado","show_state_description":"Muestra el estado de la entidad debajo del icono","show_units":"Mostrar Unidades","show_units_description":"Incluye las unidades al mostrar el estado","text_position":"Posición del Texto","text_position_description":"Dónde se posiciona el texto del nombre y estado respecto al icono","click_action":"Acción al Hacer Clic","service":"Servicio","service_description":"Servicio a llamar (ej. light.turn_on)","service_data":"Datos del Servicio (JSON)","service_data_description":"Datos JSON enviados con la llamada al servicio","action":"Acción (JSON/Servicio)","action_description":"Configuración avanzada de acción (ver documentación)","navigation_path":"Ruta de Navegación","navigation_path_description":"Ruta a la que navegar (ej. /lovelace/dashboard)","url":"Url","url_description":"URL para abrir en una nueva pestaña","automation_entity":"Entidad de Automatización","automation_entity_description":"Automatización a activar cuando se hace clic"},"icon_appearance":{"header":"Apariencia del Icono","icon":"Icono Específico","general":"Apariencia General","active":"Estado Activo","inactive":"Estado Inactivo","state_conditions":"Condiciones de Estado","advanced":"Configuración Avanzada","icon_size":"Tamaño del Icono","icon_size_description":"Tamaño del icono en píxeles","text_size":"Tamaño del Texto","text_size_description":"Tamaño del texto de nombre/estado en píxeles","text_alignment":"Alineación del Texto","text_alignment_description":"Cómo se alinea el texto debajo del icono","icon_background":"Fondo del Icono","icon_background_description":"Añade una forma de fondo detrás del icono","icon_background_color":"Color de Fondo del Icono","icon_background_color_description":"Color del fondo detrás del icono","container_background_color":"Color de Fondo del Contenedor","container_background_color_description":"Color del fondo detrás del contenedor completo del icono","text_appearance":"Apariencia del Texto","container":{"header":"Apariencia del Contenedor","vertical_alignment":"Alineación Vertical","vertical_alignment_description":"Alinear el icono y el texto verticalmente dentro del contenedor.","width":"Ancho del Contenedor","width_description":"Establecer el ancho del contenedor del icono relativo a la fila.","background":"Forma del Fondo del Contenedor","background_description":"Elegir una forma de fondo para todo el contenedor del icono."},"show_when_active":"Mostrar Icono Cuando Activo","show_when_active_description":"Mostrar este icono solo cuando está en un estado activo","template_mode":"Modo Plantilla","template_description":"Use a template to determine active/inactive state. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","active_template":"Plantilla Activa","active_template_description":"Plantilla que evalúa a verdadero cuando el icono debe estar activo.","active_state":"Estado Activo","active_state_description":"Cadena de estado que representa \\"activo\\".","active_state_text":"Texto Personalizado para Estado Activo","active_state_text_description":"Sobrescribe el texto mostrado cuando el icono está activo. Dejar vacío para usar el estado real.","inactive_template":"Plantilla Inactiva","inactive_template_description":"Plantilla que evalúa a verdadero cuando el icono debe estar inactivo.","inactive_state":"Estado Inactivo","inactive_state_description":"Cadena de estado que representa \\"inactivo\\".","inactive_state_text":"Texto Personalizado para Estado Inactivo","inactive_state_text_description":"Sobrescribe el texto mostrado cuando el icono está inactivo. Dejar vacío para usar el estado real.","active_icon":"Icono Activo","inactive_icon":"Icono Inactivo","active_icon_color":"Color del Icono Activo","inactive_icon_color":"Color del Icono Inactivo","active_name_color":"Color del Nombre Activo","inactive_name_color":"Color del Nombre Inactivo","active_state_color":"Color del Estado Activo","inactive_state_color":"Color del Estado Inactivo","show_icon_active":"Mostrar Icono Cuando Activo","show_icon_active_description":"Mostrar el icono cuando el estado es activo.","show_icon_inactive":"Mostrar Icono Cuando Inactivo","show_icon_inactive_description":"Mostrar el icono cuando el estado está inactivo.","custom_active_state_text":"Texto Personalizado de Estado Activo","custom_inactive_state_text":"Texto Personalizado de Estado Inactivo","action_description":"Acción a realizar cuando se hace clic en el icono.","show_name_active":"Mostrar Nombre Cuando Activo","show_name_active_description":"Mostrar el nombre cuando el estado es activo.","show_name_inactive":"Mostrar Nombre Cuando Inactivo","show_name_inactive_description":"Mostrar el nombre cuando el estado es inactivo.","show_state_active":"Mostrar Estado Cuando Activo","show_state_active_description":"Mostrar el estado cuando el estado es activo.","show_state_inactive":"Mostrar Estado Cuando Inactivo","show_state_inactive_description":"Mostrar el estado cuando el estado es inactivo.","use_entity_color_for_icon":"Use el color de la entidad para el icono","use_entity_color_for_icon_description":"Use the entity\'s color attribute for the icon when available","use_entity_color_for_icon_background":"Utilice el color de la entidad para el fondo de iconos","use_entity_color_for_icon_background_description":"Use el atributo de color de la entidad para el fondo del icono cuando esté disponible","use_entity_color_for_container_background":"Utilice el color de la entidad para contenedor","use_entity_color_for_container_background_description":"Use el atributo de color de la entidad para el fondo del contenedor cuando esté disponible","name_size":"Tamaño de nombre","name_size_description":"Tamaño del texto del nombre de la entidad en píxeles"},"vertical_alignments":{"flex-start":"Superior","center":"Medio","flex-end":"Inferior"},"spacing":{"none":"Ninguno","small":"Pequeño","medium":"Mediano","large":"Grande"},"text_positions":{"below":"Debajo del Icono","beside":"Junto al Icono","none":"Sin Texto","top":"Arriba","left":"Izquierda","right":"Derecha"},"reset":{"size":"Restablecer tamaño predeterminado","color":"Restablecer Color","all":"Restablecer valores predeterminados"},"click_actions":{"toggle":"Alternar Entidad","more-info":"Mostrar Más Información","navigate":"Navegar a Ruta","url":"Abrir URL","call-service":"Llamar a Servicio","perform-action":"Realizar Acción","location-map":"Mostrar Mapa de Ubicación","assist":"Asistente de Voz","trigger":"Activar","none":"Sin Acción","descriptions":{"toggle":"Alterna el estado de la entidad.","more-info":"Abre el diálogo de más información de la entidad.","navigate":"Navega a la ruta de Lovelace especificada.","url":"Abre la URL especificada en una nueva pestaña.","call-service":"Llama al servicio de Home Assistant especificado.","perform-action":"Ejecuta una acción personalizada (ver documentación).","location-map":"Muestra la ubicación de la entidad en un mapa.","assist":"Abre el asistente de voz de Home Assistant.","trigger":"Activa la entidad (automatización, script, botón, etc.).","none":"No se realizará ninguna acción."}},"backgrounds":{"none":"Ninguno","circle":"Círculo","square":"Cuadrado","rounded_square":"Cuadrado Redondeado"},"container_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"},"row_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"},"animations":{"title":"Animación de icono"},"template_mode":"Modo de plantilla","template_mode_active_description":"Utilice una plantilla para determinar cuándo este ícono debe estar activo. Las plantillas le permiten usar la sintaxis de plantillas de Home Assistant para condiciones complejas.","template_mode_inactive_description":"Utilice una plantilla para determinar cuándo este ícono debe estar inactivo. Las plantillas le permiten usar la sintaxis de plantillas de Home Assistant para condiciones complejas.","template_examples_header":"Ejemplos comunes:","enable_template_mode":"Habilitar modo de plantilla"},"customize":{"title":"Personalizar diseño","description":"Personaliza el diseño, orden y añadir secciones a tu tarjeta","condition_prompt":"Selecciona \\"Mostrar\\" u \\"Ocultar\\" para configurar la condición de entidad","layout":{"descriptions_header":"Descripciones de diseño","title":"Estilo de diseño","description":"Elija entre una vista de una o dos columnas para la tarjeta","header":"Ajustes de diseño"},"layout_types":{"single":"Columna única","double":"Doble columna","dashboard":"Panel","half_full":"Mitad + lleno","full_half":"Completo + mitad"},"sections":{"header":"Secciones de la tarjeta","arrangement_header":"Disposición de secciones","arrangement_desc_base":"Arrastre las secciones para organizar su orden en la tarjeta.","arrangement_desc_single_extra":"Todas las secciones se mostrarán en una sola columna.","arrangement_desc_double_extra":"En la vista de dos columnas, puede colocar cada sección en la columna izquierda o derecha.","arrangement_desc_dashboard_extra":"En la vista de panel, puede colocar las secciones alrededor de la imagen de su vehículo."},"section_labels":{"title":"Título","image":"Imagen del vehículo","info":"Información del vehículo","bars":"Todas las barras de sensores","icons":"Todas las líneas de iconos","section_break":"Ruptura de la sección","info_row_prefix":"Fila de información"},"actions":{"collapse_margins":"Reducir márgenes","expand_margins":"Expandir márgenes","collapse_options":"Reducir opciones","expand_options":"Expandir opciones","add_break":"Agregar descanso de sección","delete_break":"Eliminar el descanso de la sección"},"css":{"header":"CSS Global","description":"Ingrese reglas CSS personalizadas aquí para anular el estilo predeterminado de la tarjeta. Estas reglas se aplicarán directamente a la tarjeta. Usar con precaución.","label":"CSS Personalizado","input_description":"Ingrese sus reglas CSS personalizadas aquí."},"conditions":{"header":"Lógica condicional","description":"Mostrar u ocultar esta sección según el estado de una entidad.","type_label":"Tipo de condición","entity_label":"Entidad de condición","state_label":"Estado de condición","types":{"none":"Ninguna (Mostrar siempre)","show":"Mostrar cuando...","hide":"Ocultar cuando..."}},"margins":{"header":"Márgenes","top":"Margen superior","bottom":"Margen inferior"},"columns":{"left":"Columna izquierda","right":"Columna derecha","empty":"Soltar secciones aquí"},"column_width":{"title":"Ancho de columnas","description":"Configure la relación de ancho entre las columnas izquierda y derecha","50_50":"Igual (50/50)","30_70":"Estrecha izquierda, ancha derecha (30/70)","70_30":"Ancha izquierda, estrecha derecha (70/30)","40_60":"Ligeramente más estrecha izquierda (40/60)","60_40":"Ligeramente más ancha izquierda (60/40)"},"dashboard":{"top":"Sección superior","top_middle":"Sección superior-media","left_middle":"Sección izquierda-media","middle":"Sección media","middle_empty":"Área de imagen del vehículo (Recomendado)","right_middle":"Sección derecha-media","bottom_middle":"Sección inferior-media","bottom":"Sección inferior"},"top_view":{"header":"Ajustes del panel","description":"Configure los ajustes de espaciado y diseño para la vista de panel","side_margin":"Márgenes laterales","side_margin_help":"Márgenes en los lados de la vista en píxeles","middle_spacing":"Espaciado medio","middle_spacing_help":"Espacio entre columnas medias en píxeles","vertical_spacing":"Espaciado vertical","vertical_spacing_help":"Espacio entre filas en píxeles"},"break_styles":{"blank":"En blanco (sin línea)","line":"Línea continua","double_line":"Línea doble","dotted":"Línea de puntos","double_dotted":"Línea de doble punta","shadow":"Gradiente de sombra"},"break_style":{"header":"Estilo de separación","style_label":"Estilo","thickness_label":"Grosor","width_percent_label":"Ancho (%)","color_label":"Color"},"half_full":{"row1":"Row 1 (Split)","row1_col1":"Row 1 - Left Column","row1_col2":"Row 1 - Right Column","row2":"Row 2 (Full Width)","row2_full":"Fila 2, ancho completo (100%)"},"full_half":{"row1":"Row 1 (Full Width)","row2":"Row 2 (Split)","row2_col1":"Row 2 - Left Column","row2_col2":"Row 2 - Right Column","row1_full":"Fila 1, ancho completo (100%)"}},"container_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"},"row_widths":{"25":"25% de Ancho","50":"50% de Ancho","75":"75% de Ancho","100":"100% (Ancho Completo)"},"about":{"developed_by":"Desarrollado por","discord_button":"Únete a nuestro Discord","docs_button":"Visita nuestra documentación","donate_button":"DEJAR UNA PROPINA (PAYPAL)","github_button":"Visita nuestro Github","logo_alt":"Ultra Vehicle Card","support_title":"Apoya Ultra Vehicle Card","support_description":"¡Tus generosas propinas impulsan el desarrollo de características increíbles para esta tarjeta! Sin el apoyo de usuarios como tú, la innovación continua no sería posible."}},"custom_icons":{"title":"Iconos personalizados","description":"Define iconos personalizados para diferentes estados.","icon_entity":"Entidad de icono","default_icon":"Icono predeterminado","state_icons":"Iconos de estado","state":"Estado","icon":"Icono"},"custom_active_state_text":"Texto personalizado de estado activo","custom_inactive_state_text":"Texto personalizado de estado inactivo","image_settings":{"title":"Ajustes de imagen","description":"Configure la apariencia de la imagen principal.","type":"Tipo de imagen","width":"Ancho de imagen","crop":"Recortar imagen","entity":"Entidad de imagen","entity_description":"Entidad que proporciona la URL de la imagen","text_color":"Entity Color","text_color_description":"Color for the entity value","name_color":"Name Color","name_color_description":"Color for the entity name label","icon_color":"Icon Color"},"entity_settings":{"entity":"Entidad","entity_description":"Seleccione una entidad para mostrar información de","name":"Name","name_description":"Anular el nombre de la entidad (deje en blanco para usar el nombre amigable de la entidad)","icon":"Icono","icon_placeholder":"mdi:power-plug","show_icon":"Icono de espectáculo","show_name":"Nombre del nombre","show_name_description":"Muestra el nombre de la entidad antes del valor","click_action":"Click Action","more_info":"More Info","navigate":"Navigate","url":"URL (External)","url_path":"URL","call_service":"Call Service","none":"None","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to when clicked (e.g., /lovelace/0)","url_description":"URL to open when clicked","service":"Service","service_description":"Service to call (e.g., light.turn_on)","service_data":"Service Data (JSON)","template_mode":"Modo de Plantilla","template_mode_description":"Usar una plantilla para formatear el valor de la entidad","value_template":"Plantilla de Valor","template_header":"Plantilla de Valor","template_examples_header":"Ejemplos Comunes:","template_basic":"Valor básico","template_units":"Con unidades","template_round":"Redondear a 1 decimal","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Entity Size","text_size_description":"Size of the entity value text in pixels","name_size":"Name Size","name_size_description":"Size of the entity name text in pixels","icon_color":"Color de icono","name_color":"Color de nombre","text_color":"Entity Color","size_settings":"Size Settings","color_settings":"Color Settings","entity_color":"Color de la entidad"}}');var rt=o.t(at,2);const st=JSON.parse('{"editor":{"tabs":{"settings":"Paramètres","bars":"Barres","icons":"Icônes","customize":"Personnaliser","about":"À propos","info":"Informations"},"settings_subtabs":{"general":"Général","action_images":"Images d\'action"},"action_images":{"title":"Paramètres des Images d\'Action","description":"Configurez les images à afficher lorsque des états d\'entités spécifiques sont atteints.","add_image":"Ajouter une Image d\'Action","no_images":"Aucune image d\'action configurée pour l\'instant. Ajoutez-en une pour commencer.","entity_settings":"Paramètres de l\'Entité","entity_placeholder":"Sélectionnez une entité","state_placeholder":"Entrez la valeur d\'état","image_settings":"Paramètres de l\'Image","image_type":{"title":"Type d\'Image","description":"Choisissez comment fournir l\'image","upload":"Télécharger l\'Image","url":"URL de l\'Image","entity":"Image de l\'Entité","none":"Aucune"},"delete_confirm":"Êtes-vous sûr de vouloir supprimer cette image d\'action ?","actions":{"duplicate":"Dupliquer","delete":"Supprimer","expand":"Développer","collapse":"Réduire","drag":"Glisser pour réorganiser"},"preview":{"no_entity":"Aucune entité sélectionnée","any_state":"N\'importe quel état","no_image":"Pas d\'image"},"template_mode":"Template Mode","template_description":"Use a template to determine when this image should be shown. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","template_label":"Modèle d\'affichage","template_help":"Enter a template that returns true/false. This image will be shown when the template evaluates to true. Use Jinja2 syntax: {{ states(...) }}"},"card_settings":{"title":"Titre de la carte","title_alignment":"Alignement du titre","title_size":"Taille du titre","title_description":"Titre affiché en haut de la carte (optionnel)","title_alignment_description":"Comment le titre de la carte est aligné","title_size_description":"Taille du titre de la carte en pixels","format_entities":"Formater les valeurs d\'entités","format_entities_description":"Active le formatage supplémentaire des valeurs d\'entités (ajoute des virgules, convertit les unités, etc.)","show_units":"Afficher les unités","show_units_description":"Afficher les unités à côté des valeurs","help_highlight":"Aider à mettre en évidence","help_highlight_description":"Afficher les points forts visuels lors de la commutation entre les onglets de l\'éditeur pour aider à identifier la section que vous modifiez"},"vehicle_info":{"title":"Informations du Véhicule","location":{"title":"Entité de Localisation","description":"Sélectionne l\'entité qui affiche l\'emplacement actuel du véhicule.","show":"Afficher la Localisation","show_description":"Affiche l\'emplacement du véhicule"},"mileage":{"title":"Entité de Kilométrage","description":"Sélectionne l\'entité qui représente le kilométrage total ou l\'odomètre du véhicule.","show":"Afficher le Kilométrage","show_description":"Affiche le kilométrage du véhicule"},"car_state":{"title":"Entité d\'État du Véhicule","description":"Sélectionne l\'entité qui représente l\'état actuel du véhicule (ex. garé, en mouvement, en charge).","show":"Afficher l\'État du Véhicule","show_description":"Affiche l\'état du véhicule"}},"images":{"common":{"url_description":"Entrez l\'URL de l\'image","width_description":"Largeur en pourcentage de la carte","width_over_100":"Les valeurs de plus de 100% peuvent aider à recadrer l\'espace vide autour des images"},"vehicle":{"title":"Image du Véhicule","description":"Configure l\'image principale affichée pour le véhicule.","type":"Type d\'Image du Véhicule","width":"Largeur de l\'Image","crop":"Recadrer l\'Image","entity":"Entité d\'Image","entity_description":"Entité qui fournit l\'URL de l\'image"}},"crop":{"title":"Recadrage d\'Image","top":"Haut","right":"Droit","bottom":"Bas","left":"Gauche","pixels":"px","help":"Entrez des valeurs en pixels (positives ou négatives) pour ajuster le recadrage et le remplissage"},"alignment":{"left":"Gauche","center":"Centre","right":"Droite"},"common":{"choose_file":"Choisir un Fichier","no_file_chosen":"Aucun fichier sélectionné","entity":"Entité","width":"Largeur","width_description":"Largeur en pourcentage de la carte","width_over_100":"Les valeurs de plus de 100% peuvent aider à recadrer l\'espace vide autour des images","none":"Aucun","default":"Par défaut","upload":"Télécharger","url":"URL","url_description":"URL pointant vers l\'image","reset":"Réinitialiser","condition_prompt":"Sélectionnez \\"afficher\\" ou \\"masquer\\" pour configurer la condition d\'entité"},"bars":{"title":"Barres de Pourcentage","description":"Ajoute des barres de pourcentage pour afficher des valeurs comme le niveau de carburant, la charge de la batterie ou l\'autonomie. Chaque barre peut afficher une valeur de pourcentage principale avec des étiquettes optionnelles à gauche et à droite.","add":"Ajouter une Nouvelle Barre","duplicate":"Dupliquer la Barre","delete":"Supprimer la Barre","expand":"Développer la Barre","collapse":"Réduire la Barre","bar_prefix":"Barre","no_entity":"Aucune entité sélectionnée","bar_radius":{"round":"Arrondi","square":"Carré","rounded-square":"Carré Arrondi"},"tabs":{"config":"Configuration","colors":"Couleurs","animation":"Animation"},"settings":{"header":"Configuration de la Barre","entity":"Entité de la Barre","entity_description":"Sélectionnez une entité qui renvoie une valeur en pourcentage (0-100). Cela contrôle le remplissage de la barre.","limit_entity":"Entité de Limite (optionnel)","limit_entity_description":"Optionnel: Ajouter un indicateur de limite vertical sur la barre (ex. limite de charge pour batterie VE).","limit_color":"Couleur de l\'Indicateur de Limite","limit_color_description":"Couleur de la ligne verticale indiquant la position de la limite sur la barre.","bar_size":"Taille de la Barre","bar_size_description":"Définit l\'épaisseur/hauteur de la barre de progression.","bar_radius":"Rayon de la Barre","bar_radius_description":"Forme des coins de la barre de progression","width":"Largeur de la Barre","width_description":"Définit la largeur de la barre en pourcentage de la largeur de la carte.","alignment":"Alignement des Étiquettes","alignment_description":"Comment les étiquettes gauche et droite s\'alignent entre elles.","show_percentage":"Afficher le Pourcentage","show_percentage_description":"Afficher la valeur en pourcentage à l\'intérieur de la barre"},"percentage":{"header":"Texte du Pourcentage","display_header":"Affichage du Texte de Pourcentage","display_description":"Contrôlez la visibilité et l\'apparence des valeurs de pourcentage affichées directement sur la barre. Ces nombres fournissent un indicateur visuel clair du niveau actuel.","text_size":"Taille du Texte","calculation_header":"Calcul du Pourcentage","calculation_description":"Configurez comment le niveau de remplissage en pourcentage de la barre est calculé en utilisant l\'une des options ci-dessous.","type_header":"Calcul du Pourcentage","type_label":"Type de Pourcentage","type_description":"Comment calculer la valeur de pourcentage affichée dans la barre","type_entity":"Entité (0-100)","type_difference":"Différence (Quantité/Total)","amount_entity":"Entité de Quantité","amount_description":"Entité représentant la quantité/valeur actuelle (numérateur)","total_entity":"Entité de Total","total_description":"Entité représentant la quantité/maximum total (dénominateur)"},"left_side":{"header":"Côté Gauche","section_description":"Configurez le titre et la valeur de l\'entité affichés du côté gauche de la barre. Ceci est utile pour afficher des étiquettes comme \'Autonomie\' ou \'Batterie\' avec leurs valeurs.","toggle_description":"Afficher ou masquer le côté gauche de l\'étiquette de la barre","title":"Titre Gauche","title_description":"Étiquette facultative affichée sur le côté gauche sous la barre.","entity":"Entité Gauche","entity_description":"Entité dont la valeur est affichée sur le côté gauche de la barre.","alignment_description":"Contrôle l\'alignement de cette étiquette sous la barre.","title_size":"Taille du Titre","value_size":"Taille de la Valeur","hidden_message":"Le côté gauche est masqué"},"right_side":{"header":"Côté Droit","section_description":"Configurez le titre et la valeur de l\'entité affichés du côté droit de la barre. C\'est idéal pour les informations complémentaires comme \'Temps jusqu\'à Plein\' ou les mesures secondaires.","toggle_description":"Afficher ou masquer le côté droit de l\'étiquette de la barre","title":"Titre Droit","title_description":"Étiquette facultative affichée sur le côté droit sous la barre.","entity":"Entité Droite","entity_description":"Entité dont la valeur est affichée sur le côté droit de la barre.","alignment_description":"Contrôle l\'alignement de cette étiquette sous la barre.","title_size":"Taille du Titre","value_size":"Taille de la Valeur","hidden_message":"Le côté droit est masqué"},"colors":{"header":"Couleurs","bar_color":"Couleur de la Barre","background_color":"Couleur d\'Arrière-plan","border_color":"Couleur de Bordure","limit_indicator_color":"Couleur de l\'Indicateur de Limite","left_title_color":"Couleur du Titre Gauche","left_value_color":"Couleur de la Valeur Gauche","right_title_color":"Couleur du Titre Droit","right_value_color":"Couleur de la Valeur Droite","percentage_text_color":"Couleur du Texte de Pourcentage","reset_color":"Réinitialiser la couleur par défaut"},"gradient":{"header":"Mode Dégradé","description":"Créez de belles transitions de couleur sur vos barres de progression. Idéal pour afficher les niveaux de batterie, les jauges de carburant ou tout indicateur d\'état nécessitant une mise en valeur visuelle.","toggle":"Utiliser un Dégradé","toggle_description":"Utiliser un dégradé pour la barre de progression au lieu d\'une couleur unie","display_mode":"Mode d\'Affichage du Dégradé","display_mode_full":"Complet","display_mode_value_based":"Basé sur la Valeur","display_mode_description":"Complet: Affiche tout le dégradé. Basé sur la Valeur: Affiche le dégradé jusqu\'à la valeur actuelle.","editor_header":"Éditeur de Dégradé","add_stop":"Ajouter un Arrêt","display_mode_cropped":"Recadré"},"animation":{"header":"Animation d\'Action","description":"Ajoute des animations à la barre lorsqu\'une entité spécifique atteint un état spécifique. Parfait pour afficher les états de charge, les états d\'alarme et plus encore.","pro_tip":"Astuce Pro: Pour des animations \'toujours actives\', sélectionne un type d\'animation mais laisse les champs d\'entité et d\'état vides. Essaie les animations \'Bulles\' et \'Remplissage\'!","entity":"Entité d\'Animation","entity_description":"Entité qui déclenche l\'animation lorsqu\'elle correspond à l\'état spécifié","state":"État de l\'Entité","state_description":"Lorsque l\'état de l\'entité correspond à cette valeur, l\'animation sera déclenchée","type":"Type d\'Animation","type_description":"L\'effet d\'animation à afficher lorsque l\'état de l\'entité correspond","select_entity_prompt":"Sélectionnez une Entité et saisissez l\'état qui déclenchera l\'animation (exemples : \\"charging\\", \\"on\\", \\"idle\\")","action_entity":"Entité d\'action","action_state":"État d\'action","action_description":"Cette animation remplacera l\'animation régulière lorsque l\'entité spécifiée est dans un état spécifique.","action_entity_prompt":"Sélectionnez une entité d\'action et l\'état pour définir lorsque cette animation devrait remplacer l\'animation régulière"},"bar_sizes":{"thin":"Fine","regular":"Normale","thick":"Épaisse","thiccc":"Très Épaisse"},"bar_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"},"bar_alignments":{"space-between":"Espace Entre","flex-start":"Gauche","center":"Centre","flex-end":"Droite"},"bar_styles":{"flat":"Plat (Par défaut)","glossy":"Brillant","embossed":"En relief","inset":"Encastré","gradient":"Superposition de dégradé","neon":"Lueur néon","outline":"Contour","glass":"Verre","metallic":"Métallique","neumorphic":"Neumorphique"},"animation_types":{"none":"Aucune","charging-lines":"Charge (Lignes Diagonales)","pulse":"Pulsation","blinking":"Clignotement","bouncing":"Rebond","glow":"Lueur","rainbow":"Arc-en-ciel","bubbles":"Bulles","fill":"Remplissage"},"custom_bar_settings":{"title":"Paramètres de Barre Personnalisés","description":"Définissez des configurations personnalisées pour des barres individuelles.","name":"Nom de la Barre","entity":"Entité","unit":"Unité","min":"Valeur Minimale","max":"Valeur Maximale","thresholds":"Seuils","severity":"Carte de Sévérité"},"template":{"description":"Utilisez un modèle pour formater le texte affiché, convertir des unités ou afficher des valeurs calculées.","enable":"Activer le mode modèle","template_label":"Modèle","helper_text":"Use Home Assistant templating syntax. Examples:\\n• {{ states(\'sensor.temperature\') | float * 1.8 + 32 }} °F\\n• {{ now().strftime(\\"%b %d, %H:%M\\") }}","examples_header":"Exemples courants:","examples":{"temperature":"{{ states(\'sensor.temperature\') | float * 1.8 + 32 }}°F - Convert Celsius to Fahrenheit","datetime":"{{ now().strftime(\\"%b %d, %H:%M\\") }} - Format current date/time","power":"{{ \'Charging at \' + states(\'sensor.ev_power\') + \' kW\' }} - Combine text and sensor value"}}},"icons":{"title":"Icônes de Carte","description":"Ajoutez des lignes d\'icônes pour afficher plusieurs icônes dans votre carte. Chaque ligne peut être configurée avec différents paramètres. Note : Les lignes d\'icônes et l\'ordre des sections peuvent être réorganisés dans l\'onglet Personnaliser.","add_row":"Ajouter une Ligne d\'Icônes","duplicate_row":"Dupliquer la Ligne","delete_row":"Supprimer la Ligne","expand_row":"Développer la Ligne","collapse_row":"Réduire la Ligne","no_row":"Aucune ligne d\'icônes ajoutée","row_prefix":"Ligne","icon_prefix":"Icône","row_settings":{"header":"Paramètres de Ligne","width":"Largeur de Ligne","width_description":"Largeur de la ligne en pourcentage de la largeur de la carte","alignment":"Alignement de la Ligne","alignment_description":"Comment aligner les icônes dans cette ligne","spacing":"Espacement des Icônes","spacing_description":"Quantité d\'espace entre les icônes dans cette ligne","columns":"Nombre de Colonnes","columns_description":"Nombre de colonnes de taille uniforme dans la ligne (0 = distribution automatique basée sur le contenu)","confirmation_mode":"Mode de Confirmation","confirmation_mode_description":"Nécessite deux pressions/clics pour activer les icônes dans cette ligne, évitant les interactions accidentelles","layout_info_title":"Comment fonctionnent les paramètres de mise en page"},"add_icon":"Ajouter une Icône","duplicate_icon":"Dupliquer l\'Icône","delete_icon":"Supprimer l\'Icône","expand_icon":"Développer l\'Icône","collapse_icon":"Réduire l\'Icône","no_icon":"Aucune icône sélectionnée","icon_settings":{"header":"Paramètres d\'Icône","entity":"Entité","entity_description":"Entité à afficher avec cette icône","icon":"Icône","icon_description":"Sélectionnez une icône ou entrez une personnalisée","name":"Nom","name_description":"Nom personnalisé à afficher sous l\'icône (utilise le nom de l\'entité par défaut si non défini)","show_name":"Afficher le Nom","show_name_description":"Afficher le texte du nom sous l\'icône","show_state":"Afficher l\'État","show_state_description":"Afficher l\'état de l\'entité sous l\'icône","show_units":"Afficher les Unités","show_units_description":"Inclure les unités lors de l\'affichage de l\'état","text_position":"Position du Texte","text_position_description":"Où placer le texte du nom et de l\'état par rapport à l\'icône","click_action":"Action au Clic","service":"Service","service_description":"Service à appeler (ex. light.turn_on)","service_data":"Données du Service (JSON)","service_data_description":"Données JSON à envoyer avec l\'appel de service","action":"Action (JSON / Service)","action_description":"Configuration d\'action avancée (voir docs)","navigation_path":"Chemin de Navigation","navigation_path_description":"Chemin vers lequel naviguer (ex. /lovelace/dashboard)","url":"URL","url_description":"URL à ouvrir dans un nouvel onglet","automation_entity":"Entité d\'Automatisation","automation_entity_description":"Automatisation à déclencher lors du clic"},"icon_appearance":{"header":"Apparence de l\'Icône","icon":"Spécifique à l\'Icône","general":"Apparence Générale","active":"État Actif","inactive":"État Inactif","state_conditions":"Conditions d\'État","advanced":"Paramètres Avancés","icon_size":"Taille de l\'Icône","icon_size_description":"Taille de l\'icône en pixels","text_size":"Taille du Texte","text_size_description":"Taille du texte du nom/état en pixels","text_alignment":"Alignement du Texte","text_alignment_description":"Comment aligner le texte sous l\'icône","icon_background":"Fond d\'Icône","icon_background_description":"Ajouter une forme d\'arrière-plan derrière l\'icône","icon_background_color":"Couleur de Fond d\'Icône","icon_background_color_description":"Couleur de l\'arrière-plan derrière l\'icône","container_background_color":"Couleur de Fond du Conteneur","container_background_color_description":"Couleur de l\'arrière-plan derrière le conteneur complet d\'icône","text_appearance":"Apparence du Texte","container":{"header":"Apparence du Conteneur","vertical_alignment":"Alignement Vertical","vertical_alignment_description":"Aligne l\'icône et le texte verticalement dans le conteneur.","width":"Largeur du Conteneur","width_description":"Définit la largeur du conteneur d\'icône par rapport à la ligne.","background":"Forme d\'Arrière-plan du Conteneur","background_description":"Choisissez une forme d\'arrière-plan pour tout le conteneur d\'icône."},"show_when_active":"Afficher l\'Icône Lorsqu\'Active","show_when_active_description":"Afficher cette icône uniquement lorsqu\'elle est dans un état actif","template_mode":"Mode Template","template_description":"Use a template to determine active/inactive state. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","active_template":"Template Actif","active_template_description":"Template qui évalue à vrai lorsque l\'icône doit être active.","active_state":"État Actif","active_state_description":"Chaîne d\'état représentant \\"actif\\".","active_state_text":"Texte d\'État Actif Personnalisé","active_state_text_description":"Remplace le texte affiché lorsque l\'icône est active. Laissez vide pour utiliser l\'état réel.","inactive_template":"Template Inactif","inactive_template_description":"Template qui évalue à vrai lorsque l\'icône doit être inactive.","inactive_state":"État Inactif","inactive_state_description":"Chaîne d\'état représentant \\"inactif\\".","inactive_state_text":"Texte d\'État Inactif Personnalisé","inactive_state_text_description":"Remplace le texte affiché lorsque l\'icône est inactive. Laissez vide pour utiliser l\'état réel.","active_icon":"Icône Active","inactive_icon":"Icône Inactive","active_icon_color":"Couleur de l\'Icône Active","inactive_icon_color":"Couleur de l\'Icône Inactive","active_name_color":"Couleur du Nom Actif","inactive_name_color":"Couleur du Nom Inactif","active_state_color":"Couleur de l\'État Actif","inactive_state_color":"Couleur de l\'État Inactif","show_icon_active":"Afficher l\'Icône Lorsqu\'Active","show_icon_active_description":"Afficher l\'icône lorsque l\'état est actif.","show_icon_inactive":"Afficher l\'Icône Lorsqu\'Inactive","show_icon_inactive_description":"Afficher l\'icône lorsque l\'état est inactif.","custom_active_state_text":"Texte d\'État Actif Personnalisé","custom_inactive_state_text":"Texte d\'État Inactif Personnalisé","action_description":"Action à effectuer lorsque l\'icône est cliquée.","show_name_active":"Afficher le Nom Lorsqu\'Actif","show_name_active_description":"Afficher le nom lorsque l\'état est actif.","show_name_inactive":"Afficher le Nom Lorsqu\'Inactif","show_name_inactive_description":"Afficher le nom lorsque l\'état est inactif.","show_state_active":"Afficher l\'État Lorsqu\'Actif","show_state_active_description":"Afficher l\'état lorsque l\'état est actif.","show_state_inactive":"Afficher l\'État Lorsqu\'Inactif","show_state_inactive_description":"Afficher l\'état lorsque l\'état est inactif.","use_entity_color_for_icon":"Utiliser la couleur de l\'entité pour l\'icône","use_entity_color_for_icon_description":"Use the entity\'s color attribute for the icon when available","use_entity_color_for_icon_background":"Utiliser la couleur de l\'entité pour l\'arrière-plan de l\'icône","use_entity_color_for_icon_background_description":"Utilisez l\'attribut de couleur de l\'entité pour l\'arrière-plan de l\'icône lorsqu\'il est disponible","use_entity_color_for_container_background":"Utiliser la couleur de l\'entité pour le conteneur","use_entity_color_for_container_background_description":"Utilisez l\'attribut de couleur de l\'entité pour l\'arrière-plan du conteneur lorsqu\'il est disponible","name_size":"Taille de nom","name_size_description":"Taille du texte du nom de l\'entité en pixels"},"tabs":{"general":"Général","appearance":"Apparence","states":"États","active_state":"État Actif","inactive_state":"État Inactif"},"alignments":{"flex-start":"Gauche","center":"Centre","flex-end":"Droite","space-between":"Espace Entre","space-around":"Espace Autour","space-evenly":"Espacement Égal"},"vertical_alignments":{"flex-start":"Haut","center":"Milieu","flex-end":"Bas"},"spacing":{"none":"Aucun","small":"Petit","medium":"Moyen","large":"Grand"},"text_positions":{"below":"Sous l\'Icône","beside":"À Côté de l\'Icône","none":"Pas de Texte","top":"En Haut","left":"À Gauche","right":"À Droite"},"reset":{"size":"Réinitialiser à la taille par défaut","color":"Réinitialiser à la couleur par défaut","all":"Réinitialiser aux valeurs par défaut"},"click_actions":{"toggle":"Basculer l\'Entité","more-info":"Afficher Plus d\'Informations","navigate":"Naviguer vers un Chemin","url":"Ouvrir une URL","call-service":"Appeler un Service","perform-action":"Exécuter une Action","location-map":"Afficher la Carte de Localisation","assist":"Assistant Vocal","trigger":"Déclencher","none":"Aucune Action","descriptions":{"toggle":"Bascule l\'état de l\'entité.","more-info":"Ouvre la boîte de dialogue d\'informations de l\'entité.","navigate":"Navigue vers le chemin Lovelace spécifié.","url":"Ouvre l\'URL spécifiée dans un nouvel onglet.","call-service":"Appelle le service Home Assistant spécifié.","perform-action":"Exécute une action personnalisée (voir documentation).","location-map":"Affiche la localisation de l\'entité sur une carte.","assist":"Ouvre l\'assistant vocal Home Assistant.","trigger":"Déclenche ou bascule l\'entité (automatisation, script, bouton, verrou, etc.).","none":"Aucune action ne sera effectuée."}},"backgrounds":{"none":"Aucun","circle":"Cercle","square":"Carré","rounded_square":"Carré Arrondi"},"container_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"},"row_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"},"template_mode":"Mode modèle","template_mode_active_description":"Utilisez un modèle pour déterminer quand cette icône doit être active. Les modèles vous permettent d\'utiliser la syntaxe des modèles d\'assistant à domicile pour des conditions complexes.","template_mode_inactive_description":"Utilisez un modèle pour déterminer quand cette icône doit être inactive. Les modèles vous permettent d\'utiliser la syntaxe des modèles d\'assistant à domicile pour des conditions complexes.","template_examples_header":"Exemples courants:","enable_template_mode":"Activer le mode modèle"},"customize":{"layout":{"title":"Style de mise en page","description":"Choisissez entre une vue à une ou deux colonnes pour la carte","header":"Paramètres de mise en page"},"layout_types":{"single":"Colonne unique","double":"Double colonne","dashboard":"Tableau de bord","half_full":"Demi + plein","full_half":"Full + moitié"},"sections":{"header":"Sections de la carte","arrangement_header":"Disposition des sections","arrangement_desc_base":"Faites glisser les sections pour organiser leur ordre sur la carte.","arrangement_desc_single_extra":"Toutes les sections seront affichées dans une seule colonne.","arrangement_desc_double_extra":"Dans la vue à deux colonnes, vous pouvez placer chaque section dans la colonne gauche ou droite.","arrangement_desc_dashboard_extra":"Dans la vue tableau de bord, vous pouvez placer les sections autour de l\'image de votre véhicule."},"section_labels":{"title":"Titre","image":"Image du véhicule","info":"Informations du véhicule","bars":"Toutes les barres de capteurs","icons":"Toutes les lignes d\'icônes","section_break":"Break de la section"},"actions":{"collapse_margins":"Réduire les marges","expand_margins":"Étendre les marges","collapse_options":"Réduire les options","expand_options":"Étendre les options","add_break":"Ajouter la pause de la section","delete_break":"Supprimer la pause de la section"},"css":{"header":"CSS Global","description":"Entrez des règles CSS personnalisées ici pour remplacer le style par défaut de la carte. Ces règles seront appliquées directement à la carte. À utiliser avec précaution.","label":"CSS Personnalisé","input_description":"Entrez vos règles CSS personnalisées ici."},"conditions":{"header":"Logique conditionnelle","description":"Afficher ou masquer cette section en fonction de l\'état d\'une entité.","type_label":"Type de condition","entity_label":"Entité de condition","state_label":"État de condition","types":{"none":"Aucune (Toujours afficher)","show":"Afficher quand...","hide":"Masquer quand..."}},"margins":{"header":"Marges","top":"Marge supérieure","bottom":"Marge inférieure"},"columns":{"left":"Colonne gauche","right":"Colonne droite","empty":"Déposer les sections ici"},"column_width":{"title":"Largeur des colonnes","description":"Configurez le rapport de largeur entre les colonnes gauche et droite","50_50":"Égal (50/50)","30_70":"Étroite gauche, large droite (30/70)","70_30":"Large gauche, étroite droite (70/30)","40_60":"Légèrement plus étroite gauche (40/60)","60_40":"Légèrement plus large gauche (60/40)"},"dashboard":{"top":"Section supérieure","top_middle":"Section supérieure-moyenne","left_middle":"Section gauche-moyenne","middle":"Section moyenne","middle_empty":"Zone d\'image du véhicule (Recommandé)","right_middle":"Section droite-moyenne","bottom_middle":"Section inférieure-moyenne","bottom":"Section inférieure"},"top_view":{"header":"Paramètres du tableau de bord","description":"Configurez les paramètres d\'espacement et de mise en page pour la vue tableau de bord","side_margin":"Marges latérales","side_margin_help":"Marges sur les côtés de la vue en pixels","middle_spacing":"Espacement moyen","middle_spacing_help":"Espace entre les colonnes moyennes en pixels","vertical_spacing":"Espacement vertical","vertical_spacing_help":"Espace entre les lignes en pixels"},"break_styles":{"blank":"Vide (pas de ligne)","line":"Ligne continue","double_line":"Double ligne","dotted":"Ligne pointillée","double_dotted":"Ligne à double pointillé","shadow":"Gradient d\'ombre"},"break_style":{"header":"Casse","style_label":"Style","thickness_label":"Épaisseur","width_percent_label":"Largeur (%)","color_label":"Couleur"},"half_full":{"row1":"Row 1 (Split)","row1_col1":"Row 1 - Left Column","row1_col2":"Row 1 - Right Column","row2":"Row 2 (Full Width)","row2_full":"Rangée 2, pleine largeur (100%)"},"full_half":{"row1":"Row 1 (Full Width)","row2":"Row 2 (Split)","row2_col1":"Row 2 - Left Column","row2_col2":"Row 2 - Right Column","row1_full":"Rangée 1, pleine largeur (100%)"},"title":"Personnaliser la mise en page","description":"Personnalisez la mise en page, commandez et ajoutez des sections à votre carte","condition_prompt":"Sélectionnez \\"afficher\\" ou \\"masquer\\" pour configurer la condition d\'entité"},"container_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"},"row_widths":{"25":"25% de Largeur","50":"50% de Largeur","75":"75% de Largeur","100":"100% (Pleine Largeur)"},"info":{"arrange_info_rows":"Organiser les lignes d\'informations","title":"Informations sur la carte","description":"Configurer les lignes d\'informations et les entités pour afficher les détails des véhicules comme l\'emplacement, le kilométrage, etc. Les éléments d\'informations s\'afficheront sur une seule ligne lorsque cela est possible, enveloppant plusieurs lignes dans des conteneurs étroits.","template_mode":"Mode modèle","template_mode_description":"Utilisez un modèle pour formater la valeur de l\'entité. Les modèles vous permettent d\'utiliser la syntaxe des modèles d\'assistant à domicile pour le formatage complexe.","template_examples_header":"Exemples courants:"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Développé par","discord_button":"Rejoignez notre Discord","github_button":"Visitez notre Github","docs_button":"Lisez notre documentation","support_title":"Soutenez Ultra Vehicle Card","support_para":"Vos dons généreux permettent le développement de fonctionnalités fantastiques pour cette carte ! Sans le soutien d\'utilisateurs comme vous, l\'innovation continue ne serait pas possible.","donate_button":"FAIRE UN DON (PAYPAL)","support_description":"Vos conseils généreux alimentent le développement de fonctionnalités incroyables pour cette carte! Sans le support d\'utilisateurs comme vous, l\'innovation continue ne serait pas possible."},"custom_icons":{"title":"Icônes personnalisées","description":"Définissez des icônes personnalisées pour différents états.","icon_entity":"Entité d\'icône","default_icon":"Icône par défaut","state_icons":"Icônes d\'état","state":"État","icon":"Icône"},"custom_active_state_text":"Texte personnalisé d\'état actif","custom_inactive_state_text":"Texte personnalisé d\'état inactif","image_settings":{"title":"Paramètres d\'image","description":"Configurez l\'apparence de l\'image principale.","type":"Type d\'image","width":"Largeur d\'image","crop":"Recadrer l\'image","entity":"Entité d\'image","entity_description":"Entité qui fournit l\'URL de l\'image","text_color":"Entity Color","text_color_description":"Color for the entity value","name_color":"Name Color","name_color_description":"Color for the entity name label","icon_color":"Icon Color"},"entity_settings":{"entity":"Entité","entity_description":"Sélectionnez une entité pour afficher des informations à partir de","name":"Name","name_description":"Remplacez le nom de l\'entité (laissez en blanc pour utiliser le nom amical de l\'entité)","icon":"Icône","icon_placeholder":"mdi:power-plug","show_icon":"Icône de montre","show_name":"Nom de spectacle","show_name_description":"Affichez le nom de l\'entité avant la valeur","click_action":"Click Action","more_info":"More Info","navigate":"Navigate","url":"URL (External)","url_path":"URL","call_service":"Call Service","none":"None","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to when clicked (e.g., /lovelace/0)","url_description":"URL to open when clicked","service":"Service","service_description":"Service to call (e.g., light.turn_on)","service_data":"Service Data (JSON)","template_mode":"Use Template for Value","template_mode_description":"Utilisez un modèle pour formater la valeur de l\'entité","value_template":"Modèle de valeur","template_header":"Modèle de valeur","template_examples_header":"Template Examples","template_basic":"Valeur de base","template_units":"Avec des unités","template_round":"À 1 décimal","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Entity Size","text_size_description":"Size of the entity value text in pixels","name_size":"Name Size","name_size_description":"Size of the entity name text in pixels","icon_color":"Couleur icône","name_color":"Nom de la couleur","text_color":"Entity Color","size_settings":"Size Settings","color_settings":"Color Settings","entity_color":"Couleur d\'entité"}}');var lt=o.t(st,2);const dt=JSON.parse('{"editor":{"tabs":{"settings":"Impostazioni","bars":"Barre","icons":"Icone","customize":"Personalizza","about":"Info","info":"Informazioni"},"settings_subtabs":{"general":"Generale","action_images":"Immagini azioni"},"action_images":{"title":"Impostazioni Immagini di Azione","description":"Configura le immagini che verranno visualizzate quando vengono soddisfatti specifici stati delle entità.","add_image":"Aggiungi Immagine di Azione","no_images":"Nessuna immagine di azione configurata ancora. Aggiungine una per iniziare.","entity_settings":"Impostazioni Entità","entity_placeholder":"Seleziona un\'entità","state_placeholder":"Inserisci valore dello stato","image_settings":"Impostazioni Immagine","image_type":{"title":"Tipo di Immagine","description":"Scegli come fornire l\'immagine","upload":"Carica Immagine","url":"URL Immagine","entity":"Immagine Entità","none":"Nessuna"},"delete_confirm":"Sei sicuro di voler eliminare questa immagine di azione?","actions":{"duplicate":"Duplica","delete":"Elimina","expand":"Espandi","collapse":"Comprimi","drag":"Trascina per riordinare"},"preview":{"no_entity":"Nessuna entità selezionata","any_state":"Qualsiasi stato","no_image":"Nessuna immagine"},"template_mode":"Template Mode","template_description":"Use a template to determine when this image should be shown. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","template_label":"Modello di visualizzazione","template_help":"Enter a template that returns true/false. This image will be shown when the template evaluates to true. Use Jinja2 syntax: {{ states(...) }}"},"card_settings":{"title":"Titolo scheda","title_alignment":"Allineamento titolo","title_size":"Dimensione titolo","title_description":"Titolo visualizzato nella parte superiore della scheda (opzionale)","title_alignment_description":"Come viene allineato il titolo della scheda","title_size_description":"Dimensione del titolo della scheda in pixel","format_entities":"Formatta valori entità","format_entities_description":"Abilita la formattazione aggiuntiva dei valori delle entità (aggiunge virgole, converte unità, ecc.)","show_units":"Mostra unità","show_units_description":"Mostra unità accanto ai valori","help_highlight":"Aiutati a evidenziare","help_highlight_description":"Mostra punti salienti visivi quando si passa tra le schede dell\'editor per identificare quale sezione si sta modificando"},"vehicle_info":{"title":"Informazioni sul Veicolo","location":{"title":"Entità Posizione","description":"Seleziona l\'entità che mostra la posizione attuale del veicolo.","show":"Mostra Posizione","show_description":"Mostra la posizione del veicolo"},"mileage":{"title":"Entità Chilometraggio","description":"Seleziona l\'entità che rappresenta il chilometraggio totale o il contachilometri del veicolo.","show":"Mostra Chilometraggio","show_description":"Mostra il chilometraggio del veicolo"},"car_state":{"title":"Entità Stato del Veicolo","description":"Seleziona l\'entità che rappresenta lo stato attuale del veicolo (es. parcheggiato, in movimento, in carica).","show":"Mostra Stato del Veicolo","show_description":"Mostra lo stato del veicolo"}},"images":{"common":{"url_description":"Inserisci l\'URL dell\'immagine","width_description":"Larghezza come percentuale della carta","width_over_100":"I valori superiori al 100% possono aiutare a ritagliare lo spazio vuoto attorno alle immagini"},"vehicle":{"title":"Immagine del Veicolo","description":"Configura l\'immagine principale visualizzata per il veicolo.","type":"Tipo di Immagine del Veicolo","width":"Larghezza dell\'Immagine","crop":"Ritaglia Immagine","entity":"Entità Immagine","entity_description":"Entità che fornisce l\'URL dell\'immagine"}},"crop":{"title":"Ritaglio Immagine","top":"Alto","right":"Destra","bottom":"Basso","left":"Sinistra","pixels":"Px","help":"Inserisci valori in pixel (positivi o negativi) per regolare il ritaglio e il riempimento"},"alignment":{"left":"Sinistra","center":"Centro","right":"Destra"},"common":{"choose_file":"Scegli File","no_file_chosen":"Nessun file selezionato","entity":"Entità","width":"Larghezza","width_description":"Larghezza in percentuale della scheda","width_over_100":"I valori superiori al 100% possono aiutare a ritagliare lo spazio vuoto attorno alle immagini","none":"Nessuno","default":"Predefinito","upload":"Carica","url":"URL","url_description":"URL che punta all\'immagine","reset":"Ripristina","condition_prompt":"Seleziona \\"Mostra\\" o \\"nascondi\\" per configurare la condizione di entità"},"bars":{"title":"Barre Percentuali","description":"Aggiungi barre percentuali per visualizzare valori come livello carburante, carica della batteria o autonomia. Ogni barra può mostrare un valore percentuale principale con etichette opzionali a sinistra e destra.","add":"Aggiungi Nuova Barra","duplicate":"Duplica Barra","delete":"Elimina Barra","expand":"Espandi Barra","collapse":"Comprimi Barra","bar_prefix":"Barra","no_entity":"Nessuna entità selezionata","bar_radius":{"round":"Rotondo","square":"Quadrato","rounded-square":"Quadrato Arrotondato"},"tabs":{"config":"Configurazione","colors":"Colori","animation":"Animazione"},"settings":{"header":"Impostazioni Barra","entity":"Entità Percentuale Barra","entity_description":"Seleziona un\'entità che restituisce un valore percentuale (0-100). Questo controlla il livello di riempimento della barra.","limit_entity":"Entità Valore Limite (opzionale)","limit_entity_description":"Opzionale: Aggiungi una linea indicatrice verticale sulla barra (es. limite di ricarica per batteria VE).","limit_color":"Colore Indicatore Limite","limit_color_description":"Colore della linea verticale che indica la posizione del limite sulla barra. Le modifiche forzeranno un aggiornamento della scheda.","bar_size":"Dimensione Barra","bar_size_description":"Definisce lo spessore/altezza della barra di avanzamento.","bar_radius":"Raggio della Barra","bar_radius_description":"Forma degli angoli della barra di avanzamento","width":"Larghezza Barra","width_description":"Definisce la larghezza della barra in percentuale della larghezza della scheda.","alignment":"Allineamento Etichetta","alignment_description":"Come le etichette sinistra e destra si allineano tra loro.","show_percentage":"Mostra Percentuale","show_percentage_description":"Mostra il valore percentuale all\'interno della barra"},"percentage":{"header":"Testo Percentuale","display_header":"Visualizzazione del Testo Percentuale","display_description":"Controlla la visibilità e l\'aspetto dei valori percentuali mostrati direttamente sulla barra. Questi numeri forniscono un chiaro indicatore visivo del livello attuale.","text_size":"Dimensione Testo","calculation_header":"Calcolo Percentuale","calculation_description":"Configura come viene calcolato il livello di riempimento percentuale della barra utilizzando una delle opzioni seguenti.","type_header":"Calcolo Percentuale","type_label":"Tipo di Percentuale","type_description":"Come calcolare il valore percentuale mostrato nella barra","type_entity":"Entità (0-100)","type_difference":"Differenza (Quantità/Totale)","amount_entity":"Entità Quantità","amount_description":"Entità che rappresenta la quantità/valore attuale (numeratore)","total_entity":"Entità Totale","total_description":"Entità che rappresenta la quantità/massimo totale (denominatore)"},"left_side":{"header":"Lato Sinistro","section_description":"Configura il titolo e il valore dell\'entità visualizzati sul lato sinistro della barra. Utile per mostrare etichette come \'Autonomia\' o \'Batteria\' insieme ai loro valori.","toggle_description":"Mostra o nascondi il lato sinistro dell\'etichetta della barra","title":"Titolo Sinistro","title_description":"Etichetta opzionale visualizzata sul lato sinistro sotto la barra.","entity":"Entità Sinistra","entity_description":"Entità il cui valore viene visualizzato sul lato sinistro della barra.","alignment_description":"Controlla come questa etichetta è allineata sotto la barra.","title_size":"Dimensione Titolo","value_size":"Dimensione Valore","hidden_message":"Il lato sinistro è nascosto"},"right_side":{"header":"Lato Destro","section_description":"Configura il titolo e il valore dell\'entità visualizzati sul lato destro della barra. Ideale per informazioni complementari come \'Tempo alla Carica Completa\' o misurazioni secondarie.","toggle_description":"Mostra o nascondi il lato destro dell\'etichetta della barra","title":"Titolo Destro","title_description":"Etichetta opzionale visualizzata sul lato destro sotto la barra.","entity":"Entità Destra","entity_description":"Entità il cui valore viene visualizzato sul lato destro della barra.","alignment_description":"Controlla come questa etichetta è allineata sotto la barra.","title_size":"Dimensione Titolo","value_size":"Dimensione Valore","hidden_message":"Il lato destro è nascosto"},"colors":{"header":"Colori","bar_color":"Colore Barra","background_color":"Colore Sfondo","border_color":"Colore Bordo","limit_indicator_color":"Colore Indicatore Limite","left_title_color":"Colore Titolo Sinistro","left_value_color":"Colore Valore Sinistro","right_title_color":"Colore Titolo Destro","right_value_color":"Colore Valore Destro","percentage_text_color":"Colore Testo Percentuale","reset_color":"Ripristina colore predefinito"},"gradient":{"header":"Modalità Gradiente","description":"Crea bellissime transizioni di colore sulle tue barre di avanzamento. Ideale per visualizzare livelli della batteria, indicatori di carburante o qualsiasi indicatore di stato che richieda un\'enfasi visiva.","toggle":"Usa Gradiente","toggle_description":"Usa un gradiente per la barra di avanzamento invece di un colore uniforme","display_mode":"Modalità Visualizzazione Gradiente","display_mode_full":"Completo","display_mode_value_based":"Basato sul Valore","display_mode_description":"Completo: Mostra l\'intero gradiente. Basato sul Valore: Mostra il gradiente fino al valore corrente.","editor_header":"Editor Gradiente","add_stop":"Aggiungi Interruzione","display_mode_cropped":"Ritagliato"},"animation":{"header":"Animazione di Azione","description":"Aggiungi animazioni alla barra quando un\'entità specifica raggiunge uno stato specifico. Perfetto per mostrare stati di ricarica, stati di allarme e altro ancora.","pro_tip":"Suggerimento Pro: Per animazioni \'sempre attive\', seleziona un tipo di animazione ma lascia vuoti i campi entità e stato. Prova le animazioni \'Bolle\' e \'Riempimento\'!","entity":"Entità Animazione","entity_description":"Entità che attiva l\'animazione quando corrisponde allo stato specificato","state":"Stato Entità","state_description":"Quando lo stato dell\'entità corrisponde a questo valore, l\'animazione verrà attivata","type":"Tipo di Animazione","type_description":"L\'effetto di animazione da visualizzare quando lo stato dell\'entità corrisponde","select_entity_prompt":"Seleziona un\'Entità e inserisci lo stato che vuoi per attivare l\'animazione (esempi: \\"charging\\", \\"on\\", \\"idle\\")","action_entity":"Entità d\'azione","action_state":"Stato d\'azione","action_description":"Questa animazione sostituirà l\'animazione regolare quando l\'entità specificata è in uno stato specifico.","action_entity_prompt":"Seleziona un\'entità e uno stato per definire quando questa animazione dovrebbe sovrascrivere l\'animazione regolare"},"bar_sizes":{"thin":"Sottile","regular":"Normale","thick":"Spessa","thiccc":"Molto Spessa"},"bar_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"},"bar_alignments":{"space-between":"Spazio Tra","flex-start":"Sinistra","center":"Centro","flex-end":"Destra"},"bar_styles":{"flat":"Piano (Predefinito)","glossy":"Lucido","embossed":"In Rilievo","inset":"Incassato","gradient":"Sovrapposizione Gradiente","neon":"Bagliore Neon","outline":"Contorno","glass":"Vetro","metallic":"Metallico","neumorphic":"Neumorphico"},"animation_types":{"none":"Nessuna","charging-lines":"Ricarica (Linee Diagonali)","pulse":"Pulsazione","blinking":"Lampeggiamento","bouncing":"Rimbalzo","glow":"Bagliore","rainbow":"Arcobaleno","bubbles":"Bolle","fill":"Riempimento"},"custom_bar_settings":{"title":"Impostazioni Barra Personalizzate","description":"Definisci configurazioni personalizzate per le singole barre.","name":"Nome Barra","entity":"Entità","unit":"Unità","min":"Valore Minimo","max":"Valore Massimo","thresholds":"Soglie","severity":"Mappa di Gravità"},"template":{"description":"Utilizzare un modello per formattare il testo visualizzato, convertire le unità o visualizzare i valori calcolati.","enable":"Abilita la modalità modello","template_label":"Modello","helper_text":"Use Home Assistant templating syntax. Examples:\\n• {{ states(\'sensor.temperature\') | float * 1.8 + 32 }} °F\\n• {{ now().strftime(\\"%b %d, %H:%M\\") }}","examples_header":"Esempi comuni:","examples":{"temperature":"{{ states(\'sensor.temperature\') | float * 1.8 + 32 }}°F - Convert Celsius to Fahrenheit","datetime":"{{ now().strftime(\\"%b %d, %H:%M\\") }} - Format current date/time","power":"{{ \'Charging at \' + states(\'sensor.ev_power\') + \' kW\' }} - Combine text and sensor value"}}},"icons":{"title":"Icone della Scheda","description":"Aggiungi righe di icone per visualizzare più icone sulla tua scheda. Ogni riga può essere configurata con impostazioni diverse. Nota: Le righe di icone e l\'ordine delle sezioni possono essere riorganizzati nella scheda Personalizza.","add_row":"Aggiungi Riga di Icone","duplicate_row":"Duplica Riga","delete_row":"Elimina Riga","expand_row":"Espandi Riga","collapse_row":"Comprimi Riga","no_row":"Nessuna riga di icone è stata aggiunta","row_prefix":"Riga","icon_prefix":"Icona","row_settings":{"header":"Impostazioni Riga","width":"Larghezza Riga","width_description":"Larghezza della riga in percentuale della larghezza della scheda","alignment":"Allineamento Riga","alignment_description":"Come le icone sono allineate in questa riga","spacing":"Spaziatura Icone","spacing_description":"Quantità di spazio tra le icone in questa riga","columns":"Numero di Colonne","columns_description":"Numero di colonne di dimensioni uniformi nella riga (0 = distribuzione automatica basata sul contenuto)","confirmation_mode":"Modalità Conferma","confirmation_mode_description":"Richiede due tocchi/clic per attivare le icone in questa riga, prevenendo interazioni accidentali","layout_info_title":"Come funzionano le impostazioni del layout"},"add_icon":"Aggiungi Icona","duplicate_icon":"Duplica Icona","delete_icon":"Elimina Icona","expand_icon":"Espandi Icona","collapse_icon":"Comprimi Icona","no_icon":"Nessuna icona selezionata","icon_settings":{"header":"Impostazioni Icona","entity":"Entità","entity_description":"Entità visualizzata con questa icona","icon":"Icona","icon_description":"Seleziona un\'icona o inserisci un\'icona personalizzata","name":"Nome","name_description":"Nome personalizzato visualizzato sotto l\'icona (usa il nome dell\'entità di default se non specificato)","show_name":"Mostra Nome","show_name_description":"Mostra il testo del nome sotto l\'icona","show_state":"Mostra Stato","show_state_description":"Mostra lo stato dell\'entità sotto l\'icona","show_units":"Mostra Unità","show_units_description":"Includi le unità quando mostri lo stato","text_position":"Posizione Testo","text_position_description":"Dove il testo del nome e dello stato è posizionato rispetto all\'icona","click_action":"Azione al Click","service":"Servizio","service_description":"Servizio da chiamare (es. light.turn_on)","service_data":"Dati Servizio (JSON)","service_data_description":"Dati JSON inviati con la chiamata al servizio","action":"Azione (JSON/Servizio)","action_description":"Configurazione avanzata azione (vedi documentazione)","navigation_path":"Percorso di Navigazione","navigation_path_description":"Percorso verso cui navigare (es. /lovelace/dashboard)","url":"URL","url_description":"URL da aprire in una nuova scheda","automation_entity":"Entità Automazione","automation_entity_description":"Automazione da attivare quando cliccato"},"icon_appearance":{"header":"Aspetto Icona","icon":"Icona Specifica","general":"Aspetto Generale","active":"Stato Attivo","inactive":"Stato Inattivo","state_conditions":"Condizioni di Stato","advanced":"Impostazioni Avanzate","icon_size":"Dimensione Icona","icon_size_description":"Dimensione dell\'icona in pixel","text_size":"Dimensione Testo","text_size_description":"Dimensione del testo nome/stato in pixel","text_alignment":"Allineamento Testo","text_alignment_description":"Come il testo è allineato sotto l\'icona","icon_background":"Sfondo Icona","icon_background_description":"Aggiungi una forma di sfondo dietro l\'icona","icon_background_color":"Colore Sfondo Icona","icon_background_color_description":"Colore dello sfondo dietro l\'icona","container_background_color":"Colore Sfondo Contenitore","container_background_color_description":"Colore dello sfondo dietro l\'intero contenitore dell\'icona","text_appearance":"Aspetto Testo","container":{"header":"Aspetto Contenitore","vertical_alignment":"Allineamento Verticale","vertical_alignment_description":"Allinea l\'icona e il testo verticalmente all\'interno del contenitore.","width":"Larghezza Contenitore","width_description":"Imposta la larghezza del contenitore dell\'icona rispetto alla riga.","background":"Forma Sfondo Contenitore","background_description":"Scegli una forma di sfondo per l\'intero contenitore dell\'icona."},"show_when_active":"Mostra Icona Quando Attiva","show_when_active_description":"Mostra questa icona solo quando è in uno stato attivo","template_mode":"Modalità Template","template_description":"Use a template to determine active/inactive state. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","active_template":"Template Attivo","active_template_description":"Template che restituisce vero quando l\'icona dovrebbe essere attiva.","active_state":"Stato attivo","active_state_description":"Stringa di stato che rappresenta \\"attivo\\".","active_state_text":"Testo Personalizzato per Stato Attivo","active_state_text_description":"Sovrascrive il testo visualizzato quando l\'icona è attiva. Lascia vuoto per usare lo stato effettivo.","inactive_template":"Template Inattivo","inactive_template_description":"Template che restituisce vero quando l\'icona dovrebbe essere inattiva.","inactive_state":"Stato inattivo","inactive_state_description":"Stringa di stato che rappresenta \\"inattivo\\".","inactive_state_text":"Testo Personalizzato per Stato Inattivo","inactive_state_text_description":"Sovrascrive il testo visualizzato quando l\'icona è inattiva. Lascia vuoto per usare lo stato effettivo.","active_icon":"Icona attiva","inactive_icon":"Icona inattiva","active_icon_color":"Colore Icona Attiva","inactive_icon_color":"Colore Icona Inattiva","active_name_color":"Colore Nome Attivo","inactive_name_color":"Colore Nome Inattivo","active_state_color":"Colore Stato Attivo","inactive_state_color":"Colore Stato Inattivo","show_icon_active":"Mostra icona quando attivo","show_icon_active_description":"Mostra l\'icona quando lo stato è attivo.","show_icon_inactive":"Mostra Icona Quando Inattiva","show_icon_inactive_description":"Mostra l\'icona quando lo stato è inattivo.","custom_active_state_text":"Testo Personalizzato Stato Attivo","custom_inactive_state_text":"Testo Personalizzato Stato Inattivo","action_description":"Azione da eseguire quando si clicca sull\'icona.","show_name_active":"Mostra Nome Quando Attivo","show_name_active_description":"Mostra il nome quando lo stato è attivo.","show_name_inactive":"Mostra Nome Quando Inattivo","show_name_inactive_description":"Mostra il nome quando lo stato è inattivo.","show_state_active":"Mostra Stato Quando Attivo","show_state_active_description":"Mostra lo stato quando lo stato è attivo.","show_state_inactive":"Mostra Stato Quando Inattivo","show_state_inactive_description":"Mostra lo stato quando lo stato è inattivo.","use_entity_color_for_icon":"Usa il colore dell\'entità per l\'icona","use_entity_color_for_icon_description":"Use the entity\'s color attribute for the icon when available","use_entity_color_for_icon_background":"Usa il colore dell\'entità per lo sfondo dell\'icona","use_entity_color_for_icon_background_description":"Usa l\'attributo colore dell\'entità per lo sfondo dell\'icona quando disponibile","use_entity_color_for_container_background":"Usa il colore dell\'entità per il contenitore","use_entity_color_for_container_background_description":"Utilizzare l\'attributo colore dell\'entità per lo sfondo del contenitore quando disponibile","name_size":"Dimensione del nome","name_size_description":"Dimensione del nome del nome dell\'entità nei pixel"},"tabs":{"general":"Generale","appearance":"Aspetto","states":"Stati","active_state":"Stato Attivo","inactive_state":"Stato Inattivo"},"alignments":{"flex-start":"Sinistra","center":"Centro","flex-end":"Destra","space-between":"Spazio Tra","space-around":"Spazio Attorno","space-evenly":"Spazio Uniforme"},"vertical_alignments":{"flex-start":"Alto","center":"Medio","flex-end":"Basso"},"spacing":{"none":"Nessuno","small":"Piccolo","medium":"Medio","large":"Grande"},"text_positions":{"below":"Sotto l\'Icona","beside":"Accanto all\'Icona","none":"Nessun Testo","top":"In Alto","left":"A Sinistra","right":"A Destra"},"reset":{"size":"Ripristina dimensione predefinita","color":"Ripristina colore predefinito","all":"Ripristina valori predefiniti"},"click_actions":{"toggle":"Attiva/Disattiva","more-info":"Mostra Più Informazioni","navigate":"Naviga al Percorso","url":"Apri URL","call-service":"Chiama Servizio","perform-action":"Esegui Azione","location-map":"Mostra Mappa","assist":"Assistente Vocale","trigger":"Attiva","none":"Nessuna Azione","descriptions":{"toggle":"Attiva o disattiva lo stato dell\'entità.","more-info":"Apre la finestra di dialogo con informazioni aggiuntive sull\'entità.","navigate":"Naviga al percorso Lovelace specificato.","url":"Apre l\'URL specificato in una nuova scheda.","call-service":"Chiama il servizio Home Assistant specificato.","perform-action":"Esegue un\'azione personalizzata (vedi documentazione).","location-map":"Mostra la posizione dell\'entità su una mappa.","assist":"Apre l\'assistente vocale di Home Assistant.","trigger":"Attiva l\'entità (automazione, script, pulsante, ecc).","none":"Nessuna azione verrà eseguita."}},"backgrounds":{"none":"Nessuno","circle":"Cerchio","square":"Quadrato","rounded_square":"Quadrato Arrotondato"},"container_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"},"row_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"},"template_mode":"Modalità modello","template_mode_active_description":"Usa un modello per determinare quando questa icona dovrebbe essere attiva. I modelli consentono di utilizzare la sintassi del modello di assistente domestico per condizioni complesse.","template_mode_inactive_description":"Usa un modello per determinare quando questa icona dovrebbe essere inattiva. I modelli consentono di utilizzare la sintassi del modello di assistente domestico per condizioni complesse.","template_examples_header":"Esempi comuni:","enable_template_mode":"Abilita la modalità modello"},"customize":{"layout":{"title":"Stile layout","description":"Scegli tra vista a una o due colonne per la scheda","header":"Impostazioni layout"},"layout_types":{"single":"Colonna singola","double":"Doppia colonna","dashboard":"Dashboard","half_full":"Metà + pieno","full_half":"Full + metà"},"sections":{"header":"Sezioni della scheda","arrangement_header":"Disposizione sezioni","arrangement_desc_base":"Trascina le sezioni per organizzare il loro ordine sulla scheda.","arrangement_desc_single_extra":"Tutte le sezioni saranno visualizzate in una singola colonna.","arrangement_desc_double_extra":"Nella vista a due colonne, puoi posizionare ogni sezione nella colonna sinistra o destra.","arrangement_desc_dashboard_extra":"Nella vista dashboard, puoi posizionare le sezioni intorno all\'immagine del tuo veicolo."},"section_labels":{"title":"Titolo","image":"Immagine veicolo","info":"Informazioni veicolo","bars":"Tutte le barre sensori","icons":"Tutte le righe icone","section_break":"Interruzione della sezione"},"actions":{"collapse_margins":"Riduci margini","expand_margins":"Espandi margini","collapse_options":"Riduci opzioni","expand_options":"Espandi opzioni","add_break":"Aggiungi interruzione della sezione","delete_break":"Elimina la rottura della sezione"},"css":{"header":"CSS Globale","description":"Inserisci qui regole CSS personalizzate per sovrascrivere lo stile predefinito della scheda. Queste regole verranno applicate direttamente alla scheda. Usa con cautela.","label":"CSS Personalizzato","input_description":"Inserisci qui le tue regole CSS personalizzate."},"conditions":{"header":"Logica condizionale","description":"Mostra o nascondi questa sezione in base allo stato di un\'entità.","type_label":"Tipo condizione","entity_label":"Entità condizione","state_label":"Stato condizione","types":{"none":"Nessuna (Mostra sempre)","show":"Mostra quando...","hide":"Nascondi quando..."}},"margins":{"header":"Margini","top":"Margine superiore","bottom":"Margine inferiore"},"columns":{"left":"Colonna sinistra","right":"Colonna destra","empty":"Rilascia sezioni qui"},"column_width":{"title":"Larghezza colonne","description":"Configura il rapporto di larghezza tra le colonne sinistra e destra","50_50":"Uguale (50/50)","30_70":"Stretta sinistra, larga destra (30/70)","70_30":"Larga sinistra, stretta destra (70/30)","40_60":"Leggermente più stretta sinistra (40/60)","60_40":"Leggermente più larga sinistra (60/40)"},"dashboard":{"top":"Sezione superiore","top_middle":"Sezione superiore-centrale","left_middle":"Sezione sinistra-centrale","middle":"Sezione centrale","middle_empty":"Area immagine veicolo (Consigliato)","right_middle":"Sezione destra-centrale","bottom_middle":"Sezione inferiore-centrale","bottom":"Sezione inferiore"},"top_view":{"header":"Impostazioni dashboard","description":"Configura le impostazioni di spaziatura e layout per la vista dashboard","side_margin":"Margini laterali","side_margin_help":"Margini sui lati della vista in pixel","middle_spacing":"Spaziatura centrale","middle_spacing_help":"Spazio tra le colonne centrali in pixel","vertical_spacing":"Spaziatura verticale","vertical_spacing_help":"Spazio tra le righe in pixel"},"break_styles":{"blank":"Vuoto (nessuna riga)","line":"Linea continua","double_line":"Doppia linea","dotted":"Linea tratteggiata","double_dotted":"Linea doppia punteggiata","shadow":"Gradiente ombra"},"break_style":{"header":"Stile di rottura","style_label":"Stile","thickness_label":"Spessore","width_percent_label":"Larghezza (%)","color_label":"Colore"},"half_full":{"row1":"Row 1 (Split)","row1_col1":"Row 1 - Left Column","row1_col2":"Row 1 - Right Column","row2":"Row 2 (Full Width)","row2_full":"Riga 2, larghezza completa (100%)"},"full_half":{"row1":"Row 1 (Full Width)","row2":"Row 2 (Split)","row2_col1":"Row 2 - Left Column","row2_col2":"Row 2 - Right Column","row1_full":"Riga 1, larghezza completa (100%)"},"title":"Personalizza il layout","description":"Personalizza il layout, ordina e aggiungi sezioni alla tua carta","condition_prompt":"Seleziona \\"Mostra\\" o \\"nascondi\\" per configurare la condizione di entità"},"container_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"},"row_widths":{"25":"25% di Larghezza","50":"50% di Larghezza","75":"75% di Larghezza","100":"100% (Larghezza Piena)"},"info":{"arrange_info_rows":"Organizza le righe delle informazioni","title":"Informazioni sulla carta","description":"Configurare le righe e le entità di informazioni per visualizzare i dettagli del veicolo come posizione, chilometraggio, ecc. Gli elementi di informazioni verranno visualizzati su una singola riga, quando possibile, avvolgendo più linee in contenitori stretti.","template_mode":"Modalità modello","template_mode_description":"Utilizzare un modello per formattare il valore dell\'entità. I modelli consentono di utilizzare la sintassi del modello di assistente domestico per la formattazione complessa.","template_examples_header":"Esempi comuni:"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Sviluppato da","discord_button":"Unisciti al nostro Discord","github_button":"Visita il nostro Github","docs_button":"Leggi la nostra documentazione","support_title":"Supporta Ultra Vehicle Card","support_para":"Le tue generose donazioni permettono lo sviluppo di fantastiche funzionalità per questa scheda! Senza il supporto di utenti come te, l\'innovazione continua non sarebbe possibile.","donate_button":"DONA (PAYPAL)","support_description":"I tuoi generosi suggerimenti alimentano lo sviluppo di incredibili funzionalità per questa carta! Senza supporto da utenti come te, l\'innovazione continua non sarebbe possibile."},"custom_icons":{"title":"Icone personalizzate","description":"Definisci icone personalizzate per diversi stati.","icon_entity":"Entità icona","default_icon":"Icona predefinita","state_icons":"Icone stato","state":"Stato","icon":"Icona"},"custom_active_state_text":"Testo personalizzato stato attivo","custom_inactive_state_text":"Testo personalizzato stato inattivo","image_settings":{"title":"Impostazioni immagine","description":"Configura l\'aspetto dell\'immagine principale.","type":"Tipo immagine","width":"Larghezza immagine","crop":"Ritaglia immagine","entity":"Entità immagine","entity_description":"Entità che fornisce l\'URL dell\'immagine","text_color":"Entity Color","text_color_description":"Color for the entity value","name_color":"Name Color","name_color_description":"Color for the entity name label","icon_color":"Icon Color"},"entity_settings":{"entity":"Entità","entity_description":"Seleziona un\'entità per visualizzare le informazioni da cui","name":"Name","name_description":"Sostituire il nome dell\'entità (lascia vuoto per usare il nome amichevole dell\'entità)","icon":"Icona","icon_placeholder":"mdi:power-plug","show_icon":"Icona di mostra","show_name":"Mostrare il nome","show_name_description":"Visualizza il nome dell\'entità prima del valore","click_action":"Click Action","more_info":"More Info","navigate":"Navigate","url":"URL (External)","url_path":"URL","call_service":"Call Service","none":"None","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to when clicked (e.g., /lovelace/0)","url_description":"URL to open when clicked","service":"Service","service_description":"Service to call (e.g., light.turn_on)","service_data":"Service Data (JSON)","template_mode":"Use Template for Value","template_mode_description":"Usa un modello per formattare il valore dell\'entità","value_template":"Modello di valore","template_header":"Modello di valore","template_examples_header":"Template Examples","template_basic":"Valore di base","template_units":"Con unità","template_round":"Round a 1 decimale","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Entity Size","text_size_description":"Size of the entity value text in pixels","name_size":"Name Size","name_size_description":"Size of the entity name text in pixels","icon_color":"Colore icona","name_color":"Nome colore","text_color":"Entity Color","size_settings":"Size Settings","color_settings":"Color Settings","entity_color":"Colore di entità"}}');var ct=o.t(dt,2);const pt=JSON.parse('{"editor":{"tabs":{"settings":"Indstillinger","bars":"Bjælker","icons":"Ikoner","customize":"Tilpas","about":"Om","info":"Info"},"settings_subtabs":{"general":"Generelt","action_images":"Handlingsbilleder"},"action_images":{"title":"Aktionsbillede-indstillinger","description":"Konfigurer billeder, der vises når specifikke entitetstilstande er opfyldt.","add_image":"Tilføj aktionsbillede","no_images":"Ingen aktionsbilleder konfigureret endnu. Tilføj et for at komme i gang.","entity_settings":"Entitetsindstillinger","entity_placeholder":"Vælg en entitet","state_placeholder":"Indtast tilstandsværdi","image_settings":"Billedindstillinger","image_type":{"title":"Billedtype","description":"Vælg hvordan billedet skal leveres","upload":"Upload billede","url":"Billed-URL","entity":"Entitetsbillede","none":"Ingen"},"delete_confirm":"Er du sikker på, at du vil slette dette aktionsbillede?","actions":{"duplicate":"Duplikér","delete":"Slet","expand":"Udvid","collapse":"Fold sammen","drag":"Træk for at ændre rækkefølge"},"preview":{"no_entity":"Ingen entitet valgt","any_state":"Enhver tilstand","no_image":"Intet billede"},"template_mode":"Template Mode","template_description":"Use a template to determine when this image should be shown. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","template_label":"Vis skabelon","template_help":"Enter a template that returns true/false. This image will be shown when the template evaluates to true. Use Jinja2 syntax: {{ states(...) }}"},"card_settings":{"title":"Korttitel","title_alignment":"Titeljustering","title_size":"Titelstørrelse","title_description":"Titel vist øverst på kortet (valgfrit)","title_alignment_description":"Hvordan korttitlen er justeret","title_size_description":"Størrelse af korttitlen i pixels","format_entities":"Formater enhedsværdier","format_entities_description":"Aktivér yderligere formatering af enhedsværdier (tilføjer kommaer, konverterer enheder osv.)","show_units":"Vis enheder","show_units_description":"Vis enheder ved siden af værdier","help_highlight":"Hjælpe med at fremhæve","help_highlight_description":"Vis visuelle højdepunkter, når du skifter mellem redaktørfaner for at hjælpe med at identificere, hvilket afsnit du redigerer"},"vehicle_info":{"title":"Køretøjsinformation","location":{"title":"Placerings-entitet","description":"Vælg den entitet, der viser køretøjets aktuelle placering.","show":"Vis placering","show_description":"Vis køretøjets placering"},"mileage":{"title":"Kilometerstand-entitet","description":"Vælg den entitet, der repræsenterer køretøjets samlede kilometertal eller kilometertæller.","show":"Vis kilometerstand","show_description":"Vis køretøjets kilometerstand"},"car_state":{"title":"Køretøjstilstands-entitet","description":"Vælg den entitet, der repræsenterer køretøjets aktuelle tilstand (f.eks. parkeret, kører, oplader).","show":"Vis køretøjets tilstand","show_description":"Vis køretøjets tilstand"}},"images":{"common":{"url_description":"Indtast URL\'en til billedet","width_description":"Bredde som en procentdel af kortet","width_over_100":"Værdier over 100% kan hjælpe med at afgrøde tomt rum omkring billeder"},"vehicle":{"title":"Køretøjsbillede","description":"Konfigurer hovedbilledet, der vises for køretøjet.","type":"Køretøjsbilledtype","width":"Billedbredde","crop":"Beskær billede","entity":"Billedentitet","entity_description":"Entitet, der leverer billed-URL\'en"}},"crop":{"title":"Billedbeskæring","top":"Top","right":"Højre","bottom":"Bund","left":"Venstre","pixels":"PX","help":"Indtast værdier i pixels (positive eller negative) for at justere beskæring og padding"},"alignment":{"left":"Venstre","center":"Centreret","right":"Højre"},"common":{"choose_file":"Vælg fil","no_file_chosen":"Ingen fil valgt","entity":"Entitet","width":"Bredde","width_description":"Bredde som en procentdel af kortet","width_over_100":"Værdier over 100% kan hjælpe med at afgrøde tomt rum omkring billeder","none":"Ingen","default":"Standard","upload":"Upload","url":"URL","url_description":"URL der peger på billedet","reset":"Nulstil","condition_prompt":"Vælg \\"Vis\\" eller \\"Skjul\\" for at konfigurere enhedstilstand"},"bars":{"title":"Procentbjælker","description":"Tilføj procentbjælker for at vise værdier som brændstofniveau, batteriopladning eller rækkevidde. Hver bjælke kan vise en primær procentværdi med valgfri etiketter til venstre og højre.","add":"Tilføj ny bjælke","duplicate":"Duplikér bjælke","delete":"Slet bjælke","expand":"Udvid bjælke","collapse":"Fold bjælke sammen","bar_prefix":"Bjælke","no_entity":"Ingen entitet valgt","bar_radius":{"round":"Rund","square":"Firkantet","rounded-square":"Afrundet firkant"},"tabs":{"config":"Konfiguration","colors":"Farver","animation":"Animation"},"settings":{"header":"Bjælkeindstillinger","entity":"Bjælke-procententitet","entity_description":"Vælg en entitet, der returnerer en procentværdi (0-100). Dette styrer bjælkens udfyldningsniveau.","limit_entity":"Grænseværdi-entitet (valgfri)","limit_entity_description":"Valgfri: Tilføj en vertikal indikatorlinje på bjælken (f.eks. opladningsgrænse for elbilbatteri).","limit_color":"Grænseindikatorfarve","limit_color_description":"Farve på den vertikale linje, der viser grænsens position på bjælken. Ændringer vil tvinge en kortopdatering.","bar_size":"Bjælkestørrelse","bar_size_description":"Definerer tykkelsen/højden af fremskridtsbjælken.","bar_radius":"Bjælkeradius","bar_radius_description":"Form på fremskridtsbjælkens hjørner","width":"Bjælkebredde","width_description":"Definerer bredden af bjælken som en procentdel af kortets bredde.","alignment":"Etikettilpasning","alignment_description":"Hvordan venstre og højre etiketter justeres i forhold til hinanden.","show_percentage":"Vis procent","show_percentage_description":"Vis procentværdien inde i bjælken"},"percentage":{"header":"Procenttekst","display_header":"Procenttekstvisning","display_description":"Styr synligheden og udseendet af procentværdier vist direkte på bjælken. Disse tal giver en klar visuel indikator for det aktuelle niveau.","text_size":"Tekststørrelse","calculation_header":"Procentberegning","calculation_description":"Konfigurer, hvordan bjælkens procentfyldningsniveau beregnes ved hjælp af en af nedenstående muligheder.","type_header":"Procentberegning","type_label":"Procenttype","type_description":"Hvordan procentværdien vist i bjælken beregnes","type_entity":"Entitet (0-100)","type_difference":"Forskel (Mængde/Total)","amount_entity":"Mængdeentitet","amount_description":"Entitet, der repræsenterer den aktuelle mængde/værdi (tæller)","total_entity":"Totalentitet","total_description":"Entitet, der repræsenterer den samlede mængde/maksimum (nævner)"},"left_side":{"header":"Venstre side","section_description":"Konfigurer titel og entitetsværdi, der vises på venstre side af bjælken. Dette er nyttigt til at vise etiketter som \'Rækkevidde\' eller \'Batteri\' sammen med deres værdier.","toggle_description":"Vis eller skjul venstre side af bjælkeetiketten","title":"Venstre titel","title_description":"Valgfri etiket, der vises på venstre side under bjælken.","entity":"Venstre entitet","entity_description":"Entitet, hvis værdi vises på venstre side af bjælken.","alignment_description":"Styrer, hvordan denne etiket justeres under bjælken.","title_size":"Titelstørrelse","value_size":"Værdistørrelse","hidden_message":"Venstre side er skjult"},"right_side":{"header":"Højre side","section_description":"Konfigurer titel og entitetsværdi, der vises på højre side af bjælken. Dette er ideelt til supplerende information som \'Tid til fuld\' eller sekundære målinger.","toggle_description":"Vis eller skjul højre side af bjælkeetiketten","title":"Højre titel","title_description":"Valgfri etiket, der vises på højre side under bjælken.","entity":"Højre entitet","entity_description":"Entitet, hvis værdi vises på højre side af bjælken.","alignment_description":"Styrer, hvordan denne etiket justeres under bjælken.","title_size":"Titelstørrelse","value_size":"Værdistørrelse","hidden_message":"Højre side er skjult"},"colors":{"header":"Farver","bar_color":"Bjælkefarve","background_color":"Baggrundsfarve","border_color":"Kantfarve","limit_indicator_color":"Grænseindikatorfarve","left_title_color":"Venstre titelfarve","left_value_color":"Venstre værdifarve","right_title_color":"Højre titelfarve","right_value_color":"Højre værdifarve","percentage_text_color":"Procenttekstfarve","reset_color":"Nulstil til standardfarve"},"gradient":{"header":"Gradient-tilstand","description":"Skab smukke farveovergange på dine fremskridtsbjælker. Ideel til at vise batteriniveauer, brændstofmålere eller enhver statusindikator, der kræver visuel fremhævning.","toggle":"Brug gradient","toggle_description":"Brug en gradient til fremskridtsbjælken i stedet for en enkelt farve","display_mode":"Gradient-visningstilstand","display_mode_full":"Fuld","display_mode_value_based":"Værdibaseret","display_mode_description":"Fuld: Viser hele gradienten. Værdibaseret: Viser gradient op til den aktuelle værdi.","editor_header":"Gradient-editor","add_stop":"Tilføj stop","display_mode_cropped":"Beskåret"},"animation":{"header":"Handlingsanimation","description":"Tilføj animationer til bjælken, når en specifik entitet når en specifik tilstand. Perfekt til at vise opladningstilstande, alarmtilstande og mere.","pro_tip":"Pro-tip: For \'altid tændt\' animationer, vælg en animationstype, men lad entitets- og tilstandsfelterne stå tomme. Prøv \'Bobler\' og \'Fyld\' animationerne!","entity":"Animationsentitet","entity_description":"Entitet, der udløser animationen, når den matcher den angivne tilstand","state":"Entitetstilstand","state_description":"Når entitetstilstanden matcher denne værdi, vil animationen blive udløst","type":"Animationstype","type_description":"Den animationseffekt, der skal vises, når entitetstilstanden matcher","select_entity_prompt":"Vælg en entitet, og indtast den tilstand, du ønsker skal udløse animationen (eksempler: \\"charging\\", \\"on\\", \\"idle\\")","action_entity":"Handlingsenhed","action_state":"Handlingstilstand","action_description":"Denne animation tilsidesætter den almindelige animation, når den specificerede enhed er i en bestemt tilstand.","action_entity_prompt":"Vælg en handlingsenhed og stat for at definere, hvornår denne animation skal tilsidesætte den almindelige animation"},"bar_sizes":{"thin":"Tynd","regular":"Normal","thick":"Tyk","thiccc":"Ekstra tyk"},"bar_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (fuld bredde)"},"bar_alignments":{"space-between":"Mellemrum imellem","flex-start":"Venstre","center":"Centreret","flex-end":"Højre"},"bar_styles":{"flat":"Flad (standard)","glossy":"Blank","embossed":"Relief","inset":"Indsat","gradient":"Gradient-overlay","neon":"Neon-glød","outline":"Kontur","glass":"Glas","metallic":"Metallisk","neumorphic":"Neumorfisk"},"animation_types":{"none":"Ingen","charging-lines":"Opladning (diagonale linjer)","pulse":"Puls","blinking":"Blinker","bouncing":"Hopser","glow":"Glød","rainbow":"Regnbue","bubbles":"Bobler","fill":"Fyld"},"custom_bar_settings":{"title":"Tilpassede bjælkeindstillinger","description":"Definer tilpassede konfigurationer for individuelle bjælker.","name":"Bjælkenavn","entity":"Entitet","unit":"Enhed","min":"Min. værdi","max":"Maks. værdi","thresholds":"Tærskelværdier","severity":"Alvorlighedskort"},"template":{"description":"Brug en skabelon til at formatere den viste tekst, konvertere enheder eller vise beregnede værdier.","enable":"Aktivér skabelontilstand","template_label":"Skabelon","helper_text":"Use Home Assistant templating syntax. Examples:\\n• {{ states(\'sensor.temperature\') | float * 1.8 + 32 }} °F\\n• {{ now().strftime(\\"%b %d, %H:%M\\") }}","examples_header":"Almindelige eksempler:","examples":{"temperature":"{{ states(\'sensor.temperature\') | float * 1.8 + 32 }}°F - Convert Celsius to Fahrenheit","datetime":"{{ now().strftime(\\"%b %d, %H:%M\\") }} - Format current date/time","power":"{{ \'Charging at \' + states(\'sensor.ev_power\') + \' kW\' }} - Combine text and sensor value"}}},"icons":{"title":"Kortikoner","description":"Tilføj ikonrækker for at vise flere ikoner på dit kort. Hver række kan konfigureres med forskellige indstillinger. Bemærk: Ikonrækker og sektionsrækkefølge kan omarrangeres i Tilpas-fanen.","add_row":"Tilføj ikonrække","duplicate_row":"Duplikér række","delete_row":"Slet række","expand_row":"Udvid række","collapse_row":"Fold række sammen","no_row":"Ingen ikonrækker er blevet tilføjet","row_prefix":"Række","icon_prefix":"Ikon","row_settings":{"header":"Rækkeindstillinger","width":"Rækkebredde","width_description":"Bredde af rækken som en procentdel af kortets bredde","alignment":"Rækkejustering","alignment_description":"Hvordan ikoner justeres i denne række","spacing":"Ikonafstand","spacing_description":"Mængden af plads mellem ikoner i denne række","columns":"Kolonneantal","columns_description":"Antal lige store kolonner i rækken (0 = automatisk fordeling baseret på indhold)","confirmation_mode":"Bekræftelsestilstand","confirmation_mode_description":"Kræv to tryk/klik for at aktivere ikoner i denne række, hvilket forhindrer utilsigtede interaktioner","layout_info_title":"Hvordan layoutindstillinger fungerer"},"add_icon":"Tilføj ikon","duplicate_icon":"Duplikér ikon","delete_icon":"Slet ikon","expand_icon":"Udvid ikon","collapse_icon":"Fold ikon sammen","no_icon":"Intet ikon valgt","icon_settings":{"header":"Ikonliste","entity":"Entitet","entity_description":"Entitet vist med dette ikon","icon":"Ikon","icon_description":"Vælg et ikon eller indtast et brugerdefineret ikon","name":"Navn","name_description":"Brugerdefineret navn vist under ikonet (bruger entitetsnavn som standard, hvis ikke angivet)","show_name":"Vis navn","show_name_description":"Vis navneteksten under ikonet","show_state":"Vis tilstand","show_state_description":"Vis entitetstilstanden under ikonet","show_units":"Vis enheder","show_units_description":"Medtag enheder når tilstanden vises","text_position":"Tekstposition","text_position_description":"Hvor navn- og tilstandsteksten er placeret i forhold til ikonet","click_action":"Klikhandling","service":"Service","service_description":"Service der skal kaldes (f.eks. light.turn_on)","service_data":"Servicedata (JSON)","service_data_description":"JSON-data sendt med servicekald","action":"Handling (JSON/Service)","action_description":"Avanceret handlingskonfiguration (se dokumentation)","navigation_path":"Navigationssti","navigation_path_description":"Sti at navigere til (f.eks. /lovelace/dashboard)","url":"URL","url_description":"URL der skal åbnes i en ny fane","automation_entity":"Automationsentitet","automation_entity_description":"Automation der skal udløses ved klik"},"icon_appearance":{"header":"Ikonudseende","icon":"Ikonudseende","general":"Generelt udseende","active":"Aktiv tilstand","inactive":"Inaktiv tilstand","state_conditions":"Tilstandsbetingelser","advanced":"Avancerede indstillinger","icon_size":"Ikonstørrelse","icon_size_description":"Størrelse på ikonet i pixels","text_size":"Tekststørrelse","text_size_description":"Størrelse på navn/tilstandsteksten i pixels","text_alignment":"Tekstjustering","text_alignment_description":"Hvordan teksten er justeret under ikonet","icon_background":"Ikonbaggrund","icon_background_description":"Tilføj en baggrundsform bag ikonet","icon_background_color":"Ikonbaggrundsfarve","icon_background_color_description":"Farve på baggrunden bag ikonet","container_background_color":"Container-baggrundsfarve","container_background_color_description":"Farve på baggrunden bag hele ikoncontaineren","text_appearance":"Tekstudseende","container":{"header":"Container-udseende","vertical_alignment":"Vertikal justering","vertical_alignment_description":"Justér ikonet og teksten vertikalt inden for containeren.","width":"Container-bredde","width_description":"Indstil bredden af ikoncontaineren i forhold til rækken.","background":"Container-baggrundsform","background_description":"Vælg en baggrundsform for hele ikoncontaineren."},"show_when_active":"Vis ikon når aktivt","show_when_active_description":"Vis kun dette ikon, når det er i en aktiv tilstand","template_mode":"Skabelontilstand","template_description":"Use a template to determine active/inactive state. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","active_template":"Aktiv skabelon","active_template_description":"Skabelon der returnerer sand, når ikonet skal være aktivt.","active_state":"Aktiv tilstand","active_state_description":"Tilstandsstreng der repræsenterer \\"aktiv\\".","active_state_text":"Brugerdefineret aktiv tilstandstekst","active_state_text_description":"Tilsidesætter teksten, der vises, når ikonet er aktivt. Lad stå tomt for at bruge den faktiske tilstand.","inactive_template":"Inaktiv skabelon","inactive_template_description":"Skabelon der returnerer sand, når ikonet skal være inaktivt.","inactive_state":"Inaktiv tilstand","inactive_state_description":"Tilstandsstreng der repræsenterer \\"inaktiv\\".","inactive_state_text":"Brugerdefineret inaktiv tilstandstekst","inactive_state_text_description":"Tilsidesætter teksten, der vises, når ikonet er inaktivt. Lad stå tomt for at bruge den faktiske tilstand.","active_icon":"Aktivt ikon","inactive_icon":"Inaktivt ikon","active_icon_color":"Aktiv ikonfarve","inactive_icon_color":"Inaktiv ikonfarve","active_name_color":"Aktiv navnefarve","inactive_name_color":"Inaktiv navnefarve","active_state_color":"Aktiv tilstandsfarve","inactive_state_color":"Inaktiv tilstandsfarve","show_icon_active":"Vis ikon når aktivt","show_icon_active_description":"Vis ikonet, når tilstanden er aktiv.","show_icon_inactive":"Vis ikon når inaktivt","show_icon_inactive_description":"Vis ikonet, når tilstanden er inaktiv.","custom_active_state_text":"Brugerdefineret aktiv tilstandstekst","custom_inactive_state_text":"Brugerdefineret inaktiv tilstandstekst","action_description":"Handling der skal udføres, når der klikkes på ikonet.","show_name_active":"Vis navn når aktivt","show_name_active_description":"Vis navnet, når tilstanden er aktiv.","show_name_inactive":"Vis navn når inaktivt","show_name_inactive_description":"Vis navnet, når tilstanden er inaktiv.","show_state_active":"Vis tilstand når aktiv","show_state_active_description":"Vis tilstanden, når tilstanden er aktiv.","show_state_inactive":"Vis tilstand når inaktiv","show_state_inactive_description":"Vis tilstanden, når tilstanden er inaktiv.","use_entity_color_for_icon":"Brug enhedsfarve til ikonet","use_entity_color_for_icon_description":"Use the entity\'s color attribute for the icon when available","use_entity_color_for_icon_background":"Brug enhedsfarve til ikonbaggrund","use_entity_color_for_icon_background_description":"Brug virksomhedens farveattribut til ikonbaggrunden, når den er tilgængelig","use_entity_color_for_container_background":"Brug enhedsfarve til container","use_entity_color_for_container_background_description":"Brug virksomhedens farveattribut til containerbaggrunden, når den er tilgængelig","name_size":"Navnestørrelse","name_size_description":"Størrelse på enhedens navnekst i pixels"},"tabs":{"general":"Generelt","appearance":"Udseende","states":"Tilstande","active_state":"Aktiv tilstand","inactive_state":"Inaktiv tilstand"},"alignments":{"flex-start":"Venstre","center":"Centreret","flex-end":"Højre","space-between":"Mellemrum imellem","space-around":"Mellemrum omkring","space-evenly":"Mellemrum jævnt fordelt"},"vertical_alignments":{"flex-start":"Top","center":"Midte","flex-end":"Bund"},"spacing":{"none":"Ingen","small":"Lille","medium":"Medium","large":"Stor"},"text_positions":{"below":"Under ikon","beside":"Ved siden af ikon","none":"Ingen tekst","top":"På toppen","left":"Til venstre","right":"Til højre"},"reset":{"size":"Nulstil til standardstørrelse","color":"Nulstil til standardfarve","all":"Nulstil til standardværdier"},"click_actions":{"toggle":"Skift","more-info":"Vis mere info","navigate":"Navigér til sti","url":"Åbn URL","call-service":"Kald service","perform-action":"Udfør handling","location-map":"Vis kort","assist":"Stemmeassistent","trigger":"Udløs","none":"Ingen handling","descriptions":{"toggle":"Skift entitetens tilstand til og fra.","more-info":"Åbner dialogboksen med yderligere information om entiteten.","navigate":"Navigér til den angivne Lovelace-sti.","url":"Åbner den angivne URL i en ny fane.","call-service":"Kalder den angivne Home Assistant-service.","perform-action":"Udfør en brugerdefineret handling (se dokumentation).","location-map":"Vis entitetens placering på et kort.","assist":"Åbn Home Assistants stemmeassistent.","trigger":"Udløs entiteten (automation, script, knap, osv).","none":"Ingen handling vil blive udført."}},"backgrounds":{"none":"Ingen","circle":"Cirkel","square":"Firkant","rounded_square":"Afrundet firkant"},"container_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (fuld bredde)"},"row_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (fuld bredde)"},"template_mode":"Skabelontilstand","template_mode_active_description":"Brug en skabelon til at bestemme, hvornår dette ikon skal være aktivt. Skabeloner giver dig mulighed for at bruge Home Assistant Templating Syntax til komplekse forhold.","template_mode_inactive_description":"Brug en skabelon til at bestemme, hvornår dette ikon skal være inaktivt. Skabeloner giver dig mulighed for at bruge Home Assistant Templating Syntax til komplekse forhold.","template_examples_header":"Almindelige eksempler:","enable_template_mode":"Aktivér skabelontilstand"},"customize":{"layout":{"title":"Layoutstil","description":"Vælg mellem enkelt eller dobbelt kolonnevisning for kortet","header":"Layoutindstillinger"},"layout_types":{"single":"Enkelt kolonne","double":"Dobbelt kolonne","dashboard":"Dashboard","half_full":"Halv + fuld","full_half":"Fuld + halvdel"},"sections":{"header":"Kortsektioner","arrangement_header":"Sektionsarrangement","arrangement_desc_base":"Træk og slip sektioner for at arrangere deres rækkefølge på kortet.","arrangement_desc_single_extra":"Alle sektioner vil blive vist i en enkelt kolonne.","arrangement_desc_double_extra":"I dobbeltkolonnevisning kan du placere enhver sektion i venstre eller højre kolonne.","arrangement_desc_dashboard_extra":"I dashboardvisning kan du placere sektioner omkring dit køretøjsbillede."},"section_labels":{"title":"Titel","image":"Køretøjsbillede","info":"Køretøjsinfo","bars":"Alle sensorbjælker","icons":"Alle ikonrækker","section_break":"Afsnit Break"},"actions":{"collapse_margins":"Skjul margener","expand_margins":"Vis margener","collapse_options":"Skjul indstillinger","expand_options":"Vis indstillinger","add_break":"Tilføj sektionsbrud","delete_break":"Slet sektionsbrud"},"css":{"header":"Global CSS","description":"Indtast brugerdefinerede CSS-regler her for at overskrive standardkortets stil. Disse regler vil blive anvendt direkte på kortet. Brug med forsigtighed.","label":"Brugerdefineret CSS","input_description":"Indtast dine brugerdefinerede CSS-regler her."},"conditions":{"header":"Betinget logik","description":"Vis eller skjul denne sektion baseret på en enheds tilstand.","type_label":"Betingelsestype","entity_label":"Betingelsesenhed","state_label":"Betingelsestilstand","types":{"none":"Ingen (Vis altid)","show":"Vis når...","hide":"Skjul når..."}},"margins":{"header":"Margener","top":"Topmargen","bottom":"Bundmargen"},"columns":{"left":"Venstre kolonne","right":"Højre kolonne","empty":"Træk sektioner hertil"},"column_width":{"title":"Kolonnebredde","description":"Konfigurer breddeforholdet mellem venstre og højre kolonner","50_50":"Lige (50/50)","30_70":"Smal venstre, bred højre (30/70)","70_30":"Bred venstre, smal højre (70/30)","40_60":"Lidt smallere venstre (40/60)","60_40":"Lidt bredere venstre (60/40)"},"dashboard":{"top":"Topsektion","top_middle":"Top-midtersektion","left_middle":"Venstre-midtersektion","middle":"Midtersektion","middle_empty":"Køretøjsbilledeområde (Anbefalet)","right_middle":"Højre-midtersektion","bottom_middle":"Bund-midtersektion","bottom":"Bundsektion"},"top_view":{"header":"Dashboardindstillinger","description":"Konfigurer afstands- og layoutindstillinger for dashboardvisning","side_margin":"Sidemargener","side_margin_help":"Margener på siderne af visningen i pixels","middle_spacing":"Midterafstand","middle_spacing_help":"Afstand mellem midterkolonner i pixels","vertical_spacing":"Lodret afstand","vertical_spacing_help":"Afstand mellem rækker i pixels"},"break_styles":{"blank":"Blank (ingen linje)","line":"Solid linje","double_line":"Dobbelt linje","dotted":"Stiplet linje","double_dotted":"Dobbelt prikket linje","shadow":"Skygge gradient"},"break_style":{"header":"Break Style","style_label":"Stil","thickness_label":"Tykkelse","width_percent_label":"Bredde (%)","color_label":"Farve"},"half_full":{"row1":"Row 1 (Split)","row1_col1":"Row 1 - Left Column","row1_col2":"Row 1 - Right Column","row2":"Row 2 (Full Width)","row2_full":"Række 2, fuld bredde (100%)"},"full_half":{"row1":"Row 1 (Full Width)","row2":"Row 2 (Split)","row2_col1":"Row 2 - Left Column","row2_col2":"Row 2 - Right Column","row1_full":"Række 1, fuld bredde (100%)"},"title":"Tilpas layout","description":"Tilpas layout, bestil og tilføj sektioner til dit kort","condition_prompt":"Vælg \\"Vis\\" eller \\"Skjul\\" for at konfigurere enhedstilstand"},"container_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (fuld bredde)"},"row_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (fuld bredde)"},"info":{"arrange_info_rows":"Arranger info rækker","title":"Kortoplysninger","description":"Konfigurer informationsrækker og enheder til at vise køretøjsdetaljer som placering, kilometertal osv. Info -genstande vises på en enkelt linje, når det er muligt, indpakning til flere linjer i smalle containere.","template_mode":"Skabelontilstand","template_mode_description":"Brug en skabelon til at formatere enhedsværdien. Skabeloner giver dig mulighed for at bruge Home Assistant Templating Syntax til kompleks formatering.","template_examples_header":"Almindelige eksempler:"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Udviklet af","discord_button":"Tilslut dig vores Discord","github_button":"Besøg vores Github","docs_button":"Se vores dokumentation","support_title":"Støt Ultra Vehicle Card","support_para":"Dine gavmilde donationer driver utviklingen af fantastiske funktioner til dette kort! Uden støtte fra brugere som dig ville kontinuerlig innovation ikke være mulig.","donate_button":"DONÉR (PAYPAL)","support_description":"Dine generøse tip brændstof Udviklingen af ​​fantastiske funktioner til dette kort! Uden støtte fra brugere som dig ville fortsat innovation ikke være mulig."},"custom_icons":{"title":"Brugerdefinerede ikoner","description":"Definér brugerdefinerede ikoner for forskellige tilstande.","icon_entity":"Ikonenhed","default_icon":"Standardikon","state_icons":"Tilstandsikoner","state":"Tilstand","icon":"Ikon"},"custom_active_state_text":"Brugerdefineret aktiv tilstandstekst","custom_inactive_state_text":"Brugerdefineret inaktiv tilstandstekst","image_settings":{"title":"Billedindstillinger","description":"Konfigurer udseendet af hovedbilledet.","type":"Billedtype","width":"Billedbredde","crop":"Beskær billede","entity":"Billedenhed","entity_description":"Entitet, der leverer billed-URL","text_color":"Entity Color","text_color_description":"Color for the entity value","name_color":"Name Color","name_color_description":"Color for the entity name label","icon_color":"Icon Color"},"entity_settings":{"entity":"Enhed","entity_description":"Vælg en enhed for at få vist oplysninger fra","name":"Name","name_description":"Tilsidesæt enhedsnavnet (lad det være tomt for at bruge enhedens venlige navn)","icon":"Ikon","icon_placeholder":"mdi:power-plug","show_icon":"Vis ikon","show_name":"Vis navn","show_name_description":"Vis enhedsnavnet før værdien","click_action":"Click Action","more_info":"More Info","navigate":"Navigate","url":"URL (External)","url_path":"URL","call_service":"Call Service","none":"None","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to when clicked (e.g., /lovelace/0)","url_description":"URL to open when clicked","service":"Service","service_description":"Service to call (e.g., light.turn_on)","service_data":"Service Data (JSON)","template_mode":"Use Template for Value","template_mode_description":"Brug en skabelon til at formatere enhedsværdien","value_template":"Værdi skabelon","template_header":"Værdi skabelon","template_examples_header":"Template Examples","template_basic":"Grundlæggende værdi","template_units":"Med enheder","template_round":"Runde til 1 decimal","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Entity Size","text_size_description":"Size of the entity value text in pixels","name_size":"Name Size","name_size_description":"Size of the entity name text in pixels","icon_color":"Ikonfarve","name_color":"Navnfarve","text_color":"Entity Color","size_settings":"Size Settings","color_settings":"Color Settings","entity_color":"Enhedsfarve"}}');var gt=o.t(pt,2);const ht=JSON.parse('{"editor":{"tabs":{"settings":"Settings","bars":"Bars","icons":"Icons","customize":"Customise","about":"About","info":"Info"},"settings_subtabs":{"general":"General","action_images":"Action Images"},"action_images":{"title":"Action Images Settings","description":"Configure images that will display when specific entity states are met.","add_image":"Add Action Image","no_images":"No action images configured yet. Add one to get started.","entity_settings":"Entity Settings","entity_placeholder":"Select an entity","state_placeholder":"Enter state value","image_settings":"Image Settings","image_type":{"title":"Image Type","description":"Choose how to provide the image","upload":"Upload Image","url":"Image URL","entity":"Entity Image","none":"None"},"delete_confirm":"Are you sure you want to delete this action image?","actions":{"duplicate":"Duplicate","delete":"Delete","expand":"Expand","collapse":"Collapse","drag":"Drag to reorder"},"preview":{"no_entity":"No entity selected","any_state":"Any state","no_image":"No image"},"template_mode":"Template Mode","template_description":"Use a template to determine when this image should be shown. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","template_label":"Display Template","template_help":"Enter a template that returns true/false. This image will be shown when the template evaluates to true. Use Jinja2 syntax: {{ states(...) }}"},"card_settings":{"title":"Card Title","title_alignment":"Title Alignment","title_size":"Title Size","title_description":"Title displayed at the top of the card (optional)","title_alignment_description":"How the card title is aligned","title_size_description":"Size of the card title in pixels","format_entities":"Format Entity Values","format_entities_description":"Enable additional formatting of entity values (adds commas, converts units, etc.)","show_units":"Show Units","show_units_description":"Show units alongside values","help_highlight":"Help Highlight","help_highlight_description":"Show visual highlights when switching between editor tabs to help identify which section you are editing"},"vehicle_info":{"title":"Vehicle Information","location":{"title":"Location Entity","description":"Select the entity that shows the current location of the vehicle.","show":"Show Location","show_description":"Show the vehicle location"},"mileage":{"title":"Mileage Entity","description":"Select the entity that represents the total mileage or odometer of the vehicle.","show":"Show Mileage","show_description":"Show the vehicle mileage"},"car_state":{"title":"Vehicle State Entity","description":"Select the entity that represents the current state of the vehicle (e.g. parked, driving, charging).","show":"Show Vehicle State","show_description":"Show the vehicle state"}},"images":{"common":{"url_description":"Enter the URL of the image","width_description":"Width as a percentage of the card","width_over_100":"Values over 100% can help crop empty space around images"},"vehicle":{"title":"Vehicle Image","description":"Configure the main image displayed for the vehicle.","type":"Vehicle Image Type","width":"Image Width","crop":"Crop Image","entity":"Image Entity","entity_description":"Entity that provides the image URL"}},"crop":{"title":"Image Crop","top":"Top","right":"Right","bottom":"Bottom","left":"Left","pixels":"px","help":"Enter values in pixels (positive or negative) to adjust cropping and padding"},"alignment":{"left":"Left","center":"Centre","right":"Right"},"common":{"choose_file":"Choose File","no_file_chosen":"No file chosen","entity":"Entity","width":"Width","width_description":"Width as a percentage of the card","width_over_100":"Values over 100% can help crop empty space around images","none":"None","default":"Default","upload":"Upload","url":"URL","url_description":"URL pointing to the image","reset":"Reset","condition_prompt":"Select \\"Show\\" or \\"Hide\\" to configure entity condition"},"bars":{"title":"Percentage Bars","description":"Add percentage bars to display values like fuel level, battery charge, or range. Each bar can show a main percentage value with optional labels on the left and right.","add":"Add New Bar","duplicate":"Duplicate Bar","delete":"Delete Bar","expand":"Expand Bar","collapse":"Collapse Bar","bar_prefix":"Bar","no_entity":"No entity selected","bar_radius":{"round":"Round","square":"Square","rounded-square":"Rounded Square"},"tabs":{"config":"Configuration","colors":"Colors","animation":"Animation"},"settings":{"header":"Bar Settings","entity":"Bar Percentage Entity","entity_description":"Select an entity that returns a percentage value (0-100). This controls the bar\'s fill level.","limit_entity":"Limit Value Entity (optional)","limit_entity_description":"Optional: Add a vertical indicator line on the bar (e.g. charge limit for EV battery).","limit_color":"Limit Indicator Colour","limit_color_description":"Colour of the vertical line showing the limit position on the bar. Changes will force a card update.","bar_size":"Bar Size","bar_size_description":"Defines the thickness/height of the progress bar.","bar_radius":"Bar Radius","bar_radius_description":"Shape of the progress bar corners","width":"Bar Width","width_description":"Defines the width of the bar as a percentage of the card width.","alignment":"Label Alignment","alignment_description":"How the left and right labels align with each other.","show_percentage":"Show Percentage","show_percentage_description":"Show the percentage value inside the bar"},"percentage":{"header":"Percentage Text","display_header":"Percentage Text Display","display_description":"Control the visibility and appearance of percentage values shown directly on the bar. These numbers provide a clear visual indicator of the current level.","text_size":"Text Size","calculation_header":"Percentage Calculation","calculation_description":"Configure how the bar\'s percentage fill level is calculated using one of the options below.","type_header":"Percentage Calculation","type_label":"Percentage Type","type_description":"How to calculate the percentage value shown in the bar","type_entity":"Entity (0-100)","type_difference":"Difference (Amount/Total)","amount_entity":"Amount Entity","amount_description":"Entity representing the current amount/value (numerator)","total_entity":"Total Entity","total_description":"Entity representing the total amount/maximum (denominator)"},"left_side":{"header":"Left Side","section_description":"Configure the title and entity value displayed on the left side of the bar. This is useful for showing labels like \'Range\' or \'Battery\' along with their values.","toggle_description":"Show or hide the left side of the bar label","title":"Left Title","title_description":"Optional label displayed on the left side below the bar.","entity":"Left Entity","entity_description":"Entity whose value is displayed on the left side of the bar.","alignment_description":"Controls how this label is aligned under the bar.","title_size":"Title Size","value_size":"Value Size","hidden_message":"Left side is hidden"},"right_side":{"header":"Right Side","section_description":"Configure the title and entity value displayed on the right side of the bar. This is ideal for complementary information like \'Time to Full\' or secondary measurements.","toggle_description":"Show or hide the right side of the bar label","title":"Right Title","title_description":"Optional label displayed on the right side below the bar.","entity":"Right Entity","entity_description":"Entity whose value is displayed on the right side of the bar.","alignment_description":"Controls how this label is aligned under the bar.","title_size":"Title Size","value_size":"Value Size","hidden_message":"Right side is hidden"},"colors":{"header":"Colors","bar_color":"Bar Colour","background_color":"Background Colour","border_color":"Border Colour","limit_indicator_color":"Limit Indicator Colour","left_title_color":"Left Title Colour","left_value_color":"Left Value Colour","right_title_color":"Right Title Colour","right_value_color":"Right Value Colour","percentage_text_color":"Percentage Text Colour","reset_color":"Reset to default colour"},"gradient":{"header":"Gradient Mode","description":"Create beautiful colour transitions across your progress bars. Ideal for showing battery levels, fuel gauges, or any status indicator requiring visual emphasis.","toggle":"Use Gradient","toggle_description":"Use a gradient for the progress bar instead of a solid colour","display_mode":"Gradient Display Mode","display_mode_full":"Full","display_mode_value_based":"Value-Based","display_mode_description":"Full: Show the entire gradient. Value-based: Show the gradient up to the current value.","editor_header":"Gradient Editor","add_stop":"Add Stop","display_mode_cropped":"Cropped"},"animation":{"header":"Action Animation","description":"Add animations to the bar when a specific entity reaches a specific state. Perfect for showing charging states, alarm states, and more.","pro_tip":"Pro Tip: For \'always on\' animations, select an animation type but leave the entity and state fields empty. Try the \'Bubbles\' and \'Fill\' animations!","entity":"Animation Entity","entity_description":"Entity that triggers the animation when it matches the specified state","state":"Entity State","state_description":"When the entity state matches this value, the animation will be triggered","type":"Animation Type","type_description":"The animation effect to display when the entity state matches","select_entity_prompt":"Select an Entity and enter the state you want to trigger the animation (examples: \\"charging\\", \\"on\\", \\"idle\\")","action_entity":"Action Entity","action_state":"Action State","action_description":"This animation will override the regular animation when the specified entity is in a specific state.","action_entity_prompt":"Select an Action Entity and state to define when this animation should override the regular animation"},"bar_sizes":{"thin":"Thin","regular":"Regular","thick":"Thick","thiccc":"Extra Thick"},"bar_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"bar_alignments":{"space-between":"Space Between","flex-start":"Left","center":"Centre","flex-end":"Right"},"bar_styles":{"flat":"Flat (Default)","glossy":"Glossy","embossed":"Embossed","inset":"Inset","gradient":"Gradient Overlay","neon":"Neon Glow","outline":"Outline","glass":"Glass","metallic":"Metallic","neumorphic":"Neumorphic"},"animation_types":{"none":"None","charging-lines":"Charging (Diagonal Lines)","pulse":"Pulse","blinking":"Blinking","bouncing":"Bouncing","glow":"Glow","rainbow":"Rainbow","bubbles":"Bubbles","fill":"Fill"},"custom_bar_settings":{"title":"Custom Bar Settings","description":"Define custom configurations for individual bars.","name":"Bar Name","entity":"Entity","unit":"Unit","min":"Min Value","max":"Max Value","thresholds":"Thresholds","severity":"Severity Map"},"template":{"description":"Use a template to format the displayed text, convert units, or display calculated values.","enable":"Enable Template Mode","template_label":"Template","helper_text":"Use Home Assistant templating syntax. Examples:\\n• {{ states(\'sensor.temperature\') | float * 1.8 + 32 }} °F\\n• {{ now().strftime(\\"%b %d, %H:%M\\") }}","examples_header":"Common Examples:","examples":{"temperature":"{{ states(\'sensor.temperature\') | float * 1.8 + 32 }}°F - Convert Celsius to Fahrenheit","datetime":"{{ now().strftime(\\"%b %d, %H:%M\\") }} - Format current date/time","power":"{{ \'Charging at \' + states(\'sensor.ev_power\') + \' kW\' }} - Combine text and sensor value"}}},"icons":{"title":"Card Icons","description":"Add icon rows to display multiple icons on your card. Each row can be configured with different settings. Note: Icon rows and section order can be rearranged in the Customise tab.","add_row":"Add Icon Row","duplicate_row":"Duplicate Row","delete_row":"Delete Row","expand_row":"Expand Row","collapse_row":"Collapse Row","no_row":"No icon rows have been added","row_prefix":"Row","icon_prefix":"Icon","row_settings":{"header":"Row Settings","width":"Row Width","width_description":"Width of the row as a percentage of card width","alignment":"Row Alignment","alignment_description":"How icons are aligned in this row","spacing":"Icon Spacing","spacing_description":"Amount of space between icons in this row","columns":"Column Count","columns_description":"Number of evenly-sized columns in the row (0 = auto distribution based on content)","confirmation_mode":"Confirmation Mode","confirmation_mode_description":"Require two taps/clicks to activate icons in this row, preventing accidental interactions","layout_info_title":"How Layout Settings Work"},"add_icon":"Add Icon","duplicate_icon":"Duplicate Icon","delete_icon":"Delete Icon","expand_icon":"Expand Icon","collapse_icon":"Collapse Icon","no_icon":"No icon selected","icon_settings":{"header":"Icon List","entity":"Entity","entity_description":"Entity displayed with this icon","icon":"Icon","icon_description":"Select an icon or enter a custom icon","name":"Name","name_description":"Custom name displayed below the icon (uses entity name by default if not specified)","show_name":"Show Name","show_name_description":"Show the name text below the icon","show_state":"Show State","show_state_description":"Show the entity state below the icon","show_units":"Show Units","show_units_description":"Include units when showing state","text_position":"Text Position","text_position_description":"Where the name and state text is positioned relative to the icon","click_action":"Click Action","service":"Service","service_description":"Service to call (e.g. light.turn_on)","service_data":"Service Data (JSON)","service_data_description":"JSON data sent with the service call","action":"Action (JSON/Service)","action_description":"Advanced action configuration (see documentation)","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to (e.g. /lovelace/dashboard)","url":"URL","url_description":"URL to open in a new tab","automation_entity":"Automation Entity","automation_entity_description":"Automation to trigger when clicked"},"icon_appearance":{"header":"Icon Appearance","icon":"Icon Appearance","general":"General Appearance","active":"Active State","inactive":"Inactive State","state_conditions":"State Conditions","advanced":"Advanced Settings","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Entity Size","text_size_description":"Size of the entity value text in pixels","name_size":"Name Size","name_size_description":"Size of the entity name text in pixels","text_alignment":"Text Alignment","text_alignment_description":"How the text is aligned below the icon","icon_background":"Icon Background","icon_background_description":"Add a background shape behind the icon","icon_background_color":"Icon Background Colour","icon_background_color_description":"Colour of the background behind the icon","container_background_color":"Container Background Colour","container_background_color_description":"Colour of the background behind the entire icon container","text_appearance":"Text Appearance","container":{"header":"Container Appearance","vertical_alignment":"Vertical Alignment","vertical_alignment_description":"Align the icon and text vertically within the container.","width":"Container Width","width_description":"Set the width of the icon container relative to the row.","background":"Container Background Shape","background_description":"Choose a background shape for the entire icon container."},"show_when_active":"Show Icon When Active","show_when_active_description":"Only show this icon when it\'s in an active state","template_mode":"Template Mode","template_description":"Use a template to determine active/inactive state. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","active_template":"Active Template","active_template_description":"Template that returns true when the icon should be active.","active_state":"Active state","active_state_description":"State string that represents \\"active\\".","active_state_text":"Custom Active State Text","active_state_text_description":"Overrides the text displayed when the icon is active. Leave empty to use the actual state.","inactive_template":"Inactive Template","inactive_template_description":"Template that returns true when the icon should be inactive.","inactive_state":"Inactive state","inactive_state_description":"State string that represents \\"inactive\\".","inactive_state_text":"Custom Inactive State Text","inactive_state_text_description":"Overrides the text displayed when the icon is inactive. Leave empty to use the actual state.","active_icon":"Active icon","inactive_icon":"Inactive icon","active_icon_color":"Active Icon Colour","inactive_icon_color":"Inactive Icon Colour","active_name_color":"Active Name Colour","inactive_name_color":"Inactive Name Colour","active_state_color":"Active State Colour","inactive_state_color":"Inactive State Colour","show_icon_active":"Show icon when active","show_icon_active_description":"Display the icon when the state is active.","show_icon_inactive":"Show Icon When Inactive","show_icon_inactive_description":"Display the icon when the state is inactive.","custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","action_description":"Action to perform when the icon is clicked.","show_name_active":"Show Name When Active","show_name_active_description":"Display the name when the state is active.","show_name_inactive":"Show Name When Inactive","show_name_inactive_description":"Display the name when the state is inactive.","show_state_active":"Show State When Active","show_state_active_description":"Display the state when the state is active.","show_state_inactive":"Show State When Inactive","show_state_inactive_description":"Display the state when the state is inactive.","use_entity_color_for_icon":"Use Entity Colour for Icon","use_entity_color_for_icon_description":"Use this entity\'s colour attribute (if available) instead of the configured colour","use_entity_color_for_icon_background":"Use Entity Colour for Icon Background","use_entity_color_for_icon_background_description":"Use the entity\'s colour attribute for the icon background when available","use_entity_color_for_container_background":"Use Entity Colour for Container","use_entity_color_for_container_background_description":"Use the entity\'s colour attribute for the container background when available"},"tabs":{"general":"General","appearance":"Appearance","states":"States","active_state":"Active State","inactive_state":"Inactive State"},"alignments":{"flex-start":"Left","center":"Centre","flex-end":"Right","space-between":"Space Between","space-around":"Space Around","space-evenly":"Space Evenly"},"vertical_alignments":{"flex-start":"Top","center":"Middle","flex-end":"Bottom"},"spacing":{"none":"None","small":"Small","medium":"Medium","large":"Large"},"text_positions":{"below":"Below Icon","beside":"Beside Icon","none":"No Text","top":"On Top","left":"On Left","right":"On Right"},"reset":{"size":"Reset to default size","color":"Reset to default colour","all":"Reset to default values"},"click_actions":{"toggle":"Toggle","more-info":"Show More Info","navigate":"Navigate to Path","url":"Open URL","call-service":"Call Service","perform-action":"Perform Action","location-map":"Show Map","assist":"Voice Assistant","trigger":"Trigger","none":"No Action","descriptions":{"toggle":"Toggle the entity\'s state on and off.","more-info":"Opens the more info dialogue with additional information about the entity.","navigate":"Navigate to the specified Lovelace path.","url":"Opens the specified URL in a new tab.","call-service":"Call the specified Home Assistant service.","perform-action":"Perform a custom action (see documentation).","location-map":"Show the entity\'s location on a map.","assist":"Open Home Assistant\'s voice assistant.","trigger":"Trigger the entity (automation, script, button, etc).","none":"No action will be performed."}},"backgrounds":{"none":"None","circle":"Circle","square":"Square","rounded_square":"Rounded Square"},"container_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"row_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"template_mode":"Template Mode","template_mode_active_description":"Use a template to determine when this icon should be active. Templates allow you to use Home Assistant templating syntax for complex conditions.","template_mode_inactive_description":"Use a template to determine when this icon should be inactive. Templates allow you to use Home Assistant templating syntax for complex conditions.","template_examples_header":"Common Examples:","enable_template_mode":"Enable Template Mode"},"customize":{"layout":{"title":"Layout Style","description":"Choose between a single or double column layout for the card","header":"Layout Settings"},"layout_types":{"single":"Single Column","double":"Double Column","dashboard":"Top View","half_full":"Half + Full","full_half":"Full + Half"},"sections":{"header":"Card Sections","arrangement_header":"Section Arrangement","arrangement_desc_base":"Drag and drop sections to arrange their order on the card.","arrangement_desc_single_extra":"All sections will be displayed in a single column.","arrangement_desc_double_extra":"In a double column layout, you can place any section in the left or right column.","arrangement_desc_dashboard_extra":"In a Top View layout, you can place sections around your vehicle image."},"section_labels":{"title":"Title","image":"Vehicle Image","info":"Vehicle Information","bars":"All Sensor Bars","icons":"All Icon Rows","section_break":"Section Break"},"actions":{"collapse_margins":"Collapse Margins","expand_margins":"Expand Margins","collapse_options":"Collapse Options","expand_options":"Expand Options","add_break":"Add Section Break","delete_break":"Delete Section Break"},"css":{"header":"Global CSS","description":"Enter custom CSS rules here to override default card styling. These rules will be applied directly to the card. Use with caution.","label":"Custom CSS","input_description":"Enter your custom CSS rules here."},"conditions":{"header":"Conditional Logic","description":"Show or hide this section based on an entity\'s state.","type_label":"Condition Type","entity_label":"Condition Entity","state_label":"Condition State","types":{"none":"None (Always Show)","show":"Show When...","hide":"Hide When..."}},"margins":{"header":"Margins","top":"Top Margin","bottom":"Bottom Margin"},"columns":{"left":"Left Column","right":"Right Column","empty":"Drop sections here"},"column_width":{"title":"Column Width","description":"Configure the width ratio between left and right columns","50_50":"Equal (50/50)","30_70":"Narrow left, wide right (30/70)","70_30":"Wide left, narrow right (70/30)","40_60":"Slightly narrow left (40/60)","60_40":"Slightly wide left (60/40)"},"dashboard":{"top":"Top Section","top_middle":"Top Middle Section","left_middle":"Left Middle Section","middle":"Middle Section","middle_empty":"Vehicle Image Area (Recommended)","right_middle":"Right Middle Section","bottom_middle":"Bottom Middle Section","bottom":"Bottom Section"},"top_view":{"header":"Top View Layout Settings","description":"Configure the spacing and layout settings for top view","side_margin":"Side Margin","side_margin_help":"Margin on the sides of the view in pixels","middle_spacing":"Middle Spacing","middle_spacing_help":"Space between middle columns in pixels","vertical_spacing":"Vertical Spacing","vertical_spacing_help":"Space between rows in pixels"},"break_styles":{"blank":"Blank (No Line)","line":"Solid Line","double_line":"Double Line","dotted":"Dotted Line","double_dotted":"Double Dotted Line","shadow":"Shadow Gradient"},"break_style":{"header":"Break Style","style_label":"Style","thickness_label":"Thickness","width_percent_label":"Width (%)","color_label":"Colour"},"half_full":{"row1_col1":"Row 1, Left (50%)","row1_col2":"Row 1, Right (50%)","row2_full":"Row 2, Full Width (100%)"},"full_half":{"row1_full":"Row 1, Full Width (100%)","row2_col1":"Row 2, Left (50%)","row2_col2":"Row 2, Right (50%)"},"title":"Customize Layout","description":"Customize layout, order, and add sections to your card","condition_prompt":"Select \\"Show\\" or \\"Hide\\" to configure entity condition"},"container_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"row_widths":{"25":"25% Width","50":"50% Width","75":"75% Width","100":"100% (Full Width)"},"info":{"arrange_info_rows":"Arrange Info Rows","title":"Card Information","description":"Configure information rows and entities to display vehicle details like location, mileage, etc. Info items will display on a single line when possible, wrapping to multiple lines in narrow containers.","template_mode":"Template Mode","template_mode_description":"Use a template to format the entity value. Templates allow you to use Home Assistant templating syntax for complex formatting.","template_examples_header":"Common Examples:"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Developed by","discord_button":"Join Our Discord","github_button":"Visit Our Github","docs_button":"View Our Documentation","support_title":"Support Ultra Vehicle Card","support_para":"Your generous donations fuel incredible feature development for this card! Without support from users like you, continued innovation would not be possible.","donate_button":"DONATE (PAYPAL)","support_description":"Your generous tips fuel the development of amazing features for this card! Without support from users like you, continued innovation wouldn\'t be possible."},"custom_icons":{"title":"Custom Icons","description":"Define custom icons for different states.","icon_entity":"Icon Entity","default_icon":"Default Icon","state_icons":"State Icons","state":"State","icon":"Icon"},"custom_active_state_text":"Custom Active State Text","custom_inactive_state_text":"Custom Inactive State Text","image_settings":{"title":"Image Settings","description":"Configure the main image appearance.","type":"Image Type","width":"Image Width","crop":"Image Crop","entity":"Image Entity","entity_description":"Entity that provides the image URL"},"entity_settings":{"entity":"Entity","entity_description":"Select an entity to display information from","name":"Custom Name","name_description":"Override the entity name (leave blank to use entity\'s friendly name)","show_icon":"Show Icon","icon":"Icon","icon_color":"Icon Colour","name_color":"Name Colour","entity_color":"Entity Colour","text_color":"Text Colour","show_name":"Show Name","show_name_description":"Display the entity name before the value","template_mode":"Template Mode","template_mode_description":"Use a template to format the entity value","value_template":"Value Template","template_header":"Value Template","template_examples_header":"Common Examples:","template_basic":"Basic value","template_units":"With units","template_round":"Round to 1 decimal"}}');var mt=o.t(ht,2);const ut=JSON.parse('{"editor":{"tabs":{"settings":"Instellingen","bars":"Balken","icons":"Pictogrammen","customize":"Aanpassen","about":"Over","info":"Info"},"settings_subtabs":{"general":"Algemeen","action_images":"Actieafbeeldingen"},"action_images":{"title":"Actie Afbeeldingen Instellingen","description":"Configureer afbeeldingen die worden weergegeven wanneer aan specifieke entiteitstatus wordt voldaan.","add_image":"Actie Afbeelding Toevoegen","no_images":"Er zijn nog geen actie afbeeldingen geconfigureerd. Voeg er een toe om te beginnen.","entity_settings":"Entiteitsinstellingen","entity_placeholder":"Selecteer een entiteit","state_placeholder":"Voer statuswaarde in","image_settings":"Afbeeldingsinstellingen","image_type":{"title":"Afbeeldingstype","description":"Kies hoe de afbeelding wordt aangeleverd","upload":"Afbeelding Uploaden","url":"Afbeelding URL","entity":"Entiteit Afbeelding","none":"Geen"},"delete_confirm":"Weet je zeker dat je deze actie afbeelding wilt verwijderen?","actions":{"duplicate":"Dupliceren","delete":"Verwijderen","expand":"Uitklappen","collapse":"Inklappen","drag":"Slepen om te herordenen"},"preview":{"no_entity":"Geen entiteit geselecteerd","any_state":"Elke status","no_image":"Geen afbeelding"},"template_mode":"Template Mode","template_description":"Use a template to determine when this image should be shown. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","template_label":"Display -sjabloon","template_help":"Enter a template that returns true/false. This image will be shown when the template evaluates to true. Use Jinja2 syntax: {{ states(...) }}"},"card_settings":{"title":"Kaarttitel","title_alignment":"Titeluitlijning","title_size":"Titelgrootte","title_description":"Titel weergegeven bovenaan de kaart (optioneel)","title_alignment_description":"Hoe de kaarttitel wordt uitgelijnd","title_size_description":"Grootte van de kaarttitel in pixels","format_entities":"Entiteitswaarden formatteren","format_entities_description":"Schakelt extra formattering van entiteitswaarden in (voegt komma\'s toe, converteert eenheden, etc.)","show_units":"Eenheden tonen","show_units_description":"Toon eenheden naast waarden","help_highlight":"Help markeren","help_highlight_description":"Toon visuele hoogtepunten bij het schakelen tussen de tabbladen van de editor om te helpen identificeren welk gedeelte u bewerkt"},"vehicle_info":{"title":"Voertuiginformatie","location":{"title":"Locatie-entiteit","description":"Selecteer de entiteit die de huidige locatie van het voertuig weergeeft.","show":"Toon locatie","show_description":"Toon de locatie van het voertuig"},"mileage":{"title":"Kilometerstand-entiteit","description":"Selecteer de entiteit die de totale kilometerstand of de kilometerteller van het voertuig weergeeft.","show":"Toon kilometerstand","show_description":"Toon de kilometerstand van het voertuig"},"car_state":{"title":"Voertuigstatus-entiteit","description":"Selecteer de entiteit die de huidige status van het voertuig weergeeft (bijv. geparkeerd, rijdend, aan het opladen).","show":"Toon voertuigstatus","show_description":"Toon de status van het voertuig"}},"images":{"common":{"url_description":"Voer de URL van de afbeelding in","width_description":"Breedte als percentage van de kaart","width_over_100":"Waarden van meer dan 100% kunnen helpen om lege ruimte rond beelden bij te knippen"},"vehicle":{"title":"Voertuigafbeelding","description":"Configureer de primaire afbeelding die wordt weergegeven voor het voertuig.","type":"Type voertuigafbeelding","width":"Afbeeldingsbreedte","crop":"Afbeelding bijsnijden","entity":"Afbeeldingsentiteit","entity_description":"Entiteit die de afbeeldings-URL levert"}},"crop":{"title":"Afbeelding bijsnijden","top":"Boven","right":"Rechts","bottom":"Onder","left":"Links","pixels":"px","help":"Voer pixelwaarden in (positief of negatief) om bijsnijden en opvulling aan te passen"},"alignment":{"left":"Links","center":"Midden","right":"Rechts"},"common":{"choose_file":"Kies bestand","no_file_chosen":"Geen bestand gekozen","entity":"Entiteit","width":"Breedte","width_description":"Breedte als percentage van de kaart","width_over_100":"Waarden van meer dan 100% kunnen helpen om lege ruimte rond beelden bij te knippen","none":"Geen","default":"Standaard","upload":"Uploaden","url":"URL","url_description":"URL die naar de afbeelding verwijst","reset":"Resetten","condition_prompt":"Selecteer \\"Toon\\" of \\"verbergen\\" om entiteitsconditie te configureren"},"bars":{"title":"Percentagebalken","description":"Voeg percentagebalken toe om waarden zoals brandstofniveau, batterijlading of bereik weer te geven. Elke balk kan een primaire percentagewaarde weergeven met optionele labels links en rechts.","add":"Nieuwe balk toevoegen","duplicate":"Balk dupliceren","delete":"Balk verwijderen","expand":"Balk uitvouwen","collapse":"Balk samenvouwen","bar_prefix":"Balk","no_entity":"Geen entiteit geselecteerd","bar_radius":{"round":"Rond","square":"Vierkant","rounded-square":"Afgerond Vierkant"},"tabs":{"config":"Configuratie","colors":"Kleuren","animation":"Animatie"},"settings":{"header":"Balk Configuratie","entity":"Hoofdentiteit","entity_description":"Entiteit die de primaire waarde (0-100) voor de voortgangsbalk levert","limit_entity":"Limietentiteit","limit_entity_description":"Entiteit die een limietmarkering op de balk toont (bijv. oplaadlimiet)","limit_color":"Limietindicator Kleur","limit_color_description":"Kleur van de limietindicatorlijn","bar_size":"Balkdikte","bar_size_description":"Grootte/dikte van de voortgangsbalk","bar_radius":"Balkradius","bar_radius_description":"Vorm van de hoeken van de voortgangsbalk","width":"Balkbreedte","width_description":"Breedte van de voortgangsbalk als percentage van de beschikbare ruimte. Gebruik dit om meerdere balken naast elkaar te plaatsen.","alignment":"Label Uitlijning","alignment_description":"Hoe de labels op de voortgangsbalk worden uitgelijnd","show_percentage":"Percentage Tonen","show_percentage_description":"Toon de percentagewaarde in de balk"},"percentage":{"header":"Percentagetekst","display_header":"Percentagetekst Weergave","display_description":"Beheer de zichtbaarheid en het uiterlijk van percentagewaarden die direct op de balk worden weergegeven. Deze getallen bieden een duidelijke visuele indicator van het huidige niveau.","text_size":"Tekstgrootte","calculation_header":"Percentageberekening","calculation_description":"Configureer hoe het percentage vulniveau van de balk wordt berekend met een van de onderstaande opties.","type_header":"Percentageberekening","type_label":"Percentagetype","type_description":"Hoe de percentagewaarde in de balk wordt berekend","type_entity":"Entiteit (0-100)","type_difference":"Verschil (Hoeveelheid/Totaal)","amount_entity":"Hoeveelheidsentiteit","amount_description":"Entiteit die de huidige hoeveelheid/waarde vertegenwoordigt (teller)","total_entity":"Totaalentiteit","total_description":"Entiteit die de totale hoeveelheid/maximum vertegenwoordigt (noemer)"},"left_side":{"header":"Linkerkant","section_description":"Configureer de titel en entiteitswaarde die aan de linkerkant van de balk worden weergegeven. Dit is handig voor het weergeven van labels zoals \'Bereik\' of \'Batterij\' samen met hun waarden.","toggle_description":"Toon of verberg de linkerkant van het balklabel","title":"Linker Titel","title_description":"Optioneel label dat aan de linkerkant onder de balk wordt weergegeven.","entity":"Linker Entiteit","entity_description":"Entiteit waarvan de waarde aan de linkerkant van de balk wordt weergegeven.","alignment_description":"Bepaalt hoe dit label onder de balk wordt uitgelijnd.","title_size":"Titel Grootte","value_size":"Waarde Grootte","hidden_message":"Linkerkant is verborgen"},"right_side":{"header":"Rechterkant","section_description":"Configureer de titel en entiteitswaarde die aan de rechterkant van de balk worden weergegeven. Dit is ideaal voor aanvullende informatie zoals \'Tijd tot Vol\' of secundaire metingen.","toggle_description":"Toon of verberg de rechterkant van het balklabel","title":"Rechter Titel","title_description":"Optioneel label dat aan de rechterkant onder de balk wordt weergegeven.","entity":"Rechter Entiteit","entity_description":"Entiteit waarvan de waarde aan de rechterkant van de balk wordt weergegeven.","alignment_description":"Bepaalt hoe dit label onder de balk wordt uitgelijnd.","title_size":"Titel Grootte","value_size":"Waarde Grootte","hidden_message":"Rechterkant is verborgen"},"colors":{"header":"Kleuren","bar_color":"Balkkleur","background_color":"Achtergrondkleur","border_color":"Randkleur","limit_indicator_color":"Limietindicatorkleur","left_title_color":"Linkertitelkleur","left_value_color":"Linkerwaardenkleur","right_title_color":"Rechtertitelkleur","right_value_color":"Rechterwaardenkleur","percentage_text_color":"Percentagetekstkleur","reset_color":"Reset naar standaardkleur"},"gradient":{"header":"Gradiënt Modus","description":"Creëer mooie kleurovergangen op je voortgangsbalken. Ideaal voor het weergeven van batterijniveaus, brandstofmeters of elke statusindicator die visuele nadruk nodig heeft.","toggle":"Gebruik Gradiënt","toggle_description":"Gebruik een kleurovergang voor de voortgangsbalk in plaats van een enkele kleur","display_mode":"Gradiënt Weergavemodus","display_mode_full":"Volledig","display_mode_value_based":"Waardegebaseerd","display_mode_description":"Volledig: Toont de volledige gradiënt. Waardegebaseerd: Toont de gradiënt tot aan de huidige waarde.","editor_header":"Gradiënt Editor","add_stop":"Stop Toevoegen","display_mode_cropped":"Bijgesneden"},"animation":{"header":"Actieanimatie","description":"Voeg animaties toe aan de balk wanneer een specifieke entiteit een bepaalde status bereikt. Perfect voor het tonen van oplaadstatus, alarmtoestanden en meer.","pro_tip":"Pro-tip: Voor \'altijd actieve\' animaties, selecteer een animatietype maar laat de entiteit- en statusvelden leeg. Probeer de \'Bubbels\' en \'Vullen\' animaties!","entity":"Animatie-entiteit","entity_description":"Entiteit die de animatie activeert wanneer deze overeenkomt met de opgegeven status","state":"Entiteitsstatus","state_description":"Wanneer de entiteitsstatus overeenkomt met deze waarde, wordt de animatie geactiveerd","type":"Animatietype","type_description":"Het animatie-effect dat wordt weergegeven wanneer de entiteitsstatus overeenkomt","select_entity_prompt":"Selecteer een Entiteit en typ de status waarmee u de animatie wilt activeren (voorbeelden: \\"charging\\", \\"on\\", \\"idle\\")","action_entity":"Actie -entiteit","action_state":"Actietoestand","action_description":"Deze animatie zal de reguliere animatie overschrijven wanneer de opgegeven entiteit zich in een specifieke staat bevindt.","action_entity_prompt":"Selecteer een actie -entiteit en staat om te definiëren wanneer deze animatie de reguliere animatie moet overschrijven"},"bar_sizes":{"thin":"Dun","regular":"Normaal","thick":"Dik","thiccc":"Zeer dik"},"bar_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"},"bar_alignments":{"space-between":"Ruimte tussen","flex-start":"Links","center":"Midden","flex-end":"Rechts"},"bar_styles":{"flat":"Plat (Standaard)","glossy":"Glanzend","embossed":"Reliëf","inset":"Verzonken","gradient":"Verloopoverlay","neon":"Neongloed","outline":"Contour","glass":"Glas","metallic":"Metaalachtig","neumorphic":"Neumorfisch"},"animation_types":{"none":"Geen","charging-lines":"Opladen (Diagonale lijnen)","pulse":"Pulseren","blinking":"Knipperen","bouncing":"Stuiteren","glow":"Gloeien","rainbow":"Regenboog","bubbles":"Bubbels","fill":"Vullen"},"custom_bar_settings":{"title":"Aangepaste Balkinstellingen","description":"Definieer aangepaste configuraties voor individuele balken.","name":"Balknaam","entity":"Entiteit","unit":"Eenheid","min":"Min Waarde","max":"Max Waarde","thresholds":"Drempelwaarden","severity":"Ernst Map"},"template":{"description":"Gebruik een sjabloon om de weergegeven tekst op te maken, eenheden te converteren of berekende waarden weer te geven.","enable":"Sjabloonmodus inschakelen","template_label":"Sjabloon","helper_text":"Use Home Assistant templating syntax. Examples:\\n• {{ states(\'sensor.temperature\') | float * 1.8 + 32 }} °F\\n• {{ now().strftime(\\"%b %d, %H:%M\\") }}","examples_header":"Veel voorkomende voorbeelden:","examples":{"temperature":"{{ states(\'sensor.temperature\') | float * 1.8 + 32 }}°F - Convert Celsius to Fahrenheit","datetime":"{{ now().strftime(\\"%b %d, %H:%M\\") }} - Format current date/time","power":"{{ \'Charging at \' + states(\'sensor.ev_power\') + \' kW\' }} - Combine text and sensor value"}}},"icons":{"title":"Kaartpictogrammen","description":"Voeg pictogramrijen toe om meerdere pictogrammen in je kaart weer te geven. Elke rij kan met verschillende instellingen worden geconfigureerd. Opmerking: Pictogramrijen en sectievolgorde kunnen worden herschikt in het tabblad Aanpassen.","add_row":"Pictogramrij toevoegen","duplicate_row":"Rij dupliceren","delete_row":"Rij verwijderen","expand_row":"Rij uitvouwen","collapse_row":"Rij samenvouwen","no_row":"Geen pictogramrijen toegevoegd","row_prefix":"Rij","icon_prefix":"Pictogram","row_settings":{"header":"Rij-instellingen","width":"Rijbreedte","width_description":"Breedte van de rij als percentage van de kaartbreedte","alignment":"Rijuitlijning","alignment_description":"Hoe pictogrammen in deze rij worden uitgelijnd","spacing":"Pictogramafstand","spacing_description":"Hoeveelheid ruimte tussen pictogrammen in deze rij","columns":"Aantal Kolommen","columns_description":"Aantal kolommen met gelijke grootte in de rij (0 = automatische verdeling op basis van inhoud)","confirmation_mode":"Bevestigingsmodus","confirmation_mode_description":"Vereist twee taps/klikken om pictogrammen in deze rij te activeren, wat onbedoelde interacties voorkomt","layout_info_title":"Hoe lay -outinstellingen werken"},"add_icon":"Pictogram toevoegen","duplicate_icon":"Pictogram dupliceren","delete_icon":"Pictogram verwijderen","expand_icon":"Pictogram uitvouwen","collapse_icon":"Pictogram samenvouwen","no_icon":"Geen pictogram geselecteerd","icon_settings":{"header":"Pictograminstellingen","entity":"Entiteit","entity_description":"Entiteit om weer te geven met dit pictogram","icon":"Pictogram","icon_description":"Selecteer een pictogram of voer een aangepast pictogram in","name":"Naam","name_description":"Aangepaste naam die onder het pictogram wordt weergegeven (gebruikt standaard de entiteitsnaam als niet ingesteld)","show_name":"Toon naam","show_name_description":"Toon de naamtekst onder het pictogram","show_state":"Toon status","show_state_description":"Toon de entiteitsstatus onder het pictogram","show_units":"Toon eenheden","show_units_description":"Voeg eenheden toe bij het weergeven van de status","text_position":"Tekstpositie","text_position_description":"Waar de naam- en statustekst wordt geplaatst ten opzichte van het pictogram","click_action":"Klikactie","service":"Dienst","service_description":"Service om aan te roepen (bijv. light.turn_on)","service_data":"Servicegegevens (JSON)","service_data_description":"JSON-gegevens die met de serviceaanroep worden verzonden","action":"Actie (JSON/Service)","action_description":"Geavanceerde actieconfiguratie (zie documentatie)","navigation_path":"Navigatiepad","navigation_path_description":"Pad om naartoe te navigeren (bijv. /lovelace/dashboard)","url":"Url","url_description":"URL om te openen in een nieuw tabblad","automation_entity":"Automatisering Entiteit","automation_entity_description":"Automatisering om te activeren bij aanklikken"},"icon_appearance":{"header":"Icoon Uiterlijk","icon":"Icoon Specifiek","general":"Algemeen uiterlijk","active":"Actieve status","inactive":"Inactieve status","state_conditions":"Statusvoorwaarden","advanced":"Geavanceerde instellingen","icon_size":"Icoongrootte","icon_size_description":"Grootte van het icoon in pixels","text_size":"Tekstgrootte","text_size_description":"Grootte van de naam/statustekst in pixels","text_alignment":"Tekstuitlijning","text_alignment_description":"Hoe de tekst onder het icoon wordt uitgelijnd","icon_background":"Pictogramachtergrond","icon_background_description":"Voeg een achtergrondvorm toe achter het pictogram","icon_background_color":"Pictogramachtergrondkleur","icon_background_color_description":"Kleur van de achtergrond achter het pictogram","container_background_color":"Container Achtergrondkleur","container_background_color_description":"Kleur van de achtergrond achter de hele pictogramcontainer","text_appearance":"Tekstuiterlijk","container":{"header":"Container-uiterlijk","vertical_alignment":"Verticale uitlijning","vertical_alignment_description":"Lijn het icoon en de tekst verticaal uit binnen de container.","width":"Containerbreedte","width_description":"Stel de breedte van de icooncontainer in ten opzichte van de rij.","background":"Container Achtergrondvorm","background_description":"Kies een achtergrondvorm voor de gehele icooncontainer."},"show_when_active":"Toon icoon wanneer actief","show_when_active_description":"Toon dit icoon alleen wanneer het in een actieve status is","template_mode":"Template Modus","template_description":"Use a template to determine active/inactive state. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","active_template":"Actief Sjabloon","active_template_description":"Sjabloon dat evalueert naar waar wanneer het pictogram actief moet zijn.","active_state":"Actieve status","active_state_description":"Statusstring die \\"actief\\" voorstelt.","active_state_text":"Aangepaste Tekst voor Actieve Status","active_state_text_description":"Overschrijft de weergegeven tekst wanneer het pictogram actief is. Laat leeg om de daadwerkelijke status te gebruiken.","inactive_template":"Inactief Sjabloon","inactive_template_description":"Sjabloon dat evalueert naar waar wanneer het pictogram inactief moet zijn.","inactive_state":"Inactieve status","inactive_state_description":"Statusstring die \\"inactief\\" voorstelt.","inactive_state_text":"Aangepaste Tekst voor Inactieve Status","inactive_state_text_description":"Overschrijft de weergegeven tekst wanneer het pictogram inactief is. Laat leeg om de daadwerkelijke status te gebruiken.","active_icon":"Actief pictogram","inactive_icon":"Inactief pictogram","active_icon_color":"Actieve Icoonkleur","inactive_icon_color":"Inactieve Icoonkleur","active_name_color":"Actieve Naamkleur","inactive_name_color":"Inactieve Naamkleur","active_state_color":"Actieve Statuskleur","inactive_state_color":"Inactieve Statuskleur","show_icon_active":"Pictogram tonen bij actief","show_icon_active_description":"Toon het icoon wanneer de status actief is.","show_icon_inactive":"Toon Icoon Indien Inactief","show_icon_inactive_description":"Toon het icoon wanneer de status inactief is.","custom_active_state_text":"Aangepaste Actieve Statustekst","custom_inactive_state_text":"Aangepaste Inactieve Statustekst","action_description":"Actie die wordt uitgevoerd wanneer op het pictogram wordt geklikt.","show_name_active":"Toon Naam Wanneer Actief","show_name_active_description":"Toon de naam wanneer de status actief is.","show_name_inactive":"Toon Naam Wanneer Inactief","show_name_inactive_description":"Toon de naam wanneer de status inactief is.","show_state_active":"Toon Status Wanneer Actief","show_state_active_description":"Toon de status wanneer de status actief is.","show_state_inactive":"Toon Status Wanneer Inactief","show_state_inactive_description":"Toon de status wanneer de status inactief is.","use_entity_color_for_icon":"Gebruik entiteitskleur voor pictogram","use_entity_color_for_icon_description":"Use the entity\'s color attribute for the icon when available","use_entity_color_for_icon_background":"Gebruik entiteitskleur voor pictogramachtergrond","use_entity_color_for_icon_background_description":"Gebruik het kleurenattribuut van de entiteit voor de pictogramachtergrond indien beschikbaar","use_entity_color_for_container_background":"Gebruik entiteitskleur voor container","use_entity_color_for_container_background_description":"Gebruik het kleurenkenmerk van de entiteit voor de containerachtergrond indien beschikbaar","name_size":"Naammaat","name_size_description":"Grootte van de tekst van de entiteitsnaam in pixels"},"tabs":{"general":"Algemeen","appearance":"Uiterlijk","states":"Statussen","active_state":"Actieve status","inactive_state":"Inactieve status"},"alignments":{"flex-start":"Links","center":"Midden","flex-end":"Rechts","space-between":"Ruimte tussen","space-around":"Ruimte rondom","space-evenly":"Gelijkmatige ruimte"},"vertical_alignments":{"flex-start":"Boven","center":"Midden","flex-end":"Onder"},"spacing":{"none":"Geen","small":"Klein","medium":"Gemiddeld","large":"Groot"},"text_positions":{"below":"Onder icoon","beside":"Naast icoon","none":"Geen tekst","top":"Boven","left":"Links","right":"Rechts"},"reset":{"size":"Reset naar standaardgrootte","color":"Reset naar standaardkleur","all":"Reset naar standaardwaarden"},"click_actions":{"toggle":"Entiteit omschakelen","more-info":"Meer informatie tonen","navigate":"Navigeren naar pad","url":"URL openen","call-service":"Service aanroepen","perform-action":"Actie uitvoeren","location-map":"Locatiekaart tonen","assist":"Spraakassistent","trigger":"Activeren","none":"Geen actie","descriptions":{"toggle":"Schakelt de status van de entiteit om.","more-info":"Opent het meer-info dialoogvenster voor de entiteit.","navigate":"Navigeert naar het opgegeven Lovelace-pad.","url":"Opent de opgegeven URL in een nieuw tabblad.","call-service":"Roept de opgegeven Home Assistant-service aan.","perform-action":"Voert een aangepaste actie uit (zie documentatie).","location-map":"Toont de entiteit op een kaart.","assist":"Opent de Home Assistant-spraakassistent.","trigger":"Activeert de entiteit (automatisering, script, knop, etc.).","none":"Er wordt geen actie uitgevoerd."}},"backgrounds":{"none":"Geen","circle":"Cirkel","square":"Vierkant","rounded_square":"Afgerond vierkant"},"container_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"},"row_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"},"template_mode":"Sjabloonmodus","template_mode_active_description":"Gebruik een sjabloon om te bepalen wanneer dit pictogram actief moet zijn. Met sjablonen kunt u de syntaxis van thuisassistent -sjabloon gebruiken voor complexe omstandigheden.","template_mode_inactive_description":"Gebruik een sjabloon om te bepalen wanneer dit pictogram inactief moet zijn. Met sjablonen kunt u de syntaxis van thuisassistent -sjabloon gebruiken voor complexe omstandigheden.","template_examples_header":"Veel voorkomende voorbeelden:","enable_template_mode":"Sjabloonmodus inschakelen"},"customize":{"layout":{"title":"Layout stijl","description":"Kies tussen één- of tweekolomsweergave voor de kaart","header":"Layout instellingen"},"layout_types":{"single":"Enkele kolom","double":"Dubbele kolom","dashboard":"Dashboard","half_full":"Half + vol","full_half":"Vol + half"},"sections":{"header":"Kaart secties","arrangement_header":"Sectie indeling","arrangement_desc_base":"Sleep secties om hun volgorde op de kaart te organiseren.","arrangement_desc_single_extra":"Alle secties worden in één kolom weergegeven.","arrangement_desc_double_extra":"In de tweekolomsweergave kunt u elke sectie in de linker- of rechterkolom plaatsen.","arrangement_desc_dashboard_extra":"In de dashboardweergave kunt u de secties rond de afbeelding van uw voertuig plaatsen."},"section_labels":{"title":"Titel","image":"Voertuigafbeelding","info":"Voertuiginformatie","bars":"Alle sensorbalken","icons":"Alle pictogramrijen","section_break":"Sectie pauze"},"actions":{"collapse_margins":"Marges verkleinen","expand_margins":"Marges uitbreiden","collapse_options":"Opties verkleinen","expand_options":"Opties uitbreiden","add_break":"Sectie -pauze toevoegen","delete_break":"Sectie -pauze verwijderen"},"css":{"header":"Globale CSS","description":"Voer hier aangepaste CSS-regels in om de standaardstijl van de kaart te overschrijven. Deze regels worden direct op de kaart toegepast. Gebruik met voorzichtigheid.","label":"Aangepaste CSS","input_description":"Voer hier uw aangepaste CSS-regels in."},"conditions":{"header":"Voorwaardelijke logica","description":"Toon of verberg deze sectie op basis van de status van een entiteit.","type_label":"Voorwaardetype","entity_label":"Voorwaarde-entiteit","state_label":"Voorwaardestatus","types":{"none":"Geen (Altijd tonen)","show":"Tonen wanneer...","hide":"Verbergen wanneer..."}},"margins":{"header":"Marges","top":"Bovenmarge","bottom":"Ondermarge"},"columns":{"left":"Linkerkolom","right":"Rechterkolom","empty":"Plaats secties hier"},"column_width":{"title":"Kolombreedte","description":"Configureer de breedteverhouding tussen linker- en rechterkolom","50_50":"Gelijk (50/50)","30_70":"Smal links, breed rechts (30/70)","70_30":"Breed links, smal rechts (70/30)","40_60":"Iets smaller links (40/60)","60_40":"Iets breder links (60/40)"},"dashboard":{"top":"Bovenste sectie","top_middle":"Boven-midden sectie","left_middle":"Links-midden sectie","middle":"Middelste sectie","middle_empty":"Voertuigafbeeldingsgebied (Aanbevolen)","right_middle":"Rechts-midden sectie","bottom_middle":"Onder-midden sectie","bottom":"Onderste sectie"},"top_view":{"header":"Dashboard instellingen","description":"Configureer de afstands- en layout-instellingen voor de dashboardweergave","side_margin":"Zijmarges","side_margin_help":"Marges aan de zijkanten van de weergave in pixels","middle_spacing":"Middenafstand","middle_spacing_help":"Ruimte tussen middenkolommen in pixels","vertical_spacing":"Verticale afstand","vertical_spacing_help":"Ruimte tussen rijen in pixels"},"break_styles":{"blank":"Blanco (geen regel)","line":"Ononderbroken lijn","double_line":"Dubbele lijn","dotted":"Stippellijn","double_dotted":"Dubbele stippellijn","shadow":"Schaduwgradiënt"},"break_style":{"header":"Break Style","style_label":"Stijl","thickness_label":"Dikte","width_percent_label":"Breedte (%)","color_label":"Kleur"},"half_full":{"row1":"Row 1 (Split)","row1_col1":"Row 1 - Left Column","row1_col2":"Row 1 - Right Column","row2":"Row 2 (Full Width)","row2_full":"Rij 2, volledige breedte (100%)"},"full_half":{"row1":"Row 1 (Full Width)","row2":"Row 2 (Split)","row2_col1":"Row 2 - Left Column","row2_col2":"Row 2 - Right Column","row1_full":"Rij 1, volledige breedte (100%)"},"title":"Lay -out aanpassen","description":"Pas de lay -out aan, bestel en voeg secties toe aan uw kaart","condition_prompt":"Selecteer \\"Toon\\" of \\"verbergen\\" om entiteitsconditie te configureren"},"container_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"},"row_widths":{"25":"25% breedte","50":"50% breedte","75":"75% breedte","100":"100% (Volledige breedte)"},"info":{"arrange_info_rows":"Schik info -rijen","title":"Kaartinformatie","description":"Configureer informatie rijen en entiteiten om voertuigdetails zoals locatie, kilometerstand, enz. Toon te geven, enz. Info -items worden indien mogelijk op een enkele regel weergegeven, die in meerdere lijnen in smalle containers wikkelt.","template_mode":"Sjabloonmodus","template_mode_description":"Gebruik een sjabloon om de entiteitswaarde te formatteren. Met sjablonen kunt u de syntaxis van thuisassistent -sjabloon gebruiken voor complexe opmaak.","template_examples_header":"Veel voorkomende voorbeelden:"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Ontwikkeld door","discord_button":"Word lid van onze Discord","github_button":"Bezoek onze Github","docs_button":"Lees onze documentatie","support_title":"Steun Ultra Vehicle Card","support_para":"Uw gulle donaties maken de ontwikkeling van fantastische functies voor deze kaart mogelijk! Zonder de steun van gebruikers zoals u zou continue innovatie niet mogelijk zijn.","donate_button":"DONEREN (PAYPAL)","support_description":"Uw gulle tips voeden de ontwikkeling van geweldige functies voor deze kaart! Zonder ondersteuning van gebruikers zoals u, zou voortdurende innovatie niet mogelijk zijn."},"custom_icons":{"title":"Aangepaste pictogrammen","description":"Definieer aangepaste pictogrammen voor verschillende statussen.","icon_entity":"Pictogram-entiteit","default_icon":"Standaardpictogram","state_icons":"Statuspictogrammen","state":"Status","icon":"Pictogram"},"custom_active_state_text":"Aangepaste actieve statustekst","custom_inactive_state_text":"Aangepaste inactieve statustekst","image_settings":{"title":"Afbeeldingsinstellingen","description":"Configureer het uiterlijk van de hoofdafbeelding.","type":"Afbeeldingstype","width":"Afbeeldingsbreedte","crop":"Afbeelding bijsnijden","entity":"Afbeeldingsentiteit","entity_description":"Entiteit die de afbeeldings-URL levert","text_color":"Entity Color","text_color_description":"Color for the entity value","name_color":"Name Color","name_color_description":"Color for the entity name label","icon_color":"Icon Color"},"entity_settings":{"entity":"Entiteit","entity_description":"Selecteer een entiteit om informatie uit te geven van","name":"Name","name_description":"Verhaal de naam van de entiteit (laat blanco om de vriendelijke naam van de entiteit te gebruiken)","icon":"Icon","icon_placeholder":"mdi:power-plug","show_icon":"Toon pictogram","show_name":"Naam tonen","show_name_description":"Toon de naam van de entiteit vóór de waarde","click_action":"Click Action","more_info":"More Info","navigate":"Navigate","url":"URL (External)","url_path":"URL","call_service":"Call Service","none":"None","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to when clicked (e.g., /lovelace/0)","url_description":"URL to open when clicked","service":"Service","service_description":"Service to call (e.g., light.turn_on)","service_data":"Service Data (JSON)","template_mode":"Use Template for Value","template_mode_description":"Gebruik een sjabloon om de entiteitswaarde te formatteren","value_template":"Waardesjabloon","template_header":"Waardesjabloon","template_examples_header":"Template Examples","template_basic":"Basiswaarde","template_units":"Met eenheden","template_round":"Rond tot 1 decimaal","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Entity Size","text_size_description":"Size of the entity value text in pixels","name_size":"Name Size","name_size_description":"Size of the entity name text in pixels","icon_color":"Pictogramkleur","name_color":"Naam kleur","text_color":"Entity Color","size_settings":"Size Settings","color_settings":"Color Settings","entity_color":"Entiteitskleur"}}');var _t=o.t(ut,2);const ft=JSON.parse('{"editor":{"tabs":{"settings":"Innstillinger","bars":"Stolper","icons":"Ikoner","customize":"Tilpasse","about":"Om","info":"Info"},"settings_subtabs":{"general":"Generelt","action_images":"Handlingsbilder"},"action_images":{"title":"Innstillinger for Handlingsbilder","description":"Konfigurer bilder som vil vises når spesifikke entitetstilstander er oppfylt.","add_image":"Legg til Handlingsbilde","no_images":"Ingen handlingsbilder konfigurert ennå. Legg til ett for å komme i gang.","entity_settings":"Entitetsinnstillinger","entity_placeholder":"Velg en entitet","state_placeholder":"Angi tilstandsverdi","image_settings":"Bildeinnstillinger","image_type":{"title":"Bildetype","description":"Velg hvordan du vil levere bildet","upload":"Last opp bilde","url":"Bilde-URL","entity":"Entitetsbilde","none":"Ingen"},"delete_confirm":"Er du sikker på at du vil slette dette handlingsbildet?","actions":{"duplicate":"Dupliser","delete":"Slett","expand":"Utvid","collapse":"Skjul","drag":"Dra for å endre rekkefølge"},"preview":{"no_entity":"Ingen entitet valgt","any_state":"Enhver tilstand","no_image":"Ingen bilde"},"template_mode":"Template Mode","template_description":"Use a template to determine when this image should be shown. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","template_label":"Visningsmal","template_help":"Enter a template that returns true/false. This image will be shown when the template evaluates to true. Use Jinja2 syntax: {{ states(...) }}"},"card_settings":{"title":"Korttittel","title_alignment":"Titteljustering","title_size":"Tittelstørrelse","title_description":"Tittel som vises øverst på kortet (valgfritt)","title_alignment_description":"Hvordan korttittelen justeres","title_size_description":"Størrelsen på korttittelen i piksler","format_entities":"Formater Enhetsverdier","format_entities_description":"Aktiver ytterligere formatering av enhetsverdier (legg til kommaer, konverter enheter, osv.)","show_units":"Vis Enheter","show_units_description":"Vis måleenheter ved siden av verdier","help_highlight":"Hjelp med å fremheve","help_highlight_description":"Vis visuelle høydepunkter når du bytter mellom redigeringsfaner for å identifisere hvilken seksjon du redigerer"},"vehicle_info":{"title":"Kjøretøyinformasjon","location":{"title":"Plasseringsenhet","description":"Velg enheten som viser kjøretøyets nåværende plassering.","show":"Vis Plassering","show_description":"Vis kjøretøyets plassering"},"mileage":{"title":"Kilometerenhet","description":"Velg enheten som representerer kjøretøyets totale kilometerstand eller kilometerteller.","show":"Vis Kilometerstand","show_description":"Vis kjøretøyets kilometerstand"},"car_state":{"title":"Kjøretøytilstandsenhet","description":"Velg enheten som representerer kjøretøyets nåværende tilstand (f.eks. parkert, kjørende, lader).","show":"Vis Kjøretøytilstand","show_description":"Vis kjøretøyets tilstand"}},"images":{"common":{"url_description":"Skriv inn bildets URL","width_description":"Bredde i prosent av kortet","width_over_100":"Verdier over 100% kan bidra til å beskjære tomt plass rundt bilder"},"vehicle":{"title":"Kjøretøybilde","description":"Konfigurer hovedbildet som vises for kjøretøyet.","type":"Kjøretøybildetype","width":"Bildebredde","crop":"Beskjær bilde","entity":"Bildeenhet","entity_description":"Enhet som gir bilde-URL"}},"crop":{"title":"Bildebeskjæring","top":"Topp","right":"Høyre","bottom":"Bunn","left":"Venstre","pixels":"PX","help":"Angi verdier i piksler (positive eller negative) for å justere beskjæring og utfylling"},"alignment":{"left":"Venstre","center":"Senter","right":"Høyre"},"common":{"choose_file":"Velg fil","no_file_chosen":"Ingen fil valgt","entity":"Enhet","width":"Bredde","width_description":"Bredde som prosent av kortet","width_over_100":"Verdier over 100% kan bidra til å beskjære tomt plass rundt bilder","none":"Ingen","default":"Standard","upload":"Last opp","url":"URL","url_description":"URL som peker til bildet","reset":"Tilbakestill","condition_prompt":"Velg \\"Vis\\" eller \\"Skjul\\" for å konfigurere enhetstilstand"},"bars":{"title":"Prosentstolper","description":"Legg til prosentstolper for å vise verdier som drivstoffnivå, batterilading eller rekkevidde. Hver stolpe kan vise en primær prosentverdi med valgfrie etiketter til venstre og høyre.","add":"Legg til ny stolpe","duplicate":"Dupliser stolpe","delete":"Slett stolpe","expand":"Utvid stolpe","collapse":"Skjul stolpe","bar_prefix":"Stolpe","no_entity":"Ingen enhet valgt","bar_radius":{"round":"Rund","square":"Firkantet","rounded-square":"Avrundet Firkant"},"tabs":{"config":"Konfigurasjon","colors":"Farger","animation":"Animasjon"},"settings":{"header":"Søylekonfigurasjon","entity":"Hovedentitet","entity_description":"Entitet som gir den primære verdien (0-100) for fremgangssøylen","limit_entity":"Grenseentitet","limit_entity_description":"Entitet som viser en grensemarkør på søylen (f.eks. ladeterskel)","limit_color":"Grenseindikator Farge","limit_color_description":"Farge på grenseindikatorlinjen","bar_size":"Søyletykkelse","bar_size_description":"Størrelse/tykkelse på fremgangssøylen","bar_radius":"Søyleradius","bar_radius_description":"Form på hjørnene til fremgangssøylen","width":"Søylebredde","width_description":"Bredde på fremgangssøylen som prosent av tilgjengelig plass. Bruk dette for å plassere flere søyler side ved side.","alignment":"Etikett Justering","alignment_description":"Hvordan etikettene på fremgangssøylen justeres","show_percentage":"Vis Prosent","show_percentage_description":"Vis prosentverdien inne i søylen"},"percentage":{"header":"Prosenttekst","display_header":"Prosenttekstvisning","display_description":"Kontroller synlighet og utseende av prosentverdier som vises direkte på stolpen. Disse tallene gir en tydelig visuell indikator på nåværende nivå.","text_size":"Tekststørrelse","calculation_header":"Prosentberegning","calculation_description":"Konfigurer hvordan stolpens prosentvise fyllnivå beregnes ved hjelp av ett av alternativene nedenfor.","type_header":"Prosentberegning","type_label":"Prosenttype","type_description":"Hvordan prosentverdien som vises i søylen beregnes","type_entity":"Entitet (0-100)","type_difference":"Forskjell (Mengde/Total)","amount_entity":"Mengdeentitet","amount_description":"Entitet som representerer nåværende mengde/verdi (teller)","total_entity":"Totalentitet","total_description":"Entitet som representerer total mengde/maksimum (nevner)"},"left_side":{"header":"Venstre Side","section_description":"Konfigurer tittel og entitetsverdi som vises på venstre side av stolpen. Dette er nyttig for å vise etiketter som \'Rekkevidde\' eller \'Batteri\' sammen med verdiene deres.","toggle_description":"Vis eller skjul venstre side av stolpeetiketten","title":"Venstre Tittel","title_description":"Valgfri etikett som vises på venstre side under stolpen.","entity":"Venstre Enhet","entity_description":"Enhet hvis verdi vises på venstre side av stolpen.","alignment_description":"Kontrollerer hvordan denne etiketten justeres under stolpen.","title_size":"Tittelstørrelse","value_size":"Verdistørrelse","hidden_message":"Venstre side er skjult"},"right_side":{"header":"Høyre Side","section_description":"Konfigurer tittel og entitetsverdi som vises på høyre side av stolpen. Dette er ideelt for komplementerende informasjon som \'Tid til Fulladet\' eller sekundære målinger.","toggle_description":"Vis eller skjul høyre side av stolpeetiketten","title":"Høyre Tittel","title_description":"Valgfri etikett som vises på høyre side under stolpen.","entity":"Høyre Enhet","entity_description":"Enhet hvis verdi vises på høyre side av stolpen.","alignment_description":"Kontrollerer hvordan denne etiketten justeres under stolpen.","title_size":"Tittelstørrelse","value_size":"Verdistørrelse","hidden_message":"Høyre side er skjult"},"colors":{"header":"Farger","bar_color":"Stolpefarge","background_color":"Bakgrunnsfarge","border_color":"Kantfarge","limit_indicator_color":"Grenseindikatorfarve","left_title_color":"Venstre Tittelfarge","left_value_color":"Venstre Verdifarge","right_title_color":"Høyre Tittelfarge","right_value_color":"Høyre Verdifarge","percentage_text_color":"Prosenttekstfarge","reset_color":"Tilbakestill til standardfarge"},"gradient":{"header":"Gradientmodus","description":"Lag vakre fargeoverganger på fremdriftsstolpene dine. Ideelt for å vise batterinivåer, drivstoffmålere, eller andre statusindikatorer som krever visuell vektlegging.","toggle":"Bruk gradient","toggle_description":"Bruk en gradient for fremdriftslinjen i stedet for en ensfarget farge","display_mode":"Gradientvisningsmodus","display_mode_full":"Full","display_mode_value_based":"Verdibasert","display_mode_description":"Full: Vis hele gradienten. Verdibasert: Vis gradient opp til nåværende verdi.","editor_header":"Gradienteditor","add_stop":"Legg til stopp","display_mode_cropped":"Beskåret"},"animation":{"header":"Handlingsanimasjon","description":"Legg til animasjoner på stolpen når en spesifikk enhet når en bestemt tilstand. Perfekt for å vise ladestatus, alarmtilstander og mer.","pro_tip":"Pro-tips: For \'alltid aktive\' animasjoner, velg en animasjonstype men la enhets- og tilstandsfeltene være tomme. Prøv \'Bobler\' og \'Fyll\' animasjonene!","entity":"Animasjonsenhet","entity_description":"Enhet som utløser animasjonen når den matcher den angitte tilstanden","state":"Enhetstilstand","state_description":"Når enhetstilstanden matcher denne verdien, vil animasjonen bli utløst","type":"Animasjonstype","type_description":"Animasjonseffekten som vises når enhetstilstanden samsvarer","select_entity_prompt":"Velg en Enhet og skriv inn tilstanden du ønsker å utløse animasjonen med (eksempler: \\"charging\\", \\"on\\", \\"idle\\")","action_entity":"Handlingsenhet","action_state":"Handlingsstatus","action_description":"Denne animasjonen vil overstyre den vanlige animasjonen når den spesifiserte enheten er i en spesifikk tilstand.","action_entity_prompt":"Velg en handlingsenhet og stat for å definere når denne animasjonen skal overstyre den vanlige animasjonen"},"bar_sizes":{"thin":"Tynn","regular":"Normal","thick":"Tykk","thiccc":"Ekstra tykk"},"bar_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"},"bar_alignments":{"space-between":"Mellomrom mellom","flex-start":"Venstre","center":"Senter","flex-end":"Høyre"},"bar_styles":{"flat":"Flat (Standard)","glossy":"Blank","embossed":"Preget","inset":"Innfelt","gradient":"Gradientoverlegg","neon":"Neonglød","outline":"Omriss","glass":"Glass","metallic":"Metallisk","neumorphic":"Neumorfisk"},"animation_types":{"none":"Ingen","charging-lines":"Lading (Diagonale linjer)","pulse":"Pulserende","blinking":"Blinkende","bouncing":"Hoppende","glow":"Glødende","rainbow":"Regnbue","bubbles":"Bobler","fill":"Fyll"},"custom_bar_settings":{"title":"Egendefinerte Stolpeinnstillinger","description":"Definer egendefinerte konfigurasjoner for individuelle stolper.","name":"Stolpenavn","entity":"Enhet","unit":"Enhet","min":"Min Verdi","max":"Maks Verdi","thresholds":"Terskelverdier","severity":"Alvorlighetsgrad"},"template":{"description":"Bruk en mal for å formatere den viste teksten, konvertere enheter eller vise beregnede verdier.","enable":"Aktiver malmodus","template_label":"Mal","helper_text":"Use Home Assistant templating syntax. Examples:\\n• {{ states(\'sensor.temperature\') | float * 1.8 + 32 }} °F\\n• {{ now().strftime(\\"%b %d, %H:%M\\") }}","examples_header":"Vanlige eksempler:","examples":{"temperature":"{{ states(\'sensor.temperature\') | float * 1.8 + 32 }}°F - Convert Celsius to Fahrenheit","datetime":"{{ now().strftime(\\"%b %d, %H:%M\\") }} - Format current date/time","power":"{{ \'Charging at \' + states(\'sensor.ev_power\') + \' kW\' }} - Combine text and sensor value"}}},"icons":{"title":"Kortikoner","description":"Legg til ikonrader for å vise flere ikoner på kortet ditt. Hver rad kan konfigureres med forskjellige innstillinger. Merk: Ikonrader og seksjonsrekkefølge kan omorganiseres i Tilpasse-fanen.","add_row":"Legg til ikonrad","duplicate_row":"Dupliser rad","delete_row":"Slett rad","expand_row":"Utvid rad","collapse_row":"Skjul rad","no_row":"Ingen ikonrader er lagt til","row_prefix":"Rad","icon_prefix":"Ikon","row_settings":{"header":"Radinnstillinger","width":"Radbredde","width_description":"Bredde på raden som prosent av kortbredden","alignment":"Radjustering","alignment_description":"Hvordan ikoner justeres i denne raden","spacing":"Ikonavstand","spacing_description":"Mengde mellomrom mellom ikoner i denne raden","columns":"Kolonneantall","columns_description":"Antall kolonner med lik størrelse i raden (0 = automatisk fordeling basert på innhold)","confirmation_mode":"Bekreftelsesmodus","confirmation_mode_description":"Krever to trykk/klikk for å aktivere ikoner i denne raden, noe som forhindrer utilsiktede interaksjoner","layout_info_title":"Hvordan layoutinnstillinger fungerer"},"add_icon":"Legg til ikon","duplicate_icon":"Dupliser ikon","delete_icon":"Slett ikon","expand_icon":"Utvid ikon","collapse_icon":"Skjul ikon","no_icon":"Ingen ikon valgt","icon_settings":{"header":"Ikoninnstillinger","entity":"Enhet","entity_description":"Enhet som vises med dette ikonet","icon":"Ikon","icon_description":"Velg et ikon eller skriv inn et egendefinert ikon","name":"Navn","name_description":"Tilpasset navn som vises under ikonet (bruker enhetsnavn som standard hvis ikke angitt)","show_name":"Vis Navn","show_name_description":"Vis navneteksten under ikonet","show_state":"Vis Tilstand","show_state_description":"Vis enhetens tilstand under ikonet","show_units":"Vis Enheter","show_units_description":"Inkluder enheter når tilstanden vises","text_position":"Tekstposisjon","text_position_description":"Hvor navn- og tilstandsteksten plasseres i forhold til ikonet","click_action":"Klikkehandling","service":"Tjeneste","service_description":"Tjeneste som skal kalles (f.eks. light.turn_on)","service_data":"Tjenestedata (JSON)","service_data_description":"JSON-data sendt med tjenesteanropet","action":"Handling (JSON/Tjeneste)","action_description":"Avansert handlingskonfigurasjon (se dokumentasjon)","navigation_path":"Navigasjonssti","navigation_path_description":"Sti å navigere til (f.eks. /lovelace/dashboard)","url":"URL","url_description":"URL å åpne i ny fane","automation_entity":"Automatiseringsenhet","automation_entity_description":"Automatisering som skal utløses ved klikk"},"icon_appearance":{"header":"Ikonutseende","icon":"Ikonspesifikt","general":"Generelt Utseende","active":"Aktiv Tilstand","inactive":"Inaktiv Tilstand","state_conditions":"Tilstandsbetingelser","advanced":"Avanserte Innstillinger","icon_size":"Ikonstørrelse","icon_size_description":"Størrelse på ikonet i piksler","text_size":"Tekststørrelse","text_size_description":"Størrelse på navn/tilstandstekst i piksler","text_alignment":"Tekstjustering","text_alignment_description":"Hvordan teksten justeres under ikonet","icon_background":"Ikonbakgrunn","icon_background_description":"Legg til en bakgrunnsform bak ikonet","icon_background_color":"Ikonbakgrunnsfarge","icon_background_color_description":"Farge på bakgrunnen bak ikonet","container_background_color":"Beholderbakgrunnsfarge","container_background_color_description":"Farge på bakgrunnen bak hele ikonbeholderen","text_appearance":"Tekstutseende","container":{"header":"Containerutseende","vertical_alignment":"Vertikal Justering","vertical_alignment_description":"Juster ikonet og teksten vertikalt i beholderen.","width":"Beholderbredde","width_description":"Angi bredden på ikonbeholderen i forhold til raden.","background":"Form på beholderbakgrunn","background_description":"Velg en bakgrunnsform for hele ikonbeholderen."},"show_when_active":"Vis ikon når aktivt","show_when_active_description":"Vis dette ikonet kun når det er i en aktiv tilstand","template_mode":"Malmodus","template_description":"Use a template to determine active/inactive state. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","active_template":"Aktiv Mal","active_template_description":"Mal som evalueres til sann når ikonet skal være aktivt.","active_state":"Aktiv tilstand","active_state_description":"Tilstandsstreng som representerer \\"aktiv\\".","active_state_text":"Egendefinert Tekst for Aktiv Tilstand","active_state_text_description":"Overskriver den viste teksten når ikonet er aktivt. La stå tomt for å bruke den faktiske tilstanden.","inactive_template":"Inaktiv Mal","inactive_template_description":"Mal som evalueres til sann når ikonet skal være inaktivt.","inactive_state":"Inaktiv tilstand","inactive_state_description":"Tilstandsstreng som representerer \\"inaktiv\\".","inactive_state_text":"Egendefinert Tekst for Inaktiv Tilstand","inactive_state_text_description":"Overskriver den viste teksten når ikonet er inaktivt. La stå tomt for å bruke den faktiske tilstanden.","active_icon":"Aktivt ikon","inactive_icon":"Inaktivt ikon","active_icon_color":"Farge på aktivt ikon","inactive_icon_color":"Farge på inaktivt ikon","active_name_color":"Farge på aktivt navn","inactive_name_color":"Farge på inaktivt navn","active_state_color":"Farge på aktiv tilstand","inactive_state_color":"Farge på inaktiv tilstand","show_icon_active":"Vis ikon når aktivt","show_icon_active_description":"Vis ikonet når tilstanden er aktiv.","show_icon_inactive":"Vis ikon når inaktivt","show_icon_inactive_description":"Vis ikonet når tilstanden er inaktiv.","custom_active_state_text":"Egendefinert Aktiv Tilstandstekst","custom_inactive_state_text":"Egendefinert Inaktiv Tilstandstekst","action_description":"Handling som skal utføres når ikonet klikkes på.","show_name_active":"Vis navn når aktivt","show_name_active_description":"Vis navnet når tilstanden er aktiv.","show_name_inactive":"Vis navn når inaktivt","show_name_inactive_description":"Vis navnet når tilstanden er inaktiv.","show_state_active":"Vis tilstand når aktiv","show_state_active_description":"Vis tilstanden når tilstanden er aktiv.","show_state_inactive":"Vis tilstand når inaktiv","show_state_inactive_description":"Vis tilstanden når tilstanden er inaktiv.","use_entity_color_for_icon":"Bruk enhetsfarge for ikon","use_entity_color_for_icon_description":"Use the entity\'s color attribute for the icon when available","use_entity_color_for_icon_background":"Bruk enhetsfarge for ikonbakgrunn","use_entity_color_for_icon_background_description":"Bruk enhetens fargeattributt for ikonbakgrunnen når det er tilgjengelig","use_entity_color_for_container_background":"Bruk enhetsfarge for container","use_entity_color_for_container_background_description":"Bruk enhetens fargeattributt for containerbakgrunnen når det er tilgjengelig","name_size":"Navnestørrelse","name_size_description":"Størrelse på enhetens navntekst i piksler"},"tabs":{"general":"Generelt","appearance":"Utseende","states":"Tilstander","active_state":"Aktiv Tilstand","inactive_state":"Inaktiv Tilstand"},"alignments":{"flex-start":"Venstre","center":"Senter","flex-end":"Høyre","space-between":"Mellomrom mellom","space-around":"Mellomrom rundt","space-evenly":"Jevnt mellomrom"},"vertical_alignments":{"flex-start":"Topp","center":"Midten","flex-end":"Bunn"},"spacing":{"none":"Ingen","small":"Liten","medium":"Medium","large":"Stor"},"text_positions":{"below":"Under ikonet","beside":"Ved siden av ikonet","none":"Ingen tekst","top":"Topp","left":"Venstre","right":"Høyre"},"reset":{"size":"Tilbakestill til standardstørrelse","color":"Tilbakestill til standardfarge","all":"Tilbakestill til standardverdier"},"click_actions":{"toggle":"Veksle Enhet","more-info":"Vis Mer Informasjon","navigate":"Naviger til Sti","url":"Åpne URL","call-service":"Kall Tjeneste","perform-action":"Utfør Handling","location-map":"Vis Plasseringskart","assist":"Stemmeassistent","trigger":"Utløs","none":"Ingen Handling","descriptions":{"toggle":"Veksler tilstanden til enheten.","more-info":"Åpner mer-info dialogen for enheten.","navigate":"Navigerer til den angitte Lovelace-stien.","url":"Åpner den angitte URL-en i en ny fane.","call-service":"Kaller den angitte Home Assistant-tjenesten.","perform-action":"Utfører en egendefinert handling (se dokumentasjon).","location-map":"Viser enheten på et kart.","assist":"Åpner Home Assistant stemmeassistenten.","trigger":"Utløser enheten (automatisering, skript, knapp, osv.).","none":"Ingen handling vil bli utført."}},"backgrounds":{"none":"Ingen","circle":"Sirkel","square":"Kvadrat","rounded_square":"Avrundet kvadrat"},"container_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"},"row_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"},"template_mode":"Malmodus","template_mode_active_description":"Bruk en mal for å bestemme når dette ikonet skal være aktivt. Maler lar deg bruke syntaks for hjemmeassistent for komplekse forhold.","template_mode_inactive_description":"Bruk en mal for å bestemme når dette ikonet skal være inaktivt. Maler lar deg bruke syntaks for hjemmeassistent for komplekse forhold.","template_examples_header":"Vanlige eksempler:","enable_template_mode":"Aktiver malmodus"},"customize":{"layout":{"title":"Layoutstil","description":"Velg mellom enkelt-kolonne eller dobbelt-kolonne layout for kortet","header":"Layoutinnstillinger"},"layout_types":{"single":"Enkelt kolonne","double":"Dobbelt kolonne","dashboard":"Dashbordvisning","half_full":"Halv + full","full_half":"Full + halvparten"},"sections":{"header":"Kortseksjoner","arrangement_header":"Seksjonsarrangement","arrangement_desc_base":"Dra og slipp seksjoner for å arrangere rekkefølgen på kortet.","arrangement_desc_single_extra":"Alle seksjoner vil vises i en enkelt kolonne.","arrangement_desc_double_extra":"I en dobbelt-kolonne layout kan du plassere alle seksjoner i enten venstre eller høyre kolonne.","arrangement_desc_dashboard_extra":"I en dashbordvisning kan du plassere seksjoner rundt kjøretøybildet ditt."},"section_labels":{"title":"Tittel","image":"Kjøretøybilde","info":"Kjøretøyinfo","bars":"Alle sensorbarer","icons":"Alle ikonrader","section_break":"Seksjonsbrudd"},"actions":{"collapse_margins":"Skjul marginer","expand_margins":"Utvid marginer","collapse_options":"Skjul alternativer","expand_options":"Utvid alternativer","add_break":"Legg til seksjonsbrudd","delete_break":"Slett seksjonsbrudd"},"css":{"header":"Global CSS","description":"Skriv inn egendefinerte CSS-regler her for å overstyre kortets standardstil. Disse reglene vil bli brukt direkte på kortet. Bruk med forsiktighet.","label":"Egendefinert CSS","input_description":"Skriv inn dine egendefinerte CSS-regler her."},"conditions":{"header":"Betingelseslogikk","description":"Valgfritt vis eller skjul denne seksjonen basert på en enhets tilstand.","type_label":"Betingelsestype","entity_label":"Betingelsesenhet","state_label":"Betingelsestilstand","types":{"none":"Ingen (Vis Alltid)","show":"Vis Når...","hide":"Skjul Når..."}},"margins":{"header":"Marginer","top":"Toppmargin","bottom":"Bunnmargin"},"columns":{"left":"Venstre kolonne","right":"Høyre kolonne","empty":"Slipp seksjoner her"},"column_width":{"title":"Kolonnebredde","description":"Konfigurer breddeforholdet mellom venstre og høyre kolonner","50_50":"Lik (50/50)","30_70":"Smal venstre, bred høyre (30/70)","70_30":"Bred venstre, smal høyre (70/30)","40_60":"Litt smal venstre (40/60)","60_40":"Litt bred venstre (60/40)"},"dashboard":{"top":"Toppseksjon","top_middle":"Topp Midtseksjon","left_middle":"Venstre Midtseksjon","middle":"Midtseksjon","middle_empty":"Kjøretøybildeområde (Anbefalt)","right_middle":"Høyre Midtseksjon","bottom_middle":"Bunn Midtseksjon","bottom":"Bunnseksjon"},"top_view":{"header":"Dashbordvisningsinnstillinger","description":"Konfigurer mellomrom og layoutinnstillinger for dashbordvisning","side_margin":"Sidemarg","side_margin_help":"Marg på sidene av dashbordet i piksler","middle_spacing":"Midtmellomrom","middle_spacing_help":"Mellomrom mellom midtkolonnene i piksler","vertical_spacing":"Vertikalt Mellomrom","vertical_spacing_help":"Mellomrom mellom rader i piksler"},"break_styles":{"blank":"Blank (ingen linje)","line":"Solid linje","double_line":"Dobbel linje","dotted":"Stiplet linje","double_dotted":"Dobbelt stiplet linje","shadow":"Skyggegradient"},"break_style":{"header":"Break Style","style_label":"Stil","thickness_label":"Tykkelse","width_percent_label":"Bredde (%)","color_label":"Farge"},"half_full":{"row1":"Row 1 (Split)","row1_col1":"Row 1 - Left Column","row1_col2":"Row 1 - Right Column","row2":"Row 2 (Full Width)","row2_full":"Rad 2, full bredde (100%)"},"full_half":{"row1":"Row 1 (Full Width)","row2":"Row 2 (Split)","row2_col1":"Row 2 - Left Column","row2_col2":"Row 2 - Right Column","row1_full":"Rad 1, full bredde (100%)"},"title":"Tilpass layout","description":"Tilpass layout, bestill og legg til seksjoner i kortet ditt","condition_prompt":"Velg \\"Vis\\" eller \\"Skjul\\" for å konfigurere enhetstilstand"},"container_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"},"row_widths":{"25":"25% bredde","50":"50% bredde","75":"75% bredde","100":"100% (Full bredde)"},"info":{"arrange_info_rows":"Arranger info rader","title":"Kortinformasjon","description":"Konfigurer informasjonsrader og enheter for å vise kjøretøydetaljer som plassering, kjørelengde, etc. Info -elementer vises på en enkelt linje når det er mulig, og pakker til flere linjer i smale containere.","template_mode":"Malmodus","template_mode_description":"Bruk en mal for å formatere enhetsverdien. Maler lar deg bruke syntaks for hjemmeassistent for kompleks formatering.","template_examples_header":"Vanlige eksempler:"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Utviklet av","discord_button":"Bli med i vår Discord","github_button":"Besøk vår Github","docs_button":"Se vår dokumentasjon","support_title":"Støtt Ultra Vehicle Card","support_para":"Dine generøse donasjoner driver utviklingen av fantastiske funksjoner for dette kortet! Uten støtte fra brukere som deg ville kontinuerlig innovasjon ikke vært mulig.","donate_button":"DONÉR (PAYPAL)","support_description":"Dine sjenerøse tips gir utviklingen av fantastiske funksjoner for dette kortet! Uten støtte fra brukere som deg, ville ikke innovasjon ikke være mulig."},"custom_icons":{"title":"Egendefinerte Ikoner","description":"Definer egendefinerte ikoner for forskjellige tilstander.","icon_entity":"Ikonentitet","default_icon":"Standard Ikon","state_icons":"Tilstandsikoner","state":"Tilstand","icon":"Ikon"},"custom_active_state_text":"Egendefinert Aktiv Tilstandstekst","custom_inactive_state_text":"Egendefinert Inaktiv Tilstandstekst","image_settings":{"title":"Bildeinnstillinger","description":"Konfigurer hovedbildets utseende.","type":"Bildetype","width":"Bildebredde","crop":"Bildebeskjæring","entity":"Bildeentitet","entity_description":"Enhet som gir bilde-URL","text_color":"Entity Color","text_color_description":"Color for the entity value","name_color":"Name Color","name_color_description":"Color for the entity name label","icon_color":"Icon Color"},"entity_settings":{"entity":"Enhet","entity_description":"Velg en enhet for å vise informasjon fra","name":"Name","name_description":"Overstyr enhetsnavnet (la være tomt for å bruke enhetens vennlige navn)","icon":"Ikon","icon_placeholder":"mdi:power-plug","show_icon":"Vis ikon","show_name":"Vis navn","show_name_description":"Vis enhetens navn før verdien","click_action":"Click Action","more_info":"More Info","navigate":"Navigate","url":"URL (External)","url_path":"URL","call_service":"Call Service","none":"None","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to when clicked (e.g., /lovelace/0)","url_description":"URL to open when clicked","service":"Service","service_description":"Service to call (e.g., light.turn_on)","service_data":"Service Data (JSON)","template_mode":"Use Template for Value","template_mode_description":"Bruk en mal for å formatere enhetsverdien","value_template":"Verdimal","template_header":"Verdimal","template_examples_header":"Template Examples","template_basic":"Grunnleggende verdi","template_units":"Med enheter","template_round":"Runde til 1 desimal","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Entity Size","text_size_description":"Size of the entity value text in pixels","name_size":"Name Size","name_size_description":"Size of the entity name text in pixels","icon_color":"Ikonfarge","name_color":"Navnfarge","text_color":"Entity Color","size_settings":"Size Settings","color_settings":"Color Settings","entity_color":"Enhetsfarge"}}');var vt=o.t(ft,2);const bt=JSON.parse('{"editor":{"tabs":{"settings":"Innstillingar","bars":"Søyler","icons":"Ikon","customize":"Tilpass","about":"Om","info":"Info"},"settings_subtabs":{"general":"Generelt","action_images":"Handlingsbilete"},"action_images":{"title":"Innstillingar for Handlingsbilete","description":"Konfigurer bilete som vil visast når spesifikke entitetstilstandar er oppfylte.","add_image":"Legg til Handlingsbilete","no_images":"Ingen handlingsbilete konfigurert enno. Legg til eitt for å kome i gang.","entity_settings":"Entitetsinnstillingar","entity_placeholder":"Vel ein entitet","state_placeholder":"Angi tilstandsverdi","image_settings":"Bileteinnstillingar","image_type":{"title":"Biletetype","description":"Vel korleis du vil levere biletet","upload":"Last opp bilete","url":"Bilete-URL","entity":"Entitetsbilete","none":"Ingen"},"delete_confirm":"Er du sikker på at du vil slette dette handlingsbiletet?","actions":{"duplicate":"Dupliser","delete":"Slett","expand":"Utvid","collapse":"Skjul","drag":"Dra for å endre rekkefølgje"},"preview":{"no_entity":"Ingen entitet vald","any_state":"Einkvar tilstand","no_image":"Ingen bilete"},"template_mode":"Template Mode","template_description":"Use a template to determine when this image should be shown. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","template_label":"Visningsmal","template_help":"Enter a template that returns true/false. This image will be shown when the template evaluates to true. Use Jinja2 syntax: {{ states(...) }}"},"card_settings":{"title":"Korttittel","title_alignment":"Titteljustering","title_size":"Tittelstorleik","title_description":"Tittel som vert vist øvst på kortet (valfritt)","title_alignment_description":"Korleis korttittelen vert justert","title_size_description":"Storleiken på korttittelen i pikslar","format_entities":"Formater Einingsverdi","format_entities_description":"Aktiver ytterlegare formatering av einingsverdi (legg til komma, konverter einingar, osv.)","show_units":"Vis Einingar","show_units_description":"Vis måleeiningar ved sida av verdiar","help_highlight":"Hjelp med å fremheve","help_highlight_description":"Vis visuelle høydepunkter når du bytter mellom redigeringsfaner for å identifisere hvilken seksjon du redigerer"},"vehicle_info":{"title":"Køyretøyinformasjon","location":{"title":"Plasseringseining","description":"Vel eininga som viser køyretøyet si noverande plassering.","show":"Vis Plassering","show_description":"Vis køyretøyet si plassering"},"mileage":{"title":"Kilometereining","description":"Vel eininga som representerer køyretøyet sin totale kilometerstand eller kilometerteller.","show":"Vis Kilometerstand","show_description":"Vis køyretøyet sin kilometerstand"},"car_state":{"title":"Køyretøytilstandseining","description":"Vel eininga som representerer køyretøyet sin noverande tilstand (t.d. parkert, køyrande, ladar).","show":"Vis Køyretøytilstand","show_description":"Vis køyretøyet sin tilstand"}},"images":{"common":{"url_description":"Skriv inn URL-en for biletet","width_description":"Bredde i prosent av kortet","width_over_100":"Verdier over 100% kan bidra til å beskjære tomt plass rundt bilder"},"vehicle":{"title":"Køyretøybilete","description":"Konfigurer hovudbiletet som vert vist for køyretøyet.","type":"Køyretøybiletetype","width":"Biletebreidd","crop":"Skjer biletet","entity":"Bileteeining","entity_description":"Eining som gir bilete-URL"}},"crop":{"title":"Bileteskjering","top":"Topp","right":"Høgre","bottom":"Botn","left":"Venstre","pixels":"PX","help":"Angi verdiar i pikslar (positive eller negative) for å justere skjering og utfylling"},"alignment":{"left":"Venstre","center":"Senter","right":"Høgre"},"common":{"choose_file":"Vel fil","no_file_chosen":"Ingen fil vald","entity":"Eining","width":"Breidd","width_description":"Breidd som prosent av kortet","width_over_100":"Verdier over 100% kan bidra til å beskjære tomt plass rundt bilder","none":"Ingen","default":"Standard","upload":"Last opp","url":"URL","url_description":"URL som peiker til biletet","reset":"Tilbakestill","condition_prompt":"Velg \\"Vis\\" eller \\"Skjul\\" for å konfigurere enhetstilstand"},"bars":{"title":"Prosentsøyler","description":"Legg til prosentsøyler for å vise verdiar som drivstoffnivå, batterilading eller rekkevidde. Kvar søyle kan vise ein primær prosentverdi med valfrie etikettar til venstre og høgre.","add":"Legg til ny søyle","duplicate":"Dupliser søyle","delete":"Slett søyle","expand":"Utvid søyle","collapse":"Skjul søyle","bar_prefix":"Søyle","no_entity":"Ingen eining vald","bar_radius":{"round":"Rund","square":"Firkantet","rounded-square":"Avrunda Firkant"},"tabs":{"config":"Konfigurasjon","colors":"Fargar","animation":"Animasjon"},"settings":{"header":"Søylekonfigurasjon","entity":"Hovudentitet","entity_description":"Entitet som gir den primære verdien (0-100) for framgangssøyla","limit_entity":"Grenseentitet","limit_entity_description":"Entitet som viser ein grensemarkør på søyla (f.eks. ladeterskel)","limit_color":"Grenseindikator Farge","limit_color_description":"Farge til grenseindikatorlinja","bar_size":"Søyletjukkleik","bar_size_description":"Storleik/tjukkleik på framgangssøyla","bar_radius":"Søyleradius","bar_radius_description":"Form på hjørna til framgangssøyla","width":"Søylebradde","width_description":"Bredde på framgangssøyla som prosent av tilgjengeleg plass. Bruk dette for å plassere fleire søyler side ved side.","alignment":"Etikett Justering","alignment_description":"Korleis etikettane på framgangssøyla justerast","show_percentage":"Vis Prosentdel","show_percentage_description":"Vis prosentverdien inni søyla"},"percentage":{"header":"Prosenttekst","display_header":"Visning av Prosenttekst","display_description":"Kontroller synlegheita og utsjånaden av prosentverdiar vist direkte på søyla. Desse tala gir ein tydeleg visuell indikator på det noverande nivået.","text_size":"Tekststorleik","calculation_header":"Prosentutrekning","calculation_description":"Konfigurer korleis søyla sin prosentvise fyllingsgrad vert rekna ut ved hjelp av ein av alternativa nedanfor.","type_header":"Prosentutrekning","type_label":"Prosenttype","type_description":"Korleis prosentverdien som visast i søyla reknast ut","type_entity":"Entitet (0-100)","type_difference":"Forskjell (Mengd/Total)","amount_entity":"Mengdentitet","amount_description":"Entitet som representerer noverande mengd/verdi (teljar)","total_entity":"Totalentitet","total_description":"Entitet som representerer total mengd/maksimum (nemnar)"},"left_side":{"header":"Venstre Side","section_description":"Konfigurer tittel og einingsverdi som vert vist på venstre side av søyla. Dette er nyttig for å vise etikettar som \'Rekkevidde\' eller \'Batteri\' saman med verdiane deira.","toggle_description":"Vis eller skjul venstre side av søyleetiketten","title":"Venstre Tittel","title_description":"Valfri etikett som vert vist på venstre side under søylen.","entity":"Venstre Eining","entity_description":"Eining som får verdien vist på venstre side av søylen.","alignment_description":"Kontrollerer korleis denne etiketten vert justert under søylen.","title_size":"Tittelstorleik","value_size":"Verdistorleik","hidden_message":"Venstre side er skjult"},"right_side":{"header":"Høgre Side","section_description":"Konfigurer tittel og einingsverdi som vert vist på høgre side av søyla. Dette er ideelt for komplementerande informasjon som \'Tid til Full\' eller sekundære målingar.","toggle_description":"Vis eller skjul høgre side av søyleetiketten","title":"Høgre Tittel","title_description":"Valfri etikett som vert vist på høgre side under søylen.","entity":"Høgre Eining","entity_description":"Eining som får verdien vist på høgre side av søylen.","alignment_description":"Kontrollerer korleis denne etiketten vert justert under søylen.","title_size":"Tittelstorleik","value_size":"Verdistorleik","hidden_message":"Høgre side er skjult"},"colors":{"header":"Fargar","bar_color":"Søylefarge","background_color":"Bakgrunnsfarge","border_color":"Kantfarge","limit_indicator_color":"Grenseindikatorfarve","left_title_color":"Venstre Tittelfarge","left_value_color":"Venstre Verdifarge","right_title_color":"Høgre Tittelfarge","right_value_color":"Høgre Verdifarge","percentage_text_color":"Prosenttekstfarge","reset_color":"Tilbakestill til standardfarge"},"gradient":{"header":"Gradientmodus","description":"Lag vakre fargeovergangar på framgangssøylene dine. Ideelt for å vise batterinivå, drivstoffmålarar eller andre statusindikatorar som krev visuell framheving.","toggle":"Bruk gradient","toggle_description":"Bruk ein gradient for framdriftslinja i staden for ein einsfarga farge","display_mode":"Gradientvisningsmodus","display_mode_full":"Full","display_mode_value_based":"Verdibasert","display_mode_description":"Full: Vis heile gradienten. Verdibasert: Vis gradient opp til noverande verdi.","editor_header":"Gradienteditor","add_stop":"Legg til stopp","display_mode_cropped":"Beskoren"},"animation":{"header":"Handlingsanimasjon","description":"Legg til animasjonar på søylen når ei spesifikk eining når ein bestemt tilstand. Perfekt for å vise ladestatus, alarmtilstandar og meir.","pro_tip":"Pro-tips: For \'alltid aktive\' animasjonar, vel ein animasjonstype men la einings- og tilstandsfelta vere tomme. Prøv \'Bobler\' og \'Fyll\' animasjonane!","entity":"Animasjonseining","entity_description":"Eining som utløyser animasjonen når den matchar den angitte tilstanden","state":"Einingstilstand","state_description":"Når einingstilstanden matchar denne verdien, vil animasjonen bli utløyst","type":"Animasjonstype","type_description":"Animasjonseffekten som vert vist når einingstilstanden samsvarar","select_entity_prompt":"Vel ei Eining og skriv inn tilstanden du ønskjer å utløyse animasjonen med (døme: \\"charging\\", \\"on\\", \\"idle\\")","action_entity":"Handlingsenhet","action_state":"Handlingsstatus","action_description":"Denne animasjonen vil overstyre den vanlige animasjonen når den spesifiserte enheten er i en spesifikk tilstand.","action_entity_prompt":"Velg en handlingsenhet og stat for å definere når denne animasjonen skal overstyre den vanlige animasjonen"},"bar_sizes":{"thin":"Tynn","regular":"Normal","thick":"Tjukk","thiccc":"Ekstra tjukk"},"bar_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"},"bar_alignments":{"space-between":"Mellomrom mellom","flex-start":"Venstre","center":"Senter","flex-end":"Høgre"},"bar_styles":{"flat":"Flat (Standard)","glossy":"Blank","embossed":"Relief","inset":"Innsett","gradient":"Gradientoverlegg","neon":"Neonglød","outline":"Kontur","glass":"Glass","metallic":"Metallisk","neumorphic":"Neumorfisk"},"animation_types":{"none":"Ingen","charging-lines":"Lading (Diagonale linjer)","pulse":"Pulserande","blinking":"Blinkande","bouncing":"Hoppande","glow":"Glødande","rainbow":"Regnboge","bubbles":"Bobler","fill":"Fyll"},"custom_bar_settings":{"title":"Tilpassa Søyleinnstillingar","description":"Definer tilpassa konfigurasjonar for individuelle søyler.","name":"Søylenamn","entity":"Eining","unit":"Eining","min":"Min Verdi","max":"Maks Verdi","thresholds":"Terskelverdiar","severity":"Alvorlegheitsgrad"},"template":{"description":"Bruk en mal for å formatere den viste teksten, konvertere enheter eller vise beregnede verdier.","enable":"Aktiver malmodus","template_label":"Mal","helper_text":"Use Home Assistant templating syntax. Examples:\\n• {{ states(\'sensor.temperature\') | float * 1.8 + 32 }} °F\\n• {{ now().strftime(\\"%b %d, %H:%M\\") }}","examples_header":"Vanlige eksempler:","examples":{"temperature":"{{ states(\'sensor.temperature\') | float * 1.8 + 32 }}°F - Convert Celsius to Fahrenheit","datetime":"{{ now().strftime(\\"%b %d, %H:%M\\") }} - Format current date/time","power":"{{ \'Charging at \' + states(\'sensor.ev_power\') + \' kW\' }} - Combine text and sensor value"}}},"icons":{"title":"Kortikon","description":"Legg til ikonrader for å vise fleire ikon på kortet ditt. Kvar rad kan konfigurerast med forskjellige innstillingar. Merk: Ikonrader og seksjonsrekkjefølgje kan omorganiserast i Tilpassa-fanen.","add_row":"Legg til ikonrad","duplicate_row":"Dupliser rad","delete_row":"Slett rad","expand_row":"Utvid rad","collapse_row":"Skjul rad","no_row":"Ingen ikonrader er lagt til","row_prefix":"Rad","icon_prefix":"Ikon","row_settings":{"header":"Radinnstillingar","width":"Radbreidd","width_description":"Breidd på raden som prosent av kortbreidda","alignment":"Radjustering","alignment_description":"Korleis ikon vert justert i denne raden","spacing":"Ikonavstand","spacing_description":"Mengde mellomrom mellom ikon i denne raden","columns":"Tal på kolonnar","columns_description":"Tal på kolonnar med jamn storleik i rada (0 = automatisk fordeling basert på innhald)","confirmation_mode":"Stadfestingsmodus","confirmation_mode_description":"Krev to trykk/klikk for å aktivere ikon i denne rada, for å hindre utilsikta interaksjonar","layout_info_title":"Hvordan layoutinnstillinger fungerer"},"add_icon":"Legg til ikon","duplicate_icon":"Dupliser ikon","delete_icon":"Slett ikon","expand_icon":"Utvid ikon","collapse_icon":"Skjul ikon","no_icon":"Ingen ikon vald","icon_settings":{"header":"Ikoninnstillingar","entity":"Eining","entity_description":"Eining som vert vist med dette ikonet","icon":"Ikon","icon_description":"Vel eit ikon eller skriv inn eit eigendefinert ikon","name":"Namn","name_description":"Tilpassa namn som vert vist under ikonet (brukar einingsnamn som standard viss ikkje spesifisert)","show_name":"Vis Namn","show_name_description":"Vis namneteksten under ikonet","show_state":"Vis Tilstand","show_state_description":"Vis eininga sin tilstand under ikonet","show_units":"Vis Einingar","show_units_description":"Inkluder einingar når tilstanden vert vist","text_position":"Tekstposisjon","text_position_description":"Kor namn- og tilstandsteksten vert plassert i forhold til ikonet","click_action":"Klikkehandling","service":"Teneste","service_description":"Teneste som skal kallast (t.d. light.turn_on)","service_data":"Tenestedata (JSON)","service_data_description":"JSON-data sendt med tenesteoppkallet","action":"Handling (JSON/Teneste)","action_description":"Avansert handlingskonfigurasjon (sjå dokumentasjon)","navigation_path":"Navigasjonssti","navigation_path_description":"Sti å navigere til (f.eks. /lovelace/dashboard)","url":"URL","url_description":"URL å åpne i ny fane","automation_entity":"Automatiseringseining","automation_entity_description":"Automatisering som skal utløysast når det vert klikka"},"icon_appearance":{"header":"Ikonutforming","icon":"Ikonspesifikt","general":"Generell Utsjånad","active":"Aktiv Tilstand","inactive":"Inaktiv Tilstand","state_conditions":"Tilstandsbetingelsar","advanced":"Avanserte Innstillingar","icon_size":"Ikonstorleik","icon_size_description":"Storleik på ikonet i pikslar","text_size":"Tekststorleik","text_size_description":"Storleik på namn/tilstandstekst i pikslar","text_alignment":"Tekstjustering","text_alignment_description":"Korleis teksten vert justert under ikonet","icon_background":"Ikonbakgrunn","icon_background_description":"Legg til ein bakgrunnsform bak ikonet","icon_background_color":"Ikonbakgrunnsfarge","icon_background_color_description":"Farge på bakgrunnen bak ikonet","container_background_color":"Container bakgrunnsfarge","container_background_color_description":"Farge på bakgrunnen bak hele ikonbeholderen","text_appearance":"Tekstutforming","container":{"header":"Containerutsjånad","vertical_alignment":"Vertikal Justering","vertical_alignment_description":"Juster ikon og tekst vertikalt inne i behaldaren.","width":"Behaldar Breidde","width_description":"Angi breidda på ikonbehaldaren i høve til rada.","background":"Form på behaldarbakgrunn","background_description":"Vel ein bakgrunnsform for heile ikonbehaldaren."},"show_when_active":"Vis ikon når aktivt","show_when_active_description":"Vis dette ikonet berre når det er i ein aktiv tilstand","template_mode":"Malmodus","template_description":"Use a template to determine active/inactive state. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","active_template":"Aktiv Mal","active_template_description":"Mal som evaluerer til sant når ikonet skal vere aktivt.","active_state":"Aktiv tilstand","active_state_description":"Tilstandsstreng som representerer \\"aktiv\\".","active_state_text":"Eigendefinert Tekst for Aktiv Tilstand","active_state_text_description":"Overskriv den viste teksten når ikonet er aktivt. Lat vere tomt for å bruke den faktiske tilstanden.","inactive_template":"Inaktiv Mal","inactive_template_description":"Mal som evaluerer til sant når ikonet skal vere inaktivt.","inactive_state":"Inaktiv tilstand","inactive_state_description":"Tilstandsstreng som representerer \\"inaktiv\\".","inactive_state_text":"Eigendefinert Tekst for Inaktiv Tilstand","inactive_state_text_description":"Overskriv den viste teksten når ikonet er inaktivt. Lat vere tomt for å bruke den faktiske tilstanden.","active_icon":"Aktivt ikon","inactive_icon":"Inaktivt ikon","active_icon_color":"Farge på aktivt ikon","inactive_icon_color":"Farge på inaktivt ikon","active_name_color":"Farge på aktivt namn","inactive_name_color":"Farge på inaktivt namn","active_state_color":"Farge på aktiv tilstand","inactive_state_color":"Farge på inaktiv tilstand","show_icon_active":"Vis ikon når aktiv","show_icon_active_description":"Vis ikonet når tilstanden er aktiv.","show_icon_inactive":"Vis ikon når inaktivt","show_icon_inactive_description":"Vis ikonet når tilstanden er inaktiv.","custom_active_state_text":"Eigendefinert Aktiv Tilstandstekst","custom_inactive_state_text":"Eigendefinert Inaktiv Tilstandstekst","action_description":"Handling som skal utførast når ikonet vert klikka på.","show_name_active":"Vis namn når aktivt","show_name_active_description":"Vis namnet når tilstanden er aktiv.","show_name_inactive":"Vis namn når inaktivt","show_name_inactive_description":"Vis namnet når tilstanden er inaktiv.","show_state_active":"Vis tilstand når aktiv","show_state_active_description":"Vis tilstanden når tilstanden er aktiv.","show_state_inactive":"Vis tilstand når inaktiv","show_state_inactive_description":"Vis tilstanden når tilstanden er inaktiv.","use_entity_color_for_icon":"Bruk enhetsfarge for ikon","use_entity_color_for_icon_description":"Use the entity\'s color attribute for the icon when available","use_entity_color_for_icon_background":"Bruk enhetsfarge for ikonbakgrunn","use_entity_color_for_icon_background_description":"Bruk enhetens fargeattributt for ikonbakgrunnen når det er tilgjengelig","use_entity_color_for_container_background":"Bruk enhetsfarge for container","use_entity_color_for_container_background_description":"Bruk enhetens fargeattributt for containerbakgrunnen når det er tilgjengelig","name_size":"Navnestørrelse","name_size_description":"Størrelse på enhetens navntekst i piksler"},"tabs":{"general":"Generelt","appearance":"Utsjånad","states":"Tilstandar","active_state":"Aktiv Tilstand","inactive_state":"Inaktiv Tilstand"},"alignments":{"flex-start":"Venstre","center":"Senter","flex-end":"Høgre","space-between":"Mellomrom mellom","space-around":"Mellomrom rundt","space-evenly":"Jamnt mellomrom"},"vertical_alignments":{"flex-start":"Topp","center":"Midten","flex-end":"Botn"},"spacing":{"none":"Ingen","small":"Liten","medium":"Medium","large":"Stor"},"text_positions":{"below":"Under ikonet","beside":"Ved sida av ikonet","none":"Ingen tekst","top":"Topp","left":"Venstre","right":"Høgre"},"reset":{"size":"Tilbakestill til standardstorleik","color":"Tilbakestill til standardfarge","all":"Tilbakestill til standardverdiar"},"click_actions":{"toggle":"Slå på/av eining","more-info":"Vis meir informasjon","navigate":"Naviger til sti","url":"Opne URL","call-service":"Kall teneste","perform-action":"Utfør handling","location-map":"Vis plasseringskart","assist":"Stemmeassistent","trigger":"Utløys","none":"Inga handling","descriptions":{"toggle":"Veksler tilstanden til eininga.","more-info":"Opnar meir-info dialogen for eininga.","navigate":"Navigerer til den spesifiserte Lovelace-stien.","url":"Opnar den spesifiserte URL-en i ein ny fane.","call-service":"Kallar den spesifiserte Home Assistant-tenesta.","perform-action":"Utfører ei tilpassa handling (sjå dokumentasjon).","location-map":"Viser eininga på eit kart.","assist":"Opnar Home Assistant stemmeassistenten.","trigger":"Utløyser eininga (automatisering, script, knapp osv.).","none":"Inga handling vil bli utført."}},"backgrounds":{"none":"Ingen","circle":"Sirkel","square":"Kvadrat","rounded_square":"Avrunda kvadrat"},"container_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"},"row_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"},"template_mode":"Malmodus","template_mode_active_description":"Bruk en mal for å bestemme når dette ikonet skal være aktivt. Maler lar deg bruke syntaks for hjemmeassistent for komplekse forhold.","template_mode_inactive_description":"Bruk en mal for å bestemme når dette ikonet skal være inaktivt. Maler lar deg bruke syntaks for hjemmeassistent for komplekse forhold.","template_examples_header":"Vanlige eksempler:","enable_template_mode":"Aktiver malmodus"},"customize":{"layout":{"title":"Layoutstil","description":"Vel mellom einkel- eller dobbelkolumnelayout for kortet","header":"Layoutinnstillingar"},"layout_types":{"single":"Einkelkolonne","double":"Dobbelkolonne","dashboard":"Toppvising","half_full":"Halv + full","full_half":"Full + halvparten"},"sections":{"header":"Kortseksjonar","arrangement_header":"Seksjonsarrangement","arrangement_desc_base":"Dra og slepp seksjonar for å arrangere rekkjefølgja på kortet.","arrangement_desc_single_extra":"Alle seksjonar vil visast i ein einkelkolonne.","arrangement_desc_double_extra":"I ein dobbelkolumnelayout kan du plassere kvar seksjon i venstre eller høgre kolonne.","arrangement_desc_dashboard_extra":"I ei toppvising kan du plassere seksjonar rundt køyretøybiletet ditt."},"section_labels":{"title":"Tittel","image":"Køyretøybilete","info":"Køyretøyinformasjon","bars":"Alle Sensorsøyler","icons":"Alle Ikonrader","section_break":"Seksjonsbrudd"},"actions":{"collapse_margins":"Skjul Marginar","expand_margins":"Vis Marginar","collapse_options":"Skjul Alternativ","expand_options":"Vis Alternativ","add_break":"Legg til seksjonsbrudd","delete_break":"Slett seksjonsbrudd"},"css":{"header":"Global CSS","description":"Skriv inn eigendefinerte CSS-reglar her for å overstyre standard kortstil. Desse reglane vil bli brukt direkte på kortet. Bruk med varsemd.","label":"Eigendefinert CSS","input_description":"Skriv inn dine eigendefinerte CSS-reglar her."},"conditions":{"header":"Betinga Logikk","description":"Vis eller skjul denne seksjonen basert på ein einings tilstand.","type_label":"Betingingstype","entity_label":"Betingingseining","state_label":"Betingingstilstand","types":{"none":"Ingen (Vis Alltid)","show":"Vis Når...","hide":"Skjul Når..."}},"margins":{"header":"Marginar","top":"Toppmarginar","bottom":"Botnmarginar"},"columns":{"left":"Venstre Kolonne","right":"Høgre Kolonne","empty":"Slepp seksjonar her"},"column_width":{"title":"Kolonnebreidd","description":"Konfigurer breiddeforholdet mellom venstre og høgre kolonne","50_50":"Like (50/50)","30_70":"Smal venstre, brei høgre (30/70)","70_30":"Brei venstre, smal høgre (70/30)","40_60":"Litt smal venstre (40/60)","60_40":"Litt brei venstre (60/40)"},"dashboard":{"top":"Toppseksjon","top_middle":"Øvre Midtseksjon","left_middle":"Venstre Midtseksjon","middle":"Midtseksjon","middle_empty":"Køyretøybileteområde (Tilrådd)","right_middle":"Høgre Midtseksjon","bottom_middle":"Nedre Midtseksjon","bottom":"Botnseksjon"},"top_view":{"header":"Toppvisingsinnstillingar","description":"Konfigurer avstands- og layoutinnstillingar for toppvising","side_margin":"Sidemarginar","side_margin_help":"Marginar på sidene av visinga i pikslar","middle_spacing":"Midtavstand","middle_spacing_help":"Avstand mellom midtkolonnar i pikslar","vertical_spacing":"Vertikal Avstand","vertical_spacing_help":"Avstand mellom rader i pikslar"},"break_styles":{"blank":"Blank (ingen linje)","line":"Solid linje","double_line":"Dobbel linje","dotted":"Stiplet linje","double_dotted":"Dobbelt stiplet linje","shadow":"Skyggegradient"},"break_style":{"header":"Break Style","style_label":"Stil","thickness_label":"Tykkelse","width_percent_label":"Bredde (%)","color_label":"Farge"},"half_full":{"row1":"Row 1 (Split)","row1_col1":"Row 1 - Left Column","row1_col2":"Row 1 - Right Column","row2":"Row 2 (Full Width)","row2_full":"Rad 2, full bredde (100%)"},"full_half":{"row1":"Row 1 (Full Width)","row2":"Row 2 (Split)","row2_col1":"Row 2 - Left Column","row2_col2":"Row 2 - Right Column","row1_full":"Rad 1, full bredde (100%)"},"title":"Tilpass layout","description":"Tilpass layout, bestill og legg til seksjoner i kortet ditt","condition_prompt":"Velg \\"Vis\\" eller \\"Skjul\\" for å konfigurere enhetstilstand"},"container_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"},"row_widths":{"25":"25% breidd","50":"50% breidd","75":"75% breidd","100":"100% (Full breidd)"},"info":{"arrange_info_rows":"Arranger info rader","title":"Kortinformasjon","description":"Konfigurer informasjonsrader og enheter for å vise kjøretøydetaljer som plassering, kjørelengde, etc. Info -elementer vises på en enkelt linje når det er mulig, og pakker til flere linjer i smale containere.","template_mode":"Malmodus","template_mode_description":"Bruk en mal for å formatere enhetsverdien. Maler lar deg bruke syntaks for hjemmeassistent for kompleks formatering.","template_examples_header":"Vanlige eksempler:"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Utvikla av","discord_button":"Bli med i vår Discord","github_button":"Besøk vår Github","docs_button":"Sjå vår dokumentasjon","support_title":"Støtt Ultra Vehicle Card","support_para":"Dine generøse donasjonar driv utviklinga av fantastiske funksjonar for dette kortet! Utan støtte frå brukarar som deg ville kontinuerleg innovasjon ikkje vore mogleg.","donate_button":"DONÉR (PAYPAL)","support_description":"Dine sjenerøse tips gir utviklingen av fantastiske funksjoner for dette kortet! Uten støtte fra brukere som deg, ville ikke innovasjon ikke være mulig."},"custom_icons":{"title":"Eigendefinerte Ikon","description":"Definer eigendefinerte ikon for ulike tilstandar.","icon_entity":"Ikoneining","default_icon":"Standardikon","state_icons":"Tilstandsikon","state":"Tilstand","icon":"Ikon"},"custom_active_state_text":"Eigendefinert Aktiv Tilstandstekst","custom_inactive_state_text":"Eigendefinert Inaktiv Tilstandstekst","image_settings":{"title":"Bileteinnstillingar","description":"Konfigurer hovudbiletet sitt utsjånad.","type":"Biletetype","width":"Biletebreidd","crop":"Skjer Bilete","entity":"Bileteeining","entity_description":"Eining som leverer bilete-URL","text_color":"Entity Color","text_color_description":"Color for the entity value","name_color":"Name Color","name_color_description":"Color for the entity name label","icon_color":"Icon Color"},"entity_settings":{"entity":"Enhet","entity_description":"Velg en enhet for å vise informasjon fra","name":"Name","name_description":"Overstyr enhetsnavnet (la være tomt for å bruke enhetens vennlige navn)","icon":"Ikon","icon_placeholder":"mdi:power-plug","show_icon":"Vis ikon","show_name":"Vis navn","show_name_description":"Vis enhetens navn før verdien","click_action":"Click Action","more_info":"More Info","navigate":"Navigate","url":"URL (External)","url_path":"URL","call_service":"Call Service","none":"None","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to when clicked (e.g., /lovelace/0)","url_description":"URL to open when clicked","service":"Service","service_description":"Service to call (e.g., light.turn_on)","service_data":"Service Data (JSON)","template_mode":"Use Template for Value","template_mode_description":"Bruk en mal for å formatere enhetsverdien","value_template":"Verdimal","template_header":"Verdimal","template_examples_header":"Template Examples","template_basic":"Grunnleggende verdi","template_units":"Med enheter","template_round":"Runde til 1 desimal","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Entity Size","text_size_description":"Size of the entity value text in pixels","name_size":"Name Size","name_size_description":"Size of the entity name text in pixels","icon_color":"Ikonfarge","name_color":"Navnfarge","text_color":"Entity Color","size_settings":"Size Settings","color_settings":"Color Settings","entity_color":"Enhetsfarge"}}');var yt=o.t(bt,2);const wt=JSON.parse('{"editor":{"tabs":{"settings":"Inställningar","bars":"Staplar","icons":"Ikoner","customize":"Anpassa","about":"Om","info":"Info"},"settings_subtabs":{"general":"Allmänt","action_images":"Åtgärdsbilder"},"action_images":{"title":"Åtgärdsbilder Inställningar","description":"Konfigurera bilder som ska visas när specifika enhetstillstånd uppfylls.","add_image":"Lägg till Åtgärdsbild","no_images":"Inga åtgärdsbilder är konfigurerade ännu. Lägg till en för att komma igång.","entity_settings":"Enhetsinställningar","entity_placeholder":"Välj en enhet","state_placeholder":"Ange tillståndsvärde","image_settings":"Bildinställningar","image_type":{"title":"Bildtyp","description":"Välj hur bilden ska levereras","upload":"Ladda upp Bild","url":"Bild URL","entity":"Enhetsbild","none":"Ingen"},"delete_confirm":"Är du säker på att du vill ta bort denna åtgärdsbild?","actions":{"duplicate":"Duplicera","delete":"Ta bort","expand":"Expandera","collapse":"Minimera","drag":"Dra för att ändra ordning"},"preview":{"no_entity":"Ingen enhet vald","any_state":"Vilket tillstånd som helst","no_image":"Ingen bild"},"template_mode":"Template Mode","template_description":"Use a template to determine when this image should be shown. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","template_label":"Visningsmall","template_help":"Enter a template that returns true/false. This image will be shown when the template evaluates to true. Use Jinja2 syntax: {{ states(...) }}"},"card_settings":{"title":"Korttitel","title_alignment":"Titeljustering","title_size":"Titelstorlek","title_description":"Titel som visas överst på kortet (valfritt)","title_alignment_description":"Hur korttiteln justeras","title_size_description":"Storlek på korttiteln i pixlar","format_entities":"Formatera Enhetsvärden","format_entities_description":"Aktivera ytterligare formatering av enhetsvärden (lägger till kommatecken, konverterar enheter, etc.)","show_units":"Visa Enheter","show_units_description":"Visa enheter bredvid värden","help_highlight":"Hjälp med att lyfta fram","help_highlight_description":"Visa visuella höjdpunkter när du växer mellan redigerarflikar för att identifiera vilket avsnitt du redigerar"},"vehicle_info":{"title":"Fordonsinformation","location":{"title":"Positionsenhet","description":"Välj enheten som visar fordonets nuvarande position.","show":"Visa Position","show_description":"Visa fordonets position"},"mileage":{"title":"Mätarställning Enhet","description":"Välj enheten som representerar total körsträcka eller fordonets vägmätare.","show":"Visa Mätarställning","show_description":"Visa fordonets mätarställning"},"car_state":{"title":"Fordonstillstånd Enhet","description":"Välj enheten som representerar fordonets nuvarande tillstånd (t.ex. parkerad, kör, laddar).","show":"Visa Fordonstillstånd","show_description":"Visa fordonets tillstånd"}},"images":{"common":{"url_description":"Ange bildens URL","width_description":"Bredd i procent av kortet","width_over_100":"Värden över 100% kan hjälpa till att beskära tomma utrymme runt bilder"},"vehicle":{"title":"Fordonsbild","description":"Konfigurera huvudbilden som visas för fordonet.","type":"Fordonsbildtyp","width":"Bildbredd","crop":"Beskär Bild","entity":"Bildenhet","entity_description":"Enhet som levererar bild-URL"}},"crop":{"title":"Bildbeskärning","top":"Topp","right":"Höger","bottom":"Botten","left":"Vänster","pixels":"px","help":"Ange värden i pixlar (positiva eller negativa) för att justera beskärning och padding"},"alignment":{"left":"Vänster","center":"Centrum","right":"Höger"},"common":{"choose_file":"Välj Fil","no_file_chosen":"Ingen fil vald","entity":"Enhet","width":"Bredd","width_description":"Bredd som procent av kortet","width_over_100":"Värden över 100% kan hjälpa till att beskära tomma utrymme runt bilder","none":"Ingen","default":"Standard","upload":"Ladda upp","url":"URL","url_description":"URL som pekar till bilden","reset":"Återställ","condition_prompt":"Välj \\"Visa\\" eller \\"dölj\\" för att konfigurera enhetsvillkor"},"bars":{"title":"Procentuella Staplar","description":"Lägg till procentuella staplar för att visa värden som bränslenivå, batteriladdning eller räckvidd. Varje stapel kan visa ett huvudprocentvärde med valfria etiketter på vänster och höger sida.","add":"Lägg till Ny Stapel","duplicate":"Duplicera Stapel","delete":"Ta bort Stapel","expand":"Expandera Stapel","collapse":"Minimera Stapel","bar_prefix":"Stapel","no_entity":"Ingen enhet vald","bar_radius":{"round":"Rund","square":"Fyrkantig","rounded-square":"Avrundad Fyrkantig"},"tabs":{"config":"Konfiguration","colors":"Färger","animation":"Animation"},"settings":{"header":"Stapelinställningar","entity":"Stapel Procentenhet","entity_description":"Välj en enhet som returnerar ett procentvärde (0-100). Detta styr stapelns fyllnadsnivå.","limit_entity":"Gränsvärde Enhet (valfritt)","limit_entity_description":"Valfritt: Lägg till en vertikal indikatorlinje på stapeln (t.ex. laddgräns för EV-batteri).","limit_color":"Gränsindikator Färg","limit_color_description":"Färg på den vertikala linjen som visar gränspositionen på stapeln. Ändringar kommer att tvinga en kortuppdatering.","bar_size":"Stapelstorlek","bar_size_description":"Definierar tjockleken/höjden på förloppsstapeln.","bar_radius":"Stapelradie","bar_radius_description":"Form på förloppsstapelns hörn","width":"Stapelbredd","width_description":"Definierar bredden på stapeln som en procentandel av kortbredden.","alignment":"Etikettjustering","alignment_description":"Hur vänster och höger etiketter justeras i förhållande till varandra.","show_percentage":"Visa Procent","show_percentage_description":"Visa procentvärdet inne i stapeln"},"percentage":{"header":"Procenttext","display_header":"Procenttext Visning","display_description":"Kontrollera synligheten och utseendet på procentvärden som visas direkt på stapeln. Dessa siffror ger en tydlig visuell indikator på aktuell nivå.","text_size":"Textstorlek","calculation_header":"Procentberäkning","calculation_description":"Konfigurera hur stapelns procentfyllning beräknas med hjälp av ett av alternativen nedan.","type_header":"Procentberäkning","type_label":"Procenttyp","type_description":"Hur procentvärdet som visas i stapeln beräknas","type_entity":"Enhet (0-100)","type_difference":"Differens (Mängd/Total)","amount_entity":"Mängdenhet","amount_description":"Enhet som representerar aktuell mängd/värde (täljare)","total_entity":"Totalenhet","total_description":"Enhet som representerar total mängd/maximum (nämnare)"},"left_side":{"header":"Vänster sida","section_description":"Konfigurera titeln och enhetsvärdet som visas på vänster sida av baren. Detta är användbart för att visa etiketter som \\"räckvidd\\" eller \\"batteri\\" tillsammans med deras värden.","toggle_description":"Visa eller dölj vänster sida av stapeletiketten","title":"Vänster titel","title_description":"Valfri etikett som visas på vänster sida under baren.","entity":"Vänster enhet","entity_description":"Enhet vars värde visas på vänster sida av stången.","alignment_description":"Kontrollerar hur den här etiketten är inriktad under baren.","title_size":"Titelstorlek","value_size":"Värdestorlek","hidden_message":"Vänster sida är dold"},"right_side":{"header":"Höger sida","section_description":"Konfigurera titeln och enhetsvärdet som visas på höger sida av baren. Detta är idealiskt för kompletterande information som \\"tid till full\\" eller sekundära mätningar.","toggle_description":"Visa eller dölj höger sida av stapeletiketten","title":"Rätt","title_description":"Valfri etikett som visas på höger sida under stången.","entity":"Rättighet","entity_description":"Enhet vars värde visas på höger sida av stången.","alignment_description":"Kontrollerar hur den här etiketten är inriktad under baren.","title_size":"Titelstorlek","value_size":"Värdestorlek","hidden_message":"Höger sida är dold"},"colors":{"header":"Färger","bar_color":"Stapelfärg","background_color":"Bakgrundsfärg","border_color":"Kantfärg","limit_indicator_color":"Gränsindikator Färg","left_title_color":"Vänster Titelfärg","left_value_color":"Vänster Värdefärg","right_title_color":"Höger Titelfärg","right_value_color":"Höger Värdefärg","percentage_text_color":"Procenttext Färg","reset_color":"Återställ till standardfärg"},"gradient":{"header":"Lutningsläge","description":"Skapa vackra färgövergångar över dina framstegsstänger. Idealisk för att visa batterinivåer, bränslemätare eller någon statusindikator som kräver visuell betoning.","toggle":"Använd lutning","toggle_description":"Använd en lutning för framstegsfältet istället för en fast färg","display_mode":"Lutningsläge","display_mode_full":"Full","display_mode_value_based":"Värdebaserad","display_mode_description":"FULL: Visa hela lutningen. Värdebaserad: Visa lutningen upp till det aktuella värdet.","editor_header":"Lutningsredaktör","add_stop":"Lägg till stopp","display_mode_cropped":"Beskuren"},"animation":{"header":"Åtgärdsanimation","description":"Lägg till animationer till stapeln när en specifik enhet når ett specifikt tillstånd. Perfekt för att visa laddningstillstånd, larmtillstånd och mer.","pro_tip":"Pro Tips: För \'alltid på\' animationer, välj en animationstyp men lämna enhets- och tillståndsfälten tomma. Prova \'Bubblor\' och \'Fyll\' animationerna!","entity":"Animationsenhet","entity_description":"Enhet som utlöser animationen när den matchar det specificerade tillståndet","state":"Enhetstillstånd","state_description":"När enhetstillståndet matchar detta värde kommer animationen att utlösas","type":"Animationstyp","type_description":"Animationseffekten som ska visas när enhetstillståndet matchar","select_entity_prompt":"Välj en Enhet och ange tillståndet du vill utlösa animationen (exempel: \\"laddar\\", \\"på\\", \\"inaktiv\\")","action_entity":"Handlingsenhet","action_state":"Handlingstillstånd","action_description":"Denna animation kommer att åsidosätta den regelbundna animationen när den angivna enheten är i ett specifikt tillstånd.","action_entity_prompt":"Välj en actionenhet och stat att definiera när denna animation bör åsidosätta den vanliga animationen"},"bar_sizes":{"thin":"Tunn","regular":"Normal","thick":"Tjock","thiccc":"Extra Tjock"},"bar_widths":{"25":"25% Bredd","50":"50% Bredd","75":"75% Bredd","100":"100% (Full Bredd)"},"bar_alignments":{"space-between":"Mellanrum Mellan","flex-start":"Vänster","center":"Centrum","flex-end":"Höger"},"bar_styles":{"flat":"Platt (Standard)","glossy":"Blank","embossed":"Präglad","inset":"Infälld","gradient":"Gradient Överlägg","neon":"Neon Glöd","outline":"Kontur","glass":"Glas","metallic":"Metallisk","neumorphic":"Neumorfisk"},"animation_types":{"none":"Ingen","charging-lines":"Laddning (Diagonala Linjer)","pulse":"Puls","blinking":"Blinkande","bouncing":"Studsande","glow":"Glöd","rainbow":"Regnbåge","bubbles":"Bubblor","fill":"Fyll"},"custom_bar_settings":{"title":"Anpassade stapelinställningar","description":"Definiera anpassade konfigurationer för enskilda staplar.","name":"Barnamn","entity":"Enhet","unit":"Enhet","min":"Minvärde","max":"Maxvärde","thresholds":"Tröskelvärden","severity":"Svårighetsgrad"},"template":{"description":"Använd en mall för att formatera den visade texten, konvertera enheter eller visa beräknade värden.","enable":"Aktivera mallläge","template_label":"Mall","helper_text":"Use Home Assistant templating syntax. Examples:\\n• {{ states(\'sensor.temperature\') | float * 1.8 + 32 }} °F\\n• {{ now().strftime(\\"%b %d, %H:%M\\") }}","examples_header":"Vanliga exempel:","examples":{"temperature":"{{ states(\'sensor.temperature\') | float * 1.8 + 32 }}°F - Convert Celsius to Fahrenheit","datetime":"{{ now().strftime(\\"%b %d, %H:%M\\") }} - Format current date/time","power":"{{ \'Charging at \' + states(\'sensor.ev_power\') + \' kW\' }} - Combine text and sensor value"}}},"icons":{"title":"Kortikoner","description":"Lägg till ikonrader för att visa flera ikoner på ditt kort. Varje rad kan konfigureras med olika inställningar.","add_row":"Lägg till Ikonrad","duplicate_row":"Duplicera Rad","delete_row":"Ta bort Rad","expand_row":"Expandera Rad","collapse_row":"Minimera Rad","no_row":"Inga ikonrader är tillagda","row_prefix":"Rad","icon_prefix":"Ikon","row_settings":{"header":"Radinställningar","width":"Radbredd","width_description":"Bredd på raden som procent av kortbredd","alignment":"Radjustering","alignment_description":"Hur ikoner justeras i denna rad","spacing":"Ikonavstånd","spacing_description":"Mängd mellanrum mellan ikoner i denna rad","columns":"Antal Kolumner","columns_description":"Antal lika stora kolumner i raden (0 = automatisk distribution baserad på innehåll)","confirmation_mode":"Bekräftelseläge","confirmation_mode_description":"Kräv två tryck/klick för att aktivera ikoner i denna rad, förhindrar oavsiktliga interaktioner","layout_info_title":"Hur layoutinställningar fungerar"},"add_icon":"Lägg till Ikon","duplicate_icon":"Duplicera Ikon","delete_icon":"Ta bort Ikon","expand_icon":"Expandera Ikon","collapse_icon":"Minimera Ikon","no_icon":"Ingen ikon vald","icon_settings":{"header":"Ikonlista","entity":"Enhet","entity_description":"Enhet som visas med denna ikon","icon":"Ikon","icon_description":"Välj en ikon eller ange en anpassad ikon","name":"Namn","name_description":"Anpassat namn som visas under ikonen (använder enhetsnamn som standard om inte specificerat)","show_name":"Visa Namn","show_name_description":"Visa namntext under ikonen","show_state":"Visa Tillstånd","show_state_description":"Visa enhetstillståndet under ikonen","show_units":"Visa Enheter","show_units_description":"Inkludera enheter när tillstånd visas","text_position":"Textposition","text_position_description":"Var namn- och tillståndstext placeras i förhållande till ikonen","click_action":"Klickåtgärd","service":"Tjänst","service_description":"Tjänst att anropa (t.ex. light.turn_on)","service_data":"Tjänstdata (JSON)","service_data_description":"JSON-data som skickas med tjänstanropet","action":"Åtgärd (JSON/Tjänst)","action_description":"Avancerad åtgärdskonfiguration (se dokumentation)","navigation_path":"Navigationssökväg","navigation_path_description":"Sökväg att navigera till (t.ex. /lovelace/dashboard)","url":"Url","url_description":"URL att öppna i ny flik","automation_entity":"Automatiseringsenhet","automation_entity_description":"Automatisering att utlösa vid klick"},"icon_appearance":{"header":"Ikonutseende","icon":"Ikonutseende","general":"Allmänt Utseende","active":"Aktivt Tillstånd","inactive":"Inaktivt Tillstånd","state_conditions":"Tillståndsvillkor","advanced":"Avancerade Inställningar","icon_size":"Ikonstorlek","icon_size_description":"Storlek på ikonen i pixlar","text_size":"Textstorlek","text_size_description":"Storlek på namn/tillståndstext i pixlar","text_alignment":"Textjustering","text_alignment_description":"Hur texten justeras under ikonen","icon_background":"Ikonbakgrund","icon_background_description":"Lägg till en bakgrundsform bakom ikonen","icon_background_color":"Ikonbakgrundsfärg","icon_background_color_description":"Färg på bakgrunden bakom ikonen","container_background_color":"Containerbakgrundsfärg","container_background_color_description":"Färg på bakgrunden bakom hela ikoncontainern","text_appearance":"Textutseende","container":{"header":"Containerutseende","vertical_alignment":"Vertikal Justering","vertical_alignment_description":"Justera ikonen och texten vertikalt i containern.","width":"Containerbredd","width_description":"Sätt bredden på ikoncontainern relativt till raden.","background":"Containerbakgrundsform","background_description":"Välj en bakgrundsform för hela ikoncontainern."},"show_when_active":"Visa ikonen när den är aktiv","show_when_active_description":"Visa bara den här ikonen när den är i ett aktivt tillstånd","template_mode":"Mallläge","template_description":"Use a template to determine active/inactive state. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.","active_template":"Aktiv mall","active_template_description":"Mall som returnerar sant när ikonen ska vara aktiv.","active_state":"Aktivt tillstånd","active_state_description":"Tillståndssträng som representerar \\"aktiv\\".","active_state_text":"Anpassad aktiv tillståndstext","active_state_text_description":"Åsidosätter texten som visas när ikonen är aktiv. Lämna tomt för att använda det faktiska tillståndet.","inactive_template":"Inaktiv mall","inactive_template_description":"Mall som returnerar sant när ikonen ska vara inaktiv.","inactive_state":"Inaktivt tillstånd","inactive_state_description":"Tillståndssträng som representerar \\"inaktiv\\".","inactive_state_text":"Anpassad inaktiv tillståndstext","inactive_state_text_description":"Åsidosätter texten som visas när ikonen är inaktiv. Lämna tomt för att använda det faktiska tillståndet.","active_icon":"Aktiv ikon","inactive_icon":"Inaktiv ikon","active_icon_color":"Aktiv ikonfärg","inactive_icon_color":"Inaktiv ikonfärg","active_name_color":"Aktivt namnfärg","inactive_name_color":"Inaktiv namnfärg","active_state_color":"Aktivt tillståndsfärg","inactive_state_color":"Inaktiv tillståndsfärg","show_icon_active":"Visa ikonen när den är aktiv","show_icon_active_description":"Visa ikonen när staten är aktiv.","show_icon_inactive":"Visa ikonen när den är inaktiv","show_icon_inactive_description":"Visa ikonen när staten är inaktiv.","custom_active_state_text":"Anpassad aktiv tillståndstext","custom_inactive_state_text":"Anpassad inaktiv tillståndstext","action_description":"Åtgärd för att utföra när ikonen klickas.","show_name_active":"Visa namn när det är aktivt","show_name_active_description":"Visa namnet när staten är aktiv.","show_name_inactive":"Visa namn när inaktivt","show_name_inactive_description":"Visa namnet när staten är inaktivt.","show_state_active":"Visa tillstånd när det är aktivt","show_state_active_description":"Visa staten när staten är aktiv.","show_state_inactive":"Visa tillstånd när det är inaktivt","show_state_inactive_description":"Visa staten när staten är inaktiv.","use_entity_color_for_icon":"Använd enhetsfärg för ikonen","use_entity_color_for_icon_description":"Use the entity\'s color attribute for the icon when available","use_entity_color_for_icon_background":"Använd enhetsfärg för ikonbakgrund","use_entity_color_for_icon_background_description":"Använd enhetens färgattribut för ikonbakgrunden när den är tillgänglig","use_entity_color_for_container_background":"Använd enhetsfärg för behållare","use_entity_color_for_container_background_description":"Använd enhetens färgattribut för behållarbakgrunden när den är tillgänglig","name_size":"Namnstorlek","name_size_description":"Storleken på enhetens namntext i pixlar"},"tabs":{"general":"Allmänt","appearance":"Utseende","states":"Tillstånd","active_state":"Aktivt Tillstånd","inactive_state":"Inaktivt Tillstånd"},"alignments":{"flex-start":"Vänster","center":"Centrum","flex-end":"Höger","space-between":"Mellanrum Mellan","space-around":"Mellanrum Runt","space-evenly":"Jämna Mellanrum"},"vertical_alignments":{"flex-start":"Topp","center":"Mitten","flex-end":"Botten"},"spacing":{"none":"Inget","small":"Litet","medium":"Medium","large":"Stort"},"text_positions":{"below":"Under Ikon","beside":"Bredvid Ikon","none":"Ingen Text","top":"På Toppen","left":"Till Vänster","right":"Till Höger"},"reset":{"size":"Återställ till standardstorlek","color":"Återställ till standardfärg","all":"Återställ till standardvärden"},"click_actions":{"toggle":"Växla","more-info":"Visa Mer Info","navigate":"Navigera till Sökväg","url":"Öppna URL","call-service":"Anropa Tjänst","perform-action":"Utför Åtgärd","location-map":"Visa Karta","assist":"Röstassistent","trigger":"Utlös","none":"Ingen Åtgärd","descriptions":{"toggle":"Växlar enhetens tillstånd på och av.","more-info":"Öppnar mer info-dialogen med ytterligare information om enheten.","navigate":"Navigerar till den angivna Lovelace-sökvägen.","url":"Öppnar den angivna URL:en i en ny flik.","call-service":"Anropar den angivna Home Assistant-tjänsten.","perform-action":"Utför en anpassad åtgärd (se dokumentation).","location-map":"Visar enhetens plats på en karta.","assist":"Öppnar Home Assistants röstassistent.","trigger":"Utlöser enheten (automatisering, skript, knapp, etc).","none":"Ingen åtgärd kommer att utföras."}},"backgrounds":{"none":"Ingen","circle":"Cirkel","square":"Kvadrat","rounded_square":"Avrundad Kvadrat"},"container_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (full bredd)"},"row_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (full bredd)"},"template_mode":"Mallläge","template_mode_active_description":"Använd en mall för att avgöra när denna ikon ska vara aktiv. Mallar gör att du kan använda Home Assistant Templating Syntax för komplexa förhållanden.","template_mode_inactive_description":"Använd en mall för att avgöra när denna ikon ska vara inaktiv. Mallar gör att du kan använda Home Assistant Templating Syntax för komplexa förhållanden.","template_examples_header":"Vanliga exempel:","enable_template_mode":"Aktivera mallläge"},"customize":{"layout":{"title":"Layoutstil","description":"Välj mellan enkel- eller dubbelkolumnlayout för kortet","header":"Layoutinställningar"},"layout_types":{"single":"Enkel Kolumn","double":"Dubbel Kolumn","dashboard":"Toppvy","half_full":"Halv + full","full_half":"Halva"},"sections":{"header":"Kortsektioner","arrangement_header":"Sektionsarrangemang","arrangement_desc_base":"Dra och släpp sektioner för att arrangera deras ordning på kortet.","arrangement_desc_single_extra":"Alla sektioner kommer att visas i en enkel kolumn.","arrangement_desc_double_extra":"I en dubbelkolumnlayout kan du placera alla sektioner i antingen vänster eller höger kolumn.","arrangement_desc_dashboard_extra":"I en översiktsvy kan du placera sektioner runt din fordonsbild."},"section_labels":{"title":"Titel","image":"Fordonsbild","info":"Fordonsinfo","bars":"Alla Sensorstalpar","icons":"Alla Ikonrader","section_break":"Sektionspaus"},"actions":{"collapse_margins":"Fäll ihop marginaler","expand_margins":"Expandera marginaler","collapse_options":"Fäll ihop alternativ","expand_options":"Expandera alternativ","add_break":"Lägg till sektionsavbrott","delete_break":"Radera avsnittet"},"css":{"header":"Global CSS","description":"Ange anpassade CSS-regler här för att åsidosätta kortets standardstil. Dessa regler kommer att tillämpas direkt på kortet. Använd med försiktighet.","label":"Anpassad CSS","input_description":"Ange dina anpassade CSS-regler här."},"conditions":{"header":"Villkorslogik","description":"Visa eller dölj denna sektion baserat på en entitets tillstånd.","type_label":"Villkorstyp","entity_label":"Villkorsentitet","state_label":"Villkorstillstånd","types":{"none":"Ingen (Visa Alltid)","show":"Visa När...","hide":"Dölj När..."}},"margins":{"header":"Marginaler","top":"Övre marginal","bottom":"Nedre marginal"},"columns":{"left":"Vänster kolumn","right":"Höger kolumn","empty":"Släpp sektioner här"},"column_width":{"title":"Kolumnbredd","description":"Konfigurera breddförhållandet mellan vänster och höger kolumn","50_50":"Lika (50/50)","30_70":"Smal vänster, bred höger (30/70)","70_30":"Bred vänster, smal höger (70/30)","40_60":"Något smal vänster (40/60)","60_40":"Något bred vänster (60/40)"},"dashboard":{"top":"Övre sektion","top_middle":"Övre mittsektion","left_middle":"Vänster mittsektion","middle":"Mittsektion","middle_empty":"Fordonsbildområde (Rekommenderat)","right_middle":"Höger mittsektion","bottom_middle":"Nedre mittsektion","bottom":"Nedre sektion"},"top_view":{"header":"Toppvyns Layoutinställningar","description":"Konfigurera avstånds- och layoutinställningar för toppvyn","side_margin":"Sidomarginaler","side_margin_help":"Marginal på sidorna av vyn i pixlar","middle_spacing":"Mittavstånd","middle_spacing_help":"Avstånd mellan mittkolumnerna i pixlar","vertical_spacing":"Vertikalt Avstånd","vertical_spacing_help":"Avstånd mellan rader i pixlar"},"break_styles":{"blank":"Blank (ingen rad)","line":"Solidlinje","double_line":"Dubbellinje","dotted":"Prickad linje","double_dotted":"Dubbelprickad linje","shadow":"Skugggrad"},"break_style":{"header":"Brytstil","style_label":"Stil","thickness_label":"Tjocklek","width_percent_label":"Bredd (%)","color_label":"Färg"},"half_full":{"row1":"Row 1 (Split)","row1_col1":"Row 1 - Left Column","row1_col2":"Row 1 - Right Column","row2":"Row 2 (Full Width)","row2_full":"Rad 2, full bredd (100%)"},"full_half":{"row1":"Row 1 (Full Width)","row2":"Row 2 (Split)","row2_col1":"Row 2 - Left Column","row2_col2":"Row 2 - Right Column","row1_full":"Rad 1, full bredd (100%)"},"title":"Anpassa layout","description":"Anpassa layout, beställ och lägg till avsnitt till ditt kort","condition_prompt":"Välj \\"Visa\\" eller \\"dölj\\" för att konfigurera enhetsvillkor"},"container_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (Full bredd)"},"row_widths":{"25":"25% bredd","50":"50% bredd","75":"75% bredd","100":"100% (Full bredd)"},"info":{"arrange_info_rows":"Ordna info -rader","title":"Kortinformation","description":"Konfigurera informationsrader och enheter för att visa fordonsinformation som plats, körsträcka, etc. Info -objekt kommer att visas på en enda rad när det är möjligt, inpackning till flera linjer i smala behållare.","template_mode":"Mallläge","template_mode_description":"Använd en mall för att formatera enhetsvärdet. Mallar gör att du kan använda Home Assistant Templating Syntax för komplex formatering.","template_examples_header":"Vanliga exempel:"}},"about":{"logo_alt":"Ultra Vehicle Card","developed_by":"Utvecklad av","discord_button":"Gå med i vår Discord","github_button":"Besök vår Github","docs_button":"Se vår dokumentation","support_title":"Stöd Ultra Vehicle Card","support_para":"Dina generösa donationer driver utvecklingen av fantastiska funktioner för detta kort! Utan stöd från användare som dig skulle fortsatt innovation inte vara möjlig.","donate_button":"DONERA (PAYPAL)","support_description":"Dina generösa tips driver utvecklingen av fantastiska funktioner för det här kortet! Utan stöd från användare som du skulle fortsatt innovation inte vara möjlig."},"custom_icons":{"title":"Anpassade Ikoner","description":"Definiera anpassade ikoner för olika tillstånd.","icon_entity":"Ikonentitet","default_icon":"Standardikon","state_icons":"Tillståndsikoner","state":"Tillstånd","icon":"Ikon"},"custom_active_state_text":"Anpassad Aktiv Statustext","custom_inactive_state_text":"Anpassad Inaktiv Statustext","image_settings":{"title":"Bildinställningar","description":"Konfigurera huvudbildens utseende.","type":"Bildtyp","width":"Bildbredd","crop":"Bildbeskärning","entity":"Bildentitet","entity_description":"Entitet som tillhandahåller bild-URL","text_color":"Entity Color","text_color_description":"Color for the entity value","name_color":"Name Color","name_color_description":"Color for the entity name label","icon_color":"Icon Color"},"entity_settings":{"entity":"Enhet","entity_description":"Välj en enhet för att visa information från","name":"Name","name_description":"Åsidosätta enhetsnamnet (lämna tomt för att använda enhetens vänliga namn)","icon":"Ikon","icon_placeholder":"mdi:power-plug","show_icon":"Visa ikon","show_name":"Visningsnamn","show_name_description":"Visa enhetsnamnet före värdet","click_action":"Click Action","more_info":"More Info","navigate":"Navigate","url":"URL (External)","url_path":"URL","call_service":"Call Service","none":"None","navigation_path":"Navigation Path","navigation_path_description":"Path to navigate to when clicked (e.g., /lovelace/0)","url_description":"URL to open when clicked","service":"Service","service_description":"Service to call (e.g., light.turn_on)","service_data":"Service Data (JSON)","template_mode":"Use Template for Value","template_mode_description":"Använd en mall för att formatera enhetsvärdet","value_template":"Värdemall","template_header":"Värdemall","template_examples_header":"Template Examples","template_basic":"Grundvärde","template_units":"Med enheter","template_round":"Rund till 1 decimal","icon_size":"Icon Size","icon_size_description":"Size of the icon in pixels","text_size":"Entity Size","text_size_description":"Size of the entity value text in pixels","name_size":"Name Size","name_size_description":"Size of the entity name text in pixels","icon_color":"Ikonfärg","name_color":"Namnfärg","text_color":"Entity Color","size_settings":"Size Settings","color_settings":"Color Settings","entity_color":"Enhetsfärg"}}'),xt={en:it,de:ot,es:rt,fr:lt,it:ct,da:gt,"en-GB":mt,nl:_t,nb:vt,nn:yt,sv:o.t(wt,2)};function kt(e,t){try{if(!xt[t])return void Object.keys(xt);const i=xt[t];if(["editor.action_images.title","editor.action_images.description","editor.action_images.add_image","editor.action_images.entity_placeholder"].includes(e)){const t=e.split(".");let n=i,o="";for(const e of t){if(o=o?`${o}.${e}`:e,null==n)return;if("object"!=typeof n)return;if(!(e in n))return void Object.keys(n);n=n[e]}return"string"!=typeof n?void 0:n}return e.split(".").reduce(((e,t)=>null==e?void 0:e[t]),i)}catch(e){return}}function $t(e,t,i){const n=kt(e,t);if(n)return n;if("en"!==t){const t=kt(e,"en");if(t)return t}return e.startsWith("editor.action_images"),i||e}var St=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let zt=class extends he{constructor(){super(...arguments),this.initialExpanded=!1,this.expanded=!1,this._cropExpanded=!1,this._hasInitialized=!1}updated(e){super.updated(e),e.has("initialExpanded")&&!this._hasInitialized&&(this.expanded=this.initialExpanded,this._hasInitialized=!0),(e.has("expanded")||e.has("initialExpanded")&&!this._hasInitialized)&&(this.expanded?this.setAttribute("expanded",""):this.removeAttribute("expanded"))}render(){var e,t,i,n;const o=this.lang||(null===(t=null===(e=this.hass)||void 0===e?void 0:e.locale)||void 0===t?void 0:t.language)||"en";return J`
      <div class="action-image-row">
        <div class="row-header">
          <div
            class="drag-handle"
            title=${$t("editor.action_images.actions.drag",o)}
            draggable="true"
            @dragstart=${this._handleDragStart}
          >
            <ha-icon icon="mdi:drag"></ha-icon>
          </div>

          <div class="preview" @click=${this._toggleExpand}>
            ${this._renderPreview(o)}
          </div>

          <div class="entity-info">
            <div class="entity-name">
              ${(null===(n=null===(i=this.hass.states[this.config.entity])||void 0===i?void 0:i.attributes)||void 0===n?void 0:n.friendly_name)||this.config.entity||$t("editor.action_images.preview.no_entity",o)}
            </div>
            <div class="entity-state">
              ${this.config.template_mode?"Template Mode: "+(this.config.template?"Active":"No Template"):`State: ${this.config.state||$t("editor.action_images.preview.any_state",o)}`}
            </div>
            <div class="image-type-info">
              Type: ${this._getImageTypeName(this.config.image_type,o)}
            </div>
          </div>

          <div class="actions">
            <ha-icon-button
              @click=${this._handleDuplicate}
              title=${$t("editor.action_images.actions.duplicate",o)}
            >
              <ha-icon icon="mdi:content-copy"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              @click=${this._handleDelete}
              title=${$t("editor.action_images.actions.delete",o)}
            >
              <ha-icon icon="mdi:delete"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              @click=${this._toggleExpand}
              title=${$t(this.expanded?"editor.action_images.actions.collapse":"editor.action_images.actions.expand",o)}
            >
              <ha-icon icon=${this.expanded?"mdi:chevron-up":"mdi:chevron-down"}></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        ${this.expanded?J`
              <div class="row-content">
                <div class="settings-section entity-section">
                  <h3>${$t("editor.action_images.entity_settings",o)}</h3>
                  <div class="form-grid">
                    <div class="settings-row full-width">
                      <label class="entity-label"
                        >${$t("editor.action_images.trigger_entity",o,"Trigger Entity")}</label
                      >
                      <ha-form
                        .hass=${this.hass}
                        .data=${{entity:this.config.entity||""}}
                        .schema=${[{name:"entity",selector:{entity:{}},label:$t("editor.action_images.entity_placeholder",o)}]}
                        .computeLabel=${e=>""}
                        @value-changed=${this._handleEntityFormChange}
                      ></ha-form>
                      <div class="entity-help-text">
                        ${$t("editor.action_images.entity_help",o,"Select an entity to monitor. The image will be shown when this entity matches the state below.")}
                      </div>
                    </div>
                    ${this.config.template_mode?"":J`
                          <div class="settings-row full-width">
                            <label class="entity-label"
                              >${$t("editor.action_images.trigger_state",o,"Trigger State")}</label
                            >
                            <ha-textfield
                              .value=${this.config.state||""}
                              .label=${$t("editor.action_images.state_placeholder",o)}
                              @input=${this._handleStateChange}
                            ></ha-textfield>
                            <div class="entity-help-text">
                              ${$t("editor.action_images.state_help",o,"Enter the state value that will trigger this image to show. Leave blank to match any state.")}
                            </div>
                          </div>
                        `}
                  </div>
                </div>

                <!-- Template Mode Section -->
                <div class="settings-section">
                  <div class="template-mode-container">
                    <div class="template-mode-header">
                      <div class="template-mode-toggle">
                        <span class="template-mode-label">
                          <ha-icon icon="mdi:code-braces"></ha-icon>
                          ${$t("editor.action_images.template_mode",o,"Template Mode")}
                        </span>
                        <ha-switch
                          .checked=${Boolean(this.config.template_mode)}
                          @change=${e=>{e.stopPropagation(),this._handleConfigChange({template_mode:e.target.checked})}}
                        ></ha-switch>
                      </div>
                      <div class="template-mode-description">
                        ${$t("editor.action_images.template_description",o,"Use a template to determine when this image should be shown. Templates allow you to use Home Assistant templating syntax (like {{ states.sensor.temperature.state > 70 }}) for complex conditions.")}
                      </div>
                    </div>

                    ${this.config.template_mode?J`
                          <div class="template-mode-fields">
                            <ha-form
                              .hass=${this.hass}
                              .data=${this.config}
                              .schema=${[{name:"template",selector:{text:{multiline:!0}},label:$t("editor.action_images.template_label",o,"Display Template"),description:$t("editor.action_images.template_help",o,"Enter a template that returns true/false. This image will be shown when the template evaluates to true. Use Jinja2 syntax: {{ states(...) }}")}]}
                              .computeLabel=${e=>e.label?$t(e.label,o):e.name}
                              @value-changed=${e=>this._handleConfigChange(e.detail.value)}
                            ></ha-form>
                          </div>
                        `:""}
                  </div>
                </div>

                <div class="settings-section">
                  <h3>${$t("editor.action_images.image_settings",o)}</h3>
                  <div class="settings-row">
                    <ha-select
                      .label=${$t("editor.action_images.image_type.title",o)}
                      .value=${this.config.image_type}
                      @selected=${this._handleImageTypeChange}
                      @closed=${e=>e.stopPropagation()}
                      fixedMenuPosition
                      naturalMenuWidth
                    >
                      <ha-list-item value="upload">
                        ${$t("editor.action_images.image_type.upload",o)}
                      </ha-list-item>
                      <ha-list-item value="url">
                        ${$t("editor.action_images.image_type.url",o)}
                      </ha-list-item>
                      <ha-list-item value="entity">
                        ${$t("editor.action_images.image_type.entity",o)}
                      </ha-list-item>
                      <ha-list-item value="none">
                        ${$t("editor.action_images.image_type.none",o)}
                      </ha-list-item>
                    </ha-select>
                  </div>

                  ${this._renderImageInput(o)}

                  <!-- Add Image Width Control with title -->
                  ${"none"!==this.config.image_type&&(this.config.image||this.config.image_entity)?J`
                        <h4 class="settings-section-title">
                          ${$t("editor.images.common.width",o,"Image Width")}
                        </h4>
                        <div class="width-slider-container">
                          <div class="width-slider-input-combo">
                            <ha-slider
                              .min=${10}
                              .max=${200}
                              .step=${1}
                              .value=${Math.min(this.config.image_width||100,200)}
                              pin
                              @change=${this._handleWidthChange}
                              @input=${this._handleSliderInput}
                            ></ha-slider>
                            <ha-textfield
                              type="number"
                              min="10"
                              max="300"
                              .value=${this._sliderInputValue||this.config.image_width||100}
                              @input=${this._handleWidthInput}
                              @change=${this._handleWidthInputChange}
                              suffix="%"
                              class="width-input"
                            ></ha-textfield>
                          </div>
                          <div class="width-description">
                            ${$t("editor.images.common.width_over_100",o,"Values over 100% can help crop empty space around images")}
                          </div>
                        </div>
                      `:""}

                  <!-- Add crop controls if an image is configured (upload, url, or entity) -->
                  ${"none"!==this.config.image_type?J`
                        <div class="crop-accordion">
                          <div
                            class="crop-accordion-header"
                            @click=${()=>{this._cropExpanded=!this._cropExpanded}}
                          >
                            <span
                              >${$t("editor.images.vehicle.crop",o,"Crop Image")}</span
                            >
                            <ha-icon
                              icon="${this._cropExpanded?"mdi:chevron-up":"mdi:chevron-down"}"
                            ></ha-icon>
                          </div>
                          ${this._cropExpanded?J`
                                <div class="crop-controls">
                                  ${this._renderCropControls(o)}
                                </div>
                              `:""}
                        </div>
                      `:""}
                </div>
              </div>
            `:""}
      </div>
    `}_renderPreview(e){var t;if("entity"===this.config.image_type&&this.config.image_entity){const e=this.hass.states[this.config.image_entity];if(null===(t=null==e?void 0:e.attributes)||void 0===t?void 0:t.entity_picture)return J`<img src=${e.attributes.entity_picture} alt="Preview" />`}if(this.config.image){const e=we(this.hass,this.config.image),t=this.config.image.startsWith("data:image")?"Uploaded Preview":"Preview";return J`<img src=${e} alt=${t} />`}return J`
      <ha-icon
        icon="mdi:image-off"
        title=${$t("editor.action_images.preview.no_image",e)}
      ></ha-icon>
    `}_renderImageInput(e){switch(this.config.image_type){case"upload":return J`
          <div class="upload-container">
            <div class="file-upload-row">
              <label class="file-upload-button" @click=${e=>e.stopPropagation()}>
                <div class="button-content">
                  <ha-icon icon="mdi:upload"></ha-icon>
                  <span class="button-label">${$t("editor.common.choose_file",e)}</span>
                </div>
                <input
                  type="file"
                  accept="image/*"
                  @change=${this._handleFileUpload}
                  style="display: none"
                />
              </label>

              <div class="path-display">
                ${this.config.image?J`<span class="uploaded-path" title="${this.config.image}">
                      ${this._truncatePath(this.config.image)}
                    </span>`:J`<span class="no-file"
                      >${$t("editor.common.no_file_chosen",e)}</span
                    >`}
              </div>
            </div>
          </div>
        `;case"url":return J`
          <div class="settings-row">
            <ha-textfield
              .value=${this.config.image||""}
              .label=${$t("editor.images.common.url_description",e)}
              @input=${this._handleImageUrlChange}
            ></ha-textfield>
          </div>
        `;case"entity":return J`
          <div class="settings-row">
            <ha-form
              .hass=${this.hass}
              .data=${{image_entity:this.config.image_entity||""}}
              .schema=${[{name:"image_entity",selector:{entity:{}},label:$t("editor.action_images.entity_placeholder",e)}]}
              .computeLabel=${e=>""}
              @value-changed=${this._handleImageEntityFormChange}
            ></ha-form>
          </div>
        `;default:return""}}_toggleExpand(e){e.stopPropagation(),this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("expansion-changed",{detail:{expanded:this.expanded},bubbles:!0,composed:!0}))}_handleDelete(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("delete"))}_handleDuplicate(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("duplicate"))}_handleEntityFormChange(e){e.stopPropagation();const t=e.detail.value;t&&"object"==typeof t&&"entity"in t&&this._handleConfigChange({entity:t.entity})}_handleStateChange(e){e.stopPropagation();const t=e.target;this._handleConfigChange({state:t.value})}_handleImageTypeChange(e){const t=e.target.value;if(t===this.config.image_type)return;const i={image_type:t};"upload"===this.config.image_type&&"url"===t&&this.config.image||"url"===this.config.image_type&&"upload"===t&&this.config.image?(i.image=this.config.image,i.image_entity=void 0):(i.image=void 0,i.image_entity=void 0),this._handleConfigChange(i)}_handleImageUrlChange(e){const t=e.target;this._handleConfigChange({image:t.value})}_handleImageEntityFormChange(e){e.stopPropagation();const t=e.detail.value;t&&"object"==typeof t&&"image_entity"in t&&this._handleConfigChange({image_entity:t.image_entity})}_handleFileUpload(e){var t;const i=e.target,n=null===(t=i.files)||void 0===t?void 0:t[0];n&&(this.dispatchEvent(new CustomEvent("file-upload",{detail:{file:n,id:this.config.id},bubbles:!0,composed:!0})),i.value="")}_handleConfigChange(e){const t=Object.assign(Object.assign({},this.config),e);this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_getImageTypeName(e,t){switch(e){case"upload":return $t("editor.common.upload",t);case"url":return $t("editor.common.url",t);case"entity":return $t("editor.common.entity",t);case"none":return $t("editor.common.none",t);default:return String(null!=e?e:"")}}_truncatePath(e){return e.length>50?e.slice(0,50)+"...":e}_handleDragStart(e){var t;if(e.dataTransfer){const i=e.target,n=null===(t=i.closest(".action-image-row"))||void 0===t?void 0:t.querySelector(".row-header");if(!n)return;e.dataTransfer.setData("text/plain",this.config.id),e.dataTransfer.effectAllowed="move";try{const t=n.getBoundingClientRect(),i=n.cloneNode(!0);i.style.width=`${t.width}px`,i.style.height=`${t.height}px`,i.style.position="absolute",i.style.top="-1000px",i.style.left="-1000px",i.style.pointerEvents="none",i.style.opacity="0.85",i.style.zIndex="9999",i.style.display="flex",i.style.alignItems="center",i.style.padding=getComputedStyle(n).padding,i.style.gap=getComputedStyle(n).gap,i.style.backgroundColor="var(--card-background-color)",i.style.border="1px solid var(--divider-color)",i.style.borderRadius="var(--ha-card-border-radius, 8px)",i.style.boxShadow="0 3px 8px rgba(0,0,0,0.25)",i.style.boxSizing="border-box",i.classList.add("dragging-ghost");const o=i.querySelector(".preview"),a=n.querySelector(".preview");if(o&&a){const e=getComputedStyle(a);o.style.width=e.width,o.style.height=e.height,o.style.minWidth=e.width,o.style.maxWidth=e.width,o.style.minHeight=e.height,o.style.borderRadius=e.borderRadius,o.style.overflow="hidden",o.style.display="flex",o.style.alignItems="center",o.style.justifyContent="center",o.style.background=e.background,o.style.border=e.border,o.style.flexShrink="0";const t=o.querySelector("img");t&&(t.style.width="100%",t.style.height="100%",t.style.objectFit="cover",t.style.display="block");const i=o.querySelector("ha-icon");i&&(i.style.color="var(--secondary-text-color)")}document.body.appendChild(i),e.dataTransfer.setDragImage(i,e.offsetX,e.offsetY),setTimeout((()=>{document.body.contains(i)&&document.body.removeChild(i)}),50)}catch(e){console.error("Error creating drag image:",e)}setTimeout((()=>{var e;null===(e=i.closest(".action-image-row"))||void 0===e||e.classList.add("dragging")}),0)}}_handleDragEnd(e){var t;null===(t=e.target.closest(".action-image-row"))||void 0===t||t.classList.remove("dragging")}_renderCropControls(e){const t=this.config.image_crop||this._createDefaultCropSettings();return J`
      <div class="crop-input-row">
        <div class="crop-input-field">
          <span class="crop-label">${$t("editor.crop.top",e,"Top")}</span>
          <ha-textfield
            type="number"
            .value=${void 0!==t.top?String(t.top):"0"}
            @change=${e=>{const t=e.target,i=""===t.value?"0":t.value;this._updateImageCrop("top",parseInt(i)||0)}}
          ></ha-textfield>
          <span class="crop-unit">${$t("editor.crop.pixels",e,"px")}</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">${$t("editor.crop.right",e,"Right")}</span>
          <ha-textfield
            type="number"
            .value=${void 0!==t.right?String(t.right):"0"}
            @change=${e=>{const t=e.target,i=""===t.value?"0":t.value;this._updateImageCrop("right",parseInt(i)||0)}}
          ></ha-textfield>
          <span class="crop-unit">${$t("editor.crop.pixels",e,"px")}</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">${$t("editor.crop.bottom",e,"Bottom")}</span>
          <ha-textfield
            type="number"
            .value=${void 0!==t.bottom?String(t.bottom):"0"}
            @change=${e=>{const t=e.target,i=""===t.value?"0":t.value;this._updateImageCrop("bottom",parseInt(i)||0)}}
          ></ha-textfield>
          <span class="crop-unit">${$t("editor.crop.pixels",e,"px")}</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">${$t("editor.crop.left",e,"Left")}</span>
          <ha-textfield
            type="number"
            .value=${void 0!==t.left?String(t.left):"0"}
            @change=${e=>{const t=e.target,i=""===t.value?"0":t.value;this._updateImageCrop("left",parseInt(i)||0)}}
          ></ha-textfield>
          <span class="crop-unit">${$t("editor.crop.pixels",e,"px")}</span>
        </div>
      </div>

      <div class="crop-explanation">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <span
          >${$t("editor.crop.help",e,"Enter pixel values (positive or negative) to adjust cropping and padding")}</span
        >
      </div>
    `}_createDefaultCropSettings(){return{top:0,right:0,bottom:0,left:0}}_updateImageCrop(e,t){const i=this.config.image_crop||this._createDefaultCropSettings(),n=Object.assign(Object.assign({},i),{[e]:t});if(0===n.top&&0===n.right&&0===n.bottom&&0===n.left){const e=this.config,{image_crop:t}=e,i=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(i[n[o]]=e[n[o]])}return i}(e,["image_crop"]);this._handleConfigChange(i)}else this._handleConfigChange({image_crop:n})}_handleWidthChange(e){const t=e.target;this._handleConfigChange({image_width:t.value})}_handleSliderInput(e){const t=e.target;this._sliderInputValue=t.value}_handleWidthInput(e){const t=e.target;this._handleConfigChange({image_width:parseInt(t.value)})}_handleWidthInputChange(e){const t=e.target;this._handleConfigChange({image_width:parseInt(t.value)})}};zt.styles=c`
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
      cursor: pointer;
      transition:
        border-color 0.2s ease,
        background-color 0.2s ease;
    }

    .preview:hover {
      border-color: var(--primary-color);
      background-color: rgba(var(--rgb-primary-color), 0.05);
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
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .entity-section {
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      padding: 16px;
      background-color: var(--card-background-color);
      margin-bottom: 16px;
    }

    .form-grid {
      display: flex;
      flex-direction: column;
      gap: 16px;
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
      display: flex;
      flex-direction: column;
      margin: 8px 0;
      gap: 8px;
      width: 100%;
    }

    .settings-row.full-width {
      width: 100%;
    }

    .settings-row ha-textfield,
    .settings-row ha-select,
    .settings-row ha-form {
      width: 100%;
    }

    .upload-container {
      position: relative;
      margin: 8px 0;
      width: 100%;
    }

    .file-upload-row {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
    }

    .file-upload-button {
      display: inline-flex;
      align-items: center;
      padding: 8px 16px;
      background: var(--primary-color);
      color: var(--text-primary-color);
      border: none;
      border-radius: var(--ha-card-border-radius, 4px);
      cursor: pointer;
      font-size: 14px;
      font-weight: 500;
      transition: background-color 0.2s ease;
      text-decoration: none;
      min-width: fit-content;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .file-upload-button:hover {
      background: var(--primary-color);
      opacity: 0.9;
    }

    .button-content {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .button-label {
      font-size: 14px;
      font-weight: 500;
    }

    .path-display {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 8px 12px;
      background: var(--secondary-background-color);
      border: 1px solid var(--divider-color);
      border-radius: var(--ha-card-border-radius, 4px);
      min-height: 36px;
      display: flex;
      align-items: center;
      min-width: 0;
    }

    .uploaded-path {
      color: var(--primary-text-color);
      font-size: 14px;
      white-space: normal;
      overflow: auto;
      text-overflow: initial;
    }

    .no-file {
      color: var(--secondary-text-color);
      font-size: 14px;
      font-style: italic;
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

    .width-value {
      font-size: 0.9em;
      color: var(--secondary-text-color);
      text-align: right;
      margin-top: 4px;
    }

    .settings-section-title {
      font-size: 1em;
      font-weight: 500;
      margin: 0 0 12px;
      color: var(--primary-text-color);
      border-bottom: 1px solid var(--divider-color);
      padding-bottom: 8px;
    }

    .width-slider-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 8px;
    }

    .width-slider-input-combo {
      display: flex;
      align-items: center;
      gap: 16px;
      width: 100%;
    }

    .width-slider-container ha-slider {
      flex: 1;
      min-width: 0;
    }

    .width-input {
      width: 100px;
      flex-shrink: 0;
    }

    .width-indicators {
      display: flex;
      justify-content: space-between;
      font-size: 0.8em;
      color: var(--secondary-text-color);
      margin-top: 4px;
      position: relative;
      padding: 0 10px;
    }

    .width-marker-100 {
      position: relative;
      font-weight: bold;
      color: var(--primary-color);
    }

    .width-marker-100::after {
      content: '';
      position: absolute;
      height: 8px;
      width: 2px;
      background-color: var(--primary-color);
      left: 50%;
      top: -12px;
      transform: translateX(-50%);
    }

    .width-description {
      font-size: 0.85em;
      color: var(--secondary-text-color);
      margin-top: 8px;
      font-style: italic;
    }

    /* Template Mode Container Styles */
    .template-mode-container {
      margin: 0 0 24px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
      background-color: var(--card-background-color, #1c1c1c);
    }

    .template-mode-header {
      padding: 12px 16px;
      background-color: rgba(var(--rgb-primary-color), 0.08);
    }

    .template-mode-toggle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .template-mode-label {
      font-weight: 500;
      display: flex;
      align-items: center;
    }

    .template-mode-label ha-icon {
      margin-right: 8px;
      color: var(--primary-color);
    }

    .template-mode-description {
      font-size: 14px;
      color: var(--primary-text-color);
      opacity: 0.9;
      line-height: 1.4;
    }

    .template-mode-fields {
      padding: 16px;
      background-color: var(--primary-background-color);
    }

    .template-mode-fields.template-mode-disabled {
      border-top: 1px solid var(--divider-color);
    }
  `,St([ve({attribute:!1})],zt.prototype,"hass",void 0),St([ve({attribute:!1})],zt.prototype,"config",void 0),St([ve({type:String})],zt.prototype,"lang",void 0),St([ve({type:Boolean})],zt.prototype,"initialExpanded",void 0),St([be()],zt.prototype,"expanded",void 0),St([be()],zt.prototype,"_cropExpanded",void 0),St([be()],zt.prototype,"_sliderInputValue",void 0),St([be()],zt.prototype,"_hasInitialized",void 0),zt=St([ue("action-image-row")],zt);var Ct=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let Et=class extends he{constructor(){super(...arguments),this._dragOverIndex=null,this._newlyAddedImageIds=new Set}render(){var e;const t=(null===(e=this.hass.locale)||void 0===e?void 0:e.language)||"en";return J`
      <div class="action-images">
        <div class="header">
          <h3>${$t("editor.action_images.title",t,"Action Images")}</h3>
          <p class="description">
            ${$t("editor.action_images.description",t,"Configure images that will be displayed when specific entity states are met.")}
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
                  ${$t("editor.action_images.no_images",t,"No action images configured yet. Add one to get started.")}
                </div>`:""}
          ${(this.config.action_images||[]).map(((e,i)=>J`
              <action-image-row
                .hass=${this.hass}
                .config=${e}
                data-row-id=${e.id}
                .initialExpanded=${this._newlyAddedImageIds.has(e.id)}
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
            .label=${$t("editor.action_images.add_image",t,"Add Action Image")}
          >
            <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
          </mwc-button>
        </div>
      </div>
    `}_handleImageConfigChange(e,t){t.stopPropagation();const i=[...this.config.action_images||[]];i[e]=t.detail.config,this._updateConfig({action_images:i})}_addActionImage(){const e=[...this.config.action_images||[]],t=`image_${Date.now()}`,i={id:t,entity:"",state:"",image_type:"url",priority:0};e.push(i),this._newlyAddedImageIds.add(t),setTimeout((()=>{this._newlyAddedImageIds.delete(t),this.requestUpdate()}),100),this._updateConfig({action_images:e})}_duplicateActionImage(e){const t=[...this.config.action_images||[]];if(e<0||e>=t.length)return;const i=t[e],n=`${i.id}_copy_${Date.now()}`,o=Object.assign(Object.assign({},i),{id:n,image_crop:i.image_crop?Object.assign({},i.image_crop):void 0});t.splice(e+1,0,o),this._updateConfig({action_images:t})}_deleteActionImage(e){var t;const i=(null===(t=this.hass.locale)||void 0===t?void 0:t.language)||"en";if(!confirm($t("editor.action_images.delete_confirm",i,"Are you sure you want to delete this action image?")))return;const n=[...this.config.action_images||[]];e<0||e>=n.length||(n.splice(e,1),this._updateConfig({action_images:n}))}_updateConfig(e){const t=Object.assign(Object.assign({},this.config),e);this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}_handleRowDragOver(e,t){e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._dragOverIndex!==t&&(this._dragOverIndex=t)}_handleDragOver(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move")}_handleDragLeave(){this._dragOverIndex=null}async _handleDrop(e){var t,i;e.preventDefault();const n=null===(t=e.dataTransfer)||void 0===t?void 0:t.getData("text/plain"),o=this._dragOverIndex;if(this._dragOverIndex=null,null==n||null===o)return void console.warn("Drag/Drop failed: Missing dragged ID or target index.");const a=[...this.config.action_images||[]],r=a.findIndex((e=>e.id===n));if(-1===r)return void console.warn(`Drag/Drop failed: Could not find action image with ID: ${n}`);if(r===o)return;const[s]=a.splice(r,1),l=r<o?o-1:o;a.splice(l,0,s),this._updateConfig({action_images:a}),this.requestUpdate(),await this.updateComplete;try{const e=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelectorAll("action-image-row[data-row-id]"),t=this.config.action_images||[],n=new Map;null==e||e.forEach((e=>{const t=e.dataset.rowId;t&&n.set(t,e)})),t.forEach((e=>{const t=n.get(e.id);t?(console.log(`[ActionImageRow Re-Assign] Manually setting config for ID ${e.id}`,e),t.config=e):console.warn(`[ActionImageRow Re-Assign] Could not find element for ID ${e.id}`)}))}catch(e){console.error("[ActionImageRow Re-Assign] Error manually updating row configs:",e)}}_handlePriorityChange(e){const t=e.target;this._updateConfig({action_image_priority:t.value})}_t(e,t){var i,n;return $t(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}};Et.styles=c`
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

    /* Styles for width sliders - ensuring consistency with other components */
    .width-slider-container {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .width-slider-container ha-slider {
      width: 100%;
    }

    .width-value {
      font-size: 0.9em;
      color: var(--secondary-text-color);
      text-align: right;
      margin-top: 4px;
    }
  `,Ct([ve({attribute:!1})],Et.prototype,"hass",void 0),Ct([ve({attribute:!1})],Et.prototype,"config",void 0),Ct([be()],Et.prototype,"_dragOverIndex",void 0),Ct([be()],Et.prototype,"_newlyAddedImageIds",void 0),Et=Ct([ue("action-images-tab")],Et);var It=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let At=class extends he{constructor(){super(...arguments),this._vehicleCropExpanded=!1,this._activeSubTab="general",this._displayedWidth=100,this._rowSettingsExpanded={},this._activeEntityTabs={}}set config(e){if(!e)return;if(this._internalConfig===e&&!this._needsMigration(e))return;let t=Object.assign({},e);this._needsMigration(t)?(t=this._performMigration(t),this._internalConfig=t,Ze(this,"config-changed",{config:t})):this._internalConfig=t}get config(){return this._internalConfig}get _config(){return this._internalConfig}_t(e,t,i){return $t(e,t,i)}_generateUniqueId(){return Math.random().toString(36).substring(2,9)}_formatFieldName(e){return e?e.replace(/^./,(e=>e.toUpperCase())).replace(/_/g," "):""}_truncatePath(e,t=40){if(!e||e.length<=t)return e;const i=Math.floor(t/2)-1,n=t-i-3;return i<0||n<0?e:`${e.substring(0,i)}...${e.substring(e.length-n)}`}_valueChanged(e){if(e.stopPropagation(),!this._config)return;const t=e.detail.value,i=Object.assign(Object.assign({},this._config),t);if(void 0!==t.vehicle_image_type){const e=t.vehicle_image_type;"entity"===e?i.vehicle_image=void 0:"url"===e||"upload"===e?i.vehicle_image_entity=void 0:"none"!==e&&"default"!==e||(i.vehicle_image=void 0,i.vehicle_image_entity=void 0)}this.config=i,Ze(this,"config-changed",{config:i})}_getImageSchema(e){const t=[{name:"vehicle_image_type",selector:{select:{options:[{value:"none",label:$t("editor.common.none",e)},{value:"default",label:$t("editor.common.default",e)},{value:"upload",label:$t("editor.common.upload",e)},{value:"url",label:$t("editor.common.url",e)},{value:"entity",label:$t("editor.common.entity",e)}],mode:"dropdown"}},label:$t("editor.images.vehicle.type",e),description:$t("editor.images.vehicle.type_description",e)}],i=this._config.vehicle_image_type;return"url"===i?t.push({name:"vehicle_image",selector:{text:{}},label:$t("editor.common.url",e),description:$t("editor.images.common.url_description",e)}):"entity"===i&&t.push({name:"vehicle_image_entity",selector:{entity:{}},label:$t("editor.images.vehicle.entity",e),description:$t("editor.images.vehicle.entity_description",e)}),t}_dispatchFileUpload(e,t){var i;const n=e.target,o=null===(i=n.files)||void 0===i?void 0:i[0];o&&(this.dispatchEvent(new CustomEvent("file-upload",{detail:{file:o,configKey:t},bubbles:!0,composed:!0})),n.value="")}_resetTitleSize(){const e=Object.assign(Object.assign({},this._config),{title_size:void 0});this.config=e,Ze(this,"config-changed",{config:e})}_createDefaultCropSettings(){return{top:0,right:0,bottom:0,left:0}}_renderCropSliders(e,t){const i=this._config[e]||this._createDefaultCropSettings();return J`
      <div class="crop-input-row">
        <div class="crop-input-field">
          <span class="crop-label">${$t("editor.crop.top",t,"Top")}</span>
          <ha-textfield
            type="number"
            .value=${void 0!==i.top?String(i.top):"0"}
            @change=${t=>{const i=t.target,n=""===i.value?"0":i.value;this._updateImageCrop(e,"top",parseInt(n)||0)}}
          ></ha-textfield>
          <span class="crop-unit">${$t("editor.crop.pixels",t,"px")}</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">${$t("editor.crop.right",t,"Right")}</span>
          <ha-textfield
            type="number"
            .value=${void 0!==i.right?String(i.right):"0"}
            @change=${t=>{const i=t.target,n=""===i.value?"0":i.value;this._updateImageCrop(e,"right",parseInt(n)||0)}}
          ></ha-textfield>
          <span class="crop-unit">${$t("editor.crop.pixels",t,"px")}</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">${$t("editor.crop.bottom",t,"Bottom")}</span>
          <ha-textfield
            type="number"
            .value=${void 0!==i.bottom?String(i.bottom):"0"}
            @change=${t=>{const i=t.target,n=""===i.value?"0":i.value;this._updateImageCrop(e,"bottom",parseInt(n)||0)}}
          ></ha-textfield>
          <span class="crop-unit">${$t("editor.crop.pixels",t,"px")}</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">${$t("editor.crop.left",t,"Left")}</span>
          <ha-textfield
            type="number"
            .value=${void 0!==i.left?String(i.left):"0"}
            @change=${t=>{const i=t.target,n=""===i.value?"0":i.value;this._updateImageCrop(e,"left",parseInt(n)||0)}}
          ></ha-textfield>
          <span class="crop-unit">${$t("editor.crop.pixels",t,"px")}</span>
        </div>
      </div>

      <div class="crop-explanation">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <span
          >${$t("editor.crop.help",t,"Enter pixel values (positive or negative) to adjust cropping and padding")}</span
        >
      </div>
    `}_updateImageCrop(e,t,i){const n=this._config[e]||this._createDefaultCropSettings(),o=Object.assign(Object.assign({},n),{[t]:i});if(0===o.top&&0===o.right&&0===o.bottom&&0===o.left){const t=Object.assign({},this._config);delete t[e],this.config=t,Ze(this,"config-changed",{config:t})}else{const t=Object.assign(Object.assign({},this._config),{[e]:o});this.config=t,Ze(this,"config-changed",{config:t})}}_renderGeneralTab(){var e;const t=(null===(e=this.hass.locale)||void 0===e?void 0:e.language)||"en";return J`
      <!-- Card Title Section -->
      <div class="settings-section">
        <div class="section-header">${$t("editor.card_settings.title",t)}</div>
        <div class="settings-content">
          <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${[{name:"title",selector:{text:{}},label:$t("editor.card_settings.title",t)},{name:"title_alignment",selector:{select:{options:[{value:"left",label:$t("editor.alignment.left",t)},{value:"center",label:$t("editor.alignment.center",t)},{value:"right",label:$t("editor.alignment.right",t)}],mode:"dropdown"}},label:$t("editor.card_settings.title_alignment",t)}]}
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
                .schema=${[{name:"title_size",selector:{number:{mode:"box",unit:"px"}},label:$t("editor.card_settings.title_size",t)}]}
                .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
                .computeDescription=${e=>e.description}
                @value-changed=${this._valueChanged}
              ></ha-form>
              <ha-icon-button
                class="inline-reset-button"
                @click=${this._resetTitleSize}
                title=${$t("editor.common.reset",t)}
              >
                <ha-icon icon="mdi:refresh"></ha-icon>
              </ha-icon-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Vehicle Image Section -->
      <div class="settings-section">
        <div class="section-header">${$t("editor.images.vehicle.title",t)}</div>
        <div class="image-description">${$t("editor.images.vehicle.description",t)}</div>
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
                          >${$t("editor.common.choose_file",t)}</span
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
                            >${$t("editor.common.no_file_chosen",t)}</span
                          >`}
                    </div>
                  </div>
                </div>
              `:""}

          <!-- Add width slider for all image types except 'none' -->
          ${this._config.vehicle_image_type&&"none"!==this._config.vehicle_image_type?J`
                <div class="image-width-slider">
                  <div class="image-width-header">
                    ${$t("editor.images.vehicle.width",t,"Image Width")}
                    <div class="image-width-description">
                      ${$t("editor.images.common.width_over_100",t,"Values over 100% can help crop empty space around images")}
                    </div>
                  </div>
                  <div class="image-width-controls">
                    <div class="slider-input-combo">
                      <ha-slider
                        .min=${10}
                        .max=${200}
                        .step=${1}
                        .value=${Math.min(this._displayedWidth||this._config.vehicle_image_width||100,200)}
                        pin
                        @change=${this._handleImageWidthChange}
                        @input=${this._handleSliderInput}
                      ></ha-slider>
                      <ha-textfield
                        type="number"
                        min="10"
                        max="300"
                        .value=${this._displayedWidth||this._config.vehicle_image_width||100}
                        @input=${this._handleInputWidth}
                        @change=${this._handleInputWidthChange}
                        suffix="%"
                        class="width-input"
                      ></ha-textfield>
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
                    <span>${$t("editor.images.vehicle.crop",t)}</span>
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
        <div class="section-header">${$t("editor.card_settings.colors",t,"Colors")}</div>
        <div class="settings-content">
          <div class="vehicle-info-card">
            <div class="vehicle-info-title">
              ${$t("editor.card_settings.title_color",t,"Title Color")}
            </div>
            <div class="vehicle-info-description">
              ${$t("editor.card_settings.title_color_description",t,"Set the color of the card title")}
            </div>
            <div class="settings-content">
              <color-picker
                .value=${this._config.title_color||"var(--primary-text-color)"}
                .configValue=${"title_color"}
                @value-changed=${this._valueChanged}
              ></color-picker>
            </div>
          </div>

          <div class="vehicle-info-card">
            <div class="vehicle-info-title">
              ${$t("editor.card_settings.card_background",t,"Card Background")}
            </div>
            <div class="vehicle-info-description">
              ${$t("editor.card_settings.card_background_description",t,"Set the background color of the card")}
            </div>
            <div class="settings-content">
              <color-picker
                .value=${this._config.card_background||"var(--card-background-color)"}
                .configValue=${"card_background"}
                @value-changed=${this._valueChanged}
              ></color-picker>
            </div>
          </div>

          <!-- Vehicle Info Colors -->
          <div class="vehicle-info-card">
            <div class="vehicle-info-title">
              ${$t("editor.vehicle_info.colors.title",t,"Vehicle Info Colors")}
            </div>
            <div class="vehicle-info-description">
              ${$t("editor.vehicle_info.colors.description",t,"Customize colors for the vehicle information section")}
            </div>

            <div class="vehicle-info-colors-grid">
              <!-- Location Colors -->
              <div class="color-picker-container">
                <div class="color-picker-label">
                  ${$t("editor.vehicle_info.colors.location_icon",t,"Location Icon")}
                </div>
                <color-picker
                  .value=${this._config.location_icon_color||"var(--secondary-text-color)"}
                  .configValue=${"location_icon_color"}
                  @value-changed=${this._valueChanged}
                ></color-picker>
              </div>

              <div class="color-picker-container">
                <div class="color-picker-label">
                  ${$t("editor.vehicle_info.colors.location_text",t,"Location Text")}
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
                  ${$t("editor.vehicle_info.colors.mileage_icon",t,"Mileage Icon")}
                </div>
                <color-picker
                  .value=${this._config.mileage_icon_color||"var(--secondary-text-color)"}
                  .configValue=${"mileage_icon_color"}
                  @value-changed=${this._valueChanged}
                ></color-picker>
              </div>

              <div class="color-picker-container">
                <div class="color-picker-label">
                  ${$t("editor.vehicle_info.colors.mileage_text",t,"Mileage Text")}
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
                  ${$t("editor.vehicle_info.colors.car_state_text",t,"Car State Text")}
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
        <div class="section-header">
          ${$t("editor.card_settings.general",t,"General")}
        </div>
        <div class="settings-content">
          ${[{name:"formatted_entities",selector:{boolean:{}},label:$t("editor.card_settings.format_entities",t),description:$t("editor.card_settings.format_entities_description",t)},{name:"show_units",selector:{boolean:{}},label:$t("editor.card_settings.show_units",t),description:$t("editor.card_settings.show_units_description",t)},{name:"help_highlight",selector:{boolean:{}},label:$t("editor.card_settings.help_highlight",t,"Help Highlight"),description:$t("editor.card_settings.help_highlight_description",t,"Show visual highlights when switching between editor tabs to help identify which section you are editing")}].map((e=>{const t=e.selector&&"boolean"in e.selector;return J`
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
            .label=${$t("editor.settings_subtabs.general",t,"General")}
          >
          </mwc-button>
          <mwc-button
            class="${"action_images"===this._activeSubTab?"active":""}"
            @click=${()=>this._activeSubTab="action_images"}
            .label=${$t("editor.settings_subtabs.action_images",t,"Action Images")}
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
    `}_handleConfigChangedFromActionImages(e){e.stopPropagation(),Ze(this,"config-changed",{config:e.detail.config})}_handleFileUploadEvent(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("file-upload",{detail:e.detail,bubbles:!0,composed:!0}))}_handleInputWidth(e){const t=e.target;let i=parseInt(t.value);isNaN(i)&&(i=100),i<10&&(i=10),i>300&&(i=300),this._displayedWidth=i}_handleInputWidthChange(e){const t=e.target;let i=parseInt(t.value);isNaN(i)&&(i=100),i<10&&(i=10),i>300&&(i=300),this._displayedWidth=i;const n=Object.assign(Object.assign({},this._config),{vehicle_image_width:i});this._internalConfig=n,setTimeout((()=>{Ze(this,"config-changed",{config:n})}),10),this.requestUpdate()}_handleSliderInput(e){const t=e.target;this._displayedWidth=t.value}_handleImageWidthChange(e){const t=e.target.value,i=parseInt(t);this._displayedWidth=i;const n=Object.assign(Object.assign({},this._config),{vehicle_image_width:i});this._internalConfig=n,setTimeout((()=>{Ze(this,"config-changed",{config:n})}),10),this.requestUpdate()}_needsMigration(e){return(e.location_entity||e.mileage_entity||e.car_state_entity)&&(!e.info_rows||0===e.info_rows.length)}_performMigration(e){const t=Object.assign({},e),i=[],n=void 0===t.show_info_icons||t.show_info_icons,o=[];t.location_entity&&o.push({id:this._generateUniqueId(),entity:t.location_entity,name:"",show_icon:!1!==t.show_location&&n,icon:"mdi:map-marker-outline",text_size:"string"==typeof t.location_text_size?parseInt(t.location_text_size):t.location_text_size,text_color:"",custom_text_color:void 0}),t.mileage_entity&&o.push({id:this._generateUniqueId(),entity:t.mileage_entity,name:"",show_icon:!1!==t.show_mileage&&n,icon:"mdi:counter",text_size:"string"==typeof t.mileage_text_size?parseInt(t.mileage_text_size):t.mileage_text_size,text_color:"",custom_text_color:void 0}),o.length>0&&i.push({id:this._generateUniqueId(),info_entities:o,alignment:"left",spacing:"medium"}),t.car_state_entity&&i.push({id:this._generateUniqueId(),info_entities:[{id:this._generateUniqueId(),entity:t.car_state_entity,name:"",show_icon:!1!==t.show_car_state&&n,icon:"mdi:car-info",text_size:"string"==typeof t.car_state_text_size?parseInt(t.car_state_text_size):t.car_state_text_size,template_mode:t.car_state_template_mode,value_template:t.car_state_template,text_color:"",custom_text_color:void 0}],alignment:"left",spacing:"medium"}),t.info_rows=i,delete t.location_entity,delete t.show_location,delete t.location_icon_color,delete t.location_text_color,delete t.location_text_size,delete t.mileage_entity,delete t.show_mileage,delete t.mileage_icon_color,delete t.mileage_text_color,delete t.mileage_text_size,delete t.car_state_entity,delete t.show_car_state,delete t.car_state_text_color,delete t.car_state_text_size,delete t.car_state_template_mode,delete t.car_state_template,delete t.show_info_icons;const a=[...t.sections_order||[]],r=a.indexOf("info");if(-1!==r)a.splice(r,1),i.forEach(((e,t)=>{a.splice(r+t,0,`info_row_${e.id}`)}));else{const e=a.indexOf("image"),t=a.indexOf("title");let n=-1;-1!==e?n=e+1:-1!==t&&(n=t+1),-1!==n?i.forEach(((e,t)=>{a.splice(n+t,0,`info_row_${e.id}`)})):i.forEach((e=>a.push(`info_row_${e.id}`)))}return t.sections_order=a,console.log("[UltraVehicleCard] settings-tab: Migrated old info fields to new info_rows structure for info-tab to handle:",t),t}};At.styles=c`
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

    /* Text size control styles */
    .text-size-container {
      margin-top: 8px;
      padding: 0 16px 16px;
    }

    .text-size-label {
      font-size: 0.9em;
      color: var(--secondary-text-color);
      margin: 4px 0 8px;
    }

    .text-size-container .size-field {
      display: flex;
      align-items: center;
      position: relative;
      gap: 8px;
    }

    .text-size-container .size-field ha-form {
      flex: 1;
      margin-bottom: 0;
    }

    .text-size-container .inline-reset-button {
      --mdc-icon-button-size: 36px;
      color: var(--secondary-text-color);
      opacity: 0.8;
      flex-shrink: 0;
    }

    .text-size-container .inline-reset-button:hover {
      opacity: 1;
      color: var(--primary-color);
    }

    .template-mode-container {
      margin-top: 12px;
      padding: 0 16px 16px;
      border-top: 1px solid var(--divider-color);
    }

    .settings-label {
      font-size: 0.9em;
      color: var(--secondary-text-color);
      margin-bottom: 4px;
    }

    .template-container {
      margin-top: 12px;
      padding: 0 16px 16px;
      border-top: 1px solid var(--divider-color);
    }

    /* Image width slider styles */
    .image-width-slider {
      margin: 16px 0;
      padding: 0 16px;
    }

    .image-width-header {
      font-size: 0.9em;
      font-weight: 500;
      margin-bottom: 4px;
      color: var(--primary-text-color);
    }

    .image-width-description {
      font-size: 0.85em;
      margin-top: 4px;
      margin-bottom: 8px;
      color: var(--secondary-text-color);
      font-style: italic;
    }

    .image-width-controls {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .slider-input-combo {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .image-width-controls ha-slider {
      flex: 1;
    }

    .width-input {
      width: 100px;
    }

    .width-indicators {
      display: flex;
      justify-content: space-between;
      font-size: 0.8em;
      color: var(--secondary-text-color);
      margin-top: 4px;
      position: relative;
      padding: 0 10px;
    }

    .width-marker-100 {
      position: relative;
      font-weight: bold;
      color: var(--primary-color);
    }

    .width-marker-100::after {
      content: '';
      position: absolute;
      height: 8px;
      width: 2px;
      background-color: var(--primary-color);
      left: 50%;
      top: -12px;
      transform: translateX(-50%);
    }

    /* Info Rows Styling - MOVED TO info-tab.ts */
    /* .bar { ... } */
    /* .bar.expanded { ... } */
    /* ... and so on for all .bar, .mini-bar, .icon-settings-tab etc. */

    /* Styles for .subsection-header, .settings-content.collapsed/expanded if still needed by other parts */
    .subsection-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 16px;
      background-color: var(--secondary-background-color);
      font-weight: 500;
      border-bottom: 1px solid var(--divider-color);
    }

    .subsection-header.toggleable {
      cursor: pointer;
      user-select: none;
    }

    .subsection-header .toggle-icon {
      color: var(--primary-text-color);
      transition: transform 0.2s ease;
    }

    .settings-content.collapsed {
      display: none;
    }

    .settings-content.expanded {
      display: flex;
      flex-direction: column;
      gap: 16px;
      animation: slideDown 0.2s ease-out;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `,It([ve({attribute:!1})],At.prototype,"hass",void 0),It([be()],At.prototype,"_internalConfig",void 0),It([ve({attribute:!1})],At.prototype,"config",null),It([be()],At.prototype,"_vehicleCropExpanded",void 0),It([be()],At.prototype,"_activeSubTab",void 0),It([be()],At.prototype,"_displayedWidth",void 0),It([be()],At.prototype,"_rowSettingsExpanded",void 0),It([be()],At.prototype,"_activeEntityTabs",void 0),At=It([ue("settings-tab")],At);var Tt=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};const jt=[{value:"none",key:"editor.customize.conditions.types.none"},{value:"show",key:"editor.customize.conditions.types.show"},{value:"hide",key:"editor.customize.conditions.types.hide"}],Rt={bar_color:"var(--primary-color, #3498db)",background_color:"var(--card-background-color, #121212)",border_color:"var(--divider-color, #555555)",left_title_color:"var(--secondary-text-color, #999999)",left_text_color:"var(--primary-text-color, #ffffff)",right_title_color:"var(--secondary-text-color, #999999)",right_text_color:"var(--primary-text-color, #ffffff)",limit_indicator_color:"var(--error-color, #ff0000)",percentage_text_color:"#ffffff"},Lt={left_title:"",left_entity:"",right_title:"",right_entity:"",bar_color:Rt.bar_color,background_color:Rt.background_color,border_color:Rt.border_color,left_title_color:Rt.left_title_color,left_text_color:Rt.left_text_color,right_title_color:Rt.right_title_color,right_text_color:Rt.right_text_color,limit_indicator_color:Rt.limit_indicator_color,percentage_text_color:Rt.percentage_text_color,left_title_size:14,left_text_size:14,right_title_size:14,right_text_size:14,percentage_text_size:14,bar_size:"regular",bar_radius:"round",bar_style:"flat",show_left:!1,show_right:!1,show_percentage:!1,percentage_type:"entity",percentage_amount_entity:"",percentage_total_entity:"",percentage_attribute:"",percentage_template:"",alignment:"space-between",width:"100",use_gradient:!1,gradient_display_mode:"value_based",gradient_stops:[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}],animation_entity:"",animation_state:"",animation_type:"none",action_animation_entity:"",action_animation_state:"",action_animation:"none"};let Vt=class extends he{constructor(){super(...arguments),this._expandedBar=null,this._preventExpandCollapse=!1,this._activeBarTabs={},this._gradientEditorKeys={},this._updateStopDebounceTimer=null,this._removeStopDebounceTimer=null,this._updateOrderDebounceTimer=null,this.DEBOUNCE_DELAY=50,this.MAX_STOPS=7}_t(e,t){var i,n;return $t(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}_generateUniqueId(){return Math.random().toString(36).substring(2,9)}_getFriendlyName(e){var t,i;return e&&this.hass&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""}_truncateText(e,t=15){return e?e.length<=t?e:e.substring(0,t)+"...":""}_fireConfigChanged(e){Ze(this,"config-changed",{config:e})}_fireForceRefreshEvent(){this.dispatchEvent(new CustomEvent("force-refresh",{bubbles:!0,composed:!0,detail:{timestamp:Date.now()}}))}_fireForceGradientRefreshEvent(){this.dispatchEvent(new CustomEvent("force-gradient-refresh",{bubbles:!0,composed:!0,detail:{timestamp:Date.now()}})),this._fireForceRefreshEvent()}_navigateToCustomizeTab(){const e=new CustomEvent("request-tab-change",{detail:{tab:"customize"},bubbles:!0,composed:!0});this.dispatchEvent(e)}_handleGlobalBarAlignmentChange(e){if(e.stopPropagation(),!this.config)return;const t=e.detail.value.bar_row_alignment;this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bar_row_alignment:t}))}_toggleBarExpand(e){this._preventExpandCollapse?this._preventExpandCollapse=!1:this._expandedBar=this._expandedBar===e?null:e}_syncSectionsOrderWithBars(e,t){let i=[...t];i=i.filter((e=>"bars"!==e));const n=[],o=[];for(let e=0;e<i.length;e++)i[e].startsWith("bar_")&&(n.push(i[e]),o.push(e));const a=new Set,r=n.some((e=>!!a.has(e)||(a.add(e),!1))),s=e.map(((e,t)=>`bar_${t}`));if(0===o.length||r){r&&(i=i.filter((e=>!e.startsWith("bar_"))));let e=-1;return i.includes("info")?e=i.indexOf("info")+1:i.includes("image")?e=i.indexOf("image")+1:i.includes("icons")&&(e=i.indexOf("icons")),-1!==e?i.splice(e,0,...s):i.push(...s),i}i=i.filter((e=>!e.startsWith("bar_")));const l=Math.min(...o);return i.splice(l,0,...s),i}_addBar(){const e=[...this.config.bars||[]],t=JSON.parse(JSON.stringify(Lt));Object.keys(Rt).forEach((e=>{t[e]||(t[e]=Rt[e])})),t.entity="",t.gradient_stops=[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}],e.push(t);const i=this._syncSectionsOrderWithBars(e,this.config.sections_order||[]);this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:e,sections_order:i})),this._expandedBar=e.length-1,setTimeout((()=>{this.requestUpdate(),this._fireForceGradientRefreshEvent()}),10)}_duplicateBar(e){if(!this.config||!this.config.bars||e<0||e>=this.config.bars.length)return void console.warn("[BarsTab] Cannot duplicate bar: Invalid index or missing config.");const t=this.config.bars[e],i=JSON.parse(JSON.stringify(t));Object.keys(Rt).forEach((e=>{i[e]||(i[e]=Rt[e])})),i.use_gradient&&Array.isArray(i.gradient_stops)&&(i.gradient_stops=i.gradient_stops.map((e=>Object.assign(Object.assign({},e),{id:this._generateUniqueId()}))),this._ensureGradientStops(i));const n=[...this.config.bars],o=e+1;n.splice(o,0,i);const a=this._syncSectionsOrderWithBars(n,this.config.sections_order||[]),r=Object.assign({},this.config.sections_columns||{}),s={};Object.entries(r).forEach((([e,t])=>{if(e.startsWith("bar_")){const i=parseInt(e.substring(4));i>=o?s[`bar_${i+1}`]=t:s[e]=t}else s[e]=t})),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:n,sections_order:a,sections_columns:Object.keys(s).length>0?s:void 0})),this._expandedBar=o,setTimeout((()=>{this.requestUpdate(),this._fireForceGradientRefreshEvent()}),10)}_removeBar(e){const t=[...this.config.bars||[]];t.splice(e,1);const i=this._syncSectionsOrderWithBars(t,this.config.sections_order||[]),n=Object.assign({},this.config.sections_columns||{}),o={};Object.entries(n).forEach((([t,i])=>{if(t.startsWith("bar_")){const n=parseInt(t.substring(4));n<e?o[t]=i:n>e&&(o["bar_"+(n-1)]=i)}else o[t]=i})),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:t,sections_order:i,sections_columns:Object.keys(o).length>0?o:void 0})),this._expandedBar===e?this._expandedBar=null:null!==this._expandedBar&&this._expandedBar>e&&(this._expandedBar=this._expandedBar-1)}_barValueChanged(e,t){var i,n;if(e.stopPropagation(),!this.config.bars||!this.config.bars[t])return;const o=JSON.parse(JSON.stringify(this.config)),a=e.detail.value;let r=!1,s=!1,l=!1;const d=`bars.${t}.`;Object.entries(a).forEach((([e,i])=>{if(!e.startsWith(d))return;const n=e.substring(d.length),a=i;"percentage_text_color"===n?String(a)===Rt.percentage_text_color?delete o.bars[t][n]:this._setNestedBarValue(o,t,n,a):(this._setNestedBarValue(o,t,n,a),"use_gradient"===n?(r=!0,s=!0,l=!0,!0===a&&(this._ensureGradientStops(o.bars[t]),o.bars[t].gradient_display_mode||(o.bars[t].gradient_display_mode="value_based"))):n.includes("gradient")&&(s=!0))}));const c=this.config.bars[t];(null==c?void 0:c.use_gradient)&&!l&&(o.bars[t].use_gradient=!0,c.gradient_display_mode&&(o.bars[t].gradient_display_mode=c.gradient_display_mode),c.gradient_stops&&c.gradient_stops.length>=2&&(o.bars[t].gradient_stops=c.gradient_stops)),this._fireConfigChanged(o),(s||(null===(i=o.bars[t])||void 0===i?void 0:i.use_gradient))&&this._fireForceGradientRefreshEvent(),r&&(null===(n=o.bars[t])||void 0===n?void 0:n.use_gradient)&&(this._expandedBar=t,setTimeout((()=>{this.requestUpdate()}),0))}_handleColorChange(e,t,i){this._updateBarProperty(e,t,i),[50,150,300].forEach((e=>{setTimeout((()=>{this._fireForceGradientRefreshEvent(),this.requestUpdate()}),e)}))}_setNestedBarValue(e,t,i,n){e.bars&&e.bars[t]&&(i.includes("color")?Array.isArray(n)?e.bars[t][i]=`rgb(${n.join(", ")})`:e.bars[t][i]="object"==typeof n&&null!==n&&"r"in n&&"g"in n&&"b"in n?`rgb(${n.r}, ${n.g}, ${n.b})`:n:e.bars[t][i]=n)}_setActiveBarTab(e,t,i){e.stopPropagation(),this._activeBarTabs=Object.assign(Object.assign({},this._activeBarTabs),{[t]:i})}async _updateBarProperty(e,t,i){const n=JSON.parse(JSON.stringify(this.config));if(!n.bars||!n.bars[e])return;const o=n.bars[e].use_gradient,a=n.bars[e].gradient_display_mode,r=n.bars[e].gradient_stops;t.includes("color")?n.bars[e][t]=String(i):n.bars[e][t]=i,"gradient_display_mode"===t?n.bars[e].use_gradient=!0:"use_gradient"===t&&!0===i?this._ensureGradientStops(n.bars[e]):"use_gradient"!==t&&o&&(n.bars[e].use_gradient=!0,a&&(n.bars[e].gradient_display_mode=a),r&&r.length>=2&&(n.bars[e].gradient_stops=r)),"gradient_stops"===t&&Array.isArray(i)&&(n.bars[e].gradient_stops=[...i].sort(((e,t)=>e.position-t.position)),n.bars[e].use_gradient=!0,this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1})),this._fireConfigChanged(n),this.requestUpdate(),("use_gradient"===t||"gradient_display_mode"===t||"gradient_stops"===t||t.includes("color")||o)&&[10,50,200].forEach((e=>{setTimeout((()=>{this._fireForceGradientRefreshEvent(),this.requestUpdate()}),e)}))}_resetBarColor(e,t,i){const n=[...this.config.bars||[]];if(n[e]){const i=Object.assign({},n[e]);delete i[t],n[e]=i;const o=Object.assign(Object.assign({},this.config),{bars:n});this._fireConfigChanged(o),this.requestUpdate();const a=t.includes("gradient")||"bar_color"===t;[10,50,200].forEach((e=>{setTimeout((()=>{a&&this._fireForceGradientRefreshEvent(),this.requestUpdate()}),e)}))}}_resetBarSize(e,t){const i=[...this.config.bars||[]];if(i[e]){const n=Object.assign({},i[e]);delete n[t],i[e]=n,this._fireConfigChanged(Object.assign(Object.assign({},this.config),{bars:i})),this.requestUpdate()}}_ensureGradientStops(e){(!e.gradient_stops||!Array.isArray(e.gradient_stops)||e.gradient_stops.length<2)&&(e.gradient_stops=[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}])}_addGradientStop(e){if(!this.config.bars)return;const t=this.config.bars[e];if(!t)return;const i=Array.isArray(t.gradient_stops)&&t.gradient_stops.length>=2?[...t.gradient_stops]:[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}];if(i.length>=this.MAX_STOPS)return void console.warn("[BarsTab] Max gradient stops reached.");const n=function(e){const t=[...e].sort(((e,t)=>e.position-t.position));if(t.length>=7)return console.warn("[GradientEditor] Max stops reached (7). Cannot add more."),null;const i=new Set(t.map((e=>e.id)));let n=-1;for(let e=3;e<=7;e++)if(!i.has(String(e))){n=e;break}if(-1===n)return console.warn("[GradientEditor] Could not find an available ID between 3 and 7."),null;let o=0,a=50,r=0;for(let e=0;e<t.length-1;e++){const i=t[e+1].position-t[e].position;i>o&&(o=i,a=t[e].position+i/2,r=e)}const s=ze(t[r].color)||{r:255,g:255,b:0},l=ze(t[r+1].color)||{r:0,g:255,b:0},d=Math.round(s.r+.5*(l.r-s.r)),c=Math.round(s.g+.5*(l.g-s.g)),p=Math.round(s.b+.5*(l.b-s.b)),g=`#${d.toString(16).padStart(2,"0")}${c.toString(16).padStart(2,"0")}${p.toString(16).padStart(2,"0")}`;return{id:String(n),position:Math.round(a),color:g}}(i);if(!n)return;const o=[...i,n].sort(((e,t)=>e.position-t.position)),a=this.config.bars.map(((t,i)=>i===e?Object.assign(Object.assign({},t),{gradient_stops:o,use_gradient:!0}):t));this.config=Object.assign(Object.assign({},this.config),{bars:a}),this._fireConfigChanged(this.config),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}),this.requestUpdate()}_updateGradientStop(e,t){this._updateStopDebounceTimer&&clearTimeout(this._updateStopDebounceTimer),this._updateStopDebounceTimer=setTimeout((()=>{var i;if(!this.config.bars||!(null===(i=this.config.bars[e])||void 0===i?void 0:i.gradient_stops))return;let n=!1;const o=this.config.bars.map(((i,o)=>{if(o===e){let e=i.gradient_stops;const o=e.findIndex((e=>e.id===t.id));return-1===o?i:(e[o].position!==t.position&&(n=!0),e=e.map((e=>e.id===t.id?t:e)),n&&(e=e.sort(((e,t)=>e.position-t.position))),Object.assign(Object.assign({},i),{gradient_stops:e}))}return i}));this.config=Object.assign(Object.assign({},this.config),{bars:o}),this._fireConfigChanged(this.config),n&&(this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1})),this.requestUpdate()}),this.DEBOUNCE_DELAY)}_removeGradientStop(e,t){var i;if(!this.config.bars||!(null===(i=this.config.bars[e])||void 0===i?void 0:i.gradient_stops)||this.config.bars[e].gradient_stops.length<=2)return;const n=this.config.bars.map(((i,n)=>{if(n===e){const e=i.gradient_stops.filter((e=>e.id!==t));return e.sort(((e,t)=>e.position-t.position)),Object.assign(Object.assign({},i),{gradient_stops:e})}return i}));this.config=Object.assign(Object.assign({},this.config),{bars:n}),this._fireConfigChanged(this.config),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}),this.requestUpdate()}_handleDuplicateStop(e,t){var i;if(!this.config.bars||!(null===(i=this.config.bars[e])||void 0===i?void 0:i.gradient_stops))return;const n=this.config.bars[e].gradient_stops;if(n.length>=this.MAX_STOPS)return void console.warn("[BarsTab] Cannot duplicate stop: Max stops reached.");const o=n.find((e=>e.id===t));if(!o)return;const a=Object.assign(Object.assign({},o),{id:this._generateUniqueId(),position:Math.max(1,Math.min(99,o.position+5))}),r=[...n,a].sort(((e,t)=>e.position-t.position)),s=this.config.bars.map(((t,i)=>i===e?Object.assign(Object.assign({},t),{gradient_stops:r}):t));this.config=Object.assign(Object.assign({},this.config),{bars:s}),this._fireConfigChanged(this.config),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}),this.requestUpdate()}render(){var e;if(!this.hass||!this.config)return Y;const t=[{value:"flex-start",label:this._t("editor.alignment.left","Left")},{value:"center",label:this._t("editor.alignment.center","Center")},{value:"flex-end",label:this._t("editor.alignment.right","Right")}],i=this.config.bar_row_alignment||"center";return J`
      <div class="tab-content">
        <div class="section-header">${this._t("editor.bars.title")}</div>
        <div class="description">${this._t("editor.bars.description")}</div>

        <!-- Global Bar Row Alignment Setting -->
        <div class="section-group global-bar-settings">
          <div class="subsection-header">
            <span>${this._t("editor.bars.row_alignment.header","Global Bar Row Alignment")}</span>
          </div>
          <p class="section-description">
            ${this._t("editor.bars.row_alignment.description","Controls the horizontal alignment of bars within each row if they do not fill the entire width.")}
          </p>
          <div class="form-field-spacer">
            <ha-form
              .hass=${this.hass}
              .data=${{bar_row_alignment:i}}
              .schema=${[{name:"bar_row_alignment",selector:{select:{options:t,mode:"dropdown"}},label:this._t("editor.bars.row_alignment.label","Bar Row Alignment")}]}
              .computeLabel=${e=>this._t(e.label||e.name)}
              @value-changed=${this._handleGlobalBarAlignmentChange}
            ></ha-form>
          </div>
        </div>

        <div class="bars-container">
          ${null===(e=this.config.bars)||void 0===e?void 0:e.map(((e,t)=>this._renderBar(e,t)))}
          <div class="add-bar-container">
            <ha-button class="add-bar-button" @click=${this._addBar}>
              <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
              ${this._t("editor.bars.add")}
            </ha-button>
          </div>
        </div>

        <div style="margin-top: 24px; text-align: center;">
          <ha-button
            raised
            .label=${this._t("editor.tabs.bars.arrange_bars","Arrange Bars")}
            @click=${this._navigateToCustomizeTab}
            .path=${"M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"}
          ></ha-button>
        </div>
      </div>
    `}_renderBar(e,t){const i=this._expandedBar===t,n=this._getFriendlyName(e.entity),o=this._truncateText(n,20),a=this._activeBarTabs[t]||"config";return J`
      <div class="bar ${i?"expanded":""}">
        <div class="bar-header" @click=${()=>this._toggleBarExpand(t)}>
          <div class="bar-title">
            ${this._t("editor.bars.bar_prefix","Bar")} ${t+1}
            <span class="bar-entity">${o||this._t("editor.bars.no_entity")}</span>
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

        ${i?this._renderBarContent(e,t,a):""}
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
    `}_renderBarConfigurationTab(e,t){const i=this._prepareBarData(e,t),n=this._getMainBarSchema(t),o=e;return J`
      <div class="section-group main-bar-settings">
        <div class="subsection-header">
          <span>${this._t("editor.bars.settings.header")}</span>
        </div>

        <!-- Percentage Type subsection -->
        <div class="settings-subsection percentage-type-subsection">
          <div class="subsection-inner-header">
            ${this._t("editor.bars.percentage.calculation_header","Percentage Calculation")}
          </div>
          <p class="section-description">${this._t("editor.bars.percentage.calculation_description","Configure how the bar's percentage fill level is calculated using one of the options below.")}</p>

          <!-- First render the Percentage Type selection -->
          <div class="form-field-spacer">
            <ha-form
              .hass=${this.hass}
              .data=${i}
              .schema=${[{name:`bars.${t}.percentage_type`,selector:{select:{options:[{value:"entity",label:this._t("editor.bars.percentage.type_entity","Entity (0-100)")},{value:"attribute",label:this._t("editor.bars.percentage.type_attribute","Entity Attribute")},{value:"template",label:this._t("editor.bars.percentage.type_template","Template Mode")},{value:"difference",label:this._t("editor.bars.percentage.type_difference","Difference (Amount/Total)")}],mode:"dropdown"}},label:this._t("editor.bars.percentage.type_label","Percentage Type"),description:this._t("editor.bars.percentage.type_description","How to calculate the percentage value shown in the bar")}]}
              .computeLabel=${e=>this._t(e.label||e.name)}
              .computeDescription=${e=>this._t(e.description||"")}
              @value-changed=${e=>this._barValueChanged(e,t)}
            ></ha-form>
          </div>

          <!-- Conditionally render entity fields based on percentage type -->
          ${"difference"===o.percentage_type?J`
                  <!-- Render Amount and Total entity pickers for Difference type -->
                  <div class="form-field-spacer">
                    <ha-form
                      .hass=${this.hass}
                      .data=${i}
                      .schema=${[{name:`bars.${t}.percentage_amount_entity`,selector:{entity:{}},label:this._t("editor.bars.percentage.amount_entity","Amount Entity"),description:this._t("editor.bars.percentage.amount_description","Entity representing the current amount/value")}]}
                      .computeLabel=${e=>this._t(e.label||e.name)}
                      .computeDescription=${e=>this._t(e.description||"")}
                      @value-changed=${e=>this._barValueChanged(e,t)}
                    ></ha-form>
                  </div>

                  <div class="form-field-spacer">
                    <ha-form
                      .hass=${this.hass}
                      .data=${i}
                      .schema=${[{name:`bars.${t}.percentage_total_entity`,selector:{entity:{}},label:this._t("editor.bars.percentage.total_entity","Total Entity"),description:this._t("editor.bars.percentage.total_description","Entity representing the total/maximum amount")}]}
                      .computeLabel=${e=>this._t(e.label||e.name)}
                      .computeDescription=${e=>this._t(e.description||"")}
                      @value-changed=${e=>this._barValueChanged(e,t)}
                    ></ha-form>
                  </div>
                `:"attribute"===o.percentage_type?J`
                    <!-- Render Entity and Attribute pickers for Attribute type -->
                    <div class="form-field-spacer">
                      <ha-form
                        .hass=${this.hass}
                        .data=${i}
                        .schema=${[{name:`bars.${t}.entity`,selector:{entity:{}},label:this._t("editor.bars.settings.entity"),description:this._t("editor.bars.settings.entity_description")}]}
                        .computeLabel=${e=>this._t(e.label||e.name)}
                        .computeDescription=${e=>this._t(e.description||"")}
                        @value-changed=${e=>this._barValueChanged(e,t)}
                      ></ha-form>
                    </div>

                    <div class="form-field-spacer">
                      <ha-form
                        .hass=${this.hass}
                        .data=${i}
                        .schema=${[{name:`bars.${t}.percentage_attribute`,selector:{text:{}},label:this._t("editor.bars.percentage.attribute","Attribute Name"),description:this._t("editor.bars.percentage.attribute_description","The attribute from the entity to use for percentage")}]}
                        .computeLabel=${e=>this._t(e.label||e.name)}
                        .computeDescription=${e=>this._t(e.description||"")}
                        @value-changed=${e=>this._barValueChanged(e,t)}
                      ></ha-form>
                    </div>
                  `:"template"===o.percentage_type?J`
                      <!-- Add template mode options for percentage -->
                      <div class="controls-group template-controls">
                        <div class="controls-header">
                          ${this._t("editor.icons.template_mode.header","Template Mode")}
                        </div>
                        <div class="controls-description">
                          ${this._t("editor.bars.template.description","Use a template to calculate a percentage value (0-100). Templates can access sensor values, perform calculations, or extract data from attributes.")}
                        </div>

                        <div class="control-item template-item">
                          <ha-textarea
                            label="${this._t("editor.icons.template_mode.template","Template")}"
                            .value=${o.percentage_template||""}
                            @input=${e=>this._updateBarProperty(t,"percentage_template",e.target.value)}
                            @mousedown=${e=>e.stopPropagation()}
                            @click=${e=>e.stopPropagation()}
                            @dragstart=${e=>e.stopPropagation()}
                            placeholder="${this._t("editor.icons.template_mode.template_helper","Enter your template here...")}"
                            class="template-textarea"
                            rows="4"
                          ></ha-textarea>
                        </div>

                        <div class="template-examples">
                          <div class="template-example-header">
                            ${this._t("entity_settings.template_examples_header","Common Examples:")}
                          </div>
                          <ul class="template-example-list">
                            <li>
                              <code>{{ states('sensor.battery_level') | int }}</code> - Simple
                              entity value
                            </li>
                            <li>
                              <code>{{ (states('sensor.current') | float(0) / 10) * 100 }}</code> -
                              Value conversion
                            </li>
                            <li>
                              <code
                                >{{ (states('sensor.current_miles') | float(0) /
                                states('sensor.max_miles') | float(1)) * 100 }}</code
                              >
                              - Percentage calculation
                            </li>
                            <li>
                              <code>{{ state_attr('sensor.vehicle', 'battery_level') | int }}</code>
                              - From attribute
                            </li>
                          </ul>
                        </div>
                      </div>
                    `:J`
                      <!-- Render Main Entity field for Entity type -->
                      <div class="form-field-spacer">
                        <ha-form
                          .hass=${this.hass}
                          .data=${i}
                          .schema=${[{name:`bars.${t}.entity`,selector:{entity:{}},label:this._t("editor.bars.settings.entity"),description:this._t("editor.bars.settings.entity_description")}]}
                          .computeLabel=${e=>this._t(e.label||e.name)}
                          .computeDescription=${e=>this._t(e.description||"")}
                          @value-changed=${e=>this._barValueChanged(e,t)}
                        ></ha-form>
                      </div>
                    `}
        </div>

        <!-- Bar Limit subsection -->
        <div class="form-field-spacer" style="margin-top: 16px;">
          <ha-form
            .hass=${this.hass}
            .data=${i}
            .schema=${[{name:`bars.${t}.limit_entity`,selector:{entity:{}},label:this._t("editor.bars.settings.limit_entity")}]}
            .computeLabel=${e=>this._t(e.label||e.name)}
            .computeDescription=${e=>this._t(e.description||"")}
            @value-changed=${e=>this._barValueChanged(e,t)}
          ></ha-form>
          <div class="helper-text limit-helper-text">
            ${this._t("editor.bars.settings.limit_entity_description","Optional: Add a vertical indicator line on the bar (e.g. charge limit for EV battery).")}
          </div>
        </div>
        
        <div class="form-field-spacer">
          <ha-form
            .hass=${this.hass}
            .data=${i}
            .schema=${[{name:`bars.${t}.limit_indicator_color`,selector:{color:{type:"hex"}},label:this._t("editor.bars.settings.limit_color")}]}
            .computeLabel=${e=>this._t(e.label||e.name)}
            .computeDescription=${e=>this._t(e.description||"")}
            @value-changed=${e=>this._barValueChanged(e,t)}
          ></ha-form>
          <!-- Removed the helper text for the color field -->
        </div>

        <!-- Render the rest of the main settings -->
        <div class="form-field-spacer">
          <ha-form
            .hass=${this.hass}
            .data=${i}
            .schema=${n} // Use all items since we've already removed the first 3
            .computeLabel=${e=>this._t(e.label||e.name)}
            .computeDescription=${e=>this._t(e.description||"")}
            @value-changed=${e=>this._barValueChanged(e,t)}
          ></ha-form>
        </div>
      </div>
      
      <!-- Create a dedicated Percentage Display section with its own styling -->
      <div class="section-group percentage-settings-group">
        <div class="subsection-header">
          <span>${this._t("editor.bars.percentage.display_header","Percentage Text Display")}</span>
          <ha-switch
            .checked=${!0===e.show_percentage}
            @change=${e=>{this._updateBarProperty(t,"show_percentage",e.target.checked),this.requestUpdate()}}
            title="${this._t("editor.bars.percentage.toggle_description","Toggle percentage display")}"
          ></ha-switch>
        </div>
        
        <p class="section-description">${this._t("editor.bars.percentage.display_description","Control the visibility and appearance of percentage values shown directly on the bar. These numbers provide a clear visual indicator of the current level.")}</p>
        
        ${e.show_percentage?J`
                <div class="percentage-settings-container">
                  <!-- Text size setting -->
                  <div class="form-field-spacer">
                    <div class="size-field">
                      <ha-form
                        .hass=${this.hass}
                        .data=${i}
                        .schema=${[{name:`bars.${t}.percentage_text_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.percentage.text_size","Text Size"),description:this._t("editor.bars.percentage.text_size_description","Size of the percentage text displayed in the bar")}]}
                        .computeLabel=${e=>this._t(e.label||e.name)}
                        .computeDescription=${e=>this._t(e.description||"")}
                        @value-changed=${e=>this._barValueChanged(e,t)}
                      ></ha-form>
                      <ha-icon-button
                        class="inline-reset-button"
                        @click=${()=>this._resetBarSize(t,"percentage_text_size")}
                        title="${this._t("editor.bars.reset_size","Reset to default size")}"
                      >
                        <ha-icon icon="mdi:refresh"></ha-icon>
                      </ha-icon-button>
                    </div>
                  </div>
                </div>
              `:J`<div class="side-disabled">
                ${this._t("editor.bars.percentage.hidden_message","Percentage display is currently hidden")}
              </div>`}
      </div>

      <!-- Left Side Settings with added condition fields -->
      <div class="section-group left-side-settings">
        <div class="subsection-header">
          <span>${this._t("editor.bars.left_side.header")}</span>
          <ha-switch
            .checked=${!1!==e.show_left}
            @change=${e=>{this._updateBarProperty(t,"show_left",e.target.checked),this.requestUpdate()}}
            title="${this._t("editor.bars.left_side.toggle_description")}"
          ></ha-switch>
        </div>

        <p class="section-description">${this._t("editor.bars.left_side.section_description","Configure the title and entity value displayed on the left side of the bar. This is useful for showing labels like 'Range' or 'Battery' along with their values.")}</p>

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

                  <!-- Add the conditional fields for left side -->
                  ${this._renderLeftSideConditionFields(e,t)}
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

      <!-- Right Side Settings with added condition fields -->
      <div class="section-group right-side-settings">
        <div class="subsection-header">
          <span>${this._t("editor.bars.right_side.header")}</span>
          <ha-switch
            .checked=${!1!==e.show_right}
            @change=${e=>{this._updateBarProperty(t,"show_right",e.target.checked),this.requestUpdate()}}
            title="${this._t("editor.bars.right_side.toggle_description")}"
          ></ha-switch>
        </div>

        <p class="section-description">${this._t("editor.bars.right_side.section_description","Configure the title and entity value displayed on the right side of the bar. This is ideal for complementary information like 'Time to Full' or secondary measurements.")}</p>

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

                  <!-- Add the conditional fields for right side -->
                  ${this._renderRightSideConditionFields(e,t)}
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
          <p class="section-description">${this._t("editor.bars.gradient.description")}</p>
          <!-- Create a specific data object for this form -->
          ${(()=>{var i;const n=Object.assign({use_gradient:null!==(i=e.use_gradient)&&void 0!==i&&i},e.use_gradient&&{gradient_display_mode:e.gradient_display_mode||"value_based"}),o=[{name:"use_gradient",selector:{boolean:{}},label:this._t("editor.bars.gradient.toggle"),description:this._t("editor.bars.gradient.toggle_description")},...e.use_gradient?[{name:"gradient_display_mode",selector:{select:{options:[{value:"full",label:this._t("editor.bars.gradient.display_mode_full")},{value:"value_based",label:this._t("editor.bars.gradient.display_mode_value_based")},{value:"cropped",label:this._t("editor.bars.gradient.display_mode_cropped")}],mode:"dropdown"}},label:this._t("editor.bars.gradient.display_mode"),description:this._t("editor.bars.gradient.display_mode_description")}]:[]];return J`
              <ha-form
                .hass=${this.hass}
                .data=${n}
                .schema=${o}
                .computeLabel=${e=>this._t(e.label||e.name)}
                .computeDescription=${e=>this._t(e.description||"")}
                @value-changed=${e=>this._handleGradientFormChange(e,t)}
              ></ha-form>
            `})()}
        </div>
      </div>
      ${e.use_gradient?this._renderGradientEditor(e,t):""}
    `}_handleGradientFormChange(e,t){if(e.stopPropagation(),!this.config.bars||!this.config.bars[t])return;const i=e.detail.value,n=JSON.parse(JSON.stringify(this.config));let o=!1;void 0!==i.use_gradient&&n.bars[t].use_gradient!==i.use_gradient&&(n.bars[t].use_gradient=i.use_gradient,o=!0,i.use_gradient&&(this._ensureGradientStops(n.bars[t]),n.bars[t].gradient_display_mode||(n.bars[t].gradient_display_mode="value_based"))),void 0!==i.gradient_display_mode&&n.bars[t].gradient_display_mode!==i.gradient_display_mode&&(n.bars[t].gradient_display_mode=i.gradient_display_mode,o=!0),o&&(this._fireConfigChanged(n),this.requestUpdate())}_renderBarAnimationTab(e,t){const i=this._prepareBarData(e,t);return J`
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
        </div>
      </div>
    `}_renderPercentageOptions(e,t){const i=this._prepareBarData(e,t),n=e;return J`
      <div class="percentage-options-container">
        <div class="percentage-options-header">
          ${this._t("editor.bars.percentage.type_header","Percentage Calculation")}
        </div>

        <!-- Percentage Type Selector -->
        <ha-form
          .hass=${this.hass}
          .data=${i}
          .schema=${[{name:`bars.${t}.percentage_type`,selector:{select:{options:[{value:"entity",label:this._t("editor.bars.percentage.type_entity","Entity (0-100)")},{value:"attribute",label:this._t("editor.bars.percentage.type_attribute","Entity Attribute")},{value:"template",label:this._t("editor.bars.percentage.type_template","Template Mode")},{value:"difference",label:this._t("editor.bars.percentage.type_difference","Difference (Amount/Total)")}],mode:"dropdown"}},label:this._t("editor.bars.percentage.type_label","Percentage Type"),description:this._t("editor.bars.percentage.type_description","How to calculate the percentage value")}]}
          .computeLabel=${e=>this._t(e.label||e.name)}
          .computeDescription=${e=>this._t(e.description||"")}
          @value-changed=${e=>this._barValueChanged(e,t)}
        ></ha-form>

        <!-- Show entity pickers based on percentage type -->
        ${"difference"===n.percentage_type?J`
              <div class="percentage-difference-fields">
                <ha-form
                  .hass=${this.hass}
                  .data=${i}
                  .schema=${[{name:`bars.${t}.percentage_amount_entity`,selector:{entity:{}},label:this._t("editor.bars.percentage.amount_entity","Amount Entity"),description:this._t("editor.bars.percentage.amount_description","Entity representing the current amount/value")}]}
                  .computeLabel=${e=>this._t(e.label||e.name)}
                  .computeDescription=${e=>this._t(e.description||"")}
                  @value-changed=${e=>this._barValueChanged(e,t)}
                ></ha-form>

                <ha-form
                  .hass=${this.hass}
                  .data=${i}
                  .schema=${[{name:`bars.${t}.percentage_total_entity`,selector:{entity:{}},label:this._t("editor.bars.percentage.total_entity","Total Entity"),description:this._t("editor.bars.percentage.total_description","Entity representing the total/maximum amount")}]}
                  .computeLabel=${e=>this._t(e.label||e.name)}
                  .computeDescription=${e=>this._t(e.description||"")}
                  @value-changed=${e=>this._barValueChanged(e,t)}
                ></ha-form>
              </div>
            `:"attribute"===n.percentage_type?J`
                <!-- Render Entity and Attribute pickers for Attribute type -->
                <div class="form-field-spacer">
                  <ha-form
                    .hass=${this.hass}
                    .data=${i}
                    .schema=${[{name:`bars.${t}.entity`,selector:{entity:{}},label:this._t("editor.bars.settings.entity"),description:this._t("editor.bars.settings.entity_description")}]}
                    .computeLabel=${e=>this._t(e.label||e.name)}
                    .computeDescription=${e=>this._t(e.description||"")}
                    @value-changed=${e=>this._barValueChanged(e,t)}
                  ></ha-form>
                </div>

                <div class="form-field-spacer">
                  <ha-form
                    .hass=${this.hass}
                    .data=${i}
                    .schema=${[{name:`bars.${t}.percentage_attribute`,selector:{text:{}},label:this._t("editor.bars.percentage.attribute","Attribute Name"),description:this._t("editor.bars.percentage.attribute_description","The attribute from the entity to use for percentage")}]}
                    .computeLabel=${e=>this._t(e.label||e.name)}
                    .computeDescription=${e=>this._t(e.description||"")}
                    @value-changed=${e=>this._barValueChanged(e,t)}
                  ></ha-form>
                </div>
              `:"template"===n.percentage_type?J`
                  <!-- Add template mode options for percentage -->
                  <div class="controls-group template-controls">
                    <div class="controls-header">
                      ${this._t("editor.icons.template_mode.header","Template Mode")}
                    </div>
                    <div class="controls-description">
                      ${this._t("editor.bars.template.description","Use a template to calculate a percentage value (0-100). Templates can access sensor values, perform calculations, or extract data from attributes.")}
                    </div>

                    <div class="control-item template-item">
                      <ha-textarea
                        label="${this._t("editor.icons.template_mode.template","Template")}"
                        .value=${n.percentage_template||""}
                        @input=${e=>this._updateBarProperty(t,"percentage_template",e.target.value)}
                        @mousedown=${e=>e.stopPropagation()}
                        @click=${e=>e.stopPropagation()}
                        @dragstart=${e=>e.stopPropagation()}
                        placeholder="${this._t("editor.icons.template_mode.template_helper","Enter your template here...")}"
                        class="template-textarea"
                        rows="4"
                      ></ha-textarea>
                    </div>

                    <div class="template-examples">
                      <div class="template-example-header">
                        ${this._t("entity_settings.template_examples_header","Common Examples:")}
                      </div>
                      <ul class="template-example-list">
                        <li>
                          <code>{{ states('sensor.battery_level') | int }}</code> - Simple entity
                          value
                        </li>
                        <li>
                          <code>{{ (states('sensor.current') | float(0) / 10) * 100 }}</code> -
                          Value conversion
                        </li>
                        <li>
                          <code
                            >{{ (states('sensor.current_miles') | float(0) /
                            states('sensor.max_miles') | float(1)) * 100 }}</code
                          >
                          - Percentage calculation
                        </li>
                        <li>
                          <code>{{ state_attr('sensor.vehicle', 'battery_level') | int }}</code> -
                          From attribute
                        </li>
                      </ul>
                    </div>
                  </div>
                `:J`
                  <!-- Render Main Entity field for Entity type -->
                  <div class="form-field-spacer">
                    <ha-form
                      .hass=${this.hass}
                      .data=${i}
                      .schema=${[{name:`bars.${t}.entity`,selector:{entity:{}},label:this._t("editor.bars.settings.entity"),description:this._t("editor.bars.settings.entity_description")}]}
                      .computeLabel=${e=>this._t(e.label||e.name)}
                      .computeDescription=${e=>this._t(e.description||"")}
                      @value-changed=${e=>this._barValueChanged(e,t)}
                    ></ha-form>
                  </div>
                `}
      </div>
    `}_renderColorPickersGrid(e,t){const i=[{name:"bar_color",labelKey:"editor.bars.colors.bar_color",default:Rt.bar_color},{name:"background_color",labelKey:"editor.bars.colors.background_color",default:Rt.background_color},{name:"border_color",labelKey:"editor.bars.colors.border_color",default:Rt.border_color},{name:"limit_indicator_color",labelKey:"editor.bars.colors.limit_indicator_color",default:Rt.limit_indicator_color},{name:"left_title_color",labelKey:"editor.bars.colors.left_title_color",default:Rt.left_title_color},{name:"left_text_color",labelKey:"editor.bars.colors.left_value_color",default:Rt.left_text_color},{name:"right_title_color",labelKey:"editor.bars.colors.right_title_color",default:Rt.right_title_color},{name:"right_text_color",labelKey:"editor.bars.colors.right_value_color",default:Rt.right_text_color},{name:"percentage_text_color",labelKey:"editor.bars.colors.percentage_text_color",default:Rt.percentage_text_color}];return J`
      <div class="subsection-header">${this._t("editor.bars.colors.header")}</div>
      <div class="color-pickers-grid">
        ${i.map((i=>{const n=e[i.name],o=i.default,a=n||o;return J`
            <div class="color-picker-item">
              <div class="color-picker-label">
                ${this._t(i.labelKey,i.labelKey.split(".").pop()||"")}
              </div>
              <div class="color-picker-control">
                <color-picker
                  .value=${a}
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
    `}_getMainBarSchema(e){return[{name:`bars.${e}.bar_size`,selector:{select:{options:[{value:"thin",label:this._t("editor.bars.bar_sizes.thin")},{value:"regular",label:this._t("editor.bars.bar_sizes.regular")},{value:"thick",label:this._t("editor.bars.bar_sizes.thick")},{value:"thiccc",label:this._t("editor.bars.bar_sizes.thiccc")}],mode:"dropdown"}},label:this._t("editor.bars.settings.bar_size"),description:this._t("editor.bars.settings.bar_size_description")},{name:`bars.${e}.bar_radius`,selector:{select:{options:[{value:"round",label:this._t("editor.bars.bar_radius.round")},{value:"square",label:this._t("editor.bars.bar_radius.square")},{value:"rounded-square",label:this._t("editor.bars.bar_radius.rounded-square")}],mode:"dropdown"}},label:this._t("editor.bars.settings.bar_radius"),description:this._t("editor.bars.settings.bar_radius_description")},{name:`bars.${e}.bar_style`,selector:{select:{options:[{value:"flat",label:this._t("editor.bars.bar_styles.flat","Flat (Default)")},{value:"glossy",label:this._t("editor.bars.bar_styles.glossy","Glossy")},{value:"embossed",label:this._t("editor.bars.bar_styles.embossed","Embossed")},{value:"inset",label:this._t("editor.bars.bar_styles.inset","Inset")},{value:"gradient",label:this._t("editor.bars.bar_styles.gradient","Gradient Overlay")},{value:"neon",label:this._t("editor.bars.bar_styles.neon","Neon Glow")},{value:"outline",label:this._t("editor.bars.bar_styles.outline","Outline")},{value:"glass",label:this._t("editor.bars.bar_styles.glass","Glass")},{value:"metallic",label:this._t("editor.bars.bar_styles.metallic","Metallic")},{value:"neumorphic",label:this._t("editor.bars.bar_styles.neumorphic","Neumorphic")},{value:"dashed",label:this._t("editor.bars.bar_styles.dashed","Dashed")}],mode:"dropdown"}},label:this._t("editor.bars.settings.bar_style","Bar Style"),description:this._t("editor.bars.settings.bar_style_description","Visual style of the progress bar")},{name:`bars.${e}.width`,selector:{select:{options:[{value:"100",label:this._t("editor.bars.bar_widths.100")},{value:"75",label:this._t("editor.bars.bar_widths.75")},{value:"50",label:this._t("editor.bars.bar_widths.50")},{value:"25",label:this._t("editor.bars.bar_widths.25")}],mode:"dropdown"}},label:this._t("editor.bars.settings.width"),description:this._t("editor.bars.settings.width_description")},{name:`bars.${e}.alignment`,selector:{select:{options:[{value:"space-between",label:this._t("editor.bars.bar_alignments.space-between")},{value:"flex-start",label:this._t("editor.bars.bar_alignments.flex-start")},{value:"center",label:this._t("editor.bars.bar_alignments.center")},{value:"flex-end",label:this._t("editor.bars.bar_alignments.flex-end")}],mode:"dropdown"}},label:this._t("editor.bars.settings.alignment"),description:this._t("editor.bars.settings.alignment_description")}]}_getLeftSideSchema(e){return[{name:`bars.${e}.left_title`,selector:{text:{}},label:this._t("editor.bars.left_side.title"),description:this._t("editor.bars.left_side.title_description")},{name:`bars.${e}.left_entity`,selector:{entity:{}},label:this._t("editor.bars.left_side.entity"),description:this._t("editor.bars.left_side.entity_description")}]}_getRightSideSchema(e){return[{name:`bars.${e}.right_title`,selector:{text:{}},label:this._t("editor.bars.right_side.title"),description:this._t("editor.bars.right_side.title_description")},{name:`bars.${e}.right_entity`,selector:{entity:{}},label:this._t("editor.bars.right_side.entity"),description:this._t("editor.bars.right_side.entity_description")}]}_getLeftTitleSizeSchema(e){return[{name:`bars.${e}.left_title_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.left_side.title_size","Title Size")}]}_getLeftTextSizeSchema(e){return[{name:`bars.${e}.left_text_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.left_side.value_size","Value Size")}]}_getRightTitleSizeSchema(e){return[{name:`bars.${e}.right_title_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.right_side.title_size","Title Size")}]}_getRightTextSizeSchema(e){return[{name:`bars.${e}.right_text_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:this._t("editor.bars.right_side.value_size","Value Size")}]}_getGradientToggleSchema(e){var t,i;return[{name:`bars.${e}.use_gradient`,selector:{boolean:{}},label:this._t("editor.bars.gradient.toggle"),description:this._t("editor.bars.gradient.toggle_description")},...(null===(i=null===(t=this.config.bars)||void 0===t?void 0:t[e])||void 0===i?void 0:i.use_gradient)?[{name:`bars.${e}.gradient_display_mode`,selector:{select:{options:[{value:"full",label:this._t("editor.bars.gradient.display_mode_full")},{value:"value_based",label:this._t("editor.bars.gradient.display_mode_value_based")},{value:"cropped",label:this._t("editor.bars.gradient.display_mode_cropped")}],mode:"dropdown"}},label:this._t("editor.bars.gradient.display_mode"),description:this._t("editor.bars.gradient.display_mode_description")}]:[]]}_prepareBarData(e,t){var i,n,o,a;const r={};Object.entries(e).forEach((([e,i])=>{r[`bars.${t}.${e}`]=i})),r[`bars.${t}.use_gradient`]=null!==(i=e.use_gradient)&&void 0!==i&&i,r[`bars.${t}.show_left`]=null===(n=e.show_left)||void 0===n||n,r[`bars.${t}.show_right`]=null===(o=e.show_right)||void 0===o||o,r[`bars.${t}.show_percentage`]=null!==(a=e.show_percentage)&&void 0!==a&&a;const s=e;return r[`bars.${t}.percentage_type`]=s.percentage_type||"entity",r[`bars.${t}.percentage_amount_entity`]=s.percentage_amount_entity||"",r[`bars.${t}.percentage_total_entity`]=s.percentage_total_entity||"",r[`bars.${t}.percentage_attribute`]=s.percentage_attribute||"",r[`bars.${t}.percentage_template`]=s.percentage_template||"",r}_generateGradientPreview(e){if(!e||e.length<2)return"linear-gradient(to right, #ccc, #ccc)";const t=[...e].sort(((e,t)=>e.position-t.position));return`linear-gradient(to right, ${t.map((e=>`${e.color} ${e.position}%`)).join(", ")})`}_updateGradientStopsOrder(e,t){if(console.log(`[BarsTab] Received stops-rearranged event for bar ${e}. Input stops:`,JSON.stringify(t)),!this.config.bars||!this.config.bars[e])return;const i=[...t].sort(((e,t)=>e.position-t.position)),n=this.config.bars.map(((t,n)=>n===e?Object.assign(Object.assign({},t),{gradient_stops:i}):t));this.config=Object.assign(Object.assign({},this.config),{bars:n}),this._fireConfigChanged(this.config),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}),this.requestUpdate()}_updateBarCondition(e,t,i,n){var o;let a;a="entity"===n&&void 0!==(null===(o=e.detail)||void 0===o?void 0:o.value)?e.detail.value:e.target.value;const r=`${i}_condition`,s=JSON.parse(JSON.stringify(this.config));s.bars[t][r]||(s.bars[t][r]={type:"none",entity:"",state:""}),s.bars[t][r][n]=a,"type"===n&&"none"===a&&(s.bars[t][r].entity="",s.bars[t][r].state=""),this._fireConfigChanged(s),this.requestUpdate()}_renderLeftSideConditionFields(e,t){const i=e.left_condition||{type:"none",entity:"",state:""},n="none"!==i.type;return J`
      <div class="controls-group condition-controls">
        <div class="controls-header">${this._t("editor.customize.conditions.header")}</div>
        <p class="description controls-description">
          ${this._t("editor.bars.left_side.condition_description","Control when the left side is shown or hidden based on an entity state")}
        </p>
        <div class="controls-content">
          <div class="control-item condition-type-item">
            <ha-select
              label="${this._t("editor.customize.conditions.type_label")}"
              .value=${i.type}
              @selected=${e=>this._updateBarCondition(e,t,"left","type")}
              @closed=${e=>e.stopPropagation()}
              fixedMenuPosition
              naturalMenuWidth
              dense
            >
              ${jt.map((e=>J`
                  <mwc-list-item .value=${e.value}> ${this._t(e.key)} </mwc-list-item>
                `))}
            </ha-select>
          </div>
          ${n?J`
                <div class="control-item condition-entity-item">
                  <ha-entity-picker
                    .hass=${this.hass}
                    .value=${i.entity}
                    .label=${this._t("editor.customize.conditions.entity_label")}
                    @value-changed=${e=>this._updateBarCondition(e,t,"left","entity")}
                    allow-custom-entity
                    dense
                  ></ha-entity-picker>
                </div>
                <div class="control-item condition-state-item">
                  <ha-textfield
                    label="${this._t("editor.customize.conditions.state_label")}"
                    .value=${i.state}
                    @input=${e=>this._updateBarCondition(e,t,"left","state")}
                    dense
                  ></ha-textfield>
                </div>
              `:Y}
        </div>
      </div>

      <!-- Add template mode options here -->
      <div class="controls-group template-controls">
        <div class="controls-header">
          ${this._t("editor.bars.template.enable","Template Mode")}
        </div>
        <p class="controls-description">
          ${this._t("editor.bars.template.description","Use a template to format the displayed text, convert units, or display calculated values.")}
        </p>
        <div class="controls-content">
          <div class="control-item template-mode-item">
            <ha-switch
              .checked=${!0===e.left_template_mode}
              @change=${e=>{this._updateBarProperty(t,"left_template_mode",e.target.checked)}}
            ></ha-switch>
            <span class="switch-label">
              ${this._t("editor.bars.template.enable","Enable Template Mode")}
            </span>
          </div>

          ${e.left_template_mode?J`
                <div class="control-item template-item">
                  <ha-textarea
                    label="${this._t("editor.bars.template.template_label","Template")}"
                    .value=${e.left_template||""}
                    @input=${e=>this._updateBarProperty(t,"left_template",e.target.value)}
                    @mousedown=${e=>e.stopPropagation()}
                    @click=${e=>e.stopPropagation()}
                    @dragstart=${e=>e.stopPropagation()}
                    rows="3"
                    helper-persistent
                    .helperText=${this._t("editor.bars.template.helper_text","Use Home Assistant templating syntax. Examples:\n• {{ states('sensor.temperature') | float * 1.8 + 32 }} °F\n• {{ now().strftime(\"%b %d, %H:%M\") }}")}
                    class="template-textarea"
                  ></ha-textarea>
                </div>
                <div class="template-examples">
                  <div class="template-example-header">
                    ${this._t("editor.bars.template.examples_header","Common Examples:")}
                  </div>
                  <ul class="template-example-list">
                    <li>
                      <code>{{ states('sensor.temperature') | float * 1.8 + 32 }}°F</code> -
                      ${this._t("editor.bars.template.examples.temperature","Convert Celsius to Fahrenheit")}
                    </li>
                    <li>
                      <code>{{ now().strftime("%b %d, %H:%M") }}</code> -
                      ${this._t("editor.bars.template.examples.datetime","Format current date/time")}
                    </li>
                    <li>
                      <code>{{ 'Charging at ' + states('sensor.ev_power') + ' kW' }}</code> -
                      ${this._t("editor.bars.template.examples.power","Combine text and sensor value")}
                    </li>
                  </ul>
                </div>
              `:""}
        </div>
      </div>
    `}_renderRightSideConditionFields(e,t){const i=e.right_condition||{type:"none",entity:"",state:""},n="none"!==i.type;return J`
      <div class="controls-group condition-controls">
        <div class="controls-header">${this._t("editor.customize.conditions.header")}</div>
        <p class="description controls-description">
          ${this._t("editor.bars.right_side.condition_description","Control when the right side is shown or hidden based on an entity state")}
        </p>
        <div class="controls-content">
          <div class="control-item condition-type-item">
            <ha-select
              label="${this._t("editor.customize.conditions.type_label")}"
              .value=${i.type}
              @selected=${e=>this._updateBarCondition(e,t,"right","type")}
              @closed=${e=>e.stopPropagation()}
              fixedMenuPosition
              naturalMenuWidth
              dense
            >
              ${jt.map((e=>J`
                  <mwc-list-item .value=${e.value}> ${this._t(e.key)} </mwc-list-item>
                `))}
            </ha-select>
          </div>
          ${n?J`
                <div class="control-item condition-entity-item">
                  <ha-entity-picker
                    .hass=${this.hass}
                    .value=${i.entity}
                    .label=${this._t("editor.customize.conditions.entity_label")}
                    @value-changed=${e=>this._updateBarCondition(e,t,"right","entity")}
                    allow-custom-entity
                    dense
                  ></ha-entity-picker>
                </div>
                <div class="control-item condition-state-item">
                  <ha-textfield
                    label="${this._t("editor.customize.conditions.state_label")}"
                    .value=${i.state}
                    @input=${e=>this._updateBarCondition(e,t,"right","state")}
                    dense
                  ></ha-textfield>
                </div>
              `:Y}
        </div>
      </div>

      <!-- Add template mode options here -->
      <div class="controls-group template-controls">
        <div class="controls-header">
          ${this._t("editor.icons.template_mode.header","Template Mode")}
        </div>
        <p class="controls-description">
          ${this._t("editor.bars.template.description","Use a template to format the displayed text, convert units, or display calculated values.")}
        </p>
        <div class="controls-content">
          <div class="control-item template-mode-item">
            <ha-switch
              .checked=${!0===e.right_template_mode}
              @change=${e=>{this._updateBarProperty(t,"right_template_mode",e.target.checked)}}
            ></ha-switch>
            <span class="switch-label">
              ${this._t("editor.icons.template_mode.enable","Enable Template Mode")}
            </span>
          </div>

          ${e.right_template_mode?J`
                <div class="control-item template-item">
                  <ha-textarea
                    label="${this._t("editor.icons.template_mode.template","Template")}"
                    .value=${e.right_template||""}
                    @input=${e=>this._updateBarProperty(t,"right_template",e.target.value)}
                    @mousedown=${e=>e.stopPropagation()}
                    @click=${e=>e.stopPropagation()}
                    @dragstart=${e=>e.stopPropagation()}
                    rows="3"
                    helper-persistent
                    .helperText=${this._t("editor.icons.template_mode.template_helper","Use Home Assistant templating syntax. Examples:\n• {{ states('sensor.temperature') | float * 1.8 + 32 }} °F\n• {{ now().strftime(\"%b %d, %H:%M\") }}")}
                    class="template-textarea"
                  ></ha-textarea>
                </div>
                <div class="template-examples">
                  <div class="template-example-header">Common Examples:</div>
                  <ul class="template-example-list">
                    <li>
                      <code>{{ states('sensor.temperature') | float * 1.8 + 32 }}°F</code> - Convert
                      Celsius to Fahrenheit
                    </li>
                    <li>
                      <code>{{ now().strftime("%b %d, %H:%M") }}</code> - Format current date/time
                    </li>
                    <li>
                      <code>{{ 'Charging at ' + states('sensor.ev_power') + ' kW' }}</code> -
                      Combine text and sensor value
                    </li>
                  </ul>
                </div>
              `:""}
        </div>
      </div>
    `}};Vt.styles=c`
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

    .section-group.percentage-settings-group {
      border-left: 3px solid var(--info-color, #4fc3f7);
      margin-top: 24px;
      margin-bottom: 24px;
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

    .percentage-settings-container {
      padding: 16px;
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

    .percentage-options-container {
      padding: 8px 0;
      margin-bottom: 8px;
    }

    .percentage-options-header {
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 16px;
      color: var(--primary-text-color);
    }

    .percentage-difference-fields {
      margin-top: 16px;
      padding: 16px;
      background: rgba(var(--rgb-primary-color), 0.05);
      border-radius: 8px;
      border-left: 3px solid var(--primary-color);
    }

    .form-field-spacer {
      margin-bottom: 16px;
      position: relative;
    }

    /* Condition Controls Styles from customize-tab */
    .controls-group {
      padding: 16px;
      margin-bottom: 8px;
      background-color: rgba(var(--rgb-primary-color), 0.05);
      border-radius: 8px;
      border-left: 3px solid var(--primary-color);
    }

    .controls-header {
      font-weight: 500;
      font-size: 0.95em;
      margin-bottom: 8px;
      color: var(--primary-text-color);
    }

    .controls-description {
      font-size: 0.9em;
      color: var(--secondary-text-color);
      margin-bottom: 12px;
      line-height: 1.4;
    }

    .controls-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .control-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .control-item ha-select,
    .control-item ha-textfield,
    .control-item ha-entity-picker {
      width: 100%;
    }

    .condition-controls {
      border-top: none;
      margin-top: 16px;
    }

    .settings-subsection {
      background-color: rgba(var(--rgb-primary-color), 0.05);
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
      border-left: 3px solid var(--primary-color);
    }

    .percentage-type-subsection {
      border-left: 3px solid var(--info-color, #4fc3f7);
    }

    .subsection-inner-header {
      font-weight: 500;
      font-size: 0.95em;
      margin-bottom: 12px;
      color: var(--primary-text-color);
      padding-bottom: 8px;
      border-bottom: 1px solid rgba(var(--rgb-divider-color), 0.5);
    }

    .limit-helper-text {
      font-size: 0.85em;
      color: var(--secondary-text-color);
      padding: 4px 12px 0;
      margin-top: 8px; /* Increased from -4px to 8px */
      margin-bottom: 8px;
      opacity: 0.9;
    }

    .section-description {
      font-size: 14px;
      color: var(--secondary-text-color);
      margin-top: 0;
      margin-bottom: 12px;
      line-height: 1.4;
    }

    /* Template mode specific styles */
    .template-controls {
      border-left: 3px solid var(--accent-color, #4caf50);
      margin-top: 16px;
    }

    .template-mode-item {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }

    .switch-label {
      margin-left: 8px;
      font-size: 0.9em;
      color: var(--primary-text-color);
    }

    .template-item {
      width: 100%;
    }

    ha-textarea {
      width: 100%;
      font-family: 'Courier New', Courier, monospace;
      --mdc-typography-subtitle1-font-family: 'Courier New', Courier, monospace;
    }

    .template-examples {
      background-color: rgba(0, 0, 0, 0.05);
      border-radius: 8px;
      padding: 12px;
      margin-top: 8px;
      font-size: 0.9em;
    }

    .template-example-header {
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--primary-text-color);
    }

    .template-example-list {
      margin: 0;
      padding-left: 20px;
      color: var(--secondary-text-color);
      list-style-type: none; /* Remove bullet points */
      padding-left: 0; /* Remove left padding since we don't have bullets */
    }

    .template-example-list li {
      margin-bottom: 8px; /* Increased from 6px to 8px for more spacing */
      line-height: 1.4;
      /* Add a bit of left padding for better readability without bullets */
      padding-left: 0;
    }

    .template-example-list code {
      font-family: 'Courier New', Courier, monospace;
      background-color: rgba(0, 0, 0, 0.1);
      padding: 2px 4px;
      border-radius: 4px;
      color: var(--accent-color, #4caf50);
    }
  `,Tt([ve({attribute:!1})],Vt.prototype,"hass",void 0),Tt([ve({attribute:!1})],Vt.prototype,"config",void 0),Tt([be()],Vt.prototype,"_expandedBar",void 0),Tt([be()],Vt.prototype,"_preventExpandCollapse",void 0),Tt([be()],Vt.prototype,"_activeBarTabs",void 0),Tt([be()],Vt.prototype,"_gradientEditorKeys",void 0),Vt=Tt([ue("bars-tab")],Vt);var Dt=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};const Bt="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",Ot="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",Mt="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z",Pt=[{value:"100",key:"editor.icons.row_widths.100"},{value:"75",key:"editor.icons.row_widths.75"},{value:"50",key:"editor.icons.row_widths.50"},{value:"25",key:"editor.icons.row_widths.25"}],Ut=[{value:"flex-start",key:"editor.icons.alignments.flex-start"},{value:"center",key:"editor.icons.alignments.center"},{value:"flex-end",key:"editor.icons.alignments.flex-end"},{value:"space-between",key:"editor.icons.alignments.space-between"},{value:"space-around",key:"editor.icons.alignments.space-around"},{value:"space-evenly",key:"editor.icons.alignments.space-evenly"}],Nt=[{value:"none",key:"editor.icons.spacing.none"},{value:"small",key:"editor.icons.spacing.small"},{value:"medium",key:"editor.icons.spacing.medium"},{value:"large",key:"editor.icons.spacing.large"}],Ft=[{value:"toggle",key:"editor.icons.click_actions.toggle"},{value:"more-info",key:"editor.icons.click_actions.more-info"},{value:"navigate",key:"editor.icons.click_actions.navigate"},{value:"url",key:"editor.icons.click_actions.url"},{value:"call-service",key:"editor.icons.click_actions.call-service"},{value:"perform-action",key:"editor.icons.click_actions.perform-action"},{value:"location-map",key:"editor.icons.click_actions.location-map"},{value:"assist",key:"editor.icons.click_actions.assist"},{value:"trigger",key:"editor.icons.click_actions.trigger"},{value:"none",key:"editor.icons.click_actions.none"}],Ht=[{value:"bottom",key:"editor.icons.text_positions.below"},{value:"top",key:"editor.icons.text_positions.top"},{value:"left",key:"editor.icons.text_positions.left"},{value:"right",key:"editor.icons.text_positions.right"}],qt=[{value:"flex-start",key:"editor.icons.vertical_alignments.flex-start"},{value:"center",key:"editor.icons.alignments.center"},{value:"flex-end",key:"editor.icons.vertical_alignments.flex-end"}],Wt=[{value:"100",key:"editor.icons.container_widths.100"},{value:"75",key:"editor.icons.container_widths.75"},{value:"50",key:"editor.icons.container_widths.50"},{value:"25",key:"editor.icons.container_widths.25"}],Gt=[{value:"flex-start",key:"editor.icons.row_vertical_alignments.top"},{value:"center",key:"editor.icons.row_vertical_alignments.center"},{value:"flex-end",key:"editor.icons.row_vertical_alignments.bottom"}],Kt=[{value:"none",key:"editor.icons.animations.none"},{value:"pulse",key:"editor.icons.animations.pulse"},{value:"vibrate",key:"editor.icons.animations.vibrate"},{value:"rotate-left",key:"editor.icons.animations.rotate_left"},{value:"rotate-right",key:"editor.icons.animations.rotate_right"},{value:"hover",key:"editor.icons.animations.hover"},{value:"fade",key:"editor.icons.animations.fade"},{value:"scale",key:"editor.icons.animations.scale"},{value:"bounce",key:"editor.icons.animations.bounce"},{value:"shake",key:"editor.icons.animations.shake"},{value:"tada",key:"editor.icons.animations.tada"}];let Jt=class extends he{constructor(){super(...arguments),this._expandedIconRow=null,this._expandedIcon=null,this._activeIconTabs={},this._layoutHelpExpanded={},this._rowSettingsExpanded={},this._stateSettingsExpanded={}}_t(e,t){var i,n;return $t(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}_generateUniqueId(){return Math.random().toString(36).substring(2,9)}_getFriendlyName(e){var t,i;return e&&this.hass&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""}_truncateText(e,t=15){return e?e.length<=t?e:e.substring(0,t)+"...":""}_formatFieldName(e){return e?e.replace(/^./,(e=>e.toUpperCase())).replace(/_/g," "):""}_fireConfigChanged(e){Ze(this,"config-changed",{config:e})}_addIconRow(){const e=[...this.config.icon_rows||[]],t=this._createDefaultIconRow();e.push(t);let i=[...this.config.sections_order||[]];if(i.some((e=>e.startsWith("icon_row_")))){const e=`icon_row_${t.id}`,n=i.filter((e=>e.startsWith("icon_row_")));if(n.length>0){const t=i.lastIndexOf(n[n.length-1]);i.splice(t+1,0,e)}else{const t=i.indexOf("image"),n=i.indexOf("info"),o=i.indexOf("bars");-1!==t?i.splice(t+1,0,e):-1!==n?i.splice(n+1,0,e):-1!==o?i.splice(o,0,e):i.push(e)}}else if(!i.includes("icons")){const e=i.indexOf("image"),t=i.indexOf("info"),n=i.indexOf("bars");-1!==e?i.splice(e+1,0,"icons"):-1!==t?i.splice(t+1,0,"icons"):-1!==n?i.splice(n,0,"icons"):i.push("icons")}this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:e,sections_order:i})),this._expandedIconRow=t.id}_removeIconRow(e){const t=(this.config.icon_rows||[]).filter((t=>t.id!==e));let i=[...this.config.sections_order||[]];const n=`icon_row_${e}`;if(i=i.filter((e=>e!==n)),0===t.length&&i.includes("icons")){const e=i.indexOf("icons");-1!==e&&i.splice(e,1)}let o=Object.assign({},this.config.sections_columns||{});delete o[n],this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:t,sections_order:i,sections_columns:Object.keys(o).length>0?o:void 0})),this._expandedIconRow===e&&(this._expandedIconRow=null),this._expandedIcon&&this._expandedIcon.rowId===e&&(this._expandedIcon=null)}_duplicateIconRow(e){const t=this.config.icon_rows||[],i=t.findIndex((t=>t.id===e));if(-1===i)return;const n=t[i],o=JSON.parse(JSON.stringify(n));o.id=this._generateUniqueId();const a=[...t.slice(0,i+1),o,...t.slice(i+1)];let r=[...this.config.sections_order||[]];const s=`icon_row_${o.id}`,l=`icon_row_${e}`,d=r.indexOf(l);if(-1!==d)r.splice(d+1,0,s);else if(!r.includes("icons")){const e=r.indexOf("image"),t=r.indexOf("info"),i=r.indexOf("bars");-1!==e?r.splice(e+1,0,"icons"):-1!==t?r.splice(t+1,0,"icons"):-1!==i?r.splice(i,0,"icons"):r.push("icons")}const c=Object.assign(Object.assign({},this.config),{icon_rows:a,sections_order:r});this._fireConfigChanged(c),this._expandedIconRow=o.id}_duplicateIcon(e,t){if(!this.config||!this.config.icon_rows)return;const i=this.config.icon_rows.findIndex((t=>t.id===e));if(-1===i)return;const n=this.config.icon_rows[i];if(!n.icons||t<0||t>=n.icons.length)return;const o=n.icons[t],a=JSON.parse(JSON.stringify(o)),r=[...this.config.icon_rows],s=[...n.icons];s.splice(t+1,0,a),r[i]=Object.assign(Object.assign({},n),{icons:s}),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:r}))}_toggleIconRowExpand(e){this._expandedIconRow=this._expandedIconRow===e?null:e,this._expandedIcon&&this._expandedIcon.rowId===e&&null===this._expandedIconRow&&(this._expandedIcon=null)}_updateIconRowConfig(e,t){const i=(this.config.icon_rows||[]).map((i=>i.id===e?Object.assign(Object.assign({},i),t):i));this._fireConfigChanged(Object.assign(Object.assign({},this.config),{icon_rows:i}))}_addIcon(e){const t=JSON.parse(JSON.stringify(this.config));t.icon_rows||(t.icon_rows=[]);const i=t.icon_rows.findIndex((t=>t.id===e));if(i>=0){t.icon_rows[i].icons||(t.icon_rows[i].icons=[]);const n=this._createDefaultIcon();t.icon_rows[i].icons.push(n);const o=t.icon_rows[i].icons.length-1;this._fireConfigChanged(t),setTimeout((()=>{this._expandedIcon={rowId:e,iconIndex:o}}),50)}}_removeIcon(e,t){var i;const n=JSON.parse(JSON.stringify(this.config));if(!n.icon_rows)return;const o=n.icon_rows.findIndex((t=>t.id===e));-1===o||!n.icon_rows[o].icons||t<0||t>=n.icon_rows[o].icons.length||(n.icon_rows[o].icons.splice(t,1),this._fireConfigChanged(n),(null===(i=this._expandedIcon)||void 0===i?void 0:i.rowId)===e&&(this._expandedIcon.iconIndex===t?this._expandedIcon=null:this._expandedIcon.iconIndex>t&&(this._expandedIcon=Object.assign(Object.assign({},this._expandedIcon),{iconIndex:this._expandedIcon.iconIndex-1}))))}_toggleIconEdit(e,t){var i,n;if((null===(i=this._expandedIcon)||void 0===i?void 0:i.rowId)===e&&(null===(n=this._expandedIcon)||void 0===n?void 0:n.iconIndex)===t)this._expandedIcon=null;else{this._expandedIcon={rowId:e,iconIndex:t};const i=`${e}_${t}`;this._activeIconTabs=Object.assign(Object.assign({},this._activeIconTabs),{[i]:"general"}),this._stateSettingsExpanded=Object.assign(Object.assign({},this._stateSettingsExpanded),{[i]:["active","inactive"]})}}_updateIconConfig(e,t,i){var n,o,a;const r=JSON.parse(JSON.stringify(this.config));if(!r.icon_rows)return;const s=r.icon_rows.findIndex((t=>t.id===e));if(s>=0&&t>=0&&t<r.icon_rows[s].icons.length){const e=null===(a=null===(o=null===(n=this.config.icon_rows)||void 0===n?void 0:n[s])||void 0===o?void 0:o.icons)||void 0===a?void 0:a[t];if(!e)return;const l=Object.assign({},i);let d=!1;if(void 0!==i.entity&&i.entity!==e.entity&&(d=!0),d){const e=i.entity;if(e){const t=this._getEntityIcon(e);t&&(l.icon_inactive=t,l.icon_active=t)}else l.icon_inactive="mdi:help-circle-outline",l.icon_active="mdi:help-circle"}if(void 0!==l.service_data&&"string"==typeof l.service_data)try{l.service_data=JSON.parse(l.service_data||"{}")}catch(e){}if(void 0!==l.action&&"string"==typeof l.action)try{l.action=JSON.parse(l.action)}catch(e){}const c=Object.assign({},r.icon_rows[s].icons[t]);r.icon_rows[s].icons[t]=Object.assign(Object.assign({},e),l),this._fireConfigChanged(r),["color_active","color_inactive","name_color_active","name_color_inactive","state_color_active","state_color_inactive","icon_background_color","container_background_color"].some((e=>void 0!==l[e]&&c[e]!==l[e]))&&this.requestUpdate()}else console.warn("[IconsTab] Invalid row or icon index for update, or could not retrieve actual config.")}_createDefaultIconRow(){return{id:this._generateUniqueId(),width:"100",alignment:"center",vertical_alignment:"center",spacing:"none",columns:0,icons:[],confirmation_mode:!1}}_createDefaultIcon(){return{entity:"",icon_inactive:"mdi:help-circle-outline",icon_active:"mdi:help-circle",color_inactive:"var(--secondary-text-color)",color_active:"var(--primary-color)",name_color_inactive:"var(--primary-text-color)",name_color_active:"var(--primary-text-color)",state_color_inactive:"var(--secondary-text-color)",state_color_active:"var(--primary-text-color)",inactive_state:"off",active_state:"on",inactive_template_mode:!1,active_template_mode:!1,inactive_template:"",active_template:"",active_state_text:"",inactive_state_text:"",show_state:!0,show_name:!1,show_name_active:!1,show_name_inactive:!1,show_state_active:!0,show_state_inactive:!0,show_units:!0,show_icon_active:!0,show_icon_inactive:!0,use_entity_color_for_icon:!1,use_entity_color_for_icon_active:!1,use_entity_color_for_icon_inactive:!1,use_entity_color_for_icon_background:!1,use_entity_color_for_container_background:!1,name:"",on_click_action:"more-info",text_position:"bottom",vertical_alignment:"center",text_alignment:"center",icon_size:24,text_size:14,icon_background:"none",icon_background_color:"var(--secondary-background-color)",container_background:"none",container_background_color:"var(--secondary-background-color)",draggable:!0}}_resetIconColor(e,t,i){const n="active"===i?"var(--primary-color)":"var(--secondary-text-color)",o="active"===i?"color_active":"color_inactive";this._updateIconConfig(e,t,{[o]:n})}_resetIconNameColor(e,t,i){const n="active"===i?"name_color_active":"name_color_inactive";this._updateIconConfig(e,t,{[n]:"var(--primary-text-color)"})}_resetIconStateColor(e,t,i){const n="active"===i?"var(--primary-text-color)":"var(--secondary-text-color)",o="active"===i?"state_color_active":"state_color_inactive";this._updateIconConfig(e,t,{[o]:n})}_resetIconAppearanceColor(e,t,i){this._updateIconConfig(e,t,{[i]:"var(--secondary-background-color)"})}_resetIconSize(e,t,i){const n="icon_size"===i?24:14;this._updateIconConfig(e,t,{[i]:n})}_getEntityIcon(e){var t;if(!e||!(null===(t=this.hass)||void 0===t?void 0:t.states[e]))return;const i=this.hass.states[e];if(i.attributes.icon)return i.attributes.icon;const n=e.split(".")[0],o=i.attributes.device_class;switch(n){case"binary_sensor":switch(o){case"door":return"mdi:door";case"garage_door":return"mdi:garage";case"window":return"mdi:window-closed";case"motion":return"mdi:motion-sensor";case"gas":case"heat":return"mdi:fire";case"smoke":return"mdi:smoke";case"moisture":return"mdi:water";case"light":return"mdi:brightness-5";case"power":case"plug":return"mdi:power-plug";case"lock":return"mdi:lock";case"problem":return"mdi:alert-circle-outline";case"safety":return"mdi:shield-check-outline";case"battery_charging":return"mdi:battery-charging";case"carbon_monoxide":return"mdi:molecule-co";case"cold":return"mdi:snowflake";case"connectivity":return"mdi:check-network-outline";case"moving":return"mdi:arrow-right-bold-box-outline";case"occupancy":return"mdi:home-account";case"opening":return"mdi:square-outline";case"presence":return"mdi:home-outline";case"running":return"mdi:run";case"sound":return"mdi:volume-high";case"tamper":return"mdi:alert";case"update":return"mdi:package-up";case"vibration":return"mdi:vibrate";default:return"mdi:checkbox-marked-circle"}case"light":return"mdi:lightbulb";case"media_player":switch(o){case"tv":return"mdi:television";case"speaker":return"mdi:speaker";case"receiver":return"mdi:audio-video";default:return"mdi:cast"}case"update":return"mdi:package-up";case"sensor":switch(o){case"temperature":return"mdi:thermometer";case"humidity":return"mdi:water-percent";case"pressure":default:return"mdi:gauge";case"illuminance":return"mdi:brightness-5";case"power":case"apparent_power":case"reactive_power":case"power_factor":return"mdi:flash";case"energy":return"mdi:lightning-bolt";case"gas":return"mdi:meter-gas";case"water":return"mdi:water";case"battery":return"mdi:battery";case"signal_strength":return"mdi:signal";case"voltage":case"frequency":return"mdi:sine-wave";case"current":return"mdi:current-ac";case"carbon_dioxide":return"mdi:molecule-co2";case"carbon_monoxide":return"mdi:molecule-co";case"nitrogen_dioxide":case"ozone":case"volatile_organic_compounds":return"mdi:molecule";case"pm1":case"pm10":case"pm25":return"mdi:blur";case"aqi":return"mdi:air-filter";case"precipitation":return"mdi:weather-rainy";case"wind_speed":return"mdi:weather-windy";case"timestamp":return"mdi:clock-outline";case"date":return"mdi:calendar";case"duration":return"mdi:timer-sand"}case"switch":switch(o){case"outlet":return"mdi:power-socket-us";case"switch":return"mdi:toggle-switch-variant";default:return"mdi:toggle-switch-outline"}case"person":return"mdi:account";case"weather":return"mdi:weather-cloudy";case"tts":return"mdi:text-to-speech";case"camera":return"mdi:camera";case"climate":return"mdi:thermostat";case"cover":switch(o){case"garage":return"mdi:garage";case"gate":return"mdi:gate";case"door":return"mdi:door-closed";case"window":default:return"mdi:window-shutter";case"shutter":case"blind":return"mdi:blinds";case"curtain":return"mdi:curtains";case"damper":return"mdi:valve"}case"fan":return"mdi:fan";case"lock":return"mdi:lock";case"alarm_control_panel":return"mdi:shield-home";case"input_boolean":return"mdi:toggle-switch-outline";case"input_number":return"mdi:ray-vertex";case"input_select":return"mdi:format-list-bulleted";case"input_text":return"mdi:form-textbox";case"input_datetime":return"mdi:calendar-clock";case"automation":return"mdi:robot";case"script":return"mdi:script-text-outline";case"scene":return"mdi:palette";case"zone":return"mdi:map-marker-radius";case"sun":return"mdi:white-balance-sunny";case"device_tracker":return"mdi:radar";case"remote":return"mdi:remote";case"button":return"mdi:gesture-tap-button";case"number":return"mdi:ray-vertex";case"select":return"mdi:format-list-bulleted";case"text":return"mdi:form-textbox";case"vacuum":return"mdi:robot-vacuum";case"water_heater":return"mdi:water-boiler"}}render(){if(!this.hass||!this.config)return Y;const e=this.config.icon_rows||[],t=this.config.sections_order||[],i=new Map(e.map((e=>[e.id,e]))),n=t.map((e=>e.startsWith("icon_row_")?e.substring(9):null)).filter((e=>null!==e));let o;return o=n.length>0?n.map((e=>i.get(e))).filter((e=>void 0!==e)):(t.includes("icons"),e),J`
      <div class="tab-content">
        <div class="section-header">${this._t("editor.icons.title")}</div>
        <div class="description">${this._t("editor.icons.description")}</div>
        <div class="bar-list">
          ${o.map((t=>{const i=e.findIndex((e=>e.id===t.id));return J` <div key=${t.id}>${this._renderIconRow(t,i)}</div> `}))}
          <div class="add-bar-container">
            <ha-button class="add-bar-button" @click=${this._addIconRow}>
              <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
              ${this._t("editor.icons.add_row")}
            </ha-button>
          </div>
        </div>

        <div style="margin-top: 24px; text-align: center;">
          <ha-button
            raised
            .label=${this._t("editor.tabs.icons.arrange_icon_rows","Arrange Icon Rows")}
            @click=${this._navigateToCustomizeTab}
            .path=${"M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"}
          ></ha-button>
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
              .path=${Mt}
              @click=${t=>{t.stopPropagation(),this._removeIconRow(e.id)}}
            >
            </ha-icon-button>
            <ha-icon-button
              title="${i?this._t("editor.icons.collapse_row"):this._t("editor.icons.expand_row")}"
              @click=${t=>{t.stopPropagation(),this._toggleIconRowExpand(e.id)}}
              .path=${i?Ot:Bt}
            >
            </ha-icon-button>
          </div>
        </div>

        ${i?this._renderIconRowContent(e):""}
      </div>
    `}_renderIconRowContent(e){const t=[{name:"width",selector:{select:{options:Pt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.row_settings.width"),description:this._t("editor.icons.row_settings.width_description","Controls how much of the available width this row will use. Configure how this row of icons displays. Width controls the overall row width, spacing adjusts gaps between icons, and column count determines how many icons appear in each row (0 = automatic).")}];e.columns&&0!==e.columns||t.push({name:"alignment",selector:{select:{options:Ut.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.row_settings.alignment"),description:this._t("editor.icons.row_settings.alignment_description")}),t.push({name:"vertical_alignment",selector:{select:{options:Gt.map((e=>({value:e.value,label:this._t(e.key,"flex-start"===e.value?"Top":"center"===e.value?"Center":"Bottom")}))),mode:"dropdown"}},label:this._t("editor.icons.row_settings.vertical_alignment","Vertical Alignment"),description:this._t("editor.icons.row_settings.vertical_alignment_description","Controls how icons are aligned vertically within the row.")}),t.push({name:"spacing",selector:{select:{options:Nt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.row_settings.spacing"),description:this._t("editor.icons.row_settings.spacing_description")},{name:"columns",selector:{number:{min:0,max:10,mode:"slider",step:1}},label:this._t("editor.icons.row_settings.columns"),description:this._t("editor.icons.row_settings.columns_description")});const i=this._layoutHelpExpanded[e.id]||!1,n=this._rowSettingsExpanded[e.id]||!1;return J`
      <div class="bar-content">
        <div class="settings-section">
          <div class="section-header toggleable" @click=${()=>this._toggleRowSettings(e.id)}>
            ${this._t("editor.icons.row_settings.header")}
            <ha-icon
              class="toggle-icon"
              icon=${n?"mdi:chevron-up":"mdi:chevron-down"}
            ></ha-icon>
          </div>

          <div class="settings-content ${n?"expanded":"collapsed"}">
            <ha-form
              .hass=${this.hass}
              .data=${{width:e.width,alignment:e.alignment,vertical_alignment:e.vertical_alignment||"center",spacing:e.spacing,columns:e.columns||0}}
              .schema=${t}
              .computeLabel=${e=>this._t(e.label||e.name)}
              .computeDescription=${e=>this._t(e.description||"")}
              @value-changed=${t=>this._updateIconRowConfig(e.id,t.detail.value)}
            ></ha-form>

            <!-- Add collapsible layout settings explanation box -->
            <div class="feature-description-box layout-info">
              <div class="feature-title toggleable" @click=${()=>this._toggleLayoutHelp(e.id)}>
                <ha-icon icon="mdi:information-outline"></ha-icon>
                ${this._t("editor.icons.row_settings.layout_info_title","How Layout Settings Work")}
                <ha-icon
                  class="toggle-icon"
                  icon=${i?"mdi:chevron-up":"mdi:chevron-down"}
                ></ha-icon>
              </div>
              <div class="feature-description ${i?"expanded":"collapsed"}">
                <ul class="compact-list">
                  <li>
                    <strong>Row Width</strong>: Controls how much horizontal space the row takes up
                    on the card (percentage of card width)
                  </li>
                  <li>
                    <strong>Row Alignment</strong>: Only applies when Column Count is 0. Determines
                    how icons are positioned within the row
                  </li>
                  <li><strong>Icon Spacing</strong>: Sets the amount of space between icons</li>
                  <li>
                    <strong>Column Count</strong>: When set to 0, icons flow naturally based on
                    available space. When set to a number, forces that exact number of columns in a
                    grid layout
                  </li>
                </ul>
                <div class="tip">
                  <ha-icon icon="mdi:lightbulb-outline"></ha-icon> Use Column Count with consistent
                  icon counts per row for the most uniform layout
                </div>
              </div>
            </div>

            <!-- Add separator here -->
            <div class="settings-separator"></div>

            <!-- Separate form for confirmation mode -->
            <ha-form
              .hass=${this.hass}
              .data=${{confirmation_mode:e.confirmation_mode}}
              .schema=${[{name:"confirmation_mode",selector:{boolean:{}},label:this._t("editor.icons.row_settings.confirmation_mode"),description:this._t("editor.icons.row_settings.confirmation_mode_description","When enabled, users will be prompted to confirm actions when clicking on icons in this row. This is useful for protecting critical actions from accidental activation.")}]}
              .computeLabel=${e=>this._t(e.label||e.name)}
              .computeDescription=${e=>this._t(e.description||"")}
              @value-changed=${t=>this._updateIconRowConfig(e.id,t.detail.value)}
            ></ha-form>

            <!-- Added confirmation mode description box that's always visible -->
            <div class="feature-description-box">
              <div class="feature-title">
                <ha-icon icon="mdi:alert-circle-outline"></ha-icon>
                ${this._t("editor.icons.row_settings.confirmation_mode")}
              </div>
              <div class="feature-description">
                ${this._t("editor.icons.row_settings.confirmation_mode_description","When enabled, users will be prompted to confirm actions when clicking on icons in this row. This is useful for protecting critical actions from accidental activation.")}
              </div>
            </div>
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
    `}_renderIcon(e,t,i){var n,o;const a=(null===(n=this._expandedIcon)||void 0===n?void 0:n.rowId)===e&&(null===(o=this._expandedIcon)||void 0===o?void 0:o.iconIndex)===i,r=t.entity?this._getFriendlyName(t.entity):"",s=t.name||r||`${this._t("editor.icons.icon_prefix","Icon")} ${i+1}`,l=this._truncateText(s,15);let d=t.icon_inactive||"mdi:help-circle-outline",c=t.color_inactive||"var(--secondary-text-color)";const p=t.entity;if(p&&this.hass.states[p]){const e=this.hass.states[p],i=void 0!==t.active_state&&null!==t.active_state?String(t.active_state):"on";String(e.state)===i&&(d=t.icon_active||"mdi:help-circle",c=t.color_active||"var(--primary-color)")}const g=`${e}_${i}`,h=this._activeIconTabs[g]||"general";return J`
      <div class="mini-bar ${a?"expanded":""}">
        <div class="mini-bar-header" @click=${()=>this._toggleIconEdit(e,i)}>
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
              .path=${Mt}
              @click=${t=>{t.stopPropagation(),this._removeIcon(e,i)}}
            >
            </ha-icon-button>
            <ha-icon-button
              title=${a?this._t("editor.icons.collapse_icon"):this._t("editor.icons.expand_icon")}
              .path=${a?Ot:Bt}
              @click=${t=>{t.stopPropagation(),this._toggleIconEdit(e,i)}}
            >
            </ha-icon-button>
          </div>
        </div>

        ${a?this._renderIconContent(e,t,i,h):""}
      </div>
    `}_renderIconContent(e,t,i,n){const o=`${e}_${i}`;return J`
      <div class="mini-bar-content">
        <div class="icon-settings-tabs">
          <div
            class="icon-settings-tab ${"general"===n?"active":""}"
            @click=${e=>{e.stopPropagation(),this._activeIconTabs=Object.assign(Object.assign({},this._activeIconTabs),{[o]:"general"}),this.requestUpdate()}}
          >
            ${this._t("editor.icons.tabs.general")}
          </div>
          <div
            class="icon-settings-tab ${"appearance"===n?"active":""}"
            @click=${e=>{e.stopPropagation(),this._activeIconTabs=Object.assign(Object.assign({},this._activeIconTabs),{[o]:"appearance"}),this.requestUpdate()}}
          >
            ${this._t("editor.icons.tabs.appearance")}
          </div>
          <div
            class="icon-settings-tab ${"states"===n?"active":""}"
            @click=${e=>{e.stopPropagation(),this._activeIconTabs=Object.assign(Object.assign({},this._activeIconTabs),{[o]:"states"}),this.requestUpdate()}}
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
    `}_renderIconGeneralTab(e,t,i){const n=Object.assign({},t);if(n.action&&"object"==typeof n.action)try{n.action=JSON.stringify(n.action,null,2)}catch(e){n.action="{}"}else void 0!==n.action&&null!==n.action||(n.action="");if(n.service_data&&"object"==typeof n.service_data)try{n.service_data=JSON.stringify(n.service_data,null,2)}catch(e){n.service_data="{}"}else void 0!==n.service_data&&null!==n.service_data||(n.service_data="");return J`
      <div class="icon-settings-section">
        <ha-form
          .hass=${this.hass}
          .data=${n} // Use the potentially modified formData
          .schema=${this._getIconGeneralSchema(t)}
          .computeLabel=${e=>this._t(e.label||e.name)}
          .computeDescription=${e=>this._t(e.description||"")}
          @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
        ></ha-form>
        ${"perform-action"===t.on_click_action?J`<div class="click-action-description">
                ${this._getClickActionDescription(t.on_click_action)}
              </div>`:""}
      </div>
    `}_getIconGeneralSchema(e){return[{name:"entity",selector:{entity:{}},label:this._t("editor.common.entity"),description:this._t("editor.icons.icon_settings.entity_description")},{name:"name",selector:{text:{}},label:this._t("editor.icons.icon_settings.name"),description:this._t("editor.icons.icon_settings.name_description")},{name:"on_click_action",selector:{select:{options:Ft.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_settings.click_action"),description:this._t("editor.icons.icon_appearance.action_description")},..."call-service"===e.on_click_action?[{name:"service",selector:{text:{}},label:this._t("editor.icons.icon_settings.service"),description:this._t("editor.icons.icon_settings.service_description")},{name:"service_data",selector:{text:{multiline:!0}},label:this._t("editor.icons.icon_settings.service_data"),description:this._t("editor.icons.icon_settings.service_data_description")}]:[],..."perform-action"===e.on_click_action?[{name:"action",selector:{text:{multiline:!0}},label:this._t("editor.icons.icon_settings.action"),description:this._t("editor.icons.icon_settings.action_description")}]:[],..."navigate"===e.on_click_action?[{name:"navigation_path",selector:{text:{}},label:this._t("editor.icons.icon_settings.navigation_path"),description:this._t("editor.icons.icon_settings.navigation_path_description")}]:[],..."url"===e.on_click_action?[{name:"url",selector:{text:{}},label:this._t("editor.icons.icon_settings.url"),description:this._t("editor.icons.icon_settings.url_description")}]:[]]}_getClickActionDescription(e){switch(e){case"toggle":return J`<p>${this._t("editor.icons.click_actions.descriptions.toggle")}</p>`;case"more-info":return J`<p>${this._t("editor.icons.click_actions.descriptions.more-info")}</p>`;case"navigate":return J`<p>${this._t("editor.icons.click_actions.descriptions.navigate")}</p>`;case"url":return J`<p>${this._t("editor.icons.click_actions.descriptions.url")}</p>`;case"call-service":return J`<p>${this._t("editor.icons.click_actions.descriptions.call-service")}</p>`;case"perform-action":return J`<p>${this._t("editor.icons.click_actions.descriptions.perform-action")}</p>`;case"location-map":return J`<p>${this._t("editor.icons.click_actions.descriptions.location-map")}</p>`;case"assist":return J`<p>${this._t("editor.icons.click_actions.descriptions.assist")}</p>`;case"none":return J`<p>${this._t("editor.icons.click_actions.descriptions.none")}</p>`;case"trigger":return J`<p>${this._t("editor.icons.click_actions.descriptions.trigger")}</p>`;default:return""}}_renderIconAppearanceTab(e,t,i){return J`
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
            ${t.icon_background&&"none"!==t.icon_background?J`
                  <ha-form
                    .hass=${this.hass}
                    .data=${t}
                    .schema=${[{name:"use_entity_color_for_icon_background",selector:{boolean:{}},label:this._t("editor.icons.icon_appearance.use_entity_color_for_icon_background"),description:this._t("editor.icons.icon_appearance.use_entity_color_for_icon_background_description")}]}
                    .computeLabel=${e=>this._t(e.label||e.name)}
                    .computeDescription=${e=>this._t(e.description||"")}
                    @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
                  ></ha-form>
                  ${this._renderColorPicker(e,i,"icon_background_color",this._t("editor.icons.icon_appearance.icon_background_color"),"var(--secondary-background-color)")}
                `:""}
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
            ${t.container_background&&"none"!==t.container_background?J`
                  <ha-form
                    .hass=${this.hass}
                    .data=${t}
                    .schema=${[{name:"use_entity_color_for_container_background",selector:{boolean:{}},label:this._t("editor.icons.icon_appearance.use_entity_color_for_container_background"),description:this._t("editor.icons.icon_appearance.use_entity_color_for_container_background_description")}]}
                    .computeLabel=${e=>this._t(e.label||e.name)}
                    .computeDescription=${e=>this._t(e.description||"")}
                    @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
                  ></ha-form>
                  ${this._renderColorPicker(e,i,"container_background_color",this._t("editor.icons.icon_appearance.container_background_color"),"var(--secondary-background-color)")}
                `:""}
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
    `}_getIconAppearanceGeneralSchema(e){return[{name:"show_units",selector:{boolean:{}},label:this._t("editor.icons.icon_settings.show_units"),description:this._t("editor.icons.icon_settings.show_units_description")},...e.show_name_active||e.show_name_inactive||e.show_state_active||e.show_state_inactive?[{name:"text_position",selector:{select:{options:Ht.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_settings.text_position"),description:this._t("editor.icons.icon_settings.text_position_description")}]:[]]}_getIconAppearanceIconSchema(){return[{name:"icon_size",selector:{number:{mode:"slider",min:10,max:60,step:2}},label:this._t("editor.icons.icon_appearance.icon_size"),description:this._t("editor.icons.icon_appearance.icon_size_description")},{name:"icon_background",selector:{select:{options:[{value:"none",label:this._t("editor.common.none")},{value:"circle",label:this._t("editor.icons.backgrounds.circle")},{value:"square",label:this._t("editor.icons.backgrounds.square")},{value:"rounded-square",label:this._t("editor.icons.backgrounds.rounded_square")}],mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.icon_background"),description:this._t("editor.icons.icon_appearance.icon_background_description")}]}_getIconAppearanceContainerSchema(){return[{name:"vertical_alignment",selector:{select:{options:qt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.container.vertical_alignment"),description:this._t("editor.icons.icon_appearance.container.vertical_alignment_description")},{name:"container_width",selector:{select:{options:Wt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.container.width"),description:this._t("editor.icons.icon_appearance.container.width_description")},{name:"container_background",selector:{select:{options:[{value:"none",label:this._t("editor.common.none")},{value:"circle",label:this._t("editor.icons.backgrounds.circle")},{value:"square",label:this._t("editor.icons.backgrounds.square")},{value:"rounded-square",label:this._t("editor.icons.backgrounds.rounded_square")}],mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.container.background"),description:this._t("editor.icons.icon_appearance.container.background_description")}]}_getIconAppearanceTextSizeSchema(){return[{name:"text_size",selector:{number:{mode:"box",unit:"px"}},label:this._t("editor.icons.icon_appearance.text_size"),description:this._t("editor.icons.icon_appearance.text_size_description")}]}_getIconAppearanceTextAlignmentSchema(){return[{name:"text_alignment",selector:{select:{options:[{value:"left",key:"editor.icons.alignments.flex-start"},{value:"center",key:"editor.icons.alignments.center"},{value:"right",key:"editor.icons.alignments.flex-end"}].map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.icons.icon_appearance.text_alignment"),description:this._t("editor.icons.icon_appearance.text_alignment_description")}]}_renderIconStatesTab(e,t,i){const n=`${e}_${i}`;this._stateSettingsExpanded[n]||(this._stateSettingsExpanded=Object.assign(Object.assign({},this._stateSettingsExpanded),{[n]:["active","inactive"]}));const o=this._stateSettingsExpanded[n]||[],a=o.includes("active"),r=o.includes("inactive");return J`
      <div class="icon-settings-section">
        <!-- Active State -->
        <div class="state-settings-group">
          <div
            class="subsection-header toggleable"
            @click=${()=>this._toggleStateSettings(e,i,"active")}
          >
            <span>${this._t("editor.icons.tabs.active_state")}</span>
            <ha-icon
              class="toggle-icon"
              icon=${a?"mdi:chevron-up":"mdi:chevron-down"}
            ></ha-icon>
          </div>
          <div
            class="state-settings-content-wrapper ${a?"expanded":"collapsed"}"
          >
            <!-- Basic Active State Settings -->
            <ha-form
              .hass=${this.hass}
              .data=${t}
              .schema=${[{name:"active_state",selector:{text:{}},label:this._t("editor.icons.icon_appearance.active_state"),description:this._t("editor.icons.icon_appearance.active_state_description")},{name:"icon_active",selector:{icon:{}},label:this._t("editor.icons.icon_appearance.active_icon")},{name:"active_state_text",selector:{text:{}},label:this._t("editor.icons.icon_appearance.active_state_text"),description:this._t("editor.icons.icon_appearance.active_state_text_description")},{name:"show_name_active",selector:{boolean:{}},label:this._t("editor.icons.icon_appearance.show_name_active"),description:this._t("editor.icons.icon_appearance.show_name_active_description")},{name:"show_state_active",selector:{boolean:{}},label:this._t("editor.icons.icon_appearance.show_state_active"),description:this._t("editor.icons.icon_appearance.show_state_active_description")},{name:"show_icon_active",selector:{boolean:{}},label:this._t("editor.icons.icon_appearance.show_icon_active"),description:this._t("editor.icons.icon_appearance.show_icon_active_description")}]}
              .computeLabel=${e=>e.label?this._t(e.label):e.name}
              @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
            ></ha-form>

            <!-- Animation settings for active state -->
            <div class="template-mode-container" style="margin-top: 16px;">
              <div class="template-mode-header">
                <div class="template-mode-label" style="font-size: 1.2em; font-weight: 500;">
                  ${this._t("editor.icons.animations.title","Icon Animation")}
                </div>
                <p style="font-size: 0.9em; margin-top: 8px; color: var(--secondary-text-color);">
                  ${this._t("editor.icons.animations.active_description","Select an animation to apply when this icon is in the active state.")}
                </p>
                <div
                  class="template-mode-toggle"
                  style="margin-top: 8px; display: flex; align-items: center;"
                >
                  <ha-form
                    .hass=${this.hass}
                    .data=${t}
                    .schema=${[{name:"active_animation",selector:{select:{options:Kt.map((e=>({value:e.value,label:this._t(e.key,e.value.replace("-"," ").replace(/\b\w/g,(e=>e.toUpperCase())))}))),mode:"dropdown"}},label:this._t("editor.icons.animations.select_animation","Select Animation")}]}
                    .computeLabel=${e=>this._t(e.label||e.name)}
                    @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
                  ></ha-form>
                </div>
              </div>
            </div>

            <!-- Template Mode Section -->
            <div class="template-mode-container" style="margin-top: 16px;">
              <div class="template-mode-header">
                <div class="template-mode-label" style="font-size: 1.2em; font-weight: 500;">
                  ${this._t("editor.icons.template_mode","Template Mode")}
                </div>
                <p style="font-size: 0.9em; margin-top: 8px; color: var(--secondary-text-color);">
                  ${this._t("editor.icons.template_mode_active_description","Use a template to determine when this icon should be active. Templates allow you to use Home Assistant templating syntax for complex conditions.")}
                </p>
                <div
                  class="template-mode-toggle"
                  style="margin-top: 8px; display: flex; align-items: center;"
                >
                  <ha-switch
                    .checked=${Boolean(t.active_template_mode)}
                    @change=${t=>{t.stopPropagation(),this._updateIconConfig(e,i,{active_template_mode:t.target.checked})}}
                  ></ha-switch>
                  <span style="margin-left: 8px; font-size: 0.9em;"
                    >${this._t("editor.icons.enable_template_mode","Enable Template Mode")}</span
                  >
                </div>
              </div>

              ${t.active_template_mode?J`
                    <div style="margin-top: 16px; padding: 0 16px;">
                      <ha-textarea
                        label="Template"
                        .value=${t.active_template||""}
                        @input=${t=>this._updateIconConfig(e,i,{active_template:t.target.value})}
                        @mousedown=${e=>e.stopPropagation()}
                        @click=${e=>e.stopPropagation()}
                        @dragstart=${e=>e.stopPropagation()}
                        rows="3"
                        style="width: 100%; font-family: 'Courier New', Courier, monospace;"
                      ></ha-textarea>

                      <div style="margin-top: 16px; padding: 0 16px;">
                        <div style="font-weight: 500; margin-bottom: 12px;">
                          ${this._t("editor.icons.template_examples_header","Common Examples:")}
                        </div>
                        <div
                          style="display: flex; flex-direction: column; gap: 16px; padding-bottom: 16px;"
                        >
                          <div>
                            <div
                              style="font-family: 'Courier New', Courier, monospace; background-color: rgba(0, 0, 0, 0.1); padding: 6px 8px; border-radius: 4px; color: var(--info-color, #03A9F4); margin-bottom: 4px;"
                            >
                              {{ states('sensor.temperature') | float > 70 }}
                            </div>
                            <div style="color: var(--secondary-text-color); padding-left: 4px;">
                              Temperature above 70
                            </div>
                          </div>
                          <div>
                            <div
                              style="font-family: 'Courier New', Courier, monospace; background-color: rgba(0, 0, 0, 0.1); padding: 6px 8px; border-radius: 4px; color: var(--info-color, #03A9F4); margin-bottom: 4px;"
                            >
                              {{ is_state('binary_sensor.motion', 'on') }}
                            </div>
                            <div style="color: var(--secondary-text-color); padding-left: 4px;">
                              Motion sensor is on
                            </div>
                          </div>
                          <div>
                            <div
                              style="font-family: 'Courier New', Courier, monospace; background-color: rgba(0, 0, 0, 0.1); padding: 6px 8px; border-radius: 4px; color: var(--info-color, #03A9F4); margin-bottom: 4px;"
                            >
                              {{ states('sensor.battery') | float < 20 }}
                            </div>
                            <div style="color: var(--secondary-text-color); padding-left: 4px;">
                              Battery below 20%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  `:""}
            </div>

            <!-- Entity Color Toggle -->
            <ha-form
              .hass=${this.hass}
              .data=${t}
              .schema=${[{name:"use_entity_color_for_icon_active",selector:{boolean:{}},label:this._t("editor.icons.icon_appearance.use_entity_color_for_icon"),description:this._t("editor.icons.icon_appearance.use_entity_color_for_icon_description")}]}
              .computeLabel=${e=>this._t(e.label||e.name)}
              .computeDescription=${e=>this._t(e.description||"")}
              @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
            ></ha-form>

            <!-- Colors Section -->
            <div class="color-pickers-grid state-colors">
              ${this._renderColorPicker(e,i,"color_active",this._t("editor.icons.icon_appearance.active_icon_color"),"var(--primary-color)")}
              ${!1!==t.show_name_active?this._renderColorPicker(e,i,"name_color_active",this._t("editor.icons.icon_appearance.active_name_color"),"var(--primary-text-color)"):""}
              ${!1!==t.show_state_active?this._renderColorPicker(e,i,"state_color_active",this._t("editor.icons.icon_appearance.active_state_color"),"var(--primary-text-color)"):""}
            </div>
          </div>
        </div>

        <!-- Inactive State -->
        <div class="state-settings-group">
          <div
            class="subsection-header toggleable"
            @click=${()=>this._toggleStateSettings(e,i,"inactive")}
          >
            <span>${this._t("editor.icons.tabs.inactive_state")}</span>
            <ha-icon
              class="toggle-icon"
              icon=${r?"mdi:chevron-up":"mdi:chevron-down"}
            ></ha-icon>
          </div>
          <div
            class="state-settings-content-wrapper ${r?"expanded":"collapsed"}"
          >
            <!-- Basic Inactive State Settings -->
            <ha-form
              .hass=${this.hass}
              .data=${t}
              .schema=${[{name:"inactive_state",selector:{text:{}},label:this._t("editor.icons.icon_appearance.inactive_state"),description:this._t("editor.icons.icon_appearance.inactive_state_description")},{name:"icon_inactive",selector:{icon:{}},label:this._t("editor.icons.icon_appearance.inactive_icon")},{name:"inactive_state_text",selector:{text:{}},label:this._t("editor.icons.icon_appearance.inactive_state_text"),description:this._t("editor.icons.icon_appearance.inactive_state_text_description")},{name:"show_name_inactive",selector:{boolean:{}},label:this._t("editor.icons.icon_appearance.show_name_inactive"),description:this._t("editor.icons.icon_appearance.show_name_inactive_description")},{name:"show_state_inactive",selector:{boolean:{}},label:this._t("editor.icons.icon_appearance.show_state_inactive"),description:this._t("editor.icons.icon_appearance.show_state_inactive_description")},{name:"show_icon_inactive",selector:{boolean:{}},label:this._t("editor.icons.icon_appearance.show_icon_inactive"),description:this._t("editor.icons.icon_appearance.show_icon_inactive_description")}]}
              .computeLabel=${e=>e.label?this._t(e.label):e.name}
              @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
            ></ha-form>

            <!-- Animation settings for inactive state -->
            <div class="template-mode-container" style="margin-top: 16px;">
              <div class="template-mode-header">
                <div class="template-mode-label" style="font-size: 1.2em; font-weight: 500;">
                  ${this._t("editor.icons.animations.title","Icon Animation")}
                </div>
                <p style="font-size: 0.9em; margin-top: 8px; color: var(--secondary-text-color);">
                  ${this._t("editor.icons.animations.inactive_description","Select an animation to apply when this icon is in the inactive state.")}
                </p>
                <div
                  class="template-mode-toggle"
                  style="margin-top: 8px; display: flex; align-items: center;"
                >
                  <ha-form
                    .hass=${this.hass}
                    .data=${t}
                    .schema=${[{name:"inactive_animation",selector:{select:{options:Kt.map((e=>({value:e.value,label:this._t(e.key,e.value.replace("-"," ").replace(/\b\w/g,(e=>e.toUpperCase())))}))),mode:"dropdown"}},label:this._t("editor.icons.animations.select_animation","Select Animation")}]}
                    .computeLabel=${e=>this._t(e.label||e.name)}
                    @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
                  ></ha-form>
                </div>
              </div>
            </div>

            <!-- Template Mode Section (Inactive) -->
            <div class="template-mode-container" style="margin-top: 16px;">
              <div class="template-mode-header">
                <div class="template-mode-label" style="font-size: 1.2em; font-weight: 500;">
                  ${this._t("editor.icons.template_mode","Template Mode")}
                </div>
                <p style="font-size: 0.9em; margin-top: 8px; color: var(--secondary-text-color);">
                  ${this._t("editor.icons.template_mode_inactive_description","Use a template to determine when this icon should be inactive. Templates allow you to use Home Assistant templating syntax for complex conditions.")}
                </p>
                <div
                  class="template-mode-toggle"
                  style="margin-top: 8px; display: flex; align-items: center;"
                >
                  <ha-switch
                    .checked=${Boolean(t.inactive_template_mode)}
                    @change=${t=>{t.stopPropagation(),this._updateIconConfig(e,i,{inactive_template_mode:t.target.checked})}}
                  ></ha-switch>
                  <span style="margin-left: 8px; font-size: 0.9em;"
                    >${this._t("editor.icons.enable_template_mode","Enable Template Mode")}</span
                  >
                </div>
              </div>

              ${t.inactive_template_mode?J`
                    <div style="margin-top: 16px; padding: 0 16px;">
                      <ha-textarea
                        label="Template"
                        .value=${t.inactive_template||""}
                        @input=${t=>this._updateIconConfig(e,i,{inactive_template:t.target.value})}
                        @mousedown=${e=>e.stopPropagation()}
                        @click=${e=>e.stopPropagation()}
                        @dragstart=${e=>e.stopPropagation()}
                        rows="3"
                        style="width: 100%; font-family: 'Courier New', Courier, monospace;"
                      ></ha-textarea>

                      <div style="margin-top: 16px; padding: 0 16px;">
                        <div style="font-weight: 500; margin-bottom: 12px;">Common Examples:</div>
                        <div
                          style="display: flex; flex-direction: column; gap: 16px; padding-bottom: 16px;"
                        >
                          <div>
                            <div
                              style="font-family: 'Courier New', Courier, monospace; background-color: rgba(0, 0, 0, 0.1); padding: 6px 8px; border-radius: 4px; color: var(--info-color, #03A9F4); margin-bottom: 4px;"
                            >
                              {{ states('sensor.temperature') | float < 40 }}
                            </div>
                            <div style="color: var(--secondary-text-color); padding-left: 4px;">
                              Temperature below 40
                            </div>
                          </div>
                          <div>
                            <div
                              style="font-family: 'Courier New', Courier, monospace; background-color: rgba(0, 0, 0, 0.1); padding: 6px 8px; border-radius: 4px; color: var(--info-color, #03A9F4); margin-bottom: 4px;"
                            >
                              {{ is_state('binary_sensor.door', 'off') }}
                            </div>
                            <div style="color: var(--secondary-text-color); padding-left: 4px;">
                              Door is closed
                            </div>
                          </div>
                          <div>
                            <div
                              style="font-family: 'Courier New', Courier, monospace; background-color: rgba(0, 0, 0, 0.1); padding: 6px 8px; border-radius: 4px; color: var(--info-color, #03A9F4); margin-bottom: 4px;"
                            >
                              {{ states('sensor.battery') | float > 80 }}
                            </div>
                            <div style="color: var(--secondary-text-color); padding-left: 4px;">
                              Battery above 80%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  `:""}
            </div>

            <!-- Entity Color Toggle for Inactive -->
            <ha-form
              .hass=${this.hass}
              .data=${t}
              .schema=${[{name:"use_entity_color_for_icon_inactive",selector:{boolean:{}},label:this._t("editor.icons.icon_appearance.use_entity_color_for_icon"),description:this._t("editor.icons.icon_appearance.use_entity_color_for_icon_description")}]}
              .computeLabel=${e=>this._t(e.label||e.name)}
              .computeDescription=${e=>this._t(e.description||"")}
              @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
            ></ha-form>

            <!-- Colors Section for Inactive -->
            <div class="color-pickers-grid state-colors">
              ${this._renderColorPicker(e,i,"color_inactive",this._t("editor.icons.icon_appearance.inactive_icon_color"),"var(--secondary-text-color)")}
              ${!1!==t.show_name_inactive?this._renderColorPicker(e,i,"name_color_inactive",this._t("editor.icons.icon_appearance.inactive_name_color"),"var(--primary-text-color)"):""}
              ${!1!==t.show_state_inactive?this._renderColorPicker(e,i,"state_color_inactive",this._t("editor.icons.icon_appearance.inactive_state_color"),"var(--secondary-text-color)"):""}
            </div>
          </div>
        </div>
      </div>
    `}_renderColorPicker(e,t,i,n,o){var a,r;const s=null===(r=null===(a=this.config.icon_rows)||void 0===a?void 0:a.find((t=>t.id===e)))||void 0===r?void 0:r.icons[t];return J`
      <div class="color-picker-container">
        <label class="color-picker-label">${n}</label>
        <div class="picker-button-row">
          <color-picker
            .value=${(null==s?void 0:s[i])||o}
            .configValue=${i}
            .showResetButton=${!1}
            @value-changed=${n=>{n.stopPropagation();const o=n.detail.value;let a;a=o&&"object"==typeof o&&void 0!==o[i]?String(o[i]):"string"==typeof o?o:String(o),this._updateIconConfig(e,t,{[i]:a})}}
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
    `}_toggleLayoutHelp(e){this._layoutHelpExpanded=Object.assign(Object.assign({},this._layoutHelpExpanded),{[e]:!this._layoutHelpExpanded[e]}),this.requestUpdate()}_toggleRowSettings(e){this._rowSettingsExpanded=Object.assign(Object.assign({},this._rowSettingsExpanded),{[e]:!this._rowSettingsExpanded[e]}),this.requestUpdate()}_toggleStateSettings(e,t,i){const n=`${e}_${t}`,o=this._stateSettingsExpanded[n]||[],a=o.includes(i)?o.filter((e=>e!==i)):[...o,i];this._stateSettingsExpanded=Object.assign(Object.assign({},this._stateSettingsExpanded),{[n]:a}),this.requestUpdate()}_navigateToCustomizeTab(){const e=new CustomEvent("request-tab-change",{detail:{tab:"customize"},bubbles:!0,composed:!0});this.dispatchEvent(e)}};Jt.styles=c`
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

    .feature-description-box {
      background-color: var(--secondary-background-color);
      border-left: 4px solid var(--info-color, var(--primary-color));
      padding: 12px 16px;
      margin: 12px 0;
      border-radius: 4px;
      font-size: 14px;
    }

    .feature-description-box.template-info {
      margin-top: 0;
      margin-bottom: 16px;
      background-color: rgba(var(--rgb-primary-color), 0.08);
    }

    .feature-description-box.template-info-global {
      margin-top: 0;
      margin-bottom: 16px;
      background-color: rgba(var(--rgb-primary-color), 0.08);
      border-left-color: var(--info-color, #03a9f4);
    }

    .feature-title {
      display: flex;
      align-items: center;
      font-weight: 500;
      margin-bottom: 4px;
      color: var(--primary-text-color);
    }

    .feature-title ha-icon {
      margin-right: 8px;
      color: var(--info-color, var(--primary-color));
    }

    .feature-description {
      color: var(--primary-text-color);
      opacity: 0.9;
      line-height: 1.5;
    }

    /* Template Mode Container Styles */
    .template-mode-container {
      margin: 16px 0;
      border: 1px solid var(--divider-color);
      border-radius: 4px;
      overflow: hidden;
      background-color: var(--card-background-color, #1c1c1c);
    }

    .template-mode-header {
      padding: 12px 16px;
      border-bottom: 1px solid var(--divider-color);
      background-color: rgba(var(--rgb-primary-color), 0.08);
    }

    .template-mode-toggle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;
    }

    .template-mode-label {
      font-weight: 500;
      display: flex;
      align-items: center;
    }

    .template-mode-label ha-icon {
      margin-right: 8px;
      color: var(--primary-color);
    }

    .template-mode-description {
      font-size: 14px;
      color: var(--primary-text-color);
      opacity: 0.9;
      line-height: 1.4;
    }

    .template-mode-fields {
      padding: 16px;
      background-color: var(--primary-background-color);
    }

    .template-mode-fields.template-mode-disabled {
      border-top: 1px solid var(--divider-color);
    }

    .settings-separator {
      height: 1px;
      background-color: var(--divider-color);
      margin: 16px 0;
      opacity: 0.7;
    }

    .feature-description-box.layout-info {
      background-color: rgba(var(--rgb-info-color, 3, 169, 244), 0.08);
      border-left-color: var(--info-color, #03a9f4);
    }

    .feature-description ul.compact-list {
      margin: 4px 0 8px 16px;
      padding: 0;
    }

    .feature-description ul.compact-list li {
      margin-bottom: 6px;
    }

    .feature-description .tip {
      display: flex;
      align-items: center;
      font-style: italic;
      margin-top: 4px;
      color: var(--primary-text-color);
      opacity: 0.9;
    }

    .feature-description .tip ha-icon {
      margin-right: 4px;
      color: var(--warning-color, #ffa726);
      --mdc-icon-size: 16px;
    }

    .feature-title.toggleable {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      width: 100%;
      user-select: none;
    }

    .feature-title .toggle-icon {
      margin-left: auto;
    }

    .feature-description.collapsed {
      display: none;
    }

    .feature-description.expanded {
      display: block;
      animation: slideDown 0.2s ease-out;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .section-header.toggleable {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }

    .section-header .toggle-icon {
      color: var(--text-primary-color);
      transition: transform 0.2s ease;
    }

    .settings-content.collapsed {
      display: none;
    }

    .settings-content.expanded {
      display: flex;
      flex-direction: column;
      gap: 16px;
      animation: slideDown 0.2s ease-out;
    }

    /* Add styles for collapsed/expanded state settings content */
    .state-settings-content-wrapper.collapsed {
      display: none;
    }

    .state-settings-content-wrapper.expanded {
      display: block;
      animation: slideDown 0.2s ease-out;
    }

    /* Make the toggle icon in subsection-header consistent with other toggle icons */
    .subsection-header.toggleable {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }

    .subsection-header .toggle-icon {
      color: var(--primary-text-color);
      transition: transform 0.2s ease;
    }

    .bar.dragging {
      opacity: 0.5;
      transform: scale(0.98);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      border: 1px dashed var(--primary-color);
      z-index: 10;
      background-color: var(--card-background-color, #fff);
    }

    .bar.drop-target {
      border: 2px dashed var(--primary-color);
      background-color: rgba(var(--rgb-primary-color), 0.1);
      transform: translateY(-2px);
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

    /* Animation Preview Keyframes */
    @keyframes pulse {
      0% {
        opacity: 1;
        transform: scale(1);
      }
      50% {
        opacity: 0.7;
        transform: scale(1.1);
      }
      100% {
        opacity: 1;
        transform: scale(1);
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

    @keyframes rotate-left {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(-360deg);
      }
    }

    @keyframes rotate-right {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    @keyframes hover {
      0%,
      100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }

    @keyframes fade {
      0%,
      100% {
        opacity: 1;
      }
      50% {
        opacity: 0.4;
      }
    }

    @keyframes scale {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(0.8);
      }
    }

    @keyframes bounce {
      0%,
      20%,
      50%,
      80%,
      100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-8px);
      }
      60% {
        transform: translateY(-4px);
      }
    }

    @keyframes shake {
      0%,
      100% {
        transform: translateX(0);
      }
      10%,
      30%,
      50%,
      70%,
      90% {
        transform: translateX(-5px);
      }
      20%,
      40%,
      60%,
      80% {
        transform: translateX(5px);
      }
    }

    @keyframes tada {
      0% {
        transform: scale(1) rotate(0deg);
      }
      10%,
      20% {
        transform: scale(0.9) rotate(-3deg);
      }
      30%,
      50%,
      70%,
      90% {
        transform: scale(1.1) rotate(3deg);
      }
      40%,
      60%,
      80% {
        transform: scale(1.1) rotate(-3deg);
      }
      100% {
        transform: scale(1) rotate(0deg);
      }
    }

    /* Animation classes for icon preview */
    ha-icon.animate-pulse {
      animation: pulse 2s ease infinite;
    }

    ha-icon.animate-vibrate {
      animation: vibrate 0.5s linear infinite;
    }

    ha-icon.animate-rotate-left {
      animation: rotate-left 2s linear infinite;
      transform-origin: center;
    }

    ha-icon.animate-rotate-right {
      animation: rotate-right 2s linear infinite;
      transform-origin: center;
    }

    ha-icon.animate-hover {
      animation: hover 2s ease-in-out infinite;
    }

    ha-icon.animate-fade {
      animation: fade 2s ease-in-out infinite;
    }

    ha-icon.animate-scale {
      animation: scale 2s ease-in-out infinite;
    }

    ha-icon.animate-bounce {
      animation: bounce 2s ease infinite;
    }

    ha-icon.animate-shake {
      animation: shake 0.8s ease-in-out infinite;
    }

    ha-icon.animate-tada {
      animation: tada 2s ease infinite;
    }

    .animation-preview {
      background-color: var(--secondary-background-color);
      border-radius: 8px;
      padding: 12px;
      margin-top: 16px;
    }
  `,Dt([ve({attribute:!1})],Jt.prototype,"hass",void 0),Dt([ve({attribute:!1})],Jt.prototype,"config",void 0),Dt([be()],Jt.prototype,"_expandedIconRow",void 0),Dt([be()],Jt.prototype,"_expandedIcon",void 0),Dt([be()],Jt.prototype,"_activeIconTabs",void 0),Dt([be()],Jt.prototype,"_layoutHelpExpanded",void 0),Dt([be()],Jt.prototype,"_rowSettingsExpanded",void 0),Dt([be()],Jt.prototype,"_stateSettingsExpanded",void 0),Jt=Dt([ue("icons-tab")],Jt);var Zt=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};const Yt=[{value:"single",key:"editor.customize.layout_types.single"},{value:"double",key:"editor.customize.layout_types.double"},{value:"dashboard",key:"editor.customize.layout_types.dashboard"},{value:"half_full",key:"editor.customize.layout_types.half_full"},{value:"full_half",key:"editor.customize.layout_types.full_half"}],Xt=[{value:"50-50",key:"editor.customize.column_width.50_50"},{value:"30-70",key:"editor.customize.column_width.30_70"},{value:"70-30",key:"editor.customize.column_width.70_30"},{value:"40-60",key:"editor.customize.column_width.40_60"},{value:"60-40",key:"editor.customize.column_width.60_40"}],Qt=[{value:"none",key:"editor.customize.conditions.types.none"},{value:"show",key:"editor.customize.conditions.types.show"},{value:"hide",key:"editor.customize.conditions.types.hide"}],ei=[{value:"blank",key:"editor.customize.break_styles.blank"},{value:"line",key:"editor.customize.break_styles.line"},{value:"double_line",key:"editor.customize.break_styles.double_line"},{value:"dotted",key:"editor.customize.break_styles.dotted"},{value:"double_dotted",key:"editor.customize.break_styles.double_dotted"},{value:"shadow",key:"editor.customize.break_styles.shadow"}],ti="var(--divider-color, #555555)";let ii=class extends he{constructor(){super(...arguments),this._draggedSection=null,this._expandedSectionId=null,this._dropTargetSection=null,this._layoutDescriptionsExpanded=!1,this._dropTargetColumn=null}_t(e,t){var i,n;return $t(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}_fireConfigChanged(e){Ze(this,"config-changed",{config:e})}_getFriendlyName(e){var t,i;return e&&this.hass&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""}_truncateText(e,t=15){return e?e.length<=t?e:e.substring(0,t)+"...":""}_valueChanged(e){if(e.stopPropagation(),!this.config)return;const t=this.config,i=Object.assign(Object.assign({},this.config),e.detail.value);if(e.detail.value.layout_type&&e.detail.value.layout_type!==t.layout_type){const n=e.detail.value.layout_type,o=(t.layout_type,Object.assign({},i.sections_columns||{})),a={},r={single:[],double:["left","right"],dashboard:["top","top_middle","left_middle","middle","right_middle","bottom_middle","bottom"],half_full:["half_full_row1_left","half_full_row1_right","half_full_row2_full"],full_half:["full_half_row1_full","full_half_row2_left","full_half_row2_right"]}[n]||[];Object.entries(o).forEach((([e,t])=>{r.includes(t)&&(a[e]=t)})),Object.keys(a).length>0?i.sections_columns=a:delete i.sections_columns}this._fireConfigChanged(i)}_handleSectionDragStart(e,t){if(this._draggedSection=t,e.dataTransfer){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.toString());const i=e.target;if(i&&e.dataTransfer){const t=i.getBoundingClientRect(),n=i.cloneNode(!0);n.style.width=`${t.width}px`,n.style.opacity="0.7",n.style.position="absolute",n.style.top="-1000px",n.style.border="1px dashed var(--primary-color)",document.body.appendChild(n),e.dataTransfer.setDragImage(n,e.offsetX,e.offsetY),setTimeout((()=>{document.body.contains(n)&&document.body.removeChild(n)}),0)}}}_handleSectionDragEnd(){var e;this._draggedSection=null,this._dropTargetSection=null,this._dropTargetColumn=null,null===(e=this.shadowRoot)||void 0===e||e.querySelectorAll(".draggable-section.drop-target, .column-container.column-drag-over").forEach((e=>{e.classList.remove("drop-target"),e.classList.remove("column-drag-over")}))}_handleSectionDragOver(e,t){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),null!==this._draggedSection&&this._draggedSection!==t?this._dropTargetSection=t:this._dropTargetSection=null}_handleSectionDragLeave(){this._dropTargetSection=null}_handleSectionDrop(e,t){e.preventDefault(),null!==this._draggedSection&&this._draggedSection!==t&&this._rearrangeSections(this._draggedSection,t),this._handleSectionDragEnd()}_handleColumnDragOver(e,t){e.preventDefault(),null!==this._draggedSection&&(this._dropTargetColumn=t,e.dataTransfer&&(e.dataTransfer.dropEffect="move"))}_handleColumnDragLeave(){this._dropTargetColumn=null}_getDisplaySections(){const e=[...this.config.sections_order||[]],t=this._cleanupSectionsOrder(e),i=[];let n=!1;return t.forEach((e=>{var t,o,a;if("bars"===e){const e=(null===(t=this.config.bars)||void 0===t?void 0:t.length)||0;for(let t=0;t<e;t++)i.push(`bar_${t}`)}else if("icons"===e)(this.config.icon_rows||[]).forEach((e=>{e.id&&i.push(`icon_row_${e.id}`)}));else if("info"!==e||n)if(e.startsWith("break_")){const t=e;(null===(o=this.config.section_breaks)||void 0===o?void 0:o.some((e=>e.id===t)))&&i.push(t)}else if(e.startsWith("info_row_")){const t=e;!n&&(null===(a=this.config.info_rows)||void 0===a?void 0:a.some((e=>`info_row_${e.id}`===t)))&&i.push(t)}else"info"===e&&n||i.push(e);else{const e=this.config.info_rows||[];e.length>0?(e.forEach((e=>{e.id&&i.push(`info_row_${e.id}`)})),n=!0):i.push("info")}})),i}_getExpandedConfigSections(e=!1){var t,i,n,o,a,r;let s=[...this.config.sections_order||[]];const l=s.includes("bars")&&(e||(null!==(i=null===(t=this.config.bars)||void 0===t?void 0:t.length)&&void 0!==i?i:0)>0),d=s.includes("icons")&&(e||(null!==(o=null===(n=this.config.icon_rows)||void 0===n?void 0:n.length)&&void 0!==o?o:0)>0),c=s.includes("info")&&(e||(null!==(r=null===(a=this.config.info_rows)||void 0===a?void 0:a.length)&&void 0!==r?r:0)>0),p=s.some((e=>e.startsWith("break_"))),g=s.some((e=>e.startsWith("info_row_")));if(!(l||d||c||p||g||s.some((e=>e.startsWith("break_")||e.startsWith("info_row_")))))return s;const h=[];let m=!1;return s.forEach((e=>{var t,i,n;if("bars"===e&&l){const e=(null===(t=this.config.bars)||void 0===t?void 0:t.length)||0;for(let t=0;t<e;t++)h.push(`bar_${t}`)}else"icons"===e&&d?(this.config.icon_rows||[]).forEach((e=>{e.id&&h.push(`icon_row_${e.id}`)})):"info"===e&&c&&!m?((this.config.info_rows||[]).forEach((e=>{e.id&&h.push(`info_row_${e.id}`)})),m=!0):e.startsWith("break_")?(null===(i=this.config.section_breaks)||void 0===i?void 0:i.some((t=>t.id===e)))&&h.push(e):e.startsWith("info_row_")?!m&&(null===(n=this.config.info_rows)||void 0===n?void 0:n.some((t=>`info_row_${t.id}`===e)))&&h.push(e):"bars"!==e&&"icons"!==e&&"info"!==e&&h.push(e)})),[...new Set(h)]}_handleColumnDrop(e,t){if(e.preventDefault(),null!==this._draggedSection&&this._dropTargetColumn===t){const e=this._getDisplaySections(),i=this._draggedSection;if(i>=e.length)return void this._handleSectionDragEnd();const n=e[i];let o=[...this.config.sections_order||[]],a=Object.assign({},this.config.sections_columns||{}),r=!1;o=this._cleanupSectionsOrder(o),(n.startsWith("bar_")&&o.includes("bars")||n.startsWith("icon_row_")&&o.includes("icons")||n.startsWith("break_")&&!o.includes(n)||n.startsWith("info_row_")&&!o.includes(n)&&o.includes("info"))&&(o=this._getExpandedConfigSections(!0),r=!0),"left"!==t?a[n]=t:delete a[n];const s={sections_columns:Object.keys(a).length>0?a:void 0};r&&(s.sections_order=this._cleanupSectionsOrder(o)),n.startsWith("bar_")?s.bars=[...this.config.bars||[]]:n.startsWith("break_")?s.section_breaks=[...this.config.section_breaks||[]]:n.startsWith("info_row_")&&(s.info_rows=[...this.config.info_rows||[]]),this._fireConfigChanged(Object.assign(Object.assign({},this.config),s))}this._handleSectionDragEnd()}_rearrangeSections(e,t){const i=this._getDisplaySections();if(e<0||t<0||e>=i.length||t>=i.length)return;const n=i[e],o=i[t],a=JSON.parse(JSON.stringify(this.config));let r=[...a.sections_order||[]];r=this._cleanupSectionsOrder(r);const s=n.startsWith("info_row_");s||o.startsWith("info_row_");let l=!1,d=!1;if(s){const e=r.includes(n);if(r.includes("info")&&!e&&(l=!0),l){const e=r.indexOf("info");if(-1!==e){r.splice(e,1);const t=(a.info_rows||[]).map((e=>`info_row_${e.id}`));r.splice(e,0,...t),d=!0}}}if(r=this._cleanupSectionsOrder(r),n.startsWith("bar_")&&r.includes("bars")){const e=r.indexOf("bars");if(-1!==e){r.splice(e,1);const t=(a.bars||[]).map(((e,t)=>`bar_${t}`));r.splice(e,0,...t)}}if(n.startsWith("icon_row_")&&r.includes("icons")){const e=r.indexOf("icons");if(-1!==e){r.splice(e,1);const t=(a.icon_rows||[]).map((e=>`icon_row_${e.id}`));r.splice(e,0,...t)}}const c=r.indexOf(n),p=r.indexOf(o);if(-1===c||-1===p)return;const[g]=r.splice(c,1),h=c<p?p-1:p;r.splice(h,0,g),r=this._cleanupSectionsOrder(r);const m=Object.assign(Object.assign({},a),{sections_order:r});s?m.info_rows=[...a.info_rows||[]]:n.startsWith("break_")?m.section_breaks=[...a.section_breaks||[]]:n.startsWith("bar_")?m.bars=[...a.bars||[]]:n.startsWith("icon_row_")&&(m.icon_rows=[...a.icon_rows||[]]),this._fireConfigChanged(m)}_toggleSectionExpand(e){this._expandedSectionId=this._expandedSectionId===e?null:e}_updateSectionMargin(e){if("input"===e.type)return;const t=e.target,i=t.dataset.sectionId,n=t.dataset.marginType,o=parseInt(t.value||"0");if(!i||!n)return;const a=JSON.parse(JSON.stringify(this.config.section_styles||{}));a[i]||(a[i]={}),0===o?(delete a[i][n],0===Object.keys(a[i]).length&&delete a[i]):a[i][n]=o;const r={};Object.keys(a).length>0?r.section_styles=a:r.section_styles=void 0,this._fireConfigChanged(Object.assign(Object.assign({},this.config),r))}_updateSectionCondition(e){var t,i,n,o,a;if("input"===e.type&&"state"===(null===(i=null===(t=e.target)||void 0===t?void 0:t.dataset)||void 0===i?void 0:i.field))return;const r=e.target;let s=r.dataset.sectionId;const l=r.dataset.field;if(!s||!l)return;const d=s;let c;c="entity"===l||"type"===l?null!==(a=null!==(o=null===(n=e.detail)||void 0===n?void 0:n.value)&&void 0!==o?o:r.value)&&void 0!==a?a:"":r.value;const p=JSON.parse(JSON.stringify(this.config.section_conditions||{}));p[d]||(p[d]={type:"none",entity:"",state:""}),p[d][l]=c,"type"===l&&"none"===c&&(p[d].entity="",p[d].state=""),"none"!==p[d].type||p[d].entity||p[d].state||delete p[d];const g={};Object.keys(p).length>0?g.section_conditions=p:g.section_conditions=void 0,this._fireConfigChanged(Object.assign(Object.assign({},this.config),g)),this.requestUpdate()}_updateSectionBreakConfig(e,t){var i;const n=e.target,o=n.dataset.sectionId;if(!o||!o.startsWith("break_")||!t)return;const a=o;let r;if("break_style"===t)r=n.value;else if("break_thickness"===t)r=parseInt(n.value||"1");else if("break_width_percent"===t)r=parseInt(n.value||"100");else if("break_color"===t){let n=null===(i=e.detail)||void 0===i?void 0:i.value;"object"==typeof n&&null!==n&&void 0!==n[t]&&null!==n[t]&&(n=n[t]),r="string"==typeof n?n:void 0}if(null==r)return;const s=[...this.config.section_breaks||[]],l=s.findIndex((e=>e.id===a));if(-1===l)return;const d=Object.assign({},s[l]);"break_color"===t&&r===ti?delete d.break_color:d[t]=r,s[l]=d,this._fireConfigChanged(Object.assign(Object.assign({},this.config),{section_breaks:s}))}_resetSectionBreakColor(e){if(!e||!e.startsWith("break_"))return;const t=e,i=[...this.config.section_breaks||[]],n=i.findIndex((e=>e.id===t));if(-1===n)return;const o=Object.assign({},i[n]);delete o.break_color,i[n]=o,this._fireConfigChanged(Object.assign(Object.assign({},this.config),{section_breaks:i})),this.requestUpdate()}_handleAddSectionBreak(){const e={id:`break_${Date.now().toString(36)+Math.random().toString(36).substring(2)}`,break_style:"blank",break_thickness:4,break_width_percent:100,break_color:"var(--divider-color)"},t=[...this.config.section_breaks||[],e],i=[...this.config.sections_order||[],e.id],n=Object.assign({},this.config.section_styles||{});n[e.id]={marginTop:16,marginBottom:16},this._fireConfigChanged(Object.assign(Object.assign({},this.config),{section_breaks:t,sections_order:i,section_styles:n}))}_handleDeleteSectionBreak(e){if(!e||!e.startsWith("break_"))return;const t=e,i=(this.config.section_breaks||[]).filter((e=>e.id!==t)),n=(this.config.sections_order||[]).filter((e=>e!==t)),o=Object.assign({},this.config.sections_columns||{});delete o[t];const a=Object.assign({},this.config.section_styles||{});delete a[t];const r=Object.assign({},this.config.section_conditions||{});delete r[t],this._fireConfigChanged(Object.assign(Object.assign({},this.config),{section_breaks:i.length>0?i:void 0,sections_order:n,sections_columns:Object.keys(o).length>0?o:void 0,section_styles:Object.keys(a).length>0?a:void 0,section_conditions:Object.keys(r).length>0?r:void 0})),this._expandedSectionId===e&&(this._expandedSectionId=null)}render(){return this.hass&&this.config?this._renderCustomizeTab():Y}_renderCustomizeTab(){const e=[{name:"layout_type",selector:{select:{options:Yt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.customize.layout.title"),description:this._t("editor.customize.layout.description")}];"double"===this.config.layout_type&&e.push({name:"column_width",selector:{select:{options:Xt.map((e=>({value:e.value,label:this._t(e.key)}))),mode:"dropdown"}},label:this._t("editor.customize.column_width.title"),description:this._t("editor.customize.column_width.description")});const t=[];"dashboard"===this.config.layout_type&&t.push({name:"top_view_side_margin",selector:{number:{min:0,max:100,step:1,unit_of_measurement:"px"}},label:this._t("editor.customize.top_view.side_margin"),description:this._t("editor.customize.top_view.side_margin_help"),default:0},{name:"top_view_middle_spacing",selector:{number:{min:0,max:100,step:1,unit_of_measurement:"px"}},label:this._t("editor.customize.top_view.middle_spacing"),description:this._t("editor.customize.top_view.middle_spacing_help"),default:16},{name:"top_view_vertical_spacing",selector:{number:{min:0,max:100,step:1,unit_of_measurement:"px"}},label:this._t("editor.customize.top_view.vertical_spacing"),description:this._t("editor.customize.top_view.vertical_spacing_help"),default:16});let i=this._t("editor.customize.sections.arrangement_desc_base");return"double"===this.config.layout_type?i+=" "+this._t("editor.customize.sections.arrangement_desc_double_extra"):"dashboard"===this.config.layout_type?i+=" "+this._t("editor.customize.sections.arrangement_desc_dashboard_extra"):i+=" "+this._t("editor.customize.sections.arrangement_desc_single_extra"),J`
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
            <div
              class="description-toggle"
              @click=${()=>this._layoutDescriptionsExpanded=!this._layoutDescriptionsExpanded}
            >
              <ha-icon icon="mdi:information-outline" class="info-icon"></ha-icon>
              ${this._t("editor.customize.layout.descriptions_header","Layout Descriptions")}
              <ha-icon
                icon=${this._layoutDescriptionsExpanded?"mdi:chevron-up":"mdi:chevron-down"}
                class="expand-icon"
              ></ha-icon>
            </div>
            ${this._layoutDescriptionsExpanded?J`
                  <div class="description layout-description">
                    <ul class="layout-types-list">
                      <li>
                        <strong>Single Column:</strong> All sections are stacked vertically in one
                        column - best for simple displays and mobile views.
                      </li>
                      <li>
                        <strong>Double Column:</strong> Content is split into left and right columns
                        - great for desktop displays with more information.
                      </li>
                      <li>
                        <strong>Top View:</strong> A specialized layout with defined areas for
                        vehicle image in center and controls around it - ideal for creating an
                        organized vehicle dashboard.
                      </li>
                      <li>
                        <strong>Half + Full:</strong> The first row is split into two 50% width
                        columns, and the second row is a single full-width column - useful for a
                        focused top display with broader content below.
                      </li>
                      <li>
                        <strong>Full + Half:</strong> The first row is a single full-width column,
                        and the second row is split into two 50% width columns - ideal for a
                        prominent top section followed by two smaller sections.
                      </li>
                    </ul>
                  </div>
                `:Y}
          </div>
        </div>

        ${"dashboard"===this.config.layout_type?J`
              <div class="settings-section">
                <div class="section-header">${this._t("editor.customize.top_view.header")}</div>
                <div class="settings-content">
                  <p class="description">${this._t("editor.customize.top_view.description")}</p>
                  <ha-form
                    class="config-form top-view-form"
                    .hass=${this.hass}
                    .data=${this.config}
                    .schema=${t}
                    .computeLabel=${e=>this._t(e.label||e.name)}
                    .computeDescription=${e=>this._t(e.description||"")}
                    @value-changed=${this._valueChanged}
                  ></ha-form>
                </div>
              </div>
            `:Y}

        <div class="settings-section">
          <div class="section-header">${this._t("editor.customize.sections.header")}</div>
          <div class="settings-content">
            <p class="description section-description">${i}</p>
            <div class="sections-container">${this._renderDraggableSections()}</div>
          </div>
        </div>

        ${this._renderGlobalCssSection()}
      </div>
    `}_renderDraggableSections(){var e;const t=this._getDisplaySections(),i=this.config.layout_type||"single",n=this.config.section_styles||{},o=(this.config.section_conditions,this.config.section_breaks||[]);if(this.config.sections_order&&(null===(e=this.config.info_rows)||void 0===e?void 0:e.length)>0){const e=this._cleanupSectionsOrder([...this.config.sections_order]);if(e.length!==this.config.sections_order.length)return this._fireConfigChanged(Object.assign(Object.assign({},this.config),{sections_order:e})),J`<div>Cleaning up section configuration...</div>`}const a=(e,t)=>{var i;const a=this._draggedSection===t,r=this._dropTargetSection===t,s=n[e]||{marginTop:0,marginBottom:0},l=(null===(i=this.config.section_conditions)||void 0===i?void 0:i[e])||{type:"none",entity:"",state:""},d=this._expandedSectionId===e,c=l.type&&"none"!==l.type,p=e.startsWith("break_"),g=e.startsWith("info_row_"),h=p?o.find((t=>t.id===e)):void 0;return J`
        <div class="draggable-section-wrapper ${d?"expanded":""}">
          <div
            class="draggable-section ${a?"dragging":""} ${r?"drop-target":""} ${p?"section-break-header":""} ${g?"section-info-row-header":""}"
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
              <ha-icon icon="${this.getSectionIcon(e)}"></ha-icon>
              <span>${this.getSectionLabel(e)}</span>
            </div>
            <div class="section-actions">
              ${p?J`
                    <ha-icon-button
                      .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
                      @click=${()=>this._handleDeleteSectionBreak(e)}
                      title="${this._t("editor.customize.actions.delete_break")}"
                      class="delete-button"
                    >
                    </ha-icon-button>
                  `:Y}
              ${g?Y:""}
              <ha-icon-button
                .path=${d?"M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z":"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"}
                @click=${()=>this._toggleSectionExpand(e)}
                title="${d?this._t("editor.customize.actions.collapse_options"):this._t("editor.customize.actions.expand_options")}"
              >
              </ha-icon-button>
            </div>
          </div>
          ${d?J`
                <div class="section-controls-container">
                  <div class="controls-group margin-controls">
                    <div class="controls-header">${this._t("editor.customize.margins.header")}</div>
                    <div class="controls-content">
                      <div class="control-item">
                        <ha-icon
                          .icon=${"mdi:format-vertical-align-top"}
                          title="${this._t("editor.customize.margins.top")}"
                        ></ha-icon>
                        <ha-textfield
                          type="number"
                          .value=${String(s.marginTop||"")}
                          data-section-id=${e}
                          data-margin-type="marginTop"
                          @change=${this._updateSectionMargin}
                          step="1"
                          suffix="px"
                          dense
                        ></ha-textfield>
                      </div>
                      <div class="control-item">
                        <ha-icon
                          .icon=${"mdi:format-vertical-align-bottom"}
                          title="${this._t("editor.customize.margins.bottom")}"
                        ></ha-icon>
                        <ha-textfield
                          type="number"
                          .value=${String(s.marginBottom||"")}
                          data-section-id=${e}
                          data-margin-type="marginBottom"
                          @change=${this._updateSectionMargin}
                          step="1"
                          suffix="px"
                          dense
                        ></ha-textfield>
                      </div>
                    </div>
                  </div>

                  <div class="controls-group condition-controls">
                    <div class="controls-header">
                      ${this._t("editor.customize.conditions.header")}
                    </div>
                    <p class="description controls-description">
                      ${this._t("editor.customize.conditions.description")}
                    </p>
                    <div class="controls-content">
                      <!-- Condition type selector -->
                      <div class="control-item condition-type-item">
                        <ha-select
                          label="${this._t("editor.customize.conditions.type_label")}"
                          .value=${l.type}
                          data-section-id=${e}
                          data-field="type"
                          @change=${e=>this._updateSectionCondition(e)}
                          @value-changed=${t=>{this._handleConditionTypeChange(t,e)}}
                          @closed=${e=>e.stopPropagation()}
                          fixedMenuPosition
                          naturalMenuWidth
                          dense
                        >
                          ${Qt.map((e=>J`
                              <mwc-list-item .value=${e.value}>
                                ${this._t(e.key)}
                              </mwc-list-item>
                            `))}
                        </ha-select>
                      </div>
                    </div>

                    <!-- Entity and state fields -->
                    ${c?J`
                          <div
                            class="controls-content condition-fields"
                            key="condition-fields-${e}-${l.type}"
                          >
                            <!-- Entity Field -->
                            <ha-form
                              .hass=${this.hass}
                              .data=${l}
                              .schema=${[{name:"entity",selector:{entity:{}},label:this._t("editor.customize.conditions.entity_label","Entity")}]}
                              .computeLabel=${e=>this._t(e.label||e.name)}
                              @value-changed=${t=>{this._updateEntityCondition(e,t.detail.value.entity)}}
                            ></ha-form>

                            <!-- State Field -->
                            <ha-form
                              .hass=${this.hass}
                              .data=${l}
                              .schema=${[{name:"state",selector:{text:{}},label:this._t("editor.customize.conditions.state_label","State"),description:this._t("editor.customize.conditions.state_description","The state value to check (empty matches all states)")}]}
                              .computeLabel=${e=>this._t(e.label||e.name)}
                              .computeDescription=${e=>this._t(e.description||"")}
                              @value-changed=${t=>{this._updateStateCondition(e,t.detail.value.state)}}
                            ></ha-form>
                          </div>
                        `:J`
                          <div class="subtitle-text">
                            ${this._t("editor.customize.condition_prompt",'Select "Show" or "Hide" to configure entity condition')}
                          </div>
                        `}
                  </div>

                  ${p&&h?J`
                        <div class="controls-group break-style-controls">
                          <div class="controls-header">
                            ${this._t("editor.customize.break_style.header")}
                          </div>
                          <div class="controls-content">
                            <div class="control-item">
                              <ha-icon .icon=${"mdi:border-horizontal"}></ha-icon>
                              <ha-select
                                label="${this._t("editor.customize.break_style.style_label")}"
                                .value=${h.break_style||"blank"}
                                data-section-id=${e}
                                @selected=${e=>this._updateSectionBreakConfig(e,"break_style")}
                                @closed=${e=>e.stopPropagation()}
                                fixedMenuPosition
                                naturalMenuWidth
                                dense
                              >
                                ${ei.map((e=>J`
                                    <mwc-list-item .value=${e.value}>
                                      ${this._t(e.key)}
                                    </mwc-list-item>
                                  `))}
                              </ha-select>
                            </div>
                            <div class="control-item">
                              <ha-icon .icon=${"mdi:arrow-expand-vertical"}></ha-icon>
                              <ha-textfield
                                label="${this._t("editor.customize.break_style.thickness_label")}"
                                type="number"
                                .value=${String(h.break_thickness||"1")}
                                data-section-id=${e}
                                @input=${e=>this._updateSectionBreakConfig(e,"break_thickness")}
                                min="1"
                                max="50"
                                step="1"
                                suffix="px"
                                dense
                              ></ha-textfield>
                            </div>
                            <div class="control-item">
                              <ha-icon .icon=${"mdi:arrow-expand-horizontal"}></ha-icon>
                              <ha-textfield
                                label="${this._t("editor.customize.break_style.width_percent_label")}"
                                type="number"
                                .value=${String(h.break_width_percent||"100")}
                                data-section-id=${e}
                                @input=${e=>this._updateSectionBreakConfig(e,"break_width_percent")}
                                min="10"
                                step="1"
                                suffix="%"
                                dense
                              ></ha-textfield>
                            </div>

                            <div class="control-item break-color-control-item">
                              <div class="color-picker-label">
                                ${this._t("editor.customize.break_style.color_label")}
                              </div>
                              <div class="color-picker-control">
                                <color-picker
                                  .value=${h.break_color||ti}
                                  .configValue=${"break_color"}
                                  .showResetButton=${!1}
                                  data-section-id=${e}
                                  @value-changed=${e=>this._updateSectionBreakConfig(e,"break_color")}
                                ></color-picker>
                                <ha-icon-button
                                  class="reset-button"
                                  @click=${()=>this._resetSectionBreakColor(e)}
                                  title="${this._t("editor.bars.colors.reset_color")}"
                                >
                                  <ha-icon icon="mdi:refresh"></ha-icon>
                                </ha-icon-button>
                              </div>
                            </div>
                          </div>
                        </div>
                      `:Y}
                  ${g?J``:Y}
                </div>
              `:Y}
        </div>
      `};if("dashboard"===i){const e={top:t.filter((e=>"top"===(this.config.sections_columns||{})[e]||!["top_middle","left_middle","middle","right_middle","bottom_middle","bottom"].includes((this.config.sections_columns||{})[e]))),top_middle:t.filter((e=>"top_middle"===(this.config.sections_columns||{})[e])),left_middle:t.filter((e=>"left_middle"===(this.config.sections_columns||{})[e])),middle:t.filter((e=>"middle"===(this.config.sections_columns||{})[e])),right_middle:t.filter((e=>"right_middle"===(this.config.sections_columns||{})[e])),bottom_middle:t.filter((e=>"bottom_middle"===(this.config.sections_columns||{})[e])),bottom:t.filter((e=>"bottom"===(this.config.sections_columns||{})[e]))};return J`
        <div class="dashboard-columns-wrapper stacked-columns">
          <div class="add-break-button-container">
            <mwc-button outlined @click=${this._handleAddSectionBreak}>
              <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
              ${this._t("editor.customize.actions.add_break")}
            </mwc-button>
          </div>

          <div class="column-group">
            <div class="column-header dashboard-header">
              ${this._t("editor.customize.dashboard.top")}
            </div>
            <div
              class="column-container dashboard-column top-column ${"top"===this._dropTargetColumn?"column-drag-over":""}"
              @dragover=${e=>this._handleColumnDragOver(e,"top")}
              @dragleave=${this._handleColumnDragLeave}
              @drop=${e=>this._handleColumnDrop(e,"top")}
            >
              ${e.top.map((e=>a(e,t.indexOf(e))))}
              ${0===e.top.length?J`<div class="empty-column-message">
                    ${this._t("editor.customize.columns.empty")}
                  </div>`:""}
            </div>
          </div>

          <div class="column-group">
            <div class="column-header dashboard-header">
              ${this._t("editor.customize.dashboard.top_middle")}
            </div>
            <div
              class="column-container dashboard-column top-middle-column ${"top_middle"===this._dropTargetColumn?"column-drag-over":""}"
              @dragover=${e=>this._handleColumnDragOver(e,"top_middle")}
              @dragleave=${this._handleColumnDragLeave}
              @drop=${e=>this._handleColumnDrop(e,"top_middle")}
            >
              ${e.top_middle.map((e=>a(e,t.indexOf(e))))}
              ${0===e.top_middle.length?J`<div class="empty-column-message">
                    ${this._t("editor.customize.columns.empty")}
                  </div>`:""}
            </div>
          </div>

          <div class="column-group">
            <div class="column-header dashboard-header">
              ${this._t("editor.customize.dashboard.left_middle")}
            </div>
            <div
              class="column-container dashboard-column left-middle-column ${"left_middle"===this._dropTargetColumn?"column-drag-over":""}"
              @dragover=${e=>this._handleColumnDragOver(e,"left_middle")}
              @dragleave=${this._handleColumnDragLeave}
              @drop=${e=>this._handleColumnDrop(e,"left_middle")}
            >
              ${e.left_middle.map((e=>a(e,t.indexOf(e))))}
              ${0===e.left_middle.length?J`<div class="empty-column-message">
                    ${this._t("editor.customize.columns.empty")}
                  </div>`:""}
            </div>
          </div>

          <div class="column-group">
            <div class="column-header dashboard-header highlight-section">
              ${this._t("editor.customize.dashboard.middle")}
            </div>
            <div
              class="column-container dashboard-column middle-column ${"middle"===this._dropTargetColumn?"column-drag-over":""}"
              @dragover=${e=>this._handleColumnDragOver(e,"middle")}
              @dragleave=${this._handleColumnDragLeave}
              @drop=${e=>this._handleColumnDrop(e,"middle")}
            >
              ${e.middle.map((e=>a(e,t.indexOf(e))))}
              ${0===e.middle.length?J` <div class="car-image-placeholder">
                    <div class="empty-column-message highlight-message">
                      ${this._t("editor.customize.dashboard.middle_empty")}
                    </div>
                  </div>`:""}
            </div>
          </div>

          <div class="column-group">
            <div class="column-header dashboard-header">
              ${this._t("editor.customize.dashboard.right_middle")}
            </div>
            <div
              class="column-container dashboard-column right-middle-column ${"right_middle"===this._dropTargetColumn?"column-drag-over":""}"
              @dragover=${e=>this._handleColumnDragOver(e,"right_middle")}
              @dragleave=${this._handleColumnDragLeave}
              @drop=${e=>this._handleColumnDrop(e,"right_middle")}
            >
              ${e.right_middle.map((e=>a(e,t.indexOf(e))))}
              ${0===e.right_middle.length?J`<div class="empty-column-message">
                    ${this._t("editor.customize.columns.empty")}
                  </div>`:""}
            </div>
          </div>

          <div class="column-group">
            <div class="column-header dashboard-header">
              ${this._t("editor.customize.dashboard.bottom_middle")}
            </div>
            <div
              class="column-container dashboard-column bottom-middle-column ${"bottom_middle"===this._dropTargetColumn?"column-drag-over":""}"
              @dragover=${e=>this._handleColumnDragOver(e,"bottom_middle")}
              @dragleave=${this._handleColumnDragLeave}
              @drop=${e=>this._handleColumnDrop(e,"bottom_middle")}
            >
              ${e.bottom_middle.map((e=>a(e,t.indexOf(e))))}
              ${0===e.bottom_middle.length?J`<div class="empty-column-message">
                    ${this._t("editor.customize.columns.empty")}
                  </div>`:""}
            </div>
          </div>

          <div class="column-group">
            <div class="column-header dashboard-header">
              ${this._t("editor.customize.dashboard.bottom")}
            </div>
            <div
              class="column-container dashboard-column bottom-column ${"bottom"===this._dropTargetColumn?"column-drag-over":""}"
              @dragover=${e=>this._handleColumnDragOver(e,"bottom")}
              @dragleave=${this._handleColumnDragLeave}
              @drop=${e=>this._handleColumnDrop(e,"bottom")}
            >
              ${e.bottom.map((e=>a(e,t.indexOf(e))))}
              ${0===e.bottom.length?J`<div class="empty-column-message">
                    ${this._t("editor.customize.columns.empty")}
                  </div>`:""}
            </div>
          </div>
        </div>
      `}if("double"===i){const e=t.filter((e=>"right"!==(this.config.sections_columns||{})[e])),i=t.filter((e=>"right"===(this.config.sections_columns||{})[e]));return J`
        <div class="columns-wrapper stacked-columns">
          <div class="add-break-button-container">
            <mwc-button outlined @click=${this._handleAddSectionBreak}>
              <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
              ${this._t("editor.customize.actions.add_break")}
            </mwc-button>
          </div>

          <div class="column-header">${this._t("editor.customize.columns.left")}</div>
          <div
            class="column-container left-column ${"left"===this._dropTargetColumn?"column-drag-over":""}"
            @dragover=${e=>this._handleColumnDragOver(e,"left")}
            @dragleave=${this._handleColumnDragLeave}
            @drop=${e=>this._handleColumnDrop(e,"left")}
          >
            ${e.map((e=>a(e,t.indexOf(e))))}
            ${0===e.length?J`<div class="empty-column-message">
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
            ${i.map((e=>a(e,t.indexOf(e))))}
            ${0===i.length?J`<div class="empty-column-message">
                  ${this._t("editor.customize.columns.empty")}
                </div>`:""}
          </div>
        </div>
      `}if("half_full"===i){const e={row1_left:t.filter((e=>"half_full_row1_left"===(this.config.sections_columns||{})[e])),row1_right:t.filter((e=>"half_full_row1_right"===(this.config.sections_columns||{})[e])),row2_full:t.filter((e=>{const t=(this.config.sections_columns||{})[e];return"half_full_row2_full"===t||"half_full_row1_left"!==t&&"half_full_row1_right"!==t}))};return J`
        <div class="columns-wrapper stacked-columns">
          <div class="add-break-button-container">
            <mwc-button outlined @click=${this._handleAddSectionBreak}>
              <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
              ${this._t("editor.customize.actions.add_break")}
            </mwc-button>
          </div>

          <div class="column-header">
            ${this._t("editor.customize.half_full.row1_col1","Row 1, Left (50%)")}
          </div>
          <div
            class="column-container half-full-row1-left-column ${"half_full_row1_left"===this._dropTargetColumn?"column-drag-over":""}"
            @dragover=${e=>this._handleColumnDragOver(e,"half_full_row1_left")}
            @dragleave=${this._handleColumnDragLeave}
            @drop=${e=>this._handleColumnDrop(e,"half_full_row1_left")}
          >
            ${e.row1_left.map((e=>a(e,t.indexOf(e))))}
            ${0===e.row1_left.length?J`<div class="empty-column-message">
                  ${this._t("editor.customize.columns.empty")}
                </div>`:""}
          </div>

          <div class="column-header">
            ${this._t("editor.customize.half_full.row1_col2","Row 1, Right (50%)")}
          </div>
          <div
            class="column-container half-full-row1-right-column ${"half_full_row1_right"===this._dropTargetColumn?"column-drag-over":""}"
            @dragover=${e=>this._handleColumnDragOver(e,"half_full_row1_right")}
            @dragleave=${this._handleColumnDragLeave}
            @drop=${e=>this._handleColumnDrop(e,"half_full_row1_right")}
          >
            ${e.row1_right.map((e=>a(e,t.indexOf(e))))}
            ${0===e.row1_right.length?J`<div class="empty-column-message">
                  ${this._t("editor.customize.columns.empty")}
                </div>`:""}
          </div>

          <div class="column-header">
            ${this._t("editor.customize.half_full.row2_full","Row 2, Full Width (100%)")}
          </div>
          <div
            class="column-container half-full-row2-full-column ${"half_full_row2_full"===this._dropTargetColumn?"column-drag-over":""}"
            @dragover=${e=>this._handleColumnDragOver(e,"half_full_row2_full")}
            @dragleave=${this._handleColumnDragLeave}
            @drop=${e=>this._handleColumnDrop(e,"half_full_row2_full")}
          >
            ${e.row2_full.map((e=>a(e,t.indexOf(e))))}
            ${0===e.row2_full.length?J`<div class="empty-column-message">
                  ${this._t("editor.customize.columns.empty")}
                </div>`:""}
          </div>
        </div>
      `}if("full_half"===i){const e={row1_full:t.filter((e=>{const t=(this.config.sections_columns||{})[e];return"full_half_row1_full"===t||"full_half_row2_left"!==t&&"full_half_row2_right"!==t})),row2_left:t.filter((e=>"full_half_row2_left"===(this.config.sections_columns||{})[e])),row2_right:t.filter((e=>"full_half_row2_right"===(this.config.sections_columns||{})[e]))};return J`
        <div class="columns-wrapper stacked-columns">
          <div class="add-break-button-container">
            <mwc-button outlined @click=${this._handleAddSectionBreak}>
              <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
              ${this._t("editor.customize.actions.add_break")}
            </mwc-button>
          </div>

          <div class="column-header">
            ${this._t("editor.customize.full_half.row1_full","Row 1, Full Width (100%)")}
          </div>
          <div
            class="column-container full-half-row1-full-column ${"full_half_row1_full"===this._dropTargetColumn?"column-drag-over":""}"
            @dragover=${e=>this._handleColumnDragOver(e,"full_half_row1_full")}
            @dragleave=${this._handleColumnDragLeave}
            @drop=${e=>this._handleColumnDrop(e,"full_half_row1_full")}
          >
            ${e.row1_full.map((e=>a(e,t.indexOf(e))))}
            ${0===e.row1_full.length?J`<div class="empty-column-message">
                  ${this._t("editor.customize.columns.empty")}
                </div>`:""}
          </div>

          <div class="column-header">
            ${this._t("editor.customize.full_half.row2_col1","Row 2, Left (50%)")}
          </div>
          <div
            class="column-container full-half-row2-left-column ${"full_half_row2_left"===this._dropTargetColumn?"column-drag-over":""}"
            @dragover=${e=>this._handleColumnDragOver(e,"full_half_row2_left")}
            @dragleave=${this._handleColumnDragLeave}
            @drop=${e=>this._handleColumnDrop(e,"full_half_row2_left")}
          >
            ${e.row2_left.map((e=>a(e,t.indexOf(e))))}
            ${0===e.row2_left.length?J`<div class="empty-column-message">
                  ${this._t("editor.customize.columns.empty")}
                </div>`:""}
          </div>

          <div class="column-header">
            ${this._t("editor.customize.full_half.row2_col2","Row 2, Right (50%)")}
          </div>
          <div
            class="column-container full-half-row2-right-column ${"full_half_row2_right"===this._dropTargetColumn?"column-drag-over":""}"
            @dragover=${e=>this._handleColumnDragOver(e,"full_half_row2_right")}
            @dragleave=${this._handleColumnDragLeave}
            @drop=${e=>this._handleColumnDrop(e,"full_half_row2_right")}
          >
            ${e.row2_right.map((e=>a(e,t.indexOf(e))))}
            ${0===e.row2_right.length?J`<div class="empty-column-message">
                  ${this._t("editor.customize.columns.empty")}
                </div>`:""}
          </div>
        </div>
      `}return J`
      <div class="add-break-button-container">
        <mwc-button outlined @click=${this._handleAddSectionBreak}>
          <ha-icon icon="mdi:plus" slot="icon"></ha-icon>
          ${this._t("editor.customize.actions.add_break")}
        </mwc-button>
      </div>
      <div class="draggable-sections single-column">
        ${t.map(((e,t)=>a(e,t)))}
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
    `}getSectionIcon(e){var t;return e.startsWith("bar_")?"mdi:chart-bar":e.startsWith("icon_row_")?"mdi:view-grid-outline":e.startsWith("break_")?"mdi:minus":e.startsWith("info_row_")?"mdi:information-outline":(null===(t={title:{label:this._t("editor.customize.section_labels.title"),icon:"mdi:format-title"},image:{label:this._t("editor.customize.section_labels.image"),icon:"mdi:image"},info:{label:this._t("editor.customize.section_labels.info"),icon:"mdi:information-outline"},bars:{label:"All Bars",icon:"mdi:chart-bar"},icons:{label:"All Icon Rows",icon:"mdi:view-grid-outline"}}[e])||void 0===t?void 0:t.icon)||"mdi:help-circle"}getSectionLabel(e){var t,i;const n={title:{label:this._t("editor.customize.section_labels.title"),icon:"mdi:format-title"},image:{label:this._t("editor.customize.section_labels.image"),icon:"mdi:image"},info:{label:this._t("editor.customize.section_labels.info"),icon:"mdi:information-outline"},bars:{label:"All Bars",icon:"mdi:chart-bar"},icons:{label:"All Icon Rows",icon:"mdi:view-grid-outline"}};if(e.startsWith("bar_")){const i=parseInt(e.substring(4)),n=null===(t=this.config.bars)||void 0===t?void 0:t[i],o=(null==n?void 0:n.entity)?this._getFriendlyName(n.entity):`${this._t("editor.bars.bar_prefix")} ${i+1}`;return this._truncateText(o,20)}if(e.startsWith("icon_row_")){const t=e.substring(9),i=(this.config.icon_rows||[]).findIndex((e=>e.id===t));return-1!==i?`${this._t("editor.icons.row_prefix")} ${i+1}`:this._t("editor.icons.row_prefix")}if(e.startsWith("break_"))return this._t("editor.customize.section_labels.section_break");if(e.startsWith("info_row_")){const t=e.substring(9),i=(this.config.info_rows||[]).findIndex((e=>e.id===t));return-1!==i?`${this._t("editor.customize.section_labels.info_row_prefix","Info Row")} ${i+1}`:this._t("editor.customize.section_labels.info_row_prefix","Info Row")}return(null===(i=n[e])||void 0===i?void 0:i.label)||e}_cleanupSectionsOrder(e){const t=e.includes("info"),i=e.filter((e=>e.startsWith("info_row_")));return t&&i.length>0?e.filter((e=>"info"!==e)):e}_handleConditionTypeChange(e,t){if(!t)return;const i=e.detail.value,n=JSON.parse(JSON.stringify(this.config.section_conditions||{}));n[t]||(n[t]={type:"none",entity:"",state:""});const o=n[t].entity||"",a=n[t].state||"";n[t].type=i,"none"===i?(n[t].entity="",n[t].state=""):(n[t].entity=o,n[t].state=a),"none"!==n[t].type||n[t].entity||n[t].state||delete n[t];const r={};Object.keys(n).length>0?r.section_conditions=n:r.section_conditions=void 0,this._fireConfigChanged(Object.assign(Object.assign({},this.config),r)),this.requestUpdate()}_updateEntityCondition(e,t){if(!e)return;const i=JSON.parse(JSON.stringify(this.config.section_conditions||{}));i[e]||(i[e]={type:"show",entity:"",state:""}),i[e].entity=t||"";const n={};Object.keys(i).length>0?n.section_conditions=i:n.section_conditions=void 0,this._fireConfigChanged(Object.assign(Object.assign({},this.config),n)),this.requestUpdate()}_updateStateCondition(e,t){if(!e)return;const i=JSON.parse(JSON.stringify(this.config.section_conditions||{}));i[e]||(i[e]={type:"show",entity:"",state:""}),i[e].state=t||"";const n={};Object.keys(i).length>0?n.section_conditions=i:n.section_conditions=void 0,this._fireConfigChanged(Object.assign(Object.assign({},this.config),n)),this.requestUpdate()}updated(e){var t;e.has("config")&&this.config&&(null===(t=e.get("config"))||void 0===t?void 0:t.section_conditions)!==this.config.section_conditions&&setTimeout((()=>{this.requestUpdate()}),0)}};ii.styles=c`
    .tab-content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .settings-section {
      margin-bottom: 0;
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
    .sections-container {
    }
    .draggable-section-wrapper {
      margin-bottom: 8px;
      border: 1px solid transparent;
      border-radius: 8px;
      transition: border-color 0.2s ease;
      background-color: var(--card-background-color, #fff);
      overflow: hidden;
    }
    .draggable-section-wrapper.expanded {
      border-color: var(--divider-color);
    }
    .draggable-section {
      border: 1px solid var(--divider-color);
      background-color: var(--primary-background-color);
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
    .draggable-section-wrapper.expanded .draggable-section {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-color: transparent;
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
    .section-actions {
      margin-left: auto;
      flex-shrink: 0;
      display: flex;
      align-items: center;
    }
    .section-actions .delete-button {
      margin-right: 4px;
    }
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
    .columns-wrapper {
      display: flex;
      gap: 16px;
      width: 100%;
    }
    .columns-wrapper.stacked-columns {
      flex-direction: column;
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
      margin-bottom: -1px;
    }
    .column-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      /* No gap needed as each section has its own margin */
      min-height: 120px;
      padding: 8px;
      border: 1px solid var(--divider-color);
      border-radius: 0 0 8px 8px;
      background-color: var(--card-background-color, rgba(0, 0, 0, 0.05));
      transition: all 0.2s ease;
      position: relative;
    }
    .columns-wrapper.stacked-columns .column-header {
      border-radius: 8px 8px 0 0;
      margin-bottom: -1px;
    }
    .columns-wrapper.stacked-columns .column-container {
      border-radius: 0 0 8px 8px;
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
      transform: scale(1.01);
      box-shadow: 0 0 8px rgba(var(--rgb-primary-color), 0.2);
    }

    .dashboard-columns-wrapper {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }

    .column-group {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    .mid-columns-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }

    .mid-column-group {
      width: 100%;
    }

    .car-image-placeholder {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(var(--rgb-primary-color), 0.1);
      border-radius: 12px;
      width: 120px;
      height: 120px;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .car-image-placeholder::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,0.2)"><path d="M5,11L6.5,6.5H17.5L19,11M17.5,16A1.5,1.5 0 0,1 16,14.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 19,14.5A1.5,1.5 0 0,1 17.5,16M6.5,16A1.5,1.5 0 0,1 5,14.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 8,14.5A1.5,1.5 0 0,1 6.5,16M18.92,6C18.72,5.42 18.16,5 17.5,5H6.5C5.84,5 5.28,5.42 5.08,6L3,12V20A1,1 0 0,0 4,21H5A1,1 0 0,0 6,20V19H18V20A1,1 0 0,0 19,21H20A1,1 0 0,0 21,20V12L18.92,6Z" /></svg>')
        no-repeat center center;
      z-index: 1;
      opacity: 0.7;
    }

    .dashboard-column {
      min-height: 80px;
    }

    .dashboard-column.middle-column {
      min-height: 100px;
      background-color: rgba(var(--rgb-primary-color), 0.05);
      border: 1px dashed var(--primary-color);
    }

    .section-controls-container {
      display: flex;
      flex-direction: column;
      gap: 0;
      padding: 0;
      background-color: var(--secondary-background-color);
      border-top: 1px solid var(--divider-color);
    }
    .controls-group {
      padding: 16px;
    }
    .controls-group + .controls-group {
      border-top: 1px solid var(--divider-color);
      margin-top: 0;
      padding-top: 16px;
    }
    .controls-header {
      font-weight: 500;
      color: var(--primary-text-color);
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.9em;
      opacity: 0.9;
    }
    .controls-header ha-icon {
      color: var(--secondary-text-color);
      width: 16px;
      height: 16px;
    }
    .controls-content {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .margin-controls .controls-content {
      flex-direction: row;
      gap: 16px;
    }
    .condition-controls {
      margin-top: 0;
      padding-top: 16px;
    }
    .control-item {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .margin-controls .control-item {
      flex: 1;
    }
    .control-item ha-icon {
      color: var(--secondary-text-color);
      width: 18px;
      height: 18px;
    }
    .control-item ha-textfield,
    .control-item ha-select,
    .control-item ha-entity-picker,
    .control-item color-picker {
      flex-grow: 1;
      --ha-textfield-border-radius: 4px;
    }
    ha-select[dense],
    ha-textfield[dense],
    ha-entity-picker[dense],
    color-picker[dense] {
      --mdc-icon-button-size: 36px;
      --mdc-text-field-height: 40px;
    }
    ha-entity-picker {
      --ha-entity-picker-height: 40px;
    }
    color-picker {
    }

    ha-form .config-form div[name='global_css'] ha-textfield,
    ha-form ha-textfield[name='global_css'] {
      width: 100%;
    }
    ha-form div[name='global_css'] textarea,
    ha-form textarea[name='global_css'] {
      min-height: 150px;
      font-family: monospace;
      resize: vertical;
    }

    .controls-description {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin-top: -4px;
      margin-bottom: 12px;
      padding: 0;
    }

    .dashboard-header {
      padding: 8px 16px;
      font-weight: 500;
      background-color: var(--secondary-background-color);
    }

    .highlight-section {
      background-color: var(--primary-color);
      color: var(--text-primary-color);
    }

    .highlight-message {
      color: var(--primary-color);
      font-weight: 500;
    }

    .layout-description {
      background-color: rgba(var(--rgb-primary-color), 0.08);
      border-radius: 6px;
      padding: 12px 16px;
      margin-top: 0;
      margin-bottom: 8px;
      border-left: 4px solid var(--primary-color);
    }

    .layout-types-list {
      margin: 0;
      padding: 0;
      list-style-position: inside;
    }

    .layout-types-list li {
      margin-bottom: 8px;
    }

    .add-break-button-container {
      display: flex;
      justify-content: center;
      padding: 8px 0 16px 0;
    }

    .add-break-button-container mwc-button {
      --mdc-theme-primary: var(--primary-color);
      --mdc-button-outline-color: var(--divider-color);
    }

    .break-color-control-item {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
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
      width: 100%;
    }

    .break-color-control-item color-picker {
      flex-grow: 1;
      min-width: 0;
    }

    .reset-button {
      --mdc-icon-button-size: 36px;
      color: var(--secondary-text-color);
      opacity: 0.8;
      flex-shrink: 0;
      align-self: center;
    }

    .reset-button:hover {
      opacity: 1;
      color: var(--primary-color);
    }

    .draggable-section.section-break-header {
      background-color: var(--secondary-background-color);
    }
    .draggable-section.section-info-row-header {
      background-color: var(--primary-background-color);
    }

    .description-toggle {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 8px 0;
      font-weight: 500;
      color: var(--primary-text-color);
      margin-top: 12px; /* Add some space above the toggle */
      border-top: 1px solid var(--divider-color); /* Separator line */
      padding-top: 12px; /* Padding above text after separator */
    }
    .description-toggle .info-icon {
      margin-right: 8px;
      color: var(--secondary-text-color);
    }
    .description-toggle .expand-icon {
      margin-left: auto; /* Pushes the expand icon to the right */
      color: var(--secondary-text-color);
    }
    .description-toggle:hover {
      color: var(--primary-color);
    }
    .description-toggle:hover ha-icon {
      color: var(--primary-color);
    }
    .layout-description {
      margin-top: 8px; /* Add some space above the list when expanded */
      padding-left: 28px; /* Indent description to align with text, not icon */
      /* The rest of layout-description styles are already defined, ensure they don't conflict */
    }

    .debug-info {
      display: none; /* Keep but hide for future debugging */
    }

    .condition-fields {
      border-top: 1px solid var(--divider-color);
      margin-top: 8px;
      padding-top: 8px;
    }

    .condition-fields ha-form + ha-form {
      margin-top: 8px;
    }

    .subtitle-text {
      font-size: 14px;
      font-style: italic;
      color: var(--secondary-text-color);
      margin-top: 8px;
      padding: 8px;
      text-align: center;
    }
  `,Zt([ve({attribute:!1})],ii.prototype,"hass",void 0),Zt([ve({attribute:!1})],ii.prototype,"config",void 0),Zt([be()],ii.prototype,"_draggedSection",void 0),Zt([be()],ii.prototype,"_expandedSectionId",void 0),Zt([be()],ii.prototype,"_dropTargetSection",void 0),Zt([be()],ii.prototype,"_layoutDescriptionsExpanded",void 0),Zt([be()],ii.prototype,"_dropTargetColumn",void 0),ii=Zt([ue("customize-tab")],ii);var ni=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let oi=class extends he{_t(e,t){var i,n;return $t(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}render(){return J`
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

          <p class="support-description">
            ${this._t("editor.about.support_description","Your generous tips fuel the development of amazing features for this card! Without support from users like you, continued innovation wouldn't be possible.")}
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
    `}};oi.styles=c`
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
  `,ni([ve({attribute:!1})],oi.prototype,"hass",void 0),oi=ni([ue("about-tab")],oi);var ai=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};const ri=[{value:"flex-start",key:"editor.info.alignments.flex-start"},{value:"center",key:"editor.info.alignments.center"},{value:"flex-end",key:"editor.info.alignments.flex-end"},{value:"space-between",key:"editor.info.alignments.space-between"},{value:"space-around",key:"editor.info.alignments.space-around"},{value:"space-evenly",key:"editor.info.alignments.space-evenly"}],si=[{value:"none",key:"editor.info.spacing.none"},{value:"small",key:"editor.info.spacing.small"},{value:"medium",key:"editor.info.spacing.medium"},{value:"large",key:"editor.info.spacing.large"}],li=[{value:"more-info",key:"editor.info.click_actions.more-info"},{value:"navigate",key:"editor.info.click_actions.navigate"},{value:"url",key:"editor.info.click_actions.url"},{value:"call-service",key:"editor.info.click_actions.call-service"},{value:"none",key:"editor.info.click_actions.none"}],di=[{value:"flex-start",key:"editor.info.row_vertical_alignments.top"},{value:"center",key:"editor.info.row_vertical_alignments.center"},{value:"flex-end",key:"editor.info.row_vertical_alignments.bottom"}],ci="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",pi="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",gi="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z";let hi=class extends he{constructor(){super(...arguments),this._expandedInfoRow=null,this._expandedInfoEntity=null,this._activeInfoTabs={},this._rowSettingsExpanded={},this._draggedEntity=null,this._dropTargetEntity=null,this._isTemplateEditing=!1,this._handleGlobalClick=e=>{if(!this._isTemplateEditing)return;const t=e.target,i=!!t.closest("ha-textarea"),n=!!t.closest(".template-mode-container");i||n||this._setTemplateEditingMode(!1)}}_t(e,t){var i,n;return $t(e,(null===(n=null===(i=this.hass)||void 0===i?void 0:i.locale)||void 0===n?void 0:n.language)||"en",t)}_generateUniqueId(){return Math.random().toString(36).substring(2,9)}_getFriendlyName(e){var t,i;return e&&this.hass&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""}_truncateText(e,t=15){return e?e.length<=t?e:e.substring(0,t)+"...":""}_formatFieldName(e){return e?e.replace(/^./,(e=>e.toUpperCase())).replace(/_/g," "):""}_fireConfigChanged(e){Ze(this,"config-changed",{config:e})}_addInfoRow(){const e=[...this.config.info_rows||[]],t=this._createDefaultInfoRow();e.push(t);let i=[...this.config.sections_order||[]];if(i.some((e=>e.startsWith("info_row_")))){const e=`info_row_${t.id}`,n=i.filter((e=>e.startsWith("info_row_")));if(n.length>0){const t=i.lastIndexOf(n[n.length-1]);i.splice(t+1,0,e)}else{const t=i.indexOf("image"),n=i.indexOf("info"),o=i.indexOf("icons");-1!==t?i.splice(t+1,0,e):-1!==n?i.splice(n+1,0,e):-1!==o?i.splice(o,0,e):i.push(e)}}else if(!i.includes("info")){const e=i.indexOf("image"),t=i.indexOf("icons"),n=i.indexOf("bars");-1!==e?i.splice(e+1,0,"info"):-1!==t?i.splice(t,0,"info"):-1!==n?i.splice(n,0,"info"):i.push("info")}this._fireConfigChanged(Object.assign(Object.assign({},this.config),{info_rows:e,sections_order:i})),this._expandedInfoRow=t.id}_removeInfoRow(e){const t=(this.config.info_rows||[]).filter((t=>t.id!==e));let i=[...this.config.sections_order||[]];const n=`info_row_${e}`;if(i=i.filter((e=>e!==n)),0===t.length&&i.includes("info")){const e=i.indexOf("info");-1!==e&&i.splice(e,1)}let o=Object.assign({},this.config.sections_columns||{});delete o[n],this._fireConfigChanged(Object.assign(Object.assign({},this.config),{info_rows:t,sections_order:i,sections_columns:Object.keys(o).length>0?o:void 0})),this._expandedInfoRow===e&&(this._expandedInfoRow=null),this._expandedInfoEntity&&this._expandedInfoEntity.rowId===e&&(this._expandedInfoEntity=null)}_duplicateInfoRow(e){const t=this.config.info_rows||[],i=t.findIndex((t=>t.id===e));if(-1===i)return;const n=t[i],o=JSON.parse(JSON.stringify(n));o.id=this._generateUniqueId();const a=[...t.slice(0,i+1),o,...t.slice(i+1)];let r=[...this.config.sections_order||[]];const s=`info_row_${o.id}`,l=`info_row_${e}`,d=r.indexOf(l);if(-1!==d)r.splice(d+1,0,s);else if(!r.includes("info")){const e=r.indexOf("image"),t=r.indexOf("icons"),i=r.indexOf("bars");-1!==e?r.splice(e+1,0,"info"):-1!==t?r.splice(t,0,"info"):-1!==i?r.splice(i,0,"info"):r.push("info")}const c=Object.assign(Object.assign({},this.config),{info_rows:a,sections_order:r});this._fireConfigChanged(c),this._expandedInfoRow=o.id}_toggleInfoRowExpand(e){this._expandedInfoRow=this._expandedInfoRow===e?null:e,this._expandedInfoEntity&&this._expandedInfoEntity.rowId===e&&null===this._expandedInfoRow&&(this._expandedInfoEntity=null)}_updateInfoRowConfig(e,t){const i=(this.config.info_rows||[]).map((i=>i.id===e?Object.assign(Object.assign({},i),t):i));this._fireConfigChanged(Object.assign(Object.assign({},this.config),{info_rows:i}))}_addInfoEntity(e){const t=JSON.parse(JSON.stringify(this.config));t.info_rows||(t.info_rows=[]);const i=t.info_rows.findIndex((t=>t.id===e));if(i>=0){t.info_rows[i].info_entities||(t.info_rows[i].info_entities=[]);const n=this._createDefaultInfoEntity();t.info_rows[i].info_entities.push(n);const o=t.info_rows[i].info_entities.length-1;this._fireConfigChanged(t),setTimeout((()=>{this._expandedInfoEntity={rowId:e,entityIndex:o}}),50)}}_removeInfoEntity(e,t){var i;const n=JSON.parse(JSON.stringify(this.config));if(!n.info_rows)return;const o=n.info_rows.findIndex((t=>t.id===e));-1===o||!n.info_rows[o].info_entities||t<0||t>=n.info_rows[o].info_entities.length||(n.info_rows[o].info_entities.splice(t,1),this._fireConfigChanged(n),(null===(i=this._expandedInfoEntity)||void 0===i?void 0:i.rowId)===e&&(this._expandedInfoEntity.entityIndex===t?this._expandedInfoEntity=null:this._expandedInfoEntity.entityIndex>t&&(this._expandedInfoEntity=Object.assign(Object.assign({},this._expandedInfoEntity),{entityIndex:this._expandedInfoEntity.entityIndex-1}))))}_duplicateInfoEntity(e,t){if(!this.config||!this.config.info_rows)return;const i=this.config.info_rows.findIndex((t=>t.id===e));if(-1===i)return;const n=this.config.info_rows[i];if(!n.info_entities||t<0||t>=n.info_entities.length)return;const o=n.info_entities[t],a=JSON.parse(JSON.stringify(o));a.id=this._generateUniqueId();const r=[...this.config.info_rows],s=[...n.info_entities];s.splice(t+1,0,a),r[i]=Object.assign(Object.assign({},n),{info_entities:s}),this._fireConfigChanged(Object.assign(Object.assign({},this.config),{info_rows:r}))}_toggleInfoEntityEdit(e,t){var i,n;if((null===(i=this._expandedInfoEntity)||void 0===i?void 0:i.rowId)===e&&(null===(n=this._expandedInfoEntity)||void 0===n?void 0:n.entityIndex)===t)this._expandedInfoEntity=null;else{this._expandedInfoEntity={rowId:e,entityIndex:t};const i=`${e}_${t}`;this._activeInfoTabs=Object.assign(Object.assign({},this._activeInfoTabs),{[i]:"general"})}}_updateInfoEntityConfig(e,t,i){var n,o,a;const r=JSON.parse(JSON.stringify(this.config));if(!r.info_rows)return;const s=r.info_rows.findIndex((t=>t.id===e));if(s>=0&&t>=0&&t<r.info_rows[s].info_entities.length){const e=null===(a=null===(o=null===(n=this.config.info_rows)||void 0===n?void 0:n[s])||void 0===o?void 0:o.info_entities)||void 0===a?void 0:a[t];if(!e)return;const l=Object.assign({},i);if(void 0!==i.entity&&i.entity!==e.entity){const e=i.entity;if(e){const t=this._getEntityIcon(e);t&&(l.icon=t)}else l.icon="mdi:help-circle-outline"}r.info_rows[s].info_entities[t]=Object.assign(Object.assign({},e),l),this._fireConfigChanged(r)}}_getEntityIcon(e){var t;if(!e||!(null===(t=this.hass)||void 0===t?void 0:t.states[e]))return;const i=this.hass.states[e];if(i.attributes.icon)return i.attributes.icon;const n=e.split(".")[0],o=i.attributes.device_class;switch(n){case"binary_sensor":switch(o){case"door":return"mdi:door";case"garage_door":return"mdi:garage";case"window":return"mdi:window-closed";case"motion":return"mdi:motion-sensor";case"gas":case"heat":return"mdi:fire";case"smoke":return"mdi:smoke";case"moisture":return"mdi:water";case"light":return"mdi:brightness-5";case"power":case"plug":return"mdi:power-plug";case"lock":return"mdi:lock";case"problem":return"mdi:alert-circle-outline";case"safety":return"mdi:shield-check-outline";case"battery_charging":return"mdi:battery-charging";case"carbon_monoxide":return"mdi:molecule-co";case"cold":return"mdi:snowflake";case"connectivity":return"mdi:check-network-outline";case"moving":return"mdi:arrow-right-bold-box-outline";case"occupancy":return"mdi:home-account";case"opening":return"mdi:square-outline";case"presence":return"mdi:home-outline";case"running":return"mdi:run";case"sound":return"mdi:volume-high";case"tamper":return"mdi:alert";case"update":return"mdi:package-up";case"vibration":return"mdi:vibrate";default:return"mdi:checkbox-marked-circle"}case"light":return"mdi:lightbulb";case"media_player":switch(o){case"tv":return"mdi:television";case"speaker":return"mdi:speaker";case"receiver":return"mdi:audio-video";default:return"mdi:cast"}case"update":return"mdi:package-up";case"sensor":switch(o){case"temperature":return"mdi:thermometer";case"humidity":return"mdi:water-percent";case"pressure":default:return"mdi:gauge";case"illuminance":return"mdi:brightness-5";case"power":case"apparent_power":case"reactive_power":case"power_factor":return"mdi:flash";case"energy":return"mdi:lightning-bolt";case"gas":return"mdi:meter-gas";case"water":return"mdi:water";case"battery":return"mdi:battery";case"signal_strength":return"mdi:signal";case"voltage":case"frequency":return"mdi:sine-wave";case"current":return"mdi:current-ac";case"carbon_dioxide":return"mdi:molecule-co2";case"carbon_monoxide":return"mdi:molecule-co";case"nitrogen_dioxide":case"ozone":case"volatile_organic_compounds":return"mdi:molecule";case"pm1":case"pm10":case"pm25":return"mdi:blur";case"aqi":return"mdi:air-filter";case"precipitation":return"mdi:weather-rainy";case"wind_speed":return"mdi:weather-windy";case"timestamp":return"mdi:clock-outline";case"date":return"mdi:calendar";case"duration":return"mdi:timer-sand"}case"switch":switch(o){case"outlet":return"mdi:power-socket-us";case"switch":return"mdi:toggle-switch-variant";default:return"mdi:toggle-switch-outline"}case"person":return"mdi:account";case"weather":return"mdi:weather-cloudy";case"tts":return"mdi:text-to-speech";case"camera":return"mdi:camera";case"climate":return"mdi:thermostat";case"cover":switch(o){case"garage":return"mdi:garage";case"gate":return"mdi:gate";case"door":return"mdi:door-closed";case"window":default:return"mdi:window-shutter";case"shutter":case"blind":return"mdi:blinds";case"curtain":return"mdi:curtains";case"damper":return"mdi:valve"}case"fan":return"mdi:fan";case"lock":return"mdi:lock";case"alarm_control_panel":return"mdi:shield-home";case"input_boolean":return"mdi:toggle-switch-outline";case"input_number":return"mdi:ray-vertex";case"input_select":return"mdi:format-list-bulleted";case"input_text":return"mdi:form-textbox";case"input_datetime":return"mdi:calendar-clock";case"automation":return"mdi:robot";case"script":return"mdi:script-text-outline";case"scene":return"mdi:palette";case"zone":return"mdi:map-marker-radius";case"sun":return"mdi:white-balance-sunny";case"device_tracker":return"mdi:radar";case"remote":return"mdi:remote";case"button":return"mdi:gesture-tap-button";case"number":return"mdi:ray-vertex";case"select":return"mdi:format-list-bulleted";case"text":return"mdi:form-textbox";case"vacuum":return"mdi:robot-vacuum";case"water_heater":return"mdi:water-boiler"}}_createDefaultInfoRow(){return{id:this._generateUniqueId(),width:"100",alignment:"center",vertical_alignment:"center",spacing:"medium",columns:0,allow_wrap:!1,info_entities:[]}}_createDefaultInfoEntity(){return{id:this._generateUniqueId(),entity:"",name:"",icon:"mdi:help-circle-outline",show_icon:!0,show_name:!1,text_size:14,name_size:14,icon_size:24,icon_color:"var(--secondary-text-color)",text_color:"var(--primary-text-color)",on_click_action:"more-info"}}_toggleRowSettings(e){this._rowSettingsExpanded=Object.assign(Object.assign({},this._rowSettingsExpanded),{[e]:!this._rowSettingsExpanded[e]}),this.requestUpdate()}_navigateToCustomizeTab(){const e=new CustomEvent("request-tab-change",{detail:{tab:"customize"},bubbles:!0,composed:!0});this.dispatchEvent(e)}_setTemplateEditingMode(e){this._isTemplateEditing=e,this.requestUpdate()}render(){if(!this.hass||!this.config)return Y;const e=this.config.info_rows||[],t=this.config.sections_order||[],i=new Map(e.map((e=>[e.id,e]))),n=t.map((e=>e.startsWith("info_row_")?e.substring(9):null)).filter((e=>null!==e));let o;return o=n.length>0?n.map((e=>i.get(e))).filter((e=>void 0!==e)):(t.includes("info"),e),J`
      <div class="tab-content">
        <div class="section-header">${this._t("editor.info.title","Card Information")}</div>
        <div class="description">
          ${this._t("editor.info.description","Configure information rows and entities to display vehicle details like location, mileage, etc. Info items will display on a single line when possible, wrapping to multiple lines in narrow containers.")}
        </div>
        <div class="info-rows-container">
          ${o.map((t=>{const i=e.findIndex((e=>e.id===t.id));return J` <div key=${t.id}>${this._renderInfoRow(t,i)}</div> `}))}
          <div class="add-bar-container">
            <ha-button class="add-bar-button" @click=${this._addInfoRow}>
              <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
              ${this._t("editor.info.add_row","Add Info Row")}
            </ha-button>
          </div>
        </div>

        ${this._renderMigrationNotice()}

        <div style="margin-top: 24px; text-align: center;">
          <ha-button
            raised
            .label=${this._t("editor.tabs.info.arrange_info_rows","Arrange Info Rows")}
            @click=${this._navigateToCustomizeTab}
            .path=${"M3,11H11V3H3M3,21H11V13H3M13,21H21V13H13M13,3V11H21V3"}
          ></ha-button>
        </div>
      </div>
    `}_renderMigrationNotice(){const e=!!(this.config.location_entity||this.config.mileage_entity||this.config.car_state_entity),t=(this.config.info_rows||[]).length>0;return e&&!t?J`
        <div class="migration-notice">
          <ha-icon icon="mdi:alert"></ha-icon>
          <div class="migration-text">
            <div class="migration-title">Legacy Vehicle Info Detected</div>
            <div class="migration-description">
              You are using the legacy method for configuring vehicle information. Consider
              migrating to the new Info Rows system for more flexibility.
            </div>
            <ha-button @click=${this._migrateFromLegacy} class="migrate-button">
              Migrate to Info Rows
            </ha-button>
          </div>
        </div>
      `:Y}_migrateFromLegacy(){const e=[];if(this.config.location_entity||this.config.mileage_entity){const t=this._createDefaultInfoRow();t.info_entities=[],this.config.location_entity&&t.info_entities.push({id:this._generateUniqueId(),entity:this.config.location_entity,show_icon:!1!==this.config.show_info_icons,icon:"mdi:map-marker",icon_color:this.config.location_icon_color||"var(--secondary-text-color)",text_color:this.config.location_text_color||"var(--primary-text-color)",text_size:this.config.location_text_size||14,icon_size:24,on_click_action:"more-info"}),this.config.mileage_entity&&t.info_entities.push({id:this._generateUniqueId(),entity:this.config.mileage_entity,show_icon:!1!==this.config.show_info_icons,icon:"mdi:speedometer",icon_color:this.config.mileage_icon_color||"var(--secondary-text-color)",text_color:this.config.mileage_text_color||"var(--primary-text-color)",text_size:this.config.mileage_text_size||14,icon_size:24,on_click_action:"more-info"}),e.push(t)}if(this.config.car_state_entity){const t=this._createDefaultInfoRow();t.info_entities=[{id:this._generateUniqueId(),entity:this.config.car_state_entity,show_icon:!1,icon:"mdi:car",text_color:this.config.car_state_text_color||"var(--primary-text-color)",text_size:this.config.car_state_text_size||14,template_mode:this.config.car_state_template_mode,value_template:this.config.car_state_template||"",on_click_action:"more-info"}],e.push(t)}let t=[...this.config.sections_order||[]];const i=t.indexOf("info"),n=e.map((e=>`info_row_${e.id}`));if(-1!==i)t.splice(i,1,...n);else{const e=t.indexOf("image"),i=t.indexOf("icons"),o=t.indexOf("bars");-1!==e?t.splice(e+1,0,...n):-1!==i?t.splice(i,0,...n):-1!==o?t.splice(o,0,...n):t.push(...n)}const o=Object.assign({},this.config);delete o.location_entity,delete o.show_location,delete o.location_icon_color,delete o.location_text_color,delete o.location_text_size,delete o.mileage_entity,delete o.show_mileage,delete o.mileage_icon_color,delete o.mileage_text_color,delete o.mileage_text_size,delete o.car_state_entity,delete o.show_car_state,delete o.car_state_text_color,delete o.car_state_text_size,delete o.car_state_template_mode,delete o.car_state_template,delete o.show_info_icons,this._fireConfigChanged(Object.assign(Object.assign({},o),{info_rows:e,sections_order:t}))}_renderInfoRow(e,t){const i=this._expandedInfoRow===e.id;return J`
      <div class="bar ${i?"expanded":""}">
        <div class="bar-header" @click=${()=>this._toggleInfoRowExpand(e.id)}>
          <div class="bar-title">
            ${this._t("editor.info.row_prefix","Info Row")} ${t+1}
          </div>
          <div class="bar-actions">
            <ha-icon-button
              title="${this._t("editor.info.duplicate_row","Duplicate Row")}"
              @click=${t=>{t.stopPropagation(),this._duplicateInfoRow(e.id)}}
            >
              <ha-icon icon="mdi:content-copy"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              title="${this._t("editor.info.delete_row","Delete Row")}"
              .path=${gi}
              @click=${t=>{t.stopPropagation(),this._removeInfoRow(e.id)}}
            >
            </ha-icon-button>
            <ha-icon-button
              title="${i?this._t("editor.info.collapse_row","Collapse Row"):this._t("editor.info.expand_row","Expand Row")}"
              @click=${t=>{t.stopPropagation(),this._toggleInfoRowExpand(e.id)}}
              .path=${i?pi:ci}
            >
            </ha-icon-button>
          </div>
        </div>

        ${i?this._renderInfoRowContent(e):""}
      </div>
    `}_renderInfoRowContent(e){const t=[{name:"alignment",selector:{select:{options:ri.map((e=>({value:e.value,label:this._t(e.key,e.value.replace("-"," "))}))),mode:"dropdown"}},label:this._t("editor.info.row_settings.alignment","Alignment"),description:this._t("editor.info.row_settings.alignment_description","Horizontal alignment of entities in this row")}];t.push({name:"vertical_alignment",selector:{select:{options:di.map((e=>({value:e.value,label:this._t(e.key,"flex-start"===e.value?"Top":"center"===e.value?"Center":"Bottom")}))),mode:"dropdown"}},label:this._t("editor.info.row_settings.vertical_alignment","Vertical Alignment"),description:this._t("editor.info.row_settings.vertical_alignment_description","Controls how entities are aligned vertically within the row.")}),t.push({name:"spacing",selector:{select:{options:si.map((e=>({value:e.value,label:this._t(e.key,e.value)}))),mode:"dropdown"}},label:this._t("editor.info.row_settings.spacing","Spacing"),description:this._t("editor.info.row_settings.spacing_description","Spacing between entities in this row")}),t.push({name:"allow_wrap",selector:{boolean:{}},label:this._t("editor.info.row_settings.allow_wrap","Allow items to wrap"),description:this._t("editor.info.row_settings.allow_wrap_description","When enabled, items will flow to the next line if they don't fit in one row. When disabled, all items will stay in a single row.")});const i=this._rowSettingsExpanded[e.id]||!1;return J`
      <div class="bar-content">
        <div class="settings-section">
          <div class="section-header toggleable" @click=${()=>this._toggleRowSettings(e.id)}>
            ${this._t("editor.info.row_settings.header","Row Settings")}
            <ha-icon
              class="toggle-icon"
              icon=${i?"mdi:chevron-up":"mdi:chevron-down"}
            ></ha-icon>
          </div>

          <div class="settings-content ${i?"expanded":"collapsed"}">
            <ha-form
              .hass=${this.hass}
              .data=${{alignment:e.alignment||"center",vertical_alignment:e.vertical_alignment||"center",spacing:e.spacing||"medium",allow_wrap:e.allow_wrap||!1}}
              .schema=${t}
              .computeLabel=${e=>this._t(e.label||e.name)}
              .computeDescription=${e=>this._t(e.description||"")}
              @value-changed=${t=>this._updateInfoRowConfig(e.id,t.detail.value)}
            ></ha-form>
          </div>
        </div>

        <div class="settings-section">
          <div class="section-header">
            ${this._t("editor.info.entity_settings.header","Info Items")}
          </div>
          <div class="settings-content">
            <div class="bar-list mini-bar-list">
              ${(e.info_entities||[]).map(((t,i)=>this._renderInfoEntity(e.id,t,i)))}
            </div>
            <div class="add-bar-container">
              <ha-button class="add-icon-button" @click=${()=>this._addInfoEntity(e.id)}>
                <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
                ${this._t("editor.info.add_entity","Add Info Entity")}
              </ha-button>
            </div>
          </div>
        </div>
      </div>
    `}_renderInfoEntity(e,t,i){var n,o,a,r,s,l;const d=(null===(n=this._expandedInfoEntity)||void 0===n?void 0:n.rowId)===e&&(null===(o=this._expandedInfoEntity)||void 0===o?void 0:o.entityIndex)===i,c=t.entity?this._getFriendlyName(t.entity):"",p=t.name||c||`${this._t("editor.info.entity_prefix","Entity")} ${i+1}`,g=this._truncateText(p,20),h=t.icon||"mdi:help-circle-outline",m=t.icon_color||"var(--secondary-text-color)",u=(null===(a=this._draggedEntity)||void 0===a?void 0:a.rowId)===e&&(null===(r=this._draggedEntity)||void 0===r?void 0:r.entityIndex)===i,_=(null===(s=this._dropTargetEntity)||void 0===s?void 0:s.rowId)===e&&(null===(l=this._dropTargetEntity)||void 0===l?void 0:l.entityIndex)===i;return J`
      <div
        class="mini-bar ${d?"expanded":""} ${u?"dragging":""} ${_?"drop-target":""} ${this._isTemplateEditing?"template-editing":""}"
        draggable=${this._isTemplateEditing?"false":"true"}
        @dragstart=${t=>{if(this._isTemplateEditing)return t.preventDefault(),!1;this._handleInfoEntityDragStart(t,e,i)}}
        @dragend=${this._handleInfoEntityDragEnd}
        @dragover=${t=>this._handleInfoEntityDragOver(t,e,i)}
        @dragleave=${this._handleInfoEntityDragLeave}
        @drop=${t=>this._handleInfoEntityDrop(t,e,i)}
        @mousedown=${e=>{const t=e.target;t.closest("ha-textarea")||t.closest(".template-mode-container")?(e.stopPropagation(),this._setTemplateEditingMode(!0)):this._setTemplateEditingMode(!1)}}
      >
        <div class="mini-bar-header" @click=${()=>this._toggleInfoEntityEdit(e,i)}>
          <div class="drag-handle">
            <ha-icon icon="mdi:drag"></ha-icon>
          </div>
          <div class="bar-icon-preview">
            <ha-icon icon="${h}" style="color: ${m};"></ha-icon>
          </div>
          <div class="bar-title">${g}</div>
          <div class="bar-actions">
            <ha-icon-button
              title=${this._t("editor.info.duplicate_entity","Duplicate Entity")}
              @click=${t=>{t.stopPropagation(),this._duplicateInfoEntity(e,i)}}
            >
              <ha-icon icon="mdi:content-copy"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              title=${this._t("editor.info.delete_entity","Delete Entity")}
              .path=${gi}
              @click=${t=>{t.stopPropagation(),this._removeInfoEntity(e,i)}}
            >
            </ha-icon-button>
            <ha-icon-button
              title=${d?this._t("editor.info.collapse_entity","Collapse Entity"):this._t("editor.info.expand_entity","Expand Entity")}
              .path=${d?pi:ci}
              @click=${t=>{t.stopPropagation(),this._toggleInfoEntityEdit(e,i)}}
            >
            </ha-icon-button>
          </div>
        </div>

        ${d?this._renderInfoEntityContent(e,t,i):""}
      </div>
    `}_renderInfoEntityContent(e,t,i){return J`
      <div class="mini-bar-content">
        <div class="entity-settings-section">
          <ha-form
            .hass=${this.hass}
            .data=${t}
            .schema=${[{name:"entity",selector:{entity:{}},label:this._t("editor.common.entity","Entity"),description:this._t("editor.info.entity_settings.entity_description","Select an entity to display information from")},{name:"name",selector:{text:{}},label:this._t("editor.info.entity_settings.name","Custom Name"),description:this._t("editor.info.entity_settings.name_description","Override the entity name (leave blank to use entity's friendly name)")},{name:"show_icon",selector:{boolean:{}},label:this._t("editor.info.entity_settings.show_icon","Show Icon")},{name:"icon",selector:{icon:{}},label:this._t("editor.info.entity_settings.icon","Icon")},{name:"show_name",selector:{boolean:{}},label:this._t("editor.info.entity_settings.show_name","Show Name"),description:this._t("editor.info.entity_settings.show_name_description","Display the entity name before the value")},{name:"on_click_action",selector:{select:{options:li.map((e=>({value:e.value,label:this._t(e.key,e.value.replace("-"," "))}))),mode:"dropdown"}},label:this._t("editor.info.entity_settings.click_action","Click Action")}]}
            .computeLabel=${e=>this._t(e.label||e.name)}
            .computeDescription=${e=>this._t(e.description||"")}
            @value-changed=${t=>this._updateInfoEntityConfig(e,i,t.detail.value)}
          ></ha-form>

          <!-- Icon Color Picker - Only show when show_icon is true -->
          ${t.show_icon?J`
                <div class="color-picker-container">
                  <div class="color-picker-label">
                    ${this._t("editor.info.entity_settings.icon_color","Icon Color")}
                  </div>
                  <color-picker
                    .value=${t.icon_color||"var(--secondary-text-color)"}
                    .configValue=${"icon_color"}
                    @value-changed=${t=>{var n;const o=(null===(n=t.detail.value)||void 0===n?void 0:n.icon_color)||t.detail.value;this._updateInfoEntityConfig(e,i,{icon_color:o})}}
                  ></color-picker>
                </div>
              `:""}

          <!-- Name Color Picker - Only show when show_name is true -->
          ${t.show_name?J`
                <div class="color-picker-container">
                  <div class="color-picker-label">
                    ${this._t("editor.info.entity_settings.name_color","Name Color")}
                  </div>
                  <color-picker
                    .value=${t.name_color||"var(--primary-text-color)"}
                    .configValue=${"name_color"}
                    @value-changed=${t=>{var n;const o=(null===(n=t.detail.value)||void 0===n?void 0:n.name_color)||t.detail.value;this._updateInfoEntityConfig(e,i,{name_color:o})}}
                  ></color-picker>
                </div>
              `:""}

          <!-- Entity Color Picker (replaces Text Color) - Always show -->
          <div class="color-picker-container">
            <div class="color-picker-label">
              ${this._t("editor.info.entity_settings.entity_color","Entity Color")}
            </div>
            <color-picker
              .value=${t.text_color||"var(--primary-text-color)"}
              .configValue=${"text_color"}
              @value-changed=${t=>{var n;const o=(null===(n=t.detail.value)||void 0===n?void 0:n.text_color)||t.detail.value;this._updateInfoEntityConfig(e,i,{text_color:o})}}
            ></color-picker>
          </div>

          ${"navigate"===t.on_click_action?J`
                <ha-form
                  .hass=${this.hass}
                  .data=${t}
                  .schema=${[{name:"navigation_path",selector:{text:{}},label:this._t("editor.info.entity_settings.navigation_path","Navigation Path"),description:this._t("editor.info.entity_settings.navigation_path_description","Path to navigate to when clicked (e.g., /lovelace/0)")}]}
                  .computeLabel=${e=>this._t(e.label||e.name)}
                  .computeDescription=${e=>this._t(e.description||"")}
                  @value-changed=${t=>this._updateInfoEntityConfig(e,i,t.detail.value)}
                ></ha-form>
              `:Y}
          ${"url"===t.on_click_action?J`
                <ha-form
                  .hass=${this.hass}
                  .data=${t}
                  .schema=${[{name:"url",selector:{text:{}},label:this._t("editor.info.entity_settings.url","URL"),description:this._t("editor.info.entity_settings.url_description","URL to open when clicked")}]}
                  .computeLabel=${e=>this._t(e.label||e.name)}
                  .computeDescription=${e=>this._t(e.description||"")}
                  @value-changed=${t=>this._updateInfoEntityConfig(e,i,t.detail.value)}
                ></ha-form>
              `:Y}
          ${"call-service"===t.on_click_action?J`
                <ha-form
                  .hass=${this.hass}
                  .data=${t}
                  .schema=${[{name:"service",selector:{text:{}},label:this._t("editor.info.entity_settings.service","Service"),description:this._t("editor.info.entity_settings.service_description","Service to call (e.g., light.turn_on)")},{name:"service_data",selector:{text:{multiline:!0}},label:this._t("editor.info.entity_settings.service_data","Service Data (JSON)")}]}
                  .computeLabel=${e=>this._t(e.label||e.name)}
                  .computeDescription=${e=>this._t(e.description||"")}
                  @value-changed=${t=>this._updateInfoEntityConfig(e,i,t.detail.value)}
                ></ha-form>
              `:Y}

          <!-- Template Mode Section -->
          <div
            class="template-mode-container"
            style="margin-top: 16px;"
            @mousedown=${e=>e.stopPropagation()}
            @click=${e=>e.stopPropagation()}
            @dragstart=${e=>e.preventDefault()}
            draggable="false"
          >
            <div class="template-mode-header">
              <div class="template-mode-label" style="font-size: 1.2em; font-weight: 500;">
                ${this._t("editor.info.template_mode","Template Mode")}
              </div>
              <p style="font-size: 0.9em; margin-top: 8px; color: var(--secondary-text-color);">
                ${this._t("editor.info.template_mode_description","Use a template to format the entity value. Templates allow you to use Home Assistant templating syntax for complex formatting.")}
              </p>
              <div
                class="template-mode-toggle"
                style="margin-top: 8px; display: flex; align-items: center;"
                @mousedown=${e=>e.stopPropagation()}
                @click=${e=>e.stopPropagation()}
              >
                <ha-switch
                  .checked=${Boolean(t.template_mode)}
                  @change=${t=>{t.stopPropagation(),this._updateInfoEntityConfig(e,i,{template_mode:t.target.checked})}}
                ></ha-switch>
                <span style="margin-left: 8px; font-size: 0.9em;"
                  >${this._t("entity_settings.template_mode","Enable Template Mode")}</span
                >
              </div>
            </div>

            ${t.template_mode?J`
                  <div
                    style="margin-top: 16px; padding: 0 16px;"
                    @mousedown=${e=>e.stopPropagation()}
                    @click=${e=>e.stopPropagation()}
                    @dragstart=${e=>e.stopPropagation()}
                  >
                    <ha-textarea
                      class="no-drag-textarea"
                      .label=${this._t("entity_settings.value_template","Value Template")}
                      .value=${t.value_template||""}
                      @input=${t=>this._updateInfoEntityConfig(e,i,{value_template:t.target.value})}
                      @mousedown=${e=>{e.stopPropagation(),this._setTemplateEditingMode(!0)}}
                      @focus=${()=>this._setTemplateEditingMode(!0)}
                      @blur=${()=>setTimeout((()=>this._setTemplateEditingMode(!1)),100)}
                      @click=${e=>e.stopPropagation()}
                      @dragstart=${e=>e.stopPropagation()}
                      rows="3"
                      style="width: 100%; font-family: 'Courier New', Courier, monospace;"
                    ></ha-textarea>
                  </div>

                  <div
                    style="margin-top: 16px; padding: 0 16px;"
                    @mousedown=${e=>e.stopPropagation()}
                    @click=${e=>e.stopPropagation()}
                    @dragstart=${e=>e.stopPropagation()}
                  >
                    <div style="font-weight: 500; margin-bottom: 12px;">
                      ${this._t("editor.info.template_examples_header","Common Examples:")}
                    </div>
                    <div
                      style="display: flex; flex-direction: column; gap: 16px; padding-bottom: 16px;"
                    >
                      <div
                        class="template-example"
                        @mousedown=${e=>{e.stopPropagation(),this._setTemplateEditingMode(!0)}}
                        @click=${e=>e.stopPropagation()}
                        @dragstart=${e=>{e.preventDefault(),e.stopPropagation()}}
                      >
                        <div
                          class="template-example-code"
                          style="font-family: 'Courier New', Courier, monospace; font-size: 13px; background-color: rgba(0, 0, 0, 0.1); padding: 6px 8px; border-radius: 4px; color: var(--info-color, #03A9F4); margin-bottom: 4px; user-select: text; cursor: text;"
                        >
                          {{ states('${t.entity||"sensor.example"}') }}
                        </div>
                        <div style="color: var(--secondary-text-color); padding-left: 4px;">
                          ${this._t("entity_settings.template_basic","Basic value")}
                        </div>
                      </div>
                      <div
                        class="template-example"
                        @mousedown=${e=>{e.stopPropagation(),this._setTemplateEditingMode(!0)}}
                        @click=${e=>e.stopPropagation()}
                        @dragstart=${e=>{e.preventDefault(),e.stopPropagation()}}
                      >
                        <div
                          class="template-example-code"
                          style="font-family: 'Courier New', Courier, monospace; font-size: 13px; background-color: rgba(0, 0, 0, 0.1); padding: 6px 8px; border-radius: 4px; color: var(--info-color, #03A9F4); margin-bottom: 4px; user-select: text; cursor: text;"
                        >
                          {{ states('${t.entity||"sensor.example"}') | float(0) }} km
                        </div>
                        <div style="color: var(--secondary-text-color); padding-left: 4px;">
                          ${this._t("entity_settings.template_units","With units")}
                        </div>
                      </div>
                      <div
                        class="template-example"
                        @mousedown=${e=>{e.stopPropagation(),this._setTemplateEditingMode(!0)}}
                        @click=${e=>e.stopPropagation()}
                        @dragstart=${e=>{e.preventDefault(),e.stopPropagation()}}
                      >
                        <div
                          class="template-example-code"
                          style="font-family: 'Courier New', Courier, monospace; font-size: 13px; background-color: rgba(0, 0, 0, 0.1); padding: 6px 8px; border-radius: 4px; color: var(--info-color, #03A9F4); margin-bottom: 4px; user-select: text; cursor: text;"
                        >
                          {{ states('${t.entity||"sensor.example"}') | float(0) | round(1) }}
                        </div>
                        <div style="color: var(--secondary-text-color); padding-left: 4px;">
                          ${this._t("entity_settings.template_round","Round to 1 decimal")}
                        </div>
                      </div>
                    </div>
                  </div>
                `:""}
          </div>

          <!-- Size settings -->
          <div class="size-settings">
            <div class="size-settings-header">
              ${this._t("editor.info.entity_settings.size_settings","Size Settings")}
            </div>
            <div class="size-fields-container">
              ${t.show_icon?J`
                    <div class="size-field">
                      <span class="size-label">
                        ${this._t("editor.info.entity_settings.icon_size","Icon Size")}
                      </span>
                      <ha-textfield
                        type="number"
                        .value=${t.icon_size||24}
                        min="10"
                        max="48"
                        @change=${t=>{const n=t.target,o=parseInt(n.value);isNaN(o)||this._updateInfoEntityConfig(e,i,{icon_size:o})}}
                        suffix="px"
                      ></ha-textfield>
                    </div>
                  `:""}
              ${t.show_name?J`
                    <div class="size-field">
                      <span class="size-label">
                        ${this._t("editor.info.entity_settings.name_size","Name Size")}
                      </span>
                      <ha-textfield
                        type="number"
                        .value=${t.name_size||14}
                        min="10"
                        max="36"
                        @change=${t=>{const n=t.target,o=parseInt(n.value);isNaN(o)||this._updateInfoEntityConfig(e,i,{name_size:o})}}
                        suffix="px"
                      ></ha-textfield>
                    </div>
                  `:""}

              <div class="size-field">
                <span class="size-label">
                  ${this._t("editor.info.entity_settings.value_size","Value Size")}
                </span>
                <ha-textfield
                  type="number"
                  .value=${t.text_size||14}
                  min="10"
                  max="36"
                  @change=${t=>{const n=t.target,o=parseInt(n.value);isNaN(o)||this._updateInfoEntityConfig(e,i,{text_size:o})}}
                  suffix="px"
                ></ha-textfield>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}_handleInfoEntityDragStart(e,t,i){if(!e.dataTransfer)return;const n=e.target,o=n.closest("ha-textarea"),a=n.closest(".template-mode-container");if(o||a)return e.preventDefault(),void e.stopPropagation();e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",JSON.stringify({rowId:t,entityIndex:i}));const r=e.currentTarget;if(r){const t=r.getBoundingClientRect(),i=r.cloneNode(!0);i.style.width=`${t.width}px`,i.style.opacity="0.7",i.style.position="absolute",i.style.top="-1000px",i.style.border="1px dashed var(--primary-color)",document.body.appendChild(i),e.dataTransfer.setDragImage(i,e.offsetX,e.offsetY),setTimeout((()=>{document.body.contains(i)&&document.body.removeChild(i)}),0)}const s=r.closest(".mini-bar");s&&s.classList.add("dragging")}_handleInfoEntityDragEnd(e){var t;null===(t=this.shadowRoot)||void 0===t||t.querySelectorAll(".mini-bar.dragging, .mini-bar.drop-target").forEach((e=>{e.classList.remove("dragging"),e.classList.remove("drop-target")}))}_handleInfoEntityDragOver(e,t,i){if(e.preventDefault(),!e.dataTransfer)return;e.dataTransfer.dropEffect="move";const n=e.currentTarget;n&&!n.classList.contains("dragging")&&n.classList.add("drop-target")}_handleInfoEntityDragLeave(e){const t=e.currentTarget;t&&t.classList.remove("drop-target")}_handleInfoEntityDrop(e,t,i){var n;e.preventDefault(),e.stopPropagation();try{const o=JSON.parse((null===(n=e.dataTransfer)||void 0===n?void 0:n.getData("text/plain"))||"{}"),a=o.rowId,r=o.entityIndex;a&&void 0!==r&&this._rearrangeInfoEntities(a,r,t,i)}catch(e){console.error("[InfoTab] Error parsing drag data:",e)}this._handleInfoEntityDragEnd(e)}_rearrangeInfoEntities(e,t,i,n){var o,a,r,s;if(e===i&&t===n)return;const l=JSON.parse(JSON.stringify(this.config));if(!l.info_rows)return;const d=l.info_rows.findIndex((t=>t.id===e)),c=l.info_rows.findIndex((e=>e.id===i));if(-1===d||-1===c)return;const p=l.info_rows[d],g=l.info_rows[c];if(p.info_entities&&g.info_entities){if(e===i){const[e]=p.info_entities.splice(t,1),i=t<n?n-1:n;p.info_entities.splice(i,0,e)}else{const[e]=p.info_entities.splice(t,1);g.info_entities.splice(n,0,e)}if(this._fireConfigChanged(l),(null===(o=this._expandedInfoEntity)||void 0===o?void 0:o.rowId)===e&&(null===(a=this._expandedInfoEntity)||void 0===a?void 0:a.entityIndex)===t)if(e===i){const e=t<n?n-1:n;this._expandedInfoEntity={rowId:i,entityIndex:e}}else this._expandedInfoEntity={rowId:i,entityIndex:n};else(null===(r=this._expandedInfoEntity)||void 0===r?void 0:r.rowId)===e&&this._expandedInfoEntity.entityIndex>t&&e===i&&n>this._expandedInfoEntity.entityIndex?this._expandedInfoEntity={rowId:this._expandedInfoEntity.rowId,entityIndex:this._expandedInfoEntity.entityIndex-1}:(null===(s=this._expandedInfoEntity)||void 0===s?void 0:s.rowId)===e&&this._expandedInfoEntity.entityIndex<t&&e===i&&n<=this._expandedInfoEntity.entityIndex&&(this._expandedInfoEntity={rowId:this._expandedInfoEntity.rowId,entityIndex:this._expandedInfoEntity.entityIndex+1})}}connectedCallback(){super.connectedCallback(),document.addEventListener("click",this._handleGlobalClick),this.hass&&!this._templateService&&(this._templateService=new Fe(this.hass))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this._handleGlobalClick),this._templateService&&this._templateService.unsubscribeAllTemplates()}updated(e){super.updated(e),e.has("hass")&&(!this._templateService&&this.hass?this._templateService=new Fe(this.hass):this._templateService&&this.hass&&this._templateService.updateHass(this.hass))}};hi.styles=c`
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
    .info-rows-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 0 16px;
      margin-top: 8px;
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
    .mini-bar-header .bar-actions ha-icon-button[title='Duplicate Entity'] ha-icon {
      transform: translateY(-4px);
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
    .feature-description-box {
      background-color: var(--secondary-background-color);
      border-left: 4px solid var(--info-color, var(--primary-color));
      padding: 12px 16px;
      margin: 12px 0;
      border-radius: 4px;
      font-size: 14px;
    }
    .feature-description-box.layout-info {
      background-color: rgba(var(--rgb-info-color, 3, 169, 244), 0.08);
      border-left-color: var(--info-color, #03a9f4);
    }
    .feature-title {
      display: flex;
      align-items: center;
      font-weight: 500;
      margin-bottom: 4px;
      color: var(--primary-text-color);
    }
    .feature-title ha-icon {
      margin-right: 8px;
      color: var(--info-color, var(--primary-color));
    }
    .feature-description {
      color: var(--primary-text-color);
      opacity: 0.9;
      line-height: 1.5;
    }
    .feature-description ul.compact-list {
      margin: 4px 0 8px 16px;
      padding: 0;
    }
    .feature-description ul.compact-list li {
      margin-bottom: 6px;
    }
    .feature-description .tip {
      display: flex;
      align-items: center;
      font-style: italic;
      margin-top: 4px;
      color: var(--primary-text-color);
      opacity: 0.9;
    }
    .feature-description .tip ha-icon {
      margin-right: 4px;
      color: var(--warning-color, #ffa726);
      --mdc-icon-size: 16px;
    }
    .feature-title.toggleable {
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      width: 100%;
      user-select: none;
    }
    .feature-title .toggle-icon {
      margin-left: auto;
    }
    .feature-description.collapsed {
      display: none;
    }
    .feature-description.expanded {
      display: block;
      animation: slideDown 0.2s ease-out;
    }
    .section-header.toggleable {
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      user-select: none;
    }
    .section-header .toggle-icon {
      color: var(--text-primary-color);
      transition: transform 0.2s ease;
    }
    .settings-content.collapsed {
      display: none;
    }
    .settings-content.expanded {
      display: flex;
      flex-direction: column;
      gap: 16px;
      animation: slideDown 0.2s ease-out;
    }
    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    /* Row header preview */
    .row-header-preview {
      background-color: var(--secondary-background-color);
      padding: 10px 16px;
      margin-bottom: 16px;
      border-radius: 8px;
      border: 1px dashed var(--divider-color);
    }
    .header-text {
      font-weight: 500;
    }

    /* Entity specific styles */
    .entity-settings-section {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .template-mode-container {
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
    }
    .template-mode-header {
      padding: 12px 16px;
      background-color: var(--secondary-background-color);
    }
    .template-mode-label {
      font-weight: 500;
      margin-bottom: 8px;
    }
    .template-mode-toggle {
      display: flex;
      align-items: center;
    }
    .template-mode-toggle ha-switch {
      margin-right: 8px;
    }
    .template-mode-toggle span {
      font-size: 0.9em;
    }
    .size-settings {
      margin-top: 16px;
      border: 1px solid var(--divider-color);
      border-radius: 8px;
      overflow: hidden;
    }
    .size-settings-header {
      padding: 12px 16px;
      background-color: var(--secondary-background-color);
      font-weight: 500;
    }
    .size-fields-container {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      padding: 16px;
    }
    .size-field {
      display: flex;
      flex-direction: column;
      flex: 1;
      min-width: 120px;
    }
    .size-label {
      font-size: 0.9em;
      margin-bottom: 4px;
      color: var(--secondary-text-color);
    }

    /* Color picker styling */
    .color-picker-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-bottom: 16px;
    }
    .color-picker-label {
      font-size: 0.9em;
      color: var(--secondary-text-color);
      font-weight: 500;
    }

    /* Migration notice styling */
    .migration-notice {
      margin: 16px;
      padding: 16px;
      border-radius: 8px;
      background-color: rgba(var(--rgb-warning-color, 255, 152, 0), 0.12);
      border-left: 4px solid var(--warning-color, #ff9800);
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }
    .migration-notice ha-icon {
      color: var(--warning-color, #ff9800);
      --mdc-icon-size: 24px;
      margin-top: 2px;
    }
    .migration-text {
      flex: 1;
    }
    .migration-title {
      font-weight: 500;
      margin-bottom: 8px;
    }
    .migration-description {
      font-size: 14px;
      margin-bottom: 16px;
      line-height: 1.4;
    }
    .migrate-button {
      --mdc-theme-primary: var(--warning-color, #ff9800);
    }

    /* Drag and drop styles */
    .mini-bar.dragging {
      opacity: 0.5;
      transform: scale(0.98);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      border: 1px dashed var(--primary-color);
      z-index: 10;
    }
    .mini-bar.drop-target {
      border: 2px dashed var(--primary-color);
      background-color: rgba(var(--rgb-primary-color), 0.1);
      transform: translateY(-2px);
    }
    .mini-bar-header:active {
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

    .template-mode-container ha-textarea,
    .template-mode-container .no-drag-textarea,
    .template-mode-container .no-drag-textarea textarea {
      user-select: text !important;
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
    }

    .mini-bar.dragging .template-mode-container {
      pointer-events: none;
    }

    .mini-bar .template-mode-container .no-drag-textarea {
      pointer-events: auto !important;
    }

    /* Ensure the parent draggable container doesn't interfere with textarea selection */
    .mini-bar[draggable='true'] .no-drag-textarea {
      cursor: text !important;
    }

    .no-drag-textarea::part(textarea) {
      cursor: text !important;
      user-select: text !important;
    }

    /* Textarea specific style overrides */
    ha-textarea,
    ha-textarea textarea,
    ha-textarea::shadow textarea,
    ha-textarea::-webkit-shadow textarea {
      user-select: text !important;
      -webkit-user-select: text !important;
      cursor: text !important;
      pointer-events: auto !important;
    }

    ha-textarea::part(input) {
      user-select: text !important;
      pointer-events: auto !important;
      cursor: text !important;
    }

    .template-mode-container ha-textarea {
      pointer-events: auto !important;
    }

    .template-mode-container {
      pointer-events: auto !important;
      position: relative;
      z-index: 5;
    }

    /* Prevent dragging when editing templates */
    .mini-bar.template-editing {
      cursor: default !important;
      pointer-events: auto !important;
      user-select: text !important;
      draggable: false !important;
    }

    /* This ensures that while in template mode, drag is fully disabled */
    .mini-bar.template-editing .drag-handle,
    .mini-bar.template-editing .mini-bar-header {
      pointer-events: none;
      cursor: default;
    }

    .mini-bar.template-editing .template-mode-container,
    .mini-bar.template-editing ha-textarea,
    .mini-bar.template-editing .template-mode-container * {
      pointer-events: auto !important;
      cursor: text;
      user-select: text !important;
    }

    /* Even stronger override to prevent dragging */
    .mini-bar.template-editing {
      cursor: default !important;
      pointer-events: auto !important;
      user-select: text !important;
      -webkit-user-drag: none !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
    }

    .mini-bar.template-editing::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      pointer-events: none;
    }

    .mini-bar.template-editing .template-mode-container {
      position: relative;
      z-index: 2;
    }

    /* This will disable ALL drag capabilities when in template mode */
    .template-editing [draggable] {
      -webkit-user-drag: none !important;
      -khtml-user-drag: none !important;
      -moz-user-drag: none !important;
      -o-user-drag: none !important;
      user-drag: none !important;
      draggable: false !important;
    }

    /* Template example styles */
    .template-example {
      pointer-events: auto !important;
      position: relative;
      z-index: 5;
    }

    .template-example-code {
      user-select: text !important;
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      cursor: text !important;
      pointer-events: auto !important;
      position: relative;
      z-index: 10;
      /* Prevent any drag behavior */
      -webkit-user-drag: none !important;
      -khtml-user-drag: none !important;
      -moz-user-drag: none !important;
      -o-user-drag: none !important;
      user-drag: none !important;
    }

    /* Override any parent drag styling when hovering over examples */
    .template-example:hover .template-example-code {
      background-color: rgba(0, 0, 0, 0.15) !important;
    }

    /* Ensure the examples container prevents drag */
    .template-mode-container .template-example {
      -webkit-user-drag: none !important;
      user-drag: none !important;
    }

    /* When hovering over template examples, show text cursor */
    .mini-bar:hover .template-example-code {
      cursor: text !important;
    }
  `,ai([ve({attribute:!1})],hi.prototype,"hass",void 0),ai([ve({attribute:!1})],hi.prototype,"config",void 0),ai([be()],hi.prototype,"_expandedInfoRow",void 0),ai([be()],hi.prototype,"_expandedInfoEntity",void 0),ai([be()],hi.prototype,"_activeInfoTabs",void 0),ai([be()],hi.prototype,"_rowSettingsExpanded",void 0),ai([be()],hi.prototype,"_draggedEntity",void 0),ai([be()],hi.prototype,"_dropTargetEntity",void 0),ai([be()],hi.prototype,"_isTemplateEditing",void 0),hi=ai([ue("info-tab")],hi);var mi=function(e,t,i,n){var o,a=arguments.length,r=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,i,r):o(t,i))||r);return a>3&&r&&Object.defineProperty(t,i,r),r};let ui=class extends he{constructor(){super(...arguments),this.activeTab="settings",this._highlightedSections=[],this._cropperActive=!1,this._cropperImage="",this._cropperTargetField="",this._vehicleCropExpanded=!1,this._actionCropExpanded=!1,this._showEntityList=!1,this._activeField="",this._entityFilter="",this._entities=[],this._editorVersion="1.2.0-debug"}setConfig(e){if(!e)throw new Error("Invalid configuration");if(this.config=Object.assign({vehicle_image_type:"default",status_image_type:"none",layout_type:"single",formatted_entities:!1,show_location:!0,show_mileage:!0,show_car_state:!0,show_info_icons:!0,help_highlight:!0,sections_order:["title","image","info"],bars:[],icon_rows:[]},e),this.config.sections_order&&!this.config.sections_order.includes("info")){const e=[...this.config.sections_order],t=e.indexOf("image");-1!==t?e.splice(t+1,0,"info"):e.unshift("info"),this.config.sections_order=e}this.config.section_styles||(this.config.section_styles={}),void 0===this.config.vehicle_image_width&&(this.config.vehicle_image_width=100),void 0===this.config.action_image_width&&(this.config.action_image_width=100),this._migrateToIndividualSections()}_migrateToIndividualSections(){if(!this.config.sections_order)return;let e=[...this.config.sections_order],t=!1;const i=e.indexOf("bars");if(-1!==i&&this.config.bars&&this.config.bars.length>0){const n=this.config.bars.map(((e,t)=>`bar_${t}`));e.splice(i,1,...n),t=!0}if(this.config.bars&&this.config.bars.length>0){const i=e.filter((e=>e.startsWith("bar_")));if(i.length<this.config.bars.length){const n=i.map((e=>parseInt(e.substring(4)))).sort(((e,t)=>e-t)),o=[];for(let e=0;e<this.config.bars.length;e++)n.includes(e)||o.push(`bar_${e}`);if(o.length>0){let a=-1;if(i.length>0){const t=`bar_${Math.max(...n)}`;a=e.indexOf(t)}else{const t=e.indexOf("info"),i=e.indexOf("icons");a=-1!==t?t:-1!==i?i-1:e.length-1}-1!==a&&(e.splice(a+1,0,...o),t=!0)}}}const n=e.indexOf("icons");if(-1!==n&&this.config.icon_rows&&this.config.icon_rows.length>0&&!e.some((e=>e.startsWith("icon_row_")))){const i=this.config.icon_rows.map((e=>`icon_row_${e.id}`));e.splice(n,1,...i),t=!0}t&&(this.config=Object.assign(Object.assign({},this.config),{sections_order:e}),this._fireConfigChanged())}async _handleFileUploadEvent(e){const{file:t,id:i,configKey:n}=e.detail;if(t)if(this.hass&&this.hass.auth&&this.hass.auth.data&&this.hass.auth.data.access_token)try{const o=await async function(e,t){var i;if(!t)throw console.error("[UPLOAD] Missing file."),new Error("No file provided for upload.");if(!(e&&e.auth&&e.auth.data&&e.auth.data.access_token))throw console.error("[UPLOAD] Missing Home Assistant authentication details."),new Error("Authentication details are missing.");const n=new FormData;n.append("file",t);let o="";o=e.connection&&"string"==typeof(null===(i=e.connection.options)||void 0===i?void 0:i.url)?e.connection.options.url.replace(/^ws/,"http"):"function"==typeof e.hassUrl?e.hassUrl():`${window.location.protocol}//${window.location.host}`;const a=`${o.replace(/\/$/,"")}/api/image/upload`;try{const t=await fetch(a,{method:"POST",headers:{Authorization:`Bearer ${e.auth.data.access_token}`},body:n});if(!t.ok){const e=await t.text();throw console.error(`[UPLOAD] Failed to upload image via ${a}: ${t.status} ${t.statusText}`,e),new Error(`Failed to upload image via ${a}: ${t.statusText}`)}const i=await t.json();if(!i||!i.id)throw console.error(`[UPLOAD] Invalid response from ${a}: missing id`,i),new Error(`Invalid response from ${a}: missing id`);return`/api/image/serve/${i.id}`}catch(e){throw console.error(`[UPLOAD] Error during fetch to ${a}:`,e),new Error(`Upload via ${a} failed: ${e instanceof Error?e.message:"Unknown network error"}`)}}(this.hass,t);if(i&&this.config.action_images){const e=this.config.action_images.findIndex((e=>e.id===i));if(-1!==e){const t=[...this.config.action_images.slice(0,e),Object.assign(Object.assign({},this.config.action_images[e]),{image:o}),...this.config.action_images.slice(e+1)];this._updateConfig({action_images:t})}else console.warn(`[UPLOAD EVENT] Action image with ID "${i}" not found.`),n&&this._updateConfig({[n]:o})}else n?this._updateConfig({[n]:o}):console.error("[UPLOAD EVENT] Event detail missing required ID or configKey.",e.detail)}catch(e){console.error("[UPLOAD EVENT] Upload failed:",e)}else console.error("[UPLOAD EVENT] Hass object appears invalid or missing auth!");else console.error("[UPLOAD EVENT] Missing file in event detail.",e.detail)}_getCleanConfig(){const e=Object.assign({},this.config);return e.section_styles&&(Object.keys(e.section_styles).forEach((t=>{const i=e.section_styles[t],n=i.marginTop||0,o=i.marginBottom||0;0===n&&0===o?delete e.section_styles[t]:(0===n&&delete i.marginTop,0===o&&delete i.marginBottom)})),0===Object.keys(e.section_styles).length&&delete e.section_styles),e.sections_columns&&0===Object.keys(e.sections_columns).length&&delete e.sections_columns,e}_updateConfig(e){this.config&&e&&(this.config=Object.assign(Object.assign({},this.config),e),this._fireConfigChanged())}_updateConfigFromEvent(e){e.stopPropagation();const t=e.detail.config;t&&this._updateConfig(t)}_fireConfigChanged(){this._configChangedTimeout&&clearTimeout(this._configChangedTimeout),this._configChangedTimeout=window.setTimeout((()=>{const e=this._getCleanConfig();Ze(this,"config-changed",{config:e})}),50)}_getFriendlyName(e){}_truncateText(e,t=15){}_generateUniqueId(){}_formatFieldName(e){}_getImageSchema(e){}_renderCropSliders(e){}_updateImageCrop(e,t,i){}_resetTitleSize(){}_t(e,t){}_fireForceGradientRefreshEvent(){this.dispatchEvent(new CustomEvent("force-gradient-refresh",{bubbles:!0,composed:!0,detail:{timestamp:Date.now()}})),document.dispatchEvent(new CustomEvent("force-card-update",{bubbles:!0,composed:!0}))}_forceSaveConfig(){setTimeout((()=>{this._fireConfigChanged()}),1e3)}_handleRequestTabChange(e){e.detail&&e.detail.tab&&(this.activeTab=e.detail.tab)}_getHighlightedSectionsForTab(e){var t,i,n;switch(e){case"settings":return["title","image"];case"info":return["info",...(null===(t=this.config.info_rows)||void 0===t?void 0:t.map((e=>`info_row_${e.id}`)))||[]];case"bars":return(null===(i=this.config.bars)||void 0===i?void 0:i.map(((e,t)=>`bar_${t}`)))||["bars"];case"icons":return(null===(n=this.config.icon_rows)||void 0===n?void 0:n.map((e=>`icon_row_${e.id}`)))||["icons"];default:return[]}}_updateHighlightedSections(){const e=new CustomEvent("highlight-sections",{detail:{sections:this._highlightedSections},bubbles:!0,composed:!0});this.dispatchEvent(e)}render(){var e;if(!this.config||!this.hass)return Y;const t=(null===(e=this.hass.locale)||void 0===e?void 0:e.language)||"en";return J`
      <div class="card-config">
        <div class="tabs">
          ${[{id:"settings",icon:"mdi:cog",labelKey:"editor.tabs.settings",defaultLabel:"Settings"},{id:"info",icon:"mdi:information-outline",labelKey:"editor.tabs.info",defaultLabel:"Info"},{id:"bars",icon:"mdi:chart-bar",labelKey:"editor.tabs.bars",defaultLabel:"Bars"},{id:"icons",icon:"mdi:apps",labelKey:"editor.tabs.icons",defaultLabel:"Icons"},{id:"customize",icon:"mdi:palette",labelKey:"editor.tabs.customize",defaultLabel:"Customize"},{id:"about",icon:"mdi:help-circle-outline",labelKey:"editor.tabs.about",defaultLabel:"About"}].map((e=>J`
              <div
                class="tab ${this.activeTab===e.id?"active":""}"
                @click=${()=>{this.activeTab=e.id,!1!==this.config.help_highlight&&(this._highlightedSections=this._getHighlightedSectionsForTab(e.id),this._updateHighlightedSections(),this._highlightTimeout&&clearTimeout(this._highlightTimeout),this._highlightTimeout=window.setTimeout((()=>{this.dispatchEvent(new CustomEvent("clear-highlight",{bubbles:!0,composed:!0})),this._highlightedSections=[]}),1e3))}}
                title=${$t(e.labelKey,t,e.defaultLabel)}
              >
                <ha-icon class="tab-icon" .icon=${e.icon}></ha-icon>
                <span class="tab-label">${$t(e.labelKey,t,e.defaultLabel)}</span>
              </div>
            `))}
        </div>

        ${"settings"===this.activeTab?J`
              <settings-tab
                .hass=${this.hass}
                .config=${this.config}
                @config-changed=${this._updateConfigFromEvent}
                @file-upload=${this._handleFileUploadEvent}
              ></settings-tab>
            `:""}
        ${"info"===this.activeTab?J`
              <info-tab
                .hass=${this.hass}
                .config=${this.config}
                @config-changed=${this._updateConfigFromEvent}
              ></info-tab>
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
        overflow-x: auto; /* Allow horizontal scrolling if tabs still overflow on very small screens */
        -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
        scrollbar-width: none; /* Hide scrollbar for Firefox */
      }

      /* Hide scrollbar for Chrome, Safari, and Opera */
      .tabs::-webkit-scrollbar {
        display: none;
      }

      .tab {
        flex: 1 1 auto; /* Allow tabs to shrink but also grow if space allows */
        min-width: 0; /* Prevent overflow issues with flex items */
        padding: 8px 12px; /* Adjusted padding */
        cursor: pointer;
        border-bottom: 2px solid transparent;
        margin-bottom: -1px; /* Align with border */
        color: var(--secondary-text-color);
        transition: all 0.2s ease;
        text-align: center;
        display: flex; /* For aligning icon and label */
        flex-direction: column; /* Stack icon and label vertically by default if both shown */
        align-items: center; /* Center content horizontally */
        justify-content: center; /* Center content vertically */
        white-space: nowrap; /* Prevent text wrapping that could break layout */
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

      .tab-icon {
        display: none; /* Hidden by default on larger screens */
        font-size: 24px; /* Default icon size */
        --mdc-icon-size: 24px;
      }

      .tab-label {
        display: inline; /* Shown by default on larger screens */
        font-size: 14px; /* Default label size */
      }

      /* Responsive styles for tabs */
      @media (max-width: 768px) {
        .tabs {
          justify-content: space-around; /* Distribute icons more evenly */
        }
        .tab {
          padding: 8px; /* Reduce padding for smaller screens */
          min-width: 50px; /* Ensure tabs have a minimum width for touch targets */
          flex-grow: 0; /* Prevent icons from growing too much */
        }
        .tab-icon {
          display: inline-block; /* Show icons on smaller screens */
        }
        .tab-label {
          display: none; /* Hide text labels on smaller screens */
        }
      }

      /* Styles for content sections previously in this file */
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
    `}firstUpdated(){super.firstUpdated(),this.addEventListener("request-tab-change",this._handleRequestTabChange),this._refreshEntityList(),this._highlightedSections=this._getHighlightedSectionsForTab(this.activeTab),this._updateHighlightedSections(),setTimeout((()=>{this._migrateToIndividualSections(),this._forceSaveConfig()}),100),document.addEventListener("click",(e=>{var t;(null===(t=this.shadowRoot)||void 0===t?void 0:t.contains(e.target))||(this._showEntityList=!1)})),this._loadCropperJS()}_refreshEntityList(){}_onEntityInputChange(e){}_onEntityFocus(e,t){}_getFilteredEntities(){}_selectEntity(e,t){}async _loadCropperJS(){}_renderImageCropper(){}_applyCrop(){}updated(e){}};mi([ve({attribute:!1})],ui.prototype,"hass",void 0),mi([ve()],ui.prototype,"config",void 0),mi([be()],ui.prototype,"activeTab",void 0),mi([be()],ui.prototype,"_highlightedSections",void 0),mi([be()],ui.prototype,"_cropperActive",void 0),mi([be()],ui.prototype,"_cropperImage",void 0),mi([be()],ui.prototype,"_cropperTargetField",void 0),mi([be()],ui.prototype,"_vehicleCropExpanded",void 0),mi([be()],ui.prototype,"_actionCropExpanded",void 0),mi([be()],ui.prototype,"_showEntityList",void 0),mi([be()],ui.prototype,"_activeField",void 0),mi([be()],ui.prototype,"_entityFilter",void 0),mi([be()],ui.prototype,"_entities",void 0),ui=mi([ue("ultra-vehicle-card-editor")],ui),window.customCards=window.customCards||[],window.customCards.push({type:"ultra-vehicle-card",name:"Ultra Vehicle Card",description:"A card that displays vehicle information with fuel/charge level, range, location, mileage, and a customizable icon grid.",preview:!0,documentationURL:"https://github.com/WJDDesigns/Ultra-Vehicle-Card",version:Ee})})();