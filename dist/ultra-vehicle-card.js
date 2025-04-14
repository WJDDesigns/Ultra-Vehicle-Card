/*! For license information please see ultra-vehicle-card.js.LICENSE.txt */
(()=>{"use strict";var e={381:(e,t,i)=>{async function o(e,t){var i;try{console.log("[IMAGE UPLOAD DEBUG] Starting upload for file:",t.name,"size:",t.size);try{const i=new FormData;i.append("file",t),console.log("[IMAGE UPLOAD DEBUG] Attempting upload to /api/local_file/upload");const o=await fetch("/api/local_file/upload",{method:"POST",headers:{Authorization:`Bearer ${e.auth.data.access_token}`},body:i});if(console.log("[IMAGE UPLOAD DEBUG] First attempt response status:",o.status,o.statusText),o.ok){const e=await o.json();return console.log("[IMAGE UPLOAD DEBUG] Upload successful:",e),{path:e.path||`/local/${t.name}`,file_id:"",success:!0}}throw new Error(`First attempt failed: ${o.statusText}`)}catch(o){console.log("[IMAGE UPLOAD DEBUG] First upload method failed, trying second method...",o);try{const i=new FormData;i.append("file",t),console.log("[IMAGE UPLOAD DEBUG] Attempting upload to /api/image/upload");const o=await fetch("/api/image/upload",{method:"POST",headers:{Authorization:`Bearer ${e.auth.data.access_token}`},body:i});if(console.log("[IMAGE UPLOAD DEBUG] Second attempt response status:",o.status,o.statusText),o.ok){const e=await o.json();if(console.log("[IMAGE UPLOAD DEBUG] Upload successful:",e),e.id&&!e.path){const t=`/api/image/serve/${e.id}`;return console.log("[IMAGE UPLOAD DEBUG] Constructed path from ID:",t),{path:t,file_id:e.id,success:!0}}return{path:e.path||"",file_id:e.id||"",success:!0}}throw new Error(`Second attempt failed: ${o.statusText}`)}catch(o){console.log("[IMAGE UPLOAD DEBUG] Second upload method failed, trying final method...",o);const a=new FormData;a.append("file",t);const n=`/api/media_source/upload_media?media_content_id=${encodeURIComponent("media-source://media_source/local/")}`;console.log("[IMAGE UPLOAD DEBUG] Attempting final upload to:",n);const r=await fetch(n,{method:"POST",headers:{Authorization:`Bearer ${e.auth.data.access_token}`},body:a});if(console.log("[IMAGE UPLOAD DEBUG] Final attempt response status:",r.status,r.statusText),!r.ok)throw new Error(`All upload methods failed: ${r.statusText}`);const s=await r.json();console.log("[IMAGE UPLOAD DEBUG] Upload successful with final method:",s);let l="";return l=(null===(i=s.path)||void 0===i?void 0:i.startsWith("media-source://media_source/local/"))?"/local/"+s.path.replace("media-source://media_source/local/",""):s.path||`/local/${t.name}`,{path:l,file_id:"",success:!0}}}}catch(e){return console.error("[IMAGE UPLOAD DEBUG] All upload methods failed:",e),{path:"",file_id:"",success:!1,error:e instanceof Error?e.message:"Unknown error occurred"}}}function a(e,t){if(!t)return"";if(t.startsWith("http"))return t;if(t.startsWith("data:image/"))return t;if(t.includes("/api/image/serve/")){const i=t.match(/\/api\/image\/serve\/([^\/]+)/);if(i&&i[1]){const o=i[1];try{return`${e.hassUrl?e.hassUrl():""}api/image/serve/${o}/original`}catch(e){return console.error("Error generating authenticated URL:",e),t}}}const i=t.replace(/^\/+/,"");let o="";if(i.startsWith("local/")||t.includes("/local/"))o=`${e.hassUrl?e.hassUrl():""}/local/${i.replace(/^local\//,"")}`;else try{o=`${e.hassUrl?e.hassUrl():""}/api/image/serve/${i}/original`}catch(t){console.error("Error generating authenticated URL, falling back:",t),o=`${e.hassUrl?e.hassUrl():""}/api/image/serve/${i}`}return o}i.d(t,{V:()=>a,uploadImage:()=>o})}},t={};function i(o){var a=t[o];if(void 0!==a)return a.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,i),n.exports}i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);const o=globalThis,a=o.ShadowRoot&&(void 0===o.ShadyCSS||o.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;class s{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(a&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}}const l=(e,...t)=>{const i=1===e.length?e[0]:t.reduce(((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1]),e[0]);return new s(i,e,n)},c=(e,t)=>{if(a)e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const i of t){const t=document.createElement("style"),a=o.litNonce;void 0!==a&&t.setAttribute("nonce",a),t.textContent=i.cssText,e.appendChild(t)}},d=a?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new s("string"==typeof e?e:e+"",void 0,n))(t)})(e):e,{is:p,defineProperty:h,getOwnPropertyDescriptor:g,getOwnPropertyNames:u,getOwnPropertySymbols:m,getPrototypeOf:f}=Object,v=globalThis,_=v.trustedTypes,b=_?_.emptyScript:"",y=v.reactiveElementPolyfillSupport,x=(e,t)=>e,w={toAttribute(e,t){switch(t){case Boolean:e=e?b:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},$=(e,t)=>!p(e,t),I={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:$};Symbol.metadata??=Symbol("metadata"),v.litPropertyMetadata??=new WeakMap;class k extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=I){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&h(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:a}=g(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return o?.call(this)},set(t){const n=o?.call(this);a.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??I}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;const e=f(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){const e=this.properties,t=[...u(e),...m(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(d(e))}else void 0!==e&&t.push(d(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EC(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const a=(void 0!==i.converter?.toAttribute?i.converter:w).toAttribute(t,i.type);this._$Em=e,null==a?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:w;this._$Em=o,this[o]=a.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,i){if(void 0!==e){if(i??=this.constructor.getPropertyOptions(e),!(i.hasChanged??$)(this[e],t))return;this.P(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$ET())}P(e,t,i){this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e)!0!==i.wrapped||this._$AL.has(t)||void 0===this[t]||this.P(t,this[t],i)}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach((e=>e.hostUpdate?.())),this.update(t)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach((e=>this._$EC(e,this[e]))),this._$EU()}updated(e){}firstUpdated(e){}}k.elementStyles=[],k.shadowRootOptions={mode:"open"},k[x("elementProperties")]=new Map,k[x("finalized")]=new Map,y?.({ReactiveElement:k}),(v.reactiveElementVersions??=[]).push("2.0.4");const S=globalThis,C=S.trustedTypes,E=C?C.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",T=`lit$${Math.random().toFixed(9).slice(2)}$`,D="?"+T,z=`<${D}>`,R=document,O=()=>R.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,L=Array.isArray,P="[ \t\n\f\r]",B=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,j=/>/g,M=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),F=/'/g,G=/"/g,V=/^(?:script|style|textarea|title)$/i,W=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),H=W(1),q=(W(2),W(3),Symbol.for("lit-noChange")),J=Symbol.for("lit-nothing"),K=new WeakMap,X=R.createTreeWalker(R,129);function Y(e,t){if(!L(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const Z=(e,t)=>{const i=e.length-1,o=[];let a,n=2===t?"<svg>":3===t?"<math>":"",r=B;for(let t=0;t<i;t++){const i=e[t];let s,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===B?"!--"===l[1]?r=N:void 0!==l[1]?r=j:void 0!==l[2]?(V.test(l[2])&&(a=RegExp("</"+l[2],"g")),r=M):void 0!==l[3]&&(r=M):r===M?">"===l[0]?(r=a??B,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,s=l[1],r=void 0===l[3]?M:'"'===l[3]?G:F):r===G||r===F?r=M:r===N||r===j?r=B:(r=M,a=void 0);const p=r===M&&e[t+1].startsWith("/>")?" ":"";n+=r===B?i+z:c>=0?(o.push(s),i.slice(0,c)+A+i.slice(c)+T+p):i+T+(-2===c?t:p)}return[Y(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class Q{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let a=0,n=0;const r=e.length-1,s=this.parts,[l,c]=Z(e,t);if(this.el=Q.createElement(l,i),X.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=X.nextNode())&&s.length<r;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(A)){const t=c[n++],i=o.getAttribute(e).split(T),r=/([.?@])?(.*)/.exec(t);s.push({type:1,index:a,name:r[2],strings:i,ctor:"."===r[1]?ae:"?"===r[1]?ne:"@"===r[1]?re:oe}),o.removeAttribute(e)}else e.startsWith(T)&&(s.push({type:6,index:a}),o.removeAttribute(e));if(V.test(o.tagName)){const e=o.textContent.split(T),t=e.length-1;if(t>0){o.textContent=C?C.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],O()),X.nextNode(),s.push({type:2,index:++a});o.append(e[t],O())}}}else if(8===o.nodeType)if(o.data===D)s.push({type:2,index:a});else{let e=-1;for(;-1!==(e=o.data.indexOf(T,e+1));)s.push({type:7,index:a}),e+=T.length-1}a++}}static createElement(e,t){const i=R.createElement("template");return i.innerHTML=e,i}}function ee(e,t,i=e,o){if(t===q)return t;let a=void 0!==o?i._$Co?.[o]:i._$Cl;const n=U(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),void 0===n?a=void 0:(a=new n(e),a._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=a:i._$Cl=a),void 0!==a&&(t=ee(e,a._$AS(e,t.values),a,o)),t}class te{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??R).importNode(t,!0);X.currentNode=o;let a=X.nextNode(),n=0,r=0,s=i[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new ie(a,a.nextSibling,this,e):1===s.type?t=new s.ctor(a,s.name,s.strings,this,e):6===s.type&&(t=new se(a,this,e)),this._$AV.push(t),s=i[++r]}n!==s?.index&&(a=X.nextNode(),n++)}return X.currentNode=R,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ie{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=J,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ee(this,e,t),U(e)?e===J||null==e||""===e?(this._$AH!==J&&this._$AR(),this._$AH=J):e!==this._$AH&&e!==q&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>L(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==J&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(R.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Q.createElement(Y(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new te(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Q(e)),t}k(e){L(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const a of e)o===t.length?t.push(i=new ie(this.O(O()),this.O(O()),this,this.options)):i=t[o],i._$AI(a),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class oe{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,a){this.type=1,this._$AH=J,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=J}_$AI(e,t=this,i,o){const a=this.strings;let n=!1;if(void 0===a)e=ee(this,e,t,0),n=!U(e)||e!==this._$AH&&e!==q,n&&(this._$AH=e);else{const o=e;let r,s;for(e=a[0],r=0;r<a.length-1;r++)s=ee(this,o[i+r],t,r),s===q&&(s=this._$AH[r]),n||=!U(s)||s!==this._$AH[r],s===J?e=J:e!==J&&(e+=(s??"")+a[r+1]),this._$AH[r]=s}n&&!o&&this.j(e)}j(e){e===J?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ae extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===J?void 0:e}}class ne extends oe{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==J)}}class re extends oe{constructor(e,t,i,o,a){super(e,t,i,o,a),this.type=5}_$AI(e,t=this){if((e=ee(this,e,t,0)??J)===q)return;const i=this._$AH,o=e===J&&i!==J||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,a=e!==J&&(i===J||o);o&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class se{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){ee(this,e)}}const le=S.litHtmlPolyfillSupport;le?.(Q,ie),(S.litHtmlVersions??=[]).push("3.2.1");class ce extends k{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let a=o._$litPart$;if(void 0===a){const e=i?.renderBefore??null;o._$litPart$=a=new ie(t.insertBefore(O(),e),e,void 0,i??{})}return a._$AI(e),a})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return q}}ce._$litElement$=!0,ce.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ce});const de=globalThis.litElementPolyfillSupport;de?.({LitElement:ce}),(globalThis.litElementVersions??=[]).push("4.1.1");const pe=e=>(t,i)=>{void 0!==i?i.addInitializer((()=>{customElements.define(e,t)})):customElements.define(e,t)},he={attribute:!0,type:String,converter:w,reflect:!1,hasChanged:$},ge=(e=he,t,i)=>{const{kind:o,metadata:a}=i;let n=globalThis.litPropertyMetadata.get(a);if(void 0===n&&globalThis.litPropertyMetadata.set(a,n=new Map),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const a=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,a,e)},init(t){return void 0!==t&&this.P(o,void 0,e),t}}}if("setter"===o){const{name:o}=i;return function(i){const a=this[o];t.call(this,i),this.requestUpdate(o,a,e)}}throw Error("Unsupported decorator location: "+o)};function ue(e){return(t,i)=>"object"==typeof i?ge(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,o?{...e,wrapped:!0}:e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function me(e){return ue({...e,state:!0,attribute:!1})}const fe="/hacsfiles/Ultra-Vehicle-Card/assets/default-car.png";var ve=i(381),_e=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};function be(e){if(!e||!Array.isArray(e)||0===e.length)return"";const t=e.filter((e=>e&&"string"==typeof e.color&&""!==e.color.trim()&&"number"==typeof e.position&&e.position>=0&&e.position<=100));if(0===t.length)return"";const i=[...t].sort(((e,t)=>e.position-t.position));return i.map((e=>`${e.color} ${e.position}%`)).join(", ")}function ye(e){const t=e.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);if(t)return{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)};const i=e.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);return i?{r:parseInt(i[1],10),g:parseInt(i[2],10),b:parseInt(i[3],10)}:null}let xe=class extends ce{constructor(){super(...arguments),this.stops=[],this.key=0,this._isDragging=!1,this._draggedStopId=null,this._lastRenderTime=0,this._boundPointerMove=this._handlePointerMove.bind(this),this._boundPointerUp=this._handlePointerUp.bind(this)}disconnectedCallback(){this.removeEventListener("pointermove",this._boundPointerMove),this.removeEventListener("pointerup",this._boundPointerUp),document.removeEventListener("pointermove",this._boundPointerMove),document.removeEventListener("pointerup",this._boundPointerUp),document.removeEventListener("pointercancel",this._boundPointerUp),super.disconnectedCallback()}_getProcessedStops(){var e,t;const i=(this.stops||[]).filter((e=>e&&"string"==typeof e.id&&"number"==typeof e.position&&"string"==typeof e.color)),o=[...i].sort(((e,t)=>e.position-t.position));return console.log("[GradientEditor] Processing stops array:",i.length===(null===(e=this.stops)||void 0===e?void 0:e.length)?"All stops are valid":`Found ${i.length} valid stops out of ${(null===(t=this.stops)||void 0===t?void 0:t.length)||0}`),o.length<2?(console.warn("[GradientEditor] Not enough valid stops, showing defaults with just boundary stops"),[{id:"default-start",position:0,color:"#ff0000"},{id:"default-end",position:100,color:"#00ff00"}]):o}updated(e){var t;if(super.updated(e),e.has("stops")||e.has("key")){const e=Date.now(),i=e-this._lastRenderTime;this._lastRenderTime=e,console.log(`[GradientEditor] Updated with ${(null===(t=this.stops)||void 0===t?void 0:t.length)||0} stops, key=${this.key}, time since last render: ${i}ms`),this._updateGradientPreview()}}_updateGradientPreview(){var e;try{const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".gradient-preview");if(t){const e=be(this._getProcessedStops());t.style.background=`linear-gradient(to right, ${e})`}}catch(e){console.error("[GradientEditor] Error updating gradient preview:",e)}}static get styles(){return l`
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
    `}render(){try{const e=this._getProcessedStops(),t=be(e);console.log(`[GradientEditor] Rendering ${e.length} stops with key ${this.key}`);const i=new Map;e.forEach((e=>{e&&"number"==typeof e.position&&i.set(e.id,e.position)}));const o=new Set,a=[...e].sort(((e,t)=>e.position-t.position));for(let e=0;e<a.length-1;e++){const t=a[e],i=a[e+1];i.position-t.position<10&&(o.add(t.id),o.add(i.id))}return H`
        <div class="gradient-container">
          <div
            class="gradient-preview"
            style="background: linear-gradient(to right, ${t})"
          ></div>
          ${e.map(((t,i)=>{if(!t||"number"!=typeof t.position||!t.id||!t.color)return H``;const a=0===t.position||100===t.position,n=this._isDragging&&this._draggedStopId===t.id,r=o.has(t.id)&&i%2==1?"calc(var(--gradient-height) + 10px + var(--handle-size) + 25px)":"calc(var(--gradient-height) + 10px + var(--handle-size) + 5px)",s=n?100:10+i;return H`
              <div
                class="stop-container ${n?"dragging":""}"
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
                  style="${a?"cursor: not-allowed;":""}${n?"cursor: grabbing;":""}"
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
      `}catch(e){return console.error("[GradientEditor] Error in render:",e),H`
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
      `}}_handleNativeColorChange(e,t){try{if(!(e&&e.target&&t&&t.id))return void console.warn("[GradientEditor] Invalid color change event or stop",e,t);e.stopPropagation();const i=e.target.value,o=new CustomEvent("stop-color-change",{detail:{stopId:t.id,newColor:i},bubbles:!0,composed:!0});this.dispatchEvent(o)}catch(e){console.error("[GradientEditor] Error in color change handler:",e)}}_handlePointerDown(e,t){var i;try{if(0===t.position||100===t.position)return;e.preventDefault();const o=null===(i=this.stops)||void 0===i?void 0:i.some((e=>(null==e?void 0:e.id)===(null==t?void 0:t.id)));if(!o)return void console.warn(`[GradientEditor] Cannot drag stop ${null==t?void 0:t.id} - it no longer exists in stops array`);const a=e.currentTarget;if(!a||!a.isConnected)return void console.warn("[GradientEditor] Cannot start drag - element is detached from DOM");if(!this.shadowRoot)return void console.warn("[GradientEditor] Cannot start drag - shadowRoot not available");try{a.setPointerCapture(e.pointerId)}catch(e){console.warn("[GradientEditor] Failed to set pointer capture:",e)}this._isDragging=!0,this._draggedStopId=t.id;try{a.addEventListener("pointermove",this._boundPointerMove),a.addEventListener("pointerup",this._boundPointerUp,{once:!0}),a.addEventListener("pointercancel",this._boundPointerUp,{once:!0})}catch(e){console.warn("[GradientEditor] Failed to add element event listeners:",e)}document.addEventListener("pointermove",this._boundPointerMove),document.addEventListener("pointerup",this._boundPointerUp,{once:!0}),document.addEventListener("pointercancel",this._boundPointerUp,{once:!0}),console.log(`[GradientEditor] PointerDown on stop ${t.id}`)}catch(t){console.error("[GradientEditor] Error in pointer down handler:",t),this._endDrag(e)}}_handlePointerMove(e){var t;try{if(!this._isDragging||!this._draggedStopId||!this.shadowRoot)return;e.preventDefault();const i=null===(t=this.stops)||void 0===t?void 0:t.find((e=>(null==e?void 0:e.id)===this._draggedStopId));if(!i)return console.warn(`[GradientEditor] Stop ${this._draggedStopId} no longer exists - canceling drag`),void this._endDrag(e);let o=this.shadowRoot.querySelector(".gradient-container"),a=null;if(o&&(a=Array.from(o.querySelectorAll(".stop-container")).find((e=>{var t;return(null===(t=null==e?void 0:e.dataset)||void 0===t?void 0:t.stopId)===this._draggedStopId}))||null),!o||!a||!a.isConnected)return console.warn("[GradientEditor] Could not find required elements during drag or stop container disconnected - canceling"),void this._endDrag(e);const n=o.getBoundingClientRect(),r=Math.min(99,Math.max(1,(e.clientX-n.left)/n.width*100)),s=Math.round(r);if(a.isConnected){const e=a;e.style.left=`${s}%`;const t=e.querySelector(".handle-position");t&&(t.textContent=`${s}%`)}this._updateDraggedStop(this._draggedStopId,s)}catch(t){console.error("[GradientEditor] Error in pointer move handler:",t),this._endDrag(e)}}_handlePointerUp(e){var t,i,o;try{if(!this._isDragging||!this._draggedStopId)return;e.preventDefault();const a=this._draggedStopId,n=null===(t=this.stops)||void 0===t?void 0:t.find((e=>(null==e?void 0:e.id)===a)),r=this._isDragging;if(this._endDrag(e),!n)return void console.warn(`[GradientEditor] Stop ${a} no longer exists after drag ended`);if(!r)return void console.log("[GradientEditor] Drag already ended, skipping pointer up logic.");let s=0,l=!1;if(this.shadowRoot){const t=this.shadowRoot.querySelector(".gradient-container");if(t){const i=t.getBoundingClientRect();i.width>0?(s=Math.min(99,Math.max(1,Math.round((e.clientX-i.left)/i.width*100))),l=!0,console.log(`[GradientEditor] Calculated final position from event: ${s}`)):console.warn("[GradientEditor] Gradient container has zero width, cannot calculate position from event.")}}if(!l&&this.shadowRoot){const e=Array.from(this.shadowRoot.querySelectorAll(".stop-container")).find((e=>{var t;return(null===(t=null==e?void 0:e.dataset)||void 0===t?void 0:t.stopId)===a}));if(e&&e.isConnected){const t=e.style.left;if(t){const e=parseFloat(t);isNaN(e)||(s=Math.round(e),l=!0,console.log(`[GradientEditor] Got final position from style: ${s}`))}}}if(!l){const e=null===(i=this.stops)||void 0===i?void 0:i.find((e=>(null==e?void 0:e.id)===a));if(!e||"number"!=typeof e.position)return void console.warn(`[GradientEditor] Could not determine final position for stop ${a}. Aborting update.`);s=e.position,console.log(`[GradientEditor] Using last known stop position as fallback: ${s}`),l=!0}s=Math.min(99,Math.max(1,s)),console.log(`[GradientEditor] Finalizing PointerUp for stop ${a}, final position: ${s}`);const c=null===(o=this.stops)||void 0===o?void 0:o.map((e=>(null==e?void 0:e.id)===a?Object.assign(Object.assign({},e),{position:s}):Object.assign({},e)));if(!c||!Array.isArray(c))return void console.error("[GradientEditor] Failed to create new stops array after drag.");const d=[...c].sort(((e,t)=>{var i,o;return(null!==(i=null==e?void 0:e.position)&&void 0!==i?i:0)-(null!==(o=null==t?void 0:t.position)&&void 0!==o?o:0)}));try{this.dispatchEvent(new CustomEvent("gradient-changed",{detail:{stops:d},bubbles:!0,composed:!0})),console.log("[GradientEditor] Dispatched gradient-changed event after pointer up finalized")}catch(e){console.error("[GradientEditor] Error dispatching gradient-changed event:",e)}}catch(t){console.error("[GradientEditor] Error in pointer up handler:",t),this._endDrag(e)}}_endDrag(e){try{if(!this._isDragging&&!this._draggedStopId)return;const t=this._isDragging,i=this._draggedStopId;if(this._isDragging=!1,this._draggedStopId=null,t&&console.log(`[GradientEditor] Ending drag for stop ${i}. Removing listeners.`),(null==e?void 0:e.currentTarget)&&void 0!==e.currentTarget.isConnected){const t=e.currentTarget;if(t.isConnected){try{e.pointerId&&t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId)}catch(e){console.warn("[GradientEditor] Error releasing pointer capture:",e)}try{t.removeEventListener("pointermove",this._boundPointerMove),t.removeEventListener("pointerup",this._boundPointerUp),t.removeEventListener("pointercancel",this._boundPointerUp)}catch(e){console.warn("[GradientEditor] Error removing element listeners:",e)}}}try{document.removeEventListener("pointermove",this._boundPointerMove),document.removeEventListener("pointerup",this._boundPointerUp),document.removeEventListener("pointercancel",this._boundPointerUp)}catch(e){console.warn("[GradientEditor] Error removing document listeners:",e)}requestAnimationFrame((()=>{this.isConnected&&this.requestUpdate()}))}catch(t){console.error("[GradientEditor] Error in _endDrag:",t);try{document.removeEventListener("pointermove",this._boundPointerMove),document.removeEventListener("pointerup",this._boundPointerUp),document.removeEventListener("pointercancel",this._boundPointerUp)}catch(e){console.warn("[GradientEditor] Error during fallback document listener removal in _endDrag catch block:",e)}this._isDragging=!1,this._draggedStopId=null}}_handleDeleteClick(e,t){e.stopPropagation(),t&&t.id?0!==t.position&&100!==t.position?!this.stops||this.stops.length<=2?console.warn("[GradientEditor] Cannot delete stop - minimum 2 stops required"):(this._isDragging&&this._draggedStopId===t.id&&(console.log(`[GradientEditor] Deleting stop ${t.id} which was being dragged. Ending drag first.`),this._endDrag(null)),console.log(`[GradientEditor] Attempting to delete stop with ID: ${t.id}`),console.log("[GradientEditor] Current stops:",JSON.stringify(this.stops)),this.dispatchEvent(new CustomEvent("gradient-stop-delete",{detail:{stopId:t.id},bubbles:!0,composed:!0}))):console.warn("[GradientEditor] Cannot delete boundary stops at 0% or 100%"):console.warn("[GradientEditor] Attempted to delete invalid stop:",t)}_handleAddStop(){this.dispatchEvent(new CustomEvent("gradient-stop-add",{bubbles:!0,composed:!0}))}_handleResetStops(){this.dispatchEvent(new CustomEvent("gradient-stop-reset",{bubbles:!0,composed:!0}))}_updateDraggedStop(e,t){var i;try{if(!e||"number"!=typeof t)return;const o=this.stops.map((i=>i.id===e?Object.assign(Object.assign({},i),{position:t}):i)),a=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".gradient-preview");if(a){const e=[...o].sort(((e,t)=>e.position-t.position)),t=be(e);t&&(a.style.background=`linear-gradient(to right, ${t})`)}}catch(e){console.error("[GradientEditor] Error updating dragged stop:",e)}}};_e([ue({type:Array})],xe.prototype,"stops",void 0),_e([ue({type:Number})],xe.prototype,"key",void 0),_e([me()],xe.prototype,"_isDragging",void 0),_e([me()],xe.prototype,"_draggedStopId",void 0),xe=_e([pe("gradient-editor")],xe);var we=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let $e=class extends ce{constructor(){super(...arguments),this._lastRenderTime=0,this._lastImageUrl=null,this._mapPopupData=null,this._handleConfigChanged=e=>{var t;const i=e;if(null===(t=i.detail)||void 0===t?void 0:t.config){this.config;const e=async()=>{var e;this.config=Object.assign({},i.detail.config),this._lastRenderTime=Date.now(),this.requestUpdate(),(null===(e=i.detail.config.bars)||void 0===e?void 0:e.some((e=>e.use_gradient)))&&(await new Promise((e=>setTimeout(e,50))),this._forceFullRender(),await new Promise((e=>setTimeout(e,100))),this.dispatchEvent(new CustomEvent("gradient-config-applied",{bubbles:!0,composed:!0,detail:{config:this.config}})))};e()}},this._entityStates=new Map,this._entityImageUrls=new Map}static getConfigElement(){return document.createElement("ultra-vehicle-card-editor")}static getStubConfig(){return{title:"Vehicle Title",title_alignment:"center",title_size:"24px",formatted_entities:!0,vehicle_image_type:"default"}}static get properties(){return{hass:{},config:{}}}static get styles(){return l`
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
        padding: var(--card-padding);
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
        margin-top: 8px;
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
        margin-top: 4px;
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
        pointer-events: none; /* Prevent image from capturing clicks intended for elements beneath */
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
            0 0 10px 3px rgba(52, 152, 219, 0.7),
            0 0 20px 6px rgba(52, 152, 219, 0.4);
          opacity: 0.7;
        }
        50% {
          box-shadow:
            0 0 20px 5px rgba(52, 152, 219, 0.9),
            0 0 40px 10px rgba(52, 152, 219, 0.6);
          opacity: 0.9;
        }
        100% {
          box-shadow:
            0 0 10px 3px rgba(52, 152, 219, 0.7),
            0 0 20px 6px rgba(52, 152, 219, 0.4);
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
        gap: 5px;
        cursor: pointer;
      }

      .bar-label.left {
        justify-content: flex-start;
      }

      .bar-label.right {
        justify-content: flex-end;
      }

      .label-title {
        font-size: 0.85em;
        opacity: 0.9;
        color: var(--secondary-text-color);
      }

      .label-value {
        font-size: 1em;
        font-weight: 500;
        color: var(--secondary-text-color);
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
    `}setConfig(e){if(!e)throw new Error("Invalid configuration");const t=this.config;this.config=Object.assign({},e),this._lastRenderTime=Date.now(),this.requestUpdate(),t&&this._checkForGradientOrAnimationChanges(t,this.config)&&this._forceFullRender()}_checkForGradientOrAnimationChanges(e,t){if(!e.bars||!t.bars)return!0;for(let i=0;i<Math.max(e.bars.length,t.bars.length);i++){const o=e.bars[i],a=t.bars[i];if(!o||!a)return!0;if(o.use_gradient!==a.use_gradient)return!0;if(o.gradient_display_mode!==a.gradient_display_mode)return!0;if(o.limit_entity!==a.limit_entity)return!0;if(o.limit_indicator_color!==a.limit_indicator_color)return!0;if(JSON.stringify(o.gradient_stops)!==JSON.stringify(a.gradient_stops))return!0;if(o.animation_type!==a.animation_type)return!0;if(o.animation_entity!==a.animation_entity)return!0;if(o.animation_state!==a.animation_state)return!0;if(o.action_animation!==a.action_animation)return!0;if(o.action_animation_entity!==a.action_animation_entity)return!0;if(o.action_animation_state!==a.action_animation_state)return!0}return!1}_forceFullRender(){this._lastRenderTime=Date.now(),this.requestUpdate(),setTimeout((()=>{this.shadowRoot&&this.shadowRoot.querySelectorAll(".progress-bar-fill").forEach((e=>{if(e instanceof HTMLElement){e.offsetHeight;const t=e.getAttribute("has-gradient"),i=e.getAttribute("data-mode");if("true"===t)if("full"===i)e.style.backgroundSize="100% 100%",e.style.backgroundPosition="0% 0%";else if("value_based"===i){const t=e.style.width;e.style.backgroundSize=`${t} 100%`}e.setAttribute("data-refreshed",String(this._lastRenderTime))}}))}),50)}render(){if(!this.config||!this.hass)return H``;const e=this.config.sections_order||["title","image","info","bars","icons"],t=this.config.layout_type||"single",i=this.config.sections_columns||{},o=this.config.section_styles||{},a=this.config.hidden_sections||[],n=e.filter((e=>!a.includes(e))),r=e=>{var t,i;const a=[];let n=0;for(;n<e.length;){const r=e[n],s=o[r]||{marginTop:0,marginBottom:0},l=`margin-top: ${s.marginTop||0}px; margin-bottom: ${s.marginBottom||0}px;`;if(r.startsWith("bar_")){const t=[];let i=l;for(;n<e.length&&e[n].startsWith("bar_");){const i=e[n],o=parseInt(i.substring(4));!isNaN(o)&&this.config.bars&&this.config.bars[o]&&t.push(this.config.bars[o]),t.length,n++}t.length>0&&a.push(H`<div class="bars-container" style="${i}">
                ${t.map((e=>this._renderBar(e)))}
              </div>`),n--}else if("bars"===r&&(null===(t=this.config.bars)||void 0===t?void 0:t.length))a.push(H`<div class="bars-container" style="${l}">
              ${this.config.bars.map((e=>this._renderBar(e)))}
            </div>`);else switch(r){case"title":const e=this.config.title_size||"24px";a.push(this.config.title?H`<h1
                      class="card-title ${this.config.title_alignment||"center"}"
                      style="font-size: ${e}px !important; line-height: 1.2; ${l}"
                    >
                      ${this.config.title}
                    </h1>`:H``);break;case"image":a.push(this._renderImage(l));break;case"info":a.push(this._renderVehicleInfo(l));break;case"icons":a.push(this._renderIconRows(l));break;default:if(r.startsWith("icon_row_")){const e=r.substring(9),t=null===(i=this.config.icon_rows)||void 0===i?void 0:i.find((t=>t.id===e));t&&a.push(H`<div class="icon-rows-container" style="${l}">
                      ${this._renderIconRow(t)}
                    </div>`)}}n++}return a};if("double"===t){const e=n.filter((e=>"right"!==i[e])),t=n.filter((e=>"right"===i[e]));return H`
        <ha-card>
          ${this.config.global_css?H`<style>
                :host { ${this.config.global_css} }
              </style>`:""}
          <div class="card-content two-column-layout">
            <div class="column left-column">${r(e)}</div>
            <div class="column right-column">${r(t)}</div>
          </div>
          ${this._renderMapPopup()}
        </ha-card>
      `}return H`
      <ha-card>
        ${this.config.global_css?H`<style>
              :host { ${this.config.global_css} }
            </style>`:""}
        <div class="card-content">${r(n)}</div>
        ${this._renderMapPopup()}
      </ha-card>
    `}_renderImage(e=""){var t,i,o;let a="",n="",r=!1;if(this.config.action_entity&&this.config.action_state&&(null===(t=this.hass.states[this.config.action_entity])||void 0===t?void 0:t.state)===this.config.action_state){const e=this.config.action_image_type;let t="";if("upload"===e&&this.config.action_image)t=(0,ve.V)(this.hass,this.config.action_image);else if("url"===e)t=this.config.action_image||"";else if("entity"===e&&this.config.action_image_entity){const e=this.config.action_image_entity,o=this.hass.states[e];(null===(i=null==o?void 0:o.attributes)||void 0===i?void 0:i.entity_picture)?this._entityImageUrls.has(e)?t=this._entityImageUrls.get(e)||"":(t=o.attributes.entity_picture,t.startsWith("/")&&(t=`${this.hass.hassUrl?this.hass.hassUrl():""}${t.startsWith("/")?t.substring(1):t}`)):t=(null==o?void 0:o.state)||""}else"default"===e&&(t=fe);t&&(a=t,n=this._computeImageStyle(this.config.action_image_width,this.config.action_image_crop),r=!0)}if(!r){const e=this.config.vehicle_image_type;if("upload"===e&&this.config.vehicle_image)a=(0,ve.V)(this.hass,this.config.vehicle_image);else if("url"===e)a=this.config.vehicle_image||"";else if("entity"===e&&this.config.vehicle_image_entity){const e=this.config.vehicle_image_entity,t=this.hass.states[e];(null===(o=null==t?void 0:t.attributes)||void 0===o?void 0:o.entity_picture)?this._entityImageUrls.has(e)?a=this._entityImageUrls.get(e)||"":(a=t.attributes.entity_picture,a.startsWith("/")&&(a=`${this.hass.hassUrl?this.hass.hassUrl():""}${a.startsWith("/")?a.substring(1):a}`)):a=(null==t?void 0:t.state)||""}else"none"!==e&&(a=fe);a||"none"===this.config.vehicle_image_type||(a=window.location.href.includes("dashboards/edit")&&this._lastImageUrl&&"default"!==e?this._lastImageUrl:fe),n=this._computeImageStyle(this.config.vehicle_image_width,this.config.vehicle_image_crop)}return a&&a!==fe&&(this._lastImageUrl=a),a?H`
      <div class="vehicle-image-container" style="${e}">
        <img
          class="vehicle-image ${r?"action-image-active":""}"
          src="${a}"
          style="${n}"
          @error=${this._handleImageError}
        />
      </div>
    `:""}_formatValue(e,t){var i,o,a,n,r,s;if(!this.config.formatted_entities||!t||!this.hass.states[t])return e;if(t===this.config.mileage_entity){const a=parseFloat(e);if(!isNaN(a)){const e=Math.round(a),n=(null===(o=null===(i=this.hass.states[t])||void 0===i?void 0:i.attributes)||void 0===o?void 0:o.unit_of_measurement)||"";return`${e.toLocaleString()}${n?" "+n:""}`}}if(t===this.config.location_entity){const e=Object.keys(this.hass.states).filter((e=>e.startsWith("zone.")));for(const i of e){const e=this.hass.states[i],o=this.hass.states[t];if(e&&o&&e.attributes.latitude&&e.attributes.longitude&&o.attributes&&o.attributes.latitude&&o.attributes.longitude&&Math.abs(e.attributes.latitude-o.attributes.latitude)<1e-4&&Math.abs(e.attributes.longitude-o.attributes.longitude)<1e-4)return e.attributes.friendly_name||e.attributes.name||i.split(".")[1]}if(null===(n=null===(a=this.hass.states[t])||void 0===a?void 0:a.attributes)||void 0===n?void 0:n.formatted_address)return this.hass.states[t].attributes.formatted_address}const l=parseFloat(e);if(!isNaN(l)){const e=Math.round(l),i=(null===(s=null===(r=this.hass.states[t])||void 0===r?void 0:r.attributes)||void 0===s?void 0:s.unit_of_measurement)||"";return`${e.toLocaleString()}${i?" "+i:""}`}return e.replace(/_/g," ").replace(/\b\w/g,(e=>e.toUpperCase())).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}_handleImageError(e){const t=e.target;t.classList.add("image-error"),this._lastImageUrl&&t.src!==this._lastImageUrl?t.src=this._lastImageUrl:t.src=""}_renderBar(e){if(!e.entity)return H``;const t=this.hass.states[e.entity];if(!t)return H``;const i=parseFloat(t.state),o=isNaN(i)||"unavailable"===t.state||"unknown"===t.state?0:Math.max(0,Math.min(100,i));let a=null,n="";if(e.limit_entity){const t=this.hass.states[e.limit_entity];t&&!isNaN(parseFloat(t.state))&&(a=parseFloat(t.state),n=(r=e.limit_indicator_color||"#ff0000")?(r.startsWith("var(--"),r):"")}var r;const s=`bar-size-${e.bar_size||"regular"}`,l=(e.width,this._getBarAnimationClass(e)),c=e.gradient_stops||[],d=!0===e.use_gradient&&c.length>=2,p=d&&e.gradient_display_mode?e.gradient_display_mode:"value_based";let h;if(d){if("value_based"===p){const e=function(e,t){if(!e||!Array.isArray(e)||e.length<2)return"#ffffff";t=Math.max(0,Math.min(100,t));const i=[...e].sort(((e,t)=>e.position-t.position));let o=null,a=null;for(let e=0;e<i.length-1;e++)if(t>=i[e].position&&t<=i[e+1].position){o=i[e],a=i[e+1];break}if(!o||!a)return 0===i.length?"#ffffff":t<=i[0].position?i[0].color||"#ffffff":i[i.length-1].color||"#ffffff";const n=a.position-o.position,r=0===n?0:(t-o.position)/n,s=ye(o.color),l=ye(a.color);return s&&l?`rgb(${Math.round(s.r+r*(l.r-s.r))}, ${Math.round(s.g+r*(l.g-s.g))}, ${Math.round(s.b+r*(l.b-s.b))})`:o.color||"#ffffff"}(c,o);h=H`
          <div
            class="progress-bar-fill ${l}"
            data-use-gradient="true"
            has-gradient="true"
            data-mode="value_based"
            data-percentage="${o}"
            style="
              width: ${o}%;
              background-color: ${e};
            "
          >
            ${"animate-bubbles"===l?H`<span></span>`:""}
          </div>
        `}else if("full"===p){const e=function(e,t="to right"){const i=be(e);return i?`linear-gradient(${t}, ${i})`:""}(c);h=H`
          <div
            class="progress-bar-fill ${l}"
            data-use-gradient="true"
            has-gradient="true"
            data-mode="full"
            data-percentage="${o}"
            style="
              width: ${o}%;
              background-image: ${e};
              background-color: transparent;
              background-size: 100% 100%;
              background-position: 0% 0%;
              background-repeat: no-repeat;
            "
          >
            ${"animate-bubbles"===l?H`<span></span>`:""}
          </div>
        `}}else h=H`
        <div
          class="progress-bar-fill ${l}"
          data-gradient="disabled"
          has-gradient="false"
          data-percentage="${o}"
          style="background-color: ${e.bar_color||"#3498db"}; width: ${o}%;"
        >
          ${"animate-bubbles"===l?H`<span></span>`:""}
        </div>
      `;let g="100%";if(e.width&&"100"!==e.width){const t=parseInt(e.width);let i=0;50===t?i=4:25===t?i=6:75===t&&(i=2),g=`calc(${e.width}% - ${i}px)`}else g="100%";return H`
      <div
        class="progress-bar-wrapper"
        style="width: ${g};" /* Apply calculated width to wrapper */
      >
        <div
          class="progress-bar ${s}" /* Removed width class */
          style="background: ${e.background_color||"#121212"}; border-color: ${e.border_color||"#686868"}; width: 100%;" /* Bar takes full width of wrapper */
          @click=${()=>this._showMoreInfo(e.entity)}
        >
          ${h}
          ${null!==a?H`<div
                  class="limit-indicator"
                  style="left: ${a}%;
                       background-color: ${n};
                       box-shadow: 0 0 2px ${n};"
                ></div>`:""}
        </div>
        ${this._renderBarLabels(e)}
      </div>
    `}_getBarAnimationClass(e){let t="";const i=this._getEntityState(e.animation_entity),o=this._getEntityState(e.action_animation_entity);return e.animation_type&&(!e.animation_entity&&!e.animation_state||e.animation_entity&&e.animation_state&&i===e.animation_state)&&(t=`animate-${e.animation_type}`),e.action_animation&&e.action_animation_entity&&e.action_animation_state&&o===e.action_animation_state&&(t=`animate-${e.action_animation}`),t}_getEntityState(e){var t;if(e&&this.hass.states[e])return null===(t=this.hass.states[e])||void 0===t?void 0:t.state}_renderIconRows(e=""){const{icon_rows:t=[]}=this.config;return t&&0!==t.length?H`
      <div class="icon-rows-container" style="${e}">
        ${t.map((e=>this._renderIconRow(e)))}
      </div>
    `:H``}_renderIconRow(e){if(!e.icons||!e.icons.length)return H``;const t=e.width||"100",i=e.alignment||"space-between",o=e.spacing||"medium";return H`
      <div class="icon-row ${`align-${i}`}" style="width: ${t}%; gap: ${{none:"0",small:"8px",medium:"16px",large:"24px"}[o]||"16px"};">
        ${e.icons.map((e=>this._renderCardIcon(e)))}
      </div>
    `}_renderCardIcon(e){if(!e.entity)return H``;const t=this.hass.states[e.entity];if(!t)return H``;let i=!1,o=!1,a="",n="";if(e.active_template_mode&&e.active_template){i=this._evaluateTemplate(e.active_template),o=!0;const t=e.active_template.match(/{{[\s]*is_state\(['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)[\s]*}}/i);t&&i&&(a=t[1],n=t[2]);const r=e.active_template.match(/{{[\s]*states\(['"]([^'"]+)['"]\)[\s]*==[\s]*['"]([^'"]+)['"]\s*}}/i);r&&i&&(a=r[1],n=r[2])}else if(e.inactive_template_mode&&e.inactive_template){i=!this._evaluateTemplate(e.inactive_template),o=!0;const t=e.inactive_template.match(/{{[\s]*is_state\(['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)[\s]*}}/i);t&&!i&&(a=t[1],n=t[2]);const r=e.inactive_template.match(/{{[\s]*states\(['"]([^'"]+)['"]\)[\s]*==[\s]*['"]([^'"]+)['"]\s*}}/i);r&&!i&&(a=r[1],n=r[2])}else i=!(!e.active_state||t.state!==e.active_state)||(!e.inactive_state||t.state!==e.inactive_state)&&(e.inactive_state?t.state!==e.inactive_state:"on"===t.state||"true"===t.state||Number(t.state)>0);const r=t.attributes.icon||null,s=i&&e.icon_active?e.icon_active:!i&&e.icon_inactive?e.icon_inactive:r||"mdi:help-circle-outline",l=i&&e.color_active?e.color_active:e.color_inactive,c=e.name||t.attributes.friendly_name||"";let d=t.state;const p=t.attributes.unit_of_measurement;if(o&&n&&(d=n,a&&a!==e.entity&&this.hass.states[a])&&this.hass.states[a].state===n&&(d=n),this.config.formatted_entities&&d)if(isNaN(Number(d)))d=d.replace(/_/g," ").replace(/\b\w/g,(e=>e.toUpperCase()));else{const e=Number(d);(Math.abs(e)>=1e3||e%1!=0)&&(d=e.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:0}))}if(d&&e.show_state){const i=t.attributes.prefix||"",o=t.attributes.suffix||"";p&&e.show_units&&(d=`${d} ${p}`),d=`${i}${d}${o}`}const h=e.icon_size?isNaN(Number(e.icon_size))&&"string"==typeof e.icon_size&&(e.icon_size.endsWith("px")||e.icon_size.endsWith("em")||e.icon_size.endsWith("%"))?e.icon_size:`${e.icon_size}px`:"24px",g=e.text_size?isNaN(Number(e.text_size))&&"string"==typeof e.text_size&&(e.text_size.endsWith("px")||e.text_size.endsWith("em")||e.text_size.endsWith("%"))?e.text_size:`${e.text_size}px`:"14px",u=(()=>{if(!e.icon_background||"none"===e.icon_background)return"";let t=24;if("string"==typeof h){const e=h.match(/^(\d+)/);e&&(t=parseInt(e[1],10))}else"number"==typeof h&&(t=h);const i=t+16;let o=`\n        background-color: ${e.icon_background_color||"var(--secondary-background-color)"};\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: ${i}px;\n        height: ${i}px;\n      `;switch(e.icon_background){case"circle":o+="border-radius: 50%;";break;case"square":o+="border-radius: 0;";break;case"rounded-square":o+=`border-radius: ${Math.max(4,.15*i)}px;`}return o})(),m=i&&!1!==e.show_icon_active||!i&&!1!==e.show_icon_inactive,f=e.text_position||"bottom",v={bottom:"column",top:"column-reverse",left:"row-reverse",right:"row"}[f]||"column",_={"flex-start":"flex-start",center:"center","flex-end":"flex-end"}[e.vertical_alignment||"center"]||"center",b=e.text_alignment||"center",y="left"===b?"flex-start":"right"===b?"flex-end":"center",x=(()=>{if(!e.container_background||"none"===e.container_background)return"";let t=`\n        background-color: ${e.container_background_color||"var(--secondary-background-color)"};\n        padding: ${"left"===f||"right"===f?"4px 12px":"8px"}; /* Adjusted padding based on layout direction */\n        display: inline-flex; /* Ensure container wraps content */\n        align-items: ${_};\n        justify-content: center;\n      `;switch(e.container_background){case"circle":t+="border-radius: 50%;";break;case"square":t+="border-radius: 0;";break;case"rounded-square":t+="border-radius: 8px;"}return t})();return H`
      <div
        class="icon-outer-container" /* New outer container for background */
        style="${x}${e.container_width?`width: ${e.container_width}%;`:""}"
        @click=${()=>{this._handleIconClick(e)}}
      >
        <div
          class="icon-container ${"draggable"}"
          style="flex-direction: ${v}; align-items: ${_};"
          draggable="${!0}"
          @dragstart=${this._handleDragStart}
          @dragend=${this._handleDragEnd}
        >
          ${e.icon_background&&"none"!==e.icon_background?H`
                  ${m?H`<div class="icon-background" style="${u}">
                        <ha-icon
                          .icon="${s}"
                          style="color: ${l||"var(--primary-text-color)"}; font-size: ${h}; --mdc-icon-size: ${h};"
                        ></ha-icon>
                      </div>`:""}
                `:H`
                  ${m?H`<ha-icon
                        .icon="${s}"
                        style="color: ${l||"var(--primary-text-color)"}; font-size: ${h}; --mdc-icon-size: ${h};"
                      ></ha-icon>`:""}
                `}
          <div style="display: flex; flex-direction: column; align-items: ${y}; width: 100%;">
            ${!1!==e.show_name?H`<div
                    class="icon-label"
                    style="font-size: ${g}; text-align: ${b}; /* REMOVE MARGIN */ color: ${i?e.name_color_active||"var(--primary-text-color)":e.name_color_inactive||"var(--primary-text-color)"};"
                  >
                    ${c}
                  </div>`:""}
            ${e.show_state?H`<div
                    class="icon-state"
                    style="font-size: ${g}; text-align: ${b}; /* REMOVE MARGIN */ color: ${i?e.state_color_active||"var(--primary-text-color)":e.state_color_inactive||"var(--secondary-text-color)"};"
                  >
                    ${d}
                  </div>`:""}
          </div>
        </div>
      </div>
    `}_handleIconClick(e){if(e.entity&&e.on_click_action)switch(e.on_click_action){case"toggle":const t=e.entity.split(".")[0];this.hass.callService(t,"toggle",{entity_id:e.entity});break;case"more-info":const i=new CustomEvent("hass-more-info",{detail:{entityId:e.entity},bubbles:!0,composed:!0});this.dispatchEvent(i);break;case"navigate":if(e.navigation_path){const t=new CustomEvent("location-changed",{detail:{replace:!1},bubbles:!0,composed:!0});window.history.pushState(null,"",e.navigation_path),this.dispatchEvent(t)}break;case"show-map":case"location-map":this._openLocationMap(e.entity)}}_openLocationMap(e){const t=this.hass.states[e];if(!t)return void this._showMoreInfo(e);const i=t.attributes;let o,a;if(void 0!==i.latitude&&void 0!==i.longitude)o=i.latitude,a=i.longitude;else if(void 0!==i.Location)if(Array.isArray(i.Location)){if(i.Location.length>=2){const e=parseFloat(i.Location[0]),t=parseFloat(i.Location[1]);isNaN(e)||isNaN(t)||(o=e,a=t)}}else if("string"==typeof i.Location){const e=i.Location.split(",").map((e=>parseFloat(e.trim())));2!==e.length||isNaN(e[0])||isNaN(e[1])||(o=e[0],a=e[1])}void 0!==o&&void 0!==a?this._mapPopupData={latitude:o,longitude:a,title:i.friendly_name||e}:this._showMoreInfo(e)}_handleDragStart(e){e.dataTransfer&&(e.dataTransfer.setData("text/plain","dragging-icon"),e.target instanceof HTMLElement&&(e.target.style.opacity="0.5"))}_handleDragEnd(e){e.target instanceof HTMLElement&&(e.target.style.opacity="1")}_hexToRgb(e){const t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;if(t.test(e)){const i=t.exec(e);if(i)return{r:parseInt(i[1]+i[1],16),g:parseInt(i[2]+i[2],16),b:parseInt(i[3]+i[3],16)}}const i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(i)return{r:parseInt(i[1],16),g:parseInt(i[2],16),b:parseInt(i[3],16)};const o=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d\.]+)?\)$/i.exec(e);return o?{r:parseInt(o[1],10),g:parseInt(o[2],10),b:parseInt(o[3],10)}:null}_renderVehicleInfo(e=""){const t=!1!==this.config.show_location&&this.config.location_entity&&void 0!==this.hass.states[this.config.location_entity],i=!1!==this.config.show_mileage&&this.config.mileage_entity&&void 0!==this.hass.states[this.config.mileage_entity],o=!1!==this.config.show_car_state&&this.config.car_state_entity&&void 0!==this.hass.states[this.config.car_state_entity];if(!t&&!i&&!o)return H``;const a=t?this._formatValue(this.hass.states[this.config.location_entity].state,this.config.location_entity):"",n=i?this._formatValue(this.hass.states[this.config.mileage_entity].state,this.config.mileage_entity):"",r=o?this._formatValue(this.hass.states[this.config.car_state_entity].state,this.config.car_state_entity):"";return H`
      <div class="vehicle-info-container" style="${e}">
        <div class="vehicle-info-top">
          ${t?H`
                <div
                  class="info-item-with-icon"
                  @click=${()=>this._showMoreInfo(this.config.location_entity)}
                >
                  <ha-icon icon="mdi:map-marker"></ha-icon>
                  <span>${a}</span>
                </div>
              `:""}
          ${i?H`
                <div
                  class="info-item-with-icon"
                  @click=${()=>this._showMoreInfo(this.config.mileage_entity)}
                >
                  <ha-icon icon="mdi:speedometer"></ha-icon>
                  <span>${n}</span>
                </div>
              `:""}
        </div>

        ${o?H`
              <div
                class="info-item-status"
                @click=${()=>this._showMoreInfo(this.config.car_state_entity)}
                style="cursor: pointer;"
              >
                <span>${r}</span>
              </div>
            `:""}
      </div>
    `}_computeImageStyle(e,t){let i="";return void 0!==e&&(i+=`width: ${e}%; height: auto;`),t&&(i+=`\n        margin-top: ${t.top}px;\n        margin-right: ${t.right}px;\n        margin-bottom: ${t.bottom}px;\n        margin-left: ${t.left}px;\n        overflow: hidden;\n      `),i}_normalizeState(e){return e?e.toLowerCase().replace(/\s+/g,"_"):""}_renderBarLabels(e){var t,i;const o=!1!==e.show_left&&e.left_entity?this._formatValue(null===(t=this.hass.states[e.left_entity])||void 0===t?void 0:t.state,e.left_entity):"",a=!1!==e.show_right&&e.right_entity?this._formatValue(null===(i=this.hass.states[e.right_entity])||void 0===i?void 0:i.state,e.right_entity):"",n=e=>{var t,i;return e&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""},r=(e,t=15)=>e?e.length<=t?e:e.substring(0,t)+"...":"",s=e.left_title||(!1!==e.show_left&&e.left_entity?n(e.left_entity):""),l=e.right_title||(!1!==e.show_right&&e.right_entity?n(e.right_entity):""),c=e.alignment||"space-between",d=e.left_text_color||"var(--secondary-text-color)",p=e.right_text_color||"var(--secondary-text-color)",h=e.left_title_color||"var(--secondary-text-color)",g=e.right_title_color||"var(--secondary-text-color)",u=e.left_title_size?`${e.left_title_size}px`:"inherit",m=e.left_text_size?`${e.left_text_size}px`:"inherit",f=e.right_title_size?`${e.right_title_size}px`:"inherit",v=e.right_text_size?`${e.right_text_size}px`:"inherit";return H`
      <div class="bar-labels" style="justify-content: ${c};">
        ${!1!==e.show_left?H`
              <div
                class="bar-label left"
                @click=${()=>e.left_entity&&this._showMoreInfo(e.left_entity)}
              >
                ${s?H`<span
                      class="label-title"
                      style="color: ${h}; font-size: ${u};"
                      >${r(s)}:</span
                    >`:""}
                ${o?H`<span
                      class="label-value"
                      style="color: ${d}; font-size: ${m};"
                      >${o}</span
                    >`:""}
              </div>
            `:""}
        ${!1!==e.show_right?H`
              <div
                class="bar-label right"
                @click=${()=>e.right_entity&&this._showMoreInfo(e.right_entity)}
              >
                ${l?H`<span
                      class="label-title"
                      style="color: ${g}; font-size: ${f};"
                      >${r(l)}:</span
                    >`:""}
                ${a?H`<span
                      class="label-value"
                      style="color: ${p}; font-size: ${v};"
                      >${a}</span
                    >`:""}
              </div>
            `:""}
      </div>
    `}_showMoreInfo(e){const t=new CustomEvent("hass-more-info",{detail:{entityId:e},bubbles:!0,composed:!0});this.dispatchEvent(t)}connectedCallback(){super.connectedCallback(),this._setupRefreshInterval(),this.addEventListener("force-gradient-refresh",this._handleForceGradientRefresh),document.addEventListener("config-changed",this._handleConfigChanged),setTimeout((()=>{var e,t;(null===(t=null===(e=this.config)||void 0===e?void 0:e.bars)||void 0===t?void 0:t.some((e=>e.use_gradient)))&&this._forceFullRender()}),100),setTimeout((()=>{var e,t;(null===(t=null===(e=this.config)||void 0===e?void 0:e.bars)||void 0===t?void 0:t.some((e=>e.use_gradient)))&&this._forceFullRender()}),1e3)}disconnectedCallback(){super.disconnectedCallback(),this._refreshInterval&&(clearInterval(this._refreshInterval),this._refreshInterval=void 0),this.removeEventListener("force-gradient-refresh",this._handleForceGradientRefresh),document.removeEventListener("config-changed",this._handleConfigChanged)}_handleForceGradientRefresh(e){var t;const i=e;this._lastRenderTime=(null===(t=i.detail)||void 0===t?void 0:t.timestamp)||Date.now(),this._forceFullRender(),[10,25,50,100,500].forEach((e=>{setTimeout((()=>{this._lastRenderTime=Date.now(),this.requestUpdate(),this.dispatchEvent(new CustomEvent("gradient-update-complete",{bubbles:!0,composed:!0,detail:{timestamp:this._lastRenderTime,config:this.config}}))}),e)}))}_setupRefreshInterval(){this._refreshInterval&&clearInterval(this._refreshInterval),this._refreshInterval=window.setInterval((()=>{var e;(null===(e=this.config.bars)||void 0===e?void 0:e.some((e=>{const t=e.animation_entity||e.action_animation_entity,i=e.animation_state||e.action_animation_state,o=e.animation_type||e.action_animation;if(t&&i&&o&&"none"!==o){const e=this.hass.states[t];return e&&e.state===i}return!1})))&&(this._lastRenderTime=Date.now(),this.requestUpdate())}),1e3)}updated(e){var t,i,o,a,n,r,s,l,c;if(super.updated(e),e.has("config")||e.has("hass")){if(this._lastRenderTime=Date.now(),e.has("hass")){const d=e.get("hass");let p=!1;if("entity"===this.config.vehicle_image_type&&this.config.vehicle_image_entity){const e=this.config.vehicle_image_entity,n=null===(t=null==d?void 0:d.states[e])||void 0===t?void 0:t.state,r=null===(i=this.hass.states[e])||void 0===i?void 0:i.state;if(n!==r){if(this._entityStates.set(e,r||""),null===(a=null===(o=this.hass.states[e])||void 0===o?void 0:o.attributes)||void 0===a?void 0:a.entity_picture){let t=this.hass.states[e].attributes.entity_picture;t.startsWith("/")&&(t=`${this.hass.hassUrl?this.hass.hassUrl():""}${t.startsWith("/")?t.substring(1):t}`),this._entityImageUrls.set(e,`${t}${t.includes("?")?"&":"?"}state=${Date.now()}`)}p=!0}}if(this.config.action_entity&&this.config.action_state){const e=this.config.action_entity;if((null===(n=null==d?void 0:d.states[e])||void 0===n?void 0:n.state)!==(null===(r=this.hass.states[e])||void 0===r?void 0:r.state)&&"entity"===this.config.action_image_type&&this.config.action_image_entity){const e=this.config.action_image_entity;if(this._entityStates.set(e,(null===(s=this.hass.states[e])||void 0===s?void 0:s.state)||""),null===(c=null===(l=this.hass.states[e])||void 0===l?void 0:l.attributes)||void 0===c?void 0:c.entity_picture){let t=this.hass.states[e].attributes.entity_picture;t.startsWith("/")&&(t=`${this.hass.hassUrl?this.hass.hassUrl():""}${t.startsWith("/")?t.substring(1):t}`),this._entityImageUrls.set(e,`${t}${t.includes("?")?"&":"?"}state=${Date.now()}`)}p=!0}}p&&this.requestUpdate()}this.shadowRoot&&setTimeout((()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll(".progress-bar-fill");t&&t.length>0&&t.forEach((e=>{if(e instanceof HTMLElement){e.offsetHeight;const t=e.getAttribute("has-gradient"),i=e.getAttribute("data-mode");"true"===t&&("full"===i?(e.style.backgroundSize="100% 100%",e.style.backgroundPosition="0% 0%",e.style.backgroundRepeat="no-repeat"):"value_based"===i&&(e.style.backgroundImage="none"))}}))}),0)}}_evaluateTemplate(e){var t,i,o,a,n;try{const r=e.match(/{{[\s]*is_state\(['"]([^'"]+)['"]\s*,\s*['"]([^'"]+)['"]\s*\)[\s]*}}/i);if(r){const[e,i,o]=r;return(null===(t=this.hass.states[i])||void 0===t?void 0:t.state)===o}const s=e.match(/{{[\s]*states\.([^.]+)\.([^.}]+)(?:\.state)?[\s]*}}/i);if(s){const[e,t,o]=s,a=`${t}.${o}`,n=null===(i=this.hass.states[a])||void 0===i?void 0:i.state;return"on"===n||"1"===n||"true"===n||Number(n)>0}const l=e.match(/{{[\s]*states\(['"]([\w_.]+)['"]\)[\s]*}}/i);if(l){const[e,t]=l,i=null===(o=this.hass.states[t])||void 0===o?void 0:o.state;return"on"===i||"1"===i||"true"===i||Number(i)>0}const c=e.match(/{{[\s]*states\(['"]([^'"]+)['"]\)[\s]*==[\s]*['"]([^'"]+)['"]\s*}}/i);if(c){const[e,t,i]=c;return(null===(a=this.hass.states[t])||void 0===a?void 0:a.state)===i}const d=e.match(/{{[\s]*states\(['"]([^'"]+)['"]\)[\s]*==[\s]*'([^']+)'[\s]*}}/i);if(d){const[e,t,i]=d;return(null===(n=this.hass.states[t])||void 0===n?void 0:n.state)===i}return!1}catch(e){return!1}}_renderMapPopup(){if(!this._mapPopupData)return H``;const{latitude:e,longitude:t,title:i}=this._mapPopupData,o=this._getEntityForCoordinates(e,t);let a="",n="";if(n=this._formatCoordinates(e,t),o&&this.hass.states[o]){const e=this.hass.states[o],t=e.attributes;if(e.state&&!e.state.match(/^\d+\.\d+,\s*-?\d+\.\d+$/)&&e.state.length>5&&!e.state.match(/^(unavailable|unknown|none)$/i))a=e.state;else if(t.formatted_address)a=t.formatted_address;else{const e=[];t.Name&&e.push(String(t.Name)),t.Thoroughfare&&e.push(String(t.Thoroughfare)),t.Locality&&e.push(String(t.Locality)),t.Administrative_Area&&e.push(String(t.Administrative_Area)),t.Postal_Code&&e.push(String(t.Postal_Code)),t.Country&&e.push(String(t.Country)),e.length>0&&(a=e.join(", "))}}a||(a=n);const r=`https://www.google.com/maps?q=${e},${t}&z=15&output=embed`;return H`
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
    `}_formatCoordinates(e,t){return`${Math.abs(e).toFixed(6)}° ${e>=0?"N":"S"}, ${Math.abs(t).toFixed(6)}° ${t>=0?"E":"W"}`}_getEntityForCoordinates(e,t){for(const i in this.hass.states){const o=this.hass.states[i].attributes;if(o.latitude===e&&o.longitude===t)return i;if(Array.isArray(o.Location)&&o.Location.length>=2&&Math.abs(parseFloat(o.Location[0])-e)<1e-4&&Math.abs(parseFloat(o.Location[1])-t)<1e-4)return i}return null}_isDarkMode(){if(this.shadowRoot){const e=getComputedStyle(document.documentElement).getPropertyValue("--card-background-color").trim();if(e){const t=this._hexToRgb(e);if(t)return.299*t.r+.587*t.g+.114*t.b<128}}return!1}_closeMapPopup(){this._mapPopupData=null}};var Ie,ke,Se;we([ue({attribute:!1})],$e.prototype,"hass",void 0),we([ue()],$e.prototype,"config",void 0),we([me()],$e.prototype,"_mapPopupData",void 0),$e=we([pe("ultra-vehicle-card")],$e),(Se=Ie||(Ie={})).language="language",Se.system="system",Se.comma_decimal="comma_decimal",Se.decimal_comma="decimal_comma",Se.space_comma="space_comma",Se.none="none",function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ke||(ke={})),new Set(["fan","input_boolean","light","switch","group","automation"]);var Ce=function(e,t,i,o){o=o||{},i=null==i?{}:i;var a=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return a.detail=i,e.dispatchEvent(a),a};new Set(["call-service","divider","section","weblink","cast","select"]);var Ee=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Ae=class extends ce{static get styles(){return l`
      ha-entity-picker {
        width: 100%;
        display: block;
      }
    `}render(){return H`
      <ha-entity-picker
        .hass=${this.hass}
        .label=${this.label}
        .value=${this.value||""}
        .entityFilter=${this.entityFilter}
        @value-changed=${this._valueChanged}
        allow-custom-entity
      ></ha-entity-picker>
    `}_valueChanged(e){const t=e.detail.value;this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}};Ee([ue({attribute:!1})],Ae.prototype,"hass",void 0),Ee([ue()],Ae.prototype,"label",void 0),Ee([ue()],Ae.prototype,"value",void 0),Ee([ue()],Ae.prototype,"entityFilter",void 0),Ae=Ee([pe("ultra-entity-picker")],Ae);var Te=Number.isNaN||function(e){return"number"==typeof e&&e!=e};function De(e,t){if(e.length!==t.length)return!1;for(var i=0;i<e.length;i++)if(!((o=e[i])===(a=t[i])||Te(o)&&Te(a)))return!1;var o,a;return!0}function ze(e,t){void 0===t&&(t=De);var i=null;function o(){for(var o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];if(i&&i.lastThis===this&&t(o,i.lastArgs))return i.lastResult;var n=e.apply(this,o);return i={lastResult:n,lastArgs:o,lastThis:this},n}return o.clear=function(){i=null},o}var Re=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};let Oe=class extends ce{_getDisplayColor(e){var t;if(!e)return"#000000";if(e.startsWith("var(--")){const i=null===(t=e.match(/var\(([^,)]+)/))||void 0===t?void 0:t[1],o=e.match(/var\(--[\w-]+,\s*([^)]+)\)/);if(o&&o[1])return o[1].trim();if(i){if(i.includes("--text-primary-color"))return"#FFFFFF";if(i.includes("--primary-color"))return"#03A9F4";if(i.includes("--accent-color"))return"#FF9800";if(i.includes("--dark"))return"#121212";if(i.includes("--secondary-background-color"))return"#303030"}return"#FFFFFF"}return e}_colorChanged(e){e.stopPropagation();const t=e.target.value;console.log(`Color changed from ${this.value} to ${t}`),t!==this.value&&this.dispatchEvent(new CustomEvent("value-changed",{detail:{value:t},bubbles:!0,composed:!0}))}render(){const e=this._getDisplayColor(this.value);return H`
      ${this.label?H`<div class="color-picker-label">${this.label}</div>`:""}
      <div class="color-picker-row">
        <input
          type="color"
          .value=${e}
          @change=${this._colorChanged}
          class="color-input"
          aria-label=${this.label||"Color picker"}
        />
      </div>
    `}static get styles(){return l`
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
    `}};Re([ue()],Oe.prototype,"value",void 0),Re([ue()],Oe.prototype,"label",void 0),Oe=Re([pe("ultra-vehicle-color-picker")],Oe);var Ue=function(e,t,i,o){var a,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(n<3?a(r):n>3?a(t,i,r):a(t,i))||r);return n>3&&r&&Object.defineProperty(t,i,r),r};const Le=[{value:"none",label:"None"},{value:"default",label:"Default"},{value:"upload",label:"Upload"},{value:"url",label:"URL"},{value:"entity",label:"Entity"}],Pe=[{value:"single",label:"Single Column"},{value:"double",label:"Two Columns"}],Be=[{value:"thin",label:"Thin"},{value:"regular",label:"Regular"},{value:"thick",label:"Thick"},{value:"thiccc",label:"Extra Thick"}],Ne=[{value:"100",label:"100% (Full Width)"},{value:"75",label:"75% Width"},{value:"50",label:"50% Width"},{value:"25",label:"25% Width"}],je=[{value:"none",label:"None"},{value:"charging-lines",label:"Charging (Diagonal Lines)"},{value:"pulse",label:"Pulse"},{value:"blinking",label:"Blinking"},{value:"bouncing",label:"Bouncing"},{value:"glow",label:"Glow"},{value:"rainbow",label:"Rainbow"},{value:"bubbles",label:"Bubbles"},{value:"fill",label:"Fill"}],Me="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",Fe="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z",Ge={bar_color:"#3498db",background_color:"#e0e0e0",border_color:"#cccccc",left_title_color:"var(--text-primary-color, #777777)",left_text_color:"var(--text-primary-color, #000000)",right_title_color:"var(--text-primary-color, #777777)",right_text_color:"var(--text-primary-color, #000000)",limit_indicator_color:"#ff0000"},Ve={entity:"",left_title:"",left_entity:"",right_title:"",right_entity:"",bar_color:Ge.bar_color,background_color:Ge.background_color,border_color:Ge.border_color,left_title_color:Ge.left_title_color,left_text_color:Ge.left_text_color,right_title_color:Ge.right_title_color,right_text_color:Ge.right_text_color,limit_indicator_color:Ge.limit_indicator_color,left_title_size:14,left_text_size:14,right_title_size:14,right_text_size:14,bar_size:"regular",show_left:!0,show_right:!0,alignment:"space-between",width:"100",use_gradient:!1,gradient_display_mode:"value_based",gradient_stops:[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}],animation_entity:"",animation_state:"",animation_type:"none",action_animation_entity:"",action_animation_state:"",action_animation:"none"},We={vehicle_image_type:"none",status_image_type:"none",layout_type:"single",formatted_entities:!1,vehicle_image_width:100,action_image_width:100,title_size:22,show_units:!0,section_styles:{}},He=(ze((e=>{const t=[{name:"title",selector:{text:{}},label:"Card Title"},{name:"vehicle_image_type",selector:{select:{options:Le,mode:"dropdown"}},label:"Vehicle Image Type"},..."url"===e?[{name:"vehicle_image",selector:{text:{}},label:"Image URL"}]:[],..."entity"===e?[{name:"vehicle_image_entity",selector:{entity:{}},label:"Image Entity"}]:[],..."upload"===e?[{name:"vehicle_image_upload",selector:{text:{}},label:"Vehicle Image Upload",description:"Select an image to upload to Home Assistant"}]:[],{name:"layout_type",selector:{select:{options:Pe,mode:"dropdown"}},label:"Layout Style"},{name:"formatted_entities",selector:{boolean:{}},label:"Format Entities",description:"Clean up entity values by rounding numbers, replacing underscores with spaces, capitalizing words, and adding commas to large numbers."},{name:"show_units",selector:{boolean:{}},label:"Show Units of Measurement",description:"Display units, currencies, and other formatting from entity attributes."}];return t.push({type:"section",label:"Vehicle Information"},{name:"location_entity",selector:{entity:{}},label:"Location Entity",description:"Select the entity that provides the current location of your vehicle."},{name:"show_location",selector:{boolean:{}},label:"Show Location"},{name:"mileage_entity",selector:{entity:{}},label:"Mileage Entity",description:"Select the entity that represents the total mileage or odometer reading of your vehicle."},{name:"show_mileage",selector:{boolean:{}},label:"Show Mileage"},{name:"car_state_entity",selector:{entity:{}},label:"Car State Entity",description:"Select the entity that represents the current state of your vehicle (e.g., parked, driving, charging)."},{name:"show_car_state",selector:{boolean:{}},label:"Show Car State"}),t})),ze((e=>[{name:`bars.${e}.entity`,selector:{entity:{}},label:"Bar Percentage Entity",description:"Select an entity that returns a percentage value (0-100). This controls the fill of the bar."},{name:`bars.${e}.limit_entity`,selector:{entity:{}},label:"Limit Entity (optional)",description:"Optional: Add a limit indicator on the bar (e.g., charge limit for EV)."},{name:`bars.${e}.bar_size`,selector:{select:{options:Be,mode:"dropdown"}},label:"Bar Size",description:"Select the height of the progress bar."},{name:`bars.${e}.width`,selector:{select:{options:Ne,mode:"dropdown"}},label:"Bar Width",description:"Select the width of the bar. Multiple bars with partial widths will be placed side by side if possible."},{type:"section",label:"Left Side"},{name:`bars.${e}.left_title`,selector:{text:{}},label:"Left Title"},{name:`bars.${e}.left_entity`,selector:{entity:{}},label:"Left Entity"},{name:`bars.${e}.left_title_size`,selector:{number:{mode:"box",unit:"px"}},label:"Left Title Size",description:"Size of the left title text (default: 14px)."},{name:`bars.${e}.left_text_size`,selector:{number:{mode:"box",unit:"px"}},label:"Left Value Size",description:"Size of the left entity value text (default: 14px)."},{type:"section",label:"Right Side"},{name:`bars.${e}.right_title`,selector:{text:{}},label:"Right Title"},{name:`bars.${e}.right_entity`,selector:{entity:{}},label:"Right Entity"},{name:`bars.${e}.right_title_size`,selector:{number:{mode:"box",unit:"px"}},label:"Right Title Size",description:"Size of the right title text (default: 14px)."},{name:`bars.${e}.right_text_size`,selector:{number:{mode:"box",unit:"px"}},label:"Right Value Size",description:"Size of the right entity value text (default: 14px)."},{type:"section",label:"Colors"},{name:`bars.${e}.bar_color`,selector:{color_rgb:{}},label:"Bar Color",description:`Default: ${Ge.bar_color}`},{name:`bars.${e}.background_color`,selector:{color_rgb:{}},label:"Background Color",description:`Default: ${Ge.background_color}`},{name:`bars.${e}.border_color`,selector:{color_rgb:{}},label:"Border Color",description:`Default: ${Ge.border_color}`},{name:`bars.${e}.left_title_color`,selector:{color_rgb:{}},label:"Left Title Color",description:`Default: ${Ge.left_title_color}`},{name:`bars.${e}.left_text_color`,selector:{color_rgb:{}},label:"Left Value Color",description:`Default: ${Ge.left_text_color}`},{name:`bars.${e}.right_title_color`,selector:{color_rgb:{}},label:"Right Title Color",description:`Default: ${Ge.right_title_color}`},{name:`bars.${e}.right_text_color`,selector:{color_rgb:{}},label:"Right Value Color",description:`Default: ${Ge.right_text_color}`}])),[{value:"flex-start",label:"Left"},{value:"center",label:"Center"},{value:"flex-end",label:"Right"},{value:"space-between",label:"Space Between"},{value:"space-around",label:"Space Around"},{value:"space-evenly",label:"Space Evenly"}]),qe=[{value:"toggle",label:"Toggle Entity"},{value:"more-info",label:"Show More Info"},{value:"navigate",label:"Navigate Path"},{value:"url",label:"Open URL"},{value:"call-service",label:"Call Service"},{value:"perform-action",label:"Perform Action"},{value:"location-map",label:"Show Location Map"},{value:"assist",label:"Voice Assistant"},{value:"none",label:"No Action"}],Je=[{value:"bottom",label:"Bottom"},{value:"top",label:"Top"},{value:"left",label:"Left"},{value:"right",label:"Right"}],Ke=[{value:"flex-start",label:"Top"},{value:"center",label:"Center"},{value:"flex-end",label:"Bottom"}],Xe=[{value:"none",label:"None"},{value:"circle",label:"Circle"},{value:"square",label:"Square"},{value:"rounded-square",label:"Rounded Square"}],Ye=[{value:"100",label:"100% (Full Width)"},{value:"75",label:"75% Width"},{value:"50",label:"50% Width"},{value:"25",label:"25% Width"}];let Ze=class extends ce{constructor(){super(...arguments),this.activeTab="settings",this._showEntityList=!1,this._activeField="",this._entityFilter="",this._entities=[],this._expandedBar=null,this._preventExpandCollapse=!1,this._draggedBarIndex=null,this._dropTargetIndex=null,this._expandedIconRow=null,this._expandedIcon=null,this._draggedIconRow=null,this._draggedIcon=null,this._dropTargetRow=null,this._dropTargetIcon=null,this._cropperActive=!1,this._cropperImage="",this._cropperTargetField="",this._vehicleCropExpanded=!1,this._actionCropExpanded=!1,this._draggedBar=null,this._dropTargetBar=null,this._dropTargetIconRow=null,this._draggedSection=null,this._expandedSectionId=null,this._editorVersion="1.2.0-debug",this._activeIconTabs={},this._activeBarTabs={},this._gradientEditorKeys={},this._latestStopPositions={},this._dropTargetSection=null,this._dropTargetColumn=null}setConfig(e){if(!e)throw new Error("Invalid configuration");if(console.log(`[EDITOR VERSION] Ultra Vehicle Card Editor v${this._editorVersion}`),this.config=Object.assign({vehicle_image_type:"default",status_image_type:"none",layout_type:"single",formatted_entities:!1,show_location:!0,show_mileage:!0,show_car_state:!0,sections_order:["title","image","info"],bars:[],icon_rows:[]},e),this.config.sections_order&&!this.config.sections_order.includes("info")){const e=[...this.config.sections_order],t=e.indexOf("image");-1!==t?e.splice(t+1,0,"info"):e.unshift("info"),this.config.sections_order=e}this.config.section_styles||(this.config.section_styles={}),void 0===this.config.vehicle_image_width&&(this.config.vehicle_image_width=100),void 0===this.config.action_image_width&&(this.config.action_image_width=100),this._migrateToIndividualSections()}_migrateToIndividualSections(){if(!this.config.sections_order)return;let e=[...this.config.sections_order],t=!1;const i=e.indexOf("bars");if(-1!==i&&this.config.bars&&this.config.bars.length>0&&!e.some((e=>e.startsWith("bar_")))){const o=this.config.bars.map(((e,t)=>`bar_${t}`));e.splice(i,1,...o),t=!0}const o=e.indexOf("icons");if(-1!==o&&this.config.icon_rows&&this.config.icon_rows.length>0&&!e.some((e=>e.startsWith("icon_row_")))){const i=this.config.icon_rows.map((e=>`icon_row_${e.id}`));e.splice(o,1,...i),t=!0}t&&(this.config.sections_order=e)}async handleFileUpload(e,t){var i;const o=e.target,a=null===(i=o.files)||void 0===i?void 0:i[0];if(a)try{console.log("[UPLOAD] Starting direct API upload for",t);const e=new FormData;e.append("file",a);const i=await fetch("/api/image_upload",{method:"POST",headers:{Authorization:`Bearer ${this.hass.auth.data.access_token}`},body:e});if(!i.ok)throw new Error(`Failed to upload image: ${i.statusText}`);const o=await i.json();if(!o||!o.path)throw new Error("Invalid response from server: missing path");console.log("[UPLOAD] Image uploaded successfully, path:",o.path),this._updateConfig({[t]:o.path}),alert("Image uploaded successfully and stored as path (not base64)")}catch(e){console.error("[UPLOAD] Error:",e),alert(`Upload failed: ${e instanceof Error?e.message:"Unknown error"}`)}finally{o.value=""}}_getCleanConfig(){const e=Object.assign({},this.config);return e.bars&&e.bars.length>0&&(e.bars=e.bars.map((e=>{const t={entity:e.entity,bar_size:e.bar_size!==Ve.bar_size?e.bar_size:void 0,width:e.width!==Ve.width?e.width:void 0,bar_color:e.bar_color!==Ge.bar_color?e.bar_color:void 0,background_color:e.background_color!==Ge.background_color?e.background_color:void 0,border_color:e.border_color!==Ge.border_color?e.border_color:void 0,left_title_color:e.left_title_color!==Ge.left_title_color?e.left_title_color:void 0,left_text_color:e.left_text_color!==Ge.left_text_color?e.left_text_color:void 0,right_title_color:e.right_title_color!==Ge.right_title_color?e.right_title_color:void 0,right_text_color:e.right_text_color!==Ge.right_text_color?e.right_text_color:void 0,limit_indicator_color:e.limit_indicator_color!==Ge.limit_indicator_color?e.limit_indicator_color:void 0,left_title_size:e.left_title_size!==Ve.left_title_size?e.left_title_size:void 0,left_text_size:e.left_text_size!==Ve.left_text_size?e.left_text_size:void 0,right_title_size:e.right_title_size!==Ve.right_title_size?e.right_title_size:void 0,right_text_size:e.right_text_size!==Ve.right_text_size?e.right_text_size:void 0,alignment:e.alignment!==Ve.alignment?e.alignment:void 0,show_left:e.show_left!==Ve.show_left?e.show_left:void 0,show_right:e.show_right!==Ve.show_right?e.show_right:void 0};return e.limit_entity&&(t.limit_entity=e.limit_entity),e.left_title&&(t.left_title=e.left_title),e.left_entity&&(t.left_entity=e.left_entity),e.right_title&&(t.right_title=e.right_title),e.right_entity&&(t.right_entity=e.right_entity),!0===e.use_gradient&&(t.use_gradient=!0,e.gradient_display_mode!==Ve.gradient_display_mode&&(t.gradient_display_mode=e.gradient_display_mode),e.gradient_stops&&e.gradient_stops.length>0&&(t.gradient_stops=e.gradient_stops)),e.animation_type&&"none"!==e.animation_type?(t.animation_type=e.animation_type,e.animation_entity&&(t.animation_entity=e.animation_entity),e.animation_state&&(t.animation_state=e.animation_state)):e.action_animation&&"none"!==e.action_animation&&(t.action_animation=e.action_animation,e.action_animation_entity&&(t.action_animation_entity=e.action_animation_entity),e.action_animation_state&&(t.action_animation_state=e.action_animation_state)),Object.keys(t).forEach((e=>void 0===t[e]&&delete t[e])),t}))),e.bars&&0===e.bars.length&&delete e.bars,e.icon_rows&&0===e.icon_rows.length&&delete e.icon_rows,Object.keys(We).forEach((t=>{if(t in e){if(("vehicle_image_type"===t||"status_image_type"===t)&&"none"===e[t])return;e[t]===We[t]&&delete e[t]}})),e.title||delete e.title,e.location_entity||delete e.location_entity,!0===e.show_location&&delete e.show_location,e.mileage_entity||delete e.mileage_entity,!0===e.show_mileage&&delete e.show_mileage,e.car_state_entity||delete e.car_state_entity,!0===e.show_car_state&&delete e.show_car_state,e.section_styles&&(Object.keys(e.section_styles).forEach((t=>{const i=e.section_styles[t],o=i.marginTop||0,a=i.marginBottom||0;0===o&&0===a?delete e.section_styles[t]:(0===o&&delete i.marginTop,0===a&&delete i.marginBottom)})),0===Object.keys(e.section_styles).length&&delete e.section_styles),e}_updateConfig(e){const t=Object.assign(Object.assign({},this.config||{}),e);e.vehicle_image_type&&(e.vehicle_image_type!==this.config.vehicle_image_type&&(delete t.vehicle_image,delete t.vehicle_image_entity),console.log("Image config update:",{type:e.vehicle_image_type,image:t.vehicle_image?"present":"missing",entity:t.vehicle_image_entity})),e.status_image_type&&e.status_image_type!==this.config.status_image_type&&(delete t.status_image,delete t.status_image_entity,delete t.status_image_trigger_entity),this.config=t,this.requestUpdate(),this._configChangedTimeout&&clearTimeout(this._configChangedTimeout),this._configChangedTimeout=window.setTimeout((()=>{const e=this._getCleanConfig(),t=new CustomEvent("config-changed",{detail:{config:e},bubbles:!0,composed:!0,cancelable:!0});this.dispatchEvent(t)}),50)}_valueChanged(e){const t=e.detail.value;Ce(this,"config-changed",{config:t})}_barValueChanged(e,t){var i,o,a;if(e.stopPropagation(),!this.config.bars||!this.config.bars[t])return;const n=JSON.parse(JSON.stringify(this.config)),r=null===(i=e.detail)||void 0===i?void 0:i.value;let s=!1,l=!1;const c=n.bars[t].use_gradient,d=n.bars[t].gradient_display_mode,p=n.bars[t].gradient_stops;if(r&&"object"==typeof r){const e=`bars.${t}.`;Object.entries(r).forEach((([i,o])=>{if(i.startsWith(e)){const a=i.substring(e.length);"use_gradient"===a&&(s=!0,l=!0,!0===o&&(console.log("Gradient mode turned ON"),(!n.bars[t].gradient_stops||n.bars[t].gradient_stops.length<2)&&(n.bars[t].gradient_stops=[{id:this._generateUniqueId(),position:0,color:"#ff0000"},{id:this._generateUniqueId(),position:50,color:"#ffff00"},{id:this._generateUniqueId(),position:100,color:"#00ff00"}],n.bars[t].gradient_display_mode||(n.bars[t].gradient_display_mode="value_based")))),("gradient_display_mode"===a||a.startsWith("gradient_"))&&(l=!0),a.includes("color")?Array.isArray(o)?n.bars[t][a]=`rgb(${o.join(", ")})`:"object"==typeof o&&null!==o?"r"in o&&"g"in o&&"b"in o?n.bars[t][a]=`rgb(${o.r}, ${o.g}, ${o.b})`:o.toString?n.bars[t][a]=o.toString():n.bars[t][a]=o:n.bars[t][a]=o:n.bars[t][a]=o}}))}else{const i=(null===(o=e.detail)||void 0===o?void 0:o.path)||(null===(a=e.detail)||void 0===a?void 0:a.name);i&&(i===`bars.${t}.use_gradient`&&(s=!0,l=!0,!0===r&&(!n.bars[t].gradient_stops||n.bars[t].gradient_stops.length<2)&&(n.bars[t].gradient_stops=[{id:this._generateUniqueId(),position:0,color:"#ff0000"},{id:this._generateUniqueId(),position:50,color:"#ffff00"},{id:this._generateUniqueId(),position:100,color:"#00ff00"}],n.bars[t].gradient_display_mode||(n.bars[t].gradient_display_mode="value_based"))),i.includes("gradient")&&(l=!0),this._setNestedValue(n,i,r))}c&&!s&&(n.bars[t].use_gradient=!0,d&&(n.bars[t].gradient_display_mode=d),p&&p.length>=2&&(n.bars[t].gradient_stops=p)),this._updateConfig(n),(l||c)&&this._fireForceGradientRefreshEvent(),s&&n.bars[t].use_gradient&&(this._expandedBar=t,setTimeout((()=>{this.requestUpdate()}),0))}_setNestedValue(e,t,i){const o=t.split(".");let a=e;for(let e=0;e<o.length-1;e++){const t=o[e];a[t]||(a[t]=isNaN(Number(o[e+1]))?{}:[]),a=a[t]}a[o[o.length-1]]=i}_toggleBarExpand(e){this._preventExpandCollapse?this._preventExpandCollapse=!1:this._expandedBar=this._expandedBar===e?null:e}_addBar(){const e=[...this.config.bars||[]],t=JSON.parse(JSON.stringify(Ve));e.push(t);const i=[...this.config.sections_order||["title","image","info"]],o=i.includes("bars"),a=i.some((e=>e.startsWith("bar_")));if(o);else if(a){const t="bar_"+(e.length-1);i.push(t)}else i.push("bars");Ce(this,"config-changed",{config:Object.assign(Object.assign({},this.config),{bars:e,sections_order:i})}),this._expandedBar=e.length-1}_duplicateBar(e){if(!this.config||!this.config.bars||e<0||e>=this.config.bars.length)return void console.warn("[Editor] Cannot duplicate bar: Invalid index or missing config.");const t=this.config.bars[e],i=JSON.parse(JSON.stringify(t));i.use_gradient&&Array.isArray(i.gradient_stops)&&(i.gradient_stops=i.gradient_stops.map((e=>Object.assign(Object.assign({},e),{id:this._generateUniqueId()}))),this._ensureGradientStops(i));const o=[...this.config.bars];o.splice(e+1,0,i);let a=[...this.config.sections_order||[]];const n=`bar_${e}`,r=a.indexOf(n);if(-1!==r){const t=`bar_${e+1}`;a.splice(r+1,0,t);for(let t=r+2;t<a.length;t++){const i=a[t];if(i.startsWith("bar_")){const o=parseInt(i.substring(4));o>=e+1&&(a[t]=`bar_${o+1}`)}}}else a.includes("bars")||a.push("bars");this._updateConfig({bars:o,sections_order:a})}_removeBar(e){const t=[...this.config.bars||[]];t.splice(e,1);const i=[...this.config.sections_order||[]],o=`bar_${e}`,a=i.indexOf(o);-1!==a&&i.splice(a,1);for(let t=0;t<i.length;t++){const o=i[t];if(o.startsWith("bar_")){const a=parseInt(o.substring(4));a>e&&(i[t]="bar_"+(a-1))}}Ce(this,"config-changed",{config:Object.assign(Object.assign({},this.config),{bars:t,sections_order:i})}),this._expandedBar===e?this._expandedBar=null:null!==this._expandedBar&&this._expandedBar>e&&(this._expandedBar=this._expandedBar-1)}_renderSettingsTab(){return H`
      <div class="tab-content">
        <!-- Card Title Section -->
        <div class="settings-section">
          <div class="section-header">Card Title</div>
          <div class="settings-content">
            <ha-form
              .hass=${this.hass}
              .data=${this.config}
              .schema=${[{name:"title",selector:{text:{}},label:"Card Title",description:"Title displayed at the top of the card (optional)"},{name:"title_alignment",selector:{select:{options:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],mode:"dropdown"}},label:"Title Alignment",description:"How to align the card title"}]}
              .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
              .computeDescription=${e=>e.description}
              @value-changed=${this._valueChanged}
            ></ha-form>

            <!-- Title Size with reset button -->
            <div class="size-fields-container" style="margin-top: 8px;">
              <div class="size-field">
                <ha-form
                  .hass=${this.hass}
                  .data=${this.config}
                  .schema=${[{name:"title_size",selector:{number:{mode:"box",unit:"px"}},label:"Title Size",description:"Size of the card title in pixels"}]}
                  .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
                  .computeDescription=${e=>e.description}
                  @value-changed=${this._valueChanged}
                ></ha-form>
                <ha-icon-button class="inline-reset-button" @click=${this._resetTitleSize}>
                  <ha-icon icon="mdi:refresh"></ha-icon>
                </ha-icon-button>
              </div>
            </div>
          </div>
        </div>

        <!-- Vehicle Information Section -->
        <div class="settings-section">
          <div class="section-header">Vehicle Information</div>
          <div class="settings-content">
            ${[[{name:"location_entity",selector:{entity:{}},label:"Location Entity",description:"Select the entity that provides the current location of your vehicle."},{name:"show_location",selector:{boolean:{}},label:"Show Location",description:"Display the vehicle location"}],[{name:"mileage_entity",selector:{entity:{}},label:"Mileage Entity",description:"Select the entity that represents the total mileage or odometer reading of your vehicle."},{name:"show_mileage",selector:{boolean:{}},label:"Show Mileage",description:"Display the vehicle mileage"}],[{name:"car_state_entity",selector:{entity:{}},label:"Car State Entity",description:"Select the entity that represents the current state of your vehicle (e.g., parked, driving, charging)."},{name:"show_car_state",selector:{boolean:{}},label:"Show Car State",description:"Display the vehicle state"}]].map((e=>H`
                <div class="vehicle-info-card">
                  <div class="vehicle-info-title">${e[0].label}</div>
                  <div class="vehicle-info-description">${e[0].description}</div>
                  <div class="vehicle-info-controls">
                    <div class="vehicle-info-entity">
                      <ha-form
                        .hass=${this.hass}
                        .data=${this.config}
                        .schema=${[e[0]]}
                        .computeLabel=${()=>""}
                        @value-changed=${this._valueChanged}
                      ></ha-form>
                    </div>
                    <div class="vehicle-info-toggle">
                      <ha-form
                        .hass=${this.hass}
                        .data=${this.config}
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
          <div class="section-header">Vehicle Image</div>
          <div class="image-description">
            Configure the primary image displayed for the vehicle.
          </div>
          <div class="settings-content">
            <ha-form
              class="config-form"
              .hass=${this.hass}
              .data=${this.config}
              .schema=${this._getImageSchema("vehicle")}
              .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
              .computeDescription=${e=>e.description}
              @value-changed=${this._valueChanged}
            ></ha-form>
            ${"upload"===this.config.vehicle_image_type?H`
                  <div class="upload-container" style="margin: 16px 0;">
                    <div class="file-upload-row">
                      <label class="file-upload-button">
                        <div class="button-content">
                          <span class="button-label">Choose File</span>
                          <input
                            type="file"
                            accept="image/*"
                            @change=${e=>this._handleImageUpload(e,"vehicle_image")}
                            id="vehicle-image-upload"
                            style="display: none;"
                          />
                        </div>
                      </label>

                      <div class="path-display">
                        ${this.config.vehicle_image?H`<span class="uploaded-path" title="${this.config.vehicle_image}">
                              ${this._truncatePath(this.config.vehicle_image)}
                            </span>`:H`<span class="no-file">No file chosen</span>`}
                      </div>
                    </div>
                  </div>
                `:""}
            ${this.config.vehicle_image_type&&"none"!==this.config.vehicle_image_type?H`
                  <div class="crop-accordion" style="margin-top: 16px;">
                    <div
                      class="crop-accordion-header"
                      @click=${()=>{this._vehicleCropExpanded=!this._vehicleCropExpanded,this.requestUpdate()}}
                    >
                      <span>Image Crop</span>
                      <ha-icon
                        icon="${this._vehicleCropExpanded?"mdi:chevron-up":"mdi:chevron-down"}"
                      ></ha-icon>
                    </div>
                    ${this._vehicleCropExpanded?H`
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
          <div class="section-header">Action Image</div>
          <div class="image-description">
            Optionally, display a different image when a specific entity reaches a certain state
            (e.g., show a charging image when the car is plugged in).
          </div>
          <div class="settings-content">
            <ha-form
              class="config-form"
              .hass=${this.hass}
              .data=${this.config}
              .schema=${this._getImageSchema("action")}
              .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
              .computeDescription=${e=>e.description}
              @value-changed=${this._valueChanged}
            ></ha-form>
            ${"upload"===this.config.action_image_type?H`
                  <div class="upload-container" style="margin: 16px 0;">
                    <div class="file-upload-row">
                      <label class="file-upload-button">
                        <div class="button-content">
                          <span class="button-label">Choose File</span>
                          <input
                            type="file"
                            accept="image/*"
                            @change=${e=>this._handleImageUpload(e,"action_image")}
                            id="action-image-upload"
                            style="display: none;"
                          />
                        </div>
                      </label>

                      <div class="path-display">
                        ${this.config.action_image?H`<span class="uploaded-path" title="${this.config.action_image}">
                              ${this._truncatePath(this.config.action_image)}
                            </span>`:H`<span class="no-file">No file chosen</span>`}
                      </div>
                    </div>
                  </div>
                `:""}
            ${this.config.action_image_type&&"none"!==this.config.action_image_type?H`
                  <div class="crop-accordion" style="margin-top: 16px;">
                    <div
                      class="crop-accordion-header"
                      @click=${()=>{this._actionCropExpanded=!this._actionCropExpanded,this.requestUpdate()}}
                    >
                      <span>Image Crop</span>
                      <ha-icon
                        icon="${this._actionCropExpanded?"mdi:chevron-up":"mdi:chevron-down"}"
                      ></ha-icon>
                    </div>
                    ${this._actionCropExpanded?H`
                          <div class="crop-controls">
                            ${this._renderCropSliders("action_image_crop")}
                          </div>
                        `:""}
                  </div>
                `:""}
          </div>
        </div>

        <!-- Card Settings Section -->
        <div class="settings-section">
          <div class="section-header">Card Settings</div>
          <div class="settings-content">
            ${[{name:"layout_type",selector:{select:{options:[{value:"single",label:"Single Column"},{value:"double",label:"Two Columns"}],mode:"dropdown"}},label:"Layout Type",description:"Choose between a single column or two-column layout"},{name:"formatted_entities",selector:{boolean:{}},label:"Format Entity Values",description:"Enable additional formatting of entity values (add commas, convert units, etc.)"},{name:"show_units",selector:{boolean:{}},label:"Show Units",description:"Display units of measurement alongside values"}].map((e=>{const t=e.selector&&"boolean"in e.selector;return H`
                <div class="vehicle-info-card">
                  <div class="vehicle-info-title">${e.label}</div>
                  ${e.description?H`<div class="vehicle-info-description">${e.description}</div>`:""}
                  <div class="${t?"toggle-form-container":"settings-content"}">
                    <ha-form
                      .hass=${this.hass}
                      .data=${this.config}
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
    `}_renderCustomizeTab(){const e=[{name:"layout_type",selector:{select:{options:Pe,mode:"dropdown"}},label:"Layout Style",description:"Choose between single column or two-column layout for the card"}];return H`
      <div class="tab-content">
        <div class="settings-section">
          <div class="section-header">Layout Settings</div>
          <div class="settings-content">
            <ha-form
              class="config-form layout-form"
              .hass=${this.hass}
              .data=${this.config}
              .schema=${e}
              .computeLabel=${e=>e.label||e.name}
              .computeDescription=${e=>e.description}
              @value-changed=${this._valueChanged}
            ></ha-form>
          </div>
        </div>

        <div class="settings-section">
          <div class="section-header">Card Sections</div>
          <div class="settings-content">
            <h4>Section Arrangement</h4>
            <p>
              Drag and drop sections to arrange their order on the card.
              ${"double"===this.config.layout_type?"In two-column layout, you can place all sections in either column.":"All sections will display in a single column."}
            </p>

            <div class="sections-container">${this._renderDraggableSections()}</div>
          </div>
        </div>

        <!-- Add the Global CSS section here -->
        ${this._renderGlobalCssSection()}
      </div>
    `}_renderBarsTab(){var e;return H`
      <div class="tab-content">
        <div class="section-header">Percentage Bars</div>

        <div class="bars-description">
          Add percentage bars to display values like fuel level, battery charge, or range. Each bar
          can display a main percentage value with optional left and right labels.
        </div>

        <div class="bars-container">
          ${(null===(e=this.config.bars)||void 0===e?void 0:e.map(((e,t)=>this._renderBar(e,t))))||""}
        </div>

        <div class="add-bar-container">
          <ha-button class="add-bar-button" @click=${this._addBar}>
            <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
            Add New Bar
          </ha-button>
        </div>
      </div>
    `}_truncateText(e,t=15){return e?e.length<=t?e:e.substring(0,t)+"...":""}_getFriendlyName(e){var t,i;return e&&this.hass&&this.hass.states[e]&&((null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||e.split(".").pop())||""}_renderBar(e,t){const i=this._expandedBar===t,o=this._draggedBarIndex===t,a=this._dropTargetIndex===t,n=this._getFriendlyName(e.entity),r=this._truncateText(n,20),s=this._activeBarTabs[t]||"config";return H`
      <div
        class="bar ${i?"expanded":""} ${o?"dragging":""} ${a?"drop-target":""}"
        draggable="true"
        @dragstart=${e=>this._handleDragStart(e,t)}
        @dragend=${this._handleDragEnd}
        @dragover=${e=>this._handleDragOver(e,t)}
        @dragleave=${this._handleDragLeave}
        @drop=${e=>this._handleDrop(e,t)}
      >
        <div class="bar-header" @click=${()=>this._toggleBarExpand(t)}>
          <div class="bar-title">
            <div class="drag-handle" @mousedown=${e=>this._preventExpandCollapse=!0}>
              <ha-icon icon="mdi:drag"></ha-icon>
            </div>
            Bar ${t+1}
            <span class="bar-entity">${r||"No entity selected"}</span>
          </div>
          <div class="bar-actions">
            <ha-icon-button
              title="Duplicate Bar"
              @click=${e=>{e.stopPropagation(),this._duplicateBar(t)}}
            >
              <ha-icon icon="mdi:content-copy"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              .path=${i?Fe:Me}
              @click=${e=>{e.stopPropagation(),this._toggleBarExpand(t)}}
            >
            </ha-icon-button>
            <ha-icon-button
              .path=${"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}
              @click=${e=>{e.stopPropagation(),this._removeBar(t)}}
            >
            </ha-icon-button>
          </div>
        </div>

        ${i?H`
              <div class="bar-content">
                <!-- Bar Settings Tabs -->
                <div class="bar-settings-tabs">
                  <div
                    class="bar-settings-tab ${"config"===s?"active":""}"
                    @click=${e=>this._setActiveBarTab(e,t,"config")}
                  >
                    Configuration
                  </div>
                  <div
                    class="bar-settings-tab ${"colors"===s?"active":""}"
                    @click=${e=>this._setActiveBarTab(e,t,"colors")}
                  >
                    Colors
                  </div>
                  <div
                    class="bar-settings-tab ${"animation"===s?"active":""}"
                    @click=${e=>this._setActiveBarTab(e,t,"animation")}
                  >
                    Animation
                  </div>
                </div>

                <!-- Tab Content -->
                <div class="bar-settings-content">
                  ${"config"===s?this._renderBarConfigurationTab(e,t):""}
                  ${"colors"===s?this._renderBarColorsTab(e,t):""}
                  ${"animation"===s?this._renderBarAnimationTab(e,t):""}
                </div>
              </div>
            `:""}
      </div>
    `}_renderBarConfigurationTab(e,t){const i=[{value:"flex-start",label:"Left"},{value:"center",label:"Center"},{value:"flex-end",label:"Right"}];return H`
      <!-- Main bar properties -->
      <div class="section-group">
        <div class="subsection-header">
          <span>Bar Configuration</span>
        </div>

        <ha-form
          .hass=${this.hass}
          .data=${this._prepareBarData(e,t)}
          .schema=${this._getMainBarSchema(t)}
          .computeLabel=${e=>e.label||e.name}
          .computeDescription=${e=>e.description}
          @value-changed=${e=>this._barValueChanged(e,t)}
        ></ha-form>
      </div>

      <!-- Left side properties -->
      <div class="section-group">
        <div class="subsection-header">
          <span>Left Side</span>
          <ha-switch
            .checked=${!1!==e.show_left}
            @change=${e=>this._updateBarProperty(t,"show_left",e.target.checked)}
            title="Show or hide the left side label of the bar"
          ></ha-switch>
        </div>

        ${!1!==e.show_left?H`
              <ha-form
                .hass=${this.hass}
                .data=${this._prepareBarData(e,t)}
                .schema=${this._getLeftSideSchema(t)}
                .computeLabel=${e=>e.label||e.name}
                .computeDescription=${e=>e.description}
                @value-changed=${e=>this._barValueChanged(e,t)}
              ></ha-form>

              <!-- Replace ha-select with ha-form for alignment -->
              ${!1===e.show_right?H`
                    <div class="alignment-control">
                      <ha-form
                        .hass=${this.hass}
                        .data=${{alignment:e.alignment||"flex-start"}}
                        .schema=${[{name:"alignment",selector:{select:{options:i,mode:"dropdown"}},label:"Alignment",description:"Controls how this label is aligned under the bar."}]}
                        @value-changed=${e=>{e.stopPropagation(),this._updateBarProperty(t,"alignment",e.detail.value.alignment)}}
                      ></ha-form>
                      <div class="helper-text">
                        Controls how this label is aligned under the bar.
                      </div>
                    </div>
                  `:""}

              <!-- Add Size Controls with Reset -->
              <div class="size-fields-container">
                <div class="size-field">
                  <ha-form
                    .hass=${this.hass}
                    .data=${this._prepareBarData(e,t)}
                    .schema=${this._getLeftTitleSizeSchema(t)}
                    .computeLabel=${e=>e.label||e.name}
                    .computeDescription=${e=>e.description}
                    @value-changed=${e=>this._barValueChanged(e,t)}
                  ></ha-form>
                  <ha-icon-button
                    class="inline-reset-button"
                    @click=${()=>this._resetBarSize(t,"left_title_size")}
                  >
                    <ha-icon icon="mdi:refresh"></ha-icon>
                  </ha-icon-button>
                </div>
                <div class="size-field">
                  <ha-form
                    .hass=${this.hass}
                    .data=${this._prepareBarData(e,t)}
                    .schema=${this._getLeftTextSizeSchema(t)}
                    .computeLabel=${e=>e.label||e.name}
                    .computeDescription=${e=>e.description}
                    @value-changed=${e=>this._barValueChanged(e,t)}
                  ></ha-form>
                  <ha-icon-button
                    class="inline-reset-button"
                    @click=${()=>this._resetBarSize(t,"left_text_size")}
                  >
                    <ha-icon icon="mdi:refresh"></ha-icon>
                  </ha-icon-button>
                </div>
              </div>
              <!-- End Size Controls -->
            `:H` <div class="side-disabled">Left side is hidden</div> `}
      </div>

      <!-- Right side properties -->
      <div class="section-group">
        <div class="subsection-header">
          <span>Right Side</span>
          <ha-switch
            .checked=${!1!==e.show_right}
            @change=${e=>this._updateBarProperty(t,"show_right",e.target.checked)}
            title="Show or hide the right side label of the bar"
          ></ha-switch>
        </div>

        ${!1!==e.show_right?H`
              <ha-form
                .hass=${this.hass}
                .data=${this._prepareBarData(e,t)}
                .schema=${this._getRightSideSchema(t)}
                .computeLabel=${e=>e.label||e.name}
                .computeDescription=${e=>e.description}
                @value-changed=${e=>this._barValueChanged(e,t)}
              ></ha-form>

              <!-- Replace ha-select with ha-form for alignment -->
              ${!1===e.show_left?H`
                    <div class="alignment-control">
                      <ha-form
                        .hass=${this.hass}
                        .data=${{alignment:e.alignment||"flex-start"}}
                        .schema=${[{name:"alignment",selector:{select:{options:i,mode:"dropdown"}},label:"Alignment",description:"Controls how this label is aligned under the bar."}]}
                        @value-changed=${e=>{e.stopPropagation(),this._updateBarProperty(t,"alignment",e.detail.value.alignment)}}
                      ></ha-form>
                      <div class="helper-text">
                        Controls how this label is aligned under the bar.
                      </div>
                    </div>
                  `:""}

              <!-- Add Size Controls with Reset -->
              <div class="size-fields-container">
                <div class="size-field">
                  <ha-form
                    .hass=${this.hass}
                    .data=${this._prepareBarData(e,t)}
                    .schema=${this._getRightTitleSizeSchema(t)}
                    .computeLabel=${e=>e.label||e.name}
                    .computeDescription=${e=>e.description}
                    @value-changed=${e=>this._barValueChanged(e,t)}
                  ></ha-form>
                  <ha-icon-button
                    class="inline-reset-button"
                    @click=${()=>this._resetBarSize(t,"right_title_size")}
                  >
                    <ha-icon icon="mdi:refresh"></ha-icon>
                  </ha-icon-button>
                </div>
                <div class="size-field">
                  <ha-form
                    .hass=${this.hass}
                    .data=${this._prepareBarData(e,t)}
                    .schema=${this._getRightTextSizeSchema(t)}
                    .computeLabel=${e=>e.label||e.name}
                    .computeDescription=${e=>e.description}
                    @value-changed=${e=>this._barValueChanged(e,t)}
                  ></ha-form>
                  <ha-icon-button
                    class="inline-reset-button"
                    @click=${()=>this._resetBarSize(t,"right_text_size")}
                  >
                    <ha-icon icon="mdi:refresh"></ha-icon>
                  </ha-icon-button>
                </div>
              </div>
              <!-- End Size Controls -->
            `:H` <div class="side-disabled">Right side is hidden</div> `}
      </div>
    `}_renderBarColorsTab(e,t){return H`
      <!-- Colors configuration -->
      <div class="section-group">${this._renderColorPickersGrid(e,t)}</div>

      <!-- Gradient toggle and editor -->
      <div class="section-group" @click=${e=>e.stopPropagation()}>
        <div class="subsection-header">
          <span>Gradient Mode</span>
        </div>
        <div style="padding: 16px;">
          <ha-form
            .hass=${this.hass}
            .data=${this._prepareBarData(e,t)}
            .schema=${this._getGradientToggleSchema(t)}
            .computeLabel=${e=>e.label||e.name}
            .computeDescription=${e=>e.description}
            @value-changed=${e=>{e.stopPropagation(),this._barValueChanged(e,t)}}
          ></ha-form>
        </div>
      </div>

      <!-- Only render the gradient editor if gradient mode is on -->
      ${e.use_gradient?this._renderGradientEditor(e,t):""}
    `}_renderBarAnimationTab(e,t){return H`
      <!-- Action Animation section -->
      <div class="section-group">
        <div class="subsection-header">
          <span>Action Animation</span>
        </div>
        <div
          class="action-animation-description"
          style="padding: 8px 16px; margin-bottom: 8px; color: var(--secondary-text-color);"
        >
          Add animations to the bar when a specific entity reaches a certain state. Perfect for
          showing charging status, alerting conditions, and more.
        </div>

        <div
          style="background: rgba(0,0,0,0.05); padding: 8px 16px; margin: 0 16px 16px; border-radius: 4px; color: var(--primary-text-color);"
        >
          <strong>Pro Tip:</strong> For "always on" animations, select an animation type but leave
          the entity and state fields empty. Try the "Bubbles" and "Fill" animations!
        </div>

        <ha-form
          .hass=${this.hass}
          .data=${this._prepareBarData(e,t)}
          .schema=${[{name:`bars.${t}.animation_entity`,selector:{entity:{}},label:"Animation Entity",description:"Entity that triggers the animation when it matches the specified state"}]}
          .computeLabel=${e=>e.label||e.name}
          .computeDescription=${e=>e.description}
          @value-changed=${e=>{this._barValueChanged(e,t),this.requestUpdate()}}
        ></ha-form>

        <!-- Entity State with dynamic options based on selected entity -->
        ${e.animation_entity||e.action_animation_entity?H`
              <ha-form
                .hass=${this.hass}
                .data=${this._prepareBarData(e,t)}
                .schema=${[{name:`bars.${t}.animation_state`,selector:{text:{}},label:"Entity State",description:"When the entity state equals this value, the animation will be triggered"}]}
                .computeLabel=${e=>e.label||e.name}
                .computeDescription=${e=>e.description}
                @value-changed=${e=>this._barValueChanged(e,t)}
              ></ha-form>
            `:H`
              <div style="padding: 0 16px 16px; color: var(--secondary-text-color);">
                Select an entity above to see available states
              </div>
            `}

        <ha-form
          .hass=${this.hass}
          .data=${this._prepareBarData(e,t)}
          .schema=${[{name:`bars.${t}.animation_type`,selector:{select:{options:je,mode:"dropdown"}},label:"Animation Type",description:"The animation effect to display when the entity state matches"}]}
          .computeLabel=${e=>e.label||e.name}
          .computeDescription=${e=>e.description}
          @value-changed=${e=>this._barValueChanged(e,t)}
        ></ha-form>
      </div>
    `}_setActiveBarTab(e,t,i){e.stopPropagation(),this._activeBarTabs=Object.assign(Object.assign({},this._activeBarTabs),{[t]:i})}_getMainBarSchema(e){return[{name:`bars.${e}.entity`,selector:{entity:{}},label:"Bar Percentage Entity",description:"Select an entity that returns a percentage value (0-100). This controls the fill level of the bar."},{name:`bars.${e}.limit_entity`,selector:{entity:{}},label:"Limit Entity (optional)",description:"Optional: Add a vertical indicator line on the bar (e.g., charge limit for EV battery)."},{name:`bars.${e}.limit_indicator_color`,selector:{color:{type:"hex"}},label:"Limit Indicator Color",description:"Color of the vertical line that indicates the limit position on the bar. Changes to this will force a refresh of the card."},{name:`bars.${e}.bar_size`,selector:{select:{options:Be,mode:"dropdown"}},label:"Bar Size",description:"Set the thickness/height of the progress bar."},{name:`bars.${e}.width`,selector:{select:{options:Ne,mode:"dropdown"}},label:"Bar Width",description:"Set the width of the bar as a percentage of the card width."},{name:`bars.${e}.alignment`,selector:{select:{options:[{value:"space-between",label:"Space Between"},{value:"flex-start",label:"Left"},{value:"center",label:"Center"},{value:"flex-end",label:"Right"}],mode:"dropdown"}},label:"Label Alignment",description:"How to align the left and right labels relative to each other."}]}_getLeftSideSchema(e){return[{name:`bars.${e}.left_title`,selector:{text:{}},label:"Left Title",description:"Optional label to display on the left side below the bar."},{name:`bars.${e}.left_entity`,selector:{entity:{}},label:"Left Entity",description:"Entity whose value will be displayed on the left side of the bar."}]}_getRightSideSchema(e){return[{name:`bars.${e}.right_title`,selector:{text:{}},label:"Right Title",description:"Optional label to display on the right side below the bar."},{name:`bars.${e}.right_entity`,selector:{entity:{}},label:"Right Entity",description:"Entity whose value will be displayed on the right side of the bar."}]}_prepareBarData(e,t){const i={},o=e.left_title||(e.left_entity?this._getFriendlyName(e.left_entity):""),a=e.right_title||(e.right_entity?this._getFriendlyName(e.right_entity):""),n=Object.assign(Object.assign({},e),{left_title:o?this._truncateText(o):"",right_title:a?this._truncateText(a):""});return Object.entries(n).forEach((([e,o])=>{i[`bars.${t}.${e}`]=o})),i}_renderColorPickersGrid(e,t){return H`
      <div class="section-header">Colors</div>
      <div class="color-pickers-grid">
        ${[{name:"bar_color",label:"Bar Color",default:Ge.bar_color},{name:"background_color",label:"Background Color",default:Ge.background_color},{name:"border_color",label:"Border Color",default:Ge.border_color},{name:"limit_indicator_color",label:"Limit Indicator Color",default:Ge.limit_indicator_color},{name:"left_title_color",label:"Left Title Color",default:Ge.left_title_color},{name:"left_text_color",label:"Left Value Color",default:Ge.left_text_color},{name:"right_title_color",label:"Right Title Color",default:Ge.right_title_color},{name:"right_text_color",label:"Right Value Color",default:Ge.right_text_color}].map((i=>{const o=e[i.name]||i.default;return H`
            <div class="color-picker-item">
              <ultra-vehicle-color-picker
                .label=${i.label}
                .value=${o}
                @value-changed=${e=>{e.stopPropagation(),this._updateBarProperty(t,i.name,e.detail.value)}}
              ></ultra-vehicle-color-picker>
              <ha-icon-button
                class="color-reset-button"
                .path=${"M19,8L15,12H18A6,6 0 0,1 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20A8,8 0 0,0 20,12H23L19,8M6,12A6,6 0 0,1 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4A8,8 0 0,0 4,12H1L5,16L9,12H6Z"}
                @click=${()=>this._resetBarColor(t,i.name,i.default)}
                title="Reset to default color"
              ></ha-icon-button>
            </div>
          `}))}
      </div>
    `}_convertCssVariableToColor(e){if(!e)return"#000000";if("string"==typeof e&&e.includes("var(--")){if(e.includes("--text-primary-color"))return e.includes("#777777")?"#777777":e.includes("#000000")?"#000000":"#FFFFFF";if(e.includes("--primary-color"))return"#03A9F4";const t=e.match(/var\(--[\w-]+,\s*([^)]+)\)/);return t&&t[1]?t[1].trim():"#FFFFFF"}return e}_resetBarColor(e,t,i){const o=[...this.config.bars||[]];o[e]&&(o[e]=Object.assign(Object.assign({},o[e]),{[t]:i}),i===Ge[t]&&delete o[e][t],this._updateConfig({bars:o}),setTimeout((()=>{this.requestUpdate()}),10))}async _updateBarProperty(e,t,i){const o=JSON.parse(JSON.stringify(this.config));if(!o.bars||!o.bars[e])return;const a=o.bars[e].use_gradient,n=o.bars[e].gradient_display_mode,r=o.bars[e].gradient_stops;o.bars[e][t]=i,(t.includes("color")||"gradient_stops"===t)&&console.log(`Bar ${e} ${t} updated:`,JSON.stringify(o.bars[e][t])),"gradient_display_mode"===t?(o.bars[e].use_gradient=!0,console.log("Preserving gradient mode while updating display mode")):"use_gradient"===t&&!0===i?this._ensureGradientStops(o.bars[e]):"use_gradient"!==t&&a&&(o.bars[e].use_gradient=!0,n&&(o.bars[e].gradient_display_mode=n),r&&r.length>=2&&(o.bars[e].gradient_stops=r)),"gradient_stops"===t&&Array.isArray(i)&&(o.bars[e].gradient_stops=[...i].sort(((e,t)=>e.position-t.position)),o.bars[e].use_gradient=!0,this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1})),this._updateConfig(o),await this.updateComplete,("use_gradient"===t||"gradient_display_mode"===t||"gradient_stops"===t||t.includes("color")||a)&&[0,20,100].forEach((e=>{setTimeout((()=>{this._fireForceGradientRefreshEvent(),console.log(`[Editor] Fired gradient refresh for ${t} after ${e}ms delay`)}),e)}))}_fireForceGradientRefreshEvent(){const e=new CustomEvent("force-gradient-refresh",{bubbles:!0,composed:!0,detail:{timestamp:Date.now(),config:this.config}});this.dispatchEvent(e),document.dispatchEvent(new CustomEvent("force-card-update",{bubbles:!0,composed:!0})),console.log("[Editor] Fired force gradient refresh event with timestamp:",e.detail.timestamp)}_renderActionSchema(e){if(!e||!this.hass.states[e])return H``;this.hass.states[e].state;const t=this._getEntityStateOptions(e),i=H`
      <ha-form
        class="config-form action-state-form"
        .hass=${this.hass}
        .data=${this.config}
        .schema=${[{name:"action_state",selector:{select:{options:t,mode:"dropdown"}},label:"Action State",description:"Select the state that will trigger the action image."}]}
        .computeLabel=${e=>e.label||e.name}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;let o=H``;if(this.config.action_state){const e=[{name:"action_image_type",selector:{select:{options:Le,mode:"dropdown"}},label:"Action Image Type"}];"url"===this.config.action_image_type&&e.push({name:"action_image",selector:{text:{}},label:"Action Image URL"}),"entity"===this.config.action_image_type&&e.push({name:"action_image_entity",selector:{entity:{}},label:"Action Image Entity"}),this.config.action_image_type&&"none"!==this.config.action_image_type&&e.push({name:"action_image_width",selector:{number:{min:0,max:100,step:1,unit:"%",mode:"slider"}},label:"Image Width",description:"Adjust the width of the action image (height will adjust automatically)"}),o=H`
        <ha-form
          class="config-form action-image-type-form"
          .hass=${this.hass}
          .data=${this.config}
          .schema=${e}
          .computeLabel=${e=>e.label||e.name}
          @value-changed=${this._valueChanged}
        ></ha-form>

        <!-- File upload for Action Image if upload type is selected -->
        ${"upload"===this.config.action_image_type?H`
              <div class="upload-container">
                <label>Upload Action Image for "${this.config.action_state}" state</label>
                <input
                  type="file"
                  accept="image/*"
                  @change=${e=>this._handleActionImageUpload(e)}
                  style="width: 100%; margin-top: 8px;"
                />

                <div class="crop-accordion">
                  <div
                    class="crop-accordion-header"
                    @click=${()=>{this._actionCropExpanded=!this._actionCropExpanded,this.requestUpdate()}}
                  >
                    <span>Image Crop</span>
                    <ha-icon
                      icon="${this._actionCropExpanded?"mdi:chevron-up":"mdi:chevron-down"}"
                    ></ha-icon>
                  </div>

                  ${this._actionCropExpanded?H`
                        <div class="crop-controls">
                          ${this._renderCropSliders("action_image_crop")}
                        </div>
                      `:""}
                </div>
              </div>
            `:""}
      `}return H` <div class="action-content">${i} ${o}</div> `}_getEntityStateOptions(e){if(!e||!this.hass.states[e])return[];const t=this.hass.states[e];return t.attributes.options&&Array.isArray(t.attributes.options)?t.attributes.options.map((e=>({value:e,label:e}))):["binary_sensor","switch","light","input_boolean"].includes(e.split(".")[0])?[{value:"on",label:"On"},{value:"off",label:"Off"}]:e.includes("charging")||e.includes("charger")?[{value:"charging",label:"Charging"},{value:"not_charging",label:"Not Charging"},{value:"complete",label:"Complete"},{value:"disconnected",label:"Disconnected"}]:t.state?[{value:t.state,label:t.state}]:[]}async _handleActionImageUpload(e){const t=e.target;if(!t.files||!t.files[0])return;const o=t.files[0],a=this.config.action_entity||"",n=this.config.action_state||"";if(a&&n)try{console.log("[ACTION UPLOAD DEBUG] Starting upload to Home Assistant API");const{uploadImage:e}=await Promise.resolve().then(i.bind(i,381)),t=await e(this.hass,o);if(!t.success)throw new Error(t.error||"Failed to upload image");console.log("[ACTION UPLOAD DEBUG] Upload successful, path:",t.path);const r=JSON.parse(JSON.stringify(this.config));r.action_images||(r.action_images={}),r.action_images[a]||(r.action_images[a]={}),r.action_images[a][n]=t.path,this._updateConfig(r)}catch(e){console.error("[ACTION UPLOAD DEBUG] Error uploading file:",e),alert("Failed to upload image. Please try again or upload the image manually to the Media Library.")}}_renderIconsTab(){const e=this.config.icon_rows||[];return H`
      <div class="tab-content">
        <div class="description">
          Add icon rows to display multiple icons in your card. Each row can be configured with
          different settings.
          <strong>Note:</strong> Icon rows and section order can be rearranged in the Customize tab.
        </div>

        <div class="bar-list">
          ${e.map(((e,t)=>this._renderIconRow(e,t)))}

          <div class="add-bar-container">
            <ha-button class="add-bar-button" @click=${this._addIconRow}>
              <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
              Add Icon Row
            </ha-button>
          </div>
        </div>
      </div>
    `}_renderIconRow(e,t){const i=this._expandedIconRow===e.id;return H`
      <div class="bar ${i?"expanded":""}">
        <div class="bar-header" @click=${()=>this._toggleIconRowExpand(e.id)}>
          <div class="bar-title">
            Row ${t+1}
            <span class="bar-details">${e.width}% width</span>
          </div>
          <div class="bar-actions">
            <ha-icon-button
              title="Duplicate Row"
              @click=${t=>{t.stopPropagation(),this._duplicateIconRow(e.id)}}
            >
              <ha-icon icon="mdi:content-copy"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              title="Delete Row"
              @click=${t=>{t.stopPropagation(),this._removeIconRow(e.id)}}
            >
              <ha-icon icon="mdi:delete"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              @click=${t=>{t.stopPropagation(),this._toggleIconRowExpand(e.id)}}
            >
              <ha-icon icon="${i?"mdi:chevron-up":"mdi:chevron-down"}"></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        ${i?H`
              <div class="bar-content">
                <!-- Row configuration -->
                <div class="settings-section">
                  <div class="section-header">Row Settings</div>
                  <div class="settings-content">
                    <ha-form
                      .hass=${this.hass}
                      .data=${{width:e.width,alignment:e.alignment,spacing:e.spacing||"medium"}}
                      .schema=${[{name:"width",selector:{select:{options:[{value:"100",label:"100% (Full Width)"},{value:"75",label:"75% Width"},{value:"50",label:"50% Width"},{value:"25",label:"25% Width"}],mode:"dropdown"}},label:"Row Width",description:"Set the width of the icon row as a percentage of the card width"},{name:"alignment",selector:{select:{options:He,mode:"dropdown"}},label:"Icon Alignment",description:"How icons are positioned within the row"},{name:"spacing",selector:{select:{options:[{value:"none",label:"None"},{value:"small",label:"Small"},{value:"medium",label:"Medium"},{value:"large",label:"Large"}],mode:"dropdown"}},label:"Icon Spacing",description:"Amount of space between icons"}]}
                      .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
                      .computeDescription=${e=>e.description}
                      @value-changed=${t=>this._updateIconRowConfig(e.id,t.detail.value)}
                    ></ha-form>
                  </div>
                </div>

                <!-- Icons List -->
                <div class="settings-section">
                  <div class="section-header">Icons</div>
                  <div class="settings-content">
                    <div class="bar-list mini-bar-list">
                      ${e.icons.map(((t,i)=>this._renderIcon(e.id,t,i)))}
                    </div>

                    <div class="add-bar-container">
                      <ha-button class="add-icon-button" @click=${()=>this._addIcon(e.id)}>
                        <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
                        Add Icon
                      </ha-button>
                    </div>
                  </div>
                </div>
              </div>
            `:""}
      </div>
    `}_renderIcon(e,t,i){const o=this._expandedIcon&&this._expandedIcon.rowId===e&&this._expandedIcon.iconIndex===i,a=t.entity?this._getFriendlyName(t.entity):"",n=t.name||a||"Icon "+(i+1),r=this._truncateText(n,15),s=t.icon_inactive||"mdi:help-circle-outline",l=(t.icon_active,t.color_inactive||"var(--secondary-text-color)");t.color_active,this._activeIconTabs||(this._activeIconTabs={});const c=`${e}_${i}`;this._activeIconTabs[c]||(this._activeIconTabs[c]="general");const d=this._activeIconTabs[c];return H`
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
            <ha-icon icon="${s}" style="color: ${l};"></ha-icon>
          </div>
          <div class="bar-title">${r||"Unnamed Icon"}</div>
          <div class="bar-actions">
            <ha-icon-button
              @click=${t=>{t.stopPropagation(),t.preventDefault(),this._duplicateIcon(e,i)}}
              @mousedown=${e=>{e.stopPropagation(),e.preventDefault()}}
            >
              <ha-icon icon="mdi:content-copy"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              @click=${t=>{t.stopPropagation(),t.preventDefault(),this._removeIcon(e,i)}}
              @mousedown=${e=>{e.stopPropagation(),e.preventDefault()}}
            >
              <ha-icon icon="mdi:delete"></ha-icon>
            </ha-icon-button>
            <ha-icon-button
              @click=${t=>{t.stopPropagation(),this._toggleIconEdit(e,i)}}
            >
              <ha-icon icon="${o?"mdi:chevron-up":"mdi:chevron-down"}"></ha-icon>
            </ha-icon-button>
          </div>
        </div>

        ${o?H`
              <div class="mini-bar-content">
                <!-- Icon Settings Tabs -->
                <div class="icon-settings-tabs">
                  <div
                    class="icon-settings-tab ${"general"===d?"active":""}"
                    @click=${e=>{e.stopPropagation(),this._activeIconTabs[c]="general",this.requestUpdate()}}
                  >
                    General
                  </div>
                  <div
                    class="icon-settings-tab ${"appearance"===d?"active":""}"
                    @click=${e=>{e.stopPropagation(),this._activeIconTabs[c]="appearance",this.requestUpdate()}}
                  >
                    Appearance
                  </div>
                  <div
                    class="icon-settings-tab ${"states"===d?"active":""}"
                    @click=${e=>{e.stopPropagation(),this._activeIconTabs[c]="states",this.requestUpdate()}}
                  >
                    States
                  </div>
                </div>

                <!-- Tab Content -->
                <div class="icon-settings-content">
                  ${"general"===d?H`
                        <!-- General Settings -->
                        <div class="icon-settings-section">
                          <ha-form
                            .hass=${this.hass}
                            .data=${t}
                            .schema=${[{name:"entity",selector:{entity:{}},label:"Entity",description:"Entity that determines the icon state"},{name:"name",selector:{text:{}},label:"Name",description:"Custom name (uses entity name if empty)"},{name:"on_click_action",selector:{select:{options:qe,mode:"dropdown"}},label:"Click Action"},..."call-service"===t.on_click_action?[{name:"service",selector:{text:{}},label:"Service",description:"Enter a service in the format domain.service (e.g., button.press, light.turn_on)"},{name:"service_data",selector:{text:{multiline:!0}},label:"Service Data (JSON)",description:'Enter JSON data to pass to the service (e.g., {"entity_id": "light.kitchen"})'}]:[],..."perform-action"===t.on_click_action?[{name:"action",selector:{text:{multiline:!0}},label:"Action (JSON or service)",description:'Enter a service string (e.g., "light.turn_on") or a JSON object for complex actions'}]:[],..."navigate"===t.on_click_action?[{name:"navigation_path",selector:{text:{}},label:"Navigation Path",description:"Path to navigate to (e.g., /lovelace/0 or #popup for anchors)"}]:[],..."url"===t.on_click_action?[{name:"url",selector:{text:{}},label:"URL",description:"URL to open (will open in a new tab)"}]:[]]}
                            .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
                            .computeDescription=${e=>e.description}
                            @value-changed=${t=>{const o=t.detail.value;if(void 0!==o.service_data&&"string"==typeof o.service_data)try{o.service_data=JSON.parse(o.service_data||"{}")}catch(e){}if(void 0!==o.action&&"string"==typeof o.action)try{o.action=JSON.parse(o.action)}catch(e){}this._updateIconConfig(e,i,o)}}
                          ></ha-form>

                          <!-- Conditional Click Action Description -->
                          ${t.on_click_action?H`
                                <div class="click-action-description">
                                  ${"toggle"===t.on_click_action?H`
                                        <p>
                                          Toggles the entity's state when clicked (e.g., turns
                                          lights on/off).
                                        </p>
                                      `:""}
                                  ${"more-info"===t.on_click_action?H`
                                        <p>
                                          Opens the entity's more-info dialog with detailed controls
                                          and history.
                                        </p>
                                      `:""}
                                  ${"navigate"===t.on_click_action?H`
                                        <p>
                                          Navigates to another view in Home Assistant. Enter a path
                                          like "/lovelace/0" or an anchor like "#popup".
                                        </p>
                                      `:""}
                                  ${"url"===t.on_click_action?H` <p>Opens the specified URL in a new browser tab.</p> `:""}
                                  ${"call-service"===t.on_click_action?H`
                                        <p>
                                          Calls a Home Assistant service with optional service data.
                                          Format: "domain.service_name" (e.g., "light.turn_on").
                                        </p>
                                      `:""}
                                  ${"perform-action"===t.on_click_action?H`
                                        <p>
                                          Flexible action handling - accepts either a simple service
                                          string or a complex JSON object for advanced actions.
                                        </p>
                                      `:""}
                                  ${"location-map"===t.on_click_action?H`
                                        <p>
                                          Opens a map view showing the entity's location (for
                                          entities with location data).
                                        </p>
                                      `:""}
                                  ${"assist"===t.on_click_action?H` <p>Opens the Home Assistant voice assistant panel.</p> `:""}
                                  ${"none"===t.on_click_action?H`
                                        <p>No action will be performed when clicking this icon.</p>
                                      `:""}
                                </div>
                              `:""}
                        </div>
                      `:""}
                  ${"appearance"===d?H`
                        <!-- Appearance Settings -->
                        <div class="icon-settings-section">
                          <!-- General -->
                          <div class="settings-section">
                            <div class="section-header">General</div>
                            <div class="settings-content">
                              <ha-form
                                .hass=${this.hass}
                                .data=${t}
                                .schema=${[{name:"show_name",selector:{boolean:{}},label:"Show Name",description:"Display the entity name or custom name below/next to the icon"},{name:"show_state",selector:{boolean:{}},label:"Show State",description:"Display the current entity state value below/next to the icon"},{name:"show_units",selector:{boolean:{}},label:"Show Units",description:"Include the unit of measurement with the state value (e.g. °F, mph)"},...t.show_name||t.show_state?[{name:"text_position",selector:{select:{options:Je,mode:"dropdown"}},label:"Text Position",description:"Position of the text relative to the icon"}]:[]]}
                                .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
                                .computeDescription=${e=>e.description}
                                @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
                              ></ha-form>
                            </div>
                          </div>

                          <!-- Icon Appearance -->
                          <div class="settings-section">
                            <div class="section-header">Icon Appearance</div>
                            <div class="settings-content">
                              <ha-form
                                .hass=${this.hass}
                                .data=${t}
                                .schema=${[{name:"icon_size",selector:{number:{mode:"box",unit:"px"}},label:"Icon Size",description:"Size of the icon in pixels"},{name:"icon_background",selector:{select:{options:Xe,mode:"dropdown"}},label:"Icon Background",description:"Add a background shape behind the icon"}]}
                                .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
                                .computeDescription=${e=>e.description}
                                @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
                              ></ha-form>

                              <!-- Icon Background Color -->
                              ${t.icon_background&&"none"!==t.icon_background?H`
                                    <div class="color-picker-container" style="margin-top: 16px;">
                                      <div class="color-picker-header">
                                        <div class="color-picker-label">Icon Background Color</div>
                                      </div>
                                      <ultra-vehicle-color-picker
                                        .value=${t.icon_background_color||"var(--secondary-background-color)"}
                                        @value-changed=${t=>{this._updateIconConfig(e,i,{icon_background_color:t.detail.value})}}
                                      >
                                      </ultra-vehicle-color-picker>
                                    </div>
                                  `:""}
                            </div>
                          </div>

                          <!-- Container Appearance -->
                          <div class="settings-section">
                            <div class="section-header">Container Appearance</div>
                            <div class="settings-content">
                              <ha-form
                                .hass=${this.hass}
                                .data=${t}
                                .schema=${[{name:"vertical_alignment",selector:{select:{options:Ke,mode:"dropdown"}},label:"Vertical Alignment",description:"How the icon is aligned vertically in the row"},{name:"container_width",selector:{select:{options:Ye,mode:"dropdown"}},label:"Container Width",description:"Set the width of the icon container as a percentage"},{name:"container_background",selector:{select:{options:Xe,mode:"dropdown"}},label:"Container Background",description:"Add a background shape behind the icon container"}]}
                                .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
                                .computeDescription=${e=>e.description}
                                @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
                              ></ha-form>

                              <!-- Container Background Color -->
                              ${t.container_background&&"none"!==t.container_background?H`
                                    <div class="color-picker-container" style="margin-top: 16px;">
                                      <div class="color-picker-header">
                                        <div class="color-picker-label">
                                          Container Background Color
                                        </div>
                                        <ha-icon-button
                                          @click=${()=>this._resetIconAppearanceColor(e,i,"container_background_color")}
                                        >
                                          <ha-icon icon="mdi:refresh"></ha-icon>
                                        </ha-icon-button>
                                      </div>
                                      <ultra-vehicle-color-picker
                                        .value=${t.container_background_color||"var(--secondary-background-color)"}
                                        @value-changed=${t=>{this._updateIconConfig(e,i,{container_background_color:t.detail.value})}}
                                      >
                                      </ultra-vehicle-color-picker>
                                    </div>
                                  `:""}
                            </div>
                          </div>

                          <!-- Text Appearance -->
                          ${t.show_name||t.show_state?H`
                                <div class="settings-section">
                                  <div class="section-header">Text Appearance</div>
                                  <div class="settings-content">
                                    <div class="size-fields-container">
                                      <div class="size-field">
                                        <ha-form
                                          .hass=${this.hass}
                                          .data=${t}
                                          .schema=${[{name:"text_size",selector:{number:{mode:"box",unit:"px"}},label:"Text Size",description:"Size of the text in pixels"}]}
                                          .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
                                          .computeDescription=${e=>e.description}
                                          @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
                                        ></ha-form>
                                        <ha-icon-button
                                          class="inline-reset-button"
                                          @click=${()=>this._resetIconSize(e,i,"text_size")}
                                        >
                                          <ha-icon icon="mdi:refresh"></ha-icon>
                                        </ha-icon-button>
                                      </div>
                                    </div>

                                    <!-- Add Text Alignment Dropdown Here -->
                                    <ha-form
                                      .hass=${this.hass}
                                      .data=${t}
                                      .schema=${[{name:"text_alignment",selector:{select:{options:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}],mode:"dropdown"}},label:"Text Alignment",description:"Align the name and state text (left, center, right)"}]}
                                      .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
                                      .computeDescription=${e=>e.description}
                                      @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
                                    ></ha-form>
                                  </div>
                                </div>
                              `:""}
                        </div>
                      `:""}
                  ${"states"===d?H`
                        <!-- States Settings -->
                        <div class="icon-settings-section">
                          <!-- Active State Settings -->
                          <div class="state-settings-group">
                            <div class="subsection-header">
                              <span>Active State</span>
                            </div>
                            <ha-form
                              .hass=${this.hass}
                              .data=${t}
                              .schema=${[{name:"show_icon_active",selector:{boolean:{}},label:"Show Icon When Active",description:"Display the icon when the state is active"},{name:"active_template_mode",selector:{boolean:{}},label:"Template Mode",description:"Use a template to determine active state"},...t.active_template_mode?[{name:"active_template",selector:{text:{multiline:!0}},label:"Active State Template",description:"Jinja template that will evaluate the active state condition"}]:[{name:"active_state",selector:{text:{}},label:"Active State Value",description:"When the entity state matches this value, the icon will appear in its active state"}],{name:"icon_active",selector:{icon:{}},label:"Active Icon"}]}
                              .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
                              .computeDescription=${e=>e.description}
                              @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
                            ></ha-form>
                            <div class="color-picker-container">
                              <div class="color-picker-header">
                                <div class="color-picker-label">Active Icon Color</div>
                                <ha-icon-button
                                  @click=${()=>this._resetIconColor(e,i,"active")}
                                >
                                  <ha-icon icon="mdi:refresh"></ha-icon>
                                </ha-icon-button>
                              </div>
                              <ultra-vehicle-color-picker
                                .value=${t.color_active||"var(--primary-color)"}
                                @value-changed=${t=>this._updateIconConfig(e,i,{color_active:t.detail.value})}
                              ></ultra-vehicle-color-picker>
                            </div>

                            <!-- Conditional Active Name Color Picker -->
                            ${!1!==t.show_name?H`
                                  <div class="color-picker-container">
                                    <div class="color-picker-header">
                                      <div class="color-picker-label">Active Name Color</div>
                                      <ha-icon-button
                                        @click=${()=>this._resetIconNameColor(e,i,"active")}
                                      >
                                        <ha-icon icon="mdi:refresh"></ha-icon>
                                      </ha-icon-button>
                                    </div>
                                    <ultra-vehicle-color-picker
                                      .value=${t.name_color_active||"var(--primary-text-color)"}
                                      @value-changed=${t=>this._updateIconConfig(e,i,{name_color_active:t.detail.value})}
                                    ></ultra-vehicle-color-picker>
                                  </div>
                                `:""}

                            <!-- Conditional Active State Color Picker -->
                            ${!1!==t.show_state?H`
                                  <div class="color-picker-container">
                                    <div class="color-picker-header">
                                      <div class="color-picker-label">Active State Color</div>
                                      <ha-icon-button
                                        @click=${()=>this._resetIconStateColor(e,i,"active")}
                                      >
                                        <ha-icon icon="mdi:refresh"></ha-icon>
                                      </ha-icon-button>
                                    </div>
                                    <ultra-vehicle-color-picker
                                      .value=${t.state_color_active||"var(--primary-text-color)"}
                                      @value-changed=${t=>this._updateIconConfig(e,i,{state_color_active:t.detail.value})}
                                    ></ultra-vehicle-color-picker>
                                  </div>
                                `:""}
                          </div>

                          <!-- Inactive State Settings -->
                          <div class="state-settings-group">
                            <div class="subsection-header">
                              <span>Inactive State</span>
                            </div>
                            <ha-form
                              .hass=${this.hass}
                              .data=${t}
                              .schema=${[{name:"show_icon_inactive",selector:{boolean:{}},label:"Show Icon When Inactive",description:"Display the icon when the state is inactive"},{name:"inactive_template_mode",selector:{boolean:{}},label:"Template Mode",description:"Use a template to determine inactive state"},...t.inactive_template_mode?[{name:"inactive_template",selector:{text:{multiline:!0}},label:"Inactive State Template",description:"Jinja template that will evaluate the inactive state condition"}]:[{name:"inactive_state",selector:{text:{}},label:"Inactive State Value",description:"When the entity state matches this value, the icon will appear in its inactive state"}],{name:"icon_inactive",selector:{icon:{}},label:"Inactive Icon"}]}
                              .computeLabel=${e=>e.label||this._formatFieldName(e.name)}
                              .computeDescription=${e=>e.description}
                              @value-changed=${t=>this._updateIconConfig(e,i,t.detail.value)}
                            ></ha-form>
                            <div class="color-picker-container">
                              <div class="color-picker-header">
                                <div class="color-picker-label">Inactive Icon Color</div>
                                <ha-icon-button
                                  @click=${()=>this._resetIconColor(e,i,"inactive")}
                                >
                                  <ha-icon icon="mdi:refresh"></ha-icon>
                                </ha-icon-button>
                              </div>
                              <ultra-vehicle-color-picker
                                .value=${t.color_inactive||"var(--secondary-text-color)"}
                                @value-changed=${t=>this._updateIconConfig(e,i,{color_inactive:t.detail.value})}
                              ></ultra-vehicle-color-picker>
                            </div>

                            <!-- Conditional Inactive Name Color Picker -->
                            ${!1!==t.show_name?H`
                                  <div class="color-picker-container">
                                    <div class="color-picker-header">
                                      <div class="color-picker-label">Inactive Name Color</div>
                                      <ha-icon-button
                                        @click=${()=>this._resetIconNameColor(e,i,"inactive")}
                                      >
                                        <ha-icon icon="mdi:refresh"></ha-icon>
                                      </ha-icon-button>
                                    </div>
                                    <ultra-vehicle-color-picker
                                      .value=${t.name_color_inactive||"var(--primary-text-color)"}
                                      @value-changed=${t=>this._updateIconConfig(e,i,{name_color_inactive:t.detail.value})}
                                    ></ultra-vehicle-color-picker>
                                  </div>
                                `:""}

                            <!-- Conditional Inactive State Color Picker -->
                            ${!1!==t.show_state?H`
                                  <div class="color-picker-container">
                                    <div class="color-picker-header">
                                      <div class="color-picker-label">Inactive State Color</div>
                                      <ha-icon-button
                                        @click=${()=>this._resetIconStateColor(e,i,"inactive")}
                                      >
                                        <ha-icon icon="mdi:refresh"></ha-icon>
                                      </ha-icon-button>
                                    </div>
                                    <ultra-vehicle-color-picker
                                      .value=${t.state_color_inactive||"var(--secondary-text-color)"}
                                      @value-changed=${t=>this._updateIconConfig(e,i,{state_color_inactive:t.detail.value})}
                                    ></ultra-vehicle-color-picker>
                                  </div>
                                `:""}
                          </div>
                        </div>
                      `:""}
                </div>
              </div>
            `:""}
      </div>
    `}_addIconRow(){const e=[...this.config.icon_rows||[]],t=this._createDefaultIconRow();e.push(t);const i=[...this.config.sections_order||["title","image","info"]],o=i.includes("icons"),a=i.some((e=>e.startsWith("icon_row_")));if(o);else if(a){const e=`icon_row_${t.id}`;i.push(e)}else i.push("icons");this._updateConfig({icon_rows:e,sections_order:i}),this._expandedIconRow=t.id}_removeIconRow(e){const t=(this.config.icon_rows||[]).filter((t=>t.id!==e)),i=[...this.config.sections_order||[]],o=`icon_row_${e}`,a=i.indexOf(o);-1!==a&&i.splice(a,1),this._updateConfig({icon_rows:t,sections_order:i}),this._expandedIconRow===e&&(this._expandedIconRow=null),this._expandedIcon&&this._expandedIcon.rowId===e&&(this._expandedIcon=null)}_duplicateIconRow(e){if(!this.config||!this.config.icon_rows)return;const t=this.config.icon_rows.findIndex((t=>t.id===e));if(-1===t)return void console.warn(`[Editor] Could not find icon row with ID ${e} for duplication.`);const i=this.config.icon_rows[t],o=JSON.parse(JSON.stringify(i));o.id=this._generateUniqueId();const a=[...this.config.icon_rows];a.splice(t+1,0,o),this._updateConfig({icon_rows:a}),this._expandedIconRow=o.id,this.requestUpdate()}_duplicateIcon(e,t){if(!this.config||!this.config.icon_rows)return;const i=this.config.icon_rows.findIndex((t=>t.id===e));if(-1===i)return void console.warn(`[Editor] Could not find icon row with ID ${e} for icon duplication.`);const o=this.config.icon_rows[i];if(!o.icons||t<0||t>=o.icons.length)return void console.warn(`[Editor] Invalid icon index ${t} for row ${e}.`);const a=o.icons[t],n=JSON.parse(JSON.stringify(a)),r=[...this.config.icon_rows],s=[...o.icons];s.splice(t+1,0,n),r[i]=Object.assign(Object.assign({},o),{icons:s}),this._updateConfig({icon_rows:r})}_toggleIconRowExpand(e){this._expandedIconRow=this._expandedIconRow===e?null:e,this._expandedIcon&&this._expandedIcon.rowId===e&&null===this._expandedIconRow&&(this._expandedIcon=null)}_updateIconRowConfig(e,t){const i=[...this.config.icon_rows||[]],o=i.findIndex((t=>t.id===e));if(o>=0){console.log(`[EDITOR] Updating icon row ${e}:`,t);const a=i[o].alignment;i[o]=Object.assign(Object.assign({},i[o]),t),t.alignment&&t.alignment!==a&&console.log(`[EDITOR] Icon row alignment changed from ${a} to ${t.alignment}`),this._updateConfig({icon_rows:i}),setTimeout((()=>this.requestUpdate()),10)}}_addIcon(e){const t=JSON.parse(JSON.stringify(this.config));t.icon_rows||(t.icon_rows=[]);const i=t.icon_rows.findIndex((t=>t.id===e));if(i>=0){t.icon_rows[i].icons||(t.icon_rows[i].icons=[]),t.icon_rows[i].icons.push({entity:"",icon_inactive:"mdi:help-circle-outline",icon_active:"mdi:help-circle",color_inactive:"var(--secondary-text-color)",color_active:"var(--primary-color)",inactive_state:"off",show_state:!1,show_name:!0,name:"",on_click_action:"toggle",text_position:"bottom",vertical_alignment:"center",text_alignment:"center",icon_size:24,text_size:14,icon_background:"none",icon_background_color:"var(--secondary-background-color)",container_background:"none",container_background_color:"var(--secondary-background-color)",draggable:!0});const o=t.icon_rows[i].icons.length-1;this._updateConfig(t),setTimeout((()=>{this._expandedIcon={rowId:e,iconIndex:o},this.requestUpdate()}),50)}}_removeIcon(e,t){const i=JSON.parse(JSON.stringify(this.config));if(!i.icon_rows||!Array.isArray(i.icon_rows))return void console.warn("Cannot remove icon: icon_rows not found or not an array");const o=i.icon_rows.findIndex((t=>t.id===e));if(-1===o)return void console.warn(`Cannot remove icon: row with id ${e} not found`);const a=i.icon_rows[o];a.icons&&Array.isArray(a.icons)?t<0||t>=a.icons.length?console.warn(`Cannot remove icon: index ${t} out of bounds (0-${a.icons.length-1})`):(a.icons.splice(t,1),this._updateConfig(i),this._expandedIcon&&this._expandedIcon.rowId===e&&this._expandedIcon.iconIndex===t?this._expandedIcon=null:this._expandedIcon&&this._expandedIcon.rowId===e&&this._expandedIcon.iconIndex>t&&(this._expandedIcon={rowId:this._expandedIcon.rowId,iconIndex:this._expandedIcon.iconIndex-1}),this.requestUpdate()):console.warn("Cannot remove icon: icons array not found or not an array")}_toggleIconEdit(e,t){this._expandedIcon&&this._expandedIcon.rowId===e&&this._expandedIcon.iconIndex===t?this._expandedIcon=null:this._expandedIcon={rowId:e,iconIndex:t};const i=`${e}_${t}`;this._activeIconTabs[i]="general",this.requestUpdate()}_updateIconConfig(e,t,i){const o=JSON.parse(JSON.stringify(this.config));if(!o.icon_rows)return void(o.icon_rows=[]);const a=o.icon_rows.findIndex((t=>t.id===e));if(a>=0&&t>=0&&t<o.icon_rows[a].icons.length){const n=o.icon_rows[a].icons[t],r=n.text_position,s=n.vertical_alignment,l=n.icon_size,c=n.text_size;console.log(`[EDITOR] Updating icon ${e}/${t}:`,i),o.icon_rows[a].icons[t]=Object.assign(Object.assign({},o.icon_rows[a].icons[t]),i),i.text_position&&i.text_position!==r&&console.log(`[EDITOR] Text position changed from ${r||"default"} to ${i.text_position}`),i.vertical_alignment&&i.vertical_alignment!==s&&console.log(`[EDITOR] Vertical alignment changed from ${s||"default"} to ${i.vertical_alignment}`),i.icon_size&&i.icon_size!==l&&console.log(`[EDITOR] Icon size changed from ${l||"default"} to ${i.icon_size}`),i.text_size&&i.text_size!==c&&console.log(`[EDITOR] Text size changed from ${c||"default"} to ${i.text_size}`),this._updateConfig(o),this.requestUpdate()}}_getAlignmentLabel(e){const t=He.find((t=>t.value===e));return t?t.label:"Left"}_getSpacingValue(e){switch(e){case"none":return"0";case"small":return"8px";case"medium":default:return"16px";case"large":return"24px"}}_handleIconRowDragStart(e,t){this._draggedIconRow=t,e.dataTransfer&&(e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("application/ultra-vehicle-row",t))}_handleIconRowDragEnd(){this._draggedIconRow=null,this._dropTargetRow=null}_handleIconRowDragOver(e,t){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._draggedIconRow&&this._draggedIconRow!==t&&(this._dropTargetRow=t)}_handleIconRowDragLeave(){this._dropTargetRow=null}_handleIconRowDrop(e,t){var i;e.preventDefault();const o=null===(i=e.dataTransfer)||void 0===i?void 0:i.getData("application/ultra-vehicle-row");o&&o===this._draggedIconRow&&this._draggedIconRow!==t&&this._rearrangeIconRows(this._draggedIconRow,t),this._draggedIconRow=null,this._dropTargetRow=null}_handleIconDragStart(e,t,i){if(e.stopPropagation(),this._draggedIcon={rowId:t,iconIndex:i},e.dataTransfer){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("application/ultra-vehicle-icon",JSON.stringify({rowId:t,iconIndex:i}));const o=e.currentTarget;if(o){const t=o.getBoundingClientRect(),i=o.cloneNode(!0);i.style.width=`${t.width}px`,i.style.height=`${t.height}px`,i.style.opacity="0.85",i.style.position="absolute",i.style.top="-1000px",i.style.borderRadius="8px",i.style.backgroundColor="var(--card-background-color, #303030)",i.style.border="2px dashed var(--primary-color)",i.style.boxShadow="0 4px 8px rgba(0,0,0,0.2)",i.style.zIndex="9999",i.style.whiteSpace="nowrap",i.style.overflow="hidden";const a=i.querySelector(".mini-bar-header");a&&a instanceof HTMLElement&&(a.style.flexShrink="0",a.style.whiteSpace="nowrap",a.style.overflow="hidden",a.style.display="flex",a.style.alignItems="center"),document.body.appendChild(i),e.dataTransfer.setDragImage(i,20,20),setTimeout((()=>{document.body.contains(i)&&document.body.removeChild(i)}),300)}}console.log("Started dragging icon:",{rowId:t,iconIndex:i})}_handleIconDragEnd(e){e.stopPropagation(),this._draggedIcon=null,this._dropTargetIcon=null,console.log("Finished dragging icon")}_handleIconDragOver(e,t,i){var o;if(e.preventDefault(),e.stopPropagation(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._draggedIcon&&(this._draggedIcon.rowId!==t||this._draggedIcon.iconIndex!==i)){this._dropTargetIcon={rowId:t,iconIndex:i};const a=e.currentTarget,n=null===(o=this.shadowRoot)||void 0===o?void 0:o.querySelectorAll(".mini-bar");n&&([...n].forEach((e=>e.classList.remove("drop-target"))),a.classList.add("drop-target"))}console.log("Dragging over icon:",{rowId:t,iconIndex:i})}_handleIconDragLeave(e){e.stopPropagation(),this._dropTargetIcon=null,e.currentTarget.classList.remove("drop-target")}_handleIconDrop(e,t,i){var o,a,n;e.preventDefault(),e.stopPropagation(),console.log("Drop event on icon:",{rowId:t,iconIndex:i});try{const n=null===(o=e.dataTransfer)||void 0===o?void 0:o.getData("application/ultra-vehicle-icon");if(n&&this._draggedIcon){const{rowId:e,iconIndex:o}=JSON.parse(n);if(e===t&&o===i)return void console.log("Dropped on self, ignoring");console.log("Moving icon from",{fromRowId:e,fromIconIndex:o},"to",{rowId:t,iconIndex:i}),this._rearrangeIcons(e,o,t,i)}else console.log("No valid data in drop event:",null===(a=e.dataTransfer)||void 0===a?void 0:a.types)}catch(e){console.error("Error in icon drop handler:",e)}this._draggedIcon=null,this._dropTargetIcon=null;const r=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelectorAll(".mini-bar");r&&[...r].forEach((e=>e.classList.remove("drop-target"))),this.requestUpdate()}_rearrangeIcons(e,t,i,o){console.log(`Rearranging icons: from ${e}[${t}] to ${i}[${o}]`);const a=JSON.parse(JSON.stringify(this.config.icon_rows||[])),n=a.findIndex((t=>t.id===e)),r=a.findIndex((e=>e.id===i));if(-1===n||-1===r)return void console.error("Could not find source or destination row",{fromRowIndex:n,toRowIndex:r});const s=a[n],l=s.icons[t];l?(e===i?(console.log("Moving within same row",{from:t,to:o}),s.icons.splice(t,1),s.icons.splice(o,0,l)):(console.log("Moving between rows",{fromRow:e,toRow:i}),s.icons.splice(t,1),a[r].icons.splice(o,0,l)),this._updateConfig({icon_rows:a}),console.log("Rearrangement complete",a)):console.error("Could not find icon to move at index",t)}render(){return this.config?H`
      <div class="card-config">
        <div class="tabs">
          <div
            class="tab ${"settings"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="settings"}"
          >
            Settings
          </div>
          <div
            class="tab ${"bars"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="bars"}"
          >
            Bars
          </div>
          <div
            class="tab ${"icons"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="icons"}"
          >
            Icons
          </div>
          <div
            class="tab ${"customize"===this.activeTab?"active":""}"
            @click="${()=>this.activeTab="customize"}"
          >
            Customize
          </div>
        </div>

        ${"settings"===this.activeTab?this._renderSettingsTab():""}
        ${"bars"===this.activeTab?this._renderBarsTab():""}
        ${"icons"===this.activeTab?this._renderIconsTab():""}
        ${"customize"===this.activeTab?this._renderCustomizeTab():""}
      </div>
    `:J}static get styles(){return l`
      /* Base layout */
      .card-config {
        display: flex;
        flex-direction: column;
      }

      /* Tab navigation */
      .tabs {
        display: flex;
        margin-bottom: 16px;
      }
      .tab {
        padding: 8px 16px;
        cursor: pointer;
        border-bottom: 2px solid transparent;
      }
      .tab.active {
        border-bottom: 2px solid var(--primary-color);
      }

      /* Content sections */
      .tab-content,
      .section-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .settings-section {
        margin-bottom: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        overflow: hidden;
        background-color: var(--card-background-color, #212121);
      }

      .section-header {
        font-size: 1.1em;
        font-weight: 500;
        padding: 12px 16px;
        background-color: var(--secondary-background-color);
        color: var(--primary-text-color);
        margin-bottom: 0;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      }

      .settings-content {
        padding: 16px;
        display: grid;
        background-color: var(--primary-background-color);
      }

      /* Forms and inputs */
      ha-form {
        padding: 0;
        margin-bottom: 16px;
      }

      ha-form[.schema*='Card Title'] ha-selector {
        padding-bottom: 8px;
      }

      .mdc-select.mdc-select--filled {
        margin-bottom: 32px !important;
      }

      ha-selector {
        margin-bottom: 16px;
        --selector-label-spacing: 8px;
        --selector-padding: 8px 0;
      }

      ha-selector ha-slider {
        width: 100%;
      }

      ha-selector[data-name='vehicle_image_width'],
      ha-selector[data-name='action_image_width'] {
        margin-top: 16px;
        padding-bottom: 8px;
      }

      ha-select {
        width: 100%;
        margin: 8px 16px;
      }

      .upload-container {
        margin: 8px 0 16px 0;
        padding: 0 16px;
      }

      .image-preview {
        margin-top: 16px;
        max-width: 100%;
        border-radius: 8px;
        overflow: hidden;
      }

      .image-preview img {
        max-width: 100%;
        max-height: 200px;
        object-fit: contain;
      }

      /* Bar containers and items */
      .bars-description {
        color: var(--secondary-text-color);
        font-size: 0.8em;
        margin-bottom: 16px;
      }

      .bars-container,
      .bar-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
      }

      .bar-list {
        margin-top: 16px;
      }

      .mini-bar-list {
        margin-top: 8px;
      }

      /* Bar styling */
      .bar,
      .mini-bar {
        margin-bottom: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        background-color: var(--secondary-background-color);
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
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
      }

      .bar-entity,
      .bar-details {
        display: block;
        margin-left: 24px;
        max-width: 200px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        opacity: 0.7;
        font-size: 0.9em;
      }

      .bar-details {
        margin-left: 8px;
      }

      .bar-actions {
        display: flex;
        gap: 8px;
        flex-shrink: 0;
      }

      .bar-grip,
      .drag-handle {
        color: var(--secondary-text-color);
        margin-right: 8px;
        cursor: grab;
        display: flex;
        align-items: center;
        opacity: 0.7;
      }

      .bar-grip:hover,
      .drag-handle:hover,
      .draggable-section:hover .drag-handle {
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

      /* Add buttons */
      .add-bar-container {
        display: flex;
        justify-content: center;
        margin: 16px 0;
        width: 100%;
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
        --mdc-icon-color: var(--text-primary-color); /* Set the icon color variable */
      }

      ha-button.add-bar-button::part(button),
      ha-button.add-icon-button::part(button) {
        /* Remove forced white color to allow theme adaptation */
      }

      /* Section groups and subsections */
      .section-group {
        margin-bottom: 20px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        overflow: hidden;
        background-color: var(--card-background-color, #1c1c1c);
        padding: 16px;
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

      .side-disabled {
        padding: 16px;
        color: var(--secondary-text-color);
        font-style: italic;
        text-align: center;
      }

      .helper-text {
        color: var(--secondary-text-color);
        font-size: 0.8em;
        padding: 0 16px 16px;
      }

      .alignment-control {
        padding: 0 16px 16px;
        border-top: 1px solid var(--divider-color);
        margin-top: 8px;
        padding-top: 16px;
      }

      .alignment-control ha-form {
        padding: 0;
      }

      .section-group ha-form ha-form {
        padding: 0;
      }

      /* Color pickers */
      .color-pickers-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 16px;
        padding: 0 8px;
      }

      .color-picker-item {
        position: relative;
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        width: 100%;
      }

      .color-picker-item ultra-vehicle-color-picker {
        flex-grow: 1;
      }

      .color-reset-button {
        margin-left: 8px;
        --mdc-icon-size: 20px;
        color: var(--secondary-text-color);
        opacity: 0.8;
        align-self: center;
      }

      .color-reset-button:hover {
        opacity: 1;
        color: var(--primary-color);
      }

      .color-picker-container {
        margin-top: 16px;
      }

      .color-picker-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 4px;
      }

      .color-picker-label {
        font-weight: 500;
        margin-bottom: 4px;
      }

      .color-picker-content {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .color-preview {
        width: 32px;
        height: 32px;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      }

      /* Action content */
      .action-content {
        margin-top: 8px;
      }

      .action-content ha-form {
        margin-bottom: 24px;
      }

      /* Icon styles */
      .icon-rows-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 16px;
      }

      .icon-row {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
      }

      .icon-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px;
        cursor: pointer;
        transition: all 0.2s ease;
        border-radius: 4px;
      }

      .icon-container:hover {
        background: rgba(var(--rgb-primary-color), 0.1);
      }

      .icon-container ha-icon {
        font-size: 24px;
        margin-bottom: 4px;
      }

      .icon-label,
      .icon-state {
        text-align: center;
        max-width: 100%;
        width: 100%;
        overflow: visible;
        word-wrap: break-word;
        word-break: break-word;
        white-space: normal !important;
      }

      .icon-label {
        font-size: 0.85em;
        margin-top: 4px;
        margin-bottom: 2px;
      }

      .icon-state {
        font-size: 0.75em;
        color: var(--secondary-text-color);
      }

      /* Crop styles */
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
      }

      .crop-sliders {
        display: grid;
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .crop-slider {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .crop-label {
        min-width: 50px;
        margin-bottom: 4px;
        font-weight: 500;
      }

      .crop-value {
        min-width: 36px;
        text-align: right;
      }

      .crop-reset {
        display: flex;
        align-items: center;
        margin-top: 16px;
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

      .crop-input-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 8px;
        margin-bottom: 16px;
      }

      .crop-input-field {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
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

      /* Gradient editor */
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
        overflow: hidden; /* Ensure colors don't bleed outside */
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
      }

      .gradient-stops-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }

      .gradient-stop-row {
        display: grid;
        grid-template-columns: 40px 60px 1fr 60px auto;
        gap: 12px;
        align-items: center;
        padding: 12px;
        border-radius: 8px;
        border: 1px solid var(--divider-color);
        background: var(--card-background-color, rgba(0, 0, 0, 0.05));
      }

      .gradient-slider-container {
        width: 100%;
      }

      .gradient-stop-row.drop-target {
        background: var(--primary-color-lighten, rgba(var(--rgb-primary-color), 0.1));
        border-color: var(--primary-color);
      }

      .gradient-color-picker {
        width: 48px;
        height: 48px;
      }

      .position-label {
        min-width: 48px;
        text-align: center;
        font-weight: 500;
      }

      .drag-handle {
        cursor: grab;
        color: var(--secondary-text-color);
        display: flex;
        justify-content: center;
        width: 24px;
      }

      .gradient-stop-row:hover .drag-handle {
        color: var(--primary-text-color);
      }

      /* Drag and drop styles */
      .bar.dragging,
      .mini-bar.dragging,
      .draggable-section.dragging {
        opacity: 0.5;
        transform: scale(0.98);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        border: 1px dashed var(--primary-color);
        z-index: 10;
        background-color: var(--card-background-color, #fff);
      }

      .bar.drop-target,
      .mini-bar.drop-target,
      .gradient-stop-row.drop-target,
      .draggable-section.drag-over {
        border: 2px dashed var(--primary-color);
        background-color: rgba(var(--rgb-primary-color), 0.1);
        transform: translateY(-2px);
      }

      /* Draggable section styles */
      .draggable-sections-container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 16px;
      }

      .draggable-sections {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 8px;
        background-color: var(--card-background-color, rgba(0, 0, 0, 0.05));
        transition: all 0.2s ease;
        position: relative;
      }

      .draggable-sections.two-columns {
        flex-direction: row;
        flex-wrap: wrap;
      }

      .draggable-sections.two-columns .draggable-section {
        width: calc(50% - 4px);
        box-sizing: border-box;
      }

      .draggable-sections.two-columns .draggable-section[data-section='image'],
      .draggable-sections.two-columns .draggable-section[data-section='title'] {
        width: 100%;
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
        margin-bottom: 4px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        position: relative;
        z-index: 1;
        min-width: 120px;
        /* white-space: nowrap; */ /* Remove this */
        flex-grow: 1; /* Allow section to grow */
        cursor: pointer; /* Make the header clickable */
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

      .section-info {
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
        white-space: nowrap;
        flex-wrap: nowrap;
        overflow: hidden;
      }

      .section-info ha-icon {
        color: var(--primary-color);
      }

      /* Column styles */
      .column-headers {
        display: flex;
        justify-content: space-between;
        margin-bottom: 8px;
        gap: 16px;
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
      }

      .columns-wrapper {
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 100%;
      }

      .column-container {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 8px;
        min-height: 120px;
        padding: 8px;
        border: 1px solid var(--divider-color);
        border-radius: 0 0 8px 8px;
        background-color: var(--card-background-color, rgba(0, 0, 0, 0.05));
        transition: all 0.2s ease;
        position: relative;
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
        transform: scale(1.02);
        box-shadow: 0 0 10px rgba(var(--rgb-primary-color), 0.3);
        z-index: 1;
      }

      .column-container.left-column.column-drag-over {
        border-right-width: 1px;
      }

      .column-container.right-column.column-drag-over {
        border-left-width: 1px;
      }

      /* Card preview */
      .card-title {
        text-align: center;
      }

      .card-header {
        display: flex;
      }

      .card-header.left,
      .card-title.left {
        justify-content: flex-start;
        text-align: left;
      }

      .card-header.center,
      .card-title.center {
        justify-content: center;
        text-align: center;
      }

      .card-header.right,
      .card-title.right {
        justify-content: flex-end;
        text-align: right;
      }

      .description {
        font-size: 14px;
        color: var(--secondary-text-color);
        margin-bottom: 8px;
      }

      /* Utility classes */
      .instructions {
        color: var(--secondary-text-color);
        font-size: 0.9em;
        margin-bottom: 16px;
      }

      .row {
        margin-bottom: 16px;
        width: 100%;
      }

      .icon-state-section {
        margin-bottom: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        overflow: hidden;
        background-color: var(--card-background-color, rgba(255, 255, 255, 0.1));
      }

      .icon-state-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        background-color: var(--secondary-background-color);
        border-bottom: 1px solid var(--divider-color);
      }

      .icon-state-title {
        font-weight: 500;
        color: var(--primary-color);
      }

      .icon-state-preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 60px;
      }

      .icon-state-preview ha-icon {
        font-size: 24px;
        margin-bottom: 4px;
      }

      .icon-state-content {
        padding: 16px 24px;
      }

      .active-section {
        border-left: 3px solid var(--primary-color);
      }

      .inactive-section {
        border-left: 3px solid var(--secondary-text-color);
      }

      /* Form descriptions */
      ha-form .description {
        color: var(--secondary-text-color);
        font-size: 0.85em;
        margin-top: 2px;
        margin-bottom: 12px;
        padding: 0 8px;
        line-height: 1.3;
        width: 100%;
        display: block;
      }

      /* Make field labels more visible */
      ha-form mwc-formfield {
        font-weight: 500;
        color: var(--primary-text-color);
        margin-top: 8px;
      }

      /* File upload styles */
      .file-upload-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 8px;
      }

      .file-upload-button {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px 16px;
        background-color: var(--primary-color);
        color: var(--text-primary-color);
        border-radius: 4px;
        cursor: pointer;
        margin-bottom: 8px;
      }

      .file-upload-button ha-icon {
        margin-right: 8px;
      }

      .uploaded-image-preview {
        width: 100%;
        max-width: 300px;
        margin-top: 8px;
        border-radius: 4px;
        overflow: hidden;
        border: 1px solid var(--divider-color);
      }

      .uploaded-image-preview img {
        width: 100%;
        display: block;
      }

      /* Notification styles */
      .notification {
        position: fixed;
        top: 16px;
        right: 16px;
        padding: 12px 16px;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        max-width: 300px;
        animation: slide-in 0.3s ease-out;
      }

      @keyframes slide-in {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }

      .notification-info {
        background-color: var(--primary-color, #03a9f4);
        color: white;
      }

      .notification-success {
        background-color: var(--success-color, #4caf50);
        color: white;
      }

      .notification-warning {
        background-color: var(--warning-color, #ff9800);
        color: white;
      }

      .notification-error {
        background-color: var(--error-color, #f44336);
        color: white;
      }

      /* Icon Settings Tabs */
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

      /* Icon preview section */
      .icon-preview-section {
        display: flex;
        justify-content: space-around;
        margin-bottom: 16px;
        background: rgba(var(--rgb-primary-color), 0.05);
        border-radius: 8px;
        padding: 12px 8px;
      }

      .icon-state-preview {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px 16px;
        border-radius: 8px;
      }

      .icon-state-preview.active {
        background: rgba(var(--rgb-primary-color), 0.1);
      }

      .icon-state-preview.inactive {
        background: rgba(var(--rgb-secondary-text-color), 0.1);
      }

      .icon-state-preview ha-icon {
        font-size: 24px;
        margin-bottom: 8px;
      }

      .preview-name {
        font-size: 0.8em;
        opacity: 0.8;
      }

      .state-settings-group {
        margin-bottom: 20px;
        padding: 8px;
        border-radius: 4px;
        background: rgba(var(--rgb-primary-background-color), 0.5);
      }

      /* Responsive adjustments for mobile */
      @media (max-width: 460px) {
        .icon-settings-tabs {
          position: sticky;
          top: 0;
          background: var(--card-background-color);
          z-index: 1;
          padding-top: 4px;
        }

        .icon-settings-tab {
          padding: 6px 4px;
          font-size: 0.8em;
        }

        .icon-preview-section {
          flex-direction: column;
          gap: 12px;
          align-items: center;
        }

        .icon-state-preview {
          width: 100%;
          max-width: 120px;
        }

        .mini-bar-content {
          padding: 12px 8px;
        }

        .state-settings-group {
          padding: 4px;
          margin-bottom: 12px;
        }

        .color-picker-container {
          margin-top: 8px;
        }

        .color-picker-header {
          margin-bottom: 4px;
        }
      }

      /* Size Reset Buttons */
      .reset-buttons-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-top: 16px;
        padding: 0 8px;
      }

      .reset-button {
        flex: 1;
        min-width: 150px;
        font-size: 0.85em;
        padding: 4px 8px;
        --mdc-theme-primary: var(--secondary-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .reset-button:hover {
        --mdc-theme-primary: var(--primary-color);
      }

      .reset-icon {
        margin-right: 4px;
        font-size: 16px;
      }

      /* Size field with inline reset button */
      .size-fields-container {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 8px;
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

      .drag-handle {
        cursor: grab;
        display: flex;
        align-items: center;
        margin-right: 8px;
        color: var(--secondary-text-color);
      }

      .mini-bar {
        position: relative;
      }

      .mini-bar.drag-over:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 2px dashed var(--primary-color);
        pointer-events: none;
      }

      .gradient-editor-container {
        margin-top: 16px;
        padding: 8px;
        border-radius: 8px;
        background-color: rgba(0, 0, 0, 0.05);
      }

      .hass-error {
        color: var(--error-color);
        font-size: 0.8em;
        margin-top: 4px;
      }

      /* Styles for Bar Settings Tabs */
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
        padding: 0 4px; /* Add some padding if needed */
      }
      /* End Bar Settings Tabs Styles */

      /* Style for manually rendered descriptions */
      .form-item-container {
        /* Remove margin here, let the inner elements handle it */
      }
      .form-item-container ha-form {
        margin-bottom: 4px; /* Add small space after the form element */
      }
      .description {
        font-size: 14px;
        color: var(--secondary-text-color);
        padding: 0 8px; /* Match ha-form padding */
        margin-top: 8px; /* Remove the negative margin */
        margin-bottom: 16px; /* Add space after the description */
      }
      /* End Style for manually rendered descriptions */

      /* Vehicle information styles */
      .vehicle-info-card {
        margin-bottom: 16px;
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        background-color: var(--primary-background-color);
        overflow: hidden;
        padding: 0;
      }

      .vehicle-info-title {
        font-weight: 500;
        padding: 12px 16px 4px;
        color: var(--primary-color);
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

      .color-picker-container {
        margin-top: 16px;
      }

      ha-form [name='active_template'] textarea,
      ha-form [name='inactive_template'] textarea {
        min-height: 100px;
        font-family: monospace;
      }

      /* Style for the uploaded path span */
      .uploaded-path {
        font-size: 0.9em;
        color: var(--secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 250px; /* Adjust as needed */
        display: inline-block;
        vertical-align: middle;
      }

      .file-upload-row {
        display: flex;
        align-items: center;
        gap: 16px;
        width: 100%;
      }

      .path-container {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
      }

      .uploaded-path {
        font-size: 0.9em;
        color: var(--secondary-text-color);
        opacity: 0.9;
      }

      .file-upload-row {
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        margin-bottom: 16px;
      }

      .file-input-container {
        min-width: 120px;
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

      .no-file {
        color: var(--disabled-text-color);
        font-style: italic;
      }

      /* Add spacing for image descriptions */
      .image-description {
        padding: 4px 16px 12px 16px; /* T R B L padding */
        color: var(--secondary-text-color);
        font-size: 0.9em;
        line-height: 1.4;
      }

      .vehicle-info-toggle ha-form {
        margin-bottom: 0;
      }

      /* Reduce padding specifically for boolean toggle containers */
      .toggle-form-container {
        padding: 0 16px 16px; /* Reduce top padding */
      }

      .color-picker-container {
        margin-top: 16px;
      }

      /* Click Action Description styles */
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

      /* Add this style for color picker borders */
      ultra-vehicle-color-picker {
        border: 2px solid var(--primary-text-color);
        border-radius: 8px;
        overflow: hidden;
      }

      .color-picker-container {
        margin-top: 16px;
      }

      /* Improve spacing between form items */
      .settings-content ha-form {
        margin-bottom: 8px;
      }

      /* Add spacing between form items in the same form */
      ha-form > * {
        margin-bottom: 12px;
      }

      .margin-control ha-svg-icon {
        color: var(--secondary-text-color);
        width: 18px; /* Adjust size */
        height: 18px;
      }

      .margin-control ha-icon {
        color: var(--secondary-text-color);
        width: 18px; /* Adjust size */
        height: 18px;
      }

      /* New wrapper for section + controls */
      .section-actions {
         margin-left: auto; /* Push button to the right */
+        flex-shrink: 0; /* Prevent shrinking */
      }
    `}firstUpdated(){this._refreshEntityList(),document.addEventListener("click",(e=>{var t;(null===(t=this.shadowRoot)||void 0===t?void 0:t.contains(e.target))||(this._showEntityList=!1)})),this._loadCropperJS()}_refreshEntityList(){this.hass&&(this._entities=Object.keys(this.hass.states).map((e=>{var t,i;return{entity_id:e,friendly_name:(null===(i=null===(t=this.hass.states[e])||void 0===t?void 0:t.attributes)||void 0===i?void 0:i.friendly_name)||""}})))}_onEntityInputChange(e){const t=e.target,i=t.dataset.field||"";if(this._entityFilter=t.value,this._activeField=i,this._showEntityList=!0,i.includes(".")){const e=i.split(".");if("bars"===e[0]&&3===e.length){const i=parseInt(e[1]),o=e[2],a=[...this.config.bars||[]];a[i]&&(a[i]=Object.assign(Object.assign({},a[i]),{[o]:t.value}),this._updateConfig({bars:a}))}}else this._updateConfig({[i]:t.value})}_onEntityFocus(e,t){e.stopPropagation(),this._activeField=t,this._showEntityList=!0,this._entityFilter=e.target.value,this._refreshEntityList()}_getFilteredEntities(){if(!this._entityFilter||this._entityFilter.length<2)return this._entities.sort(((e,t)=>e.entity_id.localeCompare(t.entity_id))).slice(0,15);const e=this._entityFilter.toLowerCase();return this._entities.filter((t=>t.entity_id.toLowerCase().includes(e)||t.friendly_name.toLowerCase().includes(e))).sort(((t,i)=>{const o=t.entity_id.toLowerCase()===e,a=i.entity_id.toLowerCase()===e;if(o&&!a)return-1;if(!o&&a)return 1;const n=t.entity_id.toLowerCase().startsWith(e),r=i.entity_id.toLowerCase().startsWith(e);return n&&!r?-1:!n&&r?1:t.entity_id.localeCompare(i.entity_id)})).slice(0,15)}_selectEntity(e,t){if(e.includes(".")){const i=e.split(".");if("bars"===i[0]&&3===i.length){const e=parseInt(i[1]),o=i[2],a=[...this.config.bars||[]];a[e]&&(a[e]=Object.assign(Object.assign({},a[e]),{[o]:t}),this._updateConfig({bars:a}))}}else this._updateConfig({[e]:t});this._showEntityList=!1}_handleDragStart(e,t){if(this._draggedBarIndex=t,e.dataTransfer){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.toString());const i=e.currentTarget;if(i&&e.dataTransfer){const t=i.getBoundingClientRect(),o=i.cloneNode(!0);o.style.width=`${t.width}px`,o.style.opacity="0.7",o.style.position="absolute",o.style.top="-1000px",o.style.border="2px dashed var(--primary-color)",document.body.appendChild(o),e.dataTransfer.setDragImage(o,20,20),setTimeout((()=>{document.body.removeChild(o)}),100)}}}_handleDragEnd(){this._draggedBarIndex=null,this._dropTargetIndex=null}_handleDragOver(e,t){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),this._draggedBarIndex!==t&&(this._dropTargetIndex=t)}_handleDragLeave(){this._dropTargetIndex=null}_handleDrop(e,t){var i;e.preventDefault();const o=null===(i=e.dataTransfer)||void 0===i?void 0:i.getData("text/plain");if(o&&null!==this._draggedBarIndex){const e=parseInt(o);this._rearrangeBars(this._draggedBarIndex,e)}this._draggedBarIndex=null,this._dropTargetIndex=null}_rearrangeBars(e,t){const i=[...this.config.bars||[]];if(e<0||e>=i.length||t<0||t>=i.length)return void console.error("Invalid bar indexes for rearrangement",{fromIndex:e,toIndex:t,totalBars:i.length});const[o]=i.splice(e,1);i.splice(t,0,o),this._expandedBar===e?this._expandedBar=t:null!==this._expandedBar&&this._expandedBar>e&&(this._expandedBar=this._expandedBar-1),this._updateConfig({bars:i})}_createDefaultConfig(){return{type:"custom:ultra-vehicle-card",vehicle_image_type:"upload",status_image_type:"none",layout_type:"single",formatted_entities:!1,bars:[]}}async _handleFileInputChange(e){const t=e.target;if(!t.files||!t.files[0])return;const o=t.files[0];try{console.log("[UPLOAD DEBUG] Starting upload to Home Assistant API");const{uploadImage:e}=await Promise.resolve().then(i.bind(i,381)),t=await e(this.hass,o);if(!t.success)throw new Error(t.error||"Failed to upload image");if(!t.path)throw console.error("[UPLOAD DEBUG] Error: Upload successful but no path returned"),new Error("Upload successful but no path returned from server");console.log("[UPLOAD DEBUG] Upload successful, path:",t.path),this._updateConfig({vehicle_image:t.path,vehicle_image_type:"upload"}),console.log("[UPLOAD DEBUG] Updated config with new image path:",t.path)}catch(e){console.error("[UPLOAD DEBUG] Error uploading file:",e),alert("Error uploading image: "+(e instanceof Error?e.message:String(e)))}}_formatFieldName(e){return e.split("_").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ")}_createDefaultIconRow(){return{id:this._generateUniqueId(),width:"100",alignment:"space-between",spacing:"medium",icons:[]}}_createDefaultIcon(){return{entity:"",icon_inactive:"mdi:help-circle-outline",icon_active:"mdi:help-circle",color_inactive:"var(--secondary-text-color)",color_active:"var(--primary-color)",name_color_inactive:"var(--primary-text-color)",name_color_active:"var(--primary-text-color)",state_color_inactive:"var(--secondary-text-color)",state_color_active:"var(--primary-text-color)",inactive_state:"off",active_state:"on",inactive_template_mode:!1,active_template_mode:!1,inactive_template:"",active_template:"",show_state:!0,show_name:!1,show_units:!0,show_icon_active:!0,show_icon_inactive:!0,name:"",on_click_action:"toggle",text_position:"bottom",vertical_alignment:"center",text_alignment:"center",icon_size:24,text_size:14,icon_background:"none",icon_background_color:"var(--secondary-background-color)",container_background:"none",container_background_color:"var(--secondary-background-color)",draggable:!0}}_generateUniqueId(){return Math.random().toString(36).substring(2,9)}_rearrangeIconRows(e,t){const i=[...this.config.icon_rows||[]],o=i.findIndex((t=>t.id===e)),a=i.findIndex((e=>e.id===t));if(o>=0&&a>=0){const[e]=i.splice(o,1);i.splice(a,0,e),this._updateConfig({icon_rows:i})}}_createDefaultCropSettings(){return{top:0,right:0,bottom:0,left:0}}async _loadCropperJS(){if(window.cropperjs)return;const e=document.createElement("script");e.src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.min.js",e.async=!0;const t=document.createElement("link");t.rel="stylesheet",t.href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.12/cropper.min.css",document.head.appendChild(e),document.head.appendChild(t),await new Promise((t=>{e.onload=t})),window.cropperjs=window.Cropper}_renderImageCropper(){return this._cropperActive?H`
      <div class="cropper-overlay">
        <div class="cropper-container">
          <div class="cropper-header">
            <h3>Crop Image</h3>
            <ha-icon-button
              @click=${()=>{this._cropperActive=!1,this._cropperImage=""}}
            >
              <ha-icon icon="mdi:close"></ha-icon>
            </ha-icon-button>
          </div>
          <div class="cropper-body">
            <img
              src="${this._cropperImage}"
              id="crop-image"
              style="max-width: 100%; max-height: 60vh;"
            />
            <div class="cropper-instructions">
              Drag to create a crop area. Double-click to crop.
            </div>
          </div>
          <div class="cropper-footer">
            <ha-button
              @click=${()=>{this._cropperActive=!1,this._cropperImage=""}}
            >
              Cancel
            </ha-button>
            <ha-button @click=${this._applyCrop} class="primary"> Apply Crop </ha-button>
          </div>
        </div>
      </div>
    `:H``}_applyCrop(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("crop-image");if(!t||!window.cropperjs)return void(this._cropperActive=!1);const i=t.cropper;if(!i)return void(this._cropperActive=!1);const o=i.getCroppedCanvas({minWidth:256,minHeight:256,maxWidth:4096,maxHeight:4096,fillColor:"#fff",imageSmoothingEnabled:!0,imageSmoothingQuality:"high"}).toDataURL("image/png");if("vehicle_image"===this._cropperTargetField)this._updateConfig({vehicle_image:o});else if(this._cropperTargetField.startsWith("action_image_")){const[e,t,i]=this._cropperTargetField.split("_"),a=JSON.parse(JSON.stringify(this.config));a.action_images||(a.action_images={}),a.action_images[t]||(a.action_images[t]={}),a.action_images[t][i]=o,this._updateConfig(a)}this._cropperActive=!1,this._cropperImage=""}updated(e){super.updated(e),e.has("_cropperActive")&&this._cropperActive&&setTimeout((()=>{var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.getElementById("crop-image");t&&window.cropperjs&&new window.cropperjs(t,{aspectRatio:NaN,viewMode:1,dragMode:"crop",autoCrop:!0,background:!0,modal:!0,guides:!0,highlight:!0,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0})}),100)}_renderCropSliders(e){const t=this.config[e]||this._createDefaultCropSettings();return H`
      <div class="crop-input-row">
        <div class="crop-input-field">
          <span class="crop-label">Top</span>
          <ha-textfield
            type="number"
            .value=${t.top||0}
            @change=${t=>this._updateImageCrop(e,"top",parseInt(t.target.value)||0)}
          ></ha-textfield>
          <span class="crop-unit">px</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">Right</span>
          <ha-textfield
            type="number"
            .value=${t.right||0}
            @change=${t=>this._updateImageCrop(e,"right",parseInt(t.target.value)||0)}
          ></ha-textfield>
          <span class="crop-unit">px</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">Bottom</span>
          <ha-textfield
            type="number"
            .value=${t.bottom||0}
            @change=${t=>this._updateImageCrop(e,"bottom",parseInt(t.target.value)||0)}
          ></ha-textfield>
          <span class="crop-unit">px</span>
        </div>

        <div class="crop-input-field">
          <span class="crop-label">Left</span>
          <ha-textfield
            type="number"
            .value=${t.left||0}
            @change=${t=>this._updateImageCrop(e,"left",parseInt(t.target.value)||0)}
          ></ha-textfield>
          <span class="crop-unit">px</span>
        </div>
      </div>

      <div class="crop-explanation">
        <ha-icon icon="mdi:information-outline"></ha-icon>
        <span>Enter pixel values (positive or negative) to adjust cropping and padding</span>
      </div>
    `}_renderIconRows(){const{icon_rows:e=[]}=this.config;return e&&0!==e.length?H`
      <div class="icon-rows-container">${e.map((e=>this._renderCardIconRow(e)))}</div>
    `:H``}_renderCardIconRow(e){if(!e.icons||!e.icons.length)return H``;const t=e.width||"100",i=e.alignment||"space-between",o=e.spacing||"medium";return H`
      <div
        class="icon-row"
        style="width: ${t}%; justify-content: ${i}; gap: ${{none:"0",small:"8px",medium:"16px",large:"24px"}[o]||"16px"};"
      >
        ${e.icons.map((e=>this._renderCardIcon(e)))}
      </div>
    `}_renderCardIcon(e){if(!e.entity)return H``;const t=this.hass.states[e.entity];if(!t)return H``;const i=t.state!==e.inactive_state,o=i&&e.icon_active?e.icon_active:e.icon_inactive,a=i&&e.color_active?e.color_active:e.color_inactive,n=e.name||t.attributes.friendly_name||"";let r=t.state;const s=t.attributes.unit_of_measurement;if(this.config.formatted_entities&&r)if(isNaN(Number(r)))r=r.replace(/_/g," ").replace(/\b\w/g,(e=>e.toUpperCase()));else{const e=Number(r);(Math.abs(e)>=1e3||e%1!=0)&&(r=e.toLocaleString("en-US",{maximumFractionDigits:2,minimumFractionDigits:0}))}if(r&&e.show_state){const i=t.attributes.prefix||"",o=t.attributes.suffix||"";s&&e.show_units&&(r=`${r} ${s}`),r=`${i}${r}${o}`}const l=e.icon_size?`${e.icon_size}px`:"24px",c=e.text_size?`${e.text_size}px`:"14px",d={bottom:"column",top:"column-reverse",left:"row-reverse",right:"row"}[e.text_position||"bottom"],p=e.vertical_alignment||"center";return H`
      <div
        class="icon-container"
        @click=${()=>this._handleIconClick(e)}
        style="flex-direction: ${d}; align-items: ${p};"
      >
        <ha-icon
          .icon="${o||"mdi:help-circle-outline"}"
          style="color: ${a||"var(--primary-text-color)"}; font-size: ${l};"
        ></ha-icon>
        <div
          style="display: flex; flex-direction: column; align-items: center; font-size: ${c};"
        >
          ${e.show_name?H`<div
                class="icon-label"
                style="color: ${e.name_color_active||"var(--primary-text-color)"};"
              >
                ${n}
              </div>`:""}
          ${e.show_state?H`<div
                class="icon-state"
                style="color: ${i?e.state_color_active:e.state_color_inactive};"
              >
                ${r}
              </div>`:""}
        </div>
      </div>
    `}_resetIconStateColor(e,t,i){const o="active"===i?"state_color_active":"state_color_inactive",a="active"===i?"var(--primary-text-color)":"var(--secondary-text-color)";this._updateIconConfig(e,t,{[o]:a})}_truncatePath(e,t=40){if(e.length<=t)return e;const i=Math.floor(t/2),o=t-i-3;return`${e.substring(0,i)}...${e.substring(e.length-o)}`}_resetIconNameColor(e,t,i){const o="active"===i?"name_color_active":"name_color_inactive";this._updateIconConfig(e,t,{[o]:"var(--primary-text-color)"})}_resetIconStateColor(e,t,i){const o="active"===i?"state_color_active":"state_color_inactive",a="active"===i?"var(--primary-text-color)":"var(--secondary-text-color)";this._updateIconConfig(e,t,{[o]:a})}_getImageSchema(e){const t=`${e}_image_type`,i=`${e}_image`,o=`${e}_image_entity`,a=`${e}_image_width`,n=[{name:t,selector:{select:{options:[{value:"none",label:"None"},{value:"default",label:"Default"},{value:"upload",label:"Upload"},{value:"url",label:"URL"},{value:"entity",label:"Entity"}],mode:"dropdown"}},label:("vehicle"===e?"Vehicle":"Action")+" Image Type",description:`Select how to display the ${"vehicle"===e?"vehicle":"action"} image`}],r=this.config[t];return"url"===r?n.push({name:i,selector:{text:{}},label:"Image URL",description:"URL pointing to the image to display "+("vehicle"===e?"normally":"when the action state is met.")}):"entity"===r&&n.push({name:o,selector:{entity:{}},label:"Image Entity",description:`Entity whose state provides the URL for the ${"vehicle"===e?"normal":"action"} image.`}),r&&"none"!==r&&n.push({name:a,selector:{number:{min:0,max:100,step:1,mode:"box",suffix:"%"}},label:"Image Width",description:`Width of the ${"vehicle"===e?"vehicle":"action"} image as a percentage of card width`}),"action"===e&&n.push({name:"action_entity",selector:{entity:{}},label:"Action Entity",description:"Entity to monitor for the action state."},{name:"action_state",selector:{text:{}},label:"Action State",description:"State value that triggers the action image display."}),n}_handleImageUpload(e,t){this.handleFileUpload(e,t)}_resetIconColor(e,t,i){const o="active"===i?"color_active":"color_inactive",a="active"===i?"var(--primary-color)":"var(--secondary-text-color)";this._updateIconConfig(e,t,{[o]:a})}_resetIconAppearanceColor(e,t,i){const o=i;this._updateIconConfig(e,t,{[o]:"var(--secondary-background-color)"})}_resetIconSize(e,t,i){const o="icon_size"===i?24:12;this._updateIconConfig(e,t,{[i]:o})}_handleIconClick(e){console.log("Icon clicked:",e)}_updateImageCrop(e,t,i){const o=Object.assign({},this.config);o[e]||(o[e]={top:0,right:0,bottom:0,left:0}),o[e][t]=i,this._updateConfig(o)}_resetTitleSize(){this._updateConfig({title_size:void 0})}_resetBarSize(e,t){this.config.bars&&this.config.bars[e]&&(Object.assign({},this.config.bars[e])[t]=void 0,this._updateBarProperty(e,t,void 0))}_ensureGradientStops(e){(!e.gradient_stops||!Array.isArray(e.gradient_stops)||e.gradient_stops.length<2)&&(e.gradient_stops=[{id:"1",position:0,color:"#ff0000"},{id:"2",position:100,color:"#00ff00"}])}_renderDraggableSections(){const e=this.config.sections_order||["title","image","info"],t=this.config.layout_type||"single",i=this.config.section_styles||{},o={title:{label:"Title",icon:"mdi:format-title"},image:{label:"Vehicle Image",icon:"mdi:image"},info:{label:"Vehicle Info",icon:"mdi:information-outline"},bars:{label:"All Bars",icon:"mdi:chart-bar"},icons:{label:"All Icon Rows",icon:"mdi:view-grid-outline"}},a=e=>{var t,i,a;if(e.startsWith("bar_")){const i=parseInt(e.substring(4)),o=null===(t=this.config.bars)||void 0===t?void 0:t[i],a=(null==o?void 0:o.entity)?this._getFriendlyName(o.entity):`Bar ${i+1}`;return this._truncateText(a,20)}if(e.startsWith("icon_row_")){const t=e.substring(9),o=null===(i=this.config.icon_rows)||void 0===i?void 0:i.find((e=>e.id===t));return o?`Icon Row (${o.icons.length} icons)`:"Icon Row"}return(null===(a=o[e])||void 0===a?void 0:a.label)||e},n=(e,t)=>{const n=this._draggedSection===t,r=this._dropTargetSection===t,s=i[e]||{marginTop:0,marginBottom:0},l=this._expandedSectionId===e;return H`
        <div class="draggable-section-wrapper ${l?"expanded":""}">
          <div
            class="draggable-section ${n?"dragging":""} ${r?"drop-target":""}"
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
            <!-- Make section info clickable for toggle -->
            <div class="section-info" @click=${()=>this._toggleSectionExpand(e)}>
              <ha-icon icon="${(e=>{var t;return e.startsWith("bar_")?"mdi:chart-bar":e.startsWith("icon_row_")?"mdi:view-grid-outline":(null===(t=o[e])||void 0===t?void 0:t.icon)||"mdi:help-circle"})(e)}"></ha-icon>
              <span>${a(e)}</span>
            </div>
            <!-- Move actions (arrow) to the end -->
            <div class="section-actions">
              <ha-icon-button
                .path=${l?Fe:Me}
                @click=${()=>this._toggleSectionExpand(e)}
                title="${l?"Collapse":"Expand"} Margins"
              >
              </ha-icon-button>
            </div>
          </div>
          ${l?H`
                <div class="section-margin-controls">
                  <div class="margin-control">
                    <ha-icon .icon=${"mdi:format-vertical-align-top"} title="Top Margin"></ha-icon>
                    <ha-textfield
                      type="number"
                      .value=${String(s.marginTop||0)}
                      data-section-id=${e}
                      data-margin-type="marginTop"
                      @input=${this._updateSectionMargin}
                      min="0"
                      step="1"
                      suffix="px"
                    ></ha-textfield>
                  </div>
                  <div class="margin-control">
                    <ha-icon .icon=${"mdi:format-vertical-align-bottom"} title="Bottom Margin"></ha-icon>
                    <ha-textfield
                      type="number"
                      .value=${String(s.marginBottom||0)}
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
      `};if("double"===t){const t=e.filter((e=>"right"!==(this.config.sections_columns||{})[e])),i=e.filter((e=>"right"===(this.config.sections_columns||{})[e]));return H`
        <div class="column-headers">
          <div class="column-header">Left Column</div>
          <div class="column-header">Right Column</div>
        </div>
        <div class="columns-wrapper two-columns">
          <div
            class="column-container left-column ${"left"===this._dropTargetColumn?"column-drag-over":""}"
            @dragover=${e=>this._handleColumnDragOver(e,"left")}
            @dragleave=${this._handleColumnDragLeave}
            @drop=${e=>this._handleColumnDrop(e,"left")}
          >
            ${t.map(((t,i)=>n(t,e.indexOf(t))))}
            ${0===t.length?H`<div class="empty-column-message">Drop sections here</div>`:""}
          </div>
          <div
            class="column-container right-column ${"right"===this._dropTargetColumn?"column-drag-over":""}"
            @dragover=${e=>this._handleColumnDragOver(e,"right")}
            @dragleave=${this._handleColumnDragLeave}
            @drop=${e=>this._handleColumnDrop(e,"right")}
          >
            ${i.map(((t,i)=>n(t,e.indexOf(t))))}
            ${0===i.length?H`<div class="empty-column-message">Drop sections here</div>`:""}
          </div>
        </div>
      `}return H`
      <div class="draggable-sections single-column">
        ${e.map(((e,t)=>n(e,t)))}
      </div>
    `}_handleSectionDragStart(e,t){if(this._draggedSection=t,e.dataTransfer){e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",t.toString());const i=e.target;if(i&&e.dataTransfer){const t=i.getBoundingClientRect(),o=i.cloneNode(!0);o.style.width=`${t.width}px`,o.style.opacity="0.7",o.style.position="absolute",o.style.top="-1000px",o.style.border="1px dashed var(--primary-color)",document.body.appendChild(o),e.dataTransfer.setDragImage(o,e.offsetX,e.offsetY),setTimeout((()=>document.body.removeChild(o)),0)}}}_handleSectionDragEnd(){this._draggedSection=null,this._dropTargetSection=null,this._dropTargetColumn=null}_handleSectionDragOver(e,t){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move"),null!==this._draggedSection&&this._draggedSection!==t?this._dropTargetSection=t:this._dropTargetSection=null}_handleSectionDragLeave(){this._dropTargetSection=null}_handleSectionDrop(e,t){e.preventDefault(),null!==this._draggedSection&&this._draggedSection!==t&&this._rearrangeSections(this._draggedSection,t),this._handleSectionDragEnd()}_handleColumnDragOver(e,t){e.preventDefault(),null!==this._draggedSection&&(this._dropTargetColumn=t,e.dataTransfer&&(e.dataTransfer.dropEffect="move"))}_handleColumnDragLeave(){this._dropTargetColumn=null}_handleColumnDrop(e,t){if(e.preventDefault(),null!==this._draggedSection&&this._dropTargetColumn===t){const e=(this.config.sections_order||[])[this._draggedSection],i=Object.assign({},this.config.sections_columns||{});"right"===t?i[e]="right":delete i[e],this._updateConfig({sections_columns:i})}this._handleSectionDragEnd()}_rearrangeSections(e,t){const i=[...this.config.sections_order||[]],[o]=i.splice(e,1);i.splice(t,0,o),this._updateConfig({sections_order:i})}_toggleSectionExpand(e){this._expandedSectionId=this._expandedSectionId===e?null:e}_updateSectionMargin(e){const t=e.target,i=t.dataset.sectionId,o=t.dataset.marginType,a=parseInt(t.value||"0");if(!i||!o)return;const n=JSON.parse(JSON.stringify(this.config.section_styles||{}));n[i]?n[i]=Object.assign({},n[i]):n[i]={marginTop:0,marginBottom:0},0===a?(delete n[i][o],0===Object.keys(n[i]).length&&delete n[i]):n[i][o]=a;const r={};Object.keys(n).length>0?r.section_styles=n:r.section_styles=void 0,this._updateConfig(r)}_getLeftTitleSizeSchema(e){return[{name:`bars.${e}.left_title_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:"Title Size"}]}_getLeftTextSizeSchema(e){return[{name:`bars.${e}.left_text_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:"Value Size"}]}_getRightTitleSizeSchema(e){return[{name:`bars.${e}.right_title_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:"Title Size"}]}_getRightTextSizeSchema(e){return[{name:`bars.${e}.right_text_size`,selector:{number:{mode:"box",unit:"px",min:8,max:32}},label:"Value Size"}]}_getGradientToggleSchema(e){var t,i;return[{name:`bars.${e}.use_gradient`,selector:{boolean:{}},label:"Use Gradient",description:"Use a gradient for the progress bar instead of a solid color"},...(null===(i=null===(t=this.config.bars)||void 0===t?void 0:t[e])||void 0===i?void 0:i.use_gradient)?[{name:`bars.${e}.gradient_display_mode`,selector:{select:{options:[{value:"full",label:"Full"},{value:"value_based",label:"Value Based"}],mode:"dropdown"}},label:"Gradient Display Mode",description:"Full: Show entire gradient. Value Based: Show gradient up to current value."}]:[]]}_renderGradientEditor(e,t){this._ensureGradientStops(e);const i=e.gradient_stops||[],o=this._gradientEditorKeys[t]||0;return H`
      <div class="gradient-editor-section">
        <div class="gradient-header">
          <span>Gradient Editor</span>
          <ha-button @click=${()=>this._addGradientStop(t)} class="add-stop-button">
            <ha-icon icon="mdi:plus" class="add-icon"></ha-icon>
            Add Stop
          </ha-button>
        </div>
        <div
          class="gradient-preview"
          style="background: ${this._generateGradientPreview(i)};"
        ></div>
        <ultra-vehicle-gradient-editor
          .key=${o} /* Add key to force re-render when stops change */
          .stops=${i}
          @stop-changed=${e=>this._updateGradientStop(t,e.detail)}
          @stop-removed=${e=>this._removeGradientStop(t,e.detail.id)}
          @stops-rearranged=${e=>this._updateGradientStopsOrder(t,e.detail.stops)}
        ></ultra-vehicle-gradient-editor>
      </div>
    `}_addGradientStop(e){const t=JSON.parse(JSON.stringify(this.config.bars||[])),i=t[e];if(!i)return;this._ensureGradientStops(i);const o=i.gradient_stops||[],a=function(e){const t=[...e].sort(((e,t)=>e.position-t.position));if(t.length>=7)return console.warn("[GradientEditor] Max stops reached (7). Cannot add more."),null;const i=new Set(t.map((e=>e.id)));let o=-1;for(let e=3;e<=7;e++)if(!i.has(String(e))){o=e;break}if(-1===o)return console.warn("[GradientEditor] Could not find an available ID between 3 and 7."),null;let a=0,n=50,r=0;for(let e=0;e<t.length-1;e++){const i=t[e+1].position-t[e].position;i>a&&(a=i,n=t[e].position+i/2,r=e)}const s=ye(t[r].color)||{r:255,g:255,b:0},l=ye(t[r+1].color)||{r:0,g:255,b:0},c=Math.round(s.r+.5*(l.r-s.r)),d=Math.round(s.g+.5*(l.g-s.g)),p=Math.round(s.b+.5*(l.b-s.b)),h=`#${c.toString(16).padStart(2,"0")}${d.toString(16).padStart(2,"0")}${p.toString(16).padStart(2,"0")}`;return{id:String(o),position:Math.round(n),color:h}}(o);a&&(i.gradient_stops=[...o,a].sort(((e,t)=>e.position-t.position)),this._updateConfig({bars:t}),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}))}_updateGradientStop(e,t){const i=JSON.parse(JSON.stringify(this.config.bars||[])),o=i[e];o&&o.gradient_stops&&(o.gradient_stops=o.gradient_stops.map((e=>e.id===t.id?Object.assign(Object.assign({},e),t):e)),o.gradient_stops.sort(((e,t)=>e.position-t.position)),this._updateConfig({bars:i}),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}))}_removeGradientStop(e,t){const i=JSON.parse(JSON.stringify(this.config.bars||[])),o=i[e];!o||!o.gradient_stops||o.gradient_stops.length<=2||(o.gradient_stops=o.gradient_stops.filter((e=>e.id!==t)),this._updateConfig({bars:i}),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}))}_updateGradientStopsOrder(e,t){const i=JSON.parse(JSON.stringify(this.config.bars||[])),o=i[e];o&&(o.gradient_stops=t,this._updateConfig({bars:i}),this._gradientEditorKeys=Object.assign(Object.assign({},this._gradientEditorKeys),{[e]:(this._gradientEditorKeys[e]||0)+1}))}_generateGradientPreview(e){if(!e||e.length<2)return"linear-gradient(to right, #ccc, #ccc)";const t=[...e].sort(((e,t)=>e.position-t.position));return`linear-gradient(to right, ${t.map((e=>`${e.color} ${e.position}%`)).join(", ")})`}_renderGlobalCssSection(){return H`
      <div class="settings-section">
        <div class="section-header">Global CSS</div>
        <div class="settings-content">
          <p class="description">
            Enter custom CSS rules here to override the default card styles. These rules will be
            applied directly to the card. Use with caution.
          </p>
          <ha-form
            .hass=${this.hass}
            .data=${this.config}
            .schema=${[{name:"global_css",selector:{text:{multiline:!0,code_editor:"css"}},label:"Custom CSS",description:"Enter your custom CSS rules here."}]}
            .computeLabel=${()=>""} /* Hide default label */
            @value-changed=${this._valueChanged}
          ></ha-form>
        </div>
      </div>
    `}};Ue([ue({attribute:!1})],Ze.prototype,"hass",void 0),Ue([ue()],Ze.prototype,"config",void 0),Ue([me()],Ze.prototype,"activeTab",void 0),Ue([me()],Ze.prototype,"_showEntityList",void 0),Ue([me()],Ze.prototype,"_activeField",void 0),Ue([me()],Ze.prototype,"_entityFilter",void 0),Ue([me()],Ze.prototype,"_entities",void 0),Ue([me()],Ze.prototype,"_expandedBar",void 0),Ue([me()],Ze.prototype,"_preventExpandCollapse",void 0),Ue([me()],Ze.prototype,"_draggedBarIndex",void 0),Ue([me()],Ze.prototype,"_dropTargetIndex",void 0),Ue([me()],Ze.prototype,"_expandedIconRow",void 0),Ue([me()],Ze.prototype,"_expandedIcon",void 0),Ue([me()],Ze.prototype,"_draggedIconRow",void 0),Ue([me()],Ze.prototype,"_draggedIcon",void 0),Ue([me()],Ze.prototype,"_dropTargetRow",void 0),Ue([me()],Ze.prototype,"_dropTargetIcon",void 0),Ue([me()],Ze.prototype,"_cropperActive",void 0),Ue([me()],Ze.prototype,"_cropperImage",void 0),Ue([me()],Ze.prototype,"_cropperTargetField",void 0),Ue([me()],Ze.prototype,"_vehicleCropExpanded",void 0),Ue([me()],Ze.prototype,"_actionCropExpanded",void 0),Ue([ue()],Ze.prototype,"_draggedBar",void 0),Ue([ue()],Ze.prototype,"_dropTargetBar",void 0),Ue([ue()],Ze.prototype,"_dropTargetIconRow",void 0),Ue([me()],Ze.prototype,"_draggedSection",void 0),Ue([me()],Ze.prototype,"_expandedSectionId",void 0),Ue([me()],Ze.prototype,"_activeIconTabs",void 0),Ue([me()],Ze.prototype,"_activeBarTabs",void 0),Ue([me()],Ze.prototype,"_gradientEditorKeys",void 0),Ue([me()],Ze.prototype,"_dropTargetSection",void 0),Ue([me()],Ze.prototype,"_dropTargetColumn",void 0),Ze=Ue([pe("ultra-vehicle-card-editor")],Ze),window.customCards=window.customCards||[],window.customCards.push({type:"ultra-vehicle-card",name:"Ultra Vehicle Card",description:"A card that displays vehicle information with fuel/charge level, range, location, mileage, and a customizable icon grid.",preview:!0,documentationURL:"https://github.com/WJDDesigns/Ultra-Vehicle-Card",version:"2.0-Beta9"})})();